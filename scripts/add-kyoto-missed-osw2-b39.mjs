// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 39.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   - アッサンブラージュ ハナレ Assemblages HANARE (26033223): existence not confirmed — the newest Tabelog review is April 2025 and its
//     own booking page (airrsv) says online reservations are suspended; nothing from 2026 found. (Sister of kyoto_assemblages_kakimoto.)
//   + らぁめん飛瀧 Raamen Hiryuu (late-night ramen counter near Marutamachi-Kawaramachi; since 2021)
//   + 炭焼とり幸 Sumiyaki Torikou (binchotan yakitori in a Sanjo machiya; since 2021) — single shop (torikou.net)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + page one ページワン (kakigori café and bar of the 133-year-old ice maker 森田氷室本店, Gion Shimogawara)
//   + Lobby Lounge Grand Jour (Hotel Granvia Kyoto’s lobby lounge) — the hotel’s own; its other restaurants (e.g. コトシエール, 京林泉)
//     are separate records, so drafted the same way. Hotel Granvia is a hotel brand, not a restaurant chain.
//   None of the four drafted is in data/kyoto.json: grep by id, name (飛瀧/Hiryuu, とり幸/Torikou, ページワン/page one, グランジュール/
//   Grand Jour) and address (大文字町234, 塩屋町47-2, 上弁天町435-4, ホテルグランヴィア京都 2F) found none.
//   Service charges: page one — a ¥300 table charge per person from 18:00 bar time (「BAR time(18:00)より､お一人様テーブルチャージ\300.-」);
//   Grand Jour 「サービス料15％」; none listed for 飛瀧 or とり幸.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-39');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26033223', 'existence not confirmed: newest Tabelog review April 2025; the shop’s online booking page says reservations are suspended; no 2026 source found (2026-11-06)');

