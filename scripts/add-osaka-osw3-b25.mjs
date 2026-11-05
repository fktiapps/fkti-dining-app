// Osaka sweep (2-mile circle around Dotonbori), core leftovers — lane osw3 (Tabelog id mod 4 = 2), batch 25.
//   - シャングリラズシークレット 北堀江店 (27154426): same-concept branch of a brand already in data.
//   - 炭焼笑店 陽 北堀江本店 (27008458): same-concept shop of a brand already in data.
//   - チャイニーズ･ダイニング 蘭亭 南本町店 (27140886): same-concept branch of a brand already in data.
//   - 大阪王将 上本町店 (27053354): same-concept branch of a brand already in data.
//   + 大衆牛串 空仙 (Taishu Gyukushi Kusen: open-front beef-skewer and offal izakaya in Shinmachi, dogs welcome)
//   + AUN COFFEE ROASTERS (specialty coffee, croissant sandwiches and cakes behind Namba Yasaka Shrine)
//   + 29104 (yakiniku and fresh offal near Matsuyamachi, opened April 2026)
//   Lane: the first seven ids with id mod 4 = 2 in `queue.mjs osaka next core 200` (2026-11-02, after batch 24):
//   27154426, 27136558, 27150142, 27008458, 27155242, 27140886, 27053354 (last two digits 26, 58, 42, 58, 42, 86, 54:
//   each = 2 mod 4). None of the three drafted shops is in data/osaka.json (grep by Tabelog id, name and address).
//   Group checks: Kusen — a sister of Fukushige Horumon (Tabelog listing; reviews), neither in data; sister concepts
//   are not chains. AUN — this shop and the Shitennoji main shop (auncoffee.jp): small group. 29104 — a sister of
//   Horumon Nagaoka (August and October 2026 reviews), not in data.
//   Stacked pins: none within 6 m (nearest records 12.5 m, 125.8 m and 8.2 m).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-25');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27154426', 'Same-concept branch of a brand already in data: Shangri-La\'s Secret (medicinal mushroom hot pot) is tokyo_shangri_las_secret_roppongi; the brand also has Ginza, Omotesando and Kitashinchi shops (https://restaurant.ikyu.com/112063/highlights; https://www.timeout.jp/tokyo/ja/news/shangri-las-secret-mushrooms-011921)');
skip('27008458', 'Same-concept shop of a brand already in data: 炭焼笑店 陽 is osaka_sumiyaki_shoten_yo_namba; the brand also has a Tenma shop (https://hamoni.jp/shop/2I7Z9AUJqy7B355nezKW; https://tabelog.com/osaka/A2701/A270202/27053755/)');
skip('27140886', 'Same-concept branch of a brand already in data: 蘭亭 is osaka_rantei_lucua_barchika; the group site (chinese-bistro-rantei.com) lists 南本町店 among its seven Osaka shops');
skip('27053354', 'Same-concept branch of a brand already in data: 大阪王将 is osaka_osaka_ohsho_dotonbori_honten and osaka_osaka_ohsho_amemura');

