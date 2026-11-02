// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw1 (lane: Tabelog id mod 4 = 0), batch 5.
//   + 焼肉 きたん 法善寺 Yakiniku Kitan Houzenji (aged-wagyu yakiniku in private rooms, Hozenji Yokocho, 2022)
//   + ル カフェ ヴィー LE CAFE V (café on the 7th floor of Louis Vuitton Maison Osaka Midosuji, 2020)
//   + 炭火焼き鳥 鴨尽 Sumibi Yakitori Kamojin (Omi duck and Yamato chicken, open to 2 a.m., Sennichimae, 2023)
//   + Eccomi (Italian with homemade pasta and a daily-changing menu, Shinmachi, 2021)
//   - skip 夜パフェ専門店 パフェテリア パル 心斎橋 27123016: GAKU Inc.'s night-parfait chain (Sapporo, Shibuya, Shinjuku,
//     Ikebukuro, two Osaka shops, Fukuoka and more; yoru-parfait-gaku.com, read 2026-11-01). Next lane id 27136888 (Kamojin) and,
//     after it, 27125420 (Eccomi) fill the batch; 27155920 ニューベイブ is a chain already in data and was not drafted.
//   Chain check: Kitan is a small Osaka group (南船場, 法善寺, 韻, 響); 焼肉㐂舌 南船場 (osaka_yakiniku_kitan_minamisenba) and きたん 韻
//   (osaka_kitan_in_hozenji) are in data already, kept on the YP流 precedent (two shops of one small group, b4). Kamojin: one of
//   four sister shops near Namba (Tabelog), none in data. LE CAFE V and Eccomi: single sites. None of the four is in data/osaka.json
//   (grep by name, romaji and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27123016', '夜パフェ専門店 パフェテリア パル 心斎橋: GAKU Inc. night-parfait chain with shops in Sapporo, Shibuya, Shinjuku, Ikebukuro, two in Osaka, Fukuoka and more (yoru-parfait-gaku.com/parfait/shop-info, read 2026-11-01); chain.');

