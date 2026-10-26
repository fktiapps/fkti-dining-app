// Osaka sweep (2-mile circle around Dotonbori), batch 33 — ramen phase, nearest first (all OMNI).
//   + Gion Duck Noodles 難波店 (Kishu-duck ramen and tsukemen on rye noodles; hours conflict → {})
//   + どうとんぼり神座 なんば店 (Kamukura across from Takashimaya, open to 1 am Fri/Sat)
//   + 麺に光を (Kyoto-duck "Hip Hop" and duck-and-clam "Punk", 6 seats)
//   + 鶏白湯 大翔軒 (chicken-paitan food truck in a Namba parking lot, opened Apr 2026)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 33);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ Gion Duck Noodles 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27156945/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_gion_duck_noodles_namba', name: 'Gion Duck Noodles 難波店 (Gion Duck Noodles Namba)', category: 'OMNI',
    lat: 34.666278, lng: 135.5048, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made noodles with German rye (rye contains gluten); sauces not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Kishu-duck broth, duck chashu, egg.',
    hours_raw: 'Tabelog: 11:00–22:00, closed Wednesday. An August 2026 review gives lunch 11:00–16:00 and dinner 18:00–22:00. Cashless — cards and e-money only, no cash (August 2026 review; Tabelog lists cards, e-money and QR).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sennichimae 2-4-10, Sennichimae Bldg — near Kintetsu Nippombashi Stn',
    cuisine: 'Kishu-duck ramen from Gion, Kyoto · light (clear, amber shio) or rich duck broth · house-made German-rye noodles · duck loin and thigh chashu, choose your slices · duck tsukemen with Kishu mikan or cherry sauce · Namba-only duck skewers with grape pepper, yuzu and black shichimi · GION DUCK BEER · Kyoto hojicha with refills',
    website: null, gmaps: gm('Gion Duck Noodles 難波店'), menu_url: null,
    notes: "[Ramen · Kyoto's Kishu-duck ramen in Sennichimae] The Namba branch of Gion Duck Noodles, a duck-ramen shop from Gion in Kyoto, where bowls arrive dressed like a French plate with pink duck, sprouts and edible flowers. Choose a light broth (a clear, amber shio of pure Kishu duck) or a thick, rich one. Both come on house-made noodles blended with German rye, nutty and almost soba-like, with grape pepper on the rim to stir in. The duck chashu comes as loin and thigh, and you pick how many slices of each. The tsukemen takes a different direction: rye flat noodles in a creamy duck dip with a Kishu-mikan or cherry sauce and a Madeira accent. The Namba-only duck skewers come with three condiments, and there's a house GION DUCK BEER. The menu uses emoji, and staff explain it. Cashless.",
    chef_bio: { chef_name: null, roles: [], origin: 'Main shop in Gion, Kyoto (reviews)', background: 'Gion Duck Noodles; Namba branch with exclusive duck skewers (August–September 2026 reviews).', philosophy: null, specialty: 'Kishu-duck ramen and tsukemen.',
      anecdotes: [
        { text: '"The broth is a clear soup with a strong duck flavor, featuring a refined richness that feels more like French cuisine than traditional ramen. The noodles are homemade, made with a blend of German rye." — August 2026.', source: R + 'B534824955/' },
        { text: '"What stood out the most was the combination with a sauce made from Kishu mikan… the sauce made with Madeira wine adds an accent." — October 2026, duck tsukemen.', source: R + 'B537668231/' },
      ],
      japanese_sources_summary: '食べログ: Gion Duck Noodles 難波店、大阪市中央区千日前2-4-10 千日前ビル、11:00〜22:00、水曜休み、カード・電子マネー・QR決済可。2026年の口コミ(8〜10月): 京都・祇園の人気店、紀州鴨のスープ、あっさりとこってり、塩(清湯)は琥珀色、ぶどう山椒、ドイツ産ライ麦を合わせた自家製麺、鴨のロースともものチャーシューを枚数で選べる、味玉、難波店限定の鴨串(ぶどう山椒、柚子、黒七味)、GION DUCK BEER、京都のほうじ茶はおかわり可、メニューは絵文字、スタッフが丁寧に説明、つけ麺は紀州みかんやさくらんぼのソース、マデイラワインのソース、平打ちのライ麦麺、ピンクのスプラウトや食用花、昼11:00〜16:00・夜18:00〜22:00で現金不可という口コミ。',
      confidence: 'medium', sources: [TB, R + 'B534824955/', R + 'B537668231/', R + 'B534296321/', R + 'B535544460/', R + 'B537661749/', R + 'B534008141/'] },
    ramen: {
      broth_base: ['other'], broth_texture: 'chintan', tare: ['shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: true, notes: 'House-made noodles blended with German rye; flat for the tsukemen (August–October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Light (clear shio) or rich Kishu-duck ramen (August–October 2026).',
      chashu: 'Duck loin and thigh, choose the number of slices (August 2026).',
      notable_toppings: ['duck chashu', 'seasoned egg', 'grape pepper', 'sprouts', 'edible flowers'],
      gf: { status: 'no', note: 'Rye-blend wheat noodles.' },
      vegan: { status: 'no', note: 'Duck broth.' },
      pantheon: 'Gion\'s Kishu-duck ramen in Sennichimae: an amber duck shio on nutty rye noodles, dressed like a French plate.',
      profile: { richness: 3, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B534824955/', 'Light: "a refined richness"; rich: "thick and rich… not overwhelmingly heavy" (' + R + 'B537661749/) — mid-scale.'],
        oiliness: [R + 'B534824955/', 'Light broth pairs with "the refreshing broth" — placed low-mid (inferred).'],
        clarity: [R + 'B534296321/', '"The salt (clear broth) ramen features a beautiful amber soup."'],
        tare_strength: [R + 'B534296321/', 'Shio "concentrates the pure umami of Kishu duck" — mid-scale.'],
        noodle_firmness: [R + 'B534824955/', 'Rye noodles with "nutty aroma"; firmness not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B534824955/', '"The aroma of the pepper wafted through my nose" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B534824955/', R + 'B534296321/', R + 'B537661749/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Emoji menu; staff explain it (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前2-4-10 千日前ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前二丁目4番10号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534824955/', R + 'B534296321/', R + 'B537668231/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Duck ramen, light (shio clear broth)', '', 'Ramen', 'no', 'no', 'August 2026.', 'light'),
      it('', '', 'Duck ramen, rich', '', 'Ramen', 'no', 'no', 'October 2026.', 'rich'),
      it('', '', 'Duck tsukemen with Kishu-mikan or cherry sauce', '', 'Tsukemen', 'no', 'no', 'September–October 2026.', 'tsukemen'),
      it('', '', 'Duck skewers (Namba only)', '', 'Sides', 'ask', 'no', 'August 2026.', 'kamo_kushi'),
      it('', '', 'GION DUCK BEER', '', 'Drinks', 'no', 'ask', 'August 2026.', 'beer'),
      it('', '', 'Kyoto hojicha (refills)', '', 'Drinks', 'ask', 'ask', 'August 2026.', 'hojicha'),
    ] }, {
    cuisine: '京都・祇園発の紀州鴨ラーメン・あっさり(琥珀色の塩の清湯)かこってりの鴨スープ・ドイツ産ライ麦の自家製麺・鴨のロースともものチャーシューを枚数で・紀州みかんやさくらんぼのソースの鴨つけ麺・難波店限定の鴨串(ぶどう山椒、柚子、黒七味)・GION DUCK BEER・京都のほうじ茶はおかわり可',
    neighborhood: '千日前2-4-10 千日前ビル。近鉄日本橋駅の近く',
    gf_detail: 'グルテンフリーではありません。ドイツ産ライ麦を合わせた自家製麺(ライ麦もグルテンを含む)、たれの中身は不明。',
    vegan_detail: 'ヴィーガンではありません。紀州鴨のスープ、鴨チャーシュー、卵。',
    notes: '[ラーメン・千日前の京都の紀州鴨ラーメン] 京都・祇園の鴨ラーメンの店、Gion Duck Noodlesの難波店で、ピンクの鴨、スプラウト、食用花がのってフレンチの一皿のよう。スープはあっさり(紀州鴨だけの琥珀色の塩の清湯)か、とろりと濃いこってりから。どちらもドイツ産ライ麦を合わせた自家製麺で、香ばしくそばのようでもあり、縁のぶどう山椒を溶かして。鴨チャーシューはロースともも、それぞれの枚数を選べます。つけ麺は別の方向で、ライ麦の平打ち麺をクリーミーな鴨のつけ汁に、紀州みかんかさくらんぼのソースとマデイラの隠し味。難波店限定の鴨串は3種の薬味で、自家製のGION DUCK BEERも。メニューは絵文字でスタッフが説明してくれます。キャッシュレスのみ。',
  });
}

