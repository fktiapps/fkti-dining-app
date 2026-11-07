// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 49.
//   + チュウカソバ コウダイ Chuka Soba Kodai (one-person ramen shop off Horikawa; ramen-and-gyudon sets)
//   + 童夢 Doumu (cake and tart café near Demachiyanagi since 1980; antiques and the owner's piano)
//   + 総本家 媽媽菜館 六花 Sohonke Mama Saikan Rikka (Northeast Chinese and Taiwanese by Hyakumanben; open late)
//   + ビストロ・スリージェ Bistro Cerisier (regional French bistro by Demachiyanagi Station)
//   Picked on 2026-11-06: from `queue.mjs kyoto-missed next core 300`, lane ids in queue order 26034800, 26001884,
//   26034608, 26000996. None is in data/kyoto.json by name (コウダイ/Kodai, 童夢/Doumu, 媽媽菜館/六花 — 喫茶 六花 in data is a
//   different shop, スリージェ/Cerisier) or address (東橋詰町65-1, 一真町92, 吉田泉殿町4-9, 田中下柳町1-3).
//   Same-name count (same brand or operator only): コウダイ, 童夢 — one shop each in our crawl. 媽媽菜館 — one in our crawl;
//   Tabelog's name search shows two more shops called Mama Saikan, operator not established; invoice holder of 六花 is an
//   individual (NTA register) — at most a small group, flagged. スリージェ — our crawl also has クレープリー スリージェ; no source
//   I opened links the two, flagged. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: none listed for any of the four.
//   Other-diner remarks (Greg 2026-11-06): single-review complaints about other customers left out (Doumu, May 2026).
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-49');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ チュウカソバ コウダイ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034800/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '21:30']);
  put({
    id: 'kyoto_chuka_soba_kodai', name: 'チュウカソバ コウダイ (Chuka Soba Kodai)', category: 'OMNI',
    lat: 35.024716, lng: 135.75223, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in shoyu or shio broth; karaage on the side (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu ramen, gyudon and karaage sets (2025–2026 reviews).',
    hours_raw: '11:30–14:00 and 17:30–21:30; closed Thursday; hours and days off may change (Tabelog) — days off are marked on a calendar inside (February 2025). No reservations (Tabelog). Cash only (Tabelog). Non-smoking (Tabelog). Run by one person, so orders can take a few minutes at busy times (October and December 2025). In a narrow lane one block east of Horikawa-dori, opposite the Horikawa shopping street (July 2025, March 2026). Opened 26 September 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Off Horikawa-Nakadachiuri, opposite the Horikawa shopping street',
    cuisine: 'A small neighbourhood ramen shop with two ramens, shoyu and shio, in a light, old-style clear broth with thin straight noodles, chashu, menma and green onion (2025–2026 reviews) · ramen ¥800, or ¥800 with rice (2025–2026); set with a mini gyudon or karaage ¥1,000 (2025–2026); large +¥50 (February 2025) · side dishes such as boiled bean sprouts with chashu and karaage (April 2026) · oroshi reimen in summer (September 2026) · homemade yakibuta to take home (September 2026)',
    website: null, gmaps: gm('チュウカソバ コウダイ 上京区東橋詰町'), menu_url: null,
    notes: '[Ramen · off Horikawa-Nakadachiuri, ¥800 with rice] A one-person ramen shop in a narrow lane east of Horikawa, serving light, old-fashioned shoyu or shio ramen with generous chashu — ¥800 with or without rice, ¥1,000 with a mini gyudon or karaage. Cash only; closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Reviewers describe a one-person operation (October 2025; December 2025) and an everyday taste that a regular would never tire of (August 2025).',
      philosophy: null, specialty: 'Shoyu ramen with gyudon.',
      anecdotes: [
        { text: 'A regular living nearby bought the homemade yakibuta to make ramen at home (September 2026).', source: R + 'B501523598/' },
        { text: 'A December 2025 regular found the place nearly full at 12:40 and waited about five minutes to order.', source: R + 'B507074370/' },
      ],
      japanese_sources_summary: '食べログ: チュウカソバ コウダイ、ラーメン、上京区東橋詰町65-1、11:30〜14:00、17:30〜21:30、木曜定休、予約不可、現金のみ、禁煙、2020年9月26日オープン。口コミ (2025〜2026年、英語): 醤油と塩の2種、あっさりした昔ながらのスープ、細いストレート麺、チャーシュー、メンマ、ねぎ、ラーメン800円、ご飯付きも800円、ミニ牛丼か唐揚げのセット1,000円、大盛+50円、もやし、冷やしおろし麺、自家製の焼豚の持ち帰り、ひとりで営む店、堀川商店街の向かいの路地。',
      confidence: 'medium', sources: [TB, R + 'B501021426/', R + 'B501523598/', R + 'B507074370/', R + 'B507674263/', R + 'B509886486/', R + 'B512175317/', R + 'B515308323/', R + 'B515321718/', R + 'B524104766/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Local ramen shop; cash only; one person cooking and serving.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区東橋詰町65-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.024716, 135.75223); cross-checked: GSI 京都府京都市上京区東橋詰町65番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B509886486/', R + 'B515308323/', R + 'B501021426/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu or shio ramen (with rice, same price)', '¥800', 'Ramen', 'no', 'no', '2025–2026.', 'ramen'),
      it('', '', 'Ramen and mini gyudon set', '¥1,000', 'Sets', 'no', 'no', '2025–2026.', 'gyudon_set'),
      it('', '', 'Ramen and karaage set with rice', '¥1,000', 'Sets', 'no', 'no', 'July 2025.', 'karaage_set'),
      it('', '', 'Large noodles', '+¥50', 'Ramen', '', '', 'February 2025.', 'large'),
    ] }, {
    cuisine: '醤油と塩の2種のラーメンの小さな町のラーメン屋。昔ながらのあっさりした澄んだスープに細いストレート麺、チャーシュー、メンマ、ねぎ (2025〜2026年の口コミ)・ラーメン800円、ご飯付きも800円 (2025〜2026年)。ミニ牛丼か唐揚げのセット1,000円 (2025〜2026年)。大盛+50円 (2025年2月)・チャーシュー入りのゆでもやしや唐揚げなどの一品 (2026年4月)・夏の冷やしおろし麺 (2026年9月)・自家製の焼豚の持ち帰り (2026年9月)',
    neighborhood: '堀川中立売の近く、堀川商店街の向かい',
    gf_detail: 'グルテンフリーではない。醤油か塩のスープに小麦の麺、唐揚げのセットも (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。チャーシューのラーメン、牛丼や唐揚げのセット (2025〜2026年の口コミ)。',
    notes: '[ラーメン・堀川中立売、ご飯付き800円] 堀川の東の細い路地にある、ひとりで営むラーメン屋。昔ながらのあっさりした醤油か塩に、たっぷりのチャーシュー。ご飯付きでも800円、ミニ牛丼か唐揚げのセットは1,000円。現金のみ、木曜定休。',
  });
}

