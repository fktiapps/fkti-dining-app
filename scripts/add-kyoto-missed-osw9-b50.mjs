// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 50.
// Core lane still has shops, so all four come from core, in queue order:
//   + 千代飯店 Sendai Hanten (family-run neighbourhood Chinese set-meal shop near Horikawa-Nakadachiuri)           [core]
//   + Bisan 京都店 (Palestinian kitchen at the Demachi Masugata arcade; branch of Bisan in Jujo, Tokyo)          [core]
//   + ごはん処 田辺宗 Gohan Dokoro Tanabe So (pickle-and-miso house's own restaurant above its Demachi shop)     [core]
//   + 京都ラーメン 麺屋愛都 98号店 (今出川店) Menya Aito (student ramen shop at Imadegawa) — no ramen block          [core]
//   Same-name counts first: 千代飯店 0; Bisan 0 — the Tokyo Bisan (Jujo) is the main shop per a September 2026
//   review and is not in data: 2 shops, drafted one; 田辺宗 0 — the restaurant of the pickle maker 田辺宗 (1875),
//   formerly 葵匠; 愛都 0 — "98号店" is the shop's own numbering; no other 愛都 shop found — FLAGGED.
//   None drafted is in data/kyoto.json by name or address.
//   Service charges: none of the four has a Tabelog charge section.
//   Pins: Bisan and 田辺宗 — GSI matched only the town 青龍町, so loc_precise false (the two are 43 m apart).
//   Ruling applied: other-diner remarks only where several reviews agree (愛都: students, in four 2026 reviews).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-50');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 千代飯店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26011781/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_sendai_hanten_nakadachiuri', name: '千代飯店 (Sendai Hanten)', category: 'OMNI',
    lat: 35.02506, lng: 135.753473, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: ramen, dan dan noodles, gyoza, breaded cutlets and fried chicken (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat set meals, chashu ramen, egg soup (2025–26 reviews).',
    hours_raw: 'Sun–Fri 11:00–15:00 and 17:00–21:00; closed Saturday; hours may change (Tabelog). Bookings taken (Tabelog). No cards or e-money; QR accepted (Tabelog). 20 seats (Tabelog). Menu on the wall; food comes fast (October 2025 and July 2025 reviews). Just east of Horikawa-Nakadachiuri, about 5 min from the bus stop (Tabelog; June and September 2026 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Just east of Horikawa-Nakadachiuri — near the Raku Museum',
    cuisine: 'Neighbourhood Chinese set meals (2025–26 reviews): "Chuben" Chinese bento sets — fried chicken with chop suey, a small dish and pickles ¥800 (June 2026); yakiniku set with egg soup ¥750 (November 2025); a ramen, pork cutlet and rice set ¥1,000 (October 2025); kara-age set with fried rice and salad; fried-rice set; dan dan noodle set; boiled gyoza set with fried chicken; hiyashi chuka set in summer; wakame ramen heaped with vegetables',
    website: null, gmaps: gm('千代飯店 上京区 油小路'), menu_url: null,
    notes: "[Neighbourhood Chinese · Horikawa-Nakadachiuri] A family-run local Chinese shop serving big, cheap set meals to workers and students: \"Chuben\" bento sets, yakiniku and kara-age sets, dan dan noodles and ramen, mostly ¥750–1,000. No cards (QR yes); closed Saturday.",
    chef_bio: { chef_name: null, roles: ['Family-run (February 2025 review; no one named)'], origin: null,
      background: 'A family-run Chinese restaurant (February 2025 review). Two reviewers describe a lunch crowd of local workers and students (April 2025, June 2026).',
      philosophy: null, specialty: 'Chinese bento set ("Chuben").',
      anecdotes: [
        { text: 'On Kyoto Marathon day in February 2025, a walker cut off by road closures ordered wakame ramen and found it piled with vegetables like tanmen.', source: R + 'B502151904/' },
        { text: 'A November 2025 regular cycled old batteries to the junkyard across the road, then rewarded the effort with the ¥750 yakiniku set.', source: R + 'B518427956/' },
        { text: 'A June 2026 visitor sought out the ¥800 Chinese bento set, a style now rare.', source: R + 'B532860557/' },
      ],
      japanese_sources_summary: '食べログ: 千代飯店、中華料理・ラーメン、上京区油小路通中立売上る油橋詰町89-9、日〜金 11:00〜15:00・17:00〜21:00、土曜休み、予約可、カード・電子マネー不可、QR 可、20席。口コミ (2025年2月〜2026年9月、英語): 家族経営の町中華、Horikawa-Nakadachiuri のすぐ東、壁のメニュー、中華弁当 (チューベン) のセット800円 (唐揚げ、八宝菜、小鉢、漬物)、焼肉定食750円と卵スープ、ラーメンとカツとご飯のセット1,000円、唐揚げ定食、炒飯定食、担々麺のセット、水餃子と唐揚げの定食、冷やし中華のセット、野菜たっぷりのわかめラーメン、炒飯が焦げているという声も。',
      confidence: 'medium', sources: [TB, R + 'B502151904/', R + 'B506608633/', R + 'B510791100/', R + 'B510989180/', R + 'B515374929/', R + 'B518427956/', R + 'B529555501/', R + 'B532860557/', R + 'B65598485/'] },
    cultural_comfort: { level: 'japanese', note: 'Menu on the wall in Japanese.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区油小路通中立売上る油橋詰町89-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.025060, 135.753473); cross-checked: GSI 京都府京都市上京区油橋詰町89番地 (lot) 65m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532860557/', R + 'B518427956/', R + 'B515374929/'],
    price_note: 'Prices from October 2025–June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chinese bento set ("Chuben")', '¥800', 'Set meals', 'no', 'no', 'June 2026 review.', 'chuben'),
      it('', '', 'Yakiniku set', '¥750', 'Set meals', 'no', 'no', 'November 2025 review.', 'yakiniku_teishoku'),
    ] }, {
    cuisine: '町中華の定食 (2025〜26年の口コミ): 中華弁当「チューベン」 (唐揚げ、八宝菜、小鉢、漬物で800円、2026年6月)、卵スープの焼肉定食750円 (2025年11月)、ラーメンとカツとご飯のセット1,000円 (2025年10月)、炒飯とサラダの唐揚げ定食、炒飯定食、担々麺のセット、唐揚げ付きの水餃子定食、夏の冷やし中華のセット、野菜たっぷりのわかめラーメン',
    neighborhood: 'Horikawa-Nakadachiuri のすぐ東',
    gf_detail: 'グルテンフリー不可。ラーメン、担々麺、餃子、カツ、唐揚げ (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉の定食、チャーシューのラーメン、卵スープ (2025〜26年の口コミ)。',
    notes: '[町中華・Horikawa-Nakadachiuri] 働く人や学生に安くたっぷりの定食を出す、家族経営の町中華。中華弁当「チューベン」、焼肉定食や唐揚げ定食、担々麺、ラーメンが750〜1,000円ほど。カード不可 (QR 可)。土曜休み。',
  });
}

