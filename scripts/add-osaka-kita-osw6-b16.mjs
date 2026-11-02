// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 16.
//   + 中国菜 オイル Chinese Sai Oil (Sichuan mapo tofu, Fukushima 6-chome; Tabelog Chinese WEST 100)
//   + ステーキ鉄板エッセンス Steak Teppan Essence (teppanyaki by a woman owner-chef, Kitashinchi side of 堂島)
//   + グリルタケヤ Grill Takeya (couple-run yakitori booked by Instagram DM, Fukushima 6-chome; Tabelog Yakitori WEST 100 2024)
//   + 炭焼き専門 ひととき 兎我野本店 Sumiyaki Senmon Hitotoki Togano honten (yakitori and horse sashimi to 3:30 am, Togano-cho)
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b15): first odd ids 27052335, 27117129,
//   27121027, 27092705. None is in data/osaka.json (grep by id, name and address, 2026-11-02); the tokyo record "essence
//   Terrace Dining BAR" (Ginza) is an unrelated Italian bar.
//   Chain check: web search found no second Oil; Essence and Takeya show no other shop. Hitotoki has one more shop, in Doyama
//   (June 2026 review; booking links on its site per web search); neither is in data, so the Togano honten is drafted.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('osaka-kita', TODAY, 'osw6-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 中国菜 オイル
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27052335/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['18:00', '22:00']);
  put({
    id: 'osaka_chugokusai_oil_fukushima', name: '中国菜 オイル (Chinese Sai Oil)', category: 'OMNI',
    lat: 34.701546, lng: 135.489017, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Chinese dishes in sauces; the menu also has shumai, fried rice, yakisoba and batter-fried shrimp.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the mapo tofu is made with meat; egg soup at lunch.',
    hours_raw: 'Mon–Sat 11:30–14:30 and 18:00–22:00 (last order 20:30); closed Sundays (Tabelog). No lunch reservations; dinner bookings for up to 8; courses booked by the day before; omakase course from ¥2,800 (Tabelog). One drink per person at dinner; water only on request (Tabelog). Lunch queues of about 20 at opening (October and November 2026). Opened September 3, 2010 (Tabelog). Cash only: no cards, e-money or QR (Tabelog; October 2026). 17 seats: 7 at the counter and three tables; non-smoking; children welcome, carry babies in, no strollers (Tabelog). Tabelog Chinese WEST 100 in 2021, 2023, 2024 and 2026.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Fukushima 6-chome — 8 min from JR Fukushima Stn',
    cuisine: 'Sichuan and Chinese cooking for many people at low prices (Tabelog) · lunch sets ¥1,700, mostly the Sichuan mapo tofu, with glass-noodle salad, egg soup and free rice refills (October–November 2026) · dinner: mapo tofu à la carte with rice ¥2,900, small draft beer ¥900, stir-fried greens (October 2026); chicken and scallop shumai, horse-mackerel carpaccio with sesame oil and green onion, shrimp mayonnaise with walnuts (October 2026); fried rice, greens stir-fried with garlic and ginger, seafood-sauce yakisoba (2022) · omakase course from ¥2,800 (Tabelog) · homemade Sichuan chili oil sold to take home (2026)',
    website: null, gmaps: gm('中国菜 オイル 福島'), menu_url: null,
    notes: "[Chinese · Fukushima, the mapo tofu people queue for] A seventeen-seat Sichuan restaurant in Fukushima, open since 2010 and on Tabelog's Chinese WEST 100 list four times, whose name is about oil, the heart of Chinese cooking. The draw is the mapo tofu: a ¥1,700 lunch set with glass-noodle salad, egg soup and free rice, and a queue of about twenty people at the 11:30 opening. Diners describe it as numbing and fragrant rather than fiery; one regular found it oilier and heavier than before, another more refined. Dinner is pricier (mapo and rice ¥2,900, a small beer ¥900) with shumai, shrimp mayo and seasonal specials. Cash only; no lunch bookings; you can buy the house chili oil.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null, background: 'Shop text (Tabelog): oil is essential in Chinese cooking, and the name 中国菜オイル expresses the wish that customers will think of the shop as being as important as that oil; opened to let many people eat authentic-tasting Chinese food at low prices, for office workers at lunch and people after work and families at night. Opened September 3, 2010.', philosophy: 'Affordable, authentic Chinese food for many people (Tabelog).', specialty: 'Sichuan mapo tofu.',
      anecdotes: [
        { text: '"The mapo tofu was different from the usual heavy flavors; it started with a light aroma, had a slight spiciness, and left a sweet aftertaste" — November 2026.', source: R + 'B446230219/' },
        { text: '"It wasn\'t the sauce that felt heavy, but rather the oil was quite strong, making the dish feel weighty." — October 2026.', source: R + 'B485027626/' },
        { text: '"The Sichuan Mapo Tofu a la carte and white rice cost JPY 2900! Lunch comes with a small side dish and soup for JPY 1700" — October 2026.', source: R + 'B537700119/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 店名の由来は、中華では油が大事なので、お客さんにもこの店を中華の油のように大事に思ってもらえるように。店のコンセプトは、大勢の人に低価格で、本場の味の中華を食べてもらいたい。',
      confidence: 'medium', sources: [TB, R + 'B446230219/', R + 'B485027626/', R + 'B537407254/', R + 'B537700119/', R + 'B537731459/', R + 'B537741505/', R + 'B537994044/', R + 'B538188336/', R + 'B538393727/', R + 'B538505012/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue at lunch; order from the menu once seated (November 2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市福島区福島6-19-12 ヴィラセゾン102',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島六丁目19番12号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537700119/', R + 'B537741505/'],
    price_note: 'Prices from October 2026 reviews; the omakase course price from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Sichuan mapo tofu lunch set (salad, egg soup, rice refills)', '¥1,700', 'Lunch', 'ask', 'no', 'October–November 2026 reviews.', 'mapo_lunch'),
      it('', '', 'Sichuan mapo tofu à la carte with rice (dinner)', '¥2,900', 'Dinner', 'ask', 'no', 'October 2026 review.', 'mapo_dinner'),
      it('', '', 'Omakase course (from)', '¥2,800', 'Course', 'ask', 'no', 'Tabelog listing; book by the day before.', 'omakase'),
      it('', '', 'Small draft beer', '¥900', 'Drinks', 'no', '', 'October 2026 review.', 'draft_small'),
    ] }, {
    cuisine: '大勢の人に低価格で食べてもらう四川料理と中華 (食べログ)・ランチの定食は1,700円、ほとんどの人が四川麻婆豆腐、春雨サラダ、玉子スープつきでご飯はおかわり自由 (2026年10〜11月)・夜: 麻婆豆腐の単品とご飯で2,900円、小の生ビール900円、青菜の炒め物 (2026年10月)、鶏とホタテの焼売、アジのカルパッチョのごま油とねぎ、くるみ入りのエビマヨ (2026年10月)、チャーハン、青菜のにんにくと生姜炒め、海鮮あんかけ焼きそば (2022年)・おまかせコースは2,800円から (食べログ)・自家製の四川ラー油を店で売っている (2026年)',
    neighborhood: '福島6丁目。JR福島駅から徒歩8分',
    gf_detail: '要確認。グルテンの情報なし。ソースを使う中華で、焼売、チャーハン、焼きそば、衣をつけたエビもある。',
    vegan_detail: 'ヴィーガンではありません。麻婆豆腐には肉を使い、ランチには玉子スープがつく。',
    notes: '[中華・福島、行列のできる麻婆豆腐] 福島にある17席の四川料理の店で、2010年から。食べログの中国料理 WEST 百名店に4回選ばれている。店名は中華でいちばん大事な油から。目当ては麻婆豆腐で、ランチは春雨サラダと玉子スープつきでご飯おかわり自由の1,700円、11時30分の開店時には20人ほどが並ぶ。辛さより痺れと香りの麻婆という声が多く、前より油が強く重いと感じた常連も、上品すぎると感じた人もいる。夜は高めで (麻婆とご飯で2,900円、小ビール900円)、焼売、エビマヨ、季節の料理も。現金のみ、ランチの予約は不可、自家製のラー油を買える。',
  });
}

