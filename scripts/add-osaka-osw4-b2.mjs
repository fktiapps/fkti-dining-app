// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 2.
//   + CRITTERS BURGER (Amerikamura burger house since 2009; Tabelog Hamburger 100, seven times 2017–2026)
//   + Cafe 婆沙羅 かえる堂 Cafe Basara Kaeru dou (curry café by Nishi-Ohashi Stn; Tabelog Cafe WEST 100 2021, 2022, 2025)
//   + 味乃家 本店 Ajinoya Honten (okonomiyaki since 1965 opposite the 松竹座 stage door; Tabelog Okonomiyaki 100)
//   + ペスカ 心斎橋店 PESCA Shinsaibashi (Italian on the 10th floor of an apartment-like building; Tabelog Italian 100 2021)
//   Chain check: CRITTERS BURGER's own site links three sister shops in Osaka (Critters Pizza, West Wood Bakers, The Pie
//   Shop); West Wood Bakers is in data (osaka_west_wood_bakers_minamihorie) and its record does not mention Critters.
//   A small family group, not a chain. Kaeru dou: no branch found. Ajinoya: three shops of Ajinoya Inc. (main shop,
//   味乃家はなれ in 天王寺区, 四代目味乃家 opened 31 July 2026; official site), none in data. PESCA: a Namba branch and
//   食堂ペスカ (Tabelog 27140654, lane 2, not in data) per reviews; not a fast-growing chain. None of the four is in
//   data/osaka.json (grep by name, Tabelog id and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-2');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ CRITTERS BURGER
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27041627/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://critters.jp/';
  const KW = 'https://www.walkerplus.com/article/148096/';
  const TO = 'https://www.timeout.com/osaka/restaurants/critters-burger';
  const H = day(['11:00', '22:00']);
  put({
    id: 'osaka_critters_burger_nishishinsaibashi', name: 'CRITTERS BURGER (クリッターズバーガー)', category: 'OMNI',
    lat: 34.674255, lng: 135.498596, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Every burger comes on the house bun of Hokkaido wheat (Kansai Walker 2018; a September 2026 review), and pancakes, fries and onion rings fill out the menu; no gluten-free bun is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the burgers are built on an all-beef patty with mayonnaise, bacon, cheese or egg, and no meat-free burger appears in the sources read.',
    hours_raw: 'Daily 11:00–22:00, last order 21:00; weekday lunch 11:00–16:00; open all year (Tabelog). Reservations only for the evening, from 18:00; walk in at lunch, when a few groups may be waiting at opening (Tabelog; September–October 2026). Cards (VISA, Master, JCB, AMEX, Diners) for bills over ¥5,000, e-money and QR payments; PayPay (Tabelog; October 2026 review). 25 seats, tables only; smoking allowed from 17:00, non-smoking until then; pets allowed; take-out (Tabelog). Opened 23 May 2009 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-10-35, アルシュ11 1F, in Amerikamura — 1 min from Yotsubashi Stn, 3 min from Shinsaibashi Stn exit 7',
    cuisine: 'American-style burgers on house buns of Hokkaido wheat and natural yeast, baked at the sister bakery West Wood Bakers, with an all-beef patty, no filler, of domestic and imported beef, and mayonnaise and mustard in place of sauce (Kansai Walker 2018) · Double Cheeseburger ¥2,365 (October 2026) · spinach bacon burger with sautéed spinach, the No. 1 seller in 2018 and still ordered in 2026 · avocado cheeseburger, avocado bacon cheeseburger · jalapeño cheeseburger · mozzarella mushroom burger · double burger · a seasonal maitake béchamel burger (October 2026) · burgers come with fries, or fries and salad at lunch · onion rings · bacon-and-egg pancakes · shakes such as chocolate banana · ginger ale, Dr Pepper, guava juice, draft beer',
    website: SITE, gmaps: gm('CRITTERS BURGER 西心斎橋'), menu_url: null,
    notes: '[Burgers · Amerikamura, a pioneer since 2009] A wood-fronted American burger house in Amerikamura that opened in 2009, before gourmet burgers had caught on in Kansai, and has been in Tabelog\'s Hamburger 100 seven times since 2017. The bun is the point: made from Hokkaido wheat and natural yeast at the sister bakery, toasted, fluffy inside and firm enough to hold the juicy all-beef patty to the last bite. Order the double cheeseburger (¥2,365 in October 2026), or the spinach bacon burger, the house favourite since at least 2018. Expect a few groups waiting at the 11:00 opening and many overseas visitors; evening tables can be booked from 18:00. Note that smoking is allowed from 17:00.',
    chef_bio: { chef_name: '栗田宗太朗', roles: ['Representative of CRITTERS BURGER (Kansai Walker 2018)'], origin: null, background: 'Per Kansai Walker (2018): the representative 栗田宗太朗 went to an international school hoping to study at an American university, then trained at an architecture college, qualified as an architect and worked three or four years as a site supervisor for a housebuilder. The father, a programmer, baked bread as a hobby and opened a bakery near the family home, baking every morning while the mother sold the bread; the younger brother, three years younger, came in to help. The brothers decided to make burgers with that bread, ran a mobile stall for about a year around 淀屋橋 and at festivals, and opened the shop in Shinsaibashi, an area known since high school, in 2009 with 20 burgers on the menu. The first two years were hard and delivery kept the shop going. When the family bakery could no longer keep up with the buns, West Wood Bakers opened in 2013, then The Pie Shop in 2016 (Kansai Walker). Time Out (2025) calls it a pioneer of high-end beef burgers in Osaka. Tabelog Hamburger 100 in 2017, 2018, 2019, 2021, 2022, 2024 and 2026.', philosophy: '"Bring American food culture to Japan and serve it with an arrangement of our own" (Kansai Walker 2018, translated).', specialty: 'Spinach bacon burger; double cheeseburger; house buns of Hokkaido wheat.',
      anecdotes: [
        { text: '"The bun was fluffy on top and firmer on the bottom, with a slight sweetness from the bread and richness from the cheese" — October 2026, a Double Cheeseburger for JPY 2,365 on a Sunday at 5:50 PM; full 15 minutes later.', source: R + 'B537633596/' },
        { text: '"The music playing in the restaurant happened to be my favorite Southern American artists like Dr. John and Lynyrd Skynyrd" — September 2026, a spinach bacon burger before a concert.', source: R + 'B536081711/' },
        { text: '"I entered the restaurant a bit hesitantly, but I was warmly welcomed." — September 2026, the mozzarella mushroom burger lunch set.', source: R + 'B537071681/' },
      ],
      japanese_sources_summary: '関西ウォーカー (ウォーカープラス、2018年): クリッターズバーガー、まだ関西にグルメバーガーの波が来ていなかった2009年から関西のハンバーガー界を牽引、代表の栗田宗太朗さん、高校はインターナショナルスクール、建築の専門学校で建築士の資格、ハウスメーカーの現場監督を3、4年、プログラマーの父が趣味でパンを作り家の近所にパン屋、毎朝父が焼き母が売る、3つ下の弟が手伝い、兄弟でハンバーガーを作ることに、淀屋橋やフェスで移動販売を約1年、心斎橋に路面店、メニューは最初から20種、最初の2年は苦労してデリバリーで食いつなぐ、2013年にウエストウッドベーカーズ、2016年にザ パイ ショップ、バンズは姉妹店で焼く北海道産小麦100%のブレンドと天然酵母の長時間発酵、パティは牛100%つなぎなし、国産牛と輸入牛のブレンド、ソースは使わずマヨネーズとマスタードのみ、人気ナンバーワンはスピナッチ（ホウレンソウ）ベーコンバーガー、ベーコンエッグパンケーキも人気、テーブル席のみ、テラス席、創業2009年5月23日。公式サイト: 大阪市中央区西心斎橋一丁目10-35 1階、無休、姉妹店 Critters Pizza、West Wood Bakers、The Pie Shop。食べログ (店舗会員): 毎日11:00〜22:00 (L.O. 21:00)、平日ランチ11:00〜16:00、夜のみ予約可 (18時以降)、カードは5,000円以上、電子マネー・QR可、25席、17時まで禁煙でその後は喫煙可、ペット可、テイクアウト可、ハンバーガー 百名店 2017〜2019・2021・2022・2024・2026。口コミ(2026年8月〜10月): ダブルチーズバーガー2,365円、トーストしたふわふわのバンズ、ジューシーなパティ、ほうれん草とベーコンのバーガー、開店時から数組が待つ、海外の客が多い。',
      confidence: 'high', sources: [TB, SITE, KW, TO, R + 'B443956606/', R + 'B478034843/', R + 'B536081711/', R + 'B536137658/', R + 'B536298165/', R + 'B536470669/', R + 'B537003504/', R + 'B537071681/', R + 'B537101646/', R + 'B537473096/', R + 'B537633596/', R + 'B538111300/', R + 'B538209933/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A photo menu at the entrance (October 2026); many overseas visitors (August and October 2026); covered in English by Time Out. No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-10-35 アルシュ11 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.674220, 135.498643); GSI 大阪府大阪市中央区西心斎橋一丁目10番35号 (go) 6m. 西心斎橋 ゆうの (osaka_nishishinsaibashi_yuno, address_ja "大阪府大阪市中央区西心斎橋1-10-35") shares the house number and is pinned 1 m from this Tabelog point, so this pin uses the GSI point, about 7 m from Yuno; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537101646/', R + 'B537633596/', KW],
    price_note: 'Only the Double Cheeseburger price was seen in 2026 reviews (October 2026); the other burgers are named in 2026 reviews or Kansai Walker 2018 without a current price.', last_checked: TODAY, items: [
      it('', '', 'Double Cheeseburger', '¥2,365', 'Burgers', 'no', 'no', 'October 2026 reviews.', 'double_cheeseburger'),
      it('スピナッチ（ホウレンソウ）ベーコンバーガー', '', 'Spinach bacon burger', '', 'Burgers', 'no', 'no', 'No. 1 seller (Kansai Walker 2018); September 2026 reviews.', 'spinach_bacon_burger'),
      it('', '', 'Avocado bacon cheeseburger', '', 'Burgers', 'no', 'no', 'September 2026 review (lunch set with drink).', 'avocado_bacon_cheeseburger'),
      it('', '', 'Mozzarella mushroom burger', '', 'Burgers', 'no', 'no', 'September and October 2026 reviews.', 'mozzarella_mushroom_burger'),
      it('', '', 'Jalapeño cheeseburger', '', 'Burgers', 'no', 'no', 'October 2026 review.', 'jalapeno_cheeseburger'),
      it('ベーコンエッグパンケーキ', '', 'Bacon-and-egg pancakes', '', 'Pancakes', 'no', 'no', 'Kansai Walker 2018.', 'bacon_egg_pancake'),
    ] }, {
    cuisine: 'アメリカンスタイルのハンバーガー。バンズは姉妹店の West Wood Bakers で焼く北海道産小麦と天然酵母の自家製、パティは国産牛と輸入牛の牛100%つなぎなし、ソースは使わずマヨネーズとマスタードのみ (関西ウォーカー 2018年)・ダブルチーズバーガー2,365円 (2026年10月)・炒めたほうれん草のスピナッチ（ホウレンソウ）ベーコンバーガー、2018年の人気ナンバーワンで2026年も注文が多い・アボカドチーズバーガー、アボカドベーコンチーズバーガー・ハラペーニョチーズバーガー・モッツァレラとマッシュルームのバーガー・ダブルバーガー・季節限定のまいたけのベシャメルソースのバーガー (2026年10月)・バーガーにはポテト、ランチはポテトとサラダ・オニオンリング・ベーコンエッグパンケーキ・チョコバナナなどのシェイク・ジンジャーエール、ドクターペッパー、グァバジュース、生ビール',
    neighborhood: '西心斎橋1-10-35 アルシュ11 1階、アメリカ村。四ツ橋駅から徒歩1分、心斎橋駅7番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。バーガーはどれも北海道産小麦の自家製バンズ (関西ウォーカー 2018年、2026年9月の口コミ) で、パンケーキ、ポテト、オニオンリングもある。グルテンフリーのバンズの説明はない。',
    vegan_detail: 'ヴィーガンではありません。バーガーは牛100%のパティにマヨネーズ、ベーコン、チーズ、卵など。読んだ情報源には肉なしのバーガーは出てこない。',
    notes: '[ハンバーガー・アメリカ村、2009年からの草分け] 関西にまだグルメバーガーが広まっていなかった2009年にアメリカ村に開いた、木の外観のアメリカンなハンバーガー店で、2017年から7回、食べログのハンバーガー 百名店に選ばれている。主役はバンズ。北海道産小麦と天然酵母で姉妹店のパン屋が焼き、トーストして中はふわふわ、ジューシーな牛100%のパティを最後のひと口まで支える。ダブルチーズバーガー (2026年10月は2,365円) か、2018年から店の一番人気のほうれん草とベーコンのバーガーを。11時の開店時には数組が待ち、海外の客も多い。夜は18時以降なら予約できる。17時からは喫煙可なので注意。',
  });
}

