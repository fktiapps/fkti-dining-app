// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 39.
//   + カフェ タイガー Cafe TIGER (tiger-themed café in an old house by the Prefectural Office, Taiwanese noodles; core list)
//   + 晴々 Harebare (organic-vegetable obanzai lunch and izakaya by Kojinbashi; core list)
//   + 五燠堂 gooudo (wood-fire vegetables and meat by Kyoto Station Hachijo exit; notable list)
//   + グリル 彌兵衛 Grill Yahei (Kamishichiken yoshoku near Kitano Tenmangu; notable list)
//   - どうとんぼり神座 京都ポルタ店 26037325 (core): chain — 神座 has a Kyoto Porta shop and at least five Osaka shops in our
//     crawls (十三, 道頓堀, なんば, 千日前, なんばウォーク).
//   - Jean-Georges at The Shinmonzen 26039077 (notable): sub-brand of a large parent — Jean-Georges Tokyo is in our crawls,
//     and the Wikipedia article on Jean-Georges Vongerichten (opened 2026-11-06) lists Jean-Georges in New York and Shanghai
//     and Jean-Georges-named restaurants in Philadelphia, Las Vegas, Bridgehampton, London, Dublin and Kyoto.
//   Picked 2026-11-06 after batch 38. `queue.mjs kyoto-missed next core 200`, mod 6 = 1, after earlier skips: カフェ タイガー
//   26028181, 26037325 (skipped), 晴々 26036365. `next notable 200`: 五燠堂 26040493, 26039077 (skipped), グリル 彌兵衛
//   26000005. Same-name check, same brand or operator only: カフェ タイガー — one. 晴々 — the crawl also shows a 晴々 in
//   Ichigaya, Tokyo, and Osaka sushi shops named 晴々; one web search ("晴々 京都 吉田 居酒屋 野菜 店舗") found no shop list
//   or stated link, and the total is under five, so it is drafted. 五燠堂 — one; reviewers place it in a Kyoto group with its
//   own farm (the name is written variously), and a web search for the operator found none stated — drafted as a sister
//   concept at most (焼野菜 五十家 and 漬け野菜 イソイズム, in data, may be the same group; not confirmed). グリル 彌兵衛 — one.
//   None of the four is in data/kyoto.json: grep by name and address (東立売町211-2, 下阿達町15, 西山王町8-1, 真盛町706)
//   found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-39');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260101/26037325/', 'chain: どうとんぼり神座 — Kyoto Porta plus 5+ Osaka shops in our crawls');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26039077/', 'sub-brand of a large parent: Jean-Georges (Tokyo in crawls; Wikipedia lists NYC, Shanghai, Philadelphia, Las Vegas, London, Dublin and more)');

