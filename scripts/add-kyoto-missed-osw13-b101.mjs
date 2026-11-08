// Kyoto priority (kyoto-missed), worker osw13, batch 101 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 曼荼羅茶, Caamm Bar, Lee°, お食事処 安さん.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-101');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26012826', 'chain: 志津屋 京阪三条店 — 志津屋 already ruled a chain (osw1-22, osw8-21, osw6-39: 21 shops in Kyoto)');
skip('26034270', 'large parent: アトールテラスカモガワ is a wedding venue run by 株式会社ブラス (atoll-terrasse.jp), which lists 27 guest-house wedding venues plus group restaurants and is listed on the TSE Standard and Nagoya Premier markets (brass.ne.jp/corporate/)');

// ================================================================ 曼荼羅茶
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034822/'; const R = TB + 'dtlrvwlst/';
  const H = day(['13:00', '18:00']);
  put({
    id: 'kyoto_mandaracha_tea', name: '曼荼羅茶 (MANDARACHA)', category: 'OMNI',
    lat: 34.997544, lng: 135.771376, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: a Japanese tea salon where the teas themselves (gyokuro, matcha, hojicha, nitrogen "bubble tea") are the focus; the sweets are vegan cakes, gelato, crème brûlée and mooncakes, and no reviewer says whether any are gluten-free (2023–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: reviewers describe vegan sweets — matcha crème brûlée, hojicha gelato, a yuzu roll cake "with no eggs or dairy" (2023–2025) — and vegan cooking seminars (January 2022). A June 2026 reviewer ordered a hojicha latte and a raw fruit cake without saying whether they were vegan.',
    hours_raw: 'Tabelog: Mon, Tue, Fri–Sun 13:00–18:00; closed Wednesday and Thursday; hours and closed days may change, so check before visiting. (An October 2025 reviewer lists 11:00–18:00 with irregular holidays.) Cards accepted. Non-smoking. Counter, sofas, tables and low chabudai seating (March 2024). Take-out; tea leaves and packaged souvenirs for sale (September 2026). About 5 min walk from Keihan Kiyomizu-Gojo.',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yamashiro-cho, Higashiyama, north of Gojo — 5 min walk from Kiyomizu-Gojo',
    cuisine: 'A Japanese tea salon run by a French owner, with teas from across Japan brewed at the table and vegan sweets (Tabelog; 2021–2026 reviews) · nitrogen-infused "bubble tea" poured from a tap into a wine glass ¥900; old-style gyokuro from Shiga ¥1,400; vegan yuzu roll cake ¥600 (October 2025) · vegan hojicha gelato ¥500 (March 2024) · gyokuro from Ayabe; vegan cake of the day (January 2024) · Ise tea as matcha (April 2025) · matcha from Wazuka (September 2026) · Japanese oolong; Chinese and Taiwanese teas; tea cocktails (2023–2025) · zunda mooncake (June 2026)',
    website: null, gmaps: gm('曼荼羅茶 京都 山城町'), menu_url: TB + 'dtlmenu/',
    notes: '[Japanese tea salon · Higashiyama near Kiyomizu-Gojo, a French-run tea room] A tea room packed with Japanese tea culture where a French owner and staff brew rare teas from all over Japan at your seat — gyokuro, Ise-tea matcha, a frothy nitrogen "bubble tea" in a wine glass — with vegan cakes and gelato. About ¥1,000–2,000. Closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: 'France (2023–2026 reviews; a July 2021 reviewer says Europe)',
      background: 'Reviewers since 2021 describe a French owner, fluent in Japanese and passionate about Japanese tea, who has worked in various businesses around the world (July 2021). The room holds a tea room, a stone garden, hanging scrolls and a shamisen (October 2025); a piano arrived by January 2022 for occasional koto and biwa performances and vegetarian and vegan seminars, and a November 2022 reviewer met a Friday koto concert with a flat live fee. Staff brew each tea with timers and set water temperatures. Criticism: the November 2022 reviewer was served an unordered dish with the live performance and was unsure of the etiquette.',
      philosophy: null,
      specialty: 'Rare Japanese teas brewed at the table; nitrogen "bubble tea"; vegan sweets.',
      anecdotes: [
        { text: 'October 2025: "Before visiting, I was a bit wary since the owner is French… However, I was pleasantly surprised to discover that it was a serious Japanese tea shop."', source: R + 'B515354824/' },
        { text: 'March 2024: "It may look like a beer tap, but it actually serves tea, pouring the bubble tea into a wine glass."', source: R + 'B488532910/' },
      ],
      japanese_sources_summary: '食べログ: 曼荼羅茶 (MANDARACHA)、カフェ、東山区山城町278-1、京阪清水五条駅から徒歩約5分、月・火・金〜日13:00〜18:00、水・木曜休み、営業時間・定休日は変更の可能性あり、カード可、禁煙、カウンター席、テイクアウト可。口コミ (2021年7月〜2026年9月、英語): フランス人の店主の日本茶カフェ (2021年の口コミではヨーロッパ出身)、日本各地の茶葉、窒素を含ませた「バブルティー」をワイングラスで900円、滋賀の古式玉露1,400円、ヴィーガンの柚子のロールケーキ600円 (2025年10月)、ヴィーガンのほうじ茶ジェラート500円 (2024年3月)、Ayabeの玉露、Iseのお茶の抹茶 (2025年4月)、Wazukaの抹茶 (2026年9月)、ずんだの月餅 (2026年6月)、茶室・石庭・掛け軸、琴や琵琶の演奏とヴィーガンのセミナー (2022年1月)、金曜の琴のライブ (2022年11月)、お土産の茶葉。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B444832308', 'B456406717', 'B462155582', 'B466786495', 'B477906611', 'B488532910', 'B515354824', 'B517809880', 'B529895201', 'B530833865', 'B531600205', 'B535997998'])) },
    cultural_comfort: { level: 'english_friendly', note: 'French owner fluent in Japanese; many overseas guests and foreign staff (2024–2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区山城町278-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated June and September 2026.' },
    pin_source: `Tabelog ${TB} (34.997544, 135.771376); GSI lot 京都府京都市東山区山城町278番地 about 32m away; nearest pin kyoto_yakisoba_oyaji 74m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531600205/', R + 'B488532910/'],
    price_note: 'Prices from October 2025 and March 2024 reviews.', last_checked: TODAY, items: [
      it('', '', 'Nitrogen-infused bubble tea (tea of the day, in a wine glass)', '¥900', 'Tea', 'ask', 'ask', 'March 2024; October 2025.', 'nitro_tea'),
      it('', '', 'Old-style gyokuro (Shiga)', '¥1,400', 'Tea', 'ask', 'ask', 'October 2025.', 'gyokuro'),
      it('', '', 'Yuzu roll cake (vegan)', '¥600', 'Sweets', 'ask', 'ask', 'October 2025.', 'yuzu_roll_cake'),
      it('', '', 'Hojicha gelato (vegan)', '¥500', 'Sweets', 'ask', 'ask', 'March 2024.', 'hojicha_gelato'),
    ] }, {
    cuisine: 'フランス人の店主による日本茶サロン。日本各地の茶を席で淹れ、ヴィーガンの菓子も (食べログ、2021〜2026年の口コミ)・窒素を含ませた「バブルティー」をサーバーからワイングラスに900円、滋賀の古式玉露1,400円、ヴィーガンの柚子のロールケーキ600円 (2025年10月)・ヴィーガンのほうじ茶ジェラート500円 (2024年3月)・Ayabeの玉露、日替わりのヴィーガンケーキ (2024年1月)・Iseのお茶の抹茶 (2025年4月)・Wazukaの抹茶 (2026年9月)・日本の烏龍茶、中国茶・台湾茶、お茶のカクテル (2023〜2025年)・ずんだの月餅 (2026年6月)',
    neighborhood: '五条の北、東山区山城町。清水五条から徒歩5分',
    gf_detail: '要確認: 主役は玉露、抹茶、ほうじ茶、窒素の「バブルティー」などのお茶。菓子はヴィーガンのケーキ、ジェラート、クレームブリュレ、月餅で、グルテンフリーかどうかの記載はない (2023〜2026年の口コミ)。',
    vegan_detail: '要確認: 抹茶のクレームブリュレ、ほうじ茶ジェラート、「卵・乳製品不使用」の柚子のロールケーキなどヴィーガンの菓子 (2023〜2025年)、ヴィーガン料理のセミナー (2022年1月)。2026年6月のほうじ茶ラテとフルーツケーキはヴィーガンかどうか記載なし。',
    notes: '[日本茶サロン・清水五条近くの東山、フランス人の茶房] フランス人の店主とスタッフが日本各地の珍しい茶を席で淹れる茶房。玉露、Iseのお茶の抹茶、ワイングラスで出す泡の「バブルティー」に、ヴィーガンのケーキやジェラート。1,000〜2,000円ほど。水・木曜休み。',
  });
}

// ================================================================ Caamm Bar
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002614/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_caamm_bar', name: 'Caamm Bar', category: 'OMNI',
    lat: 35.00968, lng: 135.770696, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a place to eat: the food reviewers mention is omurice with demi-glace sauce (October 2025). The bar is mainly whisky and cocktails — ask about drinks.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the food reviewers mention is omurice with egg, butter and demi-glace (October 2025). Drinks only otherwise — ask.',
    hours_raw: 'Tabelog gives no hours — check before visiting. Reservations taken. No cover charge — Tabelog, Japanese original 「チャージ料なし」. Groups are limited to 2 at the counter and 4 at a table (Tabelog). Smoking allowed. Private room at the back; counter, sofa and tatami seating. Cards and PayPay. English menu; a sommelier on staff. 2nd floor of the ユリカビル, east side of Kiyamachi just north of Sanjo; 5 min walk from Keihan Sanjo. Opened 6 December 2000.',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi just north of Sanjo — 5 min walk from Sanjo (Keihan)',
    cuisine: 'A whisky bar lined to the back of the counter with bottles — over 1,000 aged whiskies by a 2020 count — with a strong Scotch focus, cocktails and highballs, open since 2000 (Tabelog; 2017–2026 reviews) · Kavalan and Amrut world whiskies (September 2020) · Kilchoman 13-year-old from Islay (October 2025) · highballs of 1980s Glenfiddich and Japanese malts (January 2026) · salty dog, piña colada, Toki on the rocks, ¥3,540 for three (August 2019) · original cocktails (October 2023) · omurice with demi-glace (October 2025)',
    website: 'http://caamm.dreamlog.jp/', gmaps: gm('Caamm Bar 京都 木屋町'), menu_url: TB + 'dtlmenu/',
    notes: '[Whisky bar · Kiyamachi north of Sanjo, a one-man bottle wall] A second-floor Kiyamachi bar since 2000 with over a thousand whiskies, Scotch above all, poured by a senior-sommelier owner who works alone and picks bottles to your taste; good highballs and a buttery omurice. No cover charge. Smoking allowed. Hours not listed.',
    chef_bio: { chef_name: null, roles: ['Owner-bartender (unnamed)', 'Senior sommelier'], origin: null,
      background: 'Opened 6 December 2000 (Tabelog). A September 2020 reviewer describes the master as a senior sommelier with over 1,000 bottles of aged whisky, popular with local whisky lovers; an October 2023 reviewer says he runs the place solo. In 2025 reviewers found many overseas guests and a strong Scotch focus. Criticism: none of substance; a January 2026 reviewer notes rare bottles can be very expensive (a 29-year-old Arran at ¥140,000).',
      philosophy: null,
      specialty: 'Scotch and world whisky chosen to the guest\'s taste; highballs.',
      anecdotes: [
        { text: 'September 2020: "This place boasts an incredible collection of over 1,000 bottles of aged whiskey and a wonderful master who provides great knowledge and guidance."', source: R + 'B430717171/' },
        { text: 'October 2023: "The owner is an incredibly nice guy, even though he runs the place solo. Also, the selection of whiskey is impressive and affordable."', source: R + 'B473706899/' },
      ],
      japanese_sources_summary: '食べログ: Caamm Bar、バー、中京区木屋町通り三条上る東側 ユリカビル2階、京阪三条駅から徒歩5分、営業時間の記載なし、予約可、原文で「チャージ料なし」、カウンターは2名・テーブルは4名まで、喫煙可、個室あり、カード・PayPay可、英語メニュー、ソムリエあり、2000年12月6日オープン。口コミ (2017年4月〜2026年1月、英語): 1,000本以上の熟成ウイスキー (2020年9月)、シニアソムリエのマスター、一人で営む店主 (2023年10月)、スコッチ中心、カバラン、アムルット、キルホーマン13年、1980年代のグレンフィディック、ハイボール、オリジナルカクテル、デミグラスのオムライス (2025年10月)、海外の客が多い (2025年2月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B260993669', 'B418573033', 'B430717171', 'B473706899', 'B474420779', 'B501415489', 'B501455628', 'B515396011', 'B516299672', 'B521650778'])) },
    cultural_comfort: { level: 'some_english', note: 'English menu (Tabelog); many overseas guests (2025). Smoking allowed; groups of 2 at the counter, 4 at tables.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町通り三条上る東側 ユリカビル２階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated October 2025, January 2026 and August 2026.' },
    pin_source: `Tabelog ${TB} (35.009626, 135.770696) sits 1.9m from kyoto_rung_arun_thai and 4.9m from kyr_chuka_soba_rantan, so moved about 6m north to (35.00968, 135.770696), at least 7.4m from every pin; GSI cannot resolve the street-style address (木屋町通り三条上る東側, no town) — marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B418573033/', R + 'B515396011/'],
    price_note: 'A three-drink bill from August 2019; no current price list.', last_checked: TODAY, items: [
      it('', '', 'Whisky by the glass (1,000+ bottles, Scotch focus)', null, 'Drink', 'ask', 'ask', '2020–2026.', 'whisky'),
      it('', '', 'Highball', null, 'Drink', 'ask', 'ask', 'October 2025; January 2026.', 'highball'),
      it('', '', 'Omurice with demi-glace', null, 'Food', 'no', 'no', 'October 2025.', 'omurice'),
    ] }, {
    cuisine: 'カウンターの奥までボトルが並ぶウイスキーバー。2020年の口コミで1,000本以上の熟成ウイスキー、スコッチ中心、カクテルとハイボール、2000年から (食べログ、2017〜2026年の口コミ)・カバラン、アムルット (2020年9月)・アイラのキルホーマン13年 (2025年10月)・1980年代のグレンフィディックや国産モルトのハイボール (2026年1月)・ソルティドッグ、ピニャコラーダ、トキのロック、3杯で3,540円 (2019年8月)・オリジナルカクテル (2023年10月)・デミグラスのオムライス (2025年10月)',
    neighborhood: '三条のすぐ北の木屋町。京阪三条から徒歩5分',
    gf_detail: '食事はグルテンフリーではない: 口コミに出る料理はデミグラスソースのオムライス (2025年10月)。主にウイスキーとカクテルのバー、飲み物は要確認。',
    vegan_detail: 'ヴィーガン不可: 口コミに出る料理は卵・バター・デミグラスのオムライス (2025年10月)。ほかは飲み物のみ、要確認。',
    notes: '[ウイスキーバー・三条上ルの木屋町、一人で営むボトルの壁] 2000年からの木屋町の2階のバー。スコッチを中心に1,000本を超えるウイスキーを、シニアソムリエの店主が一人で好みに合わせて選ぶ。ハイボールやバターの香るオムライスも。チャージなし。喫煙可。営業時間の記載なし。',
  });
}

