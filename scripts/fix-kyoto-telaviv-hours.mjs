// 2026-11-08: osw6 existence check — TEL AVIV (Tabelog 26040422) is open (reviews to April 2026), but Tabelog gives
// 17:30–23:00 closed Tuesday; the record said daily. Hours keys are Monday-first (0=Mon … 6=Sun), so drop key 1.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'ChIJezBqHpMJAWARi5BFOEhNolk');
if (!p) throw new Error('not found');
delete p.hours['1'];
p.hours_raw = '17:30–23:00, closed Tuesday (Tabelog 26040422, checked 2026-11-08)';
writeCity('kyoto', c);
console.log('fixed', p.id, JSON.stringify(p.hours));
