// Osaka sweep (2-mile circle around Dotonbori), batch 29 — vegan/GF phase (all OMNI).
// Evidence-led picks (shop's own text + reviews), not the bare Tabelog veg flag:
//   + CASABLANCA NAMBA RIVERSIDE (Middle Eastern/Mediterranean café on the Dotonbori River; shop states vegan/vegetarian/GF options; vegan corn tartine reviewed)
//   + ALI'S KITCHEN (Pakistani; official site "Halal restaurant"; vegetarian curries, samosa, falafel set)
//   + G.L.B (Kitahorie chopped-salad shop; all dressings vegan per the shop; GF lemon cake; plant-based lattes)
//   + メッゼ堀江 (Turkish; halal ingredients per the shop; falafel, hummus)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 29);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ CASABLANCA NAMBA RIVERSIDE
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27150724/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_casablanca_namba_riverside', name: 'CASABLANCA NAMBA RIVERSIDE', category: 'OMNI',
    lat: 34.669265, lng: 135.49843, cuisine_type: 'cafe',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'The shop says it has "a wide range of options for vegetarians, gluten-free, and vegan diners" and asks you to mention allergies when booking (Tabelog). No review names a gluten-free dish; pita, rye-bread tartines, bagels and croissants all contain gluten, so ask which plates are GF.',
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: 'Shop: "Vegan options available too!", with vegan or vegetarian requests taken at booking. Reviewed in September 2026: the domestic-corn tartine (rye bread, grilled corn, hummus, avocado, tomato, marinated onions), described as a vegan dish. The falafel pita sandwich is another likely candidate — ask about the sauce.',
    hours_raw: 'Daily 7:00–24:00 (food L.O. 23:00, drinks 23:30) (Tabelog); lunch still served just before 16:00 (September 2026). Reservations taken — mention allergies or vegan/vegetarian needs when booking. Cards, e-money (iD, QUICPay) and QR accepted. English menu and English-speaking staff (Tabelog). Dogs welcome on the terrace.',
    hours: ALL(day(['07:00', '23:59'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 2-6-7, S-Front Dotonbori 1F — on the Dotonbori River, about 4 min from Namba Stn',
    cuisine: 'Middle Eastern and Mediterranean café-restaurant · vegan corn tartine with hummus and avocado · falafel pita sandwich · grilled chicken shawarma with pita · homemade fries · English breakfast, Turkish eggs, smoked-salmon bagel, bacon-and-egg croissant · house-roasted coffee and flavored lattes · riverside terrace · 52 seats',
    website: null, gmaps: gm('CASABLANCA NAMBA RIVERSIDE'), menu_url: null,
    notes: "[Café · Mediterranean breakfast-to-midnight on the Dotonbori River] A bright café-restaurant on the ground floor of S-Front Dotonbori, opened July 2025. A riverside terrace (dogs welcome) is the landmark, and it runs from a 7 am breakfast to a late bar. The menu is Middle Eastern and Mediterranean, and the shop says it covers vegetarian, vegan and gluten-free diners; tell them when you book. The reviewed vegan plate is the domestic-corn tartine on rye bread, with sweet charred corn, hummus, avocado, tomato and marinated onions. One September 2026 diner found that nothing felt missing. Falafel pita sandwiches and grilled-chicken shawarma lead at lunch. Breakfast runs to English breakfast, Turkish eggs and a smoked-salmon bagel. The coffee is roasted in-house. English menu and English-speaking staff.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 10 July 2025 (Tabelog)', background: 'Shop text (Tabelog): a barista roasts small batches of beans in-house, including Ethiopian and Colombian; private parties for up to 60.', philosophy: null, specialty: 'Middle Eastern and Mediterranean dishes; breakfast; house-roasted coffee.',
      anecdotes: [
        { text: '"It paired well with the creamy hummus and avocado, and even though it\'s a vegan dish, I didn\'t feel like anything was missing." — September 2026, domestic corn tartine.', source: R + 'B535695679/' },
        { text: '"The \'Falafel Pita Sandwich\' was filled with crispy, fluffy falafel, perfectly balanced with spices and vegetables." — August 2026.', source: R + 'B534427194/' },
      ],
      japanese_sources_summary: '食べログ: CASABLANCA NAMBA RIVERSIDE、大阪市中央区西心斎橋2-6-7 S-Front道頓堀1F、050-5570-2869、予約可(アレルギー、ヴィーガン・ベジタリアンの希望、犬連れでテラス希望は予約時に)、毎日7:00〜24:00(料理L.O.23:00、ドリンクL.O.23:30)、カード・電子マネー(iD、QUICPay)・QR決済可、52席(テラス24)、禁煙、英語メニュー・英語対応スタッフ、2025年7月10日開店。店の説明: 本格的な中東・地中海料理、ヴィーガンメニューもあり、ベジタリアン・グルテンフリー・ヴィーガン向けの品も豊富、自家焙煎コーヒー。2026年の口コミ(8〜10月): ファラフェルのピタサンド、グリルチキンのシャワルマ、自家製フライドポテト、川の眺め、イングリッシュブレックファスト、ベーコンエッグクロワッサン、国産コーンのタルティーヌ(ライ麦パン、焼きコーン、フムス、アボカド、トマト、マリネした玉ねぎ、ヴィーガン)、カフェラテ、16時前でもランチ、外国の雰囲気。',
      confidence: 'medium', sources: [TB, R + 'B535695679/', R + 'B534427194/', R + 'B535035311/', R + 'B535990401/', R + 'B536886410/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Asks guests to state allergies and vegan/vegetarian requests when booking (Tabelog).'], positives: [
      { text: 'Own statement (Tabelog): "a wide range of options for vegetarians, gluten-free, and vegan diners"; allergies taken at booking.', source: TB },
    ] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-6-7 S-Front道頓堀 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目6番7号 (go) 5m; OSM Casablanca Namba Riverside node/13059162987 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535695679/', R + 'B534427194/', R + 'B536886410/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Domestic corn tartine (vegan)', '', 'Breakfast', 'no', 'vegan', 'September 2026: rye bread, grilled corn, hummus, avocado, tomato, marinated onions.', 'corn_tartine'),
      it('', '', 'Falafel pita sandwich', '', 'Lunch', 'no', 'ask', 'August 2026.', 'falafel_pita'),
      it('', '', 'Grilled chicken shawarma with pita', '', 'Lunch', 'no', 'no', 'August–October 2026.', 'shawarma'),
      it('', '', 'Homemade French fries', '', 'Sides', 'ask', 'ask', 'August 2026.', 'fries'),
      it('', '', 'English breakfast', '', 'Breakfast', 'no', 'no', 'September 2026.', 'english'),
      it('', '', 'Turkish eggs', '', 'Breakfast', 'ask', 'no', 'September 2026 (menu).', 'turkish_eggs'),
    ] }, {
    cuisine: '中東・地中海料理のカフェレストラン・フムスとアボカドのヴィーガンのコーンタルティーヌ・ファラフェルのピタサンド・グリルチキンのシャワルマとピタ・自家製フライドポテト・イングリッシュブレックファスト、ターキッシュエッグ、スモークサーモンのベーグル、ベーコンエッグクロワッサン・自家焙煎コーヒーとフレーバーラテ・川沿いのテラス・52席',
    neighborhood: '西心斎橋2-6-7 S-Front道頓堀1F。道頓堀川沿い、なんば駅から徒歩約4分',
    gf_detail: '店によるとベジタリアン、グルテンフリー、ヴィーガン向けの品が豊富で、アレルギーは予約時に伝えてほしいとのこと(食べログ)。口コミにグルテンフリーの料理名はなく、ピタ、ライ麦パンのタルティーヌ、ベーグル、クロワッサンはグルテンを含むので、どれがGFか確認を。',
    vegan_detail: '店の説明は「ヴィーガンメニューもあり」、ヴィーガン・ベジタリアンの希望は予約時に。2026年9月の口コミでは国産コーンのタルティーヌ(ライ麦パン、焼きコーン、フムス、アボカド、トマト、マリネした玉ねぎ)がヴィーガン料理。ファラフェルのピタサンドも候補なので、ソースを確認して。',
    notes: '[カフェ・道頓堀川沿いの朝から深夜までの地中海料理] S-Front道頓堀の1階にある明るいカフェレストランで、2025年7月開店。目印は川沿いのテラス(犬連れ可)で、朝7時の朝食から夜のバーまで。料理は中東・地中海で、店はベジタリアン、ヴィーガン、グルテンフリーにも対応するとしているので、予約時に伝えて。口コミのヴィーガン料理は国産コーンのタルティーヌで、ライ麦パンに甘く焦げたコーン、フムス、アボカド、トマト、マリネした玉ねぎ。2026年9月の口コミでは物足りなさはまったくなかったそう。昼はファラフェルのピタサンドとグリルチキンのシャワルマ、朝はイングリッシュブレックファスト、ターキッシュエッグ、スモークサーモンのベーグル。コーヒーは自家焙煎。英語メニューと英語対応スタッフあり。',
  });
}

