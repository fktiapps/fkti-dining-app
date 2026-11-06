// 2026-11-05 audit: kyoto_a_kyoto's hours_raw said "A service charge is added (Tabelog)", from Tabelog's English
// auto-translation; the listing's Japanese original under Service charge & fee reads 「なし」 (none).
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_a_kyoto');
if (!p) throw new Error('not found');
const before = p.hours_raw;
p.hours_raw = p.hours_raw.replace('A service charge is added (Tabelog).', 'No service charge (Tabelog, Japanese original 「なし」; the English page wrongly says one is added).');
if (p.hours_raw === before) throw new Error('sentence not found');
writeCity('kyoto', c);
console.log('fixed');
