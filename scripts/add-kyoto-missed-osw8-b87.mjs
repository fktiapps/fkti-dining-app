// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 87 (2026-11-08).
//   + GESHARY COFFEE 洛 (Geisha-coffee house in a garden estate by Yasaka Koshindo; rest)
//   + くぐり鍋 六白屋 Kuguri Nabe Roppakuya (machiya izakaya of Rokuhaku Kurobuta hot pot, Shijo-Muromachi; rest)
//   + 祇園円山堂 Gion Maruyama Do (soft-serve stand by the weeping cherry in Maruyama Park; rest)
//   + ごちそう紫陽 Gochisou Shiyo (nine-seat counter of a veteran owner, Sakaimachi-Oike; rest)
//   + シナモ sinamo (casual wine and square sinamo-style pizza since 1999, Teramachi-Nijo; rest)
//   Rest list (mod 6 = 1) after batch 86, nearest-first — skipped:
//   - エースホテル京都 26034571: the hotel-wide listing of Ace Hotel Kyoto, a big-chain hotel (Greg 11-08); its restaurants
//     kyoto_kosa_ace_hotel and kyoto_piopiko_ace_hotel are already hidden.
//   Brand check: queue-status.jsonl and than.co.jp/brands (2026-11-08) checked for every brand — none is a THAN brand.
//   GESHARY COFFEE (GESHARY COFFEE INC.) lists two shops, Hibiya and this one (gesharycoffee.com) — not a chain, not in data.
//   シナモ is a single shop (sinamo.co.jp). 六白屋, 円山堂 and 紫陽: no other shops found. None of the five is in data
//   (main 2cd73e8e, hidden records included) by name and address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-87');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26034571/', 'big-chain hotel (Greg 11-08): hotel-wide listing of Ace Hotel Kyoto; its restaurants kyoto_kosa_ace_hotel and kyoto_piopiko_ace_hotel are already hidden');