// ================================================================ Cafe 婆沙羅 かえる堂
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27003907/'; const R = TB + 'dtlrvwlst/';
  const BAILA = 'https://baila.hpplus.jp/blogs/sugimatsu_chihiro/63925';
  const L = day(['11:00', '20:00']), W = day(['11:00', '15:00']);
  put({
    id: 'osaka_cafe_basara_kaerudo_kitahorie', name: 'Cafe 婆沙羅 かえる堂 (Cafe Basara Kaeru dou)', category: 'OMNI',
    lat: 34.674956, lng: 135.492745, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The house curry is a thick sauce simmered for 100 hours with no stated ingredients, and much of the menu is breaded or wrapped: katsu curry, croquettes, fried vegetables, omurice with demi-glace, curry ramen; the monthly Inaka Gozen has included grilled fresh wheat gluten (July 2026).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. There is a vegetable curry (September 2026), the monthly Inaka Gozen is mostly vegetables (July 2026), and the omurice can come with a soy-milk cream sauce (September 2026), but nothing is stated about the curry base, stock or dairy.',
    hours_raw: 'Mon, Tue, Fri, Sat, Sun 11:00–20:00; Wed 11:00–15:00; closed Thursday; hours may change (Tabelog). No reservations (Tabelog). Weekday lunch until 15:00 includes a free coffee or tea (July and October 2026 reviews). Lunch fills up around noon; mid-afternoon is quieter (2026 reviews). Cash only: no cards, e-money or QR (Tabelog; 2026 reviews). 40 seats with sofas and a terrace; smoking only on the terrace; dogs welcome on the terrace; children welcome (Tabelog). The monthly Inaka Gozen menu is posted on Instagram at the start of each month (July 2026 review).',
    hours: { 0: L, 1: L, 2: W, 4: L, 5: L, 6: L }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kita-Horie 2-2-24, PRADIPA 1F, a slightly hidden spot — 1 min from Nishi-Ohashi Stn exit 3; 5 min from Yotsubashi Stn',
    cuisine: 'Curry café with a long menu · the house curry, fruits and vegetables simmered 100 hours until they melt into a thick, fruity sauce that turns spicy at the end (BAILA blog; July 2026 review) · Tonchi curry with grilled pork like chashu and cheese ¥1,200 (August 2026) · as a plate with salad, yogurt and fruit · katsu curry · croquette curry · vegetable curry · toppings such as cheese chashu, croquettes and piled-up fried vegetables (lotus root, green beans, pumpkin, eggplant) · jambalaya, fried rice with chopped Tonchi and takana under the curry · omurice in small, medium or large, with the curry, with demi-glace, or W sauce of soy-milk cream and demi-glace · cheese Indian omurice ¥1,300 (October 2026) · Inaka Gozen ¥1,500, a monthly set of many small dishes (July 2026); in September 2026 it was a tenderloin-cutlet curry with 13 dishes · curry ramen; chilled Chinese noodles in summer · parfaits, zenzai · ginger chai, Tropical Paradise juice, melon cream soda, coffee, draft beer',
    website: null, gmaps: gm('Cafe 婆沙羅 かえる堂 北堀江'), menu_url: null,
    notes: '[Curry café · Kita-Horie by Nishi-Ohashi Stn] A slightly hidden, old-style café a minute from Nishi-Ohashi Station, where the smell of curry reaches the street. The curry is the reason to come: fruits and vegetables simmered for 100 hours into a thick sauce, sweet and fruity at first and then building heat. Order the Tonchi curry with grilled pork and cheese (¥1,200 in August 2026), add croquettes or a pile of fried vegetables, or have it over omurice; at weekday lunch a coffee or tea comes free, and a large rice gets a refill. The monthly Inaka Gozen of small vegetable dishes is the lighter choice. The owner cooks everything alone, so busy lunches mean a short wait (September 2026). Dogs are welcome on the terrace. Cash only. Tabelog Cafe WEST 100 in 2021, 2022 and 2025.',
    chef_bio: { chef_name: null, roles: ['Owner-cook, unnamed in the sources read'], origin: null, background: 'A September 2026 diner writes that the owner cooks everything alone, with staff serving, and describes a table at the back that carries "the owner\'s unique atmosphere". The BAILA blog (2024, updated 2026) calls it an old-house-style café known for a curry of fruits and vegetables simmered 100 hours, and a past Tabelog 100 shop. Tabelog Cafe WEST 100 in 2021, 2022 and 2025.', philosophy: null, specialty: '100-hour curry; Tonchi curry; omurice with curry and demi-glace.',
      anecdotes: [
        { text: '"The presentation was impressive, with fried vegetables piled high on top of the katsu." — September 2026, a katsu curry plate after 1 PM, with a short wait because the owner cooks everything alone.', source: R + 'B536237203/' },
        { text: '"The staff kindly changed my partner\'s order to the large size because they were happy to see us enjoying our meal." — October 2026, on the terrace.', source: R + 'B537400534/' },
        { text: '"The curry is simmered for 100 hours, resulting in a thick, sauce-like consistency that is wonderfully rich. It doesn\'t contain any chunks of ingredients." — July 2026.', source: R + 'B532274766/' },
      ],
      japanese_sources_summary: 'BAILA (ブログ、2024年、2026年更新): Cafe 婆沙羅 かえる堂、「100時間煮込んだカレー」が評判の古民家風カフェ、西大橋駅から徒歩1分ほどの隠れ家、どこか懐かしい店内、ランチ時は満席になりがち、自家製オムライスに100時間煮込んだカレーとデミグラスソース、カレーはフルーツの甘い味わいのあとにジワジワ辛さ、濃厚でコクがある、ジャンバラヤのカレーがけ、カツカレー、果物と野菜をとろけるまで100時間煮込む、過去に百名店。食べログ: 大阪市西区北堀江2-2-24 PRADIPA 1F、西大橋駅3番出口から徒歩1分、月・火・金・土・日11:00〜20:00、水11:00〜15:00、木曜休み、予約不可、カード・電子マネー・QR不可、40席、ソファ席とオープンテラス、喫煙はテラス席のみ、ペットはテラス席のみ、子ども可、カフェ WEST 百名店 2021・2022・2025。口コミ(2026年7月〜10月): Tonchi カレー1,200円、プレートはサラダ、ヨーグルト、フルーツ付き、平日ランチはコーヒーか紅茶のサービス、Cheese Indian omurice 1,300円、Inaka Gozen 1,500円は月替わりで小鉢がたくさん、ライス大盛りはおかわり可、オーナーがひとりで料理を作る、テラスは犬連れ可、現金のみ。',
      confidence: 'medium', sources: [TB, BAILA, R + 'B532034817/', R + 'B532073041/', R + 'B532169544/', R + 'B532219931/', R + 'B532274766/', R + 'B533017631/', R + 'B533896574/', R + 'B535271369/', R + 'B535478411/', R + 'B536160909/', R + 'B536178402/', R + 'B536237203/', R + 'B537400534/', R + 'B537727491/', R + 'B538399740/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table from a long menu with a cute design (July 2026); staff described as kind and attentive (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江2-2-24 PRADIPA 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江二丁目2番24号 (go) 2m. No other record in data within 40 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533017631/', R + 'B537727491/', R + 'B532219931/'],
    price_note: 'Prices from 2026 reviews (Tonchi curry ¥1,200, August 2026; cheese Indian omurice ¥1,300 tax included, October 2026; Inaka Gozen ¥1,500, July 2026); no menu published.', last_checked: TODAY, items: [
      it('', '', 'Tonchi curry (grilled pork and cheese)', '¥1,200', 'Curry', 'ask', 'no', 'August 2026 review; plate with salad, yogurt and fruit available.', 'tonchi_curry'),
      it('カツカレー', '', 'Katsu curry', '', 'Curry', 'no', 'no', 'BAILA blog; September 2026 reviews.', 'katsu_curry'),
      it('', '', 'Vegetable curry', '', 'Curry', 'ask', 'ask', 'September 2026 review.', 'vegetable_curry'),
      it('', '', 'Cheese Indian omurice', '¥1,300', 'Omurice', 'ask', 'no', 'October 2026 review (tax included).', 'cheese_indian_omurice'),
      it('', '', 'Omurice with W sauce (soy-milk cream and demi-glace)', '', 'Omurice', 'ask', 'no', 'September 2026 review.', 'omurice_w_sauce'),
      it('ジャンバラヤのカレーがけ', '', 'Jambalaya with curry (fried rice with Tonchi and takana)', '', 'Curry', 'ask', 'no', 'BAILA blog; July 2026 review.', 'jambalaya_curry'),
      it('', '', 'Inaka Gozen (monthly set of small dishes)', '¥1,500', 'Set', 'no', 'ask', 'July 2026 review; included grilled fresh wheat gluten that month.', 'inaka_gozen'),
    ] }, {
    cuisine: 'メニューの多いカレーのカフェ・名物のカレーは果物と野菜をとろけるまで100時間煮込んだ、濃厚でフルーティー、あとから辛さがくるソース (BAILA のブログ、2026年7月の口コミ)・チャーシューのような焼いた豚とチーズの Tonchi カレー1,200円 (2026年8月)・サラダ、ヨーグルト、フルーツ付きのプレートも・カツカレー・コロッケのカレー・野菜カレー・トッピングにチーズチャーシュー、コロッケ、山盛りの野菜の素揚げ (れんこん、いんげん、かぼちゃ、なす)・刻んだ Tonchi と takana 入りの焼きめしにカレーをかけたジャンバラヤ・オムライスは小、中、大、カレー、デミグラス、豆乳クリームとデミグラスの W ソース・Cheese Indian omurice 1,300円 (2026年10月)・月替わりで小鉢がたくさんの Inaka Gozen 1,500円 (2026年7月)、2026年9月はヒレカツのカレーと13品・カレーラーメン、夏は冷やし中華・パフェ、ぜんざい・ジンジャーチャイ、Tropical Paradise ジュース、メロンクリームソーダ、コーヒー、生ビール',
    neighborhood: '北堀江2-2-24 PRADIPA 1階、少しわかりにくい隠れ家。西大橋駅3番出口から徒歩1分、四ツ橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。名物のカレーは100時間煮込んだとろみのあるソースで、材料の説明はない。カツカレー、コロッケ、野菜の素揚げ、デミグラスのオムライス、カレーラーメンなど、衣や生地を使うものが多い。月替わりの Inaka Gozen には焼いた生麩が入ったこともある (2026年7月)。',
    vegan_detail: '要確認。ヴィーガンの情報なし。野菜カレー (2026年9月) や、野菜が中心の月替わりの Inaka Gozen (2026年7月)、豆乳クリームのソースのオムライス (2026年9月) はあるが、カレーのベース、だし、乳製品についての説明はない。',
    notes: '[カレーのカフェ・北堀江、西大橋駅のそば] 西大橋駅から1分、少しわかりにくい場所にある懐かしい雰囲気のカフェで、通りまでカレーの香りがする。目当てはカレー。果物と野菜を100時間煮込んだ、とろりとしたソースで、最初はフルーティーで甘く、あとから辛さがくる。焼いた豚とチーズの Tonchi カレー (2026年8月は1,200円) に、コロッケや山盛りの野菜の素揚げをのせるか、オムライスにかけて。平日のランチはコーヒーか紅茶がつき、ライス大盛りはおかわりできる。軽めにするなら月替わりで野菜の小鉢が並ぶ Inaka Gozen を。料理はオーナーがひとりで作るので、混むランチは少し待つ (2026年9月)。テラスは犬連れ可。現金のみ。食べログのカフェ WEST 百名店に2021年、2022年、2025年に選ばれている。',
  });
}

