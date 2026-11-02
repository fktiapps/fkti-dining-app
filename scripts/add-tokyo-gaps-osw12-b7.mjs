// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 7.
//   + cafe brasserie ludique (bistro and standing wine bar, sister of Ludique in Asakusa; opened 2023)
//   + 成都館 Seito Kan (8-seat Chengdu/Sichuan restaurant, second shop of a Ueno Sichuan restaurant)
//   + 稲荷町髙はし Inaricho Katahashi (Japanese kaiseki and ¥2,000 lunches; opened 2012; sister in Kanda)
//   + 上野500バル Ueno 500 Bar (basement pizza bar by Ameyoko, ¥500 stone-oven pizzas; opened 2014)
// Skipped (see skip()): しゃぶ菜 上野 13167796 (national chain), ASIAN RESTAURANT & BAR HALKA 13266847 (chain).
// Chain check. ludique: the Tabelog listing calls it a sister restaurant of "Rudique" in Asakusa, which is in data as
//   tokyo_ludique (neighborhood "台東区浅草（観音裏）"); two shops, kept. Seito Kan: second shop of a Sichuan restaurant by Ueno
//   Stn (listing; reviews); two shops, kept. Katahashi: listing names a Kanda shop (phone 03-5839-2863); a September 2026 review
//   calls it a branch of "Iwamotocho Katahashi"; two shops, kept. Ueno 500 Bar: one shop found.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address. Katahashi shares 東上野5-17-8 with Shokudo Bond
//   (tokyo_shokudo_bond_higashiueno, address_ja "東京都台東区東上野5-17-8 1F"); the two pins are 30 m apart, so no offset.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13167796', 'national chain: しゃぶ菜 (Shabu Sai) shabu-shabu buffet chain; this is the 上野の森さくらテラス branch.');
skip('13266847', 'chain: ASIAN RESTAURANT & BAR HALKA — the Tabelog search results show other HALKA shops in Urawa (門前通り店, Tabelog 11055657, closed; 浦和県庁前店); not opened beyond the result titles.');

