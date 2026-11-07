// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 52.
//   + カルド Card (spaghetti house in a Nishi-Kiyamachi alley since 1988, per a review; rest)
//   + GINZA MUSIC BAR KYOTO (listening bar with food, second shop of the Ginza original; rest)
//   + SOUL&FOOD Mookie (late-night American diner by the Takase River; rest)
//   + 丸萬 Maruman (sushi counter run by a couple off Shijo-Kiyamachi; rest)
//   Rest list (mod 6 = 1) after batch 51, nearest-first — skipped:
//   - 餃子のかっちゃん 京都河原町店 26039539: chain — Gurunavi lists Nagoya, Shizuoka, Yokkaichi, Sendai and Namba Dotonbori
//     shops; Osaka Fukushima is in our crawls.
//   - 牛角 京都四条河原町店 26026075: chain.
//   - 京家 きよみず 木屋町 26023213: already skipped in batch 48 (brand in data).
//   - マクドナルド 四条大橋店 26017123: chain.
//   - 鮨・酒・肴 杉玉 京都河原町 26035585: chain — seven 杉玉 shops in our crawls.
//   - ハイボールバー 京都1923 河原町店 26019835: chain — seven 1923 highball bars in our crawls.
//   Same-name check for the picks, same brand or operator only: カルド — one (コカルド in Osaka is a different name).
//   GINZA MUSIC BAR — Pia (opened 2026-11-06) calls the Kyoto bar the first official second shop of the Ginza original —
//   two shops, drafted. Mookie — one. 丸萬 — one. None of the four is in data/kyoto.json by name or address (カルド has no lot
//   number; 船頭町194 村上重ビル 2F; 稲荷町330-3 しきさい河原町ビル 1F — 食堂デイズ in data is a different shop in the same
//   building; 四条通小橋上西入).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-52');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26039539/', 'chain: 餃子のかっちゃん has shops in Nagoya, Shizuoka, Yokkaichi, Sendai, Osaka and Kyoto');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26026075/', 'chain: 牛角');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26017123/', 'chain: McDonald\'s');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26035585/', 'chain: seven 杉玉 shops in our crawls');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26019835/', 'chain: seven 1923 highball bars in our crawls');

