// 2026-11-05: 河道屋銀華 (osw13-32) was drafted as a 1902 branch house of 総本家河道屋. osw8-9 then skipped 河道屋倖松庵
// under Greg's 2026-11-05 Samboa ruling (same-name shops with 5+ branches = chain, shared owner or not): our crawl lists
// 7 河道屋 shops (養老 26001100, 総本家 26014542, 晦庵 26043813, 銀華 26000214, 倖松庵 26040067, 倖松庵分店 26010441,
// 河新麺房 河道屋支店 26014107). For consistency, 銀華 is hidden as a chain too.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_kawamichiya_ginka');
if (!p) throw new Error('not found');
p.hidden = 'chain';
writeCity('kyoto', c);
console.log('hidden', p.id);
