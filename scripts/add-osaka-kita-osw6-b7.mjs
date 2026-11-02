// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 7.
//   + 大阪泉佐野港 活鮨 グランフロント大阪店 (sushi from ¥80 and skewered tempura, Grand Front Osaka South B1F, since March 2026)
//   + 北新地 宿 Kitashinchi Yado (seafood izakaya and courses, Kitashinchi, since 2018)
//   + 北新地 焼鳥 Kawaguchi (Tamba black-chicken yakitori, Kitashinchi, since 2017)
//   + 串カツ＆ワインバル ゑしぇ蔵 Kushi Katsu & Wine Bar Eshezo (kushikatsu counter with 100-drink all-you-can-drink, since 2016)
//   - 知留久 曽根崎本店 27000479 skipped: 知留久 is already in data (osaka_shiru_hisa_hozenji).
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-01, after b6): odd ids in order 27154311, 27106117,
//   27000479, 27097541, 27094611.
//   Chain check: Katsu Zushi is the second shop of a Kyoto sushi restaurant, with an affiliated shop in the Osaka Fukoku Seimei
//   Building (Tabelog); a small group, none in data. Yado and Eshezo: no other shop found. Kawaguchi: the listing says it has no
//   affiliation with similarly named shops (so not 心斎橋かわぐち, osaka_shinsaibashi_kawaguchi). None of the four is in
//   data/osaka.json (grep by id, name and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw6-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27000479', '知留久 曽根崎本店: main shop of 知留久, a kushikatsu business founded in 1946 (Tabelog); 知留久 is already in data as osaka_shiru_hisa_hozenji.');

