// Osaka sweep (2-mile circle around Dotonbori), batch 162 — ramen phase.
//   + 中華そば 二誠 (miso-specialist sister shop of Ramen Kasumi: Sichuan-numbing spicy miso; Itachibori)
//   + 彩華 大阪上六店 (Tenri-style Saika stamina ramen with cabbage, pork and garlic, open to midnight; Uehonmachi)
//   + にんにくらーめん 麦吉 (garlic tonkotsu shoyu, garlic amount to order, open to 00:30; Itachibori)
//   Skipped: 27154505 ラーメン ギョーザ 三重丸 (same group as Hanamaruken, in data); 27134081 壱賢家 (its 日本橋店 is in data).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 162);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27154505', 'Same group as Hanamaruken (in data) — two reviews, July and October 2026.');
skip('27134081', 'Chain branch: 壱賢家 日本橋店 already in data.');

// ================================================================ 中華そば 二誠
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27147539/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_chuka_soba_nisei_itachibori', name: '中華そば 二誠 (Chuka Soba Nisei)', category: 'OMNI',
    lat: 34.680643, lng: 135.489637, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; miso blends; Shaoxing wine in the spicy miso.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat broth and chashu; seafood miso.',
    hours_raw: 'Mon–Sat and public holidays 11:00–15:00 and 18:00–22:00; closed Sun (Tabelog). Cash only (Tabelog). First bottle of beer ¥100 with edamame (October 2026). Run by one person at times (October 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Itachibori 3-8-5 — 150 m from Awaza Stn exit 2',
    cuisine: 'Miso ramen · miso chuka soba ¥900 (2025); ajitama miso ¥1,050 · special Nisei spicy miso ¥1,250: Nagano white and Mie red miso with Sichuan pepper, dried tangerine peel and Shaoxing wine, numbing more than hot · rich seafood miso · spicy shoyu mazesoba · monthly limited bowls, e.g. rich black miso, meat abura-soba, shrimp-sauce bukkake kamatama (¥1,000 each) · medium-thick, flat curly noodles · small rice ¥100 to finish with the soup · first bottle of beer ¥100 · 8 seats',
    website: null, gmaps: gm('中華そば 二誠'), menu_url: null,
    notes: "[Ramen · a miso specialist from the Kasumi team, Awaza] An eight-seat miso ramen shop near Awaza Station, launched by the team behind nearby Ramen Kasumi. The signature special Nisei spicy miso (¥1,250) blends Nagano white and Mie red miso with Sichuan pepper, dried tangerine peel and Shaoxing wine, so it numbs and perfumes more than it burns; finish by pouring the soup over a ¥100 small rice. The plain miso pairs medium-thick curly noodles with a rich broth, and monthly specials rotate. The first bottle of beer is ¥100 with edamame. One longtime diner felt the miso had thinned since opening and found the service curt. Cash only. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Miso-specialist shop from the team behind Ramen Kasumi (October 2026 review).', background: 'Miso ramen shop (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Spicy miso ramen.',
      anecdotes: [
        { text: '"This spicy miso features a blend of white miso from Nagano and red miso from Mie, combined with Sichuan pepper and dried tangerine peel, along with Shaoxing wine, creating a refreshing numbing sensation." — October 2026, Special Nisei Spicy Miso ¥1,250.', source: R + 'B536750121/' },
        { text: '"The miso broth paired perfectly with the medium-thick curly noodles, making for a delicious bowl. The seasoned egg was also fantastic!" — October 2026, Miso Ramen.', source: R + 'B536922604/' },
      ],
      japanese_sources_summary: '食べログ: 中華そば 二誠、大阪市西区立売堀3-8-5、阿波座駅2番出口から150m、月〜土・祝 11:00〜15:00・18:00〜22:00、日曜休み、カード・電子マネー・QR不可、8席。口コミ(2025年9月〜2026年10月): らーめん香澄の店がてがける味噌の専門店、味噌中華そば (2025年は900円)、味玉味噌1,050円、特製二誠辛味噌1,250円 (長野の白味噌と三重の赤味噌、花椒、陳皮、紹興酒で痺れる辛さ)、濃厚魚介味噌、辛い醤油まぜそば、月替わりの限定 (濃厚黒味噌、肉の油そば、海老のぶっかけ kamatama、各1,000円)、中太の平打ち縮れ麺、小ライス100円でスープをかけて、最初の瓶ビール100円でedamame つき、開店当初より味噌が薄く接客がそっけないという声、ひとりで営業する時間も。',
      confidence: 'medium', sources: [TB, R + 'B502582455/', R + 'B513815812/', R + 'B536721831/', R + 'B536750121/', R + 'B536922604/', R + 'B537744712/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['miso'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'wavy', hydration: null, handmade: false, notes: 'Medium-thick, flat, curly noodles, chewy and smooth (2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Special Nisei spicy miso, ¥1,250 (October 2026).',
      chashu: 'Moist chashu (September 2026).',
      notable_toppings: ['seasoned egg', 'Sichuan pepper', 'dried tangerine peel'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat broth.' },
      pantheon: 'Awaza\'s numbing double-miso ramen from the Kasumi team.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536750121/', '"The broth made with this miso has a rich, mellow flavor" — high.'],
        oiliness: [R + 'B536750121/', 'Rich miso broth, oil not described — mid-scale.'],
        clarity: [R + 'B513815812/', '"The broth was rich with a slightly gritty texture" (black miso) — placed low.'],
        tare_strength: [R + 'B513815812/', '"rich… and a bit salty" — placed high.'],
        noodle_firmness: [R + 'B502582455/', '"medium-thick, flat, and curly. They had a nice chewy texture" — mid-scale.'],
        aroma_punch: [R + 'B536750121/', 'Sichuan pepper and dried tangerine peel give "a refreshing numbing sensation" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B536750121/', R + 'B502582455/', R + 'B513815812/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; brisk service at times (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区立売堀3-8-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区立売堀三丁目8番5号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536750121/', R + 'B502582455/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special Nisei spicy miso', '¥1,250', 'Ramen', 'no', 'no', 'October 2026.', 'karamiso'),
      it('味玉味噌', '', 'Ajitama miso', '¥1,050', 'Ramen', 'no', 'no', 'October 2026.', 'ajitama_miso'),
      it('', '', 'Small rice', '¥100', 'Sides', 'ask', 'ask', 'October 2026.', 'rice'),
      it('', '', 'First bottle of beer with edamame', '¥100', 'Drinks', 'no', 'ask', 'October 2026.', 'beer'),
    ] }, {
    cuisine: '味噌ラーメン・味噌中華そば (2025年は900円)、味玉味噌1,050円・特製二誠辛味噌1,250円: 長野の白味噌と三重の赤味噌に花椒、陳皮、紹興酒、辛さより痺れ・濃厚魚介味噌・辛い醤油まぜそば・月替わりの限定 (濃厚黒味噌、肉の油そば、海老のぶっかけ kamatamaなど各1,000円)・中太の平打ち縮れ麺・小ライス100円でスープをかけて・最初の瓶ビール100円・8席',
    neighborhood: '西区立売堀3-8-5。阿波座駅2番出口から150m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、味噌、辛味噌に紹興酒。',
    vegan_detail: 'ヴィーガンではありません。肉のスープとチャーシュー、魚介の味噌。',
    notes: '[ラーメン・阿波座、香澄の店がてがける味噌の専門店] 阿波座駅近く、らーめん香澄の店が始めた8席の味噌ラーメンの店。看板の特製二誠辛味噌 (1,250円) は長野の白味噌と三重の赤味噌に花椒、陳皮、紹興酒を合わせ、焼けるような辛さより痺れと香り。最後は100円の小ライスにスープをかけて。ふつうの味噌は中太の縮れ麺に濃いスープ、月替わりの限定もある。最初の瓶ビールはedamame つきで100円。開店当初より味噌が薄くなり接客がそっけないという古くからの客の声も。現金のみ。日曜休み。',
  });
}

