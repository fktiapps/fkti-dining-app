// Osaka sweep (2-mile circle around Dotonbori), batch 55 — ramen phase, nearest first (all OMNI).
//   + きりん寺 裏なんば店 (Suzume-group abura-soba, third Kirinji branch)
//   + きりん寺 なんば駅前店 (fourth Kirinji branch, beside Nankai Namba)
//   + 老四川 (Sichuan beef noodles with tripe — filed 'other')
//   + 大阪つけ麺しら石 難波店 (Shiraishi-group tsukemen, 7 am–1 am, flame-warmed dip)
// Skips: 那須家 27153920 (0 reviews; NASUYA already recorded from 27153926), 麺屋マンマパーパ 27132178 and
//   麺屋もくもく 27145415 (newest reviews 2022 and 2024, no staff-maintained listing), 和ばぁる 魁 27049275 (newest review November 2023).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, skip, save } = openCitySweep('osaka', TODAY, 55);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27153920', 'Nasuya: 0 Tabelog reviews; listed at 日本橋2-3-19, next door to NASUYA (27153926, recorded b54) — likely a duplicate listing');
skip('27132178', 'Menya Mamma Papa: newest review November 2022; not staff-maintained');
skip('27145415', 'Menya Mokumoku: newest review November 2024; not staff-maintained');
skip('27049275', 'Wa Bar Kai: newest review November 2023; too little to write a record');

