// Osaka sweep (2-mile circle around Dotonbori), batch 141 — ramen phase (all OMNI).
//   + 麺屋わっしょい (black-shoyu ramen piled with stir-fried vegetables, mazesoba, monthly limited bowls; Teradacho)
//   + らーめんセンター トミオ (niboshi specialist: "cement" niboshi chuka soba, summer iriko cold noodles; Teradacho)
//   + 鶏に恋した日 寺田町店 (thick chicken paitan ramen and tsukemen with rare chashu, summer chilled bowls; Teradacho)
//   + 中華そば しゅき (shoyu chashu chuka soba and spicy mala jangmen; sister of Ramen Shuki; Teradacho)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 141);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 麺屋わっしょい
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27046654/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://wasshoi-group.com';
  put({
    id: 'osaka_menya_wasshoi_teradacho', name: '麺屋わっしょい (Menya Wasshoi)', category: 'OMNI',
    lat: 34.648328, lng: 135.524515, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; black soy and salt sauces; fried garlic.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-based soup; pork; back fat; egg.',
    hours_raw: 'Daily 11:00–23:00; lunch pricing 11:00–17:00 (Tabelog). Order by QR code on your phone (October 2026). Cards, IC cards and PayPay accepted (Tabelog).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ikuno-Nishi 2-1-33 (Ikuno-ku), on Route 25 — 1 min from JR Teradacho Stn north exit',
    cuisine: 'Hearty "Wasshoi-style" ramen · kuro shoyu (black soy) ramen: a light chicken-based soy soup under hot, sweet stir-fried cabbage, bean sprouts and meat, thick chewy noodles; garlic to taste; portions named Danjiri, Kagura, Omikoshi and Danjiri MAX · mazesoba (Omikoshi size) with rice to finish · Taiwan mazesoba, 300 g ¥1,080 · monthly limited bowl, e.g. SJM ("shio junk mazesoba") in October: thick Mineya Foods noodles in salt sauce with diced chashu, back fat, fried garlic, a fried egg, sprouts and chili threads · tsukemen · half fried rice ¥410, gyoza, meat platter · table: vinegar, shichimi, pepper, chili oil · 10 counter seats and three tables',
    website: OWN, gmaps: gm('麺屋わっしょい'), menu_url: null,
    notes: "[Ramen · black-shoyu ramen piled with stir-fried vegetables, Teradacho] A big, busy ramen shop a minute from Teradacho's north exit, open since 2010 and part of the Wasshoi group. It looks Jiro-style, but the house kuro shoyu ramen is its own thing: a light chicken-and-soy soup under a mound of hot, sweet stir-fried cabbage, sprouts and meat, on thick chewy noodles, sized up from Danjiri to Danjiri MAX. There's also mazesoba, Taiwan mazesoba, tsukemen and a monthly limited bowl (October's was a salty \"junk\" mazesoba with fried garlic and a fried egg). Add half fried rice or gyoza. Order on your phone. One diner found the large mazesoba heavy, another waited 15 minutes between rice and ramen.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 February 2010 (Tabelog); the Teradacho shop of the Wasshoi group (October 2026 review).', background: 'Ramen shop (Tabelog; 2014–2026 reviews).', philosophy: null, specialty: 'Black-shoyu ramen with stir-fried vegetables; mazesoba; monthly limited bowls.',
      anecdotes: [
        { text: '"At first glance, it looks Jiro-style, but the vegetables are well stir-fried and the dish is hot, sweet, and delicious. The noodles are thick, but not as thick as typical Jiro-style noodles… The broth seems to be chicken-based, with a light soy sauce flavor…" — October 2026, kuro shoyu Danjiri mori.', source: R + 'B537119538/' },
        { text: '"The chewy, thick noodles paired perfectly with the sharp saltiness and subtle acidity of the special salt sauce… the fried garlic provided a great accent." — October 2026, monthly limited SJM noodles, 250 g.', source: R + 'B2967653/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋わっしょい、大阪市生野区生野西2-1-33、JR寺田町駅北口から徒歩1分、毎日11:00〜23:00 (ランチ11:00〜17:00)、カード・交通系IC・PayPay 可、21席 (1階カウンター10、4人掛けテーブル3)、2010年2月18日開店、公式サイトあり。口コミ(2014年12月〜2026年10月): 国道25号沿い、黒醤油ラーメン (鶏ベースのあっさり醤油、炒めたキャベツ・もやし・肉、もちもちの太麺、にんにくを聞かれる)、盛りは Danjiri、Kagura、Omikoshi、Danjiri MAX、黒醤油だんじり盛り (写真)、まぜそばと追い飯、台湾まぜそば300g 1,080円、月替わりの限定 (10月は塩だれのジャンクなまぜそば SJM、Mineya Foods の太麺、刻みチャーシュー、背脂、フライドガーリック、目玉焼き、もやし、糸唐辛子)、つけ麺、半チャーハン410円、餃子、肉盛り、卓上の酢・七味・胡椒・ラー油、スマホでQR注文、LINE の特典、大盛りのまぜそばは重いという声、チャーハンとラーメンの間が15分あいたという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B2967653/', R + 'B534564750/', R + 'B534990879/', R + 'B537119538/', R + 'B537750716/', R + 'B76340240/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'unknown', tare: ['shoyu', 'shio'], aroma_oil: ['back fat'], richness: 'medium',
      noodles: { thickness: 'thick', shape: 'straight', hydration: null, handmade: false, notes: 'Thick, chewy noodles, less thick than Jiro noodles; Mineya Foods noodles in the limited mazesoba (2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba', 'tsukemen'],
      signature_bowl: 'Kuro shoyu ramen, Danjiri size (October 2026).',
      chashu: 'Stir-fried meat on the ramen; diced chashu on the mazesoba (2026).',
      notable_toppings: ['stir-fried cabbage and sprouts', 'garlic', 'fried egg (limited)', 'back fat', 'rice to finish'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken soup and pork.' },
      pantheon: 'Teradacho\'s "not-Jiro" black shoyu under a hill of stir-fried vegetables.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537119538/', '"A light soy sauce flavor" under hearty vegetables — mid-scale.'],
        oiliness: [R + 'B534564750/', '"If you\'re feeling a bit sensitive in your stomach, you might want to hold back" — mid-scale.'],
        clarity: [R + 'B537119538/', '"The broth seems to be chicken-based" — mid-scale.'],
        tare_strength: [R + 'B534564750/', '"Giving it a strong punch of flavor" — placed high.'],
        noodle_firmness: [R + 'B534564750/', '"The noodles were thick and had a nice chewiness" — placed high.'],
        aroma_punch: [R + 'B2967653/', '"The fried garlic provided a great accent" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B537119538/', R + 'B534564750/', R + 'B2967653/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone QR ordering; staff help with portion names (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市生野区生野西2-1-33',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM 麺屋わっしょい node/4855887320 0m; GSI 大阪府大阪市生野区生野西二丁目1番33号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534564750/', R + 'B76340240/', R + 'B2967653/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('黒醤油だんじり盛り', '', 'Kuro shoyu ramen, Danjiri size', '', 'Ramen', 'no', 'no', 'October 2026 photo caption.', 'kuro_danjiri'),
      it('', '', 'Kuro shoyu ramen with soft egg and extra meat', '¥1,370', 'Ramen', 'no', 'no', 'August 2026.', 'kuro_full'),
      it('', '', 'Mazesoba', '', 'Mazesoba', 'no', 'no', 'September 2026.', 'maze'),
      it('', '', 'Taiwan mazesoba, 300 g', '¥1,080', 'Mazesoba', 'no', 'no', 'September 2026.', 'taiwan_maze'),
      it('', '', 'Monthly limited bowl (e.g. SJM noodles)', '', 'Limited', 'no', 'no', 'October 2026.', 'monthly'),
      it('', '', 'Half fried rice', '¥410', 'Rice', 'no', 'no', 'August 2026.', 'half_chahan'),
    ] }, {
    cuisine: 'がっつりのわっしょい流ラーメン・黒醤油ラーメン: 鶏ベースのあっさり醤油に熱々で甘い炒めキャベツ、もやし、肉、もちもちの太麺、にんにくはお好みで、盛りは Danjiri、Kagura、Omikoshi、Danjiri MAX・追い飯で締めるまぜそば (Omikoshi 盛り)・台湾まぜそば300g 1,080円・月替わりの限定、たとえば10月の SJM (塩だれのジャンクなまぜそば): Mineya Foods の太麺、刻みチャーシュー、背脂、フライドガーリック、目玉焼き、もやし、糸唐辛子・つけ麺・半チャーハン410円、餃子、肉盛り・卓上: 酢、七味、胡椒、ラー油・カウンター10席とテーブル3卓',
    neighborhood: '生野区生野西2-1-33、国道25号沿い。JR寺田町駅北口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、黒醤油と塩のたれ、フライドガーリック。',
    vegan_detail: 'ヴィーガンではありません。鶏ベースのスープ、豚、背脂、卵。',
    notes: '[ラーメン・寺田町、炒め野菜を山盛りにした黒醤油ラーメン] 寺田町駅北口から1分、大きくにぎわうラーメン店で、2010年開店、わっしょいグループの店。見た目は二郎系だが、看板の黒醤油ラーメンは別物: 鶏と醤油のあっさりしたスープに熱々で甘い炒めキャベツ、もやし、肉を山盛りにし、もちもちの太麺、盛りは Danjiri から Danjiri MAX まで。まぜそば、台湾まぜそば、つけ麺、月替わりの限定 (10月はフライドガーリックと目玉焼きの塩のジャンクなまぜそば) も。半チャーハンや餃子も。注文はスマホで。大盛りのまぜそばは重いという声、ご飯とラーメンの間が15分あいたという声も。',
  });
}

// ================================================================ らーめんセンター トミオ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27115652/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ramen_center_tomio_teradacho', name: 'らーめんセンター トミオ (Ramen Center Tomio)', category: 'OMNI',
    lat: 34.647981, lng: 135.524895, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; salt and shoyu tare; shumai wrappers.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: niboshi and saba-bushi broths; chicken and pork chashu; sardine topping; egg.',
    hours_raw: 'Daily 11:00–23:00; closing days not fixed, posted on social media (Tabelog). Order by QR code at the seat or verbally; the ticket machine is gone (September 2026). E-money and QR accepted; no cards (Tabelog).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ikuno-Nishi 2-1-27 (Ikuno-ku), on Route 25 — 151 m from Teradacho Stn',
    cuisine: 'Niboshi specialist · Tomio niboshi soba ¥1,200: balanced niboshi, generous chashu · rich niboshi chuka soba: a thick, "cement"-grey soup · niboshi tsukemen ¥1,000, with narutomaki, onion, menma and chashu in the dip; soup to dilute · summer Ibuki iriko cold noodles ¥1,150–1,250: Ibuki iriko, saba-bushi and other fish flakes with kombu water and salt tare, dashi ice, Morioka-style elastic noodles, chicken chashu, vinegared sardine, pickled cherry tomatoes, kaiware, menma, egg and an iriko "cement" paste · two-week limited Shodoshima iriko cold ramen: rich cement soup on thick flat noodles with seaweed and onion · meat shumai · tamago-kake gohan with house soy · table: furikake, kombu tsukudani and spices · 12 counter seats',
    website: null, gmaps: gm('らーめんセンター トミオ'), menu_url: null,
    notes: "[Ramen · niboshi specialist with summer iriko cold noodles, Teradacho] A twelve-seat niboshi ramen counter on Route 25 by Teradacho, open since January 2020, where the smell of dried sardines greets you at the door. The house Tomio niboshi soba (¥1,200) is balanced rather than brutal; the rich niboshi chuka soba goes thick and cement-grey with a pleasant bitterness for true fans. Summer is its showcase: the Ibuki iriko cold noodles, an icy iriko-and-kombu soup with dashi ice and springy Morioka-style noodles, plus a two-week Shodoshima iriko cold ramen. Niboshi tsukemen (¥1,000) and meat shumai too. One diner found the shumai soft and the tsukemen noodles plain. Order by QR code or out loud.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 January 2020 (Tabelog)', background: 'Niboshi chuka soba specialist (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Niboshi chuka soba; iriko cold noodles.',
      anecdotes: [
        { text: '"The broth is made from a blend of Ibuki iriko (dried sardines), saba (mackerel) flakes, and soya flakes, combined with kombu water and a salt-based sauce… The noodles are specially sourced from Morioka, boasting a chewy texture…" — September 2024, Ibuki iriko cold noodles ¥1,150.', source: R + 'B517384699/' },
        { text: '"While many cold ramen dishes tend to be refreshing and light, this one had a rich flavor with a noticeable bitterness from the niboshi (dried sardines)." — September 2026, Shodoshima iriko cold ramen.', source: R + 'B432610741/' },
      ],
      japanese_sources_summary: '食べログ: らーめんセンター トミオ、大阪市生野区生野西2-1-27、寺田町から151m、毎日11:00〜23:00、定休日不定 (SNSで告知)、カード不可、電子マネー・QR可、カウンター12席、2020年1月18日開店。口コミ(2024年9月〜2026年10月): 煮干し中華そばの専門店、店に入ると煮干しの香り、トミオ煮干しそば1,200円、濃厚煮干し中華そば (セメント色のスープ)、煮干しつけ麺1,000円 (なると、玉ねぎ、メンマ、チャーシュー、スープ割り)、夏の Ibuki のいりこの冷やし1,150〜1,250円 (Ibuki いりこ、サバ節など、昆布水、塩だれ、だし氷、盛岡の麺、鶏チャーシュー、酢漬けのイワシ、ミニトマトのピクルス、かいわれ、メンマ、玉子、いりこのセメントのペースト)、2週間限定の小豆島いりこの冷やしラーメン (濃厚なセメントのスープ、太い平打ち麺、海苔、玉ねぎ)、肉焼売、特製醤油の卵かけご飯、卓上のふりかけと昆布の佃煮、券売機がなくなり席でQR注文か口頭、焼売が柔らかすぎたという声、つけ麺の麺は味が薄いという声。',
      confidence: 'medium', sources: [TB, R + 'B432610741/', R + 'B517384699/', R + 'B528472761/', R + 'B529673813/', R + 'B536584598/', R + 'B537995046/'] },
    ramen: {
      broth_base: ['niboshi', 'gyokai'], broth_texture: 'unknown', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'flat', hydration: null, handmade: false, notes: 'Thick flat noodles in the rich niboshi bowls; Morioka-style elastic noodles in the iriko cold noodles (2024–2026).' },
      regional_style: [], sub_genre: ['niboshi', 'ramen', 'tsukemen'],
      signature_bowl: 'Tomio niboshi soba, ¥1,200; summer Ibuki iriko cold noodles (2026).',
      chashu: 'Generous, tender pork chashu; chicken chashu on the cold noodles (2024–2026).',
      notable_toppings: ['chopped onion', 'seaweed', 'iriko paste', 'vinegared sardine (summer)', 'meat shumai'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Fish broth.' },
      pantheon: 'Teradacho\'s niboshi temple: cement-thick chuka soba and icy iriko noodles in summer.',
      profile: { richness: 5, oiliness: 2, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B432610741/', '"A rich flavor with a noticeable bitterness from the niboshi" — top of scale.'],
        oiliness: [R + 'B517384699/', '"It has a smooth texture that makes it easy to drink" — placed low.'],
        clarity: [R + 'B432610741/', '"The soup was a rich cement color" — bottom of scale.'],
        tare_strength: [R + 'B517384699/', '"Delivering a sharp and satisfying flavor right from the first sip" — placed high.'],
        noodle_firmness: [R + 'B528472761/', '"The flat noodles… had a chewy texture and a smooth finish" — placed high.'],
        aroma_punch: [R + 'B537995046/', '"As soon as I entered, the aroma of niboshi (dried sardines) filled the air" — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B432610741/', R + 'B517384699/', R + 'B537995046/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'QR or verbal ordering; condiments and furikake on the counter (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市生野区生野西2-1-27',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM トミオ node/12193987514 4m; GSI 大阪府大阪市生野区生野西二丁目1番27号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537995046/', R + 'B529673813/', R + 'B517384699/'],
    price_note: 'Prices from 2024–October 2026 reviews; cold noodles are seasonal.', last_checked: TODAY, items: [
      it('', '', 'Tomio niboshi soba', '¥1,200', 'Ramen', 'no', 'no', 'October 2026.', 'tomio'),
      it('', '', 'Rich niboshi chuka soba', '', 'Ramen', 'no', 'no', 'October 2026.', 'noko_niboshi'),
      it('', '', 'Niboshi tsukemen', '¥1,000', 'Tsukemen', 'no', 'no', 'October 2026.', 'tsukemen'),
      it('', '', 'Ibuki iriko cold noodles (summer)', '¥1,250', 'Limited', 'no', 'no', 'September 2026.', 'ibuki'),
      it('', '', 'Meat shumai', '', 'Sides', 'no', 'no', 'October 2026.', 'shumai'),
      it('', '', 'Tamago-kake gohan', '', 'Rice', 'ask', 'no', 'October 2026.', 'tkg'),
    ] }, {
    cuisine: '煮干しの専門店・トミオ煮干しそば1,200円: 釣り合いのいい煮干し、たっぷりのチャーシュー・濃厚煮干し中華そば: とろみのあるセメント色のスープ・煮干しつけ麺1,000円、つけ汁になると、玉ねぎ、メンマ、チャーシュー、スープ割り・夏の Ibuki のいりこの冷やし1,150〜1,250円: Ibuki いりこ、サバ節などに昆布水と塩だれ、だし氷、盛岡風の弾力のある麺、鶏チャーシュー、酢漬けのイワシ、ミニトマトのピクルス、かいわれ、メンマ、玉子、いりこのセメントのペースト・2週間限定の小豆島いりこの冷やしラーメン: 太い平打ち麺に濃厚なセメントのスープ、海苔、玉ねぎ・肉焼売・特製醤油の卵かけご飯・卓上: ふりかけ、昆布の佃煮、スパイス・カウンター12席',
    neighborhood: '生野区生野西2-1-27、国道25号沿い。寺田町駅から151m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、塩と醤油のたれ、焼売の皮。',
    vegan_detail: 'ヴィーガンではありません。煮干しとサバ節のスープ、鶏と豚のチャーシュー、イワシのトッピング、卵。',
    notes: '[ラーメン・寺田町、夏のいりこの冷やしがある煮干しの専門店] 寺田町近く、国道25号沿いのカウンター12席の煮干しラーメンの店で、2020年1月開店、入ると煮干しの香りが迎える。看板のトミオ煮干しそば (1,200円) は荒々しさより釣り合い重視、濃厚煮干し中華そばはとろみのあるセメント色で心地よい苦みがあり、煮干し好き向け。見せ場は夏: いりこと昆布の冷たいスープにだし氷、弾力のある盛岡風の麺の Ibuki のいりこの冷やしと、2週間限定の小豆島いりこの冷やしラーメン。煮干しつけ麺 (1,000円) や肉焼売も。焼売が柔らかく、つけ麺の麺は淡白という声も。注文はQRか口頭で。',
  });
}

