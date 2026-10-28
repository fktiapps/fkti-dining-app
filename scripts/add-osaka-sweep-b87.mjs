// Osaka sweep (2-mile circle around Dotonbori), batch 87 — ramen phase (all OMNI).
//   + 中華蕎麦 葛 (Tabelog Ramen OSAKA 100 2023–2025; foamy chicken-and-bonito dashi soba ¥690; Honmachi/Awaza)
//   + ラーメンスタンド メン ボックス (chicken-and-pork shoyu and shio, house noodles; Sakaisuji-Honmachi)
//   + ラーメン荘 歴史を刻め 日本橋店 (Jiro-style with long lines; dry ramen; by Ebisucho)
//   + つけ麺 雀 夕陽丘店 (spicy shrimp-miso tsukemen; second branch of the Amemura shop)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 87);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 中華蕎麦 葛
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27087256/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '16:00']);
  put({
    id: 'osaka_chuka_soba_kazura_awaza', name: '中華蕎麦 葛 (Chuka Soba Kazura)', category: 'OMNI',
    lat: 34.681366, lng: 135.494999, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles; soy sauce tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and katsuobushi broth, chashu.',
    hours_raw: '11:00 (doors around 10:45)–16:00; closed Fridays; New Year closures announced on the listing; hours may change (Tabelog). Cards and QR accepted; no e-money (Tabelog). Three waiting chairs outside (October 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Awaza 1-12-21, 1F (Nishi-ku) — 1–2 min from Honmachi Stn exit 23',
    cuisine: 'Tabelog Ramen OSAKA 100 (2023, 2024, 2025) · dashi soba ¥690: frothy chicken paitan with katsuobushi, shoyu tare of Aichi soy sauces · premium toppings +¥150 for extra chashu and a seasoned egg · house-made medium straight noodles · moist, smoky chashu and egg · cold soba with roast-pork rice bowl set under ¥1,000 · pepper and yuzu kosho on the counter · 9 counter seats',
    website: null, gmaps: gm('中華蕎麦 葛 阿波座'), menu_url: null,
    notes: "[Ramen · a Tabelog 100 frothy chicken dashi soba for under ¥700] A nine-seat counter a minute from Honmachi exit 23, open since 2015 and picked for Tabelog's Ramen OSAKA 100 in 2023, 2024 and 2025, famous for big quality at a small price. The dashi soba (¥690 in October 2026) is a foamy, espuma-style chicken paitan with katsuobushi; one diner found bonito flakes settled at the bottom and stirred them in. It's creamy yet not heavy, seasoned with Aichi soy sauces. House-made medium straight noodles are smooth and chewy, and the chashu and egg have a smoky edge. Premium toppings add extra chashu and a seasoned egg for ¥150; a cold soba with roast-pork rice bowl comes in under ¥1,000. Diners report lines of five to eight and 10- to 15-minute waits at lunch, with chairs outside; bowls arrive in about five minutes, and rice can sell out. Lunch only; closed Fridays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 August 2015 (Tabelog)', background: 'Ramen counter; Tabelog Ramen OSAKA 100 2023, 2024 and 2025.', philosophy: null, specialty: 'Dashi soba (frothy chicken and bonito).',
      anecdotes: [
        { text: '"The broth is made from chicken and katsuobushi (dried bonito), creating a slightly thick soy sauce soup… resulting in a creamy, bubbly texture with a rich and refined taste! The noodles are homemade, with a medium thickness and straight shape." — October 2026, dashi soba ¥690.', source: R + 'B115248225/' },
        { text: '"As I continued eating, I discovered what seemed to be katsuobushi (dried bonito flakes) settled at the bottom of the bowl. By mixing it in well, the umami of the seafood added depth to the flavor." — October 2026, dashi soba with premium toppings.', source: R + 'B538156991/' },
      ],
      japanese_sources_summary: '食べログ: 中華蕎麦 葛、大阪市西区阿波座1-12-21 喜多ビル 1F、本町駅23番出口から徒歩1分、11:00(10:45頃)〜16:00、金曜定休、年末年始休業の告知あり、カード・QR可、電子マネー不可、9席、2015年8月25日開店、食べログ ラーメン OSAKA 百名店2023・2024・2025。口コミ(2025年6月〜2026年10月): だし蕎麦690円(開店時550円)、鶏と鰹節のややとろみのある醤油スープ、愛知の宝山の濃口・再仕込み醤油のたれ、泡立つクリーミーな口当たり、自家製の中太ストレート麺、しっとりしたチャーシュー、卓上に胡椒と柚子胡椒、平日昼に7人ほど15分待ち、冷やしとローストポーク丼のセットが1,000円以下、エスプーマ系、特製トッピング+150円でチャーシュー増しと味玉、提供5分ほど、祝日10:30に一番乗り、外に待ち椅子3脚、土曜14時過ぎでも5人ほど、麺の量が多い、クリーミーだが重くない、12:30に8人ほど、ご飯ものは売り切れ、底に鰹節、味玉とチャーシューは燻製の香り。',
      confidence: 'medium', sources: [TB, R + 'B115248225/', R + 'B538156991/', R + 'B509270033/', R + 'B537108254/', R + 'B537316571/', R + 'B537822254/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: true, notes: 'House-made medium straight noodles, chewy and firm (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan'],
      signature_bowl: 'Dashi soba, ¥690 (October 2026); premium toppings +¥150.',
      chashu: 'Moist, well-seasoned chashu with a smoky flavor (October 2026).',
      notable_toppings: ['smoked seasoned egg', 'katsuobushi', 'yuzu kosho (table)'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Chicken and bonito broth.' },
      pantheon: 'Honmachi\'s Tabelog 100 bargain: a frothy chicken-and-bonito dashi soba for ¥690.',
      profile: { richness: 3, oiliness: 2, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537822254/', '"The broth was creamy yet not too heavy" — mid-scale.'],
        oiliness: [R + 'B537316571/', '"Light and fluffy broth with rich chicken flavor" — placed low.'],
        clarity: [R + 'B115248225/', '"A creamy, bubbly texture" — placed low.'],
        tare_strength: [R + 'B115248225/', '"Perfectly balances the savory aroma of soy sauce" — mid-scale.'],
        noodle_firmness: [R + 'B115248225/', '"A chewy and firm texture."'],
        aroma_punch: [R + 'B538156991/', 'Katsuobushi at the bottom "added depth" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B115248225/', R + 'B538156991/', R + 'B537822254/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Line outside with chairs; quick service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区阿波座1-12-21 喜多ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current with 2025–26 New Year closures; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区阿波座一丁目12番21号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B115248225/', R + 'B509270033/', R + 'B537822254/'],
    price_note: 'Prices from June 2025–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Dashi soba', '¥690', 'Ramen', 'no', 'no', 'October 2026.', 'dashi_soba'),
      it('', '', 'Premium toppings (extra chashu, seasoned egg)', '+¥150', 'Toppings', 'no', 'no', 'June 2025.', 'tokusei'),
      it('', '', 'Cold soba with roast-pork rice bowl set', '', 'Sets', 'no', 'no', 'Under ¥1,000; October 2026.', 'hiyashi_set'),
    ] }, {
    cuisine: '食べログ ラーメン OSAKA 百名店(2023、2024、2025)・だし蕎麦690円: 鰹節の効いた泡立つ鶏白湯、愛知の醤油のたれ・特製トッピング+150円でチャーシュー増しと味玉・自家製の中太ストレート麺・しっとりして燻製香のあるチャーシューと卵・冷やしとローストポーク丼のセットは1,000円以下・卓上に胡椒と柚子胡椒・カウンター9席',
    neighborhood: '西区阿波座1-12-21 1F。本町駅23番出口から徒歩1〜2分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏と鰹節のスープ、チャーシュー。',
    notes: '[ラーメン・700円以下の百名店、泡立つ鶏だし蕎麦] 本町駅23番出口から1分のカウンター9席の店で、2015年開店、食べログのラーメン OSAKA 百名店に2023、2024、2025年と選ばれ、安くて質が高いことで知られる。だし蕎麦(2026年10月690円)はエスプーマ系の泡立つ鶏白湯に鰹節、底に沈んだ鰹節を混ぜるとよいという声。クリーミーだが重くなく、愛知の醤油で味付け。自家製の中太ストレート麺はなめらかでもちもち、チャーシューと卵には燻製の香り。特製トッピングは150円でチャーシュー増しと味玉、冷やしとローストポーク丼のセットも1,000円以下。昼は5〜8人ほど並び10〜15分待ったという声が多く、外に椅子あり。提供は5分ほど、ご飯ものは売り切れることも。昼のみ、金曜定休。',
  });
}

// ================================================================ ラーメンスタンド メン ボックス
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27114636/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:30'], ['18:00', '22:00']);
  put({
    id: 'osaka_ramen_stand_men_box_honmachi', name: 'ラーメンスタンド メン ボックス (Ramen Stand MEN BOX)', category: 'OMNI',
    lat: 34.681028, lng: 135.507265, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles; soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and pork broth, chashu.',
    hours_raw: 'Mon–Sat 11:00–14:30 and 18:00–22:00; closed Sundays; hours may change (Tabelog). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kyutaromachi 1-9-6, 1F — 1 min from Sakaisuji-Hommachi Stn exit 6',
    cuisine: 'Chicken-and-pork shoyu ramen ¥1,000 with house-made straight noodles, two slices of thin chashu, menma, chopped white leek and mitsuba · chicken-and-pork shio, large ¥1,100 · chicken shio and chicken shoyu · mazesoba · lunchtime rice in any size for ¥100 · "Devil\'s Garlic", pickled garlic and mayonnaise, and spicy garlic chives on the table · 7 counter seats, 3 tables',
    website: null, gmaps: gm('メン ボックス 久太郎町'), menu_url: null,
    notes: "[Ramen · chicken-and-pork shoyu with house noodles by Sakaisuji-Honmachi] A lively little ramen stand a minute from Sakaisuji-Hommachi, open since 2019, busy with local workers, with hip-hop on the speakers and energetic, attentive staff. The chicken-and-pork shoyu (¥1,000) is the standard: house-made straight noodles, chewy and smooth, in a well-balanced soy broth, with thin chashu, menma, chopped white leek and mitsuba. Shio fans can have the chicken-and-pork shio (large ¥1,100), and there are chicken-only shio and shoyu bowls and a mazesoba. At lunch rice is ¥100 in any size; pair it with the table's \"Devil's Garlic\", or pickled garlic and mayonnaise, and there are spicy garlic chives too. One diner found it a bit salty. Cash only; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 November 2019 (Tabelog)', background: 'Ramen stand (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Chicken-and-pork shoyu ramen.',
      anecdotes: [
        { text: '"The noodles have a wonderful texture, being both chewy and smooth, with great flavor. The rich umami of the chicken and pork combines perfectly with the expertly balanced soy sauce flavor in the broth." — October 2026, chicken-and-pork shoyu ¥1,000.', source: R + 'B536636920/' },
        { text: '"The homemade straight noodles pair perfectly with the broth… With two slices of chashu, menma, plenty of chopped white onions, and mitsuba, the combination is delightful… The pickled garlic and mayonnaise are truly devilish." — October 2026.', source: R + 'B537108493/' },
      ],
      japanese_sources_summary: '食べログ: ラーメンスタンド メン ボックス、大阪市中央区久太郎町1-9-6 1F、堺筋本町駅6番出口から徒歩1分、月〜土11:00〜14:30・18:00〜22:00、日曜定休、カード・電子マネー・QR不可、15席(カウンター7、2人掛け2卓、4人掛け1卓)、禁煙、2019年11月20日開店。口コミ(2026年9〜10月): 鶏豚塩ラーメン大盛り1,100円、卓上の辛いニラ、鶏豚醤油ラーメン1,000円、もちもちでなめらかな麺、鶏と豚の旨味と醤油のバランス、薄切りのチャーシュー、金曜13時半で8割の入り、スタッフの雰囲気がよい、ヒップホップのBGM、少ししょっぱいという声、自家製のストレート麺、チャーシュー2枚、メンマ、刻み白ねぎ、三つ葉、元気で丁寧な接客、昼はご飯のサイズを選べて100円、にんにく漬けとマヨネーズ、鶏塩と鶏醤油、まぜそば、地元の会社員でにぎやか、悪魔のにんにく。',
      confidence: 'medium', sources: [TB, R + 'B536636920/', R + 'B537108493/', R + 'B535824331/', R + 'B536658180/', R + 'B537562373/', R + 'B537763648/'] },
    ramen: {
      broth_base: ['chicken', 'pork'], broth_texture: 'unknown', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: 'straight', hydration: null, handmade: true, notes: 'House-made straight noodles, chewy and smooth (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Chicken-and-pork shoyu ramen, ¥1,000 (October 2026).',
      chashu: 'Two thin slices (October 2026).',
      notable_toppings: ['chopped white leek', 'mitsuba', 'menma', '"Devil\'s Garlic" (table)', 'spicy garlic chives (table)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and pork broth.' },
      pantheon: 'Sakaisuji-Honmachi\'s hip-hop ramen stand: balanced chicken-and-pork shoyu on house noodles.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536636920/', '"The rich umami of the chicken and pork" — mid-scale.'],
        oiliness: [R + 'B537562373/', '"The aftertaste is just right" — mid-scale.'],
        clarity: [R + 'B536636920/', 'Soy broth that lets "the deliciousness of the noodles" show — mid-scale.'],
        tare_strength: [R + 'B536658180/', '"A bit on the salty side" — placed high.'],
        noodle_firmness: [R + 'B536636920/', '"Both chewy and smooth" — mid-scale.'],
        aroma_punch: [R + 'B537562373/', '"The white leeks and mitsuba add a refreshing touch" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B536636920/', R + 'B537108493/', R + 'B536658180/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Energetic, attentive staff (October 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区久太郎町1-9-6 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区久太郎町一丁目9番6号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536636920/', R + 'B535824331/', R + 'B537108493/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken-and-pork shoyu ramen', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'torobuta_shoyu'),
      it('', '', 'Chicken-and-pork shio ramen, large', '¥1,100', 'Ramen', 'no', 'no', 'September 2026.', 'torobuta_shio'),
      it('', '', 'Chicken shio / chicken shoyu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'tori'),
      it('', '', 'Mazesoba', '', 'Mazesoba', 'no', 'no', 'October 2026.', 'mazesoba'),
      it('', '', 'Rice (any size, lunch)', '¥100', 'Sides', 'no', 'no', 'October 2026.', 'rice'),
    ] }, {
    cuisine: '自家製ストレート麺、薄切りチャーシュー2枚、メンマ、刻み白ねぎ、三つ葉の鶏豚醤油ラーメン1,000円・鶏豚塩、大盛り1,100円・鶏塩と鶏醤油・まぜそば・昼はご飯がどのサイズでも100円・卓上に「悪魔のにんにく」、にんにく漬けとマヨネーズ、辛いニラ・カウンター7席、テーブル3卓',
    neighborhood: '中央区久太郎町1-9-6 1F。堺筋本町駅6番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏と豚のスープ、チャーシュー。',
    notes: '[ラーメン・堺筋本町、自家製麺の鶏豚醤油] 堺筋本町駅から1分のにぎやかな小さなラーメンスタンドで、2019年開店、地元の会社員でにぎわい、BGMはヒップホップ、スタッフは元気で丁寧。定番は鶏豚醤油(1,000円)で、もちもちでなめらかな自家製ストレート麺にバランスのよい醤油スープ、薄切りチャーシュー、メンマ、刻み白ねぎ、三つ葉。塩好きには鶏豚塩(大盛り1,100円)、鶏だけの塩と醤油、まぜそばも。昼はご飯がどのサイズでも100円で、卓上の「悪魔のにんにく」やにんにく漬けとマヨネーズと一緒に、辛いニラもある。少ししょっぱいという声も。現金のみ、日曜定休。',
  });
}

