// Osaka sweep (2-mile circle around Dotonbori), batch 135 — ramen phase (all OMNI).
//   + 麺屋 つばき 寺田町店 (Taiwan mazesoba with spice and garlic to order, rice to finish; Teradacho)
//   + あかよろし (light Tosa Hachikin chicken chuka soba, garlicky house soba, obanzai and drinks at night; one-person; Tsuruhashi) — mom_and_pop
//   + ストライク軒 中之島フェスティバルプラザ店 ("Straight" shoyu and Sapporo-style "Curve" miso; Festival Tower West B1F)
//   + 鶏白湯らーめん 自由が丘蔭山 あべのQ'sモール店 (chicken paitan shio soba with lemon, lunch sets with mapo tofu; Q's Mall 4F)
//   - skipped six chain branches already represented in data (see skip lines).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, skip, save } = openCitySweep('osaka', TODAY, 135);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27122846', 'chain branch: 麺屋 たにぐち 難波店 (osaka_menya_taniguchi_namba) already in data');
skip('27056415', 'chain branch: 天下一品 already in data (osaka_tenka_ippin_namba_wins, osaka_tenka_ippin_shinsaibashi)');
skip('27120620', 'chain branch: らーめん亀王 already in data (osaka_ramen_kio_dotonbori)');
skip('27002792', 'chain branch: 古潭 already in data (osaka_kotan_namba_walk, osaka_ramen_kotan_namba_city)');
skip('27114198', 'second shop of 麺ファクトリー ジョーズ (osaka_men_factory_jaws_uehonmachinishi) already in data');
skip('27054457', 'national chain branch (餃子の王将)');

