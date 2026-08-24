// A FREE existence probe for the sweep records nothing has confirmed.
//
// REVIEW_PROTOCOL.md now requires existence to be settled against a citable source
// before a record is enriched, because an agent handed a shop that is not there
// produces something anyway and it reads as researched. That gate costs agent tokens.
// This pass does the cheap part of it first, for nothing: OpenStreetMap is free, open,
// and citable, so any record it confirms is one fewer that needs an agent.
//
// IT CAN ONLY EVER CONFIRM. Absence from OSM is NOT evidence a shop does not exist —
// Japanese restaurant coverage is patchy and skewed to chains and busy streets. The
// first link check in this repo reported 1,086 dead links of which 995 were tabelog
// refusing a non-browser user-agent; a number that buries real failures inside fake
// ones is worse than no number (handoff lesson 3). So the output has exactly two
// states: `confirmed` with a source, and `unknown`. There is no "not found".
//
// It writes a REVIEW FILE and changes no record.
//
//   node scripts/probe-existence-osm.mjs [--limit N]

import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const PASS = 'tokyo-3mile-sweep';
const RADIUS = 400;
const PAUSE_MS = 6000;          // Overpass is a donated public endpoint. Do not hammer it.
const argN = (k, d) => { const i = process.argv.indexOf(k); return i > -1 ? Number(process.argv[i + 1]) : d; };
const LIMIT = argN('--limit', Infinity);

// Records where existence is genuinely unestablished: no first-party site, no menu
// link, and the enrichment pass never reached them.
const targets = [];
for (const city of CITIES)
  for (const r of readCity(city).places)
    if (r.source_pass === PASS && !r.website && !r.menu_url && !r.enrich_note)
      targets.push({ city, r });

// Records share neighbourhood centroids, so query per POINT, not per record.
const byPoint = {};
for (const t of targets) (byPoint[`${t.r.lat},${t.r.lng}`] = byPoint[`${t.r.lat},${t.r.lng}`] || []).push(t);
const points = Object.keys(byPoint).slice(0, LIMIT);

console.log(`${targets.length} unconfirmed record(s) across ${Object.keys(byPoint).length} point(s); probing ${points.length}\n`);

// Match on the DISTINCTIVE part of the name. Sweep names are often "<thing> <place>"
// — ベジプレート 中野, グルテンフリー・パスタ 中野 — and matching on 中野 alone would pair
// every shop in the ward with every other. Strip the location tail and the generic
// descriptors, then require what is left to be substantial and to actually appear.
// The first version of this stripped the LAST token as if it were a location and kept
// the head. That is backwards: in these names the last token is usually the shop's
// actual name and the head is the description. It "confirmed" CAFE VERVE against
// 10°CAFE, ヴィーガンラーメン えん against ラーメン北国, and ベジタリアンカレー ナマステ against
// ゴーゴーカレー — 3 false positives out of 4 hits, all of them matching on the cuisine
// word. A checker that cannot get well under 10% false positives should be a documented
// trap instead of a script (handoff lesson D).
//
// So: strip the generic vocabulary from the WHOLE name — diet words, cuisine words,
// venue words, ward names — and match on whatever distinctive remainder is left. If
// nothing substantial remains, the record is UNKNOWN. It is not matchable by name, and
// guessing is how the false positives happened.
const GENERIC = new RegExp([
  'ヴィーガン', 'ビーガン', 'ベジタリアン', 'ベジ', 'グルテンフリー', 'マクロビ', 'オーガニック', '自然食',
  'ラーメン', 'らーめん', 'カレー', 'うどん', 'そば', '蕎麦', '寿司', 'すし', '天ぷら', 'てんぷら',
  'とんかつ', 'ビストロ', 'パスタ', 'イタリアン', 'フレンチ', 'スープ', 'ワッフル', 'ベーカリー', 'パン',
  'カフェ', 'CAFE', 'cafe', 'キッチン', 'kitchen', 'ダイニング', 'レストラン', '食堂', 'しょくどう',
  '居酒屋', '専門店', '本店', '料理', '野菜', '玄米', '山菜', '中野', '浅草', '京橋', '赤坂', '蔵前', 'えびす', '恵比寿',
].join('|'), 'gi');
const clean = s => String(s || '').replace(/[\s　・･（）()「」\-‐–—.,、。]/g, '');
const core = s => clean(String(s || '').replace(GENERIC, ''));

