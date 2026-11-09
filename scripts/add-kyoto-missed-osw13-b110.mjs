// Kyoto priority (kyoto-missed), worker osw13, batch 110 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: Restaurant 幹, カフェ カワタロ, 京酒房 藤かわ, 韓食 南家.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-110');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26033370', 'chain: アランチーノ KYOTO — arancino-japan.com lists five same-name shops (Arancino OSAKA, Arancino KYOTO and three in Hawaii: on Beachwalk, di Mare, at The Kahala); the Kyoto shop invoices as 株式会社イデア (NTA T9120901022816)');

// ================================================================ Restaurant 幹
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26024472/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_restaurant_miki', name: 'Restaurant 幹 (Restaurant Miki)', category: 'OMNI',
    lat: 35.011861, lng: 135.766336, cuisine_type: 'french',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: French kaiseki courses with bread, quiche, a crab cream croquette and sauces (2016–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and beef courses with flan, cheesecake and ice cream (2016–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Wed–Sun and holidays 12:00–15:00 (lunch by reservation only) and 18:00–22:00; closed Tuesday. Reservations taken; walk-ins welcome at dinner (Tabelog). Cards. 14 seats: 6 at the counter, tables (2019 review); private hire up to 20. Non-smoking. Ask about dishes for children. 1st floor of the 彩花亭ビル on Gokomachi north of Oike, 3 min from Kyoto Shiyakusho-mae. Opened 1 July 2014.',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gokomachi north of Oike, west of City Hall — 3 min walk from Kyoto Shiyakusho-mae',
    cuisine: 'A small "French kaiseki" restaurant: seasonal French courses served in Japanese tableware and eaten with chopsticks (Tabelog; 2016–2026 reviews) · lunch courses ¥3,300 and ¥5,300 (2016; March 2018) · dinner course ¥6,300 (October 2019) · hassun-style appetizers; flounder and grapefruit carpaccio; chilled soups; pan-seared sawara with pipérade; pork shoulder braised in beer; fillet steak; rice and pickles; dessert platter (2016–2025) · crab cream croquette (2018) · lobster soup and Western chawanmushi (2019) · fillet steak and abalone; asparagus ice cream (April 2026)',
    website: 'http://www.kyoto-restaurantmiki.com/', gmaps: gm('Restaurant 幹 京都 御幸町'), menu_url: TB + 'dtlmenu/',
    notes: '[French kaiseki · Gokomachi-Oike near City Hall, French with chopsticks] A homely counter where the chef cooks seasonal French courses in kaiseki style — hassun-like appetizers, carpaccio, chilled soups, fillet steak, then rice and pickles — all eaten with chopsticks. Lunch from about ¥3,300 (book ahead), dinner ¥6,000–15,000. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Opened 1 July 2014 (Tabelog). The listing says the owner has over ten years in French cuisine; 2016 and 2019 reviewers write that he trained at Okumura (romaji as given; Ichijoji and Gion per the 2019 reviewer). A February 2021 reviewer says the owner runs it alone; August 2025 and April 2026 reviewers describe the chef and his wife running it together. Criticism: "lacks distinctiveness" (October 2016).',
      philosophy: 'Casual French dining with chopsticks in a Japanese setting (Tabelog).',
      specialty: 'French kaiseki courses.',
      anecdotes: [
        { text: 'October 2019: "The chef trained at Okumura in Ichijoji and Gion, and the presentation of the dishes is reminiscent of the master Okumura."', source: R + 'B420927673/' },
        { text: 'April 2026: "I highly recommend the counter seats, where you can enjoy a delightful time chatting with the couple who run the place."', source: R + 'B526976966/' },
      ],
      japanese_sources_summary: '食べログ: Restaurant 幹、日本料理・フレンチ、中京区御幸町御池上ル亀屋町397-1 彩花亭ビル1F、京都市役所前駅から徒歩3分、月・水〜日・祝日12:00〜15:00 (昼は予約制)・18:00〜22:00、火曜休み、予約可 (当日の来店も歓迎)、カード可、14席、貸切20名まで、禁煙、2014年7月1日オープン、フレンチ歴10年以上の店主による箸で食べるフレンチ懐石。口コミ (2016年4月〜2026年8月、英語): 昼のコース3,300円・5,300円、夜のコース6,300円 (2019年)、八寸風の前菜、ヒラメとグレープフルーツのカルパッチョ、冷製スープ、鰆のポワレ、豚肩肉のビール煮込み、牛ヒレ、蟹クリームコロッケ、オマール海老のスープ、あわび、アスパラのアイス、Okumuraで修業した料理人、一人で営む (2021年)、料理人と奥さんの二人で営む (2025年・2026年)、個性に欠けるとの声 (2016年)。',
      confidence: 'medium', sources: [TB, 'http://www.kyoto-restaurantmiki.com/'].concat(rv(R, ['B193548467', 'B204750539', 'B213035996', 'B338663342', 'B420927673', 'B435933199', 'B482443097', 'B483539249', 'B483547831', 'B511316629', 'B526976966', 'B534619617'])) },
    cultural_comfort: { level: 'japanese', note: 'Counter with the chef couple; chopsticks only; lunch by reservation.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区御幸町御池上ル亀屋町397-1 彩花亭ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated April and August 2026.' },
    pin_source: `Tabelog ${TB} (35.011861, 135.766336); GSI lot 京都府京都市中京区亀屋町397番地 about 43m away; nearest pin ChIJ2T2SU0wJAWARoYBoPnI08PQ 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B204750539/', R + 'B420927673/'],
    price_note: 'Prices from 2016–2019 reviews; current prices not given.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (by reservation)', '¥3,300', 'Course', 'no', 'no', 'May 2016; March 2018.', 'lunch_course'),
      it('', '', 'Dinner course', '¥6,300', 'Course', 'no', 'no', 'October 2019.', 'dinner_course'),
    ] }, {
    cuisine: '季節のフレンチを和の器で、箸でいただく小さな「フレンチ懐石」の店 (食べログ、2016〜2026年の口コミ)・昼のコース3,300円・5,300円 (2016年、2018年3月)・夜のコース6,300円 (2019年10月)・八寸風の前菜、ヒラメとグレープフルーツのカルパッチョ、冷製スープ、鰆のポワレとピペラード、豚肩肉のビール煮込み、牛ヒレ、ご飯と香の物、デザートの盛り合わせ (2016〜2025年)・蟹クリームコロッケ (2018年)・オマール海老のスープと洋風茶碗蒸し (2019年)・牛ヒレとあわび、アスパラのアイス (2026年4月)',
    neighborhood: '市役所の西、御池上ルの御幸町。京都市役所前から徒歩3分',
    gf_detail: 'グルテンフリーではない: パン、キッシュ、蟹クリームコロッケ、ソースのフレンチ懐石のコース (2016〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚介と牛肉のコース、フラン、チーズケーキ、アイス (2016〜2026年の口コミ)。',
    notes: '[フレンチ懐石・市役所近くの御幸町御池、箸で食べるフレンチ] 料理人が季節のフレンチを懐石仕立てで出すアットホームなカウンター。八寸風の前菜、カルパッチョ、冷製スープ、牛ヒレ、ご飯と香の物まで、すべて箸で。昼は3,300円ほどから (要予約)、夜は6,000〜15,000円。火曜休み。',
  });
}

// ================================================================ カフェ カワタロ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26026716/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '17:30']);
  put({
    id: 'kyoto_cafe_kawataro', name: 'カフェ カワタロ (cafe KawataRo)', category: 'OMNI',
    lat: 35.001561, lng: 135.779471, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: drinks (coffee, tea, matcha, floats) and cakes — cheesecake, gâteau chocolat, sponge and chiffon cakes (2023–2026 reviews); no gluten-free option is mentioned.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: black coffee, tea and matcha are plant-based; the cakes, lattes and ice-cream floats contain dairy or egg (2023–2026 reviews).',
    hours_raw: 'Tabelog: daily 12:00–17:30; hours and closed days may change. No credit cards — cash only (Tabelog; May 2025 and August 2026 reviews). Sofa seating facing a Japanese garden. Non-smoking. Quiet, with no music; reviewers ask visitors to keep their voices down (2025–2026). Near Kodaiji and Nene-no-michi, south of Yasaka Shrine. Opened 28 June 2014.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kodaiji, by Nene-no-michi — south of Yasaka Shrine',
    cuisine: 'A quiet garden café in a traditional house near Kodaiji (Tabelog; 2023–2026 reviews) · mango float ¥850; pink-grapefruit float ¥850; matcha with wagashi ¥1,100; matcha affogato ¥880 (May 2025) · matcha latte ¥900 (March 2026) · cake set of cheesecake and gâteau chocolat (2023; July 2026) · vanilla chiffon and Earl Grey; cheesecake and Darjeeling (August 2026) · coffee float; café au lait; chai and sponge cake',
    website: 'http://cafekawataro.com/', gmaps: gm('cafe KawataRo 高台寺'), menu_url: TB + 'dtlmenu/',
    notes: '[Garden café · Kodaiji near Nene-no-michi, a silent room facing a garden] A calm, music-free café in an old house where big windows frame a Japanese garden: cake sets, floats and matcha for about ¥900–1,500, usually without a queue even in high season. Cash only. Open daily from noon.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened 28 June 2014 (Tabelog). A March 2024 reviewer understood the house had been a traditional restaurant before becoming a café; a March 2026 reviewer found an elderly woman running everything alone. Reviewers love the garden view and quiet. Criticism: a matcha latte that tasted like instant mix at ¥900 (March 2026); weak iced coffee (July 2026).',
      philosophy: null,
      specialty: 'Cake sets and drinks with a garden view.',
      anecdotes: [
        { text: 'May 2025: "The interior had a modern Japanese style, and I could see a garden in the back! … The café was quiet, with no music playing, allowing us to enjoy our tea in peace."', source: R + 'B506259524/' },
        { text: 'March 2026: "There was an elderly woman managing everything by herself. The view is beautiful, and the interior is clean."', source: R + 'B523924627/' },
      ],
      japanese_sources_summary: '食べログ: カフェ カワタロ、カフェ、東山区高台寺鷲尾町505、毎日12:00〜17:30、営業時間・定休日は変更の可能性あり、カード不可、ソファ席、禁煙、公式サイト cafekawataro.com、2014年6月28日オープン。口コミ (2023年7月〜2026年8月、英語): 高台寺・ねねの道近くの庭を眺めるカフェ、マンゴーフロート850円、ピンクグレープフルーツフロート850円、抹茶と和菓子1,100円、抹茶アフォガート880円 (2025年5月)、抹茶ラテ900円 (2026年3月)、チーズケーキとガトーショコラのケーキセット、シフォンケーキ、音楽のない静かな店内、現金のみ、年配の女性が一人で切り盛り (2026年3月)、抹茶ラテがインスタントのようとの声 (2026年3月)。',
      confidence: 'medium', sources: [TB, 'http://cafekawataro.com/'].concat(rv(R, ['B467713532', 'B474119898', 'B480930631', 'B506259524', 'B507290813', 'B507760577', 'B514462004', 'B523924627', 'B527752840', 'B531362430', 'B534194918', 'B534342677'])) },
    cultural_comfort: { level: 'japanese', note: 'Very quiet — conversation is discouraged by regulars; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区高台寺鷲尾町505',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated April, July and August 2026.' },
    pin_source: `Tabelog ${TB} (35.001561, 135.779405) sits 5.5m from kyoto_kappou_yoshizen, so moved about 6m east to (35.001561, 135.779471), at least 11m from every pin; GSI matches only the wrong town (高畑町) — marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506259524/', R + 'B523924627/'],
    price_note: 'Prices from May 2025 and March 2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Matcha with wagashi', '¥1,100', 'Tea', 'ask', 'ask', 'May 2025.', 'matcha_wagashi'),
      it('', '', 'Mango float', '¥850', 'Drink', 'ask', 'no', 'May 2025.', 'mango_float'),
      it('', '', 'Matcha latte', '¥900', 'Drink', 'ask', 'no', 'August 2025; March 2026.', 'matcha_latte'),
      it('', '', 'Cake set (cheesecake, gâteau chocolat or chiffon)', null, 'Sweets', 'no', 'no', '2023–2026.', 'cake_set'),
    ] }, {
    cuisine: '高台寺近くの古い家の、静かな庭のカフェ (食べログ、2023〜2026年の口コミ)・マンゴーフロート850円、ピンクグレープフルーツフロート850円、抹茶と和菓子1,100円、抹茶アフォガート880円 (2025年5月)・抹茶ラテ900円 (2026年3月)・チーズケーキとガトーショコラのケーキセット (2023年、2026年7月)・バニラシフォンとアールグレイ、チーズケーキとダージリン (2026年8月)・コーヒーフロート、カフェオレ、チャイとスポンジケーキ',
    neighborhood: 'ねねの道近くの高台寺。八坂神社の南',
    gf_detail: '要確認: 飲み物 (コーヒー、紅茶、抹茶、フロート) とケーキ (チーズケーキ、ガトーショコラ、スポンジ、シフォン) (2023〜2026年の口コミ)。グルテンフリーの記載はない。',
    vegan_detail: '要確認: ブラックコーヒー、紅茶、抹茶は植物性。ケーキ、ラテ、アイスのフロートには乳製品や卵 (2023〜2026年の口コミ)。',
    notes: '[庭のカフェ・ねねの道近くの高台寺、庭を望む静かな部屋] 大きな窓から日本庭園が見える、音楽のない古い家のカフェ。ケーキセット、フロート、抹茶が900〜1,500円ほど、繁忙期でもたいてい並ばずに入れる。現金のみ。毎日昼から。',
  });
}

