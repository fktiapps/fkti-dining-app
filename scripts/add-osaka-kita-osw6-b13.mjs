// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 13.
//   + 大衆飯酒場 アシタニパンチ Taishu Meshi Sakaba Ashitani Pan Chi (izakaya with all-day all-you-can-drink, Doyama, opened July 2026)
//   + 伊江人酒場 Ienchu Sakaba (Okinawan izakaya open to 7 am, Doyama)
//   + 和フレンチバル村塾 屋根裏 別邸 Wa French Bar Sonjuku Yaneura Bettei (wa-French bar behind an intercom door, by Ohatsu Tenjin)
//   + epais (brand-pork tonkatsu, Kitashinchi; Tabelog Tonkatsu 100 2017–2026)
//   - PIZZA SALVATORE CUOMO 梅田 27017321 skipped: chain already in data (Salvatore Cuomo; tokyo record "The Kitchen Salvatore Cuomo GINZA").
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b12): odd ids in order 27156695, 27092001,
//   27042985, 27017321, 27072441.
//   Chain check: Ashitani Pan Chi, Ienchu Sakaba and epais: no other shop found. Sonjuku Yaneura Bettei is a sister concept of
//   イタリアン チャイナバル村塾 (in data as osaka_sonjuku_namba, an Italian-Chinese bar); a different format, so drafted as its own
//   shop (Greg's ruling, 2026-11-02). None of the four is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Ashitani Pan Chi carries Tabelog's "Ramen" genre, but noodles appear only as the course's Taiwanese mazesoba finish, so it is
//   recorded as an izakaya without a ramen block. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw6-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27017321', 'PIZZA SALVATORE CUOMO 梅田: branch of the Salvatore Cuomo chain, already in data (tokyo: The Kitchen Salvatore Cuomo GINZA).');

