// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 1.
//   + こだわり炭火焼鳥 ふらふら Kodawari Sumibi Yakitori Furafura (charcoal yakitori counter in Nishinakajima since 2003; ¥600–990 lunches)
//   + ゑにしな Enishina (8-seat counter of Matsusaka-style chicken yakiniku with a homemade miso sauce, Nishinakajima, to 1–3 am)

//   + 炭火焼鳥専門 蔦 Sumibi Yakitori Senmon Tsuta (charcoal yakitori and chicken sashimi near Higashimikuni, opened June 2023)
//   Chain check: none of the four has a sister shop on its Tabelog listing, and a name search of every crawled sweep
//   (scripts/sweep/*/shops.jsonl) finds each name once. Web search 2026-11-01 for "こだわり炭火焼鳥 ふらふら" and
//   "炭火焼鳥専門 蔦" finds only directory pages for the same one shop. Bella Locanda Italiana is the one restaurant of
//   its hotel (Holiday Inn & Suites Shin-Osaka, run by CREAL HOTELS Inc. per the hotel site), not a restaurant chain.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-01).
//   Tabelog URLs copied from each listing.txt line 1. The hotel site's restaurant page (hisuite-shinosaka.com/restaurant/)
//   returned a maintenance page on 2026-11-01, so Bella Locanda facts come from Tabelog and its reviews; the maintenance
//   page is cited only for the hotel operator's name.
//   Tabelog's genre list for Tsuta includes "Ramen": the only ramen in the sources is the finish of a hot-pot course
//   (August 2025), so it is filed as yakitori with no ramen block.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-1');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ こだわり炭火焼鳥 ふらふら
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27007344/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '13:30'], ['17:30', '23:00']);
  put({
    id: 'osaka_furafura_nishinakajima', name: 'こだわり炭火焼鳥 ふらふら (Kodawari Sumibi Yakitori Furafura)', category: 'OMNI',
    lat: 34.727356, lng: 135.496763, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Yakitori come from the charcoal grill, and the rice bowls are topped with a sweet-savoury yakitori sauce (June and September 2026); marinated kara-age, chicken katsu and pasta are on the menu. Nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken grill; the house tofu and salads come alongside chicken, and the course ends with chicken-broth chazuke.',
    hours_raw: 'Mon–Fri 11:30–13:30 and 17:30–23:00 (last orders: food 22:15, drinks 22:30); Sat 17:30–22:30 (last orders: food 21:45, drinks 22:00); closed Sun and holidays (Tabelog). Reservations accepted; the private room can be used by groups of three or more (Tabelog). Appetiser charge ¥500 a head (Tabelog\'s original text: お通し代としておひとり様あたり５００円（税込）). Cards (VISA, Master, JCB, AMEX) and PayPay; no e-money (Tabelog). 18 seats: 10 at the counter and 8 on tatami; whole-shop hire up to 20; smoking allowed; free Wi-Fi; menu in English, Traditional and Simplified Chinese and Korean, with photos (Tabelog). The counter was down to its last seat just after noon on weekdays (May and July 2026). Opened 1 September 2003 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['17:30', '22:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島4-5-22, ground floor of 第３新大阪ビル — 3 min from Exit 1 of Nishinakajima-Minamigata Stn (Midosuji Line), 4 min from Minamikata Stn (Hankyu Kyoto Line) (Tabelog)',
    cuisine: 'Charcoal-grilled yakitori of chicken from Fukuchiyama, ground fresh each morning, with marinated kara-age, chicken tataki and house tofu made from soy milk; pasta to finish (Tabelog) · "Horo-yoi Set" of a starter, five omakase skewers and a drink ¥1,490 (Tabelog, tax included; ¥1,200 in December 2025 and March 2026, ¥1,300 in January 2026) · "Furafura" course of eight dishes with a drink ¥2,980 (Tabelog; ¥2,490 in February 2026, ¥2,980 in September 2026): starter, three omakase skewers, salad, homemade zaru tofu, marinated kara-age, grilled chicken thigh with tomato, chicken-broth chazuke (February 2026) · skewers named in reviews: liver, segimo, gizzard, cartilage, heart, seseri, skin, an overfilled negima, tsukune, tender breast (2025–2026) · lunch: yakitori rice bowl with an onsen egg ¥600 (December 2025), ¥700 (June 2026); chicken steak gozen on a hot iron plate ¥850 (December 2025, May 2026), with a free rice refill (December 2025); kara-age rice bowl ¥800 (September 2026); chicken katsu gozen ¥990, the same as the kara-age gozen (July 2026) · sake from around Japan poured into masu, and shochu (Tabelog)',
    website: null, gmaps: gm('こだわり炭火焼鳥 ふらふら 西中島'), menu_url: null,
    notes: "[Yakitori · Nishinakajima, a charcoal counter since 2003] A small yakitori izakaya a few minutes from Nishinakajima-Minamigata Station, open since 2003, with a ten-seat counter and a tatami room at the back. The shop says its chef cooks with skills from the hotel trade, and one diner heard the chef was once an Italian cook (March 2026), which may explain the mustard and mayonnaise on the skewer plate. The chicken comes from Fukuchiyama, ground the same morning. The usual order is the \"Horo-yoi Set\" (two diners order it every visit): a starter that changes daily (cold shabu with ume dressing in March 2026, a mochi gratin in January), five omakase skewers and a drink for about ¥1,200–1,500, with a negima so packed there is no place left to hold the skewer. The homemade tofu is a specialty. At lunch, charcoal smoke out front draws office workers in for a yakitori rice bowl (¥700 in June 2026) or a chicken steak set (¥850), and the counter fills by noon. Smoking is allowed. Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed) with one or two floor staff'], origin: null, background: 'Per the Tabelog listing: "Utilizing skills honed in the hotel industry, our chef personally prepares a variety of dishes with great care"; the chicken comes from Fukuchiyama and the tofu is handmade from soy milk; pasta was added at customers\' request. A March 2026 diner heard the chef "used to be an Italian chef". December 2025: the owner and one young staff member ran lunch; March 2026: the chef and two staff. Opened 1 September 2003 (Tabelog).', philosophy: null, specialty: 'Horo-yoi Set (starter, five skewers and a drink); marinated kara-age; homemade tofu; yakitori rice bowl at lunch.',
      anecdotes: [
        { text: '"The skewers are packed from tip to tail, leaving almost no place to hold them!" — March 2026, on the negima.', source: R + 'B519112344/' },
        { text: '"That\'s when I noticed some suspicious smoke… could it be? Yakitori grilled over charcoal during lunch? I was drawn in like a magnet." — December 2025, a ¥600 yakitori rice bowl.', source: R + 'B519112344/' },
        { text: '"What really impressed me was the homemade tofu. I knew it was a specialty, but this was my first time ordering it." — June 2026.', source: R + 'B529452588/' },
      ],
      japanese_sources_summary: '食べログ: こだわり炭火焼鳥 ふらふら、焼鳥・居酒屋、大阪市淀川区西中島4-5-22 第３新大阪ビル 1F、Midosuji 線 西中島南方駅1番出口から徒歩3分、阪急京都線 南方駅から徒歩4分、月〜金11:30〜13:30、17:30〜23:00、土17:30〜22:30、日・祝休み、予約可、お通し代500円、カードと PayPay 可、電子マネー不可、18席 (カウンター10、座敷8)、貸切20名まで、喫煙可、英語・中国語・韓国語のメニュー、2003年9月1日オープン。店の紹介: ホテルで磨いた腕で料理長がていねいに作る、Fukuchiyama の朝びきの鶏の焼鳥、漬け込みの kara-age、鶏のタタキ、豆乳から作る手作り豆腐、締めのパスタ、日本酒を升で。セット: 「Horo-yoi Set」お通し、おまかせ串5本、ドリンク1杯1,490円、8品の「ふらふら」コース2,980円。口コミ(2025年12月〜2026年9月): Horo-yoi Set は1,200〜1,300円、日替わりのお通し、ねぎまは串いっぱい、レバー、せぎも、砂ずり、ハツ、せせり、皮、つくね、むね、昼は焼鳥丼600〜700円、チキンステーキ御膳850円、kara-age 丼800円、チキンカツ御膳990円、昼すぎにはカウンターがほぼ満席、手作り豆腐が名物、料理長はもとイタリアンの料理人と聞いたという声。',
      confidence: 'medium', sources: [TB, R + 'B519112344/', R + 'B519197876/', R + 'B519383918/', R + 'B519477666/', R + 'B523159920/', R + 'B525048807/', R + 'B528515348/', R + 'B528838909/', R + 'B529452588/', R + 'B534805158/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tabelog lists a menu in English, Chinese and Korean with photos; no evidence of English-speaking staff. Lunch is a short menu of sets.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-5-22 第３新大阪ビル １Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the shop\'s own description and set menus; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目5番22号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B519112344/', R + 'B523159920/', R + 'B528515348/'],
    price_note: 'Set prices from the Tabelog listing (tax included); lunch prices from 2025–2026 reviews, each dated in its note.', last_checked: TODAY, items: [
      it('', '', '"Horo-yoi Set": starter, five omakase skewers and a drink', '¥1,490', 'Sets', 'ask', 'no', 'Tabelog; ¥1,200 in March 2026.', 'horoyoi_set'),
      it('', '', '"Furafura" course of eight dishes with a drink', '¥2,980', 'Courses', 'ask', 'no', 'Tabelog; September 2026.', 'furafura_course'),
      it('', '', 'Homemade tofu', '', 'Small plates', 'ask', 'no', 'June 2026; vegan unknown, served in a chicken shop.', 'homemade_tofu'),
      it('', '', 'Negima (chicken and green onion skewer)', '', 'Yakitori', 'ask', 'no', 'March 2026.', 'negima'),
      it('', '', 'Yakitori rice bowl with an onsen egg (lunch)', '¥700', 'Lunch', 'ask', 'no', 'June 2026; ¥600 in December 2025.', 'yakitori_don'),
      it('', '', 'Chicken steak gozen (lunch)', '¥850', 'Lunch', 'ask', 'no', 'May 2026.', 'chicken_steak_gozen'),
      it('', '', 'Kara-age rice bowl (lunch)', '¥800', 'Lunch', 'no', 'no', 'September 2026.', 'karaage_don'),
      it('', '', 'Chicken katsu gozen (lunch)', '¥990', 'Lunch', 'no', 'no', 'July 2026.', 'chicken_katsu_gozen'),
    ] }, {
    cuisine: 'Fukuchiyama の朝びきの鶏の炭火焼鳥、漬け込みの kara-age、鶏のタタキ、豆乳から作る手作り豆腐、締めのパスタ (食べログ)・「Horo-yoi Set」お通し、おまかせ串5本、ドリンク1杯で1,490円 (食べログ、税込。2025年12月と2026年3月は1,200円、2026年1月は1,300円)・ドリンクつき8品の「ふらふら」コース2,980円 (食べログ。2026年2月は2,490円、2026年9月は2,980円): お通し、おまかせ串3本、サラダ、手作りのざる豆腐、漬け込みの kara-age、鶏ももとトマトの焼き物、鶏だしの茶漬け (2026年2月)・口コミに出てくる串: レバー、せぎも、砂ずり、なんこつ、ハツ、せせり、皮、具がはみ出すねぎま、つくね、やわらかいむね (2025〜2026年)・昼: 温泉卵の焼鳥丼600円 (2025年12月)、700円 (2026年6月)、鉄板のチキンステーキ御膳850円 (2025年12月、2026年5月)、ごはんのおかわり無料 (2025年12月)、kara-age 丼800円 (2026年9月)、チキンカツ御膳990円で kara-age の御膳と同じ値段 (2026年7月)・全国の日本酒を升で、焼酎も (食べログ)',
    neighborhood: '西中島4-5-22、第３新大阪ビルの1階。Midosuji 線 西中島南方駅1番出口から徒歩3分、阪急京都線 南方駅から徒歩4分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。焼鳥は炭火焼きで、丼には甘辛い焼鳥のたれがかかる (2026年6月と9月)。漬け込みの kara-age、チキンカツ、パスタもある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。鶏の店で、手作り豆腐やサラダも鶏の料理といっしょに出て、コースの締めは鶏だしの茶漬け。',
    notes: '[焼鳥・西中島、2003年からの炭火のカウンター] 西中島南方駅から数分の小さな焼鳥の居酒屋で、2003年から。カウンター10席と奥の座敷。店によると、料理長がホテルで磨いた腕で作っている。もとはイタリアンの料理人だったと聞いたという客もいて (2026年3月)、串の皿にマスタードとマヨネーズが添えてあるのもそのせいかも。鶏は Fukuchiyama のもので、その日の朝にさばいたもの。いつもこれという客もいる「Horo-yoi Set」: 日替わりのお通し (2026年3月は玉ねぎと冷しゃぶの梅ドレッシング、1月はおもちのグラタン)、おまかせ串5本、ドリンク1杯で約1,200〜1,500円。ねぎまは串のはしまで具がいっぱいで、持つところがないほど。手作り豆腐も名物。昼は店の前の炭火の煙に誘われて会社員が入り、焼鳥丼 (2026年6月は700円) やチキンステーキの御膳 (850円) を食べる。お昼どきにはカウンターが埋まる。喫煙可。日曜休み。',
  });
}

