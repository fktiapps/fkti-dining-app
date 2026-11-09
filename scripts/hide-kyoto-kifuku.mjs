// 2026-11-08: 有限会社起福 (invoice T1130002022210, NTA) lists 17 shops in Kyoto and Osaka on its recruiting page
// (osw2-90, skip of 京もつ鍋 秀寅). That makes it a large parent; 酒場らいと (osw1-96) carries the same company's
// invoice number, so it is hidden like the THAN and WILL brands.
import { readCity, writeCity } from './lib-city.mjs';
const IDS = ['kyoto_sakaba_light_shijo'];
const c = readCity('kyoto');
for (const id of IDS) { const p = c.places.find(p => p.id === id); if (!p) throw new Error('not found: ' + id); p.hidden = 'chain'; }
writeCity('kyoto', c);
console.log('hidden', IDS.length);
