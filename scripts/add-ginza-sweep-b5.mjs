// Ginza Station half-mile sweep (805 m), batch 5 — vegan / GF. Researched 2026-10-24.
//   + そらのいろ 銀座本店 (ramen; vegan and gluten-free ramen per brand + FMGF)
//   + CHAYA ナチュラル＆ワイルドテーブル 日比谷 (macrobiotic; vegan options)
//   ~ tokyo3_revive_kitchen_three_hibiy REVIVE KITCHEN THREE HIBIYA (placeholder researched; all-VG menu)
// Sources: soranoiro-vege.com, chayam.co.jp, THREE's monthly REVIVE KITCHEN menu PDFs (Sept 2026),
// visit-chiyoda.tokyo, FindMeGlutenFree, Tabelog /en/. No GF tier above 'options' is written here.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ そらのいろ 銀座本店
{
  const OWN = 'https://soranoiro-vege.com/store-menu/soranoiro-ginza/'; const TOP = 'https://soranoiro-vege.com/';
  const FM = 'https://www.findmeglutenfree.com/biz/soranoiro/6098068526465024';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13314476/'; const R = TB + 'dtlrvwlst/';
  const o = day(['11:00', '14:30'], ['17:00', '22:00']);
  put({
    id: 'tokyo_soranoiro_ginza', name: 'そらのいろ 銀座本店 (Soranoiro Ginza)', category: 'OMNI',
    lat: 35.671856, lng: 139.769783,
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: "The Soranoiro company offers a gluten-free ramen for people with wheat allergies (小麦アレルギーの方向け「グルテンフリーラーメン」). Celiac diners at this Ginza shop, writing on FindMeGlutenFree in October 2026, report a separate gluten-free menu with items marked. They watched staff put on fresh gloves and cook in equipment that had not held gluten, and report no symptoms. One review mentions a dedicated gluten-free fryer. The regular chuka soba is made with domestic wheat noodles from the company's own noodle workshop, in the same kitchen. Tell the staff you are celiac when you order, as reviewers advise.",
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: "The company offers a vegan ramen (ベジタリアン向け「ヴィーガンラーメン」), and an October 2026 celiac reviewer at Ginza ate a 'vegan gluten free ramen'. The house veggie soba (2026: a mushroom veggie soba) is a vegetable-led bowl but is not stated to be vegan. The standard chuka soba is Amakusa Daiō chicken with niboshi and bonito. Ask for the vegan ramen by name.",
    hours_raw: "11:00–14:30 (L.O. 14:00) & 17:00–22:00 (L.O. 21:30); closed Tuesdays — per the shop's own page. Tabelog's listing differs (weekdays 11:00–15:00 & 17:00–21:30, weekends 11:00–21:30, no closed day), so check before a Tuesday visit. Cards, IC and QR payments accepted.",
    hours: { 0: o, 2: o, 3: o, 4: o, 5: o, 6: o }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 2-chōme (Yamazakiya Bldg) — 3 min from Higashi-Ginza exit A7',
    cuisine: 'Chuka soba · veggie soba · vegan ramen and gluten-free ramen on request', cuisine_type: 'ramen',
    website: OWN, gmaps: gm('そらのいろ 銀座本店 東京都中央区銀座2-12-6'), menu_url: OWN,
    notes: "[Ramen · vegan & GF options] The flagship of Soranoiro, the ramen company that opened in Kōjimachi just after the 2011 earthquake. It became known for 'veggie soba' made with vegetables in the noodles, soup and toppings, and for its vegan ramen and gluten-free ramen. After 14 years the head shop moved to Ginza. The chuka soba here is built on the frames of Amakusa Daiō, one of Japan's largest native chickens, with niboshi, bonito and aromatic vegetables. Its noodles are made of domestic wheat at the company's Kōjimachi workshop, and the chashu is Seto mochi-buta pork from Fukuyama in three cuts. Celiac and vegan travellers on FindMeGlutenFree report a separate gluten-free menu and a vegan gluten-free ramen at this shop.",
    chef_bio: {
      chef_name: null, roles: ['ramen company (SORANOIRO Co., Ltd.) — head shop'],
      origin: 'Founded in Kōjimachi in 2011; head shop moved to Ginza in its 14th year',
      background: "Soranoiro opened in Kōjimachi just after the Great East Japan Earthquake and grew, through the pandemic, into several shops (Ginza, Kōjimachi Honpo, Nishi-Kasai, Soranoiro NIPPON, and the iekei shop 革新家TOKYO). In its 14th year it moved its head shop to Ginza 'to make a fresh start'.",
      philosophy: '「一杯のらーめんと心地よい時間をお届けできるよう」.',
      specialty: 'Chuka soba (Amakusa Daiō chicken, niboshi, bonito); veggie soba; vegan and gluten-free ramen.',
      anecdotes: [
        { text: '「麹町で「ソラノイロ」をオープンしたのは、14年前、東日本大震災の直後でした」 — the first shop opened in Kōjimachi just after the 2011 earthquake.', source: OWN },
        { text: 'The Ginza noodles are made at the Kōjimachi Honpo workshop from domestic wheat; the chashu is Seto mochi-buta from Seto Farm in Fukuyama, Hiroshima, in belly, shoulder-loin and loin cuts.', source: OWN },
        { text: "October 2026, a celiac diner: 'Saw them make all the food and put on separate gloves and cook everything in things that didn't have gluten ingredients.'", source: FM },
        { text: 'A 2026 diner notes the predecessor Kōjimachi shop held a Bib Gourmand for three straight years from 2015.', source: R + 'B537456635/' },
      ],
      japanese_sources_summary: '公式(soranoiro-vege.com): 「麺スープトッピング全てに野菜を使用したベジソバ」「ベジタリアン向けヴィーガンラーメン」「小麦アレルギーの方向けグルテンフリーラーメン」。銀座本店: 14年前に麹町でオープン、本店を銀座へ移転。中華そばは天草大王のガラ・煮干し・鰹・香味野菜、麹町本舗の自家製麺(国産小麦)、瀬戸のもち豚チャーシュー。銀座2-12-6 山崎屋ビル、11:00〜14:30・17:00〜22:00、火曜定休、TEL 03-6264-7113。© SORANOIRO Co.,Ltd. FMGF(2026年10月): 銀座店でグルテンフリーメニュー別表、手袋交換、ヴィーガン・グルテンフリーのラーメン。',
      confidence: 'high', sources: [OWN, TOP, FM, TB, R + 'B536991088/', R + 'B537456635/'],
    },
    cultural_comfort: { level: 'english', note: 'FindMeGlutenFree reviewers (mostly overseas) report a separate gluten-free menu and helpful staff. 17 seats including a private room (¥500).' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [
        { text: 'The regular noodles are wheat (国産小麦) from the company workshop, cooked in the same kitchen as the gluten-free ramen.', source: OWN },
        { text: "Reviewers advise telling staff you are celiac; one saw separate gloves and gluten-free equipment used.", source: FM },
      ],
      soy_sauce_wheat: [{ text: "The chuka soba's broth has a soy-sauce sharpness (2026 review).", source: R + 'B536991088/' }],
      vegan_cross_contact: [{ text: 'The standard chuka soba is Amakusa Daiō chicken frames with niboshi and bonito.', source: OWN }],
      staff_allergy_handling: [{ text: "Celiac reviewers (October 2026) report a separate gluten-free menu and 'knowledgeable staff'; FMGF community notes one report of a dedicated GF fryer.", source: FM }],
      positives: [
        { text: '「小麦アレルギーの方向け「グルテンフリーラーメン」」 and 「ベジタリアン向け「ヴィーガンラーメン」」 are offered by the company.', source: TOP },
        { text: "October 2026 celiac review at Ginza: 'great vegan gluten free ramen… No symptoms.'", source: FM },
      ],
      confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['chicken', 'niboshi', 'gyokai', 'vegetable'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: true, notes: "House noodles from the company's Kōjimachi workshop, domestic wheat; glossy straight noodles with a snap (2026). A gluten-free noodle is available." },
      regional_style: ['Tokyo shoyu'], sub_genre: ['ramen'],
      signature_bowl: '中華そば ¥1,100 (October 2026); 特製 adds three cuts of chashu, house water-gyoza and seasoned egg. Ask for the vegan or gluten-free ramen by name.',
      chashu: 'Seto mochi-buta pork from Fukuyama, in belly, shoulder-loin and loin cuts on the special bowl.',
      notable_toppings: ['three cuts of Seto mochi-buta chashu', 'house water-gyoza', 'seasoned egg'],
      gf: { status: 'rare-options', note: 'A gluten-free ramen exists; the regular noodles are wheat.' },
      vegan: { status: 'available', note: 'A vegan ramen is offered; the standard bowls are chicken and fish.' },
      pantheon: "A modern Tokyo shoyu bowl from the company known for veggie soba and its vegan and gluten-free ramen. The chuka soba layers Amakusa Daiō chicken with niboshi and bonito, and the house noodle carries the taste of its domestic wheat.",
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537456635/', 'A rich depth; another diner found it gentle (' + R + 'B536991088/).'],
        oiliness: [null, 'Not described in any source read; scored low-mid.'],
        clarity: [null, 'Not described in any source read; scored at the midpoint.'],
        tare_strength: [R + 'B536991088/', 'Gentle, with a sharpness from the soy sauce and pepper.'],
        noodle_firmness: [R + 'B537456635/', 'Glossy straight noodles with a delightful snap.'],
        aroma_punch: [R + 'B536991088/', 'The aroma of niboshi is delightful.'],
      },
      confidence: 'medium', sources: [OWN, R + 'B536991088/', R + 'B537456635/'], last_checked: TODAY,
    },
    mom_and_pop: false,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座二丁目12番6号 (go) 6m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [OWN, TOP, FM, R + 'B536991088/', R + 'B535833531/'],
    price_note: "The bowls come from the shop's own Ginza page, which gives no prices; the chuka soba price is from an October 2026 review. The vegan and gluten-free ramen are on the company page and in October 2026 FMGF reviews, not on the Ginza page.", last_checked: TODAY, items: [
      it('中華そば', 'chuuka soba', 'Chuka soba (Amakusa Daiō chicken, niboshi, bonito)', '¥1,100', 'Ramen', 'no', 'no', 'October 2026 review.', 'chuka_soba'),
      it('特製中華そば', 'tokusei chuuka soba', 'Special chuka soba (three chashu cuts, water-gyoza, egg)', '', 'Ramen', 'no', 'no', "Shop's Ginza page.", 'tokusei_chuka_soba'),
      it('', '', 'Mushroom veggie soba', '', 'Ramen', 'no', 'ask', 'Ordered by Tabelog reviewers, September 2026; not stated vegan.', 'veggie_soba_mushroom'),
      it('ヴィーガンラーメン', 'vegan raamen', 'Vegan ramen', '', 'Ramen', 'ask', 'vegan', "Offered by the company; at Ginza an October 2026 celiac reviewer had a 'vegan gluten free ramen'. Ask for the gluten-free version.", 'vegan_ramen'),
      it('グルテンフリーラーメン', 'guruten furii raamen', 'Gluten-free ramen (for wheat allergy)', '', 'Ramen', 'gf', 'ask', 'Company page; Ginza FMGF reviewers report a separate GF menu and fresh gloves. Shared kitchen with wheat noodles.', 'gf_ramen'),
      it('', '', 'Gyoza (gluten-free version reported)', '', 'Sides', 'ask', '', 'FMGF reviewers list dumplings among GF items at Ginza — confirm.', 'gyoza'),
      it('', '', 'Kara-age fried chicken (gluten-free version reported)', '', 'Sides', 'ask', 'no', 'FMGF reviewers list fried chicken among GF items — confirm.', 'karaage'),
    ] }, {
    cuisine: '中華そば・ベジソバ・要望でヴィーガンラーメンとグルテンフリーラーメン',
    neighborhood: '銀座二丁目(山崎屋ビル)。東銀座駅A7出口から徒歩3分',
    gf_detail: 'ソラノイロは「小麦アレルギーの方向け『グルテンフリーラーメン』」を提供しています。この銀座店では2026年10月、セリアック病の利用者がFindMeGlutenFreeに、グルテンフリーのメニューが別にあり対象品に表示があったと報告。スタッフが手袋を替え、グルテンを使っていない器具で調理する様子も見ており、症状はなかったとしています。専用のグルテンフリー用フライヤーがあるという報告も1件あります。通常の中華そばは自社製麺所の国産小麦の麺で、同じ厨房で作られます。レビューの助言どおり、注文時にセリアック病であることを伝えてください。',
    vegan_detail: 'ソラノイロは「ベジタリアン向け『ヴィーガンラーメン』」を提供しており、2026年10月には銀座店でセリアック病の利用者が「ヴィーガンでグルテンフリーのラーメン」を食べています。看板のベジソバ(2026年はきのこのベジソバ)は野菜が主役の一杯ですが、ヴィーガンとは書かれていません。通常の中華そばは天草大王の鶏ガラに煮干し・鰹です。ヴィーガンラーメンを名前で頼んでください。',
    notes: '[ラーメン・ヴィーガンとグルテンフリーの選択肢あり] 2011年の震災直後に麹町で開業したラーメン会社「ソラノイロ」の本店です。麺・スープ・トッピングすべてに野菜を使う「ベジソバ」や、ヴィーガンラーメン・グルテンフリーラーメンで知られます。14年目に本店を銀座へ移しました。中華そばは国内最大級の地鶏「天草大王」のガラに煮干し・鰹・香味野菜を合わせたスープ。麺は麹町本舗で作る国産小麦の自家製麺、チャーシューは広島県福山市の「瀬戸のもち豚」の3部位です。FindMeGlutenFreeのセリアック病・ヴィーガンの旅行者によれば、この店にはグルテンフリーのメニューが別にあり、ヴィーガンでグルテンフリーのラーメンもあります。',
  });
}

