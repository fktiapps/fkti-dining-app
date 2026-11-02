// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw1 (lane: Tabelog id mod 4 = 0), batch 10.
//   + トッサ・ジ・クラッサン Tossa Ji Croissant (Kochi cooking and straw-grilled bonito, Kitahorie, 2017)
//   + きんちゃく家 なんば店 Kinchaku Ya Namba (shirasu and port seafood from Kishiwada, Namba CITY Komejirushi, 2024)
//   + 達屋 なんば店 TAZ-YA Namba (izakaya of own-farm vegetables and freshly shaved katsuobushi, Ura-Namba, 2023)
//   + 炭焼きと焼き鳥 炭から隅まで 難波心斎橋店 Sumi kara Sumi made (charcoal grill of beef tongue, Kawachi duck and yakitori, 2023)
//   - skip 27001480 心斎橋 ミツヤ 心斎橋本店 (Mitsuya kissaten chain: Whity Umeda, Hankyu Sanbangai, Keihan Mall, Shinsaibashi,
//     Namba Walk and more on mitsuya.co.jp) and 27121792 天ぷらと海鮮 ニューツルマツ 心斎橋パルコ店 (New Tsurumatsu shops in Parco,
//     Uehonmachi Hi-Hi Town and KITTE Osaka on new-tsurumatsu-3.com).
//   Lane: mod-4 = 0 ids in `queue.mjs osaka next notable 180` after batch 9: 27097396, 27141604, 27001480 (skip), 27135756,
//   27134304, 27121792 (skip).
//   Chain check: Kinchaku Ya has two shops (Kishiwada, Namba; ikari-f.co.jp); TAZ-YA has a sister on 1F (BELLA BOCCA) and an Umeda
//   shop (October 2026 reviews); Sumi kara Sumi made has a sister grill, Black (August 2026 review); Tossa Ji Croissant is a single
//   shop as far as the sources show. None is in data/osaka.json (grep by name, romaji and address, 2026-11-01).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27001480', '心斎橋 ミツヤ 心斎橋本店: Mitsuya kissaten chain with shops at Whity Umeda, Hankyu Sanbangai, Keihan Mall, Shinsaibashi, Namba Walk and more (mitsuya.co.jp/brand/bra_mitsuya.html, read 2026-11-01).');
skip('27121792', '天ぷらと海鮮 ニューツルマツ 心斎橋パルコ店: New Tsurumatsu brand with shops in Shinsaibashi Parco, Uehonmachi Hi-Hi Town and KITTE Osaka (new-tsurumatsu-3.com, read 2026-11-01); chain.');