// ================================================================ どうとんぼり神座 なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27125303/'; const R = TB + 'dtlrvwlst/';
  const A = day(['10:00', '23:30']), L = day(['10:00', '01:00']);
  put({
    id: 'osaka_kamukura_namba_takashimaya', name: 'どうとんぼり神座 なんば店 (Dotonbori Kamukura Namba)', category: 'OMNI',
    lat: 34.665217, lng: 135.50185, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza, fried rice.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Not vegan as far as sources show: chashu and gyoza; the broth base is not described. Ask.',
    hours_raw: 'Mon–Thu 10:00–23:30; Fri and Sat 10:00–1:00; Sun 10:00–23:30 (Tabelog). No cards or e-money; QR payments accepted (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: L, 5: L, 6: A }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 3-2-15, across from Takashimaya — 2 min from Namba Stn (Sennichimae Line)',
    cuisine: 'Kamukura\'s light, napa-cabbage soy broth · "delicious ramen" · chashu ramen · seasonal bowls (summer cold ramen; autumn hot-and-sour noodles) · half fried rice and gyoza set · 37 seats · open to 1 am Friday and Saturday',
    website: null, gmaps: gm('どうとんぼり神座 なんば店'), menu_url: null,
    notes: "[Ramen · Kamukura across from Takashimaya, open late] A 37-seat Kamukura opposite Namba Takashimaya, open from 10 am until 11:30 pm, or 1 am on Fridays and Saturdays, with a queue even near 11 pm. It's the chain's light soy broth, sweet with napa cabbage, and the usual order is the \"delicious ramen\" or the chashu ramen, a light end to a night of drinking. There's also a half fried rice and gyoza set with garlicky gyoza. Seasonal bowls rotate: a summer cold ramen whose cabbage turns crunchy, almost pickle-like (opinions split), and an autumn hot-and-sour noodle soup. Service is fast, though it's popular with tourists and can get noisy. QR payment only, no cards.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 September 2021 (Tabelog)', background: 'Kamukura chain.', philosophy: null, specialty: 'Napa-cabbage soy ramen.',
      anecdotes: [
        { text: '"The texture of the napa cabbage is completely different! While the hot soup makes it soft, the chilled version has a crunchy texture that feels almost like pickles!!" — September 2026, summer cold ramen.', source: R + 'B472638732/' },
        { text: '"When I left the restaurant, it was nearly 11 PM on a Friday, and there were still people waiting." — October 2026.', source: R + 'B537620418/' },
      ],
      japanese_sources_summary: '食べログ: どうとんぼり神座 なんば店、大阪市中央区難波3-2-15、06-6643-3790、予約不可、月〜木10:00〜23:30、金10:00〜24:00、土0:00〜1:00・10:00〜24:00、日0:00〜1:00・10:00〜23:30、カード・電子マネー不可、QR決済可、37席、2021年9月16日開店。2026年の口コミ(8〜10月): 夏限定の冷やしおいしいラーメン(白菜がシャキシャキで漬物のよう、評価は分かれる)、味玉ラーメン、待ち10分以内で提供も早い、高島屋の向かいで外国人観光客が多くにぎやか、期間限定の酸辣湯麺、白菜たっぷりのおいしいラーメン、金曜の23時前でも待ちの列、半チャン餃子セット(ふわふわの炒飯、にんにくの効いた餃子)、飲んだ後に軽いスープ、チャーシュー麺。',
      confidence: 'medium', sources: [TB, R + 'B472638732/', R + 'B537620418/', R + 'B537702036/', R + 'B538071365/', R + 'B533519494/', R + 'B533837599/'] },
    ramen: {
      broth_base: ['other'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Not described.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '"Delicious ramen" with napa cabbage (October 2026).',
      chashu: 'Chashu ramen (October 2026); not described in detail.',
      notable_toppings: ['napa cabbage', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'ask', note: 'Broth base not described in sources.' },
      pantheon: 'The late-night Kamukura opposite Takashimaya: a light, cabbage-sweet soy broth until 1 am at weekends.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B537702036/', '"The light broth at Kamukura is perfect for wrapping up a night of drinking!"'],
        oiliness: [R + 'B538071365/', '"Light and guilt-free."'],
        clarity: [R + 'B472638732/', '"The clear broth is cold and tasty" (cold version).'],
        tare_strength: [R + 'B537702036/', 'Light broth — placed low-mid.'],
        noodle_firmness: [R + 'B538071365/', 'Noodles not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B533837599/', 'Not described as pungent — placed low-mid (inferred).'],
      },
      confidence: 'low', sources: [R + 'B537702036/', R + 'B538071365/', R + 'B472638732/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Busy with overseas visitors (August 2026); QR payment only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-2-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目2番15号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537620418/', R + 'B537702036/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', '"Delicious ramen" (napa cabbage)', '', 'Ramen', 'no', 'ask', 'October 2026.', 'oishii'),
      it('チャーシューメン', 'chāshūmen', 'Chashu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'chashu'),
      it('', '', 'Hot-and-sour noodle soup (limited)', '', 'Seasonal', 'no', 'ask', 'October 2026.', 'sanratan'),
      it('', '', 'Half fried rice and gyoza set', '', 'Sets', 'no', 'no', 'October 2026.', 'set'),
    ] }, {
    cuisine: '神座のあっさりした白菜の醤油スープ・おいしいラーメン・チャーシュー麺・季節の一杯(夏は冷やし、秋は酸辣湯麺)・半チャン餃子セット・37席・金土は深夜1時まで',
    neighborhood: '難波3-2-15、高島屋の向かい。なんば駅(千日前線)から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子、炒飯。',
    vegan_detail: '情報の範囲ではヴィーガンとは言えません。チャーシューと餃子、スープのベースは書かれていません。要確認。',
    notes: '[ラーメン・高島屋向かいの深夜までの神座] なんば高島屋の向かいにある37席の神座で、朝10時から夜11時半、金・土は深夜1時まで営業し、夜11時前でも待ちの列。チェーンのあっさり醤油に白菜の甘み、定番は「おいしいラーメン」かチャーシュー麺で、飲んだ後の軽い締めに。にんにくの効いた餃子と半チャーハンのセットも。季節の一杯は替わり、夏の冷やしは白菜がシャキシャキで漬物のよう(評価は分かれる)、秋は酸辣湯麺。提供は早いものの観光客に人気でにぎやかなことも。支払いはQRのみ、カード不可。',
  });
}

