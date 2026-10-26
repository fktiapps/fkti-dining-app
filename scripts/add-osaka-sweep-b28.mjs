// Osaka sweep (2-mile circle around Dotonbori), batch 28 — ramen phase, nearest first (all OMNI).
//   + 油そば・まぜそば ロマン アメ村店 (abura-soba, opened 20 Sep 2026; tonkotsu ramen from 22:00)
//   + 和韓料理スンドゥブ専門店じゅろく なんば別邸 (sundubu and sundubu ramen in Namba Walk — filed 'other'; pin single)
//   + 紀州和歌山ラーメン きぶんや 道頓堀店 (Wakayama-style tonkotsu shoyu, open to 5–6 am)
//   + すするか、すすらんか。 心斎橋 (mapo tofu ramen; the shop says it offers vegetarian/vegan and halal options)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 28);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 油そば・まぜそば ロマン アメ村店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27159521/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_roman_amemura', name: '油そば・まぜそば ロマン アメ村店 (Abura-soba & Mazesoba Roman Amemura)', category: 'OMNI',
    lat: 34.671184, lng: 135.497998, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu, tonkotsu ramen, kara-age; fish flakes on the condiment shelf.',
    hours_raw: 'Daily 11:00–15:30 and 17:00–5:00 (Tabelog). Tonkotsu ramen only from 22:00 (October 2026 reviews). Opened 20 September 2026. Digital ticket machine; Tabelog lists QR payments (no e-money), but in September 2026 electronic payment was not yet working and a reviewer had to pay cash.',
    hours: ALL(day(['11:00', '15:30'], ['17:00', '05:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 2-11-9, Amerika-mura — about 400 m from Yotsubashi Stn',
    cuisine: 'Abura-soba ¥850 on thick, curly house-made noodles · all-toppings abura-soba · mazesoba ¥1,000 · Taiwanese mazesoba · from 22:00, a light, creamy tonkotsu ramen ¥900 and a meat-loaded version ¥1,100 · set A (rice and kara-age) +¥300 · vinegar, chili oil, garlic, spicy miso on the table',
    website: null, gmaps: gm('油そば まぜそば ロマン アメ村店'), menu_url: null,
    notes: "[Ramen · late-night abura-soba in Amemura] A new Roman shop, opened on 20 September 2026 among the Amerika-mura live houses and open until 5 am. Roman is an Osaka brand that began in Morinomiya in 2022. The abura-soba (¥850) is the plain, steady kind, on thick, curly house-made noodles cut short enough to slurp. Reviewers douse it in vinegar and chili oil, add garlic or kimchi, and find it not greasy at all. The mazesoba (¥1,000) comes with more sauce than expected and a strong soy edge, and there is a Taiwanese mazesoba. After 10 pm the shop adds something the name doesn't promise: a smooth, milky tonkotsu ramen on thin straight noodles (¥900; ¥1,100 piled with chashu), creamy but light enough for that hour. You buy a ticket at the machine; about three tables and eight counter seats.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 September 2026 (Tabelog; reviews)', background: 'The Roman brand started in Morinomiya, Osaka, in 2022 (October 2026 review); new Kobe Motomachi and Kishiwada shops opened the month before this one (September 2026 review).', philosophy: null, specialty: 'Abura-soba and mazesoba; tonkotsu ramen late at night.',
      anecdotes: [
        { text: '"The thick, curly noodles coated in flavor are short enough to slurp easily… although it\'s called Abura-soba, it\'s not greasy at all." — September 2026.', source: R + 'B536269017/' },
        { text: '"While specializing in Abura-soba and Mazesoba, this Amemura location also offers Tonkotsu ramen starting at 10 PM." — October 2026.', source: R + 'B537238511/' },
      ],
      japanese_sources_summary: '食べログ: 油そば・まぜそば ロマン アメ村店、大阪市中央区西心斎橋2-11-9、毎日11:00〜15:30・17:00〜翌5:00、予約不可、電子マネー不可・QR決済可、禁煙、2026年9月20日開店。2026年の口コミ(9〜10月): 油そば850円、Aセット(ご飯と唐揚げ)300円、デジタル券売機だが開店直後は電子決済が使えず現金、酢とラー油をかけて、太いちぢれの自家製麺、油そばなのに脂っこくない、近くにライブハウス、森ノ宮で2022年に1号店、前の月に神戸元町と岸和田にも出店、まぜそば1,000円とご飯50円、テーブル3つとカウンター8席ほど、水とスプーンはセルフ、汁が思ったより多く醤油が強め、卓上の辛味噌とにんにく、セルフの棚に魚粉と七味、22時からとんこつラーメン、とんこつラーメン900円とねぎ100円、背脂、チャーシュー、シールで1トッピング無料、肉盛りとんこつラーメン1,100円と半熟玉子100円、細いストレート麺、卓上ににんにく・辛味噌・黒胡椒・すりごま・ラー油、全部のせ油そばにキムチとフライドオニオン、台湾まぜそば、朝まで営業。',
      confidence: 'medium', sources: [TB, R + 'B536269017/', R + 'B536453987/', R + 'B536811058/', R + 'B536820015/', R + 'B537238511/', R + 'B537518335/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thick', shape: 'curly', hydration: null, handmade: true, notes: 'Abura-soba: thick, curly house-made noodles, cut short (September 2026). Late-night tonkotsu: thin straight noodles (October 2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba', 'ramen'],
      signature_bowl: 'Abura-soba ¥850 (September 2026); tonkotsu ramen ¥900 from 22:00 (October 2026).',
      chashu: 'Tender chashu that falls apart, sweet fat and lean (October 2026, tonkotsu ramen).',
      notable_toppings: ['vinegar', 'chili oil', 'garlic', 'spicy miso', 'kimchi', 'fried onions', 'back fat (tonkotsu)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chashu; pork broth for the ramen.' },
      pantheon: 'Amemura\'s 5 am abura-soba: thick, curly house-made noodles, vinegar and chili oil, and a creamy tonkotsu after 10 pm.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536269017/', '"A stable appearance—nothing flashy, but that\'s what makes it great!"'],
        oiliness: [R + 'B536269017/', '"Although it\'s called Abura-soba, it\'s not greasy at all."'],
        clarity: [R + 'B536269017/', 'Soupless abura-soba — clarity does not apply; neutral mid-scale (inferred).'],
        tare_strength: [R + 'B536453987/', 'Mazesoba: "The broth had a strong soy sauce flavor"; the abura-soba is not described this way — mid-scale (inferred).'],
        noodle_firmness: [R + 'B536269017/', '"The thick, curly noodles coated in flavor are short enough to slurp easily"; firmness not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B537518335/', 'Built at the table: "I love adding extra vinegar, and it becomes even more delicious with some minced garlic."'],
      },
      confidence: 'medium', sources: [R + 'B536269017/', R + 'B536453987/', R + 'B537238511/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Digital ticket machine; self-service water.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-11-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened 20 September 2026; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目11番9号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536269017/', R + 'B536453987/', R + 'B536811058/', R + 'B537238511/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('油そば', 'abura soba', 'Abura-soba', '¥850', 'Abura-soba & mazesoba', 'no', 'no', 'September 2026.', 'abura'),
      it('まぜそば', 'mazesoba', 'Mazesoba', '¥1,000', 'Abura-soba & mazesoba', 'no', 'no', 'September 2026.', 'maze'),
      it('', '', 'Taiwanese mazesoba', '', 'Abura-soba & mazesoba', 'no', 'no', 'October 2026.', 'taiwan'),
      it('', '', 'Set A (rice and kara-age)', '¥300', 'Sides', 'no', 'no', 'September 2026.', 'set_a'),
      it('', '', 'Tonkotsu ramen (from 22:00)', '¥900', 'Ramen', 'no', 'no', 'October 2026.', 'tonkotsu'),
      it('', '', 'Meat-loaded tonkotsu ramen (from 22:00)', '¥1,100', 'Ramen', 'no', 'no', 'October 2026.', 'tonkotsu_niku'),
      it('', '', 'Soft-boiled egg', '¥100', 'Toppings', 'ask', 'no', 'October 2026.', 'egg'),
    ] }, {
    cuisine: '太いちぢれの自家製麺の油そば850円・全部のせ油そば・まぜそば1,000円・台湾まぜそば・22時からはあっさりクリーミーなとんこつラーメン900円と肉盛り1,100円・Aセット(ご飯と唐揚げ)300円・卓上に酢、ラー油、にんにく、辛味噌',
    neighborhood: '西心斎橋2-11-9、アメリカ村。四ツ橋駅から約400m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。チャーシュー、とんこつラーメン、唐揚げ。調味料の棚に魚粉。',
    notes: '[ラーメン・アメ村の深夜の油そば] 2026年9月20日にアメリカ村のライブハウス街に開店し、朝5時まで営業するロマンの新店。ロマンは2022年に森ノ宮で始まった大阪のブランド。油そば(850円)は飾らない安定の一杯で、太いちぢれの自家製麺はすすりやすい短さ。酢とラー油をたっぷりかけ、にんにくやキムチを足して、脂っこさはまったくないという声。まぜそば(1,000円)は思ったより汁が多く醤油が強め、台湾まぜそばも。22時からは店名にないもう一品、細いストレート麺のなめらかでクリーミーなとんこつラーメン(900円、チャーシュー山盛りは1,100円)が出て、濃厚なのに夜中でも軽く食べられます。券売機で食券を買い、テーブル3つとカウンター8席ほど。',
  });
}

