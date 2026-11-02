// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 21.
//   + 天麩羅とお蕎麦 三輪 Tempura to Osoba Miwa (tempura counter with handmade soba, Kitashinchi side of 堂島)
//   + トラットリア sol saliente Trattoria sol saliente (80-seat basement Italian bar off Higashi-dori, to 5 am on weekends)
//   + 鮨 日の樹 Sushi Hinoki (entertaining two-seating sushi counter, Kitashinchi side of 堂島)
//   + すしみさわ Sushi Misawa (red-vinegar Edomae sushi with jazz, Kitashinchi side of 堂島)
//   - 梅田 うしみつ 27153717 skipped: Osaka shop of the Ushimitsu yakiniku group, which lists eleven sister shops opened
//     2015–2025 (Tabelog remarks), a fast-expanding chain.
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b20): odd ids in order 27106949, 27153717,
//   27077081, 27129567, 27105297. None of the four is in data/osaka.json (grep by id, name and address, 2026-11-02); the
//   tokyo record "Tsukemen Yondaime Misawa" is unrelated.
//   Chain check: sol saliente is the "Sol 2nd shop" on Gurunavi (web search), a two-shop group not in data, so drafted;
//   Miwa, Hinoki and Misawa show no other shop.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw6-21');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27153717', '梅田 うしみつ: Osaka shop of the Ushimitsu yakiniku group (eleven sister shops opened 2015–2025 per Tabelog remarks), a fast-expanding chain.');

