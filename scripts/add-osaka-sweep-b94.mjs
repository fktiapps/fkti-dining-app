// Osaka sweep (2-mile circle around Dotonbori), batch 94 — ramen phase (all OMNI).
//   + 尾道ラーメン 十六番 本店 (long-running Onomichi ramen with Wamochi-pork kakuni; Nishinagahori)
//   + つけ麺四代目みさわ (pork-head and seafood double-soup tsukemen, hot stone; Honmachi)
//   + 麺屋 ぶっとく生きろ｡ (ultra-thick curly noodles, mazesoba ¥500 on the 22nd; Honmachi B1F)
//   + 麺屋 九兵衛 (chicken-oil shoyu, chilled kumquat soba, Friday izakaya; Sakaisuji-Honmachi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 94);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 尾道ラーメン 十六番 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27004696/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:30'], ['17:30', '21:00']);
  put({
    id: 'osaka_onomichi_ramen_juurokuban_shinmachi', name: '尾道ラーメン 十六番 本店 (Onomichi Ramen Juuroku Ban)', category: 'OMNI',
    lat: 34.677012, lng: 135.487052, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood dashi, pork back fat, kakuni and chashu.',
    hours_raw: 'Mon–Sat 11:00–14:30 and 17:30–21:00; closed Sundays (Tabelog, staff-maintained). PayPay accepted (September 2026); no cards (Tabelog). Coin parking next door.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 4-3-4, 1F (Nishi-ku) — 3 min from Nishinagahori Stn',
    cuisine: 'Onomichi ramen · Juuroku Ban ramen ¥990–1,150 in 2026: shoyu broth of Rausu kombu dashi and seafood with back fat, thin flat noodles from Sebe in Onomichi, thin lean chashu plus a tender kakuni of Wamochi pork, half a seasoned egg, menma · chashu ramen · sets with rice and kimchi, e.g. C set ¥1,280 · garlicky gyoza · beer · 10 counter seats',
    website: null, gmaps: gm('尾道ラーメン 十六番 本店 新町'), menu_url: null,
    notes: "[Ramen · a long-running Onomichi ramen counter by Nishinagahori] A small, traditional ten-seat counter near Nishinagahori, described by diners as a pioneer of Onomichi ramen in Osaka, with regulars lingering over gyoza and beer at night and a quick-turning line at lunch. The Juuroku Ban ramen is a nostalgic shoyu of Rausu kombu dashi and seafood with a layer of back fat, slightly sweet and easy to drink, on thin flat noodles brought from the Sebe noodle shop in Onomichi. Unusually for the style, it's meaty: thin lean chashu plus a tender, sweet-fatted kakuni of Wamochi pork, which one diner liked best with rice. Rice-and-kimchi sets run about ¥1,280, and the slightly large gyoza carry a hint of garlic. One diner found the bowl just average. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Long-established Onomichi ramen shop (Tabelog, staff-maintained; 2026 reviews).', philosophy: null, specialty: 'Juuroku Ban ramen with kakuni.',
      anecdotes: [
        { text: '"The broth is a blend of Rausu kombu kelp dashi, seafood stock, and soy sauce, with added back fat for extra sweetness. The noodles are also noteworthy… flat noodles sourced daily from the long-established Sebe noodle shop in Onomichi." — October 2026, Juuroku ramen ¥990.', source: R + 'B536632018/' },
        { text: '"The broth was light yet flavorful, with a strong bonito dashi and soy sauce taste. The back fat was not too overpowering. The noodles were thin and had a nice chewiness." — September 2026, Juuroku Ban ramen ¥1,150.', source: R + 'B536529092/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 尾道ラーメン 十六番 本店、大阪市西区新町4-3-4 日宝新町ビル1F、西長堀駅から徒歩3分、月〜土11:00〜14:30・17:30〜21:00、日曜定休、カード不可、カウンター10席、禁煙、隣にコインパーキング。口コミ(2026年8〜10月): 西長堀の有名店、昼は行列、カウンター8席ほど、ビールやご飯のセット、十六番ラーメン1,150円、あっさり醤油と細いストレート麺、普通だったという声、柔らかい肉2切れ、大阪の尾道ラーメンの草分け、背脂、細い平打ちストレート麺、薄切りチャーシューと角煮、味玉半分、メンマ、肉が多め、やや大きめでにんにくの効いた餃子、昔ながらの店、Bセット(チャーシュー麺とご飯)、ほんのり甘い醤油、脂のない薄いチャーシュー、12:10に5組待ちでも回転が早い、PayPay可、鰹だし、角煮が好み、十六番ラーメン990円、和豚もちぶたの角煮、羅臼昆布だしと魚介と醤油に背脂、尾道の老舗Sebeの平打ち麺、ご飯と角煮、夜は常連が餃子で一杯、Cセット(十六番ラーメンとご飯)1,280円、キムチ、懐かしい味。',
      confidence: 'medium', sources: [TB, R + 'B536632018/', R + 'B536529092/', R + 'B534311277/', R + 'B535350944/', R + 'B536500486/', R + 'B537361680/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: ['back fat'], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin flat straight noodles from the Sebe noodle shop in Onomichi (October 2026).' },
      regional_style: ['Onomichi'], sub_genre: ['ramen'],
      signature_bowl: 'Juuroku Ban ramen, ¥990–1,150 (September–October 2026).',
      chashu: 'Thin lean chashu plus Wamochi-pork kakuni (October 2026).',
      notable_toppings: ['kakuni', 'half seasoned egg', 'menma', 'back fat'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Seafood dashi and back fat.' },
      pantheon: 'Osaka\'s Onomichi pioneer: kombu-seafood shoyu with back fat, flat Onomichi noodles and Wamochi-pork kakuni.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536529092/', '"Light yet flavorful" — mid-scale.'],
        oiliness: [R + 'B536529092/', '"The back fat was not too overpowering" — mid-scale.'],
        clarity: [R + 'B534311277/', '"A light soy sauce base" under back fat — mid-scale.'],
        tare_strength: [R + 'B535350944/', '"The saltiness is just right" — mid-scale.'],
        noodle_firmness: [R + 'B536500486/', '"Thin, flat, and have a nice chewiness" — mid-scale.'],
        aroma_punch: [R + 'B536529092/', '"A strong bonito dashi and soy sauce taste" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B536632018/', R + 'B536529092/', R + 'B535350944/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter of regulars; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町4-3-4 日宝新町ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町四丁目3番4号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536632018/', R + 'B536529092/', R + 'B537361680/'],
    price_note: 'Prices from September–October 2026 reviews; the Juuroku Ban ramen was quoted at both ¥1,150 and ¥990.', last_checked: TODAY, items: [
      it('', '', 'Juuroku Ban ramen', '¥990–1,150', 'Ramen', 'no', 'no', 'September–October 2026.', 'juurokuban'),
      it('', '', 'Chashu ramen with rice (B set)', '', 'Sets', 'no', 'no', 'September 2026.', 'b_set'),
      it('', '', 'Juuroku Ban ramen with rice and kimchi (C set)', '¥1,280', 'Sets', 'no', 'no', 'October 2026.', 'c_set'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'September 2026.', 'gyoza'),
    ] }, {
    cuisine: '尾道ラーメン・十六番ラーメン(2026年は990〜1,150円): 羅臼昆布だしと魚介の醤油に背脂、尾道のSebeの細い平打ち麺、脂のない薄切りチャーシューと和豚もちぶたの柔らかい角煮、味玉半分、メンマ・チャーシュー麺・ご飯とキムチのセット(Cセット1,280円など)・にんにくの効いた餃子・ビール・カウンター10席',
    neighborhood: '西区新町4-3-4 1F。西長堀駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、餃子。',
    vegan_detail: 'ヴィーガンではありません。魚介のだし、豚の背脂、角煮とチャーシュー。',
    notes: '[ラーメン・西長堀、老舗の尾道ラーメンのカウンター] 西長堀近くの昔ながらのカウンター10席の小さな店で、大阪の尾道ラーメンの草分けと言われ、夜は常連が餃子とビールでゆっくり、昼は行列でも回転が早い。十六番ラーメンは羅臼昆布だしと魚介の懐かしい醤油に背脂、ほんのり甘く飲みやすく、尾道の老舗Sebeの細い平打ち麺。尾道ラーメンにしては肉が多く、脂のない薄切りチャーシューに、甘い脂の柔らかい和豚もちぶたの角煮、ご飯と一緒がいちばんという人も。ご飯とキムチのセットは1,280円ほど、やや大きめの餃子はにんにくがほんのり。普通だったという声も。日曜定休。',
  });
}

// ================================================================ つけ麺四代目みさわ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27081779/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://smile-c.co.jp/tsukemen-misawa/';
  const WD = day(['11:00', '16:00'], ['17:00', '23:00']), SUN = day(['11:00', '20:00']);
  put({
    id: 'osaka_tsukemen_yondaime_misawa_honmachi', name: 'つけ麺四代目みさわ (Tsukemen Yondaime Misawa)', category: 'OMNI',
    lat: 34.682624, lng: 135.501434, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy-based dip.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-head and seafood double soup, fish powder, chashu.',
    hours_raw: 'Mon–Fri 11:00–16:00 and 17:00–23:00; Sat 11:00–23:00; Sun and holidays 11:00–20:00 (food L.O. 15 minutes before close); open year-round, until sold out (Tabelog, staff-maintained). Ticket machine. Uber Eats and Demae-can. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['11:00', '23:00']), 6: SUN }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Minamihonmachi 3-6-1 — 1–2 min from Honmachi Stn',
    cuisine: 'Tsukemen with a "double soup" of pork head and seafood, rich dip with fish powder and onion · thick, chewy, wheaty noodles · a hot stone to rewarm the dip at the end · toppings: seasoned egg, chashu, niboshi, umeboshi, sudachi · summer umeboshi tsukemen ¥1,100 with lime · seafood tonkotsu ramen ¥950 · kuro shoyu ramen · soup-wari to finish · 22 counter seats, 2 tables',
    website: OWN, gmaps: gm('つけ麺四代目みさわ 本町'), menu_url: null,
    notes: "[Ramen · pork-head and seafood double-soup tsukemen by Honmachi] A spacious tsukemen shop a minute from Honmachi, open since 2014 in a district crowded with ramen shops, from a tsukemen brand with other branches. The dip is a \"double soup\" of pork head and seafood, rich with fish powder and onion yet not heavy on the finish, clinging to thick, chewy, wheaty noodles; a hot stone rewarms it at the end. Toppings range from seasoned egg and chashu to niboshi, sudachi and umeboshi, and in summer there was an umeboshi tsukemen (¥1,100) with lime that even skeptics liked. For a bowl, the seafood tonkotsu ramen (¥950) has a powerful fish aroma. Open late on weekdays and Saturdays, all year; delivery via Uber Eats. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 October 2014 (Tabelog)', background: 'Branch of the Tsukemen Misawa brand (official site smile-c.co.jp; Tabelog, staff-maintained).', philosophy: 'Pork-head and seafood double soup; hot stone to keep the dip warm (official site).', specialty: 'Tsukemen.',
      anecdotes: [
        { text: '"You can really taste the umami from the seafood, and despite its richness, the aftertaste isn\'t too heavy, making it easy to keep eating. The noodles have a great texture." — August 2026, tsukemen.', source: R + 'B534093972/' },
        { text: '"The chewy noodles had a strong wheat flavor and were deliciously thick… the plum adds a fantastic twist, with its acidity refreshing on a hot summer day." — July 2026, umeboshi tsukemen ¥1,100.', source: R + 'B486342656/' },
      ],
      japanese_sources_summary: '公式 smile-c.co.jp/tsukemen-misawa/: 行列のできるつけ麺専門店、豚頭・魚介のWスープ、味玉・チャーシュー・煮干し・梅干しなどのトッピング、すだちで味変、締めは焼き石で温かく。食べログ(店舗会員): つけ麺四代目みさわ、大阪市中央区南本町3-6-1、本町駅から徒歩1分、月〜金11:00〜16:00・17:00〜23:00、土11:00〜23:00、日祝11:00〜20:00(L.O.は15分前)、年中無休、売り切れ次第終了、カード・電子マネー・QR不可、30席(カウンター22、テーブル2卓)、2014年10月15日開店、Uber Eats・出前館。口コミ(2024年7月〜2026年9月): 魚介豚骨ラーメン950円、チャーシュー1枚とメンマ、ストレートで硬めの麺、魚介の香りが強い濃厚スープ、本町はラーメン激戦区、梅つけ麺1,100円、太くもちもちで小麦の香る麺、梅の酸味、スープ割り、黒醤油ラーメン850円(2024年)、ねぎたっぷり、玉ねぎと魚粉、ライム、濃厚だが後味は重くない、別の店舗にも行った、Uberの注文が多い。',
      confidence: 'medium', sources: [TB, OWN, R + 'B534093972/', R + 'B486342656/', R + 'B111323304/', R + 'B532581285/', R + 'B534821240/', R + 'B537359861/'] },
    ramen: {
      broth_base: ['tonkotsu', 'gyokai'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'straight', hydration: null, handmade: false, notes: 'Thick, chewy, wheaty tsukemen noodles (July–August 2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen'],
      signature_bowl: 'Tsukemen with pork-head and seafood double soup (2026).',
      chashu: 'Chashu topping (August–September 2026).',
      notable_toppings: ['fish powder', 'onion', 'seasoned egg', 'umeboshi', 'sudachi', 'hot stone'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork and seafood soup.' },
      pantheon: 'Honmachi\'s double-soup tsukemen: pork head and seafood with fish powder, rewarmed on a hot stone.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B534093972/', '"A rich and flavorful dipping sauce" — placed high.'],
        oiliness: [R + 'B534093972/', '"The aftertaste isn\'t too heavy" — mid-scale.'],
        clarity: [R + 'B534093972/', 'Rich seafood-pork dip — placed low.'],
        tare_strength: [R + 'B534821240/', '"A rich broth" — placed high.'],
        noodle_firmness: [R + 'B486342656/', '"The chewy noodles had a strong wheat flavor and were deliciously thick."'],
        aroma_punch: [R + 'B111323304/', '"A powerful seafood aroma" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B534093972/', R + 'B486342656/', R + 'B111323304/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南本町3-6-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); official site live; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南本町三丁目6番1号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B111323304/', R + 'B486342656/', OWN],
    price_note: 'Prices from July–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tsukemen', '', 'Tsukemen', 'no', 'no', '2026.', 'tsukemen'),
      it('', '', 'Umeboshi tsukemen (summer)', '¥1,100', 'Tsukemen', 'no', 'no', 'July 2026.', 'ume_tsukemen'),
      it('', '', 'Seafood tonkotsu ramen', '¥950', 'Ramen', 'no', 'no', 'September 2026.', 'gyokai_tonkotsu'),
      it('', '', 'Kuro shoyu ramen', '', 'Ramen', 'no', 'no', '¥850 in July 2024.', 'kuro_shoyu'),
    ] }, {
    cuisine: '豚頭と魚介の「Wスープ」のつけ麺、魚粉と玉ねぎの濃厚なつけ汁・太くもちもちで小麦の香る麺・締めは焼き石でつけ汁を温め直す・トッピング: 味玉、チャーシュー、煮干し、梅干し、すだち・夏はライム添えの梅つけ麺1,100円・魚介豚骨ラーメン950円・黒醤油ラーメン・スープ割り・カウンター22席、テーブル2卓',
    neighborhood: '中央区南本町3-6-1。本町駅から徒歩1〜2分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油ベースのつけ汁。',
    vegan_detail: 'ヴィーガンではありません。豚頭と魚介のWスープ、魚粉、チャーシュー。',
    notes: '[ラーメン・本町、豚頭と魚介のWスープのつけ麺] 本町から1分の広いつけ麺店で、2014年開店、ラーメン店が密集する一角にあり、ほかにも店舗のあるつけ麺ブランドの一軒。つけ汁は豚頭と魚介の「Wスープ」で、魚粉と玉ねぎで濃厚だが後味は重くなく、太くもちもちで小麦の香る麺によく絡む。最後は焼き石で温め直してくれる。トッピングは味玉、チャーシューから煮干し、すだち、梅干しまで、夏はライム添えの梅つけ麺(1,100円)も好評だった。ラーメンなら魚介の香りが強い魚介豚骨ラーメン(950円)。平日と土曜は夜遅くまで、年中無休、Uber Eatsも。現金のみ。',
  });
}

