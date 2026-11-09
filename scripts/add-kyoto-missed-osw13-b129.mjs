// Kyoto priority (kyoto-missed), worker osw13, batch 129 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 釜座二条 丸福, 四都物語, 酒と鮨とオトコマエ食堂 京都駅前七条店, 東本願寺 (O-sai shojin meal). Brands checked against queue-status, data/kyoto.json, than.co.jp/brands and 株式会社WILL (none match; オトコマエ食堂 is a small group — 3 shops in a Feb 2024 release — flagged).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-129');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26021238', 'retail food shop (Greg 11-07 ruling): ふたえ (FUTAE) is a take-away matcha-sweets shop (terrines, gâteaux chocolat; a 2017 reviewer was told it is take-away only); newest review November 2024; no founding date or GF/vegan options sourced');

// ================================================================ 釜座二条 丸福
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26017320/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:15']);
  put({
    id: 'kyoto_kamanza_nijo_marufuku', name: '釜座二条 丸福 (Kamanza Nijo Marufuku)', category: 'OMNI',
    lat: 35.013717, lng: 135.755675, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sushi and sashimi with soy sauce, kara-age, spring rolls, nama-fu dengaku, udon and fried potatoes (2025–2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya — sashimi, sushi, grilled fish, monkfish liver, duck, beef tendon (2025–2026 reviews).',
    hours_raw: 'Tabelog: daily 17:00–23:15; open year-round with occasional temporary closures. Reservations taken; tatami rooms book up. Please don\'t come by bicycle (the listing asks this to prevent drunk riding). Orders by tablet at the table (June 2025; April 2026). 78 seats: 6 at the counter, 30 at tables, 42 in tatami rooms; private rooms for 6 to 30. Non-smoking, with a separate smoking room. Cards, e-money and PayPay. On Nijo-dori west of Kamanza, in a quiet residential area, about 10 min from Karasuma Oike.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nijo-dori west of Kamanza — 10 min from Karasuma Oike',
    cuisine: 'A roomy, good-value seafood izakaya in a residential side street, known for thick-cut sashimi and real sushi, plus rare sake (Tabelog; 2025–2026 reviews) · sashimi platter of six kinds, thick-cut; seared kinmedai sashimi; remora sashimi when caught (June 2025) · assorted nigiri ¥1,500 (August 2025); thin rolls · grilled salmon belly; squid; grilled edamame; monkfish liver · fist-sized kara-age; shrimp and cheese spring rolls; fried small potatoes; homemade lotus-root cakes (2025–2026) · kazunoko tosa-style; potato salad; roast duck; nama-fu dengaku; beef tendon with Kujo leeks; squid wrapped in shiso (March 2026) · buri-shabu course ¥5,000 with zosui (March 2026); all-you-can-drink courses · zaru udon to finish · Aramasa sake by the glass ¥1,100 (August 2025)',
    website: null, gmaps: gm('釜座二条 丸福'), menu_url: TB + 'dtlmenu/',
    notes: '[Seafood izakaya · Nijo-Kamanza, thick sashimi and real sushi] A busy, friendly izakaya tucked into a residential street: generous thick-cut sashimi, proper nigiri, huge kara-age and a sake list that includes rare bottles by the glass. About ¥4,000–6,000. Tatami rooms for groups. Open daily from 5 pm.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reviewers (2025–2026) describe a beloved local izakaya with friendly, quick staff, many regulars returning several times a year, and big groups in the upstairs tatami rooms. It posts unusual catches, such as remora, on Instagram (June 2025).',
      philosophy: null,
      specialty: 'Sashimi platters; sushi; sake.',
      anecdotes: [
        { text: 'September 2026: "The assorted sashimi is impressively thickly cut… Don\'t underestimate it as just \'izakaya sushi\'—this is the real deal."', source: R + 'B195666457/' },
        { text: 'August 2025: "I discovered a place where you can enjoy this coveted sake for just JPY 1,100 a glass!… The standout is the assorted sushi platter (JPY 1,500)."', source: R + 'B512889698/' },
        { text: 'June 2025: "They have switched to a touch panel for ordering, which felt a bit impersonal, but the staff were friendly."', source: R + 'B508087642/' },
      ],
      japanese_sources_summary: '食べログ: 釜座二条 丸福、居酒屋・寿司・海鮮、中京区二条通釜座西入正行寺町669、烏丸御池から徒歩約10分、毎日17:00〜23:15、年中無休 (臨時休業あり)、予約可、自転車での来店はご遠慮を (飲酒運転防止)、78席 (カウンター6・テーブル30・座敷42)、個室 (6〜30名)、禁煙 (喫煙室あり)、カード・電子マネー・PayPay可。口コミ (2025年6月〜2026年10月、英語): 住宅街の海鮮居酒屋、厚切りの刺身の盛り合わせ、握りの盛り合わせ1,500円、金目鯛の炙り、コバンザメの刺身、あん肝、鮭ハラスの焼き物、げんこつのような唐揚げ、えびとチーズの春巻き、れんこん餅、数の子の土佐和え、鴨ロース、生麩田楽、牛すじと九条ねぎ、ぶりしゃぶのコース5,000円、ざるうどん、Aramasaの日本酒1杯1,100円、タブレットで注文、常連が多い。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B195666457', 'B508087642', 'B512889698', 'B516175423', 'B524653331', 'B525392409', 'B527091979', 'B529400376', 'B533488765', 'B537152952'])) },
    cultural_comfort: { level: 'friendly', note: 'Tablet ordering; tatami rooms for groups; no bicycles please.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通釜座西入正行寺町669',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated June 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.013717, 135.755675); GSI lot 京都府京都市中京区正行寺町669番地 about 17m away; nearest pin kyoto_sashi_nijo 86.8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512889698/', R + 'B525392409/', R + 'B524653331/'],
    price_note: 'Prices from August 2025 and March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Assorted nigiri', '¥1,500', 'Sushi', 'no', 'no', 'August 2025.', 'nigiri_moriawase'),
      it('', '', 'Sashimi platter (6 kinds)', '', 'Sashimi', 'ask', 'no', 'March 2026.', 'sashimi_moriawase'),
      it('', '', 'Buri-shabu course', '¥5,000', 'Course', 'no', 'no', 'March 2026.', 'buri_shabu'),
      it('', '', 'Grilled salmon belly', '', 'Grilled', 'ask', 'no', 'September 2026.', 'harasu'),
      it('', '', 'Chicken kara-age', '', 'Fried', 'no', 'no', 'September 2026.', 'karaage'),
    ] }, {
    cuisine: '住宅街の路地にある広くて手頃な海鮮居酒屋。厚切りの刺身と本格的な寿司、珍しい日本酒 (食べログ、2025〜2026年の口コミ)・厚切りの刺身6種の盛り合わせ、金目鯛の炙りの刺身、入荷時のコバンザメの刺身 (2025年6月)・握りの盛り合わせ1,500円 (2025年8月)、細巻き・鮭ハラスの焼き物、いか焼き、焼き枝豆、あん肝・こぶしほどの唐揚げ、えびとチーズの春巻き、小いものフライ、自家製のれんこん餅 (2025〜2026年)・数の子の土佐和え、ポテトサラダ、鴨のロースト、生麩田楽、牛すじと九条ねぎの炒め物、いかのしそ巻き (2026年3月)・雑炊で締めるぶりしゃぶのコース5,000円 (2026年3月)、飲み放題のコース・締めのざるうどん・Aramasaの日本酒1杯1,100円 (2025年8月)',
    neighborhood: '二条通、釜座の西。烏丸御池から徒歩10分',
    gf_detail: 'グルテンフリーではない: しょうゆの寿司と刺身、唐揚げ、春巻き、生麩田楽、うどん、揚げたいも (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 海鮮居酒屋。刺身、寿司、焼き魚、あん肝、鴨、牛すじ (2025〜2026年の口コミ)。',
    notes: '[海鮮居酒屋・二条釜座、厚切りの刺身と本格寿司] 住宅街の路地にある、にぎやかで気さくな居酒屋。たっぷりの厚切りの刺身、きちんとした握り、大きな唐揚げに、珍しい銘柄もある日本酒をグラスで。4,000〜6,000円ほど。座敷は団体向き。毎日17時から。',
  });
}

