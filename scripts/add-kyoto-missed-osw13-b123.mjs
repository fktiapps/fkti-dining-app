// Kyoto priority (kyoto-missed), worker osw13, batch 123 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 半々, Ken蔵, 余白Store, SCENE FACTORY COFFEE and SPACE. Brands checked against queue-status, data/kyoto.json, than.co.jp/brands and 株式会社WILL (none match; 余白Store is the sake-shop offshoot of 両川 kyoto_ryosen and 澄吉 kyoto_sumiyoshi_karasuma_oike — different format, flagged).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-123');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26042094', 'retail food shop: カケル コモジノア — Tabelog states "This establishment is a wine shop and not a restaurant"; a white-wine and champagne shop with paid tastings and terrace tables (2024–2026 reviews)');
skip('26039160', 'brand in data, same concept: here Kyoto Kiyomizu is the second shop (opened 16 March 2023) of the coffee-and-canelé café "here", whose first shop is kyoto_here_coffee near Karasuma Oike (2024–2026 reviews). Note for the coordinator: a May 2024 reviewer says its Kiyomizu-only matcha omelette is made with rice flour and is gluten-free');

// ================================================================ 半々
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26042298/'; const R = TB + 'dtlrvwlst/';
  const L = ['12:30', '15:00'], D = ['18:00', '22:00'];
  put({
    id: 'kyoto_hanhan_shogoin', name: '半々 (Han Han)', category: 'OMNI',
    lat: 35.015357, lng: 135.773271, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a Japanese omakase with tempura, soy-marinated and miso-marinated dishes and sauces (2024–2025 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the courses are built half on meat — tripe, beef, pork, chicken broth — and half on vegetables (2024–2026 reviews).',
    hours_raw: 'Tabelog: Tue and Thu 18:00–22:00 (food L.O. 20:00); Wed, Fri and Sat 12:30–15:00 (L.O. 13:00) and 18:00–22:00; closed Sunday and Monday. Reservations only. Dinner omakase about ¥20,000 (December 2024 – February 2025); lunch is rice dishes built on vegetables, chicken and pork (March 2025). No service charge (「無し」, Tabelog Japanese original). 8 seats around a large shared table; private hire on request. Non-smoking; wheelchair accessible. Cards and QR codes; no e-money. In Shogoin, 4 min from Keihan Jingu-Marutamachi.',
    hours: { 1: [D], 2: [L, D], 3: [D], 4: [L, D], 5: [L, D] }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shogoin — 4 min from Jingu-Marutamachi',
    cuisine: 'An eight-seat Japanese omakase run by a couple, cooked "half and half" — meat and vegetables in balance, much of it over charcoal (Tabelog; 2024–2026 reviews) · dinner omakase about ¥20,000 (2024–2025): honeycomb tripe with vinegar miso; Shogoin daikon tempura with bresaola; chicken-and-kombu broth with thick fried sesame tofu; cold shabu-shabu; watercress the chef picks himself; Shiina beef sirloin; charcoal-grilled beef from a mature cow; meat-tartare nori roll; TOKYO X pork shabu-shabu; miso-marinated pork; salt-milk ice cream (December 2024) · Brussels sprouts; Veneto white asparagus; homemade salami salad; rice with a soft-boiled egg (February 2025) · nagaimo hand roll; takikomi gohan (March 2025) · lunch rice dishes with vegetables, chicken and pork',
    website: null, gmaps: gm('半々 聖護院'), menu_url: null,
    notes: '[Japanese omakase · Shogoin, meat and vegetables "half and half"] A calm eight-seat table where a kaiseki-trained chef and his partner serve a charcoal-scented omakase balancing beef, pork and tripe with seasonal vegetables. Dinner about ¥20,000, lunch rice dishes on some days. Reservations only. Closed Sun and Mon.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed; kaiseki-trained)', 'Co-owner (unnamed; the chef\'s partner)'], origin: null,
      background: 'A February 2025 reviewer calls it a restaurant run by a couple he knows, the head chef coming from kaiseki and cooking inventive Japanese food around his love of meat over charcoal; a December 2024 diner heard the chef trained at several places, including time at "Kiu", and that the room sometimes runs as a bar later in the evening. An April–June 2026 regular finds the staff flexible and orders extra dishes, meat and fish, every visit.',
      philosophy: 'Half meat, half vegetables (December 2024 review).',
      specialty: 'Meat-and-vegetable omakase; charcoal cooking.',
      anecdotes: [
        { text: 'December 2024: "This restaurant offers a course featuring an equal balance of vegetables and meat, with no fish involved… While the meat dishes are abundant, they\'re well-balanced, so it\'s not overwhelming."', source: R + 'B498574141/' },
        { text: 'February 2025: "A restaurant run by a couple I know. The head chef, who comes from a kaiseki background, creates innovative Japanese dishes incorporating his love for meats."', source: R + 'B500507981/' },
        { text: 'February 2025: "The salad made with watercress picked by the chef himself… was simple yet highlighted the freshness beautifully."', source: R + 'B503609003/' },
      ],
      japanese_sources_summary: '食べログ: 半々、日本料理、左京区聖護院東寺領町7-2、京阪神宮丸太町から徒歩4分、火・木18:00〜22:00 (料理L.O.20:00)、水・金・土12:30〜15:00 (L.O.13:00)・18:00〜22:00、日・月休み、完全予約制、サービス料「無し」、8席、禁煙、車いす可、カード・QR可。口コミ (2024年12月〜2026年6月、英語): 夫婦で営む (2025年2月)、懐石出身の料理人、肉と野菜が半々のおまかせ約20,000円、ハチノスの酢味噌、聖護院大根の天ぷらとブレザオラ、鶏と昆布のだし、Shiina牛のサーロイン、成牛の牛肉の炭火焼き、肉のタルタルの海苔巻き、TOKYO Xのしゃぶしゃぶ、塩ミルクのアイス、昼は野菜・鶏・豚のご飯もの、夜遅くはバーになる日もあるとの声、2026年は魚も。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B498574141', 'B500507981', 'B503547441', 'B503609003', 'B511021982', 'B527657135'])) },
    cultural_comfort: { level: 'japanese', note: 'Reservations only; one shared table; omakase.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市左京区聖護院東寺領町7-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to June 2026.' },
    pin_source: `Tabelog ${TB} (35.015357, 135.773271); GSI matched only the town 京都府京都市左京区聖護院東寺領町 (about 66m), not the lot, so approximate; nearest pin kyoto_mati_shogoin 13.3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B498574141/', R + 'B500507981/'],
    price_note: 'Course price from December 2024 – February 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Dinner omakase (meat and vegetables)', 'about ¥20,000', 'Course', 'no', 'no', 'December 2024 – February 2025.', 'dinner_omakase'),
      it('', '', 'Lunch rice dishes (vegetables, chicken, pork)', '', 'Lunch', 'ask', 'no', 'March 2025.', 'lunch_rice'),
    ] }, {
    cuisine: '夫婦で営む8席の日本料理のおまかせ。肉と野菜を「半々」に、炭火を多用 (食べログ、2024〜2026年の口コミ)・夜のおまかせ約20,000円 (2024〜2025年): ハチノスの酢味噌、聖護院大根の天ぷらとブレザオラ、鶏と昆布のだしと厚いごま豆腐の揚げ物、冷しゃぶ、料理人が摘んだクレソン、Shiina牛のサーロイン、成牛の牛肉の炭火焼き、肉のタルタルの海苔巻き、TOKYO Xのしゃぶしゃぶ、豚の味噌漬け、塩ミルクのアイス (2024年12月)・芽キャベツ、ヴェネトの白アスパラガス、自家製サラミのサラダ、半熟卵のご飯 (2025年2月)・長芋の手巻き、炊き込みご飯 (2025年3月)・昼は野菜、鶏、豚のご飯もの',
    neighborhood: '聖護院。神宮丸太町から徒歩4分',
    gf_detail: 'グルテンフリーではない: 天ぷら、しょうゆや味噌に漬けた料理、たれのある日本料理のおまかせ (2024〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: コースは半分が肉 (ハチノス、牛、豚、鶏のだし)、半分が野菜 (2024〜2026年の口コミ)。',
    notes: '[日本料理のおまかせ・聖護院、肉と野菜を「半々」] 懐石出身の料理人とパートナーが営む、落ち着いた8席のテーブル。炭火の香る牛、豚、ハチノスと旬の野菜をバランスよく組んだおまかせ。夜は約20,000円、昼はご飯ものの日も。完全予約制。日・月休み。',
  });
}

// ================================================================ Ken蔵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26003148/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '25:00']);
  put({
    id: 'kyoto_kenzo_oike', name: 'Ken蔵 (Kenzo)', category: 'OMNI',
    lat: 35.011633, lng: 135.757458, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: dashi- and soy-based dishes, nagaimo tempura, fried dishes, nama-fu, yakisoba and yatsuhashi (2019–2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, Tanba chicken, liver and heart, wings, clam chowder, and dashi in most dishes (2019–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 18:00–25:00; closed Sunday. Reservations taken. SMOKING ALLOWED (Tabelog). Cards. 31 seats: counter, tatami and sunken seating, private rooms for 4 to 30; private hire 20–50. Mobile ordering (October 2023). On the ground floor of the Octopia Oike building, a few minutes from Karasuma Oike.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Koromonotana-dori south of Oshikoji — 219 m from Karasuma Oike',
    cuisine: 'A dashi-driven Kyoto izakaya open to 1 am, with a seasonal handwritten menu, chicken and sashimi, and sake (Tabelog; 2017–2026 reviews) · starter of freshly made mochi soaked in dashi (February 2025) · sashimi platter: whelk, fresh yuba, bonito, sea bream, flounder, octopus (February 2025); Spanish mackerel and yuba (April 2026) · Tanba chicken grilled with salt; chicken tataki; liver and heart; chicken wings (2019–2024) · simmered lotus root; fried nagaimo; nama-fu dengaku (2022–2024) · yuba clam chowder; Kyoto-style yakisoba to finish (February 2025) · yatsuhashi with cheese and honey, and yatsuhashi ice cream (2022–2025) · sake, Heartland and Suntory draft beer',
    website: null, gmaps: gm('Ken蔵 烏丸御池'), menu_url: null,
    notes: '[Izakaya · Karasuma Oike, dashi and sake till 1 am] A warm, stylish izakaya where everything starts from good dashi: mochi in broth as the starter, fresh sashimi, Tanba chicken, yuba clam chowder, and yatsuhashi with cheese and honey. About ¥4,000–8,000. Private rooms. Smoking allowed. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers describe a friendly, chatty owner with a "wild yet gentle" personality who writes the menu by hand (2022), regulars of seven-plus years, and more overseas guests since 2023. A March 2019 reviewer mentions sake connected to the "Shoutoku" brewery. Criticisms: a long wait for the salt-grilled chicken (December 2023) and, in 2017, pricey and average.',
      philosophy: null,
      specialty: 'Dashi-based izakaya dishes; sashimi; chicken.',
      anecdotes: [
        { text: 'February 2025: "The first dish served was tsukidashi, consisting of freshly made mochi soaked in dashi… Just from this, I felt, \'This place has great potential!\'"', source: R + 'B501787804/' },
        { text: 'November 2022: "The owner is friendly and chatty, and I highly recommend sitting at the counter! The simmered lotus root and the fried nagaimo are dishes I crave time and time again."', source: R + 'B227797050/' },
        { text: 'December 2023: "The \'Tanba Chicken Salt Grilled\' took a while to arrive, and I started to wonder if it had been forgotten."', source: R + 'B476683091/' },
      ],
      japanese_sources_summary: '食べログ: Ken蔵、居酒屋・日本料理・海鮮、中京区衣棚押小路下ル下妙覚寺町192-1 オクトピア御池1F、烏丸御池から219m、月〜土18:00〜25:00、日曜休み、予約可、喫煙可、カード可、31席、個室 (4〜30名)、カウンター・座敷・掘りごたつ。口コミ (2017年12月〜2026年4月、英語): だしがおいしい居酒屋、お通しはつきたての餅のだし浸し、刺身の盛り合わせ (つぶ貝、生湯葉、かつお、鯛、ひらめ、たこ)、丹波の鶏の塩焼き、鶏のたたき、れんこんの煮物、長芋の揚げ物、生麩田楽、湯葉のクラムチャウダー、京風焼きそば、チーズとはちみつの八ッ橋、八ッ橋アイス、気さくでよく話す店主、モバイルオーダー (2023年10月)、塩焼きが遅かったとの声 (2023年12月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B103682709', 'B227797050', 'B413400113', 'B460628134', 'B476683091', 'B478211411', 'B494579941', 'B497894648', 'B501787804', 'B510243595', 'B529344377'])) },
    cultural_comfort: { level: 'friendly', note: 'Mobile ordering; counter seats recommended; smoking allowed.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区衣棚押小路下ル下妙覚寺町192-1 オクトピア御池1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to April 2026.' },
    pin_source: `Tabelog ${TB} (35.011633, 135.757458); GSI lot 京都府京都市中京区下妙覚寺町192番地 about 11m away; nearest pin kyoto_nikuya_kagura 33.3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B227797050/', R + 'B501787804/'],
    price_note: 'No dish prices given; about ¥4,000–8,000 per person (2023–2025 reviews).', last_checked: TODAY, items: [
      it('', '', 'Sashimi platter', '', 'Sashimi', 'ask', 'no', 'February 2025.', 'sashimi_moriawase'),
      it('', '', 'Tanba chicken grilled with salt', '', 'Grilled', 'ask', 'no', 'December 2023.', 'tanba_shioyaki'),
      it('', '', 'Yuba clam chowder', '', 'Soup', 'no', 'no', 'February 2025.', 'yuba_chowder'),
      it('', '', 'Yatsuhashi with cheese and honey', '', 'Dessert', 'no', 'no', '2024–2025.', 'yatsuhashi_cheese'),
    ] }, {
    cuisine: '深夜1時まで開く、だしが決め手の京都の居酒屋。季節の手書きの品書きに鶏や刺身、日本酒 (食べログ、2017〜2026年の口コミ)・つきたての餅をだしに浸したお通し (2025年2月)・刺身の盛り合わせ: つぶ貝、生湯葉、かつお、鯛、ひらめ、たこ (2025年2月)、鰆と湯葉 (2026年4月)・丹波の鶏の塩焼き、鶏のたたき、レバーとハツ、手羽 (2019〜2024年)・れんこんの煮物、長芋の揚げ物、生麩田楽 (2022〜2024年)・湯葉のクラムチャウダー、締めの京風焼きそば (2025年2月)・チーズとはちみつの八ッ橋、八ッ橋アイス (2022〜2025年)・日本酒、ハートランドやサントリーの生ビール',
    neighborhood: '衣棚通、押小路の南。烏丸御池から219m',
    gf_detail: 'グルテンフリーではない: だしやしょうゆの料理、長芋の天ぷら、揚げ物、生麩、焼きそば、八ッ橋 (2019〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 刺身、丹波の鶏、レバーとハツ、手羽、クラムチャウダー、ほとんどの料理にだし (2019〜2026年の口コミ)。',
    notes: '[居酒屋・烏丸御池、夜1時までだしと日本酒] すべてはおいしいだしから始まる、温かくおしゃれな居酒屋。お通しはだしに浸した餅、新鮮な刺身、丹波の鶏、湯葉のクラムチャウダー、チーズとはちみつの八ッ橋。4,000〜8,000円ほど。個室あり。喫煙可。日曜休み。',
  });
}

