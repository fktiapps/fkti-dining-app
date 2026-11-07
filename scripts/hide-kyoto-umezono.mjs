// 2026-11-07: Kyoto's 梅園 (甘味処) lists five 梅園 shops on its official site (found by osw2-49, which skipped 梅園 清水店).
// 5+ same-name shops of one brand = chain (Greg 2026-11-05 Samboa ruling). The Tokyo 梅園 浅草本店 is an unrelated house.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_umezono_kawaramachi');
if (!p) throw new Error('not found');
p.hidden = 'chain';
writeCity('kyoto', c);
console.log('hidden', p.id);
