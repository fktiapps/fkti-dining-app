// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 3.
//   + B STORE 1st (charcoal-grill pasta and wine in a riverside townhouse on Kiyamachi; since 2022)   [core]
//   + L'ESCAMOTEUR BAR (magic-show cocktail bar off Shijo-Kiyamachi; since 2015)                       [core]
//   + Bar K6 (Kiyamachi-Nijo bar since 1994; Bar Tabelog 100 2022)                                       [notable]
//   + セクションドール Section D'or (one-dish tandoori-chicken plate in Okazaki; since 2011)            [notable]
//   Taken in queue order on 2026-11-05 from `queue.mjs kyoto-missed next core 200` (lane ids 26037929, 26025473) and
//   `next notable 200` (26001197, 26017889), after batch 2. None is in data/kyoto.json: grep by name (B STORE,
//   レスカモトゥール/Escamoteur, K6, セクションドール) and address (斎藤町140, 斎藤町138, 東生洲町481, 岡崎西天王町84) found none.
//   Group checks: B STORE 1st has one sister shop, B STORE 2nd (Tabelog 26038943, a bakery-sweets shop; not in data).
//   Bar K6's own site lists two sister places of other formats, 角打酒場KASK and Cave de K (neither in data).
//   Pins: B STORE and L'ESCAMOTEUR are both on 斎藤町 but 108 m apart; nearest other records 38 m.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ B STORE 1st
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037929/'; const R = TB + 'dtlrvwlst/';
  const SECOND = 'https://tabelog.com/kyoto/A2601/A260201/26038943/';
  const L = day(['12:00', '15:30'], ['17:30', '22:00']); const D = day(['17:30', '22:00']);
  put({
    id: 'kyoto_b_store_1st', name: 'B STORE 1st', category: 'OMNI',
    lat: 35.002749, lng: 135.770722, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The menu centres on pasta, pizza, bread and baked sweets, alongside charcoal-grilled meat and vegetables; no gluten information (Tabelog; 2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the lunch starts with seasonal vegetables and hummus, but the pastas and grills are mostly meat, cheese or cream (Tabelog; 2025–26 reviews).',
    hours_raw: 'Lunch 12:00–15:30 and dinner 17:30–22:00 (last order 21:00); Friday dinner only; closed Wednesday (Tabelog). The Kamo River terrace (kawadoko) runs 1 May–15 October, with terrace lunch only in May, June, September and October (Tabelog remarks; the seat note says to the end of September). Lunch is a pasta set (¥1,950, booked online, seat assigned by the shop); dinner is à la carte in a "neo izakaya" style (Tabelog). 26 seats; non-smoking; free Wi-Fi; English menu; cards and QR payments (Tabelog). On Kiyamachi-dori south of Shijo, by the Takase River; 5 min from Gion-Shijo Stn across the Shijo bridge (Tabelog).',
    hours: { 0: L, 1: L, 3: L, 4: D, 5: L, 6: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi south of Shijo, between the Takase and Kamo rivers — 5 min from Gion-Shijo Stn',
    cuisine: 'Charcoal grilling, craft pasta and wine in a renovated 100-year-old townhouse on the Kamo River, by an Italy-trained chef (Tabelog) · lunch set ¥1,950: seasonal-vegetable appetizers, bread, a choice of pasta and a drink — charcoal-grilled chicken confit with lemon carbonara (+¥500), chilled basil genovese with prosciutto and eggplant (2025–26 reviews) · dessert plate of baked sweets from the sister bakery B STORE 2nd, +¥500 (September 2025, July 2026) · dinner: Caesar salad, carrot râpé, fries, Gorgonzola pizza, lamb-and-cabbage spring rolls, porcini-and-duck cream pasta, charcoal-grilled A5 wagyu, mini lobster gratin (2026 reviews)',
    website: null, gmaps: gm('B STORE 1st 京都 斎藤町'), menu_url: null,
    notes: "[Italian · Kiyamachi on the Kamo River, a kawadoko townhouse] A renovated century-old townhouse on the Kamo River side of Kiyamachi, run by an Italy-trained chef: charcoal-grilled meats and vegetables, craft pasta and wine. Lunch is a ¥1,950 pasta set with vegetable starters, bread and a drink (add ¥500 for baked sweets from the sister bakery, B STORE 2nd); dinner is shared plates. From May to mid-October there are terrace seats over the river. Closed Wednesday; no lunch on Friday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed; trained in Italy, per the operator’s Tabelog text)'], origin: null,
      background: 'Opened 19 September 2022 (Tabelog). Per the operator’s Tabelog text: an innovative restaurant in a 100-year-old machiya along the Kamo River; the chef, who trained in Italy, brings a fresh perspective to Japanese food culture. Sister shop: B STORE 2nd (Tabelog), whose baked sweets are served here.',
      philosophy: null, specialty: 'Charcoal-grilled chicken with lemon carbonara; kawadoko terrace.',
      anecdotes: [
        { text: 'A guest who has come 22 times called the chef’s porcini-and-duck cream pasta with truffle "among the best I’ve ever had" — August 2026.', source: R + 'B454489206/' },
        { text: 'A July 2026 diner found the steamed vegetables reduced and the mains small, with no explanation of the grilling and too little staff knowledge of wine and food (¥7,500 for two).', source: R + 'B532537882/' },
        { text: '"I visit every year during the kawadoko season!" — July 2026.', source: R + 'B532417552/' },
      ],
      japanese_sources_summary: '食べログ: B STORE 1st 炭火焼きパスタとワイン、イタリアン・イノベーティブ、下京区斎藤町140-25、祇園四条駅から徒歩5分 (四条大橋を渡って木屋町通を左へ)、月火木土日・祝 12:00〜15:30・17:30〜22:00 (L.O. 21:00)、金曜は夜のみ、水曜休み、26席、川床 (5月1日〜10月15日、昼の川床は5・6・9・10月のみ)、禁煙、無料 Wi-Fi、英語メニュー、カード・QR 可、2022年9月19日オープン、パスタ選択ランチセット1,950円、姉妹店 B STORE 2nd、築100年の町家、イタリアで修業したシェフ、夜はネオ居酒屋スタイル、ベジタリアンメニューあり。口コミ (2025年9月〜2026年8月、英語): 炭火焼きチキンコンフィのレモンカルボナーラ、冷製ジェノベーゼ、デザート+500円、ゴルゴンゾーラのピザ、A5和牛の炭火焼き。',
      confidence: 'medium', sources: [TB, SECOND, R + 'B454489206/', R + 'B519115443/', R + 'B532099844/', R + 'B532417552/', R + 'B532537882/', R + 'B533371688/', R + 'B533762245/', R + 'B533956932/', R + 'B534285168/', R + 'B534838313/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); book lunch online; terrace seats in season.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区斎藤町140-25',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (operator-maintained, with a Christmas course); reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.002749, 135.770722); cross-checked: GSI 京都府京都市下京区斎藤町140番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B519115443/', R + 'B532099844/'],
    price_note: 'Lunch set price from the Tabelog course list (read 2026-11-05); add-ons from September 2025–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pasta lunch set (appetizers, bread, pasta, drink)', '¥1,950', 'Lunch', 'no', 'ask', 'Booked online.', 'pasta_lunch'),
      it('', '', 'Charcoal-grilled chicken confit lemon carbonara (lunch upgrade)', '+¥500', 'Lunch', 'no', 'no', 'September 2025.', 'lemon_carbonara'),
      it('', '', 'Dessert: two baked sweets from B STORE 2nd with ice cream', '+¥500', 'Dessert', 'no', 'no', 'September 2025.', 'dessert_plate'),
    ] }, {
    cuisine: '鴨川沿いの築100年の町家で、イタリアで修業したシェフの炭火焼き、クラフトパスタ、ワイン (食べログ)・ランチセット1,950円: 季節の野菜の前菜、パン、選べるパスタ、ドリンク。炭火焼きチキンコンフィのレモンカルボナーラ (+500円)、生ハムとなすの冷製バジルジェノベーゼ (2025〜26年の口コミ)・姉妹店のパン菓子店 B STORE 2nd の焼き菓子のデザート +500円 (2025年9月、2026年7月)・夜: シーザーサラダ、キャロットラペ、フライドポテト、ゴルゴンゾーラのピザ、ラムとキャベツの春巻き、ポルチーニと鴨のクリームパスタ、A5和牛の炭火焼き、ロブスターのミニグラタン (2026年の口コミ)',
    neighborhood: '四条の南の木屋町、高瀬川と鴨川の間。祇園四条駅から徒歩5分',
    gf_detail: '要確認。パスタ、ピザ、パン、焼き菓子が中心で、炭火焼きの肉と野菜もある。グルテンの情報はない (食べログ、2025〜26年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、ランチは季節の野菜とフムスから始まるが、パスタとグリルは肉、チーズ、クリームが多い (食べログ、2025〜26年の口コミ)。',
    notes: '[イタリアン・鴨川沿いの木屋町、川床の町家] 木屋町の鴨川側にある築100年の町家を改装した店。イタリアで修業したシェフの炭火焼きの肉と野菜、クラフトパスタ、ワイン。ランチは1,950円のパスタセットで、野菜の前菜、パン、ドリンク付き (+500円で姉妹店 B STORE 2nd の焼き菓子)。夜は取り分けの料理。5月から10月中旬は鴨川の川床席も。水曜休み、金曜は昼なし。',
  });
}

