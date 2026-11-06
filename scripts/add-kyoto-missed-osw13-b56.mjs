// Kyoto priority (kyoto-missed), worker osw13, batch 56 — lane: Tabelog id mod 6 = 0.
// Core: comorebi Ramen house, ドゥ コション. Notable: 京都生ショコラ オーガニックティーハウス, FACTORY KAFE 工船.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-56');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26036592', 'chain: うなぎ四代目菊川 has branches in Fukuoka (Nakasu, the original), Osaka (Namba), Tokyo Station, Nagoya (Global Gate), Hiroshima Station, Karuizawa, Haneda and two in Kyoto (Gion and this Kyoto Station Porta shop); a 2021 report already called the Kyoto Station shop its 7th; 5+ same-name = chain (Greg ruling 2026-11-05)');
skip('26003184', 'same premises as kyoto_gion_koishi_honten, which covers both (coordinator ruling 2026-11-05)');

// ================================================================ comorebi Ramen house
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035416/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00']);
  put({
    id: 'kyoto_comorebi_ramen_house', name: 'comorebi Ramen house', category: 'OMNI',
    lat: 35.002609, lng: 135.756292, cuisine_type: 'ramen',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: two diners name a gluten-free brown-rice salt ramen, "Shio Genmai Soba" (January and October 2026). The regular noodles and shoyu tare contain wheat, and it is one small open kitchen, so confirm when ordering.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and seafood broths, pork and chicken chashu, quail eggs; a venison ramen in summer (2026 reviews).',
    hours_raw: 'Tabelog: Tue–Sat 11:00–14:00; closed Sunday and Monday; hours may change. An April 2026 diner noted reduced opening days for a while. No reservations; queues before opening, with waiting seats inside (2026 reviews). About 8 counter seats facing an open kitchen; bowls are made one at a time, so service is unhurried (2026 reviews). Non-smoking. No cards; e-money and QR (Tabelog). Opened 3 February 2021 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'West of Shijo-Karasuma — about 3 min walk from Shijo Stn exit 4',
    cuisine: 'A café-like ramen counter of clear, gentle chicken broths without chemical seasoning (2026 reviews) · shoyu ramen ¥1,000 (January 2026); shio ramen with sansho on the side; a gluten-free brown-rice shio ramen; large brown-rice shio with extra vegetables ¥1,700 (February 2026) · toppings: pork and chicken chashu, soft-boiled quail egg, thick menma, seasonal grilled vegetables (2026 reviews) · limited bowls: miso curry, sake-kasu miso, shrimp and tomato miso, chilled ramen, venison shoyu ¥1,600 (2026 reviews) · chicken chashu rice bowl; mushroom and niboshi soy mazesoba; bottled beer (2026 reviews)',
    website: null, gmaps: gm('comorebi Ramen house 矢田町'), menu_url: null,
    notes: '[Ramen · west of Shijo-Karasuma, clear gentle broths] A bright, café-like eight-seat counter near Shijo Station where the owner, trained at the Shiga ramen shop Nikkou, makes each bowl to order: clear chicken shoyu or shio with seasonal vegetables and a gluten-free brown-rice version, plus limited bowls like venison shoyu. Lunch only, Tue–Sat. Some find it pricey or slow, and one found the shio too salty and oily (March 2026).',
    chef_bio: { chef_name: null, roles: ['Owner-chef, not named; trained at a well-known ramen shop in Shiga, "Nikkou" (2026 reviews)'], origin: null,
      background: 'Opened 3 February 2021 (Tabelog). Reviewers in 2026 say the owner previously worked at the famous Shiga ramen shop Nikkou and has won awards; describe a clean, café-like counter with an open kitchen, kind staff, waiting seats placed so waiting guests do not face diners, and a ramen meant to be eaten every day, simple and free from chemical seasoning.',
      philosophy: 'Per an August 2026 diner: ramen you could eat every day, gentle on the body.',
      specialty: 'Clear shoyu and shio ramen with seasonal vegetables.',
      anecdotes: [
        { text: 'An August 2026 regular’s limited venison shoyu came with three chashu: "the first slice was delicious—was it beef? The second slice was also delicious—not beef! And the third slice was venison!"', source: R + 'B522270800/' },
        { text: '"The broth was quite salty, topped with fragrant chicken oil, but honestly, the strong flavors of the oil and salt made it difficult to appreciate the overall taste." — March 2026.', source: R + 'B524681304/' },
        { text: 'October 2026: ramen plus a chicken chashu bowl came to over ¥1,500, "a bit pricey for lunch," and the bowl took a while — better "for those who want to take their time."', source: R + 'B537149711/' },
      ],
      japanese_sources_summary: '食べログ: comorebi Ramen house、ラーメン、下京区綾小路通新町西入矢田町126 Bell Forme 平安 1F、四条駅から307m、火〜土 11:00〜14:00、日月休み、予約不可、禁煙、カード不可、電子マネー・QR可、2021年2月3日オープン。口コミ (2026年1月〜10月、英語): 店主は滋賀の有名店 Nikkou の出身、受賞歴、カフェのような店内、オープンキッチンのカウンター約8席、待ち席あり、一杯ずつ丁寧に作る、化学調味料なしの澄んだ鶏のスープ、醤油ラーメン1,000円、塩ラーメンに山椒、グルテンフリーの玄米塩ラーメン (Shio Genmai Soba)、玄米塩の大盛り野菜増し1,700円、豚と鶏のチャーシュー、うずらの味玉、太めのメンマ、季節の焼き野菜、限定の味噌カレー・酒粕味噌・海老トマト味噌・冷やし・鹿の醤油ラーメン1,600円、鶏チャーシュー丼、きのこと煮干しの醤油まぜそば、塩が強く油が多いという声、昼に1,500円超えは割高という声、営業日が減っていた時期。',
      confidence: 'medium', sources: [TB, R + 'B435063421/', R + 'B520093605/', R + 'B521790129/', R + 'B522270800/', R + 'B524681304/', R + 'B526568109/', R + 'B530310104/', R + 'B533615702/', R + 'B536822982/', R + 'B537149711/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order before you sit; many foreign visitors (April 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路通新町西入矢田町126 Bell Forme 平安 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002609, 135.756292); cross-checked: GSI 京都府京都市下京区矢田町126番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520093605/', R + 'B522270800/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu ramen', '¥1,000', 'Ramen', 'no', 'no', 'January 2026.', 'ramen'),
      it('', '', 'Brown-rice shio ramen, large with extra vegetables (gluten-free noodles)', '¥1,700', 'Ramen', 'ask', 'no', 'February 2026; named gluten-free by diners in January and October 2026.', 'ramen'),
      it('', '', 'Limited venison shoyu ramen', '¥1,600', 'Ramen', 'no', 'no', 'August 2026.', 'ramen'),
    ] }, {
    cuisine: '化学調味料を使わない澄んだやさしい鶏のスープの、カフェのようなラーメンのカウンター (2026年の口コミ)・醤油ラーメン1,000円 (2026年1月)、山椒を添える塩ラーメン、グルテンフリーの玄米塩ラーメン、玄米塩の大盛り野菜増し1,700円 (2026年2月)・具は豚と鶏のチャーシュー、うずらの味玉、太めのメンマ、季節の焼き野菜 (2026年の口コミ)・限定は味噌カレー、酒粕味噌、海老とトマトの味噌、冷やし、鹿の醤油ラーメン1,600円 (2026年の口コミ)・鶏チャーシュー丼、きのこと煮干しの醤油まぜそば、瓶ビール (2026年の口コミ)',
    neighborhood: '四条烏丸の西。四条駅4番出口から徒歩約3分',
    gf_detail: '要確認: グルテンフリーの玄米の塩ラーメン「Shio Genmai Soba」があるという声が2件 (2026年1月・10月)。通常の麺や醤油ダレには小麦が入り、小さなオープンキッチンなので注文時に確認を。',
    vegan_detail: 'ヴィーガン不可: 鶏と魚介のスープ、豚と鶏のチャーシュー、うずらの卵。夏には鹿のラーメンも (2026年の口コミ)。',
    notes: '[ラーメン・四条烏丸の西、澄んだやさしいスープ] 四条駅近くの明るくカフェのような8席のカウンター。滋賀の Nikkou 出身の店主が一杯ずつ作る。澄んだ鶏の醤油や塩に季節の野菜、グルテンフリーの玄米のラーメンもあり、鹿の醤油ラーメンなどの限定も。昼のみ、火〜土。割高、提供が遅いという声や、塩が強く油が多いという声も (2026年3月)。',
  });
}

