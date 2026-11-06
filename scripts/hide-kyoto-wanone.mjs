// 2026-11-05: 和ノ音 京都駅前店 (osw1-17) is one of at least 6 same-name 和ノ音 個室居酒屋 shops (Hiroshima-ekimae,
// Kaihin-Makuhari, Kobe Sannomiya, Kagoshima Tenmonkan, Akihabara-ekimae, Kyoto-ekimae — gurunavi ya64700/e295855/
// fbpd700/d6r6k1ty0000, epark hit621155/hit623866). 5+ same-name shops = chain (Greg 2026-11-05 Samboa ruling).
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_wanone_kyoto_ekimae');
if (!p) throw new Error('not found');
p.hidden = 'chain';
writeCity('kyoto', c);
console.log('hidden', p.id);
