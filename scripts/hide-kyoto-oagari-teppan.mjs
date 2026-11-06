// 2026-11-05: お好み焼き 鉄板焼 OAGARI (osw6-21) is a fifth Oagari-named shop alongside 和牛火山おあがり 祇園本店, 嵐山本店,
// 大阪なんば店 and 祇園店 (osw1-22 skipped the Gion branch as a fast-expanding chain). Greg 2026-11-05 Samboa ruling: 5+
// same-name shops = chain. Hidden; the group's differently named 合法ユッケかたまり stays as a sister concept.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_oagari_teppan');
if (!p) throw new Error('not found');
p.hidden = 'chain';
writeCity('kyoto', c);
console.log('hidden', p.id);
