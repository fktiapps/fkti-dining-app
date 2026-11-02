// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 6.
//   + サルサカバナ バール 四谷店 Salsa Cabana Bar (20-seat Mexican bar on Shinmichi-dōri, open to midnight; sister shop in Nakano)
//   + 鮨 こるり Sushi Koruri (10-seat sushi counter in Comore Yotsuya with sake and wine pairings; weekday lunch bowls)
//   + Wines By California Neuf (15-seat bistro and California-wine bar; couscous-and-quiche lunch)
//   + 餃子酒場 四谷本店 Gyoza Sakaba Yotsuya Honten (50-seat gyoza and Chinese tavern, lunch sets from ¥930)
//   Chain check. Salsa Cabana: the official site lists two shops, Yotsuya and Nakano. Koruri: one shop; a February 2026
//   reviewer says it belongs to the "Marugo Group" (not in data). Neuf: one shop. Gyoza Sakaba: a web search found only
//   a Kachidoki shop of the same name, unconfirmed as related. Skipped 町田商店 四谷店 13196247 (Machida Shoten, a fast-growing
//   iekei chain named in data: tokyo_ramen_butayama_sakura_st), SUNRISE 四ツ谷駅前店 13290131 (same-concept chain: branches
//   in Comore Yotsuya, Kiba, Osaki per listing sites), 立喰い寿司&BAR鮨處八千代 四ツ谷店 13297207 (鮨處八千代, 17 shops per a
//   2002 TV Tokyo page and several current branches).
//   None is in data/tokyo.json (grep by name, Tabelog id and address). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13196247', '町田商店 四谷店 — Machida Shoten, a fast-growing iekei ramen chain; not researched.');
skip('13290131', 'SUNRISE 四ツ谷駅前店 — same-concept Thai/Indian chain (branches in Comore Yotsuya, Kiba, Osaki per listing sites); not researched.');
skip('13297207', '立喰い寿司&BAR鮨處八千代 四ツ谷店 — 鮨處八千代, a sushi chain (17 shops per a 2002 TV Tokyo page; several current branches); not researched.');