// ================================================================ ALI'S KITCHEN
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27045608/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_alis_kitchen', name: "ALI'S KITCHEN (Ali's Kitchen)", category: 'OMNI',
    lat: 34.674808, lng: 135.500948, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Biryani and curries are rice-based, but no source covers thickeners or cross-contact; naan, samosa and Turkish-style bread contain wheat.',
    vegan_status: 'limited', vegan_label: 'Limited vegan',
    vegan_detail: 'Vegetarian dishes in October 2026 reviews: baingan aloo (eggplant and potato curry, ¥1,200), potato samosa (¥800), the falafel set (chickpea croquettes, hummus, Arabic pickles, bread, ¥2,000), and a vegetable curry with the lunch sets. Tabelog lists vegetarian options. Whether ghee, butter or cream go into the curries is not stated — ask; palak paneer has cheese.',
    hours_raw: 'Mon–Wed and Fri–Sun 11:00–15:00 (lunch menu 11:00–14:30) and 17:00–22:00; closed Thursday "for the time being" (Tabelog; the official site also says closed every Thursday). Reservations taken. Cards accepted; no e-money or QR.',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: true, open_late: false },
    neighborhood: 'Shinsaibashi-suji 1-10-12, Tres Bldg B1F — basement, by Shinsaibashi Stn exits 4/5',
    cuisine: 'Pakistani and Arab halal kitchen · chicken biryani ¥1,600, biryani lunch set with drink ¥1,000 · spicy curry with meat on the bone ¥1,800 · baingan aloo ¥1,200 · potato samosa ¥800 · falafel set ¥2,000 · palak paneer · hummus shawarma and mixed kebab · halal wagyu · 32 seats · Tabelog 100 (Asian/Ethnic WEST 2022–2024; Curry WEST 2019–2020)',
    website: 'http://www.aliskitchen.jp/', gmaps: gm("ALI'S KITCHEN 心斎橋"), menu_url: null,
    notes: "[Curry · halal Pakistani biryani under Shinsaibashi-suji] A basement Pakistani and Arab kitchen by Shinsaibashi Station that calls itself a halal restaurant, with halal wagyu on its own site. Tabelog has listed it among its 100 best for curry (2019–2020) and Asian/ethnic food (2022–2024). Biryani is what it's known for: ¥1,600 à la carte, or a huge ¥1,000 lunch plate with a drink (October 2026). Vegetarians have real choices: an eggplant-and-potato baingan aloo (¥1,200), the potato samosa (¥800), and a falafel set with hummus and Arabic pickles (¥2,000). The spinach-heavy palak paneer has cheese, and nobody says whether ghee is used, so vegans should ask. Tables fill with visitors from around the world. Closed Thursdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Shinsaibashi-suji basement (Tabelog)', background: 'Official site: "Halal restaurant", serving halal wagyu; dinner courses. A long-time regular mentions its halal certification (review). Tabelog 100: Curry WEST 2019, 2020; Asian/Ethnic WEST 2022, 2023, 2024.', philosophy: null, specialty: 'Biryani; Pakistani curries; Arab mezze and kebabs.',
      anecdotes: [
        { text: '"Chicken Biryani JPY 1600 / Samosa Potato JPY 800 / Baingan Aloo (Eggplant and Potato Curry) JPY 1200" — October 2026.', source: R + 'B536797275/' },
        { text: '"◎ Falafel Set JPY 2,000 — Includes chickpea croquettes, hummus, Arabic pickles, and bread." — October 2026.', source: R + 'B537556232/' },
      ],
      japanese_sources_summary: '公式サイト: ハラールレストラン、ハラール和牛、ディナーコース、毎週木曜定休、心斎橋駅4・5番出口。食べログ: ALI\'S KITCHEN、大阪市中央区心斎橋筋1-10-12 トレスビルB1F、06-4708-5745、予約可、月〜水・金〜日11:00〜15:00(ランチ11:00〜14:30)・17:00〜22:00、木曜休み(当面)、カード可、電子マネー・QR不可、32席、禁煙、ベジタリアン・ハラールメニューあり、百名店(カレーWEST 2019・2020、アジア・エスニックWEST 2022〜2024)。2026年10月の口コミ: チキンビリヤニ1,600円、スパイシーカレー1,800円(骨付き肉)、ポテトサモサ800円、バインガンアルー(なすとじゃがいものカレー)1,200円、ビリヤニセット1,000円(ドリンク付き、量が多い)、タンドリーチキン1ピース250円、ファラフェルセット2,000円(ひよこ豆のコロッケ、フムス、アラブの漬物、パン)、ランチのチキンと野菜のカレーはマイルド、ナン、ラッシー、ミックスケバブ、フムスシャワルマ、パラクパニール、外国人客が多い、ハラール認証の話。',
      confidence: 'medium', sources: [TB, 'http://www.aliskitchen.jp/', R + 'B536797275/', R + 'B537556232/', R + 'B536759572/', R + 'B537424155/', R + 'B507863957/', R + 'B25345103/'] },
    cultural_comfort: { level: 'english', note: 'Halal restaurant with an international clientele; official site in English.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-10-12 トレスビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目10番12号 (go) 9m; OSM アリーズキッチン node/2366953358 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536797275/', R + 'B537556232/', R + 'B507863957/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken biryani', '¥1,600', 'Biryani', 'ask', 'no', 'October 2026.', 'biryani'),
      it('', '', 'Biryani lunch set (salad, drink)', '¥1,000', 'Lunch', 'ask', 'no', 'October 2026.', 'biryani_set'),
      it('', '', 'Spicy curry (meat on the bone)', '¥1,800', 'Curry', 'ask', 'no', 'October 2026.', 'spicy'),
      it('', '', 'Baingan aloo (eggplant and potato curry)', '¥1,200', 'Curry', 'ask', 'ask', 'October 2026.', 'baingan'),
      it('', '', 'Potato samosa', '¥800', 'Starters', 'no', 'ask', 'October 2026.', 'samosa'),
      it('', '', 'Falafel set (chickpea croquettes, hummus, Arabic pickles, bread)', '¥2,000', 'Arab', 'no', 'ask', 'October 2026.', 'falafel'),
      it('', '', 'Tandoori chicken (1 piece, add-on)', '¥250', 'Grill', 'ask', 'no', 'October 2026.', 'tandoori'),
    ] }, {
    cuisine: 'パキスタン・アラブ料理のハラールの店・チキンビリヤニ1,600円、ドリンク付きビリヤニランチセット1,000円・骨付き肉のスパイシーカレー1,800円・バインガンアルー1,200円・ポテトサモサ800円・ファラフェルセット2,000円・パラクパニール・フムスシャワルマとミックスケバブ・ハラール和牛・32席・食べログ百名店(アジア・エスニックWEST 2022〜2024、カレーWEST 2019〜2020)',
    neighborhood: '心斎橋筋1-10-12 トレスビルB1F。地下、心斎橋駅4・5番出口そば',
    gf_detail: '要確認。ビリヤニやカレーは米が中心ですが、とろみ付けや調理器具の共用については情報がありません。ナン、サモサ、パンは小麦を含みます。',
    vegan_detail: '2026年10月の口コミにあるベジタリアン料理は、バインガンアルー(なすとじゃがいものカレー、1,200円)、ポテトサモサ(800円)、ファラフェルセット(ひよこ豆のコロッケ、フムス、アラブの漬物、パン、2,000円)、ランチセットの野菜カレー。食べログにもベジタリアンメニューあり。カレーにギー、バター、クリームが入るかは書かれていないので確認を。パラクパニールはチーズ入り。',
    notes: '[カレー・心斎橋筋の地下のハラールのパキスタン料理] 心斎橋駅そばの地下にあるパキスタン・アラブ料理の店で、自らハラールレストランを名乗り、公式サイトにはハラール和牛も。食べログ百名店にカレー(2019〜2020)とアジア・エスニック(2022〜2024)で選ばれています。名物はビリヤニで、単品1,600円、ランチはドリンク付きで1,000円の大盛り(2026年10月)。ベジタリアンにもちゃんと選択肢があり、なすとじゃがいものバインガンアルー(1,200円)、ポテトサモサ(800円)、フムスとアラブの漬物付きのファラフェルセット(2,000円)。ほうれん草たっぷりのパラクパニールはチーズ入りで、ギーを使うかは誰も書いていないので、ヴィーガンの人は確認を。客席は世界中からの客で埋まります。木曜定休。',
  });
}

