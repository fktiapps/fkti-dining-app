// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 18.
//   + ももてる Momoteru (eleven-seat counter izakaya off Ayanokoji near Shijo-Karasuma, run by Momoko)
//   + Restaurant muni (Western-style French bistro beside the Pontocho Kaburenjo, fish from Sasue Maeda; since 2021)
//   + SAVORY (vegetable-led French on the 3rd floor of 京都八百一本館, beside its rooftop farm; since 2013)
//   + 神宮道 じん Jingu Michi Jin (kappo counter by the Heian Shrine torii, couple-run; since 2024)
//   Picked on 2026-11-05: the first two with id mod 6 = 2 from `queue.mjs kyoto-missed next core 200` (26005736, 26036138);
//   the first two from `next notable 200` (26022236, 26041460). None is in data/kyoto.json: grep by name (ももてる/Momoteru,
//   muni, SAVORY/セイボリー, じん/Jin) and address (綾材木町197, 材木町176, 三文字町220, 堀池町374) found none.
//   Same-name count (Greg's Samboa ruling): no second shop found for any of the four. SAVORY is the restaurant of 京都八百一本館,
//   run by the produce company 株式会社セントラルフルーツ (京都八百一) — a greengrocer's own restaurant, not a restaurant chain.
//   Service charges checked against Tabelog's Japanese original: only muni has one (¥200 a head, plus ¥2,000 corkage).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ももてる
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005736/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:30', '23:00']);
  put({
    id: 'kyoto_momoteru_ayanokoji', name: 'ももてる (Momoteru)', category: 'MOM_AND_POP',
    lat: 35.002633, lng: 135.76316, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Home-style izakaya dishes from a handwritten menu; fried dishes (breaded swordfish, shrimp tempura, fried chicken, spring rolls) and egg sandwiches are not gluten-free (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, meat, egg and cheese throughout; some vegetable dishes such as komatsuna with walnut dressing or lotus root in vinegar — ask (2024–2026 reviews).',
    hours_raw: '18:30–23:00, Monday–Saturday; closed Sunday; hours may change (Tabelog). Reservations accepted; groups of more than four are often not possible (Tabelog); busy with regulars, so check before going (September 2025). No cards or e-money; QR payments accepted (Tabelog). 11 counter seats; a low door you stoop to enter (Tabelog; September 2025). Smoking allowed (Tabelog). Two burners only, so dishes can take time when full (March 2026). Down a back lane off Ayanokoji west of Sakaimachi, 293 m from Karasuma Stn (Tabelog; 2024–2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'A lane off Ayanokoji near Shijo-Karasuma — 293 m from Karasuma Stn',
    cuisine: 'Counter izakaya of home-style, creative small dishes from a handwritten menu (2024–2026 reviews) · potato salads that change flavour — with salmon roe and shiso, or blue cheese — and can be refilled in another (2024–2026) · kitsune cheese, young-corn spring rolls with cheese, komatsuna with walnut dressing, anchovy cabbage, tonteki (June 2026) · breaded swordfish, roast beef loin, asparagus with salted kombu (September 2024) · scallops simmered with Inaniwa udon in season, chive omelette (May 2024; September 2025) · lotus root and chrysanthemum in vinegar, sanma Arima-yaki, beef tendon with shishito, a mushroom-and-meat rice to finish (October 2024) · egg sandwich, keema curry with egg, fried chicken, shrimp tempura (2025–2026) · beer, Fushimi sake, shochu, wine (2024–2026 reviews)',
    website: null, gmaps: gm('ももてる 京都 綾小路'), menu_url: null,
    notes: '[Izakaya · Shijo-Karasuma, Momoko’s counter in a back lane] Stoop through a low door in a lane off Ayanokoji into an eleven-seat counter run by Momoko, where regulars chat across to newcomers and sometimes share plates. The handwritten menu is home cooking with a twist: potato salads in changing flavours, kitsune cheese, breaded swordfish, anchovy cabbage, an egg sandwich, keema curry. Two burners only, so be patient when it is full. No cards (QR is fine); smoking allowed; closed Sunday.',
    chef_bio: { chef_name: 'Momoko', roles: ['Owner (named Momoko in a September 2024 review), who cooks'], origin: null,
      background: 'A September 2024 reviewer names the owner as Momoko and enjoyed the lively talk between Momoko and the regulars; an August 2026 reviewer credits the food to Momo. Reviewers describe a long-standing local haunt where regulars talk with newcomers.',
      philosophy: null, specialty: 'Changing potato salads; egg sandwich.',
      anecdotes: [
        { text: 'A June 2026 regular on an eleventh visit tried young-corn spring rolls — the corn looked more grown-up than young — and was handed a taste of a neighbouring regular’s food.', source: R + 'B113083200/' },
        { text: 'An October 2024 first-timer, sent by a colleague who had moved to Kyoto, was surprised by an otoshi of a whole sea-bream head and found the drinks list scribbled on a fan.', source: R + 'B494562937/' },
        { text: 'A September 2024 visitor came after seeing a lawyer’s post on Twitter, and found the breaded swordfish as fluffy as high-end French cooking.', source: R + 'B492931697/' },
      ],
      japanese_sources_summary: '食べログ: ももてる、居酒屋・焼酎バー・創作料理、下京区綾小路堺町西入ル綾材木町197、烏丸駅から293m、月〜土 18:30〜23:00、日曜休み、予約可 (4人以上は難しいことが多い)、カード・電子マネー不可、QR可、カウンター11席、喫煙可。口コミ (2024〜2026年、英語): 店主の Momoko さん、手書きのメニュー、味の変わるポテトサラダ (いくらと大葉、ブルーチーズ)、きつねチーズ、ヤングコーンの春巻き、小松菜のくるみ和え、アンチョビキャベツ、トンテキ、かじきのパン粉焼き、帆立と Inaniwa のうどん、ニラ玉、さんまの Arima 焼き、牛すじとししとう、玉子サンド、キーマカレー、常連が多くあたたかい雰囲気、コンロは2口。',
      confidence: 'medium', sources: [TB, R + 'B113083200/', R + 'B485987152/', R + 'B492931697/', R + 'B494562937/', R + 'B502352066/', R + 'B512989773/', R + 'B525816276/', R + 'B532394385/', R + 'B534677724/', R + 'B88484433/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter of regulars; book ahead, groups over four hard; no cards (QR accepted); smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路堺町西入ル綾材木町197',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.002633, 135.76316); cross-checked: GSI 京都府京都市下京区綾材木町197番地 (lot) 8m; nearest existing pin kyoto_bistro_maumu 11 m (a different shop); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B502352066/', R + 'B88484433/'],
    price_note: 'No menu or prices read; dishes from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Potato salad (flavour changes; refill in another flavour)', '', 'Small dishes', 'ask', 'no', 'January 2025; prices not given.', 'potato_salad'),
      it('', '', 'Egg sandwich', '', 'Small dishes', 'no', 'no', '2025–2026; price not given.', 'egg_sandwich'),
    ] }, {
    cuisine: '手書きのメニューの、家庭的でひとひねりある小皿のカウンター居酒屋 (2024〜2026年の口コミ)・味の変わるポテトサラダ、いくらと大葉やブルーチーズ、別の味でおかわりも (2024〜2026年)・きつねチーズ、チーズ入りのヤングコーンの春巻き、小松菜のくるみ和え、アンチョビキャベツ、トンテキ (2026年6月)・かじきのパン粉焼き、牛ロースのロースト、アスパラの塩昆布炒め (2024年9月)・季節の帆立の炊いたんと Inaniwa のうどん、ニラ玉 (2024年5月、2025年9月)・蓮根と菊花の酢の物、さんまの Arima 焼き、牛すじとししとうの炒め物、肉ときのこのご飯で締め (2024年10月)・玉子サンド、卵のせキーマカレー、唐揚げ、海老天 (2025〜2026年)・ビール、Fushimi の日本酒、焼酎、ワイン (2024〜2026年の口コミ)',
    neighborhood: '四条烏丸近く、綾小路から入った路地。烏丸駅から293m',
    gf_detail: '要確認。手書きのメニューの家庭的な居酒屋料理。かじきのパン粉焼き、海老天、唐揚げ、春巻き、玉子サンドはグルテンフリーではない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、肉、卵、チーズが多い。小松菜のくるみ和えや蓮根の酢の物などの野菜料理は要確認 (2024〜2026年の口コミ)。',
    notes: '[居酒屋・四条烏丸、路地の Momoko さんのカウンター] 綾小路の路地の低い戸をかがんでくぐると、Momoko さんが営む11席のカウンター。常連が初めての客にも話しかけ、料理を分けてくれることも。手書きのメニューは家庭料理にひとひねり。味の変わるポテトサラダ、きつねチーズ、かじきのパン粉焼き、アンチョビキャベツ、玉子サンド、キーマカレー。コンロは2口なので混むときは気長に。カード不可 (QR可)、喫煙可、日曜休み。',
  });
}

