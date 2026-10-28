// Osaka sweep (2-mile circle around Dotonbori), batch 111 — ramen phase (all OMNI).
//   + 麺屋ガテンの乱 本町淀屋橋店 (Jiro-style MAZE soba, Taiwanese mazesoba, chicken paitan; Hiranomachi)
//   + 麺処 天川 (Agu pork and Tanba black chicken shoyu and shio, inventive limited bowls; Tabelog Ramen 100 2024–2025; Kujo)
//   + 味噌ヌードル 麹 (rich miso ramen on thick curly noodles, sansho miso; sister of Tsukemen Ide; Hiranomachi)
//   + つけ麺 井手 (pork-bone and seafood tsukemen on thick chewy noodles since 2011; Hiranomachi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 111);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 麺屋ガテンの乱 本町淀屋橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27087777/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_menya_gaten_no_ran_honmachi', name: '麺屋ガテンの乱 本町淀屋橋店 (Menya Gaten no Ran Honmachi Yodoyabashi)', category: 'OMNI',
    lat: 34.687956, lng: 135.503046, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy-sauce dressing.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: back fat; chashu; egg yolk; chicken paitan.',
    hours_raw: 'Open daily: lunch, last entry 15:00; dinner, last entry 21:30 Mon–Wed, 22:00 Thu–Fri, 21:00 Sat, Sun and holidays; breaks at Obon and New Year (Tabelog). Opening times not listed. Choose noodles (150 g or 200 g, same price), vegetables, back fat and garlic. Stamp card; free self-serve kimchi (2026 reviews). Cash only: no cards, e-money or QR (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Hiranomachi 3-1-9 — 5 min from Yodoyabashi exit 8 or Kitahama exit 6',
    cuisine: 'Jiro-style mazesoba and Taiwanese mazesoba · MAZE soba: rich soy dressing, flat thick chewy noodles, vegetables, back fat, garlic, black pepper, tender chashu · MAZE soba DX with large chashu and egg yolk · Taiwanese mazesoba ¥1,050, ¥1,100 with rice · limited "shibi-kara" Sichuan-pepper MAZE soba ¥1,100 · chicken paitan ramen ¥1,000 · seasoned egg ¥130 · chashu-mayo rice bowl · free self-serve kimchi · 150 g or 200 g of noodles at the same price · 12 seats',
    website: null, gmaps: gm('麺屋ガテンの乱 本町淀屋橋店'), menu_url: null,
    notes: "[Ramen · Jiro-style MAZE soba and Taiwanese mazesoba in the Yodoyabashi office district] A twelve-seat office-district shop between Yodoyabashi and Kitahama, open since 2015 and open daily. The MAZE soba is the order: flat, thick, chewy noodles in a rich soy dressing, under vegetables, back fat, garlic and a punch of black pepper, all adjustable from less to extra, with 200 g of noodles for the price of 150 g. The Taiwanese mazesoba (¥1,050) has its own repeat diner, and the creamy chicken paitan (¥1,000) is the lighter way in. Self-serve kimchi is free, and a stamp card leads to a gold card with free rice. One diner asked for extra fat and got extra garlic. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 6 October 2015 (Tabelog)', background: 'Mazesoba and ramen shop, Honmachi-Yodoyabashi branch (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Jiro-style MAZE soba; Taiwanese mazesoba.',
      anecdotes: [
        { text: '"The rich soy sauce dressing paired perfectly with the hearty flat thick noodles… You can choose between 150g and 200g of noodles, and customize the amount of vegetables, fat, and garlic from less to extra." — March 2025, MAZE soba.', source: R + 'B502340916/' },
        { text: '"The chicken paitan ramen costs JPY 1000, and the chashu (braised pork) is tender and delicious." — October 2026, ninth visit.', source: R + 'B525329295/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋ガテンの乱 本町淀屋橋店、大阪市中央区平野町3-1-9、淀屋橋駅8番出口・北浜駅6番出口から徒歩5分、本町駅1番出口・堺筋本町駅17番出口から6分、無休(お盆・年末年始は休み)、昼は15時まで入店、夜は月〜水21:30・木金22:00・土日祝21:00まで入店、カード・電子マネー・QR不可、12席、2015年10月6日開店。口コミ(2025年3月〜2026年10月): 期間限定のシビ辛MAZEそば1,100円、味玉130円、200gの麺より多い野菜、平打ちの太麺、花椒の痺れ、MAZEそばにんにく増し、濃い醤油だれ、150gか200g、野菜・脂・にんにくを調整、セルフのカラメ、鶏白湯ラーメン1,000円、ゴールドカードでご飯無料、キムチ食べ放題、台湾まぜそばとご飯1,100円、台湾まぜそば1,050円、麺の増量無料、スタンプカード、チャーシューマヨ丼、MAZEそばDX、脂増しがにんにく増しに、鶏白湯の大盛り、二郎系も、黒胡椒が効く。',
      confidence: 'medium', sources: [TB, R + 'B502340916/', R + 'B525329295/', R + 'B535656184/', R + 'B535679524/', R + 'B536643215/', R + 'B536974425/'] },
    ramen: {
      broth_base: ['pork'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: ['back fat', 'garlic'], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'flat', hydration: null, handmade: false, notes: 'Flat thick chewy noodles, 150 g or 200 g at the same price (2025–2026).' },
      regional_style: ['Tokyo Jiro-kei'], sub_genre: ['mazesoba_aburasoba', 'jiro_kei', 'tori_paitan'],
      signature_bowl: 'MAZE soba (2025–2026); Taiwanese mazesoba ¥1,050 (April 2026).',
      chashu: 'Tender chashu; large slices on the DX (2026).',
      notable_toppings: ['back fat', 'garlic', 'black pepper', 'free kimchi'],
      gf: { status: 'no', note: 'Wheat noodles; soy dressing.' },
      vegan: { status: 'no', note: 'Back fat; chashu.' },
      pantheon: 'Yodoyabashi\'s Jiro-style MAZE soba: thick flat noodles, garlic and black pepper to order, 200 g for the price of 150.',
      profile: { richness: 5, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B535656184/', '"A rich sauce that exploded with junk food deliciousness" — top of scale.'],
        oiliness: [R + 'B502340916/', 'Back fat to order, "from less to extra" — placed high.'],
        clarity: [R + 'B502340916/', 'Brothless mazesoba in soy dressing — bottom of scale.'],
        tare_strength: [R + 'B502340916/', '"Slightly on the salty side" (shibi-kara) — placed high.'],
        noodle_firmness: [R + 'B535656184/', '"The satisfying chewiness of the thick noodles" — placed high.'],
        aroma_punch: [R + 'B535656184/', '"The garlic punch was intense!"; "the strong flavor of black pepper" (B536974425) — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B502340916/', R + 'B535656184/', R + 'B536974425/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff ask garlic and back-fat amounts when you order (April 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区平野町3-1-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区平野町三丁目1番9号 (go) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B502340916/', R + 'B525329295/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'MAZE soba', '', 'Mazesoba', 'no', 'no', 'October 2026.', 'maze'),
      it('', '', 'MAZE soba DX', '', 'Mazesoba', 'no', 'no', 'September 2026.', 'maze_dx'),
      it('', '', 'Taiwanese mazesoba', '¥1,050', 'Mazesoba', 'no', 'no', 'April 2026; ¥1,100 with rice.', 'taiwan'),
      it('', '', 'Shibi-kara MAZE soba (limited)', '¥1,100', 'Mazesoba', 'no', 'no', 'October 2026.', 'shibikara'),
      it('', '', 'Chicken paitan ramen', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'tori_paitan'),
      it('', '', 'Seasoned egg', '¥130', 'Toppings', 'no', 'no', 'October 2026.', 'ajitama'),
    ] }, {
    cuisine: '二郎系のまぜそばと台湾まぜそば・MAZEそば: 濃い醤油だれ、平打ちでもちもちの太麺、野菜、背脂、にんにく、黒胡椒、柔らかいチャーシュー・大きなチャーシューと卵黄のMAZEそばDX・台湾まぜそば1,050円、ご飯付き1,100円・期間限定の花椒のシビ辛MAZEそば1,100円・鶏白湯ラーメン1,000円・味玉130円・チャーシューマヨ丼・セルフのキムチ無料・麺は150gか200gで同じ値段・12席',
    neighborhood: '中央区平野町3-1-9。淀屋橋駅8番出口・北浜駅6番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油だれ。',
    vegan_detail: 'ヴィーガンではありません。背脂、チャーシュー、卵黄、鶏白湯。',
    notes: '[ラーメン・淀屋橋のオフィス街、二郎系MAZEそばと台湾まぜそば] 淀屋橋と北浜の間、オフィス街の12席の店で、2015年開店、無休。頼むならMAZEそば: 平打ちでもちもちの太麺に濃い醤油だれ、野菜、背脂、にんにく、黒胡椒がしっかり、量は少なめから増しまで調整でき、麺は150gの値段で200gに。台湾まぜそば(1,050円)にも通う人がいて、クリーミーな鶏白湯(1,000円)は軽めの入口。セルフのキムチは無料、スタンプカードを貯めるとご飯無料のゴールドカードに。脂増しを頼んだらにんにく増しが来たという声も。現金のみ。',
  });
}

