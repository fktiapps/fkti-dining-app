// Ginza Station half-mile sweep (805 m), batch 20 — mom-and-pop discovery: kissaten. Researched 2026-10-24.
//   + 喫茶 アメリカン (1983; owner Haraguchi Makoto; giant egg sandwiches → MOM_AND_POP)
//   + カフェ ルトン (owner Ida Toshimitsu, about 38 years in 2019; Art Nouveau basement → MOM_AND_POP)
//   + 310.COFFEE (2016; run by manager Satō Yukie and her husband Ueno Ryūma for a separate, unnamed owner → OMNI)
// Deferred: 仏蘭西屋 (Kansai 英國屋 group, 1980; Tabelog id not found). Leads from san-tatsu collects/7481 (2019).
// Sources: san-tatsu (2019 collection; 2021 310.COFFEE feature), Tabelog /en/ listings + dated 2026 reviews.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);
const SC = 'https://san-tatsu.jp/collects/7481/';

// ================================================================ 喫茶 アメリカン
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13051375/'; const R = TB + 'dtlrvwlst/';
  const a = day(['08:30', '14:30']);
  put({
    id: 'tokyo_kissa_american_ginza', name: '喫茶 アメリカン (Kissa American)', category: 'MOM_AND_POP',
    lat: 35.669819, lng: 139.768753,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The whole menu is sandwiches on soft white bread baked that day, egg, potato and others, in loaf-sized portions. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The signature egg sandwich is filled with boiled-egg filling (the special uses about eight eggs); the potato sandwich and set soup are not described as egg- or dairy-free.',
    hours_raw: 'Mon–Fri 08:30–14:30 (L.O. 14:00); closed Saturdays, Sundays and holidays; closes when the bread runs out (Tabelog). Cash only. Takeaway available.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme, the alley on the Tsukiji side of Kabuki-za — 2–3 min from Higashi-Ginza Stn',
    cuisine: 'Kissaten since 1983 · giant egg sandwiches (a loaf per order) · takeaway', cuisine_type: 'kissaten',
    website: null, gmaps: gm('喫茶 アメリカン 銀座4-11-7'), menu_url: null,
    notes: "[Mom & Pop · loaf-sized sandwiches] A New York-deli-looking kissaten in the alley beside the Kabuki-za, opened in 1983. When the theatre was rebuilt, the owner, Haraguchi Makoto, decided the shop needed a signature and made the sandwiches absurdly big: \"one serving is a whole loaf.\" The bread is baked that day and very soft; the boiled-egg filling is fist-sized, and the 'special egg sandwich' uses about eight eggs. Nobody finishes, so wrapping the rest to take home is normal. In 2019 a sandwich set came with a heap of salad, soup and a drink (¥1,200). In 2026 a special egg sandwich with iced coffee was about ¥2,000, and an egg-and-potato takeaway set ¥1,000. The walls are covered in Saga Prefecture posters and signatures. Busy, shared tables, cash only, weekdays only, and it shuts when the bread runs out.",
    chef_bio: {
      chef_name: '原口誠 (Haraguchi Makoto, owner)', roles: ['owner'],
      origin: 'Opened 1983 near Kabuki-za',
      background: 'The owner made the sandwiches jumbo-sized as a signature at the time of the Kabuki-za rebuilding (san-tatsu, 2019).',
      philosophy: '「1人前はパン1斤だね」 — one serving is a whole loaf.',
      specialty: 'Egg sandwich; special egg sandwich (about eight eggs); potato sandwich.',
      anecdotes: [
        { text: '1983年に創業したこちらは、歌舞伎座の改装を機に名物を作ろうと一大決心。そこで笑っちゃうほどジャンボなサイズにしたという。「1人前はパン1斤だね」。わっはっはと名物店主の原口誠さんは豪快に笑う.', source: SC },
        { text: 'An October 2026 diner, after a night shift, was steered by staff from the regular egg sandwich to the special, "an astonishing volume of 8 eggs".', source: R + 'B537811336/' },
        { text: 'A second-time diner took a quarter of the special home; at busy times you share a table.', source: R + 'B522742106/' },
      ],
      japanese_sources_summary: 'さんたつ(2019.12): 喫茶 アメリカン、ニューヨークのデリのような外観、1983年創業、歌舞伎座の改装を機にジャンボサイズに、名物店主・原口誠さん「1人前はパン1斤」、その日焼きたてのパン、こぶし大のたまごフィリング、持ち帰り可、サンドイッチセット1,200円(サラダ・スープ・飲み物付き)、佐賀県のポスター。食べログ: 銀座4-11-7、月〜金8:30〜14:30、土日祝休、パンがなくなり次第終了、現金のみ。2026年の口コミ: スペシャルたまごサンド(卵8個分)、アイスコーヒーと合わせて2,000円、たまご&ポテトの持ち帰りセット1,000円、相席、ホットコーヒーはモカ。',
      confidence: 'medium', sources: [SC, TB, R + 'B537811336/', R + 'B522742106/', R + 'B537822600/', R + 'B537816362/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order as soon as the menu lands; staff will recommend the special. Shared tables at busy times; cash only; take leftovers home.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Sandwiches on bread baked that day are the whole menu.', source: SC }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Boiled-egg filling, fist-sized.', source: SC }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-11-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目11番7号 (go) 3m; OSM node 6296041591 「アメリカン」 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SC, R + 'B537822600/', R + 'B537816362/', R + 'B522742106/'],
    price_note: 'The set price is from 2019; 2026 prices from October reviews.', last_checked: TODAY, items: [
      it('スペシャルたまごサンド', 'supesharu tamago sando', 'Special egg sandwich (about eight eggs)', '', 'Sandwiches', 'no', 'no', 'About ¥2,000 with iced coffee (October 2026).', 'special_egg_sandwich'),
      it('たまごサンド', 'tamago sando', 'Egg sandwich', '', 'Sandwiches', 'no', 'no', '', 'egg_sandwich'),
      it('', '', 'Egg and potato sandwich set (takeaway)', '¥1,000', 'Takeaway', 'no', 'no', 'October 2026.', 'egg_potato_takeaway'),
      it('サンドイッチセット', 'sandoicchi setto', 'Sandwich set with salad, soup and a drink', '¥1,200', 'Sets', 'no', 'no', '2019 price.', 'sandwich_set'),
      it('モカコーヒー', 'moka koohii', 'Mocha coffee (hot)', '', 'Drinks', 'ask', 'ask', '', 'mocha'),
    ] }, {
    cuisine: '1983年創業の喫茶店・パン1斤分の特大たまごサンド・持ち帰り',
    neighborhood: '銀座四丁目、歌舞伎座の築地側の路地。東銀座駅から徒歩2〜3分',
    gf_detail: 'グルテンフリーではありません。メニューはその日焼いた柔らかいパンのサンドイッチ(たまご・ポテトなど)ばかりで、パン1斤分の大きさです。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。名物のたまごサンドはゆで卵のフィリング(スペシャルは卵約8個分)。ポテトサンドやセットのスープも卵・乳製品不使用とはされていません。',
    notes: '[個人店・パン1斤のサンドイッチ] 歌舞伎座横の路地にあるニューヨークのデリのような外観の喫茶店で、1983年創業。歌舞伎座の改装を機に名物を作ろうと、店主の原口誠さんが笑ってしまうほどジャンボなサイズに決めたそうで、「1人前はパン1斤だね」。その日焼いた柔らかいパンに、こぶし大のたまごフィリング、スペシャルは卵約8個分。食べきれないのが当たり前で、残りは持ち帰りが基本です。2019年はサラダ・スープ・飲み物付きのセットが1,200円、2026年はスペシャルたまごサンドとアイスコーヒーで2,000円ほど、たまご&ポテトの持ち帰りセット1,000円。壁には佐賀県のポスターやサインがびっしり。混むと相席、現金のみ、平日のみで、パンがなくなり次第終了します。',
  });
}