// ================================================================ 和韓料理スンドゥブ専門店じゅろく なんば別邸
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27149983/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_juroku_namba_bettei', name: '和韓料理スンドゥブ専門店じゅろく なんば別邸 (Juroku Namba Bettei)', category: 'OMNI',
    lat: 34.667184, lng: 135.505445, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sundubu ramen with wheat noodles; sauces not described. Ask about the plain sundubu set.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sundubu with clams, minced meat and grilled pork; beef shigureni on the cold noodles.',
    hours_raw: 'Daily 11:00–22:00 (food L.O. 21:15); closed the third Wednesday of odd-numbered months and 1 January (Tabelog). Ticket machine at the entrance; cards, IC cards/iD and QR (PayPay, Alipay, WeChat Pay and others) accepted. Reservations taken.',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Walk (underground), Sennichimae 1-5-12 — 30 seconds from Nippombashi Stn (Sakaisuji Line)',
    cuisine: 'Japanese-Korean sundubu sets with rice and three small sides (bean-sprout namul, blanched greens, kimchi) · sundubu ramen, the Namba-only item · grilled-cheese sundubu ramen · grilled-pork sundubu · Wakan herb cold noodles with beef shigureni · aged pork tonteki · spice levels 1–4 · lychee sorbet to finish · 17 seats',
    website: null, gmaps: gm('スンドゥブ専門店じゅろく なんば別邸'), menu_url: null,
    notes: "[Korean · Japanese-Korean sundubu in Namba Walk] A calm, 17-seat sundubu shop in the Namba Walk underground mall, by Nippombashi Station, here for about a year by autumn 2026. The soft-tofu stew is rich and sweet beneath the heat. Spice runs from 1 to 4, with 2 as standard. Several reviewers found 3 easy going, and 1 not spicy at all. Sets come with rice and three small sides, and a scoop of lychee sorbet arrives at the end. The Namba-only sundubu ramen puts noodles in the stew (one visitor added rice for ¥100), though one reviewer compared the noodles to boiled dried noodles rather than real ramen. Other picks are the grilled-pork sundubu with clams and minced meat, grilled-cheese sundubu ramen, and Wakan herb cold noodles. The manager runs the floor attentively; you buy a ticket at the entrance. Tabelog spells the name \"Juraku\"; the kana じゅろく reads Juroku.",
    chef_bio: { chef_name: null, roles: [], origin: 'Open about a year as of September 2026 (review)', background: 'Japanese-Korean (wakan) sundubu specialist; "なんば別邸" branch name (Tabelog). A reviewer has seen it on TV recently (October 2026).', philosophy: null, specialty: 'Sundubu; sundubu ramen.',
      anecdotes: [
        { text: '"The spiciness level ranges from 1 to 4, with 2 being normal, so I chose a slightly spicier level 3… the sundubu had a rich flavor with a hint of sweetness amidst the spiciness." — June 2026.', source: R + 'B530613804/' },
        { text: '"The grilled pork Sundubu was incredibly delicious! It came with five slices of fatty grilled pork, four clams, minced meat, and plenty of tofu!" — September 2026.', source: R + 'B536209983/' },
      ],
      japanese_sources_summary: '食べログ: 和韓料理スンドゥブ専門店じゅろく なんば別邸、大阪市中央区千日前1-5-12 なんばウォーク地下街、050-5872-5498、予約可、毎日11:00〜22:00(料理L.O.21:15)、奇数月の第3水曜と1月1日休み、カード・交通系IC・iD・QR決済可、17席(カウンター9、4人テーブル2)、貸切20名まで、禁煙、チャージなし。店のおすすめは和韓特製スンドゥブ定食、なんば限定の特製韓国風スンドゥブラーメン(もちもち麺)、熟成豚トンテキ。2026年の口コミ(6〜10月): 辛さは1〜4で2が普通、甘みのある濃い味、ご飯と小鉢3品、ラーメンにはご飯100円で追加、締めにライチのシャーベット、券売機、麺は乾麺をゆでたよう、焼き豚スンドゥブ(脂ののった焼き豚5枚、あさり4つ、ひき肉、豆腐たっぷり)、もやしナムル・青菜・キムチ、和韓料理の冷麺(牛しぐれ煮、せり、昆布漬け大根、大葉、みょうが)、親切な店長、予約はすぐ取れた、注文が通らず遅れたことも、焼きチーズスンドゥブラーメン、最近テレビで見た、開店から約1年。',
      confidence: 'medium', sources: [TB, R + 'B530613804/', R + 'B536209983/', R + 'B535500471/', R + 'B535886813/', R + 'B537160420/', R + 'B538030422/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the entrance; attentive manager.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区千日前1-5-12 なんばウォーク地下街',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市中央区千日前一丁目5番12号 (go) 123m — an underground-mall address, so the street-level match is approximate; OSM no match; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530613804/', R + 'B536209983/', R + 'B538030422/'],
    price_note: 'No dish prices captured; rice with the ramen is +¥100 (October 2026).', last_checked: TODAY, items: [
      it('スンドゥブ', 'sundubu', 'Sundubu set (rice, three small sides)', '', 'Sundubu', 'ask', 'no', 'June 2026.', 'sundubu'),
      it('スンドゥブラーメン', 'sundubu rāmen', 'Sundubu ramen (Namba only)', '', 'Sundubu', 'no', 'no', 'October 2026.', 'sundubu_ramen'),
      it('', '', 'Grilled-cheese sundubu ramen', '', 'Sundubu', 'no', 'no', 'October 2026.', 'cheese'),
      it('', '', 'Grilled-pork sundubu', '', 'Sundubu', 'ask', 'no', 'September 2026.', 'yakibuta'),
      it('', '', 'Wakan herb cold noodles with beef shigureni', '', 'Noodles', 'no', 'no', 'September 2026.', 'reimen'),
      it('', '', 'Extra rice (with ramen)', '¥100', 'Sides', 'ask', 'ask', 'October 2026.', 'rice'),
    ] }, {
    cuisine: 'ご飯と小鉢3品(もやしナムル、青菜、キムチ)付きの和韓スンドゥブ定食・なんば限定のスンドゥブラーメン・焼きチーズスンドゥブラーメン・焼き豚スンドゥブ・牛しぐれ煮の和韓料理冷麺・熟成豚トンテキ・辛さ1〜4・締めにライチのシャーベット・17席',
    neighborhood: 'なんばウォーク(地下街)、千日前1-5-12。日本橋駅(堺筋線)から徒歩30秒',
    gf_detail: 'グルテンフリーではありません。スンドゥブラーメンは小麦の麺、たれの中身は不明。普通のスンドゥブ定食は要確認。',
    vegan_detail: 'ヴィーガンではありません。あさり、ひき肉、焼き豚入りのスンドゥブ、冷麺に牛しぐれ煮。',
    notes: '[韓国料理・なんばウォークの和韓スンドゥブ] 日本橋駅そば、なんばウォークの地下街にある落ち着いた17席のスンドゥブ専門店で、2026年秋で開店から約1年。やわらかい豆腐の鍋は辛さの奥に甘みのある濃い味。辛さは1〜4で2が普通、3でも食べやすいという声が多く、1はまったく辛くないそう。定食はご飯と小鉢3品付きで、最後にライチのシャーベット。なんば限定のスンドゥブラーメンは鍋に麺が入り(ご飯を100円で追加した人も)、麺は本格ラーメンというより乾麺をゆでたようという声も。ほかに、あさりとひき肉の入った焼き豚スンドゥブ、焼きチーズスンドゥブラーメン、和韓料理の冷麺。店長の気配りが行き届き、入口の券売機で食券を買います。食べログの英語名は「Juraku」ですが、かなは「じゅろく」です。',
  });
}