// ================================================================ らぁめん飛瀧
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26036073/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '01:30']);
  put({
    id: 'kyoto_raamen_hiryuu', name: 'らぁめん飛瀧 (Raamen Hiryuu)', category: 'OMNI',
    lat: 35.01624513786524, lng: 135.7687696204697, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen, tsukemen and mazesoba noodles with soy-based tare (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, pork and shellfish broths (2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:30); night 18:00–01:30 (last order 01:00); closed irregularly — check its social media; New Year 2026–27: evening of 31 December only, closed 1–2 January, normal from the 3rd (Tabelog). Order by QR code or ticket (January and April 2026). Cash only per Tabelog. No service charge listed (Tabelog). 7 seats at a U-shaped counter in a small, hut-like room; non-smoking (Tabelog; October 2026). 381 m from Jingu-Marutamachi Stn (Tabelog). Opened 22 May 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Marutamachi, west of the Kamo — 381 m from Jingu-Marutamachi Stn',
    cuisine: 'Ramen with carefully chosen ingredients and minimal chemical seasoning — "healthy, delicious and fun" (Tabelog; January 2026) · chicken paitan shoyu with shellfish broth; "Thanks to Seafood" shoyu; chuka soba; chicken-and-pork paitan ¥1,000 (May 2026); spicy tsukemen; mazesoba "Flying Dragon" with condiments to change the flavour (2026 reviews)',
    website: null, gmaps: gm('らぁめん飛瀧 京都'), menu_url: TB,
    notes: "[Ramen · Marutamachi, a seven-seat counter open till 1:30] A tiny U-shaped ramen counter west of Jingu-Marutamachi that keeps going until 1:30 a.m. — a favourite after a night out. The shoyu bowls lean on shellfish broth; the 'Flying Dragon' mazesoba and spicy tsukemen have fans too. Bowls about ¥1,000; order by QR code. Cash only; closed irregularly.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Per Tabelog: opened 22 May 2021; ramen made with carefully selected ingredients. A January 2026 reviewer notes the shop’s stance on minimal chemical seasonings.',
      philosophy: 'Per Tabelog’s official introduction: healthy, delicious and fun.',
      specialty: 'Shellfish-broth shoyu ramen; Flying Dragon mazesoba.',
      anecdotes: [
        { text: 'An August 2026 visitor came straight from bar-hopping for the chuka soba.', source: R + 'B533600617/' },
        { text: 'A September 2026 diner ordered the Flying Dragon mazesoba and changed it up with the table condiments.', source: R + 'B535349732/' },
        { text: 'An October 2026 visitor found a cosy, hut-like room with a U-shaped counter and mostly overseas guests.', source: R + 'B537881231/' },
      ],
      japanese_sources_summary: '食べログ: らぁめん飛瀧、ラーメン・そば・中華、中京区大文字町234、神宮丸太町駅から381m、11:30〜15:00 (L.O. 14:30)、18:00〜翌1:30 (L.O. 1:00)、不定休 (SNS で告知)、年末年始は31日の夜のみ・1月1〜2日休み・3日から通常、カード・電子マネー・QR 不可、カウンター7席、禁煙、2021年5月22日オープン、公式紹介: 健康で美味しく楽しい、こだわりの食材。口コミ (2026年、英語): 化学調味料を控えめに、QR コードで注文、貝出汁の鶏白湯醤油、「おかげさまで魚介」醤油、中華そば、鶏豚白湯1,000円、辛いつけ麺、まぜそば「飛瀧」、U字カウンター、海外からの客。',
      confidence: 'medium', sources: [TB, R + 'B521814472/', R + 'B523867927/', R + 'B525520380/', R + 'B526011758/', R + 'B527397889/', R + 'B531803314/', R + 'B533600617/', R + 'B535349732/', R + 'B535868340/', R + 'B537338936/', R + 'B537881231/', R + 'B538756810/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区大文字町234',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with 2026–27 New Year hours; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.016245, 135.76877); GSI matched 大文字町234 to a different 大文字町 1.9km away, so not lot-checked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527397889/', R + 'B535349732/'],
    price_note: 'From 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken-and-pork paitan ramen', '¥1,000', 'Ramen', 'no', 'no', 'May 2026.', 'toripai'),
      it('', '', 'Mazesoba "Flying Dragon"', '', 'Mazesoba', 'no', 'no', '', 'mazesoba'),
      it('', '', 'Chicken paitan shoyu with shellfish broth', '', 'Ramen', 'no', 'no', '', 'toripaitan_shoyu'),
    ] }, {
    cuisine: '素材にこだわり化学調味料を控えた「健康で美味しく楽しい」ラーメン (食べログ、2026年1月)・貝出汁の鶏白湯醤油、「おかげさまで魚介」醤油、中華そば、鶏豚白湯1,000円 (2026年5月)、辛いつけ麺、卓上の調味料で味を変えるまぜそば「飛瀧」(2026年の口コミ)',
    neighborhood: '丸太町、鴨川の西。神宮丸太町駅から381m',
    gf_detail: 'グルテンフリー不可。小麦のラーメン、つけ麺、まぜそばに醤油系のたれ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏、豚、貝のスープ (2026年の口コミ)。',
    notes: '[ラーメン・丸太町、深夜1時半までの7席のカウンター] 神宮丸太町の西の小さなU字カウンターのラーメン屋。深夜1時半まで開いていて、飲んだあとの一杯に。醤油は貝出汁がきいていて、まぜそば「飛瀧」や辛いつけ麺にもファンが多い。1杯1,000円ほど、注文は QR コードで。現金のみ、不定休。',
  });
}

