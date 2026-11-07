// 2026-11-07: the 益市 group runs 4 益市-named yakiniku shops (八条口, 本店, 東店, 堺町錦) plus, per an October 2026 review,
// a new brand 肉の、ますいち。 (osw13-84) — five shops sharing the 益市/ますいち name under one operator, plus three other brands.
// 5+ same-name shops of one operator = chain (Greg 2026-11-05 Samboa ruling; same reading as the 千葉 and 新 groups).
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_masuichi_sakaimachi_nishiki');
if (!p) throw new Error('not found');
p.hidden = 'chain';
writeCity('kyoto', c);
console.log('hidden', p.id);
