// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 94.
//   + Bar 竹葉 (バー ササ) (gin-and-tonic and wine bar on the ground floor of the small hotel 東山四季花木) — rest
//   + フレンチバード (one-man French bistro and wine bar on Nijo-dori near City Hall) — rest
//   + 釜座 清水二年坂店 Kamanza (yuba, soba and udon on Ninenzaka) — rest
//   - skip 26017600 四条西洞院食堂 (chain: まいどおおきに食堂, Fujio Food)
//   - skip 26036734 MAX1921 (thin)
//   + たるひの月 (couple-run Kyoto-style izakaya at Kawabata-Nijo; fruit liqueurs) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl, the THAN brand list
//   (than.co.jp/brands, read 2026-11-08) and the 株式会社WILL ruling (26043489): no matches. RABBIT BAGELS 四条新町店 (26042020)
//   is at the head of the lane but already ruled a chain (26037053) and left to the queue.
//   Hotel check: Bar 竹葉 is in 東山四季花木, an eight-room hotel run by its architect-and-designer owners (precious.jp, forbesjapan);
//   not a big chain, and the bar is open to passers-by (November 2025) — so the big-chain-hotel ruling does not apply.
//   Same-name counts (2026-11-08): one each; 釜座's site (kamanza.co.jp, 釜座有限会社) names only the Ninenzaka shop.
//   Readings: katakana given by the listing are used (バー ササ); no romanization for フレンチバード or たるひの月 beyond the kana.
//   None of the drafted shops is in data/kyoto.json.
//   Charges (Tabelog, Japanese originals): Bar 竹葉 「チャージ有り」 (¥1,000 in a January 2023 review); フレンチバード
//   「お席代200円、ドリンクのご注文がない場合にはサービス料10％を頂く場合がございます。」; others none listed.
//   No halal claims; no owner deaths; single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-94');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26017600', 'chain: 四条西洞院食堂 is a まいどおおきに食堂 shop — its Tabelog website link is fujiofood.com’s shop search, and a June 2025 reviewer calls it a well-known chain (https://www.fujiofood.com/shop_search/shokudo/shop_1018.php; https://tabelog.com/en/kyoto/A2601/A260201/26017600/).');
skip('26036734', 'thin: MAX1921 has three short 2025–26 reviews, opens on Saturdays only, and a May 2026 review describes a second kitchen ("Anton") sharing the space — not enough current sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260302/26036734/).');