// ================================================================ 大衆牛串 空仙
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27136558/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['16:00', '22:00']); const WE = day(['12:30', '22:00']);
  put({
    id: 'osaka_taishu_gyukushi_kusen_shinmachi', name: '大衆牛串 空仙 (Taishu Gyukushi Kusen)', category: 'OMNI',
    lat: 34.676891, lng: 135.4965, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Salted skewers and raw omasum are the plainest; dote-yaki, the tare, ponzu and the motsunabe broth are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef-skewer and offal izakaya, though Tabelog lists vegetarian options and pickled cucumber and leek skewers appear in reviews (May 2025).',
    hours_raw: 'Mon–Fri 16:00–22:00; Sat, Sun and holidays 12:30–22:00; closed the second Monday of each month and on irregular days (Tabelog). Reservations; all-you-can-drink and courses; happy hour (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay; no e-money (Tabelog). 40 seats (14 at the counter) with an open front and terrace seats; vinyl curtains close in the rain (September 2026). Smoking allowed; pets welcome; menus in English and Simplified Chinese; takeaway (Tabelog). Opened 25 April 2023 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-8-8, Nishi-ku — 4 min from Yotsubashi Stn, 6 min from Shinsaibashi Stn',
    cuisine: 'Cheap and cheerful beef-skewer izakaya from the team behind Fukushige Horumon, with three signatures: beef skewers, Imabari-style grilled chicken skin and dote-yaki (Tabelog) · skewers of outside skirt, liver, pork belly and white leek; grilled fresh liver recommended by the manager; raw omasum; windpipe cartilage; egg horumon (May 2025–July 2026) · motsunabe of beef tripe with garlic chives and tofu; chicken wings; chicken skin with ponzu; meatballs; macaroni salad; lightly pickled cucumber (2025) · tomato-vinegar sour and beer in frosted mugs (May 2025, July 2026)',
    website: null, gmaps: gm('大衆牛串 空仙 新町'), menu_url: null,
    notes: "[Izakaya · Shinmachi, open-front beef-skewer bar where dogs are welcome] A loud, doorless izakaya near Yotsubashi from the team behind Fukushige Horumon, open from 16:00 on weekdays and 12:30 at weekends, with seats spilling onto the street and dogs welcome. Order the outside skirt and liver skewers, dote-yaki, the crisp Imabari-style chicken skin and raw omasum, with beer in a frosted mug. Diners praise the value and the friendly staff; one found fruit flies on the starter and small meat portions (October 2026), and another was bothered by loud customers that the staff did not stop (January 2026). Smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Manager and staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a new casual spot near Yotsubashi Station from the popular Fukushige Horumon, with three signatures (beef skewers, Imabari grilled chicken skin and dote-yaki) at reasonable prices; opened 25 April 2023. Reviewers in 2025–2026 call it a sister of Fukushige Horumon; companies hold parties there.',
      philosophy: null, specialty: 'Beef skewers; Imabari-style chicken skin; dote-yaki.',
      anecdotes: [
        { text: '"The manager highly recommends the fresh grilled liver!" — July 2026, frosted beer mugs.', source: R + 'B531787922/' },
        { text: '"The staff seemed to love dogs, as they greeted us every time they passed by, which I really appreciated." — May 2026, with a dog in a pet cart.', source: R + 'B529095655/' },
        { text: '"Since I had a reservation, the appetizer was already on the table, but there were fruit flies on it." — October 2026.', source: R + 'B537476633/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 大衆牛串 空仙、居酒屋・肉料理・ホルモン、西区新町1-8-8、Yotsubashi 駅から徒歩4分、Shinsaibashi 駅から6分、月〜金16:00〜22:00、土日祝12:30〜22:00、毎月第2月曜と不定休、予約可、飲み放題、コース、ハッピーアワー、カード・PayPay可、電子マネー不可、40席 (カウンター14席)、オープンテラス、喫煙可、ペット可、英語と簡体字のメニュー、テイクアウト、ベジタリアンメニュー、2023年4月25日オープン、人気の Fukushige Horumon が手がける、看板は牛串、今治の鶏皮焼き、どて焼き。口コミ(2025年4月〜2026年10月): 外ハラミ、レバー、豚バラ、白ねぎの串、生レバーを焼くおすすめ、生センマイ、気管の軟骨、玉ひも、牛もつ鍋、手羽先、鶏皮ポン酢、ミートボール、マカロニサラダ、浅漬け、トマト酢サワー、凍ったジョッキのビール、犬連れ可、雨の日はビニールのカーテン、コスパ、気さくなスタッフ、前菜にコバエ、肉が少ない、騒ぐ客をスタッフが注意しなかったという声も。',
      confidence: 'medium', sources: [TB, R + 'B469279236/', R + 'B505452917/', R + 'B518303360/', R + 'B520099055/', R + 'B520941578/', R + 'B522294439/', R + 'B529095655/', R + 'B531787922/', R + 'B535987908/', R + 'B536458407/', R + 'B537476633/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English and Simplified Chinese (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-8-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目8番8号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices found; dishes from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Beef skewers (outside skirt, liver)', '', 'Skewers', 'ask', 'no', '2025–2026 reviews.', 'gyukushi'),
      it('', '', 'Dote-yaki', '', 'Signatures', 'ask', 'no', 'Tabelog; May 2026.', 'doteyaki'),
      it('', '', 'Imabari-style grilled chicken skin', '', 'Signatures', 'ask', 'no', 'Tabelog.', 'imabari_torikawa'),
      it('', '', 'Beef tripe motsunabe', '', 'Hot pot', 'ask', 'no', 'December 2025.', 'motsunabe'),
    ] }, {
    cuisine: 'Fukushige Horumon が手がける手頃な牛串の居酒屋で、看板は牛串、今治の鶏皮焼き、どて焼きの3つ (食べログ)・外ハラミ、レバー、豚バラ、白ねぎの串、店長おすすめの生レバーの焼き、生センマイ、気管の軟骨、玉ひも (2025年5月〜2026年7月)・にらと豆腐たっぷりの牛もつ鍋、手羽先、鶏皮ポン酢、ミートボール、マカロニサラダ、浅漬けのきゅうり (2025年)・トマト酢サワー、凍ったジョッキのビール (2025年5月、2026年7月)',
    neighborhood: '西区新町1-8-8。Yotsubashi 駅から徒歩4分、Shinsaibashi 駅から6分',
    gf_detail: '要確認。グルテンの情報なし。塩の串と生センマイがいちばんシンプル。どて焼き、タレ、ポン酢、もつ鍋のスープの中身は書かれていない。',
    vegan_detail: 'ヴィーガンではありません。牛串とホルモンの居酒屋で、食べログにはベジタリアンメニューの記載があり、口コミには浅漬けのきゅうりや白ねぎの串も (2025年5月)。',
    notes: '[居酒屋・新町、犬連れも歓迎の開けっぱなしの牛串酒場] Yotsubashi 近くの扉のないにぎやかな居酒屋で、Fukushige Horumon のチームが営み、平日は16時、週末は12時30分から。席は道にまではみ出し、犬連れも歓迎。外ハラミとレバーの串、どて焼き、カリカリの今治の鶏皮、生センマイを、凍ったジョッキのビールと。コスパと気さくなスタッフの評判がよく、前菜にコバエがいた、肉が少ない (2026年10月)、騒ぐ客をスタッフが注意しなかった (2026年1月) という声も。喫煙可。',
  });
}

