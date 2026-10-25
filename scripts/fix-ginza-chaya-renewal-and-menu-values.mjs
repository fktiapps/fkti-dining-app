// Two corrections found during sweep batch 93 (2026-10-25).
//
// 1. CHAYA Natural & Wild Table Hibiya renewed on 1 Sep 2026. Its record still said the
//    kitchen cooks without meat, eggs or dairy; the October 2026 lunch menu (official PDF)
//    says the shop now serves animal products alongside its vegan/macrobiotic dishes, and
//    labels each dish Vegan or Seafood with an allergen list. The record and menu are
//    rebuilt from that PDF. GF stays 'ask': every main lists wheat, and the kitchen warns
//    it handles wheat. Vegan stays 'options' (dishes labelled by the operator).
// 2. Menu items must use vegan ∈ {vegan, ask, no, ''} — two b87 items said 'yes' and one
//    b82 item said 'gf', so menu_vegan_count missed them. lint-data now rejects this.
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { counts, it } from './lib-ginza-sweep.mjs';
const { readLang, mergePlace, writeLang } = await import(pathToFileURL(path.resolve('scripts/lib-i18n.mjs')).href);

const TODAY = '2026-10-25';
const file = 'data/tokyo.json'; const raw = fs.readFileSync(file, 'utf8'); const d = JSON.parse(raw);
const mf = 'data/tokyo_menus.json'; const menus = JSON.parse(fs.readFileSync(mf, 'utf8'));
const ja = readLang('tokyo', 'ja');
const byId = id => { const p = d.places.find(x => x.id === id); if (!p) throw new Error(`missing ${id}`); return p; };
const recount = id => Object.assign(byId(id), { menu_verified: menus[id].verified, ...counts(menus[id].items) });