// ================================================================ 味乃家 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001439/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ajinoya-okonomiyaki.com/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'osaka_ajinoya_honten_namba', name: '味乃家 本店 (Ajinoya Honten)', category: 'OMNI',
    lat: 34.668073, lng: 135.500985, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: okonomiyaki and negiyaki are wheat-batter dishes and the yakisoba uses the house noodles; no gluten-free option described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every okonomiyaki, negiyaki and yakisoba on the official menu carries pork, beef, seafood, egg or cheese.',
    hours_raw: 'Tue–Sun and holidays 11:00–22:00, a full close at 22:00; closed Monday and New Year\'s Day, and sometimes the last Monday and Tuesday of the month (official site). Tabelog gives last order 21:30, and on Friday and Saturday 11:00–22:30 (last order 22:00). No same-day bookings and no bookings by phone or email; a TableCheck FastPass buys a timed place at the front of the queue (up to 4 people, valid 15 minutes after the slot, the whole party present, 90 minutes at busy times), and bookings through AutoReserve are void (official site). The queue is otherwise long: an hour or more at 17:00–18:00 in October 2026, with a check-in terminal outside that sends an SMS as your turn nears, and orders taken while you wait. Each okonomiyaki takes about 15 minutes to cook (official site). No cards or e-money; PayPay accepted (Tabelog). 10 counter seats and 10 tables, up to 45 people (official site; Tabelog says 50 seats); non-smoking; English menu; children welcome (Tabelog). Founded 1965 (official site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-7-16, 現代こいさんビル 2F, opposite the 松竹座 stage door, between Midosuji and Shinsaibashi-suji — 3 min from Namba Stn exit 14',
    cuisine: 'Osaka okonomiyaki cooked by the staff on the teppan at your table (prices from the official menu, tax included, revised 15 April 2026) · Ajinoya Mix okonomiyaki with squid, octopus, pork, minced beef and prawn ¥1,780 (the No. 1 seller) · fresh tomato and cheese okonomiyaki ¥1,780 · mochi okonomiyaki with cheese ¥1,680 · special mix with whole prawn, scallop, beef and corn ¥3,480 · Hiroshima-yaki with pork and noodles ¥1,580 · pork, squid or prawn okonomiyaki ¥1,100 · Kujo green-onion negiyaki with stewed beef tendon ¥1,580, or with squid, pork or prawn ¥1,380, served with ponzu and sesame sauce · mix yakisoba topped with a fried egg ¥1,980 (large ¥2,230) · house-made stewed beef tendon ¥980 · tonpeiyaki ¥780 · yam steak ¥580 · Chinese-cabbage kimchi ¥480 · fluffy takoyaki ¥980 (limited) · set B for two, mix okonomiyaki, mix yakisoba and tendon negiyaki ¥5,340 · beer, highballs (Black Nikka ¥600 in October 2026), chuhai, sake, shochu',
    website: SITE, gmaps: gm('味乃家 本店 難波'), menu_url: SITE + 'top/menu/',
    notes: '[Okonomiyaki · Namba, a queue since 1965] An okonomiyaki house founded in 1965, on a second floor opposite the stage door of the 松竹座 theatre, with a retro interior that the shop itself likens to a trip back to an old downtown okonomiyaki stand. Staff mix, pour, flip and sauce every okonomiyaki on the iron plate at your table; the batter is light, the result fluffy, sweetish sauce on top. Order the Ajinoya Mix, the tomato and cheese, or the Kujo green-onion negiyaki with beef tendon, which October 2026 diners singled out. The queue is the catch: in October 2026 an hour or more at dinner, so register at the terminal outside, walk off and come back on the text message, or buy a FastPass. In Tabelog\'s Okonomiyaki 100 most years since 2018, it now has two sister shops, 味乃家はなれ and 四代目味乃家, the second opened in July 2026 at the Namba Oriental Hotel.',
    chef_bio: { chef_name: null, roles: ['Shop manager (店舗責任者) of the main shop: 空山 嘉津子 (official site)', 'Operator: Ajinoya Inc.; news on the official site is signed 味乃家 店主'], origin: null, background: 'Founded 1965 in Namba and "passed down through four generations" (Tabelog shop text). The official site describes over 50 years of okonomiyaki grilled in front of the customer, so that diners enjoy the sizzle, the smell and the fluffy texture. Sister shops: 味乃家はなれ (reservation only, formerly the 寺田町 central kitchen, 天王寺区) and 四代目味乃家 (opened 31 July 2026 in The Namba Central Eatery, Namba Oriental Hotel 1F). Tabelog Okonomiyaki 100 in 2018, 2019, 2022, 2023, 2024 and 2025; an October 2026 diner writes that it has consistently received a Bib Gourmand.', philosophy: '"Each one grilled with care, one at a time" (official site, translated).', specialty: 'Ajinoya Mix okonomiyaki; Kujo green-onion negiyaki with beef tendon; mix yakisoba.',
      anecdotes: [
        { text: '"After checking in at the terminal outside, we were assigned number 19. … the restaurant has a system that sends an SMS notification to your registered phone number as your turn approaches" — October 2026, seated after about an hour.', source: R + 'B538175164/' },
        { text: '"What stood out the most was the Kujo Negi-yaki. The abundant flavor and aroma of the Kujo green onions were exceptional" — October 2026.', source: R + 'B536745241/' },
        { text: '"While there are many table seats, solo diners are directed to the counter." — October 2026, Ajinoya Mix for JPY 1,780 at about 4 PM on a weekday, with four people ahead.', source: R + 'B536600275/' },
      ],
      japanese_sources_summary: '公式サイト: 味乃家 本店、1965年創業、食いだおれ大阪・難波で50年以上続くお好み焼きの老舗、松竹座の向い楽屋口前、大阪市中央区難波1-7-16 現代こいさんビル 2階、店舗責任者 空山 嘉津子、カウンター席10席、テーブル10卓、最大45名、火〜日・祝11:00〜22:00 (22時に完全閉店)、月曜と元日休み、最終月曜と火曜が休みになることも、当日予約不可、電話・メールの予約不可、TableCheck の FastPass (1回1〜4名、指定時間から15分まで有効、混雑時は90分制、全員揃って来店)、AutoReserve 経由の予約は無効、焼き上がりまで約15分、2026年4月15日からメニューの一部見直しと価格改定、味乃家ミックスお好み焼き1,780円 (人気1位)、ミックス焼きそば1,980円 (人気2位)、京都九条ネギ入りネギ焼き すじ肉1,580円 (人気3位、ポン酢とゴマダレ付き)、新鮮トマトと特選チーズのお好み焼き1,780円、餅入りお好み焼き1,680円、スペシャルミックスお好み焼き3,480円、広島焼き1,580円、自家製牛すじ煮込み980円、味乃家特選Bセット5,340円 (2名向き)、税込。姉妹店に味乃家はなれ (完全予約制、旧 寺田町セントラルキッチン店、天王寺区大道2-5-11) と四代目味乃家 (2026年7月31日オープン、なんばオリエンタルホテル1階)。食べログ (店舗会員): 4代にわたる味、キャベツたっぷりで生地は軽め、ふわふわのお好み焼き、PayPay 可、カード不可、禁煙、英語メニューあり、お好み焼き 百名店 2018・2019・2022〜2025。口コミ(2026年10月): 1時間以上の行列、外の端末で受付して順番が近づくと SMS、並びながら注文、各テーブルの鉄板でスタッフが焼く、九条ネギのネギ焼きが好評、ひとり客はカウンター、海外の客も多い。',
      confidence: 'high', sources: [TB, SITE + 'top/company/', SITE + 'top/company/main-shop/', SITE + 'top/contact/faq.php', SITE + 'top/menu/okonomiyaki.php', SITE + 'top/menu/yakisoba.php', SITE + 'top/menu/ippin.php', SITE + 'top/menu/setMenu.php', SITE + 'top/news/2026/20260403171300.php', R + 'B536600275/', R + 'B536745241/', R + 'B536944621/', R + 'B537223783/', R + 'B537411032/', R + 'B537588062/', R + 'B537718215/', R + 'B538044711/', R + 'B538049217/', R + 'B538175164/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); the official site has English, Chinese and Korean pages; staff cook at the table; many overseas customers (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-7-16 現代こいさんビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site (menu revised 15 April 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目7番16号 (go) 7m. Nearest records in data are at 難波1-7-15 (osaka_okonomiyaki_sakaba_o, osaka_hard_romanticker_namba), 17 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [SITE + 'top/menu/okonomiyaki.php', SITE + 'top/menu/yakisoba.php', SITE + 'top/menu/ippin.php', SITE + 'top/menu/setMenu.php', R + 'B538175164/'],
    price_note: 'Prices from the official menu pages (tax included; updated 15 April 2026 after a price revision); Ajinoya Mix, tomato and cheese and tendon negiyaki match an October 2026 review.', last_checked: TODAY, items: [
      it('味乃家ミックスお好み焼き', '', 'Ajinoya Mix okonomiyaki (squid, octopus, pork, minced beef, prawn)', '¥1,780', 'Okonomiyaki', 'no', 'no', 'Official menu; No. 1 seller.', 'ajinoya_mix'),
      it('新鮮トマトと特選チーズのお好み焼き', '', 'Fresh tomato and cheese okonomiyaki', '¥1,780', 'Okonomiyaki', 'no', 'no', 'Official menu.', 'tomato_cheese_okonomiyaki'),
      it('餅入りお好み焼き', '', 'Okonomiyaki with mochi and cheese', '¥1,680', 'Okonomiyaki', 'no', 'no', 'Official menu.', 'mochi_okonomiyaki'),
      it('スペシャルミックスお好み焼き', '', 'Special mix okonomiyaki (whole prawn, squid, octopus, pork, beef, mince, scallop, corn)', '¥3,480', 'Okonomiyaki', 'no', 'no', 'Official menu.', 'special_mix_okonomiyaki'),
      it('京都九条ネギ入り ネギ焼き (すじ肉)', '', 'Kujo green-onion negiyaki with stewed beef tendon (ponzu and sesame sauce)', '¥1,580', 'Negiyaki', 'no', 'no', 'Official menu; No. 3 seller.', 'negiyaki_suji'),
      it('ミックス焼きそば', '', 'Mix yakisoba with squid, octopus, prawn, beef, pork and a fried egg', '¥1,980', 'Yakisoba', 'no', 'no', 'Official menu; large ¥2,230; No. 2 seller.', 'mix_yakisoba'),
      it('味乃家 自家製牛すじ煮込み', '', 'House-made stewed beef tendon', '¥980', 'Dishes', 'ask', 'no', 'Official menu.', 'gyusuji_nikomi'),
      it('味乃家特選Ｂセット', '', 'Set B for two: Ajinoya Mix, mix yakisoba, tendon negiyaki', '¥5,340', 'Sets', 'no', 'no', 'Official menu.', 'set_b'),
    ] }, {
    cuisine: '大阪のお好み焼き、テーブルの鉄板でスタッフが焼く (値段は公式サイトのお品書き、税込、2026年4月15日改定)・イカ、タコ、豚肉、ミンチ、エビ入りの味乃家ミックスお好み焼き1,780円 (人気1位)・新鮮トマトと特選チーズのお好み焼き1,780円・餅入りお好み焼き (チーズと) 1,680円・有頭エビ、ほたて貝柱、牛肉、コーン入りのスペシャルミックスお好み焼き3,480円・豚肉とそば玉の広島焼き1,580円・ブタ、イカ、エビのお好み焼き各1,100円・京都九条ネギ入りネギ焼き、すじ肉1,580円、イカ、豚肉、エビは各1,380円、ポン酢とゴマダレ付き・目玉焼きがのったミックス焼きそば1,980円 (大2,230円)・自家製牛すじ煮込み980円・とん平焼き780円・山芋ステーキ580円・鶴橋の白菜キムチ480円・特製フワフワたこ焼き980円 (数量限定)・2名向きの特選Bセット (ミックスお好み焼き、ミックス焼きそば、すじ肉のネギ焼き) 5,340円・ビール、ハイボール (2026年10月はブラックニッカ600円)、チューハイ、日本酒、焼酎',
    neighborhood: '難波1-7-16 現代こいさんビル 2階、松竹座の向い楽屋口前、御堂筋と心斎橋筋の間。なんば駅14番出口から徒歩3分',
    gf_detail: '実質グルテンフリーではありません。お好み焼きとネギ焼きは小麦の生地、焼きそばは特製の麺。グルテンフリーの選択肢の説明はない。',
    vegan_detail: 'ヴィーガンではありません。公式のお品書きのお好み焼き、ネギ焼き、焼きそばはどれも豚肉、牛肉、魚介、卵、チーズのいずれかを使う。',
    notes: '[お好み焼き・難波、1965年からの行列店] 1965年創業のお好み焼き店で、松竹座の楽屋口の向かいのビルの2階。店自身が「昔の下町のお好み焼屋へタイムスリップしたみたい」というレトロな店内。どのお好み焼きもスタッフがテーブルの鉄板で混ぜて、広げて、返して、ソースまで仕上げてくれる。生地は軽く、ふわふわで、ソースは甘め。味乃家ミックス、トマトとチーズ、2026年10月の口コミで好評だった九条ネギとすじ肉のネギ焼きを。難点は行列で、2026年10月の夜は1時間以上。外の端末で受付して、ショートメッセージが来るまで散歩するか、FastPass を買うのがおすすめ。2018年からほとんど毎年食べログのお好み焼き 百名店に選ばれ、姉妹店に味乃家はなれと、2026年7月になんばオリエンタルホテルにできた四代目味乃家がある。',
  });
}

