// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 26.
//   + 川間食堂 kawama cafe (cashless Kamo-river café of rice burgers and sandwiches at Gojo; since 2020)
//   + 露瑚 Roko (riverside Kyoto kaiseki and lunches on Kiyamachi, with a summer yuka)
//   + WINE BISTRO by plein 京都祇園 (late-night wine bistro of the Ginza PLEIN group on Hanamikoji; since 2024)
//   + 京都モダンテラス Kyoto Modern Terrace (large café-restaurant in ROHM Theatre Kyoto, Okazaki; since 2016)
//   Picked on 2026-11-05: the first two with id mod 6 = 2 from `queue.mjs kyoto-missed next core 200` (26033846, 26004266);
//   the first two from `next notable 200` (26040842, 26026808). None is in data/kyoto.json by name (川間/kawama, 露瑚/Roko,
//   plein, モダンテラス/Modern Terrace) or address (都市町141, 上樵木町491-6, 清本町354, 岡崎最勝寺町13); 上樵木町491-3 and
//   491 1F belong to other records at other lot numbers.
//   Same-name count (same brand or operator only): 川間食堂, 露瑚 and 京都モダンテラス single shops. WINE BISTRO by plein belongs
//   to the PLEIN group of Ginza, which a 17 March 2026 press release describes as French and bistro shops in Tokyo and Kyoto
//   (PLEIN 銀座本店, Toranomon Hills, Kyoto Gion; sister PLEIN BIS run by MS-NEXT), under different names — a group of differently named shops, not a large parent;
//   flagged. Service charges checked against Tabelog's Japanese original: 露瑚 サービス料10%; plein charge料 ¥550, no service
//   charge; 川間食堂 and 京都モダンテラス none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-26');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 川間食堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033846/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '17:00']);
  put({
    id: 'kyoto_kawama_shokudo_gojo', name: '川間食堂 (kawama cafe)', category: 'OMNI',
    lat: 34.994989, lng: 135.767215, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice burgers (rice buns with nori and dashi flavours) alongside bread sandwiches, hot dogs, muffins and cookies; sauces not described for gluten (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fillings are mostly mackerel, egg and meat; chili con carne and taco rice plates; a fruit yogurt; no plant-only item named (2024–2026 reviews).',
    hours_raw: '9:00–17:00 (L.O. 16:30) daily, holidays included (Tabelog). No reservations (Tabelog). Cashless only — no cash; cards, IC cards, other e-money and QR accepted (Tabelog). Pay first (June 2026). 18 seats with river-facing windows; Wi-Fi and power outlets; terrace where pets are allowed; smoking outside only (Tabelog; 2025–2026 reviews). Takeaway in burger bags (Tabelog). Children welcome (Tabelog). At the foot of Gojo Ohashi on the west bank, 3 min from Keihan Kiyomizu-Gojo Stn (Tabelog; October 2025). Opened 10 February 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo Ohashi, Kamo River west bank — 3 min from Keihan Kiyomizu-Gojo Stn',
    cuisine: 'Café of made-to-order rice burgers and sandwiches with a Kamo River view (Tabelog shop text; 2025–2026 reviews) · rice burgers fragrant with nori and dashi (October 2025) · mackerel sandwich, thick-omelette sandwich, hot dogs (2025–2026) · lunch plates: chili con carne, taco rice (June 2026) · set of a sandwich or rice burger, a drink and a dessert (fruit yogurt, bread or cookies) ¥100 off (February 2026) · takeaway Kawama bento ¥1,000, tamagoyaki and negi miso ¥500 (November 2024) · espresso, iced coffee, flavoured tea, mango lassi, chocolate muffin (2025–2026)',
    website: null, gmaps: gm('川間食堂 kawama cafe 五条'), menu_url: null,
    notes: '[Café · Gojo Ohashi, rice burgers by the river] A small blue-and-grey café at the foot of Gojo Ohashi whose big windows look straight onto the Kamo River. Rice burgers with a nori-and-dashi aroma and bread sandwiches (the mackerel one is a regular favourite) are made to order and come in burger bags — eat in, or take the bag down to the riverbank. Art on the walls. Cashless only — no cash; open daily 9:00–17:00.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog gives the opening as 10 February 2020.',
      philosophy: null, specialty: 'Rice burgers; mackerel sandwich.',
      anecdotes: [
        { text: 'A February 2026 regular found the mackerel sandwich wetter with more pickles than before and preferred the old version, and wished for a soup set instead of bread-based desserts.', source: R + 'B511355143/' },
        { text: 'A June 2025 regular likes taking food out to eat on the Kamo riverbank.', source: R + 'B508709206/' },
      ],
      japanese_sources_summary: '食べログ: 川間食堂 (kawama cafe)、カフェ・サンドイッチ・バル、下京区都市町141-2、清水五条駅から徒歩3分、毎日9:00〜17:00 (L.O.16:30)、予約不可、キャッシュレスのみ (現金不可)、18席、禁煙 (屋外で喫煙可)、Wi-Fi、電源、テラスはペット可、テイクアウト、子ども可、2020年2月10日オープン。店の紹介: 注文を受けてから作るサンドとライスバーガー、バーガー袋で提供、鴨川の眺め。口コミ (2024〜2026年、英語): 鯖サンド、厚焼き玉子サンド、ホットドッグ、チリコンカンとタコライスのランチプレート、川間弁当1,000円、玉子焼きとねぎ味噌500円、セットは100円引き、エスプレッソ、マンゴーラッシー、店内にアート。',
      confidence: 'medium', sources: [TB, R + 'B496485511/', R + 'B508709206/', R + 'B511355143/', R + 'B517136982/', R + 'B517265716/', R + 'B524164421/', R + 'B524164940/', R + 'B525435190/', R + 'B530398434/', R + 'B536526814/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cashless only (no cash); pay first; river views.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区都市町141-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.994989, 135.767215); cross-checked: GSI 京都府京都市下京区都市町141番地 (lot) 41m; nearest existing pin kyoto_cinq_neuf_gojo 35 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B496485511/'],
    price_note: 'No menu read; takeaway prices from a November 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Kawama bento (takeaway)', '¥1,000', 'Takeaway', 'ask', 'ask', 'November 2024.', 'kawama_bento'),
      it('', '', 'Tamagoyaki and negi miso (takeaway)', '¥500', 'Takeaway', 'ask', 'no', 'November 2024.', 'tamagoyaki_negimiso'),
      it('', '', 'Mackerel sandwich', '', 'Sandwiches', 'no', 'no', '2025–2026; price not given.', 'saba_sandwich'),
    ] }, {
    cuisine: '注文を受けてから作るライスバーガーとサンドの、鴨川を望むカフェ (食べログの店紹介、2025〜2026年の口コミ)・海苔と出汁が香るライスバーガー (2025年10月)・鯖サンド、厚焼き玉子サンド、ホットドッグ (2025〜2026年)・ランチプレート: チリコンカン、タコライス (2026年6月)・サンドかライスバーガー、ドリンク、デザート (フルーツヨーグルト、パン、クッキー) のセットで100円引き (2026年2月)・持ち帰りの川間弁当1,000円、玉子焼きとねぎ味噌500円 (2024年11月)・エスプレッソ、アイスコーヒー、フレーバーティー、マンゴーラッシー、チョコマフィン (2025〜2026年)',
    neighborhood: '五条大橋のたもと、鴨川西岸。京阪清水五条駅から徒歩3分',
    gf_detail: '要確認。ライスバーガー (海苔と出汁の香るライスバンズ) のほか、パンのサンド、ホットドッグ、マフィン、クッキー。ソースのグルテンの説明はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。具は鯖、卵、肉が中心、チリコンカンやタコライスのプレート、フルーツヨーグルト。植物性のみの品は挙がっていない (2024〜2026年の口コミ)。',
    notes: '[カフェ・五条大橋、鴨川沿いのライスバーガー] 五条大橋のたもと、大きな窓の向こうに鴨川が広がる青とグレーの小さなカフェ。海苔と出汁が香るライスバーガーとパンのサンド (常連の推しは鯖サンド) を注文ごとに作り、バーガー袋で出す。店内でも、河原へ持って行っても。壁にはアート。現金不可のキャッシュレスのみ、毎日9時〜17時。',
  });
}