// ================================================================ GESHARY COFFEE 洛
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043955/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://gesharycoffee.com/';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_geshary_coffee_raku', name: 'GESHARY COFFEE 洛 (Raku)', category: 'OMNI',
    lat: 34.99853248787966, lng: 135.77869047028383, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Black Geisha coffee, lattes and soft serve may suit; desserts and toppings are not described (2025–2026 reviews). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee is plant-based, but lattes, shakes and soft serve use dairy; no plant milk mentioned (2025–2026 reviews).',
    hours_raw: 'Daily 9:00–18:00; hours may change (Tabelog). Order at the counter, then choose a seat in the garden, tea room, annex or the skylit basement (March–April 2026). Reservations accepted (Tabelog). Cards, e-money and QR (Tabelog). Coffee tasting at the gate and Geisha beans for sale (December 2025). Opened 1 November 2025 next to Yasaka Koshindo, on the walk towards Kiyomizu-dera (Tabelog; 2025–2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yasaka Koshindo, Higashiyama',
    cuisine: 'Specialty café pouring only Geisha-variety coffee, the Kyoto sister of GESHARY COFFEE in Hibiya (gesharycoffee.com; 2025–2026 reviews) · single-farm Geisha coffees such as FINCA SOPHIA, from about ¥2,000 a cup; iced coffee ¥2,650; latte (December 2025–April 2026) · Geisha soft serve, Geisha espresso shake topped with coffee jelly, a coffee “Kano Mizuren” sweet ¥360, lemon and glass desserts (December 2025–April 2026) · about ¥2,000–4,000 a head (2025–2026 reviews)',
    website: WEB, gmaps: gm('GESHARY COFFEE 洛 京都'), menu_url: null,
    notes: '[Geisha coffee · by Yasaka Koshindo] A temple-like gate opens onto a garden estate where every cup is Geisha coffee: pricey single-farm pours, Geisha soft serve and shakes, drunk in the garden, a tea room or a skylit concrete basement. Open daily.',
    chef_bio: { chef_name: null, roles: ['Baristas (unnamed)'], origin: null,
      background: 'Per the official site and Tabelog: the Kyoto shop of GESHARY COFFEE (GESHARY COFFEE INC.), a Geisha-coffee specialist whose other shop is in Hibiya, Tokyo; opened 1 November 2025 in a mansion-style estate of several buildings around a Japanese garden, with more seating areas planned (gesharycoffee.com; March 2026).',
      philosophy: 'Geisha coffee, whose quality depends on terroir — soil, rain, temperature and altitude (gesharycoffee.com).', specialty: 'Geisha coffee; Geisha soft serve.',
      anecdotes: [
        { text: 'A December 2025 visitor on the way to Kiyomizu-dera walked in thinking it was a lantern-hung temple, and found the long wait was for beans roasted to order.', source: R + 'B520102416/' },
        { text: 'A March 2026 guest sat in the concrete basement, where trees rise to a round hole in the ceiling that lets the sky in.', source: R + 'B527085569/' },
        { text: 'A regular of the Hibiya shop came to see the Kyoto one in March 2026 and found the atmosphere entirely different.', source: R + 'B524452053/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、東山区下河原通高台寺塔之前上ル金園町390-2、毎日 9:00〜18:00、予約可、カード・電子マネー・QR 可、個室あり、2025年11月1日開店、公式サイトあり。公式サイト: 「受け継がれてきた伝統に新たな感性が溶け合う京都。」「意匠を凝らした店内でゆっくりとお過ごしいただけます。」、店舗は日比谷と洛の2店、© GESHARY COFFEE INC.。口コミ (2025年11月〜2026年5月、英語): 八坂庚申堂の隣、寺のような門の先に庭園と離れのある屋敷、ゲイシャ種のコーヒー専門 (FINCA SOPHIA など、1杯2,000円ほどから)、アイスコーヒー2,650円、ラテ、ゲイシャのソフトクリーム、エスプレッソシェイク、360円の甘味、レモンのデザート、庭・茶室・離れ・空の見える地下の席、入口で試飲、豆の販売、日比谷の店の姉妹店。',
      confidence: 'medium', sources: [TB, WEB, R + 'B516634135/', R + 'B518658641/', R + 'B518687323/', R + 'B520102416/', R + 'B520134038/', R + 'B524452053/', R + 'B525691785/', R + 'B525832975/', R + 'B527085569/', R + 'B529312245/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter, then pick a seat; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区下河原通高台寺塔之前上ル金園町390-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through May 2026.' },
    pin_source: `Tabelog ${TB} (34.998532, 135.778690); cross-checked: GSI 京都府京都市東山区金園町390番地 (lot) 25 m; nearest existing record 13.0 m (kyoto_shuhaku); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525691785/'],
    price_note: 'Prices from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Iced Geisha coffee', '¥2,650', 'Coffee', 'ask', 'vegan', 'April 2026.', 'iced'),
      it('', '', 'Kano Mizuren (coffee sweet)', '¥360', 'Sweets', 'ask', 'ask', 'April 2026.', 'mizuren'),
    ] }, {
    cuisine: '日比谷の GESHARY COFFEE の京都の姉妹店、ゲイシャ種だけのスペシャルティカフェ (公式サイト、2025〜2026年の口コミ)・FINCA SOPHIA などの単一農園のゲイシャ、1杯2,000円ほどから、アイスコーヒー2,650円、ラテ (2025年12月〜2026年4月)・ゲイシャのソフトクリーム、コーヒーゼリーのせのエスプレッソシェイク、コーヒーの甘味「Kano Mizuren」360円、レモンやグラスのデザート (2025年12月〜2026年4月)・1人2,000〜4,000円ほど (2025〜2026年の口コミ)',
    neighborhood: '八坂庚申堂、東山',
    gf_detail: '要確認。ブラックのゲイシャコーヒー、ラテ、ソフトクリームは合う可能性があるが、デザートやトッピングの説明はない (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。ブラックコーヒーは植物性だが、ラテ、シェイク、ソフトクリームは乳製品。植物性ミルクの記載はない (2025〜2026年の口コミ)。',
    notes: '[ゲイシャコーヒー・八坂庚申堂の隣] 寺のような門の先の庭園の屋敷で、すべてゲイシャ種のコーヒー。高めの単一農園の一杯、ゲイシャのソフトクリームやシェイクを、庭、茶室、空の見えるコンクリートの地下で。毎日営業。',
  });
}

// ================================================================ くぐり鍋 六白屋 Kuguri Nabe Roppakuya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26007601/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_kuguri_nabe_roppakuya', name: 'くぐり鍋 六白屋 (Kuguri Nabe Roppakuya)', category: 'OMNI',
    lat: 35.00438452084358, lng: 135.7573825870826, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, salt-grilled ayu and the pork hot pot with yuzu may suit, but the special broth, tempura and yuba rice bowl are likely to involve soy or wheat (Tabelog; 2025–2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork hot pot and seafood izakaya (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Daily 17:00–24:00 (last order 23:30); closing days not fixed (Tabelog). Reservations accepted and advised — can be hard to book (Tabelog; April 2025). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). 35 seats in private-feeling rooms for 2–20 in a long, narrow machiya with steep stairs; the counter feels like a passage (Tabelog; 2025–2026 reviews). Non-smoking (Tabelog). 3 min walk from Hankyu Karasuma Stn.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Muromachi',
    cuisine: 'Machiya izakaya built around kuguri nabe — Rokuhaku Kurobuta (Berkshire) pork dipped in a special broth with fresh yuzu juice, yuzu kosho, Kyoto black shichimi and unlimited spring onion; Kyoto vegetables and market seafood (Tabelog) · omakase course ¥5,500; pork shabu-shabu with a yuba rice bowl to finish (March 2025–October 2026) · sashimi platters, karasumi, chilled pork, cream cheese and corn tempura, hamo sashimi and tempura, salt-grilled ayu (April–August 2026) · a wide sake list · about ¥4,000–8,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('くぐり鍋 六白屋'), menu_url: TB + 'dtlmenu/',
    notes: '[Pork hot pot izakaya · Shijo-Muromachi, late] A rambling machiya of hidden rooms serving its signature Rokuhaku Kurobuta kuguri nabe — pork swished through yuzu-bright broth — plus sashimi, karasumi, hamo in season and plenty of sake, until midnight. Book ahead.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: an izakaya in a renovated Kyoto townhouse whose main dish is kuguri nabe of Rokuhaku Kurobuta pork, with Kyoto vegetables and market seafood. Reviewers in 2025–2026 describe a staircase-filled “eel’s bed” house of private nooks, walls of signatures and a strong sake list.',
      philosophy: null, specialty: 'Kuguri nabe of Rokuhaku Kurobuta pork.',
      anecdotes: [
        { text: 'A July 2025 first-timer found the staircases and narrow layout reminiscent of Spirited Away, and singled out the cream cheese and corn tempura.', source: R + 'B510477829/' },
        { text: 'An April 2026 Golden Week drop-in loved the karasumi but just missed the sake wanted.', source: R + 'B528203381/' },
        { text: 'A March 2026 diner on the ¥5,500 omakase course was told the kuguri nabe pork was a favourite of figures of the Bakumatsu era.', source: R + 'B524606085/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理、中京区室町新町の間四条上ル観音堂町452-1、阪急烏丸駅から徒歩3分、毎日 17:00〜24:00 (L.O.23:30)、不定休、予約可、カード (VISA・Master・JCB・AMEX) 可、電子マネー・QR 不可、35席、個室 (2〜20名)、禁煙、紹介文 (英訳): Rokuhaku Kurobuta のくぐり鍋が看板、特製のだしにしぼりたてのゆず果汁、ゆず胡椒、京の黒七味、おかわり自由のねぎ、京野菜と市場直送の魚介。口コミ (2025年3月〜2026年10月、英語): 改装した京町家、階段の多いうなぎの寝床、個室のような席、壁のサイン、おまかせコース5,500円、豚しゃぶ、しめの湯葉丼、刺身の盛り合わせ、からすみ、冷しゃぶ、クリームチーズととうもろこしの天ぷら、鱧の刺身と天ぷら、鮎の塩焼き、日本酒が豊富。',
      confidence: 'medium', sources: [TB, R + 'B504490163/', R + 'B505152183/', R + 'B510477829/', R + 'B513732236/', R + 'B521366729/', R + 'B524606085/', R + 'B527123433/', R + 'B528203381/', R + 'B534130694/', R + 'B536992474/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; private rooms; steep machiya stairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町新町の間四条上ル観音堂町452-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004385, 135.757383); cross-checked: GSI 京都府京都市中京区観音堂町452番地 (lot) 15 m; nearest existing record 4.8 m (kyr_torisoba_ayam_ya_karasum), kyoto_sushi_miki_karasuma 7.0 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524606085/'],
    price_note: 'Price from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase course with kuguri nabe', '¥5,500', 'Courses', 'ask', 'no', 'March 2026.', 'omakase'),
      it('', '', 'Cream cheese and corn tempura', '', 'Fried', 'no', 'no', 'July 2025.', 'tempura'),
    ] }, {
    cuisine: 'くぐり鍋が看板の町家の居酒屋: Rokuhaku Kurobuta の豚を特製のだしにくぐらせ、しぼりたてのゆず果汁、ゆず胡椒、京の黒七味、おかわり自由のねぎで、京野菜と市場の魚介も (食べログ)・おまかせコース5,500円、豚しゃぶとしめの湯葉丼 (2025年3月〜2026年10月)・刺身の盛り合わせ、からすみ、冷しゃぶ、クリームチーズととうもろこしの天ぷら、鱧の刺身と天ぷら、鮎の塩焼き (2026年4〜8月)・日本酒が豊富・4,000〜8,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '四条室町',
    gf_detail: '要確認。刺身、鮎の塩焼き、ゆずの豚鍋は合う可能性があるが、特製のだし、天ぷら、湯葉丼は醤油や小麦の可能性 (食べログ、2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。豚の鍋と魚介の居酒屋 (食べログ、2025〜2026年の口コミ)。',
    notes: '[豚鍋の居酒屋・四条室町、深夜まで] 隠れ部屋の多い町家で看板の Rokuhaku Kurobuta のくぐり鍋 (ゆずの香るだしにくぐらせる豚)、刺身、からすみ、旬の鱧、日本酒も豊富に深夜0時まで。予約を。',
  });
}

// ================================================================ 祇園円山堂 Gion Maruyama Do
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26023957/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_gion_maruyama_do', name: '祇園円山堂 (Gion Maruyama Do)', category: 'OMNI',
    lat: 35.00336711787716, lng: 135.7805005503314, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Plain soft serve in a cup may suit; waffles contain wheat and mitarashi dango glaze uses soy (Tabelog; 2021–2025 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: milk soft serve is the main offer (2021–2025 reviews).',
    hours_raw: 'Daily 10:00–18:00; cherry-blossom season 10:00–22:00; open all year, but may close in storm warnings or heavy rain (Tabelog). No reservations (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, nanaco, iD and PayPay (Tabelog). 20 terrace seats; pets welcome on the terrace; take-out; non-smoking (Tabelog; March 2025). In Maruyama Park in front of the weeping cherry, 1 min walk from Yasaka Shrine (Tabelog). Opened 8 June 2018 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Maruyama Park',
    cuisine: 'Soft-serve stand with terrace seats by Maruyama Park’s weeping cherry (Tabelog) · sakura soft serve and hanami dango in cherry season, sweet-potato soft serve and freshly made mitarashi dango in autumn (Tabelog) · rich milk soft serve; red bean and matcha swirl ¥650; matcha waffle; cherry-blossom waffle (April 2021–March 2025) · under ¥1,000 (Tabelog)',
    website: null, gmaps: gm('祇園円山堂 円山公園'), menu_url: null,
    notes: '[Soft serve · Maruyama Park] A small stand in front of the park’s famous weeping cherry: sakura soft serve and hanami dango in spring, sweet-potato soft serve and mitarashi dango in autumn, and matcha-and-red-bean swirls year round, eaten on the terrace or by the pond. Pets welcome.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a soft-serve shop in Maruyama Park opened 8 June 2018, calling itself the most popular soft serve in Higashiyama, with seasonal flavours and dango. Reviewers describe a one-person stand with chairs outside (2021–2025).',
      philosophy: null, specialty: 'Seasonal soft serve.',
      anecdotes: [
        { text: 'An April 2021 cherry-blossom visitor found the sakura soft serve as pink and pretty as the trees in full bloom.', source: R + 'B443010387/' },
        { text: 'A July 2024 visitor ate a red bean and matcha swirl for ¥650 by the pond.', source: R + 'B488611117/' },
        { text: 'A March 2025 visitor shared the rich milk soft serve with a pet on the terrace.', source: R + 'B503722190/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、東山区祇園町北側627 円山公園内しだれ桜前、八坂神社から徒歩1分、毎日 10:00〜18:00、桜の季節は 10:00〜22:00、年中無休 (警報や大雨の日は休みの場合あり)、予約不可、カード (VISA・Master・JCB・AMEX・Diners)・交通系IC・nanaco・iD・PayPay 可、テラス20席、ペット可、テイクアウト、禁煙、2018年6月8日開店、紹介文 (英訳): 東山で人気のソフトクリーム、桜の季節は桜のソフトクリームと花見団子、秋はさつまいものソフトクリームとできたてのみたらし団子。口コミ (2021年4月〜2025年3月、英語): 桜色のソフトクリーム、濃厚なミルク、あずきと抹茶のミックス650円、抹茶ワッフル、桜のワッフル、池のそばで、ペットとテラス席。',
      confidence: 'low', sources: [TB, R + 'B443010387/', R + 'B464378360/', R + 'B487192730/', R + 'B488611117/', R + 'B488757634/', R + 'B497882681/', R + 'B503722190/', R + 'B514206130/'] },
    cultural_comfort: { level: 'none_needed', note: 'Order at the window; terrace seats; pets welcome.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側627 円山公園内しだれ桜前',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; latest review March 2025.' },
    pin_source: `Tabelog ${TB} (35.003367, 135.780501); GSI 京都府京都市東山区祇園町北側627番地 (lot) is 102 m off — a large park lot — so the Tabelog pin by the weeping cherry is kept; nearest existing record 36.1 m (kyoto_dessert_cafe_chourakukan); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B488611117/'],
    price_note: 'Price from a July 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Red bean and matcha swirl soft serve', '¥650', 'Soft serve', 'ask', 'no', 'July 2024.', 'swirl'),
    ] }, {
    cuisine: '円山公園のしだれ桜の前のテラス席のソフトクリームの店 (食べログ)・桜の季節は桜のソフトクリームと花見団子、秋はさつまいものソフトクリームとできたてのみたらし団子 (食べログ)・濃厚なミルクのソフトクリーム、あずきと抹茶のミックス650円、抹茶ワッフル、桜のワッフル (2021年4月〜2025年3月)・1,000円未満 (食べログ)',
    neighborhood: '円山公園',
    gf_detail: '要確認。カップのソフトクリームは合う可能性があるが、ワッフルは小麦、みたらし団子のたれは醤油 (食べログ、2021〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。ミルクのソフトクリームが中心 (2021〜2025年の口コミ)。',
    notes: '[ソフトクリーム・円山公園] 公園の名高いしだれ桜の前の小さな店。春は桜のソフトクリームと花見団子、秋はさつまいもとみたらし団子、通年の抹茶とあずきのミックスをテラスや池のそばで。ペット可。',
  });
}

