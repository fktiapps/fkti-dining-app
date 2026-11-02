// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 2.
//   + cafe & stand EL SOL (Spanish-Italian bar in the basement of Osaka Station Front Building No. 2, since 2022)
//   + CC:CARBON COPY (all-day dining, Canopy by Hilton Osaka Umeda 11F, Grand Green Osaka, since 2024)
//   + オーヨドアベニュー Ooyodo Avenue (creative bistro behind Umekita, since 2021)
//   + 肉割烹 友百合 Niku Kappo Tomoyuri (meat kappo counter in Kitashinchi, since 2023; owner-chef 三井秀和)
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-01, after b1): the first four odd ids, 27129149,
//   27144587, 27125083, 27135727.
//   Chain check: EL SOL is the second shop of Spanish Bar El Sol Kitashinchi (Tabelog 27062698, not in data). CC:CARBON COPY
//   is the one all-day restaurant of the Canopy by Hilton Osaka Umeda hotel (official hotel page); not a restaurant chain.
//   Ooyodo Avenue: no other shop found. Tomoyuri has one sister shop, 北新地 焼肉友ゆり, opened 13 October 2026 (tomoyuri.jp).
//   None is in data/osaka.json (grep by id, name and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, save } = openCitySweep('osaka-kita', TODAY, 'osw6-2');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ cafe & stand EL SOL
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27129149/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:30', '22:30']);
  put({
    id: 'osaka_cafe_stand_el_sol_umeda', name: 'cafe & stand EL SOL', category: 'OMNI',
    lat: 34.698934, lng: 135.497954, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu leans on bread, pizza and pasta (baguette, margherita, tomato-sauce pastas), fried dishes (corn croquettes, anchovy potato fries) and paella; ask which tapas and grills are made without flour.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Most dishes hold ham, seafood, pork, chicken, egg or cheese; vegetable plates such as grilled young corn and the pickles on the tapas platter appear in 2026 reviews.',
    hours_raw: 'Tue–Sun and holidays 16:30–22:30, last order 22:00; closed Monday (Tabelog). A September 2026 review lists 18:30–22:30 as of 20 September 2026, while an August 2026 diner had happy hour from 17:00, so check before going. Happy hour on weekdays until 18:15 and weekends and holidays until 17:30: draft beer, highballs and sours ¥198 (August 2026). Drinks half price for women\'s groups on Tuesdays (Tabelog; February 2026) and, per one diner, all drinks half price on a Sunday (November 2025). Reservations recommended; tables for two may be moved to the counter when busy (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money, PayPay, d Barai, Rakuten Pay; small discounts for cash on courses (Tabelog). 18 seats (25 standing), counter and sofa seats, a back room for 7–11 or private hire up to 20; non-smoking; free Wi-Fi; smart casual, no flip-flops, beachwear or gym wear; children only with the back room booked (Tabelog). Opened 15 April 2022 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Osaka Station Front Building No. 2, B1F, at the back of the basement — 1 min from JR Kitashinchi Stn, 5 min from JR Osaka Stn',
    cuisine: 'Spanish and Italian stand bar with tapas, by the Kitashinchi Spanish bar El Sol (Tabelog) · tapas platter ¥693 a portion (pickles, Spanish omelette, broccoli in anchovy garlic), green asparagus with a fried egg and truffle ¥800, margherita ¥1,089, chicken thigh with fresh tomato and basil ¥979, jamón serrano carved from the leg ¥759, squid and clam squid-ink paella (large) ¥2,530 (August 2026) · ajillo, Basque cheesecake (February 2026); water eggplant with prosciutto, corn croquettes, salt pork with white beans, tomato pasta with mussels and shrimp (August 2026); confit gizzards (June 2026) · sparkling wine by the bottle ¥3,960, baguette ¥140 a slice (June 2026); white and red sangria (April 2026) · courses with all-you-can-drink: weekday casual course ¥3,980 (90 min, no cards), ¥5,500 (150 min), Tabelog special ¥6,000 (3 hours) (Tabelog); the 3-hour course cost ¥5,800 in September 2026 with daily tapas, two prosciutto and olives, carpaccio of fish from the central wholesale market, anchovy potato fries, ajillo, pizza, grilled Satsuma Chami pork, paella and dessert',
    website: null, gmaps: gm('cafe & stand EL SOL 大阪駅前第2ビル'), menu_url: null,
    notes: "[Spanish-Italian bar · Umeda, Osaka Station Front Building No. 2 B1F] A small tapas bar tucked into the back of the basement of Osaka Station Front Building No. 2 (one group found it on the building map), the second shop of the Spanish bar El Sol in Kitashinchi. The aim is the chef's own Spanish and Italian cooking at low prices: a tapas platter at ¥693, jamón carved from the leg, ajillo with just the right salt, pizza, pastas and squid-ink paella, in portions small enough for a solo diner to try several. Happy hour pours beer and highballs at ¥198 until 18:15 on weekdays (August 2026), and women's groups drink at half price on Tuesdays. One regular always starts with sparkling wine, poured until it overflows the glass. Counter seats suit one or two; a back room takes groups of seven or more for 3-hour all-you-can-drink courses (¥5,800 in September 2026), and staff set out candles for a birthday cake guests brought. Fills soon after opening; book even at short notice.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; "very considerate", February 2026 review)', 'Chef (unnamed) (Tabelog)'], origin: 'Second shop of Spanish Bar El Sol Kitashinchi (Tabelog listing remarks; August 2026 review).', background: 'Shop text (Tabelog): authentic dishes made by the chef at the most affordable prices, on a base of Spanish and Italian cooking with budget-friendly wines and tapas; private rooms for welcome and farewell parties; private use of the Kitashinchi bar for larger groups. Opened 15 April 2022.', philosophy: 'Authentic dishes at the most affordable prices (Tabelog).', specialty: 'Tapas platter; squid-ink paella; sparkling wine.',
      anecdotes: [
        { text: '"The plate under the champagne glasses was also overflowing with bubbles, which made me so happy" — January 2026, a regular\'s second stop of the night.', source: R + 'B518498062/' },
        { text: '"Every time I visit, there are always many women here, and the owner is very considerate, making it a place where even a woman can come alone!" — February 2026, Ladies\' Day.', source: R + 'B524010687/' },
        { text: '"We were celebrating a birthday and brought our own cake. The staff kindly accommodated our requests, serving the cake and even setting up candles for us." — September 2026, a group of eight on the 3-hour course.', source: R + 'B535903116/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B518498062/', R + 'B524010687/', R + 'B528132281/', R + 'B529030686/', R + 'B529622894/', R + 'B529804746/', R + 'B532917765/', R + 'B534012681/', R + 'B535885366/', R + 'B535903116/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter or table from a tapas and wine menu; book online or by phone (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区梅田1-2-2 大阪駅前第2ビル B1F 43-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区梅田一丁目2番2号 (go) 73m (a large station-front building; the shop is in its basement); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B518498062/', R + 'B534012681/', R + 'B535903116/'],
    price_note: 'A la carte prices from an August 2026 review; sparkling wine and baguette from June 2026; course prices from Tabelog (tax included) and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tapas platter (one portion)', '¥693', 'Tapas', 'ask', 'ask', 'August 2026 review.', 'tapas_platter'),
      it('', '', 'Green asparagus with a fried egg and truffle', '¥800', 'Tapas', 'ask', 'no', 'August 2026 review.', 'asparagus_egg'),
      it('', '', 'Jamón serrano carved from the leg', '¥759', 'Tapas', 'ask', 'no', 'August 2026 review.', 'jamon_serrano'),
      it('', '', 'Chicken thigh with fresh tomato and basil sauce', '¥979', 'Main', 'ask', 'no', 'August 2026 review.', 'chicken_tomato_basil'),
      it('', '', 'Margherita pizza', '¥1,089', 'Pizza', 'no', 'no', 'August 2026 review.', 'margherita'),
      it('', '', 'Squid and clam squid-ink paella (large)', '¥2,530', 'Paella', 'ask', 'no', 'August 2026 review.', 'squid_ink_paella'),
      it('', '', 'Sparkling wine (bottle)', '¥3,960', 'Drinks', '', '', 'June 2026 review.', 'sparkling_bottle'),
      it('', '', 'Happy-hour draft beer, highball or sour', '¥198', 'Drinks', '', '', 'August 2026 review; weekdays until 18:15, weekends and holidays until 17:30.', 'happy_hour'),
      it('', '', 'Course with 3-hour all-you-can-drink (Tabelog special)', '¥5,800', 'Course', 'no', 'no', 'September 2026 reviews; ¥6,000 on Tabelog.', 'course_3h'),
    ] }, {
    cuisine: 'スペインとイタリアのスタンドバー、タパス。北新地のスペインバル El Sol の店 (食べログ)・タパスの盛り合わせ1人前693円 (ピクルス、スペインオムレツ、ブロッコリーのアンチョビガーリック)、グリーンアスパラと目玉焼き、トリュフ風味800円、マルゲリータ1,089円、鶏もものフレッシュトマトとバジルのソース979円、原木から切るハモン・セラーノ759円、イカとアサリのイカ墨パエリア (大) 2,530円 (2026年8月)・アヒージョ、バスクチーズケーキ (2026年2月)、水なすと生ハム、コーンのコロッケ、塩豚と白いんげん豆のオーブン焼き、ムール貝とエビのトマトソースのパスタ (2026年8月)、砂肝のコンフィ (2026年6月)・スパークリングワインのボトル3,960円、バゲット1切れ140円 (2026年6月)、白と赤のサングリア (2026年4月)・飲み放題つきのコース: 平日のカジュアルコース3,980円 (90分、カード不可)、5,500円 (150分)、食べログスペシャル6,000円 (3時間) (食べログ)。2026年9月は3時間のコースが5,800円で、日替わりタパス、生ハム2種とオリーブ、中央卸売市場から直送の魚のカルパッチョ、アンチョビポテト、アヒージョ、ピザ、Satsuma Chami 豚のグリル、パエリア、デザート',
    neighborhood: '大阪駅前第2ビルの地下1階の奥。JR北新地駅から徒歩1分、JR大阪駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。メニューはパン、ピザ、パスタ (バゲット、マルゲリータ、トマトソースのパスタ)、揚げ物 (コーンのコロッケ、アンチョビポテト)、パエリアが中心。小麦粉を使わないタパスやグリルを確認して。',
    vegan_detail: '要確認。ヴィーガンの情報なし。ほとんどの料理に生ハム、魚介、豚肉、鶏肉、卵、チーズが入る。2026年の口コミにはヤングコーンのグリルや、タパスの盛り合わせのピクルスなど野菜の皿も。',
    notes: '[スペイン・イタリアのバル・梅田、大阪駅前第2ビル地下1階] 大阪駅前第2ビルの地下の奥にある小さなタパスのバルで (ビルの案内図で見つけたという人も)、北新地のスペインバル El Sol の2号店。シェフのスペイン料理とイタリア料理を手ごろな値段で、というのが店の考え。693円のタパスの盛り合わせ、原木から切るハモン、塩加減のいいアヒージョ、ピザ、パスタ、イカ墨のパエリアを、ひとりでも何品か頼める少なめの量で。ハッピーアワーは平日18時15分までビールやハイボールが198円 (2026年8月)、火曜日は女性グループのドリンクが半額。いつもグラスからあふれるほど注がれるスパークリングワインから始めるという常連さんも。カウンターはひとりかふたり向き。奥の部屋は7人からのグループで3時間飲み放題のコース (2026年9月は5,800円) に使え、持ちこんだ誕生日ケーキにスタッフがろうそくを立ててくれたという声も。開店してすぐ満席になるので、直前でも予約を。',
  });
}

