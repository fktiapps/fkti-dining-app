// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 4.
//   + メゾン ド ヴァン 鶉亭 Maison de Vin Uzura Tei (French and mizutaki by the Kamo River, owner-sommelier)
//   + BABBI GELATERIA KYOTO (the Italian wafer brand's gelateria on Kiyamachi, with a summer riverside platform)
//   + 祇園ねぎ焼 かな 東店 Gion Negiyaki Kana Higashi ten (12-seat negiyaki counter near Yasaka Shrine; founded 1984 per a review)
//   + フルール・ド・ファリーヌ FLEUR DE FARINE (small bakery at Higashinotoin Sanjo; Bread WEST Tabelog 100 2026)
//   - skip 26000410 モリタ屋 木屋町店: a chain of 6 same-concept sukiyaki restaurants (see skip() below)
//   Taken on 2026-11-05: `next core 200` gave 鶉亭 26003662 and BABBI 26033110 (the first two with id mod 6 = 4 after
//   batch 3); `next notable 200` gave モリタ屋 26000410 (skipped) and かな 26000572, then フルール・ド・ファリーヌ 26004724.
//   None is in data/kyoto.json: grep by name (鶉亭/Uzura, BABBI, かな/ねぎ焼, フルール/Fleur) and address (斉藤町140-16,
//   斉藤町134, 月見町13, 三文字町200/ミックナカムラビル) found none. Neighbours: kyoto_b_store_1st (address_ja
//   "京都府京都市下京区斎藤町140-25") is 5.3 m from 鶉亭's pin; ChIJzVkIVMYJAWARhY11tLtmXis Kacto is 10 m from BABBI;
//   kyoto_maison_de_frouge (address_ja "京都府京都市中京区東洞院通三条下ル三文字町201 1F") is 16 m from FLEUR DE FARINE.
//   Chain check: BABBI's other Japanese shops sell its wafers and chocolates; this is its only gelateria (October 2026
//   review; "日本初上陸" in Walkerplus 2020) — a different format, so drafted. No other かな shop was found.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26000410', 'chain: モリタ屋 runs 6 same-concept sukiyaki restaurants (四条猪熊本店, 木屋町店, JR京都伊勢丹店, LUCUA 1100 Osaka, Tokyo Marunouchi, Ginza Mitsukoshi) plus a teppanyaki annex and 4 meat shops, per an August 2026 Tabelog review (B533613390); the Kyoto prefecture page (updated 2023-09-29) lists 3 Kyoto restaurants and 4 shops. Group of 5+ = chain (working line, 2026-11-02).');