// ================================================================ ドゥ コション
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005932/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_deux_cochons', name: 'ドゥ コション (Deux Cochons)', category: 'OMNI',
    lat: 35.006088, lng: 135.756586, cuisine_type: 'french',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: onion tart, pâté with country bread, and bread served alongside the cheese and ham (2022–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: charcuterie, pâtés, gizzard confit and cheese (reviews).',
    hours_raw: 'Tabelog: 18:00–22:00; closed Tuesday; hours may change. 12 seats, tables only, for groups of two or more (Tabelog); a November 2023 diner says the name, "two pigs", reflects that it takes parties from two. Non-smoking. Cards (Visa, Master, JCB, Amex, Diners); no PayPay — card or cash (Tabelog; October 2025). Tabelog lists no service charge.',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Shijo-Karasuma — 5 min walk from Karasuma Stn',
    cuisine: 'A natural-wine bistro bar in a renovated machiya: bottles to choose from the shelf, with a lean towards the Loire (2022–2023 reviews) · glasses from ¥950 (October 2025) · assorted cured ham (two kinds) ¥1,600; chicken-liver pâté with country bread ¥850; sautéed gizzard confit ¥800; grilled corn omelette ¥1,200 (August 2025) · caramelised onion tart, pâté de campagne, lentil and pumpkin salad, bonito carpaccio, French cheeses, seasonal Kyoto vegetables (2022–2025 reviews) · hot coffee and sweets (October 2025)',
    website: null, gmaps: gm('ドゥ コション 百足屋町'), menu_url: null,
    notes: '[Natural-wine bistro · near Shijo-Karasuma, Loire bottles] A twelve-seat bistro bar in a machiya near Shijo-Karasuma, with records playing and a shelf of natural wines to pick from — many from the Loire — beside pâté de campagne, an onion tart and cured ham. Tables only, for two or more. Glasses from ¥950. Cards or cash, no PayPay. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner, not named; has a Loire connection per a September 2022 diner'], origin: null,
      background: 'Reviewers from 2019 to 2025 describe a natural-wine bistro in a renovated machiya near Shijo-Karasuma that feels like a Paris bistro, with French cheeses, bottles on the shelf to choose from, a strong showing of Loire wines (the owner seemed to have a Loire connection, September 2022), records in the background, and a small but wine-friendly menu with seasonal Kyoto vegetables.',
      philosophy: null,
      specialty: 'Natural wine by the bottle; pâté de campagne; onion tart.',
      anecdotes: [
        { text: '"It felt just like a bistro in Paris!" — August 2022.', source: R + 'B453491939/' },
        { text: '"The owner seems to have a connection to the Loire Valley in France, and I was truly delighted by the abundance of Loire wines available." — September 2022.', source: R + 'B453639339/' },
        { text: '"While the selection of dishes may not be extensive, it was more than enough for enjoying wine." — July 2025.', source: R + 'B510350624/' },
      ],
      japanese_sources_summary: '食べログ: ドゥ コション (Deux Cochons)、バル・ワインバー、中京区新町通蛸薬師下ル百足屋町372-3、烏丸駅から北西へ徒歩5分、18:00〜22:00、火曜休み、12席 (テーブルのみ、2名から)、禁煙、カード可、電子マネー不可。口コミ (2019〜2025年、英語): 町家を改装した自然派ワインのビストロ、棚から選ぶボトル、ロワールのワインが多い、店名は「2匹の豚」で2名から、グラス950円から、生ハム2種1,600円、鶏レバーパテとパン・ド・カンパーニュ850円、砂肝のコンフィ800円、焼きとうもろこしのオムレツ1,200円、玉ねぎのタルト、パテ・ド・カンパーニュ、レンズ豆とかぼちゃのサラダ、鰹のカルパッチョ、フランスのチーズ、京野菜、レコード、PayPay不可、パリのビストロのよう、料理の品数は多くない。',
      confidence: 'medium', sources: [TB, R + 'B446244694/', R + 'B453491939/', R + 'B453639339/', R + 'B475913223/', R + 'B491310179/', R + 'B505059415/', R + 'B510350624/', R + 'B514874972/', R + 'B515573824/', R + 'B515656520/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick a bottle from the shelf; tables for two or more.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新町通蛸薬師下ル百足屋町372-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2025.' },
    pin_source: `Tabelog ${TB} (35.006088, 135.756586); cross-checked: GSI 京都府京都市中京区百足屋町372番地 (lot) 62m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515656520/', R + 'B514874972/'],
    price_note: 'Prices from 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Natural wine by the glass', 'from ¥950', 'Drink', 'ask', 'ask', 'October 2025.', 'wine'),
      it('', '', 'Assorted cured ham (2 kinds)', '¥1,600', 'Food', 'ask', 'no', 'August 2025.', 'charcuterie'),
      it('', '', 'Chicken-liver pâté with country bread', '¥850', 'Food', 'no', 'no', 'August 2025.', 'pate'),
      it('', '', 'Gizzard confit, sautéed', '¥800', 'Food', 'ask', 'no', 'August 2025.', 'confit'),
    ] }, {
    cuisine: '町家を改装した自然派ワインのビストロバー。棚から選ぶボトルはロワールが多め (2022〜2023年の口コミ)・グラス950円から (2025年10月)・生ハム2種1,600円、鶏レバーのパテとパン・ド・カンパーニュ850円、砂肝のコンフィのソテー800円、焼きとうもろこしのオムレツ1,200円 (2025年8月)・玉ねぎのタルト、パテ・ド・カンパーニュ、レンズ豆とかぼちゃのサラダ、鰹のカルパッチョ、フランスのチーズ、季節の京野菜 (2022〜2025年の口コミ)・温かいコーヒーと甘いものも (2025年10月)',
    neighborhood: '新町蛸薬師、四条烏丸の近く。烏丸駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 玉ねぎのタルト、パンを添えたパテ、チーズや生ハムにもパン (2022〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: シャルキュトリー、パテ、砂肝のコンフィ、チーズ (口コミ)。',
    notes: '[自然派ワインのビストロ・四条烏丸近くの新町、ロワールのボトル] 新町通の町家にある12席のビストロバー。レコードが流れ、棚の自然派ワイン (ロワールが多い) から選んで、パテ・ド・カンパーニュ、玉ねぎのタルト、生ハムと合わせる。テーブルのみで2名から。グラスは950円から。カードか現金でPayPay不可。火曜休み。',
  });
}

// ================================================================ 京都生ショコラ オーガニックティーハウス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26003208/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-nama-chocolat-organic-tea-house.com';
  const H = day(['12:00', '19:00']);
  put({
    id: 'kyoto_nama_chocolat_tea_house', name: '京都生ショコラ オーガニックティーハウス (Kyoto Nama Chocolat Organic Tea House)', category: 'OMNI',
    lat: 35.016057, lng: 135.786288, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: the nama chocolate itself is not described as containing wheat, but the cakes (chocolate cake, apple-raisin cake, marble cheesecake) are not confirmed either way (2026 reviews). Ask the owners.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: nama chocolate is made with cream; cakes come with cream (2026 reviews).',
    hours_raw: 'Tabelog: 12:00–19:00 (last order); closed irregularly; Tabelog remarks also say closed Tuesday but open on holidays, while the official site says closed on public holidays. Reservations through the official site, up to three groups at a time (Tabelog). 16 seats in two tatami rooms and on the engawa, with a garden view; no air-conditioning in summer 2026, a breeze and mosquito coils instead (reviews). Non-smoking; children welcome; cards (Visa, Master, Amex), e-money and QR (official site; Tabelog). Take-home nama chocolate packed with ice packs. Opened 17 September 2005 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki, near Heian Shrine and the zoo — 3 min walk from the Okazaki-michi bus stop; 15 min from Higashiyama Stn',
    cuisine: 'A tea house of nama chocolate in an old house with a garden, with organic coffee and drinks of pesticide-free juice (official site) · chocolate set with a drink ¥1,320: four nama chocolates — sweet, bitter, matcha and cranberry or berry (June and October 2026) · chocolate cake on a plate of fruit and herbs, apple-raisin cake, marble cheesecake, cold chocolate (2026 reviews) · organic Japanese black tea, dandelion coffee, a house blend of Japanese tea served on arrival (2026 reviews) · nama chocolate boxes to take away (official site)',
    website: SITE, gmaps: gm('京都生ショコラ 岡崎天王町'), menu_url: null,
    notes: '[Nama-chocolate tea house · Okazaki, an old house and garden] Down a narrow lane near Heian Shrine, a tea house in an old farmhouse-style home with two tatami rooms and an engawa over the garden, run by a couple — she explains in English, he in Japanese (June 2026). A ¥1,320 set of four nama chocolates with a drink, cakes plated with flowers, and boxes to take home. No air-conditioning in summer. Up to three groups booked at once.',
    chef_bio: { chef_name: null, roles: ['Run by a couple, not named (June 2026)'], origin: null,
      background: 'Opened 17 September 2005 (Tabelog), in a renovated old Kyoto house near Heian Shrine (official site). A June 2026 diner describes a couple: the wife, from overseas, serves mainly in English with detailed explanations, while the Japanese husband helps take-out customers in Japanese; they brought a cushion and moved the fan for comfort and dimmed the lights for the chocolate. An October 2026 diner found the owner running it alone that day. Earlier visitors (2016) met a dog and a cat.',
      philosophy: 'Official site: organic, body-friendly drinks and cakes; nama chocolate that melts in the mouth.',
      specialty: 'Nama chocolate set.',
      anecdotes: [
        { text: 'June 2026: "The wife is from overseas, while the husband is Japanese. The wife primarily handles the service in English… When takeout customers arrive, the husband assists them in Japanese."', source: R + 'B531021778/' },
        { text: 'A July 2026 diner ordered chocolate cake and got "a dessert plate that looked like a jungle on the plate" — watermelon and, it seemed, a mugwort sauce.', source: R + 'B533718832/' },
        { text: '"Even in the middle of summer, there’s no air conditioning! The scent of mosquito coils fills the air." — September 2026.', source: R + 'B535022717/' },
        { text: 'October 2026: the worn menu made some prices hard to read, and "since no one came to check on me, I was able to relax and take my time."', source: R + 'B536951352/' },
      ],
      japanese_sources_summary: '公式サイト: 京都生ショコラ オーガニックティーハウス、平安神宮の近くの古民家を改装したティーハウス、オーガニックの飲み物やケーキ、生チョコレートは保冷袋でお土産に、オーガニックコーヒー、無農薬果汁のドリンク、ビター・スウィート・抹茶の生チョコ、2005年創業、月〜日 12:00〜19:00、祝日休み、駐車場なし、カード (VISA・Master・AMEX)・電子マネー・QR可、全席禁煙、左京区岡崎天王町76-15。食べログ: カフェ・チョコレート、予約は公式サイトから (3組まで)、16席、座敷、テラス、子供可、不定休 (火曜休みで祝日は営業とも)、2005年9月17日オープン。口コミ (2016年、2026年4月〜10月、英語): 海外出身の奥さんが英語で、日本人のご主人が日本語で接客、チョコレートセットとドリンク1,320円 (スウィート・ビター・抹茶・クランベリー)、チョコレートケーキ、りんごとレーズンのケーキ、マーブルチーズケーキ、コールドチョコレート、和紅茶、たんぽぽコーヒー、最初にブレンドの日本茶、生花の飾り、エアコンなしで蚊取り線香と扇風機、縁側の席、細い路地の奥、入口がわかりにくい、メニューが古く値段が読みにくい。',
      confidence: 'medium', sources: [SITE, TB, R + 'B111216550/', R + 'B526615063/', R + 'B530412840/', R + 'B531021778/', R + 'B531186334/', R + 'B533718832/', R + 'B533981516/', R + 'B535022717/', R + 'B535380609/', R + 'B536951352/'] },
    cultural_comfort: { level: 'english', note: 'Service in English and Japanese (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区岡崎天王町76-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.016057, 135.786288); cross-checked: GSI 京都府京都市左京区岡崎天王町76番地 (lot) 55m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531021778/', R + 'B536951352/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chocolate set with a drink (four nama chocolates)', '¥1,320', 'Set', 'ask', 'no', 'June and October 2026.', 'nama_chocolate'),
      it('', '', 'Apple-raisin cake with organic Japanese black tea', 'about ¥1,500', 'Set', 'no', 'no', 'July 2026.', 'cake'),
    ] }, {
    cuisine: '庭のある古民家で生チョコを味わうティーハウス。オーガニックのコーヒーや無農薬果汁のドリンク (公式サイト)・ドリンク付きのチョコレートセット1,320円、生チョコ4種 (スウィート、ビター、抹茶、クランベリーやベリー) (2026年6月・10月)・果物やハーブを添えたチョコレートケーキ、りんごとレーズンのケーキ、マーブルチーズケーキ、コールドチョコレート (2026年の口コミ)・オーガニックの和紅茶、たんぽぽコーヒー、最初に出るブレンドの日本茶 (2026年の口コミ)・持ち帰りの生チョコの箱 (公式サイト)',
    neighborhood: '岡崎、平安神宮と動物園の近く。岡崎道バス停から徒歩3分、東山駅から15分',
    gf_detail: '要確認: 生チョコに小麦が入るとは書かれていないが、ケーキ (チョコレートケーキ、りんごとレーズンのケーキ、マーブルチーズケーキ) はどちらとも確認できない (2026年の口コミ)。店の方に確認を。',
    vegan_detail: 'ヴィーガン不可: 生チョコには生クリーム、ケーキにもクリームが添えられる (2026年の口コミ)。',
    notes: '[生チョコのティーハウス・岡崎、古民家と庭] 平安神宮近くの細い路地の奥、座敷2間と庭に面した縁側のある古民家のティーハウス。夫婦で営み、奥さんは英語、ご主人は日本語で案内する (2026年6月)。ドリンク付きの生チョコ4種のセットが1,320円、花を添えたケーキ、持ち帰りの箱も。夏もエアコンなし。予約は3組まで。',
  });
}

// ================================================================ FACTORY KAFE 工船
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26006310/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ooyacoffeeassociees.com';
  const H = day(['12:00', '21:00']);
  put({
    id: 'kyoto_factory_kafe_kosen', name: 'FACTORY KAFE 工船 (Kafe Kosen)', category: 'OMNI',
    lat: 35.027359, lng: 135.769577, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: coffee itself is fine, but the food is toast, cakes and bread (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: black coffee is plant-based; floats, cheesecake and banana toast are not (2026 reviews).',
    hours_raw: 'Tabelog: 12:00–21:00; closed Tuesday, open when a holiday falls on Tuesday; hours may change; temporary closures posted on the roaster’s site (official site). No reservations; second floor, often full on weekend afternoons (2026 reviews). 7 counter seats per Tabelog; a September 2026 diner also saw tables. Smoking allowed inside (Tabelog; June and September 2026). No cards per Tabelog; e-money and QR; a September 2026 diner listed card, e-money, PayPay and cash. Take-out.',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Imadegawa — 2 min walk from the Kawaramachi-Imadegawa bus stop; 5 min from Demachiyanagi Stn',
    cuisine: 'The café of the Kyoto roaster オオヤコーヒ焙煎所: home-roasted, flannel-drip coffee (official site) · no blend: choose origin, roast and "rich" or "light" — Thailand, Indonesia, Brazil, Peru; served in a small pot (2026 reviews) · coffee float ¥1,200 with clove-and-orange-peel or Earl Grey ice cream (August–September 2026) · peach soda, banana toast, muscat rare cheesecake, desserts and bread (2026 reviews)',
    website: SITE + '/navi/kafekosen/', gmaps: gm('KAFE工船 梶井町'), menu_url: null,
    notes: '[Coffee house · Kawaramachi-Imadegawa, the Ooya roaster’s flannel-drip café] A second-floor café in a retro building near Demachiyanagi, run by the Kyoto roaster Ooya Coffee: no blends — pick the origin and say "rich" or "light", and it comes flannel-dripped in a little pot. Coffee floats with clove-and-orange ice cream, banana toast. Smoking is allowed inside. Busy with tourists on weekends. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Run by オオヤコーヒ焙煎所 (official site); a September 2026 diner names the roaster as "Minoru Ooya"'], origin: null,
      background: 'Per the official site of オオヤコーヒ焙煎所 (ooyacoffee associees, since 2007): the roaster’s directly run shops are this flannel-drip coffee house in Kyoto, a ten-days-a-month stand in Shirahama, Wakayama, and Café gewa in Kurashiki, Okayama; it also sells by contract and wholesale. Reviewers in 2026 describe a clean, calm second-floor room with a green view, friendly staff, a counter facing an open kitchen, and a crowd of couples, women and tourists.',
      philosophy: null,
      specialty: 'Flannel-drip single origins; coffee float.',
      anecdotes: [
        { text: '"It was also wonderful to find a stylish café that allows smoking, which is quite rare." — June 2026.', source: R + 'B529860520/' },
        { text: 'A September 2026 diner asked about the light roast’s strong aroma and learned "it can sometimes occur with freshly roasted beans."', source: R + 'B536369185/' },
        { text: 'August 2026: the clove-and-orange ice cream had run out; the Earl Grey one "didn’t have much of an Earl Grey flavor."', source: R + 'B534389127/' },
      ],
      japanese_sources_summary: '公式サイト (ooyacoffeeassociees.com): オオヤコーヒ焙煎所、直営店は自家焙煎ネルドリップコーヒー専門店の京都 KAFE工船、毎月10日間限定営業の和歌山・白浜STAND!、岡山・倉敷のカフェゲバ、家庭用の契約販売と業務用卸、2007年〜。食べログ: FACTORY KAFE 工船、カフェ、上京区河原町通今出川下ル梶井町448 清和テナントハウス2F G号室、河原町今出川バス停から徒歩2分、出町柳駅から徒歩5分、12:00〜21:00、火曜休み (祝日は営業)、予約不可、カウンター7席、喫煙可、カード不可、電子マネー・QR可、テイクアウト。口コミ (2026年5月〜10月、英語): ネルドリップ、ブレンドはなく産地と焙煎度と「濃い」「軽い」を選ぶ、タイ・インドネシア・ブラジル・ペルー、ポットで出る、コーヒーフロート1,200円 (クローブとオレンジピールのアイス)、アールグレイのアイス、桃のソーダ、バナナトースト、マスカットのレアチーズケーキ、2階、週末は満席、観光客が多い、店内で喫煙できる、焙煎家 Minoru Ooya。',
      confidence: 'medium', sources: [SITE, TB, R + 'B529131063/', R + 'B529860520/', R + 'B533446293/', R + 'B534389127/', R + 'B536369185/', R + 'B536502298/', R + 'B537464102/', R + 'B537479635/', R + 'B537870977/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff ask about taste and suggest beans; smoking allowed inside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区河原町通今出川下ル梶井町448 清和テナントハウス2F G号室',
    existence: { status: 'confirmed', checked: TODAY, note: 'Roaster’s site lists it with November 2026 notices; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.027359, 135.769577); GSI 京都府京都市上京区梶井町448番地 (lot) is 157m south, over the 150m limit, so the pin is kept at Tabelog and marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536502298/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hot coffee, single origin, flannel drip (served in a pot)', null, 'Coffee', 'ask', 'ask', '2026 reviews.', 'coffee'),
      it('', '', 'Coffee float (dark roast, clove and orange-peel ice cream)', '¥1,200', 'Coffee', 'ask', 'no', 'September 2026.', 'coffee_float'),
    ] }, {
    cuisine: '京都の焙煎所オオヤコーヒ焙煎所のカフェで、自家焙煎のネルドリップ (公式サイト)・ブレンドはなく、産地と焙煎度、「濃い」か「軽い」かを選ぶ。タイ、インドネシア、ブラジル、ペルーなど。小さなポットで出る (2026年の口コミ)・コーヒーフロート1,200円、クローブとオレンジピールやアールグレイのアイス (2026年8〜9月)・桃のソーダ、バナナトースト、マスカットのレアチーズケーキ、デザートやパン (2026年の口コミ)',
    neighborhood: '河原町今出川。河原町今出川バス停から徒歩2分、出町柳駅から5分',
    gf_detail: '要確認: コーヒー自体は問題ないが、食べ物はトースト、ケーキ、パン (2026年の口コミ)。',
    vegan_detail: '要確認: ブラックコーヒーは植物性。フロート、チーズケーキ、バナナトーストは不可 (2026年の口コミ)。',
    notes: '[コーヒー店・河原町今出川、オオヤコーヒのネルドリップのカフェ] 出町柳近くのレトロなビルの2階、京都の焙煎所オオヤコーヒが営むカフェ。ブレンドはなく、産地を選んで「濃い」か「軽い」かを伝えると、ネルドリップで小さなポットに入って出てくる。クローブとオレンジのアイスのコーヒーフロート、バナナトーストも。店内で喫煙可。週末は観光客でにぎわう。火曜休み。',
  });
}

save();
