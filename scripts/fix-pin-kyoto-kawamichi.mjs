// 2026-11-05: kyoto_gion_kawamichi (osw8 b6) got a town-only GSI result because Tabelog writes 常磐町 and GSI
// uses 常盤町. GSI on 京都府京都市東山区常盤町149-1 matches the lot (35.004696, 135.772614), 38 m from the
// Tabelog point, so the pin is precise on the Tabelog point (found by osw8 in b7).
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_gion_kawamichi');
if (!p) throw new Error('not found');
p.loc_precise = true; delete p.loc_approx;
p.pin_source = `Tabelog https://tabelog.com/en/kyoto/A2601/A260301/26017159/ (35.004355, 135.772668); cross-checked: ` +
  `GSI 京都府京都市東山区常盤町149番地 (lot) 38m — Tabelog spells the town 常磐町, GSI 常盤町; nearest record kyoto_uzuraya_shijo at 35 m; 2026-11-05`;
writeCity('kyoto', c);
console.log('precise', p.id);
