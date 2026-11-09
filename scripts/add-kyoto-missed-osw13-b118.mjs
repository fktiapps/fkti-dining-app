// Kyoto priority (kyoto-missed), worker osw13, batch 118 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: manina, あおぞら飯店, 手打ち蕎麦 井上, Teppan Dining L’ajitto. Brands checked against queue-status, data/kyoto.json, than.co.jp/brands and 株式会社WILL (none match; manina is cenci's grocery café — cenci is in data, different format, flagged).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-118');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26043138', 'brand in data, same concept: 豚しゃぶ英 京都離れ店 is a branch of 豚しゃぶ英 — 豚しゃぶ英 京都四条烏丸店 is already in data');
skip('26038536', 'chain: ゴンチャ 京都二寧坂店 — a branch of the national Gong cha bubble-tea chain');
skip('26033862', 'big-chain hotel (Greg 11-08 ruling): パークハイアット京都 is a Park Hyatt, a Hyatt Hotels brand');

// ================================================================ manina
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037864/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_manina', name: 'manina', category: 'OMNI',
    lat: 35.013565, lng: 135.773765, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Risottos are rice-based, but the menu also has lasagna, sandwiches, chiffon and lemon cakes and granola (2023–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. An April 2024 reviewer had an avocado sandwich labelled vegan; most other dishes use cheese, cream, eggs, sausage or meat sauce.',
    hours_raw: 'Tabelog: Wed–Sun 11:00–19:00 (food L.O. 17:00); closed Monday and Tuesday. No reservations. Mainly a grocery shop selling ingredients, sauces, frozen risottos and sweets from the Italian restaurant cenci, with eat-in at one table for about 6–7 (2023–2024 reviews). Cards and e-money. Also an online shop. On Nijo-dori east of Kawabata, about 8 min from Keihan Sanjo or Jingu-Marutamachi.',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo-dori east of Kawabata — 8 min from Keihan Sanjo',
    cuisine: 'The grocery café of the Italian restaurant cenci: buy its sauces, oils, cheeses and sweets, or eat risotto, lasagna and desserts at one shared table (Tabelog; 2022–2025 reviews) · lotus-root Bolognese risotto with a soup of the day (Jerusalem artichoke, corn) (2025–2026); herb-sausage, lotus-root and shiitake risotto (January 2025) · lasagna; Gobal basil sausage with mashed potato and takana mustard (October 2025) · hot sandwiches; an avocado sandwich labelled vegan (April 2024) · Amazon-cacao chiffon cake ¥900 (June 2024); lemon cake; lemon Eton mess (2025–2026) · cacao-mochi Mont Blanc ¥1,200, Tanba chestnut Mont Blanc (October–December 2025) · coffee from Weekenders Coffee; homemade ginger ale; natural wine and beer',
    website: 'https://cencikyoto.stores.jp', gmaps: gm('manina 京都 川端二条'), menu_url: null,
    notes: '[Grocery café · Kawabata-Nijo, cenci\'s shop and table] The bright grocery shop of the acclaimed Italian restaurant cenci: browse its pantry goods, then sit at the one big table for a generous risotto, lasagna or cacao chiffon with coffee or natural wine. An avocado sandwich has been labelled vegan. About ¥1,500–3,000. Closed Mon and Tue.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A shop run by the Italian restaurant cenci (kyoto_cenci_shogoin in this guide), selling the ingredients, sauces and sweets used there; a December 2025 reviewer calls it cenci\'s second shop. A November 2023 visitor from Tokyo was served by the wife of cenci\'s chef Sakamoto, who opened on a closed day for her. A December 2022 reviewer credits the cacao chiffon to cenci\'s pâtissier Nakatsuka.',
      philosophy: null,
      specialty: 'cenci\'s risottos, sauces and cacao sweets.',
      anecdotes: [
        { text: 'August 2023: "While the restaurant\'s course meal includes smaller portions of risotto, I believe the dine-in servings at manina are about 2 to 3 times larger—definitely enough for a full meal."', source: R + 'B470283706/' },
        { text: 'April 2024: "I tried the avocado sandwich labeled as vegan… Despite its simple seasoning, it was delicious."', source: R + 'B484049440/' },
        { text: 'June 2025: "It\'s not really a place for lingering."', source: R + 'B513522268/' },
      ],
      japanese_sources_summary: '食べログ: manina、その他、左京区難波町211-5、京阪三条・市役所前・神宮丸太町から徒歩8分、水〜日11:00〜19:00 (料理L.O.17:00)、月・火休み、予約不可、7席、カード・電子マネー可。口コミ (2022年12月〜2025年12月、英語): イタリア料理店cenciの食材店で、店内で食事もできる (大きなテーブル1卓)、れんこんのボロネーゼのリゾットとスープ、ソーセージのリゾット、ラザニア、ホットサンド、ヴィーガン表示のアボカドのサンド (2024年4月)、アマゾンカカオのシフォンケーキ900円、レモンケーキ、イートンメス、カカオ餅のモンブラン1,200円、丹波栗のモンブラン、自然派ワイン、cenciのシェフSakamoto氏の妻が接客 (2023年11月)。',
      confidence: 'low', sources: [TB, 'https://cencikyoto.stores.jp'].concat(rv(R, ['B458665673', 'B470283706', 'B480801760', 'B484049440', 'B486923329', 'B488497654', 'B499135739', 'B513522268', 'B515848178', 'B517153188', 'B519658385', 'B521122973'])) },
    cultural_comfort: { level: 'friendly', note: 'Mostly a shop; one shared table; staff explain the products.' },
    safety: { ...SAFETY0, positives: ['An April 2024 reviewer had an avocado sandwich labelled vegan.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区難波町211-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to March 2026.' },
    pin_source: `Tabelog ${TB} (35.013565, 135.773765); GSI lot 京都府京都市左京区難波町211番地 about 9m away; nearest pin kyoto_yokocho_kawabata_nijo 18.3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B486923329/', R + 'B517153188/', R + 'B519658385/'],
    price_note: 'Prices from 2024–2025 reviews; most dishes unpriced.', last_checked: TODAY, items: [
      it('', '', 'Lotus-root Bolognese risotto (with soup)', '', 'Main', 'ask', 'no', '2025–2026.', 'bolognese_risotto'),
      it('', '', 'Lasagna', '', 'Main', 'no', 'no', 'October 2025.', 'lasagna'),
      it('', '', 'Avocado sandwich (labelled vegan)', '', 'Sandwich', 'no', 'ask', 'April 2024.', 'avocado_sandwich'),
      it('', '', 'Amazon-cacao chiffon cake', '¥900', 'Dessert', 'no', 'no', 'June 2024.', 'cacao_chiffon'),
      it('', '', 'Cacao-mochi Mont Blanc', '¥1,200', 'Dessert', 'ask', 'no', 'October–December 2025.', 'cacao_montblanc'),
    ] }, {
    cuisine: 'イタリア料理店cenciの食材店のカフェ。ソース、オイル、チーズ、菓子を買えて、大きなテーブル1卓でリゾットやラザニア、デザートも (食べログ、2022〜2025年の口コミ)・れんこんのボロネーゼのリゾットと日替わりのスープ (菊芋、コーン) (2025〜2026年)、ハーブのソーセージとれんこん、しいたけのリゾット (2025年1月)・ラザニア、Gobalのバジルのソーセージとマッシュポテト (2025年10月)・ホットサンド、ヴィーガン表示のアボカドのサンド (2024年4月)・アマゾンカカオのシフォンケーキ900円 (2024年6月)、レモンケーキ、レモンのイートンメス (2025〜2026年)・カカオ餅のモンブラン1,200円、丹波栗のモンブラン (2025年10〜12月)・Weekenders Coffeeのコーヒー、自家製ジンジャーエール、自然派ワインとビール',
    neighborhood: '二条通、川端の東。京阪三条から徒歩8分',
    gf_detail: '要確認: グルテンの情報はない。リゾットは米だが、ラザニア、サンド、シフォンケーキ、レモンケーキ、グラノーラもある (2023〜2025年の口コミ)。',
    vegan_detail: '要確認: 2024年4月の口コミにヴィーガン表示のアボカドのサンド。ほかの料理の多くはチーズ、クリーム、卵、ソーセージ、ミートソースを使う。',
    notes: '[食材店のカフェ・川端二条、cenciの店とテーブル] 評判のイタリア料理店cenciの明るい食材店。食材を選んだら、大きなテーブルでたっぷりのリゾット、ラザニア、カカオのシフォンとコーヒーや自然派ワインを。ヴィーガン表示のアボカドのサンドがあったことも。1,500〜3,000円ほど。月・火休み。',
  });
}

// ================================================================ あおぞら飯店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044716/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '24:00']);
  put({
    id: 'kyoto_aozora_hanten', name: 'あおぞら飯店 (Aozora Hanten)', category: 'OMNI',
    lat: 34.992821, lng: 135.766382, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles (nira soba, chuka soba, tantanmen), gyoza, spring rolls, fried bread and soy-based sauces (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-and-pork broths, chashu, gyoza, shrimp and pork dishes; even the fried eggplant comes from a meat-heavy kitchen (2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat and public holidays 15:00–24:00 (L.O. food 23:00, drinks 24:00); closed Sunday; hours may change. October 2026 reviewers came at lunch for a newly added lunch set (ramen and a mini chashu bowl), so check Instagram for lunch days. Charge: 「無し、ただしワンドリンク必須（＝フードのみの利用不可）」 (no charge, but one drink per person is required — food-only orders are not allowed; Tabelog Japanese original). Prices shown before tax (April 2026). Counter and tables; smaller "just-size" portions of many dishes (November 2026). Cards: JCB (Tabelog); QR codes. Tabelog says no reservations, though a May 2026 reviewer booked ahead and found it full. In a renovated old house in the old Gojo-Rakuen quarter, near the Ume-yu bathhouse; 7 min from Kiyomizu-Gojo.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gojo-Rakuen, near the Ume-yu bathhouse — 7 min from Kiyomizu-Gojo',
    cuisine: 'A new late-night neighbourhood Chinese diner (opened 17 March 2026) from the owner of the café "Kissa Jani", in a renovated old house (Tabelog; 2026 reviews) · nira soba ¥950: noodles buried in chopped garlic chives with egg yolk and chashu, on Teikoku flat noodles (March–November 2026) · special chuka soba ¥1,000 in clear chicken broth (March 2026) · gyoza with homemade chili oil; shrimp-paste and wood-ear spring rolls; potato with Sichuan pepper oil (April 2026) · fried eggplant with sansho salt; tomato and egg stir-fry; crab and lettuce fried rice (March 2026) · chili shrimp; pork with garlic sauce; tenshinhan; char-siu omurice; tantanmen; cold tofu with pickled greens; sweet-and-sour pork; mapo tofu (August–November 2026) · fried bread for dessert',
    website: null, gmaps: gm('あおぞら飯店 五条'), menu_url: null,
    notes: '[Neighbourhood Chinese · Gojo-Rakuen, a late-night machi-chuka] A buzzy, nostalgic-style Chinese diner in an old house near the Ume-yu bathhouse, open to midnight: heaps-of-chives nira soba, gyoza with house chili oil, tomato-egg stir-fry and chili-shrimp fried rice, many in small portions. One drink each required. About ¥2,000–3,500. Some dishes run salty. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; also runs Kissa Jani)'], origin: null,
      background: 'Opened 17 March 2026 (March 2026 review). A May 2026 reviewer writes that the owner of the popular Gojo café "Kissa Jani" opened it in a renovated old house, recreating an old-style neighbourhood Chinese diner, and that older regulars from the nearby bathhouse drop in for gyoza and beer. A November 2026 diner counted a staff of four.',
      philosophy: null,
      specialty: 'Nira soba; gyoza; late-night Chinese plates.',
      anecdotes: [
        { text: 'May 2026: "Kissa Jani\'s owner has taken the next step by opening a local Chinese restaurant that stays open late into the night."', source: R + 'B529216369/' },
        { text: 'November 2026: "We topped the fried rice with the leftover chili shrimp sauce—This was mind-blowingly delicious!"', source: R + 'B538599756/' },
        { text: 'September 2026: "The Sweet and Sour Pork and Mapo Tofu were too salty, overshadowing the natural flavors of the ingredients… In contrast, the Tenshinhan had a perfect balance."', source: R + 'B535525380/' },
      ],
      japanese_sources_summary: '食べログ: あおぞら飯店、ラーメン・中華料理、下京区菊屋町317、清水五条から徒歩7分、月〜土・祝日15:00〜24:00 (L.O.料理23:00・飲み物24:00)、日曜休み、予約不可の表示、チャージ「無し、ただしワンドリンク必須（＝フードのみの利用不可）」、カウンターあり、カード (JCB)・QR可。口コミ (2026年3〜11月、英語): 2026年3月17日開店、Kissa Janiの店主の町中華、古い家を改装、梅湯の近く、にらそば950円、特製中華そば1,000円、餃子と自家製ラー油、春巻き、なすの素揚げ、トマトと卵の炒め物、かにとレタスのチャーハン、エビチリ、オムライス、担々麺、税抜き表示、ハーフサイズあり、10月には昼のセットも、塩辛い料理があるとの声 (2026年5月・9月)、カツカレーは物足りない (2026年4月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B525013320', 'B525353188', 'B526824609', 'B527199861', 'B529216369', 'B529270669', 'B534104475', 'B535341799', 'B535525380', 'B537039480', 'B537700987', 'B538599756'])) },
    cultural_comfort: { level: 'friendly', note: 'One drink per person required; small portions available; open late.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区菊屋町317',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened March 2026) with reviews dated March to November 2026.' },
    pin_source: `Tabelog ${TB} (34.992821, 135.766382); GSI lot 京都府京都市下京区菊屋町317番地 about 23m away; nearest pin mp_kikoku 98.4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525013320/', R + 'B529216369/', R + 'B538599756/'],
    price_note: 'Prices from March–May 2026 reviews (shown before tax).', last_checked: TODAY, items: [
      it('', '', 'Nira soba (garlic-chive noodles)', '¥950', 'Noodles', 'no', 'no', 'March–November 2026.', 'nira_soba'),
      it('', '', 'Special chuka soba', '¥1,000', 'Noodles', 'no', 'no', 'March 2026.', 'tokusei_chuka_soba'),
      it('', '', 'Gyoza', '', 'Dumplings', 'no', 'no', '2026 reviews; homemade chili oil.', 'gyoza'),
      it('', '', 'Tomato and egg stir-fry', '', 'Stir-fry', 'ask', 'no', 'March and November 2026.', 'tomato_tamago'),
      it('', '', 'Crab and lettuce fried rice', '', 'Rice', 'ask', 'no', 'March and May 2026.', 'kani_lettuce_chahan'),
    ] }, {
    cuisine: 'Kissa Janiの店主が古い家を改装して2026年3月17日に開いた、夜遅くまでの新しい町中華 (食べログ、2026年の口コミ)・にらそば950円: 刻んだにらがたっぷり、卵黄とチャーシュー、Teikokuの平打ち麺 (2026年3〜11月)・澄んだ鶏がらスープの特製中華そば1,000円 (2026年3月)・自家製ラー油の餃子、えびのすり身ときくらげの春巻き、花椒油のじゃがいも (2026年4月)・山椒塩のなすの素揚げ、トマトと卵の炒め物、かにとレタスのチャーハン (2026年3月)・エビチリ、豚肉のにんにくソース、てんしんはん、チャーシュー入りのオムライス、担々麺、漬け菜のせ冷ややっこ、酢豚、麻婆豆腐 (2026年8〜11月)・デザートに揚げパン',
    neighborhood: 'Gojo Rakuen、Ume-yuの近く。清水五条から徒歩7分',
    gf_detail: 'グルテンフリーではない: 小麦の麺 (にらそば、中華そば、担々麺)、餃子、春巻き、揚げパン、しょうゆのたれ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鶏と豚のスープ、チャーシュー、餃子、えびや豚の料理 (2026年の口コミ)。',
    notes: '[町中華・Gojo Rakuen、夜遅くまでの町中華] Ume-yuの近くの古い家の、懐かしい雰囲気のにぎやかな町中華。24時まで。にらたっぷりのにらそば、自家製ラー油の餃子、トマトと卵の炒め物、エビチリのソースをかけたチャーハンなど、小さいサイズも。ワンドリンク制。2,000〜3,500円ほど。塩辛い料理もある。日曜休み。',
  });
}

