// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 9.
//   + ちゃぶ台バル 8※ Chabudai Bar 8※ (world dishes in a renovated old house near Umeda Sky Building, since 2008; vegan options)
//   + 鉄板焼き 華粋 Teppanyaki Hanaui (seven-seat teppan counter, Kitashinchi; owner-chef Ryuichi Yasekawa)
//   + Le Comptoir de シャンパン食堂 (French tapas and champagne, Kitashinchi)
//   + 弥さか Yasaka (Japanese omakase and wine, Kitashinchi, since 2021)
//   - ペスカ 北新地店 27082395 skipped: PESCA is already in data (osaka_pesca_shinsaibashi), same "Paitza" signature.
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-01, after b8): odd ids in order 27020501, 27082395,
//   27116105, 27069991, 27124477.
//   Chain check: Chabudai Bar, Hanaui and Yasaka: no other shop found. Le Comptoir belongs to the シャンパン食堂 group (北新地本店,
//   this shop, and Stand Champagne Shoku in Kitashinchi, Akasaka Mitsuke and Ebisu; Tabelog remarks), five shops, none in data.
//   None of the four is in data/osaka.json (grep by id, name and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw6-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27082395', 'ペスカ 北新地店: branch of PESCA, already in data as osaka_pesca_shinsaibashi; both list the "Paitza" pastry-crust pizza as the signature (Tabelog).');

