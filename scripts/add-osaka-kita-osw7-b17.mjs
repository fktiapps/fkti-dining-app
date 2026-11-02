// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 17.
//   + CHEONGANG 韓国料理 (busy Korean restaurant by the Mikuni shopping street: sundubu lunches, samgyeopsal and hot pots at night)
//   + スター ラーメン Star Ramen (one-woman morning-ramen counter, Fri–Sun 7:00–14:00, star-shaped eggs)
//   + エルナージ EL NAGUE (one-man Spanish restaurant in a 90-year-old former post office, paella lunches)
//   + 家系ラーメン 頂㐂家 阪急三国店 Iekei Ramen Itadakiya (iekei ramen by Hankyu Mikuni Station; small group, see below)
//   - skipped 27013444 塩元帥 西中島店: chain, about 30 shops in Kinki and Okayama (Weekly ASCII, March 2024, via web search 2026-11-02);
//     27109792 ラーメン 虎と龍 ＪＲ東淀川駅前店: same-concept branch of a brand already in data (osaka_tora_to_ryu_nipponbashi);
//     27062234 こがらや 西中島店: chain, eight to ten shops in Osaka with the main shop in Kuromon Market (delivery-app text and an
//     English article, via web search 2026-11-02);
//     27093378 らーめんやまふじ スープ工房東三国店: same-concept branch of a brand already in data (osaka_ramen_yamafuji_shin_osaka);
//     27015288 来来亭 十三店: chain, Rairaitei ramen shops across Japan (branch listings, web search 2026-11-02);
//     27049470 松屋 三国店: chain, Matsuya gyudon (Matsuya Foods, shops nationwide).
//   Lane check: every id above is even. Taken in queue order (nearest first) after the six skips.
//   Chain check:
//   - Itadakiya: web search (2026-11-02) found four shops: 阪急三国店, 牧野店 (Hirakata), 阪急伊丹店 (Itami) and 長堀橋店; a May 2026
//     reviewer calls it "a typical chain restaurant". Four known same-concept shops = small group under the working line, so drafted;
//     flagged in the report in case more exist.
//   - CHEONGANG, Star Ramen and EL NAGUE name no other shop.
//   None of the four is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   mom_and_pop: Star Ramen ("The owner runs the place alone", October 2026) and EL NAGUE ("The master runs the place alone",
//   February 2026); both OMNI because no source names the owner.
//   Ramen blocks: neither Star Ramen nor Itadakiya is described on all six dimensions (no clarity or aroma), so none.
//   open_late per Greg's 2026-11-02 ruling (true when the shop closes after 22:00).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27013444', 'chain: Shio Gensui (塩元帥), about 30 shops in Kinki and Okayama (Weekly ASCII, March 2024; web search 2026-11-02)');
skip('27109792', 'same-concept branch of a brand already in data: Ramen Tora to Ryu (osaka_tora_to_ryu_nipponbashi)');
skip('27062234', 'chain: Kogaraya (こがらや), eight to ten shops in Osaka, main shop in Kuromon Market (web search 2026-11-02)');
skip('27093378', 'same-concept branch of a brand already in data: Ramen Yamafuji (osaka_ramen_yamafuji_shin_osaka)');
skip('27015288', 'chain: Rairaitei (来来亭), ramen shops across Japan (branch listings, web search 2026-11-02)');
skip('27049470', 'chain: Matsuya (松屋) gyudon, Matsuya Foods, shops nationwide');