// ================================================================ メゾン ド ヴァン 鶉亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26003662/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_maison_de_vin_uzura_tei', name: 'メゾン ド ヴァン 鶉亭 (Maison de Vin Uzura Tei)', category: 'OMNI',
    lat: 35.002770, lng: 135.770669, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French courses with bread, sauces such as beurre blanc, a flan and a cutlet, and mizutaki in winter; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the courses centre on wagyu, pork, fish and chicken, and the soups are fish- or chicken-based (2025–26 reviews).',
    hours_raw: '17:30–23:00 (last order 22:00), Monday–Saturday; closed Sunday and the 2nd and 4th Monday (Tabelog). Reservations online; Tabelog notes that reservations for individuals are not accepted on Fridays and Saturdays (Tabelog). Table charge ¥1,100 per person and 10% service (Tabelog). Seating at the counter or tables, assigned by the shop; private room for 3–8 (Tabelog). In summer a riverside platform (kawadoko) over the Kamo River; rain can move diners indoors (2026 reviews). Shoes come off at the entrance (May 2026). Heated tobacco only, in the private room and on the platform (Tabelog). 19 seats (6 counter, 13 table); cards (VISA, Master, JCB, AMEX, Diners) and e-money, no QR (Tabelog). At the Y-junction on the Takase River, Kiyamachi south of Shijo; 3 min from Kyoto Kawaramachi Stn, 5 min from Gion-Shijo Stn (Tabelog; May 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi south of Shijo, on the Kamo River — 3 min from Kyoto Kawaramachi Stn',
    cuisine: 'French restaurant and wine bar with mizutaki (Tabelog) · November 2026 courses: A course with a choice of main ¥9,350; Petit Gourmandises with three glasses of wine ¥16,500; Harmonie Gourmande, six dishes with six 100 ml glasses ¥23,000 (Tabelog, tax and service included) · a September 2026 riverside A course of 9 dishes: purple sweet potato flan with hamo and mushroom clear soup, salad, black wagyu sirloin-cap carpaccio, pan-fried amadai with beurre blanc, Kyoto pork tenderloin Rossini with foie gras and truffle, bread, dessert, coffee · four appetizers, soup, ayu and lamb (October 2026) · winter mizutaki of Miyama chicken after French starters such as crab jelly and shark-fin flan (December 2025) · bottles and glasses chosen by the owner-sommelier, including second wines of known châteaux (September 2026)',
    website: null, gmaps: gm('メゾン ド ヴァン 鶉亭 木屋町'), menu_url: TB + 'dtlmenu/',
    notes: "[French & wine · Kiyamachi, a riverside platform and a sommelier] A 19-seat French restaurant at the Y-bend of the Takase River where you take off your shoes, sit at the counter or a table, and in summer move out to a platform over the Kamo River facing the Minami-za. The owner is a sommelier, and diners praise the glasses as much as the food: courses run from ¥9,350 (choose your main) to ¥23,000 with six paired glasses. In winter the house turns to mizutaki of Miyama chicken after French starters. Add ¥1,100 table charge and 10% service. Closed Sunday and the 2nd and 4th Monday.",
    chef_bio: { chef_name: null, roles: ['Owner-sommelier (unnamed in the sources)'], origin: null,
      background: 'A June 2026 diner spent the evening talking with the owner-sommelier; an October 2026 diner says the owner explains each dish. A September 2026 diner was told the wine list favours second labels of renowned châteaux so that glasses are good without being overly expensive. A diner who has come in the riverside season for about 25 years found the cooking consistently excellent but the prices higher than before (September 2026). Tabelog French WEST "Tabelog 100" 2021.',
      philosophy: null, specialty: 'Seasonal French courses with paired wine; winter mizutaki.',
      anecdotes: [
        { text: '"I’ve been visiting this place during the riverside dining season for about 25 years now" — September 2026.', source: R + 'B497597078/' },
        { text: '"You take off your shoes at the entrance, and from there, it feels like stepping into another world." — May 2026.', source: R + 'B529710595/' },
        { text: 'A March 2026 party was moved to a window seat with a view of the Kamo River when one came free.', source: R + 'B525308697/' },
        { text: '"However, it is on the pricier side, so if you’re making a reservation for a date, be prepared to splurge!" — May 2026.', source: R + 'B527607366/' },
      ],
      japanese_sources_summary: '食べログ: フレンチ・水炊き・ワインバー、下京区木屋町四条南団栗上ル斉藤町140-16、祇園四条駅から5分、京都河原町駅から3分、月〜土 17:30〜23:00 (L.O. 22:00)、日曜と第2・第4月曜休み、金・土は個人の予約不可 (食べログ英語版)、床料金お一人様1,100円、サービス料10％、19席 (カウンター6、テーブル13)、個室3〜8名、加熱式たばこのみ個室と納涼床で可、カード・電子マネー可、QR 不可、フレンチ WEST 百名店 2021、11月のコース: Aコース9,350円、Petit Gourmandises 16,500円、Harmonie Gourmande 23,000円。口コミ (2025年12月〜2026年10月、英語): 鴨川の納涼床、南座の眺め、玄関で靴を脱ぐ、オーナーのソムリエ、有名シャトーのセカンドワイン、冬の水炊き (Miyama の鶏)、黒毛和牛のカルパッチョ、京都ポークのロッシーニ、約25年通う客。',
      confidence: 'medium', sources: [TB, R + 'B497597078/', R + 'B521366116/', R + 'B525308697/', R + 'B527607366/', R + 'B529710595/', R + 'B530612797/', R + 'B530983466/', R + 'B533592419/', R + 'B536011835/', R + 'B537427424/', R + 'B537806540/', R + 'B537844928/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online; the sommelier talks you through the wine; shoes off at the door.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町四条南団栗上ル斉藤町140-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with November 2026 courses; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002770, 135.770669); cross-checked: GSI 京都府京都市下京区斎藤町140番地 (lot) 40m; 5.3 m from kyoto_b_store_1st (斎藤町140-25); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B497597078/'],
    price_note: 'Course prices from Tabelog (November 2026 courses, tax and service included); plus ¥1,100 table charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'A course with a choice of main (8 items)', '¥9,350', 'Course', 'ask', 'no', 'Tabelog; 9 dishes in September 2026.', 'a_course'),
      it('', '', 'Petit Gourmandises (A or B course dishes with three glasses of wine)', '¥16,500', 'Course', 'ask', 'no', 'Tabelog.', 'petit_gourmandises'),
      it('', '', 'Harmonie Gourmande (six dishes with six glasses of wine)', '¥23,000', 'Course', 'ask', 'no', 'Tabelog.', 'harmonie_gourmande'),
      it('', '', 'Mizutaki of Miyama chicken (winter)', '', 'Hot pot', 'ask', 'no', 'December 2025.', 'mizutaki'),
    ] }, {
    cuisine: 'フレンチ、ワインバー、水炊きの店 (食べログ)・2026年11月のコース: メインを選べるAコース9,350円、グラスワイン3杯付きの Petit Gourmandises 16,500円、6品と100mlのグラスワイン6杯の Harmonie Gourmande 23,000円 (食べログ、税・サービス料込み)・2026年9月の床のAコース9品: 紫芋のフランと鱧ときのこのお吸い物、サラダ、黒毛和牛のカルパッチョ、甘鯛のポワレ ブールブランソース、京都ポークのフィレのロッシーニ (フォアグラ、トリュフ)、パン、デザート、コーヒー・前菜4品、スープ、鮎、仔羊 (2026年10月)・冬は前菜のあとに Miyama の鶏の水炊き (2025年12月)・オーナーのソムリエが選ぶボトルとグラス。有名シャトーのセカンドワインも (2026年9月)',
    neighborhood: '四条の南の木屋町、鴨川沿い。京都河原町駅から徒歩3分',
    gf_detail: '要確認。パン、ブールブランなどのソース、フラン、カツレツのあるフレンチのコースと、冬の水炊き。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛、豚、魚、鶏が中心で、スープも魚か鶏 (2025〜2026年の口コミ)。',
    notes: '[フレンチとワイン・木屋町、川床とソムリエ] 高瀬川の Y字の分かれ目にある19席のフレンチ。玄関で靴を脱ぎ、カウンターかテーブルへ。夏は鴨川の納涼床で南座を眺める。オーナーがソムリエで、料理と同じくらいワインが評判。コースはメインを選べる9,350円から、グラスワイン6杯付きの23,000円まで。冬はフレンチの前菜のあとに Miyama の鶏の水炊き。床料金1,100円とサービス料10％が別。日曜と第2・第4月曜休み。',
  });
}