// ================================================================ Bisan 京都店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26042213/'; const R = TB + 'dtlrvwlst/';
  const AN = 'https://arabnews.com/node/1928641';
  const W = day(['11:00', '17:00']); const E = day(['11:00', '21:00']);
  put({
    id: 'kyoto_bisan_demachi', name: 'Bisan 京都店 (Bisan Kyoto)', category: 'OMNI',
    lat: 35.030252, lng: 135.769627, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Falafel, hummus and stews, but sandwiches come in pita and desserts include a nut pie (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; falafel, hummus and an okra-tomato stew sit beside chicken dishes and goat cheese (Tabelog; 2026 reviews).',
    hours_raw: 'Mon, Wed and Thu 11:00–17:00; Fri–Sun 11:00–21:00 (last order 20:30); closed Tuesday (Tabelog). Bookings taken; call for six or more (Tabelog). Cards, e-money and QR (Tabelog). 22 seats; non-smoking; children welcome; private hire up to 20 (Tabelog). At the entrance of the Demachi Masugata shopping street, 5 min from Demachiyanagi Stn (Tabelog; March, June and September 2026 reviews).',
    hours: { 0: W, 2: W, 3: W, 4: E, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Demachi Masugata shopping street — 5 min from Demachiyanagi Stn',
    cuisine: 'Palestinian home cooking (2026 reviews): falafel stuffed into pita with vegetables, sauces and pickles, hummus, sabaneh (spinach and chicken), okra and tomato stew with rice, fasoulia hamra with soup, eggplant and okra stew, goat cheese, a warm dessert, a nut-filled pie, Turkish-style ice cream; a value pair set and a tasting course; sage tea, rooibos mint tea, Arabic tea, pomegranate juice; wine (Tabelog)',
    website: null, gmaps: gm('Bisan 京都 出町'), menu_url: null,
    notes: "[Palestinian · Demachi Masugata arcade] A rare Palestinian kitchen at the mouth of the Demachi arcade, the Kyoto branch of Bisan in Tokyo: falafel in pita, hummus, spinach-and-chicken sabaneh and okra stew, with sage tea or pomegranate juice. About ¥2,000–3,000. Dinner Friday to Sunday; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 29 November 2024 (Tabelog). A September 2026 reviewer heard the main shop is in Jujo, Tokyo — the Bisan there opened in January 2011 under owner-chef Sudqi Mansour (Arab News). Reviews differ on the Kyoto kitchen: "run by someone from Palestine" (April 2026) and "the Palestinian chef" (August 2026), but "the staff were Japanese" (June 2026).',
      philosophy: null, specialty: 'Falafel; sabaneh.',
      anecdotes: [
        { text: 'An April 2026 visitor who had been reading about Palestine came here and was struck by the goat cheese, a warm dessert and sage tea.', source: R + 'B526626493/' },
        { text: 'On a value pair set in April 2026, a first-timer liked the falafel in pita and the okra and tomato stew, and planned to visit the Tokyo shop too.', source: R + 'B527565173/' },
        { text: 'A March 2026 fan of Middle Eastern food loved the flavours but found the portions small for the price.', source: R + 'B525825450/' },
      ],
      japanese_sources_summary: '食べログ: Bisan 京都店、中東料理、上京区河原町通今出川上る青龍町234、出町柳駅から徒歩5分、月・水・木 11:00〜17:00、金〜日 11:00〜21:00 (L.O. 20:30)、火曜休み、予約可 (6名以上は電話)、カード・電子マネー・QR 可、22席、禁煙、子ども可、貸切20名まで、野菜にこだわる、ベジタリアンメニュー、2024年11月29日オープン。Arab News (英語): 東京・十条の Bisan、2011年1月開店、店主シェフ Sudqi Mansour。口コミ (2026年3〜9月、英語): 出町桝形商店街の入口、パレスチナ料理、ファラフェルをピタに、フムス、Sabaneh (ほうれん草と鶏)、オクラとトマトの煮込み、Fasoulia hamra、ナスとオクラの煮込み、ヤギのチーズ、ナッツのパイ、トルコ風アイス、ペアセット、コース、セージティー、ルイボスミントティー、ざくろジュース、本店は十条、料理人はパレスチナ出身とも日本人とも。',
      confidence: 'medium', sources: [TB, AN, R + 'B525825450/', R + 'B526626493/', R + 'B526759768/', R + 'B527565173/', R + 'B527679350/', R + 'B527950957/', R + 'B529580089/', R + 'B530806958/', R + 'B536447729/', R + 'B536573497/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain how to eat the dishes.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区河原町通今出川上る青龍町234',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.030252, 135.769627); GSI matched only the town 青龍町 (centroid 188 m north), so not lot-checked; the point fits the arcade entrance in the reviews; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530806958/', R + 'B527565173/'],
    price_note: 'No menu or prices read.', last_checked: TODAY, items: [
      it('', '', 'Falafel in pita', '', 'Mains', 'no', 'ask', '2026 reviews.', 'falafel'),
      it('', '', 'Hummus', '', 'Mezze', 'ask', 'ask', 'June 2026 review.', 'hummus'),
    ] }, {
    cuisine: 'パレスチナの家庭料理 (2026年の口コミ): 野菜、ソース、ピクルスとピタに詰めるファラフェル、フムス、Sabaneh (ほうれん草と鶏)、ご飯とオクラとトマトの煮込み、スープ付きの Fasoulia hamra、ナスとオクラの煮込み、ヤギのチーズ、温かいデザート、ナッツのパイ、トルコ風アイス。お得なペアセットと色々試せるコース。セージティー、ルイボスミントティー、アラビアのお茶、ざくろジュース。ワイン (食べログ)',
    neighborhood: '出町桝形商店街。出町柳駅から徒歩5分',
    gf_detail: '要確認。ファラフェル、フムス、煮込みもあるが、サンドはピタで、デザートにナッツのパイ (2026年の口コミ)。',
    vegan_detail: '要確認。食べログにベジタリアンメニューとあり、ファラフェル、フムス、オクラとトマトの煮込みのほか、鶏料理やヤギのチーズもある (食べログ、2026年の口コミ)。',
    notes: '[パレスチナ料理・出町桝形商店街] 出町の商店街の入口にある、珍しいパレスチナ料理の店。東京の Bisan の京都店。ピタのファラフェル、フムス、ほうれん草と鶏の Sabaneh、オクラの煮込みにセージティーやざくろジュース。2千〜3千円ほど。夜は金〜日。火曜休み。',
  });
}

// ================================================================ ごはん処 田辺宗
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26008361/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.tanabeso.jp/aoisho/'; const TI = 'https://tabiiro.jp/gourmet/s/303507-kyoto-shunsaidining_aoisho/';
  const D = day(['11:30', '15:00'], ['17:00', '19:00']);
  put({
    id: 'kyoto_gohandokoro_tanabeso', name: 'ごはん処 田辺宗 (Gohan Dokoro Tanabe So)', category: 'OMNI',
    lat: 35.030635, lng: 135.769546, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pickles, rice and grilled fish, but miso, soy and nama-fu (wheat gluten) feature in the sets (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; pickle sets with tofu and miso could suit, but dashi is not described (Tabelog; 2025–26 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:30); dinner 17:00–19:00 (last order 18:00); closed Wednesday (Tabelog). Tabiiro (undated) gives 11:30–19:00, open daily. Bookings taken; private room for 8; lunch hire for 7+ (Tabelog). Check in at the first-floor pickle shop, then go up to the second-floor dining room (March 2026 review). Cards (VISA, Master, JCB, AMEX, Diners) and e-money (Tabelog). 46 seats incl. a 10-seat private room; sunken seating; non-smoking; kids\' menu; 2 h parking tickets for 5 partner car parks (Tabelog). By the Aoi-bashi-nishizume bus stop, 5 min from Demachiyanagi Stn (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Demachi Masugata, west of the Aoi Bridge — 5 min from Demachiyanagi Stn',
    cuisine: 'Kyoto set meals from a pickle and miso house (Tabiiro; 2025–26 reviews): Kyoto pickle sushi with nama-fu gozen (limited), assorted Kyoto pickle gozen with tofu and several misos, Saikyo-miso-grilled silver cod or mackerel gozen with rice, miso soup, tofu and a long plate of pickles, Iberico pork grilled on a magnolia leaf with leaf miso, white-miso chazuke; rice refills; pickle and miso bento and a special Tanabe So kaiseki (Tabiiro); sake (Tabelog)',
    website: SITE, gmaps: gm('ごはん処 田辺宗 出町'), menu_url: TB + 'dtlmenu/',
    notes: "[Pickle-house set meals · Demachi] The upstairs dining room of 田辺宗, a Kyoto pickle and miso maker founded in 1875, in a converted miso storehouse: Kyoto pickle sushi, long plates of house pickles with tofu and miso, and Saikyo-grilled fish with free rice refills. About ¥2,000–3,000. Pickles to buy downstairs. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Restaurant of the pickle and miso maker 田辺宗 (no person named)'], origin: null,
      background: 'Run directly by 田辺宗, a Kyoto pickle and miso house founded in 1875 (Meiji 8), in a renovated miso storehouse (Tabiiro). Formerly named 葵匠 (Tabelog). The pickle shop is on the first floor (2025–26 reviews).',
      philosophy: null, specialty: 'Kyoto pickle sushi; Saikyo-yaki.',
      anecdotes: [
        { text: 'Two friends in April 2026 just made the limited pickle-sushi and nama-fu gozen, bought pickles downstairs, then walked to Kawai and Shimogamo shrines under the Kamo River cherry blossoms.', source: R + 'B484740099/' },
        { text: 'In March 2026 the first taste of the Saikyo-grilled silver cod made a pair exchange surprised looks.', source: R + 'B524158330/' },
        { text: 'A late, unbooked traveller in September 2026 was seated at once for a Saikyo-yaki gozen of mackerel.', source: R + 'B535981893/' },
      ],
      japanese_sources_summary: '食べログ: ごはん処 田辺宗 (旧店名 葵匠)、日本料理、上京区出町通桝形上ル青龍町218 2F、出町柳駅から徒歩5分、市バス Aoi-bashi-nishizume 前、昼 11:30〜15:00 (L.O. 14:30)、夜 17:00〜19:00 (L.O. 18:00)、水曜休み、予約可、カード・電子マネー可、46席 (個室10席)、掘りごたつ、禁煙、お子様メニュー、提携駐車場5か所 (2時間券)、野菜・魚にこだわる、ベジタリアンメニュー。旅色: 明治8年創業の漬物と味噌の老舗「田辺宗」直営、味噌蔵を改装、名物「京漬物寿司」、漬物・味噌弁当、特選 田辺宗会席、11:30〜19:00、無休。口コミ (2025年6月〜2026年9月、英語): 1階の漬物店で受付して2階へ、京漬物寿司と生麩の御膳、京漬物盛り合わせ御膳、銀だらや鯖の西京焼き御膳、朴葉焼きのイベリコ豚、白味噌の茶漬け、ご飯のおかわり、塩辛いという声も。',
      confidence: 'medium', sources: [TB, SITE, TI, R + 'B484740099/', R + 'B509164198/', R + 'B515563104/', R + 'B524158330/', R + 'B527292468/', R + 'B528154015/', R + 'B529559483/', R + 'B529829033/', R + 'B530089772/', R + 'B535981893/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Check in at the shop downstairs; table cards explain the dishes.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区出町通桝形上ル青龍町218 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.030635, 135.769546); GSI matched only the town 青龍町 (centroid 146 m north), so not lot-checked; by the Aoi-bashi-nishizume bus stop as Tabelog says; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B484740099/', R + 'B535981893/'],
    price_note: 'No prices read.', last_checked: TODAY, items: [
      it('', '', 'Kyoto pickle sushi and nama-fu gozen (limited)', '', 'Lunch', 'no', 'ask', 'November 2025 and April 2026 reviews.', 'tsukemono_zushi'),
      it('', '', 'Saikyo-yaki gozen', '', 'Lunch', 'ask', 'no', 'March and September 2026 reviews.', 'saikyoyaki'),
    ] }, {
    cuisine: '漬物と味噌の老舗の京の御膳 (旅色、2025〜26年の口コミ): 数量限定の京漬物寿司と生麩の御膳、豆腐と数種の味噌の京漬物盛り合わせ御膳、ご飯・味噌汁・豆腐・長皿の漬物の銀だらや鯖の西京焼き御膳、朴葉味噌で焼くイベリコ豚、白味噌の茶漬け。ご飯のおかわり。漬物・味噌弁当、特選 田辺宗会席 (旅色)。日本酒 (食べログ)',
    neighborhood: '出町桝形。出町柳駅から徒歩5分',
    gf_detail: '要確認。漬物、ご飯、焼き魚だが、味噌、醤油、生麩 (小麦) を使う (2025〜26年の口コミ)。',
    vegan_detail: '要確認。食べログにベジタリアンメニューとあり、豆腐と味噌の漬物の御膳もあるが、だしは不明 (食べログ、2025〜26年の口コミ)。',
    notes: '[漬物屋の御膳・出町] 明治8年創業の京の漬物と味噌の「田辺宗」の2階の食事処。味噌蔵を改装した店で、京漬物寿司、豆腐と味噌を添えた長皿の自家製漬物、ご飯おかわりの西京焼き。2千〜3千円ほど。1階で漬物も買える。水曜休み。',
  });
}

// ================================================================ 京都ラーメン 麺屋愛都 98号店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26030015/'; const R = TB + 'dtlrvwlst/';
  const W = day(['10:30', '23:00']);
  put({
    id: 'kyoto_menya_aito_imadegawa', name: '京都ラーメン 麺屋愛都 98号店 (Kyoto Ramen Menya Aito, Imadegawa)', category: 'OMNI',
    lat: 35.029919, lng: 135.75921, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat noodles; fried chicken (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone and seafood broth, chashu, kara-age (2026 reviews).',
    hours_raw: 'Tue–Sat 10:30–23:00; Sun 10:30–22:00; closed Monday; hours may change (Tabelog). No bookings; ticket machine (Tabelog; June and October 2026 reviews). Cash only — no cards, e-money or QR (Tabelog). 6 counter seats plus tables for 2, 4 and 6; non-smoking; no parking (Tabelog; October 2026 review). Free spicy bean sprouts to start; unlimited white rice with the sets (June 2026 reviews). A ramen shop that four 2026 reviewers describe as full of Doshisha University students. On Karasuma-dori, a minute from Imadegawa Stn (Tabelog; October 2026 review).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: day(['10:30', '22:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Imadegawa, by Doshisha University — 1 min from Imadegawa Stn',
    cuisine: 'Ramen with homemade medium-thick noodles in a creamy pork-bone and seafood broth (2026 reviews): Aito ramen ¥850, Aito ajitama ramen ¥970, chashu ramen ¥1,150, a clear-broth ramen; ramen with rice and two pieces of kara-age set ¥1,250; grilled chashu; free spicy bean sprouts (2026 reviews)',
    website: null, gmaps: gm('麺屋愛都 今出川'), menu_url: null,
    notes: "[Ramen · Imadegawa] A busy student ramen shop by Doshisha University: creamy pork-bone and seafood ramen on homemade noodles from ¥850, a clear-broth option, and a ramen, kara-age and bottomless-rice set for ¥1,250. Ticket machine; cash only; open till 23:00; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 13 December 2017 (Tabelog). The shop calls itself "98号店"; no other 愛都 shop was found.',
      philosophy: null, specialty: 'Aito ramen.',
      anecdotes: [
        { text: 'Working late in June 2026, a regular stranded for dinner pressed the button for the creamy tonkotsu broth and called the shop a rescue.', source: R + 'B420169906/' },
        { text: 'A June 2026 diner arriving at 22:00 had ramen, kara-age and two bowls of free rice.', source: R + 'B530483135/' },
        { text: 'A Doshisha regular between classes in June 2026 liked the free spicy bean sprouts as a palate cleanser.', source: R + 'B531835723/' },
      ],
      japanese_sources_summary: '食べログ: 京都ラーメン 麺屋愛都 98号店 (今出川店)、ラーメン、上京区御所八幡町115-13、今出川駅から17m、火〜土 10:30〜23:00、日 10:30〜22:00、月曜休み、予約不可、カード・電子マネー・QR 不可、禁煙、2017年12月13日オープン。口コミ (2026年1〜10月、英語): Karasuma 通沿い、券売機、自家製の中太ストレート麺、クリーミーな豚骨と魚介のスープ、愛都ラーメン850円、愛都味玉ラーメン970円、チャーシュー麺1,150円、清湯のラーメン、ラーメンとご飯と唐揚げ2個のセット1,250円、ご飯おかわり自由、無料の辛いもやし、カウンター6席とテーブル、駐車場なし、Doshisha 大学の学生が多い。',
      confidence: 'medium', sources: [TB, R + 'B420169906/', R + 'B527288184/', R + 'B530483135/', R + 'B531835723/', R + 'B532318947/', R + 'B532470343/', R + 'B532847515/', R + 'B535074474/', R + 'B537571923/', R + 'B538372146/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区御所八幡町115-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.029919, 135.759210); cross-checked: GSI 京都府京都市上京区御所八幡町115番地 (lot) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537571923/', R + 'B535074474/', R + 'B530483135/'],
    price_note: 'Prices from June–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Aito ramen', '¥850', 'Ramen', 'no', 'no', 'October 2026 review.', 'aito_ramen'),
      it('', '', 'Ramen, rice and kara-age (2) set', '¥1,250', 'Sets', 'no', 'no', 'June 2026 review.', 'karaage_set'),
    ] }, {
    cuisine: '自家製の中太麺とクリーミーな豚骨魚介のスープのラーメン (2026年の口コミ): 愛都ラーメン850円、愛都味玉ラーメン970円、チャーシュー麺1,150円、清湯のラーメン。ラーメン、ご飯、唐揚げ2個のセット1,250円。炙りチャーシュー、無料の辛いもやし (2026年の口コミ)',
    neighborhood: '今出川、Doshisha 大学の前。今出川駅から徒歩1分',
    gf_detail: 'グルテンフリー不可。自家製の小麦の麺、唐揚げ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚骨と魚介のスープ、チャーシュー、唐揚げ (2026年の口コミ)。',
    notes: '[ラーメン・今出川] Doshisha 大学前の学生でにぎわうラーメン店。自家製麺にクリーミーな豚骨魚介のスープで850円から、清湯もある。ラーメン、唐揚げ、ご飯おかわり自由のセットは1,250円。券売機。現金のみ。23時まで。月曜休み。',
  });
}

save();
