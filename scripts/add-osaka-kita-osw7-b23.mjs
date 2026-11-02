// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), notable queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 23.
//   + 立ち寿司 杉尾 西中島店 Tachi Zushi Sugio (standing sushi bar by Nishinakajima-Minamigata, open to 2:30)
//   + とにかく米にこだわる店 ※米屋 Komeya (COCOYA) (rice-obsessed izakaya: clay-pot rice, junmai sake, mapo curry; since 2004)
//   + 川北商店 新大阪店 Kawakita Shoten (yakitori and chicken izakaya in 新なにわ大食堂 at Shin-Osaka Station)
//   + ベトナムカフェ＆ビア ngon ca phe (Vietnamese café by the Shinkansen central exit, from 6:30)
//   Lane check: every id above is even. The first four even ids of `next notable 80 shin-osaka`; no skips.
//   Chain check (integrator asked for Sugio and Kawakita):
//   - Sugio: web search (2026-11-02) finds only this Nishinakajima shop; the "西中島店" suffix suggests others, but none is named.
//     Drafted; flagged in the report.
//   - Kawakita Shoten: a job listing seen in search (2026-11-02) names 梅田店, 新大阪店 and KITTE大阪店, and an August 2026 review
//     mentions the KITTE shop. Three known same-concept shops = small group, kept; none is in data. Flagged in the report.
//   - Komeya and ngon ca phe: each shop's own site (cocoya558.com, ngoncaphe.jp, read 2026-11-02) shows only this shop.
//   None of the four is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Pins: Kawakita's Tabelog point is 217 m from GSI's point for 西中島5-15-5 (as with Stand Fuji in the same food hall, b21), so it is
//   loc_approx 'single'; it is 28 m from osaka_sakanaya_stand_fuji_shin_osaka. Sugio shares 第一ユヤマビル with
//   osaka_yama_goya_nishinakajima, 13 m apart. Stacked-pin check run before handoff.
//   No ramen blocks. open_late per Greg's 2026-11-02 ruling (true when the shop closes after 22:00).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-23');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 立ち寿司 杉尾 西中島店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27096700/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '02:30']);
  put({
    id: 'osaka_tachizushi_sugio_nishinakajima', name: '立ち寿司 杉尾 西中島店 (Tachi Zushi Sugio Nishinakajima Ten)', category: 'OMNI',
    lat: 34.726712, lng: 135.499299, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi comes with soy sauce, and some pieces are brushed with sauce (October 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and fish bar.',
    hours_raw: 'Mon–Sat 17:00–02:30 (last order 02:00); closed Sunday; the third Monday from 17:00 only; holiday hours by phone (Tabelog). A lunch service on Monday to Saturday is mentioned by a July 2026 diner but not on Tabelog. No reservations (Tabelog). Cards and PayPay accepted; ¥275 charge (Tabelog). 43 places, 10 at the counter, mostly standing; non-smoking; no children (Tabelog). Osaka City premium vouchers accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島3-19-7, 第一ユヤマビル — 2 min from Nishinakajima-Minamigata Stn, in a narrow alley of small bars (Tabelog; June 2026)',
    cuisine: 'Standing sushi bar: authentic sushi made in front of you, ordered by the piece from ¥132 (Tabelog shop text) · nigiri with smallish rice and large toppings: uni, akami, three kinds of salmon, tuna, horse mackerel, ikura gunkan, maki rolls (2026) · omakase nigiri (July 2026) · fish dishes before the sushi: grilled fish, red-fish sashimi with green onion and nori (October 2026); homemade milk tofu (June 2026) · draft beer, Asahi Super Dry bottles, sake and shochu (2026) · about ¥2,000–4,000 a head, more if you stay (2026)',
    website: null, gmaps: gm('立ち寿司 杉尾 西中島店'), menu_url: null,
    notes: "[Sushi · Nishinakajima, a standing sushi bar open past 2 a.m.] A bright, lively standing sushi bar in an alley near Nishinakajima-Minamigata, where the chefs make each piece in front of you and you order one at a time, from ¥132 (Tabelog). The rice is small and the toppings big, so you can try many: uni, akami, three kinds of salmon, then ikura and rolls (2026). Start with a beer and the homemade milk tofu or some grilled fish (2026). It is open until 2:30, a favourite last stop before the final train (September–October 2026). Opinions vary on value; some found it pricey for the quality (July 2026). Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Sushi chefs (unnamed)'], origin: null, background: 'Tabelog shop text: a casual standing sushi bar two minutes from Nishinakajima-Minamigata, where skilled chefs make authentic sushi in front of you with attention to freshness, thickness and preparation of the toppings. Reviewers: reliable, lively service (July 2026); a known spot in the area for years (September 2026).', philosophy: 'Freshness, thickness and preparation of the toppings (Tabelog shop text).', specialty: 'Sushi by the piece; uni.',
      anecdotes: [
        { text: '"The rice is on the smaller side, which is a great point because it allows you to enjoy a variety of toppings in small portions!" — October 2026.', source: R + 'B538354014/' },
        { text: '"One of the dishes I was looking forward to was the \'homemade milk tofu\'." — June 2026.', source: R + 'B531537446/' },
        { text: '"It\'s great that they\'re open until late, allowing me to stop by for a quick delicious bite before the last train!" — September 2026.', source: R + 'B537596565/' },
      ],
      japanese_sources_summary: '食べログ: 立ち寿司 杉尾 西中島店、立ち食い寿司・海鮮・居酒屋、大阪市淀川区西中島3-19-7 第一ユヤマビル、西中島南方駅から徒歩2分、月〜土17:00〜翌2:30 (L.O. 2:00)、日休み、第3月曜は17時から、予約不可、カードと PayPay 可、チャージ275円、43席 (カウンター10)、禁煙、子ども不可、大阪市のプレミアム商品券可、店の紹介: 気軽な立ち寿司で本格的な寿司、職人が目の前でにぎる、ネタの鮮度、厚み、仕込みにこだわる、1貫132円から。口コミ (2026年6〜10月): 細い路地の明るい店、シャリは小さめでネタは大きい、ウニ、赤身、サーモン3種、マグロ、アジ、いくらの軍艦、巻物、おまかせのにぎり、焼き魚、ねぎと海苔をのせた赤身の刺身、自家製の牛乳豆腐、生ビール、Asahi SUPER DRY の瓶、日本酒、夜おそくまで開いているので終電前に、昼の営業もという声、値段のわりにという声も。',
      confidence: 'medium', sources: [TB, R + 'B531006093/', R + 'B531537446/', R + 'B533634711/', R + 'B534059232/', R + 'B534062160/', R + 'B535910093/', R + 'B536322211/', R + 'B537596565/', R + 'B538033855/', R + 'B538354014/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing counter; order piece by piece from the chef. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-19-7 第一ユヤマビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目19番7号 (go) 21m; same building (第一ユヤマビル) as osaka_yama_goya_nishinakajima, 13 m apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B534059232/'],
    price_note: 'From ¥132 a piece (Tabelog shop text); about ¥2,000–4,000 a head (2026).', last_checked: TODAY, items: [
      it('', '', 'Nigiri, by the piece', 'from ¥132', 'Sushi', 'ask', 'no', 'Tabelog shop text.', 'nigiri'),
      it('', '', 'Omakase nigiri', '', 'Sushi', 'ask', 'no', 'July 2026.', 'omakase'),
      it('', '', 'Homemade milk tofu', '', 'Dishes', 'ask', 'no', 'June 2026.', 'milk_tofu'),
      it('', '', 'Uni nigiri', '', 'Sushi', 'ask', 'no', 'September 2026.', 'uni'),
    ] }, {
    cuisine: '立ち寿司: 職人が目の前でにぎる本格的な寿司を、1貫132円から1貫ずつ (食べログの店の紹介)・シャリは小さめでネタは大きいにぎり: ウニ、赤身、サーモン3種、マグロ、アジ、いくらの軍艦、巻物 (2026年)・おまかせのにぎり (2026年7月)・寿司の前に魚料理: 焼き魚、ねぎと海苔をのせた赤身の刺身 (2026年10月)。自家製の牛乳豆腐 (2026年6月)・生ビール、Asahi SUPER DRY の瓶、日本酒、焼酎 (2026年)・ひとり約2,000〜4,000円、長くいればもっと (2026年)',
    neighborhood: '西中島3-19-7、第一ユヤマビル。西中島南方駅から徒歩2分、小さな店が並ぶ細い路地 (食べログ。2026年6月)',
    gf_detail: '要確認。グルテンの情報なし。寿司は醤油で、たれをぬったネタもある (2026年10月)。',
    vegan_detail: 'ヴィーガンではありません。寿司と魚の店。',
    notes: '[寿司・西中島、夜中2時すぎまでの立ち寿司] 西中島南方駅の近くの路地にある、明るくにぎやかな立ち寿司。職人が目の前でにぎり、1貫ずつ132円から頼める (食べログ)。シャリは小さめでネタは大きいので、いろいろ食べられる: ウニ、赤身、サーモン3種、それからいくらや巻物 (2026年)。まずはビールと自家製の牛乳豆腐か焼き魚から (2026年)。2時半まで開いていて、終電前の最後の一軒に人気 (2026年9〜10月)。値段のわりにという声もある (2026年7月)。日曜休み。',
  });
}