// ================================================================ ちゃぶ台バル 8※
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27020501/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:45', '14:00'], ['18:00', '23:00']);
  put({
    id: 'osaka_chabudai_bar_8_oyodo', name: 'ちゃぶ台バル 8※ (Chabudai Bar 8※)', category: 'OMNI',
    lat: 34.703004, lng: 135.4902, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking; the shop asks for allergies with course bookings (Tabelog). No gluten information. Tacos come in tortillas, and the jerk chicken and other dishes use house spice blends whose ingredients are not listed.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Shop statement (Tabelog): "Vegetarian and vegan options are available as well"; Tabelog lists vegan and vegetarian options. Reviews describe vegetable-rich lunch plates and roasted vegetables with balsamic sauce (2025), but most named dishes (taco rice with ground beef, jerk chicken, garlic shrimp) are meat or seafood, so ask which dishes can be made vegan.',
    hours_raw: 'Tue–Sat 11:45–14:00 (last order 13:30) and 18:00–23:00 (last order 22:00); closed Sunday and Monday, but groups can book on closed days by phone (Tabelog). Lunch was taco rice only on a June 2026 visit. Dinner cover (otoshi) ¥350 (Tabelog). Cards (VISA, Master, JCB, AMEX), IC cards and other e-money, PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay (Tabelog). 35 seats at low chabudai tables, shoes off, plus a half-floor nook; private hire 20–50; non-smoking; English menu and digital menu; children welcome; takeout, bento and hors-d\'oeuvre catering (Tabelog; 2026 reviews). Opened 12 May 2008 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'A back street two minutes from Umeda Sky Building, in a renovated old house — 505 m from JR Osaka Stn (Tabelog)',
    cuisine: 'Creative dishes of many genres with house-made spices and fish and vegetables from the market each day (Tabelog) · lunch: taco rice ¥900, +¥300 for jerk chicken (May 2025); large taco rice ¥1,100 (July 2026), three rice sizes and a Gorgonzola sauce to change the flavour (June 2026); a daily plate of grilled pork loin with salad, potage and rice ¥1,200 (May 2025) · evening: jerk chicken, tacos, roasted vegetables with balsamic, garlic shrimp, carpaccio (2025–2026) · courses with 120-minute all-you-can-drink: standard ¥5,000 (6 dishes, carpaccio, special of the day, jerk chicken), slightly luxurious ¥6,000 (8 dishes) (Tabelog); the listing also mentions ¥4,400 and ¥5,500 courses, and diners paid ¥4,400 (May 2026) and about ¥4,600 (January 2026)',
    website: null, gmaps: gm('ちゃぶ台バル 8※'), menu_url: null,
    notes: "[World dishes · by Umeda Sky Building, low tables in an old house] A renovated old house on a back street two minutes from the Umeda Sky Building, where you take off your shoes and sit at low chabudai tables (there is also a half-floor nook). The kitchen cooks across cuisines with its own spice blends; diners keep coming back for the jerk chicken and the taco rice, which is the whole lunch menu some days, in three sizes with a Gorgonzola sauce on the side. Dinner is all-you-can-drink courses from about ¥4,400 for groups and office parties. The shop says it has vegetarian and vegan options. Diners describe a friendly owner and a cosy, slightly cramped room; one found the spicy seasoning repetitive, and the low tables are hard on the legs over a long evening. Closed Sundays and Mondays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; "friendly", May 2026 review)'], origin: null, background: 'Shop text (Tabelog): a cozy 35-seat restaurant in a renovated traditional house two minutes from Umeda Sky Building; fresh ingredients from the market each day, house-made spices, creative dishes across genres; lunch and dinner, plus bento and hors-d\'oeuvre catering; vegetarian and vegan options. Opened 12 May 2008.', philosophy: 'Deliciousness across genres, from the day\'s market (Tabelog).', specialty: 'Taco rice; jerk chicken.',
      anecdotes: [
        { text: '"As always, I enjoyed pleasant conversations with the friendly owner and had a great time with the delicious dishes." — May 2026, a workplace gathering.', source: R + 'B526287932/' },
        { text: '"For lunch, they only offered Taco Rice at 8*. I ordered it with all the toppings, but unfortunately, they were out of avocado." — June 2026.', source: R + 'B530373840/' },
        { text: '"The chabudai, which the restaurant is named after, creates a nice ambiance, but sitting for a long time can be uncomfortable for your legs." — August 2026.', source: R + 'B534153830/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B506889242/', R + 'B508211770/', R + 'B508400572/', R + 'B519251218/', R + 'B522919183/', R + 'B526287932/', R + 'B526333366/', R + 'B530373840/', R + 'B533895276/', R + 'B534153830/'] },
    cultural_comfort: { level: 'english', note: 'English menu and digital menu (Tabelog); some overseas visitors (May 2025). Shoes off, low tables.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Tabelog course notes: "If you have any allergies, dislikes, or specific dish requests, please let us know when making your reservation."', source: TB }], positives: [{ text: 'Shop statement (Tabelog): "Vegetarian and vegan options are available as well"; Tabelog lists vegan and vegetarian options.', source: TB }] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区大淀南1-2-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区大淀南一丁目2番5号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B506889242/', R + 'B526333366/'],
    price_note: 'Lunch prices from May 2025 and July 2026 reviews; courses from Tabelog (tax included); diners paid ¥4,400 and about ¥4,600 for courses in 2026.', last_checked: TODAY, items: [
      it('', '', 'Taco rice (lunch); large ¥1,100; +¥300 jerk chicken', '¥900', 'Lunch', 'ask', 'ask', 'May 2025 and July 2026 reviews.', 'taco_rice'),
      it('', '', 'Standard course with 120-minute all-you-can-drink (6 dishes)', '¥5,000', 'Course', 'ask', 'ask', 'Tabelog listing.', 'course_5000'),
      it('', '', 'Slightly luxurious course with 120-minute all-you-can-drink (8 dishes)', '¥6,000', 'Course', 'ask', 'ask', 'Tabelog listing.', 'course_6000'),
    ] }, {
    cuisine: 'いろいろなジャンルの創作料理、自家製のスパイス、毎日市場から届く魚と野菜 (食べログ)・ランチ: タコライス900円、ジャークチキンをのせてプラス300円 (2025年5月)、大盛りのタコライス1,100円 (2026年7月)、ご飯は3つの量から選べて、ゴルゴンゾーラのソースで味変も (2026年6月)、日替わりは豚ロースのグリルにサラダ、ポタージュ、ご飯で1,200円 (2025年5月)・夜: ジャークチキン、タコス、焼き野菜のバルサミコ、ガーリックシュリンプ、カルパッチョ (2025〜2026年)・120分飲み放題つきのコース: スタンダード5,000円 (6品、カルパッチョ、本日のおすすめ、ジャークチキン)、ちょっと贅沢な6,000円 (8品) (食べログ)。食べログには4,400円と5,500円のコースの記載もあり、2026年5月は4,400円、2026年1月は4,600円ほどだったという口コミ',
    neighborhood: 'Umeda Sky Building から歩いて2分の裏通り、古民家を改装した店。JR大阪駅から505m (食べログ)',
    gf_detail: '予約時に要確認。コースの予約ではアレルギーを伝えてほしいとのこと (食べログ)。グルテンの情報なし。タコスはトルティーヤで、ジャークチキンなどの料理には自家製のスパイスを使い、材料は書かれていない。',
    vegan_detail: '店の説明 (食べログ): ベジタリアンとヴィーガンのメニューもある。食べログにはヴィーガンとベジタリアンのオプションの表示がある。口コミには野菜たっぷりのランチや焼き野菜のバルサミコ (2025年) もあるが、名前の挙がる料理 (ひき肉のタコライス、ジャークチキン、ガーリックシュリンプ) は肉か魚介なので、ヴィーガンにできる料理を確認して。',
    notes: '[多国籍・Umeda Sky Building の近く、古民家のちゃぶ台] Umeda Sky Building から2分の裏通りにある、古民家を改装した店で、靴を脱いでちゃぶ台を囲む (中2階の隠れ家のような席も)。自家製のスパイスでいろいろな国の料理を作り、ジャークチキンとタコライスがお目当て。タコライスはランチのメニューこれだけという日もあり、ご飯の量は3つから選べてゴルゴンゾーラのソースもつく。夜は4,400円ほどからの飲み放題つきのコースで、グループや会社の飲み会に。ベジタリアンとヴィーガンのメニューもあると店は書いている。気さくなオーナーと、こぢんまりして少しせまい店内という声。スパイスの味が似ていて単調という人もいて、ちゃぶ台は長く座ると足がつらい。日曜・月曜休み。',
  });
}

