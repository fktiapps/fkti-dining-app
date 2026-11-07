// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 44.
//   + とむて Tomte (30-year-old cake shop and tearoom run by an elderly couple, Nishinotoin Gojo)
//   + つるき餅本舗 七条店 Tsuruki Mochi Honpo Shichijo (grilled mitarashi dango by Sanjusangendo)
//   + 烏丸DUE Karasuma DUE (teppan-grilled vegetables and Italian plates, Sanjo Karasuma)
//   + 個室居酒屋 はんなり邸 京都駅前店 Hannari Tei Kyoto Ekimae (private-room izakaya, Kyoto and Hokuriku dishes)
//   - skip 26041570 天ぷらすし海鮮米福 四条烏丸店 (chain)
//   Same-name counts first, per brand or operator (2026-11-06): とむて — one. つるき餅本舗 — one on Tabelog (other Tsuruki are
//   unrelated soba and izakaya shops elsewhere). 烏丸DUE — one. はんなり邸 — Tabelog lists this shop and 全席個室 はんなり邸 八重洲店
//   in Tokyo; the operator is not named in the sources found — drafted and flagged. 米福 — Tabelog lists Komefuku shops at
//   Shamine Matsue, Kumamoto Stn, Kyoto Kiyamachi, Abeno, Namba Parks, Marunouchi, LINKS Umeda, Higashi-Ginza, Nishi-Umeda,
//   Yodoyabashi and this one: a chain, skipped.
//   Taken on 2026-11-06: `next core 200` (lane) gave とむて 26003236 and つるき餅 26007172; `next notable 200` (lane) gave
//   米福 26041570 (skip), 烏丸DUE 26006320 and はんなり邸 26041666. None is in data/kyoto.json: grep by name and address
//   (小柳町505, 西之門町561, 三条通烏丸西入ル 文椿ビルヂング, 東九条室町48 J'Sビル) found none.
//   Service charges: none listed on Tabelog for any of the four; はんなり邸 asks seat-only bookings for a cover charge, one
//   drink and two dishes each (Tabelog). No halal claims; no owner deaths in the sources.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-44');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26041570', 'chain: Tabelog lists Komefuku (米福) tempura and seafood shops at Shamine Matsue, Kumamoto Stn, Kyoto Kiyamachi, Abeno Rucias, Namba Parks, Marunouchi Tokia, LINKS Umeda, Higashi-Ginza, Nishi-Umeda and Yodoyabashi besides this Shijo Karasuma shop (https://tabelog.com/en/rstLst/?sw=%E7%B1%B3%E7%A6%8F).');

