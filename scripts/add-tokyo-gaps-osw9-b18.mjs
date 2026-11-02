// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 18.
//   + OYOGE 六本木店 (takeout "taiyaki" shaped as sardines, horse mackerel and clams; cashless only)
//   + 隼 Hayato (8-seat nouvelle-Chinese chef's table by 吉田隼之 Toshiyuki Yoshida; Tabelog Award Silver 2024–2026;
//     booked through OMAKASE with a long wait — listed with the booking route per Greg's ruling)
//   + 私房菜 吉田 Shifang Cai Yoshida (Hayato's à la carte sister upstairs, opened November 2024; Chinese 100 in 2026)
//   + 鮨 龍馬 Sushi Ryuma (aged and "double" nigiri with dobin-mushi; premium course ¥28,600)
//   Chain / group check: Hayato and Yoshida are sister shops of different concepts (chef's-table omakase vs à la carte),
//   none in data, so both are drafted. An October 2026 Hayato reviewer mentions the "Hasegawa Minoru chain"; the group's
//   only record in data is a kushiage shop (tokyo_kushiage_pyon_roppongi), a different concept. OYOGE: no other branch found.
//   None of the four is in data/tokyo, osaka or kyoto by name, Tabelog id or address.
//   Pins: Hayato (B1F) and Yoshida (1F) share ヒルサイドパレス六本木 (4-4-2) with Tabelog points 1 m apart, so Yoshida is offset
//   ~9 m north (away from FREY's, Ai and Takano). Tabelog URLs copied from each listing.txt line 1. No placeholder hours.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ OYOGE 六本木店
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13244299/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://oyogetaiyaki.com';
  const H = day(['10:30', '23:00']);
  put({
    id: 'tokyo_oyoge_roppongi', name: 'OYOGE 六本木店 (OYOGE Roppongi)', category: 'OMNI',
    lat: 35.66364, lng: 139.730437, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The batter is described as Western-pastry style with almond flour and brown sugar (September 2026), but its full ingredients are not given; assume wheat until the shop confirms.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fillings include butter, cream cheese, custard and chocolate; the batter\'s ingredients are not given. Tabelog lists vegetarian options.',
    hours_raw: 'Daily 10:30–23:00; hours may change (Tabelog). Takeout only. Cashless only — no cash (Tabelog); cards, IC/e-money and PayPay. Pets and children welcome. English menu. Opened 1 March 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 7-13-10, 1F, near Roppongi Station — 2 min from Roppongi Stn exit 7 (Oedo line) or 4B (Hibiya line)',
    cuisine: 'Fish-shaped cakes in the taiyaki style, but shaped as sardine, horse mackerel, clam and Spanish mackerel instead of sea bream (2026 reviews) · a thick batter with almond flour and brown sugar, closer to a financier or madeleine (September–October 2026) · fillings: red bean with cream cheese, red bean with salted butter, salted melon cream, chocolate, custard, matcha, salted caramel, rum sweet potato (seasonal) · a filling-free soft-serve sundae sardine; cream-cheese sandwiches · BOX set of three ¥1,164 (July 2026); most items under ¥1,000',
    website: SITE, gmaps: gm('OYOGE 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[Sweets · Roppongi, \"taiyaki\" shaped like sardines and clams] A takeout shop two minutes from Roppongi Station, open 10:30 am to 11 pm, that asks why taiyaki must be sea bream and bakes sardines, horse mackerel, clams and Spanish mackerel instead. The batter is closer to a financier — almond flour and brown sugar, crisp outside and moist inside — around fillings like red bean with cream cheese, salted butter, salted melon cream or chocolate, with flavours that change with the season. Diners in 2026 loved the look and found them good as gifts; some thought the batter thick and filling, others a little dry. Cashless only.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 1 March 2020 (Tabelog). A September 2026 diner describes the concept as "a taiyaki shop without sea bream" and notes a batter deliberately developed with Western-pastry ingredients. No one is named in the sources read.',
      philosophy: '"Why does it have to be sea bream?" (as reported by a September 2026 diner).', specialty: 'Sardine- and clam-shaped taiyaki.',
      anecdotes: [
        { text: '"This is a unique shop called "a taiyaki shop without sea bream," where the showcase features sardines, horse mackerel, and clams instead of the traditional sea bream." — September 2026, an-butter.', source: R + 'B535564647/' },
        { text: '"The batter is very delicious and differs from the typical taiyaki batter; it has a texture similar to that of a madeleine, making it quite tasty." — October 2026.', source: R + 'B537538250/' },
        { text: '"The dough was quite thick, giving it a somewhat dry texture with not much flavor." — July 2026, BOX set ¥1,164.', source: R + 'B532346812/' },
      ],
      japanese_sources_summary: '食べログ: OYOGE 六本木店、港区六本木7-13-10 1F、大江戸線六本木駅7番出口・日比谷線4B出口から徒歩2分、毎日10:30〜23:00、テイクアウト、現金不可 (カード・電子マネー・PayPay)、ペット可、子ども可、英語メニュー、ベジタリアンメニューあり、2020年3月1日オープン。口コミ(2026年4月〜10月): 鯛ではなくイワシ、アジ、アサリ、サワラの形、アーモンドプードルときび砂糖の生地、あんこクリームチーズ、あんバター、塩メロン、チョコ、カスタード、抹茶、塩キャラメル、BOX セット1,164円、生地が厚いという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B472296531/', R + 'B532346812/', R + 'B532930321/', R + 'B533257241/', R + 'B535362444/', R + 'B535391802/', R + 'B535564647/', R + 'B536567355/', R + 'B537066427/', R + 'B537538250/'] },
    cultural_comfort: { level: 'english', note: 'Takeout window with an English menu; cashless.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木7-13-10 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.663640, 139.730437); GSI 東京都港区六本木七丁目13番 (lot) 48m; Sushi Ryuma (7-13-8) is 30 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532346812/'],
    price_note: 'Only the BOX set price appears in the sources read (July 2026).', last_checked: TODAY, items: [
      it('', '', 'BOX set: three fish of your choice (e.g. sardine, Spanish mackerel, clam)', '¥1,164', 'Taiyaki', 'ask', 'ask', 'July 2026 review.', 'box_set'),
      it('', '', 'Horse mackerel with red bean and salted butter (an-butter)', '', 'Taiyaki', 'ask', 'no', 'August–September 2026 reviews.', 'an_butter'),
    ] }, {
    cuisine: '鯛の代わりにイワシ、アジ、アサリ、サワラの形をしたたい焼き風のお菓子 (2026年の口コミ)・アーモンドプードルときび砂糖を使ったフィナンシェやマドレーヌに近い厚めの生地 (2026年9〜10月)・中身: あんことクリームチーズ、あんことバター、塩メロンのクリーム、チョコ、カスタード、抹茶、塩キャラメル、ラム酒のさつまいも (季節替わり)・中身なしのソフトクリームのサンデーのイワシ、クリームチーズのサンド・3つ選べる BOX セット1,164円 (2026年7月)、ほとんど1,000円以下',
    neighborhood: '六本木7-13-10 1F、六本木駅の近く。六本木駅7番出口 (大江戸線)・4B出口 (日比谷線) から徒歩2分',
    gf_detail: '要確認。生地はアーモンドプードルときび砂糖を使う洋菓子風 (2026年9月) とあるが、材料のすべては書かれていない。店に確認するまでは小麦入りと考えて。',
    vegan_detail: '要確認。中身にはバター、クリームチーズ、カスタード、チョコも。生地の材料は書かれていない。食べログにはベジタリアンメニューありとある。',
    notes: '[和菓子・六本木、イワシやアサリの形のたい焼き] 六本木駅から2分、朝10時半から夜11時まで開くテイクアウトの店。なぜ鯛でなければいけないのかと、イワシ、アジ、アサリ、サワラの形で焼く。生地はアーモンドプードルときび砂糖のフィナンシェに近いもので、外はカリッと中はしっとり。あんことクリームチーズ、塩バター、塩メロンのクリーム、チョコなど季節で変わる中身。2026年の客は見た目を喜び、手土産にもいいと書く。生地が厚くて満腹になる、少しパサつくという声も。現金不可。',
  });
}