// ================================================================ 焼肉 きたん 法善寺
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27128100/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_yakiniku_kitan_hozenji', name: '焼肉 きたん 法善寺 (Yakiniku Kitan Houzenji)', category: 'OMNI',
    lat: 34.668269, lng: 135.502423, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Courses include sauce-grilled cuts, ribeye in sukiyaki sauce, wasabi soy sauce and sudachi cold noodles. The listing asks guests to say in advance about allergies so that substitute dishes can be prepared.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: aged wagyu, tongue, offal and raw-beef dishes.',
    hours_raw: 'Daily 11:00–15:00 and 17:00–23:00; closed on some days (Tabelog). Lunch bentos and seat-only lunches take no reservations (about ten people were queuing five minutes before opening in September 2026); yakiniku courses, lunch included, need booking by the day before; dinner can be booked the same day (Tabelog). A 2-hour limit on busy days (Tabelog). Dinner service charge 5% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 40 seats, all in private rooms, for 2 up to 20–30, with tatami and sunken seating; shoes off; non-smoking; English menu; sommelier; children welcome with a kids menu (Tabelog; September 2026). Order bentos at the register on 1F (September 2026). Opened 3 April 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-7-12, inside Hozenji Yokocho, in a renovated old Japanese house — 5 min from Namba Stn',
    cuisine: 'Yakiniku of aged wagyu, mainly Matsusaka beef and Miyazaki\'s Kirishima beef bought from the producers, with aged meat and aged tongue (Tabelog) · Hozenji course ¥11,550 (October 2026): seasonal kimchi (lotus root, napa cabbage, cucumber), choregi salad, wagyu sashimi of the day (sirloin-cap salt yukhoe, wagyu and takuan roll, sirloin-cap sashimi), aged salted tongue and tongue kalbi with grilled vegetables, aged cuts in sauce (top sirloin, spencer roll, sirloin cap), rice, fresh offal, sudachi cold noodles, a dessert chosen from seven · Kitan lunch course ¥6,000 (September 2026) · aged-tongue bento ¥1,650 (regular; a premium version has the tongue root) with a raw egg yolk and salted green onion (September 2026) · other dishes in 2026 reviews: thick-cut aged tongue, aged wagyu outside skirt, chateaubriand with wasabi soy sauce, ribeye with sukiyaki sauce and yolk · birthday plate on request',
    website: null, gmaps: gm('焼肉 きたん 法善寺'), menu_url: null,
    notes: "[Yakiniku · Hozenji Yokocho, aged wagyu in private rooms] A yakiniku house in a 120-year-old Japanese restaurant building in Hozenji Yokocho, made over so that every seat is a private room, many of them tatami rooms with sunken seating where you take your shoes off. It belongs to the small Kitan group (its Minami-Senba shop is the original) and serves aged meat and aged tongue, mainly Matsusaka and Miyazaki's Kirishima beef bought from the producers. The ¥11,550 Hozenji course runs from three wagyu sashimi through aged salted tongue and tongue kalbi to aged cuts in sauce, fresh offal and sudachi cold noodles, with a dessert chosen from seven; lunch brings a ¥6,000 course or a queue for the ¥1,650 aged-tongue bento. Birthday diners in 2026 praised the staff, who kept one party's cake in the fridge and set out the party's shoes on leaving. Book courses by the day before; dinner adds 5% service. English menu.",
    chef_bio: { chef_name: null, roles: ['Kitchen and service staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: renovated from a 120-year-old Japanese restaurant building in Hozenji Yokocho, an alley kept since the Edo period; concept "enjoying meat from various angles", with aged meat, aged tongue and creative dishes; beef bought directly from producers, mainly Matsusaka beef and Kirishima beef from Miyazaki. Two Kitan yakiniku shops: the Minami-Senba main shop (osaka_yakiniku_kitan_minamisenba in data, whose record cites an official site listing 南船場, 法善寺 and 韻) and this one. Opened 3 April 2022.', philosophy: '"Enjoying meat from various angles" (Tabelog).', specialty: 'Aged tongue; aged wagyu courses; aged-tongue bento.',
      anecdotes: [
        { text: '"I brought a paper bag with a cake to enjoy at home, and the staff kindly offered to keep it in the refrigerator for us. When we left, they had neatly arranged our shoes" — October 2026, the Hozenji course for a birthday.', source: R + 'B538039491/' },
        { text: '"The \'Premium\' option includes the tongue root, while the \'Regular\' features the middle or tip parts of the tongue." — September 2026, aged-tongue bento ¥1,650.', source: R + 'B536117252/' },
        { text: '"The gentle texture of the earthen walls, along with the decorative alcove featuring pebbles, hanging scrolls, and a single flower vase, created a luxurious atmosphere" — October 2026, the Hozenji course ¥11,550.', source: R + 'B538418050/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 焼肉 きたん 法善寺 (焼肉 㐂舌)、焼肉、大阪市中央区道頓堀1-7-12、なんば駅から徒歩5分、毎日11:00〜15:00・17:00〜23:00、不定休、ランチの弁当と席のみは予約不可、焼肉コースは前日までに予約、ディナーは当日も可、混雑時は2時間制、ディナーはサービス料5%、カード可、電子マネー・QR不可、40席、全席完全個室 (2名〜20〜30名)、座敷、掘りごたつ、禁煙、英語メニュー、ソムリエ、子ども・キッズメニュー可、2022年4月3日オープン、南船場本店と法善寺店の2店。店の紹介 (英訳): 築120年の和食店を改装、江戸時代から残る法善寺横丁、「お肉をいろいろな角度から楽しむ」、熟成肉と熟成タン、Matsusaka 牛と Miyazaki の Kirishima 牛を中心に生産者から直接仕入れ、アレルギーや苦手な食材は事前に伝えれば代わりの料理を用意。口コミ(2026年9月〜10月): 法善寺コース11,550円、きたんランチコース6,000円、熟成タン弁当 (並) 1,650円、開店前に約10人の行列、1階のレジで注文、2階の個室、厚切りの熟成タン、和牛の harami、シャトーブリアン、すだち冷麺、7種から選べるデザート、誕生日のケーキを冷蔵庫で預かってくれた、帰りに靴をそろえてくれた、海外の観光客も多い。',
      confidence: 'medium', sources: [TB, R + 'B535623659/', R + 'B535949420/', R + 'B535993026/', R + 'B536050778/', R + 'B536117252/', R + 'B536532092/', R + 'B537420224/', R + 'B537896868/', R + 'B538039491/', R + 'B538418050/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); private rooms throughout; many international tourists (October 2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog listing: "If you have any food allergies or ingredients you dislike, please let us know in advance so we can prepare alternative dishes for you."'] },
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区道頓堀1-7-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目7番12号 (go) 6m. きたん 韻 (osaka_kitan_in_hozenji, 道頓堀1-7-12 1F) is at the same address with a Tabelog point about 5 m away, so this pin is block-level (and that one should be too); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537420224/', R + 'B536050778/', R + 'B536117252/'],
    price_note: 'No menu prices on Tabelog; prices from September and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hozenji course (sashimi, aged tongue, aged cuts, offal, cold noodles, dessert)', '¥11,550', 'Courses', 'ask', 'no', 'October 2026 reviews.', 'hozenji_course'),
      it('', '', 'Kitan lunch course', '¥6,000', 'Lunch', 'ask', 'no', 'September 2026 review.', 'kitan_lunch_course'),
      it('', '', 'Aged-tongue bento (regular)', '¥1,650', 'Lunch', 'ask', 'no', 'September 2026 review.', 'tan_bento'),
      it('', '', 'Sudachi cold noodles', '', 'Courses', 'no', 'no', 'September and October 2026 reviews.', 'sudachi_reimen'),
    ] }, {
    cuisine: '熟成させた和牛の焼肉。生産者から直接仕入れる Matsusaka 牛と Miyazaki の Kirishima 牛が中心で、熟成肉と熟成タン (食べログ)・法善寺コース11,550円 (2026年10月): 季節のキムチ (れんこん、白菜、きゅうり)、Choregi サラダ、本日の和牛の刺身 (sirloin cap の塩ユッケ、和牛のトロたく巻き、sirloin cap の刺身)、熟成の塩タンと tan kalbi と焼き野菜、熟成肉のタレ焼き3種、ご飯、新鮮なホルモン、すだち冷麺、7種から選べるデザート・きたんランチコース6,000円 (2026年9月)・熟成タン弁当 (並) 1,650円、上はタンの根元、卵黄とねぎ塩 (2026年9月)・2026年の口コミのほかの料理: 厚切りの熟成タン、熟成和牛の harami、わさび醤油のシャトーブリアン、すき焼きのタレと卵黄の ribeye・誕生日プレートも',
    neighborhood: '道頓堀1-7-12、法善寺横丁の中、改装した古い日本家屋。なんば駅から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報なし。コースにはタレ焼き、すき焼きのタレの ribeye、わさび醤油、すだち冷麺が入る。食べログには、アレルギーは事前に伝えれば代わりの料理を用意するとある。',
    vegan_detail: 'ヴィーガンではありません。熟成和牛、タン、ホルモン、生の牛肉の料理。',
    notes: '[焼肉・法善寺横丁、個室で熟成和牛] 法善寺横丁の築120年の和食店を改装した焼肉店で、全席が個室。多くは靴を脱いで上がる掘りごたつの座敷。小さな きたん のグループの店 (南船場が本店) で、Matsusaka 牛や Miyazaki の Kirishima 牛を中心に、部位ごとに熟成させる。11,550円の法善寺コースは、3種の和牛の刺身から熟成の塩タンと tan kalbi、熟成肉のタレ焼き、新鮮なホルモン、すだち冷麺まで、デザートは7種から選べる。昼は6,000円のコースか、行列のできる1,650円の熟成タン弁当。2026年に誕生日で訪れた人たちはスタッフをほめていて、ケーキを冷蔵庫で預かってくれた、帰りに靴をそろえてくれたという声。コースは前日までに予約を。夜はサービス料5%。英語メニューあり。',
  });
}