// ================================================================ 麺屋 ぶっとく生きろ｡
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27132481/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://buttokuikiro.com/';
  const WD = day(['11:30', '14:30'], ['17:00', '23:00']), WE = day(['11:30', '14:30']);
  put({
    id: 'osaka_menya_buttoku_ikero_minamihonmachi', name: '麺屋 ぶっとく生きろ｡ (Menya Buttoku Ikero.)', category: 'OMNI',
    lat: 34.682578, lng: 135.501665, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: extra-thick domestic-wheat noodles; soy-based sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: diced chashu, egg yolk.',
    hours_raw: 'Mon–Fri 11:30–14:30 (L.O. 14:00) and 17:00–23:00 (L.O. 22:30); Sat–Sun 11:30–14:30 (L.O. 14:00); closed holidays, New Year and Golden Week (Tabelog, staff-maintained). Ticket machine. Cards and e-money accepted (Tabelog). Mazesoba ¥500 on the 22nd of each month (2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minamihonmachi 3-3-17, B1F — 1 min from Honmachi Stn exits 7 and 9',
    cuisine: 'Extra-thick curly noodles of domestic wheat · Buttoku mazesoba ¥980: thick noodles, diced chashu, green onion, egg yolk in a rich sauce · large +¥150, raw egg ¥150 · thick ramen ¥1,080 · table: aged vinegar, chili oil, garlic sauce · add rice and broth to finish as chazuke · Buttoku Day on the 22nd: mazesoba ¥500 · counter and tables, 16 seats',
    website: OWN, gmaps: gm('麺屋 ぶっとく生きろ 本町'), menu_url: null,
    notes: "[Ramen · the thickest noodles around, in mazesoba, by Honmachi] A basement shop a minute from Honmachi, open since 2022 (formerly Shogun Mazesoba, per one diner), built around extra-thick, curly domestic-wheat noodles it bills as among Kansai's thickest. The Buttoku mazesoba (¥980) is the order: wide, chewy noodles with diced chashu, green onion and egg yolk in a rich, junky sauce; mix hard, then change it up with aged vinegar, chili oil and garlic from the table, and finish with rice and broth as chazuke. There's a thick ramen (¥1,080) too. On the 22nd of each month, Buttoku Day, the mazesoba drops to ¥500, and one regular never misses it. Busy at weekend lunch. Weekday dinners until 23:00.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 24 October 2022 (Tabelog); formerly Shogun Mazesoba (October 2026 review).', background: 'Thick-noodle mazesoba shop (official site buttokuikiro.com; Tabelog, staff-maintained).', philosophy: null, specialty: 'Buttoku mazesoba.',
      anecdotes: [
        { text: '"The thick noodles are incredibly satisfying, paired with diced chashu and green onions… The recommended way to enjoy it is to mix everything vigorously, incorporate the raw egg, and then enhance the flavor with the table condiments: aged vinegar, chili oil, and garlic sauce." — October 2026, Buttoku mazesoba ¥980.', source: R + 'B537519012/' },
        { text: '"I ordered my monthly favorite, the \'Buttoku Mazesoba\' for JPY 500, and of course, I added the Large Size for JPY 150." — September 2026, Buttoku Day.', source: R + 'B523029189/' },
      ],
      japanese_sources_summary: '公式 buttokuikiro.com。食べログ(店舗会員): 麺屋 ぶっとく生きろ｡、大阪市中央区南本町3-3-17 丸松ビル B1F、本町駅7・9番出口から徒歩1分、堺筋本町駅14番出口から徒歩5分、月〜金11:30〜14:30(L.O.14:00)・17:00〜23:00(L.O.22:30)、土日11:30〜14:30(L.O.14:00)、祝日・年末年始・GW休み、カード・電子マネー可、2022年10月24日開店。口コミ(2026年8〜10月): 毎月22日のぶっとくデーはまぜそば500円、大盛り+150円、極太麺、濃いたれ、ジャンク、ぶっとくまぜそば980円、生卵150円、関西一の極太麺という、サイコロチャーシューとねぎ、熟成酢・ラー油・にんにくだれ、ご飯とスープで茶漬け、券売機、国産小麦の極太縮れ麺、以前は「Shogun Mazesoba」という声、日曜昼は次々来店、ぶっとくラーメン1,080円、白ご飯、卵黄、汁なし、幅広の平打ち麺。',
      confidence: 'medium', sources: [TB, OWN, R + 'B537519012/', R + 'B523029189/', R + 'B537627522/', R + 'B537760841/', R + 'B537773353/', R + 'B537953616/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'wavy', hydration: null, handmade: false, notes: 'Extra-thick curly domestic-wheat noodles, wide and flat (October 2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba', 'ramen'],
      signature_bowl: 'Buttoku mazesoba, ¥980 (October 2026); ¥500 on the 22nd.',
      chashu: 'Diced chashu (October 2026).',
      notable_toppings: ['egg yolk', 'diced chashu', 'green onion', 'aged vinegar (table)', 'chili oil (table)', 'garlic sauce (table)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chashu and egg.' },
      pantheon: 'Honmachi\'s thick-noodle mazesoba: wide curly wheat, egg yolk and vinegar, ¥500 on the 22nd.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 5, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B523029189/', '"Coated in a rich sauce… a satisfying junk food experience" — placed high.'],
        oiliness: [R + 'B537760841/', '"The thick noodles combined with the rich oil" — placed high.'],
        clarity: [R + 'B537953616/', 'Soupless dry noodles — placed low.'],
        tare_strength: [R + 'B537627522/', 'Rich mazesoba sauce — placed high.'],
        noodle_firmness: [R + 'B537953616/', '"The wide, flat noodles have a strong presence."'],
        aroma_punch: [R + 'B537773353/', 'Aged vinegar, chili oil and garlic to change the flavor — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B537519012/', R + 'B523029189/', R + 'B537953616/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南本町3-3-17 丸松ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南本町三丁目3番17号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537519012/', R + 'B537627522/', R + 'B523029189/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Buttoku mazesoba', '¥980', 'Mazesoba', 'no', 'no', '¥500 on the 22nd; October 2026.', 'mazesoba'),
      it('', '', 'Large size', '+¥150', 'Toppings', 'no', 'no', 'September 2026.', 'oomori'),
      it('', '', 'Raw egg', '¥150', 'Toppings', 'no', 'no', 'October 2026.', 'egg'),
      it('', '', 'Thick ramen', '¥1,080', 'Ramen', 'no', 'no', 'October 2026.', 'ramen'),
    ] }, {
    cuisine: '国産小麦の極太縮れ麺・ぶっとくまぜそば980円: 極太麺、サイコロチャーシュー、ねぎ、卵黄を濃いたれで・大盛り+150円、生卵150円・ぶっとくラーメン1,080円・卓上に熟成酢、ラー油、にんにくだれ・締めはご飯とスープで茶漬けに・毎月22日のぶっとくデーはまぜそば500円・カウンターとテーブルで16席',
    neighborhood: '中央区南本町3-3-17 丸松ビル B1F。本町駅7・9番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。国産小麦の極太麺、醤油ベースのたれ。',
    vegan_detail: 'ヴィーガンではありません。サイコロチャーシュー、卵黄。',
    notes: '[ラーメン・本町、極太麺のまぜそば] 本町から1分の地下の店で、2022年開店(以前はShogun Mazesobaという声)、関西屈指の極太という国産小麦の縮れ麺が主役。頼むべきはぶっとくまぜそば(980円)で、幅広でもちもちの麺にサイコロチャーシュー、ねぎ、卵黄、ジャンクな濃いたれ。しっかり混ぜて、卓上の熟成酢、ラー油、にんにくで味を変え、最後はご飯とスープで茶漬けに。ぶっとくラーメン(1,080円)も。毎月22日のぶっとくデーはまぜそばが500円になり、欠かさず通う常連も。週末の昼はにぎわう。平日の夜は23時まで。',
  });
}