// ================================================================ BABBI GELATERIA KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033110/'; const R = TB + 'dtlrvwlst/';
  const WALKER = 'https://www.walkerplus.com/article/223231/';
  const H = day(['13:00', '22:00']);
  put({
    id: 'kyoto_babbi_gelateria', name: 'BABBI GELATERIA KYOTO', category: 'OMNI',
    lat: 35.002182, lng: 135.770440, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Gelato comes in a cup or a wafer or cocoa cone topped with BABBI wafer, and the gelato itself uses BABBI’s wafer pastes; no gluten information is published (Tabelog; 2024–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Most flavours are milk-based (milk, ricotta fig, salted caramel vanilla); fruit flavours such as yuzu and lemon exist, but their ingredients are not published (2024–26 reviews).',
    hours_raw: '13:00–22:00 daily; eat-in and drink last orders 21:30 (Tabelog). No reservations (Tabelog). 12 seats inside, plus a 36-seat riverside platform (kawadoko) over the Kamo River from May to October (Tabelog); a single scoop of milk was ¥990 on the platform in August 2026, which the reviewer took to include a platform fee. Non-smoking; cards, IC cards and e-money, PayPay and other QR payments including Alipay and WeChat Pay (Tabelog). Wet towels at the counter (September 2026). At the west end of Dango Bridge on Kiyamachi-dori south of Shijo; 4 min from Gion-Shijo and Kyoto Kawaramachi Stns (Tabelog; August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi-dori at Dango Bridge, south of Shijo, on the Kamo River — 4 min from Gion-Shijo Stn',
    cuisine: 'Gelato shop of BABBI, the Italian wafer maker with a 70-year history; the gelato uses its wafer pastes, alongside Japanese flavours such as matcha and black sesame (Tabelog) · pistachio, hazelnut, chocolate, ricotta fig, rich milk, salted caramel vanilla, Amaou strawberry, yuzu and lemon, cookies and cream, black sesame, cherry (2024–26 reviews) · cup, wafer or cocoa cone topped with a BABBI wafer · triple ¥1,620 (September 2026); double just under ¥900 in 2024; in 2020 single ¥550 and double ¥660 (Walkerplus) · chocolate shaved ice, a Dubai chocolate dessert, coffee float, matcha drink, yuzu cello soda (2026 reviews)',
    website: null, gmaps: gm('BABBI GELATERIA KYOTO'), menu_url: null,
    notes: "[Gelato · Kiyamachi, Italian gelato over the Kamo River] The only gelato shop of BABBI, the Italian wafer brand, at the Dango Bridge end of Kiyamachi: flavours from pistachio and hazelnut to ricotta fig and Kyoto-leaning matcha and black sesame, in a cup or a cone crowned with a BABBI wafer. Eat inside looking at the river, or from May to October on the riverside platform, where prices run higher (a single was ¥990 there in August 2026). Open daily 13:00–22:00, a handy stop after dinner in Kiyamachi.",
    chef_bio: { chef_name: null, roles: ['Shop of the Italian brand BABBI, run in Japan by a company (corporate invoice registrant, Tabelog); no staff named'], origin: null,
      background: 'Per Tabelog (the shop’s own text): a gelato shop from the Italian wafer brand BABBI, which has a 70-year history, using its wafer pastes in the gelato and offering Japanese flavours such as matcha and black sesame; it faces the Kamo River. Walkerplus (February 2020) reported it as the brand’s first gelato shop in Japan; an October 2026 reviewer says it is still the only BABBI location in Japan serving gelato, with ingredients imported from Italy and made in-house, and a September 2026 reviewer notes BABBI also has a Tokyo shop.',
      philosophy: null, specialty: 'Pistachio and hazelnut gelato; wafer-topped cones.',
      anecdotes: [
        { text: 'An August 2026 visitor paid ¥990 for a single scoop on the riverside platform and called it the last visit for that reason, while praising the taste.', source: R + 'B533343175/' },
        { text: 'An October 2026 regular noticed that prices had risen in recent years and balked at ¥1,600 for three flavours.', source: R + 'B473133225/' },
        { text: '"I appreciated the wet towels available at the counter, as gelato can sometimes drip" — September 2026.', source: R + 'B536265430/' },
        { text: 'An August 2026 visitor saw a display of discounted outlet products but found them sold out, with no sign saying so.', source: R + 'B510453988/' },
      ],
      japanese_sources_summary: '食べログ: ジェラート・アイスクリーム・カフェ・スイーツ、下京区木屋町通四条下ル斉藤町134、祇園四条駅・京都河原町駅から徒歩4分、毎日13:00〜22:00 (店内飲食のL.O. 21:30)、予約不可、12席、5〜10月は鴨川の納涼床36席、禁煙、カード・電子マネー・QR 可、70年の歴史を持つイタリアのウエハースブランド「BABBI」のジェラート店、ウエハースのペーストを使用、抹茶や黒ごまなど和のフレーバー。ウォーカープラス (2020年2月): 日本初上陸、ジェラート2種盛660円、シングル550円、11:00〜22:00 (当時)。口コミ (2024〜2026年、英語): ピスタチオ、ヘーゼルナッツ、リコッタといちじく、トリプル1,620円、床でシングル990円、カウンターのおしぼり、アウトレット品。',
      confidence: 'medium', sources: [TB, WALKER, R + 'B473133225/', R + 'B510453988/', R + 'B529805239/', R + 'B533343175/', R + 'B534923370/', R + 'B535025165/', R + 'B535369933/', R + 'B536091309/', R + 'B536093677/', R + 'B536265430/', R + 'B537241935/', R + 'B537299175/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the flavours in the case; cards and QR payments.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町通四条下ル斉藤町134',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002182, 135.770440); cross-checked: GSI 京都府京都市下京区斎藤町134番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536265430/', R + 'B533343175/', WALKER],
    price_note: 'No price list read; prices from 2024–2026 reviews and a 2020 article, dated per item; platform seats cost more.', last_checked: TODAY, items: [
      it('', '', 'Gelato, triple', '¥1,620', 'Gelato', 'ask', 'ask', 'September 2026.', 'triple'),
      it('', '', 'Gelato, double', 'just under ¥900', 'Gelato', 'ask', 'ask', 'August 2024.', 'double'),
      it('', '', 'Gelato, single (on the riverside platform)', '¥990', 'Gelato', 'ask', 'ask', 'August 2026.', 'single_kawadoko'),
    ] }, {
    cuisine: '70年の歴史を持つイタリアのウエハースブランド BABBI のジェラート店。ジェラートにウエハースのペーストを使い、抹茶や黒ごまなど和のフレーバーも (食べログ)・ピスタチオ、ヘーゼルナッツ、チョコレート、リコッタといちじく、濃厚ミルク、塩キャラメルバニラ、Amaou の苺、柚子とレモン、クッキー＆クリーム、黒ごま、チェリー (2024〜2026年の口コミ)・カップか、BABBI のウエハースをのせたワッフルコーンやココアコーン・トリプル1,620円 (2026年9月)、ダブルは2024年に900円弱、2020年はシングル550円、ダブル660円 (ウォーカープラス)・チョコレートのかき氷、ドバイチョコレートのデザート、コーヒーフロート、抹茶ドリンク、Yuzu Cello のソーダ (2026年の口コミ)',
    neighborhood: '四条の南、団栗橋の西詰の木屋町通、鴨川沿い。祇園四条駅から徒歩4分',
    gf_detail: '要確認。カップのほか、BABBI のウエハースをのせたワッフルコーンやココアコーンがあり、ジェラート自体にもウエハースのペーストを使う。グルテンの情報は公開されていない (食べログ、2024〜2026年の口コミ)。',
    vegan_detail: '要確認。多くのフレーバーは乳が中心 (ミルク、リコッタといちじく、塩キャラメルバニラ)。柚子とレモンなど果物のフレーバーもあるが、原材料は公開されていない (2024〜2026年の口コミ)。',
    notes: '[ジェラート・木屋町、鴨川を眺めるイタリアのジェラート] イタリアのウエハースブランド BABBI の唯一のジェラート店。木屋町の団栗橋のたもとにあり、ピスタチオ、ヘーゼルナッツからリコッタといちじく、京都らしい抹茶や黒ごままで。カップか、BABBI のウエハースをのせたコーンで。店内で川を眺めるか、5〜10月は納涼床で。床は値段が上がる (2026年8月はシングル990円)。毎日13時〜22時、木屋町での食事のあとにも寄りやすい。',
  });
}

// ================================================================ 祇園ねぎ焼 かな 東店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000572/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:00', '22:00']); const L = day(['12:00', '03:00']);
  put({
    id: 'kyoto_gion_negiyaki_kana', name: '祇園ねぎ焼 かな 東店 (Gion Negiyaki Kana Higashi ten)', category: 'OMNI',
    lat: 35.001396, lng: 135.777429, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: negiyaki, betayaki, okonomiyaki and yakisoba are wheat-batter or wheat-noodle dishes cooked on one shared teppan with sauce or soy sauce (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fillings are beef tendon, pork, squid and chikuwa, the dashimaki is egg and dashi, and the batter dishes carry egg or meat (2025–26 reviews).',
    hours_raw: 'Tuesday, Wednesday, Thursday and Sunday 12:00–22:00 (last order 21:30); Friday and Saturday 12:00–3:00 (last order 2:00); closed Monday and the 1st and 3rd Tuesday (Tabelog). Reservations recommended; two-hour limit (Tabelog); some walk-ins get seats, others find it full (2026 reviews). Each pancake takes a while on the teppan (2026 reviews). 12 counter seats around the teppan; non-smoking; cash only (Tabelog). On Higashioji-dori opposite the Tsukimicho post office, southwest of Yasaka Shrine; 8 min walk from Exit 6 of Gion-Shijo Stn (Tabelog; September 2026).',
    hours: { 1: D, 2: D, 3: D, 6: D, 4: L, 5: L }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashioji-dori southwest of Yasaka Shrine — 8 min walk from Gion-Shijo Stn',
    cuisine: 'Teppan counter of Kyoto-style flour dishes (2025–26 reviews) · negiyaki with plenty of green onion, eaten with soy sauce: pork ¥800, mix of beef, pork, squid and chikuwa, extra egg ¥100 · betayaki (thin Kyoto-style okonomiyaki) mix ¥1,000 or beef tendon ¥1,000, with a spicy sauce · okonomiyaki, tonpeiyaki, beef yakisoba, lotus root stuffed with meat, mushrooms, a pizza · special dashimaki rolled on the teppan with green onion and pickled ginger ¥650 · the owner’s potato salad ¥500 and simmered whelk · draft beer ¥600, oolong tea ¥400 (2025–26 reviews)',
    website: null, gmaps: gm('祇園ねぎ焼 かな 東店'), menu_url: null,
    notes: "[Negiyaki · Gion, a teppan counter by Yasaka Shrine] A 12-seat counter on Higashioji-dori near Yasaka Shrine, founded in 1984 per a reviewer, where the owner cooks on the teppan in front of you and chats with the regulars along the counter. Order the negiyaki — thin batter under a heap of green onion, with soy sauce (¥800 with pork) — or the Kyoto betayaki with its spicy sauce, and start with the special dashimaki rolled on the griddle with pickled ginger (¥650) while you wait. Book ahead; two-hour limit; cash only. Open until 3:00 on Friday and Saturday; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner-cook at the teppan (unnamed in the sources)'], origin: null,
      background: 'An October 2026 reviewer gives the founding year as 1984, and another that month calls it a teppan-yaki restaurant with over 40 years of history. Reviewers describe the owner cooking at the teppan and chatting with customers, the owner’s homemade potato salad and simmered whelk, and a counter of regulars. Tabelog Okonomiyaki "Tabelog 100" 2018, 2019, 2022–2025.',
      philosophy: null, specialty: 'Negiyaki; betayaki; dashimaki.',
      anecdotes: [
        { text: '"The owner was friendly and struck up a conversation, which made me feel welcome." — September 2026.', source: R + 'B507686445/' },
        { text: 'An October 2026 diner ordered beef tendon with daikon that never came, and had the recommended potato salad instead.', source: R + 'B536689357/' },
        { text: '"I also learned the proper way to enjoy it, which was quite educational!" — September 2026.', source: R + 'B536612551/' },
        { text: 'A November 2026 diner who could not get a booking peeked in and found two seats free at the end of the counter.', source: R + 'B538581969/' },
      ],
      japanese_sources_summary: '食べログ: お好み焼き・鉄板焼き、東山区東大路安井北門通月見町13、京阪祇園四条駅6番出口から東大路通を南へ、月見町郵便局の向かい、徒歩8分、火水木日 12:00〜22:00 (L.O. 21:30)、金土 12:00〜3:00 (L.O. 2:00)、月曜と第1・第3火曜休み、予約可、2時間制、カウンター12席、禁煙、カード・電子マネー・QR 不可、お好み焼き百名店 2018・2019・2022〜2025。口コミ (2025〜2026年、英語): 1984年創業、ねぎ焼 (豚800円、ミックス、卵 +100円)、ベタ焼ミックス1,000円、特製だし巻650円 (ねぎと紅しょうが)、ポテトサラダ500円、とんぺい焼、牛すじ、店主の手作りのつぶ貝の煮物、常連の多いカウンター、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B448724074/', R + 'B507686445/', R + 'B534575783/', R + 'B535348030/', R + 'B535901643/', R + 'B536277285/', R + 'B536612551/', R + 'B536689357/', R + 'B536788756/', R + 'B537607389/', R + 'B537703704/', R + 'B538581969/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone; order at the counter; the owner explains how to eat each dish; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区東大路安井北門通月見町13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Okonomiyaki Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.001396, 135.777429); GSI matches only the town 京都府京都市東山区月見町 (town) 29 m away (GSI only this round, no OSM); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536277285/', R + 'B536689357/', R + 'B507686445/'],
    price_note: 'Prices from June 2025–October 2026 reviews, dated per item; one October 2026 bill implies tax on top of menu prices.', last_checked: TODAY, items: [
      it('', '', 'Negiyaki (pork)', '¥800', 'Teppan', 'no', 'no', 'September–October 2026.', 'negiyaki'),
      it('', '', 'Betayaki mix', '¥1,000', 'Teppan', 'no', 'no', 'September 2026.', 'betayaki_mix'),
      it('', '', 'Special dashimaki (green onion, pickled ginger)', '¥650', 'Teppan', 'ask', 'no', 'September 2026.', 'dashimaki'),
      it('', '', 'Potato salad', '¥500', 'Sides', 'ask', 'ask', 'October 2026.', 'potato_salad'),
      it('', '', 'Draft beer', '¥600', 'Drinks', '', '', 'October 2026.', 'draft_beer'),
    ] }, {
    cuisine: '京都の粉もんの鉄板カウンター (2025〜2026年の口コミ)・ねぎたっぷりで醤油で食べるねぎ焼: 豚800円、牛・豚・いか・ちくわのミックス、卵 +100円・ベタ焼 (薄い京風のお好み焼) ミックス1,000円、牛すじ1,000円、辛めのソース・お好み焼、とんぺい焼、牛焼そば、れんこんの肉詰め、きのこ、ピザ・鉄板で巻く特製だし巻 (ねぎと紅しょうが) 650円・店主のポテトサラダ500円とつぶ貝の煮物・生ビール600円、ウーロン茶400円 (2025〜2026年の口コミ)',
    neighborhood: '八坂神社の南西の東大路通。祇園四条駅から徒歩8分',
    gf_detail: 'グルテンフリーではない。ねぎ焼、ベタ焼、お好み焼、焼そばは小麦の生地か麺で、同じ鉄板でソースや醤油を使って焼く (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。具は牛すじ、豚、いか、ちくわで、だし巻は卵と出汁、生地の料理も卵や肉が入る (2025〜2026年の口コミ)。',
    notes: '[ねぎ焼・祇園、八坂神社そばの鉄板カウンター] 八坂神社近くの東大路通にある12席のカウンター。口コミによれば1984年創業。店主が目の前の鉄板で焼き、常連の並ぶカウンターで話も弾む。薄い生地にねぎをたっぷりのせ醤油で食べるねぎ焼 (豚で800円) か、辛めのソースの京風ベタ焼を。焼き上がりを待つ間に紅しょうが入りの特製だし巻 (650円) を。予約がおすすめ、2時間制、現金のみ。金・土は3時まで、月曜休み。',
  });
}

