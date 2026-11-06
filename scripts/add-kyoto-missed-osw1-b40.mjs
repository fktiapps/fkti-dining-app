// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 40.
//   + バンコクガーデン Bangkok Garden (Thai lunch in a house on Yanagibaba north of Ebisugawa)
//   + BUNGALOW (craft beer, natural wine and junmai sake with drinking food, Shijo-Horikawa)
//   + タイカレーラーメン シャム Thai Curry Ramen Siam (khao soi specialist near Shijo-Omiya)
//   + 竹邑庵太郎敦盛 Chikuyuan Taro Atsumori (steamed atsumori soba near Marutamachi)
//   - 京 うな和 本店 神宮道 (26041736), 鮨処 すさび湯 (26039042), 麺屋 聖 京都駅前店 (26037104), 豆水楼 木屋町本店 (26001548):
//     skipped (reasons below).
//   Picked on 2026-11-06: from `queue.mjs kyoto-missed next core 200`, lane ids 26041736 (skipped), 26004188, 26020910;
//   from `next notable 200`: 26021996, 26039042 (skipped), 26037104 (skipped), 26001548 (skipped), 26000516. None of the
//   four drafted is in data/kyoto.json by name (バンコクガーデン/Bangkok Garden, BUNGALOW/バンガロー, シャム/Siam, 敦盛/
//   Atsumori) or address (五丁目230-2, 柏屋町15, 壬生花井町23-4, 養安町242-12).
//   Same-name count (same brand or operator only): Bangkok Garden — the other “Bangkok Garden” on Tabelog is in Shinjuku,
//   with no link shown; BUNGALOW, 竹邑庵太郎敦盛 — one shop each; シャム — the ramen offshoot of the Thai-curry restaurant シャム
//   (official site: 「大人気ラーメンが専門店になって復活！」), which is not in data. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: バンコクガーデン チャージ料なし. Others none listed.
//   Halal: no operator in this batch claims halal (シャム’s “イスラムカレー” is a dish name).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-40');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26041736', '京 うな和 本店 神宮道: same-name shops of five or more (Greg 2026-11-05) — a Tabelog name search (2026-11-06) lists Kyo Unawa Honten, Kyo Unawa Honten Gion Yasaka, Kyo Unawa Honten Shimizu hanare, this Jingumichi shop and Osaka Unawa Shinsaibashi, plus Unawa shops in Nagoya (Tabelog English names)');
skip('26039042', '鮨処 すさび湯: a chain — a Tabelog name search (2026-11-06) lists Taishu Sushi Sakaba Susabi Yu shops in Kawaramachi-Sanjo, Umeda, Tenmabashi, Sannomiya, Shinjuku and Kabukicho (Tabelog English names)');
skip('26037104', '麺屋 聖 京都駅前店: a same-concept branch of a brand already in data — 麺屋 聖 ～kiyo～ (Ichijoji) is in data/kyoto.json; Tabelog lists eight Menya Kiyo shops in Kyoto, Shiga and Aichi');
skip('26001548', '豆水楼 木屋町本店: a same-concept branch of a brand already in data — 豆水楼 祇園店 (kyoto_tousuiro_gion) is in data/kyoto.json');

skip('26004188', 'バンコクガーデン: no review in 2025–26 (newest Tabelog review July 2024), so existence is unconfirmed — integrator 2026-11-06');

