// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 50.
//   + 味美庵 Ajimi An (homemade Sanuki-style udon by Kyoto University, same price up to two servings) — core
//   + ごま Goma (morning ramen and sesame mazesoba in an old townhouse, Umekoji) — core
//   + きんせ旅館 Kinse Ryokan (bagel café in a former ageya and ryokan in Shimabara) — core
//   + 李青 Lisei (Korean "Richo" tearoom with cold noodles and traditional teas, Demachiyanagi) — core
//   - skip 26033164 京都炭火串焼つじや 京都駅八条口店 (chain)
//   - skip 26023528 都野菜 賀茂 京都駅前店 (same brand already in data)
//   Core taken nearest-first; the lane's notable list is empty.
//   Same-name counts first, per brand or operator (2026-11-06): 味美庵 — one. ごま — one (Goma Ramen Goku is unrelated).
//   きんせ旅館 — one. 李青 — one.
//   None is in data/kyoto.json: grep by name and address (吉田橘町33-14, 西酢屋町3, 西新屋敷太夫町80, 梶井町448-16) found none.
//   Service charges per Tabelog's Japanese original: ごま 「支払いは現金のみ」 (cash only, not a charge); the others list none.
//   Goma is ramen, but the sources do not cover all six bowl dimensions, so no ramen block.
//   Kinse Ryokan's upstairs guest suite is not listed; the ground-floor café is open to all. No halal claims; no owner deaths.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-50');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26033164', 'chain: Tsujiya group — Tabelog lists Kyoto Sumibi Kushiyaki Tsujiya at Hachijoguchi, Ekimae and Umekoji-kita plus sister Tsujiya concepts at Shichijo, Kyoto Stn west, Kyoto Stn north and Shijo Karasuma (https://tabelog.com/en/rstLst/?sw=%E3%81%A4%E3%81%98%E3%82%84%20%E4%BA%AC%E9%83%BD).');
skip('26023528', 'same-concept branch of a brand already in data: 都野菜 賀茂 — data has 都野菜 賀茂 烏丸店; Tabelog also lists an Osaka Stn shop (https://tabelog.com/en/rstLst/?sw=%E9%83%BD%E9%87%8E%E8%8F%9C%20%E8%B3%80%E8%8C%82).');