// ================================================================ カフェ タイガー Cafe TIGER
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26028181/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.cafetiger.net/';
  const S = day(['11:00', '16:00']); const L = day(['11:00', '20:00']);
  put({
    id: 'kyoto_cafe_tiger_kamigyo', name: 'カフェ タイガー (Cafe TIGER)', category: 'OMNI',
    lat: 35.019874, lng: 135.757670, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: the menu centres on wheat noodles (tiger noodles, dry tantan, lu rou noodles), Napolitan pasta, doria and toast (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: minced-meat noodles, braised pork rice, chashu and eggs (2022–2026 reviews).',
    hours_raw: 'Tuesday–Friday 11:00–20:00; Monday, Saturday and Sunday 11:00–16:00; hours may change (Tabelog). No reservations (Tabelog). No cards or e-money; QR accepted (Tabelog). 18 seats incl. a counter, mixed chairs and sofas; non-smoking (Tabelog; May 2024). A morning set is served (Tabelog; January 2024). In an old house behind plants just west of Muromachi on Churaku-dori, near the Prefectural Office; 5 min walk from Marutamachi Stn (Tabelog; May 2024). Opened 27 October 2016 (Tabelog).',
    hours: { 0: S, 1: L, 2: L, 3: L, 4: L, 5: S, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'West of Muromachi near the Kyoto Prefectural Office — 5 min walk from Marutamachi Stn',
    cuisine: 'Café in a renovated house with Taiwanese-leaning food (2019–2026 reviews) · "tiger noodles", soupless and chilled versions on Teigaku noodles with minced meat, soft egg and cucumber, spice levels and portion sizes to choose; dry tantan noodles; lu rou fan ¥1,000 and lu rou noodles (2022–2026 reviews) · Napolitan pasta in a big portion, doria (2024 reviews) · lunch adds salad and a small soup; morning set ¥1,100 of toast, soup, salad, yogurt and a drink (January–May 2024) · about ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('Cafe TIGER 京都 上京区'), menu_url: null,
    notes: '[Café · near the Prefectural Office, Taiwanese noodles] A plant-screened old house turned café, full of tiger decor and books: "tiger noodles" and dry tantan with minced meat and a soft egg, lu rou fan, a generous Napolitan, and a morning set, with salad and soup at lunch. Pick your spice level — level 3 of 4 is fiery. QR payment, no cards. Open daily from 11:00.',
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a café opened 27 October 2016, with breakfast. Reviewers describe a renovated private house with antique interiors among government offices and a hospital (July 2019), tiger-themed decorations, books, blankets and a small heater at the seats (January 2024), and Taiwanese dishes alongside pasta and doria (2024–2025).',
      philosophy: null, specialty: 'Tiger noodles; lu rou fan.',
      anecdotes: [
        { text: 'A June 2024 diner overheard a neighbour ask for a smaller portion of Napolitan — and, when it arrived, understood why.', source: R + 'B509108939/' },
        { text: 'A December 2025 regular chose spice level 3 of 4 on the lu rou noodles and struggled to finish.', source: R + 'B518826954/' },
        { text: 'A May 2026 regular from a nearby office orders dry tiger noodles extra-large and spicy, then mixes in rice at the end.', source: R + 'B529051465/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、上京区東立売町211-2、地下鉄丸太町駅から徒歩5分、火〜金 11:00〜20:00、月・土・日 11:00〜16:00、予約不可、カード・電子マネー不可、QR 可、18席、禁煙、モーニングあり、2016年10月27日オープン。口コミ (2019年7月〜2026年5月、英語): 室町中立売の西、緑に囲まれた古い民家、府庁の近く、虎の飾りと本、タイガー麺 (汁なし、冷やし、ひき肉、温泉卵、きゅうり、辛さと量を選べる)、汁なし担々麺、魯肉飯1,000円、魯肉麺、ナポリタン (大盛り)、ドリア、ランチはサラダとミニスープ付き、モーニングセット1,100円。',
      confidence: 'medium', sources: [TB, WEB, R + 'B450556748/', R + 'B453568959/', R + 'B467164513/', R + 'B478525293/', R + 'B486109285/', R + 'B488859859/', R + 'B509108939/', R + 'B518826954/', R + 'B529051465/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; choose spice level; QR, no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区東立売町211-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through May 2026.' },
    pin_source: `Tabelog ${TB} (35.019874, 135.757670); cross-checked: GSI 京都府京都市上京区東立売町211番地 (lot) 25 m; nearest Kyoto record 157 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B486109285/', R + 'B478525293/'],
    price_note: 'Prices from 2024 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lu rou fan (with salad and mini soup)', '¥1,000', 'Lunch', 'no', 'no', 'May 2024.', 'lurou_fan'),
      it('', '', 'Morning set', '¥1,100', 'Breakfast', 'no', 'no', 'January 2024.', 'morning_set'),
      it('', '', 'Tiger noodles (soupless)', '', 'Noodles', 'no', 'no', '2022–2026 reviews.', 'tiger_noodles'),
    ] }, {
    cuisine: '改装した民家の、台湾寄りの料理のカフェ (2019〜2026年の口コミ)・「タイガー麺」: 汁なしや冷やし、Teigaku の麺にひき肉、半熟卵、きゅうり、辛さと量を選べる、汁なし担々麺、魯肉飯1,000円、魯肉麺 (2022〜2026年の口コミ)・大盛りのナポリタン、ドリア (2024年の口コミ)・ランチはサラダと小さなスープ付き、トースト、スープ、サラダ、ヨーグルト、ドリンクのモーニングセット1,100円 (2024年1〜5月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '府庁の近く、室町の西。丸太町駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。小麦の麺 (タイガー麺、汁なし担々麺、魯肉麺)、ナポリタン、ドリア、トーストが中心 (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ひき肉の麺、豚の煮込みのご飯、チャーシュー、卵 (2022〜2026年の口コミ)。',
    notes: '[カフェ・府庁の近く、台湾の麺] 緑に隠れた古い家のカフェ。虎の飾りと本がいっぱい。ひき肉と半熟卵の「タイガー麺」や汁なし担々麺、魯肉飯、たっぷりのナポリタン、モーニングも。ランチはサラダとスープ付き。辛さは4段階の3でかなり辛い。QR 可、カード不可。毎日11時から。',
  });
}

// ================================================================ 晴々 Harebare
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26036365/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_harebare_yoshida', name: '晴々 (Harebare)', category: 'OMNI',
    lat: 35.021918, lng: 135.775454, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai and fish built on dashi and soy, with fried dishes and spring rolls at night; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The cooking centres on organic vegetables, but dashi, fish, duck and egg run through the set and the evening dishes (2024–2025 reviews).',
    hours_raw: 'Tuesday–Saturday and holidays 11:00–14:00 (last order 13:30) and 17:30–22:00; closed Sunday and Monday; occasional closures (Tabelog). Reservations accepted (Tabelog). A dinner-only charge of ¥400 per person (Tabelog original ディナーのみチャージ料としてお一人様当たり４００円（税込）). Lunch is one set only (2024–2025 reviews). 20 seats: 4 at the counter and 16 at tables; private hire up to 20; non-smoking (Tabelog). Cards, e-money and QR (Tabelog). Yoshida-Shimoadachi-cho, near Kojinbashi; 5 min from the Kojinbashi or Konoe-dori bus stops, 10 min walk from Jingu-Marutamachi Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yoshida near Kojinbashi — 10 min walk from Jingu-Marutamachi Stn',
    cuisine: 'Japanese izakaya-café of seasonal flavours, centred on organic vegetables (Tabelog; May 2024) · lunch: one set only, ichiju hassai ¥1,500 — eight small obanzai such as carrot tartare, roast duck, cold tamagoyaki and kelp tsukudani with sansho, clay-pot rice and a sake-lees soup; extra rice ¥150 (April 2024–September 2025) · evening: three-obanzai platter, namero, sashimi such as usukawa-hagi, fried winter melon, fig and cheese spring rolls, herb-crusted Spanish mackerel, pumpkin tempura with minced meat, a "staff meal" curry (December 2024; October 2025) · a broad sake list; organic-ginger ginger ale (May 2024) · lunch ¥1,000–2,000, dinner ¥4,000–5,000 (Tabelog)',
    website: null, gmaps: gm('晴々 京都 吉田下阿達町'), menu_url: null,
    notes: '[Obanzai · Yoshida near Kojinbashi, organic vegetables] A calm, stylish izakaya-café west of the Kamo River devoted to organic vegetables: at lunch a single ¥1,500 set of eight small obanzai, clay-pot rice and sake-lees soup; at night shareable plates, fresh fish and a good sake list. Portions run small, and one guest found a fish overcooked. ¥400 dinner charge. Closed Sunday and Monday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a Japanese izakaya-café of seasonal flavours with vegetable and seafood dishes; registered as an official listing by the shop. Reviewers describe plenty of organic vegetables and Kyoto produce (May 2024; January 2025), a wide sake list (May 2024), and small, carefully made portions (2024–2025).',
      philosophy: 'Seasonal flavours, organic vegetables (Tabelog; May 2024 review).', specialty: 'Ichiju hassai lunch set.',
      anecdotes: [
        { text: 'A January 2025 business traveller from Tokyo found the vegetable set exactly what a tired body needed.', source: R + 'B499274542/' },
        { text: 'An October 2025 regular praised fried winter melon and fig-and-cheese spring rolls, but found the herb-crusted mackerel burnt and bitter.', source: R + 'B496592533/' },
        { text: 'A December 2024 diner, once no fan of carrots, came round to carrots here.', source: R + 'B496503600/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・野菜料理・魚介、左京区吉田下阿達町15、京阪神宮丸太町駅から徒歩約10分、京都バス荒神橋・近衛通から徒歩約5分、火〜土・祝 11:00〜14:00 (L.O.13:30)・17:30〜22:00、日・月定休 (臨時休業あり)、予約可、ディナーのみチャージ料1人400円 (税込)、20席 (カウンター4、テーブル16)、貸切20名まで、禁煙、カード・電子マネー・QR 可、旬を楽しむ和の居酒屋カフェ。口コミ (2024年4月〜2026年1月、英語): ランチは一汁八菜1,500円の一種のみ (人参のタルタル、鴨ロース、冷たい卵焼き、山椒の昆布の佃煮など、土鍋ご飯、粕汁)、ご飯の追加150円、有機野菜、量は少なめ、夜はおばんざい3種盛り、なめろう、Usukawa-hagi などのお造り、冬瓜の揚げ物、無花果とチーズの春巻き、鰆の香草焼き (焦げていたとの声)、かぼちゃのひき肉の天ぷら、まかないカレー、日本酒が豊富、有機生姜のジンジャーエール。',
      confidence: 'medium', sources: [TB, R + 'B484148801/', R + 'B485437821/', R + 'B496078110/', R + 'B496503600/', R + 'B496592533/', R + 'B496941244/', R + 'B497746732/', R + 'B499274542/', R + 'B510387723/', R + 'B513009257/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One lunch set; ¥400 dinner charge; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区吉田下阿達町15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through January 2026.' },
    pin_source: `Tabelog ${TB} (35.021918, 135.775454); cross-checked: GSI 京都府京都市左京区吉田下阿達町15番地 (lot) 3 m; nearest Kyoto record 349 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510387723/', R + 'B496078110/'],
    price_note: 'Lunch price from 2024–2025 reviews, tax included; ¥400 dinner charge.', last_checked: TODAY, items: [
      it('', '', 'Ichiju hassai lunch (eight obanzai, clay-pot rice, sake-lees soup)', '¥1,500', 'Lunch', 'ask', 'no', 'July 2025.', 'ichiju_hassai'),
      it('', '', 'Extra rice', '¥150', 'Lunch', 'gf', 'vegan', 'November 2024.', 'extra_rice'),
    ] }, {
    cuisine: '有機野菜を中心にした、旬の味の和の居酒屋カフェ (食べログ、2024年5月)・ランチは一汁八菜1,500円の一種のみ: 人参のタルタル、鴨ロース、冷たい卵焼き、山椒の昆布の佃煮などのおばんざい8品、土鍋ご飯、粕汁、ご飯の追加150円 (2024年4月〜2025年9月)・夜: おばんざい3種盛り、なめろう、Usukawa-hagi などのお造り、冬瓜の揚げ物、無花果とチーズの春巻き、鰆の香草焼き、かぼちゃとひき肉の天ぷら、「まかない」カレー (2024年12月、2025年10月)・豊富な日本酒、有機生姜のジンジャーエール (2024年5月)・昼1,000〜2,000円、夜4,000〜5,000円 (食べログ)',
    neighborhood: '荒神橋近くの吉田。神宮丸太町駅から徒歩10分',
    gf_detail: '要確認。だしと醤油のおばんざいと魚、夜は揚げ物や春巻きも。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。有機野菜が中心だが、セットにも夜の料理にもだし、魚、鴨、卵を使う (2024〜2025年の口コミ)。',
    notes: '[おばんざい・荒神橋近くの吉田、有機野菜] 鴨川の東、有機野菜にこだわる落ち着いたおしゃれな居酒屋カフェ。昼は1,500円の一汁八菜の一種のみで、おばんざい8品、土鍋ご飯、粕汁。夜は取り分ける皿、鮮魚、豊富な日本酒。量は少なめで、魚が焼きすぎだったという客も。夜はチャージ400円。日・月曜休み。',
  });
}

// ================================================================ 五燠堂 gooudo
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26040493/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_gooudo_hachijo', name: '五燠堂 (gooudo)', category: 'OMNI',
    lat: 34.982634, lng: 135.760109, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wood-fired vegetables and meats, but sauces such as Kanazawa miso and a creamy potato salad vary; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Grilled vegetables from the group\'s own farm are central, but one lotus-root dish is finished with venison fat, and many plates use meat, fish or dairy (2026 reviews).',
    hours_raw: 'Daily 17:00–23:00; hours may change (Tabelog). Reservations accepted, online via the restaurant\'s website, and advised — full on holidays (Tabelog; August 2026). Cards, e-money and QR (Tabelog). Counter around a central wood-fire kitchen, and Japanese-style private rooms upstairs; smoking allowed (Tabelog; August 2026). Courses with self-serve all-you-can-drink from the fridge in private rooms (October 2026). About 5 min walk from Kyoto Station Hachijo exit (Tabelog; August 2026). Opened 13 December 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of Kyoto Station — 5 min walk from the Hachijo exit',
    cuisine: 'Wood-fire cooking of vegetables from the group\'s own farm and selected meats (2026 reviews) · grilled okra, asparagus and fresh octopus; lotus root with Kanazawa miso and venison fat; Kyoto vegetables over open flame; salads (2025–2026 reviews) · venison steak and venison sausage, outside skirt, ichibo steak, wagyu, "kamenoko" (2025–2026 reviews) · eel carpaccio, conger eel and white celery carpaccio ¥1,350, peach and fresh yuba with white miso ¥900, Kamo eggplant with cream cheese, bonito with Kujo negi sauce, a potato salad (2025–2026 reviews) · wines, Kirin Lager ¥650, ISOHAGAN highball ¥800; courses with all-you-can-drink (2025–2026 reviews) · about ¥4,000–8,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('五燠堂 gooudo 京都 八条口'), menu_url: null,
    notes: '[Wood-fire dining · Kyoto Station Hachijo side] A stylish counter around a central firewood grill, five minutes from Kyoto Station\'s south exit: farm-fresh vegetables and venison, skirt or ichibo cooked over the embers, with carpaccios of eel or conger eel, white-miso yuba with peach, and a good wine list; private tatami rooms upstairs. One October 2026 regular felt the menu had shrunk and some sauces grown heavy. Book ahead. Smoking allowed. Evenings, daily.',
    chef_bio: { chef_name: null, roles: ['Kitchen staff at the wood-fire grill (unnamed)'], origin: null,
      background: 'Per Tabelog: a dining bar opened 13 December 2023 near Kyoto Station. Reviewers in 2026 describe a restaurant of a well-known Kyoto group that runs its own farm and delivers vegetables to each location (the group name is written in several ways), cooking over firewood in a central kitchen (August 2026), seen on TV (August 2026).',
      philosophy: 'Vegetables from the group\'s own farm, cooked over firewood (2026 reviews).', specialty: 'Wood-fired vegetables; venison.',
      anecdotes: [
        { text: 'An August 2026 guest had wanted to come for over two years after seeing it on TV, and finally booked during Obon.', source: R + 'B533699490/' },
        { text: 'An August 2026 guest who arrived ten minutes early was asked to wait outside while earlier diners finished.', source: R + 'B534223525/' },
        { text: 'An October 2026 regular found the once-hollandaise potato salad now a soupy meat-and-potato dish, and the menu shorter than before.', source: R + 'B502903363/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー、南区東九条西山王町8-1、京都駅から303m、毎日 17:00〜23:00、予約可、カード・電子マネー・QR 可、個室あり、喫煙可、2023年12月13日オープン。口コミ (2025年11月〜2026年10月、英語): 八条口から徒歩5分、中央の薪の厨房を囲むカウンター、2階に和の個室、自社農園の野菜を各店に届けるグループの店、薪火で焼く野菜と肉、オクラ、アスパラ、生だこ、金沢の味噌と鹿の脂の蓮根、鹿のステーキとソーセージ、ハラミ、イチボ、和牛、鰻のカルパッチョ、鱧と白セロリのカルパッチョ1,350円、桃と生湯葉の白味噌900円、賀茂茄子とクリームチーズ、鰹と九条ねぎのソース、ポテトサラダ、ワイン、キリンラガー650円、ISOHAGAN のハイボール800円、個室は冷蔵庫から自由に飲めるコース、テレビで紹介、ネット予約、メニューが減り味が変わったとの声 (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B502572361/', R + 'B502903363/', R + 'B521166928/', R + 'B530569330/', R + 'B533699490/', R + 'B534223525/', R + 'B536693579/', R + 'B537607921/', R + 'B538445295/', R + 'B538642075/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online; counter or private rooms; smoking allowed; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市南区東九条西山王町8-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.982634, 135.760109); cross-checked: GSI 京都府京都市南区東九条西山王町8番地 (lot) 13 m; kyr_mazemen_puruda is 22 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533699490/'],
    price_note: 'Prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Conger eel and white celery carpaccio', '¥1,350', 'Small plates', 'ask', 'no', 'August 2026.', 'hamo_carpaccio'),
      it('', '', 'Peach and fresh yuba with white miso', '¥900', 'Small plates', 'ask', 'ask', 'August 2026.', 'peach_yuba'),
      it('', '', 'ISOHAGAN highball', '¥800', 'Drinks', 'ask', 'vegan', 'August 2026.', 'highball'),
    ] }, {
    cuisine: 'グループの自社農園の野菜と選んだ肉の薪火料理 (2026年の口コミ)・焼いたオクラ、アスパラ、生だこ、金沢の味噌と鹿の脂の蓮根、直火の京野菜、サラダ (2025〜2026年の口コミ)・鹿のステーキと鹿のソーセージ、ハラミ、イチボのステーキ、和牛、「Kamenoko」(2025〜2026年の口コミ)・鰻のカルパッチョ、鱧と白セロリのカルパッチョ1,350円、桃と生湯葉の白味噌900円、賀茂茄子とクリームチーズ、九条ねぎのソースの鰹、ポテトサラダ (2025〜2026年の口コミ)・ワイン、キリンラガー650円、ISOHAGAN のハイボール800円、飲み放題付きのコース (2025〜2026年の口コミ)・4,000〜8,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '京都駅の南。八条口から徒歩5分',
    gf_detail: '要確認。薪火の野菜と肉だが、金沢の味噌のたれやクリーミーなポテトサラダなどソースはさまざま。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。グループの自社農園の焼き野菜が中心だが、蓮根の一皿は鹿の脂で仕上げ、肉、魚、乳製品の皿が多い (2026年の口コミ)。',
    notes: '[薪火料理・京都駅八条口] 京都駅の南口から5分、中央の薪の焼き台を囲むおしゃれなカウンター。農園直送の野菜、鹿、ハラミやイチボを熾火で焼き、鰻や鱧のカルパッチョ、桃と湯葉の白味噌、ワインも充実。2階は和の個室。2026年10月の常連はメニューが減り、ソースが重くなったと感じた。予約を。喫煙可。夜のみ毎日。',
  });
}