// ================================================================ 彩華 大阪上六店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27004234/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_saika_uehonmachi', name: '彩華 大阪上六店 (Saika Oosaka ueroku ten)', category: 'OMNI',
    lat: 34.668193, lng: 135.519858, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce base; gyoza and tempura.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: stir-fried pork in the soup; pork broth.',
    hours_raw: 'Daily 11:30–24:00 (Tabelog). Cards, e-money and PayPay accepted (Tabelog). Designated smoking area (Tabelog).',
    hours: ALL(day(['11:30', '23:59'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Uehonmachi 5-3-18 — 2 min from Osaka-Uehommachi Stn or Tanimachi 9-chome Stn exit 11',
    cuisine: 'Tenri-style stamina ramen · Saika ramen ¥900 (small with egg ¥1,000): spicy garlicky soy broth with stir-fried pork belly, napa cabbage and garlic chives, homemade rajan chili sauce, thin curly noodles · extra vegetables +¥300 (not offered at the chain\'s own shops); extra green onion, menma · half fried rice set ¥1,100; lunch half-rice sets · mini fried rice ¥400 · gyoza with miso sauce; small shrimp tempura; tenshin rice · extra garlic on the table · noodles firm on request',
    website: null, gmaps: gm('彩華 大阪上六店'), menu_url: null,
    notes: "[Ramen · Tenri-style garlic stamina ramen, Uehonmachi] The Uehonmachi outpost of Saika, the garlicky stamina ramen from Tenri in Nara, open until midnight every day. The bowl is unmistakable: a spicy soy broth soaked with stir-fried pork belly, a heap of napa cabbage and garlic chives, and a house chili sauce, over thin curly noodles; order the noodles firm and add more garlic from the table. Unlike the chain's own shops, this one lets you double the vegetables (+¥300). Pair it with a half fried rice or gyoza with miso sauce. Quick, friendly service. Expect to smell of garlic the next day.",
    chef_bio: { chef_name: null, roles: [], origin: 'Licensed shop of Saika ramen from Tenri, Nara (October 2026 reviews).', background: 'Ramen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Saika stamina ramen.',
      anecdotes: [
        { text: '"The secret soy sauce base is enhanced by homemade spicy sauce (rajan) and a burst of garlic flavor… infused with the deliciousness of stir-fried pork, garlic chives, and an abundance of cabbage." — October 2026, Saika Ramen (small, with egg) ¥1,000.', source: R + 'B536764525/' },
        { text: '"It\'s helpful that… a large vegetable option [is offered] here, as it\'s not available at the direct stores." — October 2026, Saika Ramen ¥900 with large vegetables ¥300.', source: R + 'B536782726/' },
      ],
      japanese_sources_summary: '食べログ: 彩華 大阪上六店、大阪市天王寺区上本町5-3-18、大阪上本町駅・谷町九丁目駅11番出口から徒歩2分、毎日11:30〜24:00、カード・電子マネー・PayPay 可、喫煙スペースあり。口コミ(2026年9〜10月): 奈良・天理の彩華ラーメン、彩華ラーメン900円 (小・玉子入り1,000円)、醤油ベースに自家製の rajanとにんにく、豚バラ、白菜、ニラの炒め、細い縮れ麺、野菜大盛り+300円 (直営店にはない)、ねぎ増し、メンマ、半チャーハンのセット1,100円、昼の半ライスのセット、ミニチャーハン400円、味噌だれの餃子、小海老の天ぷら、天津飯、卓上ににんにく、麺は硬めがおすすめという声、手早く気さくな店の人、翌日までにんにくの匂いが残るという声。',
      confidence: 'medium', sources: [TB, R + 'B536405852/', R + 'B536764525/', R + 'B536782726/', R + 'B537325583/', R + 'B537474411/', R + 'B537885568/'] },
    ramen: {
      broth_base: ['pork'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: ['chili oil'], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'wavy', hydration: null, handmade: false, notes: 'Thin curly noodles; firm recommended (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Saika ramen, ¥900 (October 2026).',
      chashu: null,
      notable_toppings: ['napa cabbage', 'pork belly', 'garlic chives', 'garlic', 'rajan chili sauce'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork.' },
      pantheon: 'Uehonmachi\'s outpost of Tenri\'s garlic-and-cabbage stamina ramen, open to midnight.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 4, noodle_firmness: 2, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B537474411/', '"The broth has a strong garlic flavor and a hint of spiciness, making it quite rich" — mid-high.'],
        oiliness: [R + 'B537885568/', 'Stir-fried pork belly and cabbage in the soup — mid-scale.'],
        clarity: [R + 'B536764525/', 'A soy broth clouded with stir-fried vegetables and chili sauce — placed low.'],
        tare_strength: [R + 'B536764525/', '"The secret soy sauce base is enhanced by homemade spicy sauce" — placed high.'],
        noodle_firmness: [R + 'B536405852/', '"Personally, I think it\'s better to order it firm" — low by default.'],
        aroma_punch: [R + 'B536764525/', '"the aroma of garlic whets your appetite" — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B536764525/', R + 'B537474411/', R + 'B537885568/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Quick, friendly staff (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区上本町5-3-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区上本町五丁目3番18号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536782726/', R + 'B536764525/', R + 'B537885568/'],
    price_note: 'Prices from October 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Saika ramen', '¥900', 'Ramen', 'no', 'no', 'October 2026.', 'saika'),
      it('', '', 'Saika ramen, small with egg', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'saika_egg'),
      it('', '', 'Extra vegetables', '+¥300', 'Toppings', 'ask', 'ask', 'October 2026.', 'yasai'),
      it('', '', 'Saika ramen with half fried rice', '¥1,100', 'Sets', 'no', 'no', 'October 2026.', 'set'),
      it('', '', 'Mini fried rice', '¥400', 'Sides', 'ask', 'no', 'October 2026.', 'chahan'),
    ] }, {
    cuisine: '天理のスタミナラーメン・彩華ラーメン900円 (小・玉子入り1,000円): にんにくの効いたピリ辛の醤油スープに豚バラ、白菜、ニラの炒め、自家製の rajan、細い縮れ麺・野菜大盛り+300円 (チェーンの直営店にはない)、ねぎ増し、メンマ・半チャーハンのセット1,100円、昼の半ライスのセット・ミニチャーハン400円・味噌だれの餃子、小海老の天ぷら、天津飯・卓上ににんにく・麺は硬めも頼める',
    neighborhood: '天王寺区上本町5-3-18。大阪上本町駅・谷町九丁目駅11番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のスープ、餃子と天ぷら。',
    vegan_detail: 'ヴィーガンではありません。スープに豚肉の炒め、豚のスープ。',
    notes: '[ラーメン・上本町、天理のにんにくのスタミナラーメン] 奈良・天理のにんにくの効いたスタミナラーメン、彩華の上本町の店で、毎日深夜0時まで。一杯はひと目でわかる: 豚バラ、山盛りの白菜とニラの炒めがしみたピリ辛の醤油スープに自家製の rajan、細い縮れ麺。麺は硬めにして卓上のにんにくを足して。チェーンの直営店と違い、ここは野菜を倍にできる (+300円)。半チャーハンや味噌だれの餃子と一緒に。手早く気さくな接客。翌日までにんにくの匂いが残る覚悟を。',
  });
}

