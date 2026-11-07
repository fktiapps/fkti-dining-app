// 2026-11-07: Tabelog lists six 市場小路 shops (osw1-57, which skipped 市場小路 木屋町店; osw2 and osw8 skipped the 伊勢丹 and 烏丸
// shops as brand-in-data). 5+ same-name shops of one brand = chain (Greg 2026-11-05 Samboa ruling).
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_ichiba_koji_teramachi');
if (!p) throw new Error('not found');
p.hidden = 'chain';
writeCity('kyoto', c);
console.log('hidden', p.id);