// ================================================================ 味美庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26021602/'; const R = TB + 'dtlrvwlst/';
  const OF = 'http://newshop.jp/ajimian/';
  const H = day(['11:30', '14:30']);
  put({
    id: 'kyoto_ajimian_yoshida', name: '味美庵 (Ajimi An)', category: 'OMNI',
    lat: 35.023359, lng: 135.775255, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon, tempura and kakiage (2023–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: udon in dashi broth, shrimp tempura, chicken kara-age (2023–26 reviews).',
    hours_raw: 'Mon–Sat 11:30–14:30; closed Sunday, holidays and the second Wednesday of the month; hours may change (Tabelog). No reservations; queues at lunchtime in term (Tabelog; October 2023, February 2024). Cash only — no cards, e-money or QR (Tabelog). 18 seats: tables for 2 and 4 plus a raised tatami table at the back (Tabelog; May 2023). Non-smoking (Tabelog). On the diagonal Shiga-goe road by the Kyoto University medical campus, about 9 min from Jingu-Marutamachi (Tabelog; November 2023). Opened 2 December 2012 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yoshida, by the Kyoto University medical campus — 9 min from Jingu-Marutamachi',
    cuisine: 'Homemade Sanuki-style udon; one, one-and-a-half or two servings for the same price (Tabelog; 2023–24 reviews) · sets named after Kyoto places, e.g. Shimizu (shrimp and vegetable tempura udon with inari) ¥970, Oohara (kakiage udon with grated daikon and inari) ¥830 (October 2024) · Kibune (kitsune wakame udon with a mini kakiage bowl) ¥850 (November 2023); Gion (cold bukkake) ¥890 (February 2024); Saga no (curry udon, small rice, three kara-age) ¥980 (December 2024) · kamaage udon ¥580 (April 2023); oroshi bukkake ¥510 (August 2023); curry udon ¥830 (May 2024) · hot or cold, kake broth or bukkake sauce; free sesame and tenkasu (2023–26 reviews)',
    website: OF, gmaps: gm('味美庵 吉田橘町 うどん'), menu_url: TB,
    notes: '[Udon · Yoshida, a student-priced Sanuki udon shop] A small udon shop in a converted house by the Kyoto University medical campus, making its own Sanuki-style noodles: one or two servings for the same price, set meals named after Kyoto places, curry udon and a gentle, sweet-soy dashi. Under ¥1,000 for most sets. Cash only; lunch Monday to Saturday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an udon shop with homemade noodles, opened in December 2012. A May 2023 review describes a friendly older man boiling the noodles; reviews from 2023 to 2026 describe a lunchtime crowd of Kyoto University students and staff.',
      philosophy: null, specialty: 'Homemade Sanuki-style udon; Kyoto-named sets.',
      anecdotes: [
        { text: 'A February 2026 regular on a sixth visit found it quiet during the Kyoto University entrance exams and tried the tempura with grated daikon in the hot broth.', source: R + 'B442729747/' },
        { text: 'An October 2024 couple returning after eight years found prices a little higher but still good value.', source: R + 'B111217490/' },
        { text: 'A December 2024 diner finished the Saga no curry udon by pouring the leftover curry over the rice.', source: R + 'B496355825/' },
      ],
      japanese_sources_summary: '食べログ: うどん、左京区吉田橘町33-14、神宮丸太町駅から徒歩約9分、月〜土11:30〜14:30、日祝と第2水曜休み、予約不可、現金のみ、18席 (テーブルと奥の座敷)、禁煙、2012年12月2日オープン、自家製麺。口コミ (2023年4月〜2026年2月、英語): 讃岐風、1玉・1.5玉・2玉同じ値段、京都の地名のセット (Shimizu 970円、Oohara 830円、Kibune 850円、Gion 890円、Saga no 980円)、釜揚げ580円、おろしぶっかけ510円、カレーうどん830円、すりごまと天かす、京大の学生や教職員で混む、値上げ対策のキャンペーン (2026年1月)。',
      confidence: 'medium', sources: [TB, OF, R + 'B111217490/', R + 'B442729747/', R + 'B464237433/', R + 'B465746405/', R + 'B470139744/', R + 'B473979344/', R + 'B476760857/', R + 'B478045378/', R + 'B480597277/', R + 'B483216651/', R + 'B485765161/', R + 'B496355825/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Photo menu on the table (November 2023); say hot or cold and the size — big portions cost the same. Cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区吉田橘町33-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.023359, 135.775255); cross-checked: GSI 京都府京都市左京区吉田橘町33番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B111217490/', R + 'B496355825/', R + 'B485765161/'],
    price_note: 'Prices from 2023–24 reviews; a January 2026 review mentions rising prices.', last_checked: TODAY, items: [
      it('', '', 'Shimizu set (shrimp and vegetable tempura udon, inari)', '¥970', 'Sets', 'no', 'no', 'October 2024.', 'set_shimizu'),
      it('', '', 'Oohara set (kakiage udon with grated daikon, inari)', '¥830', 'Sets', 'no', 'no', 'October 2024.', 'set_oohara'),
      it('', '', 'Saga no set (curry udon, small rice, three kara-age)', '¥980', 'Sets', 'no', 'no', 'December 2024.', 'set_sagano'),
      it('', '', 'Curry udon', '¥830', 'Udon', 'no', 'no', 'May 2024.', 'curry_udon'),
      it('', '', 'Kamaage udon', '¥580', 'Udon', 'no', 'no', 'April 2023.', 'kamaage'),
    ] }, {
    cuisine: '自家製の讃岐風うどん、1玉・1.5玉・2玉が同じ値段 (食べログ、2023〜2024年の口コミ)・京都の地名のセット: Shimizu (海老と野菜の天ぷらうどん、いなり) 970円、Oohara (かき揚げのおろしうどん、いなり) 830円 (2024年10月)・Kibune (きつねわかめうどんとミニかき揚げ丼) 850円 (2023年11月)、Gion (冷たいぶっかけ) 890円 (2024年2月)、Saga no (カレーうどん、小ご飯、唐揚げ3個) 980円 (2024年12月)・釜揚げ580円 (2023年4月)、おろしぶっかけ510円 (2023年8月)、カレーうどん830円 (2024年5月)・温か冷、かけだしかぶっかけ、すりごまと天かすは自由 (2023〜2026年の口コミ)',
    neighborhood: '吉田、京大医学部のそば。神宮丸太町駅から徒歩9分',
    gf_detail: 'グルテンフリーではない。小麦のうどん、天ぷら、かき揚げ (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のうどん、海老天、唐揚げ (2023〜2026年の口コミ)。',
    notes: '[うどん・吉田、学生価格の讃岐うどん] 京大医学部のそば、民家を改装した小さなうどん店。自家製の讃岐風の麺で、1玉も2玉も同じ値段。京都の地名のセット、カレーうどん、甘めの醤油のやさしい出汁。ほとんどのセットが1,000円以下。現金のみ、月〜土の昼のみ。',
  });
}