// ================================================================ L'ESCAMOTEUR BAR
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26025473/'; const R = TB + 'dtlrvwlst/';
  const H = day(['19:00', '01:00']);
  put({
    id: 'kyoto_lescamoteur_bar', name: "レスカモトゥール バー (L'ESCAMOTEUR BAR)", category: 'MOM_AND_POP',
    lat: 35.00183, lng: 135.769973, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail bar; the drinks use spirits, liqueurs and syrups whose ingredients are not published, and a reviewer mentions food without naming it (2024–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Cocktails only are described; ingredients such as egg white, cream or honey are not listed (2024–26 reviews).',
    hours_raw: '19:00–1:00, Tuesday to Sunday; closed Monday; hours may change (Tabelog). Reviewers in 2024 found it opening at 20:00 and nearly full at once, with a queue before opening. No reservations (Tabelog; November 2025): late arrivals stand at the side counter. 12 seats plus standing; smoking allowed (Tabelog). Stage-magic cocktails about ¥2,000–2,500, service charge included (December 2025). Cards (JCB, AMEX, Diners) and QR payments (Tabelog). Second floor, on 西石垣通 south of Shijo; 5 min from Kyoto Kawaramachi Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'South of Shijo between Kiyamachi and the Kamo River, 2F — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Magic-themed mixology bar: "Stage Magic" cocktails grouped by the show that comes with them — ALCHEMY, FIRE, SMOKE, BANG — e.g. Fudo Myo-o, Death in Provence, Strawberry Ichie and Get Your Spirit Back (¥2,500 each in December 2025), smoky old fashioned; also standard cocktails and omakase cocktails (2024–26 reviews)',
    website: null, gmaps: gm("L'ESCAMOTEUR BAR 京都"), menu_url: null,
    notes: "[Cocktail bar · Shijo-Kiyamachi, magic in a glass] A small second-floor bar like a wizard's den — swing chairs, a restroom behind a bookshelf, loud music on the stairs — where each \"Stage Magic\" cocktail comes with its own trick, chosen by style: alchemy, fire, smoke or bang. Most staff and guests are from overseas and English is the working language. Cocktails about ¥2,000–2,500 with service included. No bookings and it fills fast, so come at opening. Smoking allowed. Closed Monday.",
    chef_bio: { chef_name: 'Christoph', roles: ['Owner, a professional magician (per a January 2024 review)'], origin: null,
      background: 'Opened 14 February 2015 (Tabelog). Per 2024–26 reviews: a magic bar where the bartenders perform with the drinks, with guest participation; in March 2024 about 90% of guests were from overseas and most staff did not speak much Japanese, while a November 2025 reviewer found the Japanese staff fluent in English.',
      philosophy: null, specialty: 'Stage Magic cocktails.',
      anecdotes: [
        { text: '"This magic bar not only offers magic tricks but also a playful atmosphere, and the flirtatious staff are amazing!" — January 2024.', source: R + 'B478649352/' },
        { text: '"The owner is Christoph, a professional magician!" — January 2024.', source: R + 'B478649352/' },
        { text: '"The restroom is hidden behind a bookshelf, which adds an element of excitement." — August 2025.', source: R + 'B511599137/' },
        { text: 'Arriving at 20:10, a March 2024 reviewer found it already full and was sent to the standing area; a server from South Africa appears in the photos.', source: R + 'B481182940/' },
        { text: '"I was pleasantly surprised that the prices included service charges." — December 2025.', source: R + 'B519435768/' },
      ],
      japanese_sources_summary: '食べログ: レスカモトゥール バー (L\'ESCAMOTEUR BAR)、バー、下京区西石垣通四条下ル斎藤町138番地9 2階、京都河原町駅から徒歩5分、火〜日 19:00〜1:00、月曜休み、予約不可、12席、喫煙可、カード (JCB、AMEX、Diners)・QR 可、2015年2月14日オープン。口コミ (2024年1月〜2026年2月、英語): マジックバー、オーナーはプロのマジシャンの Christoph、STAGE MAGIC のカクテル (ALCHEMY、FIRE、SMOKE、BANG)、1杯2,000〜2,500円でサービス料込み、客とスタッフの多くは海外から、開店前から行列。',
      confidence: 'medium', sources: [TB, R + 'B478649352/', R + 'B481182940/', R + 'B481626892/', R + 'B491776147/', R + 'B495252055/', R + 'B511599137/', R + 'B517698655/', R + 'B519435768/', R + 'B522660526/', R + 'B522800272/'] },
    cultural_comfort: { level: 'english', note: 'Staff work in English (November 2025); no bookings; come at opening.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西石垣通四条下ル斎藤町138番地9 2階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.001830, 135.769973); cross-checked: GSI 京都府京都市下京区斎藤町138番地 (lot) 34m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519435768/'],
    price_note: 'No menu read; prices from a December 2025 review (service included).', last_checked: TODAY, items: [
      it('', '', 'Strawberry Ichie (Stage Magic: BANG)', '¥2,500', 'Cocktails', '', '', 'December 2025.', 'strawberry_ichie'),
      it('', '', 'Get Your Spirit Back (Stage Magic: ALCHEMY)', '¥2,500', 'Cocktails', '', '', 'December 2025.', 'get_your_spirit_back'),
    ] }, {
    cuisine: 'マジックがテーマのミクソロジーバー。「Stage Magic」のカクテルは演出ごとに ALCHEMY、FIRE、SMOKE、BANG に分かれる。Fudo Myo-o、Death in Provence、Strawberry Ichie、Get Your Spirit Back (2025年12月 各2,500円)、スモーキーなオールドファッションド。通常のカクテルやおまかせも (2024〜26年の口コミ)',
    neighborhood: '四条の南、木屋町と鴨川の間の2階。京都河原町駅から徒歩5分',
    gf_detail: '要確認。カクテルバーで、スピリッツ、リキュール、シロップの原材料は公開されていない。料理に触れる口コミもあるが内容は不明 (2024〜26年の口コミ)。',
    vegan_detail: '要確認。口コミにはカクテルしか出てこない。卵白、クリーム、はちみつなどの使用は分からない (2024〜26年の口コミ)。',
    notes: '[カクテルバー・四条木屋町、グラスの中のマジック] 魔法使いの隠れ家のような小さな2階のバー。ブランコの椅子、本棚の奥のトイレ、階段まで響く音楽。「Stage Magic」のカクテルはそれぞれに仕掛けがあり、錬金術、火、煙、爆発の演出から選ぶ。スタッフも客も海外の人が多く、英語が中心。1杯2,000〜2,500円ほどでサービス料込み。予約不可ですぐ満席になるので開店時がおすすめ。喫煙可。月曜休み。',
  });
}

