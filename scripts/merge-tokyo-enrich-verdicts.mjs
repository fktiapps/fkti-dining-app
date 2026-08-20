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

const km = (a, b, c, d) => {
  const R = 6371, r = x => x * Math.PI / 180;
  const dLat = r(c - a), dLng = r(d - b);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(r(a)) * Math.cos(r(c)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};
// A light pin is a neighbourhood centroid, so a few hundred metres of correction is
// exactly what enrichment is for. Kilometres are not a correction — they mean the
// shop found is not the shop the record was describing. 玉ひで moved 2.1km and 竹むら
// 3km onto shops that merely share a name, and keyword-matching the agent's note
// missed both. Distance catches them regardless of how the note is worded.
const DRIFT_KM = 1.5;

// The ORIGINAL light pin, read from the immutable shard inputs rather than from the
// record. Measuring drift against the record is self-defeating: the first run moves
// the pin, so every later run measures zero and the flag evaporates. The shard files
// are what the pin was before anyone touched it, and they never change.
const ORIG = new Map();
const SHARDS = 'data/_tokyo_enrich_shards';
for (const f of fs.existsSync(SHARDS) ? fs.readdirSync(SHARDS).filter(f => f.endsWith('.json')) : [])
  for (const r of JSON.parse(fs.readFileSync(`${SHARDS}/${f}`, 'utf8')))
    ORIG.set(r.id, [r.lat, r.lng]);

const verdicts = [];
for (const f of fs.existsSync(DIR) ? fs.readdirSync(DIR).filter(f => f.endsWith('.json')) : [])
  verdicts.push(...JSON.parse(fs.readFileSync(`${DIR}/${f}`, 'utf8')));
if (!verdicts.length) { console.log(`no verdicts in ${DIR}`); process.exit(0); }

const j = readCity('tokyo');
const byId = new Map(j.places.map(p => [p.id, p]));

const stats = { seen: verdicts.length, missing: 0, pinned: 0, rejected: 0, filled: 0 };
const identityQueue = [], existenceQueue = [], categoryQueue = [];

for (const e of verdicts) {
  const r = byId.get(e.id);
  if (!r) { stats.missing++; continue; }

  const oldLat = r.lat, oldLng = r.lng;

  // --- location -------------------------------------------------------
  // A low-confidence "precise" pin is a contradiction: shard 7 identified 竹むら
  // from a name and a 老舗 reputation with nothing tying it to the light record,
  // and landed a pin 3km away on a sweet shop where the record claimed a soba
  // shop. Moving a pin that far on a guess is worse than leaving the honest
  // approximation, so low confidence queues instead of applying.
  const trusted = e.enrich_confidence === 'high' || e.enrich_confidence === 'medium';
  if (e.loc_precise === true && (e.lat != null) && (e.lng != null) && !trusted) {
    existenceQueue.push({ id: r.id, name: r.name, status: 'low_confidence_pin',
      proposed: [e.lat, e.lng], note: e.enrich_note || '' });
  } else if (e.loc_precise === true && (e.lat != null) && (e.lng != null)) {
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

  const note = String(e.enrich_note || '');

  // --- category: the mom-and-pop layer is about the shop, not the diet --
  // That layer exists to surface the genuinely small and particular, so a
  // seven-branch corporate brand filed MOM_AND_POP is not a cosmetic mislabel —
  // it is the layer failing at the one thing it is for. The enrichment keeps
  // finding them (梅もと is owned by ちよだ鮨; dancyu食堂 is produced by President
  // Inc.; 石楽 is 1 of 46 restaurants run by 株式会社シナジー), so collect them.
  // Not auto-cleared: "is this shop a chain" is a judgement about the shop's
  // character, and the queue is where that judgement gets made.
  if (/CATEGORY FLAG/i.test(note)) {
    r.category_flag = { note: note.slice(0, 400), date: DATE, resolved: false };
    categoryQueue.push({ id: r.id, name: r.name, category: r.category,
      mom_and_pop: !!r.mom_and_pop, note: note.slice(0, 400) });
  }

  // --- existence: stamped only ----------------------------------------
  // SUBSTITUTION is its own category and the most dangerous one. Shard 6 found
  // the record's ときわ食堂 listed 閉店 and pointed the record at a surviving branch
  // 700m away; shard 7 moved 玉ひで 2.1km and 竹むら 3km onto shops sharing a name.
  // Each may well be right, but "the shop you meant is gone, here is another one"
  // is a decision for the owner, not a merge script — so it is surfaced rather
  // than buried among the ordinary confirmations.
  // A raised substitution flag is also sticky, so a human clearing it is the only
  // way it goes away — the same reasoning as the gate guard in apply-gf-audit.mjs.
  const o = ORIG.get(e.id) || [oldLat, oldLng];
  const drift = (e.loc_precise === true && e.lat != null && o[0] != null)
    ? km(o[0], o[1], e.lat, e.lng) : 0;
  const substituted = drift > DRIFT_KM ||
    r.existence?.status === 'substituted' ||
    /閉店|permanently closed|substitut|instead of|relocat/i.test(note);
  const status = /^NOT FOUND/i.test(note) ? 'not_found'
    : /^MISLOCATED/i.test(note) ? 'mislocated'
    : /^UNRESOLVED/i.test(note) ? 'unresolved'
    // "confirmed" is reserved for a high-confidence identification. Medium means
    // the agent found a plausible shop but could not tie it to the light record.
    : e.loc_precise === true ? (e.enrich_confidence === 'high' ? 'confirmed' : 'probable')
    : null;
  if (status) {
    r.existence = { status, checked: DATE, note: note.slice(0, 500) };
    if (substituted && (status === 'confirmed' || status === 'probable')) {
      r.existence.status = 'substituted';
      existenceQueue.push({ id: r.id, name: r.name, status: 'substituted',
        drift_km: Math.round(drift * 10) / 10, note: note.slice(0, 400) });
    } else if (status !== 'confirmed' && status !== 'probable') {
      existenceQueue.push({ id: r.id, name: r.name, status, note: note.slice(0, 400) });
    }
  }
}

if (APPLY) {
  writeCity('tokyo', j);
  fs.writeFileSync('data/_tokyo_identity_queue.json', JSON.stringify(identityQueue, null, 1));
  fs.writeFileSync('data/_tokyo_existence_queue.json', JSON.stringify(existenceQueue, null, 1));
  fs.writeFileSync('data/_tokyo_category_queue.json', JSON.stringify(categoryQueue, null, 1));
}

console.log(stats);
console.log(`still light (loc_approx): ${j.places.filter(p => p.loc_approx === 'block').length}`);
console.log(`\nname changes held for review: ${identityQueue.length}`);
identityQueue.forEach(q => console.log(`  ${q.confidence.padEnd(7)} ${q.from}  ->  ${q.to}`));
console.log(`\nchain-vs-mom-and-pop flags: ${categoryQueue.length}`);
categoryQueue.forEach(q => console.log(`  ${String(q.category).padEnd(12)} ${q.name.slice(0, 34)}`));
console.log(`\nexistence problems held for review: ${existenceQueue.length}`);
const byStatus = existenceQueue.reduce((a, q) => (a[q.status] = (a[q.status] || 0) + 1, a), {});
console.log(' ', JSON.stringify(byStatus));
if (!APPLY) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