// ================================================================ ル カフェ ヴィー
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27115892/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '20:00']);
  put({
    id: 'osaka_le_cafe_v_shinsaibashi', name: 'ル カフェ ヴィー (LE CAFE V)', category: 'OMNI',
    lat: 34.671165, lng: 135.500757, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The signatures are pastries and cakes (mille-feuille made to order, gateaux, a chocolate tart) and the lunch includes waffles, bread and pasta; nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The cakes, lattes and gratin use cream, butter and milk; the lunch course includes tuna, ham, fish and wagyu.',
    hours_raw: 'Daily 11:00–20:00, last order 19:00; hours may change (Tabelog). No reservations, walk-in only (Tabelog; August 2026); takeaway chocolates can be reserved through TableCheck (October 2026). Service charge 10% (Tabelog). Cards accepted; no e-money or QR (Tabelog). Counter, sofa seating and an open terrace; non-smoking (Tabelog). The entrance is separate from the store, by a lift to 7F (October 2026). Opened 1 February 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 2-8-16, 7F of Louis Vuitton Maison Osaka Midosuji, by its own lift, not through the store — near Shinsaibashi Stn',
    cuisine: 'Café, bar and chocolate (Tabelog), with the Louis Vuitton monogram on lattes, cakes and waffles (2026 reviews) · mille-feuille made to order with Madagascar bourbon vanilla cream ¥3,500, iced V Café latte with monogram latte art ¥2,000 (August 2026); café latte ¥2,000 (October 2026) · chocolate gateau, vanilla gateau, hazelnut gateau, Yame matcha tiramisu with Dainagon azuki, chocolate tart, premium milk tea (September–October 2026) · special lunch course ¥20,000 with an optional wine and sake pairing ¥14,000 (August 2026: Okayama corn cold soup, tuna tartare with salmon roe on a monogram waffle, 24-month aged ham, sea bass with ratatouille, Choshu wagyu outside skirt, white-peach shaved ice); seafood gratin and pasta at lunch (August–September 2026) · Sapporo Ebisu beer ¥1,500 (August 2026) · chocolates to take away',
    website: 'https://jp.louisvuitton.com/jpn-jp/point-of-sale/japan/louis-vuitton-maison-osaka-midosuji', gmaps: gm('LE CAFE V 心斎橋'), menu_url: null,
    notes: "[Café · Shinsaibashi, Louis Vuitton's café floor] The café on the seventh floor of the Louis Vuitton building on Midosuji, reached by its own lift away from the crowded store and sharing the floor with SUGALABO V. Expect the monogram everywhere: on the latte art of the ¥2,000 V Café latte, on the chocolate tart, on the waffle under a tuna tartare. The thing to order is the mille-feuille assembled to order with Madagascar vanilla cream (¥3,500, August 2026), or one of the gateaux, which run large, or a Yame matcha tiramisu. At lunch there is pasta and a seafood gratin, and a ¥20,000 seasonal course with a ¥14,000 pairing for a splurge. Diners in 2026 found the staff warm and the prices high but the setting worth it. Walk-in only; 10% service.",
    chef_bio: { chef_name: null, roles: ['Café team (unnamed)'], origin: null, background: 'Tabelog: LE CAFE V, café, bar and chocolate, on 7F of Louis Vuitton Maison Osaka Midosuji, opened 1 February 2020, the same day as SUGALABO V on the same floor (osaka_sugalabo_v_shinsaibashi in data, whose chef_bio quotes My Concierge Japan: SUGALABO V opened in 2020 as "the world\'s first Louis Vuitton-attached café, bar, and restaurant"). No chef is named in the sources read.', philosophy: null, specialty: 'Mille-feuille made to order; V Café latte with monogram latte art.',
      anecdotes: [
        { text: '"I heard that the mille-feuille is made fresh for each order." — August 2026, mille-feuille ¥3,500 and iced V Café latte ¥2,000.', source: R + 'B533797389/' },
        { text: '"The cafe latte is priced at JPY 2,000, but the high satisfaction comes from the experience of spending time in this extraordinary space!" — October 2026.', source: R + 'B538323007/' },
        { text: '"The sweetness derived from just water and corn was astonishing and unforgettable." — August 2026, a lunch with friends.', source: R + 'B534663043/' },
      ],
      japanese_sources_summary: '食べログ: ル カフェ ヴィー (LE CAFE V)、カフェ・バー・チョコレート、大阪市中央区心斎橋筋2-8-16 ルイ・ヴィトン メゾン 大阪御堂筋 7F、毎日11:00〜20:00 (L.O.19:00)、予約不可、サービス料10%、カード可、電子マネー・QR不可、カウンター・ソファ席・オープンテラス、禁煙、2020年2月1日オープン。口コミ(2026年6月〜10月): 店舗とは別の入口からエレベーターで、モノグラムのラテアート、作りたてのミルフィーユ3,500円、V カフェラテ・グラッセ2,000円、ショコラやバニラやヘーゼルナッツのガトー、Yame の抹茶ティラミス、ショコラのタルト、ミルクティー、ランチの特別コース20,000円とペアリング14,000円、シーフードグラタン、パスタ、テイクアウトのショコラは TableCheck で予約、スタッフが親切、値段は高い。',
      confidence: 'medium', sources: [TB, R + 'B515036023/', R + 'B533797389/', R + 'B534663043/', R + 'B535148334/', R + 'B535369195/', R + 'B535687163/', R + 'B535972458/', R + 'B536956830/', R + 'B538026923/', R + 'B538323007/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk-in café; order from the menu at the table (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区心斎橋筋2-8-16 ルイ・ヴィトン メゾン 大阪御堂筋 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目8番16号 (go) 25m. SUGALABO V (osaka_sugalabo_v_shinsaibashi) is on the same floor of the same building with a pin about 10 m away, so this pin is block-level (and that one should be too); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533797389/', R + 'B515036023/', R + 'B538323007/'],
    price_note: 'No menu prices on Tabelog; prices from August and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mille-feuille made to order (Madagascar vanilla cream)', '¥3,500', 'Sweets', 'no', 'no', 'August 2026 review.', 'mille_feuille'),
      it('', '', 'V Café latte (hot or iced)', '¥2,000', 'Drinks', 'ask', 'no', 'August and October 2026 reviews.', 'v_cafe_latte'),
      it('', '', 'Special lunch course', '¥20,000', 'Lunch', 'ask', 'no', 'August 2026 review; pairing ¥14,000.', 'special_lunch'),
      it('', '', 'Chocolate tart with the monogram', '', 'Sweets', 'no', 'no', 'October 2026 review.', 'chocolate_tart'),
    ] }, {
    cuisine: 'カフェ・バー・チョコレート (食べログ)。ラテ、ケーキ、ワッフルにルイ・ヴィトンのモノグラム (2026年の口コミ)・Madagascar のブルボンバニラのクリームで注文ごとに作るミルフィーユ3,500円、モノグラムのラテアートの V カフェラテ (アイス) 2,000円 (2026年8月)。カフェラテ2,000円 (2026年10月)・ショコラのガトー、バニラのガトー、ヘーゼルナッツのガトー、Dainagon の小豆の Yame の抹茶ティラミス、ショコラのタルト、ミルクティー (2026年9月〜10月)・ランチの特別コース20,000円、ワインと日本酒のペアリング14,000円 (2026年8月: Okayama のとうもろこしの冷製スープ、モノグラムのワッフルにマグロのタルタルといくら、24か月熟成のハム、スズキとラタトゥイユ、Choshu の和牛のステーキ、白桃のかき氷)。ランチにはシーフードグラタンやパスタも (2026年8月〜9月)・Sapporo Ebisu のビール1,500円 (2026年8月)・持ち帰りのショコラ',
    neighborhood: '心斎橋筋2-8-16、ルイ・ヴィトン メゾン 大阪御堂筋の7階。店舗を通らず専用のエレベーターで。心斎橋駅の近く',
    gf_detail: '要確認。グルテンの情報なし。看板はペストリーとケーキ (注文ごとに作るミルフィーユ、ガトー、ショコラのタルト) で、ランチにはワッフル、パン、パスタも。グルテンフリーの説明はない。',
    vegan_detail: '要確認。ヴィーガンの情報なし。ケーキ、ラテ、グラタンはクリーム、バター、牛乳を使い、ランチのコースにはマグロ、ハム、魚、和牛が入る。',
    notes: '[カフェ・心斎橋、ルイ・ヴィトンのカフェ] 御堂筋のルイ・ヴィトンのビルの7階にあるカフェで、混み合う店舗とは別のエレベーターで上がり、SUGALABO V と同じフロア。どこにでもモノグラム: 2,000円の V カフェラテのラテアートにも、ショコラのタルトにも、マグロのタルタルの下のワッフルにも。頼むなら、Madagascar のバニラのクリームで注文ごとに組み立てるミルフィーユ (3,500円、2026年8月) か、大きめのガトー、Yame の抹茶ティラミス。ランチにはパスタやシーフードグラタン、奮発するなら20,000円の季節のコースと14,000円のペアリングも。2026年の口コミでは、スタッフが温かく、値段は高いが空間に価値があるという声。予約不可、サービス料10%。',
  });
}