// ================================================================ 炭焼とり幸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26036079/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://torikou.net/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_sumiyaki_torikou', name: '炭焼とり幸 (Sumiyaki Torikou)', category: 'OMNI',
    lat: 35.00848017786565, lng: 135.75456480040123, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori with salt or tare and fried chicken; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakitori house (official site).',
    hours_raw: '17:00–24:00 (last order 23:30), Monday–Saturday; closed Sunday and the 1st and 3rd Monday (Tabelog). Very busy — book or call ahead; walk-ins sometimes fit in late (2026 reviews). Bookings up to 12 people (official site). No service charge listed (Tabelog). 20 seats in a renovated machiya with a tsuboniwa courtyard garden; non-smoking; cards (VISA, Master, JCB, AMEX) (Tabelog; official site). On Sanjo-dori west of Karasuma, about 5 min from Karasuma-Oike Stn (official site; Tabelog). Opened 15 July 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-dori west of Karasuma — 5 min from Karasuma-Oike Stn',
    cuisine: 'Yakitori of morning-slaughtered brand chickens such as 京赤地どり and 丹波あじわいどり, grilled over Kishu binchotan, with house salt and tare (official site) · omakase of five skewers plus à la carte, e.g. heart, furisode, bonjiri, fundoshi, chicken skin, negima, chicken kara-age; cabbage with miso to start (2025–2026 reviews) · banquet courses (official site)',
    website: SITE, gmaps: gm('炭焼とり幸 三条'), menu_url: SITE,
    notes: "[Yakitori · Sanjo west of Karasuma, binchotan skewers in a machiya] A stylish yakitori house in a renovated townhouse with a little courtyard garden, grilling brand chickens like Kyo-akaji-dori over Kishu binchotan until midnight. Start with the omakase of five skewers, then add rarer cuts — furisode, fundoshi, heart. Good value and always busy, so call ahead. Closed Sunday and the 1st and 3rd Monday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Per the official site: a yakitori house facing Sanjo-dori in a renovated Kyoto machiya, using morning-slaughtered brand chickens such as 京赤地どり and 丹波あじわいどり, grilled over Kishu binchotan with a mellow roasted salt and house tare. Tabelog gives the opening as 15 July 2021.',
      philosophy: 'Per the official site: "今宵も幸せ焼き鳥時間" — another happy yakitori evening.',
      specialty: 'Binchotan yakitori omakase.',
      anecdotes: [
        { text: 'A March 2026 regular on a fifth visit was lucky to get a same-day booking.', source: R + 'B460484950/' },
        { text: 'An October 2026 visitor dropped in after a meeting, explained the time limit, and was squeezed in.', source: R + 'B537477260/' },
        { text: 'An August 2026 diner had tried for a while — it was always full, with a queue outside — before finally getting in.', source: R + 'B534251792/' },
      ],
      japanese_sources_summary: '公式サイト (torikou.net): 炭焼 とり幸 (すみやき とりこう)、三条通に面した京町家を改装した焼き鳥屋、京赤地どりや丹波あじわいどりなどのブランド鶏の朝びき、紀州備長炭、角のない焼き塩とタレ、予約は12名まで、今宵も幸せ焼き鳥時間。食べログ: 焼き鳥・居酒屋、中京区塩屋町47-2、烏丸御池駅から徒歩5分、月〜土17:00〜24:00 (L.O. 23:30)、日曜・第1第3月曜休み、20席、禁煙、カード可、2021年7月15日オープン、坪庭。口コミ (2025〜2026年、英語): いつも混む、おまかせ5本、ハツ、ふりそで、ぼんじり、ふんどし、皮、ねぎま、唐揚げ、キャベツの味噌。',
      confidence: 'medium', sources: [TB, SITE, R + 'B460484950/', R + 'B479965515/', R + 'B513222327/', R + 'B515382167/', R + 'B519920806/', R + 'B523687814/', R + 'B527107351/', R + 'B529533601/', R + 'B531987277/', R + 'B534251792/', R + 'B537477260/', R + 'B538083038/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; it fills every night.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区塩屋町47-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.00848, 135.754565); cross-checked: GSI 京都府京都市中京区塩屋町47番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519920806/', R + 'B531987277/'],
    price_note: 'Dishes from 2025–2026 reviews; no prices published.', last_checked: TODAY, items: [
      it('', '', 'Omakase of five skewers', '', 'Skewers', 'ask', 'no', '', 'omakase5'),
      it('', '', 'Furisode skewer', '', 'Skewers', 'ask', 'no', '', 'furisode'),
      it('', '', 'Chicken kara-age', '', 'Dishes', 'no', 'no', '', 'karaage'),
    ] }, {
    cuisine: '京赤地どりや丹波あじわいどりなど朝びきのブランド鶏を紀州備長炭で焼き、焼き塩とタレで (公式サイト)・おまかせ5本とアラカルト、たとえばハツ、ふりそで、ぼんじり、ふんどし、皮、ねぎま、唐揚げ。お通しはキャベツと味噌 (2025〜2026年の口コミ)・宴会コース (公式サイト)',
    neighborhood: '烏丸の西の三条通。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。塩やタレの焼き鳥、唐揚げ。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼き鳥の店 (公式サイト)。',
    notes: '[焼き鳥・三条烏丸の西、町家の備長炭の串] 坪庭のある京町家を改装したおしゃれな焼き鳥屋。京赤地どりなどのブランド鶏を紀州備長炭で深夜0時まで焼く。まずはおまかせ5本、それからふりそで、ふんどし、ハツなど珍しい部位を。手頃でいつも混むので電話を。日曜、第1・第3月曜休み。',
  });
}

