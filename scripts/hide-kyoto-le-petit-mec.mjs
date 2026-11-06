// 2026-11-05: ル・プチメック has 5 same-name shops in our crawl (今出川 26000210, 御池 26005029, JR京都伊勢丹 26039972,
// JR京都駅 26035696, 新大阪駅 27122043); osw2-17 skipped 御池店 as a chain. 今出川店 (osw1-10) was drafted on the official
// site's count of 4 and is hidden for consistency (5+ same-name = chain, Greg 2026-11-05).
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_le_petit_mec_imadegawa');
if (!p) throw new Error('not found');
p.hidden = 'chain';
writeCity('kyoto', c);
console.log('hidden', p.id);