// ================================================================ 麺に光を
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27114699/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00'], ['18:00', '20:30']);
  put({
    id: 'osaka_men_ni_hikari_o', name: '麺に光を (Men ni Hikari o)', category: 'OMNI',
    lat: 34.670687, lng: 135.497358, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Kyoto-duck and chicken-bone broth, clam broth, duck and pork chashu.',
    hours_raw: 'Mon, Tue, Fri, Sat, Sun 11:30–15:00 and 18:00–20:30; closed Wednesday and Thursday (Tabelog). Ticket machine; cash only — no cards, e-money or QR (Tabelog). Queues at opening.',
    hours: { 0: D, 1: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 2-17-8, Levanga Shinsaibashi Bldg B1F — about 400 m from Yotsubashi Stn',
    cuisine: 'Kyoto-duck ramen named after music genres · "Hip Hop" tanrei duck shoyu · "Punk" duck-and-clam broth ¥1,250 with a pat of butter · limited "Cold R&B" chilled ramen ¥1,200 (September 2026) · medium-thick flat noodles · duck and pork chashu, rare chashu · 6-seat counter',
    website: null, gmaps: gm('麺に光を 西心斎橋'), menu_url: null,
    notes: "[Ramen · Kyoto-duck bowls named after music, west Shinsaibashi] A six-seat basement counter in Nishi-Shinsaibashi that names its bowls after music genres, with a line before opening. \"Hip Hop\" is a light Kyoto-duck and chicken-bone soy ramen, more refreshing than the name suggests, with duck and pork chashu and a good seasoned egg. \"Punk\" (¥1,250, October 2026) blends clam and Kyoto-duck broth, finished with a pat of butter on the clams; one repeat visitor says the clam is the star. Both come on smooth, chewy medium-thick flat noodles. A summer \"Cold R&B\" (¥1,200) served everything ice-cold with rare chashu and long menma. Buy a ticket; cash only. Closed Wednesdays and Thursdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 23 November 2019 (Tabelog)', background: 'Bowls named after music genres (Hip Hop, Punk, R&B) (reviews).', philosophy: null, specialty: 'Kyoto-duck shoyu; duck-and-clam broth.',
      anecdotes: [
        { text: '"The broth is a light yet flavorful blend of clam and Kyoto duck. A small pat of butter on the clams enhances the richness… The clam broth is definitely the star over the soy sauce." — October 2026, Punk ¥1,250.', source: R + 'B515421515/' },
        { text: '"Contrary to the funky image of the name, the soy sauce-based broth was surprisingly light and refreshing." — September 2026, Hip Hop.', source: R + 'B537835963/' },
      ],
      japanese_sources_summary: '食べログ: 麺に光を、大阪市中央区西心斎橋2-17-8 レバンガ心斎橋ビルB1F、06-6214-5551、予約不可、月・火・金・土・日11:30〜15:00・18:00〜20:30、水・木休み、カード・電子マネー・QR不可、6席(カウンター)、2019年11月23日開店。2026年の口コミ(9〜10月): 日曜の開店前から行列、パンク(鴨と蛤の出汁)1,250円、蛤にバター、平打ち麺はなめらか、醤油より蛤が主役、限定の冷やしR&B 1,200円(券売機、長いメンマ、レアチャーシュー2枚、ねぎ、かいわれ、刻み玉ねぎ、フライドオニオン、中太平打ち麺)、淡麗鴨ラーメン(ヒップホップ)は鴨と豚のチャーシュー、名前に反してあっさり、味玉がおいしい。',
      confidence: 'medium', sources: [TB, R + 'B515421515/', R + 'B537835963/', R + 'B530444229/', R + 'B537624276/', R + 'B537579515/'] },
    ramen: {
      broth_base: ['other', 'chicken', 'gyokai'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'flat', hydration: null, handmade: false, notes: 'Medium-thick flat noodles, smooth and elastic (September–October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '"Hip Hop" tanrei duck ramen; "Punk" duck-and-clam ¥1,250 (October 2026).',
      chashu: 'Duck and pork chashu; rare chashu on the cold bowl (September 2026).',
      notable_toppings: ['seasoned egg', 'clams with butter (Punk)', 'long menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Duck and clam broth.' },
      pantheon: 'West Shinsaibashi\'s six-seat duck counter: a light Kyoto-duck "Hip Hop" and a buttery duck-and-clam "Punk".',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B537835963/', '"Surprisingly light and refreshing."'],
        oiliness: [R + 'B515421515/', '"A light yet flavorful blend"; butter only on the Punk — placed low.'],
        clarity: [R + 'B537835963/', 'Tanrei (clear, light) soy broth — placed high (inferred from "light and refreshing").'],
        tare_strength: [R + 'B537624276/', '"The rich duck broth"; soy noted as present but secondary on the Punk (' + R + 'B515421515/) — mid-scale.'],
        noodle_firmness: [R + 'B530444229/', '"The noodles were chilled, had great elasticity" (cold bowl); "smooth" flat noodles — mid-scale.'],
        aroma_punch: [R + 'B537835963/', '"The delicate soup" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B515421515/', R + 'B537835963/', R + 'B537624276/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; cash only; six seats.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-17-8 レバンガ心斎橋ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目17番8号 (go) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B515421515/', R + 'B530444229/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', '"Hip Hop" tanrei duck ramen', '', 'Ramen', 'no', 'no', 'September–October 2026.', 'hiphop'),
      it('', '', '"Punk" duck-and-clam ramen', '¥1,250', 'Ramen', 'no', 'no', 'October 2026.', 'punk'),
      it('', '', '"Cold R&B" chilled ramen (limited)', '¥1,200', 'Seasonal', 'no', 'no', 'September 2026.', 'rnb'),
    ] }, {
    cuisine: '音楽のジャンルを名前にした京都鴨のラーメン・「ヒップホップ」淡麗鴨醤油・「パンク」鴨と蛤の出汁1,250円(蛤にバター)・限定の「冷やしR&B」1,200円(2026年9月)・中太平打ち麺・鴨と豚のチャーシュー、レアチャーシュー・カウンター6席',
    neighborhood: '西心斎橋2-17-8 レバンガ心斎橋ビルB1F。四ツ橋駅から約400m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースのたれ。',
    vegan_detail: 'ヴィーガンではありません。京都鴨と鶏ガラのスープ、蛤の出汁、鴨と豚のチャーシュー。',
    notes: '[ラーメン・西心斎橋の音楽の名前の京都鴨ラーメン] 西心斎橋の地下にある6席のカウンターで、一杯ごとに音楽のジャンルの名前、開店前から行列。「ヒップホップ」は京都鴨と鶏ガラのあっさり醤油で、名前より爽やか、鴨と豚のチャーシューとおいしい味玉。「パンク」(1,250円、2026年10月)は蛤と京都鴨の合わせ出汁で、蛤にバターをひとかけ、再訪した人いわく主役は蛤。どちらもなめらかでコシのある中太の平打ち麺。夏の「冷やしR&B」(1,200円)はすべてキンキンに冷たく、レアチャーシューと長いメンマ。食券制で現金のみ。水・木定休。',
  });
}

