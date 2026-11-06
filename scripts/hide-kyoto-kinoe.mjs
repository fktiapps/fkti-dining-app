// 2026-11-06: 炭火焼肉KINOE (osw8-28) is one of seven KINOE/甲 yakiniku shops run by the same group in Kyoto
// (kinoe-yd.com, fetched 2026-11-06: 焼肉ダイニング 甲, ヤキニク 甲, 肉屋 甲, 炭火焼肉 KINOE, 西院焼肉 KINOE, 岩倉焼肉甲,
// 囲炉裏焼肉甲). 5+ same-name shops of one brand = chain (Greg 2026-11-05 Samboa ruling). Found by osw2-28.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_sumibi_yakiniku_kinoe');
if (!p) throw new Error('not found');
p.hidden = 'chain';
writeCity('kyoto', c);
console.log('hidden', p.id);
