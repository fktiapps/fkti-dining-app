// 2026-11-05: 呑小路 やま岸 is one of 7 same-name やま岸 shops (富小路, 呑小路, 二条, 祇園, とりの小路 in Kyoto; 銀座 呑小路
// and 麻布台 in Tokyo — the record's own background plus the group site). osw1-12/13 and osw8-12 skipped the others under
// Greg's 2026-11-05 Samboa ruling (5+ same-name shops = chain); this one is hidden for consistency, as 河道屋銀華 was.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_nominokoji_yamagishi');
if (!p) throw new Error('not found');
p.hidden = 'chain';
writeCity('kyoto', c);
console.log('hidden', p.id);
