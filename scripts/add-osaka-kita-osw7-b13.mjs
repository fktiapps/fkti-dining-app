// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 13.
//   + 人類みな麺類 つけ麺専門店 Jinrui Mina Menrui Tsukemen Senmon Ten (whole-wheat tsukemen cut with scissors, clay-pot dip; opened 2025)
//   + ラッキー酒場 Lucky Sakaba (izakaya of fish and rare offal, choose-your-own appetiser, by Nishinakajima-Minamigata)
//   - skipped 27154326 七宝麻辣湯 西中島店: chain (about 70 shops by July 2026 and a 100-shop target, per news reports read 2026-11-02);
//     27137744 きりん寺 西中島南方駅前店: chain already in data (osaka_kirinji_sennichimae, _amemura, _ura_namba, _namba_ekimae);
//     27130356 まんしゅう 西中島店: chain, five same-concept shops on janmen.jp (read 2026-11-02); 5+ same-concept shops = chain;
//     27017288 味悟空 東淀川駅前店: same-concept branch of Aji Goku, already in data as osaka_ajigoku_mikuni (integrator review 2026-11-02).
//   Lane check: every id above is even. Taken in queue order (nearest first) after the four skips.
//   Chain check and sister concepts (Greg, 2026-11-02: sister concepts are not chains; only same-concept branches count):
//   - Jinrui Mina Menrui Tsukemen Senmon Ten: a tsukemen-only concept of the Jinrui Mina Menrui group (whole-wheat noodles cut
//     with scissors, clay-pot dip; an October 2026 review says two tsukemen shops opened in 2025, here and Kyoto). The group's other
//     concepts in data are osaka_menya_jinrui_no_takarabune, osaka_jinrui_mina_uchi_no_ramen and
//     osaka_jinrui_mina_karasa_ga_subete_abeno_hoop; the main Jinrui Mina Menrui ramen shop is not in data. Drafted as its own shop.
//   - Lucky Sakaba names no other shop.
//   Neither of the two is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Ramen block: the tsukemen is not described on all six dimensions (no oil), so it has none, per the 2026-11-01 lesson.
//   open_late per Greg's 2026-11-02 ruling (true when the shop closes after 22:00).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27154326', 'chain: 七宝麻辣湯, about 70 shops by July 2026 with a stated 100-shop target (food-industry news reports, read 2026-11-02)');
skip('27137744', 'chain already in data: Kirinji abura-soba (osaka_kirinji_sennichimae, osaka_kirinji_amemura, osaka_kirinji_ura_namba, osaka_kirinji_namba_ekimae)');
skip('27130356', 'chain: Manshu (まんしゅう) janmen, five same-concept shops on its brand site janmen.jp (本店, 蔦屋店, イオンモール高知店 in Kochi, 西中島店, 広島店); five or more same-concept shops count as a chain');
skip('27017288', 'same-concept branch of a brand already in data: Aji Goku (osaka_ajigoku_mikuni); a second branch is skipped however small the group');