// ================================================================ cafe brasserie ludique
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13284389/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '15:00'], ['17:00', '23:00']); const S = day(['15:00', '23:00']);
  put({
    id: 'tokyo_cafe_brasserie_ludique_higashiueno', name: 'cafe brasserie ludique', category: 'OMNI',
    lat: 35.713409, lng: 139.780493, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Roast pork, steamed clams, the truffle omelette and salads are on the menu, but nothing is described as gluten-free; lunch comes with bread, quiche and pasta, and dinner has pizza, gratin, arancini and pasta.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a French bistro of duck, venison and chicken hamburg steaks, roast pork, pâté, liver mousse and egg dishes; the bean salad is mayonnaise-dressed.',
    hours_raw: 'Tue–Fri 11:30–15:00 (last order 14:00) and 17:00–23:00 (food last order 21:30); Sat 15:00–23:00; closed Sun, Mon and holidays (Tabelog). The same listing also says "From June, we will officially be open for dinner every day" — check. Lunch not bookable; dinner reservations taken. 1F standing counter for 5, 2F tables for 20. No table charge. Non-smoking. Cards and PayPay. Children welcome. Takeout at dinner. Opened 16 May 2023 (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Ueno 4-chōme — 5 min from JR Ueno Stn and Inaricho Stn (Ginza Line)',
    cuisine: 'French home-style cooking and wine, with a duck bistro hamburg steak as the main dish (Tabelog) · weekday lunch about ¥1,200 (e.g. roast pork with onion charcoal sauce, Fridays) with free rice, salad, slaw, omelette, quiche and bread from the 1F counter; mini dessert ¥300 (October 2026) · dinner courses about ¥4,000 and ¥6,000 with all-you-can-drink: appetizer platter (pâté, ratatouille, liver mousse, ham, white-bean salad), truffle omelette, wine-steamed clams, roast pork or venison or chicken hamburg steak, creamy meat pasta (June–July 2026) · à la carte escargot, arancini, gratin, pizza, truffle-mayo green beans · wine by the glass and bottle',
    website: null, gmaps: gm('cafe brasserie ludique 東上野4-15-7'), menu_url: TB + 'dtlmenu/',
    notes: "[Bistro · Higashi-Ueno, the casual sister of Asakusa's Ludique] A two-floor bistro and wine bar between Ueno and Inaricho, opened in 2023 as the casual sister of the French restaurant Ludique behind Asakusa Kannon; the master in charge comes from that kitchen (2025–2026 reviews). Downstairs is a five-person standing counter for a glass of wine; upstairs, five tables for dinner. The signature is a duck bistro hamburg steak, and courses with all-you-can-drink (about ¥4,000–6,000) bring pâté, liver mousse, a truffle omelette, wine-steamed clams and roast pork. Weekday lunch is a bargain: about ¥1,200 for a main such as tender roast pork, with free rice, salad, quiche and bread. Diners praise the food as authentic; with one cook, dishes can be slow (June and October 2026), and an October 2026 couple found the upstairs cramped. Closed Sundays and Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 May 2023 (Tabelog)', background: 'Per Tabelog\'s listing (corporate member), opened as a sister restaurant of the French restaurant "Rudique" (Ludique) in Asakusa — in data as tokyo_ludique, neighborhood "台東区浅草（観音裏）". Reviews in November 2025 and May 2026 describe a master behind the counter who comes from the Asakusa restaurant; a June 2026 group saw only one person cooking. No source names the master.', philosophy: null, specialty: 'Duck bistro hamburg steak; French home-style dishes.',
      anecdotes: [
        { text: '"The master has a solid background, hailing from a prestigious establishment in Asakusa… every dish served before us was astonishingly delicious." — May 2026.', source: R + 'B516933682/' },
        { text: '"It seemed there was only one person cooking. The Hamburg steak was not just reheated but grilled individually, which resulted in a slower serving speed." — June 2026, party of 12, ¥4,000 course.', source: R + 'B530021296/' },
        { text: '"On the first floor, you can help yourself to as much rice and salad as you like. I heard that you can have up to two quiches." — October 2026, weekday lunch, roast pork ¥1,200.', source: R + 'B536633102/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): cafe brasserie ludique (カフェ ブラッスリー ルディック)、東上野4-15-7、上野駅・稲荷町駅から徒歩5分、火〜金11:30〜15:00 (L.O.14:00)・17:00〜23:00、土15:00〜23:00、日月祝休み、6月から夜は毎日営業という記載も、ランチは予約不可、1Fは立ち飲みカウンター5席、2Fはテーブル20席、チャージなし、禁煙、カード・PayPay 可、子ども可、夜はテイクアウト、2023年5月16日オープン、浅草の隠れ家フレンチ「ルディック」の姉妹店、看板は鴨のビストロハンバーグ。口コミ(2024年5月〜2026年10月): 浅草の店出身のマスター、前菜の盛り合わせ (パテ、ラタトゥイユ、レバームース、ハム、白いんげんのサラダ)、トリュフのオムレツ、あさりの白ワイン蒸し、ローストポーク、鹿肉や鶏のハンバーグ、クリームのミートパスタ、エスカルゴ、アランチーニ、グラタン、ピザ、4,000円と6,000円の飲み放題付きコース、料理人は一人で提供が遅い、平日ランチのローストポーク1,200円 (ご飯・サラダ・キッシュなどおかわり自由)、ミニデザート300円、2階は狭く料理が遅かったという声 (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B486227472/', R + 'B516933682/', R + 'B527228862/', R + 'B530021296/', R + 'B530262515/', R + 'B532397266/', R + 'B532768804/', R + 'B536633102/', R + 'B538302674/', R + 'B538323374/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing counter downstairs, tables upstairs; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区東上野4-15-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野四丁目15番7号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536633102/', R + 'B538302674/', R + 'B530021296/'],
    price_note: 'Prices from June–October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Weekday lunch: roast pork with onion charcoal sauce, free rice, salad, quiche and bread', '¥1,200', 'Lunch', 'no', 'no', 'October 2026 (Fridays).', 'lunch_pork'),
      it('', '', 'Lunch mini dessert (pumpkin cheesecake or pudding)', '¥300', 'Lunch', 'ask', 'no', 'October 2026.', 'mini_dessert'),
      it('', '', 'Course with all-you-can-drink: appetizer platter and venison hamburg steak', '¥4,000', 'Course', 'no', 'no', 'June 2026; a ¥6,000 course is also offered.', 'course_4000'),
    ] }, {
    cuisine: 'フランスの家庭料理とワイン、看板は鴨のビストロハンバーグ (食べログ)・平日ランチは約1,200円 (金曜のローストポークのオニオン炭火ソースなど)、1階のカウンターでご飯、サラダ、コールスロー、オムレツ、キッシュ、パンをおかわり自由、ミニデザート300円 (2026年10月)・飲み放題付きの夜のコース約4,000円・6,000円: 前菜の盛り合わせ (パテ、ラタトゥイユ、レバームース、ハム、白いんげんのサラダ)、トリュフのオムレツ、あさりの白ワイン蒸し、ローストポークや鹿肉・鶏のハンバーグ、クリームのミートパスタ (2026年6月〜7月)・単品にエスカルゴ、アランチーニ、グラタン、ピザ、いんげんのトリュフマヨ・グラスとボトルのワイン',
    neighborhood: '東上野四丁目。JR上野駅と銀座線稲荷町駅から徒歩5分',
    gf_detail: '要確認。ローストポーク、あさりの白ワイン蒸し、トリュフのオムレツ、サラダはあるが、グルテンフリーの説明はありません。昼はパン、キッシュ、パスタ付き、夜はピザ、グラタン、アランチーニ、パスタもある。',
    vegan_detail: 'ヴィーガンではありません。鴨、鹿、鶏のハンバーグ、ローストポーク、パテ、レバームース、卵料理のビストロで、豆のサラダもマヨネーズ和え。',
    notes: '[ビストロ・東上野、浅草ルディックの気軽な姉妹店] 上野と稲荷町の間にある2階建てのビストロとワインバーで、2023年に浅草観音裏のフレンチ「ルディック」の気軽な姉妹店として開店。店を任されているマスターは浅草の店の出身 (2025〜2026年の口コミ)。1階は5人の立ち飲みカウンターでグラスワインを、2階は5卓のテーブルで夕食を。看板は鴨のビストロハンバーグで、飲み放題付きのコース (約4,000〜6,000円) にはパテ、レバームース、トリュフのオムレツ、あさりの白ワイン蒸し、ローストポーク。平日の昼はお得で、約1,200円でやわらかいローストポークなどの主菜に、ご飯、サラダ、キッシュ、パンがおかわり自由。料理は本格的と好評だが、料理人が一人なので提供が遅いことも (2026年6月・10月)、2026年10月には2階が狭かったという二人連れも。日曜・月曜休み。',
  });
}

