// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 38.
//   + NEW 大宝 NEW Taiho (ramen and mazesoba open all day, Gojo Karasuma) — no ramen block: the sources do not give all
//     six dimensions
//   + 夷川 鮨 すずか Ebisugawa Sushi Suzuka (8-seat Edomae counter run by a couple, Ebisugawa)
//   + 天空の立ち呑み とさか Tenkuu no Tachinomi Tosaka (4th-floor standing bar by Kyoto Stn)
//   + DE FRITES STAAN (Belgian fries and beer, Shinkyogoku)
//   - skip 26044138 breadworks 聖護院 (brand of TYSONS & COMPANY, a Tokyo restaurant group)
//   Same-name counts first, per brand or operator (2026-11-06): NEW 大宝 — one (data's 大豊ラーメン and 中華料理 大鵬 are
//   different names). すずか — one. 天空の立ち呑み とさか — one; other とさか on Tabelog are unrelated yakitori and ramen shops
//   elsewhere. DE FRITES STAAN — two (Kyoto and Harajuku), drafted. breadworks — the company announcement and TYSONS site
//   (https://www.tysons.jp/breadworks/en) show it is run by TYSONS & COMPANY, whose site lists about 17 restaurant brands
//   (IVY PLACE, T.Y.HARBOR, CICADA, crisscross, BOND ST. KITCHEN and others); this Kyoto shop (opened 9 April 2026) is the
//   third breadworks after Tennozu and Omotesando — a non-local parent, skipped.
//   Taken on 2026-11-06: `next core 200` (lane) gave NEW 大宝 26034448, breadworks 26044138 (skip) and すずか 26028442;
//   `next notable 200` (lane) gave とさか 26027386 and DE FRITES STAAN 26040226. None is in data/kyoto.json: grep by name and
//   address (大坂町404, 俵屋町305 FORUM夷川, 東塩小路町579-24 — shared with kyr_menya_roman — 中之町542-2) found none.
//   Service charges per Tabelog's Japanese original: とさか 「なし」 (Tabelog’s English wrongly says one is added); the
//   others none listed. DE FRITES STAAN and とさか ask one drink each per a review / shop rule noted below. No halal claims;
//   no owner deaths in the sources.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-38');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26044138', 'brand of a non-local restaurant group: breadworks is run by TYSONS & COMPANY of Shinagawa, Tokyo (https://www.tysons.jp/breadworks/en), whose site lists about 17 restaurant and café brands (IVY PLACE, T.Y.HARBOR, CICADA, crisscross, BOND ST. KITCHEN and others); 聖護院 is the third breadworks after Tennozu and Omotesando (opened 9 April 2026).');