// ================================================================ カフェ ルトン
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13013375/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '17:00']), we = day(['11:00', '18:00']);
  put({
    id: 'tokyo_cafe_de_ruton_ginza', name: 'カフェ ルトン (Café de Ruton)', category: 'MOM_AND_POP',
    lat: 35.671301, lng: 139.763953,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Black coffee (aged beans) contains no gluten, but the food is waffles and crêpes, which are wheat-based as usually made. No ingredients are published.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'Black coffee is plant-only. The waffles and crêpes normally contain egg, milk or butter and are served with fruit and cream; nothing is described as vegan.',
    hours_raw: 'Mon–Fri 11:00–17:00; Sat & Sun 11:00–18:00 (Tabelog, 2026; a 2019 guide listed longer hours). Cash only. Two-hour limit at busy times.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Nishi-gobankan B2F — 1 min from Ginza Stn',
    cuisine: 'Basement kissaten · aged-bean coffee · waffles and crêpes · Art Nouveau antiques', cuisine_type: 'kissaten',
    website: null, gmaps: gm('カフェ ルトン 西五番館'), menu_url: null,
    notes: "[Mom & Pop · Art Nouveau basement] Down an unpromising staircase, or a lift, in a plain building a minute from Ginza Station is a surprisingly large, high-ceilinged, hushed room. It is filled with the Art Nouveau furniture, ceramics, antique clocks and stained glass collected by owner Ida Toshimitsu. \"Customers change, but the shop doesn't,\" he told san-tatsu in 2019, when it had been open thirty-eight years. The coffee is mellow, made with aged beans; the Meissen Blend, Brazil-based, was ¥900 in 2019, poured into period cups, and the waffles cost ¥600. In 2026 diners came for banana crêpes topped with peaches and berries (about ¥800) and chocolate waffles, and likened the room to a Studio Ghibli set.",
    chef_bio: {
      chef_name: '井田利光 (Ida Toshimitsu, owner)', roles: ['owner'],
      origin: 'About 38 years at this site as of 2019',
      background: 'The owner collected the Art Nouveau furnishings and porcelain that fill the room (san-tatsu, 2019).',
      philosophy: '「お客さんは変わるけれど、店は変わらない」',
      specialty: 'Aged-bean coffee; Meissen Blend; waffles and crêpes.',
      anecdotes: [
        { text: '無機質な階段を潜ったどん突きに、"まさか"の入り口がある… 調度品や陶磁器は、隅々までアールヌーボー。店主の井田利光さんが蒐集したこれらアート.', source: SC },
        { text: '"The interior feels like stepping into a Studio Ghibli world, with various antique clocks adorning the space and warm light streaming through stained glass windows." — March 2026.', source: R + 'B524647190/' },
      ],
      japanese_sources_summary: 'さんたつ(2019.12): カフェ ルトン、銀座5-6-16 西五番館B2、アールヌーボーの調度品・陶磁器、店主・井田利光さんが蒐集、熟成豆のまろやかなコーヒー、マイセンブレンド(ブラジルベース)900円、ワッフル600円、「お客さんは変わるけれど、店は変わらない」、38年。食べログ(2026): 平日11:00〜17:00、土日11:00〜18:00、現金のみ。2026年の口コミ: ジブリのような空間、アンティーク時計、ステンドグラス、バナナクレープ約800円、チョコレートワッフル、混雑時2時間制。',
      confidence: 'medium', sources: [SC, TB, R + 'B524647190/', R + 'B537721731/', R + 'B528953752/', R + 'B529981424/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'A quiet basement room with ample counter seating; cash only; a time limit when full.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-6-16 西五番館 B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目6番16号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SC, R + 'B537721731/', R + 'B528953752/', R + 'B529981424/'],
    price_note: 'Blend and waffle prices from 2019; crêpe price from September 2026.', last_checked: TODAY, items: [
      it('マイセンブレンド', 'maisen burendo', 'Meissen Blend (Brazil base, aged beans)', '¥900', 'Coffee', 'gf', 'vegan', '2019 price.', 'meissen_blend'),
      it('ワッフル', 'waffuru', 'Waffle', '¥600', 'Sweets', 'no', 'no', '2019 price.', 'waffle'),
      it('バナナクレープ', 'banana kureepu', 'Banana crêpe with peaches and berries', '¥800', 'Sweets', 'no', 'no', 'About ¥800, September 2026.', 'banana_crepe'),
      it('チョコレートワッフル', 'chokoreeto waffuru', 'Chocolate waffle', '', 'Sweets', 'no', 'no', '', 'chocolate_waffle'),
    ] }, {
    cuisine: '地下の喫茶店・熟成豆のコーヒー・ワッフルとクレープ・アールヌーボーの骨董',
    neighborhood: '銀座五丁目、西五番館B2F。銀座駅から徒歩1分',
    gf_detail: '要確認。熟成豆のブラックコーヒーにグルテンは含まれませんが、食べ物はワッフルとクレープで、通常は小麦が主原料です。材料は公表されていません。',
    vegan_detail: 'ブラックコーヒーは植物性のみ。ワッフルやクレープは通常卵・牛乳・バターを含み、果物やクリームを添えます。ヴィーガンの品の記述はありません。',
    notes: '[個人店・アールヌーボーの地下喫茶] 銀座駅から1分、無機質なビルの階段(またはエレベーター)を下りた先に、思いのほか広く天井の高い、静かな空間が広がります。店主の井田利光さんが集めたアールヌーボーの家具や陶磁器、アンティーク時計、ステンドグラスに囲まれた店で、2019年の取材時で開店38年。「お客さんは変わるけれど、店は変わらない」と井田さん。熟成豆を使うまろやかなコーヒーで、ブラジルベースのマイセンブレンドは2019年に900円、時代ものの器で供され、ワッフルは600円でした。2026年の口コミでは、桃とベリーをのせたバナナクレープ(約800円)やチョコレートワッフルが頼まれ、ジブリのような空間と評されています。',
  });
}

