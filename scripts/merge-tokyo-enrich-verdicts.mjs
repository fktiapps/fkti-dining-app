// Apply the deep-enrich verdicts that merge-tokyo3-enrich.mjs deliberately leaves
// alone: location, identity, and existence.
//
// merge-tokyo3-enrich.mjs handles content and GF tiers. It does NOT touch lat/lng,
// name, or loc_approx — and those are exactly what the light 3-mile tranche got
// wrong. Every tokyo3_* record carries a neighbourhood-centroid pin and an
// unverified name.
//
// These three were originally queued for the owner. He asked for them to be
// resolved here instead ("You don't need me for name changes or existence
// problems - just solve them", 2026-08-20), so this now decides. The queues are
// still written, as the record of what was decided and why.
//
//   COORDINATES apply when the agent is confident. A Greater-Tokyo box rejects a
//   pin in another prefecture, and a move of more than 1.5km is treated as a
//   different shop rather than a corrected pin.
//
//   NAMES apply at high and medium confidence. Low confidence keeps the old name.
//
//   EXISTENCE decides visibility, never deletion. A record that cannot be found
//   is hidden from the app, not removed: NOT FOUND is the absence of evidence,
//   small Tokyo shops go unlisted, and one shard nearly wrote a record off on an
//   HTTP 429 that was the search engine declining to answer. Hiding is reversible
//   and keeps the research trail; deleting on a failed search is how the bulk
//   existence verifier "confirmed" four invented shop names.
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

// Only finished shards. Agents write incrementally to avoid losing a whole shard to
// an API drop, and those partials land in the same directory (_s5_part_a.json). A
// loose *.json glob reads half-written work now and double-counts it when the real
// s5.json arrives, so the filename must be exactly sN.json.
const FINISHED = /^s\d+\.json$/;
const verdicts = [];
const seenIds = new Set();
for (const f of fs.existsSync(DIR) ? fs.readdirSync(DIR).filter(f => FINISHED.test(f)) : []) {
  for (const v of JSON.parse(fs.readFileSync(`${DIR}/${f}`, 'utf8'))) {
    if (seenIds.has(v.id)) continue;   // a re-run shard supersedes nothing; first wins
    seenIds.add(v.id);
    verdicts.push(v);
  }
}
if (!verdicts.length) { console.log(`no verdicts in ${DIR}`); process.exit(0); }

const j = readCity('tokyo');
const byId = new Map(j.places.map(p => [p.id, p]));