// ================================================================ きりん寺 裏なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27123762/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kirinji_ura_namba', name: 'きりん寺 裏なんば店 (Kirinji Ura Namba)', category: 'OMNI',
    lat: 34.664739, lng: 135.505887, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; sauce not described; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu and egg toppings; sauce not described.',
    hours_raw: 'Daily 11:30–20:00; hours may change (Tabelog). Ticket machine at the entrance (January 2026). No reservations. Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:30', '20:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nippombashi 2-5-8 (Ura-Namba) — about 4 min from Nippombashi Stn',
    cuisine: 'Abura-soba (soupless oil noodles) · medium-thick curly noodles with chashu, menma, nori and white sesame · soft-boiled egg version ¥950 (January 2026), kimchi and everything-on options · finish with vinegar and chili oil · kara-age · kara-age and TKG set',
    website: null, gmaps: gm('きりん寺 裏なんば店'), menu_url: null,
    notes: "[Abura-soba · the Ura-Namba branch of the Kirinji oil-noodle chain] A Kirinji abura-soba shop in Ura-Namba, a few minutes from Nippombashi, open since 2021. When the Sennichimae branch had a long line, one diner walked over and got straight in. Buy a ticket, and the bowl comes with medium-thick curly noodles, chashu, menma, nori and white sesame. Mix it with the vinegar and chili oil on the table; it's lighter than it looks. The soft-boiled-egg version was ¥950 in January 2026. One diner reported that saying \"Kirinji\" when handing over the ticket got a free egg. The chain's slogan is that three visits will get you hooked, and one fifth-time visitor agrees. Kara-age and a kara-age and TKG set round things out. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 June 2021 (Tabelog)', background: 'Kirinji abura-soba chain; the Namba-ekimae branch lists the Suzume group site (Tabelog).', philosophy: 'Slogan: three visits and you\'re hooked (October 2025 review).', specialty: 'Abura-soba.',
      anecdotes: [
        { text: '"Their catchphrase says that after three visits, you\'ll be hooked, but I was already addicted after my first visit, and this was my fifth time." — October 2025.', source: R + 'B515070250/' },
        { text: '"The chewy noodles were perfectly coated with the special sauce and oil, creating a simple yet addictive flavor. It wasn\'t as heavy as it looked." — September 2026, no wait while the Sennichimae branch had a line.', source: R + 'B536466199/' },
      ],
      japanese_sources_summary: '食べログ: きりん寺 裏なんば店、大阪市中央区日本橋2-5-8、近鉄日本橋駅から237m、毎日11:30〜20:00、予約不可、カード・電子マネー・QR不可、禁煙、2021年6月16日開店。口コミ(2025年6月〜2026年9月): 油そば、唐揚げとTKGのセット、ラー油、大盛りにすればよかった、3回食べるとやみつきというキャッチフレーズで5回目、酢とラー油、日本橋駅から徒歩4分、半熟卵の油そばと唐揚げ、中太の縮れ麺、半熟卵・メンマ・チャーシュー・海苔・白ごま、券売機、半熟卵950円、券を渡すときに「きりん寺」と言うと半熟卵がのったという声、千日前店は行列で裏なんば店はすぐ入れた、見た目ほど重くない。',
      confidence: 'medium', sources: [TB, R + 'B515070250/', R + 'B536466199/', R + 'B516305375/', R + 'B521824666/', R + 'B508851908/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'curly', hydration: null, handmade: false, notes: 'Medium-thick curly noodles (October 2025); chewy (September 2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba'],
      signature_bowl: 'Soft-boiled-egg abura-soba, ¥950 (January 2026).',
      chashu: null,
      notable_toppings: ['soft-boiled egg', 'menma', 'nori', 'white sesame', 'vinegar', 'chili oil'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Sauce not described.' },
      pantheon: 'Ura-Namba\'s Kirinji: curly oil noodles you dress yourself with vinegar and chili oil, lighter than they look.',
      profile: { richness: 2, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536466199/', '"It wasn\'t as heavy as it looked" — placed low.'],
        oiliness: [R + 'B536466199/', '"Perfectly coated with the special sauce and oil" — mid-scale.'],
        clarity: [R + 'B516305375/', 'Soupless noodles; not applicable — mid-scale.'],
        tare_strength: [R + 'B536466199/', '"A simple yet addictive flavor" — mid-scale.'],
        noodle_firmness: [R + 'B536466199/', '"The chewy noodles."'],
        aroma_punch: [R + 'B515070250/', 'Vinegar and chili oil added at the table — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B536466199/', R + 'B516305375/', R + 'B515070250/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; how-to-eat guide in the shop.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋2-5-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋二丁目5番8号 (go) 7m; same lot as Dashi to Komugi no Kanousei; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521824666/', R + 'B516305375/', R + 'B508851908/'],
    price_note: 'One price from a January 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Abura-soba', '', 'Abura-soba', 'no', 'no', 'January 2026.', 'abura'),
      it('', '', 'Soft-boiled-egg abura-soba', '¥950', 'Abura-soba', 'no', 'no', 'January 2026.', 'hanjuku'),
      it('', '', 'Kara-age', '', 'Sides', 'no', 'no', 'October 2025.', 'karaage'),
      it('', '', 'Kara-age and TKG set', '', 'Sets', 'no', 'no', 'June 2025.', 'tkg_set'),
    ] }, {
    cuisine: '油そば・中太の縮れ麺にチャーシュー、メンマ、海苔、白ごま・半熟卵のせ950円(2026年1月)、キムチや全部のせも・仕上げに酢とラー油・唐揚げ・唐揚げとTKGのセット',
    neighborhood: '日本橋2-5-8(裏なんば)。日本橋駅から徒歩約4分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、たれの中身は不明、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。チャーシューと卵、たれの中身は不明。',
    notes: '[油そば・油そばチェーンきりん寺の裏なんば店] 日本橋駅から数分、裏なんばにあるきりん寺の油そばの店で、2021年開店。千日前店が行列のとき、こちらに来たらすぐ入れたという人も。食券を買うと、中太の縮れ麺にチャーシュー、メンマ、海苔、白ごまの一杯。卓上の酢とラー油を混ぜて食べれば、見た目より軽い味わい。半熟卵のせは950円(2026年1月)。券を渡すときに「きりん寺」と言ったら半熟卵がのったという口コミも。3回食べるとやみつきというのがチェーンのキャッチフレーズで、5回目という人も納得。唐揚げや、唐揚げとTKGのセットも。現金のみ。',
  });
}

