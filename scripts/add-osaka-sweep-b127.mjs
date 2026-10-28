// Osaka sweep (2-mile circle around Dotonbori), batch 127 — ramen phase (all OMNI).
//   + 神虎 肥後橋店 (tonkotsu in standard, black garlic and spicy red; GIN NO BUDOU group; 10:00–23:00; cash only; Higobashi)
//   + ユーミン (neighborhood Chinese: champon, gomoku ramen, handmade gyoza, cheap sets; run by two people; Karahori) — mom_and_pop
//   + 麺処 山椒 そのだ裏天王寺店 (sansho mazesoba in a vinyl-walled stall in the Hanwa arcade; until 2:00; Tennoji)
//   + しあわせのらーめん ミゥ (one-person tonkotsu lunch counter, ramen-and-rice sets from ¥800; Morinomiya) — mom_and_pop
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 127);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 神虎 肥後橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27052316/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://silver-grape.com/';
  put({
    id: 'osaka_kami_tora_higobashi', name: '神虎 肥後橋店 (Kami Tora Higobashi)', category: 'OMNI',
    lat: 34.691752, lng: 135.495582, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles; tare; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone soup; back fat; chashu; egg.',
    hours_raw: 'Daily 10:00–23:00 (last order 22:30); may close early when busy; closed 30 December–3 January (Tabelog). Ticket machine outside (September 2026). Cash only (Tabelog). New app users get a free chashu rice bowl (October 2026).',
    hours: ALL(day(['10:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Edobori 1-14-12, Oriza Higobashi 1F — 1 min from Higobashi Stn',
    cuisine: 'Tonkotsu ramen · Kami Tora ramen (standard tonkotsu) ¥890: rich pork-bone soup, thin noodles, firmness and extra fat to order · black: roasted black garlic oil, wood ear, seasoned egg · Akatora (red): spicy miso tonkotsu, not very hot · kaedama ¥100, ordered any time · toppings: seasoned egg ¥150, green onion ¥130, wood ear ¥130 · chashu rice bowl ¥410 · gyoza, 4 pieces ¥280 · table: spicy takana, pickled ginger, garlic, sesame, chili, "Akuma" sauce · 5 counter seats and 3 tables for four',
    website: OWN, gmaps: gm('神虎 肥後橋店'), menu_url: null,
    notes: "[Ramen · tonkotsu in three colors by Higobashi] A tonkotsu shop of the GIN NO BUDOU group (the people behind Zagin) a minute from Higobashi, open since 2019 from 10:00 to 23:00, with a line even mid-afternoon. Three bowls: the standard Kami Tora ramen (¥890), rich pork bone on thin noodles; the black, with fragrant roasted black garlic oil and wood ear; and the red Akatora, a spicy miso tonkotsu that one diner found not hot at all. Order the noodles firm, ask for extra fat, and add kaedama (¥100) whenever you like. Takana, pickled ginger and garlic are on the table. Gyoza with the house Akuma sauce and a chashu rice bowl round it out. One diner found the soup too intense, another wished it were hotter. Ticket machine outside; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 December 2019 (Tabelog); a tonkotsu shop of the GIN NO BUDOU group, known for Zagin (September 2026 review).', background: 'Tonkotsu ramen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Tonkotsu ramen: standard, black garlic and spicy red.',
      anecdotes: [
        { text: '"The rich flavor of the pork bone broth was absolutely delicious! The noodles were firm, just the way I like them!… I appreciated that I could request extra noodles at my preferred timing." — October 2026, Kami Tora ramen ¥890 with extra fat.', source: R + 'B536943231/' },
        { text: '"The roasted garlic added a wonderful aroma that paired perfectly with the broth and noodles. The combination of wood ear mushrooms and seasoned egg was also delightful…" — October 2026, black ramen.', source: R + 'B537279876/' },
      ],
      japanese_sources_summary: '食べログ: 神虎 肥後橋店、大阪市西区江戸堀1-14-12 オリザ肥後橋 1F、四つ橋線肥後橋駅から徒歩1分、毎日10:00〜23:00 (L.O. 22:30)、混雑で早じまいあり、12月30日〜1月3日休み、カード・電子マネー・QR不可、19席 (カウンター5、4人掛けテーブル3)、2019年12月11日開店、公式サイトあり。口コミ(2026年9〜10月): Zagin などの GIN NO BUDOU グループの豚骨ラーメン、スタンダード・黒 (焦がしにんにく)・赤 (辛味噌) の3種、神虎ラーメン890円、味玉150円、ねぎ130円、きくらげ130円、チャーシュー丼410円、餃子4個280円、替え玉100円は好きなタイミングで、脂多め、麺の硬さ、アプリ新規登録でチャーシュー丼無料、卓上の辛子高菜、紅しょうが、にんにく、ごま、唐辛子、Akuma ソース、外の券売機、平日14時過ぎでも5人待ち、濃すぎたという声、スープがもう少し熱ければという声、Akatora は辛くないという声、注文の間違いへの丁寧な謝罪、きびきびした接客と外での見送り。',
      confidence: 'medium', sources: [TB, OWN, R + 'B535998140/', R + 'B536082923/', R + 'B536441277/', R + 'B536943231/', R + 'B537279876/', R + 'B537996944/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: ['black garlic oil (black)', 'back fat'], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin noodles, firmness to order; kaedama any time (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Kami Tora ramen (standard tonkotsu), ¥890 (October 2026).',
      chashu: 'Pork chashu; chashu rice bowl on the side (2026).',
      notable_toppings: ['roasted black garlic oil', 'wood ear', 'seasoned egg', 'spicy takana', 'pickled ginger'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone soup.' },
      pantheon: 'Higobashi\'s all-day tonkotsu in standard, black garlic and spicy red.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536082923/', '"It was rich and flavorful, but perhaps a bit too intense for me" — placed high.'],
        oiliness: [R + 'B536943231/', 'Ordered "with extra fat"; one diner found it heavy (B536082923) — placed high.'],
        clarity: [R + 'B536943231/', '"The rich flavor of the pork bone broth" — a pork-bone paitan, bottom of scale.'],
        tare_strength: [R + 'B536441277/', '"The broth felt a bit weak" in the Akatora; the standard is rich — mid-scale.'],
        noodle_firmness: [R + 'B536943231/', '"The noodles were firm, just the way I like them" — placed high.'],
        aroma_punch: [R + 'B537279876/', '"The roasted garlic added a wonderful aroma" (black) — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B536943231/', R + 'B536082923/', R + 'B537279876/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff help at the outdoor ticket machine and explain the menu (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区江戸堀1-14-12 オリザ肥後橋 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区江戸堀一丁目14番12号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536082923/', R + 'B536943231/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kami Tora ramen (standard tonkotsu)', '¥890', 'Ramen', 'no', 'no', 'October 2026.', 'standard'),
      it('', '', 'Black tonkotsu (roasted black garlic)', '', 'Ramen', 'no', 'no', 'October 2026.', 'kuro'),
      it('', '', 'Akatora (spicy miso tonkotsu)', '', 'Ramen', 'no', 'no', 'September 2026.', 'aka'),
      it('', '', 'Kaedama', '¥100', 'Toppings', 'no', 'no', 'October 2026.', 'kaedama'),
      it('', '', 'Seasoned egg', '¥150', 'Toppings', 'no', 'no', 'September 2026.', 'ajitama'),
      it('', '', 'Chashu rice bowl', '¥410', 'Rice', 'no', 'no', 'September 2026.', 'chashu_don'),
      it('', '', 'Gyoza, 4 pieces', '¥280', 'Sides', 'no', 'no', 'September 2026.', 'gyoza'),
    ] }, {
    cuisine: '豚骨ラーメン・神虎ラーメン (スタンダードの豚骨) 890円: 濃厚な豚骨スープ、細麺、硬さと脂の量はお好みで・黒: 焦がしにんにくの黒い油、きくらげ、味玉・Akatora (赤): 辛味噌の豚骨、辛さは控えめ・替え玉100円は好きなときに・トッピング: 味玉150円、ねぎ130円、きくらげ130円・チャーシュー丼410円・餃子4個280円・卓上: 辛子高菜、紅しょうが、にんにく、ごま、唐辛子、Akuma ソース・カウンター5席と4人掛けテーブル3卓',
    neighborhood: '西区江戸堀1-14-12 オリザ肥後橋 1F。肥後橋駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の細麺、たれ、餃子。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、背脂、チャーシュー、卵。',
    notes: '[ラーメン・肥後橋近く、3色の豚骨] Zagin を手がける GIN NO BUDOU グループの豚骨の店で、肥後橋から1分、2019年開店、10時から23時まで営業し、昼過ぎでも行列。一杯は3種: 細麺に濃厚な豚骨のスタンダード神虎ラーメン(890円)、香ばしい焦がしにんにくの油ときくらげの黒、辛くなかったという声の辛味噌豚骨 Akatora。麺は硬めで、脂多めもでき、替え玉(100円)は好きなときに。卓上に辛子高菜、紅しょうが、にんにく。Akuma ソースで食べる餃子やチャーシュー丼も。濃すぎたという声や、スープがもっと熱ければという声も。食券は外の券売機、現金のみ。',
  });
}

// ================================================================ ユーミン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27068230/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:00'], ['17:30', '21:00']);
  put({
    id: 'osaka_yuming_karahori', name: 'ユーミン (Yuming)', category: 'OMNI',
    lat: 34.674559, lng: 135.52788, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based champon soup; handmade gyoza wrappers; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth; pork, shrimp; ham, sausage and bacon in the fried rice; egg.',
    hours_raw: 'Daily 11:00–14:00 and 17:30–21:00; closed the 1st and 3rd Sundays; hours may change (Tabelog). Daily lunch specials 11:30–14:00 (2019 sign). Order verbally; pay after the meal (May 2026). Cash only; smoking area inside (Tabelog).',
    hours: ALL(D), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Karahoricho 6-1 (Tennoji-ku), a block south of Nagahori-dori — 227 m from Tamatsukuri Stn',
    cuisine: 'Neighborhood Chinese · champon: medium-thin straight noodles in a hot, rich chicken-and-soy soup with pork, shrimp, cabbage, bean sprouts, carrot, onion · gomoku ramen: chicken-broth shio with pork belly, shrimp, egg, Chinese cabbage, bamboo shoots · Kyushu (tonkotsu) ramen · tanmen, yakisoba with a rich sauce, tsukemen — 15 noodle dishes · sets: half fried rice + champon ¥750–1,000; Kyushu ramen + half fried rice ¥800 (daily special) · fried rice ¥600–700 with roast ham, sausage and bacon; curry fried rice · handmade gyoza, 5 pieces ¥350, ginger-forward · kara-age ¥400 · sweet and sour pork · 6 counter seats and a table for two',
    website: null, gmaps: gm('ユーミン'), menu_url: null,
    notes: "[Chinese · neighborhood champon, gyoza and fried rice by Tamatsukuri] A small local Chinese diner just south of Nagahori-dori near Tamatsukuri, open since 2012, run by two people with the TV on. The menu runs to fifteen noodle dishes, and the champon stands out: a big, piping-hot bowl of chicken-and-soy soup piled with pork, shrimp and vegetables over chewy noodles. Sets are cheap: champon with half fried rice for ¥750–1,000. The fried rice is fluffy, with roast ham, sausage and bacon. The gyoza have handmade wrappers and a ginger-heavy filling (five for ¥350). There's also gomoku ramen, a tonkotsu Kyushu ramen, yakisoba and kara-age. Order out loud and pay after. Cash only; smoking area inside.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 June 2012 (Tabelog)', background: 'Neighborhood Chinese restaurant run by two people (2019–2026 reviews).', philosophy: null, specialty: 'Champon; handmade gyoza; fried rice.',
      anecdotes: [
        { text: '"The champon featured medium-thin straight noodles with a chewy texture, served in a large bowl with a rich, hot sauce based on chicken broth and soy sauce… The champon remained piping hot throughout the meal…" — May 2026, half fried rice + champon set ¥1,000.', source: R + 'B420852247/' },
        { text: '"A signature dish with a juicy filling packed with ginger, offering a refreshing flavor." — July 2026, homemade gyoza, 5 pieces ¥350.', source: R + 'B533193360/' },
      ],
      japanese_sources_summary: '食べログ: ユーミン、大阪市天王寺区空堀町6-1、玉造から227m、毎日11:00〜14:00・17:30〜21:00、第1・第3日曜休み、カード・電子マネー・QR不可、カウンター6席、店内に喫煙所、2012年6月15日開店。口コミ(2019年〜2026年7月): 長堀通の一本南の町中華、二人で営業、テレビ、麺料理15種 (ラーメン、タンメン、五目麺、ちゃんぽん、焼きそば、つけ麺)、餃子、中華丼、炒飯、セットと日替わり、ちゃんぽん (中細ストレート麺、鶏ガラ醤油の熱々の濃いスープ、豚、エビ、キャベツ、もやし、にんじん、玉ねぎ、ねぎ)、半チャン+ちゃんぽんのセット1,000円、サービスセット (ちゃんぽんと半炒飯) 750円、五目ラーメン (鶏ガラの塩)、九州ラーメンと半チャンのセット800円 (カレー炒飯の日も)、炒飯600〜700円 (焼豚、ソーセージ、ベーコン)、皮から手作りの餃子5個350円は生姜がきいている、唐揚げ400円、焼きそばの濃いソース、口頭で注文し後払い、卓上の胡椒、ラー油、餃子のたれ。',
      confidence: 'medium', sources: [TB, R + 'B420852247/', R + 'B518262408/', R + 'B518594645/', R + 'B520508280/', R + 'B526319863/', R + 'B533193360/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order verbally; pay after (May 2026); cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市天王寺区空堀町6-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区空堀町6番1号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B420852247/', R + 'B518594645/', R + 'B533193360/'],
    price_note: 'Prices from December 2025–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Champon + half fried rice set', '¥750–1,000', 'Sets', 'no', 'no', 'December 2025 and May 2026.', 'champon_set'),
      it('', '', 'Gomoku ramen', '', 'Noodles', 'no', 'no', '2019.', 'gomoku'),
      it('', '', 'Kyushu ramen + half fried rice (daily special)', '¥800', 'Sets', 'no', 'no', 'January 2026.', 'kyushu_set'),
      it('', '', 'Yakisoba', '', 'Noodles', 'no', 'no', 'April 2026.', 'yakisoba'),
      it('', '', 'Fried rice', '¥700', 'Rice', 'no', 'no', 'July 2026.', 'chahan'),
      it('', '', 'Homemade gyoza, 5 pieces', '¥350', 'Sides', 'no', 'no', 'July 2026.', 'gyoza'),
      it('', '', 'Kara-age', '¥400', 'Sides', 'no', 'no', 'December 2025.', 'karaage'),
    ] }, {
    cuisine: '町中華・ちゃんぽん: 中細ストレート麺に熱々の濃い鶏ガラ醤油スープ、豚、エビ、キャベツ、もやし、にんじん、玉ねぎ・五目ラーメン: 鶏ガラの塩、豚バラ、エビ、卵、白菜、たけのこ・九州 (豚骨) ラーメン・タンメン、濃いソースの焼きそば、つけ麺など麺料理15種・セット: 半炒飯とちゃんぽん750〜1,000円、九州ラーメンと半チャン800円 (日替わり)・焼豚、ソーセージ、ベーコンの炒飯600〜700円、カレー炒飯・皮から手作りの生姜のきいた餃子5個350円・唐揚げ400円・酢豚・カウンター6席と2人掛けテーブル',
    neighborhood: '天王寺区空堀町6-1、長堀通の一本南。玉造駅から227m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースのちゃんぽんのスープ、手作りの餃子の皮、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラスープ、豚、エビ、炒飯の焼豚・ソーセージ・ベーコン、卵。',
    notes: '[中華・玉造近く、町中華のちゃんぽん、餃子、炒飯] 玉造近く、長堀通の一本南にある小さな町中華で、2012年開店、二人で営業し、テレビがついている。麺料理は15種あり、評判はちゃんぽん: 鶏ガラ醤油の熱々のスープに豚、エビ、野菜がたっぷりで、麺はもちもち。セットは安く、ちゃんぽんと半炒飯で750〜1,000円。炒飯はふわっとして焼豚、ソーセージ、ベーコン入り。餃子は皮から手作りで生姜がきいている (5個350円)。五目ラーメン、豚骨の九州ラーメン、焼きそば、唐揚げも。注文は口頭で、支払いは後。現金のみ、店内に喫煙所。',
  });
}

