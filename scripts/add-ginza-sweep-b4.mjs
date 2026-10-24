// Ginza Station half-mile sweep (805 m), batch 4 — ramen. Researched 2026-10-24.
//   + らーめん一郎 (owner Hasegawa Ichirō, Aomori ingredients; owner-run) · 銀座元楽 (Genraku Co., back-fat)
//   + 自家製麺 伊藤 銀座店 (Itō family niboshi; Hiromu Itō's group) · 銀座らぁ麺しら石 (INGS group)
//   + 銀座 平 (Hiroshima-style spicy tsukemen; opened Sept 2026)
// Sources: genraku.com (menu + kodawari), san-tatsu features, BAILA, Tabelog /en/ listings + dated 2026
// reviews. Pins: Tabelog geo + GSI (+ OSM). Run from the repo root. Idempotent.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);
const TBR = id => `https://tabelog.com/en/tokyo/A1301/${id}/`;

// ================================================================ らーめん一郎
{
  const TB = TBR('A130101/13203526'); const R = TB + 'dtlrvwlst/';
  const ST = 'https://san-tatsu.jp/articles/267299/';
  const wk = day(['11:00', '23:00']), we = day(['11:00', '21:00']);
  put({
    id: 'tokyo_ginza_ramen_ichiro', name: 'らーめん一郎 (Ramen Ichirō)', category: 'MOM_AND_POP',
    lat: 35.673034, lng: 139.764687,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: "Not gluten-free. Wheat noodles: curly medium-thick for shoyu, shio and curry, thin straight from Sugano Seimen for the clam ramen. The tare includes soy sauce, and the clam version uses shottsuru fish sauce. No gluten-free option is mentioned.",
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. Every bowl uses the same soup of Aomori Shamorock chicken with grilled flying fish (yaki-ago) and tomato. The clam ramen adds Jūsan-ko clams, and all bowls carry large pork chashu.',
    hours_raw: 'Mon–Fri 11:00–23:00 (last order 22:30); Sat, Sun & holidays 11:00–21:00. No fixed holiday; may close early when soup runs out. Cards and QR payments accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 3-chōme, basement on Matsuya-dōri — 30 seconds from Ginza Stn exit C8',
    cuisine: 'Aomori-ingredient ramen · Jūsan-ko clam (shijimi) ramen · shoyu, shio, curry', cuisine_type: 'ramen',
    website: null, gmaps: gm('らーめん一郎 東京都中央区銀座3-2-13'), menu_url: null,
    notes: "[Mom & Pop · Aomori ramen] A six-seat basement counter under a red lantern, 30 seconds from Ginza Station. Owner Hasegawa Ichirō, whose name is on the door, had run soba and Italian restaurants and lived in the US for about five years. He opened here in December 2016, choosing Ginza with an eye to opening abroad. Several people around the shop were from Aomori, so he built the ramen on Aomori produce: Shamorock chicken, and clams from Lake Jūsan, billed as 'Japan's best'. Every bowl shares one soup of Shamorock chicken, grilled flying fish and tomato, now cooked between clear and cloudy. The clam ramen's tare adds shottsuru fish sauce. Pork chashu comes in very large slices. In 2026 he still cooks almost single-handed, and the shop had not raised its prices since opening as of 2023.",
    chef_bio: {
      chef_name: '長谷川一郎 (Hasegawa Ichirō)', roles: ['owner-chef'],
      origin: 'Ginza 3-chōme; opened 12 December 2016',
      background: "Hasegawa ran soba restaurants, Italian places and other businesses before a friendship with a ramen craftsman led him to open a ramen shop. He studied in the US and lived there about five years, and picked Ginza with overseas expansion in mind; COVID changed that, and he kept the shop open every day to survive.",
      philosophy: 'Keep refining the bowl and keep prices easy for customers.',
      specialty: 'Shijimi (Jūsan-ko clam) ramen; Aomori Shamorock chicken soup; curry ramen; nebuta-zuke rice.',
      anecdotes: [
        { text: "「たまたま店の関係者に青森出身者が何人かいたから、青森の食材を使ったラーメンにしようってことになったんです」.", source: ST },
        { text: "The soup was once a clear chintan; he turned up the heat to draw more from the chicken, and now calls it 'between paitan and chintan'. Tomato was added to the stock.", source: ST },
        { text: 'Grilled sardines (iwashi yaki-boshi) became unobtainable during COVID, so grilled flying fish (yaki-ago) replaced them.', source: ST },
        { text: "A cut-out of the baseball player Ichirō stands in the corner. Asked whether he is aiming to be the Ichirō of ramen: 「なれるといいんですけど」.", source: ST },
        { text: 'October 2026: "The skill of a one-man operation in Ginza is remarkable" — the clam ramen arrived in under five minutes.', source: R + 'B537460171/' },
      ],
      japanese_sources_summary: 'さんたつ(2023.10.12): らーめん一郎、店主・長谷川一郎さん(そば屋・イタリアン等を経営、アメリカ在住経験)、2016年12月12日開業。青森シャモロック、十三湖のしじみ、焼きあご(コロナ禍でイワシ焼き干しから変更)、トマト。全ラーメン共通スープ(白湯と清湯の中間)。しじみらーめん900円(当時)、元ダレに塩としょっつる。麺は醤油・塩・カレーに黄色い縮れ中太麺、しじみに菅野製麺所の細ストレート麺。開業以来値上げなし、年中無休。食べログ: 6席、カード・QR可。',
      confidence: 'high', sources: [ST, TB, R + 'B537460171/', R + 'B537902249/', R + 'B473068093/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'A six-seat counter down a flight of stairs; ticket machine (cards also accepted per Tabelog). Many overseas guests; quick service.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Wheat noodles: curly medium-thick for shoyu/shio/curry, thin straight (菅野製麺所) for the clam ramen.', source: ST }],
      soy_sauce_wheat: [{ text: 'Shoyu ramen on the menu; the clam ramen tare adds shottsuru (fish sauce) to the salt base.', source: ST }],
      vegan_cross_contact: [{ text: 'One shared soup of Aomori Shamorock chicken, grilled flying fish and tomato for every ramen.', source: ST }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['chicken', 'gyokai', 'vegetable'], broth_texture: null, tare: ['shoyu', 'shio', 'other'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'wavy', hydration: null, handmade: false, notes: 'Yellow curly medium-thick noodles for shoyu, shio and curry; thin straight 菅野製麺所 noodles for the clam ramen.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'しじみらーめん (Jūsan-ko clam ramen) — ¥900 in 2023; 特製醤油らーめん ¥1,080 in October 2026.',
      chashu: 'Very large, deeply seasoned slices of pork chashu cut from big blocks.',
      notable_toppings: ['Jūsan-ko clams in the shell', 'charred negi', 'menma', 'seasoned egg (special)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and flying-fish soup.' },
      pantheon: "An Aomori bowl in the middle of Ginza: Shamorock chicken and grilled flying fish, simmered between clear and cloudy, with Lake Jūsan clams for the house special — gentle enough to drink to the bottom.",
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [ST, '「今は白湯と清湯の中間のスープ」; clam ramen 「旨味たっぷり…なのに、あっさり飲み干せる」.'],
        oiliness: [R + 'B537460171/', 'Deeply flavorful yet not too rich.'],
        clarity: [ST, 'Between paitan and chintan; a 2026 diner called the shoyu broth clear (' + R + 'B537480867/).'],
        tare_strength: [R + 'B535718121/', 'One diner found the broth quite light.'],
        noodle_firmness: [ST, 'Thin straight noodles with a パツパツ snap for the clam ramen; a 2026 diner liked the firm texture (' + R + 'B535811823/).'],
        aroma_punch: [ST, 'Charred negi (焦がしネギ) as an accent.'],
      },
      confidence: 'medium', sources: [ST, R + 'B537460171/', R + 'B535718121/', R + 'B535811823/', R + 'B537480867/'], last_checked: TODAY,
    },
    mom_and_pop: true,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目2番13号 (go) 3m; OSM node 6303336986 「らーめん一郎」 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B537902249/', R + 'B473068093/', R + 'B537460171/'],
    price_note: 'No published menu. The clam ramen price comes from 2023, and the special shoyu (¥1,080) from an October 2026 review. Other items are known from the 2023 feature and the sign outside.', last_checked: TODAY, items: [
      it('しじみらーめん', 'shijimi raamen', 'Jūsan-ko clam ramen (clams, chashu, menma, negi, charred negi)', '¥900', 'Ramen', 'no', 'no', '2023 price.', 'shijimi_ramen'),
      it('特製醤油らーめん', 'tokusei shouyu raamen', 'Special shoyu ramen', '¥1,080', 'Ramen', 'no', 'no', 'October 2026 review.', 'tokusei_shoyu_ramen'),
      it('塩らーめん', 'shio raamen', 'Shio ramen', '', 'Ramen', 'no', 'no', '2023 feature.', 'shio_ramen'),
      it('カレーらーめん', 'karee raamen', 'Curry ramen', '', 'Ramen', 'no', 'no', '2023 feature.', 'curry_ramen'),
      it('ねぶた漬ごはん', 'nebutazuke gohan', 'Rice with nebuta-zuke (Aomori pickle)', '', 'Rice', 'ask', 'ask', 'On the sign outside (2023).', 'nebutazuke_rice'),
    ] }, {
    cuisine: '青森食材のラーメン・十三湖のしじみらーめん・醤油・塩・カレー',
    neighborhood: '銀座三丁目、松屋通りの地下。銀座駅C8出口から徒歩30秒',
    gf_detail: 'グルテンフリーではありません。麺は小麦で、醤油・塩・カレーには黄色い縮れ中太麺、しじみらーめんには菅野製麺所の細ストレート麺を使います。タレには醤油を使い、しじみのタレにはしょっつるも加えています。グルテンフリーの選択肢はどの情報源にも見当たりません。',
    vegan_detail: 'ヴィーガンではありません。どの一杯も、青森シャモロックと焼きあご・トマトの共通スープです。しじみらーめんには十三湖のしじみが入り、どれにも大きな豚チャーシューがのります。',
    notes: '[個人店・青森ラーメン] 銀座駅から30秒、赤ちょうちんの下の地下にあるカウンター6席の店です。店名は店主・長谷川一郎さんの名前そのまま。そば屋やイタリアンを営み、アメリカで5年ほど暮らした経験があり、2016年12月、海外出店も視野に銀座で開業しました。店の関係者に青森出身者が何人かいたことから、青森の食材でラーメンを作ることに。シャモロックの鶏と、「日本一旨い」とされる十三湖のしじみです。スープはどの一杯も共通で、シャモロック・焼きあご・トマト。今は清湯と白湯の中間の仕上がりです。しじみのタレにはしょっつるを加えます。豚チャーシューはとても大きく切られています。2026年も店主がほぼワンオペで作り続けており、2023年時点で開業以来値上げをしていませんでした。',
  });
}

// ================================================================ 銀座元楽
{
  const OWN = 'https://www.genraku.com/ginza.html'; const KD = 'https://www.genraku.com/kodawari.html';
  const TB = TBR('A130101/13007627'); const R = TB + 'dtlrvwlst/';
  const a = day(['11:00', '23:00']), we = day(['11:00', '20:00']);
  put({
    id: 'tokyo_ginza_genraku', name: '銀座元楽 (Ginza Genraku)', category: 'OMNI',
    lat: 35.670157, lng: 139.766905,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Five kinds of wheat noodle are matched to the bowls. The house 元らーめん is a shoyu ramen, and the chashu is simmered in the shop\'s own tare. No gluten-free noodle is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The soup is pork knuckle bones simmered for three days with vegetables and chicken frames, under a thick layer of pork back fat, with pork-belly chashu.',
    hours_raw: 'Mon, Tue, Thu, Fri 11:00–23:00; Wed 11:00–22:30; Sat, Sun & holidays 11:00–20:00. Open daily except some days over Golden Week, Obon and New Year.',
    hours: { 0: a, 1: a, 2: day(['11:00', '22:30']), 3: a, 4: a, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme, by the Tōei cinema — 1 min from Higashi-Ginza exit A2',
    cuisine: 'Back-fat (seabura) tonkotsu ramen — shoyu "Gen" and shio "Raku" · buta-meshi', cuisine_type: 'ramen',
    website: OWN, gmaps: gm('銀座元楽 東京都中央区銀座4-10-12'), menu_url: OWN,
    notes: "[Ramen · back-fat tonkotsu] The Ginza branch of らーめん元楽, a back-fat ramen company whose head shop opened in Kuramae in 1995 and which also has a shop in Shimbashi. The soup uses only pork knuckle bones (genkotsu), simmered for three days with vegetables and chicken frames, skimmed hard, until it turns mellow and jellies when cold. The back fat that covers the bowl is fried, blanched, washed and simmered in the soup for two hours, so it comes out sweet and fluffy rather than greasy. Order 元 for shoyu or 楽 for shio. The pork-belly chashu is braised two and a half hours until it cuts with chopsticks. Half buta-meshi (pork over rice) is the usual side. Garlic and doubanjiang are on the counter.",
    chef_bio: {
      chef_name: null, roles: ['ramen company (Genraku Co., Ltd.) — Ginza branch'],
      origin: 'Founded 1995 (company profile); shops in Kuramae, Ginza and Shimbashi',
      background: 'Run by Genraku Co., Ltd., which operates the Kuramae head shop, this Ginza branch and a Shimbashi branch, and sells its chashu online.',
      philosophy: '「徹底的にクセ・臭いを抜いた背脂」 — back fat with every trace of animal smell removed.',
      specialty: 'Back-fat shoyu (元) and shio (楽) ramen on a three-day genkotsu soup; tender pork-belly chashu; buta-meshi.',
      anecdotes: [
        { text: 'The pork soup uses only the femur ("genkotsu"), rich in cartilage and collagen, simmered three days with vegetables and chicken frames until it sets like jelly.', source: KD },
        { text: 'The back fat is fried, blanched, hand-washed of excess fat and scum, then simmered two hours in the pork soup.', source: KD },
        { text: 'Five noodles for five styles, from ultra-thin for cold noodles to thick for tsukemen and abura-soba; curly thin noodles for the standard 元 and 楽 ramen.', source: KD },
        { text: 'An October 2026 regular ordered extra back fat and found it sweet, fluffy and not greasy.', source: R + 'B500750179/' },
      ],
      japanese_sources_summary: '公式(genraku.com): 銀座元楽、銀座4-10-12、TEL 03-3541-5678、月火木金11:00〜23:00、水11:00〜22:30、土日祝11:00〜20:00、無休(GW・盆・年末年始休みあり)。元らーめん(醤油)850円、楽らーめん(塩)850円、元/楽ちゃーしゅーめん1,250円、半ぶためしセット1,200円、温つけ麺1,000円 ほか。こだわり: 拳骨のみを野菜・鶏ガラと3日間煮込む、背脂は炒め・下ゆで・手洗い・2時間煮込み、豚バラを2時間半煮込むチャーシュー、5種類の麺。© Genraku Co., Ltd.',
      confidence: 'high', sources: [OWN, KD, 'https://www.genraku.com/locations.html', 'https://www.genraku.com/profile.html', TB, R + 'B500750179/', R + 'B537577600/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; the shop runs an English version of its website. Counter of 11 and a few tables.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Five wheat noodles matched to the bowls (ultra-thin to thick).', source: KD }],
      soy_sauce_wheat: [{ text: '元らーめん is a shoyu ramen; the chashu is braised in the shop\'s special tare (特製タレ).', source: OWN }],
      vegan_cross_contact: [{ text: 'Pork genkotsu bones with chicken frames and vegetables, three days; pork back fat over every bowl.', source: KD }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['tonkotsu', 'chicken', 'vegetable'], broth_texture: 'paitan', tare: ['shoyu', 'shio'], aroma_oil: ['lard/seabura'], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'wavy', hydration: null, handmade: null, notes: 'Curly thin noodles for the standard 元/楽 ramen and chashu-men; medium straight or medium for the special bowls; thick for tsukemen and abura-soba.' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen', 'mazesoba/abura-soba'],
      signature_bowl: '元らーめん (shoyu back-fat ramen) ¥850; with half buta-meshi ¥1,200.',
      chashu: 'Pork belly, trimmed and netted, braised 2½ hours in the house tare — tender enough to cut with chopsticks.',
      notable_toppings: ['a blanket of cleaned back fat', 'pork-belly chashu', 'garlic and doubanjiang on the counter'],
      gf: { status: 'no', note: 'Wheat noodles; shoyu tare.' },
      vegan: { status: 'no', note: 'Pork-bone soup and back fat.' },
      pantheon: "Tokyo back-fat ramen done carefully: a three-day genkotsu soup under a blanket of seabura that has been washed and simmered until it reads sweet and fluffy rather than greasy — heavy-looking, lighter-eating than it seems.",
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [KD, '「3日間煮込んだ濃厚スープ」.'],
        oiliness: [KD, '「丼を覆い尽くす背脂は元楽の象徴」; diners find it light despite the fat (' + R + 'B537209060/).'],
        clarity: [KD, 'Collagen-rich genkotsu simmered three days — a cloudy soup.'],
        tare_strength: [R + 'B524525560/', 'Sweet-savory shoyu with back fat.'],
        noodle_firmness: [null, 'Not described in any source read; scored at the midpoint.'],
        aroma_punch: [R + 'B536805445/', 'Garlic and doubanjiang are optional at the counter.'],
      },
      confidence: 'medium', sources: [KD, OWN, R + 'B537209060/', R + 'B524525560/', R + 'B536805445/'], last_checked: TODAY,
    },
    mom_and_pop: false,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目10番12号 (go) 8m; ${TODAY}`,
  }, { verified: 'authoritative', confidence: 'high', sources: [OWN, R + 'B537577600/'],
    price_note: "From the shop's own Ginza page (prices as published). Abura-soba ¥900 is from an October 2026 review.", last_checked: TODAY, items: [
      it('元らーめん（醤油らーめん）', 'gen raamen', 'Gen ramen — shoyu back-fat ramen', '¥850', 'Ramen', 'no', 'no', '', 'gen_ramen'),
      it('楽らーめん（塩らーめん）', 'raku raamen', 'Raku ramen — shio back-fat ramen', '¥850', 'Ramen', 'no', 'no', '', 'raku_ramen'),
      it('元ちゃーしゅーめん（醤油ちゃーしゅーめん）', 'gen chaashuumen', 'Gen chashu-men (shoyu)', '¥1,250', 'Ramen', 'no', 'no', '¥1,250 paid in October 2026.', 'gen_chashu_men'),
      it('楽ちゃーしゅーめん（塩ちゃーしゅーめん）', 'raku chaashuumen', 'Raku chashu-men (shio)', '¥1,250', 'Ramen', 'no', 'no', '', 'raku_chashu_men'),
      it('元らーめん半ぶためしセット', 'gen raamen han butameshi setto', 'Gen ramen + half buta-meshi', '¥1,200', 'Sets', 'no', 'no', '', 'gen_butameshi_set'),
      it('楽らーめん半ぶためしセット', 'raku raamen han butameshi setto', 'Raku ramen + half buta-meshi', '¥1,200', 'Sets', 'no', 'no', '', 'raku_butameshi_set'),
      it('温つけ麺', 'atsu tsukemen', 'Hot tsukemen (thick noodles)', '¥1,000', 'Tsukemen', 'no', 'no', '', 'atsu_tsukemen'),
      it('温つけ麺半ぶためしセット', 'atsu tsukemen han butameshi setto', 'Hot tsukemen + half buta-meshi', '¥1,350', 'Sets', 'no', 'no', '', 'tsukemen_butameshi_set'),
      it('辛つけめん（冬季限定）', 'kara tsukemen', 'Spicy tsukemen (winter only)', '¥850', 'Tsukemen', 'no', 'no', '', 'kara_tsukemen'),
      it('辛つけめん半ぶためしセット（冬季限定）', 'kara tsukemen han butameshi setto', 'Spicy tsukemen + half buta-meshi (winter)', '¥1,100', 'Sets', 'no', 'no', '', 'kara_tsukemen_set'),
      it('冷やしつけ麺（夏季限定）', 'hiyashi tsukemen', 'Cold tsukemen (summer only)', '', 'Tsukemen', 'no', 'no', '', 'hiyashi_tsukemen'),
      it('', '', 'Abura-soba (soup on the side)', '¥900', 'Noodles', 'no', 'no', 'October 2026 review.', 'abura_soba'),
    ] }, {
    cuisine: '背脂豚骨ラーメン(醤油の「元」・塩の「楽」)・ぶためし',
    neighborhood: '銀座四丁目、東映のそば。東銀座駅A2出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。一杯ごとに合わせた5種類の麺はすべて小麦で、看板の元らーめんは醤油ラーメン、チャーシューも特製ダレで煮込んでいます。グルテンフリーの麺はどの情報源にも見当たりません。',
    vegan_detail: 'ヴィーガンではありません。スープは豚の拳骨を野菜・鶏ガラと3日間煮込んだもので、たっぷりの豚背脂がのり、チャーシューは豚バラです。',
    notes: '[ラーメン・背脂豚骨] 1995年に蔵前で総本店を開いた背脂ラーメンの会社「らーめん元楽」の銀座店で、新橋にも店があります。スープは豚の大腿骨(拳骨)だけを使い、野菜・鶏ガラと3日間、アクを取りながら煮込みます。まろやかで、冷めるとゼリー状になるスープです。丼を覆う背脂は炒め・下ゆで・手洗いの後にスープで2時間煮込むので、脂っぽくなく甘くふわふわ。醤油の「元」か塩の「楽」を選びます。豚バラのチャーシューは2時間半煮込み、箸で切れるほどの柔らかさ。定番のサイドは半ぶためし(豚丼)。卓上ににんにくと豆板醤があります。',
  });
}

// ================================================================ 自家製麺 伊藤 銀座店
{
  const TB = TBR('A130101/13164387'); const R = TB + 'dtlrvwlst/';
  const ST = 'https://san-tatsu.jp/articles/152257/';
  const wk = day(['11:00', '23:00']), we = day(['11:00', '20:00']);
  put({
    id: 'tokyo_jikaseimen_ito_ginza', name: '自家製麺 伊藤 銀座店 (Jikaseimen Itō Ginza)', category: 'OMNI',
    lat: 35.669302, lng: 139.764899,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: "Not gluten-free. The group's own firm, low-hydration wheat noodles are made in its central kitchen. No gluten-free option is mentioned.",
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The soup is built on niboshi (dried sardines). The Hinai-jidori soba adds a chicken stock, and the niku-soba carries pork chashu.',
    hours_raw: 'Mon–Fri 11:00–23:00; Sat, Sun & holidays 11:00–20:00 (Tabelog). May close early when ingredients run out. Cards, IC and QR payments accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 6-chōme, Tokyo Ginza Bldg B1F — 3 min from Ginza / Higashi-Ginza',
    cuisine: 'Niboshi chuka soba (Itō family style) · niku-soba · Hinai-jidori soba · tsukemen', cuisine_type: 'ramen',
    website: null, gmaps: gm('自家製麺 伊藤 銀座店 東京都中央区銀座6-12-2'), menu_url: null,
    notes: "[Ramen · niboshi] The Ginza branch, opened January 2014, of 自家製麺 伊藤, the niboshi chuka-soba of the Itō ramen family. The original shop is in Kakunodate, Akita. Itō Hiromu runs the Akabane shop and spread the name to Ginza and Kanda. He makes the noodles and soup in a central kitchen and leaves each shop to its manager. The style is famous for its plainness: a bitter-edged niboshi soup glittering with sardine powder, firm low-hydration noodles, and in the classic bowl nothing but green onion. The niku-soba piles on chashu. Ginza also serves the uncle's Hinai-jidori chicken soba, which a 2026 diner says the Ōji branch doesn't have, and a niboshi tsukemen whose noodles come soaked in a kombu-water-like broth. 12 seats.",
    chef_bio: {
      chef_name: null, roles: ['branch of 自家製麺 伊藤 (owner 伊藤広夢); run by a shop manager'],
      origin: 'Itō family niboshi ramen — original in Kakunodate, Akita; Ginza branch opened 20 January 2014',
      background: "The Itō family runs several niboshi-ramen shops: the uncle's original in Kakunodate, the father's 中華そば 伊藤 in Ōji-Kamiya, the elder brother's shop in Warabi, and Itō Hiromu's 自家製麺 伊藤 in Akabane, which he spread to Ginza and Kanda. Hiromu felt it would be a waste for the family's craftsmen's ramen to stay a single-shop secret.",
      philosophy: "「美味しい煮干そばをもっと世間に知ってもらいたい」「伊藤の名前を広めたい」 — Itō Hiromu.",
      specialty: "Niboshi chuka soba with green onion only; niku-soba; the uncle's Hinai-jidori soba.",
      anecdotes: [
        { text: 'Hiromu runs two signatures: his father\'s chuka soba and his uncle\'s Hinai-jidori soba.', source: ST },
        { text: 'As the shops multiplied, the noodles and soup moved from the Akabane kitchen to a central kitchen that supplies every branch; Hiromu is mostly there, with each shop entrusted to its manager.', source: ST },
        { text: 'Niboshi are bought directly from Kujūkuri every two months; the soup has been tuned slightly to be easier for everyone, while the father\'s shop keeps the old, strong niboshi.', source: ST },
        { text: 'October 2026: the Hinai-jidori soba (medium, ¥1,150) — "not available in Oji" — a double soup of Hinai chicken and niboshi with the firm, chewy Itō noodles.', source: R + 'B537696731/' },
      ],
      japanese_sources_summary: 'さんたつ(2022.02.10): 伊藤家 — 角館『自家製麺 伊藤』(伯父)、王子神谷『中華そば 伊藤』(父)、蕨『麺処 遊』(兄)、赤羽『自家製麺 伊藤』オーナー伊藤広夢さんが銀座・神田へ展開しビブグルマン。父の中華そばと伯父の比内地鶏そばが二枚看板。セントラルキッチンで麺とスープを各店へ。煮干しは九十九里から2ヶ月に1度直接仕入れ。低加水のポキポキ麺。食べログ: 銀座店 開店2014年1月20日、12席、カード・IC・QR可。',
      confidence: 'medium', sources: [ST, TB, R + 'B537696731/', R + 'B537856627/', R + 'B537192824/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'A small basement shop with a ticket machine; cards, IC and QR accepted. Counter of 4 and two tables.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: "The Itō noodles are wheat, the same flour at every shop, made in the group's central kitchen.", source: ST }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [
        { text: 'A niboshi soup (sardines bought directly from Kujūkuri).', source: ST },
        { text: 'The Hinai-jidori soba is a double soup of Hinai chicken and niboshi.', source: R + 'B537696731/' },
      ],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['niboshi', 'chicken'], broth_texture: 'chintan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: 'low', handmade: true, notes: "The group's own low-hydration noodles, made in its central kitchen — firm and 'snappy' (ポキポキ); some 2026 diners found them thin and square-cut, others medium-thick." },
      regional_style: ['Akita Kakunodate niboshi'], sub_genre: ['niboshi', 'tsukemen'],
      signature_bowl: '中華そば (niboshi, green onion only) or 肉そば (with chashu); 比内地鶏そば (medium) ¥1,150 in October 2026.',
      chashu: 'Thick-cut chashu piled on the niku-soba.',
      notable_toppings: ['green onion only (chuka soba)', 'chashu (niku-soba)', 'nori (tsukemen)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Niboshi soup; chicken in the Hinai bowl.' },
      pantheon: "The Itō family's Akita niboshi soba, spread to Tokyo: a glittering, slightly bitter sardine soup and firm low-hydration noodles, with nothing else in the bowl but green onion.",
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 5, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537192824/', 'The broth was quite rich, with a strong niboshi flavor.'],
        oiliness: [null, 'Not described for the chuka soba; one diner found the tsukemen side oily (' + R + 'B537436187/). Scored low-mid.'],
        clarity: [ST, '「煮干し粉がキラキラ光るスープ」 — a clear soup glittering with sardine powder.'],
        tare_strength: [null, 'Not described in any source read; scored at the midpoint.'],
        noodle_firmness: [ST, '「ポキポキの低加水麺」; firm and chewy (' + R + 'B537696731/).'],
        aroma_punch: [ST, '「口の中のビターな煮干の香り」 — a bitter niboshi aroma.'],
      },
      confidence: 'medium', sources: [ST, R + 'B537192824/', R + 'B537696731/', R + 'B537436187/'], last_checked: TODAY,
    },
    mom_and_pop: false,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目12番2号 (go) 22m; OSM node 6303370486 「自家製麺 伊藤 銀座店」 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537696731/', R + 'B537856627/', R + 'B537485143/', ST],
    price_note: 'No published menu. Two prices come from October 2026 reviews; the bowl names are from the 2022 feature and those reviews.', last_checked: TODAY, items: [
      it('中華そば', 'chuuka soba', 'Chuka soba (niboshi; green onion only)', '', 'Ramen', 'no', 'no', '', 'chuka_soba'),
      it('肉そば', 'niku soba', 'Niku-soba (with chashu)', '', 'Ramen', 'no', 'no', '', 'niku_soba'),
      it('比内地鶏そば', 'hinai jidori soba', 'Hinai-jidori soba (chicken + niboshi double soup), medium', '¥1,150', 'Ramen', 'no', 'no', 'October 2026 review.', 'hinai_jidori_soba'),
      it('煮干しつけ麺', 'niboshi tsukemen', 'Niboshi tsukemen (noodles soaked in a kombu-water-style broth; four chashu, negi, nori)', '¥1,200', 'Tsukemen', 'no', 'no', 'October 2026 review; large +¥100.', 'niboshi_tsukemen'),
    ] }, {
    cuisine: '伊藤家の煮干し中華そば・肉そば・比内地鶏そば・つけ麺',
    neighborhood: '銀座六丁目、東京銀座ビルディングB1F。銀座駅・東銀座駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。麺は系列のセントラルキッチンで作る、固めの低加水の小麦麺です。グルテンフリーの選択肢はどの情報源にも見当たりません。',
    vegan_detail: 'ヴィーガンではありません。スープは煮干しがベースで、比内地鶏そばは鶏のスープを合わせ、肉そばには豚のチャーシューがのります。',
    notes: '[ラーメン・煮干し] 秋田・角館を本店とするラーメン一家、伊藤家の煮干し中華そば「自家製麺 伊藤」の銀座店で、2014年1月開店。赤羽店を営む伊藤広夢さんが銀座・神田へと広げました。麺とスープはセントラルキッチンで作り、各店は店長に任せています。潔さで知られるスタイルで、煮干し粉がきらめくほろ苦い煮干しスープに、固めの低加水麺。定番の一杯の具はネギだけです。肉そばはチャーシューたっぷり。銀座では伯父の味である比内地鶏そばも出しています(2026年の口コミによれば王子店にはない)。煮干しつけ麺の麺は昆布水のようなスープに浸って出てきます。12席。',
  });
}

// ================================================================ 銀座らぁ麺 しら石
{
  const TB = TBR('A130103/13287878'); const R = TB + 'dtlrvwlst/';
  const BA = 'https://baila.hpplus.jp/blogs/shimizu_maya/59390';
  const ov = ['11:00', '10:00'];
  put({
    id: 'tokyo_ginza_ramen_shiraishi', name: '銀座らぁ麺 しら石 (Ginza Raamen Shiraishi)', category: 'OMNI',
    lat: 35.668564, lng: 139.760714,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. A shoyu ramen and kombu-water tsukemen shop with wheat noodles (two kinds in the tsukemen). The house bowl is a soy-sauce ramen. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The soup is Daisen chicken and duck, and other bowls use charcoal-grilled horse-mackerel (aji) and niboshi dashi, topped with chashu.',
    hours_raw: 'Mon 11:30 – 10:00 next morning; Tue–Fri 11:00 – 10:00 next morning; Sat 11:00–22:00; Sun 11:30–22:00 (Tabelog — open through the night on weekdays). Ticket machine; Tabelog lists no card, e-money or QR payment.',
    hours: { 0: day(['11:30', '10:00']), 1: day(ov), 2: day(ov), 3: day(ov), 4: day(ov), 5: day(['11:00', '22:00']), 6: day(['11:30', '22:00']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Ginza 8-chōme, between Ginza and Shimbashi — about 5 min from either',
    cuisine: 'Chicken-and-duck shoyu ramen · kombu-water tsukemen · grilled-aji dashi ramen (INGS group)', cuisine_type: 'ramen',
    website: null, gmaps: gm('銀座らぁ麺 しら石 東京都中央区銀座8-6-8'), menu_url: null,
    notes: "[Ramen · INGS group] A Ginza 8-chōme ramen shop from the INGS group, which also runs はやし田 and 鳳仙花. It sits halfway between Ginza and Shimbashi stations and stays open through the night on weekdays. The shoyu ramen is built on Daisen chicken and duck, and INGS's soy-sauce know-how gives it sweetness and body as well as bite. The kombu-water tsukemen pairs two kinds of noodle and is what most customers order. There is also a charcoal-grilled aji (horse mackerel) and niboshi dashi ramen. You buy a ticket at the machine and queue.",
    chef_bio: {
      chef_name: null, roles: ['INGS group (はやし田, 鳳仙花)'],
      origin: 'Ginza 8-chōme',
      background: "A shop of the INGS ramen group, known for はやし田 and 鳳仙花. A 2026 diner was told by a friend that the shop once had a Japanese woman as owner but that this has changed; no source confirms it.",
      philosophy: null,
      specialty: 'Daisen-chicken-and-duck shoyu ramen; kombu-water tsukemen with two noodles; charcoal-grilled aji dashi ramen.',
      anecdotes: [
        { text: "BAILA: the soup uses Daisen chicken and duck, with a body and depth 'only duck can give'; the shoyu has sweetness and body as well as bite — 'the strength of INGS's shoyu-ramen know-how'.", source: BA },
        { text: "October 2026: 'I noticed most customers were ordering Tsukemen instead' of the special shoyu.", source: R + 'B537264460/' },
      ],
      japanese_sources_summary: 'BAILA: 銀座 らぁ麺 しら石、新橋と銀座駅の間(各徒歩5分)、展開は『はやし田』『鳳仙花』のINGSグループ。大山鶏と鴨の醤油ラーメン、二種類の麺の昆布水つけ麺。特製醤油らぁ麺1,250円(当時)。食べログ: 銀座8-6-8 銀座片桐ビルⅣ 1F、平日は翌朝10:00まで、カード・電子マネー・QR不可。2026年の口コミ: 特製昆布水つけ麺1,450円、特製醤油1,300円、炭火焼き干し鯵の出汁らーめん。',
      confidence: 'medium', sources: [BA, TB, R + 'B530380661/', R + 'B537264460/', R + 'B537341684/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine, then queue; open overnight on weekdays. Tabelog lists no cashless payment.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Two kinds of wheat noodle in the kombu-water tsukemen; straight noodles in the ramen.', source: BA }],
      soy_sauce_wheat: [{ text: 'The house bowl is a shoyu (soy-sauce) ramen.', source: BA }],
      vegan_cross_contact: [
        { text: 'Daisen chicken and duck soup.', source: BA },
        { text: 'A charcoal-grilled aji and niboshi dashi ramen; chashu on the bowls.', source: R + 'B537677508/' },
      ],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['chicken', 'other', 'gyokai'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: 'straight', hydration: null, handmade: null, notes: 'Straight noodles in the ramen; two kinds of noodle in the kombu-water tsukemen, very slippery.' },
      regional_style: ['Tokyo shoyu'], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: '特製昆布水つけ麺 (special kombu-water tsukemen), ¥1,450 in October 2026; 特製醤油らぁ麺 ¥1,300.',
      chashu: null,
      notable_toppings: ['kombu water over the tsukemen noodles', 'seasoned egg (special)'],
      gf: { status: 'no', note: 'Wheat noodles; shoyu.' },
      vegan: { status: 'no', note: 'Chicken and duck soup.' },
      pantheon: "INGS's take on the modern Tokyo shoyu bowl, Daisen chicken with duck for depth, but the crowd comes for the kombu-water tsukemen, whose two noodles slide out of a pool of kelp water.",
      profile: { richness: 3, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [BA, 'Duck adds body and depth (鴨にしか出せないコクと奥行き).'],
        oiliness: [null, 'Not described in any source read; scored low-mid.'],
        clarity: [null, 'A shoyu chintan-style bowl; clarity not described directly — scored from style.'],
        tare_strength: [BA, 'Shoyu with 「キレ」 as well as body and sweetness; one 2026 diner found the aji ramen quite salty (' + R + 'B537677508/).'],
        noodle_firmness: [null, 'Not described in any source read; scored at the midpoint.'],
        aroma_punch: [R + 'B537341684/', 'The aroma of charcoal-grilled dried horse mackerel in the aji ramen.'],
      },
      confidence: 'low', sources: [BA, R + 'B537341684/', R + 'B537677508/'], last_checked: TODAY,
    },
    mom_and_pop: false,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目6番8号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530380661/', R + 'B537264460/', R + 'B537341684/', R + 'B537502939/', BA],
    price_note: 'No published menu; prices are from October 2026 reviews, plus BAILA (¥1,250 at the time) for the special shoyu.', last_checked: TODAY, items: [
      it('特製昆布水つけ麺', 'tokusei konbusui tsukemen', 'Special kombu-water tsukemen', '¥1,450', 'Tsukemen', 'no', 'no', 'October 2026 reviews.', 'konbusui_tsukemen'),
      it('特製醤油らぁ麺', 'tokusei shouyu raamen', 'Special shoyu ramen (Daisen chicken and duck)', '¥1,300', 'Ramen', 'no', 'no', 'October 2026 review (¥1,250 per BAILA earlier).', 'tokusei_shoyu_ramen'),
      it('', '', 'Special charcoal-grilled aji (horse mackerel) dashi ramen', '', 'Ramen', 'no', 'no', 'October 2026 reviews.', 'aji_dashi_ramen'),
    ] }, {
    cuisine: '鶏と鴨の醤油らぁ麺・昆布水つけ麺・炭火焼き干し鯵の出汁らーめん(INGSグループ)',
    neighborhood: '銀座八丁目、銀座駅と新橋駅の間(どちらからも徒歩約5分)',
    gf_detail: 'グルテンフリーではありません。醤油らぁ麺と昆布水つけ麺の店で、麺は小麦(つけ麺は2種類)、看板は醤油ラーメンです。グルテンフリーの選択肢はどの情報源にも見当たりません。',
    vegan_detail: 'ヴィーガンではありません。スープは大山鶏と鴨で、炭火焼き干し鯵と煮干しの出汁の一杯もあり、チャーシューがのります。',
    notes: '[ラーメン・INGSグループ] 『はやし田』『鳳仙花』などのINGSグループが銀座八丁目に出した店で、銀座駅と新橋駅のちょうど間にあり、平日は夜通し営業しています。醤油ラーメンは大山鶏と鴨がベースで、INGSの醤油の技でキレに加えてコクと甘みがあります。2種類の麺を合わせる昆布水つけ麺が客の多くの注文です。炭火焼き干し鯵と煮干しの出汁らーめんもあります。券売機で食券を買って並びます。',
  });
}

// ================================================================ 銀座 平
{
  const TB = TBR('A130103/13326387'); const R = TB + 'dtlrvwlst/';
  const s = day(['11:00', '14:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_ginza_taira', name: '銀座 平 (Ginza Taira)', category: 'OMNI',
    lat: 35.668356, lng: 139.759807,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Cold Chinese wheat noodles dipped in a chilli-and-chilli-oil soy-sauce sauce, in the Hiroshima tsukemen style. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The standard bowl comes with pork belly (pork shabu) alongside the boiled cabbage and white leek, and the dipping sauce is not described as plant-based.',
    hours_raw: 'Mon–Sat 11:00–14:00 & 17:00–23:00; closed Sundays and holidays. Opened 26 September 2026. Order at the counter and pay at your seat — cash, cards, IC and QR accepted.',
    hours: { 0: s, 1: s, 2: s, 3: s, 4: s, 5: s }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, 4th floor of a building among the clubs and lounges — 3 min from Shimbashi Stn',
    cuisine: 'Hiroshima-style spicy cold tsukemen (karai soba) · tsukemen', cuisine_type: 'ramen',
    website: null, gmaps: gm('銀座 平 東京都中央区銀座8-5-12'), menu_url: null,
    notes: "[Ramen · Hiroshima tsukemen] An eight-seat counter opened in September 2026 on the 4th floor of a Ginza 8-chōme building full of clubs. Diners say it feels like a sushi counter. It serves its own version of Hiroshima's soul food, tsukemen: cold thin noodles, spun dry in a salad spinner so they don't water down the sauce, with boiled cabbage, shredded white leek and pork belly. Everything goes into a cold soy-sauce sauce hot with chilli and chilli oil, or a non-spicy one if you prefer. Up to one and a half servings of noodles cost the same. 2026 diners describe a friendly owner working with one member of staff.",
    chef_bio: {
      chef_name: null, roles: ['owner-operator (per 2026 reviews); no ownership source'],
      origin: 'Ginza 8-chōme; opened 26 September 2026',
      background: 'A new shop; 2026 reviews describe a friendly owner working with one staff member. No owner name or background appears in any source found.',
      philosophy: null,
      specialty: 'Hiroshima-style cold spicy tsukemen with boiled cabbage and pork belly; noodle portion 0–1.5 servings.',
      anecdotes: [
        { text: 'The thin noodles are drained in a salad spinner so the sauce does not get diluted to the end.', source: R + 'B536848578/' },
        { text: 'Cold Chinese noodles with plenty of boiled vegetables in a spicy cold soy-based sauce with chilli and chilli oil — "a local specialty (soul food) from Hiroshima".', source: R + 'B536475988/' },
        { text: "'Today, it seems to be just the friendly owner and one female staff member working together.'", source: R + 'B536991110/' },
      ],
      japanese_sources_summary: '食べログ: 銀座 平、銀座8-5-12 第2ポールスタービル4F、開店2026年9月26日、カウンター8席、月〜土11:00〜14:00・17:00〜23:00、日祝休、予約可、カード・電子マネー・QR可。2026年の口コミ: 広島つけ麺風の辛いつけダレ、茹でキャベツ・白髪ネギ・豚バラ、麺量0〜1.5玉同額、辛いSOBA 1,000円。',
      confidence: 'low', sources: [TB, R + 'B536475988/', R + 'B536848578/', R + 'B536991110/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'An eight-seat counter up on the 4th floor; order verbally and pay at your seat (cash or cashless). Choose noodle amount and spicy or not.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Cold Chinese (wheat) noodles, Hiroshima tsukemen style.', source: R + 'B536475988/' }],
      soy_sauce_wheat: [{ text: 'The dipping sauce is a cold soy-sauce base with chilli and chilli oil.', source: R + 'B536475988/' }],
      vegan_cross_contact: [{ text: 'Default toppings include pork belly with the boiled cabbage and white leek.', source: R + 'B536848578/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['other'], broth_texture: null, tare: ['shoyu'], aroma_oil: ['other'], richness: 'assari',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: null, notes: 'Thin cold noodles, spun dry in a salad spinner; 0 to 1.5 servings at the same price.' },
      regional_style: ['Hiroshima tsukemen'], sub_genre: ['tsukemen'],
      signature_bowl: '辛いSOBA (spicy soba, 1 serving) ¥1,000 — the basic Hiroshima-style tsukemen.',
      chashu: 'Pork belly (shabu-style) rather than chashu.',
      notable_toppings: ['boiled cabbage', 'shredded white leek', 'pork belly'],
      gf: { status: 'no', note: 'Wheat noodles; soy-sauce dip.' },
      vegan: { status: 'no', note: 'Pork belly in the standard serving.' },
      pantheon: "Hiroshima's cold, fiery tsukemen brought to a Ginza club building: thin chilled noodles, boiled cabbage and pork dunked in a sour-hot soy and chilli-oil dip — refreshing rather than rich.",
      profile: { richness: 1, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536583254/', 'Surprisingly refreshing.'],
        oiliness: [R + 'B536475988/', 'Chilli oil in the dipping sauce.'],
        clarity: [R + 'B536475988/', 'A soy-and-chilli-oil dipping sauce — not a clear soup.'],
        tare_strength: [R + 'B536475988/', 'A spicy cold soy-sauce-based dip.'],
        noodle_firmness: [null, 'Not described in any source read; scored at the midpoint.'],
        aroma_punch: [R + 'B536645386/', 'Pleasantly spicy with the spicy sauce (a non-spicy option exists).'],
      },
      confidence: 'low', sources: [R + 'B536475988/', R + 'B536583254/', R + 'B536645386/'], last_checked: TODAY,
    },
    mom_and_pop: false,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目5番12号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536475988/', R + 'B536991110/', R + 'B536901821/'],
    price_note: 'A new shop with no published menu. Prices are what Tabelog reviewers paid in September–October 2026, and the names come from machine-translated reviews.', last_checked: TODAY, items: [
      it('', '', 'Spicy soba (Hiroshima-style tsukemen; 0–1.5 servings same price)', '¥1,000', 'Tsukemen', 'no', 'no', 'September–October 2026 reviews.', 'karai_soba'),
      it('', '', 'Tsukemen (with toppings)', '¥1,500', 'Tsukemen', 'no', 'no', 'October 2026 review.', 'tsukemen'),
    ] }, {
    cuisine: '広島つけ麺風の辛い冷たいつけ麺',
    neighborhood: '銀座八丁目、クラブやラウンジの多いビルの4階。新橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。広島つけ麺スタイルで、冷たい中華麺(小麦)を唐辛子とラー油の効いた醤油ベースのつけダレで食べます。グルテンフリーの選択肢はどの情報源にも見当たりません。',
    vegan_detail: 'ヴィーガンではありません。基本の一杯には茹でキャベツと白髪ネギに豚バラ(豚しゃぶ)がのり、つけダレも植物性とは書かれていません。',
    notes: '[ラーメン・広島つけ麺] 2026年9月、銀座八丁目のクラブが入るビルの4階に開いた8席のカウンターで、口コミでは寿司カウンターのような雰囲気と評されます。出すのは広島のソウルフード、つけ麺の自己流アレンジ。細い冷麺はタレが薄まらないようサラダスピナーで水を切り、茹でキャベツ・白髪ネギ・豚バラを添えます。唐辛子とラー油の効いた冷たい醤油ダレ(辛くないタレも選べます)につけて食べます。麺は1.5玉まで同額。2026年の口コミでは、気さくな店主がスタッフ1人と切り盛りしていました。',
  });
}

save();
