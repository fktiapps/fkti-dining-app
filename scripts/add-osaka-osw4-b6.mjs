// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 6.
//   + ライブ焼肉 てんぐ 千日前店 Live Yakiniku Tengu Sennichimae (meat cut to order, big portions, until 05:00; since 2024)
//   + ムカカ mukaka (straw-grilled izakaya with Italian dishes in Shinmachi; the boxed "Mukamori" platter)
//   + 心斎橋焙煎所 Shinsaibashi Baisenjo (roastery café by Shinsaibashi Stn, with taiyaki and chiffon cake; since 2015)
//   + 焼肉 優駿 Yakiniku Yushun (black-wagyu tongue, harami and horumon in Minamisenba)
//   - skip 京風鉄板 はせ川 27017335: one of six shops of 株式会社はせ川; 寿司 はせ川 心斎橋本店 is in data
//     (osaka_sushi_hasegawa_shinsaibashi, chef_bio.background "6 shops and about 100 staff: 寿司はせ川 心斎橋本店,
//     京風鉄板 はせ川 and BAR HASEGAWA in the same block, …").
//   Chain check: Tengu has three shops (西中島 main shop, 京橋 and this one; August 2026 review; Tabelog 27137529 for the
//   main shop), none in data. Mukaka: one shop. Baisenjo is run by Garden Bar & Coffee Japan, which also runs Welcome the
//   Coffee (official site); the taiyaki and chiffon counters downstairs share the building (2026 reviews). Yushun: one
//   shop. None of the four is in data/osaka.json (grep by name, Tabelog id and address, 2026-11-01).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27017335', '京風鉄板 はせ川: one of six shops of 株式会社はせ川; 寿司 はせ川 心斎橋本店 already in data (osaka_sushi_hasegawa_shinsaibashi) — chain in data');

