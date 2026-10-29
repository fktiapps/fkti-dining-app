// Osaka sweep (2-mile circle around Dotonbori), batch 155 — ramen mini-batch (ramen-genre listings surfacing past 1.1 km).
//   + らぁ麺 晴れルヤ (chicken paitan ramen, back-fat shoyu and mazesoba; Daikokucho)
//   + ヌードルヤ MEーCHAーKUーCHA (one-person shop of tom yum noodles and porcini salt ramen; Shinmachi) — mom
//   + 好 (chashu-heavy shio/shoyu/miso ramen and mixed noodles; Zaimokucho)
//   + 油そば A (¥500 abura-soba with free weekly toppings and a wall of condiments; Minami-Honmachi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 155);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ らぁ麺 晴れルヤ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27145968/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:00'], ['18:00', '22:30']); const WE = day(['11:00', '22:30']);
  put({
    id: 'osaka_raamen_hareruya_daikokucho', name: 'らぁ麺 晴れルヤ (Raa Men Hareruya)', category: 'OMNI',
    lat: 34.655078, lng: 135.497393, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy and miso tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan and pork back-fat broths; chashu.',
    hours_raw: 'Mon–Fri 11:00–15:00 (last order 14:30) and 18:00–22:30 (last order 22:15); Sat, Sun and public holidays 11:00–22:30 (Tabelog). Opened 22 November 2024 (Tabelog). E-money and QR (PayPay) accepted; no cards (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Daikokucho 1-1-13, Fujimoto Bldg 1F — right by Daikokucho Stn exit 5',
    cuisine: 'Ramen · chicken paitan ramen, rich and frothy; special version with grilled chashu, steamed chicken, seasoned egg and red onion · chicken paitan miso (e.g. braised egg miso ramen ¥1,300) with minced meat and chili threads · back-fat shoyu ramen with thin tip menma · mazesoba ¥1,250 with a rice bowl of aburi chashu; special garlic mazesoba · half black fried rice · 12 seats: 8 at the counter, a table for 4',
    website: null, gmaps: gm('らぁ麺 晴れルヤ'), menu_url: null,
    notes: "[Ramen · rich chicken paitan by Daikokucho Station] A friendly ramen shop seconds from Daikokucho Station, open since late 2024 with a table for four as well as the counter. The signature is a rich, frothy chicken paitan; the special bowl adds grilled chashu, steamed chicken, an egg and red onion. The paitan also comes as a miso ramen, light enough to finish, and there's a back-fat shoyu with thin tip menma that is lighter than it looks. The mazesoba (¥1,250) comes with a rice bowl of aburi chashu. One diner found the miso broth lukewarm. Open all day at weekends.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 November 2024 in a former ramen-shop site (Tabelog; January 2025 review).', background: 'Ramen shop (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Chicken paitan ramen; mazesoba.',
      anecdotes: [
        { text: '"From the moment it arrived, the frothy broth caught my eye, and with the first sip, I was met with an incredibly rich and creamy flavor packed with chicken essence!" — October 2026, Special Chicken Paitan Ramen.', source: R + 'B536759186/' },
        { text: '"The broth, rich with back fat, surprisingly isn\'t too heavy and has a refreshing quality." — October 2026, Back Fat Shoyu Ramen.', source: R + 'B537313512/' },
      ],
      japanese_sources_summary: '食べログ: らぁ麺 晴れルヤ、大阪市浪速区大国町1-1-13 藤元ビル 1F、大国町駅5番出口すぐ、月〜金 11:00〜15:00 (L.O. 14:30)・18:00〜22:30 (L.O. 22:15)、土・日・祝 11:00〜22:30、2024年11月22日開店、電子マネー・QR (PayPay) 可、カード不可、12席 (カウンター8、4名テーブル1)。口コミ(2025年1月〜2026年10月): 濃厚で泡立つ鶏白湯のラーメン、特製は炙りチャーシュー、蒸し鶏、味玉、紫玉ねぎ、鶏白湯の味噌 (煮玉子の味噌ラーメン1,300円、ひき肉と糸唐辛子)、背脂の醤油ラーメンと細い穂先メンマ、まぜそば1,250円 (炙りチャーシューのご飯つき)、特製のにんにくのまぜそば、半分の黒チャーハン、気さくな店の人、スープがぬるかったという声。',
      confidence: 'medium', sources: [TB, R + 'B498558156/', R + 'B535140728/', R + 'B536759186/', R + 'B537313512/', R + 'B537852205/', R + 'B537928375/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shio', 'miso', 'shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Straight, slightly firm noodles for the paitan; chewy noodles for the mazesoba (2025–2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan', 'mazesoba_aburasoba'],
      signature_bowl: 'Special chicken paitan ramen (October 2026).',
      chashu: 'Grilled chashu and steamed chicken on the special bowl; aburi chashu on the mazesoba rice (October 2026).',
      notable_toppings: ['steamed chicken', 'seasoned egg', 'red onion', 'tip menma', 'back fat'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and pork broths.' },
      pantheon: 'Daikokucho\'s frothy chicken paitan, with a back-fat shoyu for contrast.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536759186/', '"an incredibly rich and creamy flavor packed with chicken essence" — high.'],
        oiliness: [R + 'B537313512/', '"rich with back fat, surprisingly isn\'t too heavy" — mid-scale.'],
        clarity: [R + 'B536759186/', '"the frothy broth" — a paitan, placed low.'],
        tare_strength: [R + 'B537928375/', '"I felt the miso flavor was a bit weak at first, but it intensified when mixed" — mid-scale.'],
        noodle_firmness: [R + 'B498558156/', '"the noodles were straight and slightly firm" — mid-scale.'],
        aroma_punch: [R + 'B537928375/', '"chili and shredded chili making a strong impression" on the miso bowl — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B536759186/', R + 'B537313512/', R + 'B537928375/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Table for four as well as the counter (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区大国町1-1-13 藤元ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI geocoded only to ward level (210m), so the Tabelog point is kept — consistent with the listing's "right near Exit 5 of Daikokucho Station"; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537928375/', R + 'B537852205/', R + 'B535140728/'],
    price_note: 'Prices from September–October 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Special chicken paitan ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'special'),
      it('', '', 'Chicken paitan miso ramen', '¥1,150', 'Ramen', 'no', 'no', 'September 2026.', 'miso'),
      it('', '', 'Braised egg miso ramen', '¥1,300', 'Ramen', 'no', 'no', 'October 2026.', 'miso_egg'),
      it('', '', 'Back-fat shoyu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'seabura'),
      it('', '', 'Mazesoba with aburi chashu rice', '¥1,250', 'Mazesoba', 'no', 'no', 'October 2026.', 'mazesoba'),
    ] }, {
    cuisine: 'ラーメン・濃厚で泡立つ鶏白湯のラーメン、特製は炙りチャーシュー、蒸し鶏、味玉、紫玉ねぎ・鶏白湯の味噌 (たとえば煮玉子の味噌ラーメン1,300円) にひき肉と糸唐辛子・細い穂先メンマの背脂の醤油ラーメン・炙りチャーシューのご飯つきのまぜそば1,250円、特製のにんにくのまぜそば・半分の黒チャーハン・12席: カウンター8席、4名テーブル1',
    neighborhood: '浪速区大国町1-1-13 藤元ビル 1F。大国町駅5番出口すぐ',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油と味噌のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯と豚の背脂のスープ、チャーシュー。',
    notes: '[ラーメン・大国町駅すぐの濃厚な鶏白湯] 大国町駅から数秒の気さくなラーメン店で、2024年末の開店、カウンターのほかに4名のテーブルも。看板は濃厚で泡立つ鶏白湯で、特製は炙りチャーシュー、蒸し鶏、玉子、紫玉ねぎつき。鶏白湯は味噌ラーメンにもなり、飲み干せる軽さ。見た目より軽い背脂の醤油には細い穂先メンマ。まぜそば (1,250円) には炙りチャーシューのご飯がつく。味噌のスープがぬるかったという声も。週末は通し営業。',
  });
}

