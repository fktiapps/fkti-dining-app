// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 100.
//   + きはら Kihara (charcoal yakiniku with tatami rooms and office-worker lunches, north of Nijo near Karasuma-Marutamachi)
//   + CHALLE (rice-flour French crullers, churros and tacos by the Imperial Palace; sister of loose kyoto and HOO)
//   + 8Black birds Cafe (coffee roaster café at Kawaramachi-Shichijo)
//   + 御蕎麦 京吉美 Osoba Kyoshimi (old-style neighbourhood soba lunch near Nijo Castle)
//   - 丸美屋, Samurai Restaurant Omakase Kyoto, 鮨 銀座おのでら フォーシーズンズホテル京都店, お花坊: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26020286 (skipped), 26014952, 26041538,
//   26044022 (skipped), 26040230, 26009936, 26041964 (skipped), 26002292 (skipped).
//   queue-status.jsonl grepped for each brand (丸美屋, きはら, CHALLE, Samurai, Black birds, 京吉美, おのでら, お花坊, loose,
//   HOO): 銀座おのでら has an earlier chain ruling (26039528); loose kyoto (26034749) is in data.
//   Data check (current main, hidden included): none of the four drafted is in data/kyoto.json by Tabelog id, name or
//   address. ルース キョウト (kyoto_loose_kyoto_kiyomizu) and HOO (kyoto_hoo_donuts) are in data — reviewers call CHALLE the
//   sister café; a different concept (crullers and tacos), drafted as a sister, flagged.
//   Same-name count: きはら — invoice holder 木原大輔, an individual (NTA register). 8Black birds, 京吉美 — one shop each.
//   Service charges, checked against the Japanese original: きはら チャージ料なし; 京吉美 サービス料・チャージともなし; none
//   listed for CHALLE or 8Black birds.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal certification.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-100');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26020286', '丸美屋: too thin and take-away only — one review on Tabelog; a sweets counter with no seating');
skip('26044022', 'Samurai Restaurant Omakase Kyoto: no reviews on Tabelog');
skip('26041964', '鮨 銀座おのでら フォーシーズンズホテル京都店: large parent — 銀座おのでら (chain ruling 26039528) inside the Four Seasons Hotel Kyoto (big-chain-hotel ruling, Greg 2026-11-08)');
skip('26002292', 'お花坊: no reviews dated 2025–2026 (two reviews, 2021 and 2023); a ryokan');