// ================================================================ とにかく米にこだわる店 ※米屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27008732/'; const R = TB + 'dtlrvwlst/'; const W = 'https://cocoya558.com';
  const WD = day(['11:30', '14:00'], ['15:00', '23:00']); const WE = day(['15:00', '23:00']);
  put({
    id: 'osaka_komeya_cocoya_nishinakajima', name: 'とにかく米にこだわる店 ※米屋 (Tonikaku Kome ni Kodawaru Mise Komeya)', category: 'OMNI',
    lat: 34.726513, lng: 135.501449, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The rice itself is plain, but dishes include kara-age, chicken nanban, mapo curry and shumai, and many use koji or rice flour (shop site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and fish dishes; pork miso soup.',
    hours_raw: 'Tabelog: Mon–Fri 11:30–14:00 (last order 13:45) and 15:00–23:00 (food last order 22:00, drinks 22:30); Sat, Sun and holidays 15:00–23:00; closing days vary. The shop site gives lunch Mon–Fri 11:30–15:00 (not on holidays) and dinner Sun–Thu 15:00–23:00 (last order 22:00), Fri–Sat 15:00–24:00 (last order 23:00); lunch resumed 15 October 2025. Reservations accepted (Tabelog). Cards and QUICPay accepted; ¥400 charge, included in courses; the ¥1,000 lunch price is for cash (Tabelog; September 2026). 26 seats, semi-private areas with roll curtains; smoking allowed, so no children (Tabelog). Opened 3 April 2004 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島3-6-6, ヴェルフォーレ — 3 min from Nishinakajima-Minamigata Stn and Hankyu Minamikata Stn (Tabelog)',
    cuisine: 'Izakaya built around rice: the owner, a certified rice taster, picks rice through a five-star rice meister\'s shop, cooked in a clay pot (shop site) · glossy rice cooked to order, about 30 minutes (September 2026) · 40–50 junmai sakes, tasting sets and all-you-can-drink (shop site) · signature dishes using koji and rice flour; house mapo curry tofu, shown on local TV (shop site) · lunch: pork kara-age (in rice oil, salt-koji marinade) with pork miso soup ¥1,000 cash (September 2026); Ryukyu pork soup set with marinated tuna ¥1,500 (October 2026); mapo curry (October 2026) · dinner courses, e.g. "Niku Nakajima" 10 dishes ¥4,500, all-you-can-drink +¥2,000, with beef shabu salad, horse-meat yukke, tsukune hamburg and meat seared at the table (September–October 2026); à la carte salt-koji kara-age, rice salad, mapo tofu, shumai, chicken nanban (October 2026)',
    website: W, gmaps: gm('※米屋 西中島'), menu_url: W,
    notes: "[Izakaya · Nishinakajima, an izakaya where the rice is the star] An izakaya near Nishinakajima-Minamigata, open since 2004, run around rice: the owner, a certified rice taster, chooses the grain, and it is cooked in a clay pot to order, glossy and sweet (shop site; 2026). Pair it with 40–50 junmai sakes and dishes made for rice, such as salt-koji kara-age, chicken nanban and the house mapo curry (2026). Lunch is a ¥1,000 kara-age and pork-soup set; dinner courses run about ¥4,500 (2026). Smoking is allowed, so no children.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), certified rice taster'], origin: null, background: 'Shop site: COCOYA (※米屋) is an izakaya themed on enjoying rice; the owner is a certified rice and taste appraiser (米・食味鑑定士) and buys rice selected at a five-star rice meister\'s shop in the city; the rice is cooked in a clay pot made for rice; 40–50 junmai sakes; the mapo curry was featured on Kansai TV programmes in 2019. Opened 3 April 2004 (Tabelog).', philosophy: 'The appeal of rice beyond plain white rice (shop site).', specialty: 'Clay-pot rice; mapo curry.',
      anecdotes: [
        { text: '"Most importantly, the star of the meal, the white rice, is cooked for 30 minutes after ordering, reflecting their dedication." — September 2026, pork kara-age and tonjiru set for JPY 1,000.', source: R + 'B537249937/' },
        { text: '"Towards the end, they served glossy white rice cooked in a pot." — October 2026.', source: R + 'B537359592/' },
        { text: '"The Mapo Curry was also incredibly tasty, and I couldn\'t put my chopsticks down." — October 2026, lunch.', source: R + 'B538256016/' },
      ],
      japanese_sources_summary: '食べログ: とにかく米にこだわる店 ※米屋、居酒屋・創作料理・カレー、大阪市淀川区西中島3-6-6 ヴェルフォーレ、西中島南方駅と南方駅から徒歩3分、月〜金11:30〜14:00 (L.O. 13:45)、15:00〜23:00 (L.O. 料理22:00、ドリンク22:30)、土・日・祝15:00〜23:00、予約可、カードと QUICPay 可、チャージ400円 (コースは込み)、26席、ロールカーテンの半個室、喫煙可のため子どもは不可、2004年4月3日オープン。店のサイト: お米を楽しむ居酒屋、米・食味鑑定士の店主が五つ星お米マイスターの店で選んだ米、炊飯専用の土鍋で炊く、純米酒40〜50種類、糀や米粉の料理、麻婆咖喱、ランチは月曜〜金曜11:30〜15:00、夜は日〜木15:00〜23:00、金・土15:00〜24:00。口コミ (2026年9〜10月): 注文から30分かけて炊くつやつやのごはん、塩糀の豚から揚げと豚汁の定食1,000円 (現金)、Ryukyu の豚汁の定食とマグロの漬け1,500円、麻婆カレー、「Niku Nakajima」コース10品4,500円 (飲み放題2,000円)、牛しゃぶサラダ、馬刺しユッケ、つくねハンバーグ、目の前でバーナーであぶる肉、塩糀から揚げ、ごはんのサラダ、麻婆豆腐、焼売、チキン南蛮。',
      confidence: 'medium', sources: [TB, W, R + 'B462432413/', R + 'B489320892/', R + 'B535041179/', R + 'B536266066/', R + 'B537249937/', R + 'B537343805/', R + 'B537359592/', R + 'B537788157/', R + 'B538212816/', R + 'B538256016/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book for courses; smoking allowed, no children. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-6-6 ヴェルフォーレ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and shop site; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目6番6号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537249937/', R + 'B537788157/', R + 'B489320892/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch: pork kara-age and pork miso soup set', '¥1,000', 'Lunch', 'no', 'no', 'September 2026; cash price.', 'karaage_tonjiru'),
      it('', '', 'Lunch: Ryukyu pork soup set with marinated tuna', '¥1,500', 'Lunch', 'ask', 'no', 'October 2026.', 'ryukyu_set'),
      it('', '', 'Niku Nakajima course (10 dishes)', '¥4,500', 'Courses', 'ask', 'no', 'September 2026; all-you-can-drink +¥2,000.', 'niku_course'),
      it('', '', 'Mapo curry', '', 'Rice dishes', 'ask', 'no', 'October 2026.', 'mapo_curry'),
    ] }, {
    cuisine: 'ごはんが主役の居酒屋: 米・食味鑑定士の店主が五つ星お米マイスターの店で選んだ米を、土鍋で炊く (店のサイト)・注文してから約30分で炊くつやつやのごはん (2026年9月)・純米酒40〜50種類、利き酒セットと飲み放題 (店のサイト)・糀や米粉を使った名物料理、麻婆咖喱はテレビでも紹介 (店のサイト)・ランチ: 米油で揚げる塩糀の豚から揚げと豚汁の定食、現金で1,000円 (2026年9月)。Ryukyu の豚汁の定食とマグロの漬け1,500円 (2026年10月)。麻婆カレー (2026年10月)・夜のコース、たとえば10品4,500円の「Niku Nakajima」、飲み放題は2,000円、牛しゃぶサラダ、馬刺しユッケ、つくねハンバーグ、目の前でバーナーであぶる肉 (2026年9〜10月)。一品は塩糀のから揚げ、ごはんのサラダ、麻婆豆腐、焼売、チキン南蛮 (2026年10月)',
    neighborhood: '西中島3-6-6、ヴェルフォーレ。西中島南方駅と阪急 南方駅から徒歩3分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。ごはんそのものは白米だが、から揚げ、チキン南蛮、麻婆カレー、焼売があり、糀や米粉を使った料理も多い (店のサイト)。',
    vegan_detail: 'ヴィーガンではありません。肉と魚の料理、豚汁。',
    notes: '[居酒屋・西中島、ごはんが主役の居酒屋] 西中島南方駅の近くで2004年から続く、ごはんを中心にした居酒屋。米・食味鑑定士の店主が米を選び、注文してから土鍋で炊くので、つやつやで甘い (店のサイト。2026年)。純米酒40〜50種類と、塩糀のから揚げ、チキン南蛮、名物の麻婆咖喱などごはんに合う料理を (2026年)。ランチはから揚げと豚汁の1,000円の定食、夜のコースは約4,500円 (2026年)。喫煙可なので子どもは不可。',
  });
}