// ================================================================ きりん寺 なんば駅前店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27116767/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.suzume-group.co.jp/index.html';
  put({
    id: 'osaka_kirinji_namba_ekimae', name: 'きりん寺 なんば駅前店 (Kirinji Namba Ekimae)', category: 'OMNI',
    lat: 34.663392, lng: 135.500662, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; sauce not described; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu topping; sauce not described.',
    hours_raw: 'Daily 11:30–16:30 and 18:00–22:00; hours may change (Tabelog). No reservations. Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:30', '16:30'], ['18:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nambanaka 1-18-15, Naniwa — beside Nankai Namba Stn',
    cuisine: 'Abura-soba (soupless oil noodles) ¥850 · large +¥100 · butter +¥50 · soft-boiled egg topping · medium-thick chewy noodles with three slices of chashu and menma · vinegar, chili oil and chili flakes on the counter · kara-age ¥280 · back-to-back counter seats',
    website: OWN, gmaps: gm('きりん寺 なんば駅前店'), menu_url: null,
    notes: "[Abura-soba · the Kirinji oil-noodle branch beside Nankai Namba] A counter-only Kirinji abura-soba shop right by Nankai Namba Station, open since 2020, with seats arranged back to back. The abura-soba is ¥850 (July 2026), with a large portion ¥100 more and a pat of butter ¥50. Medium-thick, chewy noodles come with three slices of chashu and menma. Mix it well, then add vinegar and chili oil as the shop's guide recommends; one spice-wary diner found the result mild. A three-time visitor always orders it large with a soft-boiled egg. Kara-age is ¥280, small but hot and crisp. One diner felt the bowl was mostly noodles for the price. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 March 2020 (Tabelog)', background: 'Kirinji abura-soba chain; the listing links the Suzume group site, suzume-group.co.jp (Tabelog).', philosophy: 'Slogan: three visits and you\'re hooked (August 2026 review).', specialty: 'Abura-soba.',
      anecdotes: [
        { text: '"The restaurant claims that if you eat here three times, you\'ll be hooked, and I can confirm that\'s true!" — August 2026, third visit, large with a soft-boiled egg.', source: R + 'B477896380/' },
        { text: '"The prices were JPY 850 for the oil soba, JPY 100 for the large size, JPY 50 for the butter, and JPY 280 for the kara-age." — July 2026.', source: R + 'B532559209/' },
      ],
      japanese_sources_summary: '公式 suzume-group.co.jp。食べログ: きりん寺 なんば駅前店、大阪市浪速区難波中1-18-15、なんば駅から107m、毎日11:30〜16:30・18:00〜22:00、予約不可、カード・電子マネー・QR不可、禁煙、カウンター席、2020年3月16日開店。口コミ(2024年1月〜2026年9月): 3回食べるとやみつき、いつも大盛り半熟卵、なめらかで軽い、酢とラー油は案内どおり、辛いのが苦手でもマイルド、中太麺、卓上の調味料で好みに、カウンターのみで背中合わせ、豚骨の香り、唐揚げは熱々でカリッと、油そば850円・大盛り100円・バター50円・唐揚げ280円、チャーシュー3枚で具が少ないという声、土曜の夜、チャーシューとメンマ、一味。',
      confidence: 'medium', sources: [TB, OWN, R + 'B477896380/', R + 'B532559209/', R + 'B531401424/', R + 'B531415299/', R + 'B533511448/', R + 'B534987509/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Medium-thick, chewy noodles, "not too hard, not too soft" (January 2024, July 2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba'],
      signature_bowl: 'Abura-soba, ¥850 (July 2026).',
      chashu: 'Three slices (July 2026).',
      notable_toppings: ['soft-boiled egg', 'butter', 'menma', 'vinegar', 'chili oil'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Sauce not described.' },
      pantheon: 'Nankai Namba\'s Kirinji: a ¥850 bowl of chewy oil noodles with butter on request and the vinegar-and-chili-oil ritual.',
      profile: { richness: 2, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B477896380/', '"Light enough to keep you coming back" — placed low.'],
        oiliness: [R + 'B477896380/', '"A smooth texture" — mid-scale.'],
        clarity: [R + 'B531401424/', 'Soupless noodles; not applicable — mid-scale.'],
        tare_strength: [R + 'B531401424/', '"When I mixed it well with the sauce" — mid-scale.'],
        noodle_firmness: [R + 'B477896380/', '"Not too hard, not too soft" (January 2024 visit) — mid-scale.'],
        aroma_punch: [R + 'B477896380/', 'Chili oil "mild and delicious" — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B477896380/', R + 'B531401424/', R + 'B532559209/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'How-to-eat guide in the shop; cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中1-18-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中一丁目18番15号 (go) 10m; next lot to Chuka Soba Nanba Ro; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532559209/', R + 'B477896380/'],
    price_note: 'Prices from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Abura-soba', '¥850', 'Abura-soba', 'no', 'no', 'July 2026.', 'abura'),
      it('', '', 'Large portion', '+¥100', 'Options', 'no', 'no', 'July 2026.', 'oomori'),
      it('', '', 'Butter', '+¥50', 'Options', 'ask', 'no', 'July 2026.', 'butter'),
      it('', '', 'Kara-age', '¥280', 'Sides', 'no', 'no', 'July 2026.', 'karaage'),
    ] }, {
    cuisine: '油そば850円・大盛り+100円・バター+50円・半熟卵のトッピング・中太のもちもち麺にチャーシュー3枚とメンマ・卓上に酢、ラー油、一味・唐揚げ280円・背中合わせのカウンター席',
    neighborhood: '浪速区難波中1-18-15。南海なんば駅のすぐ横',
    gf_detail: 'グルテンフリーではありません。小麦の麺、たれの中身は不明、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。チャーシュー、たれの中身は不明。',
    notes: '[油そば・南海なんば駅横のきりん寺] 南海なんば駅のすぐそばにある、カウンターだけのきりん寺の油そばの店で、2020年開店、席は背中合わせ。油そばは850円(2026年7月)、大盛りは100円、バターは50円増し。中太のもちもちした麺にチャーシュー3枚とメンマ。よく混ぜてから、店の案内どおりに酢とラー油を。辛いのが苦手な人もマイルドに感じたそう。3回目の人はいつも大盛りに半熟卵。唐揚げは280円で、小ぶりでも熱々でカリッと。値段のわりにほぼ麺だけという声も。現金のみ。',
  });
}