// ================================================================ Bar 竹葉
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037778/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '00:00']);
  put({
    id: 'kyoto_bar_sasa_higashiyama', name: 'Bar 竹葉 (バー ササ)', category: 'OMNI',
    lat: 35.009286, lng: 135.77988, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a bar; drinks include beer and whisky, and the snacks are not described as gluten-free (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Gin and tonics with fruit, wine and spirits (2025–26 reviews); food is not described.',
    hours_raw: 'Tue–Sun 17:00–24:00 (last order 23:00); closed Monday and the third Tuesday (Tabelog). 「チャージ有り」 — a cover charge applies (Tabelog); it was ¥1,000 in a January 2023 review. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). About five counter seats and tables, behind a glass front you can see into from the street (January 2026; 2024 reviews). On the ground floor of the small hotel 東山四季花木, open to hotel guests and passers-by alike (November 2025), near Higashiyama Station.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashiyama Station, Sanjo-dori',
    cuisine: 'Hotel-lobby bar known for gin and tonics · seasonal fruit gin and tonics — watermelon, sweet orange (June 2026) · a wine list chosen by a sommelier (November 2025) · sparkling wine, lemon sour (January 2026)',
    website: null, gmaps: gm('Bar 竹葉 東山四季花木'), menu_url: TB,
    notes: '[Bar · Higashiyama] A calm, glass-fronted bar of wood and stone on the ground floor of the small hotel 東山四季花木 near Higashiyama Station, open to all: seasonal fruit gin and tonics, a sommelier’s wine list and a chatty master. Cover charge. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed), a sommelier (November 2025, June 2026)'], origin: null,
      background: 'Per reviews: the bar of the eight-room hotel 東山四季花木, facing the street and open to non-guests (November 2025, January 2026).',
      philosophy: null, specialty: 'Seasonal fruit gin and tonics.',
      anecdotes: [
        { text: 'A June 2026 visitor tried two of the season’s gin and tonics — watermelon and sweet orange — and lost track of time talking with the master.', source: R + 'B530349845/' },
        { text: 'A November 2025 wine expert ordered a plain gin and tonic and judged the bar’s distance from the city’s bustle just right for the end of a Kyoto day.', source: R + 'B518180083/' },
      ],
      japanese_sources_summary: '食べログ: バー、東山区今小路町85-1 東山四季花木 1F、火〜日17:00〜24:00 (L.O.23:00)、月曜と第3火曜休み、チャージ有り、カード可、電子マネー・QR 不可。口コミ (2025年9月〜2026年6月、英語): ホテルの1階のバーだが宿泊客以外も入れる、ガラス張りで外から見える、ソムリエのマスター、季節の果物のジントニック (すいか、スイートオレンジ)、ワイン、スパークリングワイン、レモンサワー、カウンター約5席とテーブル。2023年1月の口コミではチャージ1,000円。',
      confidence: 'medium', sources: [TB, R + 'B513514343/', R + 'B518180083/', R + 'B521111484/', R + 'B521426855/', R + 'B530349845/', R + 'B459843559/'] },
    cultural_comfort: { level: 'english', note: 'A hotel bar with many overseas guests (January 2026); easy to walk in alone. Cover charge applies.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区今小路町85-1 東山四季花木 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.009286, 135.779880); cross-checked: GSI 京都府京都市東山区今小路町85番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530349845/', R + 'B459843559/'],
    price_note: 'No 2025–26 prices quoted; reviewers report ¥2,000–9,999 per person; cover ¥1,000 in January 2023.', last_checked: TODAY, items: [
      it('', '', 'Seasonal fruit gin and tonic', '', 'Cocktails', 'ask', 'ask', 'June 2026.', 'fruit_gt'),
      it('', '', 'Wine by the glass', '', 'Wine', 'ask', 'ask', 'November 2025.', 'wine'),
    ] }, {
    cuisine: 'ジントニックで知られるホテル1階のバー・季節の果物のジントニック (すいか、スイートオレンジ) (2026年6月)・ソムリエが選ぶワイン (2025年11月)・スパークリングワイン、レモンサワー (2026年1月)',
    neighborhood: '東山駅、三条通',
    gf_detail: 'グルテンフリーではない。バー。ビールやウイスキーもあり、つまみにグルテンフリーの記載はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。果物のジントニック、ワイン、蒸留酒 (2025〜2026年の口コミ)。料理の情報はない。',
    notes: '[バー・東山] 東山駅近く、小さなホテル東山四季花木の1階の、木と石の静かなガラス張りのバー。宿泊客以外も入れる。季節の果物のジントニック、ソムリエのワイン、話上手なマスター。チャージあり。月曜休み。',
  });
}

