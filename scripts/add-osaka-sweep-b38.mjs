// Osaka sweep (2-mile circle around Dotonbori), batch 38 — vegan/GF/halal phase (all OMNI).
// The distance-ordered vegan queue is now mostly flag-only; this batch screened 62 listing pages for the shop's OWN
// diet statements (restaurant text, not the Tabelog veg flag) and name-searched the crawl.
//   + MUGEN NEXT 無限ラーメン by NEXT Halal (halal-certified beef-bone ramen, opened 20 Aug 2026)
//   + 串カツさくら 南海難波店 (kushikatsu in a rice-flour batter fried in plant oils — GF ask, not claimed)
// Skipped: 27111076 (OKO's old Higashi-Shinsaibashi site; current OKO already recorded), 27082352 (ABENO HUB already recorded).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, skip, save } = openCitySweep('osaka', TODAY, 38);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27111076', 'OKO\'s old site (東心斎橋1-13-9 2F; same 100%-okara gluten-free okonomiyaki concept; reviews 2020–2022). The current OKO is already recorded as osaka_oko_fun_okonomiyaki_bar (道頓堀2-4-13).');
skip('27082352', 'Already recorded as osaka_abeno_hub_namba (FindMeGlutenFree seed); this is its Tabelog listing.');

// ================================================================ MUGEN NEXT 無限ラーメン by NEXT Halal
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27158851/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_mugen_next_halal_ramen', name: 'MUGEN NEXT 無限ラーメン by NEXT Halal', category: 'OMNI',
    lat: 34.674615, lng: 135.503038, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce tare; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-bone and chicken broth, roast beef. Vegetable gyoza exist, but their wrapper and filling are not described.',
    hours_raw: 'Daily 10:00–23:00 (Tabelog). Opened 20 August 2026. Cards (VISA, Master) accepted (Tabelog). Free grated garlic on request; pepper and chili oil on the table.',
    hours: ALL(day(['10:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: true, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-19-22 — about 250 m from Shinsaibashi Stn',
    cuisine: 'Halal beef-bone ramen · beef-bone and chicken paitan ramen ¥1,180 (shoyu, espuma-style foam) · truffle version ¥1,680 · MUGEN NEXT special ¥2,980 · beef-bone mala noodles ¥1,480 · meat mazesoba ¥1,150 · grilled sea bream and clam shio soba ¥990 · roast beef +¥360 (2 slices) · vegetable gyoza (3) ¥330 · thin straight Mori Seimen noodles',
    website: null, gmaps: gm('MUGEN NEXT 無限ラーメン by NEXT Halal 東心斎橋'), menu_url: null,
    notes: "[Ramen · halal beef-bone ramen in Higashi-Shinsaibashi] A halal-certified offshoot of the Namba beef-bone ramen shop Mugen Ramen Namba Nakamoto, opened on 20 August 2026. A reviewer reports it uses 100% halal ingredients. The house bowl (¥1,180) is a beef-bone and chicken paitan with shoyu, creamy and foamy in an espuma style, rich and mellow without odor. It comes on thin straight noodles from Mori Seimen Factory, topped with roast beef, chicken-breast chashu, red daikon, bell pepper and broccoli. Upgrades run to a truffle bowl (¥1,680) and a ¥2,980 special. There's also a mala noodle (¥1,480), which one reviewer felt drowned the beef, a meat mazesoba, and a ¥990 sea bream and clam shio soba. Most diners are visitors from abroad; prices are on the high side, and one reviewer found checkout slow.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 August 2026 (Tabelog; reviews)', background: 'A halal-certified branch of "Mugen Ramen Namba Nakamoto" in Namba (August 2026 review), using 100% halal ingredients (August 2026 review). Noodles from Mori Seimen Factory.', philosophy: null, specialty: 'Halal beef-bone paitan ramen.',
      anecdotes: [
        { text: '"This restaurant is a halal-certified branch of \'Mugen Ramen Namba Nakamoto\' located in Namba." — August 2026.', source: R + 'B534769626/' },
        { text: '"The white soup made from beef bones and chicken has a moderate amount of oil, creating a rich and mellow flavor with a creamy, bubbly texture." — August 2026, ¥1,180.', source: R + 'B534314916/' },
      ],
      japanese_sources_summary: '食べログ: MUGEN NEXT 無限ラーメン by NEXT Halal、大阪市中央区東心斎橋1-19-22、毎日10:00〜23:00、カード(VISA、Master)可、禁煙、2026年8月20日開店。2026年の口コミ(8〜10月): Mugen Ramen Namba Nakamotoのハラール認証店、ハラール食材100%、牛骨鶏白湯ラーメン(醤油)1,180円、トリュフ牛骨鶏白湯1,680円、MUGEN NEXTスペシャル2,980円、牛骨辛麺1,480円、肉まぜそば1,150円、焼き鯛と蛤の塩そば990円、ローストビーフ2枚360円・4枚690円、とろける牛バラ2枚480円・4枚890円、半熟味玉130円、替え玉150円、野菜餃子3個330円、Mori Seimen Factoryの細いストレート麺(2.75mm)、エスプーマ風の泡、ローストビーフと鶏むねのチャーシュー、赤大根、パプリカ、ブロッコリー、レモン、メンマ、無料のおろしにんにく、卓上に胡椒とラー油、会計が遅い、値段は高め、客の多くは海外から。',
      confidence: 'medium', sources: [TB, R + 'B534769626/', R + 'B534314916/', R + 'B535090896/', R + 'B537927879/', R + 'B535804153/'] },
    ramen: {
      broth_base: ['beef', 'chicken'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight 2.75 mm noodles from Mori Seimen Factory, slightly firm (August 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Beef-bone and chicken paitan ramen ¥1,180 (August 2026).',
      chashu: 'Roast beef and chicken-breast chashu (August 2026).',
      notable_toppings: ['roast beef', 'chicken-breast chashu', 'red daikon', 'bell pepper', 'broccoli', 'lemon', 'menma'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Beef-bone and chicken broth.' },
      pantheon: 'Higashi-Shinsaibashi\'s halal beef-bone paitan: an espuma-foamed beef and chicken broth on thin Mori Seimen noodles.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B534314916/', '"A rich and mellow flavor with a creamy, bubbly texture."'],
        oiliness: [R + 'B534314916/', '"A moderate amount of oil."'],
        clarity: [R + 'B535090896/', '"A delicious chicken white soup in an espuma style" — opaque.'],
        tare_strength: [R + 'B534769626/', '"A slightly thick soy sauce soup with a smooth, rounded flavor."'],
        noodle_firmness: [R + 'B535090896/', '"The noodles are slightly firm."'],
        aroma_punch: [R + 'B534769626/', 'Free grated garlic, pepper and chili oil to add — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B534314916/', R + 'B534769626/', R + 'B535090896/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Mostly overseas customers (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-19-22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened 20 August 2026; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目19番22号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534314916/', R + 'B534769626/'],
    price_note: 'Prices from August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Beef-bone and chicken paitan ramen (shoyu)', '¥1,180', 'Ramen', 'no', 'no', 'August 2026.', 'gyukotsu'),
      it('', '', 'Truffle beef-bone and chicken paitan ramen', '¥1,680', 'Ramen', 'no', 'no', 'August 2026.', 'truffle'),
      it('', '', 'MUGEN NEXT special', '¥2,980', 'Ramen', 'no', 'no', 'August 2026.', 'special'),
      it('', '', 'Beef-bone mala noodles', '¥1,480', 'Ramen', 'no', 'no', 'August 2026.', 'mala'),
      it('', '', 'Meat mazesoba', '¥1,150', 'Mazesoba', 'no', 'no', 'August 2026.', 'niku_maze'),
      it('', '', 'Grilled sea bream and clam shio soba', '¥990', 'Ramen', 'no', 'no', 'August 2026.', 'tai_shio'),
      it('', '', 'Vegetable gyoza (3)', '¥330', 'Sides', 'no', 'ask', 'August 2026.', 'yasai_gyoza'),
    ] }, {
    cuisine: 'ハラールの牛骨ラーメン・牛骨鶏白湯ラーメン1,180円(醤油、エスプーマ風の泡)・トリュフ版1,680円・MUGEN NEXTスペシャル2,980円・牛骨辛麺1,480円・肉まぜそば1,150円・焼き鯛と蛤の塩そば990円・ローストビーフ2枚360円・野菜餃子3個330円・Mori Seimenの細いストレート麺',
    neighborhood: '東心斎橋1-19-22。心斎橋駅から約250m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油だれ、餃子。',
    vegan_detail: 'ヴィーガンではありません。牛骨と鶏のスープ、ローストビーフ。野菜餃子もありますが、皮と具の中身は書かれていません。',
    notes: '[ラーメン・東心斎橋のハラールの牛骨ラーメン] なんばの牛骨ラーメンの店Mugen Ramen Namba Nakamotoのハラール認証店で、2026年8月20日開店。口コミによるとハラール食材を100%使用。看板の一杯(1,180円)は牛骨と鶏の白湯に醤油で、エスプーマ風にクリーミーに泡立ち、臭みがなくまろやかで濃厚。Mori Seimen Factoryの細いストレート麺に、ローストビーフ、鶏むねのチャーシュー、赤大根、パプリカ、ブロッコリー。上はトリュフ(1,680円)や2,980円のスペシャルまで。牛骨辛麺(1,480円、牛骨の良さが薄れるという声も)、肉まぜそば、990円の焼き鯛と蛤の塩そばも。客の多くは海外から。値段は高めで、会計が遅かったという声も。',
  });
}