// ================================================================ カルド Card
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000761/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_card_pasta_nishikiyamachi', name: 'カルド (Card)', category: 'OMNI',
    lat: 35.003057944261165, lng: 135.77031935154108, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a spaghetti house; sets come with bread (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream, carbonara, seafood and bacon sauces dominate; a tomato sauce and a mushroom special exist but no ingredient information (2026 reviews).',
    hours_raw: 'Monday, Tuesday and Thursday–Sunday 11:00–15:00 (lunch service until 14:00) and 18:00–21:00; closed Wednesday (Tabelog). No table reservations; parties can be booked (Tabelog). One order per person (March 2026). Cash only — no cards (Tabelog). No charge (Tabelog original なし). 25 seats; smoking allowed (Tabelog). Queues at weekday and weekend lunch (March and June 2026). Dim, retro interior; the toilet at the back looks onto the river (July 2026). Down a narrow alley off Nishi-Kiyamachi south of Shijo, east of Hankyu; 2 min walk from Shijo Kawaramachi (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishi-Kiyamachi south of Shijo — 2 min walk from Shijo Kawaramachi',
    cuisine: 'Long-running spaghetti house, established 1988 per a March 2026 review, with a long menu of sauces plus toppings (2026 reviews) · scallop and spinach cream ¥1,450; shrimp tomato ¥1,250, mozzarella topping ¥300 (March 2026) · carbonara, clam-bacon-spinach cream, mentaiko and natto, tarako and squid, Genovese, mushroom special, tomato (2026 reviews) · lunch and dinner sets with salad, bread and a drink (2026 reviews) · about ¥1,000–3,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('カルド 西木屋町 パスタ'), menu_url: null,
    notes: '[Pasta · Nishi-Kiyamachi, a retro alley spaghetti house] A dim, antique-filled pasta house down a narrow alley by the Takase River, serving a huge menu of spaghetti — the scallop, bacon and spinach cream is the signature — with value lunch and dinner sets. Expect a queue at lunch. One August 2026 guest found the pasta ordinary and the service unfriendly. Cash only; smoking allowed; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and hall staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a pasta and dining bar of 25 seats taking party bookings. A March 2026 reviewer gives 1988 as its founding year; reviewers describe freshly boiled pasta, an extensive menu and a retro, dim interior.',
      philosophy: 'Freshly boiled original spaghetti (Tabelog).', specialty: 'Scallop, bacon and spinach cream spaghetti.',
      anecdotes: [
        { text: 'A March 2026 visitor added cut baguette to scoop up the plentiful white sauce of the scallop and spinach cream.', source: R + 'B523464115/' },
        { text: 'An August 2026 diner whose Genovese was sold out read the menu five times, then ordered the first item on the first page — tomato spaghetti.', source: R + 'B535029523/' },
        { text: 'An August 2026 guest found the oil and carbonara pastas ordinary, the room too dark and an older staff member off-putting.', source: R + 'B535198069/' },
      ],
      japanese_sources_summary: '食べログ: パスタ・ダイニングバー、下京区西木屋町通四条下ル阪急百貨店東入ル、四条河原町から徒歩2分、月火木〜日 11:00〜15:00 (サービスランチは14:00まで)、18:00〜21:00、水曜休み、予約不可 (宴会は予約可)、カード不可、チャージなし、25席、喫煙可。口コミ (2026年3月〜10月、英語): 1988年創業、路地の奥、レトロで薄暗い店内、奥のトイレから川が見える、1人1オーダー、昼は行列、ソースとトッピングを選ぶ、ホタテとほうれん草のクリーム1,450円、エビのトマト1,250円、モッツァレラ300円、カルボナーラ、あさりとベーコンとほうれん草のクリーム、明太子納豆、たらことイカ、ジェノベーゼ、きのこ、サラダ・パン・ドリンク付きのセット、普通・暗い・店員の態度がよくないとの声 (2026年8月)。',
      confidence: 'medium', sources: [TB, R + 'B523464115/', R + 'B525324068/', R + 'B530043546/', R + 'B530165426/', R + 'B530869197/', R + 'B531383514/', R + 'B535029523/', R + 'B535198069/', R + 'B535828857/', R + 'B538170189/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; one order each; smoking allowed; many dishes are named only by ingredients.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区西木屋町通四条下ル阪急百貨店東入ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003058, 135.770319); the address has no lot number, so loc_precise false; nearest Kyoto record 20 m away (kyoto_murakamiju_honten); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523464115/'],
    price_note: 'Prices from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Scallop and spinach cream spaghetti', '¥1,450', 'Spaghetti', 'no', 'no', 'March 2026.', 'scallop_cream'),
      it('', '', 'Shrimp tomato spaghetti', '¥1,250', 'Spaghetti', 'no', 'no', 'March 2026.', 'shrimp_tomato'),
      it('', '', 'Mozzarella topping', '¥300', 'Toppings', 'ask', 'no', 'March 2026.', 'mozzarella'),
    ] }, {
    cuisine: '2026年3月の口コミでは1988年創業の老舗のスパゲッティの店、ソースとトッピングを選ぶ豊富なメニュー (2026年の口コミ)・ホタテとほうれん草のクリーム1,450円、エビのトマト1,250円、モッツァレラのトッピング300円 (2026年3月)・カルボナーラ、あさりとベーコンとほうれん草のクリーム、明太子納豆、たらことイカ、ジェノベーゼ、きのこ、トマト (2026年の口コミ)・サラダ・パン・ドリンク付きの昼と夜のセット (2026年の口コミ)・1,000〜3,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '四条の南の西木屋町。四条河原町から徒歩2分',
    gf_detail: 'グルテンフリー不可。スパゲッティの店で、セットにはパン (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。クリーム、カルボナーラ、魚介、ベーコンのソースが中心。トマトやきのこもあるが材料の情報はない (2026年の口コミ)。',
    notes: '[パスタ・西木屋町、路地のレトロなスパゲッティの店] 高瀬川近くの細い路地の奥、アンティークの並ぶ薄暗いパスタの店。ホタテとベーコンとほうれん草のクリームが看板の、膨大なスパゲッティのメニューとお得な昼と夜のセット。昼は行列も。2026年8月の客はパスタが普通で接客がよくないと感じた。現金のみ、喫煙可、水曜休み。',
  });
}

