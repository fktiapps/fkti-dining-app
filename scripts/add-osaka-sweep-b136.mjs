// Osaka sweep (2-mile circle around Dotonbori), batch 136 — ramen phase (all OMNI).
//   + MENYA MITSUKI (kombu-water tsukemen in shoyu or shio, clear chicken shoyu ramen; run by two people; Tamatsukuri) — mom_and_pop
//   + びじねす食堂 (weekday-only mazesoba by the gram, shoyu ramen and more; MINAMO, Watanabebashi Stn)
//   + 中華そば 鯵右衛門 (horse-mackerel ramen with homemade noodles and Tsuruhashi-market fish, aji rice; opens 7:00; Tsuruhashi)
//   + 担々麺くろおに (black-sesame soupless tantanmen in a renovated old house in Oimatsu alley; Nishi-Tenma)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 136);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ MENYA MITSUKI
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27153373/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_menya_mitsuki_tamatsukuri', name: 'MENYA MITSUKI (MENYA MITSUKI)', category: 'OMNI',
    lat: 34.67359, lng: 135.531839, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu and shio tare; mayo rice bowl sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth and chicken oil; katsuobushi dashi; pork and chicken chashu; egg.',
    hours_raw: 'Daily 11:00–21:30; hours may change (Tabelog). Ticket machine (2026). Cash only (Tabelog). Run by two people (October 2026).',
    hours: ALL(day(['11:00', '21:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Tamatsukuri-Motomachi 3-30 (Tennoji-ku) — 111 m from Tamatsukuri Stn',
    cuisine: 'Kombu-water tsukemen and chicken shoyu · kombu-water tsukemen, shoyu or shio: noodles served in kombu water, a chicken-and-salt or refined shoyu dip, warm honkatsuo dashi to pour in, lemon; eat the noodles first with just salt · special version ¥1,430: pork and chicken chashu, seasoned egg, menma · chicken shoyu ramen ¥890: clear soup of ground chicken with chicken oil and a sharp soy edge, thin straight noodles, pork and chicken-breast chashu, thick menma, kaiware, white negi · grilled chashu mayo rice bowl with two kinds of chashu · 8 high counter seats',
    website: null, gmaps: gm('MENYA MITSUKI'), menu_url: null,
    notes: "[Ramen · kombu-water tsukemen and clear chicken shoyu by Tamatsukuri] A small, casual eight-seat counter a minute from Tamatsukuri Station, opened in November 2025 and run by two people. The star is kombu-water tsukemen: noodles bathed in kombu water that you first taste with just salt, then dip in a chicken shio or refined shoyu sauce, with warm honkatsuo dashi to stretch the dip and lemon for brightness (special ¥1,430). The chicken shoyu ramen (¥890) is a clear modern bowl with chicken oil and thin straight noodles. Don't skip the grilled chashu mayo rice bowl. One diner found the chashu a little plain, another the noodles uneven on an early visit. It gets tight when full. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 November 2025 (Tabelog)', background: 'Tsukemen and ramen counter run by two people (October 2026 review).', philosophy: null, specialty: 'Kombu-water tsukemen; chicken shoyu ramen.',
      anecdotes: [
        { text: '"I love starting with just salt. The noodles are smooth, and the flavor of the wheat is nicely enhanced by the salt… I also enjoy adding the broth for a flavorful drink." — January 2026, kombu-water tsukemen (shoyu).', source: R + 'B518178254/' },
        { text: '"The piping hot soup has a rich soy sauce color with a layer of chicken fat floating on the clear surface, offering a delightful blend of depth and sharpness in flavor." — October 2026, chicken shoyu ramen ¥890.', source: R + 'B537089391/' },
      ],
      japanese_sources_summary: '食べログ: MENYA MITSUKI、大阪市天王寺区玉造元町3-30、玉造から111m、毎日11:00〜21:30、カード・電子マネー・QR不可、2025年11月28日開店。口コミ(2026年1〜10月): 昆布水つけ麺 (醤油・塩)、まず塩で、鶏と塩のつけ汁、Honkatsuの温かいだし、レモン、特製は1,430円 (豚と鶏のチャーシュー、味玉、メンマ)、鶏醤油ラーメン890円 (鶏ひき肉の清湯に鶏油、細いストレート麺、豚と鶏むねのチャーシュー、太いメンマ、かいわれ、白ねぎ)、炙りチャーシューマヨ丼 (2種のチャーシュー)、券売機、カウンター8席、二人で営業、混むと狭い、チャーシューが物足りないという声、麺のゆで加減にむらがあった日も。',
      confidence: 'medium', sources: [TB, R + 'B518178254/', R + 'B536156549/', R + 'B536652114/', R + 'B537089391/', R + 'B537772225/', R + 'B537994033/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: ['chicken oil'], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin to medium-thin straight noodles in the ramen; noodles served in kombu water for the tsukemen (2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen'],
      signature_bowl: 'Kombu-water tsukemen, shoyu or shio; special ¥1,430 (October 2026).',
      chashu: 'Pork and chicken-breast chashu (2026).',
      notable_toppings: ['kombu water', 'honkatsuo dashi', 'lemon', 'seasoned egg', 'kaiware'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Tamatsukuri\'s kombu-water tsukemen, tasted first with just salt.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537994033/', '"A refreshing flavor with kombu broth and lemon" — placed low.'],
        oiliness: [R + 'B537089391/', '"A layer of chicken fat floating on the clear surface" — placed low.'],
        clarity: [R + 'B537772225/', '"Style: Clear Broth" — top of scale.'],
        tare_strength: [R + 'B537089391/', '"A delightful blend of depth and sharpness" — mid-scale.'],
        noodle_firmness: [R + 'B518178254/', '"The noodles are smooth"; well cooked on a later visit — mid-scale.'],
        aroma_punch: [R + 'B518178254/', '"The soy sauce aroma is quite refined" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B518178254/', R + 'B537089391/', R + 'B537772225/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; a how-to-eat card for the tsukemen (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市天王寺区玉造元町3-30',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区玉造元町3番30号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B518178254/', R + 'B536652114/', R + 'B537089391/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kombu-water tsukemen, shoyu', '', 'Tsukemen', 'no', 'no', 'September 2026.', 'kobu_shoyu'),
      it('', '', 'Special kombu-water tsukemen, shio', '¥1,430', 'Tsukemen', 'no', 'no', 'October 2026.', 'kobu_shio'),
      it('', '', 'Chicken shoyu ramen', '¥890', 'Ramen', 'no', 'no', 'October 2026.', 'tori_shoyu'),
      it('', '', 'Grilled chashu mayo rice bowl', '', 'Rice', 'no', 'no', 'September 2026.', 'aburi_mayo'),
    ] }, {
    cuisine: '昆布水つけ麺と鶏醤油・昆布水つけ麺、醤油か塩: 昆布水に浸した麺、鶏と塩か上品な醤油のつけ汁、注ぎ足すHonkatsuの温かいだし、レモン、まず塩で麺を・特製1,430円: 豚と鶏のチャーシュー、味玉、メンマ・鶏醤油ラーメン890円: 鶏ひき肉の澄んだスープに鶏油とキレのある醤油、細いストレート麺、豚と鶏むねのチャーシュー、太いメンマ、かいわれ、白ねぎ・2種のチャーシューの炙りチャーシューマヨ丼・ハイカウンター8席',
    neighborhood: '天王寺区玉造元町3-30。玉造駅から111m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油と塩のたれ、マヨ丼のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏のスープと鶏油、かつお節のだし、豚と鶏のチャーシュー、卵。',
    notes: '[ラーメン・玉造近く、昆布水つけ麺と澄んだ鶏醤油] 玉造駅から1分のカジュアルなカウンター8席の店で、2025年11月開店、二人で営業。主役は昆布水つけ麺: 昆布水に浸した麺をまず塩だけで味わい、鶏の塩か上品な醤油のつけ汁につけ、Honkatsuの温かいだしで割り、レモンで爽やかに (特製1,430円)。鶏醤油ラーメン(890円)は鶏油と細いストレート麺の澄んだ今風の一杯。炙りチャーシューマヨ丼もぜひ。チャーシューが少し物足りないという声や、初期は麺のゆで加減にむらがあったという声も。満席だと狭い。現金のみ。',
  });
}

