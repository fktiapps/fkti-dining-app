// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 5.
//   + 肉食系酒場 片岡肉じろう Nikushokukei Sakaba Kataoka Nikujirou (meat-and-Chinese izakaya, 大阪駅前第2ビル B1F, since 2023)
//   + オステリア ガウダンテ 大阪駅前第4ビル店 OSTERIA Gaudente (Italian osteria since 1998; Tabelog Italian WEST 100 2021)
//   + SUSHIBAR 華美 Sushi Bar Hanabi (sushi and wine on the UMEKITA FLOOR of Grand Front Osaka North 6F)
//   + SIK eatery グラングリーン大阪店 (dim sum and Asian small plates in Umekita Park, since 2024)
//   Chain check: Nikujirou: no sister shop named on Tabelog. Gaudente: three shops (大阪駅前第4ビル店, 神戸ハーバーランド店, ルクア大阪店;
//   gaudente.jp). Hanabi: one shop of its brand, but the Tabelog remarks list it among about 19 shops of the 魚萬 group (cfs-japan.com
//   brands: 魚萬, 天乃幸, 澤ら, 福丸, La Cazuela, Lavagna, CRAU, Hakushika Classics) in Osaka, Hyogo, Kyoto and Tokyo; flagged, kept
//   like XEX WEST An. SIK eatery: two shops, うつぼ公園店 and this one (sik-eatery.com). None is in data/osaka.json (grep by id, name
//   and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 肉食系酒場 片岡肉じろう
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27138448/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['17:00', '23:00']); const S = day(['15:00', '23:00']);
  put({
    id: 'osaka_kataoka_nikujirou_ekimae_dai2', name: '肉食系酒場 片岡肉じろう (Nikushokukei Sakaba Kataoka Nikujirou)', category: 'OMNI',
    lat: 34.699132, lng: 135.497632, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Char siu in a sweet soy-style sauce, dumplings, spring rolls, fried cartilage and mapo tofu; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat izakaya of steak, char siu and Chinese dishes; the pickled mustard greens and crisp peppers are the only vegetable plates named, unexplained.',
    hours_raw: 'Mon–Fri and the days before and after a holiday 11:30–14:00 and 17:00–23:00; Saturdays and holidays 15:00–23:00; closed Sundays, but on long weekends ending on a Monday holiday it opens on the Sunday and closes the Monday; changes over Golden Week and New Year on Instagram (Tabelog). Lunch is three set meals only, and the char siu set can sell out (September 2026). At night mains and rice can be ordered without drinking (October 2026). Reservations accepted (Tabelog). No charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and other e-money, PayPay and other QR (Tabelog). 20 seats: 7 at the counter, 4 tables; smoking allowed except at lunch (Tabelog). Opened 28 July 2023 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Umeda 1-2-2, B1F of 大阪駅前第2ビル — 1 min from Kitashinchi Stn (JR Tozai Line)',
    cuisine: 'Meat, Chinese and izakaya: charcoal-grilled steak and char siu with Chinese dishes "by a craftsman with 20 years of dedication" (Tabelog) · lunch: char siu W egg set of thick pork-belly char siu, two fried eggs and shredded cabbage with egg-drop soup and free rice refills ¥1,000 (September–October 2026), with a spicy "Mao Zedong" seasoning on the side (October 2026); Australian knuckle steak set and beef-tendon curry (October 2026) · night: homemade water dumplings ¥495, spring rolls ¥583, mapo tofu ¥968, knuckle steak 1.5 times ¥1,639, fried cartilage ¥528, crisp bell peppers ¥319, pickled mustard greens ¥319 (September 2026); tenderloin steak, dote-yaki (September 2026) · draft beer ¥290 in the afternoon (September 2026)',
    website: null, gmaps: gm('片岡肉じろう 大阪駅前第2ビル'), menu_url: null,
    notes: "[Izakaya · Umeda, char siu and steak under the station buildings] A small meat bar in the basement of Osaka Ekimae Dai-2 Building, a minute from Kitashinchi Station, that pairs charcoal-grilled steak with Chinese food cooked by a chef of twenty years (Tabelog). Lunch is the draw: for ¥1,000, thick slabs of pork-belly char siu in a sweet sauce under two fried eggs on a bed of cabbage, with egg-drop soup and as much rice as you like; the dish has been on TV (Chachai-re Monday, per an October 2026 diner) and can sell out. At night the counter grills knuckle steak and serves dumplings, spring rolls and mapo tofu, and you can eat without drinking. One diner found the char siu too sweet and the afternoon beer served half-frozen (September 2026). Smoking is allowed in the evening.",
    chef_bio: { chef_name: null, roles: ['Chinese cook with twenty years of experience (unnamed; Tabelog)', 'Grill staff at the counter (2026)'], origin: null, background: 'Per the shop-maintained Tabelog listing: "a public tavern of meat × Chinese × izakaya", knuckle steak and char siu W egg as specialities, "Chinese cuisine crafted by a craftsman with 20 years of dedication"; opened 28 July 2023. An October 2026 diner notes the knuckle-steak set and beef-tendon curry were shown on "Matsuko\'s Unknown World" and the char siu W egg on "Chachai-re Monday".', philosophy: null, specialty: 'Char siu W egg set; knuckle steak.',
      anecdotes: [
        { text: '"The plate was generously piled with substantial pork belly chashu, topped with two sunny-side-up eggs." — October 2026, the Chashu W Egg set with large rice for JPY 1,000.', source: R + 'B537961183/' },
        { text: '"I ordered the Chashu Egg Set Meal, but it sold out after just a couple of servings, so it\'s best to arrive early." — September 2026, lunch.', source: R + 'B535262287/' },
        { text: '"The beer was so cold that it started to freeze and turned into a slushy." — September 2026, a JPY 290 draft beer.', source: R + 'B536266573/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 肉食系酒場 片岡肉じろう、居酒屋・肉バル・ステーキ、大阪市北区梅田1-2-2 大阪駅前第2ビル B1F、JR 北新地駅から徒歩1分、月〜金・祝前日・祝後日11:30〜14:00、17:00〜23:00、土・祝15:00〜23:00、日曜休み (連休で月曜が休みのときは日曜営業、月曜休み)、予約可、チャージなし、カード・電子マネー・QR 可、20席 (カウンター7、テーブル4)、喫煙可 (ランチは禁煙)、2023年7月28日オープン、肉×中華×居酒屋の大衆酒場、炭火焼き、ナックルステーキとチャーシューWエッグ、20年の職人の本格中華。口コミ(2026年9月〜10月): チャーシューWエッグ定食1,000円 (厚いバラのチャーシュー、目玉焼き2つ、キャベツ、かき玉スープ、ごはんおかわり自由)、ランチは3種のみ、売り切れも、ナックルステーキ定食、牛すじカレー、ゆでた gyoza 495円、春巻き583円、麻婆豆腐968円、ナックルステーキ1.5倍1,639円、軟骨の揚げ物528円、ピーマン319円、からし菜の漬物319円、フィレステーキ、dote-yaki、昼の生ビール290円、凍りかけのビール、甘めのタレ、夜も食事だけで OK、テレビ (Matsuko\'s Unknown World、Chachai-re Monday) で紹介。',
      confidence: 'medium', sources: [TB, R + 'B526133089/', R + 'B535262287/', R + 'B535376605/', R + 'B535452139/', R + 'B535920858/', R + 'B536266573/', R + 'B536910226/', R + 'B537748705/', R + 'B537961183/', R + 'B538313627/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Orders taken verbally; three set meals at lunch (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区梅田1-2-2 大阪駅前第2ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区梅田一丁目2番2号 (go) 108m (a large building). Same building as Cafe Stand El Sol (osaka_cafe_stand_el_sol_umeda, address_ja "大阪府大阪市北区梅田1-2-2 大阪駅前第2ビル B1F 43-1"), 37 m away, and しん家 (osaka_shinya_ekimae_dai2, "…大阪駅前第2ビル B1F 52号"), about 80 m away, so nothing stacks and the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526133089/', R + 'B537961183/'],
    price_note: 'Prices from September–October 2026 reviews (the ¥1,000 lunch tax included per an October 2026 review).', last_checked: TODAY, items: [
      it('', '', 'Char siu W egg set (lunch; free rice refills)', '¥1,000', 'Lunch', 'ask', 'no', 'September–October 2026.', 'chashu_w_egg'),
      it('', '', 'Knuckle steak, 1.5 portion', '¥1,639', 'Steak', 'ask', 'no', 'September 2026.', 'knuckle_steak'),
      it('', '', 'Homemade water dumplings', '¥495', 'Chinese', 'no', 'no', 'September 2026.', 'suigyoza'),
      it('', '', 'Spring rolls', '¥583', 'Chinese', 'no', 'no', 'September 2026.', 'harumaki'),
      it('', '', 'Mapo tofu', '¥968', 'Chinese', 'ask', 'no', 'September 2026.', 'mapo_tofu'),
    ] }, {
    cuisine: '肉と中華と居酒屋: 炭火焼きのステーキとチャーシューに、「20年の職人」の中華 (食べログ)・ランチ: 厚いバラのチャーシューに目玉焼き2つと千切りキャベツのチャーシュー W エッグ定食、かき玉スープとごはんおかわり自由で1,000円 (2026年9月〜10月)、辛い「Mao Zedong」風の調味料つき (2026年10月)。オーストラリア産ナックルステーキ定食、牛すじカレー (2026年10月)・夜: 自家製のゆでた gyoza 495円、春巻き583円、麻婆豆腐968円、ナックルステーキ1.5倍1,639円、軟骨の揚げ物528円、パリパリのピーマン319円、からし菜の漬物319円 (2026年9月)。フィレステーキ、dote-yaki (2026年9月)・昼の生ビール290円 (2026年9月)',
    neighborhood: '梅田1-2-2、大阪駅前第2ビルの地下1階。JR 東西線 北新地駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。甘めのタレのチャーシュー、gyoza、春巻き、軟骨の揚げ物、麻婆豆腐。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。ステーキ、チャーシュー、中華の肉の居酒屋で、野菜の皿はからし菜の漬物とピーマンくらいで、説明はない。',
    notes: '[居酒屋・梅田、駅前ビルの地下のチャーシューとステーキ] 北新地駅から1分、大阪駅前第2ビルの地下にある小さな肉の酒場で、炭火焼きのステーキと、20年の料理人の中華を出す (食べログ)。お目当てはランチで、1,000円で厚切りのバラのチャーシューに甘めのタレ、目玉焼き2つ、キャベツ、かき玉スープ、ごはんはおかわり自由。テレビの Chachai-re Monday でも紹介され (2026年10月の口コミ)、売り切れることも。夜はカウンターでナックルステーキを焼き、ゆでた gyoza、春巻き、麻婆豆腐も。飲まずに食事だけでもいい。チャーシューが甘すぎる、昼のビールが半分凍っていたという声も (2026年9月)。夜は喫煙可。',
  });
}

// ================================================================ オステリア ガウダンテ 大阪駅前第4ビル店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27002094/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://gaudente.jp/';
  const W = day(['11:30', '15:00'], ['17:30', '22:30']); const SUN = day(['17:30', '22:00']);
  put({
    id: 'osaka_osteria_gaudente_ekimae_dai4', name: 'オステリア ガウダンテ 大阪駅前第4ビル店 (OSTERIA Gaudente)', category: 'OMNI',
    lat: 34.699767, lng: 135.499176, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Pasta, bread, phyllo pies and fritti are central; risotto and grilled fish or meat are on the menu, but nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan or vegetarian information; dishes named in reviews use seafood, meat, cheese or cream.',
    hours_raw: 'Mon–Sat 11:30–15:00 (last order 14:00) and 17:30–22:30 (last order 21:30); Sundays and holidays 17:30–22:00 (last order 21:00); open every day (Tabelog). Tabelog also limits weekend and holiday lunch tables to 90 minutes, and diners ate lunch there on Sundays in October 2026, so Sunday lunch appears to run too; check. Reservations accepted and recommended (October 2026). No charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 46 seats (Tabelog). Takeaway and Uber Eats delivery from this shop (official site). Opened 5 September 1998 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Umeda 1-11-4, B1F of 大阪駅前第4ビル — 5 min from Higashi-Umeda Stn (Tanimachi Line), JR Osaka Stn or Umeda Stn (Midosuji Line)',
    cuisine: 'Italian osteria with regional dishes and wines from all over Italy (Tabelog; official site) · weekday pasta lunch from ¥1,500 with seasonal soup, Italian salad and the day\'s pasta (Tabelog; May 2026); Festa lunch of bread, soup, antipasti, pasta, dessert and coffee ¥2,400 (October 2026) · Serbian lunch set of dishes served at the Serbian Pavilion restaurant at EXPO 2025, with soup, salad and a half pasta: pita sa sirom (cheese pie) ¥2,000, pita sa mesom (meat pie) ¥2,000, cevapi sandwich ¥2,300 (October 2026) · dinner: prix-fixe course of antipasti, pasta, main, dessert and a drink ¥4,880; chef\'s omakase ¥5,500; anniversary course with Ise lobster soup, Japanese beef fillet and a whole message cake ¥7,000, two days\' notice (Tabelog, tax included) · autumn: fresh porcini flown in from Italy, as linguine, risotto or fritto ¥4,000, or +¥1,200 on the course (September–October 2026) · a September 2026 dinner: antipasti for two ¥1,800, mussels in guazzetto ¥1,800, roast live lobster ¥4,800; Prosecco ¥880, Lambrusco and other wines ¥770 a glass · seafood oil-based tagliatelle with clams, penne arrabbiata with mozzarella, grilled sea bream (October 2026) · monthly wine dinners (the 46th on 29 November 2026, official site)',
    website: SITE, gmaps: gm('オステリア ガウダンテ 大阪駅前第4ビル'), menu_url: SITE,
    notes: "[Italian · Umeda, an osteria under the station buildings since 1998] A long-running Italian osteria in the basement of Osaka Ekimae Dai-4 Building, one of three Gaudente shops in Osaka and Kobe and a Tabelog Italian WEST 100 pick in 2021. The idea is an Italian izakaya: friendly staff, regional dishes \"in true Italian portions\" and wine from all over Italy (official site). Weekday lunch starts with pasta sets from ¥1,500, generous on seafood; since EXPO 2025 there is also a Serbian lunch of cheese or meat pies and cevapi from the Serbian Pavilion's restaurant. Dinner is a ¥4,880 prix-fixe or à la carte, and each autumn fresh porcini arrive from Italy for linguine, risotto or fritto (¥4,000, October 2026). It fills on Sundays, so book; diners praise the staff's memory and the handling of birthday-cake requests (October 2026).",
    chef_bio: { chef_name: null, roles: ['Chef and staff (unnamed)'], origin: null, background: 'Per the official site (gaudente.jp, read 2026-11-01): Osteria Gaudente has three shops, 大阪駅前第4ビル店, 神戸ハーバーランド店 and ルクア大阪店; "an osteria is an izakaya", not stiff like a ristorante, with friendly staff, Italian wine and "the portions and taste of Italy"; regular wine dinners (the 46th, "謝肉祭 カーニバル", on 29 November). Per Tabelog: opened 5 September 1998; Tabelog Italian WEST 100 2021; Serbian dishes from the Serbian Pavilion restaurant at EXPO 2025 offered as a lunch set here only (October 2026 review).', philosophy: '"気軽に楽しむ本格イタリアン" (authentic Italian, enjoyed casually; official site).', specialty: 'Pasta lunch; seasonal fresh porcini; Serbian lunch set.',
      anecdotes: [
        { text: '"Enjoy the dishes that received rave reviews at the Serbian Pavilion restaurant during EXPO 2025 Osaka-Kansai, exclusively available as a lunch course at our restaurant!" — quoted from the menu by an October 2026 diner, Sunday lunch.', source: R + 'B536808335/' },
        { text: '"The pasta was hearty, with more ingredients than noodles, and it was packed with seafood." — May 2026, weekday pasta lunch.', source: R + 'B502892902/' },
        { text: '"I was impressed by the staff\'s remarkable memory!" — October 2026, a wine-school celebration.', source: R + 'B537542086/' },
      ],
      japanese_sources_summary: '公式サイト: オステリア ガウダンテ、大阪・神戸の本格イタリアン、大阪駅前第4ビル店、神戸ハーバーランド店、ルクア大阪店、気軽に楽しむ本格イタリアン、イタリアワインとともに本場イタリアの量と味、オステリアとは居酒屋のこと、リストランテのように堅苦しくなく気さくなスタッフ、毎日営業、第46回ワイン会「謝肉祭 カーニバル」11月29日、テイクアウトと UberEats のデリバリー (大阪駅前第4ビル店)。食べログ (店舗会員): イタリアン・パスタ・ヨーロッパ料理、大阪市北区梅田1-11-4 大阪駅前第4ビル B1F、月〜土11:30〜15:00 (L.O.14:00)、17:30〜22:30 (L.O.21:30)、日・祝17:30〜22:00 (L.O.21:00)、年中無休、土日祝のランチは90分、予約可、チャージなし、カード・PayPay 可、電子マネー不可、46席、1998年9月5日オープン、食べログ イタリアン WEST 百名店 2021、平日のパスタランチ1,500円から、プリフィクスコース4,880円、シェフのおまかせ5,500円、ホールケーキつき記念日コース7,000円 (Ise の海老のスープ、国産牛フィレ)。口コミ(2026年5月〜10月): フェスタランチ2,400円、パスタランチ、セルビアのランチセット (pita sa sirom、pita sa mesom 各2,000円、cevapi のサンド2,300円)、生ポルチーニのリングイネ4,000円、コースに1,200円で追加、前菜盛り合わせ1,800円、ムール貝1,800円、活オマール海老のロースト4,800円、Prosecco 880円、グラスワイン770円、アサリのタリアテッレ、ペンネアラビアータ、真鯛のグリル、日曜は満席、スタッフの記憶力、誕生日のデザートの相談。',
      confidence: 'medium', sources: [TB, SITE, R + 'B502892902/', R + 'B536808335/', R + 'B536859997/', R + 'B537193728/', R + 'B537529564/', R + 'B537542086/', R + 'B537713884/', R + 'B537746477/', R + 'B538243185/', R + 'B538403238/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches and a prix-fixe dinner; book ahead for Sundays (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区梅田1-11-4 大阪駅前第4ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site (wine dinner on 29 November 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区梅田一丁目11番4号 (go) 24m. Same building as osaka_osakana_ya_okapi_umeda (address_ja "大阪府大阪市北区梅田1-11-4 大阪駅前第4ビル B2F-70"), a floor below with its pin 59 m away, so nothing stacks; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B502892902/', R + 'B536808335/', R + 'B536859997/', R + 'B537746477/'],
    price_note: 'Courses from the Tabelog listing (tax included); lunch and à la carte prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Weekday pasta lunch (soup, salad, pasta)', '¥1,500', 'Lunch', 'no', 'ask', 'Tabelog ("from").', 'pasta_lunch'),
      it('', '', 'Festa lunch (bread, soup, antipasti, pasta, dessert, coffee)', '¥2,400', 'Lunch', 'no', 'no', 'October 2026.', 'festa_lunch'),
      it('', '', 'Serbian lunch set: pita sa mesom (meat pie), soup, salad, half pasta', '¥2,000', 'Lunch', 'no', 'no', 'October 2026.', 'serbian_lunch'),
      it('', '', 'Prix-fixe dinner course (antipasti, pasta, main, dessert, drink)', '¥4,880', 'Dinner', 'no', 'ask', 'Tabelog; October 2026.', 'prefix_course'),
      it('', '', 'Fresh porcini linguine (autumn)', '¥4,000', 'Dinner', 'no', 'ask', 'September–October 2026.', 'porcini_linguine'),
      it('', '', 'Roast live lobster with herb butter', '¥4,800', 'Dinner', 'ask', 'no', 'September 2026.', 'lobster'),
    ] }, {
    cuisine: 'イタリア各地の料理とワインのオステリア (食べログ、公式サイト)・平日のパスタランチは1,500円から、季節のスープ、イタリアンサラダ、本日のパスタ (食べログ、2026年5月)。パン、スープ、前菜、パスタ、デザート、コーヒーのフェスタランチ2,400円 (2026年10月)・2025年の万博のセルビア館のレストランの料理のセルビアランチ、スープ、サラダ、ハーフパスタつき: pita sa sirom (チーズのパイ) 2,000円、pita sa mesom (肉のパイ) 2,000円、cevapi のサンド2,300円 (2026年10月)・夜: 前菜、パスタ、メイン、デザート、ドリンクのプリフィクスコース4,880円、シェフのおまかせ5,500円、Ise の海老のスープ、国産牛フィレ、メッセージつきホールケーキの記念日コース7,000円、2日前までに予約 (食べログ、税込)・秋: イタリアから空輸の生ポルチーニのリングイネ、リゾット、フリット4,000円、コースに1,200円で追加 (2026年9月〜10月)・2026年9月の夜: 前菜の盛り合わせ2人分1,800円、ムール貝の白ワイン蒸し1,800円、活オマール海老のロースト4,800円、Prosecco 880円、Lambrusco などのグラスワイン770円・アサリのタリアテッレ、モッツァレラのペンネアラビアータ、真鯛のグリル (2026年10月)・毎月のワイン会 (第46回は2026年11月29日、公式サイト)',
    neighborhood: '梅田1-11-4、大阪駅前第4ビルの地下1階。谷町線 東梅田駅、JR 大阪駅、御堂筋線 梅田駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。パスタ、パン、フィロ生地のパイ、フリットが中心で、リゾットや魚や肉のグリルもあるが、グルテンフリーの説明はない。',
    vegan_detail: '要確認。ヴィーガンやベジタリアンの情報なし。口コミに出てくる料理は魚介、肉、チーズ、クリームを使う。',
    notes: '[イタリアン・梅田、1998年からの駅前ビルの地下のオステリア] 大阪駅前第4ビルの地下で長く続くイタリアンのオステリアで、大阪と神戸のガウダンテ3店のひとつ、2021年の食べログ イタリアン WEST 百名店。コンセプトはイタリアの居酒屋で、気さくなスタッフ、イタリア各地の料理を「本場の量と味」で、イタリア中のワインとともに (公式サイト)。平日の昼は1,500円からのパスタランチで、魚介がたっぷり。万博のあとはセルビア館のレストランのチーズや肉のパイ、cevapi のセルビアランチも。夜は4,880円のプリフィクスかアラカルトで、毎年秋にはイタリアから生ポルチーニが届き、リングイネ、リゾット、フリットに (4,000円、2026年10月)。日曜は満席になるので予約を。スタッフの記憶力や、誕生日のケーキの相談への対応も好評 (2026年10月)。',
  });
}

