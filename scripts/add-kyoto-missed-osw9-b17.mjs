// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 17.
//   + 近江牛 すき焼き しゃぶしゃぶ 都 Miyako (Omi and Kobe beef sukiyaki finished with cotton candy, Sanjo; 2024) [core]
//   + 肉の大橋亭 Niku no Ohashitei (Omi-beef butcher since 1894 on Matsubara-dori; croquettes fried to order)   [core]
//   + 祇園ゆやま Gion Yuyama (Gion kappo with a sunken counter and tea-room private rooms; cash only)            [notable]
//   + Pizzeria Napoletana Da Yuki (wood-fired Neapolitan pizza by Heian Shrine, after a move in Okazaki)       [notable]
//   - 洋菓子 ぎをん さかい 26016359 skipped (closed for renovation since 29 June 2026, no reopening date)
//   Same-name counts first: さかい — the name alone is shared by unrelated shops (さかい珈琲, 蔵六鮨さかい, 逸品さかい),
//   洋菓子 ぎをん さかい 1; 近江牛 すき焼き しゃぶしゃぶ 都 1 — its Tabelog page names a sister shop, 和牛 綿あめすき焼き
//   しゃぶしゃぶ ステーキ 都和 祇園四条店 (crawl 26045059), not in data: a group of two, drafted; 肉の大橋亭 1 (the official
//   site lists only this main shop and a processing centre); 祇園ゆやま 1; Da Yuki 1.
//   Taken in queue order on 2026-11-05: core 26016359 (skip), 26041499, 26024699; notable 26002661, 26040881.
//   None of the four is in data/kyoto.json by name or address. Da Yuki's former premises are now Senza X
//   (kyo_senza_x, background: "after Da Yuki relocated ~200m east to a larger space"); this record is the new address.
//   Service charges checked against Tabelog's Japanese original: 都 "なし" (the English says one is added).
//   Pins: 都's Tabelog point is 1.6 m from vm_yasai_dining_kusushi (also 大黒町42), so it is moved ~7 m south;
//   祇園ゆやま has no lot number and GSI matched only the ward, so loc_approx 'single'.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26016359', '洋菓子 ぎをん さかい: closed for renovation — official site (gion-sakai.com, read 2026-11-05): "■改装期間：2026年6月29日(月) ～", "当面の間は休業となります。", "営業再開時期は、改めてお知らせいたします。"; a June 2026 Tabelog review also mentions the long renovation from July');

