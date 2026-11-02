// 2026-11-02: 只野 (osw10 b7) has mom_and_pop:true on "family-run" plus "two staff members", which shows
// neither one person nor a couple (brief line 11). Same basis as 宝来 (osw10 b13), set false there too.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('tokyo');
const p = c.places.find(p => p.id === 'tokyo_tadano_yakitori_yotsuya');
if (!p || p.mom_and_pop !== true) throw new Error('not found or already false');
p.mom_and_pop = false;
writeCity('tokyo', c);
console.log('fixed', p.id);
