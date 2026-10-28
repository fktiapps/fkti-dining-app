// Osaka sweep (2-mile circle around Dotonbori), batch 85 — ramen phase (all OMNI).
//   + 山中製麺所 本町店 (house-made noodles; tonkotsu, yuzu shoyu, spicy miso; ¥400 fried rice)
//   + RAMEN .R 難波店 (Jiro-inspired, house noodles of Maturité flour; 24 hours Sat–Mon)
//   + 功夫ラーメン / 本格四川料理 功夫 (Sichuan Chinese, knife-cut noodles, all-you-can-eat courses → other)
//   + 麺と無限の可能性 本町総本店 (Jiro-style mazesoba and a light chicken-and-scallop paitan)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 85);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 山中製麺所 本町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27060370/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '22:00']);
  put({
    id: 'osaka_yamanaka_seimensho_honmachi', name: '山中製麺所 本町店 (Yamanaka Seimensho Honmachi)', category: 'OMNI',
    lat: 34.680577, lng: 135.504088, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles; soy and miso seasoning; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth, chashu, pork rice bowl.',
    hours_raw: 'Mon–Sat 11:00–22:00; closed Sundays; hours may change (Tabelog). Ticket machine at the entrance; cash only: no cards, e-money or QR (Tabelog; August 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kyutaromachi 2-6-7 — about 4 min from Sakaisuji-Hommachi Stn',
    cuisine: 'House-made noodles, choice of firmness · tonkotsu ramen ¥890 with thin noodles, soft-boiled egg +¥100 · light shoyu ramen with a hint of yuzu and chopped onion · tonkotsu shoyu · spicy miso ramen ¥1,100 on tonkotsu · spicy ramen, 10 a day · extra noodles ¥100 · fried rice ¥400, mega fried rice · pork rice bowl · gyoza · wood-ear mushroom topping · free pickled ginger · 20 counter seats',
    website: null, gmaps: gm('山中製麺所 本町店'), menu_url: null,
    notes: "[Ramen · house-made noodles and ¥400 fried rice in Honmachi] A counter ramen shop near Sakaisuji-Hommachi, open since 2011 and busy with office workers, with seats turning over fast. The noodles are made in-house and you can choose the firmness; one repeat visitor recommends extra firm. The tonkotsu ramen (¥890) is a rich broth with thin noodles; the shoyu ramen is lighter, with a hint of yuzu and plenty of chopped onion, and one diner liked the tonkotsu shoyu best. The spicy miso ramen (¥1,100) mixes spicy miso into the tonkotsu, and a spicy ramen limited to 10 a day sells out quickly, so arrive before noon. The fried rice (¥400) is generous and praised in several reviews. Pickled ginger is free on the table. Buy a ticket at the door. Cash only; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 3 October 2011 (Tabelog)', background: 'Ramen shop with house-made noodles (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Tonkotsu ramen; fried rice.',
      anecdotes: [
        { text: '"The noodles are homemade, slightly flat, and perfectly chewy, matching the rich broth wonderfully." — July 2026, shoyu ramen.', source: R + 'B532256426/' },
        { text: '"This was my first time ordering the Spicy Miso Ramen, and the rich tonkotsu broth blended with the spicy miso was incredibly delicious." — August 2026, ¥1,100.', source: R + 'B534541498/' },
      ],
      japanese_sources_summary: '食べログ: 山中製麺所 本町店、大阪市中央区久太郎町2-6-7、堺筋本町駅から286m、月〜土11:00〜22:00、日曜定休、カード・電子マネー・QR不可、カウンター20席、禁煙、2011年10月3日開店。口コミ(2026年7〜9月): 入口で食券、豚骨ラーメン890円、半熟卵100円、チャーハン400円は量が多い、細麺と濃厚なスープ、紅しょうがが復活、夜は多くが売り切れ、醤油ラーメンは柚子でさっぱり、刻み玉ねぎたっぷり、自家製のやや平たいもちもち麺、硬さを選べる、豚丼、しょうが入れ放題、バリカタがおすすめ、醤油は少し甘め、豚骨醤油が好み、1日10食の辛いラーメンは昼前に売り切れ、辛味噌ラーメン1,100円は濃厚な豚骨に辛味噌、替え玉100円、メガチャーハン、きくらげのトッピング、餃子は軽め、サラリーマンが多く回転が早い、照明は暗め。',
      confidence: 'medium', sources: [TB, R + 'B532256426/', R + 'B534541498/', R + 'B531911822/', R + 'B534394609/', R + 'B536083067/', R + 'B536999198/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'unknown', tare: ['shoyu', 'miso'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: true, notes: 'House-made; thin with the tonkotsu (August 2026), "slightly flat" with the shoyu (July 2026); firmness can be chosen.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Tonkotsu ramen, ¥890 (August 2026).',
      chashu: 'Light chashu (September 2026).',
      notable_toppings: ['soft-boiled egg', 'wood-ear mushroom', 'chopped onion (shoyu)', 'free pickled ginger'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Honmachi\'s noodle-maker counter: thin house noodles in tonkotsu, and ¥400 fried rice on the side.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B531911822/', '"Thin noodles and a rich, flavorful broth" — placed high.'],
        oiliness: [R + 'B536999198/', 'Tonkotsu with light chashu, "refreshing" with ginger — mid-scale.'],
        clarity: [R + 'B536083067/', '"A rich and flavorful broth" — placed low.'],
        tare_strength: [R + 'B534394609/', 'Shoyu "a bit sweet," tonkotsu "average" — mid-scale.'],
        noodle_firmness: [R + 'B534394609/', 'Recommends "Bari Kata" (extra firm); firmness can be chosen.'],
        aroma_punch: [R + 'B536999198/', 'Pickled ginger added from the table — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B531911822/', R + 'B532256426/', R + 'B534394609/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the entrance; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区久太郎町2-6-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–September 2026. The listed jimdo website did not respond.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区久太郎町二丁目6番7号 (go) 24m; OSM 山中製麺所 node/2450255486 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531911822/', R + 'B534541498/'],
    price_note: 'Prices from August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tonkotsu ramen', '¥890', 'Ramen', 'no', 'no', 'Soft-boiled egg +¥100; August 2026.', 'tonkotsu'),
      it('', '', 'Shoyu ramen', '', 'Ramen', 'no', 'no', 'Hint of yuzu, chopped onion; July 2026.', 'shoyu'),
      it('', '', 'Spicy miso ramen', '¥1,100', 'Ramen', 'no', 'no', 'Extra noodles ¥100; August 2026.', 'kara_miso'),
      it('', '', 'Fried rice', '¥400', 'Sides', 'no', 'no', 'Mega size also offered; August 2026.', 'chahan'),
      it('', '', 'Pork rice bowl', '', 'Sides', 'no', 'no', 'July 2026.', 'butadon'),
    ] }, {
    cuisine: '自家製麺、硬さを選べる・細麺の豚骨ラーメン890円、半熟卵+100円・柚子がほんのり香り刻み玉ねぎの醤油ラーメン・豚骨醤油・豚骨に辛味噌の辛味噌ラーメン1,100円・1日10食の辛いラーメン・替え玉100円・チャーハン400円、メガチャーハン・豚丼・餃子・きくらげのトッピング・紅しょうが無料・カウンター20席',
    neighborhood: '中央区久太郎町2-6-7。堺筋本町駅から徒歩4分ほど',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、醤油や味噌の味付け、餃子。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー、豚丼。',
    notes: '[ラーメン・本町の自家製麺と400円のチャーハン] 堺筋本町近くのカウンターのラーメン店で、2011年開店、サラリーマンが多いが回転は早い。麺は自家製で硬さを選べ、何度も通う人はバリカタをすすめる。豚骨ラーメン(890円)は濃厚なスープに細麺、醤油ラーメンは柚子がほんのり香り刻み玉ねぎたっぷりで軽め、豚骨醤油がいちばんという声も。辛味噌ラーメン(1,100円)は豚骨に辛味噌、1日10食の辛いラーメンはすぐ売り切れるので昼前に。チャーハン(400円)は量が多く、いくつもの口コミで好評。卓上の紅しょうがは無料。入口で食券を。現金のみ、日曜定休。',
  });
}