// ================================================================ CHEONGANG 韓国料理
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27145230/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '22:00']);
  put({
    id: 'osaka_cheongang_korean_mikuni', name: 'CHEONGANG 韓国料理 (CHEONGANG Korean)', category: 'OMNI',
    lat: 34.739029, lng: 135.487492, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a menu: Korean stews and grills with chili pastes and sauces, plus ramen sundubu, jeon pancakes and noodles. Ask about single dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, offal, chicken and seafood stews, with raw egg added to sundubu.',
    hours_raw: 'Mon and Wed–Sun 11:00–22:00; closed Tuesday (Tabelog). Lunch menu until 15:00 (September 2026). Reservations accepted; dinner is often fully booked, so book (July 2026). Cards, e-money and QR (incl. PayPay, Alipay, WeChat Pay) accepted (Tabelog). Order by QR code (June 2026). 17 seats: 5 at the counter, two tables for two and two for four (Tabelog; July 2026); smoking area for heated tobacco only; children welcome (Tabelog). Opened 13 October 2024 (Tabelog).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西三国2-3-7 — just off the shopping street, 7 min from Hankyu Mikuni Stn (Tabelog; June–July 2026)',
    cuisine: 'Korean home cooking (2025–2026) · lunch: sundubu (chicken thigh, offal, pork kimchi or seafood), spice level 1 to 5, raw egg to stir in, three banchan and rice (2025–2026); ramen sundubu with offal ¥1,350 (July 2026); cold noodles, bulgogi, bibimbap; samgyeopsal and sundubu set (April–July 2026) · dinner: kimchi platter, bossam, stir-fried offal, sotteok sotteok, "Bomb Gyeran-jjim" steamed egg (April 2026); dakhanmari hot pot, kimchi cheese jeon (July 2026); spicy octopus and samgyeopsal ¥1,680 each, seafood jeon (July 2026); japchae (March 2025); jumeokbap rice balls to finish (April 2026) · makgeolli and beer (2026)',
    website: null, gmaps: gm('CHEONGANG 韓国料理 西三国'), menu_url: null,
    notes: "[Korean · Mikuni, sundubu lunches and samgyeopsal nights by the shopping street] A small, busy Korean restaurant opened in 2024 just off the Mikuni shopping street, full even before noon (June 2026). At lunch, pick a bubbling sundubu (pork kimchi, offal, chicken or seafood) at a spice level from 1 to 5, stir in the raw egg, and get three banchan and rice (2025–2026). At night it is samgyeopsal brought to the table already grilled, spicy octopus, dakhanmari, bossam and a \"bomb\" steamed egg, with makgeolli (2026). Lunch about ¥1,000–1,500; book for dinner. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 13 October 2024 (Tabelog). Reviewers: a cute Korean-style room that is busy at lunch (2025–2026); friendly staff who let one diner in two minutes before opening (July 2026).', philosophy: null, specialty: 'Sundubu; samgyeopsal.',
      anecdotes: [
        { text: '"The Bomb Gyeran-jjim (steamed egg), which had a striking appearance and a fluffy texture with a gentle taste, exceeding my expectations in deliciousness." — April 2026, dinner.', source: R + 'B526805710/' },
        { text: '"I ordered the pork kimchi jjigae for lunch, and I could choose the spiciness level from 1 to 5, so of course, I went for 5." — July 2026.', source: R + 'B532027080/' },
        { text: '"They brought it grilled, so we could eat it right away, which was great." — July 2026, samgyeopsal at lunch.', source: R + 'B533691785/' },
      ],
      japanese_sources_summary: '食べログ: CHEONGANG 韓国料理、韓国料理、大阪市淀川区西三国2-3-7、阪急 三国駅から徒歩7分、月・水〜日11:00〜22:00、火曜休み、予約可、カード・電子マネー・QR (PayPay、Alipay、WeChat Pay など) 可、17席、加熱式たばこ専用の喫煙所、子ども可、2024年10月13日オープン。口コミ (2025年3月〜2026年9月): 商店街のかど、昼前から満席、注文は QR、ランチは15時まで、スンドゥブ (鶏もも、ホルモン、豚キムチ、海鮮) で辛さは1〜5、生卵、おかず3品とごはん、ホルモンのラーメンスンドゥブ1,350円、冷麺、プルコギ、ビビンバ、サムギョプサルは焼いて持ってきてくれる、夜はキムチ盛り合わせ、ポッサム、ホルモン炒め、sotteok sotteok、「Bomb Gyeran-jjim」、タッカンマリ、キムチチーズチヂミ、辛いタコとサムギョプサル各1,680円、海鮮チヂミ、チャプチェ、しめのチュモッパ、マッコリ、夜は予約で満席のことも。',
      confidence: 'medium', sources: [TB, R + 'B502618297/', R + 'B526805710/', R + 'B528820553/', R + 'B529775885/', R + 'B530994359/', R + 'B531688737/', R + 'B532027080/', R + 'B532185931/', R + 'B533691785/', R + 'B536274258/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code; choose the spice level. Alipay and WeChat Pay accepted. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西三国2-3-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西三国二丁目3番7号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530994359/', R + 'B536274258/', R + 'B528820553/'],
    price_note: 'Prices from July 2026 reviews; lunch about ¥1,000–1,999 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Ramen sundubu with offal', '¥1,350', 'Lunch', 'no', 'no', 'July 2026.', 'ramen_sundubu'),
      it('', '', 'Spicy octopus', '¥1,680', 'Dinner', 'ask', 'no', 'July 2026.', 'nakji'),
      it('', '', 'Samgyeopsal', '¥1,680', 'Dinner', 'ask', 'no', 'July 2026.', 'samgyeopsal'),
      it('', '', 'Pork kimchi sundubu lunch with three banchan and rice', '', 'Lunch', 'ask', 'no', 'June–July 2026.', 'sundubu_lunch'),
    ] }, {
    cuisine: '韓国の家庭料理 (2025〜2026年)・ランチ: スンドゥブ (鶏もも、ホルモン、豚キムチ、海鮮)、辛さは1〜5、生卵を入れて、おかず3品とごはんつき (2025〜2026年)。ホルモンのラーメンスンドゥブ1,350円 (2026年7月)。冷麺、プルコギ、ビビンバ。サムギョプサルとスンドゥブのセット (2026年4〜7月)・夜: キムチ盛り合わせ、ポッサム、ホルモン炒め、sotteok sotteok、「Bomb Gyeran-jjim」(2026年4月)。タッカンマリ、キムチチーズチヂミ (2026年7月)。辛いタコとサムギョプサル各1,680円、海鮮チヂミ (2026年7月)。チャプチェ (2025年3月)。しめのチュモッパ (2026年4月)・マッコリとビール (2026年)',
    neighborhood: '西三国2-3-7。商店街のすぐ横、阪急 三国駅から徒歩7分 (食べログ。2026年6〜7月)',
    gf_detail: 'メニューとしてはグルテンフリーではありません。唐辛子のみそやたれを使う韓国の鍋と焼き物に、ラーメンスンドゥブ、チヂミ、麺も。一品ずつは要確認。',
    vegan_detail: 'ヴィーガンではありません。豚、ホルモン、鶏、海鮮の鍋で、スンドゥブには生卵。',
    notes: '[韓国料理・三国、商店街のそばのスンドゥブのランチとサムギョプサルの夜] 2024年に三国の商店街のすぐ横にできた、小さくてにぎやかな韓国料理の店。昼前から満席 (2026年6月)。ランチはぐつぐつのスンドゥブ (豚キムチ、ホルモン、鶏、海鮮) を辛さ1〜5から選び、生卵を入れて、おかず3品とごはんつき (2025〜2026年)。夜は焼いて出てくるサムギョプサル、辛いタコ、タッカンマリ、ポッサム、「爆弾」の蒸し卵に、マッコリ (2026年)。ランチは約1,000〜1,500円。夜は予約を。火曜休み。',
  });
}

