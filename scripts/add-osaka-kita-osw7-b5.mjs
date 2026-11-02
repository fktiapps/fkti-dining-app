// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 5.
//   + 一番ラーメン Ichiban Ramen (local Chinese diner by the Shin-Osaka east exit: big kara-age, gyoza, ramen; run by women)
//   + PARIWAR 新大阪店 PARIWAR Shin'osaka ten (Indian-Nepali curry and tandoor naan; free curry and naan refills Monday and Friday lunch)
//   + 香香閣 Shanshan Kaku (Chinese and Sichuan diner, opened 2018; mapo tofu lunch sets, all-you-can-eat parties)
//   + 次玄 Jigen (okonomiyaki and teppan counter east of Shin-Osaka; horumon yakisoba)
//   - skipped 27148288 家系ラーメン 頂㐂家 新大阪店: chain (iekei brand with Shin-Osaka, Sakaisuji-Honmachi and Hankyu Mikuni shops in
//     the osaka-kita crawl, and Nagahoribashi and Makino shops on Retty/Wanderlog).
//   Lane check: every id above is even. Taken in queue order (nearest first) after the chain skip.
//   Chain check: Ichiban Ramen, Shanshan Kaku and Jigen name no other shop. PARIWAR: its site (pariwar.jp, read 2026-11-01) shows
//   one restaurant; an unrelated-looking パリワール 信濃町店 sits in the Tokyo crawl and ハリパリワール in Umeda, with no link shown
//   between them. None of the four is in data/osaka.json (grep by id, name and address, 2026-11-01).
//   PARIWAR is in 新大阪ハイツ (東中島1-21-2), the same building as osaka_teuchi_men_yasuda_shin_osaka (address_ja
//   "大阪府大阪市東淀川区東中島1-21-2 新大阪ハイツ106号"); a July 2026 review places PARIWAR's sign "next to a well-known ramen shop".
//   The two Tabelog points are about 22 m apart, so each keeps its own pin.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27148288', 'chain: 家系ラーメン 頂㐂家, with 新大阪店, 堺筋本町店 and 阪急三国店 in the osaka-kita crawl and 長堀橋店 and 牧野店 on Retty/Wanderlog');