// ================================================================ CHAYA ナチュラル＆ワイルドテーブル 日比谷
{
  const OWN = 'https://chayam.co.jp/restaurant/hibiya/'; const VC = 'https://visit-chiyoda.tokyo/app/spot/detail/925';
  const a = day(['11:00', '22:00']);
  put({
    id: 'tokyo_chaya_natural_wild_table_hibiya', name: 'CHAYA ナチュラル＆ワイルドテーブル 日比谷 (CHAYA Natural & Wild Table Hibiya)', category: 'OMNI',
    lat: 35.673167, lng: 139.760052,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: "No gluten-free information was found: neither the restaurant's own page nor the city tourism page mentions gluten-free dishes or allergen handling. Its macrobiotic cooking avoids meat, eggs, dairy and white sugar, but that says nothing about wheat, soy sauce or barley. Ask about each dish.",
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: "The restaurant says its macrobiotic dishes are made without meat, eggs, dairy, white sugar or chemical seasonings (肉・卵・乳製品・白砂糖・化学調味料を使わずにつくった). Fish is not mentioned either way. The city tourism page says the menu has plenty for vegetarians and vegans and names a vegan soy-meat Buddha bowl. Ask which dishes are vegan, and check for fish or bonito dashi.",
    hours_raw: 'Daily 11:00–22:00 (last order 21:00); closed when Hibiya Chanter is closed. Reservations by phone (weekdays from 14:00, weekends and holidays from 17:00) or online. The shop renewed on 1 September 2026.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō 1-chōme, Hibiya Chanter B2F — 2 min from Hibiya exit A5, 5 min from JR Yūrakuchō',
    cuisine: 'Macrobiotic restaurant (CHAYA) · vegan Buddha bowls, veggie burgers and curries', cuisine_type: 'other',
    website: OWN, gmaps: gm('CHAYA ナチュラル&ワイルドテーブル 日比谷シャンテ'), menu_url: OWN,
    notes: "[Vegan options · macrobiotic] A 43-seat macrobiotic restaurant in the basement of Hibiya Chanter, run by CHAYA Macrobi Foods. Its theme is 'Natural' (kind to body and planet) and 'Wild' (ingredients with the force of nature), cooked with spices and methods from around the world. The kitchen cooks without meat, eggs, dairy, white sugar or chemical seasonings. The city's tourism page singles out a vegan Buddha bowl of grilled soy meat, the daily deli and seasonal desserts. A plant-based drink can be added at lunch. The shop reopened after a renewal on 1 September 2026, so the menu may have changed.",
    chef_bio: {
      chef_name: null, roles: ['restaurant of 株式会社CHAYAマクロビフーズ (CHAYA Macrobi Foods)'],
      origin: 'Hibiya Chanter B2F',
      background: "One of CHAYA Macrobi Foods' macrobiotic restaurants; the company also sells macrobiotic deli, sweets and packaged foods and delivers its dishes.",
      philosophy: "'Natural' (体や環境に優しい) and 'Wild' (野生・自然の力を宿した食材).",
      specialty: 'Macrobiotic cooking with global spices; vegan soy-meat Buddha bowl; daily deli; seasonal desserts.',
      anecdotes: [
        { text: '「肉・卵・乳製品・白砂糖・化学調味料を使わずにつくった、カラダと心にやさしいヘルシーなお料理」.', source: OWN },
        { text: 'The city tourism page: a vegan Buddha bowl of grilled soy meat in a sweet-savoury glaze with the daily deli and vegetables, ¥1,300; a plant-based drink for ¥250 more at lunch.', source: VC },
        { text: "A renewal notice for the Hibiya shop, dated August 2026, announced a 1 September reopening.", source: OWN },
      ],
      japanese_sources_summary: '公式(chayam.co.jp): CHAYA ナチュラル＆ワイルドテーブル 日比谷、千代田区有楽町1-2-2 日比谷シャンテB2F、11:00〜22:00(21:00LO)、日比谷シャンテ休館日に準ずる、TEL 03-3500-5514、43席、運営 株式会社CHAYAマクロビフーズ。「肉・卵・乳製品・白砂糖・化学調味料を使わずにつくった」。9月1日リニューアル。visit-chiyoda: ベジタリアンやヴィーガンの方も楽しめるメニューが充実、大豆ミートの炙り焼きのヴィーガンブッダボウル税込1300円。',
      confidence: 'medium', sources: [OWN, VC],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'A basement dining room in the Hibiya Chanter shopping building; book online or by phone.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'The restaurant states its cooking avoids meat, eggs, dairy, white sugar and chemical seasonings; fish and dashi are not addressed.', source: OWN }],
      staff_allergy_handling: [],
      positives: [{ text: "The city page: 'ベジタリアンやヴィーガンの方も楽しめるメニューも充実'.", source: VC }],
      confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false,
    pin_source: `OSM node 8395981617 "Chaya Natural & Wild Table"; cross-checked: GSI 東京都千代田区有楽町一丁目2番 (lot) ~30m; no Tabelog id; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [VC, OWN],
    price_note: "The shop's menu tabs (lunch, dinner, dessert, drink) did not render text we could read, so only the dish named by the city tourism page is listed, at its pre-renewal price. The shop reopened on 1 September 2026.", last_checked: TODAY, items: [
      it('大豆ミートの炙り焼きのヴィーガンブッダボウル', 'daizu miito no aburiyaki no vegan budda bouru', 'Vegan Buddha bowl with grilled soy meat, daily deli and vegetables', '¥1,300', 'Lunch', 'ask', 'vegan', 'City tourism page (undated, before the September 2026 renewal). Glaze is a sweet-savoury tare — ask about soy sauce.', 'buddha_bowl'),
      it('', '', 'Plant-based drink (with lunch)', '¥250', 'Drinks', '', 'vegan', 'City tourism page.', 'plant_drink'),
    ] }, {
    cuisine: 'マクロビオティックのレストラン(CHAYA)・ヴィーガンのブッダボウル、ベジバーガー、カレー',
    neighborhood: '有楽町一丁目、日比谷シャンテB2F。日比谷駅A5出口から徒歩2分、JR有楽町駅から徒歩5分',
    gf_detail: 'グルテンフリーの情報は見つかりませんでした。店の公式ページにも千代田区の観光ページにも、グルテンフリーの料理やアレルギー対応の記載はありません。マクロビの料理は肉・卵・乳製品・白砂糖を使いませんが、小麦・醤油・大麦については何も示していません。料理ごとに確認してください。',
    vegan_detail: '店は、マクロビの料理を「肉・卵・乳製品・白砂糖・化学調味料を使わずにつくった」としています。魚については使う・使わないどちらの記載もありません。千代田区の観光ページによれば、ベジタリアンやヴィーガンの方も楽しめるメニューが充実しており、大豆ミートのヴィーガンブッダボウルがあります。どの料理がヴィーガンか確認し、魚やかつお出汁の有無もたずねてください。',
    notes: '[ヴィーガンの選択肢あり・マクロビ] 日比谷シャンテの地下にある43席のマクロビオティック・レストランで、運営は株式会社CHAYAマクロビフーズ。テーマは「Natural(体や環境に優しい)」と「Wild(自然の力を宿した食材)」で、世界のスパイスや調理法を取り入れています。厨房では肉・卵・乳製品・白砂糖・化学調味料を使いません。千代田区の観光ページでは、大豆ミートの炙り焼きのヴィーガンブッダボウル、日替わりデリ、季節のデザートが紹介されています。ランチには植物性ドリンクを追加できます。2026年9月1日にリニューアルオープンしたため、メニューが変わっている可能性があります。',
  });
}

// ================================================================ REVIVE KITCHEN THREE HIBIYA (placeholder researched)
{
  const DIN = 'https://www.threecosmetics.com/cms/img/usr/revive-kitchen/202609/dinner.pdf';
  const LUN = 'https://www.threecosmetics.com/cms/img/usr/revive-kitchen/202609/lunch.pdf';
  const VC = 'https://visit-chiyoda.tokyo/app/spot/detail/922';
  const SHOP = 'https://www.threecosmetics.com/shop/revive-kitchen/hibiya/';
  const FM = 'https://www.findmeglutenfree.com/jp/chiyoda-city';
  const a = day(['11:00', '22:00']);
  const V = 'vegan';
  put({
    id: 'tokyo3_revive_kitchen_three_hibiy', name: 'REVIVE KITCHEN THREE HIBIYA', category: 'BOTH',
    lat: 35.674088, lng: 139.759552, loc_approx: 'block',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: "Most dishes on the September 2026 menu are marked GF by the restaurant, and allergens are flagged per dish. Not GF: the vegan noodle (made with Hashizume Seimen noodles), the carrot cake, the antipasto misto, the vegan ham-katsu and the baguette, all flagged 小麦 (wheat). The dinner menu also tags the vegan noodle 'VG/GF' while flagging it 小麦; treat it as wheat. Wheat-breaded ham-katsu and GF-tagged fried potatoes and tofu fritto come out of the same kitchen, and the fryer arrangement is not stated. The soba-gaki is buckwheat. Order only GF-tagged dishes and confirm.",
    vegan_status: 'full', vegan_label: 'Fully vegan',
    vegan_detail: "Every dish on the September 2026 lunch and dinner menus is marked VG (ヴィーガン対応), under a 'Modern Shōjin' concept based on plant-derived ingredients. Latte milk can be changed to soy, almond or oat milk.",
    hours_raw: '11:00–22:00 (food last order 20:00, drinks 21:00); 14:00–17:00 café menu only for now. Irregular closures — check its social media.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō 1-chōme, Tokyo Midtown Hibiya 2F — connected to Hibiya Station',
    cuisine: '"Modern Shōjin" plant-based restaurant by THREE · vegan, with GF-tagged dishes', cuisine_type: 'shojin',
    website: SHOP, gmaps: gm('REVIVE KITCHEN THREE HIBIYA 東京ミッドタウン日比谷'), menu_url: DIN,
    notes: "[Vegan · GF options] The plant-based restaurant of the Japanese cosmetics brand THREE, on the 2nd floor of Tokyo Midtown Hibiya. Its concept, 'Modern Shōjin', serves the bounty of Japan's land through cooking methods from around the world, guided by eating local and by 身土不二, the idea that body and land are one. The signature is a seasonal 'veggie meal stand': kombucha of the day, nine small dishes, black-rice multigrain rice and a clear soup. On the autumn 2026 menu the nine included white-sesame tofu with shōjin dashi, beet agrodolce and roast kabocha with mushroom cream. There are also soup curry, a fermented-food bibimbap, soy-meat taco rice, a kombu-mushroom-vegetable dashi vegan ramen, and vegan desserts and parfaits. The menu changes monthly and marks every dish VG and most GF.",
    chef_bio: {
      chef_name: null, roles: ['restaurant of the cosmetics brand THREE'],
      origin: 'Tokyo Midtown Hibiya 2F',
      background: "THREE's restaurant concept ('EAT BEAUTY, LIVE BEAUTY'): a plant-based diet as the base, Japanese seasonal vegetables, cooking 'not bound by nationality'.",
      philosophy: "「地産地消」「身土不二（からだと土地は一つにつながっている）」という考え方を、テーブルの上で美味しく健やかに表現します.",
      specialty: 'Seasonal veggie meal stand (nine dishes); vegan soup curry and bibimbap; vegan ramen in kombu-mushroom-vegetable dashi; vegan parfaits.',
      anecdotes: [
        { text: 'The vegan noodle: a soy-sauce soup on kombu, mushroom and vegetable dashi, with noodles sent direct from Hashizume Seimen (橋爪製麺).', source: DIN },
        { text: "The soup curry is 'animal-product free, light to eat', its depth coming from roasted spices, with pickles and cardamom cream.", source: DIN },
        { text: "The city tourism page: vegan and gluten-free dishes are marked on the menu; latte milk can be swapped for soy, almond or oat.", source: VC },
      ],
      japanese_sources_summary: '公式メニュー(2026年9月 ランチ/ディナーPDF): “MODERN SHOJIN”、全品VG表示、GF表示多数、アレルゲン(小麦・胡桃・蕎麦)を品ごとに表示。秋野菜のベジミールスタンド4,290円(VG/GF)、秋野菜スープカレー2,420円、腸活ビビンパ2,420円、ベジミートタコライス2,200円、ヴィーガンヌードル2,200円(小麦表示)、ケールとアボカドのメランジェサラダ2,200円(ランチ)ほか。visit-chiyoda: 11:00〜22:00(フードLO20:00/ドリンクLO21:00)、14:00〜17:00はカフェメニューのみ、不定休、有楽町1-1-2 東京ミッドタウン日比谷2F、TEL 03-6831-4620。',
      confidence: 'high', sources: [DIN, LUN, VC, SHOP, FM],
    },
    cultural_comfort: { level: 'english', note: 'Menus print English section headings and VG / GF / allergen marks on every dish. Inside Tokyo Midtown Hibiya, directly connected to Hibiya Station.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [
        { text: 'Wheat-flagged dishes (vegan noodle, carrot cake, antipasto misto, vegan ham-katsu, baguette) are made in the same kitchen as the GF dishes; the ham-katsu is breaded and fried, as are the GF-tagged potato fries and tofu fritto — fryer arrangement not stated.', source: DIN },
        { text: "The dinner menu tags the vegan noodle 'VG/GF' but flags it 小麦; the lunch menu tags it VG only with 小麦. Treat it as wheat.", source: LUN },
      ],
      soy_sauce_wheat: [{ text: 'The vegan noodle soup is soy-sauce seasoned (醤油味のスープ).', source: DIN }],
      vegan_cross_contact: [],
      staff_allergy_handling: [{ text: 'Every dish on the menu carries VG / GF marks and an allergen flag (小麦, 胡桃, 蕎麦) where relevant.', source: DIN }],
      positives: [
        { text: 'Most dishes on the September 2026 menu are tagged GF by the restaurant, including the veggie meal stand, soup curry, bibimbap and taco rice.', source: DIN },
        { text: 'Every dish is tagged VG (ヴィーガン対応).', source: LUN },
      ],
      confidence: 'high', last_checked: TODAY,
    },
    mom_and_pop: false,
    pin_source: `GSI 東京都千代田区有楽町一丁目1番 (lot — the Tokyo Midtown Hibiya block) from the address on visit-chiyoda.tokyo; no Tabelog id or OSM node matched; single source, block-level; ${TODAY}`,
  }, { verified: 'authoritative', confidence: 'high', sources: [DIN, LUN],
    price_note: "From the restaurant's own September 2026 lunch and dinner menus, with prices and its own VG / GF / allergen marks. The menu changes monthly, and THREE posts a new PDF each season.", last_checked: TODAY, items: [
      it('秋野菜のベジミールスタンド', 'aki yasai no bejimiiru sutando', 'Autumn veggie meal stand (kombucha, nine small dishes, black-rice multigrain rice, clear soup)', '¥4,290', 'Set', 'gf', V, 'VG/GF; takeaway possible. Dessert set +¥880.', 'veggie_meal_stand'),
      it('秋野菜スープカレー カルダモンクリーム添え', 'aki yasai suupu karee', 'Autumn vegetable soup curry with cardamom cream', '¥2,420', 'Rice', 'gf', V, 'VG/GF.', 'soup_curry'),
      it('腸活ビビンパ', 'choukatsu bibinpa', 'Fermented-food bibimbap', '¥2,420', 'Rice', 'gf', V, 'VG/GF; takeaway possible.', 'bibimbap'),
      it('ベジミートタコライス', 'bejimiito tako raisu', 'Soy-meat taco rice with papad chips', '¥2,200', 'Rice', 'gf', V, 'VG/GF; takeaway possible.', 'taco_rice'),
      it('ヴィーガンヌードル', 'vegan nuudoru', 'Vegan noodle (kombu-mushroom-vegetable dashi, soy-sauce soup; Hashizume Seimen noodles)', '¥2,200', 'Noodles', 'no', V, "Flagged 小麦 (wheat). The dinner menu also prints 'VG/GF' on it — a contradiction; treat as wheat.", 'vegan_noodle'),
      it('ケールとアボカドのメランジェサラダ', 'keeru to abokado no meranje sarada', 'Kale and avocado mélange salad plate (lunch, with soup)', '¥2,200', 'Lunch', 'gf', V, 'VG/GF; lunch menu.', 'kale_salad'),
      it('季節のフルーツと豆乳ブランマンジェのカプレーゼ仕立て', 'kisetsu no furuutsu to tounyuu buranmanje', 'Seasonal fruit and soy-milk blancmange "caprese"', '¥1,650', 'A la carte', 'gf', V, 'VG/GF.', 'blancmange_caprese'),
      it('東京野菜のエチュベ トマトソースと', 'toukyou yasai no echube', 'Étuvée of Tokyo vegetables with tomato sauce', '¥1,980', 'A la carte', 'gf', V, 'VG/GF.', 'etuvee'),
      it('そばがき 茸クリームソース', 'sobagaki', 'Soba-gaki with mushroom cream sauce', '¥1,430', 'A la carte', 'gf', V, 'VG/GF; buckwheat (蕎麦) allergen.', 'sobagaki'),
      it('アンティパストミスト', 'antipasuto misuto', 'Antipasto misto', '¥2,750', 'A la carte', 'no', V, 'VG; flagged 小麦.', 'antipasto'),
      it('炙り豆乳チーズ', 'aburi tounyuu chiizu', 'Seared soy-milk cheese', '¥660', 'A la carte', 'gf', V, 'VG/GF.', 'soy_cheese'),
      it('ドライフルーツ＆素焼きナッツの盛り合わせ', 'dorai furuutsu to suyaki nattsu', 'Dried fruit and roasted nuts', '¥660', 'A la carte', 'gf', V, 'VG/GF; walnut (胡桃).', 'nuts'),
      it('赤キャベツとオレンジのマリネ', 'aka kyabetsu to orenji no marine', 'Red cabbage and orange marinade', '¥880', 'A la carte', 'gf', V, 'VG/GF.', 'cabbage_marinade'),
      it('ヴィーガンハムカツ', 'vegan hamukatsu', 'Vegan ham-katsu', '¥1,078', 'A la carte', 'no', V, 'VG; flagged 小麦 (breaded).', 'vegan_ham_katsu'),
      it('ポテトフライ', 'poteto furai', 'Fried potatoes', '¥1,078', 'A la carte', 'gf', V, 'VG/GF; fryer arrangement not stated.', 'potato_fries'),
      it('ピリ辛スパイスポテトフライ', 'pirikara supaisu poteto furai', 'Spicy fried potatoes', '¥1,078', 'A la carte', 'gf', V, 'VG/GF; fryer arrangement not stated.', 'spicy_fries'),
      it('本日のサラダ', 'honjitsu no sarada', 'Salad of the day', '¥1,430', 'A la carte', 'gf', V, 'VG/GF.', 'salad_of_day'),
      it('自家製豆腐のすじ青のりフリット', 'jikasei toufu no sujiaonori furitto', 'House tofu fritto with green laver', '¥1,430', 'A la carte', 'gf', V, 'VG/GF; fryer arrangement not stated.', 'tofu_fritto'),
      it('黒アワビ茸のロースト バルサミコソース', 'kuro awabitake no roosuto', 'Roast black abalone mushroom, balsamic', '¥1,650', 'A la carte', 'gf', V, 'VG/GF.', 'mushroom_roast'),
      it('バゲット', 'bagetto', 'Baguette', '¥330', 'A la carte', 'no', V, 'VG; flagged 小麦.', 'baguette'),
      it('キャロットケーキ 白あんフロスティング', 'kyarotto keeki shiroan furosutingu', 'Carrot cake with white-bean frosting', '¥990', 'Dessert', 'no', V, 'VG; flagged 小麦.', 'carrot_cake'),
      it('ソイレアチーズケーキ 葡萄のソース', 'soi rea chiizu keeki', 'Soy rare cheesecake, grape sauce', '¥990', 'Dessert', 'gf', V, 'VG/GF.', 'soy_cheesecake'),
      it('焼き林檎 タタン風', 'yaki ringo tatan fuu', 'Baked apple, tatin style', '¥1,100', 'Dessert', 'gf', V, 'VG/GF; walnut.', 'baked_apple'),
      it('洋梨とベリーのパルフェ', 'younashi to berii no parufe', 'Pear and berry parfait (dinner)', '¥1,650', 'Dessert', 'gf', V, 'VG/GF; walnut.', 'pear_parfait'),
      it('秋の味覚とモンブランのパルフェ', 'aki no mikaku to monburan no parufe', 'Autumn Mont Blanc parfait (dinner)', '¥1,650', 'Dessert', 'gf', V, 'VG/GF.', 'montblanc_parfait'),
    ] }, {
    cuisine: '“MODERN SHOJIN”の植物性レストラン(THREE)・ヴィーガン、GF表示の料理あり',
    neighborhood: '有楽町一丁目、東京ミッドタウン日比谷2F。日比谷駅直結',
    gf_detail: '2026年9月のメニューでは、多くの料理に店のGF表示があり、アレルゲンも料理ごとに表示されています。GFでないもの: ヴィーガンヌードル(橋爪製麺の麺)、キャロットケーキ、アンティパストミスト、ヴィーガンハムカツ、バゲットで、すべて「小麦」表示があります。ディナーメニューではヴィーガンヌードルに「VG/GF」と小麦表示が併記されていますが、小麦を含むものとして扱ってください。小麦の衣のハムカツと、GF表示のポテトフライや豆腐フリットは同じ厨房で作られ、フライヤーの使い分けは書かれていません。そばがきは蕎麦です。GF表示の料理だけを選び、確認してください。',
    vegan_detail: '2026年9月のランチ・ディナーメニューのすべての料理に「VG(ヴィーガン対応)」の表示があり、植物由来の素材を中心にした“MODERN SHOJIN”がコンセプトです。ラテのミルクは豆乳・アーモンドミルク・オーツミルクに変更できます。',
    notes: '[ヴィーガン・GFの選択肢あり] 日本のコスメブランド「THREE」の植物性レストランで、東京ミッドタウン日比谷の2階にあります。コンセプトは“MODERN SHOJIN”。日本の大地の恵みを世界の調理法で供し、「地産地消」と「身土不二(からだと土地は一つにつながっている)」を大切にしています。看板は季節の「ベジミールスタンド」で、本日のコンブチャ、9種のお菜、黒米入り雑穀米、すまし汁の組み合わせ。2026年秋の9種には、白胡麻豆腐の精進だし餡、ビーツのアグロドルチェ、ロースト南瓜の茸クリームソースなどが並びました。ほかにスープカレー、腸活ビビンパ、ベジミートタコライス、昆布・きのこ・野菜だしのヴィーガンヌードル、ヴィーガンのデザートとパフェ。メニューは毎月替わり、すべてにVG表示、ほとんどにGF表示があります。',
  });
}

save();