// ================================================================ フレンチバード
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26023786/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_furenchibado_nijo', name: 'フレンチバード', category: 'OMNI',
    lat: 35.013793, lng: 135.765329, cuisine_type: 'french',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta, quiche, tarte flambée and braised dishes (2014–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: red-wine-braised meat, uni pasta, tripe, venison (2017–26 reviews).',
    hours_raw: 'Mon–Wed, Fri–Sun and holidays 17:00–23:00 (last order 22:00); closed Thursday and other irregular days — check before going (Tabelog). 「お席代200円、ドリンクのご注文がない場合にはサービス料10％を頂く場合がございます。」 — a ¥200 seat charge, and a 10% service charge may apply if no drink is ordered (Tabelog). One person cooks and serves, so dishes take time (October 2026). Cards and PayPay; no e-money (Tabelog). 15 seats, mostly at the counter (Tabelog). Ground floor of an apartment building on Nijo-dori between the Imperial Palace and City Hall (October 2026).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nijo-dori, near Kyoto City Hall',
    cuisine: 'Small French bistro and wine bar · classic dishes and appetizers — uni pasta, red-wine-braised meat (October 2026) · a long list of wines by the glass, about ¥850–2,000, leaning classic, plus sherry and sweet wines (October 2026)',
    website: null, gmaps: gm('フレンチバード 京都 二条'), menu_url: TB,
    notes: '[French bistro & wine · Nijo-dori] A small, quiet French bistro on Nijo-dori near City Hall, run single-handed: classic dishes such as red-wine-braised meat and uni pasta with a broad, classic wine-by-the-glass list. Unhurried service; ¥200 seat charge. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who cooks and serves alone (October 2026)'], origin: null,
      background: 'Per reviews: a French bistro and wine bar on Nijo-dori, open since 2014 (2014 reviews).',
      philosophy: null, specialty: 'Classic bistro dishes; wines by the glass.',
      anecdotes: [
        { text: 'An October 2026 visitor found the owner running the room alone, with glasses of classic red, white and sparkling from about ¥850 to ¥2,000 and more suggested on request.', source: R + 'B537172943/' },
      ],
      japanese_sources_summary: '食べログ: フレンチ・ビストロ・ワインバー、中京区晴明町674 ヴァインオークニック 1F、月火水金土日・祝日17:00〜23:00 (L.O.22:00)、木曜・不定休、お席代200円、ドリンクのご注文がない場合はサービス料10％の場合あり、カード・PayPay 可、電子マネー不可、15席。口コミ (2025年7月〜2026年10月、英語): 店主が一人で料理とサービス、うにのパスタ、赤ワイン煮込み、グラスワイン約850〜2,000円 (クラシック寄り)、シェリーや甘口ワインも、二条通、御所と市役所の間。',
      confidence: 'low', sources: [TB, R + 'B515408906/', R + 'B537172943/', R + 'B538436139/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order a drink (the 10% service charge may apply without one); one person runs the room, so allow time. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区晴明町674 ヴァインオークニック 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013793, 135.765329); cross-checked: GSI 京都府京都市中京区晴明町674番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537172943/'],
    price_note: 'Wine-by-the-glass range from October 2026; reviewers report ¥6,000–7,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Wine by the glass', '¥850–2,000', 'Wine', 'ask', 'ask', 'October 2026.', 'glass_wine'),
      it('', '', 'Red-wine-braised meat', '', 'Mains', 'ask', 'no', 'October 2026.', 'braised_meat'),
      it('', '', 'Uni pasta', '', 'Pasta', 'no', 'no', 'October 2026.', 'uni_pasta'),
    ] }, {
    cuisine: '小さなフレンチのビストロ兼ワインバー・うにのパスタ、赤ワイン煮込みなどの定番の料理と前菜 (2026年10月)・クラシック寄りのグラスワインが約850〜2,000円で豊富、シェリーや甘口ワインも (2026年10月)',
    neighborhood: '二条通、京都市役所の近く',
    gf_detail: 'グルテンフリーではない。パスタ、キッシュ、タルトフランベ、煮込み (2014〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。赤ワイン煮込み、うにのパスタ、トリッパ、鹿 (2017〜2026年の口コミ)。',
    notes: '[フレンチビストロとワイン・二条通] 市役所近く、二条通の店主が一人で営む小さな静かなフレンチビストロ。赤ワイン煮込みやうにのパスタなどの定番料理と、クラシックなグラスワインが豊富。ゆったりしたサービス、お席代200円。木曜休み。',
  });
}

