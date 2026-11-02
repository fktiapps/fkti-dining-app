// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 21.
//   Ids checked for parity: 27085452, 27129906, 27141718, 27074722 (all even).
//   + 北新地 光隆 Kitashinchi Mitsutoki (sushi and Japanese dishes in Dojima, open to 2:00 on weekdays)
//   + 鮨 そら Sushi Sora (code-door sushi counter in Dojima since 2022, aged tuna, lunch and dinner every day)
//   + 洋食ビストロ 一方美人 Yoshoku Bistro Ippou Bijin (Western-style bistro with wine in Dojima, since 2024)
//   + 焼鳥 すぎはら Yakitori Sugihara (Doyama yakitori izakaya of "zuke-tori" and chicken sukiyaki, open to 5:00, since 2013)
//   Chain check: 光隆: invoice T1120001187757 → ＳＹＳＴＥＭ－ＦＡＣＴＯＲＹ株式会社 at the shop's lot (NTA register); one shop. そら: invoice
//   T8120901028780 → フレスデザイン株式会社, 箕面市 (NTA register); one そら found. 一方美人: invoice T6120001234835 → 株式会社ＬＩＢＥＲＴＹ
//   (NTA register); one shop. すぎはら: invoice T6120001201158 → 株式会社川添 (NTA register); the listing links two sister shops of other
//   concepts (串かつとおでん 石川, 炭火焼と釜飯 長島); no other すぎはら found.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-21');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 北新地 光隆
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27085452/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '02:00']); const S = day(['18:00', '23:00']);
  put({
    id: 'osaka_kitashinchi_mitsutoki_dojima', name: '北新地 光隆 (Kitashinchi Mitsutoki)', category: 'OMNI',
    lat: 34.696214, lng: 135.497899, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi brushed with soy, grilled eel in sauce, and cooked Japanese dishes between the nigiri.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood course.',
    hours_raw: 'Mon–Fri 18:00–2:00; Sat 18:00–23:00; closed Sundays and holidays (Tabelog). Reservations accepted; à la carte from 20:30; private hire for 8 or more (Tabelog). Service charge: Tabelog\'s original text says none ("なし"). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 16 seats: a counter of 10 and a partitioned table for 6; smoking allowed, from 1 November 2026 cigarettes at the table only and e-cigarettes anywhere (Tabelog). Takeout of thick rolls (October 2025). The building\'s entrance is on the Dojima Funadaikucho side only (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-4-24, 4F of にしきビル, entrance on the Funadaiku side only — 5 min from Oebashi Stn, 7 min from Kitashinchi Stn',
    cuisine: 'Sushi and Japanese dishes with seasonal fish from markets around Japan, local sake and wine (Tabelog) · courses (Tabelog, tax included): seasonal special course of 18 items with a small gift to take home ¥24,750; sushi course of 11 items ¥16,500 · white- and red-vinegar rice used to suit each topping (October 2025; March 2026) · dishes named in 2024–2026: the "Tsuufuu Don", a mini bowl of sea urchin, salmon roe and caviar; a shirako bowl; sea urchin; torigai; eel; thick rolls to take away',
    website: null, gmaps: gm('北新地 光隆 堂島'), menu_url: null,
    notes: "[Sushi · Dojima, late-night sushi and dishes] A sixteen-seat sushi counter on a fourth floor in Dojima, open until 2:00 on weekdays, mixing cooked Japanese dishes with nigiri on white or red-vinegar rice chosen for each fish. The show-piece is the 'Tsuufuu Don', a mini bowl of sea urchin, salmon roe and caviar; the eel is singled out too. Courses are ¥16,500 or ¥24,750, with à la carte from 20:30, and thick rolls to take away. Smoking is allowed (cigarettes at the table only from November 2026); diners call it a rare find for smokers and good value for the area.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed) and staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: seasonal flavours by skilled artisans, fresh fish from markets across Japan, sushi and Japanese cuisine, local sake and wine. The Tabelog invoice number T1120001187757 is registered to ＳＹＳＴＥＭ－ＦＡＣＴＯＲＹ株式会社 at the same lot (NTA invoice register, read 2026-11-02).', philosophy: null, specialty: 'Mini bowl of sea urchin, salmon roe and caviar.',
      anecdotes: [
        { text: '"Kitashinchi Mitsutoki offers surprisingly reasonable prices these days." — October 2025; the same diner notes white and red vinegar used for the rice to suit the toppings.', source: R + 'B489456510/' },
        { text: '"Especially the "Tsuufuu Don"—a mini rice bowl with sea urchin, salmon roe, and caviar—was outstanding!" — December 2025, dinner with a client.', source: R + 'B519210688/' },
        { text: '"I appreciated the thoughtful arrangement of alternating between individual dishes and sushi, which kept things interesting." — March 2026.', source: R + 'B523699191/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 北新地 光隆、寿司・日本料理・海鮮、大阪市北区堂島1-4-24 にしきビル 4F、大江橋駅から5分、北新地駅から7分、ビルの入口は Funadaikucho 側だけ、月〜金18:00〜2:00、土18:00〜23:00、日・祝休み、予約可、20時半からアラカルト、8名以上で貸切、サービス料なし、カード可、電子マネー・QR 不可、16席 (カウンター10、テーブル6)、喫煙可 (2026年11月1日から紙たばこはテーブル席のみ、電子たばこはどこでも)、全国の市場の鮮魚、和食と寿司、地酒とワイン、旬の食材の特別コース18品24,750円 (手みやげつき)、旬の寿司コース11品16,500円。インボイス登録は ＳＹＳＴＥＭ－ＦＡＣＴＯＲＹ株式会社 (同じ番地)。口コミ(2024年11月〜2026年10月): ネタによってシャリを変える (白酢と赤酢)、ウニ、トリ貝、うなぎ (日本語の口コミ)、ウニといくらとキャビアのミニ丼「Tsuufuu Don」、白子丼、太巻きのテイクアウト、一品と寿司が交互、喫煙できる、値段は手ごろになったという声、高めという声。',
      confidence: 'medium', sources: [TB, R + 'B411064703/', R + 'B489456510/', R + 'B495930801/', R + 'B497150909/', R + 'B502458645/', R + 'B502478501/', R + 'B504532188/', R + 'B519210688/', R + 'B523699191/', R + 'B537386971/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses or à la carte after 20:30 (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-4-24 にしきビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目4番24号 (go) 1m; 洋食ビストロ 一方美人 of this batch is about 7 m away but at a different address (堂島1-4-6), so both stay precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Seasonal special course, 18 items', '¥24,750', 'Courses', 'ask', 'no', 'Tabelog.', 'special_course'),
      it('', '', 'Seasonal sushi course, 11 items', '¥16,500', 'Courses', 'ask', 'no', 'Tabelog.', 'sushi_course'),
      it('', '', '"Tsuufuu Don": mini bowl of sea urchin, salmon roe and caviar', '', 'À la carte', 'ask', 'no', 'November 2024–December 2025.', 'tsuufuu_don'),
    ] }, {
    cuisine: '全国の市場から仕入れる季節の魚の寿司と和食、地酒とワイン (食べログ)・コース (食べログ、税込): 手みやげつきの旬の特別コース18品24,750円、寿司コース11品16,500円・ネタに合わせて白酢と赤酢のシャリを使い分ける (2025年10月、2026年3月)・2024年〜2026年の口コミに出てくる料理: ウニといくらとキャビアのミニ丼「Tsuufuu Don」、白子丼、ウニ、トリ貝、うなぎ、持ち帰りの太巻き',
    neighborhood: '堂島1-4-24、にしきビルの4階、入口は Funadaikucho 側だけ。大江橋駅から5分、北新地駅から7分',
    gf_detail: '要確認。グルテンの情報なし。醤油をぬる寿司、たれのうなぎ、にぎりの合間の和食。',
    vegan_detail: 'ヴィーガンではありません。寿司と魚介のコース。',
    notes: '[寿司・堂島、夜遅くまでの寿司と一品] 堂島のビルの4階にある16席の寿司のカウンターで、平日は夜2時まで。和の一品とにぎりを交互に出し、シャリはネタに合わせて白酢と赤酢。名物はウニといくらとキャビアのミニ丼「Tsuufuu Don」で、うなぎも好評。コースは16,500円か24,750円、20時半からはアラカルトも、太巻きの持ち帰りも。喫煙可 (2026年11月から紙たばこはテーブル席のみ)。たばこを吸う人にはありがたい店、このあたりでは手ごろという声。',
  });
}