// ================================================================ ヌードルヤ MEーCHAーKUーCHA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27078102/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00']);
  put({
    id: 'osaka_noodleya_mechakucha_shinmachi', name: 'ヌードルヤ MEーCHAーKUーCHA (Noodleya ME-CHA-KU-CHA)', category: 'OMNI',
    lat: 34.677629, lng: 135.489602, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based tare in several bowls.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and meat broths.',
    hours_raw: 'Mon–Sat 11:30–15:00; closed Sun and public holidays; occasional unexpected closures (Tabelog; September 2026). Cash only; the ticket machine takes coins and older ¥1,000 notes, so bring change (March 2026). Drinks offered to people queuing in summer (August 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shinmachi 3-9-9 — about 8 min from Nishi-Nagahori Stn',
    cuisine: 'Inventive ramen · Tom Yum Noodles ¥990: creamy, tangy and spicy, heaped with cilantro, on straight noodles · porcini mushroom salt ramen · dan dan noodles · sudachi soy sauce ramen · tsukemen · daily rice bowls, e.g. chicken teriyaki, chashu, green curry · natural seasonings rather than chemical ones (one diner) · 8 counter seats',
    website: null, gmaps: gm('ヌードルヤ MEーCHAーKUーCHA'), menu_url: null,
    notes: "[Ramen · tom yum noodles and porcini ramen, Shinmachi] A one-person, eight-seat lunch shop in western Shinmachi with ramen unlike anywhere else. The Tom Yum Noodles (¥990) are the draw: creamy, sour, spicy and savory at once, with a mound of cilantro over straight noodles. The porcini mushroom salt ramen has its own fans, and there are dan dan noodles, a sudachi shoyu ramen and tsukemen. Add a small green curry or rice bowl. Cash only, and the ticket machine wants coins or older ¥1,000 notes, so bring change. Lunch only; closed Sundays, with the odd surprise closure.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Ramen shop run by one person (Tabelog; 2025–2026 reviews).', philosophy: 'Uses natural seasonings rather than chemical ones (August 2026 review).', specialty: 'Tom yum noodles; porcini salt ramen.',
      anecdotes: [
        { text: '"The balance of sourness, spiciness, and umami is exquisite… The stimulating spiciness of chili, refreshing acidity reminiscent of lemon and lime, and the deep umami from seafood and meat broth harmonize perfectly." — March 2026, Tom Yum Noodles.', source: R + 'B524546517/' },
        { text: '"I was skeptical about combining Porcini with ramen, but I truly fell in love with it." — April 2025.', source: R + 'B506935675/' },
      ],
      japanese_sources_summary: '食べログ: ヌードルヤ MEーCHAーKUーCHA、大阪市西区新町3-9-9、西長堀駅から約8分、月〜土 11:30〜15:00、日・祝休み、カード・電子マネー・QR不可、カウンター8席。口コミ(2025年4月〜2026年9月): ひとりで営む店、トムヤムのヌードル990円 (クリーミーで酸っぱく辛い、パクチーたっぷり、ストレート麺)、ポルチーニの塩ラーメン、担々麺、sudachi 醤油ラーメン、つけ麺、日替わりのご飯 (チキン照り焼き丼、チャーシュー丼、グリーンカレー)、化学調味料を使わないという声、券売機は硬貨と旧千円札、行列にはドリンクのサービス、急に休むこともある。',
      confidence: 'medium', sources: [TB, R + 'B506935675/', R + 'B524098430/', R + 'B524546517/', R + 'B525381498/', R + 'B534417021/', R + 'B534457279/'] },
    ramen: {
      broth_base: ['gyokai', 'other'], broth_texture: 'paitan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Straight noodles (March 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tantanmen', 'tsukemen'],
      signature_bowl: 'Tom Yum Noodles, ¥990 (March 2026).',
      chashu: 'Chashu rice bowl on some days (March 2026).',
      notable_toppings: ['cilantro', 'porcini', 'sudachi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Seafood and meat broth.' },
      pantheon: 'Shinmachi\'s tom yum ramen, creamy and sour under a heap of cilantro.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 4, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B524546517/', '"Enjoy a rich and creamy texture" — mid-scale.'],
        oiliness: [R + 'B524098430/', '"incredibly creamy with a mild tanginess" — creaminess rather than oil, placed low.'],
        clarity: [R + 'B524546517/', 'A creamy tom yum soup — placed low.'],
        tare_strength: [R + 'B524546517/', '"The balance of sourness, spiciness, and umami is exquisite" — placed high.'],
        noodle_firmness: [R + 'B524098430/', '"The straight noodles were absolutely delicious!" — mid-scale (no firmness stated).'],
        aroma_punch: [R + 'B506935675/', '"The aroma of Porcini is just amazing!"; tom yum with heaped cilantro — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B524546517/', R + 'B524098430/', R + 'B506935675/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; bring coins (March 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区新町3-9-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町三丁目9番9号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525381498/', R + 'B524098430/'],
    price_note: 'Price from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tom Yum Noodles', '¥990', 'Ramen', 'no', 'no', 'March 2026.', 'tomyum'),
      it('', '', 'Porcini mushroom salt ramen', '', 'Ramen', 'no', 'no', 'March 2026.', 'porcini'),
      it('', '', 'Dan dan noodles', '', 'Ramen', 'no', 'no', 'March 2026.', 'dandan'),
      it('', '', 'Sudachi soy sauce ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'sudachi'),
      it('', '', 'Small green curry (daily rice)', '', 'Rice', 'ask', 'no', 'March 2026.', 'green_curry'),
    ] }, {
    cuisine: '個性的なラーメン・トムヤムのヌードル990円: クリーミーで酸っぱく辛く、パクチーたっぷり、ストレート麺・ポルチーニの塩ラーメン・担々麺・sudachi の醤油ラーメン・つけ麺・日替わりのご飯 (チキン照り焼き丼、チャーシュー丼、グリーンカレーなど)・化学調味料を使わないという声・カウンター8席',
    neighborhood: '西区新町3-9-9。西長堀駅から約8分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、いくつかの丼に醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。魚介と肉のスープ。',
    notes: '[ラーメン・新町、トムヤムのヌードルとポルチーニのラーメン] 新町の西寄り、ひとりで営む8席の昼だけの店で、ほかにないラーメン。目当てはトムヤムのヌードル (990円): クリーミーで酸っぱく辛く、うまみもあり、ストレート麺にパクチーが山盛り。ポルチーニの塩ラーメンにもファンがいて、担々麺、sudachi の醤油ラーメン、つけ麺も。小さなグリーンカレーやご飯ものも足せる。現金のみ、券売機は硬貨か旧千円札なので小銭の用意を。昼のみ、日曜休み、急に休むことも。',
  });
}

