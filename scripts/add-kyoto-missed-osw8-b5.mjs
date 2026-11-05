// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 5.
//   + 京のむすびめ Kyo no Musubime (obanzai izakaya off Kiyamachi, since 2015; core list)
//   + 京冰菓 あてなるもの Kyo Hyoka Atenaru Mono (seasonal kakigori counter behind a leather shop, Kamo River view; core list)
//   + ベルアメール 京都別邸 Bel Amer Kyoto Bettei (Sanjo chocolate shop and Chocolat Bar, Sweets WEST 100 2026; notable)
//   + 創作中華 一之船入 Sosaku Chuka Ichino Funairi (Chef Wei's creative Chinese in a machiya on the Takase River; notable)
//   Picked 2026-11-05 after batch 4 was integrated: the first two lane-1 ids in `queue.mjs kyoto-missed next core 200`
//   (26025931, 26041099) and in `next notable 200` (26026207, 26002657). None is in data/kyoto.json: grep by name
//   (むすびめ, 冰菓/あてなるもの, ベルアメール/Bel Amer, 一之船入/Funairi) and address (和泉屋町160/162, 桝屋町66,
//   一之船入町537) found none.
//   Group checks (working line): Bel Amer Kyoto Bettei lists two shops on its own site (三条本店 and a counter in
//   JR京都伊勢丹 B1F) and is a brand "born from Chocolat Bel Amer" (review B538284829); no Bel Amer shop is in data,
//   so drafted as a small group — flagged for the integrator. 一之船入's Tabelog page lists two sister shops of other
//   formats (Gohan Iido Sanjo, a Chinese diner; Gohan Gyoza, gyoza and Taiwanese), neither in data.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 京のむすびめ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26025931/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_kyo_no_musubime', name: '京のむすびめ (Kyo no Musubime)', category: 'OMNI',
    lat: 35.000750, lng: 135.769317, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai and izakaya plates seasoned with dashi, soy sauce and miso, plus spring rolls and fried chicken wings; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: the menu centres on fish, sea urchin, chicken and seasonal obanzai, and no vegan dish is named (Tabelog; 2026 reviews).',
    hours_raw: '17:00–24:00 (last order 23:30), every day; closed irregularly (Tabelog). Reservations accepted, confirmed by a call from the shop; booking recommended (July 2026), though walk-ins at opening and later have found seats (July and November 2026). Fresh sea urchin "at cost" needs a reservation (Tabelog). Courses for groups: 7 dishes ¥4,400 (3–16 people) or 9 dishes ¥5,500 (2–16) (Tabelog). A ¥330 charge per person (Tabelog, original text "330"). 20 seats at a counter and a few tables (25 standing); smoking allowed (Tabelog; February 2026). Cards, QUICPay, PayPay and Alipay (Tabelog). English menu (Tabelog). Ground floor of ランブラス館, just off Kiyamachi; 7 min walk from Gion-Shijo (Keihan) and Kawaramachi (Hankyu) stations (Tabelog; July 2026). Opened 15 June 2015 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Just off Kiyamachi south of Shijo — 7 min walk from Gion-Shijo Stn',
    cuisine: 'Home-style Kyoto izakaya of obanzai and seasonal dishes with Kyoto vegetables and fish, cooked in an open kitchen (Tabelog shop text) · obanzai of the day such as eggplant ohitashi and potato salad (November 2026) · scallop potato salad, assorted sashimi, mentaiko chicken wings (May 2026); hamo sashimi (July 2026); meat spring rolls with Saikyo-miso sauce (September 2026); an egg rice to finish (June 2026); warabi mochi (September 2026) · fresh sea urchin at cost, by reservation (Tabelog) · Kyoto sake, with a wide range of Tamagawa from Kinoshita Sake Brewery (Tabelog shop text); umeshu, beer',
    website: null, gmaps: gm('京のむすびめ 京都'), menu_url: TB,
    notes: "[Obanzai izakaya · Kiyamachi, Kyoto home cooking late] A small counter izakaya just off Kiyamachi, open until midnight, where an open kitchen turns out Kyoto obanzai — eggplant ohitashi, potato salad — and seasonal plates: hamo sashimi in summer, scallop potato salad, mentaiko chicken wings, Saikyo-miso spring rolls, and an egg rice to finish. Local sake, with a deep list of Tamagawa. Reviewers single out friendly, attentive staff who explain the dishes and suggest sake off the list. Courses ¥4,400–5,500 for groups; book ahead. Smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner and kitchen staff (unnamed in the sources)'], origin: null,
      background: 'Per the Tabelog shop text: a home-style Kyoto izakaya of seasonal ingredients and local produce, Kyoto vegetables and fish, with an open kitchen visible from every seat; courses use ingredients chosen by the owner. Opened 15 June 2015 (Tabelog). A July 2026 reviewer found two women working in the kitchen; reviewers in 2026 describe staff who explain the ingredients and recommend sake not on the menu.',
      philosophy: 'Per the Tabelog shop text: a place built on connections between people and food.',
      specialty: 'Obanzai; seasonal sashimi; egg rice.',
      anecdotes: [
        { text: '"The two women in the kitchen were busy but provided excellent service, and I left the restaurant feeling very satisfied." — July 2026.', source: R + 'B532883566/' },
        { text: '"While I was contemplating the menu, the staff casually approached me and offered assistance." — February 2026.', source: R + 'B523211788/' },
        { text: '"They even prepared a special dish with eggplant that wasn’t on the menu." — May 2026.', source: R + 'B529712979/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 居酒屋・日本料理・ダイニングバー、下京区和泉屋町160 ランブラス館1F、京阪四条駅・阪急河原町駅から徒歩7分、17:00〜24:00 (L.O. 23:30)、不定休、予約可 (店からの電話で確定)、京のむすびめコース7品4,400円、特選コース9品5,500円、生ウニを原価で (要予約)、サービス料330円、20席 (立ち25)、喫煙可、カード・QUICPay・PayPay・Alipay 可、英語メニューあり、2015年6月15日オープン、店舗紹介: 京野菜と魚の旬のおばんざい、オープンキッチン、京都の Kinoshita Sake Brewery の Tamagawa。口コミ (2026年2〜11月、英語): ホタテのポテトサラダ、刺身の盛り合わせ、明太子の手羽先、鱧の刺身、肉の春巻き 西京味噌のソース、締めの卵ご飯、わらび餅、気さくな店員、厨房に女性2人。',
      confidence: 'medium', sources: [TB, R + 'B471603029/', R + 'B523211788/', R + 'B529525483/', R + 'B529712979/', R + 'B531821764/', R + 'B532883566/', R + 'B535277071/', R + 'B535907028/', R + 'B536232598/', R + 'B538662118/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; staff explain dishes and suggest sake; smoking allowed; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区和泉屋町160 ランブラス館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through November 2026. Official site (kyo-no-musubime.com) returned a hosting error on 2026-11-05.' },
    pin_source: `Tabelog ${TB} (35.000750, 135.769317); cross-checked: GSI 京都府京都市下京区和泉屋町160番地 (lot) 43 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course prices from Tabelog (tax included); à la carte prices not read.', last_checked: TODAY, items: [
      it('', '', 'Kyo no Musubime course (7 dishes)', '¥4,400', 'Course', 'ask', 'no', '3–16 people.', 'course_7'),
      it('', '', 'Special Kyo no Musubime course (9 dishes)', '¥5,500', 'Course', 'ask', 'no', '2–16 people.', 'course_9'),
      it('', '', 'Obanzai of the day', '', 'Obanzai', 'ask', 'no', '', 'obanzai'),
      it('', '', 'Meat spring rolls with Saikyo-miso sauce', '', 'Small dishes', 'no', 'no', 'September 2026.', 'spring_rolls'),
    ] }, {
    cuisine: '京野菜と魚の旬のおばんざいと料理の、家庭的な京都の居酒屋。オープンキッチン (食べログの店舗紹介)・その日のおばんざい、茄子のおひたしやポテトサラダ (2026年11月)・ホタテのポテトサラダ、刺身の盛り合わせ、明太子の手羽先 (2026年5月)、鱧の刺身 (2026年7月)、西京味噌のソースの肉の春巻き (2026年9月)、締めの卵ご飯 (2026年6月)、わらび餅 (2026年9月)・生ウニを原価で、要予約 (食べログ)・京都の日本酒、Kinoshita Sake Brewery の Tamagawa が豊富 (食べログの店舗紹介)、梅酒、ビール',
    neighborhood: '四条の南、木屋町から少し入ったところ。祇園四条駅から徒歩7分',
    gf_detail: '要確認。だし、醤油、味噌で味付けしたおばんざいと居酒屋の料理に、春巻きや手羽先の揚げ物。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。魚、ウニ、鶏と季節のおばんざいが中心で、ヴィーガンの料理は書かれていない (食べログ、2026年の口コミ)。',
    notes: '[おばんざい居酒屋・木屋町、夜遅くまで京の家庭料理] 木屋町から少し入った、深夜0時まで開くカウンターの小さな居酒屋。オープンキッチンで、茄子のおひたしやポテトサラダなどの京のおばんざいと季節の料理を作る: 夏は鱧の刺身、ホタテのポテトサラダ、明太子の手羽先、西京味噌の春巻き、締めに卵ご飯。地元の日本酒、Tamagawa が豊富。口コミでは、料理を説明し、メニューにない日本酒も勧めてくれる気さくな店員が好評。グループのコースは4,400〜5,500円。予約がおすすめ。喫煙可。',
  });
}

// ================================================================ 京冰菓 あてなるもの
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041099/'; const R = TB + 'dtlrvwlst/';
  const H = day(['13:00', '20:30']);
  put({
    id: 'kyoto_kyo_hyoka_atenaru_mono', name: '京冰菓 あてなるもの (Kyo Hyoka Atenaru Mono)', category: 'OMNI',
    lat: 35.000558, lng: 135.769399, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Shaved ice of pure ice with homemade syrups and toppings such as dried fruit, sweet-potato dumplings and chips, and condensed-milk ice; no ingredient or gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Some kakigori use condensed milk or cheese; fruit syrups and the four "refreshing drinks" may suit, but ingredients are not published (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Seasonal: the 2026 season ran 29 April to 30 September, Wednesday to Sunday 13:00–20:30 (last order 20:00), closed Monday and Tuesday (Tabelog). A reviewer had yudofu and sake here in February 2026, so there may be winter service, but no off-season hours are published. Reservations accepted (Tabelog; August 2026). One order per person; tables are shared (Tabelog). 14 places: two tables for four and a standing counter for six (Tabelog). All seats face the Kamo River (October 2025). Cards, e-money and most QR payments (Tabelog). English menu with photos; children and strollers welcome (Tabelog). At the back of a leather goods shop (ノーノーイエス京都店); 5 min walk from Gion-Shijo Stn exit 1 and Kyoto-Kawaramachi Stn exit 1B (Tabelog; 2025–2026 reviews). Opened 15 May 2024 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'seasonal',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Behind a leather shop on the Kamo River south of Shijo — 5 min walk from Gion-Shijo Stn',
    cuisine: 'Kakigori of pure ice made from natural ice, shaved fluffy, with homemade syrups (Tabelog shop text) · about ¥2,000 each, large enough to share (2025 reviews): peach and pink grapefruit over condensed-milk ice with dried fruit (August 2025); Kyoto sweet potato with Beni Haruka syrup, sweet-potato dumplings and chips (October 2025); tomato, cheese and basil (September 2026); a fruit kakigori brought back from 2025 (August 2026) · four "refreshing drinks" and seasonal drinks with homemade syrups (Tabelog shop text) · yudofu ¥1,000 and sake ¥1,500 (February 2026) · a leather coaster as a gift with kakigori or a drink (2025–2026 reviews)',
    website: null, gmaps: gm('京冰菓 あてなるもの 京都'), menu_url: null,
    notes: "[Kakigori · Shijo Kamo River, a summer counter behind a leather shop] Walk through a leather goods shop south of Shijo to find a bar-like room where every seat looks over the Kamo River: summer kakigori of pure natural ice, shaved fluffy and dressed with homemade syrups in unusual pairings — Kyoto sweet potato with dumplings, peach with pink grapefruit, even tomato, cheese and basil — about ¥2,000 each and big enough to share. You get a leather coaster with your order. Seasonal: 2026 ran from late April to the end of September, Wednesday to Sunday from 13:00.",
    chef_bio: { chef_name: null, roles: ['Staff of the leather shop’s café (unnamed)'], origin: null,
      background: 'Per the Tabelog shop text: a stylish hideaway with an open view of the Kamo River, fluffy shaved ice of pure ice made from natural ice, four refreshing drinks and seasonal drinks with homemade syrups. Opened 15 May 2024; the 2026 season ran 29 April to 30 September (Tabelog). An August 2025 reviewer understood the shop to sell leather goods and serve kakigori only in summer; a February 2026 reviewer was served yudofu and sake there.',
      philosophy: null, specialty: 'Seasonal kakigori with homemade syrups.',
      anecdotes: [
        { text: '"It\'s a café located behind a store that sells leather jackets. There are posters at the entrance, but you wouldn\'t expect to find a café tucked away in the back." — September 2025.', source: R + 'B514221173/' },
        { text: '"The tomato, cheese, and basil shaved ice was innovative yet delicious. Rather than tasting like pizza, it had a subtle sweetness from the syrup." — September 2026.', source: R + 'B535715959/' },
        { text: '"I was very curious about the business model behind charging JPY 1,000 for this yudofu." — February 2026.', source: R + 'B522498883/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): かき氷・スイーツ・甘味処、下京区和泉屋町162 ノーノーイエス京都店、京阪祇園四条駅1番出口・阪急京都河原町駅1B出口から徒歩5分、水〜日 13:00〜20:30 (L.O. 20:00)、月・火休み、2026年4月29日〜9月30日の季節営業、予約可、1人1品以上、相席、14席 (4人掛けテーブル2、立ち席6)、禁煙、カード・電子マネー・QR 可、英語メニュー・写真メニューあり、子供・ベビーカー可、2024年5月15日オープン、店舗紹介: 天然氷から作る純氷のふわふわのかき氷、鴨川の眺め、4種のドリンクと自家製シロップの季節のドリンク。口コミ (2025年8月〜2026年9月、英語): かき氷2,000円ほど、桃とピンクグレープフルーツ、京都のさつまいも (Beni Haruka)、トマト・チーズ・バジル、革のコースターのプレゼント、革製品の店の奥、湯豆腐1,000円 (2026年2月)。',
      confidence: 'medium', sources: [TB, R + 'B512232577/', R + 'B512367920/', R + 'B513684113/', R + 'B514221173/', R + 'B516084684/', R + 'B522498883/', R + 'B531015557/', R + 'B535622419/', R + 'B535715959/', R + 'B536439096/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu with photos; order at the counter; one item each; shared tables.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区和泉屋町162 ノーノーイエス京都店',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained) with the 2026 season dates; reviews dated through September 2026. Out of season on 2026-11-05.' },
    pin_source: `Tabelog ${TB} (35.000558, 135.769399); cross-checked: GSI 京都府京都市下京区和泉屋町162番地 (lot) 25 m; kyoto_kyo_no_musubime (same block, 和泉屋町160) is 23 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512232577/', R + 'B516084684/', R + 'B522498883/'],
    price_note: 'No menu read; prices from 2025–2026 reviews; flavours change each season.', last_checked: TODAY, items: [
      it('', '', 'Kyoto sweet potato kakigori (Beni Haruka syrup, dumplings, chips)', '¥2,000', 'Kakigori', 'ask', 'ask', 'October 2025.', 'sweet_potato_kakigori'),
      it('', '', 'Peach and pink grapefruit kakigori over condensed-milk ice', '¥2,000', 'Kakigori', 'ask', 'no', 'August 2025.', 'peach_grapefruit_kakigori'),
      it('', '', 'Tomato, cheese and basil kakigori', '', 'Kakigori', 'ask', 'no', 'September 2026.', 'tomato_basil_kakigori'),
      it('', '', 'Yudofu', '¥1,000', 'Winter', 'ask', 'ask', 'February 2026.', 'yudofu'),
    ] }, {
    cuisine: '天然氷から作った純氷をふわふわに削り、自家製シロップをかけたかき氷 (食べログの店舗紹介)・1杯2,000円ほどで、分けられる大きさ (2025年の口コミ): ドライフルーツをのせ練乳の氷に重ねた桃とピンクグレープフルーツ (2025年8月)、Beni Haruka のシロップ、さつまいも団子とチップスの京都のさつまいも (2025年10月)、トマト・チーズ・バジル (2026年9月)、2025年に人気だったフルーツのかき氷の再登場 (2026年8月)・4種の爽やかなドリンクと自家製シロップの季節のドリンク (食べログの店舗紹介)・湯豆腐1,000円と日本酒1,500円 (2026年2月)・かき氷かドリンクで革のコースターのプレゼント (2025〜2026年の口コミ)',
    neighborhood: '四条の南、鴨川沿いの革製品の店の奥。祇園四条駅から徒歩5分',
    gf_detail: '要確認。純氷のかき氷に自家製シロップ、ドライフルーツ、さつまいも団子やチップス、練乳の氷などのトッピング。原材料やグルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。練乳やチーズを使うかき氷もある。フルーツのシロップや4種のドリンクは合うかもしれないが、原材料は公開されていない (食べログ、2025〜2026年の口コミ)。',
    notes: '[かき氷・四条鴨川、革製品の店の奥の夏のカウンター] 四条の南、革製品の店を抜けた先の、バーのような部屋で、どの席からも鴨川が見える。天然氷の純氷をふわふわに削り、自家製シロップで珍しい組み合わせに: 団子をのせた京都のさつまいも、桃とピンクグレープフルーツ、トマト・チーズ・バジルまで。1杯2,000円ほどで分けられる大きさ。注文すると革のコースターがもらえる。季節営業で、2026年は4月末から9月末、水〜日の13時から。',
  });
}