// ================================================================ 串カツさくら 南海難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27064322/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '22:30']), E = day(['11:00', '22:30']);
  put({
    id: 'osaka_kushikatsu_sakura_nankai_namba', name: '串カツさくら 南海難波店 (Kushikatsu Sakura Nankai Namba)', category: 'OMNI',
    lat: 34.66531, lng: 135.50238, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. The shop says its kushikatsu batter uses rice flour, fried in 100% plant-based oils (Tabelog shop text), but it does not claim gluten-free: breadcrumbs, the special sauce, the white soy sauce and the shared fryer are not described. Ask which dip is wheat-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'Ask. Vegetable skewers (onion, shishito, asparagus) are fried in plant-based oil, but the batter may contain egg and is fried alongside meat and seafood.',
    hours_raw: 'Mon–Fri 11:30–22:30; Sat, Sun and holidays 11:00–22:30; open year-round; last order 30 minutes before closing (Tabelog). No reservations on Friday nights, weekends, holidays or peak seasons — first come, first served. Cards accepted; no e-money or QR. Queues are common.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 3-1-18, on Nankai-dori — 1 min from Nankai Namba Stn',
    cuisine: 'Kushikatsu in a thin, crisp rice-flour batter fried in plant oils · large skewers: quail egg, chicken, shrimp, beef, pork, whiting, onion, shishito, asparagus, tulip (chicken wing) · dip in special sauce, grilled salt or white soy sauce · doteyaki beef-tendon stew · free cabbage · 50 seats (1F counter, 2F tables and horigotatsu)',
    website: null, gmaps: gm('串カツさくら 南海難波店'), menu_url: null,
    notes: "[Kushikatsu · rice-flour kushikatsu on Nankai-dori] A 50-seat kushikatsu house a minute from Nankai Namba, open since 2012 and often with a line. The difference is the batter: rice flour instead of wheat, fried in plant-based oils, so the skewers come out ultra-thin and crisp. October 2026 reviewers found it light on the stomach. That's not a gluten-free claim, though; breadcrumbs, sauces and the shared fryer aren't described, so coeliacs should ask. The skewers are big: plump shrimp, excellent pork, a soft quail egg (best with the white soy sauce), plus tulip wings and asparagus. Dip in the special sauce, grilled salt or white soy, and start with doteyaki. Frying happens downstairs, so the second floor stays free of oil smells. On busy nights the kitchen can lag, with a 30-minute wait for skewers in October 2026.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 April 2012 (Tabelog)', background: 'Kushikatsu Sakura, which bills its rice-flour skewers as "the original" (Tabelog shop text).', philosophy: 'Rice-flour batter to reduce oil absorption; the plant-based frying oils are varied daily (shop text).', specialty: 'Rice-flour kushikatsu.',
      anecdotes: [
        { text: 'Shop text: "By using \'rice flour\' in the batter, we reduce the oil absorption rate compared to regular kushi-katsu!… we change the types of 100% plant-based oils we use every day."', source: TB },
        { text: '"The batter made from rice flour is light and incredibly crispy, perfectly enhancing the flavors of the ingredients." — October 2026.', source: R + 'B537467266/' },
      ],
      japanese_sources_summary: '食べログ: 串カツさくら 南海難波店、大阪市中央区難波3-1-18、06-6630-8039、予約可(金曜の夜、土日祝、繁忙期は予約不可・先着順)、月〜金11:30〜22:30、土日祝11:00〜22:30、年中無休(L.O.は閉店30分前)、カード可、電子マネー・QR不可、50席(カウンター9、テーブル29、掘りごたつ12)、禁煙、2012年4月11日開店。店の説明: 衣に米粉を使い油の吸収を抑えた串カツ、植物性100%の油を毎日替える、極薄の衣、元祖米粉串。2026年の口コミ(9〜10月): 大きな串、いつも行列、2階の通路側の狭い席、ビールと串カツが遅い、開店直後の11時に2階、人気上位5種、牛すじ煮込みとキャベツ、うずら卵は薄口醤油が合う、鶏、新鮮なエビ、牛(ミディアムレア)は筋が多い、豚はぱさつき、米粉の衣は軽くサクサク、特製ソース・焼き塩・白醤油から選べる、どて焼き、キス、玉ねぎ、ししとう、紅しょうが、アスパラ、1階で揚げるので2階は油のにおいがしない、翌日胃もたれしない、チューリップ、やや揚げすぎという声。',
      confidence: 'medium', sources: [TB, R + 'B537467266/', R + 'B537580228/', R + 'B537830119/', R + 'B538076808/', R + 'B535812005/', R + 'B524036120/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Busy, first-come on weekends.' },
    safety: { ...SAFETY0, positives: [ { text: 'Shop text: rice-flour batter; 100% plant-based frying oils (not a gluten-free claim).', source: TB } ] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-1-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目1番18号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B537580228/', R + 'B535812005/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Rice-flour kushikatsu (shrimp, pork, chicken, beef, quail egg …)', '', 'Kushikatsu', 'ask', 'no', 'September–October 2026.', 'kushikatsu'),
      it('', '', 'Vegetable skewers (onion, shishito, asparagus)', '', 'Kushikatsu', 'ask', 'ask', 'October 2026.', 'yasai'),
      it('どて焼き', 'doteyaki', 'Doteyaki (beef-tendon stew)', '', 'Sides', 'no', 'no', 'October 2026.', 'dote'),
    ] }, {
    cuisine: '植物性の油で揚げる米粉の薄い衣の串カツ・大きな串(うずら卵、鶏、エビ、牛、豚、キス、玉ねぎ、ししとう、アスパラ、チューリップ)・特製ソース、焼き塩、白醤油で・どて焼き・無料のキャベツ・50席(1Fカウンター、2Fテーブルと掘りごたつ)',
    neighborhood: '難波3-1-18、南海通り。南海なんば駅から徒歩1分',
    gf_detail: '要確認。店によると衣に米粉を使い、植物性100%の油で揚げています(食べログの店の説明)が、グルテンフリーとは言っていません。パン粉、特製ソース、白醤油、共用の揚げ油については書かれていません。小麦を含まない付けだれはどれか確認を。',
    vegan_detail: '要確認。玉ねぎ、ししとう、アスパラなど野菜の串は植物性の油で揚げますが、衣に卵が入る可能性があり、肉や魚介と同じ油です。',
    notes: '[串カツ・南海通りの米粉の串カツ] 南海なんば駅から1分、2012年からある50席の串カツ店で、よく行列ができます。違いは衣で、小麦ではなく米粉を植物性の油で揚げ、極薄でサクサク。2026年10月の口コミでは胃にもたれないという声。ただしグルテンフリーをうたってはおらず、パン粉、たれ、共用の油の情報がないので、セリアックの人は確認を。串は大きく、ぷりぷりのエビ、おいしい豚、半熟のうずら卵(白醤油が合う)、チューリップやアスパラも。特製ソース、焼き塩、白醤油から選び、まずはどて焼きを。揚げるのは1階なので2階は油のにおいがしません。混む夜は厨房が追いつかず、2026年10月には串まで30分待ちも。',
  });
}

save();