// ================================================================ 童夢
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001884/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:30']);
  put({
    id: 'kyoto_doumu_imadegawa', name: '童夢 (Doumu)', category: 'OMNI',
    lat: 35.029292, lng: 135.768702, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a tart and cake shop — fruit tarts on a crisp pastry crust, Mont Blanc, tiramisu, sandwiches (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: custard, cream, mascarpone and cheesecakes (2024–2026 reviews).',
    hours_raw: 'Tuesday–Sunday and holidays 11:00–18:30; closed Monday and some Sundays; hours may change (Tabelog). No reservations (Tabelog). Cash only (Tabelog; January 2026). 19 seats: three tables for 4, one for 5, and piano seating (Tabelog). Cakes to take away — ask inside (Tabelog; December 2024). About 2 min on foot from the Kawaramachi-Imadegawa bus stop, 6 min from Demachiyanagi (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Imadegawa-Teramachi — 2 min from the Kawaramachi-Imadegawa bus stop',
    cuisine: 'A cake and tart house founded in 1980 (August 2025; January 2026) · seasonal fruit tarts with custard on a flaky crust, fruit added after you order (2024–2026) — strawberry and grape (April 2025), peach (July 2025), strawberry, La France pear and grape ¥600 (January 2026) · chestnut cake ¥600 (January 2026); matcha Mont Blanc (April 2026); matcha and cherry tiramisu with mascarpone (April 2025, July 2026); Salzburg cake (January 2026) · cheesecakes, peach parfait and shaved ice in season (August 2025) · cake sets with coffee or milk tea (2025); sandwiches (October 2024)',
    website: null, gmaps: gm('童夢 上京区一真町 ケーキ'), menu_url: null,
    notes: '[Cakes and tarts · Imadegawa near Demachiyanagi, since 1980] An antique-filled cake house with vintage clocks, classical music and a piano, making seasonal fruit tarts with old-style custard and a crisp crust — the fruit goes on after you order. Cake sets, take-away cakes (about ¥600), and sometimes a tune from the owner on the piano. Cash only; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers date the shop to 1980 (August 2025; January 2026). A longtime customer recalls a take-away showcase out front that was turned into an eat-in dessert house a few years ago (December 2024). Regulars mention the owner playing the piano for guests when the room is quiet (October 2024; July 2026).',
      philosophy: null, specialty: 'Seasonal fruit tarts.',
      anecdotes: [
        { text: 'A six-time regular looks forward to hearing the owner play the piano again (July 2026).', source: R + 'B474880465/' },
        { text: 'A December 2025 visitor arriving near 16:00 was told kindly that only 40 minutes were left before closing.', source: R + 'B520300833/' },
      ],
      japanese_sources_summary: '食べログ: 童夢、ケーキ・カフェ、上京区今出川通寺町東入ル一真町92、河原町今出川バス停から徒歩2分、出町柳から徒歩6分、火〜日・祝 11:00〜18:30、月曜定休、日曜不定休、予約不可、現金のみ、19席 (4人席3、5人席1、ピアノ席)、持ち帰り可。口コミ (2024〜2026年、英語): 1980年創業、アンティークと古い時計、クラシック音楽、店主のピアノ、注文を受けてから仕上げる季節の果物のタルト、昔ながらのカスタード、栗のケーキ600円、苺とラ・フランスとぶどうのタルト600円、抹茶のモンブラン、抹茶とさくらんぼのティラミス、ザルツブルク、ケーキセット、サンドイッチ。',
      confidence: 'medium', sources: [TB, R + 'B455626772/', R + 'B474880465/', R + 'B497603630/', R + 'B504594154/', R + 'B507074586/', R + 'B513368302/', R + 'B520300833/', R + 'B520860080/', R + 'B521322054/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Old-style cake café; cash only; small room.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区今出川通寺町東入ル一真町92',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.029292, 135.768702); cross-checked: GSI 京都府京都市上京区一真町92番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521322054/'],
    price_note: 'Take-away prices from a January 2026 review, tax included.', last_checked: TODAY, items: [
      it('', '', 'Seasonal fruit tart (strawberry, La France pear and grape)', '¥600', 'Cakes', 'no', 'no', 'January 2026.', 'fruit_tart'),
      it('', '', 'Chestnut cake', '¥600', 'Cakes', 'no', 'no', 'January 2026.', 'chestnut_cake'),
      it('', '', 'Matcha and cherry tiramisu', '', 'Cakes', 'no', 'no', 'April 2025, July 2026.', 'tiramisu'),
    ] }, {
    cuisine: '1980年創業のケーキとタルトの店 (2025年8月、2026年1月)・注文を受けてから果物をのせる、さくさくの生地とカスタードの季節のタルト (2024〜2026年)。苺とぶどう (2025年4月)、桃 (2025年7月)、苺とラ・フランスとぶどう600円 (2026年1月)・栗のケーキ600円 (2026年1月)。抹茶のモンブラン (2026年4月)。マスカルポーネの抹茶とさくらんぼのティラミス (2025年4月、2026年7月)。ザルツブルク (2026年1月)・季節のチーズケーキ、桃のパフェ、かき氷 (2025年8月)・コーヒーやミルクティーのケーキセット (2025年)。サンドイッチ (2024年10月)',
    neighborhood: '今出川寺町。河原町今出川バス停から徒歩2分',
    gf_detail: 'グルテンフリーではない。さくさくの生地の果物のタルト、モンブラン、ティラミス、サンドイッチのケーキとタルトの店 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。カスタード、クリーム、マスカルポーネ、チーズケーキ (2024〜2026年の口コミ)。',
    notes: '[ケーキとタルト・出町柳近くの今出川、1980年創業] アンティークや古い時計、クラシック音楽、ピアノのあるケーキの店。昔ながらのカスタードとさくさくの生地の季節の果物のタルトで、果物は注文してからのせる。ケーキセットや持ち帰りのケーキ (600円ほど)。店主がピアノを弾いてくれることも。現金のみ、月曜定休。',
  });
}

