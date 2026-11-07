// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 52.
//   Queue run from the osw2 worktree, 2026-11-07.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   - だし茶漬けえん 京都ポルタ店 — skipped: chain (B.Y.O). - ラ・メゾン・ジュヴォー ジェイアール京都伊勢丹店 — skipped: large parent (Imuraya).
//   + Cafe ヒペリカム Cafe Hypericum (small café in an old house in Okazaki, with a resident cat; since 2011)
//   + ヨロズ食堂 Yorozu Shokudo (Asian-ethnic set-meal diner on the Sanjo-kai arcade; since 2014)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + saredoかふぇ & DINING 京都店 (café-dining near Kyoto Station) — invoice 有限会社アユム (Kita-ku, Kyoto); sister きわみ saredo.
//   - 京都炭火串焼つじや 京都駅前店, 新橋へそ 京都駅前本店, たかばし BiVi二条店, グリルキャピタル東洋亭 伊勢丹店 — chains; 古都香 — relocated.
//   + 京煎堂 祇園本店 Kyosendo Gion (rice-cracker maker's shop and matcha tea room on Shijo) — 株式会社京煎堂 (Uji); also counters at
//     JR Kyoto Isetan and Hankyu Sannomiya; shop count not confirmed.
//   None of the four is in data/kyoto.json: grep by id, name and address found none.
//   Service charges: none listed (saredo Tabelog original text: なし).
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; re-checked against current main before handoff.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-52');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26023449', 'だし茶漬けえん 京都ポルタ店: a chain — Tabelog describes the operator 株式会社ビー・ワイ・オー as running nearly 20 brands; だし茶漬け えん has shops in Yurakucho, Shinjuku, Nihonbashi, Toyosu, Shimbashi, Okayama, Shin-Osaka and more (Tabelog; Indeed; GLT Japan), and our crawls also list the Roppongi Hills shop');
skip('26031627', 'ラ・メゾン・ジュヴォー ジェイアール京都伊勢丹店: a brand of a large parent — a sweets brand run in Japan by 井村屋株式会社 of the listed Imuraya Group (Imuraya press releases via excite.co.jp and Japan Post)');
skip('26025219', '京都炭火串焼つじや 京都駅前店: a chain — our crawls list over a dozen つじや shops in Kyoto (京都駅前店, 京都駅八条口店, 四条御幸町店, 梅小路北店, 京都駅北店, 四条烏丸西店, 京都駅西店, 錦市場堺町店, 七条店, 鶏匠つじや 本店 and more)');
skip('26024829', '立呑・座呑・外呑処 新橋へそ 京都駅前本店: a chain — the Shinbashi-born へそ group (see osw2-50: 食堂・酒場 京へそ, 天ぷら・割鮮酒処 へそ 京都店, へそ 南森町店, plus the Tokyo shops)');
skip('26003199', 'たかばし BiVi二条店: a chain — the official site (takabashi.com, read 2026-11-07) lists shops at BiVi二条, 四条河原町, 亀岡, 京都南インター, 京都東インター, 横大路, イオンモール久御山, イオンモール高の原, 枚方 and そよら古川橋駅前');
skip('26002167', 'グリルキャピタル東洋亭 ジェイアール京都伊勢丹店: a chain — our crawls list グリルキャピタル東洋亭 at JR Kyoto Isetan, Porta, Shin-Osaka, Kintetsu and Takashimaya, plus 丸太町東洋亭, 東洋亭 大阪高島屋店 and a DELI');
skip('26006271', '古都香: Tabelog marks the listing Relocated ("This is information from before the relocation"); the new shop is listed as 26045798 (田中上柳町24), in another lane');