// ================================================================ ペスカ 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27006683/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '24:00']);
  put({
    id: 'osaka_pesca_shinsaibashi', name: 'ペスカ 心斎橋店 (PESCA Shinsaibashi)', category: 'OMNI',
    lat: 34.674048, lng: 135.498282, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; the listing asks guests to note allergies in the booking comments. The signature "Paitza" is a pizza on flaky pastry, and pasta, baguette and cakes run through the courses; carpaccio, steak, duck and garlic rice are dishes without obvious wheat, but nothing is stated about their sauces.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The courses are built on fish, pork, wagyu, duck and cheese; the à la carte menu is long and changes with the market, so ask what can be made without animal products.',
    hours_raw: 'Daily 15:00–24:00; closed irregularly (Tabelog). Reservations accepted; note allergies or a dessert plate with a message in the booking comments (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners; PIN needed for IC cards from April 2025) and e-money; no QR payments (Tabelog). 24 seats: about 10 at the counter, a table for four and one for six (September 2026 review); private hire for 20 to 50; non-smoking; BYO drinks possible; no minors (Tabelog). No sign on the ground floor: take the lift to the top, 10th floor and walk to the far end of the outdoor corridor (September 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 1-10-28, 心斎橋Mビル 10F, at the end of the corridor; Amerikamura side — 3 min from Yotsubashi Stn exit 3, 5 min from Shinsaibashi Stn exit 7',
    cuisine: 'Italian à la carte and courses, with the market\'s fish of the day (Tabelog) · "Paitza", a pizza on crisp, flaky pastry, e.g. bacon with a soft-boiled egg in the middle (2026) · carpaccio of three fish of the day, e.g. squid, yellowtail and salmon (September 2026) or kanpachi, salmon and spear squid (October 2026) · prosciutto with figs · mackerel and bottarga aglio e olio · duck and porcini cream pasta · shirasu pasta · garlic rice with black wagyu (October 2026) · fondant chocolate · course with 90 minutes of free drinks ¥7,000: salad, carpaccio, antipasti, pizza, pasta, Hirata Bokujo San-gen pork (Tabelog) · European duck course ¥6,600 and Special Wagyu Tenderloin course ¥8,800, each with a message dessert plate on request (Tabelog) · bottles of wine from ¥3,900 (September 2026)',
    website: null, gmaps: gm('PESCA ペスカ 心斎橋店'), menu_url: TB + 'dtlmenu/',
    notes: '[Italian · Nishi-Shinsaibashi, a 10th-floor hideaway] An Italian restaurant with no sign at street level: take the lift of an apartment-like building on the Amerikamura side to the top floor and walk to the end of the open corridor. Inside are a counter of about ten, two tables and soft light, with one chef at the counter, a cook behind and two people serving (September 2026). Order the carpaccio of three fish, which several 2026 diners singled out, and the "Paitza", a pizza on crisp, flaky pastry, then a pasta, such as mackerel and bottarga or duck and porcini cream. Couples, groups of friends and birthday dinners fill it, and the kitchen will write a message on the dessert plate. Tabelog puts the average at ¥5,000–5,999 a head, and the courses run ¥6,600–8,800; open from 15:00 to midnight. Tabelog Italian 100 in 2021; there is a sister shop in Namba.',
    chef_bio: { chef_name: null, roles: ['Chef unnamed in the sources read'], origin: null, background: 'Per the Tabelog shop text: "Our chefs visit the market daily to bring you unique dishes that can only be enjoyed that day." A September 2026 diner saw one main chef at the counter, two staff serving and one person in the kitchen. A regular\'s June 2025 note says the restaurant had recently been featured on TV. Reviews mention a Namba branch and 食堂ペスカ (September 2026). Tabelog Italian 100 in 2021.', philosophy: 'Daily market buying, "committed to maximizing the quality of the finest ingredients" (Tabelog shop text).', specialty: '"Paitza" pastry pizza; carpaccio of three fish of the day.',
      anecdotes: [
        { text: '"There\'s one main chef at the counter, two staff serving, and one person in the kitchen." — September 2026, a pre-birthday dinner on the Special Wagyu Tenderloin course (JPY 8,800).', source: R + 'B535982977/' },
        { text: '"Since I was dining alone, they prepared all the dishes in single portions, which was a thoughtful touch." — October 2026, an early dinner at 3 PM.', source: R + 'B536960073/' },
        { text: '"The pizza featured a flaky crust reminiscent of a pie, with a whole egg in the center, making it incredibly tasty." — October 2026.', source: R + 'B537267957/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ペスカ 心斎橋店 (PESCA Shinsaibashi)、イタリアン、大阪市中央区西心斎橋1-10-28 心斎橋Mビル 10F、四ツ橋駅3番出口から徒歩3分、心斎橋駅7番出口から徒歩5分、毎日15:00〜24:00、不定休、予約可 (アレルギーやデザートプレートの希望は予約のコメント欄へ)、カード可 (ICカードは2025年4月からPIN入力)、電子マネー可、QR不可、24席、貸切20〜50名、禁煙、持ち込み可、未成年不可、毎日市場に行くシェフ、名物はサクサクの「Paitza」、コース: Hirata Bokujo の豚などの90分飲み放題付き7,000円、ヨーロッパ産の鴨6,600円、特選和牛ヘレ8,800円 (記念日のメッセージプレート)、イタリアン 百名店 2021。口コミ(2025年6月〜2026年10月): マンションのような建物の最上階、1階に看板なし、外廊下のいちばん奥、カウンター約10席とテーブル2卓、カウンターにメインのシェフ、ホール2人、厨房1人 (2026年9月)、鮮魚3種のカルパッチョ、パイ生地のピザ、サバとカラスミのペペロンチーノ、鴨とポルチーニのクリームパスタ、黒毛和牛のガーリックライス、ワインは3,900円から、ひとり客には一人前ずつ作ってくれた、テレビで紹介されたという話 (2025年6月)、なんば店と食堂ペスカという姉妹店。',
      confidence: 'medium', sources: [TB, R + 'B436053215/', R + 'B504475759/', R + 'B535734111/', R + 'B535788622/', R + 'B535982977/', R + 'B536290269/', R + 'B536960073/', R + 'B537267957/', R + 'B537929991/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online or by phone; set courses can be chosen in advance, and the à la carte menu is long (2026). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog listing: "If you have any allergies or if you would like a dessert plate, please kindly indicate your requests in the comments section when making your reservation."'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-10-28 心斎橋Mビル 10F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目10番28号 (go) 30m. Same building as LiLo Coffee Roasters (osaka_lilo_coffee_roasters_shinsaibashi, address_ja "西心斎橋1-10-28 心斎橋Mビル 1F"), pinned 22 m from this Tabelog point, so the two stay apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535788622/', R + 'B535982977/'],
    price_note: 'Course prices from the Tabelog listing (tax included); wine from a September 2026 review; à la carte prices not seen.', last_checked: TODAY, items: [
      it('', '', 'Course with 90 minutes of free drinks (salad, carpaccio, antipasti, pizza, pasta, San-gen pork)', '¥7,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_7000'),
      it('', '', 'European duck course (birthday/anniversary, message plate)', '¥6,600', 'Course', 'ask', 'no', 'Tabelog listing.', 'duck_course'),
      it('', '', 'Special Wagyu Tenderloin course (birthday/anniversary, message plate)', '¥8,800', 'Course', 'ask', 'no', 'Tabelog listing; September 2026 review.', 'wagyu_tenderloin_course'),
      it('', '', '"Paitza" (pizza on flaky pastry)', '', 'Pizza', 'no', 'no', 'Tabelog listing; 2026 reviews.', 'paitza'),
      it('本日のカルパッチョ盛り合わせ', '', 'Carpaccio of three fish of the day', '', 'Antipasti', 'ask', 'no', '2026 reviews.', 'carpaccio'),
      it('生ハムといちじく', '', 'Prosciutto with figs', '', 'Antipasti', 'ask', 'no', 'October 2026 review.', 'prosciutto_figs'),
      it('', '', 'Bottle of wine', 'from ¥3,900', 'Drinks', 'ask', 'ask', 'September 2026 review.', 'wine_bottle'),
    ] }, {
    cuisine: 'アラカルトとコースのイタリアン、毎日の市場の魚 (食べログ)・サクサクのパイ生地のピザ「Paitza」、たとえばベーコンと真ん中に半熟卵 (2026年)・本日の鮮魚3種のカルパッチョ、たとえばイカ、ブリ、サーモン (2026年9月) やカンパチ、サーモン、ヤリイカ (2026年10月)・生ハムといちじく・サバとカラスミのペペロンチーノ・鴨とポルチーニのクリームパスタ・しらすのパスタ・黒毛和牛のガーリックライス (2026年10月)・フォンダンショコラ・90分飲み放題付きのコース7,000円: サラダ、カルパッチョ、前菜、ピザ、パスタ、Hirata Bokujo の豚 (食べログ)・ヨーロッパ産の鴨のコース6,600円、特選和牛ヘレのコース8,800円、どちらもデザートにメッセージプレート可 (食べログ)・ワインはボトル3,900円から (2026年9月)',
    neighborhood: '西心斎橋1-10-28 心斎橋Mビル 10階、廊下のいちばん奥。アメリカ村側。四ツ橋駅3番出口から徒歩3分、心斎橋駅7番出口から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報なし。食べログではアレルギーを予約のコメント欄に書くよう案内している。名物の「Paitza」はパイ生地のピザで、パスタ、バゲット、ケーキもコースに入る。カルパッチョ、ステーキ、鴨、ガーリックライスは小麦が目立たない料理だが、ソースの説明はない。',
    vegan_detail: '要確認。ヴィーガンの情報なし。コースは魚、豚、和牛、鴨、チーズが中心。アラカルトは品数が多く市場によって変わるので、動物性のものなしで作れるか聞いてみて。',
    notes: '[イタリアン・西心斎橋、10階の隠れ家] 通りに看板のないイタリアン。アメリカ村側のマンションのような建物のエレベーターで最上階まで上がり、外廊下のいちばん奥へ。中にはカウンター約10席とテーブル2卓、やわらかな明かり。カウンターにシェフ、奥に料理人、ホールに2人 (2026年9月)。2026年の口コミで何人もが挙げる鮮魚3種のカルパッチョと、サクサクのパイ生地のピザ「Paitza」、それにサバとカラスミや鴨とポルチーニのクリームなどのパスタを。カップル、友人どうし、誕生日の食事でにぎわい、デザートのお皿にメッセージを書いてくれる。食べログの平均はひとり5,000〜5,999円で、コースは6,600〜8,800円。15時から深夜0時まで。2021年の食べログ イタリアン 百名店で、なんばに姉妹店がある。',
  });
}

save();