// ================================================================ CC:CARBON COPY
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27144587/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'https://canopy-osaka.hiltonjapan.co.jp/restaurants/cc-carbon-copy';
  const B = ['06:30', '10:30'], L = ['11:30', '15:30'], D = ['17:30', '21:30'];
  const FULL = day(B, L, D), NOD = day(B, L);
  put({
    id: 'osaka_cc_carbon_copy_canopy_umeda', name: 'CC:CARBON COPY', category: 'OMNI',
    lat: 34.70576, lng: 135.493263, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask ahead. No gluten information, but the hotel says it handles food allergies when asked in advance (official page). Courses and set lunches lean on bread, pizza and pasta; the breakfast buffet includes a miso soup with fu, wheat gluten (June 2026).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask ahead. Tabelog lists vegetarian options and the hotel takes dietary requests in advance (official page), but no vegan dish is described; the breakfast buffet has salads and fruit alongside eggs, fish and meat (June 2026).',
    hours_raw: 'Daily: breakfast 6:30–10:30; lunch 11:30–15:30 (last order 14:00); dinner 17:30–21:30 (last order 20:00), no dinner on Tuesday and Wednesday, except dinner on Wednesday 23 December 2026 (official page; Tabelog, from 1 August 2026). Hours and prices may change in festive periods (Golden Week, Obon, Christmas, New Year) and on promotion days (official page). Breakfast ¥4,500 (13 and over), ¥2,250 (6–12); set lunch from ¥5,800; set dinner from ¥7,800; à la carte from ¥700; tax and service charge (15% per Tabelog) added to listed prices (official page). Reservations accepted (Tabelog). Cards (AMEX, UnionPay, Diners, Master, Visa, JCB); no e-money or QR (official page; Tabelog); a diner was asked to pay cash because of a terminal fault (August 2026). 81 seats: 67 in the room and a private room for up to 14 (an extra ¥18,000 for parties of six or fewer); non-smoking; step-free for wheelchairs and strollers; children\'s tableware and chairs; parking free for 2 hours with ¥10,000 spent (official page). English menu and English-speaking staff; smart casual (Tabelog). Opened 6 September 2024 (Tabelog).',
    hours: { 0: FULL, 1: NOD, 2: NOD, 3: FULL, 4: FULL, 5: FULL, 6: FULL }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Canopy by Hilton Osaka Umeda 11F, Grand Green Osaka North building — 7 min from JR Osaka Stn',
    cuisine: 'All-day dining of dishes from around the world made with Osaka produce, served on Japanese small plates, with a live cooking station (official page) · breakfast buffet ¥4,500: made-to-order omelettes, salads, Japanese sides (grilled mackerel, hijiki, natto) with rice and miso soup, yakisoba, curry rice, fruit and a strawberry-chia parfait, and a "TACO Juice" of tea, tomato, apple, carrot and orange (June 2026) · lunch: CC: Quick Lunch ¥4,500 with stone-oven bread and tomato butter, octopus salad, edamame hummus, fried squid with romesco and a prosciutto pizza (August 2026); pizza lunch set ¥4,500, 7-dish sets ¥5,800 and ¥7,800 with three starters, a main and dessert (Tabelog) · "Italian lifestyle" lunch and dinner plans (official page); a September 2026 diner found the cooking Italian with Japanese delicacy · an Obon lunch buffet with porchetta from the live kitchen (August 2026) · dinner à la carte: small starters and a salty prosciutto pizza (October 2026) · wine',
    website: OFF, gmaps: gm('CC:CARBON COPY キャノピーbyヒルトン大阪梅田'), menu_url: OFF,
    notes: "[International · Umeda, Grand Green Osaka hotel restaurant] The all-day restaurant on the 11th floor of the Canopy by Hilton in Grand Green Osaka's north building, with windows over Umekita park and the Osaka Station area; one diner watched the view turn from evening to night (September 2026). The kitchen cooks dishes from around the world with Osaka produce and plates them small, Japanese-style, with a live cooking station; the room nods to Osaka food culture, with a ceiling of Sumiyoshi bamboo craft and lights shaped like kushikatsu (August 2026). Breakfast is a ¥4,500 buffet with omelettes made to order, Japanese sides, yakisoba and fresh juices, praised in June 2026 and found ordinary by an October 2026 hotel guest. Lunch sets start at ¥4,500 including tax and service; dinner is à la carte or sets from ¥7,800. Diners note loud music at a business lunch, slow notice at dinner (October 2026), and a calm room even at weekends. The hotel takes allergy requests in advance.",
    chef_bio: { chef_name: null, roles: ['Hotel kitchen team (chef unnamed in the sources read)'], origin: 'The all-day dining restaurant of Canopy by Hilton Osaka Umeda (official page).', background: 'Official page (read 2026-11-01): "シェフの遊び心満載の世界各国の味を、美しい小皿スタイルで" — the chef\'s playful takes on world dishes, using local Osaka ingredients, in Japanese small plates; a live cooking station; interior modelled on an Osaka market arcade and the rice bags of the old Osaka rice exchange; a private room for up to 14 with charging sockets for business meals. Opened 6 September 2024 (Tabelog).', philosophy: 'Dishes from around the world, each giving a taste of its country\'s lifestyle and culture, made with local ingredients (official page).', specialty: 'Small-plate world dishes; breakfast buffet.',
      anecdotes: [
        { text: '"The interior, which I initially thought was just stylish, actually incorporates elements of Osaka culture, such as the ceiling made of Sumiyoshi bamboo craft and the hanging lights inspired by kushikatsu" — August 2026, a business lunch.', source: R + 'B534265210/' },
        { text: '"The location offered a stunning view of the Osaka Station area. The transition of the scenery from evening to night was truly beautiful." — September 2026.', source: R + 'B536080207/' },
        { text: '"The staff was attentive, promptly bringing my coffee even amidst the busy atmosphere." — October 2026, the breakfast buffet.', source: R + 'B536977871/' },
      ],
      japanese_sources_summary: '公式ページ: CC：CARBON COPY (シーシー カーボンコピー)、キャノピーbyヒルトン大阪梅田の11階、大阪市北区大深町6-38 グラングリーン大阪 北館、朝食6:30〜10:30、ランチ11:30〜15:30 (L.O.14:00)、ディナー17:30〜21:30 (L.O.20:00、火・水曜日のディナーは定休)、朝食4,500円 (13歳以上)、2,250円 (6〜12歳)、ランチのセット5,800円から、ディナーのセット7,800円から、アラカルト700円から、税とサービス料は別、81席 (店内67席、個室14席、6名以下の個室利用は18,000円)、全席禁煙、子ども用の食器と椅子、段差なし、食物アレルギーに対応 (事前に問い合わせ)、1万円以上の利用で駐車場2時間無料、世界各国の料理を大阪の食材で日本の小皿のスタイルで、ライブクッキング、黒門市場のアーケードや堂島米市場の米袋を模したインテリア。食べログ (店舗会員): サービス料15%、英語メニュー、英語を話すスタッフ、ベジタリアンのオプション、スマートカジュアル、2024年9月6日オープン。口コミ (2026年6〜10月): 朝食ビュッフェ、オムレツ、焼きそば、カレー、ランチ4,500円、夕方から夜への景色、BGMが大きい、夜は追加の注文がしにくかった。',
      confidence: 'medium', sources: [TB, OFF, R + 'B530965303/', R + 'B533029613/', R + 'B533776622/', R + 'B534265210/', R + 'B535531013/', R + 'B536080207/', R + 'B536770715/', R + 'B536977871/', R + 'B538224696/', R + 'B538279945/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); a hotel restaurant with many overseas guests at breakfast (October 2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Official page: "食物アレルギーの対応をいたします。事前にお問合せください。" (food allergies handled; ask in advance).', source: OFF }] },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市北区大深町6-38 グラングリーン大阪 北館 キャノピーbyヒルトン大阪梅田 11F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; the hotel page lists hours to December 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; GSI resolves 大阪府大阪市北区大深町6-38 only to the town (大深町), 150m away, so the pin rests on the Tabelog point (the hotel, Grand Green Osaka North building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [OFF, TB, R + 'B533029613/', R + 'B534265210/'],
    price_note: 'Breakfast and set starting prices from the official page (tax and service extra); lunch sets from Tabelog (tax included); the Quick Lunch from an August 2026 review.', last_checked: TODAY, items: [
      it('朝食', '', 'Breakfast buffet (13 and over; ¥2,250 for ages 6–12)', '¥4,500', 'Breakfast', 'ask', 'ask', 'Official page; June 2026 review.', 'breakfast_buffet'),
      it('', '', 'CC: Quick Lunch (bread, octopus salad, edamame hummus, fried squid, prosciutto pizza)', '¥4,500', 'Lunch', 'no', 'no', 'August 2026 review.', 'quick_lunch'),
      it('', '', 'Lunch pizza set (4 dishes)', '¥4,500', 'Lunch', 'no', 'ask', 'Tabelog listing.', 'lunch_pizza_set'),
      it('', '', 'Lunch set: three starters, a main, dessert (7 dishes)', '¥5,800', 'Lunch', 'ask', 'ask', 'Tabelog listing; official page "from ¥5,800".', 'lunch_set_5800'),
      it('', '', 'Lunch set with linguine (7 dishes)', '¥7,800', 'Lunch', 'no', 'ask', 'Tabelog listing.', 'lunch_set_7800'),
    ] }, {
    cuisine: '世界各国の料理を大阪の食材で、日本の小皿のスタイルで出すオールデイダイニング、ライブクッキングのステーションつき (公式ページ)・朝食ビュッフェ4,500円: 注文を受けて焼くオムレツ、サラダ、和のおかず (サバの塩焼き、ひじき、納豆) とご飯とみそ汁、焼きそば、カレーライス、フルーツ、いちごとチアシードのパフェ、お茶、トマト、りんご、にんじん、オレンジの「TACO Juice」(2026年6月)・ランチ: CC: Quick Lunch 4,500円、石窯のパンとトマトバター、タコのマリネのサラダ、枝豆のフムス、イカのフライのロメスコソース、生ハムのピザ (2026年8月)。ピザのランチセット4,500円、前菜3種とメイン、デザートの7品のセット5,800円と7,800円 (食べログ)・ランチとディナーの「イタリアン」ライフスタイルのプラン (公式ページ)。2026年9月の口コミではイタリアンに日本らしい繊細さ・お盆のランチビュッフェ、ライブキッチンのポルケッタ (2026年8月)・夜のアラカルト: 少なめの前菜、塩気の強い生ハムのピザ (2026年10月)・ワイン',
    neighborhood: 'グラングリーン大阪 北館、キャノピーbyヒルトン大阪梅田の11階。JR大阪駅から徒歩7分',
    gf_detail: '事前に要確認。グルテンの情報はないが、事前に問い合わせれば食物アレルギーに対応するとホテルは書いている (公式ページ)。コースやランチのセットはパン、ピザ、パスタが中心。朝食ビュッフェには麩の入ったみそ汁も (2026年6月)。',
    vegan_detail: '事前に要確認。食べログにはベジタリアンのオプションの表示があり、ホテルは事前の相談に応じる (公式ページ) が、ヴィーガンの料理は書かれていない。朝食ビュッフェには卵、魚、肉と並んでサラダやフルーツもある (2026年6月)。',
    notes: '[多国籍・梅田、グラングリーン大阪のホテルのレストラン] グラングリーン大阪 北館のキャノピーbyヒルトンの11階にあるオールデイダイニングで、窓からうめきたの公園と大阪駅のあたりが見える。夕方から夜に変わる景色を眺めたという人も (2026年9月)。世界各国の料理を大阪の食材で作り、日本の小皿に盛り、ライブクッキングのステーションもある。店内には大阪の食文化を感じるデザインがあり、Sumiyoshi の竹細工の天井や、串カツの形の照明も (2026年8月)。朝食は4,500円のビュッフェで、注文を受けて焼くオムレツ、和のおかず、焼きそば、フレッシュジュース。2026年6月には好評、10月の宿泊客にはふつうだったとのこと。ランチのセットは税とサービス料込みで4,500円から、夜はアラカルトか7,800円からのセット。ビジネスランチでは BGM が大きかった、夜はスタッフになかなか気づいてもらえなかった (2026年10月)、週末でも落ち着いていたという声。アレルギーは事前に相談を。',
  });
}