// ================================================================ ベルアメール 京都別邸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26026207/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://belamer-kyoto.jp/'; const BAR = SITE + 'pages/chocolat-bar'; const SHOP = SITE + 'pages/shop'; const ABOUT = SITE + 'pages/about';
  const H = day(['10:00', '20:00']);
  put({
    id: 'kyoto_bel_amer_kyoto_bettei', name: 'ベルアメール 京都別邸 三条本店 (Bel Amer Kyoto Bettei)', category: 'OMNI',
    lat: 35.008746, lng: 135.763410, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bonbons and stick chocolates are sold alongside cakes, choux, quiche, sandwiches and pasta in the café; no gluten information is published (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many chocolates and desserts use milk, white chocolate, cream or custard; ingredients for individual chocolates are not listed on the shop pages read (official site; 2026 reviews).',
    hours_raw: '10:00–20:00 (last order 19:30), closed irregularly (official site; Tabelog). Ground floor: chocolate shop; first floor up: Chocolat Bar café (official site). Only the afternoon tea set can be booked, by form (official site); Tabelog lists no reservations, and an October 2026 visitor found the café full and took chocolates away instead. 24 seats; non-smoking; children welcome (Tabelog). Cards, e-money and QR payments (Tabelog). No parking or bicycle parking (official site). In a townhouse over 100 years old on Sanjo-dori east of Sakaimachi; 5 min walk from Karasuma Oike Stn (Tabelog; 2026 reviews). A second Kyoto Bettei shop is a counter in JR京都伊勢丹 B1F (official site). Opened 11 September 2015 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-dori east of Sakaimachi — 5 min walk from Karasuma Oike Stn',
    cuisine: 'Chocolate brand from Kyoto using Japanese ingredients, techniques and seasons, born from Chocolat Bel Amer (official site; October 2026) · shop: Mizuho no Shizuku, masu-shaped chocolates filled with sake, tea or fruit-and-honey jelly (15 flavours; 10 for ¥3,564); stick chocolates ¥540; Kyoto chocolates, bonbons shaped like flowers and temari; Pare Chocolat squares ¥378 each (official site; October 2026) · Chocolat Bar café: Kyoto matcha Saint-Honoré ¥2,200 (autumn), smoked fondant chocolat ¥1,540, chocolate berry or matcha parfait ¥1,430, chocolat noir cake ¥1,210, matcha white-chocolate cake ¥1,540, chocolate-and-sansho Kyoto vegetable curry ¥1,650, cacao Bolognese ¥1,430, autumn afternoon tea ¥7,150 with a drink, chocolate-and-drink sets ¥1,320–2,090, sencha and matcha ¥1,100 (official site, tax included)',
    website: SITE, gmaps: gm('ベルアメール 京都別邸 三条本店'), menu_url: BAR,
    notes: "[Chocolate & café · Sanjo, chocolate in a hundred-year-old townhouse] The Sanjo main shop of Bel Amer Kyoto Bettei, a Kyoto chocolate brand born from Chocolat Bel Amer, in a townhouse over a century old with a small garden: downstairs, jewel-like bonbons, stick chocolates and Mizuho no Shizuku — masu-shaped chocolates filled with sake or tea jelly; upstairs, the Chocolat Bar overlooking Sanjo-dori serves plated desserts like a smoked fondant chocolat (¥1,540), parfaits, a chocolate curry and afternoon tea (¥7,150, the only thing you can book). 10:00–20:00. Tabelog Sweets WEST 100 2026.",
    chef_bio: { chef_name: null, roles: ['Chocolatiers of Bel Amer Kyoto Bettei (no one is named)'], origin: null,
      background: 'Per the official site: a chocolate brand created to send chocolate from Kyoto, a town of tradition and internationality, to the world, using Japanese ingredients, techniques and seasons; the shop is a traditional townhouse with a Chocolat Bar upstairs; chocolates in the café sets come on small plates from the Gion antique dealer 奥田連峯堂; the site is run by J･WORKS INC. and links to the Chocolat BEL AMER website. An October 2026 review quotes the brand as "born from Chocolat Bel Amer", which makes chocolates for Japan’s climate. Two Kyoto Bettei shops: 三条本店 and JR京都伊勢丹 (official site). Opened 11 September 2015 (Tabelog). Tabelog Sweets WEST "Tabelog 100" 2026.',
      philosophy: 'Per the official site: chocolate that represents Japan and connects it to the world, made one piece at a time.',
      specialty: 'Mizuho no Shizuku; stick chocolates; plated desserts.',
      anecdotes: [
        { text: '"The chocolates are as beautiful as jewels. It was the first time I felt it was such a shame to eat something so exquisite." — October 2026.', source: R + 'B536643190/' },
        { text: '"I intended to enjoy some sweets in the shop, but it was fully booked, so I opted for takeout chocolate instead." — October 2026.', source: R + 'B538055948/' },
        { text: 'An October 2026 afternoon-tea guest liked the quiche and opera cake but found the canelé chewy rather than crisp, and the pot of tea cooling fast.', source: R + 'B538605834/' },
      ],
      japanese_sources_summary: '公式サイト (belamer-kyoto.jp): 伝統と国際性のある京都から世界へ発信するショコラブランド、日本の素材・技術・季節、町家の店内、二階にショコラバー、瑞穂のしずく (枡に見立てたショコラに日本酒・お茶・国産果実と蜂蜜のジュレ、15種)、スティックショコラ、京都ショコラ、彩ショコラ、ショコラバーのメニュー: 京抹茶のサントノレ2,200円、フォンダンショコラ 燻製1,540円、パフェ1,430円、ショコラノワール1,210円、テヴェール1,540円、ショコラと山椒、京野菜の和風カレー1,650円、カカオ風味のボロネーゼ1,430円、秋のアフタヌーンティーセット7,150円 (予約はアフタヌーンティーのみ)、ショコラセット1,320〜2,090円、奥田連峯堂の小皿、三条本店 10:00〜20:00 (L.O. 19:30、不定休)、ジェイアール京都伊勢丹店、運営 J･WORKS INC.。食べログ: チョコレート・カフェ・ケーキ、中京区三条通堺町東入ル北側桝屋町66、烏丸御池駅から徒歩5分、予約不可、24席、禁煙、カード・電子マネー・QR 可、2015年9月11日オープン、スイーツ WEST 百名店 2026。口コミ (2026年10月、英語): 宝石のようなショコラ、パレショコラ378円、2階のカフェ、満席でテイクアウト、アフタヌーンティー、Chocolat Bel Amer から生まれたブランド。',
      confidence: 'medium', sources: [TB, SITE, BAR, SHOP, ABOUT, R + 'B536643190/', R + 'B536809759/', R + 'B536948895/', R + 'B538030913/', R + 'B538055948/', R + 'B538175389/', R + 'B538284829/', R + 'B538605834/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shop downstairs, café upstairs; only afternoon tea can be booked; cards and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通堺町東入ル北側桝屋町66',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October 2026 notices) and Tabelog listing; reviews dated through October 2026; Sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.008746, 135.763410); cross-checked: GSI 京都府京都市中京区桝屋町66番地 (lot) 20 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [BAR, SITE],
    price_note: 'Official site (Chocolat Bar menu and shop pages, autumn 2026; tax included).', last_checked: TODAY, items: [
      it('フォンダンショコラ 〜燻製〜', '', 'Smoked fondant chocolat', '¥1,540', 'Chocolat Bar', 'no', 'no', 'Lid lifted at the table to release smoke.', 'smoked_fondant'),
      it('[季節限定]京抹茶のサントノレ', '', 'Kyoto matcha Saint-Honoré (seasonal)', '¥2,200', 'Chocolat Bar', 'no', 'no', 'Autumn 2026.', 'matcha_saint_honore'),
      it('ショコラベリーパフェ', '', 'Chocolate berry parfait', '¥1,430', 'Chocolat Bar', 'ask', 'no', '', 'berry_parfait'),
      it('ショコラと山椒、京野菜の和風カレー', '', 'Chocolate-and-sansho curry with Kyoto vegetables and roast beef', '¥1,650', 'Chocolat Bar', 'ask', 'no', '', 'chocolate_curry'),
      it('秋のアフタヌーンティーセット', '', 'Autumn afternoon tea set with a drink', '¥7,150', 'Chocolat Bar', 'no', 'no', 'Bookable.', 'afternoon_tea'),
      it('瑞穂のしずくアソート 10個', '', 'Mizuho no Shizuku assortment, 10 pieces', '¥3,564', 'Shop', 'ask', 'ask', '', 'mizuho_10'),
      it('スティックショコラ', '', 'Stick chocolate', '¥540', 'Shop', 'ask', 'ask', '', 'stick_chocolat'),
    ] }, {
    cuisine: '日本の素材・技術・季節を生かした京都のショコラブランド。Chocolat Bel Amer から生まれた (公式サイト、2026年10月)・ショップ: 瑞穂のしずく (枡に見立てたショコラに日本酒、お茶、果実と蜂蜜のジュレ、15種、10個3,564円)、スティックショコラ540円、京都ショコラ、花や鞠の形の彩ショコラ、パレショコラ1枚378円 (公式サイト、2026年10月)・ショコラバー: 京抹茶のサントノレ2,200円 (秋)、燻製のフォンダンショコラ1,540円、ショコラベリーまたは京抹茶のパフェ1,430円、ショコラノワール1,210円、テヴェール1,540円、ショコラと山椒の京野菜の和風カレー1,650円、カカオ風味のボロネーゼ1,430円、秋のアフタヌーンティー7,150円 (ドリンク付き)、ショコラとドリンクのセット1,320〜2,090円、煎茶と抹茶1,100円 (公式サイト、税込)',
    neighborhood: '堺町の東の三条通。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。ボンボンやスティックショコラのほか、カフェではケーキ、シュー、キッシュ、サンドイッチ、パスタ。グルテンの情報は公開されていない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。多くのショコラやデザートに乳、ホワイトチョコレート、クリーム、カスタードを使う。読んだページでは個々のショコラの原材料は書かれていない (公式サイト、2026年の口コミ)。',
    notes: '[ショコラとカフェ・三条、築百年の町家のショコラ] Chocolat Bel Amer から生まれた京都のショコラブランド、ベルアメール京都別邸の三条本店。築百年を超える坪庭のある町家で、1階には宝石のようなボンボン、スティックショコラ、日本酒やお茶のジュレを枡形のショコラに流した瑞穂のしずく。2階のショコラバーは三条通を見下ろし、燻製のフォンダンショコラ (1,540円) などの皿盛りデザート、パフェ、ショコラのカレー、アフタヌーンティー (7,150円、予約できるのはこれだけ)。10時〜20時。食べログスイーツ WEST 百名店 2026。',
  });
}