// ================================================================ トッサ・ジ・クラッサン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27097396/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:30', '23:00']);
  put({
    id: 'osaka_tossa_ji_croissant_kitahorie', name: 'トッサ・ジ・クラッサン (Tossa Ji Croissant)', category: 'OMNI',
    lat: 34.674516, lng: 135.496093, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The straw-grilled bonito is served with salt, garlic and other condiments, but set meals include obanzai in dashi and soy, and dinner courses run to pasta.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Kochi seafood, bonito and yellowtail, with side dishes in dashi.',
    hours_raw: 'Mon–Sat 11:30–15:00 (last order 14:00) and 17:30–23:00 (last order 22:00); closed on the 1st–4th Sundays, open on a 5th Sunday (Tabelog). Reservations accepted; lunch bookings until 13:45; table requests are not guaranteed, parties of two may be put at the counter; private rooms only by phone, with a course, for 5 or more (Tabelog). No cover charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 62 seats: 8 at the 1F counter, 22 at 1F tables, 32 on 2F, with private rooms for 5–32; some days only 1F is open; non-smoking; families with children often at weekends (Tabelog). Opened 6 January 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 1-6-19, one street west of Yotsubashi-suji — 1 min from Yotsubashi Stn exit 4',
    cuisine: 'Kochi (Tosa) ingredients worked into a Japanese-French menu, with Tosa sake (Tabelog) · the signature: bonito caught that day in Tosa, straw-grilled to order in the Tosa "warayaki" style and served with salt (Tabelog; 2026 reviews) · lunch obanzai set of straw-grilled bonito and Tosa yellowtail with several small dishes, rice and a raw egg ¥1,980 (September–October 2026); a Tosa yellowtail seafood bowl set; a set with bonito, yellowtail and namero (October 2026) · lunch bottle of beer ¥800 (October 2026) · dinner à la carte and courses with all-you-can-drink, from straw-grilled bonito to sukiyaki and pasta (September 2026) · more than 20 sakes direct from Kochi (Tabelog)',
    website: null, gmaps: gm('トッサ・ジ・クラッサン 北堀江'), menu_url: null,
    notes: "[Kochi cooking · Kitahorie, straw-grilled bonito] A two-floor Kochi restaurant a minute from Yotsubashi Station where the bonito arrives from Tosa the same day and is seared to order over burning straw in the Tosa way, and from the counter you can watch the flames. Lunch is the draw: the obanzai set of straw-grilled bonito and fat Tosa yellowtail side by side, eaten with salt, garlic and green onion, with a run of dashi-rich small dishes and a raw egg for your rice (¥1,980 in October 2026). In the evening the menu turns Japanese-French around the same fish, with more than 20 sakes from Kochi and courses for groups. Diners find it pricey for lunch but worth it; book, especially Fridays. Closed most Sundays.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: a creative restaurant using seasonal ingredients from Kochi (Tosa), cooked with French technique into a fusion of Japanese and Western flavours; bonito delivered the same day and straw-grilled to order; over 20 Kochi sakes, recommended by the staff; families with small children and parents\' groups on Sundays. Opened 6 January 2017.', philosophy: null, specialty: 'Straw-grilled bonito tataki; Tosa yellowtail.',
      anecdotes: [
        { text: '"After placing my order, I was able to watch the straw grilling right in front of me, and it was quite impressive!!" — October 2026, the obanzai set.', source: R + 'B538266844/' },
        { text: '"I had the Set Meal featuring a comparison of smoked bonito and Tosa yellowtail for JPY 1,980. It\'s highly recommended to eat it with salt" — September 2026.', source: R + 'B535346779/' },
        { text: '"The grilled bonito is delicious, but the sashimi of yellowtail was truly amazing." — October 2026, lunch.', source: R + 'B538136354/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): トッサ・ジ・クラッサン、居酒屋・海鮮・フレンチ、大阪市西区北堀江1-6-19、四ツ橋駅4番出口から徒歩1分、四つ橋筋から一本西の通り、月〜土11:30〜15:00 (L.O.14:00)・17:30〜23:00 (L.O.22:00)、第1〜第4日曜休み (第5日曜は営業)、予約可 (ランチは13:45まで、2名はカウンターのことも、個室は電話で5名以上のコース)、チャージなし、カード・PayPay 可、62席 (1階カウンター8、テーブル22、2階32)、個室5〜32名、禁煙、2017年1月6日オープン。店の紹介 (英訳): Kochi の旬の食材をフレンチの技で和洋折衷に、その日に Tosa からとれたかつおを注文ごとにわら焼き、Kochi の日本酒20種以上、日曜は子ども連れも多い。口コミ(2026年9月〜10月): わら焼きのかつおと Tosa のぶりの食べくらべのおばんざい定食1,980円、塩で食べるのがおすすめ、目の前でわら焼き、小鉢、生卵、Tosa のぶりの海鮮丼、namero、ランチの瓶ビール800円、飲み放題つきのコース、すき焼き、パスタ、ランチにしては高いがおいしいという声。',
      confidence: 'medium', sources: [TB, R + 'B500474169/', R + 'B535346779/', R + 'B535675699/', R + 'B535854054/', R + 'B536036396/', R + 'B536787104/', R + 'B536892367/', R + 'B537054705/', R + 'B538136354/', R + 'B538266844/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches; staff recommend sake to beginners (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-6-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目6番19号 (go) 5m. CAFE CHARBON (osaka_cafe_charbon_kitahorie) is at 北堀江1-6-23, a different house number; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535346779/', R + 'B536892367/'],
    price_note: 'Lunch prices from September and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Obanzai set: straw-grilled bonito and Tosa yellowtail (lunch)', '¥1,980', 'Lunch', 'ask', 'no', 'September and October 2026 reviews.', 'warayaki_set'),
      it('', '', 'Straw-grilled bonito tataki (dinner, for two)', '', 'Dinner', 'ask', 'no', 'September 2026 review.', 'warayaki_katsuo'),
      it('', '', 'Tosa yellowtail seafood bowl set (lunch)', '', 'Lunch', 'ask', 'no', 'September 2026 review.', 'tosa_buri_don'),
    ] }, {
    cuisine: 'Kochi (Tosa) の食材を和洋折衷のメニューに、Tosa の日本酒とともに (食べログ)・名物: その日に Tosa でとれたかつおを、注文ごとに Tosa 流のわら焼きにして塩で (食べログ、2026年の口コミ)・ランチ: わら焼きのかつおと Tosa のぶりのおばんざい定食、小鉢いくつかとご飯、生卵つきで1,980円 (2026年9月〜10月)。Tosa のぶりの海鮮丼定食。かつお、ぶり、namero の定食 (2026年10月)・ランチの瓶ビール800円 (2026年10月)・夜はアラカルトと飲み放題つきのコース、わら焼きからすき焼き、パスタまで (2026年9月)・Kochi から直送の日本酒20種以上 (食べログ)',
    neighborhood: '北堀江1-6-19、四つ橋筋から一本西の通り。四ツ橋駅4番出口から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。わら焼きのかつおは塩、にんにくなどの薬味で食べるが、定食にはだしと醤油のおばんざいがつき、夜のコースにはパスタも。',
    vegan_detail: 'ヴィーガンではありません。Kochi の魚介、かつおとぶりの店で、小鉢にもだしを使う。',
    notes: '[高知料理・北堀江、わら焼きのかつお] 四ツ橋駅から1分の2フロアの Kochi の料理の店。かつおはその日に Tosa から届き、注文ごとに Tosa 流にわらの炎であぶる。カウンターからは炎が見える。人気はランチで、わら焼きのかつおと脂ののった Tosa のぶりを並べたおばんざい定食を、塩、にんにく、ねぎで。だしの効いた小鉢が並び、生卵をご飯に (2026年10月は1,980円)。夜は同じ魚を中心にした和洋折衷のメニューで、Kochi の日本酒は20種以上、グループのコースも。ランチにしては高いがその価値はあるという声。金曜はとくに予約を。日曜はほぼ休み。',
  });
}

