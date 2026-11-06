// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 41.
//   + 茶と糀つきあかり Cha to Koji Tsuki Akari (koji-marinated fish and chicken set meals in Okazaki near Higashiyama-Nijo)  [core]
//   + 喫茶 喜心 kyoto Kissa Kishin (Western-style breakfast café by Toyokuni Shrine; sister of 朝食 喜心)       [core]
//   + 料庭 八千代 Ryotei Yachiyo (Nanzenji yudofu and kaiseki by a garden on the temple approach; since 1950) [notable]
//   + 錦 平野 Nishiki Hirano (obanzai shop's restaurant in Nishiki Market: dashimaki breakfasts and lunches)  [notable]
//   - 祇をん 豆寅 祇園店 — KIWA group restaurant (kiwa-group.co.jp/mametora_gion): sub-brand of a large parent.
//   Same-name counts first (same brand or operator): つきあかり 1; 喜心 — the official site lists 朝食 喜心 (Gion),
//   a Kamakura breakfast shop and this kissa, none in data, a small group, this one drafted; 八千代 1; 平野 1
//   (いもぼう 平野家本家 is a different house).
//   Taken in queue order on 2026-11-06: core 26034119, 26038151; notable (26003321 skip), 26001833, 26007725. None
//   drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: none of the four has a section (八千代's seat
//   notes add 10–15% service for private garden rooms).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-41');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26003321', 'sub-brand of a large parent: 祇をん 豆寅 祇園店 is a KIWA group restaurant (its site is kiwa-group.co.jp/mametora_gion); KIWA is on the large-parent list');