// ================================================================ 大衆飯酒場 アシタニパンチ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27156695/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '02:00']);
  put({
    id: 'osaka_ashitani_panchi_doyama', name: '大衆飯酒場 アシタニパンチ (Taishu Meshi Sakaba Ashitani Pan Chi)', category: 'OMNI',
    lat: 34.704181, lng: 135.502578, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses include gyoza, mapo tofu, sukiyaki tsukune and a Taiwanese mazesoba of wheat noodles; sauces are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an izakaya of wagyu, sea urchin, salmon roe, chicken and Chinese-style dishes.',
    hours_raw: 'Daily 17:00–2:00, last order 1:15 (Tabelog). Opened July 2026 (Tabelog). All-you-can-drink of up to nine hours, three hours on Fridays (Tabelog). Appetizer charge ¥300 (Tabelog). Private-party bookings by phone (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards and other e-money, PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay (Tabelog). 50 seats: tables for 2–8 on the first floor and tatami on the second, semi-private seating, up to 58 (Tabelog; October 2026). Smoking allowed; menus in English, Chinese and Korean, with photos (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Doyama, ハルビル, in the Umeda Higashi-dori shopping street area — 5 min from Nakazakicho Stn, 8–9 min from Umeda and JR Osaka Stn',
    cuisine: 'Casual izakaya of creative dishes made with plenty of sea urchin, salmon roe and wagyu; highballs and chuhai from ¥180 (Tabelog) · signature "Amazing TKG" of egg rice with sea urchin, ikura and wagyu, and a chateaubriand "juicy explosion" grill (Tabelog) · all-you-can-drink plans: standard ¥1,290, premium ¥1,680 (Tabelog) · courses with all-you-can-drink: Manzoku ¥3,600 (7 dishes: three appetizers, choregi salad, truffle-salt fries with cheese, wagyu tataki under green onion, chateaubriand, Taiwanese mazesoba); Gold ¥3,980 (three appetizers, cheese mapo tofu, wagyu grilled with green onion, egg-yolk sukiyaki tsukune, spicy shredded-onion gyoza, chicken in porcini cream, Taiwanese mazesoba); Platinum and special courses too (October 2026 reviews)',
    website: null, gmaps: gm('大衆飯酒場 アシタニパンチ 堂山町'), menu_url: null,
    notes: "[Izakaya · Umeda, Higashi-dori, cheap drinks till 2 am] A fifty-seat izakaya in the Higashi-dori shopping street area, opened in July 2026, built around very cheap drinking: highballs from ¥180 and all-you-can-drink plans that run up to nine hours (three on Fridays). The food mixes Chinese-style dishes and izakaya standards with luxury touches: cheese mapo tofu, spicy gyoza, wagyu tataki under a heap of green onion, a thick chateaubriand, an egg rice topped with sea urchin, salmon roe and wagyu, and a Taiwanese mazesoba to finish. Courses with drinks are ¥3,600–3,980, popular for groups on the tatami second floor. Smoking is allowed; open until 2 am.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff (unnamed in the sources read)'], origin: null, background: 'Shop text (Tabelog): a casual tavern opened in July 2026 for authentic dishes at affordable prices, with creative cuisine using sea urchin, salmon roe and wagyu; drinks from ¥180; all-you-can-drink of up to nine hours.', philosophy: 'Authentic dishes at affordable prices (Tabelog).', specialty: 'Amazing TKG; chateaubriand; all-you-can-drink courses.',
      anecdotes: [
        { text: '"The highlight was the Chateaubriand, cooked to perfection with an explosion of juices. To finish off, we had a hearty Taiwanese Mazesoba!" — October 2026, the 7-dish course.', source: R + 'B536760759/' },
        { text: '"The interior features tables for 2 to 4 guests on the first floor, while the second floor boasts spacious tatami seating" — October 2026.', source: R + 'B538074068/' },
        { text: '"I initially thought it would be mostly casual dishes since it\'s a public tavern, but there were also luxurious options" — October 2026, the Gold course.', source: R + 'B536960028/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B536760759/', R + 'B536865344/', R + 'B536960028/', R + 'B537277553/', R + 'B537354918/', R + 'B537401226/', R + 'B537412189/', R + 'B537702449/', R + 'B537765409/', R + 'B538074068/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Chinese and Korean, with photos (Tabelog).' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂山町16-11 ハルビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; opened July 2026; ten reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂山町16番11号 (go) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536865344/', R + 'B537354918/'],
    price_note: 'Plans from the Tabelog listing (tax included); courses from October 2026 reviews; ¥300 appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'Manzoku course, 7 dishes, with all-you-can-drink', '¥3,600', 'Course', 'no', 'no', 'Tabelog listing; October 2026 reviews.', 'manzoku_course'),
      it('', '', 'Gold course, 7 dishes, with all-you-can-drink', '¥3,980', 'Course', 'no', 'no', 'October 2026 reviews.', 'gold_course'),
      it('', '', 'Standard all-you-can-drink (up to 9 hours; 3 hours on Fridays)', '¥1,290', 'Drinks', '', '', 'Tabelog listing.', 'ayce_standard'),
      it('', '', 'Highball or chuhai (from)', '¥180', 'Drinks', '', '', 'Tabelog listing.', 'highball'),
    ] }, {
    cuisine: 'ウニ、いくら、和牛をたっぷり使った創作料理の大衆酒場、ハイボールとチューハイは180円から (食べログ)・名物はウニ、いくら、和牛をのせた「Amazing TKG」と、シャトーブリアンの「Chateaubriand Juicy Explosion Grill」 (食べログ)・飲み放題: スタンダード1,290円、プレミアム1,680円 (食べログ)・飲み放題つきのコース: Manzoku コース3,600円 (7品: 前菜3種、チョレギサラダ、チーズのトリュフ塩ポテト、ねぎたっぷりの和牛のたたき、シャトーブリアン、台湾まぜそば)、ゴールドコース3,980円 (前菜3種、チーズ麻婆豆腐、和牛のねぎ焼き、卵黄のすき焼きつくね、白髪ねぎのピリ辛餃子、若鶏のポルチーニクリーム、台湾まぜそば)、プラチナや特別なコースも (2026年10月の口コミ)',
    neighborhood: '堂山、梅田東通り商店街のハルビル。中崎町駅から徒歩5分、梅田駅や JR大阪駅から徒歩8〜9分',
    gf_detail: '要確認。グルテンの情報なし。コースには餃子、麻婆豆腐、すき焼きつくね、小麦の麺の台湾まぜそばがあり、ソースの材料は書かれていない。',
    vegan_detail: 'ヴィーガンではありません。和牛、ウニ、いくら、鶏肉と中華風の料理の居酒屋。',
    notes: '[居酒屋・梅田東通り、深夜2時までの安い飲み] 梅田東通り商店街にある50席の居酒屋で、2026年7月オープン。とにかく安く飲めるのが売りで、ハイボールは180円から、飲み放題は最大9時間 (金曜は3時間)。料理は中華風の料理と居酒屋の定番に、ところどころ豪華なもの: チーズ麻婆豆腐、ピリ辛の餃子、ねぎをたっぷりのせた和牛のたたき、厚いシャトーブリアン、ウニといくらと和牛をのせた卵かけご飯、締めは台湾まぜそば。飲み放題つきのコースは3,600〜3,980円で、2階の座敷はグループに人気。喫煙可、深夜2時まで。',
  });
}