// ================================================================ 鶏に恋した日 寺田町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27135332/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://torinikoishitahi.com/';
  put({
    id: 'osaka_tori_ni_koishita_hi_teradacho', name: '鶏に恋した日 寺田町店 (Tori ni Koishita Hi Teradacho)', category: 'OMNI',
    lat: 34.648595, lng: 135.524352, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu, miso and shio tare; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan; clam and niboshi broths; rare pork chashu; egg.',
    hours_raw: 'Daily 10:30–15:00 (last order 14:45) and 17:00–22:00 (last order 21:45); closing days not fixed (Tabelog). Ticket machine; some limited bowls ordered verbally (2026). Cards accepted; no e-money or QR (Tabelog).',
    hours: ALL(day(['10:30', '15:00'], ['17:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ikuno-Nishi 2-1-37 (Ikuno-ku) — 30 sec from JR Teradacho Stn north exit',
    cuisine: 'Thick chicken paitan · chicken paitan ramen (shoyu base): thick, rich soup, thin noodles, four slices of house rare chashu · special chicken paitan miso ramen ¥1,200: spicy-rich miso, chewy medium-thick noodles · chicken paitan tsukemen 200 g ¥1,000, 300 g ¥1,100: thick chewy noodles, large rare chashu, kaiware, yuzu · summer chilled bowls ¥1,000: tanrei chilled ramen in clam broth; refreshing chilled ramen of niboshi and kombu with chicken fat, shio; clam chilled tsukemen, 20 a day · yuzu-kosho, niboshi vinegar · kara-age, fried rice · 10 counter seats on 1F, tables on 2F',
    website: OWN, gmaps: gm('鶏に恋した日 寺田町店'), menu_url: null,
    notes: "[Ramen · thick chicken paitan with rare chashu, Teradacho] A clean two-floor shop thirty seconds from Teradacho's north exit, open since 2023 as a branch of Tori ni Koishita Hi. Its chicken paitan is the thick kind rather than the light modern style, with four slices of house-made rare chashu over thin noodles; the special miso version (¥1,200) adds spice and depth. The chicken paitan tsukemen (from ¥1,000) pairs thick, chewy noodles with yuzu and kaiware. Summer brings a run of chilled bowls (¥1,000), from a gentle clam-broth ramen to a niboshi-kombu shio, and a 20-a-day clam chilled tsukemen. Kara-age and fried rice on the side. One diner found the portion small.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 April 2023 (Tabelog); Teradacho branch of Tori ni Koishita Hi.', background: 'Chicken paitan ramen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Thick chicken paitan; chicken paitan tsukemen; summer chilled bowls.',
      anecdotes: [
        { text: '"The broth is a rare, thick style, unlike the lighter chicken paitan versions that have become common lately. The miso adds a perfect level of spiciness and depth…" — July 2026, special chicken paitan miso ramen ¥1,200.', source: R + 'B532872647/' },
        { text: '"The cold soup has a clean flavor based on seafood, with a light texture and no off-flavors… The medium-thin flat noodles paired perfectly with the soup…" — July 2026, refreshing chilled ramen ¥1,000.', source: R + 'B490312030/' },
      ],
      japanese_sources_summary: '食べログ: 鶏に恋した日 寺田町店、大阪市生野区生野西2-1-37、JR寺田町駅北口から徒歩30秒、毎日10:30〜15:00 (L.O. 14:45)・17:00〜22:00 (L.O. 21:45)、定休日不定、カード可、電子マネー・QR不可、26席 (1階カウンター10、2階テーブル)、2023年4月1日開店、公式サイトあり。口コミ(2026年1〜9月): 鶏白湯の専門店、とろみのある濃厚な鶏白湯 (醤油ベース)、細麺、自家製のレアチャーシュー4枚、特製鶏白湯味噌ラーメン1,200円 (辛みと深み、もちもちの中太麺)、鶏白湯つけ麺200g 1,000円・300g 1,100円 (太麺、大きなレアチャーシュー、かいわれ、柚子)、夏の冷やし1,000円 (貝出汁の淡麗冷やしラーメン、煮干しと昆布に鶏油の塩の爽やか冷やしラーメン、1日20食の貝出汁の冷やしつけ麺)、柚子胡椒、卓上の煮干し酢、唐揚げ、チャーハン、券売機、限定は口頭注文も、新しく清潔な店内、量が少なめという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B490312030/', R + 'B529677343/', R + 'B532872647/', R + 'B533823210/', R + 'B534330924/', R + 'B534400488/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shoyu', 'miso'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin noodles in the paitan ramen; medium-thick in the miso; thick in the tsukemen (2026).' },
      regional_style: [], sub_genre: ['tori_paitan', 'ramen', 'tsukemen'],
      signature_bowl: 'Chicken paitan ramen with rare chashu (2026).',
      chashu: 'Four slices of house-made rare chashu (August 2026).',
      notable_toppings: ['rare chashu', 'kaiware', 'yuzu', 'niboshi vinegar', 'yuzu-kosho'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Teradacho\'s thick chicken paitan with rare chashu.',
      profile: { richness: 5, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B534330924/', '"Contrary to the light flavor I expected, the broth was thick, rich" — top of scale.'],
        oiliness: [R + 'B533823210/', '"The richness of the broth are just perfect" — mid-scale.'],
        clarity: [R + 'B532872647/', '"A rare, thick style" of chicken paitan — bottom of scale.'],
        tare_strength: [R + 'B533823210/', '"The broth has a slightly rich flavor" (shoyu base) — mid-scale.'],
        noodle_firmness: [R + 'B532872647/', '"The chewy medium-thick noodles" — placed high.'],
        aroma_punch: [R + 'B532872647/', '"The delightful aroma of seaweed wafted through the air" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B532872647/', R + 'B534330924/', R + 'B533823210/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; staff take verbal orders for limited bowls (July 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市生野区生野西2-1-37',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市生野区生野西二丁目1番37号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B490312030/', R + 'B532872647/', R + 'B529677343/'],
    price_note: 'Prices from January–September 2026 reviews; chilled bowls are summer-only.', last_checked: TODAY, items: [
      it('', '', 'Chicken paitan ramen (shoyu base)', '', 'Ramen', 'no', 'no', 'August 2026.', 'paitan'),
      it('', '', 'Special chicken paitan miso ramen', '¥1,200', 'Ramen', 'no', 'no', 'July 2026.', 'miso'),
      it('', '', 'Chicken paitan tsukemen, 200 g / 300 g', '¥1,000 / ¥1,100', 'Tsukemen', 'no', 'no', 'January 2026.', 'tsukemen'),
      it('', '', 'Chilled ramen (summer)', '¥1,000', 'Limited', 'no', 'no', 'July–September 2026.', 'hiyashi'),
      it('', '', 'Kara-age', '', 'Sides', 'no', 'no', 'August 2026.', 'karaage'),
      it('', '', 'Fried rice', '', 'Rice', 'no', 'no', 'August 2026.', 'chahan'),
    ] }, {
    cuisine: '濃厚な鶏白湯・鶏白湯ラーメン (醤油ベース): とろみのある濃厚なスープ、細麺、自家製のレアチャーシュー4枚・特製鶏白湯味噌ラーメン1,200円: 辛みと深みの味噌、もちもちの中太麺・鶏白湯つけ麺200g 1,000円、300g 1,100円: もちもちの太麺、大きなレアチャーシュー、かいわれ、柚子・夏の冷やし1,000円: 貝出汁の淡麗冷やしラーメン、鶏油の塩の煮干しと昆布の爽やかな冷やしラーメン、1日20食の貝出汁の冷やしつけ麺・柚子胡椒、煮干し酢・唐揚げ、チャーハン・1階カウンター10席、2階テーブル',
    neighborhood: '生野区生野西2-1-37。JR寺田町駅北口から徒歩30秒',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油・味噌・塩のたれ、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯、貝と煮干しのスープ、豚のレアチャーシュー、卵。',
    notes: '[ラーメン・寺田町、レアチャーシューの濃厚な鶏白湯] 寺田町駅北口から30秒、清潔な2フロアの店で、2023年開店、鶏に恋した日の寺田町店。鶏白湯は今風の軽いものと違う、とろみのある濃厚なタイプで、細麺に自家製のレアチャーシューが4枚。特製の味噌 (1,200円) は辛みと深みが加わる。鶏白湯つけ麺 (1,000円から) はもちもちの太麺に柚子とかいわれ。夏は冷やしが続々 (1,000円)、優しい貝出汁のラーメンから煮干しと昆布の塩、1日20食の貝出汁の冷やしつけ麺まで。唐揚げとチャーハンも。量が少なめという声も。',
  });
}

// ================================================================ 中華そば しゅき
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27155846/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_chuka_soba_shuki_teradacho', name: '中華そば しゅき (Chuka Soba Shuki)', category: 'OMNI',
    lat: 34.648801, lng: 135.523485, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare; meat miso; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat broth; chashu; meat miso; egg yolk.',
    hours_raw: 'Daily 11:00–24:00; hours may change (Tabelog). Half fried rice at lunch (September 2026). Order verbally, pay on the way out (September–October 2026). Tabelog lists no cards or QR; one diner paid by PayPay (September 2026).',
    hours: ALL(day(['11:00', '23:59'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Daido 4-10-6 (Tennoji-ku) — 105 m from JR Teradacho Stn',
    cuisine: 'Chuka soba and spicy noodles · chashu chuka soba ¥930: standard shoyu, thin noodles, a bowl full of thin-sliced chashu, white leek · spicy mala jangmen ¥1,200: thick chewy noodles, bean sprouts, chashu, chili and an egg yolk; add garlic · cold tantanmen ¥1,200: thin noodles, spicy meat sauce, bok choy, sprouts · white sesame soy milk cold tantan soba ¥1,380 · negi cold noodles · extra noodles ¥110, free for students · gyoza set; half fried rice ¥530 at lunch · counter only',
    website: null, gmaps: gm('中華そば しゅき'), menu_url: null,
    notes: "[Ramen · chashu chuka soba and spicy mala jangmen by Teradacho] A compact counter by Teradacho Station from the team behind Ramen Shuki in Tsuruhashi, reopened in April 2026 under this name, open until midnight, often with a few groups waiting. The chashu chuka soba (¥930) is a straightforward shoyu bowl buried in thin-sliced chashu and white leek on thin noodles; for heat, the spicy mala jangmen (¥1,200) piles chili, sprouts and an egg yolk on thick, chewy noodles, though diners differ on how hot it is (add garlic). Cold tantanmen and a sesame soy-milk version appear seasonally. Students get free extra noodles. Half fried rice at lunch. Pay on the way out.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 April 2026 (Tabelog), renamed from Menji Shuki; linked to Ramen Shuki in Tsuruhashi (October 2026 reviews).', background: 'Chuka soba counter (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Chashu chuka soba; spicy mala jangmen.',
      anecdotes: [
        { text: '"The Chashu Chuka Soba surprised me with a bowl overflowing with tender slices of chashu!… The Spicy Mala Jangmen had a sharp spiciness combined with a delightful sweetness… The noodles were thicker and chewier than the Chuka Soba…" — October 2026.', source: R + 'B536959124/' },
        { text: '"The well-chilled thin straight noodles were topped with a generous amount of spicy meat sauce, bok choy, and bean sprouts. The soup was ice-cold and quite rich…" — September 2026, cold tantanmen ¥1,200.', source: R + 'B535508509/' },
      ],
      japanese_sources_summary: '食べログ: 中華そば しゅき、大阪市天王寺区大道4-10-6、寺田町から105m、毎日11:00〜24:00、カード・電子マネー・QR不可 (PayPay で払ったという声も)、2026年4月12日開店。口コミ(2026年9〜10月): 鶴橋のらぁめん しゅきの系列、Menji Shuki から改装して再開、チャーシュー中華そば930円 (ふつうの醤油、細麺、薄切りのチャーシューがあふれる、白髪ねぎ)、辛い麻辣ジャンメン1,200円 (太くもちもちの麺、もやし、チャーシュー、唐辛子、卵黄、にんにくを足して)、冷やし担々麺1,200円 (細麺、辛い肉味噌、青梗菜、もやし)、白ごま豆乳の冷やし担々そば1,380円、ねぎの冷やし、替え玉110円 (学生は無料)、餃子のセット、昼の半チャーハン530円、カウンターのみ、平日でも数組待ち、口頭で注文し帰りに支払い。',
      confidence: 'medium', sources: [TB, R + 'B535508509/', R + 'B536223972/', R + 'B536882097/', R + 'B536959124/', R + 'B537067879/', R + 'B537275891/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: ['chili oil'], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin noodles in the chuka soba; thicker, chewier noodles in the mala jangmen (2026).' },
      regional_style: [], sub_genre: ['ramen', 'tantanmen'],
      signature_bowl: 'Chashu chuka soba, ¥930 (October 2026).',
      chashu: 'Plenty of tender, thin-sliced chashu (October 2026).',
      notable_toppings: ['white leek', 'egg yolk', 'garlic', 'bean sprouts'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat broth.' },
      pantheon: 'Teradacho\'s late-night chashu chuka soba from the Shuki team, with a mala bowl for heat.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536959124/', '"The rich broth paired perfectly with the thin noodles" — mid-scale.'],
        oiliness: [R + 'B537067879/', '"It has a nice thickness and is hot" (mala) — mid-scale.'],
        clarity: [R + 'B536223972/', '"A fairly standard Shoyu Ramen" — mid-scale.'],
        tare_strength: [R + 'B537275891/', '"A delightful green onion flavor and a consistently good taste" — mid-scale.'],
        noodle_firmness: [R + 'B536959124/', 'Chuka soba noodles thin; mala "thicker and chewier" — mid-scale.'],
        aroma_punch: [R + 'B536959124/', '"A sharp spiciness combined with a delightful sweetness" (mala jangmen) — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B536959124/', R + 'B536223972/', R + 'B537275891/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter; friendly staff (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区大道4-10-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区大道四丁目10番6号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536959124/', R + 'B535508509/', R + 'B537275891/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chashu chuka soba', '¥930', 'Ramen', 'no', 'no', 'October 2026.', 'chashu_chuka'),
      it('', '', 'Spicy mala jangmen', '¥1,200', 'Ramen', 'no', 'no', 'October 2026.', 'mala'),
      it('', '', 'Cold tantanmen', '¥1,200', 'Limited', 'no', 'no', 'September 2026.', 'hiyashi_tantan'),
      it('', '', 'White sesame soy milk cold tantan soba', '¥1,380', 'Limited', 'no', 'no', 'October 2026.', 'tonyu'),
      it('', '', 'Extra noodles (free for students)', '¥110', 'Toppings', 'no', 'no', 'October 2026.', 'kaedama'),
      it('', '', 'Half fried rice (lunch)', '¥530', 'Rice', 'no', 'no', 'September 2026.', 'half_chahan'),
    ] }, {
    cuisine: '中華そばと辛い麺・チャーシュー中華そば930円: ふつうの醤油、細麺、器いっぱいの薄切りのチャーシュー、白髪ねぎ・辛い麻辣ジャンメン1,200円: 太くもちもちの麺、もやし、チャーシュー、唐辛子、卵黄、にんにくを足して・冷やし担々麺1,200円: 細麺、辛い肉味噌、青梗菜、もやし・白ごま豆乳の冷やし担々そば1,380円・ねぎの冷やし・替え玉110円 (学生は無料)・餃子のセット、昼は半チャーハン530円・カウンターのみ',
    neighborhood: '天王寺区大道4-10-6。JR寺田町駅から105m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、肉味噌、餃子。',
    vegan_detail: 'ヴィーガンではありません。肉のスープ、チャーシュー、肉味噌、卵黄。',
    notes: '[ラーメン・寺田町、チャーシュー中華そばと辛い麻辣ジャンメン] 寺田町駅そばの小さなカウンターの店で、鶴橋のらぁめん しゅきの系列、2026年4月にこの名で再開、深夜0時まで、数組待つことも。チャーシュー中華そば (930円) は細麺の素直な醤油に薄切りのチャーシューと白髪ねぎがあふれる。辛いのなら麻辣ジャンメン (1,200円) で、太くもちもちの麺に唐辛子、もやし、卵黄をのせ、辛さの感じ方は人それぞれ (にんにくを足して)。冷やし担々麺や白ごま豆乳の冷やしも季節に。学生は替え玉無料。昼は半チャーハンも。支払いは帰りに。',
  });
}

save();