// ================================================================ Lee°
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041428/'; const R = TB + 'dtlrvwlst/';
  const D = ['17:30', '22:30']; const H1 = day(D); const H2 = day(['11:30', '14:30'], D);
  put({
    id: 'kyoto_lee_gion', name: 'Lee°', category: 'OMNI',
    lat: 35.004837, lng: 135.776594, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: courses include two pastas, a shrimp-paste sandwich and fried conger eel (July and September 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses built on A5 Wagyu teppanyaki, abalone, tripe and fish the chef catches himself (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Wed 17:30–22:30 (food L.O. 20:30, drinks 22:15); Thu, Fri, Sat and holidays 11:30–14:30 (food L.O. 12:00) and 17:30–22:30; closed Sunday and one irregular day a month; if a holiday falls on Monday it opens Sunday and closes Tuesday instead. Reservations taken. Service charge 10% — Tabelog, Japanese original 「サービス料 10％」. 7 counter seats. Non-smoking. Cards. Children admitted if they order a course. Sommelier on staff. Opened 6 June 2024. Behind an industrial-looking door (January 2026 review).',
    hours: { 0: H1, 1: H1, 2: H1, 3: H2, 4: H2, 5: H2 }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion-machi Kitagawa east of Hanamikoji — 6 min walk from Gion-Shijo',
    cuisine: 'A seven-seat counter pairing Italian cooking with teppanyaki A5 Wagyu, opened June 2024 (Tabelog; 2025–2026 reviews) · course ¥18,150: Italian × teppan steak, 10 dishes with A5 Wagyu sushi and fillet or strip loin (April 2026) · shrimp-paste sandwich; corn soup; pastas of shirasu and karasumi, and of tomato, basil and edamame (July 2026) · fried conger eel (September 2026) · white asparagus, abalone, tripe, Wagyu fillet, grilled shabu-shabu (April 2025) · A5 Chateaubriand (May 2025) · lunch with pumpkin soup, pasta and dessert (January 2026) · organic wines, pairings by glass around ¥1,000',
    website: 'https://gion-lee.com/', gmaps: gm('Lee° 祇園 エンゼルビル'), menu_url: TB + 'dtlmenu/',
    notes: '[Italian × Wagyu teppanyaki · Gion north side, a 7-seat counter] A tiny Gion counter where the chef cooks Italian courses and A5 Wagyu on the teppan in front of you — pastas, fish he catches himself, Chateaubriand — and explains every ingredient, with organic wines. Dinner course about ¥18,000 plus 10% service; lunch Thursday to Saturday. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Chef-owner (unnamed)'], origin: null,
      background: 'An April 2026 reviewer writes that the chef trained at renowned restaurants in Italy and in Gion. Reviewers describe him explaining each ingredient and its source, visiting local farmers (January 2026), cooking with organic vegetables and fish he catches himself (July 2026), and choosing wines for each course. Opened 6 June 2024 (Tabelog). Criticism: a June 2025 reviewer found it expensive, with drinks costing more than the course.',
      philosophy: 'Ingredients chosen by visiting the producers (January 2026 review).',
      specialty: 'Italian courses with A5 Wagyu teppanyaki; pasta.',
      anecdotes: [
        { text: 'July 2026: "I was amazed by the organic vegetables, the fish caught by the chef himself, and the meat that was expertly prepared from scratch."', source: R + 'B531358654/' },
        { text: 'April 2026: "The chef trained at renowned establishments in Italy and Gion, so the culinary skills were impeccable."', source: R + 'B525696373/' },
      ],
      japanese_sources_summary: '食べログ: Lee°、イタリアン・ステーキ・鉄板焼き、東山区祇園町北側347-142 エンゼルビル1F、京阪祇園四条駅から徒歩約6分、月〜水17:30〜22:30 (料理L.O.20:30、ドリンクL.O.22:15)、木・金・土・祝11:30〜14:30・17:30〜22:30、日曜休み、月1回不定休、月曜が祝日なら日曜営業・火曜休み、予約可、原文で「サービス料 10％」、7席、禁煙、カード可、子どもはコース注文なら可、ソムリエあり、2024年6月6日オープン。口コミ (2025年3月〜2026年9月、英語): イタリアン×鉄板焼きのコース18,150円 (A5和牛の寿司、ヒレまたはサーロイン、全10品、2026年4月)、イタリアと祇園の名店で修業した料理人、自ら釣った魚、有機野菜、海老のペーストのサンド、しらすとからすみのパスタ、穴子のフリット、シャトーブリアン、オーガニックワイン、ランチはかぼちゃのスープとパスタ、飲み物が高いとの声 (2025年6月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B502387286', 'B504506189', 'B506772086', 'B509292231', 'B509417736', 'B512219680', 'B517403289', 'B521890252', 'B525696373', 'B531358654', 'B534476384', 'B535428313'])) },
    cultural_comfort: { level: 'japanese', note: 'Counter only; 10% service; the chef explains each dish.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-142 エンゼルビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated July, August and September 2026.' },
    pin_source: `Tabelog ${TB} (35.004837, 135.776594); GSI lot 京都府京都市東山区祇園町北側347番地 about 83m away; nearest pin kyoto_kyokushikatsu_todoroki 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525696373/'],
    price_note: 'Course price from an April 2026 review; 10% service.', last_checked: TODAY, items: [
      it('', '', 'Italian × teppan steak course (10 dishes, A5 Wagyu)', '¥18,150', 'Course', 'no', 'no', 'April 2026.', 'dinner_course'),
      it('', '', 'Lunch course (soup, pasta, dessert)', null, 'Course', 'no', 'no', 'January 2026.', 'lunch_course'),
    ] }, {
    cuisine: 'イタリアンと鉄板焼きのA5和牛を合わせる7席のカウンター、2024年6月オープン (食べログ、2025〜2026年の口コミ)・コース18,150円: イタリアン×鉄板ステーキ、A5和牛の寿司とヒレまたはサーロインを含む全10品 (2026年4月)・海老のペーストのサンド、コーンスープ、しらすとからすみのパスタ、トマトとバジルと枝豆のパスタ (2026年7月)・穴子のフリット (2026年9月)・ホワイトアスパラ、あわび、もつ、和牛ヒレ、焼きしゃぶ (2025年4月)・A5のシャトーブリアン (2025年5月)・ランチはかぼちゃのスープ、パスタ、デザート (2026年1月)・オーガニックワイン、グラスは1,000円前後',
    neighborhood: '花見小路の東、祇園町北側。祇園四条から徒歩6分',
    gf_detail: 'グルテンフリーではない: コースに2種のパスタ、海老のペーストのサンド、穴子のフリット (2026年7月・9月の口コミ)。',
    vegan_detail: 'ヴィーガン不可: A5和牛の鉄板焼き、あわび、もつ、料理人が自ら釣った魚のコース (2025〜2026年の口コミ)。',
    notes: '[イタリアン×和牛鉄板焼き・祇園町北側、7席のカウンター] 祇園の小さなカウンターで、料理人が目の前でイタリアンのコースとA5和牛の鉄板焼きを仕上げる。パスタ、自ら釣った魚、シャトーブリアン、食材ひとつひとつの説明、オーガニックワイン。夜のコースは18,000円ほどにサービス料10%。ランチは木〜土。日曜休み。',
  });
}

// ================================================================ お食事処 安さん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26003994/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'kyoto_oshokujidokoro_yassan', name: 'お食事処 安さん (Oshokuji Dokoro Yassan)', category: 'OMNI',
    lat: 35.007944, lng: 135.77459, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the horumon hot pot simmers in a sweet-spicy sauce "similar to yakiniku sauce" (April 2026), finished with Chinese noodles, udon or zosui; tempura, fried tripe, ebi fry and yakisoba on the menu (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a horumon (offal) hot-pot izakaya; the tofu and vegetables go into the same pot (2023–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 16:00–23:00 (L.O. 22:30); closed Wednesday. Reservations taken. Seat charge ¥200 per person — Tabelog, Japanese original 「席料200円/人」. No credit cards (Tabelog). 30 seats; each place has its own burner (May 2026). Smoking allowed. All-you-can-drink sets of three hours or more. Japanese-style toilet (April 2026). A red lantern on 大和大路 just south of Sanjo, 3 min walk from Keihan Sanjo.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Yamato-oji south of Sanjo — 3 min walk from Sanjo (Keihan)',
    cuisine: 'A long-established Showa-style izakaya known for horumon teppan-yaki hot pot — offal simmered with heaps of onion and green onion in a sweet-spicy sauce, cooked on your own burner (Tabelog; 2023–2026 reviews) · horumon mix, kalbi, pork belly, hosho; add vegetables, tofu or seafood; finish with zosui, Chinese noodles or udon, or a whole block of tofu (2024–2026) · fried tripe; vinegared offal; sesame mackerel; kimchi (January 2026) · katsuo tataki, conger-eel and lotus-root tempura (March 2024) · ebi fry (April 2026) · yakisoba (May 2025) · fixed-price small dishes (October 2023)',
    website: 'http://sanjoyassan.com', gmaps: gm('お食事処 安さん 三条'), menu_url: TB + 'dtlmenu/',
    notes: '[Horumon hot-pot izakaya · Sanjo east of the Kamo, a red-lantern local] An old red-lantern izakaya near Keihan Sanjo where each diner tends a pan of offal smothered in onions and a sweet yakiniku-style sauce, finished with zosui or noodles, plus cheap fried and sashimi dishes. Generous and inexpensive — about ¥2,000–4,000. ¥200 seat charge; no cards; smoking allowed. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Reviewers describe a long-established local izakaya with a nostalgic Showa feel, a shaven-headed chef who cooks everything and a young woman serving drinks (May 2025), and a quiet chef who checks on first-timers\' pots (May 2026). Criticism: smoking is allowed (March 2024), and one reviewer found the highball weak (May 2025).',
      philosophy: null,
      specialty: 'Horumon teppan-yaki hot pot with onions; zosui to finish.',
      anecdotes: [
        { text: 'April 2026: "The plump horumon is simmered with plenty of onions and green onions. I\'ve never seen this style anywhere else. It stands apart from the typical Kyushu motsunabe."', source: R + 'B527624380/' },
        { text: 'May 2026: "At first, I wasn\'t sure how long to cook it, but the initially quiet chef came to check on me, which was kind of him."', source: R + 'B535111879/' },
      ],
      japanese_sources_summary: '食べログ: お食事処 安さん、居酒屋・ホルモン・鍋、東山区大和大路通三条下ル若松町400-56、三条駅から徒歩3分、月・火・木〜日16:00〜23:00 (L.O.22:30)、水曜休み、予約可、原文で「席料200円/人」、カード不可、30席、喫煙可、3時間以上の飲み放題あり、公式サイト sanjoyassan.com。口コミ (2023年3月〜2026年7月、英語): 名物のホルモン鉄板焼き鍋 (たっぷりの玉ねぎとねぎ、焼肉のたれのような甘辛い味)、ミックス・カルビ・豚バラ・ホショ、野菜・豆腐・海鮮の追加、締めは雑炊・中華そば・うどん・豆腐、もつの揚げ物、もつの酢の物、さばのごま和え、キムチ、かつおのたたき、天ぷら、エビフライ、焼きそば、昭和の雰囲気の老舗、坊主頭の料理人と若い女性スタッフ、一人ずつのコンロ、喫煙可の店との声 (2024年3月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B472783761', 'B475379715', 'B482235767', 'B498759024', 'B505261977', 'B507300954', 'B519869961', 'B520890507', 'B520975536', 'B527624380', 'B532457243', 'B535111879'])) },
    cultural_comfort: { level: 'japanese', note: 'Local Showa-style izakaya; staff explain the hot pot; smoking allowed; ¥200 seat charge; no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通三条下ル若松町400-56',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated April, May and July 2026.' },
    pin_source: `Tabelog ${TB} (35.007944, 135.77459); GSI lot 京都府京都市東山区若松町400番地 about 51m away; nearest pin kyoto_art_mon_zen_the_terrace 113m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520890507/', R + 'B527624380/'],
    price_note: 'No item prices in reviews; Tabelog average ¥3,000–3,999; ¥200 seat charge.', last_checked: TODAY, items: [
      it('', '', 'Horumon teppan-yaki hot pot (mix, kalbi, pork belly, hosho)', null, 'Hot pot', 'no', 'no', '2024–2026.', 'horumon_nabe'),
      it('', '', 'Zosui (finish)', null, 'Rice', 'no', 'no', '2024–2026.', 'zosui'),
      it('', '', 'Fried tripe', null, 'Fried', 'no', 'no', 'December 2025; January 2026.', 'fried_tripe'),
      it('', '', 'Ebi fry', null, 'Fried', 'no', 'no', 'April 2026.', 'ebi_fry'),
    ] }, {
    cuisine: 'ホルモン鉄板焼き鍋が名物の昭和の雰囲気の老舗居酒屋。たっぷりの玉ねぎとねぎのホルモンを甘辛いたれで、自分のコンロで煮る (食べログ、2023〜2026年の口コミ)・ホルモンミックス、カルビ、豚バラ、ホショ、野菜・豆腐・海鮮の追加、締めは雑炊、中華そば、うどん、豆腐まるごと (2024〜2026年)・もつの揚げ物、もつの酢の物、さばのごま和え、キムチ (2026年1月)・かつおのたたき、穴子とれんこんの天ぷら (2024年3月)・エビフライ (2026年4月)・焼きそば (2025年5月)・均一価格の小皿 (2023年10月)',
    neighborhood: '三条の南、大和大路。京阪三条から徒歩3分',
    gf_detail: 'グルテンフリーではない: ホルモン鍋は「焼肉のたれのような」甘辛いたれ (2026年4月)、締めは中華そば・うどん・雑炊。天ぷら、もつの揚げ物、エビフライ、焼きそばも (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: ホルモン鍋の居酒屋。豆腐や野菜も同じ鍋に入る (2023〜2026年の口コミ)。',
    notes: '[ホルモン鍋の居酒屋・鴨川の東の三条、赤提灯の老舗] 京阪三条近くの赤提灯の老舗。一人ずつのコンロで玉ねぎたっぷりのホルモンを焼肉のたれ風の甘辛味で煮て、締めは雑炊や麺。揚げ物や刺身も安い。量が多く2,000〜4,000円ほど。席料200円、カード不可、喫煙可。水曜休み。',
  });
}

save();
