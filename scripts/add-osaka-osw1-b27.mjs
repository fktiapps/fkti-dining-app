// Osaka sweep (2-mile circle around Dotonbori), CORE list; worker osw1 (lane: Tabelog id mod 4 = 0), batch 27.
//   + CORA COFFEE (beach-house café with additive-free bread and lattes from 8 a.m., Motomachi, 2021)
//   + ROCKS Cafe (all-day café of toast breakfasts and drinks by Horie Park, open to 23:00, 2020)
//   + イエロースパイス 北堀江 YELLOW SPICE Kitahorie (Sapporo-style soup curry with Hokkaido vegetables, 2018)
//   + Embassy of Crab (seafood courses, crab buffets and dessert buffets in Centara Grand Hotel Osaka, 2F, 2023)
//   Lane: `queue.mjs osaka next core 600`, mod-4 = 0, in order: 27123652 +, 27117972 +, 27108200 +, 27136012 +.
//   Chain check: CORA COFFEE has a sister CORA COFFEE BAKERY (27159979) in shops.jsonl, a different format; ROCKS Cafe is single;
//   YELLOW SPICE also has a Ginza shop (Tabelog 13140248; Retty) and a reviewer mentions a Sapporo shop, a small group; Embassy of
//   Crab is the hotel's own restaurant. None is in data.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-27');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ CORA COFFEE
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27123652/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '19:00']);
  put({
    id: 'osaka_cora_coffee_motomachi', name: 'CORA COFFEE', category: 'OMNI',
    lat: 34.662923, lng: 135.497663, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Bread made from domestic wheat is central (sandwiches, toast).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; lattes and sandwiches with bacon are on the menu.',
    hours_raw: 'Daily 8:00–19:00; open year-round (Tabelog). No reservations (Tabelog). Cards, e-money and QR payments (Tabelog). 28 seats with counter, sofas and an outdoor terrace; non-smoking; power outlets and Wi-Fi (Tabelog; September 2026). Order at the counter and wait for your number; self-service water (October 2026). Opened 6 June 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Motomachi 1-11-8, サキモトビル 1F, near Namba Yasaka Shrine — 5 min from Namba Stn',
    cuisine: 'Café of carefully made coffee and additive-free bread of domestic wheat, open from 8 a.m. (September 2026) · BLT hot sandwich packed with lettuce, made to order (allow 20–30 minutes at busy times) (September 2025, July 2026) · lattes in several flavours, iced tea, Hachiju orange juice also sold by the bottle (October 2026) · breakfast (May 2026)',
    website: null, gmaps: gm('CORA COFFEE 難波 元町'), menu_url: null,
    notes: "[Café · Motomachi, a beach-house café near Namba Yasaka Shrine] A bright, beach-house-styled café five minutes from Namba Station, near Namba Yasaka Shrine, open from 8 a.m. with sofas, a small terrace, power outlets and Wi-Fi. Coffee runs mild, and the bread is additive-free and made from domestic wheat: the BLT hot sandwich, overflowing with lettuce, is the order, but at breakfast rush it can take 20–30 minutes. Lattes come in cute variations, and the fresh-tasting Hachiju orange juice is also sold by the bottle. Tabelog lists an English menu, and on an October 2026 visit about 90% of the customers were from overseas.",
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed)'], origin: null, background: 'Tabelog: café in Motomachi, opened 6 June 2021; vegetarian options and breakfast. Reviews (2025–2026) describe carefully made coffee and additive-free bread of domestic wheat. A sister CORA COFFEE BAKERY (27159979) is in shops.jsonl.', philosophy: null, specialty: 'BLT hot sandwich; lattes.',
      anecdotes: [
        { text: '"The wait was worth it, as the BLT sandwich was freshly made and very delicious." — September 2025, after a 20–30 minute wait at breakfast.', source: R + 'B514660728/' },
        { text: '"I had the Hachiju Orange Juice. It has a delicious fresh bitterness and sweetness, as if the juice was squeezed right from the peel!" — October 2026.', source: R + 'B537269071/' },
        { text: '"Once you step inside, you\'ll notice that about 90% of the customers are international visitors." — October 2026.', source: R + 'B537934115/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): CORA COFFEE、カフェ、大阪市浪速区元町1-11-8 サキモトビル 1F、なんば駅から徒歩5分、毎日8:00〜19:00、年中無休、予約不可、カード・電子マネー・QR 可、28席、テラス、禁煙、ベジタリアンメニューあり、朝食あり、2021年6月6日オープン。口コミ(2025年9月〜2026年10月): こだわりのコーヒーと国産小麦の無添加のパン、レタスたっぷりの BLT のホットサンド (混む朝は20〜30分待ち)、かわいいラテ、アイスティー、Hachiju のオレンジジュース (瓶でも販売)、電源と Wi-Fi、カウンターで注文して番号で呼ばれる、セルフの水、ビーチハウスのような店内、英語のメニューあり (食べログ)、外のメニューは日本語ではない、海外の客が9割ほどの日も、Namba Yasaka 神社の近く。',
      confidence: 'medium', sources: [TB, R + 'B514660728/', R + 'B527586527/', R + 'B528074679/', R + 'B530044627/', R + 'B531785798/', R + 'B534851496/', R + 'B536832432/', R + 'B537269071/', R + 'B537934115/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu; the menu outside was not in Japanese (June 2026); about 90% of customers from overseas (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区元町1-11-8 サキモトビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区元町一丁目11番8号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514660728/', R + 'B537269071/'],
    price_note: 'No dated prices in the sources read.', last_checked: TODAY, items: [
      it('', '', 'BLT hot sandwich', '', 'Food', 'no', 'no', 'September 2025 and July 2026 reviews.', 'blt'),
      it('', '', 'Latte', '', 'Drinks', 'ask', 'no', 'October 2026 review.', 'latte'),
      it('', '', 'Hachiju orange juice', '', 'Drinks', 'ask', 'ask', 'October 2026 review.', 'orange_juice'),
    ] }, {
    cuisine: '朝8時からの、こだわりのコーヒーと国産小麦の無添加のパンのカフェ (2026年9月)・注文を受けて作るレタスたっぷりの BLT のホットサンド (混む時間は20〜30分) (2025年9月、2026年7月)・いろいろな味のラテ、アイスティー、瓶でも売る Hachiju のオレンジジュース (2026年10月)・朝食 (2026年5月)',
    neighborhood: '元町1-11-8、サキモトビル1階、Namba Yasaka 神社の近く。なんば駅から5分',
    gf_detail: '要確認。グルテンの情報なし。国産小麦のパン (サンドイッチ、トースト) が中心。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、ラテやベーコンのサンドイッチがある。',
    notes: '[カフェ・元町、Namba Yasaka 神社近くのビーチハウスのようなカフェ] なんば駅から5分、Namba Yasaka 神社の近くの明るいビーチハウス風のカフェで、朝8時から。ソファー、小さなテラス、電源と Wi-Fi。コーヒーはやさしい苦み、パンは国産小麦の無添加。頼むならレタスがあふれる BLT のホットサンドだが、朝の混む時間は20〜30分かかることも。ラテはかわいいアレンジがあり、搾りたてのようなオレンジジュースは瓶でも買える。食べログには英語のメニューありとあり、2026年10月には客の9割ほどが海外の人だったそう。',
  });
}

