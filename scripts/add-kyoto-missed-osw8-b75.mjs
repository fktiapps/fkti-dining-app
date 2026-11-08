// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 75.
//   + GION GOZU 四条店 (pudding and éclair shop, Gion Shijo, open till 22:00; rest)
//   + d食堂 京都 D&DEPARTMENT KYOTO (cafeteria in the grounds of Bukkoji temple; rest)
//   + 祗園なか花 Gion Nakahana (fugu and seasonal courses, couple-run, Gion south side; rest)
//   + おばタリアン Obatarian (obanzai and Italian until 5 a.m., Gion north side; rest)
//   Rest list (mod 6 = 1) after batch 74, nearest-first — skipped:
//   - 大衆寿司酒場すさび湯 河原町三条店 26043883: chain (same call as 26039042).
//   - アンドレイ 26021641: no review dated 2025–26 (latest March 2024).
//   - 萬 燕楽 26001373: brand already in data — its site (zuzu.jp) is the 燕楽 group's official site, and 夷川 燕楽 is in data
//     (kyoto_ebisugawa_enraku); flagged for the coordinator in case the two are separate concepts.
//   - はらから 26039605: thin listing, 5 reviews.
//   - Japanese Whisky Malt House 26044603: thin listing, 0 reviews.
//   Brand check: queue-status.jsonl grepped for GOZU, d食堂 / D&DEPARTMENT, なか花, おばタリアン — no entries. GION GOZU has one
//   other shop (本店); unrelated to 祇園ごずこん in data (a gyoza shop, gozukon.net). A Tabelog search for d食堂 shows only this one
//   and d47 食堂 — drafted, flagged. None of the four is in data/kyoto.json (main ebb9fceb, hidden records included).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-75');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26043883/', 'chain: 大衆寿司酒場すさび湯 — same call as 26039042');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26021641/', 'no review dated 2025–26: the newest Tabelog review is from March 2024');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26001373/', 'brand already in data: 萬 燕楽 links to zuzu.jp, the 燕楽 group\'s official site; 夷川 燕楽 is in data as kyoto_ebisugawa_enraku — flagged for the coordinator');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26039605/', 'thin listing: 5 reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26044603/', 'thin listing: 0 reviews');