const stats = { seen: verdicts.length, missing: 0, pinned: 0, rejected: 0, filled: 0, renamed: 0, hidden: 0, closed: 0 };
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
    // The light name is not a fact — it came out of a discovery sweep with no
    // source behind it. When the agent found the business and read its name off
    // the shop's own page, that name is better evidence than the sweep's guess.
    // Low confidence is not, so it keeps the old name and records the proposal.
    const apply = e.enrich_confidence === 'high' || e.enrich_confidence === 'medium';
    r.name_renamed = { to: e.name, from: r.name, by: 'tokyo deep-enrich', date: DATE,
      confidence: e.enrich_confidence || 'unknown', note: (e.enrich_note || '').slice(0, 400),
      applied: apply };
    if (apply) { r.name = e.name; stats.renamed++; }
    identityQueue.push({ id: r.id, from: r.name_renamed.from, to: e.name, applied: apply,
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

  // --- existence: decides visibility -----------------------------------
  // SUBSTITUTION is the category that needs naming. Shard 6 found the record's
  // ときわ食堂 listed 閉店 and pointed it at a surviving branch 700m away; 玉ひで moved
  // 4.4km and 竹むら 2.8km onto shops that merely share a name. The identification
  // is usually right, so the pin is kept — but the record now says openly that
  // this is a different shop from the one the sweep described.
  //
  // Drift is measured against the shard input, not the record: measured against
  // the record, the first run moves the pin and every later run sees zero. Once
  // raised the flag is sticky, for the same reason the GF gate guard is.
  const o = ORIG.get(e.id) || [oldLat, oldLng];
  const drift = (e.loc_precise === true && e.lat != null && o[0] != null)
    ? km(o[0], o[1], e.lat, e.lng) : 0;
  const substituted = drift > DRIFT_KM ||
    r.existence?.status === 'substituted' ||
    /substitut|instead of|relocat/i.test(note);

  // Prefer an explicit status from the agent over reading its prose. The regexes
  // below are the fallback for shards written before the brief asked for the field.
  // 閉店 alone is not closure. 「スープ品切れで早期閉店あります」 means the shop shuts EARLY when
  // the soup sells out — a normal ramen-counter notice, and a verification agent caught
  // this regex about to read it as permanent closure. 臨時閉店 is a day off. The word only
  // means gone when it is a banner (【閉店】), a past-tense announcement (閉店しました), or a
  // dated one. Anything qualified by 早期 / 臨時 / 品切れ / 時々 is business as usual.
  const CLOSED_EARLY = /(早期閉店|臨時閉店|品切れ.{0,6}閉店|閉店.{0,6}品切れ|早じまい)/;
  const CLOSED_PERM = !CLOSED_EARLY.test(note) &&
    /(permanently closed|【閉店】|閉店しました|閉店いたしました|has closed for good|d{4}年.{0,8}閉店)/i.test(note);
  const CLOSED_TEMP = /(temporarily closed|refurbish|renovat|改装|休業|reopening|reopen)/i;
  const status = e.status ? e.status
    : /^NOT FOUND/i.test(note) ? 'not_found'
    : /^MISLOCATED/i.test(note) ? 'mislocated'
    : /^UNRESOLVED/i.test(note) ? 'unresolved'
    : CLOSED_PERM && e.loc_precise !== true ? 'closed_permanently'
    // "confirmed" is reserved for a high-confidence identification. Medium means
    // the agent found a plausible shop but could not tie it to the light record.
    : e.loc_precise === true ? (e.enrich_confidence === 'high' ? 'confirmed' : 'probable')
    : null;
  if (!status) continue;

  r.existence = { status, checked: DATE, note: note.slice(0, 500) };
  if (substituted && (status === 'confirmed' || status === 'probable')) {
    r.existence.status = 'substituted';
    r.existence.drift_km = Math.round(drift * 10) / 10;
  }

  // A permanently closed shop stays in the data — the closure is real research and
  // deleting it invites the next sweep to rediscover the shop and list it again —
  // but it must not appear in the app as though you could walk in.
  if (r.existence.status === 'closed_permanently') {
    r.closed = { status: 'permanent', since: e.closed_since || null,
                 note: note.slice(0, 300), checked: DATE };
    r.hidden = 'closed';
    stats.closed++;
  } else if (CLOSED_TEMP.test(note) && /closed|休業|改装|renovat|refurbish/i.test(note)) {
    // Shut but coming back — 天ぷら ひさご reopens end of October 2026. Stays listed,
    // badged, because a traveller planning a later trip still wants to know it exists.
    r.closed = { status: 'temporary', until: e.reopens || null,
                 note: note.slice(0, 300), checked: DATE };
    // Only un-hide a record THIS pass hid, and only for the reason it hid it. `hidden`
    // is a reason string, and "shut but reopening" is an answer to "closed", not to
    // "unverified", "not_in_city" or "unresearched".
    //
    // Found by the tier-write/gate work: hiding 230 unresearched Tokyo sweep records
    // held everywhere except here, where five of them came back on the next rebuild.
    // All five are genuinely reopening businesses — and all five still have no site,
    // no menu, no hours and no chef story, so un-hiding them put five empty records
    // back on the map wearing a "Temporarily closed" badge. The local rule was right
    // ("a traveller planning a later trip still wants to know it exists") and wrong
    // against a hide that was never about closure. Exactly the failure handoff.txt
    // describes: four passes each overwriting the gate for a defensible local reason.
    if (r.hidden === 'closed') delete r.hidden;
  }

  // Hidden, not deleted. NOT FOUND is the absence of evidence: small Tokyo shops go
  // unlisted, and a shard nearly wrote one off on a rate-limit response. Hiding is
  // reversible, keeps the search trail attached to the record, and stops the app
  // sending anyone to an address nobody could confirm.
  if (status === 'not_found' || status === 'unresolved') { r.hidden = 'unverified'; stats.hidden++; }
  if (status === 'mislocated') { r.hidden = 'not_in_city'; stats.hidden++; }

  if (status !== 'confirmed' && status !== 'probable')
    existenceQueue.push({ id: r.id, name: r.name, status: r.existence.status,
      hidden: r.hidden || null, note: note.slice(0, 400) });
  else if (r.existence.status === 'substituted')
    existenceQueue.push({ id: r.id, name: r.name, status: 'substituted',
      drift_km: r.existence.drift_km, note: note.slice(0, 400) });
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