// ================================================================ 近江牛 すき焼き しゃぶしゃぶ 都
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041499/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '15:30'], D = ['17:00', '22:30'];
  put({
    id: 'kyoto_omigyu_sukiyaki_miyako', name: '近江牛 すき焼き しゃぶしゃぶ 都 (Omi-gyu Sukiyaki Shabushabu Miyako)', category: 'OMNI',
    lat: 35.008389, lng: 135.769338, cuisine_type: 'sukiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The sukiyaki pot includes yaki-fu and nama-fu (wheat gluten) with a sweet soy sauce; meat sushi and appetizers also served; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef restaurant; pork can replace beef on request, except in the steak course (Tabelog).',
    hours_raw: '11:30–15:30 (last order 14:00) and 17:00–22:30 (last order 21:00); open all year (Tabelog). Bookings taken; one course per person; seating limited to 90 minutes when busy, except the special course; pork instead of beef if requested ahead (Tabelog). Service charge: none — Tabelog\'s Japanese original says "なし" (its English translation says a charge is added). 20 seats at 5 tables, up a flight of stairs on the 2nd floor; private hire up to 50; non-smoking; children welcome, kids\' menu; English and Traditional Chinese menus; English-, Chinese- and Korean-speaking staff; cards, PayPay and Alipay (Tabelog; October 2026). 3 min from Sanjo or Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 0: day(L, D), 1: day(L, D), 2: day(L, D), 3: day(L, D), 4: day(L, D), 5: day(L, D), 6: day(L, D) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi near Sanjo — 3 min from Sanjo or Kyoto Shiyakusho-mae Stn',
    cuisine: 'Sukiyaki, shabu-shabu and steak of A5 certified Omi beef (female cattle) and A5 Kobe beef; the staff cook the Kanto-style sukiyaki, melting a ball of cotton candy over the meat in place of sugar (Tabelog) · lunch sukiyaki sets with special Omi loin: 150 g ¥6,600, 200 g ¥8,140 (September 2026) · courses: sukiyaki with two pieces of meat sushi ¥8,800; Kobe-beef version ¥11,770; Kobe beef "Miyako" special course of sukiyaki, shabu-shabu and steak ¥17,600 (Tabelog); eight-appetizer Omi beef course ¥9,350 (October 2026) · the pot has vegetables, shirataki, tofu, yaki-fu and nama-fu; eggs from Oita, rice from Hachidaime Gihei, miso soup, pickles and matcha pudding (2026 reviews)',
    website: null, gmaps: gm('近江牛 すき焼き しゃぶしゃぶ 都 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Sukiyaki · Kawaramachi near Sanjo] A calm 2nd-floor room where staff cook A5 Omi or Kobe beef sukiyaki for you, melting a ball of cotton candy over the meat instead of sugar. Lunch sets from about ¥6,600; courses with meat sushi from ¥8,800. English menu and multilingual staff; no service charge per Tabelog's Japanese text. Open daily.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 10 August 2024 (Tabelog). Per the operator: only certified A5 Omi beef from female cattle and A5 Kobe beef; a sister shop, 都和 祇園四条店, with semi-private rooms, for when this one is full.',
      philosophy: null, specialty: 'Cotton-candy sukiyaki.',
      anecdotes: [
        { text: 'A September 2026 diner exclaimed "Wow!" as the staff melted the cotton candy over the beef.', source: R + 'B535511614/' },
        { text: 'An October 2026 visitor warned to mind the stairs up to the 2nd-floor room.', source: R + 'B537782586/' },
        { text: 'A weekday lunch booked a week ahead was calm enough to relax — October 2026.', source: R + 'B538239050/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 近江牛 すき焼き しゃぶしゃぶ 都、すき焼き・しゃぶしゃぶ・ステーキ、中京区大黒町42-3 山新ビル 2F、三条駅・京都市役所前駅から徒歩3分、11:30〜15:30 (L.O. 14:00)・17:00〜22:30 (L.O. 21:00)、年中無休、1人1コース、混雑時は90分制、牛肉が食べられない方は豚肉に変更可、サービス料: なし、20席 (テーブル5卓)、子供可、英語・繁体字のメニュー、2024年8月10日オープン、綿あめで作るすき焼き、A5 の認定近江牛 (雌牛) と神戸牛、姉妹店 都和 祇園四条店、肉寿司付きすき焼きコース8,800円、神戸牛11,770円、都スペシャルコース17,600円。口コミ (2026年9〜10月、英語): ランチのすき焼きセット150g 6,600円・200g 8,140円、前菜8品のコース9,350円、大分の卵、Hachidaime Gihei の米、焼き麩と生麩。',
      confidence: 'medium', sources: [TB, R + 'B535253161/', R + 'B535511614/', R + 'B535581284/', R + 'B535773190/', R + 'B535878684/', R + 'B536046396/', R + 'B536506352/', R + 'B537782586/', R + 'B538193612/', R + 'B538239050/'] },
    cultural_comfort: { level: 'english', note: 'English menu; English-, Chinese- and Korean-speaking staff (Tabelog); staff cook the pot for you.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区大黒町42-3 山新ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008439, 135.769338), moved ~5.5 m south to 35.008389 because vm_yasai_dining_kusushi (also 大黒町42) is pinned 1.6 m from the Tabelog point; cross-checked: GSI 京都府京都市中京区大黒町42番地 (lot) 33m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog, tax included (read 2026-11-05); lunch sets from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sukiyaki course with two pieces of meat sushi (certified Omi beef)', '¥8,800', 'Courses', 'ask', 'no', '', 'sukiyaki_sushi_omi'),
      it('', '', 'Kobe beef sukiyaki course with meat sushi', '¥11,770', 'Courses', 'ask', 'no', '', 'sukiyaki_sushi_kobe'),
      it('', '', 'Kobe beef "Miyako" special course (sukiyaki, shabu-shabu, steak)', '¥17,600', 'Courses', 'ask', 'no', '', 'miyako_special'),
      it('', '', 'Lunch sukiyaki set, special Omi loin 150 g', '¥6,600', 'Lunch', 'ask', 'no', 'September 2026 review.', 'lunch_150'),
    ] }, {
    cuisine: 'A5 の認定近江牛 (雌牛) と A5 の神戸牛のすき焼き、しゃぶしゃぶ、ステーキ。関東風のすき焼きはスタッフが作り、砂糖の代わりに綿あめを肉にのせて溶かす (食べログ)・昼のすき焼きセットは近江牛特選ロース150g 6,600円、200g 8,140円 (2026年9月)・コース: 肉寿司2貫付きのすき焼き8,800円、神戸牛版11,770円、すき焼き・しゃぶしゃぶ・ステーキの神戸牛「都」スペシャル17,600円 (食べログ)。前菜8品の近江牛コース9,350円 (2026年10月)・鍋には野菜、しらたき、豆腐、焼き麩と生麩。大分の卵、Hachidaime Gihei の米、味噌汁、漬物、抹茶プリン (2026年の口コミ)',
    neighborhood: '三条近くの河原町。三条駅や京都市役所前駅から徒歩3分',
    gf_detail: '要確認。すき焼きの鍋には小麦の焼き麩と生麩が入り、たれは甘い醤油。肉寿司や前菜も。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛肉の店。希望すれば豚肉に変更できる (ステーキコースを除く) (食べログ)。',
    notes: '[すき焼き・三条近くの河原町] 落ち着いた2階の店で、A5 の近江牛や神戸牛のすき焼きをスタッフが作り、砂糖の代わりに綿あめを肉にのせて溶かす。昼のセットは6,600円ほどから、肉寿司付きのコースは8,800円から。英語メニューと多言語のスタッフ。食べログの日本語原文ではサービス料なし。無休。',
  });
}