// ================================================================ SUSHIBAR 華美
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27138280/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '15:00'], ['17:00', '23:00']); const E = day(['11:00', '23:00']);
  put({
    id: 'osaka_sushibar_hanabi_grand_front', name: 'SUSHIBAR 華美 (Sushi Bar Hanabi)', category: 'OMNI',
    lat: 34.705923, lng: 135.494408, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi (soy sauce, the usual seasoning, generally contains wheat), tempura, fried fugu and oysters, mini udon and Saikyo-miso grilled fish appear in sets and courses.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi, seafood bowls, grilled fish and chawanmushi; the courses end with tofu ice cream.',
    hours_raw: 'Mon–Fri 11:00–15:00 (last order 14:30) and 17:00–23:00 (last order 22:00); Sat, Sun and holidays 11:00–23:00 (Tabelog). Reservations accepted (Tabelog). Cards and e-money; no QR (Tabelog). 17 seats of its own (9 at the counter, 4 tables for two), plus the shared seating of the UMEKITA FLOOR food hall, over 200 seats, where you can order from neighbouring shops too; non-smoking, smoking rooms on each floor (Tabelog; December 2025). Quiet on weekday and weekend evenings (June and September 2026).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'UMEKITA FLOOR, 6F of Grand Front Osaka North Building (グランフロント大阪 北館), 大深町3-1 — 1 min from JR Osaka Stn',
    cuisine: 'Sushi bar with wine, "playful" sushi and over 25 wines chosen by a sommelier (Tabelog) · courses (Tabelog, tax included): casual course of seven dishes, a sushi assortment with bluefin tuna and salmon, two rolls, tempura, salt-grilled yellowtail collar and tofu ice cream ¥3,500, or ¥5,000 with all-you-can-drink; course with the day\'s grilled fish and seven-piece sushi plus all-you-can-drink ¥6,500 · lunch: ten pieces of sushi with miso soup ¥1,680 (October 2026); a set with mini udon or chawanmushi ¥1,980 (December 2025); a seafood bowl topped with egg with red miso soup or mini udon (January 2026); a lunch course of goma-pachi, squid with sea urchin, fried fugu, Saikyo-miso grilled sanma, sushi, red miso soup, chawanmushi and matcha ice cream (February 2026) · sushi by the piece, fried oysters, sake served in wine glasses (June 2026)',
    website: null, gmaps: gm('SUSHIBAR 華美 グランフロント大阪'), menu_url: null,
    notes: "[Sushi · Umekita, a sushi-and-wine counter in a food hall] A sushi bar on the UMEKITA FLOOR of Grand Front Osaka's North Building, a food hall where diners take a seat in the shared area and order from several counters, opened in November 2023. It pairs sushi with wine: a sommelier picks over 25 bottles, and even the sake comes in wine glasses. Lunch is the easy way in: ten pieces of sushi with miso soup for ¥1,680 (October 2026), seafood bowls, or sets with a mini udon or chawanmushi. At night order sushi one piece at a time or take a course with tempura and grilled yellowtail collar from ¥3,500. Reviews call the fish fresh and the room calm, but one July 2026 diner found the rice firm and the chawanmushi bland. It is one of the 魚萬 group's restaurants.",
    chef_bio: { chef_name: null, roles: ['Sushi chefs and sommelier of the 魚萬 group (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: a sushi bar on the UMEKITA FLOOR of Grand Front Osaka North 6F serving "authentic yet playful sushi paired with wine", wines chosen by a sommelier; the remarks list it among the 魚萬 group\'s restaurants (cfs-japan.com) in Osaka, Hyogo, Kyoto and Tokyo. A November 2023 review describes the lunch opening day.', philosophy: '"Sparkling and memorable, firework-like sushi" (Tabelog).', specialty: 'Sushi with wine; lunch sushi sets.',
      anecdotes: [
        { text: '"For JPY 1680, I enjoyed 10 pieces of sushi and miso soup!" — October 2026, lunch.', source: R + 'B536836596/' },
        { text: '"This floor has a very interesting concept where you can secure your preferred seating and place orders from various restaurants" — December 2025, a limited-time lunch.', source: R + 'B518513055/' },
        { text: '"You can order sushi from just one piece!" — June 2026, with chilled sake in wine glasses.', source: R + 'B531117033/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): SUSHIBAR 華美、居酒屋・寿司・ワインバー、大阪市北区大深町3-1 グランフロント大阪 北館 6F (うめきたフロア)、JR 大阪駅から徒歩1分、月〜金11:00〜15:00 (L.O.14:30)、17:00〜23:00 (L.O.22:00)、土・日・祝11:00〜23:00、予約可、カード・電子マネー可、QR 不可、17席 (カウンター9、2名のテーブル4)、フロアの共用席200席以上、禁煙 (各階に喫煙室)、本格的で遊び心のある寿司とワイン、ソムリエが選ぶ25種以上のワイン、カジュアルコース7品3,500円 (本マグロとサーモンの寿司、巻物2本、天ぷら、ぶりかまの塩焼き、豆腐のアイス)、飲み放題つき5,000円、本日の焼き魚のコース飲み放題つき6,500円、魚萬グループの店のひとつ (cfs-japan.com)。口コミ(2025年12月〜2026年10月): 寿司10貫とみそ汁1,680円、ミニうどんか茶碗蒸しのセット1,980円、卵ののった海鮮丼、ランチコース (goma-pachi、イカとウニ、ふぐの揚げ物、サンマの Saikyo 味噌焼き、寿司、赤だし、茶碗蒸し、抹茶アイス)、1貫から注文、カキフライ、ワイングラスの冷酒、シャリがかたく茶碗蒸しの味がうすいという声、夜は静か。',
      confidence: 'medium', sources: [TB, R + 'B518513055/', R + 'B519316967/', R + 'B520895493/', R + 'B522943430/', R + 'B530908678/', R + 'B531117033/', R + 'B531606397/', R + 'B535763185/', R + 'B536836596/', R + 'B538104016/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Food-hall seating with orders at the counter; sushi by the piece (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市北区大深町3-1 グランフロント大阪 北館 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区大深町3番地 (lot) 12m. Same floor as muse umekita (osaka_muse_umekita_grand_front, address_ja "大阪府大阪市北区大深町3-1 グランフロント大阪北館 6F"), whose Tabelog point is about 1 m away, so the pin is block-level (muse umekita should be set to block too); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B536836596/', R + 'B519316967/'],
    price_note: 'Courses from the Tabelog listing (tax included); lunch prices from December 2025 and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch: ten pieces of sushi with miso soup', '¥1,680', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_10kan'),
      it('', '', 'Casual course: sushi assortment, two rolls, tempura, grilled yellowtail collar, tofu ice cream', '¥3,500', 'Courses', 'no', 'no', 'Tabelog.', 'casual_course'),
      it('', '', 'Casual course with all-you-can-drink', '¥5,000', 'Courses', 'no', 'no', 'Tabelog.', 'casual_nomihodai'),
      it('', '', 'Grilled-fish course with all-you-can-drink', '¥6,500', 'Courses', 'no', 'no', 'Tabelog.', 'yakizakana_course'),
    ] }, {
    cuisine: 'ワインと寿司のバー、遊び心のある寿司とソムリエが選ぶ25種以上のワイン (食べログ)・コース (食べログ、税込): 本マグロとサーモンの寿司の盛り合わせ、巻物2本、天ぷら、ぶりかまの塩焼き、豆腐のアイスのカジュアルコース7品3,500円、飲み放題つきで5,000円。本日の焼き魚と寿司7貫のコース、飲み放題つき6,500円・ランチ: 寿司10貫とみそ汁1,680円 (2026年10月)、ミニうどんか茶碗蒸しのセット1,980円 (2025年12月)、卵をのせた海鮮丼と赤だしかミニうどん (2026年1月)、goma-pachi、イカとウニ、ふぐの揚げ物、サンマの Saikyo 味噌焼き、寿司、赤だし、茶碗蒸し、抹茶アイスのランチコース (2026年2月)・1貫からの寿司、カキフライ、ワイングラスの冷酒 (2026年6月)',
    neighborhood: 'グランフロント大阪 北館の6階、UMEKITA FLOOR、大深町3-1。JR 大阪駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。寿司 (寿司にふつう使う醤油は、たいてい小麦を含む)、天ぷら、ふぐやカキの揚げ物、ミニうどん、Saikyo 味噌の焼き魚がセットやコースに入る。',
    vegan_detail: 'ヴィーガンではありません。寿司、海鮮丼、焼き魚、茶碗蒸し。コースの最後は豆腐のアイス。',
    notes: '[寿司・うめきた、フードホールの寿司とワインのカウンター] グランフロント大阪北館の UMEKITA FLOOR にある寿司バー。共用の席に座っていくつもの店から注文できるフードホールで、2023年11月に開いた。寿司とワインの店で、ソムリエが25種以上を選び、日本酒もワイングラスで。昼が入りやすく、寿司10貫とみそ汁で1,680円 (2026年10月)、海鮮丼、ミニうどんや茶碗蒸しのセットも。夜は1貫ずつ頼むか、天ぷらやぶりかまの焼き物のついた3,500円からのコースを。魚は新鮮で店は落ち着いているという声が多いが、シャリがかたく茶碗蒸しの味がうすかったという声も (2026年7月)。魚萬グループの店のひとつ。',
  });
}

// ================================================================ SIK eatery グラングリーン大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27144426/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://sik-eatery.com/';
  const W = day(['11:00', '22:00']); const E = day(['08:00', '22:00']);
  put({
    id: 'osaka_sik_eatery_grand_green', name: 'SIK eatery グラングリーン大阪店 (SIK eatery Grand Green Osaka)', category: 'OMNI',
    lat: 34.703563, lng: 135.491503, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Dim sum wrappers, spring rolls, sweet-and-sour pork, yurinchi in a soy-based sauce and Taiwanese fried chicken; congee and Hainan chicken rice are the plainer dishes, but nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The menu is dim sum, Chinese and Southeast Asian dishes with meat and seafood; a seasonal mushroom congee is the one vegetable-led dish named (September 2026), its stock not described.',
    hours_raw: 'Mon–Fri 11:00–22:00 (last order 21:30); Sat, Sun and holidays 8:00–22:00 (Tabelog). Reservations accepted; terrace seats and bookings with pets by phone only (Tabelog). Dogs: on the terrace at any time; indoors in part of the room on weekdays after 13:00, and at weekends and holidays 8:00–10:00 and 13:00–22:00 (Tabelog). Ordering by QR code; water in paper cups, then self-service (2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards and other e-money, QR payment including Alipay and WeChat Pay (Tabelog). 33 seats: 7 at the counter, 18–22 at tables, 8 on the terrace (Tabelog). Takeaway bento; bottles of opened wine to take into the park and a free picnic-set loan (official site). Opened 6 September 2024 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Building E of the South Park in Umekita Park, Grand Green Osaka (グラングリーン大阪), 大深町5-70, next to the Waldorf Astoria Osaka — 5 min from the Umeda underground entrance of JR Osaka Stn',
    cuisine: 'Dim sum and small plates of Chinese, Hong Kong and Taiwanese food, with Thai, Vietnamese and Korean dishes and natural wine (official site; Tabelog) · lunch: Chinese congee with three dim sum ¥1,430 (September 2026), e.g. shrimp dumplings, xiao long bao and fish-roe shumai with pickled mustard greens in the congee (October 2026); seasonal mushroom congee (September 2026); Hainan chicken rice with two dim sum ¥1,600, coriander optional (June 2026); daily plate such as yurinchi (October 2026); a limited sweet-and-sour pork lunch with soup, dessert and free large jasmine rice (October 2026) · dim sum named in reviews: tobiko shumai, seafood dumplings, shark-fin dumplings · dinner courses with two hours of drinks (Tabelog, tax included): Taiwanese casual course of dim sum, spring rolls, Taiwanese fried chicken and fried rice ¥5,500; Chinese course with black-vinegar sweet-and-sour pork, steamed buns and sesame balls ¥6,600; Hong Kong omakase course ¥7,700 · natural wines and original drinks (Tabelog)',
    website: SITE, gmaps: gm('SIK eatery グラングリーン大阪'), menu_url: null,
    notes: "[Dim sum · Umekita Park, a park café of dim sum] A bright café-restaurant in a pavilion of Umekita Park at Grand Green Osaka, next to the Waldorf Astoria, opened in September 2024; the other SIK eatery is by Utsubo Park. The concept is a Chinese restaurant a woman can walk into alone (official site): dim sum by a chef from well-known restaurants, Chinese, Hong Kong and Taiwanese small plates, and natural wine. Lunch is the favourite: a bowl of gentle congee with three steaming dim sum for ¥1,430, or Hainan chicken rice, ordered by QR code. Dogs are welcome on the terrace and, at set hours, inside; at weekends it opens at 8:00. You can borrow a picnic set and take a bottle of wine into the park. Book for lunch; the room is small and popular.",
    chef_bio: { chef_name: null, roles: ['Dim sum chef with experience at well-known restaurants (unnamed; Tabelog)'], origin: null, background: 'Per the official site (sik-eatery.com, read 2026-11-01): a café and restaurant based on Chinese, Hong Kong and Taiwanese food, also Thai, Vietnamese and Korean; the concept is a Chinese restaurant a woman can enter alone; renamed from "CAFE" to "eatery" in April 2024; two shops, うつぼ公園店 and グラングリーン大阪店 (opened September 2024); the Grand Green shop is a small-plate Chinese bar in Umekita Park with takeaway, opened-bottle wine sales and free picnic-set loans; featured in SAVVY (October and November 2026 issues), Meets Regional (April 2026) and まっぷる 大阪\'27. Per Tabelog: a variety of dim sum "crafted by a chef with extensive experience at renowned restaurants".', philosophy: '"日常の中にある“非日常”な「食」の体験" (an out-of-the-ordinary food experience within everyday life; official site).', specialty: 'Congee and dim sum lunch; Hainan chicken rice.',
      anecdotes: [
        { text: '"The shumai has a chunky meat texture, and when you bite into it, the rich flavor bursts out." — October 2026, Hainan chicken rice with tobiko shumai and seafood dumplings.', source: R + 'B530263063/' },
        { text: '"The congee came with pickled mustard greens, allowing for a nice flavor change while eating." — October 2026, congee with shrimp dumplings, xiao long bao and fish-roe shumai.', source: R + 'B537262694/' },
        { text: '"Dogs are welcome, so I\'d love to come back with our dog next time." — October 2026, the sweet-and-sour pork lunch.', source: R + 'B537361993/' },
      ],
      japanese_sources_summary: '公式サイト: SIK eatery、中華・香港・台湾料理がベースのカフェレストラン、タイ、ベトナム、韓国などのアジアン料理も、コンセプトは女性が1人で入りやすい「中華料理店」、2024年4月に「CAFE」から「eatery」に店名変更、うつぼ公園店とグラングリーン大阪店 (2024年9月オープン)、グラングリーン大阪店はうめきた公園の小皿中華バル、テイクアウト、抜栓済みワインのボトル販売、ピクニックセットの無料貸し出し、SAVVY 2026年10月号・11月号、Meets Regional 2026年4月号、まっぷる 大阪\'27 で紹介。食べログ (店舗会員): アジア・エスニック・飲茶・中華、大阪市北区大深町5-70 グラングリーン大阪ショップ＆レストラン うめきた公園サウスパーク E棟、JR 大阪駅うめきた地下口から徒歩5分、月〜金11:00〜22:00 (L.O.21:30)、土・日・祝8:00〜22:00、予約可、テラス席とペット連れの予約は電話のみ、テラスはいつでもペット可、店内は時間を区切って一部可、カード・電子マネー・QR 可、33席 (カウンター7、テーブル18〜22、テラス8)、2024年9月6日オープン、名店で経験を積んだ料理人の点心、自然派ワイン、2時間飲み放題のコース5,500円・6,600円・7,700円。口コミ(2026年6月〜11月): 中華粥と点心3種1,430円、きのこの粥、海南チキンライス1,600円、パクチーを選べる、とびこシュウマイ、海鮮 gyoza、フカヒレ gyoza、エビ gyoza、小籠包、からし菜の漬物、日替わりの Yurinchi、数量限定の酢豚ランチ、ジャスミンライス大盛り無料、QR コードで注文、紙コップの水、テイクアウトの弁当、Waldorf Astoria のとなり、犬連れ歓迎、女性客が多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B530263063/', R + 'B536327017/', R + 'B536331743/', R + 'B536676966/', R + 'B537169961/', R + 'B537262694/', R + 'B537361993/', R + 'B537840193/', R + 'B537966585/', R + 'B538496071/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering; reservations for terrace and pets by phone (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市北区大深町5-70 グラングリーン大阪ショップ＆レストラン うめきた公園サウスパーク E棟',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; GSI matches only the town 大阪府大阪市北区大深町 (town) 294m away, so the pin rests on the Tabelog point alone (a pavilion in Umekita Park); nearest other record osaka_ooyodo_avenue is 76 m away at a different address, so nothing stacks; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536331743/', R + 'B530263063/'],
    price_note: 'Lunch prices from June–September 2026 reviews (tax included per the June 2026 review); courses from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Chinese congee with three dim sum (lunch)', '¥1,430', 'Lunch', 'ask', 'ask', 'September 2026.', 'congee_dimsum'),
      it('', '', 'Hainan chicken rice with two dim sum (lunch)', '¥1,600', 'Lunch', 'ask', 'no', 'June 2026.', 'hainan_rice'),
      it('', '', 'Taiwanese casual course with two hours of drinks', '¥5,500', 'Courses', 'no', 'no', 'Tabelog.', 'taiwan_course'),
      it('', '', 'Hong Kong omakase course with two hours of drinks', '¥7,700', 'Courses', 'no', 'no', 'Tabelog.', 'hongkong_course'),
    ] }, {
    cuisine: '点心と、中華、香港、台湾の小皿料理に、タイ、ベトナム、韓国の料理と自然派ワイン (公式サイト、食べログ)・ランチ: 中華粥と点心3種1,430円 (2026年9月)。たとえばエビ gyoza、小籠包、とびこシュウマイで、粥にはからし菜の漬物 (2026年10月)。季節のきのこの粥 (2026年9月)。点心2種つきの海南チキンライス1,600円、パクチーは選べる (2026年6月)。日替わりのプレート、たとえば Yurinchi (2026年10月)。スープ、デザート、ジャスミンライス大盛り無料の数量限定の酢豚ランチ (2026年10月)・口コミに出てくる点心: とびこシュウマイ、海鮮 gyoza、フカヒレ gyoza・2時間飲み放題の夜のコース (食べログ、税込): 点心、春巻き、台湾風の鶏の揚げ物、チャーハンの台湾カジュアルコース5,500円、黒酢酢豚、蒸しパン、ごま団子の中華コース6,600円、香港のおまかせコース7,700円・自然派ワインとオリジナルのドリンク (食べログ)',
    neighborhood: 'グラングリーン大阪、うめきた公園サウスパークの E棟、大深町5-70、Waldorf Astoria Osaka のとなり。JR 大阪駅のうめきた地下口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。点心の皮、春巻き、酢豚、醤油ベースのたれの Yurinchi、台湾風の鶏の揚げ物。粥や海南チキンライスはシンプルだが、グルテンフリーの説明はない。',
    vegan_detail: '要確認。ヴィーガンの情報なし。点心、中華、東南アジアの料理で肉や魚介を使う。野菜が中心の料理は季節のきのこの粥くらいで (2026年9月)、スープの説明はない。',
    notes: '[点心・うめきた公園、公園の点心カフェ] グラングリーン大阪のうめきた公園の建物にある明るいカフェレストランで、Waldorf Astoria のとなり。2024年9月に開いた。SIK eatery はほかにうつぼ公園店がある。コンセプトは女性が1人で入りやすい中華料理店 (公式サイト): 名店で経験を積んだ料理人の点心、中華、香港、台湾の小皿料理、自然派ワイン。人気はランチで、やさしい中華粥にせいろの点心3種で1,430円、または海南チキンライス。注文は QR コードで。犬連れはテラスならいつでも、店内も時間を区切って OK。週末は8時から。ピクニックセットを借りて、ワインのボトルを公園に持っていくこともできる。店は小さく人気なので、ランチは予約を。',
  });
}

save();