// ================================================================ ROCKS Cafe
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27117972/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '23:00']);
  put({
    id: 'osaka_rocks_cafe_kitahorie', name: 'ROCKS Cafe', category: 'OMNI',
    lat: 34.672712, lng: 135.494365, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Toasts and cakes are the food menu; Tabelog also lists curry.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; fruit teas and smoothies are on the drinks menu.',
    hours_raw: 'Daily 9:00–23:00 (last order 22:30); closed over New Year (Tabelog). One April 2026 diner found it opening at 9:30. No reservations; order at the counter (Tabelog; April 2026). Cards, e-money and QR payments (Tabelog). 50 seats with counter and sofas; non-smoking; power outlets and Wi-Fi (Tabelog). LINE stamp card (April 2026). Opened 1 August 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kita-Horie 1-13-11, on the north side of Horie Park — 5 min from Yotsubashi Stn',
    cuisine: 'All-day café by Horie Park with breakfast toasts and generous drinks (Tabelog; 2026 reviews) · breakfast set with sugar-butter toast of crunchy coarse sugar (April and June 2026); many toasts (April 2026) · hojicha latte ¥605, café latte, café au lait, fruit tea ¥700, yuzu citrus tea, berry yogurt smoothie, affogato smoothie, affogato (April–July 2026) · gâteau chocolat, caramel tart (May and July 2026) · curry (Tabelog)',
    website: null, gmaps: gm('ROCKS Cafe 北堀江'), menu_url: null,
    notes: "[Café · Kita-Horie, a study-friendly café by Horie Park] A calm, stylish café on the north side of Horie Park, open from morning until 11 p.m. with sofas at the back, outlets and Wi-Fi, so people settle in to work or talk. Breakfast is good value: the sugar-butter toast with crunchy coarse sugar is the one to get. Drinks are big (a hojicha latte was ¥605 in April 2026), with smoothies and fruit teas, though one July 2026 diner found the ¥700 fruit tea weak and lukewarm. Busy on weekend mornings; a Pilates studio is upstairs. Order at the counter.",
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed)'], origin: null, background: 'Tabelog: café and curry in Kita-Horie, open 9:00–23:00, opened 1 August 2020; vegetarian options and breakfast. Reviews (2025–2026) describe a café on the north side of Horie Park with a Pilates studio upstairs.', philosophy: null, specialty: 'Sugar-butter toast; lattes and smoothies.',
      anecdotes: [
        { text: '"The sugar toast has a coarse sugar texture, making it satisfying and delicious." — April 2026.', source: R + 'B504445083/' },
        { text: '"It\'s open until around 10:30 PM, and there are power outlets available." — April 2026.', source: R + 'B526245585/' },
        { text: '"On a humid day, the fruit tea was lukewarm despite having plenty of ice and orange slices." — July 2026, fruit tea ¥700.', source: R + 'B532656074/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ROCKS Cafe、カフェ・カレー、大阪市西区北堀江1-13-11、四ツ橋駅から徒歩5分、心斎橋駅から10分、毎日9:00〜23:00 (L.O.22:30)、年末年始は休み、予約不可、カード・電子マネー・QR 可、50席、禁煙、電源と Wi-Fi、ベジタリアンメニューあり、朝食あり、2020年8月1日オープン。口コミ(2025年4月〜2026年7月): Horie Park の北側、9時半に開いた日も、シュガーバターのトーストのモーニング、いろいろなトースト、量の多いカフェラテ、ほうじ茶ラテ605円、フルーツティー700円 (ぬるく薄かったという声)、柚子のティー、ベリーヨーグルトのスムージー、アフォガートのスムージー、アフォガート、カフェオレ、ガトーショコラ、キャラメルタルト、LINE のスタンプカード、2階はピラティスのスタジオ、週末の朝は混む。',
      confidence: 'medium', sources: [TB, R + 'B434970719/', R + 'B504445083/', R + 'B524829649/', R + 'B526216876/', R + 'B526245585/', R + 'B530040812/', R + 'B531190647/', R + 'B532172646/', R + 'B532656074/', R + 'B537366886/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter ordering; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-13-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目13番11号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526216876/', R + 'B532656074/'],
    price_note: 'Prices from April and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hojicha latte (iced)', '¥605', 'Drinks', 'ask', 'no', 'April 2026 review.', 'hojicha_latte'),
      it('', '', 'Fruit tea', '¥700', 'Drinks', 'ask', 'ask', 'July 2026 review.', 'fruit_tea'),
      it('', '', 'Sugar-butter toast breakfast set', '', 'Breakfast', 'no', 'no', 'April and June 2026 reviews.', 'sugar_toast'),
    ] }, {
    cuisine: 'Horie Park のそばの一日中のカフェで、朝食のトーストと量の多い飲み物 (食べログ、2026年の口コミ)・ざらめのシュガーバターのトーストのモーニング (2026年4月と6月)。いろいろなトースト (2026年4月)・ほうじ茶ラテ605円、カフェラテ、カフェオレ、フルーツティー700円、柚子のティー、ベリーヨーグルトのスムージー、アフォガートのスムージー、アフォガート (2026年4月〜7月)・ガトーショコラ、キャラメルタルト (2026年5月と7月)・カレー (食べログ)',
    neighborhood: '北堀江1-13-11、Horie Park の北側。四ツ橋駅から5分',
    gf_detail: '要確認。グルテンの情報なし。食べ物はトーストとケーキで、食べログにはカレーも。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、フルーツティーやスムージーもある。',
    notes: '[カフェ・北堀江、Horie Park のそばの勉強しやすいカフェ] Horie Park の北側の落ち着いたおしゃれなカフェで、朝から夜11時まで。奥のソファー、電源と Wi-Fi があり、仕事や話し込む人が多い。朝食はお得で、ざらめのシュガーバターのトーストがおすすめ。飲み物は大きく (2026年4月はほうじ茶ラテが605円)、スムージーやフルーツティーも。2026年7月には700円のフルーツティーが薄くぬるかったという声も。週末の朝は混み、2階はピラティスのスタジオ。注文はカウンターで。',
  });
}