// ================================================================ スター ラーメン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27129486/'; const R = TB + 'dtlrvwlst/';
  const D = day(['07:00', '14:00']);
  put({
    id: 'osaka_star_ramen_higashimikuni', name: 'スター ラーメン (Star Ramen)', category: 'OMNI',
    lat: 34.744598, lng: 135.497621, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a soy-sauce broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork or chicken broth with chashu.',
    hours_raw: 'Fri, Sat, Sun 7:00–14:00; closed Monday to Thursday; hours may change (Tabelog). No reservations; no cards or e-money, PayPay accepted, ordered at the table rather than at the ticket machine (Tabelog; October 2026). 7 seats: an L-shaped counter of 5 and one table; non-smoking; children welcome, kids menu; takeout (Tabelog; October 2026). House rules: no photos except of your food, blow your nose in the restroom, no requests for firm noodles; water is self-service (October 2026). Opened 8 May 2022 (Tabelog).',
    hours: { 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '東三国6-1-35 — about 5 min walk north of Higashi-Mikuni Stn (Tabelog; October 2026)',
    cuisine: 'Morning ramen (2026) · "Akira Star" ¥900: thin straight noodles (140 g, or 100 g at the same price) in a light soy-sauce broth, with lots of bean sprouts and Kujo green onions, two slices of fatty pork and one of shoulder (October 2026); reviewers call the broth a light soy tonkotsu or a peppery chicken broth (October 2026) · Akira Star SP (chashu ramen) and DX (October 2026) · "Egg Star", a star-shaped soft-boiled egg, +¥200 (October 2026) · limited bowls announced on social media: niboshi ramen ¥1,300 (October 2026); tamari chuka soba with premium horumon (October 2026) · chashu rice bowl ¥500 (October 2026) · bottled beer ¥650 (October 2026)',
    website: null, gmaps: gm('スター ラーメン 東三国'), menu_url: null,
    notes: "[Ramen · Higashi-Mikuni, a one-woman morning-ramen counter with star-shaped eggs] A tiny morning-ramen counter north of Higashi-Mikuni Station, open only Friday to Sunday from 7:00 to 14:00, where the owner cooks and serves alone, quickly, under Toy Story figurines (October 2026). The bowl is the \"Akira Star\": thin straight noodles in a light, peppery soy broth heaped with bean sprouts and Kujo green onions, ¥900; add the star-shaped \"Egg Star\" for ¥200 (October 2026). Watch the social media for limited bowls such as a rich niboshi ramen (October 2026). House rules are strict: photos of your food only, no firm-noodle requests. PayPay or cash.",
    chef_bio: { chef_name: null, roles: ['Owner-cook (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 8 May 2022 (Tabelog). Reviewers: "The owner is a woman" (October 2026); "The owner runs the place alone, and even though we were a group of four, the service was quick and efficient" (October 2026); limited bowls are announced on the shop\'s social media (October 2026). The menu nods to "Akira-style" ramen, per a regular (October 2026).', philosophy: null, specialty: 'Akira Star with Egg Star.',
      anecdotes: [
        { text: '"The light soy sauce broth and simple ramen are so delicious that I never get tired of it, even after having it two weeks in a row." — October 2026, Akira Star for JPY 900.', source: R + 'B487176542/' },
        { text: '"The star-shaped egg was perfectly soft-boiled and also delicious!" — October 2026, chashu ramen with Star Egg.', source: R + 'B527263877/' },
        { text: '"This is a special menu item not available on the vending machine, so be sure to try it when you see it announced on Star Ramen\'s SNS!" — October 2026, limited niboshi ramen for about JPY 1,300.', source: R + 'B454181577/' },
      ],
      japanese_sources_summary: '食べログ: スター ラーメン、ラーメン、大阪市淀川区東三国6-1-35、東三国駅から419m、金・土・日7:00〜14:00、月〜木休み、予約不可、カードと電子マネー不可、PayPay 可、7席 (カウンター5)、禁煙、子ども可、お子様メニュー、テイクアウト、2022年5月8日オープン。口コミ (2026年4〜10月): 朝ラーメンの店、東三国駅から北へ徒歩約5分、店主の女性がひとりで切り盛り、写真は料理だけ、鼻をかむならトイレで、麺かためは不可、水はセルフ、「Akira Star」900円 (細いストレート麺140g、100g にしても同じ値段、あっさり醤油、もやしとKujo ねぎたっぷり、豚バラ2枚と肩ロース1枚)、豚骨醤油あるいは胡椒のきいた鶏ガラという声、Akira Star SP、DX、星形の半熟卵「Egg Star」200円、SNS で知らせる限定の煮干しラーメン1,300円、たまり醤油の中華そばとプレミアムのホルモン、チャーシュー丼500円、瓶ビール650円、天井に Toy Story の人形。',
      confidence: 'medium', sources: [TB, R + 'B454181577/', R + 'B487176542/', R + 'B493230807/', R + 'B527263877/', R + 'B537092786/', R + 'B537171778/', R + 'B537526084/', R + 'B537625868/', R + 'B537972010/', R + 'B538047155/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine, or order PayPay at the table; strict house rules on photos and noodle firmness. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国6-1-35',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国六丁目1番35号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537171778/', R + 'B537625868/', R + 'B454181577/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Akira Star (ramen)', '¥900', 'Ramen', 'no', 'no', 'October 2026.', 'akira_star'),
      it('', '', 'Egg Star (star-shaped soft-boiled egg)', '+¥200', 'Toppings', 'ask', 'no', 'October 2026.', 'egg_star'),
      it('', '', 'Chashu rice bowl', '¥500', 'Rice', 'no', 'no', 'October 2026.', 'chashu_don'),
      it('', '', 'Bottled beer', '¥650', 'Drinks', 'no', 'ask', 'October 2026.', 'bottle_beer'),
    ] }, {
    cuisine: '朝ラーメン (2026年)・「Akira Star」900円: 細いストレート麺 (140g、100g にしても同じ値段) にあっさり醤油のスープ、もやしとKujo ねぎたっぷり、豚バラ2枚と肩ロース1枚 (2026年10月)。スープは豚骨醤油とも、胡椒のきいた鶏ガラともいわれる (2026年10月)・Akira Star SP (チャーシューメン) と DX (2026年10月)・星形の半熟卵「Egg Star」200円 (2026年10月)・SNS で知らせる限定: 煮干しラーメン1,300円 (2026年10月)。たまり醤油の中華そばとプレミアムのホルモン (2026年10月)・チャーシュー丼500円 (2026年10月)・瓶ビール650円 (2026年10月)',
    neighborhood: '東三国6-1-35。東三国駅から北へ徒歩約5分 (食べログ。2026年10月)',
    gf_detail: 'グルテンフリーではありません。醤油のスープに小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。豚か鶏のスープにチャーシュー。',
    notes: '[ラーメン・東三国、店主ひとりの星形の卵の朝ラーメン] 東三国駅の北の小さな朝ラーメンのカウンターで、金曜から日曜の7時から14時だけ。店主がひとりで作って運び、手早い。天井には Toy Story の人形 (2026年10月)。看板は「Akira Star」: 細いストレート麺に、胡椒のきいたあっさり醤油、もやしとKujo ねぎが山盛りで900円。星形の「Egg Star」を200円で (2026年10月)。SNS で知らせる限定、たとえば濃い煮干しラーメンもチェックを (2026年10月)。店のルールはきびしく、写真は料理だけ、麺かためは不可。PayPay か現金。',
  });
}

// ================================================================ エルナージ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27052504/'; const R = TB + 'dtlrvwlst/'; const W = 'http://el-nague.com';
  const D = day(['11:30', '14:00'], ['17:30', '22:00']);
  put({
    id: 'osaka_el_nague_nonakakita', name: 'エルナージ (EL NAGUE)', category: 'OMNI',
    lat: 34.731184, lng: 135.483319, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Paella is rice, but ajillo comes with bread and there are pastas and quiche on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood paella, Iberico pork, sausage and jamón.',
    hours_raw: 'Tue–Sat 11:30–14:00 (food last order 13:30) and 17:30–22:00 (food last order 21:30); closed Sunday and Monday, which are used for events and live music (Tabelog). Lunch resumed by September 2026 after a pause (September 2026). Reservations accepted; booked out at 19:00 on a weekday (July 2026). Cards, WAON, QUICPay and PayPay accepted (Tabelog). 18 seats: counter, tables and a private room, up to 32 for groups; non-smoking; wheelchair accessible; children, strollers and pets welcome; parking for two cars (Tabelog). Orders on your own phone from a digital menu (February 2026; Tabelog). Opened 28 July 2010 (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '野中北1-4-20 — on Route 176 about 10 min south of Hankyu Mikuni Stn, 10 min from Kanzakigawa, 20 min from Shin-Osaka (Tabelog; February 2026)',
    cuisine: 'Spanish cooking with seafood from the fishing port, in a 90-year-old former post office (Tabelog shop text) · lunch: three paella sets only, e.g. seafood paella with appetisers ¥1,400 (January 2025); mixed seafood and chicken paella with salad ¥1,280 (September 2026) · dinner à la carte: appetiser platter with quiche and potato salad, gambas al ajillo with bread, grilled Iberico pork, homemade sausage, squid-ink and seafood paella, shrimp cream pasta, fish of the day such as sawara a la bilbaína, fresh fish carpaccio, grilled chuck eye, Spanish jamón and cheese (2024–2026) · courses: ¥3,000 with all-you-can-drink +¥1,500 (March 2024); "Barcelona Course" of seven dishes with two hours of drinks (Tabelog shop text) · wine and cocktails (Tabelog) · dinner for two with drinks about ¥8,000 (2026)',
    website: W, gmaps: gm('エルナージ 野中北'), menu_url: null,
    notes: "[Spanish · Nonakakita, paella in a 90-year-old former post office] A retro Spanish restaurant open since 2010 in a 90-year-old former post office on Route 176, with mimosa in the garden and a warm, old-house dining room (Tabelog; January 2025). One cook runs it, yet the food comes steadily: a mixed appetiser plate, gambas al ajillo with bread, grilled Iberico pork, squid-ink paella and the seafood paella the shop is proudest of (Tabelog; February 2026). Lunch is just three paella sets, from about ¥1,300 (2025–2026). Dinner for two with drinks runs about ¥8,000 (2026). A walk from any station, so locals book it out; reserve. Jazz and other live events may be held on Sundays and Mondays.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null, background: 'Tabelog shop text: retro Spanish cooking with fresh seafood from the fishing port, in a former post office built 90 years ago, mixing Japanese and Western styles; occasional live events including jazz; opened 28 July 2010 (Tabelog). Reviewers: "The master runs the place alone" (February 2026); detailed explanations of the menu (August 2026).', philosophy: null, specialty: 'Seafood paella; squid-ink paella.',
      anecdotes: [
        { text: '"The master runs the place alone, but the speed of drink and food service is perfectly fine (orders are placed via mobile phone)." — February 2026, dinner for two at JPY 7,880.', source: R + 'B523125870/' },
        { text: '"I highly recommend the Sawara (Spanish mackerel) a la Bilbaina." — July 2026.', source: R + 'B500274869/' },
        { text: '"The paella was rich with the flavor of seafood broth and included a large shrimp!" — January 2025, paella lunch for JPY 1,400.', source: R + 'B500366262/' },
      ],
      japanese_sources_summary: '食べログ: エルナージ、スペイン料理・居酒屋、大阪市淀川区野中北1-4-20、阪急 三国駅と神崎川駅から徒歩10分、十三駅から15分、新大阪駅から20分、火〜土11:30〜14:00 (料理 L.O. 13:30)、17:30〜22:00 (料理 L.O. 21:30)、日・月休み (イベントやライブ)、予約可、カード・WAON・QUICPay・PayPay 可、18席 (カウンター、テーブル、個室)、32人まで、禁煙、車いす可、子ども、ベビーカー、ペット可、駐車場2台、2010年7月28日オープン。店の紹介: 90年前の元郵便局を使ったレトロな和洋折衷のスペイン料理、漁港の新鮮な魚介、おすすめは魚介のパエリア、7品と2時間飲み放題の「Barcelona Course」、ジャズなどのライブも。口コミ (2024年3月〜2026年9月): ランチはパエリアのセット3種だけ、海鮮パエリア1,400円 (2025年1月)、海鮮と鶏のミックスとサラダ1,280円 (2026年9月)、夜は前菜盛り合わせ (キッシュ、ポテトサラダ)、エビのアヒージョとパン、イベリコ豚のグリル、自家製ソーセージ、イカスミのパエリア、エビのクリームパスタ、本日の魚 (サワラの a la bilbaína)、カルパッチョ、ハモンとチーズ、3,000円のコースに飲み放題1,500円、2人で約8,000円、マスターひとりで切り盛り、注文はスマホ、庭のミモザ、平日19時は満席。',
      confidence: 'medium', sources: [TB, W, R + 'B352032812/', R + 'B482369383/', R + 'B500274869/', R + 'B500366262/', R + 'B512224667/', R + 'B519166607/', R + 'B523125870/', R + 'B533400642/', R + 'B535790051/', R + 'B538452878/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order from a digital menu on your phone. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区野中北1-4-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区野中北一丁目4番20号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535790051/', R + 'B482369383/', R + 'B500366262/'],
    price_note: 'Prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Paella lunch, mixed seafood and chicken, with salad', '¥1,280', 'Lunch', 'ask', 'no', 'September 2026.', 'paella_lunch_mixto'),
      it('', '', 'Seafood paella lunch with appetisers', '¥1,400', 'Lunch', 'ask', 'no', 'January 2025.', 'paella_lunch_mariscos'),
      it('', '', 'Course (appetisers, ajillo, Iberico pork, sausage, seafood paella, dessert)', '¥3,000', 'Courses', 'no', 'no', 'March 2024; all-you-can-drink +¥1,500.', 'course_3000'),
      it('', '', 'Squid-ink paella', '', 'Paella', 'ask', 'no', 'December 2025; February and August 2026.', 'paella_negra'),
    ] }, {
    cuisine: '漁港の魚介を使うスペイン料理。築90年の元郵便局で (食べログの店の紹介)・ランチはパエリアのセット3種だけ。たとえば前菜つきの海鮮パエリア1,400円 (2025年1月)。海鮮と鶏のミックスのパエリアにサラダで1,280円 (2026年9月)・夜の一品: キッシュとポテトサラダの前菜盛り合わせ、エビのアヒージョとパン、イベリコ豚のグリル、自家製ソーセージ、イカスミと海鮮のパエリア、エビのクリームパスタ、本日の魚 (サワラの a la bilbaínaなど)、鮮魚のカルパッチョ、肩ロースのグリル、スペインのハモンとチーズ (2024〜2026年)・コース: 3,000円、飲み放題は1,500円 (2024年3月)。7品と2時間飲み放題の「Barcelona Course」(食べログの店の紹介)・ワインとカクテル (食べログ)・2人で飲んで約8,000円 (2026年)',
    neighborhood: '野中北1-4-20。国道176号ぞい、阪急 三国駅から南へ徒歩約10分、神崎川駅から10分、新大阪から20分 (食べログ。2026年2月)',
    gf_detail: '要確認。グルテンの情報なし。パエリアは米だが、アヒージョにはパン、パスタやキッシュもある。',
    vegan_detail: 'ヴィーガンではありません。魚介のパエリア、イベリコ豚、ソーセージ、ハモン。',
    notes: '[スペイン料理・野中北、築90年の元郵便局のパエリア] 2010年から国道176号ぞいの築90年の元郵便局で営むレトロなスペイン料理の店。庭にはミモザ、古い家の温かい店内 (食べログ。2025年1月)。料理人ひとりで切り盛りするのに、料理はちゃんと出てくる: 前菜盛り合わせ、パンつきのエビのアヒージョ、イベリコ豚のグリル、イカスミのパエリア、店がいちばん推す海鮮パエリア (食べログ。2026年2月)。ランチはパエリアのセット3種だけで、約1,300円から (2025〜2026年)。夜は2人で飲んで約8,000円 (2026年)。どの駅からも歩くので、地元の人で満席に。予約を。日曜と月曜はジャズなどのライブがあることも。',
  });
}