// ================================================================ きはら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26014952/'; const R = TB + 'dtlrvwlst/';
  const HD = day(['17:00', '23:00']); const HL = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_yakiniku_kihara_nijo', name: 'きはら (Kihara)', category: 'OMNI',
    lat: 35.014682, lng: 135.758683, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled beef and offal with sauces, chijimi, cold noodles; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku restaurant (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Dinner daily 17:00–23:00 (last orders 22:00); lunch Tuesday–Friday 11:30–14:00 (last orders 13:30); open all year (Tabelog). No cover charge (Tabelog, original チャージ料なし). Cards (Tabelog). 52 seats: 20 at tables, 32 on tatami (Tabelog). Smoking allowed (Tabelog). Courses from ¥3,850 (Tabelog). Bookings for one accepted (September 2026). Near Karasuma-Marutamachi (September 2026).',
    hours: { 0: HD, 1: HL, 2: HL, 3: HL, 4: HL, 5: HD, 6: HD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'North of Nijo — near Karasuma-Marutamachi',
    cuisine: 'Lively, good-value charcoal yakiniku with a nostalgic room (January 2025; July 2026) · sizzling outside-skirt lunch sets popular with office workers (April 2025; September 2026) · fresh omasum; chijimi (January 2025) · top blade (misuji); half-size cold noodles (July 2026) · course with kimchi, namul, salad, grilled vegetables, pork belly and cold noodles; courses from ¥3,850 (Tabelog; September 2026) · free oolong tea refills after the second cup (September 2026)',
    website: null, gmaps: gm('きはら 焼肉 京都 両替町'), menu_url: TB,
    notes: '[Yakiniku · north of Nijo, charcoal and tatami] A long-running, affordable charcoal yakiniku near Karasuma-Marutamachi with tatami rooms for groups: busy office-worker lunch sets of outside skirt, fresh offal and misuji at night, half-size cold noodles, courses from ¥3,850. Smoking allowed. Open every day.',
    chef_bio: { chef_name: '木原大輔 (given name reading not sourced)', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'The receipt invoice number on Tabelog belongs to 木原大輔, an individual (NTA register). No other details were found.',
      philosophy: null, specialty: 'Charcoal-grilled outside skirt and offal.',
      anecdotes: [
        { text: 'A September 2026 solo diner, glad a booking for one was accepted, found oolong tea refills free after the second cup.', source: R + 'B535446842/' },
      ],
      japanese_sources_summary: '食べログ: きはら、焼肉・ホルモン・韓国料理、中京区両替町二条上ル北小路112、夜 毎日 17:00〜23:00 (L.O. 22:00)、昼 火〜金 11:30〜14:00 (L.O. 13:30)、年中無休、チャージ料なし、カード可、52席 (テーブル20、座敷32)、喫煙可、コースは3,850円から。適格請求書: 木原大輔 (個人)。口コミ (2025〜2026年、英語): 手頃でにぎやかな炭火焼肉、ハラミのジュージューランチ、新鮮なセンマイ、チヂミ、ミスジ、冷麺のハーフ、キムチ・ナムル・サラダ・焼き野菜・豚バラ・冷麺のコース、2杯目以降のウーロン茶は無料、1人でも予約可。',
      confidence: 'low', sources: [TB, R + 'B360191858/', R + 'B468995538/', R + 'B500309714/', R + 'B532817716/', R + 'B534854734/', R + 'B535446842/'] },
    cultural_comfort: { level: 'japanese', note: 'Local yakiniku; tatami rooms; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区両替町二条上ル北小路112',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated January 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.014682, 135.758683); cross-checked: GSI 京都府京都市中京区北小路町112番地 (lot) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B468995538/'],
    price_note: 'Courses from ¥3,850 (Tabelog); no cover charge.', last_checked: TODAY, items: [
      it('', '', 'Outside-skirt sizzling lunch set', '', 'Lunch', 'ask', 'no', 'April 2025; September 2026.', 'harami_lunch'),
      it('', '', 'Yakiniku course (from)', '¥3,850', 'Courses', 'ask', 'no', 'Tabelog.', 'course'),
      it('', '', 'Misuji (top blade)', '', 'Yakiniku', 'ask', 'no', 'July 2026.', 'misuji'),
      it('', '', 'Cold noodles, half size', '', 'Noodles', 'no', 'no', 'July 2026.', 'reimen'),
    ] }, {
    cuisine: '懐かしい雰囲気のにぎやかで手頃な炭火焼肉 (2025年1月、2026年7月)・会社員でにぎわうハラミのジュージューランチ (2025年4月、2026年9月)・新鮮なセンマイ、チヂミ (2025年1月)・ミスジ、冷麺のハーフ (2026年7月)・キムチ、ナムル、サラダ、焼き野菜、豚バラ、冷麺のコース、コースは3,850円から (食べログ、2026年9月)・2杯目からウーロン茶無料 (2026年9月)',
    neighborhood: '二条の北。烏丸丸太町の近く',
    gf_detail: '要確認。たれで食べる炭火焼きの牛肉やホルモン、チヂミ、冷麺。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。焼肉店 (食べログ、2025〜2026年の口コミ)。',
    notes: '[焼肉・二条の北、炭火と座敷] 烏丸丸太町近くの、座敷もある手頃な炭火焼肉。昼は会社員でにぎわうハラミのランチ、夜は新鮮なホルモンやミスジ、ハーフの冷麺、3,850円からのコース。喫煙可。年中無休。',
  });
}