// ================================================================ ごま
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26044066/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '11:15'], ['11:30', '14:30']);
  put({
    id: 'kyoto_goma_umekoji', name: 'ごま (Goma)', category: 'OMNI',
    lat: 34.990032, lng: 135.746194, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen and mazesoba noodles in a soy-based tare (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood (mackerel) shoyu broth, chashu, egg, katsuobushi (2026 reviews).',
    hours_raw: 'Daily: morning ramen 7:00–11:15 (last order 11:00), mazesoba lunch 11:30–14:30; closes early when noodles run out; irregular closures posted on Instagram (Tabelog). Cash only (Tabelog, Japanese text: 「支払いは現金のみ」). Order on a slip at the seat (March and June 2026). 26 seats: two rows of counter on the earthen floor, plus a tatami room with a counter and tables (Tabelog). Non-smoking (Tabelog). On Mibugawa-dori, 7 min from Umekoji-Kyotonishi; a short walk from Kyoto Aquarium (Tabelog; February and August 2026). Opened 21 November 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Umekoji, Mibugawa-dori — 7 min from Umekoji-Kyotonishi',
    cuisine: 'Morning ramen and lunchtime mazesoba in a renovated old townhouse (Tabelog; 2026 reviews) · morning: seafood amber shoyu ramen ¥540, built on mackerel, with a choice of mackerel oil, chicken oil or homemade chili oil (March–August 2026) · soft-boiled egg ¥100; extra chashu or Kujo green onion; katsuobushi rice bowl (small) ¥300 (March and May 2026) · a limited cold ramen (May 2026) · lunch: rich sesame mazesoba, finished with rice (February and April 2026) · no ramen block: the six bowl dimensions are not all covered',
    website: null, gmaps: gm('ごま 朝ラーメン 梅小路'), menu_url: TB,
    notes: '[Ramen · Umekoji, morning ramen in an old townhouse] A new ramen shop in a renovated townhouse near Kyoto Aquarium, opening at 7:00 with a light mackerel-based shoyu ramen for ¥540 — pick mackerel, chicken or chili oil — then switching to a rich sesame mazesoba at lunch. Cash only; order on a slip; closes when the noodles run out.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a ramen shop opened in November 2025 serving morning ramen and lunchtime mazesoba, in a renovated townhouse with a tatami room. Reviews in March and May 2026 describe one person running it; an August 2026 review mentions more staff.',
      philosophy: null, specialty: 'Morning shoyu ramen; sesame mazesoba.',
      anecdotes: [
        { text: 'A February 2026 early riser found it newly opened with an introductory discount and has been back several times for a large bowl with egg and chashu.', source: R + 'B522387313/' },
        { text: 'A February 2026 visitor to Kyoto Aquarium discovered mazesoba here and finished it with rice, as the shop recommends.', source: R + 'B522882179/' },
        { text: 'A May 2026 diner read a book while the single cook worked through orders, and found the ¥540 bowl a full, authentic shoyu ramen.', source: R + 'B530958396/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン・油そば・まぜそば、下京区西酢屋町3、梅小路京都西駅から徒歩7分、毎日、朝ラーメン7:00〜11:15 (L.O. 11:00)、まぜそば11:30〜14:30、麺がなくなり次第終了、不定休はインスタグラムで、支払いは現金のみ、26席 (土間のカウンターと座敷)、禁煙、2025年11月21日オープン。口コミ (2026年2月〜8月、英語): 古民家、魚介の琥珀醤油ラーメン540円、鯖の油・鶏油・自家製ラー油から選ぶ、半熟卵100円、チャーシューや Kujo のねぎの増量、おかか丼 (小) 300円、ごまのまぜそばに締めのご飯、注文は伝票に書く。',
      confidence: 'medium', sources: [TB, R + 'B522387313/', R + 'B522882179/', R + 'B522890530/', R + 'B523856005/', R + 'B523978026/', R + 'B525508499/', R + 'B525855405/', R + 'B526890752/', R + 'B527520676/', R + 'B530524646/', R + 'B530958396/', R + 'B534217571/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu on the walls; write the order on the slip and hand it over; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西酢屋町3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.990032, 135.746194); cross-checked: GSI 京都府京都市下京区西酢屋町3番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523978026/', R + 'B530958396/', R + 'B534217571/'],
    price_note: 'Prices from March–August 2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Morning seafood amber shoyu ramen', '¥540', 'Morning', 'no', 'no', 'Choose mackerel, chicken or chili oil; March–August 2026.', 'asa_ramen'),
      it('', '', 'Soft-boiled egg topping', '¥100', 'Toppings', 'ask', 'no', 'March 2026.', 'ajitama'),
      it('', '', 'Katsuobushi rice bowl (small)', '¥300', 'Rice', 'ask', 'no', 'May 2026.', 'okaka_don'),
      it('', '', 'Sesame mazesoba', '', 'Lunch', 'no', 'no', 'February and April 2026.', 'mazesoba'),
    ] }, {
    cuisine: '古民家を改装した店で、朝はラーメン、昼はまぜそば (食べログ、2026年の口コミ)・朝: 鯖をベースにした魚介の琥珀醤油ラーメン540円、鯖の油、鶏油、自家製ラー油から選ぶ (2026年3月〜8月)・半熟卵100円、チャーシューや Kujo のねぎの増量、おかか丼 (小) 300円 (2026年3月・5月)・期間限定の冷たいラーメン (2026年5月)・昼: ごまの濃厚なまぜそば、締めにご飯 (2026年2月・4月)・ラーメンの6項目がそろわないため、ラーメン欄はなし',
    neighborhood: '梅小路、壬生川通。梅小路京都西駅から徒歩7分',
    gf_detail: 'グルテンフリーではない。小麦のラーメンとまぜそばの麺、醤油のたれ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鯖の魚介醤油のスープ、チャーシュー、卵、かつお節 (2026年の口コミ)。',
    notes: '[ラーメン・梅小路、古民家の朝ラーメン] 京都水族館の近く、古民家を改装した新しいラーメン店。朝7時から、鯖ベースのあっさりした醤油ラーメンが540円 (鯖油、鶏油、ラー油から選ぶ)、昼はごまの濃厚なまぜそば。現金のみ、注文は伝票で、麺がなくなり次第終了。',
  });
}

