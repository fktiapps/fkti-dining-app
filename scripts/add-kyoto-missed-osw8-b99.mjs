// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 99 (2026-11-08).
//   + 個室焼肉 萬 Private Rooms Yakiniku Yorozu (all-private-room yakiniku, Kurumayamachi-Nijo; rest)
//   + わいんばーりゅうちゃん Wine Bar Ryu Chan (one-man wine bar with Italian cooking, Shijo-Horikawa; rest)
//   + カフェレストランラベンダー Cafe Restaurant Lavender (buffet restaurant of Urban Hotel Kyoto Shijo Premium; rest)
//   + わらじや Warajiya (giant “waraji” cutlets on the Kiyomizu approach; rest)
//   Rest list (mod 6 = 1) after batch 98, nearest-first — skipped:
//   - 川勝總本家 清水寺参道店 26018137: chain — 川勝總本家 lists six shops (main shop, Kiyomizu, Arashiyama, Ohara, two at Kyoto
//     Station; kawakatu.com, 2026-11-08); also a takeaway pickle shop.
//   - Cafe Sekki 26041579: big-chain hotel (Greg 11-08) — Six Senses Kyoto (its Sekki restaurant is already hidden).
//   - はな篭 26004391: thin listing (3 reviews).
//   Flag: Lavender is a hotel restaurant of Urban Hotel Kyoto Shijo Premium; search results cite a 2018 operator press release (Urban
//   Hotel System) describes the group as four hotels in Kyoto and Shiga, with this the fifth planned — a regional group, not a
//   national chain, so drafted; please confirm.
//   Brand check: queue-status.jsonl, than.co.jp/brands and the WILL brands checked — none matches. わらじや is a single shop
//   (kyoto-cutlet-warajiya.jp). None of the four is in data (main 8cf01ac0, hidden records included).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-99');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260301/26018137/', 'chain: 川勝總本家 — six shops listed on kawakatu.com (2026-11-08); also a takeaway pickle shop');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26041579/', 'big-chain hotel (Greg 11-08): Six Senses Kyoto (Sekki already hidden as kyoto_sekki_six_senses)');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26004391/', 'thin listing: 3 reviews');

