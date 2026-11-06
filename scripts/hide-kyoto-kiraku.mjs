// 2026-11-05: 先斗町しゃぶしゃぶすき焼き きらく (osw9-8) is one of 7 きらく-named shops run by RIC2 (焼肉きらく at 5 addresses
// per ric2.co.jp, plus しゃぶしゃぶすき焼き きらく in Pontocho and Kitashinchi); osw2-21 skipped 先斗町焼肉 きらく. Same brand,
// 5+ shops = chain (Greg 2026-11-05 Samboa ruling, counted per brand across concepts).
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_pontocho_kiraku');
if (!p) throw new Error('not found');
p.hidden = 'chain';
writeCity('kyoto', c);
console.log('hidden', p.id);
