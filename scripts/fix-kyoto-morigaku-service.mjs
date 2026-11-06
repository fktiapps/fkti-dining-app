// 2026-11-05 (found by osw1): kyoto_sushi_mori_gaku's hours_raw said "A service charge is added (Tabelog)", taken from
// Tabelog's English auto-translation; the listing's Japanese original says 「なし」 (none).
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_sushi_mori_gaku');
if (!p) throw new Error('not found');
const before = p.hours_raw;
p.hours_raw = p.hours_raw.replace(' A service charge is added (Tabelog).', ' No service charge (Tabelog, Japanese listing).');
if (p.hours_raw === before) throw new Error('sentence not found');
writeCity('kyoto', c);
console.log('fixed');