// ================================================================ 紀州和歌山ラーメン きぶんや 道頓堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27015793/'; const R = TB + 'dtlrvwlst/';
  const A = day(['09:00', '05:00']), B = day(['09:00', '06:00']);
  put({
    id: 'osaka_kibunya_dotonbori', name: '紀州和歌山ラーメン きぶんや 道頓堀店 (Kishu Wakayama Ramen Kibunya Dotonbori)', category: 'OMNI',
    lat: 34.669795, lng: 135.506007, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles, soy-based broth, kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu soy broth, chashu, shrimp tsukemen.',
    hours_raw: 'Mon–Thu and Sun 9:00–5:00; Fri, Sat and the day before a public holiday 9:00–6:00 (Tabelog). No cards; e-money and QR (PayPay, Alipay) accepted. You pay on the way out (September 2026). Menu prices are shown before tax, with the tax-included price in smaller print (September 2026).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sōemonchō 1-6, Kibunya Bldg 1F — Dotonbori, about 5 min from Nippombashi Stn',
    cuisine: 'Kishu Wakayama ramen ¥950 + tax, light or rich, and an "aged" version · shrimp tsukemen · seasonal Japanese-style tororo cold ramen ¥1,210 · half-portion kara-age · thin noodles · 20 seats (12 counter) · open until 5–6 am',
    website: null, gmaps: gm('紀州和歌山ラーメン きぶんや 道頓堀店'), menu_url: null,
    notes: "[Ramen · Wakayama-style ramen until dawn on Dotonbori] A Wakayama-style ramen shop by the Sōemonchō end of Dotonbori, open from 9 am until 5 am (6 am on Fridays, Saturdays and the night before a holiday), full of tourists from home and abroad. The Kishu Wakayama ramen (¥950 before tax, September 2026) is a soy-tonkotsu bowl on thin noodles. There's a light option, a rich one, and an \"aged\" ramen, which one July 2026 reviewer found just right in flavor and fat as an after-drinks bowl. Also on the menu: a shrimp-heavy tsukemen, and in September a limited Japanese-style tororo cold ramen (¥1,210) with chicken chashu and a tempura egg on chilled thin noodles. Opinions split in autumn 2026. One returning visitor found the broth weak and lukewarm, while another drank every drop. Watch the menu: the big number is before tax. You pay on the way out.",
    chef_bio: { chef_name: null, roles: [], origin: 'Dotonbori branch, in its own Kibunya Bldg (Tabelog address)', background: 'Kishu (Wakayama) ramen; Tabelog corporate-member listing.', philosophy: null, specialty: 'Wakayama-style tonkotsu shoyu ramen.',
      anecdotes: [
        { text: '"This year, since it\'s too hot, I decided to go for the \'Aged\' ramen… this time the aged ramen had just the right richness in both taste and fat! It\'s definitely designed for after drinking." — July 2026.', source: R + 'B510191456/' },
        { text: '"I tried the limited edition Japanese-style tororo cold ramen at Kibunya for JPY 1210. Be careful not to confuse the prominently displayed price before tax with the smaller price that includes tax." — September 2026.', source: R + 'B460114826/' },
      ],
      japanese_sources_summary: '食べログ: 紀州和歌山ラーメン きぶんや 道頓堀店、大阪市中央区宗右衛門町1-6 きぶんやビル1F、06-6211-8055、予約不可、月〜木・日9:00〜翌5:00、金・土・祝前日9:00〜翌6:00、カード不可、電子マネー・QR決済(PayPay、Alipay)可、20席(カウンター12、テーブル8)、禁煙。2026年の口コミ(7〜10月): 熟成ラーメンは味も脂もちょうどいい濃さで飲んだ後向き、半チャーハンはなく唐揚げのハーフ、スタッフが熱心、海老つけ麺は海老の香りとうま味が濃い、期間限定の和風とろろ冷やしラーメン1,210円(1,200円という声も)、税抜きの大きな表示と小さな税込み表示に注意、冷たい細麺(ちぢれ、ストレートの両方の記載)、とろろ、鶏チャーシュー、天ぷら玉子、みょうが、出るときに現金で支払い、紀州和歌山ラーメン950円(税抜)で値上がり、味が薄くスープがぬるかったという声、一気に飲めるほどおいしいスープという声、外国人客も多い。',
      confidence: 'medium', sources: [TB, R + 'B510191456/', R + 'B460114826/', R + 'B533348570/', R + 'B534778059/', R + 'B535300970/', R + 'B537731538/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin noodles (October 2026); the cold ramen used chilled thin straight noodles (September 2026), described by another reviewer as curly.' },
      regional_style: ['Wakayama'], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Kishu Wakayama ramen ¥950 before tax (September 2026); "aged" ramen (July 2026).',
      chashu: 'Chicken-thigh chashu on the cold ramen (September 2026).',
      notable_toppings: ['chashu', 'tororo (cold ramen)', 'tempura egg (cold ramen)'],
      gf: { status: 'no', note: 'Wheat noodles; soy-based broth.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Dotonbori\'s all-night Wakayama soy-tonkotsu: light, rich or "aged", on thin noodles.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B510191456/', '"The aged ramen had just the right richness in both taste and fat"; a lighter option also exists.'],
        oiliness: [R + 'B510191456/', '"Just the right richness in both taste and fat."'],
        clarity: [R + 'B510191456/', 'Soy-tonkotsu; clarity not described — placed below mid (inferred).'],
        tare_strength: [R + 'B535300970/', 'Mixed: "The flavor is weak, and the broth is lukewarm" (September 2026) vs. "The soup is so delicious you can drink it all at once!" (' + R + 'B537731538/, October 2026) — mid-scale.'],
        noodle_firmness: [R + 'B537731538/', '"I absolutely love the thin noodles"; firmness not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B510191456/', 'Not described as pungent — placed low-mid (inferred).'],
      },
      confidence: 'low', sources: [R + 'B510191456/', R + 'B535300970/', R + 'B537731538/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Many foreign visitors (October 2026); pay on the way out.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町1-6 きぶんやビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町1番6号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535300970/', R + 'B460114826/', R + 'B533348570/'],
    price_note: 'Prices from September 2026 reviews; the ramen price is before tax.', last_checked: TODAY, items: [
      it('紀州和歌山ラーメン', 'Kishū Wakayama rāmen', 'Kishu Wakayama ramen', '¥950 + tax', 'Ramen', 'no', 'no', 'September 2026.', 'wakayama'),
      it('', '', '"Aged" ramen', '', 'Ramen', 'no', 'no', 'July 2026.', 'jukusei'),
      it('', '', 'Shrimp tsukemen', '', 'Tsukemen', 'no', 'no', 'August 2026.', 'ebi_tsuke'),
      it('', '', 'Japanese-style tororo cold ramen (limited)', '¥1,210', 'Seasonal', 'no', 'no', 'September 2026.', 'tororo'),
      it('', '', 'Kara-age (half portion)', '', 'Sides', 'no', 'no', 'July 2026.', 'karaage'),
    ] }, {
    cuisine: '紀州和歌山ラーメン950円(税抜)、あっさりとこってり、熟成も・海老つけ麺・期間限定の和風とろろ冷やしラーメン1,210円・唐揚げハーフ・細麺・20席(カウンター12)・朝5〜6時まで',
    neighborhood: '宗右衛門町1-6 きぶんやビル1F。道頓堀、日本橋駅から徒歩約5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースのスープ、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。とんこつ醤油スープ、チャーシュー、海老つけ麺。',
    notes: '[ラーメン・道頓堀で朝までの和歌山ラーメン] 道頓堀の宗右衛門町側にある和歌山ラーメンの店で、朝9時から翌朝5時(金・土・祝前日は6時)まで営業し、国内外の観光客でにぎわいます。紀州和歌山ラーメン(税抜950円、2026年9月)は細麺のとんこつ醤油。あっさり、こってり、それに「熟成」があり、2026年7月の口コミでは味も脂もちょうどいい飲んだ後の一杯。ほかに海老の濃いつけ麺、9月は期間限定の和風とろろ冷やしラーメン(1,210円)で、冷たい細麺に鶏チャーシューと天ぷら玉子。2026年秋は評価が分かれ、スープが薄くぬるかったという再訪の人も、一気に飲み干したという人も。メニューの大きな数字は税抜きなので注意。支払いは帰りに。',
  });
}