// ================================================================ RAMEN .R 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27129973/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://ramen-r.com/';
  const H24 = day(['00:00', '23:59']), LATE = day(['11:00', '04:00']);
  put({
    id: 'osaka_ramen_r_namba', name: 'RAMEN .R 難波店 (RAMEN .R Namba)', category: 'OMNI',
    lat: 34.658855, lng: 135.504956, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork broth, back fat, thick chashu.',
    hours_raw: 'Sat, Sun and Mon open 24 hours; Tue 00:00–04:00 and 11:00–04:00 next day; Wed–Thu 11:00–04:00 next day; Fri 11:00–24:00; no regular holidays (Tabelog, staff-maintained). Ticket machine just inside; water and chopsticks are self-service (official site). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: H24, 1: day(['00:00', '04:00'], ['11:00', '04:00']), 2: LATE, 3: LATE, 4: day(['11:00', '23:59']), 5: H24, 6: H24 }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Nipponbashi 5-17-18 — 4 min from Ebisucho Stn, 7 min from Nankai Namba Stn',
    cuisine: 'Jiro-inspired ramen with house-made noodles and house broth · ramen ¥1,200, 100 g to 300 g of noodles at the same price · call your vegetables, garlic and fat; garlic, karame, ichimi and black pepper at self-service corners · flat wavy noodles of Maturité flour · thick chashu · R\'s set meal with chashu and fried egg ¥1,000, with rice, tonkotsu soup and kimchi · 15 counter seats, 3 tables for four',
    website: OWN, gmaps: gm('RAMEN .R 難波店'), menu_url: null,
    notes: "[Ramen · a big Jiro-style shop open all night near Ebisucho] A large, clean Jiro-inspired ramen shop between Ebisucho and Namba, open since 2022, with 27 seats including tables. Noodles and broth are made in-house: flat, wavy noodles of Maturité flour that one diner found dense and packed with wheat. A bowl (¥1,200 in October 2026) comes with 100 g to 300 g of noodles for the same price; call your vegetables and fat, and add garlic yourself. Expect a fatty, heavy broth and thick chashu; one diner found the soup too sour, another the pork underheated. There is also R's set meal (¥1,000), which one diner had on a weekend morning: bean sprouts, thick chashu and a fried egg with rice, tonkotsu soup and kimchi. Open 24 hours Saturday to Monday and until 04:00 most other nights. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 5 June 2022 (Tabelog)', background: 'Jiro-inspired ramen shop with a second shop in Nagai (official site ramen-r.com; Tabelog, staff-maintained).', philosophy: null, specialty: 'Jiro-style ramen with house-made noodles.',
      anecdotes: [
        { text: '"The flat, wavy noodles made with Maturité have a unique resistance when slurped. They have a dense, hard texture that feels packed with wheat, making them delicious." — October 2026, pork ramen 200 g.', source: R + 'B538068866/' },
        { text: '"The dish featured a generous serving of bean sprouts topped with thick slices of chashu and a runny yolk fried egg. It came with white rice, soup, and kimchi." — October 2026, R\'s set meal ¥1,000.', source: R + 'B537084980/' },
      ],
      japanese_sources_summary: '公式 ramen-r.com: 大阪・難波・長居の二郎系インスパイア、難波店は4人掛けテーブル3つとカウンター15席の計27席、南海難波駅から徒歩7分、恵美須町駅から徒歩4分、入ってすぐの券売機で食券、小学生以上は1人1麺、水・箸・レンゲ・おしぼりはセルフ、ニンニク・カラメ・一味・ブラックペッパーはセルフコーナー。食べログ(店舗会員): RAMEN .R 難波店、大阪市浪速区日本橋5-17-18、土日月は24時間、火〜木は11:00〜翌4:00、金は11:00〜24:00、定休日なし、カード・電子マネー・QR不可、禁煙、自家製麺と自家製スープ、2022年6月5日開店。口コミ(2025年5月〜2026年10月): 脂が多いのが二郎系、量が多い、深夜営業がありがたい、店内はきれい、週末朝の定食(チャーシューエッグ1,000円、もやし、厚切りチャーシュー、目玉焼き、ご飯、豚骨スープ、キムチ、ご飯大盛り無料)、300gまで同じ値段、酸味が強いという声、太麺と厚いチャーシュー、1,200円、マチュリテの平打ち縮れ麺、脂が重い、豚が硬いという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B538068866/', R + 'B537084980/', R + 'B484468852/', R + 'B535771668/', R + 'B537806048/', R + 'B537814164/'] },
    ramen: {
      broth_base: ['pork'], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'wavy', hydration: null, handmade: true, notes: 'House-made flat, wavy noodles of Maturité flour, dense and hard (October 2026); 100–300 g at one price.' },
      regional_style: ['Tokyo Jiro-kei'], sub_genre: ['jiro_kei'],
      signature_bowl: 'Ramen, ¥1,200, call vegetables, garlic and fat (October 2026).',
      chashu: 'Thick slices, about 1 cm (October 2026).',
      notable_toppings: ['bean sprouts', 'back fat', 'self-service garlic'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork broth and back fat.' },
      pantheon: 'South Namba\'s all-night Jiro shop: dense house noodles of Maturité flour, 100 to 300 g at one price.',
      profile: { richness: 4, oiliness: 4, clarity: 2, tare_strength: 3, noodle_firmness: 5, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B538068866/', '"The heaviness of the soup\'s fat" — placed high.'],
        oiliness: [R + 'B484468852/', '"It was quite fatty" — placed high.'],
        clarity: [R + 'B538068866/', 'Heavy, fatty Jiro broth — placed low.'],
        tare_strength: [R + 'B537806048/', '"A strong sourness that stood out" to one diner — mid-scale.'],
        noodle_firmness: [R + 'B538068866/', '"A dense, hard texture that feels packed with wheat."'],
        aroma_punch: [R + 'B538068866/', 'Garlic is self-service — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B538068866/', R + 'B484468852/', R + 'B537806048/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; self-service water; staff seat you and check the ticket (official site).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区日本橋5-17-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); official site lists the Namba shop; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区日本橋五丁目17番 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537814164/', R + 'B537084980/', R + 'B537806048/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen', '¥1,200', 'Ramen', 'no', 'no', 'Same price up to 300 g of noodles; October 2026.', 'ramen'),
      it('', '', 'Pork ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'buta_ramen'),
      it('', '', "R's set meal with chashu and fried egg", '¥1,000', 'Sets', 'no', 'no', 'Rice, soup and kimchi; large rice free; October 2026.', 'r_teishoku'),
    ] }, {
    cuisine: '自家製麺と自家製スープの二郎系インスパイア・ラーメン1,200円、麺は100gから300gまで同じ値段・野菜、ニンニク、脂のコール、ニンニク・カラメ・一味・ブラックペッパーはセルフコーナー・マチュリテの平打ち縮れ麺・厚切りチャーシュー・チャーシューと目玉焼きのR定食1,000円、ご飯、豚骨スープ、キムチ付き・カウンター15席、4人掛けテーブル3つ',
    neighborhood: '浪速区日本橋5-17-18。恵美須町駅から徒歩4分、南海難波駅から徒歩7分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。豚のスープ、背脂、厚切りチャーシュー。',
    notes: '[ラーメン・恵美須町近く、夜通し営業の大きな二郎系] 恵美須町と難波の間にある、広くきれいな二郎系インスパイアの店で、2022年開店、テーブル席を含めて27席。麺もスープも自家製で、マチュリテの平打ち縮れ麺は小麦が詰まった密度のある食感という声。ラーメン(2026年10月1,200円)は麺100gから300gまで同じ値段、野菜と脂をコールし、ニンニクは自分で。脂の多い重めのスープと厚いチャーシューで、酸味が強すぎた、豚が温まっていなかったという声も。もやし、厚切りチャーシュー、目玉焼きにご飯、豚骨スープ、キムチのR定食(1,000円)もあり、週末の朝に食べた人も。土日月は24時間、ほかの日もたいてい翌4時まで。現金のみ。',
  });
}