// ================================================================ page one
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26020767/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.pageone-gion.com/pageone/index.html';
  const H = day(['13:00', '24:00']);
  put({
    id: 'kyoto_pageone_gion', name: 'page one (ページワン)', category: 'OMNI',
    lat: 35.00056843787832, lng: 135.7785804703045, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Shaved ice with fruit, milk and matcha syrups, plus bar food and cocktails; no gluten information is published (2024–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fruit syrups over ice, but several bowls use milk; nothing vegan is marked (2025 reviews).',
    hours_raw: '13:00–24:00 (last order 23:00); closed Wednesday (official site; Tabelog). From 18:00 "bar time": a ¥300 table charge per person (Tabelog’s Japanese original: 「BAR time(18:00)より､お一人様テーブルチャージ\\300.-」); reservations taken for bar time only (official site). JCB and AMEX; no e-money or QR (Tabelog). Counter and sofa seating; non-smoking (Tabelog). On Shimogawara-dori just south of Yasaka Shrine’s south gate, about 12 min from Gion-Shijo Stn (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Shimogawara — south of Yasaka Shrine',
    cuisine: 'Café and bar of 森田氷室本店, Kyoto’s oldest ice maker, serving kakigori all year in bowls hand-carved from blocks of ice (official site) · ice frozen slowly over 72 hours for clarity (official site) · e.g. Uji kintoki ¥1,500, Uji ¥1,400 by day (¥300 more at night), fresh strawberry ¥1,200, freshly squeezed orange, lemon, milk with fresh strawberry or green apple (2025 reviews) · cocktails from ¥900, draft beer ¥850 (August 2025)',
    website: SITE, gmaps: gm('page one 祇園下河原'), menu_url: TB,
    notes: "[Sweets & bar · Gion Shimogawara, kakigori in a bowl of ice] The café-bar of 森田氷室本店, Kyoto's oldest ice maker, just south of Yasaka Shrine. Its crystal-clear ice, frozen over 72 hours, is shaved into kakigori — Uji kintoki, fresh strawberry, squeezed orange — and served in bowls carved from the ice itself, all year round. From 18:00 it becomes a cocktail bar with a ¥300 table charge. Open till midnight; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Run by the fifth-generation brothers of 森田氷室本店 (official site); not named'], origin: null,
      background: 'Per the official site: 森田氷室本店, in its 133rd year and Kyoto’s oldest ice maker, freezes purified water for more than 72 hours for hard, clear ice; page one was started by the brothers of the fifth generation to add a new page to that history, serving ice in hand-carved ice bowls; featured on many TV programmes since 2013.',
      philosophy: 'Per the official site: good ice is enjoyed three times — with the eyes, the ears and the mouth.',
      specialty: 'Kakigori in a carved ice bowl.',
      anecdotes: [
        { text: 'A September 2024 passer-by stepped into what looked like a stylish bar and found it full of overseas visitors.', source: R + 'B493390156/' },
        { text: 'A September 2024 visitor noticed the ice in the ice bowl hardly melted over time.', source: R + 'B492489485/' },
        { text: 'An August 2025 guest during Obon walked straight in and found the ice-bowl portion bigger than it looked.', source: R + 'B511830846/' },
      ],
      japanese_sources_summary: '公式サイト (pageone-gion.com): PAGE ONE、カフェ＆ダイニングバー、京都祇園下河原、美味しい氷は目で耳で口で三度味わえる、不純物を取り除き72時間以上かけて凍らせる、森田氷室本店は133年目で京都最古参の氷屋、五代目の兄弟で立ち上げた店、氷塊を手作業で削った器、東山区下河原通八坂鳥居前下る上弁天町435-4、祇園四条駅から徒歩12分、13:00〜24:00 (L.O. 23:00)、水曜定休、Bar time のみ予約可、テレビ出演多数 (2013年〜)。食べログ: カフェ・サンド・かき氷、BAR time (18:00) からテーブルチャージ300円、カード (JCB・AMEX)。口コミ (2024〜2025年、英語): 氷の器、宇治金時1,500円、宇治1,400円 (夜は+300円)、生いちご1,200円、生搾りオレンジ、レモン、カクテル900円〜、生ビール850円、海外からの客。',
      confidence: 'medium', sources: [TB, SITE, R + 'B103441897/', R + 'B489870502/', R + 'B490149595/', R + 'B492489485/', R + 'B493390156/', R + 'B502801602/', R + 'B511768356/', R + 'B511830846/', R + 'B512482797/', R + 'B513058833/', R + 'B513378572/', R + 'B513927743/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas visitors; bar-time bookings only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区下河原通八坂鳥居前下ル上弁天町435-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; most recent review September 2025.' },
    pin_source: `Tabelog ${TB} (35.000568, 135.77858); cross-checked: GSI 京都府京都市東山区上弁天町435番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B490149595/', R + 'B513058833/'],
    price_note: 'Prices from August 2025 reviews; night prices are ¥300 higher.', last_checked: TODAY, items: [
      it('', '', 'Uji kintoki kakigori', '¥1,500', 'Kakigori', 'ask', 'ask', 'August 2025.', 'uji_kintoki'),
      it('', '', 'Uji (matcha) kakigori', '¥1,400', 'Kakigori', 'ask', 'ask', 'Day price; ¥1,600 at night.', 'uji'),
      it('', '', 'Fresh strawberry kakigori', '¥1,200', 'Kakigori', 'ask', 'ask', 'Day price.', 'ichigo'),
      it('', '', 'Cocktails', '¥900', 'Bar', '', '', 'From ¥900.', 'cocktails'),
    ] }, {
    cuisine: '京都最古参の氷屋、森田氷室本店のカフェ＆バー。氷塊から手で削り出した器で通年のかき氷 (公式サイト)・透明度のため72時間以上かけて凍らせた氷 (公式サイト)・例: 宇治金時1,500円、宇治は昼1,400円 (夜は300円増し)、生いちご1,200円、生搾りオレンジ、レモン、生いちごや青りんごのミルク (2025年の口コミ)・カクテル900円〜、生ビール850円 (2025年8月)',
    neighborhood: '祇園下河原、八坂神社の南',
    gf_detail: '要確認。果物、ミルク、抹茶の蜜のかき氷、バーの料理やカクテル。グルテンの情報は公開されていない (2024〜2025年の口コミ)。',
    vegan_detail: '要確認。果物の蜜のかき氷だが、ミルクを使うものも。ヴィーガンの表示はない (2025年の口コミ)。',
    notes: '[かき氷とバー・祇園下河原、氷の器のかき氷] 八坂神社のすぐ南、京都最古参の氷屋、森田氷室本店のカフェバー。72時間かけて凍らせた透き通った氷をかき氷にし、宇治金時、生いちご、生搾りオレンジを、氷そのものを削った器で一年中。18時からはカクテルバーでテーブルチャージ300円。深夜0時まで、水曜休み。',
  });
}

// ================================================================ Lobby Lounge Grand Jour (Hotel Granvia Kyoto)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26001957/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.granvia-kyoto.co.jp/restaurant/grandjour/';
  const H = day(['09:00', '20:00']);
  put({
    id: 'kyoto_grand_jour_granvia', name: 'ロビーラウンジ グランジュール (Lobby Lounge Grand Jour, Hotel Granvia Kyoto)', category: 'OMNI',
    lat: 34.98591, lng: 135.7589909301697, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cakes, sandwiches, omurice and parfaits; the lounge follows labelling for the eight specified allergens including wheat and asks guests to tell staff on the day (Tabelog).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Cakes and light meals with dairy and egg; nothing vegan is marked (Tabelog; reviews).',
    hours_raw: '9:00–20:00 daily (last order 19:30); open all year; extended hours at peak periods, e.g. 31 October–6 December 2026 (hotel site; Tabelog). No reservations (Tabelog). Service charge 15% (Tabelog’s Japanese original: 「サービス料15％」). Smart casual; men are asked not to wear sleeveless tops or sandals (Tabelog). 90–92 seats; cards and e-money (hotel site; Tabelog). On the 2nd floor of Hotel Granvia Kyoto inside JR Kyoto Station (central exit), with windows over the station concourse (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station, Hotel Granvia 2F',
    cuisine: 'Hotel lobby lounge of coffee, tea, cakes and light meals (Tabelog) · e.g. matcha Mont Blanc tart ¥1,400 and fruit roll cake ¥1,400, with coffee, tea or espresso +¥1,000 as a set (October 2026); mixed sandwich ¥1,900, iced tea ¥1,100, matcha or hōjicha kakigori ¥2,000 (September 2026); café au lait ¥1,200; omurice; a matcha, shiratama and azuki drink (2026 reviews)',
    website: SITE, gmaps: gm('ロビーラウンジ グランジュール ホテルグランヴィア京都'), menu_url: SITE,
    notes: "[Café · Kyoto Station, the Granvia's lobby lounge] The spacious lobby lounge of Hotel Granvia Kyoto, one floor above the station's central concourse — a calm place to wait for a train. Cakes such as the matcha Mont Blanc tart (about ¥1,400, ¥1,000 more with a drink), sandwiches, omurice and summer kakigori. No bookings; 15% service. Smart casual. Open daily 9:00–20:00.",
    chef_bio: { chef_name: null, roles: ['Hotel lounge of Hotel Granvia Kyoto; staff not named'], origin: null,
      background: 'Per Tabelog’s official introduction: a spacious, open lounge next to the lobby of Hotel Granvia Kyoto with a view of Kyoto Station through the glass. The hotel’s other restaurants (for example View & Dining Kotoshie-ru and 京林泉) are separate records.',
      philosophy: null,
      specialty: 'Cake sets; matcha sweets.',
      anecdotes: [
        { text: 'An October 2026 regular on a tenth visit found some cakes sold out by 15:00 and had the Mont Blanc and grape cake.', source: R + 'B491209309/' },
        { text: 'An April 2026 group of six arriving at 15:30 found it nearly full and waited briefly at the entrance.', source: R + 'B526910109/' },
        { text: 'A May 2026 visitor used it to wait for the Shinkansen, watching the concourse below.', source: R + 'B529258589/' },
      ],
      japanese_sources_summary: 'ホテルグランヴィア京都 公式サイト: ロビーラウンジ グランジュール、90席、10月31日〜12月6日は営業時間拡大。食べログ: カフェ・バー・ケーキ、下京区烏丸通塩小路下ル JR京都駅中央口 ホテルグランヴィア京都2F、京都駅から73m、9:00〜20:00 (L.O. 19:30)、年中無休、特定原材料8品目のアレルギー表示 (当日申し出)、スマートカジュアル (男性のノースリーブ・サンダルは不可)、予約不可、各種割引対象外、サービス料15%、92席、カード・電子マネー可。公式紹介: ロビーに面した開放的なラウンジ、ガラス越しに京都駅。口コミ (2026年、英語): 抹茶モンブランタルト1,400円、フルーツロールケーキ1,400円、ドリンク+1,000円、ミックスサンド1,900円、アイスティー1,100円、抹茶・ほうじ茶のかき氷2,000円、カフェオレ1,200円、オムライス。',
      confidence: 'medium', sources: [TB, SITE, R + 'B473661536/', R + 'B491209309/', R + 'B525864972/', R + 'B526910109/', R + 'B529258589/', R + 'B531548555/', R + 'B533432298/', R + 'B533986983/', R + 'B535960823/', R + 'B536214786/', R + 'B536464914/', R + 'B536624958/'] },
    cultural_comfort: { level: 'english', note: 'International hotel lounge in Kyoto Station; no bookings.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'The lounge follows labelling for the eight specified allergens (egg, milk, wheat, buckwheat, peanut, shrimp, crab, walnut) and asks guests to say on the day.', source: TB, verified: TODAY }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通塩小路下ル JR京都駅中央口 ホテルグランヴィア京都 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Hotel website (hours notice for October–December 2026) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.985867, 135.758991); cross-checked: GSI 京都府京都市下京区東塩小路町901番地 (lot, Kyoto Station building) 90m; the Tabelog point is identical to kyoto_kotoshieru_granvia (same hotel, 15F), so moved about 5m north to keep the pins apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B491209309/', R + 'B536214786/'],
    price_note: 'Prices from September–October 2026 reviews (service charge extra).', last_checked: TODAY, items: [
      it('', '', 'Matcha Mont Blanc tart', '¥1,400', 'Cakes', 'no', 'no', 'Drink set +¥1,000.', 'matcha_montblanc'),
      it('', '', 'Mixed sandwich', '¥1,900', 'Light meals', 'no', 'no', '', 'mixed_sandwich'),
      it('', '', 'Matcha or hōjicha kakigori', '¥2,000', 'Sweets', 'ask', 'ask', 'Summer.', 'kakigori'),
      it('', '', 'Café au lait', '¥1,200', 'Drinks', '', 'no', '', 'cafe_au_lait'),
    ] }, {
    cuisine: 'コーヒー、紅茶、ケーキ、軽食のホテルのロビーラウンジ (食べログ)・例: 抹茶モンブランタルト1,400円、フルーツロールケーキ1,400円、コーヒー・紅茶・エスプレッソのセットは+1,000円 (2026年10月)、ミックスサンド1,900円、アイスティー1,100円、抹茶やほうじ茶のかき氷2,000円 (2026年9月)、カフェオレ1,200円、オムライス、抹茶と白玉と小豆のドリンク (2026年の口コミ)',
    neighborhood: '京都駅、ホテルグランヴィア京都2階',
    gf_detail: '要確認。ケーキ、サンドイッチ、オムライス、パフェ。小麦を含む特定原材料8品目のアレルギー表示があり、当日スタッフに申し出るよう案内している (食べログ)。',
    vegan_detail: '要確認。乳製品や卵を使うケーキと軽食で、ヴィーガンの表示はない (食べログ、口コミ)。',
    notes: '[カフェ・京都駅、グランヴィアのロビーラウンジ] 京都駅の中央コンコースの一つ上、ホテルグランヴィア京都の広いロビーラウンジ。電車を待つ間の静かな場所に。抹茶モンブランタルト (1,400円ほど、ドリンク付きは+1,000円) などのケーキ、サンドイッチ、オムライス、夏はかき氷。予約不可、サービス料15%。スマートカジュアルで。毎日9時から20時。',
  });
}

save();
