// Sort the hidden Tokyo 3-mile sweep records into what is worth researching.
//
// 275 records were hidden as "unresearched" because they carried no menu, no hours,
// no website and an empty chef_bio (see hide-unresearched-sweep.mjs). Re-researching
// all of them is roughly 4.6-7M tokens at the handoff's own measured rates, which is
// most of a Pro month. Most of that spend would be wasted: the sweep was a radius
// scrape, so a large share of it is wheat-genre shops with no diet angle at all.
//
// This pass is FREE. It reads only what is already on the record and spends no agent
// tokens, per the crawler brief: prefer mechanical passes, and spend tokens only where
// a page actually has to be read.
//
// THE BUCKETS
//   drop  - existence already failed. The enrichment pass could not find the business,
//           or placed it outside Tokyo. Nothing to research; these should be purged
//           rather than carried.
//   A     - a real diet signal. The name or cuisine says vegan / gluten-free / shojin /
//           macrobiotic, or the record carries actual cited safety evidence above "ask".
//           These are the app's whole reason to exist and are researched first.
//   B     - a real business with no diet angle. Still worth a menu: per
//           docs/TOKYO-MENU-BRIEF.md, "decoding the menu is the value, on its own" —
//           a yakitori counter that suits neither diet still needs its board
//           translated. Cheaper per record, because only the menu is needed.
//
// WHY INFERRED TIERS DO NOT COUNT
// 95 of the 275 carry vegan_status above "ask", which looks like a strong signal and
// is not. Those tiers came from the sweep's own cuisine-type inference — the same pass
// that wrote the byte-identical "Inferred from cuisine type — not individually
// verified" into 164 records. Treating an inference as evidence would put most of the
// wheat-genre tail into bucket A and defeat the point of triaging. Bucket A therefore
// requires a name/cuisine signal, or evidence that cites a source.
//
//   node scripts/triage-sweep.mjs [--write]

import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';
import { EVIDENCE_KEYS } from './lib-tiers.mjs';

const WRITE = process.argv.includes('--write');
const PASS = 'tokyo-3mile-sweep';

// Deliberately narrow. 'veg' alone would match "vegetable" in any cuisine string and
// drag the whole izakaya tail in; a checker that false-positives is worse than no
// checker (handoff lesson D).
const DIET = /ヴィーガン|ビーガン|vegan|ベジタリアン|ベジ食|グルテンフリー|gluten[- ]?free|玄米|精進|shojin|shōjin|マクロビ|自然食|オーガニック|organic/i;

const cited = r => EVIDENCE_KEYS.reduce((n, k) =>
  n + ((r.safety?.[k]) || []).filter(e => typeof e === 'object' && e.source && !e.unsupported).length, 0);

const buckets = { drop: [], A: [], B: [] };

for (const city of CITIES) {
  for (const r of readCity(city).places) {
    if (r.source_pass !== PASS) continue;

    const why = [];
    let bucket;

    // Existence already settled against the record by the enrichment pass.
    if (r.hidden === 'unverified' || r.hidden === 'not_in_city' || /^NOT FOUND/i.test(String(r.enrich_note || ''))) {
      bucket = 'drop';
      why.push(r.hidden === 'not_in_city' ? 'enrichment placed it outside Tokyo' : 'enrichment could not confirm it exists');
    } else {
      const dietHit = DIET.exec(`${r.name} ${r.cuisine || ''} ${r.cuisine_type || ''}`);
      const ev = cited(r);
      const tierAbove = ['dedicated', 'high', 'options'].includes(r.gf_confidence)
                     || ['full', 'options', 'limited'].includes(r.vegan_status);
      if (dietHit) why.push(`name/cuisine says "${dietHit[0]}"`);
      if (ev && tierAbove) why.push(`${ev} cited finding(s) behind a tier above "ask"`);
      bucket = why.length ? 'A' : 'B';
      if (bucket === 'B') why.push(`${r.cuisine_type || 'unclassified'} — no diet angle; menu-decode value only`);
    }

    buckets[bucket].push({
      city, id: r.id, name: r.name, cuisine: r.cuisine || null,
      cuisine_type: r.cuisine_type || null,
      gf: r.gf_confidence, vegan: r.vegan_status,
      has_url: !!(r.website || r.menu_url), cited: cited(r), signed: !!r.safety?.owner_signoff, hidden: r.hidden || null, why,
    });
  }
}