// ================================================================ GINZA MUSIC BAR KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043643/'; const R = TB + 'dtlrvwlst/'; const PIA = 'https://lp.p.pia.jp/article/news/436780/index.html';
  const MO = day(['17:00', '25:00']); const H = day(['12:00', '25:00']);
  put({
    id: 'kyoto_ginza_music_bar_kiyamachi', name: 'GINZA MUSIC BAR KYOTO', category: 'OMNI',
    lat: 35.00286046595625, lng: 135.77035213568874, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog lists gluten-free options; the menu also has brioche burgers, lasagna, tacos and fugu fish and chips (Tabelog; February 2026).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Tabelog lists vegan and vegetarian options; most signature dishes are wagyu, eel or fish (Tabelog; February 2026).',
    hours_raw: 'Monday 17:00–1:00; Tuesday–Sunday and holidays 12:00–1:00; last orders food 24:00, drinks 0:30 (Tabelog). Pia (August 2025 opening) gave 12:00–24:00 with Monday closed — Tabelog is newer. Reservations accepted; the 6-seat THE OMAKASE sushi counter is reservation-only (Tabelog; Pia). No charge (Tabelog original チャージ料なし). Cards and QR; no e-money (Tabelog). 45 seats: 11 at the counter, 34 at tables; up to 50 standing; non-smoking (Tabelog). 2F of the Murakamiju building on Nishi-Kiyamachi south of Shijo — cross the little bridge, go through the cafe and take the lift (Tabelog; February 2026). Loud music, especially at the counter and at night (March and May 2026).',
    hours: { 0: MO, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Kiyamachi south of Shijo — 2–3 min walk from Kawaramachi Stn',
    cuisine: 'Listening bar with records, a DJ booth and custom speakers, serving bar food and cocktails, plus a reservation-only 6-seat omakase sushi counter (Pia; 2026 reviews) · e.g. unagi sandwich, wagyu tacos, Tajima beef lasagna (Tabelog); wagyu burger on brioche, tuna and avocado tacos, wagyu steak with creamy potatoes, fugu fish and chips, Basque cheesecake, matcha gateau chocolat (February 2026) · gins such as Monkey 47, Japanese whisky, a gin and tonic; coffee by day, with a Toriba Coffee pop-up in October 2026 (2026 reviews) · about ¥2,000–8,000; sushi course higher (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('GINZA MUSIC BAR KYOTO'), menu_url: null,
    notes: '[Music bar · Nishi-Kiyamachi, records and cocktails] The Kyoto sister of Ginza\'s listening bar: vintage turntables and custom speakers loud enough to make the music the main event, with cocktails, wagyu tacos and a brioche wagyu burger — and, behind it, a six-seat omakase sushi counter by reservation. Quieter by day. Several reviewers note many overseas guests and find it pricey for the portions. Till 1 a.m.',
    chef_bio: { chef_name: null, roles: ['Bar staff and DJs (unnamed)', 'Sushi chef of THE OMAKASE (unnamed; trained at a Michelin three-star restaurant, per Pia)'], origin: null,
      background: 'Per Pia: GINZA MUSIC BAR was born in Ginza in 2014, created by Shinichi Osawa and the producer of the brand COFFEE; its first official second shop, GINZA MUSIC BAR KYOTO, opened at Shijo-Kiyamachi in August 2025, with original speakers of its own acoustic design, vintage turntables and amplifiers, and a reservation-only 6-seat sushi counter, THE OMAKASE, run by a craftsman trained at a Michelin three-star restaurant (ミシュラン三つ星店で修行した職人).',
      philosophy: 'Food, drink and music for all five senses (Tabelog).', specialty: 'Wagyu tacos; THE OMAKASE sushi counter.',
      anecdotes: [
        { text: 'A February 2026 father and daughter found the fish and chips made with fugu, and the room turned to Sonny Clark\'s "Cool Struttin\'" once a large table left.', source: R + 'B522242516/' },
        { text: 'A March 2026 counter guest could barely hold a conversation over the volume, and the gin and tonic arrived watery and flat.', source: R + 'B524811026/' },
        { text: 'Several reviewers note that many of the guests are from overseas (February–May 2026).', source: R + 'B530181573/' },
      ],
      japanese_sources_summary: '食べログ: バー、下京区西木屋町四条下ル船頭町194 村上重ビル 2F、祇園四条駅から徒歩5分、京都河原町駅から徒歩2〜3分、月 17:00〜翌1:00、火〜日・祝 12:00〜翌1:00 (L.O.フード24:00、ドリンク0:30)、予約可、チャージ料なし、カード・QR 可、電子マネー不可、45席 (カウンター11、テーブル34)、立食50名、禁煙、ヴィーガン・ベジタリアン・グルテンフリーの選択肢あり、おすすめは鰻サンド、和牛タコス、但馬牛のラザニア。ぴあ: 2014年に大沢伸一と「COFFEE」プロデューサー・鳥羽伸博が銀座に開いた GINZA MUSIC BAR の初のオフィシャル2号店として2025年8月に四条木屋町にオープン、オリジナルスピーカーとヴィンテージのターンテーブルとアンプ、ミシュラン三つ星店で修行した職人の完全予約制6席の寿司カウンター「THE OMAKASE」。口コミ (2026年2月〜10月、英語): 入口がわかりにくい、小さな橋を渡りカフェからエレベーター、音量が大きく会話しにくい、量のわりに高い、和牛バーガー、ツナとアボカドのタコス、和牛ステーキ、ふぐのフィッシュアンドチップス、バスクチーズケーキ、Monkey 47、昼は静か、Toriba Coffee のポップアップ (2026年10月)、外国人客が多いとの声が複数。',
      confidence: 'medium', sources: [TB, PIA, R + 'B522242516/', R + 'B524500698/', R + 'B524811026/', R + 'B525313038/', R + 'B526860915/', R + 'B530181573/', R + 'B533956287/', R + 'B535264120/', R + 'B536948698/', R + 'B537296778/'] },
    cultural_comfort: { level: 'english', note: 'Many overseas guests (several 2026 reviews); loud music at night; no cover charge; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西木屋町四条下ル船頭町194 村上重ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and Pia opening article; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002860, 135.770352); cross-checked: GSI 京都府京都市下京区船頭町194番地 (lot) 1 m; nearest Kyoto record 20 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B525313038/'],
    price_note: 'Dish names from Tabelog and a February 2026 review; no prices given.', last_checked: TODAY, items: [
      it('', '', 'Wagyu tacos', '', 'Food', 'ask', 'no', 'Tabelog; February 2026.', 'wagyu_tacos'),
      it('', '', 'Unagi sandwich', '', 'Food', 'no', 'no', 'Tabelog.', 'unagi_sand'),
      it('', '', 'Wagyu burger on brioche', '', 'Food', 'no', 'no', 'February 2026.', 'wagyu_burger'),
    ] }, {
    cuisine: 'レコード、DJブース、オリジナルスピーカーのリスニングバーで、バーの料理とカクテル、完全予約制6席のおまかせの寿司カウンターも (ぴあ、2026年の口コミ)・例: 鰻サンド、和牛タコス、但馬牛のラザニア (食べログ)、ブリオッシュの和牛バーガー、ツナとアボカドのタコス、クリーミーなポテトの和牛ステーキ、ふぐのフィッシュアンドチップス、バスクチーズケーキ、抹茶のガトーショコラ (2026年2月)・Monkey 47 などのジン、ジャパニーズウイスキー、ジントニック、昼はコーヒー、2026年10月はToriba Coffee のポップアップ (2026年の口コミ)・2,000〜8,000円ほど、寿司のコースはさらに上 (食べログ、2026年の口コミ)',
    neighborhood: '四条の南の西木屋町。河原町駅から徒歩2〜3分',
    gf_detail: '要確認。食べログにグルテンフリーの選択肢ありとある。ブリオッシュのバーガー、ラザニア、タコス、ふぐのフィッシュアンドチップスも (食べログ、2026年2月)。',
    vegan_detail: '食べログにヴィーガン・ベジタリアンの選択肢ありとある。看板料理の多くは和牛、鰻、魚 (食べログ、2026年2月)。',
    notes: '[ミュージックバー・西木屋町、レコードとカクテル] 銀座のリスニングバーの京都の姉妹店。ヴィンテージのターンテーブルとオリジナルスピーカーで音楽が主役になる音量。カクテル、和牛タコス、ブリオッシュの和牛バーガー、奥には予約制6席のおまかせの寿司カウンター。昼は静か。外国人客が多い、量のわりに高いという口コミが複数。深夜1時まで。',
  });
}