// ================================================================ 鉄板焼き 華粋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27116105/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'https://www.teppanyaki-hanasui.com/';
  const H = day(['12:00', '22:00']);
  put({
    id: 'osaka_teppanyaki_hanaui_kitashinchi', name: '鉄板焼き 華粋 (Teppanyaki Hanaui)', category: 'MOM_AND_POP',
    lat: 34.697672, lng: 135.497959, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Courses include foie gras with bread, a sukiyaki-style course (sukiyaki sauce is usually soy-based with wheat), garlic rice and sauces; a diner who skipped foie gras was given another dish (July 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: teppan courses of wagyu, abalone, foie gras and seafood.',
    hours_raw: 'Daily 12:00–22:00 per Tabelog; on weekends and holidays dinner runs in two seatings at 18:00 and 20:30 (Tabelog), and a March 2026 diner describes the same two seatings for dinner generally. Reservation only; special prices for bookings through the shop\'s Instagram (Tabelog). Closed the third Sunday of each month and 2–3 other days a month (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards and other e-money, PayPay, d Barai, Rakuten Pay, au PAY, Alipay (Tabelog). 7 counter seats; private hire by phone; non-smoking; bring-your-own drinks (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, JMビル B1F — 3 min from JR Kitashinchi Stn',
    cuisine: 'Teppanyaki of A5 wagyu fillet and live domestic black abalone, finished with an abalone-liver sauce (Tabelog) · courses (Tabelog, tax included): recommended course with abalone, fillet and strip loin ¥11,500 (10 dishes), with an anniversary cake ¥13,000; simple course without abalone and double fillet ¥11,500; a VIP course (December 2025) · a March 2026 course: sea bream with fresh-grated wasabi, oyster and wakame soup, foie gras on dashi-simmered daikon with balsamic, live Nagasaki abalone in a truffle-scented liver sauce turned into risotto with rice, tenderloin, ribeye sukiyaki-style with an onsen egg, garlic rice · seasonal starters: tuna and bonito sashimi with daikon in place of rice (November 2025), firefly squid and clam soup (March 2026); shirako (November 2025) · foie gras rice (July 2026) · sake and wine; mini bottles of sparkling; non-alcoholic wine (2025–2026)',
    website: OFF, gmaps: gm('鉄板焼き 華粋 北新地'), menu_url: null,
    notes: "[Teppanyaki · Kitashinchi, seven seats around one griddle] A seven-seat basement teppan counter in Kitashinchi, run by owner-chef Ryuichi Yasekawa (Tabelog), that diners call remarkable value for the area. Courses at ¥11,500 run from sashimi or a seasonal soup through foie gras on dashi-soaked daikon to live abalone in a truffle-scented liver sauce, which the chef turns into a small risotto with rice, then wagyu fillet and a sukiyaki-style ribeye with an onsen egg and garlic rice. A November 2025 diner found the owner-chef working alone and very friendly; another regular comes four or five times a year. Dishes can be swapped (one diner skipped foie gras), and the anniversary cake is ¥1,500 more. Reservation only; bring your own wine if you like.",
    chef_bio: { chef_name: 'Ryuichi Yasekawa', roles: ['Owner-chef (Tabelog: "Owner Chef Ryuichi Yasekawa")'], origin: null, background: 'Shop text (Tabelog): high-quality teppanyaki at a counter only; ingredients from trusted suppliers, the pride being A5 wagyu fillet and live domestic black abalone, finished with a rich abalone-liver sauce; an open kitchen; local sake and wine. Reviews: on a November 2025 visit "the owner-chef was running the place" alone and was very friendly; "The chef\'s kindness truly enhances the deliciousness of the dishes" (July 2026).', philosophy: 'Ingredients delicious to look at and to eat (Tabelog).', specialty: 'Live abalone with liver sauce; foie gras on daikon; wagyu fillet.',
      anecdotes: [
        { text: '"The liver sauce was simply outstanding, and the addition of truffle aroma made it elegant without being too heavy. I also appreciated the touch of adding a bit of rice at the end" — March 2026, a birthday course.', source: R + 'B429524207/' },
        { text: '"The highlight of the day was the foie gras with radish." — November 2025.', source: R + 'B516697503/' },
        { text: '"I visit this place about 4 to 5 times a year." — July 2026; the shop swapped the foie gras for another dish on request.', source: R + 'B532183138/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B429524207/', R + 'B516697503/', R + 'B519858810/', R + 'B520000110/', R + 'B525542095/', R + 'B527892140/', R + 'B528457507/', R + 'B529536542/', R + 'B531875880/', R + 'B532183138/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set teppan courses at a seven-seat counter, booked ahead (Tabelog). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-5-31 JMビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目5番31号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included); cheaper rates for Instagram bookings.', last_checked: TODAY, items: [
      it('', '', 'Recommended course: abalone, wagyu fillet and strip loin (10 dishes)', '¥11,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'recommended_course'),
      it('', '', 'Recommended course with anniversary cake', '¥13,000', 'Course', 'no', 'no', 'Tabelog listing.', 'anniversary_course'),
      it('', '', 'Simple course (no abalone, double wagyu fillet)', '¥11,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'simple_course'),
    ] }, {
    cuisine: 'A5 の和牛のヒレと国産の活け黒アワビの鉄板焼き、アワビは肝のソースで仕上げる (食べログ)・コース (食べログ、税込): アワビ、ヒレ、ロースのおすすめコース11,500円 (10品)、記念日のケーキつき13,000円、アワビなしでヒレ2倍のシンプルコース11,500円、VIP コース (2025年12月)・2026年3月のコース: おろしたての山葵の鯛、牡蠣とわかめのお吸い物、だしで炊いた大根にフォアグラのバルサミコ、Nagasaki の天然の活けアワビのトリュフ香る肝ソース、残ったソースにご飯でリゾットに、ヒレ、温泉卵ですき焼き風のリブロース、ガーリックライス・季節の前菜: 大根をシャリに見立てたマグロとカツオの刺身 (2025年11月)、ホタルイカとはまぐりのお吸い物 (2026年3月)、白子 (2025年11月)・フォアグラのご飯 (2026年7月)・日本酒とワイン、スパークリングのミニボトル、ノンアルコールのワイン (2025〜2026年)',
    neighborhood: '北新地、JMビルの地下1階。JR北新地駅から徒歩3分',
    gf_detail: '予約時に要確認。グルテンの情報なし。コースにはパンを添えたフォアグラ、すき焼き風の料理 (割下はふつう小麦を含む醤油ベース)、ガーリックライス、ソースがある。フォアグラを別の料理に替えてもらった人も (2026年7月)。',
    vegan_detail: 'ヴィーガンではありません。和牛、アワビ、フォアグラ、魚介の鉄板焼きのコース。',
    notes: '[鉄板焼き・北新地、鉄板を囲む7席] 北新地の地下にある7席の鉄板焼きのカウンターで、オーナーシェフは Ryuichi Yasekawa さん (食べログ)。このあたりではとてもお得という声が多い。11,500円のコースは刺身や季節のお吸い物から、だしのしみた大根にのせたフォアグラ、トリュフ香る肝ソースの活けアワビ (残ったソースはご飯を入れて小さなリゾットに)、和牛のヒレ、温泉卵のすき焼き風のリブロースとガーリックライスへ。2025年11月には大将がひとりで切り盛りしていて、とても気さくだったという声。年に4〜5回通う常連も。料理は替えてもらえ (フォアグラが苦手な人も)、記念日のケーキはプラス1,500円。予約制で、ワインの持ちこみも可。',
  });
}

// ================================================================ Le Comptoir de シャンパン食堂
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27069991/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'osaka_le_comptoir_champagne_shokudo', name: 'Le Comptoir de シャンパン食堂 (Le Comptoir de Champagne Pan Shokudo)', category: 'OMNI',
    lat: 34.697372, lng: 135.497238, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu centres on fresh pasta, baguette, quiche and tapas (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Dishes in reviews are mostly meat, cheese and seafood (tripe, Bolognese, Comté, squid-ink penne); a lotus-root quiche came with vegetables (August 2026).',
    hours_raw: 'Mon–Sat 18:00–23:00; closed Sundays and holidays, though it may open on some holidays (check the website) (Tabelog). Happy hour on champagne from opening until 18:59 (Tabelog). Lunch: Tabelog lists dinner only, but reviewers ate pasta lunches and a booked wagyu lunch course in January and February 2026. Service charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money, PayPay (Tabelog). 18 seats: 10 at the counter, two tables for 4, semi-private seating; non-smoking all day (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, 中山ビル 1F — a few minutes from Kitashinchi Stn exit 11-21, 4 min from Nishi-Umeda Stn',
    cuisine: 'French tapas, pasta and mains with seasonal ingredients, and champagne and wine at a counter (Tabelog) · evening: trippa (honeycomb tripe in tomato with beans) (October 2026); squid-ink and tomato penne (October 2026); lotus-root quiche (August 2026); 24-month Comté (July 2026); portions adjusted for a group of four (October 2026) · champagnes by the glass, e.g. "Réserve de la Terre", Pommery, a changing "Kimagure" champagne; Bourgogne Chardonnay (July–August 2026) · lunch (January–February 2026): fresh pasta (Bolognese, tomato-cheese); a set of baguette, appetizers, pumpkin soup, Satsuma Chami pork and Kyoto leek Bolognese, Basque cheesecake and café au lait; a booked black-wagyu lunch course · a new chef and new dishes (August 2026)',
    website: null, gmaps: gm('Le Comptoir de シャンパン食堂 北新地'), menu_url: null,
    notes: "[French · Kitashinchi, champagne and tapas at a counter] A ten-seat counter (plus two tables) from the Champagne Shokudo group, for French tapas, fresh pasta and a long list of champagne by the glass, cheapest in the happy hour before 19:00. Regulars order trippa in tomato, a lotus-root quiche or squid-ink penne alongside a glass of Pommery or the changing house champagne; a new chef arrived in summer 2026 and added dishes, which one regular called more refined (August 2026). Lunch was served early in 2026 (pasta lunches at about ¥1,000–3,000), though the listing gives dinner hours only. Expect ¥5,000–10,000 at dinner, plus 10% service. Non-smoking.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed; new by August 2026, per a review)'], origin: 'Part of the シャンパン食堂 group: シャンパン食堂 北新地本店, this shop, and Stand Champagne Shoku in Kitashinchi, Akasaka Mitsuke and Ebisu (Tabelog remarks).', background: 'Shop text (Tabelog): French tapas, pasta and main dishes with seasonal ingredients, and champagne and wine at the counter; "It\'s all about the season!" The listing notes it is not the champagne-and-gyoza bar of the same group.', philosophy: 'Seasonal food with champagne (Tabelog).', specialty: 'Champagne by the glass; trippa; fresh pasta.',
      anecdotes: [
        { text: '"Recently, the chef has changed, and the dishes have become even more refined, with many new menu items added!" — August 2026, a third visit.', source: R + 'B326572635/' },
        { text: '"The lotus root on top of the quiche is nicely roasted, providing a great crunch and is incredibly tasty." — August 2026, with Pommery.', source: R + 'B533112499/' },
        { text: '"The portion sizes were explained to us", and portions were adjusted for the group — October 2026, four people à la carte.', source: R + 'B538425643/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B326572635/', R + 'B370849578/', R + 'B522473566/', R + 'B522531251/', R + 'B522570141/', R + 'B524422761/', R + 'B531222659/', R + 'B533112499/', R + 'B537836398/', R + 'B538425643/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter ordering of tapas and wine by the glass (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-3-37 中山ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目3番37号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B522531251/'],
    price_note: 'No menu prices in the sources read; Tabelog average ¥5,000–5,999 (listing) or ¥8,000–9,999 (reviews) at dinner, plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Trippa (honeycomb tripe in tomato sauce with beans)', '', 'Tapas', 'ask', 'no', 'October 2026 review.', 'trippa'),
      it('', '', 'Lotus-root quiche', '', 'Tapas', 'no', 'no', 'August 2026 review.', 'lotus_quiche'),
      it('', '', 'Champagne by the glass', '', 'Drinks', '', '', 'Tabelog; 2026 reviews; happy hour until 18:59.', 'champagne_glass'),
    ] }, {
    cuisine: '季節の食材のフレンチのタパス、パスタ、メインと、カウンターで楽しむシャンパンとワイン (食べログ)・夜: 豆の入ったハチノスのトマト煮のトリッパ (2026年10月)、イカ墨とトマトのペンネ (2026年10月)、れんこんのキッシュ (2026年8月)、24か月熟成のコンテ (2026年7月)、4人で分けられるよう量を調整 (2026年10月)・グラスのシャンパン、たとえば Réserve de la Terre、ポメリー、日替わりの「Kimagure」シャンパン、ブルゴーニュのシャルドネ (2026年7〜8月)・ランチ (2026年1〜2月): 生パスタ (ボロネーゼ、トマトとチーズ)、バゲット、前菜、かぼちゃのスープ、Satsuma Chami 豚と Kyoto のねぎのボロネーゼ、バスクチーズケーキ、カフェオレのセット、予約制の黒毛和牛のランチコース・2026年8月には料理人が替わり新メニューも',
    neighborhood: '北新地、中山ビルの1階。北新地駅11-21出口から数分、西梅田駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。メニューは生パスタ、バゲット、キッシュ、タパスが中心 (2026年の口コミ)。',
    vegan_detail: '要確認。ヴィーガンの情報なし。口コミに出てくる料理はほとんど肉、チーズ、魚介 (トリッパ、ボロネーゼ、コンテ、イカ墨のペンネ)。れんこんのキッシュには野菜が添えてあった (2026年8月)。',
    notes: '[フレンチ・北新地、カウンターでシャンパンとタパス] シャンパン食堂のグループの、カウンター10席とテーブル2卓の店で、フレンチのタパス、生パスタ、グラスで頼めるたくさんのシャンパン。19時前のハッピーアワーがいちばん安い。常連はトマト煮のトリッパ、れんこんのキッシュ、イカ墨のペンネに、ポメリーや日替わりのシャンパンを合わせる。2026年夏に料理人が替わって料理が増え、さらに洗練されたという常連の声 (2026年8月)。2026年はじめにはランチもあった (パスタのランチで1,000〜3,000円ほど) が、食べログの営業時間は夜のみ。夜は5,000〜10,000円ほどにサービス料10%。禁煙。',
  });
}

// ================================================================ 弥さか
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27124477/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '01:00']);
  put({
    id: 'osaka_yasaka_kitashinchi', name: '弥さか (Yasaka)', category: 'OMNI',
    lat: 34.697428, lng: 135.49764, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking; the shop asks for allergies in advance (Tabelog). No gluten information. Courses include fried eel, tenderloin katsu and dashi-based dishes, and sashimi and sushi are usually served with soy sauce, which normally contains wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase of fish, shellfish, wagyu and dashi-based dishes.',
    hours_raw: 'Mon–Fri and the day before or after a holiday 18:00–1:00, closing time flexible; Saturdays on request; closed Sundays and holidays (Tabelog). Omakase courses; tell the shop about allergies and dislikes in advance; a private room for two may carry a room fee (Tabelog). Tabelog\'s translated note mentions a service charge, while its Japanese original reads なし (none). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog). 12 seats: 6 at a single-slab counter and a private room for up to 6; smoking allowed, including e-cigarettes (Tabelog; April 2025); bring-your-own drinks; sommelier; takeout (Tabelog). Opened 28 June 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi main street, 谷安セッティモビル 3F — 3 min from JR Kitashinchi Stn and Nishi-Umeda Stn',
    cuisine: 'Japanese omakase of 7–8 dishes, with salt-grilled tuna and Miyazaki beef among the highlights, and wine pairings from a sommelier (Tabelog) · dinner course ¥14,300 (¥13,000 before tax); course with a guaranteed private room for two ¥16,500 (Tabelog) · a July 2025 course: scallops and summer vegetables in jelly, amadai and winter melon soup, tuna, sea bream and squid sashimi, fried eel with beef and myoga sauce, chawanmushi with shark fin and shrimp · earlier dishes: abalone, soft-shelled turtle, oysters, shirako chawanmushi and oyster rice (February 2025); firefly-squid rice with sansho and bamboo shoot, chicken paitan with thin noodles (April 2024); wild boar, a bite-sized tenderloin katsu (December 2024); tuna and sea-urchin sushi (April 2025) · seiko crab and, unexpectedly, burgers (December 2025) · leftover rice packed to take home (April 2026)',
    website: null, gmaps: gm('弥さか 北新地'), menu_url: null,
    notes: "[Japanese · Kitashinchi main street, a small omakase counter] A small Japanese restaurant on Kitashinchi's main street with a six-seat counter cut from a single slab and a private room, serving an omakase of seven or eight dishes built on the season (salt-grilled tuna, Miyazaki beef, shark fin and shrimp chawanmushi, a seasonal rice pot) with wine chosen by a sommelier. The course is ¥14,300, or ¥16,500 with a private room for two. Reviews describe one chef cooking for the room, chatty and attentive, with a member of staff serving; it stays open late and allows smoking, e-cigarettes included. Few reviews but loyal ones: one guest is on a tenth visit (January 2026). Leftover rice comes home with you in a box.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), cooking alone (December 2024 and April 2025 reviews)', 'Serving staff member (July 2025 review)'], origin: null, background: 'Shop text (Tabelog): authentic Japanese cuisine by skilled artisans; an omakase course of carefully selected ingredients such as salt-grilled tuna and Miyazaki beef; wine pairings by a sommelier; private rooms and a single-slab counter. Opened 28 June 2021. Reviews: "Yasaka is a Japanese restaurant run by a single chef" (April 2025); "the chef was working solo during a busy time" (December 2024); "run by a tanned chef and a female staff member" (July 2025); "The chef is incredibly entertaining and a great conversationalist" (July 2025).', philosophy: 'Seasonal Japanese cooking paired with wine (Tabelog).', specialty: 'Omakase course; seasonal rice pot.',
      anecdotes: [
        { text: '"The shirako chawanmushi (savory egg custard) and the oyster takikomi gohan (seasoned rice) were particularly outstanding." — February 2025, a seventh visit.', source: R + 'B480269907/' },
        { text: '"The absolute highlight was the hotaru ika (firefly squid) rice as the closing dish." — April 2024.', source: R + 'B483112020/' },
        { text: '"I even received some leftover rice as a takeaway." — April 2026.', source: R + 'B527219063/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B480269907/', R + 'B483112020/', R + 'B494465130/', R + 'B497926443/', R + 'B509793455/', R + 'B510144113/', R + 'B511165409/', R + 'B512047418/', R + 'B520529106/', R + 'B527219063/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One omakase course at a small counter or private room (Tabelog). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Tabelog course notes: "If you have any allergies or dislike certain ingredients, please let us know in advance."', source: TB }] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-2-21 谷安セッティモビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated January and April 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目2番21号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B510144113/'],
    price_note: 'Courses from the Tabelog listing (tax included); ¥13,000 before tax in a July 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Dinner omakase course (7–8 dishes)', '¥14,300', 'Course', 'ask', 'no', 'Tabelog listing; July 2025 review.', 'omakase_course'),
      it('', '', 'Omakase course with a guaranteed private room for two', '¥16,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'private_room_course'),
    ] }, {
    cuisine: '7〜8品の和食のおまかせ、塩焼きのマグロや Miyazaki の牛肉など、ソムリエのワインのペアリング (食べログ)・夜のコース14,300円 (税抜13,000円)、2人の個室確約のコース16,500円 (食べログ)・2025年7月のコース: ホタテと夏野菜のジュレ、甘鯛と冬瓜のお吸い物、マグロ、鯛、イカの刺身、鰻の揚げ物と牛肉の茗荷ソース、フカヒレとえびの茶碗蒸し・以前の料理: アワビ、すっぽん、牡蠣、白子の茶碗蒸し、牡蠣の炊き込みご飯 (2025年2月)、山椒と筍のホタルイカのご飯、鶏白湯の細麺 (2024年4月)、猪、ひと口のヒレカツ (2024年12月)、マグロとウニの握り (2025年4月)・seiko のかにと、意外にもハンバーガー (2025年12月)・残ったご飯は持ち帰りに (2026年4月)',
    neighborhood: '北新地の本通り、谷安セッティモビル 3階。JR北新地駅と西梅田駅から徒歩3分',
    gf_detail: '予約時に要確認。アレルギーは事前に伝えてほしいとのこと (食べログ)。グルテンの情報なし。コースには鰻の揚げ物、ヒレカツ、だしの料理があり、刺身や握りにはふつう小麦を含む醤油を使う。',
    vegan_detail: 'ヴィーガンではありません。魚、貝、和牛、だしの料理のおまかせ。',
    notes: '[和食・北新地の本通り、小さなおまかせのカウンター] 北新地の本通りにある小さな和食の店で、一枚板のカウンター6席と個室。季節を軸にした7〜8品のおまかせ (マグロの塩焼き、Miyazaki の牛肉、フカヒレとえびの茶碗蒸し、季節の炊き込みご飯) に、ソムリエが選んだワインを合わせる。コースは14,300円、2人の個室確約なら16,500円。口コミでは料理人がひとりで料理し、話好きで気配りがあり、もうひとりのスタッフが接客しているとのこと。夜遅くまで営業し、喫煙可 (電子たばこも)。口コミは少ないが熱心で、2026年1月で10回目という人も。残ったご飯は折に詰めて持たせてくれる。',
  });
}

save();