// ================================================================ 大阪泉佐野港 活鮨 グランフロント大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27154311/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'osaka_izumisano_katsu_zushi_grand_front', name: '大阪泉佐野港 活鮨 グランフロント大阪店 (Osaka Izumisano Ko Katsu Zushi Guranfuronto oosaka ten)', category: 'OMNI',
    lat: 34.70394, lng: 135.494435, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi and tempura come with flavoured salts (matcha, hojicha, genmaicha, sweet potato) as well as the usual soy sauce, which normally contains wheat; the tempura skewers are wheat-battered.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and tempura bar; vegetable tempura (shiitake, onion, corn, lotus root, eggplant) appears in 2026 reviews, fried alongside seafood.',
    hours_raw: 'Daily 11:00–22:00, last order 21:00; closing days follow Grand Front Osaka; hours may change at New Year, Golden Week and Obon (Tabelog). Reservations accepted (Tabelog); easy to get in around 17:00 (September 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay, PayPay (Tabelog). 20 seats: 14 at the counter and three tables for two; non-smoking (smoking area in the building); children welcome; picture menu; paid parking in the building (Tabelog). Opened 1 March 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Grand Front Osaka South Building B1F — 3 min from JR Osaka Stn',
    cuisine: 'Sushi from ¥80 a piece, with fish from the ports, and skewered tempura (Tabelog) · fish delivered by wholesalers from Izumisano port (August 2026) · sets: nigiri and sashimi set (7 nigiri, 2 sashimi, red miso soup) ¥2,980; omakase 8-piece nigiri ¥2,680; omakase tempura assortment ¥1,050 (August–September 2026); lunch sets of tempura skewers and nigiri (October 2026) · nigiri topped with edible flowers and a different condiment on each piece; salts from a Kyoto tea shop: matcha, hojicha, genmaicha, sweet potato (August–September 2026) · tempura of shrimp, lotus root, shiitake, corn, eggplant, shishito; red snow crab gratin; sushi-shop potato salad; conger tempura (August–September 2026) · a seafood bowl (Tabelog); the shop\'s own sake and local sake',
    website: null, gmaps: gm('大阪泉佐野港 活鮨 グランフロント大阪店'), menu_url: null,
    notes: "[Sushi · Umeda, Grand Front Osaka South B1F] The Osaka branch of a Kyoto sushi bar known for queues, opened in March 2026 in the basement of Grand Front Osaka's south building, three minutes from the station. Nigiri start at ¥80 a piece and come dressed for the camera: edible flowers, a different condiment on each piece, and a row of coloured salts from a Kyoto tea shop (matcha, hojicha, genmaicha, sweet potato) for the sushi and the skewered tempura. Sets run about ¥2,700–3,000 for eight or nine pieces, tempura ¥1,050, and lunch sets suit a quick meal. Most 2026 diners liked the look and freshness; one September diner waited over 20 minutes for food, disliked staff working the register in blue gloves, and judged it aimed at visitors. Counter seats suit solo diners.",
    chef_bio: { chef_name: null, roles: ['Sushi chefs (unnamed in the sources read)'], origin: 'Second shop of a popular Kyoto sushi restaurant (Tabelog); an affiliated shop is in the Osaka Fukoku Seimei Building (Tabelog remarks).', background: 'Shop text (Tabelog): fresh seafood from local waters and fishing ports, prepared by skilled chefs, from ¥80 a piece; sake, tempura and side dishes; for sightseers and after-work diners. Opened 1 March 2026. A review describes the concept as "see, eat, and enjoy" sushi (August 2026).', philosophy: 'Sushi to see as well as eat (August 2026 review).', specialty: 'Flower-topped nigiri with tea salts; skewered tempura.',
      anecdotes: [
        { text: '"The matcha salt and hojicha salt made from tea leaves sourced from a tea shop in Kyoto were also impressive." — August 2026.', source: R + 'B534147287/' },
        { text: '"What sets this sushi apart is that each piece is topped with a different condiment, making it visually stunning" — September 2026.', source: R + 'B535402166/' },
        { text: '"Even though it wasn\'t busy, it took over 20 minutes from ordering to receiving my food." — September 2026.', source: R + 'B535805083/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B534147287/', R + 'B534458154/', R + 'B534587873/', R + 'B534655599/', R + 'B534946513/', R + 'B535402166/', R + 'B535673417/', R + 'B535805083/', R + 'B536938874/', R + 'B537465833/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Picture menu (Tabelog); counter seats for solo diners; one diner thought it aimed at overseas visitors (September 2026). No English menu listed.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区大深町4-20 グランフロント大阪南館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; opened March 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区大深町4番地 (lot) 40m (Grand Front Osaka South Building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534587873/', R + 'B535402166/'],
    price_note: 'Set prices from August and September 2026 reviews; nigiri from ¥80 per Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Nigiri and sashimi set (7 nigiri, 2 sashimi, red miso soup)', '¥2,980', 'Sushi', 'ask', 'no', 'August and September 2026 reviews.', 'nigiri_sashimi_set'),
      it('', '', 'Omakase 8-piece nigiri', '¥2,680', 'Sushi', 'ask', 'no', 'September 2026 review.', 'omakase_8'),
      it('', '', 'Omakase tempura assortment', '¥1,050', 'Tempura', 'no', 'no', 'August and September 2026 reviews.', 'tempura_assortment'),
      it('', '', 'Nigiri (per piece)', '¥80', 'Sushi', 'ask', 'no', 'Tabelog ("from 80 yen").', 'nigiri_piece'),
    ] }, {
    cuisine: '1貫80円からの、港の魚の鮨と串天ぷら (食べログ)・Izumisano の港の仲卸から届く魚 (2026年8月)・セット: 握り7貫、刺身2種、赤だしの握りと刺身のセット2,980円、おまかせ握り8貫2,680円、おまかせ天ぷら盛り合わせ1,050円 (2026年8〜9月)、串天ぷらと握りのランチセット (2026年10月)・エディブルフラワーをのせ、1貫ずつ違う薬味の握り、Kyoto のお茶屋さんの茶葉の塩: 抹茶、ほうじ茶、玄米茶、さつまいも (2026年8〜9月)・えび、れんこん、しいたけ、とうもろこし、なす、ししとうの天ぷら、紅ズワイガニのグラタン、寿司屋のポテトサラダ、穴子の天ぷら (2026年8〜9月)・海鮮丼 (食べログ)、店のオリジナルの日本酒と地酒',
    neighborhood: 'グランフロント大阪南館の地下1階。JR大阪駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。鮨や天ぷらには味つきの塩 (抹茶、ほうじ茶、玄米茶、さつまいも) と、ふつう小麦を含む醤油を使う。串天ぷらは小麦の衣。',
    vegan_detail: 'ヴィーガンではありません。鮨と天ぷらの店。2026年の口コミには野菜の天ぷら (しいたけ、玉ねぎ、とうもろこし、れんこん、なす) もあるが、魚介と一緒に揚げる。',
    notes: '[鮨・梅田、グランフロント大阪南館地下1階] 行列で知られる Kyoto の鮨屋の大阪の店で、2026年3月にグランフロント大阪南館の地下にオープン、駅から3分。握りは1貫80円からで、写真映えする仕立て: エディブルフラワー、1貫ずつ違う薬味、Kyoto のお茶屋さんの色とりどりの塩 (抹茶、ほうじ茶、玄米茶、さつまいも) を握りと串天ぷらに。セットは8〜9貫で2,700〜3,000円ほど、天ぷらは1,050円、ランチのセットは手早く食べるのにちょうどいい。2026年の口コミの多くは見た目と鮮度をほめているが、9月には料理が出るまで20分以上待った、青い手袋のままレジをしていた、海外の観光客向けに見えたという人も。カウンター席はひとりでも入りやすい。',
  });
}

