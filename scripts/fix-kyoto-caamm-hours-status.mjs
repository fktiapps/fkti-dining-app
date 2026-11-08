// 2026-11-07: Caamm Bar (osw13-101) has no hours on Tabelog; per the brief, missing hours are hours {} with
// hours_status 'unknown' (it had been set to 'irregular').
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_caamm_bar');
if (!p) throw new Error('not found');
p.hours_status = 'unknown';
writeCity('kyoto', c);
console.log('fixed', p.id);
