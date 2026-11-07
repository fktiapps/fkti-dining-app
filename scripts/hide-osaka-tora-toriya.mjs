// 2026-11-07: TORA鶏YA has 7 shops — 梅田 (お初天神), リンクス梅田, 難波シティ, 京都四条河原町, 高槻, JR高槻 and 神戸三宮
// (Hot Pepper listings and Tabelog; found by osw9-55/56). 5+ same-name shops of one brand = chain (Greg 2026-11-05 Samboa ruling).
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('osaka');
const p = c.places.find(p => p.id === 'osaka_tora_toriya_ohatsutenjin');
if (!p) throw new Error('not found');
p.hidden = 'chain';
writeCity('osaka', c);
console.log('hidden', p.id);