const n = Object.fromEntries(Object.entries(buckets).map(([k, v]) => [k, v.length]));
const total = n.drop + n.A + n.B;

// Per-record cost. The handoff's measured rate for a Tokyo MENU shard is 200-330k for
// ~15 records, i.e. 13-22k each, and that is menu work only. Bucket A needs identity,
// hours, site, menu, chef story AND a diet assessment with sources, so it runs higher.
// lo/hi are already in thousands of tokens per record.
const est = (lo, hi, c) => `${(c * lo / 1000).toFixed(1)}M-${(c * hi / 1000).toFixed(1)}M`;

const visible = [...buckets.A, ...buckets.B, ...buckets.drop].filter(r => !r.hidden).length;
console.log(`Tokyo 3-mile sweep triage — ${total} sweep records ` +
            `(${total - visible} hidden, ${visible} visible on an owner sign-off)\n`);
console.log(`  drop  ${String(n.drop).padStart(3)}   existence already failed; purge rather than research`);
console.log(`  A     ${String(n.A).padStart(3)}   real diet signal — research first, un-hide as they land`);
console.log(`  B     ${String(n.B).padStart(3)}   real business, no diet angle — menu-decode only`);
console.log(`\nestimated research cost`);
console.log(`  A  ${est(20, 30, n.A).padStart(11)}  tokens  (full enrichment: identity, hours, site, menu, chef, diet+sources)`);
console.log(`  B  ${est(13, 22, n.B).padStart(11)}  tokens  (menu only, at the handoff's measured menu-shard rate)`);
console.log(`  total ${est(20, 30, n.A).split('-')[0]}+${est(13, 22, n.B)}  vs ${est(20, 30, total)} for researching all ${total}`);

console.log(`\nbucket A by strongest signal:`);
const bySig = {};
for (const r of buckets.A) { const k = r.why[0]; bySig[k] = (bySig[k] || 0) + 1; }
for (const [k, v] of Object.entries(bySig).sort((a, b) => b[1] - a[1]).slice(0, 8)) console.log(`  ${String(v).padStart(3)}  ${k}`);

console.log(`\nbucket A, highest value first (already claims a GF tier above "ask"):`);
for (const r of buckets.A.filter(x => ['dedicated', 'high', 'options'].includes(x.gf)).slice(0, 12))
  console.log(`  ${String(r.name).slice(0, 30).padEnd(32)} gf:${r.gf.padEnd(10)} ${String(r.cuisine || '').slice(0, 30)}`);

console.log(`\nbucket B by cuisine:`);
const byCuisine = {};
for (const r of buckets.B) byCuisine[r.cuisine_type || '?'] = (byCuisine[r.cuisine_type || '?'] || 0) + 1;
console.log('  ' + Object.entries(byCuisine).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join('  '));

if (WRITE) {
  fs.writeFileSync('data/_sweep_triage.json', JSON.stringify({
    _doc: 'Triage of the hidden Tokyo 3-mile sweep records. Buckets: drop (existence failed), ' +
          'A (real diet signal, research first), B (real business, menu-decode only). Regenerate ' +
          'with scripts/triage-sweep.mjs --write. Free: reads only what is already on the record.',
    generated: new Date().toISOString().slice(0, 10),
    counts: n, buckets,
  }, null, 1));
  console.log('\nwrote data/_sweep_triage.json');
} else {
  console.log('\n(dry run — re-run with --write to save data/_sweep_triage.json)');
}
