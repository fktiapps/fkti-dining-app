// Osaka sweep (2-mile circle around Dotonbori), batch 23 — vegan/GF via Tabelog's own "Vegan/Vegetarian options"
// listing flag (queue.mjs next vegan). Eight flagged listings were fetched and their reviews searched; only
// Pivot BASE (and 17MAP's veggie taco) show real vegan/veg dishes in reviews. The others carry only the flag,
// so vegan stays 'ask' for them.
//   + Pivot BASE Cafe & Bar @Dotonbori (veganised Osaka dishes, rice-flour konjac takoyaki) — vegan options
//   + 法善寺 三平 (fluffy okonomiyaki in Hōzenji Yokochō; flag only) — vegan ask
//   + 17MAP (late-night taco bar with veggie tacos and a hidden bar) — vegan ask
//   + 鉄板神社 道頓堀店 (teppan-skewer omakase; flag only) — vegan ask
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 23);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });

// ================================================================ Pivot BASE Cafe & Bar @Dotonbori
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27131573/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_pivot_base_dotonbori', name: 'Pivot BASE Cafe & Bar @Dotonbori', category: 'OMNI',
    lat: 34.668578, lng: 135.502418, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The takoyaki is made with rice flour (May 2026), but yakisoba and other dishes are not described as gluten-free and there is no gluten-free statement.',
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: 'Vegan versions of Osaka dishes. The rice-flour takoyaki uses konjac instead of octopus (May 2026), a summer chilled shio ramen was "made without any animal products or broth" (June 2025), and there is vegan chocolate ice cream (June 2026). Tabelog lists vegan and vegetarian options. Two 2026 reviewers call it a vegan café, but whether everything is vegan is not stated, so ask.',
    hours_raw: 'Daily 11:30–22:30, open year-round (Tabelog). Completely cashless; QR ordering at the table.',
    hours: ALL(day(['11:30', '22:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-7-21, Nakaza Kuidaore Bldg 1F — on the main Dotonbori street near the Glico sign',
    cuisine: 'Travel-themed café-bar with veganised Osaka food · rice-flour takoyaki with konjac instead of octopus (with salad and soup) · vegan yakisoba · summer vegan chilled shio ramen with fried vegetables ¥1,780 · vegan chocolate ice cream ¥650 · drinks · ~40 seats · cashless',
    website: 'https://dotonbori-night.com/pivot/', gmaps: gm('Pivot BASE 道頓堀'), menu_url: null,
    notes: "[Café · veganised Osaka food in the Kuidaore Building] A modern, roomy café-bar on the ground floor of the Nakaza Kuidaore Building, on Dotonbori's main drag, that pitches itself as a travel base and serves Osaka classics in vegan form. The takoyaki is made with rice flour and konjac in place of octopus, which the menu doesn't spell out, and comes as a set with salad and soup. Summer 2025 brought a chilled shio ramen made without animal products, topped with fried eggplant, okra and pumpkin, tomato and pickled ginger (¥1,780). A friend with a dairy allergy was delighted with the vegan chocolate ice cream (¥650). Prices are steep and it is often quiet. Multilingual, cashless, QR ordering.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 3 September 2022 (Tabelog)', background: 'Tabelog introduction: a new-concept café and bar for travellers serving Osaka\'s takoyaki and yakisoba "with vegan options", plus videos, products and food from Osaka, Kansai and Japan.', philosophy: null, specialty: 'Vegan takoyaki and Osaka dishes.',
      anecdotes: [
        { text: '"The menu listed rice flour takoyaki, so I ordered it. To my surprise, instead of octopus, it contained konjac! I realized, \'Oh, since it\'s vegan, there are no animal products in it.\'" — May 2026.', source: R + 'B527802368/' },
        { text: '"\'Chilled Sio Ramen with Summer Vegetables\' for JPY 1780… this ramen is made without any animal products or broth." — June 2025.', source: R + 'B510397147/' },
      ],
      japanese_sources_summary: '食べログ: Pivot BASE Cafe & Bar @Dotonbori、大阪市中央区道頓堀1-7-21 中座くいだおれビル1F、40席、毎日11:30〜22:30、年中無休、禁煙、完全キャッシュレス、こだわり: 野菜・ヴィーガンメニュー・ベジタリアンメニュー、2022年9月3日開店、サイト dotonbori-night.com/pivot。店の紹介: 旅の新しい体験ができるカフェ&バー、ヴィーガン対応のたこ焼きや焼きそば。口コミ(2023年11月〜2026年6月): 飲み物が多い、広くて静か、QRで注文、ビールとたこ焼きのセット、スープ、夏野菜の冷やし塩ラーメン1,780円(動物性食材も出汁も使わない、揚げなす・オクラ・かぼちゃ・トマト・水菜・ガリ)、米粉のたこ焼き(タコの代わりにこんにゃく)、ヴィーガンのレストラン、サラダとスープ付き、乳アレルギーの友人とチョコアイス650円・アイスティー680円、値段は高め。',
      confidence: 'medium', sources: [TB, R + 'B527802368/', R + 'B510397147/', R + 'B530241984/', R + 'B492986909/'] },
    cultural_comfort: { level: 'english', note: 'Multilingual support; QR ordering; cashless.' },
    safety: { ...SAFETY0, positives: [{ text: 'Vegan dishes without animal products (reviews 2025–2026); rice-flour takoyaki.', source: R + 'B527802368/' }] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-7-21 中座くいだおれビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目7番21号 (go) 16m; OSM node/12111667212 「Pivot BASE」 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527802368/', R + 'B510397147/', R + 'B530241984/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Rice-flour takoyaki with konjac (with salad and soup)', '', 'Takoyaki', 'ask', 'vegan', 'May 2026.', 'vegan_takoyaki'),
      it('', '', 'Chilled vegan shio ramen with summer vegetables', '¥1,780', 'Seasonal', 'no', 'vegan', 'June 2025.', 'hiyashi_shio'),
      it('', '', 'Vegan chocolate ice cream', '¥650', 'Dessert', 'ask', 'vegan', 'June 2026.', 'choc_ice'),
      it('', '', 'Iced tea', '¥680', 'Drinks', 'ask', 'vegan', 'June 2026.', 'iced_tea'),
    ] }, {
    cuisine: 'ヴィーガン版の大阪の料理がある旅がテーマのカフェ&バー・タコの代わりにこんにゃくの米粉たこ焼き(サラダとスープ付き)・ヴィーガンの焼きそば・夏のヴィーガン冷やし塩ラーメン1,780円・ヴィーガンのチョコアイス650円・ドリンク・約40席・キャッシュレス',
    neighborhood: '道頓堀1-7-21 中座くいだおれビル1F、グリコの看板近くの道頓堀の大通り沿い',
    gf_detail: '要確認。たこ焼きは米粉ですが(2026年5月)、焼きそばなどはグルテンフリーとは書かれておらず、グルテンフリーの表明もありません。',
    vegan_detail: '大阪の料理のヴィーガン版があります。米粉のたこ焼きはタコの代わりにこんにゃく(2026年5月)、夏の冷やし塩ラーメンは「動物性食材も出汁も使わない」(2025年6月)、ヴィーガンのチョコアイスも(2026年6月)。食べログにはヴィーガン・ベジタリアンメニューありとあり、2026年にはヴィーガンのカフェと呼ぶ客も2人いますが、すべてがヴィーガンかは書かれていないので確認を。',
    notes: '[カフェ・くいだおれビルのヴィーガン版の大阪の味] 道頓堀の大通り沿い、中座くいだおれビル1階にある広くモダンなカフェ&バーで、旅の拠点をうたい、大阪の定番をヴィーガン版で出しています。たこ焼きは米粉で、タコの代わりにこんにゃく(メニューには書かれていません)、サラダとスープ付きのセット。2025年夏は揚げなす、オクラ、かぼちゃ、トマト、ガリをのせた動物性食材不使用の冷やし塩ラーメン(1,780円)。乳アレルギーの友人はヴィーガンのチョコアイス(650円)に大喜び。値段は高めで、空いていることも多い店。多言語対応、キャッシュレス、QRで注文。',
  });
}