// ================================================================ サルサカバナ バール 四谷店
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13130275/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.salsa-cabana.com/';
  const W = day(['17:00', '24:00']); const E = day(['15:00', '24:00']);
  put({
    id: 'tokyo_salsa_cabana_bar_yotsuya', name: 'サルサカバナ バール 四谷店 (Salsa Cabana Bar)', category: 'OMNI',
    lat: 35.686842, lng: 139.728039, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. One June 2026 diner noted the taco shells are corn-based rather than fried wheat, but burritos, shrimp fritters and nachos are also on the menu and nothing is called gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Guacamole, avocado salsa salad and tomato salsa are plant-based in principle; tacos are filled with beef, chicken or pork and much of the menu has cheese.',
    hours_raw: 'Mon–Fri 17:00–24:00; Sat, Sun and holidays 15:00–24:00 (from August 2026); last order 23:00; closed over New Year; ask about lunch (Tabelog; official site). Reservations by phone, Tabelog (confirmed by a call back) or Google Maps (October 2026); one drink per person (October 2025). 20 seats, tables close together, open terrace; whole-shop hire up to 20; non-smoking (Tabelog; September 2026). Cards (VISA, Master, JCB, AMEX), Suica, iD, QUICPay and QR (Tabelog). Takeaway and delivery (official site).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yotsuya 1-20-9 1F, just off Shinmichi-dōri — 1 min from JR Yotsuya Stn and Exit 3 of the Namboku Line',
    cuisine: 'Mexican bar: many ingredients and seasonings imported from Mexico, Mexican beer, house sangria and tequila cocktails (official site) · hand-rolled taco duo (tomato salsa, guacamole and cheese, beef, chicken), chicken and pork tacos, burritos, nachos, guacamole, avocado salsa salad, chili con potato, grilled cheese with seafood, roast beef, prime outside-skirt steak and skewers (2025–26 reviews) · courses with all-you-can-drink (tacos, nachos, shrimp fritters, Mexican beef steak; September 2026) · many mojitos (kiwi among them), tequila highball, piña colada, a wide tequila list',
    website: SITE, gmaps: gm('サルサカバナ 四谷'), menu_url: null,
    notes: "[Mexican · Yotsuya, a taco and mojito bar off Shinmichi-dōri] A small, Mexican-decorated bar a minute from Yotsuya Station, one of two Salsa Cabana shops (the other is in Nakano), where the menu leans on ingredients brought in from Mexico. Diners in 2026 came for hand-rolled tacos with chewy, fragrant tortillas, guacamole and avocado salsa, skirt-steak skewers that sold out on a busy weekend, and a long list of mojitos and tequila. An October 2026 visitor writes that it was among the first restaurants in Japan to receive the Mexican government's Sello M mark for authentic Mexican cuisine. Weekends get packed and loud, tables are tight, and it works best for a casual round or a second stop; open to midnight, from 15:00 at weekends.",
    chef_bio: { chef_name: null, roles: [], origin: 'Yotsuya shop of Salsa Cabana, which also runs a Nakano shop (official site); "Grill Cabana" and "Salsa Cabana" merged as "Salsa Cabana Bar" (Tabelog).',
      background: 'No source names the owner or cooks; a 2021 note in a September 2026 review mentions "friendly young staff members and a pleasant owner". Official site: Latin atmosphere with Mexican text throughout the interior; many ingredients and seasonings imported from Mexico; Mexican beer, homemade sangria and tequila cocktails; catering. An October 2026 diner: "I visited one of Japan\'s first certified establishments" of the Sello M programme run by the Mexican Ministry of Foreign Affairs with the Mexican Culinary Academy.',
      philosophy: 'Flavours and aromas that only Mexican ingredients can give (official site).', specialty: 'Hand-rolled tacos; mojitos.',
      anecdotes: [
        { text: '"The tacos were made with a corn-based shell instead of a fried wheat one. The aftertaste was fragrant and sweet, making them quite addictive." — June 2026.', source: R + 'B529454340/' },
        { text: '"I visited one of Japan\'s first certified establishments, Salsa Cabana in Yotsuya, with two friends… Reservations can be made through Google Maps." — October 2026.', source: R + 'B536804545/' },
        { text: '"I ended up having about 4.5 glasses, refilling each time." — September 2026, mojitos at an after-party.', source: R + 'B534870868/' },
      ],
      japanese_sources_summary: '公式サイト (salsa-cabana.com): 四谷・新橋・中野の本格メキシカンバル「サルサカバナ」(現在の店舗は四ツ谷バールと中野店)、内外装にメキシコのテキスト、食材や調味料の多くを本場メキシコから、メキシコビール、自家製サングリア、テキーラのオリジナルカクテル、四ツ谷店は8月から土日祝15:00〜24:00、デリバリー、ケータリング。食べログ: サルサカバナ バール 四谷店、メキシコ料理・バル・居酒屋、四谷1-20-9 1F、JR四ツ谷駅から徒歩1分、月〜金17:00〜24:00、土日祝15:00〜24:00 (L.O.23:00)、20席、禁煙、オープンテラス、カード・電子マネー・QR 可、「グリルカバナ」と「サルサカバナ」が統合。口コミ(2025年10月〜2026年10月): 手巻きタコス、トウモロコシのトルティーヤ、ワカモレ、アボカドサルサ、ハラミの串、モヒート、テキーラ、Sello M の認定、週末は満席でにぎやか。',
      confidence: 'medium', sources: [SITE, TB, R + 'B427642292/', R + 'B515453946/', R + 'B528236032/', R + 'B528487586/', R + 'B529454340/', R + 'B530113698/', R + 'B530172600/', R + 'B533285952/', R + 'B534870868/', R + 'B536747483/', R + 'B536804545/', R + 'B537692699/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual bar; book by phone, Tabelog or Google Maps.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-20-9 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October 2026 notices) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.686842, 139.728039); cross-checked: GSI 東京都新宿区四谷一丁目20番地 (lot) 58m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533285952/', R + 'B528487586/', R + 'B427642292/'],
    price_note: 'No published prices read; items from 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hand-rolled taco duo', '', 'Tacos', 'ask', 'no', 'May and August 2026 reviews.', 'taco_duo'),
      it('', '', 'Guacamole', '', 'Appetizers', 'ask', 'ask', 'May and June 2026 reviews.', 'guacamole'),
      it('', '', 'Mojito', '', 'Drinks', '', '', 'August–October 2026 reviews.', 'mojito'),
    ] }, {
    cuisine: 'メキシカンバル。食材や調味料の多くをメキシコから取り寄せ、メキシコビール、自家製サングリア、テキーラのカクテル (公式サイト)・手巻きタコス2種 (トマトサルサ、ワカモレとチーズ、牛、鶏)、鶏と豚のタコス、ブリトー、ナチョス、ワカモレ、アボカドサルサのサラダ、チリコンポテト、魚介入りのチーズ焼き、ローストビーフ、ハラミのステーキと串 (2025〜26年の口コミ)・飲み放題付きのコース (タコス、ナチョス、えびのフリット、メキシカンビーフステーキ。2026年9月)・キウイなど種類の多いモヒート、テキーラハイボール、ピニャコラーダ、テキーラも豊富',
    neighborhood: '四谷1-20-9 1F、新道通りから少し入ったところ。JR四ツ谷駅、南北線3番出口から徒歩1分',
    gf_detail: '要確認。2026年6月の客によればタコスの皮は揚げた小麦ではなくトウモロコシだが、ブリトー、えびのフリット、ナチョスもあり、グルテンフリーの説明はない。',
    vegan_detail: '要確認。ワカモレ、アボカドサルサのサラダ、トマトサルサは本来植物性。タコスの具は牛、鶏、豚で、チーズを使う料理も多い。',
    notes: '[メキシコ料理・四谷、新道通りわきのタコスとモヒートのバル] 四ツ谷駅から1分、メキシコ風に飾った小さなバル。サルサカバナの2店のひとつ (もう1店は中野) で、メキシコから取り寄せた食材が中心。2026年の客のお目当ては、もちもちと香ばしいトルティーヤの手巻きタコス、ワカモレとアボカドサルサ、週末に売り切れたハラミの串、そして種類の多いモヒートとテキーラ。2026年10月の客は、メキシコ政府の本格メキシコ料理の認定 Sello M を日本で最初に受けた店のひとつだと書いている。週末は満席でにぎやか、テーブルは近く、軽く一杯や2軒目向き。深夜0時まで、週末は15時から。',
  });
}