// ================================================================ 家系ラーメン 頂㐂家 阪急三国店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27141464/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '23:00']);
  put({
    id: 'osaka_itadakiya_hankyu_mikuni', name: '家系ラーメン 頂㐂家 阪急三国店 (Iekei Ramen Itadakiya Hankyu Mikuni Ten)', category: 'OMNI',
    lat: 34.737644, lng: 135.48387, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a soy or salt tonkotsu broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth with chashu.',
    hours_raw: 'Daily 11:00–23:00; hours may change (Tabelog). No reservations; cash only (Tabelog; August 2026). Ticket machine (2026). About 31 seats: 7 at the counter and six tables for four (October 2026); non-smoking (Tabelog). Free small rice, at lunch or all day by reviewers\' accounts (June–August 2026). Opened 29 March 2024 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: '三国本町3-29-12 — right by Hankyu Mikuni Stn (Tabelog; 2026), coin parking to the north (August 2026)',
    cuisine: 'Iekei ramen, soy or salt (2026) · choose thick or thin noodles; short, thick, curly noodles; firmness, richness and oil to order (September 2026) · deluxe ramen with extra egg, two more slices of chashu and two more sheets of nori ¥1,150 (May and October 2026); negi ramen ¥1,000 (June 2026); tantanmen with plenty of vegetables (July 2026) · free small rice; fresh ginger, garlic, pepper and doubanjiang on the counter (2026) · menma ¥150, bottled beer ¥600 (May 2026); beer set with gyoza, seasoned bean sprouts and kara-age (March 2026)',
    website: null, gmaps: gm('家系ラーメン 頂㐂家 阪急三国店'), menu_url: null,
    notes: "[Ramen · Mikuni, iekei ramen with free rice by Hankyu Mikuni] An iekei ramen shop right by Hankyu Mikuni Station, open 11:00 to 23:00 every day, one of a small group. Expect a punchy, salty, oily tonkotsu-soy broth with short thick curly noodles, ordered firm, rich or light as you like, plus free rice to soak it up with ginger or garlic from the counter (2026). The deluxe bowl with extra egg, chashu and nori is ¥1,150; negi ramen ¥1,000 (2026). A reviewer from Kanagawa found it true to iekei with a Kansai lean toward green onions (June 2026). Cash only; ticket machine.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 29 March 2024 (Tabelog). Reviewers: energetic, friendly staff (July–August 2026); "a typical chain restaurant serving standard Iekei ramen" (May 2026). Other Itadakiya shops found by web search (2026-11-02): Makino (Hirakata), Hankyu Itami and Nagahoribashi.', philosophy: null, specialty: 'Deluxe iekei ramen with free rice.',
      anecdotes: [
        { text: '"Perfect saltiness, great richness, and a nice oily texture—delicious!" — September 2026, soy ramen ordered firm, rich and with extra toppings.', source: R + 'B534842393/' },
        { text: '"However, it has evolved with a touch of Kansai flavor, especially for those who love green onions." — June 2026, negi ramen for JPY 1,000.', source: R + 'B529237121/' },
        { text: '"There was fresh ginger on the counter for flavor enhancement, which added a refreshing touch!" — July 2026, tantanmen.', source: R + 'B532565387/' },
      ],
      japanese_sources_summary: '食べログ: 家系ラーメン 頂㐂家 阪急三国店、ラーメン・つけ麺・担々麺、大阪市淀川区三国本町3-29-12、三国駅から89m、毎日11:00〜23:00、予約不可、カード・電子マネー・QR 不可、禁煙、2024年3月29日オープン。口コミ (2026年3〜10月): 阪急 三国駅のすぐ前、約31席 (カウンター7、4人テーブル6)、食券、現金のみ、醤油と塩、太麺か細麺、短い太めのちぢれ麺、かため・こいめ・多めを選べる、塩気もコクも油もしっかり、デラックスラーメン (味玉、チャーシュー2枚、海苔2枚が多い) 1,150円、ネギラーメン1,000円、担々麺、ライス無料、卓上に生姜、にんにく、胡椒、豆板醤、メンマ150円、瓶ビール600円、餃子とビールのセット (もやしとから揚げ)、スタッフが元気、ふつうのチェーン店という声、北にコインパーキング。',
      confidence: 'medium', sources: [TB, R + 'B482565374/', R + 'B524110289/', R + 'B528832135/', R + 'B529237121/', R + 'B532565387/', R + 'B534225218/', R + 'B534725553/', R + 'B534842393/', R + 'B535771048/', R + 'B537175492/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; say firmness, richness and oil. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区三国本町3-29-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区三国本町三丁目29番12号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B482565374/', R + 'B528832135/', R + 'B529237121/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Deluxe ramen (extra egg, chashu and nori)', '¥1,150', 'Ramen', 'no', 'no', 'May and October 2026.', 'deluxe'),
      it('', '', 'Negi ramen', '¥1,000', 'Ramen', 'no', 'no', 'June 2026.', 'negi_ramen'),
      it('', '', 'Menma', '¥150', 'Toppings', 'ask', 'ask', 'May 2026.', 'menma'),
      it('', '', 'Bottled beer', '¥600', 'Drinks', 'no', 'ask', 'May 2026.', 'bottle_beer'),
    ] }, {
    cuisine: '家系ラーメン、醤油か塩 (2026年)・太麺か細麺を選ぶ。短い太めのちぢれ麺。かため、こいめ、多めなど好みで (2026年9月)・味玉、チャーシュー2枚、海苔2枚が多いデラックスラーメン1,150円 (2026年5月と10月)。ネギラーメン1,000円 (2026年6月)。野菜たっぷりの担々麺 (2026年7月)・ライス無料。カウンターに生姜、にんにく、胡椒、豆板醤 (2026年)・メンマ150円、瓶ビール600円 (2026年5月)。餃子とビールのセット (味つけもやしとから揚げつき) (2026年3月)',
    neighborhood: '三国本町3-29-12。阪急 三国駅のすぐそば (食べログ。2026年)。北にコインパーキング (2026年8月)',
    gf_detail: 'グルテンフリーではありません。醤油か塩の豚骨スープに小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープにチャーシュー。',
    notes: '[ラーメン・三国、阪急 三国駅前のライス無料の家系] 阪急 三国駅のすぐそばの家系ラーメンの店で、毎日11時から23時。いくつかの店をもつ小さなグループの一軒。パンチのある、塩気と油のしっかりした豚骨醤油に短い太めのちぢれ麺。かため、こいめなど好みで頼み、無料のライスにカウンターの生姜やにんにくで (2026年)。味玉、チャーシュー、海苔が多いデラックスは1,150円、ネギラーメン1,000円 (2026年)。神奈川出身の人は、家系らしさに関西風のねぎ好みが加わった味という (2026年6月)。現金のみ。食券。',
  });
}

save();