// ================================================================ 川北商店 新大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27125836/'; const R = TB + 'dtlrvwlst/';
  const D = day(['10:00', '23:00']);
  put({
    id: 'osaka_kawakita_shoten_shin_osaka', name: '川北商店 新大阪店 (Kawakita Shoten Shin-Osaka Ten)', category: 'OMNI',
    lat: 34.733732, lng: 135.498996, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers come with salt or sauce; the menu has kara-age, chicken nanban and croquettes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori izakaya.',
    hours_raw: 'Daily 10:00–23:00 (last order 21:45) on Tabelog; reviewers say it opens at 11:00 (October 2026). Happy hour 11:00–18:00, drinks from ¥290 (October 2026). No reservations (Tabelog). AMEX, e-money and QR accepted (Tabelog). Counter seating; non-smoking (Tabelog). Busy at about 18:30 on weekdays, a short wait (October 2026). Opened 20 October 2021 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島5-15-5, in 新なにわ大食堂 at Shin-Osaka Station, just outside the subway exit, next to osaka_sakanaya_stand_fuji_shin_osaka (Tabelog; September–October 2026)',
    cuisine: 'Yakitori and chicken izakaya (2026) · signature "Kawakita mince" skewers of coarse chicken mince with cartilage, salt or sauce, five for ¥590 (September–October 2026) · Ooyama chicken thigh, thigh with green onion, chicken skin, liver, onion skewers; five-skewer platter ¥790 (September 2026) · crispy chicken skin, also to take away (August 2026) · Ooyama chicken kara-age, three-kind sashimi platter ¥880, "infinite green peppers" ¥390, beef-tendon croquette (September 2026) · lunch: chicken nanban set with egg over rice or a mini soboro bowl and chicken soup, about ¥1,100 (September–October 2026)',
    website: null, gmaps: gm('川北商店 新大阪店'), menu_url: null,
    notes: "[Yakitori · Shin-Osaka Station, mince skewers and a long happy hour] A busy yakitori counter in the food hall by the subway exit at Shin-Osaka Station, popular with travellers killing time before the Shinkansen, thanks to a happy hour from 11:00 to 18:00 with drinks from ¥290 (October 2026). Order the signature Kawakita mince skewers, coarse chicken with crunchy cartilage, five for ¥590, with salt or the richer sauce (2026). Lunch is a generous chicken nanban set for about ¥1,100 (2026). One diner found the skewers uneven when the kitchen was busy (September 2026). Open daily to 23:00.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 20 October 2021 (Tabelog). An August 2026 diner also mentions the brand\'s KITTE Osaka shop.', philosophy: null, specialty: 'Kawakita mince skewers.',
      anecdotes: [
        { text: '"The sauce version of the Kawakita Mince was richer, while the salt version had a light flavor with plenty of cartilage, making it satisfying to eat." — October 2026.', source: R + 'B538393218/' },
        { text: '"Drinks are only JPY 290! And the happy hour lasts from 11 AM to 6 PM, which is quite generous!" — October 2026.', source: R + 'B537660478/' },
        { text: '"The indulgence of the Chicken Nanban is incredible, and the homemade tartar sauce is absolutely delicious." — October 2026, chicken nanban and egg-over-rice set.', source: R + 'B535235643/' },
      ],
      japanese_sources_summary: '食べログ: 川北商店 新大阪店、焼き鳥・居酒屋、大阪市淀川区西中島5-15-5、新大阪駅の中の新なにわ大食堂、毎日10:00〜23:00 (L.O. 21:45)、予約不可、AMEX・電子マネー・QR 可、カウンター席、禁煙、2021年10月20日オープン。口コミ (2026年8〜10月): 地下鉄の出口のすぐ外、となりは魚屋スタンドふじ、11時から18時までハッピーアワーでドリンク290円、名物「Kawakita Mince」(粗い鶏ミンチと軟骨、塩かタレ) 5本590円、Ooyama の鶏のもも、ねぎま、鶏皮、レバー、玉ねぎ、焼き鳥5本の盛り合わせ790円、パリパリの鶏皮は持ち帰りも、Ooyama の鶏のから揚げ、刺身3種盛り880円、「Infinite Green Peppers」390円、牛すじコロッケ、ランチはチキン南蛮と卵かけごはんか小さなそぼろの丼と鶏スープで約1,100円、KITTE の店も、混む時間は串がいまひとつという声も。',
      confidence: 'medium', sources: [TB, R + 'B535235643/', R + 'B535327790/', R + 'B535694988/', R + 'B536298313/', R + 'B536587986/', R + 'B537289853/', R + 'B537660478/', R + 'B537937497/', R + 'B538002617/', R + 'B538393218/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Station food-hall counter used to travellers. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市淀川区西中島5-15-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市淀川区西中島五丁目15番5号 (go) is 217 m away; Tabelog's point is inside the station food hall (新なにわ大食堂), 28 m from osaka_sakanaya_stand_fuji_shin_osaka in the same hall, so the Tabelog point is kept as loc_approx 'single'; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538002617/', R + 'B536587986/', R + 'B537660478/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kawakita mince skewers, salt (5)', '¥590', 'Skewers', 'ask', 'no', 'September 2026.', 'mince_5'),
      it('', '', 'Yakitori platter (5 skewers)', '¥790', 'Skewers', 'ask', 'no', 'September 2026.', 'moriawase_5'),
      it('', '', 'Chicken nanban B set (mini soboro bowl, chicken soup)', '¥1,100', 'Lunch', 'no', 'no', 'October 2026.', 'nanban_b'),
      it('', '', 'Happy-hour drinks (11:00–18:00)', 'from ¥290', 'Drinks', 'ask', 'ask', 'October 2026.', 'happy_hour'),
    ] }, {
    cuisine: '焼き鳥と鶏の居酒屋 (2026年)・名物「Kawakita Mince」: 粗い鶏ミンチに軟骨、塩かタレで、5本590円 (2026年9〜10月)・Ooyama の鶏のもも、ねぎま、鶏皮、レバー、玉ねぎの串。5本の盛り合わせ790円 (2026年9月)・パリパリの鶏皮、持ち帰りも (2026年8月)・Ooyama の鶏のから揚げ、刺身3種盛り880円、「Infinite Green Peppers」390円、牛すじコロッケ (2026年9月)・ランチ: チキン南蛮に卵かけごはんか小さなそぼろの丼と鶏スープで約1,100円 (2026年9〜10月)',
    neighborhood: '西中島5-15-5、新大阪駅の新なにわ大食堂の中。地下鉄の出口のすぐ外、魚屋スタンドふじのとなり (食べログ。2026年9〜10月)',
    gf_detail: '要確認。グルテンの情報なし。串は塩かタレで、から揚げ、チキン南蛮、コロッケもある。',
    vegan_detail: 'ヴィーガンではありません。鶏の焼き鳥の居酒屋。',
    notes: '[焼き鳥・新大阪駅、ミンチの串と長いハッピーアワー] 新大阪駅の地下鉄の出口そばのフードホールにある、にぎやかな焼き鳥のカウンター。11時から18時までドリンク290円からのハッピーアワーがあり、新幹線を待つ人に人気 (2026年10月)。頼むなら名物の「Kawakita Mince」、軟骨がコリコリの粗い鶏ミンチで、5本590円、塩かコクのあるタレで (2026年)。ランチはたっぷりのチキン南蛮のセットで約1,100円 (2026年)。混んでいると串がいまひとつだったという声も (2026年9月)。毎日23時まで。',
  });
}