// ================================================================ オーヨドアベニュー
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27125083/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '23:00']), WE = day(['16:00', '23:00']);
  put({
    id: 'osaka_ooyodo_avenue', name: 'オーヨドアベニュー (Ooyodo Avenue)', category: 'OMNI',
    lat: 34.703685, lng: 135.490683, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Dishes include zeppole, gratin, fritters, cream pasta and bread served for the sauces (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Most dishes hold fish, meat, egg or dairy (carpaccio, omelettes, roast beef, salmon, gratin); roasted peas appear on an appetizer platter (August 2026).',
    hours_raw: 'Mon–Fri and the day before or after a holiday 18:00–23:00; Sat, Sun and holidays 16:00–23:00; last order food 22:00, drinks 22:30 (Tabelog). Open all year but sometimes closed on irregular days; the shop posts them on Instagram (Tabelog). Reservations accepted; busiest around 19:00, easier after 21:00 (August 2026). No cards, no e-money; PayPay accepted (Tabelog). 19 seats: 11 at the counter, one table for 4, two for 2; private hire up to 20; non-smoking, ashtray outside; children welcome (Tabelog). Opened 22 November 2021 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'A quiet street behind Umekita and Grand Green Osaka — 10 min on foot from JR Osaka Stn or Hankyu Nakatsu Stn',
    cuisine: 'Creative bistro on the theme of "adult play": charcoal-grilled dishes and twists on bistro classics such as a charcoal-grilled smoked "meat bomb", butter chicken and zucchini gratin, melon gazpacho; wine and gin, with music (Tabelog) · assorted appetizers ¥1,419 a person (August 2026): shime-saba potato salad, kanpachi carpaccio, shirasu omelette, yodare chicken, roasted peas, salmon confit · omelettes: shirasu and fresh tomato (July 2026), tomato and herb (August 2026); an eel omelette, sold out that night · salmon mi-cuit, mackerel potato salad with a red sauce, fritters, gratin (July 2026) · zeppole with mentaiko sauce, roast beef, cream pasta (August 2026); hamburg steak (September 2026) · hojicha Basque cheesecake with black syrup (August 2026) · courses (Tabelog, tax included): OYD Standard ¥4,510 (7 dishes), weekday casual course ¥4,280 (Tue–Thu, booked 7 days ahead, 2 hours), OYD Special ¥5,680 · unusual shochu (July 2026); orange juice over ¥700 (August 2026)',
    website: null, gmaps: gm('オーヨドアベニュー 大淀南'), menu_url: null,
    notes: "[Bistro · behind Umekita, a quiet street ten minutes from Osaka Station] A 19-seat creative bistro on a quiet street past Grand Green Osaka, themed on \"adult play\": charcoal-grilled dishes and bistro classics with a twist, wine and gin, and a soundtrack worth listening to. Diners come for the colourful appetizer platter (¥1,419 a person in August 2026: shime-saba potato salad, kanpachi carpaccio, a shirasu omelette, yodare chicken, salmon confit) and the soft omelettes, with tomato, shirasu or, when it has not sold out, eel. Most praise the presentation and the sauces; others found portions small for the price, waited half an hour for the platter, or found the room hot and the high stools hard (September 2026). Courses run ¥4,280–5,680. Book for 7 pm; it is easier after 9. No cards; PayPay accepted.",
    chef_bio: { chef_name: null, roles: ['Chef and staff (unnamed in the sources read)'], origin: null, background: 'Shop text (Tabelog): a creative bistro near Osaka Station and Umeda themed on "adult play", with unique twists on classic bistro dishes, fine wine or gin, and quality music; charcoal-grilled dishes and carefully chosen domestic drinks. Opened 22 November 2021.', philosophy: '"Adult play" in bistro cooking (Tabelog).', specialty: 'Assorted appetizers; omelettes; charcoal-grilled dishes.',
      anecdotes: [
        { text: '"We ordered an appetizer platter for one, but since there were two of us" the portion was adjusted for two — August 2026, back home in Kansai for Obon.', source: R + 'B533783793/' },
        { text: '"For dessert, I had the hojicha Basque cheesecake. It was drizzled with black syrup, giving it a Japanese twist." — August 2026, a solo visit after work.', source: R + 'B534719792/' },
        { text: '"The omelet, generously topped with shirasu (whitebait) and fresh tomatoes, was exquisite with its perfectly creamy texture and refreshing acidity." — July 2026.', source: R + 'B531855633/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B531855633/', R + 'B532074758/', R + 'B532875576/', R + 'B533407769/', R + 'B533783793/', R + 'B534347722/', R + 'B534719792/', R + 'B534913781/', R + 'B536371943/', R + 'B538054512/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order à la carte or a set course; book ahead for 7 pm (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区大淀南1-3-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区大淀南一丁目3番19号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534719792/'],
    price_note: 'Courses from the Tabelog listing (tax included, discounted online prices); the appetizer platter from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Assorted appetizers (per person)', '¥1,419', 'Appetizers', 'ask', 'no', 'August 2026 review.', 'appetizer_platter'),
      it('', '', 'OYD Standard Course (7 popular dishes)', '¥4,510', 'Course', 'ask', 'ask', 'Tabelog listing.', 'oyd_standard'),
      it('', '', 'Weekday OYD Casual Course (Tue–Thu, booked 7 days ahead, 2 hours)', '¥4,280', 'Course', 'ask', 'ask', 'Tabelog listing.', 'oyd_casual'),
      it('', '', 'OYD Special Course (popular dishes and seasonal ingredients)', '¥5,680', 'Course', 'ask', 'ask', 'Tabelog listing.', 'oyd_special'),
    ] }, {
    cuisine: '「大人の遊び」がテーマの創作ビストロ: 炭火焼きと、炭火焼きのスモークの meat bomb、バターチキンとズッキーニのグラタン、メロンのガスパチョなど、ひねりのあるビストロ料理、ワインとジン、音楽 (食べログ)・前菜の盛り合わせ1人前1,419円 (2026年8月): しめサバのポテトサラダ、カンパチのカルパッチョ、しらすのオムレツ、よだれ鶏、ローストしたえんどう豆、サーモンのコンフィ・オムレツ: しらすとフレッシュトマト (2026年7月)、トマトとハーブ (2026年8月)、うなぎのオムレツはその日は売り切れ・サーモンのミキュイ、赤いソースのサバのポテトサラダ、フリット、グラタン (2026年7月)・明太子ソースのゼッポリーネ、ローストビーフ、クリームパスタ (2026年8月)、ハンバーグ (2026年9月)・黒蜜をかけたほうじ茶のバスクチーズケーキ (2026年8月)・コース (食べログ、税込): OYD Standard 4,510円 (7品)、平日の OYD Casual 4,280円 (火〜木、7日前までの予約、2時間)、OYD Special 5,680円・めずらしい焼酎 (2026年7月)、オレンジジュースは700円を超える (2026年8月)',
    neighborhood: 'うめきたとグラングリーン大阪の裏の静かな通り。JR大阪駅か阪急中津駅から徒歩10分',
    gf_detail: '要確認。グルテンの情報なし。ゼッポリーネ、グラタン、フリット、クリームパスタ、ソースにつけるパンなどがある (2026年の口コミ)。',
    vegan_detail: '要確認。ヴィーガンの情報なし。ほとんどの料理に魚、肉、卵、乳製品が入る (カルパッチョ、オムレツ、ローストビーフ、サーモン、グラタン)。前菜の盛り合わせにはローストしたえんどう豆も (2026年8月)。',
    notes: '[ビストロ・うめきたの裏、大阪駅から10分の静かな通り] グラングリーン大阪の先の静かな通りにある19席の創作ビストロで、テーマは「大人の遊び」。炭火焼きとひねりのあるビストロ料理、ワインとジン、いい音楽。目当ては色とりどりの前菜の盛り合わせ (2026年8月は1人前1,419円で、しめサバのポテトサラダ、カンパチのカルパッチョ、しらすのオムレツ、よだれ鶏、サーモンのコンフィ) と、トマトやしらす、売り切れていなければうなぎの、ふわふわのオムレツ。盛りつけとソースをほめる声が多い一方、値段のわりに量が少ない、盛り合わせが出るまで30分待った、店内が暑くハイスツールがつらかったという人も (2026年9月)。コースは4,280〜5,680円。19時ごろは予約を、21時を過ぎると入りやすい。カード不可、PayPay は使える。',
  });
}

