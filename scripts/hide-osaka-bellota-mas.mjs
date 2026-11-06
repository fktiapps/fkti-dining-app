// 2026-11-06: ベジョータ マス (osaka-kita osw7-24) is one of five ベジョータ shops in Kyoto and Osaka (ムアムア, コンチャ, ムチョ, マス…)
// run by one group (retty.me/restaurant/100000038209: 「京都大阪で五店舗展開しているベジョータグループ」). 5+ same-name shops of one
// brand = chain (Greg 2026-11-05 Samboa ruling); the Kyoto ベジョータ shops were skipped (osw2-31, osw9-43).
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('osaka');
const p = c.places.find(p => p.id === 'osaka_bellota_mas_shin_osaka');
if (!p) throw new Error('not found');
p.hidden = 'chain';
writeCity('osaka', c);
console.log('hidden', p.id);