// ================================================================ 露瑚
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004266/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:20'], ['17:30', '21:30']);
  put({
    id: 'kyoto_roko_kiyamachi', name: '露瑚 (Roko)', category: 'OMNI',
    lat: 35.012169, lng: 135.771071, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki and lunches with dashi soups, white-miso hot pot, yuba and nama-fu gratin (nama-fu is wheat gluten), obanzai; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based kaiseki with hamo, ayu and pork; cheese in the gratin and hot pot (2025–2026 reviews).',
    hours_raw: 'Lunch 11:30–14:20, dinner 17:30–21:30, daily; irregular closures (Tabelog). Reservations online only — via Instagram, Google or TableCheck; phone only for 9 or more (Tabelog). Riverside yuka seating until 15 October, indoors when it rains (Tabelog); no yuka lunch in July because of the heat (July 2026). 10% service charge (Tabelog, original サービス料10%); one drink per person (September 2026). Cards: VISA, Master, JCB per Tabelog, but a September 2026 lunch party was told lunch is cash only. 20 seats plus private rooms for 2–20 (Tabelog). Non-smoking; English menu (Tabelog). On Kiyamachi north of Oike, 3 min from Kyoto Shiyakusho-mae Stn exit 2 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi north of Oike, on the Kamo River — 3 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Kyoto kaiseki and lunches beside the Kamo River, with a summer yuka (2025–2026 reviews) · lunch from about ¥1,890 (April 2026) to ¥2,900 + 10% (September 2026): white-miso hot pot with cheese to add; a choice of nama-fu and yuba gratin or pork kakuni, Kyoto obanzai, rice with chirimenjako (2026) · mini kaiseki of Kyoto classics; hōjicha pudding (July 2026) · dinner courses: hassun of octopus and small fish, sashimi with sea grapes, chilled chawanmushi with uni and hamo, grilled ayu, a small hot pot, seasonal rice (July–August 2026) · all-you-can-drink plans; Kyoto craft beer Kura no Kaori (2026)',
    website: null, gmaps: gm('露瑚 木屋町'), menu_url: null,
    notes: '[Kyoto kaiseki · Kiyamachi, lunch on the Kamo River yuka] A riverside restaurant on Kiyamachi whose yuka over the Kamo River runs into mid-October. Lunch is the value (about ¥2,000–3,000): white-miso hot pot or a gratin of nama-fu and yuba with obanzai; dinner is seasonal mini-kaiseki with hamo and ayu in summer. Book online, well ahead. 10% service and a one-drink rule; one September 2026 group felt rushed and was surprised that lunch was cash only.',
    chef_bio: { chef_name: null, roles: ['Kitchen (unnamed)'], origin: null,
      background: 'Not stated in the sources read.',
      philosophy: null, specialty: 'Riverside lunch; summer hamo and ayu.',
      anecdotes: [
        { text: 'A July 2026 diner had a seat moved to the best riverside spot halfway through the course.', source: R + 'B531502389/' },
        { text: 'A September 2026 party of eight, told at lunch that payment was cash only despite cards being listed, felt hurried out for the next booking; the reviewer will not return.', source: R + 'B535313870/' },
      ],
      japanese_sources_summary: '食べログ: 露瑚、日本料理・カフェ、中京区上樵木町491-6、市役所前駅2番出口から徒歩3分、昼11:30〜14:20、夜17:30〜21:30、不定休、予約はインスタグラム・Google・TableCheck から (9名以上は電話)、川床は10月15日まで (雨天は室内)、サービス料10%、カード (VISA、Master、JCB)、20席、個室、禁煙、英語メニュー。口コミ (2025〜2026年、英語): 昼は約1,890円〜2,900円とサービス料、白味噌の鍋とチーズ、生麩と湯葉のグラタンか豚の角煮、おばんざい、ちりめんじゃこのご飯、ほうじ茶プリン、夜は鱧や鮎のミニ会席、7月は暑さで昼の川床なし、1ドリンク制、2026年9月には昼は現金のみと言われ急かされたという声。',
      confidence: 'medium', sources: [TB, R + 'B492238048/', R + 'B525850407/', R + 'B529310792/', R + 'B531051635/', R + 'B531502389/', R + 'B532291427/', R + 'B532897881/', R + 'B535082705/', R + 'B535313870/', R + 'B536604879/'] },
    cultural_comfort: { level: 'english', note: 'English menu; book online only; 10% service charge; bring cash for lunch to be safe.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区上樵木町491-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.012169, 135.771071); GSI matches only the town 京都府京都市中京区上樵木町, so not cross-checked at lot level; nearest existing pin kyoto_sushi_mori_gaku 25 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535313870/', R + 'B525850407/'],
    price_note: 'No menu read; lunch prices from April and September 2026 reviews; 10% service added.', last_checked: TODAY, items: [
      it('', '', 'Riverside lunch (gratin or kakuni, obanzai, rice)', '¥2,900', 'Lunch', 'ask', 'no', 'September 2026, plus 10% service.', 'yuka_lunch'),
      it('', '', 'White-miso hot pot lunch', '¥1,890', 'Lunch', 'ask', 'no', 'April 2026.', 'shiromiso_nabe_lunch'),
    ] }, {
    cuisine: '鴨川沿いの京料理の会席と昼の膳、夏は川床 (2025〜2026年の口コミ)・昼は約1,890円 (2026年4月) から2,900円とサービス料10% (2026年9月): チーズを足せる白味噌の鍋、生麩と湯葉のグラタンか豚の角煮、京のおばんざい、ちりめんじゃこのご飯 (2026年)・京の定番のミニ会席、ほうじ茶プリン (2026年7月)・夜のコース: たこと小魚の八寸、海ぶどうを添えた造り、雲丹と鱧の冷やし茶碗蒸し、鮎の塩焼き、小鍋、季節のご飯 (2026年7〜8月)・飲み放題のプラン、京都のクラフトビール Kura no Kaori (2026年)',
    neighborhood: '御池の北の木屋町、鴨川沿い。京都市役所前駅から徒歩3分',
    gf_detail: '要確認。出汁の椀、白味噌の鍋、湯葉と生麩 (小麦グルテン) のグラタン、おばんざいの京料理の会席と昼の膳。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。鱧、鮎、豚を使う出汁の会席、グラタンや鍋にはチーズ (2025〜2026年の口コミ)。',
    notes: '[京料理・木屋町、鴨川の川床でランチ] 木屋町の鴨川沿いの店で、川床は10月半ばまで。お得なのは昼 (約2,000〜3,000円)、白味噌の鍋か生麩と湯葉のグラタンにおばんざい。夜は季節のミニ会席で、夏は鱧と鮎。予約はオンラインで早めに。サービス料10%と1ドリンク制。2026年9月には急かされたうえ昼は現金のみと言われたグループも。',
  });
}