// ================================================================ 一番ラーメン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27009468/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['17:00', '21:00']);
  put({
    id: 'osaka_ichiban_ramen_higashinakajima', name: '一番ラーメン (Ichiban Ramen)', category: 'OMNI',
    lat: 34.733516, lng: 135.502869, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the signatures are kara-age, gyoza and wheat-noodle ramen and sara udon.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Chinese diner of fried chicken, gyoza, liver stir-fry and beef-bone ramen.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 17:00–21:00; Sat 11:30–14:00 and 17:00–23:00; closed Sunday; hours may change (Tabelog). Reservations accepted (Tabelog). Cash only: no cards, e-money or QR (Tabelog). Smoking allowed; takeaway (Tabelog). Almost full by 18:00 (June 2026); busy when the Shinkansen is delayed (September 2025).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: day(['11:30', '14:00'], ['17:00', '23:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: '東中島1丁目19-14 — about 250 m from Shin-Osaka Stn (Tabelog), near the east exit',
    cuisine: 'Local Chinese diner · kara-age, big and garlicky, best as a half order for two or three (June 2026); eaten with salt and pepper (November 2025) · gyoza with a spicy kick (May 2026) · liver and garlic-chive stir-fry, sweet and sour pork, stamina grill, fried rice with plenty of garlic, Tianjin rice, stir-fried vegetables, kimchi, potato salad (2026) · shoyu ramen ¥900 with two slices of chashu, bean sprouts, nori, menma and green onion, a slightly sweet broth (March 2026) · shio ramen on a beef-bone broth with slightly thick curly noodles (September 2025) · chashu ramen (June 2026) · sara udon under a white sauce (March 2026) · a pasta salad comes with beer (June 2025) · nine dishes for four came to ¥8,900 (July 2026)',
    website: null, gmaps: gm('一番ラーメン 東中島1-19-14'), menu_url: null,
    notes: "[Chinese · Higashinakajima, a machi-chuka by the Shin-Osaka east exit] A small, old-style neighbourhood Chinese restaurant a couple of minutes from the east side of Shin-Osaka Station, run by a team of women (September 2025; June 2026). The name says ramen, but most diners come for the kara-age: huge, crisp and loaded with garlic, so the owner steers pairs to the half order (June 2026). Around it go spicy gyoza, liver and chives, garlic fried rice and sweet-and-sour pork, all fast and cheap, nine dishes for four at ¥8,900 in July 2026. The shoyu ramen (¥900, March 2026) and a beef-bone shio ramen close the night for business travellers, and it fills up when a Shinkansen is delayed (September 2025). Cash only; smoking allowed. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and a team of women in the kitchen and on the floor'], origin: null, background: 'No shop description on Tabelog. Reviewers: "Four women were managing the place, and one of the ladies in the kitchen was friendly and chatted with us" (September 2025); "A place run by friendly ladies!" (June 2026); "the owner suggested that for solo diners or pairs, the \'half size\' would be ideal" for the kara-age (June 2026).', philosophy: null, specialty: 'Kara-age (half order for two); gyoza; liver and garlic chives.',
      anecdotes: [
        { text: '"The kara-age is quite large and comes in generous portions, so the owner suggested that for solo diners or pairs, the \'half size\' would be ideal." — June 2026.', source: R + 'B531089873/' },
        { text: '"There seemed to be more people than usual due to a delay in the Shinkansen." — September 2025, the beef-bone shio ramen.', source: R + 'B513135899/' },
        { text: '"You can enjoy 9 dishes for under JPY 2500 for four people!" — July 2026.', source: R + 'B530560420/' },
      ],
      japanese_sources_summary: '食べログ: 一番ラーメン、ラーメン、大阪市東淀川区東中島1丁目19-14、新大阪駅から249m、月〜金11:30〜14:00、17:00〜21:00、土11:30〜14:00、17:00〜23:00、日曜休み、予約可、現金のみ、喫煙可、テイクアウト。口コミ(2025年6月〜2026年7月): 町の中華、大きくてにんにくのきいた kara-age (2〜3人ならハーフ)、塩こしょうで、ピリッとした gyoza、レバニラ、酢豚、スタミナ焼き、にんにくのチャーハン、天津飯、野菜炒め、キムチ、ポテトサラダ、醤油ラーメン900円 (チャーシュー2枚、もやし、のり、メンマ、ねぎ、少し甘いスープ)、牛骨の塩ラーメン、少し太いちぢれ麺、チャーシュー麺、白いあんの皿うどん、ビールにパスタサラダ、4人で9品8,900円、女性4人で切り盛り、気さくな女性たち、店主はハーフをすすめる、新幹線が遅れると混む、18時にはほぼ満席。',
      confidence: 'medium', sources: [TB, R + 'B507817240/', R + 'B513135899/', R + 'B517783868/', R + 'B523682818/', R + 'B525897189/', R + 'B528986499/', R + 'B530560420/', R + 'B530569251/', R + 'B531089873/', R + 'B73802691/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A busy neighbourhood Chinese diner; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市東淀川区東中島1丁目19-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東淀川区東中島一丁目19番14号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525897189/', R + 'B531089873/', R + 'B507817240/'],
    price_note: 'Ramen price from a March 2026 review; other dishes unpriced in the sources.', last_checked: TODAY, items: [
      it('', '', 'Kara-age (half or full)', '', 'Fried', 'no', 'no', 'June 2026.', 'karaage'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'May 2026.', 'gyoza'),
      it('', '', 'Liver and garlic chive stir-fry', '', 'Stir-fries', 'ask', 'no', 'May and June 2026.', 'reba_nira'),
      it('', '', 'Shoyu ramen', '¥900', 'Noodles', 'no', 'no', 'March 2026.', 'shoyu_ramen'),
      it('', '', 'Sara udon', '', 'Noodles', 'no', 'no', 'March 2026.', 'sara_udon'),
    ] }, {
    cuisine: '町の中華・大きくてにんにくのきいた kara-age、2〜3人ならハーフで (2026年6月)。塩こしょうで (2025年11月)・ピリッとした gyoza (2026年5月)・レバニラ炒め、酢豚、スタミナ焼き、にんにくたっぷりのチャーハン、天津飯、野菜炒め、キムチ、ポテトサラダ (2026年)・醤油ラーメン900円、チャーシュー2枚、もやし、のり、メンマ、ねぎ、少し甘いスープ (2026年3月)・牛骨スープの塩ラーメン、少し太いちぢれ麺 (2025年9月)・チャーシュー麺 (2026年6月)・白いあんの皿うどん (2026年3月)・ビールにはパスタサラダがつく (2025年6月)・4人で9品、8,900円 (2026年7月)',
    neighborhood: '東中島1丁目19-14。新大阪駅から約250m (食べログ)、東口の近く',
    gf_detail: 'グルテンフリーではありません。看板は kara-age、gyoza、小麦の麺のラーメンと皿うどん。',
    vegan_detail: 'ヴィーガンではありません。鶏の揚げ物、gyoza、レバー炒め、牛骨のラーメンの中華の店。',
    notes: '[中華・東中島、新大阪の東口の町中華] 新大阪駅の東側から数分の、昔ながらの小さな町の中華で、女性たちが切り盛りしている (2025年9月、2026年6月)。名前はラーメンだが、多くの人のお目当ては kara-age: 大きくてカリッと、にんにくがたっぷりで、2人なら店主がハーフをすすめる (2026年6月)。ほかにピリッとした gyoza、レバニラ、にんにくのチャーハン、酢豚など。早くて安く、2026年7月は4人で9品8,900円。醤油ラーメン (900円、2026年3月) や牛骨の塩ラーメンで締める出張の人もいて、新幹線が遅れると混む (2025年9月)。現金のみ。喫煙可。日曜休み。',
  });
}

// ================================================================ PARIWAR 新大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27117738/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://pariwar.jp/';
  const D = day(['11:00', '22:00']);
  put({
    id: 'osaka_pariwar_shin_osaka', name: 'PARIWAR 新大阪店 (PARIWAR Shin\'osaka ten)', category: 'OMNI',
    lat: 34.732994, lng: 135.504261, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Naan, baked in the tandoor, comes with every set; rice is offered too, but how the curries are thickened is not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog\'s feature list ticks "vegan options", "vegetarian options", "halal options" and "Hindu options", and a vegetable curry appears in the daily sets (2026); nothing on the menu is labelled vegan, and the sets come with naan, chicken tikka and kebab.',
    hours_raw: 'Daily 11:00–22:00, lunch until 14:30; open all year (Tabelog). Free refills of curry and naan at lunch (11:00–14:30) on Mondays and Fridays (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), e-money and QR payments including Alipay (Tabelog). 28 table seats; non-smoking, with ashtrays outside; children welcome, kids menu; English menu; takeaway and delivery; free Wi-Fi; one parking coupon for the Times or NPC lots by the station per ¥1,000 spent (Tabelog). Moved here from an earlier site (February 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '東中島1-21-2, ground floor of 新大阪ハイツ — from the south side of the Shin-Osaka east exit walk about 150 m, turn right at the 東中島4北 crossing with the footbridge, about 100 m, on the corner of the next lights (Tabelog); a tuk-tuk out front (May 2026) and a loud sign beside a well-known ramen shop (July 2026)',
    cuisine: 'Indian-Nepali curries and naan from the tandoor, spice from mild to extra hot (Tabelog) · lunch: Pariwar Lunch ¥900 with a large naan, two daily curries and mini rice (August 2026); B Lunch ¥950 with two curries, naan, rice, salad, chicken tikka and seekh kebab (February 2026); the curries in the sets are chosen by the shop, e.g. keema and vegetable, vegetable and boiled egg, chicken (2026) · Garhwali lunch with naan and chai (June 2026) · dinner sets (Tabelog); a sizzling chicken dish on a hot plate with two house sauces, green and red, and a heaped salad (May 2026) · shrimp curry, chocolate naan to take away, mango lassi, chai, iced chai (2026)',
    website: SITE, gmaps: gm('PARIWAR 新大阪店 東中島1-21-2'), menu_url: null,
    notes: "[Indian · Higashinakajima, curry and naan by the Shin-Osaka east exit] An Indian-Nepali curry house a few minutes from the east exit of Shin-Osaka Station, easy to spot by the tuk-tuk parked out front and a loud sign beside a well-known ramen shop, with Indian TV on a big screen inside (May 2026). Lunch is the deal: sets around ¥900–950 of a big tandoor naan and two daily curries, some with chicken tikka and kebab, and on Mondays and Fridays the curry and naan are refilled free (Tabelog; 2026). The shop picks the curries, often a keema and a vegetable one; staff adjusted the heat for a child (August 2026). Reviews are mixed: some praise the chewy naan and value, others found the curries thin and the naan hard once cold (February and June 2026). Open every day to 22:00.",
    chef_bio: { chef_name: null, roles: ['Chef and owner (unnamed)'], origin: null, background: 'Per the Tabelog listing: curries and naan cooked in a tandoor, the naan kneaded, fermented and baked from chosen ingredients, spice from mild to extra hot, value dinner sets. The site (pariwar.jp, read 2026-11-01) calls it an Indian restaurant and café and pictures its chef, unnamed. Moved to this site from an earlier one (February 2026 review).', philosophy: null, specialty: 'Lunch sets with naan; free curry and naan refills on Monday and Friday lunch.',
      anecdotes: [
        { text: '"They even have a tuk-tuk on display! I wonder if you can actually drive it? (laughs)" — May 2026.', source: R + 'B527853335/' },
        { text: '"The naan was freshly baked and delicious!" — August 2026, a naan set with chicken curry, the heat turned down for a child.', source: R + 'B533970972/' },
        { text: '"While many places offer unlimited naan, I was surprised to find that I could also get a refill on the curry!" — May 2026.', source: R + 'B533448032/' },
      ],
      japanese_sources_summary: '食べログ: PARIWAR 新大阪店、インドカレー・インド料理、大阪市東淀川区東中島1-21-2 新大阪ハイツ 1F、新大阪駅東口 (南側) から約150m、東中島4北の歩道橋の交差点を右へ約100m、毎日11:00〜22:00、ランチは14:30まで、年中無休、予約可、カード・電子マネー・QR (Alipay も) 可、28席 (テーブル)、禁煙 (灰皿は店の外)、子ども可、キッズメニュー、英語のメニュー、テイクアウトとデリバリー、Wi-Fi、駅前の Times と NPC の駐車券 (1,000円ごとに1枚)、ヴィーガン・ベジタリアン・ハラール・ヒンドゥーのメニューありの表示。店の紹介: タンドールで焼くカレーとナン、辛さは甘口から激辛、お得なディナーセット、月曜と金曜のランチはカレーとナンのおかわり自由。公式サイト: インド料理レストラン パリワール、シェフの写真。口コミ(2026年2月〜8月): 移転、パリワールランチ900円、B ランチ950円 (カレー2種、ナン、ライス、サラダ、チキンティッカ、シークカバブ)、カレーは店が選ぶ、野菜カレー、キーマ、ゆで卵のカレー、ナンとチャイの Garhwali ランチ、鉄板のチキン、緑と赤のソース、トゥクトゥク、インドのテレビ、子ども向けに辛さを調整、ナンが冷めると固いという声も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B522551292/', R + 'B522877458/', R + 'B527853335/', R + 'B530462731/', R + 'B531012158/', R + 'B531674099/', R + 'B533148353/', R + 'B533448032/', R + 'B533970972/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu; spice level chosen on request; staff adjusted the heat for a child (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市東淀川区東中島1-21-2 新大阪ハイツ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the shop\'s own description and the shop\'s site; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東淀川区東中島一丁目21番2号 (go) 46m; osaka_teuchi_men_yasuda_shin_osaka in the same building sits on its own Tabelog point about 22 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533148353/', R + 'B522877458/'],
    price_note: 'Lunch prices from February and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pariwar Lunch: large naan, two daily curries, mini rice', '¥900', 'Lunch', 'ask', 'ask', 'August 2026.', 'pariwar_lunch'),
      it('', '', 'B Lunch: two curries, naan, rice, salad, chicken tikka, seekh kebab', '¥950', 'Lunch', 'ask', 'no', 'February 2026.', 'b_lunch'),
      it('', '', 'Vegetable curry (in the daily sets)', '', 'Curry', 'ask', 'ask', 'February and August 2026.', 'veg_curry'),
      it('', '', 'Naan', '', 'Bread', 'no', 'ask', 'Tabelog; 2026.', 'naan'),
    ] }, {
    cuisine: 'タンドールで焼くインド・ネパールのカレーとナン、辛さは甘口から激辛 (食べログ)・昼: 大きなナン、日替わりのカレー2種、ミニライスのパリワールランチ900円 (2026年8月)。カレー2種、ナン、ライス、サラダ、チキンティッカ、シークカバブの B ランチ950円 (2026年2月)。セットのカレーは店が選ぶ (キーマと野菜、野菜とゆで卵、チキンなど、2026年)・ナンとチャイの Garhwali ランチ (2026年6月)・夜はディナーセット (食べログ)。鉄板でジュージューのチキンに緑と赤の自家製ソース、山盛りのサラダ (2026年5月)・エビのカレー、持ち帰りのチョコレートナン、マンゴーラッシー、チャイ、アイスチャイ (2026年)',
    neighborhood: '東中島1-21-2、新大阪ハイツの1階。新大阪駅東口の南側から約150m、歩道橋のある東中島4北の交差点を右へ約100m、つぎの信号の角 (食べログ)。店の前にトゥクトゥク (2026年5月)、有名なラーメン店のとなりの派手な看板 (2026年7月)',
    gf_detail: '要確認。グルテンの情報なし。どのセットにもタンドールで焼いたナンがつく。ライスもあるが、カレーのとろみの説明はない。',
    vegan_detail: '要確認。食べログの特徴に「ヴィーガン」「ベジタリアン」「ハラール」「ヒンドゥー」のメニューありの表示があり、日替わりのセットに野菜カレーが出る (2026年)。ヴィーガンと書かれた料理はなく、セットにはナン、チキンティッカ、カバブがつく。',
    notes: '[インド料理・東中島、新大阪の東口のカレーとナン] 新大阪駅の東口から数分のインド・ネパールのカレーの店で、店の前のトゥクトゥクと、有名なラーメン店のとなりの派手な看板が目印。中では大きな画面にインドのテレビ (2026年5月)。お得なのは昼: 大きなナンと日替わりのカレー2種で約900〜950円、チキンティッカやカバブがつくセットも。月曜と金曜はカレーとナンのおかわりが無料 (食べログ、2026年)。カレーは店が選び、キーマと野菜のことが多い。子どものために辛さを調整してくれた (2026年8月)。評価は分かれていて、もちもちのナンと安さをほめる声も、カレーがうすく、冷めたナンが固かったという声も (2026年2月と6月)。毎日22時まで。',
  });
}