// ================================================================ 創作中華 一之船入
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002657/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_sosaku_chuka_ichino_funairi', name: '創作中華 一之船入 (Sosaku Chuka Ichino Funairi)', category: 'MOM_AND_POP',
    lat: 35.012202, lng: 135.770121, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chinese courses with soy- and Shaoxing-seasoned braises, fermented black bean sauce, spring rolls, fried dishes and fried rice; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses are built on shark fin, seafood, chicken and duck in stocks (Tabelog; 2026 reviews).',
    hours_raw: 'Monday to Saturday 11:30–14:30 (last order 13:00) and 17:30–22:00 (last order 20:30); closed Sunday (Tabelog). Courses only, by reservation; parties of 9 or more by phone, best called 15:00–17:00 (Tabelog). 10% service charge, no cover charge (Tabelog). 32 seats and seven private rooms for 2 to 20, some tatami or sunken; non-smoking (Tabelog). Children from elementary school age (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). In a townhouse facing the Ichinofunairi canal off Kawaramachi Nijo; 2 min walk from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ichinofunairi canal off Kawaramachi Nijo — 2 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Creative Kyoto-style Chinese on the idea that food and medicine are one, blending the eight Chinese cuisines with Japanese and Western techniques and Kyoto seasonal produce (Tabelog shop text) · dinner courses: Funairi course, 7 dishes, ¥11,000; Kongming course, 7 dishes with braised shark fin and a drink, ¥14,850; Wei course, 8 dishes with a large braised shark fin (Tabelog) · a lunch Wei course: five-kind appetiser (jellyfish, tomato compote, spring rolls, steamed chicken, octopus), steamed Cantonese shrimp spring roll, shark fin braised in white soy sauce, chicken with makomo, flounder in black bean sauce, spinach fried rice, mango shaved ice (September 2026) · shark fin soup, Peking duck with homemade prawn crackers, Shanghai crab with shark fin, Ise lobster in chilli sauce, Buddha Jumps Over the Wall, matsutake clay-pot rice (2026 reviews) · aged and original Shaoxing wine; sommelier (2026 reviews; Tabelog)',
    website: null, gmaps: gm('創作中華 一之船入 京都'), menu_url: TB,
    notes: "[Chinese · Kawaramachi Nijo, Chef Wei's townhouse by the canal] Creative Chinese cooking in a century-old townhouse facing the old Ichinofunairi boat landing on the Takase River, with private rooms: Chef Wei blends the eight Chinese cuisines with Japanese and Western techniques and Kyoto produce, on the principle that food is medicine. The braised shark fin is the signature; light, ungreasy courses run from appetiser platters to fried rice and a huge mango shaved ice. Lunch around ¥6,000–8,000; dinner courses ¥11,000–14,850, plus 10%. Book a course; closed Sunday. Tabelog Chinese WEST 100 2021, 2024.",
    chef_bio: { chef_name: 'Wei', roles: ['Owner-chef (reviews: "Chef Wei"; "The owner-chef trained at Banchinro")'], origin: null,
      background: 'Per an August 2026 review: founded in 1996 in a renovated 100-year-old townhouse that was once a tea shop facing the historic Ichinofunairi; the owner-chef trained at Banchinro in Yokohama Chinatown and holds a special chef qualification from China; organic vegetables, especially Kyoto vegetables, from contracted farms. The Tabelog shop text calls the chef Michelin-starred and the restaurant featured in the Michelin Guide; a September 2026 review says it "previously earned a Michelin star". A September 2026 regular mentions Chef Wei’s television appearances; another saw the chef greet every room at the start and end of the meal. Sister shops listed on Tabelog: Gohan Iido Sanjo (a Chinese diner known for soup dumplings) and Gohan Gyoza (gyoza and Taiwanese food near Karasuma Oike). Tabelog Chinese WEST "Tabelog 100" 2021, 2024.',
      philosophy: 'Per the Tabelog shop text: "Ishoku-Dogen" — food and medicine are one; delicious, health-conscious dishes.',
      specialty: 'Braised shark fin; shark fin soup.',
      anecdotes: [
        { text: '"Chef Wei made a point to visit each room to greet guests both at the beginning and end of the meal" — September 2026.', source: R + 'B535452633/' },
        { text: '"For dessert, I had mango shaved ice, which was a pleasant surprise." — September 2026.', source: R + 'B536272246/' },
        { text: '"Overall, the flavors felt a bit on the lighter side. Surprisingly, I ended up quite full" — October 2026.', source: R + 'B537969375/' },
        { text: '"The private room allowed us to relax, and the view of the Takase River from the window was charming." — August 2026.', source: R + 'B534560177/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 中華料理・飲茶、中京区河原町二条下ル一之船入町537-50、京都市役所前駅から徒歩2分、月〜土 11:30〜14:30 (L.O. 13:00)・17:30〜22:00 (L.O. 20:30)、日曜休み、予約はコースのみ (9名以上は電話、15〜17時)、サービス料10%・チャージなし、32席、個室7 (2〜20名)、座敷・掘りごたつ、禁煙、小学生以上、カード可、ソムリエ、中華 WEST 百名店 2021・2024、店舗紹介: 築百年の町家、医食同源、中国八大料理と和・洋の技法、京都の旬の食材、ミシュランガイド掲載、Funairi コース7品11,000円、Kongming コース14,850円、系列店: Gohan Iido Sanjo、Gohan Gyoza。口コミ (2026年8〜10月、英語・日本語): Chef Wei、1996年創業、元はお茶屋の町家、Banchinro で修業、契約農家の有機野菜、フカヒレの姿煮、フカヒレスープ、北京ダック、マンゴーのかき氷、紹興酒、個室から高瀬川。',
      confidence: 'medium', sources: [TB, R + 'B473771866/', R + 'B534016871/', R + 'B534535929/', R + 'B534560177/', R + 'B534715920/', R + 'B535452633/', R + 'B536272246/', R + 'B537199561/', R + 'B537969375/', R + 'B538476290/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course ahead; private rooms only; 10% service; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町二条下ル一之船入町537-50',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012202, 135.770121); cross-checked: GSI 京都府京都市中京区一之船入町537番地 (lot) 56 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Tabelog course prices (tax included); 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Funairi course (7 dishes), private room', '¥11,000', 'Dinner course', 'ask', 'no', '', 'funairi_course'),
      it('', '', 'Kongming course (7 dishes with braised shark fin, 1 drink), private room', '¥14,850', 'Dinner course', 'ask', 'no', 'Listed down from ¥15,840.', 'kongming_course'),
      it('', '', 'Wei course (8 dishes with large braised shark fin, 1 drink)', '', 'Dinner course', 'ask', 'no', '', 'wei_course'),
    ] }, {
    cuisine: '医食同源の考えの創作京中華。中国の八大料理に和と洋の技法、京都の旬の食材 (食べログの店舗紹介)・夜のコース: Funairi コース7品11,000円、フカヒレの姿煮とドリンク付きの Kongming コース7品14,850円、大きなフカヒレの姿煮の Wei コース8品 (食べログ)・昼の Wei コース: 前菜5種 (くらげ、トマトのコンポート、春巻き、蒸し鶏、たこ)、広東風の海老の蒸し春巻き、白醤油のフカヒレの姿煮、鶏とまこもの炒め、ひらめの豆豉ソース、ほうれん草の炒飯、マンゴーのかき氷 (2026年9月)・フカヒレスープ、自家製海老せんべいの北京ダック、上海蟹とフカヒレの姿煮、伊勢海老のチリソース、仏跳牆、松茸の土鍋ご飯 (2026年の口コミ)・熟成とオリジナルの紹興酒、ソムリエ (2026年の口コミ、食べログ)',
    neighborhood: '河原町二条の一之船入。京都市役所前駅から徒歩2分',
    gf_detail: '要確認。醤油や紹興酒で煮込む料理、豆豉のソース、春巻き、揚げ物、炒飯のある中華のコース。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。コースはフカヒレ、魚介、鶏、鴨とスープが中心 (食べログ、2026年の口コミ)。',
    notes: '[中華・河原町二条、運河沿いの町家の Wei シェフ] 高瀬川の一之船入に面した築百年の町家で、個室だけで出す創作中華。Wei シェフが医食同源の考えで、中国の八大料理に和と洋の技法と京都の食材を合わせる。名物はフカヒレの姿煮。脂っこくない軽いコースで、前菜の盛り合わせから炒飯、大きなマンゴーのかき氷まで。昼は6,000〜8,000円ほど、夜のコースは11,000〜14,850円にサービス料10%。コースを予約して。日曜休み。食べログ中華 WEST 百名店 2021・2024。',
  });
}

save();