// ================================================================ 成都館
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13230888/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_seito_kan_higashiueno', name: '成都館 (Seito Kan)', category: 'OMNI',
    lat: 35.710586, lng: 139.778833, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Sichuan cooking built on sauces such as sweet bean sauce (in the mapo tofu, December 2025), with dumplings and a mao cai pot that includes chikuwa.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: mapo tofu, saliva chicken, spicy chicken, pork liver, seafood and egg stir-fries, and a mao cai pot with sausage, spam and shrimp.',
    hours_raw: 'Mon–Sat 11:00–15:00 (last order 14:30) and 17:00–23:00 (last order 22:30); closed Sundays (Tabelog). Reservations taken. 8 seats at three small tables; queues at lunch (July 2026). Non-smoking all day. Cards (contactless too), e-money and QR. School-age children welcome. Takeout and frozen vacuum-packed dishes to take home (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Ueno 3-chōme, 長谷川ビル 1F — 3 min from Inaricho Stn (Ginza Line)',
    cuisine: 'Chengdu and Sichuan dishes and creative Chinese cooking (Tabelog) · weekly lunch sets ¥900–980, e.g. seafood and egg stir-fry ¥900, Chengdu-style spicy pork liver ¥980, with rice refills (January 2026) · mao cai one-person spicy pot ¥1,100 (August 2026) · mapo tofu, saliva chicken (yodare-dori), Sichuan spicy chicken, bang bang chicken, green-pepper beef, dumplings (2025–2026 reviews) · all-you-can-eat-and-drink of the whole menu ¥4,480; 2-hour all-you-can-drink ¥2,300 (Tabelog)',
    website: null, gmaps: gm('成都館 東上野3-14-4'), menu_url: TB + 'dtlmenu/',
    notes: "[Sichuan · Inaricho, a tiny Chengdu kitchen] An eight-seat Sichuan restaurant near Inaricho Station, the second shop of a popular Sichuan restaurant by Ueno Station, cooking Chengdu dishes you won't find at the original (Tabelog). Regulars come back for the saliva chicken, heavy with garlic, sweet and spicy, and for a mapo tofu with real Sichuan-pepper numbness; there is also a fiery mao cai pot (¥1,100) and a changing weekly lunch of ¥900–980 sets with rice refills, like Chengdu-style spicy pork liver or a gentle seafood-and-egg stir-fry. At night the whole menu can be ordered as all-you-can-eat-and-drink (¥4,480). Seats are few, so expect a queue at lunch. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per Tabelog\'s listing, the second shop of a popular Sichuan restaurant in Ueno; the remarks call it an annex of that restaurant (named in the English listing and reviews variously as "Seisei Hanten", "Harebeihanten" and "Haruharu Hanten", by the Iriya exit of Ueno Station). No source gives the original shop\'s name in Japanese, the chef\'s name, or an opening date.', philosophy: null, specialty: 'Saliva chicken; mapo tofu; Chengdu dishes.',
      anecdotes: [
        { text: '"The Yodare Chicken here is definitely the best!… It\'s packed with garlic, spicy yet sweet, and the umami flavor is incredible." — April 2026.', source: R + 'B510732361/' },
        { text: '"Pork Liver Spicy Stir-Fry Set Meal - JPY 980. This dish is not your typical liver and garlic stir-fry; it features unique spiciness and ingredients. Apparently, this is how it\'s traditionally enjoyed in Chengdu." — January 2026.', source: R + 'B524369300/' },
        { text: '"Mao Cai can be simply described as a Sichuan-style hot pot for one person… Even for someone like me who can handle spice, it was surprisingly spicy." — August 2026, ¥1,100.', source: R + 'B534748071/' },
      ],
      japanese_sources_summary: '食べログ: 成都館、東上野3-14-4 長谷川ビル 1F、稲荷町駅から徒歩3分、月〜土11:00〜15:00 (L.O.14:30)・17:00〜23:00 (L.O.22:30)、日曜休み、8席、終日禁煙、カード・電子マネー・QR可、小学生以上の子ども可、テイクアウト、真空冷凍の持ち帰り商品、上野の人気四川料理店の2号店で本店にない成都の料理と創作中華、週替わりランチ、全メニュー食べ飲み放題4,480円、2時間飲み放題2,300円。口コミ(2025年10月〜2026年10月): よだれ鶏が名物 (にんにく、甘辛、うまみ)、四川の辛い鶏、麻婆豆腐 (甜麺醤と豆鼓、花椒、ご飯おかわり)、海鮮と卵の炒め物の定食900円、成都風の豚レバーの辛い炒め物980円、四川風のバンバンジー、青椒肉絲、餃子、冒菜1,100円 (ソーセージ、海老、豆腐、しめじ、春雨、スパム、じゃがいも、ちくわ、きくらげ)、昼は行列、テーブルは3つで最大8人。',
      confidence: 'medium', sources: [TB, R + 'B495150508/', R + 'B510732361/', R + 'B515846151/', R + 'B518328012/', R + 'B520798101/', R + 'B522529945/', R + 'B524369300/', R + 'B525454868/', R + 'B532597524/', R + 'B534748071/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tiny room; queue at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区東上野3-14-4 長谷川ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野三丁目14番4号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B520798101/', R + 'B524369300/', R + 'B534748071/', TB],
    price_note: 'Lunch prices from January–August 2026 reviews (tax included); all-you-can-eat price from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Seafood and egg stir-fry set meal (lunch)', '¥900', 'Lunch', 'ask', 'no', 'January 2026.', 'seafood_egg'),
      it('', '', 'Chengdu-style spicy pork liver stir-fry set meal (weekly lunch)', '¥980', 'Lunch', 'no', 'no', 'January 2026.', 'liver'),
      it('', '', 'Mao cai (one-person Sichuan spicy pot)', '¥1,100', 'Lunch', 'no', 'no', 'August 2026.', 'mao_cai'),
      it('', '', 'Saliva chicken (yodare-dori)', '', 'Dishes', 'no', 'no', '2026 reviews.', 'yodare'),
      it('', '', 'Mapo tofu', '', 'Dishes', 'no', 'no', 'December 2025 and July 2026.', 'mapo'),
      it('', '', 'All-you-can-eat-and-drink of the whole menu', '¥4,480', 'Course', 'no', 'no', 'Tabelog.', 'tabenomi'),
    ] }, {
    cuisine: '成都・四川の料理と創作中華 (食べログ)・週替わりのランチ定食900〜980円、たとえば海鮮と卵の炒め物900円、成都風の豚レバーの辛い炒め物980円、ご飯のおかわり可 (2026年1月)・1人用の四川の辛い鍋、冒菜1,100円 (2026年8月)・麻婆豆腐、よだれ鶏、四川の辛い鶏、バンバンジー、青椒肉絲、餃子 (2025〜2026年の口コミ)・全メニュー食べ飲み放題4,480円、2時間飲み放題2,300円 (食べログ)',
    neighborhood: '東上野三丁目、長谷川ビル 1F。銀座線稲荷町駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。甜麺醤など (麻婆豆腐、2025年12月) のたれを使う四川料理で、餃子や、ちくわの入る冒菜もある。',
    vegan_detail: 'ヴィーガンではありません。麻婆豆腐、よだれ鶏、辛い鶏、豚レバー、海鮮と卵の炒め物、ソーセージやスパムや海老の入る冒菜。',
    notes: '[四川・稲荷町、小さな成都料理の店] 稲荷町駅近くの8席の四川料理店で、上野駅そばの人気四川料理店の2号店。本店にない成都の料理を出す (食べログ)。常連のお目当ては、にんにくたっぷりで甘辛いよだれ鶏と、花椒のしびれる麻婆豆腐。激辛の冒菜 (1,100円) や、ご飯おかわりの900〜980円の週替わりランチ (成都風の豚レバーの辛い炒め物、やさしい海鮮と卵の炒め物など) も。夜は全メニューの食べ飲み放題 (4,480円)。席が少なく昼は行列に。日曜休み。',
  });
}