// ================================================================ グリル 彌兵衛 Grill Yahei
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000005/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:30', '21:30']); const LD = day(['11:30', '14:00'], ['17:30', '21:30']);
  put({
    id: 'kyoto_grill_yahei_kamishichiken', name: 'グリル 彌兵衛 (Grill Yahei)', category: 'OMNI',
    lat: 35.030394, lng: 135.737792, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: breaded fried shrimp and scallops, croquettes, demi-glace sauces and pilaf omurice (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steak, steak, fried seafood and egg-wrapped omurice (2023–2026 reviews).',
    hours_raw: 'Wednesday–Friday 11:30–14:00 and 17:30–21:30; Tuesday, Saturday and Sunday 17:30–21:30; closed Monday and the third Tuesday of the month; hours may change (Tabelog). No reservations (Tabelog); lunch can fill just after 11:30 (March 2025). Cash only (Tabelog). Counter and tables; non-smoking (Tabelog; June 2025). On a quiet street in Kamishichiken, a short walk from Kitano Tenmangu; about 700 m from Kitano-Hakubaicho Stn (Tabelog; 2025 reviews).',
    hours: { 1: D, 2: LD, 3: LD, 4: LD, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kamishichiken near Kitano Tenmangu — 10 min walk from Kitano-Hakubaicho Stn',
    cuisine: 'Classic yoshoku in Kamishichiken (2023–2026 reviews) · lunch: hamburg steak, today\'s lunch ¥1,800 (e.g. mochi-pork loin with cheese and breadcrumbs), omurice of butter pilaf with demi-glace ¥1,800 with soup and salad, steak lunch (2023–2026 reviews) · fried shrimp and hamburg steak combination, fried salmon and crab-cream croquettes, teriyaki chicken set (2025–2026 reviews) · an "omakase" yoshoku course of salmon starter, fried scallops, shrimp, hamburg and omurice, with wine (July 2025) · corn potage and a creamy-dressed salad to start · lunch ¥1,000–2,000, dinner ¥3,000–4,000 (Tabelog)',
    website: null, gmaps: gm('グリル 彌兵衛 上七軒'), menu_url: null,
    notes: '[Yoshoku · Kamishichiken by Kitano Tenmangu] A small, classic Western-style grill on a quiet Kamishichiken street, run by the master and the master\'s wife: rich corn potage, crisp fried shrimp, tender hamburg under demi-glace, and a fluffy omurice over butter pilaf, with a short wine list and an omakase course by evening. Friendly chats at the counter. Portions run modest. Cash only; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed), who cooks', 'The owner\'s wife, at front of house (April 2026 review)'], origin: null,
      background: 'Per Tabelog: a yoshoku restaurant in Kamishichiken. Reviewers describe a popular, classic Western-style restaurant with regulars from nearby (March 2025), a master who serves an omakase course (July 2025), and an owner\'s wife who chats with guests (April 2026); an August 2026 guest talked with the owner after the meal.',
      philosophy: null, specialty: 'Fried shrimp; hamburg steak; omurice.',
      anecdotes: [
        { text: 'An April 2026 couple noticed a Mucha-collaboration coaster under the beer glass, and the owner\'s wife joined in to share stories.', source: R + 'B525879760/' },
        { text: 'A March 2025 guest got the last table at a lunch that filled just after 11:30.', source: R + 'B503076679/' },
        { text: 'An October 2026 diner, watching kimono-clad passers-by, found the croquettes authentic but warned that students would not leave stuffed.', source: R + 'B537382220/' },
      ],
      japanese_sources_summary: '食べログ: 洋食、上京区真盛町706、北野白梅町駅から695m、水〜金 11:30〜14:00・17:30〜21:30、火・土・日 17:30〜21:30、月曜と第3火曜定休、予約不可、カード・電子マネー・QR 不可、禁煙。口コミ (2023年10月〜2026年10月、英語): 上七軒、北野天満宮の近く、昔ながらの洋食店、近所の常連、ハンバーグランチ、日替わりランチ1,800円 (もち豚ロースのチーズパン粉焼き)、バターライスのオムライス (デミグラス) 1,800円 (スープとサラダ付き)、ステーキランチ、海老フライとハンバーグ、鮭フライと蟹クリームコロッケ、照り焼きチキン、マスターのおまかせ洋食コース、ワイン、コーンポタージュ、マスターと奥さん、ミュシャのコースター、量は控えめ。',
      confidence: 'medium', sources: [TB, R + 'B474151703/', R + 'B503076679/', R + 'B505863512/', R + 'B509032608/', R + 'B509349877/', R + 'B525879760/', R + 'B533622915/', R + 'B533731476/', R + 'B535851237/', R + 'B537382220/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk in early for lunch; cash only; counter or tables.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区真盛町706',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.030394, 135.737792); cross-checked: GSI 京都府京都市上京区真盛町706番地 (lot) 22 m; nearest Kyoto record 144 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535851237/', R + 'B505863512/'],
    price_note: 'Prices from 2025–2026 reviews, tax included; cash only.', last_checked: TODAY, items: [
      it('', '', 'Omurice with demi-glace (soup and salad)', '¥1,800', 'Lunch', 'no', 'no', 'September 2026.', 'omurice'),
      it('', '', 'Today\'s lunch', '¥1,800', 'Lunch', 'no', 'no', 'May 2025.', 'daily_lunch'),
      it('', '', 'Fried shrimp and hamburg steak', '', 'Mains', 'no', 'no', 'August 2026.', 'ebi_hamburg'),
    ] }, {
    cuisine: '上七軒の昔ながらの洋食 (2023〜2026年の口コミ)・昼: ハンバーグ、日替わりランチ1,800円 (例: もち豚ロースのチーズパン粉焼き)、バターライスにデミグラスのオムライス1,800円 (スープとサラダ付き)、ステーキランチ (2023〜2026年の口コミ)・海老フライとハンバーグ、鮭フライと蟹クリームコロッケ、照り焼きチキンの定食 (2025〜2026年の口コミ)・鮭の前菜、帆立フライ、海老、ハンバーグ、オムライスの「おまかせ」洋食コースとワイン (2025年7月)・はじめにコーンポタージュとクリーミーなドレッシングのサラダ・昼1,000〜2,000円、夜3,000〜4,000円 (食べログ)',
    neighborhood: '北野天満宮近くの上七軒。北野白梅町駅から徒歩10分',
    gf_detail: 'グルテンフリー不可。衣をつけた海老や帆立のフライ、コロッケ、デミグラスソース、ピラフのオムライス (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ハンバーグ、ステーキ、魚介のフライ、卵で包むオムライス (2023〜2026年の口コミ)。',
    notes: '[洋食・北野天満宮近くの上七軒] 上七軒の静かな通りの小さな昔ながらの洋食店。マスターと奥さんで営む。濃厚なコーンポタージュ、カリッとした海老フライ、デミグラスのやわらかなハンバーグ、バターライスのふわふわのオムライス。ワインも少しあり、夜はおまかせのコースも。カウンターで会話がはずむ。量は控えめ。現金のみ、月曜休み。',
  });
}

save();
