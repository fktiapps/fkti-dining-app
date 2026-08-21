// Undo GF/vegan promotions that contradict the record's own researched text.
//
// build-menu-reconcile.mjs promotes a record from "no"/"ask" to "options" whenever
// its documented menu contains a gluten-free-looking item, and APPENDS its reasoning
// rather than replacing what was there. So records now read:
//
//   gf_confidence: "options"
//   gf_detail:     "Not suitable for celiacs … (Menu review: 2 gluten-free meal
//                   options on the documented menu …)"
//
// The label says one thing and the prose beneath it says the opposite. A traveller
// scanning the list sees only the label.
//
// Counting menu items is weak evidence at the best of times, and here it was not the
// best of times: one of these menus came off a Tabelog page last updated in 2011, and
// several of the "gluten-free" items were flags this repo's own merge pass has since
// repaired down to "ask". Weighed against a researcher's explicit sentence saying the
// kitchen is not suitable, it loses — a false "safe" can glutenate a kid, a false
// "ask" makes them double-check.
//
//   node scripts/fix-menu-promotions.mjs [--apply]
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');
const DATE = '2026-08-20';
const PROMOTED = /\(Menu review:/;
const GF_NEGATIVE = /not suitable for celiac|no gluten-free|not gluten[- ]free|unsuitable for celiac|避けるべき|celiacs? should avoid/i;
const VG_NEGATIVE = /no vegan option|not vegan|no plant-based option|ヴィーガン不可/i;
const GF_LABEL = { no: 'Not gluten-free', ask: 'GF — ask' };
const VG_LABEL = { no: 'Not vegan', ask: 'Vegan — ask', limited: 'Limited vegan' };

const fixed = [];
for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;
  for (const r of j.places) {
    // Only records the reconciler touched, and only where the prose contradicts it.
    const gfBad = PROMOTED.test(r.gf_detail || '') && GF_NEGATIVE.test(r.gf_detail || '') &&
                  ['options', 'high', 'dedicated'].includes(r.gf_confidence);
    const vgBad = PROMOTED.test(r.vegan_detail || '') && VG_NEGATIVE.test(r.vegan_detail || '') &&
                  ['full', 'options'].includes(r.vegan_status);
    if (!gfBad && !vgBad) continue;

    const before = { gf: r.gf_confidence, vegan: r.vegan_status };
    if (APPLY) {
      r.menu_promotion_reverted = { date: DATE, from: before,
        note: 'Promoted by build-menu-reconcile.mjs on a count of menu items, while this ' +
              "record's own researched text says the opposite. The text wins." };
      if (gfBad) { r.gf_confidence = 'ask'; r.gf_label = GF_LABEL.ask; }
      if (vgBad) { r.vegan_status = 'ask'; r.vegan_label = VG_LABEL.ask; }
      dirty = true;
    }
    fixed.push({ city, id: r.id, name: r.name, ...before, gfBad, vgBad });
  }
  if (dirty) writeCity(city, j);
}

console.log(`${fixed.length} record(s) promoted by menu count against their own text\n`);
for (const f of fixed)
  console.log(`  ${f.city}/${String(f.name).slice(0, 30).padEnd(32)} ` +
    (f.gfBad ? `gf ${f.gf} -> ask  ` : '            ') + (f.vgBad ? `vegan ${f.vegan} -> ask` : ''));
fs.writeFileSync('data/_menu_promotion_reverts.json', JSON.stringify(fixed, null, 1));
if (!APPLY && fixed.length) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