// ================================================================ とむて
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26003236/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '21:00']);
  put({
    id: 'kyoto_tomte_gojo', name: 'とむて (Tomte)', category: 'OMNI',
    lat: 34.995172, lng: 135.754866, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a cake shop — sponge shortcake, pound cake, tarts (2023–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cakes with cream, eggs and cheese (2023–26 reviews).',
    hours_raw: '10:00–21:00; closed Tuesday (Tabelog). Reservations accepted (Tabelog). Cards, e-money and QR (Tabelog). A cake with coffee or tea is the cake price plus ¥300 (Tabelog remarks; ¥400 in a March 2025 review). 13 seats: 5 at the counter, 8 at tables; take-away (Tabelog). Smoking allowed (Tabelog). Parking for 2 cars in front (Tabelog; March 2026). Set back from the road in a residential street on Nishinotoin south of Yamamomo; 3 min from the Nishinotoin Rokujo bus stop (Tabelog; January 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishinotoin Gojo, a residential street — 447 m from Gojo Stn',
    cuisine: 'A neighbourhood cake shop with a retro tearoom, in business over 30 years (July 2026) · shortcake with moist sponge (June 2023), banana pound cake (April 2026), tarts and cheesecake (September 2026) · daily sweets such as "Noir et Blanc" and a two-layer tea bavarois with jelly (July 2026) · cake with a drink for ¥300–400 more (Tabelog; March 2025)',
    website: 'https://cake-shop-414.business.site/?m=true', gmaps: gm('とむて ケーキ 西洞院'), menu_url: TB,
    notes: '[Cake shop and tearoom · Nishinotoin Gojo, a 30-year neighbourhood favourite] A small, old-fashioned cake shop in a residential lane near Gojo, run by an elderly couple for over 30 years: moist shortcake, banana pound cake, a tea bavarois, eaten in the retro tearoom with coffee for a few hundred yen more. Open until 21:00, handy when everywhere else has shut. Smoking allowed. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Run by an elderly couple (April 2026)'], origin: null,
      background: 'Per reviews: a cake shop in business for over 30 years (July 2026), run by an elderly couple (April 2026), with a retro tearoom popular with local women (April 2025).',
      philosophy: null, specialty: 'Shortcake; banana pound cake.',
      anecdotes: [
        { text: 'A July 2026 visitor, a former neighbour, found the same cakes still on sale and the owner’s familiar face behind the counter.', source: R + 'B531776843/' },
        { text: 'A March 2026 visitor craving cake late in the day found most places closed and this one open until 21:00.', source: R + 'B524545222/' },
        { text: 'An April 2025 driver finally visited after decades of curiosity, glad of the parking in front.', source: R + 'B506235556/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶店・ケーキ、下京区西洞院楊梅下ル小柳町505、西洞院六条バス停から徒歩3分、10:00〜21:00、火曜休み、予約可、カード・電子マネー・QR 可、ケーキに300円でコーヒーか紅茶のセット、13席 (カウンター5、テーブル8)、喫煙可、駐車場2台、テイクアウト。口コミ (2023年6月〜2026年9月、英語): 30年以上続く店、年配の夫婦が営む、しっとりしたスポンジのショートケーキ、バナナのパウンドケーキ、タルト、チーズケーキ、紅茶のババロア、レトロな喫茶室、夜9時まで開いている。',
      confidence: 'medium', sources: [TB, R + 'B227288546/', R + 'B466387582/', R + 'B484821860/', R + 'B502345357/', R + 'B502501089/', R + 'B506235556/', R + 'B506870249/', R + 'B521299906/', R + 'B522929669/', R + 'B524545222/', R + 'B531776843/', R + 'B537009501/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose from the showcase to eat in or take away; smoking is allowed inside. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区西洞院楊梅下ル小柳町505',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.995172, 135.754866); cross-checked: GSI 京都府京都市下京区小柳町505番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B502501089/'],
    price_note: 'Drink add-on +¥300 per Tabelog (+¥400 in March 2025); cake prices not found.', last_checked: TODAY, items: [
      it('', '', 'Shortcake', '', 'Cakes', 'no', 'no', 'June 2023.', 'shortcake'),
      it('', '', 'Banana pound cake', '', 'Cakes', 'no', 'no', 'April 2026.', 'banana_pound'),
      it('', '', 'Coffee or tea with a cake', '+¥300', 'Drinks', '', 'ask', 'Tabelog.', 'cake_set'),
    ] }, {
    cuisine: '30年以上続く、レトロな喫茶室のある町のケーキ屋 (2026年7月)・しっとりしたスポンジのショートケーキ (2023年6月)、バナナのパウンドケーキ (2026年4月)、タルトとチーズケーキ (2026年9月)・「ノワール・エ・ブラン」や紅茶のババロアとゼリーの二層の日替わりの菓子 (2026年7月)・ケーキに300〜400円で飲み物のセット (食べログ、2025年3月)',
    neighborhood: '西洞院五条、住宅街。五条駅から447m',
    gf_detail: 'グルテンフリーではない。ショートケーキ、パウンドケーキ、タルトのケーキ屋 (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。クリーム、卵、チーズのケーキ (2023〜2026年の口コミ)。',
    notes: '[ケーキと喫茶・西洞院五条、30年続く町の店] 五条近くの住宅街の小さな昔ながらのケーキ屋。年配の夫婦が30年以上営み、しっとりしたショートケーキ、バナナのパウンドケーキ、紅茶のババロアを、レトロな喫茶室で数百円の飲み物と。夜9時まで開いていて、ほかが閉まった後にも便利。喫煙可。火曜休み。',
  });
}

// ================================================================ つるき餅本舗 七条店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26007172/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '18:30']);
  put({
    id: 'kyoto_tsuruki_mochi_shichijo', name: 'つるき餅本舗 七条店 (Tsuruki Mochi Honpo Shichijo)', category: 'OMNI',
    lat: 34.989163, lng: 135.770365, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled rice-dumpling mitarashi dango with black-sugar syrup and kinako; dorayaki contains wheat (2024–25 reviews); no ingredient list.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, and the mitarashi dango is rice, black sugar and kinako (Tabelog, shop text), but the ice creams are not stated to be dairy-free.',
    hours_raw: '12:00–18:30, closed on some weekdays (Tabelog). No reservations (Tabelog). CASH ONLY — no cards, e-money or QR (Tabelog). 10 seats around one table; wheelchair accessible; non-smoking (Tabelog). Take-away from 2 sticks (Tabelog; February 2025). On Shichijo a minute west of Sanjusangendo — look for the mitarashi dango sign; 2 min from Keihan Shichijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shichijo by Sanjusangendo — 2 min from Shichijo Stn',
    cuisine: 'Kyoto mitarashi dango grilled to order — five small dumplings on a skewer with a black-sugar syrup from Hateruma and plenty of kinako, the Kyoto style; take-away 5 for ¥500, 1 for ¥100; in-store sets with Uji tea or matcha (Tabelog, shop text; 2024–25 reviews) · homemade Japanese-style ice cream, dorayaki ice cream (Tabelog; May 2024) · Kyo-zenzai with grilled mochi ¥650 (November 2025) · kakigori in summer (July 2024)',
    website: null, gmaps: gm('つるき餅本舗 七条店'), menu_url: TB,
    notes: '[Mitarashi dango · Shichijo by Sanjusangendo, grilled to order] A small dango shop a minute from Sanjusangendo, grilling Kyoto mitarashi dango over the fire, finished with black-sugar syrup and a snowfall of kinako — ¥100 a stick, or with Uji tea at the one big table. Zenzai in winter, kakigori in summer. Cash only; watch the kinako in the wind.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog (shop text): Kyoto mitarashi dango with black-sugar syrup from Hateruma and kinako, freshly grilled and sold by the skewer, with Uji tea sets in store and homemade Japanese-style ice cream.',
      philosophy: null, specialty: 'Mitarashi dango with kinako.',
      anecdotes: [
        { text: 'A February 2026 passer-by from Chishaku-in, drawn in by the smell, ate the dango by the Kamo River and warned that wind blows the kinako about.', source: R + 'B522334913/' },
        { text: 'A July 2024 visitor found the kakigori a bargain next to prices elsewhere in Kyoto.', source: R + 'B488827828/' },
        { text: 'A November 2025 visitor warmed up with the Kyo-zenzai of grilled mochi.', source: R + 'B517131235/' },
      ],
      japanese_sources_summary: '食べログ: 甘味処・和菓子、東山区七条通本町東入ル西之門町561、七条駅から徒歩2分、三十三間堂から徒歩1分、12:00〜18:30、平日に休みあり、予約不可、現金のみ、10席、禁煙、車椅子可、ベジタリアンメニューあり、テイクアウト。店の紹介 (英訳): 京のみたらし団子、Hateruma の黒糖の蜜ときな粉、焼きたて、持ち帰り5本500円・1本100円、宇治茶のセット、自家製の和風アイス。口コミ (2023年6月〜2026年2月、英語): 2本から持ち帰り可、抹茶のセット、どら焼きアイス、京ぜんざい650円、かき氷。',
      confidence: 'medium', sources: [TB, R + 'B20065762/', R + 'B466871965/', R + 'B483274770/', R + 'B483719011/', R + 'B488827828/', R + 'B494283478/', R + 'B497338422/', R + 'B508166995/', R + 'B517131235/', R + 'B517927351/', R + 'B518288896/', R + 'B522334913/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order dango by the stick at the counter; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区七条通本町東入ル西之門町561',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (34.989163, 135.770365); cross-checked: GSI 京都府京都市東山区西之門町561番地 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B517131235/'],
    price_note: 'Prices from the Tabelog shop text and a November 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Mitarashi dango (1 stick)', '¥100', 'Dango', 'ask', 'ask', 'Tabelog.', 'mitarashi_1'),
      it('', '', 'Mitarashi dango (5 sticks, take-away)', '¥500', 'Dango', 'ask', 'ask', 'Tabelog.', 'mitarashi_5'),
      it('', '', 'Kyo-zenzai', '¥650', 'Sweets', 'ask', 'ask', 'November 2025.', 'zenzai'),
      it('', '', 'Dorayaki ice cream', '', 'Sweets', 'no', 'no', 'May 2024.', 'dorayaki_ice'),
    ] }, {
    cuisine: '注文後に焼く京のみたらし団子。小さな団子5つの串に Hateruma の黒糖の蜜ときな粉たっぷりの京風。持ち帰り5本500円、1本100円。店内は宇治茶や抹茶のセット (食べログの店の紹介、2024〜2025年の口コミ)・自家製の和風アイス、どら焼きアイス (食べログ、2024年5月)・焼いた餅の京ぜんざい650円 (2025年11月)・夏はかき氷 (2024年7月)',
    neighborhood: '七条通、三十三間堂のそば。七条駅から徒歩2分',
    gf_detail: '要確認。黒糖の蜜ときな粉の焼き団子。どら焼きには小麦 (2024〜2025年の口コミ)。原材料の一覧はない。',
    vegan_detail: '要確認。食べログではベジタリアンメニューあり、みたらし団子は米、黒糖、きな粉 (食べログの店の紹介) だが、アイスに乳製品を使わないとは書かれていない。',
    notes: '[みたらし団子・三十三間堂そばの七条、注文後に焼く] 三十三間堂から1分の小さな団子屋。京のみたらし団子を焼き、黒糖の蜜ときな粉をたっぷり。1本100円、店内の大きなテーブルで宇治茶と。冬はぜんざい、夏はかき氷。現金のみ。風の日はきな粉に注意。',
  });
}

