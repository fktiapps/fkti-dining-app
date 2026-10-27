// Osaka sweep (2-mile circle around Dotonbori), batch 63 — ramen phase (all OMNI).
//   + カドヤ食堂 クリスタ長堀店 (Kadoya Shokudo's tsukesoba in the Crysta Nagahori mall; pin approximate)
//   + らーめん 四恩 堀江店 (7-seat chicken shio/shoyu with cold genmaicha shio)
//   + らぁ麺や 続 (TSUZUKU — big-portion tsukemen by Nankai Namba; mixed reviews)
//   + ラーメン EBI パチ (shrimp shio and Kuromon shoyu, owner + one helper → mom_and_pop)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 63);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ カドヤ食堂 クリスタ長堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27116960/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kadoya_shokudo_crysta_nagahori', name: 'カドヤ食堂 クリスタ長堀店 (Kadoya Shokudo Kurisuta Nagahori)', category: 'OMNI',
    lat: 34.675037, lng: 135.505259, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce dip.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu, pig\'s trotters; dip not described as meat-free.',
    hours_raw: 'Daily 11:00–22:00 (L.O. 21:30); hours may change (Tabelog). Orders taken verbally (October 2026). Cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Crysta Nagahori underground mall B1F (Minamisenba 2) — near Nagahoribashi Stn',
    cuisine: 'Branch of Kadoya Shokudo · tsukesoba ¥1,550 with neatly folded high-hydration noodles, a lightly tangy, slightly sweet soy dip, plenty of chashu and menma, soup-wari to finish · chuka soba · marinated soft-boiled egg · melt-in-the-mouth pig\'s trotters with seasoned salt, garlic and doubanjiang · chashu-mayo rice ¥300 · 28 counter seats',
    website: null, gmaps: gm('カドヤ食堂 クリスタ長堀'), menu_url: null,
    notes: "[Ramen · Kadoya Shokudo's tsukesoba in the Crysta Nagahori mall] A 28-seat counter branch of the well-known Kadoya Shokudo, in the Crysta Nagahori underground mall a short walk from Nagahoribashi, open since 2020. Most reviewers order the tsukesoba (¥1,550, October 2026): neatly folded, chewy, wheaty noodles dipped in a lightly tangy, slightly sweet soy broth with generous chashu, finished with soup-wari. One diner singled out the marinated egg, and the melt-in-the-mouth pig's trotters come with seasoned salt, garlic and doubanjiang. A chashu-mayo rice is ¥300. Expect about 15 minutes for tsukemen to boil. You can usually walk in, with no time limit, though a couple of diners found the noodles softer than at the main branch.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 April 2020 (Tabelog)', background: 'Branch of the Kadoya Shokudo ramen shop; reviewers compare it with the main branch (October 2026).', philosophy: null, specialty: 'Tsukesoba.',
      anecdotes: [
        { text: '"I noticed a pleasantly chewy texture due to the higher water content… when I dipped it into the sauce, I found it to be a slightly sweet soy sauce broth that I could eat endlessly." — October 2026, tsukemen and pig\'s trotters.', source: R + 'B537559667/' },
        { text: '"The noodles feel softer and thinner compared to what I had at the main branch… The dipping sauce is addictively tasty." — October 2026, tsukesoba ¥1,550, chashu mayo ¥300.', source: R + 'B537747635/' },
      ],
      japanese_sources_summary: '食べログ: カドヤ食堂 クリスタ長堀店、大阪市中央区南船場2 クリスタ長堀B1F、長堀橋駅から114m、毎日11:00〜22:00(L.O.21:30)、カード・電子マネー・QR可、28席(カウンター)、禁煙、2020年4月1日開店。口コミ(2026年10月): つけ麺の酸味、スープが濃い、本店ほどの感動はないがおいしい、味玉が絶品、待たずに入れて時間制限なし、つけそば、艶のある麺、有名店の支店、口頭で注文、とろとろの豚足(塩・にんにく・豆板醤)、加水率の高いもちもちの麺、少し甘い醤油のつけ汁、チャーシューたっぷり、大盛り、15分ほどかかる、小麦の風味、スープ割り、つけそば1,550円、チャーシューマヨ300円、本店より麺がやわらかく細いという声。',
      confidence: 'medium', sources: [TB, R + 'B537559667/', R + 'B537747635/', R + 'B537111600/', R + 'B537289311/', R + 'B537493717/', R + 'B537637096/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: 'high', handmade: false, notes: 'High-hydration, chewy, wheaty noodles (October 2026); one diner found them softer and thinner than at the main branch.' },
      regional_style: [], sub_genre: ['tsukemen', 'chuka soba'],
      signature_bowl: 'Tsukesoba, ¥1,550 (October 2026).',
      chashu: 'Generous (October 2026).',
      notable_toppings: ['ajitama', 'menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chashu.' },
      pantheon: 'Nagahori\'s underground Kadoya: high-hydration noodles in a lightly tangy, slightly sweet soy dip.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537637096/', '"The dipping sauce is light yet tangy"; "quite rich" to another (B537111600) — mid-scale.'],
        oiliness: [R + 'B537637096/', '"Light" — placed low.'],
        clarity: [R + 'B537559667/', 'No comment on clarity — mid-scale.'],
        tare_strength: [R + 'B537559667/', '"A slightly sweet soy sauce broth" — mid-scale.'],
        noodle_firmness: [R + 'B537559667/', '"Pleasantly chewy" vs "softer" (B537747635) — mid-scale.'],
        aroma_punch: [R + 'B537637096/', '"A strong flavor of wheat" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537559667/', R + 'B537637096/', R + 'B537747635/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order verbally at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区南船場2 クリスタ長堀 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI resolves the underground-mall address only to 大阪府大阪市中央区南船場二丁目 (chōme, 166m), so the pin is approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537747635/', R + 'B537559667/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tsukesoba', '¥1,550', 'Tsukemen', 'no', 'no', 'October 2026.', 'tsukesoba'),
      it('', '', 'Chuka soba', '', 'Ramen', 'no', 'no', 'October 2026.', 'chuka'),
      it('', '', 'Pig\'s trotters', '', 'Sides', 'ask', 'no', 'October 2026.', 'tonsoku'),
      it('', '', 'Chashu-mayo rice', '¥300', 'Rice', 'no', 'no', 'October 2026.', 'chashu_mayo'),
    ] }, {
    cuisine: 'カドヤ食堂の支店・つけそば1,550円(きれいに揃えた加水率の高い麺、ほのかな酸味と甘みの醤油のつけ汁、たっぷりのチャーシューとメンマ、締めにスープ割り)・中華そば・味玉・塩、にんにく、豆板醤で食べるとろとろの豚足・チャーシューマヨ300円・カウンター28席',
    neighborhood: 'クリスタ長堀B1F(南船場2)。長堀橋駅の近く',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のつけ汁。',
    vegan_detail: 'ヴィーガンではありません。チャーシュー、豚足、つけ汁の中身は不明。',
    notes: '[ラーメン・クリスタ長堀のカドヤ食堂のつけそば] 長堀橋駅から歩いてすぐのクリスタ長堀の地下街にある、有名店カドヤ食堂の支店で、カウンター28席、2020年開店。頼む人が多いのはつけそば(1,550円、2026年10月)で、きれいに揃えたもちもちで小麦の香る麺を、ほのかな酸味と甘みのある醤油のつけ汁に。チャーシューもたっぷり、最後はスープ割りで。味玉が絶品という声も。とろとろの豚足は塩、にんにく、豆板醤で。チャーシューマヨは300円。つけ麺は茹で時間で15分ほど。待たずに入れて時間制限もない一方、本店より麺がやわらかかったという声も。',
  });
}

