// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 6.
//   + MARU'S BAR マルズ・バー (couple-run wine bar with yoshoku since 1994; moved upstairs in the same building, spring 2026)
//   + でん六 Denroku (8-seat oden counter open to 3 am on weekdays; Tabelog opening 1999)
//   + 炭屋 Sumiya (10-seat yakitori course counter of the SAWAICHI GROUP; sommelier owner)
//   + Sakura (wood-fired pizza and Sukumo Bay seafood trattoria with wine shop, bakery and sweets in one building)
//   Chain check. MARU'S BAR, Denroku: one shop each. Sumiya: SAWAICHI GROUP (sawaichi.jp lists 澤いち 本店, 炭屋, 鰻いち黒船);
//   sister 鰻いち黒船 is in data (tokyo_una_ichi_kurofune_roppongi) — a three-shop local group, cleared by the integrator.
//   Sakura: its Tabelog page names an affiliated wagyu steak kaiseki in the same building; not in data. None is in
//   data/tokyo.json by name, Tabelog id or address. Four of these sit in the crowded 六本木3-9 block: MARU'S BAR shares
//   street number 3-9-3 with Tsukiyo ni Kome no Meshi Takei (tokyo_tsukiyo_ni_kome_no_meshi_takei, address_ja
//   "東京都港区六本木3-9-3 第2ヴィレッジビル B1F"), Denroku's Tabelog point (3-9-4) is ~1 m from Roppongi Kinme Sushi
//   (tokyo_roppongi_kinme_sushi), and Sumiya's (3-9-12) matches Una Ichi Kurofune (address_ja "東京都港区六本木3-9-12 源氏ビル 1F");
//   each new pin is offset 8 m west of its Tabelog point. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ MARU'S BAR
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13001960/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://marus-bar.com/'; const FOOD = SITE + 'food.html'; const ACCESS = SITE + 'access.html';
  const H = day(['18:00', '23:30']);
  put({
    id: 'tokyo_marus_bar_roppongi', name: "MARU'S BAR (マルズ・バー)", category: 'OMNI',
    lat: 35.663729, lng: 139.734117, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. Many signatures are breaded or wheat-based: crab cream croquettes, minced-meat cutlet, beef cutlet with demi-glace, meat-sauce spaghetti, omurice and all-you-can-eat bread (official menu; 2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Western-style menu of meat, seafood, cheese and egg; the tomato-free ratatouille, olives and pickles are among the few plant dishes (official menu).',
    hours_raw: 'Mon–Sat 18:00–23:30 (Tabelog last order 22:00); closed Sundays, with irregular extra closures — Tabelog says often Mondays; the shop posts monthly holidays on its site (official site; Tabelog). The bar moved from the 1F to an upper floor of the same building in spring 2026 (official notices "3階移転のお知らせ", 9 April 2026; Tabelog says the 3.5th floor). Cancellation fees the day before and on the day. 10 seats: 6 at the counter and one table for 4. Non-smoking. Cards; no e-money or QR. Opened in 1994 (November 2025 review); "30 years" in the Tabelog shop text.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 3-9-3, 第2六本木ビレッジビル (now upstairs; was 1F) — 3 min from Roppongi Stn exit 3 (Hibiya line) or exit 5 (Oedo line)',
    cuisine: 'Wine bar with home-style Western cooking; dishes sized for two, half portions on request (official site) · wine-flight sets chosen from the sommelier\'s bottles: 3 glasses ¥5,000, 5 glasses ¥7,000 (June 2024) · cheese from a board of about 20, ¥800 a choice (official menu) · from the official menu: pickles in シークァーサー citrus ¥600; three olives ¥600; tomato-free ratatouille ¥1,400; 平田牧場 prosciutto ¥1,500; foie gras terrine with mango ¥2,000; white asparagus baked with 吉田牧場 caciocavallo ¥2,200; potato salad ¥800; 山形 wagyu carpaccio ¥2,000; crab cream croquettes ¥2,000; minced-meat cutlet ¥2,600 (with foie gras inside ¥3,400); 山形 beef steak or cutlet ¥3,400; house wagyu oxtail stew ¥3,500; karasumi and cabbage pasta, kissaten-style meat-sauce spaghetti ¥2,200; omurice ¥2,000; ricotta ice cream ¥1,000 · all-you-can-eat bread (February 2025)',
    website: SITE, gmaps: gm("MARU'S BAR 六本木3-9-3"), menu_url: FOOD,
    notes: "[Wine bar · Roppongi, a couple-run wine bar with yoshoku since 1994] A ten-seat wine bar run, reviewers say, by a couple — a chef in the kitchen and a sommelier who pours — for some 30 years, now in a larger, chic room upstairs in the same building with a grape mural over the counter (it moved from the ground floor in spring 2026). You build your own flight: three or five glasses picked from a handful of open bottles, from Champagne or sherry through whites and reds to a dessert wine, with a board of about 20 cheeses. The food is proper Western home cooking sized for two: crab cream croquettes, a minced-meat cutlet (one version wraps foie gras), 山形 beef cutlet with demi-glace, the house wagyu oxtail stew, kissaten-style meat-sauce spaghetti, omurice, and a ratatouille made without tomato, as the chef prefers. Regulars of many years praise the unpretentious master and madam. Closed Sundays and some other days; check the site.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Sommelier (unnamed)'], origin: 'Opened 1994 (November 2025 review)',
      background: 'Reviewers describe a shop run by a couple: in January 2024 "a chef and … wife, a sommelier"; in December 2025 "run by a couple"; in November 2025 "the unpretentious master and madam"; in August 2026 "the lovely madam" recommending wines and "the master" with "a wonderful artisan spirit". A February 2025 diner learned the chef makes ratatouille without tomatoes on principle. The Tabelog shop text says 30 years. Neither is named in the sources read.',
      philosophy: 'A wine bar where you can try many wines in one evening, casually and comfortably (official site).', specialty: 'Self-built wine flights; crab cream croquettes; wagyu oxtail stew.',
      anecdotes: [
        { text: '"For example, with the 5-glass set, you can choose one type of Champagne or Sherry, one white wine, two red wines, and one dessert wine from a selection of 4 to 8 bottles." — May 2024, 30th-anniversary year.', source: R + 'B486153970/' },
        { text: '"It turns out that the chef has a principle of not using tomatoes, and each vegetable is carefully prepared to bring out its unique flavor." — February 2025, ratatouille.', source: R + 'B501779516/' },
        { text: '"While chatting with the lovely madam, I was recommended wines that paired well with my meal…" — August 2026, after the move upstairs.', source: R + 'B533401279/' },
      ],
      japanese_sources_summary: '公式サイト (marus-bar.com): MARU\'S Bar マルズバー、一夜のうちにさまざまなワインを気軽に心地よく体験できるワインバー、港区六本木3-9-3 第2六本木ビレッジビル1F (2026年4月9日「3階移転のお知らせ」)、月〜土18:00〜23:30、日曜定休・不定休あり、毎月の休みを告知。料理は一人前で二人分が目安、ハーフも可: シークァーサーのピクルス600円、オリーブ3種600円、トマトを加えないラタトゥイユ1,400円、平田牧場の生ハム1,500円、フォアグラのテリーヌ2,000円、ホワイトアスパラと吉田牧場カチョカバロのオーブン焼き2,200円、ポテトサラダ800円、山形産和牛カルパッチョ2,000円、カニクリームコロッケ2,000円、メンチカツレツ2,600円 (フォアグラ入り3,400円)、山形産牛のステーキ・カツレツ3,400円、名物の和牛テールシチュー3,500円、カラスミとキャベツのパスタ、喫茶店風ミートソース2,200円、オムライス2,000円、チーズ20種から1種800円。食べログ: 10席 (カウンター6、テーブル1)、禁煙、カード可、30年。口コミ(2024年1月〜2026年9月): 夫婦で営む、グラスワインの3杯・5杯のセット、1994年開業、パンはおかわり自由、上の階に移転。',
      confidence: 'medium', sources: [TB, SITE, FOOD, ACCESS, R + 'B477635355/', R + 'B486153970/', R + 'B487255635/', R + 'B501779516/', R + 'B508052552/', R + 'B518716696/', R + 'B518931870/', R + 'B532154990/', R + 'B533401279/', R + 'B536444265/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Wines explained and chosen with the sommelier at the counter; no English menu is listed on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都港区六本木3-9-3 第2六本木ビレッジビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with notices into October 2026 (moved to an upper floor of the same building in spring 2026); Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.663729, 139.734207), 3 m from Tsukiyo ni Kome no Meshi Takei (tokyo_tsukiyo_ni_kome_no_meshi_takei, address_ja "東京都港区六本木3-9-3 第2ヴィレッジビル B1F", same street number), so offset 8 m west; GSI 東京都港区六本木三丁目9番 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [FOOD, R + 'B487255635/'],
    price_note: 'Food prices from the official menu page (read November 2026); wine-flight prices from a June 2024 review. Dishes are sized for two.', last_checked: TODAY, items: [
      it('定番！カニクリームコロッケ', '', 'Crab cream croquettes, tartare or tomato sauce', '¥2,000', 'Mains', 'no', 'no', 'Official menu.', 'crab_croquette'),
      it('特製！メンチカツレツ', '', 'Minced-meat cutlet with demi-glace', '¥2,600', 'Mains', 'no', 'no', 'Official menu; with foie gras inside ¥3,400.', 'menchi'),
      it('マルズ名物！和牛テールシチュー', '', 'House wagyu oxtail stew', '¥3,500', 'Mains', 'ask', 'no', 'Official menu.', 'oxtail_stew'),
      it('トマトを加えないラタティウィユ', '', 'Ratatouille made without tomato', '¥1,400', 'Starters', 'ask', 'ask', 'Official menu.', 'ratatouille'),
      it('オムライス', '', 'Omurice with pickles', '¥2,000', 'Pasta & rice', 'ask', 'no', 'Official menu.', 'omurice'),
      it('チーズ各種', '', 'Cheese, one from a board of about 20', '¥800', 'Cheese', 'ask', 'no', 'Official menu.', 'cheese'),
      it('', '', 'Wine flight, 5 glasses', '¥7,000', 'Wine', '', '', 'June 2024 review; 3 glasses ¥5,000.', 'wine_flight'),
    ] }, {
    cuisine: '家庭的な洋食のワインバー。料理は二人分が目安、ハーフも可 (公式サイト)・ソムリエが開けたボトルから選ぶグラスワインのセット: 3杯5,000円、5杯7,000円 (2024年6月)・チーズは20種から1種800円 (公式メニュー)・公式メニューから: シークァーサーのピクルス600円、オリーブ3種600円、トマトを加えないラタトゥイユ1,400円、平田牧場の生ハム1,500円、マンゴーを添えたフォアグラのテリーヌ2,000円、ホワイトアスパラと吉田牧場カチョカバロのオーブン焼き2,200円、ポテトサラダ800円、山形産和牛のカルパッチョ2,000円、カニクリームコロッケ2,000円、メンチカツレツ2,600円 (フォアグラ入り3,400円)、山形産牛のステーキかカツレツ3,400円、名物の和牛テールシチュー3,500円、カラスミとキャベツのパスタ、喫茶店風のミートソース2,200円、オムライス2,000円、自家製リコッタのアイス1,000円・パンはおかわり自由 (2025年2月)',
    neighborhood: '六本木3-9-3 第2六本木ビレッジビル (現在は上の階、以前は1階)。六本木駅3番出口 (日比谷線) か5番出口 (大江戸線) から徒歩3分',
    gf_detail: '要確認。グルテンフリーの説明はない。カニクリームコロッケ、メンチカツ、デミグラスのビーフカツレツ、ミートソース、オムライス、おかわり自由のパンなど、名物の多くが衣や小麦を使う (公式メニュー、2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉、魚介、チーズ、卵の洋食で、トマトを加えないラタトゥイユ、オリーブ、ピクルスが数少ない植物性の料理 (公式メニュー)。',
    notes: '[ワインバー・六本木、1994年から夫婦で営む洋食のワインバー] 口コミによれば、厨房のシェフと注ぐソムリエの夫婦が約30年営む10席のワインバー。2026年春に同じビルの1階から上の階に移り、カウンターの前にぶどうの壁画がある広く落ち着いた部屋になった。グラスワインは自分で組み立てる方式で、開いている数本からシャンパンかシェリー、白、赤、デザートワインまで3杯か5杯を選び、約20種のチーズも。料理は二人分が目安の本格的な家庭の洋食で、カニクリームコロッケ、メンチカツ (フォアグラを包んだものも)、デミグラスの山形産牛カツレツ、名物の和牛テールシチュー、喫茶店風のミートソース、オムライス、シェフのこだわりでトマトを使わないラタトゥイユ。長年の常連は気取らないマスターとマダムをほめる。日曜と不定休あり、公式サイトで確認を。',
  });
}

// ================================================================ でん六
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13080509/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '03:00']);
  put({
    id: 'tokyo_denroku_roppongi', name: 'でん六 (Denroku)', category: 'OMNI',
    lat: 35.663842, lng: 139.734144, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. The oden includes chikuwabu (a wheat-flour cake) and fish cakes, and the broth\'s seasoning is not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden simmered in a dashi broth, with beef tendon, fish cakes and egg; daikon, konnyaku and tamakonnyaku come from the same pot.',
    hours_raw: 'Mon–Fri 18:00–03:00; closed weekends and public holidays (Tabelog). Smoking allowed at every seat, so no one under 20 is admitted (Tabelog). Bookings taken; a January 2025 diner found it full even on a weekday. 8 seats at the counter (up to 10 if squeezed); private hire up to 20. Cards, IC/e-money and QR (PayPay, d Barai, Rakuten Pay). Takeaway. Opened 1 October 1999 (Tabelog); a June 2020 reviewer noted a change of owner.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 3-9-4, in a back alley — 3 min from Roppongi Stn',
    cuisine: '"Not quite Kansai, not quite Kanto": Denroku\'s own Roppongi oden, with ingredients from a long-established oden maker (Tabelog shop text) · prices in February 2026: daikon, egg, chikuwabu or atsuage ¥330 each; ganmodoki ¥450; Hinai chicken poached with ponzu ¥580; Kuro Kirishima or Akatsuki shochu ¥880 · also kombu with roe, celery, yam, mochi kinchaku, fish cakes, beef tendon, tamakonnyaku, fried eggplant in broth, a "black oden" (2024–2026 reviews) · oden broth mixed with shochu (January 2025)',
    website: 'https://denroku.com', gmaps: gm('でん六 六本木3-9-4'), menu_url: TB + 'dtlmenu/',
    notes: "[Oden · Roppongi, a late-night oden counter since 1999] Tucked on a landing in a back alley a few minutes from Roppongi Station, an eight-seat L-shaped counter that serves its own Roppongi oden — neither Kansai nor Kanto style, the shop says — until 3 am on weeknights. The broth is clear and gentle; a February 2026 diner thought it closer to Kanto style and kaiseki-refined. Daikon, egg, chikuwabu and atsuage are ¥330 a piece; there is also tamakonnyaku, beef tendon, mochi kinchaku and side dishes such as Hinai chicken with ponzu. Many come after a night out, and one reviewer of 25 years still brings employees. The owner often works alone and is quiet until you start talking. A reviewer's headline says Ken Shimura used to come here. Smoking throughout, so adults only; closed weekends.",
    chef_bio: { chef_name: null, roles: ['Owner at the counter (unnamed)'], origin: 'Opened 1 October 1999 (Tabelog)',
      background: 'A June 2020 reviewer noted the owner had changed. A May 2025 reviewer has come for over 25 years. In February 2026 the owner cooked behind the counter while a hostess waited outside; in September 2026 a diner saw the owner run the shop alone. An April 2026 review is headed "Oden Shop Frequently Visited by Ken Shimura".',
      philosophy: '"Not quite Kansai style, not quite Kanto style, but the original Roppongi Oden by Denroku" (Tabelog shop text).', specialty: 'Clear-broth oden until 3 am.',
      anecdotes: [
        { text: '"The oden was a classic Kanto-style, not the dark soy sauce type, but rather a clear broth that was rich in flavor and elegantly prepared." — February 2026, after midnight.', source: R + 'B523573035/' },
        { text: '"The owner may be quiet, but once you start a conversation, it becomes an enjoyable chat—just like at a food stall." — April 2026.', source: R + 'B528381431/' },
        { text: '"The owner was very efficient… and every dish was delicious." — September 2026.', source: R + 'B535528251/' },
      ],
      japanese_sources_summary: '食べログ: でん六、港区六本木3-9-4、六本木駅から徒歩3分、月〜金18:00〜翌3:00、土日祝休み、全席喫煙可のため20歳未満は入店不可、カウンター8席 (詰めれば10席)、貸切20名まで、カード・電子マネー・QR可、テイクアウト、1999年10月1日オープン。店の紹介: 関西風でも関東風でもない「でん六オリジナル六本木おでん」、老舗のおでん種、大根や玉子、薬味。口コミ(2020年6月〜2026年9月): オーナーが代わった、大根・玉子・ちくわぶ・厚揚げ330円、がんもどき450円、Hinai の鶏のポン酢580円、焼酎880円、昆布、セロリ、山芋、餅巾着、牛すじ、玉こんにゃく、出汁割り、25年通う客、静かな店主、Ken Shimura が通ったという見出し。',
      confidence: 'medium', sources: [TB, R + 'B427536446/', R + 'B496520927/', R + 'B499398055/', R + 'B504697483/', R + 'B513512110/', R + 'B523573035/', R + 'B528381431/', R + 'B531537708/', R + 'B535528251/', R + 'B536830235/'] },
    cultural_comfort: { level: 'japanese', note: 'A small counter with a wall menu; no English menu is listed on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都港区六本木3-9-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026. The shop site (denroku.com) did not respond on 2026-11-01.' },
    pin_source: `Tabelog ${TB} (35.663842, 139.734232), ~1 m from Roppongi Kinme Sushi (tokyo_roppongi_kinme_sushi, 3-9-4), so offset 8 m west; GSI 東京都港区六本木三丁目9番 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523573035/'],
    price_note: 'Prices from a February 2026 review (likely before a late-night charge the diner estimated at about 10%).', last_checked: TODAY, items: [
      it('', '', 'Oden: daikon, egg, chikuwabu or atsuage (each)', '¥330', 'Oden', 'ask', 'no', 'February 2026 review; chikuwabu is wheat.', 'oden_330'),
      it('', '', 'Oden: ganmodoki', '¥450', 'Oden', 'ask', 'no', 'February 2026 review.', 'ganmodoki'),
      it('', '', 'Hinai chicken poached, with ponzu', '¥580', 'Sides', 'ask', 'no', 'February 2026 review.', 'hinai_ponzu'),
      it('', '', 'Shochu (Kuro Kirishima, Akatsuki)', '¥880', 'Drinks', '', '', 'February 2026 review.', 'shochu'),
    ] }, {
    cuisine: '関西風でも関東風でもない、でん六オリジナルの六本木おでん。おでん種は老舗のもの (食べログの店の紹介)・2026年2月の値段: 大根、玉子、ちくわぶ、厚揚げ各330円、がんもどき450円、Hinai の鶏のポン酢580円、焼酎 (Kuro Kirishima、Akatsuki) 880円・ほかに子持ち昆布、セロリ、山芋、餅巾着、練り物、牛すじ、玉こんにゃく、揚げ茄子のおでん、「黒おでん」(2024〜2026年の口コミ)・おでんの出汁で割る焼酎 (2025年1月)',
    neighborhood: '六本木3-9-4、裏路地。六本木駅から徒歩3分',
    gf_detail: '要確認。グルテンフリーの説明はない。おでんには小麦粉のちくわぶや練り物があり、出汁の味付けの説明はない。',
    vegan_detail: 'ヴィーガン不可。出汁で煮るおでんで、牛すじ、練り物、玉子も同じ鍋。大根、こんにゃく、玉こんにゃくも同じ鍋から。',
    notes: '[おでん・六本木、1999年からの深夜のおでんカウンター] 六本木駅から数分、裏路地の踊り場のような場所にあるL字カウンター8席。関西風でも関東風でもないと店が言う六本木のおでんを、平日は朝3時まで出す。出汁は澄んでやさしく、2026年2月の客は関東風に近く懐石のように上品と感じた。大根、玉子、ちくわぶ、厚揚げは1つ330円、玉こんにゃく、牛すじ、餅巾着、Hinai の鶏のポン酢などの一品も。飲んだあとに寄る客が多く、25年通う客はいまも社員を連れてくる。店主は一人で切り盛りすることが多く、話しかけるまでは無口。ある口コミの見出しにはKen Shimura が通った店とある。全席喫煙可のため20歳以上のみ、土日休み。',
  });
}

// ================================================================ 炭屋
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13257323/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://sawaichi.jp/index.html';
  const H = day(['18:00', '23:30']);
  put({
    id: 'tokyo_sumiya_roppongi', name: '炭屋 (Sumiya)', category: 'OMNI',
    lat: 35.663957, lng: 139.734089, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. Skewers are seasoned with salt or tare and condiments, the course includes kaiseki-style small dishes, and it ends with an oyakodon (October 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken-skewer course with seafood and pork dishes; ginkgo and a tomato with tofu sauce are the only plant dishes named.',
    hours_raw: 'Mon–Sat 18:00–23:30 (last order 23:00, last entry 22:00); closed Sundays and public holidays (Tabelog). For visits after 20:30, phone first (Tabelog). À la carte may be possible at some times (July 2026). 10% service charge. 10 counter seats; private hire up to 20. Non-smoking. Cards; no e-money or QR. Leftovers can be packed to take home (June 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 3-9-12 (Una Ichi Kurofune, a sister shop, is in the same building) — 2 min from Roppongi Stn exit 5',
    cuisine: 'Yakitori course with premium chicken from all over Japan plus kaiseki-style and seafood dishes (Tabelog shop text) · Sumiya skewer course, 17 items, ¥12,000 before tax and service (¥14,520 all in); the same with a half bottle of KENZO ESTATE "Asatsuyu" or "Rindo" ¥18,000 (¥21,780) (Tabelog) · over 10 kinds of premium chicken, a different bird for each skewer (May 2026); negima, chicken with condiments, offal skewers, ginkgo (October 2026); LYB pork from Shizuoka; liver pâté (October 2026); eel hand roll, abalone with eggplant, tomato with tofu sauce (July 2026); oyakodon with chicken soboro to finish · sake and a wine list chosen by the sommelier owner, including Kenzo Estate',
    website: SITE, gmaps: gm('炭屋 六本木3-9-12'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakitori · Roppongi, a sommelier's yakitori counter from the Sawaichi group] A calm, pure-Japanese ten-seat counter in the same building as its sister eel shop Una Ichi Kurofune, part of the group behind the Roppongi kaiseki restaurant 澤いち. The ¥12,000 course (¥14,520 with tax and service) runs to 17 items: skewers grilled over charcoal from more than ten brands of chicken, each chosen for its cut, between kaiseki-style small dishes — an eel hand roll, abalone with eggplant, a tomato with tofu sauce — and an oyakodon to finish. The owner is a certified sommelier, and the wine list leans on Kenzo Estate, with courses that include a half bottle. Diners in 2026 found the owner friendly and the portions generous (leftovers can go home with you); one in August thought it a little overpriced. Phone ahead after 8:30 pm.",
    chef_bio: { chef_name: null, roles: ['Owner, certified sommelier (July 2026 review)'], origin: 'SAWAICHI GROUP, Roppongi (official site)',
      background: 'One of three Roppongi shops of the SAWAICHI GROUP, with 澤いち 本店 and 鰻いち黒船 (sawaichi.jp; an October 2026 review calls it part of the "Sawaiichi group"). A July 2026 diner writes that the owner is a certified sommelier; a May 2026 diner calls the chef a wine lover. The owner is not named in the sources read.',
      philosophy: 'Delicious brand chicken from all over Japan, not limited to one region, with dishes rarely found at a yakitori restaurant (Tabelog shop text).', specialty: 'Multi-breed yakitori course; Kenzo Estate pairings.',
      anecdotes: [
        { text: '"They use over 10 different types of premium chicken, changing the ingredients for each skewer, showcasing their unique characteristics in a remarkable way." — May 2026, ¥12,000 course.', source: R + 'B529005692/' },
        { text: '"The owner is a certified sommelier, and the wine selection is impressive!" — July 2026.', source: R + 'B532942531/' },
        { text: '"To finish, we had the eye-catching oyakodon with its vibrant yellow egg." — October 2026.', source: R + 'B495270783/' },
      ],
      japanese_sources_summary: '公式サイト (sawaichi.jp): 澤いち SAWAICHI GROUP、六本木の日本料理、店舗は澤いち 本店、炭屋、鰻いち黒船。食べログ (店舗会員): 炭屋、港区六本木3-9-12、六本木駅5番出口から徒歩2分、月〜土18:00〜23:30 (L.O.23:00、最終入店22:00)、日祝休み、サービス料10%、カウンター10席、禁煙、カード可。全国の銘柄鶏、焼鳥店では珍しい会席や海鮮の料理。コース: 串焼きコース17品12,000円 (税・サービス料別、14,520円)、KENZO ESTATE のハーフボトル付き18,000円 (21,780円)。口コミ(2026年3月〜10月): 10種以上の銘柄鶏、ねぎま、銀杏、Shizuoka の LYB 豚、レバーのパテ、鰻の手巻き、鮑と茄子、締めの親子丼、ソムリエの資格を持つ店主、持ち帰りも可。',
      confidence: 'medium', sources: [TB, SITE, R + 'B495270783/', R + 'B523866731/', R + 'B528095615/', R + 'B529005692/', R + 'B529188335/', R + 'B531962256/', R + 'B532942531/', R + 'B533588248/', R + 'B533930762/', R + 'B537415847/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course at the counter; staff explain how to eat each skewer (April 2026); no English menu is listed on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-9-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and group site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.663957, 139.734177), the same point as Una Ichi Kurofune (tokyo_una_ichi_kurofune_roppongi, address_ja "東京都港区六本木3-9-12 源氏ビル 1F"), so offset 8 m west; GSI 東京都港区六本木三丁目9番 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog: ¥12,000 / ¥18,000 before tax and 10% service; ¥14,520 / ¥21,780 all in.', last_checked: TODAY, items: [
      it('', '', 'Sumiya skewer course, 17 items', '¥14,520', 'Course', 'ask', 'no', 'Tabelog; ¥12,000 before tax and service.', 'sumiya_course'),
      it('', '', 'Skewer course with a half bottle of KENZO ESTATE wine, 17 items', '¥21,780', 'Course', 'ask', 'no', 'Tabelog; "Asatsuyu" or "Rindo".', 'kenzo_course'),
    ] }, {
    cuisine: '全国の銘柄鶏の焼鳥と会席や海鮮の料理のコース (食べログの店の紹介)・炭屋の串焼きコース17品12,000円 (税・サービス料別、込みで14,520円)、KENZO ESTATE の「Asatsuyu」か「Rindo」のハーフボトル付き18,000円 (21,780円) (食べログ)・10種以上の銘柄鶏を串ごとに使い分ける (2026年5月)。ねぎま、薬味の鶏串、内臓の串、銀杏 (2026年10月)、Shizuoka の LYB 豚、レバーのパテ (2026年10月)、鰻の手巻き、鮑と茄子、トマトの豆腐ソース (2026年7月)、締めは鶏そぼろの親子丼・日本酒と、ソムリエの店主が選ぶワイン (Kenzo Estate も)',
    neighborhood: '六本木3-9-12 (同じビルに姉妹店の鰻いち黒船)。六本木駅5番出口から徒歩2分',
    gf_detail: '要確認。グルテンフリーの説明はない。串は塩かたれと薬味で、コースには会席風の小皿もあり、締めは親子丼 (2026年10月)。',
    vegan_detail: 'ヴィーガン不可。鶏串のコースで魚介や豚の料理も。植物性で名前が出ているのは銀杏とトマトの豆腐ソースだけ。',
    notes: '[焼鳥・六本木、澤いちグループのソムリエの焼鳥カウンター] 姉妹店の鰻いち黒船と同じビルにある、純和風の落ち着いたカウンター10席。六本木の日本料理店「澤いち」のグループの店。12,000円 (税・サービス料込みで14,520円) のコースは17品で、10種を超える銘柄鶏を部位ごとに選んで炭火で焼く串の合間に、鰻の手巻き、鮑と茄子、トマトの豆腐ソースなど会席風の小皿が入り、締めは親子丼。店主はソムリエの資格を持ち、ワインは Kenzo Estate が中心で、ハーフボトル付きのコースもある。2026年の客は店主が気さくで量もたっぷりと書き (残りは持ち帰れる)、8月の客は少し高いと感じた。20時半以降は電話で確認を。',
  });
}

// ================================================================ Sakura
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13116221/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://sakura-sommelier.com/';
  const H = day(['11:30', '23:00']);
  put({
    id: 'tokyo_sakura_italian_roppongi', name: 'Sakura', category: 'OMNI',
    lat: 35.662511, lng: 139.731467, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. The menu is pizza from a wood-fired oven, pasta, bread from the bakery next door and cakes; raw oysters with lemon and carpaccio are the plainest dishes.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks "vegetarian options" and the shop works with daily seasonal vegetables, but no vegan dish is named; pizzas use cheese and many dishes seafood.',
    hours_raw: 'Daily 11:30–23:00 (food last order 22:00, drinks 22:30) (Tabelog). A ¥550 table charge per person for dining in from 17:00; none for takeaway. Weekend lunch may need a booking (October 2026). 80 seats: counter facing the wood-fired oven, tables, sofas, a semi-private room for 4, a terrace; whole-venue hire for 20–50+. Non-smoking. Wheelchair accessible. Cards, IC/e-money and PayPay. Children welcome. Takeaway and delivery. Opened 28 September 2010 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 6-1-12, 21六本木ビル 1F, just behind the Lapiros Roppongi station building — 1 min from Roppongi Stn exit 3',
    cuisine: 'Trattoria with a sommelier-run wine list (official site; Tabelog) · the chef buys at Toyosu daily, and fish also comes direct from Sukumo Bay in Kochi; the menu changes daily: antipasto, pasta and seafood of the day (official site; Tabelog) · Neapolitan pizza from a wood-fired oven made by ジャンニ・アクント, which the site calls Naples\' oldest oven maker (official site) · oysters from around Japan with lemon, ¥830 each; horse-mackerel carpaccio ¥1,980; shirasu aglio e olio ¥2,580 (October 2026) · lunch with salad: pizza, pasta, fish or meat; Margherita ¥1,500, set coffee ¥250 (October 2026); free large pasta at lunch (September 2026) · group plans of large platters ¥4,500 / ¥5,500 (Tabelog) · bread from L\'Atelier du Pain next door; cakes from the sweets shop in the same building; wine shop',
    website: SITE, gmaps: gm('Sakura 六本木6-1-12'), menu_url: SITE,
    notes: "[Italian · Roppongi, a seafood trattoria with a wood-fired oven] Right behind the Roppongi station building, the ground floor of a small food complex that also holds a bakery (L'Atelier du Pain), a sweets shop, a wine shop and a wagyu restaurant. Sakura is the big, bright trattoria in the middle: 80 seats around a Neapolitan wood-fired oven, open from 11:30 to 11 pm every day. The chef buys at Toyosu each morning and gets fish direct from Sukumo Bay in Kochi, so the antipasti, pasta and seafood change daily; oysters from around Japan come with just lemon (¥830 each in October 2026). Lunch is good value — a Margherita with salad for ¥1,500 — and sommeliers pair the wine at night. Reviews in 2026 are mostly warm about the pizza, carpaccio and oysters; one August diner found the service slow and a white-peach caprese overpowered by ginger. A ¥550 charge applies after 5 pm.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 28 September 2010 (Tabelog). The Tabelog remarks describe "21 Community", a food complex with two restaurants, a bakery, a sweets shop and wines, naming an affiliated wagyu steak kaiseki in the building. The official site says the chef goes to Toyosu market every day and that "maniac" sommeliers coordinate the wine.',
      philosophy: 'Italian cooking that draws out the full potential of fresh fish and seasonal vegetables bought that day (official site).', specialty: 'Wood-fired Neapolitan pizza; oysters with lemon; Sukumo Bay fish.',
      anecdotes: [
        { text: '"Chewy Margherita pizza baked in a wood-fired oven! Great price in Roppongi." — October 2026, ¥1,500 with salad.', source: R + 'B537882292/' },
        { text: '"I wondered why there were so many types of cakes, and it turned out there was a cake shop attached." — October 2026.', source: R + 'B537030749/' },
        { text: '"There was a menu pairing champagne with oysters… For some reason, the champagne and oysters were not served together." — August 2026.', source: R + 'B534352323/' },
      ],
      japanese_sources_summary: '公式サイト (sakura-sommelier.com): Sakura (六本木/イタリアン)、シェフ自ら毎日豊洲市場で目利きした魚介と旬の野菜をその日のうちに、イタリア料理を基本に素材の力を引き出す、本日の前菜・パスタ・魚介料理、店の中央のナポリ最古の「ジャンニ・アクント社製」薪窯の本格ナポリピッツァ、メニューは毎日替わる、ソムリエがワインを合わせる、高知県・宿毛湾からの産地直送鮮魚、日本各地の旬の牡蠣とワイン、港区六本木6-1-12 21六本木ビル1F、駅ビル「ラピロス六本木」のすぐ裏。食べログ: 毎日11:30〜23:00、17時以降は1人550円、80席、禁煙、2010年9月28日オープン、同じビルにパン屋、菓子店、ワイン、和牛の店。口コミ(2026年2月〜10月): 牡蠣1個830円、鯵のカルパッチョ1,980円、しらすのアーリオオーリオ2,580円、ランチのマルゲリータとサラダ1,500円、8月には接客が遅いという声も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B523248678/', R + 'B534352323/', R + 'B535557881/', R + 'B536261945/', R + 'B536514034/', R + 'B536596306/', R + 'B536905250/', R + 'B537030749/', R + 'B537882292/', R + 'B537985428/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The official site has English, Chinese and Korean pages; set lunches.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木6-1-12 21六本木ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news into July 2026) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.662511, 139.731467); GSI 東京都港区六本木六丁目1番 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537030749/', R + 'B537882292/', TB],
    price_note: 'À la carte and lunch prices from October 2026 reviews; group plans from Tabelog. ¥550 charge per person after 17:00.', last_checked: TODAY, items: [
      it('', '', 'Raw oyster with lemon (each)', '¥830', 'Seafood', 'ask', 'no', 'October 2026 review.', 'oyster'),
      it('', '', 'Horse-mackerel carpaccio', '¥1,980', 'Antipasti', 'ask', 'no', 'October 2026 review.', 'aji_carpaccio'),
      it('', '', 'Shirasu aglio e olio', '¥2,580', 'Pasta', 'no', 'no', 'October 2026 review.', 'shirasu_pasta'),
      it('', '', 'Lunch: Margherita pizza with salad', '¥1,500', 'Lunch', 'no', 'no', 'October 2026 review; set coffee ¥250.', 'lunch_margherita'),
      it('', '', 'Large-platter party plan A (6–20 people)', '¥4,500', 'Course', 'ask', 'no', 'Tabelog; plan B with meat ¥5,500.', 'party_plan'),
    ] }, {
    cuisine: 'ソムリエのいるトラットリア (公式サイト、食べログ)・シェフが毎日豊洲で仕入れ、高知県・宿毛湾からも魚を産地直送。本日の前菜、パスタ、魚介料理は毎日替わる (公式サイト、食べログ)・ナポリ最古の「ジャンニ・アクント社製」薪窯のナポリピッツァ (公式サイト)・日本各地の牡蠣をレモンで1個830円、鯵のカルパッチョ1,980円、しらすのアーリオオーリオ2,580円 (2026年10月)・サラダ付きのランチ: ピッツァ、パスタ、魚、肉。マルゲリータ1,500円、セットのコーヒー250円 (2026年10月)、ランチのパスタは大盛り無料 (2026年9月)・大皿のグループプラン4,500円・5,500円 (食べログ)・隣のパン屋 (L\'Atelier du Pain) のパン、同じビルの菓子店のケーキ、ワインショップ',
    neighborhood: '六本木6-1-12 21六本木ビル1F、駅ビル「ラピロス六本木」のすぐ裏。六本木駅3番出口から徒歩1分',
    gf_detail: '要確認。グルテンフリーの説明はない。薪窯のピッツァ、パスタ、隣のパン屋のパン、ケーキが中心で、レモンだけの生牡蠣やカルパッチョが一番シンプル。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」とあり、毎日旬の野菜を使うが、ヴィーガンの料理名はない。ピッツァにはチーズ、多くの料理に魚介を使う。',
    notes: '[イタリアン・六本木、薪窯のある魚介のトラットリア] 六本木の駅ビルのすぐ裏、パン屋 (L\'Atelier du Pain)、菓子店、ワインショップ、和牛の店が入る小さな食のビルの1階。Sakura はその中心の明るく広いトラットリアで、ナポリの薪窯を囲む80席、毎日11時半から23時まで。シェフは毎朝豊洲で仕入れ、高知県・宿毛湾からも魚を直送するので、前菜、パスタ、魚介料理は日替わり。日本各地の牡蠣はレモンだけで (2026年10月は1個830円)。ランチはお得で、サラダ付きのマルゲリータが1,500円、夜はソムリエがワインを合わせる。2026年の口コミはピッツァ、カルパッチョ、牡蠣に好意的で、8月の客は接客が遅く、白桃のカプレーゼは新生姜が強すぎたと書いた。17時以降はチャージ550円。',
  });
}

save();