// ================================================================ 好
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27150102/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '21:00']);
  put({
    id: 'osaka_hao_zaimokucho', name: '好 (Hao)', category: 'OMNI',
    lat: 34.679195, lng: 135.511646, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza; soy and miso tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu-centred bowls and meat broth.',
    hours_raw: 'Mon–Sat 11:00–21:00; closed Sun (Tabelog). Cash only (Tabelog). Under a new owner (September 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Zaimokucho 2-10 — about 5 min from Matsuyamachi Stn',
    cuisine: 'Old-style ramen · chashu ramen ¥1,200–1,300 with about five thick, tender slices, in shio, shoyu or miso · miso ramen with vegetables · Harapeko Kizuna-men ¥1,100: mixed noodles with chopped chashu and green onion, a ginger soup on the side · Stamina Ramen · summer cold noodles with green onion and chashu ¥1,000 (mayonnaise optional) · special gyoza ¥400 · small rice with kimchi; chashu rice bowl · chashu to take away · table garlic, spicy miso, vinegar, chili oil · 8 seats',
    website: null, gmaps: gm('好'), menu_url: null,
    notes: "[Ramen · a chashu-heavy neighborhood ramen shop, Zaimokucho] A small, old-fashioned ramen counter near Matsuyamachi, now under a new owner and busy even mid-afternoon. The draw is chashu: the chashu ramen (¥1,200–1,300) carries about five thick, tender slices over thin, soft noodles, in shio, shoyu or miso, with garlic and spicy miso on the counter to sharpen it. For something different, the Harapeko Kizuna-men is a bowl of mixed noodles with chopped chashu and green onion; mix it from the bottom, then add vinegar and chili oil as the owner suggests. The garlic-chive gyoza are worth adding. One diner found the broth lukewarm. Cash only; open all day; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Taken over by a new owner (September 2026 review).', background: 'Neighborhood ramen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Chashu ramen; mixed noodles.',
      anecdotes: [
        { text: '"This chashu ramen comes topped with about five large, tender slices of chashu. You can choose from salt, soy sauce, or miso broth." — October 2026, Chashu Ramen Shoyu ¥1,300.', source: R + 'B536600721/' },
        { text: '"The owner recommended mixing it well from the bottom of the bowl before eating, and suggested adding vinegar or chili oil to enhance the flavor." — October 2026, Harapeko Kizuna-men.', source: R + 'B535392054/' },
      ],
      japanese_sources_summary: '食べログ: 好、大阪市中央区材木町2-10、松屋町駅から約5分、月〜土 11:00〜21:00、日曜休み、現金のみ、8席。口コミ(2026年8〜10月): 新しい店主に代わった昔ながらのラーメン店、昼過ぎも混む、チャーシュー麺1,200〜1,300円 (厚くやわらかいチャーシュー5枚ほど、塩・醤油・味噌から)、野菜たっぷりの味噌ラーメン、はらぺこ絆麺1,100円 (刻みチャーシューとねぎの混ぜ麺、生姜のスープつき、底から混ぜて酢とラー油を)、スタミナラーメン、夏限定のねぎとチャーシューの冷やし中華1,000円 (マヨネーズは抜ける)、特製餃子400円、キムチつきの小ライス、チャーシュー丼、チャーシューの持ち帰り、卓上ににんにく・辛味噌・酢・ラー油、細くやわらかい麺、スープがぬるかったという声。',
      confidence: 'medium', sources: [TB, R + 'B533477771/', R + 'B534417845/', R + 'B535392054/', R + 'B536136677/', R + 'B536199425/', R + 'B536600721/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shio', 'shoyu', 'miso'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin, soft noodles (September 2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Chashu ramen, ¥1,200–1,300, shio, shoyu or miso (September–October 2026).',
      chashu: 'About five thick, large, tender slices on the chashu ramen; chopped chashu on the Kizuna-men (2026).',
      notable_toppings: ['chashu', 'green onion', 'vegetables', 'garlic', 'spicy miso'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat broth and chashu.' },
      pantheon: 'Zaimokucho\'s chashu ramen, five thick slices deep, in your choice of tare.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 2, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B536600721/', '"At first, I thought the broth was light, but as I continued eating, I found it to be quite flavorful" — low-mid.'],
        oiliness: [R + 'B534417845/', '"The light and vegetable-rich Miso Ramen" — low.'],
        clarity: [R + 'B536136677/', '"The broth has a simple yet rich flavor" — mid-scale (no cloudiness stated).'],
        tare_strength: [R + 'B536600721/', '"quite flavorful" as you eat — mid-scale.'],
        noodle_firmness: [R + 'B536136677/', '"The noodles are thin and soft" — low.'],
        aroma_punch: [R + 'B536136677/', 'Garlic and spicy miso on the table "for an extra kick" — low-mid on its own.'],
      },
      confidence: 'medium', sources: [R + 'B536600721/', R + 'B536136677/', R + 'B534417845/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Owner explains how to mix and season the noodles (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区材木町2-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区材木町2番10号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536600721/', R + 'B536136677/', R + 'B535392054/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chashu ramen (shoyu)', '¥1,300', 'Ramen', 'no', 'no', 'October 2026.', 'chashu_shoyu'),
      it('', '', 'Chashu ramen (miso)', '¥1,200', 'Ramen', 'no', 'no', 'September 2026.', 'chashu_miso'),
      it('はらぺこ絆麺', '', 'Harapeko Kizuna-men (mixed noodles with chashu and green onion)', '¥1,100', 'Noodles', 'no', 'no', 'October 2026.', 'kizuna'),
      it('', '', 'Special gyoza', '¥400', 'Sides', 'no', 'no', 'October 2026.', 'gyoza'),
      it('', '', 'Cold noodles with green onion and chashu (summer)', '¥1,000', 'Noodles', 'no', 'no', 'September 2026; summer only.', 'hiyashi'),
    ] }, {
    cuisine: '昔ながらのラーメン・チャーシュー麺1,200〜1,300円、厚くやわらかいチャーシュー5枚ほど、塩・醤油・味噌から・野菜たっぷりの味噌ラーメン・はらぺこ絆麺1,100円: 刻みチャーシューとねぎの混ぜ麺、生姜のスープつき・スタミナラーメン・夏はねぎとチャーシューの冷やし中華1,000円 (マヨネーズは抜ける)・特製餃子400円・キムチつきの小ライス、チャーシュー丼・チャーシューの持ち帰り・卓上ににんにく、辛味噌、酢、ラー油・8席',
    neighborhood: '中央区材木町2-10。松屋町駅から約5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子、醤油と味噌のたれ。',
    vegan_detail: 'ヴィーガンではありません。チャーシューが中心で肉のスープ。',
    notes: '[ラーメン・材木町、チャーシューたっぷりの町のラーメン店] 松屋町近くの昔ながらの小さなラーメン店で、新しい店主に代わり、昼過ぎも混んでいる。主役はチャーシュー: チャーシュー麺 (1,200〜1,300円) は厚くやわらかいチャーシューが5枚ほど、細くやわらかい麺で、塩・醤油・味噌から選び、卓上のにんにくや辛味噌で味を締めて。気分を変えるならはらぺこ絆麺、刻みチャーシューとねぎの混ぜ麺で、底から混ぜてから店主のすすめどおり酢とラー油を。ニラの香る餃子もぜひ。スープがぬるかったという声も。現金のみ、通し営業、日曜休み。',
  });
}