const overpass = async (lat, lng) => {
  const q = `[out:json][timeout:25];(node(around:${RADIUS},${lat},${lng})[amenity~"restaurant|cafe|fast_food|bakery|pub|bar"];` +
            `way(around:${RADIUS},${lat},${lng})[amenity~"restaurant|cafe|fast_food|bakery|pub|bar"];);out tags 300;`;
  // Overpass answers node's default user-agent with a 406. Identify the client, which
  // is what a donated public endpoint asks of you anyway.
  const res = await fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    headers: {
      'User-Agent': 'DeeplyConnectedDining/1.0 (existence probe; fkti.org)',
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ data: q }),
  });
  if (!res.ok) { const e = new Error(`overpass ${res.status}`); e.status = res.status; throw e; }
  const j = await res.json();
  return (j.elements || []).map(e => e.tags || {}).filter(t => t.name || t['name:ja']);
};

// Overpass rate-limits by slot, not by request count, so a 429 means "wait", not
// "stop". Back off and retry rather than recording a probe failure — a failed probe
// would otherwise look the same as a shop that is genuinely absent from OSM, which is
// exactly the distinction this script exists to keep.
const probe = async (lat, lng) => {
  for (let attempt = 0; attempt < 4; attempt++) {
    try { return await overpass(lat, lng); }
    catch (e) {
      if (e.status !== 429 && e.status !== 504) throw e;
      const wait = 15000 * (attempt + 1);
      console.log(`    (${e.status}; waiting ${wait / 1000}s)`);
      await new Promise(s => setTimeout(s, wait));
    }
  }
  throw new Error('overpass rate limit, gave up');
};

const out = [];
let confirmed = 0, unknown = 0, failed = 0;

for (const [i, pt] of points.entries()) {
  const [lat, lng] = pt.split(',');
  let venues = null;
  try { venues = await probe(lat, lng); }
  catch (e) { console.log(`  ! ${pt}  probe failed (${e.message}) — records left unknown`); failed += byPoint[pt].length; }

  for (const { city, r } of byPoint[pt]) {
    if (!venues) { out.push({ city, id: r.id, name: r.name, status: 'probe_failed' }); continue; }
    // Match the distinctive remainder against the OSM name with the SAME vocabulary
    // stripped, so "ナマステ" cannot be satisfied by a shop that merely also sells カレー.
    // One direction only: the OSM name must contain the record's distinctive remainder.
    // The reverse — record name contains the OSM name — was tried and matched
    // ナチュラルカフェ グリーン against グリーン食堂 on the shared word グリーン. Two different
    // shops. Containment in that direction is satisfied by any common word and cannot
    // be tightened by length alone.
    const c = core(r.name);
    const hit = c.length >= 3 && venues.find(v => (core(v.name) + core(v['name:ja'])).includes(c));
    if (hit) {
      confirmed++;
      out.push({ city, id: r.id, name: r.name, status: 'confirmed', matched: hit.name || hit['name:ja'],
        source: `https://www.openstreetmap.org/search?query=${encodeURIComponent(hit.name || '')}`,
        note: 'Matched an OpenStreetMap venue near the record pin. Confirms the business exists; says nothing about its diet handling.' });
      console.log(`  ✓ ${String(r.name).slice(0, 26).padEnd(28)} -> OSM "${hit.name || hit['name:ja']}"`);
    } else {
      unknown++;
      out.push({ city, id: r.id, name: r.name, status: 'unknown', venues_seen: venues.length,
        note: 'No OSM venue near the pin matched this name. NOT evidence the shop does not exist — ' +
              'OSM coverage of Japanese restaurants is patchy. Needs a real source check.' });
    }
  }
  if (i < points.length - 1) await new Promise(s => setTimeout(s, PAUSE_MS));
}

fs.writeFileSync('data/_sweep_existence_osm.json', JSON.stringify({
  _doc: 'Free OpenStreetMap existence probe for unconfirmed Tokyo sweep records. Two states only: ' +
        'confirmed (an OSM venue near the pin matches the name) and unknown. There is deliberately no ' +
        '"not found" — absence from OSM is not evidence of absence. Regenerate: node scripts/probe-existence-osm.mjs',
  generated: new Date().toISOString().slice(0, 10),
  radius_m: RADIUS,
  counts: { confirmed, unknown, probe_failed: failed },
  results: out,
}, null, 1));

console.log(`\n  confirmed ${confirmed}   unknown ${unknown}   probe failed ${failed}`);
console.log('  wrote data/_sweep_existence_osm.json — review only, no record changed.');
console.log('  "unknown" means UNKNOWN. It is not a purge list.');