// ================================================================ ライブ焼肉 てんぐ 千日前店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27140395/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '05:00']), S = day(['17:00', '24:00']);
  put({
    id: 'osaka_live_yakiniku_tengu_sennichimae', name: 'ライブ焼肉 てんぐ 千日前店 (Live Yakiniku Tengu Sennichimae)', category: 'OMNI',
    lat: 34.666214, lng: 135.504336, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Meat comes with sauce or salt, the dipping sauces include a ponzu-like sauce and a soy sauce (July 2026), and the menu has cold noodles and kimchi; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku menu of beef cuts, horumon and raw-meat dishes; kimchi, oi kimchi and coleslaw are the plant dishes mentioned.',
    hours_raw: 'Mon–Sat 17:00–05:00 (last order 04:00); Sun and holidays 17:00–24:00 (last order 23:00); closed irregularly (Tabelog). Reservations accepted; booked guests sit at tables upstairs and walk-ins at the counter downstairs (August 2026); a 90-minute stay (May 2026). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 50 seats: an L-shaped counter on 1F, where the meat is cut in front of you, and tables on 2F; non-smoking (Tabelog; 2026 reviews). Opened 22 February 2024 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 2-7-19, under a giant tengu sign — 3 min (180 m) from Nippombashi Stn',
    cuisine: 'Yakiniku "live": meat chosen daily by experienced buyers and cut to order, in portions 1.5 times a usual yakiniku shop\'s, with Special A rank rice (Tabelog shop text) · prices in August 2026 (one diner\'s list): daily special plate ¥500, napa-cabbage kimchi ¥385, tendon ponzu ¥770, lean beef with wasabi ¥2,200, yukke ¥2,200, premium harami with sauce ¥2,420, half salted heart ¥1,045, half premium mino ¥1,045, cold noodles ¥1,320, draft beer ¥605, oolong tea ¥605, highball ¥550 · another August 2026 diner paid ¥1,500 for yukke and ¥900 for namasen, and ¥2,500 for a tongue platter of premium and hanasaki tongue · tongue assortments of three kinds, salted tongue, kalbi, loin, heart sashimi, fresh liver (2026) · rice in sizes up to a "manga" heap · a free hojicha ice-cream monaka after the meal (August–September 2026)',
    website: null, gmaps: gm('ライブ焼肉 てんぐ 千日前店'), menu_url: null,
    notes: '[Yakiniku · Sennichimae, until 5 a.m.] A yakiniku house under a giant tengu sign between Namba and Nippombashi, where staff cut each order of meat at the counter and the portions run 1.5 to 2 times the usual. The tongue is the order: a platter of several kinds, salted, with the harami, mino and a yukke. Book for a table upstairs, or walk in for the downstairs counter and watch the knife work; stays are 90 minutes. Open until 5 a.m. six nights a week. A free ice-cream monaka ends the meal. Diners in 2026 paid about ¥5,000–10,000 a head; two August 2026 diners report different yukke prices (¥2,200 and ¥1,500). Many guests were visitors from overseas (August 2026).',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop text: meat chosen each day by experienced professionals, cut to order and served fresh, in portions over 1.5 times a typical yakiniku restaurant\'s, with Special A rank rice. An August 2026 diner lists sister shops in Nishinakajima-Minamigata (the main shop) and Kyobashi. Opened 22 February 2024.', philosophy: '"Seeing our customers happy and enjoying their meals is our motivation!" (Tabelog shop text).', specialty: 'Tongue platter; meat cut to order.',
      anecdotes: [
        { text: '"The portion size for one person is about 1.5 times that of a typical yakiniku restaurant … The staff cuts the meat fresh after taking your order" — August 2026.', source: R + 'B532935452/' },
        { text: '"Hanatakakumori (Premium Tongue & Hanazaki Tongue) @ JPY 2,500 … There were six thick slices" — August 2026.', source: R + 'B533657704/' },
        { text: '"Given its location in Nihonbashi, the clientele is mostly international visitors." — August 2026.', source: R + 'B533641867/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ライブ焼肉 てんぐ 千日前店、焼肉・ホルモン・居酒屋、大阪市中央区千日前2-7-19、日本橋駅から徒歩3分 (180m)、月〜土17:00〜翌5:00 (L.O. 4:00)、日・祝17:00〜24:00 (L.O. 23:00)、不定休、予約可、カード・PayPay 可、50席、禁煙、毎日目利きが選ぶ肉を注文ごとに切る、普通の焼肉店の1.5倍以上の量、特Aランクの米、2024年2月22日オープン。口コミ(2026年5月〜10月): 1階は L 字のカウンターで目の前で肉を切る、2階はテーブル、予約は2階で飛び込みはカウンター、90分制、巨大なてんぐの看板、タン盛り、上ハラミ、ユッケ (2,200円と1,500円の口コミ)、ハツ刺し、レバー、冷麺、量の多い「Manga」盛りのご飯、食後にほうじ茶アイスのモナカのサービス、海外の客が多い、西中島の本店と京橋にも店。',
      confidence: 'medium', sources: [TB, R + 'B527522717/', R + 'B532626743/', R + 'B532755762/', R + 'B532935452/', R + 'B532970152/', R + 'B533030505/', R + 'B533584391/', R + 'B533641867/', R + 'B533657704/', R + 'B534004214/', R + 'B534289793/', R + 'B535661980/', R + 'B535700403/', R + 'B536786244/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte yakiniku; staff explain the cuts (August 2026); many overseas customers (August 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前2-7-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前二丁目7番19号 (go) 7m. No other record in data within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533030505/', R + 'B533657704/'],
    price_note: 'Prices from two August 2026 reviews; they disagree on the yukke (¥2,200 in one, ¥1,500 in the other), and both prices are recorded.', last_checked: TODAY, items: [
      it('', '', 'Yukke', '¥2,200', 'Raw', 'ask', 'no', 'August 2026 review (B533030505); ¥1,500 in another August 2026 review (B533657704).', 'yukke'),
      it('', '', 'Tongue platter: premium and hanasaki tongue', '¥2,500', 'Meat', 'ask', 'no', 'August 2026 review.', 'tongue_platter'),
      it('', '', 'Premium harami with sauce', '¥2,420', 'Meat', 'ask', 'no', 'August 2026 review.', 'premium_harami'),
      it('', '', 'Lean beef with wasabi', '¥2,200', 'Meat', 'ask', 'no', 'August 2026 review.', 'lean_wasabi'),
      it('', '', 'Cold noodles', '¥1,320', 'Noodles', 'no', 'no', 'August 2026 review.', 'reimen'),
      it('', '', 'Napa-cabbage kimchi', '¥385', 'Sides', 'ask', 'ask', 'August 2026 review.', 'kimchi'),
    ] }, {
    cuisine: '「ライブ」の焼肉: 目利きが毎日選ぶ肉を注文ごとに切り、量は普通の焼肉店の1.5倍、米は特Aランク (食べログの店の紹介)・2026年8月の値段 (ひとりの口コミ): 日替わりの一皿500円、白菜キムチ385円、すじポン酢770円、赤身のわさび2,200円、ユッケ2,200円、上ハラミ (タレ) 2,420円、塩ハツのハーフ1,045円、上ミノのハーフ1,045円、冷麺1,320円、生ビール605円、ウーロン茶605円、ハイボール550円・2026年8月の別の口コミではユッケ1,500円、namasen 900円、上タンと hanasaki のタンの盛り合わせ2,500円・3種のタン盛り、塩タン、カルビ、ロース、ハツ刺し、生レバー (2026年)・ご飯は量を選べて「Manga」盛りまで・食後にほうじ茶アイスのモナカのサービス (2026年8〜9月)',
    neighborhood: '千日前2-7-19、巨大なてんぐの看板の下。日本橋駅から徒歩3分 (180m)',
    gf_detail: '要確認。グルテンの情報なし。肉はタレか塩で、つけダレはポン酢のようなものと醤油 (2026年7月)、冷麺やキムチもある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。牛肉、ホルモン、生の肉料理の焼肉。植物性のものはキムチ、オイキムチ、コールスローくらい。',
    notes: '[焼肉・千日前、朝5時まで] なんばと日本橋の間、巨大なてんぐの看板の下の焼肉店。注文ごとにカウンターで肉を切り、量は普通の1.5〜2倍。頼むならタンで、何種類かの盛り合わせ、塩タン、それにハラミ、ミノ、ユッケ。予約すれば2階のテーブル、予約なしなら1階のカウンターで包丁さばきを見ながら。滞在は90分。週6日は朝5時まで。食後はアイスのモナカのサービス。2026年はひとり5,000〜10,000円ほど。2026年8月の2つの口コミでユッケの値段が違う (2,200円と1,500円)。海外の客が多かった (2026年8月)。',
  });
}

// ================================================================ ムカカ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27111447/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '22:30']), WE = day(['15:00', '22:30']);
  put({
    id: 'osaka_mukaka_shinmachi', name: 'ムカカ (mukaka)', category: 'OMNI',
    lat: 34.678116, lng: 135.496128, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Straw- and charcoal-grilled meat and fish come with soy-based condiments, and the menu also has pasta, pizza and fried horse mackerel; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the menu is built on straw-grilled bonito, chicken and beef and a meat-heavy appetiser platter.',
    hours_raw: 'Mon–Fri 17:00–22:30; Sat, Sun and holidays 15:00–22:30; closed irregularly; hours may be cut short when dishes sell out, so call ahead (Tabelog). Reservations recommended, with a two-hour limit; a booking is cancelled at 10 minutes late without a call; tell the staff in advance about children (Tabelog; 2026 reviews). Service charge ¥250 a person (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 28 seats: a counter of 6 and tables; non-smoking, though the room fills with smoke from the smoking and straw grilling (Tabelog; September 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-11-11, スカイハイツSAWA 1F — 5 min from Nishi-Ohashi, Yotsubashi or Honmachi stations',
    cuisine: 'Izakaya of straw-grilled (wara-yaki) and charcoal-grilled meat and fish by a chef from a popular restaurant, with a few Italian dishes (Tabelog shop text) · the Mukamori: a boxed assortment of more than ten appetisers for at least two, e.g. smoked potato salad and grilled chicken skirt, with smoked items, dried fruit and nuts (2025–2026 reviews) · straw-grilled bonito (also wabi katsuo) with green onion, wasabi, sprouts and garlic chips · straw-grilled chicken and beef · chicken neck, fried horse mackerel · margherita pizza, clam and aosa pasta · course from ¥3,000 for four or more, with free drinks for ¥2,000 more (Tabelog) · beer, highballs, whole-lemon sour, sake, shochu, wine',
    website: null, gmaps: gm('ムカカ 新町'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Shinmachi, straw fire and a box of small plates] A busy, smoky izakaya in Shinmachi where a chef who came from a popular restaurant grills meat and fish over burning straw and charcoal, and adds a little Italian. Everyone orders the Mukamori, a wooden box of more than ten small appetisers for at least two, which is enough to fill two people on its own, so share it and add only the straw-grilled bonito, a pasta or a pizza. Book ahead (stays are two hours); weekends open at 15:00. Expect ¥4,000–6,000 a head plus a ¥250 service charge.',
    chef_bio: { chef_name: null, roles: ['Chef who worked at a popular restaurant, unnamed (Tabelog shop text)'], origin: null, background: 'Per the Tabelog shop text: straw-grilled and charcoal-grilled dishes by a chef who worked at a popular restaurant; quick straw smoking adds aroma to meat and fish; a few Italian dishes; seasonal recommendations and the day\'s fish grilled over straw.', philosophy: null, specialty: 'Mukamori appetiser box; straw-grilled bonito.',
      anecdotes: [
        { text: '"The Mukaka Assortment was truly generous in portion size, packed with over 10 types of appetizers in a wooden box." — September 2026.', source: R + 'B536074933/' },
        { text: '"The grilled bonito had a wonderful aroma from the straw grilling, and I could enhance the flavors with toppings like green onions, wasabi, sprouts, and garlic chips." — October 2026.', source: R + 'B514104009/' },
        { text: '"I visited for an early dinner, and the 3 PM opening time was a great help." — August 2026.', source: R + 'B534632635/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ムカカ (mukaka)、居酒屋・イタリアン・創作料理、大阪市西区新町1-11-11 スカイハイツSAWA 1F、西大橋駅2番出口、本町駅23番出口、四ツ橋駅2番出口から徒歩5分、月〜金17:00〜22:30、土・日・祝15:00〜22:30、不定休、売り切れで早く閉めることも、予約は2時間制、10分遅れて連絡がなければ取り消し、子ども連れは事前に、サービス料1名250円、カード・PayPay 可、28席 (カウンター6、テーブル22)、禁煙、人気店出身の料理人の藁焼きと炭火焼き、イタリアンも少し、名物「Mukamori」、4名からの3,000円のコース (飲み放題は2,000円追加)。口コミ(2025年9月〜2026年10月): 10種以上の前菜の木箱の盛り合わせは2人前からで量が多い、燻製のポテトサラダ、鶏のハラミ、藁焼きの鰹、ピザ、パスタ、煙が多い、予約は必須。',
      confidence: 'medium', sources: [TB, R + 'B514104009/', R + 'B534138017/', R + 'B534578735/', R + 'B534632635/', R + 'B534917403/', R + 'B535148769/', R + 'B535175799/', R + 'B535774944/', R + 'B536074933/', R + 'B536306427/', R + 'B536596127/', R + 'B537325072/', R + 'B537416131/', R + 'B537440014/', R + 'B537813651/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead for a two-hour table; the Mukamori platter is an easy first order (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-11-11 スカイハイツSAWA 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目11番11号 (go) 10m. No other record in data within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Only the course price is published on Tabelog (¥3,000 for four or more, free drinks +¥2,000); à la carte prices not seen.', last_checked: TODAY, items: [
      it('', '', 'Mukamori (boxed appetiser assortment, two people minimum)', '', 'Appetisers', 'ask', 'no', '2025–2026 reviews.', 'mukamori'),
      it('', '', 'Straw-grilled bonito', '', 'Grill', 'ask', 'no', '2026 reviews.', 'wara_katsuo'),
      it('', '', 'Course of straw-grilled dishes (four or more)', '¥3,000', 'Course', 'ask', 'no', 'Tabelog; free drinks +¥2,000.', 'course_3000'),
      it('', '', 'Margherita pizza', '', 'Italian', 'no', 'no', 'August 2026 review.', 'margherita'),
    ] }, {
    cuisine: '人気店出身の料理人の藁焼きと炭火焼きの肉と魚の居酒屋、イタリアンも少し (食べログの店の紹介)・Mukamori: 10種以上の前菜の木箱で2人前から、たとえば燻製のポテトサラダ、鶏のハラミの炭火焼き、燻製、ドライフルーツ、ナッツ (2025〜2026年の口コミ)・ネギ、わさび、スプラウト、ガーリックチップで食べる鰹の藁焼き (wabi katsuo も)・鶏と牛の藁焼き・せせり、アジフライ・マルゲリータ、大あさりと aosa のパスタ・4名から3,000円のコース、飲み放題は2,000円追加 (食べログ)・ビール、ハイボール、丸ごとレモンサワー、日本酒、焼酎、ワイン',
    neighborhood: '新町1-11-11 スカイハイツSAWA 1階。西大橋、四ツ橋、本町の各駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。藁焼きや炭火焼きの肉と魚には醤油ベースの薬味がつき、パスタ、ピザ、アジフライもある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。鰹、鶏、牛の藁焼きと、肉の多い前菜の盛り合わせが中心。',
    notes: '[居酒屋・新町、藁の火と小皿の木箱] 新町のにぎやかで煙たい居酒屋で、人気店出身の料理人が藁と炭火で肉や魚を焼き、イタリアンも少し添える。みんなが頼むのは「Mukamori」、10種以上の前菜を詰めた木箱で2人前から。これだけで2人でおなかいっぱいになるので、分け合って、あとは鰹の藁焼き、パスタかピザを足すくらいで。予約を (2時間制)。週末は15時から。ひとり4,000〜6,000円ほどにサービス料250円。',
  });
}

// ================================================================ 心斎橋焙煎所
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27083267/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://roasters-coffee.com/';
  put({
    id: 'osaka_shinsaibashi_baisenjo', name: '心斎橋焙煎所 (Shinsaibashi Baisenjo)', category: 'OMNI',
    lat: 34.674264, lng: 135.499289, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Coffee aside, the food is taiyaki, chiffon cake, Basque cheesecake and pudding; the pudding is the item without obvious flour, but nothing is stated about it.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Black coffee is the plain option; ask about plant milk for lattes. The cakes, pudding and taiyaki fillings use dairy and eggs or are not described.',
    hours_raw: 'Sources disagree on the hours: Tabelog gives daily 9:00–18:30, and a diner came at just after 9:00 on a June 2026 Friday; the official site gives 11:00–19:00. Check before an early or late visit. No reservations (Tabelog). Order downstairs, then sit upstairs; eating in needs one drink each (2026 reviews). Cards (VISA, Master, JCB, AMEX, Diners) for ¥1,000 and over, transport IC and PayPay (Tabelog). 24 seats on the skylit second floor; non-smoking; take-out; children welcome (Tabelog; official site). Opened 15 January 2015 (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-10-1, 1F (café upstairs), off the main street on the Amerikamura side — 137 m from Shinsaibashi Stn',
    cuisine: 'A roastery café: green beans from around the world roasted in front of you, blended by top Japanese baristas, espresso on a CIMBALI machine, a daily drip coffee and flavoured lattes such as caramel macchiato, honey cappuccino and chai mocha (official site) · single origins in 2026, e.g. Rwanda, Brazil Recreio, Colombia Monserrate · café latte ¥550 (September 2026) or ¥650 (October 2026), cold brew ¥750 to take away (August 2026) · Basque cheesecake with cream and rock salt ¥800 (September 2026) · pudding; pumpkin pudding and an apple-caramel upside-down cake in autumn 2026 (official site) · chiffon cakes (Earl Grey, espresso) and taiyaki from the counters in the same building, e.g. Tokachi red bean; breakfast plate of a bacon-cheese taiyaki with salad and a boiled egg (September 2026)',
    website: SITE, gmaps: gm('心斎橋焙煎所'), menu_url: null,
    notes: '[Café · Shinsaibashi, a roastery with taiyaki] A wood-clad roastery with a silver chimney just off the main street by Shinsaibashi Station, roasting beans downstairs and serving them upstairs in a skylit room. Order at the counter, then climb to the second floor; the baristas will suggest beans to your taste, and lattes come with latte art. The building also holds a taiyaki and a chiffon-cake counter, so a coffee comes with a crisp taiyaki, a bacon-cheese taiyaki breakfast plate, an Earl Grey chiffon cake or a salted Basque cheesecake. The two sources differ on hours (Tabelog 9:00–18:30; official site 11:00–19:00), and a latte cost ¥550 in September 2026 and ¥650 in October.',
    chef_bio: { chef_name: null, roles: ['Operator: Garden Bar & Coffee Japan (official site)'], origin: null, background: 'Per the official site: a roastery where green beans chosen from around the world are roasted in front of customers and blended by top Japanese baristas, with a CIMBALI espresso machine and a calm skylit café on the second floor; opened in Shinsaibashi for the many kinds of people who pass through; the operator also runs Welcome the Coffee. Reviewers note that the taiyaki and chiffon cake counters in the same building appear to be run by the same company (2026). Opened 15 January 2015 (Tabelog).', philosophy: 'To let many people know and enjoy the real aroma and taste of coffee (official site, translated).', specialty: 'House-roasted coffee; taiyaki and chiffon cake with coffee.',
      anecdotes: [
        { text: '"I mentioned that I\'m not a fan of bitter coffee, and the staff recommended the Rwandan iced coffee. It had a refreshing acidity" — October 2026, with an espresso chiffon cake.', source: R + 'B537145718/' },
        { text: '"A business card-sized paper explaining that today\'s coffee is from the Colombia Monserrate region was attached" — August 2026, a ¥750 cold brew to take away.', source: R + 'B534363504/' },
        { text: '"You secure a seat on the 2nd floor and then place your order on the 1st floor." — June 2026, just after 9 AM on a Friday.', source: R + 'B530259295/' },
      ],
      japanese_sources_summary: '公式サイト (ガーデンバール＆コーヒージャパン): 心斎橋焙煎所、木の壁から銀色の煙突が突き出た外観、店内の焙煎機、目の前で焼き上げるコーヒー豆、国内トップクラスのバリスタのブレンドの自家焙煎の豆、世界中から厳選した生豆、ラテアート、CIMBALI のエスプレッソマシン、日替わりのドリップコーヒー、キャラメルマキアート・蜂蜜カプチーノ・チャイモカなどのフレーバーラテ、2階は天窓の自然光の落ち着いたカフェ、OPEN 11:00〜CLOSE 19:00、大阪市中央区西心斎橋1-10-1、2026年秋のかぼちゃプリン、林檎とキャラメルのアップサイドダウンケーキ、Welcome the Coffee も運営。食べログ: 毎日9:00〜18:30、予約不可、カードは1,000円以上、交通系IC・PayPay 可、24席、禁煙、テイクアウト、2015年1月15日オープン。口コミ(2026年6月〜10月): 1階で注文して2階の席へ、イートインはワンドリンク、たい焼きとシフォンケーキの店と同じ建物、ベーコンチーズたい焼きのモーニング、バスクチーズケーキ800円、カフェラテ550円 (2026年9月) と650円 (2026年10月)、コールドブリュー750円、ルワンダ、海外の客も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B451116839/', R + 'B530072612/', R + 'B530259295/', R + 'B531922134/', R + 'B532931813/', R + 'B533954165/', R + 'B533975504/', R + 'B534363504/', R + 'B535175174/', R + 'B535709532/', R + 'B536136609/', R + 'B536438323/', R + 'B536534075/', R + 'B537145718/', R + 'B537838660/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter downstairs; baristas suggest beans to your taste (2026); many overseas visitors (June 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-10-1 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news dated October 2026) and Tabelog listing (not shop-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目10番1号 (go) 8m. PANAME CREPES DE PARIS (osaka_paname_crepes_de_paris, address_ja "西心斎橋1-10-41") is 6 m away at a different house number, so both stay; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B451116839/', R + 'B537838660/', R + 'B534363504/'],
    price_note: 'Prices from 2026 reviews; the café latte was ¥550 in September 2026 and ¥650 in October 2026, both recorded.', last_checked: TODAY, items: [
      it('', '', 'Café latte (hot)', '¥650', 'Coffee', 'ask', 'ask', 'October 2026 review; ¥550 in September 2026.', 'cafe_latte'),
      it('', '', 'Cold brew coffee', '¥750', 'Coffee', 'ask', 'ask', 'August 2026 review (take-away).', 'cold_brew'),
      it('', '', 'Basque cheesecake with cream and rock salt', '¥800', 'Sweets', 'no', 'no', 'September 2026 review.', 'basque_cheesecake'),
      it('ベーコンチーズたい焼き', '', 'Bacon-cheese taiyaki breakfast plate with salad and a boiled egg', '', 'Breakfast', 'no', 'no', 'September 2026 reviews.', 'bacon_cheese_taiyaki'),
      it('かぼちゃプリン', '', 'Pumpkin pudding (autumn 2026)', '', 'Sweets', 'ask', 'no', 'Official site, October 2026.', 'pumpkin_pudding'),
    ] }, {
    cuisine: '焙煎所のカフェ: 世界中から厳選した生豆を目の前で焙煎し、国内トップクラスのバリスタがブレンド、CIMBALI のエスプレッソマシン、日替わりのドリップ、キャラメルマキアート、蜂蜜カプチーノ、チャイモカなどのフレーバーラテ (公式サイト)・2026年のシングルオリジン、たとえば Rwanda、Brazil Recreio、Colombia Monserrate・カフェラテ550円 (2026年9月) か650円 (2026年10月)、持ち帰りのコールドブリュー750円 (2026年8月)・クリームと岩塩のバスクチーズケーキ800円 (2026年9月)・プリン、2026年秋はかぼちゃプリンと林檎とキャラメルのアップサイドダウンケーキ (公式サイト)・同じ建物のシフォンケーキ (アールグレイ、エスプレッソ) とたい焼き、たとえば Tokachi の小豆、ベーコンチーズたい焼きにサラダとゆでたまごのモーニング (2026年9月)',
    neighborhood: '西心斎橋1-10-1 1階 (カフェは2階)、アメリカ村側の通りを少し入ったところ。心斎橋駅から137m',
    gf_detail: '要確認。グルテンの情報なし。コーヒー以外はたい焼き、シフォンケーキ、バスクチーズケーキ、プリン。小麦が目立たないのはプリンだが、説明はない。',
    vegan_detail: '要確認。ヴィーガンの情報なし。ブラックコーヒーがシンプルな選択肢で、ラテの植物性ミルクは聞いてみて。ケーキ、プリン、たい焼きの中身は乳製品や卵を使うか、説明がない。',
    notes: '[カフェ・心斎橋、たい焼きのある焙煎所] 心斎橋駅近く、大通りから少し入った、銀色の煙突が出た木の外観の焙煎所。1階で豆を焼き、天窓のある2階で飲む。カウンターで注文して2階へ。バリスタが好みに合わせて豆を選んでくれ、ラテにはラテアート。同じ建物にたい焼きとシフォンケーキのカウンターもあり、コーヒーにパリパリのたい焼き、ベーコンチーズたい焼きのモーニング、アールグレイのシフォン、塩をそえたバスクチーズケーキを。営業時間は情報源で違い (食べログ9:00〜18:30、公式サイト11:00〜19:00)、ラテは2026年9月が550円、10月は650円。',
  });
}

// ================================================================ 焼肉 優駿
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27107519/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_yakiniku_yushun_minamisenba', name: '焼肉 優駿 (Yakiniku Yushun)', category: 'OMNI',
    lat: 34.678021, lng: 135.498033, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Much of the meat is eaten with salt or sesame salt, but there is a house sauce and a miso sauce, and the menu has cold noodles and tail soup; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a black-wagyu yakiniku menu of tongue, harami and horumon; kimchi and namul assortments are the plant dishes mentioned.',
    hours_raw: 'Mon, Tue and Thu–Sun 17:00–23:00 (last order 22:30); closed Wednesday (Tabelog). Reservations accepted; call for same-day bookings; booked out on some weekday nights (Tabelog; 2026 reviews). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), PayPay and Alipay; no e-money (Tabelog). 48 seats: mostly counter on 1F, tables on 2F for groups up to 35; non-smoking; sports viewing; free Wi-Fi; children and strollers welcome (Tabelog; July 2026 review).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minamisenba 4-14-1, 南船場センター 1F–2F — 5 min from Shinsaibashi Stn (Crysta Nagahori exit 12 north)',
    cuisine: 'Yakiniku of selected black wagyu: wagyu-only tongue and harami with a homemade sauce, and fresh wagyu horumon (Tabelog shop text) · black-wagyu special salted tongue, six large slices (July 2026); assorted tongue of premium salted, thick-cut and tongue cheek · special and premium harami, tsurami, chateaubriand, special fillet, loin · thin-sliced chuck-eye roll with salt and garlic, eaten with sesame salt · beef-tongue sashimi, raw omasum, omasum sashimi with miso sauce · salted horumon assortment, toro tetchan, mino, akasen, tail · kimchi and namul assortments, salad · tail soup, cold noodles, rice in small, medium or large',
    website: null, gmaps: gm('焼肉 優駿 南船場'), menu_url: null,
    notes: '[Yakiniku · Minamisenba, black-wagyu tongue and horumon] A two-floor yakiniku room in Minamisenba, counter downstairs under signed memorabilia that a July 2026 diner took for signatures of baseball players, tables upstairs, that buys selected black wagyu for its tongue and harami and serves a long list of fresh wagyu horumon. Diners point to the special salted tongue, the tsurami and harami, and the thin chuck-eye roll eaten with sesame salt; the sauces are light. Book, even on weekdays, and expect ¥6,000–15,000 a head in 2026. Closed Wednesdays.',
    chef_bio: { chef_name: null, roles: ['Operator named in a July 2026 review: "Louis Valiant Co., Ltd., led by Nagisa Asai as the General Manager" (not checked elsewhere)'], origin: null, background: 'Per the Tabelog shop text: carefully selected black-haired wagyu, wagyu only for the tongue and harami, a homemade sauce, fresh wagyu horumon; second-floor tables for banquets of up to 35. A July 2026 diner saw signed memorabilia, apparently of baseball players, above the first-floor counter.', philosophy: null, specialty: 'Black-wagyu special salted tongue; wagyu horumon.',
      anecdotes: [
        { text: '"This restaurant seems to favor salt-based sauces, and the staff recommended enjoying the meat with sesame salt." — July 2026, a same-day booking on a business trip.', source: R + 'B531910963/' },
        { text: '"I highly recommend the \'Special Salted Tongue of Black-haired Wagyu.\' … You get a satisfying portion of six large pieces." — July 2026.', source: R + 'B532468895/' },
        { text: '"The liver here is particularly delicious—I ordered two plates." — April 2026, a fifth visit.', source: R + 'B463511423/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 焼肉 優駿、焼肉・ホルモン・居酒屋、大阪市中央区南船場4-14-1 南船場センター1・2F、心斎橋駅からクリスタ長堀12番出口北へ徒歩5分、本町駅から7分ほど、月・火・木〜日17:00〜23:00 (L.O. 22:30)、水曜休み、予約可、当日は電話で、カード (銀聯も)・PayPay・Alipay 可、48席、2階のテーブルは35名まで、禁煙、スポーツ観戦、無料 Wi-Fi、子ども・ベビーカー可、厳選した黒毛和牛、タンとハラミは和牛のみ、自家製のタレ、新鮮な和牛ホルモン。口コミ(2026年4月〜10月): 黒毛和牛の特上塩タン6枚、タン盛り、tsurami、ハラミ、シャトーブリアン、ロース、ゴマ塩で食べるリブ芯の薄切り、タン刺し、センマイ刺しと味噌ダレ、塩ホルモン盛り、テールスープ、冷麺、1階のカウンターの上に野球選手らしいサイン、タレは軽め、平日でも予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B463511423/', R + 'B531725529/', R + 'B531865930/', R + 'B531910963/', R + 'B532468895/', R + 'B533072718/', R + 'B533476361/', R + 'B533734394/', R + 'B534425162/', R + 'B536242067/', R + 'B537169233/', R + 'B538350593/', R + 'B538446186/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte yakiniku; staff suggest how to season each cut (July 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-14-1 南船場センター 1F・2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目14番1号 (go) 5m. No other record in data within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532468895/', R + 'B536242067/'],
    price_note: 'No prices seen in the sources read; items from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Black-wagyu special salted tongue (six slices)', '', 'Meat', 'ask', 'no', 'July 2026 review.', 'special_salt_tongue'),
      it('', '', 'Thin-sliced chuck-eye roll with salt and garlic (sesame salt)', '', 'Meat', 'ask', 'no', 'July 2026 review.', 'zabuton_salt'),
      it('', '', 'Salted horumon assortment', '', 'Horumon', 'ask', 'no', 'July and September 2026 reviews.', 'salt_horumon'),
      it('', '', 'Beef-tongue sashimi', '', 'Raw', 'ask', 'no', 'August–October 2026 reviews.', 'tongue_sashimi'),
      it('', '', 'Tail soup', '', 'Soup', 'ask', 'no', 'August 2026 review.', 'tail_soup'),
    ] }, {
    cuisine: '厳選した黒毛和牛の焼肉: タンとハラミは和牛のみで自家製のタレ、新鮮な和牛ホルモン (食べログの店の紹介)・黒毛和牛の特上塩タン、大きな6枚 (2026年7月)、上塩タン、厚切りタン、タンほほのタン盛り・特上と上のハラミ、tsurami、シャトーブリアン、特上ヒレ、ロース・塩とニンニクの薄切りのリブ芯、ゴマ塩で・タン刺し、生センマイ、味噌ダレのセンマイ刺し・塩ホルモン盛り、toro tetchan、ミノ、akasen、テール・キムチとナムルの盛り合わせ、サラダ・テールスープ、冷麺、ご飯は小、中、大',
    neighborhood: '南船場4-14-1 南船場センター 1階・2階。心斎橋駅 (クリスタ長堀12番出口北) から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。塩やゴマ塩で食べる肉が多いが、店のタレや味噌ダレもあり、冷麺やテールスープもある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。黒毛和牛のタン、ハラミ、ホルモンの焼肉。植物性のものはキムチとナムルの盛り合わせくらい。',
    notes: '[焼肉・南船場、黒毛和牛のタンとホルモン] 南船場の2階建ての焼肉店。1階はカウンターで上には野球選手らしいサインが並び、2階はテーブル。タンとハラミは厳選した黒毛和牛で、新鮮な和牛ホルモンの品数が多い。口コミで挙がるのは特上塩タン、tsuramiとハラミ、ゴマ塩で食べるリブ芯の薄切り。タレは軽め。平日でも予約を。2026年はひとり6,000〜15,000円ほど。水曜休み。',
  });
}

save();