// ================================================================ 北新地 宿
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27106117/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '24:00']), SA = day(['18:00', '23:00']);
  put({
    id: 'osaka_kitashinchi_yado', name: '北新地 宿 (Kitashinchi Yado)', category: 'OMNI',
    lat: 34.698115, lng: 135.496903, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi, seasonal dishes and a sea-bream kamameshi (June 2026) are usually seasoned with soy sauce, which normally contains wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya and course restaurant (sashimi, fugu, sea bream, meat dishes).',
    hours_raw: 'Mon–Fri 18:00–24:00 (last order food 23:00, drinks 23:30); Sat 18:00–23:00 (last order food 22:00, drinks 22:30); closed Sundays, holidays, Golden Week, Obon and New Year (Tabelog). Reservations: the shop phones to confirm the number given; write any end time in the request (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay for bills over ¥4,000; no e-money (Tabelog). 17 seats: counter and private rooms for 4, 6 and 8; private hire up to 20 (Tabelog). Smoking allowed, including paper cigarettes, with separate smoking rooms in the private rooms (Tabelog; March and June 2026); a December 2025 diner at the counter was bothered by the smoke. Opened 9 July 2018 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi, サウザンドビル 3F, at the top of the stairs from Kitashinchi Stn exit 11-21 — 1 min away',
    cuisine: 'Seafood and seasonal Japanese dishes by a chef trained at well-known Japanese restaurants, who picks fish at the market every morning, with rare fish and local sake (Tabelog) · courses: standard course with all-you-can-drink ¥7,500 (9 dishes); omakase premium with all-you-can-drink ¥10,500; omakase, food only ¥8,500 (Tabelog, tax included); a ¥7,000 all-you-can-drink course in July 2026, sake not included in the standard drinks · à la carte too (July 2026) · sashimi platters from ports around Japan, once with fugu (December 2025, March 2026); sea-bream kamameshi (June 2026) · a range of sake, though one May 2026 diner found the sake list short',
    website: null, gmaps: gm('北新地 宿'), menu_url: null,
    notes: "[Izakaya · Kitashinchi, fish at the top of the station stairs] A small third-floor izakaya right at the top of the stairs from Kitashinchi station, with a counter and private rooms. The chef, trained at well-known Japanese restaurants, buys fish at the market each morning, so the sashimi platters (fugu on one March 2026 visit) change daily, and there is a sea-bream kamameshi to finish. Courses with all-you-can-drink start at about ¥7,000–7,500; à la carte is extensive. Diners praise the fish and the attentive staff; others found prices high, drinks slow (May 2026), and the counter smoky, since smoking is allowed. Open until midnight on weekdays; closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), trained at well-known Japanese restaurants (Tabelog)', 'Owner (unnamed; "working efficiently", December 2025 review)'], origin: null, background: 'Shop text (Tabelog): the chef honed skills at renowned Japanese restaurants and visits the market every morning to choose fresh seafood, offering a daily menu of rare fish not found elsewhere, with local sake to match. Opened 9 July 2018.', philosophy: 'Daily fish from the market, cooked with care (Tabelog).', specialty: 'Sashimi platter; sea-bream kamameshi.',
      anecdotes: [
        { text: '"The sashimi is exquisite! They source seasonal fish from various fishing ports, so you won\'t find the same offerings elsewhere." — December 2025.', source: R + 'B519150406/' },
        { text: '"Everything was delicious, but the sashimi platter included fugu (pufferfish), which really delighted my companion!" — March 2026, a first visit.', source: R + 'B523825834/' },
        { text: '"The standard all-you-can-drink option does not include Japanese sake, so you can either upgrade or order it separately." — July 2026, the ¥7,000 course.', source: R + 'B532946919/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B514162526/', R + 'B519150406/', R + 'B519284845/', R + 'B523825834/', R + 'B529100340/', R + 'B529449560/', R + 'B530828415/', R + 'B531343845/', R + 'B532352969/', R + 'B532946919/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses or à la carte; the shop phones to confirm bookings (Tabelog). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-5-17 サウザンドビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目5番17号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Standard course with all-you-can-drink (9 dishes)', '¥7,500', 'Course', 'ask', 'no', 'Tabelog listing; ¥7,000 in a July 2026 review.', 'standard_course'),
      it('', '', 'Omakase premium course with all-you-can-drink', '¥10,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'premium_course'),
      it('', '', 'Omakase course, food only', '¥8,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'omakase_food_only'),
    ] }, {
    cuisine: '名店で修業した料理人の魚と季節の和食。料理人は毎朝市場で魚を選び、めずらしい魚と地酒 (食べログ)・コース: 飲み放題つきのスタンダード7,500円 (9品)、飲み放題つきのおまかせプレミアム10,500円、料理のみのおまかせ8,500円 (食べログ、税込)、2026年7月は飲み放題つき7,000円のコースで、通常の飲み放題に日本酒は含まれない・アラカルトも (2026年7月)・全国の港の刺身の盛り合わせ、ふぐが入ったことも (2025年12月、2026年3月)、鯛の釜めし (2026年6月)・日本酒、ただし2026年5月には種類が少ないという声も',
    neighborhood: '北新地、北新地駅の11-21出口の階段を上がったところのサウザンドビル 3階。徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。刺身、季節の料理、鯛の釜めし (2026年6月) にはふつう小麦を含む醤油を使う。',
    vegan_detail: 'ヴィーガンではありません。魚の居酒屋とコースの店 (刺身、ふぐ、鯛、肉料理)。',
    notes: '[居酒屋・北新地、駅の階段を上がってすぐの魚の店] 北新地駅の階段を上がってすぐのビルの3階にある小さな居酒屋で、カウンターと個室。名店で修業した料理人が毎朝市場で魚を仕入れるので、刺身の盛り合わせ (2026年3月はふぐ入り) は日替わりで、締めには鯛の釜めし。飲み放題つきのコースは7,000〜7,500円ほどから、アラカルトも豊富。魚とていねいなスタッフをほめる声の一方、値段が高め、飲み物が遅い (2026年5月)、喫煙可なのでカウンターがたばこくさいという声も。平日は深夜0時まで、日祝休み。',
  });
}

// ================================================================ 北新地 焼鳥 Kawaguchi
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27097541/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'osaka_kitashinchi_yakitori_kawaguchi', name: '北新地 焼鳥 Kawaguchi (Kitashinchi Yakitori Kawaguchi)', category: 'OMNI',
    lat: 34.697976, lng: 135.495943, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Yakitori may be salted or brushed with tare, which is usually soy-based and contains wheat; ask for salt. The meal often ends with grilled rice-ball chazuke.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakitori restaurant built on whole Tamba black chickens.',
    hours_raw: 'Mon–Fri 17:30–22:00, last order 21:30; closed Saturdays, Sundays and holidays (Tabelog). Same-day bookings welcome, but same-day cancellations are not accepted with only 13 seats; private rooms for four or more by phone only; call if Tabelog shows full (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 13 seats at the counter plus private rooms (Tabelog). Smoking: allowed per Tabelog; only in the private rooms per a September 2025 review. Opened 21 February 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, 小西ビル 3F, opposite the Karaoke Kan by exit C60 of Kitashinchi Stn — 2 min away',
    cuisine: 'Yakitori of Tamba black chicken, each bird butchered in the shop for rare cuts; raw white liver of Kyo-Tanba black chicken (Tabelog) · omakase course or à la carte (2024–2026 reviews) · à la carte in January 2025: seseri tataki ¥1,200, thigh tataki ¥1,500, skewers ¥350 (special mince, skin); chicken sashimi platter; daki-mi and tsukune (July 2026); liver (October 2026) · grilled rice-ball chazuke to finish; pudding · house curry in pouches to take home (September 2025) · wine, sake and shochu chosen to pair (July 2026)',
    website: 'http://yakitorikawaguchi.jp/', gmaps: gm('北新地 焼鳥 Kawaguchi'), menu_url: null,
    notes: "[Yakitori · Kitashinchi, Tamba black chicken] A thirteen-seat yakitori counter with private rooms, up in a building opposite the Karaoke Kan by Kitashinchi station, that butchers whole Tamba black chickens each day so it can serve rare cuts and even raw white liver. Order the omakase course or à la carte (skewers from about ¥350, seared seseri or thigh tataki); diners single out the daki-mi, the tsukune and the liver, and nearly everyone ends with the grilled rice-ball chazuke. Expect ¥10,000–15,000 a head with drinks. Diners describe a friendly owner and bright staff, and in September 2026 a young chef at the grill; a few earlier diners found service brisk or skewers coming too fast. Weekdays only.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; "very friendly", September 2025 review)', 'Grill chef (unnamed; "relatively young", September 2026 review)'], origin: null, background: 'Shop text (Tabelog): authentic yakitori; each Tamba black chicken prepared individually from the whole bird; "Only Kawaguchi Offers White Liver Sashimi from Kyo-Tanba Black Chicken!"; the shop is only in Kitashinchi and unrelated to similarly named shops. Opened 21 February 2017.', philosophy: 'Whole birds prepared in house for rare cuts (Tabelog).', specialty: 'Tamba black chicken yakitori; white liver sashimi; grilled rice-ball chazuke.',
      anecdotes: [
        { text: '"The portion sizes for the courses are just right", and the amount can be adjusted on request — September 2025.', source: R + 'B514573519/' },
        { text: '"Recently, a relatively young chef has been grilling, and the quality here is top-notch." — September 2026.', source: R + 'B536315448/' },
        { text: '"To finish off, the grilled rice balls with tea were delightful" — October 2026.', source: R + 'B537447907/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B486564384/', R + 'B496242502/', R + 'B498966165/', R + 'B511455354/', R + 'B514573519/', R + 'B515715069/', R + 'B523729302/', R + 'B532799173/', R + 'B536315448/', R + 'B537447907/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter yakitori, course or à la carte; private rooms booked by phone (Tabelog). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-4-7 小西ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目4番7号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B498966165/'],
    price_note: 'À la carte prices from a January 2025 review; no course price in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Seseri tataki (seared neck)', '¥1,200', 'A la carte', 'ask', 'no', 'January 2025 review.', 'seseri_tataki'),
      it('', '', 'Thigh tataki', '¥1,500', 'A la carte', 'ask', 'no', 'January 2025 review.', 'momo_tataki'),
      it('', '', 'Yakitori skewers (e.g. special mince, skin)', '¥350', 'Yakitori', 'ask', 'no', 'January 2025 review.', 'skewer'),
      it('', '', 'Grilled rice-ball chazuke', '', 'Rice', 'ask', 'no', '2024–2026 reviews.', 'yakionigiri_chazuke'),
    ] }, {
    cuisine: 'Tamba Black Chicken の焼鳥、一羽ずつ店でさばいてめずらしい部位も、Kyo-Tanba の黒どりの白レバーの刺身 (食べログ)・おまかせのコースかアラカルト (2024〜2026年の口コミ)・2025年1月のアラカルト: seseri のたたき1,200円、momo のたたき1,500円、串350円 (特製のつくね、皮)、鶏刺しの盛り合わせ、daki-mi とつくね (2026年7月)、レバー (2026年10月)・締めは焼きおにぎりの茶漬け、プリン・持ち帰りのレトルトのカレー (2025年9月)・焼鳥に合わせるワイン、日本酒、焼酎 (2026年7月)',
    neighborhood: '北新地、北新地駅C60出口の Karaoke Kan の向かいの小西ビル 3階。徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。焼鳥は塩かタレで、タレはふつう醤油ベースで小麦を含むので塩で頼んで。締めはたいてい焼きおにぎりの茶漬け。',
    vegan_detail: 'ヴィーガンではありません。Tamba Black Chicken を一羽まるごと使う焼鳥の店。',
    notes: '[焼鳥・北新地、Tamba Black Chicken] 北新地駅の出口の Karaoke Kan の向かいのビルの上にある、カウンター13席と個室の焼鳥屋で、Tamba Black Chicken を毎日一羽まるごとさばくので、めずらしい部位や白レバーの刺身まで出せる。おまかせのコースかアラカルト (串は350円ほどから、seseri や momo のたたき) で、daki-mi、つくね、レバーの名前がよく挙がり、ほとんどの人が締めの焼きおにぎりの茶漬けを頼む。飲み物を入れて1人1万〜1万5千円ほど。気さくな店主と明るいスタッフ、2026年9月には若い職人が焼いていたという声。以前は接客がそっけない、串が出るのが早すぎるという人も。平日のみ営業。',
  });
}

