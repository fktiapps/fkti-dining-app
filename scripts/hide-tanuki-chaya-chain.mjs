// 2026-11-02: たぬき茶屋 (osw2 b17) was drafted as the 力丸 group's only shop of that name, but osw4 b19's
// chain check found the same ¥385 robatayaki format under many 力丸 names across Osaka (Umeda, Tennoji, Namba,
// Shinsaibashi, Abeno, Juso: gnavi 565as6hp0000, epark hit625726). Same concept, 5+ shops = chain (Greg 2026-11-02).
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('osaka');
const p = c.places.find(p => p.id === 'osaka_tanuki_chaya_sennichimae');
if (!p || p.hidden) throw new Error('not found or already hidden');
p.hidden = 'chain';
writeCity('osaka', c);
console.log('hidden', p.id);