// ================================================================ 老四川
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27146840/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:00', '14:30'], ['17:30', '20:30']);
  put({
    id: 'osaka_lao_sichuan_shimanouchi', name: '老四川 (Lao Sichuan)', category: 'OMNI',
    lat: 34.67036, lng: 135.508282, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a braised, spiced beef broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef broth, beef, tripe and intestine.',
    hours_raw: 'Mon–Sat 12:00–14:30 and 17:30–20:30; closed Sunday; hours may change (Tabelog). Always a line; waits of 10 minutes to an hour, including time after sitting down (March–September 2026). Ticket machine with Chinese labels (March 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shimanouchi 2-8-18 — east of Nippombashi',
    cuisine: 'Sichuan beef noodles from a Sichuan-born chef · hong shao (red-braised) beef noodles · premium beef noodles · spicy beef noodle soup · fat-intestine noodles · honeycomb tripe topping · numbing and spice levels from mild to extra · no rice · mostly Chinese clientele',
    website: null, gmaps: gm('老四川 島之内'), menu_url: null,
    notes: "[Chinese · Sichuan beef noodles in Shimanouchi] A small beef-noodle shop in Shimanouchi run by a chef from Sichuan, where most customers and staff are Chinese and the ticket machine is labeled in Chinese. There's always a line, and each bowl is made with care, so allow time; one diner spent an hour from the door to the bowl. The draw is hong shao beef noodles, rich and aromatic with real Sichuan-pepper numbing. There are also premium beef noodles, a spicy beef noodle soup with tender marinated beef and chewy noodles, and a fat-intestine version. Add honeycomb tripe. You pick the numbing and the heat, and even \"mild\" makes people sweat. One diner found medium numbing and medium spice perfectly balanced. There's no rice to finish. Closed Sundays. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Shimanouchi 2-chōme (Tabelog)', background: 'Run by a chef from Sichuan (March 2026 review).', philosophy: 'Each bowl made with care (June 2026 review).', specialty: 'Hong shao beef noodles with honeycomb tripe.',
      anecdotes: [
        { text: '"I noticed that almost all the customers were Chinese, the staff were also from China, and the ticket machine had Chinese characters… The umami was strong, and the numbing sensation from the Sichuan peppercorns added a delightful kick." — March 2026, hong shao beef noodles with honeycomb tripe.', source: R + 'B525393974/' },
        { text: '"Despite choosing a mild spice level, the heat was quite intense, making me sweat throughout the meal." — March 2026.', source: R + 'B524768551/' },
      ],
      japanese_sources_summary: '食べログ: 老四川、大阪市中央区島之内2-8-18、日本橋駅から419m、月〜土12:00〜14:30・17:30〜20:30、日曜休み、予約不可、カード・電子マネー・QR不可、禁煙。口コミ(2025年11月〜2026年9月): 紅焼牛肉麺、極品牛肉麺と肥腸麺、牛のハチノス、激辛・激痺れがおすすめ、四川出身の料理人の店、いつも混んでいる、マイルドでも汗が出る辛さ、締めのご飯はない、客のほとんどが中国人でスタッフも中国出身、券売機に中国語、入店から提供まで約1時間、本格的で香り高い、花椒の痺れ、ハチノスはやわらかい、閉店30分前でも満席、一杯ずつ丁寧に作る、麻辣の牛肉麺、やわらかい牛肉、もちもちの麺、中麻中辣、神戸からわざわざ、雨でも満席で10分待ち。',
      confidence: 'medium', sources: [TB, R + 'B525393974/', R + 'B524768551/', R + 'B517458703/', R + 'B530460476/', R + 'B532252210/', R + 'B535141530/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine labeled in Chinese; spice level set when ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区島之内2-8-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区島之内二丁目8番18号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525393974/', R + 'B517458703/', R + 'B532252210/'],
    price_note: 'No prices captured; reviewers spent ¥1,000–1,999.', last_checked: TODAY, items: [
      it('', '', 'Hong shao (red-braised) beef noodles', '', 'Noodles', 'no', 'no', 'November 2025; March 2026.', 'hongshao'),
      it('', '', 'Premium beef noodles', '', 'Noodles', 'no', 'no', 'November 2025; September 2026.', 'jipin'),
      it('', '', 'Fat-intestine noodles', '', 'Noodles', 'no', 'no', 'November 2025.', 'feichang'),
      it('', '', 'Spicy beef noodle soup', '', 'Noodles', 'no', 'no', 'April 2026.', 'mala'),
      it('', '', 'Honeycomb tripe (topping)', '', 'Toppings', 'ask', 'no', 'March–September 2026.', 'tripe'),
    ] }, {
    cuisine: '四川出身の料理人の四川の牛肉麺・紅焼牛肉麺・極品牛肉麺・麻辣の牛肉麺・肥腸麺・牛のハチノスのトッピング・痺れと辛さはマイルドから激まで・ご飯はなし・中国人客が中心',
    neighborhood: '島之内2-8-18。日本橋の東',
    gf_detail: 'グルテンフリーではありません。煮込んだ香辛料の牛肉スープに小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。牛のスープ、牛肉、ハチノス、ホルモン。',
    notes: '[中華・島之内の四川の牛肉麺] 島之内にある小さな牛肉麺の店で、四川出身の料理人が営み、客もスタッフも中国の人が中心、券売機の表示も中国語。いつも行列で、一杯ずつ丁寧に作るので時間に余裕を。入店から提供まで1時間かかったという人も。看板は紅焼牛肉麺で、濃厚で香り高く、花椒の痺れも本格的。極品牛肉麺、味のしみたやわらかい牛肉ともちもちの麺の麻辣の牛肉麺、肥腸麺も。ハチノスを足して。痺れと辛さは選べ、「マイルド」でも汗が出るほど。中麻中辣がちょうどよかったという声も。締めのご飯はありません。日曜定休。現金のみ。',
  });
}