// ================================================================ ゑにしな
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27126220/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:00', '01:00']); const B = day(['17:00', '03:00']);
  put({
    id: 'osaka_enishina_nishinakajima', name: 'ゑにしな (Enishina)', category: 'OMNI',
    lat: 34.727403, lng: 135.499728, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Chicken cuts are grilled with salt or with the homemade miso sauce (miso sauces often contain wheat or barley); fried chicken wings and cold noodles are on the course.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken grill. Vegetables such as shiitake, white leek, onion and cabbage are side orders to chicken, and nothing is described as vegan.',
    hours_raw: 'Mon, Tue, Thu, Sun and holidays 17:00–01:00; Fri, Sat and the day before a holiday 17:00–03:00; closed Wednesday; other closing days not fixed (Tabelog). Reservations accepted (Tabelog). Cover charge ¥290 (Tabelog\'s original text: チャージ料290円（税込）). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR payments (Tabelog). 16 seats: 8 at the counter (up to 10) and terrace seats; whole-shop hire up to 20; smoking allowed (Tabelog), at your seat too (July 2026); English menu (Tabelog). Opened in September 2021 as a counter yakiniku restaurant (a November 2021 review) and later turned to chicken (2024–2025 reviews).',
    hours: { 0: A, 1: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島3-21-18, ground floor — 2 min from Nishinakajima-Minamigata Stn (Midosuji Line), 5 min from Hankyu Minamikata Stn (Tabelog); just east of the Shin-Mido expressway, on the south side of the street next to a red pachinko parlour (March 2026)',
    cuisine: 'Chicken yakiniku grilled at the counter, with salt or a homemade miso sauce modelled on the chicken-and-miso grill of Matsusaka in Mie (Tabelog; August 2024) · all-you-can-drink course with draft beer: grilled-chicken platter, chicken sashimi, fried chicken wings, cold noodles and dessert ¥3,780 (Tabelog, tax included; ¥3,480 in August 2024, ¥3,980 in March 2025); in July 2026 the course was chicken tataki, five kinds of grilled chicken, wings and cold noodles · every cut ¥550 (March 2026), portions large · cuts named in reviews: young chicken, old hen, thigh, sasami, heart, liver, gizzard, bonjiri, yagen cartilage, harami, seseri, chicken belly (2024–2026) · sausages, shiitake, white leek, onion, kimchi, unlimited cabbage for the miso sauce (2024–2026) · Korean-style cold noodles or seaweed soup to finish, sorbet (2024–2026) · PSB on draft (March 2026); Akaboshi beer (July 2025)',
    website: null, gmaps: gm('ゑにしな 西中島3-21-18'), menu_url: null,
    notes: "[Chicken yakiniku · Nishinakajima, a late-night counter] An eight-seat counter in a drinking street near Nishinakajima-Minamigata, with Showa-retro tiles and a few terrace seats, where you grill chicken yourself and dip it in a homemade miso sauce worked out from the chicken-and-miso grills of Matsusaka in Mie (Tabelog; August 2024). It opened in September 2021 as a counter beef yakiniku (November 2021) and had turned to chicken by July 2024. Order cuts at ¥550 each (March 2026), from tender young chicken to chewy old hen, a whole heart and a liver seared rare; the portions are big. The all-you-can-drink course, with chicken sashimi, a grilled platter, wings and cold noodles, is ¥3,780 on Tabelog. Open till 1 am, and till 3 am on Friday and Saturday; one diner came in at midnight for a solo grill and seaweed soup (June 2026). One diner found the owner a little curt at first (March 2025); another found owner and staff very friendly (June 2026). Smoking is allowed. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and counter staff'], origin: null, background: 'Per the Tabelog listing: a chicken grill in a "nostalgic Showa retro atmosphere" with eight counter seats, recommending its homemade miso sauce "inspired by the famous chicken miso grill from Mie Prefecture". A November 2021 diner described it as the counter yakiniku "Enishina", opened in September 2021 on the former site of the counter sukiyaki restaurant "Mitsumaru", lunch only at first and dinner from October 2021. An August 2024 diner wrote that the miso sauce "was crafted by researching flavors from a Matsusaka restaurant" and that the shop had shifted from a yakiniku format; a March 2025 diner, that it "used to be a beef-centric yakiniku restaurant".', philosophy: null, specialty: 'Chicken yakiniku with homemade miso sauce; all-you-can-drink chicken course.',
      anecdotes: [
        { text: '"The miso sauce was so good that I couldn\'t resist dipping the unlimited cabbage into it, making my drinks keep flowing." — August 2024.', source: R + 'B442601307/' },
        { text: '"I stumbled into a chicken yakiniku restaurant, drawn in by the shimmering red lanterns at midnight." — June 2026, a solo late-night grill finished with seaweed soup.', source: R + 'B530913456/' },
        { text: '"I tried to order everything listed on the menu, but was advised that the portions are quite generous." — March 2026.', source: R + 'B523624744/' },
      ],
      japanese_sources_summary: '食べログ: ゑにしな、鶏料理・居酒屋・焼肉、大阪市淀川区西中島3-21-18 1F、Midosuji 線 西中島南方駅から徒歩2分、阪急 南方駅から徒歩5分、月・火・木・日・祝17:00〜翌1:00、金・土・祝前日17:00〜翌3:00、水曜休み、不定休、予約可、チャージ料290円、カード・電子マネー・QR 可、16席 (カウンター8、テラス席あり)、貸切20名まで、喫煙可、英語のメニュー。店の紹介: 昭和レトロのカウンター8席の鶏焼肉の店、Mie の名物の鶏の味噌焼きをもとにした自家製の味噌だれ、鶏の盛り合わせ、鶏刺し、手羽先の揚げ物、冷麺、デザートと生ビールつきの飲み放題コース3,780円。口コミ(2021年11月〜2026年8月): 2021年9月にカウンター焼肉として開店 (もとはすき焼きの Mitsumaru の場所)、のちに鶏に、Matsusaka の店の味を研究した味噌だれ、塩か味噌、若鶏、親鶏、ハツ、レバー、ぼんじり、せせり、ハラミ、どの部位も550円、量が多い、キャベツおかわり自由、冷麺、わかめスープ、シャーベット、生の PSB、席でたばこ、深夜にひとりで。',
      confidence: 'medium', sources: [TB, R + 'B442601307/', R + 'B488990746/', R + 'B491044403/', R + 'B504918375/', R + 'B509975385/', R + 'B523624744/', R + 'B530913456/', R + 'B531307954/', R + 'B531890849/', R + 'B534448797/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tabelog lists an English menu; you grill at the counter, salt or miso sauce. No evidence of English-speaking staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-21-18 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the shop\'s own description and course; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目21番18号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B523624744/', R + 'B531307954/'],
    price_note: 'Course price from the Tabelog listing (tax included); the per-cut price from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-drink chicken course: grilled platter, chicken sashimi, fried wings, cold noodles, dessert', '¥3,780', 'Courses', 'no', 'no', 'Tabelog; cold noodles are wheat-based as a rule.', 'nomihodai_course'),
      it('', '', 'Chicken cuts for the grill, salt or miso sauce (each)', '¥550', 'Grill', 'ask', 'no', 'March 2026.', 'chicken_cut'),
      it('', '', 'Chicken sashimi', '', 'Small plates', 'ask', 'no', 'August 2024; Tabelog course.', 'torisashi'),
      it('', '', 'Korean-style cold noodles', '', 'Finish', 'no', 'no', 'August 2024; July 2026.', 'reimen'),
      it('', '', 'Seaweed soup', '', 'Finish', 'ask', 'no', 'June 2026.', 'wakame_soup'),
    ] }, {
    cuisine: 'カウンターで焼く鶏焼肉。塩か、Matsusaka (Mie) の鶏の味噌焼きをもとにした自家製の味噌だれで (食べログ、2024年8月)・生ビールもつく飲み放題コース: 鶏の盛り合わせ、鶏刺し、手羽先の揚げ物、冷麺、デザートで3,780円 (食べログ、税込。2024年8月は3,480円、2025年3月は3,980円)。2026年7月のコースは鶏のタタキ、鶏5種、手羽先、冷麺・どの部位も550円 (2026年3月)、量は多め・口コミに出てくる部位: 若鶏、親鶏、もも、ささみ、ハツ、レバー、砂ずり、ぼんじり、やげんなんこつ、ハラミ、せせり、鶏の腹身 (2024〜2026年)・ソーセージ、しいたけ、白ねぎ、玉ねぎ、キムチ、味噌だれで食べるおかわり自由のキャベツ (2024〜2026年)・締めは韓国風の冷麺かわかめスープ、シャーベット (2024〜2026年)・生の PSB (2026年3月)、Akaboshi のビール (2025年7月)',
    neighborhood: '西中島3-21-18 の1階。Midosuji 線 西中島南方駅から徒歩2分、阪急 南方駅から徒歩5分 (食べログ)。Shin-Mido の高速道路のすぐ東、通りの南側、赤いパチンコ店のとなり (2026年3月)',
    gf_detail: '要確認。グルテンの情報なし。鶏は塩か自家製の味噌だれで焼く (味噌だれには小麦や大麦が入ることが多い)。コースには手羽先の揚げ物と冷麺がある。',
    vegan_detail: 'ヴィーガンではありません。鶏の焼肉の店で、しいたけ、白ねぎ、玉ねぎ、キャベツなどの野菜は鶏のおともで、ヴィーガンの説明はない。',
    notes: '[鶏焼肉・西中島、夜遅くまでのカウンター] 西中島南方の飲み屋街にある、昭和レトロのタイルのカウンター8席と少しのテラス席の店。鶏を自分で焼いて、Mie の Matsusaka の鶏の味噌焼きをもとにした自家製の味噌だれにつける (食べログ、2024年8月)。2021年9月に牛のカウンター焼肉として開き (2021年11月)、2024年7月には鶏の店になっていた。部位はどれも550円 (2026年3月) で、やわらかい若鶏から歯ごたえのある親鶏、まるごとのハツ、さっと焼いてレアのレバーまで。量が多い。鶏刺し、盛り合わせ、手羽先、冷麺つきの飲み放題コースは食べログで3,780円。夜1時まで、金曜と土曜は3時まで。夜中の12時にひとりで入って鶏を焼き、わかめスープで締めた人も (2026年6月)。店主が最初は少しそっけなく感じたという声 (2025年3月) も、店主もスタッフもとても気さくという声 (2026年6月) も。喫煙可。水曜休み。',
  });
}

