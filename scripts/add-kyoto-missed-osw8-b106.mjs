// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 106
// (drafted 2026-11-26 against main 9ad7a593; core and notable lists empty in the lane, so rest list nearest-first per the brief).
//   + Osteria La Balena (wood-fired Neapolitan pizza east of Nijo Castle; rest)
//   + 季節料理 和 (four-seat breakfast/lunch/dinner set-meal counter run by a couple, Nijojo-mae; rest) — romaji dropped (Tabelog machine name)
//   + Le temps gouter (canelé and baked-goods café, Takatsuji-Omiya; rest)
//   + 丸福 (early-Showa soba shop north of Kyoto Station; rest) — romaji dropped (Tabelog machine name); not the 釜座二条 丸福 in data
//   Rest list (mod 6 = 1), nearest-first — skipped:
//   - しゃぶしゃぶ すき焼き食べ放題 和牛と豚 京都駅前店 26045137: chain — same-name shops at 心斎橋, 本町, 天六・天満, 近鉄奈良駅前,
//     三条河原町 and 京都駅前 (gnavi listings), 6+.
//   - 山城家旅館 26021659: ryokan, 0 reviews.
//   - ビッグエコー 京都駅前七条店 26044999: chain (karaoke), 0 reviews.
//   - ミスター カンソ 二条城店 26033599: thin listing (1 review); a branch-named bar.
//   - Vegan Farm 26036575: no 2025–26 reviews (latest April 2022).
//   - THE GARDEN BAR 26034901: inside HOTEL THE MITSUI KYOTO (Tabelog address and hotel website) — big-chain hotel (Mitsui Fudosan
//     hotels; FORNI and 都季 in the same hotel are already hidden).
//   - 月と 26029999: no 2025–26 reviews (latest January 2020).
//   None of the four drafted is in data (main 9ad7a593, hidden records included; grep of Tabelog id, name and address) or in
//   another worker's pending add-kyoto-missed-* script.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-106');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260101/26045137/', 'chain: しゃぶしゃぶ すき焼き食べ放題 和牛と豚 — 6+ same-name shops (心斎橋, 本町, 天六・天満, 近鉄奈良駅前, 三条河原町, 京都駅前)');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26021659/', 'ryokan listing with 0 reviews — too thin to verify');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26044999/', 'chain: ビッグエコー karaoke');
skip('https://tabelog.com/en/kyoto/A2601/A260203/26033599/', 'thin listing: 1 review');
skip('https://tabelog.com/en/kyoto/A2601/A260302/26036575/', 'no 2025–26 reviews (latest April 2022)');
skip('https://tabelog.com/en/kyoto/A2601/A260203/26034901/', 'inside HOTEL THE MITSUI KYOTO — big-chain hotel');
skip('https://tabelog.com/en/kyoto/A2601/A260302/26029999/', 'no 2025–26 reviews (latest January 2020)');