// ================================================================ 大阪つけ麺しら石 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27152699/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://tsukemen.assets-name-innovation.co.jp/';
  put({
    id: 'osaka_tsukemen_shiraishi_namba', name: '大阪つけ麺しら石 難波店 (Osaka Tsukemen Shiraishi Namba)', category: 'OMNI',
    lat: 34.663301, lng: 135.503337, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: whole-wheat noodles; dips not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and seafood dip, sakura shrimp, chashu, wagyu.',
    hours_raw: 'Daily 7:00–1:00 am, open year-round (Tabelog). Touch-panel ticket machine (October 2026). Weekend lunch lines of 5–10, with waits of 20–30 minutes (October 2026). No reservations. Cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['07:00', '01:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nambasennichimae 15-11, 1F — about 3 min from Namba Stn',
    cuisine: 'Tsukemen from the Shiraishi group, opened November 2025 · kombu-water tsukemen · rich chicken-and-seafood tsukemen · rich ajitama tsukemen ¥1,200 · special rich shrimp tsukemen with sakura shrimp · spicy tamago tsukemen · flat whole-wheat noodles, large free · dip kept hot over a flame · sudachi or lime · A5 wagyu rice bowl set · 14 counter seats',
    website: OWN, gmaps: gm('大阪つけ麺しら石 難波店'), menu_url: null,
    notes: "[Tsukemen · Shiraishi-group tsukemen in Namba, 7 am to 1 am] A 14-seat tsukemen counter in Sennichimae, opened in November 2025 by the Shiraishi group and open from 7 am to 1 am, so it covers both morning and late-night ramen. Flat, chewy whole-wheat noodles are good enough to eat plain, and a large portion is free. The dip sits over a small flame and stays boiling hot to the last bite, so mind the bowl. Choose the house kombu-water tsukemen or the rich chicken-and-seafood one (¥1,200 with an ajitama, October 2026). There's also a special rich shrimp version with sakura shrimp and a spicy tamago tsukemen. Squeeze sudachi or lime over the noodles near the end. One diner missed a soup-wari to thin the rich dip, which isn't offered. Expect a 20–30 minute line at weekend lunch. The crowd skews to visitors from abroad.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 10 November 2025 (Tabelog)', background: 'A tsukemen brand from the Shiraishi group (Tabelog); official site tsukemen.assets-name-innovation.co.jp.', philosophy: null, specialty: 'Kombu-water and rich tsukemen.',
      anecdotes: [
        { text: '"When I picked up the bowl, I felt the heat and noticed flames coming from it, which kept the soup warm… The soup contained sakura shrimp, which added a nice touch of shrimp flavor without being overpowering." — October 2026, special rich shrimp tsukemen, large free.', source: R + 'B538007156/' },
        { text: '"The noodles are made from whole wheat flour. When I slurped them without dipping sauce, they were delicious!" — September 2026.', source: R + 'B536490794/' },
      ],
      japanese_sources_summary: '公式 tsukemen.assets-name-innovation.co.jp。食べログ: 大阪つけ麺しら石 難波店、大阪市中央区難波千日前15-11 廣瀬ビル1F、各線なんば駅から徒歩3分、毎日7:00〜25:00、年中無休、予約不可、カード・電子マネー・QR可、14席(カウンターのみ)、2025年11月10日開店、「しら石」グループの新ブランドのつけ麺専門店、昆布水つけ麺、鶏と魚介の濃厚つけ麺、A5和牛丼のセット、朝ラーと夜ラー。口コミ(2026年9〜10月): 全粒粉の麺、そのままでもおいしい、すだちに少し苦み、スープ割りがない、夜8時でも訪日客で混雑、濃厚つけ麺大盛り、辛玉つけ麺、極太でうどんのよう、つけ汁の下に火があり最後まで熱い、ライム、昼前に5人待ち約20分、濃厚海老つけ麺、特製濃厚海老つけ麺、桜えび、大盛り無料、10人ほどの列で約30分、タッチパネルの券売機、濃厚味玉つけ麺1,200円、カウンターのみで狭い、客は外国人が多い、平打ちでもちもち。',
      confidence: 'medium', sources: [TB, OWN, R + 'B538007156/', R + 'B536490794/', R + 'B537394930/', R + 'B538097328/', R + 'B537081924/', R + 'B537653839/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'flat', hydration: null, handmade: false, notes: 'Flat, chewy whole-wheat noodles, "almost like udon"; large free (September–October 2026).' },
      regional_style: [], sub_genre: ['tsukemen'],
      signature_bowl: 'Rich ajitama tsukemen, ¥1,200 (October 2026); kombu-water tsukemen.',
      chashu: 'Jerky-like texture (October 2026).',
      notable_toppings: ['ajitama', 'sakura shrimp', 'sudachi', 'lime'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and seafood dip.' },
      pantheon: 'Sennichimae\'s 7-to-1 tsukemen: wheaty flat noodles and a rich chicken-and-seafood dip kept boiling over a flame.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537394930/', '"The flavor was rich and clung well to the noodles."'],
        oiliness: [R + 'B537394930/', 'No comment on oil — mid-scale.'],
        clarity: [R + 'B537394930/', 'Rich chicken-and-seafood dip — opaque.'],
        tare_strength: [R + 'B538007156/', '"Without being overpowering" — mid-scale.'],
        noodle_firmness: [R + 'B536490794/', '"They had a nice chewiness and a great texture."'],
        aroma_punch: [R + 'B538007156/', '"A nice touch of shrimp flavor without being overpowering" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537394930/', R + 'B536490794/', R + 'B538007156/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Touch-panel ticket machine; many overseas guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前15-11 廣瀬ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前15番11号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538097328/', R + 'B538007156/', R + 'B537394930/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Rich ajitama tsukemen', '¥1,200', 'Tsukemen', 'no', 'no', 'October 2026; large free.', 'noko_ajitama'),
      it('', '', 'Special rich shrimp tsukemen', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'ebi'),
      it('', '', 'Spicy tamago tsukemen', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'karatama'),
      it('', '', 'Kombu-water tsukemen', '', 'Tsukemen', 'no', 'no', 'Tabelog.', 'konbusui'),
      it('', '', 'A5 wagyu rice bowl set', '', 'Sets', 'no', 'no', 'Tabelog.', 'wagyu_don'),
    ] }, {
    cuisine: '2025年11月開店の「しら石」グループのつけ麺・昆布水つけ麺・鶏と魚介の濃厚つけ麺・濃厚味玉つけ麺1,200円・桜えびの特製濃厚海老つけ麺・辛玉つけ麺・全粒粉の平打ち麺、大盛り無料・火で温め続けるつけ汁・すだちやライム・A5和牛丼のセット・カウンター14席',
    neighborhood: '難波千日前15-11 廣瀬ビル1F。なんば駅から徒歩約3分',
    gf_detail: 'グルテンフリーではありません。全粒粉の小麦の麺、つけ汁の中身は不明。',
    vegan_detail: 'ヴィーガンではありません。鶏と魚介のつけ汁、桜えび、チャーシュー、和牛。',
    notes: '[つけ麺・なんばの朝7時から深夜1時までの「しら石」のつけ麺] 千日前にあるカウンター14席のつけ麺店で、2025年11月に「しら石」グループが開店、朝7時から深夜1時まで開いていて朝ラーにも夜ラーにも。もちもちした全粒粉の平打ち麺はそのままでもおいしく、大盛りは無料。つけ汁は小さな火の上で最後まで煮立ったままなので、器に触るときは注意。看板の昆布水つけ麺か、鶏と魚介の濃厚つけ麺(味玉付きで1,200円、2026年10月)を。桜えびの特製濃厚海老つけ麺や辛玉つけ麺も。終盤にすだちやライムを搾って。濃厚なつけ汁を割るスープ割りがないのが残念という声も。週末の昼は20〜30分の行列。客は海外からの人が多め。',
  });
}

save();