// ================================================================ 四都物語
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26011710/'; const R = TB + 'dtlrvwlst/';
  const A = ['17:30', '24:00'], F = ['17:30', '25:00'];
  put({
    id: 'kyoto_yonto_monogatari', name: '四都物語 (Yonto Monogatari)', category: 'OMNI',
    lat: 35.008188, lng: 135.751457, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, monjayaki and yakisoba batters and noodles with okonomiyaki sauce (2021–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: okonomiyaki with pork, squid, beef and egg, and dashi; tofu dishes are made with dashi too (2021–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu, Sun 17:30–24:00; Fri–Sat 17:30–25:00; closed Wednesday. Reservations taken; omakase courses with all-you-can-drink. Prices shown before tax (March 2025). Cash only: no cards, e-money or QR codes. Non-smoking. Private rooms. Tanks of axolotls, frogs and reptiles at the entrance; celebrity autographs on the walls. On Horikawa-dori at Sanjo, 8 min from Nijojo-mae.',
    hours: { 0: [A], 1: [A], 3: [A], 4: [F], 5: [F], 6: [A] }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Sanjo-Horikawa — 8 min from Nijojo-mae',
    cuisine: 'A late-night okonomiyaki house cooking the "four cities" styles — Osaka, Tokyo monja, Hiroshima and its own fluffy Kyoto-tofu okonomiyaki (Tabelog; 2021–2026 reviews) · fluffy Kyoto-tofu okonomiyaki (pork, squid, beef), eaten with dashi like Akashi-yaki (2021–2026) · tofu Hiroshima-style okonomiyaki; Hiroshima-style with pork ¥790 (2025–2026) · monjayaki; yakisoba with pork (and shrimp) · sujikon (beef tendon and konnyaku); sujipiri-yaki ¥869; pork tamagoyaki ¥690; dashimaki ¥490; garlic-salt gizzards ¥690 (2023–2025) · chilled Kyoto tofu; tofu steak; homemade tofu salad · draft beer ¥490; large Asahi ¥759',
    website: null, gmaps: gm('四都物語 お好み焼き 三条堀川'), menu_url: null,
    notes: '[Okonomiyaki · Sanjo-Horikawa, four cities\' styles till late] A quirky, cluttered okonomiyaki shop (formerly "Ganbare Okonomiyaki") with an aquarium of axolotls by the door: try the fluffy Kyoto-tofu okonomiyaki dipped in dashi or the tofu Hiroshima-style, plus monja and yakisoba. About ¥2,000–4,000. Cash only. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; keeps the aquariums)'], origin: null,
      background: 'Reviewers note it was previously named "Ganbare Okonomiyaki" and is run by the same people (March and December 2025); "Yonto" refers to Kyoto, Tokyo, Osaka and Hiroshima. An October 2025 diner saw a team of four; a February 2025 reviewer mentions the owner\'s pets, axolotls and frogs. Criticisms: oily yakisoba (August 2024), and a tiny ¥500 soft drink and a burnt monjayaki (April 2026).',
      philosophy: null,
      specialty: 'Kyoto-tofu okonomiyaki; Hiroshima-style with tofu.',
      anecdotes: [
        { text: 'September 2026: "The \'Tofu Hiroshima-style Okonomiyaki\' here is simply too delicious… The punchy sauce and the umami of the ingredients, combined with the tofu, create an unbelievably exquisite creaminess."', source: R + 'B526971678/' },
        { text: 'March 2025: "Upon entering the restaurant, I was greeted by a somewhat cluttered assortment of plants and decorations, giving off a Showa-era vibe."', source: R + 'B510550249/' },
        { text: 'April 2026: "When they brought the monjayaki, they said it was ready to eat, but it was burnt and not tasty at all."', source: R + 'B527248154/' },
      ],
      japanese_sources_summary: '食べログ: 四都物語、お好み焼き、中京区三条通堀川西入下八文字町688、二条城前から徒歩8分、月・火・木・日17:30〜24:00、金・土17:30〜25:00、水曜休み、予約可、カード・電子マネー・QR不可、禁煙、個室あり。口コミ (2021年11月〜2026年9月、英語): 旧店名は「Ganbare」のお好み焼き、大阪・東京 (もんじゃ)・広島・京都の4つの都の粉もん、京都の豆腐のふわふわのお好み焼きをだしで (Akashi-yaki風)、豆腐入りの広島焼き、豚の広島焼き790円、もんじゃ、焼きそば、すじこん、すじぴり焼き869円、豚玉子焼き690円、だし巻き490円、砂肝690円、冷ややっこ、豆腐ステーキ、豆腐サラダ、入口にウーパールーパーやカエルの水槽、有名人のサイン、税抜き表示、焼きそばが油っぽい・ソフトドリンクが小さい・もんじゃが焦げていたとの声。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B432459269', 'B443097914', 'B454104559', 'B472444158', 'B488423814', 'B490004456', 'B510550249', 'B521363198', 'B526971678', 'B527248154', 'B527269431'])) },
    cultural_comfort: { level: 'friendly', note: 'Cash only; reptiles and amphibians in tanks at the entrance.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通堀川西入下八文字町688',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.008188, 135.751457); GSI lot 京都府京都市中京区下八文字町688番地 about 44m away; nearest pin (Google place) 65.6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B488423814/', R + 'B510550249/', R + 'B472444158/'],
    price_note: 'Prices from 2023–2025 reviews (shown before tax).', last_checked: TODAY, items: [
      it('', '', 'Kyoto-tofu fluffy okonomiyaki', '', 'Okonomiyaki', 'no', 'no', '2021–2026.', 'tofu_okonomiyaki'),
      it('', '', 'Hiroshima-style okonomiyaki with pork', '¥790', 'Okonomiyaki', 'no', 'no', 'March 2025.', 'hiroshima_pork'),
      it('', '', 'Sujipiri-yaki (beef tendon)', '¥869', 'Teppan', 'no', 'no', 'October 2025.', 'sujipiri'),
      it('', '', 'Dashimaki', '¥490', 'Egg', 'ask', 'no', 'March 2025.', 'dashimaki'),
      it('', '', 'Monjayaki', '', 'Teppan', 'no', 'no', 'April 2026.', 'monja'),
    ] }, {
    cuisine: '大阪、東京のもんじゃ、広島、そして自慢の京都の豆腐のふわふわのお好み焼きと、「四都」の流儀で焼く夜遅くまでのお好み焼き屋 (食べログ、2021〜2026年の口コミ)・豆腐のふわふわのお好み焼き (豚、いか、牛)、Akashi-yakiのようにだしにつけて (2021〜2026年)・豆腐入りの広島風お好み焼き、豚の広島風790円 (2025〜2026年)・もんじゃ焼き、豚の焼きそば (えびも)・すじこん、すじぴり焼き869円、豚玉子焼き690円、だし巻き490円、砂肝のにんにく塩焼き690円 (2023〜2025年)・京都の冷ややっこ、豆腐ステーキ、自家製の豆腐サラダ・生ビール490円、アサヒの大瓶759円',
    neighborhood: '三条堀川。二条城前から徒歩8分',
    gf_detail: 'グルテンフリーではない: お好み焼き、もんじゃ、焼きそばの生地や麺とソース (2021〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 豚、いか、牛、卵、だしのお好み焼き。豆腐の料理もだしを使う (2021〜2026年の口コミ)。',
    notes: '[お好み焼き・三条堀川、四都の流儀で夜遅くまで] 入口にウーパールーパーの水槽がある、ちょっと雑多で個性的なお好み焼き屋 (旧店名「Ganbare」)。だしにつけて食べる京都の豆腐のふわふわのお好み焼きや豆腐入りの広島焼き、もんじゃ、焼きそば。2,000〜4,000円ほど。現金のみ。水曜休み。',
  });
}