// ================================================================ CHALLE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26041538/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '17:00']);
  put({
    id: 'kyoto_challe_gosho', name: 'CHALLE', category: 'OMNI',
    lat: 35.017786, lng: 135.767689, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French crullers and donuts are made with rice flour, but wheat-free status, shared fryers and the churros and taco shells are not described (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Nothing is described as vegan; the morning plate has egg and bacon (2026 reviews).',
    hours_raw: '9:00–17:00 daily; hours may change (Tabelog). Cards and e-money (Tabelog). Seating upstairs; stump-style stools (April and July 2026). Non-smoking (Tabelog). Near the Kyoto Imperial Palace park, just off the main street (April and September 2026). Opened 12 July 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'By the Kyoto Imperial Palace park',
    cuisine: 'Rice-flour French crullers, churros and tacos (April 2026) · rice-flour French cruller ¥400; matcha latte with matcha whisked to order ¥700 (June 2026) · original churros with chocolate sauce ¥650, whipped cream +¥100 (April and July 2026) · “Good Morning Plate” with a cruller, avocado, vegetables, egg and bacon (April 2026) · tacos made to order with cilantro and cheese (September and October 2026) · churros and banana set with café latte (July 2026)',
    website: null, gmaps: gm('CHALLE 京都 御苑'), menu_url: TB,
    notes: '[Café · by the Imperial Palace park, crullers and tacos] A small café near the Imperial Palace park from the team behind loose kyoto and HOO: rice-flour French crullers, crisp churros with chocolate sauce, little tacos made to order and a morning plate from 9:00, with good coffee and freshly whisked matcha lattes. Open daily. Flagged: sister of loose kyoto and HOO (both in our data).',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe CHALLE as the newest sister café of the Kyoto donut cafés loose kyoto and HOO (April and July 2026). Opened July 2024 (Tabelog). No operator was found.',
      philosophy: null, specialty: 'Rice-flour French crullers.',
      anecdotes: [
        { text: 'An April 2026 visitor fuelled up with the Good Morning Plate before a stroll through the Imperial Palace park.', source: R + 'B526561220/' },
      ],
      japanese_sources_summary: '食べログ: CHALLE、カフェ、上京区信富町315-1、毎日 9:00〜17:00、2024年7月12日オープン、カード・電子マネー可、禁煙。口コミ (2026年、英語): loose kyoto と HOO の姉妹店、米粉のフレンチクルーラー400円、点てた抹茶の抹茶ラテ700円、チュロスとチョコソース650円 (ホイップ+100円)、目玉焼き・ベーコン・アボカドのグッドモーニングプレート、注文後に作るタコス、チュロスとバナナのセット、2階に席、切り株のような椅子、京都御苑の近く。',
      confidence: 'low', sources: [TB, R + 'B526561220/', R + 'B526946698/', R + 'B530089935/', R + 'B531697895/', R + 'B531781795/', R + 'B532942294/', R + 'B535859958/', R + 'B536751382/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual café; open daily from 9:00.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区信富町315-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated April to October 2026.' },
    pin_source: `Tabelog ${TB} (35.017786, 135.767689); cross-checked: GSI 京都府京都市上京区信富町315番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531781795/', R + 'B526946698/'],
    price_note: 'Prices from April and June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Rice-flour French cruller', '¥400', 'Donuts', 'ask', 'ask', 'June 2026.', 'cruller'),
      it('', '', 'Churros with chocolate sauce', '¥650', 'Sweets', 'ask', 'ask', 'April 2026.', 'churros'),
      it('', '', 'Matcha latte', '¥700', 'Drinks', 'ask', 'ask', 'June 2026.', 'matcha_latte'),
      it('', '', 'Tacos, made to order', '', 'Savoury', 'ask', 'no', 'September and October 2026.', 'tacos'),
    ] }, {
    cuisine: '米粉のフレンチクルーラー、チュロス、タコス (2026年4月)・米粉のフレンチクルーラー400円、注文後に点てる抹茶の抹茶ラテ700円 (2026年6月)・チョコソースのオリジナルチュロス650円、ホイップ+100円 (2026年4・7月)・クルーラー、アボカド、野菜、目玉焼き、ベーコンの「グッドモーニングプレート」(2026年4月)・パクチーとチーズの注文後に作るタコス (2026年9・10月)・チュロスとバナナのセットとカフェラテ (2026年7月)',
    neighborhood: '京都御苑のそば',
    gf_detail: '要確認。フレンチクルーラーやドーナツは米粉製だが、小麦を使わないか、揚げ油の共有、チュロスやタコスの皮については書かれていない (2026年の口コミ)。',
    vegan_detail: '要確認。ヴィーガンと書かれた品はない。モーニングプレートには卵とベーコン (2026年の口コミ)。',
    notes: '[カフェ・京都御苑のそば、クルーラーとタコス] loose kyoto と HOO のチームによる京都御苑近くの小さなカフェ。米粉のフレンチクルーラー、チョコソースのカリッとしたチュロス、注文後に作る小さなタコス、9時からのモーニングプレート、コーヒーや点てたての抹茶ラテ。毎日営業。loose kyoto と HOO (データにあり) の姉妹店 (要確認)。',
  });
}

// ================================================================ 8Black birds Cafe
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26040230/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:30', '17:00']);
  put({
    id: 'kyoto_8blackbirds_cafe_shichijo', name: '8Black birds Cafe', category: 'OMNI',
    lat: 34.989673, lng: 135.764065, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee with croque monsieur, cookies and cheesecake; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee is plant-only; the food uses cheese, bacon and white sauce (2025–2026 reviews).',
    hours_raw: '7:30–17:00 daily; hours may change (Tabelog). Cards (Tabelog). Counter seats with power outlets (July 2026). Coffee beans to take away (July 2026). At Kawaramachi-Shichijo (December 2025; July 2026). Opened 1 September 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Shichijo',
    cuisine: 'Freshly roasted coffee from 7:30 (August and December 2025) · coffee of the day, e.g. Ethiopia or Kenya, hot or iced ¥600; dark-roast Mandheling (February and December 2025; July 2026) · croque monsieur with bacon, white sauce, cheese and basil ¥650 (August and December 2025; July 2026) · cheesecake ¥650; cookie ¥300 (August and December 2025; July 2026)',
    website: null, gmaps: gm('8Black birds Cafe 京都'), menu_url: TB,
    notes: '[Coffee roaster café · Kawaramachi-Shichijo, from 7:30] A calm, stylish roaster café with a bird logo between Kyoto Station and Shichijo: single-origin coffee of the day, a crisp croque monsieur for breakfast, cookies and cheesecake, counter seats with power outlets, and beans to take home. Open daily from 7:30.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'No operator or roaster details were found. Opened September 2023 (Tabelog).', philosophy: null, specialty: 'Freshly roasted single-origin coffee.',
      anecdotes: [
        { text: 'A July 2026 regular who usually only bought beans here stayed for a Kenyan iced coffee and a cookie at the counter.', source: R + 'B524504944/' },
      ],
      japanese_sources_summary: '食べログ: 8Black birds Cafe、カフェ、下京区材木町466-4、毎日 7:30〜17:00、2023年9月1日オープン、カード可。口コミ (2025〜2026年、英語): 自家焙煎のコーヒー、本日のコーヒー (エチオピア、ケニア) 600円、深煎りのマンデリン、ベーコン・ホワイトソース・チーズ・バジルのクロックムッシュ650円、チーズケーキ650円、クッキー300円、カウンター席にコンセント、豆の販売、河原町七条。',
      confidence: 'low', sources: [TB, R + 'B502633746/', R + 'B506146933/', R + 'B520195409/', R + 'B524504944/', R + 'B531087121/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Work-friendly counter with outlets.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区材木町466-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated February 2025 to July 2026.' },
    pin_source: `Tabelog ${TB} (34.989673, 135.764065); cross-checked: GSI 京都府京都市下京区材木町466番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520195409/', R + 'B506146933/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Coffee of the day (hot or iced)', '¥600', 'Coffee', 'gf', 'vegan', 'August and December 2025; July 2026.', 'coffee'),
      it('', '', 'Croque monsieur', '¥650', 'Food', 'no', 'no', 'August and December 2025.', 'croque'),
      it('', '', 'Cheesecake', '¥650', 'Sweets', 'ask', 'no', 'December 2025.', 'cheesecake'),
      it('', '', 'Cookie', '¥300', 'Sweets', 'no', 'ask', 'August 2025; July 2026.', 'cookie'),
    ] }, {
    cuisine: '7時半からの自家焙煎のコーヒー (2025年8・12月)・本日のコーヒー (エチオピアやケニア、ホットかアイス) 600円、深煎りのマンデリン (2025年2・12月、2026年7月)・ベーコン、ホワイトソース、チーズ、バジルのクロックムッシュ650円 (2025年8・12月、2026年7月)・チーズケーキ650円、クッキー300円 (2025年8・12月、2026年7月)',
    neighborhood: '河原町七条',
    gf_detail: '要確認。コーヒーにクロックムッシュ、クッキー、チーズケーキ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。ブラックコーヒーは植物性。料理はチーズ、ベーコン、ホワイトソースを使う (2025〜2026年の口コミ)。',
    notes: '[自家焙煎のカフェ・河原町七条、7時半から] 京都駅と七条の間、鳥のロゴの落ち着いたおしゃれな自家焙煎のカフェ。本日のシングルオリジン、朝食にカリッとしたクロックムッシュ、クッキーやチーズケーキ、コンセントのあるカウンター、豆の持ち帰りも。毎日7時半から。',
  });
}