// ================================================================ Bar K6
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001197/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.ksix.jp/';
  const H = day(['18:00', '02:00']);
  put({
    id: 'kyoto_bar_k6', name: 'Bar K6', category: 'OMNI',
    lat: 35.013327, lng: 135.770565, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A bar with a food menu of pâté, carpaccio, oil sardines, house-smoked quail eggs and cheese, pizza, pasta and fries; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Spirits and many cocktails suit; the food is mostly meat, fish and cheese (2026 reviews).',
    hours_raw: '18:00–2:00; closed Monday and Tuesday (official site; Tabelog); last food order 1:00 (July 2026). Bookings by phone (Tabelog; June 2026). A ¥550 charge applies at the bar counter, not on the casual floor (July 2026). 40 seats: a large semicircular counter and group seating; smoking allowed, and cigars are served (Tabelog; June 2026). Cards and e-money (Tabelog). Second floor of the Vals building, up an outdoor staircase on Nijo-dori just east of Kiyamachi; 5 min from Kyoto Shiyakusho-mae Stn (official site; Tabelog; September 2026).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nijo-dori just east of Kiyamachi, near The Ritz-Carlton — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Cocktail and whisky bar: a long shelf of whisky, cocktails made to the guest’s taste, the house gin and tonic (2026 reviews) · cocktails such as a Quarter Deck with wasanbon sugar and a Stinger; Calvados, rum, sherry brandy; bourbon with soda; cigars (2026 reviews) · gin and tonic ¥1,100, vanilla ice cream ¥900 (July 2026) · food: chicken liver pâté, kinmedai carpaccio, oil sardines, house-smoked quail eggs and cheese, pizza, pasta, fries (2026 reviews)',
    website: SITE, gmaps: gm('Bar K6 京都 木屋町二条'), menu_url: null,
    notes: "[Bar · Kiyamachi-Nijo, a Kyoto bar institution since 1994] A big, bright second-floor bar on Nijo-dori near the Kamo River, often named first when Kyoto drinkers are asked for a bar: a semicircular counter where several bartenders work, a casual floor for groups, a deep whisky shelf and cigars. The gin and tonic is the house signature — reviewers say new bartenders must master it — and the cocktails are built around the sweetness of the spirit. Counter charge ¥550; gin and tonic ¥1,100. 18:00–2:00, closed Monday and Tuesday.",
    chef_bio: { chef_name: null, roles: ['Bar team; a June 2026 review names the chief bartender as Sawada'], origin: null,
      background: 'Opened 24 March 1994 (Tabelog). Tabelog Bar "Tabelog 100" 2022. The official site also runs 角打酒場KASK (open every day 14:00–2:00) and Cave de K (15:00–0:00, closed Tuesday). Per a July 2026 review: many well-known Kyoto bartenders trained here, and making a gin and tonic to K6’s standard is a required test for bartenders joining.',
      philosophy: 'Per a June 2026 review: K6’s cocktails are designed to bring out the hidden sweetness of the spirits.',
      specialty: 'Gin and tonic; whisky; cigars.',
      anecdotes: [
        { text: 'A young bartender said of the chief’s Stinger: "This is the cocktail I aspire to create." — June 2026.', source: R + 'B530568216/' },
        { text: 'The bar uses tableware by the artist Shiro Tsujimura — August 2026.', source: R + 'B492093036/' },
        { text: 'A first-time visitor in July 2026 was told it is a whisky bar that does not serve cocktails, apart from gin and tonic; other 2026 reviewers ordered cocktails.', source: R + 'B531565268/' },
        { text: 'A June 2026 regular found the service "a bit inconsistent depending on the staff", and in April 2026 felt it kept "a distance from newcomers".', source: R + 'B493509222/' },
      ],
      japanese_sources_summary: '公式サイト (ksix.jp): Bar K6、京都市中京区木屋町二条東入ル ヴァルズビル2F、18:00〜2:00、月曜・火曜休み、スタッフのブログ (2026年11月まで)、角打酒場KASK (年中無休 14:00〜2:00)、Cave de K (15:00〜0:00、火曜休み)。食べログ: バー・ダイニングバー、中京区二条通木屋町東入ル東生洲町481 ヴァルズビル2F、京都市役所前駅から徒歩5分、水〜日 18:00〜2:00、40席、喫煙可、カード・電子マネー可、1994年3月24日オープン、バー百名店 2022。口コミ (2026年4〜9月、英語): ジントニック、カクテル、ウイスキー、葉巻、カウンターはチャージ550円、フードのラストオーダー1時、レバーパテ、金目鯛のカルパッチョ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B492093036/', R + 'B493509222/', R + 'B529767173/', R + 'B530568216/', R + 'B531010408/', R + 'B531451862/', R + 'B531565268/', R + 'B534557414/', R + 'B535657486/', R + 'B536136014/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose the counter (charge) or the casual floor; tell the bartender what you like; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通木屋町東入ル東生洲町481 ヴァルズビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (posts through 4 November 2026) and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.013327, 135.770565); cross-checked: GSI 京都府京都市中京区東生洲町481番地 (lot) 41m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531565268/', R + 'B534557414/'],
    price_note: 'No menu read; prices from July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Gin and tonic', '¥1,100', 'Drinks', '', '', 'July 2026.', 'gin_tonic'),
      it('', '', 'Vanilla ice cream', '¥900', 'Food', 'ask', 'no', 'July 2026.', 'vanilla_ice_cream'),
      it('', '', 'Bar counter charge', '¥550', 'Charges', '', '', 'Counter only; July 2026.', 'counter_charge'),
    ] }, {
    cuisine: 'カクテルとウイスキーのバー。ずらりと並ぶウイスキー、好みに合わせたカクテル、看板のジントニック (2026年の口コミ)・和三盆の Quarter Deck、Stinger などのカクテル、カルヴァドス、ラム、シェリーブランデー、バーボンのソーダ割り、葉巻 (2026年の口コミ)・ジントニック1,100円、バニラアイス900円 (2026年7月)・料理: 鶏レバーのパテ、金目鯛のカルパッチョ、オイルサーディン、自家製燻製のうずら卵とチーズ、ピザ、パスタ、フライドポテト (2026年の口コミ)',
    neighborhood: '木屋町のすぐ東の二条通、リッツ・カールトンの近く。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。バーの料理はパテ、カルパッチョ、オイルサーディン、燻製のうずら卵とチーズ、ピザ、パスタ、フライドポテト。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。スピリッツや多くのカクテルは合う。料理は肉、魚、チーズが中心 (2026年の口コミ)。',
    notes: '[バー・木屋町二条、1994年からの京都の定番バー] 鴨川に近い二条通の2階の広く明るいバー。京都でバーを尋ねるとまず名前が挙がる店。数人のバーテンダーが立つ半円のカウンター、グループ向けのフロア、充実したウイスキーと葉巻。看板はジントニックで、新人のバーテンダーはこれを身につける必要があるという。カクテルは酒の隠れた甘みを引き出す作り。カウンターはチャージ550円、ジントニック1,100円。18時〜2時、月・火曜休み。',
  });
}