// ================================================================ Cafe ヒペリカム
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26018841/'; const R = TB + 'dtlrvwlst/';
  const L = day(['12:00', '18:00']); const S = day(['12:00', '16:00']);
  put({
    id: 'kyoto_cafe_hypericum', name: 'Cafe ヒペリカム (Cafe Hypericum)', category: 'OMNI',
    lat: 35.01697442786989, lng: 135.78480909046584, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bean spice curry with rice, ohagi, cheesecake, pumpkin cake and shaved ice; no gluten information is published (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The curry is bean-based and the ohagi are rice and bean paste, but no ingredients are published (reviews).',
    hours_raw: 'Tuesday, Saturday and Sunday 12:00–18:00; Thursday and Friday 12:00–16:00; closed Monday and Wednesday; hours may change (Tabelog). Cards accepted; no e-money or QR (Tabelog). 15 seats with sofas; non-smoking (Tabelog). A resident cat roams the café (2022–2026 reviews); a corner sells goods such as cat cookies and glassware (May and June 2025). In an old house with antique furniture and greenery on Marutamachi-dori near Heian Shrine and the Kyocera Museum of Art, 1 min from the Okazakimichi bus stop (Tabelog; October 2025). The shop’s old website now carries unrelated advertising and is not used here.',
    hours: { 1: L, 3: S, 4: S, 5: L, 6: L }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki, near Heian Shrine — 1 min from the Okazakimichi bus stop',
    cuisine: 'A small house café (Tabelog; reviews) · bean spice curry lunch with plenty of vegetables and house pickled napa cabbage; curry to take away (May–June 2025) · ohagi with sesame or bean paste and an unsweetened matcha latte (April and October 2025); cheesecake; pumpkin cake; a sweet-potato dessert (2023–2025) · shaved ice such as rich Uva tea or ginger milk with ice cream (2020–2023) · iced coffee',
    website: null, gmaps: gm('Cafe ヒペリカム 岡崎'), menu_url: TB,
    notes: "[Café · Okazaki near Heian Shrine, a quiet house café with a cat] A tiny café in an old house among greenery on Marutamachi, filled with antique furniture and a resident cat. Come for a bean spice curry lunch with pickles, or ohagi with a matcha latte, after the Kyocera Museum or Heian Shrine. Short hours: afternoons only, closed Monday and Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened 10 October 2011 (Tabelog). Reviewers (2022–2026) describe a calm traditional house with antique furniture, greenery, a goods corner and a cat.',
      philosophy: null,
      specialty: 'Bean spice curry; ohagi.',
      anecdotes: [
        { text: 'A May 2025 visitor dropped in for curry to take away and also bought the cat-shaped cookies.', source: R + 'B505934295/' },
        { text: 'A June 2025 diner nearly finished a whole jar of the pickled napa cabbage served with the curry.', source: R + 'B508093427/' },
        { text: 'A July 2026 guest walking from the Okura Bettei stopped for a 3 p.m. snack with no other customers there.', source: R + 'B531548938/' },
      ],
      japanese_sources_summary: '食べログ: Cafe ヒペリカム、カフェ、左京区岡崎北御所町50、市バス「岡崎道」から徒歩1分、火土日 12:00〜18:00、木金 12:00〜16:00、月水定休、カード可、電子マネー・QR不可、15席、ソファ席、禁煙、子ども可、2011年10月10日オープン。口コミ (2020〜2026年、英語): 古民家、アンティークの家具、緑、猫がいる、雑貨コーナー (猫のクッキー、グラス)、豆のスパイスカレーのランチ、白菜の漬物、カレーの持ち帰り、ごまや餡のおはぎ、甘くない抹茶ラテ、チーズケーキ、かぼちゃのケーキ、さつまいものデザート、ウバ茶や生姜ミルクのかき氷、アイスコーヒー、平安神宮と京セラ美術館の近く。',
      confidence: 'low', sources: [TB, R + 'B427610175/', R + 'B430479618/', R + 'B450333553/', R + 'B452744197/', R + 'B467534263/', R + 'B468364669/', R + 'B505704702/', R + 'B505934295/', R + 'B508093427/', R + 'B509377259/', R + 'B516468655/', R + 'B531548938/'] },
    cultural_comfort: { level: 'japanese', note: 'A resident cat; menus may not be photographed (June 2023).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎北御所町50',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.016974, 135.784809); cross-checked: GSI 京都府京都市左京区岡崎北御所町50番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508093427/', R + 'B505704702/'],
    price_note: 'No prices in recent reviews.', last_checked: TODAY, items: [
      it('', '', 'Bean spice curry lunch', '', 'Curry', 'ask', 'ask', 'June 2025.', 'bean_curry'),
      it('', '', 'Ohagi (sesame or bean paste)', '', 'Sweets', 'ask', 'ask', 'April 2025.', 'ohagi'),
      it('', '', 'Matcha latte', '', 'Drink', 'gf', 'ask', 'Unsweetened; syrup on the side.', 'matcha_latte'),
    ] }, {
    cuisine: '小さな古民家カフェ (食べログ、口コミ)・野菜たっぷりの豆のスパイスカレーのランチと自家製の白菜の漬物、カレーの持ち帰り (2025年5〜6月)・ごまや餡のおはぎと甘くない抹茶ラテ (2025年4月と10月)、チーズケーキ、かぼちゃのケーキ、さつまいものデザート (2023〜2025年)・濃厚なウバ茶や生姜ミルクにアイスのかき氷 (2020〜2023年)・アイスコーヒー',
    neighborhood: '岡崎、平安神宮の近く。岡崎道のバス停から徒歩1分',
    gf_detail: '要確認。豆のスパイスカレーとご飯、おはぎ、チーズケーキ、かぼちゃのケーキ、かき氷。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: '要確認。カレーは豆、おはぎは米と餡だが、原材料は公開されていない (口コミ)。',
    notes: '[カフェ・平安神宮近くの岡崎、猫のいる静かな古民家カフェ] 丸太町通の緑に囲まれた古い家の小さなカフェ。アンティークの家具と看板猫。京セラ美術館や平安神宮の帰りに、漬物付きの豆のスパイスカレーや、おはぎと抹茶ラテを。営業は午後のみで短め、月水休み。',
  });
}