// ================================================================ 麺処 山椒 そのだ裏天王寺店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27157947/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00'], ['18:00', '02:00']);
  put({
    id: 'osaka_mendokoro_sansho_sonoda_ura_tennoji', name: '麺処 山椒 そのだ裏天王寺店 (Mendokoro Sansho Sonoda Ura Tennoji)', category: 'OMNI',
    lat: 34.648325, lng: 135.513829, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; meat miso; fish-sauce vinegar.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat miso; egg yolk; fish sauce.',
    hours_raw: 'Daily 11:30–15:00 and 18:00–02:00; hours may change (Tabelog). Ticket machine at the entrance (2026). Cash only; smoking allowed (Tabelog). Take-out and delivery (Tabelog).',
    hours: ALL(D), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Horikoshicho 15-5 (Tennoji-ku), in the Tennoji Ekimae Hanwa shopping arcade — 1 min from JR Tennoji north exit',
    cuisine: 'Sansho mazesoba · sansho mazesoba ¥1,200: thick flat noodles under sweet-spicy meat miso, egg yolk, menma, green onion, early red onion, a mild dose of sansho; rice to finish · sansho banmian ¥880 · chuka soba ¥980 · "Cyberpunk Noodles" ¥1,500 · table: homemade chili oil, nam pla vinegar, a sansho (flower pepper) mill · 8 counter seats',
    website: null, gmaps: gm('麺処 山椒 そのだ裏天王寺店'), menu_url: null,
    notes: "[Ramen · sansho mazesoba in a retro arcade behind Tennoji] A street-stall-style counter of eight, walled with clear vinyl, inside the dim, Showa-era Hanwa shopping arcade just north of JR Tennoji, opened in July 2026 by the company behind Stand Sonoda. The sansho mazesoba (¥1,200) piles sweet-spicy meat miso, egg yolk, menma and crunchy red onion on thick, firm flat noodles. The sansho starts mild, so grind more from the mill on the counter, then add the chili oil or nam pla vinegar halfway; finish the leftover miso with rice. Also chuka soba (¥980) and a banmian (¥880). Open until 2:00. Ticket machine at the entrance; cash only; smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 July 2026 (Tabelog); run by Ring Co., Ltd., the company behind Stand Sonoda (September 2026 review).', background: 'Mazesoba counter (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Sansho mazesoba.',
      anecdotes: [
        { text: '"The sweet and spicy flavor of the meat miso hit first, followed by a gentle tingling from the sansho pepper… The noodles were flat and had a firm texture…" — September 2026, sansho mazesoba ¥1,200.', source: R + 'B536197363/' },
        { text: '"Although the restaurant is named \'Sansho,\' the default amount of sansho pepper was mild. I sprinkled some from the mill on the table, and the aroma was delightful…" — September 2026.', source: R + 'B537635372/' },
      ],
      japanese_sources_summary: '食べログ: 麺処 山椒 そのだ裏天王寺店、大阪市天王寺区堀越町15-5、JR天王寺駅北口から徒歩1分、地下鉄天王寺駅8番出口すぐ、毎日11:30〜15:00・18:00〜翌2:00、カード・電子マネー・QR不可、カウンター8席、喫煙可、テイクアウト・デリバリー、2026年7月25日開店。口コミ(2026年9〜10月): 天王寺駅前の阪和商店街の昭和レトロなアーケード、Stand Sonoda を運営する株式会社リングの新業態、透明のビニールで囲った屋台風のL字カウンター、入口の券売機、山椒まぜそば1,200円 (肉味噌、卵黄、メンマ、ねぎ、新玉ねぎ、太い平打ち麺、締めのご飯)、山椒は控えめで卓上のミルで足す、自家製ラー油、ナンプラー酢、山椒 Banmian 880円、中華そば980円、Cyberpunk Noodles 1,500円。',
      confidence: 'medium', sources: [TB, R + 'B535976306/', R + 'B536197363/', R + 'B536292887/', R + 'B536405603/', R + 'B537635372/', R + 'B537986510/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: ['chili oil'], richness: 'medium',
      noodles: { thickness: 'thick', shape: 'flat', hydration: null, handmade: false, notes: 'Thick, flat, firm and chewy noodles (2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba'],
      signature_bowl: 'Sansho mazesoba, ¥1,200 (September 2026).',
      chashu: null,
      notable_toppings: ['meat miso', 'egg yolk', 'early red onion', 'menma', 'sansho mill', 'rice to finish'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat miso.' },
      pantheon: 'Ura-Tennoji\'s arcade-stall sansho mazesoba: start mild, grind your own heat.',
      profile: { richness: 3, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537635372/', '"The sauce was rich and flavorful" — mid-scale for a mazesoba.'],
        oiliness: [R + 'B536197363/', 'Chili oil on the table; no review calls it oily — mid-scale.'],
        clarity: [R + 'B537635372/', 'A sauce-coated mazesoba, no soup — bottom of scale.'],
        tare_strength: [R + 'B536197363/', '"The sweet and spicy flavor of the meat miso hit first" — placed high.'],
        noodle_firmness: [R + 'B536197363/', '"The noodles were flat and had a firm texture" — placed high.'],
        aroma_punch: [R + 'B536405603/', '"I hardly felt the sansho flavor" by default; more from the mill — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B536197363/', R + 'B537635372/', R + 'B536405603/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; how-to-eat card on the counter (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区堀越町15-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区堀越町15番5号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536197363/', R + 'B536405603/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sansho mazesoba', '¥1,200', 'Mazesoba', 'no', 'no', 'September 2026.', 'sansho_maze'),
      it('', '', 'Sansho banmian', '¥880', 'Noodles', 'no', 'no', 'September 2026.', 'banmian'),
      it('', '', 'Chuka soba', '¥980', 'Ramen', 'no', 'no', 'September 2026.', 'chuka'),
      it('', '', 'Cyberpunk Noodles', '¥1,500', 'Noodles', 'no', 'no', 'September 2026.', 'cyberpunk'),
      it('', '', 'Rice to finish', '+¥100', 'Rice', 'ask', 'ask', 'Included per one diner. September 2026.', 'oimeshi'),
    ] }, {
    cuisine: '山椒まぜそば・山椒まぜそば1,200円: 太い平打ち麺に甘辛い肉味噌、卵黄、メンマ、ねぎ、新玉ねぎ、山椒は控えめ、締めのご飯・山椒 Banmian 880円・中華そば980円・Cyberpunk Noodles 1,500円・卓上: 自家製ラー油、ナンプラー酢、山椒のミル・カウンター8席',
    neighborhood: '天王寺区堀越町15-5、天王寺駅前の阪和商店街。JR天王寺駅北口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、肉味噌、ナンプラー酢。',
    vegan_detail: 'ヴィーガンではありません。肉味噌、卵黄、ナンプラー。',
    notes: '[ラーメン・天王寺の裏、レトロなアーケードの山椒まぜそば] JR天王寺駅北のすぐ裏、薄暗い昭和の阪和商店街の中にある、透明なビニールで囲った屋台風の8席のカウンターで、2026年7月に Stand Sonoda の運営会社が開いた。山椒まぜそば(1,200円)は硬めの太い平打ち麺に甘辛い肉味噌、卵黄、メンマ、シャキッとした新玉ねぎ。山椒は控えめなので卓上のミルで足し、途中でラー油やナンプラー酢を。残った肉味噌はご飯で締める。中華そば(980円)や Banmian(880円)も。深夜2時まで。入口の券売機、現金のみ、喫煙可。',
  });
}

// ================================================================ しあわせのらーめん ミゥ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27075049/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '13:45']);
  put({
    id: 'osaka_shiawase_no_ramen_miu_morinomiya', name: 'しあわせのらーめん ミゥ (Shiawase no Ramen Miu)', category: 'OMNI',
    lat: 34.680026, lng: 135.533527, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; tare; takana rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone soup; chashu; seasoned egg.',
    hours_raw: 'Mon–Sat 11:00–13:45 (last order 13:30); closed Sun and public holidays, though may open on event days; hours may change (Tabelog). Lunch only in 2026 (June 2026 review). Order verbally; run by one person, so bus your own dishes (October 2026). Cash only (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Morinomiya-Chuo 1-2-21 — 2 min from JR and Metro Morinomiya Stns',
    cuisine: 'Tonkotsu ramen · tonkotsu ramen ¥750: smooth, meaty pork-bone soup, thin-to-medium straight noodles, three slices of lean chashu plus chunky chashu pieces, half a seasoned egg · A set: tonkotsu ramen + rice ¥800 · B set: tonkotsu ramen + takana rice ¥850 · chashu ramen · extra noodles ¥150 · beer',
    website: null, gmaps: gm('しあわせのらーめん ミゥ'), menu_url: null,
    notes: "[Ramen · one-person tonkotsu lunch counter by Morinomiya] A small tonkotsu shop two minutes from Morinomiya, open since 2013 and now lunch-only (11:00–13:45, Mon–Sat), run by one person. You smell the pork as you walk in. The tonkotsu (¥750) is smooth and meaty, rich without a heavy aftertaste, on straight thin-to-medium noodles, with three slices of lean chashu, chunky fatty pieces and half a seasoned egg; one diner calls it among the best tonkotsu in Kansai. The A set adds rice (¥800), the B set takana rice (¥850). Bowls come in about three minutes. Two diners found the rice soft or clumpy. Bus your own dishes. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 September 2013 (Tabelog)', background: 'Tonkotsu ramen shop run by one person (October 2026 review).', philosophy: null, specialty: 'Tonkotsu ramen and lunch sets.',
      anecdotes: [
        { text: '"This isn\'t a thick, heavy pork bone broth. It\'s light yet has a rich flavor, paired with medium-thick straight noodles. The ramen comes with half a seasoned egg and a generous amount of finely sliced chashu." — October 2026, B lunch set ¥850.', source: R + 'B470661315/' },
        { text: '"The broth is smooth, showcasing the rich flavor of pork and a strong meaty essence." — September 2026, tonkotsu ramen ¥750.', source: R + 'B535394999/' },
      ],
      japanese_sources_summary: '食べログ: しあわせのらーめん ミゥ、大阪市中央区森ノ宮中央1-2-21、JR・地下鉄森ノ宮駅から徒歩2分、月〜土 11:00〜13:45 (L.O. 13:30)、日・祝休み (イベントの日は営業することも)、カード・電子マネー・QR不可、2013年9月15日開店。口コミ(2026年6〜10月): 豚骨ラーメン750円、A セット (ラーメンとご飯) 800円、B ランチ (ラーメンと高菜ご飯) 850円、替え玉150円、チャーシュー麺、なめらかで肉の旨みの強いスープ、重すぎず後味が残らない、中細〜中太のストレート麺、赤身のチャーシュー3枚と角切りのチャーシュー、味玉半分、豚のかまぼこは今はない、一人で営業で食器は自分で下げる、口頭で注文、約3分で提供、ご飯が柔らかい・べたつくという声、関西屈指の豚骨という声、店に入ると豚骨の香り、今は昼のみ営業、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B294969228/', R + 'B470661315/', R + 'B533235669/', R + 'B533774712/', R + 'B535394999/', R + 'B536686263/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Straight noodles, described as thin, medium-thin or medium-thick (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Tonkotsu ramen, ¥750; A set with rice ¥800 (2026).',
      chashu: 'Three lean slices plus chunky fatty chashu pieces (2026).',
      notable_toppings: ['half seasoned egg', 'takana rice (B set)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone soup.' },
      pantheon: 'Morinomiya\'s one-person, lunch-only tonkotsu with ¥800 rice sets.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536686263/', '"A pleasantly rich pork flavor"; "light yet has a rich flavor" (B470661315) — placed high.'],
        oiliness: [R + 'B533235669/', '"It surprisingly leaves no aftertaste" — mid-scale.'],
        clarity: [R + 'B535394999/', 'A pork-bone paitan, "smooth" — bottom of scale.'],
        tare_strength: [R + 'B533235669/', '"The rich pork bone flavor"; seasoning not called salty — mid-scale.'],
        noodle_firmness: [R + 'B533235669/', '"Cooked al dente" — mid-scale.'],
        aroma_punch: [R + 'B535394999/', '"You can smell the rich aroma of tonkotsu"; "the meaty smell" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B470661315/', R + 'B535394999/', R + 'B536686263/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order verbally; friendly, welcoming owner (August 2026); cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区森ノ宮中央1-2-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区森ノ宮中央一丁目2番21号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B470661315/', R + 'B533774712/', R + 'B535394999/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tonkotsu ramen', '¥750', 'Ramen', 'no', 'no', 'September 2026.', 'tonkotsu'),
      it('', '', 'A set: tonkotsu ramen + rice', '¥800', 'Sets', 'no', 'no', 'October 2026.', 'set_a'),
      it('', '', 'B set: tonkotsu ramen + takana rice', '¥850', 'Sets', 'no', 'no', 'October 2026.', 'set_b'),
      it('', '', 'Chashu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'chashu'),
      it('', '', 'Extra noodles', '¥150', 'Toppings', 'no', 'no', 'August–October 2026.', 'kaedama'),
    ] }, {
    cuisine: '豚骨ラーメン・豚骨ラーメン750円: なめらかで肉の旨みの強い豚骨スープ、細〜中太のストレート麺、赤身のチャーシュー3枚と角切りのチャーシュー、味玉半分・A セット: ラーメンとご飯800円・B セット: ラーメンと高菜ご飯850円・チャーシュー麺・替え玉150円・ビール',
    neighborhood: '中央区森ノ宮中央1-2-21。JR・地下鉄森ノ宮駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、たれ、高菜ご飯。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー、味玉。',
    notes: '[ラーメン・森ノ宮近く、一人で営む昼だけの豚骨] 森ノ宮から2分の小さな豚骨の店で、2013年開店、今は昼のみ (月〜土 11:00〜13:45)、一人で営業。入ると豚骨の香りがする。豚骨ラーメン(750円)はなめらかで肉の旨みが強く、濃いのに後味が重くない、細〜中太のストレート麺に赤身のチャーシュー3枚、脂の角切り、味玉半分。関西屈指の豚骨という声も。A セットはご飯付き(800円)、B セットは高菜ご飯(850円)。3分ほどで出てくる。ご飯が柔らかい、べたつくという声が二つ。食器は自分で下げる。現金のみ。',
  });
}

save();