// ================================================================ 酒と鮨とオトコマエ食堂 京都駅前七条店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26045826/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '24:00']);
  put({
    id: 'kyoto_otokomae_shokudo_nanajo', name: '酒と鮨とオトコマエ食堂 京都駅前七条店 (Otokomae Shokudo, Shichijo)', category: 'OMNI',
    lat: 34.989447, lng: 135.761983, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sushi and sashimi with soy sauce, fried eggplant gyoza and other fried dishes (September–October 2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood izakaya — nigiri, sashimi platters, tuna yukke (2026 reviews).',
    hours_raw: 'Tabelog: daily 15:00–24:00. Reopened on 19 September 2026 after renovation under this name (2026 reviews). Reservations taken. 75 seats. Cards, e-money and QR codes. A tuna-cutting show on the third Saturday of each month, with the fresh cuts sold at special prices (October 2026). About 6 min from Kyoto Station\'s Karasuma exit, 535 m from Shichijo.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Kyoto Station — 6 min from the Karasuma exit',
    cuisine: 'A large sushi-and-sake izakaya by Kyoto Station, reopened in September 2026, with fish bought direct from ports nationwide (Tabelog; September–October 2026 reviews) · omakase nigiri: 5 pieces ¥989; 7-piece set; à la carte nigiri from about ¥249–274, e.g. toro sardine ×2 ¥274 · "Otokomae" sashimi platter of ten kinds, including aged fish, ¥1,699 · tuna yukke; ice-goby (shirauo) sashimi · eggplant gyoza (gyoza filling between fried eggplant) ¥649; dashimaki ¥649; fried dishes · crema catalana · sake from around Japan',
    website: null, gmaps: gm('酒と鮨とオトコマエ食堂 京都駅前七条店'), menu_url: null,
    notes: '[Sushi izakaya · Kyoto Station, cheap nigiri from 3 pm] A big, newly refitted seafood izakaya near the station: nigiri from about ¥250, a ten-kind sashimi platter for ¥1,699, crisp eggplant gyoza and sake, from mid-afternoon to midnight. Monthly tuna-cutting show. About ¥2,000–5,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Part of the Otokomae Shokudo seafood-izakaya group; a February 2024 press release from 株式会社すぎうら listed three shops (Kyoto Ekimae, Saiin, LINKS UMEDA). This shop reopened under its current name on 19 September 2026 (October 2026 reviews), sourcing fish directly from ports and vegetables from contract farms, with chefs trained in Japanese cuisine. The four reviews so far read promotionally.',
      philosophy: '"Local sourcing" and regional dishes paired with sake (October 2026 review).',
      specialty: 'Nigiri; sashimi platters; eggplant gyoza.',
      anecdotes: [
        { text: 'October 2026: "The restaurant hosts a monthly event on the third Saturday, featuring a tuna cutting show… After the cutting, the fresh parts are offered at special prices."', source: R + 'B538023585/' },
        { text: 'October 2026: "Otokomae Sashimi Assortment 10 Pieces ¥1,699… Eggplant Gyoza ¥649. These gyoza are made with eggplant wrapping the filling and then deep-fried."', source: R + 'B537280832/' },
      ],
      japanese_sources_summary: '食べログ: 酒と鮨とオトコマエ食堂 京都駅前七条店、居酒屋、下京区材木町497-4、七条から535m、毎日15:00〜24:00、予約可、カード・電子マネー・QR可。口コミ (2026年9〜10月、英語、4件): 2026年9月19日に改装して再開、75席、全国の漁港から直接仕入れる魚、おまかせ握り5貫989円、トロいわし2貫274円、握りは249〜274円から、オトコマエ刺身盛り10種1,699円 (熟成魚)、まぐろのユッケ、しらうおの刺身、なすの餃子649円、だし巻き649円、カタラーナ、毎月第3土曜にまぐろの解体ショー。株式会社すぎうらの2024年2月のプレスリリースではオトコマエ食堂は京都駅前店・西院店・LINKS UMEDA店の3店舗。',
      confidence: 'low', sources: [TB, 'https://gurunavi.com/en/kacg606/rst'].concat(rv(R, ['B536032380', 'B537280832', 'B538023585', 'B538072572'])) },
    cultural_comfort: { level: 'english_friendly', note: 'Large, casual station-area izakaya; opens at 3 pm.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区材木町497-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (reopened 19 September 2026) with reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB} (34.989447, 135.761983); GSI lot 京都府京都市下京区材木町497番地 about 29m away; nearest pin kyoto_osakana_dekoboko 85.4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536032380/', R + 'B537280832/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase nigiri (5 pieces)', '¥989', 'Sushi', 'no', 'no', 'September 2026.', 'omakase_nigiri'),
      it('', '', 'Otokomae sashimi platter (10 kinds)', '¥1,699', 'Sashimi', 'ask', 'no', 'October 2026.', 'sashimi_10'),
      it('', '', 'Eggplant gyoza', '¥649', 'Fried', 'no', 'no', 'October 2026.', 'nasu_gyoza'),
      it('', '', 'Dashimaki', '¥649', 'Egg', 'ask', 'no', 'October 2026.', 'dashimaki'),
    ] }, {
    cuisine: '2026年9月に改装して再開した京都駅近くの大きな寿司と酒の居酒屋。全国の漁港から直接仕入れる魚 (食べログ、2026年9〜10月の口コミ)・おまかせ握り5貫989円、7貫のセット、単品の握りは249〜274円ほどから、トロいわし2貫274円・熟成魚も入る10種の「オトコマエ」刺身盛り1,699円・まぐろのユッケ、しらうおの刺身・なすで餡をはさんで揚げたなすの餃子649円、だし巻き649円、揚げ物・カタラーナ・全国の日本酒',
    neighborhood: '京都駅の近く。烏丸口から徒歩6分',
    gf_detail: 'グルテンフリーではない: しょうゆの寿司と刺身、なすの餃子などの揚げ物 (2026年9〜10月の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 寿司と海鮮の居酒屋。握り、刺身の盛り合わせ、まぐろのユッケ (2026年の口コミ)。',
    notes: '[寿司居酒屋・京都駅、15時から手頃な握り] 駅近くの改装したての大きな海鮮居酒屋。握りは250円ほどから、10種の刺身盛り1,699円、カリッとしたなすの餃子と日本酒を、昼下がりから24時まで。毎月まぐろの解体ショー。2,000〜5,000円ほど。',
  });
}

