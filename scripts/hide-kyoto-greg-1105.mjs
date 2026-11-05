// Greg, 2026-11-05, on two Kyoto drafts flagged by the integrator:
//   - ベルアメール 京都別邸 (osw8 b5): "skip" — the parent brand Chocolat Bel Amer makes it a chain.
//   - BOCCA del VINO (osw13 b28): "skip" — the shop asks diners not to post it on gourmet sites and marks its
//     pages "転載禁止"; Greg chose to leave it out.
// (He also confirmed 祇園サンボア, skipped in osw9 b4, as a chain.)
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const hide = { kyoto_bel_amer_kyoto_bettei: 'chain', kyoto_bocca_del_vino: 'operator_request' };
for (const [id, why] of Object.entries(hide)) {
  const p = c.places.find(p => p.id === id);
  if (!p) throw new Error('not found: ' + id);
  p.hidden = why;
  console.log('hidden', id, why);
}
writeCity('kyoto', c);
