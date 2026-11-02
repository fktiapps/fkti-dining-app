// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 9.
//   + ステーキ・デボン Steak Devon (Kobe-beef teppanyaki in Kitashinchi since 1970)
//   + ベトナム酒場 ビアホイ Vietnam Sakaba Bia Hoi (Vietnamese restaurant and bar by Vietnamese cooks, Kakuda-cho, since 2001)
//   + 鳥匠 光ノ鳥 Torisho Kohnotori (yakitori and chicken sashimi from morning-slaughtered birds, opened May 2025)
//   + 梅田 個室蟹会席 かに茜 Kani Akane (crab kaiseki in private rooms, opened July 2025)
//   Chain check: Devon: one shop (devon1970.com). Bia Hoi: no branch named; invoice T2120001243534 → 株式会社カイセイソリューション,
//   Nishitenma (NTA register). Kohnotori: no branch named. Kani Akane: one shop found. None is in data/osaka.json (grep by id, name
//   and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ステーキ・デボン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27000164/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://devon1970.com/';
  const W = day(['17:00', '23:30']); const S = day(['17:00', '22:30']);
  put({
    id: 'osaka_steak_devon_kitashinchi', name: 'ステーキ・デボン (Steak Devon)', category: 'OMNI',
    lat: 34.697768, lng: 135.496918, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Teppanyaki steak with several sauces, butter-grilled seafood with tartar, garlic rice seasoned with garlic soy sauce, crab fried rice or curry to finish; the staff checked each course dish for a pregnant diner (November 2025).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Kobe-beef and wagyu teppanyaki courses with seafood and butter.',
    hours_raw: 'Mon–Fri and the day before a holiday 17:00–23:30 (last order 22:00); Sat 17:00–22:30 (last order 21:00); closed Sundays and holidays; 12:00–17:00 by reservation made the day before (Tabelog; official site). Reservations accepted, with a call back to confirm; parties over eight by phone (Tabelog). Service charge 10%, no cover (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 36 seats: an eight-seat counter and four semi-private sofa booths for up to seven, each around its own teppan, screened from each other; non-smoking with a smoking room (Tabelog; official site). Founded 1970 (official site).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '曽根崎新地1-5-10, 5F of 北新地地田ビル — 1 min from Kitashinchi Stn (JR Tozai Line), 3 min from Nishi-Umeda Stn',
    cuisine: 'Teppanyaki of Kobe beef and Kyushu A5 black wagyu, grilled by a chef at each table (Tabelog; official site) · courses (Tabelog, tax included): C course of Kyushu A5 wagyu steak 100 g, nine dishes from a roast-beef starter to garlic rice and dessert ¥14,850; teppan feast with live Ezo abalone, Akashi octopus and black-wagyu steak ¥18,150; year-end course for four or more ¥17,600 (7 September 2026 – 30 January 2027) · the Devon course ¥17,930 (December 2024) and a chef\'s course of Kobe strip loin, wagyu fillet and seafood ¥22,000 (September 2025) · in reviews: roast beef, butter-grilled seafood with homemade tartar, oysters, Ise lobster, abalone, a whole baked potato with butter, grilled vegetables, roasted Aomori garlic, then garlic rice, crab omelette fried rice, beef pilaf or curry, dessert, and coffee with cookies (2024–26) · beef fillet cutlet sandwich; dozens of wines (Tabelog)',
    website: SITE, gmaps: gm('ステーキ・デボン 北新地'), menu_url: SITE,
    notes: "[Steak · Kitashinchi, Kobe-beef teppanyaki since 1970] A Kitashinchi steakhouse founded in 1970, on the fifth floor of a building where staff wait at the ground-floor lift and a cow greets you when the doors open (2024–25 reviews). Besides an eight-seat counter there are four sofa booths, each for up to seven around its own large teppan, screened from the next so it feels private, which makes it a choice for families and business dinners. A chef at each table grills Kobe beef and A5 Kyushu wagyu with seafood such as abalone, oysters or Ise lobster, alongside a sweet buttered whole potato and roasted garlic diners rave about, before garlic rice or crab fried rice. Courses run ¥14,850–22,000 plus 10% service; one diner felt the courses lacked seasonal touches for the price (March 2026).",
    chef_bio: { chef_name: null, roles: ['Teppanyaki chefs (unnamed)'], origin: null, background: 'Per the official site (devon1970.com, read 2026-11-02): founded in Kitashinchi in 1970, "a steakhouse that history speaks for", Kobe beef bought on the strength of long trading, a counter and sofa booths for up to seven around large teppan, partitioned so neighbours cannot see each other. Per Tabelog: a dedicated chef grills in front of you; Kyushu A5 wagyu and Kobe beef; dozens of wines.', philosophy: '"Gratitude to our guests", handed down since 1970 (official site).', specialty: 'Kobe-beef teppanyaki; baked potato with butter; garlic rice.',
      anecdotes: [
        { text: '"On the 5th floor of the Kitashinchi Building, you are greeted by a cow as the elevator doors open." — September 2025, the chef\'s recommended course for JPY 22,000.', source: R + 'B513787222/' },
        { text: '"It was a very meaningful dinner." — November 2025; the staff asked about doneness each time and checked whether a pregnant diner could eat each dish.', source: R + 'B521401065/' },
        { text: '"The roasted garlic was the best I\'ve had among all the places I\'ve tried!" — March 2026.', source: R + 'B524252875/' },
      ],
      japanese_sources_summary: '公式サイト: ステーキハウス デボン、創業1970年、大阪・北新地、月〜金・祝前日17:00〜23:30 (L.O.22:00)、土17:00〜22:30 (L.O.21:00)、日・祝休み、お客様への「感謝の心」、長年の実績で仕入れる上質な神戸牛、シンプルな鉄板焼き、大きな鉄板を囲むソファー席は7名まで、パーテーションで区切った半個室、カウンター席。食べログ (店舗会員): ステーキ・鉄板焼き・焼肉、大阪市北区曽根崎新地1-5-10 北新地地田ビル 5F、JR 東西線 北新地駅から徒歩1分、12時〜17時は前日までの予約で営業、予約は折り返しの電話で確認、8名以上は電話、サービス料10%、チャージなし、カード可、電子マネー・QR 不可、36席 (ボックス席4、カウンター8)、禁煙 (喫煙室あり)、専属のシェフが目の前で焼く、Kyushu の A5 特選黒毛和牛ステーキ100gのコース14,850円、活け Ezo アワビと Akashi のタコと黒毛和牛の鉄板宴プラン18,150円、忘年会・新年会のコース17,600円 (4名から)、牛ヒレカツサンド、数十種のワイン。口コミ(2024年9月〜2026年4月): デボンコース17,930円、シェフのおすすめコース22,000円、ローストビーフ、魚介のバター焼き、自家製タルタル、カキ、Ise の海老、アワビ、バターのじゃがいも、Aomori のにんにく、ガーリックライス、カニ玉チャーハン、ビーフピラフ、カレー、コーヒーとクッキー、エレベーターの前で牛が出迎える、妊娠中で料理を確認してくれた、季節感がもう少しほしいという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B494245462/', R + 'B497985846/', R + 'B506059768/', R + 'B513787222/', R + 'B514315447/', R + 'B518312589/', R + 'B521401065/', R + 'B524252875/', R + 'B524451639/', R + 'B525875332/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set teppanyaki courses cooked at the table; bookings confirmed by phone (Tabelog). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['November 2025 review: the staff checked whether a pregnant diner could eat each dish of the course.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-5-10 北新地地田ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with a course dated to January 2027, and the official site; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目5番10号 (go) 3m; nearest other records 27–39 m away at other addresses; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B497985846/', R + 'B513787222/'],
    price_note: 'Courses from the Tabelog listing (tax included, plus 10% service); two older courses from December 2024 and September 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'C course: Kyushu A5 wagyu steak 100 g, nine dishes', '¥14,850', 'Courses', 'ask', 'no', 'Tabelog.', 'course_c'),
      it('', '', 'Teppan feast: live Ezo abalone, Akashi octopus, black-wagyu steak', '¥18,150', 'Courses', 'ask', 'no', 'Tabelog.', 'teppan_feast'),
      it('', '', 'Chef\'s course: Kobe strip loin, wagyu fillet, seafood', '¥22,000', 'Courses', 'ask', 'no', 'September 2025.', 'chef_course'),
      it('', '', 'Garlic rice to finish', '', 'Courses', 'no', 'no', 'December 2024 (garlic soy sauce).', 'garlic_rice'),
    ] }, {
    cuisine: '神戸牛とKyushu の A5 黒毛和牛の鉄板焼き、テーブルごとにシェフが焼く (食べログ、公式サイト)・コース (食べログ、税込): ローストビーフの前菜からガーリックライスとデザートまで9品のKyushu の A5 和牛ステーキ100gの C コース14,850円、活け Ezo アワビと Akashi のタコと黒毛和牛ステーキの鉄板の宴18,150円、4名からの忘年会コース17,600円 (2026年9月7日〜2027年1月30日)・デボンコース17,930円 (2024年12月)、神戸牛のサーロイン、和牛ヒレ、魚介のシェフのコース22,000円 (2025年9月)・口コミでは: ローストビーフ、魚介のバター焼きと自家製タルタル、カキ、Ise の海老、アワビ、バターをのせた丸ごとのじゃがいも、焼き野菜、Aomori のにんにくのロースト、締めはガーリックライス、カニ玉チャーハン、ビーフピラフ、カレー、デザート、クッキーつきのコーヒー (2024〜26年)・牛ヒレカツサンド、数十種のワイン (食べログ)',
    neighborhood: '曽根崎新地1-5-10、北新地地田ビルの5階。JR 東西線 北新地駅から徒歩1分、西梅田駅から3分',
    gf_detail: '予約時に要確認。グルテンの情報なし。鉄板のステーキといくつかのソース、自家製タルタルの魚介のバター焼き、ガーリック醤油のガーリックライス、締めのカニチャーハンやカレー。妊娠中の客にコースの料理をひとつずつ確認してくれたという声も (2025年11月)。',
    vegan_detail: 'ヴィーガンではありません。神戸牛と和牛の鉄板焼きのコースで、魚介とバターを使う。',
    notes: '[ステーキ・北新地、1970年からの神戸牛の鉄板焼き] 1970年創業の北新地のステーキハウスで、ビルの5階。1階のエレベーターの前でスタッフが待っていて、扉が開くと牛の置物が出迎える (2024〜25年の口コミ)。8席のカウンターのほかに、大きな鉄板を囲む7名までのソファー席が4つあり、となりとはパーテーションで仕切られ半個室のようなので、家族や接待によく使われる。テーブルごとにシェフが神戸牛やKyushu の A5 和牛、アワビやカキ、Ise の海老などの魚介を焼き、口コミで評判のバターをのせた甘いじゃがいもとにんにくのローストのあと、ガーリックライスやカニチャーハンで締める。コースは14,850〜22,000円に別途サービス料10%。値段のわりに季節感が足りないという声も (2026年3月)。',
  });
}