// ================================================================ 稲荷町髙はし
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13138604/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_inaricho_katahashi', name: '稲荷町髙はし (Inaricho Katahashi)', category: 'OMNI',
    lat: 35.714016, lng: 139.782828, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, grilled fish and simmered dishes are on the menu, but nothing is described as gluten-free; the lunch donburi is soy-marinated and some sets are fried (horse mackerel, chicken nanban).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Japanese fish-centred kitchen; even the vegetable side dishes are steeped in dashi, and how the red miso soup is made is not stated.',
    hours_raw: 'Mon–Sat 11:30–14:00 (last order 13:30) and 18:00–22:00 (last order 21:00); closed Sundays and holidays (Tabelog). Reservations taken, also online; dinner is mainly kaiseki courses, with à la carte possible. 10% service charge. 19 seats: 6 at the counter, 14 at tables (the listing\'s own figures), with semi-private rooms. Non-smoking; smoking outside. Cards (Tabelog says no e-money or QR; a September 2026 lunch guest paid by PayPay). Children may be asked to stay away during business entertaining. Meals after memorial services by arrangement. Opened 20 March 2012 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Ueno 5-chōme, ground floor of 中銀第2東上野マンシオン on Kiyosubashi Street, next to a Maruetsu supermarket — 3 min from Inaricho Stn; 8 min from JR Ueno Stn Iriya exit',
    cuisine: 'Japanese kaiseki from market produce chosen every morning, many direct from growers (Tabelog) · October kaiseki courses ¥15,000 and ¥17,500 (9 dishes) and ¥22,000 (10 dishes), with matsutake, returning bonito, new ginkgo nuts and autumn eggplant; New Year osechi in two tiers ¥41,800 (Tabelog, tax included) · lunch under ¥2,000, changing monthly: marinated fish donburi with sesame soy and egg yolk ¥1,900, chicken nanban ¥1,800, miso-simmered mackerel with sashimi ¥1,800 (August 2026); fried horse mackerel with sashimi ¥1,800 (September 2026); cold soba with a fresh-fish Ryukyu donburi ¥2,000 (September 2026) — each with small dishes, pickles, red miso soup and a bite of dessert · sake, shochu and wine',
    website: null, gmaps: gm('稲荷町髙はし 東上野5-17-8'), menu_url: TB + 'dtlmenu/',
    notes: "[Japanese · Inaricho, kaiseki dinners and a careful ¥2,000 lunch] A quiet Japanese restaurant behind a black lattice front near Inaricho, open since 2012, with a six-seat counter facing the open kitchen and semi-private tables used for business dinners, anniversaries and meals after memorial services. Dinner is mostly seasonal kaiseki from ¥15,000 to ¥22,000 (October: matsutake, returning bonito, ginkgo nuts, conger-eel rice). Lunch is the local secret: under ¥2,000 for a marinated-fish donburi sliced to order, fried horse mackerel with sashimi or miso-simmered mackerel, always with small dishes, nukazuke pickles, red miso soup and a little dessert. Diners in 2025–2026 praise the craftsmanship and a friendly owner; one October 2026 couple found the sake pushed the bill to about ¥46,000. A sister shop is in Kanda.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 March 2012 (Tabelog)', background: 'A corporate-member Tabelog listing; it points to a Kanda shop (phone 03-5839-2863), written in the English translation once as "Kanda Takahashi" and once as "Kanda Katahashi"; a September 2026 review calls this a branch of "Iwamotocho Katahashi". Reviews describe a friendly owner and chef. No source names the owner or chef.', philosophy: 'Seasonal ingredients chosen at the market every morning, cooked to bring out their own flavours (Tabelog).', specialty: 'Seasonal kaiseki; marinated-fish donburi lunch.',
      anecdotes: [
        { text: '"The cooking was done right in front of me, with the chef cutting the sashimi from the marinated block for each order." — August 2026, sesame-soy marinated fish donburi ¥1,900.', source: R + 'B533011371/' },
        { text: '"I made a reservation for the Nagatsuki Kaiseki at JPY 22,000. The meal features a parade of luxurious ingredients such as matsutake mushrooms, sanma (Pacific saury), abalone, and Wagyu… The owner is friendly and easy to talk to." — September 2026.', source: R + 'B536301717/' },
        { text: '"For two people, the total came to about JPY 46,000, which felt a bit pricier than I had expected. It seems the special sake was quite expensive." — October 2026, ¥15,000 kaiseki.', source: R + 'B536719847/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 稲荷町髙はし、東上野5-17-8 中銀第2東上野マンシオン 1F 101号、稲荷町駅から徒歩3分、上野駅入谷口から徒歩8分、月〜土11:30〜14:00 (L.O.13:30)・18:00〜22:00 (L.O.21:00)、日祝休み、サービス料10%、19席 (カウンター6、テーブル14)、半個室、禁煙 (店外で喫煙)、カード可 (電子マネー・QRは不可)、接待などのときは子ども連れを遠慮してもらうことも、法事のあとの食事も相談可、2012年3月20日オープン、毎朝市場で選ぶ旬の食材 (生産者直送も多い)、10月の会席15,000円・17,500円 (9品)・22,000円 (10品)、おせち二段重41,800円、Kanda の店 (電話03-5839-2863) もある。口コミ(2025年8月〜2026年10月): 黒い縦格子の外観、かつおとすずきの漬け丼、ランチのグラスビール、焼き魚・刺身・小鉢・赤だし・ご飯、冷たいそばと本日の鮮魚の琉球丼2,000円 (PayPay で支払い)、ごま醤油の漬け丼1,900円・チキン南蛮1,800円・さばの味噌煮と刺身1,800円、アジフライと刺身1,800円、なすの揚げびたし、ぬか漬け、あんこの和菓子、9月の会席22,000円 (松茸、さんま、あわび、和牛)、気さくな店主、会席15,000円で2人約46,000円 (日本酒が高め)。',
      confidence: 'medium', sources: [TB, R + 'B512648438/', R + 'B519223881/', R + 'B522449090/', R + 'B530455891/', R + 'B531828045/', R + 'B533011371/', R + 'B535801044/', R + 'B536301717/', R + 'B536654734/', R + 'B536719847/'] },
    cultural_comfort: { level: 'japanese', note: 'A quiet Japanese restaurant used for business dinners; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区東上野5-17-8 中銀第2東上野マンシオン 1F 101号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing (October 2026 courses and New Year osechi posted); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; same address as Shokudo Bond (tokyo_shokudo_bond_higashiueno, address_ja "東京都台東区東上野5-17-8 1F"), whose pin is 30 m away, so no offset; GSI 東京都台東区東上野五丁目17番8号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B533011371/', R + 'B535801044/'],
    price_note: 'Course prices from the Tabelog listing (tax included; 10% service); lunch prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'October kaiseki course, 9 dishes', '¥15,000', 'Dinner', 'ask', 'no', 'Tabelog; also ¥17,500 (9 dishes) and ¥22,000 (10 dishes).', 'kaiseki_15000'),
      it('', '', 'Lunch: today\'s fish marinated in sesame soy, donburi with egg yolk', '¥1,900', 'Lunch', 'no', 'no', 'August 2026.', 'zuke_don'),
      it('', '', 'Lunch: miso-simmered mackerel with sashimi', '¥1,800', 'Lunch', 'no', 'no', 'August 2026.', 'saba_miso'),
      it('', '', 'Lunch: fried horse mackerel with sashimi', '¥1,800', 'Lunch', 'no', 'no', 'September 2026.', 'aji_fry'),
      it('冷たいそば 本日の鮮魚琉球丼', '', 'Lunch: cold soba with a fresh-fish Ryukyu donburi', '¥2,000', 'Lunch', 'no', 'no', 'September 2026 (limited time).', 'soba_ryukyu'),
    ] }, {
    cuisine: '毎朝市場で選ぶ旬の食材 (生産者直送も多い) の和食の会席 (食べログ)・10月の会席15,000円・17,500円 (9品)、22,000円 (10品)。松茸、戻りがつお、新銀杏、秋なす。おせち二段重41,800円 (食べログ、税込み)・昼は2,000円以下で月替わり: ごま醤油の本日の魚の漬け丼 卵黄のせ1,900円、チキン南蛮1,800円、さばの味噌煮と刺身1,800円 (2026年8月)、アジフライと刺身1,800円 (2026年9月)、冷たいそば 本日の鮮魚琉球丼2,000円 (2026年9月)。どれも小鉢、漬物、赤だし、ひと口の甘味付き・日本酒、焼酎、ワイン',
    neighborhood: '東上野五丁目、Kiyosubashi Street 沿いの中銀第2東上野マンシオンの1階、Maruetsu の隣。稲荷町駅から徒歩3分、JR上野駅入谷口から徒歩8分',
    gf_detail: '要確認。刺身、焼き魚、煮物はあるが、グルテンフリーの説明はありません。昼の丼は醤油の漬けで、揚げ物の定食 (アジフライ、チキン南蛮) もある。',
    vegan_detail: 'ヴィーガンではありません。魚中心の和食で、野菜の小鉢もだしに浸してあり、赤だしの味噌汁も付く。',
    notes: '[和食・稲荷町、会席の夜とていねいな2,000円の昼] 稲荷町近くの黒い格子の外観の静かな和食店で、2012年から。オープンキッチンに面した6席のカウンターと、接待や記念日、法事のあとの食事に使われる半個室のテーブル。夜は主に15,000〜22,000円の旬の会席 (10月は松茸、戻りがつお、銀杏、穴子ご飯)。昼は知る人ぞ知るお値打ちで、2,000円以下で、注文ごとに切る魚の漬け丼、アジフライと刺身、さばの味噌煮などに、小鉢、ぬか漬け、赤だし、小さな甘味が付く。2025〜2026年の口コミでは丁寧な仕事と気さくな店主が好評。2026年10月には日本酒で2人約46,000円になったという声も。Kanda に姉妹店。',
  });
}

