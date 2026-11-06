// 2026-11-06: 麺屋優光 is a chain — 27 shops nationwide (Kyoto, Tokyo, Fukuoka, Sapporo, Nagoya, Hiroshima…) per its
// August 2025 press release (zaikei.co.jp/releases/3063356). 5+ same-name shops = chain (Greg 2026-11-05 Samboa ruling);
// a chain's flagship counts as the chain. Found while reviewing osw6-33 (京焼肉つじ) and osw2-34 (Stand By Me).
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
for (const id of ['kyr_menya_yukou', 'kyr_menya_yukou_kawaramachi']) {
  const p = c.places.find(p => p.id === id);
  if (!p) throw new Error('not found ' + id);
  p.hidden = 'chain'; console.log('hidden', id);
}
writeCity('kyoto', c);
// 麺屋 聖 ～kiyo～ is a 麺屋優光 group brand serving the same menu (retty theme 101970800 / macaro-ni 111422:
// "麺屋優光のグループ店として2022年にオープン"); osw1-40 counted 8 Menya Kiyo shops. Sub-brand of the chain → hidden.
{
  const c2 = readCity('kyoto');
  const p = c2.places.find(p => p.id === 'kyr_menya_kiyo_ichijoji');
  if (!p) throw new Error('not found kiyo');
  p.hidden = 'chain'; console.log('hidden', p.id);
  writeCity('kyoto', c2);
}