// ================================================================ ラーメン荘 歴史を刻め 日本橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27140375/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['18:00', '23:00']);
  put({
    id: 'osaka_ramen_so_rekishi_o_kizame_nipponbashi', name: 'ラーメン荘 歴史を刻め 日本橋店 (Ramen So Rekishi o Kizame Nipponbashi)', category: 'OMNI',
    lat: 34.656276, lng: 135.504991, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy-based pork broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork broth, back fat, pork.',
    hours_raw: 'Mon–Sat 11:00–15:00 and 18:00–23:00; closed Sundays; hours may change (Tabelog). Buy a ticket while in line; one diner believes the last diners can join the line around 21:40 (October 2026). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nipponbashi 5-14-20 — 81 m from Ebisucho Stn',
    cuisine: 'Jiro-style ramen and dry ramen (shiru-nashi) · thick noodles, 150 g to 400 g · call garlic, vegetables and fat; "everything extra" on request · crunchy bean sprouts · rich soy-based pork broth with sweet back fat · toppings such as double pork, cheese and egg · strict no-leftovers policy',
    website: null, gmaps: gm('ラーメン荘 歴史を刻め 日本橋店'), menu_url: null,
    notes: "[Ramen · Osaka's famous Jiro-style line by Ebisucho] The Nipponbashi branch of a well-known Jiro-style name, open since January 2024, with long lines: 15 to 50 people, rain or shine, and 40 minutes to over an hour from joining to eating. Buy your ticket in line. Bowls are thick noodles (150 g to 400 g) under a mountain of crunchy bean sprouts in a rich soy-based pork broth sweet with back fat, piping hot to the end; call your garlic, vegetables and fat, or go \"everything extra\". There's also a dry ramen, plus toppings like double pork, cheese and egg. The staff are the other draw: energetic, patient with first-timers and cheering you on, but there's a strict no-leftovers policy, so order honestly. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 January 2024 (Tabelog)', background: 'Branch of the Ramen So Rekishi o Kizame Jiro-style shops (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Jiro-style ramen and dry ramen.',
      anecdotes: [
        { text: '"The thick noodles, a mountain of bean sprouts, a rich soy-based pork broth, and the concentrated sweetness and umami of the back fat. Each component is intensely unique, yet they all come together beautifully." — October 2026, 300 g with everything extra.', source: R + 'B538094729/' },
        { text: '"The broth was piping hot, and the noodles had the perfect firmness… And look at the perfect boiling of the bean sprouts!" — October 2026, 400 g with double pork, cheese and egg.', source: R + 'B538101769/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン荘 歴史を刻め 日本橋店、大阪市浪速区日本橋5-14-20、恵美須町駅から81m、月〜土11:00〜15:00・18:00〜23:00、日曜定休、カード・電子マネー・QR可、禁煙、2024年1月28日開店。口コミ(2026年7〜10月): 18時に40〜50人待ちで約1時間、300gの全マシ、スープの熱さと味、スタッフが麺の量を気にかけてくれる、汁なし、並ぶ人への気配り、初心者も気軽、200gでニンニク・ヤサイ・アブラ少なめ、ニンニクマシの汁なし200g、最後の列は21時40分ごろという声、15人ほどで40分、並びながら食券、150gでアブラなし・ニンニク少なめ・ヤサイマシ、元気なスタッフの掛け声、スープは濃くて飲み切れない、雨の14時でも20人ほど、太麺、山盛りのもやし、濃厚な醤油ベースの豚スープ、背脂の甘み、開店11時に50人以上、豚ダブル・チーズ・卵、400g、残さないルール、麺の茹で釜をこまめに洗う、シャキシャキのもやし。',
      confidence: 'medium', sources: [TB, R + 'B538094729/', R + 'B538101769/', R + 'B532045023/', R + 'B537508547/', R + 'B537835357/', R + 'B537855270/'] },
    ramen: {
      broth_base: ['pork'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick noodles, 150–400 g; "perfect firmness" (October 2026).' },
      regional_style: ['Tokyo Jiro-kei'], sub_genre: ['jiro_kei', 'mazesoba_aburasoba'],
      signature_bowl: 'Ramen with garlic, vegetables and fat called to taste (October 2026).',
      chashu: 'Pork, double pork available (October 2026).',
      notable_toppings: ['bean sprouts', 'back fat', 'garlic', 'cheese', 'egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork broth and back fat.' },
      pantheon: 'South Osaka\'s long-line Jiro bowl: rich soy-pork broth, crunchy sprouts and cheering staff.',
      profile: { richness: 5, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537855270/', '"I definitely couldn\'t finish the broth, as it was quite rich!"'],
        oiliness: [R + 'B538094729/', '"The concentrated sweetness and umami of the back fat" — placed high.'],
        clarity: [R + 'B538094729/', '"A rich soy-based pork broth" with back fat — placed low.'],
        tare_strength: [R + 'B537835357/', '"The flavor is indulgent and almost sinful" — placed high.'],
        noodle_firmness: [R + 'B538101769/', '"The noodles had the perfect firmness."'],
        aroma_punch: [R + 'B537835357/', 'Garlic-heavy order — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B538094729/', R + 'B538101769/', R + 'B537855270/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff answer first-timers\' questions about calling toppings (October 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区日本橋5-14-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区日本橋五丁目14番20号 (go) 6m; OSM 歴史を刻め日本橋 node/11626249831 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538094729/', R + 'B537835357/', R + 'B538101769/'],
    price_note: 'No prices found; reviewers spent ¥1,000–2,000.', last_checked: TODAY, items: [
      it('', '', 'Ramen (150–400 g)', '', 'Ramen', 'no', 'no', 'Call garlic, vegetables, fat; October 2026.', 'ramen'),
      it('', '', 'Dry ramen (shiru-nashi)', '', 'Ramen', 'no', 'no', 'October 2026.', 'shirunashi'),
      it('', '', 'Toppings: double pork, cheese, egg', '', 'Toppings', 'no', 'no', 'October 2026.', 'toppings'),
    ] }, {
    cuisine: '二郎系のラーメンと汁なし・太麺150gから400g・ニンニク、ヤサイ、アブラのコール、全マシも・シャキシャキのもやし・背脂の甘い濃厚な醤油ベースの豚スープ・豚ダブル、チーズ、卵などのトッピング・残さないルール',
    neighborhood: '浪速区日本橋5-14-20。恵美須町駅から81m',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油ベースの豚スープ。',
    vegan_detail: 'ヴィーガンではありません。豚のスープ、背脂、豚。',
    notes: '[ラーメン・恵美須町、行列の二郎系] 有名な二郎系の日本橋の店で、2024年1月開店、行列が長く、雨でも15〜50人、並んでから食べるまで40分から1時間以上。食券は並びながら買う。太麺(150gから400g)に山盛りのシャキシャキもやし、背脂の甘い濃厚な醤油ベースの豚スープで、最後まで熱々。ニンニク、ヤサイ、アブラをコールし、全マシも。汁なしや豚ダブル、チーズ、卵のトッピングも。もう一つの魅力はスタッフで、元気で初心者にも丁寧、掛け声で応援してくれるが、残さないルールがあるので量は正直に。日曜定休。',
  });
}

// ================================================================ つけ麺 雀 夕陽丘店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27075168/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_tsukemen_suzume_yuhigaoka', name: 'つけ麺 雀 夕陽丘店 (Tsukemen Suzume Yuhigaoka)', category: 'OMNI',
    lat: 34.661158, lng: 135.514414, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; miso and soy in the dip; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone, dried-mackerel and shrimp dip; pork chashu.',
    hours_raw: 'Daily 11:30–16:30 and 18:00–22:00; hours may change (Tabelog). Ticket machine at the entrance; cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:30', '16:30'], ['18:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ikutamateramachi 2-12 (Tennoji-ku) — 3–4 min from Shitennoji-mae Yuhigaoka Stn',
    cuisine: 'Tsukemen · signature spicy tsukemen ¥1,000, spice level 1–3: a thick red dip of pork bone and dried mackerel with miso, several chilies, chili oil and shrimp · ajitama tsukemen in pork-bone and seafood · hot (atsumori) noodles ¥950 · 200 g or 300 g · medium-thick chewy noodles · thick pork-belly chashu, seasoned egg, nori · yuzu soup to finish · black Chinese-style ramen · grilled gyoza · garlic and chili oil on the table · 9 counter seats, 24 table and sofa seats',
    website: null, gmaps: gm('つけ麺 雀 夕陽丘店'), menu_url: null,
    notes: "[Ramen · spicy shrimp-miso tsukemen in a chic room near Shitennoji] The Yuhigaoka branch of Suzume, whose main shop is in Amerikamura, open since 2013 a few minutes from Shitennoji-mae Yuhigaoka. The room is dark and stylish, with counter, tables and sofas, roomy for a tsukemen shop. The signature spicy tsukemen (¥1,000, level 1 to 3) has a thick red dip of pork bone and dried mackerel blended with miso, chilies, chili oil and shrimp, nicely balanced between seafood and heat, and it stays warm. Noodles are medium-thick and chewy, 200 g or 300 g, with thick pork-belly chashu and a seasoned egg; finish with the yuzu soup. The ajitama tsukemen is the classic, and one diner had the hot-noodle version for ¥950. Grilled gyoza on the side. Buy a ticket at the door. Cash only; open daily.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 2 October 2013 (Tabelog)', background: 'Branch of Tsukemen Suzume (main shop in Amerikamura).', philosophy: null, specialty: 'Spicy tsukemen.',
      anecdotes: [
        { text: '"The rich dipping sauce features a base extracted from carefully selected pork bones and dried mackerel, blended with miso, several types of chili peppers, chili oil, and shrimp, resulting in a thick, red sauce." — September 2026, spicy tsukemen.', source: R + 'B535525354/' },
        { text: '"The tsukemen here never gets boring, and I love that the dipping sauce stays warm for a long time!" — October 2026, spicy tsukemen ¥1,000, level 2, 300 g.', source: R + 'B502806185/' },
      ],
      japanese_sources_summary: '食べログ: つけ麺 雀 夕陽丘店、大阪市天王寺区生玉寺町2-12、四天王寺前夕陽ケ丘駅から306m、毎日11:30〜16:30・18:00〜22:00、カード・電子マネー・QR不可、33席(カウンター9、テーブル24)、ソファ席、禁煙、2013年10月2日開店。口コミ(2025年3月〜2026年10月): 辛つけ麺1,000円、辛さ2、300g、つけ汁が冷めにくい、黒中華そば、少し甘い、七味と酢、黒を基調としたおしゃれで広い店内、カウンター、テーブル、ソファ、豚骨と鯖節に味噌、数種の唐辛子、ラー油、海老の赤く濃いつけ汁、中太のもちもち麺、厚切りの豚バラチャーシュー、味玉、海苔、麺の量を選べる、柚子のスープ割り、焼き餃子、あつもり、にんにくとラー油、950円、合言葉で味玉サービス、アメ村の店によく行く、入口の券売機、200gか300g、辛さ1〜3、海老の出汁、味玉つけ麺、魚介豚骨、魚粉、スープ割り。',
      confidence: 'medium', sources: [TB, R + 'B535525354/', R + 'B502806185/', R + 'B535979041/', R + 'B537606093/', R + 'B538107197/', R + 'B538150135/'] },
    ramen: {
      broth_base: ['tonkotsu', 'gyokai', 'shellfish'], broth_texture: 'paitan', tare: ['miso'], aroma_oil: ['chili oil'], richness: 'kotteri',
      noodles: { thickness: 'medium-thick', shape: null, hydration: null, handmade: false, notes: 'Medium-thick, strongly chewy noodles, 200 g or 300 g (September–October 2026).' },
      regional_style: [], sub_genre: ['tsukemen'],
      signature_bowl: 'Spicy tsukemen, ¥1,000, spice level 1–3 (October 2026).',
      chashu: 'Thick-cut, tender, fatty pork-belly chashu (September 2026).',
      notable_toppings: ['seasoned egg', 'nori', 'yuzu soup-wari', 'shrimp'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone and seafood dip.' },
      pantheon: 'Tennoji\'s Suzume branch: a thick red shrimp-miso spicy tsukemen dip that stays hot.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B535525354/', '"A thick, red sauce" — placed high.'],
        oiliness: [R + 'B535525354/', 'Chili oil in the dip — mid-scale.'],
        clarity: [R + 'B535525354/', 'Thick red dipping sauce — placed low.'],
        tare_strength: [R + 'B538150135/', '"The dipping sauce was flavorful, enriched with fish powder" — placed high.'],
        noodle_firmness: [R + 'B535525354/', '"Medium-thick with a strong chewiness."'],
        aroma_punch: [R + 'B537606093/', '"Rich with a delicious shrimp broth" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B535525354/', R + 'B502806185/', R + 'B537606093/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; roomy seating good for solo diners (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区生玉寺町2-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区生玉寺町2番12号 (go) 18m; OSM つけ麺雀 node/4580515090 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B502806185/', R + 'B535979041/', R + 'B537606093/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Spicy tsukemen (level 1–3)', '¥1,000', 'Tsukemen', 'no', 'no', '200 g or 300 g; October 2026.', 'kara_tsukemen'),
      it('', '', 'Ajitama tsukemen', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'ajitama_tsukemen'),
      it('', '', 'Hot-noodle tsukemen (atsumori)', '¥950', 'Tsukemen', 'no', 'no', 'September 2026.', 'atsumori'),
      it('', '', 'Black Chinese-style ramen', '', 'Ramen', 'no', 'no', 'March 2025.', 'kuro_chuka'),
      it('', '', 'Grilled gyoza', '', 'Sides', 'no', 'no', 'September 2026.', 'gyoza'),
    ] }, {
    cuisine: 'つけ麺・看板の辛つけ麺1,000円、辛さ1〜3: 豚骨と鯖節に味噌、数種の唐辛子、ラー油、海老の赤く濃いつけ汁・魚介豚骨の味玉つけ麺・あつもり950円・200gか300g・中太のもちもち麺・厚切りの豚バラチャーシュー、味玉、海苔・締めは柚子のスープ割り・黒中華そば・焼き餃子・卓上ににんにくとラー油・カウンター9席、テーブルとソファ24席',
    neighborhood: '天王寺区生玉寺町2-12。四天王寺前夕陽ケ丘駅から徒歩3〜4分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、つけ汁の味噌や醤油、餃子。',
    vegan_detail: 'ヴィーガンではありません。豚骨、鯖節、海老のつけ汁、豚のチャーシュー。',
    notes: '[ラーメン・四天王寺近く、おしゃれな店の海老味噌の辛つけ麺] アメ村に本店がある雀の夕陽丘店で、2013年開店、四天王寺前夕陽ケ丘駅から数分。黒を基調としたおしゃれな店内にカウンター、テーブル、ソファがあり、つけ麺店としては広い。看板の辛つけ麺(1,000円、辛さ1〜3)は豚骨と鯖節に味噌、唐辛子、ラー油、海老を合わせた赤く濃いつけ汁で、魚介と辛さのバランスがよく、冷めにくい。麺は中太のもちもちで200gか300g、厚切りの豚バラチャーシューと味玉、締めは柚子のスープ割りで。味玉つけ麺は定番、あつもりを950円で食べた人も。焼き餃子も。食券は入口で。現金のみ、無休。',
  });
}

save();