// ================================================================ 総本家 媽媽菜館 六花
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26034608/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-rikka.jp/';
  const H = day(['11:30', '23:30']);
  put({
    id: 'kyoto_mama_saikan_rikka', name: '総本家 媽媽菜館 六花 (Sohonke Mama Saikan Rikka)', category: 'OMNI',
    lat: 35.029096, lng: 135.778009, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Northeast Chinese and Taiwanese dishes — gyoza, wontons, wonton noodles, rice vermicelli, yurinchi and karaage, pai gu pork cutlet, braised-pork rice; soy sauce and wheat wrappers throughout, and no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the shop stresses fresh vegetables, and a garlic-and-salt stir-fry of seasonal vegetables appears (May 2026), but broths and sauces are not described.',
    hours_raw: 'Monday–Saturday 11:30–23:30 (L.O. 23:00); Sunday 11:30–22:00 (L.O. 21:30); closed 31 December–3 January (Tabelog). Reservations accepted; online bookings for two or more, and on Friday–Sunday online booking closes at 15:00 on the day (Tabelog). Cards (Visa, Master), e-money, PayPay, Rakuten Pay, Alipay and WeChat Pay (Tabelog). 33 seats over two floors in a townhouse; parties of 20–50 by arrangement (Tabelog; official site). English and Chinese menus and staff (Tabelog). Student discount, ¥50 for Kyoto University students (April 2026); popular with students at lunch (May and September 2026). One minute from the Hyakumanben bus stop, 5 min from Keihan Demachiyanagi (Tabelog). Opened 1 September 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: day(['11:30', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Hyakumanben, by Kyoto University — 5 min from Demachiyanagi',
    cuisine: 'Everyday Chinese home cooking from Northeast China and Taiwan, with plenty of vegetables and few chemical seasonings (Tabelog) · house gyoza with lemon salt; original meat wontons and shrimp wontons in noodle soup (Tabelog; May–November 2026) · lunch sets with brown rice: yurinchi set ¥930 (May 2026), gyoza and karaage set ¥920 (June 2026), karaage set, pai gu pork-chop set with pickled mustard greens, wonton noodles with a mini braised-pork or beef-tendon rice bowl, rice vermicelli with dumplings (2026) · garlic-salt seasonal vegetables, omelette (2026) · courses: Rikka course, 9 dishes, ¥4,950; value course, 6 dishes, ¥2,530; 90-minute free-flow drinks +¥1,980 (Tabelog)',
    website: SITE, gmaps: gm('媽媽菜館 六花 百万遍'), menu_url: TB + 'dtlmenu/',
    notes: '[Chinese and Taiwanese · Hyakumanben, open until 23:30] A two-storey townhouse restaurant by Kyoto University, cooking everyday Northeast Chinese and Taiwanese dishes — gyoza with lemon salt, wonton noodles, yurinchi, pai gu — as cheap lunch sets with brown rice, and staying open until 23:30 for drinks and banquets. Busy with students at lunch; English menu.',
    chef_bio: { chef_name: '高橋 義弘', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'Tabelog’s invoice number T4810789578458 is registered to the individual 高橋 義弘 (NTA register). The shop’s Tabelog text says the menu was created by the owner, a Chinese chef with 50 years of experience, around “Chinese dishes that mothers make for children every day”. Tabelog’s name search lists two other shops called Mama Saikan; no source opened links those shops to this one.',
      philosophy: 'Chinese dishes that mothers cook for children every day — tasty and healthy, with fresh vegetables and few chemical seasonings (Tabelog).',
      specialty: 'Gyoza; meat wontons; yurinchi.',
      anecdotes: [
        { text: 'A May 2026 diner found the brown rice so good it outshone the yurinchi.', source: R + 'B528881271/' },
        { text: 'A May 2026 visitor arriving around 22:00 was relieved to find it still open when nearby places had closed.', source: R + 'B531863031/' },
      ],
      japanese_sources_summary: '公式サイト: 媽媽菜館 六花、落ち着いた町家の隠れ家的な空間、飲み放題だけの注文OK、デリバリーあり。食べログ: 台湾料理・中華料理・バル、左京区吉田泉殿町4-9、百万遍バス停から徒歩1分、京阪出町柳駅から徒歩5分、月〜土 11:30〜23:30 (L.O.23:00)、日 11:30〜22:00、年末年始休み、予約可 (ネット予約は2名から)、カード・電子マネー・QR決済可、33席、英語と中国語のメニュー、2020年9月1日オープン、店主は50年の経験の中国料理人、母が子に毎日作る中華、野菜たっぷりで化学調味料を控える、六花コース9品4,950円、お得コース6品2,530円、飲み放題+1,980円、適格請求書 T4810789578458 (高橋 義弘)。口コミ (2026年、英語): 学割50円、玄米ご飯、油淋鶏定食930円、餃子と唐揚げの定食920円、排骨、ワンタン麺とミニ丼、ビーフン、レモン塩の餃子、学生でにぎわう昼。',
      confidence: 'medium', sources: [SITE, TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=4810789578458', 'https://tabelog.com/en/rstLst/?sw=%E5%AA%BD%E5%AA%BD%E8%8F%9C%E9%A4%A8', R + 'B525746456/', R + 'B527401237/', R + 'B528186048/', R + 'B528881271/', R + 'B529062597/', R + 'B529505955/', R + 'B531863031/', R + 'B535839960/', R + 'B537450484/', R + 'B538473449/'] },
    cultural_comfort: { level: 'english', note: 'English and Chinese menus and staff (Tabelog); casual student favourite.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市左京区吉田泉殿町4-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.029096, 135.778009), kept: it fits Tabelog’s “1 min from the Hyakumanben bus stop” and an April 2026 review placing the shop northwest of the Hyakumanben crossing on the way to Demachiyanagi; but GSI puts 京都府京都市左京区吉田泉殿町4番地 (lot) 198m south (35.027313, 135.777969), and OSM Nominatim reverse-geocodes the Tabelog point to 田中門前町, so the pin is marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B531863031/', R + 'B529505955/'],
    price_note: 'Course prices from Tabelog; set prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Yurinchi set with brown rice', '¥930', 'Lunch sets', 'ask', 'no', 'May 2026.', 'yurinchi_set'),
      it('', '', 'Gyoza and karaage set', '¥920', 'Lunch sets', 'no', 'no', 'June 2026.', 'gyoza_karaage'),
      it('', '', 'Rikka course (9 dishes)', '¥4,950', 'Courses', 'ask', 'no', 'Tabelog; free-flow drinks +¥1,980.', 'rikka_course'),
      it('', '', 'Value course (6 dishes)', '¥2,530', 'Courses', 'ask', 'no', 'Tabelog.', 'value_course'),
    ] }, {
    cuisine: '中国東北と台湾の毎日の家庭の中華。野菜たっぷりで化学調味料を控える (食べログ)・レモン塩で食べる餃子。オリジナルの肉ワンタン、エビワンタンの麺 (食べログ、2026年5〜11月)・玄米ご飯の定食: 油淋鶏定食930円 (2026年5月)、餃子と唐揚げの定食920円 (2026年6月)、唐揚げ定食、高菜付きの排骨定食、ワンタン麺とミニの魯肉飯や牛すじ丼のセット、ビーフンと餃子のセット (2026年)・季節の野菜のにんにく塩炒め、卵焼き (2026年)・コース: 六花コース9品4,950円、お得コース6品2,530円、90分飲み放題+1,980円 (食べログ)',
    neighborhood: '百万遍、京大のそば。出町柳から徒歩5分',
    gf_detail: '要確認。餃子、ワンタン、ワンタン麺、ビーフン、油淋鶏、唐揚げ、排骨、魯肉飯などの中国東北と台湾の料理。醤油や小麦の皮が多く、グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアン対応とあり、新鮮な野菜を大切にする店で、季節の野菜のにんにく塩炒めもある (2026年5月) が、スープやたれの中身は書かれていない。',
    notes: '[中華と台湾料理・百万遍、23時半まで] 京大のそばの2階建ての町家の店。レモン塩の餃子、ワンタン麺、油淋鶏、排骨などの中国東北と台湾の家庭料理を、玄米ご飯の手頃な定食で。夜は23時半まで飲み会や宴会にも。昼は学生でにぎわう。英語メニューあり。',
  });
}

