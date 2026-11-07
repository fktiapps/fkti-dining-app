// 2026-11-06: 株式会社プロシード runs seven 新-named shops (proceed-kyoto.com, read 2026-11-06 by osw1-43): 祇園肉亭 新, 京焼肉 新,
// 焼肉牛匠新 (Gion and Taiwan) and three 肉まぶし専科 肉亭新. 5+ shops sharing one brand name under one operator = chain
// (Greg 2026-11-05 Samboa ruling; same reading as the 千葉 group). 京焼肉 新 and 肉亭新 were skipped (osw1-43, osw6-48).
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
for (const id of ['kyoto_gion_nikutei_shin', 'kyoto_yakiniku_gyusho_shin_gion']) {
  const p = c.places.find(p => p.id === id);
  if (!p) throw new Error('not found ' + id);
  p.hidden = 'chain'; console.log('hidden', id);
}
writeCity('kyoto', c);