// ================================================================ きんせ旅館
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26015758/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://kinseinn.com/';
  const H = day(['07:00', '13:00']);
  put({
    id: 'kyoto_kinse_ryokan_cafe', name: 'きんせ旅館 (Kinse Ryokan)', category: 'OMNI',
    lat: 34.992372, lng: 135.74391, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a bagel-sandwich café (2024–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A June 2025 review says vegan options are available and soy milk can be chosen for café au lait; other bagels use bacon or cream cheese (2024–25 reviews).',
    hours_raw: 'Mon–Wed, Fri and Sat 7:00–13:00; closed Thursday and Sunday; changes and temporary closures posted on Instagram (Tabelog). No reservations (Tabelog). Cards, e-money and QR accepted (Tabelog). 18 seats: sofas, a large shared table and a counter of 5 (Tabelog). Non-smoking inside (Tabelog). Through the old Shimabara gate, under 10 min from JR Tanbaguchi (Tabelog; official site). The upstairs guest suite takes one group at a time (official site).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimabara, through the old gate — under 10 min from Tanbaguchi',
    cuisine: 'Morning bagel sandwiches and coffee in a historic building (official site; 2024–26 reviews) · bacon, cheese and honey bagel sandwich ¥1,200; café au lait ¥700 (November 2025) · Kujo green-onion cream cheese and marinated mushroom bagel ¥800; coffee ¥600 (December 2025) · hummus and bacon bagel (November 2024); herbed potato salad bagel (March 2025) · café au lait with soy milk, milk tea (2025 reviews)',
    website: OF, gmaps: gm('きんせ旅館 島原'), menu_url: OF,
    notes: '[Café · Shimabara, breakfast in a former ageya] A morning café on the ground floor of a building that served as an ageya — a house where geisha entertained at banquets — and then as a ryokan until the early 1990s, with Taisho-era stained glass, high ceilings and a patchwork floor. Crisp warm bagel sandwiches and café au lait from 7:00. Closed Thursday and Sunday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site: the building was first an ageya where geisha entertained at dinner parties and banquets, then a ryokan until the early 1990s; it reopened in 2012 with Cafe AUSGANG on the main floor and a private guest suite upstairs, and also hosts ikebana workshops and live music. Tabelog lists 20 December 2009 as the opening day.',
      philosophy: null, specialty: 'Bagel sandwiches; the historic interior.',
      anecdotes: [
        { text: 'A February 2024 visitor said "wow" three times on walking in under the stained glass and high ceiling.', source: R + 'B482846237/' },
        { text: 'A May 2024 visitor recognised the room from a favourite photo book and met the house cats.', source: R + 'B485477035/' },
        { text: 'An October 2025 early visitor waited a little because one person was working alone, and found the room hushed around the big shared table.', source: R + 'B515035904/' },
      ],
      japanese_sources_summary: '公式サイト (英語): 島原の大門の先、揚屋として芸妓が宴席でもてなした建物、その後1990年代初めまで旅館、2012年にカフェ (Cafe AUSGANG) と2階の一組限定の客室で再開、生け花のワークショップやライブも。食べログ: カフェ・バー・ケーキ、下京区西新屋敷太夫町80、JR丹波口駅から徒歩10分以内、月火水金土7:00〜13:00、木日休み、予約不可、カード・電子マネー・QR 可、18席、店内禁煙、オープン日2009年12月20日。口コミ (2024年2月〜2026年9月、英語): 大正ロマンのステンドグラス、高い天井、ベーグルサンド1,200円、カフェオレ700円、Kujo のねぎのクリームチーズとマリネのきのこのベーグル800円、豆乳のカフェオレ、猫、映画のロケ地。',
      confidence: 'medium', sources: [TB, OF, R + 'B421496419/', R + 'B482846237/', R + 'B485477035/', R + 'B497481662/', R + 'B503788128/', R + 'B507030597/', R + 'B507957799/', R + 'B515035904/', R + 'B520412898/', R + 'B520450381/', R + 'B528023395/', R + 'B536062134/'] },
    cultural_comfort: { level: 'english', note: 'The official site is in English and invites English enquiries; keep voices low at the shared table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西新屋敷太夫町80',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.992372, 135.743910); cross-checked: GSI 京都府京都市下京区西新屋敷太夫町80番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B421496419/', R + 'B520450381/'],
    price_note: 'Prices from November–December 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Bagel sandwich: bacon, cheese and honey', '¥1,200', 'Bagels', 'no', 'no', 'November 2025.', 'bagel_bacon'),
      it('', '', 'Bagel: Kujo green-onion cream cheese and marinated mushrooms', '¥800', 'Bagels', 'no', 'no', 'December 2025.', 'bagel_negi'),
      it('', '', 'Café au lait (soy milk available)', '¥700', 'Drinks', 'ask', 'ask', 'November 2025; soy milk June 2025.', 'cafe_au_lait'),
      it('', '', 'Coffee', '¥600', 'Drinks', 'ask', 'vegan', 'December 2025.', 'coffee'),
    ] }, {
    cuisine: '歴史ある建物で、朝のベーグルサンドとコーヒー (公式サイト、2024〜2026年の口コミ)・ベーコン、チーズ、はちみつのベーグルサンド1,200円、カフェオレ700円 (2025年11月)・Kujo のねぎのクリームチーズとマリネのきのこのベーグル800円、コーヒー600円 (2025年12月)・フムスとベーコンのベーグル (2024年11月)、ハーブのポテトサラダのベーグル (2025年3月)・豆乳のカフェオレ、ミルクティー (2025年の口コミ)',
    neighborhood: '島原、大門の先。丹波口駅から徒歩10分以内',
    gf_detail: 'グルテンフリーではない。ベーグルサンドのカフェ (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。2025年6月の口コミではヴィーガン対応のメニューがあり、カフェオレは豆乳を選べる。ほかのベーグルはベーコンやクリームチーズを使う (2024〜2025年の口コミ)。',
    notes: '[カフェ・島原、揚屋だった建物で朝食を] 芸妓が宴席でもてなした揚屋、その後1990年代初めまで旅館だった建物の1階にある朝のカフェ。大正のステンドグラス、高い天井、パッチワークのような床。7時から、温かくさくっとしたベーグルサンドとカフェオレを。木日休み。',
  });
}