// ================================================================ 法善寺 三平
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27011039/'; const R = TB + 'dtlrvwlst/';
  const ev = ['17:00', '23:00'];
  put({
    id: 'osaka_hozenji_sanpei', name: '法善寺 三平 (Hozenji Sanpei)', category: 'OMNI',
    lat: 34.668242, lng: 135.502713, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-flour okonomiyaki and yakisoba; sauces.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists "vegetarian options", but every dish reviewers describe uses meat or seafood and okonomiyaki is topped with bonito flakes.',
    hours_raw: 'Mon and Wed–Fri 17:00–23:00 (food L.O. 22:00); Sat, Sun and holidays 11:30–15:30 and 17:00–23:00; closed Tuesdays (Tabelog). Entry until 22:00. Queues of overseas visitors; booking helps.',
    hours: { 0: day(ev), 1: [], 2: day(ev), 3: day(ev), 4: day(ev), 5: day(['11:30', '15:30'], ev), 6: day(['11:30', '15:30'], ev) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-7-9, Nippo Yokochō Bldg 1F, in an alley of Hōzenji Yokochō',
    cuisine: 'Fluffy-batter okonomiyaki · beef tendon, green onion and konnyaku (the favourite) · mixed pork, squid and shrimp · modern-yaki · negi-tonpei · seafood yakisoba · butter-mentaiko yakisoba · grilled squid with salt and lemon · 26 seats',
    website: null, gmaps: gm('法善寺 三平'), menu_url: null,
    notes: "[Okonomiyaki · fluffy okonomiyaki in Hōzenji Yokochō] A 26-seat okonomiyaki shop tucked into an alley of Hōzenji Yokochō, with queues of mostly overseas visitors, so book or arrive at opening. The batter is famously fluffy (\"the fluffiest okonomiyaki I've ever had\"). The signature combination is beef tendon, green onion and konnyaku, rich and generous, while the mixed pork, squid and shrimp is lighter. Start with teppan plates like grilled squid with salt and lemon or chicken thigh with ponzu. Negi-tonpei, modern-yaki and a butter-mentaiko yakisoba round it out. Ingredients are big, and service is skilled and quick. Closed Tuesdays; lunch at weekends only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Hōzenji Yokochō, Dotonbori 1-chōme', background: 'Tabelog introduction: "Fuwa-Fuwa Batter Okonomiyaki with a Special Touch from Hōzenji Sanpei".', philosophy: null, specialty: 'Fluffy okonomiyaki; beef-tendon and konnyaku okonomiyaki.',
      anecdotes: [
        { text: '"The okonomiyaki with green onions, beef tendon, and konnyaku was a standout. One bite and I was amazed at how fluffy it was." — September 2026.', source: R + 'B535579846/' },
        { text: '"Most of the customers were foreign tourists, and by the time I left, everyone in line outside was also a foreigner!" — September 2026.', source: R + 'B319661492/' },
      ],
      japanese_sources_summary: '食べログ: 法善寺 三平、大阪市中央区道頓堀1-7-9 日宝横丁ビル1F、26席(カウンター8、テーブル18)、月水木金17:00〜23:00(料理L.O.22:00、ドリンクL.O.22:30)、土日祝11:30〜15:30(L.O.14:45)・17:00〜23:00、火曜定休、禁煙、カード・電子マネー可、こだわり: 野菜・ベジタリアンメニュー、店の紹介: ふわふわの生地のお好み焼き、明太バター焼きそば、22時まで入店可。2026年の口コミ(6〜9月): 予約、外国人客の行列、すじねぎこんにゃくが人気、ミックス(豚・いか・えび)は軽め、名古屋の同僚と、海鮮焼きそば、ねぎとん平、えびが大きい、法善寺横丁の路地で見つけにくい、開店直後は入れる、早い提供、具が大きい、モダン焼き、いか焼き(塩レモン)、鶏ももポン酢、今まで一番ふわふわ、かつお節とソース。',
      confidence: 'medium', sources: [TB, R + 'B535579846/', R + 'B319661492/', R + 'B530157020/', R + 'B533475891/', R + 'B533217442/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Popular with overseas visitors; booking recommended.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-7-9 日宝横丁ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目7番9号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535579846/', R + 'B530157020/'],
    price_note: 'No prices captured; dishes from June–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Okonomiyaki: beef tendon, green onion and konnyaku', '', 'Okonomiyaki', 'no', 'no', 'September 2026.', 'suji_negi_konnyaku'),
      it('', '', 'Mixed okonomiyaki (pork, squid, shrimp)', '', 'Okonomiyaki', 'no', 'no', 'June–September 2026.', 'mix'),
      it('', '', 'Negi-tonpei', '', 'Teppan', 'no', 'no', 'June 2026.', 'negi_tonpei'),
      it('', '', 'Seafood yakisoba', '', 'Yakisoba', 'no', 'no', 'June 2026.', 'seafood_yakisoba'),
      it('', '', 'Grilled squid with salt and lemon', '', 'Teppan', 'ask', 'no', 'September 2026.', 'ika_yaki'),
    ] }, {
    cuisine: 'ふわふわの生地のお好み焼き・すじ、ねぎ、こんにゃく(一番人気)・豚、いか、えびのミックス・モダン焼き・ねぎとん平・海鮮焼きそば・明太バター焼きそば・いかの塩レモン焼き・26席',
    neighborhood: '道頓堀1-7-9 日宝横丁ビル1F、法善寺横丁の路地',
    gf_detail: 'グルテンフリーではありません。小麦粉のお好み焼きと焼きそば、ソース。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」とありますが、口コミの料理はすべて肉か魚介を使い、お好み焼きにはかつお節がかかります。',
    notes: '[お好み焼き・法善寺横丁のふわふわお好み焼き] 法善寺横丁の路地にある26席のお好み焼き店で、行列はほとんど海外からの客なので、予約か開店直後に。生地がふわふわなことで知られ(「今まで食べた中で一番ふわふわ」)、看板はすじ、ねぎ、こんにゃくの組み合わせで濃厚でボリュームたっぷり、豚、いか、えびのミックスは軽め。いかの塩レモン焼きや鶏ももポン酢など鉄板料理から始めて。ねぎとん平、モダン焼き、明太バターの焼きそばも。具は大きく、手際よく早い提供。火曜定休、ランチは週末だけ。',
  });
}