// ================================================================ 麺処 天川
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27109749/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:00', '14:00']; const WD = day(L, ['18:00', '20:30']); const SA = day(L, ['17:00', '20:30']);
  put({
    id: 'osaka_mendokoro_amakawa_kujo', name: '麺処 天川 (Mendokoro Amakawa)', category: 'OMNI',
    lat: 34.676719, lng: 135.479184, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare; katsuobushi and saba-bushi dashi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Agu pork and Tanba black chicken broth; fish dashi; Agu back fat and chashu.',
    hours_raw: 'Tue–Fri 11:00–14:00 and 18:00–20:30; Sat and public holidays 11:00–14:00 and 17:00–20:30; Sun 11:00–14:00; closed Mon (holiday Mondays lunch only, then closed the next day) (Tabelog). Lines of three or four at the 11:00 opening; full by noon (2026 reviews). Ticket machine. Cash only: no cards, e-money or QR (Tabelog). Child chairs available (Tabelog).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: SA, 6: day(L) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Honden 1-11-20 (Nishi-ku) — 7 min from Kujo Stn exit 6',
    cuisine: 'Additive-free shoyu and shio, plus limited bowls · shio ramen ¥950–1,100 (two October 2026 reviews differ): clear, slightly cloudy chicken-and-pork broth with kombu and a hint of seafood, chashu, menma, onion, nori · ajitama Agu pork shoyu ramen ¥1,250: Agu pork and Tanba black chicken with katsuobushi, saba-bushi, sanma-bushi, iriko and Hokkaido kombu, Agu back fat, Agu pork-belly chashu, flat noodles · Amakawa shio soba ¥900 and kake soba shoyu ¥800 with just green onion and onion · noodles by Tsurumi Seimen of Hokkaido wheat (Haru yo Koi and others) · limited: domestic chicken-shoulder stir-fried noodles ¥1,200, "Amakawa Onomichi" back-fat shoyu ¥1,100, chilled ramen ¥1,200, chilled salmon-flake soba ¥1,100 · seasonal takikomi rice · large noodles +¥100–200, small rice ¥50 · 9 counter seats',
    website: null, gmaps: gm('麺処 天川 九条'), menu_url: null,
    notes: "[Ramen · Agu pork and Tanba black chicken shoyu and shio, with inventive limited bowls, by Kujo] A nine-seat counter near Kujo, open since 2019 and picked for Tabelog's Ramen 100 in 2024 and 2025, with lines at the 11:00 opening. The base is an additive-free double soup of Agu pork and Tanba black chicken with a layered fish dashi; the ajitama shoyu (¥1,250) floats Agu back fat over flat noodles from Tsurumi Seimen, with juicy Agu belly chashu. The shio is clear and mellow, its umami building as you go. For the simplest taste of broth and noodle, there's a kake-style shio or shoyu soba with only onion. Repeat diners come for the limited bowls: a stir-fried chicken-shoulder noodle tossed in a cast-iron pan, an Onomichi-style back-fat shoyu, chilled ramen in summer. Add the seasonal takikomi rice. Ticket machine, cash only; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 5 March 2019 (Tabelog)', background: 'Ramen counter; Tabelog Ramen OSAKA 100, 2024 and 2025 (Tabelog).', philosophy: 'No chemical seasonings; Tanba black chicken delivered unfrozen; filtered water; domestic-wheat noodles from Tsurumi Seimen (2025–2026 reviews).', specialty: 'Agu pork shoyu; shio; limited bowls.',
      anecdotes: [
        { text: '"The broth is a rich blend of Agu pork and Niwa black chicken, combined with both animal and seafood extracts. It starts off with a strong umami flavor from the meat, followed by a gentle aftertaste of dried fish." — October 2026, ajitama shoyu ramen ¥1,250.', source: R + 'B517056805/' },
        { text: '"The domestic chicken shoulder meat and plenty of vegetables are stir-fried over high heat to achieve a fragrant finish… neither Mazesoba nor Yakisoba; it\'s a unique creation." — October 2026, limited stir-fried noodles ¥1,200.', source: R + 'B454962560/' },
      ],
      japanese_sources_summary: '食べログ: 麺処 天川、大阪市西区本田1-11-20、九条から532m、火〜金 11:00〜14:00・18:00〜20:30、土・祝 11:00〜14:00・17:00〜20:30、日 11:00〜14:00、月休み(祝日は昼のみ営業し翌日休み)、カード・電子マネー・QR不可、カウンター9席、子ども用椅子あり、2019年3月5日開店、食べログ ラーメン OSAKA 百名店 2024・2025。口コミ(2024年5月〜2026年10月): 塩ラーメン1,100円(鶏と豚の澄んだ旨みに昆布、Tsurumi Seimenの多加水麺、チャーシュー、メンマ、ねぎ、白菜、海苔)、国産鶏肩肉の炒め麺1,200円、塩ラーメン950円(やや濁った清湯、動物系にほのかな魚介、中太麺)、天川おのみち1,100円(黒い醤油に背脂、魚介・鶏・豚)、開店前に3人、九条駅6番出口から徒歩7分、2024・2025年の百名店、12時40分に満席、大盛り200円、冷やしラーメン1,200円、大盛り100円、ご飯少し50円、Agu豚2種のチャーシュー、塩そば900円(ねぎと玉ねぎだけ、Agu豚と丹波の黒鶏の動物系、北海道産Haru yo Koiの平打ちストレート麺)、天川かけそば醤油800円、化学調味料不使用、99.9999%除菌の水、冷凍しない丹波の黒鶏、国産小麦のTsurumi Seimen、味玉醤油ラーメン1,250円、Agu豚バラのチャーシュー、日曜10時48分に4人、鉄鍋をあおる店主、かぼす、黒胡椒、鮭節の冷やしそば1,100円、丹波の地鶏と豚骨に鰹節・鯖節・秋刀魚節・いりこ・北海道昆布、Agu豚の背脂、極細の平打ちストレート麺、季節の炊き込みご飯(さつまいもと丹波の黒鶏)。',
      confidence: 'high', sources: [TB, R + 'B415109875/', R + 'B433909091/', R + 'B454962560/', R + 'B488191652/', R + 'B517056805/', R + 'B537534155/'] },
    ramen: {
      broth_base: ['pork', 'chicken', 'gyokai'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: ['back fat'], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'flat', hydration: 'high', handmade: false, notes: 'Flat high-hydration noodles from Tsurumi Seimen of Hokkaido wheat; thin flat in the shoyu (2025–2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Ajitama Agu pork shoyu ramen ¥1,250; shio ramen (October 2026).',
      chashu: 'Agu pork-belly chashu, juicy (October 2026); two kinds of Agu pork chashu (September 2026).',
      notable_toppings: ['Agu back fat', 'menma', 'nori', 'seasonal takikomi rice'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Pork, chicken and fish broth.' },
      pantheon: 'Kujo\'s additive-free Agu pork and Tanba black chicken shoyu, with a chef\'s run of inventive limited bowls.',
      profile: { richness: 3, oiliness: 3, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B415109875/', 'Shio "Light ☆☆★★☆ Rich" — mid-scale.'],
        oiliness: [R + 'B433909091/', '"A moderate amount of oil" — mid-scale.'],
        clarity: [R + 'B433909091/', '"A slightly cloudy clear soup" — placed high.'],
        tare_strength: [R + 'B415109875/', '"A moderate saltiness" — mid-scale.'],
        noodle_firmness: [R + 'B517056805/', '"Smooth and slightly soft" — mid-scale.'],
        aroma_punch: [R + 'B488191652/', '"A subtle taste that resonates slowly without being flashy" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B415109875/', R + 'B433909091/', R + 'B517056805/', R + 'B488191652/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; child chairs (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区本田1-11-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (Ramen 100 2025); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区本田一丁目11番20号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B415109875/', R + 'B433909091/', R + 'B454962560/', R + 'B488191652/', R + 'B517056805/'],
    price_note: 'Prices from 2025–2026 reviews; the shio price differs between two October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shio ramen', '¥950–1,100', 'Ramen', 'no', 'no', 'October 2026; two reviews differ.', 'shio'),
      it('', '', 'Ajitama Agu pork shoyu ramen', '¥1,250', 'Ramen', 'no', 'no', 'October 2026.', 'ajitama_shoyu'),
      it('', '', 'Amakawa shio soba (green onion and onion only)', '¥900', 'Ramen', 'no', 'no', 'October 2026.', 'shio_soba'),
      it('', '', 'Amakawa kake soba, shoyu', '¥800', 'Ramen', 'no', 'no', 'April 2025.', 'kake'),
      it('', '', 'Domestic chicken-shoulder stir-fried noodles (limited)', '¥1,200', 'Limited', 'no', 'no', 'October 2026.', 'itame'),
      it('天川おのみち', '', 'Amakawa Onomichi (limited)', '¥1,100', 'Limited', 'no', 'no', 'May 2026.', 'onomichi'),
      it('', '', 'Chilled ramen (summer)', '¥1,200', 'Limited', 'no', 'no', 'September 2026.', 'hiyashi'),
      it('', '', 'Seasonal takikomi rice', '', 'Rice', 'no', 'no', 'October 2026.', 'takikomi'),
    ] }, {
    cuisine: '化学調味料不使用の醤油と塩、限定の一杯も・塩ラーメン950〜1,100円(2026年10月の2つの口コミで異なる): 鶏と豚に昆布とほのかな魚介のやや濁った清湯、チャーシュー、メンマ、玉ねぎ、海苔・味玉Agu豚醤油ラーメン1,250円: Agu豚と丹波の黒鶏に鰹節・鯖節・秋刀魚節・いりこ・北海道昆布、Agu豚の背脂、Agu豚バラのチャーシュー、細い平打ち麺・ねぎと玉ねぎだけの塩そば900円とかけそば醤油800円・Tsurumi Seimenの北海道産小麦(Haru yo Koiなど)の麺・限定: 国産鶏肩肉の炒め麺1,200円、背脂醤油の天川おのみち1,100円、冷やしラーメン1,200円、鮭節の冷やしそば1,100円・季節の炊き込みご飯・大盛り+100〜200円、ご飯少し50円・カウンター9席',
    neighborhood: '西区本田1-11-20。九条駅6番出口から徒歩7分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、鰹節と鯖節の出汁。',
    vegan_detail: 'ヴィーガンではありません。Agu豚と丹波の黒鶏のスープ、魚の出汁、Agu豚の背脂とチャーシュー。',
    notes: '[ラーメン・九条近く、Agu豚と丹波の黒鶏の醤油と塩、独創的な限定] 九条近くのカウンター9席の店で、2019年開店、食べログ ラーメン百名店 2024・2025に選出、11時の開店時には行列。土台は化学調味料不使用のAgu豚と丹波の黒鶏のダブルスープに重ねた魚の出汁。味玉醤油(1,250円)はAgu豚の背脂を浮かべ、Tsurumi Seimenの細い平打ち麺にジューシーなAgu豚バラのチャーシュー。塩は澄んでまろやかで、食べ進むほど旨みが増す。スープと麺だけを味わうなら、玉ねぎだけのかけ風の塩そばか醤油そばを。常連の目当ては限定: 鉄鍋であおる鶏肩肉の炒め麺、尾道風の背脂醤油、夏の冷やしラーメン。季節の炊き込みご飯も。券売機、現金のみ、月曜休み。',
  });
}