// ================================================================ ベトナムカフェ＆ビア ngon ca phe
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27121364/'; const R = TB + 'dtlrvwlst/'; const W = 'https://ngoncaphe.jp/';
  const D = day(['06:30', '22:00']);
  put({
    id: 'osaka_ngon_ca_phe_shin_osaka', name: 'ベトナムカフェ＆ビア ngon ca phe (Vietnam Cafe & Beer ngon ca phe)', category: 'OMNI',
    lat: 34.733986, lng: 135.500798, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pho is made with rice noodles, but no source covers the broth seasoning or cross-contact; banh mi is wheat bread. Tabelog says allergy information is available.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken pho, banh mi with meat or omelette, fish dishes.',
    hours_raw: 'Daily 6:30–22:00 (last order 21:00); open all year; between 6:30 and 10:30 it may not always take guests (Tabelog; shop site). No reservations on Tabelog; the shop site takes online bookings and orders. Cards, e-money and QR accepted (Tabelog). 78 seats, sofa and semi-private areas; non-smoking; wheelchair accessible; children and babies welcome; free Wi-Fi; takeout and Uber Eats (Tabelog; shop site). Allergy information available (Tabelog). Opened 2 March 2021 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '宮原1-1-1, 3rd floor of 新大阪阪急ビル — 1 min from the Shinkansen central exit of JR Shin-Osaka Stn (Tabelog; shop site)',
    cuisine: 'Casual Vietnamese café: banh mi and pho made by a Vietnamese chef, Vietnamese coffee brewed through the traditional filter (shop site) · breakfast: banh mi and pho set ¥1,680 with self-service salad, drinks and mini desserts (September 2026); a Japanese breakfast tray with rice, miso soup, seasonal sides and grilled fish (shop site) · lunch: pho and mini curry set with a drink ¥1,500 (September 2026); mini pho set with banh mi (September 2026) · banh mi: lemongrass chicken, Vietnamese omelette, fried catfish with pickled daikon (2026; shop site) · evening value set of pho, fresh spring rolls and tapioca (October 2026) · Vietnamese iced coffee, yogurt coffee, salt coffee; Saigon Special beer; tropical highballs (2026; shop site)',
    website: W, gmaps: gm('ngon ca phe 新大阪'), menu_url: W,
    notes: "[Vietnamese · Shin-Osaka Station, banh mi and pho by the Shinkansen gate] A big, airy Vietnamese café a minute from the Shinkansen central exit, open from 6:30 to 22:00, with banh mi and pho from a Vietnamese chef (shop site). The banh mi has a light, crackling roll; one regular calls it the best they know, and the pho is clean and comforting with cilantro and lime on the side (2026). Breakfast is a ¥1,680 banh mi and pho set with a self-service salad and drinks bar; later, try Vietnamese iced or salt coffee or a Saigon beer before your train (2026). Wheelchair accessible; allergy information available.",
    chef_bio: { chef_name: null, roles: ['Vietnamese chef and café staff (unnamed)'], origin: null, background: 'Shop site: "ngon" means delicious in Vietnamese; a Vietnamese chef recreates authentic banh mi and pho; the coffee is chosen by bean and roast and brewed with a Vietnamese filter; breakfast includes a Japanese tray with pickles from the company\'s own farm. Opened 2 March 2021 (Tabelog).', philosophy: 'Vietnamese food with the ease of a café (shop site).', specialty: 'Banh mi and pho.',
      anecdotes: [
        { text: '"The bread is perfectly crispy yet chewy, and the balance of ingredients inside is outstanding." — September 2026, banh mi.', source: R + 'B535917256/' },
        { text: '"The fried catfish banh mi had a great accent from the pickled daikon." — August 2026.', source: R + 'B534352610/' },
        { text: '"My first experience with Vietnamese coffee indeed had a slight bitterness, but the sweet aroma was delightful." — September 2026, Vietnamese iced coffee.', source: R + 'B535758012/' },
      ],
      japanese_sources_summary: '食べログ: ベトナムカフェ＆ビア ngon ca phe、ベトナム料理・カフェ・サンドイッチ、大阪市淀川区宮原1-1-1 新大阪阪急ビル 3F、JR 新大阪駅の新幹線中央口から徒歩1分、毎日6:30〜22:00 (L.O. 21:00)、6:30〜10:30は案内できないことも、無休、カード・電子マネー・QR 可、78席、禁煙、車いす可、子ども・赤ちゃん可、Wi-Fi、テイクアウト、アレルギー表示あり、2021年3月2日オープン。店のサイト: ngon はベトナム語で「おいしい」、ベトナム人シェフのバインミーとフォー、ベトナムのフィルターでいれるコーヒー、朝は和食膳 (自社農場の野菜の漬物) とエスニック朝食セット、ヨーグルトコーヒー、塩コーヒー、Uber Eats、ネット予約。口コミ (2026年5〜10月): 朝のバインミーとフォーのセット1,680円 (サラダ、ドリンク、ミニデザートはセルフ)、フォーとミニカレーのセット1,500円、ミニフォーのセット、ナマズのフライのバインミー、Saigon Special のビール、夜のお得なセット (フォー、生春巻き、タピオカ)、ベトナムのアイスコーヒー、パクチーは別添え、新幹線の前に便利。',
      confidence: 'medium', sources: [TB, W, R + 'B528225255/', R + 'B534247561/', R + 'B534352610/', R + 'B535233443/', R + 'B535758012/', R + 'B535917256/', R + 'B536215993/', R + 'B536659241/', R + 'B536956591/', R + 'B537308859/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Station café used to travellers; digital menu; allergy information available. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区宮原1-1-1 新大阪阪急ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and shop site; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区宮原一丁目1番1号 (go) 106m — GSI places the whole Shin-Osaka Hankyu Building block; Tabelog's point is by the Shinkansen central exit; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528225255/', R + 'B535233443/', W],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Breakfast banh mi and pho set', '¥1,680', 'Breakfast', 'no', 'no', 'September 2026; self-service salad and drinks.', 'banhmi_pho_set'),
      it('', '', 'Pho and mini curry set with a drink', '¥1,500', 'Lunch', 'ask', 'no', 'September 2026.', 'pho_curry_set'),
      it('', '', 'Fried catfish banh mi', '', 'Banh mi', 'no', 'no', 'August 2026.', 'catfish_banhmi'),
      it('', '', 'Vietnamese iced coffee', '', 'Drinks', 'ask', 'ask', 'August–September 2026.', 'ca_phe_da'),
    ] }, {
    cuisine: 'カフェ感覚のベトナム料理: ベトナム人シェフのバインミーとフォー、ベトナムのフィルターでいれるコーヒー (店のサイト)・朝: バインミーとフォーのセット1,680円、サラダ、ドリンク、ミニデザートはセルフ (2026年9月)。ごはん、みそ汁、季節の惣菜、焼き魚の和食膳 (店のサイト)・ランチ: フォーとミニカレーのセット、ドリンクつき1,500円 (2026年9月)。ミニフォーとバインミーのセット (2026年9月)・バインミー: レモングラスチキン、ベトナムのオムレツ、大根の酢漬けを合わせたナマズのフライ (2026年。店のサイト)・夜のお得なセット: フォー、生春巻き、タピオカ (2026年10月)・ベトナムのアイスコーヒー、ヨーグルトコーヒー、塩コーヒー。Saigon Special のビール。トロピカルハイボール (2026年。店のサイト)',
    neighborhood: '宮原1-1-1、新大阪阪急ビルの3階。JR 新大阪駅の新幹線中央口から徒歩1分 (食べログ。店のサイト)',
    gf_detail: '要確認。フォーは米の麺だが、スープの味つけや混入の情報はない。バインミーは小麦のパン。アレルギー表示あり (食べログ)。',
    vegan_detail: 'ヴィーガンではありません。鶏のフォー、肉やオムレツのバインミー、魚の料理。',
    notes: '[ベトナム料理・新大阪駅、新幹線の改札のそばのバインミーとフォー] 新幹線の中央口から1分の、広くて明るいベトナムカフェで、6時半から22時まで。ベトナム人シェフのバインミーとフォー (店のサイト)。バインミーのパンは軽くてパリッとしていて、いちばんおいしいという常連も。フォーはやさしい味で、パクチーとライムは別添え (2026年)。朝はバインミーとフォーの1,680円のセットに、サラダとドリンクはセルフ。ほかの時間はベトナムのアイスコーヒーや塩コーヒー、Saigon のビールを電車の前に (2026年)。車いす可。アレルギー表示あり。',
  });
}

save();
