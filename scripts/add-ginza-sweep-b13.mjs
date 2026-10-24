// Ginza Station half-mile sweep (805 m), batch 13 — vegan / gluten-free. Researched 2026-10-24.
//   + the vegan marshmallooow 銀座三越店 (all-vegan sweets; GF on rice-flour items only)
//   + 串焼BISTRO 福みみ 銀座5 (yakitori izakaya chain; FMGF reports a GF menu — no own claim)
//   + 銀座とんかつ はし勝つ (FMGF report of GF tonkatsu on request — GF 'ask')
// Note: findmeglutenfree.com now blocks scripted fetches (2026-10-24); its evidence here is the listing text cached
// earlier in this sweep (scratchpad disc/fmgf.txt, from findmeglutenfree.com/jp/chuo-city), quoted as found. Not circumvented.
// Deferred: FUKUMIMI GINZA 6 (3 FMGF reviews; Tabelog id and current address conflict).
// Sources: zaikei/PR (THE VG MARSHMALLOOOW NEW YORK, April 2026), rurubu (2022), FMGF listing text, Tabelog /en/
// listings + reviews. Pins: Tabelog geo + GSI; marshmallooow = GSI address of Ginza Mitsukoshi (single source).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);
const FMGF_LIST = 'https://www.findmeglutenfree.com/jp/chuo-city';

