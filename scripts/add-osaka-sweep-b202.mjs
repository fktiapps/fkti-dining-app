// Osaka sweep (2-mile circle around Dotonbori), batch 202 — mom-and-pop queue (≤20 seats, 30+ reviews), nearest-first past ~1 km, all Shinmachi 1-chome.
//   + パティスリー らねっと Patisserie RAINETTE (additive-free cake shop and café since 2007, run alone by the owner; 13 seats)
//   + 伊勢田 ISEDA (kushikatsu, horumon skewers and Chiri-tori teppan-nabe; moved from Kitahorie; 18 seats)
//   + くるみ製菓店 Kurumi Seikaten (madeleine and shell-cake shop with soft serve, 3 reserved seats; opened July 2025)
//   - ジャンボ酒場 新町1丁目店 27108386 skipped: a branch of the じゃんぼ總本店 / Jumbo Sakaba franchise chain.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 202);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ パティスリー らねっと
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27017231/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.らねっと.jp/';
  const H = day(['10:30', '18:00']);
  put({
    id: 'osaka_patisserie_rainette_shinmachi', name: 'パティスリー らねっと (Patisserie RAINETTE)', category: 'MOM_AND_POP',
    lat: 34.676669, lng: 135.494784, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; nearly everything is wheat-flour baking (roll cakes, tarts, pies, cookies, focaccia), though the Tabelog menu lists one cookie, "Coco", as just coconut, egg white and sugar. Ask about shared flour.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cakes, puddings and macarons are made with butter, cream, eggs and egg whites, and the lunch gratin has bacon.',
    hours_raw: 'Mon–Sat and public holidays 10:30–18:00, until sold out; closed Sunday (Tabelog). Cash only: no cards, e-money or QR in the shop (Tabelog; May 2025 review); the online store takes cards. 13 seats; designated smoking area (Tabelog). Takeout cakes and baked goods. Reservations accepted (Tabelog). One person bakes, serves the café and cooks lunch, and fruit roll cakes and cream puffs are finished to order, so expect a wait (2024–2026 reviews). Opened 1 March 2007 (Tabelog; the shop site says 2007).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-22-19 — about 4 min from Nishi-Ohashi Stn, between Nishi-Ohashi and Yotsubashi; near the Orix Theater',
    cuisine: 'Small cake shop and café, "additive-free sweets" (13 seats) · roll cakes, including a fruit roll made to order · apple pie · strawberry tart · caramel cheesecake · cream puffs and pies filled with custard after ordering · pudding and lemon pudding · soufflé · light lunches: gratin lunch with salad, focaccia and orange ¥950 (May 2026); buckwheat-flour pizza ¥890 (June 2024) · baked goods to take away: cheese marble brownie, large black-soybean kinako macaron, mini macarons without colouring or preservatives, caramel pound cake, dacquoise roll, cookies, homemade orange jam and chocolate-dipped orange peel · tea and blended coffee',
    website: SITE, gmaps: gm('パティスリー らねっと 新町'), menu_url: SITE,
    notes: "[Cake shop and café · Shinmachi, a one-person patisserie since 2007] A small cake shop between Nishi-Ohashi and Yotsubashi that has outlasted the area's fast-changing cafés since 2007, with a motto of sweets that are gentle on body and mind and an online store branded \"additive-free sweets\". The owner bakes, runs the café and cooks lunch alone, so things take a while: the fruit roll cake is rolled to order and the cream puffs and pies are filled after you ask. Diners single out the apple pie (one was told to try it both warmed and as it is), a moist roll with fresh chocolate cream, a mousse-like lemon pudding and a sweet caramel cheesecake. Light lunches change: a piping-hot bacon-and-mushroom gratin set (¥950, May 2026), and earlier a buckwheat-flour pizza. Prices are low; bring cash.",
    chef_bio: { chef_name: '湯川律子', roles: ['Owner (business operator named on the shop\'s online-store legal notice)'], origin: null, background: 'The legal notice of the shop\'s online store names 湯川律子 as the business operator, at the shop\'s address. Reviews describe a woman owner who runs the shop alone: a June 2024 diner saw the female owner working single-handed, and a May 2026 diner says the pastry chef "makes cakes for sale and also runs the café and lunch service". A November 2023 diner saw a lone staff member serving a full room. Opened 1 March 2007 (Tabelog).', philosophy: 'Sweets gentle on body and mind, made without additives (shop site: 心と体に優しいお菓子作りをモットーに; online store name 無添加スイーツ).', specialty: 'Roll cakes; apple pie; black-soybean kinako macarons; cheese marble brownies.',
      anecdotes: [
        { text: '"Wow—served piping hot, and there was even bread inside! Such a generous portion! The creamy homemade sauce was wonderfully gentle..." — May 2026, gratin lunch ¥950.', source: R + 'B486399670/' },
        { text: '"Despite the frequent turnover of cafes in this area, its long-standing presence indicates its popularity." — September 2026.', source: R + 'B507642399/' },
      ],
      japanese_sources_summary: '食べログ: パティスリー らねっと、大阪市西区新町1-22-19、西大橋駅から徒歩4分、月〜土・祝10:30〜18:00 (売り切れ次第終了)、日曜休み、予約可、カード・電子マネー・QR不可、13席、喫煙所あり、テイクアウト可、オープン日2007年3月1日。店のサイト (無添加スイーツ パティスリーらねっと): 大阪市西区新町のカフェ兼ケーキ屋、2007年オープン、心と体に優しいお菓子作りがモットー。オンラインストアに黒豆きな粉マカロン (農家直送の卵白、北海道産バタークリーム)、チーズマーブルブラウニー (オーストラリア産クリームチーズ、ベルギー産チョコレート)、ダクワーズロール、キャラメルパウンドケーキ、マカロン4種 (着色料・保存料無添加)、焼き菓子詰め合わせ、自家製オレンジジャム。特定商取引法に基づく表記の事業者の名称: 湯川律子。口コミ(2023年11月〜2026年9月): 女性のオーナーがひとりでケーキ、カフェ、ランチ、注文を受けてから仕上げるフルーツロール、シュークリームとパイもカスタードは注文後、アップルパイ、生チョコクリームのロールケーキ、レモンのミルクプリン、キャラメルチーズケーキ、いちごのタルト、スフレ、グラタンのランチ950円 (2026年5月)、そば粉のピザ890円 (2024年6月)、値段は手ごろ、現金のみ、Orix Theater の帰りに。',
      confidence: 'medium', sources: [TB, SITE + 'about', SITE + 'law', R + 'B486399670/', R + 'B507642399/', R + 'B520721456/', R + 'B522611958/', R + 'B523469601/', R + 'B537221857/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; one person runs everything, so allow time (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区新町1-22-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (corporate member); reviews dated January–September 2026; online store live.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目22番19号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B486399670/', SITE],
    price_note: 'Lunch prices from reviews (dated); baked-goods prices from the online store, October 2026.', last_checked: TODAY, items: [
      it('', '', 'Gratin lunch (bacon and mushroom gratin, salad, focaccia, orange)', '¥950', 'Lunch', 'no', 'no', 'May 2026.', 'gratin'),
      it('', '', 'Fruit roll cake (made to order)', '', 'Cakes', 'ask', 'no', 'February 2026.', 'roll'),
      it('', '', 'Apple pie', '', 'Cakes', 'ask', 'no', 'November 2023; August 2026.', 'applepie'),
      it('チーズマーブルブラウニー', '', 'Cheese marble brownie', '¥285', 'Baked goods', 'ask', 'no', 'Online store, October 2026.', 'brownie'),
      it('黒豆きな粉マカロンセット', '', 'Black-soybean kinako macaron set', '¥2,880', 'Baked goods', 'ask', 'no', 'Online store, October 2026.', 'macaron'),
    ] }, {
    cuisine: '小さなケーキ屋とカフェ、無添加スイーツ (13席)・ロールケーキ、注文を受けてから仕上げるフルーツロール・アップルパイ・いちごのタルト・キャラメルチーズケーキ・注文後にカスタードを詰めるシュークリームとパイ・プリンとレモンのプリン・スフレ・軽いランチ: サラダ、フォカッチャ、オレンジつきのグラタンのランチ950円 (2026年5月)、そば粉のピザ890円 (2024年6月)・持ち帰りの焼き菓子: チーズマーブルブラウニー、黒豆きな粉マカロン、着色料・保存料無添加のマカロン、キャラメルパウンドケーキ、ダクワーズロール、クッキー、自家製オレンジジャム、オレンジピールのチョコがけ・紅茶、ブレンドコーヒー',
    neighborhood: '新町1-22-19。西大橋駅から徒歩4分ほど、西大橋と四ツ橋のあいだ、Orix Theater の近く',
    gf_detail: '要確認。グルテンの情報なし。ロールケーキ、タルト、パイ、クッキー、フォカッチャなど、ほとんどが小麦粉のお菓子。食べログのメニューでは「ココ」というクッキーだけがココナッツ、卵白、砂糖でできている。粉を同じ場所で使うか確認を。',
    vegan_detail: 'ヴィーガンではありません。ケーキ、プリン、マカロンにはバター、生クリーム、卵、卵白を使い、ランチのグラタンにはベーコン。',
    notes: '[ケーキ屋とカフェ・新町、2007年からひとりで営むパティスリー] 西大橋と四ツ橋のあいだにある小さなケーキ屋。入れ替わりの多いこのあたりのカフェのなかで2007年から続き、心と体に優しいお菓子作りがモットーで、オンラインストアの名前は「無添加スイーツ」。オーナーがひとりでケーキを焼き、カフェとランチもこなすので、時間に余裕を。フルーツロールは注文を受けてから巻き、シュークリームとパイもあとからクリームを詰める。人気はアップルパイ (温めても、そのままでも、と店に勧められた人も)、生チョコクリームのしっとりしたロール、ムースのようなレモンのプリン、甘めのキャラメルチーズケーキ。軽いランチは変わり、熱々のベーコンときのこのグラタンのセット (950円、2026年5月)、以前はそば粉のピザも。値段は手ごろで、支払いは現金のみ。',
  });
}

