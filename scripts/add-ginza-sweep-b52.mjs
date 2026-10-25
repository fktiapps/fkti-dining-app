// Ginza Station half-mile sweep (805 m), batch 52 — small non-Japanese places with 2026 reviews.
//   + アマラントス (French by owner-chef Shintaro Miyazaki, a former pâtissier; relocated to Ginza → MOM_AND_POP)
//   + サラマンジェ ド イザシ ワキサカ (Lyonnaise bistro of chef Hisashi Wakisaka, moved from Toranomon; ownership not stated → OMNI)
//   + ラール・エ・ラ・マニエール (French since 2009; chef Koshikubota hired 2023 → OMNI)
//   + 挽肉屋 神徳 (hamburg-steak shop, opened 2022; owner not named → OMNI)
// Not added: プティオザミ (sister of Ginza Ozami De Vin) — later as OMNI.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ アマラントス
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13307700/'; const R = TB + 'dtlrvwlst/';
  const d = day(['18:00', '23:00']), we = day(['12:00', '15:00'], ['18:00', '23:00']);
  put({
    id: 'tokyo_amarantos_ginza5', name: 'アマラントス (Amarantos)', category: 'MOM_AND_POP',
    lat: 35.670995, lng: 139.763869,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An innovative French course with pastry-chef desserts and a chiffon cake to take home; no source describes a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a French tasting course with meat, fish and dairy desserts.',
    hours_raw: 'Mon–Fri and holidays 18:00–23:00 (food L.O. 20:00); Sat–Sun 12:00–15:00 (L.O. 12:30) and 18:00–23:00 (Tabelog). 10% service charge. Cards and IC accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme on Suzuran-dōri, SANWA Suzuran Bldg 9F — 3 min from Ginza Stn A1',
    cuisine: 'Innovative French by a pâtissier-trained owner-chef · desserts by two pastry chefs · relocated to Ginza', cuisine_type: 'french',
    website: null, gmaps: gm('アマラントス 銀座5-6-7 SANWAすずらんビル'), menu_url: null,
    notes: "[Mom & Pop · the pâtissier's French] A 20-seat French restaurant on the ninth floor of a Suzuran-dōri building, with an island open kitchen, recently relocated to Ginza. Tabelog's chef text names owner-chef Shintaro Miyazaki. Miyazaki studied Western pastry as a pâtissier and worked in France at Le Bourguignon and Au Goût du Jour, becoming sous-chef at Raison Bleu, before returning to Japan in 2007, and still makes desserts as a specialist. The listing says two chefs from pâtissier backgrounds make the desserts. 2026 diners describe a beautifully plated, playful course, tableware from Sara Linda Japan and ILAKÉ, and a chiffon cake to take home. Expect ¥40,000–60,000 a head with pairings, plus 10% service.",
    chef_bio: { chef_name: 'Shintaro Miyazaki (owner-chef)', roles: ['owner-chef'], origin: 'Relocated to Ginza (2026 review)', background: 'Pâtissier training; worked in France at Le Bourguignon and Au Goût du Jour and as sous-chef at Raison Bleu; returned to Japan in 2007 (Tabelog chef text).', philosophy: null, specialty: 'Innovative French; plated desserts.',
      anecdotes: [
        { text: '"I visited Amarantos, which has relocated to Ginza… the delightful chiffon cake souvenir I took home was absolutely delicious." — August 2026.', source: R + 'B536384140/' },
        { text: '"Enjoy Unique Dishes and Exquisite Desserts by a Pastry Chef!" — October 2026.', source: R + 'B537739391/' },
      ],
      japanese_sources_summary: '食べログ: アマラントス、銀座5-6-7 SANWAすずらんビル9F、銀座駅A1出口から徒歩3分、20席、平日・祝18:00〜23:00、土日12:00〜15:00・18:00〜23:00、サービス料10%、カード・IC可、予算4〜5万円。シェフ紹介(英文): オーナーシェフ Shintaro Miyazaki、パティシエとして洋菓子を学び渡仏、Le Bourguignon、Au Goût du Jour などで修業、Raison Bleu でスーシェフ、2007年に帰国、パティシエ出身の二人のシェフによるデザート。2026年の口コミ: 銀座へ移転、アイランド型のオープンキッチン、遊び心のある盛り付け、Sara Linda Japan や ILAKÉ の器、土産のシフォンケーキ、4〜6万円。',
      confidence: 'medium', sources: [TB, R + 'B536384140/', R + 'B537739391/', R + 'B536335958/', R + 'B537929642/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Elegant dining room; book ahead; 10% service charge.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-6-7 SANWA すずらん Bldg. 9F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目6番7号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537739391/', R + 'B536335958/'],
    price_note: 'No prices captured; reviewers spend ¥40,000–60,000.', last_checked: TODAY, items: [
      it('おまかせコース', 'omakase koosu', 'Innovative French tasting course with pastry-chef desserts', '', 'Courses', 'ask', 'no', '', 'course'),
      it('シフォンケーキ(土産)', 'shifon keeki', 'Chiffon cake to take home', '', 'Sweets', 'no', 'no', '', 'chiffon'),
    ] }, {
    cuisine: 'パティシエ出身のオーナーシェフの革新的フレンチ・パティシエ出身の二人のシェフのデザート・銀座へ移転',
    neighborhood: '銀座五丁目のすずらん通り、SANWAすずらんビル9F。銀座駅A1出口から徒歩3分',
    gf_detail: '要確認。パティシエのデザートと持ち帰りのシフォンケーキがある革新的フレンチのコース。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。肉・魚と乳製品のデザートのフレンチのコース。',
    notes: '[個人店・パティシエのフレンチ] すずらん通りのビル9階、アイランド型のオープンキッチンを持つ20席のフレンチで、銀座へ移転してきました。食べログのシェフ紹介によれば、オーナーシェフの Shintaro Miyazaki はパティシエとして洋菓子を学んだのち渡仏し、Le Bourguignon や Au Goût du Jour で修業、Raison Bleu でスーシェフを務め、2007年に帰国。今もデザートの専門家として活躍しています。デザートはパティシエ出身の二人のシェフが担当。2026年の口コミでは、美しく遊び心のある盛り付け、Sara Linda Japan や ILAKÉ の器、持ち帰りのシフォンケーキ。ペアリング込みで1人4〜6万円ほど、サービス料10%。',
  });
}