// ---------------------------------------------------------------- 1. CHAYA
{
  const id = 'tokyo_chaya_natural_wild_table_hibiya';
  const SITE = 'https://chayam.co.jp/restaurant/hibiya/';
  const PDF = 'https://chayam.co.jp/wp/wp-content/uploads/2026/10/HBY_lunch2610.pdf';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13002129/'; const R = TB + 'dtlrvwlst/';
  const p = byId(id);
  Object.assign(p, {
    gf_detail: 'Ask, and expect little. The October 2026 lunch menu lists allergens for every dish: all the mains, pastas, burgers and bread list wheat (小麦). Only a few desserts list none: seasonal vegan pudding (soy, almond), W-berry mousse shortcake (soy, almond), grass fruit shortcake (soy, almond, kiwi, orange) and the smooth pudding (egg, milk). The menu warns that the kitchen also makes dishes containing wheat and other allergens, and says to ask staff about other ingredients.',
    vegan_detail: 'The October 2026 lunch menu labels its vegan dishes: SOY katsu curry, SOY Bolognese, six-vegetable peperoncino, spicy teriyaki SOY katsu burger, the baguette, vegan waffles and several cakes and puddings. Since the 1 September 2026 renewal, the shop also serves chicken, wagyu, pork, mackerel, tuna, shellfish, eggs and dairy, cooked in the same kitchen, so it is no longer an all-plant kitchen. Stick to the dishes labelled Vegan.',
    cuisine: 'Vegan and macrobiotic dishes, now alongside meat and fish (renewed Sept 2026) · labelled-vegan SOY katsu curry, SOY Bolognese, teriyaki SOY katsu burger · vegan cakes · allergens listed per dish',
    menu_url: PDF,
    notes: "[Vegan options · CHAYA's renewed Hibiya table] A 43-seat restaurant in the basement of Hibiya Chanter, run by CHAYA Macrobi Foods. It was built on a vegan and macrobiotic concept, but since the 1 September 2026 renewal it also serves animal products. The October 2026 lunch menu mixes labelled-vegan dishes, such as SOY katsu curry, SOY Bolognese, a six-vegetable peperoncino, a teriyaki SOY katsu burger on vegan bread and vegan cakes and puddings, with a wagyu burger, chicken rice, a tuna-steak bowl, a mackerel burger and Hiroshima oyster pasta. Every dish carries an allergen list, and organic brown or white rice is offered. One October 2026 diner found the menu completely changed since the last visit.",
    safety: {
      ...p.safety,
      gf_cross_contamination: [{ text: 'The menu states that the kitchen also prepares dishes containing wheat and other allergens.', source: PDF }],
      vegan_cross_contact: [{ text: 'Since the 1 September 2026 renewal the menu adds animal products (meat, fish, eggs, dairy) alongside the vegan dishes, from the same kitchen.', source: PDF }],
      staff_allergy_handling: [{ text: 'Each dish lists its specified/recommended allergens; other ingredients are to be asked of staff.', source: PDF }],
      positives: [{ text: 'Vegan dishes are labelled on the official menu.', source: PDF }],
      confidence: 'medium', last_checked: TODAY,
    },
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (renewal notice of 6 Aug 2026; October 2026 lunch menu) and Tabelog reviews from October 2026.' },
    chef_bio: { ...p.chef_bio, anecdotes: [
      { text: '「これまで当店は「Vegan・マクロビ」を軸としたコンセプトで…Vegan・マクロビメニューに加え動物性食材も取り入れたメニューも提供させて頂く、新しいスタイルへと進化いたします。」 — renewal note on the October 2026 lunch menu.', source: PDF },
      { text: '"The menu had completely changed since my last visit… The one-dish lunch came in a large bowl, filled with sautéed tuna, anchovy potatoes, salad, and rice." — October 2026.', source: R + 'B537402473/' },
    ], sources: [SITE, PDF, TB] },
  });
  menus[id] = { verified: 'authoritative', confidence: 'high', sources: [PDF],
    price_note: 'Official lunch menu PDF, October 2026; prices excl. tax (incl. tax in brackets).', last_checked: TODAY, items: [
      it('SOY カツカレー', '', 'SOY katsu curry [wheat, soy, peanut]', '¥1,350 (¥1,485)', 'Rice', 'no', 'vegan', 'Labelled Vegan.', 'soy_katsu_curry'),
      it('SOY ボロネーゼ', '', 'SOY Bolognese [wheat, soy]', '¥1,450 (¥1,595)', 'Pasta', 'no', 'vegan', 'Labelled Vegan.', 'soy_bolognese'),
      it('６種野菜のペペロンチーノ', '', 'Peperoncino with six vegetables [wheat, soy]', '¥1,400 (¥1,540)', 'Pasta', 'no', 'vegan', 'Labelled Vegan.', 'peperoncino'),
      it('スパイス香るテリヤキ SOY カツバーガー', '', 'Spicy teriyaki SOY katsu burger [wheat, soy, apple, sesame]', '¥1,250 (¥1,375)', 'Burger & bread', 'no', 'vegan', 'Labelled Vegan; vegan bread from EARTH BAKERY.', 'soy_katsu_burger'),
      it('バゲット', '', 'Baguette [wheat]', '¥300 (¥330)', 'Burger & bread', 'no', 'vegan', 'Labelled Vegan.', 'baguette'),
      it('マグロステーキのマクロビボウル', '', 'Macrobiotic bowl of tuna steak [wheat, soy, sesame]', '¥1,600 (¥1,760)', 'Rice', 'no', 'no', 'Labelled Seafood.', 'tuna_bowl'),
      it('クラシックチキンライス', '', 'Classic chicken rice [chicken, wheat, soy]', '¥1,200 (¥1,320)', 'Rice', 'no', 'no', '', 'chicken_rice'),
      it('和牛バーガー', '', 'Wagyu burger [wheat, soy, apple, beef, sesame]', '¥2,100 (¥2,310)', 'Burger & bread', 'no', 'no', '', 'wagyu_burger'),
      it('広島産牡蠣とあさり、ムール貝のジェノベーゼ', '', 'Hiroshima oyster, clam and mussel Genovese [wheat]', '¥1,650 (¥1,815)', 'Pasta', 'no', 'no', 'Labelled Seafood.', 'genovese'),
      it('古代小麦を使用したワッフルと季節のフルーツ', '', 'Ancient-wheat vegan waffles with seasonal fruit [wheat, soy, banana, kiwi, orange, almond]', '¥1,500 (¥1,650)', 'Dessert', 'no', 'vegan', 'Labelled Vegan.', 'vegan_waffles'),
      it('季節の vegan プリン', '', 'Seasonal vegan pudding [soy, almond]', '¥600 (¥660)', 'Dessert', 'ask', 'vegan', 'Labelled Vegan; no wheat listed, but the kitchen handles wheat.', 'vegan_pudding'),
      it('W ベリーのムースショートケーキ', '', 'W-berry mousse shortcake [soy, almond]', '¥800 (¥880)', 'Dessert', 'ask', 'vegan', 'Labelled Vegan; no wheat listed, but the kitchen handles wheat.', 'wberry_shortcake'),
      it('グラスフルーツショートケーキ', '', 'Grass fruit shortcake [soy, almond, kiwi, orange]', '¥850 (¥935)', 'Dessert', 'ask', 'vegan', 'Labelled Vegan; no wheat listed, but the kitchen handles wheat.', 'grass_fruit_shortcake'),
      it('抹茶チーズケーキ', '', 'Matcha "cheesecake" [wheat, soy, almond]', '¥850 (¥935)', 'Dessert', 'no', 'vegan', 'Labelled Vegan.', 'matcha_cheesecake'),
      it('キャロットケーキ', '', 'Carrot cake [wheat, soy, walnut, apple]', '¥650 (¥715)', 'Dessert', 'no', 'vegan', 'Labelled Vegan.', 'carrot_cake'),
      it('なめらか濃厚プリン', '', 'Smooth rich pudding [egg, milk]', '¥600 (¥660)', 'Dessert', 'ask', 'no', 'No wheat listed, but the kitchen handles wheat.', 'pudding'),
    ] };
  recount(id);
  mergePlace(ja, id, {
    cuisine: 'ヴィーガンとマクロビの料理に、肉や魚の料理も(2026年9月リニューアル)・ヴィーガン表示のSOYカツカレー、SOYボロネーゼ、テリヤキSOYカツバーガー・ヴィーガンのケーキ・料理ごとにアレルゲン表示',
    gf_detail: '要確認、ただし選択肢はわずかです。2026年10月のランチメニューは料理ごとにアレルゲンを表示しており、主菜、パスタ、バーガー、パンはすべて小麦を含みます。小麦の表示がないのは一部のデザートだけ(季節のveganプリン[大豆・アーモンド]、Wベリーのムースショートケーキ[大豆・アーモンド]、グラスフルーツショートケーキ[大豆・アーモンド・キウイ・オレンジ]、なめらか濃厚プリン[卵・乳])。メニューには、厨房で小麦などのアレルゲンを含む料理も作っていること、その他の原材料はスタッフに尋ねるよう記されています。',
    vegan_detail: '2026年10月のランチメニューはヴィーガンの料理に表示があります: SOYカツカレー、SOYボロネーゼ、6種野菜のペペロンチーノ、スパイス香るテリヤキSOYカツバーガー、バゲット、ヴィーガンワッフル、いくつかのケーキとプリン。2026年9月1日のリニューアル以降、同じ厨房で鶏肉、和牛、豚肉、鯖、マグロ、貝、卵、乳製品も使うため、もう植物性だけの厨房ではありません。Vegan表示の料理を選んでください。',
    notes: '[ヴィーガンの選択肢あり・リニューアルしたCHAYA日比谷] 日比谷シャンテの地下にある43席の店で、運営は株式会社CHAYAマクロビフーズ。ヴィーガンとマクロビを軸にしてきましたが、2026年9月1日のリニューアルで動物性の食材も使うようになりました。2026年10月のランチメニューには、SOYカツカレー、SOYボロネーゼ、6種野菜のペペロンチーノ、ヴィーガンのパンのテリヤキSOYカツバーガー、ヴィーガンのケーキやプリンなどVegan表示の料理と、和牛バーガー、チキンライス、マグロステーキのボウル、鯖バーガー、広島産牡蠣のパスタが並びます。どの料理にもアレルゲン表示があり、ご飯は国産有機の玄米か白米。2026年10月の客は、前回からメニューががらりと変わったと書いています。',
  });
}

// ---------------------------------------------------------------- 2. menu value repairs
for (const [id, keys, to] of [
  ['tokyo_nibun_no_ichi_ginza_sony_park', ['falafel', 'hummus'], 'vegan'],
  ['tokyo_del_sole_2due_ginza2', ['espresso'], 'vegan'],
]) {
  for (const item of menus[id].items) if (keys.includes(item.dish_key)) { console.log(`${id} ${item.dish_key}: vegan ${item.vegan} -> ${to}`); item.vegan = to; }
  recount(id);
}

fs.writeFileSync(file, raw.includes('\n') ? JSON.stringify(d, null, 1) : JSON.stringify(d));
fs.writeFileSync(mf, JSON.stringify(menus, null, 1));
writeLang('tokyo', 'ja', ja);
const c = byId('tokyo_chaya_natural_wild_table_hibiya');
console.log(`CHAYA: menu ${menus[c.id].items.length} items, vegan ${c.menu_vegan_count} (${c.menu_vegan_meals} meals), gf_ask ${c.menu_gf_ask_count}`);
