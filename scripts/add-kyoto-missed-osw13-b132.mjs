// Kyoto priority (kyoto-missed), worker osw13, batch 132 — lane: Tabelog id mod 6 = 0; core and notable exhausted in the lane, so rest tier, nearest-first.
// Drafts: 炭焼 極, 七福家, 牛・キムラ, 柏徳. Skips: 銀次郎 (Yaruki group), ボクのスタンド and はふう 聖護院 (branches of brands in data), ぎゃらりぃ栞屋 (shioriya group). Shops fetched by the worker (Tabelog /en/ only, 3 s apart); no integrator prefetch this round.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-132');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26027568', 'large parent: フレンチ酒場 銀次郎 京都駅前東店 lists its website as yaruki.co.jp (the Yaruki group, whose 焼肉やる気 shops were skipped as a chain of eleven: 26034272, 26034531, 26037252)');
skip('26036712', 'same-concept branch of a brand already in data: ボクのスタンド (kyoto_boku_no_stand_shijo_karasuma, "The third shop of a popular Kyoto–Osaka standing-bar brand")');
skip('26027538', 'same-concept branch of a brand already in data: 肉専科はふう 聖護院 (kyoto_hafuu_honten, はふう 本店)');
skip('26004000', 'large parent: ぎゃらりぃ栞屋 is one of the nine shops of 株式会社shioriya (same call as 26026836 in osw13-76)');