// ================================================================ 釜座 清水二年坂店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26014594/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.kamanza.co.jp';
  put({
    id: 'kyoto_kamanza_ninenzaka', name: '釜座 清水二年坂店 (Kamanza)', category: 'OMNI',
    lat: 34.998873, lng: 135.780741, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: udon, soba in soy-based broth, tempura, nama-fu (wheat gluten) (2023–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: duck soba, chicken udon, herring soba, shrimp tempura, dashi throughout (2025–26 reviews).',
    hours_raw: 'From 11:00; closing time and closed days not fixed (Tabelog). Busy at lunch, with waits of 20–30 minutes on weekends in the past (2023 reviews); quick turnover (May 2025). Cards (JCB, AMEX, Diners) and e-money (Tabelog). 70 seats, with tatami (Tabelog; May 2025). On Ninenzaka between Kodaiji and Kiyomizu-dera; takeaway items too (shop site).',
    hours: {}, hours_status: 'varies',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ninenzaka — Kiyomizu',
    cuisine: 'Kyoto yuba, nama-fu and tofu with noodles, tempura and rice bowls (shop site) · yuba sashimi, zaru udon (May 2025) · duck soba with yuba (April 2026) · winter fried-mochi mizore udon with tororo kombu ¥1,600, chicken udon, herring soba (February 2026) · nama-fu mitarashi with kinako (2024 review)',
    website: SITE, gmaps: gm('釜座 清水二年坂店'), menu_url: SITE,
    notes: '[Yuba & noodles · Ninenzaka] A large, approachable noodle house on the stone-paved Ninenzaka: yuba sashimi, duck soba with yuba, seasonal udon and tempura with Kyoto yuba, nama-fu and tofu, in rooms with tatami. Busy at lunch; hours vary.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the shop site: a restaurant of Kyoto yuba, nama-fu and tofu with tempura, noodles and rice bowls, run by 釜座有限会社 on Ninenzaka (kamanza.co.jp).',
      philosophy: null, specialty: 'Yuba sashimi; duck soba with yuba.',
      anecdotes: [
        { text: 'A February 2026 group tried the winter fried-mochi mizore udon with tororo kombu and grated daikon, plus chicken udon, herring soba and zaru udon.', source: R + 'B522957861/' },
        { text: 'An April 2026 visitor, put off by the pricier-looking places along Ninenzaka, found this one approachable and had duck soba with yuba.', source: R + 'B528516580/' },
      ],
      japanese_sources_summary: '公式サイト: 釜座有限会社、湯葉・生麩・豆腐などの京の食材と天ぷら・麺類・丼類、持ち帰りも、東山区高台寺南門通下河原東入桝屋町363-12。食べログ: 甘味処・喫茶、11:00〜 (閉店時刻と定休日は不定)、カード (JCB・AMEX・Diners)・電子マネー可、70席。口コミ (2025年5月〜2026年4月、英語): 湯葉の刺身、ざるうどん、鴨そばと湯葉、冬の揚げ餅のみぞれうどん (とろろ昆布) 1,600円、かしわうどん、にしんそば、座敷、二年坂。',
      confidence: 'medium', sources: [SITE, TB, R + 'B508240816/', R + 'B512178098/', R + 'B518345279/', R + 'B522957861/', R + 'B528516580/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Expect a short wait at lunch in busy seasons. No English evidence found in 2025–26 reviews.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区高台寺枡屋町363-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site; Tabelog reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (34.998873, 135.780741); cross-checked: GSI 京都府京都市東山区桝屋町363番地 (lot) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522957861/', R + 'B528516580/'],
    price_note: 'One price from February 2026; reviewers report ¥1,000–2,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Fried-mochi mizore udon (winter)', '¥1,600', 'Udon', 'no', 'no', 'February 2026.', 'mizore_udon'),
      it('', '', 'Duck soba with yuba', '', 'Soba', 'no', 'no', 'April 2026.', 'kamo_soba'),
      it('', '', 'Yuba sashimi', '', 'Yuba', 'ask', 'ask', 'May 2025.', 'yuba_sashimi'),
    ] }, {
    cuisine: '京の湯葉、生麩、豆腐と麺、天ぷら、丼 (公式サイト)・湯葉の刺身、ざるうどん (2025年5月)・湯葉入りの鴨そば (2026年4月)・とろろ昆布の冬の揚げ餅のみぞれうどん1,600円、かしわうどん、にしんそば (2026年2月)・生麩のみたらしときなこ (2024年の口コミ)',
    neighborhood: '二年坂。清水',
    gf_detail: 'グルテンフリーではない。うどん、醤油のつゆのそば、天ぷら、生麩 (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鴨そば、かしわうどん、にしんそば、海老天、出汁 (2025〜2026年の口コミ)。',
    notes: '[湯葉と麺・二年坂] 石畳の二年坂の入りやすい大きな麺の店。湯葉の刺身、湯葉入りの鴨そば、季節のうどんや天ぷらを、京の湯葉、生麩、豆腐とともに座敷で。昼は混む、営業時間は不定。',
  });
}