// ================================================================ 鮨 そら
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27129906/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_sushi_sora_dojima', name: '鮨 そら (Sushi Sora)', category: 'OMNI',
    lat: 34.696058, lng: 135.496736, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Edomae sushi with aged tuna; the shop makes its own ponzu and ume vinegar; soy and sauces are used on the nigiri.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood course.',
    hours_raw: 'Daily 11:30–15:00 (last seating 13:30, last order 14:30) and 18:00–22:00 (last seating 20:00, last order 21:30) (Tabelog). Reservation only; the door code is sent by text the day before; courses run about 90 minutes at lunch and 120 at dinner (Tabelog; September–October 2026). Cards (VISA, Master, JCB, AMEX, Diners), UnionPay, IC cards, iD, QUICPay, PayPay, Alipay, LINE Pay, Kakaopay (Tabelog). 17 seats: a pentagonal counter of 11 and private rooms for 2 to 6; non-smoking; wheelchair accessible; children and strollers welcome; no strong perfume (Tabelog; October 2026). Opened 18 April 2022 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '堂島1-5-4, 3F of はつ根ビル, on Dojima Nakadori, a door that opens with a code — 4 min from Kitashinchi Stn',
    cuisine: 'Edomae sushi that borrows Kansai techniques and ingredients, with aged tuna and seasonal dishes; ponzu, ume vinegar and desserts made in house; sake pairings (Tabelog) · courses (Tabelog, tax included): "Hoshi" ¥15,000; "Sora Sea" ¥20,000; "Full Moon" with ten pieces and seasonal dishes ¥25,000; a ¥5,000 lunch (September 2026) · dishes named in 2026: tuna, sea-urchin and salmon-roe hand roll, bluefin roll with sea urchin, swordtip squid with salt and lemon, fresh Pacific saury, red-vinegar gari, a welcome sushi; tamagoyaki decorated for the season (a Halloween egg, a cat in nori for a birthday) (August–October 2026)',
    website: null, gmaps: gm('鮨 そら 堂島'), menu_url: null,
    notes: "[Sushi · Dojima, behind a code-locked door] A seventeen-seat sushi restaurant on Dojima Nakadori, reservation only, where a code texted the day before opens the door to a pentagonal white-wood counter and private rooms. The Edomae sushi mixes in Kansai touches and aged tuna, with courses at ¥15,000, ¥20,000 or ¥25,000 and a ¥5,000 lunch, served every day. Guests choose a chopstick rest from a tray, and the tamagoyaki gets seasonal decorations, a cat in nori on a birthday plate in October 2026. A new head chef took over by September 2026. Many payment apps accepted, including Alipay and Kakaopay.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed; new by September 2026)', 'staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: Edomae sushi that goes beyond its concept with Kansai techniques and ingredients, aged tuna, house-made ponzu, ume vinegar and desserts; opened 18 April 2022. The Tabelog invoice number T8120901028780 is registered to フレスデザイン株式会社, 箕面市 (NTA invoice register, read 2026-11-02). A September 2026 diner notes a new head chef; an August 2026 diner counts a visit "including the previous establishment".', philosophy: null, specialty: 'Aged tuna; Full Moon course.',
      anecdotes: [
        { text: '"Entering this code felt a bit special." — August 2026, the Full Moon course, reservation only with a door code sent ahead.', source: R + 'B454003697/' },
        { text: '"This time, a new head chef was in charge, making it a special visit for me." — September 2026, a lunch course.', source: R + 'B455259200/' },
        { text: '"Choosing our chopstick rests was a fun conversation starter." — October 2026, a birthday lunch; the egg came with a cat in nori to match the cake.', source: R + 'B537321225/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨 そら、寿司・日本料理・海鮮、大阪市北区堂島1-5-4 はつ根ビル 3F、西梅田駅、北新地駅から4分、毎日11:30〜15:00 (最終入店13:30)、18:00〜22:00 (最終入店20:00)、予約のみ、昼は約90分、夜は約120分、カード・電子マネー・QR 可 (銀聯、Alipay、LINE Pay、カカオペイも)、17席 (カウンター11、テーブル6)、2〜6名の個室、禁煙、車いす可、子ども・ベビーカー可、強い香水はひかえて、2022年4月18日オープン、江戸前の枠をこえて関西の技と食材、熟成マグロ、自家製のポン酢、梅酢、デザート、日本酒のペアリング、Hoshi コース15,000円、Sora Sea コース20,000円、Full Moon コース25,000円。インボイス登録はフレスデザイン株式会社 (箕面市)。口コミ(2026年8月〜10月): 前日にドアの暗証番号が届く、五角形の白木のカウンター、Full Moon コース (寿司10貫と季節の料理)、マグロとウニといくらの手巻き、ウニをのせた本マグロの巻物、ケンサキイカの塩レモン、生のサンマ、赤酢のガリ、ウェルカムの寿司、5,000円のランチ、新しい大将、えらべる箸置き、ハロウィンの卵焼き、誕生日プレートのねこの海苔、前の店から通う人。',
      confidence: 'medium', sources: [TB, R + 'B454003697/', R + 'B454197921/', R + 'B455259200/', R + 'B455729154/', R + 'B535801725/', R + 'B535952152/', R + 'B536299716/', R + 'B536891663/', R + 'B537321225/', R + 'B537346393/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only with a door code sent by text; Alipay, LINE Pay and Kakaopay accepted (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-5-4 はつ根ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目5番4号 (go) 18m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included); lunch from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', '"Hoshi" course', '¥15,000', 'Dinner', 'ask', 'no', 'Tabelog.', 'hoshi'),
      it('', '', '"Sora Sea" course', '¥20,000', 'Dinner', 'ask', 'no', 'Tabelog.', 'sora_sea'),
      it('', '', '"Full Moon" course, ten pieces and seasonal dishes', '¥25,000', 'Dinner', 'ask', 'no', 'Tabelog; September 2026.', 'full_moon'),
      it('', '', 'Lunch course', '¥5,000', 'Lunch', 'ask', 'no', 'September 2026.', 'lunch'),
    ] }, {
    cuisine: '関西の技と食材を取り入れた江戸前寿司、熟成マグロと季節の料理。ポン酢、梅酢、デザートは自家製、日本酒のペアリングも (食べログ)・コース (食べログ、税込): Hoshi 15,000円、Sora Sea 20,000円、寿司10貫と季節の料理の Full Moon 25,000円、5,000円のランチ (2026年9月)・2026年の口コミに出てくる料理: マグロとウニといくらの手巻き、ウニをのせた本マグロの巻物、ケンサキイカの塩レモン、生のサンマ、赤酢のガリ、ウェルカムの寿司。季節で飾る卵焼き (ハロウィンの卵、誕生日にはねこの海苔) (2026年8月〜10月)',
    neighborhood: '堂島1-5-4、はつ根ビルの3階、Dojima Nakadori、暗証番号で開くドア。北新地駅から4分',
    gf_detail: '要確認。グルテンの情報なし。熟成マグロの江戸前寿司で、ポン酢と梅酢は自家製。にぎりには醤油やたれを使う。',
    vegan_detail: 'ヴィーガンではありません。寿司と魚介のコース。',
    notes: '[寿司・堂島、暗証番号のドアの奥] Dojima Nakadori にある17席の予約制の寿司屋で、前日にショートメールで届く暗証番号でドアを開けると、五角形の白木のカウンターと個室。関西の技と熟成マグロを取り入れた江戸前寿司で、コースは15,000円、20,000円、25,000円、ランチは5,000円、毎日営業。箸置きはトレーから選び、卵焼きは季節の飾りつき、2026年10月の誕生日プレートにはねこの海苔。2026年9月には新しい大将に。Alipay やカカオペイなど支払い方法が多い。',
  });
}