// ================================================================ BUNGALOW
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26020910/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.bungalow.jp/';
  const WD = day(['17:00', '23:00']); const WE = day(['15:00', '23:00']);
  put({
    id: 'kyoto_bungalow_shijo_horikawa', name: 'BUNGALOW (バンガロー)', category: 'OMNI',
    lat: 35.003524, lng: 135.752876, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Drinking food — yakitori, sashimi, kara-age, yakisoba, curry, spring rolls, fritters — alongside craft beer; no gluten information (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: yakitori, fish and meat plates; the vegetable dishes (cucumber pickles, fig with white sesame) are not described (2023–2026 reviews).',
    hours_raw: 'Monday–Friday 17:00–23:00; Saturday and Sunday 15:00–23:00 (Tabelog; hours may change). A December 2023 reviewer gave weekday 15:00–22:00 and weekend 12:00–22:00 with irregular closures. No reservations (Tabelog; August 2023). Cards, IC, e-money and many QR codes (Tabelog). 15 seats at five tables with a standing counter on the ground floor, two standing tables upstairs with a large craft-beer fridge (Tabelog; September 2025). Non-smoking; children welcome (Tabelog). On Shijo-dori east of Horikawa, about 3–10 min from Hankyu Omiya Stn (Tabelog; December 2023). Opened 9 September 2012 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-dori east of Horikawa — near Hankyu Omiya Stn',
    cuisine: '“Craft beer, natural wine, junmai sake, good foods for drinkers” (official site title) · craft beer, much of it from Kyoto (Kyoto Brewing), in three sizes; warm kanzake (2023–2026) · yakitori including duck-and-leek and mixed chicken liver; tulip kara-age (2025–2026) · isaki laab-style sashimi, charcoal-grilled young sweetfish (July 2025) · octopus sashimi ¥980 (June 2024) · fig with white sesame, cucumber pickles, yakisoba, curry (August 2023) · pork-and-pepper spring rolls, maitake fritters, potato salad, roast pork (2025)',
    website: SITE, gmaps: gm('BUNGALOW 京都 四条堀川'), menu_url: null,
    notes: '[Craft beer and sake · Shijo-Horikawa, a standing-friendly bar] A stylish, airy bar on Shijo-dori with a standing counter and a beer fridge upstairs: Kyoto craft beers in three sizes, natural wine and warm junmai sake, with yakitori, laab-style sashimi, spicy tulip kara-age and other good drinking food. No bookings; fills up in the evening.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'No owner is named in the sources read. A December 2025 visitor liked the beer but found the food disappointing; others rate the food highly (2023–2025).',
      philosophy: 'Good food for drinkers (official site title).', specialty: 'Craft beer; kanzake; yakitori.',
      anecdotes: [
        { text: 'An August 2023 theatre-goer, back from Minami-za, came for a rare solo pre-dinner drink of craft beer and kanzake.', source: R + 'B469714838/' },
        { text: 'A February 2024 visitor arrived to a near-empty room early in the evening and left with it full.', source: R + 'B479838424/' },
      ],
      japanese_sources_summary: '公式サイトの題: BUNGALOW - クラフトビール、ナチュールワイン、純米酒、飲む人のためのよい料理。食べログ: ダイニングバー・ワインバー・ビアバー、下京区四条堀川東入柏屋町15、阪急大宮駅・烏丸駅から徒歩10分、月〜金17:00〜23:00、土・日15:00〜23:00、予約不可、カード・電子マネー・QR可、15席 (1階テーブル5卓とスタンディング、2階に立ち飲みテーブル2卓)、禁煙、子ども可、2012年9月9日オープン。口コミ (2023〜2026年、英語): 京都のクラフトビール、燗酒、焼き鳥、イサキのラープ風の刺身、稚鮎の炭火焼き、チューリップの唐揚げ、焼きそば、カレー、料理が残念だったとの声も。',
      confidence: 'medium', sources: [SITE, TB, R + 'B464868926/', R + 'B469714838/', R + 'B476678999/', R + 'B479838424/', R + 'B498379570/', R + 'B510805382/', R + 'B511442198/', R + 'B513872460/', R + 'B518935096/', R + 'B520437472/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual bar with standing room; English-titled site; no reservations.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条堀川東入柏屋町15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB} (35.003524, 135.752876); cross-checked: GSI 京都府京都市下京区柏屋町15番地 (lot) 48m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511442198/'],
    price_note: 'One price from a June 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Octopus sashimi', '¥980', 'Plates', 'ask', 'no', 'June 2024.', 'tako_sashimi'),
      it('', '', 'Tulip kara-age', '', 'Plates', 'no', 'no', 'January 2026; order by the piece.', 'tulip_karaage'),
      it('', '', 'Kyoto craft beer (three sizes)', '', 'Drinks', 'no', 'ask', '2025–2026.', 'craft_beer'),
    ] }, {
    cuisine: '「クラフトビール、ナチュールワイン、純米酒、飲む人のためのよい料理」(公式サイトの題)・京都のクラフトビール (Kyoto Brewing など) を3サイズで、燗酒 (2023〜2026年)・鴨ねぎやミックスの鶏レバーの焼き鳥、チューリップの唐揚げ (2025〜2026年)・イサキのラープ風の刺身、稚鮎の炭火焼き (2025年7月)・蛸の刺身980円 (2024年6月)・いちじくの白和え、胡瓜の漬物、焼きそば、カレー (2023年8月)・豚とピーマンの春巻き、舞茸のフリット、ポテトサラダ、焼き豚 (2025年)',
    neighborhood: '堀川の東の四条通。阪急大宮駅の近く',
    gf_detail: '要確認。焼き鳥、刺身、唐揚げ、焼きそば、カレー、春巻き、フリットなどの酒の肴とクラフトビール。グルテンの情報はない (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。焼き鳥、魚や肉の皿。野菜の皿 (胡瓜の漬物、いちじくの白和え) の中身は書かれていない (2023〜2026年の口コミ)。',
    notes: '[クラフトビールと日本酒・四条堀川、立ち飲みもできるバー] 四条通の広々としたおしゃれなバー。立ち飲みのカウンターと2階にビールの冷蔵庫。京都のクラフトビールを3サイズで、ナチュールワイン、純米の燗酒に、焼き鳥、ラープ風の刺身、辛いチューリップの唐揚げなどのよい酒の肴。予約不可、夜は満席に。',
  });
}