// ================================================================ 人類みな麺類 つけ麺専門店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27148472/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_jinrui_mina_menrui_tsukemen_nishinakajima', name: '人類みな麺類 つけ麺専門店 (Jinrui Mina Menrui Tsukemen Senmon Ten)', category: 'OMNI',
    lat: 34.725908, lng: 135.498903, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick whole-wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood and pork-bone dip with chashu and egg.',
    hours_raw: 'Daily 11:00–15:00 and 18:00–22:00; hours may change (Tabelog). No reservations; cards and QR payments accepted, no e-money (Tabelog); buy a ticket at the machine, then queue outside (October 2026). 9 counter seats and a table for four; non-smoking (Tabelog). A short line at weekend lunch and evening (October 2026). Opened 27 April 2025 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島3-17-5, ground floor of リバーボール — about 50 m from Hankyu Minamikata Stn (Tabelog)',
    cuisine: 'Tsukemen only (October 2026) · three dips, all fish-and-pork-bone based, kept hot over solid fuel in a clay pot: "Honten" (soy, a little sweet and tangy, with lots of white negi), "Micro" (garlic for depth) and "Macro" (citrus and chili, the most popular) (October 2026) · noodles: long, thick whole-wheat noodles cut at the table with scissors, chewy and firm, 200 g, 300 g or 400 g at the same price (October 2026) · "Simple" topping of half an egg and two pieces of rolled chashu, or low-temperature rare chashu; "Special" for more (October 2026) · prices: Micro Simple 300 g ¥980, Macro Simple with rare chashu ¥1,080, Macro Regular 300 g ¥1,300 (October 2026) · mini pork rice bowl with mayonnaise; Hoegaarden on tap (October 2026)',
    website: null, gmaps: gm('人類みな麺類 つけ麺専門店 西中島'), menu_url: null,
    notes: "[Tsukemen · Nishinakajima, scissor-cut whole-wheat noodles by Minamikata] The tsukemen-only shop of the Osaka group behind Jinrui Mina Menrui, opened in 2025 by Hankyu Minamikata, a 13-seat room with a line at busy times. Everything is a little different here: the noodles are thick whole-wheat strands about a metre long that you cut yourself with scissors, and the dip, seafood and pork bone in three versions (the sweet-sour Honten, garlicky Micro or citrus-and-chili Macro), arrives in a clay pot kept bubbling over solid fuel, so it stays hot to the end (October 2026). Noodles from 200 to 400 g cost the same; ¥980–1,300 a bowl (October 2026). Some found the noodles very hard and the pot too hot to touch. Buy your ticket, then queue.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 27 April 2025 (Tabelog). Per an October 2026 review: Jinrui Mina Menrui began in Osaka with its main shop in Nishinakajima-Minamigata, and in 2025 opened two "Tsukemen Specialty Shops", here and in Kyoto, with "the longest whole grain noodles in Japan" cut with scissors and a clay-pot dip bowl. Another October 2026 diner credits the group\'s style and attentive service to the UNCHI Group and its president Matsumura.', philosophy: null, specialty: 'Macro tsukemen; scissor-cut whole-wheat noodles.',
      anecdotes: [
        { text: '"The dipping sauce is heated from below with solid fuel, keeping it warm until the end." — October 2026, Macro Simple with rare chashu for JPY 1,080.', source: R + 'B537244892/' },
        { text: '"Eating the nearly one-meter-long noodles while cutting them with scissors adds to the fun!" — October 2026.', source: R + 'B538433241/' },
        { text: '"Additionally, the noodles felt the hardest I\'ve ever had in Tsukemen, so those who dislike firmer noodles should be cautious." — October 2026, the Macro.', source: R + 'B538363637/' },
      ],
      japanese_sources_summary: '食べログ: 人類みな麺類 つけ麺専門店、つけ麺、大阪市淀川区西中島3-17-5 リバーボール 1F、南方駅から48m、毎日11:00〜15:00、18:00〜22:00、予約不可、カード・QR 可、電子マネー不可、カウンター9席と4人テーブル1つ、禁煙、2025年4月27日オープン。口コミ(2026年10月): つけ麺だけの店、2025年に西中島南方と Kyoto にできた、魚介と豚骨のつけ汁を固形燃料で温める土鍋で、「Honten」(醤油、少し甘くて酸味、白ねぎたっぷり)、「Micro」(にんにく)、「Macro」(柑橘と唐辛子、いちばん人気)、約1メートルの太い全粒粉の麺をはさみで切る、200g、300g、400g は同じ値段、「Simple」は半熟卵と巻きチャーシュー2枚、低温のレアチャーシューも、Micro Simple 300g 980円、Macro Simple とレアチャーシュー1,080円、Macro のレギュラー300g 1,300円、マヨネーズのミニ豚丼、Hoegaarden、食券を買ってから外で並ぶ、麺がとてもかたいという声、土鍋が熱すぎるという声も。',
      confidence: 'medium', sources: [TB, R + 'B537244892/', R + 'B537327607/', R + 'B537753283/', R + 'B537757484/', R + 'B537937257/', R + 'B538028510/', R + 'B538133093/', R + 'B538363637/', R + 'B538433241/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine first, then the line; choose dip, topping and noodle weight. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-17-5 リバーボール 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目17番5号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537937257/', R + 'B537244892/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tsukemen Micro Simple, 300 g', '¥980', 'Tsukemen', 'no', 'no', 'October 2026.', 'micro_simple'),
      it('', '', 'Tsukemen Macro Simple with rare chashu', '¥1,080', 'Tsukemen', 'no', 'no', 'October 2026.', 'macro_simple'),
      it('', '', 'Tsukemen Macro Regular, 300 g', '¥1,300', 'Tsukemen', 'no', 'no', 'October 2026.', 'macro_regular'),
      it('', '', 'Mini pork rice bowl', '', 'Rice', 'ask', 'no', 'October 2026; with mayonnaise.', 'mini_butadon'),
    ] }, {
    cuisine: 'つけ麺だけ (2026年10月)・つけ汁は3種で、どれも魚介と豚骨。固形燃料で温める土鍋で熱いまま: 「Honten」(醤油、少し甘くて酸味、白ねぎたっぷり)、「Micro」(にんにくで深み)、「Macro」(柑橘と唐辛子、いちばん人気) (2026年10月)・麺: 長くて太い全粒粉の麺を席ではさみで切る。もちもちでかため。200g、300g、400g は同じ値段 (2026年10月)・「Simple」は半熟卵の半分と巻きチャーシュー2枚、低温調理のレアチャーシューも。「Special」はもっと多め (2026年10月)・値段: Micro Simple 300g 980円、Macro Simple とレアチャーシュー1,080円、Macro のレギュラー300g 1,300円 (2026年10月)・マヨネーズのミニ豚丼。Hoegaarden の生 (2026年10月)',
    neighborhood: '西中島3-17-5、リバーボールの1階。阪急 南方駅から約50m (食べログ)',
    gf_detail: 'グルテンフリーではありません。太い全粒粉の小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。魚介と豚骨のつけ汁に、チャーシューと卵。',
    notes: '[つけ麺・西中島、はさみで切る全粒粉の麺] 人類みな麺類の大阪のグループのつけ麺だけの店で、2025年に阪急 南方駅のそばに開いた13席の店。混む時間は行列。ここは何もかも少しちがう: 麺は約1メートルの太い全粒粉の麺で、自分ではさみで切る。つけ汁は魚介と豚骨で3種 (甘酸っぱい Honten、にんにくの Micro、柑橘と唐辛子の Macro)。土鍋に入って固形燃料でぐつぐつのまま出てくるので、最後まで熱い (2026年10月)。麺は200g から400g まで同じ値段で、一杯980〜1,300円 (2026年10月)。麺がとてもかたい、土鍋が熱くてさわれないという人も。先に食券を買ってから並ぶ。',
  });
}