// ================================================================ 麺屋 つばき 寺田町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27101568/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://menyatsubaki-teradacho.jp/';
  const D = day(['11:00', '14:00'], ['18:00', '21:00']);
  put({
    id: 'osaka_menya_tsubaki_teradacho', name: '麺屋 つばき 寺田町店 (Menya Tsubaki Teradacho)', category: 'OMNI',
    lat: 34.650239, lng: 135.52147, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wide wheat noodles; soy-based sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: minced meat; egg yolk; fish powder.',
    hours_raw: 'Mon, Tue, Thu, Fri, Sat 11:00–14:00 and 18:00–21:00; Sun and public holidays 11:00–14:00; closed Wed (Tabelog). Buy a ticket (cash only), then tell staff the spice level and whether you want garlic (October 2026).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: day(['11:00', '14:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Daido 3-1-7 (Tennoji-ku) — 5 min from JR Teradacho Stn',
    cuisine: 'Taiwan mazesoba · Taiwan mazesoba ¥870 (2025), ¥1,100 with oimeshi (rice to finish) in 2026: chewy, smooth wide noodles, spicy minced meat, green onion, egg yolk, fish powder and shredded nori, mixed well; noodles 150 or 200 g, large +¥200; spice mild, medium or spicy; garlic or none · vinegar on the table · ramen with chashu · 11 counter seats and three tables',
    website: OWN, gmaps: gm('麺屋 つばき 寺田町店'), menu_url: null,
    notes: "[Ramen · Taiwan mazesoba made to order in Teradacho] A high-ceilinged, roomy shop five minutes from Teradacho, open since 2017, devoted to Taiwan mazesoba. Buy a ticket, then choose noodle weight (150 or 200 g), spice (mild, medium or spicy) and garlic. The bowl is chewy, wide noodles under spicy minced meat, green onion, egg yolk, fish powder and nori; mix hard, add vinegar halfway to brighten it, then put rice into what's left (¥1,100 with rice). Even the spicy level is manageable, though medium can still make you sweat. A ramen with chashu is on the menu too. Cash only. Closed Wednesdays; Sunday is lunch only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 3 November 2017 (Tabelog)', background: 'Taiwan mazesoba shop (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Taiwan mazesoba.',
      anecdotes: [
        { text: '"You can choose the amount of noodles (150g or 200g), the spice level (three options), and whether or not to add garlic. The toppings include ground meat, green onions, egg yolk, fish powder, and shredded nori…" — November 2025.', source: R + 'B517175317/' },
        { text: '"The restaurant\'s signature dish, Taiwan Mazesoba, features chewy and smooth wide noodles that pair perfectly with a spicy sauce that\'s hot enough to make you sweat even at the medium level." — October 2026, Taiwan mazesoba with rice ¥1,100.', source: R + 'B538028958/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 つばき 寺田町店、大阪市天王寺区大道3-1-7、JR寺田町駅から徒歩5分、天王寺駅から徒歩10分、月・火・木・金・土 11:00〜14:00・18:00〜21:00、日・祝 11:00〜14:00、水休み、カード・電子マネー・QR不可、21席 (カウンターとテーブル3卓)、2017年11月3日開店、公式サイトあり。口コミ(2025年11月〜2026年10月): 台湾まぜそば、食券制 (現金のみ)、麺は150gか200g、大盛り200円、辛さは3段階、にんにくの有無、ひき肉、ねぎ、卵黄、魚粉、刻み海苔、よく混ぜる、途中で酢、締めの追い飯、2025年は870円、2026年は追い飯付き1,100円、もちもちでなめらかな太い麺、中辛でも汗をかく、天井の高い広い店内、チャーシューのラーメンも。',
      confidence: 'medium', sources: [TB, OWN, R + 'B517175317/', R + 'B518334389/', R + 'B519050137/', R + 'B525903386/', R + 'B535960865/', R + 'B538028958/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: ['chili'], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'flat', hydration: null, handmade: false, notes: 'Chewy, smooth wide noodles; 150 or 200 g (2025–2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba'],
      signature_bowl: 'Taiwan mazesoba with rice to finish, ¥1,100 (October 2026).',
      chashu: null,
      notable_toppings: ['spicy minced meat', 'egg yolk', 'fish powder', 'nori', 'garlic', 'rice to finish'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Minced meat.' },
      pantheon: 'Teradacho\'s made-to-order Taiwan mazesoba, finished with rice.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B538028958/', 'Minced meat, egg yolk and fish powder mixed into the noodles — placed high.'],
        oiliness: [R + 'B518334389/', '"The spices were present, they were at a manageable level" — mid-scale.'],
        clarity: [R + 'B517175317/', 'A soupless mazesoba — bottom of scale.'],
        tare_strength: [R + 'B538028958/', '"A spicy sauce that\'s hot enough to make you sweat even at the medium level" — placed high.'],
        noodle_firmness: [R + 'B518334389/', '"The noodles were chewy, perfectly coated with the sauce" — placed high.'],
        aroma_punch: [R + 'B517175317/', 'Garlic and spice to order; fish powder on top — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B517175317/', R + 'B518334389/', R + 'B538028958/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; staff ask spice and garlic (October 2026); cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区大道3-1-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区大道三丁目1番7号 (go) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B518334389/', R + 'B538028958/'],
    price_note: 'Prices from December 2025 and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Taiwan mazesoba with rice to finish', '¥1,100', 'Mazesoba', 'no', 'no', 'October 2026.', 'taiwan_maze'),
      it('', '', 'Large noodles', '+¥200', 'Toppings', 'no', 'no', 'October 2026.', 'large'),
      it('', '', 'Ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'ramen'),
    ] }, {
    cuisine: '台湾まぜそば・台湾まぜそば2025年870円、2026年は追い飯付き1,100円: もちもちでなめらかな太い麺、辛いひき肉、ねぎ、卵黄、魚粉、刻み海苔をよく混ぜる、麺は150gか200g、大盛り+200円、辛さは控えめ・中辛・辛口、にんにくの有無・卓上の酢・チャーシューのラーメン・カウンター11席とテーブル3卓',
    neighborhood: '天王寺区大道3-1-7。JR寺田町駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油ベースのたれ。',
    vegan_detail: 'ヴィーガンではありません。ひき肉、卵黄、魚粉。',
    notes: '[ラーメン・寺田町、好みに合わせる台湾まぜそば] 寺田町から5分、天井の高い広い店で、2017年開店、台湾まぜそばが主役。食券を買い、麺の量 (150gか200g)、辛さ (控えめ・中辛・辛口)、にんにくを選ぶ。もちもちの太麺に辛いひき肉、ねぎ、卵黄、魚粉、海苔をよく混ぜ、途中で酢を足し、残りにご飯を入れて締める (追い飯付き1,100円)。辛口でも食べやすいが、中辛でも汗をかくという声も。チャーシューのラーメンも。現金のみ。水曜休み、日曜は昼のみ。',
  });
}

// ================================================================ あかよろし
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27132792/'; const R = TB + 'dtlrvwlst/';
  const MT = day(['11:30', '14:00'], ['17:00', '23:30']); const FS = day(['17:00', '02:00']); const SU = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_akayoroshi_tsuruhashi', name: 'あかよろし (Akayoroshi)', category: 'OMNI',
    lat: 34.665769, lng: 135.531938, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare; sesame and mustard sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth; pork chashu; horumon; egg.',
    hours_raw: 'Mon–Tue 11:30–14:00 and 17:00–23:30; Fri–Sat 17:00–02:00; Sun 11:30–14:00 and 17:00–23:00; closed Wed–Thu; hours may change (Tabelog). Izakaya with obanzai in the evening (2026). Cards, IC cards and QR accepted (Tabelog).',
    hours: { 0: MT, 1: MT, 4: FS, 5: FS, 6: SU }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Obase 3-17-4 (Higashinari-ku), down a side alley — 3 min from Tsuruhashi Stn',
    cuisine: 'Chuka soba and obanzai · Ganso Chuka Soba ¥890: clear, light Tosa Hachikin chicken soup with soy, very little oil, thin smooth noodles, wood ear, green onion, menma, cabbage, soft egg, tender chashu · Akayoroshi soba ¥1,200: lots of vegetables and strong garlic, rice to finish like risotto · tomato ramen, sesame ramen · horumon ramen with garlic chives, egg and ginger · summer hiyashi chuka ¥980, 20 a day: sesame sauce with mustard, diced chashu, cucumber, shredded egg, pickled ginger · evening: obanzai on large plates, oden, sake; obanzai, beer and ramen set · fried rice · counter and tables',
    website: null, gmaps: gm('あかよろし'), menu_url: null,
    notes: "[Ramen · light chicken chuka soba by day, obanzai and drinks by night, Tsuruhashi] A small, welcoming spot down a side alley three minutes from Tsuruhashi, open since 2022 and run single-handed on one February visit, cooking ramen and stirring fried rice at once. The Ganso Chuka Soba (¥890) is a surprisingly clear, low-oil soy broth of Tosa Hachikin chicken that clings to thin, smooth noodles; the Akayoroshi soba (¥1,200) goes the other way, heavy on garlic and vegetables, finished with rice like a risotto. Tomato, sesame and horumon ramen round it out. At night it's an izakaya with obanzai lined up on the counter and oden, and the ramen makes a gentle finish. Open until 2:00 on Fridays and Saturdays. Closed Wednesdays and Thursdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 October 2022 (Tabelog; third anniversary October 2025 review).', background: 'Ramen and obanzai izakaya, run by one person (February 2026 review).', philosophy: 'Chuka soba of Tosa Hachikin chicken from Kochi (December 2025 review).', specialty: 'Light chicken chuka soba; obanzai.',
      anecdotes: [
        { text: '"It had a refreshing and clear broth unlike anything I had experienced before, while still allowing me to savor the rich flavor of chicken broth. I was amazed at how little oil there was… [it] clung beautifully to the thin noodles…" — February 2026, chuka soba, large.', source: R + 'B522382170/' },
        { text: '"The broth is made from Tosa Hachikin chicken, a local specialty from Kochi Prefecture, and has a rich soy sauce flavor. This gentle yet deep broth pairs perfectly with the medium-thin noodles…" — December 2025, Ganso Chuka Soba ¥890.', source: R + 'B478630020/' },
      ],
      japanese_sources_summary: '食べログ: あかよろし、大阪市東成区東小橋3-17-4、鶴橋駅から徒歩3分、月・火 11:30〜14:00・17:00〜23:30、金・土 17:00〜翌2:00、日 11:30〜14:00・17:00〜23:00、水・木休み、カード・交通系IC・QR可、2022年10月28日開店。口コミ(2025年10月〜2026年9月): 路地の小さな店、一人で営業、Ganso Chuka Soba 890円 (Tosa Hachikin の鶏の澄んだ醤油スープ、油が少ない、細くなめらかな麺、きくらげ、ねぎ、メンマ、キャベツ、半熟卵、とろけるチャーシュー)、Akayoroshi soba 1,200円 (野菜たっぷり、にんにくが強い、締めのご飯でリゾット風)、トマトラーメン、ごまラーメン、ニラ・卵・生姜のホルモンラーメン、夏の冷やし中華980円 (1日20食、ごまだれとからし、角切りチャーシュー、きゅうり、錦糸卵、紅しょうが)、夜はおばんざいの大皿、おでん、日本酒、おばんざい2品とビールとラーメンのセット、炒飯、カウンターとテーブル。',
      confidence: 'medium', sources: [TB, R + 'B478630020/', R + 'B522382170/', R + 'B528998608/', R + 'B530110314/', R + 'B533648852/', R + 'B535142286/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin, smooth noodles (2025–2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Ganso Chuka Soba, ¥890 (December 2025).',
      chashu: 'Melt-in-the-mouth pork chashu (December 2025).',
      notable_toppings: ['wood ear', 'menma', 'cabbage', 'soft-boiled egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Tsuruhashi\'s clear Tosa Hachikin chicken chuka soba from a one-person izakaya.',
      profile: { richness: 2, oiliness: 1, clarity: 5, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B533648852/', '"The ramen was light and perfect after a night of drinking" — placed low.'],
        oiliness: [R + 'B522382170/', '"I was amazed at how little oil there was" — bottom of scale.'],
        clarity: [R + 'B522382170/', '"The transparent soup, free from any chicken odor" — top of scale.'],
        tare_strength: [R + 'B478630020/', '"A rich soy sauce flavor… gentle yet deep" — mid-scale.'],
        noodle_firmness: [R + 'B522382170/', '"The texture and smoothness of the noodles were unlike anything" — mid-scale.'],
        aroma_punch: [R + 'B478630020/', '"The taste wraps around you gently" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B522382170/', R + 'B478630020/', R + 'B533648852/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Cozy, welcoming counter; easy late-night stop (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市東成区東小橋3-17-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東成区東小橋三丁目17番4号 (go) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B478630020/', R + 'B535142286/', R + 'B530110314/'],
    price_note: 'Prices from December 2025–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ganso Chuka Soba', '¥890', 'Ramen', 'no', 'no', 'December 2025.', 'ganso'),
      it('', '', 'Akayoroshi soba (garlic and vegetables)', '¥1,200', 'Ramen', 'no', 'no', 'September 2026.', 'akayoroshi'),
      it('', '', 'Horumon ramen', '', 'Ramen', 'no', 'no', 'June 2026.', 'horumon'),
      it('', '', 'Tomato ramen', '', 'Ramen', 'no', 'no', 'May 2026.', 'tomato'),
      it('', '', 'Hiyashi chuka (summer, 20 a day)', '¥980', 'Limited', 'no', 'no', 'August 2026.', 'hiyashi'),
      it('', '', 'Obanzai, beer and ramen set', '', 'Sets', 'no', 'no', 'August 2026.', 'set'),
    ] }, {
    cuisine: '中華そばとおばんざい・Ganso Chuka Soba 890円: Tosa Hachikin の鶏の澄んだあっさり醤油スープ、油はごく少なく、細くなめらかな麺、きくらげ、ねぎ、メンマ、キャベツ、半熟卵、柔らかいチャーシュー・Akayoroshi soba 1,200円: 野菜たっぷりでにんにくが強く、締めのご飯でリゾット風・トマトラーメン、ごまラーメン・ニラと卵と生姜のホルモンラーメン・夏の冷やし中華980円 (1日20食): ごまだれにからし、角切りチャーシュー、きゅうり、錦糸卵、紅しょうが・夜: 大皿のおばんざい、おでん、日本酒、おばんざいとビールとラーメンのセット・炒飯・カウンターとテーブル',
    neighborhood: '東成区東小橋3-17-4、路地の中。鶴橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、ごまとからしのたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏のスープ、豚のチャーシュー、ホルモン、卵。',
    notes: '[ラーメン・鶴橋近く、昼はあっさり鶏の中華そば、夜はおばんざいと酒] 鶴橋から3分、路地を入った小さく温かな店で、2022年開店、2月は一人で切り盛りしていて、ラーメンを作りながら中華鍋で炒飯も振る。Ganso Chuka Soba (890円) は驚くほど澄んで油の少ない Tosa Hachikin の鶏の醤油スープが細くなめらかな麺にからむ。Akayoroshi soba (1,200円) は逆に、にんにくと野菜たっぷりで、最後はご飯を入れてリゾット風に。トマト、ごま、ホルモンのラーメンも。夜はおばんざいがカウンターに並ぶ居酒屋で、おでんも、締めのラーメンは優しい。金・土は深夜2時まで。水・木曜休み。',
  });
}