// ================================================================ 伊勢田
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27123639/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '24:00']); const W = day(['17:30', '23:00']);
  put({
    id: 'osaka_kushikatsu_iseda_shinmachi', name: '伊勢田 (ISEDA)', category: 'OMNI',
    lat: 34.677364, lng: 135.496038, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the focus is wheat-battered kushikatsu, and the hot pot finishes with ramen or udon.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: offal skewers, beef and pork kushikatsu, raw beef yukhoe and a beef-horumon hot pot; ask before relying on the vegetable kushikatsu.',
    hours_raw: 'Mon, Tue, Thu–Sun 17:30–24:00 (last order 23:00); Wed 17:30–23:00 (last order food 22:00, drinks 22:30); closing days may vary (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog), but an April 2026 diner was told bills under ¥5,000 are cash only, plus a ¥330 table charge. 18 seats: a counter, three booths and tables (Tabelog; September 2026 review). Smoking allowed at every seat; at most two children, no strollers (Tabelog). Busy before and after shows at the nearby Orix Theater (September 2026 review). Moved from Kitahorie 2-3-3 (the old Tabelog listing is marked relocated); the listing remarks say the new shop opened in April 2021.',
    hours: { 0: H, 1: H, 2: W, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmachi 1-9-14, 1F — 3 min from Nishi-Ohashi or Yotsubashi Stn',
    cuisine: 'Showa-style kushikatsu and horumon izakaya (18 seats) · kushikatsu by the stick: pork ¥170, beef ¥220, shrimp ¥300, scallop ¥280, Camembert ¥230, vegetables ¥130, red pickled ginger ¥150; assortment of 10 ¥1,690 (April 2026) · grilled horumon skewers ¥200–250 · grilled liver ¥700 · beef tataki yukhoe ¥890 · dote-yaki ¥590 · konjac steak (salt or garlic) ¥580 · chicken kara-age ¥700 · ISEDA Classic Chiri-tori teppan-nabe ¥2,980, beef horumon and vegetables, spice adjustable, finished with rice, ramen or udon ¥480 · cold kimchi noodles ¥890 · gukbap, soups, kimchi · sets: kushikatsu 6 ¥1,800, horumon skewers 6 ¥1,900, special course ¥7,000 (Tabelog menu, updated April 2026)',
    website: null, gmaps: gm('伊勢田 新町 串カツ'), menu_url: TB + 'dtlmenu/',
    notes: "[Kushikatsu and horumon · Shinmachi, a smoky Showa-style counter by the Orix Theater] A lively kushikatsu izakaya that moved from Kitahorie to a ground-floor spot near the Orix Theater, billing itself as a trip back to the good old Showa era. The batter is light and crisp; diners also go for the grilled offal skewers, a grilled liver with sesame oil and salt, a sweet-spicy Chiri-tori hot pot of beef horumon and vegetables in a square iron pan, and the specialty dote-yaki. Finish with ramen in the pot, cold kimchi noodles, or a cheese risotto. The sauce once came in a shared no-double-dipping pot (2025); by April 2026 it was poured over the plate. A May 2025 group found the owner very pleasant, and later diners felt it was a regulars' place that still made a newcomer feel warmly welcome. Every seat allows smoking, and a 2025 diner found the ventilation weak.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Kushikatsu and horumon izakaya, formerly on Naniwa-suji in Kitahorie (old Tabelog listing marked relocated, Kitahorie 2-3-3); the current shop opened in April 2021 per the Tabelog remarks. A May 2025 group was "warmly welcomed by a very pleasant owner".', philosophy: 'A Showa-era atmosphere (Tabelog tagline, shop-provided).', specialty: 'Kushikatsu; horumon skewers; Chiri-tori teppan-nabe; dote-yaki.',
      anecdotes: [
        { text: '"I previously visited ISEDA when it was located along Naniwa-suji in Kitahorie. This is my first time at the new location in Shinmachi." — April 2026, assorted kushikatsu, 10 pieces, ¥1,690.', source: R + 'B526270357/' },
        { text: '"The grilled liver skewers were so delicious that I wanted to order more! They had no unpleasant odor and were easy to eat with sesame oil and salt." — August 2025.', source: R + 'B515218314/' },
      ],
      japanese_sources_summary: '食べログ: 伊勢田 (ISEDA)、大阪市西区新町1-9-14 丸勝ビル 1F、西大橋駅・四ツ橋駅から徒歩3分、月火木〜日17:30〜24:00 (L.O. 23:00)、水曜17:30〜23:00 (L.O. 料理22:00、ドリンク22:30)、不定休、予約可、カード (VISA、Master、JCB、AMEX、Diners)・PayPay可、電子マネー不可、18席、全席喫煙可、子供は2名まで、ベビーカー不可、2021年4月にオープン (備考)、北堀江2-3-3からの移転。メニュー (2026年4月更新、税込): 串カツ (豚170円、牛肉220円、海老300円、ほたて280円、カマンベール230円、野菜130円、紅しょうが150円)、ホルモン串200〜250円、焼きレバー700円、牛肉のたたきユッケ890円、どて焼き590円、こんにゃくステーキ580円、Chiri-tori 鉄板鍋2980円、締め480円、冷やしキムチ麺890円、串カツセット1800円、ホルモン串焼きセット1900円、特選コース7000円。口コミ(2025年4月〜2026年9月): 軽くてサクサクの衣、二度づけ禁止のソース (2025年)、2026年4月にはソースを皿にかけるスタイル、串カツ10本の盛り合わせ1690円、5000円未満は現金のみ、テーブルチャージ330円、ホルモンと野菜の甘辛い鍋、辛さは調節可、締めのラーメン、チーズ増しのリゾット、焼きレバーはごま油と塩で、Orix Theater の近くでイベントの日は混む、感じのいい店主、常連が多いが温かく迎えてくれる、換気が弱め。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', TB + 'party/', 'https://tabelog.com/en/osaka/A2701/A270201/27051385/', R + 'B507771870/', R + 'B508008612/', R + 'B515218314/', R + 'B526270357/', R + 'B534903856/', R + 'B536146060/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'All seats smoking; bring cash for bills under ¥5,000 (April 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-9-14 丸勝ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (corporate member; menu updated April 2026); reviews dated April 2025–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目9番14号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', TB + 'party/', R + 'B526270357/'],
    price_note: 'Prices from the Tabelog menu (tax included, updated April 2026).', last_checked: TODAY, items: [
      it('', '', 'Kushikatsu, pork (per stick)', '¥170', 'Kushikatsu', 'no', 'no', 'Tabelog menu, April 2026.', 'pork'),
      it('', '', 'Kushikatsu, vegetables (per stick)', '¥130', 'Kushikatsu', 'no', 'no', 'Onion, shishito, eggplant, lotus root and more; wheat batter.', 'veg'),
      it('', '', 'Horumon skewers (per stick, two per person)', '¥200', 'Grilled skewers', 'ask', 'no', 'Tabelog menu, April 2026; ¥200–250.', 'horumon'),
      it('', '', 'Specialty dote-yaki', '¥590', 'Specialties', 'ask', 'no', 'Tabelog menu, April 2026.', 'dote'),
      it('', '', 'ISEDA Classic Chiri-tori teppan-nabe', '¥2,980', 'Hot pot', 'ask', 'no', 'Tabelog menu, April 2026; finish with rice, ramen or udon ¥480.', 'nabe'),
      it('', '', 'Kushikatsu set for one (6 skewers, small dish, one dish)', '¥1,800', 'Sets', 'no', 'no', 'Tabelog menu, April 2026.', 'set'),
    ] }, {
    cuisine: '昭和の雰囲気の串カツとホルモンの居酒屋 (18席)・串カツは1本から: 豚170円、牛肉220円、海老300円、ほたて280円、カマンベール230円、野菜130円、紅しょうが150円。10本の盛り合わせ1690円 (2026年4月)・ホルモン串焼き200〜250円・焼きレバー700円・牛肉のたたきユッケ890円・どて焼き590円・こんにゃくステーキ (塩かにんにく) 580円・鶏の kara-age 700円・ISEDA の定番 Chiri-tori 鉄板鍋2980円、牛ホルモンと野菜、辛さは調節でき、締めはご飯、ラーメン、うどん480円・冷やしキムチ麺890円・クッパ、スープ、キムチ・セット: 串カツ6本1800円、ホルモン串6本1900円、特選コース7000円 (食べログのメニュー、2026年4月更新)',
    neighborhood: '新町1-9-14 丸勝ビル 1F。西大橋駅・四ツ橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。中心は小麦の衣の串カツで、鍋の締めはラーメンかうどん。',
    vegan_detail: 'ヴィーガンではありません。ホルモン串、牛や豚の串カツ、牛のユッケ、牛ホルモンの鍋。野菜の串カツも頼む前に確認を。',
    notes: '[串カツとホルモン・新町、Orix Theater の近くの昭和の雰囲気のカウンター] 北堀江から移ってきた、にぎやかな串カツの居酒屋。古き良き昭和にタイムスリップがうたい文句。衣は軽くてサクサク。ホルモンの串焼き、ごま油と塩で食べる焼きレバー、四角い鉄鍋で牛ホルモンと野菜を甘辛く煮る Chiri-tori 鍋、名物のどて焼きも人気。締めは鍋のラーメン、冷やしキムチ麺、チーズのリゾット。ソースは2025年には二度づけ禁止の共用の容器だったが、2026年4月には皿にかけるスタイルに。2025年5月のグループは店主の感じのよさをほめ、その後も常連の店のようだが温かく迎えてくれたという声。全席喫煙可で、換気が弱めという2025年の声も。',
  });
}

// ================================================================ くるみ製菓店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27150636/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kurumisweets.theshop.jp/';
  const H = day(['10:00', '19:00']);
  put({
    id: 'osaka_kurumi_seikaten_shinmachi', name: 'くるみ製菓店 (Kurumi Seikaten)', category: 'OMNI',
    lat: 34.677713, lng: 135.495702, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the shop is built around madeleines, financiers, shell cakes and sablés, which are normally wheat-flour baking. Soft serve is the only other item; ask about its toppings and the shared kitchen.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fermented butter, almonds and honey in the baking, milk soft serve and egg pudding.',
    hours_raw: 'Daily 10:00–19:00, open all year (Tabelog; shop site). The 3 counter seats inside are by reservation only, and reservations are hard to get; a bench outside when the weather is fine (Tabelog; September–October 2026 reviews). Cards, PayPay, Alipay, WeChat Pay; no e-money (Tabelog). Non-smoking; BYO drinks allowed (Tabelog). A long line wrapped around the street on one September 2026 visit. A freshly baked madeleine or financier is given free with a purchase (September–October 2026 reviews). Opened 18 July 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-16-5, 1F — 5 min from Yotsubashi Stn (Exit 2), near the Orix Theater',
    cuisine: 'Baked-goods shop for madeleines and shell cakes, with soft serve (3 reserved seats) · 極上マドレーヌ (top-grade madeleines, a signature item) in many flavours: fermented butter, French butter, Takachiho butter, carrot with cinnamon, chocolate, walnut, Gorgonzola · shell cakes · financiers · sablé made with Calpis fermented butter ¥350 (October 2026) · light milk soft serve with seasonal sauce (peach in July 2026; fig or lemon in September 2026) · pudding with soft serve (to the end of September 2026) · gift boxes: madeleines 6 ¥2,100, shell cakes 10 ¥3,990 (online store)',
    website: SITE, gmaps: gm('くるみ製菓店 新町'), menu_url: SITE,
    notes: "[Baked sweets · Shinmachi, a madeleine shop with three hard-to-book seats] A tiny shop near the Orix Theater where the smell of fermented butter fills the room and the oven sits in full view. Almost everything is to take away — boxes of madeleines in a dozen flavours (fermented butter, French or Takachiho butter, carrot, chocolate, walnut, Gorgonzola) and the shop's shell cakes — and every purchase comes with one still warm from the oven. The three seats inside are reserved for a light, milky soft serve with a seasonal sauce, or a firm pudding on top of it. Two diners link it with Chihiro Kashiten a few streets away: a September 2026 diner calls it a sister shop, and an October 2026 diner says the logo looks familiar and the shop is run by the son of a former influencer who had sold shares in that shop. A line may wrap the block.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Baked-goods shop that opened on 18 July 2025 (Tabelog); the online store\'s legal notice names the company 株式会社ミクリエーション and, as business operator, 染川優輝 (no reading given). The shop site lists this one shop. Its relationship to ちひろ菓子店 (Chihiro Kashiten, skipped in b200 as a chain) is unclear: a September 2026 review calls it "a sister shop of Chihiro", while an October 2026 review says it is run by the son of a former influencer who had sold shares in the shop it resembles. Chihiro\'s own online store names a different company (株式会社DADACA).', philosophy: 'Sweets made with good fermented butter, almonds and honey and as few additives as possible; staff and the oven visible from the counter; aims to be "the world\'s most loved baked-goods shop" (shop site: 世界一愛される焼き菓子店).', specialty: 'Madeleines; shell cakes; soft serve.',
      anecdotes: [
        { text: '"As a specialty madeleine shop, they offer a wide variety. The aroma of fermented butter fills the store, which is impressive." — July 2026.', source: R + 'B532852657/' },
        { text: '"This place is run by the son of a former influencer who previously sold the shop\'s shares." — October 2026, sablé with Calpis fermented butter ¥350.', source: R + 'B536839160/' },
        { text: '"I was impressed by Google, which has 1,300 reviews and a rating of 4.9, so I decided to visit." — October 2026.', source: R + 'B538057042/' },
      ],
      japanese_sources_summary: '食べログ: くるみ製菓店、大阪市西区新町1-16-5 1F、四ツ橋駅から徒歩5分、毎日10:00〜19:00、イートインは予約のみ (カウンター3席)、カード・PayPay・Alipay・WeChat Pay可、電子マネー不可、禁煙、持ち込み可、テイクアウト可、オープン日2025年7月18日。店のサイト: 上質な発酵バター・アーモンド・はちみつを贅沢に使い、添加物を極力使わない「安心・安全」なお菓子、看板商品は「シェルケーキ」と「極上マドレーヌ」、スタッフの作業風景やオーブンが見える内装、「世界一愛される焼き菓子店」をめざす、年中無休、極上マドレーヌBOX (6個) 2100円、シェルケーキBOX (10個) 3990円。特定商取引法に基づく表記: 株式会社ミクリエーション、事業者の名称 染川優輝、新町1-16-5 橋口ビル1F。口コミ(2026年7月〜10月): マドレーヌの専門店、発酵バターの香り、焼きたてを1個サービス、発酵バター、フランス産バター、Takachiho のバター、にんじん、チョコ、くるみ、ゴルゴンゾーラ、Calpis の発酵バターのサブレ350円、季節のソースのソフトクリーム (桃、いちじく、レモン)、固めのプリンとソフトクリーム、予約が取りにくい、外にベンチ、行列、ちひろの姉妹店という声と、元インフルエンサーの息子が営むという声。',
      confidence: 'medium', sources: [TB, SITE + 'about', SITE + 'law', R + 'B532852657/', R + 'B536146587/', R + 'B536381485/', R + 'B536839160/', R + 'B537419320/', R + 'B537426974/', R + 'B538057042/', R + 'B538057091/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway counter; book ahead for the 3 seats (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-16-5 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (corporate member); reviews dated July–October 2026; online store live.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目16番5号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B536839160/', R + 'B532852657/'],
    price_note: 'Box prices from the online store (October 2026); sablé price from an October 2026 review.', last_checked: TODAY, items: [
      it('極上マドレーヌBOX（6個）', '', 'Top-grade madeleine box, 6 flavours', '¥2,100', 'Baked goods', 'ask', 'no', 'Online store, October 2026.', 'madeleine6'),
      it('シェルケーキBOX（10個）', '', 'Shell cake box, 10 pieces (best-five assortment)', '¥3,990', 'Baked goods', 'ask', 'no', 'Online store, October 2026.', 'shell10'),
      it('', '', 'Sablé with Calpis fermented butter', '¥350', 'Baked goods', 'ask', 'no', 'October 2026.', 'sable'),
      it('', '', 'Soft serve with seasonal sauce', '', 'Eat-in', 'ask', 'no', 'July–October 2026; seats by reservation.', 'softserve'),
    ] }, {
    cuisine: 'マドレーヌとシェルケーキの焼き菓子の店、ソフトクリームも (予約制の3席)・「極上マドレーヌ」は種類が多い: 発酵バター、フランス産バター、Takachiho のバター、シナモンのきいたにんじん、チョコ、くるみ、ゴルゴンゾーラ・シェルケーキ・フィナンシェ・Calpis の発酵バターのサブレ350円 (2026年10月)・季節のソースのミルクのソフトクリーム (2026年7月は桃、9月はいちじくかレモン)・プリンとソフトクリーム (2026年9月末まで)・ギフトボックス: 極上マドレーヌBOX (6個) 2100円、シェルケーキBOX (10個) 3990円 (オンラインストア)',
    neighborhood: '新町1-16-5 橋口ビル1F。四ツ橋駅 (2番出口) から徒歩5分、Orix Theater の近く',
    gf_detail: '要確認。グルテンの情報なし。マドレーヌ、フィナンシェ、シェルケーキ、サブレが中心で、ふつうは小麦粉の焼き菓子。ほかにはソフトクリームだけなので、トッピングと同じ厨房かどうかを確認を。',
    vegan_detail: 'ヴィーガンではありません。焼き菓子に発酵バター、アーモンド、はちみつ、ソフトクリームは牛乳、プリンは卵。',
    notes: '[焼き菓子・新町、席が3つだけのマドレーヌの店] Orix Theater の近くの小さな店で、発酵バターの香りが店じゅうに広がり、オーブンも見える。ほとんどが持ち帰りで、何種類ものマドレーヌ (発酵バター、フランス産や Takachiho のバター、にんじん、チョコ、くるみ、ゴルゴンゾーラ) とシェルケーキの箱。買うと焼きたてを1個くれる。店内の3席は予約制で、軽いミルクのソフトクリームに季節のソース、または固めのプリンをのせて。近くのちひろ菓子店とのつながりにふれる口コミが2件あり、2026年9月の口コミは姉妹店と言い、2026年10月の口コミはロゴが似ていて、その店の株を売った元インフルエンサーの息子が営む店だと言う。行列ができることも。',
  });
}

// ================================================================ skips
skip('27108386', 'ジャンボ酒場 新町1丁目店 (Jumbo Sakaba Shinmachi 1 chome ten): branch of the じゃんぼ總本店 / Jumbo Sakaba takoyaki-okonomiyaki chain — the listing links takoyaki.co.jp, whose shop finder lists about 130 shops and runs a franchise scheme (「安心フランチャイズ」), with new ジャンボ酒場 openings in 2024, 2025 and 2026 (市岡店 March 2026, 寝屋川市駅前店 September 2026); the listing itself gives the restaurant name as "Jumbo Sohonten"; Jumbo Sakaba Sennichimae ten 27119223 is another branch in shops.jsonl; rapidly expanding chain');

save();