// ================================================================ 功夫ラーメン (本格四川料理 功夫)
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27127745/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://kangfu-osaka.com/';
  put({
    id: 'osaka_kanfu_ramen_kitakyuhojimachi', name: '功夫ラーメン (Kanfu Ramen)', category: 'OMNI',
    lat: 34.67963, lng: 135.501349, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: wheat knife-cut noodles, gyoza, soy and doubanjiang seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, liver, chicken and seafood throughout.',
    hours_raw: 'Daily 11:00–22:30 (food L.O. 21:30, drinks 22:00); may close early if no customers at last order; open year-round (Tabelog, staff-maintained; official site). Ticket machine at the entrance or QR ordering at the table (October 2026). Cards, e-money and PayPay accepted (Tabelog).',
    hours: ALL(day(['11:00', '22:30'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitakyuhojimachi 3-6-14, in the Shinsaibashi shopping arcade — 5 min from Honmachi Stn',
    cuisine: 'Sichuan Chinese, also called 本格四川料理 功夫 · daily lunch set ¥780–790 with soup and dessert, e.g. pork with green peppers (chinjao rosu) or mapo eggplant · liver and garlic-chive stir-fry set · knife-cut noodles with cilantro and garlic to taste · Sichuan dan dan noodles, mapo noodles, mapo tofu · fried rice +¥400 · yakisoba · all-you-can-eat-and-drink courses from ¥3,980 (about 50 dishes) · gyoza, oyster with stir-fried lettuce, curry-flavored fried chicken · 40 seats; private rooms for 6–20 with a large round table for courses from ¥4,000; smoking on the second floor',
    website: OWN, gmaps: gm('功夫ラーメン 北久宝寺町'), menu_url: null,
    notes: "[Chinese · Sichuan cooking and knife-cut noodles in the Shinsaibashi arcade] A large Sichuan restaurant in the covered shopping arcade near Honmachi, with many Chinese customers. Lunch is a bargain: a daily set for about ¥780, such as a generous chinjao rosu (pork with green peppers) or mapo eggplant, with soup and dessert, served fast; one repeat visitor returns for the liver and garlic-chive stir-fry. Noodles include knife-cut noodles you can customize with cilantro and garlic, Sichuan dan dan noodles and mapo noodles; add fried rice for ¥400. At night groups can book the all-you-can-eat-and-drink courses (¥3,980 for about 50 dishes in September 2026), with gyoza and oyster with stir-fried lettuce among the hits and seasonings that taste less Japanized. Private rooms with a big round table seat up to 20. Order by ticket or QR code. Cards accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 26 January 2022 (Tabelog)', background: 'Sichuan Chinese restaurant (official site kangfu-osaka.com; Tabelog, staff-maintained).', philosophy: null, specialty: 'Knife-cut noodles; all-you-can-eat Sichuan courses.',
      anecdotes: [
        { text: '"I was pleased that I could customize my knife-cut noodles with options like cilantro and garlic. The fried rice, which can be added for an extra JPY 400, was surprisingly delicious." — August 2026.', source: R + 'B535221660/' },
        { text: '"For JPY 3,980, we enjoyed an all-you-can-eat and drink experience. The cost performance is amazing! We had access to a menu of 50 different dishes." — September 2026.', source: R + 'B536546196/' },
      ],
      japanese_sources_summary: '公式 kangfu-osaka.com: 本格四川料理 功夫(別名 功夫ラーメン)、心斎橋商店街、本格四川料理の食べ放題、超巨大円卓の完全個室は20名まで、毎日11:00〜22:30(L.O.21:30)、麻婆豆腐、麻婆茄子、四川担々麺、麻婆麺。食べログ(店舗会員): 功夫ラーメン 中華料理、大阪市中央区北久宝寺町3-6-14、本町駅から徒歩5分、毎日11:00〜22:30(フードL.O.21:30、ドリンク22:00)、ラストオーダー時に客がいなければ閉店、年中無休、カード・電子マネー・PayPay可、40席、個室6〜20名(4,000円以上のコースのみ)、2階は喫煙可、2022年1月26日開店。口コミ(2026年6〜10月): アーケード内、平日昼は満席に、レバニラ炒め定食、スープとデザート付き、日替わり定食(青椒肉絲)780円、券売機かテーブルのQRで注文、中国のお客さんが多い、刀削麺、焼きそば、日替わりは麻婆茄子が多い790円、8人の飲み放題食べ放題コース4,650円で20品以上、角ハイボールと生ビール、刀削麺はパクチーやにんにくを選べる、チャーハン+400円、7人で3,980円の食べ放題飲み放題で50品、餃子、牡蠣とレタスの炒め物、カレー風味の唐揚げ、日本風ではない本場の味付け。',
      confidence: 'medium', sources: [TB, OWN, R + 'B535221660/', R + 'B536546196/', R + 'B483289568/', R + 'B506681046/', R + 'B518362663/', R + 'B535051812/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine or QR ordering at the table (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区北久宝寺町3-6-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); official site live; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区北久宝寺町三丁目6番14号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B506681046/', R + 'B518362663/', R + 'B535221660/', R + 'B536546196/', OWN],
    price_note: 'Prices from July–October 2026 reviews; dish names from the official site.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch set (e.g. chinjao rosu)', '¥780', 'Lunch', 'no', 'no', 'October 2026; ¥790 in July 2026.', 'higawari'),
      it('', '', 'Liver and garlic-chive stir-fry set', '', 'Lunch', 'no', 'no', 'August 2026.', 'reba_nira'),
      it('', '', 'Knife-cut noodles', '', 'Noodles', 'no', 'no', 'Cilantro and garlic to taste; fried rice +¥400; August 2026.', 'toshomen'),
      it('', '', 'Sichuan dan dan noodles', '', 'Noodles', 'no', 'no', 'Official site.', 'tantanmen'),
      it('', '', 'All-you-can-eat-and-drink course', '¥3,980', 'Courses', 'no', 'no', 'About 50 dishes; September 2026.', 'tabehodai'),
    ] }, {
    cuisine: '四川料理、本格四川料理 功夫とも・スープとデザート付きの日替わり定食780〜790円(青椒肉絲や麻婆茄子など)・レバニラ炒め定食・パクチーやにんにくを選べる刀削麺・四川担々麺、麻婆麺、麻婆豆腐・チャーハン+400円・焼きそば・3,980円からの食べ放題飲み放題コース(50品ほど)・餃子、牡蠣とレタスの炒め物、カレー風味の唐揚げ・40席、4,000円以上のコースで6〜20名の円卓の個室、2階は喫煙可',
    neighborhood: '中央区北久宝寺町3-6-14、心斎橋の商店街。本町駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。小麦の刀削麺、餃子、醤油や豆板醤の味付け。',
    vegan_detail: 'ヴィーガンではありません。豚肉、レバー、鶏肉、魚介が中心。',
    notes: '[中華・心斎橋の商店街で四川料理と刀削麺] 本町近くのアーケード商店街にある大きな四川料理店で、中国のお客さんが多い。お得なのはランチで、量の多い青椒肉絲や麻婆茄子など780円ほどの日替わり定食にスープとデザート、提供も早い。レバニラ炒めを目当てに通う人も。麺はパクチーやにんにくを選べる刀削麺、四川担々麺、麻婆麺など、チャーハンは400円で追加できる。夜は団体で食べ放題飲み放題コースも(2026年9月は3,980円で50品ほど)、餃子や牡蠣とレタスの炒め物が好評、日本風ではない本場の味付けという声。大きな円卓の個室は20名まで。注文は食券かQRコードで。カード可。',
  });
}