// ================================================================ らーめん 四恩 堀江店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27125492/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '15:00'], ['18:00', '20:30']), F = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_ramen_shion_horie', name: 'らーめん 四恩 堀江店 (Ramen Shion Horie)', category: 'OMNI',
    lat: 34.674424, lng: 135.496645, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth, chicken chashu; fish powder on the aemen.',
    hours_raw: 'Mon–Thu 11:30–15:00 and 18:00–20:30; Fri–Sat 11:30–15:00 and 18:00–22:00; closed Sunday; hours may change (Tabelog). Fri–Sat evenings from 18:00 add a small izakaya service, "Chocotto Izakaya" (September 2026). Ticket machine. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kitahorie 1-6-4, Nishi — beside Yotsubashi Stn',
    cuisine: 'Chicken ramen · clean chicken shoyu and shio, flat thin high-hydration noodles · limited cold genmaicha shio ramen ¥1,050 with chicken chashu, broccoli, cherry tomato, white onion and arare · cold yuzu shio ¥1,050 · ajitama ¥150 · mini rice with nori and wasabi ¥100 to finish as tea porridge · aemen (extra noodles with diced chashu and fish powder) ¥400 · small izakaya plates Fri–Sat evenings · 7 counter seats',
    website: null, gmaps: gm('らーめん 四恩 堀江'), menu_url: null,
    notes: "[Ramen · a 7-seat chicken ramen counter by Yotsubashi] A seven-seat counter right by Yotsubashi Station, open since 2021, with a straightforward, high-quality chicken broth: no citrus or aroma oils, gentle salt, the chicken's sweetness up front. The shoyu is balanced and very drinkable, over flat, thin, smooth noodles. A standout is the limited cold genmaicha shio ramen (¥1,050, September–October 2026), roasted brown-rice tea in a chilled salt broth with chicken chashu, broccoli, cherry tomato and rice crackers. Finish with the ¥100 mini rice and wasabi poured over as tea porridge. A cold yuzu shio has appeared too, and the ¥400 aemen adds a second serving of noodles with diced chashu and fish powder. On Friday and Saturday evenings a small izakaya service adds drinks and plates. Cash only; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 September 2021 (Tabelog)', background: 'Horie branch of Ramen Shion (Tabelog).', philosophy: null, specialty: 'Chicken shio and shoyu; cold genmaicha shio.',
      anecdotes: [
        { text: '"The chicken broth was straightforward, without any citrus or aromatic oils. The saltiness was gentle yet not too subtle, bringing out the sweetness of the chicken in a high-quality bowl." — September 2026.', source: R + 'B535288022/' },
        { text: '"The soup is made with cold genmaicha, and the saltiness is just right, complementing the delicious flavor of the tea." — September 2026, cold genmaicha shio ramen ¥1,050, ajitama ¥150, mini rice ¥100.', source: R + 'B453272625/' },
      ],
      japanese_sources_summary: '食べログ: らーめん 四恩 堀江店、大阪市西区北堀江1-6-4、四ツ橋駅から19m、月〜木11:30〜15:00・18:00〜20:30、金・土11:30〜15:00・18:00〜22:00、日曜休み、カード・電子マネー・QR不可、7席(カウンター)、禁煙、2021年9月29日開店。口コミ(2026年8〜10月): 限定の冷やし玄米茶塩ラーメン1,050円、味玉150円、ミニライス100円(刻み海苔とわさび、お茶漬けに)、自家製麺、白ねぎ、メンマ、ブロッコリー、鶏チャーシュー、金・土の18時から「Chocotto Izakaya」、冷やし柚子塩1,050円、和え麺400円(細麺、角切りチャーシュー、海苔、玉ねぎ、魚粉、たれ)、昆布酢、ミニトマト、あられ、中太ストレート麺、鶏の醤油ラーメンはバランスがいい、キャッシュレス不可、柑橘や香味油のないまっすぐな鶏スープ、やや平たい細麺で加水率が高い、券売機。',
      confidence: 'medium', sources: [TB, R + 'B535288022/', R + 'B453272625/', R + 'B531780635/', R + 'B504281776/', R + 'B535164174/', R + 'B536873987/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'flat', hydration: 'high', handmade: false, notes: 'Slightly flat, thin, high-hydration noodles (September 2026); medium-thick straight on the cold bowl (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Chicken shio/shoyu; limited cold genmaicha shio ramen ¥1,050 (September–October 2026).',
      chashu: 'Moist chicken chashu (October 2026).',
      notable_toppings: ['broccoli', 'arare', 'cherry tomato', 'ajitama'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Yotsubashi\'s clean chicken counter, and the cold genmaicha shio you finish as tea porridge.',
      profile: { richness: 2, oiliness: 1, clarity: 4, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B531780635/', '"The light broth was delicious!" — placed low.'],
        oiliness: [R + 'B535288022/', '"Without any citrus or aromatic oils."'],
        clarity: [R + 'B535288022/', 'A straightforward chicken broth — placed high.'],
        tare_strength: [R + 'B535288022/', '"The saltiness was gentle yet not too subtle."'],
        noodle_firmness: [R + 'B536873987/', '"Firm" on the cold bowl; "smooth" (B535288022) — mid-scale.'],
        aroma_punch: [R + 'B536873987/', '"The unique roasted aroma of the brown rice tea" — placed low-mid.'],
      },
      confidence: 'medium', sources: [R + 'B535288022/', R + 'B531780635/', R + 'B536873987/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-6-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目6番4号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B453272625/', R + 'B504281776/', R + 'B531780635/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Cold genmaicha shio ramen (limited)', '¥1,050', 'Limited', 'no', 'no', 'September–October 2026.', 'genmaicha'),
      it('', '', 'Cold yuzu shio ramen (limited)', '¥1,050', 'Limited', 'no', 'no', 'September 2026.', 'yuzu_shio'),
      it('', '', 'Chicken shoyu ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'shoyu'),
      it('', '', 'Ajitama', '¥150', 'Toppings', 'ask', 'no', 'September 2026.', 'ajitama'),
      it('', '', 'Mini rice with nori and wasabi', '¥100', 'Rice', 'ask', 'ask', 'September–October 2026.', 'mini_rice'),
      it('', '', 'Aemen (extra noodles)', '¥400', 'Mazesoba', 'no', 'no', 'September–October 2026.', 'aemen'),
    ] }, {
    cuisine: '鶏のラーメン・澄んだ鶏の醤油と塩、やや平たい細麺で加水率高め・限定の冷やし玄米茶塩ラーメン1,050円(鶏チャーシュー、ブロッコリー、ミニトマト、白ねぎ、あられ)・冷やし柚子塩1,050円・味玉150円・お茶漬けにするミニライス(海苔とわさび)100円・和え麺(角切りチャーシューと魚粉の替え麺)400円・金・土の夜は小さな居酒屋営業・カウンター7席',
    neighborhood: '西区北堀江1-6-4。四ツ橋駅のすぐそば',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏のスープ、鶏チャーシュー、和え麺に魚粉。',
    notes: '[ラーメン・四ツ橋駅そばの7席の鶏ラーメン] 四ツ橋駅のすぐそばにあるカウンター7席の店で、2021年開店。スープは柑橘も香味油も使わないまっすぐで上質な鶏で、塩気はやさしく、鶏の甘みが前に出ます。醤油はバランスがよく飲み干したくなる味で、やや平たいなめらかな細麺。名物は限定の冷やし玄米茶塩ラーメン(1,050円、2026年9〜10月)で、冷たい塩スープに香ばしい玄米茶、鶏チャーシュー、ブロッコリー、ミニトマト、あられ。最後は100円のミニライスにわさびをのせ、スープをかけてお茶漬けに。冷やし柚子塩の限定もあり、400円の和え麺は角切りチャーシューと魚粉の2杯目の麺。金・土の夜は小さな居酒屋営業で酒とつまみも。現金のみ、日曜定休。',
  });
}

