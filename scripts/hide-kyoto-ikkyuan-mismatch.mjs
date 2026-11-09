// 2026-11-08: osw1 check — record ChIJG60kQMUIAWAR6bBHYQW0VA0 ("Ikkyu-an, Kodai-ji") mixes two shops: its text and
// SHOJIN/vegan data describe 高台寺 一休庵 (Tabelog 26001425, shojin/fucha; no 2025–26 review, so existence unconfirmed),
// while its pin is 一休庵 in Maruyama Park (Tabelog 26011058), a non-vegetarian dango café. Hidden as a wrong-source record;
// the Maruyama café is re-queued for drafting on its own evidence (26011058).
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'ChIJG60kQMUIAWAR6bBHYQW0VA0');
if (!p) throw new Error('not found');
p.hidden = 'wrong-source';
writeCity('kyoto', c);
console.log('hidden', p.id);