// ================================================================ 串カツ＆ワインバル ゑしぇ蔵
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27094611/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_kushikatsu_eshezo_kitashinchi', name: '串カツ＆ワインバル ゑしぇ蔵 (Kushi Katsu & Wine Bar Eshezo)', category: 'OMNI',
    lat: 34.698016, lng: 135.494831, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kushikatsu in batter and two kinds of breadcrumbs (Tabelog), fried in shared cottonseed oil.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kushikatsu of wagyu, seafood, abalone and foie gras alongside vegetables, all in the same oil.',
    hours_raw: 'Kushikatsu 17:00–23:00, last kushikatsu order 21:00; closing days not fixed (Tabelog). Reservations recommended (counter only, full on a March 2026 Friday); a booking may be cancelled after 30 minutes without a call (Tabelog). Non-smoking 17:00–22:00 (22:30 in another note), ashtray at the door; smoking allowed after that (Tabelog). Bring-your-own cake free; private wine events for 10–13 with ¥1,100 corkage; private lunch hire 13:00–16:00 for 4–5 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 11 counter seats; children welcome; dislikes and allergies asked (Tabelog). Opened 28 September 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, 第3シンコービル 2F — 1 min from Nishi-Umeda Stn, 2 min from Kitashinchi Stn',
    cuisine: 'Kushikatsu of ingredients from western Japan (wagyu, fresh seafood, abalone, foie gras, seasonal vegetables), fried in cottonseed oil in two kinds of breadcrumbs; seven kushikatsu courses or single skewers (Tabelog) · about 100 drinks in a sommelier-chosen all-you-can-drink (2 hours), all staff sommeliers (Tabelog) · 10th-anniversary offers (Tabelog): 15 skewers and ice cream ¥4,950 (19 October–30 November), all-you-can-drink ¥2,750 more; 11-skewer course with a three-sake tasting (Jūyondai, Aramasa Cosmos, Jikon) and all-you-can-drink ¥8,800 (November); a stop-when-you-like format · special 12-skewer course ¥8,800 (May 2026) with snow-crab cream croquette, abalone, seafood fried sushi, foie gras, Tanba chicken (March 2026) · casual 9-skewer course: Yamato pork, Awaji onion, black wagyu, Ehime sea bream, Tokushima shiitake, shrimp, asparagus (June 2026) · unlimited cabbage, burdock salad, five sauces; sushi, olive somen and espresso ice cream to finish (2026)',
    website: null, gmaps: gm('串カツ＆ワインバル ゑしぇ蔵'), menu_url: null,
    notes: "[Kushikatsu · Kitashinchi, an eleven-seat counter with a big drinks list] A second-floor kushikatsu counter a minute from Nishi-Umeda station, where every staff member is a sommelier and the all-you-can-drink runs to about a hundred wines and sakes, rare bottles included. Skewers of western-Japan produce (Nara pork, Awaji onion, Ehime sea bream, black wagyu, abalone, foie gras) come fresh from cottonseed oil in a thin batter, with five sauces and unlimited cabbage, and courses end with sushi, olive somen and ice cream. Courses run about ¥5,000–8,800; a 10th-anniversary 15-skewer course was ¥4,950 in autumn 2026. Diners call it a place they return to; one September 2026 diner found little for non-drinkers beyond oolong tea. Counter only, so book. Smoking allowed late in the evening.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; "Owner\'s Recommendation" courses, Tabelog)', 'Staff, all sommeliers (Tabelog)'], origin: null, background: 'Shop text (Tabelog): a kushikatsu specialist using carefully selected ingredients from western Japan; high-quality cottonseed oil; fresh and roasted breadcrumbs matched to each ingredient; seven courses; a premium all-you-can-drink of about 100 drinks chosen by a sommelier; "All Staff are Sommeliers". Opened 28 September 2016; tenth anniversary in 2026.', philosophy: 'Bring out each ingredient in a thin, crisp batter (Tabelog; 2026 reviews).', specialty: 'Kushikatsu course with sommelier-chosen all-you-can-drink.',
      anecdotes: [
        { text: '"I was blown away by the thin batter that highlighted the ingredients." — March 2026, a Friday when the counter was fully booked.', source: R + 'B524392923/' },
        { text: '"October 1st is Sake Day. After enjoying three special types of sake, we dove into the all-you-can-drink option for adults." — October 2026.', source: R + 'B536622179/' },
        { text: '"The only soft drink available was Oolong tea, and there were very few other beverages, making it a bit difficult to bring non-sake drinkers along." — September 2026.', source: R + 'B535655682/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B410026737/', R + 'B494566094/', R + 'B496495718/', R + 'B517265672/', R + 'B524392923/', R + 'B526008239/', R + 'B530883976/', R + 'B535655682/', R + 'B536176264/', R + 'B536622179/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter of 11; staff explain each skewer and suggest drinks (2026). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Tabelog: "We will also ask you about any food you don\'t like or allergies."', source: TB }] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曾根崎新地2-2-5 第3シンコービル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with November 2026 offers; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地二丁目2番5号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B410026737/'],
    price_note: 'Anniversary courses from the Tabelog listing (tax included, autumn 2026); the special course from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', '15 kushikatsu and ice cream (19 Oct–30 Nov 2026; all-you-can-drink +¥2,750)', '¥4,950', 'Course', 'no', 'no', 'Tabelog listing.', 'course_15'),
      it('', '', '11 kushikatsu with a three-sake tasting and all-you-can-drink (November 2026)', '¥8,800', 'Course', 'no', 'no', 'Tabelog listing (regular ¥10,000).', 'course_11_sake'),
      it('', '', 'Special course of 12 kushikatsu', '¥8,800', 'Course', 'no', 'no', 'May 2026 review.', 'special_course_12'),
    ] }, {
    cuisine: '西日本の食材 (和牛、鮮魚、アワビ、フォアグラ、季節の野菜) の串カツ、綿実油で揚げ、2種類のパン粉を使い分ける。串カツのコース7種類か単品 (食べログ)・ソムリエが選ぶ約100種類の飲み放題 (2時間)、スタッフは全員ソムリエ (食べログ)・10周年の特別メニュー (食べログ): 串15本とアイスで4,950円 (10月19日〜11月30日)、飲み放題はプラス2,750円、日本酒3種の飲み比べ (Juyondai、Aramasa Cosmos、Jikon) と飲み放題つきの串11本のコース8,800円 (11月)、好きなところで止める形式も・串12本のスペシャルコース8,800円 (2026年5月)、ズワイガニのクリームコロッケ、アワビ、海鮮の揚げ寿司、フォアグラ、Tanba の鶏 (2026年3月)・串9本のカジュアルコース: Yamato の豚、Awaji の玉ねぎ、黒毛和牛、Ehime の鯛、Tokushima のしいたけ、えび、アスパラ (2026年6月)・キャベツ食べ放題、ごぼうのサラダ、5種類のたれ、締めは寿司、オリーブのそうめん、エスプレッソのアイス (2026年)',
    neighborhood: '北新地、第3シンコービルの2階。西梅田駅から徒歩1分、北新地駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。串カツは衣と2種類のパン粉 (食べログ) で、共通の綿実油で揚げる。',
    vegan_detail: 'ヴィーガンではありません。和牛、魚介、アワビ、フォアグラの串カツと野菜の串を同じ油で揚げる。',
    notes: '[串カツ・北新地、飲み物の豊富な11席のカウンター] 西梅田駅から1分のビルの2階にある串カツのカウンターで、スタッフは全員ソムリエ、飲み放題はめずらしいものも含めてワインと日本酒が約100種類。西日本の食材 (Yamato の豚、Awaji の玉ねぎ、Ehime の鯛、黒毛和牛、アワビ、フォアグラ) の串を、薄い衣で綿実油で揚げたてを出し、5種類のたれとキャベツ食べ放題、コースの締めは寿司、オリーブのそうめん、アイス。コースは5,000円ほどから8,800円、10周年の串15本のコースは2026年秋に4,950円。何度も通う人の声が多く、2026年9月にはお酒を飲まない人の飲み物がウーロン茶くらいしかなかったという人も。カウンターのみなので予約を。夜遅くは喫煙可。',
  });
}

save();