// ================================================================ タイカレーラーメン シャム
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26021996/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.siam-thaicurry.com/noodle/index.html'; const SITE0 = 'http://www.siam-thaicurry.com/';
  const H = day(['11:30', '14:30'], ['17:30', '21:30']);
  put({
    id: 'kyoto_thai_curry_ramen_siam', name: 'タイカレーラーメン シャム (Thai Curry Ramen Siam)', category: 'OMNI',
    lat: 35.003723, lng: 135.742003, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: khao soi with wheat ramen noodles and crispy fried noodles (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Homemade curry pastes of fresh Thai herbs with coconut milk (official site), but proteins are chicken, pork or minced pork, and fish sauce is not addressed (2025–2026 reviews).',
    hours_raw: 'Monday, Tuesday, Thursday–Saturday 11:30–14:30 and 17:30–21:30; Wednesday lunch only; closed Sunday (Tabelog); a December 2025 reviewer adds holidays as closed. No reservations (Tabelog). No cards or e-money; QR codes accepted (Tabelog). 12 seats at tables; non-smoking (Tabelog). In Mibu, 7 min from Hankyu Omiya Stn and 3 min from the Shijo-Nakashindo bus stop (Tabelog). Opened 13 March 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: day(['11:30', '14:30']), 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Mibu, west of Shijo-Omiya — 7 min from Hankyu Omiya Stn',
    cuisine: 'Khao soi (Thai curry ramen) specialist: the popular ramen of the Thai-curry restaurant シャム, revived as its own shop (official site) · homemade curry pastes of ground fresh Thai herbs, made weekly (official site) · khao soi regular ¥1,180 with green curry soup, double chicken and pork; extra meat +¥150, cheese +¥180 (December 2025) · soups: green, red and massaman curry; toppings such as spicy minced pork, moo yang, extra coriander; crispy fried noodles on top; a little jasmine rice to finish (2025–2026) · salad on the side (March 2026) · khao man gai thot, gai tod, summer tom yum kung cold noodles, coconut pudding (July–September 2026)',
    website: SITE, gmaps: gm('タイカレーラーメン シャム 壬生'), menu_url: SITE,
    notes: '[Khao soi · Mibu near Shijo-Omiya] A small, stylish shop devoted to khao soi, the northern-Thai curry noodle: choose green, red or massaman soup and your meat, top with crispy noodles and extra coriander, from about ¥1,180. Pastes made in-house from fresh Thai herbs. Also fried chicken, khao man gai and summer cold tom yum noodles. No bookings; Sundays closed.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed); offshoot of the Thai-curry restaurant シャム'], origin: null,
      background: 'The official site of the Thai-curry restaurant シャム describes its homemade curry pastes, ground from fresh Thai herbs and made weekly, and announces 「大人気ラーメンが専門店になって復活！”タイカレーラーメン専門店シャム”がオープンしました！」. A March 2026 visitor was greeted by “a lovely lady” with a warm smile.',
      philosophy: 'Curry pastes researched and ground from fresh Thai herbs, made weekly to keep the aroma (official site).', specialty: 'Khao soi.',
      anecdotes: [
        { text: 'An August 2026 diner came back after about twelve years and found the khao soi as good as remembered.', source: R + 'B47365295/' },
        { text: 'A September 2026 diner doubled the coriander on a red-curry pork bowl and still wanted more.', source: R + 'B536452896/' },
      ],
      japanese_sources_summary: '公式サイト (タイカレー シャム): 研究を重ねた自家製のカレーペースト、タイの生ハーブをすりつぶし1週間ごとに仕込む、グリーンカレー・レッドカレー・イスラムカレー、「大人気ラーメンが専門店になって復活！”タイカレーラーメン専門店シャム”がオープンしました！」。食べログ: ラーメン・カレー・タイ料理、中京区壬生花井町23-4 1F、阪急大宮駅から徒歩7分、月・火・木〜土 11:30〜14:30、17:30〜21:30、水は昼のみ、日曜定休、予約不可、QR決済可、12席、禁煙、2013年3月13日オープン。口コミ (2025〜2026年、英語): カオソーイ並1,180円、グリーン・レッド・マッサマンのスープ、揚げ麺、パクチー増し、カオマンガイトート、ガイトート、夏のトムヤムクンの冷やし麺、ココナッツプリン。',
      confidence: 'medium', sources: [SITE0, TB, R + 'B47365295/', R + 'B520570139/', R + 'B523569249/', R + 'B524493417/', R + 'B532003892/', R + 'B536371554/', R + 'B536452896/', R + 'B536607582/', R + 'B537011533/', R + 'B538160209/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small table-only shop; choose soup, meat and toppings; QR or cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区壬生花井町23-4 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003723, 135.742003); cross-checked: GSI 京都府京都市中京区壬生花井町23番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520570139/'],
    price_note: 'Prices from a December 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Khao soi, regular', '¥1,180', 'Khao soi', 'no', 'ask', 'December 2025.', 'khao_soi'),
      it('', '', 'Extra meat', '¥150', 'Toppings', '', '', 'December 2025.', 'extra_meat'),
      it('', '', 'Cheese topping', '¥180', 'Toppings', '', 'no', 'December 2025.', 'cheese'),
    ] }, {
    cuisine: 'カオソーイ (タイカレーラーメン) の専門店: タイカレーの店シャムの人気ラーメンが専門店として復活 (公式サイト)・タイの生ハーブをすりつぶした自家製ペースト、1週間ごとに仕込む (公式サイト)・カオソーイ並1,180円、グリーンカレーのスープ、鶏と豚のダブル、肉増し150円、チーズ180円 (2025年12月)・グリーン、レッド、マッサマンのスープ、辛い豚ひき肉やムーヤーン、パクチー増しのトッピング、揚げ麺、締めに少しのジャスミンライス (2025〜2026年)・サラダ付き (2026年3月)・カオマンガイトート、ガイトート、夏のトムヤムクンの冷やし麺、ココナッツプリン (2026年7〜9月)',
    neighborhood: '四条大宮の西、壬生。阪急大宮駅から徒歩7分',
    gf_detail: 'グルテンフリーではない。小麦のラーメンの麺と揚げ麺のカオソーイ (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。タイの生ハーブの自家製ペーストとココナッツミルク (公式サイト) だが、具は鶏、豚、豚ひき肉で、ナンプラーについては書かれていない (2025〜2026年の口コミ)。',
    notes: '[カオソーイ・四条大宮近くの壬生] 北タイのカレー麺カオソーイだけの小さなおしゃれな店。グリーン、レッド、マッサマンのスープと肉を選び、揚げ麺とパクチー増しで1,180円ほどから。ペーストはタイの生ハーブから店で作る。鶏の揚げ物、カオマンガイ、夏はトムヤムの冷やし麺も。予約不可、日曜休み。',
  });
}