// ================================================================ 17MAP
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27141110/'; const R = TB + 'dtlrvwlst/';
  const n = day(['19:00', '03:00']), fs = day(['19:00', '04:00']);
  put({
    id: 'osaka_17map_shinsaibashi', name: '17MAP', category: 'OMNI',
    lat: 34.669727, lng: 135.502159, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soft tacos and tortillas are served, but no source says whether they are corn or wheat; burritos are wheat.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Veggie tacos are on the menu (April 2026) and Tabelog lists vegan and vegetarian options; fillings and salsas are not described.',
    hours_raw: 'Mon–Thu and nights before holidays 19:00–3:00 (L.O. 2:30); Fri–Sat 19:00–4:00 (L.O. 3:30); closed Sundays and holidays (Tabelog). One-drink policy when dining in (February 2026). Hidden bar "AREA51" behind the kitchen, 22:00–3:00 (March 2025).',
    hours: { 0: n, 1: n, 2: n, 3: n, 4: fs, 5: fs, 6: [] }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 2-3-7, ROYAL KITAGAWA Bldg 1F — north of Dotonbori',
    cuisine: 'Late-night taco bar · soft tacos: beef, chicken, pork and veggie · small burritos · tortillas · tequila and Mexican beer · 8 seats · takeaway · hidden bar AREA51 at the back',
    website: null, gmaps: gm('17MAP 心斎橋筋'), menu_url: null,
    notes: "[Mexican · a late-night taco bar with a secret back room] An 8-seat, colourful Mexican counter just north of Dotonbori, open from 7 pm to 3 or 4 am to Mexican music. Order soft tacos stuffed with beef, chicken, pork or vegetables (there's a veggie taco), tortillas, and a burrito that one fan found too small, with tequila or Mexican beer. There's a one-drink policy when you eat in, and takeaway is easy. Ask staff for \"AREA51\", a hidden bar behind the kitchen. Taco all-you-can-eat events pop up. Smoking only outside.",
    chef_bio: { chef_name: null, roles: [], origin: 'Shinsaibashisuji 2-chōme', background: 'A Mexican taco bar; Tabelog introduction: "Popular \'Whimsical Tacos\' Enjoyed Every Day! Burritos Also Recommended". No source names the operator.', philosophy: null, specialty: 'Soft tacos.',
      anecdotes: [
        { text: '"The tacos were packed with a generous amount of ingredients, with meat and vegetables tightly stuffed… When dining in, there\'s a one-drink policy." — February 2026.', source: R + 'B522520499/' },
        { text: '"Please tell the staff, \'I want to go to AREA51!\'" — March 2025, on the hidden bar behind the kitchen.', source: R + 'B504059519/' },
      ],
      japanese_sources_summary: '食べログ: 17MAP、大阪市中央区心斎橋筋2-3-7 ROYAL KITAGAWAビル1F、8席(カウンター6、2人テーブル1)、月〜木・祝前日19:00〜翌3:00(L.O.2:30)、金土19:00〜翌4:00(L.O.3:30)、日祝定休、禁煙(店外に喫煙所)、カード・電子マネー可、こだわり: 野菜・ヴィーガンメニュー・ベジタリアンメニュー、店の紹介: 気まぐれタコス、ブリトー。口コミ(2025年3月〜2026年4月): 厨房の奥の隠れバー「AREA51」(22時〜3時)、小さめのブリトー、カラフルでかわいい店、ワンドリンク制、具だくさんのタコス、トルティーヤ、メキシカン音楽、テキーラ、ソフトタコス(牛、鶏、豚、ベジ)、タコス食べ放題のイベント、持ち帰り。',
      confidence: 'low', sources: [TB, R + 'B522520499/', R + 'B504059519/', R + 'B526423259/', R + 'B527286983/'] },
    cultural_comfort: { level: 'english', note: 'Cheerful staff; small counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-3-7 ROYAL KITAGAWAビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated February–April 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目3番7号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527286983/', R + 'B522520499/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Soft tacos (beef, chicken, pork)', '', 'Tacos', 'ask', 'no', 'April 2026.', 'tacos'),
      it('', '', 'Veggie tacos', '', 'Tacos', 'ask', 'ask', 'April 2026.', 'veggie_tacos'),
      it('', '', 'Burrito', '', 'Burritos', 'no', 'ask', 'June 2025.', 'burrito'),
    ] }, {
    cuisine: '深夜のタコスバー・ソフトタコス(牛、鶏、豚、ベジ)・小ぶりのブリトー・トルティーヤ・テキーラとメキシコのビール・8席・持ち帰り・奥に隠れバーAREA51',
    neighborhood: '心斎橋筋2-3-7 ROYAL KITAGAWAビル1F、道頓堀の北',
    gf_detail: '要確認。ソフトタコスやトルティーヤがありますが、トウモロコシか小麦かは書かれていません。ブリトーは小麦です。',
    vegan_detail: '要確認。ベジタコスがあり(2026年4月)、食べログにはヴィーガン・ベジタリアンメニューありとありますが、具やサルサの中身は書かれていません。',
    notes: '[メキシコ料理・隠れ部屋のある深夜のタコスバー] 道頓堀のすぐ北にある、カラフルな8席のメキシコ料理のカウンターで、メキシカン音楽の中、夜7時から朝3時か4時まで。牛、鶏、豚、野菜(ベジタコスあり)を詰めたソフトタコス、トルティーヤ、小さいと感じたファンもいるブリトーを、テキーラやメキシコのビールと。店内で食べるときはワンドリンク制で、持ち帰りも簡単。スタッフに「AREA51」と伝えると、厨房の奥の隠れバーへ。タコス食べ放題のイベントも。喫煙は店の外で。',
  });
}