// ================================================================ きんちゃく家 なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27141604/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ikari-f.co.jp/shop/shop04/';
  const H = day(['11:00', '15:00'], ['17:00', '22:00']); const W = day(['11:00', '15:00']);
  put({
    id: 'osaka_kinchakuya_namba', name: 'きんちゃく家 なんば店 (Kinchaku Ya Namba)', category: 'OMNI',
    lat: 34.660436, lng: 135.502936, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Shirasu bowls and sashimi come with soy-based sauces, and sets include tempura, croquettes and fried oysters.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya of shirasu, sashimi and fried fish.',
    hours_raw: 'Daily 11:00–15:00; dinner 17:00–22:00 except Wednesday, when it closes after lunch (Tabelog). Reservations accepted; the Shirasu Gozen set is limited (five a day in September 2026) and bookable (2026 reviews). Starter ¥380 at dinner (Tabelog). Cards, IC cards and other e-money, and QR payments including PayPay, Alipay and WeChat Pay (Tabelog). 33 seats at the counter, tables and outdoor tables; smoking only outside; private hire up to 40 (Tabelog). QR ordering (October 2026). In Namba CITY\'s Komejirushi food alley under the tracks, across from the South Building exit; directly connected from Nankai Namba Station south exit (Tabelog). Opened 6 April 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: W, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 2-10-25, なんばこめじるし under the Nankai tracks, Namba CITY — 3 min from Nankai Namba Stn',
    cuisine: 'Port seafood izakaya, the Namba sister of a Kishiwada shop (Tabelog; ikari-f.co.jp) · shirasu straight from Kishiwada fishing port, raw (nama) or boiled (kamaage) (Tabelog) · original raw-shirasu bowl ¥1,000, large +¥110–120 (January and October 2026); shirasu bowl lunch of boiled shirasu ¥990 (September 2026) · Shirasu Gozen of raw and boiled shirasu with fried fish, a raw egg and miso soup ¥1,600, limited (September–October 2026) · Kinchaku Ya set of sashimi, shirasu, squid shiokara, sweet-simmered small fish, croquette and fried oyster ¥1,600 (October 2026) · "masu-mori" chef\'s assortments of 3, 5 or 10 items (Tabelog) · senbero set of a draft beer and three daily small dishes (October 2026); quick-drink set ¥1,100 (September 2026) · nine one-cup sakes, frozen fruit sours, Kishiwada beer (Tabelog; September 2026) · seafood hot pot in winter (Tabelog)',
    website: SITE, gmaps: gm('きんちゃく家 なんば店'), menu_url: null,
    notes: "[Seafood izakaya · Namba CITY, Kishiwada shirasu] A lively little seafood izakaya in the Komejirushi alley under the Nankai tracks, the Namba branch of a Kishiwada fishing-port shop, with counter, tables and seats outside and festival music on the speakers. Shirasu comes straight from Kishiwada port, and the thing to order is the raw-shirasu bowl, ¥1,000 at lunch in October 2026, or the limited Shirasu Gozen with both raw and fluffy boiled shirasu, fried fish and a raw egg (¥1,600). At night there are assortments of the day's fish served in a masu, a 'senbero' set of beer and three small dishes, one-cup sakes and Kishiwada beer. Regulars come back several times a month; one found the portions small for men. Closed Wednesday evenings.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff (unnamed)'], origin: null, background: 'Per the operator\'s site (ikari-f.co.jp): two directly run shops, きんちゃく家 岸和田店 and きんちゃく家 なんば店, serving fresh fish at low prices, including Osaka shirasu sent direct from Kishiwada fishing port. Tabelog: opened 6 April 2024; a sister of a famous shop in Kishiwada.', philosophy: null, specialty: 'Raw-shirasu bowl; Shirasu Gozen.',
      anecdotes: [
        { text: '"I\'ve become hooked on fresh shirasu and this is my third visit this month." — September 2026, the raw-shirasu bowl.', source: R + 'B535004106/' },
        { text: '"I arrived just as they opened, and the staff said, \'You made it just in time for our special limited offer of 5 servings!\'" — September 2026, the Shirasu Gozen.', source: R + 'B535314140/' },
        { text: '"The Senbero Set includes a draft beer and three daily specials. Today, it featured shirasu (young sardines) tsukudani, octopus wasabi, and tempura of kiss fish." — October 2026.', source: R + 'B537627216/' },
      ],
      japanese_sources_summary: '運営会社のサイト (ikari-f.co.jp): きんちゃく家 岸和田店、きんちゃく家 なんば店、直営店だからできる新鮮な魚を低価格で、岸和田漁港直送の大阪産しらすなどとれたての海鮮を大阪市内で。食べログ (店舗会員): きんちゃく家 なんば店、海鮮・居酒屋・鍋、大阪市浪速区難波中2-10-25 なんばCITY なんばこめじるし、南海なんば駅から徒歩3分、毎日11:00〜15:00、17:00〜22:00 (水曜は昼のみ)、お通し380円、カード・電子マネー・QR 可、33席、屋外席、店内禁煙、貸切40名まで、2024年4月6日オープン。店の紹介 (英訳): 岸和田漁港直送の鮮魚、岸和田の有名店の姉妹店、海鮮丼、生しらすと釜揚げしらすの丼、3・5・10品の masu-mori のセット、ワンカップの日本酒9種、フローズンサワー、冬の海鮮鍋、お祭りの BGM。口コミ(2025年9月〜2026年10月): 生しらすの丼1,000円 (大盛り+110〜120円)、釜揚げのしらす丼ランチ990円、Shirasu Gozen 1,600円 (1日5食)、きんちゃく家の定食1,600円、senbero のセット、軽く飲むセット1,100円、岸和田のビール、QR で注文、月に何度も来る常連、男性には少なめという声。',
      confidence: 'medium', sources: [TB, SITE, 'https://ikari-f.co.jp/shop/', R + 'B505541552/', R + 'B514103833/', R + 'B535004106/', R + 'B535314140/', R + 'B535339580/', R + 'B535395414/', R + 'B536362604/', R + 'B537044844/', R + 'B537627216/', R + 'B538012697/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering; set lunches (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-10-25 なんばCITY なんばこめじるし',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and operator site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目10番25号 (go) 41m (the address covers the long Namba CITY site; the Tabelog point is on the Komejirushi alley); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B514103833/', R + 'B505541552/', R + 'B535395414/'],
    price_note: 'Prices from September and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Original raw-shirasu bowl', '¥1,000', 'Bowls', 'ask', 'no', 'October 2026 review; large +¥110–120.', 'nama_shirasu_don'),
      it('', '', 'Shirasu Gozen: raw and boiled shirasu, fried fish, egg, miso soup (limited)', '¥1,600', 'Sets', 'no', 'no', 'September and October 2026 reviews.', 'shirasu_gozen'),
      it('', '', 'Kinchaku Ya set meal (sashimi, shirasu, fried dishes)', '¥1,600', 'Sets', 'no', 'no', 'October 2026 review.', 'kinchakuya_teishoku'),
      it('', '', 'Shirasu bowl lunch (boiled)', '¥990', 'Bowls', 'ask', 'no', 'September 2026 review.', 'shirasu_don_lunch'),
    ] }, {
    cuisine: '岸和田の店の姉妹店の漁港の海鮮居酒屋 (食べログ、ikari-f.co.jp)・岸和田漁港直送のしらすを生か釜揚げで (食べログ)・生しらすの丼1,000円、大盛り+110〜120円 (2026年1月・10月)。釜揚げのしらす丼ランチ990円 (2026年9月)・生しらすと釜揚げしらすに揚げ物、生卵、みそ汁の Shirasu Gozen 1,600円、数量限定 (2026年9月〜10月)・お造り、しらす、イカの塩辛、小魚の甘煮、コロッケ、カキフライのきんちゃく家の定食1,600円 (2026年10月)・その日の魚の masu-mori 3品、5品、10品 (食べログ)・生ビールと日替わり3品の senbero のセット (2026年10月)。軽く飲むセット1,100円 (2026年9月)・ワンカップの日本酒9種、フローズンのフルーツサワー、岸和田のビール (食べログ、2026年9月)・冬は海鮮鍋 (食べログ)',
    neighborhood: '難波中2-10-25、なんばCITY の南海の高架下のなんばこめじるし。南海なんば駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。しらす丼や刺身は醤油ベースのたれで、定食には天ぷら、コロッケ、カキフライも。',
    vegan_detail: 'ヴィーガンではありません。しらす、刺身、魚の揚げ物の海鮮居酒屋。',
    notes: '[海鮮居酒屋・なんばCITY、岸和田のしらす] 南海の高架下のなんばこめじるしにある、にぎやかな小さな海鮮居酒屋で、岸和田漁港の店のなんば店。カウンター、テーブル、外の席があり、BGM はお祭りの音楽。しらすは岸和田漁港から直送で、頼むなら生しらす丼 (2026年10月の昼は1,000円) か、生しらすとふわふわの釜揚げしらすに揚げ物と生卵がつく数量限定の Shirasu Gozen (1,600円)。夜はその日の魚を升に盛ったセット、ビールと小皿3品の「senbero」セット、ワンカップの日本酒、岸和田のビールも。月に何度も来る常連もいて、男性には少なめという人も。水曜の夜は休み。',
  });
}