// ================================================================ イエロースパイス 北堀江
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27108200/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:30'], ['17:30', '22:00']); const SA = day(['11:30', '16:00'], ['17:00', '22:00']); const SU = day(['11:30', '16:00'], ['17:00', '21:00']);
  put({
    id: 'osaka_yellow_spice_kitahorie', name: 'イエロースパイス 北堀江 (YELLOW SPICE Kitahorie)', category: 'OMNI',
    lat: 34.673118, lng: 135.494442, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Soup curry is often made without a flour roux, but the broth, the fried toppings and the duck are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the soups are chicken-based and the curries carry chicken or duck.',
    hours_raw: 'Mon–Fri 11:30–15:30 (last order 15:00) and 17:30–22:00 (last order 21:30); Sat 11:30–16:00 and 17:00–22:00; Sun and holidays 11:30–16:00 and 17:00–21:00 (last order 20:30); irregular closing days (Tabelog). No reservations (Tabelog). Cards and QR payments; no e-money (Tabelog). 22 seats at a long counter and tables (Tabelog; March 2026). Order by QR code (August 2026). Easy to come alone (January 2026). Opened 27 November 2018 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kita-Horie 1-14-10, 中内ビル 1F — 5 min from Yotsubashi and Nishi-Ohashi Stns',
    cuisine: 'Sapporo-style soup curry with Hokkaido ingredients and plenty of vegetables: pick one of four soup bases, the spice level (the shop lists 20; reviewers mention three to five levels at no charge), rice size and toppings (Tabelog; 2026 reviews) · bone-in chicken vegetable soup curry ¥1,980 (December 2025); chicken soup curry in the yellow broth; the shop\'s own Kyoto duck soup curry, with fried duck breast (Tabelog; August 2026) · vegetables such as carrot, potato, pumpkin, burdock, lotus root, yam, green beans, bell pepper, egg (April–September 2026) · evening soup curry course with edamame, spiced fries and butter-grilled scallops (March 2026); snacks and drinks (Tabelog)',
    website: 'https://yeiiowspice.jp/', gmaps: gm('YELLOW SPICE 北堀江'), menu_url: null,
    notes: "[Soup curry · Kita-Horie, Sapporo soup curry in Osaka] A Sapporo-style soup curry shop in Kita-Horie, part of the small YELLOW SPICE group with a shop in Ginza, serving bowls loaded with Hokkaido vegetables beside a separate plate of rice. The shop says its Tokyo soup curry won a Michelin Bib Gourmand two years running. Build your own: soup base, spice level, rice size and toppings; the bone-in chicken with vegetables was ¥1,980 in December 2025, and the house Kyoto duck soup curry comes with fried duck breast. An April 2026 diner called it the best in Horie, and one who had eaten at the Sapporo shop found the Kitahorie taste even better; a February 2026 first-timer found it tasty but missing the satisfaction of a curry meal. Evening courses and snacks, and Tabelog also files it as an izakaya and wine bar. Order by QR code.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Tabelog: soup curry, izakaya and wine bar in Kita-Horie, opened 27 November 2018; website yeiiowspice.jp. A Ginza YELLOW SPICE (Tabelog 13140248) and, per an October 2026 review, a Sapporo shop exist; reviews call it authentic Sapporo soup curry made with Hokkaido ingredients.', philosophy: null, specialty: 'Sapporo soup curry.',
      anecdotes: [
        { text: '"The soup curry made with Hokkaido ingredients is exquisite." — April 2026.', source: R + 'B527486543/' },
        { text: '"The atmosphere at the Sapporo location was brighter and nicer, but the taste might be even better at the Kitahorie branch." — October 2026.', source: R + 'B537987050/' },
        { text: '"The rice and soup are served separately, which makes it a bit difficult to eat." — February 2026.', source: R + 'B522506629/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): イエロースパイス 北堀江、スープカレー・居酒屋・ワインバー、大阪市西区北堀江1-14-10 中内ビル 1F、四ツ橋駅・西大橋駅から徒歩5分、月〜金11:30〜15:30・17:30〜22:00、土11:30〜16:00・17:00〜22:00、日祝11:30〜16:00・17:00〜21:00、不定休、予約不可、カード・QR 可、電子マネー不可、22席、2018年11月27日オープン。口コミ(2025年12月〜2026年10月): Hokkaido の食材の札幌のスープカレー、4種のスープと辛さ (店は20段階、口コミでは無料で3〜5段階)、店の紹介ではミシュランのビブグルマン (Tokyo) に2年続けて選ばれた、ご飯の量とトッピングを選ぶ、骨つきチキンと野菜のスープカレー1,980円 (2025年12月)、黄色いスープのチキン、Kyoto の鴨のスープカレー (鴨むねの揚げ物つき)、にんじん、じゃがいも、かぼちゃ、ごぼう、れんこん、長いも、いんげん、ピーマン、卵、夜のコース (枝豆、スパイスのフライドポテト、ほたてのバター焼き)、QR コードで注文、ひとりでも入りやすい、ご飯とスープが別で食べにくいという声、Sapporo の店より味はいいかもという声、おいしいがカレーの満足感がないという声。',
      confidence: 'medium', sources: [TB, R + 'B520936524/', R + 'B521109351/', R + 'B522506629/', R + 'B525248785/', R + 'B527486543/', R + 'B529291351/', R + 'B534218808/', R + 'B534290357/', R + 'B535309240/', R + 'B537987050/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-14-10 中内ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目14番10号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'One dated price from a December 2025 review (Tabelog listing).', last_checked: TODAY, items: [
      it('', '', 'Bone-in chicken vegetable soup curry', '¥1,980', 'Soup curry', 'ask', 'no', 'December 2025 review.', 'chicken_soup_curry'),
      it('', '', 'Fried duck breast soup curry', '', 'Soup curry', 'ask', 'no', 'August 2026 review.', 'duck_soup_curry'),
      it('', '', 'Soup curry course (edamame, spiced fries, scallops, soup curry)', '', 'Courses', 'ask', 'no', 'March 2026 review.', 'curry_course'),
    ] }, {
    cuisine: 'Hokkaido の食材と野菜たっぷりの札幌のスープカレー: 4種のスープ、辛さ (店は20段階とし、口コミでは無料で3〜5段階)、ご飯の量、トッピングを選ぶ (食べログ、2026年の口コミ)・骨つきチキンと野菜のスープカレー1,980円 (2025年12月)。黄色いスープのチキンのスープカレー、店オリジナルの Kyoto の鴨のスープカレーで、鴨むねの揚げ物つき (食べログ、2026年8月)・にんじん、じゃがいも、かぼちゃ、ごぼう、れんこん、長いも、いんげん、ピーマン、卵などの野菜 (2026年4月〜9月)・夜は枝豆、スパイスのフライドポテト、ほたてのバター焼きのつくスープカレーのコース (2026年3月)。おつまみと飲み物 (食べログ)',
    neighborhood: '北堀江1-14-10、中内ビル1階。四ツ橋駅・西大橋駅から5分',
    gf_detail: '要確認。グルテンの情報なし。スープカレーは小麦粉のルーを使わないことも多いが、スープ、揚げたトッピング、鴨の説明はない。',
    vegan_detail: 'ヴィーガンではありません。スープは鶏のだしで、チキンや鴨がのる。',
    notes: '[スープカレー・北堀江、大阪で食べる札幌のスープカレー] 北堀江の札幌のスープカレーの店で、Ginza にも店のある小さなグループ。Hokkaido の野菜がたっぷりの器に、ご飯は別の皿で。店によると Tokyo のスープカレーはミシュランのビブグルマンに2年続けて選ばれた。スープ、辛さ、ご飯の量、トッピングを選び、2025年12月は骨つきチキンと野菜が1,980円、店の Kyoto の鴨のスープカレーには鴨むねの揚げ物がつく。2026年4月の人は堀江で一番と言い、Sapporo の店で食べた人も北堀江の味のほうがいいかもと。2026年2月に初めて食べた人は、おいしいがカレーを食べた満足感がないと。夜のコースやおつまみもあり、食べログでは居酒屋とワインバーにも入る。注文は QR コード。',
  });
}

// ================================================================ Embassy of Crab
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27136012/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.centarahotelsresorts.com/centaragrand/ja/cgoj/embassy-of-crab';
  const H = day(['11:30', '22:00']);
  put({
    id: 'osaka_embassy_of_crab_centara', name: 'エンバシー・オブ・クラブ (Embassy of Crab)', category: 'OMNI',
    lat: 34.660161, lng: 135.502222, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Buffets mix crab with pasta, pâté en croûte, sushi, Thai dishes and desserts.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a crab and seafood restaurant.',
    hours_raw: 'Daily 11:30–22:00 (last order 21:30); open year-round (Tabelog). Reservations accepted (Tabelog); book for the crab buffet, which fills up (January 2025). Service charge 15% from January 2024 (Tabelog). Cards; no e-money or QR (Tabelog). 139 seats, private rooms, a bar counter for solo diners; non-smoking (Tabelog). Kids menu (Tabelog). The room is shared with Suan Bua (October 2026). Opened 1 July 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba-naka 2-11-50, Centara Grand Hotel Osaka 2F, beside Namba Parks — 4 min from Namba Stn',
    cuisine: 'Seafood restaurant under a neon crab sign: set menus and courses of fresh seafood, a lunch buffet, and seasonal dessert buffets on weekends and holidays (Tabelog) · seasonal all-you-can-eat crab buffets, boiled and grilled, with sushi, roast beef, pâté en croûte, prosciutto, Thai dishes and strawberries (December 2024–January 2026); a New Year crab buffet ¥9,500, drinks +¥2,500 (January 2026) · pasta lunch with mini salad, bread and a dessert buffet: shrimp and zucchini linguine, Bolognese tagliatelle, cold capellini (October 2025) · courses ¥5,000 and ¥7,000 with caprese, crab cream pasta (September–October 2026)',
    website: SITE, gmaps: gm('Embassy of Crab センタラグランドホテル大阪'), menu_url: null,
    notes: "[Seafood · Namba-naka, crab buffets in the Centara hotel] The seafood restaurant on the second floor of the Centara Grand Hotel by Namba Parks, marked by a neon crab and sharing an open room that does not feel typically Japanese with Suan Bua, also in the hotel. It is known for seasonal all-you-can-eat crab, boiled and grilled, alongside sushi, roast beef and Thai dishes (¥9,500 at New Year 2026, before drinks), and for weekend dessert buffets. A pasta lunch with the dessert buffet is the cheaper way in. Opinions vary: a March 2025 diner found advertised buffet items missing, a November 2025 one skipped the buffet for à la carte. 15% service charge; kids menu.",
    chef_bio: { chef_name: null, roles: ['Hotel kitchen and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: seafood restaurant in Centara Grand Hotel Osaka with a neon crab sign and a unique interior; set menus and courses of fresh seafood, a lunch buffet, and seasonal weekend dessert buffets; a bar counter for solo diners; kids menu; opened 1 July 2023. The listing links the hotel site (centarahotelsresorts.com).', philosophy: null, specialty: 'Crab buffets; seafood courses.',
      anecdotes: [
        { text: '"The regular price is JPY 9,500, but I used a 20% discount from Ikkyu, bringing it down to JPY 7,600, with an additional JPY 2,500 for all-you-can-drink." — January 2026, the New Year crab buffet.', source: R + 'B520446771/' },
        { text: '"However, on the day of our visit, none of the items listed on the menu were available." — March 2025.', source: R + 'B503153033/' },
        { text: '"The space combines Suan Bua and Embassy of Crab, creating a unique environment that doesn’t feel typically Japanese." — October 2026.', source: R + 'B537423145/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): エンバシー・オブ・クラブ、海鮮・ビュッフェ、大阪市浪速区難波中2-11-50 センタラグランドホテル大阪 2F、なんば駅から徒歩4分、毎日11:30〜22:00 (L.O.21:30)、年中無休、予約可、サービス料15% (2024年1月から)、カード可、電子マネー・QR 不可、139席、個室、禁煙、キッズメニュー、2023年7月1日オープン。店の紹介 (英訳): かにのネオンのロゴ、新鮮な魚介のセットとコース、ランチのビュッフェ、週末と祝日の季節のデザートのビュッフェ、ひとりならバーのカウンターへ。口コミ(2024年12月〜2026年10月): 季節のかにの食べ放題 (ゆでがにと焼きがに)、寿司、ローストビーフ、パテ・アン・クルート、生ハム、タイ料理、いちご、年末年始のかにのビュッフェ9,500円、飲み放題2,500円、パスタのランチとデザートのビュッフェ、5,000円と7,000円のコース、カプレーゼ、かにのクリームパスタ、メニューに載った料理がなかったという声、ビュッフェをやめて単品にした声、Suan Bua と共用の、日本らしくない店内。',
      confidence: 'medium', sources: [TB, R + 'B497564097/', R + 'B499715295/', R + 'B500397289/', R + 'B501079703/', R + 'B503153033/', R + 'B516779479/', R + 'B517629894/', R + 'B520446771/', R + 'B535034654/', R + 'B537423145/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'International hotel restaurant with many overseas guests (November 2025); no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市浪速区難波中2-11-50 センタラグランドホテル大阪 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing, which links the hotel site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目11番50号 (go) 28m. Same building as osaka_kunsei_centara_grand_namba (address_ja "難波中2-11-50 センタラグランドホテル大阪 33F", 7 m) and osaka_steak_house_whisky_nova_namba ("センタラグランドホテル大阪 32F", 7 m), so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B520446771/', R + 'B535034654/', R + 'B537423145/'],
    price_note: 'Prices from January, September and October 2026 reviews; 15% service charge.', last_checked: TODAY, items: [
      it('', '', 'Seasonal crab buffet (New Year 2026)', '¥9,500', 'Buffet', 'ask', 'no', 'January 2026 review.', 'crab_buffet'),
      it('', '', 'Seafood course', '¥7,000', 'Courses', 'ask', 'no', 'September 2026 review.', 'course_7000'),
      it('', '', 'Pasta lunch with dessert buffet', '', 'Lunch', 'no', 'ask', 'October 2025 review.', 'pasta_lunch'),
    ] }, {
    cuisine: 'かにのネオンが目印の魚介の店: 新鮮な魚介のセットとコース、ランチのビュッフェ、週末と祝日の季節のデザートのビュッフェ (食べログ)・季節のかにの食べ放題 (ゆでがにと焼きがに) と、寿司、ローストビーフ、パテ・アン・クルート、生ハム、タイ料理、いちご (2024年12月〜2026年1月)。年末年始のかにのビュッフェ9,500円、飲み放題は2,500円追加 (2026年1月)・ミニサラダ、パン、デザートのビュッフェつきのパスタのランチ: えびとズッキーニのリングイネ、ボロネーゼのタリアテッレ、冷製カペリーニ (2025年10月)・カプレーゼやかにのクリームパスタの入る5,000円と7,000円のコース (2026年9月〜10月)',
    neighborhood: '難波中2-11-50、センタラグランドホテル大阪2階、Namba Parks のそば。なんば駅から4分',
    gf_detail: '要確認。グルテンの情報なし。ビュッフェにはかにのほか、パスタ、パテ・アン・クルート、寿司、タイ料理、デザートが並ぶ。',
    vegan_detail: 'ヴィーガンではありません。かにと魚介の店。',
    notes: '[海鮮・難波中、センタラのかにのビュッフェ] Namba Parks のそばのセンタラグランドホテル2階の魚介の店で、かにのネオンが目印。同じホテルの Suan Bua と共用の、日本らしくない開放的な店内。名物は季節のかにの食べ放題で、ゆでがにと焼きがにに寿司、ローストビーフ、タイ料理も (2026年の年末年始は9,500円、飲み物は別)。週末はデザートのビュッフェも。安く入るならデザートのビュッフェつきのパスタのランチ。評価は分かれ、2025年3月にはメニューにあった料理がなかったという声、11月にはビュッフェをやめて単品にした人も。サービス料15%、キッズメニューあり。',
  });
}

save();
