// Osaka sweep (2-mile circle around Dotonbori), batch 208 — mom-and-pop phase (≤20 seats, 30+ reviews).
//   + 香港 Hong Kong (one-person local Chinese counter at the foot of Tsutenkaku, about 60 years; Ebisu-higashi)
//   + 開元カフェ Kaigen cafe (Taiwanese-style kakigori, tapioca, dim sum and soy-milk tantanmen; Utsubo-honmachi)
//   + つけ鴨うどん 鴨錦 恵美須店 Tsuke Kamo Udon Kamo Kin Ebisu ten (the 2005 head shop of the Kamo Kin duck dipping-noodle group)
//   + 瓦町仔鹿 Kawara Machi Bambi (basement Chinese of a former head chef, white mapo tofu; Kawaramachi)
//   Ramen blocks: none. 香港's ramen (¥500, shio, miso) and champon are a few bowls on a long machi-chuka menu
//   whose draw is the pork kara-age; 開元カフェ's tantanmen is its main savoury lunch dish but the shop is a
//   kakigori/tapioca cafe, and only two reviews describe the bowl (not enough to source six profile dimensions);
//   鴨錦 is tsuke udon (Chinese noodles one of three noodle choices); 仔鹿's 辛担担麺 is one of ~30 dishes.
//   Chain check: 鴨錦 is a franchise brand (official site: 7 shops listed now, 32 franchise openings 2006–2021,
//   12 shops in March 2021, franchisees recruited); not in data/osaka.json and shrinking, not fast-growing, and
//   this is the head shop (恵美須店(本店)), so it is recorded. The others are single shops.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 208);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 香港
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27002727/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'osaka_hong_kong_ebisuhigashi', name: '香港 (Hong Kong)', category: 'OMNI',
    lat: 34.652617, lng: 135.505529, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the signature is battered, deep-fried pork, and the menu runs on wheat noodles, gyoza and soy-seasoned stir-fries.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, chicken, liver, shrimp, crab and egg run through the menu.',
    hours_raw: 'Mon–Sat 17:00–22:30; closed Sunday and the third Monday (Tabelog). Evenings only, no lunch (2026 reviews). No reservations (Tabelog); the 10 seats fill soon after 17:00, so arrive at opening or wait outside (September–October 2026 reviews). Cash only: no cards, e-money or QR (Tabelog). 10 counter seats; non-smoking; takeout available (Tabelog; October 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ebisu-higashi 1-19-12, Shinsekai, at the foot of Tsutenkaku — 5 min from Ebisucho Stn, 7 min from Dobutsuen-mae and JR Shin-Imamiya',
    cuisine: 'Local Chinese (machi-chuka) counter, 10 seats, one cook · pork kara-age ("Tonkara"), a whole thick cut of loin or chuck eye roll, with mustard-vinegar soy sauce or pink salt, ¥950 (August 2026) · stir-fries: pork and egg ¥950, chicken and green pepper ¥700 (September 2026), liver and garlic chives, pork and garlic chives, shrimp with egg · fried rice ¥500, five-ingredient fried rice ¥700 (September 2026), crab fried rice with real crab · Tianjin rice with salt or soy sauce · off-menu omurice · gyoza ¥300 (August 2026) · steamed chicken · century egg · sweet and sour pork · yakisoba · fried rice vermicelli · champon · ramen ¥500 with chashu (July 2026), shio ramen, miso ramen · cold noodles ¥900 (August 2026) · bottled Kirin Lager or Asahi Super Dry ¥600, draft beer, sake, shochu',
    website: null, gmaps: gm('香港 恵美須東 中華'), menu_url: null,
    notes: "[Local Chinese · Shinsekai, a one-person Showa counter under Tsutenkaku] A narrow ten-seat counter behind red lanterns and a red noren, a few steps from Tsutenkaku, open only in the evening and run by a single cook who works the kitchen at the back. The owner told one diner the shop has been here about 60 years, passed down from the previous generation, and that the name is not about Hong Kong at all: it is short for 'Kagawa's port', after Kagawa roots. Nearly everyone orders the Tonkara, a whole thick cut of pork (loin or chuck eye roll, both shown to you before you choose) fried crisp and juicy, so big that one diner took the rest home; it comes with mustard-vinegar soy sauce, and half portions are refused because a smaller piece would not taste right. Around it: oily, salty stir-fries made for bottled beer, moist fried rice, an off-menu omurice, a light shio ramen for ¥500. The seats fill within minutes of the 17:00 opening, orders wait their turn because one person cooks everything, and one diner had doubts about cleanliness; another calls it the epitome of local Chinese food.",
    chef_bio: { chef_name: null, roles: ['Owner (runs the shop alone, per July and September 2026 reviews)'], origin: null, background: 'Local Chinese restaurant of about 60 years, "passed down from the previous generation," per the owner (September 2026 review). The name is short for "Kagawa\'s port": one diner heard the owner\'s roots are in Kagawa (September 2026), another that the previous owner came from Kagawa (August 2026).', philosophy: 'No half portions of the pork kara-age, as a smaller piece would not bring out its true flavor (May 2026 review).', specialty: 'Pork kara-age (Tonkara); fried rice; stir-fries.',
      anecdotes: [
        { text: '"According to the owner, it has been around for about 60 years, passed down from the previous generation. The name \'Hong Kong\' comes from the owner\'s roots in Kagawa, which means \'Kagawa\'s port\' in a shortened form." — September 2026.', source: R + 'B535274553/' },
        { text: '"When I asked if I could order a half portion of Tonkatsu, I was told it wasn\'t possible, as a smaller portion wouldn\'t bring out the true flavor." — May 2026, third visit.', source: R + 'B58370541/' },
      ],
      japanese_sources_summary: '食べログ: 香港 (ホンコン)、大阪市浪速区恵美須東1-19-12、恵美須町駅から徒歩5分、動物園前駅・JR新今宮駅から徒歩7分、月〜土17:00〜22:30、日曜と第3月曜休み、予約不可、カード・電子マネー・QR不可、10席 (カウンター)、禁煙、テイクアウト可。口コミ(2026年5月〜10月): 通天閣のふもとの昔ながらの町中華、赤い提灯とのれん、昭和の雰囲気、店主ひとりで営業、先代から受け継いで約60年、店名は Kagawa と港から、名物は豚の kara-age (ロースか肩ロースを選べる、からし酢醤油かピンクの岩塩)、半分の量は断られた、豚肉と玉子炒め、鶏肉とピーマン炒め、肉にら、レバにら、海老玉、五目チャーハン、カニチャーハン、天津飯 (塩か醤油)、メニューにないオムライス、gyoza、焼きビーフン、ちゃんぽん、ラーメン500円、塩ラーメン、冷麺900円、瓶ビール、17時の開店すぐに満席、清潔さが気になったという声も。',
      confidence: 'medium', sources: [TB, R + 'B532006795/', R + 'B533624611/', R + 'B535274553/', R + 'B536153100/', R + 'B536757436/', R + 'B537050552/', R + 'B537086445/', R + 'B58370541/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bring cash; arrive at 17:00 or wait outside quietly (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市浪速区恵美須東1-19-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区恵美須東一丁目19番12号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532006795/', R + 'B536153100/', R + 'B537050552/', R + 'B58370541/'],
    price_note: 'Prices from July–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pork kara-age (Tonkara), loin or chuck eye roll', '¥950', 'Fried', 'no', 'no', 'August 2026.', 'tonkara'),
      it('', '', 'Stir-fried pork and eggs', '¥950', 'Stir-fries', 'ask', 'no', 'September 2026.', 'butatama'),
      it('', '', 'Five-ingredient fried rice', '¥700', 'Rice', 'ask', 'no', 'September 2026.', 'gomoku'),
      it('', '', 'Ramen with chashu', '¥500', 'Noodles', 'no', 'no', 'July 2026.', 'ramen'),
      it('', '', 'Gyoza', '¥300', 'Dumplings', 'no', 'no', 'August 2026.', 'gyoza'),
    ] }, {
    cuisine: 'カウンター10席、料理人ひとりの町中華・名物は豚の kara-age (Tonkara)。ロースか肩ロースの厚い塊を丸ごと揚げ、からし酢醤油かピンクの塩で。950円 (2026年8月)・炒め物: 豚肉と玉子炒め950円、鶏肉とピーマン炒め700円 (2026年9月)、レバにら、肉にら、海老玉・チャーハン500円、五目チャーハン700円 (2026年9月)、本物のカニのカニチャーハン・天津飯 (塩か醤油)・メニューにないオムライス・gyoza 300円 (2026年8月)・蒸し鶏・ピータン・酢豚・焼きそば・焼きビーフン・ちゃんぽん・チャーシュー入りのラーメン500円 (2026年7月)、塩ラーメン、味噌ラーメン・冷麺900円 (2026年8月)・瓶ビール (キリンラガーかアサヒスーパードライ) 600円、生ビール、日本酒、焼酎',
    neighborhood: '恵美須東1-19-12、新世界、通天閣のふもと。恵美須町駅から徒歩5分、動物園前駅・JR新今宮駅から徒歩7分',
    gf_detail: 'グルテンフリーではありません。名物は衣をつけて揚げた豚で、ほかも小麦の麺、gyoza、醤油で味つけした炒め物が中心。',
    vegan_detail: 'ヴィーガンではありません。豚、鶏、レバー、海老、カニ、卵がメニューの中心。',
    notes: '[町中華・新世界、通天閣の下の、ひとりで切り盛りする昭和のカウンター] 通天閣から数歩、赤い提灯と赤いのれんの奥にある、カウンター10席の細長い店。営業は夜だけで、奥の厨房で料理人がひとりで作る。店主によると、先代から受け継いでおよそ60年。店名は香港とは関係なく、「Kagawa の港」を縮めたもの。ほとんどの人が頼むのが Tonkara で、豚の厚い塊 (ロースか肩ロース。両方見せてくれる) をカリッとジューシーに揚げたもの。大きくて残りを持ち帰った人も。からし酢醤油で食べる。小さいと本当の味が出ないからと、半分の量は断られる。まわりには瓶ビールに合う油と塩のきいた炒め物、しっとりしたチャーハン、メニューにないオムライス、500円のあっさりした塩ラーメン。17時の開店から数分で満席になり、料理はひとりなので注文は順番待ち。清潔さが気になったという声もあれば、町中華そのものという声も。',
  });
}