// ================================================================ 肉の大橋亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26024699/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.ohashitei.co.jp/'; const ACCESS = SITE + 'contact/';
  const H = day(['10:00', '17:30']);
  put({
    id: 'kyoto_niku_no_ohashitei', name: '肉の大橋亭 (Niku no Ohashi Tei)', category: 'OMNI',
    lat: 34.998772, lng: 135.771084, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the hot food is breaded and fried — croquettes, menchi-katsu and cutlets (2021–25 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a butcher; the croquettes are beef, fried with a lard aroma per a November 2021 reviewer.',
    hours_raw: '10:00–17:30; closed Sunday (official site). Tabelog lists 10:00–17:30 every day. Croquettes and cutlets are fried to order, about 6–8 minutes (2022–23 reviews). A meat sale on the 29th of the month ("meat day"), e.g. 29 October 2026 (official site; September 2022). Three seats on pipe chairs inside to eat hot (Tabelog; April 2024). Cards from ¥3,000 per a March 2023 reviewer; QR payments (Tabelog). On Matsubara-dori just west of Yamato-oji; 373 m from Kiyomizu-Gojo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Matsubara-dori west of Yamato-oji, near Rokuharamitsu-ji — 373 m from Kiyomizu-Gojo Stn',
    cuisine: 'A butcher selling Omi beef and other meats, miso-marinated meat, retort curry and hamburgers (Tabelog; official site; August 2022) · fried to order to eat on the spot or take away: Omi beef croquette ¥180 (2022–24; ¥100 on sale days), Omi beef menchi-katsu ¥300, Omi beef mince burger ¥380, wagyu fillet cutlet ¥600, black wagyu thigh cutlet ¥450, croquette burger ¥380; a limited mince sandwich that sells out (2022–24 reviews)',
    website: SITE, gmaps: gm('肉の大橋亭 京都 松原通'), menu_url: null,
    notes: "[Butcher's croquettes · Matsubara-dori, since 1894] An old Omi-beef butcher near Rokuharamitsu-ji that fries croquettes and cutlets to order — an Omi beef croquette was ¥180 in 2022–24 — to eat hot on one of three stools or carry away. Neighbourhood regulars come in for the meat. Closed Sunday per the official site.",
    chef_bio: { chef_name: null, roles: ['Family firm (大橋商事); no person named for today'], origin: null,
      background: 'Per Tabelog: founded in Kyoto in 1894 by the first-generation Zen\'emon Ohashi (romaji only), dealing in quality meat ever since; the official site\'s title reads "総本家 肉の大橋亭 | 近江牛匠技・創業明治二十七年". Reviewers say it once supplied the shogunate (2021–22 reviews). The official site lists this main shop and a processing centre in Minami-ku; recent site news (September and October 2026) announces sales and a stall at the Kyoto meat festival in Okazaki.',
      philosophy: null, specialty: 'Omi beef croquette.',
      anecdotes: [
        { text: 'On sale day in November 2021 the Omi beef croquette dropped from ¥180 to ¥100.', source: R + 'B443314596/' },
        { text: 'An April 2024 diner ate a croquette burger and a wagyu cutlet on a pipe chair while neighbourhood regulars kept coming in.', source: R + 'B483714000/' },
        { text: 'A March 2023 reviewer found it delicious but "a bit on the pricier side".', source: R + 'B461972444/' },
      ],
      japanese_sources_summary: '公式サイト (ohashitei.co.jp): 総本家 肉の大橋亭、近江牛匠技・創業明治二十七年、本店 東山区松原通大和大路西入ル弓矢町11、10:00〜17:30、定休日 日曜日、南加工センター (南区吉祥院)、2026年9月の秋の大売出し、2026年10月29日の肉の日セール、第11回京都肉祭に出店。食べログ: コロッケ、10:00〜17:30 (毎日)、3席、カード・QR 可、明治27年に初代 (英語訳では Zen\'emon Ohashi) が創業。口コミ (2017〜2025年、英語): 近江牛コロッケ180円、ミンチカツ300円、ヒレカツ600円、揚げたてを店内で、カードは3,000円から。',
      confidence: 'medium', sources: [TB, SITE, ACCESS, R + 'B443314596/', R + 'B453137656/', R + 'B454696547/', R + 'B461972444/', R + 'B482984961/', R + 'B483714000/', R + 'B484276012/', R + 'B494399589/', R + 'B523888289/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point and order at the counter; wait a few minutes for frying.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区松原通大和大路西入ル弓矢町11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with sale notices for September and October 2026; the newest Tabelog review is May 2025 (that reviewer places it on a Nishiki Market walk, which does not match the address).' },
    pin_source: `Tabelog ${TB} (34.998772, 135.771084); cross-checked: GSI 京都府京都市東山区弓矢町11番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B454696547/', R + 'B482984961/', R + 'B483714000/'],
    price_note: 'No menu read; prices from 2022–24 reviews.', last_checked: TODAY, items: [
      it('近江牛コロッケ', '', 'Omi beef croquette', '¥180', 'Fried', 'no', 'no', '2022–24 reviews.', 'omi_croquette'),
      it('', '', 'Omi beef menchi-katsu', '¥300', 'Fried', 'no', 'no', 'September 2022 review.', 'omi_menchi'),
      it('', '', 'Croquette burger', '¥380', 'Fried', 'no', 'no', 'April 2024 review.', 'croquette_burger'),
      it('', '', 'Black wagyu thigh cutlet', '¥450', 'Fried', 'no', 'no', 'April 2024 review.', 'wagyu_cutlet'),
    ] }, {
    cuisine: '近江牛などの肉、味噌漬け、レトルトのカレーやハンバーグを売る精肉店 (食べログ、公式サイト、2022年8月)・注文ごとに揚げてその場で、または持ち帰りで: 近江牛コロッケ180円 (2022〜24年。セールの日は100円)、近江牛ミンチカツ300円、近江牛ミンチバーガー380円、和牛ヒレカツ600円、黒毛和牛もものカツ450円、コロッケバーガー380円。売り切れる限定のミンチサンド (2022〜24年の口コミ)',
    neighborhood: '大和大路の西の松原通、六波羅蜜寺の近く。清水五条駅から373m',
    gf_detail: 'グルテンフリー不可。温かいものは衣をつけて揚げたコロッケ、ミンチカツ、カツ (2021〜25年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。精肉店で、コロッケは牛肉入り。2021年11月の口コミではラードの香り。',
    notes: '[精肉店のコロッケ・松原通、1894年創業] 六波羅蜜寺近くの近江牛の老舗精肉店で、コロッケやカツを注文ごとに揚げる。近江牛コロッケは2022〜24年に180円。3つの椅子で熱々を食べるか持ち帰りで。地元の常連が肉を買いに来る。公式サイトでは日曜休み。',
  });
}

// ================================================================ 祇園ゆやま
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002661/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_gion_yuyama', name: '祇園ゆやま (Gion Yuyama)', category: 'OMNI',
    lat: 35.005669, lng: 135.777062, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Kappo kaiseki with dashi soups, yuba and fish; no gluten information (Tabelog; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seasonal fish, tuna, duck and dashi-based soups (Tabelog; 2025–26 reviews).',
    hours_raw: 'Tue–Sun 11:30–14:00 and 17:00–23:00; closed Monday (Tabelog). Reservation only; online booking takes one person (Tabelog; April 2026). Cancellation: 100% on the day, 80% the day before (Tabelog). Cash only (Tabelog; January 2026). 8 counter seats with a sunken (horigotatsu) footwell — shoes off at the entrance — plus tea-room-style private rooms for 4 or 6 (Tabelog; July 2026). Tatami rooms may not suit limited mobility (October 2026). English- and Chinese-speaking staff (July 2026). On Shinbashi-dori east of Hanamikoji; near Yasaka Shrine and Chion-in (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Shinbashi-dori east of Hanamikoji, Gion — near Yasaka Shrine and Chion-in',
    cuisine: 'Kappo-style Kyoto cooking from seasonal ingredients the owner buys daily, with organic Kyoto vegetables from local farmers and the wanmono (soup) course as a signature (Tabelog) · lunch "Yasaka" course of over eighteen small dishes ¥5,500, "Shimizu" plan ¥7,500, dinner "Hana" course ¥15,000 (Tabelog); a February 2026 reviewer paid ¥4,800 for the Yasaka course · dishes in reviews: Oma tuna, duck wrapped in yuba grilled on hot stones in the private room, figs with white-sesame sauce, hamo with plum sauce in summer (2026 reviews)',
    website: 'http://gion-yuyama.jp/', gmaps: gm('祇園ゆやま'), menu_url: TB + 'dtlmenu/',
    notes: "[Kappo · Gion Shinbashi] A small Gion kappo where you take off your shoes and sit at a sunken counter to watch the chef, or book a tea-room-style private room. The lunch course of eighteen-plus little dishes (¥5,500) is the draw; dinner from ¥15,000. Cash only; staff speak English and Chinese. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed in the sources)'], origin: null,
      background: 'Per the operator: the chef trained at a renowned Kyoto restaurant (unnamed) and buys seasonal ingredients every day.',
      philosophy: null, specialty: 'Lunch course of many small dishes; wanmono.',
      anecdotes: [
        { text: 'A March 2026 visitor found the owner "very kind to us as tourists" with plenty of helpful advice.', source: R + 'B524446183/' },
        { text: 'The staff ask what time you must leave and pace the meal to it — October 2026.', source: R + 'B537624858/' },
        { text: 'A January 2026 lunch was kept warm by the heated floor, but the cash-only rule made one diner anxious at the end.', source: R + 'B520660874/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 祇園ゆやま、日本料理、東山区新橋通り花見小路東入 ルアートハイツ1F、火〜日 11:30〜14:00・17:00〜23:00、月曜休み、完全予約制、キャンセル料は当日100%・前日80%、カード不可、8席、掘りごたつのカウンター、茶室風の個室 (4名・6名)、昼のコース5,500円から・夜15,000円から、Yasaka コース5,500円、Shimizu プラン7,500円、Hana コース15,000円、店主が毎日仕入れる旬の食材、京都の有機野菜、椀物。口コミ (2025年12月〜2026年10月、英語): Oma の鮪、湯葉で巻いた鴨を石で焼く、無花果の白胡麻ソース、夏は鱧の梅肉、英語と中国語を話すスタッフ、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B520660874/', R + 'B523330845/', R + 'B524446183/', R + 'B526050870/', R + 'B528211394/', R + 'B532472876/', R + 'B535488683/', R + 'B535582401/', R + 'B537624858/', R + 'B538425818/'] },
    cultural_comfort: { level: 'english', note: 'English- and Chinese-speaking staff (July 2026); book ahead; cash only; shoes off.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区新橋通り花見小路東入 ルアートハイツ1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005669, 135.777062); the address has no lot number and GSI matched only the ward (京都府京都市東山区), so loc_approx 'single'; nearest record kyoto_sushi_no_kura 22 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog, tax included (read 2026-11-05).', last_checked: TODAY, items: [
      it('', '', 'Yasaka lunch course (over 18 small dishes)', '¥5,500', 'Lunch', 'ask', 'no', '¥4,800 in a February 2026 review.', 'yasaka'),
      it('', '', 'Shimizu plan (7 items)', '¥7,500', 'Courses', 'ask', 'no', '', 'shimizu'),
      it('', '', 'Hana dinner course', '¥15,000', 'Dinner', 'ask', 'no', '', 'hana'),
    ] }, {
    cuisine: '店主が毎日仕入れる旬の食材と地元の農家の京都の有機野菜で作る割烹の京料理。椀物が看板 (食べログ)・昼の Yasaka コース (18品以上の小皿) 5,500円、Shimizu プラン7,500円、夜の Hana コース15,000円 (食べログ)。2026年2月の口コミでは Yasaka コース4,800円・口コミの料理: Oma の鮪、個室で熱い石で焼く湯葉巻きの鴨、無花果の白胡麻ソース、夏の鱧の梅肉 (2026年の口コミ)',
    neighborhood: '祇園、花見小路の東の新橋通。八坂神社や知恩院の近く',
    gf_detail: '予約時に要確認。出汁の椀物、湯葉、魚の割烹懐石。グルテンの情報はない (食べログ、2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。旬の魚、鮪、鴨、出汁の椀物 (食べログ、2025〜26年の口コミ)。',
    notes: '[割烹・祇園新橋] 靴を脱いで上がり、掘りごたつのカウンターで料理人の手元を眺める祇園の小さな割烹。茶室風の個室もある。18品以上の小皿が並ぶ昼のコース (5,500円) が人気で、夜は1万5千円から。現金のみ、英語と中国語を話すスタッフ。月曜休み。',
  });
}

// ================================================================ Pizzeria Napoletana Da Yuki
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040881/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.da-yuki.jp';
  const H = day(['12:00', '14:30'], ['18:00', '21:30']);
  put({
    id: 'kyoto_pizzeria_da_yuki', name: 'Pizzeria Napoletana Da Yuki', category: 'OMNI',
    lat: 35.011741, lng: 135.782407, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: wood-fired wheat pizza is the core of the menu; no gluten information (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Most pizzas and plates carry cheese, fish or meat; the official site says disliked ingredients can be swapped, but says nothing about vegan meals (official site; 2026 reviews).',
    hours_raw: 'Tue–Sun 12:00–14:30 (last order 14:30) and 18:00–21:30 (last order 21:30); closed Monday, plus some irregular closures (official site; Tabelog). Bookings taken; ¥3,300 per person for a no-show or unannounced cancellation (official site). Takeaway pizza (October 2026). Terrace seats (October 2026). Cards and QR payments (Tabelog). In a glass-fronted building near the great torii of Heian Shrine, Okazaki; 375 m from Higashiyama Stn (Tabelog; July 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki near the Heian Shrine torii — 375 m from Higashiyama Stn',
    cuisine: 'Neapolitan pizza from a wood-fired oven, with many ingredients from Italy: Margherita D.O.C., buffalo-mozzarella Margherita, Bismarck, mortadella and pistachio, fig and gorgonzola, shirasu and sakura shrimp; no pasta (2026 reviews) · a daily-changing list of antipasti and mains: raw mushroom salad with Parmesan, abalone carpaccio with liver sauce, saba and mozzarella caprese, Ozaki beef braciola, fried porcini, fried conger eel, tuna cutlet (2026 reviews) · wine',
    website: SITE, gmaps: gm('Pizzeria Napoletana Da Yuki 岡崎'), menu_url: null,
    notes: "[Neapolitan pizza · Okazaki by Heian Shrine] A long-loved Kyoto pizzeria, now in a bright glass-fronted space by the Heian Shrine torii: wood-fired Margherita D.O.C. and seasonal pizzas, plus an unusually good daily list of antipasti. About ¥3,000–9,000 a head. Book ahead (¥3,300 no-show charge); terrace and takeaway. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Moved within Okazaki to this address (official site; 2026 reviews). Per our record kyo_senza_x, Senza X opened in Da Yuki\'s former premises on 9 February 2024 after Da Yuki "relocated ~200m east to a larger space", and Da Yuki is a Michelin Bib Gourmand pizzeria listed among Tabelog\'s Pizza 百名店.',
      philosophy: null, specialty: 'Margherita D.O.C.; antipasti.',
      anecdotes: [
        { text: 'An eight-time regular in September 2026 calls the Margherita D.O.C. "a must-have every time".', source: R + 'B481185689/' },
        { text: 'A September 2026 return visitor felt the pizzas were better before the move, though every appetizer was delicious.', source: R + 'B535138553/' },
        { text: 'An overseas family without a booking ate on the terrace — October 2026.', source: R + 'B518697732/' },
      ],
      japanese_sources_summary: '公式サイト (da-yuki.jp): Pizzeria Napoletana Da Yuki、左京区岡崎円勝寺町62 ボーパサージュ京都岡崎1F、12:00〜14:30 (L.O. 14:30)・18:00〜21:30 (L.O. 21:30)、月曜休み、無断キャンセルは1人3,300円、苦手な食材の変更などのアレンジ可。食べログ: ピザ、東山駅から375m、カード・QR 可。口コミ (2026年7〜10月、英語): 薪窯、マルゲリータ D.O.C.、マッシュルームのサラダ、鮑のカルパッチョ、移転後初めて、平安神宮の鳥居の近く、テラス席、持ち帰り、パスタはない。',
      confidence: 'medium', sources: [TB, SITE, R + 'B481185689/', R + 'B506885617/', R + 'B518697732/', R + 'B531434131/', R + 'B533001230/', R + 'B533391458/', R + 'B535138553/', R + 'B537961888/', R + 'B538041232/', R + 'B538513122/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; no-show charge ¥3,300; terrace for walk-ins when free.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎円勝寺町62 ボーパサージュ京都岡崎1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.011741, 135.782407); cross-checked: GSI 京都府京都市左京区岡崎円勝寺町62番地 (lot) 65m; kyo_senza_x (its former premises) is 162 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B481185689/', R + 'B538513122/'],
    price_note: 'No menu or prices read.', last_checked: TODAY, items: [
      it('', '', 'Margherita D.O.C.', '', 'Pizza', 'no', 'no', '', 'margherita_doc'),
      it('', '', 'Shirasu and sakura-shrimp pizza', '', 'Pizza', 'no', 'no', '', 'shirasu_pizza'),
    ] }, {
    cuisine: '薪窯で焼くナポリピッツァ。食材の多くはイタリアから: マルゲリータ D.O.C.、水牛モッツァレラのマルゲリータ、ビスマルク、モルタデッラとピスタチオ、無花果とゴルゴンゾーラ、しらすと桜海老。パスタはない (2026年の口コミ)・日替わりの前菜とメイン: パルメザンの生マッシュルームのサラダ、肝ソースの鮑のカルパッチョ、鯖とモッツァレラのカプレーゼ、Ozaki beef のブラチョーラ、ポルチーニのフライ、穴子のフライ、鮪のカツ (2026年の口コミ)・ワイン',
    neighborhood: '平安神宮の鳥居の近くの岡崎。東山駅から375m',
    gf_detail: '実際にはグルテンフリー不可。小麦の薪窯ピッツァが中心で、グルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。ピッツァや料理の多くはチーズ、魚、肉を使う。公式サイトでは苦手な食材の変更に応じるとあるが、ヴィーガンについての記載はない (公式サイト、2026年の口コミ)。',
    notes: '[ナポリピッツァ・平安神宮近くの岡崎] 長く愛される京都のピッツェリアが、平安神宮の鳥居近くのガラス張りの明るい店に移った。薪窯のマルゲリータ D.O.C. や季節のピッツァに、日替わりの前菜も充実。1人3千〜9千円ほど。予約がおすすめ (無断キャンセルは3,300円)。テラス席と持ち帰りも。月曜休み。',
  });
}

save();