// ================================================================ 茶と糀つきあかり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034119/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:00', '15:00'];
  put({
    id: 'kyoto_cha_to_koji_tsukiakari', name: '茶と糀つきあかり (Cha to Koji Tsuki Akari)', category: 'OMNI',
    lat: 35.013563, lng: 135.777383, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Koji- and miso-marinated grilled fish and chicken, sashimi with soy, curry; koji and miso can contain barley or wheat (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but set meals centre on fish or chicken (Tabelog; 2025–26 reviews).',
    hours_raw: 'Mon, Tue and Thu 11:00–15:00; Fri–Sun 11:00–15:00 and 17:00–20:00; closed Wednesday (Tabelog). Bookings taken (Tabelog). No cards; e-money and QR accepted (Tabelog). 17 seats with a counter; non-smoking; children welcome (Tabelog). Facing Nijo-dori just west of Higashidori-Nijo in Okazaki, near Heian Shrine; 2 min from the Higashiyama-Nijo bus stop, 10 min from Higashiyama Stn (Tabelog; 2025–26 reviews).',
    hours: { 0: day(L), 1: day(L), 3: day(L), 4: day(L, ['17:00', '20:00']), 5: day(L, ['17:00', '20:00']), 6: day(L, ['17:00', '20:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki near Heian Shrine — Higashiyama-Nijo bus stop',
    cuisine: 'Japanese set meals built on koji: grilled-dish gozen with a choice of koji-marinated fish of the day (mackerel ¥1,800, June 2026; yellowtail, sawara, hamachi) or chicken, half-and-half +¥400, with three-kind sashimi, tofu and miso soup; seafood and tuna nakaochi rice bowls, the "Umiyama" bowl with koji natto; curry; in winter herring in koji amazake and miso with sake-lees soup; hojicha desserts and tea from the owner\'s home region, homemade shiso juice ¥350 with a set (2025–26 reviews)',
    website: null, gmaps: gm('茶と糀つきあかり'), menu_url: null,
    notes: "[Koji set meals · Okazaki near Heian Shrine] A café-like room on Nijo-dori serving gentle Japanese set meals: fish or chicken marinated in koji and grilled, with sashimi of the day, tofu and miso soup, about ¥1,800, plus hojicha sweets and koji natto to take home. Lunch daily but Wednesday; dinner Fri–Sun.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened 4 March 2020 (Tabelog). A December 2025 reviewer says the owner serves tea from the owner\'s home region ("Maruyoshi Omi tea").',
      philosophy: null, specialty: 'Koji-marinated grilled fish.',
      anecdotes: [
        { text: 'A February 2026 return visitor came back for the hojicha and bought the koji natto to eat at home.', source: R + 'B523256342/' },
        { text: 'A September 2026 diner noted many regulars and a warm atmosphere from opening.', source: R + 'B535699467/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 茶と糀つきあかり、日本料理、左京区正往寺町462-2 インペリアル岡崎 1F、東山駅から徒歩10分、市バス東山二条から徒歩2分、月火木 11:00〜15:00、金土日 11:00〜15:00・17:00〜20:00、水曜休み、予約可、カード不可・電子マネー・QR 可、17席、禁煙、子供可、ベジタリアンメニューあり、2020年3月4日オープン。口コミ (2025年10月〜2026年9月、英語): 糀に漬けた魚や鶏の焼き物御膳 (鯖1,800円、ぶり、鰆、はまち)、魚と鶏のハーフ +400円、刺身3種、豆腐、海鮮丼、まぐろの中落ち丼、糀納豆の「海山丼」、カレー、冬は糀甘酒と味噌のにしんと粕汁、ほうじ茶のデザート、店主の故郷のお茶、自家製しそジュース350円、常連が多い。',
      confidence: 'medium', sources: [TB, R + 'B515656174/', R + 'B519092186/', R + 'B523256342/', R + 'B528885996/', R + 'B530040402/', R + 'B531313931/', R + 'B535577012/', R + 'B535699467/', R + 'B536377673/', R + 'B536971344/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Daily fish listed on a blackboard.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区正往寺町462-2 インペリアル岡崎 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.013563, 135.777383); cross-checked: GSI 京都府京都市左京区正往寺町462番地 (lot) 79m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530040402/'],
    price_note: 'No menu read; prices from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Grilled-dish gozen (koji-marinated mackerel)', '¥1,800', 'Set meals', 'ask', 'no', 'June 2026 review; half fish, half chicken +¥400.', 'yakimono_gozen'),
    ] }, {
    cuisine: '糀を軸にした和の定食: 日替わりの魚 (鯖1,800円、2026年6月。ぶり、鰆、はまち) か鶏を糀に漬けて焼く焼き物御膳、ハーフ +400円、刺身3種、豆腐、味噌汁付き。海鮮丼やまぐろの中落ち丼、糀納豆の「海山丼」、カレー、冬は糀甘酒と味噌のにしんと粕汁。ほうじ茶のデザート、店主の故郷のお茶、定食に付ける自家製しそジュース350円 (2025〜26年の口コミ)',
    neighborhood: 'Heian Shrine 近くの岡崎。東山二条のバス停から',
    gf_detail: '要確認。糀や味噌に漬けて焼いた魚や鶏、醤油の刺身、カレー。糀や味噌に麦や小麦が入ることがある (2025〜26年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、定食は魚か鶏が中心 (食べログ、2025〜26年の口コミ)。',
    notes: '[糀の定食・Heian Shrine 近くの岡崎] 二条通に面したカフェのような店で、やさしい和の定食。糀に漬けて焼いた魚や鶏に日替わりの刺身、豆腐、味噌汁で1,800円ほど。ほうじ茶の甘味や持ち帰りの糀納豆も。昼は水曜以外、夜は金〜日。',
  });
}

// ================================================================ 喫茶 喜心 kyoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038151/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kishin.world/';
  const H = day(['07:30', '13:30']);
  put({
    id: 'kyoto_kissa_kishin', name: '喫茶 喜心 kyoto (Kissa Kishin Kyoto)', category: 'OMNI',
    lat: 34.991587, lng: 135.773382, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breakfasts centre on koji bread, Danish and French toast (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: omelettes, French toast, chirimen-sansho and dairy soups (2024–26 reviews).',
    hours_raw: 'Mon and Thu–Sun 7:30–13:30 (last order 13:00); closed Tuesday and Wednesday (Tabelog). No bookings; full from opening on some mornings (Tabelog; 2024–26 reviews). Cards (AMEX), e-money and QR (Tabelog). 18 seats; non-smoking; children welcome (Tabelog). In a renovated house with big windows onto greenery, in front of Toyokuni Shrine near the old Great Buddha Hall site; 10 min from Shichijo Stn (Tabelog; 2024–25 reviews).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'In front of Toyokuni Shrine — 10 min from Shichijo Stn',
    cuisine: 'Western-style breakfast from the Kishin project: "Kishin\'s Western Breakfast" of seasonal soup (pumpkin, pea, corn and white-miso), koji bread and an omelette plate with roasted vegetables, salad, chirimen-sansho and pickles ¥2,800 (December 2024); Kishin omelette ¥2,400 (August 2025), also tomato-mushroom style (July 2026); French toast, mibuna quiche, chocolate gateau; coffee with coffee ice cubes (2024–26 reviews)',
    website: SITE, gmaps: gm('喫茶 喜心 kyoto'), menu_url: null,
    notes: "[Breakfast café · by Toyokuni Shrine] The Western-breakfast sister of Gion's 朝食 喜心: a bright room with greenery outside, serving fluffy omelettes, seasonal soups and koji bread from 7:30 — about ¥2,400–2,800 with a drink extra. Fills fast with travellers; closed Tuesday and Wednesday.",
    chef_bio: { chef_name: null, roles: ['Kishin project team (no person named)'], origin: null,
      background: 'Opened 2 September 2022 (Tabelog). Per the official site: the Kishin project runs 朝食 喜心 breakfasts in Kyoto (Gion) and Kamakura; the name comes from a Zen teaching that cooking and eating are training and a joyful act. Reviewers call this the Western-style sister of the Gion breakfast (December 2024, June 2025).',
      philosophy: 'A hearty breakfast with Japanese spirit, inspired by home cooking (official site).',
      specialty: 'Omelette breakfast with koji bread.',
      anecdotes: [
        { text: 'At 9:00 on a May 2026 weekday the room was full, and every other guest was a foreign visitor.', source: R + 'B529701224/' },
        { text: 'A June 2026 diner found one server struggling with orders, but loved the mibuna quiche.', source: R + 'B530753300/' },
        { text: 'An August 2025 visitor looked out on the site of Toyotomi Hideyoshi\'s Great Buddha Hall while eating the Kishin omelette.', source: R + 'B513085838/' },
      ],
      japanese_sources_summary: '公式サイト: 朝食 喜心、喜心とは「人を良くする」と書く食、禅の教え、京都 (祇園) と鎌倉の朝食、喫茶。食べログ (店舗会員): 喫茶 喜心 kyoto、喫茶店、東山区妙法院前側町427-18 Maana Kiyomizu、七条駅から564m、月木金土日 7:30〜13:30 (L.O. 13:00)、火水休み、予約不可、カード (AMEX)・電子マネー・QR 可、18席、禁煙、子供可、2022年9月2日オープン。口コミ (2024年10月〜2026年7月、英語): Toyokuni Shrine の前、祇園の朝食喜心の姉妹店、喜心の洋朝食2,800円 (かぼちゃやえんどう豆のスープ、糀パン、オムレツ、焼き野菜、ちりめん山椒、漬物)、喜心オムレツ2,400円、トマトときのこのオムレツ、フレンチトースト、壬生菜のキッシュ、チョコレートガトー、コーヒーの氷のアイスコーヒー、外国人客が多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B496638174/', R + 'B498185779/', R + 'B505370341/', R + 'B508583178/', R + 'B510270617/', R + 'B513085838/', R + 'B529701224/', R + 'B530753300/', R + 'B532438873/'] },
    cultural_comfort: { level: 'english', note: 'Official site in English; many international guests (2024–26 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区妙法院前側町427-18 Maana Kiyomizu',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop and the official site; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.991587, 135.773382); cross-checked: GSI 京都府京都市東山区妙法院前側町427番地 (lot) 122m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B498185779/', R + 'B513085838/'],
    price_note: 'No menu read; prices from 2024–25 reviews; drinks extra.', last_checked: TODAY, items: [
      it('', '', "Kishin's Western Breakfast (soup, koji bread, omelette plate)", '¥2,800', 'Breakfast', 'no', 'no', 'October and December 2024 reviews.', 'western_breakfast'),
      it('', '', 'Kishin omelette', '¥2,400', 'Breakfast', 'no', 'no', 'August 2025 review.', 'kishin_omelette'),
    ] }, {
    cuisine: '喜心プロジェクトの洋朝食: 季節のスープ (かぼちゃ、えんどう豆、とうもろこしと白味噌)、糀パン、焼き野菜・サラダ・ちりめん山椒・漬物のオムレツプレートの「喜心の洋朝食」2,800円 (2024年12月)、喜心オムレツ2,400円 (2025年8月)、トマトときのこのオムレツ (2026年7月)、フレンチトースト、壬生菜のキッシュ、チョコレートガトー、コーヒーの氷のアイスコーヒー (2024〜26年の口コミ)',
    neighborhood: 'Toyokuni Shrine の前。七条駅から徒歩10分',
    gf_detail: 'グルテンフリー不可。糀パン、デニッシュ、フレンチトーストが中心の朝食 (2024〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。オムレツ、フレンチトースト、ちりめん山椒、乳製品のスープ (2024〜26年の口コミ)。',
    notes: '[朝食の喫茶・Toyokuni Shrine の前] 祇園の朝食 喜心の洋朝食の姉妹店。緑の見える明るい店で、7時半からふわふわのオムレツ、季節のスープ、糀パン。2,400〜2,800円ほどで飲み物は別。旅行者ですぐ埋まる。火水休み。',
  });
}

// ================================================================ 料庭 八千代
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001833/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://kyoto-nanzenji-yachiyo.jp';
  const H = day(['11:00', '15:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_ryotei_yachiyo_nanzenji', name: '料庭 八千代 (Ryotei Yachiyo)', category: 'OMNI',
    lat: 35.011076, lng: 135.789207, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yudofu and yuba with soy-based dipping sauce, shojin tempura and sesame tofu (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegan and vegetarian options, and yudofu sets include shojin tempura, but broths may use dashi (Tabelog; 2026 reviews).',
    hours_raw: '11:00–15:00 (last orders food 14:00, drinks 14:45) and 17:00–21:00 (last orders food 19:30, drinks 20:45), daily; Tabelog also notes lunch to 16:00 (last order 15:00) (Tabelog). Bookings taken; kaiseki from ¥6,000 must be booked ahead; seat-only bookings may limit the menu (Tabelog). Private garden rooms (8) add 10% service up to ¥5,500 per person and 15% on kaiseki above (Tabelog). Cards incl. UnionPay and PayPay (Tabelog). 80 seats: tatami, sunken seats and tables facing the garden, two terrace seats; children welcome with a kids\' menu; non-smoking; parking (Tabelog; 2026 reviews). On the Nanzenji approach by the Incline; 5 min from Keage Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nanzenji approach — 5 min from Keage Stn',
    cuisine: 'Nanzenji yudofu and Kyoto kaiseki by a garden (Tabelog): yudofu gozen "Ume" with seasonal hassun, sesame tofu, shojin tempura, soup, rice and pickles; the "Take" tray with fresh yuba ¥4,000 (August 2026); a ¥3,500 course (September 2026); yuba shabu-shabu gozen with yuba rice bowl; chilled oboro-dofu and chilled tofu sets in summer; sukiyaki; kaiseki from ¥6,000 by reservation (Tabelog; 2026 reviews)',
    website: SITE, gmaps: gm('料庭 八千代 南禅寺'), menu_url: TB + 'dtlmenu/',
    notes: "[Yudofu & kaiseki · Nanzenji approach] A long-established garden restaurant on the way to Nanzenji, with tatami and table rooms looking onto a koi pond: Nanzenji yudofu sets with yuba, sesame tofu and shojin tempura (about ¥3,500–4,000), summer chilled tofu, or kaiseki by reservation. Open daily.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff (unnamed)'], origin: null,
      background: 'Opened 24 December 1950 (Tabelog).',
      philosophy: 'Authentic Kyoto cuisine and Nanzenji yudofu in a calm Japanese setting (Tabelog).',
      specialty: 'Nanzenji yudofu; yuba.',
      anecdotes: [
        { text: 'Watching the koi in August 2026, a child was invited by staff to feed them.', source: R + 'B534727388/' },
        { text: 'An October 2026 guide bringing honeymooners from New York found the couple satisfied, but felt an air of superiority bordering on over-politeness in the service.', source: R + 'B538196199/' },
        { text: 'A September 2026 diner enjoyed the ¥3,500 course but felt that much tofu was a one-time experience.', source: R + 'B535197581/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 料庭 八千代、日本料理・豆腐料理・すき焼き、左京区南禅寺福地町34、蹴上駅1番出口から徒歩5分、11:00〜15:00・17:00〜21:00 (ランチは16:00まで L.O. 15:00 とも)、無休、予約可 (6,000円以上の会席は要予約)、庭園個室8室はサービス料10% (5,500円まで) または15% (5,500円超の会席)、80席 (座敷、掘りごたつ、庭に面したテーブル)、子供可・キッズメニュー、禁煙、駐車場、カード・PayPay 可、1950年12月24日オープン、ヴィーガン・ベジタリアンメニューあり、インクラインと南禅寺参道に面する。口コミ (2026年7〜10月、英語): 南禅寺名物湯豆腐、竹 (生湯葉付き) 4,000円、3,500円のコース、湯葉しゃぶ御膳、冷やしおぼろ豆腐、ごま豆腐、精進揚げ、八寸、鯉の池の庭、テラス席、サービスが慇懃すぎるという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B532530363/', R + 'B534043209/', R + 'B534550054/', R + 'B534693928/', R + 'B534727388/', R + 'B535197581/', R + 'B536215040/', R + 'B536682751/', R + 'B537768165/', R + 'B538196199/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set menus; garden rooms by reservation.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区南禅寺福地町34',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the restaurant; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.011076, 135.789207); cross-checked: GSI 京都府京都市左京区南禅寺福地町34番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534043209/', R + 'B535197581/'],
    price_note: 'No menu read; prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Nanzenji yudofu "Take" with fresh yuba', '¥4,000', 'Gozen', 'ask', 'ask', 'August 2026 review.', 'yudofu_take'),
      it('', '', 'Yudofu course', '¥3,500', 'Gozen', 'ask', 'ask', 'September 2026 review.', 'yudofu_course'),
    ] }, {
    cuisine: '庭を眺める南禅寺の湯豆腐と京会席 (食べログ): 季節の八寸、ごま豆腐、精進揚げ、吸物、ご飯、漬物の湯豆腐御膳「梅」、生湯葉付きの「竹」4,000円 (2026年8月)、3,500円のコース (2026年9月)、湯葉丼の付く湯葉しゃぶ御膳、夏の冷やしおぼろ豆腐や冷奴の御膳、すき焼き、要予約の6,000円からの会席 (食べログ、2026年の口コミ)',
    neighborhood: '南禅寺参道。蹴上駅から徒歩5分',
    gf_detail: '要確認。醤油のつけだれの湯豆腐と湯葉、精進揚げ、ごま豆腐 (2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはヴィーガン・ベジタリアンメニューありとあり精進揚げも付くが、出汁を使う可能性がある (食べログ、2026年の口コミ)。',
    notes: '[湯豆腐と会席・南禅寺参道] 南禅寺へ向かう道の老舗の庭園料亭。鯉の池を望む座敷やテーブルで、湯葉、ごま豆腐、精進揚げの付く南禅寺湯豆腐 (3,500〜4,000円ほど)、夏は冷やし豆腐、会席は予約で。無休。',
  });
}

// ================================================================ 錦 平野
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26007725/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://nishiki-hirano.com/';
  const H = day(['08:30', '10:30'], ['11:00', '16:30']);
  put({
    id: 'kyoto_nishiki_hirano', name: '錦 平野 (Nishiki Hirano)', category: 'OMNI',
    lat: 35.004960, lng: 135.763488, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dashimaki, grilled fish and obanzai beside tempura, udon and soba; soy-based dashi (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashimaki with dashi, fish, beef (2026 reviews).',
    hours_raw: 'Breakfast 8:30–10:30 (last order 10:15) and lunch 11:00–16:30 (last food order 16:00), daily except New Year and occasional closures; Tabelog also gives eat-in 10:00–19:00 (Tabelog). Bookings taken (Tabelog). Cards, e-money and QR (Tabelog). 50 seats; non-smoking; children welcome; take-out of dashimaki and obanzai (Tabelog). Inside Nishiki Market; 6 min from Karasuma Stn (Tabelog; official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki Market — 6 min from Karasuma Stn',
    cuisine: 'The restaurant of an obanzai shop famed for hand-grilled dashimaki (official site): breakfast gozen of freshly made dashimaki with apple-smoked silver salmon ¥2,750 (October 2026) or smoked mackerel ¥1,980 (August 2026), obanzai, rice refills and dashi chazuke to finish; lunch wagyu-and-dashimaki gozen ¥2,300 (July 2026), special tempura and zaru soba gozen, tempura udon, inari sushi with sansho (2026 reviews)',
    website: SITE, gmaps: gm('錦 平野 錦市場'), menu_url: TB + 'dtlmenu/',
    notes: "[Dashimaki breakfast · Nishiki Market] The dining room of a century-old Nishiki obanzai shop: from 8:30, trays of freshly rolled dashimaki with thick smoked salmon or mackerel, obanzai and a dashi chazuke finish, about ¥2,000–2,750; tempura and soba sets at lunch. Busy with visitors; book ahead.",
    chef_bio: { chef_name: null, roles: ['Company representative 岡 篤 (official site)'], origin: null,
      background: 'Per the official site: an obanzai specialist in Nishiki Market, "raised by customers particular about flavour", hand-grilling dashimaki daily and selling wholesale; a July 2026 reviewer calls it over 100 years old.',
      philosophy: 'The unchanging taste of Kyoto, handmade daily (official site).',
      specialty: 'Dashimaki tamago.',
      anecdotes: [
        { text: 'An August 2026 breakfast guest found the ¥1,800 dashimaki gozen unavailable and settled for smoked mackerel; plenty of foreigners were eating too.', source: R + 'B533596509/' },
        { text: 'An October 2026 diner found the dashimaki thinner than in photos and too wet with dashi, though the salmon was generous.', source: R + 'B537623609/' },
        { text: 'A September 2026 solo diner expected something more traditional and found it geared to international visitors, many buying dashimaki to eat in.', source: R + 'B536350996/' },
      ],
      japanese_sources_summary: '公式サイト: 錦 平野、京都・錦市場のお惣菜専門店、変わらぬ京都の味を毎日手作り、出汁を大切に一本一本手焼きのだし巻き、業務用商品、レストラン、中京区錦堺町東入、代表 岡 篤。食べログ (店舗会員): 錦 平野、日本料理・揚げ物、中京区錦小路通堺町東入ル中魚屋町489-1、烏丸駅から徒歩6分、朝 8:30〜10:30 (L.O. 10:15)、昼 11:00〜16:30 (L.O. 16:00)、イートイン 10:00〜19:00 とも、年末年始ほか不定休、予約可、カード・電子マネー・QR 可、50席、禁煙、子供可、テイクアウト。口コミ (2026年7〜10月、英語): 百年以上の老舗、焼きたてだし巻きとりんごで燻した銀鮭の御膳2,750円、鯖の燻製の朝食1,980円、おばんざい、ご飯のおかわり、出汁茶漬け、和牛とだし巻きの御膳2,300円、天ぷらとざるそば、天ぷらうどん、山椒の稲荷寿司、外国人客が多い、だし巻きが薄いという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B532568773/', R + 'B533596509/', R + 'B533782361/', R + 'B534132665/', R + 'B534564442/', R + 'B535415811/', R + 'B536350996/', R + 'B537183418/', R + 'B537623609/', R + 'B538026651/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set menus with photos; busy with international visitors.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通堺町東入ル中魚屋町489-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004960, 135.763488); cross-checked: GSI 京都府京都市中京区中魚屋町489番地 (lot) 18m; 16.9 m from kyoto_fuka_nishiki; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538026651/', R + 'B533596509/', R + 'B532568773/'],
    price_note: 'No menu read; prices from 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Smoked silver salmon and dashimaki breakfast gozen', '¥2,750', 'Breakfast', 'ask', 'no', 'October 2026 review.', 'salmon_dashimaki_gozen'),
      it('', '', 'Smoked mackerel and dashimaki breakfast gozen', '¥1,980', 'Breakfast', 'ask', 'no', 'August 2026 review.', 'saba_dashimaki_gozen'),
      it('', '', 'Wagyu and dashimaki lunch gozen', '¥2,300', 'Lunch', 'ask', 'no', 'July 2026 review.', 'wagyu_dashimaki_gozen'),
    ] }, {
    cuisine: '手焼きのだし巻きで知られるおばんざい屋のレストラン (公式サイト): 朝は焼きたてのだし巻きにりんごで燻した厚切り銀鮭 (2,750円、2026年10月) や燻製の鯖 (1,980円、2026年8月)、おばんざい、ご飯のおかわりと締めの出汁茶漬けの御膳。昼は和牛とだし巻きの御膳2,300円 (2026年7月)、特選天ぷらとざるそばの御膳、天ぷらうどん、山椒をかける稲荷寿司 (2026年の口コミ)',
    neighborhood: '錦市場の堺町。烏丸駅から徒歩6分',
    gf_detail: '要確認。だし巻き、焼き魚、おばんざいと、天ぷら、うどん、そば。醤油の出汁 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のだし巻き、魚、牛肉 (2026年の口コミ)。',
    notes: '[だし巻きの朝ごはん・錦市場] 錦市場で百年続くおばんざい屋の食事処。朝8時半から、巻きたてのだし巻きに厚切りの燻製鮭や鯖、おばんざい、締めの出汁茶漬けの御膳で2千〜2,750円ほど。昼は天ぷらやそばの御膳。観光客で混むので予約を。',
  });
}

save();