// ================================================================ 味噌ヌードル 麹
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27117035/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_miso_noodle_koji_hiranomachi', name: '味噌ヌードル 麹 (Miso Noodle Koji)', category: 'OMNI',
    lat: 34.687992, lng: 135.503739, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick whole-wheat noodles; miso tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone base under the miso; chashu.',
    hours_raw: 'Mon–Fri 11:00–15:00 (L.O. 14:30) and 18:00–22:00 (L.O. 21:30); Sat 11:00–15:00 (L.O. 14:30); closed Sun and public holidays (Tabelog). Buy a ticket inside before joining the line; paper aprons by the machine (2023–2026 reviews). Cards incl. UnionPay and PayPay accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['11:00', '15:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hiranomachi 2-5-14, FUKU Bldg 1F — 457 m from Kitahama Stn',
    cuisine: 'Miso ramen on thick curly noodles · miso ramen ¥1,000, large +¥200: rich, slightly gritty miso over a pork-bone base, thick curly whole-wheat noodles, chopped purple onion, white negi with yuzu peel, menma, chashu · spicy miso ¥1,050, five heat levels, up to level 3 free · "Wasan sansho" miso ramen ¥1,100 with sansho · special miso ¥1,500 (2025) · roasted-garlic miso · chashu miso · 15 counter seats',
    website: null, gmaps: gm('味噌ヌードル 麹 平野町'), menu_url: null,
    notes: "[Ramen · rich miso on thick curly noodles near Kitahama] A fifteen-seat counter in the Kitahama office district, open since 2020 and run by the same people as the nearby Tsukemen Ide, with a lunch line that some diners call routine. The miso ramen (¥1,000) is rich and slightly gritty, with a pork-bone base beneath, on thick, chewy curly noodles of whole wheat, brightened by chopped purple onion and white negi with yuzu peel. Two variations stand out: the spicy miso, with five heat levels and the first three free, where the miso stays the star; and the \"Wasan sansho\" miso (¥1,100), whose aroma greets you at the door and gives a refreshing finish. Buy your ticket inside before you line up. Cards and PayPay accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 April 2020 (Tabelog)', background: 'Miso ramen shop; sister of Tsukemen Ide (2021 and September 2026 reviews).', philosophy: null, specialty: 'Miso ramen.',
      anecdotes: [
        { text: '"The broth is quite rich in miso flavor. You can taste the pork bone flavor beneath the miso, but there\'s a slight graininess… The noodles are thick, curly, and made from whole wheat, strong enough to stand up to the broth." — October 2026, miso ramen ¥1,000.', source: R + 'B537379995/' },
        { text: '"The broth had a rich miso flavor without being heavy, and the fragrance and mild spiciness of the sansho created a refreshing aftertaste." — March 2026, Wasan sansho miso ramen ¥1,100.', source: R + 'B437225982/' },
      ],
      japanese_sources_summary: '食べログ: 味噌ヌードル 麹、大阪市中央区平野町2-5-14 FUKUビル 1F、北浜から457m、月〜金 11:00〜15:00(L.O. 14:30)・18:00〜22:00(L.O. 21:30)、土 11:00〜15:00、日・祝休み、お盆と年末年始はSNSで告知、カード(銀聯含む)・PayPay可、電子マネー不可、カウンター15席、2020年4月7日開店。口コミ(2021年10月〜2026年10月): 味噌らーめん大盛り1,200円、太麺、「Wasan Sansho」味噌らーめん1,100円、先に食券を買ってから並ぶ、山椒の香り、辛味噌らーめん1,050円は辛さ5段階、中太の縮れ麺、玉ねぎとねぎ、味噌らーめん900円(2023年)、不織布のエプロン、ざらっとした味噌スープ、つけ麺 井手の系列、辛味噌の辛さは食券を渡すときに、特製味噌らーめん1,500円(2025年)、紫玉ねぎ、メンマ、チャーシュー味噌、焦がしにんにく味噌、辛さ3までは無料、井手と同じ一味と名刺、豚骨ベース、白髪ねぎに柚子皮、全粒粉の太い縮れ麺、券売機は現金・電子決済・カード、特製「Wasan Sansho」味噌らーめん約1,600円。',
      confidence: 'medium', sources: [TB, R + 'B437225982/', R + 'B489394302/', R + 'B535305462/', R + 'B537379995/', R + 'B537460122/', R + 'B538179599/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['miso'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'wavy', hydration: null, handmade: false, notes: 'Thick curly whole-wheat noodles (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Miso ramen ¥1,000 (October 2026); Wasan sansho miso ¥1,100.',
      chashu: 'Tender chashu; five slices on the special (2026).',
      notable_toppings: ['purple onion', 'yuzu peel', 'white negi', 'sansho'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone base.' },
      pantheon: 'Kitahama\'s rich miso on thick curly noodles, from the Tsukemen Ide family, with a sansho bowl that perfumes the room.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537379995/', '"Quite rich in miso flavor" — placed high.'],
        oiliness: [R + 'B437225982/', '"Rich miso flavor without being heavy" — mid-scale.'],
        clarity: [R + 'B537379995/', '"A slight graininess" in the miso broth — bottom of scale.'],
        tare_strength: [R + 'B489394302/', '"The rich and flavorful miso taste hit me hard" — placed high.'],
        noodle_firmness: [R + 'B537379995/', '"Strong enough to stand up to the broth" — placed high.'],
        aroma_punch: [R + 'B437225982/', '"I was greeted by the pleasant aroma of sansho pepper" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B437225982/', R + 'B489394302/', R + 'B537379995/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine takes cash, cards and mobile payments (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区平野町2-5-14 FUKUビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区平野町二丁目5番14号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B437225982/', R + 'B537379995/'],
    price_note: 'Prices from January–October 2026 reviews.', last_checked: TODAY, items: [
      it('味噌らーめん', '', 'Miso ramen', '¥1,000', 'Ramen', 'no', 'no', 'October 2026; large +¥200.', 'miso'),
      it('', '', 'Spicy miso ramen (five levels, up to 3 free)', '¥1,050', 'Ramen', 'no', 'no', 'January 2026.', 'kara_miso'),
      it('', '', 'Wasan sansho miso ramen', '¥1,100', 'Ramen', 'no', 'no', 'March 2026.', 'sansho'),
      it('', '', 'Special miso ramen', '¥1,500', 'Ramen', 'no', 'no', 'April 2025.', 'tokusei'),
      it('', '', 'Roasted-garlic miso ramen', '', 'Ramen', 'no', 'no', 'July 2024.', 'kogashi'),
    ] }, {
    cuisine: '太い縮れ麺の味噌ラーメン・味噌らーめん1,000円、大盛り+200円: 豚骨ベースにざらっとした濃い味噌、全粒粉の太い縮れ麺、紫玉ねぎ、柚子皮をのせた白髪ねぎ、メンマ、チャーシュー・辛味噌1,050円、辛さ5段階、3までは無料・山椒の「Wasan Sansho」味噌らーめん1,100円・特製味噌1,500円(2025年)・焦がしにんにく味噌・チャーシュー味噌・カウンター15席',
    neighborhood: '中央区平野町2-5-14 FUKUビル 1F。北浜駅から457m',
    gf_detail: 'グルテンフリーではありません。全粒粉の太麺、味噌のたれ。',
    vegan_detail: 'ヴィーガンではありません。味噌の下に豚骨ベース、チャーシュー。',
    notes: '[ラーメン・北浜近く、太い縮れ麺の濃厚味噌] 北浜のオフィス街、カウンター15席の店で、2020年開店、近くのつけ麺 井手の系列で、昼の行列はいつものことという声も。味噌らーめん(1,000円)は豚骨ベースの上にざらっとした濃い味噌、全粒粉のもちもちした太い縮れ麺に、紫玉ねぎと柚子皮をのせた白髪ねぎが明るさを添える。おすすめの変化形は2つ: 辛さ5段階で3まで無料、それでも主役は味噌の辛味噌と、入口で香りに迎えられ後味がさわやかな山椒の「Wasan Sansho」味噌(1,100円)。食券は並ぶ前に店内で。カード、PayPay可。',
  });
}