// ================================================================ Osteria La Balena
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26036029/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['17:30', '21:30']);
  put({
    id: 'kyoto_osteria_la_balena_nijo', name: 'Osteria La Balena', category: 'OMNI',
    lat: 35.01374253786185, lng: 135.75311840045538, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Caprese, cured-ham platters and wagyu tagliata may suit, but the menu centres on wheat-dough pizza and pasta; no gluten information (2023–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A marinara pizza is on the menu (June 2026), but its ingredients are not described; most dishes use cheese, cured meat or seafood (2023–2026 reviews).',
    hours_raw: 'Daily 12:00–14:30 and 17:30–21:30; closing days not fixed (Tabelog). Reservations accepted (Tabelog); it is often fully booked, and an August 2026 regular advises booking by phone. Cards (VISA, Master, JCB, AMEX, Diners), e-money (transport IC, Rakuten Edy, nanaco, WAON, iD, QUICPay) and QR (Tabelog). 23 seats (3 at the counter, 20 at tables); non-smoking with a smoking area; private hire for 20–50; take-out; no parking, coin parking nearby (Tabelog; August 2026 review). East of Nijo Castle, 335 m from Nijojo-mae Stn (Tabelog). No cover charge (June 2026 review). Reviewers differ on drinks: a June 2026 diner listed one drink per person as required, though not strictly enforced; a September 2026 diner found drinks not necessary at lunch. Opened 2 May 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo Castle, Nijojo-mae',
    cuisine: 'Small Neapolitan pizzeria and osteria with a big wood-fired oven behind the counter and blue Italian decor (2024–2026 reviews) · Margherita and buffalo-mozzarella Margherita; Bismarck; Quattro (with honey); Salame; marinara; marinara with two kinds of shrimp and cuttlefish; crudo and rocket; pizza of the day; pizzas in normal and smaller sizes (2024–2026) · assorted appetisers of prosciutto, salami, quiche, olives and washed-rind cheese; assorted prosciutto; Caprese; octopus and squid braised in tomato; carbonara; Akane wagyu tagliata; tiramisu (2024–2026) · fried pizza (pizza fritta) lunch with salad, under ¥1,000 (January 2023); fried pizza also at a November 2023 dinner · no Tabasco, as the pizza is Neapolitan (September 2024) · lunch about ¥1,000–2,000, dinner about ¥4,000–6,000 (Tabelog; reviews)',
    website: null, gmaps: gm('Osteria La Balena 京都 矢幡町'), menu_url: null,
    notes: '[Pizza · east of Nijo Castle] A popular 23-seat pizzeria with a wood-fired oven: chewy Neapolitan Margherita, Bismarck and prosciutto platters, a few minutes from Nijo Castle. Often fully booked — reserve by phone. Small kitchen team, so service can be slow.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a Neapolitan pizzeria opened May 2021 east of Nijo Castle. The owner cooks at the oven, with one other staff member serving (2024–2025 reviews); a weekday lunch in September 2026 was run by one person. A July 2024 diner described the owner as quiet and hard-working in the kitchen, and a June 2026 diner gathered that the owner is a Hanshin Tigers fan. Two 2024 reviewers mention many foreign visitors, and walk-ins without a seat buying pizza to take away (August and September 2024). An August 2025 diner found the service quite slow and advised ordering early. The Tabelog-listed website (pizzerialabalena.owst.jp) no longer loads (2026-11-26).',
      philosophy: null, specialty: 'Wood-fired Neapolitan pizza.',
      anecdotes: [
        { text: 'An August 2026 diner had come back three times “because the pizza is just too delicious”, with the buffalo-mozzarella Margherita, Bismarck and prosciutto platter.', source: R + 'B531291158/' },
        { text: 'A September 2026 lunch visitor walked in from Nijo Castle with no menu outside to go on, and the room was fully booked soon after.', source: R + 'B535573271/' },
        { text: 'On a snowy January 2023 lunchtime, the only diner in the room had the fried pizza lunch — not greasy and delicious.', source: R + 'B459915209/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・ピザ、中京区二条通堀川東入矢幡町313-3、二条城前駅から335m、毎日 12:00〜14:30、17:30〜21:30、不定休、予約可、カード (VISA・Master・JCB・AMEX・Diners)・電子マネー (交通系IC・楽天Edy・nanaco・WAON・iD・QUICPay)・QR 可、23席 (カウンター3席、テーブル20席)、禁煙 (喫煙スペースあり)、20〜50名で貸切可、テイクアウト可、駐車場なし、2021年5月2日開店。口コミ (2023年1月〜2026年9月、英語): 二条城の東、青を基調にしたイタリアの内装、カウンターの奥に大きな薪窯、ナポリピッツァ、マルゲリータ、水牛モッツァレラのマルゲリータ、ビスマルク、クアトロ (はちみつ)、サラミ、マリナーラ、えび2種といかのマリナーラ、生ハムとルッコラ、日替わりのピッツァ、普通と小さめのサイズ、前菜の盛り合わせ、生ハムの盛り合わせ、カプレーゼ、たこといかのトマト煮、カルボナーラ、Akane 和牛のタリアータ、ティラミス、揚げピッツァのランチ (2023年1月)、店主とスタッフの2人、予約は電話で、満席が多い。',
      confidence: 'medium', sources: [TB, R + 'B459915209/', R + 'B475084874/', R + 'B488501769/', R + 'B490153763/', R + 'B496546587/', R + 'B512089802/', R + 'B525032639/', R + 'B528117939/', R + 'B531291158/', R + 'B534719107/', R + 'B535573271/', R + 'B536004888/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone (Japanese); cards, IC and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通堀川東入矢幡町313-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); reviews March, May, June, August and September 2026.' },
    pin_source: `Tabelog ${TB} (35.013743, 135.753118); cross-checked: GSI 京都府京都市中京区矢幡町313番地 (lot) 46 m; nearest existing record 57.6 m (kyoto_forni_hotel_the_mitsui, hidden); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B459915209/'],
    price_note: 'Only one item price in the sources (January 2023).', last_checked: TODAY, items: [
      it('', '', 'Buffalo-mozzarella Margherita', '', 'Pizza', 'no', 'no', 'August 2026.', 'margherita'),
      it('', '', 'Bismarck', '', 'Pizza', 'no', 'no', 'August 2025; August 2026.', 'bismarck'),
      it('', '', 'Assorted prosciutto', '', 'Appetisers', 'ask', 'no', 'August 2026.', 'prosciutto'),
      it('', '', 'Fried pizza lunch with salad', 'under ¥1,000', 'Lunch', 'no', 'no', 'January 2023.', 'pizza_fritta'),
    ] }, {
    cuisine: 'カウンターの奥に大きな薪窯、青を基調にしたイタリアの内装の小さなナポリピッツァとオステリアの店 (2024〜2026年の口コミ)・マルゲリータ、水牛モッツァレラのマルゲリータ、ビスマルク、クアトロ (はちみつを添えて)、サラミ、マリナーラ、えび2種といかのマリナーラ、生ハムとルッコラ、日替わりのピッツァ、普通サイズと小さめのサイズ (2024〜2026年)・生ハム、サラミ、キッシュ、オリーブ、ウォッシュチーズの前菜の盛り合わせ、生ハムの盛り合わせ、カプレーゼ、たこといかのトマト煮、カルボナーラ、Akane 和牛のタリアータ、ティラミス (2024〜2026年)・サラダ付きの揚げピッツァのランチ1,000円未満 (2023年1月)、2023年11月の夜も揚げピッツァ・ナポリピッツァなのでタバスコは置いていない (2024年9月)・昼1,000〜2,000円ほど、夜4,000〜6,000円ほど (食べログ、口コミ)',
    neighborhood: '二条城、二条城前',
    gf_detail: '要確認。カプレーゼ、生ハムの盛り合わせ、和牛のタリアータは合う可能性があるが、中心は小麦の生地のピッツァとパスタ。グルテンの情報はない (2023〜2026年の口コミ)。',
    vegan_detail: '要確認。マリナーラのピッツァがあるが (2026年6月)、材料の説明はない。多くの料理はチーズ、生ハム、魚介を使う (2023〜2026年の口コミ)。',
    notes: '[ピッツァ・二条城の東] 薪窯のある23席の人気のピッツェリア。もちもちのナポリのマルゲリータ、ビスマルク、生ハムの盛り合わせを二条城から数分で。満席が多いので電話で予約を。少人数で回すので、提供は遅いこともある。',
  });
}

// ================================================================ 季節料理 和
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26039035/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:45', '13:45']; const D = ['17:30', '22:00'];
  put({
    id: 'kyoto_kisetsu_ryori_nijojo_mae', name: '季節料理 和', category: 'OMNI',
    lat: 35.010847277862915, lng: 135.75067832042785, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, grilled fish and rice may suit, but fried fish, fried chicken and croquettes are battered, and miso and simmered dishes are not described; no gluten information (2023–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Sets carry many vegetable side dishes (October 2025), but each centres on fish or meat, with miso soup whose stock is not described (2023–2026 reviews).',
    hours_raw: 'Breakfast Wednesday and Sunday 6:30–9:30, Thursday and Saturday 7:30–9:30; lunch Wednesday–Monday 11:45–13:45 (Monday to 14:00); dinner Wednesday–Monday 17:30–22:00 (Monday last food order 20:00, drinks 21:00); closed Tuesday (Tabelog). Breakfast opens later on market days, after buying at the central wholesale market (August 2023; December 2024 — a Saturday opened at 8:00 instead of 7:30). Reservations accepted (Tabelog). Cash only: no cards, e-money or QR (Tabelog). 4 seats; non-smoking; private hire possible (Tabelog). Up a narrow, steep staircase on the second floor, 2 min from Nijojo-mae Stn (Tabelog; October 2025); with only four seats, guests may wait downstairs (May 2024).',
    hours: { 0: day(['11:45', '14:00'], D), 2: day(['06:30', '09:30'], L, D), 3: day(['07:30', '09:30'], L, D), 4: day(L, D), 5: day(['07:30', '09:30'], L, D), 6: day(['06:30', '09:30'], L, D) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Horikawa-Oike, Nijojo-mae',
    cuisine: 'Four-seat set-meal shop serving breakfast, lunch and dinner from fresh market produce, with no frozen ingredients (August 2023 review) · omakase set and omakase breakfast set: sashimi, grilled fish two ways (salt-grilled and miso-marinated), simmered dishes, many side dishes, mixed rice, red miso soup (2023–2024) · fried-fish sets of horse mackerel, sardine, trout and tuna; fried chicken set; crab cream croquette; sole meunière with tomato sauce; mackerel sashimi with ponzu; fried アイナメ (2024) · daily breakfast ¥880, extra rice ¥100 (August 2023); rice refill ¥150 (March 2024); Japanese breakfast ¥1,210, sashimi set ¥1,870 (December 2024); ichiju-sansai set ¥2,750 (April 2026) · courses of about ¥5,000 in the evening (March 2024 review) · morning sake possible (December 2024) · mandarin juice (February 2024) · prices had risen by May 2024 (review)',
    website: null, gmaps: gm('季節料理 和 京都 三坊猪熊町北組'), menu_url: null,
    notes: '[Set meals · Nijojo-mae, 4 seats] A tiny upstairs counter run by a couple, open from 6:30 or 7:30 for breakfast: market-fresh sashimi, grilled and fried fish and many side dishes, cooked to order. Cash only; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner couple (unnamed)'], origin: null,
      background: 'Per reviewers: a four-seat shop run by a couple — an August 2023 diner noted the cheerful, smiling owner and the shy owner’s skilled knife work; March and April 2024 reviews describe a husband-and-wife team. Ingredients are bought at the central wholesale market in the morning, so breakfast opens at 6:30 only on days the market is closed (August 2023; December 2024). One diner posted 71 visits between April 2023 and April 2024. Reviews are mostly warm; an April 2024 diner was bothered that the couple whispered to each other, a May 2024 diner noted higher prices, and an October 2025 diner waited 20–30 minutes for food cooked to order and found the mostly vegetable sets pricey. Reviewers mention international customers: quite a few lately, with the staff seeming stretched (May 2024); dishes geared towards inbound visitors (March 2026); a surprise to see international customers in so small a place (April 2026).',
      philosophy: null, specialty: 'Omakase set meal; market-fresh fish.',
      anecdotes: [
        { text: 'A June 2025 diner called it one of the restaurants that will flash before your eyes in a life review.', source: R + 'B509247645/' },
        { text: 'An August 2023 visitor came at 6:30 a.m. for the ¥880 breakfast before the tour groups, and found the homemade miso soup light and delicious.', source: R + 'B470067685/' },
        { text: 'A December 2024 diner queued first on a Saturday, and the shop opened at 8:00 because the morning’s buying ran late.', source: R + 'B497068374/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区三坊猪熊町北組375-1 2F、二条城前駅から徒歩2分、月曜 11:45〜14:00、17:30〜22:00 (料理L.O.20:00、ドリンクL.O.21:00)、水・日 6:30〜9:30、11:45〜13:45、17:30〜22:00、木・土 7:30〜9:30、11:45〜13:45、17:30〜22:00、金曜 11:45〜13:45、17:30〜22:00、火曜定休、予約可、カード・電子マネー・QR 不可、4席、禁煙、貸切可。口コミ (2023年4月〜2026年4月、英語): 夫婦で営む4席の店、中央卸売市場で朝仕入れ、冷凍の素材は使わない、朝食880円 (ご飯大盛り100円)、ご飯のおかわり150円、和朝食1,210円、刺身定食1,870円、一汁三菜の定食2,750円、おまかせ定食、おまかせ朝定食、刺身、塩焼きと味噌漬けの焼き魚、煮物、炊き込みご飯、赤だし、あじ・いわし・ます・まぐろのフライ、唐揚げ定食、かにクリームコロッケ、舌平目のムニエル、さばの刺身のポン酢、アイナメのフライ、みかんジュース、夜は5,000円ほどのコース、細く急な階段の2階。',
      confidence: 'medium', sources: [TB, R + 'B463469853/', R + 'B470067685/', R + 'B470458220/', R + 'B480036654/', R + 'B482301592/', R + 'B489809849/', R + 'B497068374/', R + 'B509247645/', R + 'B524953422/', R + 'B526129720/', R + 'B530573111/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Four seats, cash only; a December 2024 diner found the menu hard to read from the back seat, and the chef offered anything on it.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区三坊猪熊町北組375-1 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); reviews June and October 2025, March and April 2026.' },
    pin_source: `Tabelog ${TB} (35.010847, 135.750678); cross-checked: GSI 京都府京都市中京区三坊猪熊町北組375番地 (lot) 20 m; nearest existing record 60.0 m (kyoto_chidoriashi_nijo); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B497068374/', R + 'B526129720/', R + 'B470067685/'],
    price_note: 'Prices from reviews, dated; prices rose in 2024 (May 2024 review).', last_checked: TODAY, items: [
      it('', '', 'Japanese breakfast', '¥1,210', 'Breakfast', 'ask', 'ask', 'December 2024.', 'breakfast'),
      it('', '', 'Sashimi set', '¥1,870', 'Sets', 'ask', 'no', 'December 2024.', 'sashimi_set'),
      it('', '', 'Ichiju-sansai set (soup and three dishes)', '¥2,750', 'Sets', 'ask', 'ask', 'April 2026.', 'ichiju_sansai'),
      it('', '', 'Omakase set', '', 'Sets', 'ask', 'no', '2024 reviews.', 'omakase_set'),
    ] }, {
    cuisine: '冷凍の素材を使わず、市場の新鮮な素材で朝・昼・夜の定食を出す4席の店 (2023年8月の口コミ)・おまかせ定食とおまかせ朝定食: 刺身、塩焼きと味噌漬けの2通りの焼き魚、煮物、たくさんの小鉢、炊き込みご飯、赤だし (2023〜2024年)・あじ、いわし、ます、まぐろのフライの定食、唐揚げ定食、かにクリームコロッケ、トマトソースの舌平目のムニエル、さばの刺身のポン酢、アイナメのフライ (2024年)・朝食880円、ご飯大盛り100円 (2023年8月)、ご飯のおかわり150円 (2024年3月)、和朝食1,210円、刺身定食1,870円 (2024年12月)、一汁三菜の定食2,750円 (2026年4月)・夜は5,000円ほどのコース (2024年3月の口コミ)・朝酒もできる (2024年12月)・みかんジュース (2024年2月)・2024年5月には値上がり (口コミ)',
    neighborhood: '堀川御池、二条城前',
    gf_detail: '要確認。刺身、焼き魚、ご飯は合う可能性があるが、フライ、唐揚げ、コロッケは衣があり、味噌や煮物の説明はない。グルテンの情報はない (2023〜2026年の口コミ)。',
    vegan_detail: '要確認。定食には野菜の小鉢が多いが (2025年10月)、どれも魚か肉が中心で、味噌汁のだしの説明はない (2023〜2026年の口コミ)。',
    notes: '[定食・二条城前、4席] 夫婦で営む2階の小さな店。朝は6:30か7:30から。市場の新鮮な刺身、焼き魚、フライと多くの小鉢を注文を受けてから作る。現金のみ、火曜定休。',
  });
}

// ================================================================ Le temps gouter
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26038543/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '18:00']);
  put({
    id: 'kyoto_le_temps_gouter_omiya', name: 'Le temps gouter', category: 'OMNI',
    lat: 34.99881083787015, lng: 135.74941528030718, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A baked-goods shop of canelés, financiers, chiffon cakes, cookies and pies; no gluten information (2022–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Financiers use browned butter, and Basque cheesecake, whipped cream and ice cream are dairy; the tofu chiffon cake’s other ingredients are not described (2022–2025 reviews).',
    hours_raw: 'Monday, Friday, Saturday and Sunday 12:00–18:00; closed Tuesday–Thursday (Tabelog). An October 2023 reviewer found the hours irregular and advised checking the shop’s Instagram first. Cards, e-money and QR (Tabelog; December 2022 review). Takeaway and eat-in, with a separate window or counter for takeaway; counter for drinks, a raised seating area and space for small children (2022–2024 reviews). 7 min walk from Hankyu Omiya Stn (Tabelog). Opened 1 November 2022 (Tabelog).',
    hours: { 0: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takatsuji-Omiya',
    cuisine: 'Small canelé and baked-goods café in a white, pastel room (2022–2025 reviews) · canelés in several flavours and two sizes — pistachio and white chocolate ¥280 before tax (December 2022), premium rum, chocolate almond, pistachio, chocolate (2022–2024) · financier ¥200, freshly baked; plain, caramel and English tea tofu chiffon cake (plain ¥250, whipped cream +¥120); diamant cookies incl. salted vanilla; snowball cookies (2022–2023) · Basque cheesecake; apple pie; pudding; rum-raisin ice cream; canelé rusk (2024–2025) · hot coffee ¥480 (December 2022); café latte (2024) · about ¥1,000–2,000 (Tabelog, from reviews)',
    website: null, gmaps: gm('Le temps gouter 京都 高辻大宮町'), menu_url: null,
    notes: '[Canelés · Takatsuji-Omiya] A small pastel café near Shijo-Omiya where the pastry chef bakes in view: crisp-shelled canelés in several flavours, browned-butter financiers, tofu chiffon cake and Basque cheesecake, to eat in or take away. Closed Tuesday–Thursday.',
    chef_bio: { chef_name: null, roles: ['Pastry chef (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: opened in November 2022 in a spot that, a December 2022 reviewer wrote, used to be a coffee shop serving a few baked goods; the reviewer took the name to mean snack time in French. A female pastry chef can be watched making cakes and canelés through the window (July 2025). An April 2025 visitor found it a local favourite with gentle sweets but wished the coffee were better; a March 2023 visitor found most items sold out.',
      philosophy: null, specialty: 'Canelés.',
      anecdotes: [
        { text: 'A July 2025 passer-by watched the pastry chef at work through the window, then bought a small, moist Basque cheesecake.', source: R + 'B510223955/' },
        { text: 'A September 2024 visitor who thought it was takeout only found a relaxing room inside, and wanted a second cup of the milky café latte.', source: R + 'B502373157/' },
        { text: 'An April 2024 diner suggested trying two or three of the small canelés to sample flavours.', source: R + 'B482789709/' },
      ],
      japanese_sources_summary: '食べログ: 洋菓子・カフェ、下京区高辻大宮町140、阪急大宮駅から徒歩7分、月・金・土・日 12:00〜18:00、火〜木休み、カード・電子マネー・QR 可、2022年11月1日開店。口コミ (2022年12月〜2025年7月、英語): カヌレとフィナンシェの焼き菓子の店、白とパステルの内装、イートインとテイクアウト、ピスタチオとホワイトチョコのカヌレ280円 (税別)、フィナンシェ200円、ホットコーヒー480円、プレーン・キャラメル・イングリッシュティーの豆腐シフォン (プレーン250円、ホイップ120円)、ディアマンクッキー、スノーボールクッキー、ラムのカヌレ、チョコアーモンドのカヌレ、大小2サイズのカヌレ、バスクチーズケーキ、アップルパイ、プリン、ラムレーズンのアイス、カヌレのラスク、カフェラテ、窓越しに菓子職人の仕事が見える、営業日は Instagram で確認を (2023年10月)。',
      confidence: 'low', sources: [TB, R + 'B457488956/', R + 'B457882988/', R + 'B460705661/', R + 'B462289555/', R + 'B482789709/', R + 'B484980237/', R + 'B488792799/', R + 'B489703438/', R + 'B502373157/', R + 'B504119710/', R + 'B510223955/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the window; cashless payment accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高辻大宮町140',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); latest reviews April and July 2025 (a November 2025 review is listed but not read); no official site found.' },
    pin_source: `Tabelog ${TB} (34.998811, 135.749415); cross-checked: GSI 京都府京都市下京区高辻大宮町140番地 (lot) 73 m; nearest existing record 55.7 m (kyoto_atarayo_omiya); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B457488956/', R + 'B457882988/'],
    price_note: 'Prices from December 2022 reviews; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Canelé, pistachio and white chocolate', '¥280', 'Baked goods', 'ask', 'ask', 'December 2022, before tax.', 'canele'),
      it('', '', 'Financier', '¥200', 'Baked goods', 'ask', 'no', 'December 2022; browned butter.', 'financier'),
      it('', '', 'Plain tofu chiffon cake', '¥250', 'Cakes', 'ask', 'ask', 'December 2022; whipped cream +¥120.', 'chiffon'),
      it('', '', 'Hot coffee', '¥480', 'Drinks', '', '', 'December 2022.', 'coffee'),
    ] }, {
    cuisine: '白とパステルの小さなカヌレと焼き菓子のカフェ (2022〜2025年の口コミ)・数種類の味と2サイズのカヌレ: ピスタチオとホワイトチョコ280円 (税別、2022年12月)、プレミアムラム、チョコアーモンド、ピスタチオ、チョコ (2022〜2024年)・焼きたてのフィナンシェ200円、プレーン、キャラメル、イングリッシュティーの豆腐シフォンケーキ (プレーン250円、ホイップ120円)、塩バニラなどのディアマンクッキー、スノーボールクッキー (2022〜2023年)・バスクチーズケーキ、アップルパイ、プリン、ラムレーズンのアイス、カヌレのラスク (2024〜2025年)・ホットコーヒー480円 (2022年12月)、カフェラテ (2024年)・1,000〜2,000円ほど (食べログ、口コミから)',
    neighborhood: '高辻大宮',
    gf_detail: '要確認。カヌレ、フィナンシェ、シフォンケーキ、クッキー、パイの焼き菓子の店。グルテンの情報はない (2022〜2025年の口コミ)。',
    vegan_detail: '要確認。フィナンシェは焦がしバター、バスクチーズケーキ、ホイップ、アイスは乳製品。豆腐シフォンのほかの材料の説明はない (2022〜2025年の口コミ)。',
    notes: '[カヌレ・高辻大宮] 四条大宮に近い、菓子職人の仕事が見える小さなパステルのカフェ。外はカリッとした数種類のカヌレ、焦がしバターのフィナンシェ、豆腐シフォン、バスクチーズケーキを店内でもテイクアウトでも。火〜木休み。',
  });
}

// ================================================================ 丸福 (Higashinotoin-Shichijo)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26004697/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_marufuku_shiokoji', name: '丸福', category: 'OMNI',
    lat: 34.988092617880724, lng: 135.76122314019062, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the soba is 80/20 (twenty per cent wheat flour, March 2025 and January 2026 reviews), and udon, tempura and the soy-based dipping sauce contain wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba and udon are served in dashi broth or dipping sauce; toppings include shrimp tempura, herring and chicken (2025–2026 reviews).',
    hours_raw: 'Monday, Tuesday, Friday and Saturday 11:30–15:00 and 18:00–21:00; closed Wednesday, Thursday and Sunday (Tabelog). A September 2025 diner had walked past several times before finding it open. No reservations (Tabelog), though a July 2026 visitor booked for a Saturday at about 14:00. Cards: AMEX only; no e-money or QR (Tabelog), though a July 2026 diner paid by an electronic post-paid method. 40 seats (16 at tables, 16 on a raised floor, 8 at the counter); non-smoking; no parking (Tabelog). On Higashinotoin-dori just north of Shiokoji, east of Kyoto Tower, about 5 min from Kyoto Station (2025–2026 reviews).',
    hours: { 0: H, 1: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin-Shichijo, near Kyoto Station',
    cuisine: 'Long-established soba and udon shop with a Showa-era feel (2025–2026 reviews) · tempura zaru soba with two large shrimp and vegetables ¥1,600 (August 2025; April 2026); Ougon soba of domestic stone-ground buckwheat ¥1,100 (March 2025); nishin (herring) soba ¥1,550 (November 2026) · sets of mini oyakodon or mini tempura bowl with soba: mini oyakodon and zaru soba ¥1,130 tax included (January 2026) and ¥1,230 (July 2026 menu); mini tempura bowl with kake soba ¥1,180 (February 2026); large soba +¥300 (September 2025) · eel tempura rice bowl (October 2026); thin udon newly added (April 2026) · bottled beer, medium Asahi ¥700 (November 2026) · soba-yu after cold soba · about ¥1,000–2,000 (Tabelog, from reviews)',
    website: null, gmaps: gm('丸福 京都 東洞院通 塩小路町'), menu_url: null,
    notes: '[Soba · near Kyoto Station] An old-fashioned soba shop five minutes north of the station: zaru soba with a mini oyakodon or tempura bowl, tempura zaru soba and Kyoto nishin soba, with a bottle of beer. Closed Wednesday, Thursday and Sunday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a soba and udon shop dating from the early Showa era (June 2026 review), with regulars and office workers among its guests (December 2025). Reviewers praise the firm, thin 80/20 soba and attentive, experienced staff; a September 2025 diner found the soba average and the mini tempura bowl too salty, a February 2026 diner found it ordinary, an October 2026 diner missed a wet towel, and a November 2026 diner found the nishin soba good but pricey.',
      philosophy: null, specialty: 'Zaru soba sets; tempura zaru soba.',
      anecdotes: [
        { text: 'A November 2026 diner, whose first-choice soba shop was too crowded, found the nishin soba just like the one the diner’s mother used to make at home.', source: R + 'B539264689/' },
        { text: 'A June 2026 visitor unwound with a chilled Kirin bottle and smooth zaru soba in the Showa-retro room.', source: R + 'B531815380/' },
        { text: 'A March 2025 regular called it a long-time favourite and recommended the Ougon soba of stone-ground domestic buckwheat.', source: R + 'B503531873/' },
      ],
      japanese_sources_summary: '食べログ: そば・うどん・天丼、下京区東洞院通七条下ル塩小路町530-5、京都駅から379m、月・火・金・土 11:30〜15:00、18:00〜21:00、水・木・日休み、予約不可、カードは AMEX のみ、電子マネー・QR 不可、40席 (テーブル16席、小上がり16席、カウンター8席)、禁煙、駐車場なし。口コミ (2025年3月〜2026年11月、英語): 昭和初期からの老舗、二八そば、天ざるそば1,600円 (えび2本と野菜の天ぷら)、Ougon soba 1,100円 (国産の石臼挽きのそば粉)、にしんそば1,550円、ミニ親子丼とざるそばの定食1,130円 (2026年1月) と ミニ親子丼定食(ざるそば) 1,230円 (2026年7月のメニュー)、ミニ天丼とかけそばの定食1,180円、大盛り300円、うなぎの天ぷらの丼、細うどんを始めた (2026年4月)、瓶ビール、そば湯、京都タワーの東。',
      confidence: 'medium', sources: [TB, R + 'B503531873/', R + 'B512813993/', R + 'B513310354/', R + 'B519375506/', R + 'B521136063/', R + 'B523124663/', R + 'B523351764/', R + 'B531815380/', R + 'B532157445/', R + 'B535419727/', R + 'B538486438/', R + 'B539264689/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash or AMEX per Tabelog; set meals listed on the menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院通七条下ル塩小路町530-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (34.988093, 135.761223); cross-checked: GSI 京都府京都市下京区塩小路町530番地 (lot) 37 m; nearest existing record 43.0 m (kyoto_gochiya_shiokoji); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532157445/', R + 'B503531873/', R + 'B539264689/', R + 'B523124663/'],
    price_note: 'Prices from 2025–2026 reviews; the mini oyakodon set was ¥1,130 in January 2026 and ¥1,230 on the July 2026 menu.', last_checked: TODAY, items: [
      it('ミニ親子丼定食(ざるそば)', '', 'Mini oyakodon set with zaru soba', '¥1,230', 'Sets', 'no', 'no', 'July 2026 menu.', 'oyakodon_set'),
      it('', '', 'Tempura zaru soba', '¥1,600', 'Soba', 'no', 'no', 'April 2026.', 'ten_zaru'),
      it('', '', 'Nishin soba (simmered herring)', '¥1,550', 'Soba', 'no', 'no', 'November 2026.', 'nishin_soba'),
      it('', '', 'Mini tempura bowl set with kake soba', '¥1,180', 'Sets', 'no', 'no', 'February 2026.', 'tendon_set'),
    ] }, {
    cuisine: '昭和の雰囲気の老舗のそばとうどんの店 (2025〜2026年の口コミ)・大きなえび2本と野菜の天ざるそば1,600円 (2025年8月、2026年4月)、国産の石臼挽きのそば粉の Ougon soba 1,100円 (2025年3月)、にしんそば1,550円 (2026年11月)・ミニ親子丼かミニ天丼とそばの定食: ミニ親子丼とざるそば1,130円 (税込、2026年1月) と1,230円 (2026年7月のメニュー)、ミニ天丼とかけそば1,180円 (2026年2月)、そばの大盛り300円 (2025年9月)・うなぎの天ぷらの丼 (2026年10月)、細うどんを始めた (2026年4月)・瓶ビール、アサヒ中瓶700円 (2026年11月)・ざるそばのあとにそば湯・1,000〜2,000円ほど (食べログ、口コミから)',
    neighborhood: '東洞院七条、京都駅の近く',
    gf_detail: 'グルテンフリーではない。そばは二八 (小麦粉2割、2025年3月と2026年1月の口コミ)、うどん、天ぷら、醤油のつゆは小麦。',
    vegan_detail: 'ヴィーガンではない。そばとうどんはだしのつゆで、具はえびの天ぷら、にしん、鶏 (2025〜2026年の口コミ)。',
    notes: '[そば・京都駅の近く] 駅から北へ5分の昔ながらのそば屋。ざるそばとミニ親子丼かミニ天丼の定食、天ざるそば、京都のにしんそばを瓶ビールと。水・木・日休み。',
  });
}

save();