// ================================================================ 炭火焼き鳥 鴨尽
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27136888/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '02:00']);
  put({
    id: 'osaka_sumibi_yakitori_kamojin_namba', name: '炭火焼き鳥 鴨尽 (Sumibi Yakitori Kamojin)', category: 'OMNI',
    lat: 34.665348, lng: 135.504214, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers come with salt or sauce, the sashimi with condiments that include sweet soy sauce, miso and garlic koji, and the menu has kara-age, grilled rice balls and soba to finish.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a duck and chicken specialist; even the potato salad is made with three cheeses.',
    hours_raw: 'Daily 17:00–02:00 (food last order 01:00, drinks 01:30); from November 2026 also open on Wednesdays, which were closed before (Tabelog). Reservations for two or more by the day before; call after 15:00 (Tabelog). Table charge ¥385 (Tabelog). Cards, IC cards and other e-money, and QR payments including PayPay, Alipay and WeChat Pay (Tabelog). 40 seats over three floors: a counter, and a private room for about 8 on 3F; non-smoking; children welcome (Tabelog). A terrace seat (September 2026). Orders by call bell; a busy October 2026 night brought delays and forgotten items. Opened 30 July 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba-Sennichimae 3-19, a three-storey house — 3 min from Nankai Namba Stn, 5 min from Nihonbashi',
    cuisine: 'Charcoal yakitori of Omi duck from Takashima, Shiga, and Yamato chicken raised for the group by 雅chickfarm in Nara, plus fermented dishes (Tabelog) · duck tataki of breast and thigh, duck sashimi with grilled skin, chicken sashimi platters (breast, gizzard, neck; five kinds of Yamato chicken), with house condiments such as garlic koji, yuzu, miso, wasabi and salt (September–October 2026) · duck skewers: neck, heart, gizzard, heart with green onion · quail eggs on chicken sashimi, charcoal-grilled edamame, caciocavallo cheese four ways, "adult" potato salad with three cheeses, duck kara-age, thick rolls, grilled rice balls, soba to finish, sweet-potato butter (2026 reviews) · craft beer, sake, a Kamojin sour and many non-alcoholic drinks (2026 reviews) · table charge ¥385',
    website: null, gmaps: gm('炭火焼き鳥 鴨尽 難波'), menu_url: null,
    notes: "[Yakitori · Sennichimae, duck until 2 a.m.] A three-storey yakitori house near Nankai Namba built around duck: Omi duck from Takashima in Shiga, and Yamato chicken raised for the group by a Nara farm, grilled over charcoal or served raw. Start with duck tataki of breast and thigh or a platter of chicken sashimi, eaten with house condiments such as garlic koji, yuzu and miso, then skewers of duck neck, heart and gizzard; fermentation runs through the menu, developed with a well-known fermentation specialist. There are oddities to try (caciocavallo grilled four ways, a three-cheese potato salad, duck kara-age) and soba with duck to finish. Open until 2 a.m. daily, so it works as a second stop; a counter suits solo diners. Diners in 2026 found it delicious if a little pricey for the portions, and one busy night slow. Raw chicken is served here.",
    chef_bio: { chef_name: null, roles: ['Chef (named Oda in Tabelog\'s machine-translated English listing)', 'Menu supervised with a fermentation specialist (named Kusunoki in the same translation)'], origin: null, background: 'Per the shop-maintained Tabelog listing (English, machine-translated): duck and chicken dishes under the guidance of a fermentation chef known from the media; Omi duck raised in Takashima, Shiga, and Yamato chicken raised by 雅chickfarm in Nara for the group\'s sister shop, both raised stress-free; the duck and chicken are also sold. Sister shops nearby, listed by Tabelog: Gojin, Torijin and Sumiyaki Shoten Yo Namba. Opened 30 July 2023. A September 2026 diner notes the manager or chef at the grill explaining each dish.', philosophy: 'A theme of "fermentation" that is gentle on the body (Tabelog).', specialty: 'Omi duck tataki and skewers; Yamato chicken sashimi; fermented dishes.',
      anecdotes: [
        { text: '"We had homemade seasonings: garlic koji, yuzu, miso, wasabi, and salt. These homemade condiments were incredibly delicious!" — September 2026, duck tataki and chicken sashimi.', source: R + 'B536333890/' },
        { text: '"Grilled over charcoal, it had a wonderful aroma and was rich with oil, making it absolutely exquisite even with a sprinkle of black shichimi on top." — September 2026, the edamame.', source: R + 'B536411407/' },
        { text: '"It was fascinating to compare multiple parts on one plate, as each part had a different texture and flavor profile" — October 2026, Yamato chicken sashimi of five kinds.', source: R + 'B538078651/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 炭火焼き鳥 鴨尽、焼き鳥・居酒屋・鍋、大阪市中央区難波千日前3-19、南海なんば駅から徒歩3分、17:00〜翌2:00 (料理L.O.1:00、ドリンクL.O.1:30)、2026年11月から水曜も営業、予約は2名から前日まで、15時以降に電話、お通し代385円 (税込)、カード・電子マネー・QR可、40席 (1〜3階)、3階に8名ほどの個室、禁煙、子ども可、2023年7月30日オープン。店の紹介 (英訳): Takashima (Shiga) の Omi の鴨と、雅chickfarm (Nara) がグループのために育てる Yamato の鶏、炭火焼きと発酵の料理、近くに姉妹店3店。口コミ(2026年9月〜10月): 鴨のたたき (むねともも)、鴨の刺身、鶏刺しの盛り合わせ、自家製の薬味 (にんにく麹、柚子、味噌、わさび、塩)、鴨のねぎま、ハツ、砂肝、首、うずらの卵、炭火の枝豆、カチョカヴァロ、3種のチーズのポテトサラダ、鴨の唐揚げ、焼きおにぎり、締めのそば、クラフトビール、鴨尽サワー、ノンアルコールも多い、テラス席、呼び鈴で注文、忙しい夜は遅れも、量のわりに少し高いという声。',
      confidence: 'medium', sources: [TB, R + 'B536135867/', R + 'B536333890/', R + 'B536346952/', R + 'B536369780/', R + 'B536397878/', R + 'B536411407/', R + 'B536469374/', R + 'B537882307/', R + 'B537990107/', R + 'B538078651/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and floors of tables; the grill cook explains dishes (September 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前3-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with a November 2026 hours notice; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前3番19号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B536333890/', R + 'B538078651/'],
    price_note: 'No menu prices on Tabelog or in reviews beyond the ¥385 table charge; dishes from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omi duck tataki (breast and thigh)', '', 'Duck', 'ask', 'no', 'September 2026 reviews.', 'kamo_tataki'),
      it('', '', 'Yamato chicken sashimi platter (raw)', '', 'Chicken', 'ask', 'no', 'September and October 2026 reviews.', 'torisashi'),
      it('', '', 'Duck skewers (neck, heart, gizzard)', '', 'Skewers', 'ask', 'no', 'October 2026 review.', 'kamo_kushi'),
      it('', '', 'Soba to finish', '', 'Rice and noodles', 'no', 'no', 'October 2026 review.', 'shime_soba'),
    ] }, {
    cuisine: 'Takashima (Shiga) の Omi の鴨と、Nara の雅chickfarm がグループのために育てる Yamato の鶏の炭火焼き鳥、発酵の料理も (食べログ)・鴨のむねとももたたき、皮を焼いた鴨の刺身、鶏刺しの盛り合わせ (むね、砂肝、首。Yamato の鶏の5種も)、自家製の薬味 (にんにく麹、柚子、味噌、わさび、塩など) で (2026年9月〜10月)・鴨の串: 首、ハツ、砂肝、ねぎま・鶏刺しにうずらの卵、炭火の枝豆、4種の焼き方のカチョカヴァロ、3種のチーズの「大人のポテトサラダ」、鴨の唐揚げ、太巻き、焼きおにぎり、締めのそば、さつまいものバター (2026年の口コミ)・クラフトビール、日本酒、鴨尽サワー、ノンアルコールも多い (2026年の口コミ)・お通し代385円',
    neighborhood: '難波千日前3-19、3階建ての一軒家。南海なんば駅から徒歩3分、日本橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。串は塩かタレ、刺身には甘い醤油、味噌、にんにく麹などの薬味がつき、唐揚げ、焼きおにぎり、締めのそばもある。',
    vegan_detail: 'ヴィーガンではありません。鴨と鶏の専門店で、ポテトサラダにも3種のチーズ。',
    notes: '[焼き鳥・千日前、夜2時まで鴨] 南海なんば駅近くの3階建ての焼き鳥の店で、主役は鴨。Shiga の Takashima の Omi の鴨と、Nara の農場がグループのために育てる Yamato の鶏を、炭火で焼くか生で出す。まずは鴨のむねとももたたきか鶏刺しの盛り合わせを、にんにく麹、柚子、味噌などの自家製の薬味で。それから鴨の首、ハツ、砂肝の串。メディアで知られる発酵の専門家と作った発酵の料理がメニューのあちこちに。変わり種 (4種の焼き方のカチョカヴァロ、3種のチーズのポテトサラダ、鴨の唐揚げ) も、締めは鴨のそば。毎日夜2時までなので二軒目にも。カウンターは一人でも。2026年の口コミではおいしいが量のわりに少し高いという声、忙しい夜は遅かったという声も。生の鶏肉を出す店。',
  });
}