// ================================================================ 達屋 なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27135756/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kimiyu.co.jp';
  const WD = day(['11:30', '14:30'], ['17:00', '23:00']); const WE = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_tazya_namba', name: '達屋 なんば店 (TAZ-YA Nanba)', category: 'OMNI',
    lat: 34.664798, lng: 135.505334, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The lunch box includes kara-age and dashimaki, and the evening menu oden, dashi shabu-shabu and soba to finish, with a mirin-based pot sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: katsuobushi is shaved over most dishes, and the menu is pork, beef, fish and chicken in dashi.',
    hours_raw: 'Mon–Fri 11:30–14:30 and 17:00–23:00; Sat and Sun 11:00–15:00 and 17:00–23:00 (Tabelog). Reservations accepted; the limited "Jewel Box" lunch can be reserved by the day before on weekdays, in limited numbers at weekends; a 2-hour dinner and 1-hour lunch limit when busy (Tabelog). Starter ¥500 at dinner; private-room fee ¥500 a person at dinner (Tabelog). Cards (VISA, Master, JCB, AMEX) and PayPay; no e-money (Tabelog). 34 seats on 2F: a main room of 24 and private rooms for 4, 6 and 8 (a gold "VIP" room); private hire up to 24–30; non-smoking (Tabelog; October 2026). Up a steep staircase behind a plain door (October 2026). Opened 10 May 2023 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba-Sennichimae 1-8, 2F, in Ura-Namba — near Namba (subway) and Kintetsu Nippombashi',
    cuisine: 'Izakaya of genuine ingredients: vegetables from the company\'s own farm in Yao, freshly shaved katsuobushi, Hokkaido free-range pork, a pot sauce of three-year-aged mirin, and junmai sake (Tabelog) · the social-media "Jewel Box" lunch in a wooden treasure chest of sashimi, roast beef, kara-age, dashimaki, potato salad and obanzai, with katsuobushi from Ibusuki shaved without limit ¥2,590 (October 2026; rice refills extra) · a meat-wrapped lunch (October 2026) · dinner course ¥3,800: appetizer, fried simmered daikon with fried-leek sauce, a seasonal dish, dashi shabu-shabu in a small pot, soba to finish, a choice of salmon-and-tuna rice bowl (October 2026) · house tofu with katsuobushi shaved at the table as the starter; jasmine-tea pudding (October 2026)',
    website: SITE, gmaps: gm('達屋 なんば店'), menu_url: null,
    notes: "[Izakaya · Ura-Namba, freshly shaved katsuobushi] A second-floor izakaya in the Ura-Namba back streets, up a steep staircase behind a plain door, built on vegetables from the company's own farm in Yao and katsuobushi shaved so thin it flies off the plate. At lunch it is famous on social media for the 'Jewel Box', a wooden treasure chest of sashimi, roast beef, kara-age, dashimaki and small dishes, with bonito flakes from Ibusuki for the rice without limit (¥2,590 in October 2026; book the day before). In the evening, try the deep-fried simmered daikon and the ¥3,800 course of dashi shabu-shabu with soba, ideally in the gold private room. One diner found the box pretty but unremarkable and the rice refills extra (October 2026). There is a sister restaurant, BELLA BOCCA, downstairs.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: a hideaway izakaya for adults focused on genuine ingredients (vegetables from its own farm in Yao, where guests can join farm days; freshly shaved katsuobushi; Hokkaido free-range pork; a pot sauce made with three-year-aged mirin) and junmai sake; opened 10 May 2023. Operator kimiyu.co.jp. Reviews in October 2026 mention a sister on 1F, BELLA BOCCA, and an Umeda location.', philosophy: '"The truly delicious meal is eating with a gentle mother and family" (company site).', specialty: 'Jewel Box lunch; freshly shaved katsuobushi; fried simmered daikon.',
      anecdotes: [
        { text: '"Be careful, as the katsuobushi is very thin and fluffy, so it might fly away! Haha." — October 2026, the house-tofu starter.', source: R + 'B538172849/' },
        { text: '"I had the Gem Box Lunch for JPY 2,590, which was a hearty meal. The bonito flakes were all-you-can-eat" — October 2026.', source: R + 'B537738128/' },
        { text: '"Although bonito flakes were available for unlimited refills, there was an extra charge for rice refills" — October 2026.', source: R + 'B537377855/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 達屋 なんば店 (TAZ-YA)、居酒屋・しゃぶしゃぶ、大阪市中央区難波千日前1-8 2F、月〜金11:30〜14:30・17:00〜23:00、土・日11:00〜15:00・17:00〜23:00、予約可、限定の Jewel Box のランチは平日は前日までに予約、週末は数量限定、混雑時はディナー2時間・ランチ1時間、お通し代500円・個室料1人500円 (ディナーのみ)、カード・PayPay 可、34席、2階、24席のホールと4・6・8名の個室 (VIP 個室)、貸切24〜30名、禁煙、2023年5月10日オープン。店の紹介 (英訳): 自社の農園の野菜、削りたてのかつお節、Hokkaido の放牧の豚、3年熟成の本みりんの鍋のたれ、純米酒、大人の隠れ家の居酒屋、Yao の自社農園の農業体験。会社のサイト (kimiyu.co.jp): 「優しいお母さんと家族と食べる食事」が一番おいしいもの。口コミ(2026年10月): Jewel Box のランチ2,590円 (刺身、ローストビーフ、唐揚げ、だし巻き、ポテサラ、おばんざい、Ibusuki のかつお節はおかわり自由、ご飯のおかわりは有料)、肉巻きのランチ、3,800円のコース (大根の揚げ煮、だしのしゃぶしゃぶ、締めのそば、サーモンとマグロの丼)、自家製の豆腐に目の前でかつお節、ジャスミンティーのプリン、金色の個室、急な階段、1階の姉妹店 BELLA BOCCA、Umeda にも店。',
      confidence: 'medium', sources: [TB, SITE, R + 'B481509330/', R + 'B536922842/', R + 'B536954714/', R + 'B537185177/', R + 'B537377855/', R + 'B537401784/', R + 'B537738128/', R + 'B538012234/', R + 'B538172849/', R + 'B538413193/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunch and courses; book the lunch box ahead (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前1-8 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前1番8号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537738128/', R + 'B537401784/'],
    price_note: 'Prices from October 2026 reviews; charges from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Jewel Box lunch (limited)', '¥2,590', 'Lunch', 'no', 'no', 'October 2026 reviews.', 'jewel_box_lunch'),
      it('', '', 'Dinner course: dashi shabu-shabu, soba, rice bowl', '¥3,800', 'Courses', 'no', 'no', 'October 2026 reviews.', 'dashi_shabu_course'),
      it('', '', 'Fried simmered daikon', '', 'Dishes', 'ask', 'no', 'October 2026 reviews.', 'age_daikon'),
    ] }, {
    cuisine: '本物の食材の居酒屋: 自社の Yao の農園の野菜、削りたてのかつお節、Hokkaido の放牧の豚、3年熟成の本みりんの鍋のたれ、純米酒 (食べログ)・SNS で話題の Jewel Box のランチは、木の宝箱に刺身、ローストビーフ、唐揚げ、だし巻き、ポテトサラダ、おばんざい、Ibusuki のかつお節はかけ放題で2,590円 (2026年10月、ご飯のおかわりは有料)・肉巻きのランチ (2026年10月)・夜のコース3,800円: 先付け、大根の揚げ煮と揚げねぎのたれ、季節の一品、小鍋のだしのしゃぶしゃぶ、締めのそば、サーモンとマグロの丼 (2026年10月)・お通しは自家製豆腐に目の前でかつお節を削って。ジャスミンティーのプリン (2026年10月)',
    neighborhood: '難波千日前1-8 2F、裏なんば。地下鉄なんば駅、近鉄日本橋駅の近く',
    gf_detail: '要確認。グルテンの情報なし。ランチの箱には唐揚げやだし巻き、夜はおでん、だしのしゃぶしゃぶ、締めのそば、みりんベースの鍋のたれ。',
    vegan_detail: 'ヴィーガンではありません。ほとんどの料理にかつお節をかけ、豚、牛、魚、鶏とだしの店。',
    notes: '[居酒屋・裏なんば、削りたてのかつお節] 裏なんばの裏通り、なんの変哲もない扉の奥の急な階段を上がる2階の居酒屋。自社の Yao の農園の野菜と、皿から飛んでいくほど薄く削ったかつお節が自慢。昼は SNS で有名な「Jewel Box」で、木の宝箱に刺身、ローストビーフ、唐揚げ、だし巻き、小鉢、ご飯には Ibusuki のかつお節がかけ放題 (2026年10月は2,590円、前日までに予約を)。夜は大根の揚げ煮と、だしのしゃぶしゃぶとそばの3,800円のコースを、できれば金色の個室で。箱は見た目はきれいだが味はふつうでご飯のおかわりが有料という人も (2026年10月)。1階には姉妹店の BELLA BOCCA。',
  });
}

