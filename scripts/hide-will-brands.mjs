// 2026-11-08: 株式会社WILL (Osaka; will-food.com) is a multi-brand restaurant group across Kansai and Tokai — recruiting
// listings (directscout.recruit.co.jp 8541219 / 8502657) name 大阪 かに蔵, 京都 かに銀, 名古屋かに銀 and shops in Umeda,
// Kitashinchi, Tenma, Kawaramachi, Nagoya and Sannomiya; osw2-79 counted 20+ brands. Non-local multi-brand group = large
// parent (as THAN). Records whose own text names WILL as operator are hidden.
import { readCity, writeCity } from './lib-city.mjs';
const BY = { kyoto: ['kyoto_kanigin_kawaramachi', 'kyoto_tori_sakana_kawaramachi', 'kyoto_the_churrasco_kawaramachi'], osaka: ['osaka_sushi_gotengo_umeda'] };
for (const [city, ids] of Object.entries(BY)) {
  const c = readCity(city);
  for (const id of ids) { const p = c.places.find(p => p.id === id); if (!p) throw new Error('not found: ' + id); p.hidden = 'chain'; }
  writeCity(city, c);
  console.log(city, 'hidden', ids.length);
}