// ================================================================ 手打ち蕎麦 井上
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26028498/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_teuchi_soba_inoue', name: '手打ち蕎麦 井上 (Teuchi Soba Inoue)', category: 'OMNI',
    lat: 34.99867, lng: 135.756966, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the soba is ni-hachi — 80% buckwheat, 20% wheat flour (December 2024, December 2025) — plus tempura bowls and soy-based dipping sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba in broth or with dipping sauce, chicken nanban soba, duck soba, oyakodon and charcoal yakitori (2022–2026 reviews); no vegan information.',
    hours_raw: 'Tabelog: Mon–Sat 17:30–22:00 (L.O. 21:30), open on public holidays; closed Sunday, the 3rd Monday and the 5th Saturday of the month; closes early when the soba sells out; occasional temporary closures. 2022 reviewers ate weekday lunch here, but current Tabelog hours are evenings only. Reservations taken. 24 seats; non-smoking. Cards, e-money and PayPay. A soba izakaya: soba plus charcoal yakitori and small dishes at night. Orders can take 30+ minutes (March 2026). Down a lantern-lit alley off Matsubara-dori east of Shinmachi; about 10 min walk from Gojo or Shijo stations.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Off Matsubara-dori east of Shinmachi — 440 m from Gojo',
    cuisine: 'A handmade-soba izakaya down an alley off Matsubara-dori: thin, firm ni-hachi soba and, at night, charcoal yakitori with sake and soba shochu (Tabelog; 2022–2026 reviews) · zaru soba ¥1,080 with green onion and real wasabi (December 2025); grated-daikon soba ¥1,100 (September 2022) · duck and leek soba with a warm dipping broth; tempura rice bowl (December 2025) · chicken nanban soba; soba with chopped fried tofu and Kujo leeks; mini oyakodon (2022) · soba-gaki (May 2024) · charcoal yakitori: thigh, heart, gizzard, tsukune, neck (February 2026)',
    website: null, gmaps: gm('手打ち蕎麦 井上 松原'), menu_url: TB + 'dtlmenu/',
    notes: '[Soba izakaya · Matsubara-Shinmachi, handmade soba and yakitori] A lantern-lit alley doorway leads to a roomy, regular-filled soba house: start with a drink and charcoal yakitori, then finish with crisp ni-hachi zaru soba (¥1,080) or duck soba. About ¥3,000–5,000 at night. Evenings only; closed Sundays. Can be slow when busy.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reviewers describe a shop full of regulars and kind staff — one lent a guest an umbrella in the rain (May 2022) — with soba made on site in a visible soba-making room (December 2025). One March 2026 diner waited over 30 minutes for food; others find it a little pricey but worth it.',
      philosophy: null,
      specialty: 'Handmade ni-hachi soba; charcoal yakitori.',
      anecdotes: [
        { text: 'December 2025: "The well-prepared ni-hachi soba (80% buckwheat, 20% wheat flour) is delightful… The dipping sauce leans towards Edo-style, but rather than being sharp, it emphasizes a lingering umami flavor."', source: R + 'B519127845/' },
        { text: 'May 2022: "On my way back, it started to rain, and the kindness of the staff who offered me an umbrella was heartwarming."', source: R + 'B452288005/' },
        { text: 'March 2026: "The downside was that I had to wait over 30 minutes from ordering to receiving my food."', source: R + 'B524069358/' },
      ],
      japanese_sources_summary: '食べログ: 手打ち蕎麦 井上、そば・居酒屋・日本料理、下京区松原通新町東入中野之町168-2、四条・五条駅から徒歩15分 (五条から440m)、月〜土17:30〜22:00 (L.O.21:30)、祝日は通常営業、日曜・第3月曜・第5土曜休み、そばがなくなり次第終了、臨時休業あり、予約可、24席、禁煙、カード・電子マネー・PayPay可。口コミ (2022年5月〜2026年3月、英語): 二八そば、ざるそば1,080円、おろしそば1,100円、鴨ねぎのつけそば、天ぷら丼、鶏南蛮そば、刻み揚げと九条ねぎのそば、ミニ親子丼、そばがき、炭火焼き鳥 (もも・ハツ・砂肝・つくね・せせり)、そば焼酎、常連客が多い、2022年は昼も営業、提供まで30分以上 (2026年3月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B449804258', 'B452288005', 'B454229383', 'B458264008', 'B497319046', 'B502717351', 'B518173016', 'B519127845', 'B522717843', 'B524069358'])) },
    cultural_comfort: { level: 'japanese', note: 'Regulars\' soba izakaya; evenings only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区松原通新町東入中野之町168-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated December 2025 to March 2026.' },
    pin_source: `Tabelog ${TB} (34.99867, 135.756966); GSI lot 京都府京都市下京区中野之町168番地 about 12m away; nearest pin kyoto_annex_matsubara 36.0m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B454229383/', R + 'B519127845/', R + 'B522717843/'],
    price_note: 'Prices from 2022 and December 2025 reviews (tax incl.).', last_checked: TODAY, items: [
      it('', '', 'Zaru soba', '¥1,080', 'Noodles', 'no', 'no', 'December 2025.', 'zaru_soba'),
      it('', '', 'Grated-daikon soba', '¥1,100', 'Noodles', 'no', 'no', 'September 2022.', 'oroshi_soba'),
      it('', '', 'Duck and leek soba (warm dipping broth)', '', 'Noodles', 'no', 'no', 'December 2025.', 'kamo_negi_tsukesoba'),
      it('', '', 'Charcoal yakitori', '', 'Grilled', 'ask', 'no', 'May 2024 and February 2026.', 'yakitori'),
    ] }, {
    cuisine: '松原通の路地の手打ちそばの居酒屋。細くこしのある二八そばと、夜は炭火焼き鳥と日本酒やそば焼酎 (食べログ、2022〜2026年の口コミ)・ざるそば1,080円、ねぎと本わさび (2025年12月)、おろしそば1,100円 (2022年9月)・温かいつけ汁の鴨ねぎそば、天ぷら丼 (2025年12月)・鶏南蛮そば、刻み揚げと九条ねぎのそば、ミニ親子丼 (2022年)・そばがき (2024年5月)・炭火焼き鳥: もも、ハツ、砂肝、つくね、せせり (2026年2月)',
    neighborhood: '松原通、新町の東の路地。五条から440m',
    gf_detail: 'グルテンフリーではない: そばは二八 (そば粉8割・小麦粉2割) (2024年12月、2025年12月)。天ぷら丼やしょうゆのつけ汁も。',
    vegan_detail: 'ヴィーガン不可: つゆやつけ汁のそば、鶏南蛮そば、鴨のそば、親子丼、炭火焼き鳥 (2022〜2026年の口コミ)。ヴィーガンの情報はない。',
    notes: '[そば居酒屋・松原新町、手打ちそばと焼き鳥] ちょうちんの灯る路地の奥、常連でにぎわう広いそば屋。まず炭火焼き鳥と一杯、締めにこしのある二八のざるそば (1,080円) や鴨のそばを。夜は3,000〜5,000円ほど。夜のみ、日曜休み。混むと遅いことも。',
  });
}

// ================================================================ Teppan Dining L’ajitto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26028090/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_teppan_dining_lajitto', name: 'Teppan Dining L’ajitto', category: 'OMNI',
    lat: 35.013633, lng: 135.763821, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: teppan courses end with French toast, and include soups, a seafood foil bake and Japanese-style ankake (2024–2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Miyazaki beef and jidori chicken teppanyaki courses with sea bream, seafood and roast beef (2024–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 11:30–15:00 (L.O. food 14:00) and 17:30–22:00 (L.O. food 21:00); closed Wednesday. Reservations taken; message plates for celebrations free on request (March 2026). Lunch courses about ¥3,500–4,000+; dinner courses around ¥10,000. 24 seats: counter on the 1st floor, tables on the 2nd, private rooms for 2–8. Children\'s plate available (November 2024). Non-smoking; wheelchair accessible. Cards and QR codes. In a converted house by Yanagibanba-Nijo, 6 min from Kyoto Shiyakusho-mae.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yanagibanba-Nijo — 6 min from Kyoto Shiyakusho-mae',
    cuisine: 'A teppanyaki restaurant in a converted house cooking Miyazaki beef in front of you, with courses ending in temari sushi or garlic rice and a much-loved French toast (Tabelog; 2024–2026 reviews) · lunch course ¥3,500: appetizer tataki, onion soup, ankake, chicken-thigh steak, temari sushi, French toast and tea (February 2025) · lunch with 60–80 g of Miyazaki beef from about ¥4,000 (November 2024) · ¥10,000 course: thick sea-bream carpaccio, seafood foil bake, jidori chicken with sansho, Miyazaki beef, garlic rice, French toast (January 2025) · sirloin-cap steak; risotto to finish (December 2025) · steamed sea bream with spring cabbage; Miyazaki beef thigh steak (March 2026) · hamburg-steak sandwich to take away',
    website: null, gmaps: gm('Teppan Dining L’ajitto 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Teppanyaki · Yanagibanba-Nijo, Miyazaki beef in a townhouse] A calm house-turned-teppan bar where the chef grills Miyazaki beef and seasonal fish at the counter, finishing with temari sushi or garlic rice and a famous French toast. Lunch courses from ¥3,500, dinner about ¥10,000. Free message plates for celebrations. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reviewers describe a hidden teppan restaurant in a private house, with a 1st-floor counter and 2nd-floor tables (November 2024), chefs who explain each dish (February 2025) and regulars who return every year for birthdays. One April 2025 diner found the temari sushi bland and hoped the service would match the food.',
      philosophy: null,
      specialty: 'Miyazaki beef teppanyaki; French toast.',
      anecdotes: [
        { text: 'January 2025: "The sea bream carpaccio wasn\'t just a thin slice; it was thick and satisfying sashimi… And the meat was truly outstanding!"', source: R + 'B499467301/' },
        { text: 'March 2026: "I had requested a message on a dessert plate in advance, and it was beautifully presented… (And it was a complimentary service!)"', source: R + 'B524902324/' },
        { text: 'April 2025: "The temari sushi was adorable and a delight to the eyes, but it was flavorless."', source: R + 'B505447702/' },
      ],
      japanese_sources_summary: '食べログ: Teppan Dining L’ajitto、ステーキ・鉄板焼き・日本料理、中京区柳馬場二条西入ル等持寺町1-7、京都市役所前から徒歩6分、月・火・木〜日11:30〜15:00 (料理L.O.14:00)・17:30〜22:00 (料理L.O.21:00)、水曜休み、予約可、24席、個室 (2〜8名)、禁煙、車いす可、カード・QR可、適格請求書の登録番号T2130001044337 (国税庁の公表サイトでは株式会社アイセラ、京都市下京区)。口コミ (2024年11月〜2026年8月、英語): 民家の鉄板焼き、1階カウンター・2階テーブル、宮崎牛、昼のコース3,500円から、手まり寿司、ガーリックライス、フレンチトースト、10,000円のコースに鯛のカルパッチョ・海鮮のホイル焼き・地鶏、デザートのプレートにメッセージ (無料)、持ち帰りのハンバーグサンド、手まり寿司は味が薄いとの声 (2025年4月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B495957929', 'B496242435', 'B499467301', 'B501942054', 'B505447702', 'B516864883', 'B519191546', 'B524902324', 'B534589845'])) },
    cultural_comfort: { level: 'friendly', note: 'Chef cooks in front of you and explains each dish; celebration plates on request.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区柳馬場二条西入ル等持寺町1-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to August 2026.' },
    pin_source: `Tabelog ${TB} (35.013633, 135.763821); GSI lot 京都府京都市中京区等持寺町1番地 about 78m away; nearest pin kyoto_cafe_bibliotic_hello 34.6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B496242435/', R + 'B499467301/', R + 'B501942054/'],
    price_note: 'Course prices from November 2024 – February 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (chicken-thigh steak, temari sushi, French toast)', '¥3,500', 'Course', 'no', 'no', 'February 2025.', 'lunch_course'),
      it('', '', 'Miyazaki beef lunch course (60–80 g)', 'about ¥4,000', 'Course', 'no', 'no', 'November 2024.', 'miyazaki_lunch'),
      it('', '', 'Dinner course (Miyazaki beef, garlic rice, French toast)', '¥10,000', 'Course', 'no', 'no', 'January 2025.', 'dinner_course'),
      it('', '', 'French toast', '', 'Dessert', 'no', 'no', '2024–2026.', 'french_toast'),
    ] }, {
    cuisine: '民家を改装した鉄板焼き。目の前で宮崎牛を焼き、手まり寿司かガーリックライス、評判のフレンチトーストで締める (食べログ、2024〜2026年の口コミ)・昼のコース3,500円: 前菜のたたき、オニオンスープ、あんかけ、鶏もものステーキ、手まり寿司、フレンチトーストと紅茶 (2025年2月)・宮崎牛60〜80gの昼のコース4,000円ほどから (2024年11月)・10,000円のコース: 厚切りの鯛のカルパッチョ、海鮮のホイル焼き、山椒の地鶏、宮崎牛、ガーリックライス、フレンチトースト (2025年1月)・サーロインのかぶりのステーキ、締めのリゾット (2025年12月)・鯛と春キャベツの蒸し物、宮崎牛のもものステーキ (2026年3月)・持ち帰りのハンバーグサンド',
    neighborhood: '柳馬場二条。京都市役所前から徒歩6分',
    gf_detail: 'グルテンフリーではない: 鉄板のコースはフレンチトーストで締め、スープ、海鮮のホイル焼き、あんかけもある (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 宮崎牛と地鶏の鉄板焼きのコースに鯛、魚介、ローストビーフ (2024〜2026年の口コミ)。',
    notes: '[鉄板焼き・柳馬場二条、町家で宮崎牛] 静かな民家の鉄板焼き。カウンターで宮崎牛と旬の魚を焼き、手まり寿司かガーリックライス、評判のフレンチトーストで締める。昼のコースは3,500円から、夜は10,000円ほど。記念日のメッセージプレートは無料。水曜休み。',
  });
}

save();