// ================================================================ ベトナム酒場 ビアホイ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27000284/'; const R = TB + 'dtlrvwlst/';
  const MT = day(['11:30', '22:00']); const F = day(['11:30', '23:00']); const SA = day(['11:00', '23:00']); const SU = day(['11:00', '22:00']);
  put({
    id: 'osaka_vietnam_sakaba_bia_hoi_kakuda', name: 'ベトナム酒場 ビアホイ (Vietnam Sakaba Bia Hoi)', category: 'OMNI',
    lat: 34.704976, lng: 135.501168, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Much of the menu is rice-based (pho, bun, fresh spring rolls, fried rice), but fish sauce, soy-based sauces, fried spring rolls, banh mi and a beef dish in pastry are on it; nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog\'s feature list ticks "vegan options" and "vegetarian options", but no vegan dish is named in the sources read; stir-fried water spinach and fresh herbs are on the menu, and most dishes use fish sauce, meat or seafood.',
    hours_raw: 'Mon–Thu 11:30–22:00 (last order 21:00); Fri 11:30–23:00 (last order 22:00); Sat 11:00–23:00; Sun 11:00–22:00; open all year; ask about holiday hours (Tabelog). Reservations accepted; groups of 12 or more by phone (Tabelog); weekday lunch is often full with a queue, so book (October 2026). Order on your smartphone (October 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards and other e-money, QR payment including Alipay and WeChat Pay, plus Merpay and LINE Pay (Tabelog). No service charge (Tabelog\'s original text: なし). 82 seats including a small terrace; non-smoking (Tabelog). Opened 17 July 2001 (Tabelog).',
    hours: { 0: MT, 1: MT, 2: MT, 3: MT, 4: F, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '角田町2-15, B1F of 城口ビル, down the stairs from the EST side of Shin-Midosuji — about 5–10 min from Umeda, Hankyu Osaka-Umeda and JR Osaka Stns',
    cuisine: 'Vietnamese food cooked by a chef from Vietnam, with Vietnamese beer, wine, spirits and cocktails (Tabelog) · lunch: beef-tendon pho with a mini rice bowl for ¥100 more (October 2026); bun cha, bun bo hue (October 2026); a banh mi and che buffet (October 2026); an all-you-can-eat che lunch (Tabelog) · à la carte: fresh and fried spring rolls, stir-fried water spinach with garlic, tom yum goong with shrimp, octopus and clams, shrimp and lettuce fried rice with lemongrass, green papaya salad with shrimp crackers, banh xeo, whole stuffed squid, wild boar in fermented shrimp sauce, frog, lime-leaf fries, che with coconut milk (hot or cold) (October 2026) · coriander refilled free (October 2026) · courses: Ho Chi Minh course without drinks ¥3,500; Vietnam course with 90 minutes of drinks ¥4,800; Bia Hoi course ¥5,800 (Tabelog, tax included)',
    website: null, gmaps: gm('ベトナム酒場 ビアホイ 梅田'), menu_url: null,
    notes: "[Vietnamese · Umeda, a Vietnamese beer hall since 2001] A big, cheerful Vietnamese restaurant in a basement off Shin-Midosuji east of Umeda, open since 2001 and cooked by a chef from Vietnam, where one regular has eaten for over twenty years (October 2026). Weekday lunch is busy enough to queue: pho with beef tendon, bun cha with grilled meatballs, or a banh-mi-and-che buffet. In the evening come for Vietnamese beer with fresh and fried spring rolls, water spinach in garlic, banh xeo, lemongrass fried rice with shrimp and lettuce, stuffed squid or frog, all with as much free coriander as you like. Portions are large, so share. Ordering is by smartphone; drinks courses start at ¥4,800. An October 2026 diner noticed customers who seemed to be Vietnamese.",
    chef_bio: { chef_name: null, roles: ['Chef from Vietnam (unnamed; Tabelog)'], origin: 'Vietnam (Tabelog: "Our talented chef from Vietnam")', background: 'Per the shop-maintained Tabelog listing: authentic Vietnamese dishes by a Vietnamese chef, fresh spring rolls and pho, Vietnamese beer, wine, spirits and cocktails; opened 17 July 2001. The Tabelog invoice number T2120001243534 is registered to 株式会社カイセイソリューション, Nishitenma (NTA invoice register, read 2026-11-02). An October 2026 diner has come for over 20 years.', philosophy: null, specialty: 'Pho; fresh spring rolls; banh xeo; che.',
      anecdotes: [
        { text: '"I\'ve been coming to this place for over 20 years. I love the Banh Mi & Che buffet." — October 2026.', source: R + 'B537448184/' },
        { text: '"I had been wishing for cilantro, even if it meant paying for it, and here it is for free. At this point, it feels divine." — October 2026.', source: R + 'B538224716/' },
        { text: '"I made a reservation the day before just in case, but the restaurant was fully booked, and there was a long line outside." — October 2026, a weekday lunch.', source: R + 'B537044312/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ベトナム酒場 ビアホイ、ベトナム料理・アジア・エスニック・居酒屋、大阪市北区角田町2-15 城口ビル B1F、JR 大阪駅・阪急梅田駅から徒歩10分、EST 側の Shin-Midosuji 沿い、月〜木11:30〜22:00 (L.O.21:00)、金11:30〜23:00 (L.O.22:00)、土11:00〜23:00、日11:00〜22:00、年中無休、予約可、12名以上は電話、カード・電子マネー・QR 可 (メルペイ、LINE Pay、WeChat Pay も)、サービス料なし、82席 (テラスあり)、禁煙、ヴィーガン・ベジタリアンメニューあり、2001年7月17日オープン、ベトナム人シェフの本格的なベトナム料理、生春巻きとフォー、ベトナムのビール・ワイン・地酒・カクテル、チェの食べ放題ランチ、ホーチミンコース3,500円、90分飲み放題つきのベトナムコース4,800円、ビアホイコース5,800円。口コミ(2026年5月〜10月): 空芯菜炒め、トムヤムクン、エビとレタスのレモングラスチャーハン、チェ、牛すじのフォーとミニ丼100円、ブンチャー、ブンボーフエ、バインミーとチェのビュッフェ、スマホで注文、パクチーおかわり無料、青パパイヤのサラダ、バインセオ、イカの詰め物、イノシシの発酵エビソース、カエル、ライムリーフのポテト、平日の昼は満席で行列、20年以上通う客、ベトナムの人らしい客も。',
      confidence: 'medium', sources: [TB, R + 'B527855557/', R + 'B537044312/', R + 'B537138902/', R + 'B537175362/', R + 'B537448184/', R + 'B537471071/', R + 'B537810428/', R + 'B538179032/', R + 'B538224716/', R + 'B538271271/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smartphone ordering with many options, a challenge for first-timers per an October 2026 regular; the chef is from Vietnam (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区角田町2-15 城口ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区角田町2番15号 (go) 16m; no other record within 40 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B537044312/'],
    price_note: 'Course prices from the Tabelog listing (tax included); à la carte prices not given in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Beef-tendon pho (lunch; mini rice bowl +¥100)', '', 'Lunch', 'ask', 'no', 'October 2026.', 'pho_bo'),
      it('', '', 'Fresh spring rolls', '', 'À la carte', 'ask', 'no', 'October 2026.', 'goi_cuon'),
      it('', '', 'Stir-fried water spinach with garlic', '', 'À la carte', 'ask', 'ask', 'October 2026.', 'rau_muong'),
      it('', '', 'Che with coconut milk (hot or cold)', '', 'Dessert', 'ask', 'ask', 'October 2026.', 'che'),
      it('', '', 'Ho Chi Minh course (food only)', '¥3,500', 'Courses', 'ask', 'no', 'Tabelog.', 'hcm_course'),
      it('', '', 'Vietnam course with 90 minutes of drinks', '¥4,800', 'Courses', 'ask', 'no', 'Tabelog; October 2026.', 'vietnam_course'),
    ] }, {
    cuisine: 'ベトナム人シェフのベトナム料理、ベトナムのビール、ワイン、地酒、カクテル (食べログ)・ランチ: 牛すじのフォーと100円のミニ丼 (2026年10月)、ブンチャー、ブンボーフエ (2026年10月)、バインミーとチェのビュッフェ (2026年10月)、チェの食べ放題ランチ (食べログ)・アラカルト: 生春巻きと揚げ春巻き、にんにくの空芯菜炒め、エビ、タコ、アサリのトムヤムクン、レモングラスのエビとレタスのチャーハン、えびせんつきの青パパイヤのサラダ、バインセオ、イカの丸ごと詰め物、イノシシの発酵エビソース、カエル、ライムリーフのポテト、ココナッツミルクのチェ (温かいか冷たいか) (2026年10月)・パクチーのおかわり無料 (2026年10月)・コース: 飲み物なしのホーチミンコース3,500円、90分飲み放題つきのベトナムコース4,800円、ビアホイコース5,800円 (食べログ、税込)',
    neighborhood: '角田町2-15、城口ビルの地下1階、Shin-Midosuji の EST 側から階段を下りる。梅田、阪急大阪梅田、JR 大阪の各駅から5〜10分ほど',
    gf_detail: '要確認。グルテンの情報なし。フォー、ブン、生春巻き、チャーハンなど米のものが多いが、魚醤、醤油ベースのたれ、揚げ春巻き、バインミー、パイ包みの牛肉もある。グルテンフリーの説明はない。',
    vegan_detail: '要確認。食べログの特徴に「ヴィーガンメニューあり」「ベジタリアンメニューあり」とあるが、読んだ資料にはヴィーガンの料理の名前は出てこない。空芯菜炒めや香草はあるが、ほとんどの料理に魚醤、肉、魚介を使う。',
    notes: '[ベトナム料理・梅田、2001年からのベトナムのビアホール] 梅田の東、Shin-Midosuji 沿いの地下にある大きくてにぎやかなベトナム料理店で、2001年から。ベトナム人シェフが作り、20年以上通う常連もいる (2026年10月)。平日の昼は行列ができるほどで、牛すじのフォー、つくねを焼いたブンチャー、バインミーとチェのビュッフェ。夜はベトナムのビールに生春巻きと揚げ春巻き、にんにくの空芯菜炒め、バインセオ、レモングラスのエビとレタスのチャーハン、イカの詰め物やカエルを、無料でおかわりできるパクチーとともに。量が多いので分けて。注文はスマホで、飲み放題つきのコースは4,800円から。ベトナムの人らしい客もいたという声 (2026年10月)。',
  });
}

// ================================================================ 鳥匠 光ノ鳥
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27148486/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '00:00']);
  put({
    id: 'osaka_torisho_kohnotori_sonezaki', name: '鳥匠 光ノ鳥 (Torisho Kohnotori)', category: 'OMNI',
    lat: 34.700781, lng: 135.501623, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Yakitori with salt or sauce, chicken sashimi with sweet soy sauce, fried chicken, chicken-breast tempura, chicken nanban and rice bowls with sauce; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant; pickles and white-leek skewers sit beside chicken dishes.',
    hours_raw: 'Daily 16:00–24:00 (last order food 23:00, drinks 23:30); lunch from 11:00, without skewers or grilled dishes (Tabelog). Reservations accepted; whole-shop hire for 20 or more (Tabelog). No service charge (Tabelog\'s original text: なし). Cards (VISA, Master, JCB, AMEX), IC cards and other e-money, QR payment including Alipay and WeChat Pay (Tabelog). 20 table seats; smoking allowed (Tabelog). Menu in English, Simplified Chinese and Korean, with photos (Tabelog). Opened 1 May 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sonezaki 2-10-26, ground floor of ステージ曽根崎, at the Shin-Midosuji end of the street from Ohatsu Tenjin — 3 min from Higashi-Umeda Stn exit 4',
    cuisine: 'Yakitori and chicken dishes from chicken slaughtered that morning, skewers ordered one at a time (Tabelog) · skewers ¥308 each, e.g. heart, upper thigh, neck, breast, skin (June 2026); bonjiri, tenderloin, tsukune with egg yolk, white leek, onion (May–August 2026) · assorted chicken sashimi of four kinds with sweet soy, sesame oil or salt; liver sashimi; thigh tataki with ponzu (May–August 2026) · grilled thigh with salsa, gizzard with chive kimchi, chicken-breast tempura, chicken nanban, Caesar salad, Kohnotori potato salad ¥528, Unzen ham (2026) · yakitori rice bowl, grilled rice balls with sauce, oyakodon (Tabelog; August 2026) · courses: Manpuku course of chicken sashimi, skewers and sides ¥4,000; course with all-you-can-drink ¥5,000 (Tabelog, tax included) · sake and wine, dry to sweet (Tabelog)',
    website: null, gmaps: gm('鳥匠 光ノ鳥 曽根崎'), menu_url: null,
    notes: "[Yakitori · Higashi-Umeda, chicken from that morning] A bright, white-walled yakitori room opened in May 2025 at the Shin-Midosuji end of the street that runs from Ohatsu Tenjin, three minutes from Higashi-Umeda. Everything uses chicken slaughtered that morning, so the menu leans on the raw: a platter of four chicken sashimi with sweet soy, sesame oil and salt, liver sashimi, thigh tataki with ponzu. Skewers are ordered one at a time from about ¥300 (heart, thigh, neck, skin, a juicy tsukune with egg yolk), and diners liked the grilled thigh under fresh tomato salsa and the potato salad. Courses start at ¥4,000. Smoking is allowed; there is a menu in English, Chinese and Korean.",
    chef_bio: { chef_name: null, roles: ['Grill and kitchen staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: fresh chicken dishes from "morning-caught" chicken, from yakitori and fried chicken to sashimi, oyakodon and yakitori bowls; skewers ordered from one stick; sake and wine from dry to sweet; opened 1 May 2025.', philosophy: null, specialty: 'Chicken sashimi platter; yakitori by the skewer.',
      anecdotes: [
        { text: '"The chicken sashimi comes beautifully arranged with four generous portions, instantly raising your excitement when it arrives." — May 2026.', source: R + 'B529219958/' },
        { text: '"The large piece of chicken is topped with a generous amount of salsa sauce. … The sauce, made with plenty of fresh tomatoes, is refreshing" — May 2026, the grilled chicken thigh.', source: R + 'B529219958/' },
        { text: '"This yakitori restaurant opened in May 2025 and features an impressive high-end space with a white color scheme." — August 2026.', source: R + 'B534044110/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鳥匠 光ノ鳥、焼き鳥・居酒屋・釜飯、大阪市北区曽根崎2-10-26 ステージ曽根崎 1F、東梅田駅4番出口から徒歩3分、毎日16:00〜24:00 (L.O.料理23:00、ドリンク23:30)、ランチは11時から (串焼きと焼き物はなし)、予約可、貸切は20名から、サービス料なし、カード・電子マネー・QR 可、テーブル20席、喫煙可、英語・中国語・韓国語の写真メニュー、2025年5月1日オープン、朝びきの鶏の料理、焼き鳥、から揚げ、刺身、親子丼、焼き鳥丼、串は1本から、辛口から甘口までの日本酒とワイン、満腹コース4,000円、飲み放題つきのコース5,000円。口コミ(2026年5月〜9月): 串1本308円 (ハツ、上もも、せせり、むね、皮)、ぼんじり、ささみ、卵黄のつくね、白ねぎ、玉ねぎ、鳥刺し4種盛り (甘い醤油、ごま油、塩)、レバー刺し、ももたたきのポン酢、もも焼きのサルサ、砂ずりのニラキムチ、むねの天ぷら、チキン南蛮、シーザーサラダ、光ノ鳥のポテトサラダ528円、Unzen ハム、焼き鳥丼、焼きおにぎり、白い内装、Ohatsu Tenjin から Shin-Midosuji へ抜ける道の端。',
      confidence: 'medium', sources: [TB, R + 'B529219958/', R + 'B529841132/', R + 'B530024044/', R + 'B530482494/', R + 'B531812333/', R + 'B533153825/', R + 'B534044110/', R + 'B534449018/', R + 'B535718515/', R + 'B535784261/'] },
    cultural_comfort: { level: 'english', note: 'Photo menu in English, Simplified Chinese and Korean (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎2-10-26 ステージ曽根崎 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎二丁目10番26号 (go) 8m; nearest other record osaka_ikkoku_ichijo_ohatsutenjin 27 m away at a different address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529841132/', TB],
    price_note: 'Skewer and potato-salad prices from a June 2026 review; courses from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Yakitori, per skewer (heart, thigh, neck, breast, skin)', '¥308', 'Skewers', 'ask', 'no', 'June 2026.', 'yakitori'),
      it('', '', 'Assorted chicken sashimi, four kinds', '', 'Chicken sashimi', 'ask', 'no', 'May 2026.', 'torisashi'),
      it('', '', 'Kohnotori potato salad', '¥528', 'Small plates', 'ask', 'ask', 'June 2026.', 'potesara'),
      it('', '', 'Manpuku course', '¥4,000', 'Courses', 'ask', 'no', 'Tabelog.', 'manpuku_course'),
    ] }, {
    cuisine: 'その朝さばいた鶏の焼き鳥と鶏料理、串は1本から (食べログ)・串は1本308円、たとえばハツ、上もも、ネック、むね、皮 (2026年6月)。ぼんじり、ささみ、卵黄のつくね、白ねぎ、玉ねぎ (2026年5月〜8月)・甘い醤油、ごま油、塩で食べる鳥刺し4種盛り、レバー刺し、ももたたきのポン酢 (2026年5月〜8月)・もも焼きのサルサ、砂ずりのニラキムチ、むねの天ぷら、チキン南蛮、シーザーサラダ、光ノ鳥のポテトサラダ528円、Unzen ハム (2026年)・焼き鳥丼、焼きおにぎり、親子丼 (食べログ、2026年8月)・コース: 鳥刺し、串、一品の満腹コース4,000円、飲み放題つきのコース5,000円 (食べログ、税込)・辛口から甘口までの日本酒とワイン (食べログ)',
    neighborhood: '曽根崎2-10-26、ステージ曽根崎の1階、Ohatsu Tenjin から Shin-Midosuji へ抜ける道の端。東梅田駅4番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。塩かたれの焼き鳥、甘い醤油の鳥刺し、から揚げ、むねの天ぷら、チキン南蛮、たれの丼。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。鶏料理の店で、漬物や白ねぎの串も鶏料理といっしょに出る。',
    notes: '[焼鳥・東梅田、その朝の鶏] Ohatsu Tenjin から Shin-Midosuji へ抜ける道の端、東梅田駅から3分の、白い壁の明るい焼き鳥の店で、2025年5月に開いた。鶏はすべてその朝さばいたもので、生の料理が多い: 甘い醤油、ごま油、塩で食べる鳥刺し4種盛り、レバー刺し、ももたたきのポン酢。串は300円ほどから1本ずつ頼めて (ハツ、もも、ネック、皮、卵黄のつくね)、フレッシュトマトのサルサをのせたもも焼きとポテトサラダも好評。コースは4,000円から。喫煙可、英語・中国語・韓国語のメニューあり。',
  });
}