// ================================================================ ヨロズ食堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26023929/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://yorozusyokudou.tumblr.com/';
  const H = day(['11:30', '20:30']); const S = day(['11:30', '14:00']);
  put({
    id: 'kyoto_yorozu_shokudo', name: 'ヨロズ食堂 (Yorozu Shokudo)', category: 'OMNI',
    lat: 35.008472987862554, lng: 135.74481610040797, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Asian set meals — kara-age, Sichuan boiled pork, mapo tofu, khao man gai, soup noodles — and cakes; no gluten information is published (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and pork mains; nam pla on the table (reviews).',
    hours_raw: '11:30–20:30 Tuesday–Saturday; Sunday 11:30–14:00; closed Monday; hours may change (Tabelog). Set meals served through the day (September 2025; April 2026). Cash only — no cards, e-money or QR (Tabelog). 20 seats: tables at the front and back, and a counter; non-smoking (Tabelog; April 2025). On the Sanjo-kai shopping arcade, 397 m from Nijo Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanjo-kai shopping arcade, near Nijo Stn',
    cuisine: 'An Asian-ethnic diner and café (reviews) · set meals with two small sides, pickles and soup: kara-age with an ethnic flavour, pickled chillies and nam pla on the table (2025–2026); Sichuan boiled pork in garlic-chilli sauce (February 2025); limited mapo tofu set (February 2025) · soup noodles with coriander and lime (July 2025); khao man gai (November 2025) · cake set ¥700–800, e.g. apple pie with café au lait (2025–2026)',
    website: SITE, gmaps: gm('ヨロズ食堂 三条会商店街'), menu_url: TB,
    notes: "[Asian diner · Sanjo-kai arcade near Nijo, set meals all day] A stylish little diner-café on the covered Sanjo-kai arcade serving Asian-leaning set meals from lunch to evening: ethnic-spiced kara-age, Sichuan boiled pork, khao man gai, coriander-and-lime soup noodles, each with small sides and soup, plus a cake set for about ¥800. Quick and good value. Cash only; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened 6 June 2014 (Tabelog). Reviewers (2025–2026) describe a small, deep shop on the Sanjo-kai arcade that works as café, diner and restaurant in one, with set meals into the evening.',
      philosophy: null,
      specialty: 'Ethnic-spiced kara-age set.',
      anecdotes: [
        { text: 'A September 2025 diner seasoned the kara-age set with the pickled chillies and nam pla on the table.', source: R + 'B514593543/' },
        { text: 'A March 2026 first-timer found a ¥800 cake set — apple pie and café au lait — rare these days.', source: R + 'B523904758/' },
        { text: 'A December 2025 visitor at an odd hour was looked after with great care.', source: R + 'B520799347/' },
      ],
      japanese_sources_summary: '食べログ: ヨロズ食堂、アジア・エスニック、中京区壬生馬場町11-11、二条駅から397m、火〜土 11:30〜20:30、日 11:30〜14:00、月曜定休、カード・電子マネー・QR不可、20席、禁煙、2014年6月6日オープン。口コミ (2025〜2026年、英語): 三条会商店街、小鉢2品・漬物・スープ付きの定食、エスニックな唐揚げ定食、卓上の唐辛子の酢漬けとナンプラー、四川風のゆで豚、限定の麻婆豆腐定食、パクチーとライムの汁麺、カオマンガイ、ケーキセット700〜800円 (アップルパイとカフェオレ)、夜も定食、手早い提供。',
      confidence: 'low', sources: [TB, SITE, R + 'B481593683/', R + 'B501275767/', R + 'B501283120/', R + 'B501562400/', R + 'B511019020/', R + 'B513322483/', R + 'B514593543/', R + 'B520799347/', R + 'B523904758/', R + 'B526843664/', R + 'B528965875/', R + 'B532092386/'] },
    cultural_comfort: { level: 'japanese', note: 'Cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区壬生馬場町11-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.008473, 135.744816); cross-checked: GSI 京都府京都市中京区壬生馬場町11番地 (lot) 83m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514593543/', R + 'B523904758/'],
    price_note: 'Cake-set prices from September 2025 and March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kara-age set meal (ethnic flavour)', '', 'Set', 'no', 'no', '', 'karaage'),
      it('', '', 'Khao man gai', '', 'Set', 'ask', 'no', 'November 2025.', 'khao_man_gai'),
      it('', '', 'Cake set (e.g. apple pie and café au lait)', '¥800', 'Sweets', 'no', 'no', '¥700 in September 2025.', 'cake_set'),
    ] }, {
    cuisine: 'アジア・エスニックの食堂兼カフェ (口コミ)・小鉢2品、漬物、スープ付きの定食: エスニック風味の唐揚げ、卓上に唐辛子の酢漬けとナンプラー (2025〜2026年)、ニンニクと唐辛子の四川風ゆで豚 (2025年2月)、限定の麻婆豆腐定食 (2025年2月)・パクチーとライムの汁麺 (2025年7月)、カオマンガイ (2025年11月)・ケーキセット700〜800円、たとえばアップルパイとカフェオレ (2025〜2026年)',
    neighborhood: '三条会商店街、二条駅の近く',
    gf_detail: '要確認。唐揚げ、四川風ゆで豚、麻婆豆腐、カオマンガイ、汁麺などのアジアの定食とケーキ。グルテンの情報は公開されていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏や豚のおかず、卓上にナンプラー (口コミ)。',
    notes: '[アジア食堂・二条近くの三条会商店街、一日中定食] アーケードの三条会商店街の、おしゃれな小さな食堂兼カフェ。昼から夜までアジア寄りの定食を出す。エスニックな唐揚げ、四川風ゆで豚、カオマンガイ、パクチーとライムの汁麺に、小鉢とスープ。800円ほどのケーキセットも。手早くお得。現金のみ、月曜休み。',
  });
}