// ================================================================ びじねす食堂
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27105551/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_business_shokudo_watanabebashi', name: 'びじねす食堂 (Business Shokudo)', category: 'OMNI',
    lat: 34.693947, lng: 135.49541, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based sauces; wontons.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat sauces and chicken paitan; chashu; egg.',
    hours_raw: 'Mon–Fri 11:00–15:00 and 18:00–22:00; closed Sat and Sun; hours may change (Tabelog). Ticket machine to the right of the entrance; chilled tsukemen ordered verbally (June 2026). Rice included with mazesoba at lunch (June 2026). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nakanoshima 3-2-30, MINAMO B1F (Kita-ku) — inside Keihan Watanabebashi Stn',
    cuisine: 'Mazesoba and ramen · mazesoba in original, shoyu, Sichuan and sea-bream salt (best cold), 100–500 g, garlic or none, spice levels; rice at lunch · exquisite shoyu ramen: classic shoyu, medium-thin straight noodles, three chashu, thick menma, wontons · blended shoyu ramen · chicken paitan ramen with a sweet soy edge · Nakanoshima black ramen · chicken paitan tsukemen, spicy tsukemen · sweet or spicy tantanmen · seasonal stamina ramen and chilled tsukemen · ramen in normal or DX size · 4 counter seats and tables',
    website: null, gmaps: gm('びじねす食堂'), menu_url: null,
    notes: "[Ramen · weekday-only mazesoba by the gram in Watanabebashi Station] A twelve-seat shop in the MINAMO dining area inside Keihan Watanabebashi Station, open since 2018 on weekdays only, with a lunch line from office workers. Mazesoba is the core: original, shoyu, Sichuan or sea-bream salt (staff suggest the last one cold), from 100 to 500 g, with or without garlic and rice included at lunch. The menu also runs to a classic shoyu ramen with wontons, a sweetish chicken paitan, a Nakanoshima black ramen, tsukemen and tantanmen. Two diners found the mazesoba and the paitan on the sweet side, and one found spice level 3 mild. Ticket machine by the door. Closed weekends.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 June 2018 (Tabelog)', background: 'Weekday-only noodle shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Mazesoba by weight; shoyu ramen.',
      anecdotes: [
        { text: '"The menu features a variety of noodle dishes including Mazesoba (original, soy sauce flavor, Sichuan style, and sea bream salt flavor), exquisite shoyu ramen, blended shoyu ramen, chicken paitan ramen, Nakanoshima black ramen…" — June 2026.', source: R + 'B530433242/' },
        { text: '"I initially requested the noodles to be served warm, but was advised that the cold version pairs better with the sea bream salt flavor, so I switched to cold. It was delicious!" — August 2026, 300 g.', source: R + 'B529328111/' },
      ],
      japanese_sources_summary: '食べログ: びじねす食堂、大阪市北区中之島3-2-30 MINAMO B1F、京阪渡辺橋駅直結、月〜金 11:00〜15:00・18:00〜22:00、土日休み、カード・電子マネー・QR可、12席 (カウンター4、テーブル)、2018年6月20日開店。口コミ(2026年6〜9月): まぜそば (オリジナル、醤油、四川、鯛塩)、100〜500g、にんにくの有無、辛さ、昼はご飯付き、鯛塩は冷たいほうが合うとすすめられる、Exquisite shoyu ramen (中細ストレート麺、チャーシュー3枚、太いメンマ、ワンタン)、ブレンド醤油ラーメン、甘めの鶏白湯ラーメン、Nakanoshima black ramen、鶏白湯つけ麺、辛つけ麺、甘いのと辛い担々麺、季節のスタミナラーメンと冷やしつけ麺 (口頭注文)、ラーメンは並と DX、券売機は入口の右、昼は行列、まぜそばが甘めで辛さ3でも辛くないという声。',
      confidence: 'medium', sources: [TB, R + 'B529328111/', R + 'B530080576/', R + 'B530433242/', R + 'B535163681/', R + 'B535737089/', R + 'B535949143/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thin straight noodles in the shoyu ramen; mazesoba from 100 to 500 g (2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba', 'ramen'],
      signature_bowl: 'Mazesoba (original), 250–300 g (2026).',
      chashu: 'Three slices on the shoyu ramen (June 2026).',
      notable_toppings: ['garlic', 'rice (lunch)', 'wontons', 'thick menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat sauce.' },
      pantheon: 'Watanabebashi\'s weekday mazesoba by the gram, with a long noodle menu behind it.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B535737089/', '"Even without garlic, the flavor was rich and delicious" — placed high.'],
        oiliness: [R + 'B530080576/', 'No review calls the mazesoba oily — mid-scale.'],
        clarity: [R + 'B530080576/', 'A soupless mazesoba — bottom of scale.'],
        tare_strength: [R + 'B535163681/', '"As for the taste, it was quite sweet" — placed high.'],
        noodle_firmness: [R + 'B530433242/', '"The noodles were straight and medium-thin" (ramen) — mid-scale.'],
        aroma_punch: [R + 'B535163681/', '"I chose spiciness level 3, but I didn\'t really feel any heat" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B530433242/', R + 'B535737089/', R + 'B535163681/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; helpful staff suggest the best way to order (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区中之島3-2-30 MINAMO B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区中之島三丁目2番30号 (go) 46m (station building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530433242/', R + 'B529328111/'],
    price_note: 'No prices in the reviews; JPY 1,000–1,999 average (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Mazesoba, original (100–500 g)', '', 'Mazesoba', 'no', 'no', 'June 2026.', 'maze'),
      it('', '', 'Sea-bream salt mazesoba (cold)', '', 'Mazesoba', 'no', 'no', 'August 2026.', 'taishio'),
      it('', '', 'Exquisite shoyu ramen', '', 'Ramen', 'no', 'no', 'June 2026.', 'shoyu'),
      it('', '', 'Chicken paitan ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'paitan'),
      it('', '', 'Chicken paitan tsukemen', '', 'Tsukemen', 'no', 'no', 'June 2026.', 'tsukemen'),
      it('', '', 'Tantanmen, sweet or spicy', '', 'Ramen', 'no', 'no', 'June 2026.', 'tantan'),
    ] }, {
    cuisine: 'まぜそばとラーメン・まぜそばはオリジナル、醤油、四川、鯛塩 (冷たいのがおすすめ)、100〜500g、にんにくの有無、辛さ、昼はご飯付き・Exquisite shoyu ramen: 昔ながらの醤油、中細ストレート麺、チャーシュー3枚、太いメンマ、ワンタン・ブレンド醤油ラーメン・甘めの鶏白湯ラーメン・Nakanoshima black ramen・鶏白湯つけ麺、辛つけ麺・甘いか辛い担々麺・季節のスタミナラーメンと冷やしつけ麺・ラーメンは並か DX・カウンター4席とテーブル',
    neighborhood: '北区中之島3-2-30 MINAMO B1F。京阪渡辺橋駅構内',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースのたれ、ワンタン。',
    vegan_detail: 'ヴィーガンではありません。肉のたれと鶏白湯、チャーシュー、卵。',
    notes: '[ラーメン・渡辺橋駅構内、平日だけのグラム単位のまぜそば] 京阪渡辺橋駅構内の MINAMO にある12席の店で、2018年開店、平日のみ営業、昼は会社員の行列。中心はまぜそば: オリジナル、醤油、四川、鯛塩 (鯛塩は冷たいのがいいとすすめられる)、100〜500g、にんにくの有無を選べ、昼はご飯付き。ワンタン入りの昔ながらの醤油ラーメン、甘めの鶏白湯、Nakanoshima black ramen、つけ麺、担々麺とメニューは多い。まぜそばや鶏白湯が甘めという声が二つ、辛さ3でも辛くないという声も。券売機は入口に。土日休み。',
  });
}

