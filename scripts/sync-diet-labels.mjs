// Make every stored diet label agree with its tier.
//
// gf_label and vegan_label were stored alongside gf_confidence and vegan_status, so
// every pass that moved a tier had to remember to move the label too. Not all of them
// did, and the drift was invisible: 593 vegan and 334 GF visible records shipped with
// a label contradicting their own tier. 徳島ラーメン東大, a tonkotsu ramen shop, displayed
// as "Fully vegan" — index.html rendered vegan_label directly as both the list badge
// and the Vegan panel headline.
//
// index.html now derives the label from the tier, so the app cannot show this again
// whatever the data says. This repairs the stored fields for everything else that
// reads them, and lint errors if they drift.
//
// The tier wins, always. It is the field the review protocol gates, the field the
// filters use, and the field every enforcement pass in this repo reasons about.
//
//   node scripts/sync-diet-labels.mjs [--apply]
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';
import { GF_LABEL as GF, VEGAN_LABEL as VG } from './lib-tiers.mjs';

const APPLY = process.argv.includes('--apply');

let gf = 0, vg = 0, worst = [];
for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;
  for (const r of j.places) {
    if (GF[r.gf_confidence] && r.gf_label !== GF[r.gf_confidence]) {
      if (APPLY) r.gf_label = GF[r.gf_confidence];
      gf++; dirty = true;
    }
    if (VG[r.vegan_status] && r.vegan_label !== VG[r.vegan_status]) {
      // the dangerous direction: shown as safer than the tier says
      if (r.vegan_label === 'Fully vegan' && r.vegan_status !== 'full' && !r.hidden)
        worst.push(`${city}/${String(r.name).slice(0, 34)} — shown "Fully vegan", tier is "${r.vegan_status}"`);
      if (APPLY) r.vegan_label = VG[r.vegan_status];
      vg++; dirty = true;
    }
  }
  if (dirty && APPLY) writeCity(city, j);
}

console.log(`${gf} gf_label and ${vg} vegan_label field(s) disagreed with their tier`);
if (worst.length) {
  console.log(`\n${worst.length} of them displayed "Fully vegan" on a venue whose tier says otherwise:`);
  worst.slice(0, 12).forEach(w => console.log('  ' + w));
  if (worst.length > 12) console.log(`  … ${worst.length - 12} more`);
}
if (!APPLY && (gf || vg)) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