// ================================================================ NEW 大宝
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034448/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'kyoto_new_taiho', name: 'NEW 大宝 (NEW Taiho)', category: 'OMNI',
    lat: 34.99423, lng: 135.759911, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen noodles and mazesoba, gyoza (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu-shoyu broth with back fat, chashu, beef tendon (2026 reviews).',
    hours_raw: '11:00–23:00 daily (Tabelog). No reservations (Tabelog). No cards or e-money; PayPay accepted (Tabelog). Non-smoking (Tabelog). Quick at lunch — about 15 minutes in and out (July 2026). 134 m from Gojo Stn (Tabelog). Opened 7 July 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gojo Karasuma — 134 m from Gojo Stn',
    cuisine: 'Ramen of a rich tonkotsu-shoyu broth with back fat but a clean finish, thin straight noodles with a choice of firmness, thin chashu and green onions (July–September 2026) · Taiho ramen, a red, spicy bowl in mild, medium or hot (July–November 2026) · shio ramen with yuzu (July and September 2026) · chashu ramen, beef tendon ramen (September–October 2026) · mazesoba in a choice of sizes with garlic on the table (July and September 2026) · gyoza, chashu rice ball, rice sets, bottled beer (2026 reviews)',
    website: null, gmaps: gm('NEW 大宝 五条'), menu_url: TB,
    notes: '[Ramen · Gojo Karasuma, all day from 11 to 11] A neighbourhood ramen shop open straight through: back-fat tonkotsu-shoyu with thin straight noodles, the spicy red Taiho ramen in three heats, a yuzu shio ramen, beef tendon ramen and mazesoba, with gyoza and rice sets. Quick at lunch, busy with overseas visitors at night. PayPay or cash.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a ramen, abura-soba and mazesoba shop opened 7 July 2020. A July 2026 reviewer thought it once traded under another name. Ramen block not given: the sources do not cover all six ramen dimensions.',
      philosophy: null, specialty: 'Taiho ramen (spicy); chashu ramen.',
      anecdotes: [
        { text: 'An August 2026 lunchtime regular avoids the spicy bowls at work for fear of sweating off foundation, and finds the regular ramen balanced rather than heavy.', source: R + 'B511912805/' },
        { text: 'A November 2026 visitor during Kyoto’s modern architecture festival ordered the spicy Taiho ramen with firm noodles, extra green onions and a chashu rice ball, and was charmed by the cheerful young woman serving.', source: R + 'B538465134/' },
        { text: 'An October 2026 regular came back for the chashu ramen and found it still full of overseas visitors.', source: R + 'B498756554/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン・油そば・まぜそば、下京区大坂町404、五条駅から134m、11:00〜23:00、無休、予約不可、カード・電子マネー不可・PayPay 可、禁煙、2020年7月7日オープン。口コミ (2025年5月〜2026年11月、英語): 背脂の豚骨醤油、細いストレート麺 (硬さを選べる)、薄いチャーシュー、ねぎ、辛い大宝ラーメン (控えめ・少し辛い・辛い)、柚子の塩ラーメン、チャーシュー麺、牛すじラーメン、まぜそば、餃子、チャーシューおにぎり、外国人の客が多い。',
      confidence: 'medium', sources: [TB, R + 'B498756554/', R + 'B511912805/', R + 'B531717710/', R + 'B531936041/', R + 'B532246449/', R + 'B532382161/', R + 'B533466217/', R + 'B534936210/', R + 'B535122400/', R + 'B536234870/', R + 'B536732841/', R + 'B538465134/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; choose spice level and noodle firmness. Many overseas visitors (October 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区大坂町404',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.994230, 135.759911); cross-checked: GSI 京都府京都市下京区大坂町404番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532382161/', R + 'B535122400/'],
    price_note: 'No item prices found.', last_checked: TODAY, items: [
      it('', '', 'Taiho ramen (spicy; mild, medium or hot)', '', 'Ramen', 'no', 'no', 'July–November 2026.', 'taiho_ramen'),
      it('', '', 'Shio ramen', '', 'Ramen', 'no', 'no', 'July and September 2026.', 'shio_ramen'),
      it('', '', 'Beef tendon ramen', '', 'Ramen', 'no', 'no', 'September–October 2026.', 'suji_ramen'),
      it('', '', 'Mazesoba', '', 'Ramen', 'no', 'no', 'Choice of size (September 2026).', 'mazesoba'),
    ] }, {
    cuisine: '背脂の豚骨醤油で濃いのに後味の軽いスープ、硬さを選べる細いストレート麺、薄いチャーシューとねぎ (2026年7月〜9月)・赤く辛い大宝ラーメン、辛さは控えめ・中・辛口 (2026年7月〜11月)・柚子の塩ラーメン (2026年7月・9月)・チャーシュー麺、牛すじラーメン (2026年9月〜10月)・量を選べるまぜそば、卓上のにんにく (2026年7月・9月)・餃子、チャーシューおにぎり、ご飯のセット、瓶ビール (2026年の口コミ)',
    neighborhood: '五条烏丸。五条駅から134m',
    gf_detail: 'グルテンフリーではない。小麦のラーメンとまぜそば、餃子 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。背脂の豚骨醤油、チャーシュー、牛すじ (2026年の口コミ)。',
    notes: '[ラーメン・五条烏丸、11時から23時まで通し] 通しで開く町のラーメン店。背脂の豚骨醤油に細いストレート麺、辛さを3段階から選ぶ赤い大宝ラーメン、柚子の塩、牛すじラーメン、まぜそば、餃子やご飯のセットも。昼は早く、夜は外国人の客で賑わう。PayPay か現金。',
  });
}