// ================================================================ 隼
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13225413/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'tokyo_hayato_roppongi', name: '隼 (Hayato)', category: 'OMNI',
    lat: 35.665261, lng: 139.732482, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a set omakase that includes dumplings, a bonito cutlet, noodles and a pasta (September–October 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shark fin in collagen soup, seafood, pork and foie gras.',
    hours_raw: 'Two seatings, everyone starting together: from 18:00 and from 21:00; please be punctual — late guests join the course where it is (Tabelog). Opening days are not listed. Reservations through the OMAKASE site (Tabelog); a 2-year wait was reported in October 2026, and 18 months in another October 2026 review. Omakase ¥49,500 (September–October 2026); drinks are market-priced and expensive (October 2026). 10% service charge. 8 seats. Non-smoking. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR. Opened 27 August 2018 (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 4-4-2, ヒルサイドパレス六本木 B1F — 2 min from Roppongi Stn exit 7',
    cuisine: 'Nouvelle-Chinese omakase based on Cantonese cooking, with French and Hong Kong influences, changing every two months (2026 reviews) · omakase ¥49,500 with optional drink pairing (September–October 2026) · a 2026 autumn course: "Shikkoku" five-spice fried dumpling with sea urchin, chicken and shrimp; "Shouin" fan guo dim sum scented with matsutake; "Tenkou" straw-smoked katsuo cutlet with coconut, herbs and Shine Muscat; "Koime" thick hammerhead shark fin in collagen soup with glutinous rice; "Kyoubi" vegetables stir-fried with only salt and potato starch; "Inrai" foie-gras monaka with popping candy · finales of noodles, fried rice and a mushroom cream pasta; summer chilled noodles; dessert dumplings and a fresh mooncake at the Mid-Autumn Festival · custom tableware and spotlit plates at the counter',
    website: null, gmaps: gm('隼 六本木4-4-2'), menu_url: null,
    notes: "[Chinese · Roppongi, an 8-seat nouvelle-Chinese chef's table with a two-year wait] A basement counter of eight where chef Toshiyuki Yoshida — trained at SENSE in the Mandarin Oriental Tokyo and on a restaurant opening on the Champs-Élysées — cooks a Cantonese-based omakase that changes every two months, plated on custom tableware under spotlights. Diners in 2026 rank the hammerhead shark fin in collagen soup as the best shark fin ever, and remember the matsutake \"aroma bomb\" dim sum, a straw-smoked bonito cutlet and a mushroom cream pasta among the finales. Tabelog Award Silver 2024–2026. Booking is through OMAKASE and runs 18 months to two years ahead; the course is ¥49,500 and drinks are expensive.",
    chef_bio: { chef_name: '吉田隼之 (Toshiyuki Yoshida)', roles: ['Chef (Tabelog shop text)'], origin: 'Utsunomiya, Tochigi Prefecture',
      background: 'Per the Tabelog shop text: born in Utsunomiya, Tochigi; after high school moved to Tokyo and worked at upscale Chinese restaurants and at SENSE, Mandarin Oriental Tokyo; then went to France with SENSE\'s head chef of the time to open a restaurant on the Champs-Élysées in Paris; aims for innovative dishes using a wide range of techniques, not only Chinese. A September 2026 diner notes the chef cannot eat cheese and makes the closing pasta egg-yolk-based. Regulars call the shop "Toshi\'s world" (October 2026). An October 2026 reviewer refers to the "Hasegawa Minoru chain" when commenting on drink prices. The Tabelog Award: Bronze 2022 and 2023, Silver 2024, 2025 and 2026; Tabelog Chinese 100 (Tokyo) 2021, 2023, 2024, 2026. Opened 27 August 2018.',
      philosophy: 'A chef\'s table to enjoy with all five senses (Tabelog shop text).', specialty: 'Hammerhead shark fin in collagen soup.',
      anecdotes: [
        { text: '"It featured hammerhead shark fin in a collagen-rich soup—so rich and delicious!" — September 2026, pairing course.', source: R + 'B536136437/' },
        { text: '"The course menu changes every two months, so I can never predict what to expect." — September 2026.', source: R + 'B431893740/' },
        { text: '"It\'s surprising that drinks cost more than the food—this isn’t a cabaret club…" — October 2026.', source: R + 'B484641458/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 隼、港区六本木4-4-2 ヒルサイドパレス六本木B1F、六本木駅7番出口から徒歩2分、18時からと21時からの一斉スタートの2部制、予約は OMAKASE、サービス料10%、8席、禁煙、カード可、2018年8月27日オープン、The Tabelog Award 2022・2023 Bronze、2024・2025・2026 Silver、中国料理 TOKYO 百名店 2021・2023・2024・2026。店の紹介: 料理長 吉田隼之 (Utsunomiya 生まれ、都内の高級中国料理店と SENSE で経験を積み、Paris の Champs-Élysées の店の立ち上げにも関わる)、乾燥ふかひれをじっくり戻した厚いふかひれ。口コミ(2026年7月〜10月): おまかせ49,500円、2か月ごとに変わるコース、撞木鮫のふかひれとコラーゲンのスープ、松茸の香りの点心、藁で燻した戻り鰹のカツ、締めの麺と炒飯とクリームパスタ、飲み物が高いという声、予約は2年待ちという声。',
      confidence: 'medium', sources: [TB, R + 'B425711412/', R + 'B431893740/', R + 'B452319583/', R + 'B484641458/', R + 'B508618967/', R + 'B536136437/', R + 'B536511764/', R + 'B537054743/', R + 'B537694117/', R + 'B537902644/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set omakase at a counter with the chef explaining each dish; book via OMAKASE.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-4-2 ヒルサイドパレス六本木 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with The Tabelog Award 2026 Silver; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.665261, 139.732482); GSI 東京都港区六本木四丁目4番 (lot) 44m; Shifang Cai Yoshida (tokyo_shifang_cai_yoshida_roppongi, same building, 1F) is the one offset; FREY's (4-5-15) is 17 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536511764/', R + 'B537054743/'],
    price_note: 'Course price from September–October 2026 reviews; 10% service; drinks extra and market-priced.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥49,500', 'Course', 'no', 'no', 'September–October 2026 reviews.', 'omakase'),
    ] }, {
    cuisine: '広東料理を土台にフランスや香港の要素を加えたヌーベル・シノワのおまかせ、2か月ごとに替わる (2026年の口コミ)・おまかせ49,500円、ドリンクペアリングも (2026年9〜10月)・2026年秋のコース: 雲丹、鶏、海老を包んだ五香粉の揚げ餃子の「Shikkoku」、松茸が香る粉果の点心の「Shouin」、藁で燻した鰹のカツとココナッツ、ハーブ、シャインマスカットの「Tenkou」、厚い撞木鮫のふかひれとコラーゲンのスープともち米の「Koime」、塩と片栗粉だけで炒める野菜の「Kyoubi」、はじけるキャンディ入りのフォアグラの最中の「Inrai」・締めは麺、炒飯、きのこのクリームパスタ。夏は冷やし麺、デザートの点心、中秋節の生の月餅・特注の器とスポットライトのカウンター',
    neighborhood: '六本木4-4-2 ヒルサイドパレス六本木B1F。六本木駅7番出口から徒歩2分',
    gf_detail: 'グルテンフリー不可。おまかせに餃子、鰹のカツ、麺、パスタが入る (2026年9〜10月)。',
    vegan_detail: 'ヴィーガン不可。コラーゲンのスープのふかひれ、魚介、豚、フォアグラ。',
    notes: '[中国料理・六本木、予約2年待ちの8席のヌーベル・シノワ] 地下のカウンター8席。Mandarin Oriental Tokyo の SENSE で修業し、Paris の Champs-Élysées の店の立ち上げにも関わった料理長 吉田隼之 が、2か月ごとに替わる広東料理ベースのおまかせを、特注の器とスポットライトで出す。2026年の客は撞木鮫のふかひれとコラーゲンのスープを人生最高と書き、松茸の「香りの爆弾」の点心、藁で燻した鰹のカツ、締めのきのこのクリームパスタも印象に残す。The Tabelog Award 2024〜2026 Silver。予約は OMAKASE で1年半〜2年先、コースは49,500円、飲み物は高め。',
  });
}