// ================================================================ 麺屋 九兵衛
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27126171/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '16:00']);
  put({
    id: 'osaka_menya_kyubee_minamihonmachi', name: '麺屋 九兵衛 (Menya Kyubee)', category: 'OMNI',
    lat: 34.683005, lng: 135.504645, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare; fried rice, kara-age and chijimi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-oil broth, chashu, chicken dishes.',
    hours_raw: 'Mon–Thu 11:00–16:00; Fri 11:30–20:00 with an izakaya menu from 15:00; closed Saturdays, Sundays and holidays (Tabelog, staff-maintained; August–September 2026). Ticket machine. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: day(['11:30', '20:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minamihonmachi 2-4-15, 1F — 2 min from Sakaisuji-Hommachi Stn exit 8',
    cuisine: 'Chuka soba (shoyu) with plenty of chicken oil, medium-thick chewy noodles, rare chashu · shio ajitama ramen · chilled soba in summer: kombu and bonito dashi with kumquat and minced chicken · half fried rice set · kara-age, two for ¥150 · Friday izakaya from 15:00: toro liver ¥400, chicken sashimi ¥400, yukhoe, grilled rare chashu, dashimaki, green-onion chijimi, highball ¥350 · 20 seats',
    website: null, gmaps: gm('麺屋 九兵衛 南本町'), menu_url: null,
    notes: "[Ramen · chicken-oil shoyu and a Friday izakaya near Sakaisuji-Honmachi] A clean, stylish ramen shop two minutes from Sakaisuji-Honmachi, open since 2021. The chuka soba is a rich shoyu glossy with chicken oil, on medium-thick, firm, chewy noodles with rare chashu; one diner drank every drop. In summer there was a chilled soba of kombu and bonito dashi topped with kumquat and minced chicken. Opinions on other bowls vary: one diner found the shio too oily and salty, another found the broth lukewarm at opening. Fridays it stays open to 20:00 and adds an izakaya menu from 15:00, with fresh chicken at bargain prices: toro liver and chicken sashimi ¥400 each, kara-age ¥150 for two, highballs ¥350. Weekdays only; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 November 2021 (Tabelog)', background: 'Ramen shop with a Friday izakaya menu (Tabelog, staff-maintained; 2026 reviews).', philosophy: null, specialty: 'Chicken-oil shoyu chuka soba.',
      anecdotes: [
        { text: '"The broth was rich with a generous amount of chicken oil and a delightful soy sauce aroma—it was incredibly delicious. I ended up drinking it all. The noodles were medium-thick with a chewy texture and had a strong bite." — September 2026, chuka soba with half fried rice set.', source: R + 'B466935138/' },
        { text: '"Personally, I found that the umami of the kombu came through first, followed by a subtle hint of bonito… The firm, medium-thick noodles had a smooth texture and a nice chew." — September 2026, chilled soba with kumquat.', source: R + 'B535753061/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 麺屋 九兵衛、大阪市中央区南本町2-4-15 南本町若林ビル 1F、堺筋本町駅8番出口から徒歩2分、月〜木11:00〜16:00、金11:30〜20:00、土日祝休み、カード・電子マネー・QR不可、20席、禁煙、おしゃれで落ち着いた空間、2021年11月1日開店。口コミ(2026年5〜9月): 金曜15時からの居酒屋メニュー、もやしナムル、とろレバー(低温調理)、鶏刺しユッケ、炙りレアチャーシュー、だし巻き、チャーハン、塩ラーメン、ねぎチヂミ、鶏むね塩焼き、唐揚げ、中華そばと半チャーハンのセット、鶏油たっぷりで醤油の香り、中太のもちもち麺、レアチャーシュー、チャーハンはぱらぱらではないという声、新鮮な鶏、とろレバー400円、鶏刺し400円、唐揚げ2個150円、ハイボール350円、塩味玉ラーメンとミニチャーハンは脂と塩が強く重いという声、きれいな店内、券売機がわかりにくい、唐揚げは作り置きでぬるい、スープもぬるいという声、冷やしそば、金柑、昆布と鰹のだし、鶏そぼろ、中太の硬めの麺。',
      confidence: 'medium', sources: [TB, R + 'B466935138/', R + 'B535753061/', R + 'B455271883/', R + 'B534310557/', R + 'B534937172/', R + 'B535585053/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: ['chicken oil'], richness: 'medium',
      noodles: { thickness: 'medium-thick', shape: null, hydration: null, handmade: false, notes: 'Medium-thick, firm, chewy noodles (September 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Chuka soba (shoyu) with chicken oil (September 2026).',
      chashu: 'Rare chashu (September 2026).',
      notable_toppings: ['chicken oil', 'kumquat (chilled soba)'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Chicken oil and chashu.' },
      pantheon: 'Sakaisuji-Honmachi\'s chicken-oil shoyu, with a bargain Friday chicken izakaya.',
      profile: { richness: 3, oiliness: 4, clarity: 3, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B466935138/', '"The broth was rich" — mid-scale.'],
        oiliness: [R + 'B466935138/', '"A generous amount of chicken oil" — placed high.'],
        clarity: [R + 'B535585053/', '"A classic soy sauce flavor" — mid-scale.'],
        tare_strength: [R + 'B535585053/', '"A classic soy sauce flavor" — mid-scale.'],
        noodle_firmness: [R + 'B466935138/', '"A chewy texture and had a strong bite."'],
        aroma_punch: [R + 'B466935138/', '"A delightful soy sauce aroma" — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B466935138/', R + 'B535585053/', R + 'B534937172/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine a little tricky; staff help (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南本町2-4-15 南本町若林ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南本町二丁目4番15号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534310557/', R + 'B466935138/', R + 'B535753061/'],
    price_note: 'Izakaya prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba (shoyu)', '', 'Ramen', 'no', 'no', 'September 2026.', 'chuka_soba'),
      it('', '', 'Shio ajitama ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'shio'),
      it('', '', 'Chilled soba with kumquat (summer)', '', 'Seasonal', 'no', 'no', 'September 2026.', 'hiyashi'),
      it('', '', 'Toro liver (Friday izakaya)', '¥400', 'Izakaya', 'no', 'no', 'August 2026.', 'toro_liver'),
      it('', '', 'Kara-age, two pieces', '¥150', 'Sides', 'no', 'no', 'August 2026.', 'karaage'),
    ] }, {
    cuisine: '鶏油たっぷりの中華そば(醤油)、中太のもちもち麺、レアチャーシュー・塩味玉ラーメン・夏の冷やしそば: 昆布と鰹のだしに金柑と鶏そぼろ・半チャーハンのセット・唐揚げ2個150円・金曜15時からの居酒屋: とろレバー400円、鶏刺し400円、ユッケ、炙りレアチャーシュー、だし巻き、ねぎチヂミ、ハイボール350円・20席',
    neighborhood: '中央区南本町2-4-15 1F。堺筋本町駅8番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、チャーハン、唐揚げ、チヂミ。',
    vegan_detail: 'ヴィーガンではありません。鶏油のスープ、チャーシュー、鶏料理。',
    notes: '[ラーメン・堺筋本町、鶏油の醤油と金曜の居酒屋] 堺筋本町から2分のきれいでおしゃれなラーメン店で、2021年開店。中華そばは鶏油がたっぷりの濃いめの醤油で、中太で硬めのもちもち麺にレアチャーシュー、スープを飲み干したという声も。夏は昆布と鰹のだしに金柑と鶏そぼろをのせた冷やしそばも。ほかの一杯は好みが分かれ、塩は脂と塩気が強すぎた、開店直後はスープがぬるかったという声も。金曜は20時まで開け、15時から居酒屋メニューが加わり、新鮮な鶏が安い: とろレバーと鶏刺しは各400円、唐揚げ2個150円、ハイボール350円。平日のみ、現金のみ。',
  });
}

save();