// ================================================================ 香香閣
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27105972/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '14:30'], ['17:00', '22:30']);
  put({
    id: 'osaka_shanshan_kaku_higashinakajima', name: '香香閣 (Shanshan Kaku)', category: 'OMNI',
    lat: 34.732268, lng: 135.504450, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: lunch sets come with kara-age, and gyoza, ramen and cold noodles are wheat; the mapo dishes use Chinese sauces not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Chinese diner of pork, chicken and mapo dishes; lunch sets add kara-age.',
    hours_raw: 'Mon–Sat 11:00–14:30 and 17:00–22:30; closed Sunday; hours may change (Tabelog). Reservations accepted (Tabelog). No cards or e-money; QR payments accepted (Tabelog). Seats about 50 in two joined rooms (April and October 2026), with a tatami room (Tabelog); smoking allowed (Tabelog; October 2026). Opened 18 July 2018 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '東中島4-1-13, ground floor of サンフラッツ新大阪 — 7 min from JR Shin-Osaka (Tabelog), on the east-exit side away from Midosuji, near the APA Hotel (September and October 2026)',
    cuisine: 'Chinese and Sichuan diner · lunch sets about ¥1,000 with rice, soup, salad, pickles and two kara-age, rice and soup refilled: mapo tofu (April, June, September and October 2026), daily yakiniku set ¥1,100 (April 2026), pork with green peppers (October 2026) · shoyu ramen with half fried rice (April 2026); cold Chinese noodles with half fried rice (July 2026) · dinner: gyoza, sweet and sour pork, mapo tofu, mapo eggplant, pork kimchi, water spinach, fried rice (2026); four diners spent about ¥29,000 (April 2026) · all-you-can-eat-and-drink parties around ¥5,000 a head (June and October 2026)',
    website: null, gmaps: gm('香香閣 東中島4-1-13'), menu_url: null,
    notes: "[Chinese · Higashinakajima, a Sichuan-leaning diner east of Shin-Osaka] A roomy neighbourhood Chinese restaurant on the east side of Shin-Osaka Station, open since 2018, where the staff chat in Chinese and the food comes in two or three minutes (June 2026). Office workers come for the ¥1,000 lunch sets: a big plate of mapo tofu, more fragrant than fiery, with rice, soup, salad and two garlicky kara-age, refills included. At night it turns into a drinking spot with gyoza, mapo eggplant, water spinach and an all-you-can-eat-and-drink plan for about ¥5,000, and one diner comes monthly for it (June 2026). The owner is quick and friendly. Smoking is allowed inside. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and kitchen staff'], origin: 'A June 2026 diner: "The staff seemed to be all from China, and the restaurant was filled with conversations in Chinese."', background: 'No shop description on Tabelog; opened 18 July 2018 (Tabelog). Reviewers: "The owner is friendly" (October 2026); "The owner is quick and seems to have a great personality" (June 2026).', philosophy: null, specialty: 'Mapo tofu lunch set; mapo eggplant; all-you-can-eat parties.',
      anecdotes: [
        { text: '"The staff seemed to be all from China, and the restaurant was filled with conversations in Chinese. This gave me a good feeling about the authenticity of the cuisine." — June 2026, the mapo tofu set.', source: R + 'B529706084/' },
        { text: '"It\'s affordable and delicious, with a cost of around JPY 5000 per person for all-you-can-eat and drink." — June 2026, a monthly regular.', source: R + 'B529408492/' },
        { text: '"The Mapo Eggplant was incredibly delicious, and I plan to order it again next time!" — September 2026.', source: R + 'B536666613/' },
      ],
      japanese_sources_summary: '食べログ: 香香閣、四川料理・ラーメン・中華料理、大阪市東淀川区東中島4-1-13 サンフラッツ新大阪 1F、JR 新大阪駅から徒歩7分、月〜土11:00〜14:30、17:00〜22:30、日曜休み、予約可、カード・電子マネー不可、QR 可、座敷あり、喫煙可、2018年7月18日オープン。口コミ(2026年4月〜10月): 昼の定食は約1,000円でごはん、スープ、サラダ、漬物、kara-age 2個つき、ごはんとスープはおかわり自由、麻婆豆腐、日替わりの焼肉定食1,100円、ピーマンと豚肉の炒め物、醤油ラーメンと半チャーハン、冷やし中華、夜は gyoza、酢豚、麻婆茄子、豚キムチ、空芯菜、チャーハン、食べ放題・飲み放題で約5,000円、店内は広く約50席、スタッフは中国出身らしく中国語の会話、気さくな店主、店内で喫煙可。',
      confidence: 'medium', sources: [TB, R + 'B525796238/', R + 'B526622018/', R + 'B527520042/', R + 'B529408492/', R + 'B529706084/', R + 'B532765431/', R + 'B533084837/', R + 'B536215250/', R + 'B536666613/', R + 'B537659925/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Fast lunch sets; staff speak Chinese with one another (June 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市東淀川区東中島4-1-13 サンフラッツ新大阪 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東淀川区東中島四丁目1番13号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533084837/', R + 'B526622018/', R + 'B529408492/'],
    price_note: 'Prices from 2026 reviews, each dated in its note.', last_checked: TODAY, items: [
      it('', '', 'Mapo tofu lunch set (with two kara-age)', '¥1,000', 'Lunch', 'no', 'no', 'October 2026.', 'mapo_set'),
      it('', '', 'Daily yakiniku lunch set', '¥1,100', 'Lunch', 'no', 'no', 'April 2026.', 'yakiniku_set'),
      it('', '', 'Mapo eggplant', '', 'Dinner', 'ask', 'no', 'September 2026.', 'mabo_nasu'),
      it('', '', 'Water spinach stir-fry', '', 'Dinner', 'ask', 'ask', 'June 2026.', 'kushinsai'),
      it('', '', 'All-you-can-eat-and-drink plan', '¥5,000', 'Parties', 'ask', 'no', 'June 2026; about ¥5,000 a head.', 'tabehoudai'),
    ] }, {
    cuisine: '中華と四川の店・昼の定食は約1,000円で、ごはん、スープ、サラダ、漬物、kara-age 2個つき、ごはんとスープはおかわり自由: 麻婆豆腐 (2026年4月、6月、9月、10月)、日替わりの焼肉定食1,100円 (2026年4月)、ピーマンと豚肉の炒め物 (2026年10月)・醤油ラーメンと半チャーハン (2026年4月)、冷やし中華と半チャーハン (2026年7月)・夜: gyoza、酢豚、麻婆豆腐、麻婆茄子、豚キムチ、空芯菜、チャーハン (2026年)。4人で約29,000円 (2026年4月)・食べ放題と飲み放題の宴会、ひとり約5,000円 (2026年6月と10月)',
    neighborhood: '東中島4-1-13、サンフラッツ新大阪の1階。JR 新大阪駅から徒歩7分 (食べログ)。東口側、Midosuji の反対側で、APA ホテルの近く (2026年9月と10月)',
    gf_detail: 'グルテンフリーではありません。昼の定食に kara-age がつき、gyoza、ラーメン、冷やし中華は小麦。麻婆の料理のソースの説明はない。',
    vegan_detail: 'ヴィーガンではありません。豚、鶏、麻婆の料理の中華の店で、昼の定食には kara-age がつく。',
    notes: '[中華・東中島、新大阪の東の四川寄りの中華] 新大阪駅の東側にある広い町の中華で、2018年から。スタッフどうしは中国語で話し、料理は2、3分で出てくる (2026年6月)。会社員のお目当ては1,000円の昼の定食: 辛すぎず香りのいい麻婆豆腐がたっぷりで、ごはん、スープ、サラダ、にんにくのきいた kara-age 2個つき、おかわり自由。夜は飲む店になり、gyoza、麻婆茄子、空芯菜、ひとり約5,000円の食べ放題・飲み放題も。そのために毎月来る人も (2026年6月)。店主は手早くて気さく。店内で喫煙可。日曜休み。',
  });
}