// ================================================================ 夷川 鮨 すずか
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26028442/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_ebisugawa_sushi_suzuka', name: '夷川 鮨 すずか (Ebisugawa Sushi Suzuka)', category: 'OMNI',
    lat: 35.015065, lng: 135.764344, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edomae omakase with red-vinegar rice, marinated and soy-brushed fish, anago with sauce and a kanpyo roll (2024–25 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish omakase with chawanmushi, a soup and red miso soup (2024–26 reviews).',
    hours_raw: '17:30–22:00; closed irregularly (Tabelog). Reservations accepted; a booking two weeks ahead is wise, though Friday seats were free in March 2024 (Tabelog; 2024–26 reviews). Cards accepted (Tabelog). Omakase only — Tabelog lists a fixed course at ¥12,000 before tax from February 2019; reviewers paid about ¥17,000 (December 2023) and ¥20,000–29,999 (2025–26). 8 counter seats (Tabelog). Non-smoking (Tabelog). Ground floor of FORUM夷川 on Ebisugawa, among furniture shops; 7 min from Marutamachi Stn (Tabelog; December 2023). Opened 29 November 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ebisugawa furniture street — 7 min from Marutamachi Stn',
    cuisine: 'Edomae omakase at an 8-seat counter: red-vinegar rice in small portions, aged and marinated fish (2023–26 reviews) · a starter, sashimi and chawanmushi (plum-flavoured in March 2024), then about 10 nigiri with a soup between, red miso soup and dessert (May 2026) · nigiri such as kinmedai and nodoguro, aged tuna and toro, swordtip squid, kohada, akagai, shima-aji, uni, anago; shinko in summer (2023–25 reviews) · lotus-root manju in broth, simmered firefly squid, hojicha pudding (2024 reviews) · extra orders such as negitoro or a kanpyo roll (2025) · sake and wine pairings, Sapporo Lager and Heartland, non-alcoholic drinks (May 2026)',
    website: 'http://sushi-suzuka.jp', gmaps: gm('夷川 鮨 すずか'), menu_url: TB,
    notes: '[Edomae sushi · Ebisugawa, a couple’s eight-seat counter] A brass door among Ebisugawa’s furniture shops opens on a calm counter where a chef trained in the Kanto region serves aged, red-vinegar Edomae nigiri — kinmedai, nodoguro, aged tuna, swordtip squid — with warm hospitality from the chef and the proprietress. One omakase in the evening, about ¥17,000–25,000.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed), trained in the Kanto region (September 2017); runs the shop with the proprietress (2023–25 reviews)'], origin: null,
      background: 'Per Tabelog: an Edomae sushi counter opened 29 November 2016. A September 2017 review says the head chef trained in the Kanto region and sourced fish from Tsukiji; a May 2025 review calls it Edomae sushi by a chef who came back to Kyoto from Tsukiji, run by a couple.',
      philosophy: null, specialty: 'Edomae nigiri with aged fish.',
      anecdotes: [
        { text: 'A December 2023 diner found the brass door intimidating but the room calm, with glass as well as ceramic tableware.', source: R + 'B476470275/' },
        { text: 'An August 2024 regular wrote of the thick-cut tuna, a shima-aji with a secret, and squid cut and salted just so.', source: R + 'B491315291/' },
        { text: 'A July 2023 diner felt the gentle flow of the sushi reflected the personalities of the chef and the proprietress.', source: R + 'B468019175/' },
      ],
      japanese_sources_summary: '食べログ: 寿司、中京区俵屋町305 FORUM夷川 1F、丸太町駅から徒歩約7分、17:30〜22:00、不定休、予約可、カード可、カウンター8席、禁煙、おまかせ12,000円 (税別、2019年2月から)、2016年11月29日オープン。口コミ (2017年9月〜2026年5月、英語): 関東で修業した大将 (築地から京都へ)、夫婦で営む、赤酢のシャリ、熟成した魚、金目鯛、のどぐろ、まぐろ、剣先いか、小肌、うに、穴子、新子、梅の茶碗蒸し、蓮根饅頭、ほうじ茶プリン、握り約10貫と赤だし、約17,000円 (2023年12月)。',
      confidence: 'medium', sources: [TB, 'http://sushi-suzuka.jp', R + 'B293709000/', R + 'B464510992/', R + 'B468019175/', R + 'B476470275/', R + 'B481207305/', R + 'B487148604/', R + 'B491315291/', R + 'B499851784/', R + 'B502700824/', R + 'B506237539/', R + 'B512552743/', R + 'B528924829/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; one omakase at the counter, extra pieces on request. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区俵屋町305 FORUM夷川 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.015065, 135.764344); cross-checked: GSI 京都府京都市中京区俵屋町305番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B476470275/'],
    price_note: 'Tabelog lists ¥12,000 before tax (from February 2019); a December 2023 diner paid about ¥17,000.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥12,000', 'Course', 'ask', 'no', 'Before tax, per Tabelog (2019); about ¥17,000 in December 2023.', 'omakase'),
      it('', '', 'Extra nigiri (e.g. negitoro, kanpyo roll)', '', 'Extras', 'ask', 'no', '2025 reviews.', 'extra_nigiri'),
    ] }, {
    cuisine: 'カウンター8席の江戸前のおまかせ: 赤酢の小ぶりなシャリと熟成や漬けの魚 (2023〜2026年の口コミ)・先付、刺身、茶碗蒸し (2024年3月は梅)、握り約10貫と途中の椀、赤だしとデザート (2026年5月)・金目鯛、のどぐろ、熟成まぐろとトロ、剣先いか、小肌、赤貝、縞鯵、うに、穴子、夏は新子 (2023〜2025年の口コミ)・蓮根饅頭、蛍烏賊の煮物、ほうじ茶プリン (2024年の口コミ)・ねぎとろやかんぴょう巻きの追加 (2025年)・日本酒とワイン、サッポロ赤星、ハートランド、ノンアルコールも (2026年5月)',
    neighborhood: '夷川の家具屋街。丸太町駅から徒歩7分',
    gf_detail: '要確認。赤酢のシャリ、漬けや煮切りの魚、たれの穴子、かんぴょう巻きの江戸前のおまかせ (2024〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚のおまかせに茶碗蒸し、椀、赤だし (2024〜2026年の口コミ)。',
    notes: '[江戸前鮨・夷川、夫婦の8席のカウンター] 夷川の家具屋の並ぶ通りの真鍮の扉の奥、落ち着いたカウンター。関東で修業した大将が熟成と赤酢の江戸前の握り (金目鯛、のどぐろ、熟成まぐろ、剣先いか) を出し、女将とともに温かくもてなす。夜のおまかせ一つで、約17,000〜25,000円。',
  });
}

