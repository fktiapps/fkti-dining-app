// 2026-11-08: 株式会社THAN (large parent; earlier skips てんぷぅ, 和紋, チーズプラス, accent, と, CORNI) lists these
// as its own brands on than.co.jp/brands (fetched 2026-11-08): 鉄板スタンド酒場 ぽくぽーく, FULL MOON, 百圓寿司スタンド えにし.
// Not hidden: ラーメン荘 地球規模で考えろ — a Kyoto ramen brand with its own Fushimi main shop; THAN appears to run one branch.
import { readCity, writeCity } from './lib-city.mjs';
const IDS = ['kyoto_teppan_stand_pokupoku', 'kyoto_full_moon_kawaramachi', 'kyoto_hyakuen_sushi_enishi_takakura'];
const c = readCity('kyoto');
for (const id of IDS) { const p = c.places.find(p => p.id === id); if (!p) throw new Error('not found: ' + id); p.hidden = 'chain'; }
writeCity('kyoto', c);
console.log('hidden', IDS.length);