// ================================================================ the vegan marshmallooow 銀座三越店
{
  const PR = 'https://zaikei.co.jp/releases/3390957/'; const RB = 'https://rurubu.jp/andmore/article/18108';
  const a = day(['10:00', '20:00']);
  put({
    id: 'tokyo_vegan_marshmallooow_ginza_mitsukoshi', name: 'the vegan marshmallooow 銀座三越店 (The Vegan Marshmallooow, Ginza Mitsukoshi)', category: 'VEGAN',
    lat: 35.671577, lng: 139.765594,
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: "Some sweets are gluten-free, not all. The brand sells both vegan and gluten-free cakes and bakes. Its gluten-free items use rice flour, with soy flour in the sponges, in place of wheat: whole zuccotto cakes, seasonal fruit tarts, a Kumamoto chestnut Mont Blanc, and the 2026 Mother's Day bouquet cake. A FindMeGlutenFree reviewer warns that the counter is listed as entirely gluten-free but only one section is. No source describes how gluten-free and wheat items are kept apart in production. Check each item's label and ask.",
    vegan_status: 'full', vegan_label: 'Fully vegan',
    vegan_detail: 'Fully vegan. A New York-born vegan sweets brand that uses no milk, butter or eggs: soy-milk cream, rice oil, and plant ingredients only. Some main products are also halal-certified.',
    hours_raw: 'Daily 10:00–20:00, Ginza Mitsukoshi main building B2 (Western confectionery); follows the department store\'s hours and closing days. Takeaway counter.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme, Ginza Mitsukoshi main building B2 — direct from Ginza Stn',
    cuisine: 'Vegan cakes and baked sweets · rice-flour gluten-free cakes · takeaway counter', cuisine_type: 'sweets',
    website: 'https://veganmarshmallooow.stores.jp/', gmaps: gm('the vegan marshmallooow 銀座三越'), menu_url: null,
    notes: "[Fully vegan · some GF · takeaway] A permanent counter of THE VG MARSHMALLOOOW NEW YORK's vegan sweets brand on the B2 sweets floor of Ginza Mitsukoshi. It began as a pop-up in 2021, when medallists from the Tokyo Olympics came by, and went permanent in August 2022. More than thirty sweets are always on offer, the brand says the largest vegan range in Japan, made with no milk, butter or eggs, using soy-milk cream and rice oil. Many are also gluten-free: rice-and-soy-flour sponges for whole zuccotto cakes sold on the day, rice-flour tart cases for seasonal fruit tarts, and a Mont Blanc of Kumamoto chestnut. The cacao-mass Fort Chocolat uses no oil at all. Seasonal cakes for Christmas and Mother's Day are taken by reservation. Not every item is gluten-free, so read the labels.",
    chef_bio: {
      chef_name: null, roles: ['brand of 株式会社THE VG MARSHMALLOOOW NEW YORK'],
      origin: 'New York-born brand; Ginza Mitsukoshi pop-up 2021, permanent counter from August 2022',
      background: 'The operator calls it a vegan sweets specialist with the largest range in Japan, selling gluten-free and vegan cakes and bakes, with halal certification on some main products. It has also run an online shop with frozen delivery.',
      philosophy: '「厳選した植物性素材の美味しさを引き出したヴィーガンスイーツ」 — vegan sweets that draw out the flavour of carefully chosen plant ingredients.',
      specialty: 'Vegan zuccotto and whole cakes; rice-flour gluten-free tarts and Mont Blanc; cacao-mass Fort Chocolat.',
      anecdotes: [
        { text: 'More than half of customers buy because the sweets taste good, not because they are vegan, the shop told the writer; athletes including Olympic medallists visited the 2021 pop-up.', source: RB },
        { text: 'The grape zuccotto sponge is 「小麦粉の代わりに米粉と大豆粉を絶妙にブレンド」, with soy-milk cream and no preservatives, shortening or margarine.', source: RB },
        { text: 'FindMeGlutenFree featured review: "Shows as entirely gluten free, but when you get there, it is just a section of the bakery."', source: FMGF_LIST },
      ],
      japanese_sources_summary: 'プレスリリース(2026年4月、株式会社THE VG MARSHMALLOOOW NEW YORK): the vegan marshmallooow 銀座三越店、本館地下2階 洋菓子、ニューヨーク発ヴィーガンスイーツ専門ブランド、国内最大級の商品数、グルテンフリーやヴィーガンのケーキ・焼き菓子、主要商品でハラール認証、母の日ヴィーガンブーケフラワーケーキ(グルテンフリー)。るるぶ&more(2022.12): 2022年8月常設オープン、常時30種類以上、牛乳・バター・卵不使用、米油、ぶどうのズコット4,350円(米粉と大豆粉、豆乳クリーム)、カカオマスフォルショコラ2,700円、ラムボール1,350円、和栗のモンブラン1,156円(米粉)。営業10:00〜20:00。',
      confidence: 'medium', sources: [PR, RB, FMGF_LIST],
    },
    cultural_comfort: { level: 'english', note: 'A department-store sweets counter; labels and staff can point out the gluten-free items. Takeaway only.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: '"Shows as entirely gluten free, but when you get there, it is just a section of the bakery." (FindMeGlutenFree featured review)', source: FMGF_LIST }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [],
      staff_allergy_handling: [],
      positives: [
        { text: 'Gluten-free sponge 「小麦粉の代わりに米粉と大豆粉」; Mont Blanc sponge and tart both rice flour.', source: RB },
        { text: 'No milk, butter or eggs in any sweet.', source: RB },
      ],
      confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '〒104-0061 東京都中央区銀座4-6-16 銀座三越 本館地下2階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Operator press release for the Ginza Mitsukoshi shop, April 2026.' },
    pin_source: `GSI 東京都中央区銀座四丁目6番16号 (go) — the Ginza Mitsukoshi building; the shop is a B2 counter inside. Single source; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [RB, PR],
    price_note: 'Prices from the December 2022 rurubu feature, so expect changes; the 2026 Mother\'s Day cake from the April 2026 release.', last_checked: TODAY, items: [
      it('ぶどうのズコット', 'budou no zukotto', 'Grape zuccotto (whole cake; rice and soy flour sponge)', '¥4,350', 'Cakes', 'gf', 'vegan', '2022; fruit changes by season.', 'zuccotto'),
      it('和栗のモンブラン', 'waguri no monburan', 'Kumamoto chestnut Mont Blanc (rice-flour sponge and tart)', '¥1,156', 'Cakes', 'gf', 'vegan', '2022.', 'mont_blanc'),
      it('季節のヴィーガンフルーツタルト', 'kisetsu no viigan furuutsu taruto', 'Seasonal vegan fruit tart (rice-flour base)', '', 'Cakes', 'ask', 'vegan', 'Rice flour per rurubu; confirm the label.', 'fruit_tart'),
      it('カカオマスフォルショコラ', 'kakao masu foru shokora', 'Cacao-mass Fort Chocolat (no oil)', '¥2,700', 'Cakes', 'ask', 'vegan', '2022.', 'fort_chocolat'),
      it('季節のチョコレート ラムボール(3個入り)', 'kisetsu no chokoreeto ramu booru', 'Seasonal chocolate rum balls (3)', '¥1,350', 'Sweets', 'ask', 'vegan', 'Contains rum. 2022.', 'rum_balls'),
      it('母の日ヴィーガンブーケフラワーケーキ', 'haha no hi viigan buuke furawaa keeki', "Mother's Day vegan bouquet flower cake (GF cocoa sponge)", '', 'Cakes', 'gf', 'vegan', 'Seasonal, 2026.', 'bouquet_cake'),
    ] }, {
    cuisine: 'ヴィーガンのケーキ・焼き菓子・米粉のグルテンフリーケーキ・テイクアウト',
    neighborhood: '銀座四丁目、銀座三越 本館地下2階。銀座駅直結',
    gf_detail: 'グルテンフリーは一部の商品のみです。ブランドはヴィーガンとグルテンフリーのケーキ・焼き菓子を扱い、グルテンフリーの商品は小麦粉の代わりに米粉(スポンジは米粉と大豆粉)を使います。ホールのズコット、季節のフルーツタルト、熊本県産和栗のモンブラン、2026年の母の日ブーケケーキなど。FindMeGlutenFreeには「全部グルテンフリーと表示されているが、実際は一部のコーナーだけ」という口コミがあります。製造で小麦の商品とどう分けているかはどの情報源にもありません。商品ごとに表示を確認し、店に尋ねてください。',
    vegan_detail: '完全ヴィーガン。ニューヨーク発のヴィーガンスイーツブランドで、牛乳・バター・卵を使わず、豆乳クリームや米油など植物性素材のみ。主要商品の一部はハラール認証も取得しています。',
    notes: '[完全ヴィーガン・一部GF・テイクアウト] 株式会社THE VG MARSHMALLOOOW NEW YORKのヴィーガンスイーツブランドの常設店で、銀座三越 本館地下2階の洋菓子売場にあります。2021年にポップアップとして始まり(東京五輪のメダリストも来店)、2022年8月に常設化。牛乳・バター・卵を使わず、豆乳クリームや米油で作るスイーツが常時30種類以上並び、国内最大級の品揃えとしています。グルテンフリーの商品も多く、米粉と大豆粉のスポンジのズコット(ホールケーキの当日販売あり)、米粉のタルトの季節のフルーツタルト、熊本県産和栗のモンブラン。カカオマスのフォルショコラは油も使いません。クリスマスや母の日のケーキは予約制。すべてがグルテンフリーではないので表示を確認してください。',
  });
}

// ================================================================ 串焼BISTRO 福みみ 銀座5
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13010575/'; const R = TB + 'dtlrvwlst/';
  const a = day(['16:30', '23:15']);
  put({
    id: 'tokyo_kushiyaki_bistro_fukumimi_ginza5', name: '串焼BISTRO 福みみ 銀座5 (Kushiyaki Bistro Fukumimi, Ginza 5)', category: 'OMNI',
    lat: 35.669616, lng: 139.765195,
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: "Some gluten-free options, as reported by diners; the restaurant itself publishes no gluten-free or allergen information. On FindMeGlutenFree (32 reviews, 13 safety ratings) this Ginza 5-chōme branch is listed with a GF menu covering skewers and salad. The featured review says staff \"speak English and help you find celiac safe meals\". Yakitori here may be seasoned with tare (soy-based sauce, usually wheat), and the menu includes other side dishes, so ask for shio (salt) skewers and confirm each dish. Fryer use is not described.",
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. A yakitori and chicken izakaya: chicken skewers (heart, bonjiri and more), horse sashimi, spicy stir-fried chicken. Pickled cucumber is one of the few plant dishes mentioned.',
    hours_raw: 'Daily 16:30–23:15 (L.O. 22:30) (Tabelog). Cashless only. Seat charge ¥660; 10% late fee for arrivals after 22:00. Two-hour seating; shoes off.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 5-chōme, Miyuki-dōri basement (Ginza YK Bldg B1F) — 3 min from Ginza Stn exit A3',
    cuisine: 'Yakitori and kushiyaki bistro-izakaya · chicken dishes · sake and shōchū', cuisine_type: 'yakitori',
    website: null, gmaps: gm('串焼BISTRO 福みみ 銀座5 銀座YKビル'), menu_url: null,
    notes: "[Some GF (diner-reported) · yakitori izakaya] A busy basement branch of the Fukumimi kushiyaki-bistro chain (a 2025 diner had been to its Shinjuku shop, and FUKUMIMI GINZA 6 is another), with counter, tables, sofa seats and sunken-kotatsu semi-private rooms for up to 56. Skewers are grilled at the counter; 2026 diners mention heart, bonjiri, horse sashimi, spicy stir-fried chicken and colourful side plates. It is popular with overseas visitors, and many of the staff are not Japanese. FindMeGlutenFree users list it with a gluten-free menu of skewers and salad, but the restaurant itself says nothing about gluten, so ask for salt-seasoned skewers. Cashless only, ¥660 seat charge, and reservations recommended.",
    chef_bio: {
      chef_name: null, roles: ['branch of the 串焼BISTRO 福みみ chain (company-run)'],
      origin: 'Ginza 5-10-9 B1F; opening year not found',
      background: 'Tabelog lists a corporate qualified-invoice number (T1040001010233) and a company training day. A 2025 diner had visited the Shinjuku branch; other Ginza branches appear on Tabelog.',
      philosophy: null,
      specialty: 'Kushiyaki and yakitori grilled at the counter; horse sashimi; sake and shōchū.',
      anecdotes: [
        { text: 'FindMeGlutenFree featured review: "They have several options and if you ask, they speak English and help you find celiac safe meals."', source: FMGF_LIST },
        { text: '"The yakitori, in particular, is grilled by the staff right at the counter… a strong focus on inbound tourism." — July 2026.', source: R + 'B532052249/' },
      ],
      japanese_sources_summary: '食べログ: 串焼BISTRO 福みみ 銀座5、銀座5-10-9 銀座YKビルB1F、毎日16:30〜23:15、56席(掘りごたつの半個室)、キャッシュレスのみ、席料660円、22時以降深夜料金10%、2時間制、靴を脱ぐ、適格請求書T1040001010233。FindMeGlutenFree: 32件の口コミ・13件の安全評価、GFメニュー(串・サラダ)、「英語で対応し、セリアックでも安全な料理を探してくれる」。',
      confidence: 'medium', sources: [TB, FMGF_LIST, R + 'B532052249/', R + 'B523531217/', R + 'B514351280/'],
    },
    cultural_comfort: { level: 'english', note: 'Many overseas guests and many non-Japanese staff; FindMeGlutenFree reviewers report English help with celiac needs. Reservations by phone; cashless; shoes off.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Skewers grilled at a shared counter grill alongside the full menu.', source: R + 'B532052249/' }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [],
      staff_allergy_handling: [{ text: '"If you ask, they speak English and help you find celiac safe meals." (FindMeGlutenFree featured review)', source: FMGF_LIST }],
      positives: [{ text: 'FindMeGlutenFree lists a GF menu (skewers, salad); 32 reviews, 13 safety ratings.', source: FMGF_LIST }],
      confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-10-9 銀座ＹＫビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (October 2026 notice); reviews into July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目10番9号 (go) 9m; address matches the FMGF listing; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523531217/', R + 'B514351280/', R + 'B531343784/', R + 'B530065326/', FMGF_LIST],
    price_note: 'No menu read. Dishes from Tabelog reviews; GF items as listed by FindMeGlutenFree users, not by the restaurant.', last_checked: TODAY, items: [
      it('', '', 'Chicken skewers, salt (shio)', '', 'Skewers', 'ask', 'no', 'FMGF users list skewers as GF; ask for salt, not tare.', 'shio_skewers'),
      it('ハツ', 'hatsu', 'Chicken heart skewer', '', 'Skewers', 'ask', 'no', '', 'heart'),
      it('ぼんじり', 'bonjiri', 'Chicken tail skewer', '', 'Skewers', 'ask', 'no', '', 'bonjiri'),
      it('馬刺し', 'basashi', 'Horse sashimi', '', 'Small plates', 'ask', 'no', 'Usually served with soy sauce.', 'basashi'),
      it('', '', 'Spicy stir-fried chicken (house special)', '', 'Small plates', 'ask', 'no', '', 'spicy_chicken'),
      it('', '', 'Whole pickled cucumber', '', 'Small plates', 'ask', 'ask', '', 'pickled_cucumber'),
      it('', '', 'Salad', '', 'Small plates', 'ask', 'ask', 'FMGF users list salad as GF; check the dressing.', 'salad'),
    ] }, {
    cuisine: '串焼き・焼鳥のビストロ居酒屋・鶏料理・日本酒と焼酎',
    neighborhood: '銀座五丁目、みゆき通りの地下(銀座YKビルB1F)。銀座駅A3出口から徒歩3分',
    gf_detail: '利用者の報告によるとグルテンフリーの選択肢があります。ただし店自身はグルテンフリーやアレルゲンの情報を出していません。FindMeGlutenFree(口コミ32件・安全評価13件)では、この銀座五丁目店にGFメニュー(串・サラダ)があるとされ、注目の口コミは「英語で対応し、セリアックでも安全な料理を探してくれる」。焼鳥はタレ(醤油ベース、通常は小麦入り)の場合があり、他の料理もあるので、塩の串を頼み一品ずつ確認してください。フライヤーの使い方は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。焼鳥と鶏料理の居酒屋で、串(ハツ・ぼんじりなど)、馬刺し、鶏の旨辛炒め。植物性の料理として口コミにあるのは、きゅうりの一本漬けくらいです。',
    notes: '[一部GF(利用者報告)・焼鳥居酒屋] 串焼ビストロのチェーン「福みみ」の地下の店で、新宿や銀座6にも店があります。カウンター・テーブル・ソファ席と掘りごたつの半個室で56席。串はカウンターで焼き、2026年の口コミではハツ、ぼんじり、馬刺し、鶏の旨辛炒め、彩りのいい一品料理が挙がっています。海外からの客が多く、外国人スタッフも多い店です。FindMeGlutenFreeではGFメニュー(串・サラダ)があるとされますが、店はグルテンについて何も示していないので、塩の串を頼んでください。キャッシュレスのみ、席料660円、予約がおすすめです。',
  });
}

// ================================================================ 銀座とんかつ はし勝つ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13289948/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '18:00']);
  put({
    id: 'tokyo_ginza_tonkatsu_hashikatsu', name: '銀座とんかつ はし勝つ (Ginza Tonkatsu Hashikatsu)', category: 'OMNI',
    lat: 35.671068, lng: 139.769391,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: "Ask, and expect a shared fryer. A FindMeGlutenFree reviewer showed a celiac card and was \"reassured that they can prepare gluten free tonkatsu\", and users there list pork ribs as gluten-free. The shop publishes nothing about gluten, so how that tonkatsu is coated and fried is unknown. Ordinary tonkatsu is coated in wheat breadcrumbs. Also on the menu: katsu curry, which has a wheat-based roux, and ramen. Treat it as unconfirmed until the shop tells you how it makes a gluten-free cutlet.",
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. A pork-cutlet counter (loin and fillet katsu, katsu curry) that also serves eel and ramen.',
    hours_raw: 'Mon–Fri 11:00–18:00 (L.O. 17:40); Sat 11:30–15:00 (L.O. 14:40); closed Sundays and holidays (Tabelog). Cards, IC and PayPay accepted. Bentō can be reserved.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['11:30', '15:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, between Higashi-Ginza, Ginza-itchōme and Shintomichō stations',
    cuisine: 'Tonkatsu and katsu curry · eel · ramen · bentō', cuisine_type: 'katsu',
    website: null, gmaps: gm('銀座とんかつ はし勝つ 銀座3-12-1'), menu_url: null,
    notes: "[GF — ask · tonkatsu] A narrow seven-seat counter facing the wall, opened in October 2023 in a former stamp shop near Higashi-Ginza. The walls are papered with menus in Japanese and English. Loin and fillet katsu sets run about ¥1,300–1,500, katsu curry about ¥1,650–1,700, and there is eel and ramen too. Diners give a ¥300 repeat coupon and cheerful service good marks, the batter and meat less so. On FindMeGlutenFree, one reviewer with a celiac card was told the kitchen can make a gluten-free tonkatsu. Nothing from the shop confirms how, so ask about the coating and the fryer before you order.",
    chef_bio: {
      chef_name: null, roles: ['tonkatsu counter (operator not named)'],
      origin: 'Ginza 3-12-1; opened 6 October 2023 (Tabelog)',
      background: 'A 2025 diner says the space used to be a stamp (hanko) shop. No source names the owner or operator.',
      philosophy: null,
      specialty: 'Loin katsu sets; katsu curry; eel.',
      anecdotes: [
        { text: 'FindMeGlutenFree featured review: "Stopped in and showed them my celiac card and they reassured me that they can prepare gluten free tonkatsu!"', source: FMGF_LIST },
        { text: 'A first visit earns a ¥300-off coupon for the next one, which one regular says takes the edge off Ginza tourist pricing.', source: R + 'B517289555/' },
      ],
      japanese_sources_summary: '食べログ: 銀座とんかつ はし勝つ、銀座3-12-1、2023年10月6日オープン、7席、月〜金11:00〜18:00、土11:30〜15:00、日祝休、カード・交通系IC・PayPay可、弁当のみ予約可。口コミ: 元はんこ屋、壁向きカウンター、英語メニュー、ロースかつ定食1,300〜1,500円、カツカレー1,650〜1,700円、うなぎ・ラーメン、次回300円引き券。FindMeGlutenFree: 口コミ8件、「セリアックのカードを見せたら、グルテンフリーのとんかつを作れると言われた」。',
      confidence: 'low', sources: [TB, FMGF_LIST, R + 'B515516228/', R + 'B517289555/', R + 'B536733845/', R + 'B526631151/'],
    },
    cultural_comfort: { level: 'english', note: 'English and romanised menus on the walls; seven counter seats facing the wall. Cards, IC and PayPay accepted.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Ordinary breaded tonkatsu and katsu curry from the same small kitchen.', source: R + 'B479782061/' }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [],
      staff_allergy_handling: [{ text: '"Showed them my celiac card and they reassured me that they can prepare gluten free tonkatsu!" (FindMeGlutenFree featured review)', source: FMGF_LIST }],
      positives: [],
      confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-12-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2025–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目12番1号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536733845/', R + 'B526631151/', R + 'B520775269/', R + 'B479782061/', R + 'B515897440/'],
    price_note: 'No menu read. Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('ロースかつ定食', 'roosu katsu teishoku', 'Loin katsu set', '¥1,300', 'Mains', 'ask', 'no', 'August 2026 (¥1,500 in April).', 'loin_katsu_set'),
      it('Aロースかつ', 'ee roosu katsu', 'A-grade loin katsu', '¥1,400', 'Mains', 'ask', 'no', 'January 2026.', 'a_loin_katsu'),
      it('カツカレー', 'katsu karee', 'Katsu curry', '¥1,700', 'Mains', 'no', 'no', 'Roux contains wheat. October 2025.', 'katsu_curry'),
      it('', '', 'Eel (unagi)', '', 'Mains', 'ask', 'no', '', 'unagi'),
      it('ラーメン', 'raamen', 'Ramen', '', 'Noodles', 'no', 'no', '', 'ramen'),
      it('弁当', 'bentou', 'Bentō (can be reserved)', '', 'Takeaway', 'ask', 'no', '', 'bento'),
    ] }, {
    cuisine: 'とんかつ・カツカレー・うなぎ・ラーメン・弁当',
    neighborhood: '銀座三丁目、東銀座・銀座一丁目・新富町の間',
    gf_detail: '要確認。フライヤーは共用と考えてください。FindMeGlutenFreeには、セリアックのカードを見せたら「グルテンフリーのとんかつを作れる」と言われたという口コミがあり、豚のリブがGFとして挙げられています。店自身はグルテンについて何も示しておらず、その衣や揚げ方は不明です。通常のとんかつは小麦のパン粉。カツカレー(ルーに小麦)やラーメンもあります。グルテンフリーのかつの作り方を店に確認するまでは未確認として扱ってください。',
    vegan_detail: 'ヴィーガンではありません。とんかつ(ロース・ヒレ、カツカレー)の店で、うなぎやラーメンもあります。',
    notes: '[GF要確認・とんかつ] 2023年10月、東銀座近くの元はんこ屋に開いた、壁向きカウンター7席の細長い店。壁には日本語と英語のメニューがびっしり。ロース・ヒレかつの定食が1,300〜1,500円ほど、カツカレー1,650〜1,700円ほどで、うなぎやラーメンも。次回300円引きのクーポンや明るい接客は好評ですが、衣や肉の評価は分かれます。FindMeGlutenFreeでは、セリアックのカードを見せた客が「グルテンフリーのとんかつを作れる」と言われています。店からの裏付けはないので、注文前に衣とフライヤーを確認してください。',
  });
}

save();
