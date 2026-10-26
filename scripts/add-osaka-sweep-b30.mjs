// Osaka sweep (2-mile circle around Dotonbori), batch 30 — ramen phase, nearest first (all OMNI).
// Four more stalls of Namba Ramen Ichiza (EDION Namba Honten 9F):
//   + 黒豚とんこつ金田家 (Kanadaya, Yukuhashi tonkotsu)   + らーめん 吉山商店 (Sapporo roasted-sesame miso)
//   + 麺屋政宗 (Sendai abura-soba, opened Dec 2025)       + 大阪鶏白湯 らぁ麺 みやこ (chicken paitan)
// Tabelog gives these listings one shared building point (GSI lot 2 m), so the four pins coincide.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 30);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const ADDR = '大阪府大阪市中央区難波3-2-18 エディオンなんば本店 9F';
const PIN = TB => `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目2番18号 (go) 2m; Tabelog gives several Namba Ramen Ichiza listings the same building point, so this pin coincides with its neighbours on the 9F floor; ${TODAY}`;

// ================================================================ 黒豚とんこつ金田家 なんばラーメン一座店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27111569/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kanadaya_edion_namba', name: '黒豚とんこつ金田家 なんばラーメン一座店 (Kurobuta Tonkotsu Kanadaya)', category: 'OMNI',
    lat: 34.6653, lng: 135.501687, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza, kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chashu.',
    hours_raw: 'Daily 11:00–22:00 (food L.O. 21:30) (Tabelog). No cards or e-money; QR payments accepted (Tabelog).',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Ramen Ichiza, EDION Namba Honten 9F (Namba 3-2-18)',
    cuisine: 'Kurobuta tonkotsu from Yukuhashi, Fukuoka · Kurobuta ramen ¥980 in a frothy, "cappuccino" broth · chashu ramen · B set (rice and three kara-age) ¥460 · grilled gyoza · fried rice · thin straight noodles, firmness on request · pickled mustard greens and red ginger on the table',
    website: null, gmaps: gm('金田家 なんばラーメン一座'), menu_url: null,
    notes: "[Ramen · Yukuhashi kurobuta tonkotsu on the EDION 9F ramen floor] The Namba Ramen Ichiza branch of Kanadaya, a tonkotsu shop from Yukuhashi in Fukuoka. Its Kurobuta ramen (¥980, October 2026) comes in a thick, creamy broth whipped to a fine foam that reviewers compare to a cappuccino. One reviewer credits that to kurobuta bones simmered for over 20 hours. It's rich but not funky, on thin straight noodles you can order firm. Toppings are three large charred slices of chashu, kikurage, green onion and a big sheet of nori, and pickled mustard greens and red ginger sit on the table. Add the B set (rice and three kara-age, ¥460) or grilled gyoza. One reviewer rates it thicker than Ichiran or Ippudo. It's often quiet before noon, a rare hearty tonkotsu in Namba with no line.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 June 2019 (Tabelog); the brand began in Yukuhashi, Fukuoka (reviews)', background: 'Kanadaya; reviewers have also eaten at its Yukuhashi main shop and Nishinomiya branch.', philosophy: null, specialty: 'Kurobuta tonkotsu ramen.',
      anecdotes: [
        { text: '"The surface of the broth is finely textured and beautifully foamed, resembling a cappuccino… made by simmering only the finest Kurobuta bones for over 20 hours." — September 2026.', source: R + 'B535325420/' },
        { text: '"I found it to be thicker and more delicious compared to Ichiran and Ippudo." — September 2026.', source: R + 'B535907957/' },
      ],
      japanese_sources_summary: '食べログ: 黒豚とんこつ金田家 なんばラーメン一座店、大阪市中央区難波3-2-18 エディオンなんば本店9F、06-6630-6733、予約不可、毎日11:00〜22:00(料理L.O.21:30)、カード・電子マネー不可、QR決済可、禁煙、2019年6月7日開店。2026年の口コミ(9〜10月): 福岡・行橋発祥、黒豚ら〜めん980円、Bセット(ご飯と唐揚げ3個)460円、クリーミーで泡立った濃厚スープ(カプチーノのよう、黒豚の骨だけを20時間以上炊くという説明)、細いストレート麺(硬め指定も)、チャーシュー、ねぎ、きくらげ、のり、途中で高菜と紅しょうが、チャーシュー麺と炒飯、一蘭や一風堂より濃い、焼き餃子、大きなチャーシュー3枚、日曜の昼前は空いていた、スープがもっと熱ければという声。',
      confidence: 'medium', sources: [TB, R + 'B535325420/', R + 'B536655542/', R + 'B537823112/', R + 'B535907957/', R + 'B483882920/', R + 'B415883239/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles, "almost extra thin and slightly chewy"; firmness on request (September–October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Kurobuta ramen ¥980 (October 2026).',
      chashu: 'Three large slices with a charred surface, fat and lean (October 2026).',
      notable_toppings: ['kikurage', 'green onion', 'nori', 'pickled mustard greens (table)', 'red ginger (table)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Yukuhashi\'s foamed "cappuccino" kurobuta tonkotsu, nine floors above Namba.',
      profile: { richness: 5, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B415883239/', '"The broth was creamy and frothy, rich and thick."'],
        oiliness: [R + 'B536655542/', '"Creamy and flavorful, yet the distinct tonkotsu taste isn\'t overpowering" — oil not singled out; mid-scale (inferred).'],
        clarity: [R + 'B537823112/', '"The creamy, cloudy tonkotsu broth topped with fine bubbles."'],
        tare_strength: [R + 'B536655542/', 'Not described separately — mid-scale (inferred).'],
        noodle_firmness: [R + 'B415883239/', '"Almost extra thin and slightly chewy"; firm on request (' + R + 'B483882920/).'],
        aroma_punch: [R + 'B536655542/', '"Packed with the umami of pork bones… isn\'t overpowering" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B415883239/', R + 'B535325420/', R + 'B536655542/', R + 'B537823112/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Food-court ramen floor; QR payment, no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: ADDR,
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: PIN(TB),
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536655542/', R + 'B537823112/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('黒豚ら~めん', 'kurobuta rāmen', 'Kurobuta ramen', '¥980', 'Ramen', 'no', 'no', 'October 2026.', 'kurobuta'),
      it('チャーシューメン', 'chāshūmen', 'Chashu ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'chashu'),
      it('', '', 'B set (rice and three kara-age)', '¥460', 'Sets', 'no', 'no', 'October 2026.', 'b_set'),
      it('餃子', 'gyōza', 'Grilled gyoza', '', 'Sides', 'no', 'no', 'October 2026.', 'gyoza'),
      it('炒飯', 'chāhan', 'Fried rice', '', 'Sides', 'no', 'no', 'September 2026.', 'chahan'),
    ] }, {
    cuisine: '福岡・行橋発祥の黒豚とんこつ・泡立つ「カプチーノ」のようなスープの黒豚ら〜めん980円・チャーシュー麺・Bセット(ご飯と唐揚げ3個)460円・焼き餃子・炒飯・細いストレート麺、硬さ指定可・卓上に高菜と紅しょうが',
    neighborhood: 'なんばラーメン一座、エディオンなんば本店9F(難波3-2-18)',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー。',
    notes: '[ラーメン・エディオン9Fのラーメンフロアの行橋の黒豚とんこつ] 福岡・行橋発祥のとんこつの店、金田家のなんばラーメン一座店。黒豚ら〜めん(980円、2026年10月)は、細かい泡が立つ濃厚でクリーミーなスープで、カプチーノのようという声も。黒豚の骨を20時間以上炊いているからだという口コミもあります。濃いのに臭みはなく、細いストレート麺は硬めにもできます。具は焦げ目のついた大きなチャーシュー3枚、きくらげ、ねぎ、大きなのり、卓上には高菜と紅しょうが。Bセット(ご飯と唐揚げ3個、460円)や焼き餃子もどうぞ。一蘭や一風堂より濃いという声も。昼前は空いていることが多く、なんばで並ばずに食べられる貴重なこってりとんこつ。',
  });
}

// ================================================================ らーめん 吉山商店 なんばラーメン一座店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27111588/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_yoshiyama_shoten_edion_namba', name: 'らーめん 吉山商店 なんばラーメン一座店 (Ramen Yoshiyama Shoten)', category: 'OMNI',
    lat: 34.665302, lng: 135.501687, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; miso tare not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu; seafood in the rich seafood miso.',
    hours_raw: 'Daily 11:00–22:30 (Tabelog). Cards accepted; no e-money or QR.',
    hours: ALL(day(['11:00', '22:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Ramen Ichiza, EDION Namba Honten 9F (Namba 3-2-18)',
    cuisine: 'Sapporo miso from Hokkaido · roasted-sesame miso ramen ¥1,150 · rich seafood roasted-sesame miso ¥1,030 · roasted-sesame miso with premium pork-belly chashu · negi chashu mayo rice ¥400 · seasonal limited bowls (chilled abura-soba ¥950) · yellow, medium-thick curly noodles',
    website: 'https://www.yosiyama-shouten.com/s/', gmaps: gm('吉山商店 なんばラーメン一座'), menu_url: null,
    notes: "[Ramen · Sapporo roasted-sesame miso on the EDION 9F ramen floor] The Namba Ramen Ichiza branch of Yoshiyama Shoten, a Sapporo miso shop from Hokkaido. The house bowl is the roasted-sesame miso ramen (¥1,150, September 2026): piping hot and fragrant with sesame, rich in miso yet light on the finish, on the yellow, medium-thick curly noodles of Sapporo ramen, with thick chashu. A rich-seafood version (¥1,030) adds a fish-based depth, and a premium pork-belly chashu bowl rims the bowl with roasted slices. Negi chashu mayo rice (¥400) is the side to get. One September 2026 visitor found the miso overpowering, while regulars come back for it. Limited bowls rotate (a chilled abura-soba in May).",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 June 2019 (Tabelog); a Hokkaido (Sapporo) ramen brand (reviews)', background: 'Yoshiyama Shoten (official site yosiyama-shouten.com).', philosophy: null, specialty: 'Roasted-sesame miso ramen.',
      anecdotes: [
        { text: '"The miso soup was fragrant with sesame, and the curly noodles had the perfect texture that defines Sapporo ramen." — September 2026, roasted sesame miso ramen ¥1,150.', source: R + 'B474250275/' },
        { text: '"While it\'s rich in miso flavor, it has a surprisingly light finish that makes it hard to stop sipping." — October 2026.', source: R + 'B537125866/' },
      ],
      japanese_sources_summary: '食べログ: らーめん 吉山商店 なんばラーメン一座店、大阪市中央区難波3-2-18 エディオンなんば本店9F、06-6536-8440、予約不可、毎日11:00〜22:30、カード可、電子マネー・QR不可、禁煙、2019年6月7日開店、公式 yosiyama-shouten.com。2026年の口コミ(2〜10月): 焙煎ごま味噌らーめん1,150円、ねぎチャーシューマヨ丼400円、札幌らしいちぢれ麺、厚いチャーシュー、濃厚魚介焙煎ごま味噌1,030円(のり、メンマ、ねぎ、味玉半分)、期間限定の冷やし油そば950円とねぎ肉丼350円、焙煎ごま味噌の上ばらチャーシューめん、黄色い中太ちぢれ麺、きくらげ、熱々のスープ、ごまの香り、濃い味噌なのに後味は軽い、魚介の効いたスープ、味噌が強すぎるという声。',
      confidence: 'medium', sources: [TB, R + 'B474250275/', R + 'B537125866/', R + 'B537871206/', R + 'B416680060/', R + 'B534780271/', R + 'B536569319/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['miso'], aroma_oil: ['roasted sesame'], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'curly', hydration: null, handmade: false, notes: 'Yellow, medium-thick curly Hokkaido-style noodles, chewy (October 2026).' },
      regional_style: ['Sapporo'], sub_genre: ['ramen'],
      signature_bowl: 'Roasted-sesame miso ramen ¥1,150 (September 2026).',
      chashu: 'Thick chashu; roasted pork-belly chashu on the premium bowl (October 2026).',
      notable_toppings: ['roasted sesame', 'kikurage', 'green onion', 'menma', 'seasoned egg (half)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chashu; broth base not described.' },
      pantheon: 'Sapporo roasted-sesame miso in Namba: rich miso, light finish, yellow curly noodles.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537125866/', '"Rich in miso flavor… a surprisingly light finish."'],
        oiliness: [R + 'B536569319/', '"Just the right amount of satisfying without being too greasy."'],
        clarity: [R + 'B537871206/', 'Miso broth with sesame — opaque (inferred).'],
        tare_strength: [R + 'B534780271/', '"The overly strong miso flavor overwhelmed everything" (one dissenting September 2026 review); others call it rich in miso.'],
        noodle_firmness: [R + 'B537125866/', '"The noodles are chewy and hold their own against the broth."'],
        aroma_punch: [R + 'B537871206/', '"The enticing aroma of sesame and miso wafted through the air."'],
      },
      confidence: 'medium', sources: [R + 'B474250275/', R + 'B537125866/', R + 'B537871206/', R + 'B534780271/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Food-court ramen floor.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: ADDR,
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: PIN(TB),
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B474250275/'],
    price_note: 'Prices from February–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Roasted-sesame miso ramen', '¥1,150', 'Ramen', 'no', 'no', 'September 2026.', 'goma_miso'),
      it('', '', 'Rich seafood roasted-sesame miso ramen', '¥1,030', 'Ramen', 'no', 'no', 'February 2026.', 'gyokai_miso'),
      it('', '', 'Roasted-sesame miso premium pork-belly chashu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'barachashu'),
      it('', '', 'Negi chashu mayo rice', '¥400', 'Rice', 'no', 'no', 'September 2026.', 'negi_mayo'),
      it('', '', 'Chilled abura-soba (limited)', '¥950', 'Seasonal', 'no', 'no', 'May 2026.', 'hiyashi_abura'),
    ] }, {
    cuisine: '北海道発の札幌味噌・焙煎ごま味噌らーめん1,150円・濃厚魚介焙煎ごま味噌1,030円・焙煎ごま味噌の上ばらチャーシューめん・ねぎチャーシューマヨ丼400円・期間限定の一杯(冷やし油そば950円)・黄色い中太ちぢれ麺',
    neighborhood: 'なんばラーメン一座、エディオンなんば本店9F(難波3-2-18)',
    gf_detail: 'グルテンフリーではありません。小麦の麺、味噌だれの中身は不明。',
    vegan_detail: 'ヴィーガンではありません。チャーシュー、濃厚魚介味噌には魚介。',
    notes: '[ラーメン・エディオン9Fのラーメンフロアの札幌焙煎ごま味噌] 北海道・札幌の味噌の店、吉山商店のなんばラーメン一座店。看板は焙煎ごま味噌らーめん(1,150円、2026年9月)で、熱々でごまが香り、味噌は濃いのに後味は軽く、札幌ラーメンらしい黄色い中太ちぢれ麺に厚いチャーシュー。濃厚魚介(1,030円)は魚介の深みが加わり、上ばらチャーシューめんは焼いたチャーシューが丼の縁を囲みます。サイドはねぎチャーシューマヨ丼(400円)を。2026年9月に味噌が強すぎたという人もいますが、常連はそれを目当てに通います。期間限定の一杯も替わり、5月は冷やし油そば。',
  });
}