// ================================================================ 次玄
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27045140/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '13:00'], ['17:30', '22:00']);
  put({
    id: 'osaka_jigen_higashinakajima', name: '次玄 (Jigen)', category: 'OMNI',
    lat: 34.732685, lng: 135.504598, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, modern-yaki, negiyaki and yakisoba are wheat-based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: okonomiyaki and yakisoba with pork or horumon, under bonito flakes.',
    hours_raw: 'Mon, Wed–Sun 11:30–13:00 and 17:30–22:00; closed Tuesday and holidays; hours may change (Tabelog). Lunch ends when the rice runs out, sometimes early; arrive by 12:00 (August 2026). Reservations accepted (Tabelog). Cash only: no cards, e-money or QR (Tabelog). 20 seats at a counter and on tatami; smoking allowed (Tabelog; August 2026); takeaway (Tabelog).',
    hours: { 0: W, 2: W, 3: W, 4: W, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: '東中島4-1-37 — 5 min from JR Shin-Osaka (Tabelog), a short walk from the south side of the east gate (February 2026)',
    cuisine: 'Okonomiyaki and teppan dishes cooked on the griddle in front of you (2026) · lunch sets: horumon yakisoba set ¥950–980 with rice, miso soup and pickled daikon (August 2026); pork kimchi set on a hot plate (July 2026) · okonomiyaki: mixed modern-yaki (December 2025, October 2026), buta-tama (August 2026), thick and fluffy with sauce and mayonnaise (October 2026) · negiyaki, yakisoba, stir-fried horumon, seafood stir-fry (February 2026) · foil-grilled shrimp, scallops in butter, stir-fried vegetables (October 2026) · highballs, sake, shochu (Tabelog; 2025) · under ¥5,000 a head with drinks (February 2026)',
    website: null, gmaps: gm('次玄 東中島4-1-37'), menu_url: null,
    notes: "[Okonomiyaki · Higashinakajima, a neighbourhood teppan east of Shin-Osaka] A small okonomiyaki counter a few minutes from the east gate of Shin-Osaka Station, where the owner, with \"that classic Osaka uncle vibe\" (August 2026), cooks okonomiyaki, modern-yaki and a much-liked horumon yakisoba on the griddle in front of you. Lunch is short, 11:30 to 13:00 or until the rice runs out, and a horumon yakisoba set is under ¥1,000 (August 2026); come by noon. In the evening it is an easy drinking spot: modern-yaki, negiyaki and teppan snacks with highballs for under ¥5,000 a head (February 2026). The house has firm ideas about how to eat: one April 2026 pair loved the food but were told to stop chatting and leave after an hour. Cash only; smoking allowed. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner at the griddle (unnamed) and staff'], origin: null, background: 'No shop description on Tabelog. Reviewers: "It seems the restaurant is family-run" (August 2026); "The owner had that classic Osaka uncle vibe" (August 2026); "Regular customers were chatting with the owner" (October 2026); staff were "quite particular about how to sprinkle aonori, pour the sauce, and place the pickled ginger" (April 2026).', philosophy: null, specialty: 'Horumon yakisoba; modern-yaki.',
      anecdotes: [
        { text: '"In other words, it\'s definitely better to arrive by 12:00 PM!" — August 2026, on lunch ending when the rice runs out; the horumon yakisoba set.', source: R + 'B491796771/' },
        { text: '"While watching the M-1 Grand Prix, I savored the teppan dishes and sipped my Highball. It really felt like Osaka!" — December 2025.', source: R + 'B519351926/' },
        { text: '"I can honestly say I had the best yakisoba and okonomiyaki of my life here." — April 2026, a visit that ended with the staff asking the pair to leave.', source: R + 'B529652944/' },
      ],
      japanese_sources_summary: '食べログ: 次玄、お好み焼き、大阪市東淀川区東中島4-1-37、JR 新大阪駅から徒歩5分、月・水〜日11:30〜13:00、17:30〜22:00、火・祝休み、予約可、現金のみ、20席 (カウンターと座敷)、喫煙可、テイクアウト。口コミ(2025年12月〜2026年10月): 目の前の鉄板で焼く、ホルモン焼きそば定食950〜980円 (ごはん、みそ汁、たくあん)、昼はごはんがなくなると終わり、豚キムチ定食、ミックスのモダン焼き、豚玉、ねぎ焼き、焼きそば、ホルモン炒め、海鮮炒め、エビのホイル焼き、ホタテのバター焼き、野菜炒め、ハイボール、5,000円以内、家族経営らしい、大阪のおっちゃんの雰囲気の店主、常連が店主と話す、青のりやソースのかけ方にこだわり、1時間で帰るように言われたという声も。',
      confidence: 'medium', sources: [TB, R + 'B491796771/', R + 'B518711935/', R + 'B519351926/', R + 'B522081937/', R + 'B529076438/', R + 'B529652944/', R + 'B533084613/', R + 'B535298922/', R + 'B537147454/', R + 'B537491997/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats at the griddle; the staff have firm views on how to eat (April 2026). Cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市東淀川区東中島4-1-37',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東淀川区東中島四丁目1番37号 (go) 78m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B491796771/', R + 'B522081937/'],
    price_note: 'Lunch price from an August 2026 review; other dishes unpriced.', last_checked: TODAY, items: [
      it('', '', 'Horumon yakisoba set (lunch)', '¥980', 'Lunch', 'no', 'no', 'August 2026 (¥950 or ¥980).', 'horumon_yakisoba_set'),
      it('', '', 'Mixed modern-yaki', '', 'Okonomiyaki', 'no', 'no', 'December 2025; October 2026.', 'mix_modern'),
      it('', '', 'Buta-tama', '', 'Okonomiyaki', 'no', 'no', 'August 2026.', 'butatama'),
      it('', '', 'Negiyaki', '', 'Okonomiyaki', 'no', 'no', 'February 2026.', 'negiyaki'),
      it('', '', 'Scallops in butter', '', 'Teppan', 'ask', 'no', 'October 2026.', 'hotate_butter'),
    ] }, {
    cuisine: '目の前の鉄板で焼くお好み焼きと鉄板焼き (2026年)・昼の定食: ごはん、みそ汁、たくあんのホルモン焼きそば定食950〜980円 (2026年8月)、鉄板の豚キムチ定食 (2026年7月)・お好み焼き: ミックスのモダン焼き (2025年12月、2026年10月)、豚玉 (2026年8月)、ソースとマヨネーズの厚くてふわふわのお好み焼き (2026年10月)・ねぎ焼き、焼きそば、ホルモン炒め、海鮮炒め (2026年2月)・エビのホイル焼き、ホタテのバター焼き、野菜炒め (2026年10月)・ハイボール、日本酒、焼酎 (食べログ、2025年)・飲んでひとり5,000円以内 (2026年2月)',
    neighborhood: '東中島4-1-37。JR 新大阪駅から徒歩5分 (食べログ)、東改札の南側から少し歩く (2026年2月)',
    gf_detail: 'グルテンフリーではありません。お好み焼き、モダン焼き、ねぎ焼き、焼きそばは小麦。',
    vegan_detail: 'ヴィーガンではありません。お好み焼きと焼きそばに豚やホルモン、かつお節がのる。',
    notes: '[お好み焼き・東中島、新大阪の東の町の鉄板] 新大阪駅の東改札から数分の小さなお好み焼きのカウンターで、「大阪のおっちゃん」の雰囲気の店主 (2026年8月) が、お好み焼き、モダン焼き、人気のホルモン焼きそばを目の前の鉄板で焼く。昼は短く、11時半から13時まで、ごはんがなくなれば終わり。ホルモン焼きそばの定食は1,000円以下 (2026年8月)。12時までに。夜は気軽に飲める店で、モダン焼き、ねぎ焼き、鉄板のつまみとハイボールでひとり5,000円以内 (2026年2月)。食べ方にはこだわりがあり、2026年4月には、料理は大好きだったのに、話すのをやめて帰るように1時間で言われた2人も。現金のみ。喫煙可。火曜休み。',
  });
}

save();