// ================================================================ 310.COFFEE
{
  const ST = 'https://san-tatsu.jp/articles/107179/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13193276/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '20:00']), we = day(['11:00', '19:00']);
  put({
    id: 'tokyo_310_coffee_ginza', name: '310.COFFEE (さとうコーヒー)', category: 'OMNI',
    lat: 35.668279, lng: 139.763588,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Black coffee, roasted in the shop almost every morning, contains no gluten. The food, Neapolitan spaghetti and sweets, is wheat-based as usually made.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'Black coffee is plant-only. The Neapolitan normally includes sausage or ham, and no vegan dish is described.',
    hours_raw: 'Mon–Fri 11:00–20:00; Sat, Sun & holidays 11:00–19:00 (Tabelog). Smoking allowed at every seat. Cards and d-Barai accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, the back street behind GINZA SIX toward Shimbashi',
    cuisine: 'Self-styled "saten" (kissaten) since 2016 · house-roasted coffee · Neapolitan · smoking allowed', cuisine_type: 'kissaten',
    website: null, gmaps: gm('310.COFFEE 銀座7-11-6'), menu_url: null,
    notes: "[Kissaten · smoking allowed] A glass-fronted 35-seat coffee house on a back street behind GINZA SIX, opened February 2016, which calls itself a 'saten', old slang for kissaten, to keep the form alive. Manager Satō Yukie spent fifteen years at the Sapporo roaster Miyakoshiya's Ginza and Shimbashi shops; she opened it with an owner who had retired from a trading company in their forties, and her husband Ueno Ryūma, a former colleague, joined soon after. The couple now run everything. Beans are roasted in the corner almost every morning. Blend ¥900 with refills at half price (2021); Neapolitan set with a drink up to ¥1,100 (2026). One of very few cafés in Ginza where every seat allows smoking.",
    chef_bio: {
      chef_name: '佐藤由希絵 (Satō Yukie, manager) and 上野隆真 (Ueno Ryūma)', roles: ['manager', 'run by the couple for a separate owner (not named)'],
      origin: 'Opened February 2016',
      background: 'Satō, from Hokkaidō, worked fifteen years at 宮越屋珈琲 shops in Ginza and Shimbashi; she opened 310.COFFEE with an owner who had left a trading company in their forties. Her husband Ueno, a former colleague, joined soon after; the couple are entrusted with the whole shop. Not tagged mom-and-pop because the owner is a separate, unnamed person.',
      philosophy: '「喫茶店というものを次の世代に引き継いでいきたい」',
      specialty: 'House-roasted blends and straights; Neapolitan.',
      anecdotes: [
        { text: '「GINZA SIXの裏の通りからもう一本入った新橋寄りといっても、『わからない』と言われることもあります」 — on giving directions.', source: ST },
        { text: '"This place is a personal paradise where smoking is allowed at every seat." — September 2026.', source: R + 'B535506848/' },
      ],
      japanese_sources_summary: 'さんたつ(2021.6.16): 310.COFFEE(さとうコーヒー)、銀座7丁目、2016年2月オープン、「喫茶店(サテン)」を名乗る、店長・佐藤由希絵さん(北海道出身、宮越屋珈琲の銀座・新橋の店で15年)と商社を40代で退職したオーナーが開店、夫の上野隆真さんも合流し夫婦が店の一切を任される、店内の焙煎機でほぼ毎日焙煎、ブレンド900円・おかわり半額。食べログ: 銀座7-11-6 GINZA ISONOビル1F、35席、平日11:00〜20:00、土日祝〜19:00、全席喫煙可。2026年の口コミ: ナポリタンセット(1,100円までのドリンク)、マンデリン。',
      confidence: 'medium', sources: [ST, TB, R + 'B528734275/', R + 'B535506848/', R + 'B514587900/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed at all seats — not for non-smokers who mind. Spacious booths; cards accepted.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-11-6 GINZA ISONOビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目11番6号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [ST, R + 'B528734275/'],
    price_note: 'Blend price from 2021; Neapolitan set from May 2026.', last_checked: TODAY, items: [
      it('ブレンド', 'burendo', 'House blend (refills half price)', '¥900', 'Coffee', 'gf', 'vegan', '2021 price.', 'blend'),
      it('', '', 'Straight coffee of the day (e.g. Mandheling)', '', 'Coffee', 'gf', 'vegan', '', 'straight_of_the_day'),
      it('ナポリタンセット', 'naporitan setto', 'Neapolitan set with a drink (up to ¥1,100)', '', 'Food', 'no', 'no', 'May 2026.', 'neapolitan_set'),
    ] }, {
    cuisine: '2016年開店の「サテン」(喫茶店)・自家焙煎・ナポリタン・全席喫煙可',
    neighborhood: '銀座七丁目、GINZA SIXの裏の通りからもう一本入った新橋寄り',
    gf_detail: '要確認。店内でほぼ毎朝焙煎するブラックコーヒーにグルテンは含まれません。食べ物のナポリタンやスイーツは通常小麦が主原料です。',
    vegan_detail: 'ブラックコーヒーは植物性のみ。ナポリタンには通常ソーセージやハムが入り、ヴィーガンの料理の記述はありません。',
    notes: '[喫茶店・喫煙可] GINZA SIXの裏の通りにあるガラス張りの35席の珈琲店で、2016年2月開店。喫茶店を次の世代に残したいと、自ら「サテン」を名乗ります。店長の佐藤由希絵さんは札幌の宮越屋珈琲の銀座・新橋の店で15年働き、商社を40代で退職したオーナーと店を開きました。間もなく前職の同僚で夫の上野隆真さんも加わり、今は夫婦が店の一切を任されています。豆は店の奥の焙煎機でほぼ毎朝焙煎。ブレンド900円でおかわりは半額(2021年)、ナポリタンセットは1,100円までのドリンク付き(2026年)。銀座では珍しく全席喫煙可の店です。',
  });
}

save();