// ================================================================ WINE BISTRO by plein 京都祇園
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040842/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://plein-group.com/'; const PR = 'https://zaikei.co.jp/releases/3347842/';
  const H = day(['18:00', '01:00']);
  put({
    id: 'kyoto_wine_bistro_plein_gion', name: 'WINE BISTRO by plein 京都祇園', category: 'OMNI',
    lat: 35.004888, lng: 135.775274, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bistro plates, steaks, Rossini and pasta of the day; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-and-fish bistro — wagyu, venison stew, foie-gras Rossini, mentaiko (2026 reviews).',
    hours_raw: '18:00–1:00 (last entry 24:30), Monday–Saturday and holidays; closed Sunday (Tabelog). Reservations accepted; two-hour limit when busy; walk-ins after 21:00 possible (Tabelog; July 2026). Table charge ¥550, no service charge (Tabelog, original text). Private rooms: small (2–5) ¥4,400, larger (2–8) ¥10,000 (Tabelog). Cards accepted; no e-money or QR (Tabelog). 33 seats: 22 at the counter and two private rooms (Tabelog). Non-smoking (Tabelog). English menu and English-speaking staff; sommeliers (Tabelog; July 2026). Children only in private rooms (Tabelog). Ground floor of KYOTO GION HOTEL on Hanamikoji, next to Lawson, 5 min from Gion-Shijo Stn (Tabelog). Opened 14 March 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Hanamikoji, Gion — 5 min from Keihan Gion-Shijo Stn',
    cuisine: 'Late-night wine bistro with sommeliers at a long counter; wine chosen to taste, glasses from ¥900 (2026 reviews) · fixed à la carte plus daily specials: truffle daikon (the signature), assorted appetizers such as Gion mentaiko, Ufo Mayo and Ezo venison stew, steak of the day, A5 wagyu, Rossini, pasta of the day — a cold thick-noodle pasta, matsutake and sanma pasta (2026 reviews) · courses, even late at night (July 2026) · non-alcoholic drinks (2026 reviews)',
    website: SITE, gmaps: gm('WINE BISTRO by plein 京都祇園'), menu_url: null,
    notes: '[Wine bistro · Gion Hanamikoji, open until 1 a.m.] The PLEIN group’s first venture outside Tokyo: a calm counter bistro on the ground floor of a Hanamikoji hotel, open until 1 a.m. Sommeliers pour by the glass from ¥900 or pair to taste, and the kitchen sends out the much-ordered truffle daikon, appetizer platters, Rossini, steaks and pasta of the day; courses run late too. ¥550 charge; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Operated by the PLEIN group (Ginza)'], origin: null,
      background: 'Tabelog gives the opening as 14 March 2024. A May 2026 reviewer calls it the first shop of the Ginza PLEIN group outside Tokyo. A 17 March 2026 press release (zaikei) about the sister shop PLEIN BIS says the group runs mainly French and bistro shops in Tokyo and Kyoto, from PLEIN Ginza Honten, Toranomon Hills and Kyoto Gion.',
      philosophy: null, specialty: 'Truffle daikon; wine pairing.',
      anecdotes: [
        { text: 'A July 2026 diner came after 9 p.m. without a booking and still had a full course.', source: R + 'B532865421/' },
        { text: 'An October 2026 pair booked for 22:30; the steak, ordered first, was so generous that there was no room left for fish.', source: R + 'B538546089/' },
      ],
      japanese_sources_summary: '食べログ: WINE BISTRO by plein 京都祇園、ビストロ・ワインバー・フレンチ、東山区清本町354 KYOTO GION HOTEL 1F、祇園四条駅から徒歩5分、ローソン祇園花見小路店の隣、月〜土・祝 18:00〜翌1:00 (最終入店24:30)、日曜休み、予約可、混雑時は2時間制、チャージ550円 (サービス料なし)、個室料 (小4,400円、大10,000円)、カード可、33席 (カウンター22、個室2)、禁煙、英語メニュー・英語のスタッフ、ソムリエ、2024年3月14日オープン、公式サイト plein-group.com。口コミ (2026年、英語): 銀座の PLEIN グループの初の東京外の店、トリュフ大根、前菜の盛り合わせ (祇園明太子、Ufo Mayo、Ezo の鹿のシチュー)、本日のステーキ、A5和牛、ロッシーニ、本日のパスタ、グラスワイン900円から、深夜もコース。',
      confidence: 'medium', sources: [TB, SITE, PR, R + 'B487097725/', R + 'B528513024/', R + 'B530975883/', R + 'B532253845/', R + 'B532376343/', R + 'B532865421/', R + 'B534243431/', R + 'B535115785/', R + 'B537457203/', R + 'B538546089/'] },
    cultural_comfort: { level: 'english', note: 'English menu and staff; ¥550 charge; open until 1 a.m.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清本町354 KYOTO GION HOTEL 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004888, 135.775274); cross-checked: GSI 京都府京都市東山区清本町354番地 (lot) 8m; nearest existing pin kyoto_gion_sushi_taku 17 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B538546089/'],
    price_note: 'No menu read; charges from Tabelog; glass price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Truffle daikon', '', 'À la carte', 'ask', 'ask', '2026; price not given.', 'truffle_daikon'),
      it('', '', 'Wine by the glass, from', '¥900', 'Wine', '', '', 'October 2026.', 'glass_wine'),
      it('', '', 'Table charge', '¥550', 'Charges', '', '', 'Tabelog.', 'table_charge'),
    ] }, {
    cuisine: 'ソムリエが立つ長いカウンターの深夜のワインビストロ。好みに合わせてワインを選び、グラスは900円から (2026年の口コミ)・定番のアラカルトと日替わり: 名物のトリュフ大根、前菜の盛り合わせ (祇園の明太子、Ufo Mayo、Ezo の鹿のシチュー)、本日のステーキ、A5の和牛、ロッシーニ、本日のパスタ (太麺の冷製パスタ、松茸と秋刀魚のパスタ) (2026年の口コミ)・深夜でもコース (2026年7月)・ノンアルコールも豊富 (2026年の口コミ)',
    neighborhood: '祇園の花見小路。京阪祇園四条駅から徒歩5分',
    gf_detail: '要確認。ビストロの皿、ステーキ、ロッシーニ、本日のパスタ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。肉と魚のビストロ、和牛、鹿のシチュー、フォアグラのロッシーニ、明太子 (2026年の口コミ)。',
    notes: '[ワインビストロ・祇園花見小路、深夜1時まで] 銀座の PLEIN グループの東京外初の店。花見小路のホテル1階の落ち着いたカウンタービストロで、深夜1時まで。ソムリエがグラス900円から注ぎ、好みに合わせてペアリングも。名物のトリュフ大根、前菜の盛り合わせ、ロッシーニ、ステーキ、本日のパスタ、遅い時間もコースあり。チャージ550円、日曜休み。',
  });
}