// ================================================================ たるひの月
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26035426/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:30']);
  put({
    id: 'kyoto_taruhi_kawabata_nijo', name: 'たるひの月', category: 'OMNI',
    lat: 35.013564, lng: 135.773934, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, karaage, oden and soy-seasoned Kyoto dishes (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, hamo, sea bream, dashi throughout (2025–26 reviews).',
    hours_raw: 'Mon, Tue, Thu–Sun 18:00–22:30; closed Wednesday (Tabelog). Usually nearly full; book by phone (June and August 2026). Cards (AMEX only); no e-money (Tabelog). 25 seats: 10 at the counter, 15 at tables (Tabelog). A few minutes east of Kawaramachi-Nijo across the Kamogawa, about five minutes from Sanjo Keihan (2022 and 2024 reviews).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawabata-Nijo — Sanjo Keihan',
    cuisine: 'Couple-run izakaya of gentle Kyoto-style dishes and fruit liqueurs · seasonal dishes at modest prices (June 2026) · assorted sashimi, sweet-sea-bream karaage, hamo tempura, grilled hamo (August 2026) · an unusually wide fruit-liqueur list beside sake and shochu (April 2025, June 2026)',
    website: null, gmaps: gm('たるひの月 京都 川端二条'), menu_url: TB,
    notes: '[Izakaya · Kawabata-Nijo] A small, usually full izakaya near Kawabata-Nijo run by a couple: gently seasoned Kyoto dishes — sashimi, hamo in summer, sweet-sea-bream karaage — and an unusually long list of fruit liqueurs alongside sake. Book by phone; closed Wednesday. AMEX is the only card.',
    chef_bio: { chef_name: null, roles: ['Run by a couple (June 2026)'], origin: null,
      background: 'Per reviews: a Japanese izakaya near Kawabata-Nijo, opened during the pandemic and first known for lunch (2022 review), now dinner only (Tabelog).',
      philosophy: null, specialty: 'Kyoto-style seasonal dishes; fruit liqueurs.',
      anecdotes: [
        { text: 'A June 2026 diner who booked by phone found the restaurant nearly full and had never seen such a range of fruit liqueurs.', source: R + 'B531030026/' },
        { text: 'An August 2026 first-night visitor took the counter for sashimi, sweet-sea-bream karaage and hamo tempura with three kinds of sake.', source: R + 'B533590404/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、左京区難波町216、月火木金土日18:00〜22:30、水曜休み、カード (AMEX) 可、電子マネー不可、25席 (カウンター10・テーブル15)。口コミ (2025年4月〜2026年8月、英語): 夫婦で営む、京風のやさしい味、季節の料理、手頃な値段、刺身の盛り合わせ、甘鯛の唐揚げ、鱧の天ぷら、焼き鱧、果実酒が豊富、日本酒や焼酎も、いつもほぼ満席、電話で予約、京阪三条から徒歩約5分。',
      confidence: 'medium', sources: [TB, R + 'B506306562/', R + 'B531030026/', R + 'B533590404/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone; bring cash or AMEX. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区難波町216',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.013564, 135.773934); cross-checked: GSI 京都府京都市左京区難波町216番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533590404/'],
    price_note: 'No 2025–26 prices quoted; reviewers report ¥4,000–5,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi', '', 'Sashimi', 'ask', 'no', 'August 2026.', 'sashimi'),
      it('', '', 'Sweet sea bream karaage', '', 'Fried', 'no', 'no', 'August 2026.', 'amadai_karaage'),
      it('', '', 'Hamo tempura', '', 'Fried', 'no', 'no', 'August 2026.', 'hamo_tempura'),
      it('', '', 'Fruit liqueurs', '', 'Drinks', 'ask', 'ask', 'April 2025 and June 2026.', 'fruit_liqueur'),
    ] }, {
    cuisine: '夫婦で営む京風のやさしい料理と果実酒の居酒屋・手頃な季節の料理 (2026年6月)・刺身の盛り合わせ、甘鯛の唐揚げ、鱧の天ぷら、焼き鱧 (2026年8月)・日本酒や焼酎のほかに珍しいほど豊富な果実酒 (2025年4月、2026年6月)',
    neighborhood: '川端二条。京阪三条',
    gf_detail: 'グルテンフリーではない。天ぷら、唐揚げ、おでん、醤油で味付けした京料理 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、鱧、甘鯛、出汁 (2025〜2026年の口コミ)。',
    notes: '[居酒屋・川端二条] 川端二条近く、夫婦で営むいつもほぼ満席の小さな居酒屋。刺身、夏の鱧、甘鯛の唐揚げなどやさしい味の京料理と、日本酒と並ぶ豊富な果実酒。電話で予約、水曜休み。カードは AMEX のみ。',
  });
}

save();