// ================================================================ 鉄板神社 道頓堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27058426/'; const R = TB + 'dtlrvwlst/';
  const n = day(['12:00', '03:00']);
  put({
    id: 'osaka_teppan_jinja_dotonbori', name: '鉄板神社 道頓堀店 (Teppan Jinja Dotonbori)', category: 'OMNI',
    lat: 34.668857, lng: 135.502993, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: teppan skewers include yakisoba and shrimp toast; sauces not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists "vegetarian options", and reviewers mention vegetable skewers, but no vegetarian dish is described.',
    hours_raw: 'Mon–Wed and Fri–Sun 12:00–3:00 (L.O. 2:30); Thu 12:00–2:00 (L.O. 1:30) (Tabelog). Smoking allowed (Tabelog).',
    hours: { 0: n, 1: n, 2: n, 3: day(['12:00', '02:00']), 4: n, 5: n, 6: n }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-6-4, Dōtonbori Erika Bldg B1F',
    cuisine: 'Teppan-skewer izakaya · 10-skewer omakase grilled in front of you · yakisoba skewers, shrimp toast, strip-loin steak · vegetable and meat skewers · all-you-can-drink course ¥7,700 · highballs · English-speaking staff · smoking allowed',
    website: null, gmaps: gm('鉄板神社 道頓堀店'), menu_url: null,
    notes: "[Teppanyaki · skewers off the griddle on Dotonbori] A lively basement teppan izakaya on Dotonbori where skewers come off the griddle as an omakase, so there's no menu to puzzle over. Regulars order the 10-skewer set and keep going: yakisoba on a stick, shrimp toast (a favourite), vegetables, meat, and a strip-loin steak that a table of American visitors said melted in the mouth. An all-you-can-drink course was ¥7,700 in March 2026, and the drinks list is long. A staff member speaks fluent English, and the staff are cheerful and very Osaka. Smoking allowed; open till 3 am.",
    chef_bio: { chef_name: null, roles: [], origin: 'Dotonbori branch (Tabelog listing name)', background: 'Teppan Jinja chain (another branch is in Sōemonchō); no source names the operator.', philosophy: null, specialty: 'Teppan skewers.',
      anecdotes: [
        { text: '"I opted for the all-you-can-drink course priced at JPY 7700… the young American guys absolutely loved the strip loin steak… there\'s a wonderful lady here who speaks fluent English." — March 2026.', source: R + 'B524230169/' },
        { text: '"They serve the skewers as an omakase, so I don\'t have to think about the menu… My favorite is the shrimp toast." — April 2026.', source: R + 'B526283247/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板神社 道頓堀店、大阪市中央区道頓堀1-6-4 道頓堀エリカビルB1F、33席、月火水金土日12:00〜翌3:00(L.O.2:30)、木12:00〜翌2:00(L.O.1:30)、喫煙可、カード・電子マネー可、こだわり: 野菜・魚・ベジタリアンメニュー、店の紹介: 素材本来のおいしさ、焼きそば串以外も、団体予約可。2026年の口コミ(3〜7月): 飲み放題コース7,700円、アメリカ人の同僚が気に入った、ロースステーキ、英語が流暢なスタッフ、串はおまかせ、海老トースト、冷えたビール、大阪らしい気さくなスタッフ、喫煙可、10本のおまかせ、ハイボール、鉄板の串焼き、野菜も肉も、2階と1階のカウンター。',
      confidence: 'medium', sources: [TB, R + 'B524230169/', R + 'B526283247/', R + 'B533864603/', R + 'B532405115/', R + 'B537483525/'] },
    cultural_comfort: { level: 'english', note: 'A staff member speaks fluent English (March 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-6-4 道頓堀エリカビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目6番4号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524230169/', R + 'B533864603/'],
    price_note: 'One price from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Teppan skewer omakase (10 pieces)', '', 'Skewers', 'no', 'no', 'April 2026.', 'omakase10'),
      it('', '', 'All-you-can-drink course', '¥7,700', 'Courses', 'no', 'no', 'March 2026.', 'nomihodai'),
      it('', '', 'Shrimp toast', '', 'Skewers', 'no', 'no', 'April 2026.', 'shrimp_toast'),
      it('', '', 'Strip-loin steak', '', 'Teppan', 'ask', 'no', 'March 2026.', 'loin_steak'),
    ] }, {
    cuisine: '鉄板串焼きの居酒屋・目の前で焼く10本のおまかせ・焼きそば串、海老トースト、ロースステーキ・野菜と肉の串・飲み放題コース7,700円・ハイボール・英語が話せるスタッフ・喫煙可',
    neighborhood: '道頓堀1-6-4 道頓堀エリカビルB1F',
    gf_detail: '実際にはグルテンフリーではありません。焼きそば串や海老トーストがあり、たれの中身は書かれていません。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」とあり、野菜の串の口コミもありますが、ベジタリアンの料理は書かれていません。',
    notes: '[鉄板焼き・道頓堀の鉄板串] 道頓堀の地下にあるにぎやかな鉄板居酒屋で、串は鉄板からおまかせで出てくるのでメニューに悩む必要なし。常連は10本のおまかせを頼んでさらに追加。串の焼きそば、人気の海老トースト、野菜、肉、そしてアメリカからの客が口でとろけると喜んだロースステーキ。飲み放題コースは2026年3月で7,700円、ドリンクの種類も豊富。英語が流暢なスタッフがいて、スタッフは明るく大阪らしい。喫煙可、深夜3時まで。',
  });
}

save();