// ================================================================ GION GOZU 四条店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036359/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_gion_gozu_shijo', name: 'GION GOZU 四条店', category: 'OMNI',
    lat: 35.00367308787561, lng: 135.77627606033747, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Puddings (custard and caramel) may be wheat-free, but éclairs and cakes are not; no gluten information (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg-and-milk puddings, cream éclairs, soft serve (2023–2026 reviews).',
    hours_raw: 'Monday–Friday 13:00–22:00; Saturday and Sunday 11:00–22:00; hours may change (Tabelog). Late in the evening it may be take-away only (June 2025). Reservations accepted (Tabelog). Cards, e-money and QR (Tabelog). Popular flavours sell out by evening (April 2023; February 2026). 1F of APA Hotel Kyoto Gion Excellent, by the Shijo end of Gion (Tabelog; May 2025).',
    hours: { 0: day(['13:00', '22:00']), 1: day(['13:00', '22:00']), 2: day(['13:00', '22:00']), 3: day(['13:00', '22:00']), 4: day(['13:00', '22:00']), 5: day(['11:00', '22:00']), 6: day(['11:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Shijo end',
    cuisine: 'Western-style sweets shop of puddings and éclairs (Tabelog; 2023–2026 reviews) · soft puddings with a slightly bitter caramel: plain, chocolate, matcha, hojicha, black sesame, Earl Grey, seasonal sakura with jelly (2023–2026 reviews) · éclairs such as mango and cream, chocolate cake, matcha soft serve (2023–2025 reviews) · under ¥1,000 (Tabelog)',
    website: null, gmaps: gm('GION GOZU 四条店'), menu_url: null,
    notes: '[Pudding shop · Gion, open late] A small Gion sweets shop on the ground floor of a hotel, open until 10 p.m., known for very soft puddings with a bitter caramel — plain, matcha, hojicha, black sesame, Earl Grey, sakura in spring — plus éclairs and matcha soft serve. Eat in or take away; flavours sell out at night.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog: GION GOZU is a Western-style confectionery shop; this is its Shijo shop, with a main shop listed separately. Reviewers since 2023 describe a pudding and éclair specialist open late in Gion.',
      philosophy: null, specialty: 'Pudding with bitter caramel.',
      anecdotes: [
        { text: 'A March 2024 visitor, back for more after a black-sesame pudding, ate the spring sakura pudding in the shop — custard below, pink sakura jelly on top.', source: R + 'B481811359/' },
        { text: 'A June 2025 guest arriving around 21:00 found eat-in had finished and took away a matcha pudding instead.', source: R + 'B508759202/' },
        { text: 'A May 2025 traveller staying at the hotel next door came down at night for a matcha soft serve.', source: R + 'B521824493/' },
      ],
      japanese_sources_summary: '食べログ: スイーツ (洋菓子)、東山区祇園町南側555 アパホテル京都祇園excellent 1F、月〜金 13:00〜22:00、土・日 11:00〜22:00、予約可、カード・電子マネー・QR 可、洋菓子店。口コミ (2023年4月〜2026年2月、英語): プリンとエクレアの専門店、やわらかいプリンと少し苦いカラメル (プレーン、チョコ、抹茶、ほうじ茶、黒ごま、アールグレイ、季節の桜とゼリー)、マンゴーとクリームのエクレア、チョコケーキ、抹茶ソフト、夜は売り切れる味も、21時ごろは店内飲食不可で持ち帰りのみだった (2025年6月)、隣のホテルに泊まった客 (2025年5月)。',
      confidence: 'medium', sources: [TB, R + 'B463187667/', R + 'B481811359/', R + 'B482864333/', R + 'B490333958/', R + 'B492612619/', R + 'B508528195/', R + 'B508759202/', R + 'B518354363/', R + 'B521824493/', R + 'B522031591/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter sweets shop; eat in or take away; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側555 アパホテル京都祇園excellent 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through February 2026.' },
    pin_source: `Tabelog ${TB} (35.003673, 135.776276); cross-checked: GSI 京都府京都市東山区祇園町南側555番地 (lot) 50 m; nearest existing record 9.1 m (kyoto_gion_ishi_soba); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Pudding (plain or seasonal flavour)', '', 'Puddings', 'ask', 'no', '2023–2026 reviews.', 'pudding'),
      it('', '', 'Éclair', '', 'Pastries', 'no', 'no', '2023 reviews.', 'eclair'),
    ] }, {
    cuisine: 'プリンとエクレアの洋菓子店 (食べログ、2023〜2026年の口コミ)・やわらかいプリンと少し苦いカラメル: プレーン、チョコ、抹茶、ほうじ茶、黒ごま、アールグレイ、季節の桜とゼリー (2023〜2026年の口コミ)・マンゴーとクリームなどのエクレア、チョコケーキ、抹茶ソフト (2023〜2025年の口コミ)・1,000円未満 (食べログ)',
    neighborhood: '祇園、四条の端',
    gf_detail: '要確認。プリン (カスタードとカラメル) は小麦なしの可能性があるが、エクレアとケーキは不可。グルテンの情報はない (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。卵と牛乳のプリン、クリームのエクレア、ソフトクリーム (2023〜2026年の口コミ)。',
    notes: '[プリンの店・祇園、夜まで] ホテルの1階にある祇園の小さな洋菓子店で夜10時まで。苦めのカラメルのとてもやわらかいプリン (プレーン、抹茶、ほうじ茶、黒ごま、アールグレイ、春は桜) にエクレアや抹茶ソフト。店内でも持ち帰りでも、夜は売り切れる味も。',
  });
}

// d食堂 京都: drafted by the worker; converted to a skip by the integrator (Tokyo multi-venue operator, as OGATA and ITOH DINING).
skip('26043031', 'large parent: d食堂 京都 is run by D&DEPARTMENT (d-department.com), a Tokyo-based design-store company with shops across Japan and a second d食堂 (d47 食堂) in Tokyo; treated like OGATA at THE SHINMONZEN and ITOH DINING (non-local multi-venue group)');

// ================================================================ 祗園なか花 Gion Nakahana
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26026123/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.gion-nakahana.com/';
  const H = day(['12:00', '14:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_gion_nakahana', name: '祗園なか花 (Gion Nakahana)', category: 'OMNI',
    lat: 35.00274863707086, lng: 135.7763548791663, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: fried fugu (karaage) is part of the standard course, with ponzu and soy throughout (2023–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fugu, hamo and wagyu courses (2022–2026 reviews).',
    hours_raw: 'Daily 12:00–14:30 (last order 14:00) and 17:30–22:00 (last order 21:30); lunch by phone reservation only; closing days irregular; closed 30 December–1 January (Tabelog). Service charge 10% (Tabelog original サービス料10%). Cards (VISA, Master, JCB, AMEX, Diners), e-money (IC, iD, QUICPay) and QR (PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay) (Tabelog). 30 seats; private rooms for 2 to 20 (Tabelog; February 2022). Smoking allowed (Tabelog). Gion south side, a little off the main streets; 10 min walk from Gion-Shijo Stn (Tabelog; February 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion south side',
    cuisine: 'Fugu specialist in winter and seasonal Kyoto courses the rest of the year, run by a couple (2022–2026 reviews) · fugu course of about ¥11,500: five appetisers, fugu skin, tessa sashimi, grilled and fried fugu, tecchiri hot pot finished as zosui; extras such as grilled milt ¥2,500 and hirezake (November 2023–January 2026) · fugu-and-wagyu course with steak; autumn hamo course with fresh yuba, hamo sashimi, grilled hamo, matsutake dobin-mushi (February 2025; October 2026) · about ¥10,000–20,000 (Tabelog; 2023–2026 reviews)',
    website: WEB, gmaps: gm('祇園なか花'), menu_url: WEB,
    notes: '[Fugu and Kyoto courses · Gion south side] A friendly, couple-run Gion restaurant with private rooms, best known for fair-priced fugu courses — sashimi, grilled and fried fugu, hot pot ending in zosui — and seasonal hamo and matsutake later in the year. Lunch by phone booking only. 10% service; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)', 'Proprietress (wife)'], origin: null,
      background: 'Per reviewers: a Gion restaurant run by a kind couple (February 2025), known for fugu. A March 2024 reviewer, introduced by an old friend of the head chef, learned that the chef\'s wife is the daughter of the owner of Monk\'s, a place the reviewer used to frequent.',
      philosophy: null, specialty: 'Fugu course; hamo in season.',
      anecdotes: [
        { text: 'A March 2024 guest discovered the head chef is married to the daughter of the owner of Monk’s, a place the guest once frequented.', source: R + 'B481414073/' },
        { text: 'A February 2025 diner on the fugu-and-meat course watched the hot pot taken to the kitchen and brought back as zosui with extra fugu.', source: R + 'B501989515/' },
        { text: 'A January 2026 family New Year party added grilled soft roe to the tecchiri course.', source: R + 'B520177103/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、東山区祇園町南側570-190、京阪祇園四条駅から徒歩10分、祇園バス停から徒歩5分、毎日 12:00〜14:30 (L.O.14:00)、17:30〜22:00 (L.O.21:30)、昼は電話予約のみ、不定休、12月30日〜1月1日休み、サービス料10%、カード・電子マネー (交通系IC・iD・QUICPay)・QR (PayPay・d払い・楽天ペイ・au PAY・Alipay・WeChat Pay) 可、30席、個室 (2〜20名)、喫煙可、公式サイトあり。口コミ (2022年2月〜2026年10月、英語): ふぐのコース約11,500円 (前菜5種、てっぴ、てっさ、焼きふぐ、唐揚げ、てっちり、雑炊)、焼き白子2,500円、ひれ酒、ふぐと和牛のコース、秋の鱧のコース (生湯葉、鱧の造り、焼き鱧、松茸の土瓶蒸し)、夫婦で営む (2025年2月)、料理長の妻は Monk\'s の店主の娘 (2024年3月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B446263598/', R + 'B475060882/', R + 'B480678989/', R + 'B481414073/', R + 'B481727739/', R + 'B501989515/', R + 'B520177103/', R + 'B537825130/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; lunch by phone booking; 10% service; smoking allowed; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-190',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002749, 135.776355); GSI resolves 祇園町南側570-190 only to the 570 block point (233 m), so the Tabelog pin is kept; nearest existing record 12.6 m (kyoto_gion_kitagawa_hanbee, 570-188); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B475060882/'],
    price_note: 'Prices from a November 2023 review.', last_checked: TODAY, items: [
      it('', '', 'Fugu course (grilled fugu and hot pot)', '¥11,500', 'Courses', 'no', 'no', 'November 2023; about.', 'fugu'),
      it('', '', 'Grilled fugu milt', '¥2,500', 'Extras', 'ask', 'no', 'November 2023.', 'shirako'),
    ] }, {
    cuisine: '冬はふぐ、ほかの季節は京料理のコース、夫婦で営む (2022〜2026年の口コミ)・約11,500円のふぐのコース: 前菜5種、てっぴ、てっさ、焼きふぐ、唐揚げ、てっちり、締めの雑炊、焼き白子2,500円やひれ酒も (2023年11月〜2026年1月)・ステーキ付きのふぐと和牛のコース、秋の鱧のコース (生湯葉、鱧の造り、焼き鱧、松茸の土瓶蒸し) (2025年2月、2026年10月)・10,000〜20,000円ほど (食べログ、2023〜2026年の口コミ)',
    neighborhood: '祇園南側',
    gf_detail: 'グルテンフリー不可。定番のコースにふぐの唐揚げ、ポン酢や醤油を使う (2023〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ふぐ、鱧、和牛のコース (2022〜2026年の口コミ)。',
    notes: '[ふぐと京料理・祇園南側] 個室もある夫婦で営む気さくな祇園の店。手ごろなふぐのコース (刺身、焼きふぐ、唐揚げ、雑炊で締める鍋) で知られ、季節が進むと鱧や松茸も。昼は電話予約のみ。サービス料10%、喫煙可。',
  });
}

// ================================================================ おばタリアン Obatarian
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26028097/'; const R = TB + 'dtlrvwlst/';
  const H = day(['19:00', '29:00']);
  put({
    id: 'kyoto_obatarian_gion', name: 'おばタリアン (Obatarian)', category: 'OMNI',
    lat: 35.00462383787506, lng: 135.77640978034697, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: pasta, pizza, gratin and fried chicken (2020–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: obanzai with dashi, oysters, hamburg steak, bacon (2020–2026 reviews).',
    hours_raw: 'Monday–Saturday 19:00–5:00 (last order 4:00); closed Sunday and holidays (Tabelog). Reservations accepted up to two days ahead; private bookings for 5–10 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Ten counter seats; a private room for 5–10 (Tabelog). Smoking allowed (Tabelog). At the back of the Yuuki building on the north side of Gion, easy to miss; 6 min walk from Gion-Shijo Stn (Tabelog; February 2022).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion north side',
    cuisine: 'Late-night counter that marries obanzai and Italian, with bowls of obanzai lined up on the counter (2023–2026 reviews) · obanzai using Okinawan and local ingredients such as goya; broccoli aglio e olio; "gout pasta"; pizza; carpaccio; bagna cauda; gratin; fried chicken; oden; hamburg steak; fresh oysters; kasujiru in winter (2020–2026 reviews) · sake and wine (Tabelog) · about ¥5,000–10,000 (Tabelog; 2024–2026 reviews)',
    website: null, gmaps: gm('おばタリアン 祇園'), menu_url: null,
    notes: '[Obanzai and Italian · Gion north side, till 5 a.m.] A ten-seat counter hidden at the back of a Gion building, where an Okinawa-born owner sets out big bowls of obanzai beside pizza and pasta — the "gout pasta" and broccoli aglio e olio are favourites — for Gion\'s after-hours crowd until 5 a.m. Smoking allowed. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (from Okinawa, unnamed)'], origin: 'Okinawa (April 2026 review)',
      background: 'Per reviewers: a late-night Gion restaurant blending obanzai and Italian cooking, popular with people from the restaurant trade after work (September 2024); an April 2026 reviewer describes the warm hospitality of the owner, from Okinawa, and obanzai made with local ingredients.',
      philosophy: null, specialty: 'Gout pasta; obanzai.',
      anecdotes: [
        { text: 'An April 2026 regular praised the Okinawan owner\'s warmth and the endless goya and broccoli obanzai, then the luxurious gout pasta.', source: R + 'B498996963/' },
        { text: 'A December 2023 fan often eats two portions of the broccoli aglio e olio alone, and finally got to try the kasujiru.', source: R + 'B475666639/' },
        { text: 'A May 2023 guest arrived late after drinks and caught the last fresh oyster of the night.', source: R + 'B466098196/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・日本料理・ワインバー、東山区祇園町北側347-31 ユウキビル 1F、祇園四条駅から徒歩6分、月〜土 19:00〜翌5:00 (L.O.4:00)、日・祝休み、予約は2日前まで、5〜10名で貸切可、カード (VISA・Master・JCB・AMEX・Diners) 可、電子マネー・QR 不可、カウンター10席、個室 (5〜10名)、喫煙可。口コミ (2020年5月〜2026年7月、英語): ビルの奥で見つけにくい、カウンターに大鉢のおばんざい、おばんざいとイタリアン、沖縄出身の店主 (2026年4月)、ゴーヤやブロッコリーのおばんざい、ブロッコリーのアーリオオーリオ、「gout pasta」、ピザ、カルパッチョ、バーニャカウダ、グラタン、唐揚げ、おでん、ハンバーグ、生牡蠣、冬の粕汁、飲食店の人が多い (2024年9月)。',
      confidence: 'medium', sources: [TB, R + 'B427229433/', R + 'B427403809/', R + 'B446519451/', R + 'B466098196/', R + 'B474419380/', R + 'B475666639/', R + 'B478738618/', R + 'B492825966/', R + 'B498996963/', R + 'B531101330/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Late-night counter; book up to two days ahead; smoking allowed; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-31 ユウキビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004624, 135.776410); GSI resolves only the large 347 block (69 m), so the Tabelog pin is kept; nearest existing record 20.8 m (kyoto_planetarium_misora); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B498996963/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Gout pasta', '', 'Pasta', 'no', 'no', '2024–2026 reviews.', 'gout_pasta'),
      it('', '', 'Broccoli aglio e olio', '', 'Small plates', 'ask', 'ask', 'December 2023.', 'broccoli'),
    ] }, {
    cuisine: 'カウンターにおばんざいの大鉢が並ぶ、おばんざいとイタリアンの深夜の店 (2023〜2026年の口コミ)・ゴーヤなど沖縄や地元の食材のおばんざい、ブロッコリーのアーリオオーリオ、「gout pasta」、ピザ、カルパッチョ、バーニャカウダ、グラタン、唐揚げ、おでん、ハンバーグ、生牡蠣、冬の粕汁 (2020〜2026年の口コミ)・日本酒とワイン (食べログ)・5,000〜10,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '祇園北側',
    gf_detail: 'グルテンフリー不可。パスタ、ピザ、グラタン、唐揚げ (2020〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのおばんざい、牡蠣、ハンバーグ、ベーコン (2020〜2026年の口コミ)。',
    notes: '[おばんざいとイタリアン・祇園北側、朝5時まで] 祇園のビルの奥に隠れたカウンター10席。沖縄出身の店主がおばんざいの大鉢とピザやパスタを並べ、「gout pasta」やブロッコリーのアーリオオーリオが人気。祇園の遅い時間の客が朝5時まで。喫煙可、日曜休み。',
  });
}

save();
