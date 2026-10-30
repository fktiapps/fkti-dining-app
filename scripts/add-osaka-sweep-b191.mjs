// Osaka sweep (2-mile circle around Dotonbori), batch 191 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + KATACHI CAFE カタチ カフェ (café with toast, pizza sets, cheesecake and a dog-friendly terrace; Minami-Senba)
//   + MELT chocolate (chocolate stand: two cocoa drinks and nama chocolate; Minami-Senba)
//   + ル・ピノー 北堀江本店 LE PINEAU (Osaka patisserie, flagship of four shops, café with morning sets; Kita-Horie)
//   + 創作串カツ 坊也哲 Sosaku Kushikatsu Bouya Tetsu (creative kushikatsu courses; Minami-Senba)
//   - skip 鰻の成瀬 四ツ橋店 (Unagi no Naruse: corporate-member listing; official site lists a fast-expanding store network)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 191);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const ALL = h => ({ 0: h, 1: h, 2: h, 3: h, 4: h, 5: h, 6: h });

// ================================================================ KATACHI CAFE
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27108440/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_katachi_cafe_minamisenba', name: 'カタチ カフェ (KATACHI CAFE)', category: 'OMNI',
    lat: 34.677519, lng: 135.502495, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the food is thick toast, pizza, cheesecake and canelés.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: salmon and cream-cheese toast, cheesecake, vanilla ice cream; no vegan statement. Black coffee and iced tea are the plant-only orders.',
    hours_raw: 'Daily 10:00–22:00 (last order 21:30), holidays included; hours may change (Tabelog). Reservations accepted; pay at the counter first, then take a free seat (Tabelog; July 2026 review). Cards (VISA, Master, JCB, AMEX, Diners), iD, QUICPay and QR payments (Tabelog). 12 seats: window counter and tables, plus a terrace where smoking is allowed; non-smoking inside; pets welcome on the terrace; children welcome; English menu (Tabelog). Opened 5 November 2018 (Tabelog).',
    hours: ALL(day(['10:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 3-2-25, Aragaya Bldg 1F — 5 min from Shinsaibashi Stn Exit 1',
    cuisine: 'Café with breakfast, lunch and late hours (12 seats, terrace) · light- and medium-roast coffee (iced Americano ¥350) · iced tea ¥450 · smoked-salmon and cream-cheese thick toast, drink set ¥1,350 · pizza set · black-sesame cheesecake · canelé · vanilla ice cream named after the café\'s French bulldog mascot Buru-mi · shop goods on sale',
    website: null, gmaps: gm('KATACHI CAFE 南船場'), menu_url: null,
    notes: "[Café · Minami-Senba, open until 10 pm with a dog-friendly terrace] A stylish café between Honmachi and Shinsaibashi that sells goods (brand-name bags and wallets) alongside coffee, and stays open until 10 pm every day. You pay at the counter, then pick a seat by the window, at a table or on the terrace, where dogs are welcome. Diners praise the light-roast coffee for its clean acidity, the black-sesame cheesecake for its looks and its taste, and the thick toast piled with smoked salmon and cream cheese (¥1,350 with a drink), so full it has to be eaten in big bites. There's a pizza set at lunch, canelés, and a small vanilla ice cream named after Buru-mi, the café's French bulldog mascot. The listing's website link is dead (2026).",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Café that opened on 5 November 2018 (Tabelog).', philosophy: null, specialty: 'Light-roast coffee; salmon cream-cheese toast; black-sesame cheesecake.',
      anecdotes: [
        { text: '"The thick toast is piled high with smoked salmon. I tried to cut it with a knife, but there was so much filling that it didn\'t cut well, so I ended up taking a big bite instead." — July 2026, Salmon Cream Cheese Toast drink set ¥1,350.', source: R + 'B532908114/' },
        { text: '"Buru-mi\'s special vanilla ice cream (named after the cafe\'s French Bulldog mascot, Buru-mi)" — October 2026, lunch on the terrace.', source: R + 'B537804769/' },
      ],
      japanese_sources_summary: '食べログ: KATACHI CAFE (カタチ カフェ)、大阪市中央区南船場3-2-25 アラガヤビル 1F、心斎橋駅1番出口から徒歩5分、毎日10:00〜22:00 (L.O. 21:30)、予約可、カード・iD・QUICPay・QR可、12席、店内禁煙・屋外は喫煙可、テラス、ペット可、子供可、英語メニューあり、オープン日2018年11月5日。口コミ(2026年7月〜10月): 浅煎りのコーヒー、アイスアメリカーノ350円、アイスティー450円、黒ごまのチーズケーキ、スモークサーモンとクリームチーズの厚切りトースト (ドリンクセット1350円)、ピザのセット、カヌレ、看板犬のフレンチブルドッグ Buru-mi の名前のバニラアイス、ブランドのバッグや財布も売っている、先にカウンターで会計してから席へ、夜10時まで営業。',
      confidence: 'medium', sources: [TB, R + 'B531515979/', R + 'B532575995/', R + 'B532908114/', R + 'B532911242/', R + 'B535456579/', R + 'B537804769/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pay at the counter, then sit; English menu (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-2-25 アラガヤビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目2番25号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532908114/', R + 'B532911242/', R + 'B535456579/'],
    price_note: 'Prices from July–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Smoked-salmon and cream-cheese toast, drink set', '¥1,350', 'Food', 'no', 'no', 'July 2026.', 'salmontoast'),
      it('', '', 'Black-sesame cheesecake', '', 'Sweets', 'ask', 'no', 'July 2026.', 'sesamecheesecake'),
      it('', '', 'Iced Americano (medium roast)', '¥350', 'Drinks', 'gf', 'vegan', 'September 2026.', 'americano'),
      it('', '', 'Iced tea', '¥450', 'Drinks', 'gf', 'vegan', 'July 2026.', 'icedtea'),
    ] }, {
    cuisine: '朝から夜まで開いているカフェ (12席、テラス)・浅煎りと中煎りのコーヒー (アイスアメリカーノ350円)・アイスティー450円・スモークサーモンとクリームチーズの厚切りトースト、ドリンクセット1350円・ピザのセット・黒ごまのチーズケーキ・カヌレ・看板犬のフレンチブルドッグ Buru-mi の名前のバニラアイス・雑貨の販売',
    neighborhood: '南船場3-2-25 アラガヤビル 1F。心斎橋駅1番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。料理は厚切りトースト、ピザ、チーズケーキ、カヌレ。',
    vegan_detail: '実質ヴィーガンではありません。サーモンとクリームチーズのトースト、チーズケーキ、バニラアイスで、ヴィーガンの記載なし。植物性だけで頼めるのはブラックのコーヒーとアイスティー。',
    notes: '[カフェ・南船場、夜10時まで、犬と入れるテラス] 本町から心斎橋のあいだにある、おしゃれなカフェ。コーヒーと一緒にブランドのバッグや財布などの雑貨も売っていて、毎日夜10時まで開いている。先にカウンターで会計し、窓際のカウンター、テーブル、テラスから空いている席へ。テラスは犬も一緒に入れる。口コミでほめられているのは、酸味のきれいな浅煎りのコーヒー、見た目も味もいい黒ごまのチーズケーキ、そしてスモークサーモンとクリームチーズを山盛りにした厚切りトースト (ドリンクつき1350円)。具が多くてナイフで切れず、大きくかぶりつくことになるほど。ランチにはピザのセット、カヌレ、看板犬のフレンチブルドッグ Buru-mi の名前がついた小さめのバニラアイスも。食べログに載っているウェブサイトのリンクは切れている (2026年)。',
  });
}