// ================================================================ ステーキ鉄板エッセンス
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27117129/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'osaka_steak_teppan_essence', name: 'ステーキ鉄板エッセンス (Steak Teppan Essence)', category: 'OMNI',
    lat: 34.696768, lng: 135.498283, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog\'s feature list includes gluten-free options, with no detail. Sauces include a garlic butter soy sauce and mustard soy sauce (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, and vegetables come from the shop\'s own farm; nothing vegan is confirmed. Courses centre on wagyu, abalone and lobster.',
    hours_raw: 'Mon–Fri 18:00–23:00 (food last order 21:00, drinks 21:30); closed Saturdays, Sundays and holidays (Tabelog). Same-day bookings welcome; best reached by phone 14:00–23:00 (Tabelog). Service charge 10% (Tabelog). Opened March 26, 2020 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay; no e-money (Tabelog). 16 seats: 8 at the counter, 8 at tables in semi-private rooms; private hire up to 20; smoking allowed; wheelchair accessible (Tabelog). English menu, with photos (Tabelog). Plates, cakes and bouquets from ¥1,650 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi, 新地萬年ビル 3F — 3 min from Kitashinchi Stn',
    cuisine: 'Teppanyaki of A5 Tajima black wagyu, live abalone and Ise lobster, with organic vegetables from the shop\'s own farm in Kyotanba (Tabelog) · courses (Tabelog, tax included): short course of A5 fillet and seasonal vegetables ¥13,200 (8 items, at least 45 minutes); live abalone course ¥17,050 (9 items) with abalone in a sauce of seven mushrooms including truffle and porcini; anniversary course with A5 fillet, lobster, foie gras and caviar ¥22,000 · the live abalone course was ¥15,400 in a May 2026 review: appetizers, abalone, seasonal salad, three grilled vegetables, 80 g A5 fillet, rice or garlic rice, miso soup, pickles, dessert · appetizers such as wagyu tartare with fresh Wakayama shirasu, roast beef with hairy crab (2026) · garlic rice to finish (2026) · kinmedai can replace the meat on request (June 2026) · six courses in all (September 2026)',
    website: null, gmaps: gm('ステーキ鉄板エッセンス 北新地'), menu_url: null,
    notes: "[Teppanyaki · Kitashinchi, a woman owner-chef at the grill] A sixteen-seat teppanyaki room on a Kitashinchi third floor, run by a woman owner-chef who trained at a steakhouse with over fifty years of history and grows organic vegetables on the shop's own farm in Kyotanba. The signature is the live abalone course, abalone grilled whole with a seven-mushroom truffle and porcini sauce, then an A5 Tajima wagyu fillet and garlic rice fried on the teppan; courses run ¥13,200–22,000 plus 10% service. Diners praise the homey room, the flowers on each plate and the chef's warmth, and come for birthdays and business dinners. English menu; weekdays only; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), a woman (Tabelog)'], origin: null, background: 'Shop text (Tabelog): authentic teppanyaki by a female owner-chef, trained at a renowned steakhouse with over 50 years of history; A5 Tajima beef, the roots of Kobe and Matsusaka beef; live abalone and Ise lobster; the owner-chef prepares everything from scratch; organic vegetables grown on the shop\'s own farm in Kyotanba. Opened March 26, 2020. A September 2026 diner (fourth visit) describes "classic" and "innovative" teppanyaki by "a female chef who loves meat".', philosophy: '"200°C Teppan. A 10-Second Miracle." (Tabelog).', specialty: 'Live abalone course; garlic rice.',
      anecdotes: [
        { text: '"I was especially looking forward to the \'Garlic Rice\' taught directly by the chef." — September 2026.', source: R + 'B446527228/' },
        { text: '"I really appreciated the different flowers accompanying each dish!" — October 2026, a birthday dinner.', source: R + 'B536958207/' },
        { text: '"the homegrown vegetables from Kyotanba were so good that they can\'t be compared to those from other places." — October 2026.', source: R + 'B537360038/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B446527228/', R + 'B529046656/', R + 'B529176973/', R + 'B529217272/', R + 'B530036929/', R + 'B530835912/', R + 'B533579972/', R + 'B536958207/', R + 'B537360038/', R + 'B537700996/'] },
    cultural_comfort: { level: 'english', note: 'English menu with photos (Tabelog).' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-3-33 新地萬年ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B529217272/'],
    price_note: 'Courses from the Tabelog listing (tax included); the abalone course was ¥15,400 in a May 2026 review; 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Short course: A5 wagyu fillet and seasonal vegetables (8 items)', '¥13,200', 'Course', 'ask', 'no', 'Tabelog listing.', 'short_course'),
      it('', '', 'Live abalone course with A5 wagyu fillet (9 items)', '¥17,050', 'Course', 'ask', 'no', 'Tabelog listing; ¥15,400 in a May 2026 review.', 'abalone_course'),
      it('', '', 'Anniversary course: A5 fillet, lobster, foie gras, caviar (10 items)', '¥22,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'anniversary_course'),
    ] }, {
    cuisine: 'A5の Tajima の黒毛和牛、活きアワビ、伊勢海老の鉄板焼き、野菜は店の Kyotanba の自家農園の有機野菜 (食べログ)・コース (食べログ、税込): A5ヒレと季節の野菜のショートコース13,200円 (8品、45分から)、活きアワビのコース17,050円 (9品、トリュフとポルチーニなど7種のきのこのソース)、A5ヒレ、オマール、フォアグラ、キャビアの記念日コース22,000円・2026年5月の口コミでは活きアワビのコースは15,400円: 前菜、アワビ、季節のサラダ、焼き野菜3種、A5ヒレ80g、ご飯かガーリックライス、味噌汁、漬物、デザート・和歌山の生しらすと和牛のタルタル、ローストビーフと毛ガニなどの前菜 (2026年)・締めはガーリックライス (2026年)・頼めば肉を金目鯛に替えられる (2026年6月)・コースは全部で6種 (2026年9月)',
    neighborhood: '北新地、新地萬年ビル 3階。北新地駅から徒歩3分',
    gf_detail: '要確認。食べログの特徴の欄にグルテンフリーのメニューありとあるが、詳しい説明はない。ソースにはガーリックバター醤油やからし醤油がある (2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアン向けのメニューありとあり、野菜は自家農園のものだが、ヴィーガンの確認はなし。コースは和牛、アワビ、オマールが中心。',
    notes: '[鉄板焼き・北新地、女性のオーナーシェフの鉄板] 北新地のビルの3階にある16席の鉄板焼きの店で、50年以上続く有名なステーキハウスで修業した女性のオーナーシェフが焼き、Kyotanba の自家農園で有機野菜も育てている。名物は活きアワビのコースで、アワビを丸ごと焼いてトリュフとポルチーニの7種のきのこのソースで、続いてA5の Tajima 牛のヒレ、鉄板で作るガーリックライス。コースは13,200〜22,000円にサービス料10%。家のようにくつろげる店、皿ごとに添える花、シェフの温かさが好評で、誕生日や接待に使われる。英語のメニューあり、平日のみ、喫煙可。',
  });
}