// ================================================================ 肉割烹 友百合
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27135727/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'https://tomoyuri.jp/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'osaka_niku_kappo_tomoyuri_kitashinchi', name: '肉割烹 友百合 (Niku Kappo Tomoyuri)', category: 'MOM_AND_POP',
    lat: 34.697674, lng: 135.496608, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Every course includes a beef cutlet sandwich (bread and breaded cutlet), and reviews describe spring rolls, beef-tongue curry and dan dan noodles on a May 2025 menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set courses built on wagyu, with seafood, soups and broths.',
    hours_raw: 'Mon–Sat 18:00–23:00, last order food 21:00, drinks 22:00; closed Sundays, holidays, Obon, Golden Week and New Year (Tabelog; official site). Courses start at 18:00 or 20:30 (official site). Reservation only (Tabelog); online booking on the official site. Service charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog). Seats: 14 counter and 6 semi-private per Tabelog; 12 counter and one table that seats up to 6 semi-privately per the official site; private hire up to 20. Heated tobacco only, in the private room. School-age children welcome; a children\'s plate for lower-elementary pupils ¥5,500 (Tabelog). Opened 22 April 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, ぐらんぱれビル 1F (曽根崎新地1-3-26) — 1 min from JR Kitashinchi Stn and Nishi-Umeda Stn',
    cuisine: 'Meat kappo: wagyu chosen from across Japan, served as sashimi, seared, charcoal-grilled and simmered, in a monthly omakase course (official site) · omakase ¥17,600, special course ¥24,200, Kobe beef course ¥33,000, tax included; wine pairing (6 glasses) ¥10,000 or the house pairing of champagne, sake and wine (7) ¥10,000 (official site) · a July 2026 course: oxtail and soft-shelled turtle soup; fried yuba with shrimp and fig; surf clam with Kujo green onion; sea-urchin yukke hand roll; oxtail and porcini spring roll; beef cheek with shark fin and crab sauce; beef cutlet sandwich; charcoal-grilled tenderloin; kamameshi with mentaiko, beef-tongue curry and gyudon to choose from; red miso soup; fruit punch · other dishes in reviews: beef tongue, liver, toro-taku, Kobe beef with turnip and truffle (December 2025), tongue with green pepper, abalone and matsutake (August 2026) · a katsu sandwich to take home (Tabelog) · champagne, wine, sake; juices for non-drinkers (May 2026)',
    website: OFF, gmaps: gm('肉割烹 友百合 北新地'), menu_url: OFF,
    notes: "[Meat kappo · Kitashinchi, a wagyu counter] A counter in Kitashinchi where the owner-chef, 三井秀和 (official site), cooks wagyu from producers across Japan in front of you, course by course: soup, seasonal small dishes, raw and seared beef, a thick beef cutlet sandwich that diners photograph again and again, charcoal-grilled tenderloin, then kamameshi with a choice of toppings such as beef-tongue curry, gyudon and mentaiko. Two 2026 reviews say the owner was formerly head chef at Tsuru Ton Tan; one called the owner a comedian who keeps the counter laughing (July 2026), and at an April 2026 birthday all the guests joined in the song. Courses run ¥17,600–33,000 with 10% service; pairings ¥10,000. Portions are large: come hungry. Private room for business dinners; a loud group at the counter spoiled one November 2025 evening. A sister yakiniku shop, 北新地 焼肉友ゆり, opened in October 2026.",
    chef_bio: { chef_name: '三井秀和', roles: ['Owner-chef (オーナーシェフ) (official site)', 'Formerly head chef at Tsuru Ton Tan (August and October 2026 reviews)'], origin: null, background: 'Official site (read 2026-11-01): "オーナーシェフ 三井秀和"; the owner-chef pairs carefully chosen meat with seasonal ingredients, using skills built up over the years and ingredients from trusted producers, and finishes each dish while talking with guests at the counter. Reviews: "The cheerful master, who has been the head chef at Tsuru Ton Tan for a long time" (August 2026); "The owner here was formerly the head chef at Tsuru Ton Tan" (October 2026). A July 2026 diner writes that the shop specialises in Iga beef and Tsushima beef. Opened 22 April 2023 (Tabelog); a sister shop, 北新地 焼肉友ゆり, opened in Kitashinchi on 13 October 2026 (official site).', philosophy: 'Hospitality through meat dishes made with care, finished while talking with each guest (official site).', specialty: 'Meat kappo course; beef cutlet sandwich; kamameshi finale.',
      anecdotes: [
        { text: '"I had heard from my friend beforehand that while the food is delicious, the owner can be a bit loud (laughs), so I was prepared for that. However, I found out that the loudness was more of a comedic style rather than intimidating!" — July 2026.', source: R + 'B531901102/' },
        { text: '"The head chef was very friendly, and even though it was my first time at the restaurant, all the guests joined in to sing a birthday song for me" — April 2026, a birthday dinner.', source: R + 'B532629083/' },
        { text: '"The beef katsu sandwich was a huge hit, with many guests taking multiple photos of it!" — September 2025, a fourth visit.', source: R + 'B468630502/' },
      ],
      japanese_sources_summary: '公式サイト: 肉割烹 友百合 (ともゆり)、ライブ感のある割烹、全国から取り寄せた和牛を刺身、炙り、炭焼き、煮物などで、ソムリエが選ぶシャンパン、ワイン、日本酒、オーナーシェフ 三井秀和、月替りおまかせコース (神戸牛コース33,000円、特選コース24,200円、おまかせコース17,600円、税込)、コースは18:00〜と20:30〜、ワインペアリング6種10,000円、友百合オリジナルペアリング7種10,000円、サービス料は別、カウンター12席とテーブル1席 (6名まで半個室)、18時〜23時、日曜・祝日・盆・正月・ゴールデンウィーク休み、大阪市北区曽根崎新地1丁目3番26号 ぐらんぱれビル1階、姉妹店の北新地 焼肉友ゆりが2026年10月13日に開店。食べログ (店舗会員): 予約制、子ども用のプレート5,500円、20席、サービス料10%、加熱式たばこは個室のみ、お土産のカツサンド、2023年4月22日オープン。口コミ (2023年12月〜2026年10月): 牛カツサンド、ウニとユッケの手巻き、炭火焼き、釜めしと選べるご飯のお供、大将は以前 Tsuru Ton Tan の料理長、冗談の多い楽しい大将、量が多い。',
      confidence: 'medium', sources: [TB, OFF, R + 'B468630502/', R + 'B478580711/', R + 'B506628062/', R + 'B519677189/', R + 'B531901102/', R + 'B532629083/', R + 'B534469709/', R + 'B534509145/', R + 'B536770945/', R + 'B537679241/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses at a counter, each dish explained (2026); many overseas guests (September 2025, July 2026). No English menu listed.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-3-26 ぐらんぱれビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; official site with October 2026 news; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目3番26号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [OFF, TB],
    price_note: 'Courses and pairings from the official site (tax included; service charge 10% extra per Tabelog).', last_checked: TODAY, items: [
      it('おまかせコース', '', 'Omakase course (monthly)', '¥17,600', 'Course', 'ask', 'no', 'Official site; Tabelog.', 'omakase_course'),
      it('特選コース', '', 'Special course', '¥24,200', 'Course', 'ask', 'no', 'Official site; Tabelog.', 'special_course'),
      it('神戸牛コース', '', 'Kobe beef course', '¥33,000', 'Course', 'ask', 'no', 'Official site; Tabelog.', 'kobe_beef_course'),
      it('ワインペアリング 6種', '', 'Wine pairing (6 glasses)', '¥10,000', 'Drinks', '', '', 'Official site.', 'wine_pairing'),
      it('友百合オリジナルペアリング 7種', '', 'House pairing of champagne, sake and wine (7 glasses)', '¥10,000', 'Drinks', '', '', 'Official site.', 'original_pairing'),
    ] }, {
    cuisine: '肉割烹: 全国から選んだ和牛を刺身、炙り、炭焼き、煮物で、月替りのおまかせコースに (公式サイト)・おまかせコース17,600円、特選コース24,200円、神戸牛コース33,000円 (税込)、ワインペアリング6種10,000円か友百合オリジナルペアリング (シャンパン、日本酒、ワイン) 7種10,000円 (公式サイト)・2026年7月のコース: テールとすっぽんのスープ、えびといちじくの湯葉揚げ、北寄貝と Kujo のネギ、ウニとユッケの手巻き、テールとポルチーニの春巻き、牛ほほ肉とフカヒレのカニあんかけ、牛カツサンド、炭火焼きのヒレ、釜めしと明太子、牛タンカレー、牛丼から選べるご飯、赤だし、フルーツポンチ・ほかに口コミでは牛タン、レバー、トロたく、神戸牛とかぶとトリュフ (2025年12月)、牛タンとピーマン、アワビと松茸 (2026年8月)・お土産のカツサンド (食べログ)・シャンパン、ワイン、日本酒、お酒を飲まない人にはジュース (2026年5月)',
    neighborhood: '北新地、ぐらんぱれビル 1階 (曽根崎新地1-3-26)。JR北新地駅と西梅田駅から徒歩1分',
    gf_detail: '予約時に要確認。グルテンの情報なし。どのコースにも牛カツサンド (パンと衣) があり、口コミには春巻き、牛タンカレー、2025年5月のメニューには担々麺も。',
    vegan_detail: 'ヴィーガンではありません。和牛が中心のコースで、魚介やスープも。',
    notes: '[肉割烹・北新地、和牛のカウンター] 北新地のカウンターで、オーナーシェフの三井秀和さん (公式サイト) が全国の生産者の和牛を目の前でコースに仕立てる。スープ、季節の小皿、生や炙りの牛肉、何度も写真を撮られる厚い牛カツサンド、炭火焼きのヒレ、最後は牛タンカレー、牛丼、明太子などをのせて食べる釜めし。2026年の口コミ2件では、大将は以前 Tsuru Ton Tan の料理長だったとのこと。カウンターを笑わせるコメディアンのような大将 (2026年7月) で、2026年4月の誕生日にはお客さん全員で歌ったという。コースは17,600〜33,000円にサービス料10%、ペアリングは10,000円。量が多いのでおなかをすかせて。接待には個室を。2025年11月にはカウンターのとなりのグループがうるさかったという声も。姉妹店の焼肉店、北新地 焼肉友ゆりが2026年10月にオープン。',
  });
}

save();