// ================================================================ 天麩羅とお蕎麦 三輪
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27106949/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://kitashinchi-miwa.com';
  const D = day(['18:00', '23:00']), LD = day(['12:00', '14:30'], ['18:00', '23:00']);
  put({
    id: 'osaka_tempura_soba_miwa', name: '天麩羅とお蕎麦 三輪 (Tempura to Osoba Miwa)', category: 'OMNI',
    lat: 34.696505, lng: 135.499189, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: battered tempura, and the soba is 2:8 (20% wheat) per the shop.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and wagyu tempura; soba with dashi. Tabelog lists vegetarian options, and a lunch of six vegetable tempura with soba was served in October 2026.',
    hours_raw: 'Lunch Tue–Sat 12:00–14:30 (last entry 12:30); dinner Mon–Sat 18:00–23:00 (last entry 21:00); closed Sundays, holidays, the third Monday, and longer breaks in summer and winter (Tabelog). Same-day cancellations charged in full (Tabelog). Service charge 10% at lunch and dinner (Tabelog). Opened September 10, 2018 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), QUICPay; no QR (Tabelog). 10 seats at an L-shaped counter; non-smoking, ashtray in the lift hall; wheelchair accessible (Tabelog). English-speaking staff (Tabelog). Children of school age who can eat the regular menu; strollers welcome (Tabelog).',
    hours: { 0: D, 1: LD, 2: LD, 3: LD, 4: LD, 5: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi side of 堂島, 田園ビル 3F — 5 min from Kitashinchi Stn',
    cuisine: 'Tempura fried in 100% premium cottonseed oil, a monthly course, finished with handmade 2:8 soba made with ultra-soft water from Nose (16 mg/L); wine and sake chosen by the owner, a J.S.A. senior sommelier, and gyokuro (Tabelog) · November 2026 courses (Tabelog, tax included): ZEI with top ingredients, wagyu and a choice of two soba ¥22,000 (16 items); SHUN seasonal course with mori soba ¥15,600 (15 items); TOKI short course ¥12,800 (13 items) · an October 2026 SHUN course: clam soup, sweet shrimp, maitake, snow crab, Kadoma lotus root, sea-bream chazuke, burdock, oysters, sukiyaki tempura, soba (mori, kamo nanban or karasumi), iced gyokuro · lunch of clam soup, six seasonal vegetable tempura and handmade soba (October 2026); a karasumi soba; Samurai oyster soba as an extra (2025–2026) · sukiyaki-style tempura and shrimp as house classics; tempura egg yolk with sea urchin over rice; matsutake, sanma, chestnut (2025–2026) · soba-yu thin or thick (October 2026)',
    website: WEB, gmaps: gm('天麩羅とお蕎麦 三輪 北新地'), menu_url: null,
    notes: "[Tempura · Kitashinchi, creative tempura with handmade soba] A ten-seat L-shaped tempura counter on a Kitashinchi third floor, open since 2018, where the batter is fried in pure cottonseed oil so it sits light, and the course ends with handmade soba made with ultra-soft water from Nose: plain, with duck, or under shaved karasumi. Seasonal courses are ¥12,800–22,000 (plus 10% service), with house classics like a sukiyaki tempura and wines picked by the owner, a senior sommelier; a lunch of vegetable tempura and soba costs far less. One September 2026 diner saw every other guest book a return visit; another found the explanations interrupted conversation. English-speaking staff.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), a J.S.A. senior sommelier (Tabelog)', 'Tempura chef (unnamed)'], origin: null, background: 'Shop text (Tabelog): a tempura specialty shop in Kitashinchi that guarantees "zero bloating"; tempura in 100% premium cottonseed oil with a monthly course; handmade soba with ultra-soft water from Nose (16 mg/L), with molecular cooking techniques for aroma; wine chosen by the owner, a J.S.A. senior sommelier, and gyokuro. Opened September 10, 2018; an eighth-anniversary postcard went to guests in 2026 (October 2026 review).', philosophy: 'Light tempura with no heaviness or lingering odour (Tabelog).', specialty: 'Sukiyaki tempura; handmade soba.',
      anecdotes: [
        { text: '"I was particularly blown away by the tempura version of sukiyaki—it was incredibly tasty." — January 2025.', source: R + 'B499067354/' },
        { text: '"The soba was thin and beautiful, yet had a firm texture and rich aroma. It was delicious even after the tempura." — September 2026.', source: R + 'B536094107/' },
        { text: '"It was quite uncomfortable to have my conversations interrupted every time…" — October 2026, on the tempura explanations.', source: R + 'B538356004/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, WEB, R + 'B479910981/', R + 'B499067354/', R + 'B535033594/', R + 'B535477513/', R + 'B536094107/', R + 'B536235244/', R + 'B536575965/', R + 'B537466969/', R + 'B538328997/', R + 'B538356004/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff (Tabelog).' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-2-23 田園ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目2番23号 (go) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'November 2026 courses from the Tabelog listing (tax included); 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'ZEI signature course, 16 items, two soba to choose', '¥22,000', 'Course', 'no', 'no', 'Tabelog listing.', 'zei'),
      it('', '', 'SHUN seasonal course with mori soba, 15 items', '¥15,600', 'Course', 'no', 'no', 'Tabelog listing; October 2026 review.', 'shun'),
      it('', '', 'TOKI short course, 13 items', '¥12,800', 'Course', 'no', 'no', 'Tabelog listing.', 'toki'),
    ] }, {
    cuisine: '上質な綿実油100%で揚げる天ぷら、月替わりのコース、締めは Nose の超軟水 (16mg/L) で打つ二八の手打ちそば、J.S.A. シニアソムリエの店主が選ぶワインと日本酒、玉露 (食べログ)・2026年11月のコース (食べログ、税込): 最上の食材と和牛、2種から選ぶそばの ZEI 22,000円 (16品)、もりそばの季節の SHUN 15,600円 (15品)、短めの TOKI 12,800円 (13品)・2026年10月の SHUN: はまぐりのお吸い物、甘海老、まいたけ、ズワイガニ、Kadoma のれんこん、鯛茶漬け、ごぼう、牡蠣、すき焼きの天ぷら、そば (もり、鴨南蛮、からすみ)、氷出し玉露・昼ははまぐりのお吸い物、旬の野菜の天ぷら6種、手打ちそば (2026年10月)、からすみそば、追加で Samurai 牡蠣そば (2025〜2026年)・店の定番はすき焼きの天ぷらと海老、天ぷらの卵黄とウニのご飯、松茸、さんま、栗 (2025〜2026年)・そば湯は薄めか濃いめ (2026年10月)',
    neighborhood: '堂島の北新地寄り、田園ビル 3階。北新地駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。衣をつけた天ぷらで、そばは店によると二八 (小麦が2割)。',
    vegan_detail: 'ヴィーガンではありません。魚介と和牛の天ぷら、だしのそば。食べログにはベジタリアン向けのメニューありとあり、2026年10月には野菜の天ぷら6種とそばの昼が出た。',
    notes: '[天ぷら・北新地、創作天ぷらと手打ちそば] 北新地のビルの3階にあるL字の10席の天ぷらのカウンターで、2018年から。綿実油だけで揚げるので衣が軽く、締めは Nose の超軟水で打つ手打ちそば: もり、鴨南蛮、からすみをのせたものなど。季節のコースは12,800〜22,000円 (サービス料10%)、店の定番のすき焼きの天ぷら、シニアソムリエの店主が選ぶワイン。昼の野菜の天ぷらとそばはずっと安い。ほかの客が全員次の予約を入れていたという声 (2026年9月) と、説明で会話が途切れるという声も。英語を話せるスタッフがいる。',
  });
}