// ================================================================ MELT chocolate
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27130684/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_melt_chocolate_minamisenba', name: 'MELT chocolate', category: 'OMNI',
    lat: 34.677467, lng: 135.499259, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No ingredient information for the cocoa drinks or the nama chocolate (flavors include pistachio and coffee).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No ingredient list or vegan statement; nama chocolate is usually made with cream, so check before ordering.',
    hours_raw: 'Daily 11:30–20:00 (Tabelog). No reservations; cash only, no cards, e-money or QR (Tabelog; an October 2026 review also says cash only). 8 seats inside plus tables and chairs outside; non-smoking (Tabelog; October 2026 review). Popular flavors can sell out by the evening: one diner found only one nama chocolate left at about 18:30 on a weekday (October 2026).',
    hours: ALL(day(['11:30', '20:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 4-7-22, Senba NS Bldg 1F — about 280 m from Shinsaibashi Stn; black frontage with cacao artwork',
    cuisine: 'Chocolate specialty stand with a small eat-in (8 seats) · two drinks only: hot cocoa ¥850 and iced cocoa ¥900, each topped with chocolate that melts in · nama chocolate by the piece (about 5 cm across) in flavors such as classic, 60% cacao, pistachio and coffee',
    website: 'https://www.melt-chocolate.jp/', gmaps: gm('MELT chocolate 南船場'), menu_url: null,
    notes: "[Chocolate stand · Minami-Senba, two cocoa drinks and nama chocolate] A dim, chocolate-scented little shop behind a black frontage; look for the cacao artwork. The drink menu is just two items, hot cocoa (¥850) and iced cocoa (¥900), each crowned with a disc of chocolate that melts into the cup, and diners single out that topping as the best part. The case holds nama chocolate in several shapes and flavors (classic, 60% cacao, pistachio, coffee), each piece about 5 cm across, to eat in or take home. Weekday afternoons bring a steady line at the register, and the popular flavors can be gone by early evening. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Chocolate specialty shop with eat-in seating (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Iced and hot cocoa topped with melting chocolate; nama chocolate.',
      anecdotes: [
        { text: '"I highly recommend trying the chocolate that comes on top of the ice drink—it\'s absolutely delicious! Please note that they only accept cash for payment." — October 2026.', source: R + 'B537908261/' },
        { text: '"I arrived around 6:30 PM, and to my surprise, there was only one type left!" — October 2026, Pistachio nama chocolate.', source: R + 'B537078225/' },
      ],
      japanese_sources_summary: '食べログ: MELT chocolate、大阪市中央区南船場4-7-22 船場NSビル 1F、心斎橋駅から280m、毎日11:30〜20:00、予約不可、カード・電子マネー・QR不可 (現金のみ)、8席、禁煙、公式サイトあり。口コミ(2026年9月〜10月): チョコレートの専門店、ドリンクはホットのココア850円とアイスのココア900円の2種類だけで、上にのせたチョコレートが溶ける、生チョコは定番、カカオ60%、ピスタチオ、コーヒーなど、1個直径5cmほど、外にテーブルと椅子も、平日の夕方6時半で1種類しか残っていなかった、レジにいつも列、黒い外観でカカオのアートが目印。',
      confidence: 'medium', sources: [TB, R + 'B536102165/', R + 'B537078225/', R + 'B537213056/', R + 'B537688176/', R + 'B537837721/', R + 'B537908261/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the register; cash only (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-7-22 船場NSビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目7番22号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537688176/', R + 'B537213056/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Iced cocoa with melting chocolate topping', '¥900', 'Drinks', 'ask', 'ask', 'October 2026.', 'icedcocoa'),
      it('', '', 'Hot cocoa with melting chocolate topping', '¥850', 'Drinks', 'ask', 'ask', 'October 2026.', 'hotcocoa'),
      it('', '', 'Nama chocolate, pistachio', '', 'Chocolate', 'ask', 'ask', 'September–October 2026.', 'pistachio'),
    ] }, {
    cuisine: 'イートインもあるチョコレートの専門店 (8席)・ドリンクは2種類だけ: ホットのココア850円とアイスのココア900円、どちらも溶けるチョコレートをのせて・生チョコは1個ずつ (直径5cmほど)、定番、カカオ60%、ピスタチオ、コーヒーなど',
    neighborhood: '南船場4-7-22 船場NSビル 1F。心斎橋駅から280mほど。黒い外観でカカオのアートが目印',
    gf_detail: '要確認。ココアのドリンクと生チョコ (ピスタチオやコーヒーの味も) の原材料の情報なし。',
    vegan_detail: '要確認。原材料やヴィーガンの記載なし。生チョコはふつう生クリームを使うので、頼む前に確認を。',
    notes: '[チョコレートの店・南船場、ココアのドリンク2種類と生チョコ] 黒い外観の、チョコレートの香りがする薄暗い小さな店。目印はカカオのアート。ドリンクはホットのココア (850円) とアイスのココア (900円) の2つだけで、どちらもカップの上にのせたチョコレートが溶けていく。そのチョコレートがいちばんおいしいという声も。ショーケースには形も味もいろいろな生チョコ (定番、カカオ60%、ピスタチオ、コーヒー) が並び、1個直径5cmほどで、店で食べても持ち帰ってもいい。平日の午後でもレジに列が続き、人気の味は夕方には売り切れることも。現金のみ。',
  });
}