// ================================================================ 私房菜 吉田
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13302776/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'tokyo_shifang_cai_yoshida_roppongi', name: '私房菜 吉田 (Sifon Choi Yoshida)', category: 'OMNI',
    lat: 35.665343, lng: 139.732486, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: xiao long bao, spring rolls, dim sum and noodles are central to the menu (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pigeon, chicken, black pork, seafood and shark fin.',
    hours_raw: 'Tue–Sat, holidays and days before/after holidays 17:00–22:30 (last order 22:00); closed Sundays and Mondays; book any time from 17:00; a two-hour limit when busy (Tabelog). Order the fried pigeon by the day before. 5% service charge, no cover. 20 seats: 6 at the counter and tables; private hire up to 20. Non-smoking. Cards, e-money and QR (PayPay, Alipay, WeChat Pay and others).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 4-4-2, ヒルサイドパレス六本木 1F, above Hayato — about 5 min from Roppongi Stn',
    cuisine: 'Cantonese and Hong Kong cooking, mainly à la carte, with courses (2026 reviews) · signatures: "Pekichiki", Peking-duck-style chicken with popping candy, ¥1,980 for two; "Toshi\'s Rich Xiao Long Bao" with shark fin, ¥1,760 for two (limited daily); fried pigeon with aromatics (order a day ahead); drunken shrimp (reservation only) (Tabelog shop text; October 2026) · Kirishima black-pork char siu; black-pork sweet-and-sour with red-wine vinegar ¥3,080; spring rolls with sea bream, ginkgo and mushrooms ¥990; cheese spring rolls; pickled-lemon fried rice; shrimp wonton noodles; mapo tofu; almond tofu · courses: "Gokigen" 10 dishes with shark fin ¥22,000; a shorter 8-dish course (Tabelog) · wine list and sommelier pairings',
    website: null, gmaps: gm('私房菜 吉田 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[Chinese · Roppongi, Hayato's à la carte sister upstairs] A chic, brown-toned room of 20 seats one floor above Hayato, opened in November 2024 as its sister and selected for the Tabelog Chinese 100 in 2026. Unlike the omakase below, you mostly order à la carte: the \"Pekichiki\" — chicken done like Peking duck, with candy that crackles in the mouth — a shark-fin xiao long bao with a startlingly rich soup, Kirishima black-pork char siu, and a whole fragrant fried pigeon eaten with a glove. Diners in 2026 found it stylish but relaxed, good for dates and business, with a strong wine list. Courses from the ¥22,000 \"Gokigen\" with shark fin.",
    chef_bio: { chef_name: 'Hiroaki Yoshida (as written in an October 2026 review)', roles: ['Owner-chef (October 2026 review)'], origin: 'Formerly of Seifuro in Yokohama (October 2026 review)',
      background: 'An October 2026 diner writes that the restaurant opened in November 2024 as a sister of Hayato, and that the owner, chef Hiroaki Yoshida, comes from the long-established "Seifuro" in Yokohama and has been head chef at "Yasai Hanten" and "Chuka Bar Sawada". The Tabelog menu names a xiao long bao after "Toshi", Hayato\'s chef Toshiyuki Yoshida. Tabelog Chinese 100 (Tokyo) 2026.',
      philosophy: null, specialty: 'Pekichiki; shark-fin xiao long bao; fried pigeon.',
      anecdotes: [
        { text: '"This luxurious dish uses shark fin, and what surprised me the most was the richness of the soup." — October 2026, Toshi\'s Rich Xiao Long Bao ¥1,760.', source: R + 'B537075031/' },
        { text: '"Eating with a gloved left hand allows you to savor every bit, even the brain." — September 2026, fragrant fried pigeon.', source: R + 'B536664574/' },
        { text: '"At Sifon Choi Yoshida, the focus is on a la carte dishes rather than set courses." — October 2026.', source: R + 'B511638686/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 私房菜 吉田、港区六本木4-4-2 ヒルサイドパレス六本木1F、六本木駅から徒歩5分、火〜土・祝・祝前日・祝後日17:00〜22:30 (L.O.22:00)、日月休み、混む時は2時間制、名物の鳩の香り揚げは前日までに予約、サービス料5% (チャージなし)、20席 (カウンター6、テーブル)、貸切20名まで、禁煙、カード・電子マネー・QR可、中国料理 TOKYO 百名店 2026。店の紹介: Pekichiki、数量限定の Toshi\'s Rich 小籠包、予約制の酔っぱらい海老。コース: ふかひれ入り10品の「Gokigen」22,000円、8品のコース。口コミ(2026年9月〜10月): 2024年11月に隼の姉妹店として開店、オーナーシェフ Hiroaki Yoshida (Yokohama の Seifuro 出身)、アラカルト中心、Kirishima の黒豚の叉焼、春巻き、レモンの炒飯、海老ワンタン麺、杏仁豆腐、ワインとソムリエ。',
      confidence: 'medium', sources: [TB, R + 'B511638686/', R + 'B536536848/', R + 'B536664574/', R + 'B536793523/', R + 'B537075031/', R + 'B537339250/', R + 'B538116097/', R + 'B538256314/', R + 'B538464491/', R + 'B538472462/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte or courses; sommelier pairings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-4-2 ヒルサイドパレス六本木 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with Chinese 100 (2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.665273, 139.732486), 1 m from Hayato (tokyo_hayato_roppongi, same building, B1F), so offset ~9 m north, away from FREY's, Ai and Takano (24–28 m); GSI 東京都港区六本木四丁目4番 (lot) 45m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537075031/'],
    price_note: 'Prices from Tabelog and an October 2026 review; 5% service.', last_checked: TODAY, items: [
      it('', '', 'Pekichiki (Peking-style chicken), 2 pieces', '¥1,980', 'Signatures', 'no', 'no', 'October 2026 review.', 'pekichiki'),
      it('', '', "Toshi's Rich Xiao Long Bao (with shark fin), 2 pieces", '¥1,760', 'Signatures', 'no', 'no', 'October 2026 review; limited daily.', 'xiaolongbao'),
      it('', '', 'Kirishima black-pork sweet and sour with red-wine vinegar', '¥3,080', 'Mains', 'ask', 'no', 'October 2026 review.', 'subuta'),
      it('', '', '"Gokigen" course, 10 dishes with shark fin', '¥22,000', 'Course', 'no', 'no', 'Tabelog.', 'gokigen'),
    ] }, {
    cuisine: '広東と香港の料理、アラカルト中心でコースも (2026年の口コミ)・名物: 炭酸入りのキャンディがはじける北京ダック風の鶏「Pekichiki」2枚1,980円、ふかひれ入りの「Toshi\'s Rich 小籠包」2個1,760円 (数量限定)、前日までに頼む鳩の香り揚げ、予約制の酔っぱらい海老 (食べログの店の紹介、2026年10月)・Kirishima の黒豚の叉焼、黒豚の赤ワインビネガーの酢豚3,080円、鯛と銀杏と秋のきのこの春巻き990円、チーズの春巻き、レモンの漬物の炒飯、海老ワンタン麺、麻婆豆腐、杏仁豆腐・コース: ふかひれ入り10品の「Gokigen」22,000円、8品の短いコース (食べログ)・ワインリストとソムリエのペアリング',
    neighborhood: '六本木4-4-2 ヒルサイドパレス六本木1F、隼の上。六本木駅から徒歩約5分',
    gf_detail: 'グルテンフリー不可。小籠包、春巻き、点心、麺がメニューの中心 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鳩、鶏、黒豚、魚介、ふかひれ。',
    notes: '[中国料理・六本木、隼の上の階のアラカルトの姉妹店] 隼の一つ上の階、茶色を基調にした20席のシックな店で、2024年11月に姉妹店として開店し、中国料理 百名店 2026 に選ばれた。下のおまかせと違い、ほとんどをアラカルトで頼む: 北京ダックのように仕立てた鶏に口の中ではじけるキャンディを添えた「Pekichiki」、驚くほど濃いスープのふかひれ小籠包、Kirishima の黒豚の叉焼、手袋をして食べる鳩の香り揚げ。2026年の客はおしゃれだが気軽で、デートにも会食にもよく、ワインも充実と書く。コースはふかひれ入りの「Gokigen」22,000円から。',
  });
}

// ================================================================ 鮨 龍馬
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13289006/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['12:00', '15:00'], ['17:00', '23:00']); const D = day(['17:00', '23:00']);
  put({
    id: 'tokyo_sushi_ryuma_roppongi', name: '鮨 龍馬 (Sushi Ryuma)', category: 'OMNI',
    lat: 35.663912, lng: 139.730445, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A sushi course with soy-marinated tuna, Saikyo-miso cream cheese and dobin-mushi (2026 reviews); nothing is said about gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegan and vegetarian options, but no vegan dishes are described; the courses are fish, shellfish and crab, and the dobin-mushi broth has been made with soft-shelled turtle (August 2026).',
    hours_raw: 'Mon, Tue, Wed, Sat, Sun, holidays and days before/after holidays: 12:00–15:00 and 17:00–23:00; Thu and Fri: 17:00–23:00 (Tabelog). 10% service charge. 22 seats: 9 at the counter and private rooms for 6 and 8 (up to 20). Non-smoking. Children only if able to eat the adult menu. BYO possible. Cards, iD/QUICPay and QR (PayPay, Alipay, WeChat Pay and others). In a nightlife building near Midtown (September 2026).',
    hours: { 0: LD, 1: LD, 2: LD, 3: D, 4: D, 5: LD, 6: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 7-13-8, 六本木フュージョンビル 3F — 1 min from Roppongi Stn exit 7 (Oedo line), 2 min from exit 4b (Hibiya line)',
    cuisine: 'Edomae sushi mixed with creative pairings and aged fish (Tabelog shop text; 2026 reviews) · Premium Sushi Course ¥28,600 (September–October 2026): matsutake dobin-mushi (with eel or soft-shelled turtle broth); kohada aged five days from Amakusa; hirame aged a week; shima-aji aged six days; "double" nigiri — kuruma prawn with sweet shrimp inside, squid with sea urchin underneath; ōtoro with chopped toro inside; marinated akami; purple-urchin gunkan; Asakusa-nori hand roll of negitoro and ikura; chawanmushi with squid and shuto; snow crab in its shell; nameko miso soup; custard-like tamagoyaki; Italian ice cream · Echizen crab and super-aged bluefin course ¥110,000 (Tabelog) · sake and shochu; BYO possible',
    website: null, gmaps: gm('鮨 龍馬 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · Roppongi, playful \"double\" nigiri with an entertaining chef] A calm sushi counter of nine with two wood-panelled private rooms, on the third floor of a lively building by Tokyo Midtown. The ¥28,600 course opens with matsutake dobin-mushi, moves through aged fish — five-day kohada from Amakusa, week-aged hirame and shima-aji — and then the house twists: a kuruma prawn hiding a sweet shrimp, squid over sea urchin, ōtoro with chopped toro inside, an overflowing purple-urchin gunkan. Diners in 2026 come back as much for the chef, who keeps the counter laughing and explains every piece, as for the sushi. Lunch most days; private rooms for business dinners.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The Tabelog shop text says the chefs have trained at many renowned restaurants. Diners in 2026 describe a friendly, humorous chef who explains each piece and keeps the counter laughing. No one is named in the sources read.',
      philosophy: 'Traditional Edomae sushi in harmony with creative sushi (Tabelog shop text).', specialty: '"Double" nigiri; aged kohada and hirame.',
      anecdotes: [
        { text: '"To my surprise, the chef was incredibly entertaining, keeping everyone laughing throughout the evening." — September 2026, Premium Sushi Course ¥28,600.', source: R + 'B536592845/' },
        { text: '"Next was Kohada, aged for five days from Amakusa." — October 2026.', source: R + 'B536939507/' },
        { text: '"I was amazed by the sushi that allowed us to enjoy two types of toppings in one piece, like squid paired with sea urchin and shrimp with sweet shrimp." — October 2026.', source: R + 'B537307892/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨 龍馬、港区六本木7-13-8 六本木フュージョンビル3F、大江戸線六本木駅7番出口から徒歩1分、日比谷線4b出口から2分、月火水土日・祝・祝前日・祝後日12:00〜15:00、17:00〜23:00、木金17:00〜23:00、サービス料10%、22席 (カウンター9、6名と8名の個室)、禁煙、子どもは大人と同じメニューを食べられる場合、持ち込み可、カード・電子マネー・QR可、ヴィーガン・ベジタリアンメニューあり。コース: Echizen の蟹と熟成本鮪のコース110,000円。口コミ(2026年8月〜10月): プレミアム鮨コース28,600円、松茸の土瓶蒸し、Amakusa の5日熟成の小肌、熟成の平目と縞鯵、車海老の中に甘海老、烏賊の下に雲丹、紫雲丹の軍艦、Asakusa 海苔の手巻き、大将が楽しい。',
      confidence: 'medium', sources: [TB, R + 'B485786707/', R + 'B515457952/', R + 'B535902565/', R + 'B536386157/', R + 'B536402596/', R + 'B536479494/', R + 'B536592845/', R + 'B536939507/', R + 'B536963920/', R + 'B537307892/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase at the counter or in private rooms; the chef explains each piece.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木7-13-8 六本木フュージョンビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with courses; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.663912, 139.730445); GSI 東京都港区六本木七丁目13番 (lot) 21m; OYOGE (7-13-10) is 30 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536592845/'],
    price_note: 'Course prices from Tabelog and September–October 2026 reviews; 10% service.', last_checked: TODAY, items: [
      it('', '', 'Premium Sushi Course', '¥28,600', 'Course', 'ask', 'no', 'September–October 2026 reviews.', 'premium'),
      it('', '', 'Live Echizen crab and super-aged bluefin sushi course, 20 items', '¥110,000', 'Course', 'ask', 'no', 'Tabelog.', 'echizen'),
    ] }, {
    cuisine: '江戸前鮨と創作的な組み合わせ、熟成の魚 (食べログの店の紹介、2026年の口コミ)・プレミアム鮨コース28,600円 (2026年9〜10月): 松茸の土瓶蒸し (鰻やすっぽんの出汁)、Amakusa の5日熟成の小肌、1週間熟成の平目、6日熟成の縞鯵、車海老の中に甘海老、烏賊の下に雲丹の「ダブル」の握り、刻みトロ入りの大トロ、漬けの赤身、紫雲丹の軍艦、Asakusa 海苔のネギトロといくらの手巻き、烏賊と酒盗の茶碗蒸し、甲羅に盛ったずわい蟹、なめこの味噌汁、カスタードのような玉子焼き、イタリアのアイス・Echizen の蟹と超熟成の本鮪のコース110,000円 (食べログ)・日本酒と焼酎、持ち込み可',
    neighborhood: '六本木7-13-8 六本木フュージョンビル3F。六本木駅7番出口 (大江戸線) から徒歩1分、4b出口 (日比谷線) から2分',
    gf_detail: '要確認。漬けの鮪、西京味噌のクリームチーズ、土瓶蒸しが入る鮨のコース (2026年の口コミ)。グルテンについての説明はない。',
    vegan_detail: '要確認。食べログにはヴィーガン・ベジタリアンメニューありとあるが、ヴィーガンの料理の記載はない。コースは魚、貝、蟹で、土瓶蒸しはすっぽんの出汁のこともある (2026年8月)。',
    notes: '[鮨・六本木、楽しい大将の「ダブル」の握り] Tokyo Midtown 近くの賑やかなビルの3階、カウンター9席と木の個室2つの落ち着いた鮨屋。28,600円のコースは松茸の土瓶蒸しで始まり、Amakusa の5日熟成の小肌、熟成の平目や縞鯵と続き、店の工夫の握りへ: 甘海老を隠した車海老、雲丹を下に忍ばせた烏賊、刻みトロ入りの大トロ、あふれる紫雲丹の軍艦。2026年の客は鮨と同じくらい、一貫ずつ説明してカウンターを笑わせる大将を目当てに通う。昼もほぼ毎日、会食には個室。',
  });
}

save();