// ================================================================ らぁ麺や 続
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27129725/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '22:00']);
  put({
    id: 'osaka_raamenya_tsuzuku_namba', name: 'らぁ麺や 続 (TSUZUKU)', category: 'OMNI',
    lat: 34.662912, lng: 135.504169, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based dip.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood broth, chashu.',
    hours_raw: 'Mon, Tue and Thu–Sun 11:30–22:00; closed Wednesday; hours may change (Tabelog). Ticket machine outside; self-service water (August 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nambanaka 2-1-12, Naniwa — south of Nankai Namba Stn',
    cuisine: 'Tsukemen and ramen · tsukemen ¥980 with a big portion (450 g mentioned) of flat noodles, extra servings available · light soy-based dip with seafood umami, soup-wari to finish · chashu ramen, large available · medium-thick straight noodles · extra green onion · counter seats',
    website: null, gmaps: gm('らぁ麺や 続 難波中'), menu_url: null,
    notes: "[Ramen · big-portion tsukemen south of Nankai Namba] A counter-only tsukemen and ramen shop south of Nankai Namba, open since 2022 in a space that once held a well-known tsukemen shop. Portions are the draw: the tsukemen (¥980, July 2026) comes with a big pile of flat, wheaty noodles, and a double portion is possible. The dip is soy-based, light and seafood-forward, and you can finish with soup-wari; one big eater found there wasn't enough dip for all the noodles. The chashu ramen has a light, well-balanced seafood broth on chewy medium-thick straight noodles, with good chashu. Reviews are mixed: one diner found the broth fishy and bitter, another called it unremarkable. Buy a ticket outside; cash only. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 May 2022 (Tabelog)', background: 'Occupies a space previously home to another tsukemen shop (August 2026 reviews).', philosophy: null, specialty: 'Big-portion tsukemen.',
      anecdotes: [
        { text: '"I ordered the standard Tsukemen (JPY 980). I was a bit worried since it came with 450g of noodles, but I managed to finish it all deliciously." — July 2026.', source: R + 'B531860298/' },
        { text: '"The broth might be a bit light for those who prefer a richer flavor, but it has a well-balanced taste with a strong umami from seafood." — August 2026, chashu ramen (large).', source: R + 'B534253348/' },
      ],
      japanese_sources_summary: '食べログ: らぁ麺や 続、大阪市浪速区難波中2-1-12、なんば駅から228m、月・火・木〜日11:30〜22:00、水曜休み、カード・電子マネー・QR不可、禁煙、2022年5月18日開店。口コミ(2026年7〜10月): つけ麺980円、麺450gでもさっぱり食べられた、以前のつけ麺店から変わった、特徴のないつけ麺という声、チャーシュー麺大(2玉)、カウンターのみ、店外の券売機、セルフの水、あっさりめで魚介の旨みが強いスープ、中太ストレート麺、チャーシューもおいしい、ねぎ、つけ麺2玉とねぎ増し、平打ち麺で小麦の風味、醤油ベースのあっさりしたつけ汁、スープ割り、大盛りでつけ汁が足りない、魚くささと苦みが強かったという声。',
      confidence: 'low', sources: [TB, R + 'B531860298/', R + 'B534253348/', R + 'B534302893/', R + 'B533002512/', R + 'B537462367/', R + 'B537552196/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'flat', hydration: null, handmade: false, notes: 'Flat, wheaty noodles for the tsukemen; medium-thick straight for the ramen (August 2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen'],
      signature_bowl: 'Tsukemen, ¥980 (July 2026).',
      chashu: 'Praised on the chashu ramen (August 2026).',
      notable_toppings: ['green onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Seafood broth.' },
      pantheon: 'South Namba\'s big-portion tsukemen: a light seafood-soy dip for a mountain of flat noodles.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B534253348/', '"Might be a bit light for those who prefer a richer flavor."'],
        oiliness: [R + 'B531860298/', '"A refreshing bowl" — placed low.'],
        clarity: [R + 'B534253348/', 'No comment on clarity — mid-scale.'],
        tare_strength: [R + 'B534302893/', '"Soy sauce-based and on the lighter side"; "overwhelmingly strong" to one diner (B537552196) — mid-scale.'],
        noodle_firmness: [R + 'B534253348/', '"Medium-thick, straight, and have a nice chewiness" — mid-scale.'],
        aroma_punch: [R + 'B534253348/', '"A strong umami from seafood" — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B534253348/', R + 'B534302893/', R + 'B537552196/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine outside; cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-1-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目1番12号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531860298/', R + 'B534253348/'],
    price_note: 'One price from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tsukemen', '¥980', 'Tsukemen', 'no', 'no', 'July 2026.', 'tsuke'),
      it('', '', 'Chashu ramen (large)', '', 'Ramen', 'no', 'no', 'August 2026.', 'chashu_men'),
      it('', '', 'Extra green onion', '', 'Toppings', 'ask', 'vegan', 'August 2026.', 'negi'),
    ] }, {
    cuisine: 'つけ麺とラーメン・つけ麺980円は平打ち麺がたっぷり(450gという声)、2玉も可・魚介の旨みのあっさりした醤油のつけ汁、締めにスープ割り・チャーシュー麺、大盛りも・中太ストレート麺・ねぎ増し・カウンター席',
    neighborhood: '浪速区難波中2-1-12。南海なんば駅の南',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のつけ汁。',
    vegan_detail: 'ヴィーガンではありません。魚介のスープ、チャーシュー。',
    notes: '[ラーメン・なんば南のたっぷりつけ麺] 南海なんば駅の南にあるカウンターだけのつけ麺とラーメンの店で、2022年開店、以前は有名なつけ麺店があった場所。魅力は量で、つけ麺(980円、2026年7月)は小麦の香る平打ち麺がたっぷり、2玉も頼めます。つけ汁は醤油ベースのあっさりした魚介系で、最後はスープ割りに。大盛りではつけ汁が足りなかったという大食いの声も。チャーシュー麺はあっさりとバランスのいい魚介のスープに、もちもちの中太ストレート麺、チャーシューもおいしい。評価は分かれ、魚くさく苦みがあったという人や、特徴がないという人も。食券は店外の券売機で、現金のみ。水曜定休。',
  });
}