// ================================================================ 開元カフェ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27066285/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '20:00']);
  put({
    id: 'osaka_kaigen_cafe_utsubohonmachi', name: '開元カフェ (Kaigen cafe)', category: 'OMNI',
    lat: 34.684128, lng: 135.492632, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the tantanmen, mazesoba and dim sum use wheat, and the kakigori syrups and espuma are not described for gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fruit and tea kakigori and a soy-milk tantanmen are on the menu, but the espuma is yogurt or almond, milk syrups and milk teas are common, and nothing is described as vegan.',
    hours_raw: 'Mon–Wed and Fri–Sun 11:30–20:00; closed Thursday (Tabelog). Kakigori from 12:00 (August 2026 review). No reservations (Tabelog); kakigori can take 15 minutes or more to arrive in summer (July–August 2026 reviews). Cards (VISA, Master, AMEX) and e-money (Tabelog). 20 seats: 15 at tables, 5 at the counter; sofa seating; non-smoking; children welcome; takeout (Tabelog). Opened 15 June 2012 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Utsubo-honmachi 2-2-23, near Utsubo Park — 6 min from Awaza Stn (Exit 1), 8 min from Hommachi Stn (Exit 18)',
    cuisine: 'Taiwanese-style cafe for kakigori, tapioca and a light Chinese lunch (20 seats) · fluffy kakigori topped with almond or yogurt espuma: strawberry milk ¥1,760 (August 2026), mango tea ¥1,500 (May 2026), jasmine tea ¥1,265 (December 2025), white chocolate, "Red & White & Black" chocolate, white peach, black sugar douhua; extra toppings such as tapioca and mango · tapioca milk teas, the No. 1 being black sugar pu-erh milk tea ¥660 (August 2026), sweetness and ice to order · soy milk tantanmen ¥990, rice ¥220 (March 2026) · Taiwanese mazesoba with fish powder and egg yolk · water dumplings ¥800, coconut balls ¥500 (May 2026) · dim sum set of 8 pieces ¥1,000 (September 2026), xiaolongbao · coffee, shochu, wine',
    website: null, gmaps: gm('開元カフェ 靭本町'), menu_url: null,
    notes: "[Kakigori and tantanmen · Utsubo-honmachi, a Taiwanese-style cafe by Utsubo Park] A calm cafe near Utsubo Park that one diner calls a Taiwanese restaurant, where most diners come for one of two things: kakigori or the tantanmen. The ice is fluffy but holds its shape, comes generous and photogenic, and is topped with your choice of almond or yogurt espuma — the almond one diner found 'shockingly good'; flavors run from strawberry milk and white chocolate to jasmine tea and black sugar douhua. Kakigori starts at noon and can take a while in summer. The tapioca drinks are huge and cheap for the area, with half-price takeout during time sales. At lunch the creamy soy-milk tantanmen is gentle rather than fiery; add rice if you must, though two diners thought it not worth the ¥220.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Cafe that opened on 15 June 2012 (Tabelog).', philosophy: null, specialty: 'Kakigori with espuma; tapioca milk tea; soy-milk tantanmen.',
      anecdotes: [
        { text: '"The almond mousse was shockingly good, delivering an explosion of flavor the moment it touched my palate." — August 2026, strawberry milk kakigori ¥1,760.', source: R + 'B533071060/' },
        { text: '"The smoothness of the soy milk combined perfectly with the characteristic spiciness of tantanmen, creating a well-balanced dish that had depth while still being gentle on the palate." — March 2026, soy milk tantanmen ¥990.', source: R + 'B525340714/' },
      ],
      japanese_sources_summary: '食べログ: 開元カフェ (Kaigen cafe)、大阪市西区靭本町2-2-23 靭交番前ビル 1F、阿波座駅1番出口から徒歩6分、本町駅18番出口から徒歩8分、月〜水・金〜日11:30〜20:00、木曜休み、予約不可、カード (VISA、Master、AMEX)・電子マネー可、20席 (テーブル15、カウンター5)、ソファ席、禁煙、子供可、テイクアウト可、オープン日2012年6月15日、ジャンル: かき氷、担々麺、カフェ。口コミ(2025年9月〜2026年9月): 靭公園の近く、ふわふわのかき氷にアーモンドかヨーグルトのエスプーマ、いちごミルク1760円、マンゴーティー1500円、ジャスミン茶1265円、ホワイトチョコ、白桃、黒糖豆花、トッピングにタピオカやマンゴー、かき氷は12時から、夏は出てくるまで15分以上、プーアル茶のタピオカミルクティー660円、甘さと氷の量を選べる、持ち帰りのタイムセールで半額、豆乳の担々麺990円とごはん220円、台湾まぜそば、水餃子800円、ココナッツ団子500円、点心8個のセット1000円、小籠包。',
      confidence: 'medium', sources: [TB, R + 'B107887232/', R + 'B513819727/', R + 'B520773692/', R + 'B525340714/', R + 'B527983032/', R + 'B527791288/', R + 'B533071060/', R + 'B534256511/', R + 'B535148663/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Kakigori from noon; expect a wait in summer (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区靭本町2-2-23 靭交番前ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区靱本町二丁目2番23号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525340714/', R + 'B527983032/', R + 'B533071060/', R + 'B535148663/', R + 'B107887232/'],
    price_note: 'Prices from December 2025–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Strawberry milk kakigori (almond or yogurt espuma)', '¥1,760', 'Kakigori', 'ask', 'no', 'August 2026.', 'strawberry'),
      it('', '', 'Jasmine tea kakigori', '¥1,265', 'Kakigori', 'ask', 'ask', 'December 2025; nuts and honey served on the side.', 'jasmine'),
      it('', '', 'Pu-erh tea tapioca milk tea', '¥660', 'Drinks', 'ask', 'ask', 'August 2026.', 'tapioca'),
      it('', '', 'Soy milk tantanmen', '¥990', 'Lunch', 'no', 'ask', 'March 2026; rice ¥220 extra.', 'tantanmen'),
      it('', '', 'Dim sum set (8 pieces)', '¥1,000', 'Dim sum', 'no', 'ask', 'September 2026.', 'dimsum'),
    ] }, {
    cuisine: 'かき氷、タピオカ、軽い中華のランチの台湾風カフェ (20席)・ふわふわのかき氷にアーモンドかヨーグルトのエスプーマ: いちごミルク1760円 (2026年8月)、マンゴーティー1500円 (2026年5月)、ジャスミン茶1265円 (2025年12月)、ホワイトチョコ、「Red & White & Black」のチョコ、白桃、黒糖豆花。トッピングにタピオカやマンゴー・タピオカミルクティー、一番人気は黒糖プーアル茶ミルクティー660円 (2026年8月)、甘さと氷の量を選べる・豆乳の担々麺990円、ごはん220円 (2026年3月)・魚粉と卵黄の台湾まぜそば・水餃子800円、ココナッツ団子500円 (2026年5月)・点心8個のセット1000円 (2026年9月)、小籠包・コーヒー、焼酎、ワイン',
    neighborhood: '靭本町2-2-23、靭公園の近く。阿波座駅1番出口から徒歩6分、本町駅18番出口から徒歩8分',
    gf_detail: '要確認。グルテンの情報なし。担々麺、まぜそば、点心は小麦を使い、かき氷のシロップやエスプーマのグルテンについての記載なし。',
    vegan_detail: '要確認。果物やお茶のかき氷、豆乳の担々麺はあるが、エスプーマはヨーグルトかアーモンドで、ミルクのシロップやミルクティーも多い。ヴィーガンの記載なし。',
    notes: '[かき氷と担々麺・靭本町、靭公園のそばの台湾風カフェ] 靭公園の近くの落ち着いたカフェで、台湾料理の店という声も。客のほとんどはかき氷か担々麺がお目当て。氷はふわふわなのに形がくずれず、量が多くて写真映えし、上にはアーモンドかヨーグルトのエスプーマを選んでのせる。アーモンドは「衝撃的においしい」という声。味はいちごミルクやホワイトチョコから、ジャスミン茶、黒糖豆花まで。かき氷は12時からで、夏は出てくるまで時間がかかることも。タピオカのドリンクは大きくてこのあたりでは安く、持ち帰りのタイムセールで半額のことも。昼のクリーミーな豆乳の担々麺は、辛さよりやさしさ。ごはんを足すこともできるが、220円の価値はないという声が二つ。',
  });
}