// ================================================================ 李青
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001028/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://lisei.jp/';
  const H = day(['11:00', '16:00']);
  put({
    id: 'kyoto_lisei_demachiyanagi', name: '李青 (Lisei)', category: 'OMNI',
    lat: 35.027529, lng: 135.76988, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Korean cold noodles, kimbap, rice-cake soup, soy-milk noodles and rice cakes (Tabelog; 2025–26 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the café serves traditional teas and a mugwort rice cake (March 2026); the cold noodles come with chashu and egg (2025–26 reviews).',
    hours_raw: 'Wed–Sat 11:00–16:00 (last order 15:30); closed Sunday to Tuesday and over summer, winter and New Year breaks (Tabelog). Tabelog says no reservations, but a June 2026 visitor booked through Instagram. Cash only — no cards, e-money or QR (Tabelog; February 2026). 15 seats (Tabelog). Non-smoking; a note on each table asks for quiet voices (Tabelog; February 2026). Two parking spaces (Tabelog). In the residential streets near Demachiyanagi (official site). Concerts and a gallery, Gallery Sumomo (official site).',
    hours: { 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Demachiyanagi, west of the Kamo river',
    cuisine: 'A small Joseon-style tearoom (李朝喫茶) furnished with Korean antiques and crafts, serving an original coffee blend, traditional teas, desserts and a few light meals (official site) · Korean cold noodles ¥1,400 with chashu, egg, seaweed, kimchi and shiso (August 2025 – August 2026) · Friday-only kimbap lunch (October 2025; May 2026) · Korean rice-cake soup ¥1,400 (November 2025) · kalbi salad (June 2026); soy-milk noodles in spring and summer, tteok in autumn and winter (Tabelog) · jujube tea ¥800, Korean soy-milk latte ¥900, mugwort and red-bean rice cake ¥600 (March 2026)',
    website: OF, gmaps: gm('李朝喫茶 李青 出町柳'), menu_url: OF,
    notes: '[Korean tearoom · Demachiyanagi, Joseon antiques and cold noodles] A quiet 15-seat tearoom filled with Korean antique furniture and crafts, serving traditional teas, a jujube latte and rice cakes, plus a much-praised bowl of Korean cold noodles and a Friday-only kimbap lunch. Featured on TV by the actor 松重豊 (June 2026 review). Cash only; Wednesday to Saturday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site: 李朝喫茶 李青, a small tearoom in a residential street near Demachiyanagi, showing Korean furniture and crafts and hoping guests will experience the culture of a neighbour with deep ties to Kyoto; it also runs a gallery and holds concerts. A June 2026 review says the actor 松重豊 introduced it on television the previous winter.',
      philosophy: 'To let guests taste, with all five senses, the culture of a neighbouring country closely tied to Kyoto (official site).', specialty: 'Korean cold noodles; traditional teas.',
      anecdotes: [
        { text: 'A June 2026 visitor waited for warm weather to try the cold noodles seen on TV, booked through Instagram, and rated these the best cold noodles ever.', source: R + 'B530561878/' },
        { text: 'A February 2026 visitor found a note on each table asking for quiet voices, and other guests reading books.', source: R + 'B524490243/' },
        { text: 'A November 2025 visitor chose the Korean rice-cake soup on a cold day and found it gentle and full of ingredients.', source: R + 'B518455834/' },
      ],
      japanese_sources_summary: '公式サイト: 李朝喫茶 李青 (リセイ)、出町柳近くの住宅地の小さな喫茶店、韓国・朝鮮の家具や工芸品、オリジナルブレンド珈琲、伝統茶、デザート、軽食、ギャラリーすもも、イベント (2026年11月29日に箏とフルートの二重奏)。食べログ: カフェ、上京区梶井町448-16、水〜土11:00〜16:00 (L.O. 15:30)、日月火と夏冬の休み、予約不可、現金のみ、15席、禁煙、韓国冷麺、トック (秋冬)、豆乳麺 (春夏)、金曜限定のキンパのセット。口コミ (2025年8月〜2026年8月、英語): 冷麺1,400円、韓国の雑煮1,400円、なつめ茶800円、豆乳ラテ900円、よもぎと小豆の餅600円、カルビサラダ、テレビで松重豊が紹介。',
      confidence: 'medium', sources: [TB, OF, R + 'B512413723/', R + 'B514784402/', R + 'B518172527/', R + 'B518455834/', R + 'B518464115/', R + 'B521367643/', R + 'B524226785/', R + 'B524490243/', R + 'B529148689/', R + 'B530525979/', R + 'B530561878/', R + 'B534388821/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A quiet room: keep voices low; cash only; come Friday for kimbap. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区梶井町448-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (event notice dated 6 October 2026) and Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.027529, 135.769880); GSI 京都府京都市上京区梶井町448番地 (lot) is 178 m away — 梶井町448 is a large lot, so the Tabelog pin is kept as approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B512413723/', R + 'B518455834/', R + 'B524226785/'],
    price_note: 'Prices from August 2025 – March 2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Korean cold noodles', '¥1,400', 'Light meals', 'ask', 'no', 'August 2025; February 2026.', 'reimen'),
      it('', '', 'Korean rice-cake soup', '¥1,400', 'Light meals', 'ask', 'ask', 'November 2025.', 'tteokguk'),
      it('', '', 'Jujube tea (latte with black sugar and herbs)', '¥800', 'Teas', 'ask', 'ask', 'March 2026.', 'jujube_tea'),
      it('', '', 'Korean soy-milk latte', '¥900', 'Teas', 'ask', 'ask', 'March 2026.', 'soy_latte'),
      it('', '', 'Mugwort rice cake with red beans', '¥600', 'Sweets', 'ask', 'ask', 'March 2026.', 'yomogi_mochi'),
    ] }, {
    cuisine: '韓国・朝鮮の家具や工芸品に囲まれた小さな李朝喫茶。オリジナルブレンド珈琲、伝統茶、デザート、軽食 (公式サイト)・チャーシュー、卵、韓国海苔、キムチ、大葉の冷麺1,400円 (2025年8月〜2026年8月)・金曜限定のキンパのランチ (2025年10月、2026年5月)・韓国の餅のスープ1,400円 (2025年11月)・カルビサラダ (2026年6月)、春夏は豆乳麺、秋冬はトック (食べログ)・なつめ茶800円、韓国の豆乳ラテ900円、よもぎと小豆の餅600円 (2026年3月)',
    neighborhood: '出町柳、鴨川の西',
    gf_detail: '要確認。冷麺、キンパ、餅のスープ、豆乳麺、餅 (食べログ、2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。食べログはベジタリアン対応ありと表示。伝統茶やよもぎ餅がある (2026年3月)。冷麺にはチャーシューと卵がのる (2025〜2026年の口コミ)。',
    notes: '[韓国の喫茶・出町柳、李朝の家具と冷麺] 韓国の古い家具や工芸品に囲まれた15席の静かな喫茶。伝統茶、なつめのラテ、餅、評判の冷麺や金曜限定のキンパのランチ。俳優の松重豊がテレビで紹介 (2026年6月の口コミ)。現金のみ、水〜土。',
  });
}

save();