// ================================================================ トラットリア sol saliente
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27077081/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://sol-saliente.foodre.jp/';
  const LD = day(['11:00', '15:00'], ['18:00', '23:00']), D = day(['18:00', '23:00']), LN = day(['11:00', '15:00'], ['18:00', '05:00']);
  put({
    id: 'osaka_trattoria_sol_saliente', name: 'トラットリア sol saliente (Trattoria sol saliente)', category: 'OMNI',
    lat: 34.702942, lng: 135.504104, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses lean on pizza, pasta, garlic toast and bread; the braised beef cheek and salads may suit, but nothing is confirmed.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; nothing vegan is confirmed. Courses centre on salmon, bacon, prosciutto and beef.',
    hours_raw: 'Mon, Thu, Sun 11:00–15:00 and 18:00–23:00; Wed 18:00–23:00; Fri and Sat 11:00–15:00 and 18:00–5:00 (food last order 4:00); closed Tuesdays; no lunch on Tuesdays, Wednesdays and the last Sunday of the month (Tabelog). Appetizer charge ¥400; no service charge; private room ¥1,000 for 2 hours or ¥1,500 for 3 hours per group (Tabelog). Groups of 20 or more by course only; message plate ¥500 (Tabelog). BYO with corkage, e.g. ¥1,000 a bottle of wine (Tabelog). Opened January 20, 2014 (Tabelog). Cards, IC cards, iD, QUICPay, PayPay, d Barai (Tabelog). 80 seats incl. counter, tables, sofas and a standing bar; a private room for 10–15; private hire 20 or more; projector and microphone free; non-smoking (Tabelog).',
    hours: { 0: LD, 2: D, 3: LD, 4: LN, 5: LN, 6: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Doyama, こだまレジャービル B1F, off the Higashi-dori shopping street — 5 min from Umeda and Higashi-Umeda Stns',
    cuisine: 'Creative Italian bar by a chef who used to cook Japanese food, with Japanese touches; seasonal fruit cocktails and wine (Tabelog; official site) · party courses with all-you-can-drink (Tabelog, tax included): ¥4,700 (7 items), ¥5,200 (8 items, with pasta), ¥5,700 (7 items, 3 hours); fresh-fruit cocktails and shochu +¥200 · a ¥5,200 course in June 2026: smoked salmon marinade, Caesar salad of thick bacon and Kyoto mizuna, prosciutto and arugula pizza, salmon and white-leek miso cream pasta, beef cheek braised in red wine, dessert · rice croquettes (August 2026); a matcha-oolong cocktail (June 2026)',
    website: WEB, gmaps: gm('トラットリア sol saliente 堂山町'), menu_url: null,
    notes: "[Italian · Umeda, Higashi-dori, a basement bar open till dawn on weekends] A spacious eighty-seat Italian bar hidden in a basement off the Higashi-dori shopping street, open since 2014, run by a chef who used to cook Japanese food: miso cream pasta with salmon and white leek, a Caesar with Kyoto mizuna, and the dish everyone mentions, beef cheek braised in red wine so soft it falls apart under chopsticks. All-you-can-drink party courses run ¥4,700–5,700, with fruit cocktails; there is a private room for 10–15 with a free projector. Lunch most days; Friday and Saturday nights go on to 5 am. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), formerly a Japanese-cuisine cook (Tabelog; official site)'], origin: null, background: 'Shop text (Tabelog): a hidden Italian bar on the Higashi-dori shopping street; the chef is a former Japanese-cuisine cook, bringing together Japanese and Western dishes; cocktails with seasonal fruit; 80 seats; private rooms renewed. Opened January 20, 2014. Gurunavi calls it "Sol 2号店" (web search).', philosophy: null, specialty: 'Beef cheek braised in red wine.',
      anecdotes: [
        { text: '"It\'s so tender that it falls apart with chopsticks." — June 2026, the beef cheek in red wine.', source: R + 'B530689099/' },
        { text: '"Personally, my favorite was the salmon and white leek miso cream pasta." — June 2026.', source: R + 'B530580260/' },
        { text: '"I especially appreciated that the staff checked in on me just as my glass was about to be empty" — July 2026.', source: R + 'B532973663/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, WEB, R + 'B529684183/', R + 'B529826320/', R + 'B530580260/', R + 'B530689099/', R + 'B531201559/', R + 'B531738950/', R + 'B532973663/', R + 'B533367791/', R + 'B533675243/', R + 'B534800044/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Group-friendly basement bar (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂山町1-14 こだまレジャービル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂山町1番14号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included); ¥400 appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'Party course with all-you-can-drink, 7 items (beef cheek in red wine)', '¥4,700', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_4700'),
      it('', '', 'Party course with all-you-can-drink, 8 items, with pasta', '¥5,200', 'Course', 'no', 'no', 'Tabelog listing; June 2026 reviews.', 'course_5200'),
      it('', '', 'Party course with 3-hour all-you-can-drink, 7 items', '¥5,700', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_5700'),
    ] }, {
    cuisine: '元和食の料理人の和の感性を入れた創作イタリアンのバル、季節の果物のカクテルとワイン (食べログ、公式サイト)・飲み放題つきの宴会コース (食べログ、税込): 4,700円 (7品)、パスタつきの5,200円 (8品)、3時間の5,700円 (7品)、生果実のカクテルと焼酎は+200円・2026年6月の5,200円のコース: スモークサーモンのマリネ、厚切りベーコンと京水菜のシーザーサラダ、生ハムとルッコラのピザ、鮭と白ねぎの味噌クリームパスタ、牛ほほ肉の赤ワイン煮込み、デザート・ライスコロッケ (2026年8月)、抹茶ウーロンのカクテル (2026年6月)',
    neighborhood: '堂山、東通り商店街から入ったこだまレジャービル 地下1階。梅田駅と東梅田駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。コースはピザ、パスタ、ガーリックトースト、パンが多い。牛ほほ肉の煮込みやサラダは合うかもしれないが、確認はない。',
    vegan_detail: '要確認。食べログにはベジタリアン向けのメニューありとあるが、ヴィーガンの確認はなし。コースは鮭、ベーコン、生ハム、牛肉が中心。',
    notes: '[イタリアン・梅田東通り、週末は朝までの地下のバル] 東通り商店街から入った地下にある80席の広いイタリアンのバルで、2014年から。元和食の料理人が作る、鮭と白ねぎの味噌クリームパスタ、京水菜のシーザーサラダ、そして誰もがほめる、箸で崩れるほどやわらかい牛ほほ肉の赤ワイン煮込み。飲み放題つきの宴会コースは4,700〜5,700円で、果物のカクテルも。10〜15人の個室にはプロジェクターが無料。ほぼ毎日ランチがあり、金・土の夜は朝5時まで。火曜休み。',
  });
}

// ================================================================ 鮨 日の樹
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27129567/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:30']);
  put({
    id: 'osaka_sushi_hinoki_kitashinchi', name: '鮨 日の樹 (Sushi Hinoki)', category: 'OMNI',
    lat: 34.695984, lng: 135.496672, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi with soy-based seasoning, saikyo-miso grilled fish, a risotto and fried dishes in the course.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, wagyu and soft-shelled turtle.',
    hours_raw: 'Mon–Sat two seatings, 18:00–20:00 and 20:30–22:30, each starting together; call if running late; closed Sundays and holidays (Tabelog). Opened May 20, 2022 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 10 counter seats; non-smoking; private hire from 8 (Tabelog). BYO with a fee (Tabelog). Children and babies welcome, kids\' menu, strollers welcome; ask the shop first (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi side of 堂島, エスパス北新地25 2F, on Kitashinchi Hondori — 5 min from Kitashinchi Stn',
    cuisine: 'A sushi counter run as entertainment (Tabelog) · seasonal omakase of 18–20 dishes ¥26,400 (Tabelog) · rice in three styles, rosé, white and red vinegar (May–June 2026) · a May 2026 course: abalone steamed two hours with junsai, yuba and sea urchin; fried Kamo eggplant and Manji shishito; saikyo-grilled aburabouzu; Tottori Manyo beef with caviar on rosé rice; kinmedai · smoked strip-loin sushi with caviar, firefly squid namerou, a large hot eel, toro-taku (May 2026) · Kashiwara bamboo shoots (April 2026); a risotto midway (July 2026); desserts · sakes such as Houou Bidan, Miyasaka and Hanaizumi (May 2026)',
    website: null, gmaps: gm('鮨 日の樹 北新地'), menu_url: null,
    notes: "[Sushi · Kitashinchi, a sushi counter with a show] A ten-seat sushi counter on Kitashinchi's main street, opened in 2022, that sells itself as entertainment: a lively, joking head chef runs two seatings a night, helped by the chef's father and by Sumire, a young sushi chef with an Instagram following who moved over from a Namba shop (April 2026 review). Behind the patter the work is careful: abalone steamed for two hours, Tottori wagyu with caviar, and nigiri on three kinds of rice, rosé, white and red vinegar. The omakase is ¥26,400 with generous portions. One May 2026 night every other guest was from overseas and the chef switched to English. Not for a quiet dinner.",
    chef_bio: { chef_name: null, roles: ['Head chef and owner (unnamed)', 'The chef\'s father, assisting (May 2026)', 'Sushi chef Sumire (April–June 2026 reviews)'], origin: null, background: 'Shop text (Tabelog): next-generation entertainment that overturns the idea of a sushi counter. Opened May 20, 2022. Diners: an energetic, comic head chef who chats through the meal; a November 2024 diner records the chef\'s joke self-introduction as "Hirano Shou"; in May 2026 the chef handled a counter of guests from the USA and Korea in English, with the chef\'s father assisting; Sumire, a young sushi chef popular on Instagram, joined from a Namba shop and sometimes serves instead of the head chef (April–May 2026).', philosophy: null, specialty: 'Omakase on three kinds of rice.',
      anecdotes: [
        { text: '"I found myself laughing out loud multiple times, especially during the segment about the soft-shelled turtle." — May 2026.', source: R + 'B528688585/' },
        { text: '"I was impressed by the use of both red vinegar and regular vinegar for the sushi rice." — April 2026.', source: R + 'B527132582/' },
        { text: '"This place isn\'t for those who prefer a quiet dining experience." — September 2026.', source: R + 'B537854090/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B495691493/', R + 'B525627133/', R + 'B526633941/', R + 'B526663277/', R + 'B527132582/', R + 'B527759625/', R + 'B528688585/', R + 'B530705070/', R + 'B530942025/', R + 'B532032433/', R + 'B537854090/'] },
    cultural_comfort: { level: 'english', note: 'In May 2026 the chef switched to English for a counter of guests from the USA and Korea.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-5-5 エスパス北新地25 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目5番5号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'From the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase, 18–20 dishes', '¥26,400', 'Course', 'ask', 'no', 'Tabelog listing.', 'omakase'),
    ] }, {
    cuisine: 'エンターテインメントとしての鮨のカウンター (食べログ)・旬のおまかせ18〜20品26,400円 (食べログ)・シャリはロゼ、白、赤酢の3種 (2026年5〜6月)・2026年5月のコース: 2時間蒸したアワビとじゅんさい、湯葉、ウニ、Kamo なすと Manji ししとうの揚げ物、アブラボウズの西京焼き、鳥取の Manyo 牛とキャビアをロゼのシャリで、金目鯛・燻製したストリップロインとキャビアの握り、ホタルイカのなめろう、大きな熱々のうなぎ、トロたく (2026年5月)・Kashiwara のたけのこ (2026年4月)、途中のリゾット (2026年7月)、デザート・Houou Bidan、Miyasaka、Hanaizumi などの日本酒 (2026年5月)',
    neighborhood: '堂島の北新地寄り、Kitashinchi Hondori のエスパス北新地25 2階。北新地駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。醤油の味つけの鮨、西京焼き、リゾット、揚げ物がコースにある。',
    vegan_detail: 'ヴィーガンではありません。魚、和牛、すっぽん。',
    notes: '[鮨・北新地、ショーのある鮨のカウンター] 北新地の Hondori にある10席の鮨のカウンターで、2022年から。エンターテインメントを掲げ、にぎやかで冗談好きの大将が一晩に2回転を回し、大将の父と、インスタで人気の若い鮨職人 Sumire (Namba の店から移ってきた、2026年4月の口コミ) が手伝う。おしゃべりの陰の仕事はていねいで、2時間蒸したアワビ、鳥取の和牛とキャビア、ロゼ、白、赤酢の3種のシャリの握り。おまかせは26,400円で量は多め。2026年5月のある夜はほかの客が全員海外からで、大将が英語に切り替えたという。静かに食べたい人には向かない。',
  });
}

// ================================================================ すしみさわ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27105297/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'osaka_sushi_misawa_kitashinchi', name: 'すしみさわ (Sushi Misawa)', category: 'OMNI',
    lat: 34.695987, lng: 135.497076, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Edomae sushi with soy seasoning and a sweet sauce on the anago; chawanmushi and grilled fish in the course.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish course.',
    hours_raw: 'Mon–Sat and days before holidays 17:30–23:00 (food last order 22:30); closed Sundays and holidays (Tabelog). Online bookings are confirmed by phone; give a time you can take a call (Tabelog). Opened March 26, 2018 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money (Tabelog). 12 seats: 8 at the counter and a semi-private table for 4; non-smoking; school-age children, smaller children by arrangement (Tabelog). Service charge: Tabelog\'s Japanese field says なし (none); its machine translation says a fee may be added.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi side of 堂島, エスパス北新地23 3F — 4 min from Kitashinchi Stn',
    cuisine: 'Edomae sushi on red-vinegar rice, to jazz; anago with a sweet sauce from its own simmering broth (Tabelog) · courses (Tabelog, tax included): Edomae course of 7 dishes ¥14,300 or ¥17,600; omakase ¥22,000, tailored by phone · à la carte as well (Tabelog; 2025–2026 reviews) · dishes in reviews: grilled turban shell, vinegared hairy crab (April 2023); toro-taku (December 2023); milt, chawanmushi (2024–2025); kohada and squid (December 2025); grilled sanma and kinmedai (August 2026) · Master\'s Dream draft beer, sake, tequila (2023–2026)',
    website: null, gmaps: gm('すしみさわ 北新地'), menu_url: null,
    notes: "[Sushi · Kitashinchi, red-vinegar sushi to jazz] A twelve-seat sushi counter on a Kitashinchi third floor, open since 2018, where jazz plays and the chef, whom diners call Mr. Misawa, makes Edomae sushi on mild red-vinegar rice, with anago glazed in a sauce from its own broth. Courses are ¥14,300, ¥17,600 or ¥22,000 omakase, but unusually for the area you can order à la carte, and the chef adjusts portions and budgets for business dinners. Regulars praise the warm, friendly chef and dishes like kohada, grilled kinmedai and toro-taku; there is tequila as well as sake.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (reviewers say "Mr. Misawa")'], origin: null, background: 'Shop text (Tabelog): a chef devoted to Edo-style sushi, using refreshing red-vinegar rice; signature anago with a sweet sauce made from its simmering broth; jazz in the room; courses and à la carte. Opened March 26, 2018. An April 2024 diner headlines "Masterful techniques by Mr. Misawa"; a September 2026 regular has followed the owner since before this shop opened.', philosophy: null, specialty: 'Anago; red-vinegar Edomae sushi.',
      anecdotes: [
        { text: '"The sushi rice was delicious, and I was thoroughly satisfied with everything." — December 2023, on the mild red-vinegar rice.', source: R + 'B477981781/' },
        { text: '"They even prepared my requested kohada (gizzard shad), which made my day." — December 2025.', source: R + 'B521096853/' },
        { text: '"As expected, the fish was fantastic." — August 2026.', source: R + 'B534087329/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B465308350/', R + 'B477981781/', R + 'B483800284/', R + 'B497734699/', R + 'B508967647/', R + 'B521096853/', R + 'B531472761/', R + 'B534087329/', R + 'B536188958/', R + 'B536305468/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly chef; à la carte possible (2025–2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-5-1 エスパス北新地23 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目5番1号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Edomae course, 7 dishes', '¥14,300', 'Course', 'ask', 'no', 'Tabelog listing.', 'edomae_14300'),
      it('', '', 'Edomae course, 7 dishes (upper)', '¥17,600', 'Course', 'ask', 'no', 'Tabelog listing.', 'edomae_17600'),
      it('', '', 'Omakase course', '¥22,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'omakase'),
    ] }, {
    cuisine: 'ジャズの流れる店の赤酢のシャリの江戸前鮨、煮汁から作る甘いつめの穴子 (食べログ)・コース (食べログ、税込): 7品の江戸前コース14,300円か17,600円、電話で相談するおまかせ22,000円・アラカルトも (食べログ、2025〜2026年の口コミ)・口コミの料理: サザエのつぼ焼き、毛ガニの酢の物 (2023年4月)、トロたく (2023年12月)、白子、茶碗蒸し (2024〜2025年)、コハダとイカ (2025年12月)、さんまと金目鯛の焼き物 (2026年8月)・Master’s Dream の生、日本酒、テキーラ (2023〜2026年)',
    neighborhood: '堂島の北新地寄り、エスパス北新地23 3階。北新地駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。醤油の味つけの江戸前鮨、甘いつめの穴子、茶碗蒸しと焼き魚がコースにある。',
    vegan_detail: 'ヴィーガンではありません。魚のコース。',
    notes: '[鮨・北新地、ジャズと赤酢の鮨] 北新地のビルの3階にある12席の鮨のカウンターで、2018年から。ジャズが流れ、客が Misawa さんと呼ぶ大将が、まろやかな赤酢のシャリで江戸前鮨を握り、穴子は煮汁から作ったつめで。コースは14,300円、17,600円、おまかせ22,000円だが、このあたりではめずらしくアラカルトでも頼め、接待の量や予算にも合わせてくれる。気さくで温かい大将と、コハダ、金目鯛の焼き物、トロたくなどが常連に好評。日本酒のほかテキーラもある。',
  });
}

save();