// ================================================================ AUN COFFEE ROASTERS
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27150142/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://auncoffee.jp/';
  const H = day(['09:00', '19:00']);
  put({
    id: 'osaka_aun_coffee_roasters_motomachi', name: 'AUN COFFEE ROASTERS', category: 'OMNI',
    lat: 34.661198, lng: 135.496252, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Coffee and matcha milk are the safe orders; croissants, croissant sandwiches, tiramisu, carrot cake and cheesecake are wheat-based.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegan and vegetarian options, but no vegan item is named in reviews; the sweets and sandwiches reviewed use dairy, eggs, ham or fish.',
    hours_raw: 'Daily 09:00–19:00 (Tabelog). No reservations; order at the counter, then take a seat (Tabelog; September 2026). Cards, e-money and PayPay (Tabelog; September 2026). 40 seats with a counter and terrace; non-smoking; outlets and free Wi-Fi; wheelchair accessible; pets welcome; takeaway (Tabelog). English menu; staff who speak English and Korean (Tabelog). The official site says the menu is made so that everyone, Muslim guests included, can enjoy it; this is not a halal certification. Opened 14 June 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Motomachi 2-10-2, Naniwa-ku, クレアーレ元町 1F, by Namba Yasaka Shrine — 5 min from JR Namba Stn',
    cuisine: 'Specialty coffee roastery and cafe from the owner of AUN Coffee by Shitennoji, pairing coffee with sweets (official site; Tabelog) · hand-drip single origins (about 5–10 kinds, many from Central and South America), e.g. Peru and Guatemala ¥900; staff pick a coffee to suit your taste or dessert; a card on each bean; lattes with light or dark roast; matcha milk (June–September 2026) · croissant sandwiches: prosciutto, lettuce, mozzarella and orange peel ¥900; smoked salmon ¥950; fig and prosciutto; plain croissants (July–September 2026) · tiramisu ¥700, berry cheesecake ¥700, carrot cake, a mango dessert (June–September 2026)',
    website: SITE, gmaps: gm('AUN COFFEE ROASTERS 元町'), menu_url: null,
    notes: "[Cafe · Namba Yasaka Shrine, roastery cafe with croissant sandwiches] A spacious, plant-filled roastery cafe of brick and glass just behind Namba Yasaka Shrine, open 9:00–19:00 and busy with overseas visitors at breakfast. Tell the staff what you like and they will pick a hand-drip coffee, served with a card about the bean; pair it with a croissant sandwich or the tiramisu. Reviewers love the calm room and the coffee; some find it a little pricey, and it is a 10-minute walk from Namba. English spoken.",
    chef_bio: { chef_name: null, roles: ['Owner, barista and pastry chef (unnamed)'], origin: null,
      background: 'Per the official site: AUN Coffee has its main shop in front of the east gate of Shitennoji; the owner is a barista and pastry chef who explores what coffee and sweets can create together, and the menu is made for all guests, Muslims included. Per the shop-maintained Tabelog listing: this roastery cafe opened 14 June 2025.',
      philosophy: 'Coffee and sweets that fit naturally together, and a place that connects people and space (official site).', specialty: 'Hand-drip specialty coffee; croissant sandwiches; tiramisu.',
      anecdotes: [
        { text: '"For coffee, I shared my taste preferences, and they recommended: A strong, bitter coffee with no acidity → Guatemala." — July 2026, the first customers at 9 am on a Sunday.', source: R + 'B532454546/' },
        { text: '"I appreciated the explanation card that accompanied the coffee, which provided information about the bean variety, origin, and flavor profile" — June 2026, a mango dessert.', source: R + 'B533885288/' },
        { text: '"I felt the prices were a bit on the higher side, but both items were delicious" — September 2026, Guatemala coffee and tiramisu.', source: R + 'B535714950/' },
      ],
      japanese_sources_summary: '食べログ: AUN COFFEE ROASTERS、カフェ・ケーキ・パン、浪速区元町2-10-2 クレアーレ元町 1F、JR Namba 駅から徒歩5分、毎日9:00〜19:00、予約不可、カード・電子マネー・PayPay可、40席、カウンター、テラス、禁煙、電源、無料Wi-Fi、車椅子可、ペット可、テイクアウト、朝食、ヴィーガン・ベジタリアンメニュー、英語メニュー、英語と韓国語を話すスタッフ、2025年6月14日オープン。公式サイト: AUN COFFEE 四天王寺本店は東大門の前、オーナーはバリスタでパティシエ、コーヒーとスイーツの組み合わせ、ムスリムの人も含めてみんなが楽しめるメニュー。口コミ(2026年6〜9月): Namba Yasaka Shrine の裏、海外からの客が多い、好みを伝えて選ぶハンドドリップ、豆の説明カード、ペルーとグアテマラ各900円、ラテ、抹茶ミルク、生ハムとモッツァレラとオレンジピールのクロワッサンサンド900円、スモークサーモン950円、いちじくと生ハム、ティラミス700円、ベリーのチーズケーキ700円、キャロットケーキ、マンゴーのデザート、少し高いという声も。',
      confidence: 'medium', sources: [SITE, TB, R + 'B530223713/', R + 'B530278595/', R + 'B531889526/', R + 'B532454546/', R + 'B532966855/', R + 'B533519003/', R + 'B533885288/', R + 'B534662068/', R + 'B535477032/', R + 'B535714950/', R + 'B536574379/'] },
    cultural_comfort: { level: 'english', note: 'English menu; staff who speak English and Korean (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区元町2-10-2 クレアーレ元町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区元町二丁目10番2号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532454546/', R + 'B531889526/', R + 'B535477032/'],
    price_note: 'Prices from July–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hand-drip coffee (Peru, Guatemala)', '¥900', 'Coffee', 'ask', 'ask', 'September 2026.', 'hand_drip'),
      it('', '', 'Croissant sandwich: prosciutto, lettuce, mozzarella, orange peel', '¥900', 'Food', 'no', 'no', 'July 2026.', 'mozzarella_croissant'),
      it('', '', 'Croissant sandwich: smoked salmon', '¥950', 'Food', 'no', 'no', 'September 2026.', 'salmon_croissant'),
      it('', '', 'Tiramisu', '¥700', 'Sweets', 'no', 'no', 'July and September 2026.', 'tiramisu'),
      it('', '', 'Berry cheesecake', '¥700', 'Sweets', 'ask', 'no', 'July 2026.', 'berry_cheesecake'),
    ] }, {
    cuisine: '四天王寺の AUN Coffee のオーナーによる、コーヒーとスイーツを合わせるスペシャルティコーヒーの焙煎所兼カフェ (公式サイト、食べログ)・中南米を中心に5〜10種ほどのシングルオリジンのハンドドリップ、ペルーとグアテマラは900円。好みやデザートに合わせてスタッフが選び、豆の説明カードつき。浅煎りか深煎りを選べるラテ、抹茶ミルク (2026年6〜9月)・クロワッサンサンド: 生ハム、レタス、モッツァレラ、オレンジピール900円、スモークサーモン950円、いちじくと生ハム、プレーンのクロワッサン (2026年7〜9月)・ティラミス700円、ベリーのチーズケーキ700円、キャロットケーキ、マンゴーのデザート (2026年6〜9月)',
    neighborhood: '浪速区元町2-10-2 クレアーレ元町 1F、Namba Yasaka Shrine のそば。JR Namba 駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。コーヒーと抹茶ミルクは安心。クロワッサン、クロワッサンサンド、ティラミス、キャロットケーキ、チーズケーキは小麦。',
    vegan_detail: '要確認。食べログにヴィーガン・ベジタリアンメニューの記載があるが、口コミにヴィーガンの品の名前はなく、口コミのスイーツとサンドは乳製品、卵、ハム、魚を使う。',
    notes: '[カフェ・難波八阪神社、クロワッサンサンドの焙煎所カフェ] Namba Yasaka Shrine のすぐ裏、レンガとガラスの緑の多い広い焙煎所カフェで、9時から19時まで。朝は海外からの客でにぎわう。好みを伝えればスタッフがハンドドリップのコーヒーを選び、豆の説明カードがつく。クロワッサンサンドやティラミスと一緒に。落ち着いた空間とコーヒーの評判がよく、少し高い、Namba から10分歩くという声も。英語可。',
  });
}