// ================================================================ 鶏白湯 大翔軒
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27156344/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:00'], ['18:00', '02:00']);
  put({
    id: 'osaka_toripaitan_daishoken', name: '鶏白湯 大翔軒 (Toripaitan Daishoken)', category: 'OMNI',
    lat: 34.665618, lng: 135.499333, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan, shellfish broth, chashu.',
    hours_raw: 'Tue–Sun 11:30–14:00 and 18:00–2:00; closed Monday (Tabelog; a September 2026 review gives the same). Cash only — no cards, e-money or QR (Tabelog). Outdoor tables in front of a food truck.',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Namba 4-5-7 — a food truck in a back-street parking lot under the elevated expressway, 2–3 min from Osaka Namba Stn',
    cuisine: 'Food-truck chicken paitan · shoyu or garlic-shoyu toripaitan ¥1,200 · rich toripaitan · shellfish-based toripaitan ¥1,200 · extra chashu +¥500 · set A ¥1,350 · mazesoba ¥1,200 · seared chashu rice bowl ¥1,200 · wavy medium-thick noodles · kimchi, chopped onion, vinegar and sesame on the table · open to 2 am',
    website: null, gmaps: gm('鶏白湯 大翔軒 難波'), menu_url: null,
    notes: "[Ramen · late-night chicken-paitan food truck in back-street Namba] A ramen food truck parked behind a lot under the elevated expressway, two minutes from Osaka Namba, with tables and chairs out front like an old yatai. Open since April 2026, it runs until 2 am and already draws repeat customers. The chicken paitan is thick and smooth, rich without a heavy aftertaste, on wavy medium-thick noodles. It comes as shoyu, garlic shoyu or a shellfish-based version, mostly ¥1,200. A sweet-seasoned rare chashu makes you want rice; there's a seared chashu bowl (¥1,200), set A (¥1,350) and an oddly addictive mazesoba. Kimchi, chopped onion, vinegar and sesame on the table change the bowl as you go. It's hidden when cars are parked in front. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 April 2026 (Tabelog)', background: 'A food truck with outdoor seating behind a parking lot in Namba 4-chōme (reviews).', philosophy: null, specialty: 'Chicken paitan ramen.',
      anecdotes: [
        { text: '"You can really taste the deliciousness of the chicken, with a smooth and rich flavor in the thick broth. Despite being rich, it has no unpleasant aftertaste." — September 2026, rich soy toripaitan.', source: R + 'B535905440/' },
        { text: '"Located under the elevated tracks in Namba, behind a parking lot, this place can be a bit hidden when cars are parked! Despite that, regular customers keep coming in!" — October 2026, shellfish-based toripaitan ¥1,200.', source: R + 'B538060910/' },
      ],
      japanese_sources_summary: '食べログ: 鶏白湯 大翔軒、大阪市中央区難波4-5-7、070-1736-1434、予約不可、火〜日11:30〜14:00・18:00〜翌2:00、月曜休み、カード・電子マネー・QR不可、2026年4月1日開店。2026年の口コミ(9〜10月): 裏なんばの駐車場にある屋台、キッチンカーの前にテーブルと椅子、高架下の駐車場の奥、にんにく醤油鶏白湯1,200円、チャーシュー増し500円、まぜそば1,200円、炙りチャーシュー丼1,200円、醤油鶏白湯1,200円、濃厚醤油鶏白湯(とろりとなめらか、後味すっきり)、中太ちぢれ麺、卓上にキムチ、刻み玉ねぎ、酢、ごま、蛤の出汁のスープ、醤油鶏白湯のAセット1,350円、貝出汁の鶏白湯1,200円、甘めのレアチャーシュー、ねぎ、水菜、常連が多い、深夜2時まで。',
      confidence: 'medium', sources: [TB, R + 'B535905440/', R + 'B538060910/', R + 'B535855022/', R + 'B537872016/', R + 'B537560056/', R + 'B536263460/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'wavy', hydration: null, handmade: false, notes: 'Wavy medium-thick noodles (September 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan', 'mazesoba_aburasoba'],
      signature_bowl: 'Shoyu chicken paitan ¥1,200 (September 2026).',
      chashu: 'Sweetly seasoned rare chashu (October 2026).',
      notable_toppings: ['green onion', 'mizuna', 'chopped onion', 'kimchi (table)', 'sesame (table)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Namba\'s under-the-expressway paitan truck: thick, smooth chicken broth at outdoor tables until 2 am.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B535905440/', '"A smooth and rich flavor in the thick broth."'],
        oiliness: [R + 'B535905440/', '"No unpleasant aftertaste" — mid-scale (inferred).'],
        clarity: [R + 'B535905440/', 'Thick chicken paitan — opaque.'],
        tare_strength: [R + 'B535855022/', '"A rich chicken flavor and depth, yet it wasn\'t overly strong."'],
        noodle_firmness: [R + 'B535905440/', '"The wavy medium-thick noodles pair perfectly with the soup"; firmness not described — mid-scale.'],
        aroma_punch: [R + 'B535855022/', 'Garlic-shoyu option; table kimchi and onion — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B535905440/', R + 'B535855022/', R + 'B538060910/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Outdoor tables at a food truck; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-5-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened April 2026; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目5番7号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535855022/', R + 'B537872016/', R + 'B538060910/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu chicken paitan', '¥1,200', 'Ramen', 'no', 'no', 'September 2026.', 'shoyu'),
      it('', '', 'Garlic-shoyu chicken paitan', '¥1,200', 'Ramen', 'no', 'no', 'September 2026.', 'garlic'),
      it('', '', 'Shellfish-based chicken paitan', '¥1,200', 'Ramen', 'no', 'no', 'October 2026.', 'kai'),
      it('', '', 'Extra chashu', '+¥500', 'Toppings', 'no', 'no', 'September 2026.', 'chashu_plus'),
      it('', '', 'Set A (shoyu chicken paitan)', '¥1,350', 'Sets', 'no', 'no', 'October 2026.', 'set_a'),
      it('まぜそば', 'mazesoba', 'Mazesoba', '¥1,200', 'Mazesoba', 'no', 'no', 'September 2026.', 'maze'),
      it('', '', 'Seared chashu rice bowl', '¥1,200', 'Rice', 'no', 'no', 'September 2026.', 'aburi_don'),
    ] }, {
    cuisine: 'キッチンカーの鶏白湯・醤油かにんにく醤油の鶏白湯1,200円・濃厚鶏白湯・貝出汁の鶏白湯1,200円・チャーシュー増し500円・Aセット1,350円・まぜそば1,200円・炙りチャーシュー丼1,200円・中太ちぢれ麺・卓上にキムチ、刻み玉ねぎ、酢、ごま・深夜2時まで',
    neighborhood: '難波4-5-7。高架下の裏通りの駐車場にあるキッチンカー、大阪難波駅から徒歩2〜3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースのたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯、貝の出汁、チャーシュー。',
    notes: '[ラーメン・裏なんばの深夜の鶏白湯キッチンカー] 大阪難波駅から2分、高架下の駐車場の奥に停まるラーメンのキッチンカーで、前に昔の屋台のようにテーブルと椅子。2026年4月開店で深夜2時まで営業し、もう常連が通っています。鶏白湯はとろりとなめらかで、濃いのに後味が重くなく、中太ちぢれ麺。醤油、にんにく醤油、貝出汁があり、たいてい1,200円。甘めのレアチャーシューでご飯が欲しくなり、炙りチャーシュー丼(1,200円)、Aセット(1,350円)、妙にクセになるまぜそばも。卓上のキムチ、刻み玉ねぎ、酢、ごまで味変を。車が停まっていると見つけにくいので注意。現金のみ。',
  });
}

save();