// ================================================================ 東本願寺 (O-sai shojin meal)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26040954/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_higashi_honganji_osai', name: '東本願寺 (Higashi Hongan-ji, O-sai shojin meal)', category: 'SHOJIN',
    lat: 34.990931, lng: 135.758471, cuisine_type: 'shojin',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. A Buddhist vegetarian meal with simmered yuba and vegetables (likely soy-seasoned) and yuba tempura (February 2024); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask — very promising. Tabelog lists vegan and vegetarian options; a June 2025 diner says no animal products were used and the clear soup was made with shiitake rather than an animal dashi. Confirm when booking.',
    hours_raw: 'Tabelog: by advance reservation only — book at least four days ahead; changes in numbers after that and same-day cancellations incur fees. A lunch of shojin-style "O-sai" about ¥4,000 (2024–2026). Served at tables with chairs, usually in the Shiroshoin, a hall not normally open to the public, reached through private corridors past the Noh stage; the venue can change with events and numbers (June 2025). Words of thanks are recited before and after the meal. 110 seats. Non-smoking. Cards; no e-money or QR codes. Parking, first come first served. At Higashi Hongan-ji on Karasuma-dori north of Shichijo, 5 min from Gojo Station exit 8.',
    hours: {}, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi Hongan-ji, Karasuma-Shichijo — 10 min from Kyoto Station',
    cuisine: 'A reservation-only shojin lunch served inside Higashi Hongan-ji, following the temple tradition of "O-sai" meals at Buddhist gatherings, made without animal products (Tabelog; 2024–2026 reviews) · O-sai course about ¥4,000 (2024–2026) · seasoned rice; clear soup with rapeseed greens and yuba; two simmered dishes of yuba and seasonal vegetables; tempura of yuba and vegetables (February 2024) · clear soup based on shiitake rather than animal dashi; lightly seasoned (June 2025)',
    website: null, gmaps: gm('東本願寺'), menu_url: null,
    notes: '[Shojin · Higashi Hongan-ji, a temple meal in a private hall] Book ahead for the temple\'s own vegetarian "O-sai" lunch (about ¥4,000): a monk leads you through closed corridors to the Shiroshoin, where yuba, seasonal vegetables and rice are served at tables, with words of thanks before and after. Tabelog lists vegan options. Reservations at least four days ahead.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A Jodo Shinshu temple (February 2025 review). Reviewers explain that the meal follows the custom of "O-sai", food shared by people gathered for memorial services and lectures, and that a monk guides diners to the hall and explains the route (February 2024; February 2025). Guests have come after memorial services (September 2026). The temple square also hosts a monthly night market (January 2026).',
      philosophy: 'A meal of gratitude, with words recited before and after eating (2024–2026 reviews).',
      specialty: 'Shojin O-sai lunch.',
      anecdotes: [
        { text: 'June 2025: "Since no animal products were used, I was able to appreciate the flavors of the ingredients as I ate. The clear soup seemed to be made with shiitake mushrooms instead of animal-based dashi."', source: R + 'B508699706/' },
        { text: 'February 2024: "After completing the check-in, a monk guided me through a long corridor to my dining room, providing explanations along the way."', source: R + 'B487315001/' },
        { text: 'March 2024: "A reservation is required in advance, and the price is JPY 4000. You will be dining in the exclusive Shiroshoin, which is usually not open to the public."', source: R + 'B481817158/' },
      ],
      japanese_sources_summary: '食べログ: 東本願寺、その他、下京区烏丸通七条上ル、地下鉄五条駅8番出口から徒歩5分、要予約 (4日前まで、以後の人数変更と当日キャンセルは料金あり)、110席 (テーブルか座敷は選べず、会場は変わることあり)、禁煙、カード可、電子マネー・QR不可、駐車場あり (先着順)、野菜にこだわる、ヘルシーメニュー、ヴィーガンメニューあり、ベジタリアンメニューあり。口コミ (2024年2月〜2026年10月、英語): 浄土真宗の「O-sai」の精進料理約4,000円、ふだん非公開のShiroshoinで、僧侶が案内、食前と食後のことば、炊き込みご飯、菜の花と湯葉のお吸い物、湯葉と季節の野菜の炊き合わせ、湯葉と野菜の天ぷら (2024年2月)、動物性の食材を使わず、しいたけのだし (2025年6月)、法要の後の食事、境内の夜市 (2026年1月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B481817158', 'B487315001', 'B503441393', 'B508699706', 'B521651496', 'B535486535', 'B535675786', 'B537309816'])) },
    cultural_comfort: { level: 'japanese', note: 'Book 4+ days ahead; a monk guides you; words recited before and after the meal.' },
    safety: { ...SAFETY0, positives: ['Tabelog lists vegan and vegetarian options.', 'June 2025 review: no animal products; the soup uses shiitake, not animal dashi.'] },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区烏丸通七条上ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2024 to October 2026.' },
    pin_source: `Tabelog ${TB} (34.990931, 135.758471); the address is a street direction for the whole temple (烏丸通七条上ル) and GSI matches only 下京区, so approximate; the meal is served in the Shiroshoin inside the temple grounds; nearest pin kyoto_kyoto_ito 167.3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B481817158/', R + 'B487315001/', R + 'B508699706/'],
    price_note: 'Course price from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'O-sai shojin lunch (reservation only)', 'about ¥4,000', 'Course', 'ask', 'ask', '2024–2026; no animal products per a June 2025 review.', 'osai'),
    ] }, {
    cuisine: '東本願寺の中で出される予約制の精進の昼食。仏事に集う人々の食事「O-sai」の伝統にならい、動物性の食材を使わない (食べログ、2024〜2026年の口コミ)・O-saiのコース約4,000円 (2024〜2026年)・炊き込みご飯、菜の花と湯葉のお吸い物、湯葉と季節の野菜の炊き合わせ2品、湯葉と野菜の天ぷら (2024年2月)・動物性のだしではなくしいたけのお吸い物、やさしい味つけ (2025年6月)',
    neighborhood: '東本願寺、烏丸七条。京都駅から徒歩10分',
    gf_detail: '要確認 (予約時に): 湯葉と野菜の炊き合わせ (しょうゆ味と思われる) や湯葉の天ぷらのある精進料理 (2024年2月)。グルテンの情報はない。',
    vegan_detail: '要確認 (とても期待できる): 食べログにヴィーガンとベジタリアンのメニューありとあり、2025年6月の口コミでは動物性の食材を使わず、お吸い物は動物性のだしではなくしいたけ。予約時に確認を。',
    notes: '[精進料理・東本願寺、非公開の書院で精進の昼食] 寺の精進の「O-sai」の昼食 (約4,000円) を予約して。僧侶の案内で非公開の廊下を通りShiroshoinへ。湯葉、旬の野菜、ご飯をテーブルで、食前と食後のことばとともに。食べログにヴィーガンメニューあり。予約は4日前まで。',
  });
}

save();