// ================================================================ 炭焼 極
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26031156/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_sumiyaki_kiwami_omiya', name: '炭焼 極 (Sumiyaki Kiwami)', category: 'OMNI',
    lat: 35.003064, lng: 135.749552, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: skewers come with salt or a sweet soy-based tare, so ask for salt; avoid fried dishes, the chicken-broth ramen and dashi dishes (2024–2026 reviews). No gluten-free option stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori shop; the fried tofu comes in a dashi broth with bonito flakes (July 2024).',
    hours_raw: 'Tabelog: Mon–Sat 17:30–23:00 (L.O. 22:30); closed Sunday. When a long weekend includes Sunday, closed on the Monday instead; when Monday is a public holiday, open on the Sunday. Reservations taken (online too); 2-hour limit when busy, and you may be moved to the counter if tables are full. Popular and often fully booked (July 2024; April and October 2026). Cards, e-money and QR codes accepted. 21 seats: a counter downstairs and three tables on the second floor (October 2026); private hire possible. Heated tobacco only in a designated area; e-cigarettes only on the 2nd floor; ashtrays outside. Free Wi-Fi. Menu in English, Traditional Chinese and Korean. Children welcome. Opened 7 July 2018. 1 min from Hankyu Omiya and Randen Shijo-Omiya, on the station rotary.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Omiya — 1 min from Hankyu Omiya',
    cuisine: 'A small, busy binchotan yakitori shop by Hankyu Omiya with rare cuts, premium tsukune, sake from across Japan and the long-aged shochu "Kapitan" (Tabelog official; 2024–2026 reviews) · skewers made to order, by the single skewer, with salt or tare: momo and negima ¥180, heart ¥200, seseri ¥220, liver ¥250, tsukune ¥200, sori, obi, seikan, engawa and chicken harami ¥300 each, skin ¥230 (May 2026, before tax); heart ¥300, skin ¥240 (November 2026) · rare cuts such as back liver; the melting liver is the most praised skewer (2025–2026) · tsukune with raw egg; pork belly wrapped round tomato or white leek (2025–2026) · beef aburi sashimi ¥1,480; horse sashimi; limited-quantity items (2025–2026) · crispy fried Kyoto tofu; dashi-maki ¥650; ebi mayo ¥900; firefly squid in soy ¥550 (May 2026) · tamago-kake-gohan with dashi and smoked chicken; salmon onigiri ¥350; grilled rice balls; chicken-broth ramen (2025–2026) · courses, including a food-only course; draft beer ¥540, lemon chuhai ¥440 (May 2026)',
    website: null, gmaps: gm('炭焼 極 大宮'), menu_url: null,
    notes: '[Yakitori · Shijo-Omiya, binchotan skewers by the station] A small two-floor yakitori shop on the Hankyu Omiya rotary: rare cuts grilled to order over binchotan, a famously soft liver, tsukune with raw egg, and good sake and aged shochu. Skewers from about ¥180; most spend ¥3,000–6,000. Book ahead. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Chef (unnamed)'], origin: null,
      background: 'The shop opened on 7 July 2018 (Tabelog). Reviewers praise the owner\'s hospitality (October 2025; October and November 2026), "the kind service from the young proprietress" (November 2025), and quick, energetic staff (April 2026). Criticisms: a busy small room where you wait for dishes (December 2024) and a strong tare (April 2026).',
      philosophy: 'Tabelog official: "Grilled Chicken Proudly Prepared with Premium Binchotan Charcoal, Focusing on Ingredients, Preparation, and Cooking Techniques."',
      specialty: 'Binchotan yakitori and rare cuts; liver; tsukune.',
      anecdotes: [
        { text: 'July 2024: "I was amazed that the skewers were made fresh right after I placed my order… Surprisingly, the tsukune was also formed on the spot."', source: R + 'B495130956/' },
        { text: 'August 2025: "My senior colleague insisted, \'The liver here melts in your mouth!\' so I ordered it, and I was blown away by how good it was."', source: R + 'B525954831/' },
        { text: 'December 2024: "It can get quite busy in this small space, so don\'t expect to dine leisurely. You should also be prepared to wait for the dishes to be served."', source: R + 'B496707728/' },
      ],
      japanese_sources_summary: '食べログ: 炭焼 極、焼鳥・居酒屋、下京区下り松町37、阪急大宮・嵐電四条大宮から徒歩1分、月〜土17:30〜23:00 (L.O.22:30)、日曜休み (連休は月曜休み、月曜が祝日なら日曜営業)、予約可 (混雑時は2時間制)、21席、カウンター、2階、貸切可、加熱式たばこのみの喫煙所、カード・電子マネー・QR可、Wi-Fi、英語・繁体字・韓国語のメニュー、子ども可、2018年7月7日オープン。公式: 備長炭の焼鳥、希少部位、こだわりのつくね、熟成牛の串、全国の日本酒、長期熟成焼酎「Kapitan」、コース。口コミ (2024年7月〜2026年11月、英語): 注文を受けてから串を打ち、つくねもその場で成形、塩かたれ、とろけるレバー、背肝、ねぎま・もも180円、ハツ200円 (2026年11月は300円)、せせり220円、レバー250円、つくね200円 (2026年5月、税抜)、卵黄のつくね、豚バラのトマト巻き・白ねぎ巻き、牛のあぶり刺し1,480円、馬刺し、京とうふのカリカリ揚げ、だし巻き650円、TKG、焼きおにぎり、濃厚な鶏スープのラーメン、食事だけのコース、店主の温かいもてなし、若い女将、いつも満席、たれが濃いめとの声 (2026年4月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B495130956', 'B496707728', 'B502039353', 'B515482948', 'B516737596', 'B520838545', 'B525954831', 'B526419975', 'B527464027', 'B527478486', 'B531023266', 'B537585029', 'B539128848'])) },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; book ahead, often full.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区下り松町37',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to November 2026.' },
    pin_source: `Tabelog ${TB} (35.003064, 135.749552); not pin-checked by the worker (integrator to check); nearest pin kyoto_ramen_kyoryu_omiya 25.6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527478486/', R + 'B539128848/', R + 'B495130956/'],
    price_note: 'Prices from May 2026 (before 10% tax) and November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Momo (thigh) skewer', '¥180', 'Yakitori', 'ask', 'no', 'May 2026, before tax; salt or tare.', 'momo'),
      it('', '', 'Liver skewer', '¥250', 'Yakitori', 'ask', 'no', 'May and November 2026.', 'reba'),
      it('', '', 'Tsukune skewer', '¥200', 'Yakitori', 'ask', 'no', 'May 2026; also with rock salt or raw egg.', 'tsukune'),
      it('', '', 'Beef aburi sashimi', '¥1,480', 'Grilled', 'ask', 'no', 'May 2026.', 'gyu_aburi'),
      it('', '', 'Dashi-maki tamago', '¥650', 'Side', 'ask', 'no', 'May 2026.', 'dashimaki'),
    ] }, {
    cuisine: '阪急大宮すぐの小さく人気の備長炭の焼鳥屋。希少部位、こだわりのつくね、全国の日本酒と長期熟成焼酎「Kapitan」 (食べログ公式、2024〜2026年の口コミ)・注文ごとに1本から焼く串、塩かたれ: もも・ねぎま180円、ハツ200円、せせり220円、レバー250円、つくね200円、Sori、Obi、Seikan、えんがわ、鶏ハラミ各300円、皮230円 (2026年5月、税抜)、ハツ300円、皮240円 (2026年11月)・背肝などの希少部位、いちばん評判はとろけるレバー (2025〜2026年)・卵黄のつくね、豚バラのトマト巻きや白ねぎ巻き (2025〜2026年)・牛のあぶり刺し1,480円、馬刺し、数量限定の品 (2025〜2026年)・京とうふのカリカリ揚げ、だし巻き650円、えびマヨ900円、ほたるいかの醤油漬け550円 (2026年5月)・だしと燻製の鶏のTKG、鮭のおにぎり350円、焼きおにぎり、濃厚な鶏スープのラーメン (2025〜2026年)・料理だけのコースなど、生ビール540円、レモンチューハイ440円 (2026年5月)',
    neighborhood: '四条大宮。阪急大宮から徒歩1分',
    gf_detail: '要確認: 串は塩か醤油ベースの甘いたれ。塩を頼み、揚げ物、濃厚な鶏スープのラーメン、だしの料理は避ける (2024〜2026年の口コミ)。グルテンフリーの対応の記載なし。',
    vegan_detail: 'ヴィーガン不可: 鶏の焼鳥屋。揚げ出し豆腐はかつお節とだしで (2024年7月)。',
    notes: '[焼鳥・四条大宮、駅前の備長炭] 阪急大宮のロータリーに面した2フロアの小さな焼鳥屋。備長炭で注文ごとに焼く希少部位、評判のとろけるレバー、卵黄のつくね、日本酒と熟成焼酎。串は180円ほどから、3,000〜6,000円ほど。予約がおすすめ。日曜休み。',
  });
}

// ================================================================ 七福家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26005272/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_shichifukuya_shogoin', name: '七福家', category: 'OMNI',
    lat: 35.017168, lng: 135.779415, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried sweet-and-sour pork and chicken, dumplings, wontons, spring rolls, noodles and soy-based sauces (2024–2026 reviews); no gluten-free option stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, chicken, lamb, shrimp and egg dishes; meat-based soups (2024–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 11:30–15:00 (L.O. 14:30) and 17:00–22:00 (L.O. 21:30); closed Wednesday; irregular around New Year and Golden Week. Lunch last orders at 14:15 per a July 2026 review. Reservations taken; courses ¥3,500 (Lotus), ¥5,500 (Orchid), ¥8,500 (Peony) by reservation. Cash only: no cards, e-money or QR codes. 57 seats incl. counter and tatami; two private rooms upstairs for up to 20 each (about 40 together). Non-smoking (smoking outside). Takeaway. Menus in English and Chinese; Chinese-speaking staff. Children and strollers welcome. Down an alley off Marutamachi-dori (a sign on the street), 2 min east of the "Kumano Shrine Mae" bus stop; 10 min from Keihan Jingu-Marutamachi or Subway Higashiyama.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shogoin, Marutamachi-dori near Kumano Shrine — 10 min from Jingu-Marutamachi',
    cuisine: 'An alley Chinese restaurant serving Shanghai home cooking at local prices, best known for black-vinegar sweet-and-sour pork (Tabelog official; 2024–2026 reviews) · black-vinegar sweet-and-sour pork, as a set lunch ¥980 (February 2026) or over rice; spicy black-vinegar chicken (2025–2026) · lunch sets mostly under ¥1,000 with rice, soup and pickled mustard greens: yurinchi fried chicken, Chinese omelette with chili shrimp, spicy numbing fried chicken ¥980 (2025–2026) · shrimp wonton and mini fried rice set ¥1,300 (July 2026); cold sesame noodles in summer (June 2026) · braised pork-belly noodles; spring rolls (September 2026) · shrimp chili, boiled and shrimp dumplings, spicy cumin lamb, homemade almond tofu (2024–2026) · courses ¥3,500–8,500 (Tabelog)',
    website: null, gmaps: gm('七福家 聖護院 中華'), menu_url: null,
    notes: '[Shanghai Chinese · Shogoin near Kumano Shrine, black-vinegar sweet-and-sour pork] A hidden local Chinese restaurant down an alley off Marutamachi, run by Shanghai natives: lunch sets around ¥1,000 led by black-vinegar sweet-and-sour pork, and big menus and banquet rooms at night. Cash only. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed; Shanghai natives per a July 2026 review)'], origin: 'Shanghai (July 2026 review)',
      background: 'Reviewers describe Shanghai home cooking "run by Shanghai natives" (July 2026) and say "All the staff here are Chinese, but the seasoning is tailored for Japanese tastes" (February 2025); it is popular with locals and hosts banquets upstairs (2026 reviews). Criticisms: slow service for a dish (June 2026), small portions for the price (July and August 2026), mini fried rice served within a minute and a wonton broth that tasted of powdered soup (July 2026).',
      philosophy: 'Tabelog official: "Enjoy authentic Shanghai cuisine at reasonable prices!"',
      specialty: 'Black-vinegar sweet-and-sour pork; lunch sets.',
      anecdotes: [
        { text: 'February 2026: "There are not many places in Kyoto that serve black vinegar sweet and sour pork, so I really appreciate Shichifukuya. The price has gone up since my last visit, but it\'s still just JPY 980."', source: R + 'B501215814/' },
        { text: 'July 2026: "I arrived just after 14:00 and found three staff members lined up at the counter enjoying their lunch. They welcomed me with a cheerful \'Irasshaimase\' while eating."', source: R + 'B532098979/' },
        { text: 'September 2026: "I went for a light option: Hong Shao Rou Mian, which is braised pork belly noodles. It was piping hot, and the meat was tender and melted in my mouth."', source: R + 'B417715685/' },
      ],
      japanese_sources_summary: '食べログ: 七福家、中華料理・餃子、左京区聖護院山王町25-11、京阪神宮丸太町・地下鉄東山から徒歩10分、バス停「熊野神社前」から東へ2分、月・火・木〜日11:30〜15:00 (L.O.14:30)・17:00〜22:00 (L.O.21:30)、水曜休み、予約可、コース3,500円・5,500円・8,500円 (要予約)、カード・電子マネー・QR不可、57席、2階の個室 (最大約40名)、禁煙、テイクアウト、英語・中国語のメニュー、中国語のスタッフ、子ども可。公式: 路地の隠れ家で本格的な上海の家庭料理、黒酢の酢豚。口コミ (2024年10月〜2026年9月、英語): 上海出身の人が営む、スタッフは全員中国の人で味は日本人向け (2025年2月)、黒酢の酢豚 (ランチ980円、2026年2月)、黒酢の辛い鶏、油淋鶏、中華風オムレツとえびチリ、しびれる唐揚げ980円、えびワンタンとミニ炒飯のセット1,300円、冷麺、豚バラの角煮の麺、春巻き、えびチリ、水餃子、えび餃子、ラム肉のクミン炒め、自家製の杏仁豆腐、地元で人気、2階で宴会、提供が遅い・量が少ないとの声も。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B376842835', 'B417715685', 'B451308109', 'B501215814', 'B503721507', 'B531409973', 'B531459639', 'B532098979', 'B532223019', 'B534700221', 'B534700346', 'B535724556'])) },
    cultural_comfort: { level: 'konnichiwa', note: 'English and Chinese menus; Chinese-speaking staff; cash only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院山王町25-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.017168, 135.779415); not pin-checked by the worker (integrator to check); nearest pin mp_karasu 53.5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B501215814/', R + 'B532098979/', R + 'B531459639/'],
    price_note: 'Lunch prices from 2026 reviews; course prices from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Black-vinegar sweet-and-sour pork set (lunch)', '¥980', 'Lunch set', 'no', 'no', 'February 2026.', 'kurozu_subuta'),
      it('', '', 'Spicy numbing fried chicken set (lunch)', '¥980', 'Lunch set', 'no', 'no', 'July 2026.', 'mala_karaage'),
      it('', '', 'Shrimp wonton and mini fried rice set', '¥1,300', 'Lunch set', 'no', 'no', 'July 2026.', 'ebi_wonton_set'),
      it('', '', 'Course "Lotus"', '¥3,500', 'Course', 'no', 'no', 'Tabelog; reservation required. Also Orchid ¥5,500 and Peony ¥8,500.', 'course_lotus'),
    ] }, {
    cuisine: '路地の奥の中華料理店。上海の家庭料理を手頃な値段で、名物は黒酢の酢豚 (食べログ公式、2024〜2026年の口コミ)・黒酢の酢豚、ランチの定食980円 (2026年2月) や丼風、黒酢の辛い鶏 (2025〜2026年)・ご飯、スープ、からし菜の漬物付きで多くが1,000円以下のランチ: 油淋鶏、えびチリのせ中華風オムレツ、しびれる唐揚げ980円 (2025〜2026年)・えびワンタンとミニ炒飯のセット1,300円 (2026年7月)、夏はごまだれの冷麺 (2026年6月)・豚バラの角煮の麺、春巻き (2026年9月)・えびチリ、水餃子、えび餃子、ラム肉のクミン炒め、自家製の杏仁豆腐 (2024〜2026年)・コース3,500〜8,500円 (食べログ)',
    neighborhood: '聖護院、熊野神社近くの丸太町通。神宮丸太町から徒歩10分',
    gf_detail: 'グルテンフリーではない: 揚げた酢豚や鶏、餃子、ワンタン、春巻き、麺、醤油ベースのたれ (2024〜2026年の口コミ)。グルテンフリーの対応の記載なし。',
    vegan_detail: 'ヴィーガン不可: 豚、鶏、ラム、えび、卵の料理、肉のスープ (2024〜2026年の口コミ)。',
    notes: '[上海の中華・熊野神社近くの聖護院、黒酢の酢豚] 丸太町通から路地を入った、上海出身の人が営む地元の中華料理店。昼は黒酢の酢豚を筆頭に1,000円ほどの定食、夜は豊富な一品と宴会の個室。現金のみ。水曜休み。',
  });
}

// ================================================================ 牛・キムラ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26000328/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:30']);
  put({
    id: 'kyoto_gyu_kimura_omiya', name: '牛・キムラ', category: 'OMNI',
    lat: 34.999784, lng: 135.749308, cuisine_type: 'sukiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: the harihari hot pot and sukiyaki use a sukiyaki-style broth and finish with udon; yakiniku comes with sauces (2023–2026 reviews). Salted tongue and salt-and-pepper charcoal toban-yaki are on the menu, but no gluten-free option is stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu restaurant — beef hot pots dipped in raw egg, yakiniku, beef sushi and carpaccio (2023–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Wed, Fri–Sun 17:30–22:30 (food L.O. 21:00, drinks 22:00); closed Thursday. Reservations taken; tell the shop which dishes you want when booking; sukiyaki normally needs a reservation, though a same-day phone booking worked (September 2025). Seating charge ¥450 per person for the appetizer, none with a course. Cards, e-money and QR codes accepted. 26 table seats on the 2nd and 3rd floors, partitioned booths (March 2025); a room for 12–20 and private hire up to 20. Non-smoking. Children welcome. Tabelog lists parking, noting coin parking nearby. Opened 1 July 2002. At Omiya-Takatsuji, 7 min south of Hankyu Omiya / Randen Shijo-Omiya.',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Omiya-Takatsuji — 7 min south of Shijo-Omiya',
    cuisine: 'A wagyu restaurant run by a butcher, per a 2026 reviewer, known for its "Gyu harihari nabe" — marbled wagyu and Kyoto mizuna in a light sukiyaki-style broth, dipped in egg — plus sukiyaki, yakiniku and charcoal toban-yaki seasoned only with salt and pepper (Tabelog official; 2023–2026 reviews) · harihari nabe course ¥6,200 with appetizers, beef sushi, udon to finish and dessert (January 2025) · special beef sukiyaki set: staff cook the first slices, udon to finish (September 2025) · yakiniku: lean-cut assortments, salted thick tongue, tenderloin with garlic chips, outside skirt, sirloin cap, rib fingers; omakase selections (2026) · wagyu carpaccio with egg yolk; seared wagyu sushi; beef yukhoe (2026) · kimchi, caprese, jellyfish salad; stone-pot bibimbap; garlic rice (2024–2026) · about 15 sakes from around Japan',
    website: null, gmaps: gm('牛・キムラ 大宮高辻'), menu_url: null,
    notes: '[Wagyu hot pot and yakiniku · Omiya-Takatsuji, harihari nabe] A calm two-floor wagyu restaurant south of Shijo-Omiya: the signature beef-and-mizuna harihari hot pot (course ¥6,200), sukiyaki, and lean-cut yakiniku with a well-loved wagyu carpaccio; walls of celebrity autographs. Around ¥6,000–10,000. Book ahead. Closed Thursday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 1 July 2002 (Tabelog). A 2026 reviewer says it is run directly by a butcher shop and that other restaurants share the name; the butcher is not named. Reviewers mention signed celebrity photos on the walls (December 2024; 2025–2026) and a feature on Akiko Hinagata\'s TV show "A Life-Changing Restaurant" (January 2025), and praise staff who explain the hot pot and grill (2024–2026). Criticism: the course portion was a little small for one diner (November 2024); one diner found harihari nabe and sukiyaki hard to tell apart (March 2025).',
      philosophy: 'Tabelog official: "we offer carefully selected fresh Wagyu beef from across the country."',
      specialty: 'Gyu harihari nabe; lean-cut yakiniku; wagyu carpaccio.',
      anecdotes: [
        { text: 'June 2024: "We cooked the meat with mizuna, wrapped it, and dipped it in egg. Unlike the heaviness often associated with sukiyaki, this dish disappeared quickly."', source: R + 'B486438783/' },
        { text: 'January 2025: "there happened to be a noisy group of about ten locals celebrating a New Year Party right behind us. However, the staff was very considerate and kept checking in with us, saying, \'Sorry for the noise.\'"', source: R + 'B503575084/' },
        { text: 'July 2026: "This is a favorite spot in Kyoto where you can fully enjoy the deliciousness of Wagyu, thanks to its management by a butcher shop… this place truly makes you appreciate the flavor of lean cuts."', source: R + 'B528630462/' },
      ],
      japanese_sources_summary: '食べログ: 牛・キムラ、焼肉・すき焼き・鍋、下京区高辻通大宮町110-7 宇田ビル2F・3F、阪急・嵐電の四条大宮から南へ徒歩7分、月〜水・金〜日17:30〜22:30 (料理L.O.21:00、ドリンクL.O.22:00)、木曜休み、予約可 (希望の料理は予約時に)、席チャージ450円 (お通し代、コースは無し)、カード・電子マネー・QR可、テーブル26席、12〜20名の部屋、貸切20名まで、禁煙、子ども可、2002年7月1日オープン。公式: 全国から選んだ和牛、名物の牛のはりはり鍋 (霜降りの和牛と京水菜)、塩とこしょうだけの炭火の陶板焼き、各地の日本酒約15種。口コミ (2023年12月〜2026年9月、英語): はりはり鍋のコース6,200円 (前菜、肉寿司、締めのうどん、デザート)、特選すき焼き、赤身の盛り合わせ、厚切りの塩タン、ヒレ、ハラミなどの部位、和牛のカルパッチョ、和牛のあぶり寿司、ユッケ、キムチ、カプレーゼ、くらげの和え物、石焼ビビンバ、ガーリックライス、精肉店の直営、芸能人のサイン、Akiko Hinagata のテレビ番組で紹介 (2025年1月)、店員が焼き方や鍋の作り方を説明、量が少なめとの声 (2024年11月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B477017025', 'B486438783', 'B497018579', 'B498070684', 'B501614631', 'B503575084', 'B503875407', 'B514385441', 'B515629543', 'B528630462', 'B533440127', 'B535174742'])) },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the hot pot; phone may be Japanese only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高辻通大宮町110-7 宇田ビル 2F・3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (34.999784, 135.749308); not pin-checked by the worker (integrator to check); nearest pin kyoto_kyoha_spice 78.7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B503575084/', TB],
    price_note: 'Course price from a January 2025 review; seating charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Harihari nabe course (wagyu and mizuna hot pot)', '¥6,200', 'Course', 'ask', 'no', 'January 2025; appetizers, beef sushi, udon, dessert.', 'harihari_course'),
      it('', '', 'Special beef sukiyaki', '', 'Hot pot', 'ask', 'no', 'September 2025; reservation normally needed.', 'sukiyaki'),
      it('', '', 'Wagyu carpaccio', '', 'Appetizer', 'ask', 'no', '2026.', 'wagyu_carpaccio'),
      it('', '', 'Lean-cut yakiniku assortment', '', 'Yakiniku', 'ask', 'no', '2026.', 'akami_moriawase'),
    ] }, {
    cuisine: '2026年の口コミによれば精肉店直営の和牛の店。名物は霜降りの和牛と京水菜を軽いすき焼き風のだしで煮て卵で食べる牛のはりはり鍋。すき焼き、焼肉、塩とこしょうだけの炭火の陶板焼きも (食べログ公式、2023〜2026年の口コミ)・はりはり鍋のコース6,200円、前菜、肉寿司、締めのうどん、デザート (2025年1月)・特選すき焼き、最初は店員が焼き、締めはうどん (2025年9月)・焼肉: 赤身の盛り合わせ、厚切りの塩タン、ガーリックチップのヒレ、ハラミなどの部位、おまかせ (2026年)・卵黄の和牛カルパッチョ、和牛のあぶり寿司、ユッケ (2026年)・キムチ、カプレーゼ、くらげの和え物、石焼ビビンバ、ガーリックライス (2024〜2026年)・各地の日本酒約15種',
    neighborhood: '大宮高辻。四条大宮から南へ徒歩7分',
    gf_detail: '要確認: はりはり鍋とすき焼きはすき焼き風のだしで、締めはうどん。焼肉はたれ付き (2023〜2026年の口コミ)。塩タンや塩とこしょうの陶板焼きもあるが、グルテンフリーの対応の記載なし。',
    vegan_detail: 'ヴィーガン不可: 卵で食べる牛の鍋、焼肉、肉寿司、カルパッチョの和牛の店 (2023〜2026年の口コミ)。',
    notes: '[和牛の鍋と焼肉・大宮高辻、はりはり鍋] 四条大宮の南の落ち着いた2フロアの和牛の店。名物の牛と水菜のはりはり鍋 (コース6,200円)、すき焼き、評判の和牛カルパッチョと赤身の焼肉。壁には芸能人のサイン。6,000〜10,000円ほど。予約がおすすめ。木曜休み。',
  });
}

// ================================================================ 柏徳
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26005188/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_kashiwatoku_gojo_omiya', name: '柏徳', category: 'OMNI',
    lat: 34.996624, lng: 135.749849, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon, soba and tempura batter (2023–2026 reviews); no gluten-free option stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dashi is made from bonito flakes and kombu (owner, quoted in December 2024 and April 2023 reviews); herring, chicken, egg and fish-cake toppings.',
    hours_raw: 'Tabelog: Mon–Fri 11:00–19:00; Sat 11:00–15:30; closed Sunday; hours may change, so check first. Open on 31 December for year-end soba (2023 and 2024 reviews). Reservations taken. Cash only: no cards, e-money or QR codes. 22 seats at tables. Non-smoking. No parking. On Gojo-dori just east of Omiya; about 690 m from JR Tambaguchi.',
    hours: { 0: [['11:00', '19:00']], 1: [['11:00', '19:00']], 2: [['11:00', '19:00']], 3: [['11:00', '19:00']], 4: [['11:00', '19:00']], 5: [['11:00', '15:30']] }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Gojo-Omiya — on Gojo-dori east of Omiya',
    cuisine: 'An old-fashioned Kyoto udon and soba shop on Gojo-dori with a Showa-era room and a dashi of good bonito flakes and kombu, plus rice bowls (Tabelog; 2023–2026 reviews) · kitsune udon or soba ¥600, tax incl. (January 2025 and January 2026) · curry udon ¥800, with fried tofu or meat; small rice ¥200 (2025) · nabe-yaki udon ¥1,000 in a clay pot with shrimp tempura, chicken, a thick fish cake, Kujo leek and egg (January 2025; March 2026) · zaru soba ¥800 with a quail egg in the dipping sauce (August 2025) · herring soba at year end; tempura udon (2023–2024) · udon with a mini oyakodon ¥1,100 (March 2025); Kinugasa-don of fried tofu and egg; kitsune-don',
    website: null, gmaps: gm('柏徳 五条大宮 うどん'), menu_url: null,
    notes: '[Udon and soba · Gojo-Omiya, an elderly couple\'s Showa noodle shop] A spotless, old-fashioned neighbourhood noodle shop run by a friendly elderly couple: bonito-and-kombu dashi, ¥600 kitsune udon, curry udon and a hearty ¥1,000 nabe-yaki udon, with Kinugasa-don on the side. Cash only. Weekday lunch to early evening; Saturday lunch; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owners (unnamed elderly couple)'], origin: null,
      background: 'Reviewers describe "the elderly chef" (November 2024), "The couple running the place" (March 2025) and "the two elderly owners" (February 2026), a chef who chats with customers and steers first-timers through the order (November 2025; August 2026), and locals greeting the chef warmly (November 2024). The Showa-era room is old but well kept (2024–2025). A November 2025 reviewer saw a notepad and pencil on each table and guessed they were for talking with overseas guests. Criticism: the oyakodon egg had a slimy, starch-thickened texture (March 2025).',
      philosophy: 'The owner, asked about the broth (April 2023 review): "We use high-quality bonito and kombu kelp for our broth."',
      specialty: 'Bonito-and-kombu dashi; kitsune udon; nabe-yaki udon.',
      anecdotes: [
        { text: 'December 2024: "Every year on December 31st, I enjoy New Year\'s soba here. I had herring soba and rice. According to the owner, \'We use high-quality bonito flakes and kombu to make our dashi.\'"', source: R + 'B464441418/' },
        { text: 'November 2025: "With a smile, the chef asked, \'Would you like meat in your curry udon?\' and \'Do you want rice too?\' It felt like I was being guided through the ordering process."', source: R + 'B518019039/' },
        { text: 'January 2026: "Kitsune Udon JPY 600, tax Included. With just six 100-yen coins, I was completely satisfied both in body and spirit!"', source: R + 'B521683219/' },
      ],
      japanese_sources_summary: '食べログ: 柏徳、うどん・そば・親子丼、下京区五条大宮東入592、丹波口から687m、月〜金11:00〜19:00、土11:00〜15:30、日曜休み、予約可、カード・電子マネー・QR不可、テーブル22席、禁煙、駐車場なし。口コミ (2023年4月〜2026年8月、英語): 五条大宮の東の昔ながらのうどん・そば屋、昭和の雰囲気できれいな店内、年配の夫婦が営む、上等なかつお節と昆布のだし (店主の言葉)、きつねうどん・そば600円、カレーうどん800円、小ライス200円、鍋焼きうどん1,000円 (えび天、鶏、厚いかまぼこ、九条ねぎ、卵)、ざるそば800円 (つゆにうずらの卵)、にしんそば、天ぷらうどん、うどんとミニ親子丼1,100円、衣笠丼、きつね丼、大みそかも営業、テーブルにメモ帳と鉛筆、親子丼の卵がとろみでぬるっとしたとの声 (2025年3月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B464441418', 'B495772436', 'B499919251', 'B500779673', 'B502923266', 'B512867150', 'B518019039', 'B519663895', 'B521683219', 'B523498006', 'B524170873', 'B534537947'])) },
    cultural_comfort: { level: 'japanese', note: 'Old neighbourhood noodle shop run by an elderly couple; cash only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区五条大宮東入592',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to August 2026.' },
    pin_source: `Tabelog ${TB} (34.996624, 135.749849); not pin-checked by the worker (integrator to check); nearest pin mp_teuchi_udon_kasugai 86.6m (a different shop); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521683219/', R + 'B518019039/', R + 'B500779673/', R + 'B512867150/'],
    price_note: 'Prices from 2025–2026 reviews (tax incl.).', last_checked: TODAY, items: [
      it('', '', 'Kitsune udon', '¥600', 'Udon', 'no', 'no', 'January 2026; kitsune soba ¥600 in January 2025.', 'kitsune_udon'),
      it('', '', 'Curry udon', '¥800', 'Udon', 'no', 'no', 'November 2025; small rice ¥200.', 'curry_udon'),
      it('', '', 'Nabe-yaki udon', '¥1,000', 'Udon', 'no', 'no', 'January 2025.', 'nabeyaki_udon'),
      it('', '', 'Zaru soba', '¥800', 'Soba', 'no', 'no', 'August 2025.', 'zaru_soba'),
      it('', '', 'Udon with mini oyakodon', '¥1,100', 'Set', 'no', 'no', 'March 2025.', 'udon_oyakodon'),
    ] }, {
    cuisine: '五条通の昔ながらの京都のうどん・そば屋。昭和の店内、上等なかつお節と昆布のだし、丼ものも (食べログ、2023〜2026年の口コミ)・きつねうどん・そば600円、税込 (2025年1月、2026年1月)・カレーうどん800円、きつねか肉入り、小ライス200円 (2025年)・土鍋の鍋焼きうどん1,000円、えび天、鶏、厚いかまぼこ、九条ねぎ、卵 (2025年1月、2026年3月)・ざるそば800円、つゆにうずらの卵 (2025年8月)・年末のにしんそば、天ぷらうどん (2023〜2024年)・うどんとミニ親子丼1,100円 (2025年3月)、きつねと卵の衣笠丼、きつね丼',
    neighborhood: '五条大宮。五条通の大宮の東',
    gf_detail: 'グルテンフリーではない: 小麦のうどん、そば、天ぷらの衣 (2023〜2026年の口コミ)。グルテンフリーの対応の記載なし。',
    vegan_detail: 'ヴィーガン不可: だしはかつお節と昆布 (2024年12月・2023年4月の口コミでの店主の言葉)。にしん、鶏、卵、かまぼこの具。',
    notes: '[うどん・そば・五条大宮、年配の夫婦の昭和の麺処] 気さくな年配の夫婦が営む、きれいで昔ながらの町の麺の店。かつお節と昆布のだしで、600円のきつねうどん、カレーうどん、具だくさんの1,000円の鍋焼きうどん、衣笠丼も。現金のみ。平日は昼から夕方、土曜は昼、日曜休み。',
  });
}

save();
