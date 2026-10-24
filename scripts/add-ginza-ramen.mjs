// Ginza ramen, near Courtyard by Marriott Tokyo Ginza (銀座6-14-10). Researched 2026-10-23.
//   + 九州じゃんがら 銀座店   — company branch (タスグループ), 108 m from the hotel
//   + 中華 銀座亭             — 1975 machi-chūka, third-generation family owner, 175 m
//   + 銀座たんめん            — owner-run 9-seat tanmen counter, opened 2019, 403 m
//   ~ tokyo3__176 九州じゃんがら 秋葉原本店 — corrected: a chain, not mom-and-pop; vegan raised
//     to 'options' on cited evidence; temporarily closed for renovation since 2026-09-30.
// Sources: the shops' own pages where they exist, Tabelog /en/ (listing + dated 2026 reviews),
// san-tatsu, FRaU (gendai.media), nap-camp, visit-chiyoda. Pins: Tabelog /en/ geo + GSI address
// match (+ OSM node where one exists). Run from the repo root. Idempotent per record.
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
const { readLang, mergePlace, writeLang } = await import(pathToFileURL(path.resolve('scripts/lib-i18n.mjs')).href);

const file = 'data/tokyo.json'; const raw = fs.readFileSync(file, 'utf8'); const d = JSON.parse(raw);
const mf = 'data/tokyo_menus.json'; const menus = JSON.parse(fs.readFileSync(mf, 'utf8'));
const ja = readLang('tokyo', 'ja');
const TODAY = '2026-10-23';
const gm = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
const it = (ja, romaji, en, price, section, gf, vegan, note, dish_key) => ({ ja, romaji, en, price, section, gf, vegan, note, dish_key });
const MEAL = /main|entree|course|set\b|teishoku|定食|丼|donburi|rice bowl|curry|カレー|hot ?pot|nabe|鍋|grill|teppan|鉄板|焼|主菜|おかず|lunch|dinner|noodle|麺|ramen|そば|うどん|soba|udon|pasta|burger|sandwich|plate|sushi|寿司|鮨|bento|弁当|定番|ご飯もの|gohan/i;
const PERIPH = /drink|beverage|ドリンク|コーヒー|珈琲|coffee|\btea\b|茶|dessert|sweets|デザート|甘味|スイーツ|パフェ|cake|ケーキ|\bside|サイド|小鉢|副菜|pickle|漬|appetiz|前菜|snack|topping|トッピング|salad|サラダ/i;
const isMeal = i => !PERIPH.test(i.section) && (MEAL.test(i.section) || MEAL.test(i.en + ' ' + i.ja));
const menuCounts = items => ({
  menu_gf_count: items.filter(i => i.gf === 'gf').length,
  menu_vegan_count: items.filter(i => i.vegan === 'vegan').length,
  menu_gf_meals: items.filter(i => i.gf === 'gf' && isMeal(i)).length,
  menu_vegan_meals: items.filter(i => i.vegan === 'vegan' && isMeal(i)).length,
  menu_gf_ask_count: items.filter(i => i.gf === 'ask').length,
});
const log = [];
const add = (place, menu, jaFields) => {
  if (d.places.some(p => p.id === place.id)) { log.push(`${place.id}: already present`); return; }
  Object.assign(place, { has_menu: true, menu_verified: menu.verified, ...menuCounts(menu.items) });
  d.places.push(place); menus[place.id] = menu; mergePlace(ja, place.id, jaFields);
  log.push(`${place.id}: added (${menu.items.length} menu items)`);
};

