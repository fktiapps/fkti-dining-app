// Kyoto priority (kyoto-missed), worker osw13, batch 120 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 京薬膳なつめ, それから, 蓮月茶や, STARS SAKE SALON. Brands checked against queue-status, data/kyoto.json, than.co.jp/brands and 株式会社WILL (none match; STARS SAKE SALON is unrelated to Stars'n Cacio in data as far as sources show).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-120');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26027094', 'retail food shop (Greg 11-07 ruling): ワインスポットナカムラヤ is a wine shop on Nijo-dori selling bottles and snacks to take home, with craft beer on tap (2016–2018 and September 2026 reviews); only two reviews, no seats listed, no GF or vegan options sourced');

// ================================================================ 京薬膳なつめ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039202/'; const R = TB + 'dtlrvwlst/';
  const L = ['10:00', '14:30'], D = ['17:00', '22:00'];
  put({
    id: 'kyoto_kyo_yakuzen_natsume', name: '京薬膳なつめ (Kyo Yakuzen Natsume)', category: 'OMNI',
    lat: 35.014544, lng: 135.766073, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog lists gluten-free options, but the courses include xiaolongbao and noodles to finish, and lunch is ramen and rice bowls (2025–2026 reviews). Say so when booking and ask which broth and dishes suit.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the hot pots come with pork, chicken, beef, seafood and fish balls, and the white broth is a rich stock (2025–2026 reviews); a lunch "yakuzen vegetable bowl" exists but no vegan information is given.',
    hours_raw: 'Tabelog: Tue–Sun and days before and after public holidays — breakfast and lunch 10:00–14:30 (L.O. 14:00), dinner 17:00–22:00 (last entry 20:00; drinks L.O. 21:30; allow about 2 hours for the hot-pot course); public holidays dinner only; closed Monday. Lunch bookings are for courses only. Afternoon tea is served next door at the sister sweets shop "Kyogateau the Marie", by reservation (weekdays 14:00–16:00, weekends and holidays 12:00–16:00). 26 seats; a private room for 2 (¥500 per person, tax incl.); private hire up to 20. Non-smoking. Cards, IC cards and QR codes. Only cake may be brought in for birthdays. At the end of a narrow alley on Fuyacho-dori north of Nijo, opposite the bakery Un Son Doux; 5 min from Kyoto Shiyakusho-mae.',
    hours: { 1: [L, D], 2: [L, D], 3: [L, D], 4: [L, D], 5: [L, D], 6: [L, D] }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fuyacho-dori north of Nijo — 5 min from Kyoto Shiyakusho-mae',
    cuisine: 'Chinese-style medicinal (yakuzen) hot pot in a renovated machiya, made with Kyoto ingredients and over 20 spices from China — choose a detox mushroom, mala or rich white broth (Tabelog; 2025–2026 reviews) · hot-pot course with small dishes, herbal plum wine and almond tofu, all-you-can-drink, ¥7,800 (June 2025); seasonal special course ¥8,800 (August 2025): six kinds of mushroom, greens, pork, chicken or beef, seafood, frozen tofu, fish balls, noodles to finish · lunch: clay-pot yakuzen ramen in white or mala broth ¥1,000; chicken-tsukune yakitori bowl ¥1,300; spice curry; vegetable bowl; taco rice; mini dessert set ¥450 (2025–2026) · yakuzen afternoon tea with herbal and eight-treasure teas, e.g. spring set ¥7,000 (2025)',
    website: null, gmaps: gm('京薬膳なつめ'), menu_url: TB + 'dtlmenu/',
    notes: '[Yakuzen hot pot · Fuyacho-Nijo, Kyoto-style medicinal hot pot] A pretty alley machiya serving Chinese-style "body-friendly" hot pot: pick mushroom, fiery mala or creamy white broth and cook mushrooms, greens and meats, with herbal drinks. Lunch clay-pot ramen from ¥1,000; dinner courses about ¥8,000. The mala is very spicy — staff will make a mild pot. Tabelog lists gluten-free options. Closed Monday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Run by 株式会社雲濤, registered at this address (NTA invoice registry, T4130001073359), together with the sweets shop "Kyogateau the Marie" next door (Tabelog; March 2026 review). The concept is "MADE IN KYOTO Kyo Yakuzen Hot Pot" (2025–2026 reviews). Reviewers praise kind staff who warn about spice and prepared a non-spicy soup on request (November 2026); the 2nd floor has a red room and a pink private room (April 2025). The listing calls this "our Kyoto location", but no other branch is named.',
      philosophy: '"Body-friendly Kyo Yakuzen" with seasonal Kyoto ingredients (September 2025 review).',
      specialty: 'Medicinal hot pot; yakuzen afternoon tea.',
      anecdotes: [
        { text: 'September 2025: "You can choose from three types of medicinal soups: a detoxifying mushroom broth, a fragrant mala broth with a vibrant aroma, and a rich white soup… The mala soup looked spicy, but it was about 15 times spicier than it appeared."', source: R + 'B513873862/' },
        { text: 'November 2026: "When the staff learned that we couldn\'t eat spicy food, they kindly informed us… For the hot pot, they prepared a non-spicy herbal soup just for us."', source: R + 'B538496557/' },
        { text: 'June 2026: "At just JPY 1000, this lunch offers exceptional value!"', source: R + 'B529382155/' },
      ],
      japanese_sources_summary: '食べログ: 京薬膳なつめ、薬膳・火鍋・中華粥、中京区麩屋町通二条上ル布袋屋町520-3、京都市役所前から徒歩5分、火〜日・祝日の前日・祝日の翌日10:00〜14:30 (L.O.14:00)・17:00〜22:00 (最終入店20:00)、祝日は夜のみ、月曜休み、昼の予約はコースのみ、隣の「Kyogateau the Marie」でアフタヌーンティー (予約制)、26席、2名の個室 (1人500円)、禁煙、カード・電子マネー・QR可、グルテンフリーメニューあり、登録番号T4130001073359 (国税庁の公表サイトで株式会社雲濤、同住所)。口コミ (2025年4月〜2026年11月、英語): 京都の食材と20種以上の中国の薬膳スパイスの火鍋、きのこ・麻辣・白湯の3種のスープ、コース7,800円 (飲み放題付き)・8,800円、小籠包、杏仁豆腐、昼は土鍋の薬膳ラーメン1,000円・つくね丼1,300円、薬膳アフタヌーンティー7,000円、辛さに配慮してくれるスタッフ。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B496535972', 'B508336162', 'B509514972', 'B511964014', 'B513873862', 'B516422960', 'B525403746', 'B527192303', 'B529382155', 'B538496557'])) },
    cultural_comfort: { level: 'friendly', note: 'Staff explain broths and adjust spice; order tea by smartphone or staff.' },
    safety: { ...SAFETY0, positives: ['Tabelog lists gluten-free options.'], staff_allergy_handling: ['November 2026 review: staff prepared a non-spicy soup and flagged spicy dishes on request.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区麩屋町通二条上ル布袋屋町520-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to November 2026.' },
    pin_source: `Tabelog ${TB} (35.014544, 135.766073); GSI lot 京都府京都市中京区布袋屋町520番地 about 19m away; nearest pin kyoto_un_son_doux 31.2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508336162/', R + 'B511964014/', R + 'B513873862/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Yakuzen hot-pot course (all-you-can-drink)', '¥7,800', 'Course', 'ask', 'no', 'June 2025.', 'hotpot_course'),
      it('', '', 'Seasonal special hot-pot course', '¥8,800', 'Course', 'ask', 'no', 'August 2025.', 'seasonal_course'),
      it('', '', 'Clay-pot yakuzen ramen (white or mala)', '¥1,000', 'Noodles', 'no', 'no', 'March and June 2026.', 'yakuzen_ramen'),
      it('', '', 'Chicken-tsukune yakitori rice bowl', '¥1,300', 'Rice', 'ask', 'no', 'March 2026.', 'tsukune_don'),
      it('', '', 'Yakuzen afternoon tea', '¥7,000', 'Afternoon tea', 'ask', 'ask', 'April 2025; at Kyogateau the Marie.', 'afternoon_tea'),
    ] }, {
    cuisine: '町家を改装した中国式の薬膳火鍋の店。京都の食材と20種以上の中国のスパイスで、デトックスのきのこ、麻辣、濃厚な白湯のスープから選ぶ (食べログ、2025〜2026年の口コミ)・小皿、薬膳の梅酒、杏仁豆腐付きの火鍋コース、飲み放題付き7,800円 (2025年6月)、季節の特別コース8,800円 (2025年8月): 6種のきのこ、青菜、豚・鶏・牛、魚介、凍り豆腐、魚のつみれ、締めの麺・昼: 土鍋の薬膳ラーメン (白湯か麻辣) 1,000円、鶏つくねの焼き鳥丼1,300円、スパイスカレー、野菜の丼、タコライス、ミニデザートセット450円 (2025〜2026年)・薬膳茶や八宝茶の薬膳アフタヌーンティー、春のセット7,000円 (2025年)',
    neighborhood: '麩屋町通、二条の北。京都市役所前から徒歩5分',
    gf_detail: '要確認: 食べログにグルテンフリーメニューありとあるが、コースには小籠包や締めの麺、昼はラーメンや丼 (2025〜2026年の口コミ)。予約時に伝え、合うスープと料理を確認を。',
    vegan_detail: 'ヴィーガン不可: 火鍋には豚、鶏、牛、魚介、つみれが入り、白湯は濃厚なスープ (2025〜2026年の口コミ)。昼に「薬膳の野菜の丼」があるがヴィーガンの情報はない。',
    notes: '[薬膳火鍋・麩屋町二条、京都の薬膳火鍋] 路地の奥のかわいらしい町家で、体にやさしい中国式の火鍋。きのこ、激辛の麻辣、まろやかな白湯のスープを選び、きのこや青菜、肉を煮て、薬膳の飲み物とともに。昼は土鍋のラーメン1,000円から、夜のコースは8,000円ほど。麻辣はとても辛いが、辛くない鍋にもしてくれる。食べログにグルテンフリーメニューあり。月曜休み。',
  });
}

// ================================================================ それから
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26021124/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '19:30']);
  put({
    id: 'kyoto_sorekara', name: 'それから (Sorekara)', category: 'OMNI',
    lat: 35.01478, lng: 135.767585, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mostly coffee and tea; the sweets are pound cake, cookies and wagashi (2013–2025 reviews), and no gluten information is given.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee, tea and herbal tea are available; the cakes and cookies are not described.',
    hours_raw: 'Tabelog: Mon, Fri, Sat, Sun 11:30–19:30 (L.O. 19:00); closed Tuesday to Thursday; hours may change. No credit cards (PayPay accepted in 2020). Shoes off, slippers inside. A large table and a small table for two by a tiny garden. The owner prefers few guests and declines TV and magazine features (2014, 2020 reviews). At the end of a narrow alley off Teramachi-dori, a few doors from Ippodo; look for the small "Sorekara" sign.',
    hours: { 0: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'An alley off Teramachi-dori near Ippodo — 435 m from Kyoto Shiyakusho-mae',
    cuisine: 'A hidden antiques-and-coffee salon in an old house down a Teramachi alley, serving carefully brewed drinks in Old Noritake cups (Tabelog; 2012–2025 reviews) · coffee and tea, hot or iced, ¥500; iced milk tea; herbal tea (2014–2025) · cake set ¥1,000, e.g. orange pound cake (July 2020) · weekend wagashi set ¥1,100 with fresh sweets from "Jukou", or with matcha (2013–2024) · cookie set with a drink on weekdays (May 2024)',
    website: null, gmaps: gm('それから 寺町 喫茶'), menu_url: null,
    notes: '[Antique café · Teramachi, a hidden salon of old porcelain] Down a narrow alley off Teramachi, take off your shoes and sit among Edo-era Imari, Meiji furniture and a tiny garden while the owner brews coffee into Old Noritake cups. Drinks ¥500, cake or wagashi sets about ¥1,000. Quiet and personal — the owner keeps it low-key. Open Fri–Mon only.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; runs it alone)'], origin: null,
      background: 'Reviewers from 2014 to 2025 describe a stylish, friendly gentleman who runs the café alone among antiques for sale — Imari porcelain, Meiji furniture, Old Noritake — with a gallery said to be upstairs (April 2014). He limits guests each day and declines TV and magazine coverage, though he allowed a 2015 reviewer to post on Tabelog.',
      philosophy: 'To welcome just a few guests a day and let them relax (2014 and 2020 reviews).',
      specialty: 'Coffee and tea among antiques; wagashi sets.',
      anecdotes: [
        { text: 'April 2014: "After changing into slippers and stepping inside, you enter a small space filled with Edo-era Imari porcelain, Meiji furniture, and Old Noritake… The master, who runs the café solo, is kind and approachable."', source: R + 'B112810316/' },
        { text: 'July 2020: "They reportedly decline all TV and magazine coverage to maintain this style… They want to welcome just a few select groups of guests each day."', source: R + 'B492698034/' },
        { text: 'November 2025: "It seems the gentleman owner runs the place by himself, allowing for a peaceful moment."', source: R + 'B520963532/' },
      ],
      japanese_sources_summary: '食べログ: それから、喫茶店、中京区常盤木町46-2、京都市役所前から435m、月・金・土・日11:30〜19:30 (L.O.19:00)、火〜木休み、カード不可。口コミ (2012年10月〜2025年11月、英語): 寺町通の細い路地の奥の骨董と喫茶の店、靴を脱いでスリッパで、江戸の伊万里や明治の家具、オールドノリタケのカップ、小さな坪庭、男性の店主がひとりで営む、コーヒー・紅茶500円、ケーキセット1,000円、週末は「Jukou」の生菓子のセット1,100円、平日はクッキーのセット、テレビや雑誌の取材は断っている、PayPay可 (2020年)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B112507125', 'B112810316', 'B117889716', 'B452082716', 'B490130189', 'B492698034', 'B513471591', 'B520963532', 'B63001118'])) },
    cultural_comfort: { level: 'japanese', note: 'Quiet, small and personal; shoes off; cash or PayPay.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区常盤木町46-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated August and November 2025.' },
    pin_source: `Tabelog ${TB} (35.01478, 135.767585); GSI lot 京都府京都市中京区常盤木町46番地 about 14m away; nearest pin kyoto_ippodo_honten_kaboku 37.1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B112810316/', R + 'B492698034/'],
    price_note: 'Prices from 2014 and 2020 reviews.', last_checked: TODAY, items: [
      it('', '', 'Coffee or tea', '¥500', 'Drink', 'ask', 'ask', '2014 and 2020.', 'coffee'),
      it('', '', 'Cake set', '¥1,000', 'Set', 'no', 'ask', 'July 2020.', 'cake_set'),
      it('', '', 'Weekend wagashi set', '¥1,100', 'Set', 'ask', 'ask', 'July 2020; sweets from Jukou.', 'wagashi_set'),
    ] }, {
    cuisine: '寺町通の路地の奥、古い家の骨董と喫茶のサロン。オールドノリタケのカップでていねいにいれる飲み物 (食べログ、2012〜2025年の口コミ)・コーヒーと紅茶 (ホットかアイス) 500円、アイスミルクティー、ハーブティー (2014〜2025年)・ケーキセット1,000円、例えばオレンジのパウンドケーキ (2020年7月)・週末は「Jukou」の生菓子のセット1,100円、抹茶とも (2013〜2024年)・平日は飲み物とクッキーのセット (2024年5月)',
    neighborhood: '寺町通の路地、一保堂の近く。京都市役所前から435m',
    gf_detail: '要確認: ほとんどがコーヒーと紅茶。甘いものはパウンドケーキ、クッキー、和菓子 (2013〜2025年の口コミ) で、グルテンの情報はない。',
    vegan_detail: '要確認: ブラックコーヒー、紅茶、ハーブティーはある。ケーキやクッキーの説明はない。',
    notes: '[骨董喫茶・寺町、古い器の隠れたサロン] 寺町の細い路地の奥で靴を脱ぎ、江戸の伊万里や明治の家具、小さな坪庭に囲まれて、店主がオールドノリタケのカップにいれるコーヒーを。飲み物500円、ケーキや和菓子のセットは1,000円ほど。静かで落ち着いた店で、店主は目立たないことを好む。金〜月のみ。',
  });
}