// ================================================================ 天空の立ち呑み とさか
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26027386/'; const R = TB + 'dtlrvwlst/';
  const A = day(['15:00', '23:00']); const W = day(['17:00', '22:00']); const S = day(['13:00', '23:00']);
  put({
    id: 'kyoto_tenkuu_tachinomi_tosaka', name: '天空の立ち呑み とさか (Tenkuu no Tachinomi Tosaka)', category: 'OMNI',
    lat: 34.987717, lng: 135.758346, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese, Western and Chinese plates — fries, shrimp mayo, mapo tofu, carpaccio, sashimi (2026 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Some vegetable dishes — mizunasu eggplant, mushroom carpaccio (with cheese), fresh yuba — but most plates use meat or fish (2026 reviews).',
    hours_raw: 'Mon, Tue, Thu, Fri 15:00–23:00; Wed 17:00–22:00; Sat–Sun 13:00–23:00 (Tabelog). Reservations accepted (Tabelog). No service charge (Tabelog, Japanese text: 「なし」; Tabelog’s English wrongly says one is added). Cards only for bills of ¥5,000 or more; no e-money or QR (Tabelog). 36 places, standing (Tabelog). Non-smoking with a smoking area (Tabelog). The menu is limited early in the day until the manager arrives (August 2026). 4th floor of a building on Muromachi south of Kizuyabashi, by Kyoto Stn’s Karasuma exit; 3 min from Kyoto Stn (Tabelog; August 2026).',
    hours: { 0: A, 1: A, 2: W, 3: A, 4: A, 5: S, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'North of Kyoto Stn, Karasuma exit — 3 min from Kyoto Stn',
    cuisine: 'A standing bar with Japanese, Western-leaning and Sichuan-style Chinese dishes, from sashimi to mapo tofu (Tabelog, shop text) · handwritten daily specials with seasonal ingredients and an Italian slant (August–September 2026) · fresh yuba, mizunasu eggplant, mushroom carpaccio with cheese, shrimp mayo, clam salad, fries, changja (2026 reviews) · a quick-drink set of ume liquor, sashimi and beer (August 2026) · beer — medium bottle ¥580 (April 2026), Sapporo Lager — Japanese sake, Black Nikka highball, oolong tea ¥400 (2026 reviews)',
    website: null, gmaps: gm('天空の立ち呑み とさか 京都駅'), menu_url: TB + 'dtlmenu/',
    notes: '[Standing bar · Kyoto Stn north, a fourth-floor counter with big windows] A hard-to-find standing bar a few minutes from the Karasuma exit, cooking well above standing-bar level — fresh yuba, mushroom carpaccio, shrimp mayo, Sichuan mapo tofu, seasonal specials — with beer, sake and highballs. Good for a drink before the Shinkansen. Cards only over ¥5,000.',
    chef_bio: { chef_name: null, roles: ['Owner/manager (unnamed) who cooks the full menu (August–September 2026)'], origin: null,
      background: 'Per Tabelog (shop text): a standing bar on the 4th floor of a building almost connected to Kyoto Station, serving authentic Western dishes, sashimi and Japanese dishes, and Sichuan mapo tofu and Chinese dishes. An August 2026 review notes the menu is limited until the manager arrives.',
      philosophy: 'Familiar ingredients prepared in ways you have not tried (Tabelog, shop text).', specialty: 'Seasonal specials; mapo tofu.',
      anecdotes: [
        { text: 'An August 2026 visitor before a Shinkansen found one young man running the place alone and handling everything well.', source: R + 'B533969574/' },
        { text: 'A September 2026 visitor was warmly welcomed by the owner and noticed drinks and dishes timed to go together.', source: R + 'B534951149/' },
        { text: 'An August 2026 visitor came early, when only a short menu is served before the manager arrives, and found it average for the price.', source: R + 'B533256933/' },
      ],
      japanese_sources_summary: '食べログ: 立ち飲み、下京区室町通木津屋橋下ル東塩小路町579-24 4F、京都駅から徒歩約3分、月火木金15:00〜23:00、水17:00〜22:00、土日13:00〜23:00、予約可、サービス料なし、カードは5,000円以上、立ち飲み36名、禁煙 (喫煙所あり)。店の紹介 (英訳): 本格的な洋食、刺身などの和食、四川の麻婆豆腐などの中華。口コミ (2026年4月〜10月、英語): 生湯葉、水茄子、きのこのカルパッチョ、海老マヨ、あさりのサラダ、フライドポテト、チャンジャ、季節のおすすめ、ちょい飲みセット、中瓶580円、ウーロン茶400円、店長が来るまでは限られたメニュー、大きな窓。',
      confidence: 'medium', sources: [TB, R + 'B384731809/', R + 'B527106803/', R + 'B529160597/', R + 'B529764832/', R + 'B530066093/', R + 'B531055775/', R + 'B533256933/', R + 'B533430466/', R + 'B533969574/', R + 'B534506292/', R + 'B534951149/', R + 'B535425269/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Stand at the counter or tables and order from the menu and the daily board; cards only over ¥5,000. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区室町通木津屋橋下ル東塩小路町579-24 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.987771, 135.758346); cross-checked: GSI 京都府京都市下京区東塩小路町579番地 (lot) 51m; offset 6 m south of the Tabelog point to keep clear of kyr_menya_roman (0.2 m, same lot); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527106803/'],
    price_note: 'Drink prices from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Beer, medium bottle', '¥580', 'Drinks', 'no', 'ask', 'April 2026.', 'beer'),
      it('', '', 'Oolong tea', '¥400', 'Drinks', '', 'vegan', 'April 2026.', 'oolong'),
      it('', '', 'Mapo tofu', '', 'Dishes', 'ask', 'no', 'Tabelog shop text.', 'mapo_tofu'),
      it('', '', 'Fresh yuba', '', 'Dishes', 'ask', 'ask', 'August 2026.', 'nama_yuba'),
    ] }, {
    cuisine: '本格的な洋食、刺身などの和食、四川の麻婆豆腐などの中華を出す立ち飲み (食べログの店の紹介)・手書きの季節のおすすめ、イタリアン寄りの料理も (2026年8月〜9月)・生湯葉、水茄子、チーズをのせたきのこのカルパッチョ、海老マヨ、あさりのサラダ、フライドポテト、チャンジャ (2026年の口コミ)・梅酒、刺身、ビールのちょい飲みセット (2026年8月)・ビール (中瓶580円、2026年4月)、サッポロ、日本酒、ブラックニッカのハイボール、ウーロン茶400円 (2026年の口コミ)',
    neighborhood: '京都駅の北、烏丸口。京都駅から徒歩3分',
    gf_detail: '要確認。フライドポテト、海老マヨ、麻婆豆腐、カルパッチョ、刺身などの和洋中 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。水茄子、きのこのカルパッチョ (チーズ入り)、生湯葉などの野菜の皿もあるが、多くは肉か魚 (2026年の口コミ)。',
    notes: '[立ち飲み・京都駅北、大きな窓の4階のカウンター] 烏丸口から数分、見つけにくいビルの4階の立ち飲み。生湯葉、きのこのカルパッチョ、海老マヨ、四川の麻婆豆腐、季節のおすすめと、立ち飲みの域を超えた料理をビール、日本酒、ハイボールと。新幹線の前の一杯にも。カードは5,000円以上。',
  });
}