// ================================================================ 鮨 こるり
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13285110/'; const R = TB + 'dtlrvwlst/';
  const TUE = day(['18:00', '23:00']); const WF = day(['11:30', '13:30'], ['18:00', '23:00']); const SAT = day(['17:00', '23:00']);
  put({
    id: 'tokyo_sushi_koruri_yotsuya', name: '鮨 こるり (Sushi Koruri)', category: 'OMNI',
    lat: 35.687601, lng: 139.72929, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as served: the shop states it cannot accommodate requests about specific ingredients or allergies (Tabelog), and toppings are dipped in soy sauce (February 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi and fish dishes; no ingredient changes are accepted (Tabelog).',
    hours_raw: 'Tue dinner 18:00–23:00; Wed–Fri lunch 11:30–13:30 and dinner 18:00–23:00; Sat 17:00–23:00 ("Family Day": 17:00–19:00 for guests with preschool children; otherwise from 18:00 without a booking); closed Sunday and Monday, with special openings (Tabelog). Reservations taken; order the lunch bowls ahead or they may sell out; late arrivals may lose the table; no requests for specific ingredients or allergies (Tabelog). No service charge; an appetizer on request (Tabelog). 10 counter seats (12 when booked out); non-smoking, smoking area in the complex (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). English menu; sommelier (Tabelog).',
    hours: { 1: TUE, 2: WF, 3: WF, 4: WF, 5: SAT }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-6-1, コモレ四谷 1F (a little hard to find inside the complex) — 3 min from Yotsuya Stn',
    cuisine: 'Sushi counter with sake and wine pairings: the chef has over 30 years\' experience; rice seasoned to suit the toppings; small tasting pours of sake and wine and about 200 bottled wines; cobalt-blue glassware (Tabelog) · dinner courses from a nigiri-focused short course of ¥8,000 to a ¥30,000 full course with 11 sakes (November 2025); an ¥18,000 course (September and October 2025): appetizers, a sea urchin and fatty tuna hand roll, grouper sashimi, hairy crab, grilled dishes, nigiri; signatures such as five stacked slices of chutoro and simmered abalone rice with liver sauce, then sushi rice stirred into the leftover sauce (November 2025) · weekday lunch (Wed–Fri): seasonal bara chirashi ¥3,000 or hon-maguro bowl ¥3,800 with three ways to eat it, with miso soup, a small side and dessert; red-vinegar rice; a pudding-like tamagoyaki (November 2025–February 2026)',
    website: null, gmaps: gm('鮨 こるり コモレ四谷'), menu_url: null,
    notes: "[Sushi · Yotsuya, a ten-seat counter in Comore with sake pairings] A dim, cobalt-blue-accented ten-seat counter on the ground floor of the Comore Yotsuya complex, where a chef with 30 years' experience serves omakase built for drinking: the shop pours small tastes of sake and wine and keeps about 200 bottles. Diners in 2025–26 praised the side dishes as much as the nigiri — stacked chutoro, simmered abalone with liver sauce turned into a little risotto, sea-urchin and toro hand rolls — at ¥18,000–30,000, less than Ginza would charge, one 2024 diner reckoned. You need not all start at once. On Wednesday to Friday lunch there are just two red-vinegar bowls, a ten-topping bara chirashi for ¥3,000 and a tuna bowl for ¥3,800. Saturday 17:00–19:00 is a family slot for parents with small children. One 2024 diner found dishes arriving too fast; no requests for allergies.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Tabelog (corporate-member listing): "With over 30 years of experience, our chef carefully selects high-quality ingredients"; sake and wine pairings in small tastings; around 200 bottled wines; cobalt-blue glassware. A February 2026 reviewer writes that the shop "is actually part of the Marugo Group". No source names the chef. Reviews dated from July 2024 call the building new.',
      philosophy: 'Craftsmanship, carefully chosen ingredients and quality time (Tabelog).', specialty: 'Omakase with sake pairing; bara chirashi lunch.',
      anecdotes: [
        { text: '"With only 10 counter seats, it\'s nice that you can enter at your preferred time rather than all at once… the full course includes an impressive 11 types of sake." — November 2025.', source: R + 'B516684566/' },
        { text: '"This was my second visit with my grandfather… While the sushi was exceptional, the side dishes were truly outstanding." — March 2026.', source: R + 'B516323732/' },
        { text: '"The Bara Chirashi includes about ten different toppings… The sushi rice is made with red vinegar." — February 2026, weekday lunch.', source: R + 'B522000426/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨 こるり、寿司・日本酒バー・ワインバー、四谷1-6-1 コモレ四谷1F、四ツ谷駅から徒歩3分、火18:00〜23:00、水〜金11:30〜13:30・18:00〜23:00、土17:00〜23:00 (毎週土曜はファミリーデー17:00〜19:00)、日月休み、食材の指定やアレルギーには対応できない、ランチは事前注文がないと売り切れることも、サービス料なし、10席 (貸切12名)、禁煙、カード可、英語メニュー、ソムリエ、経験30年以上の職人、日本酒やワインを少量で、ボトルワイン約200種、コバルトブルーの小さなグラス。口コミ(2024年7月〜2026年3月): 8,000円の握りのコースから30,000円のフルコース (日本酒11種)、18,000円のコース、中トロの5枚重ね、鮑の肝ソース、昼は水木金のみでばらちらし3,000円と鮪丼3,800円、赤酢、プリンのような玉子焼き、まるごグループという声。',
      confidence: 'medium', sources: [TB, R + 'B489422220/', R + 'B493365815/', R + 'B493422820/', R + 'B493470019/', R + 'B502330353/', R + 'B514319157/', R + 'B516323732/', R + 'B516640405/', R + 'B516684566/', R + 'B518196589/', R + 'B519834913/', R + 'B522000426/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tabelog lists an English menu and a sommelier; dishes are explained at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-6-1 コモレ四谷 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; newest review read dated March 2026.' },
    pin_source: `Tabelog ${TB} (35.687601, 139.729290); cross-checked: GSI 東京都新宿区四谷一丁目6番 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B516640405/', R + 'B516684566/', R + 'B514319157/'],
    price_note: 'Prices from 2025–26 reviews; Tabelog lists no menu.', last_checked: TODAY, items: [
      it('', '', 'Seasonal bara chirashi (weekday lunch)', '¥3,000', 'Lunch', 'no', 'no', 'November 2025 review.', 'bara_chirashi'),
      it('', '', 'Hon-maguro bowl (weekday lunch)', '¥3,800', 'Lunch', 'no', 'no', 'November 2025 review.', 'maguro_don'),
      it('', '', 'Short nigiri course', '¥8,000', 'Course', 'no', 'no', 'November 2025 review.', 'short_course'),
      it('', '', 'Omakase course', '¥18,000', 'Course', 'no', 'no', 'September and October 2025 reviews.', 'omakase_18000'),
      it('', '', 'Full course with sake pairing (11 sakes)', '¥30,000', 'Course', 'no', 'no', 'November 2025 review.', 'full_course'),
    ] }, {
    cuisine: '日本酒とワインのペアリングの鮨カウンター: 経験30年以上の職人、ネタに合わせたシャリ、日本酒やワインを少量で、ボトルワイン約200種、コバルトブルーのグラス (食べログ)・夜は握り中心の8,000円のショートコースから日本酒11種付きの30,000円のフルコースまで (2025年11月)。18,000円のコース (2025年9月・10月): 前菜、うにとトロの手巻き、はたの刺身、毛蟹、焼き物、握り。中トロの5枚重ね、鮑の肝ソースのごはん、残ったソースにシャリを混ぜてリゾット風に (2025年11月)・平日の昼 (水〜金): 季節のばらちらし3,000円か、3通りの食べ方の本鮪丼3,800円、味噌汁、小鉢、デザート付き。赤酢のシャリ、プリンのような玉子焼き (2025年11月〜2026年2月)',
    neighborhood: '四谷1-6-1 コモレ四谷1F (建物の中で少しわかりにくい)。四ツ谷駅から徒歩3分',
    gf_detail: 'このままではグルテンフリーではない。店は食材の指定やアレルギーには対応できないとしており (食べログ)、ネタは醤油につけて食べる (2026年2月)。',
    vegan_detail: 'ヴィーガンではない。鮨と魚料理で、食材の変更は受けていない (食べログ)。',
    notes: '[鮨・四谷、コモレの10席のカウンターと日本酒のペアリング] コモレ四谷の1階、コバルトブルーをあしらった少し暗めの10席のカウンター。経験30年の職人が酒に合うおまかせを握り、日本酒やワインを少量ずつ注ぎ、ボトルは約200本。2025〜26年の客は握りと同じくらいつまみを褒めている: 重ねた中トロ、肝ソースの鮑の煮物をリゾット風に、うにとトロの手巻き。18,000〜30,000円で、銀座より安いという2024年の声も。一斉スタートではない。水〜金の昼は赤酢のシャリの丼が2種類だけで、10種ほどのネタのばらちらし3,000円と鮪丼3,800円。土曜の17〜19時は小さな子ども連れのためのファミリー枠。2024年には料理が早すぎると感じた客も。アレルギーの相談は不可。',
  });
}

// ================================================================ Wines By California Neuf
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13203728/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['17:00', '23:00']);
  put({
    id: 'tokyo_wines_by_california_neuf_yotsuya', name: 'Wines By California Neuf', category: 'OMNI',
    lat: 35.686905, lng: 139.72789, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lunch is only couscous (wheat; one February 2026 diner was served quinoa instead) with a quiche Lorraine, and dinner has quiche, pâté and fried corn fritters; the steaks and confits are not described for gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The couscous stew is lamb (with beef in one 2026 account) and the quiche has bacon; homemade pickles and the vegetables are the plant items named.',
    hours_raw: 'Mon–Fri lunch 12:00–14:30 (last order 14:00) and dinner 17:00–23:00 (last order 22:30); closed Saturday, Sunday and holidays (Tabelog). Lunch can sell out (May 2025). Table charge ¥330 (Tabelog). 15 seats: 5 at the counter, three tables for two and one for four; non-smoking; private hire possible (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Opened December 2016 (May 2025 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-20, 岩井第一ビル 2F, toward the back of Shinmichi-dōri — 3 min from Yotsuya Stn',
    cuisine: 'Bistro and wine bar: over 80 California wines plus craft beer; the house quiche and bistro classics such as hanger steak, Iberico pork, duck confit and couscous; cheese and dried fruit (Tabelog) · lunch: couscous only, ¥1,100–1,200, a freshly baked quiche Lorraine and salad with onion dressing, then lamb and vegetable stew over couscous with harissa, stew refilled on request (2025–26 reviews) · evening: freshly sliced prosciutto ¥660, house oil sardines ¥770, pickles, gizzard confit with raisins, tripe, pâté de campagne, outside-skirt steak with fries, corn fritters; mains around ¥2,000; wine by the glass from about ¥800, beer about ¥700 (2025–26 reviews)',
    website: null, gmaps: gm('Wines By California Neuf 四谷'), menu_url: null,
    notes: "[French · Yotsuya, a California-wine bistro with a couscous lunch] Up on the second floor of a quiet building toward the back of Shinmichi-dōri, a 15-seat bistro in navy and dark wood, open since 2016, pouring more than 80 California wines with French bistro cooking. Weekday lunch is one dish only and a cult favourite: a freshly baked quiche Lorraine with salad, then couscous under a spiced lamb-and-vegetable stew, refilled if you ask, with harissa on the side, for about ¥1,100 — one diner logged 30 visits. In the evening it is a calm wine bar where solo guests are welcome: sliced prosciutto, house oil sardines, gizzard confit with raisins, outside-skirt steak with fries, and glasses of Napa wine from about ¥800. Closed weekends; ¥330 table charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened December 2016 (May 2025 review).',
      background: 'No source names the owner or cooks; a May 2025 diner was greeted by "the owner" with a warm "Welcome!". Tabelog: over 80 carefully selected California wines; signature quiche; sommelier available.',
      philosophy: null, specialty: 'Couscous lunch with quiche; California wines.',
      anecdotes: [
        { text: '"I\'m sad to think about how many more times I can visit now that I\'m leaving Yotsuya… the quiche and couscous were consistently delicious." — March 2026, a 29th visit.', source: R + 'B436610531/' },
        { text: '"Unlike the couscous typically found in France, the vegetables here are not stewed but rather served fresh… You can have as much ragu as you like." — March 2026, lunch.', source: R + 'B524141447/' },
        { text: '"I was particularly surprised by how well the raisins paired with the confit gizzards." — April 2025, solo at 17:00.', source: R + 'B505860364/' },
      ],
      japanese_sources_summary: '食べログ: Wines By California Neuf、ビストロ・ワインバー・ダイニングバー、四谷1-20 岩井第一ビル2F、四ツ谷駅から徒歩3分、月〜金12:00〜14:30 (L.O.14:00)・17:00〜23:00 (L.O.22:30)、土日祝休み、テーブルチャージ330円、15席 (カウンター5、2人がけ3卓、4人がけ1卓)、禁煙、カード可、ソムリエ、カリフォルニアワイン80種以上、名物のキッシュ、ハラミステーキ、イベリコ豚、鴨のコンフィ、クスクス。口コミ(2025年2月〜2026年9月): ランチはクスクスのみ1,100〜1,200円、キッシュロレーヌとサラダ、仔羊と野菜の煮込み、おかわり可、ハリッサ、夜は生ハム660円、自家製オイルサーディン770円、砂肝のコンフィ、ハラミとフライドポテト、コーンのフリット、グラスワイン800円ほどから、2016年12月オープン。',
      confidence: 'medium', sources: [TB, R + 'B304391256/', R + 'B436610531/', R + 'B456998422/', R + 'B500690108/', R + 'B504644784/', R + 'B505860364/', R + 'B505889844/', R + 'B509652022/', R + 'B524141447/', R + 'B524875681/', R + 'B527552650/', R + 'B535067226/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One-dish lunch; at night ask the sommelier for a California wine.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-20 岩井第一ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.686905, 139.727890); cross-checked: GSI 東京都新宿区四谷一丁目20番地 (lot) 72m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B505889844/', R + 'B304391256/', R + 'B456998422/'],
    price_note: 'Prices from 2025–26 reviews; Tabelog lists no menu.', last_checked: TODAY, items: [
      it('', '', 'Couscous lunch with quiche and salad', '¥1,100', 'Lunch', 'no', 'no', 'May–June 2025 reviews; ¥1,200 in another May 2025 account.', 'couscous_lunch'),
      it('', '', 'Freshly sliced prosciutto', '¥660', 'À la carte', 'ask', 'no', 'August 2025 review.', 'prosciutto'),
      it('', '', 'Homemade oil sardines', '¥770', 'À la carte', 'ask', 'no', 'August 2025 review.', 'oil_sardines'),
      it('', '', 'Table charge', '¥330', 'Charge', '', '', 'Tabelog.', 'table_charge'),
    ] }, {
    cuisine: 'ビストロ兼ワインバー: 80種以上のカリフォルニアワインとクラフトビール、名物のキッシュとハラミステーキ、イベリコ豚、鴨のコンフィ、クスクスなどのビストロ料理、チーズとドライフルーツ (食べログ)・ランチはクスクスだけで1,100〜1,200円: 焼きたてのキッシュロレーヌと玉ねぎドレッシングのサラダ、それからスパイスのきいた仔羊と野菜の煮込みをかけたクスクスにハリッサ、煮込みはおかわりできる (2025〜26年の口コミ)・夜: 切りたての生ハム660円、自家製オイルサーディン770円、ピクルス、砂肝のコンフィとレーズン、トリッパ、パテ・ド・カンパーニュ、ハラミステーキとフライドポテト、コーンのフリット。メインは2,000円前後、グラスワインは800円ほどから、ビールは700円ほど (2025〜26年の口コミ)',
    neighborhood: '四谷1-20 岩井第一ビル2F、新道通りの奥のほう。四ツ谷駅から徒歩3分',
    gf_detail: '要確認。ランチはクスクス (小麦。2026年2月の客にはキヌアが出た) とキッシュロレーヌだけで、夜もキッシュ、パテ、コーンのフリット。ステーキやコンフィのグルテンについての説明はない。',
    vegan_detail: '要確認。クスクスの煮込みは仔羊 (2026年のある口コミでは牛も)、キッシュにはベーコン。植物性で名前が出るのは自家製ピクルスと野菜。',
    notes: '[フレンチ・四谷、クスクスのランチのカリフォルニアワインのビストロ] 新道通りの奥、静かなビルの2階にある紺と濃い木の色の15席のビストロ。2016年からカリフォルニアワインを80種以上そろえ、フランスのビストロ料理を出す。平日のランチは一品だけで熱烈なファンがいる: 焼きたてのキッシュロレーヌとサラダ、それからスパイスのきいた仔羊と野菜の煮込みをかけたクスクス。煮込みは頼めばおかわりでき、ハリッサを添えて1,100円ほど。30回通ったという人も。夜は落ち着いたワインバーで、ひとりでも歓迎: 切りたての生ハム、自家製オイルサーディン、レーズンを添えた砂肝のコンフィ、ハラミステーキとフライドポテト、800円ほどからのグラスの Napa のワイン。土日休み、テーブルチャージ330円。',
  });
}

// ================================================================ 餃子酒場 四谷本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13146843/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_gyoza_sakaba_yotsuya', name: '餃子酒場 四谷本店 (Gyoza Sakaba Yotsuya Honten)', category: 'OMNI',
    lat: 35.686834, lng: 139.727782, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: gyoza in wheat wrappers, noodle dishes (tantanmen, yakisoba, cold noodles) and soy-based Chinese sauces; nothing gluten-free is described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The listing ticks "Vegetarian options", but the gyoza are meat- or seafood-filled and no vegan dish is named.',
    hours_raw: 'Daily 11:00–15:00 and 17:00–23:00 (Tabelog). Reservations taken; no booking needed for most lunches (2026 reviews). 50 seats: 16 on the ground floor (counter and tables), 34 in the basement with semi-private tables; hire for 20–50+; smoking allowed (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog); PayPay accepted (June 2026). Takeaway (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-19, アーバン四谷ビル B1F–1F, on Shinmichi-dōri — 2 min from Exit 2 of Yotsuya Stn',
    cuisine: 'Gyoza and Chinese tavern: crisp-bottomed, juicy gyoza and sweet-spicy fried chicken wings are the house pride (Tabelog) · lunch sets around ¥930–980 with salad, soup or almond tofu: fried rice with six gyoza ¥930; tantanmen or Taiwanese ramen with half fried rice ¥980; daily set (e.g. shrimp and scrambled egg) ¥980 with free rice refills; mapo tofu set; dry tantanmen; salt-citrus cold noodles (May–August 2026) · gyoza: plain, shrimp, squid, a three-kind platter; three gyoza ¥200 as an add-on (2026 reviews) · evening: spicy chicken wings, mapo tofu, leek and liver stir-fry, small-fish salad, seafood yakisoba in thick sauce, dan dan noodles, sesame dumplings; draft beer, highballs',
    website: null, gmaps: gm('餃子酒場 四谷本店'), menu_url: null,
    notes: "[Gyoza · Yotsuya, a two-floor gyoza and Chinese tavern on Shinmichi-dōri] A plain, roomy gyoza house over two floors on Shinmichi-dōri, open every day for lunch and dinner, that keeps going when the street's smaller places are full. Lunch is the draw for 2026 office workers: a set of fried rice and six gyoza for ¥930, or tantanmen, Taiwanese ramen or the daily special with half fried rice for ¥980, with almond tofu to finish and free rice refills, usually served within ten minutes. At night it turns tavern: three-kind gyoza platters, crisp spicy chicken wings, mapo tofu and seafood yakisoba with beer. Reviews call the food solid rather than special and the service brisk to curt. Smoking is allowed.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'No source names the owner or cooks; Tabelog gives no opening date. A web search found a shop of the same name in Kachidoki, not confirmed as related.',
      philosophy: '"Enjoy delicious food and stay healthy" (Tabelog, machine-translated).', specialty: 'Gyoza; spicy chicken wings.',
      anecdotes: [
        { text: '"The weekly special menu features Taiwanese ramen with half fried rice for JPY 980… From entering the restaurant to finishing my meal took less than 30 minutes." — August 2026, a fourth visit.', source: R + 'B462621945/' },
        { text: '"The gyoza were delicious with a thin skin and generous filling. The shrimp gyoza had a nice crunch from the shrimp." — July 2026, ¥4,400 with beer.', source: R + 'B531138066/' },
        { text: '"Just when I was feeling lost, I stumbled upon this place… It seems like a reliable spot to turn to when in need." — October 2026, Friday night.', source: R + 'B536663626/' },
      ],
      japanese_sources_summary: '食べログ: 餃子酒場 四谷本店、中華料理・餃子・四川料理、四谷1-19 アーバン四谷ビルB1F〜1F、JR・地下鉄四ツ谷駅2番出口から徒歩2分、毎日11:00〜15:00・17:00〜23:00、50席 (1F 16席、B1 34席、半個室あり)、喫煙可、カード可、テイクアウト、外はパリッと中はジューシーな餃子、甘辛の手羽先。口コミ(2025年10月〜2026年10月): 炒飯と焼き餃子6個930円 (杏仁豆腐付き)、担々麺や台湾ラーメンと半炒飯980円、日替わり定食980円 (ご飯おかわり自由)、麻婆豆腐定食、海老餃子、餃子3種盛り、手羽先、海鮮あんかけ焼きそば、胡麻団子、PayPay 可、接客はそっけないという声。',
      confidence: 'low', sources: [TB, R + 'B462621945/', R + 'B527512477/', R + 'B528187453/', R + 'B529148915/', R + 'B529592801/', R + 'B530578468/', R + 'B531138066/', R + 'B534461672/', R + 'B535165933/', R + 'B536663626/', R + 'B537159075/', R + 'B537464982/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the lunch board or menu; quick service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-19 アーバン四谷ビル B1F〜1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.686834, 139.727782); cross-checked: GSI 東京都新宿区四谷一丁目19番地 (lot) 52m. Wines By California Neuf (tokyo_wines_by_california_neuf_yotsuya, address_ja "東京都新宿区四谷1-20 岩井第一ビル 2F") is 13 m away in a different building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528187453/', R + 'B529148915/', R + 'B530578468/'],
    price_note: 'Lunch prices from May–August 2026 reviews; Tabelog lists no menu.', last_checked: TODAY, items: [
      it('', '', 'Fried rice with six grilled gyoza (lunch, with almond tofu)', '¥930', 'Lunch', 'no', 'no', 'May 2026 review.', 'chahan_gyoza'),
      it('', '', 'Tantanmen with half fried rice (lunch)', '¥980', 'Lunch', 'no', 'no', 'May 2026 review.', 'tantanmen_set'),
      it('', '', 'Daily set meal (lunch, free rice refills)', '¥980', 'Lunch', 'ask', 'no', 'June 2026 review.', 'daily_set'),
      it('', '', 'Three gyoza (add-on)', '¥200', 'Gyoza', 'no', 'no', 'June 2026 review.', 'gyoza_3'),
    ] }, {
    cuisine: '餃子と中華の酒場。外はパリッと中はジューシーな gyoza と甘辛の手羽先揚げが自慢 (食べログ)・ランチは930〜980円ほどでサラダ、スープ、杏仁豆腐付き: 炒飯と焼き gyoza 6個930円、担々麺か台湾ラーメンと半炒飯980円、日替わり (たとえばえびと卵の炒め) 980円でご飯おかわり自由、麻婆豆腐定食、汁なし担々麺、塩レモンの冷やし麺 (2026年5〜8月)・gyoza: 普通、えび、いか、3種盛り。追加の3個200円 (2026年の口コミ)・夜: 辛い手羽先、麻婆豆腐、レバニラ、じゃこサラダ、海鮮あんかけ焼きそば、担々麺、胡麻団子。生ビール、ハイボール',
    neighborhood: '四谷1-19 アーバン四谷ビルB1F〜1F、新道通り。四ツ谷駅2番出口から徒歩2分',
    gf_detail: 'グルテンフリーではない。小麦の皮の gyoza、麺料理 (担々麺、焼きそば、冷やし麺)、醤油ベースの中華のたれ。グルテンフリーの説明はない。',
    vegan_detail: '要確認。食べログにはベジタリアン対応の印があるが、gyoza は肉や魚介入りで、ヴィーガンの料理名はない。',
    notes: '[餃子・四谷、新道通りの2フロアの餃子と中華の酒場] 新道通りの2フロアの飾り気のない広い餃子の店。毎日昼も夜も開いていて、通りの小さな店が満席でも入れる。2026年の会社員のお目当てはランチ: 炒飯と gyoza 6個のセットが930円、担々麺、台湾ラーメン、日替わりに半炒飯で980円、締めに杏仁豆腐、ご飯はおかわり自由、たいてい10分以内に出てくる。夜は酒場で、gyoza の3種盛り、パリッと辛い手羽先、麻婆豆腐、海鮮焼きそばにビール。口コミでは味は特別ではないが手堅く、接客はきびきびからそっけないまで。喫煙可。',
  });
}

save();