// ================================================================ ストライク軒 中之島フェスティバルプラザ店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27149930/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_strike_ken_nakanoshima', name: 'ストライク軒 中之島フェスティバルプラザ店 (Strike Ken Nakanoshima Festival Plaza)', category: 'OMNI',
    lat: 34.69345, lng: 135.495718, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat and egg noodles; shoyu and miso tare; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat broth; chashu; egg noodles; egg.',
    hours_raw: 'Daily 11:00–21:00; hours may change (Tabelog). LINE coupons accepted (March 2026). Cards, e-money and PayPay accepted (Tabelog).',
    hours: ALL(day(['11:00', '21:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nakanoshima 3-2-4, Nakanoshima Festival Tower West B1F (Kita-ku) — 106 m from Watanabebashi Stn',
    cuisine: 'Shoyu and miso ramen · Nakanoshima Straight: rich but not greasy shoyu, medium-thick straight noodles with a wheat aroma, large chashu, small menma; negi version · Nakanoshima Curve: Sapporo-style miso ramen with egg noodles and seasoning blended in Sapporo, a little richer · Kamisori Drop: warm chilled noodles with a special salt sauce, egg and a mountain of green onion · garlic topping ¥80 · kara-age and kara-age rice set · highball set',
    website: null, gmaps: gm('ストライク軒 中之島フェスティバルプラザ店'), menu_url: null,
    notes: "[Ramen · \"Straight\" shoyu and Sapporo-style \"Curve\" miso in Nakanoshima] A clean, busy basement branch in Festival Tower West, opened in June 2025 by a popular ramen shop from Tenjinbashi-suji 6-chome. Two bowls frame the menu: the Nakanoshima Straight, a rich but not greasy shoyu on medium-thick straight noodles with a big slice of chashu, and the Nakanoshima Curve, a miso ramen on curly egg noodles that since a recent update tastes close to Sapporo, with seasoning blended there. The Kamisori Drop, a warm-chilled noodle bowl with salt sauce, egg and heaps of green onion, is the sleeper. Add kara-age or a highball set. One diner found the shoyu's noodles too heavy for the soup. Cards and PayPay accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 June 2025 (Tabelog); a branch of a popular ramen shop in Tenjinbashi-suji 6-chome (June 2025 review).', background: 'Ramen shop (Tabelog; 2025–2026 reviews).', philosophy: 'Miso seasoning blended in Sapporo (September 2026 review).', specialty: 'Shoyu "Straight" and miso "Curve" ramen.',
      anecdotes: [
        { text: '"After the renovation, the Miso Ramen has become closer to the authentic Sapporo style… The menu mentioned that the seasoning was blended in Sapporo. The noodles are egg noodles too!" — September–October 2026, Nakanoshima Curve.', source: R + 'B511409262/' },
        { text: '"The noodles were medium-thick and straight, with a nice chewiness. The broth was rich and had a strong flavor. The chashu was large and satisfying." — April 2026, shoyu ramen.', source: R + 'B509027745/' },
      ],
      japanese_sources_summary: '食べログ: ストライク軒 中之島フェスティバルプラザ店、大阪市北区中之島3-2-4 中之島フェスティバルタワーウエスト B1F、渡辺橋から106m、毎日11:00〜21:00、カード・電子マネー・PayPay可、2025年6月16日開店。口コミ(2025年6月〜2026年10月): 天神橋筋六丁目の人気店の新店、Nakanoshima Straight (醤油、中太のストレート麺、小麦の香り、大きなチャーシュー、細いメンマ、ねぎ入りも)、Nakanoshima Curve (札幌で配合したたれの札幌風味噌ラーメン、卵麺、ストレートより少し濃い)、Kamisori Drop (特製の塩だれ、卵、山盛りのねぎの温かい冷やし中華風)、にんにく80円、唐揚げと唐揚げご飯のセット、ハイボールのセット、LINE クーポン、清潔な店内、丁寧な接客、麺とスープが合わないという声。',
      confidence: 'medium', sources: [TB, R + 'B509027745/', R + 'B511409262/', R + 'B535376651/', R + 'B535671750/', R + 'B536213958/', R + 'B536226854/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu', 'miso'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thick straight noodles in the shoyu; egg noodles in the miso (2025–2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Nakanoshima Straight (shoyu) and Nakanoshima Curve (miso) (2026).',
      chashu: 'Large, tender chashu (2025–2026).',
      notable_toppings: ['green onion', 'menma', 'garlic', 'egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat broth.' },
      pantheon: 'Nakanoshima\'s twin bowls: a rich straight shoyu and a Sapporo-leaning curly miso.',
      profile: { richness: 4, oiliness: 2, clarity: 3, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B509027745/', '"The broth was rich and had a strong flavor" — placed high.'],
        oiliness: [R + 'B535376651/', '"The broth was not greasy" — placed low.'],
        clarity: [R + 'B535671750/', '"The Straight had a light flavor"; the Curve "a bit richer" — mid-scale.'],
        tare_strength: [R + 'B509027745/', '"A strong flavor" — placed high.'],
        noodle_firmness: [R + 'B509027745/', '"Medium-thick and straight, with a nice chewiness" — placed high.'],
        aroma_punch: [R + 'B509027745/', '"The noodles have a wonderful wheat aroma" (June 2025) — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B509027745/', R + 'B511409262/', R + 'B535671750/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Clean shop, attentive service (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区中之島3-2-4 中之島フェスティバルタワーウエスト B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区中之島三丁目2番4号 (go) 52m (large tower); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B509027745/', R + 'B511409262/', R + 'B536213958/'],
    price_note: 'Few prices in the reviews; JPY 1,000–1,999 average (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Nakanoshima Straight (shoyu ramen)', '', 'Ramen', 'no', 'no', 'September 2026.', 'straight'),
      it('', '', 'Nakanoshima Curve (miso ramen)', '', 'Ramen', 'no', 'no', 'October 2026.', 'curve'),
      it('', '', 'Kamisori Drop (warm chilled noodles)', '', 'Ramen', 'no', 'no', 'September 2026.', 'kamisori'),
      it('', '', 'Garlic topping', '¥80', 'Toppings', 'ask', 'ask', 'August 2025.', 'garlic'),
      it('', '', 'Kara-age rice set', '', 'Sets', 'no', 'no', 'June 2025.', 'karaage_set'),
    ] }, {
    cuisine: '醤油と味噌のラーメン・Nakanoshima Straight: 濃いが脂っこくない醤油、小麦の香る中太のストレート麺、大きなチャーシュー、細いメンマ、ねぎ入りも・Nakanoshima Curve: 札幌で配合したたれの札幌風味噌ラーメン、卵麺、少し濃いめ・Kamisori Drop: 特製の塩だれ、卵、山盛りのねぎの温かい冷やし麺・にんにく80円・唐揚げと唐揚げご飯のセット・ハイボールのセット',
    neighborhood: '北区中之島3-2-4 中之島フェスティバルタワーウエスト B1F。渡辺橋駅から106m',
    gf_detail: 'グルテンフリーではありません。小麦と卵の麺、醤油と味噌のたれ、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。肉のスープ、チャーシュー、卵麺、卵。',
    notes: '[ラーメン・中之島、「Straight」の醤油と札幌風「Curve」の味噌] フェスティバルタワーウエストの地下にある清潔でにぎわう店で、天神橋筋六丁目の人気ラーメン店が2025年6月に出した支店。軸は2杯: 濃いが脂っこくない醤油に中太のストレート麺と大きなチャーシューの Nakanoshima Straight と、ちぢれた卵麺の味噌ラーメン Nakanoshima Curve で、最近の改良で札幌の味に近づき、たれは札幌で配合しているという。塩だれ、卵、山盛りのねぎの温かい冷やし麺 Kamisori Drop は隠れた一杯。唐揚げやハイボールのセットも。醤油の麺とスープが合わないという声も。カード、PayPay 可。',
  });
}

// ================================================================ 鶏白湯らーめん 自由が丘蔭山 あべのQ'sモール店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27098398/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.kageyamarou.com/';
  put({
    id: 'osaka_jiyugaoka_kageyama_abeno_qs_mall', name: '鶏白湯らーめん 自由が丘蔭山 あべのＱ\'sモール店 (Toripaitan Ramen Jiyugaoka Kageyama Abeno Q\'s Mall)', category: 'OMNI',
    lat: 34.645334, lng: 135.511442, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shio tare; wontons; mapo tofu sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan; chicken chashu; wontons; egg.',
    hours_raw: 'Daily 11:00–23:00; closing days follow Abeno Q\'s Mall (Tabelog). Lunch sets until 17:00 (July 2026). Lines from about noon on holidays (September 2026). Cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Abenosuji 1-6-1, Abeno Q\'s Mall 4F (Abeno-ku) — 2 min from Tennoji Stn exit 12',
    cuisine: 'Chicken paitan ramen · toripaitan shio soba: rich, creamy but light chicken paitan on medium noodles, with lemon to squeeze in halfway and yuzu at the bottom · special version: vegetables, wontons, soft-boiled egg, chicken chashu, dried chili, leafy greens, onion chips · rice into the last of the soup · lunch sets until 17:00: half ramen with Sichuan-style mapo tofu or yurinchi · evening value set with mapo tofu rice bowl · 27 seats',
    website: OWN, gmaps: gm('鶏白湯らーめん 自由が丘蔭山'), menu_url: null,
    notes: "[Ramen · chicken paitan shio soba with lemon in Abeno Q's Mall] A Jiyugaoka Kageyama branch on the fourth floor of Abeno Q's Mall near Tennoji, open since 2017 from 11:00 to 23:00, handy for families and groups. The toripaitan shio soba is rich and creamy yet light, with a strong chicken aroma; squeeze in the lemon halfway, find yuzu at the bottom, and finish by dropping rice into the soup. The special adds wontons, chicken chashu, vegetables and onion chips. Lunch sets (until 17:00) pair a half bowl with mapo tofu or yurinchi; the mapo tofu struck two diners as salty. One diner found the whole bowl too mild. Lines form at noon on holidays. Cards and QR accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 May 2017 (Tabelog)', background: 'Branch of the Jiyugaoka Kageyama chicken paitan ramen group (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Chicken paitan shio soba.',
      anecdotes: [
        { text: '"The Toripaitan Shio had a rich broth that was surprisingly light in flavor, perfectly complementing the slightly thicker noodles… I squeezed some lemon provided on the side… and at the end, I added a spoonful of rice to the soup…" — October 2025, special toripaitan shio soba.', source: R + 'B515808996/' },
        { text: '"The Toripaitan Ramen was a rich bowl with a strong chicken broth aroma. The thick soup clung perfectly to the medium noodles…" — September 2026, half noodle mapo tofu set.', source: R + 'B536487692/' },
      ],
      japanese_sources_summary: '食べログ: 鶏白湯らーめん 自由が丘蔭山 あべのＱ\'sモール店、大阪市阿倍野区阿倍野筋1-6-1 あべのキューズモール 4F、天王寺駅12番出口から徒歩2分、毎日11:00〜23:00、休みはキューズモールに準ずる、カード・電子マネー・QR可、27席、2017年5月18日開店、公式サイトあり。口コミ(2025年10月〜2026年10月): 鶏白湯の塩そば、濃厚でクリーミーなのにあっさり、鶏の香り、中太の麺、半分でレモンを搾る、底から柚子、締めにご飯をスープへ、特製は野菜、ワンタン、半熟卵、鶏チャーシュー、唐辛子、青菜、オニオンチップ、17時までのランチセット (半ラーメンと四川風麻婆豆腐か Yurinchi)、夜のお得なセット (麻婆丼)、麻婆豆腐が塩辛いという声が二つ、全体に物足りないという声、休日の昼は行列、家族連れや大人数も。',
      confidence: 'medium', sources: [TB, OWN, R + 'B515808996/', R + 'B531537105/', R + 'B536487692/', R + 'B536495028/', R + 'B536916851/', R + 'B537700364/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Medium, slightly thick, chewy noodles (2025–2026).' },
      regional_style: [], sub_genre: ['tori_paitan', 'ramen'],
      signature_bowl: 'Toripaitan shio soba (2026).',
      chashu: 'Chicken chashu (2026).',
      notable_toppings: ['lemon', 'yuzu', 'wontons', 'onion chips', 'dried chili', 'rice to finish'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Abeno\'s mall-floor chicken paitan shio with a lemon twist.',
      profile: { richness: 4, oiliness: 2, clarity: 1, tare_strength: 2, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536487692/', '"A rich bowl with a strong chicken broth aroma. The thick soup" — placed high.'],
        oiliness: [R + 'B515808996/', '"Despite its rich flavor, it was light and refreshing" — placed low.'],
        clarity: [R + 'B531537105/', '"The ramen had a rich, creamy broth" — bottom of scale.'],
        tare_strength: [R + 'B536495028/', '"The soup had a light flavor" (one diner) — placed low.'],
        noodle_firmness: [R + 'B531537105/', '"Smooth noodles"; "chewy noodles" (July 2026) — mid-scale.'],
        aroma_punch: [R + 'B536487692/', '"A strong chicken broth aroma"; lemon midway — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B515808996/', R + 'B536487692/', R + 'B531537105/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Mall restaurant with room for groups (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市阿倍野区阿倍野筋1-6-1 あべのキューズモール 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市阿倍野区阿倍野筋一丁目6番1号 (go) 146m (large mall; SiO Style in the same complex is ~60 m away); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B515808996/', R + 'B531537105/'],
    price_note: 'No prices in the reviews; JPY 1,000–1,999 average (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Toripaitan shio soba', '', 'Ramen', 'no', 'no', 'October 2026.', 'shio_soba'),
      it('', '', 'Special toripaitan shio soba', '', 'Ramen', 'no', 'no', 'September 2026.', 'tokusei'),
      it('', '', 'Lunch set: half ramen + mapo tofu', '', 'Lunch', 'no', 'no', 'September 2026.', 'mapo_set'),
      it('', '', 'Lunch set: half ramen + yurinchi', '', 'Lunch', 'no', 'no', 'July 2026.', 'yurinchi_set'),
    ] }, {
    cuisine: '鶏白湯ラーメン・鶏白湯の塩そば: 濃厚でクリーミーなのにあっさり、中太の麺、半分でレモンを搾り、底には柚子・特製: 野菜、ワンタン、半熟卵、鶏チャーシュー、唐辛子、青菜、オニオンチップ・残りのスープにご飯・17時までのランチセット: 半ラーメンと四川風の麻婆豆腐か Yurinchi・夜のお得なセット (麻婆丼)・27席',
    neighborhood: '阿倍野区阿倍野筋1-6-1 あべのキューズモール 4F。天王寺駅12番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、塩のたれ、ワンタン、麻婆豆腐のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯、鶏チャーシュー、ワンタン、卵。',
    notes: '[ラーメン・あべのキューズモール、レモンで味変する鶏白湯の塩そば] 天王寺近くのあべのキューズモール4階にある自由が丘蔭山の店で、2017年開店、11時から23時まで、家族連れや大人数にも使いやすい。鶏白湯の塩そばは濃厚でクリーミーなのにあっさりで、鶏の香りが強い。半分食べたらレモンを搾り、底には柚子、最後はご飯をスープに入れて。特製はワンタン、鶏チャーシュー、野菜、オニオンチップ入り。17時までのランチセットは半ラーメンと麻婆豆腐か Yurinchi で、麻婆豆腐は塩辛いという声が二つ。全体に物足りないという声も。休日の昼は行列。カード、QR可。',
  });
}

save();