// ================================================================ Restaurant muni
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036138/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:30', '23:00']); const LD = day(['11:30', '14:30'], ['17:30', '23:00']);
  put({
    id: 'kyoto_restaurant_muni_kiyamachi', name: 'Restaurant muni', category: 'OMNI',
    lat: 35.008151, lng: 135.770901, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French and Western-style dishes including fried tuna-katsu and fish burgers, puff pastry, omurice with demi-glace, hamburg steak and curry, which are not or may not be gluten-free (2026 reviews).',
    vegan_status: 'limited', vegan_label: 'Limited vegan', vegan_detail: 'Limited: the shop says on Tabelog that it offers a vegan menu and vegetarian options; the regular courses are fish and meat — ask ahead (Tabelog).',
    hours_raw: 'Lunch 11:30–14:30 (L.O. 14:00) Wednesday–Sunday; dinner 17:30–23:00 (L.O. 22:00) Tuesday–Sunday; closed Monday, all day on the 1st and 3rd Tuesday, and at lunch on the 1st and 3rd Wednesday; updates on Google and Instagram (Tabelog). Reservations accepted; 15 minutes late may count as a cancellation; cancellation fees the day before and on the day (Tabelog). Seat and service charge ¥200 per person; corkage ¥2,000 per person (Tabelog, original text). Cards, e-money and QR accepted (Tabelog). 20 seats: 8 at the counter, 12 at tables, and a box seat for four by the wine cellar (Tabelog). Non-smoking (Tabelog). English menu and English-speaking staff; sommelier (Tabelog). Children welcome (Tabelog). Next to the Pontocho Kaburenjo, 3 min from Sanjo Stn (Tabelog). Opened 14 July 2021 (Tabelog).',
    hours: { 1: D, 2: LD, 3: LD, 4: LD, 5: LD, 6: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi by the Pontocho Kaburenjo — 3 min from Sanjo Stn',
    cuisine: 'French and Western-style bistro built on fish from Sasue Maeda Fish Shop of Yaizu, Shizuoka, and vegetables from the chef’s family farm (2026 reviews) · lunch courses of about five dishes, meat or fish (September–October 2026) · omurice set ¥2,900 + ¥200 charge — fish soup, a fish starter and demi-glace omurice (October 2026) · ¥10,000 dinner course (September 2026) · dishes reviewed: shrimp and soybean potage, horse-mackerel terrine, steamed sea bream with yuzu-kosho miso, red snapper in puff pastry, fish burger and tuna-katsu burger, Shiga venison, wagyu roasted over whisky-barrel wood, cream risotto, curry to finish (July–October 2026) · Kobe beef at events only, by phone (Tabelog) · Kyoto craft beer, wine, sake (September 2026)',
    website: null, gmaps: gm('Restaurant muni 京都 木屋町'), menu_url: null,
    notes: '[French bistro · Pontocho Kaburenjo, Sasue fish in Kyoto] A relaxed French-and-yoshoku restaurant next to the Pontocho Kaburenjo whose draw is fish from Sasue Maeda, the celebrated fishmonger of Yaizu, alongside vegetables from the chef’s family farm. Lunch runs from a ¥2,900 omurice set to five-course menus; dinner courses go to about ¥10,000, with fish burgers, puff-pastry snapper, wagyu over whisky-barrel wood and a curry to close. A vegan menu is offered. ¥200 charge; English spoken; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef (named inconsistently in reviews; not used)'], origin: null,
      background: 'Tabelog gives the opening as 14 July 2021. A September 2026 review says the chef trained in French cooking, placed second in the Toque d’Or contest for young chefs, and grows vegetables on the family farm. The shop says on Tabelog that kitchen trimmings go into demi-glace, consommé and staff meals, and that retired whisky-barrel wood fires the wagyu.',
      philosophy: 'The name muni means unique and unparalleled (September 2026 review).', specialty: 'Sasue fish dishes; demi-glace omurice.',
      anecdotes: [
        { text: 'Two 2026 reviewers note that the omurice was eaten by the President of Ecuador on a visit.', source: R + 'B523220226/' },
        { text: 'A September 2026 family made a same-day booking with two children during Silver Week; the children had fried rice à la carte while the parents took the lunch course.', source: R + 'B536522468/' },
      ],
      japanese_sources_summary: '食べログ: Restaurant muni、フレンチ・ビストロ・ハンバーグ、中京区材木町176-3、Pontocho Kaburenjo の隣、三条駅から徒歩3分、昼11:30〜14:30 (L.O.14:00) 水〜日、夜17:30〜23:00 (L.O.22:00) 火〜日、月曜休み、第1・3火曜は終日、第1・3水曜は昼休み、予約可、当日・前日のキャンセル料あり、席料・サービス料1人200円、持ち込み料1人2,000円、カード・電子マネー・QR可、20席 (カウンター8、テーブル12)、禁煙、英語メニュー・英語のスタッフ、ソムリエ、子ども可、2021年7月14日オープン、Kobe 牛はイベント時のみ。店の取り組み: 端材でデミグラスやコンソメ、ウイスキー樽の薪で和牛を焼く、ヴィーガンメニュー。口コミ (2026年、英語): Yaizu の Sasue Maeda 魚店の魚、シェフの実家の畑の野菜、オムライスのセット2,900円、10,000円のコース、フィッシュバーガー、まぐろカツバーガー、締めのカレー。',
      confidence: 'medium', sources: [TB, R + 'B523220226/', R + 'B531225619/', R + 'B535324667/', R + 'B535369350/', R + 'B535430511/', R + 'B535958791/', R + 'B536390269/', R + 'B536522468/', R + 'B537487400/', R + 'B538158726/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); ¥200 charge; children welcome.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区材木町176-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008151, 135.770901); cross-checked: GSI 京都府京都市中京区材木町176番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537487400/', R + 'B535958791/', TB],
    price_note: 'No menu read; prices from September–October 2026 reviews; charge and corkage from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Omurice set (fish soup, fish starter, demi-glace omurice)', '¥2,900', 'Lunch', 'ask', 'no', 'October 2026; plus ¥200 charge.', 'omurice_set'),
      it('', '', 'Dinner course', '¥10,000', 'Courses', 'ask', 'no', 'September 2026.', 'dinner_course'),
      it('', '', 'Seat and service charge, per person', '¥200', 'Charges', '', '', 'Tabelog.', 'seat_charge'),
      it('', '', 'Corkage, per person', '¥2,000', 'Charges', '', '', 'Tabelog.', 'corkage'),
    ] }, {
    cuisine: 'Yaizu の Sasue Maeda 魚店の魚とシェフの実家の畑の野菜を使うフレンチと洋食のビストロ (2026年の口コミ)・昼は肉か魚を選ぶ約5品のコース (2026年9〜10月)・オムライスのセット2,900円と席料200円、魚のスープ、魚の前菜、デミグラスのオムライス (2026年10月)・夜は10,000円のコース (2026年9月)・口コミの料理: 海老と大豆のポタージュ、鯵のテリーヌ、鯛の柚子胡椒味噌、甘鯛のパイ包み、フィッシュバーガーとまぐろカツバーガー、Shiga の鹿肉、ウイスキー樽の薪で焼く和牛、クリームリゾット、締めのカレー (2026年7〜10月)・Kobe 牛はイベント時のみ、電話で (食べログ)・京都のクラフトビール、ワイン、日本酒 (2026年9月)',
    neighborhood: 'Pontocho Kaburenjo の隣、木屋町。三条駅から徒歩3分',
    gf_detail: '要確認。まぐろカツやフィッシュバーガーの揚げ物、パイ包み、デミグラスのオムライス、ハンバーグ、カレーなど、グルテンを含む、または含みうる料理 (2026年の口コミ)。',
    vegan_detail: '一部対応。食べログで店がヴィーガンメニューとベジタリアン対応を案内している。通常のコースは魚と肉なので事前に相談を (食べログ)。',
    notes: '[フレンチビストロ・Pontocho Kaburenjo、京都で Sasue の魚] Pontocho Kaburenjo の隣の気取らないフレンチと洋食の店。目当ては Yaizu の名店 Sasue Maeda 魚店の魚と、シェフの実家の畑の野菜。昼は2,900円のオムライスのセットから5品のコースまで、夜のコースは約10,000円、フィッシュバーガー、甘鯛のパイ包み、ウイスキー樽の薪で焼く和牛、締めのカレー。ヴィーガンメニューもある。席料200円、英語可、月曜休み。',
  });
}