// ---------------------------------------------------------------- 九州じゃんがら 銀座店
{
  const SHOP = 'https://kyushujangara.co.jp/shops/ginza/';
  const SHOP_EN = 'https://kyushujangara.co.jp/en/shoplist/ginza/';
  const MENU = 'https://kyushujangara.co.jp/menu/';
  const MENU_EN = 'https://kyushujangara.co.jp/en/menulist/';
  const LIST = 'https://kyushujangara.co.jp/shops/';
  const HIST = 'https://kyushujangara.co.jp/en/ourhistory/';
  const ABOUT = 'https://kyushujangara.co.jp/contact/aboutus/';
  const FAQ = 'https://kyushujangara.co.jp/contact/qanda/';
  const CHIYODA = 'https://visit-chiyoda.tokyo/app/spot/detail/927';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13000570/';
  const RV_MAY = TB + 'dtlrvwlst/B528837778/';
  const RV_JUN = TB + 'dtlrvwlst/B532111911/';
  const RV_JUL = TB + 'dtlrvwlst/B531983831/';
  const RV_MAY3 = TB + 'dtlrvwlst/B528157502/';
  const day = [['11:00', '22:30']];
  const place = {
    id: 'tokyo_kyushu_jangara_ginza', name: '九州じゃんがら 銀座店 (Kyushu Jangara Ginza)', category: 'OMNI',
    lat: 35.669417, lng: 139.764877,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: "Not gluten-free. The company describes its ramen noodles as a blend of several wheat flours bound with egg white, and lists no gluten-free noodle. Its FAQ publishes no allergen information. The vegan bowl is seasoned with dark soy sauce (濃い口醤油), which in Japan is brewed with wheat by default, and the seasoned egg is marinated in the house soy sauce. Not suitable for celiacs.",
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: "The Ginza shop lists one plant-based bowl, 濃い口醤油のヴィーガンらあめん (vegan dark-soy-sauce ramen): a vegetable soup with a deep soy sauce flavour, which can be ordered without the 'five pungent vegetables' (garlic, onion, leek and the like). At the Akihabara branch the same bowl is documented with egg-free noodles and soy-meat chashu; ask at Ginza that it is made the same way. Every other bowl is built on pork-bone soup (with chicken frames in the house Kyushu Jangara), and the plant-based bowl comes out of the same kitchen.",
    hours_raw: "11:00–22:30 (last order 22:15) per the shop's own page, which names no closed day. Tabelog's listing gives Mon–Sat 11:00–22:00 and closed Sundays — confirm before a Sunday visit.",
    hours: { 0: day, 1: day, 2: day, 3: day, 4: day, 5: day }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme (Ginza Katagiri Bldg 1F) — 3 min from Higashi-Ginza (Hibiya line) and from Ginza (Ginza line)',
    cuisine: 'Kyushu-style tonkotsu ramen (Kyushu Jangara chain) · vegan shoyu ramen', cuisine_type: 'ramen',
    website: SHOP,
    gmaps: gm('九州じゃんがら 銀座店 東京都中央区銀座6-12-17'),
    menu_url: MENU,
    notes: "[Ramen · Tokyo chain] The Ginza branch of Kyushu Jangara, a Tokyo ramen company founded in Akihabara in 1984. It opened on Mihara-dōri in Ginza 7-chōme in 1991 and moved to this spot on 2010-07-07. Its 16 seats are all at tables. The house bowl is a mild pork-bone soup with chicken frames and vegetables. The rest of the line-up runs from the creamy Hakata/Kurume-style Bonshan to the Kumamoto-style Kobonshan with black-garlic oil. The 'zenbu-iri' (everything in) bowl, with braised pork belly, mentaiko and a seasoned egg, is a phrase the shop says was born at its own counter. Pickled mustard greens and red ginger are free at the table. There is also a plant-based shoyu ramen. Menus in English, Chinese, Korean and Thai are kept at every branch, and 2026 diners describe a queue of overseas visitors at peak times.",
    chef_bio: {
      chef_name: null, roles: ['ramen company (タスグループ — 九州じゃんがら)'],
      origin: 'Founded in Akihabara, Tokyo, in 1984; Kyushu-style tonkotsu',
      background: "Kyushu Jangara is run by Tas Group (タスグループ), which began in 1979 as the ブルカン塾 cram school and opened its first ramen shop in Akihabara in 1984, in the company's words to shore up the school's finances. It now runs five Kyushu Jangara shops in Tokyo — Akihabara, Harajuku, Ginza, Akasaka and Shiba-Daimon — plus a vegan bistro in Harajuku, and in 1993 moved its prep into a central kitchen.",
      philosophy: null,
      specialty: 'Mild tonkotsu (Kyushu Jangara), creamy Hakata/Kurume-rooted Bonshan, Kumamoto-style Kobonshan with house black-garlic oil; zenbu-iri toppings; a plant-based shoyu ramen.',
      anecdotes: [
        { text: "The company started as a cram school (ブルカン塾, 1979); it opened Kyushu Jangara in 1984 to rebuild the school's finances (「ブルカン塾」の経営基盤を立て直すために).", source: ABOUT },
        { text: 'The Ginza shop first opened in 1991 on Mihara-dōri in Ginza 7-chōme.', source: HIST },
        { text: 'It moved to its present address, Ginza 6-12-17, on 7 July 2010.', source: TB },
        { text: "'Zenbu-iri' (全部入り) — braised pork belly, mentaiko and a seasoned egg on one bowl — is a word the shop says was born at its counter in 1984, when customers asked which toppings they wanted answered 'put everything in!'", source: MENU },
        { text: 'The braised pork belly (角肉) is a recipe handed down from a master of Nagasaki shippoku cuisine.', source: MENU },
        { text: 'The illustrated postcard pictures (絵手紙) on the shop walls are the work of the company president, Shimokawa Takashi.', source: FAQ },
        { text: 'The vegan ramen grew out of offers from several Southeast Asian countries from 2013, was served in JAL international first and business class, and has been on the menu at every Kyushu Jangara in several variations since 2015.', source: CHIYODA },
        { text: "A June 2026 diner singled out the manager's friendliness and the energetic way the staff served a queue of overseas visitors.", source: RV_JUN },
      ],
      japanese_sources_summary: '公式サイト(kyushujangara.co.jp)より: タスグループ(代表取締役社長 下川高士、設立1979年9月)。1979年ブルカン塾、1984年九州じゃんがら秋葉原本店創業。銀座店は1991年に銀座七丁目の三原通りに開店(沿革)、食べログによれば2010年7月7日に銀座7-11-10から現住所(銀座6-12-17 銀座片桐ビル1F)へ移転。営業時間11:00〜22:30(L.O.22:15)、お会計は退店時レジ、現金・交通系IC・PayPay・Alipay・WeChat Pay・各種カード。銀座店のメニュー: 九州じゃんがら、ぼんしゃん、こぼんしゃん、九州じゃんがら味噌、からぼん、濃い口醤油のヴィーガンらあめん。麺は数種類の小麦粉と卵白。英語・中国語・韓国語・タイ語メニューを全店に用意(よくあるご質問)。',
      confidence: 'high', sources: [SHOP, SHOP_EN, MENU, MENU_EN, LIST, HIST, ABOUT, FAQ, CHIYODA, TB, RV_MAY, RV_JUN, RV_JUL],
    },
    cultural_comfort: { level: 'english', note: 'The company keeps English, Chinese, Korean and Thai menus at every shop, and 2026 diners describe a mostly overseas crowd. Table seating only; pay at the register on the way out (cards, IC cards and QR payments accepted). Expect a queue at peak times.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [
        { text: 'The ramen noodles are a blend of several wheat flours bound with egg white (数種類の小麦粉の配合と、卵白); no gluten-free noodle is offered.', source: MENU },
      ],
      soy_sauce_wheat: [
        { text: 'The plant-based bowl is a dark-soy-sauce (濃い口醤油) ramen; Japanese soy sauce is brewed with wheat unless stated otherwise.', source: MENU },
        { text: 'The seasoned egg (味玉子) is marinated in the house soy-sauce tare.', source: MENU },
      ],
      vegan_cross_contact: [
        { text: 'The house soup is pork bone and chicken frames simmered with vegetables; Bonshan is pork-bone-led and Kobonshan pork bone and chicken.', source: MENU },
        { text: 'At the Akihabara branch the vegan bowl is documented with a vegetable-only soup, egg-free noodles and soy-meat chashu — confirm the Ginza bowl is made the same way.', source: CHIYODA },
      ],
      staff_allergy_handling: [
        { text: 'The company FAQ publishes no allergen or ingredient information.', source: FAQ },
      ],
      positives: [
        { text: 'A permanent plant-based shoyu ramen on the Ginza menu, orderable without the five pungent vegetables (五葷抜き).', source: SHOP },
      ],
      confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['tonkotsu', 'chicken', 'vegetable'], broth_texture: null, tare: [], aroma_oil: ['mayu'], richness: null,
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: null, notes: 'Thin noodles for the tonkotsu bowls: several wheat flours bound with egg white, cooked to a firm, springy bite; refills (替玉) available.' },
      regional_style: ['Hakata/Kurume tonkotsu', 'Kumamoto tonkotsu'],
      sub_genre: ['ramen'],
      signature_bowl: '九州じゃんがら — the mild tonkotsu house bowl; regulars order it 全部入り (everything in).',
      chashu: 'The signature pork is 角肉 — pork belly braised long and de-fatted, from a Nagasaki shippoku recipe — offered as a topping and in the zenbu-iri bowl.',
      notable_toppings: ['角肉 braised pork belly', 'mentaiko (spicy cod roe)', 'ajitama (seasoned egg, served whole)', 'free pickled mustard greens (takana) and red ginger at the table'],
      gf: { status: 'no', note: 'Wheat-and-egg-white noodles; no gluten-free noodle on the menu.' },
      vegan: { status: 'available', note: 'One plant-based shoyu ramen at Ginza (五葷抜き on request); everything else is pork-bone soup.' },
      confidence: 'medium', sources: [MENU, MENU_EN, SHOP, HIST, RV_MAY, RV_JUN], last_checked: TODAY,
    },
    mom_and_pop: false,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目12番17号 (go) 4m; ${TODAY}`,
  };
  const items = [
    it('九州じゃんがら', 'kyuushuu jangara', 'Kyushu Jangara — mild tonkotsu (house bowl)', '¥940', 'Ramen', 'no', 'no', 'Pork-bone & chicken-frame soup; wheat-and-egg-white noodles. Price paid by a Tabelog reviewer at Ginza, May 2026.', 'jangara_ramen'),
    it('九州じゃんがら 全部入り', 'kyuushuu jangara zenbu iri', 'Kyushu Jangara, everything in (braised pork belly, mentaiko, seasoned egg)', '¥1,590', 'Ramen', 'no', 'no', 'Price paid by a Tabelog reviewer at Ginza, June 2026.', 'jangara_ramen_zenbu'),
    it('ぼんしゃん', 'bonshan', 'Bonshan — creamy Hakata/Kurume-style tonkotsu', '', 'Ramen', 'no', 'no', 'Pork-bone soup; wheat noodles.', 'bonshan'),
    it('こぼんしゃん', 'kobonshan', 'Kobonshan — Kumamoto-style tonkotsu with house black-garlic oil', '', 'Ramen', 'no', 'no', 'Pork-bone & chicken-frame soup; wheat noodles.', 'kobonshan'),
    it('こぼんしゃん 全部入り', 'kobonshan zenbu iri', 'Kobonshan, everything in', '¥1,680', 'Ramen', 'no', 'no', 'Price paid by Tabelog reviewers at Ginza, June and July 2026.', 'kobonshan_zenbu'),
    it('九州じゃんがら 味噌', 'kyuushuu jangara miso', 'Kyushu Jangara miso — mild tonkotsu with blended miso', '', 'Ramen', 'no', 'no', 'Pork-bone soup; wheat noodles.', 'jangara_miso'),
    it('からぼん', 'karabon', 'Karabon — creamy tonkotsu with a dozen-plus spices (heat level selectable)', '', 'Ramen', 'no', 'no', 'Pork-bone soup; wheat noodles. The default is the hottest level.', 'karabon'),
    it('濃い口醤油のヴィーガンらあめん', 'koikuchi shouyu no vegan raamen', 'Vegan dark-soy-sauce ramen (vegetable soup)', '', 'Ramen', 'no', 'vegan', "The company labels it plant-based; 五葷抜き (no garlic/onion/leek) on request. Dark soy sauce = wheat by default. Egg-free noodles and soy-meat chashu documented at the Akihabara branch — confirm at Ginza. Same kitchen as the pork-bone ramen.", 'vegan_shoyu_ramen'),
    it('替玉', 'kaedama', 'Noodle refill', '¥150', 'Toppings', 'no', 'no', 'Wheat-and-egg-white noodles. Price paid by a Tabelog reviewer at Ginza, May 2026.', 'kaedama'),
    it('角肉', 'kakuniku', 'Braised pork belly (Nagasaki shippoku recipe)', '', 'Toppings', '', 'no', '', 'kakuni'),
    it('めんたいこ', 'mentaiko', 'Mentaiko (spicy cod roe)', '', 'Toppings', '', 'no', '', 'mentaiko'),
    it('味玉子', 'ajitamago', 'Seasoned soft-boiled egg (served whole)', '', 'Toppings', 'no', 'no', 'Marinated in the house soy-sauce tare.', 'ajitama'),
  ];
  const menu = {
    verified: 'partial', confidence: 'medium',
    sources: [SHOP, MENU, MENU_EN, CHIYODA, RV_MAY, RV_JUN, RV_JUL, RV_MAY3],
    price_note: "Bowl list from the Ginza shop's own page (the company menu adds つけちゃん, むぎちゃん and a Kumamoto-style vegan bowl that the Ginza page does not list). The company publishes no prices; the four prices here are what Tabelog reviewers paid at Ginza in May–July 2026.",
    last_checked: TODAY, items,
  };
  add(place, menu, {
    cuisine: '九州とんこつラーメン(九州じゃんがらチェーン)・ヴィーガン醤油ラーメン',
    neighborhood: '銀座六丁目(銀座片桐ビル1F)。東銀座駅(日比谷線)・銀座駅(銀座線)から徒歩3分',
    gf_detail: 'グルテンフリーではありません。会社の説明では、ラーメンの麺は数種類の小麦粉を配合し卵白でつないだもので、グルテンフリーの麺はありません。よくあるご質問にもアレルギー情報は掲載されていません。ヴィーガンの一杯は濃い口醤油で味付けされており、日本の醤油は特に明記がなければ小麦を使って醸造されています。味玉子も自家製の醤油だれに漬け込んだものです。セリアック病の方には適していません。',
    vegan_detail: '銀座店のメニューには植物性の一杯「濃い口醤油のヴィーガンらあめん」があります。野菜スープに濃い口醤油のコクを合わせたもので、注文時に「五葷抜き」(にんにく・ねぎ・玉ねぎなど)を指定できます。秋葉原本店では同じ一杯が卵不使用の麺と大豆ミートのチャーシューで作られていると紹介されています。銀座店でも同じか、注文時に確認してください。その他のラーメンはすべて豚骨スープ(看板の九州じゃんがらは鶏ガラも使用)で、植物性の一杯も同じ厨房で作られています。',
    notes: '[ラーメン・東京のチェーン] 1984年に秋葉原で創業した東京のラーメン会社「九州じゃんがら」の銀座店です。1991年に銀座七丁目の三原通りに開店し、2010年7月7日に現在地へ移転しました。全16席がテーブル席です。看板の一杯は、豚骨に鶏ガラと野菜を合わせたマイルドなスープ。そのほか、博多・久留米系のクリーミーな「ぼんしゃん」から、マー油を効かせた熊本系の「こぼんしゃん」まで揃います。角肉・明太子・味玉子をのせた「全部入り」は、店自身がこのカウンターで生まれた言葉だと紹介しています。高菜と紅しょうがは卓上で無料。植物性の醤油ラーメンもあります。英語・中国語・韓国語・タイ語のメニューを全店に用意しており、2026年の口コミでは混雑時に海外からの客の行列ができると書かれています。',
  });
}

// ---------------------------------------------------------------- 中華 銀座亭
{
  const ST = 'https://san-tatsu.jp/articles/272176/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13054334/';
  const RV_TANTAN = TB + 'dtlrvwlst/B463975358/';
  const RV_LIVER = TB + 'dtlrvwlst/B520802079/';
  const RV_HARU = TB + 'dtlrvwlst/B534307183/';
  const RV_HOIKO = TB + 'dtlrvwlst/B536842914/';
  const RV_TANSOBA = TB + 'dtlrvwlst/B536898447/';
  const RV_CASH = TB + 'dtlrvwlst/B537072176/';
  const RV_GYOZA = TB + 'dtlrvwlst/B537416302/';
  const RV_YAKISOBA = TB + 'dtlrvwlst/B449522487/';
  const RV_HALF = TB + 'dtlrvwlst/B536867077/';
  const day = [['11:30', '01:30']];
  const place = {
    id: 'tokyo_chuka_ginza_tei', name: '中華 銀座亭 (Chūka Ginza-tei)', category: 'MOM_AND_POP',
    lat: 35.668052, lng: 139.763052,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: "Not gluten-free. This is a neighbourhood Chinese counter (machi-chūka) built around ramen, tsukemen, gyoza and stir-fries. The ramen-type noodles are wheat by default, and no gluten-free noodle or dish is mentioned in any source. The house miso tare is made in-house, and its miso type is not published (miso can be barley). The gyoza come with a vinegar-and-soy dip. The rice dishes and stir-fries are not documented ingredient by ingredient. One tiny kitchen does all of it. Not suitable for celiacs.",
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: "Not vegan. The owner says one house soup, made from chicken feet (もみじ), pig's trotters and vegetables, is the base of every noodle dish. The signature dishes are pork-heavy: miso chashu, the minced-meat mapo harusame rice bowl and twice-cooked pork. No vegetarian or vegan dish is mentioned in any source.",
    hours_raw: "Mon–Fri 11:30–01:30 (the 2023 interview gives last order 01:15). Closed Saturdays, Sundays, public holidays and the days before and after a public holiday. The shop says it may close after lunch in midsummer heat, so call ahead (03-3571-6450). Cash only; no reservations.",
    hours: { 0: day, 1: day, 2: day, 3: day, 4: day }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Ginza 7-chōme, on Hanatsubaki-dōri — 8 min from Ginza Stn, 6–10 min from Shimbashi',
    cuisine: '町中華 (neighbourhood Chinese) · ramen, tsukemen, gyoza, rice bowls & set meals', cuisine_type: 'ramen',
    website: null,
    gmaps: gm('中華 銀座亭 東京都中央区銀座7-11-10'),
    menu_url: null,
    notes: "[Mom & Pop · machi-chūka] A 1975 neighbourhood Chinese counter on Hanatsubaki-dōri, run by the founder's family into its third generation. The grandfather left an office job, trained at the 1970s tsukemen chain つけ麺大王 (Tsukemen Daiō) and opened a franchise of it here; around 1977 he went independent as 銀座亭. Tsukemen is still the oldest dish on the menu. Set meals were added for the people who work Ginza's nights, and today orders run about six set meals to three noodle dishes to one drinking snack. Five or six cooks work the wok behind a U-shaped counter of 15 seats. Diners come for the miso chashu and the mapo harusame rice bowl. Tabelog named it one of Tokyo's 100 best Chinese restaurants (百名店) in 2024 and 2026. Expect a queue at peak times; staff hand over a picture menu on request.",
    chef_bio: {
      chef_name: '北岡秋平 (Kitaoka Shūhei)', roles: ['third-generation owner', 'runs the shop with his father (second generation)'],
      origin: "Ginza 7-chōme, Tokyo — founded in 1975 by his grandfather",
      background: "Kitaoka's grandfather left a salaried job, trained at つけ麺大王 and opened this counter in 1975 as one of its franchises, then went independent around 1977 under the name 銀座亭. Kitaoka worked at a yakitori restaurant before joining his father at the shop in 2020; they had expected the Tokyo Olympics to make the shop busy that year.",
      philosophy: "「これからも『銀座亭』が提供してきた、食べて安心する味を守っていきたい」 — to keep serving the comforting food the shop has always served.",
      specialty: 'Miso chashu ramen (wok-fried vegetables, four thick slices of pork shoulder); mapo harusame rice bowl; tsukemen descended from the つけ麺大王 recipe.',
      anecdotes: [
        { text: "The shop opened in 1975 as a franchise of つけ麺大王 — 「実は、創業当時の屋号は『つけ麺大王』だったんですよね」 — and became 銀座亭 around 1977.", source: ST },
        { text: "Set meals were added, Kitaoka believes, because the black-suited men of Ginza's night trade and the area's restaurant workers do more physical work than it looks: 「スタミナをつけられるようにという想いで」.", source: ST },
        { text: 'Five or six cooks share the narrow kitchen. The miso chashu came out in under five minutes: bean sprouts and pork belly fired in the wok, then soup and the house miso tare added in the same pan.', source: ST },
        { text: "Kitaoka reckons there are only about three machi-chūka left in Ginza, his included, and says some customers from his grandfather's day still come in.", source: ST },
        { text: 'Selected for Tabelog Chinese TOKYO "Tabelog 100" (百名店) in 2024 and again in 2026.', source: TB },
        { text: 'An October 2026 diner noted the cash-only sign, that staff checked before serving two rice dishes to one person, and that they produced a picture menu when asked.', source: RV_CASH },
      ],
      japanese_sources_summary: "さんたつ(2023.11.10)より: 1975年創業の町中華。祖父が脱サラし『つけ麺大王』で修業、フランチャイズで開業、1977年ごろ独立して『銀座亭』に。3代目店主・北岡秋平さん(元焼き鳥店勤務、2020年から父と)。コの字カウンター、厨房に5〜6人。スープはもみじ・豚足・野菜で麺類すべてを賄う。自家製味噌だれは少し辛味。みそチャーシュー1300円(豚肩ロースのチャーシュー4枚、中太ストレート麺)。注文は定食6・麺3・つまみ1。住所 中央区銀座7-11-10、営業11:30〜翌1:15LO、土日休。食べログ: 中国料理 百名店 2024・2026、15席(カウンターのみ)、現金のみ、予約不可、平日11:30〜翌1:30、土日祝・祝前日・祝後日休。",
      confidence: 'high', sources: [ST, TB, RV_CASH, RV_HARU, RV_TANTAN, RV_HOIKO],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'A cramped, fast 15-seat counter; cash only, no reservations, and a queue at peak times. The menu is Japanese, but staff hand over a picture menu on request. Tabelog asks families with children to come between about 14:30 and 18:00, outside the rush.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [
        { text: 'Every noodle dish is served from one shared house soup, and everything is cooked by five or six cooks in one small wok kitchen; no gluten-free noodle or dish is mentioned.', source: ST },
      ],
      soy_sauce_wheat: [
        { text: 'The miso chashu uses a house-made, slightly spicy miso tare added to the soup in the wok; the type of miso is not stated (barley miso contains gluten).', source: ST },
        { text: 'The gyoza are served with a vinegar-and-soy-sauce dip with chili oil.', source: RV_GYOZA },
      ],
      vegan_cross_contact: [
        { text: "The soup — chicken feet (もみじ), pig's trotters and vegetables — is the base of every noodle dish (麺類のメニューはこれですべてを賄う).", source: ST },
        { text: 'The signature mapo harusame rice bowl is packed with minced meat.', source: RV_GYOZA },
      ],
      staff_allergy_handling: [],
      positives: [],
      confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['chicken', 'vegetable', 'other'], broth_texture: null, tare: ['miso', 'shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: null, notes: 'Medium-thick straight noodles that soak up the soup (miso chashu, 2023).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: "みそチャーシュー (miso chashu) — a gentle miso soup over wok-fried bean sprouts, cabbage and pork belly, with four thick slices of pork shoulder; ¥1,300 in 2023.",
      chashu: 'Thick-cut pork shoulder loin (豚肩ロース), tender and fairly lean; four slices on the miso chashu.',
      notable_toppings: ['wok-fried bean sprouts and cabbage', 'pork belly', 'thick pork-shoulder chashu'],
      gf: { status: 'no', note: 'Wheat ramen noodles; no gluten-free option in any source.' },
      vegan: { status: 'no', note: "One soup of chicken feet, pig's trotters and vegetables underlies every noodle dish." },
      confidence: 'medium', sources: [ST, RV_LIVER, RV_TANSOBA], last_checked: TODAY,
    },
    mom_and_pop: true,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目11番10号 (go) 10m; OSM node 6301489385 「銀座亭」 3m; ${TODAY}`,
  };
  const items = [
    it('みそチャーシュー', 'miso chaashuu', 'Miso chashu ramen (wok-fried vegetables, four slices of pork shoulder)', '¥1,300', 'Noodles', 'no', 'no', "Price from the November 2023 interview — may have risen. House miso tare, type of miso not stated; chicken-foot & trotter soup.", 'miso_chashu_ramen'),
    it('', '', 'Umaka ramen (thickened soy-sauce ramen; large size free)', '¥1,300', 'Noodles', 'no', 'no', 'Price paid by a Tabelog reviewer, January 2026. Name from a machine-translated review.', 'umaka_ramen'),
    it('', '', 'Mapo tantanmen', '¥1,200', 'Noodles', 'no', 'no', 'Price paid by a Tabelog reviewer, October 2026. Name from a machine-translated review.', 'mapo_tantanmen'),
    it('', '', 'Tan-soba (noodle soup)', '¥1,200', 'Noodles', 'no', 'no', 'Price paid by a Tabelog reviewer, October 2026. Name from a machine-translated review.', 'tansoba'),
    it('つけ麺', 'tsukemen', 'Tsukemen (dipping noodles) — the oldest dish on the menu', '', 'Noodles', 'no', 'no', 'Descended from the つけ麺大王 recipe (2023 interview).', 'tsukemen'),
    it('', '', 'Sauce yakisoba', '', 'Noodles', 'no', '', 'Ordered by a Tabelog reviewer, October 2026.', 'sauce_yakisoba'),
    it('', '', 'Mapo harusame rice bowl (glass noodles in mapo sauce over soft egg and rice)', '¥1,300', 'Rice', 'ask', 'no', 'Price paid by Tabelog reviewers, October 2026. Minced meat; comes with soup, spinach and pickled ginger.', 'mapo_harusame_don'),
    it('', '', 'Fried rice', '¥1,200', 'Rice', 'ask', 'no', 'Price paid by a Tabelog reviewer, October 2026 (chashu, egg, green onion, naruto).', 'fried_rice'),
    it('', '', 'Half fried rice', '¥600', 'Rice', 'ask', 'no', 'Price paid by a Tabelog reviewer, October 2026.', 'fried_rice_half'),
    it('回鍋肉定食', 'hoikoorou teishoku', 'Twice-cooked pork set meal (cabbage and pork, rice, soup)', '¥1,400', 'Set meals', 'ask', 'no', 'Price from a Tabelog reviewer photo caption, October 2026.', 'hoikoro_teishoku'),
    it('', '', 'Liver and garlic chives', '¥1,500', 'Set meals', 'ask', 'no', 'Price paid by a Tabelog reviewer, October 2026. Name from a machine-translated review.', 'reba_nira'),
    it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'Served with a vinegar-soy dip and chili oil. A reviewer paid ¥1,700 for half fried rice plus 3 gyoza (October 2026).', 'gyoza'),
  ];
  const menu = {
    verified: 'provisional', confidence: 'low',
    sources: [ST, RV_TANTAN, RV_LIVER, RV_HARU, RV_HOIKO, RV_TANSOBA, RV_CASH, RV_GYOZA, RV_YAKISOBA, RV_HALF],
    price_note: "The shop has no website, and Tabelog carries no menu. Items and prices come from a 2023 interview (miso chashu) and from what Tabelog reviewers paid in January–October 2026. Most names come from Tabelog's English machine translation of those reviews, so the Japanese name is left blank rather than guessed. Several dishes are known only by name.",
    last_checked: TODAY, items,
  };
  add(place, menu, {
    cuisine: '町中華・ラーメン・つけ麺・餃子・丼・定食',
    neighborhood: '銀座七丁目・花椿通り沿い。銀座駅から徒歩8分、新橋駅から徒歩6〜10分',
    gf_detail: 'グルテンフリーではありません。ラーメン・つけ麺・餃子・炒め物が中心の町中華です。ラーメンの麺は基本的に小麦で、グルテンフリーの麺や料理はどの情報源にも見当たりません。味噌だれは自家製ですが、味噌の種類は公表されていません(麦味噌の可能性があります)。餃子は酢醤油で食べます。丼や炒め物の材料は一品ずつは公表されておらず、すべて一つの小さな厨房で調理しています。セリアック病の方には適していません。',
    vegan_detail: 'ヴィーガンではありません。店主によれば、麺類はすべて、もみじ(鶏の足)・豚足・野菜でとった一つのスープがベースです。看板メニュー(みそチャーシュー、ひき肉入りの麻婆春雨丼、回鍋肉)も豚肉中心で、ベジタリアン・ヴィーガン向けの料理はどの情報源にも見当たりません。',
    notes: '[個人店・町中華] 1975年創業、花椿通り沿いの町中華で、創業家の3代目が営んでいます。祖父が脱サラして昭和のつけ麺ブームを牽引した『つけ麺大王』で修業し、そのフランチャイズとして開業。1977年ごろに独立して『銀座亭』となりました。いちばん古いメニューは今もつけ麺です。銀座の夜を支える人たちのために定食も加わり、今の注文は定食6・麺3・つまみ1ほどの割合だそうです。コの字カウンター15席の奥で、5〜6人が中華鍋をふるいます。人気はみそチャーシューと麻婆春雨丼。食べログ 中国料理 TOKYO 百名店に2024年・2026年と選ばれています。混雑時は行列ができ、頼めば写真付きメニューを出してくれます。',
  });
}