// ================================================================ DE FRITES STAAN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040226/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '22:00']); const WE = day(['11:00', '22:00']);
  put({
    id: 'kyoto_de_frites_staan', name: 'DE FRITES STAAN', category: 'OMNI',
    lat: 35.004791, lng: 135.767297, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Thick-cut Belgian fries, double-fried to order (August 2026), with house mayonnaise dips; the frying oil and any shared fryer are not stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fries with house mayonnaise sauces, cheese and truffle toppings (2026 reviews); the frying fat is not stated.',
    hours_raw: 'Mon–Fri 11:30–22:00; Sat, Sun and holidays 11:00–22:00; closing days vary (Tabelog). No reservations (Tabelog); a queue at busy times, shorter for take-away (September and October 2026). CASHLESS — cash is not accepted; cards, e-money and QR (Tabelog; August–November 2026). Eating in requires one drink per person (July–November 2026). A few counter seats; non-smoking (Tabelog; October 2026). On Shinkyogoku; 3 min from Kyoto Kawaramachi Stn (Tabelog). Opened 10 September 2023 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinkyogoku — 3 min from Kyoto Kawaramachi Stn',
    cuisine: 'Belgian fries: thick, skin-on, pre-fried then fried again to order — crisp outside, fluffy inside (August and October 2026) · Classic Frites single ¥1,155 with one dip, such as Andalouse (house mayonnaise with tomato) or alioli; Gouda cheese topping ¥330; truffle mayonnaise (August–November 2026) · even a small portion feeds two (September–November 2026) · Stella Artois and other beers, ginger ale; no coffee (August–November 2026)',
    website: null, gmaps: gm('DE FRITES STAAN 京都'), menu_url: TB,
    notes: '[Belgian fries · Shinkyogoku, fries and a beer] A narrow Belgian frites bar off Shinkyogoku: thick skin-on fries double-fried to order (single ¥1,155) with house mayonnaise dips — Andalouse, alioli, truffle — and Gouda on top, with Stella Artois. A small serving is plenty for two. One drink each to eat in; cashless only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a beer bar opened 10 September 2023; Tabelog also lists DE FRITES STAAN HARAJUKU in Tokyo.',
      philosophy: null, specialty: 'Belgian frites with house mayonnaise.',
      anecdotes: [
        { text: 'A July 2026 visitor found the regular size generous and the tomato mayonnaise sharp and clearly homemade.', source: R + 'B532316513/' },
        { text: 'An October 2026 visitor came back for the fluffy potatoes, arriving five minutes before opening to be first in line.', source: R + 'B538410660/' },
        { text: 'A September 2026 visitor found the fries average and the alioli just okay.', source: R + 'B534913758/' },
      ],
      japanese_sources_summary: '食べログ: ビアバー、中京区中之町542-2、京都河原町駅から徒歩3分、平日11:30〜22:00、土日祝11:00〜22:00、不定休、予約不可、カード・電子マネー・QR 可、禁煙、2023年9月10日オープン。口コミ (2026年7月〜11月、英語): ベルギーのフリット、皮付きの太切りを二度揚げ、クラシックフリット シングル1,155円、アンダルーズ (自家製マヨとトマト)、アリオリ、トリュフマヨ、ゴーダチーズ330円、イートインは1ドリンク制、現金不可、少ない量でも2人分、ステラ・アルトワ、コーヒーはない。',
      confidence: 'medium', sources: [TB, R + 'B532197418/', R + 'B532316513/', R + 'B533259703/', R + 'B533333755/', R + 'B534031219/', R + 'B534913758/', R + 'B535870949/', R + 'B537717841/', R + 'B537988795/', R + 'B538410660/', R + 'B538505090/', R + 'B538706065/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter: size, dip and toppings; cashless; one drink each to eat in. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区中之町542-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004791, 135.767297); cross-checked: GSI 京都府京都市中京区中之町542番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534031219/'],
    price_note: 'Prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Classic Frites, single (with one dip)', '¥1,155', 'Frites', 'ask', 'ask', 'August 2026.', 'classic_frites'),
      it('', '', 'Gouda cheese topping', '¥330', 'Toppings', '', 'no', 'August 2026.', 'gouda'),
      it('', '', 'Truffle mayonnaise', '', 'Dips', '', 'no', 'October–November 2026.', 'truffle_mayo'),
      it('', '', 'Stella Artois', '', 'Drinks', 'no', 'ask', 'August 2026.', 'stella'),
    ] }, {
    cuisine: 'ベルギーのフリット: 皮付きの太切りを下揚げし、注文後に二度揚げ。外はかりっ、中はほくほく (2026年8月・10月)・クラシックフリット シングル1,155円にディップ一つ (アンダルーズ (自家製マヨとトマト)、アリオリなど)、ゴーダチーズ330円、トリュフマヨ (2026年8月〜11月)・少ない量でも2人分 (2026年9月〜11月)・ステラ・アルトワなどのビール、ジンジャーエール。コーヒーはない (2026年8月〜11月)',
    neighborhood: '新京極。京都河原町駅から徒歩3分',
    gf_detail: '要確認。注文後に二度揚げする太切りのベルギーのフリット (2026年8月) と自家製マヨのディップ。揚げ油やフライヤーの共用は書かれていない。',
    vegan_detail: '要確認。フリットに自家製マヨのソース、チーズやトリュフのトッピング (2026年の口コミ)。揚げ油の種類は書かれていない。',
    notes: '[ベルギーのフリット・新京極、ポテトとビール] 新京極の脇の細長いフリットのバー。皮付きの太いポテトを注文後に二度揚げ (シングル1,155円)、アンダルーズ、アリオリ、トリュフの自家製マヨとゴーダチーズを、ステラ・アルトワと。少なめでも2人分。店内は1人1ドリンク、現金不可。',
  });
}

save();