// ================================================================ 烏丸DUE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26006320/'; const R = TB + 'dtlrvwlst/';
  const OF = 'http://www.karasuma-due.com/';
  const H = day(['11:30', '14:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_karasuma_due', name: '烏丸DUE (Karasuma DUE)', category: 'OMNI',
    lat: 35.008836, lng: 135.7589, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan-grilled vegetables and meats alongside pasta, focaccia and omurice (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: grilled chicken, hamburg steak, omurice; vegetables are grilled on a shared teppan (2026 reviews).',
    hours_raw: 'Mon–Sat and holidays: lunch 11:30–14:00, dinner 18:00–23:00 (last order food 22:00, drinks 22:30); closed Sunday (Tabelog). Reservations accepted and advised in the evening (Tabelog; June 2026). Cards and PayPay, no e-money (Tabelog). 35 seats: a counter around the teppan, high tables by the entrance, sofa and table seats (Tabelog; June 2026). Non-smoking (Tabelog). Ground floor of the 文椿ビルヂング on Sanjo west of Karasuma; 2 min from Karasuma Oike Stn (Tabelog). The Tabelog address has no lot number.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo Karasuma, in the 文椿ビルヂング — 2 min from Karasuma Oike Stn',
    cuisine: 'Italian-leaning bar food with vegetables grilled on the teppan (June 2026) · the "Greedy Plate" lunch ¥1,300 — grilled chicken thigh with pink shibazuke tartar, a half oil pasta, roasted vegetables, salad, carrot or potato soup, focaccia and a drink (June–October 2026) · omurice and hamburg-steak plate lunch (August–September 2026) · a two-person lunch course with seasonal potage, four appetizers, grilled chicken or teppan hamburg steak (September 2026) · a big grilled-vegetable platter at dinner (August 2026) · homemade ginger ale, wine and cocktails (July 2026; Tabelog)',
    website: OF, gmaps: gm('烏丸DUE 三条'), menu_url: TB + 'dtlmenu/',
    notes: '[Teppan Italian · Sanjo Karasuma, vegetables off the griddle] A bar-bistro in the old 文椿ビルヂング on Sanjo with a counter around a teppan: the ¥1,300 "Greedy Plate" lunch of grilled chicken with shibazuke tartar, half pasta, roast vegetables, soup and a drink fills the room at noon, and evenings bring big platters of griddled vegetables with wine. One reviewer called the omurice the best of a lifetime. Closed Sunday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a bar, Italian and izakaya on the ground floor of the 文椿ビルヂング, with counter seats around a teppan. Reviews in 2026 describe a lunch crowd for the plate sets and vegetable-led dinners.',
      philosophy: null, specialty: 'Teppan-grilled vegetables; Greedy Plate lunch.',
      anecdotes: [
        { text: 'An October 2026 visitor came two days running for the Greedy Plate, hooked on the pink shibazuke tartar on the chicken.', source: R + 'B536912273/' },
        { text: 'A September 2026 lunch guest called the omurice the best of a lifetime.', source: R + 'B535871295/' },
        { text: 'A July 2026 diner discovered the soup was carrot, not corn, and liked the spicy homemade ginger ale.', source: R + 'B531495863/' },
      ],
      japanese_sources_summary: '食べログ: バル・イタリアン・居酒屋、中京区三条通烏丸西入ル 文椿ビルヂング 1F、烏丸御池駅から徒歩2分、月〜土・祝 昼11:30〜14:00・夜18:00〜23:00 (L.O. 料理22:00、ドリンク22:30)、日曜休み、予約可、カード・PayPay 可、35席、禁煙、飲み放題あり。口コミ (2026年6月〜10月、英語): 鉄板で焼く野菜、欲張りプレートのランチ1,300円 (鶏ももの柴漬けタルタル、ハーフのオイルパスタ、焼き野菜、サラダ、スープ、フォカッチャ、ドリンク)、オムライスとハンバーグのプレート、2人の昼のコース (季節のポタージュ、前菜4種、鶏か鉄板のハンバーグ)、夜の大きな焼き野菜、自家製ジンジャーエール、昼は満席。',
      confidence: 'medium', sources: [TB, OF, R + 'B471111995/', R + 'B531410694/', R + 'B531495863/', R + 'B533015744/', R + 'B533465505/', R + 'B534202807/', R + 'B535066241/', R + 'B535871295/', R + 'B536056332/', R + 'B536912273/', R + 'B537579452/', R + 'B538092076/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book for dinner; lunch plates are ordered at the table. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区三条通烏丸西入ル 文椿ビルヂング 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008836, 135.758900); the address has no town or lot number, so not GSI-checked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531410694/'],
    price_note: 'One lunch price from June 2026.', last_checked: TODAY, items: [
      it('', '', 'Greedy Plate lunch (with drink)', '¥1,300', 'Lunch', 'no', 'no', 'June 2026.', 'greedy_plate'),
      it('', '', 'Omurice and hamburg-steak plate', '', 'Lunch', 'ask', 'no', 'August 2026.', 'omurice_plate'),
      it('', '', 'Teppan-grilled vegetables', '', 'Dinner', 'ask', 'ask', 'June and August 2026.', 'grilled_veg'),
    ] }, {
    cuisine: '鉄板で焼く野菜とイタリア寄りのバルの料理 (2026年6月)・「欲張りプレート」のランチ1,300円: 鶏もも肉のグリルにピンクの柴漬けタルタル、ハーフのオイルパスタ、焼き野菜、サラダ、人参かじゃがいものスープ、フォカッチャ、ドリンク (2026年6月〜10月)・オムライスとハンバーグのプレートランチ (2026年8月〜9月)・季節のポタージュ、前菜4種、鶏か鉄板のハンバーグの2人の昼のコース (2026年9月)・夜は大きな焼き野菜の盛り合わせ (2026年8月)・自家製ジンジャーエール、ワイン、カクテル (2026年7月、食べログ)',
    neighborhood: '三条烏丸、文椿ビルヂング。烏丸御池駅から徒歩2分',
    gf_detail: '要確認。鉄板で焼く野菜と肉、パスタ、フォカッチャ、オムライス (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鶏のグリル、ハンバーグ、オムライス。野菜も共用の鉄板で焼く (2026年の口コミ)。',
    notes: '[鉄板のイタリアン・三条烏丸、鉄板で焼く野菜] 三条の文椿ビルヂングの、鉄板を囲むカウンターのあるバル。昼は鶏の柴漬けタルタル、ハーフパスタ、焼き野菜、スープ、ドリンク付きの1,300円の「欲張りプレート」で満席に。夜は大皿の鉄板焼き野菜をワインと。オムライスが人生一との声も。日曜休み。',
  });
}