// ================================================================ サラマンジェ ド イザシ ワキサカ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13151302/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:30', '13:30'], ['18:00', '23:00']);
  put({
    id: 'tokyo_salle_a_manger_hisashi_wakisaka', name: 'サラマンジェ ド イザシ ワキサカ (SALLE À MANGER de Hisashi WAKISAKA)', category: 'OMNI',
    lat: 35.67065, lng: 139.760346,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: Lyonnaise bistro cooking with quenelles, tarts (praline tart, Muscat tart) and sauced fish; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: boudin noir, quenelles, fish soup, beef and flounder Dugléré.',
    hours_raw: 'Mon–Sat 11:30–13:30 and 18:00–23:00; closed Sundays (Tabelog). ¥500 table charge. Cards and d Barai accepted.',
    hours: { 0: ld, 1: ld, 2: ld, 3: ld, 4: ld, 5: ld }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, TAKAYA-GINZA Bldg B1F — 4 min from Ginza Stn',
    cuisine: 'Lyonnaise bistro, moved from Toranomon · quenelles, boudin noir, praline tart · à la carte made into a course', cuisine_type: 'french',
    website: null, gmaps: gm('サラマンジェ ド イザシ ワキサカ 銀座7-2-8'), menu_url: null,
    notes: "[French · Lyon's home cooking in a basement] A 20-seat Lyonnaise bistro in a Ginza 7-chōme basement, named after chef Hisashi Wakisaka, which moved here from Toranomon. Tabelog describes authentic regional cooking from classic recipes, the food that fills ordinary Lyonnais, made without additives. The signature tarte praliné takes hours: every raw almond is peeled and coated in red sugar. Regulars order soupe de poisson, salade lyonnaise, boudin noir, quenelles, sole or flounder Dugléré, domestic beef bavette and seasonal tarts. You choose à la carte and the kitchen turns it into a course, even for a table of five each ordering differently. One diner who could not eat cake was given a substitute. About ¥8,000–15,000 a head, plus a ¥500 table charge.",
    chef_bio: { chef_name: 'Hisashi Wakisaka (chef)', roles: ['chef'], origin: 'Moved from Toranomon to Ginza (2026 review)', background: 'Tabelog presents chef Wakisaka\'s commitment to authentic, additive-free Lyonnaise regional cooking; ownership is not stated.', philosophy: '"Traditional Local Cuisine That Fills the Common People\'s Stomachs with Happiness." (Tabelog)', specialty: 'Tarte praliné; quenelles; boudin noir.',
      anecdotes: [
        { text: '"I\'ve loved this restaurant since it was in Toranomon, and since moving to Ginza, it has only improved." — September 2026.', source: R + 'B534772972/' },
        { text: '"This restaurant offers a unique experience where you can order a la carte and they will prepare it as a course meal." — August 2026.', source: R + 'B535561121/' },
        { text: '"When I mentioned that I couldn\'t eat cake, they kindly substituted it…" — October 2026.', source: R + 'B537878304/' },
      ],
      japanese_sources_summary: '食べログ: サラマンジェ ド イザシ ワキサカ、銀座7-2-8 TAKAYA-GINZAビルB1F、銀座駅から徒歩4分、20席、月〜土11:30〜13:30・18:00〜23:00、日休、テーブルチャージ500円、カード・d払い可。店舗紹介(英文): シェフ Hisashi Wakisaka、古典に基づく本物の郷土料理、無添加、リヨンの「タルト・プラリネ」(生のアーモンドを一粒ずつ剥き赤い糖衣で)。2026年の口コミ: 虎ノ門から銀座へ移転、リヨン料理、スープ・ド・ポワソン、リヨン風サラダ、ブーダン・ノワール、クネル、平目のデュグレレ、国産牛のバヴェット、マスカットのタルト、アラカルトをコース仕立てに、ケーキの代わりに別の品、11回通う常連、8,000〜15,000円。',
      confidence: 'low', sources: [TB, R + 'B501692616/', R + 'B534772972/', R + 'B535561121/', R + 'B537878304/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bistro basement; à la carte orders turned into a course. ¥500 table charge.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Dessert substituted for a guest who could not eat cake (October 2026).', source: R + 'B537878304/' }], positives: [{ text: 'Committed to not using additives (Tabelog).', source: TB }], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-2-8 TAKAYA-GINZAビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目2番8号 (go) 8m; same lot as ラ ニュイ ブランシュ; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B501692616/', R + 'B534772972/'],
    price_note: 'No prices captured; reviewers spend ¥8,000–15,000.', last_checked: TODAY, items: [
      it('タルト・プラリネ', 'taruto purarine', 'Tarte praliné (Lyon)', '', 'Desserts', 'no', 'no', '', 'tarte_praline'),
      it('クネル', 'kuneru', 'Quenelles', '', 'Mains', 'no', 'no', '', 'quenelles'),
      it('ブーダン・ノワール', 'buudan nowaaru', 'Boudin noir', '', 'Mains', 'ask', 'no', '', 'boudin_noir'),
      it('スープ・ド・ポワソン', 'suupu do powason', 'Soupe de poisson', '', 'Starters', 'ask', 'no', '', 'soupe_poisson'),
    ] }, {
    cuisine: '虎ノ門から移転したリヨン料理のビストロ・クネル、ブーダン・ノワール、タルト・プラリネ・アラカルトをコース仕立てに',
    neighborhood: '銀座七丁目、TAKAYA-GINZAビルB1F。銀座駅から徒歩4分',
    gf_detail: '実際上グルテンフリーではありません。クネル、タルト(プラリネ、マスカット)、ソースを合わせた魚などのリヨンのビストロ料理で、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。ブーダン・ノワール、クネル、魚のスープ、牛肉、平目のデュグレレ。',
    notes: '[フレンチ・地下のリヨンの家庭料理] 銀座7丁目のビル地下、シェフ Hisashi Wakisaka の名を冠した20席のリヨン料理のビストロで、虎ノ門から移ってきました。食べログによれば、古典のレシピに基づき、リヨンの庶民の胃袋を満たす本物の郷土料理を無添加で。名物のタルト・プラリネは生のアーモンドを一粒ずつ剥いて赤い糖衣をかける手間のかかる一品。常連はスープ・ド・ポワソン、リヨン風サラダ、ブーダン・ノワール、クネル、平目のデュグレレ、国産牛のバヴェット、季節のタルトを。アラカルトで選ぶとコース仕立てにしてくれ、5人それぞれ違う品でも対応。ケーキが食べられない客には別の品を出してくれたことも。1人8,000〜15,000円ほど、テーブルチャージ500円。',
  });
}