// ================================================================ 麺屋政宗 なんばラーメン一座店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27153389/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_menya_masamune_edion_namba', name: '麺屋政宗 なんばラーメン一座店 (Menya Masamune)', category: 'OMNI',
    lat: 34.665302, lng: 135.501687, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; curry; sauces not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu and "toro meat", egg yolk, minced meat, cheese.',
    hours_raw: 'Daily 11:00–22:00 (L.O. 21:30) (Tabelog). Ticket machine. Cards, e-money and QR accepted. Kids menu (Tabelog). A free topping for following the shop on Instagram (September 2026).',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Ramen Ichiza, EDION Namba Honten 9F (Namba 3-2-18)',
    cuisine: 'Sendai abura-soba (opened December 2025) · original Sendai abura-soba ¥1,150 with melt-soft "toro" meat · G-style abura-soba with pork fat and garlic · Taiwanese mazesoba ¥1,150 · rich cheese mazesoba ¥1,200 · tsukimi abura-soba with tororo ¥950 · Date\'s salt ramen · beef-tongue curry ¥400, toro-meat rice bowl · extra meat ¥250, rice ¥100 · vinegar, chili oil, Sichuan pepper on the table',
    website: null, gmaps: gm('麺屋政宗 なんばラーメン一座'), menu_url: null,
    notes: "[Ramen · Sendai abura-soba on the EDION 9F ramen floor] An abura-soba shop from Sendai that opened on the Namba Ramen Ichiza floor in December 2025. The original Sendai abura-soba (¥1,150) is mild on its own: chewy medium-thick noodles in a light sauce, under grilled \"toro\" meat soft enough to melt, half an egg, green onion and nori. You build it yourself with the vinegar and chili oil the sign tells you to add (twice), plus pepper or Sichuan pepper. Beyond it are a punchy G-style bowl with pork fat and garlic, a Taiwanese mazesoba (¥1,150), a rich two-cheese mazesoba with egg yolk (¥1,200) and a tsukimi abura-soba with tororo (¥950). Summer brought a chilled soy-milk tantan mazesoba. There's also a clear Date's salt ramen. Mix the leftover sauce with rice (¥100), or add beef-tongue curry (¥400). Spacious, clean, counter and tables.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 December 2025 (Tabelog); main shop in Sendai (October 2026 review)', background: 'Menya Masamune; "Original Sendai Abura Soba" is its signature (reviews).', philosophy: null, specialty: 'Sendai-style abura-soba.',
      anecdotes: [
        { text: '"The sauce is light, so it has a mild flavor on its own. You can customize it to your liking with the chili oil and vinegar available on the table… The chewy medium-thick noodles provide a delightful slurp." — October 2026, original Sendai abura-soba ¥1,150.', source: R + 'B520553378/' },
        { text: '"Rich pork fat, plenty of garlic, and thick noodles! It\'s a punchy, junk-style Mazesoba." — October 2026, G-style abura-soba.', source: R + 'B526758148/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋政宗 なんばラーメン一座店、大阪市中央区難波3-2-18 エディオンなんば本店9F なんばラーメン一座、予約不可、毎日11:00〜22:00(L.O.21:30)、カード・電子マネー・QR決済可、禁煙、お子様メニューあり、2025年12月1日開店。2026年の口コミ(5〜10月): 仙台が本店、元祖仙台油そば並1,150円、肉増し250円、マヨ100円、追い飯100円、とろ肉、半熟玉子半分、ねぎ、刻みのり、タレは軽め、卓上の酢とラー油(看板どおり2回)、黒胡椒や花椒、もちもちの中太麺、G系油そば(背脂、にんにく、太麺)、台湾まぜそば1,150円、半ライス150円、にんにく100円、濃厚チーズまぜそば1,200円(大盛200円)、月見油そば950円(卵黄、とろろ)、期間限定の冷やし豆乳担々まぜそば950円、牛タンカレー400円、とろ肉丼、伊達の塩らーめん(澄んだ塩スープ)、インスタのフォローでトッピング1品無料、広く清潔な店内、カウンターとテーブル。',
      confidence: 'medium', sources: [TB, R + 'B520553378/', R + 'B526758148/', R + 'B519168705/', R + 'B536972258/', R + 'B537013350/', R + 'B536955669/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Chewy medium-thick noodles (October 2026); described as thick on the G-style and chilled bowls.' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba', 'ramen'],
      signature_bowl: 'Original Sendai abura-soba ¥1,150 (October 2026).',
      chashu: 'Grilled "toro" meat, crisp outside and melt-soft (August–October 2026).',
      notable_toppings: ['toro meat', 'egg (half) or yolk', 'green onion', 'shredded nori', 'vinegar and chili oil (table)', 'mayonnaise (+¥100)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat and egg toppings.' },
      pantheon: 'Sendai\'s abura-soba in Namba: a mild sauce you finish yourself with vinegar and chili oil, under melting toro meat.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 2, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B520553378/', 'Original bowl "has a mild flavor on its own"; the G-style is "punchy" (' + R + 'B526758148/) — mid-scale.'],
        oiliness: [R + 'B537013350/', '"I felt like I was consuming a lot of oil and salt" — mid-scale.'],
        clarity: [R + 'B520553378/', 'Soupless abura-soba — clarity does not apply; neutral mid-scale (inferred).'],
        tare_strength: [R + 'B520553378/', '"The sauce is light, so it has a mild flavor on its own."'],
        noodle_firmness: [R + 'B520553378/', '"The chewy medium-thick noodles provide a delightful slurp."'],
        aroma_punch: [R + 'B537013350/', 'Vinegar and chili oil added at the table made it "quite spicy" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B520553378/', R + 'B526758148/', R + 'B537013350/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; food-court ramen floor.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-2-18 エディオンなんば本店 9F なんばラーメン一座',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened December 2025; reviews dated September–October 2026.' },
    pin_source: PIN(TB),
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B520553378/', R + 'B519168705/'],
    price_note: 'Prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Original Sendai abura-soba (regular)', '¥1,150', 'Abura-soba', 'no', 'no', 'October 2026.', 'ganso'),
      it('', '', 'G-style abura-soba', '', 'Abura-soba', 'no', 'no', 'October 2026.', 'g_style'),
      it('', '', 'Taiwanese mazesoba', '¥1,150', 'Mazesoba', 'no', 'no', 'September 2026.', 'taiwan'),
      it('', '', 'Rich cheese mazesoba', '¥1,200', 'Mazesoba', 'no', 'no', 'August 2026.', 'cheese'),
      it('', '', 'Tsukimi abura-soba (egg yolk, tororo)', '¥950', 'Abura-soba', 'no', 'no', 'October 2026.', 'tsukimi'),
      it('', '', 'Beef-tongue curry', '¥400', 'Sides', 'no', 'no', 'July 2026.', 'gyutan_curry'),
      it('', '', 'Extra rice', '¥100', 'Sides', 'ask', 'ask', 'October 2026.', 'oimeshi'),
    ] }, {
    cuisine: '仙台の油そば(2025年12月開店)・とろける「とろ肉」の元祖仙台油そば1,150円・背脂とにんにくのG系油そば・台湾まぜそば1,150円・濃厚チーズまぜそば1,200円・とろろの月見油そば950円・伊達の塩らーめん・牛タンカレー400円、とろ肉丼・肉増し250円、追い飯100円・卓上に酢、ラー油、花椒',
    neighborhood: 'なんばラーメン一座、エディオンなんば本店9F(難波3-2-18)',
    gf_detail: 'グルテンフリーではありません。小麦の麺、カレー、たれの中身は不明。',
    vegan_detail: 'ヴィーガンではありません。チャーシューやとろ肉、卵黄、ひき肉、チーズ。',
    notes: '[ラーメン・エディオン9Fのラーメンフロアの仙台油そば] 2025年12月になんばラーメン一座に開店した仙台の油そばの店。元祖仙台油そば(1,150円)はそのままだとマイルドで、もちもちの中太麺に軽いたれ、とろけるほどやわらかい焼いた「とろ肉」、半熟玉子半分、ねぎ、のり。看板どおり酢とラー油を(2回)かけ、胡椒や花椒も足して自分で仕上げます。ほかに背脂とにんにくでパンチのあるG系、台湾まぜそば(1,150円)、卵黄と2種のチーズの濃厚チーズまぜそば(1,200円)、とろろの月見油そば(950円)。夏は冷やし豆乳担々まぜそばも。澄んだスープの伊達の塩らーめんもあります。残ったたれは追い飯(100円)で、牛タンカレー(400円)も。広く清潔で、カウンターとテーブル。',
  });
}