// ================================================================ 梅田 個室蟹会席 かに茜
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27151158/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_kani_akane_sonezaki', name: '梅田 個室蟹会席 かに茜 (Umeda Kani Akane)', category: 'OMNI',
    lat: 34.699722, lng: 135.501128, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Crab courses with a dashi hotpot finished with udon, tempura in the premium courses, chawanmushi with a starchy sauce and crab vinegar.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: crab kaiseki built on crab and dashi.',
    hours_raw: 'Daily 12:00–15:00 and 17:00–23:00 (Tabelog). Reservations accepted; no cancellations by phone outside business hours (Tabelog). Service charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 18 seats, all in private rooms for two to eight; non-smoking (Tabelog). Opened 30 July 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sonezaki 2-8-7, 5F-H of コーストスタジョーネ, just off the Ohatsu Tenjin shopping street; the door is behind a sushi restaurant\'s entrance on the same floor (September 2026) — 3 min from JR Osaka and the Umeda stations',
    cuisine: 'Crab kaiseki of selected brand crab in private rooms (Tabelog) · courses (Tabelog, tax included): Kani kaiseki around a snow-crab hotpot ¥7,800 (crab and maitake on pumpkin or yam tofu, snow-crab sashimi, grilled snow crab, crab chawanmushi with lotus root, the hotpot finished with udon, dessert; September–November 2026); premium Kani kaiseki adding crab tempura ¥9,800; special kaiseki with a grilled leg of ibaragani ¥14,800 · lunch too: the ¥9,800 course at noon (October 2026) · a diner was told the sashimi crab was frozen Russian crab (October 2026) · Japanese sake and wine; Sapporo Lager Akaboshi medium bottle ¥950 (October 2026)',
    website: null, gmaps: gm('かに茜 梅田 曽根崎'), menu_url: null,
    notes: "[Crab kaiseki · Higashi-Umeda, crab in private rooms] A crab restaurant on the fifth floor of a building just off the Ohatsu Tenjin shopping street, opened in July 2025, where every table is a private room for two to eight. The kaiseki is crab from start to finish: a chilled tofu with crab, snow-crab sashimi with crab vinegar, a thick grilled leg, a crab chawanmushi, then the main snow-crab hotpot in dashi, finished with udon, for ¥7,800, with tempura added at ¥9,800 and a grilled leg of ibaragani at ¥14,800. Diners in 2026 praise the meaty legs and the calm rooms for dates and business meals; one learned the sashimi crab was frozen Russian crab (October 2026). Lunch and dinner every day, plus 10% service.",
    chef_bio: { chef_name: null, roles: ['Kitchen and service staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: a variety of crab dishes from carefully selected brand crab, crab kaiseki in fully private rooms, for entertaining clients, celebrations and dates; opened 30 July 2025.', philosophy: null, specialty: 'Snow-crab hotpot kaiseki.',
      anecdotes: [
        { text: '"The crab sashimi was reportedly made from frozen Russian crab, and it had a flavorful and delicious taste." — October 2026, the premium crab kaiseki at lunch for JPY 9,800.', source: R + 'B538198476/' },
        { text: '"After taking the elevator to the 5th floor, I found the entrance to a sushi restaurant, wondering if my destination was further inside." — September 2026.', source: R + 'B535802360/' },
        { text: '"The main dish, the crab hot pot, was served with a flavorful broth, and we finished with udon noodles." — October 2026, the JPY 7,800 course.', source: R + 'B538489916/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 梅田 個室蟹会席 かに茜、海鮮・かに・鍋、大阪市北区曾根崎2-8-7 コーストスタジョーネ 5F-H、JR 大阪駅と梅田の各駅から徒歩3分、毎日12:00〜15:00、17:00〜23:00、営業時間外は電話のキャンセル不可、予約可、サービス料10%、カード可、電子マネー・QR 不可、18席、2〜8名の個室、禁煙、2025年7月30日オープン、厳選したブランド蟹、全室個室の蟹会席、ズワイガニの鍋がメインの蟹会席7,800円、刺身と天ぷらの上蟹会席9,800円、イバラガニの焼きの特選蟹会席14,800円。口コミ(2026年4月〜11月): かにとまいたけの南京豆腐や山芋とだしの寄せもの、ズワイガニの刺身、焼きガニ、かにの茶碗蒸し (レンコン)、かに鍋と締めのうどん、デザート、カニ酢、刺身のかには冷凍のロシア産と聞いた、昼の上蟹会席、同じ階の寿司屋の入口の奥、Ohatsu Tenjin の通りからすぐ、サッポロラガー赤星の中瓶950円、個室でゆっくり。',
      confidence: 'medium', sources: [TB, R + 'B525745737/', R + 'B529065738/', R + 'B530885881/', R + 'B535241629/', R + 'B535802360/', R + 'B535819547/', R + 'B536391565/', R + 'B537065344/', R + 'B538198476/', R + 'B538489916/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set crab courses in private rooms (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曾根崎2-8-7 コーストスタジョーネ 5F-H',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎二丁目8番7号 (go) 14m; no other record within 40 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536391565/'],
    price_note: 'Course prices from the Tabelog listing (tax included, plus 10% service); September–November 2026 reviews match ¥7,800 and ¥9,800.', last_checked: TODAY, items: [
      it('', '', 'Kani kaiseki with snow-crab hotpot', '¥7,800', 'Courses', 'ask', 'no', 'Tabelog; September–November 2026.', 'kani_kaiseki'),
      it('', '', 'Premium kani kaiseki with crab sashimi and tempura', '¥9,800', 'Courses', 'no', 'no', 'Tabelog; September and October 2026.', 'jo_kani_kaiseki'),
      it('', '', 'Special kani kaiseki with a grilled ibaragani leg', '¥14,800', 'Courses', 'no', 'no', 'Tabelog.', 'toku_kani_kaiseki'),
    ] }, {
    cuisine: '厳選したブランド蟹の蟹会席を個室で (食べログ)・コース (食べログ、税込): ズワイガニの鍋がメインの蟹会席7,800円 (かにとまいたけの南京豆腐や山芋とだしの寄せもの、ズワイガニの刺身、焼きガニ、レンコン入りのかにの茶碗蒸し、うどんで締める鍋、デザート、2026年9月〜11月)、天ぷらがつく上蟹会席9,800円、イバラガニの脚1本の焼きがつく特選蟹会席14,800円・昼も: 正午に9,800円のコース (2026年10月)・刺身のかには冷凍のロシア産と聞いたという声 (2026年10月)・日本酒とワイン、サッポロラガー赤星の中瓶950円 (2026年10月)',
    neighborhood: '曾根崎2-8-7、コーストスタジョーネの5F-H、Ohatsu Tenjin の商店街からすぐ。同じ階の寿司屋の入口の奥 (2026年9月)。JR 大阪駅と梅田の各駅から3分',
    gf_detail: '予約時に要確認。グルテンの情報なし。かにのコースで、だしの鍋の締めはうどん。上のコースには天ぷら、あんの茶碗蒸し、カニ酢もある。',
    vegan_detail: 'ヴィーガンではありません。かにとだしの会席。',
    notes: '[蟹会席・東梅田、個室のかに] Ohatsu Tenjin の商店街からすぐのビルの5階にあるかにの店で、2025年7月に開き、席はすべて2〜8名の個室。会席は最初から最後までかに: かにをのせた冷たい豆腐、カニ酢で食べるズワイガニの刺身、太い焼きガニ、かにの茶碗蒸し、そしてメインのだしのズワイガニの鍋をうどんで締めて7,800円、天ぷらがついて9,800円、イバラガニの焼きがついて14,800円。2026年の口コミでは身のつまった脚と、デートや接待向きの落ち着いた個室が好評。刺身のかには冷凍のロシア産だったと聞いた人も (2026年10月)。昼も夜も毎日営業、別途サービス料10%。',
  });
}

save();
