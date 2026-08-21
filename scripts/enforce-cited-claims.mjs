// A safety label above "ask" must rest on a claim that names its source.
//
// The provenance audit found two evidence formats in this dataset. Audited records
// store each finding as { text, source } with a URL. But 518 findings across 68
// Tokyo records are stored as BARE STRINGS — no source field at all, uncitable by
// construction. They read as authoritative prose ("Asia's first restaurant certified
// gluten-free by The Gluten Intolerance Group") with nothing behind them, and every
// mechanical check in this repo passed them: the citation verifier only reads
// e.source, and the lint's evidence count only asked whether findings existed.
//
// So a shop could be labelled "some GF options" on text no one can trace. That is
// the exact failure mode this project exists to prevent.
//
// This does NOT delete the text — it may well be accurate, and several of these are
// famous gluten-free restaurants. It moves the LABEL down to "ask" until a source
// is attached, and records the original tier so verification can restore it through
// the normal gate. A false "ask" makes someone double-check; a false "options" on
// untraceable prose is how somebody gets glutenated.
//
//   node scripts/enforce-cited-claims.mjs [--apply]
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');
const DATE = '2026-08-20';
const EV = ['gf_cross_contamination','soy_sauce_wheat','vegan_cross_contact',
            'staff_allergy_handling','positives'];
const CLAIMS_SAFER = new Set(['dedicated','high','options']);
const LABEL = { dedicated:'Dedicated gluten-free', high:'Strong GF focus',
                options:'Some GF options', ask:'GF — ask', no:'Not gluten-free' };
const url = u => typeof u === 'string' && /^https?:\/\//.test(u);
const citedCount = r => EV.reduce((n, f) =>
  n + ((r.safety?.[f]) || []).filter(e => typeof e === 'object' && url(e?.source)).length, 0);

const moved = [];
for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;
  for (const r of j.places) {
    if (!CLAIMS_SAFER.has(r.gf_confidence)) continue;
    if (citedCount(r) > 0) continue;

    // The human gate outranks this. If Greg has personally signed a record off, his
    // decision stands — the same rule apply-gf-audit.mjs follows.
    if (r.safety?.owner_signoff?.decision) continue;

    moved.push({ city, id: r.id, name: r.name, from: r.gf_confidence,
                 findings: EV.reduce((n, f) => n + ((r.safety?.[f]) || []).length, 0) });
    if (!APPLY) continue;
    r.gf_uncited_downgrade = { from: r.gf_confidence, date: DATE,
      note: 'Tier held down: no safety finding on this record cites a source. Restore ' +
            'through REVIEW_PROTOCOL.md once evidence is attached.' };
    r.gf_confidence = 'ask';
    r.gf_label = LABEL.ask;
    r.gf_detail = `[Held at "ask" ${DATE}] The description below was not traceable to any ` +
      `source, so the GF label is held down until it is. ` + (r.gf_detail || '');
    dirty = true;
  }
  if (dirty) writeCity(city, j);
}

console.log(`${moved.length} record(s) claim a GF tier above "ask" with nothing cited\n`);
for (const m of moved)
  console.log(`  ${m.city}/${m.id.padEnd(34)} ${m.from.padEnd(9)} ${String(m.findings).padStart(2)} uncited finding(s)  ${m.name.slice(0, 34)}`);
if (!APPLY) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
fs.writeFileSync('data/_uncited_claims.json', JSON.stringify(moved, null, 1));