// ================================================================ G.L.B
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27099783/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_glb_kitahorie', name: 'G.L.B (Green Life Beginning)', category: 'OMNI',
    lat: 34.674394, lng: 135.495443, cuisine_type: 'cafe',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'The shop names a gluten-free lemon cake (domestic lemons, crushed pistachio) (Tabelog). Salads are built to order; ask about each topping and whether the dressings contain wheat. Bread comes with the breakfast plate.',
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: 'Shop text (Tabelog): every house dressing is additive-free and vegan, "with no white sugar, eggs, dairy, honey, or animal products used"; vegan chocolate-chip cookies; plant-based lattes with soy, oat or almond milk. Salads are built to order — choose vegetable toppings, since signature bowls carry roast beef, salmon, egg or herb chicken.',
    hours_raw: 'Daily 10:00–19:30, open year-round (Tabelog). Order and pay at the counter (self-service). Cards, e-money and QR (PayPay and others) accepted; no cover charge. Takeout salads. Dogs welcome on the terrace and in the front indoor area.',
    hours: ALL(day(['10:00', '19:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 1-9-15, Oceans Bldg 1F — 3 min from Yotsubashi and Nishi-Ohashi Stns (exit 4)',
    cuisine: 'Chopped-salad shop, built to order · vegan, additive-free house dressings (coconut-lemon oil and others) · gluten-free lemon cake · vegan chocolate-chip cookies · soy, oat and almond lattes · herb-chicken rice bowl on multigrain rice · gapao rice · breakfast plate · 29 seats, sofas, dog-friendly terrace',
    website: null, gmaps: gm('G.L.B 北堀江 サラダ'), menu_url: null,
    notes: "[Café · Kitahorie chopped-salad shop with vegan dressings] A wood-and-houseplant chopped-salad café in Kitahorie, open since 2017, with sofas and a dog-friendly terrace, three minutes from Yotsubashi. Salads are chopped to order with your choice of toppings. Every house dressing is vegan and additive-free, made without white sugar, eggs, dairy or honey (shop text), and the coconut-lemon oil dressing is refreshing in summer. The signature bowls carry roast beef, salmon, egg or herb chicken, so vegans should build their own. Sweets include a gluten-free lemon cake with pistachio and vegan chocolate-chip cookies, and lattes come with soy, oat or almond milk. There's also a breakfast plate, herb-chicken rice bowls and gapao rice. Order at the counter; salads to go.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 August 2017 (Tabelog)', background: 'Tabelog corporate-member listing; blog ameblo.jp/glb-choppedsalad. Eco-friendly containers to cut plastic (shop text).', philosophy: 'Additive-free, plant-based dressings; fresh vegetables sourced daily from around Japan (shop text).', specialty: 'Chopped salads; vegan dressings.',
      anecdotes: [
        { text: 'Shop text: "All of them are additive-free and vegan, with no white sugar, eggs, dairy, honey, or animal products used." — house dressings (Tabelog).', source: TB },
        { text: '"I went with the coconut lemon oil dressing. It was refreshing and perfect for summer." — June 2026, Miranda salad.', source: R + 'B529350388/' },
      ],
      japanese_sources_summary: '食べログ: G.L.B(グリーン・ライフ・ビギニング)、大阪市西区北堀江1-9-15 オーシャンズビル1F、06-6536-2236、予約不可、毎日10:00〜19:30・年中無休、カード・電子マネー・QR決済可、チャージなし、29席(カウンター5、テーブル12、ソファ12)、禁煙、2017年8月1日開店、テラスと店内入口付近は犬連れ可。店の説明: 無添加とヴィーガンにこだわるサラダ専門店、毎日各地から仕入れる野菜、自家製ドレッシングはすべて無添加・ヴィーガン(白砂糖、卵、乳製品、はちみつ、動物性のもの不使用)、ココナッツドレッシングにMCTオイル、グルテンフリーのレモンケーキ(国産レモン、ピスタチオ)、ヴィーガンのチョコチップクッキー、豆乳・オーツ・アーモンドのプラントベースラテ、ローストビーフの「ANGE」、アボカドの「IRIS」、エコな容器。2026年の口コミ(4〜8月): ソファ席、テイクアウト可、朝食プレート(サラダ、卵、ソーセージ、生ハム、パン2種、豆乳スープ)、カウンターで注文するセルフ式、ガパオライスとハーブチキン丼(雑穀米)、ミランダサラダ(サーモンとゆで卵)とココナッツレモンオイルドレッシング、28品目のプレート、犬連れ可。',
      confidence: 'medium', sources: [TB, R + 'B529350388/', R + 'B532019606/', R + 'B525789659/', R + 'B526058757/', R + 'B508405502/', R + 'B532951993/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; build-your-own salads.' },
    safety: { ...SAFETY0, positives: [
      { text: 'Own statement (Tabelog): gluten-free "Lemon Cake"; all house dressings additive-free and vegan.', source: TB },
    ] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-9-15 オーシャンズビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目9番15号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B529350388/', R + 'B532019606/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Build-your-own chopped salad with a vegan house dressing', '', 'Salads', 'ask', 'vegan', 'Shop text: all dressings vegan; choose vegetable toppings.', 'salad'),
      it('', '', 'Miranda salad (salmon, boiled egg)', '', 'Salads', 'ask', 'no', 'June 2026.', 'miranda'),
      it('', '', 'Gluten-free lemon cake', '', 'Sweets', 'gf', 'ask', 'Shop text (Tabelog).', 'lemon_cake'),
      it('', '', 'Vegan chocolate-chip cookie', '', 'Sweets', 'ask', 'vegan', 'Shop text (Tabelog).', 'cookie'),
      it('', '', 'Plant-based latte (soy, oat or almond)', '', 'Drinks', 'ask', 'vegan', 'Shop text (Tabelog).', 'latte'),
      it('', '', 'Herb-chicken rice bowl (multigrain rice)', '', 'Bowls', 'ask', 'no', 'July 2026.', 'herb_chicken'),
    ] }, {
    cuisine: '注文ごとに刻むチョップドサラダの店・無添加でヴィーガンの自家製ドレッシング(ココナッツレモンオイルなど)・グルテンフリーのレモンケーキ・ヴィーガンのチョコチップクッキー・豆乳、オーツ、アーモンドのラテ・雑穀米のハーブチキン丼・ガパオライス・朝食プレート・29席、ソファ、犬連れOKのテラス',
    neighborhood: '北堀江1-9-15 オーシャンズビル1F。四ツ橋駅・西大橋駅(4番出口)から徒歩3分',
    gf_detail: '店の説明にグルテンフリーのレモンケーキ(国産レモン、砕いたピスタチオ)。サラダは注文ごとに作るので、具材ごとに、またドレッシングに小麦が入るかも確認を。朝食プレートにはパン。',
    vegan_detail: '店の説明(食べログ)では自家製ドレッシングはすべて無添加・ヴィーガンで、白砂糖、卵、乳製品、はちみつ、動物性のものは不使用。ヴィーガンのチョコチップクッキー、豆乳・オーツ・アーモンドミルクのプラントベースラテも。サラダは具材を選べるので野菜のトッピングで。看板のボウルにはローストビーフ、サーモン、卵、ハーブチキンが入ります。',
    notes: '[カフェ・北堀江のヴィーガンドレッシングのチョップドサラダ] 四ツ橋駅から3分、2017年からある北堀江のチョップドサラダのカフェで、木と観葉植物の店内にソファ、犬連れOKのテラス。サラダは好きな具材を選んで注文ごとに刻みます。自家製ドレッシングはすべてヴィーガンで無添加、白砂糖、卵、乳製品、はちみつ不使用(店の説明)で、ココナッツレモンオイルは夏にさっぱり。看板のボウルにはローストビーフ、サーモン、卵、ハーブチキンが入るので、ヴィーガンの人は自分で組み立てて。甘いものはピスタチオのグルテンフリーのレモンケーキとヴィーガンのチョコチップクッキー、ラテは豆乳、オーツ、アーモンドから。朝食プレート、ハーブチキン丼、ガパオライスも。注文はカウンターで、サラダは持ち帰りも可。',
  });
}