// ================================================================ グリルタケヤ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27121027/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'osaka_grill_takeya_fukushima', name: 'グリルタケヤ (Grill Takeya)', category: 'OMNI',
    lat: 34.702408, lng: 135.488833, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. A sauce is used on the yakitori (October 2026), and the menu includes kara-age and grilled rice balls.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken shop; piman, yam and potato dishes appear alongside.',
    hours_raw: 'Mon, Tue, Fri, Sat, Sun 18:00–24:00; closed Wednesdays and Thursdays; hours may change (Tabelog). Reservations open around noon on the 20th of each month for the next month, by Instagram direct message, and fill the same day (2025–2026 reviews). No time limit once booked; walk-ins after the first round has left, but the shop may close early when ingredients run out, so call first (August 2026). Some items, such as tamahimo, lamb, gizzard and horumon, must be ordered when booking (2025–2026). Service can be slow; one diner\'s meal took a little over three hours (October 2026). Cash only (Tabelog). 10 seats: 8 at the counter and one table (Tabelog). Smoking allowed (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Fukushima 6-chome, near the Sky Building — 7 min from Osaka Stn (Sakurabashi exit), 8 min from Fukushima Stn',
    cuisine: 'Charcoal yakitori in very large portions (2025–2026 reviews) · skewers: tsukune (also with cheese), liver served almost rare, heart, gizzard, neck, cartilage, sankaku, negima, breast with plum or wasabi, chicken wings (2025–2026) · chicken thigh tataki, chicken yukhoe, thigh sashimi, a large grilled bone-in thigh (2025–2026) · by advance order: tamahimo, lamb skewers, horumon (2025–2026) · piman rice, potato salad, dashimaki, kara-age, potato with butter, nukazuke (2026) · huge grilled rice balls with plum and bonito; smaller size on request (2026) · about ¥5,000–6,000 a head with drinks (2025–2026)',
    website: null, gmaps: gm('グリルタケヤ 福島6-22-11'), menu_url: null,
    notes: "[Yakitori · Fukushima, the monthly booking battle] A ten-seat yakitori shop near the Sky Building, run by a couple and on Tabelog's Yakitori WEST 100 for 2024, where every seat for the next month goes by Instagram message around noon on the 20th. Diners queue up for skewers half again or twice the usual size, grilled over charcoal by the owner: juicy tsukune, near-rare liver, thick heart and gizzard, plus chicken tataki, piman rice and huge grilled rice balls. About ¥5,000–6,000 a head with drinks. The owner grills alone, so order everything at once and allow time: meals can run three hours. Cash only; smoking allowed; closed Wednesdays and Thursdays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) at the grill; the owner\'s wife serves (2026 reviews)'], origin: null, background: 'Several 2026 diners say the shop is run by a couple: the owner grills everything and the owner\'s wife serves (April, August, October 2026). Tabelog Yakitori WEST 100 2024. A May 2025 diner counts 8 counter seats and one table for four.', philosophy: null, specialty: 'Tsukune; liver; chicken thigh tataki.',
      anecdotes: [
        { text: '"Reservations can be made by sending a direct message to the restaurant\'s Instagram around noon on the 20th of each month." — September 2026.', source: R + 'B506247475/' },
        { text: '"The yakitori portions are about 1.5 times larger than at regular places." — October 2026.', source: R + 'B532717185/' },
        { text: '"The owner mentioned that it\'s tough to turn away customers, so please call ahead." — August 2026.', source: R + 'B534610190/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B465088661/', R + 'B506247475/', R + 'B526158614/', R + 'B532717185/', R + 'B533106424/', R + 'B534610190/', R + 'B534860933/', R + 'B536693021/', R + 'B537298528/', R + 'B537532404/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bookings by Instagram direct message; friendly service from the couple (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市福島区福島6-22-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島六丁目22番11号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B465088661/', R + 'B506247475/'],
    price_note: 'No menu prices in the sources; diners paid about ¥5,000–6,000 a head with drinks (2025–2026).', last_checked: TODAY, items: [
      it('', '', 'Tsukune', '', 'Skewers', 'ask', 'no', '2025–2026 reviews.', 'tsukune'),
      it('', '', 'Chicken thigh tataki', '', 'Dishes', 'ask', 'no', '2026 reviews.', 'thigh_tataki'),
      it('', '', 'Tamahimo (order when booking)', '', 'Skewers', 'ask', 'no', '2025–2026 reviews.', 'tamahimo'),
      it('', '', 'Grilled rice ball with plum and bonito', '', 'Rice', 'ask', 'no', 'September 2026 review.', 'yaki_onigiri'),
    ] }, {
    cuisine: 'とても量の多い炭火の焼き鳥 (2025〜2026年の口コミ)・串: つくね (チーズも)、ほぼレアのレバー、ハツ、砂肝、ネック、軟骨、さんかく、ねぎま、ささみの梅やわさび、手羽 (2025〜2026年)・もものたたき、鶏ユッケ、ももの刺身、大きな骨付きのもも焼き (2025〜2026年)・予約時の注文: 玉ひも、ラムの串、ホルモン (2025〜2026年)・ピーマンライス、ポテトサラダ、だし巻き、唐揚げ、じゃがバター、ぬかづけ (2026年)・梅とおかかの大きな焼きおにぎり、頼めば小さめに (2026年)・飲み物を入れて1人5,000〜6,000円ほど (2025〜2026年)',
    neighborhood: '福島6丁目、スカイビルの近く。大阪駅 (桜橋口) から徒歩7分、福島駅から8分',
    gf_detail: '要確認。グルテンの情報なし。焼き鳥にはたれも使い (2026年10月)、唐揚げや焼きおにぎりもある。',
    vegan_detail: 'ヴィーガンではありません。鶏の店で、ピーマン、山芋、じゃがいもの料理もある。',
    notes: '[焼き鳥・福島、毎月の予約合戦] スカイビルの近くにある10席の焼き鳥の店で、夫婦で営み、食べログの焼き鳥 WEST 百名店2024に選ばれている。翌月の席は毎月20日の昼ごろに Instagram のメッセージで埋まる。ふつうの1.5倍から2倍の大きさの串を店主が炭火で焼く: ジューシーなつくね、ほぼレアのレバー、厚いハツと砂肝、それに鶏のたたき、ピーマンライス、とても大きい焼きおにぎり。飲み物を入れて1人5,000〜6,000円ほど。焼くのは店主ひとりなので、まとめて注文して時間に余裕を: 3時間かかることも。現金のみ、喫煙可、水・木曜休み。',
  });
}

