// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 16.
//   + 寿しや傳 Sushi Ya Tsutau (8-seat sushi counter by Higashi-Yodogawa, owner 土屋 泰輔, opened 2024)
//   + 赤身肉ステーキダイナー アカウシ Akaminiku Steak Diner Akaushi (Tosa Akaushi lean-beef steak diner; same building as Tsutau)
//   + 人類みな麺類 Jinrui Mina Menrui (the group's original ramen shop, 2012; Tabelog Ramen 100 every year 2017–2025)
//   + ラーメンつけ麺 笑福 大阪西中島店 Ramen Tsukemen Shofuku (Jiro-style ramen topped with katsuobushi)
//   Lane check: every id above is even. Taken in queue order (nearest first); no skips this batch.
//   Chain check and sister concepts:
//   - Jinrui Mina Menrui: the group's own ramen concept, main shop. Its other concepts in data (osaka_menya_jinrui_no_takarabune,
//     osaka_jinrui_mina_uchi_no_ramen, osaka_jinrui_mina_karasa_ga_subete_abeno_hoop, osaka_jinrui_mina_menrui_tsukemen_nishinakajima)
//     are different brands or formats, so not same-concept branches (Greg, 2026-11-02). Drafted as its own shop.
//   - Shofuku: a Nishinakajima shop and an Umeda shop (Osaka Ekimae Dai-3 Building B2, per a January 2024 article found by web
//     search 2026-11-02); a Nishi-Honmachi shop shows as closed on Retty. At most three = small group, kept. Neither other shop is
//     in data or in the osaka-kita crawl. Website shoufuku.fu-koku.com did not respond (2026-11-02).
//   - Tsutau and Akaushi name no other shop; Akaushi's own site calls it the only Tosa Akaushi specialist in Osaka.
//   None of the four is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Tsutau: category MOM_AND_POP because the shop's own site signs the greeting "店主 土屋 泰輔" (no romaji, so the name stays in kanji
//   with name:true, en:null). mom_and_pop false: a February 2026 review mentions part-time staff.
//   Ramen blocks: Jinrui Mina Menrui and Shofuku are not described on all six dimensions (no oiliness for either), so none.
//   open_late per Greg's 2026-11-02 ruling (true when the shop closes after 22:00).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 寿しや傳
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27143084/'; const R = TB + 'dtlrvwlst/'; const W = 'https://sushiya-tsutau.jp/';
  const D = day(['18:00', '22:45']);
  put({
    id: 'osaka_sushiya_tsutau_higashimikuni', name: '寿しや傳 (Sushi Ya Tsutau)', category: 'MOM_AND_POP',
    lat: 34.74067, lng: 135.502383, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Omakase sushi and small dishes, including simmered anago.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood omakase.',
    hours_raw: 'Mon–Sat two seatings, 18:00–20:15 (last order 20:00) and 20:30–22:45 (last order 22:30); closed Sunday (Tabelog). The shop site gives 18:00–23:30 (last order 23:00), closed Sunday and some other days. Reservation only; same-day booking sometimes possible (Tabelog; August 2026). Courses: ¥11,000 (8 nigiri, 3 small dishes, soup, dessert; 4 guests a seating, may be at a table), ¥16,500 (9 nigiri, 6 dishes) and ¥22,000 (10 nigiri, 6 dishes) (Tabelog; shop site). Cards, e-money and QR accepted (Tabelog). 8 seats: a sunken counter and two tables for four, shoes off; non-smoking, smoking area outside (Tabelog; March 2026). Opened 4 July 2024 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '東三国1-1-18 — 3 min from the west exit of JR Higashi-Yodogawa Stn, 5 min from Higashi-Mikuni Stn, 10 min from Shin-Osaka north exit (Tabelog); same building as osaka_akaushi_steak_diner_higashimikuni',
    cuisine: 'Omakase from a young chef (2026) · courses ¥11,000, ¥16,500, ¥22,000 (Tabelog; shop site) · rice with red vinegar, slightly firm, cooked in a gas pot, the blend and water adjusted to the day (March and August 2026) · nigiri: squid, lean tuna lightly marinated, mackerel, simmered clam, uni, simmered anago (February 2026); cherry salmon, shrimp (February 2026); triggerfish (March 2026); chu-toro (August 2026) · small dishes: octopus, clear soup (February 2026); grilled tachiuo (March 2026); grilled and steamed dishes, chawanmushi (August 2026) · extras: akami, shirako, kanpyo roll (March 2026) · drinks (shop site): draft beer ¥900 (small ¥600), Sapporo Lager or Super Dry ¥1,100, ROCOCO beer ¥2,200, Hakushu or Yamazaki ¥1,200, Yamazaki 12 ¥2,200, Sato shochu ¥700, chuhai and umeshu ¥700, sake from ¥600 a half-go, soft drinks ¥500',
    website: W, gmaps: gm('寿しや傳 東三国'), menu_url: W,
    notes: "[Sushi · Higashi-Yodogawa, a young chef's omakase at local prices] A calm 8-seat sushi room near Higashi-Yodogawa Station, opened in 2024 by a young chef who, reviewers say, trained three years at Sanshin and two at Ikegami (March 2026). Shoes come off at a heated sunken counter (March 2026). The rice is red-vinegar shari, slightly firm, cooked in a gas pot with the water adjusted to the weather (2026), under squid, lightly marinated lean tuna, mackerel, simmered clam, uni and anago (February 2026). Courses run ¥11,000 to ¥22,000, good value for the cooking (Tabelog; 2026). The chef explains each piece. Reservation only, two seatings a night; closed Sunday.",
    chef_bio: { chef_name: '土屋 泰輔', roles: ['Owner-chef (店主)'], origin: null, background: 'The shop site greeting, signed 店主 土屋 泰輔: training in many restaurants from the age of 22; a spell living abroad brought a new appreciation of Japanese hospitality and cooking, and a wish to share it with diners of every nationality; the chance to open in Higashimikuni led to Sushi Ya Tsutau. Reviewers: a young chef who trained three years at Sanshin and two at Ikegami (March 2026); keen on sourcing, ageing and knife work (February 2026); short of part-time staff one night (February 2026).', philosophy: '"もっと伝えたい。日本料理の素晴らしさを。" ("I want to share more of what is wonderful about Japanese cuisine.") — shop site.', specialty: 'Red-vinegar shari cooked in a gas pot; omakase courses.',
      anecdotes: [
        { text: '"After training for 3 years at Sanshin and 2 years at Ikegami, the young chef has opened this place." — March 2026, the omakase with akami, shirako and a kanpyo roll added.', source: R + 'B523856919/' },
        { text: '"The young chef is particular about the rice, carefully blending different types and adjusting the water amount based on the day\'s climate and conditions." — August 2026.', source: R + 'B534365956/' },
        { text: '"The counter seating felt like a horigotatsu (sunken kotatsu), with heated mats making it warm and cozy." — March 2026.', source: R + 'B524052439/' },
      ],
      japanese_sources_summary: '食べログ: 寿しや傳、寿司、大阪市淀川区東三国1-1-18、JR 東淀川駅西口から徒歩3分、東三国駅から徒歩5分、新大阪駅北口から徒歩10分、月〜土 18:00〜20:15 (L.O. 20:00) と20:30〜22:45 (L.O. 22:30) の2部制、日休み、完全予約制、コースは11,000円 (握り8貫、一品3品、汁物、甘味、1回4名まで)、16,500円 (握り9貫、一品6品)、22,000円 (握り10貫、一品6品)、カード・電子マネー・QR 可、8席、禁煙 (外に喫煙所)、掘りごたつ、2024年7月4日オープン。店のサイト: 店主 土屋 泰輔、22歳から修行、海外生活で日本料理の素晴らしさに改めて気づき、国籍を問わず伝えたい、18時〜23時30分 (L.O. 23時)、日曜休み、不定休あり、生ビール900円、白州・山崎1,200円など。口コミ (2026年2〜8月): 若い大将、Sanshin で3年、Ikegami で2年修業、赤酢のシャリでやや硬め、ガス釜で炊き、天気で水を変える、イカ、漬けの赤身、サバ、煮た貝、ウニ、穴子、サクラマス、エビ、カワハギ、中トロ、太刀魚の焼き物、茶碗蒸し、ひとつずつ説明してくれる、この辺りでは手頃。',
      confidence: 'medium', sources: [TB, W, R + 'B516189438/', R + 'B522560614/', R + 'B523572058/', R + 'B523856919/', R + 'B524052439/', R + 'B524473865/', R + 'B526088647/', R + 'B529577067/', R + 'B534365956/', R + 'B535447669/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only, two seatings; shoes off at the counter. The shop site has an English link and the owner writes of welcoming guests of every nationality.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国1-1-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and shop site; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国一丁目1番18号 (go) 13m; same building as osaka_akaushi_steak_diner_higashimikuni, pins about 5 m apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [W, TB],
    price_note: 'Course and drink prices from the shop site and Tabelog, read 2026-11-02.', last_checked: TODAY, items: [
      it('', '', 'Course: 8 nigiri, 3 small dishes, soup, dessert', '¥11,000', 'Courses', 'ask', 'no', 'Shop site; Tabelog.', 'course_11000'),
      it('', '', 'Course: 9 nigiri, 6 small dishes, soup, dessert', '¥16,500', 'Courses', 'ask', 'no', 'Shop site; Tabelog.', 'course_16500'),
      it('', '', 'Course: 10 nigiri, 6 small dishes, soup, dessert', '¥22,000', 'Courses', 'ask', 'no', 'Shop site; Tabelog.', 'course_22000'),
      it('', '', 'Draft beer', '¥900', 'Drinks', 'no', 'ask', 'Shop site.', 'draft_beer'),
    ] }, {
    cuisine: '若い大将のおまかせ (2026年)・コースは11,000円、16,500円、22,000円 (食べログ。店のサイト)・シャリは赤酢でやや硬め。ガス釜で炊き、米の合わせと水をその日に合わせる (2026年3月と8月)・にぎり: イカ、軽く漬けた赤身、サバ、煮た貝、ウニ、煮穴子 (2026年2月)。サクラマス、エビ (2026年2月)。カワハギ (2026年3月)。中トロ (2026年8月)・一品: タコ、お吸い物 (2026年2月)。太刀魚の焼き物 (2026年3月)。焼き物、蒸し物、茶碗蒸し (2026年8月)・追加: 赤身、白子、かんぴょう巻き (2026年3月)・飲み物 (店のサイト): 生ビール900円 (小600円)、中瓶 (サッポロラガー、スーパードライ) 1,100円、ROCOCO 2,200円、白州・山崎1,200円、山崎12年2,200円、佐藤 (麦・芋) 700円、酎ハイと梅酒700円、日本酒は半合600円から、ソフトドリンク500円',
    neighborhood: '東三国1-1-18。JR 東淀川駅西口から徒歩3分、東三国駅から徒歩5分、新大阪駅北口から徒歩10分 (食べログ)。アカウシと同じ建物',
    gf_detail: '要確認。グルテンの情報なし。おまかせの寿司と一品で、煮穴子もある。',
    vegan_detail: 'ヴィーガンではありません。魚介のおまかせ。',
    notes: '[寿司・東淀川、若い大将のおまかせを町の値段で] 東淀川駅の近くの落ち着いた8席の寿司屋。2024年に開いた若い大将は、口コミによると Sanshin で3年、Ikegami で2年修業 (2026年3月)。靴をぬいで、温かい掘りごたつのカウンターへ (2026年3月)。シャリは赤酢でやや硬め、ガス釜で炊き、天気で水を変える (2026年)。ネタはイカ、軽く漬けた赤身、サバ、煮た貝、ウニ、穴子 (2026年2月)。コースは11,000円から22,000円で、仕事を思えば手頃 (食べログ。2026年)。大将がひとつずつ説明してくれる。完全予約制で、夜は2部制。日曜休み。',
  });
}

// ================================================================ 赤身肉ステーキダイナー アカウシ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27126908/'; const R = TB + 'dtlrvwlst/'; const W = 'https://steak-akaushi.com';
  const D = day(['18:00', '23:00']);
  put({
    id: 'osaka_akaushi_steak_diner_higashimikuni', name: '赤身肉ステーキダイナー アカウシ (Akaminiku Steak Diner Akaushi)', category: 'OMNI',
    lat: 34.740647, lng: 135.502426, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The shop asks guests to tell it about allergies when booking (Tabelog). Courses include pasta, hamburg steak, meat sushi and sukiyaki (2025–2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef steak restaurant.',
    hours_raw: 'Mon and Wed–Sun 18:00–23:00 (last order 22:00); closed Tuesday; occasional extra closures (Tabelog; shop site). Reservations accepted; tell the shop about allergies in advance; tables limited to 3 hours (Tabelog). Seat charge ¥660 (Tabelog). Cards, e-money and PayPay accepted (Tabelog). 18 seats, counter in front of the grill and tables; non-smoking, smoking area on site; children welcome, children\'s cutlery (Tabelog; shop site). Takeout and delivery; online shop for the Bolognese (Tabelog; shop site). Opened 5 January 2022 (Tabelog).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '東三国1-1-18, ground floor of 高島マンション — 3 min from JR Higashi-Yodogawa Stn, 5 min from Higashi-Mikuni Stn (Tabelog); same building as osaka_sushiya_tsutau_higashimikuni',
    cuisine: 'Lean-beef steak diner using only Tosa Akaushi, the shop says the only Tosa Akaushi specialist in Osaka (shop site) · signature lava-grilled steak (shop site); sirloin cap steak (August 2025); steak with yamawasabi (September 2025) · courses with roast beef, grilled vegetables, meat sushi, hamburg steak, steak and sukiyaki (November 2025; February 2026); a trial course (August 2025); women\'s party plan (September 2025) · Bolognese of lean beef to finish, shown on TBS "Love it!" (shop site; 2025–2026) · à la carte: roast beef, sautéed mushrooms, pickles, pâté de campagne with edamame and nuts (July 2026) · wine; Nishijin yuzu beer (July 2026) · courses about ¥10,000–15,000 a head with drinks (2025–2026)',
    website: W, gmaps: gm('赤身肉ステーキダイナー アカウシ'), menu_url: null,
    notes: "[Steak · Higashi-Yodogawa, Tosa Akaushi lean beef on a lava grill] A calm 18-seat steak diner in a residential street near Higashi-Yodogawa Station that serves only Tosa Akaushi, a rare lean wagyu, grilled on lava stone in front of the counter (shop site). Diners praise beef that tastes rich without the fat, with grilled vegetables just as good (2025–2026). Take a course of roast beef, meat sushi, hamburg steak, steak and sukiyaki, and finish with the house Bolognese, which was shown on TV and sells by mail order (2025–2026). Expect ¥10,000–15,000 a head with wine. Book ahead; ¥660 seat charge; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null, background: 'Shop site: the only Tosa Akaushi specialist in Osaka, an 18-seat room for business dinners, anniversaries and couples, with a lava grill for the steaks; gold award at Grand Cuisine 2022; the Bolognese was featured on TBS "Love it!". Opened 5 January 2022 (Tabelog). Reviewers: friendly, approachable staff (February 2026); attentive recommendations (December 2025).', philosophy: 'Lean Tosa Akaushi beef that changes how people think of red meat (shop site).', specialty: 'Lava-grilled Tosa Akaushi steak; Bolognese.',
      anecdotes: [
        { text: '"It didn\'t rely on fat, yet it wasn\'t dry; instead, the flavor of the meat expanded with each bite, making it easy to finish without getting bored." — December 2025, steak.', source: R + 'B453428206/' },
        { text: '"I added a Hamburg steak to the mid-range course, and I was able to try unique dishes like meat sushi, grilled sukiyaki, and Bolognese." — February 2026.', source: R + 'B526823624/' },
        { text: '"The pâté was incredibly delicious, with a great texture from the edamame and nuts mixed in." — July 2026.', source: R + 'B445885745/' },
      ],
      japanese_sources_summary: '食べログ: 赤身肉ステーキダイナー アカウシ、ステーキ・居酒屋・焼肉、大阪市淀川区東三国1-1-18 高島マンション 1F、JR 東淀川駅から徒歩3分、東三国駅から徒歩5分、月・水〜日18:00〜23:00 (L.O. 22:00)、火曜休み、予約可、アレルギーは事前に、テーブルは3時間まで、チャージ660円、カード・電子マネー・PayPay 可、18席、禁煙 (喫煙所あり)、子ども可、テイクアウト、デリバリー、2022年1月5日オープン。店のサイト: 大阪で唯一の土佐あかうし専門店、溶岩焼きステーキ、名物「至福のボロネーゼ」は TBS「ラヴィット！」で紹介、通販も、グランドキュイジーヌ2022 金賞、18席、カウンターとテーブル。口コミ (2025年5月〜2026年7月): 赤身なのに脂に頼らずうまい、焼き野菜もおいしい、ローストビーフ、肉寿司、ハンバーグ、ステーキ、すき焼きのコース、sirloin cap、山わさび、ボロネーゼでしめ、パテ・ド・カンパーニュ、ワイン、ひとり約10,000〜15,000円、スタッフが気さく。',
      confidence: 'medium', sources: [TB, W, R + 'B445885745/', R + 'B453428206/', R + 'B511577822/', R + 'B514205466/', R + 'B516384634/', R + 'B523601563/', R + 'B523603140/', R + 'B526823624/', R + 'B529442562/', R + 'B531928575/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course or à la carte; book ahead. The shop site has a translate button.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国1-1-18 高島マンション 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and shop site; reviews dated July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国一丁目1番18号 (go) 11m; same building as osaka_sushiya_tsutau_higashimikuni, pins about 5 m apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [W, R + 'B526823624/', R + 'B511577822/'],
    price_note: 'No dish prices in reviews or on the shop top page; courses about ¥10,000–15,000 a head with drinks (2025–2026).', last_checked: TODAY, items: [
      it('', '', 'Lava-grilled Tosa Akaushi steak', '', 'Steak', 'ask', 'no', 'Shop site.', 'lava_steak'),
      it('', '', 'Bolognese', '', 'Pasta', 'no', 'no', 'Shop site; 2025–2026.', 'bolognese'),
      it('', '', 'Pâté de campagne', '', 'À la carte', 'ask', 'no', 'July 2026.', 'pate'),
      it('', '', 'Grilled vegetables', '', 'À la carte', 'ask', 'ask', 'September 2025; November 2025.', 'grilled_veg'),
    ] }, {
    cuisine: '土佐あかうしだけの赤身肉ステーキの店。大阪で唯一の土佐あかうし専門店と店はいう (店のサイト)・名物は溶岩焼きステーキ (店のサイト)。sirloin cap のステーキ (2025年8月)。山わさびでステーキ (2025年9月)・コースはローストビーフ、焼き野菜、肉寿司、ハンバーグ、ステーキ、すき焼き (2025年11月。2026年2月)。お試しコース (2025年8月)。女子会プラン (2025年9月)・しめは赤身肉のボロネーゼ、TBS「ラヴィット！」で紹介 (店のサイト。2025〜2026年)・一品: ローストビーフ、きのこのソテー、ピクルス、枝豆とナッツ入りのパテ・ド・カンパーニュ (2026年7月)・ワイン。Nishijin のゆずビール (2026年7月)・コースで飲んでひとり約10,000〜15,000円 (2025〜2026年)',
    neighborhood: '東三国1-1-18、高島マンションの1階。JR 東淀川駅から徒歩3分、東三国駅から徒歩5分 (食べログ)。寿しや傳と同じ建物',
    gf_detail: '要確認。グルテンの情報なし。アレルギーは予約のときに伝えてと店は書いている (食べログ)。コースにはパスタ、ハンバーグ、肉寿司、すき焼きもある (2025〜2026年)。',
    vegan_detail: 'ヴィーガンではありません。牛肉のステーキの店。',
    notes: '[ステーキ・東淀川、溶岩で焼く土佐あかうしの赤身] 東淀川駅の近くの住宅街の、落ち着いた18席のステーキの店。めずらしい赤身の和牛、土佐あかうしだけを、カウンターの前の溶岩グリルで焼く (店のサイト)。脂に頼らないのに濃い味の肉で、焼き野菜も同じくらいおいしいと評判 (2025〜2026年)。ローストビーフ、肉寿司、ハンバーグ、ステーキ、すき焼きのコースにして、しめはテレビで紹介されて通販もある名物のボロネーゼ (2025〜2026年)。ワインを飲んでひとり10,000〜15,000円ほど。予約を。チャージ660円。火曜休み。',
  });
}

// ================================================================ 人類みな麺類
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27064584/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_jinrui_mina_menrui_nishinakajima', name: '人類みな麺類 (Jinrui Mina Menrui)', category: 'OMNI',
    lat: 34.725462, lng: 135.49918, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a soy-sauce broth; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a shellfish and bonito broth with pork chashu.',
    hours_raw: 'Mon–Thu 10:00–03:00; Fri 10:00–04:00; Sat 9:00–04:00; Sun 9:00–03:00 (Tabelog). In October 2026 the shop was under renovation, done by the staff, and was running from a temporary shop about a minute\'s walk away; the work was expected to finish around December 2026 or later (October 2026). Lines most of the day: about 10 people at 11:00 and around 23:00, more than 20 after 22:30, few at 1:00–3:00 (October 2026). No reservations; Tabelog lists no cards, e-money or QR. Order by QR code through LINE (October 2026). 26 seats; non-smoking; children welcome (Tabelog). Opened 12 April 2012 (Tabelog).',
    hours: { 0: day(['10:00', '03:00']), 1: day(['10:00', '03:00']), 2: day(['10:00', '03:00']), 3: day(['10:00', '03:00']), 4: day(['10:00', '04:00']), 5: day(['09:00', '04:00']), 6: day(['09:00', '03:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: '西中島1-12-15 — beside Hankyu Minamikata Stn, 1 min from Nishinakajima-Minamigata Stn (Tabelog); during the 2026 renovation it runs from a temporary shop about a minute away (October 2026)',
    cuisine: 'Soy-sauce ramen on a shellfish (asari and shijimi) and bonito broth, with a light sweetness (October–November 2026) · bowls named in reviews: "Genten" (rich soy, bonito aroma) and "Macro" (the clam-based bowl finished with light soy sauce) (October 2026) · thick, straight, smooth noodles (October 2026) · toppings: thick-cut chashu, very tender, or thinner sliced chashu; soft-boiled egg; thick menma (October 2026) · Macro with sliced chashu ¥950; thick-cut chashu with egg ¥1,400, the most popular (October 2026) · extra noodles; gyoza (October 2026)',
    website: 'http://www.unchi-co.com/', gmaps: gm('人類みな麺類 西中島'), menu_url: null,
    notes: "[Ramen · Nishinakajima, the queue-famous shellfish-soy ramen by Minamikata] The original shop of an Osaka group, open since 2012 and in the Tabelog Ramen 100 every year from 2017 to 2025, with lines from late morning to late night (October 2026). The broth is soy sauce over clams and bonito, with a gentle sweetness that some love and some find too mild; the Macro, finished with light soy, is the clam-forward bowl, and the Genten the richer one (October 2026). Get the thick-cut chashu: slabs that fall apart, ¥1,400 with egg (October 2026). Mr. Children plays in the shop. In late 2026 the shop is being renovated and runs from a temporary site a minute away (October 2026).",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog beyond access; opened 12 April 2012; Tabelog Ramen WEST 100 2017–2022 and Ramen OSAKA 100 2023–2025 (Tabelog). Operator site unchi-co.com (Tabelog). The staff play Mr. Children live recordings (October–November 2026) and were doing the renovation in-house in October 2026; a café-bar a minute away gives half off with a same-day ramen receipt (October 2026).', philosophy: null, specialty: 'Ramen Macro; thick-cut chashu.',
      anecdotes: [
        { text: '"This is the most popular clam-based ramen. It captures the umami of clams like asari and shijimi, finished lightly with a light soy sauce." — October 2026, Macro with sliced chashu for JPY 950.', source: R + 'B538393574/' },
        { text: '"I didn\'t want to wait in line, so I visited at 3 AM." — October 2026, Ramen Genten at the temporary shop.', source: R + 'B537997838/' },
        { text: '"The broth is said to be made with shellfish stock, but it doesn\'t have a strong shellfish flavor." — November 2026, Macro with thick chashu and egg.', source: R + 'B538475235/' },
      ],
      japanese_sources_summary: '食べログ: 人類みな麺類、ラーメン、ラーメン WEST 百名店 2017〜2022、ラーメン OSAKA 百名店 2023〜2025、大阪市淀川区西中島1-12-15、阪急 南方駅から徒歩0分、西中島南方駅から徒歩1分、月〜木10:00〜翌3:00、金10:00〜翌4:00、土9:00〜翌4:00、日曜9:00〜翌3:00、予約不可、カード・電子マネー・QR 不可、26席、禁煙、子ども可、2012年4月12日オープン、運営 unchi-co.com。口コミ (2026年10〜11月): 改装中で1分ほどの仮店舗で営業、改装はスタッフが自分たちで、12月か来年に終わる予定、行列 (朝11時に約10人、夜22時半すぎに20人以上)、注文は LINE の QR、Mr.Children が流れる、あさりとしじみの貝と鰹節のだしの醤油ラーメン、やさしい甘み、「原点」は濃いめの醤油、「Macro」は薄口醤油で貝が前に、太めのストレート麺、厚切りチャーシューはとろとろ、薄切りも、半熟卵、太いメンマ、Macro の薄切りチャーシュー950円、厚切りチャーシューと卵1,400円がいちばん人気、替え玉、餃子、近くのカフェバーはレシートで半額、甘みが合わないという声も。',
      confidence: 'medium', sources: [TB, R + 'B537919428/', R + 'B537997838/', R + 'B538262960/', R + 'B538266966/', R + 'B538285393/', R + 'B538326912/', R + 'B538372298/', R + 'B538393574/', R + 'B538475235/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue outside, then order by QR code through LINE. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島1-12-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated November 2026. Operating from a temporary shop about a minute away during renovation (October 2026); the pin is the listed address.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島一丁目12番15号 (go) 9m; the temporary shop used during the 2026 renovation is about a minute away and has no published address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538393574/', R + 'B537919428/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen Macro with sliced chashu', '¥950', 'Ramen', 'no', 'no', 'October 2026.', 'macro_sliced'),
      it('', '', 'Ramen with thick-cut chashu and egg', '¥1,400', 'Ramen', 'no', 'no', 'October 2026; the most popular.', 'atsugiri_tamago'),
      it('', '', 'Ramen Genten with sliced chashu', '', 'Ramen', 'no', 'no', 'October 2026.', 'genten_sliced'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'October 2026.', 'gyoza'),
    ] }, {
    cuisine: 'あさりとしじみの貝と鰹節のだしの醤油ラーメン。やさしい甘み (2026年10〜11月)・口コミに出てくる2種: 「原点」(濃いめの醤油、鰹節の香り) と「Macro」(薄口醤油で仕上げる貝のラーメン) (2026年10月)・太めのストレート麺で、つるつる (2026年10月)・トッピング: とろとろの厚切りチャーシューか薄切りチャーシュー、半熟卵、太いメンマ (2026年10月)・Macro の薄切りチャーシュー950円。厚切りチャーシューと卵1,400円がいちばん人気 (2026年10月)・替え玉、餃子 (2026年10月)',
    neighborhood: '西中島1-12-15。阪急 南方駅のすぐ横、西中島南方駅から徒歩1分 (食べログ)。2026年の改装中は1分ほどはなれた仮店舗で営業 (2026年10月)',
    gf_detail: 'グルテンフリーではありません。醤油のスープに小麦の麺。餃子。',
    vegan_detail: 'ヴィーガンではありません。貝と鰹節のスープに豚のチャーシュー。',
    notes: '[ラーメン・西中島、南方駅前の行列の貝と醤油のラーメン] 大阪のグループの最初の店で、2012年から。食べログの百名店に2017年から2025年まで毎年選ばれ、昼前から夜おそくまで行列 (2026年10月)。スープは貝と鰹節に醤油で、やさしい甘み。これが好きな人もいれば、物足りない人も。薄口醤油で仕上げる Macro は貝が前に出て、原点は濃いめ (2026年10月)。頼むなら厚切りチャーシュー: ほろほろの塊で、卵つき1,400円 (2026年10月)。店内には Mr.Children が流れる。2026年の終わりは改装中で、1分ほどの仮店舗で営業 (2026年10月)。',
  });
}

// ================================================================ ラーメンつけ麺 笑福 大阪西中島店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27045122/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '00:00']);
  put({
    id: 'osaka_shofuku_nishinakajima', name: 'ラーメンつけ麺 笑福 大阪西中島店 (Ramen Tsukemen Shofuku Oosaka Nishinakajima Ten)', category: 'OMNI',
    lat: 34.725582, lng: 135.500377, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles in a soy-seasoned pork broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork broth, pork slices, back fat and katsuobushi.',
    hours_raw: 'Daily 11:00–24:00, until sold out; open all year; hours may change (Tabelog). No reservations; Tabelog lists no cards, e-money or QR. Ticket machine, where the free extras are set too (2026). 12 counter seats; non-smoking; children welcome (Tabelog). Opened 30 November 2009 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: '西中島1-13-13, ground floor of 三信南方ビルII — 1 min from Hankyu Minamikata and Nishinakajima-Minamigata stations (Tabelog)',
    cuisine: 'Jiro-style ramen: choose the amount of noodles, vegetables, garlic, back fat and katsuobushi (May 2026) · regular ramen 200 g noodles with two slices of pork, ¥950 (June and October 2026); pork ramen ¥1,200 (August 2026); miso ramen (June and July 2026); smaller noodles come with a soft-boiled egg (September 2026) · vegetables mostly bean sprouts (June 2026); extra vegetables free up to a point (2026) · katsuobushi on top, unusual for Jiro style (August–October 2026); the extra-large "Katsuo Baka Mashi" was dropped by September 2026 · water in a large mug (August 2026)',
    website: null, gmaps: gm('ラーメンつけ麺 笑福 西中島'), menu_url: null,
    notes: "[Ramen · Nishinakajima, Jiro-style ramen with a heap of katsuobushi] A 12-seat counter by Minamikata, open since 2009, serving Jiro-style ramen: thick, firm noodles under a mound of bean sprouts and pork, with katsuobushi on top that adds a fishy punch you won't find at most Jiro-style shops (2026). Set your noodles, vegetables, garlic, back fat and bonito at the ticket machine; the regular bowl, 200 g of noodles and two slices of pork, is ¥950 (2026). Regulars say the taste and portion can depend on who is cooking (June 2026). Open daily to midnight, until sold out.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 30 November 2009 (Tabelog). A June 2026 diner: "The cheerful lady and the energetic gentleman manage the place well", adding that taste and portion can change with who is cooking. Web search (2026-11-02) found a Shofuku in Umeda (Osaka Ekimae Dai-3 Building B2, January 2024 article); a Nishi-Honmachi shop is listed as closed on Retty.', philosophy: null, specialty: 'Jiro-style ramen with katsuobushi.',
      anecdotes: [
        { text: '"At JPY 950, I think the cost performance is quite reasonable in this day and age." — June 2026, regular ramen, 200 g noodles.', source: R + 'B529495170/' },
        { text: '"I had the experience of trying Jiro-style ramen with bonito flakes for the first time. It surprisingly paired well and was delicious!" — August 2026, pork ramen for JPY 1,200.', source: R + 'B532926524/' },
        { text: '"There was an incredible amount of bean sprouts—just bean sprouts everywhere!" — June 2026.', source: R + 'B529429606/' },
      ],
      japanese_sources_summary: '食べログ: ラーメンつけ麺 笑福 大阪西中島店、ラーメン・つけ麺、大阪市淀川区西中島1-13-13 三信南方ビルII 1F、南方駅と西中島南方駅から徒歩1分、毎日11:00〜24:00 (売り切れまで)、無休、予約不可、カード・電子マネー・QR 不可、カウンター12席、禁煙、子ども可、2009年11月30日オープン。口コミ (2026年5〜10月): 二郎系、麺、野菜、にんにく、脂、かつお節の量を選べる、券売機でトッピングも、ラーメン (麺200g、豚2枚) 950円、豚ラーメン1,200円、味噌ラーメン、麺少なめで半熟卵、野菜はほぼもやし、かつお節のせはめずらしい、「Katsuo Baka Mashi」は2026年9月までになくなった、作る人で味と量が変わるという声、水は大きなジョッキで。',
      confidence: 'medium', sources: [TB, R + 'B507416294/', R + 'B528114006/', R + 'B528313478/', R + 'B529429606/', R + 'B529495170/', R + 'B531693891/', R + 'B532926524/', R + 'B533248275/', R + 'B534702271/', R + 'B537055435/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine with photo guides to the extras (August 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島1-13-13 三信南方ビルII １Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島一丁目13番13号 (go) 42m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529495170/', R + 'B532926524/', R + 'B537055435/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen, 200 g noodles, two slices of pork', '¥950', 'Ramen', 'no', 'no', 'June and October 2026.', 'ramen'),
      it('', '', 'Pork ramen', '¥1,200', 'Ramen', 'no', 'no', 'August 2026.', 'buta_ramen'),
      it('', '', 'Miso ramen', '', 'Ramen', 'no', 'no', 'June and July 2026.', 'miso_ramen'),
      it('', '', 'Extra vegetables, garlic, back fat, katsuobushi', '', 'Extras', 'no', 'no', '2026; free within limits.', 'call'),
    ] }, {
    cuisine: '二郎系ラーメン: 麺、野菜、にんにく、背脂、かつお節の量を選ぶ (2026年5月)・ラーメンは麺200gに豚2枚で950円 (2026年6月と10月)。豚ラーメン1,200円 (2026年8月)。味噌ラーメン (2026年6月と7月)。麺少なめには半熟卵 (2026年9月)・野菜はほぼもやし (2026年6月)。野菜増しはある程度まで無料 (2026年)・上にかつお節。二郎系ではめずらしい (2026年8〜10月)。大盛りの「Katsuo Baka Mashi」は2026年9月までになくなった・水は大きなジョッキで (2026年8月)',
    neighborhood: '西中島1-13-13、三信南方ビルIIの1階。阪急 南方駅と西中島南方駅から徒歩1分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。醤油味の豚のスープに太い小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。豚のスープ、豚、背脂、かつお節。',
    notes: '[ラーメン・西中島、かつお節を山盛りにした二郎系] 南方駅のそばのカウンター12席の店で、2009年から。二郎系のラーメンで、太くてかための麺に、もやしと豚の山。上にかつお節がのって、ほかの二郎系にはない魚のパンチ (2026年)。麺、野菜、にんにく、背脂、かつお節は券売機で選ぶ。麺200gに豚2枚のふつうのラーメンで950円 (2026年)。作る人で味と量が変わるという常連も (2026年6月)。毎日夜12時まで、売り切れまで。',
  });
}

save();