// ================================================================ 蓮月茶や
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000952/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:30'], ['17:00', '21:00']);
  put({
    id: 'kyoto_rengetsu_jaya', name: '蓮月茶や (Rengetsu Jaya)', category: 'OMNI',
    lat: 35.006729, lng: 135.782302, cuisine_type: 'tofu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the tofu courses include nama-fu (wheat gluten) and yudofu with a soy-based sauce, plus a tofu gratin (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as served: the course starts with crab-miso tofu and includes a tofu gratin (December 2025); no vegan option is mentioned.',
    hours_raw: 'Tabelog: Mon, Thu–Sun and public holidays 11:00–14:30 (last entry 13:30) and 17:00–21:00 (last entry 19:30); closed Tuesday and Wednesday; closes when sold out; New Year hours vary. Courses only in the evening (February 2026). Reservations taken — cancellation fees: on the day 100% of the meal; for 7 or more, 50% from two days before. No room or service charge, even in a private room (「なし（個室でお取りした場合でも別途部屋料、サービス料等はいただきません）」, Tabelog Japanese original). 40 seats; private rooms for 3–20. Non-smoking. Cards, IC cards and QR codes. On Jingu-michi north of Chion-in, opposite Shoren-in; 5 min from Higashiyama Station.',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Jingu-michi north of Chion-in — 5 min from Higashiyama',
    cuisine: 'A long-established tofu restaurant by Chion-in serving yudofu courses of 9–11 dishes, often in private rooms (Tabelog; 2023–2026 reviews) · lunch yudofu course ¥3,520 (2023–24), ¥3,740 (January 2026); 10 dishes ¥3,750 (March 2026); 11-dish yudofu course ¥4,700 (December 2025) · crab-miso tofu; Takigawa tofu (a jelly-like tofu) with sesame sauce; yudofu with a ponzu-style soy sauce; fresh yuba; nama-fu dengaku; tofu gratin; simmered yuba rolls; zaru tofu; hijiki or takikomi rice (2025–2026) · sakura mochi for dessert (June 2026) · house matcha shochu',
    website: null, gmaps: gm('蓮月茶や 知恩院'), menu_url: TB + 'dtlmenu/',
    notes: '[Tofu kaiseki · Chion-in, yudofu courses in private rooms] A gracious old tofu house opposite Shoren-in: ten-odd tofu dishes — Takigawa tofu, fresh yuba, nama-fu dengaku, a tofu gratin and the yudofu itself — often served in a private room at no extra charge. Lunch from about ¥3,740, dinner courses about ¥4,700–5,000. Closed Tue and Wed.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A December 2025 reviewer chose it as a restaurant with over 100 years of history; reviewers (2025–2026) praise elegant, friendly staff and value for a private room in this location. A July 2026 diner describes an impressive entrance with noren and warm light across from Shoren-in.',
      philosophy: null,
      specialty: 'Yudofu and tofu courses.',
      anecdotes: [
        { text: 'December 2025: "The yudofu course included 11 dishes for JPY 4,700 (drinks not included)… The nama-fu (fresh wheat gluten), yuba (tofu skin), and tofu gratin were exceptional."', source: R + 'B519319975/' },
        { text: 'July 2026: "The tofu gratin was particularly memorable. The creamy tofu paired beautifully with the savory baked crust."', source: R + 'B532250062/' },
        { text: 'March 2026: "We relaxed in a private room and enjoyed a tofu course with 10 dishes for JPY 3750."', source: R + 'B524809696/' },
      ],
      japanese_sources_summary: '食べログ: 蓮月茶や、豆腐料理・日本料理、東山区神宮道知恩院北入ル、東山駅1番出口から徒歩5分、月・木〜日・祝日11:00〜14:30 (最終入店13:30)・17:00〜21:00 (最終入店19:30)、火・水休み、売り切れ次第終了、予約可 (当日キャンセルは100%など)、チャージ「なし（個室でお取りした場合でも別途部屋料、サービス料等はいただきません）」、40席、個室 (3〜20名)、禁煙、カード・電子マネー・QR可。口コミ (2023年12月〜2026年9月、英語): 100年以上の歴史 (2025年12月)、湯豆腐のコース、昼3,520円→3,740円 (2026年1月)、11品4,700円、かに味噌豆腐、Takigawa豆腐のごまだれ、生湯葉、生麩田楽、豆腐グラタン、湯葉巻きの炊き合わせ、ひじきご飯、桜餅、抹茶焼酎、夜はコースのみ、個室でも追加料金なし、Shoren-inの向かい。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B477092366', 'B519319975', 'B524126824', 'B524725801', 'B524809696', 'B528407747', 'B529437347', 'B530407870', 'B532250062', 'B536037771', 'B536124968', 'B538130884'])) },
    cultural_comfort: { level: 'friendly', note: 'Set courses only; private rooms at no extra charge; strict same-day cancellation fee.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区神宮道知恩院北入ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated December 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.006729, 135.782302); address is a street direction (神宮道知恩院北入ル) with no lot — GSI matches only 東山区, so approximate; a July 2026 reviewer places it across from Shoren-in; nearest pin kyoto_tsukioka_shorenin 150.5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B477092366/', R + 'B519319975/', R + 'B524809696/'],
    price_note: 'Course prices from 2023–2026 reviews (tax incl.); no room or service charge.', last_checked: TODAY, items: [
      it('', '', 'Lunch yudofu course', '¥3,740', 'Course', 'no', 'no', 'January 2026; ¥3,520 in 2023–24.', 'lunch_yudofu'),
      it('', '', 'Yudofu course (11 dishes)', '¥4,700', 'Course', 'no', 'no', 'December 2025.', 'yudofu_course'),
      it('', '', 'Matcha shochu', '', 'Drink', 'ask', 'ask', 'December 2025.', 'matcha_shochu'),
    ] }, {
    cuisine: '知恩院近くの老舗の豆腐料理の店。9〜11品の湯豆腐のコースを、個室で出すことも多い (食べログ、2023〜2026年の口コミ)・昼の湯豆腐のコース3,520円 (2023〜24年)、3,740円 (2026年1月)、10品3,750円 (2026年3月)、11品の湯豆腐のコース4,700円 (2025年12月)・かに味噌豆腐、ごまだれのTakigawa豆腐 (寒天のような豆腐)、ぽん酢風のしょうゆだれの湯豆腐、生湯葉、生麩田楽、豆腐グラタン、湯葉巻きの炊き合わせ、ざる豆腐、ひじきご飯や炊き込みご飯 (2025〜2026年)・デザートの桜餅 (2026年6月)・名物の抹茶焼酎',
    neighborhood: '神宮道、知恩院の北。東山駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 豆腐のコースには生麩 (小麦グルテン)、しょうゆのたれの湯豆腐、豆腐グラタンが入る (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可 (提供時): コースはかに味噌豆腐から始まり、豆腐グラタンもある (2025年12月)。ヴィーガンの選択肢の記載はない。',
    notes: '[豆腐料理・知恩院、個室で湯豆腐のコース] Shoren-inの向かいの趣ある老舗の豆腐料理の店。Takigawa豆腐、生湯葉、生麩田楽、豆腐グラタン、そして湯豆腐と、10品ほどの豆腐料理を、追加料金なしの個室で味わえることも多い。昼は3,740円ほどから、夜のコースは4,700〜5,000円ほど。火・水休み。',
  });
}