// ================================================================ ごちそう紫陽 Gochisou Shiyo
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000473/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_gochisou_shiyo', name: 'ごちそう紫陽 (Gochisou Shiyo)', category: 'OMNI',
    lat: 35.011946877866265, lng: 135.76339081043005, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Small seasonal dishes and obanzai are cooked to order with additive-free ingredients (2009 review), and the owner adjusts portions for solo diners (2018), but croquettes are breaded and seasonings use soy. No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tofu dishes and vegetable obanzai appear, but dashi is likely and beef and seafood are served (2009–2025 reviews).',
    hours_raw: 'Monday and Thursday–Sunday 17:30–22:00 (last order 21:15); closed Tuesday and Wednesday; hours may change (Tabelog). Reservations accepted, by phone (Tabelog; December 2020). Cash only — no cards, e-money or QR (Tabelog). Nine counter seats; shoes off at the entrance; non-smoking (Tabelog; August 2025). Ground floor of the Oshikoji Mansion, with only a small sign and noren (Tabelog; November 2010).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sakaimachi-Oike',
    cuisine: 'Nine-seat counter of seasonal small dishes and obanzai, cooked with care by a long-serving owner (2009–2025 reviews) · obanzai through to beef; a signature trio of croquettes such as scallop-cream with shungiku, or lotus root with meat; warm tofu from near Shogoin (2009–2025 reviews) · sake from Kyoto, Shiga and beyond in a choice of cups, wines picked to suit Japanese food, shochu (2010–2025 reviews) · about ¥6,000–15,000 (Tabelog; 2014–2025 reviews)',
    website: null, gmaps: gm('ごちそう紫陽 堺町御池'), menu_url: null,
    notes: '[Counter cooking · Sakaimachi-Oike, cash only] A hidden nine-seat counter behind a noren, where a long-serving owner cooks seasonal small dishes, obanzai and famous croquettes and pours well-chosen sake and Burgundy. Shoes off; book by phone. Closed Tuesday and Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-cook (unnamed)'], origin: null,
      background: 'Per reviewers: a counter restaurant running for decades (August 2025), where a seasoned proprietress cooks and serves at a clay-walled counter with washi lights (2010–2014), welcoming regulars like family and adjusting portions for one (2018–2020).',
      philosophy: 'Additive-free ingredients and real flavour without pretension (October 2009).', specialty: 'Trio of croquettes; obanzai.',
      anecdotes: [
        { text: 'A 2010 reviewer noted that actress Tae Kimura had named it a favourite eatery in the Nikkei on 30 October 2010.', source: R + 'B117245036/' },
        { text: 'A regular of 2018–2020, still coming during the pandemic, likened each Kyoto visit to stopping by an older sister’s home.', source: R + 'B5541237/' },
        { text: 'An August 2025 first-timer, brought by a regular, drank a Burgundy picked by the owner with dishes from obanzai to beef.', source: R + 'B512595958/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区堺町通御池上ル扇屋町646 押小路マンション 1F、月・木〜日 17:30〜22:00 (L.O.21:15)、火・水休み、予約可、カード・電子マネー・QR 不可、カウンター9席、禁煙、貸切可。口コミ (2009年10月〜2025年8月、英語): 何十年も続く店、靴を脱いで上がるカウンター、土壁と和紙の灯り、ベテランの女将が料理と接客、旬の小鉢とおばんざいから牛肉まで、名物の3種のコロッケ (春菊と帆立のクリーム、れんこんと肉など)、聖護院近くの豆腐、添加物のない食材、京都や滋賀などの日本酒と選べる酒器、和食に合うワイン、焼酎、2010年の新聞で Tae Kimura のお気に入りの店として紹介。',
      confidence: 'low', sources: [TB, R + 'B11983830/', R + 'B117245036/', R + 'B112810325/', R + 'B45126882/', R + 'B188042639/', R + 'B417396137/', R + 'B5541237/', R + 'B458552889/', R + 'B512595958/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; nine seats; shoes off; book by phone.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区堺町通御池上ル扇屋町646 押小路マンション 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review August 2025.' },
    pin_source: `Tabelog ${TB} (35.011947, 135.763391); cross-checked: GSI 京都府京都市中京区扇屋町646番地 (lot) 31 m; nearest existing record 42.6 m (kyoto_kakyu_oshikoji); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B45126882/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Trio of croquettes', '', 'Small dishes', 'no', 'no', 'March 2014; fillings change with the season.', 'croquettes'),
    ] }, {
    cuisine: 'ベテランの店主がていねいに作る旬の小鉢とおばんざいのカウンター9席 (2009〜2025年の口コミ)・おばんざいから牛肉まで、名物の3種のコロッケ (帆立のクリームと春菊、れんこんと肉など)、聖護院近くの豆腐の温かい一品 (2009〜2025年の口コミ)・京都や滋賀などの日本酒を選べる酒器で、和食に合うワイン、焼酎 (2010〜2025年の口コミ)・6,000〜15,000円ほど (食べログ、2014〜2025年の口コミ)',
    neighborhood: '堺町御池',
    gf_detail: '要確認。旬の小鉢とおばんざいは添加物のない食材で作り (2009年の口コミ)、一人分に量を合わせてくれる (2018年) が、コロッケは衣、味付けに醤油。グルテンの情報はない。',
    vegan_detail: '要確認。豆腐や野菜のおばんざいもあるが、だしの可能性が高く、牛肉や魚介も (2009〜2025年の口コミ)。',
    notes: '[カウンターの料理・堺町御池、現金のみ] のれんの奥の隠れたカウンター9席。長く続ける店主が旬の小鉢、おばんざい、名物のコロッケを作り、日本酒やブルゴーニュも。靴を脱いで上がる。電話で予約を。火・水休み。',
  });
}

// ================================================================ シナモ sinamo
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000179/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.sinamo.co.jp/';
  const H = day(['11:30', '16:00'], ['17:30', '23:00']);
  put({
    id: 'kyoto_sinamo_teramachi', name: 'シナモ (sinamo)', category: 'OMNI',
    lat: 35.01298763786681, lng: 135.76716312043794, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a pizza house — square sinamo-style pizza, pasta and focaccia; no gluten-free crust mentioned (official site; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Appetiser plates are heavy on Kyoto vegetables (slow-roasted kintoki carrot, pumpkin), but cheese, ham and oysters feature widely (2026 reviews).',
    hours_raw: 'Daily 11:30–16:00 and 17:30–23:00; closing days not fixed (Tabelog). Lunch set menu 11:30–14:00 last order (official site, October 2026). Reservations online 24 hours to 30 days ahead (official site). No cover charge (Tabelog original チャージ料ナシ). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and Rakuten Edy (Tabelog). 28 seats: 20 at tables, 8 on sofas; non-smoking; English menu (Tabelog). Groups of minors only are turned away in the evening (official site, April 2026). Take-out and mail order (official site). Opened 15 April 1999 (Tabelog; official site). 2 min walk from Kyoto Shiyakusho-mae Stn exit 11.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Teramachi-Nijo, near City Hall',
    cuisine: 'Casual wine and square “sinamo-style” pizza, a lamp-lit long room on Teramachi since 1999 (official site; Tabelog) · pizzas such as blue cheese and honey, lotus root, carbonara, Margherita; seasonal pizzas of domestic mushrooms with sudachi, or house pork ham with pickles (official site; 2025–2026 reviews) · assorted appetisers of Kyoto vegetables, black truffle omelette, oyster gratin, fried oysters, prosciutto and salami, beef cheek braised in red wine (November 2025–September 2026) · lunch sets of appetiser and salad plate with pasta, pizza or hamburg steak and focaccia (2025–2026 reviews) · sparkling wine ¥500 (November 2025) · lunch about ¥1,000–2,000, dinner about ¥3,000–5,000 (Tabelog)',
    website: WEB, gmaps: gm('シナモ 寺町二条'), menu_url: WEB,
    notes: '[Pizza and wine · Teramachi-Nijo] A warm, lamp-lit Teramachi favourite since 1999: square sinamo-style pizzas such as blue cheese and honey, Kyoto-vegetable appetiser plates, truffle omelette and keenly priced wine, with good-value lunch sets. No cover charge.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per the official site and Tabelog: a single pizza and casual-wine restaurant opened 15 April 1999, marking its 27th year in April 2026, guided by “simple, natural, modern” and its trademarked sinamo-style pizza; it also sells take-out and by mail order.',
      philosophy: 'Simple, natural, modern — brightening Japan with sinamo-style pizza (official site).', specialty: 'Square sinamo-style pizza.',
      anecdotes: [
        { text: 'A September 2026 food blogger was teased by a friend for not knowing the orange-lit Teramachi place, and arrived first through the door at opening.', source: R + 'B137560945/' },
        { text: 'A January 2026 lunch guest praised kintoki carrot slow-roasted for an hour, sweet without added sugar.', source: R + 'B521205450/' },
        { text: 'An April 2026 birthday group found nearly every table ordering the birthday plate, which spoiled the surprise.', source: R + 'B525734046/' },
      ],
      japanese_sources_summary: '食べログ: ピザ・イタリアン・ワインバー、中京区寺町通二条下ル妙満寺前町454-3 呉波ビル 1F、市役所前駅11番出口から徒歩2分、毎日 11:30〜16:00、17:30〜23:00、不定休、予約可、チャージ料ナシ、カード (VISA・Master・JCB・AMEX・Diners)・交通系IC・楽天Edy 可、28席 (テーブル20、ソファ8)、禁煙、英語のメニュー、1999年4月15日開店。公式サイト: カジュアルワイン＆シナモ式ピザ、「シンプル･ナチュラル･モダン」、シナモ式ピザは商標登録済み、2026年4月15日に開店満27周年、ランチ・セットメニュー (11:30-14:00 L.O.)、国産キノコとすだちのピザ、自家製豚ハムと季節野菜ピクルスのピザ、夜の部は未成年者だけの来店は断る、テイクアウト、通販。口コミ (2025年11月〜2026年9月、英語): オレンジの灯りの細長い店内、ブルーチーズとはちみつ、れんこん、カルボナーラ、マルゲリータのピザ、京野菜の前菜、黒トリュフのオムレツ、牡蠣のグラタン、カキフライ、生ハムとサラミ、牛ほほ肉の赤ワイン煮、昼のセット、スパークリングワイン500円。',
      confidence: 'medium', sources: [TB, WEB, R + 'B137560945/', R + 'B516352808/', R + 'B517793756/', R + 'B521205450/', R + 'B521439140/', R + 'B523092901/', R + 'B524833737/', R + 'B525734046/', R + 'B535157720/', R + 'B535600737/'] },
    cultural_comfort: { level: 'english', note: 'English menu; no cover charge; book online.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区寺町通二条下ル妙満寺前町454-3 呉波ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site (news October 2026); reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.012988, 135.767163); cross-checked: GSI 京都府京都市中京区妙満寺前町454番地 (lot) 15 m; nearest existing record 50.5 m (kyoto_calvador_bar); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517793756/', R + 'B535157720/'],
    price_note: 'Price from a November 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Blue cheese and honey pizza', '', 'Pizza', 'no', 'no', 'November 2025; September 2026.', 'bluecheese'),
      it('', '', 'Sparkling wine (glass)', '¥500', 'Drinks', 'ask', 'ask', 'November 2025.', 'sparkling'),
    ] }, {
    cuisine: '1999年から寺町のランプの灯る細長い店で、カジュアルワインと四角い「シナモ式ピザ」(公式サイト、食べログ)・ブルーチーズとはちみつ、れんこん、カルボナーラ、マルゲリータ、国産キノコとすだち、自家製豚ハムと季節野菜ピクルスなどのピザ (公式サイト、2025〜2026年の口コミ)・京野菜の前菜の盛り合わせ、黒トリュフのオムレツ、牡蠣のグラタン、カキフライ、生ハムとサラミ、牛ほほ肉の赤ワイン煮 (2025年11月〜2026年9月)・前菜とサラダのプレートにパスタ、ピザ、ハンバーグとフォカッチャの昼のセット (2025〜2026年の口コミ)・スパークリングワイン500円 (2025年11月)・昼1,000〜2,000円ほど、夜3,000〜5,000円ほど (食べログ)',
    neighborhood: '寺町二条、市役所の近く',
    gf_detail: 'グルテンフリー不可。ピザの店で、四角いシナモ式ピザ、パスタ、フォカッチャ。グルテンフリーの生地の記載はない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。前菜は京野菜が多い (じっくり焼いた金時にんじん、かぼちゃ) が、チーズ、ハム、牡蠣も多い (2026年の口コミ)。',
    notes: '[ピザとワイン・寺町二条] 1999年からの寺町の温かなランプの店。ブルーチーズとはちみつなどの四角いシナモ式ピザ、京野菜の前菜、トリュフのオムレツ、手ごろなワイン、お得な昼のセット。チャージ料なし。',
  });
}

save();
