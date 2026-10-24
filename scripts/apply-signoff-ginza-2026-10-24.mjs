// Greg's sign-off, 2026-10-24, on the two GF upgrades the Ginza half-mile sweep queued
// (data/_underrated_queue.json; scripts/add-ginza-sweep-b2.mjs). He read the queue entries
// — evidence, why not the tier above, open questions — and replied "agree with your
// recommendations on the two GF shops." Applied at the recommended tier; the cautions each
// entry raised stay on the record so the reader still asks.
//
//   node scripts/apply-signoff-ginza-2026-10-24.mjs [--apply]
import fs from 'node:fs';
import { readCity, writeCity } from './lib-city.mjs';
import { setTier } from './lib-tiers.mjs';
import { readLang, writeLang, mergePlace } from './lib-i18n.mjs';

const APPLY = process.argv.includes('--apply');
const DATE = '2026-10-24', BY = 'Greg';
const AGREED = 'Greg, 2026-10-24: "agree with your recommendations on the two GF shops."';

const R = {
  tokyo_fancl_brown_rice_meals_ginza: {
    gf: 'high',
    why: `${AGREED} Own claim that every menu item is made without wheat flour, plus independent first-hand celiac reports on FindMeGlutenFree (135 reviews, October 2026 included). High rather than dedicated: the claim covers the menu, not the facility, and the drinks list is unpublished.`,
    banner: 'GF raised to Strong GF focus. The claim covers the menu, not the facility — check drinks (beer) and sauces.',
    bannerJa: 'GF 区分を「グルテンフリーに積極的に対応」に。表明はメニューについてで施設全体ではありません。飲み物(ビール)とソースは確認を。',
  },
  tokyo_glutenfree_kushiage_su: {
    gf: 'dedicated',
    why: `${AGREED} Own claim (グルテンフリー串揚げ専門店; accommodates gluten allergy and celiac disease) plus independent first-hand celiac reports on FindMeGlutenFree (66 reviews, "Completely gluten free restaurant"). Open question carried on the record: the shop does not state that its soy sauce and miso are wheat-free.`,
    banner: 'GF raised to Dedicated gluten-free. Still confirm the soy sauce and miso are wheat-free when you book.',
    bannerJa: 'GF 区分を「専用グルテンフリー対応」に。醤油・味噌が小麦不使用かは予約時に確認を。',
  },
};
const QUEUED = / ?This record is queued for a human review of a higher tier\./;
const QUEUED_JA = /この記録は、より上の区分への引き上げを人の手で審査する待ち行列に入っています。/;

const j = readCity('tokyo');
const ja = readLang('tokyo', 'ja');
let n = 0;
for (const [id, d] of Object.entries(R)) {
  const r = j.places.find(p => p.id === id);
  if (!r) { console.error('NOT FOUND ' + id); process.exitCode = 1; continue; }
  // Re-runnable: a record already carrying today's ruling at this tier is left alone.
  if (r.safety?.owner_signoff?.date === DATE && r.gf_confidence === d.gf) { console.log(`  current  ${id}`); continue; }
  const from = r.gf_confidence;
  console.log(`  ${id.padEnd(40)} gf ${from} -> ${d.gf}`);
  n++;
  if (!APPLY) continue;
  setTier(r, 'gf_confidence', d.gf, { by: BY, why: d.why });
  const so = { decision: 'upgrade', field: 'gf_confidence', from, to: d.gf, by: BY, date: DATE, reason: d.why };
  r.safety = r.safety || {};
  (r.safety.owner_signoff_log = r.safety.owner_signoff_log || []).push(so);
  r.safety.owner_signoff = so;
  r.safety.last_checked = DATE;
  delete r.gf_proposed_tier;
  r.gf_detail = `[Owner review ${DATE}: ${d.banner}] ` + String(r.gf_detail || '').replace(QUEUED, '').trim();
  const o = ja[id] || {};
  mergePlace(ja, id, { gf_detail: `[オーナー審査 ${DATE}: ${d.bannerJa}] ` + String(o.gf_detail || '').replace(QUEUED_JA, '').trim() });
}

if (APPLY && n) {
  writeCity('tokyo', j);
  writeLang('tokyo', 'ja', ja);
  const qf = 'data/_underrated_queue.json';
  const q = JSON.parse(fs.readFileSync(qf, 'utf8')).filter(e => !(e.city === 'tokyo' && R[e.id]));
  fs.writeFileSync(qf, JSON.stringify(q, null, 1) + '\n');
}
console.log(`\n${n} ruling(s) ${APPLY ? 'written' : 'pending (dry run — add --apply)'}`);