// ================================================================ つけ鴨うどん 鴨錦 恵美須店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27020084/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kamokin.jp/'; const SHOPS = 'https://kamokin.jp/wp-content/themes/kamokin/shoplist'; const CO = 'https://kamokin.jp/wp-content/themes/kamokin/company';
  const H = day(['11:00', '15:00']);
  put({
    id: 'osaka_kamokin_ebisu_honten', name: 'つけ鴨うどん 鴨錦 恵美須店 (Tsuke Kamo Udon Kamo Kin Ebisu ten)', category: 'OMNI',
    lat: 34.652096, lng: 135.504858, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: one dish of noodles dipped in a soy-based men-tsuyu; the udon and Chinese noodles are wheat, and the soba blend is not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dipping sauce is full of duck, dried small fish and quail egg.',
    hours_raw: 'Mon–Wed and Fri–Sun 11:00–15:00 (last order 15:00); closed Thursday; may close early when ingredients run out (Tabelog; official shop list). Ticket machine at the door; one main order per person; no children under 10 (Tabelog; August 2026 review). Cash only: no cards, e-money or QR (Tabelog). No phone (official shop list). 10 counter seats; non-smoking (Tabelog). The head shop of the Kamo Kin group, opened December 2005 (official site).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ebisu-higashi 2-9-8, Friendly Naniwa 1F, near Tsutenkaku — 5 min from Ebisucho, Dobutsuen-mae and JR Shin-Imamiya Stns',
    cuisine: 'Tsuke kamo udon: one dish, noodles dipped in a hot duck sauce (10-seat counter) · the sauce is packed with thinly sliced duck, dried small fish (iriko), quail egg, lemon slices and green onion · choose udon (thin or thick), soba or Chinese noodles, half-and-half possible, served cold or hot, in one, two or three servings; small ¥900 (August–October 2026) · soba comes with mizuna, lotus root, carrot and spinach (July 2026) · rice balls (salmon, kombu or ume), salmon ¥150 (October 2026) · finish by thinning the sauce with ginger hot water from a tokkuri · table spices: ichimi, shichimi, black shichimi, black pepper, curry powder',
    website: SITE, gmaps: gm('つけ鴨うどん 鴨錦 恵美須店'), menu_url: null,
    notes: "[Udon · Shinsekai, the 2005 head shop of a duck dipping-noodle brand] A ten-seat counter a few minutes from Tsutenkaku that serves one thing: a hot dipping sauce crowded with thin slices of duck, tiny dried fish, quail egg, lemon and green onion, and your choice of udon, soba or Chinese noodles in one, two or three servings (regulars go for three, one diner says). The duck fat makes it rich and the lemon keeps it bright. When the noodles are gone, pour the ginger hot water from the tokkuri into what is left and drink it down. The founding story on the official site: at 48, with ¥2 million in hand, the founder recalled a tsuke kamo udon shop loved in leaner days and long gone, spent six months on a men-tsuyu to beat it, and opened on a main street; five of the six first-day customers came back the next day. This counter, opened in December 2005, became the head shop. One long-time diner noticed new staff, a slightly changed name and higher prices in 2026, but the same taste. Lunch only, cash only, and it can sell out early.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Founded by a married couple, 太山信泰 and 香奈子 (official site, company page). Opened in December 2005 as the group\'s second directly run shop and its head shop; the brand then grew by franchise (32 franchise openings by 2021) and was transferred in February 2021 to 株式会社アシスト of Kishiwada, which lists seven shops today (official site, read 2026-10-30). One diner noticed unfamiliar staff and a slightly changed name in September 2026.', philosophy: 'One dish: a duck dipping sauce whose men-tsuyu stands up to the duck fat and flavor, finished with ginger hot water (official site).', specialty: 'Tsuke kamo udon (duck dipping noodles).',
      anecdotes: [
        { text: '"The base consists of thinly sliced duck, iriko (dried sardines), and lemon slices in the broth… This time, we opted for one serving of Chinese noodles, but regulars usually go for three servings." — August 2026.', source: R + 'B533674754/' },
        { text: '"Once you finish the noodles, the Kamo Kin way is to dilute the remaining sauce with ginger tea served in a tokkuri… to enjoy until the last drop." — October 2026, small soba ¥900.', source: R + 'B536629605/' },
      ],
      japanese_sources_summary: '食べログ: つけ鴨うどん 鴨錦 恵美須店、大阪市浪速区恵美須東2-9-8 フレンドリー浪速 1F、動物園前駅・恵美須町駅・JR新今宮駅から徒歩5分、月〜水・金〜日11:00〜15:00、木曜休み、売り切れ次第終了、予約不可、カード・電子マネー・QR不可、10席 (カウンターのみ)、禁煙、1人1品、10歳未満の子供は遠慮、公式サイトあり。公式サイト: 大阪新世界発祥のつけ鴨うどん、恵美須店(本店)、電話なし、11時〜15時 (L.O.15時)、鴨肉とネギ、レモン、じゃこなどが入ったつけ汁、濃厚なのに後味さっぱり、食べ終わったら生姜湯を入れて好みの濃さに、創業者 太山信泰・香奈子夫妻、当時48歳で手元の200万円から昔通ったつけ鴨うどんの味を超えるめんつゆを半年かけて開発、初日の客6名のうち5名が翌日も来店、たっぷり80gの鴨肉、一玉220g、2005年12月に直営2号店「恵美須本店」、FC32号店まで、2021年2月に株式会社アシスト (岸和田市) が事業譲受、店舗一覧は7店、FC加盟店募集。口コミ(2026年6月〜10月): 薄切りの鴨、いりこ、うずらの卵、レモン、ネギ、うどん (細麺・太麺)、そば、中華麺から選べる、半々も、量は1玉・2玉・3玉、小900円、そばに水菜・れんこん・にんじん・ほうれん草、おにぎり (鮭・昆布・梅) 鮭150円、徳利の生姜湯、一味・七味・黒七味・黒胡椒・カレー粉、券売機、店名が少し変わりスタッフも替わったが味は昔のまま。',
      confidence: 'medium', sources: [TB, SITE, SHOPS, CO, R + 'B521673369/', R + 'B530973308/', R + 'B532214213/', R + 'B533674754/', R + 'B535698937/', R + 'B536370677/', R + 'B536629605/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Buy a ticket at the machine; cash only; lunch hours (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区恵美須東2-9-8 フレンドリー浪速 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–October 2026; listed as 恵美須店(本店) on the official shop list.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区恵美須東二丁目9番8号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533739283/', R + 'B535698937/', R + 'B536629605/', SITE],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('つけ鴨うどん', '', 'Tsuke kamo udon, small (udon, soba or Chinese noodles)', '¥900', 'Noodles', 'no', 'no', 'August–October 2026; one, two or three servings.', 'tsukekamo'),
      it('', '', 'Salmon rice ball', '¥150', 'Sides', 'ask', 'ask', 'October 2026; kombu and ume also offered.', 'onigiri'),
    ] }, {
    cuisine: 'つけ鴨うどん一品の店 (カウンター10席)・熱いつけ汁に薄切りの鴨、いりこ、うずらの卵、レモン、ネギがたっぷり・麺はうどん (細麺か太麺)、そば、中華麺から。半々もでき、冷たくても温かくても、量は1玉・2玉・3玉。小900円 (2026年8月〜10月)・そばには水菜、れんこん、にんじん、ほうれん草 (2026年7月)・おにぎり (鮭、昆布、梅)、鮭150円 (2026年10月)・最後は徳利の生姜湯でつけ汁を割って・卓上に一味、七味、黒七味、黒胡椒、カレー粉',
    neighborhood: '恵美須東2-9-8 フレンドリー浪速 1F、通天閣の近く。恵美須町駅、動物園前駅、JR新今宮駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。醤油ベースのめんつゆにつける麺の一品で、うどんと中華麺は小麦、そばの配合の記載なし。',
    vegan_detail: 'ヴィーガンではありません。つけ汁に鴨、いりこ、うずらの卵がたっぷり。',
    notes: '[うどん・新世界、2005年からのつけ鴨うどんの本店] 通天閣から数分の、カウンター10席の一品だけの店。熱いつけ汁には薄切りの鴨、小さないりこ、うずらの卵、レモン、ネギがぎっしりで、麺はうどん、そば、中華麺から、量は1玉・2玉・3玉 (常連は3玉という声)。鴨の脂で濃厚、レモンでさっぱり。麺を食べ終えたら、徳利の生姜湯を残りのつけ汁に注いで最後まで飲む。公式サイトの創業の話では、48歳のとき手元の200万円で、若くお金のないころに通い詰めたつけ鴨うどん (その店はもうない) を思い出し、半年かけてその味を超えるめんつゆを作って表通りに出店。初日の客6人のうち5人が翌日も来たという。2005年12月に開いたこのカウンターが本店になった。長年通う人は2026年、スタッフが替わり店名が少し変わり値段も上がったが、味は昔のままと言う。昼だけ、現金のみで、早めに売り切れることも。',
  });
}