// ================================================================ 中華そば 鯵右衛門
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27155162/'; const R = TB + 'dtlrvwlst/';
  const D = day(['07:00', '15:00']);
  put({
    id: 'osaka_chuka_soba_ajiemon_tsuruhashi', name: '中華そば 鯵右衛門 (Chuka Soba Ajiemon)', category: 'OMNI',
    lat: 34.663412, lng: 135.533124, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat noodles; shoyu tare; fried aji.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: horse-mackerel and niboshi broths; pork chashu; naruto; egg.',
    hours_raw: 'Mon, Tue, Thu, Fri, Sat 7:00–15:00 (last order 14:30); Sun 11:00–15:00; closed Wed; hours may change (Tabelog). Hours revised to early morning in 2026; an evening-only tsukemen was also reported in September 2026; check the shop social media (2026). Cash only (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: day(['11:00', '15:00']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Tsuruhashi 2-14-10 (Ikuno-ku), on the Tsuruhashi shopping street — 4 min from Tsuruhashi Stn',
    cuisine: 'Horse-mackerel (aji) chuka soba · aji fresh-fish shoyu ¥980: a creamy, rounded aji-bone soup with savory soy · aji niboshi shio ¥930, aji niboshi shoyu ¥900 (sharp soy, low oil) · limited aji ramen ¥980: rich, cloudy aji soup · Tsuruhashi 2-chome Black Tsukemen ¥1,250: aji niboshi and aji-bushi dip with re-brewed Shimane soy, Rausu kombu and Mongolian rock salt, yuzu-kosho; 200 g, 300 g free · homemade medium-thick noodles of Miyake Seifun flour from Ikuno · Kagoshima Sanmi pork chashu, menma, naruto · aji meshi ¥350–380 (fresh aji on rice with wasabi), fried aji made to order, TKG · ajitama +¥180, chashu +¥300, extra +¥150 · 7 counter seats',
    website: null, gmaps: gm('中華そば 鯵右衛門'), menu_url: null,
    notes: "[Ramen · horse-mackerel chuka soba with Tsuruhashi-market fish, Tsuruhashi] A seven-seat counter on the Tsuruhashi shopping street, open since March 2026 and already well covered, built around aji (horse mackerel) from the local market. The aji fresh-fish shoyu (¥980) is a creamy, rounded bone broth; the aji niboshi shoyu and shio are sharper and leaner, and a limited aji ramen goes rich and cloudy. Noodles are homemade from flour milled in Ikuno, chewy and wheaty, under Kagoshima pork chashu. Order the aji meshi: fresh aji over rice with wasabi, so good it rivals a sushi bar. The menu changes often, and hours have moved to 7:00 openings, so check social media. Cash only. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 March 2026 (Tabelog)', background: 'Chuka soba shop on the Tsuruhashi shopping street (Tabelog; 2026 reviews).', philosophy: 'Ingredients from around Tsuruhashi: aji from a Tsuruhashi market fish shop, flour from Miyake Seifun in Ikuno, vegetables from a local grocer (October 2026 review).', specialty: 'Horse-mackerel chuka soba; aji rice.',
      anecdotes: [
        { text: '"The noodles are made from a special blend of flour from Miyake Seifun in the same Ikuno Ward, using a vacuum mixer… resulting in a homemade noodle with a chewy texture and rich wheat flavor." — September 2026, Tsuruhashi 2-chome Black Tsukemen ¥1,250.', source: R + 'B524281687/' },
        { text: '"I was amazed by the freshness of the aji itself. Since it\'s sourced from a local fish market in Tsuruhashi, it\'s no surprise…" — July 2026, aji don.', source: R + 'B527044703/' },
      ],
      japanese_sources_summary: '食べログ: 中華そば 鯵右衛門、大阪市生野区鶴橋2-14-10、鶴橋駅から徒歩4分、月・火・木・金・土 7:00〜15:00 (L.O. 14:30)、日 11:00〜15:00、水休み、カード・電子マネー・QR不可、カウンター7席、2026年3月15日開店。口コミ(2026年7〜10月): 鶴橋の商店街、鶴橋の市場のアジ、アジ鮮魚醤油980円 (クリーミーでまろやかなアジのだし)、アジ煮干し塩930円、アジ煮干し醤油900円 (キレのある醤油、油は少なめ)、限定のアジラーメン980円 (濃厚で白濁)、鶴橋2丁目ブラックつけ麺1,250円 (アジ煮干しと Aji-katsu、島根の再仕込み醤油、Rausu kombu、モンゴルの岩塩、柚子胡椒、200gで300gまで無料、夜のみに)、生野のMiyake Seifunの粉の自家製中太麺、鹿児島の Sanmi 豚のチャーシュー、メンマ、なると、Aji meshi350〜380円 (わさび)、注文後に揚げるアジフライ、TKG、味玉+180円、チャーシュー+300円、大盛り+150円、朝7時からの営業に変更、メニューがよく変わる、SNSで確認、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B524281687/', R + 'B525691604/', R + 'B527044703/', R + 'B531280727/', R + 'B532163228/', R + 'B535672882/'] },
    ramen: {
      broth_base: ['gyokai', 'niboshi'], broth_texture: 'unknown', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: true, notes: 'Homemade medium-thick straight noodles (2.75–3.50 mm) of Miyake Seifun flour, made with a vacuum mixer; whole wheat in the tsukemen (2026).' },
      regional_style: [], sub_genre: ['ramen', 'niboshi', 'tsukemen'],
      signature_bowl: 'Aji fresh-fish shoyu, ¥980 (2026).',
      chashu: 'Kagoshima Sanmi pork chashu, moist and meaty (2026).',
      notable_toppings: ['menma', 'naruto', 'green onion', 'yuzu-kosho (tsukemen)', 'aji meshi on the side'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Fish broth.' },
      pantheon: 'Tsuruhashi\'s horse-mackerel ramen, with market-fresh aji rice on the side.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B524281687/', '"A slightly higher oil content for richness, creating a well-rounded flavor" (fresh-fish shoyu) — mid-scale.'],
        oiliness: [R + 'B531280727/', '"The broth was brown and appeared to have a low oil content" (niboshi shoyu) — placed low.'],
        clarity: [R + 'B527044703/', 'A creamy fresh-fish soup, but clear niboshi bowls too — mid-scale.'],
        tare_strength: [R + 'B531280727/', '"The sharpness of the soy sauce is also delightful" — placed high.'],
        noodle_firmness: [R + 'B532163228/', '"Homemade medium-thick, with a nice chew and great texture" — placed high.'],
        aroma_punch: [R + 'B531280727/', '"The umami of the aji niboshi hits you right away" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B524281687/', R + 'B531280727/', R + 'B532163228/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter; menu and hours change often, so check social media (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市生野区鶴橋2-14-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市生野区鶴橋二丁目14番10号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524281687/', R + 'B531280727/', R + 'B532163228/'],
    price_note: 'Prices from July–October 2026 reviews; the menu changes often.', last_checked: TODAY, items: [
      it('', '', 'Aji fresh-fish shoyu', '¥980', 'Ramen', 'no', 'no', 'September 2026.', 'aji_shoyu'),
      it('', '', 'Aji niboshi shio', '¥930', 'Ramen', 'no', 'no', 'September 2026.', 'aji_shio'),
      it('', '', 'Aji niboshi shoyu', '¥900', 'Ramen', 'no', 'no', 'October 2026.', 'niboshi_shoyu'),
      it('', '', 'Aji ramen (limited)', '¥980', 'Limited', 'no', 'no', 'October 2026.', 'aji_ramen'),
      it('鶴橋2丁目ブラックつけ麺', '', 'Tsuruhashi 2-chome Black Tsukemen', '¥1,250', 'Tsukemen', 'no', 'no', 'September 2026 photo caption.', 'black_tsukemen'),
      it('', '', 'Aji meshi (fresh aji on rice)', '¥350–380', 'Rice', 'no', 'no', 'September–October 2026.', 'aji_meshi'),
      it('', '', 'Ajitama', '+¥180', 'Toppings', 'no', 'no', 'September 2026.', 'ajitama'),
    ] }, {
    cuisine: 'アジ (鯵) の中華そば・アジ鮮魚醤油980円: クリーミーでまろやかなアジの骨のスープに香ばしい醤油・アジ煮干し塩930円、アジ煮干し醤油900円 (キレのある醤油、油は少なめ)・限定のアジラーメン980円: 濃厚で白濁したアジのスープ・鶴橋2丁目ブラックつけ麺1,250円: アジ煮干しと Aji-katsuのつけ汁に島根の再仕込み醤油、Rausu kombu、モンゴルの岩塩、柚子胡椒、200gで300gまで無料・生野のMiyake Seifunの粉の自家製中太麺・鹿児島の Sanmi 豚のチャーシュー、メンマ、なると・Aji meshi350〜380円 (新鮮なアジのご飯にわさび)、注文後に揚げるアジフライ、TKG・味玉+180円、チャーシュー+300円、大盛り+150円・カウンター7席',
    neighborhood: '生野区鶴橋2-14-10、鶴橋の商店街。鶴橋駅から徒歩4分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、醤油のたれ、アジフライ。',
    vegan_detail: 'ヴィーガンではありません。アジと煮干しのスープ、豚のチャーシュー、なると、卵。',
    notes: '[ラーメン・鶴橋、地元の市場のアジの中華そば] 鶴橋の商店街にあるカウンター7席の店で、2026年3月開店、すでにメディアにも登場、地元の市場のアジが軸。アジ鮮魚醤油(980円)はクリーミーでまろやかな骨のスープ、アジ煮干しの醤油と塩はキレがあって軽め、限定のアジラーメンは濃厚で白濁。麺は生野で挽いた粉の自家製で、もちもちで小麦が香り、鹿児島の豚のチャーシュー。ぜひAji meshiを: 新鮮なアジをご飯にのせてわさびで、寿司屋に負けないという声も。メニューはよく変わり、営業は朝7時からに変わったので SNS で確認を。現金のみ。水曜休み。',
  });
}

