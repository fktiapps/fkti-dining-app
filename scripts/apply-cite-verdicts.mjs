// Apply citation-verification verdicts to the records.
//
// The point of the sweep is that a reader can tell the difference between a claim
// somebody checked and a claim that merely has a URL beside it. So every verdict
// leaves a mark on the claim itself, and the app renders that mark.
//
//   supported / moved  -> claim gains { verified: DATE }. The strongest state: a
//                         human-directed agent opened the page and found it.
//   wrong_source       -> the source is REPOINTED at the URL that does support it.
//                         The claim was true and mis-cited; repairing beats deleting.
//   unsupported        -> claim gains { unsupported: DATE, why }. NOT deleted — the
//                         evidence of the defect is worth as much as the defect, and
//                         a later pass may find the support this one could not. It
//                         stops counting as evidence and stops rendering as a fact.
//   unreachable        -> { unverifiable: DATE }. A fact about the network, not the
//                         claim. Deliberately distinct from unsupported.
//
// Tiers are NOT recomputed here. enforce-cited-claims.mjs already holds down any
// label left without cited evidence, and it runs later in the pipeline — so a record
// whose support all collapses is caught there, by one rule, in one place.
//
//   node scripts/apply-cite-verdicts.mjs [--apply]
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');
const DATE = '2026-08-20';
const DIR = 'data/_cite_verify_results';
const EV = ['gf_cross_contamination','soy_sauce_wheat','vegan_cross_contact',
            'staff_allergy_handling','positives'];
const url = u => typeof u === 'string' && /^https?:\/\//.test(u);

if (!fs.existsSync(DIR)) { console.log(`no ${DIR} yet`); process.exit(0); }
const verdicts = [];
for (const f of fs.readdirSync(DIR).filter(f => f.endsWith('.json') && !f.startsWith('_'))) {
  const j = JSON.parse(fs.readFileSync(`${DIR}/${f}`, 'utf8'));
  verdicts.push(...(Array.isArray(j) ? j : (j.items || j.results || [])));
}
if (!verdicts.length) { console.log('no verdicts yet'); process.exit(0); }

// key on (id, field, the claim's own text) — a record can carry several claims in
// one field, and text is what distinguishes them
const norm = t => String(t || '').replace(/\s+/g, '').slice(0, 90);
const byKey = new Map();
for (const v of verdicts) byKey.set(`${v.id}|${v.field}|${norm(v.quote ?? v.text)}`, v);

const stats = { matched: 0, unmatched: 0, verified: 0, repointed: 0, unsupported: 0, unverifiable: 0 };
const defects = [];

for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;
  for (const r of j.places) {
    for (const f of EV) {
      const arr = (r.safety?.[f]) || [];
      for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        const text = typeof e === 'string' ? e : String(e?.text || '');
        const v = byKey.get(`${r.id}|${f}|${norm(text)}`);
        if (!v) continue;
        stats.matched++;
        // bare strings get promoted to objects so a verdict has somewhere to live
        const obj = typeof e === 'string' ? { text: e } : { ...e };
        if (v.verdict === 'supported' || v.verdict === 'moved') {
          obj.verified = DATE; delete obj.unsupported; delete obj.unverifiable;
          if (v.verdict === 'moved' && v.found) obj.source_wording = String(v.found).slice(0, 300);
          stats.verified++;
        } else if (v.verdict === 'wrong_source' && url(v.correct_url)) {
          obj.source = v.correct_url; obj.verified = DATE;
          obj.repointed_from = (typeof e === 'object' && e.source) || null;
          delete obj.unsupported; stats.repointed++;
        } else if (v.verdict === 'unsupported') {
          obj.unsupported = DATE; obj.why = String(v.note || '').slice(0, 300);
          delete obj.verified; stats.unsupported++;
          defects.push({ city, id: r.id, name: r.name, field: f,
                         text: text.slice(0, 120), source: obj.source || null, why: obj.why });
        } else if (v.verdict === 'unreachable') {
          obj.unverifiable = DATE; obj.why = String(v.http || v.note || '').slice(0, 200);
          stats.unverifiable++;
        } else continue;
        arr[i] = obj; dirty = true;
      }
    }
  }
  if (dirty && APPLY) writeCity(city, j);
}
stats.unmatched = verdicts.length - stats.matched;

console.log(stats);
if (defects.length) {
  console.log(`\n=== ${defects.length} claim(s) the cited source does NOT support ===`);
  for (const d of defects.slice(0, 30))
    console.log(`  ${d.city}/${d.id} [${d.field}]\n    claim : ${d.text}\n    source: ${d.source}\n    why   : ${d.why}\n`);
}
if (APPLY) fs.writeFileSync('data/_unsupported_claims.json', JSON.stringify(defects, null, 1));
else console.log('\nDRY RUN — nothing written. Re-run with --apply.');