// ================================================================ 上野500バル
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13170658/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '02:00']); const E = day(['12:00', '02:00']);
  put({
    id: 'tokyo_ueno_500_bar', name: '上野500バル (Ueno 500 Bar)', category: 'OMNI',
    lat: 35.709879, lng: 139.774370, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a pizza bar built on wheat-crust pizzas, grissini, crackers, quiche and pasta; nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog\'s listing ticks "vegetarian options", but the pizzas named in reviews carry cheese, prosciutto, shirasu or meat, and no vegan dish is named.',
    hours_raw: 'Mon–Fri 17:00–02:00; Sat, Sun and holidays 12:00–02:00; open year-round, closing days irregular (Tabelog). Reservations recommended (full on weekday nights, October 2026); 2-hour limit when busy. Charge ¥350 per person. 42 seats: 8 at the counter, 34 at tables. Smoking allowed. Cards and PayPay; no e-money. English menu. Unisex restrooms (October 2026 review). Opened 19 July 2014 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 4-chōme, ミハシビル B1F, next to the Ameyoko Center Building — look for the yellow sign; 2 min from JR Ueno and Okachimachi Stns',
    cuisine: 'Basement pizza bar with 25 cm stone-oven pizzas at ¥500 each (Tabelog; a September 2026 reviewer paid ¥555 a pizza) and Italian small plates (Tabelog) · pizzas such as Margherita, spicy Mexican, green onion and shirasu, prosciutto and arugula, pesto (2026 reviews) · tapas around ¥500: prosciutto with grissini, ajillo, anchovy potatoes, quiche, tripe stew, cream cheese with crackers, crème brûlée · rare skirt steak · house-aged sangria and 40 wines; sparkling wine bottle ¥3,300 (October 2026) · all-you-can-drink courses ¥4,000 and ¥4,500 (Tabelog) · table charge ¥350',
    website: null, gmaps: gm('上野500バル 上野4-9-15 ミハシビル'), menu_url: TB + 'dtlmenu/',
    notes: "[Pizza bar · Ameyoko, ¥500 pizzas until 2 am] A lively basement bar beside the Ameyoko Center Building, under a yellow sign, serving thin, crisp 25 cm stone-oven pizzas for about ¥500 each (one September 2026 diner paid ¥555) — Margherita, prosciutto and arugula, green onion and shirasu, a spicy Mexican — plus ¥500-ish tapas like ajillo and anchovy potatoes, house sangria and a wall of 40 wines. Open from 5 pm on weekdays and noon at weekends until 2 am, it's a cheap spot for groups and after-parties; diners in September–October 2026 found it packed and recommend booking. Smoking is allowed, and there is a ¥350 table charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 19 July 2014 (Tabelog)', background: 'A corporate-member Tabelog listing; no source names the operator or chef. A September 2026 reviewer compared it to the pizza chain CONA; no link between them is stated.', philosophy: null, specialty: '¥500 stone-oven pizza; tapas.',
      anecdotes: [
        { text: '"The sign boasts pizzas for just JPY 500, which caught my attention. I initially thought it would be cheap and not very tasty. However, I ordered a simple Margherita pizza, and to my surprise, it was delicious!" — September 2026.', source: R + 'B536028507/' },
        { text: '"On the downside, the smoking policy might be a concern for some. The restrooms are unisex." — October 2026, party of eight.', source: R + 'B537532117/' },
        { text: '"The sparkling wine bottle is a great value at JPY 3,300… There are many options for ajillo, but I feel like the portions are a bit small for the price." — October 2026.', source: R + 'B537899158/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 上野500バル、上野4-9-15 ミハシビル B1F、JR上野駅・御徒町駅から徒歩2分、アメ横センタービルの隣、黄色い看板、月〜金17:00〜翌2:00、土日祝12:00〜翌2:00、年中無休 (不定休)、混雑時は2時間制、チャージ1人350円、42席 (カウンター8、テーブル34)、喫煙可、カード・PayPay 可、英語メニュー、2014年7月19日オープン、直径25cmの石窯ピザが全品500円、熟成の自家製サングリア、40種のワイン、レアのハラミステーキ、飲み放題付きコース4,000円・4,500円。口コミ(2025年11月〜2026年10月): スパイシーなメキシカンピザ、生ハム、トリッパ風の煮込み、マルゲリータ (1枚555円という声)、アヒージョ、ねぎとしらすのピザ、生ハムとルッコラ、ジェノベーゼ、クリームチーズとクラッカー、クレームブリュレ、アンチョビポテト、キッシュ、スパークリングのボトル3,300円、予約がおすすめ、喫煙可、男女共用トイレ。',
      confidence: 'medium', sources: [TB, R + 'B517803894/', R + 'B536028507/', R + 'B536047635/', R + 'B536195170/', R + 'B536532589/', R + 'B536800856/', R + 'B537532117/', R + 'B537899158/', R + 'B538111411/', R + 'B538139033/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu; busy, book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野4-9-15 ミハシビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野四丁目9番15号 (go) 1m; next door to Seafood Shijo Happou (tokyo_kaisen_ichiba_happou_ueno, in the Ameyoko Center Building), 14 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536028507/', R + 'B537899158/'],
    price_note: 'Prices from the Tabelog listing and September–October 2026 reviews; table charge ¥350.', last_checked: TODAY, items: [
      it('', '', 'Stone-oven pizza, 25 cm (e.g. Margherita)', '¥500', 'Pizza', 'no', 'ask', 'Tabelog; ¥555 in a September 2026 review.', 'pizza'),
      it('', '', 'Sparkling wine, bottle', '¥3,300', 'Wine', 'ask', 'ask', 'October 2026.', 'sparkling'),
      it('', '', 'Course with 2-hour all-you-can-drink (choice of six pizzas)', '¥4,500', 'Course', 'no', 'no', 'Tabelog; September 2026 review. ¥4,000 course also offered.', 'course_4500'),
    ] }, {
    cuisine: '直径25cmの石窯ピザが1枚500円 (食べログ。2026年9月の口コミでは555円) とイタリアンの小皿の地下のピザバル (食べログ)・マルゲリータ、スパイシーなメキシカン、ねぎとしらす、生ハムとルッコラ、ジェノベーゼなどのピザ (2026年の口コミ)・約500円のタパス: 生ハムとグリッシーニ、アヒージョ、アンチョビポテト、キッシュ、トリッパの煮込み、クリームチーズとクラッカー、クレームブリュレ・レアのハラミステーキ・熟成の自家製サングリアと40種のワイン、スパークリングのボトル3,300円 (2026年10月)・飲み放題付きコース4,000円・4,500円 (食べログ)・チャージ350円',
    neighborhood: '上野四丁目、ミハシビル B1F、アメ横センタービルの隣、黄色い看板が目印。JR上野駅・御徒町駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の生地のピザ、グリッシーニ、クラッカー、キッシュ、パスタが中心で、グルテンフリーの説明はありません。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」の印があるが、口コミに出てくるピザはチーズ、生ハム、しらす、肉をのせたもので、ヴィーガンの料理名は書かれていません。',
    notes: '[ピザバル・アメ横、深夜2時まで500円のピザ] アメ横センタービルの隣、黄色い看板の下の地下にあるにぎやかなバルで、薄くてカリッとした直径25cmの石窯ピザが1枚約500円 (2026年9月には555円だったという人も)。マルゲリータ、生ハムとルッコラ、ねぎとしらす、スパイシーなメキシカンなどに、アヒージョやアンチョビポテトなど約500円のタパス、自家製サングリア、40種のワインの壁。平日は17時、週末は正午から深夜2時まで開き、グループや二次会に安く使える。2026年9月〜10月の口コミでは満席で予約がおすすめとのこと。喫煙可、チャージ350円。',
  });
}

save();