// ================================================================ 担々麺くろおに
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27104109/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '22:00']);
  put({
    id: 'osaka_tantanmen_kuro_oni_nishitenma', name: '担々麺くろおに (Tantan-men Kuro Oni)', category: 'OMNI',
    lat: 34.695759, lng: 135.50618, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; sesame paste with soy; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: minced meat; chicken-based soup; steamed chicken.',
    hours_raw: 'Mon–Sat 11:00–22:00; Sun 11:00–15:00 and 17:00–22:00; hours may change (Tabelog). Chilled tantanmen on weekday evenings and weekends in summer (July 2026). AMEX and PayPay accepted; no e-money (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: day(['11:00', '15:00'], ['17:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Tenma 3-11-3, Oimatsu-koji D, in a narrow alley (Kita-ku) — 297 m from Naniwabashi Stn',
    cuisine: 'Tantanmen · soupless black-sesame tantanmen: near-black sesame paste, minced meat, chewy flat noodles, plated like pasta; spice levels; rice to finish · white-sesame tantanmen with a chicken-based soup · limited chilled white-sesame tantanmen with chili oil and Sichuan pepper · small size · toppings such as steamed chicken · yodare chicken, bite-size gyoza · Horo Yoi drink set and a long drink list · counter seats in a renovated old house',
    website: null, gmaps: gm('担々麺くろおに'), menu_url: null,
    notes: "[Ramen · black-sesame tantanmen in a renovated old house, Nishi-Tenma] A calm, stylish tantanmen shop in a renovated old house down the narrow Oimatsu alley in Nishi-Tenma, easy to mistake for a home, open since 2018. The order is the soupless black-sesame tantanmen: a nearly black, intensely fragrant sesame paste with minced meat over chewy flat noodles, plated like a pasta dish, with spice to your level and rice to finish. The white-sesame tantanmen is the soup version, and a chilled white-sesame bowl appears in summer. Yodare chicken, small gyoza and a drink set make it an evening stop too. One diner found the soup mild. Small sizes available. AMEX and PayPay accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 5 April 2018 (Tabelog)', background: 'Tantanmen shop in a renovated old house (Tabelog; 2020–2026 reviews).', philosophy: null, specialty: 'Black-sesame soupless tantanmen.',
      anecdotes: [
        { text: '"The rich aroma of black sesame fills the air, and the perfect balance of spiciness and sweetness from the sesame creates a delightful bowl. The noodles have just the right thickness and a strong chewiness." — July 2026, soupless black-sesame tantanmen.', source: R + 'B427037916/' },
        { text: '"The glossy white sesame soup, vibrant chili oil, and colorful toppings… The depth and nuttiness of the white sesame spread across my palate, followed by the pleasant spiciness of the chili oil and the refreshing numbing sensation of Sichuan peppercorns." — July 2026, limited chilled tantanmen.', source: R + 'B532586729/' },
      ],
      japanese_sources_summary: '食べログ: 担々麺くろおに、大阪市北区西天満3-11-3 老松小路D、なにわ橋から297m、月〜土 11:00〜22:00、日 11:00〜15:00・17:00〜22:00、カード (AMEX)・PayPay 可、電子マネー不可、2018年4月5日開店。口コミ(2020年〜2026年8月): 古民家を改装した店、細い路地で見つけにくい、家と間違えそう、汁なし黒ごま担々麺 (黒に近いごまペースト、ひき肉、もちもちの平打ち麺、パスタのような盛り付け、辛さを選べる、締めのご飯)、白ごま担々麺 (鶏ベースのスープ)、夏の平日夜と週末限定の冷やし白ごま担々麺 (ラー油、花椒)、小サイズ、蒸し鶏のトッピング、Yodare chicken、ひと口餃子、Horo Yoi setと豊富な酒、スープの味が弱いという声、落ち着いた雰囲気。',
      confidence: 'medium', sources: [TB, R + 'B427037916/', R + 'B528345461/', R + 'B531039145/', R + 'B531259625/', R + 'B532586729/', R + 'B533408963/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'unknown', tare: ['sesame'], aroma_oil: ['chili oil'], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'flat', hydration: null, handmade: false, notes: 'Chewy flat noodles in the soupless tantanmen (2026).' },
      regional_style: [], sub_genre: ['shiru_nashi_tantanmen', 'tantanmen'],
      signature_bowl: 'Soupless black-sesame tantanmen (2026).',
      chashu: null,
      notable_toppings: ['black sesame paste', 'minced meat', 'Sichuan pepper', 'steamed chicken', 'rice to finish'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Minced meat.' },
      pantheon: 'Nishi-Tenma\'s black-sesame soupless tantanmen, plated like pasta in an old house.',
      profile: { richness: 5, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B531039145/', '"A rich sesame paste that looked almost black" — top of scale.'],
        oiliness: [R + 'B532586729/', '"Rich‼️ Yet, it\'s not heavy" (chilled) — mid-scale.'],
        clarity: [R + 'B531039145/', 'A soupless sesame-paste bowl — bottom of scale.'],
        tare_strength: [R + 'B427037916/', '"The perfect balance of spiciness and sweetness from the sesame" — placed high.'],
        noodle_firmness: [R + 'B427037916/', '"The noodles have just the right thickness and a strong chewiness" — placed high.'],
        aroma_punch: [R + 'B427037916/', '"The rich aroma of black sesame fills the air" — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B427037916/', R + 'B531039145/', R + 'B532586729/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Pleasant staff; hidden alley location (July–August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区西天満3-11-3 老松小路D',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区西天満三丁目11番3号 (go) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B427037916/', R + 'B528345461/', R + 'B532586729/'],
    price_note: 'No prices in the reviews; JPY 1,000–1,999 average (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Soupless black-sesame tantanmen', '', 'Tantanmen', 'no', 'no', 'July 2026.', 'kuro_shirunashi'),
      it('', '', 'White-sesame tantanmen', '', 'Tantanmen', 'no', 'no', 'August 2026.', 'shiro'),
      it('', '', 'Chilled white-sesame tantanmen (summer, limited)', '', 'Limited', 'no', 'no', 'July 2026.', 'hiyashi'),
      it('', '', 'Yodare chicken', '', 'Sides', 'no', 'no', 'May–July 2026.', 'yodare'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'May 2026.', 'gyoza'),
      it('', '', 'Rice to finish', '', 'Rice', 'ask', 'ask', 'July 2026.', 'rice'),
    ] }, {
    cuisine: '担々麺・汁なし黒ごま担々麺: 黒に近いごまペースト、ひき肉、もちもちの平打ち麺、パスタのような盛り付け、辛さを選べ、締めのご飯・鶏ベースのスープの白ごま担々麺・夏限定の冷やし白ごま担々麺、ラー油と花椒・小サイズ・蒸し鶏などのトッピング・Yodare chicken、ひと口餃子・Horo Yoi setと豊富な酒・古民家を改装したカウンター席',
    neighborhood: '北区西天満3-11-3 老松小路D、細い路地の中。なにわ橋駅から297m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油の入ったごまペースト、餃子。',
    vegan_detail: 'ヴィーガンではありません。ひき肉、鶏ベースのスープ、蒸し鶏。',
    notes: '[ラーメン・西天満、古民家で食べる黒ごまの汁なし担々麺] 西天満の老松小路の細い路地にある、古民家を改装した落ち着いたおしゃれな担々麺の店で、家と間違えそうな佇まい、2018年開店。頼むなら汁なし黒ごま担々麺: 黒に近く香り高いごまペーストとひき肉をもちもちの平打ち麺にからめ、パスタのように盛り付け、辛さは好みで、最後はご飯で締める。スープありは白ごま担々麺、夏は冷やしの白ごまも。Yodare chicken、ひと口餃子、Horo Yoi setで夜にも。スープの味が弱いという声も。小サイズあり。AMEX と PayPay 可。',
  });
}

save();