// ================================================================ つけ麺 井手
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27057297/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_tsukemen_ide_hiranomachi', name: 'つけ麺 井手 (Tsukemen Ide)', category: 'OMNI',
    lat: 34.68776, lng: 135.507467, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; dipping-soup tare; curry tsukemen.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone and seafood dipping soup; chashu; pork rice bowls.',
    hours_raw: 'Mon–Fri 11:00–15:00 (L.O. 14:30) and 18:00–22:00 (L.O. 21:30); Sat 11:00–15:00 (L.O. 14:30); closed Sun and public holidays; temporary closures on social media (Tabelog). Buy a ticket, then wait; shared tables at lunch (October 2026). Cards incl. UnionPay and PayPay accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['11:00', '15:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hiranomachi 1-8-5 — 5 min from Kitahama Stn exit 5',
    cuisine: 'Pork-bone and seafood tsukemen · tsukemen ¥1,100 (regular, or large 300 g at the same price): glossy, chewy thick noodles with a strong wheat flavor, a thick, rich dipping soup of pork bone and seafood with chashu and menma in it, soup-wari to finish · medium 250 g · all toppings ¥600 · curry tsukemen · niku-miso rice, shredded-pork rice bowl · 3 counter seats, 12 at shared tables',
    website: null, gmaps: gm('つけ麺 井手 北浜'), menu_url: null,
    notes: "[Ramen · thick pork-bone and seafood tsukemen in Kitahama since 2011] A busy fifteen-seat tsukemen shop in the Kitahama office district, open since 2011, where lunch means buying a ticket, a short wait outside and often a shared table. The tsukemen (¥1,100) pairs glossy, chewy thick noodles with a strong wheat flavor and a thick, rich dipping soup of pork bone and seafood, \"rich without being overly heavy,\" with chashu and menma already in it; one October diner got 300 g for ¥1,100. Finish with soup-wari from the table. Add all the toppings (¥600) or a rice bowl of shredded pork or niku-miso. There's also a curry tsukemen. One diner found it simply average. Its sister shop, Miso Noodle Koji, is a few blocks west. Cards and PayPay accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 6 May 2011 (Tabelog)', background: 'Tsukemen shop; sister of Miso Noodle Koji (Tabelog; 2021 and 2026 reviews).', philosophy: null, specialty: 'Pork-bone and seafood tsukemen.',
      anecdotes: [
        { text: '"The glossy, chewy thick noodles are rich in wheat flavor… The dipping sauce, packed with the umami of pork bones and seafood, is thick and rich without being overly heavy." — October 2026.', source: R + 'B455331161/' },
        { text: '"I ordered the Tsukemen (large) for JPY 1,100, which comes with 300g of noodles. The broth is rich and flavorful, with a strong seafood taste that clings well to the noodles." — October 2026.', source: R + 'B537427751/' },
      ],
      japanese_sources_summary: '食べログ: つけ麺 井手、大阪市中央区平野町1-8-5、北浜駅5番出口から徒歩5分、月〜金 11:00〜15:00(L.O. 14:30)・18:00〜22:00(L.O. 21:30)、土 11:00〜15:00、日・祝休み、臨時休業はSNSで、カード(銀聯含む)・PayPay可、15席(カウンター3、テーブル12)、2011年5月6日開店。口コミ(2026年10月): 艶のあるもちもちの太麺、小麦の香り、豚骨魚介の濃厚なつけ汁、重すぎない、チャーシューとメンマ、スープ割り、中盛りつけ麺1,450円という声、普通という声、つけ麺(大)300g 1,100円、魚介が強い、平日13時に満席で5分待ち、券売機、相席、つけ麺(並)1,100円、全部のせ600円、肉味噌ご飯、夜はラーメンもあるらしい、正午過ぎに10分待ち、中盛り250g、豚骨と魚介のバランス、ほぐし豚丼、カレーつけ麺。',
      confidence: 'medium', sources: [TB, R + 'B455331161/', R + 'B536993396/', R + 'B537427751/', R + 'B537436305/', R + 'B537749538/', R + 'B537871990/'] },
    ramen: {
      broth_base: ['tonkotsu', 'gyokai'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Glossy, chewy thick noodles with a strong wheat flavor (October 2026).' },
      regional_style: [], sub_genre: ['tsukemen'],
      signature_bowl: 'Tsukemen, ¥1,100 (October 2026).',
      chashu: 'Chashu in the dipping soup (October 2026).',
      notable_toppings: ['menma', 'soup-wari', 'all toppings (+¥600)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork and seafood soup.' },
      pantheon: 'Kitahama\'s office-district tsukemen since 2011: thick wheaty noodles in a thick pork-bone and seafood dip.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B455331161/', '"Thick and rich without being overly heavy" — placed high.'],
        oiliness: [R + 'B455331161/', '"Without being overly heavy" — mid-scale.'],
        clarity: [R + 'B455331161/', '"The dipping sauce… is thick" — bottom of scale.'],
        tare_strength: [R + 'B537427751/', '"Rich and flavorful" — placed high.'],
        noodle_firmness: [R + 'B455331161/', '"Glossy, chewy thick noodles" — placed high.'],
        aroma_punch: [R + 'B537427751/', '"A strong seafood taste" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B455331161/', R + 'B537427751/', R + 'B537749538/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; shared tables (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区平野町1-8-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区平野町一丁目8番5号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537427751/', R + 'B537436305/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tsukemen (regular or large 300 g)', '¥1,100', 'Tsukemen', 'no', 'no', 'October 2026.', 'tsukemen'),
      it('', '', 'All toppings', '¥600', 'Toppings', 'no', 'no', 'October 2026.', 'zenbu'),
      it('', '', 'Curry tsukemen', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'curry'),
      it('', '', 'Niku-miso rice', '', 'Rice', 'no', 'no', 'October 2026.', 'nikumiso'),
      it('', '', 'Shredded-pork rice bowl', '', 'Rice', 'no', 'no', 'October 2026.', 'hogushi'),
    ] }, {
    cuisine: '豚骨魚介のつけ麺・つけ麺1,100円(並、大300gも同じ値段という声): 小麦の香りが強い艶のあるもちもちの太麺、チャーシューとメンマ入りの濃厚な豚骨魚介のつけ汁、締めはスープ割り・中盛り250g・全部のせ600円・カレーつけ麺・肉味噌ご飯、ほぐし豚丼・カウンター3席、相席のテーブル12席',
    neighborhood: '中央区平野町1-8-5。北浜駅5番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、つけ汁のたれ、カレーつけ麺。',
    vegan_detail: 'ヴィーガンではありません。豚骨と魚介のつけ汁、チャーシュー、豚の丼。',
    notes: '[ラーメン・北浜、2011年からの濃厚豚骨魚介つけ麺] 北浜のオフィス街、15席のにぎわうつけ麺店で、2011年開店、昼は食券を買って外で少し待ち、相席になることも多い。つけ麺(1,100円)は小麦の香りが強い艶のあるもちもちの太麺に、「濃厚だが重すぎない」豚骨魚介のとろりとしたつけ汁、チャーシューとメンマ入り。10月には1,100円で300gという声も。締めは卓上のスープ割りで。全部のせ(600円)か、ほぐし豚や肉味噌のご飯を添えて。カレーつけ麺も。普通だったという人も。系列の味噌ヌードル 麹が数ブロック西に。カード、PayPay可。',
  });
}

save();