// ================================================================ 炭から隅まで
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27134304/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '23:00']);
  put({
    id: 'osaka_sumi_kara_sumi_made_higashishinsaibashi', name: '炭焼きと焼き鳥 炭から隅まで 難波心斎橋店 (Sumi kara Sumi made)', category: 'OMNI',
    lat: 34.670481, lng: 135.503344, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers come with sauce or salt; the menu includes a wagyu katsu sandwich, spring rolls, kimbap and meat sushi with soy-based seasonings.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a charcoal grill of beef tongue, wagyu, duck and chicken.',
    hours_raw: 'Daily 12:00–23:00, last order 22:00, straight through with no break; closed on some days (Tabelog; August 2026). Reservations accepted; weekends fill with bookings (October 2026). Table charge ¥500 a person, none with a course (Tabelog). No cards or e-money; PayPay accepted (Tabelog). 30 seats: an 8-seat counter on 1F, tables and sofa seats on 2F, a private room for 8–12; private hire up to 25; heated tobacco only (cigarettes not allowed from July 2026); free Wi-Fi (Tabelog). Opened 2 February 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-6-19, 1F of 三ツ寺ギャラクシービル5号館 — about 9 min from Shinsaibashi or Namba Stn, 5 min from Namba Walk exit B22',
    cuisine: 'Charcoal grill and yakitori, with rare Kawachi duck from a supplier of 150 years, thick-cut beef tongue and wagyu (Tabelog) · napa-cabbage kimchi ¥350, beef-tongue tsukimi hamburg ¥800, beef-tongue roast beef ¥850, black-wagyu katsu sandwich ¥2,200, assorted meat sushi of three kinds ¥1,750, chicken thigh with sauce ¥650 (October 2026) · wagyu hiuchi stir-fried with peppers ¥1,200 (August 2026) · thick-cut toro beef tongue, Kawachi duck sashimi and roast, a rare cutlet, kamo shabu-shabu in ichiban dashi (Tabelog; 2026 reviews) · charcoal potato salad, chicken-dashi rolled omelette with shirasu, beef-tongue yukhoe kimbap, toro-taku kimbap, beef-tongue bolognese spring rolls (2026 reviews) · braised beef tongue or pork as the starter (2026 reviews) · table charge ¥500',
    website: null, gmaps: gm('炭から隅まで 難波心斎橋店'), menu_url: null,
    notes: "[Charcoal grill · Higashi-Shinsaibashi, beef tongue and Kawachi duck] A two-floor charcoal grill in the Galaxy building lanes of Higashi-Shinsaibashi, open straight from noon to 11 p.m., with a bar-like counter downstairs and tables and sofas upstairs. Despite the yakitori name the stars are beef tongue (a thick-cut 'toro' tongue skewer, a tongue tsukimi hamburg, tongue roast beef) and rare Kawachi duck, served as sashimi, roast or shabu-shabu in ichiban dashi, with creative plates like a black-wagyu katsu sandwich (¥2,200) and an assortment of meat sushi (¥1,750) in October 2026. It belongs with the Ura-Namba grill Black. Diners found it generous and stylish if a bit pricey and cramped; no cards, but PayPay works. Weekends book out.",
    chef_bio: { chef_name: null, roles: ['Grill staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: rare Kawachi duck through a unique route from a supplier with 150 years of history; thick-cut toro beef tongue; Kawachi duck roast and rare cutlet; kamo shabu-shabu in ichiban dashi; private rooms. Opened 2 February 2023. An August 2026 diner was told it is a sister of the charcoal-grill Italian Black in Ura-Namba.', philosophy: null, specialty: 'Thick-cut toro beef tongue; Kawachi duck; meat sushi.',
      anecdotes: [
        { text: '"Like Black, there are no idle hours here, which makes this type of establishment quite rare." — August 2026, an Obon afternoon.', source: R + 'B533608364/' },
        { text: '"My favorite was the Wagyu Beef Katsu Sandwich—this is a must-order!" — August 2026.', source: R + 'B534485093/' },
        { text: '"Personally, I loved the Toro-Taku Kimbap and the thick-cut Toro Beef Tongue the most." — September 2026.', source: R + 'B537181434/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 炭焼きと焼き鳥 炭から隅まで 難波心斎橋店、焼き鳥・居酒屋、大阪市中央区東心斎橋2-6-19 三ツ寺ギャラクシービル5号館 1F、心斎橋駅6番出口・なんば駅25番出口から徒歩約9分、毎日12:00〜23:00 (L.O.22:00)、不定休、予約可、チャージ1人500円 (コースは無料)、カード・電子マネー不可、PayPay 可、30席 (カウンター8、テーブル11、ソファ8)、8〜12名の個室、貸切25名まで、加熱式たばこのみ (2026年7月から紙巻きは不可)、Wi-Fi、2023年2月2日オープン。店の紹介 (英訳): 150年の歴史の仕入れ先から独自のルートで希少な Kawachi の鴨、厚切りの toro の牛タン、鴨のロースト、レアカツ、ichiban dashi の鴨しゃぶ、個室あり。口コミ(2026年8月〜10月): 白菜キムチ350円、牛タンの tsukimi ハンバーグ800円、牛タンのローストビーフ850円、黒毛和牛のカツサンド2,200円、肉寿司3種1,750円、もものタレ焼き650円、和牛の hiuchi のチンジャオロース1,200円、炭のポテトサラダ、しらすの鶏だし巻き、牛タンユッケの kimbap、トロたくの kimbap、牛タンのボロネーゼ春巻、昼から通し営業、姉妹店の Black、少し高く席がせまいという声、週末は予約で満席。',
      confidence: 'medium', sources: [TB, R + 'B533497138/', R + 'B533608364/', R + 'B534485093/', R + 'B534528136/', R + 'B535188458/', R + 'B536123529/', R + 'B537181434/', R + 'B537884566/', R + 'B538153444/', R + 'B538417445/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff help build an order to your budget (August 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区東心斎橋2-6-19 三ツ寺ギャラクシービル5号館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目6番19号 (go) 3m. 焼肉 無双武蔵 (osaka_yakiniku_musou_musashi_higashishinsaibashi) and 鮨 一慶 (osaka_sushi_ikkei_higashishinsaibashi) share 三ツ寺ギャラクシービル5号館 1F with pins within about 10 m, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538153444/', R + 'B534528136/'],
    price_note: 'Prices from August and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Black-wagyu katsu sandwich', '¥2,200', 'Dishes', 'no', 'no', 'October 2026 review.', 'wagyu_katsu_sando'),
      it('', '', 'Assorted meat sushi (3 kinds)', '¥1,750', 'Dishes', 'ask', 'no', 'October 2026 review.', 'niku_sushi'),
      it('', '', 'Beef-tongue roast beef', '¥850', 'Dishes', 'ask', 'no', 'October 2026 review.', 'tan_roast_beef'),
      it('', '', 'Beef-tongue tsukimi hamburg', '¥800', 'Dishes', 'ask', 'no', 'October 2026 review.', 'tan_hamburg'),
      it('', '', 'Chicken thigh with sauce (skewer)', '¥650', 'Skewers', 'ask', 'no', 'October 2026 review.', 'momo_tare'),
    ] }, {
    cuisine: '炭焼きと焼き鳥、150年の仕入れ先からの希少な Kawachi の鴨、厚切りの牛タン、和牛 (食べログ)・白菜キムチ350円、牛タンの tsukimi ハンバーグ800円、牛タンのローストビーフ850円、黒毛和牛のカツサンド2,200円、肉寿司3種1,750円、もものタレ焼き650円 (2026年10月)・和牛の hiuchi とピーマンの炒め1,200円 (2026年8月)・厚切りの toro の牛タン、Kawachi の鴨の刺身とロースト、レアカツ、ichiban dashi の鴨しゃぶ (食べログ、2026年の口コミ)・炭のポテトサラダ、しらすの鶏だし巻き、牛タンユッケの kimbap、トロたくの kimbap、牛タンのボロネーゼの春巻 (2026年の口コミ)・お通しは牛タンか豚の角煮 (2026年の口コミ)・チャージ500円',
    neighborhood: '東心斎橋2-6-19、三ツ寺ギャラクシービル5号館の1階。心斎橋駅やなんば駅から約9分、なんばウォーク B22出口から5分',
    gf_detail: '要確認。グルテンの情報なし。串はタレか塩、メニューには和牛のカツサンド、春巻、kimbap、醤油ベースの味つけの肉寿司も。',
    vegan_detail: 'ヴィーガンではありません。牛タン、和牛、鴨、鶏の炭焼き。',
    notes: '[炭焼き・東心斎橋、牛タンと Kawachi の鴨] 東心斎橋のギャラクシービルの路地にある2フロアの炭焼きの店で、昼12時から夜11時まで通しで営業。1階はバーのようなカウンター、2階はテーブルとソファ。焼き鳥の名前だが、主役は牛タン (厚切りの toro の牛タンの串、牛タンの tsukimi ハンバーグ、牛タンのローストビーフ) と希少な Kawachi の鴨で、刺身、ロースト、ichiban dashi の鴨しゃぶに。黒毛和牛のカツサンド (2,200円) や肉寿司の盛り合わせ (1,750円) などの創作料理も (2026年10月)。裏なんばの炭焼きの Black の姉妹店。量が多くおしゃれだが、少し高く席がせまいという声も。カードは使えないが PayPay は使える。週末は予約で埋まる。',
  });
}

save();