// ================================================================ 29104
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27155242/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '00:30']);
  put({
    id: 'osaka_29104_bakuromachi', name: '29104', category: 'OMNI',
    lat: 34.678477, lng: 135.510559, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Raw omasum, heart sashimi and plain grilled cuts are the plainest; the tare, the sweet sauce on the loin, the dashi kotechan and the cold ramen are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku and offal restaurant.',
    hours_raw: 'Daily 17:00–00:30 (last food order 23:30); closed about 5–6 irregular days a month (Tabelog). Seat charge ¥110 per person, free for primary-school children and under (Tabelog). Courses with all-you-can-drink, 4–18 people: 13 dishes ¥6,500, 15 dishes ¥7,500 (Tabelog); unlimited white rice with the course (October 2026). Reservations; private hire for up to 20 (Tabelog). Cards; no e-money or QR (Tabelog). 28 seats: counter pairs and four tatami tables; non-smoking; children and strollers welcome; digital menu (Tabelog). Opened 22 April 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Bakuromachi 1-1-6 — 6 min from exit 1 of Matsuyamachi Stn, 7 min from Sakaisuji-Hommachi Stn',
    cuisine: 'Yakiniku with fresh offal and good red meat, a sister of Horumon Nagaoka (August and October 2026) · black tongue ¥1,320, outside skirt ¥1,760, loin ¥1,078, tsurami ¥990, chijira ¥440 (September 2026); kalbi; green-onion tongue; akasen (August–October 2026) · raw omasum ¥748, heart sashimi; grilled liver with ginger soy sauce or with seaweed tsukudani; outside skirt with pickled ginger; dashi kotechan ¥748 in a bonito broth (August–October 2026) · lightly grilled loin in a sweet sauce with wasabi; gukbap, bibimbap; a cold ramen with olive oil (August–October 2026)',
    website: null, gmaps: gm('29104 博労町 焼肉'), menu_url: null,
    notes: "[Yakiniku · Bakuromachi, fresh-offal yakiniku opened 2026] A bright new yakiniku near Matsuyamachi, a sister of Horumon Nagaoka, with counter seats and tatami tables good for families, open until 00:30. Start with raw omasum and the liver grilled lightly with ginger soy sauce, then black tongue, outside skirt and tsurami, and finish with gukbap or bibimbap; courses with drinks run ¥6,500–¥7,500. Diners praise the meat and the prices; some found portions small, the dipping sauce light, or the cold ramen's olive oil too strong. ¥110 seat charge.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: yakiniku and offal, opened 22 April 2026, welcoming solo diners and families, with private hire for groups. August and October 2026 reviewers call it a sister of Horumon Nagaoka.',
      philosophy: null, specialty: 'Fresh offal; black tongue; outside skirt.',
      anecdotes: [
        { text: '"Lightly grilled and served with ginger soy sauce, it was sweet and had no unpleasant odor" — August 2026, the grilled liver.', source: R + 'B533477118/' },
        { text: '"One of my kids, who usually doesn\'t eat liver, ended up having seconds here!" — September 2026, tatami seating.', source: R + 'B535135528/' },
        { text: '"I also ordered the chilled ramen that I had been curious about, but personally, I found the olive oil flavor to be quite overpowering" — August 2026.', source: R + 'B529843789/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 29104、焼肉・ホルモン・ラーメン、中央区博労町1-1-6、Matsuyamachi 駅1番出口から徒歩6分、Nagahoribashi 駅1番出口から8分、Sakaisuji-Hommachi 駅3番出口から7分、毎日17:00〜24:30 (料理 L.O.23:30)、不定休 (月5〜6日)、席料110円 (小学生以下は無料)、飲み放題つきのコース13品6,500円・15品7,500円 (4〜18名)、予約可、貸切20名まで、カード可、電子マネー・QR不可、28席 (カウンター2名×6、座敷4名×4)、禁煙、子ども・ベビーカー可、デジタルメニュー、2026年4月22日オープン。口コミ(2026年6〜10月): Horumon Nagaoka の姉妹店、黒タン1,320円、外ハラミ1,760円、ロース1,078円、ツラミ990円、Chijira 440円、生センマイ748円、ハツ刺し、生姜醤油や海苔の佃煮のレバー、ガリをのせた外ハラミ、だしのコテチャン748円、ネギタン、アカセン、軽く焼いたロース、クッパ、ビビンバ、オリーブオイルの冷やしラーメン、量が少ない、タレが薄い、店員の仕事の愚痴が聞こえたという声も。',
      confidence: 'medium', sources: [TB, R + 'B529843789/', R + 'B533477118/', R + 'B535079528/', R + 'B535135528/', R + 'B535572010/', R + 'B535598893/', R + 'B535775696/', R + 'B536425413/', R + 'B537462042/', R + 'B537513326/', R + 'B537570778/', R + 'B537886060/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Digital menu (Tabelog). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区博労町1-1-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区博労町一丁目1番6号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535598893/', TB],
    price_note: 'A la carte prices from a September 2026 review; courses from Tabelog (read November 2026), tax included.', last_checked: TODAY, items: [
      it('', '', 'Black tongue', '¥1,320', 'Beef', 'ask', 'no', 'September 2026.', 'kuro_tan'),
      it('', '', 'Outside skirt', '¥1,760', 'Beef', 'ask', 'no', 'September 2026.', 'sotoharami'),
      it('', '', 'Raw omasum', '¥748', 'Fresh offal', 'ask', 'no', 'September 2026.', 'nama_senmai'),
      it('', '', 'Dashi kotechan (in bonito broth)', '¥748', 'Offal', 'ask', 'no', 'September 2026.', 'dashi_kotechan'),
      it('', '', 'Course with all-you-can-drink, 13 dishes', '¥6,500', 'Courses', 'ask', 'no', 'Tabelog; 4–18 people.', 'course13'),
      it('', '', 'Course with all-you-can-drink, 15 dishes', '¥7,500', 'Courses', 'ask', 'no', 'Tabelog; 4–18 people.', 'course15'),
    ] }, {
    cuisine: '新鮮なホルモンと上質な赤身の焼肉で、Horumon Nagaoka の姉妹店 (2026年8月・10月)・黒タン1,320円、外ハラミ1,760円、ロース1,078円、ツラミ990円、Chijira 440円 (2026年9月)、カルビ、ネギタン、アカセン (2026年8〜10月)・生センマイ748円、ハツ刺し、生姜醤油や海苔の佃煮で食べるレバー、ガリをのせた外ハラミ、鰹だしのだしコテチャン748円 (2026年8〜10月)・軽く焼いたロースの甘いタレとわさび、クッパ、ビビンバ、オリーブオイルの冷やしラーメン (2026年8〜10月)',
    neighborhood: '博労町1-1-6。Matsuyamachi 駅1番出口から徒歩6分、Sakaisuji-Hommachi 駅から7分',
    gf_detail: '要確認。グルテンの情報なし。生センマイ、ハツ刺し、味つけなしで焼く肉がいちばんシンプル。タレ、ロースの甘いタレ、だしコテチャン、冷やしラーメンの中身は書かれていない。',
    vegan_detail: 'ヴィーガンではありません。焼肉とホルモンの店。',
    notes: '[焼肉・博労町、2026年オープンの新鮮ホルモンの焼肉] Matsuyamachi 近くの明るい新しい焼肉店で、Horumon Nagaoka の姉妹店。カウンターと家族向けの座敷があり、深夜0時30分まで。生センマイと生姜醤油で軽く焼くレバーから始めて、黒タン、外ハラミ、ツラミ、締めにクッパかビビンバ。飲み放題つきのコースは6,500〜7,500円。肉と値段の評判がよく、量が少ない、タレが薄い、冷やしラーメンのオリーブオイルが強すぎるという声も。席料110円。',
  });
}

save();
