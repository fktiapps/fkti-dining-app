// Osaka sweep batches 6–15 gave menu items Japanese names that were transliterated from English
// Tabelog reviews ("Rich Shijimi Sio Ramen" -> 濃厚しじみ塩ラーメン), not taken from any Japanese source.
// The record rules forbid back-converting names, so blank those ja fields and drop the invented
// Japanese prefix from ramen.signature_bowl. Generic dish words (餃子, 炒飯, ラーメン …) are kept.
// Audit 2026-10-26: each name below was checked against the saved listing and review text and the
// shop's official page; none appears there.
import fs from 'fs';
const BLANK = {
  osaka_menha_tomoare: ['特製鶏白湯らーめん'],
  osaka_chuka_soba_fujii_namba: ['ニラそば'],
  osaka_hanamaruken_namba_hozenji: ['とろ骨ラーメン'],
  osaka_ramen_kio_dotonbori: ['亀王ラーメン'],
  osaka_horumon_ramen_8910_sennichimae: ['ホルモンらーめん(赤)', 'ホルモンらーめん(白)'],
  osaka_men_joylife_higashishinsaibashi: ['貝出汁らーめん', '特製貝出汁らーめん'],
  osaka_shijimi_ramen_shi43ya: ['濃厚しじみ塩ラーメン'],
  osaka_gyokotsuya_dotonbori: ['魚骨ラーメン', '辛い魚骨ラーメン', '魚骨つけ麺', '辛い魚骨つけ麺'],
  osaka_kotan_namba_walk: ['古潭ラーメン', 'バラ肉古潭', 'ピリ辛冷麺'],
  osaka_kappa_ramen_honpo_sennichimae: ['月見ラーメン'],
  osaka_menya_gaten_namba_shinsaibashi: ['MAZEそば', 'カレーまぜそば', 'DX鶏白湯ラーメン'],
  osaka_houou_rou_sennichimae: ['五目汁そば', 'ニラレバ定食'],
  osaka_ebi_shin_amemura: ['オマール海老ラーメン', 'オマール海老つけ麺'],
  osaka_tenchijin_sennichimae: ['元味ラーメン', '肉そば'],
};
// signature_bowl text that opened with one of those invented names
const SIG = {
  osaka_menha_tomoare: 'Special chicken paitan ramen ¥1,705 (August 2026).',
  osaka_men_joylife_higashishinsaibashi: 'Shellfish-broth ramen from ¥1,000; special ¥1,300 (August–September 2026).',
  osaka_shijimi_ramen_shi43ya: 'Rich shijimi shio ramen ¥1,200 (July 2026).',
  osaka_gyokotsuya_dotonbori: 'Fish-bone ramen ¥1,450; spicy fish-bone ramen ¥1,550 (October 2026).',
  osaka_kotan_namba_walk: 'Kotan ramen, shoyu or shio; pork-belly Kotan ¥950 (September 2026).',
  osaka_menya_gaten_namba_shinsaibashi: 'MAZE soba, Jirō-style; DX chicken paitan ramen ¥1,400 (August 2026).',
  osaka_ebi_shin_amemura: 'Lobster ramen from ¥1,100; whole-lobster topping ¥4,200 (April 2025).',
  osaka_tenchijin_sennichimae: 'Moto-aji tonkotsu; ajitama ramen with black garlic oil (December 2025); meat soba ¥880 (July 2026).',
  osaka_hanamaruken_namba_hozenji: 'Torokotsu ramen with two big pieces of pork (August 2026).',
};
const mf = 'data/osaka_menus.json'; const menus = JSON.parse(fs.readFileSync(mf, 'utf8'));
let n = 0;
for (const [id, names] of Object.entries(BLANK)) {
  const m = menus[id]; if (!m) throw new Error('missing menu ' + id);
  for (const name of names) { const i = m.items.find(x => x.ja === name); if (!i) throw new Error(`missing ${id} ${name}`); i.ja = ''; i.romaji = ''; n++; }
}
fs.writeFileSync(mf, JSON.stringify(menus, null, 1));
const df = 'data/osaka.json'; const raw = fs.readFileSync(df, 'utf8'); const d = JSON.parse(raw);
let s = 0;
for (const [id, text] of Object.entries(SIG)) { const p = d.places.find(x => x.id === id); if (!p || !p.ramen) throw new Error('missing ' + id); p.ramen.signature_bowl = text; s++; }
fs.writeFileSync(df, raw.includes('\n') ? JSON.stringify(d, null, 1) : JSON.stringify(d));
console.log(`blanked ${n} menu ja names; rewrote ${s} signature_bowl strings`);
