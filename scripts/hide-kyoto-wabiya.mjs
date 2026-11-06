// 2026-11-05: 菓子wabiya 西花見小路店 (osw9-13) is the sweets brand of 侘家古暦堂, which the integrator skipped in osw13-35
// as a Malebranche-group sub-brand (an October 2026 review ties 侘家古暦堂 to マールブランシュ). Same parent → hidden as chain
// (Greg 2026-11-05 sub-brand ruling).
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_kashi_wabiya_nishihanamikoji');
if (!p) throw new Error('not found');
p.hidden = 'chain';
writeCity('kyoto', c);
console.log('hidden', p.id);