// ================================================================ SOUL&FOOD Mookie
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037211/'; const R = TB + 'dtlrvwlst/';
  const L = day(['17:30', '27:00']); const S = day(['17:30', '25:00']);
  put({
    id: 'kyoto_soul_food_mookie', name: 'SOUL&FOOD Mookie', category: 'OMNI',
    lat: 35.00226934619567, lng: 135.7695905455497, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: sandwiches, tacos, fried chicken, onion rings, nachos and fries (2023–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Avocado tacos and an acai bowl are on the menu, but no ingredient information; most dishes are chicken, pork or cheese (2024–2026 reviews).',
    hours_raw: 'Monday–Saturday and the day before a holiday 17:30–3:00 (last order 2:00); Sunday 17:30–1:00 (last order 24:00); holidays 17:30–3:00; open all year (Tabelog). Reviews from 2023–2024 describe lunch service too. Reservations accepted; private hire for 10 or more (Tabelog). Cards, e-money and QR (Tabelog). 20 table seats, up to 40 standing; smoking allowed except at lunch (Tabelog). Order at the counter first (September 2023). Events and parties held often (October 2026). 1F of the Shikisai Kawaramachi building by the Takase River; 3 min walk from Hankyu Kawaramachi Stn (Tabelog).',
    hours: { 0: L, 1: L, 2: L, 3: L, 4: L, 5: L, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi south of Shijo, by the Takase River — 3 min walk from Kawaramachi Stn',
    cuisine: 'American soul-food diner and bar, open till 3 a.m. (Tabelog; 2023–2026 reviews) · chicken over rice and pulled pork, a chicken-and-pork combo with fries ¥1,280 (June 2024); taco rice, steak sandwich, fried chicken, mac and cheese (2023–2026 reviews) · tacos by the piece — chicken, pork or avocado; onion rings with cheese; nachos; pickles (2024–2026 reviews) · desserts: acai bowls, banana splits (Tabelog; 2024–2026 reviews) · many beers (February 2025) · about ¥2,000–3,000 (Tabelog)',
    website: null, gmaps: gm('SOUL&FOOD Mookie 河原町'), menu_url: null,
    notes: '[American diner · Kawaramachi by the Takase River, till 3 a.m.] A laid-back American diner-bar with original art and films on screen: chicken over rice, pulled pork, tacos by the piece, cheesy onion rings and banana splits, plus plenty of beer — a late second or third stop. Several reviewers note many overseas guests. Some found the service muddled. Smoking allowed at night.',
    chef_bio: { chef_name: null, roles: ['Kitchen and bar staff (unnamed)'], origin: null,
      background: 'Per Tabelog: an American-culture restaurant near the Takase River serving soul-food classics such as pulled pork sandwiches and chicken over rice, with acai bowls and banana splits, open for private bookings. Reviewers in 2023–2026 describe original art, foreign films on screen, events and a stall at outside events.',
      philosophy: 'Authentic American flavours, careful preparation of the meat (Tabelog).', specialty: 'Chicken over rice; pulled pork.',
      anecdotes: [
        { text: 'A March 2024 pair received one shared portion of fries without explanation, and a machine coffee arrived instead of the drip coffee ordered.', source: R + 'B481938916/' },
        { text: 'A regular of four visits recommends it as a late second or third stop and enjoys the events and parties (October 2026).', source: R + 'B519710440/' },
        { text: 'Several reviewers note many overseas guests (February 2024–April 2025).', source: R + 'B524947995/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・ハンバーガー・アメリカ料理、下京区稲荷町330-3 しきさい河原町ビル 1F、阪急河原町駅から徒歩3分、月〜土・祝前日 17:30〜翌3:00 (L.O.2:00)、日 17:30〜翌1:00 (L.O.24:00)、祝日 17:30〜翌3:00、年中無休、予約可、10名以上で貸切可、カード・電子マネー・QR 可、テーブル20席、立食40名、喫煙可 (ランチのみ禁煙)、アメリカ文化の店、プルドポークのサンド、チキンオーバーライス、アサイーボウル、バナナスプリット。口コミ (2023年9月〜2026年11月、英語): 先にカウンターで注文、オリジナルアート、洋画の上映、チキンとポークのコンボとポテト1,280円、タコライス、ステーキサンド、フライドチキン、マカロニチーズ、タコス (チキン、ポーク、アボカド)、チーズのオニオンリング、ナチョス、ピクルス、ビールが豊富、イベントやパーティー、外国人客が多いとの声が複数、店員の対応がまごついたとの声 (2024年3月、2026年11月)。',
      confidence: 'medium', sources: [TB, R + 'B471822308/', R + 'B481934386/', R + 'B481938916/', R + 'B482345906/', R + 'B486804268/', R + 'B488059937/', R + 'B502070417/', R + 'B519710440/', R + 'B524947995/', R + 'B538540131/'] },
    cultural_comfort: { level: 'english', note: 'Many overseas guests (several reviews); order at the counter; smoking allowed at night; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区稲荷町330-3 しきさい河原町ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002269, 135.769591); cross-checked: GSI 京都府京都市下京区稲荷町330番地 (lot) 34 m; nearest Kyoto record 13 m away; kyoto_shokudo_days is in the same building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B486804268/'],
    price_note: 'Price from a June 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Chicken and pulled pork over rice with fries', '¥1,280', 'Plates', 'no', 'no', 'June 2024.', 'combo'),
      it('', '', 'Tacos (chicken, pork or avocado), by the piece', '', 'Tacos', 'no', 'ask', '2026 reviews.', 'tacos'),
    ] }, {
    cuisine: '深夜3時まで開いているアメリカのソウルフードのダイナー兼バー (食べログ、2023〜2026年の口コミ)・チキンオーバーライスとプルドポーク、ポテト付きのチキンとポークのコンボ1,280円 (2024年6月)、タコライス、ステーキサンド、フライドチキン、マカロニチーズ (2023〜2026年の口コミ)・1個から頼めるタコス (チキン、ポーク、アボカド)、チーズのオニオンリング、ナチョス、ピクルス (2024〜2026年の口コミ)・デザート: アサイーボウル、バナナスプリット (食べログ、2024〜2026年の口コミ)・ビールが豊富 (2025年2月)・2,000〜3,000円ほど (食べログ)',
    neighborhood: '四条の南の河原町、高瀬川沿い。河原町駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。サンドイッチ、タコス、フライドチキン、オニオンリング、ナチョス、ポテト (2023〜2026年の口コミ)。',
    vegan_detail: '要確認。アボカドのタコスやアサイーボウルもあるが材料の情報はない。ほとんどはチキン、ポーク、チーズ (2024〜2026年の口コミ)。',
    notes: '[アメリカのダイナー・高瀬川沿いの河原町、深夜3時まで] オリジナルアートと洋画が流れる気軽なアメリカのダイナー兼バー。チキンオーバーライス、プルドポーク、1個から頼めるタコス、チーズのオニオンリング、バナナスプリット、ビールもたっぷり。2軒目、3軒目に。外国人客が多いという口コミが複数。対応がまごついたと感じた客も。夜は喫煙可。',
  });
}

// ================================================================ 丸萬 Maruman
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26008795/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_maruman_sushi_shijo', name: '丸萬 (Maruman)', category: 'OMNI',
    lat: 35.004432, lng: 135.77021196034883, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nigiri with soy sauce and sweet eel sauce, kizushi, red miso soup; no gluten information (2020–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi counter (2020–2026 reviews).',
    hours_raw: 'Daily 17:00–24:00; enter by about 23:00; open all year; hours may change (Tabelog). Reservations accepted and advised — queues at busy times (Tabelog; January 2025). Cash only: no cards or e-money (Tabelog). 20 seats; non-smoking (Tabelog). On Shijo-dori west of Kobashi, near Hankyu Kawaramachi Stn (Tabelog; June 2023).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Shijo-Kiyamachi, west of Kobashi — near Kawaramachi Stn',
    cuisine: 'Small, old-style sushi counter with big, thick-cut toppings at modest prices (2020–2026 reviews) · e.g. premium assortment of 8 pieces ¥3,100 (May 2020); toro, hamachi, unagi, uni, tuna, anago (2020–2026 reviews) · kizushi to start; red miso soup with junsai (January 2025 and July 2026) · about ¥3,000–8,000 (Tabelog; 2022–2026 reviews)',
    website: null, gmaps: gm('丸萬 寿司 四条'), menu_url: null,
    notes: '[Sushi · Shijo-Kiyamachi, a couple\'s counter] A cosy evening sushi counter run by an older couple near Kawaramachi, known for generous, thick-cut toppings — fatty toro, hamachi and soft anago — and reasonable prices. Several reviewers note the counter is now mostly overseas guests; book ahead. One 2022 guest found the sushi ordinary but fair for the price. Cash only; till midnight.',
    chef_bio: { chef_name: null, roles: ['Sushi chef and partner (unnamed couple)'], origin: null,
      background: 'Per reviews (2022–2026): a small sushi shop run by an elderly couple near Shijo Kawaramachi, with large, thick-cut toppings; open evenings to midnight (Tabelog).',
      philosophy: null, specialty: 'Thick-cut nigiri; anago.',
      anecdotes: [
        { text: 'A January 2022 bar-hopper found the sushi not extraordinary but was satisfied for the price, and warmed by the couple behind the counter.', source: R + 'B445093613/' },
        { text: 'A July 2026 regular starts with kizushi and bottled beer, then nigiri with hot sake.', source: R + 'B522477658/' },
        { text: 'Several reviewers note the counter is now mostly overseas guests and advise booking (January 2025–October 2026).', source: R + 'B498896613/' },
      ],
      japanese_sources_summary: '食べログ: 寿司、下京区四条通小橋上西入、毎日 17:00〜24:00 (23時ごろまでに入店)、年中無休、営業時間は変わることあり、予約可、カード・電子マネー不可、20席、禁煙。口コミ (2020年1月〜2026年10月、英語): 年配のご夫婦の店、大きく厚いネタ、手ごろな値段、特上盛り合わせ8貫3,100円 (2020年5月)、とろ、はまち、うなぎ、雲丹、まぐろ、穴子、きずし、じゅんさいの赤だし、外国人客が多いとの声が複数、予約がおすすめ、すしは普通だが値段を考えると満足との声 (2022年1月)、吸い物や味噌汁ができなかったとの声 (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B427312513/', R + 'B431261540/', R + 'B438009550/', R + 'B445093613/', R + 'B458984066/', R + 'B473480318/', R + 'B491008159/', R + 'B498896613/', R + 'B522477658/', R + 'B537934379/'] },
    cultural_comfort: { level: 'english', note: 'Mostly overseas guests (several reviews); cash only; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区四条通小橋上西入',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004378, 135.770212) is 2.5 m from kyoto_ygrec and 4.8 m from kyr_aji_no_tentoku_kyoto_shi, so moved ~6 m north to 35.004432 (7.6 m and 8.9 m); the address has no lot number, so loc_precise false; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B427312513/'],
    price_note: 'Price from a May 2020 review.', last_checked: TODAY, items: [
      it('', '', 'Premium nigiri assortment (8 pieces)', '¥3,100', 'Nigiri', 'ask', 'no', 'May 2020.', 'tokujo'),
    ] }, {
    cuisine: '大きく厚いネタを手ごろな値段で出す小さな昔ながらのすしのカウンター (2020〜2026年の口コミ)・例: 特上盛り合わせ8貫3,100円 (2020年5月)、とろ、はまち、うなぎ、雲丹、まぐろ、穴子 (2020〜2026年の口コミ)・最初にきずし、じゅんさいの赤だし (2025年1月・2026年7月)・3,000〜8,000円ほど (食べログ、2022〜2026年の口コミ)',
    neighborhood: '四条木屋町、小橋の西。河原町駅の近く',
    gf_detail: '要確認。醤油やうなぎのたれの握り、きずし、赤だし。グルテンの情報はない (2020〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。すしのカウンター (2020〜2026年の口コミ)。',
    notes: '[すし・四条木屋町、夫婦のカウンター] 河原町近くで年配のご夫婦が営む夜の小さなすしのカウンター。脂ののったとろ、はまち、やわらかい穴子など厚切りのネタがたっぷりで値段は手ごろ。今は外国人客がほとんどという口コミが複数。予約がおすすめ。2022年の客は、すしは普通だが値段を考えると満足と書く。現金のみ、深夜0時まで。',
  });
}

save();