// ================================================================ 京酒房 藤かわ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26016510/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_kyoshubo_fujikawa', name: '京酒房 藤かわ (Kyo Shubo Fujikawa)', category: 'OMNI',
    lat: 35.012183, lng: 135.770852, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, fried conger eel, soba salad and sea-bream nyumen alongside sashimi and dashi dishes (2017–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, beef tataki, conger eel, grilled fish and dashimaki (2017–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Wed, Fri–Sun 17:30–23:00 (last entry 22:00); closed Thursday and the third Wednesday of each month. Reservations taken. Cards, IC, e-money and QR. 11 seats: 5 at the counter, 6 at tables; private hire up to 20. Non-smoking (vapour-type e-cigarettes only inside; ashtray outside). Children welcome. Down an alley off Kiyamachi south of Nijo — tell a taxi "Kiyamachi-dori Nijo-sagaru Oshikojibashi" (Tabelog); 3 min from Kyoto Shiyakusho-mae exit 2. Opened 9 July 2010.',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi south of Nijo, an alley by Oshikoji-bashi — 3 min walk from Kyoto Shiyakusho-mae',
    cuisine: 'A small kappo-izakaya down a Kiyamachi alley where the chef buys fish and vegetables at the market each morning (Tabelog; 2017–2026 reviews) · thick-cut sashimi platters (2017–2026) · beef tataki; yudofu; dashimaki; shuto; morokyu (April 2017) · lightly poached conger eel; tempura (August 2022) · Kamo eggplant dengaku; simmered young bamboo shoots (May 2023) · Kyoto-style dashimaki; sea-bream nyumen (April 2024) · soba salad; shrimp tempura; fried conger eel; grilled fish starter (September 2026) · sake in stylish glasses',
    website: 'http://kyofujikawa.com', gmaps: gm('京酒房 藤かわ 木屋町'), menu_url: TB + 'dtlmenu/',
    notes: '[Kappo izakaya · Kiyamachi-Nijo, an 11-seat alley counter] A tidy little alley restaurant off Kiyamachi where the chef cooks the morning\'s market fish — thick sashimi, conger eel, tempura, Kyoto dashimaki — with good sake, and the hostess makes first-timers feel at home. About ¥5,000–8,000. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Owner / hostess (unnamed)'], origin: null,
      background: 'Opened 9 July 2010 (Tabelog). Reviewers describe a dignified chef and a smiling hostess or owner who chat with guests and regulars (2017–2026); a November 2024 reviewer says the chef selects fish and vegetables at the market every morning, and a July 2025 reviewer notes the chef cooks alone. Criticism: very slow service one July 2025 night — about an hour before the first dish.',
      philosophy: null,
      specialty: 'Market fish; thick-cut sashimi; Japanese sake.',
      anecdotes: [
        { text: 'April 2017: "At first, we were eating in silence, feeling a bit anxious, but when we asked questions about the dishes, both the chef and the owner were very friendly and answered us kindly."', source: R + 'B259901042/' },
        { text: 'September 2026: "The sashimi platter was surprising—thick slices and incredibly tasty. The soba salad was well mixed, and the shrimp tempura and fried conger eel were fluffy."', source: R + 'B536435123/' },
      ],
      japanese_sources_summary: '食べログ: 京酒房 藤かわ、日本料理・焼酎バー、中京区木屋町通二条下る上樵木町491-4 一階、地下鉄東西線京都市役所前駅2番出口から徒歩3分、タクシーは「Kiyamachi-dori Nijo-sagaru Oshikojibashi」で路地の前、月〜水・金〜日17:30〜23:00 (最終入店22:00)、木曜と第3水曜休み、予約可、カード・交通系IC・電子マネー・QR可、11席 (カウンター5・テーブル6)、貸切20名まで、禁煙 (店内はベイプ型電子たばこのみ、外に灰皿)、子供可、2010年7月9日オープン。口コミ (2012年5月〜2026年9月、英語): 厚切りの刺身の盛り合わせ、牛のたたき、湯豆腐、だし巻き、酒盗、もろきゅう、conger eelの湯引き、天ぷら、Kamoなすの田楽、たけのこの炊いたもの、鯛にゅうめん、そばサラダ、海老の天ぷら、conger eelのフライ、毎朝市場で仕入れる料理人 (2024年11月)、料理人と女将、料理人一人で提供が非常に遅かったとの声 (2025年7月)。',
      confidence: 'medium', sources: [TB, 'http://kyofujikawa.com'].concat(rv(R, ['B259901042', 'B458478527', 'B465281490', 'B482781805', 'B490449433', 'B502812073', 'B510797563', 'B533521979', 'B536435123'])) },
    cultural_comfort: { level: 'japanese', note: 'Tiny alley counter; friendly hosts; vape-type e-cigarettes only inside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町通二条下る上樵木町491-4 一階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated August and September 2026.' },
    pin_source: `Tabelog ${TB} (35.012183, 135.770852); GSI resolves only the town 京都府京都市中京区上樵木町, about 67m away — marked approximate; nearest pin kyoto_kappou_yamashita 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536435123/'],
    price_note: 'No item prices; reviewers spent ¥5,000–7,999.', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi (thick cut)', null, 'Sashimi', 'ask', 'no', '2017–2026.', 'sashimi_moriawase'),
      it('', '', 'Beef tataki', null, 'Small dish', 'ask', 'no', 'April 2017.', 'beef_tataki'),
      it('', '', 'Dashimaki tamago', null, 'Small dish', 'ask', 'no', '2017; April 2024.', 'dashimaki'),
      it('', '', 'Fried conger eel', null, 'Fried', 'no', 'no', 'September 2026.', 'hamo_fry'),
    ] }, {
    cuisine: '木屋町の路地の小さな割烹居酒屋。料理人が毎朝市場で魚と野菜を仕入れる (食べログ、2017〜2026年の口コミ)・厚切りの刺身の盛り合わせ (2017〜2026年)・牛のたたき、湯豆腐、だし巻き、酒盗、もろきゅう (2017年4月)・conger eelの湯引き、天ぷら (2022年8月)・Kamoなすの田楽、たけのこの炊いたもの (2023年5月)・京風だし巻き、鯛にゅうめん (2024年4月)・そばサラダ、海老の天ぷら、conger eelのフライ、焼き魚の先付け (2026年9月)・おしゃれなグラスの日本酒',
    neighborhood: '二条下ルの木屋町、Oshikojibashiの路地。京都市役所前から徒歩3分',
    gf_detail: 'グルテンフリーではない: 刺身やだしの料理と並んで天ぷら、conger eelのフライ、そばサラダ、鯛にゅうめん (2017〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 刺身、牛のたたき、conger eel、焼き魚、だし巻き (2017〜2026年の口コミ)。',
    notes: '[割烹居酒屋・木屋町二条、11席の路地のカウンター] 木屋町の路地奥の小ぎれいな店。料理人がその朝の市場の魚で、厚切りの刺身、conger eel、天ぷら、京風だし巻きを作り、日本酒も。女将が初めての客も和ませてくれる。5,000〜8,000円ほど。木曜休み。',
  });
}

// ================================================================ 韓食 南家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26020740/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'kyoto_kanshoku_minamiya', name: '韓食 南家 (Korean Minamiya)', category: 'OMNI',
    lat: 35.001416, lng: 135.758342, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Korean dishes with gochujang and soy marinades, chijimi, kimbap, tteokbokki, cold noodles and udon to finish (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: samgyeopsal, bossam, dakhanmari, octopus kimchi (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Wed–Sun 17:00–22:30 (L.O. 22:00); closed Tuesday and some irregular days. Reservations taken. Many dishes are for two or more (2026 reviews). Cards, PayPay, Alipay, WeChat Pay. 56 seats; semi-private rooms for 10–20; private hire for 20–50. Non-smoking (smoking area outside). English and Chinese menus; English- and Korean-speaking staff. Children welcome. A townhouse on Bukkoji-dori east of Muromachi, 1 min from Karasuma (Hankyu) or Shijo exit 6. Opened 8 August 2012. Operator ミナミ・アンド・コー株式会社 (NTA invoice register).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Bukkoji-dori east of Muromachi, Shijo-Karasuma — 1 min walk from Shijo or Karasuma',
    cuisine: 'A townhouse Korean restaurant known for samgyeopsal grilled at the table by staff (Tabelog; 2025–2026 reviews) · samgyeopsal in about six styles — herb, gochujang, beef, horumon — with sesame leaves and dips (2025–2026) · pork bossam ¥1,480; octopus kimchi ¥500; makgeolli ¥600, homemade fruit makgeolli ¥700 (February 2026) · dakhanmari with udon to finish (March 2026) · chukumi (spicy baby octopus) (March 2026) · chijimi, kimbap, half-chicken tteokbokki, garlic chicken, cold noodles, fried rice (2025–2026)',
    website: 'https://site.locaop.jp/korean.minamiya', gmaps: gm('韓食 南家 烏丸 仏光寺'), menu_url: TB + 'dtlmenu/',
    notes: '[Korean · Bukkoji near Shijo-Karasuma, a townhouse samgyeopsal house] A roomy Kyoto townhouse where staff grill and cut your samgyeopsal at the table — herb, gochujang and more — with bossam, dakhanmari, chijimi and lots of makgeolli. About ¥5,000–6,000. Many dishes are for two. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)', 'Operator: ミナミ・アンド・コー株式会社 (NTA invoice register)'], origin: null,
      background: 'Opened 8 August 2012 (Tabelog). Reviewers describe attentive staff who grill the meat for diners and plentiful banchan (2025–2026). Criticism: loud neighbours behind a partition that staff did not address (August 2025); a table by the toilet (October 2025); a single toilet (January 2026); many dishes for two or more only (February and October 2026); chijimi served cold (March 2026); little explanation of the dips (March 2026).',
      philosophy: null,
      specialty: 'Samgyeopsal; bossam; dakhanmari.',
      anecdotes: [
        { text: 'July 2025: "The staff cooks the samgyeopsal for you and prepares everything until it\'s ready to eat, which is really helpful!"', source: R + 'B510727942/' },
        { text: 'March 2026: "The Dakhanmari was rich in chicken flavor, and the broth was exquisite. The Korean udon served at the end had a great chewy texture."', source: R + 'B525231058/' },
      ],
      japanese_sources_summary: '食べログ: 韓食 南家、韓国料理・焼肉、下京区仏光寺通室町東入釘隠町234、阪急烏丸駅から徒歩1分・地下鉄四条駅6番出口から徒歩1分、月・水〜日17:00〜22:30 (L.O.22:00)、火曜休み、不定休あり、予約可、カード・PayPay・Alipay・WeChat Pay可、56席、半個室 (10〜20名)、貸切20〜50名、禁煙 (店外に喫煙所)、英語・中国語メニュー、英語・韓国語対応スタッフ、子供可、2012年8月8日オープン。インボイス登録はミナミ・アンド・コー株式会社 (国税庁)。口コミ (2025年7月〜2026年10月、英語): スタッフが焼くサムギョプサル (ハーブ、コチュジャン、牛、ホルモンなど6種ほど)、エゴマの葉、ポッサム1,480円、タコキムチ500円、生マッコリ600円、自家製フルーツマッコリ700円、タッカンマリと締めのうどん、チュクミ、チヂミ、キンパ、トッポッキ、ガーリックチキン、冷麺、焼き飯、隣席が騒がしかった (2025年8月)、トイレが一つ (2026年1月)、二人前からの料理が多い (2026年)、チヂミが冷めていた (2026年3月)。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=7130001032254'].concat(rv(R, ['B510727942', 'B511488318', 'B511885442', 'B516041536', 'B521692456', 'B523115704', 'B523707449', 'B523808107', 'B524808593', 'B525231058', 'B538517808'])) },
    cultural_comfort: { level: 'english_friendly', note: 'English and Chinese menus; English- and Korean-speaking staff (Tabelog). Many dishes for two or more.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区仏光寺通室町東入釘隠町234',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated March and October 2026.' },
    pin_source: `Tabelog ${TB} (35.001416, 135.758342); GSI lot 京都府京都市下京区釘隠町234番地 about 44m away; nearest pin kyoto_robinson_karasuma 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523115704/'],
    price_note: 'Prices from a February 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Samgyeopsal (choice of styles, grilled at the table)', null, 'Grill', 'no', 'no', '2025–2026.', 'samgyeopsal'),
      it('', '', 'Pork bossam', '¥1,480', 'Main', 'no', 'no', 'February 2026.', 'bossam'),
      it('', '', 'Dakhanmari (with udon)', null, 'Hot pot', 'no', 'no', 'March 2026.', 'dakhanmari'),
      it('', '', 'Homemade fruit makgeolli (glass)', '¥700', 'Drink', 'ask', 'ask', 'February 2026.', 'fruit_makgeolli'),
    ] }, {
    cuisine: 'スタッフが卓で焼くサムギョプサルで知られる町家の韓国料理店 (食べログ、2025〜2026年の口コミ)・ハーブ、コチュジャン、牛、ホルモンなど約6種のサムギョプサル、エゴマの葉とたれ (2025〜2026年)・ポッサム1,480円、タコキムチ500円、マッコリ600円、自家製フルーツマッコリ700円 (2026年2月)・締めにうどんのタッカンマリ (2026年3月)・チュクミ (2026年3月)・チヂミ、キンパ、半羽のチキントッポッキ、ガーリックチキン、冷麺、焼き飯 (2025〜2026年)',
    neighborhood: '四条烏丸、室町の東の仏光寺通。四条・烏丸から徒歩1分',
    gf_detail: 'グルテンフリーではない: コチュジャンやしょうゆのたれの韓国料理、チヂミ、キンパ、トッポッキ、冷麺、締めのうどん (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: サムギョプサル、ポッサム、タッカンマリ、タコキムチ (2025〜2026年の口コミ)。',
    notes: '[韓国料理・四条烏丸近くの仏光寺、町家のサムギョプサル] 広い京町家で、スタッフがサムギョプサル (ハーブ、コチュジャンなど) を卓で焼いて切ってくれる。ポッサム、タッカンマリ、チヂミ、マッコリも豊富。5,000〜6,000円ほど。二人前からの料理が多い。火曜休み。',
  });
}

save();