// ================================================================ ラール・エ・ラ・マニエール
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13095732/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:30', '23:00']), ld = day(['11:30', '15:00'], ['18:00', '23:00']);
  put({
    id: 'tokyo_lart_et_la_maniere_ginza', name: 'ラール・エ・ラ・マニエール (L\'art et la Manière)', category: 'OMNI',
    lat: 35.673007, lng: 139.765762,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A creative French course (crêpe amuse, foie gras with persimmon, beef tongue with Comté, venison); no source describes a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: foie gras, beef tongue, sweetfish, venison and cheese.',
    hours_raw: 'Mon, Tue, Thu, Fri 17:30–23:00 (food L.O. 21:00); Wed, Sat, Sun and holidays 11:30–15:00 and 18:00–23:00 (Tabelog); the shop text also says it is generally closed Sundays and Mondays with irregular holidays — check its Instagram. Cards, IC and QR accepted.',
    hours: { 0: d, 1: d, 2: ld, 3: d, 4: d, 5: ld, 6: ld }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme behind MUJI, opposite MUJI HOTEL GINZA, Optica B1F — 3 min from Ginza-itchōme Stn',
    cuisine: 'French since 2009 · chef Koshikubota (ex-MAZ, L\'Arpège) since 2023 · seasonal "Menu Saison" about ¥20,000', cuisine_type: 'french',
    website: null, gmaps: gm('ラール・エ・ラ・マニエール 銀座3-4-17 オプティカ'), menu_url: null,
    notes: "[French · seventeen years behind MUJI] A basement French restaurant behind MUJI, opposite MUJI HOTEL GINZA, open since September 2009. Tabelog's chef text says chef Koshikubota arrived in October 2023 after key roles at MAZ, the two-star restaurant of Lima's Central, and at the Michelin-starred L'Arpège. The cooking is classic French with a light, creative touch. 2026 diners describe a crêpe tube of sweet soybean espuma as an amuse, then dishes such as Ohomasa with Roquefort, bonito, foie gras with persimmon, beef tongue with Comté, sweetfish with crisp-grilled scales and venison. The seasonal 'Menu Saison' was ¥19,800–20,000 in September 2026, with Champagne by the glass. A four-visit regular praises the cooking but missed the previous sommelier. About ¥20,000–40,000 a head.",
    chef_bio: { chef_name: 'Chef Koshikubota (since October 2023)', roles: ['chef'], origin: 'Opened 1 September 2009 (Tabelog)', background: 'Key positions at MAZ (Central\'s two-star restaurant) and L\'Arpège before joining in October 2023 (Tabelog chef text).', philosophy: null, specialty: 'Light, creative French.',
      anecdotes: [
        { text: '"Celebrating 17 years in Ginza, this restaurant invites you into a world filled with extraordinary experiences." — September 2026.', source: R + 'B536611286/' },
        { text: '"I enjoyed the luxurious course for JPY 20,000… a tube-shaped crepe filled with sweet soybean espuma." — September 2026.', source: R + 'B536262074/' },
      ],
      japanese_sources_summary: '食べログ: ラール・エ・ラ・マニエール、銀座3-4-17 オプティカB1F(無印良品の裏、MUJI HOTEL GINZAの向かい)、銀座一丁目駅から徒歩3分、20席、月火木金17:30〜23:00、水土日祝11:30〜15:00・18:00〜23:00(店舗紹介では日月定休・不定休あり)、2009年9月1日開店、カード・IC・QR可。シェフ紹介(英文): シェフ Koshikubota、MAZ(Central)と L\'Arpège を経て2023年10月就任。2026年の口コミ: 銀座で17年、甘い大豆のエスプーマのクレープ、オホマサとロックフォール、鰹、柿とフォアグラ、牛タンとコンテ、鮎の鱗焼き、鹿、Menu Saison 19,800〜20,000円、ソムリエの交代、2〜4万円。',
      confidence: 'low', sources: [TB, R + 'B536611286/', R + 'B536262074/', R + 'B536928598/', R + 'B514397874/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Basement dining room; confirm opening days on Instagram.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-4-17 オプティカ B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目4番17号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536611286/', R + 'B536262074/'],
    price_note: 'Course price from September 2026 reviews.', last_checked: TODAY, items: [
      it('Menu Saison', 'menyu sezon', 'Seasonal "Menu Saison" course', '¥19,800', 'Courses', 'ask', 'no', '2026.', 'menu_saison'),
    ] }, {
    cuisine: '2009年からのフレンチ・2023年から Koshikubota シェフ(MAZ、L\'Arpège出身)・季節の Menu Saison 約2万円',
    neighborhood: '銀座三丁目、無印良品の裏・MUJI HOTEL GINZAの向かいのオプティカB1F。銀座一丁目駅から徒歩3分',
    gf_detail: '要確認。クレープのアミューズ、柿とフォアグラ、牛タンとコンテ、鹿などの創作的なフレンチのコース。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。フォアグラ、牛タン、鮎、鹿、チーズ。',
    notes: '[フレンチ・無印良品の裏の17年] 無印良品の裏、MUJI HOTEL GINZAの向かいのビル地下、2009年9月開店のフレンチ。食べログのシェフ紹介によれば、リマの Central による二つ星の MAZ やミシュラン星付きの L\'Arpège で要職を務めた Koshikubota シェフが2023年10月に就任。古典に基づく軽やかで創造的な料理です。2026年の口コミでは、甘い大豆のエスプーマを詰めた筒状のクレープのアミューズ、オホマサとロックフォール、鰹、柿とフォアグラ、牛タンとコンテ、鱗を焼いた鮎、鹿など。季節の「Menu Saison」は2026年9月で19,800〜20,000円、シャンパンはグラスでも。4回通う常連は料理を絶賛しつつ、以前のソムリエがいなかったのを惜しんでいます。1人2〜4万円ほど。',
  });
}