// ================================================================ LE PINEAU 北堀江本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27001030/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://le-pineau.com/';
  put({
    id: 'osaka_le_pineau_kitahorie', name: 'ル・ピノー 北堀江本店 (LE PINEAU Kitahorie honten)', category: 'OMNI',
    lat: 34.672824, lng: 135.492156, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'No gluten information; the range is cakes, tarts (a pie-crust strawberry tart), cream puffs, cookies and toast morning sets, all wheat-based. Only the panna cotta and cup ice cream might be wheat-free — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fresh cream, egg and dairy across the cakes, cream puffs, pudding and panna cotta; no vegan statement.',
    hours_raw: 'Daily 9:00–20:00; closed New Year\'s Day; hours may change (Tabelog). No reservations (Tabelog). Café use requires one drink per person (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC cards, iD, PayPay, d Barai and au PAY (Tabelog). 9 café seats; non-smoking; children welcome; takeout (Tabelog). Lines form at Christmas and Halloween (Tabelog; November 2024 review).',
    hours: ALL(day(['09:00', '20:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kita-Horie 2-4-12, Maison de L Kitahorie 1F — 5 min from Nishi-Ohashi Stn, 7 min from Yotsubashi Stn',
    cuisine: 'Osaka patisserie, flagship of four LE PINEAU shops, with a 9-seat café · Mont Blanc (seasonal pumpkin version) · classic chocolat · Gâteau Fraise · strawberry tart on pie crust · soufflé fromage and soufflé chocolat · cream puffs · fig shortcake · "Kuro" chocolate cake · berry panna cotta · Iyo-orange rare cheesecake · "Sunao" pudding · chocolate cookie (bitter, 60% cacao) ¥270 · morning sets with avocado or tuna-and-cheese toast · chai · Halloween and Christmas sweets',
    website: OWN, gmaps: gm('ル・ピノー 北堀江本店'), menu_url: null,
    notes: "[Patisserie · Kita-Horie, the flagship of an Osaka cake house] A neighborhood cake shop near Nishi-Ohashi Station, Tabelog Sweets WEST Top 100 in 2020, 2022, 2023 and 2026, and the flagship (本店) of four LE PINEAU shops, all in Osaka. Regulars come back for fair prices and generous sizes: a Mont Blanc dense with chopped chestnut, the layered classic chocolat, Gâteau Fraise, a strawberry tart on pie crust, cream puffs with milky cream, and mini soufflé cakes (fromage, and a chocolate one almost like nama chocolate). Cookies are sold singly, including a bitter 60%-cacao chocolate cookie (¥270). The small café next to the shop serves morning sets of avocado or tuna-and-cheese toast and asks for one drink each; payment can be combined with shop purchases. Expect lines at Halloween and Christmas. A regular noted the shop's 32nd anniversary in April 2023.",
    chef_bio: { chef_name: null, roles: [], origin: 'Osaka', background: 'Patisserie that calls itself Osaka-born; four shops (Kita-Horie flagship, Tamatsukuri, Umeda Hanshin, Umekita Green Place) per the official site; Tabelog Sweets WEST Top 100 in 2020, 2022, 2023 and 2026 (Tabelog). A regular marked its 32nd anniversary in April 2023 (Tabelog review).', philosophy: null, specialty: 'Mont Blanc; classic chocolat; soufflé cakes; cream puffs.',
      anecdotes: [
        { text: '"The Mont Blanc features a strong flavor of chestnut cream complemented by finely chopped chestnuts, while the lightness of the whipped cream and sponge cake creates a perfectly balanced taste." — October 2026.', source: R + 'B493715209/' },
        { text: '"The soufflé chocolate has a slightly gooey texture reminiscent of fresh chocolate, and it\'s incredibly rich." — October 2026.', source: R + 'B537866043/' },
      ],
      japanese_sources_summary: '食べログ: ル・ピノー 北堀江本店 (LE PINEAU)、大阪市西区北堀江2-4-12 メゾンドエルキタホリエ 1F、西大橋駅から徒歩5分、四ツ橋駅から徒歩7分、毎日9:00〜20:00、元日休み、予約不可、カフェ利用はワンドリンク制、カード・交通系IC・iD・PayPay・d払い・au PAY可、9席、禁煙、子供可、テイクアウト可、食べログ スイーツ WEST 百名店 2020・2022・2023・2026。公式サイト: 大阪生まれの店、北堀江本店・玉造店・梅田阪神店・うめきたグリーンプレイス店。口コミ(2023年〜2026年10月): モンブラン (刻んだ栗入り、季節のかぼちゃのモンブランも)、クラシックショコラ、ガトーフレーズ、パイ生地のいちごのタルト、スフレ フロマージュとスフレ ショコラ、シュークリーム、いちじくのショートケーキ、「Kuro」のチョコレートケーキ、ベリーのパンナコッタ、伊予柑のレアチーズ、Sunao プリン、チョコレートクッキー (ビター、カカオ60%) 270円、アボカドやツナとチーズのトーストのモーニング、チャイ、ハロウィンとクリスマスは行列、2023年4月に32周年、手頃な値段で量が多い。',
      confidence: 'medium', sources: [TB, OWN, R + 'B426663523/', R + 'B493715209/', R + 'B537417300/', R + 'B537731104/', R + 'B537866043/', R + 'B537957908/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose from the case; café is one drink per person (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江2-4-12 メゾンドエルキタホリエ 1Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026; official site lists the shop.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江二丁目4番12号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537731104/', R + 'B537866043/', R + 'B493715209/'],
    price_note: 'Price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Mont Blanc', '', 'Cakes', 'no', 'no', 'October 2026.', 'montblanc'),
      it('', '', 'Soufflé chocolat (mini)', '', 'Cakes', 'ask', 'no', 'October 2026.', 'souffle'),
      it('', '', 'Cream puff', '', 'Cakes', 'no', 'no', 'October 2026.', 'creampuff'),
      it('', '', 'Chocolate cookie, bitter (60% cacao)', '¥270', 'Baked goods', 'no', 'no', 'October 2026.', 'cookie'),
    ] }, {
    cuisine: '大阪の洋菓子店、4店舗ある LE PINEAU の本店で、9席のカフェつき・モンブラン (季節のかぼちゃのモンブランも)・クラシックショコラ・ガトーフレーズ・パイ生地のいちごのタルト・スフレ フロマージュとスフレ ショコラ・シュークリーム・いちじくのショートケーキ・「Kuro」のチョコレートケーキ・ベリーのパンナコッタ・伊予柑のレアチーズ・Sunao プリン・チョコレートクッキー (ビター、カカオ60%) 270円・アボカドやツナとチーズのトーストのモーニング・チャイ・ハロウィンとクリスマスのお菓子',
    neighborhood: '北堀江2-4-12 メゾンドエルキタホリエ 1F。西大橋駅から徒歩5分、四ツ橋駅から徒歩7分',
    gf_detail: 'グルテンの情報なし。ケーキ、タルト (パイ生地のいちごのタルト)、シュークリーム、クッキー、トーストのモーニングと、どれも小麦。小麦を使っていない可能性があるのはパンナコッタとカップのアイスくらいなので、要確認。',
    vegan_detail: 'ヴィーガンではありません。ケーキ、シュークリーム、プリン、パンナコッタに生クリーム、卵、乳。ヴィーガンの記載なし。',
    notes: '[洋菓子店・北堀江、大阪のケーキ屋の本店] 西大橋駅近くの街のケーキ屋で、食べログ スイーツ WEST 百名店 (2020・2022・2023・2026)。大阪にある4店舗の LE PINEAU の本店。常連が通うのは手頃な値段と大きさのため。刻んだ栗がたっぷりのモンブラン、層になったクラシックショコラ、ガトーフレーズ、パイ生地のいちごのタルト、ミルクの濃いクリームのシュークリーム、小さなスフレ (フロマージュと、生チョコのようなショコラ)。クッキーは1枚ずつ買えて、カカオ60%のビターなチョコレートクッキーは270円。隣の小さなカフェではアボカドやツナとチーズのトーストのモーニングがあり、ワンドリンク制。店の買い物と会計をまとめられる。ハロウィンとクリスマスは行列。常連の口コミによると、2023年4月に32周年。',
  });
}

// ================================================================ 創作串カツ 坊也哲
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27134288/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_sosaku_kushikatsu_bouya_tetsu', name: '創作串カツ 坊也哲 (Sosaku Kushikatsu Bouya Tetsu)', category: 'OMNI',
    lat: 34.677835, lng: 135.501128, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: kushikatsu is breaded and deep-fried, and the courses are all skewers.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the courses are mostly meat and seafood skewers (wagyu, pork tenderloin, shrimp, pike conger, Spanish mackerel); one skewer is dipped in broth.',
    hours_raw: 'Mon, Tue, Thu–Sun 17:00–23:00 (last order 22:30); closed Wednesday (Tabelog). Reservations and same-day walk-ins both welcome (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (Tabelog). 13 seats: 7 at the counter, tables for 4 and 2; heated tobacco only in a designated area; school-age children welcome (Tabelog). Opened 22 March 2023 (Tabelog). The kitchen makes sauces from vegetable trimmings (Tabelog, shop-provided).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minami-Senba 3-9-6, NIPPO Shinsaibashi Bldg 1F — 5 min from Shinsaibashi Stn Exit 1 or Nagahoribashi Stn Exit 1',
    cuisine: 'Creative kushikatsu courses at a counter (13 seats) · 8-, 10/12- and 15-skewer courses, or omakase until you say stop · ¥3,980 12-skewer course with a glass of wine: shrimp in shiso, wagyu, squid with okra and sea-urchin sauce, taro in rice-cracker crumbs, pike conger with plum sauce, Manganji pepper stuffed with meat, octopus and cheese wrapped in yuba (dipped in broth), asparagus, pork tenderloin with mustard sauce, broad-bean tofu, angel shrimp, Spanish mackerel · seasonal ingredients · Kirin Ichiban Shibori draft ¥620 · sake, shochu, wine',
    website: null, gmaps: gm('創作串カツ 坊也哲 南船場'), menu_url: null,
    notes: "[Kushikatsu · Minami-Senba, creative skewer courses] A calm, tucked-away counter near Shinsaibashi where the menu is essentially three skewer courses (8, 12 or 15 pieces) or an omakase that runs until you call a stop. The ¥3,980 course of 12 skewers comes with a glass of wine and moves through shrimp wrapped in shiso, wagyu, squid with okra and sea-urchin sauce, taro coated in rice crackers, pike conger with plum sauce, octopus and cheese wrapped in yuba and dipped in broth, and pork tenderloin with mustard sauce. Skewers are fried two at a time and handed over hot. Diners like the seasonal ingredients; one found it closer to standard kushikatsu than the 'creative' name suggests. Walk-ins are welcome; closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Kushikatsu restaurant that opened on 22 March 2023 (Tabelog).', philosophy: 'Sauces made from vegetable trimmings to cut food waste (Tabelog, shop-provided).', specialty: 'Octopus and cheese in yuba; pork tenderloin with mustard sauce.',
      anecdotes: [
        { text: '"My favorites are the pork tenderloin with mustard sauce and the octopus and cheese wrapped in yuba, which you dip in broth." — October 2026.', source: R + 'B537171210/' },
        { text: '"They offered a lot of seasonal ingredients, which were fresh and delightful. The service was quick, and everything was delicious." — October 2026.', source: R + 'B537672638/' },
      ],
      japanese_sources_summary: '食べログ: 創作串カツ 坊也哲、大阪市中央区南船場3-9-6 NIPPO心斎橋ビル 1F、心斎橋駅・長堀橋駅1番出口から徒歩5分、月火木〜日17:00〜23:00 (L.O. 22:30)、水曜休み、予約・当日の来店どちらも可、カード・電子マネー・QR可、13席 (カウンター7、テーブル4と2)、加熱式たばこのみの喫煙エリア、小学生以上可、オープン日2023年3月22日、仕込みで出る野菜の端材からソースを作る (店の情報)。口コミ(2026年9月〜10月): コースは8本・12本・15本とおまかせ (止めるまで)、3980円の12本コースはワイン1杯つき: 海老の大葉巻き、 wagyu、イカとオクラのうにソース、里芋のあられ揚げ、鱧の梅ソース、万願寺とうがらしの肉詰め、タコとチーズの湯葉巻き (出汁につけて)、アスパラ、ヒレカツのマスタードソース、そら豆の豆腐、天使の海老、鰆、キリン一番搾り生620円、2本ずつ揚げて出す、季節の食材が多い、「創作」のわりに普通の串カツという声も。',
      confidence: 'medium', sources: [TB, R + 'B536053948/', R + 'B536293014/', R + 'B536748078/', R + 'B537171210/', R + 'B537309161/', R + 'B537672638/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick a skewer course or omakase; counter seating (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-9-6 NIPPO心斎橋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目9番6号 (go) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536293014/', R + 'B537171210/'],
    price_note: 'Prices from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', '12-skewer course with one glass of wine', '¥3,980', 'Courses', 'no', 'no', 'September 2026.', 'course12'),
      it('', '', 'Octopus and cheese wrapped in yuba, dipped in broth', '', 'Skewers', 'no', 'no', 'September–October 2026.', 'yuba'),
      it('', '', 'Pork tenderloin with mustard sauce', '', 'Skewers', 'no', 'no', 'October 2026.', 'pork'),
      it('', '', 'Kirin Ichiban Shibori draft beer', '¥620', 'Drinks', 'no', 'ask', 'September 2026.', 'beer'),
    ] }, {
    cuisine: 'カウンターで食べる創作串カツのコース (13席)・コースは8本、10本/12本、15本、または止めるまでのおまかせ・3980円の12本コースはワイン1杯つき: 海老の大葉巻き、 wagyu、イカとオクラのうにソース、里芋のあられ揚げ、鱧の梅ソース、万願寺とうがらしの肉詰め、タコとチーズの湯葉巻き (出汁につけて)、アスパラ、ヒレカツのマスタードソース、そら豆の豆腐、天使の海老、鰆・季節の食材・キリン一番搾り生620円・日本酒、焼酎、ワイン',
    neighborhood: '南船場3-9-6 NIPPO心斎橋ビル 1F。心斎橋駅・長堀橋駅の1番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。串カツは衣をつけて揚げたもので、コースはすべて串。',
    vegan_detail: 'ヴィーガンではありません。コースはほとんど肉と魚介の串 ( wagyu、ヒレ、海老、鱧、鰆)。出汁につけて食べる串も。',
    notes: '[串カツ・南船場、創作串カツのコース] 心斎橋近くの、落ち着いた隠れ家のようなカウンター。メニューは基本的に串のコース3種類 (8本・12本・15本) と、止めるまで続くおまかせ。3980円の12本コースはワイン1杯つきで、海老の大葉巻き、 wagyu、イカとオクラのうにソース、あられをまぶした里芋、鱧の梅ソース、出汁につけて食べるタコとチーズの湯葉巻き、マスタードソースのヒレカツと続く。串は2本ずつ揚げて、熱いうちに出してくれる。季節の食材が多いと好評で、「創作」というわりに普通の串カツに近いという声も。当日の来店も歓迎。水曜休み。',
  });
}

skip('27140804', '鰻の成瀬 四ツ橋店: Unagi no Naruse chain branch (Tabelog corporate-member listing; official site unagi-naruse.com describes rapidly expanding store network)');

save();