// ================================================================ SAVORY
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26022236/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyotoyaoichihonkan.com/';
  const H = day(['11:30', '16:30'], ['17:30', '21:00']);
  put({
    id: 'kyoto_savory_yaoichi_honkan', name: 'SAVORY (セイボリー)', category: 'OMNI',
    lat: 35.007722, lng: 135.761243, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Vegetable-led French courses with steak or fish, soups, potato bread and focaccia, and fruit parfaits; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the courses centre on vegetables from the rooftop farm, but mains are beef, fish or venison and desserts use dairy (Tabelog; 2026 reviews).',
    hours_raw: 'Official site: lunch 11:30–15:00 (last order), tea 14:00–16:30 (L.O. 16:00), dinner 17:30–21:00 (food L.O. 20:00, drinks 20:30); closed Wednesday (open on a holiday Wednesday, closed the next Thursday). Reservations by phone or in person only (Tabelog); 12:00 lunch slots fill up (October 2026). BYO bottle wine accepted, per a site notice. Cards: JCB, AMEX, Diners; no e-money or QR (Tabelog). 60 seats; private room for 10–20 by reservation (Tabelog). Non-smoking; English menu (Tabelog). Third floor of 京都八百一本館 on Higashinotoin south of Sanjo, beside the building’s Rokkaku Farm; 375 m from Karasuma-Oike Stn (official site; Tabelog). Opened 24 April 2013 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin south of Sanjo — 375 m from Karasuma-Oike Stn',
    cuisine: 'Vegetable-led French in the restaurant of the greengrocer 京都八百一, with vegetables from the store and its rooftop Rokkaku Farm (official site; 2026 reviews) · lunch courses: vegetable-parfait starter, soup (corn, carrot, butternut, chestnut), potato bread and focaccia, a main of steak, Omi beef, sea bass in zucchini, fish in a magnolia leaf from the roof, or ayu confit cooked seven hours (May–October 2026) · venison steak recommended for autumn and winter (official site) · seasonal fruit parfaits — peach in summer; Shine Muscat pavlova for a limited time (2026 reviews; official site) · tea time 14:00–16:30 · wine and cocktails',
    website: SITE, gmaps: gm('SAVORY 京都八百一本館'), menu_url: null,
    notes: '[French · Sanjo-Higashinotoin, lunch beside a rooftop farm] The third-floor restaurant of Kyoto Yaoichi Honkan, a greengrocer’s flagship, where you eat looking out on the building’s own rooftop farm. Lunch courses open with a vegetable parfait and run to steak, Omi beef or fish — once wrapped in a magnolia leaf from the roof — with seasonal fruit parfaits after; afternoons are for tea and parfait. Spacious and calm, popular for birthdays with family. Book by phone; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Restaurant of 京都八百一本館 (operator 株式会社セントラルフルーツ)'], origin: null,
      background: 'Per the official site: the building houses the greengrocer 京都八百一, a deli, bakery, butcher, fishmonger and other shops, with SAVORY on the third floor and the Rokkaku Farm on the roof. Tabelog gives the opening as 24 April 2013.',
      philosophy: null, specialty: 'Vegetable-parfait starter; ayu confit; fruit parfaits.',
      anecdotes: [
        { text: 'An August 2026 regular comes every year for the peach parfait.', source: R + 'B195382169/' },
        { text: 'A September 2026 father chose it for lunch to meet a daughter’s boyfriend, a gym-goer, for the health-conscious menu.', source: R + 'B535812494/' },
        { text: 'A September 2026 diner found the vegetable parfait a little disjointed and preferred the steamed vegetables a family member ordered.', source: R + 'B536572960/' },
      ],
      japanese_sources_summary: '公式サイト: 京都八百一本館、中京区三文字町220、3階のレストラン セイボリー、昼11:30〜15:00 (L.O)、ティータイム14:00〜16:30 (L.O.16:00)、夜17:30〜21:00 (フードL.O.20:00、ドリンクL.O.20:30)、水曜休み (祝日は営業、翌木曜休み)、屋上の六角農場、秋冬は鹿肉のステーキがおすすめ、期間限定のシャインマスカットのパブロバ、ボトルワインの持ち込み (BYO) の案内、運営は株式会社セントラルフルーツ (京都八百一)。食べログ: 東洞院通三条下る三文字町220 八百一本館3F、烏丸御池駅から375m、予約は電話か店頭のみ、カード (JCB、AMEX、Diners)、60席、個室 (10〜20人)、禁煙、英語メニュー、ベジタリアン対応、2013年4月24日オープン。口コミ (2026年、英語): 屋上の畑の野菜、野菜のパフェ、Omi 牛、鮎のコンフィ、朴葉包みの魚、桃のパフェ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B195382169/', R + 'B472401021/', R + 'B487444290/', R + 'B530264491/', R + 'B530391085/', R + 'B531448412/', R + 'B531937539/', R + 'B535812494/', R + 'B536572960/', R + 'B537837798/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); book by phone; spacious seating.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通三条下る三文字町220 八百一本館 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news through November 2026) and Tabelog; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007722, 135.761243); cross-checked: GSI 京都府京都市中京区三文字町220番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536572960/', R + 'B537837798/', SITE],
    price_note: 'No menu or prices read; dishes from 2026 reviews and the official site.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (vegetable parfait, soup, bread, main, coffee)', '', 'Lunch', 'ask', 'no', 'September–October 2026; price not given.', 'lunch_course'),
      it('', '', 'Venison steak', '', 'Dinner', 'ask', 'no', 'Official site, autumn–winter recommendation; price not given.', 'venison_steak'),
    ] }, {
    cuisine: '京都八百一のレストランの、野菜が主役のフレンチ。店の野菜と屋上の六角農場の野菜 (公式サイト、2026年の口コミ)・昼のコース: 野菜のパフェの前菜、スープ (とうもろこし、にんじん、バターナッツ、栗)、ポテトブレッドとフォカッチャ、メインはステーキ、Omi 牛、ズッキーニで包んだすずき、屋上の朴葉で包んだ魚、7時間かけた鮎のコンフィ (2026年5〜10月)・秋冬のおすすめは鹿肉のステーキ (公式サイト)・季節のフルーツパフェ、夏は桃、期間限定のシャインマスカットのパブロバ (2026年の口コミ、公式サイト)・ティータイム14:00〜16:30・ワイン、カクテル',
    neighborhood: '三条の南の東洞院通。烏丸御池駅から375m',
    gf_detail: '要確認。野菜中心のフレンチのコースにステーキや魚、スープ、ポテトブレッドとフォカッチャ、フルーツパフェ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。食べログにベジタリアン対応の記載、コースは屋上の畑の野菜が中心だが、メインは牛、魚、鹿で、デザートには乳製品 (食べログ、2026年の口コミ)。',
    notes: '[フレンチ・三条東洞院、屋上の畑を眺めるランチ] 八百屋の旗艦店、京都八百一本館の3階のレストラン。建物の屋上の畑を眺めながら食事ができる。昼のコースは野菜のパフェで始まり、ステーキ、Omi 牛、屋上の朴葉で包んだ魚などのメイン、食後は季節のフルーツパフェ。午後はお茶とパフェの時間。広々と落ち着いていて、家族の誕生日にも人気。予約は電話で、水曜休み。',
  });
}

