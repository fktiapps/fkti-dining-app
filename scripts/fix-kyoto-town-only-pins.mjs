// 2026-11-05: a record whose GSI cross-check matched only the town (no lot) is loc_precise false,
// loc_approx 'single' (integrator rule for the Kyoto priority sweep). kyoto_ikiteiru_coffee (osw9 b2) slipped
// through as precise; osw9 flagged it in b6. This fixes every visible Kyoto record whose pin_source says
// "(town)" yet is still marked precise.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
let n = 0;
for (const r of c.places) {
  if (r.hidden || r.loc_precise !== true || !/\(town\)/.test(r.pin_source || '')) continue;
  r.loc_precise = false; r.loc_approx = 'single'; n++;
  console.log('town-only → single:', r.id);
}
writeCity('kyoto', c);
console.log(n, 'fixed');