// ================================================================ すするか、すすらんか。 心斎橋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27140762/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:00', '15:00'], ['18:00', '23:00']), B = day(['11:00', '15:00'], ['18:00', '04:00']);
  put({
    id: 'osaka_susuruka_susuranka_shinsaibashi', name: 'すするか、すすらんか。 心斎橋 (Susuru ka, Susuran ka. Shinsaibashi)', category: 'OMNI',
    lat: 34.672418, lng: 135.503457, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles under the mapo tofu; mazesoba sauce is soy-based.',
    vegan_status: 'limited', vegan_label: 'Limited vegan',
    vegan_detail: 'The shop\'s own Tabelog text says it offers vegetarian and halal menu options ("please feel free to ask our staff"), and Tabelog tags it "Offering vegan menu". No review describes a vegetarian or vegan bowl, so ask what is in the mapo sauce and broth.',
    hours_raw: 'Mon–Thu and the day before or after a public holiday 11:00–15:00 (L.O. 14:30) and 18:00–23:00 (L.O. 22:30); Fri–Sun 11:00–15:00 and 18:00–4:00 (Tabelog). Cards, e-money and QR accepted. No cover charge.',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: B }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-15-22, Daiichi KS Bldg B1F — about 2 min from Shinsaibashi and Nagahoribashi Stns',
    cuisine: 'Mapo tofu ramen, with made-to-order mapo over chewy medium-thick noodles · spicy noodle soup · mapo rice bowl · yurinchi · monthly limited bowls (October 2026: seafood and meat-miso mazesoba ¥1,300; July 2026: explosive-garlic mapo ramen ¥1,500; summer: chilled basil mapo ramen) · saba-dashi rice ¥300 · vegetarian and halal options on request · 26 seats',
    website: 'http://susuruka-susuranka.com/', gmaps: gm('すするか、すすらんか。 心斎橋'), menu_url: null,
    notes: "[Ramen · mapo tofu ramen under Higashi-Shinsaibashi] The Shinsaibashi branch of a mapo-tofu-ramen specialist from Naramachi, Nara, in a calm, chic basement with a long counter, tables and a projector. It is open until 4 am Friday to Sunday. The signature is mapo tofu ladled hot over the noodles. The Nara shop describes made-to-order mapo on smooth, chewy medium-thick noodles, and one reviewer ended up sweating and ordering rice for the leftover sauce. A limited bowl changes through the year. October 2026 brought a seafood and meat-miso mazesoba (¥1,300) with egg yolk, fish powder, chives and bean sprouts on thick, chewy noodles. Summer had a chilled basil mapo ramen. Finish with saba-dashi rice (¥300). The shop says it offers vegetarian and halal options; ask the staff. One October 2026 visitor found it empty at Friday lunch and had to call for service.",
    chef_bio: { chef_name: null, roles: [], origin: 'Main shop: Naramachi, Nara (official site); the Shinsaibashi ramen uses mapo tofu from the main shop (August 2026 review)', background: 'Tabelog listing: "Celebrating 6 Years of Mapo Tofu and Noodles Crafted by Master Chefs!" The official site lists only the Naramachi main shop.', philosophy: 'The shop says it wants the dish to contribute to society by offering vegetarian and halal menu options (Tabelog).', specialty: 'Mapo tofu ramen.',
      anecdotes: [
        { text: '"After the first bite, the umami flavor hit me hard, and I hurriedly ordered extra rice! I was able to savor every bit of the mapo tofu." — August 2025, spicy mapo tofu ramen.', source: R + 'B512153497/' },
        { text: '"The noodles are thick and chewy, perfectly complementing the ingredients and special sauce." — October 2026, seafood meat-miso mazesoba.', source: R + 'B531346945/' },
      ],
      japanese_sources_summary: '公式サイト: すするか、すすらんか。は麻婆豆腐ラーメン専門店。オーダーメイドで調理する麻婆豆腐をツルツルモチモチの中太麺にかける、いわゆる麻婆麺とは少し違う。ならまち本店(奈良市南城戸町28-34、11:00〜15:00・18:00〜21:00、火曜定休)。食べログ: すするか、すすらんか。心斎橋、大阪市中央区東心斎橋1-15-22 第一KSビルB1F、06-7634-7598、予約不可、月〜木・祝前日・祝後日11:00〜15:00(L.O.14:30)・18:00〜23:00(L.O.22:30)、金〜日11:00〜15:00・18:00〜翌4:00、カード・電子マネー・QR決済可、26席、禁煙、車いす可、ベジタリアン・ハラールメニューあり(スタッフに相談を)。2026年の口コミ(7〜10月): 10月限定の豪快！魚介肉味噌まぜそば1,300円(肉味噌、卵黄、ニラ、もやし、魚粉、フライドオニオン、刻みのり、にんにく別添え、太いもちもち麺)、さば出汁ご飯300円、7月限定の爆にんにく麻婆豆腐ラーメン1,500円、夏限定の冷やしバジル麻婆豆腐ラーメン、麻婆豆腐はならまち本店の麻婆、麻婆丼、油淋鶏、照り焼き丼、落ち着いたカウンター、深夜の締めに、金曜の昼に空いていて呼ばないと来なかったという声。',
      confidence: 'medium', sources: [TB, 'http://susuruka-susuranka.com/', R + 'B531965440/', R + 'B531346945/', R + 'B495446856/', R + 'B538069428/', R + 'B512153497/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['other'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Official site: smooth, chewy medium-thick noodles (中太麺). The October 2026 mazesoba: thick, chewy, medium-thick noodles (reviews).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Mapo tofu ramen (official site; reviews).',
      chashu: null,
      notable_toppings: ['mapo tofu', 'egg yolk (limited bowls)', 'garlic chives', 'fish powder (mazesoba)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'ask', note: 'The shop says vegetarian options exist; the regular mapo is not described as vegetarian.' },
      pantheon: 'Nara\'s mapo tofu ramen in a Shinsaibashi basement: made-to-order mapo over chewy noodles, until 4 am at weekends.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B512153497/', '"After the first bite, the umami flavor hit me hard."'],
        oiliness: [R + 'B512153497/', 'Oil not described — mid-scale (inferred).'],
        clarity: ['http://susuruka-susuranka.com/', 'Thick mapo tofu poured over the noodles — opaque (inferred).'],
        tare_strength: [R + 'B512153497/', 'The leftover mapo sauce was enough to order rice for — placed high (inferred).'],
        noodle_firmness: ['http://susuruka-susuranka.com/', '"ツルツルモチモチの中太麺" (smooth, chewy medium-thick noodles).'],
        aroma_punch: [R + 'B512153497/', 'A spicy mapo that had the reviewer sweating — placed high.'],
      },
      confidence: 'low', sources: ['http://susuruka-susuranka.com/', R + 'B512153497/', R + 'B531346945/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask the staff for vegetarian or halal options.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-15-22 第一KSビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目15番22号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: ['http://susuruka-susuranka.com/', R + 'B495446856/', R + 'B531965440/'],
    price_note: 'Prices from July–October 2026 reviews; the regular mapo tofu ramen price was not captured.', last_checked: TODAY, items: [
      it('麻婆豆腐ラーメン', 'mābo dōfu rāmen', 'Mapo tofu ramen', '', 'Ramen', 'no', 'ask', 'Official site; reviews.', 'mapo'),
      it('豪快！魚介肉味噌まぜそば', 'gōkai! gyokai niku-miso mazesoba', 'Hearty! seafood and meat-miso mazesoba (October limited)', '¥1,300', 'Limited', 'no', 'no', 'October 2026.', 'maze_oct'),
      it('', '', 'Explosive-garlic mapo tofu ramen (limited)', '¥1,500', 'Limited', 'no', 'ask', 'July 2026.', 'garlic'),
      it('', '', 'Chilled basil mapo tofu ramen (summer)', '', 'Limited', 'no', 'ask', 'August 2026.', 'basil'),
      it('', '', 'Saba-dashi rice', '¥300', 'Rice', 'ask', 'no', 'October 2026.', 'saba_rice'),
      it('', '', 'Mapo tofu rice bowl', '', 'Rice', 'ask', 'ask', 'October 2026.', 'mapo_don'),
    ] }, {
    cuisine: '注文ごとに作る麻婆豆腐をもちもちの中太麺にかける麻婆豆腐ラーメン・辛い麺・麻婆丼・油淋鶏・月替わりの限定(2026年10月は豪快！魚介肉味噌まぜそば1,300円、7月は爆にんにく麻婆ラーメン1,500円、夏は冷やしバジル麻婆ラーメン)・さば出汁ご飯300円・ベジタリアンとハラールは要相談・26席',
    neighborhood: '東心斎橋1-15-22 第一KSビルB1F。心斎橋駅・長堀橋駅から徒歩約2分',
    gf_detail: 'グルテンフリーではありません。麻婆豆腐の下は小麦の麺、まぜそばのたれは醤油ベース。',
    vegan_detail: '店の食べログの説明ではベジタリアンとハラールのメニューがあり(スタッフにお気軽に)、食べログには「ヴィーガンメニューあり」の表示も。ただ口コミにベジタリアンやヴィーガンの一杯の記述はないので、麻婆やスープの中身を確認して。',
    notes: '[ラーメン・東心斎橋の地下の麻婆豆腐ラーメン] 奈良・ならまち発の麻婆豆腐ラーメン専門店の心斎橋店で、落ち着いたおしゃれな地下に長いカウンターとテーブル、プロジェクターも。金〜日は朝4時まで。看板は麺の上に熱々の麻婆豆腐をかけた一杯。奈良の本店によると、注文ごとに作る麻婆をツルツルモチモチの中太麺に。汗をかきながら、残ったたれのためにご飯を頼んだという口コミも。限定の一杯は時期で替わり、2026年10月は卵黄、魚粉、ニラ、もやしをのせた魚介肉味噌まぜそば(1,300円)を太いもちもち麺で。夏は冷やしバジル麻婆ラーメン。締めはさば出汁ご飯(300円)。店はベジタリアンとハラールにも対応するとしているので、スタッフに相談を。2026年10月の金曜の昼は空いていて、呼ばないと来なかったという声も。',
  });
}

save();