// ================================================================ 神宮道 じん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041460/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '21:00']);
  put({
    id: 'kyoto_jingumichi_jin', name: '神宮道 じん (Jingu Michi Jin)', category: 'OMNI',
    lat: 35.009844, lng: 135.782669, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo courses and à la carte of sashimi, dashi-based dishes and grills, with fried dishes (fried squid, shrimp-and-yam fritters) and eel rice; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, dashi, Tanba beef, eel (2025–2026 reviews).',
    hours_raw: '17:00–21:00; closed Wednesday; open on holidays and the days before and after (Tabelog). Reservations accepted (Tabelog). Courses ¥15,000 and ¥20,000, or à la carte (Tabelog). Cards: VISA, Master, JCB, AMEX; no e-money or QR (Tabelog). 12 seats: a counter and tables over sunken kotatsu, a private room for four; private hire up to 20 (Tabelog; January 2026). BYO allowed; takeaway (Tabelog). Non-smoking; children welcome, with care around the sunken seating (Tabelog). Upstairs, through an entrance at the edge of an eel restaurant, on Jingu-michi in sight of the Heian Shrine torii; 5 min from Higashiyama Stn (Tabelog; January 2026). Opened 2 June 2024 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Jingu-michi, by the Heian Shrine torii — 5 min from Higashiyama Stn',
    cuisine: 'Kappo counter of seasonal Kyoto cooking, courses or à la carte from the board (Tabelog; 2025–2026 reviews) · courses ¥15,000 and ¥20,000 (Tabelog) · spring course: firefly squid in soy, white-sesame salad with strawberry, sashimi of sea bream, tuna, squid and sea urchin (March 2026) · summer: pumpkin and hamo cold dishes, hamo, octopus, Biwa trout, Yanagawa hot pot, ayu, potato salad with sansho, Tanba beef fillet (July 2025) · winter seko-gani (December 2025) · à la carte: whale bacon, grilled mehikari, fried squid, cream cheese with nara-zuke, soft-shelled-turtle porridge, unadon (2025–2026 reviews) · a strong sake list; wine',
    website: null, gmaps: gm('神宮道 じん 京都'), menu_url: null,
    notes: '[Kappo · Okazaki, a counter in sight of the Heian Shrine torii] Upstairs on Jingu-michi, a twelve-seat counter run by a chef who trained at Tankuma, then spent more than a decade at Inaba and Gion Ima, and opened here in 2024 with the chef’s wife at front of house. Order a course (¥15,000 or ¥20,000) or graze à la carte from the board in small portions: hamo and ayu in summer, seko-gani in winter, whale bacon, a soft-shelled-turtle porridge to finish. Warm, chatty hosts. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)', 'The chef’s wife, front of house (September 2026 review)'], origin: null,
      background: 'Per the shop’s Tabelog introduction: trained for several years at Tankuma, then honed skills at Inaba and Gion Ima for more than ten years, and opened this restaurant in June 2024 where the Heian Shrine torii can be seen. A March 2026 reviewer gives thirteen years at Gion Ima, a kaiseki house that turns away first-time guests.',
      philosophy: 'Seasonal dishes enjoyed while chatting at the counter (shop’s Tabelog introduction).', specialty: 'Seasonal kappo; soft-shelled-turtle porridge.',
      anecdotes: [
        { text: 'A January 2026 visitor was briefly lost at an entrance tucked beside an eel restaurant; on leaving, the owner came to the door to say goodbye with "Please come again!"', source: R + 'B520288068/' },
        { text: 'A September 2026 diner fell into conversation with two local regulars at the counter and booked again for New Year’s Eve, when the shop will open.', source: R + 'B535882115/' },
        { text: 'A May 2026 regular on a ninth visit went à la carte from the board for the first time and finished with soft-shelled-turtle porridge.', source: R + 'B488322126/' },
      ],
      japanese_sources_summary: '食べログ: 神宮道 じん、日本料理、東山区堀池町374-5、東山駅から徒歩5分、17:00〜21:00、水曜休み、予約可、コース15,000円と20,000円、アラカルトも、カード可、12席、掘りごたつ、4人の個室、持ち込み可、禁煙、子ども可、2024年6月2日オープン。店の紹介: Tankuma で数年修業、その後 Inaba と Gion Ima で十年以上、2024年6月に平安神宮の鳥居が見える場所に開店、カウンターで会話を楽しみながら季節の料理を。口コミ (2025〜2026年、英語): 店主と妻の明るい人柄、ほたるいかの醤油漬け、鱧、鮎、Tanba 牛のヒレ、せこがに、くじらベーコン、めひかり、すっぽん雑炊、うな丼、小さめのポーション、うなぎ屋の端の入口から2階へ。',
      confidence: 'medium', sources: [TB, R + 'B488322126/', R + 'B506812733/', R + 'B516469389/', R + 'B519320549/', R + 'B519917157/', R + 'B520288068/', R + 'B530049606/', R + 'B533116376/', R + 'B533700163/', R + 'B535882115/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; courses or à la carte in small portions; sunken kotatsu seating.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区堀池町374-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.009844, 135.782669); cross-checked: GSI 京都府京都市東山区堀池町374番地 (lot) 42m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing remarks.', last_checked: TODAY, items: [
      it('', '', 'Dinner course', '¥15,000', 'Courses', 'ask', 'no', 'Tabelog.', 'course_15000'),
      it('', '', 'Dinner course', '¥20,000', 'Courses', 'ask', 'no', 'Tabelog.', 'course_20000'),
    ] }, {
    cuisine: '季節の京料理の割烹カウンター、コースか黒板のアラカルト (食べログ、2025〜2026年の口コミ)・コース15,000円と20,000円 (食べログ)・春のコース: ほたるいかの醤油漬け、苺をのせた白胡麻のサラダ、鯛、鮪、いか、雲丹の造り (2026年3月)・夏: かぼちゃと鱧の冷菜、鱧、たこ、Biwa のます、柳川鍋、鮎、山椒のポテトサラダ、Tanba 牛のヒレ (2025年7月)・冬のせこがに (2025年12月)・アラカルト: くじらベーコン、めひかりの焼き物、いかフライ、クリームチーズの奈良漬け、すっぽん雑炊、うな丼 (2025〜2026年の口コミ)・日本酒が充実、ワインも',
    neighborhood: '平安神宮の鳥居近くの神宮道。東山駅から徒歩5分',
    gf_detail: '要確認。造り、出汁の料理、焼き物の割烹のコースとアラカルト。いかフライや海老と山芋の揚げ物、うな丼も。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、出汁、Tanba 牛、うなぎ (2025〜2026年の口コミ)。',
    notes: '[割烹・岡崎、平安神宮の鳥居を望むカウンター] 神宮道の2階、12席の割烹。Tankuma で修業し、Inaba と Gion Ima で十年以上腕を磨いた主人が2024年に開き、妻が接客する。コース (15,000円か20,000円) か、黒板から少量ずつのアラカルトで。夏は鱧と鮎、冬はせこがに、くじらベーコン、締めのすっぽん雑炊。明るく話し好きな夫婦。水曜休み。',
  });
}

save();
