// Apply the deep-enrich verdicts that merge-tokyo3-enrich.mjs deliberately leaves alone:
// location, identity, and existence.
//
// merge-tokyo3-enrich.mjs handles content and GF tiers. It does NOT touch lat/lng,
// name, or loc_approx — and those are exactly what the light 3-mile tranche got
// wrong. Every tokyo3_* record carries a neighborhood-centroid pin and an
// unverified name; shard 0 alone produced two garbled names, one restaurant that
// is actually 600km away in Kagawa, and seven that no search could find.
//
// The three rules here follow from how bad each mistake is:
//
//   COORDINATES are applied automatically. A real address is strictly better than
//   a centroid guess, and a wrong one is caught by the metro-box check below —
//   the Kagawa record fails it by 150km.
//
//   NAMES are never applied automatically. Renaming a record changes which
//   business it claims to be. "大五 is a garbling of 醍醐" is a judgement call about
//   identity, and a wrong one silently attaches a Michelin shojin house's safety
//   evidence to whatever the original record actually was. Queued for the owner.
//
//   EXISTENCE verdicts are stamped, never acted on. NOT FOUND is the absence of
//   evidence, not evidence of absence — small Tokyo shops go unlisted. Deleting a
//   record on a failed search would repeat the mistake of the bulk existence
//   verifier that "confirmed" four invented shop names. Stamped and queued.
//
//   node scripts/merge-tokyo-enrich-verdicts.mjs [--apply]
import fs from 'node:fs';
import { readCity, writeCity } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');
const DATE = '2026-08-20';
const DIR = 'data/_tokyo_enrich_verdicts';

// Generous Greater-Tokyo box, not the tight display bounds: a real address on the
// edge of the 23 wards must pass, while a different prefecture must fail.
const BOX = { latMin: 35.45, latMax: 35.90, lngMin: 139.40, lngMax: 140.00 };
const inTokyo = (lat, lng) => Number.isFinite(lat) && Number.isFinite(lng) &&
  lat >= BOX.latMin && lat <= BOX.latMax && lng >= BOX.lngMin && lng <= BOX.lngMax;

const verdicts = [];
for (const f of fs.existsSync(DIR) ? fs.readdirSync(DIR).filter(f => f.endsWith('.json')) : [])
  verdicts.push(...JSON.parse(fs.readFileSync(`${DIR}/${f}`, 'utf8')));
if (!verdicts.length) { console.log(`no verdicts in ${DIR}`); process.exit(0); }

const j = readCity('tokyo');
const byId = new Map(j.places.map(p => [p.id, p]));

const stats = { seen: verdicts.length, missing: 0, pinned: 0, rejected: 0, filled: 0 };
const identityQueue = [], existenceQueue = [];

for (const e of verdicts) {
  const r = byId.get(e.id);
  if (!r) { stats.missing++; continue; }

  // --- location -------------------------------------------------------
  if (e.loc_precise === true && (e.lat != null) && (e.lng != null)) {
    if (inTokyo(e.lat, e.lng)) {
      r.lat = e.lat; r.lng = e.lng;
      r.loc_precise = true;
      delete r.loc_approx;
      if (e.address_ja) r.address_ja = e.address_ja;
      stats.pinned++;
    } else {
      // A precise pin outside Greater Tokyo means the record is not this city's.
      stats.rejected++;
      existenceQueue.push({ id: r.id, name: r.name, status: 'coords_outside_tokyo',
        proposed: [e.lat, e.lng], note: e.enrich_note || '' });
      r.existence = { status: 'outside_tokyo', checked: DATE, note: e.enrich_note || '' };
    }
  }

  // --- fields the content merge does not carry ------------------------
  for (const f of ['neighborhood', 'cuisine_type']) {
    if (e[f] && e[f] !== r[f]) { r[f] = e[f]; stats.filled++; }
  }
  if (e.enrich_note) r.enrich_note = e.enrich_note;

  // --- identity: proposed only ----------------------------------------
  // Punctuation is not identity. 「こまきしょくどう（鎌倉不識庵）」 and
  // 「こまきしょくどう 鎌倉不識庵」 are the same shop written two ways, and queueing
  // that for a human to adjudicate wastes the review on noise. Only a change that
  // survives normalisation is a real claim about which business this is.
  const norm = n => String(n).replace(/[\s　（）()「」【】・･,，]/g, '');
  if (e.name && e.name !== r.name && norm(e.name) === norm(r.name)) {
    r.name = e.name;
    stats.filled++;
  } else if (e.name && e.name !== r.name) {
    r.name_proposed = { to: e.name, from: r.name, by: 'tokyo deep-enrich', date: DATE,
      confidence: e.enrich_confidence || 'unknown', note: e.enrich_note || '',
      applied: false };
    identityQueue.push({ id: r.id, from: r.name, to: e.name,
      confidence: e.enrich_confidence || 'unknown', note: (e.enrich_note || '').slice(0, 400) });
  }

  // --- existence: stamped only ----------------------------------------
  const note = String(e.enrich_note || '');
  const status = /^NOT FOUND/i.test(note) ? 'not_found'
    : /^MISLOCATED/i.test(note) ? 'mislocated'
    : /^UNRESOLVED/i.test(note) ? 'unresolved'
    : e.loc_precise === true ? 'confirmed' : null;
  if (status) {
    r.existence = { status, checked: DATE, note: note.slice(0, 500) };
    if (status !== 'confirmed')
      existenceQueue.push({ id: r.id, name: r.name, status, note: note.slice(0, 400) });
  }
}

if (APPLY) {
  writeCity('tokyo', j);
  fs.writeFileSync('data/_tokyo_identity_queue.json', JSON.stringify(identityQueue, null, 1));
  fs.writeFileSync('data/_tokyo_existence_queue.json', JSON.stringify(existenceQueue, null, 1));
}

console.log(stats);
console.log(`still light (loc_approx): ${j.places.filter(p => p.loc_approx === 'block').length}`);
console.log(`\nname changes held for review: ${identityQueue.length}`);
identityQueue.forEach(q => console.log(`  ${q.confidence.padEnd(7)} ${q.from}  ->  ${q.to}`));
console.log(`\nexistence problems held for review: ${existenceQueue.length}`);
const byStatus = existenceQueue.reduce((a, q) => (a[q.status] = (a[q.status] || 0) + 1, a), {});
console.log(' ', JSON.stringify(byStatus));
if (!APPLY) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