// ================================================================ 油そば A
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27119435/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '16:00'], ['18:00', '23:59']);
  put({
    id: 'osaka_aburasoba_a_minamihonmachi', name: '油そば A (Abura-soba A)', category: 'OMNI',
    lat: 34.68229, lng: 135.504147, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based tare; tenkasu and crispy-noodle toppings.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu topping; tonkotsu ramen; the tare is not described — ask.',
    hours_raw: 'Mon–Fri 11:00–16:00 and 18:00–24:00; last noodle orders 10 minutes before closing; closed Sat, Sun and public holidays (Tabelog). Cards, e-money and QR accepted (Tabelog). Fills up at noon (2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minami-Honmachi 2-6-8 — 3–4 min from Sakaisuji-Honmachi Stn',
    cuisine: 'Abura-soba · simple abura-soba from about ¥500 (150 g, noodles and nori) · all-toppings version with chashu, menma, seasoned egg and nori · medium or thick noodles; regular, large or double (300 g) · soy sauce or tantan flavor · rich tonkotsu ramen · free weekly toppings, e.g. green onion, onion, fried onion or crispy noodles; tenkasu · table condiments: Sichuan chili sauce, grated garlic, chili oil, vinegar, shichimi, curry powder · rice · 8 seats',
    website: null, gmaps: gm('油そば A'), menu_url: null,
    notes: "[Abura-soba · cheap abura-soba with a wall of condiments, Minami-Honmachi] A tiny eight-seat abura-soba shop near Sakaisuji-Honmachi where a simple bowl starts around ¥500. Choose medium or thick noodles and a size up to a 300 g double, go simple or all toppings (chashu, menma, egg, nori), soy sauce or tantan, then build it yourself: free weekly toppings like green onion, onion and crispy noodles, plus tenkasu, Sichuan chili sauce, garlic, chili oil, vinegar and even curry powder. The sweet-spicy tare is lighter than you'd expect. Friendly owner. Open until midnight on weekdays; closed weekends.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Abura-soba shop (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Abura-soba.',
      anecdotes: [
        { text: '"The sauce at the bottom was sweet and spicy, but surprisingly not too heavy, making it easy to enjoy." — August 2025, soy sauce abura-soba, all toppings.', source: R + 'B512523814/' },
        { text: '"…adding vinegar and curry powder halfway through enhanced the flavor so much that I couldn\'t stop eating." — October 2026, tantan abura-soba.', source: R + 'B537023711/' },
      ],
      japanese_sources_summary: '食べログ: 油そば A、大阪市中央区南本町2-6-8、堺筋本町駅から徒歩3〜4分、月〜金 11:00〜16:00・18:00〜24:00 (麺のラストオーダーは閉店10分前)、土・日・祝休み、カード・電子マネー・QR可、8席。口コミ(2025年7月〜2026年10月): シンプルな油そば約500円から (150g、麺と海苔)、全部のせ (チャーシュー、メンマ、味玉、海苔)、中太麺か太麺、並・大・ダブル (300g)、醤油か担々、濃厚とんこつラーメン、週替わりの無料トッピング (ねぎ、玉ねぎ、フライドオニオンや揚げ麺)、tenkasu、卓上に花椒の辣醤、おろしにんにく、ラー油、酢、七味、カレー粉、ご飯、甘辛いたれは重くない、気さくな店主、昼は満席に。',
      confidence: 'medium', sources: [TB, R + 'B512523814/', R + 'B517881689/', R + 'B522941938/', R + 'B523639012/', R + 'B523654615/', R + 'B537023711/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thick', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thick or thick, chewy noodles; sizes up to a 300 g double (2025–2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba', 'ramen'],
      signature_bowl: 'Abura-soba, all toppings, from about ¥500 simple (2025–2026).',
      chashu: 'Chashu on the all-toppings bowl (August 2025).',
      notable_toppings: ['menma', 'seasoned egg', 'nori', 'green onion', 'onion', 'crispy noodles', 'tenkasu'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chashu; tare not described.' },
      pantheon: 'Honmachi\'s ¥500 abura-soba, built at the counter from a wall of free toppings and condiments.',
      profile: { richness: 3, oiliness: 4, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B523654615/', '"The broth was soy sauce-based and not overly rich" — mid-scale.'],
        oiliness: [R + 'B512523814/', 'Abura-soba (oil noodles) with chili oil added at the table — placed high for the style.'],
        clarity: [R + 'B512523814/', 'A brothless bowl with sauce at the bottom — placed low.'],
        tare_strength: [R + 'B512523814/', '"The sauce at the bottom was sweet and spicy, but surprisingly not too heavy" — mid-scale.'],
        noodle_firmness: [R + 'B537023711/', '"The noodles were chewy and satisfying" — placed high.'],
        aroma_punch: [R + 'B512523814/', '"Sichuan pepper chili sauce and grated garlic enhanced the flavor without making it too spicy" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B512523814/', R + 'B523654615/', R + 'B537023711/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly owner; self-serve toppings (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南本町2-6-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南本町二丁目6番8号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523639012/', R + 'B522941938/'],
    price_note: 'Prices from July 2025 and February 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Simple abura-soba, 150 g', '¥500', 'Abura-soba', 'no', 'no', 'July 2025; ¥500–600 (February 2026).', 'simple'),
      it('', '', 'Abura-soba, all toppings', '', 'Abura-soba', 'no', 'no', 'August 2025.', 'zenbu'),
      it('', '', 'Tantan abura-soba', '', 'Abura-soba', 'no', 'no', 'October 2026.', 'tantan'),
      it('', '', 'Rich tonkotsu ramen', '', 'Ramen', 'no', 'no', 'May 2026.', 'tonkotsu'),
    ] }, {
    cuisine: '油そば・シンプルな油そば約500円から (150g、麺と海苔)・全部のせはチャーシュー、メンマ、味玉、海苔・中太麺か太麺、並・大・ダブル (300g)・醤油か担々・濃厚とんこつラーメン・週替わりの無料トッピング (ねぎ、玉ねぎ、フライドオニオンや揚げ麺など)、tenkasu・卓上に花椒の辣醤、おろしにんにく、ラー油、酢、七味、カレー粉・ご飯・8席',
    neighborhood: '中央区南本町2-6-8。堺筋本町駅から徒歩3〜4分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、tenkasuや揚げ麺のトッピング。',
    vegan_detail: 'ヴィーガンではありません。チャーシュー、とんこつラーメン、たれの材料は不明なので確認を。',
    notes: '[油そば・南本町、調味料がずらりと並ぶ安い油そば] 堺筋本町近くの8席の小さな油そばの店で、シンプルな一杯なら500円ほどから。中太麺か太麺、ダブル (300g) までのサイズ、シンプルか全部のせ (チャーシュー、メンマ、玉子、海苔)、醤油か担々を選び、あとは自分で仕上げる: 週替わりの無料トッピング (ねぎ、玉ねぎ、揚げ麺など)、tenkasu、花椒の辣醤、にんにく、ラー油、酢、カレー粉まで。甘辛いたれは思ったより軽い。気さくな店主。平日は深夜0時まで、土日休み。',
  });
}

save();