// ================================================================ 大阪鶏白湯 らぁ麺 みやこ なんば本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27147505/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_toripaitan_miyako_edion_namba', name: '大阪鶏白湯 らぁ麺 みやこ なんば本店 (Osaka Toripaitan Ramen Miyako)', category: 'OMNI',
    lat: 34.665302, lng: 135.501687, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based tare; kara-age, fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan broth, back fat, chashu.',
    hours_raw: 'Daily 11:00–22:00 (L.O. 21:30) (Tabelog). Cards, e-money and QR accepted. The listing sits in the POPUP Ramen space, and Tabelog warns a service fee may be added. Kids menu; strollers welcome (Tabelog).',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Ramen Ichiza, EDION Namba Honten 9F (Namba 3-2-18)',
    cuisine: 'Chicken paitan ramen · Miyako ramen ¥930 (light chicken-paitan shoyu with back fat and pepper) · spicy miso ramen ¥970 · toripaitan shio with a citrus note · rich version · meat-special ramen with three chashu · aburi chashu mayo rice set ¥430, mini fried-rice set ¥400 · thin noodles · 39 seats',
    website: 'https://popupramen.com/brand.html?held-place=2&status=now&shop-no=2', gmaps: gm('大阪鶏白湯 らぁ麺 みやこ なんば'), menu_url: null,
    notes: "[Ramen · chicken paitan on the EDION 9F ramen floor] A 39-seat chicken-paitan shop in the POPUP Ramen space of Namba Ramen Ichiza, busy from opening. The Miyako ramen (¥930, September 2026) is a light chicken-paitan shoyu with a punch of back fat and pepper on thin noodles, and one reviewer was reminded of Tenkaippin. There's a richer version, plus a spicy miso (¥970) that starts as miso and turns hotter as you stir in the garlicky chili paste. A chicken-paitan shio has a yuzu-like citrus note, and the meat-special ramen carries three kinds of house chashu. Summer brought chilled tantanmen and hiyashi chuka (¥1,100). The rice sets are cheap add-ons: aburi chashu mayo (¥430) or mini fried rice (¥400). Family-friendly, with a kids menu.",
    chef_bio: { chef_name: null, roles: [], origin: 'POPUP Ramen slot at Namba Ramen Ichiza (Tabelog; official name per the listing: 大阪鶏白湯らぁ麺 みやこ なんば本店)', background: 'POPUP Ramen brand page (popupramen.com).', philosophy: null, specialty: 'Chicken paitan ramen.',
      anecdotes: [
        { text: '"The broth was a light chicken paitan soy sauce with a punch from the back fat and pepper. The noodles were thin and curly—delicious!" — September 2026, Miyako ramen ¥930.', source: R + 'B502492264/' },
        { text: '"The bowl was filled with three types of homemade chashu… The rich chicken paitan broth was thick yet left a refreshing aftertaste." — August 2026, meat special ramen.', source: R + 'B534727183/' },
      ],
      japanese_sources_summary: '食べログ: 大阪鶏白湯 らぁ麺 みやこ なんば本店(正式名は大阪鶏白湯らぁ麺 みやこ なんば本店と記載)、大阪市中央区難波3-2-18 エディオンなんば本店9F、06-6606-9385、予約不可、毎日11:00〜22:00(L.O.21:30)、カード・電子マネー・QR決済可、POPUP Ramenはサービス料がかかる場合あり、39席、お子様メニュー・ベビーカー可。2026年の口コミ(6〜10月): みやこらぁ麺930円(あっさり鶏白湯醤油に背脂と胡椒、細いちぢれ麺)、味玉150円、炙りチャーシューマヨ丼セット430円、辛味噌らぁ麺970円とミニ炒飯セット400円(にんにくの効いた辛味噌を溶かして味変)、鶏白湯塩らぁ麺(柚子のような柑橘、意外と濃い)、肉スペシャル(自家製チャーシュー3種)、濃厚、特製唐揚げ定食プラス550円、天下一品を思わせる味という声、夏は冷やし担々麺と冷やし中華1,100円(醤油かごまのたれ)、開店15分で客が多い、カウンターとテーブル。',
      confidence: 'medium', sources: [TB, R + 'B502492264/', R + 'B534727183/', R + 'B534678342/', R + 'B534268960/', R + 'B535541961/', R + 'B536056496/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shoyu', 'shio', 'miso'], aroma_oil: ['back fat'], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'curly', hydration: null, handmade: false, notes: 'Thin noodles — "thin and curly" (September 2026), "thin and have a nice chew" (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan'],
      signature_bowl: 'Miyako ramen ¥930 (September 2026).',
      chashu: 'Three kinds of house-made chashu on the meat special (August 2026); aburi chashu on the rice bowl.',
      notable_toppings: ['back fat', 'pepper', 'seasoned egg (half; whole +¥150)', 'spicy miso'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Namba\'s chicken paitan with a back-fat punch: light, peppery, on thin curly noodles.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B502492264/', '"A light chicken paitan soy sauce"; the shio "turned out to be quite rich" (' + R + 'B534678342/) — mid-scale.'],
        oiliness: [R + 'B502492264/', '"A punch from the back fat."'],
        clarity: [R + 'B534727183/', 'Chicken paitan, "thick" — opaque but not heavy (inferred).'],
        tare_strength: [R + 'B536056496/', '"A refined taste" — mid-scale (inferred).'],
        noodle_firmness: [R + 'B502492264/', '"The noodles are thin and have a nice chew."'],
        aroma_punch: [R + 'B502492264/', 'Back fat and pepper give "a punch" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B502492264/', R + 'B534727183/', R + 'B534678342/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Food-court ramen floor; kids menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: ADDR,
    existence: { status: 'confirmed', checked: TODAY, note: 'Listed as a POPUP Ramen slot; reviews dated June–October 2026, including a regular\'s eighth visit in October 2026.' },
    pin_source: PIN(TB),
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B502492264/', R + 'B536056496/'],
    price_note: 'Prices from June–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Miyako ramen', '¥930', 'Ramen', 'no', 'no', 'September 2026.', 'miyako'),
      it('', '', 'Spicy miso ramen', '¥970', 'Ramen', 'no', 'no', 'October 2026.', 'karamiso'),
      it('', '', 'Toripaitan shio ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'shio'),
      it('', '', 'Meat special ramen (three chashu)', '', 'Ramen', 'no', 'no', 'August 2026.', 'niku'),
      it('', '', 'Seasoned egg', '¥150', 'Toppings', 'ask', 'no', 'September 2026.', 'ajitama'),
      it('', '', 'Aburi chashu mayo rice set', '¥430', 'Sets', 'no', 'no', 'September 2026.', 'mayo_don'),
      it('', '', 'Mini fried-rice set', '¥400', 'Sets', 'no', 'no', 'October 2026.', 'mini_chahan'),
    ] }, {
    cuisine: '鶏白湯らぁ麺・みやこらぁ麺930円(あっさり鶏白湯醤油に背脂と胡椒)・辛味噌らぁ麺970円・柑橘が香る鶏白湯塩・濃厚・チャーシュー3種の肉スペシャル・炙りチャーシューマヨ丼セット430円、ミニ炒飯セット400円・細麺・39席',
    neighborhood: 'なんばラーメン一座、エディオンなんば本店9F(難波3-2-18)',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースのたれ、唐揚げ、炒飯。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯スープ、背脂、チャーシュー。',
    notes: '[ラーメン・エディオン9Fのラーメンフロアの鶏白湯] なんばラーメン一座のPOPUP Ramenの枠にある39席の鶏白湯の店で、開店直後からにぎわいます。みやこらぁ麺(930円、2026年9月)はあっさりした鶏白湯醤油に背脂と胡椒のパンチ、細麺で、天下一品を思わせるという声も。濃厚版もあり、辛味噌(970円)は最初は味噌、にんにくの効いた辛味噌を溶かすと辛くなります。鶏白湯塩は柚子のような柑橘の香り、肉スペシャルは自家製チャーシュー3種。夏は冷やし担々麺と冷やし中華(1,100円)。ご飯のセットは安く、炙りチャーシューマヨ(430円)かミニ炒飯(400円)。お子様メニューもあり家族連れにも。',
  });
}

save();