// ================================================================ 京都モダンテラス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26026808/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://store.tsite.jp/kyoto-okazaki/floor/shop/kyoto-modern-terrace/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_modern_terrace_okazaki', name: '京都モダンテラス (Kyoto Modern Terrace)', category: 'OMNI',
    lat: 35.014011, lng: 135.781569, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Western-Japanese lunch courses and plates — soufflé-omelette hayashi rice, pasta, shio-koji fried chicken, fried items with cheese — and cakes; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A spaghetti with twelve vegetables is on the menu, but nothing is described as plant-only (October 2026).',
    hours_raw: '11:00–22:00 daily (food L.O. 20:00, drinks 21:00); lunch menu from 11:00, café from 15:00, dinner from 17:00; hours may change for private hire; irregular closures; shorter hours over New Year (Tabelog). Reservations for indoor seats only — lunch course only at lunch; the terrace only for the beer-terrace plan to the end of September (Tabelog). Queues at peak times: take a numbered ticket and get a phone call (September 2026). Cards, e-money and QR accepted (Tabelog). 160 seats indoors and on the terrace; pets welcome (Tabelog). Non-smoking, including the terrace (Tabelog). Free Wi-Fi; wheelchair accessible; children welcome (Tabelog). Second floor of the ROHM Theatre Kyoto Park Plaza in Okazaki, about 10 min from Higashiyama Stn (Tabelog). Opened 10 January 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki, ROHM Theatre Kyoto — 10 min from Higashiyama Stn',
    cuisine: 'Spacious café-restaurant of Western-Japanese dishes, high ceilings and a terrace in ROHM Theatre Kyoto (2026 reviews) · Modern Terrace lunch course: three appetizers, grilled seafood pasta, dessert (October 2026) · soufflé-omelette hayashi rice; spaghetti with twelve vegetables; fried chicken with shio-koji and tomato sauce (October 2026) · fried dishes with cheese (September 2026) · wagashi from 亀屋良長 for dessert (October 2026) · café from 15:00; wine and drinks (Tabelog; 2026 reviews)',
    website: SITE, gmaps: gm('京都モダンテラス'), menu_url: null,
    notes: '[Café-restaurant · Okazaki, a grand room in ROHM Theatre] A big, high-ceilinged café-restaurant above the ROHM Theatre Kyoto plaza in Okazaki, with green walls and a terrace where dogs are welcome. Lunch is Western-Japanese — a puffed soufflé omelette over hayashi rice, vegetable spaghetti, shio-koji fried chicken — and you can finish with wagashi from 亀屋良長. Handy before a show at the theatre or after Heian Shrine; expect a numbered queue at peak times.',
    chef_bio: { chef_name: null, roles: ['Kitchen (unnamed); listed on the Kyoto Okazaki T-SITE floor guide'], origin: null,
      background: 'Tabelog gives the opening as 10 January 2016; the shop page sits on the T-SITE floor guide for the ROHM Theatre building.',
      philosophy: null, specialty: 'Soufflé-omelette hayashi rice.',
      anecdotes: [
        { text: 'A September 2026 visitor took a numbered ticket at 2 p.m., waited outside, and was called by phone when a table was ready.', source: R + 'B535962194/' },
        { text: 'An October 2026 diner watched the soufflé omelette arrive puffed up and fall flat almost at once.', source: R + 'B538084928/' },
      ],
      japanese_sources_summary: '食べログ: 京都モダンテラス、カフェ・洋食・日本料理、左京区岡崎最勝寺町13 ロームシアター京都パークプラザ2F、東山駅1番出口から徒歩約10分、毎日11:00〜22:00 (フードL.O.20:00、ドリンクL.O.21:00)、ランチは11時、カフェは15時、ディナーは17時から、不定休、予約は店内席のみ (昼はランチコースのみ)、テラスは9月末までビアテラスのプランのみ、カード・電子マネー・QR可、160席、禁煙、Wi-Fi、車椅子可、子ども・ペット可、2016年1月10日オープン。口コミ (2026年、英語): スフレオムハヤシ、12種の野菜のスパゲッティ、塩麹の唐揚げとトマトソース、モダンテラスランチコース、亀屋良長の和菓子、整理券と電話の呼び出し。',
      confidence: 'medium', sources: [TB, SITE, R + 'B138262384/', R + 'B535962194/', R + 'B536265923/', R + 'B536468391/', R + 'B536571166/', R + 'B537323437/', R + 'B537485632/', R + 'B537988982/', R + 'B538084928/', R + 'B538554075/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Numbered-ticket queue with a phone call; wheelchair accessible; pets on the terrace.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎最勝寺町13 ロームシアター京都パークプラザ 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.014011, 135.781569); cross-checked: GSI 京都府京都市左京区岡崎最勝寺町13番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538554075/', R + 'B537485632/'],
    price_note: 'No menu or prices read; Tabelog averages ¥2,000–3,999.', last_checked: TODAY, items: [
      it('', '', 'Modern Terrace lunch course (appetizers, seafood pasta, dessert)', '', 'Lunch', 'no', 'no', 'October 2026; price not given.', 'lunch_course'),
      it('', '', 'Soufflé-omelette hayashi rice', '', 'Mains', 'ask', 'no', 'October 2026; price not given.', 'souffle_omu_hayashi'),
    ] }, {
    cuisine: 'ロームシアター京都の、天井の高い広々とした洋食のカフェレストラン、テラスもある (2026年の口コミ)・モダンテラスランチコース: 前菜3種、魚介のグリルのパスタ、デザート (2026年10月)・スフレオムハヤシ、12種の野菜のスパゲッティ、塩麹の唐揚げのトマトソース (2026年10月)・チーズのきいた揚げ物 (2026年9月)・デザートに亀屋良長の和菓子 (2026年10月)・15時からはカフェ、ワインなど (食べログ、2026年の口コミ)',
    neighborhood: '岡崎、ロームシアター京都。東山駅から徒歩10分',
    gf_detail: '要確認。洋食のランチコースと皿 (スフレオムハヤシ、パスタ、塩麹の唐揚げ、チーズの揚げ物) とケーキ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。12種の野菜のスパゲッティがあるが、植物性のみと書かれた品はない (2026年10月)。',
    notes: '[カフェレストラン・岡崎、ロームシアターの大空間] 岡崎のロームシアター京都の広場の上、天井の高い大きなカフェレストラン。緑の壁と犬も入れるテラス。昼は洋食で、ふわりと膨らむスフレオムレツのハヤシライス、野菜のスパゲッティ、塩麹の唐揚げ、締めに亀屋良長の和菓子も。観劇の前や平安神宮の帰りに便利。混む時間は整理券で呼び出し。',
  });
}

save();