// ================================================================ saredoかふぇ & DINING 京都店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26024067/'; const R = TB + 'dtlrvwlst/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=1130002007467';
  const H = day(['11:30', '22:30']);
  put({
    id: 'kyoto_saredo_cafe_dining', name: 'saredoかふぇ & DINING 京都店 (saredo Cafe & Dining Kyoto)', category: 'OMNI',
    lat: 34.98905858787877, lng: 135.75703574020332, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Plate lunches with fried chicken and prawns, soup pasta, Chicago deep-dish pizza and crêpes; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fried chicken, cheese pizza and cream crêpes (reviews).',
    hours_raw: '11:30–22:30 (last order 22:00), daily (Tabelog). Chicago pizza at dinner only (October 2026). Bookings recommended — lunch fills with reservations and queues form on the stairs before opening; a holiday lunch order took about 40 minutes (August–September 2026). No cover charge (Tabelog original text: なし). Cards, iD, QUICPay and QR (Tabelog). 30 seats with counter and sofa seats; non-smoking; English menu; children welcome; steep stairs to the 2nd floor (Tabelog; September 2026). On the 2nd floor at Shichijo-Shinmachi, 5 min walk from Kyoto Station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shichijo-Shinmachi — 5 min walk from Kyoto Station',
    cuisine: 'Café-dining near Kyoto Station (Tabelog) · lunch plates under ¥2,000: shiba-zuke tartar chicken nanban with prawn fry, soup and rice; salad plate; plate lunch with a crêpe set (August–October 2026) · soup pasta with chewy noodles (September–October 2026) · Chicago deep-dish cheese pizza at night; all-you-can-eat-and-drink courses from ¥3,980 and a 3-hour free-flow course ¥4,980 (Tabelog; October 2026) · griddle crêpes with ice cream or whipped cream; sangria (August–October 2026)',
    website: null, gmaps: gm('saredoかふぇ 京都 七条新町'), menu_url: TB,
    notes: "[Café-dining · Shichijo-Shinmachi near Kyoto Station, plate lunches and Chicago pizza] A cosy second-floor café-dining room five minutes from Kyoto Station: vegetable-heavy plate lunches (shiba-zuke tartar chicken nanban is a favourite), chewy soup pasta and big griddle crêpes by day; Chicago deep-dish pizza and free-flow courses at night. Lunch fills with bookings — reserve. Open daily till 22:30.",
    chef_bio: { chef_name: null, roles: ['Operated by 有限会社アユム (invoice register)'], origin: null,
      background: 'The qualified-invoice holder is 有限会社アユム of Kita-ku, Kyoto (NTA). Our crawl also lists a sister café, きわみ saredoフレンチトーストかふぇ. Tabelog’s introduction: a café and dining spot five minutes from Kyoto Station with Chicago-style pizza, soup pasta and drinks for celebrations.',
      philosophy: null,
      specialty: 'Shiba-zuke tartar chicken nanban plate; Chicago pizza.',
      anecdotes: [
        { text: 'A September 2026 solo business traveller found a line on the stairs before opening even in the rain.', source: R + 'B536316749/' },
        { text: 'A September 2026 holiday diner was told the food would take about 40 minutes and warned others about the steep stairs.', source: R + 'B536265184/' },
        { text: 'An October 2026 visitor drawn in by the pizza sign learned it is served only at night.', source: R + 'B537207957/' },
      ],
      japanese_sources_summary: '食べログ: saredoかふぇ & DINING 京都店、カフェ・ピザ・パスタ、下京区七条通新町東入ル夷之町727 アイエスビル2F、京都駅から徒歩5分、七条新町の交差点から10秒、毎日 11:30〜22:30 (L.O. 22:00)、予約可、チャージなし、カード・電子マネー・QR可、30席、禁煙、英語メニュー、子ども可、インボイス T1130002007467 (有限会社アユム、京都市北区)。公式紹介: シカゴピザ、スープパスタ、お祝いにも、食べ飲み放題コース3,980円から、3時間飲み放題4,980円。口コミ (2026年、英語): 2,000円以下のランチ、しば漬けタルタルのチキン南蛮と海老フライ、サラダプレート、クレープ付きのランチ、もちもちのスープパスタ、夜だけのシカゴピザ、サングリア、昼は予約で満席、開店前に階段に行列、急な階段、料理まで40分の日も。',
      confidence: 'medium', sources: [TB, INV, R + 'B247067646/', R + 'B534538547/', R + 'B534746411/', R + 'B534857575/', R + 'B535113922/', R + 'B536021959/', R + 'B536265184/', R + 'B536316749/', R + 'B536757552/', R + 'B537207957/', R + 'B537300292/', R + 'B538654037/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); book for lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条通新町東入ル夷之町727 アイエスビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with online booking; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989059, 135.757036); cross-checked: GSI 京都府京都市下京区夷之町727番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B536021959/'],
    price_note: 'Course prices from Tabelog; lunch under ¥2,000 per an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Shiba-zuke tartar chicken nanban plate lunch', '', 'Lunch', 'no', 'no', '', 'nanban'),
      it('', '', 'Soup pasta', '', 'Pasta', 'no', 'ask', '', 'soup_pasta'),
      it('', '', 'Chicago deep-dish pizza (dinner)', '', 'Pizza', 'no', 'no', 'Dinner only.', 'chicago_pizza'),
      it('', '', 'All-you-can-eat-and-drink course', '¥3,980', 'Course', 'no', 'no', 'Tabelog.', 'course'),
    ] }, {
    cuisine: '京都駅近くのカフェダイニング (食べログ)・2,000円以下のランチプレート: しば漬けタルタルのチキン南蛮に海老フライ、スープ、ご飯、サラダプレート、クレープ付きのプレートランチ (2026年8〜10月)・もちもちのスープパスタ (2026年9〜10月)・夜はシカゴピザ、食べ飲み放題のコース3,980円から、3時間飲み放題のコース4,980円 (食べログ、2026年10月)・アイスやホイップを添えた鉄板のクレープ、サングリア (2026年8〜10月)',
    neighborhood: '七条新町。京都駅から徒歩5分',
    gf_detail: '要確認。唐揚げや海老フライのランチプレート、スープパスタ、シカゴピザ、クレープ。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。唐揚げ、チーズのピザ、クリームのクレープ (口コミ)。',
    notes: '[カフェダイニング・京都駅近くの七条新町、プレートランチとシカゴピザ] 京都駅から徒歩5分のビル2階の居心地のいいカフェダイニング。昼は野菜たっぷりのプレートランチ (人気はしば漬けタルタルのチキン南蛮)、もちもちのスープパスタ、大きな鉄板クレープ。夜はシカゴピザと飲み放題のコース。昼は予約で埋まるので予約を。毎日22時半まで。',
  });
}