// ================================================================ 炭火焼鳥専門 蔦
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27137026/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '13:00'], ['17:00', '23:00']); const E = day(['17:00', '23:00']);
  put({
    id: 'osaka_tsuta_higashimikuni', name: '炭火焼鳥専門 蔦 (Sumibi Yakitori Senmon Tsuta)', category: 'OMNI',
    lat: 34.739318, lng: 135.493884, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The yakitori come with a homemade sweet-savoury sauce or salt, the chicken sashimi is eaten with sweet Kyushu soy sauce, and kara-age, fried taro and truffle fries are on the menu; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken grill with chicken sashimi; nothing is described as vegan.',
    hours_raw: 'Mon–Fri 11:00–13:00 and 17:00–23:00; Sat, Sun, holidays and the days before and after a holiday 17:00–23:00; last order 22:00; hours may be extended or changed without notice depending on stock; closing days not fixed (Tabelog). Lunch paused for a while and came back by March 2026, when a reviewer gave the lunch hours as 11:30–14:00, unlike Tabelog. Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR payments including Alipay and WeChat Pay (Tabelog). 25 seats at the counter, on sofas and on tatami; hire up to 20; heated tobacco only, at a designated ashtray; wheelchair accessible; children welcome, kids menu; takeaway (Tabelog). Opened 30 June 2023 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '宮原5-9-21 — 5 min from Higashimikuni Stn (Midosuji Line), 7 min from JR Shin-Osaka, 10 min from Hankyu Mikuni; 1 min from the Kitachujima Elementary School city-bus stop (Tabelog)',
    cuisine: 'Charcoal-grilled yakitori of fresh domestic chicken with a homemade sweet-savoury sauce, the classics (tsukune, wings) and rare cuts (Tabelog) · chicken sashimi, a five-kind platter eaten with sweet Kyushu soy sauce (July 2025, August 2026), enough for two (April 2026) · skewers named in reviews: neck, heart, sankaku, liver, belly, skin, cartilage, breast, tsukune the size of a rice ball, tsukune with quail egg, truffle tsukune (2025–2026) · fried taro (July 2026), truffle fries (October 2026) · course with two hours of drinks: yakitori platter, chicken rice and kara-age ¥5,500 (Tabelog, tax included); a hot-pot course finished with ramen or zosui (August 2025) · lunch, all ¥1,000: kara-mayo rice bowl, seafood rice bowl, chicken tsukune rice bowl (March 2026); earlier a mixed-fry set, simmered flounder and the shop\'s curry rice ¥800 (December 2024) · Sapporo Black Label on draft, sake by season, Takachiyo "59" among them (August 2026); shochu and wine (Tabelog) · eat and drink well for under ¥4,000 a head (October 2026)',
    website: null, gmaps: gm('炭火焼鳥専門 蔦 宮原5-9-21'), menu_url: null,
    notes: "[Yakitori · Higashimikuni, a charcoal grill behind glass] A roomy yakitori restaurant near Higashimikuni Station, seven minutes' walk from JR Shin-Osaka, opened in June 2023, with counter seats facing a charcoal grill behind glass, sofas and a tatami room, so it works for families as well as after-work drinks. The shop grills fresh domestic chicken with a homemade sweet-savoury sauce, and the tsukune is the house favourite: fluffy and as big as a rice ball, with a truffle version too. Chicken sashimi comes as a five-kind platter with sweet Kyushu soy sauce. Diners praise the sake list and draft Sapporo Black Label, and one regular keeps the bill under ¥4,000 a head even after eating and drinking a lot (October 2026). Weekday lunch is back since March 2026 with ¥1,000 rice bowls, but one person was running it alone in March and May 2026, and a May 2026 diner waited 39 minutes; go early if you are short of time.",
    chef_bio: { chef_name: null, roles: ['Grill chef (unnamed) and floor staff'], origin: null, background: 'Per the Tabelog listing: "Our restaurant carefully grills selected ingredients over charcoal. We use freshly sourced domestic chicken", with a homemade sweet and savoury sauce and fresh sashimi; counter and sofa seats "for family meals or important business meetings". Opened 30 June 2023 (Tabelog). A March 2026 lunch was "a complete one-person operation", served in 18 minutes; in May 2026 the staff was again working solo and gave a free kara-age for the wait.', philosophy: null, specialty: 'Tsukune; five-kind chicken sashimi platter; charcoal yakitori.',
      anecdotes: [
        { text: '"The charcoal grilling at the back corner of the counter is visible through the glass, and watching the flames as the yakitori cooks is truly impressive." — July 2025.', source: R + 'B510238865/' },
        { text: '"I was surprised by the size of the tsukune—it felt like a rice ball!" — April 2026.', source: R + 'B527094876/' },
        { text: '"The staff kindly offered a complimentary kara-age (fried chicken) for the wait, which I appreciated." — May 2026, a weekday lunch served 39 minutes after seating.', source: R + 'B480797446/' },
      ],
      japanese_sources_summary: '食べログ: 炭火焼鳥専門 蔦、焼鳥・居酒屋・ラーメン、大阪市淀川区宮原5-9-21、Osaka Metro 東三国駅から徒歩約5分、JR 新大阪駅から徒歩7分、阪急 三国駅から徒歩10分、月〜金11:00〜13:00、17:00〜23:00、土・日・祝・祝前日・祝後日17:00〜23:00 (L.O.22:00)、仕入れにより時間の変更あり、不定休、予約可、カード・電子マネー・QR (Alipay、WeChat Pay も) 可、25席 (カウンター、ソファ、座敷)、貸切20名まで、加熱式たばこのみ、車いす可、子ども可、キッズメニュー、テイクアウト、2023年6月30日オープン。店の紹介: 国産の鶏を炭火で、つくねと手羽先、希少部位、自家製の甘辛いたれ、刺身、2時間飲み放題の焼鳥コース5,500円 (焼鳥の盛り合わせ、鶏めし、kara-age)。口コミ(2024年6月〜2026年10月): ガラス越しの炭火、鶏刺し5種盛りを Kyushu の甘い醤油で、おにぎりほどのつくね、うずらのつくね、トリュフのつくね、トリュフのフライドポテト、里芋の揚げ物、生の Sapporo Black Label、Takachiyo の日本酒、鍋のコースの締めはラーメンか雑炊、昼の丼は1,000円 (2026年3月)、昼はひとりで回していて待つことも、ひとり4,000円以内。',
      confidence: 'medium', sources: [TB, R + 'B480797446/', R + 'B501097249/', R + 'B510238865/', R + 'B512310335/', R + 'B523838313/', R + 'B524068979/', R + 'B527094876/', R + 'B532807743/', R + 'B534029174/', R + 'B537566985/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter, sofa and tatami seats; Alipay and WeChat Pay accepted (Tabelog). No English menu or English service evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区宮原5-9-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the shop\'s own description and course; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区宮原五丁目9番21号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B480797446/', R + 'B534029174/'],
    price_note: 'Course price from the Tabelog listing (tax included); lunch prices from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Yakitori course with two hours of drinks: yakitori platter, chicken rice, kara-age', '¥5,500', 'Courses', 'no', 'no', 'Tabelog.', 'yakitori_course'),
      it('', '', 'Chicken sashimi, five-kind platter', '', 'Small plates', 'ask', 'no', 'August 2026; served with sweet Kyushu soy sauce.', 'torisashi_5'),
      it('', '', 'Tsukune', '', 'Yakitori', 'ask', 'no', 'April and August 2026.', 'tsukune'),
      it('', '', 'Truffle fries', '', 'Small plates', 'ask', 'no', 'October 2026.', 'truffle_fries'),
      it('', '', 'Chicken tsukune rice bowl (lunch)', '¥1,000', 'Lunch', 'ask', 'no', 'March and May 2026.', 'tsukune_don'),
      it('', '', 'Kara-mayo rice bowl (lunch)', '¥1,000', 'Lunch', 'no', 'no', 'March 2026.', 'karamayo_don'),
    ] }, {
    cuisine: '新鮮な国産の鶏の炭火焼鳥に自家製の甘辛いたれ、定番 (つくね、手羽先) と希少部位 (食べログ)・鶏刺しの5種盛りを Kyushu の甘い醤油で (2025年7月、2026年8月)、ふたりで食べられる量 (2026年4月)・口コミに出てくる串: ネック、ハツ、さんかく、レバー、腹身、皮、なんこつ、むね、おにぎりほどのつくね、うずらのつくね、トリュフのつくね (2025〜2026年)・里芋の揚げ物 (2026年7月)、トリュフのフライドポテト (2026年10月)・2時間飲み放題のコース: 焼鳥の盛り合わせ、鶏めし、kara-ageで5,500円 (食べログ、税込)。締めにラーメンか雑炊を選べる鍋のコースも (2025年8月)・昼はどれも1,000円: からマヨ丼、海鮮丼、鶏つくね丼 (2026年3月)。以前はミックスフライ定食、魚の煮付け、カレーライス800円 (2024年12月)・生の Sapporo Black Label、季節の日本酒、Takachiyo の「59」など (2026年8月)。焼酎、ワインも (食べログ)・たっぷり飲んで食べてひとり4,000円以内 (2026年10月)',
    neighborhood: '宮原5-9-21。Midosuji 線 東三国駅から徒歩5分、JR 新大阪駅から7分、阪急 三国駅から10分。市バスのバス停から1分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。焼鳥は自家製の甘辛いたれか塩で、鶏刺しは Kyushu の甘い醤油で食べる。kara-age、里芋の揚げ物、トリュフのフライドポテトもある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。鶏刺しもある鶏の炭火焼きの店で、ヴィーガンの説明はない。',
    notes: '[焼鳥・東三国、ガラスの向こうの炭火] 東三国駅の近く、JR 新大阪駅から徒歩7分のゆったりした焼鳥の店で、2023年6月に開いた。カウンターの奥にガラス越しに炭火の焼き場が見え、ソファ席や座敷もあるので、家族でも仕事帰りの一杯にも。新鮮な国産の鶏を自家製の甘辛いたれで焼き、名物のつくねはふわふわで、おにぎりほどの大きさ。トリュフのつくねもある。鶏刺しは5種盛りを Kyushu の甘い醤油で。日本酒のそろえと生の Sapporo Black Label も好評で、たっぷり飲んで食べてもひとり4,000円以内という常連も (2026年10月)。平日の昼は2026年3月から再開し、丼はどれも1,000円。ただ3月と5月はひとりで回していて、5月には席についてから39分待った人も。時間がないときは早めに。',
  });
}

save();