// ================================================================ Eccomi
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27125420/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '24:00']);
  put({
    id: 'osaka_eccomi_shinmachi', name: 'Eccomi', category: 'OMNI',
    lat: 34.676917, lng: 135.490773, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu is built on homemade pasta, focaccia and bread, with gratins and breaded fish; no gluten-free handling described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog marks vegetarian options, but no vegan information; the daily appetizers and pastas lean on ham, fish, cheese and cream.',
    hours_raw: 'Lunch 12:00–15:00 (last entry 14:00), dinner 18:00–24:00 (last entry 22:00); closed Tuesday and on some other days; closes early when ingredients sell out (Tabelog). Reservations accepted; seating may be changed to fit bookings (Tabelog). A queue at lunch opening (July 2026). Cards (VISA, Master, JCB, AMEX), iD, QUICPay and QR payments (Tabelog). 21 seats (8 at the counter, 13 at tables), private hire up to 50 standing; non-smoking; wheelchair accessible; children and strollers welcome (Tabelog). Opened 13 September 2021 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 2-18-19, 1F of the 四ツ橋三洋ハイツ — 5 min west of Nishi-Ohashi Stn exit 1 along Nagahori-dori, right at the Porsche showroom',
    cuisine: 'Italian with seasonal ingredients, seafood from the central market and homemade pasta; no fixed menu, the dishes change daily and the menu names only the main ingredient (Tabelog; July 2026) · pasta lunch ¥1,500 with a platter of about six appetizers, the day\'s pasta, focaccia and a drink (June 2026; ¥1,400 in June 2025, ¥100 less for a small portion or no drink); premium pastas extra, e.g. tomato and pecorino +¥800, or beef tongue and venison braised in red wine at no extra charge (June 2026) · lunch courses by reservation · evening: start with a chef\'s selection of 3–5 small dishes, then homemade pasta or a main (Tabelog) · dishes in 2026 reviews: chilled corn soup, sea bream carpaccio with kombu, Spanish ham (18-month per Tabelog, 24-month per a July 2026 review), breaded horse mackerel with brown butter, baked eggplant with smoked mozzarella, shirasu and lemon cream pasta, pork shoulder with yuzu, mushroom gratin, braised pork belly risotto, roast black pork · three wines by the glass, about ten by the bottle, a house lemon sour of Hiroshima lemons (Tabelog)',
    website: null, gmaps: gm('Eccomi 新町'), menu_url: null,
    notes: "[Italian · Shinmachi, a daily-changing menu] A small, wood-warm Italian in Shinmachi west of Nishi-Ohashi, with a single-slab counter cut from a tree said to be 2,000 years old and window seats for solo diners. There is no fixed menu: seafood comes from the central market each morning, and the list names only the main ingredient, leaving the cooking as a surprise. In the evening order three to five small plates (Spanish ham, baked eggplant with smoked mozzarella, horse mackerel with brown butter) and then a homemade pasta or a main; lunch is the bargain, ¥1,500 for a colourful appetizer plate, the day's pasta, focaccia and a drink (June 2026), and it queues at noon. One eight-time regular came back for a pasta of beef tongue and venison braised in red wine. Some dishes sell out early. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: seasonal ingredients, fresh seafood from the central market and produce from trusted vendors; no fixed menu; dinner courses to budget; counter and tables from a large tree about 2,000 years old; family-friendly. Opened 13 September 2021. A July 2026 diner describes "a talented young chef who has undergone rigorous training".', philosophy: 'Authentic Italian, casually (Tabelog).', specialty: 'Homemade pasta; appetizer platter; seasonal market seafood.',
      anecdotes: [
        { text: '"I noticed the \'Beef Tongue and Venison Braised in Red Wine\' pasta available at no extra charge." — June 2026, an eighth visit.', source: R + 'B443140940/' },
        { text: '"The menu only lists the main ingredients, leaving the cooking style as a delightful surprise." — July 2026.', source: R + 'B532787378/' },
        { text: '"Since I arrived later in the day, some items were sold out, and there were fewer pasta options available" — July 2026, weekday lunch.', source: R + 'B532620388/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Eccomi、イタリアン・パスタ、大阪市西区新町2-18-19 四ツ橋三洋ハイツ 1F、西大橋駅1番出口から徒歩5分、12:00〜15:00 (最終入店14:00)・18:00〜24:00 (最終入店22:00)、火曜休み・不定休、食材がなくなりしだい終了、予約可、カード・電子マネー・QR可、21席 (カウンター8、テーブル13)、貸切可、禁煙、車いす可、子ども・ベビーカー可、ベジタリアンメニューあり、2021年9月13日オープン。店の紹介 (英訳): 季節の食材、中央市場の鮮魚、決まったメニューはなく毎日変わる、前菜を3〜5品のあと自家製パスタかメイン、18か月熟成の Spain の生ハム、樹齢約2000年の木のカウンターとテーブル、グラスワイン3種、ボトル10種、Hiroshima のレモンの自家製レモンサワー。口コミ(2025年6月〜2026年7月): パスタランチ1,500円 (前菜の盛り合わせ、本日のパスタ、フォカッチャ、ドリンク)、2025年6月は1,400円、トマトとペコリーノのパスタは800円増し、牛タンと鹿の赤ワイン煮込みのパスタ、昼は開店から行列、売り切れも、メニューには主な食材だけ、とうもろこしの冷製スープ、昆布を使った鯛のカルパッチョ、生ハム、アジのフライと焦がしバター、なすとスモークモッツァレラ、しらすとレモンのクリームパスタ、ゆずの豚肩、きのこのグラタン、豚バラのリゾット、若い料理人。',
      confidence: 'medium', sources: [TB, R + 'B443140940/', R + 'B529594798/', R + 'B529938403/', R + 'B530024427/', R + 'B531188672/', R + 'B531804934/', R + 'B532069460/', R + 'B532599124/', R + 'B532620388/', R + 'B532787378/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A daily menu naming only the main ingredients; set pasta lunch (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市西区新町2-18-19 四ツ橋三洋ハイツ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町二丁目18番19号 (go) 14m. conoji (osaka_conoji_shinmachi, 新町2-18-19 三洋ハイツ 101) is another Italian in the same building with a Tabelog point about 1 m away, so this pin is block-level (and that one should be too); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529938403/', R + 'B530024427/', R + 'B443140940/'],
    price_note: 'No menu prices on Tabelog; prices from June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pasta lunch (appetizer platter, the day\'s pasta, focaccia, drink)', '¥1,500', 'Lunch', 'no', 'ask', 'June 2026 reviews.', 'pasta_lunch'),
      it('', '', 'Premium pasta supplement (e.g. tomato and pecorino)', '¥800', 'Lunch', 'no', 'ask', 'June 2026 review.', 'pasta_upgrade'),
      it('', '', 'Chef\'s selection of small dishes (3–5)', '', 'Dinner', 'ask', 'ask', 'Tabelog listing.', 'antipasti'),
    ] }, {
    cuisine: '季節の食材、中央市場の魚介、自家製パスタのイタリアン。決まったメニューはなく毎日変わり、メニューには主な食材だけが書いてある (食べログ、2026年7月)・パスタランチ1,500円、前菜6品ほどの盛り合わせ、本日のパスタ、フォカッチャ、ドリンクつき (2026年6月。2025年6月は1,400円、量を少なめやドリンクなしで100円引き)。特別なパスタは追加料金、たとえばトマトとペコリーノは800円増し、牛タンと鹿の赤ワイン煮込みは追加なし (2026年6月)・ランチのコースは予約で・夜はまずシェフおまかせの小皿を3〜5品、それから自家製パスタかメイン (食べログ)・2026年の口コミの料理: とうもろこしの冷製スープ、昆布を使った鯛のカルパッチョ、Spain の生ハム (食べログでは18か月、2026年7月の口コミでは24か月熟成)、アジのフライと焦がしバター、なすとスモークモッツァレラのオーブン焼き、しらすとレモンのクリームパスタ、ゆずの豚肩、きのこのグラタン、豚バラのリゾット、黒豚のロースト・グラスワイン3種、ボトル10種ほど、Hiroshima のレモンの自家製レモンサワー (食べログ)',
    neighborhood: '新町2-18-19、四ツ橋三洋ハイツの1階。西大橋駅1番出口から Nagahori-dori を西へ徒歩5分、Porsche の店で右へ',
    gf_detail: '要確認。グルテンの情報なし。自家製パスタ、フォカッチャ、パンが中心で、グラタンやフライもある。グルテンフリーの対応の説明はない。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、ヴィーガンの情報はない。日替わりの前菜やパスタにはハム、魚、チーズ、クリームが多い。',
    notes: '[イタリアン・新町、毎日変わるメニュー] 西大橋の西、新町にある木のぬくもりの小さなイタリアン。樹齢約2000年という一枚板のカウンターと、一人でも座れる窓辺の席。決まったメニューはなく、魚介は毎朝中央市場から。メニューには主な食材だけが書いてあり、料理法はお楽しみ。夜は小皿を3〜5品 (生ハム、なすとスモークモッツァレラ、アジのフライと焦がしバター)、それから自家製パスタかメインを。お得なのは昼で、色とりどりの前菜の盛り合わせ、本日のパスタ、フォカッチャ、ドリンクで1,500円 (2026年6月)、昼は開店から行列。8回目の来店だった人は、牛タンと鹿の赤ワイン煮込みのパスタがお目当て。売り切れも早い。火曜休み。',
  });
}

save();
