// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 6.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first two lane ids):
//   + 茶寮京都よしつぐ Saryo Kyoto Yoshitsugu (matcha by an Urasenke teacher, wagashi and flower-anko cakes in an 1877 machiya)
//   + Ristorante dei CACCIATORI (chef Nagata's Piedmontese courses near Gion-Shijo)
//   notable (queue.mjs kyoto-missed next notable 200, first two lane ids):
//   + 祇園 鹿六 Gion Karoku (charcoal yakiniku of Kuroge wagyu in a 1927 mansion off Yasaka-dori)
//   + ぎをん 藤 Gion Fuji (Kenji Fujimoto's tempura counter, ex-Ritz-Carlton Kyoto Mizuki)
//   None is in data/kyoto.json: grep by id, name (よしつぐ, カッチャトーリ/CACCIATORI, 鹿六/Karoku, ぎをん 藤/Gion Fuji) and
//   address (西大文字町603, 常盤町158, 小松町566, 祇園町南側570-121) found none ("Yoshitsugu" hits only a chef's name in
//   another record). Group checks: each official site or listing shows a single shop. Yoshitsugu's operator is
//   株式会社インテ; Karoku's is 有限会社鹿永アソシエイツ (Tokyo; a June 2026 review: produced by the owner of a
//   long-established Tsukiji restaurant); Fuji's is 株式会社京都フードサービス (NTA corporate-number site).
//   No shop asks not to be posted (Yoshitsugu only paused Tabelog bookings during a system change).
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 茶寮京都よしつぐ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040525/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-yoshitsugu.com/';
  const NOTICE = SITE + 'uncategorized/%e3%80%90%e9%87%8d%e8%a6%81%e3%80%91%e3%81%94%e4%ba%88%e7%b4%84%e6%96%b9%e6%b3%95%e3%81%ae%e5%a4%89%e6%9b%b4%e3%81%8a%e3%82%88%e3%81%b3%e9%a3%9f%e3%81%b9%e3%83%ad%e3%82%b0%e7%b5%8c%e7%94%b1%e3%81%ae/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_saryo_yoshitsugu', name: '茶寮京都よしつぐ (Saryo Kyoto Yoshitsugu)', category: 'OMNI',
    lat: 35.004700, lng: 135.764990, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The warabi-mochi is made with 100% bracken starch (official site), but the menu also has the flower-anko cake on sponge, inaniwa udon, Mont Blanc and dango with soy glazes; no gluten information is published (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; matcha, tea, warabi-mochi and zenzai are plant-based in principle, but the flower-anko cake has cream and the udon sauce and steamer sets are not described (official site; Tabelog; 2026 reviews).',
    hours_raw: '10:00–18:00; closed Wednesday (Thursday when Wednesday is a holiday) and the day after a holiday (official site; Tabelog). No takeaway (official Instagram text on the site). Bookings by phone (seats only) or TableCheck; the flower-anko cake must be pre-ordered on TableCheck with card details; Tabelog bookings paused from 13 October 2026 during a system change (official site). A booking is cancelled if you are 15 minutes late without word (Tabelog). The cake can sell out by afternoon without a booking (August 2026). Order by touch panel; tatami seating and some counter seats (September 2026). 42 seats, a room for 8 upstairs; non-smoking; free Wi-Fi; cards, e-money and QR; menu in English, Traditional Chinese and Korean; children welcome (Tabelog). 30 seconds from Nishiki Market, 7 min from Shijo or Karasuma Stn (official site). Opened 18 December 2023 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Just off Nishiki Market — 7 min from Shijo Stn',
    cuisine: 'Matcha café and sweets house in an 1877 machiya with a garden and storehouse; matcha whisked by an Urasenke teacher, sweets made by hand in the shop every day (official site) · koicha from ¥2,420, usucha from ¥880, gyokuro (pot) ¥1,320 · 100% bracken warabi-mochi ¥1,815, ten-flavour dango set ¥1,320, Yoshitsugu zenzai (shiratama, chestnut or toasted mochi) from ¥1,320, roast-sweet-potato Mont Blanc ¥1,210 · iced Uji teas: matcha ¥880, hojicha ¥660, gyokuro ¥1,320, sencha ¥1,100 · chilled inaniwa udon with roasted-brown-rice-tea dipping broth from ¥1,650 (single ¥1,100 on another line), steamer-basket rice sets Nagomi ¥1,650, Irodori ¥1,870, Kanade ¥2,090 (official site; the page lists some items at two prices) · 花餡ケーキ, a cake topped with flowers piped in white bean paste over sponge, cream and strawberries, its flowers changing with the season (hydrangea, sunflower, cosmos, chrysanthemum, autumn leaves), by pre-order (official site; 2026 reviews) · matcha, hojicha and genmaicha puddings; soy-sauce brûlée dango (September–October 2026)',
    website: SITE, gmaps: gm('茶寮京都よしつぐ 錦'), menu_url: SITE,
    notes: "[Wagashi café · Nishiki, matcha and flower-anko cakes in an 1877 machiya] A tea house in a townhouse built in 1877, thirty seconds from Nishiki Market, with a garden and storehouse at the back and a tatami room upstairs for tea lessons. An Urasenke teacher whisks the matcha; the sweets are made in house every day — 100% bracken warabi-mochi, a ten-flavour dango set, zenzai. The star is the 花餡ケーキ: a shortcake under a garden of seasonal flowers piped in white bean paste, which sells out — pre-order it on TableCheck. Staff in kimono; order by touch panel. 10:00–18:00, closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Matcha served by an Urasenke teacher (師範), sweets by in-house artisans (official site); no one is named. Operator 株式会社インテ (invoice T3140001048195)'], origin: null,
      background: 'Per the official site: the townhouse was built about 150 years ago, in 1877 (Meiji 10), with a garden between the main house and the storehouse; the ground floor is the café and the upper floor is used for matcha classes and private groups; matcha is chosen and whisked by an Urasenke teacher who also talks about tea and Japanese culture, and a matcha experience is offered. Opened 18 December 2023 (Tabelog). The invoice number belongs to 株式会社インテ (NTA corporate-number site).',
      philosophy: 'Per the official site: sweets particular about ingredients, method and taste, all made by hand in the shop every day.',
      specialty: '花餡ケーキ; 100% bracken warabi-mochi; ten-flavour dango.',
      anecdotes: [
        { text: 'A September 2026 visitor found the street lined with people in kimono, many visitors from abroad and staff in kimono too.', source: R + 'B535903815/' },
        { text: 'An August 2026 visitor arriving at 16:00 on a Sunday found the cake sold out and advised booking early.', source: R + 'B536282587/' },
        { text: 'A September 2026 visitor found the dango smaller than expected.', source: R + 'B536439801/' },
      ],
      japanese_sources_summary: '公式サイト (kyoto-yoshitsugu.com): 京都よしつぐ、裏千家師範が自ら点てるお抹茶、甘味はすべて店内で職人が毎日手作り、約150年前 (1877年/明治10年) に建てられた京町家、1階は店舗、2階はお抹茶教室や接待・グループ用、奥に蔵とお庭、濃茶2,420円〜、薄茶880円〜、玉露 (ポット) 1,320円、太夫の本わらび餅 (本わらび粉100%) 1,815円、十種の味わい団子膳1,320円、よしつぐ善哉 (白玉/栗/焼餅) 1,320円〜、焼き芋モンブラン1,210円、冷し稲庭うどん (香ばし玄米茶つゆ) 1,650円など、せいろごはん 和1,650円・彩1,870円・奏2,090円、涼茶四撰、花餡ケーキ、10:00〜18:00、水曜定休 (祝日の場合は木曜)、テイクアウトなし、錦市場から徒歩30秒、2026年10月13日のお知らせ: 予約は TableCheck へ移行、花餡ケーキは TableCheck で事前予約 (カード情報が必要)、食べログからの予約は一時停止、お席のみは電話でも。食べログ: 甘味処・和菓子・カフェ、42席、個室 (8名)、禁煙、Wi-Fi、カード・電子マネー・QR 可、英語・繁体字・韓国語メニュー、ベジタリアンメニューあり、2023年12月18日オープン、インボイス T3140001048195 (株式会社インテ)。口コミ (2026年8〜10月、英語): 花餡ケーキ (アジサイ、ひまわり、コスモス、菊)、十種の団子、わらび餅、タッチパネルで注文、着物のスタッフ。',
      confidence: 'medium', sources: [TB, SITE, NOTICE, R + 'B534145520/', R + 'B535074570/', R + 'B535133882/', R + 'B535903815/', R + 'B536282587/', R + 'B536301663/', R + 'B536439801/', R + 'B536462260/', R + 'B536582430/', R + 'B537121909/', R + 'B537123311/', R + 'B538063775/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu in English, Traditional Chinese and Korean; order by touch panel; pre-order the flower cake on TableCheck.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西大文字町603',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (notices dated October 2026) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004700, 135.764990); cross-checked: GSI 京都府京都市中京区西大文字町603番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official site menu (prices including tax; undated). The page shows some items at two prices (e.g. koicha ¥2,420 and ¥2,200, usucha ¥880 and ¥660); the first-listed price is given.', last_checked: TODAY, items: [
      it('太夫の本わらび餅（本わらび粉100%）', '', 'Warabi-mochi of 100% bracken starch', '¥1,815', 'Sweets', 'ask', 'ask', '', 'warabi_mochi'),
      it('十種の味わい団子膳', '', 'Ten-flavour dango set', '¥1,320', 'Sweets', 'ask', 'ask', '', 'dango_10'),
      it('よしつぐ善哉', '', 'Yoshitsugu zenzai (shiratama, chestnut or toasted mochi)', '¥1,320', 'Sweets', 'ask', 'ask', 'From ¥1,320.', 'zenzai'),
      it('薄茶', '', 'Usucha (thin matcha)', '¥880', 'Matcha', '', '', 'From ¥880.', 'usucha'),
      it('香ばし玄米茶つゆで味わう冷し稲庭うどん', '', 'Chilled inaniwa udon with brown-rice-tea broth', '¥1,650', 'Meals', 'no', 'ask', '', 'inaniwa_udon'),
    ] }, {
    cuisine: '1877年の京町家の、お抹茶と甘味の茶寮。奥に庭と蔵。裏千家師範が点てるお抹茶、甘味は毎日店内で手作り (公式サイト)・濃茶2,420円〜、薄茶880円〜、玉露 (ポット) 1,320円・本わらび粉100%のわらび餅1,815円、十種の味わい団子膳1,320円、よしつぐ善哉 (白玉、栗、焼餅) 1,320円〜、焼き芋モンブラン1,210円・冷たい宇治茶: 抹茶880円、ほうじ茶660円、玉露1,320円、煎茶1,100円・香ばし玄米茶つゆの冷し稲庭うどん1,650円など (別の欄に単品1,100円)、せいろごはん 和1,650円・彩1,870円・奏2,090円 (公式サイト。一部の品はページに2通りの値段)・花餡ケーキ: スポンジ、クリーム、いちごの上に白あんで絞った季節の花 (アジサイ、ひまわり、コスモス、菊、紅葉)、要予約 (公式サイト、2026年の口コミ)・抹茶、ほうじ茶、玄米茶のプリン、醤油ブリュレの団子 (2026年9〜10月)',
    neighborhood: '錦市場のすぐそば。四条駅から徒歩7分',
    gf_detail: '要確認。わらび餅は本わらび粉100% (公式サイト) だが、スポンジの花餡ケーキ、稲庭うどん、モンブラン、醤油だれの団子もある。グルテンの情報は公開されていない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、抹茶、お茶、わらび餅、善哉は基本的に植物性だが、花餡ケーキにはクリームが入り、うどんのつゆやせいろの中身は書かれていない (公式サイト、食べログ、2026年の口コミ)。',
    notes: '[甘味処・錦、1877年の町家のお抹茶と花餡ケーキ] 錦市場から徒歩30秒、1877年に建てられた町家の茶寮。奥に庭と蔵、2階はお抹茶教室の座敷。裏千家師範がお抹茶を点て、甘味は毎日店内で手作り。本わらび粉100%のわらび餅、十種の団子、善哉。名物の花餡ケーキは、ショートケーキの上に白あんで絞った季節の花が咲き、売り切れるので TableCheck で事前予約を。着物のスタッフ、注文はタッチパネル。10時〜18時、水曜休み。',
  });
}