// ================================================================ ラーメン EBI パチ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27129635/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ramen_ebi_pachi_kuromon', name: 'ラーメン EBI パチ (Ramen EBI Pachi)', category: 'OMNI',
    lat: 34.664535, lng: 135.507154, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles (Ayahikari flour); wontons; blended soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and pork-bone broth, shrimp and scallop, chashu.',
    hours_raw: 'Daily 11:00–14:30 and 17:30–22:00; closed irregularly, and one diner found it closed several times (Tabelog; May 2026). Order verbally, pay after the meal; self-service water (May 2026). Short lines at weekend lunch. Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:00', '14:30'], ['17:30', '22:00'])), hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nippombashi 2-12-23 — by Kuromon Market, near Kintetsu Nippombashi Stn',
    cuisine: 'Shrimp ramen with a light touch · ebi shio ramen ¥950 · special ebi shio ¥1,350 · Kiwami Kuromon shoyu ¥1,350 · ebi shoyu, ebi miso, Kuromon chicken paitan and spicy paitan · clear chicken-bone broth with a sweet-shrimp sauce, or chicken and pork bones with shrimp and scallop under blended soy · medium-thin curly noodles from Ayahikari flour (Mie) · choose your chashu: thick pork belly, pork shoulder or fatty beef · wontons, bean sprouts, a hint of yuzu · 9 counter seats',
    website: null, gmaps: gm('ラーメン EBI パチ 日本橋'), menu_url: null,
    notes: "[Ramen · light shrimp ramen by Kuromon Market] A nine-seat counter on the Nippombashi 2-chōme street by Kuromon Market, marked by stall-style plastic curtains, run by the owner with one helper and open since 2022. Unlike the thick shrimp-miso style, the ebi shio here is light and gentle: a clear chicken-bone broth with a sauce from sweet shrimp, and the shrimp flavor hits from the first sip. It's ¥950, or ¥1,350 as the special (May and October 2026) with two wontons, bean sprouts and a hint of yuzu. You pick your chashu from thick pork belly, pork shoulder or fatty beef. The Kiwami Kuromon shoyu layers several soy sauces over chicken, pork, shrimp and scallop, with medium-thin noodles from Mie's Ayahikari flour; one diner found the soy drowned the shrimp. Most customers are visitors, and there's a short line at weekend lunch. Pay after eating, in cash.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 April 2022 (Tabelog)', background: 'Run by the owner with one helper (May 2026 review).', philosophy: 'A light, gentle take on shrimp ramen (May 2026 review).', specialty: 'Ebi shio ramen.',
      anecdotes: [
        { text: '"A clear broth made from chicken bones with a seafood base (a shrimp sauce extracted from sweet shrimp)… the delightful flavor and gentle umami of the shrimp spread across my palate." — May 2026, special ebi shio ramen ¥1,350.', source: R + 'B528398010/' },
        { text: '"Typically, these are rich and thick, often using shrimp miso. However, here, the flavor is light and gentle." — May 2026, shio ramen with shrimp ¥950.', source: R + 'B528071931/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン EBI パチ、大阪市中央区日本橋2-12-23、近鉄日本橋駅から275m、毎日11:00〜14:30・17:30〜22:00、不定休、カード・電子マネー・QR不可、禁煙、カウンター席、2022年4月29日開店。口コミ(2026年2〜10月): 観光客が多い、後払い、極み黒門醤油ラーメン1,350円、チャーシューは厚切り豚バラ・豚肩・牛の脂身から選べる、鶏ガラと豚骨に海老と帆立、数種の醤油を合わせたたれ、醤油が強く海老が感じにくいという声、三重のAyahikariの中細麺、大きなワンタン、黒門市場の近く、特製海老塩、セルフの水、カウンターのみ、澄んだスープ、何度か閉まっていた、海老の風味、黒門の日本橋2丁目の通り、ビニールののれん、海老塩950円、あっさりでやさしい味、特製海老塩1,350円、甘海老のエキス、中細ちぢれ麺、もやし、柚子、メニュー(海老塩、海老醤油、黒門醤油、黒門鶏白湯、黒門辛鶏白湯、海老味噌)、卓上に胡椒・七味・ごま・酢、カウンター9席、店主とスタッフの2人。',
      confidence: 'medium', sources: [TB, R + 'B528398010/', R + 'B528071931/', R + 'B522612509/', R + 'B523614760/', R + 'B527399276/', R + 'B537759699/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium-thin', shape: 'curly', hydration: null, handmade: false, notes: 'Medium-thin curly, chewy noodles from Ayahikari flour (February–May 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Special ebi shio ramen, ¥1,350 (May and October 2026).',
      chashu: 'Choice of thick pork belly, pork shoulder or fatty beef (February–May 2026).',
      notable_toppings: ['wontons', 'bean sprouts', 'yuzu', 'ajitama'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and shrimp broth.' },
      pantheon: 'Kuromon\'s gentle shrimp shio: a clear chicken broth with sweet-shrimp essence and your pick of three chashu.',
      profile: { richness: 2, oiliness: 3, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B528071931/', '"The flavor is light and gentle."'],
        oiliness: [R + 'B528398010/', '"The seasoning was slightly rich in both oil and salt" — mid-scale.'],
        clarity: [R + 'B523614760/', '"The broth was clear and soothing."'],
        tare_strength: [R + 'B537759699/', '"The saltiness was mild and smooth" — mid-scale.'],
        noodle_firmness: [R + 'B528398010/', '"A chewy texture and a soft mouthfeel" — mid-scale.'],
        aroma_punch: [R + 'B527399276/', '"The flavor of the shrimp hit me hard."'],
      },
      confidence: 'medium', sources: [R + 'B528398010/', R + 'B528071931/', R + 'B527399276/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order verbally; pay after eating; many overseas guests.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋2-12-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated February–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋二丁目12番23号 (go) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528071931/', R + 'B528398010/', R + 'B522612509/'],
    price_note: 'Prices from February–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ebi shio ramen', '¥950', 'Ramen', 'no', 'no', 'May 2026.', 'ebi_shio'),
      it('', '', 'Special ebi shio ramen', '¥1,350', 'Ramen', 'no', 'no', 'May and October 2026.', 'tokusei'),
      it('', '', 'Kiwami Kuromon shoyu ramen', '¥1,350', 'Ramen', 'no', 'no', 'February 2026.', 'kuromon_shoyu'),
      it('', '', 'Ebi miso ramen', '', 'Ramen', 'no', 'no', 'May 2026 menu.', 'ebi_miso'),
      it('', '', 'Kuromon chicken paitan ramen', '', 'Ramen', 'no', 'no', 'May 2026 menu.', 'paitan'),
    ] }, {
    cuisine: 'あっさりした海老のラーメン・海老塩950円・特製海老塩1,350円・極み黒門醤油1,350円・海老醤油、海老味噌、黒門鶏白湯、辛鶏白湯・甘海老のエキスの澄んだ鶏ガラスープ、または鶏ガラと豚骨に海老と帆立と数種の醤油・三重のAyahikariの中細ちぢれ麺・チャーシューは厚切り豚バラ、豚肩、牛の脂身から選べる・ワンタン、もやし、ほのかな柚子・カウンター9席',
    neighborhood: '日本橋2-12-23。黒門市場のそば、近鉄日本橋駅の近く',
    gf_detail: 'グルテンフリーではありません。小麦の麺(Ayahikari)、ワンタン、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラと豚骨のスープ、海老と帆立、チャーシュー。',
    notes: '[ラーメン・黒門市場そばのやさしい海老ラーメン] 黒門市場そば、日本橋2丁目の通りにある、屋台のようなビニールののれんが目印のカウンター9席の店で、店主とスタッフの2人で営み、2022年開店。濃厚な海老味噌系とは違い、ここの海老塩はあっさりやさしく、甘海老のエキスを合わせた澄んだ鶏ガラスープで、ひと口目から海老の風味が広がります。950円、特製なら1,350円(2026年5月・10月)で、ワンタン2つ、もやし、ほのかな柚子。チャーシューは厚切り豚バラ、豚肩、牛の脂身から選べます。極み黒門醤油は鶏と豚骨、海老と帆立に数種の醤油を重ね、三重のAyahikariの中細麺で。醤油が強く海老が感じにくかったという人も。客の多くは海外から、週末の昼は少し並びます。支払いは食後に現金で。',
  });
}

save();