// ================================================================ 竹邑庵太郎敦盛
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000516/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://lit.link/chikuyuuan';
  const H = day(['11:00', '14:30']);
  put({
    id: 'kyoto_chikuyuan_taro_atsumori', name: '竹邑庵太郎敦盛 (Chikuyuan Taro Atsumori)', category: 'OMNI',
    lat: 35.01854, lng: 135.758787, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dark whole-grain soba made with egg and yam (September 2026 review — “please be cautious if you have allergies”); wheat content not stated; the dipping sauce is sweet soy-and-dashi (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the soba dough contains egg, a raw egg goes in the dipping bowl, and the sauce is dashi-based (2026 reviews).',
    hours_raw: '11:00–14:30, Monday–Saturday; closed Sundays and holidays (Tabelog). No reservations; queues at opening (Tabelog; October 2026). Suitcases and carry carts are not allowed inside — use station lockers (Tabelog). Cash only (Tabelog). 30 seats, all on tatami: shoes off (Tabelog). Designated smoking area (Tabelog). English menu (Tabelog). Tabelog’s English note on children is garbled — ask before bringing children. In an alley 1 min from Marutamachi Stn exit 2; no car or bicycle parking (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Alley off Sawaragi-cho west of Karasuma — 1 min from Marutamachi Stn',
    cuisine: 'Two dishes only: atsumori (hot steamed) soba and cold soba (October 2026) · atsumori soba ¥1,200; 1.5 servings ¥1,300 — dark, soft, medium-thick soba of buckwheat ground with the husk, steamed in a seiro, dipped in a bowl of raw egg, wasabi and heaps of Kujo green onion with hot sweet sauce poured over (September–November 2026) · cold “okkake” soba 1.5 servings ¥1,500 with tororo (September 2026); served in small plates like wanko soba (October 2026) · soba-yu to loosen the noodles (September 2026)',
    website: SITE, gmaps: gm('竹邑庵太郎敦盛 丸太町'), menu_url: null,
    notes: '[Soba · alley by Marutamachi Stn, steamed atsumori] A tatami-only soba house down an alley a minute from Marutamachi Station that serves just two things: hot, steamed atsumori soba in a bamboo seiro, dipped in raw egg, Kujo green onion and a sweet hot sauce (from ¥1,200), and a cold version with grated yam. The noodles contain egg and yam. Lunch only, cash only, shoes off, no suitcases; queues at 11:00.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'No owner is named in the sources read. An October 2026 diner with a pregnant wife was guided to a comfortable seat by attentive staff; a September 2026 visitor praised the staff.',
      philosophy: null, specialty: 'Atsumori soba.',
      anecdotes: [
        { text: 'A November 2026 repeat visitor from Kyushu was surprised by steamed soba with wasabi hidden under the green onion and raw egg.', source: R + 'B498084446/' },
        { text: 'A September 2026 traveller from Tokyo arrived just before 11:00 on the way to a HIMARI concert.', source: R + 'B536293331/' },
      ],
      japanese_sources_summary: '食べログ: 竹邑庵太郎敦盛、そば、上京区椹木町通烏丸西入養安町242-12、丸太町駅2番出口から徒歩1分、月〜土 11:00〜14:30、日・祝定休、予約不可、スーツケースやキャリーカートは持ち込み不可、カード・電子マネー・QR不可、30席 (すべて靴を脱ぐ座敷)、喫煙所あり、英語メニュー、車・自転車は停められない。口コミ (2026年、英語): 熱盛りそばと冷たいそばの2品だけ、熱盛り1,200円・1.5人前1,300円、殻ごと挽いた黒いそば、蒸籠で蒸す、生卵とわさびと九条ねぎに熱いつゆ、おっかけそば1.5人前1,500円 (とろろ)、そばに卵と山芋が入るのでアレルギーに注意との声、開店前から行列。',
      confidence: 'medium', sources: [TB, R + 'B498084446/', R + 'B535618841/', R + 'B536275759/', R + 'B536293331/', R + 'B537291568/', R + 'B537842107/', R + 'B538215655/', R + 'B538413596/', R + 'B538597087/', R + 'B538756072/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); tatami only with shoes off; no suitcases; cash only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [],
      staff_allergy_handling: [{ text: 'A September 2026 reviewer warns that the soba itself contains egg and yam — “Please be cautious if you have allergies.”', source: R + 'B535618841/', verified: TODAY }],
      positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区椹木町通烏丸西入養安町242-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.01854, 135.758787); cross-checked: GSI 京都府京都市上京区養安町242番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538597087/', R + 'B535618841/'],
    price_note: 'Prices from September and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Atsumori soba (hot, steamed)', '¥1,200', 'Soba', 'ask', 'no', 'October 2026; noodles contain egg and yam.', 'atsumori'),
      it('', '', 'Atsumori soba, 1.5 servings', '¥1,300', 'Soba', 'ask', 'no', 'September 2026.', 'atsumori_large'),
      it('', '', 'Cold okkake soba with tororo, 1.5 servings', '¥1,500', 'Soba', 'ask', 'no', 'September 2026.', 'okkake'),
    ] }, {
    cuisine: '料理は2つだけ: 熱盛りそばと冷たいそば (2026年10月)・熱盛りそば1,200円、1.5人前1,300円。殻ごと挽いた黒くやわらかい中太のそばを蒸籠で蒸し、生卵、わさび、山盛りの九条ねぎの器に熱い甘めのつゆをかけて (2026年9〜11月)・冷たいおっかけそば1.5人前1,500円、とろろ入り (2026年9月)、わんこそばのように小皿で出るとの声も (2026年10月)・くっついたそばはそば湯でほぐす (2026年9月)',
    neighborhood: '烏丸の西、椹木町の路地。丸太町駅から徒歩1分',
    gf_detail: '要確認。卵と山芋を練り込んだ黒い挽きぐるみのそば (2026年9月の口コミ、アレルギーに注意との声)。小麦の割合は書かれていない。つゆは甘めの醤油と出汁 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。そばに卵、つけだれに生卵、つゆは出汁 (2026年の口コミ)。',
    notes: '[そば・丸太町駅近くの路地、蒸した熱盛り] 丸太町駅から1分の路地を入った、座敷だけのそば屋。料理は2つだけ: 蒸籠で蒸した熱々の熱盛りそばを、生卵、九条ねぎ、甘めの熱いつゆで (1,200円から)。冷たいとろろのそばも。そばには卵と山芋が入る。昼のみ、現金のみ、靴を脱いで上がり、スーツケースは不可。11時から行列。',
  });
}

save();