// ---------------------------------------------------------------- 銀座たんめん
{
  const FRAU = 'https://gendai.media/articles/-/146952';
  const NAP = 'https://www.nap-camp.com/mag/62940';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13230948/';
  const RV_LARGE = TB + 'dtlrvwlst/B533412982/';
  const RV_1100 = TB + 'dtlrvwlst/B534461508/';
  const RV_1100b = TB + 'dtlrvwlst/B533525838/';
  const RV_1100c = TB + 'dtlrvwlst/B535204018/';
  const RV_TOPPINGS = TB + 'dtlrvwlst/B534772175/';
  const RV_ALONE = TB + 'dtlrvwlst/B535204890/';
  const RV_CABBAGE = TB + 'dtlrvwlst/B534520094/';
  const RV_SAKU = TB + 'dtlrvwlst/B532704742/';
  const RV_SESAME = TB + 'dtlrvwlst/B534487147/';
  const RV_SESAME2 = TB + 'dtlrvwlst/B534870509/';
  const lunch = ['11:30', '15:00'], dinner = ['17:00', '20:00'];
  const place = {
    id: 'tokyo_ginza_tanmen', name: '銀座たんめん (Ginza Tanmen)', category: 'MOM_AND_POP',
    lat: 35.669353, lng: 139.769252,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: "Not gluten-free. The shop serves one dish, tanmen: thin, straight ramen-type noodles, which are wheat by default, in a salted chicken-frame soup. No gluten-free noodle is mentioned in any source. Not suitable for celiacs.",
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The only dish is tanmen, a chicken-frame (鶏ガラ) soup with napa cabbage and pork. No meat-free version is mentioned in any source.',
    hours_raw: 'Mon–Thu 11:30–15:00 & 17:00–20:00 (last order 19:30); Fri 11:30–15:00 only. Closed Saturdays, Sundays and public holidays. Ticket machine; cash only.',
    hours: { 0: [lunch, dinner], 1: [lunch, dinner], 2: [lunch, dinner], 3: [lunch, dinner], 4: [lunch] }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme (Ginza Saitō Bldg 1F), by Kabuki-za — 3 min from Higashi-Ginza Exit 5',
    cuisine: 'Tanmen specialist — salt chicken-frame soup piled with napa cabbage', cuisine_type: 'ramen',
    website: null,
    gmaps: gm('銀座たんめん 東京都中央区銀座4-14-3'),
    menu_url: null,
    notes: "[Mom & Pop · tanmen] A 9-seat counter near Kabuki-za that has served exactly one dish since it opened in January 2019. The owner taught themself to make it, trying to recreate a tanmen they used to eat as a student. The bowl is a clear, salted chicken-frame soup with thin straight noodles, buried under napa cabbage and a little pork. The cabbage is simmered with the soup in a frying pan, but only so far that it stays crunchy. The shop buys whatever napa cabbage is best that season and posts its origin, which in 2026 was Nagano's Nobeyama and Saku-Asama highlands. Toppings are butter, cilantro and nori. Homemade chili oil, white pepper and vinegar sit on the counter. A September 2026 diner found the owner running the shop alone. Lunch queues are common.",
    chef_bio: {
      chef_name: null, roles: ['owner-operator'],
      origin: 'Ginza 4-chōme, Tokyo; opened 16 January 2019',
      background: "The owner set out to recreate the tanmen they used to eat as a student and worked it out by self-study (独学で研究), opening this one-dish counter in 2019. No other branch was found.",
      philosophy: null,
      specialty: 'Tanmen: salted chicken-frame soup, thin straight noodles, a mound of seasonal napa cabbage and pork.',
      anecdotes: [
        { text: '「店主が、学生時代に食べていた「たんめん」の味を作れたらと独学で研究」 — the owner studied on their own to recreate the tanmen of their student days.', source: FRAU },
        { text: "The napa cabbage is whatever is best that season; at the time of the interview it was Yūki city's brand cabbage 「ゆうきくん」, yellow-hearted, soft and sweet. It is simmered with the soup in a frying pan, but only so far that it keeps its crunch.", source: FRAU },
        { text: "The shop posts where the day's cabbage is from — Saku-Asama highland cabbage in July 2026, Nobeyama's in August and September, whose sweetness the shop's notice credited to morning dew and mist.", source: RV_CABBAGE },
        { text: 'Order less noodles and the staff offer to add more cabbage instead; butter comes chilled and sliced on its own plate, and stays firm so you add it bit by bit.', source: RV_TOPPINGS },
        { text: 'A September 2026 diner found the owner running the counter alone.', source: RV_ALONE },
      ],
      japanese_sources_summary: 'FRaU(2025年2月15日、宇賀なつみ)より: 「銀座たんめん」は東銀座駅すぐのたんめん専門店。メニューはたんめんのみ、カウンター席のみ。店主が学生時代に食べたたんめんの味を独学で研究。鶏ガラベースの塩味スープに白菜と豚肉のみ。たんめん1000円(当時)。白菜は時期のいいもの(取材時は結城市「ゆうきくん」)、フライパンでスープと煮込みシャキシャキ感を残す。なっぷ: 2019年オープン、カウンター9席、細めのストレート麺、卓上に自家製ラー油。食べログ: 2019年1月16日オープン、9席、現金のみ、月〜木11:30〜15:00/17:00〜20:00(L.O.19:30)、金11:30〜15:00、土日祝休。',
      confidence: 'medium', sources: [FRAU, NAP, TB, RV_TOPPINGS, RV_ALONE, RV_CABBAGE, RV_SAKU],
    },
    cultural_comfort: { level: 'japanese', note: 'Order at a Japanese ticket machine. The choice is just tanmen or large tanmen plus a few toppings, so it is easy to manage. A 9-seat counter with lunch queues; cash only.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [
        { text: 'The one dish is tanmen — thin straight noodles in a salted chicken-frame soup; no gluten-free noodle is offered.', source: NAP },
      ],
      soy_sauce_wheat: [],
      vegan_cross_contact: [
        { text: 'The soup is chicken-frame based (鶏ガラベース) and the only toppings are napa cabbage and pork.', source: FRAU },
      ],
      staff_allergy_handling: [],
      positives: [],
      confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shio'], aroma_oil: ['other'], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: null, notes: 'Thin, straight noodles under a heap of napa cabbage.' },
      regional_style: [], sub_genre: ['other'],
      signature_bowl: 'たんめん — the only bowl, in regular or large; reviewers note a sesame-oil aroma in the salt soup.',
      chashu: 'None — the pork is thin-sliced or finely chopped and cooked with the cabbage.',
      notable_toppings: ['napa cabbage (origin posted daily)', 'pork', 'optional butter, cilantro, nori', 'homemade chili oil, white pepper and vinegar on the counter'],
      gf: { status: 'no', note: 'Wheat-type ramen noodles; no gluten-free noodle.' },
      vegan: { status: 'no', note: 'Chicken-frame soup with pork.' },
      confidence: 'medium', sources: [FRAU, NAP, RV_CABBAGE, RV_TOPPINGS, RV_SESAME, RV_SESAME2], last_checked: TODAY,
    },
    mom_and_pop: true,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目14番3号 (go) 2m; OSM node 6303384885 「銀座たんめん」 3m; ${TODAY}`,
  };
  const items = [
    it('たんめん', 'tanmen', 'Tanmen (salt chicken-frame soup, napa cabbage, pork)', '¥1,100', 'Noodles', 'no', 'no', 'Price paid by Tabelog reviewers, Aug–Sep 2026 (¥1,000 in the Feb 2025 FRaU article).', 'tanmen'),
    it('たんめん大盛り', 'tanmen oomori', 'Large tanmen', '¥1,300', 'Noodles', 'no', 'no', 'Price paid by a Tabelog reviewer, August 2026.', 'tanmen_large'),
    it('', '', 'Cold tanmen (summer only)', '', 'Noodles', 'no', 'no', 'A Tabelog reviewer saw a cold version on sale in August 2026.', 'tanmen_cold'),
    it('', '', 'Butter (topping, served chilled on the side)', '', 'Toppings', '', 'no', '', 'butter'),
    it('', '', 'Cilantro / extra cilantro (topping)', '', 'Toppings', '', '', '', 'cilantro'),
    it('', '', 'Nori (topping)', '', 'Toppings', '', '', '', 'nori'),
    it('角ハイボール', 'kaku haibooru', 'Kaku highball', '', 'Drinks', '', '', 'Sold at the ticket machine (Tabelog reviewer, Sept 2026).', 'highball'),
  ];
  const menu = {
    verified: 'provisional', confidence: 'medium',
    sources: [FRAU, NAP, RV_LARGE, RV_1100, RV_1100b, RV_1100c, RV_TOPPINGS, RV_ALONE],
    price_note: "A one-dish shop: the ticket machine sells tanmen and large tanmen, plus toppings and drinks. Prices are what Tabelog reviewers paid in August–September 2026 (¥1,000 in the February 2025 FRaU article). Topping and drink prices are not on record, and the topping names come from machine-translated reviews.",
    last_checked: TODAY, items,
  };
  add(place, menu, {
    cuisine: 'たんめん専門店(鶏ガラ塩スープ・白菜たっぷり)',
    neighborhood: '銀座四丁目(銀座斉藤ビル1F)、歌舞伎座のそば。東銀座駅5番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。メニューはたんめんのみで、細めのストレート麺(ラーメンの麺は基本的に小麦)を鶏ガラの塩スープで仕上げます。グルテンフリーの麺はどの情報源にも見当たりません。セリアック病の方には適していません。',
    vegan_detail: 'ヴィーガンではありません。唯一のメニューであるたんめんは、鶏ガラベースのスープに白菜と豚肉の一杯で、肉を使わない版はどの情報源にも見当たりません。',
    notes: '[個人店・たんめん] 歌舞伎座近く、カウンター9席の店で、2019年1月の開店以来たんめん一品だけを出しています。店主が学生時代に食べたたんめんの味を再現しようと、独学で作り上げた一杯です。透き通った鶏ガラの塩スープに細めのストレート麺、その上を白菜と少しの豚肉が覆います。白菜はスープと一緒にフライパンで煮込みますが、シャキシャキ感が残るところで止めます。白菜はその時期のいいものを仕入れて産地を掲示しており、2026年は長野県の野辺山や佐久浅間の高原のものでした。トッピングはバター・パクチー・のり。卓上には自家製ラー油、白胡椒、酢があります。2026年9月の口コミでは店主がひとりで切り盛りしていました。昼は行列になることが多い店です。',
  });
}

// ---------------------------------------------------------------- tokyo3__176 九州じゃんがら 秋葉原本店 (correction)
{
  const p = d.places.find(x => x.id === 'tokyo3__176');
  if (!p) log.push('tokyo3__176: NOT FOUND');
  else if (p.closed && p.closed.checked === TODAY) log.push('tokyo3__176: already corrected');
  else {
    const SHOP = 'https://kyushujangara.co.jp/shops/akihabara/';
    const NEWS = 'https://kyushujangara.co.jp/news/2026/09/7079/';
    const MENU = 'https://kyushujangara.co.jp/menu/';
    const LIST = 'https://kyushujangara.co.jp/shops/';
    const ABOUT = 'https://kyushujangara.co.jp/contact/aboutus/';
    const CHIYODA = 'https://visit-chiyoda.tokyo/app/spot/detail/927';
    Object.assign(p, {
      category: 'OMNI', mom_and_pop: false,
      gf_detail: "Not gluten-free. The company describes its ramen noodles as a blend of several wheat flours bound with egg white, and lists no gluten-free noodle. The vegan bowl is seasoned with dark soy sauce (濃い口醤油), which in Japan is brewed with wheat by default. Not suitable for celiacs.",
      vegan_status: 'options', vegan_label: 'Some vegan options',
      vegan_detail: "The original Akihabara shop serves 濃い口醤油のヴィーガンらあめん. Its soup is made from vegetables only, with no animal ingredients or chemical seasonings; the noodles are made without egg and the chashu is soy meat. It can be ordered without the 'five pungent vegetables'. The company menu also has a Kumamoto-style vegan bowl with plant-based black-garlic oil. Every other bowl is built on pork-bone soup, from the same kitchen.",
      website: SHOP, menu_url: MENU,
      hours_raw: 'TEMPORARILY CLOSED from 30 September 2026 for renovation. Before the closure, the company listed it as open 11:00–22:00 (last order 21:45).',
      closed: { status: 'temporary', until: null, note: "The shop's own notice: 「リニューアル工事に伴い」 the Akihabara main shop is closed from 2026-09-30 (「2026年9月30日より一時休業」). It aims to reopen around its 42nd anniversary (「創業42周年を目途に」); details will follow on Instagram. The notice points diners to the Harajuku, Ginza, Akasaka and Shiba-Daimon shops meanwhile.", checked: TODAY, source: NEWS },
      category_flag: { note: "Not mom-and-pop: the founding shop (1984) of Kyushu Jangara, a Tas Group company running five Tokyo ramen shops plus a vegan bistro, with a central kitchen and about 150 staff.", date: TODAY, resolved: true, source: ABOUT },
      enrich_note: (p.enrich_note || '') + ` [${TODAY}] The vegan correction noted above is now applied (vegan_status 'options', cited). Category corrected from MOM_AND_POP to OMNI. Marked temporarily closed for renovation from 2026-09-30.`,
    });
    p.safety = {
      ...p.safety,
      gf_cross_contamination: [{ text: 'The ramen noodles are a blend of several wheat flours bound with egg white (数種類の小麦粉の配合と、卵白); no gluten-free noodle is offered.', source: MENU }],
      soy_sauce_wheat: [{ text: 'The vegan bowl is a dark-soy-sauce (濃い口醤油) ramen; Japanese soy sauce is brewed with wheat unless stated otherwise.', source: MENU }],
      vegan_cross_contact: [{ text: 'All the regular bowls are built on pork-bone soup (the house bowl also uses chicken frames).', source: MENU }],
      positives: [{ text: "At Akihabara the vegan ramen's soup is vegetables only (「動物性原材料・化学調味料を一切使わず野菜だけ」), the noodles are egg-free (「麺は卵を使わずに作られています」) and the chashu is soy meat; 五葷抜き on request.", source: CHIYODA }],
      confidence: 'medium', last_checked: TODAY,
    };
    p.existence = { ...(p.existence || {}), status: 'confirmed', checked: TODAY, note: `Operating company's own pages (${SHOP}, ${LIST}) list it as the Akihabara main shop at 千代田区外神田3-11-6, temporarily closed from 2026-09-30 for renovation.` };
    mergePlace(ja, p.id, {
      gf_detail: 'グルテンフリーではありません。会社の説明では、ラーメンの麺は数種類の小麦粉を配合し卵白でつないだもので、グルテンフリーの麺はありません。ヴィーガンの一杯は濃い口醤油で味付けされており、日本の醤油は特に明記がなければ小麦を使って醸造されています。セリアック病の方には適していません。',
      vegan_detail: '秋葉原本店には「濃い口醤油のヴィーガンらあめん」があります。スープは動物性原材料や化学調味料を使わず野菜だけで作られ、麺は卵不使用、チャーシューは大豆ミートです。注文時に「五葷抜き」も指定できます。会社のメニューには、植物性マー油を使った熊本風のヴィーガンらあめんもあります。その他のラーメンはすべて豚骨スープで、同じ厨房で作られています。',
    });
    log.push('tokyo3__176: corrected (OMNI, vegan options, temporarily closed)');
  }
}

fs.writeFileSync(file, raw.includes('\n') ? JSON.stringify(d, null, 1) : JSON.stringify(d));
fs.writeFileSync(mf, JSON.stringify(menus, null, 1));
writeLang('tokyo', 'ja', ja);
console.log(log.join('\n'));
console.log(`Tokyo now ${d.places.length} places.`);