// ================================================================ ラッキー酒場
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27084394/'; const R = TB + 'dtlrvwlst/';
  const N = day(['17:30', '23:00']);
  put({
    id: 'osaka_lucky_sakaba_nishinakajima', name: 'ラッキー酒場 (Lucky Sakaba)', category: 'OMNI',
    lat: 34.725811, lng: 135.497441, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi comes with soy sauce, and tempura, fried dishes, skewers with a strong sauce and noodle dishes (uni carbonara, mapo Malony) are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an izakaya of fish, shellfish, beef tongue and offal.',
    hours_raw: 'Tue–Sat 17:30–23:00; closed Sunday and Monday; hours may change (Tabelog). Reservations accepted, by phone even on the day; booking is a must at weekends (Tabelog; 2024–2026). Cash only (Tabelog; May 2026). 18 seats on Tabelog, about ten tables and ten counter seats per a May 2026 diner; smoking allowed, so no under-18s (Tabelog; May 2026). Choose your appetiser from about ten; later orders by smartphone (August 2026).',
    hours: { 1: N, 2: N, 3: N, 4: N, 5: N }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: '西中島4-8-1 — about 130 m from Nishinakajima-Minamigata Stn (Tabelog), along the tracks west of Minamikata Station behind a red front (May 2026)',
    cuisine: 'Fish and offal izakaya with a menu that shifts each visit (2024–2026) · appetiser chosen from about ten (2025–2026) · sashimi: kinmedai, yellowtail, tuna, sea bream (August 2025); ishidai and tachiuo (June 2026); whelk and octopus (August 2025); red and sweet shrimp platter (March 2026); thick katsuo tataki (October 2026); mochi katsuo (July 2025) · meat: rare beef tongue with salt and green onion (July 2025); rare tongue skewers, namamino, gurensu (pancreas) (June 2026); outside skirt on garlic rice (September 2025) · dishes: niku-sui daikon (August 2025), green-onion tempura (December 2025), hamo tempura, lettuce fried rice (August 2026), celery kimchi, daikon mapo gratin (October 2026), mapo Malony (March 2026), ganjang gejang (November 2024), uni carbonara (August 2025) · shochu and highballs at low prices (August 2025) · two people about ¥9,000 (October 2026)',
    website: null, gmaps: gm('ラッキー酒場 西中島4-8-1'), menu_url: null,
    notes: "[Izakaya · Nishinakajima, rare fish and rare offal behind a red front] A busy, homely izakaya by the tracks west of Minamikata, behind a red front, that surprises with fish you rarely see in a tavern (ishidai, tachiuo, kinmedai, thick katsuo tataki) alongside rare-cooked tongue skewers and unusual offal such as namamino and gurensu (2025–2026). Start by choosing one of about ten appetisers, then let the staff steer you through a long, changing menu: lettuce fried rice, celery kimchi, daikon mapo gratin, hamo tempura, even uni carbonara (2025–2026). Prices are low, mostly around ¥1,000 a dish; two people ate well for under ¥9,000 (October 2026). Phone ahead at weekends. Cash only; smoking allowed, so no under-18s. Closed Sunday and Monday.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog. Reviewers: the staff are cheerful and recommend from the menu (May 2026); one woman ran the floor and kept checking on a table even when busy (August 2026).', philosophy: null, specialty: 'Choose-your-own appetiser; sashimi; rare offal.',
      anecdotes: [
        { text: '"I really appreciate being able to choose my appetizer, and the quality of each option is high!" — September 2025.', source: R + 'B490926900/' },
        { text: '"What stood out the most was the rare cut known as \'Gurensu (pancreas).\'" — June 2026.', source: R + 'B532734513/' },
        { text: '"I had to take home some of my favorite lettuce fried rice and tempura of hamo (pike eel) since I couldn\'t finish it all (laughs)." — August 2026.', source: R + 'B533396735/' },
      ],
      japanese_sources_summary: '食べログ: ラッキー酒場、立ち飲み、大阪市淀川区西中島4-8-1、西中島南方駅から128m、火〜土17:30〜23:00、日・月休み、予約可、現金のみ、18席、喫煙可。口コミ(2024年9月〜2026年10月): 南方駅の西、線路ぞいの赤い外観、テーブル約10とカウンター約10、喫煙のため未成年不可、お通しは約10種から選ぶ、メニューは毎回少しずつ変わる、刺身 (キンメ、ブリ、マグロ、鯛、石鯛、太刀魚、つぶ貝、タコ、赤エビと甘エビ、カツオのたたき、もちカツオ)、ねぎ塩のレア牛タン、レアのタン串、ミノ、Gurensu、ハラミのガーリックライス、Niku-sui Daikon、ねぎの天ぷら、ハモの天ぷら、レタスチャーハン、セロリのキムチ、大根の麻婆グラタン、Mapo Malony、Ganjang Gejang、ウニのカルボナーラ、焼酎とハイボールが安い、ひと皿約1,000円、2人で9,000円弱、週末は予約を、注文はスマホで。',
      confidence: 'medium', sources: [TB, R + 'B402958489/', R + 'B490926900/', R + 'B511394636/', R + 'B511550699/', R + 'B519138538/', R + 'B528262963/', R + 'B531391089/', R + 'B532362012/', R + 'B532734513/', R + 'B533396735/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose an appetiser, then order by smartphone; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-8-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目8番1号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533396735/', R + 'B532734513/'],
    price_note: 'Dishes from 2025–2026 reviews; around ¥1,000 a dish (July 2026).', last_checked: TODAY, items: [
      it('', '', 'Appetiser of your choice (about ten)', '', 'Starters', 'ask', 'ask', '2025–2026.', 'otoshi'),
      it('', '', 'Katsuo tataki', '', 'Sashimi', 'ask', 'no', 'October 2026.', 'katsuo_tataki'),
      it('', '', 'Rare beef tongue skewers', '', 'Grill', 'ask', 'no', 'June 2026.', 'tan_kushi'),
      it('', '', 'Lettuce fried rice', '', 'Rice', 'ask', 'no', 'August and October 2026.', 'lettuce_chahan'),
    ] }, {
    cuisine: '魚とホルモンの居酒屋で、メニューは来るたびに少し変わる (2024〜2026年)・お通しは約10種から選ぶ (2025〜2026年)・刺身: キンメ、ブリ、マグロ、鯛 (2025年8月)。石鯛と太刀魚 (2026年6月)。つぶ貝とタコ (2025年8月)。赤エビと甘エビの盛り合わせ (2026年3月)。厚切りのカツオのたたき (2026年10月)。もちカツオ (2025年7月)・肉: ねぎ塩のレアの牛タン (2025年7月)。レアのタン串、生ミノ、Gurensu (膵臓) (2026年6月)。ガーリックライスにハラミ (2025年9月)・一品: Niku-sui Daikon (2025年8月)、ねぎの天ぷら (2025年12月)、ハモの天ぷら、レタスチャーハン (2026年8月)、セロリのキムチ、大根の麻婆グラタン (2026年10月)、Mapo Malony (2026年3月)、Ganjang Gejang (2024年11月)、ウニのカルボナーラ (2025年8月)・焼酎とハイボールが安い (2025年8月)・2人で約9,000円 (2026年10月)',
    neighborhood: '西中島4-8-1。西中島南方駅から約130m (食べログ)。南方駅の西、線路ぞいの赤い外観 (2026年5月)',
    gf_detail: '要確認。グルテンの情報なし。刺身は醤油で、天ぷら、揚げ物、たれの濃い串焼き、麺料理 (ウニのカルボナーラ、Mapo Malony) もある。',
    vegan_detail: 'ヴィーガンではありません。魚、貝、牛タン、ホルモンの居酒屋。',
    notes: '[居酒屋・西中島、赤い外観の珍しい魚と珍しいホルモン] 南方駅の西、線路ぞいの赤い外観の、にぎやかで家庭的な居酒屋。居酒屋ではなかなか見ない魚 (石鯛、太刀魚、キンメ、厚切りのカツオのたたき) と、レアに焼いたタン串や、生ミノ、Gurensuといった珍しいホルモンが出てくる (2025〜2026年)。まず約10種からお通しを選び、あとはスタッフのおすすめに乗って、長くて毎回変わるメニューから: レタスチャーハン、セロリのキムチ、大根の麻婆グラタン、ハモの天ぷら、ウニのカルボナーラまで (2025〜2026年)。安くて、ひと皿だいたい1,000円。2人でたっぷり食べて9,000円弱 (2026年10月)。週末は電話で予約を。現金のみ。喫煙可なので未成年は不可。日曜と月曜休み。',
  });
}

save();