// ================================================================ 京煎堂 祇園本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26004717/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_kyosendo_gion', name: '京煎堂 祇園本店 (Kyosendo Gion)', category: 'OMNI',
    lat: 35.00373296787537, lng: 135.7756258603385, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Matcha parfaits with shiratama and cream, warabi mochi, mitarashi dango, matcha soft serve and a matcha mille-feuille; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soft serve, cream and parfaits (reviews).',
    hours_raw: '11:00–18:00 daily; irregular closures (Tabelog). No reservations. Cards, transport IC, e-money and QR (Tabelog). Shop on the ground floor, tea room upstairs — 12 seats downstairs, 42 upstairs; a ramp at the eat-in space; non-smoking; strollers welcome (Tabelog; August 2026). Take-away soft serve and mitarashi dango at the front (August 2026). On Shijo-dori east of Hanamikoji, 4 min walk from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Shijo-dori east of Hanamikoji — 4 min walk from Gion-Shijo Stn',
    cuisine: 'A rice-cracker maker’s tea room, known for the matcha parfait (Tabelog) · matcha parfait of 100% Uji matcha ¥1,500, with a "full customisation" of matcha shiratama and matcha cream, extra matcha powder for a fee (September–November 2026) · warabi mochi; matcha and red-bean mille-feuille with cold matcha; kakigori (August 2026) · take-away matcha soft serve ¥500 and warm mitarashi dango (August 2026) · senbei and other sweets to take home (August 2026)',
    website: 'https://kyosen.do/', gmaps: gm('京煎堂 祇園本店'), menu_url: TB,
    notes: "[Matcha sweets · Gion on Shijo, a rice-cracker maker's tea room] The Gion flagship of a Kyoto rice-cracker maker: senbei and soft serve downstairs, a calm tea room upstairs serving a towering matcha parfait (about ¥1,500, upgradeable to matcha everything), warabi mochi and a matcha mille-feuille. Usually no queue on weekday afternoons. Open daily 11:00–18:00.",
    chef_bio: { chef_name: null, roles: ['株式会社京煎堂 (Uji); people not named'], origin: null,
      background: 'Tabelog notes it is a tea room run by a long-established rice-cracker shop, with the matcha parfait the most popular item. 株式会社京煎堂 is registered in Uji (SalesNow company database); the brand also sells at JR Kyoto Isetan (our crawl) and at Hankyu Sannomiya (August 2026 review).',
      philosophy: null,
      specialty: 'Uji matcha parfait.',
      anecdotes: [
        { text: 'An August 2026 visitor rated the warabi mochi above the famous matcha parfait.', source: R + 'B532978412/' },
        { text: 'A September 2026 diner took the "full customisation" so even the shiratama and cream were matcha.', source: R + 'B535571348/' },
        { text: 'An August 2026 guest arrived five minutes before opening and was the first customer.', source: R + 'B534286976/' },
      ],
      japanese_sources_summary: '食べログ: 京煎堂 祇園本店、甘味処・和菓子・カフェ、東山区四条通花見小路東入り祇園町南側565-1、祇園四条駅6番出口から徒歩4分、毎日 11:00〜18:00、不定休、予約不可、カード・電子マネー・QR可、54席 (1階12、2階42)、禁煙、テイクアウト、子ども・ベビーカー可、老舗の煎餅屋が営む茶房、抹茶パフェが人気。会社: 株式会社京煎堂 (宇治市、SalesNow)。口コミ (2026年、英語): 宇治抹茶100%の抹茶パフェ1,500円、抹茶白玉と抹茶クリームにする「フルカスタム」、抹茶パウダー追加は有料、わらび餅、抹茶と小豆のミルフィーユ、冷たい抹茶、かき氷、抹茶ソフト500円、温かいみたらし団子、1階は売店で2階がカフェ、スロープ、阪急三宮の売り場、伊勢丹にも。',
      confidence: 'medium', sources: [TB, R + 'B503428421/', R + 'B532978412/', R + 'B533651956/', R + 'B533783938/', R + 'B534035446/', R + 'B534286976/', R + 'B534667498/', R + 'B535554713/', R + 'B535571348/', R + 'B535759492/', R + 'B536769286/', R + 'B538505357/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order downstairs for take-away; tea room upstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区四条通花見小路東入り祇園町南側565-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003733, 135.775626); cross-checked: GSI 京都府京都市東山区祇園町南側565番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535571348/', R + 'B503428421/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Matcha parfait (100% Uji matcha)', '¥1,500', 'Parfait', 'ask', 'no', 'Full customisation available.', 'matcha_parfait'),
      it('', '', 'Matcha soft serve (take-away)', '¥500', 'Sweets', 'ask', 'no', 'August 2026.', 'soft_serve'),
      it('', '', 'Warabi mochi', '', 'Sweets', 'ask', 'ask', '', 'warabi'),
    ] }, {
    cuisine: '煎餅屋の茶房、抹茶パフェで知られる (食べログ)・宇治抹茶100%の抹茶パフェ1,500円、抹茶白玉と抹茶クリームの「フルカスタム」、抹茶パウダーの追加は有料 (2026年9〜11月)・わらび餅、冷たい抹茶と抹茶と小豆のミルフィーユ、かき氷 (2026年8月)・持ち帰りの抹茶ソフト500円と温かいみたらし団子 (2026年8月)・持ち帰りの煎餅など (2026年8月)',
    neighborhood: '祇園、四条通の花見小路の東。祇園四条駅から徒歩4分',
    gf_detail: '要確認。白玉やクリームの抹茶パフェ、わらび餅、みたらし団子、抹茶ソフト、抹茶のミルフィーユ。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。ソフトクリーム、クリーム、パフェ (口コミ)。',
    notes: '[抹茶スイーツ・四条通の祇園、煎餅屋の茶房] 京都の煎餅屋の祇園本店。1階は煎餅とソフトクリーム、2階の落ち着いた茶房で、高く盛った抹茶パフェ (1,500円ほど、すべて抹茶にもできる)、わらび餅、抹茶のミルフィーユを。平日の午後はたいてい並ばずに。毎日11:00〜18:00。',
  });
}

save();