// ================================================================ 御蕎麦 京吉美
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26009936/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00']);
  put({
    id: 'kyoto_osoba_kyoshimi_nijojo', name: '御蕎麦 京吉美 (Osoba Kyoshimi)', category: 'OMNI',
    lat: 35.011276, lng: 135.75394, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soba (wheat content not stated), tempura and curry soba (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba in dashi; shrimp tempura and oyakodon (2025–2026 reviews).',
    hours_raw: 'Lunch 11:30–14:00; closed Friday (Tabelog). No service or cover charge (Tabelog, original サービス料・チャージともなし). Cards: AMEX (Tabelog). 22 seats: 8 at the counter, 12 at sunken-kotatsu tables, 2 at a table (Tabelog). English menu (March 2026). On Oike-dori toward Nijo Castle (March 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Oike-dori near Nijo Castle',
    cuisine: 'A long-standing neighbourhood soba shop, busy and good value (May 2025; October 2026) · tempura soba with two large shrimp fried to order (May 2025) · zaru soba with nori, green onion and wasabi (July 2025) · curry soba; oyakodon set with warm soba (March 2026) · tororo rice-bowl set with soba, a small side and pickles, +¥300 (October 2026)',
    website: null, gmaps: gm('御蕎麦 京吉美'), menu_url: TB,
    notes: '[Soba · Oike near Nijo Castle, lunch only] A dignified old neighbourhood soba shop behind a green noren on the way to Nijo Castle: freshly fried tempura soba, zaru soba, curry soba and rice-bowl sets in a rich dashi, with an English menu. Lunch only; closed Friday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe a long-established neighbourhood soba shop (May 2025; October 2026). No operator or founding date was found.',
      philosophy: null, specialty: 'Tempura soba.',
      anecdotes: [
        { text: 'A March 2026 diner walking from Karasuma-Oike toward Nijo Castle found the counter shared with overseas visitors reading the English menu.', source: R + 'B525125050/' },
      ],
      japanese_sources_summary: '食べログ: 御蕎麦 京吉美、そば、中京区小川通御池上る下古城町398 ロイヤルプラザ御池1F、昼 11:30〜14:00、金曜定休、サービス料・チャージなし、カードはAMEX、22席 (カウンター8、掘りごたつ12、テーブル2)。口コミ (2025〜2026年、英語): 昔ながらの近所のそば屋、海老2本の天ぷらそば、ざるそば、カレーそば、親子丼と温かいそばのセット、とろろご飯のセット+300円、英語メニュー、二条城への御池通沿い、緑の暖簾。',
      confidence: 'low', sources: [TB, R + 'B508220439/', R + 'B508251807/', R + 'B524495007/', R + 'B525125050/', R + 'B533582983/', R + 'B537287641/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; many overseas visitors.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区小川通御池上る下古城町398 ロイヤルプラザ御池1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated May 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.011276, 135.75394); cross-checked: GSI 京都府京都市中京区下古城町398番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508220439/'],
    price_note: 'One price from an October 2026 review; no service or cover charge.', last_checked: TODAY, items: [
      it('', '', 'Tempura soba (two large shrimp)', '', 'Soba', 'no', 'no', 'May 2025.', 'tempura_soba'),
      it('', '', 'Zaru soba', '', 'Soba', 'no', 'no', 'July 2025.', 'zaru'),
      it('', '', 'Curry soba', '', 'Soba', 'no', 'no', 'March 2026.', 'curry_soba'),
      it('', '', 'Tororo rice-bowl set with soba (+¥300)', '', 'Sets', 'no', 'no', 'October 2026.', 'tororo_set'),
    ] }, {
    cuisine: '昔ながらの、いつもにぎわうお値打ちの近所のそば屋 (2025年5月、2026年10月)・注文後に揚げる海老2本の天ぷらそば (2025年5月)・海苔、ねぎ、わさびのざるそば (2025年7月)・カレーそば、温かいそば付きの親子丼のセット (2026年3月)・そば、小鉢、漬物付きのとろろご飯のセット+300円 (2026年10月)',
    neighborhood: '御池通、二条城の近く',
    gf_detail: 'グルテンフリーではない。そば (小麦の割合は書かれていない)、天ぷら、カレーそば (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁のそば、海老天ぷら、親子丼 (2025〜2026年の口コミ)。',
    notes: '[そば・二条城近くの御池、昼のみ] 二条城へ向かう道の、緑の暖簾の品のある昔ながらの近所のそば屋。揚げたての天ぷらそば、ざるそば、カレーそば、丼のセットをこくのある出汁で。英語メニューあり。昼のみ、金曜定休。',
  });
}

save();