// ================================================================ セクションドール
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26017889/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_section_dor', name: "セクションドール (Section D'or)", category: 'OMNI',
    lat: 35.015305, lng: 135.779159, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The only dish is tandoori chicken with grilled vegetables, served with bread; the marinade ingredients are not published (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the single menu item is a tandoori-chicken plate (2026 reviews).',
    hours_raw: 'Lunch 11:30–14:00, dinner 17:30–21:00; closed Tuesday; hours may change (Tabelog). Bookings taken, even on the day (October 2026); the owner said few come on rainy days without a booking (June 2026). 8 seats at 4 tables (Tabelog; an October 2026 reviewer counted four seats); non-smoking; cash only (Tabelog; October 2026). In an apartment building in Okazaki; 4 min from the Higashiyama-Nijo or Kumano-jinja-mae bus stops, 9 min from Higashiyama or Jingu-Marutamachi Stn (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Okazaki, west of Heian Shrine — 4 min from the Higashiyama-Nijo bus stop',
    cuisine: 'One dish only: a tandoori-chicken plate, ¥2,700, with a generous spread of seasonal grilled vegetables (pumpkin, butternut squash, eggplant, okra, lotus root, yam, turnip, tsurumurasaki and more) and bread for the juices; mild rather than hot, closer to a light Italian plate than a typical Indian one (2026 reviews) · drinks: oolong teas, cold-brewed and frozen, Taiwanese Dong Ding; wine (2026 reviews; Tabelog)',
    website: 'http://sectiondor.jp/', gmaps: gm("セクションドール 京都 岡崎"), menu_url: null,
    notes: "[Tandoori chicken · Okazaki, one plate done well] A quiet eight-seat room in an Okazaki apartment building that serves a single dish: tandoori chicken, crisp-skinned and juicy, mildly spiced, on a plate crowded with seasonal grilled vegetables that regulars come back for each season (¥2,700). Order an oolong tea with it. Book ahead, even same day. Cash only; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Opened 1 April 2011 (Tabelog). Tabelog Asian/Ethnic WEST "Tabelog 100" 2026.',
      philosophy: null, specialty: 'Tandoori-chicken plate with seasonal vegetables.',
      anecdotes: [
        { text: 'The butternut squash and tsurumurasaki surprised a regular enough to ask the chef about them — August 2026.', source: R + 'B529173358/' },
        { text: 'A June 2026 diner first found the owner quiet, but asking brought out a lot of information; the same reviewer rated several vegetables (okra, burdock, broccoli) below average.', source: R + 'B529956060/' },
        { text: '「典型的に日本のインド料理屋で提供されるタンドリーチキンをイメージすると全く異なるため、軽いイタリアンを食べに来ているような気持ちで行くのがおすすめです。」 — July 2026.', source: R + 'B532684209/' },
      ],
      japanese_sources_summary: '食べログ: セクションドール、インド料理・鶏料理、左京区岡崎西天王町84-1 M&M\'s APARTMENT 1F、市バス東山二条・熊野神社前から徒歩4分、月・水〜日 11:30〜14:00・17:30〜21:00、火曜休み、予約可、8席 (4テーブル)、禁煙、カード・電子マネー・QR 不可、2011年4月1日オープン、アジア・エスニック WEST 百名店 2026。口コミ (2026年5〜10月): メニューはタンドリーチキン一択、2,700円、彩り豊かな焼き野菜のワンプレート、注文から10分ほどで提供、鶏肉が非常に柔らかく上品、軽いイタリアンのような気持ちで、烏龍茶、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B529173358/', R + 'B529956060/', R + 'B529985714/', R + 'B530783242/', R + 'B532684209/', R + 'B536222180/', R + 'B537702490/', R + 'B537835836/', R + 'B538332856/', R + 'B59929251/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One dish, so ordering is easy; book ahead; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: "京都府京都市左京区岡崎西天王町84-1 M&M's APARTMENT 1F",
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Asian/Ethnic WEST Tabelog 100 2026. The shop site did not answer on 2026-11-05.' },
    pin_source: `Tabelog ${TB} (35.015305, 135.779159); cross-checked: GSI 京都府京都市左京区岡崎西天王町84番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537835836/'],
    price_note: 'Single-item menu; price from an October 2026 review ("JPY 2700 plus drink fee").', last_checked: TODAY, items: [
      it('タンドリーチキン', '', 'Tandoori-chicken plate with seasonal grilled vegetables and bread', '¥2,700', 'Main', 'ask', 'no', 'The only dish.', 'tandoori_plate'),
    ] }, {
    cuisine: 'メニューは一品だけ: タンドリーチキンのプレート2,700円。かぼちゃ、バターナッツ、なす、オクラ、れんこん、山芋、かぶ、つるむらさきなど季節の焼き野菜がたっぷり、肉汁につけるパン付き。辛さは控えめで、典型的なインド料理より軽いイタリアンに近い (2026年の口コミ)・飲み物: 水出しや Dong Ding の烏龍茶、ワイン (2026年の口コミ、食べログ)',
    neighborhood: '平安神宮の西の岡崎。市バス東山二条から徒歩4分',
    gf_detail: '要確認。料理はパン付きのタンドリーチキンと焼き野菜のプレートだけで、漬けだれの原材料は公開されていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。メニューはタンドリーチキンのプレート一品 (2026年の口コミ)。',
    notes: '[タンドリーチキン・岡崎、一皿を極める] 岡崎のアパートの1階にある8席の静かな店。料理はタンドリーチキン一品だけで、皮はパリッと中はジューシー、スパイスは穏やか。季節の焼き野菜がたっぷりのプレートで、野菜目当てに季節ごとに通う人もいる (2,700円)。烏龍茶と一緒に。当日でも予約がおすすめ。現金のみ、火曜休み。',
  });
}

save();