// ================================================================ Ristorante dei CACCIATORI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26007075/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_ristorante_dei_cacciatori', name: 'Ristorante dei CACCIATORI (リストランテ デイ カッチャトーリ)', category: 'MOM_AND_POP',
    lat: 35.004742, lng: 135.772840, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: courses only, built around handmade pasta (tajarin, agnolotti dal plin, fettuccine), bread and pastry desserts; no gluten information is published (2019–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Piedmontese courses of meat, game, fish, egg pasta, cheese fonduta and anchovy bagna cauda (2019–26 reviews).',
    hours_raw: 'Tabelog lists lunch 11:30–15:00 (last order 13:00) and dinner 18:00–24:00 (last order 21:00) under "Tue – Thu", and Monday as the closing day (open on holidays); the other days are not stated, and the shop’s own site could not be read (it returned an error), so check before going. Courses only (Tabelog). Bookings taken (Tabelog). 16 seats at four tables for four; non-smoking; cards (Tabelog). On Yamato-oji just north of Shijo; 3 min walk from Keihan Gion-Shijo Stn (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yamato-oji just north of Shijo — 3 min from Gion-Shijo Stn',
    cuisine: 'Northern Italian — Piedmontese — courses only (Tabelog), by chef Nagata, trained under Cesare Giaccone in Piedmont (October 2026) · dishes reviewers name: roasted paprika with Jerusalem-artichoke bagna cauda, tripe salad with Parmigiano, pomegranate and apple, oven-baked sea bass with hazelnut sauce, quail and bean soup (December 2024); agnolotti dal plin of beef, pork and rabbit, with black truffle (January 2024); tajarin with meat sauce, ravioli with fonduta, Ezo deer salad, pheasant with porcini and Tanba chestnuts, apple pie (November 2019); handmade fettuccine with fresh tomato, frittata (April 2023); rabbit salad, fried lamb (April 2023) · Piedmontese wines such as Arneis and Barbaresco (2024–26 reviews) · a ¥6,000 dinner course in 2019; reviewers spent ¥8,000–19,999 a head (2023–25)',
    website: 'http://cacciatori.ciao.jp', gmaps: gm('Ristorante dei CACCIATORI 京都 大和大路'), menu_url: null,
    notes: "[Italian · Gion-Shijo, Piedmont in a three-table room] A small white room with four tables on Yamato-oji just north of Shijo, where chef Nagata — trained in Piedmont under Cesare Giaccone — cooks Piedmontese courses almost single-handed and the chef's wife runs the room. Expect tajarin and agnolotti dal plin made by hand, bagna cauda, game in season (pheasant, Ezo deer), hazelnut sauces and a Barbaresco to match. Courses only; book ahead. Reviewers describe a calm, unhurried place with opera in the background. Check hours by phone.",
    chef_bio: { chef_name: 'Nagata', roles: ['Chef (an October 2026 review: "Chef Nagata")', 'Front of house: the chef’s wife, who worked for many years at the inn Tawaraya (October 2026)'], origin: null,
      background: 'Per an October 2026 review: Chef Nagata trained under Cesare Giaccone in Piedmont and worked at Michelin-starred restaurants in Italy before returning to Japan to open the restaurant; the chef’s wife, formerly of the Tawaraya inn for many years, serves. An October 2025 regular says the chef "operates almost solo". A January 2024 review mentions umai-nasu from the chef’s family garden; a December 2024 visitor met an Italian chef, Filico, visiting and explaining the dishes in Italian. A January 2020 review says the new-onion soup follows a recipe passed down from a 400-year-old inn.',
      philosophy: null, specialty: 'Tajarin; agnolotti dal plin; Piedmontese game.',
      anecdotes: [
        { text: 'An October 2025 regular noted groups of foreign tourists sometimes arriving unexpectedly and the staff handling these situations expertly.', source: R + 'B518573599/' },
        { text: 'A July 2024 lunch guest enjoyed two and a half hours with operatic music in the background.', source: R + 'B489105980/' },
        { text: 'An April 2023 first-timer expected Gion glamour and found instead a calm, cafeteria-like room that put the guest at ease.', source: R + 'B464738631/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン、東山区大和大路四条上ル常盤町158-2、京阪四条駅から徒歩3分、火〜木 11:30〜15:00 (L.O. 13:00)・18:00〜24:00 (L.O. 21:00) と記載、月曜休み (祝日は営業)、予約可、16席 (4名テーブル×4)、禁煙、カード可、北イタリアの料理、コースのみ。口コミ (2019〜2026年、英語): ピエモンテ料理、Nagata シェフ、Cesare Giaccone のもとで修業、サービスは Tawaraya に長く勤めたシェフの妻、タヤリン、アニョロッティ・ダル・プリン、バーニャカウダ、トリッパのサラダ、雉、蝦夷鹿、バルバレスコ。',
      confidence: 'low', sources: [TB, R + 'B34379058/', R + 'B423235452/', R + 'B424139363/', R + 'B464738631/', R + 'B478894649/', R + 'B489105980/', R + 'B498501818/', R + 'B518573599/', R + 'B538502885/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; courses only; confirm opening days by phone.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区大和大路四条上ル常盤町158-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2025 and October 2026; the official site returned an error on 2026-11-05.' },
    pin_source: `Tabelog ${TB} (35.004742, 135.772840); cross-checked: GSI 京都府京都市東山区常盤町158番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B423235452/'],
    price_note: 'No menu or current prices published; a November 2019 review paid ¥6,000 for a dinner course; reviewers spent ¥8,000–19,999 a head in 2023–25.', last_checked: TODAY, items: [
      it('', '', 'Piedmontese dinner course', '', 'Course', 'no', 'no', '¥6,000 in November 2019.', 'dinner_course'),
    ] }, {
    cuisine: '北イタリア、ピエモンテの料理のコースのみ (食べログ)。ピエモンテの Cesare Giaccone のもとで修業した Nagata シェフ (2026年10月)・口コミにある料理: パプリカのロースト、菊芋のバーニャカウダ、パルミジャーノ、ざくろ、りんごのトリッパのサラダ、スズキのオーブン焼きヘーゼルナッツソース、うずらと豆のスープ (2024年12月)、牛、豚、うさぎを詰めたアニョロッティ・ダル・プリン、黒トリュフ (2024年1月)、ミートソースのタヤリン、フォンドゥータのラビオリ、蝦夷鹿のサラダ、雉とポルチーニと丹波栗、アップルパイ (2019年11月)、手打ちのフェットチーネのフレッシュトマト、フリッタータ (2023年4月)、うさぎのサラダ、仔羊のフライ (2023年4月)・Arneis、Barbaresco などのピエモンテのワイン (2024〜2026年の口コミ)・2019年は夜のコース6,000円、口コミの予算は1人8,000〜19,999円 (2023〜2025年)',
    neighborhood: '四条のすぐ北の大和大路。祇園四条駅から徒歩3分',
    gf_detail: '実際にはグルテンフリーではない。コースのみで、手打ちパスタ (タヤリン、アニョロッティ・ダル・プリン、フェットチーネ)、パン、焼き菓子のデザートが中心。グルテンの情報は公開されていない (2019〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉、ジビエ、魚、卵のパスタ、チーズのフォンドゥータ、アンチョビのバーニャカウダのピエモンテのコース (2019〜2026年の口コミ)。',
    notes: '[イタリアン・祇園四条、テーブル4卓のピエモンテ] 四条のすぐ北、大和大路の白を基調にしたテーブル4卓の小さな店。ピエモンテで Cesare Giaccone に師事した Nagata シェフがほぼ一人でピエモンテのコースを作り、サービスはシェフの妻。手打ちのタヤリンやアニョロッティ・ダル・プリン、バーニャカウダ、季節のジビエ (雉、蝦夷鹿)、ヘーゼルナッツのソースに Barbaresco を。コースのみ、要予約。オペラの流れる落ち着いた店。営業日は電話で確認を。',
  });
}

// ================================================================ 祇園 鹿六
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002425/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://gionkarokuonline.com/'; const MENU = TB + 'dtlmenu/'; const COURSE = TB + 'party/';
  const CORP = 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=6010402017668';
  const H = day(['11:30', '14:30'], ['17:00', '23:00']);
  put({
    id: 'kyoto_gion_karoku', name: '祇園 鹿六 (Gion Karoku)', category: 'OMNI',
    lat: 34.998950, lng: 135.775290, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask (allergies can be noted when booking — Tabelog). Meat comes with salt or the house soy-based tare, and the menu has chijimi, cold noodles and soy-dressed yukhoe; no gluten information is published (Tabelog menu, August 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku house; namul, kimchi and salad are on the menu, but courses are built on beef and the soup is beef-bone komtang (Tabelog menu; 2026 reviews).',
    hours_raw: 'Lunch 11:30–14:30 and dinner 17:00–23:00 (last order food 22:00, drinks 22:30), Tuesday to Sunday; closed Monday, open some holiday Mondays with a weekday off instead (Tabelog; official site calendar). Lunch needs no booking but may close on some days (Tabelog; official site). A booking is cancelled 15 minutes after the time without word; children under 10 only in private rooms (Tabelog). 5% service charge; private rooms ¥3,000 or ¥5,000 (Tabelog). 58 seats: four private rooms, sunken-kotatsu seating and a counter; dessert is served in a separate room upstairs (Tabelog; 2026 reviews). Cards (Tabelog). Just off Yasaka-dori; 3 min from the Kiyomizu-michi bus stop, 12 min from Gion-Shijo Stn (Tabelog; June 2026). Opened 11 May 1999 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yasaka-dori west of Higashioji — 3 min from the Kiyomizu-michi bus stop',
    cuisine: 'Charcoal yakiniku of A4-grade-and-up Kuroge wagyu in a 1927 mansion with a tsubo-niwa garden (official site; 2026 reviews) · specialties: Yamagata beef yukhoe ¥3,500, chuck-rib "hana aburi" with fresh wasabi ¥3,300, strip-loin yaki-suki with egg ¥3,800, special negi-tan shio (wagyu tongue round hand-chopped Kujo negi) ¥4,200 · cuts: special tongue ¥4,000, kalbi ¥2,800, Omi beef ribeye ¥3,800, fillet 90 g ¥6,500, Chateaubriand 100 g ¥9,000, flap and sirloin cap ¥3,000 · Karoku salad ¥1,300, namul ¥1,300, kimchi ¥1,500, Kujo-negi and nira chijimi ¥1,800 (Tabelog menu, August 2026) · courses ¥11,000–25,000 (Premium Gion Karoku course ¥18,000); lunch charcoal courses ¥2,500 and ¥3,500 by booking (Tabelog course page) · komtang soup, cold noodles, kakigori (Uji kintoki, strawberry), Karoku mochi upstairs (2026 reviews)',
    website: SITE, gmaps: gm('祇園 鹿六 八坂通'), menu_url: MENU,
    notes: "[Yakiniku · Yasaka, wagyu over charcoal in a 1927 mansion] A charcoal yakiniku house in a 1927 mansion just off Yasaka-dori, where you take off your shoes, sit at a sunken table or in a private room looking onto a tsubo-niwa with stone lanterns and pine, and finish with kakigori in a separate room upstairs. The house specialty is negi-tan shio — wagyu tongue wrapped round hand-chopped Kujo negi — with Yamagata beef yukhoe and strip loin dipped in egg. Courses ¥11,000–25,000, cuts from ¥2,800; lunch from ¥2,500. Reviewers praise the setting and mostly the service; one June 2026 host found it short of expectations, and a May 2026 diner found it slow. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Operator 有限会社鹿永アソシエイツ (Tokyo; invoice T6010402017668); a June 2026 review says the shop is produced by the owner of a long-established Tsukiji restaurant; no one is named'], origin: null,
      background: 'Per the official site: a mansion built in 1927 (Showa 2), with A4-grade-and-up Kuroge wagyu eaten with salt, tare or the house negi mince. Opened 11 May 1999 (Tabelog). The invoice number belongs to 有限会社鹿永アソシエイツ (NTA corporate-number site). Tabelog Yakiniku WEST "Tabelog 100" 2020, 2021 and Grill WEST 2024, 2026.',
      philosophy: 'Per the official site: 美味しさの"おもてなし" — hospitality through flavour.',
      specialty: 'Special negi-tan shio; Yamagata beef yukhoe; chuck-rib hana aburi.',
      anecdotes: [
        { text: 'A December 2025 diner noted shoes off at the entrance, coats taken, and polite service to a mostly inbound clientele.', source: R + 'B519595511/' },
        { text: 'A May 2026 diner loved the food and the upstairs kakigori but found the service slow — about three hours in all.', source: R + 'B527971498/' },
        { text: 'A June 2026 host of overseas guests found the ¥18,000 course delicious but the service short of the "Japanese hospitality" seen online: greeted at once by foreign staff, drinks taken by what seemed to be student part-timers, no explanation of the cuts.', source: R + 'B531477103/' },
      ],
      japanese_sources_summary: '公式サイト (gionkarokuonline.com): 炭火焼肉 祇園 鹿六、昭和2年建造のお屋敷、厳選された A4 ランク以上の黒毛和牛、塩とタレ、特製ネギミンチ、月曜定休 (祝日営業の振替あり)、ランチは予約なしで可、毎月28〜30日は「お肉の日」(コースに1杯サービス)、2025年9月30日で駐車場サービス券の配布終了。食べログ: 焼肉・ホルモン・韓国料理、東山区八坂通東大路西入ル小松町566-25、清水道バス停から徒歩3分、火〜日 11:30〜14:30・17:00〜23:00 (L.O. 料理22:00、ドリンク22:30)、サービス料5%、個室料3,000円・5,000円、58席 (個室4、掘りごたつ8)、10歳未満は個室のみ、カード可、1999年5月11日オープン、インボイス T6010402017668 (有限会社鹿永アソシエイツ)、メニュー (英語版、2026年8月更新): Yamagata beef のユッケ3,500円、Chuck Rib Hana Aburi Yaki 3,300円、特選ネギタン塩4,200円、シャトーブリアン100g 9,000円、コース11,000〜25,000円、ランチの炭火焼きコース2,500円・3,500円。口コミ (2025年11月〜2026年8月、英語): 1927年の建物、坪庭、2階でかき氷、コムタン、冷麺、接客への評価は分かれる。',
      confidence: 'medium', sources: [TB, SITE, MENU, COURSE, CORP, R + 'B519078596/', R + 'B519595511/', R + 'B521283471/', R + 'B521992544/', R + 'B522416887/', R + 'B527971498/', R + 'B529394033/', R + 'B529457233/', R + 'B531136721/', R + 'B531477103/', R + 'B535571076/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off at the entrance; staff grill the first round; book private rooms by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂通東大路西入ル小松町566-25',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (calendar for October–December 2026) and Tabelog listing (menu August 2026); reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.998950, 135.775290); cross-checked: GSI 京都府京都市東山区小松町566番地 (lot) 79m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, COURSE],
    price_note: 'Tabelog menu, last updated 4 August 2026, and course page (prices including tax); 5% service charge.', last_checked: TODAY, items: [
      it('', '', 'Special negi-tan shio (wagyu tongue with Kujo negi)', '¥4,200', 'Wagyu', 'ask', 'no', '', 'negi_tan'),
      it('', '', 'Yamagata beef yukhoe (raw)', '¥3,500', 'Specialties', 'ask', 'no', 'Raw beef; soy-based tare.', 'yukhoe'),
      it('', '', 'Chateaubriand 100 g', '¥9,000', 'Wagyu', 'ask', 'no', 'Limited.', 'chateaubriand'),
      it('', '', 'Namul assortment', '¥1,300', 'Small dishes', 'ask', 'ask', '', 'namul'),
      it('', '', 'Premium Gion Karoku course', '¥18,000', 'Course', 'ask', 'no', '', 'premium_course'),
      it('', '', 'Lunch charcoal-grill course (booking)', '¥2,500', 'Lunch', 'ask', 'no', '', 'lunch_course'),
    ] }, {
    cuisine: '1927年のお屋敷、坪庭のある部屋で A4 ランク以上の黒毛和牛の炭火焼肉 (公式サイト、2026年の口コミ)・名物: Yamagata beef のユッケ3,500円、本わさびの Chuck Rib Hana Aburi Yaki 3,300円、卵の Special Strip Loin Yaki-suki 3,800円、手切りの Kujo ねぎを巻いた特選ネギタン塩4,200円・部位: 特選タン4,000円、カルビ2,800円、Omi beef の ribeye 3,800円、ヒレ90g 6,500円、シャトーブリアン100g 9,000円、flap と sirloin cap 3,000円・鹿六サラダ1,300円、ナムル1,300円、キムチ1,500円、Kujo ねぎとニラのチヂミ1,800円 (食べログのメニュー、2026年8月)・コース11,000〜25,000円 (プレミアム祇園鹿六コース18,000円)、ランチの炭火焼きコース2,500円・3,500円 (要予約) (食べログのコース)・コムタン、冷麺、2階のかき氷 (宇治金時、いちご)、鹿六餅 (2026年の口コミ)',
    neighborhood: '東大路の西の八坂通。清水道バス停から徒歩3分',
    gf_detail: '要確認 (アレルギーは予約時に伝えられる、食べログ)。肉は塩か醤油ベースの自家製だれ、チヂミ、冷麺、醤油のユッケもある。グルテンの情報は公開されていない (食べログのメニュー、2026年8月)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉の店。ナムル、キムチ、サラダもあるが、コースは牛肉中心で、スープは牛骨のコムタン (食べログのメニュー、2026年の口コミ)。',
    notes: '[焼肉・八坂、1927年のお屋敷の炭火の和牛] 八坂通のすぐそば、1927年のお屋敷の炭火焼肉。靴を脱ぎ、掘りごたつや個室から石灯籠と松の坪庭を眺め、最後は2階の別室でかき氷。名物は手切りの Kujo ねぎを和牛のタンで巻いたネギタン塩、Yamagata beef のユッケ、卵につける strip loin。コースは11,000〜25,000円、単品は2,800円から、ランチは2,500円から。建物と接客の評判はよいが、2026年6月の幹事は期待に届かなかったと書き、5月の客は提供が遅いと感じた。月曜休み。',
  });
}

// ================================================================ ぎをん 藤
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034159/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.gion-fuji.com/'; const EN = SITE + 'en/';
  const D = day(['17:00', '22:00']); const LD = day(['12:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_gion_fuji_tempura', name: 'ぎをん 藤 (Gion Fuji)', category: 'MOM_AND_POP',
    lat: 35.002347, lng: 135.774444, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a tempura course, and the shop states it cannot accommodate gluten-free requests (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the shop states it cannot accommodate vegan, vegetarian or halal requests (Tabelog).',
    hours_raw: 'Dinner 17:00–22:00 (last food order 20:00); closed Sunday and holidays, irregularly (official site). Tabelog adds lunch 12:00–15:00 (last order 13:00) on Tuesday, Thursday and Saturday, dinner Tuesday to Saturday and holidays, closed Sunday and Monday, with occasional Monday openings on the booking calendar; a lunch visit is recorded in January and August 2026. Booking via TableCheck or phone; cancellation 50% the day before, 100% on the day; allergies and dislikes in advance; children 6 and over who order a course (Tabelog; official site). 10% service charge (official site; Tabelog). 8 counter seats and a table room for 4 behind lattice doors; non-smoking; free Wi-Fi; cards (Tabelog). 5 min walk from Gion-Shijo Stn (Tabelog). Opened April 2020 (official site).',
    hours: { 1: LD, 2: D, 3: LD, 4: D, 5: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion south of Shijo, among the old houses — 5 min from Gion-Shijo Stn',
    cuisine: 'Tempura counter of seasonal seafood, vegetables and meat, fried in first-press safflower oil and served piece by piece with salts, sauces and condiments (official site) · omakase tempura courses ¥17,600, ¥19,800, ¥23,100 and ¥25,300, tax included, plus 10% service (official site); lunch course Benikikyo ¥23,100 (August 2026) · seasonal pieces (official site): spring — shirauo, clam, aburame, wild greens, Kyoto bamboo shoot; summer — hamo, young ayu, aori-ika, kisu, white corn, Kamo eggplant, manganji pepper; autumn — hamo and matsutake roll, tachiuo, ginkgo, chestnut, wild maitake; winter — fugu, seko crab, kumoko, Horikawa burdock, Shogoin turnip · sesame tofu with sea urchin; finish with tendon, ochazuke or egg yolk with caviar (2025–26 reviews) · champagne from ¥12,000; wine, sake, shochu and whisky chosen by a sommelier (official site)',
    website: SITE, gmaps: gm('ぎをん 藤 天ぷら 祇園'), menu_url: SITE,
    notes: "[Tempura · Gion, a Ritz-Carlton tempura chef's own counter] An eight-seat tempura counter on a street of old Gion houses, opened in 2020 by Kenji Fujimoto, former head chef of Tempura Mizuki at The Ritz-Carlton Kyoto (one Michelin star three years running). Each piece is fried in first-press safflower oil and served as it comes out: hamo and young ayu in summer, a hamo-and-matsutake roll in autumn, fugu and seko crab in winter, and a sesame tofu with sea urchin. Finish with tendon, ochazuke or egg yolk with caviar. Courses ¥17,600–25,300 plus 10% service; a sommelier pairs wine or sake. No vegan, vegetarian, halal or gluten-free requests. Booking only.",
    chef_bio: { chef_name: 'Kenji Fujimoto (藤元 健司)', roles: ['Chef-owner (official site: 店主 / "Chef-owner Kenji Fujimoto")'], origin: null,
      background: 'Per the official site: The Ritz-Carlton Osaka, Japanese restaurant Hanagatami (1996–2007); 鉄板・てんぷら 義 北新地 (2007–2013); head chef of Tempura Mizuki at The Ritz-Carlton Kyoto (2013–2019), which held one Michelin star for three consecutive years from the 2018 guide; opened ぎをん藤 in April 2020. The invoice number belongs to 株式会社京都フードサービス (NTA corporate-number site). Tabelog Tempura "Tabelog 100" 2023 and 2025.',
      philosophy: 'Per the official site: tempura fried a piece at a time, timed in front of the guest, in light first-press safflower oil so that the meal never feels heavy.',
      specialty: 'Seasonal omakase tempura; sesame tofu with sea urchin; tendon to finish.',
      anecdotes: [
        { text: 'An August 2025 diner at the table found the tempura not piping hot, perhaps because of the table seat or the air conditioning, and planned to sit at the counter next time.', source: R + 'B511244307/' },
        { text: 'A December 2025 dinner began with grilled fugu and ankimo, then prawn heads with three salts — Awaji, Sea of Japan and a black pepper salt.', source: R + 'B519664620/' },
        { text: 'A July 2026 diner who booked the same day wished for more Kyoto ingredients and found the value modest for the price.', source: R + 'B532317581/' },
      ],
      japanese_sources_summary: '公式サイト (gion-fuji.com): 2020年4月に開店した京都祇園の天ぷら「ぎをん藤」、旬の魚介や野菜、お肉の天ぷらを御影石のカウンターで、目の前で揚げたてを一品ずつ、べに花油の一番搾りのみ、春: 白魚、蛤、油目桜巻き、山菜、京筍、白アスパラ、夏: 鱧、小鮎、アオリ烏賊、鱚、白とうもろこし、賀茂茄子、万願寺とうがらし、秋: 鱧松茸巻き、太刀魚、銀杏、栗、天然舞茸、冬: 河豚、セコ蟹、雲子、堀川牛蒡、聖護院蕪、京かんざし、おまかせ天ぷらコース 17,600円・19,800円・23,100円・25,300円 (税込・サービス料別)、シャンパーニュ12,000円〜、8席のカウンターと4名の個室、店主 藤元 健司 (ザ・リッツ・カールトン大阪 日本料理 花筐、鉄板・てんぷら 義 北新地、ザ・リッツ・カールトン京都 天麩羅 水暉 料理長、ミシュランガイド2018年版から3年連続一つ星)、17:00〜22:00 (L.O. 20:00)、日・祝休 (不定休)、予約は TableCheck。食べログ: 天ぷら・日本料理、東山区祇園町南側570-121、火・木・土 12:00〜15:00、火〜土・祝 17:00〜22:00、日・月休み、ヴィーガン・ベジタリアン・ハラール・グルテンフリーは対応不可、キャンセル料は前日50%・当日100%、6歳以上でコースを注文できる子供のみ、サービス料10%、12席、天ぷら百名店 2023・2025、インボイス T9130001081365 (株式会社京都フードサービス)。口コミ (2025年8月〜2026年11月、英語): 雲丹をのせた胡麻豆腐、天丼、ランチのコース Benikikyo 23,100円。',
      confidence: 'medium', sources: [TB, SITE, EN, R + 'B511244307/', R + 'B513031539/', R + 'B517973907/', R + 'B519664620/', R + 'B520520286/', R + 'B521974322/', R + 'B532317581/', R + 'B533527666/', R + 'B537159320/', R + 'B538123694/', R + 'B538644580/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book on TableCheck (English site available); state allergies ahead; no dietary substitutions.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-121',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002347, 135.774444); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 144m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, EN, R + 'B533527666/'],
    price_note: 'Official site (prices including tax, 10% service extra); the site does not say which course is lunch or dinner. An August 2026 lunch course was ¥23,100.', last_checked: TODAY, items: [
      it('おまかせ天ぷらコース', '', 'Omakase tempura course', '¥17,600', 'Course', 'no', 'no', 'Courses ¥17,600, ¥19,800, ¥23,100, ¥25,300.', 'omakase_17600'),
      it('おまかせ天ぷらコース', '', 'Omakase tempura course', '¥25,300', 'Course', 'no', 'no', '', 'omakase_25300'),
    ] }, {
    cuisine: '旬の魚介、野菜、お肉の天ぷらを、べに花油の一番搾りで揚げ、塩、ソース、薬味とともに一品ずつ出すカウンター (公式サイト)・おまかせ天ぷらコース17,600円、19,800円、23,100円、25,300円 (税込、サービス料10%別) (公式サイト)、ランチのコース Benikikyo 23,100円 (2026年8月)・季節の天ぷら (公式サイト): 春は白魚、蛤、油目、山菜、京筍、夏は鱧、小鮎、アオリ烏賊、鱚、白とうもろこし、賀茂茄子、万願寺とうがらし、秋は鱧松茸巻き、太刀魚、銀杏、栗、天然舞茸、冬は河豚、セコ蟹、雲子、堀川牛蒡、聖護院蕪・雲丹をのせた胡麻豆腐。締めは天丼、お茶漬け、卵黄とキャビアから (2025〜2026年の口コミ)・シャンパーニュ12,000円〜、ソムリエが選ぶワイン、日本酒、焼酎、ウイスキー (公式サイト)',
    neighborhood: '四条の南、祇園の町家の通り。祇園四条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。天ぷらのコースで、グルテンフリーの要望には対応できないと店が明記している (食べログ)。',
    vegan_detail: 'ヴィーガン不可。ヴィーガン、ベジタリアン、ハラールの要望には対応できないと店が明記している (食べログ)。',
    notes: '[天ぷら・祇園、リッツ・カールトンの天ぷら料理長の店] 祇園の町家の通りにある8席の天ぷらのカウンター。ザ・リッツ・カールトン京都の天麩羅 水暉の料理長 (3年連続ミシュラン一つ星) だった藤元 健司さんが2020年に開いた。べに花油の一番搾りで一品ずつ揚げ、夏は鱧と小鮎、秋は鱧松茸巻き、冬は河豚とセコ蟹、雲丹をのせた胡麻豆腐も。締めは天丼、お茶漬け、卵黄とキャビアから。コースは17,600〜25,300円 (サービス料10%別)、ソムリエがワインや日本酒を合わせる。ヴィーガン、ベジタリアン、ハラール、グルテンフリーは対応不可。完全予約制。',
  });
}

save();