// ================================================================ 洋食ビストロ 一方美人
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27141718/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '00:00']); const F = day(['17:00', '01:00']); const SU = day(['17:00', '00:00']);
  put({
    id: 'osaka_yoshoku_bistro_ippou_bijin_dojima', name: '洋食ビストロ 一方美人 (Yoshoku Bistro Ippou Bijin)', category: 'OMNI',
    lat: 34.696178, lng: 135.497963, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Quiche, pasta, risotto, pâté, shrimp in kadaif and a ten-item appetizer platter.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a bistro of fish, meat, pâté and quiche; no vegetarian dish named.',
    hours_raw: 'Mon–Thu and the day after a holiday 18:00–24:00 (last order food 23:00); Fri, Sat and the day before a holiday 17:00–1:00 (last order food 24:00); Sun and holidays 17:00–24:00; closed only 31 December and 1 January (Tabelog). Reservations accepted, may be limited to two hours; one drink per person; starter ¥600, not with courses (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay (Tabelog). 16 seats: a counter and about three tables; heated tobacco only (Tabelog; September 2026). Up stairs to the third floor (August 2026). Opened 1 May 2024 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-4-6, 3F of 谷安ルナビル, up a staircase on a street of large clubs — 4 min from Kitashinchi and Oebashi Stns',
    cuisine: 'Western-style bistro: classic yoshoku with a modern touch, à la carte and courses, and wine (Tabelog) · about ten seasonal appetizers as an assorted plate, booked with a seat for ¥1,500 a head; casual course of six dishes (appetizers, seasonal fish carpaccio, quiche of the day, herb-grilled chicken thigh, pasta, dessert) ¥3,800; an anniversary course; free-flow of about ten wines (Tabelog; 2026) · dishes named in July–October 2026: flounder escabeche, pâté de campagne, quiche Lorraine with caramelised onion, bacon and mushroom, shrimp fritters in kadaif, roast beef, squid-ink risotto, pan-seared fish, cold pasta; wines by the glass such as Araldica Barbera',
    website: null, gmaps: gm('洋食ビストロ 一方美人 堂島'), menu_url: null,
    notes: "[Yoshoku · Dojima, a hidden wine bistro] A sixteen-seat bistro up a staircase on a club-lined Dojima street, open since 2024 and late every night, run by a chef and one other staff member in July 2026. Classic Western dishes get a modern touch for wine: book the ten-item appetizer platter (¥1,500 a head) and add shrimp in kadaif, roast beef or a squid-ink risotto, or take the ¥3,800 six-dish course. The free-flow of about ten wines is popular, and diners call it good value for Kitashinchi. ¥600 starter charge à la carte; heated tobacco allowed.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'one floor staff member'], origin: null, background: 'Per the shop-maintained Tabelog listing: a bistro for adults in Kitashinchi, creative dishes blending classic Western cuisine with a modern touch, à la carte and courses at affordable prices; opened 1 May 2024. The Tabelog invoice number T6120001234835 is registered to 株式会社ＬＩＢＥＲＴＹ (NTA invoice register, read 2026-11-02). A July 2026 diner saw the chef and one staff member running it.', philosophy: '"Beauty" found in both flavour and ambiance (Tabelog).', specialty: 'Appetizer platter; free-flow wine.',
      anecdotes: [
        { text: '"The restaurant is run by just two people: the chef and what seems to be a part-time staff member." — July 2026.', source: R + 'B532425561/' },
        { text: '"I made a reservation just for the assorted appetizers and was very satisfied with the generous portions." — September 2026.', source: R + 'B535794586/' },
        { text: '"The biggest attraction here is the affordable all-you-can-drink wine selection." — July 2026, a solo traveller.', source: R + 'B537305387/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 洋食ビストロ 一方美人、ビストロ・居酒屋・イタリアン、大阪市北区堂島1-4-6 谷安ルナビル 3F、北新地駅・大江橋駅から4分、月〜木・祝後日18:00〜24:00、金・土・祝前日17:00〜25:00、日・祝17:00〜24:00、12月31日と1月1日だけ休み、予約可、混雑時は2時間、ワンドリンク制、お通し600円 (コースは不要)、カード・PayPay 可、16席、加熱式たばこのみ、2024年5月1日オープン、王道の洋食に今の感覚を加えた創作料理とワイン、前菜10種ほどの盛り合わせの席の予約1,500円、カルパッチョ、キッシュ、鶏もものハーブ焼き、パスタ、デザートの6品のカジュアルコース3,800円。インボイス登録は株式会社ＬＩＢＥＲＴＹ。口コミ(2026年7月〜10月): シェフとスタッフのふたり、ヒラメのエスカベッシュ、パテ・ド・カンパーニュ、キッシュ・ロレーヌ、カダイフのエビのフリット、ローストビーフ、イカスミのリゾット、魚のポワレ、冷製パスタ、グラスワイン、ワインの飲み放題、記念日のコース、階段で3階へ、大きなクラブのある通り、北新地にしては手ごろ。',
      confidence: 'medium', sources: [TB, R + 'B532425561/', R + 'B533451546/', R + 'B533821470/', R + 'B534451857/', R + 'B535182206/', R + 'B535383107/', R + 'B535794586/', R + 'B536612892/', R + 'B537305387/', R + 'B538318270/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte or courses; a solo traveller was well served (July 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-4-6 谷安ルナビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目4番6号 (go) 19m; 北新地 光隆 of this batch is about 7 m away but at a different address (堂島1-4-24), so both stay precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Prices from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Assorted appetizers (about ten), seat booking', '¥1,500', 'À la carte', 'ask', 'no', 'Tabelog; September 2026.', 'zensai_plan'),
      it('', '', 'Casual course of six dishes', '¥3,800', 'Courses', 'ask', 'no', 'Tabelog.', 'casual_course'),
      it('', '', 'Starter charge (à la carte)', '¥600', 'Charges', 'ask', 'ask', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '洋食ビストロ: 王道の洋食に今の感覚を加えた料理をアラカルトとコースで、ワインと (食べログ)・季節の前菜10種ほどの盛り合わせを席の予約とセットでひとり1,500円、前菜、季節の魚のカルパッチョ、本日のキッシュ、鶏もものハーブ焼き、パスタ、デザートの6品のカジュアルコース3,800円、記念日のコース、10種ほどのワインの飲み放題 (食べログ、2026年)・2026年7月〜10月の口コミに出てくる料理: ヒラメのエスカベッシュ、パテ・ド・カンパーニュ、あめ色玉ねぎとベーコンとキノコのキッシュ・ロレーヌ、カダイフのエビのフリット、ローストビーフ、イカスミのリゾット、魚のポワレ、冷製パスタ。グラスワインは Araldica のバルベーラなど',
    neighborhood: '堂島1-4-6、谷安ルナビルの3階、大きなクラブの並ぶ通りの階段の上。北新地駅・大江橋駅から4分',
    gf_detail: '要確認。グルテンの情報なし。キッシュ、パスタ、リゾット、パテ、カダイフのエビ、10種の前菜の盛り合わせ。',
    vegan_detail: 'ヴィーガンではありません。魚、肉、パテ、キッシュのビストロで、ベジタリアンの料理の名前はない。',
    notes: '[洋食・堂島、隠れ家のワインビストロ] 2024年からの堂島の大きなクラブの並ぶ通りの階段の上にある16席のビストロで、毎晩遅くまで。2026年7月はシェフとスタッフのふたりで営業。王道の洋食に今の感覚を加えた料理をワインと: 10種の前菜の盛り合わせ (席の予約とセットでひとり1,500円) に、カダイフのエビ、ローストビーフ、イカスミのリゾットなどを足すか、6品3,800円のコース。10種ほどのワインの飲み放題が人気で、北新地にしては手ごろという声。アラカルトはお通し600円、加熱式たばこ可。',
  });
}

// ================================================================ 焼鳥 すぎはら
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27074722/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '05:00']);
  put({
    id: 'osaka_yakitori_sugihara_doyama', name: '焼鳥 すぎはら (Yakitori Sugihara)', category: 'OMNI',
    lat: 34.702563, lng: 135.504103, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. "Zuke-tori" is marinated in green onion and salt koji; chicken sukiyaki in a sweet soy sauce; chicken nanban with tartar, kara-age and a salt yakisoba to finish.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken izakaya. Tabelog ticks "vegetarian options", but none is named.',
    hours_raw: 'Daily 18:00–5:00 (last order food 4:00, drinks 4:30), open year-round (Tabelog). Reservations accepted; same-day cancellation fee, 100% for no-shows (Tabelog). Seat charge with starter ¥440; 10% late-night charge after 22:00 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay, Alipay (Tabelog). 40 seats: a counter of 20 and 20 at tables and sunken tatami; heated tobacco indoors, cigarettes on the engawa terrace; pets welcome on the terrace (Tabelog). Opened 22 August 2013, renamed since (Tabelog; 2026 reviews).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂山町1-5, ground floor of 三共梅田ビル, with a terrace — 7 min from Higashi-Umeda and Nakazakicho Stns',
    cuisine: 'Yakitori izakaya of its own trademarked "zuke-tori", chicken marinated in green onion and salt koji then grilled, served off the skewer to share, and a chicken sukiyaki hotpot ¥2,640 (Tabelog) · courses with drinks (Tabelog, tax included): chicken sukiyaki ¥4,500; yakitori ¥5,000, finishing with yakisoba; "Manzoku" with both ¥5,500; a three-hour yakitori course with 150 minutes of drinks ¥6,000 (July 2026) · dishes named in 2026: bonjiri, seseri, negima with mustard, chicken sashimi under green onion with yuzu kosho and garlic, chicken yukhoe, duck sashimi, chicken nanban, kara-age with tartar, ponzu dishes, namul, beef loin rice bowl, salt yakisoba',
    website: null, gmaps: gm('焼鳥 すぎはら 堂山'), menu_url: null,
    notes: "[Yakitori · Doyama, zuke-tori until 5:00] A lively forty-seat yakitori izakaya in Doyama, open every night until 5:00, with a terrace where smokers and pets are welcome. The house specialty is the trademarked 'zuke-tori', chicken marinated in green onion and salt koji, grilled and served off the skewer for sharing, along with a chicken sukiyaki hotpot. Drink-inclusive courses run ¥4,500–6,000 and end with a salt yakisoba. A 10% charge applies after 22:00. Most diners praise the food and staff; one July 2026 diner found the skewers small and the skin burnt.",
    chef_bio: { chef_name: null, roles: ['Grill cooks and staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: an original grilled chicken, the trademarked "zuke-tori" marinated in green onion and salt koji, and the chicken sukiyaki; open year-round until 5:00; opened 22 August 2013; sister shops linked on the listing are 串かつとおでん 石川 and 炭火焼と釜飯 長島. The Tabelog invoice number T6120001201158 is registered to 株式会社川添 (NTA invoice register, read 2026-11-02). February and May 2026 diners note that the shop has changed its name.', philosophy: null, specialty: 'Zuke-tori; chicken sukiyaki.',
      anecdotes: [
        { text: '"The chicken is marinated with onions and salt koji, maximizing its flavor." — July 2026, the three-hour yakitori course.', source: R + 'B531911621/' },
        { text: '"This yakitori restaurant also serves chicken sashimi." — September 2026; the yakitori came off the skewer for sharing.', source: R + 'B536911496/' },
        { text: '"The chicken sashimi topped with green onions was piled high with scallions, making the meat almost invisible." — February 2026.', source: R + 'B320594570/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 焼鳥 すぎはら、焼き鳥・すき焼き・居酒屋、大阪市北区堂山町1-5 三共梅田ビル 1F、東梅田駅・中崎町駅から7分、毎日18:00〜5:00 (L.O.料理4:00、ドリンク4:30)、年中無休、予約可、当日キャンセル料、無断キャンセルは100%、22時以降は深夜料金10%、席料 (お通しつき) 440円、カード・PayPay・Alipay 可、40席 (カウンター20、テーブル20)、掘りごたつ、テラス、店内は加熱式たばこ、縁側の席は紙たばこ可、ペット可、2013年8月22日オープン、商標登録の「づけ鳥」(ねぎと塩麹に漬けた鶏)、名物の鳥すき2,640円、飲み放題つきの鳥すきコース4,500円、焼き鳥コース5,000円 (〆に焼きそば)、満足コース5,500円、系列店は串かつとおでん 石川と炭火焼と釜飯 長島。インボイス登録は株式会社川添。口コミ(2026年2月〜9月): 店名が変わった、ぼんじり、せせり、からしのねぎま、ねぎたっぷりの鶏刺し (柚子胡椒とにんにく)、鶏ユッケ、鴨の刺身、チキン南蛮、タルタルの唐揚げ、ポン酢の料理、ナムル、牛ロース丼、塩焼きそば、串からはずして出す、3時間で150分飲み放題の焼き鳥コース6,000円、串が小さく皮がこげていたという声、スタッフが明るい。',
      confidence: 'medium', sources: [TB, R + 'B320594570/', R + 'B524860663/', R + 'B524980317/', R + 'B527714202/', R + 'B527835076/', R + 'B528986318/', R + 'B531165131/', R + 'B531911621/', R + 'B531923948/', R + 'B536911496/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Drink-inclusive courses; Alipay accepted (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂山町1-5 三共梅田ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂山町1番5号 (go) 25m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Prices from the Tabelog listing (tax included); 10% late-night charge after 22:00.', last_checked: TODAY, items: [
      it('', '', 'Chicken sukiyaki hotpot', '¥2,640', 'Signature', 'no', 'no', 'Tabelog.', 'torisuki'),
      it('', '', 'Chicken sukiyaki course with all-you-can-drink', '¥4,500', 'Courses', 'no', 'no', 'Tabelog.', 'torisuki_course'),
      it('', '', 'Yakitori course with all-you-can-drink', '¥5,000', 'Courses', 'ask', 'no', 'Tabelog.', 'yakitori_course'),
      it('', '', 'Manzoku course: yakitori and chicken sukiyaki with drinks', '¥5,500', 'Courses', 'no', 'no', 'Tabelog.', 'manzoku_course'),
    ] }, {
    cuisine: '商標登録の「づけ鳥」(ねぎと塩麹に漬けて焼いた鶏、串からはずして取り分けやすく) と、鳥すきの鍋2,640円の焼き鳥の居酒屋 (食べログ)・飲み放題つきのコース (食べログ、税込): 鳥すき4,500円、〆に焼きそばの焼き鳥5,000円、両方の満足コース5,500円、3時間で150分飲み放題の焼き鳥コース6,000円 (2026年7月)・2026年の口コミに出てくる料理: ぼんじり、せせり、からしのねぎま、ねぎたっぷりの鶏刺しと柚子胡椒とにんにく、鶏ユッケ、鴨の刺身、チキン南蛮、タルタルの唐揚げ、ポン酢の料理、ナムル、牛ロース丼、塩焼きそば',
    neighborhood: '堂山町1-5、三共梅田ビルの1階、テラスあり。東梅田駅・中崎町駅から7分',
    gf_detail: '要確認。グルテンの情報なし。「づけ鳥」はねぎと塩麹に漬ける。鳥すきは甘い醤油、タルタルのチキン南蛮、唐揚げ、〆の塩焼きそば。',
    vegan_detail: 'ヴィーガンではありません。鶏の居酒屋。食べログに「ベジタリアンメニューあり」とあるが、料理の名前はない。',
    notes: '[焼鳥・堂山、朝5時までのづけ鳥] 堂山のにぎやかな40席の焼き鳥の居酒屋で、毎晩朝5時まで。テラスではたばこもペットも可。名物は商標登録の「づけ鳥」で、ねぎと塩麹に漬けた鶏を焼いて串からはずし、取り分けやすく。鳥すきの鍋も。飲み放題つきのコースは4,500〜6,000円で、〆は塩焼きそば。22時以降は10%の深夜料金。料理とスタッフをほめる声が多いが、串が小さく皮がこげていたという声も (2026年7月)。',
  });
}

save();