// ================================================================ にんにくらーめん 麦吉
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27140031/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:00'], ['17:00', '00:30']); const WE = day(['11:00', '00:30']);
  put({
    id: 'osaka_ninniku_ramen_mugiyoshi_itachibori', name: 'にんにくらーめん 麦吉 (Ninniku Ramen Mugiyoshi)', category: 'OMNI',
    lat: 34.680037, lng: 135.489134, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare; gyoza and fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth; chashu.',
    hours_raw: 'Mon–Fri 11:00–15:00 and 17:00–00:30; Sat, Sun and public holidays 11:00–00:30; closing days on social media (Tabelog). Opened 7 January 2024 (Tabelog). PayPay accepted; no cards (Tabelog). Free rice and pickles at lunch (October 2026). Family friendly; strollers welcome (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Itachibori 3-7-13, on Amidaike-suji — 4 min from Awaza Stn',
    cuisine: 'Garlic ramen · tonkotsu shoyu ramen ¥950, mild and creamy · miso ramen; garlic shoyu ramen · garlic amount to order (less, normal, extra) · medium-thin curly noodles · thick pork-belly chashu; chashu ramen · seasoned egg ¥120; bean sprouts · half fried rice set ¥350 with kimchi; gyoza and rice set ¥1,250 with ramen · free rice and pickles at lunch · ticket machine · counter and tables for 2–4',
    website: null, gmaps: gm('にんにくらーめん 麦吉'), menu_url: null,
    notes: "[Ramen · garlic tonkotsu shoyu, open to 00:30, Awaza] A bright, clean, roomy garlic-ramen shop on Amidaike-suji near Awaza, open until 00:30 and handy after a night out. Buy a ticket and say how much garlic you want: the tonkotsu shoyu (¥950) is mild and creamy under it, on medium-thin curly noodles, with thick, tender pork-belly chashu. Add a seasoned egg, or the ¥1,250 set with chewy homemade-looking gyoza, rice and kimchi; lunch brings free rice and pickles. Early reviews called the broth thin; a July 2026 visitor found it had improved. Family friendly, with tables.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 January 2024 (Tabelog).', background: 'Garlic ramen shop (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Garlic tonkotsu shoyu ramen.',
      anecdotes: [
        { text: '"The tonkotsu broth had a smooth texture with a rich garlic flavor that really hit the spot… The chashu was thick, tender, and very satisfying." — October 2026, Tonkotsu Shoyu Ramen ¥950 with extra garlic.', source: R + 'B478128917/' },
        { text: '"As for the broth\'s richness, I found it to be just right, completely contrary to the \'thin\' impression from before." — July 2026, Tonkotsu Shoyu Ramen and Gyoza Rice Set ¥1,250.', source: R + 'B532608105/' },
      ],
      japanese_sources_summary: '食べログ: にんにくらーめん 麦吉、大阪市西区立売堀3-7-13、阿波座駅から301m、月〜金 11:00〜15:00・17:00〜翌0:30、土・日・祝 11:00〜翌0:30、休みは SNS で、2024年1月7日開店、PayPay 可、カード不可、子ども連れ・ベビーカー歓迎。口コミ(2024年1月〜2026年10月): あみだ池筋沿い、明るく清潔で広い店、券売機、にんにくの量を聞いてくれる (少なめ・ふつう・多め)、とんこつ醤油ラーメン950円 (まろやかでクリーミー)、味噌ラーメン、にんにく醤油ラーメン、中細の縮れ麺、厚い豚バラのチャーシュー、チャーシュー麺、味玉120円、もやし、キムチつきの半チャーハンのセット350円、餃子とご飯のセット1,250円、昼はご飯と漬物が無料、以前はスープが薄いという声があったが2026年7月はちょうどいいという声、夜遅くまで開いている。',
      confidence: 'medium', sources: [TB, R + 'B478128917/', R + 'B503273063/', R + 'B532608105/', R + 'B533441279/', R + 'B534556501/', R + 'B537608149/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu', 'miso'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium-thin', shape: 'wavy', hydration: null, handmade: false, notes: 'Medium-thin curly noodles, soft to chewy (2024–2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Tonkotsu shoyu ramen with garlic to order, ¥950 (2026).',
      chashu: 'Thick, tender pork-belly chashu (2024–2026).',
      notable_toppings: ['garlic', 'bean sprouts', 'green onion', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Awaza\'s late-night garlic tonkotsu shoyu, garlic dialed to order.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B532608105/', '"the Tonkotsu Shoyu broth was mild and creamy… just right" — mid-scale.'],
        oiliness: [R + 'B478128917/', '"The tonkotsu broth had a smooth texture" — mid-scale.'],
        clarity: [R + 'B532608105/', 'A creamy tonkotsu shoyu — placed low.'],
        tare_strength: [R + 'B503273063/', '"a soy sauce flavor based on pork bone broth, surprisingly light in taste" (February 2025) — mid-scale.'],
        noodle_firmness: [R + 'B532608105/', '"medium-thin and curly, with just the right amount of chewiness" — mid-scale.'],
        aroma_punch: [R + 'B532608105/', '"Even with less garlic, the aroma was still strong" — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B532608105/', R + 'B478128917/', R + 'B503273063/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; garlic amount asked (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区立売堀3-7-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区立売堀三丁目7番13号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B478128917/', R + 'B532608105/'],
    price_note: 'Prices from July and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tonkotsu shoyu ramen', '¥950', 'Ramen', 'no', 'no', 'October 2026.', 'tonkotsu'),
      it('', '', 'Seasoned egg', '¥120', 'Toppings', 'ask', 'no', 'October 2026.', 'egg'),
      it('', '', 'Half fried rice set (with kimchi)', '+¥350', 'Sets', 'ask', 'no', 'October 2026.', 'chahan'),
      it('', '', 'Tonkotsu shoyu ramen with gyoza and rice', '¥1,250', 'Sets', 'no', 'no', 'July 2026.', 'gyoza_set'),
    ] }, {
    cuisine: 'にんにくラーメン・とんこつ醤油ラーメン950円、まろやかでクリーミー・味噌ラーメン、にんにく醤油ラーメン・にんにくの量を選べる (少なめ、ふつう、多め)・中細の縮れ麺・厚い豚バラのチャーシュー、チャーシュー麺・味玉120円、もやし・キムチつきの半チャーハンのセット350円、ラーメンと餃子とご飯のセット1,250円・昼はご飯と漬物が無料・券売機・カウンターと2〜4名のテーブル',
    neighborhood: '西区立売堀3-7-13、あみだ池筋沿い。阿波座駅から徒歩4分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、餃子とチャーハン。',
    vegan_detail: 'ヴィーガンではありません。とんこつのスープ、チャーシュー。',
    notes: '[ラーメン・阿波座、深夜0時半までのにんにくとんこつ醤油] 阿波座近くのあみだ池筋沿い、明るく清潔で広いにんにくラーメンの店で、深夜0時半まで、飲んだあとに便利。券売機で食券を買い、にんにくの量を伝えて: とんこつ醤油 (950円) はその下でまろやかでクリーミー、中細の縮れ麺に厚くやわらかい豚バラのチャーシュー。味玉や、もちもちの餃子とご飯とキムチの1,250円のセットも。昼はご飯と漬物が無料。開店当初はスープが薄いという声もあったが、2026年7月はよくなったという声。子ども連れにも、テーブル席あり。',
  });
}

save();