// ================================================================ 余白Store
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040384/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '20:00']);
  put({
    id: 'kyoto_yohaku_store', name: '余白Store (Yohaku Store)', category: 'OMNI',
    lat: 35.012243, lng: 135.757927, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: snacks include soy-simmered beef tendon and fried tofu, nanban-zuke chicken and Nara-zuke butter on biscuits (2023–2025 reviews); craft beer is wheat/barley-based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the snacks are fish, beef, chicken and sake-lees oden from the sister izakaya (2023–2025 reviews).',
    hours_raw: 'Tabelog: daily 10:00–20:00, irregular closures. No reservations. A sake shop with a standing counter for about 4–6; bottles to buy. Sake 60 ml from ¥500, 120 ml from ¥900; wine 60 ml from ¥600 (September 2024). No cards or e-money; QR codes accepted. Snacks of about ¥500 come from the sister izakaya 両川 next door and 澄吉. On Oshikoji-dori west of Muromachi, 4 min from Karasuma Oike.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Oshikoji-dori west of Muromachi — 4 min from Karasuma Oike',
    cuisine: 'A tiny standing sake shop opening at 10 am, the offshoot of the izakaya 両川 next door, pouring owner-chosen sake by the 60 ml with ¥500 snacks from its kitchens (Tabelog; 2023–2025 reviews) · sake 60 ml from ¥500, 120 ml from ¥900; wine from ¥600; craft beer from Wood Mill Brewery, including a yuzu ale made with 両川 (2023–2024) · Matsusaka beef tendon with thick fried tofu; sliced sea bream or Spanish mackerel; braised fish; chicken-wing oyster stew; Kibi chicken nanban-zuke; oden with sake lees; potato salad (2023–2024) · the owner\'s Nara-zuke butter on biscuits (May 2024)',
    website: null, gmaps: gm('余白Store 押小路'), menu_url: null,
    notes: '[Standing sake bar · Oshikoji-Muromachi, morning sake with izakaya snacks] A pocket-sized sake shop with a stand-up counter, open from 10 am: try owner-picked sake by the 60 ml (from ¥500) with ¥500 plates from the acclaimed izakaya 両川 next door, then buy a bottle. About ¥1,500. QR payment, no cards.',
    chef_bio: { chef_name: null, roles: ['Shop manager (unnamed; runs the counter)'], origin: null,
      background: 'Opened in November 2023 as a sake shop and standing bar by the people behind the izakaya 両川 (kyoto_ryosen, next door) and 澄吉 (kyoto_sumiyoshi_karasuma_oike), and described as their "antenna shop" (2024–2025 reviews). A September 2024 reviewer met the woman who runs it alone, chooses every sake herself after tasting and visits breweries on her days off.',
      philosophy: 'A single well-chosen bottle rather than a huge range (September 2025 review).',
      specialty: 'Owner-picked sake by the glass; izakaya snacks.',
      anecdotes: [
        { text: 'September 2024: "The sake selection is carefully chosen by the woman running the store, as she has personally tasted everything, and on her days off, she even visits sake breweries."', source: R + 'B492467635/' },
        { text: 'December 2023: "We had sashimi of sawara, stewed wagyu tendon with thick fried tofu, and oden with sake lees… all of which were affordable and incredibly tasty."', source: R + 'B481641697/' },
        { text: 'May 2025: "I was only shown the bottled beers, even though it seemed like there were two TAP beers available… It was a bit disappointing."', source: R + 'B506620396/' },
      ],
      japanese_sources_summary: '食べログ: 余白Store、立ち飲み、中京区押小路通室町西入蛸薬師町293、烏丸御池から徒歩4分、毎日10:00〜20:00、不定休、予約不可、6席、カード・電子マネー不可、QR可、日本酒・ワインにこだわる。口コミ (2023年12月〜2025年12月、英語): 2023年11月開店、隣の居酒屋「両川」と「澄吉」の姉妹店 (アンテナショップ) の酒屋の角打ち、日本酒60mlで500円から、120mlで900円から、ワイン60mlで600円から、Wood Mill Breweryのクラフトビール、両川と澄吉のおつまみ約500円 (松阪牛のすじと厚揚げの煮込み、鰆の刺身、手羽と牡蠣の煮込み、Kibi鶏の南蛮漬け、酒粕のおでん)、店主手作りの奈良漬けバター、ひとりで店を切り盛りする女性が酒を選び蔵元も訪ねる (2024年9月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B475883652', 'B477493877', 'B478631638', 'B481641697', 'B488616314', 'B491756715', 'B492467635', 'B506620396', 'B516497239', 'B518431579'])) },
    cultural_comfort: { level: 'friendly', note: 'Standing only, a few people at a time; staff help choose sake.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区押小路通室町西入蛸薬師町293',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2024 to December 2025.' },
    pin_source: `Tabelog ${TB} (35.012243, 135.757927); GSI lot 京都府京都市中京区蛸薬師町293番地 about 10m away; nearest pin kyoto_ryosen 8.2m (sister izakaya, same lot number); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B492467635/', R + 'B481641697/'],
    price_note: 'Prices from a September 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Sake by the glass (60 ml)', 'from ¥500', 'Drink', 'ask', 'ask', 'September 2024; 120 ml from ¥900.', 'sake_60ml'),
      it('', '', 'Matsusaka beef tendon and thick fried tofu stew', 'about ¥500', 'Snack', 'no', 'no', 'December 2023.', 'gyusuji_atsuage'),
      it('', '', 'Chicken-wing oyster stew', '¥500', 'Snack', 'no', 'no', 'September 2024.', 'tebasaki_kaki'),
      it('', '', 'Nara-zuke butter with biscuits', '', 'Snack', 'no', 'no', 'May 2024.', 'narazuke_butter'),
    ] }, {
    cuisine: '朝10時から開く小さな立ち飲みの酒屋。隣の居酒屋「両川」の姉妹店で、店主が選ぶ日本酒を60mlから、両川の厨房の500円のおつまみとともに (食べログ、2023〜2025年の口コミ)・日本酒60ml 500円から、120ml 900円から、ワイン600円から、両川とのコラボのゆずエールなどWood Mill Breweryのクラフトビール (2023〜2024年)・松阪牛のすじと厚揚げの煮込み、鯛や鰆の刺身、魚の煮付け、手羽と牡蠣の煮込み、Kibi鶏の南蛮漬け、酒粕のおでん、ポテトサラダ (2023〜2024年)・店主手作りの奈良漬けバターとビスケット (2024年5月)',
    neighborhood: '押小路通、室町の西。烏丸御池から徒歩4分',
    gf_detail: 'グルテンフリーではない: おつまみにしょうゆで煮たすじと厚揚げ、鶏の南蛮漬け、奈良漬けバターとビスケット (2023〜2025年の口コミ)。クラフトビールは麦。',
    vegan_detail: 'ヴィーガン不可: おつまみは姉妹店の魚、牛、鶏、酒粕のおでん (2023〜2025年の口コミ)。',
    notes: '[立ち飲みの日本酒・押小路室町、朝から日本酒と居酒屋のつまみ] 朝10時から開く、立ち飲みカウンターのある小さな酒屋。店主が選ぶ日本酒を60ml 500円から、隣の評判の居酒屋「両川」の500円のおつまみとともに。気に入れば瓶も買える。1,500円ほど。QR決済可、カード不可。',
  });
}

// ================================================================ SCENE FACTORY COFFEE and SPACE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26039394/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:30', '17:00']);
  put({
    id: 'kyoto_scene_factory_coffee', name: 'SCENE FACTORY COFFEE and SPACE', category: 'OMNI',
    lat: 34.996023, lng: 135.756599, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: croissant sandwiches, carrot cake and cookies (2024–2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: croissants with cream, cheese cream, bacon or meringue, and milk-based lattes (2024–2026 reviews); no plant milk is mentioned.',
    hours_raw: 'Tabelog: daily 8:30–17:00 (drinks L.O. 16:30); until 31 March 2026 it was 8:00–18:00; irregular closures (October 2025 review). No reservations. Croissant sets with a drink about ¥1,550–1,570. 26 seats at small tables and a hexagonal communal table; non-smoking. Cards, IC cards and QR codes. On the ground floor of a hotel at the south-west corner of Shinmachi and Gojo, 5 min from Gojo Station. Opened 12 December 2022 (October 2025 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi-Gojo corner — 5 min from Gojo',
    cuisine: 'The airy white café of the roaster SCENE FACTORY COFFEE ROASTERS, known for seasonal fruit croissant sandwiches and blends for different "scenes" of the day (Tabelog; 2024–2026 reviews) · seasonal croissant sets with a drink: spring strawberry ¥1,550 (April 2024; February 2026), peach with cheese cream and vanilla ice cream ¥1,570 (July–August 2025), autumn chestnut "Yama" croissant with meringue and cassis (October 2025) · bacon croissant (September 2025) · carrot cake; s\'mores cookie (March–April 2026) · coffee of the day; decaf; café latte, vanilla or caramel latte; lemon squash',
    website: null, gmaps: gm('SCENE FACTORY COFFEE and SPACE 五条'), menu_url: null,
    notes: '[Café · Gojo-Shinmachi, roaster café with fruit croissants] A quiet, spacious white café from the roaster SCENE FACTORY: fruity single coffees and smooth lattes with seasonal croissant sandwiches — strawberry, peach, chestnut — about ¥1,570 with a drink. Good for working; many overseas guests. Open daily from 8:30.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The café of SCENE FACTORY COFFEE ROASTERS, opened 12 December 2022 on the ground floor of a hotel at Shinmachi-Gojo (2025–2026 reviews); the hotel is not named. Reviewers praise friendly staff and quiet, well-spaced seats; one April 2026 diner found the service dry and guests on speakerphone noisy.',
      philosophy: 'Coffee blends designed for different everyday "scenes" (July 2026 review).',
      specialty: 'Seasonal fruit croissant sandwiches; lattes.',
      anecdotes: [
        { text: 'July 2025: "The croissant was wonderfully flaky, and the cheese cream was rich and decadent. It paired perfectly with the juicy peach."', source: R + 'B510734192/' },
        { text: 'October 2025: "Inspired by Mont Blanc, featuring chestnut paste and fresh cream, topped with meringue resembling snow-capped mountains, and accented with cassis sauce."', source: R + 'B516680289/' },
        { text: 'April 2026: "The carrot cake had a thin layer of cream on top, which left me feeling a bit unsatisfied… The service was a bit dry."', source: R + 'B525641455/' },
      ],
      japanese_sources_summary: '食べログ: SCENE FACTORY COFFEE and SPACE、カフェ、下京区新町通五条下ル蛭子町105 1F、五条から295m、毎日8:30〜17:00 (ドリンクL.O.16:30)、2026年3月31日までは8:00〜18:00、予約不可、26席、禁煙、カード・交通系IC・QR可。口コミ (2024年4月〜2026年7月、英語): SCENE FACTORY COFFEE ROASTERSのカフェ、2022年12月12日開店、新町五条の南西角のホテル1階、季節のフルーツのクロワッサンサンドのセット (いちご1,550円、桃1,570円、栗の「山」クロワッサン)、ベーコンのクロワッサン、キャロットケーキ、スモアクッキー、本日のコーヒー、デカフェ、カフェラテ、海外の客が多い、静かで広い、接客がそっけないとの声 (2026年4月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B483067016', 'B510734192', 'B511089765', 'B514166398', 'B516680289', 'B517058488', 'B524782933', 'B525641455', 'B532785005'])) },
    cultural_comfort: { level: 'english_friendly', note: 'Popular with overseas visitors; quiet, spacious seating.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区新町通五条下ル蛭子町105 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with hours updated for April 2026; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.996023, 135.756599); GSI lot 京都府京都市下京区蛭子町105番地 about 17m away; nearest pin kyoto_maruni_cafe 54.9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B483067016/', R + 'B510734192/', R + 'B524782933/'],
    price_note: 'Set prices from 2024–2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Seasonal fruit croissant set (with drink)', '¥1,550–1,570', 'Set', 'no', 'no', 'April 2024 – February 2026.', 'croissant_set'),
      it('', '', 'Carrot cake', '', 'Sweets', 'no', 'no', 'March–April 2026.', 'carrot_cake'),
      it('', '', 'Café latte', '', 'Drink', 'ask', 'no', '2025–2026.', 'cafe_latte'),
      it('', '', 'Coffee of the day', '', 'Drink', 'ask', 'ask', 'March 2026.', 'coffee_of_day'),
    ] }, {
    cuisine: '焙煎所SCENE FACTORY COFFEE ROASTERSの白く明るいカフェ。季節のフルーツのクロワッサンサンドと、1日のさまざまな「シーン」に合わせたブレンドで知られる (食べログ、2024〜2026年の口コミ)・飲み物付きの季節のクロワッサンのセット: 春のいちご1,550円 (2024年4月、2026年2月)、チーズクリームとバニラアイスの桃1,570円 (2025年7〜8月)、メレンゲとカシスの秋の栗の「山」クロワッサン (2025年10月)・ベーコンのクロワッサン (2025年9月)・キャロットケーキ、スモアクッキー (2026年3〜4月)・本日のコーヒー、デカフェ、カフェラテ、バニラやキャラメルのラテ、レモンスカッシュ',
    neighborhood: '新町五条の角。五条から徒歩5分',
    gf_detail: 'グルテンフリーではない: クロワッサンのサンド、キャロットケーキ、クッキー (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: クリーム、チーズクリーム、ベーコン、メレンゲのクロワッサン、牛乳のラテ (2024〜2026年の口コミ)。植物性ミルクの記載はない。',
    notes: '[カフェ・五条新町、焙煎所のカフェとフルーツのクロワッサン] 焙煎所の、静かで広い白いカフェ。フルーティーなコーヒーやなめらかなラテに、いちご、桃、栗など季節のクロワッサンサンド。飲み物付きで1,570円ほど。作業にも向く。海外の客が多い。毎日8時半から。',
  });
}

save();