// ================================================================ ビストロ・スリージェ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26000996/'; const R = TB + 'dtlrvwlst/';
  const MG = 'https://guide.michelin.com/jp/ja/kyoto-region/kyoto/restaurant/bistro-cerisier';
  const AD = day(['08:30', '14:00'], ['18:00', '21:30']);
  put({
    id: 'kyoto_bistro_cerisier', name: 'ビストロ・スリージェ (Bistro Cerisier)', category: 'OMNI',
    lat: 35.02981, lng: 135.774385, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Regional French plates — pâtés, salads, quenelles with Nantua sauce, cassoulet, choucroute, braised beef cheek, game; bread is served at every table and gluten is not mentioned (Michelin Guide; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-and-charcuterie bistro — pâtés, duck, sausages, venison, frog legs, fish mousse with crayfish sauce (Michelin Guide; 2025–2026 reviews).',
    hours_raw: 'Monday, Tuesday, Wednesday and Friday 8:30–14:00 and 18:00–21:30; Thursday 8:30–14:00; Saturday and Sunday 18:00–21:30; hours may change (Tabelog; Michelin Guide). Dinner is à la carte only (Tabelog). Reservations by phone, opening one month ahead; weekends fill fast (Tabelog; September and December 2025). Payment: the shop’s own note on Tabelog says cash only, though Tabelog’s payment field says cards are accepted — bring cash. Bread and butter are served as a table charge (September 2025). 17 seats with a counter (Tabelog). Two minutes on foot from Keihan Demachiyanagi Station (Tabelog).',
    hours: { 0: AD, 1: AD, 2: AD, 3: day(['08:30', '14:00']), 4: AD, 5: day(['18:00', '21:30']), 6: day(['18:00', '21:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Demachiyanagi — 2 min from the Keihan station',
    cuisine: 'A countryside-style French bistro of regional dishes, listed in the Michelin Guide: fish soup, goat-cheese salad, sautéed frog legs, choucroute and cassoulet in generous portions (Michelin Guide) · pâté de campagne ¥1,925 (September 2025); Périgord salad with smoked duck, confit gizzards, foie gras and figs ¥4,180 (September 2025); piquillos stuffed with brandade ¥2,420 (September 2025) · smoked salmon, Champagne-style gratinéed oysters, Lyon quenelle with Nantua sauce, Castelnaudary cassoulet (January 2026) · braised beef cheek (December 2025); roast Ezo venison, boudin noir terrine, Roquefort salad (December 2025) · game pâté en croûte, river-fish mousse with crayfish sauce, nougat glacé (December 2025) · Wagyu tail, pork head (May 2026); white asparagus, smoked herring, mussels, anago, frog (March and July 2026) · a long wine list arranged by region (December 2025)',
    website: null, gmaps: gm('ビストロ・スリージェ 出町柳'), menu_url: null,
    notes: '[French bistro · Demachiyanagi, regional classics to share] A small, antique-filled bistro by Demachiyanagi Station, listed in the Michelin Guide, cooking hearty French regional dishes — pâtés, quenelles, cassoulet, choucroute, game — in big portions meant for sharing, with a long regional wine list. Book by phone a month ahead; à la carte at dinner; bring cash.',
    chef_bio: { chef_name: null, roles: ['Madame (unnamed)'], origin: null,
      background: 'The Michelin Guide says the bistro is the work of a madame captivated by French cuisine who gave shape to a longing for the real thing, in an antique interior with the feel of a country bistro. Reviewers describe a sommelier lady running the dining room (September 2025) and two women serving (December 2025); a regular’s first review dates from February 2011.',
      philosophy: null, specialty: 'Regional French dishes — quenelles, cassoulet, choucroute.',
      anecdotes: [
        { text: 'A September 2025 party of three booked a holiday dinner a month ahead and found the house full that night.', source: R + 'B513713101/' },
        { text: 'A July 2026 regular, turned away from the mussels on the previous visit, finally got the mussels.', source: R + 'B7062229/' },
      ],
      japanese_sources_summary: 'ミシュランガイド: ビストロ スリージェ、アンティークの内装は田舎にあるビストロの趣、フランス料理に魅了されたマダムが本場への憧れをかたちにした、魚のスープ、山羊のチーズのサラダ、カエルのソテー、量の多いシュークルートとカスレ、価格帯¥¥。食べログ: フレンチ、左京区田中下柳町1-3、京阪出町柳駅から徒歩2分、月火水金 8:30〜14:00・18:00〜21:30、木 8:30〜14:00、土日 18:00〜21:30、予約可、ディナーはアラカルトのみ、支払いは現金のみ (店の備考)、17席。口コミ (2025〜2026年、英語): 予約は1か月前から、パテ・ド・カンパーニュ1,925円、ペリゴール風サラダ4,180円、ブランダード詰めのピキーヨ2,420円、クネル、カスレ、牛ほほ肉の煮込み、蝦夷鹿のロースト、ヌガーグラッセ、地方別のワインリスト、ソムリエの女性。',
      confidence: 'medium', sources: [MG, TB, R + 'B504053816/', R + 'B513713101/', R + 'B518092702/', R + 'B519076198/', R + 'B519305047/', R + 'B520222586/', R + 'B521569958/', R + 'B528223883/', R + 'B535490011/', R + 'B7062229/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone reservations a month ahead; à la carte for sharing; cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区田中下柳町1-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Michelin Guide page and Tabelog; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.02981, 135.774385); cross-checked: GSI 京都府京都市左京区田中下柳町1番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518092702/'],
    price_note: 'Prices from a September 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Pâté de campagne', '¥1,925', 'Starters', 'ask', 'no', 'September 2025.', 'pate'),
      it('', '', 'Périgord salad (smoked duck, gizzard confit, foie gras, figs)', '¥4,180', 'Starters', 'ask', 'no', 'September 2025.', 'perigord_salad'),
      it('', '', 'Piquillos stuffed with brandade', '¥2,420', 'Starters', 'ask', 'no', 'September 2025.', 'piquillos'),
      it('', '', 'Castelnaudary cassoulet', '', 'Mains', 'ask', 'no', 'January 2026.', 'cassoulet'),
    ] }, {
    cuisine: 'ミシュランガイドに載る、田舎風のフランスの地方料理のビストロ: 魚のスープ、山羊のチーズのサラダ、カエルのソテー、たっぷりのシュークルートとカスレ (ミシュランガイド)・パテ・ド・カンパーニュ1,925円 (2025年9月)。燻製の鴨、砂肝のコンフィ、フォアグラ、いちじくのペリゴール風サラダ4,180円 (2025年9月)。ブランダードを詰めたピキーヨ2,420円 (2025年9月)・スモークサーモン、シャンパーニュ風の牡蠣のグラタン、リヨン風クネルのナンチュアソース、カステルノーダリ風カスレ (2026年1月)・牛ほほ肉の煮込み (2025年12月)。蝦夷鹿のロースト、ブーダン・ノワールのテリーヌ、ロックフォールのサラダ (2025年12月)・ジビエのパテ・アン・クルート、川魚のムースのザリガニソース、ヌガーグラッセ (2025年12月)・和牛のテール、豚の頭肉 (2026年5月)。ホワイトアスパラガス、燻製のニシン、ムール貝、穴子、カエル (2026年3月・7月)・地方ごとのワインリスト (2025年12月)',
    neighborhood: '出町柳。京阪の駅から徒歩2分',
    gf_detail: '要確認。パテ、サラダ、クネルのナンチュアソース、カスレ、シュークルート、牛ほほ肉の煮込み、ジビエなどのフランスの地方料理。どの席にもパンが出て、グルテンについては書かれていない (ミシュランガイド、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。パテ、鴨、ソーセージ、鹿、カエル、ザリガニソースの魚のムースなど、肉とシャルキュトリーのビストロ (ミシュランガイド、2025〜2026年の口コミ)。',
    notes: '[フランスのビストロ・出町柳、みんなで分ける地方料理] 出町柳駅そばの、アンティークに囲まれた小さなビストロ。ミシュランガイドに載り、パテ、クネル、カスレ、シュークルート、ジビエなどボリュームのあるフランスの地方料理を、地方ごとのワインとともに分け合う。予約は1か月前から電話で、夜はアラカルトのみ、現金を持って。',
  });
}

save();