// ================================================================ 挽肉屋 神徳
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13270846/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:30', '16:00'], ['18:00', '21:00']);
  put({
    id: 'tokyo_hikinikuya_jintoku_higashi_ginza', name: '挽肉屋 神徳 (Hikinikuya Jintoku)', category: 'OMNI',
    lat: 35.670829, lng: 139.768575,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Freshly grilled hamburg steaks (beef, beef-pork-lamb blend, fish) with salt, sauces or mustard, or in broth; no source says whether binders or sauces contain wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef, pork, lamb and fish hamburg steaks.',
    hours_raw: 'Daily 11:30–16:00 and 18:00–21:00; closed for Obon and New Year (Tabelog). Cards (Visa, Master), IC and QR accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, VORT Ginza East 1F — 1 min from Higashi-Ginza Stn (Asakusa Line)',
    cuisine: 'Hamburg-steak specialist (opened 2022) · grilled to order, six kinds incl. a beef-pork-lamb blend · refillable rice and miso soup', cuisine_type: 'other',
    website: null, gmaps: gm('挽肉屋 神徳 銀座3-11-16'), menu_url: null,
    notes: "[Hamburg steak · grilled to order in Higashi-Ginza] A 20-seat hamburg-steak specialist by Higashi-Ginza Station, opened in April 2022, with a calm Japanese-style room, a long counter and two small tables. Patties are grilled one at a time: all beef, a mixed blend of beef, pork and lamb with a light gamey finish, and a fish option that sells out. Eat them with salt, sauces or mustard, as a rice bowl, or in broth. The set meal includes unlimited rice and miso soup. A two-patty set was ¥1,850 in October 2026. Dinner ends at 21:00.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 April 2022 (Tabelog)', background: 'No source names the owner.', philosophy: null, specialty: 'Hamburg steak in several blends.',
      anecdotes: [
        { text: '"I ordered a Hamburger Steak set meal for one (JPY 1850)… the mixed blend (beef, pork, and lamb)… the aftertaste had a pleasant hint of gamey…" — October 2026.', source: R + 'B537917868/' },
        { text: '"I was intrigued by the uniqueness of having hamburg steak with broth, so I decided to give it a try!" — October 2026.', source: R + 'B537817665/' },
      ],
      japanese_sources_summary: '食べログ: 挽肉屋 神徳、銀座3-11-16 VORT銀座イースト1F、東銀座駅(浅草線)から徒歩1分、20席(カウンターと2名卓2つ)、毎日11:30〜16:00・18:00〜21:00、お盆と年末年始休、2022年4月15日開店、カード(VISA・Master)・IC・QR可、和の落ち着いた店内。2026年10月の口コミ: 焼きたてのハンバーグ、牛100%、牛・豚・羊の合挽き、魚(売り切れも)、塩・ソース・マスタード、丼、出汁で食べるハンバーグ、ご飯と味噌汁おかわり自由、2種の定食1,850円。',
      confidence: 'low', sources: [TB, R + 'B537917868/', R + 'B537817665/', R + 'B537568310/', R + 'B537530435/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quick lunch counter; dinner ends at 21:00.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-11-16 VORT銀座イースト 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; four reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目11番16号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537917868/', R + 'B537568310/'],
    price_note: 'Set price from an October 2026 review.', last_checked: TODAY, items: [
      it('ハンバーグ定食(2種)', 'hanbaagu teishoku', 'Hamburg-steak set, two kinds, unlimited rice and miso soup', '¥1,850', 'Set meals', 'ask', 'no', '2026.', 'hamburg_set'),
      it('出汁で食べるハンバーグ丼', '', 'Hamburg steak in broth, as a rice bowl', '', 'Rice bowls', 'ask', 'no', '', 'dashi_hamburg'),
    ] }, {
    cuisine: 'ハンバーグ専門店(2022年開店)・注文ごとに焼く6種(牛・豚・羊の合挽きも)・ご飯と味噌汁おかわり自由',
    neighborhood: '銀座三丁目、VORT銀座イースト1F。東銀座駅(浅草線)から徒歩1分',
    gf_detail: '要確認。焼きたてのハンバーグ(牛、牛・豚・羊の合挽き、魚)を塩・ソース・マスタードや出汁で。つなぎやソースに小麦を使うかは書かれていません。',
    vegan_detail: 'ヴィーガンではありません。牛・豚・羊・魚のハンバーグ。',
    notes: '[ハンバーグ・東銀座で注文ごとに焼く] 東銀座駅すぐ、2022年4月開店の20席のハンバーグ専門店で、和の落ち着いた店内に広いカウンターと2名卓が2つ。ハンバーグは一つずつ焼き、牛100%、ほのかに羊の香りが残る牛・豚・羊の合挽き、売り切れることもある魚など。塩・ソース・マスタードで、丼で、あるいは出汁で。定食はご飯と味噌汁がおかわり自由。2026年10月は2種の定食が1,850円。夜は21時まで。',
  });
}

save();