// ================================================================ 伊江人酒場
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27092001/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '07:00']), SU = day(['16:00', '23:00']);
  put({
    id: 'osaka_ienchu_sakaba_doyama', name: '伊江人酒場 (Ienchu Sakaba)', category: 'OMNI',
    lat: 34.703578, lng: 135.502886, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu includes soki soba (wheat noodles), mozuku tempura, beni-imo croquettes, curry and chicken nanban; Okinawan braises like rafute are usually cooked with soy sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Okinawan pork, beef and seafood dishes; jimami (peanut) tofu, sea grapes and island shallots also appear.',
    hours_raw: 'Mon–Sat and holidays 18:00–7:00 (last order 6:00); Sunday 16:00–23:00 (last order 22:00); closing days not fixed; if there are no customers the shop may close at 18:00 (Tabelog). Seating charge ¥450 with a small appetizer, included in courses (Tabelog). Cards (VISA, Master, JCB, AMEX), IC cards and other e-money, PayPay, d Barai, Rakuten Pay, au PAY, Alipay (Tabelog). 15 seats: 5 at the counter, three tables, and a second-floor private tatami room for up to 15; smoking allowed; delivery available (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Doyama, a narrow alley just north of Higashi-dori (C棟) — 7 min from Umeda Stn',
    cuisine: 'Okinawan cooking with ingredients from the owner\'s home island of Ie: Ie beef and Agu pork (Tabelog) · rafute (braised pork belly), soki nitsuke, soki soba to finish, Ie beef tataki, grilled black wagyu (Tabelog; 2025–2026 reviews) · mozuku tempura, goya champuru, somen champuru, pork tamago, taco rice, beni-imo croquette, jimami tofu, sea grapes, island shallots with meat miso, curly fries, nakami soup, kunchama bacon, Spam and egg salad, chicken nanban and curry (2024–2026 reviews) · awamori from Ie, the main island, Miyako, Ishigaki, Kume, Hateruma and Yonaguni (July 2026); habu sake; Okinawan fruit liqueurs such as tankan umeshu; Orion draft (Tabelog; reviews) · course of 11 dishes with all-you-can-drink ¥3,850 (Tabelog); a self-service all-you-can-drink in the second-floor room for private parties (August 2026)',
    website: null, gmaps: gm('伊江人酒場 堂山町'), menu_url: null,
    notes: "[Okinawan · Umeda, Higashi-dori, an island izakaya open till morning] A small Okinawan izakaya in a narrow alley just north of Higashi-dori, run with ingredients from the owner's home island of Ie and open until 7 am. Diners call it one of the few places in Osaka for home-style Okinawan food: rafute and soki ribs, Ie-beef tataki, goya and somen champuru, mozuku tempura, jimami tofu, and soki soba to finish, washed down with Orion draft or awamori from half a dozen islands, plus a jar of habu sake. A ¥3,850 course includes all-you-can-drink, and the second-floor tatami room takes private parties of up to 15. The room is tight and tables are small; smoking is allowed. Sundays close at 23:00.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), from Ie Island (Tabelog)'], origin: 'The owner\'s hometown is Ie Island, Okinawa (Tabelog).', background: 'Shop text (Tabelog): Okinawan cuisine with carefully selected ingredients from the owner\'s hometown, Ie Island; Ie beef and Agu pork; rafute, soki soba and Ie beef tataki; awamori and limited and seasonal sakes chosen by the owner; Okinawan fruit liqueurs; open until 7 am. A December 2024 diner: "one of the few places in Osaka where I can enjoy authentic Okinawan home-cooked dishes".', philosophy: 'A hidden izakaya where you can relax on Okinawan time (Tabelog).', specialty: 'Rafute; soki soba; awamori.',
      anecdotes: [
        { text: '"You can enjoy Awamori from various regions such as Ie Island, the main island, Miyako Island, Ishigaki Island, Kume Island, Hateruma Island, and Yonaguni Island!" — July 2026.', source: R + 'B535320410/' },
        { text: '"I personally recommend the Soki Nitsuke over the Rafute! Also, be sure to try the Habu Sake—it\'s surprisingly good!" — June 2025.', source: R + 'B474214625/' },
        { text: '"The tofu had a simple, delicious flavor reminiscent of sesame pudding!" — June 2026, the jimami tofu.', source: R + 'B531413751/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B474214625/', R + 'B482428319/', R + 'B496320934/', R + 'B501035240/', R + 'B504705538/', R + 'B509877476/', R + 'B531413751/', R + 'B534487694/', R + 'B535320410/', R + 'B538179360/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small alley izakaya; book for Friday nights (2024–2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂山町8-16 C棟',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂山町8番16号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B496320934/'],
    price_note: 'The course from the Tabelog listing (tax included); Orion draft from a November 2024 review; ¥450 seating charge outside courses.', last_checked: TODAY, items: [
      it('', '', 'Course of 11 dishes with all-you-can-drink (grilled black wagyu, rafute)', '¥3,850', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_3850'),
      it('', '', 'Rafute (braised pork belly)', '', 'Okinawan', 'ask', 'no', 'Tabelog; 2025–2026 reviews.', 'rafute'),
      it('', '', 'Soki soba', '', 'Noodles', 'no', 'no', 'Tabelog.', 'soki_soba'),
      it('', '', 'Orion draft beer', '¥550', 'Drinks', '', '', 'November 2024 review.', 'orion_draft'),
    ] }, {
    cuisine: '店主の故郷の Ie Island の食材の沖縄料理: Ie 牛と Agu 豚 (食べログ)・ラフテー、ソーキの煮つけ、締めのソーキそば、Ie 牛のたたき、黒毛和牛の焼き物 (食べログ、2025〜2026年の口コミ)・もずくの天ぷら、ゴーヤーチャンプルー、ソーメンチャンプルー、ポーク卵、タコライス、紅芋のコロッケ、ジーマーミ豆腐、海ぶどう、島らっきょうの肉味噌、カーリーポテト、中身汁、kunchama ベーコン、スパムと卵のサラダ、チキン南蛮とカレー (2024〜2026年の口コミ)・泡盛は Ie、本島、Miyako、Ishigaki、Kume、Hateruma、Yonaguni から (2026年7月)、ハブ酒、タンカン梅酒など沖縄の果実酒、オリオンの生 (食べログ、口コミ)・飲み放題つきの11品のコース3,850円 (食べログ)、2階の個室の貸切はセルフの飲み放題 (2026年8月)',
    neighborhood: '堂山、東通りのすぐ北の細い路地 (C棟)。梅田駅から徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。ソーキそば (小麦の麺)、もずくの天ぷら、紅芋のコロッケ、カレー、チキン南蛮があり、ラフテーなどの煮込みはふつう醤油で味つけする。',
    vegan_detail: 'ヴィーガンではありません。豚肉、牛肉、魚介の沖縄料理。ジーマーミ豆腐、海ぶどう、島らっきょうもある。',
    notes: '[沖縄料理・梅田東通り、朝まで開いている島の居酒屋] 東通りのすぐ北の細い路地にある小さな沖縄料理の居酒屋で、店主の故郷 Ie Island の食材を使い、朝7時まで開いている。大阪で本場の沖縄の家庭料理が食べられる数少ない店という声も。ラフテーとソーキ、Ie 牛のたたき、ゴーヤーとソーメンのチャンプルー、もずくの天ぷら、ジーマーミ豆腐、締めのソーキそばを、オリオンの生やいくつもの島の泡盛と、ハブ酒も。3,850円のコースは飲み放題つきで、2階の座敷は15人までの貸切に。店はせまくテーブルも小さめで、喫煙可。日曜は23時まで。',
  });
}

// ================================================================ 和フレンチバル村塾 屋根裏 別邸
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27042985/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'osaka_sonjuku_yaneura_bettei', name: '和フレンチバル村塾 屋根裏 別邸 (Wa French Bar Sonjuku Yaneura Bettei)', category: 'OMNI',
    lat: 34.698812, lng: 135.501348, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Dishes include quiche, a sole meunière, cream croquettes and a foie gras pizza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: French courses of foie gras, fish, beef, duck and pork.',
    hours_raw: 'Daily 18:00–23:00, open all year (check at New Year) (Tabelog). Walk-ins welcome, even alone; courses booked by the day before; à la carte on the day (Tabelog). Enter by ringing the intercom; the shop is on 2F but the door is on the "2.5th floor" (Tabelog; September–October 2026). Cards (VISA, Master, JCB, AMEX, Diners), PayPay, Rakuten Pay; no e-money (Tabelog). 12 seats: 6 at the counter, 6 at tables; private hire up to 20; heated tobacco only in a designated area (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '大一梅田ビル 2F, east of the Ohatsu Tenjin south gate, by Hotel Africa — 3 min from Higashi-Umeda Stn exit 7',
    cuisine: 'French cooking by a former hotel chef in a dim room inspired by a church attic; foie gras dishes and à la carte (Tabelog) · courses (Tabelog, tax included): Joruri course ¥6,380 (7 dishes, cold and warm appetizers, meat and fish); Joruri Premium ¥6,580 in a 20th-anniversary campaign (¥8,580 regular); Kauin Inari course with truffle and foie gras ¥9,900 · dishes in 2026 reviews: pumpkin soup, a five-item appetizer plate with quiche, octopus carpaccio, pan-seared sea bream in soup, sole meunière in cream sauce, pork-belly steak with mash, beef steak, a three-meat platter of beef, duck and pork, foie gras omelette, shrimp cream croquettes with remoulade, foie gras pizza, truffle cheese risotto, a foie gras rice bowl or hitsumabushi to finish · beer about ¥700 (October 2026); wine',
    website: null, gmaps: gm('和フレンチバル村塾 屋根裏 別邸'), menu_url: null,
    notes: "[French · Ohatsu Tenjin, a hidden attic bar] A twelve-seat wa-French bar up a half-flight of stairs by Ohatsu Tenjin's south gate, where you ring an intercom to be let in and find a dim room made to look like a church attic. A former hotel chef cooks French dishes with plenty of foie gras: in an omelette, on a pizza, over rice at the end of the course. The Joruri course runs to seven dishes for about ¥6,400 (with an extra dish at ¥6,580 during a 20th-anniversary campaign), and à la carte comes to about ¥8,000–9,000 a head with drinks. Regulars come for birthdays, with a message on the dessert plate. A sister of the Sonjuku bars, whose Ura-Namba chef one diner recognised at the counter.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), formerly a hotel chef (Tabelog)'], origin: 'A sister of the 村塾 (Sonjuku) restaurants; a September 2026 diner recognised the chef from the Sonjuku in Ura-Namba (osaka_sonjuku_namba).', background: 'Shop text (Tabelog): a calm restaurant inspired by a church attic, with a bar-like feel for after-dinner drinks; foie gras and à la carte; "authentic French cuisine crafted by a former hotel chef"; message plates for anniversaries. A 20th-anniversary campaign in autumn 2026.', philosophy: null, specialty: 'Foie gras dishes; Joruri course.',
      anecdotes: [
        { text: '"To enter, you have to ring the bell to be let in. As soon as the door opened, I made eye contact with the chef at the counter, someone I had met a few times at the Sonjuku in Ura-Namba." — September 2026.', source: R + 'B536569504/' },
        { text: '"We celebrate each other\'s birthdays here every year." — October 2026, a colleague\'s birthday.', source: R + 'B516263804/' },
        { text: '"The foie gras omelet, croquettes, and the three types of meat were all spot on." — September 2026.', source: R + 'B536411015/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B499944177/', R + 'B516263804/', R + 'B536076493/', R + 'B536411015/', R + 'B536569504/', R + 'B536616838/', R + 'B536830243/', R + 'B536860630/', R + 'B537917823/', R + 'B538244220/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ring the intercom to enter; dishes are explained (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎2-5-41 大一梅田ビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing, which gives the former name バーラジル～かいどうの屋根裏; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎二丁目5番41号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included; the Premium price is a campaign price).', last_checked: TODAY, items: [
      it('', '', 'Joruri course (7 dishes)', '¥6,380', 'Course', 'ask', 'no', 'Tabelog listing.', 'joruri_course'),
      it('', '', 'Joruri Premium course (campaign price; ¥8,580 regular)', '¥6,580', 'Course', 'ask', 'no', 'Tabelog listing; September–October 2026 reviews.', 'joruri_premium'),
      it('', '', 'Kauin Inari course with truffle and foie gras', '¥9,900', 'Course', 'ask', 'no', 'Tabelog listing.', 'kauin_inari_course'),
    ] }, {
    cuisine: '元ホテルの料理人のフレンチ、教会の屋根裏をイメージした暗めの店、フォアグラの料理とアラカルト (食べログ)・コース (食べログ、税込): 冷前菜と温前菜、肉と魚の7品の Joruri コース6,380円、20周年のキャンペーンで Joruri Premium 6,580円 (通常8,580円)、トリュフとフォアグラの Kauin Inari コース9,900円・2026年の口コミの料理: かぼちゃのスープ、キッシュの入った前菜5種、タコのカルパッチョ、鯛のポワレのスープ仕立て、舌平目のムニエルのクリームソース、豚バラのステーキとマッシュポテト、牛のステーキ、牛、鴨、豚の肉の盛り合わせ、フォアグラのオムレツ、えびのクリームコロッケのレムラードソース、フォアグラのピザ、トリュフチーズのリゾット、締めはフォアグラの丼かひつまぶし・ビールは700円ほど (2026年10月)、ワイン',
    neighborhood: '大一梅田ビル 2階、お初天神の南の入口の東、Hotel Africa のとなり。東梅田駅7番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。キッシュ、舌平目のムニエル、クリームコロッケ、フォアグラのピザなどがある。',
    vegan_detail: 'ヴィーガンではありません。フォアグラ、魚、牛肉、鴨、豚肉のフレンチのコース。',
    notes: '[フレンチ・お初天神、隠れ家の屋根裏のバル] お初天神の南の入口のそば、半階上がったところにある12席の和フレンチバルで、インターホンを押して入ると、教会の屋根裏をイメージした暗めの部屋。元ホテルの料理人がフォアグラをたっぷり使ったフレンチを作る: オムレツに、ピザに、コースの締めのご飯に。Joruri コースは7品で6,400円ほど (20周年のキャンペーン中は1品増えて6,580円)、アラカルトなら飲み物を入れて1人8,000〜9,000円ほど。誕生日に毎年来るという人もいて、デザートプレートにメッセージを書いてくれる。村塾の店の姉妹店で、うら難波の村塾で会った料理人がカウンターにいたという人も。',
  });
}

// ================================================================ epais
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27072441/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:00'], ['18:00', '21:00']), SA = day(['11:00', '15:00']);
  put({
    id: 'osaka_epais_kitashinchi', name: 'epais', category: 'OMNI',
    lat: 34.697576, lng: 135.499585, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded and fried tonkatsu and croquettes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork-cutlet restaurant.',
    hours_raw: 'Lunch Mon–Sat 11:00–15:00 (last order 14:00); dinner Mon–Fri 18:00–21:00 (last order 20:00); both until ingredients run out; closed Sundays and holidays; extra closures announced on Tabelog (e.g. several days in September 2026) (Tabelog). Lunch bookings by phone, dinner online; same-day dinner bookings are tables only, à la carte, no courses; one drink per person at dinner (Tabelog). Cutlets are fried slowly at low temperature, so expect a wait (September 2026); rice refills are charged (August–September 2026). Cards (VISA, Master, JCB, AMEX, Diners), PayPay, d Barai, Rakuten Pay, au PAY (Tabelog). 11 seats: 3 at the counter, 8 at tables (the shop text also says 12 seats); non-smoking; takeout of curry, bento and katsu sandwiches, ready about 30 minutes after ordering (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, ニュー華ビル 3F — 8 min from JR Kitashinchi Stn (Tabelog access line; the shop text says 2 min)',
    cuisine: 'Tonkatsu of brand pork: Chami pork, Sangen pork, TOKYOX and Shinshu Taro pork (Tabelog) · dinner: a daily-changing 11-dish course with a choice of Chami pork loin, Sangen pork tenderloin or other brands, from ¥3,300, or à la carte (Tabelog) · lunch: loin and tenderloin cutlet sets from ¥1,100, with Okayama Kinu Musume rice, miso soup, pickles and shredded cabbage (Tabelog) · cutlets fried slowly at low temperature, rosy inside, eaten with truffle salt or sauce (2026 reviews) · lunch: special chateaubriand pork cutlet set ¥2,640 (September 2026); 200 g tenderloin cutlet ¥2,620, black truffle and mushroom cream croquette +¥510 (October 2026); a 100 g tenderloin of the day (September 2026) · cabbage, vegetables with a homemade dressing, dessert and tea after the meal, detox water (2026) · wine',
    website: null, gmaps: gm('epais 北新地'), menu_url: null,
    notes: "[Tonkatsu · Kitashinchi, rosy brand-pork cutlets] An eleven-seat tonkatsu room on a Kitashinchi third floor, named to Tabelog's Tonkatsu 100 in 2017, 2018, 2019, 2021, 2022, 2024 and 2026, where brand pork is fried slowly at a low temperature so the tenderloin and chateaubriand cutlets come out pink and juicy inside. Lunch sets start at ¥1,100 (a chateaubriand cutlet set was ¥2,640 in September 2026), with a truffle-and-mushroom cream croquette as an add-on; dinner is an 11-dish course from ¥3,300 with a choice of pork brand, or à la carte. Diners rave about the tenderness; the gripes are the wait (the frying takes time), charged rice refills and, for one, dry rice. Book lunch by phone; closed Sundays, and dinner only on weekdays.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed in the sources read)'], origin: null, background: 'Shop text (Tabelog): carefully selected brand-pork tonkatsu in a relaxed, refined room of 12 seats; a dinner course of different pork brands or à la carte; set meals at lunch from 11:00. Tabelog Tonkatsu 100 in 2017, 2018, 2019, 2021, 2022, 2024 and 2026. A September 2026 diner describes it as "featured in the Michelin guide".', philosophy: 'Tender brand pork, carefully fried (Tabelog).', specialty: 'Chateaubriand and tenderloin pork cutlets.',
      anecdotes: [
        { text: '"…fry it slowly at a low temperature, it took a little time to arrive!" — September 2026, the 100 g tenderloin and truffle croquette.', source: R + 'B534776255/' },
        { text: '"It\'s rare to find pork Chateaubriand, but the meat was so tender that it felt like it was beyond what you would expect from pork" — October 2026.', source: R + 'B536991543/' },
        { text: '"I wanted to order a second serving of rice, but it seemed like it wasn\'t free, so I decided against it." — August 2026.', source: R + 'B535812716/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B449791833/', R + 'B489712811/', R + 'B534776255/', R + 'B535284135/', R + 'B535398188/', R + 'B535812716/', R + 'B536522609/', R + 'B536991543/', R + 'B537104583/', R + 'B538424877/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small room; lunch booked by phone, dinner online (Tabelog). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-9-3 ニュー華ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目9番3号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B449791833/', R + 'B538424877/'],
    price_note: 'Course and set starting prices from the Tabelog listing; lunch prices from September and October 2026 reviews; rice refills extra (¥100, a 2026 review).', last_checked: TODAY, items: [
      it('', '', 'Dinner course, 11 dishes, choice of brand pork (from)', '¥3,300', 'Dinner', 'no', 'no', 'Tabelog listing.', 'dinner_course'),
      it('', '', 'Loin or tenderloin cutlet set (lunch, from)', '¥1,100', 'Lunch', 'no', 'no', 'Tabelog listing.', 'lunch_set_from'),
      it('', '', 'Special chateaubriand pork cutlet set (lunch)', '¥2,640', 'Lunch', 'no', 'no', 'September 2026 review.', 'chateaubriand_set'),
      it('', '', 'Tenderloin cutlet, 200 g (lunch)', '¥2,620', 'Lunch', 'no', 'no', 'October 2026 review.', 'tenderloin_200'),
      it('', '', 'Black truffle and mushroom cream croquette (add-on)', '¥510', 'Side', 'no', 'no', 'October 2026 review.', 'truffle_croquette'),
    ] }, {
    cuisine: 'ブランド豚のとんかつ: Chami 豚、Sangen 豚、TOKYOX、Shinshu Taro 豚 (食べログ)・夜は日替わりの11品のコースで Chami 豚のロースか Sangen 豚のヒレなどを選べて3,300円から、またはアラカルト (食べログ)・昼はロースかつとヒレかつの定食が1,100円から、Okayama Kinu Musume のご飯、味噌汁、漬物、キャベツつき (食べログ)・低温でじっくり揚げ、中はロゼ色、トリュフ塩かソースで (2026年の口コミ)・ランチ: 特選シャトーブリアンかつの定食2,640円 (2026年9月)、ヒレかつ200g 2,620円、黒トリュフときのこのクリームコロッケをプラス510円 (2026年10月)、日替わりのヒレ100g (2026年9月)・キャベツ、自家製ドレッシングの野菜、食後のデザートとお茶、デトックスウォーター (2026年)・ワイン',
    neighborhood: '北新地、ニュー華ビル 3階。JR北新地駅から徒歩8分 (食べログの交通案内。店の紹介文では2分)',
    gf_detail: 'グルテンフリーではありません。衣をつけて揚げるとんかつとコロッケ。',
    vegan_detail: 'ヴィーガンではありません。とんかつの店。',
    notes: '[とんかつ・北新地、ロゼ色のブランド豚] 北新地のビルの3階にある11席のとんかつの店で、食べログのとんかつ百名店に2017、2018、2019、2021、2022、2024、2026年に選ばれている。ブランド豚を低温でじっくり揚げるので、ヒレやシャトーブリアンのかつは中がピンクでジューシー。ランチの定食は1,100円から (2026年9月はシャトーブリアンかつの定食が2,640円) で、トリュフときのこのクリームコロッケも足せる。夜は豚のブランドを選べる11品のコース (3,300円から) かアラカルト。やわらかさを絶賛する声が多い一方、揚げるのに時間がかかる、ご飯のおかわりが有料、ご飯がかたかったという声も。ランチの予約は電話で。日曜休みで、夜は平日のみ。',
  });
}

save();
