// 2026-11-07: ダニエルズ is a chain. 株式会社グラマラスフード (daniels.jp, fetched 2026-11-07) lists seven ダニエルズ-named
// shops in Kyoto — 本店, ポルタ店, ソーレ, アルバ, ルーチェ, モンド, ファクトリー — plus 桃屋 錦. 5+ same-name shops of one
// operator = chain (shared-name variants count, as with 千葉 / 新 / 益市). Raised by osw13 in batch 96 (桃屋 query).
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_daniels_nishiki');
if (!p) throw new Error('not found');
p.hidden = 'chain';
writeCity('kyoto', c);
console.log('hidden', p.id);