// ================================================================ はんなり邸 京都駅前店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26041666/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '24:00']);
  put({
    id: 'kyoto_hannari_tei_ekimae', name: '個室居酒屋 はんなり邸 京都駅前店 (Hannari Tei Kyoto Ekimae)', category: 'OMNI',
    lat: 34.98391, lng: 135.758112, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Izakaya dishes including hegi soba, yatsuhashi and soy-marinated firefly squid (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, wagyu, duck, firefly squid and dashi dishes; yuba and tofu salads are part of a mixed menu (2026 reviews).',
    hours_raw: '16:00–24:00 daily (last order food 23:00, drinks 23:30) (Tabelog). Reservations accepted; 2-hour limit when busy; seat-only bookings are asked to order a cover charge, one drink and at least two dishes each; 15 minutes late without word counts as a no-show (Tabelog). Cards; no e-money or QR (Tabelog). 155 seats, all in private rooms for 2 to 30+ (Tabelog). Smoking allowed in the rooms (Tabelog; October–November 2026). 4th floor of J’Sビル, 1 min from the Hachijo side of Kyoto Stn (Tabelog; November 2026). Opened 8 August 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto Stn Hachijo side — 1 min from Kyoto Stn',
    cuisine: 'Kyoto dishes with Niigata and Hokuriku specialities, in private rooms (2026 reviews) · fresh yuba sashimi ¥869, firefly squid in soy ¥539, salted kombu with Manganji pepper ¥539, duck breast ¥2,189 (October 2026) · Kujo green onion and mizuna tofu salad, Black wagyu tataki, cream cheese cured in Saikyo miso (September 2026) · three obanzai, wagyu shabu-shabu (October 2026) · Niigata hegi soba to finish (September 2026) · matcha warabi mochi with ice cream, yatsuhashi (September 2026) · Kyoto sake and Niigata’s Hakkaisan; all-you-can-drink plans (October–November 2026)',
    website: null, gmaps: gm('個室居酒屋 はんなり邸 京都駅前店'), menu_url: TB + 'dtlmenu/',
    notes: '[Private-room izakaya · Kyoto Stn Hachijo side, Kyoto meets Niigata] A big all-private-room izakaya a minute from the Shinkansen side of Kyoto Station: yuba sashimi, wagyu tataki and obanzai alongside Niigata hegi soba and Hakkaisan sake, with views of the night city. Handy for groups and business dinners; smoking allowed in the rooms. One October 2026 diner found the food ordinary and a rice dish clearly pre-cooked.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a private-room izakaya with regional cooking and seafood, opened 8 August 2024. An October 2026 review calls it a collaboration of Kyoto and Niigata and says it was chosen for Tabelog’s Hot Restaurants 2026. Tabelog also lists 全席個室 はんなり邸 八重洲店 in Tokyo; the operator is not named in the sources found.',
      philosophy: null, specialty: 'Fresh yuba sashimi; hegi soba.',
      anecdotes: [
        { text: 'A September 2026 group of business travellers from Tokyo chose it for being smart and close to the Shinkansen exit, and finished with hegi soba.', source: R + 'B528645686/' },
        { text: 'A November 2026 diner found a private-room date with night views a minute from the Hachijo exit.', source: R + 'B538722616/' },
        { text: 'An October 2026 diner found nothing especially tasty and the uni-and-ikura rice served within ten minutes, seemingly pre-cooked.', source: R + 'B538303032/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・郷土料理・海鮮、南区東九条室町48 J’Sビル 4F-b、京都駅から徒歩1分、16:00〜24:00 (L.O. 料理23:00、ドリンク23:30)、無休、予約可、混雑時2時間制、席のみ予約はチャージ・1ドリンク・2品以上、15分遅れで無断キャンセル扱い、カード可、155席 (全席個室)、喫煙可、2024年8月8日オープン、東京に八重洲店。口コミ (2026年9月〜11月、英語): 京都と新潟のコラボ、生湯葉の刺身869円、ホタルイカの沖漬け539円、塩昆布と Manganji の唐辛子539円、鴨ロース2,189円、ねぎと水菜の豆腐サラダ、黒毛和牛のたたき、西京味噌のクリームチーズ、おばんざい3種、和牛しゃぶしゃぶ、へぎそば、抹茶わらび餅、八ツ橋、八海山、食べログ Hot Restaurants 2026 (口コミより)、料理が普通との声も。',
      confidence: 'medium', sources: [TB, R + 'B494014446/', R + 'B528645686/', R + 'B528870311/', R + 'B535160436/', R + 'B536493520/', R + 'B537017063/', R + 'B537151130/', R + 'B537231740/', R + 'B538303032/', R + 'B538462324/', R + 'B538623838/', R + 'B538722616/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a private room; seat-only bookings order a cover charge, a drink and two dishes each; smoking allowed in rooms. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市南区東九条室町48 J’Sビル 4F-b',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.983910, 135.758112); cross-checked: GSI 京都府京都市南区東九条室町48番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537017063/', R + 'B494014446/'],
    price_note: 'Prices from an October 2026 review; a cover charge applies (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Fresh yuba sashimi', '¥869', 'Kyoto dishes', 'ask', 'ask', 'October 2026.', 'nama_yuba'),
      it('', '', 'Firefly squid in soy', '¥539', 'Small dishes', 'no', 'no', 'October 2026.', 'hotaru_ika'),
      it('', '', 'Salted kombu with Manganji pepper', '¥539', 'Small dishes', 'ask', 'ask', 'October 2026.', 'manganji'),
      it('', '', 'Duck breast', '¥2,189', 'Mains', 'ask', 'no', 'October 2026.', 'duck'),
      it('', '', 'Hegi soba', '', 'Finish', 'no', 'no', 'September 2026.', 'hegi_soba'),
    ] }, {
    cuisine: '京都の料理に新潟や北陸の名物を合わせた、全席個室の居酒屋 (2026年の口コミ)・生湯葉の刺身869円、ホタルイカの醤油漬け539円、塩昆布と Manganji の唐辛子539円、鴨ロース2,189円 (2026年10月)・ねぎと水菜の豆腐サラダ、黒毛和牛のたたき、西京味噌に漬けたクリームチーズ (2026年9月)・おばんざい3種、和牛しゃぶしゃぶ (2026年10月)・締めは新潟のへぎそば (2026年9月)・抹茶わらび餅とアイス、八ツ橋 (2026年9月)・京都の地酒と新潟の八海山、飲み放題のプラン (2026年10月〜11月)',
    neighborhood: '京都駅八条口側。京都駅から徒歩1分',
    gf_detail: '要確認。へぎそば、八ツ橋、ホタルイカの醤油漬けなどのある居酒屋 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。刺身、和牛、鴨、ホタルイカ、出汁の料理。湯葉や豆腐のサラダもあるが、混ざった献立 (2026年の口コミ)。',
    notes: '[個室居酒屋・京都駅八条口、京都と新潟] 新幹線側の京都駅から1分、全席個室の大きな居酒屋。生湯葉の刺身、黒毛和牛のたたき、おばんざいに、新潟のへぎそばと八海山。夜景も見え、宴会や接待に便利。個室は喫煙可。2026年10月には料理は普通で、ご飯ものは作り置きに見えたとの声も。',
  });
}

save();