// ================================================================ メッゼ堀江 トルコカフェ&レストラン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27142332/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00'], ['17:00', '22:30']);
  put({
    id: 'osaka_mezze_horie', name: 'メッゼ堀江 トルコカフェ&レストラン (Mezze Horie Turkish Cafe & Restaurant)', category: 'OMNI',
    lat: 34.674333, lng: 135.495523, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Kebabs, rice, salads and hummus may suit, but no source covers marinades, flour or cross-contact; Turkish bread, baklava and falafel coatings may contain wheat.',
    vegan_status: 'limited', vegan_label: 'Limited vegan',
    vegan_detail: 'The shop says its menu is made with halal ingredients and caters to vegetarian diners (Tabelog). Reviewed in August–October 2026: falafel (chickpea croquettes) and hummus in the appetizer platter. The lunch sets come with butter rice, and the bean soup\'s stock is not described — ask.',
    hours_raw: 'Lunch 11:30–15:00 and dinner 17:00–22:30 (L.O. 22:00); closed Wednesday (Tabelog). Reservations taken; courses from ¥4,500. Smoking only on the terrace. Turkish beer and wine served. Cards, e-money and QR accepted.',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: true, open_late: false },
    neighborhood: 'Kitahorie 1-9-14, Pan1914 Bldg 2F — about 5 min from Yotsubashi Stn',
    cuisine: 'Turkish and Mediterranean cooking with halal ingredients · chicken-kebab lunch set ¥1,200 (salad, tomato-bean soup, butter rice) · course ¥4,500 (mezze platter with hummus, soup, Turkish bread, chicken/lamb kebabs, baklava, Turkish ice cream and pudding, tea) · falafel · charcoal-grilled kebabs · Turkish beer and wine · 24 seats incl. terrace',
    website: 'https://mezzehorie.com/', gmaps: gm('メッゼ堀江 トルコカフェ&レストラン'), menu_url: null,
    notes: "[Turkish · halal-ingredient Turkish café upstairs in Kitahorie] A clean, stylish second-floor Turkish café and restaurant in Kitahorie, opened April 2024. The cooking is by a chef from Turkey, who is friendly and fluent in Japanese, per reviewers. The shop cooks with halal ingredients and says it caters to vegetarians, and reviewers keep praising the chickpea falafel and the hummus in the mezze platter. Lunch is good value: a ¥1,200 chicken-kebab set with salad, a creamy tomato-and-bean soup and butter rice. The ¥4,500 course runs through mezze, soup, soft Turkish bread, chicken and lamb kebabs, and baklava with Turkish ice cream. Turkish beer and red wine are poured too. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: ['owner-chef'], origin: 'Opened 26 April 2024 (Tabelog)', background: 'Shop text: Mediterranean cuisine "crafted by a chef from Turkey"; halal ingredients "in accordance with Islamic law" (Tabelog). Reviewers note the owner-chef speaks fluent Japanese (August 2026) and is friendly (October 2026).', philosophy: 'Plenty of spices and vegetables, "gentle on the body" (shop text).', specialty: 'Mezze, falafel, charcoal-grilled kebabs, Turkish desserts.',
      anecdotes: [
        { text: '"The soup had a creamy texture from the beans, balanced with the acidity of the tomatoes and a refreshing hint of herbs." — August 2026, chicken kebab lunch set ¥1,200.', source: R + 'B533748085/' },
        { text: '"I also loved the chickpea croquettes." — October 2026.', source: R + 'B536636375/' },
      ],
      japanese_sources_summary: '食べログ: メッゼ堀江 トルコカフェ&レストラン、大阪市西区北堀江1-9-14 Pan1914ビル2F、06-6543-1233、予約可、ランチ11:30〜15:00・ディナー17:00〜22:30(L.O.22:00)、水曜定休、カード・電子マネー・QR決済可、24席(4人テーブル3、カウンター6、2人テラス3)、テラスのみ喫煙可、2024年4月26日開店、公式 mezzehorie.com。店の説明: トルコ出身のシェフの地中海料理、イスラム法に沿ったハラール食材、ハラールとベジタリアンの人にも、スパイスと野菜たっぷり、炭火焼きケバブ、トルコのデザート。2026年の口コミ(8〜10月): チキンケバブのランチセット1,200円(サラダ、豆とトマトのスープ、バターライス)、日本語が上手なオーナーシェフ、ご飯のおかわり可、コース4,500円(前菜の盛り合わせにフムス、スープ、トルコパン、チキン・ラム・ハンバーグのケバブ、トルコアイス・バクラヴァ・トルコプリン、トルコチャイ)、ひよこ豆のコロッケ、魚介のマリネ、外国人客が多い、気さくなシェフ、トルコビールと赤ワイン、トルコで食べたのと同じトマトスープ。',
      confidence: 'medium', sources: [TB, R + 'B533748085/', R + 'B533802250/', R + 'B534275863/', R + 'B536636375/', R + 'B537454852/', R + 'B537533004/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The chef speaks fluent Japanese; mostly international clientele (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-9-14 Pan1914ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目9番14号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533748085/', R + 'B534275863/', R + 'B536636375/'],
    price_note: 'Prices from August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken kebab lunch set (salad, soup, butter rice)', '¥1,200', 'Lunch', 'ask', 'no', 'August 2026.', 'kebab_lunch'),
      it('', '', 'Course (mezze, soup, Turkish bread, kebabs, desserts, tea)', '¥4,500', 'Courses', 'no', 'no', 'August 2026.', 'course'),
      it('', '', 'Falafel (chickpea croquettes)', '', 'Mezze', 'ask', 'ask', 'October 2026.', 'falafel'),
      it('', '', 'Hummus (in the assorted appetizers)', '', 'Mezze', 'ask', 'ask', 'August 2026.', 'hummus'),
      it('', '', 'Baklava', '', 'Desserts', 'no', 'ask', 'August 2026.', 'baklava'),
    ] }, {
    cuisine: 'ハラール食材のトルコ・地中海料理・チキンケバブのランチセット1,200円(サラダ、トマトと豆のスープ、バターライス)・コース4,500円(フムス入りの前菜盛り合わせ、スープ、トルコパン、チキンとラムのケバブ、バクラヴァ、トルコアイスとプリン、チャイ)・ファラフェル・炭火焼きケバブ・トルコビールとワイン・テラスを含む24席',
    neighborhood: '北堀江1-9-14 Pan1914ビル2F。四ツ橋駅から徒歩約5分',
    gf_detail: '要確認。ケバブ、ご飯、サラダ、フムスは合いそうですが、下味や粉、調理器具の共用の情報はありません。トルコパン、バクラヴァ、ファラフェルの衣は小麦を含むことがあります。',
    vegan_detail: '店によるとハラール食材を使い、ベジタリアンの人にも対応(食べログ)。2026年8〜10月の口コミでは、ファラフェル(ひよこ豆のコロッケ)と前菜盛り合わせのフムス。ランチセットはバターライス付きで、豆のスープのだしは不明なので確認を。',
    notes: '[トルコ料理・北堀江の2階のハラール食材のトルコカフェ] 北堀江のビルの2階にある清潔でおしゃれなトルコカフェ&レストランで、2024年4月開店。料理はトルコ出身のシェフで、口コミによると気さくで日本語が上手。ハラール食材を使い、ベジタリアンにも対応するとしていて、ひよこ豆のファラフェルと前菜盛り合わせのフムスが口コミで好評。ランチはお得で、チキンケバブのセットが1,200円、サラダ、クリーミーなトマトと豆のスープ、バターライス付き。4,500円のコースは前菜、スープ、ふわふわのトルコパン、チキンとラムのケバブ、締めにバクラヴァとトルコアイス。トルコのビールや赤ワインも。水曜定休。',
  });
}

save();