// ================================================================ 個室焼肉 萬 Yorozu
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26037961/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_koshitsu_yakiniku_yorozu', name: '個室焼肉 萬 (Private Rooms Yakiniku Yorozu)', category: 'OMNI',
    lat: 35.01465843705823, lng: 135.76041887929776, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salted tongue and plain cuts may suit, but marinades, sukiyaki-style beef, yukgaejang and sauces use soy (2024–2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef yakiniku restaurant (2024–2026 reviews).',
    hours_raw: 'Daily including holidays 11:00–15:00 (drinks last order 14:00) and 17:00–23:00 (last order 22:00); closing days not fixed (Tabelog). Reservations accepted; a fully soundproof VIP room with karaoke is ¥3,000 extra and limited to the first two groups — regular private rooms are free (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and QR (PayPay, d Barai, Rakuten Pay, Alipay, WeChat Pay); no e-money (Tabelog). 60 seats, all in sunken-kotatsu private rooms for 4 or 6, plus two VIP rooms and banquet rooms; non-smoking, smoking area (Tabelog). Some rooms are semi-private and sound carries (February 2026). 2 min walk from Marutamachi Stn exit 7 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kurumayamachi-Nijo, near Marutamachi',
    cuisine: 'Yakiniku in private kotatsu rooms, focused on how cuts are sliced and eaten (Tabelog) · courses such as the Banpuku course: seared yukhoe, thick salted tongue, a five-cut platter, rare cuts of Oita beef over charcoal, sukiyaki-style beef, rice cooked in a pot (June 2024–March 2026) · lunch: yakiniku set of 50 g each loin, kalbi and outside skirt with rice, kimchi, namul, salad and wakame soup; beef bowl; yukgaejang set (April 2025–March 2026) · lunch about ¥1,000–2,000, dinner about ¥6,000–10,000 (Tabelog; 2024–2026 reviews)',
    website: null, gmaps: gm('個室焼肉 萬 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Yakiniku · near Marutamachi, all private rooms] A yakiniku house of private sunken-kotatsu rooms, good for business dinners: courses of thick tongue, seared yukhoe, Oita rare cuts and pot rice, plus good-value lunch sets. VIP karaoke rooms ¥3,000 extra.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a private-room yakiniku restaurant near Marutamachi with charcoal grilling, popular for meetings and with overseas guests; service quality has drawn mixed comments (June 2025; February 2026).',
      philosophy: 'Yakiniku focused on how each cut is sliced and eaten (Tabelog).', specialty: 'Yakiniku course; pot rice.',
      anecdotes: [
        { text: 'A March 2026 diner expected little from a cheap private-room course but was won over by thick tongue, seared yukhoe and charcoal-grilled Oita beef.', source: R + 'B524572965/' },
        { text: 'A November 2025 first-timer was glad to eat late in a private room, with rice cooked in a pot and served piping hot.', source: R + 'B517243226/' },
        { text: 'A June 2025 regular found a Friday night empty and the food slow, a drop from earlier visits.', source: R + 'B473780624/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉、中京区真如堂町323-4、丸太町駅7番出口から徒歩2分、毎日 (祝日も) 11:00〜15:00 (L.O.飲み物14:00)、17:00〜23:00 (L.O.22:00)、不定休、予約可 (完全防音の VIP 個室は3,000円、先着2組、通常の個室は無料)、カード (VISA・Master・JCB・AMEX・Diners)・QR (PayPay・d払い・楽天ペイ・Alipay・WeChat Pay) 可、電子マネー不可、60席 (すべて掘りごたつの個室、4名9室・6名4室、VIP 2室、宴会場)、禁煙 (喫煙所あり)、カラオケ。口コミ (2024年6月〜2026年3月、英語): 萬福コース、炙りユッケ、厚切りの塩タン、5種盛り、大分の希少部位、炭火、すき焼き風、釜炊きのご飯、昼の焼肉定食 (ロース・カルビ・ハラミ各50g、ご飯、キムチ、ナムル、サラダ、わかめスープ)、牛丼、ユッケジャンの定食、接待向き、海外の客が多い、半個室で声が聞こえるとの声。',
      confidence: 'medium', sources: [TB, R + 'B473780624/', R + 'B486708131/', R + 'B489820896/', R + 'B504680342/', R + 'B505169933/', R + 'B517243226/', R + 'B518667858/', R + 'B524572965/', R + 'B530111582/', R + 'B536618398/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; VIP karaoke room ¥3,000 extra; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区真如堂町323-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews through March 2026.' },
    pin_source: `Tabelog ${TB} (35.014658, 135.760419); cross-checked: GSI 京都府京都市中京区真如堂町323番地 (lot) 34 m; nearest existing record 13.7 m (kyoto_saryo_tesshin); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504680342/'],
    price_note: 'No item prices captured; lunch about ¥1,000–2,000 per Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Yakiniku lunch set (loin, kalbi, skirt 50 g each)', '', 'Lunch', 'ask', 'no', 'April 2025.', 'lunch'),
      it('', '', 'Banpuku course', '', 'Courses', 'ask', 'no', 'August 2024.', 'banpuku'),
    ] }, {
    cuisine: '切り方と食べ方にこだわる掘りごたつの個室の焼肉 (食べログ)・萬福コースなど: 炙りユッケ、厚切りの塩タン、5種盛り、炭火の大分の希少部位、すき焼き風の牛、釜炊きのご飯 (2024年6月〜2026年3月)・昼はロース・カルビ・ハラミ各50gにご飯、キムチ、ナムル、サラダ、わかめスープの焼肉定食、牛丼、ユッケジャンの定食 (2025年4月〜2026年3月)・昼1,000〜2,000円ほど、夜6,000〜10,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '車屋町二条、丸太町の近く',
    gf_detail: '要確認。塩タンや素焼きの肉は合う可能性があるが、たれ、すき焼き風、ユッケジャン、ソースは醤油 (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。牛の焼肉の店 (2024〜2026年の口コミ)。',
    notes: '[焼肉・丸太町の近く、全室個室] 掘りごたつの個室の焼肉店、接待にも。厚切りタン、炙りユッケ、大分の希少部位、釜炊きご飯のコース、お得な昼の定食も。カラオケ付きの VIP 個室は3,000円。',
  });
}

// ================================================================ わいんばーりゅうちゃん Wine Bar Ryu Chan
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26035147/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_wine_bar_ryuchan', name: 'わいんばーりゅうちゃん (Wine Bar Ryu Chan)', category: 'OMNI',
    lat: 35.00353039786821, lng: 135.75272905035254, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF for most dishes: pasta, gratin and pork cutlet (2023–2026 reviews). Ajillo and cheese may suit — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, meat, cheese and cream dishes (2023–2026 reviews).',
    hours_raw: 'Monday–Saturday 17:00–24:00; closed Sunday (Tabelog). Reservations accepted; call for large groups (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and QR; no e-money (Tabelog). 10 counter seats; non-smoking; free Wi-Fi; a sommelier (Tabelog). Run single-handed by the owner (2024–2026 reviews). Guys57 Building 2F, just east of Shijo-Horikawa; 7–8 min walk from Omiya Stn (Tabelog; June 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Horikawa',
    cuisine: 'Counter wine bar with a long menu of Italian cooking, made by a one-man owner (2023–2026 reviews) · pastas in oil, cream or tomato sauces with a choice of pasta shape; seafood pasta; salmon cream pasta (March 2024–October 2026) · fried figs with prosciutto, cheese platter, tripe in tomato, shrimp and mushroom ajillo, seafood gratin, pork cutlet (December 2025–November 2026) · usually three reds, three whites and a sparkling by the glass, e.g. a Takahata Winery white (November 2026) · about ¥4,000–6,000 (Tabelog; 2024–2026 reviews)',
    website: null, gmaps: gm('わいんばーりゅうちゃん 四条堀川'), menu_url: null,
    notes: '[Wine bar · Shijo-Horikawa, late] A bright, tidy ten-seat counter where the owner pours three reds and three whites by the glass and cooks a surprisingly long Italian menu — pastas your way, ajillo, gratin, fried figs with prosciutto — until midnight. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner and sommelier (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a counter wine bar run single-handed by its owner, with a sommelier on hand and a menu more like a trattoria than a bar (2023–2026 reviews).',
      philosophy: null, specialty: 'Pasta; wine by the glass.',
      anecdotes: [
        { text: 'A March 2024 visitor marvelled that the owner alone offered oil, cream and tomato pastas with a choice of noodle shape.', source: R + 'B482574659/' },
        { text: 'A November 2026 regular always takes the three whites, and liked a Takahata Winery white from Yamagata.', source: R + 'B518073214/' },
        { text: 'An October 2026 table found smooth service from the one-man kitchen, with food served on warmed plates.', source: R + 'B537591879/' },
      ],
      japanese_sources_summary: '食べログ: ワインバー、下京区四条堀川東入柏屋町12 Guys57 2F、大宮駅から徒歩7〜8分、月〜土 17:00〜24:00、日曜休み、予約可 (大人数は電話で)、カード (VISA・Master・JCB・AMEX・Diners・銀聯)・QR 可、電子マネー不可、カウンター10席、禁煙、Wi-Fi、ソムリエ。口コミ (2023年7月〜2026年11月、英語): 店主一人で、料理の豊富なワインバー、オイル・クリーム・トマトのパスタ (麺を選べる)、魚介のパスタ、サーモンのクリームパスタ、いちじくのフライと生ハム、チーズの盛り合わせ、トリッパのトマト煮、えびとマッシュルームのアヒージョ、魚介のグラタン、とんかつ、グラスで赤白3種ずつと泡、高畠ワイナリーの白。',
      confidence: 'medium', sources: [TB, R + 'B473703277/', R + 'B476643700/', R + 'B482574659/', R + 'B485364893/', R + 'B494625518/', R + 'B502449981/', R + 'B508956456/', R + 'B518073214/', R + 'B519916455/', R + 'B537591879/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter of ten; one-person service; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区四条堀川東入柏屋町12 Guys57 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003530, 135.752729); GSI matches only the town 柏屋町 (37 m), so the Tabelog pin is kept unconfirmed; nearest existing record 13.4 m (kyoto_bungalow_shijo_horikawa, 柏屋町15); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537591879/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Pasta (oil, cream or tomato; choice of shape)', '', 'Pasta', 'no', 'no', 'March 2024.', 'pasta'),
      it('', '', 'Shrimp and mushroom ajillo', '', 'Small plates', 'ask', 'no', 'October 2026.', 'ajillo'),
    ] }, {
    cuisine: '店主一人で作るイタリアンの料理が豊富なカウンターのワインバー (2023〜2026年の口コミ)・オイル、クリーム、トマトのパスタで麺も選べる、魚介のパスタ、サーモンのクリームパスタ (2024年3月〜2026年10月)・いちじくのフライと生ハム、チーズの盛り合わせ、トリッパのトマト煮、えびとマッシュルームのアヒージョ、魚介のグラタン、とんかつ (2025年12月〜2026年11月)・グラスは赤白3種ずつと泡、高畠ワイナリーの白など (2026年11月)・4,000〜6,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '四条堀川',
    gf_detail: 'ほとんどグルテンフリー不可。パスタ、グラタン、とんかつ (2023〜2026年の口コミ)。アヒージョやチーズは合う可能性、要確認。',
    vegan_detail: 'ヴィーガン不可。魚介、肉、チーズ、クリームの料理 (2023〜2026年の口コミ)。',
    notes: '[ワインバー・四条堀川、深夜まで] 明るくきれいなカウンター10席。店主一人がグラスで赤白3種ずつ注ぎ、好みのパスタ、アヒージョ、グラタン、いちじくのフライと生ハムなど驚くほど豊富なイタリアンを深夜0時まで。日曜休み。',
  });
}

// ================================================================ カフェレストランラベンダー Cafe Restaurant Lavender
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26033221/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['06:00', '10:00'], ['11:30', '14:00'], ['15:00', '22:00']); const WE = day(['06:00', '10:30'], ['11:30', '14:00'], ['15:00', '22:00']);
  put({
    id: 'kyoto_cafe_restaurant_lavender', name: 'カフェレストランラベンダー (Cafe Restaurant Lavender)', category: 'OMNI',
    lat: 35.002771828775714, lng: 135.75241418507025, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A buffet of Japanese, Western and Chinese dishes — curry, croquettes and shrimp chilli included — with shared utensils; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A wide buffet may include vegetable dishes, but none is described as vegan (2024–2026 reviews).',
    hours_raw: 'Weekdays: breakfast 6:00–10:00, lunch 11:30–14:00, 15:00–22:00; weekends and holidays: breakfast 6:00–10:30, lunch 11:30–14:00, 15:00–22:00; open all year (Tabelog). From 1 April 2026 the evening à la carte dinner became bar service; dinner buffets for groups by advance booking (Tabelog). Open to non-guests — a board at the hotel entrance invites the public (December 2025). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). 50 seats; bright and casual; babies welcome (Tabelog; September 2026). Inside Urban Hotel Kyoto Shijo Premium on Horikawa-dori, by the Shijo-Horikawa bus stop; 3 min walk from Hankyu Omiya (Tabelog). Opened 13 October 2019 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Horikawa',
    cuisine: 'Hotel buffet restaurant open to all, with Japanese, Western and Chinese dishes (2024–2026 reviews) · breakfast buffet ¥2,200 of gentle home-style dishes (December 2025; July 2026) · daily lunch buffet ¥2,500 with roast beef, shrimp chilli, crab cream croquettes, curry rice, seasonal New Year dishes; unlimited juice, coffee, Uji matcha latte, grape-vinegar juice (April 2024–January 2026) · bar service from 15:00 (Tabelog)',
    website: null, gmaps: gm('カフェレストラン ラベンダー アーバンホテル京都四条プレミアム'), menu_url: null,
    notes: '[Hotel buffet · Shijo-Horikawa] The bright restaurant of Urban Hotel Kyoto Shijo Premium, open to everyone: an early breakfast buffet from 6:00 (¥2,200) and a home-style lunch buffet (about ¥2,500) with roast beef, shrimp chilli and curry. Bar from 15:00. Open daily.',
    chef_bio: { chef_name: null, roles: ['Hotel restaurant staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: the restaurant of Urban Hotel Kyoto Shijo Premium, opened 13 October 2019, serving breakfast and lunch buffets to hotel guests and the public; from April 2026 the evenings became bar service (Tabelog).',
      philosophy: null, specialty: 'Lunch buffet.',
      anecdotes: [
        { text: 'A February 2024 runner fuelled up before the Kyoto Marathon after the staff opened early.', source: R + 'B480260457/' },
        { text: 'A September 2026 family with a six-month-old found the bright room easy to relax in.', source: R + 'B513604541/' },
        { text: 'A January 2026 lunch guest enjoyed the New Year specials, including black soybeans, and the curry rice.', source: R + 'B520186714/' },
      ],
      japanese_sources_summary: '食べログ: ビュッフェ・日本料理・洋食、下京区堀川通四条下ル四条堀川町272-6 アーバンホテル京都四条プレミアム、阪急大宮駅から徒歩3分、平日 6:00〜10:00、11:30〜14:00、15:00〜22:00、土日祝 6:00〜10:30、11:30〜14:00、15:00〜22:00、年中無休、2026年4月1日から夜はアラカルトからバー営業に (団体は予約でディナービュッフェ)、予約可、カード (VISA・Master・JCB・AMEX・Diners) 可、50席、2019年10月13日開店。口コミ (2022年6月〜2026年9月、英語): 朝食ビュッフェ2,200円、昼のビュッフェ2,500円、ローストビーフ、えびチリ、かにクリームコロッケ、カレー、正月の料理、宇治抹茶ラテ、ぶどう酢のジュース、一般の客も利用可、明るい店内。',
      confidence: 'medium', sources: [TB, R + 'B450383136/', R + 'B480260457/', R + 'B482977807/', R + 'B502963608/', R + 'B510281756/', R + 'B513604541/', R + 'B518994659/', R + 'B520186714/', R + 'B524113747/', R + 'B532786105/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Open to non-guests; buffet; many overseas guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区堀川通四条下ル四条堀川町272-6 アーバンホテル京都四条プレミアム',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (notice of the April 2026 change); reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002772, 135.752414); cross-checked: GSI 京都府京都市下京区四条堀川町272番地 (lot) 40 m; nearest existing record 58.0 m (kyoto_takada_shijo_horikawa); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B482977807/', R + 'B518994659/'],
    price_note: 'Prices from April 2024 and December 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch buffet', '¥2,500', 'Buffet', 'ask', 'ask', 'April 2024.', 'lunch'),
      it('', '', 'Breakfast buffet', '¥2,200', 'Buffet', 'ask', 'ask', 'December 2025.', 'breakfast'),
    ] }, {
    cuisine: '和洋中の料理の、だれでも利用できるホテルのビュッフェのレストラン (2024〜2026年の口コミ)・やさしい家庭的な料理の朝食ビュッフェ2,200円 (2025年12月、2026年7月)・ローストビーフ、えびチリ、かにクリームコロッケ、カレーライス、季節の正月料理の昼のビュッフェ2,500円、ジュース、コーヒー、宇治抹茶ラテ、ぶどう酢のジュースが飲み放題 (2024年4月〜2026年1月)・15時からはバー営業 (食べログ)',
    neighborhood: '四条堀川',
    gf_detail: '要確認。カレー、コロッケ、えびチリもある和洋中のビュッフェで取り分けの器具は共用。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。品数の多いビュッフェで野菜料理もありそうだが、ヴィーガンと書かれた料理はない (2024〜2026年の口コミ)。',
    notes: '[ホテルのビュッフェ・四条堀川] アーバンホテル京都四条プレミアムの明るいレストラン、だれでも利用可。朝6時からの朝食ビュッフェ (2,200円) と、ローストビーフ、えびチリ、カレーの家庭的な昼のビュッフェ (2,500円ほど)。15時からバー。毎日営業。',
  });
}

// ================================================================ わらじや Warajiya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033227/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://kyoto-cutlet-warajiya.jp/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_warajiya_kiyomizu', name: 'わらじや (Warajiya)', category: 'OMNI',
    lat: 34.99535712788282, lng: 135.78228126024922, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: breaded cutlets with house sauce and demi-glace (official site; 2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, beef and chicken cutlets and hamburg (official site; 2025–2026 reviews).',
    hours_raw: 'Daily 11:00–18:00; hours may change (Tabelog). Full around noon, with waits of about 20 minutes (June 2025). Cards; no e-money (Tabelog). Non-smoking (Tabelog). Upstairs (2F) in a building on the slope up to Kiyomizu-dera (official site; February 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyomizu 1-chome, on the Kiyomizu-dera approach',
    cuisine: 'Set meals built around the “waraji katsu”, a huge, thin cutlet named after straw sandals — a Meiji–Taisho dish (official site; 2025–2026 reviews) · waraji tonkatsu of Kyotamba pork with house sauce; waraji beef cutlet with house demi-glace (official site) · also chicken katsu, hamburg steak with cabbage and pasta, shrimp fry; Koshihikari rice (June 2025–January 2026) · about ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('京都カツ わらじや 清水'), menu_url: WEB,
    notes: '[Katsu · Kiyomizu-dera approach] A handy, upstairs set-meal spot on the slope to Kiyomizu-dera for the “waraji katsu” — a plate-sized thin cutlet of Kyotamba pork or beef with house sauce. Reviews are mixed but it is a quick, reasonable stop. Open daily.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the official site and reviewers: 京都カツ わらじや, a single shop on the Kiyomizu approach serving the waraji cutlet, a dish dating from the Meiji–Taisho era, in pork (Kyotamba pork) and beef versions; a February 2026 reviewer calls it the only place in the Reiwa era still serving it.',
      philosophy: null, specialty: 'Waraji katsu.',
      anecdotes: [
        { text: 'A September 2026 Silver Week visitor, priced out by tourist spots on the crowded slope, was seated straight away for the waraji cutlet.', source: R + 'B536179205/' },
        { text: 'A January 2026 diner expecting a tourist trap was surprised by glossy Koshihikari rice with the beef cutlet.', source: R + 'B520009988/' },
        { text: 'An August 2025 guest found the cutlet thin and mostly batter, and the service lax.', source: R + 'B512901686/' },
      ],
      japanese_sources_summary: '公式サイト: 京都カツ わらじや (名物 とんかつ わらじや)、東山区清水1丁目269-1 源久秀2階、わらじカツは明治・大正時代に生まれた料理、自家製デミグラスソースと国産牛のわらじ牛カツ、自家製ソースと京丹波ポークのわらじとんかつ。食べログ: 洋食、毎日 11:00〜18:00、カード可、電子マネー不可、禁煙。口コミ (2024年12月〜2026年9月、英語): 清水寺への坂の途中、大きく薄いわらじカツ (100gほど)、とんかつ、牛カツ、チキンカツ、ハンバーグ、エビフライ、コシヒカリ、昼は満席で20分待ち (2025年6月)、令和で唯一の店との声 (2026年2月)、評価はまちまち。',
      confidence: 'medium', sources: [TB, WEB, R + 'B498706352/', R + 'B501981528/', R + 'B507446009/', R + 'B507834181/', R + 'B511916886/', R + 'B512901686/', R + 'B515417326/', R + 'B520009988/', R + 'B522042035/', R + 'B536179205/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Upstairs; busy at noon; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水1-269-1 源久秀 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (34.995357, 135.782281); cross-checked: GSI 京都府京都市東山区清水一丁目269番地 (lot) 12 m; nearest existing record 27.3 m (kyoto_kiyomizu_kyoami); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB],
    price_note: 'No prices on the official site or in the reviews read.', last_checked: TODAY, items: [
      it('', '', 'Waraji tonkatsu (Kyotamba pork)', '', 'Set meals', 'no', 'no', 'Official site.', 'waraji_ton'),
      it('', '', 'Waraji beef cutlet with demi-glace', '', 'Set meals', 'no', 'no', 'Official site.', 'waraji_gyu'),
    ] }, {
    cuisine: 'わらじにちなむ大きく薄い「わらじカツ」(明治・大正の料理) の定食 (公式サイト、2025〜2026年の口コミ)・自家製ソースと京丹波ポークのわらじとんかつ、自家製デミグラスソースのわらじ牛カツ (公式サイト)・チキンカツ、キャベツとパスタ添えのハンバーグ、エビフライ、コシヒカリのご飯 (2025年6月〜2026年1月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '清水1丁目、清水寺の参道',
    gf_detail: 'グルテンフリー不可。衣のカツに自家製ソースやデミグラス (公式サイト、2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚、牛、鶏のカツとハンバーグ (公式サイト、2025〜2026年の口コミ)。',
    notes: '[カツ・清水寺の参道] 清水寺への坂の2階の手軽な定食屋。皿からはみ出る薄い「わらじカツ」を京丹波ポークや牛で、自家製ソースとともに。評価はまちまちだが手早く手ごろ。毎日営業。',
  });
}

save();
