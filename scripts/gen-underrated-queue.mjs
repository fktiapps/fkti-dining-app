// Collect the sweep's UPGRADE recommendations for the human gate.
//
// Downgrades apply themselves — more caution is always safe. Upgrades cannot: a tier
// above "ask" is the one thing in this app that can make somebody stop checking for
// themselves, so REVIEW_PROTOCOL.md sends every one to Greg. This just gathers them
// where he can work through them, with the evidence attached.
//
// It exists because the sweep started finding real under-ratings once agents were
// asked to look: a shop downgraded on a line its owner had publicly retracted, a
// dedicated-grade bakery sitting at "options", a ramen shop whose "no dedicated pot"
// claim was contradicted by a source the record already cited.
//
//   node scripts/gen-underrated-queue.mjs
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const DIR = 'data/_cite_verify_results';
const RANK = { no: 0, ask: 1, options: 2, limited: 2, high: 3, full: 3, dedicated: 4 };

const byId = new Map();
for (const c of CITIES) for (const r of readCity(c).places) byId.set(r.id, { city: c, r });

// Transcribed by hand from the prose summaries of shards that ran before the brief
// asked for a structured tier_recommendation. Kept here rather than in a data file so
// the evidence travels with the claim and nobody has to trust a bare id.
const SEED = [
  { id: 'nagoya_bitte', field: 'gf_confidence', recommended: 'dedicated',
    why: 'Describes itself as 「コンタミネーションを徹底管理した小麦不使用・完全グルテンフリーのお店」; ' +
         '小麦 unticked on all 24 catalogued products; gluten-intolerant owner-baker. ' +
         'Also filed under Nagoya but located in 尾張旭市, and since April 2026 opens once ' +
         'a month by reservation.' },
  { id: 'nara_laccola', field: 'gf_confidence', recommended: 'high',
    why: 'The high->options downgrade rested on "the shop makes no blanket GF claim". ' +
         "laccola.com's own header and meta description do make one, and every storefront " +
         'item is 米粉-based with no 小麦 in any 原材料. Keep the uncertified-oat caveat, whose ' +
         'real evidence is laccola.base.shop rather than the komeko-palette page cited.' },
  { id: 'nara_shika_san_chocolat', field: 'gf_confidence', recommended: 'high',
    why: 'Single-product shop excluding 小麦粉, 米粉 and baking powder outright, corroborated ' +
         'by two sources, yet sits at options.' },
  { id: 'kyr_menbaka_ichidai_menbaka_', field: 'gf_confidence', recommended: 'high',
    why: 'The 2026-07-02 downgrade cites a "shared boiling water" line the owner has ' +
         'publicly retracted as outdated menu phrasing. Across 38 FMGF reviews: a dedicated ' +
         'separate pot, symptomatic celiacs reporting no reaction, and the two "not safe" ' +
         'reviews are from people who read the stale line and left without eating.' },
];

const recs = [];
for (const s of SEED) {
  const hit = byId.get(s.id);
  if (!hit) { console.log(`  (seed id not found, skipping: ${s.id})`); continue; }
  const current = hit.r[s.field];
  if ((RANK[s.recommended] ?? 0) <= (RANK[current] ?? 0)) continue;
  recs.push({ city: hit.city, id: s.id, name: hit.r.name, field: s.field,
              current, recommended: s.recommended, evidence: [], why: s.why,
              source: 'transcribed from agent prose' });
}
if (fs.existsSync(DIR))
  for (const f of fs.readdirSync(DIR).filter(f => f.endsWith('.json') && !f.startsWith('_'))) {
    const j = JSON.parse(fs.readFileSync(`${DIR}/${f}`, 'utf8'));
    for (const v of (Array.isArray(j) ? j : (j.items || j.results || []))) {
      if (v.kind !== 'tier_recommendation') continue;
      const hit = byId.get(v.id);
      if (!hit) continue;
      const field = v.field === 'vegan_status' ? 'vegan_status' : 'gf_confidence';
      const current = hit.r[field];
      // only UPGRADES need the gate; downgrades are handled by the enforcement passes
      if ((RANK[v.recommended] ?? 0) <= (RANK[current] ?? 0)) continue;
      recs.push({ city: hit.city, id: v.id, name: hit.r.name, field,
                  current, recommended: v.recommended,
                  evidence: v.evidence || [], why: v.why || v.note || '' });
    }
  }

fs.writeFileSync('data/_underrated_queue.json', JSON.stringify(recs, null, 1));
console.log(`${recs.length} upgrade(s) recommended by the sweep, awaiting the human gate\n`);
for (const r of recs)
  console.log(`  ${r.city}/${String(r.name).slice(0, 30).padEnd(32)} ${r.field.replace('_confidence','').replace('_status','')} ` +
    `${r.current} -> ${r.recommended}\n      ${String(r.why).slice(0, 150)}`);
if (!recs.length) console.log('  (agents have not yet returned any structured tier_recommendation objects)');