// ================================================================ フルール・ド・ファリーヌ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004724/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_fleur_de_farine', name: 'フルール・ド・ファリーヌ (FLEUR DE FARINE)', category: 'OMNI',
    lat: 35.008377, lng: 135.761134, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery of French breads, sandwiches and filled rolls (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plain French breads and bean breads exist, but most items are savoury breads with cheese, bacon, egg, mayonnaise or beef, or sweet breads with custard; no ingredient lists are published (2026 reviews).',
    hours_raw: 'Tuesday–Saturday 11:00–19:00; closed Sunday and Monday (Tabelog). Takeaway only; the shop is small and feels full with two or three customers (2026 reviews). Some breads sell out by the afternoon (September 2026). No reservations; cash only (Tabelog). On Higashinotoin-dori south of Sanjo, near Rokkakudo; 3 min walk from Karasuma Oike Stn (Tabelog; 2026 reviews).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashinotoin-dori south of Sanjo — 3 min walk from Karasuma Oike Stn',
    cuisine: 'Small French-style bakery of mostly savoury breads at low prices — many items ¥180–240 (2026 reviews) · 5種の豆のフランスパン (five-bean French bread, sweet beans) ¥220 (August 2026; ¥216 in a September 2026 review) · ベーコンとチーズのフランスパン ¥240 · croque monsieur ¥280, camembert cream ¥220, cheese "Fromage" baguette of about 20 cm · beef cutlet sandwich ¥370, French anpan ¥140, an épi-style bread ¥260 (October 2026, before tax) · egg and pumpkin-salad sandwiches, chestnut anpan and chestnut coupé, cranberry custard bread, Fruity dried-fruit bread (2026 reviews)',
    website: null, gmaps: gm('フルール・ド・ファリーヌ 京都 東洞院'), menu_url: null,
    notes: "[Bakery · Karasuma Oike, savoury breads at old prices] A tiny Paris-looking bakery on Higashinotoin-dori, a few minutes from Karasuma Oike, whose shelves are packed with savoury breads that reviewers cannot believe are so cheap: three items with change from ¥1,000. Try the croque monsieur (¥280), the cheese-filled Fromage, a beef cutlet sandwich (¥370) or the sweet five-bean French bread (¥220). Takeaway only, cash only; two or three customers fill it. Tuesday–Saturday 11:00–19:00.",
    chef_bio: { chef_name: null, roles: ['Bakery; no owner or baker is named in the sources'], origin: null,
      background: 'Reviewers in 2026 describe a very small shop with a Parisian look, shelves packed with mostly savoury breads, and prices low for the times. A September 2026 visitor found the name FLEUR DE FARINE hard to read on the front. Tabelog Bread WEST "Tabelog 100" 2022, 2026.',
      philosophy: null, specialty: 'Savoury breads; croque monsieur; five-bean French bread.',
      anecdotes: [
        { text: '"You can buy three items and still get change from JPY 1000, which is quite a blessing in these times." — October 2026.', source: R + 'B536949845/' },
        { text: '"I wish they had the name "FLEUR DE FARINE" written prominently, as I struggled to read it" — September 2026.', source: R + 'B537596784/' },
        { text: 'An October 2026 buyer named the ¥370 beef cutlet sandwich the star of the bag.', source: R + 'B538147251/' },
      ],
      japanese_sources_summary: '食べログ: パン・サンドイッチ、中京区東洞院通三条下ル三文字町200 ミックナカムラビル1F、烏丸御池駅から305m、火〜土 11:00〜19:00、日・月休み、予約不可、カード・電子マネー・QR 不可、パン WEST 百名店 2022・2026。口コミ (2026年8〜10月): 六角堂近くのこじんまりした店、5種の豆のフランスパン220円 (9月の口コミでは216円)、ベーコンとチーズのフランスパン240円、英語の口コミ: クロックムッシュ280円、カマンベールクリーム220円、牛カツサンド370円、フランスあんパン140円、総菜パン中心、2〜3人でいっぱいの小さな店、安い。',
      confidence: 'medium', sources: [TB, R + 'B534602208/', R + 'B535013285/', R + 'B535589168/', R + 'B536025423/', R + 'B536131219/', R + 'B536170897/', R + 'B536949845/', R + 'B537474047/', R + 'B537596784/', R + 'B538147251/', R + 'B538406473/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small takeaway shop; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通三条下ル三文字町200 ミックナカムラビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Bread WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.008377, 135.761134); cross-checked: GSI 京都府京都市中京区三文字町200番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534602208/', R + 'B536025423/', R + 'B538147251/', R + 'B538406473/'],
    price_note: 'Prices from August–October 2026 reviews, dated per item; one October 2026 buyer says prices are before tax.', last_checked: TODAY, items: [
      it('5種の豆のフランスパン', '', 'Five-bean French bread', '¥220', 'Breads', 'no', 'ask', 'August 2026 (¥216 in September 2026).', 'five_bean_french'),
      it('ベーコンとチーズのフランスパン', '', 'Bacon and cheese French bread', '¥240', 'Breads', 'no', 'no', 'October 2026.', 'bacon_cheese_french'),
      it('', '', 'Croque monsieur', '¥280', 'Breads', 'no', 'no', 'September 2026.', 'croque_monsieur'),
      it('', '', 'Camembert cream bread', '¥220', 'Breads', 'no', 'no', 'September 2026.', 'camembert_cream'),
      it('', '', 'Beef cutlet sandwich', '¥370', 'Sandwiches', 'no', 'no', 'October 2026.', 'beef_cutlet_sandwich'),
      it('', '', 'French anpan', '¥140', 'Breads', 'no', 'ask', 'October 2026.', 'french_anpan'),
    ] }, {
    cuisine: '総菜パン中心の安いフランス風の小さなパン屋。180〜240円ほどの品が多い (2026年の口コミ)・5種の豆のフランスパン (甘い豆) 220円 (2026年8月、9月の口コミでは216円)・ベーコンとチーズのフランスパン240円・クロックムッシュ280円、カマンベールクリーム220円、チーズを詰めた約20cmの Fromage・牛カツサンド370円、フランスパンのあんパン140円、エピ風のパン260円 (2026年10月、税別)・卵とかぼちゃサラダのサンドイッチ、栗のあんパンと栗のクッペ、クランベリーとカスタードのパン、ドライフルーツの Fruity (2026年の口コミ)',
    neighborhood: '三条の南の東洞院通。烏丸御池駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。フランスパン、サンドイッチ、総菜パンの小麦のパン屋 (2026年の口コミ)。',
    vegan_detail: '要確認。プレーンなフランスパンや豆のパンもあるが、多くはチーズ、ベーコン、卵、マヨネーズ、牛肉の総菜パンか、カスタードの甘いパン。原材料は公開されていない (2026年の口コミ)。',
    notes: '[パン屋・烏丸御池、昔ながらの値段の総菜パン] 烏丸御池から数分、東洞院通のパリのような小さなパン屋。棚には総菜パンがぎっしりで、その安さに口コミも驚く。3品買っても1,000円でおつりが来る。クロックムッシュ (280円)、チーズたっぷりの Fromage、牛カツサンド (370円)、甘い5種の豆のフランスパン (220円) を。持ち帰りのみ、現金のみ、2〜3人で店がいっぱいに。火〜土 11時〜19時。',
  });
}

save();