// ================================================================ 瓦町仔鹿
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27085838/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://kawaramachi-bambi.com/'; const MENU = 'http://kawaramachi-bambi.com/menu/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'osaka_kawaramachi_bambi', name: '瓦町仔鹿 (Kawara Machi Bambi)', category: 'OMNI',
    lat: 34.685787, lng: 135.507768, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: dumplings, shumai, battered and fried dishes, noodles and soy- and oyster-sauce stir-fries make up the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the stocks are made in-house and the menu is built on pork, chicken, beef, horse, shrimp and crab.',
    hours_raw: 'Mon–Sat and holidays 18:00–22:00; closed Sunday; evenings only; closing time may vary and dishes can sell out, so call ahead (Tabelog). The official site gives 18:00–22:30 last order. Reservations accepted; cancel by phone on the day; 2-hour limit at busy times (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and QR payments; no e-money (Tabelog). 19 seats: 7 at the counter, three tables of 4; private hire up to 20; non-smoking; children welcome (Tabelog). Opened 13 October 2015 (Tabelog; official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi 1-4-6, Ichioka Kosan Bldg B1F — 3 min from Sakaisuji-Hommachi Stn (Exit 12), 6 min from Kitahama Stn (Exit 5)',
    cuisine: 'Creative Chinese in a basement (19 seats) · official menu (undated): steamed chicken ¥770, zha cai ¥550, century egg ¥550, house char siu ¥850, pork belly cold dish ¥850 · pan-fried gyoza ¥500, meat shumai wrapped in yuba (4) ¥880, scallop shumai (3) ¥880 · fried chicken BAMBI-style ¥800, yurinchi ¥900, crab-claw croquettes of Hokkaido scallop, white fish and shrimp ¥880 · black-vinegar sweet and sour pork ¥980, spicy mapo tofu and white mapo tofu ¥1,200 each, shrimp chili ¥1,000, big shrimp with mayonnaise ¥1,680 · spicy tantanmen ¥1,100, green fried rice (spinach) ¥950, crab fried rice ¥2,000, crispy noodles with seafood sauce ¥1,580 · ma lai gao, sesame balls, almond tofu · blackboard specials (2025–2026): horse-meat carpaccio, cold stir-fried pork or beef with green peppers (summer), jellyfish, crab potato salad, sweet-miso beef in lettuce, xiaolongbao · Shaoxing wine by the glass or aged bottles, Sichuan-pepper and Shaoxing highballs with bear- or rose-shaped ice, wine',
    website: SITE, gmaps: gm('瓦町仔鹿 中央区瓦町'), menu_url: MENU,
    notes: "[Chinese · Kawaramachi near Kitahama, a former head chef's basement with white mapo tofu] Down a staircase into a building's basement, a hideout Chinese restaurant opened in 2015 by 河野幸成, once executive chef of a high-end Chinese restaurant. The aim is Chinese food that isn't heavy: the stocks, chili oil and sauces are all blended in-house. Its calling card is the white mapo tofu, milder than the red one (also on the menu) and best ordered, one diner insists, with the bright green spinach fried rice; diners add the yuba-wrapped shumai, the steamed chicken with chili oil, and whatever is on the blackboard — horse-meat carpaccio, cold summer stir-fries with green peppers, jellyfish, crab potato salad. One diner sees a French touch in the plating, the highballs come with bear- or rose-shaped ice, and diners describe a kind manager to chat with at the counter.",
    chef_bio: { chef_name: '河野幸成', roles: ['Chef'], origin: null, background: 'Former executive chef (総料理長) of a high-end Chinese restaurant (official site); the Tabelog shop text gives 13 years as head chef at a renowned Chinese restaurant. Opened Kawara Machi Bambi in a basement in Chuo-ku in October 2015 (official site; Tabelog opening date 13 October 2015).', philosophy: 'Chinese food that does not feel heavy: care over ingredients, cooking and seasoning; stocks, chili oil and sauces all blended in-house; seasonal dishes that use the ingredients well (official site).', specialty: 'White mapo tofu; green fried rice; yuba-wrapped shumai.',
      anecdotes: [
        { text: '"The combination of White Mapo Tofu and Green Fried Rice brings pure bliss to your palate. This is definitely a set you should order together." — March 2026.', source: R + 'B524232655/' },
        { text: '"The almond tofu was made with brown sugar and Shaoxing wine, and I was told there were strawberries available that day… The dishes on the blackboard menu here are truly delicious and never disappoint." — May 2026.', source: R + 'B510606779/' },
      ],
      japanese_sources_summary: '食べログ: 瓦町仔鹿、大阪市中央区瓦町1-4-6 市岡宏産ビル B1F、堺筋本町駅12番出口から徒歩3分、北浜駅5番出口から徒歩6分、月〜土・祝18:00〜22:00、日曜休み、夜のみ、売り切れ次第終了、予約可 (混雑時2時間制)、カード (VISA、Master、JCB、AMEX、Diners)・QR可、電子マネー不可、19席 (カウンター7、テーブル4×3)、貸切は20名まで、禁煙、子供可、オープン日2015年10月13日。公式サイト: 2015年10月にビルの地下でオープンした瓦町仔鹿 (カワラマチバンビ)、高級中華レストランで総料理長を務めた河野幸成の独創的な中華料理、重くない中華、ダシも辣油もソースもすべて独自にブレンド、季節のメニュー、18:00〜22:30 L.O、日曜休み。メニュー: 蒸し鶏770円、ザーサイ550円、ピータン550円、自家製焼豚850円、雲白肉850円、焼餃子500円、湯葉をまとった肉焼売880円、貝柱入り肉焼売880円、鶏モモ肉の唐揚げ～BAMBI流～800円、油淋鶏900円、カニ爪揚げ880円、黒酢の酢豚980円、辛麻婆豆腐1200円、白い麻婆豆腐1200円、海老のチリソース1000円、大海老のマヨネーズソース1680円、揚げそばの海鮮あんかけ1580円、辛担担麺1100円、炒飯(グリーン)950円、蟹肉入り炒飯2000円、マーラーカオ、胡麻団子、なめらか杏仁豆腐、紹興酒。口コミ(2025年5月〜2026年8月): 白い麻婆豆腐とグリーンの炒飯、黒板のメニュー、馬肉のカルパッチョ、夏の冷たいピーマン炒め、くらげ、カニのポテトサラダ、甘味噌の牛肉のレタス包み、黒糖と紹興酒の杏仁豆腐、小籠包、山椒ハイボール、熊やバラの形の氷、フレンチのような盛りつけ、気さくな店長。',
      confidence: 'medium', sources: [TB, SITE, MENU, R + 'B481403078/', R + 'B507224956/', R + 'B510606779/', R + 'B518466246/', R + 'B524232655/', R + 'B527604287/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead in the evening; menu on the official site (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区瓦町1-4-6 市岡宏産ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through August 2026; official site live.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区瓦町一丁目4番6号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Prices from the official menu page (undated; read 2026-10-30).', last_checked: TODAY, items: [
      it('白い麻婆豆腐', '', 'White mapo tofu', '¥1,200', 'Stir-fries', 'no', 'no', 'Official menu; the house signature.', 'whitemapo'),
      it('炒飯(グリーン)', '', 'Green fried rice (spinach)', '¥950', 'Noodles and rice', 'ask', 'no', 'Official menu.', 'greenrice'),
      it('湯葉をまとった肉焼売(4ケ入)', '', 'Meat shumai wrapped in yuba (4)', '¥880', 'Dim sum', 'ask', 'no', 'Official menu.', 'yubashumai'),
      it('蒸し鶏', '', 'Steamed chicken', '¥770', 'Starters', 'ask', 'no', 'Official menu; served with chili oil (September 2025).', 'mushidori'),
      it('辛担担麺', '', 'Spicy tantanmen', '¥1,100', 'Noodles and rice', 'no', 'no', 'Official menu.', 'tantanmen'),
    ] }, {
    cuisine: '地下の創作中華 (19席)・公式メニュー (日付なし): 蒸し鶏770円、ザーサイ550円、ピータン550円、自家製焼豚850円、雲白肉850円・焼餃子500円、湯葉をまとった肉焼売 (4個) 880円、貝柱入り肉焼売 (3個) 880円・鶏モモ肉の唐揚げ～BAMBI流～800円、油淋鶏900円、北海道産ホタテ・白身魚・海老スリ身で包んだカニ爪揚げ880円・黒酢の酢豚980円、辛麻婆豆腐と白い麻婆豆腐 各1200円、海老のチリソース1000円、大海老のマヨネーズソース1680円・辛担担麺1100円、炒飯(グリーン)950円、蟹肉入り炒飯2000円、揚げそばの海鮮あんかけ1580円・マーラーカオ、胡麻団子、杏仁豆腐・黒板のおすすめ (2025〜2026年): 馬肉のカルパッチョ、夏の冷たい豚か牛とピーマンの炒め物、くらげ、カニのポテトサラダ、甘味噌の牛肉のレタス包み、小籠包・紹興酒 (グラスか年代物のボトル)、熊やバラの形の氷の山椒ハイボールや紹興酒ハイボール、ワイン',
    neighborhood: '瓦町1-4-6 市岡宏産ビル B1F。堺筋本町駅12番出口から徒歩3分、北浜駅5番出口から徒歩6分',
    gf_detail: 'グルテンフリーではありません。餃子、焼売、揚げ物、麺、醤油やオイスターソースの炒め物がメニューの中心。',
    vegan_detail: 'ヴィーガンではありません。ダシは自家製で、メニューは豚、鶏、牛、馬、海老、カニが中心。',
    notes: '[中華・瓦町、北浜の近く、元総料理長の地下の店、白い麻婆豆腐] ビルの階段を下りた地下にある隠れ家の中華で、高級中華レストランの総料理長だった河野幸成が2015年に開いた。目指すのは重くない中華で、ダシも辣油もソースもすべて自家製のブレンド。看板は白い麻婆豆腐で、赤い麻婆 (こちらもある) よりまろやか。ほうれん草で鮮やかな緑の炒飯といっしょに、という声。ほかに湯葉をまとった焼売、辣油の蒸し鶏、黒板のおすすめ (馬肉のカルパッチョ、夏の冷たいピーマン炒め、くらげ、カニのポテトサラダ) も。盛りつけにフレンチのような品があるという声もあり、ハイボールには熊やバラの形の氷。カウンターでは気さくな店長と話せるという声。',
  });
}

save();