// ================================================================ 麺と無限の可能性 本町総本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27147813/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_men_to_mugen_no_kanosei_honmachi', name: '麺と無限の可能性 本町総本店 (Men to Mugen no Kanosei Honmachi)', category: 'OMNI',
    lat: 34.678741, lng: 135.498035, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: back fat, chashu, chicken and scallop broth.',
    hours_raw: 'Mon–Fri 11:00–15:00 and 18:00–22:00; Sat 11:00–23:00; Sun 11:00–22:00; breakfast ramen 8:00–11:00 by reservation only (Tabelog or Instagram); breaks possible, continuous-service days posted on Instagram and Google (Tabelog, staff-maintained). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['11:00', '23:00']), 6: day(['11:00', '22:00']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Bakuromachi 4-7-1, 1F — 3 min from Honmachi Stn',
    cuisine: 'Jiro-style mazesoba ¥1,050 with thick noodles, bean sprouts, crispy garlic chips and onion · spicy mazesoba ¥1,150, large 300 g · chilled soupless Jiro-style ramen ¥1,200 in summer · seasoned egg +¥150 · chicken paitan ¥950, light, with scallop broth and scallop pieces, curly egg noodles, large menma · rare chashu · extra rice ¥50 · chopped garlic and vinegar on the counter · 7 counter seats',
    website: null, gmaps: gm('麺と無限の可能性 本町総本店'), menu_url: null,
    notes: "[Ramen · Jiro-style mazesoba and a light scallop paitan by Honmachi] A tiny seven-seat counter near Honmachi, open since March 2025 and named as the brand's head shop. The mazesoba (¥1,050) is the draw: thick, chewy, wheaty noodles in a rich sauce with crunchy bean sprouts, onion and crispy garlic chips. Add chopped garlic from the counter, as it can taste flat without, and vinegar near the end; the spicy version (¥1,150, large 300 g) adds plenty of back fat, rare chashu and fried onion. In summer there is a chilled soupless Jiro-style ramen. The chicken paitan (¥950) is the opposite: light and smooth, with scallop broth, chunks of scallop, curly egg noodles and big menma; one diner found it only average. Extra rice is ¥50. Some nights there is a 10-minute wait.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 10 March 2025 (Tabelog)', background: 'Head shop of Men to Mugen no Kanosei, per its name (Tabelog, staff-maintained).', philosophy: null, specialty: 'Jiro-style mazesoba; chicken paitan.',
      anecdotes: [
        { text: '"This hearty mazesoba features thick noodles, a rich sauce, and plenty of back fat for a satisfying boost of energy." — October 2026, spicy mazesoba large (300 g).', source: R + 'B536610814/' },
        { text: '"When I think of chicken paitan, I usually imagine a rich and creamy flavor, but this soup was surprisingly light." — October 2026.', source: R + 'B537649087/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 麺と無限の可能性 本町総本店、大阪市中央区博労町4-7-1 ノバカネイチ本町御堂 1F、本町駅から徒歩3分、月〜金11:00〜15:00・18:00〜22:00、土11:00〜23:00、日11:00〜22:00、朝ラーメン8:00〜11:00(予約のみ、食べログかInstagramのDM)、中休みあり、通し営業の日はInstagramやGoogleで告知、カード・電子マネー・QR可、7席、禁煙、2025年3月10日開店。口コミ(2025年8月〜2026年10月): 味玉まぜそば1,150円、辛まぜそば1,150円+味玉150円、冷やし汁なし二郎1,200円、まぜそば1,050円、二郎系の太麺、小麦の風味ともちもち、もやし、フライドガーリック、玉ねぎ、背脂、レアチャーシュー、卓上のにんにくを入れるとおいしい、酢で味変、追い飯50円、鶏白湯950円はあっさり、帆立の出汁と帆立の身、卵の縮れ麺、大きなメンマ、しっとりしたチャーシュー、10分ほど待ち、隣の店に行列、普通という声も。',
      confidence: 'medium', sources: [TB, R + 'B536610814/', R + 'B537649087/', R + 'B511614979/', R + 'B536723090/', R + 'B537248518/', R + 'B537648178/'] },
    ramen: {
      broth_base: ['chicken', 'shellfish'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick, chewy, wheaty noodles in the mazesoba; curly egg noodles in the chicken paitan (October 2026).' },
      regional_style: ['Tokyo Jiro-kei'], sub_genre: ['mazesoba_aburasoba', 'jiro_kei', 'tori_paitan'],
      signature_bowl: 'Mazesoba, ¥1,050 (October 2026).',
      chashu: 'Rare chashu in the mazesoba; moist, tender chashu in the paitan (October 2026).',
      notable_toppings: ['crispy garlic chips', 'bean sprouts', 'back fat', 'scallop (paitan)', 'large menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Back fat; chicken and scallop broth.' },
      pantheon: 'Honmachi head shop of the Mugen no Kanosei brand: wheaty Jiro-style mazesoba, and a light scallop paitan.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536610814/', '"A rich sauce, and plenty of back fat" (mazesoba) — placed high.'],
        oiliness: [R + 'B536610814/', '"Plenty of back fat" — placed high.'],
        clarity: [R + 'B511614979/', 'Soupless mazesoba in a rich sauce — placed low.'],
        tare_strength: [R + 'B511614979/', '"The rich sauce typical of Mazesoba" — placed high.'],
        noodle_firmness: [R + 'B511614979/', '"The noodles were thick and chewy."'],
        aroma_punch: [R + 'B536610814/', '"The garlic on the table adds an extra kick" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B536610814/', R + 'B511614979/', R + 'B537649087/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter only; breakfast ramen by reservation on Tabelog or Instagram.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区博労町4-7-1 ノバカネイチ本町御堂 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区博労町四丁目7番1号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B511614979/', R + 'B536723090/', R + 'B536610814/'],
    price_note: 'Prices from August 2025–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mazesoba', '¥1,050', 'Mazesoba', 'no', 'no', 'October 2026.', 'mazesoba'),
      it('', '', 'Spicy mazesoba', '¥1,150', 'Mazesoba', 'no', 'no', 'Large 300 g available; seasoned egg +¥150; November 2025.', 'kara_mazesoba'),
      it('', '', 'Chilled soupless Jiro-style ramen', '¥1,200', 'Limited', 'no', 'no', 'Summer; July 2026.', 'hiyashi_jiro'),
      it('', '', 'Chicken paitan ramen', '¥950', 'Ramen', 'no', 'no', 'Scallop broth and scallop pieces; October 2026.', 'tori_paitan'),
      it('', '', 'Extra rice', '¥50', 'Sides', 'no', 'no', 'October 2026.', 'oimeshi'),
    ] }, {
    cuisine: '太麺、もやし、フライドガーリック、玉ねぎの二郎系まぜそば1,050円・辛まぜそば1,150円、大盛り300g・夏は冷やし汁なし二郎1,200円・味玉+150円・帆立の出汁と帆立の身、卵の縮れ麺、大きなメンマのあっさり鶏白湯950円・レアチャーシュー・追い飯50円・カウンターに刻みにんにくと酢・カウンター7席',
    neighborhood: '中央区博労町4-7-1 1F。本町駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺。',
    vegan_detail: 'ヴィーガンではありません。背脂、チャーシュー、鶏と帆立のスープ。',
    notes: '[ラーメン・本町の二郎系まぜそばとあっさり帆立鶏白湯] 本町近くのカウンター7席の小さな店で、2025年3月開店、店名にあるとおりブランドの総本店。看板はまぜそば(1,050円)で、もちもちと小麦の香る太麺に濃いたれ、シャキシャキのもやし、玉ねぎ、フライドガーリック。そのままでは物足りないので、カウンターの刻みにんにくを入れ、終盤は酢で味変を。辛まぜそば(1,150円、大盛り300g)は背脂たっぷりでレアチャーシューとフライドオニオン。夏は冷やし汁なし二郎も。鶏白湯(950円)は対照的に軽くなめらかで、帆立の出汁と帆立の身、卵の縮れ麺、大きなメンマ。普通だったという声も。追い飯は50円。夜は10分ほど待つことも。',
  });
}

save();
