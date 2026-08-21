// What actually backs every claim in this dataset?
//
// Written because the owner asked for everything to be verified and the honest
// first step is to say what CAN be verified and what cannot. This does not judge
// whether a source is trustworthy — it answers the prior question: is there a
// source at all, and does the record's own confidence match the evidence under it.
//
// Deliberately mechanical. An earlier attempt to settle existence by bulk search
// returned CONFIRMED for four out of four deliberately invented shop names, so
// nothing here infers truth from a search result. Counting what is present is
// slow, boring, and correct.
//
//   node scripts/audit-provenance.mjs
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const EV = ['gf_cross_contamination','soy_sauce_wheat','vegan_cross_contact',
            'staff_allergy_handling','positives'];
const url = u => typeof u === 'string' && /^https?:\/\//.test(u);

function sourcesOf(r) {
  const s = new Set();
  if (url(r.website)) s.add(r.website);
  if (url(r.menu_url)) s.add(r.menu_url);
  for (const u of (r.chef_bio?.sources) || []) if (url(u)) s.add(u);
  for (const f of EV) for (const e of (r.safety?.[f]) || []) if (url(e?.source)) s.add(e.source);
  for (const u of r.sources || []) if (url(u)) s.add(u);
  return s;
}

const rows = [];
let totals = { records: 0, nosrc: 0, onesrc: 0, multi: 0, placeid: 0,
               menus: 0, menusNoSrc: 0, items: 0, authoritative: 0,
               gfClaim: 0, gfClaimNoEv: 0, bio: 0, bioNoSrc: 0 };

for (const city of CITIES) {
  const places = readCity(city).places.filter(r => !r.hidden);
  const menus = JSON.parse(fs.readFileSync(`data/${city}_menus.json`, 'utf8'));
  const t = { city, records: places.length, nosrc: 0, onesrc: 0, multi: 0, placeid: 0,
              menus: 0, menusNoSrc: 0, items: 0, authoritative: 0,
              gfClaim: 0, gfClaimNoEv: 0, bio: 0, bioNoSrc: 0 };

  for (const r of places) {
    const n = sourcesOf(r).size;
    if (n === 0) t.nosrc++; else if (n === 1) t.onesrc++; else t.multi++;
    if (/query_place_id=/.test(r.gmaps || '')) t.placeid++;

    // a GF tier above "ask" is a claim; does anything sit under it?
    if (['dedicated','high','options'].includes(r.gf_confidence)) {
      t.gfClaim++;
      const cited = EV.some(f => ((r.safety?.[f]) || []).some(e => url(e?.source)));
      if (!cited) t.gfClaimNoEv++;
    }
    // a chef bio is prose about a real person; unsourced, it is the easiest thing to invent
    if (r.chef_bio?.background || r.chef_bio?.chef_name) {
      t.bio++;
      if (!((r.chef_bio.sources || []).some(url))) t.bioNoSrc++;
    }
    const m = menus[r.id];
    if (m) {
      t.menus++;
      t.items += (m.items || []).length;
      if (!((m.sources || []).some(url))) t.menusNoSrc++;
      if (m.verified === 'authoritative') t.authoritative++;
    }
  }
  rows.push(t);
  for (const k of Object.keys(totals)) totals[k] += t[k] || 0;
}

const pct = (n, d) => d ? String(Math.round(n / d * 100)).padStart(3) + '%' : '   —';
console.log('PROVENANCE AUDIT — what is actually cited\n');
console.log('city         recs  0src  1src  2+src  placeid | GFclaim uncited | bios unsrc | menus unsrc | items');
for (const t of [...rows, { ...totals, city: 'TOTAL' }])
  console.log(
    t.city.padEnd(11) + String(t.records).padStart(5) +
    String(t.nosrc).padStart(6) + String(t.onesrc).padStart(6) + String(t.multi).padStart(7) +
    String(t.placeid).padStart(9) + ' |' +
    String(t.gfClaim).padStart(8) + String(t.gfClaimNoEv).padStart(9) + ' |' +
    String(t.bio).padStart(6) + String(t.bioNoSrc).padStart(6) + ' |' +
    String(t.menus).padStart(7) + String(t.menusNoSrc).padStart(6) + ' |' +
    String(t.items).padStart(7));

console.log(`\n${pct(totals.nosrc, totals.records)} of shipped records cite nothing at all.`);
console.log(`${pct(totals.gfClaimNoEv, totals.gfClaim)} of GF claims above "ask" have no cited evidence.`);
console.log(`${pct(totals.bioNoSrc, totals.bio)} of chef bios are unsourced.`);
console.log(`${pct(totals.menusNoSrc, totals.menus)} of menus are unsourced.`);
fs.writeFileSync('data/_provenance_audit.json', JSON.stringify({ rows, totals }, null, 1));