// ================================================================ 炭焼き専門 ひととき 兎我野本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27092705/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://yakitori-hitotoki.com/';
  const H = day(['18:00', '03:30']);
  put({
    id: 'osaka_hitotoki_togano', name: '炭焼き専門 ひととき 兎我野本店 (Sumiyaki Senmon Hitotoki Togano honten)', category: 'OMNI',
    lat: 34.700774, lng: 135.503218, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The shop stresses its sauce as well as ingredients and grilling (Tabelog); horse sashimi is usually eaten with soy sauce; beef-tendon curry at lunch (July 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and horse meat.',
    hours_raw: 'Daily 18:00–3:30 (last order 2:30); closes at 2:00 if no guests are in, so call ahead to arrive after 2:00; closing days not fixed (Tabelog). A July 2026 diner had a ¥1,000 lunch of beef-tendon curry with salad and iced coffee; lunch is not in the Tabelog hours. Appetizer charge ¥330 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money, PayPay, d Barai (Tabelog). 18 seats: a counter of 10 and two tables for 4; smoking allowed at all seats; private hire up to 20; groups of 6 or more by phone (Tabelog). All-you-can-drink courses (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Togano-cho, 平田第二レジャービル 1F — 5 min from Umeda and Higashi-Umeda Stns',
    cuisine: 'Charcoal yakitori of Asahibi Jidori, a local chicken from Hyogo, and horse sashimi shipped directly from Kumamoto, with meat sushi; all-you-can-drink courses (Tabelog) · horse sashimi platters of three cuts such as lean, fat and heart, or kokorone, futagoe and tenderloin (February 2025; June 2026) · a three-kind yakitori platter (not skewers), yagen cartilage and seseri (2025–2026) · chicken thigh tartare, slow-grilled thigh, meat sushi (December 2024) · blackboard specials; a chicken and vegetable stew as the appetizer (2026) · beef-tendon curry lunch ¥1,000 (July 2026)',
    website: WEB, gmaps: gm('炭焼き専門 ひととき 兎我野本店'), menu_url: null,
    notes: "[Yakitori · Umeda, Togano-cho, horse sashimi till 3:30 am] A small, retro charcoal-grill izakaya in Togano-cho with a U-shaped counter, open from 6 pm to 3:30 am every day, pairing Asahibi Jidori yakitori from Hyogo with horse sashimi sent straight from Kumamoto. Order a three-cut basashi platter (one diner had kokorone, futagoe and tenderloin) and a three-kind yakitori plate, plus yagen cartilage and seseri. A ¥330 appetizer is charged, all-you-can-drink courses suit groups, and smoking is allowed at every seat. Diners credit the cheerful woman owner and staff; it is busy, so dishes can be slow. There is a second shop in Doyama.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), a woman (June 2026)', 'Grill staff (unnamed)'], origin: null, background: 'Shop text (Tabelog): charcoal-grilled Asahibi Jidori chicken and horse sashimi sourced directly; ingredients from local producers; a spacious counter for couples, friends and solo diners; all-you-can-drink courses; a smoking-friendly shop. Hyogo chicken; horse sashimi and meat sushi shipped from Kumamoto. A June 2026 diner had earlier visited the Doyama branch and praises "the warm hospitality from the female owner".', philosophy: 'Care over ingredients, sauce and grilling (Tabelog).', specialty: 'Horse sashimi; charcoal yakitori.',
      anecdotes: [
        { text: '"The three-sample platter included Kokorone, Futagoe, and Tenderloin, showcasing a luxurious lineup." — June 2026.', source: R + 'B530042795/' },
        { text: '"It\'s a smoking-friendly place with a bit of a B-grade gourmet vibe, making it a friendly spot reminiscent of a typical bar in Umeda." — March 2026.', source: R + 'B529049056/' },
        { text: '"I highly recommend the Yagen Nankotsu and Seseri." — March 2025.', source: R + 'B503071321/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, WEB, R + 'B490211979/', R + 'B497462713/', R + 'B501641160/', R + 'B503071321/', R + 'B527676123/', R + 'B529049056/', R + 'B530042795/', R + 'B531782977/', R + 'B531903928/', R + 'B533149734/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats welcome solo diners; friendly staff (2025–2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区兎我野町10-6 平田第二レジャービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区兎我野町10番6号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B531903928/'],
    price_note: 'No dinner menu prices in the sources; ¥330 appetizer charge; lunch curry from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Horse sashimi, three-cut platter', '', 'Horse sashimi', 'ask', 'no', 'February 2025 and June 2026 reviews.', 'basashi_3'),
      it('', '', 'Charcoal yakitori, three-kind platter', '', 'Yakitori', 'ask', 'no', 'February 2025 and June 2026 reviews.', 'yakitori_3'),
      it('', '', 'Beef-tendon curry lunch with salad and iced coffee', '¥1,000', 'Lunch', 'no', 'no', 'July 2026 review.', 'curry_lunch'),
    ] }, {
    cuisine: '兵庫の地鶏 Asahibi Jidori の炭火焼き鳥と、熊本から直送の馬刺し、肉寿司、飲み放題つきのコース (食べログ)・馬刺しは3種盛り、赤身、脂、ハツや、kokorone、futagoe、ヒレなど (2025年2月、2026年6月)・串ではない焼き鳥の3種盛り、やげん軟骨、せせり (2025〜2026年)・もものタルタル、じっくり焼いたもも、肉寿司 (2024年12月)・黒板のおすすめ、お通しは鶏と野菜の煮物 (2026年)・ランチの牛すじカレー1,000円 (2026年7月)',
    neighborhood: '兎我野町、平田第二レジャービル 1階。梅田駅と東梅田駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。焼き鳥はたれにもこだわる (食べログ)、馬刺しはふつう醤油で食べる、ランチには牛すじカレー (2026年7月)。',
    vegan_detail: 'ヴィーガンではありません。鶏肉と馬肉。',
    notes: '[焼き鳥・梅田兎我野町、深夜3時半まで馬刺し] 兎我野町にある、コの字のカウンターのレトロで小さな炭火焼きの居酒屋で、毎日18時から深夜3時30分まで。兵庫の Asahibi Jidori の焼き鳥と、熊本から直送の馬刺しが看板。馬刺しの3種盛り (kokorone、futagoe、ヒレという人も) と焼き鳥の3種盛りに、やげん軟骨やせせりを。お通しは330円、グループには飲み放題のコース、全席喫煙可。明るい女性の店主とスタッフが好評で、混むと料理が遅くなることも。堂山にもう1店ある。',
  });
}

save();