// ================================================================ STARS SAKE SALON
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040486/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '21:00']);
  put({
    id: 'kyoto_stars_sake_salon', name: "stars' sakesalon (STARS SAKE SALON)", category: 'OMNI',
    lat: 35.013454, lng: 135.762017, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: spring rolls, a white-sauce gratin, soy-seasoned kinpira and other small dishes (2024–2025 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: braised pork belly, shrimp, squid, Biwa trout and a seafood gratin (2024–2025 reviews); no vegan information.',
    hours_raw: 'Tabelog: Mon–Wed, Fri–Sun 15:00–21:00; closed Thursday; hours may change. Reservations by phone only; the counter fills up (February 2026). Prices are not on the menu, but reviewers find them reasonable (2024). Non-smoking. Cards, e-money and PayPay. Counter and tables in a former tempura shop with a small garden, tucked into the back of a residential building on Nijo-dori west of Takakura, 4 min from Karasuma Oike.',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo-dori west of Takakura — 4 min from Karasuma Oike',
    cuisine: 'A bright sake bar opening at 3 pm, where the owner pairs classic and rare sake with colourful Japanese and Western small plates (Tabelog; 2024–2026 reviews) · smoked burdock kinpira, a house favourite (November 2024) · braised pork belly (December 2024) · shrimp-and-avocado spring rolls; Biwa trout (July 2024) · potato salad; light pickles of cucumber and okra; squid from Nanao, Ishikawa; shrimp, scallop and mushroom gratin (September 2025) · white sesame tofu; seasonal pickles; spring vegetables in white-sesame dressing (April 2026) · sake such as Mansaku no Hana, Takachiyo and Sawanoi, Kyoto sake; sangria ¥900; homemade kumquat soda',
    website: null, gmaps: gm('STARS SAKE SALON 京都 二条'), menu_url: null,
    notes: '[Sake bar · Nijo-Takakura, an afternoon sake salon] A calm, spacious hideaway behind a residential building, open from 3 pm, where the owner pours classic and rare sake and sends out beautiful small dishes — smoked burdock kinpira, pork belly, gratin. No prices on the menu but fair. About ¥3,000–10,000. Book by phone. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner (cooks and serves; mostly alone)'], origin: null,
      background: 'Reviewers describe a cheerful woman who runs the bar, mostly by herself with occasional part-time help (December 2024; February–March 2026). An August 2025 regular heard she worked in Ginza for many years; a December 2025 reviewer says she has long experience in the Kanto food business. The bar took over a former tempura shop (August 2025).',
      philosophy: null,
      specialty: 'Sake pairing; Japanese and Western small plates.',
      anecdotes: [
        { text: 'November 2024: "My initial thought: \'Well, it\'s just kinpira.\' After trying it: \'Wow, this is amazing!!!\' Later on: \'What a perfect pairing with the sake!\'"', source: R + 'B496998103/' },
        { text: 'August 2025: "This restaurant took over a former tempura shop, and the comfortable counter seating makes for a luxurious experience while chatting with the owner."', source: R + 'B512713940/' },
        { text: 'July 2024: "I felt a bit nervous because I didn\'t know the prices. It was a calm and soothing atmosphere."', source: R + 'B491543686/' },
      ],
      japanese_sources_summary: '食べログ: STARS SAKE SALON (stars\' sakesalon)、日本酒バー、中京区二条通高倉西入ル松屋町55-1、烏丸御池から362m、月〜水・金〜日15:00〜21:00、木曜休み、電話予約のみ、禁煙、カード・電子マネー・PayPay可。口コミ (2024年7月〜2026年4月、英語): 住宅の建物の奥、もとは天ぷら屋、小さな庭、明るい女性の店主がほぼひとりで営む (アルバイトがいることも)、銀座で長く働いた (2025年8月)、燻製ごぼうのきんぴら、豚の角煮、えびとアボカドの春巻き、ビワマス、ポテトサラダ、Nanaoのいか、グラタン、白ごま豆腐、春野菜の白和え、珍しい日本酒や京都の酒、サングリア900円、自家製きんかんソーダ、メニューに値段がない。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B491543686', 'B493143469', 'B496539539', 'B496998103', 'B508346611', 'B512713940', 'B517842188', 'B522190953', 'B524932083', 'B527287594'])) },
    cultural_comfort: { level: 'friendly', note: 'Book by phone; no prices on the menu; owner helps choose sake.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区二条通高倉西入ル松屋町55-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to April 2026.' },
    pin_source: `Tabelog ${TB} (35.013454, 135.762017); GSI lot 京都府京都市中京区松屋町55番地 about 8m away; nearest pin kyoto_la_pleine_lune 6.0m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B496998103/', R + 'B512713940/', R + 'B527287594/'],
    price_note: 'Menu prices are not listed; sangria ¥900 (April 2026).', last_checked: TODAY, items: [
      it('', '', 'Smoked burdock kinpira', '', 'Small dish', 'no', 'ask', 'November 2024.', 'smoked_kinpira'),
      it('', '', 'Braised pork belly', '', 'Small dish', 'no', 'no', 'December 2024.', 'kakuni'),
      it('', '', 'Shrimp, scallop and mushroom gratin', '', 'Small dish', 'no', 'no', 'September 2025.', 'gratin'),
      it('', '', 'Sangria (strawberry and dekopon)', '¥900', 'Drink', 'ask', 'ask', 'April 2026.', 'sangria'),
    ] }, {
    cuisine: '15時から開く明るい日本酒バー。店主が定番から珍しい酒まで、色とりどりの和洋の小皿に合わせる (食べログ、2024〜2026年の口コミ)・名物の燻製ごぼうのきんぴら (2024年11月)・豚の角煮 (2024年12月)・えびとアボカドの春巻き、ビワマス (2024年7月)・ポテトサラダ、きゅうりとオクラの浅漬け、石川県Nanaoのいか、えび・帆立・きのこのグラタン (2025年9月)・白ごま豆腐、季節の漬物、春野菜の白和え (2026年4月)・Mansaku no Hana、Takachiyo、Sawanoiなどの日本酒、京都の酒、サングリア900円、自家製きんかんソーダ',
    neighborhood: '二条通、高倉の西。烏丸御池から徒歩4分',
    gf_detail: 'グルテンフリーではない: 春巻き、ホワイトソースのグラタン、しょうゆのきんぴらなどの小皿 (2024〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 豚の角煮、えび、いか、ビワマス、魚介のグラタン (2024〜2025年の口コミ)。ヴィーガンの情報はない。',
    notes: '[日本酒バー・二条高倉、昼下がりの日本酒サロン] 住宅の建物の奥にある、広く落ち着いた隠れ家。15時から店主が定番や珍しい日本酒を注ぎ、燻製ごぼうのきんぴら、角煮、グラタンなど美しい小皿を。メニューに値段はないが良心的。3,000〜10,000円ほど。予約は電話で。木曜休み。',
  });
}

save();
