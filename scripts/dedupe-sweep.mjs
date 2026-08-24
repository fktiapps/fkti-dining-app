// Find duplicate pairs among the sweep records, and refuse to merge them silently.
//
// WHY NOT COORDINATES, AND WHY NOT NAMES
// handoff lesson G says a real dedupe needs address/phone/coordinates rather than
// names, because the twins differ as カタカナ vs romaji and no simple normaliser
// unifies them. Both halves of that are true and neither helps here:
//
//   - Names: そらのいろ vs ソラノイロ, T's Kitchen vs ティーズキッチン, 味農家 vs 味農家（みのや）.
//   - Coordinates: sweep pins are NEIGHBOURHOOD CENTROIDS (pin_accuracy: approximate).
//     45 of the 63 bucket-A records sit on a point shared with another record, and
//     six different businesses share 35.708,139.7745 exactly. Coordinate matching here
//     produces false pairs by construction.
//
// What actually works on this set is the WEBSITE DOMAIN. It is first-party, it is
// identical across kana/kanji/romaji spellings of the name, and 38 of the records
// have one. It finds every pair a human finds by eye in this data, and no others.
//
// Branch suffixes are the one trap: T's たんたん グランスタ東京 and T'sたんたん エキュート上野店
// share ts-restaurant.jp and are DIFFERENT SHOPS in different stations. So a shared
// domain is a candidate, not a verdict, and a differing branch suffix breaks it.
//
// THIS SCRIPT DOES NOT MERGE. Every pair it finds carries a human gate decision on at
// least one side, and one of them — そらのいろ ニッポン — carries a REFUSAL in
// data/_gate_rejections.json whose twin sits at the tier Greg refused. Merging toward
// the higher tier would resurrect a decision he made explicitly; merging toward the
// more cautious one would overwrite a sign-off on the other side. Neither is a machine
// decision. It reports, and Greg rules.
//
//   node scripts/dedupe-sweep.mjs

import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';
import { signoffFor, rejectionFor, moreCautious } from './lib-tiers.mjs';

const PASS = 'tokyo-3mile-sweep';
// Aggregators and social hosts are NOT identity: every shop in Japan has a tabelog
// page and half of them have an Instagram. Pairing on these matched 更科そば with a
// gluten-free waffle shop, and a gluten-free bistro with a bakery — 2 of 6 candidates
// in the first run were this. Only a first-party domain says "same business".
const AGGREGATOR = /^(tabelog\.com|instagram\.com|facebook\.com|twitter\.com|x\.com|gnavi\.co\.jp|r\.gnavi\.co\.jp|retty\.me|hotpepper\.jp|ubereats\.com|goo\.gl|linktr\.ee|note\.com|ameblo\.jp)$/i;
const domain = r => {
  const u = r.website || r.menu_url;
  if (!u) return null;
  const m = String(u).match(/^https?:\/\/(?:www\.)?([^/]+)/i);
  if (!m) return null;
  const d = m[1].toLowerCase();
  return AGGREGATOR.test(d) ? null : d;
};

// A branch marker is a trailing token that names a PLACE the brand operates in — it
// ends in 店, or names a station building. Anything else trailing is part of the shop
// name: 味農家（みのや） is not a branch of 味農家, it is the same name with its reading.
const MALL = /(グランスタ|エキュート|ecute|ルミネ|アトレ|エキア|大丸|高島屋|パルコ|ソラマチ)/i;
const branchOf = n => {
  const last = String(n).trim().split(/\s+/).pop() || '';
  return (/店$/.test(last) || MALL.test(last)) ? last : '';
};

const all = [];
for (const city of CITIES)
  for (const r of readCity(city).places) if (r.source_pass === PASS) all.push({ city, r });

const byDomain = {};
for (const x of all) { const d = domain(x.r); if (d) (byDomain[d] = byDomain[d] || []).push(x); }

const pairs = [], sameBrand = [];
for (const [d, group] of Object.entries(byDomain)) {
  if (group.length < 2) continue;
  for (let i = 0; i < group.length; i++)
    for (let k = i + 1; k < group.length; k++) {
      const A = group[i], B = group[k];
      const ba = branchOf(A.r.name), bb = branchOf(B.r.name);
      (ba && bb && ba !== bb ? sameBrand : pairs).push({ d, A, B });
    }
}

const gateNote = (r, field) => {
  const s = signoffFor(r, field), j = rejectionFor(r, field);
  const bits = [];
  if (s) bits.push(`sign-off ${s.by} ${s.date} -> "${s.to}"${s.bulk ? ' (bulk)' : ''}`);
  if (j) bits.push(`REFUSED "${j.refused}", keep "${j.keep}" (${j.by} ${j.date})`);
  return bits.join('; ');
};

console.log(`duplicate candidates (same first-party domain, same shop): ${pairs.length}\n`);
for (const { d, A, B } of pairs) {
  console.log(`  ${d}`);
  for (const x of [A, B]) {
    const r = x.r;
    console.log(`    ${r.id.padEnd(22)} ${String(r.name).slice(0, 30).padEnd(32)} gf:${String(r.gf_confidence).padEnd(10)} vegan:${String(r.vegan_status).padEnd(8)} ${r.lat},${r.lng}`);
    for (const f of ['gf_confidence', 'vegan_status']) {
      const g = gateNote(r, f);
      if (g) console.log(`        ${f}: ${g}`);
    }
  }
  const cg = moreCautious('gf_confidence', A.r.gf_confidence, B.r.gf_confidence);
  const cv = moreCautious('vegan_status', A.r.vegan_status, B.r.vegan_status);
  console.log(`    -> a cautious merge would give gf:"${cg}" vegan:"${cv}"`);
  const clash = [A, B].some(x => ['gf_confidence', 'vegan_status'].some(f => {
    const s = signoffFor(x.r, f); const want = f === 'gf_confidence' ? cg : cv;
    return s && s.to && s.to !== want;
  }));
  console.log(`    -> ${clash ? '⚑ CONTRADICTS a sign-off. Needs Greg.' : 'no sign-off conflict.'}\n`);
}

if (sameBrand.length) {
  console.log(`same brand, DIFFERENT branch — not duplicates, left alone: ${sameBrand.length}`);
  for (const { d, A, B } of sameBrand)
    console.log(`  ${d}  ${String(A.r.name).slice(0, 28)}  vs  ${String(B.r.name).slice(0, 28)}`);
}

// The other half of the problem: records nothing has ever confirmed.
const unconfirmed = all.filter(({ r }) => !r.website && !r.menu_url && !r.enrich_note);
const clusters = {};
for (const { r } of unconfirmed) (clusters[`${r.lat},${r.lng}`] = clusters[`${r.lat},${r.lng}`] || []).push(r.name);
const multi = Object.entries(clusters).filter(([, v]) => v.length > 1);
console.log(`\nnever enriched, no website, no menu_url: ${unconfirmed.length} of ${all.length}`);
console.log(`  of which sharing a centroid with another such record: ${multi.reduce((n, [, v]) => n + v.length, 0)} in ${multi.length} cluster(s)`);
console.log('  These have not been shown to exist. Researching one is how you find out —');
console.log('  but an agent asked to enrich a shop that is not there is exactly the setup');
console.log('  that produced the 杏もん堂 fabrication. Existence must be settled FIRST,');
console.log('  against a citable source, before any record here gets enriched.');
