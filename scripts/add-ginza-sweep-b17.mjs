// Ginza Station half-mile sweep (805 m), batch 17 — the last hidden placeholders. Researched 2026-10-24.
//   ~ tokyo3_y_65  わんぱく (signless stand-up soba near Kyōbashi; owner unnamed → OMNI)
//   ~ tokyo3__84   築地玉寿司 築地本店 (founded 1924 per the restaurant; NOT the 晴海通り branch whose FMGF reviews exist)
//   ~ tokyo3__88   築地すし鮮 総本店 (sushi and izakaya to 5 a.m.)
// Still hidden: 銀座 小十 (no Tabelog id found in the A130101 japanese/kaiseki lists).
// Sources: Tabelog /en/ listings (ids via area-genre lists) + dated 2026 reviews. Pins: Tabelog geo + GSI.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ わんぱく
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130202/13114608/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'tokyo3_y_65', name: 'わんぱく (Wanpaku)', category: 'OMNI',
    lat: 35.676504, lng: 139.7682,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Stand-up soba and udon in a bold Tokyo-style dashi broth, normally soy-based, with tempura fried ahead. The soba is described as having a slight dried-noodle fragrance. No source says it is 100% buckwheat. Curry soba and croquette soba are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as served. The broth is a bold Tokyo-style soba dashi, normally bonito-based. Vegetable tempura such as kakiage, shungiku and burdock is available, but it goes into that broth or the dipping sauce.',
    hours_raw: 'Hours not listed on Tabelog; diners report breakfast and lunch visits on weekdays. Cash only. No photography inside.',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yaesu 2-chōme, opposite Tokyo Square Garden — 2–5 min from Kyōbashi Stn exit 4',
    cuisine: 'Tachigui (stand-up) soba and udon · tempura toppings · curry soba', cuisine_type: 'udon_soba',
    website: null, gmaps: gm('わんぱく 八重洲2-8-10 立ち食いそば'), menu_url: null,
    notes: "[Stand-up soba · no sign] A one-person-wide stand-up soba counter in Yaesu 2-chōme, opposite Tokyo Square Garden, with no signboard: look for a noren and a retriever, the shop dog, by the door. Photography is strictly forbidden inside, and staff will stop you. A quiet owner takes orders. Prices are old-fashioned: kake soba ¥340, kakiage or kisu tempura ¥130 each, egg ¥70 (April 2026). Tempura is fried ahead and piled on the counter, including shungiku, burdock and squid; there is also curry soba, croquette soba and onigiri. The soba is slightly thick and soft, the dashi bold in the Tokyo stand-up style. Popular with salarymen at lunch.",
    chef_bio: {
      chef_name: null, roles: ['owner-run stand-up soba (owner not named in any source)'],
      origin: 'Yaesu 2-8-10; opening year not found',
      background: '2026 diners describe a quiet owner taking orders, and a retriever as the shop dog. No source names the owner, so it is not tagged mom-and-pop.',
      philosophy: null,
      specialty: 'Kake soba with counter tempura; curry soba.',
      anecdotes: [
        { text: '"No signboard in sight, just a dog statue. There\'s a noren… There\'s a no photography sticker inside the restaurant." — April 2026.', source: R + 'B528459392/' },
        { text: 'A June 2026 diner raised a phone after the food arrived and "was quickly warned", then cold soba with kakiage, shungiku and burdock tempura for ¥790.', source: R + 'B530832981/' },
        { text: '"Although it\'s right in front of the restaurant, if you didn\'t know, you wouldn\'t realize it\'s a soba shop." — September 2026, of the shop dog.', source: R + 'B530661293/' },
      ],
      japanese_sources_summary: '食べログ: わんぱく、八重洲2-8-10 松岡八重洲ビル1F、立ち食いそば・うどん、立ち食いカウンターのみ、カード・電子マネー・QR不可、店内撮影禁止、営業時間の記載なし。2026年の口コミ: 看板なし・のれんと看板犬(レトリバー)、寡黙な店主、かけそば340円・かき揚げ130円・きす天130円・玉子70円(4月)、春菊・ごぼう天・いか天・コロッケそば・カレーそば・おにぎり、天ぷらは揚げ置き、つゆは東京の立ち食いらしい濃いめ。',
      confidence: 'medium', sources: [TB, R + 'B526142850/', R + 'B528459392/', R + 'B530832981/', R + 'B530661293/', R + 'B535230179/'],
    },
    cultural_comfort: { level: 'japanese', note: 'A tiny standing counter with no sign; cash only; absolutely no photos. Order from the owner by name of dish and pay as you order.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Tempura is fried ahead and piled on the counter; croquette and curry soba on the menu.', source: R + 'B535230179/' }],
      soy_sauce_wheat: [{ text: '"The dashi has a bold flavor typical of Tokyo\'s standing soba shops."', source: R + 'B535230179/' }],
      vegan_cross_contact: [{ text: 'Squid and whiting tempura from the same counter.', source: R + 'B535230179/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒103-0028 東京都中央区八重洲2-8-10 松岡八重洲ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区八重洲二丁目8番10号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526142850/', R + 'B530832981/', R + 'B535230179/', R + 'B534929147/'],
    price_note: 'No menu (and no photos allowed). Prices from April–September 2026 reviews.', last_checked: TODAY, items: [
      it('かけそば', 'kake soba', 'Kake soba (hot soba)', '¥340', 'Soba', 'no', 'no', 'April 2026.', 'kake_soba'),
      it('かき揚げ', 'kakiage', 'Kakiage tempura topping', '¥130', 'Toppings', 'no', 'ask', '', 'kakiage'),
      it('きす天', 'kisu ten', 'Whiting tempura topping', '¥130', 'Toppings', 'no', 'no', '', 'kisu_tempura'),
      it('玉子', 'tamago', 'Egg', '¥70', 'Toppings', 'ask', 'no', '', 'egg'),
      it('', '', 'Cold soba with kakiage, shungiku and burdock tempura', '¥790', 'Soba', 'no', 'no', 'June 2026.', 'cold_soba_tempura'),
      it('カレーそば', 'karee soba', 'Curry soba', '', 'Soba', 'no', 'no', '', 'curry_soba'),
      it('コロッケそば', 'korokke soba', 'Croquette soba', '', 'Soba', 'no', 'no', '', 'croquette_soba'),
      it('おにぎり', 'onigiri', 'Onigiri', '', 'Rice', 'ask', 'ask', '', 'onigiri'),
    ] }, {
    cuisine: '立ち食いそば・うどん・天ぷらのトッピング・カレーそば',
    neighborhood: '八重洲二丁目、東京スクエアガーデンの向かい。京橋駅4番出口から徒歩2〜5分',
    gf_detail: 'グルテンフリーではありません。東京らしい濃いめの出汁(通常は醤油ベース)の立ち食いそば・うどんで、天ぷらは揚げ置き。そばは乾麺のような香りもあるとされ、十割という情報はありません。カレーそばやコロッケそばもあります。',
    vegan_detail: 'そのままではヴィーガンではありません。つゆは東京風の濃いめの出汁(通常は鰹ベース)。かき揚げや春菊・ごぼうの天ぷらはありますが、そのつゆで食べます。',
    notes: '[立ち食いそば・看板なし] 八重洲二丁目、東京スクエアガーデンの向かいにある一人分の幅の立ち食いそば。看板はなく、のれんと入口の看板犬(レトリバー)が目印です。店内は撮影厳禁で、撮ろうとすると注意されます。寡黙な店主が注文を受け、かけそば340円、かき揚げ・きす天各130円、玉子70円(2026年4月)と昔ながらの値段。天ぷらは揚げ置きでカウンターに並び、春菊・ごぼう・いかなど。カレーそば、コロッケそば、おにぎりも。そばはやや太めで柔らかく、つゆは東京の立ち食いらしい濃いめ。昼はサラリーマンに人気です。',
  });
}

// ================================================================ 築地玉寿司 築地本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1313/A131301/13014807/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo3__84', name: '築地玉寿司 築地本店 (Tsukiji Tamazushi, main shop)', category: 'OMNI',
    lat: 35.669309, lng: 139.771738,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: "Ask. Sushi rice and fish are naturally wheat-free, but soy sauce, the simmered-anago sauce, marinated tuna and tamago normally contain wheat or soy, and no source describes this shop's seasonings. The menu also has tempura. FindMeGlutenFree reviews under \"Tsukiji Tama Sushi\" are for the Harumi-dōri branch (築地2-15-19), not this main shop, so they are not used here, and that listing reports no GF menu. Bring your own tamari and ask for plain nigiri without nikiri or tsume.",
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. A sushi and seafood restaurant: nigiri, seafood bowls, sashimi and simmered anago. Vegetable rolls are not mentioned in any source.',
    hours_raw: 'Daily 11:00–15:00 and 17:00–22:00 (L.O. 21:30); closed only on New Year\'s Day (Tabelog). Cards accepted. Tatami room for groups of four or more.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tsukiji 1-chōme, street level — 1 min from Tsukiji Stn (Hibiya line), 3 min from Higashi-Ginza',
    cuisine: 'Edomae sushi since 1924 · seafood bowls (zuke maguro, negitoro) · sashimi · izakaya dishes', cuisine_type: 'sushi',
    website: null, gmaps: gm('築地玉寿司 築地本店 築地1-9-4'), menu_url: null,
    notes: "[Sushi · the original Tamazushi] The main shop of 築地玉寿司, which describes itself as founded in 1924; one 2026 diner says 1926, so take the year as approximate. The chain has a Harumi-dōri branch nearby and shops in station buildings, but this street-level shop is the original: thirteen counter seats, tables and a tatami room. Lunch queues form before the 11:00 opening for seafood bowls (zuke maguro and negitoro around ¥1,540, with a free hand roll that regulars love), nigiri sets and dessert. Dinner is sashimi platters, simmered anago, aji tataki and nigiri with sake. Up the stairs beside the main shop, a separate counter-only room serves omakase with sake pairings.",
    chef_bio: {
      chef_name: null, roles: ['main shop of the 築地玉寿司 chain'],
      origin: 'Founded 1924 (restaurant\'s Tabelog highlight); Tsukiji 1-9-4',
      background: 'A 2026 diner who normally uses the Harumi-dōri branch came to this main shop; another mentions a Lumine station-building branch.',
      philosophy: null,
      specialty: 'Zuke maguro and negitoro bowls; simmered anago; nigiri.',
      anecdotes: [
        { text: 'A regular on a 13th visit recommends the marinated tuna and negitoro bowls (¥1,540) and the complimentary hand roll "that keeps customers coming back."', source: R + 'B468169255/' },
        { text: '"I usually go to the Harumi-dori branch, but this location is a street-level shop with great service and a comfortable atmosphere."', source: R + 'B535521199/' },
        { text: 'A counter-only room upstairs next to the main store serves omakase with a sake pairing.', source: R + 'B536674655/' },
      ],
      japanese_sources_summary: '食べログ: 築地玉寿司 築地本店、築地1-9-4、店舗紹介「1924年創業、元祖築地玉寿司」、35席(テーブル22・カウンター13)、毎日11:00〜15:00・17:00〜22:00、元日のみ休、カード可、座敷は4名以上で予約可。2026年の口コミ: 大正創業、づけまぐろ・ねぎとろ丼1,540円、手巻きのサービス、穴子、刺身盛り合わせ、晴海通り店・ルミネの店舗、本店横の階段上にカウンターのみの店。',
      confidence: 'medium', sources: [TB, R + 'B468169255/', R + 'B535521199/', R + 'B536674655/', R + 'B533486637/', R + 'B535193845/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter, tables and a tatami room; queue before 11:00 for lunch. Cards accepted.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Not this branch: the FMGF "Tsukiji Tama Sushi" listing (Harumi-dōri, 築地2-15-19) reports "No GF menu".', source: 'https://www.findmeglutenfree.com/biz/tsukiji-tama-sushi/4821061351112704' }],
      soy_sauce_wheat: [{ text: 'Marinated (zuke) tuna and negitoro bowls; simmered anago.', source: R + 'B468169255/' }],
      vegan_cross_contact: [],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0045 東京都中央区築地1-9-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区築地一丁目9番4号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B468169255/', R + 'B535193845/', R + 'B533486637/', R + 'B536674655/'],
    price_note: 'No menu read. One price from a September 2026 review.', last_checked: TODAY, items: [
      it('づけまぐろ丼', 'zuke maguro don', 'Marinated tuna bowl', '¥1,540', 'Lunch', 'no', 'no', 'Marinade is soy-based. September 2026.', 'zuke_maguro_don'),
      it('ねぎとろ丼', 'negitoro don', 'Negitoro bowl', '', 'Lunch', 'ask', 'no', '', 'negitoro_don'),
      it('にぎり', 'nigiri', 'Nigiri sets (e.g. Komachi)', '', 'Sushi', 'ask', 'no', 'Ask for no nikiri/tsume.', 'nigiri'),
      it('刺身盛り合わせ', 'sashimi moriawase', 'Sashimi platter', '', 'Dinner', 'ask', 'no', '', 'sashimi'),
      it('煮穴子', 'ni anago', 'Simmered anago', '', 'Dinner', 'no', 'no', 'Sweet soy glaze.', 'ni_anago'),
      it('', '', 'Omakase with sake pairing (upstairs counter)', '', 'Course', 'ask', 'no', 'October 2026.', 'omakase_upstairs'),
    ] }, {
    cuisine: '1924年創業の江戸前寿司・海鮮丼(づけまぐろ・ねぎとろ)・刺身・居酒屋料理',
    neighborhood: '築地一丁目、路面店。日比谷線築地駅から徒歩1分、東銀座から3分',
    gf_detail: '要確認。シャリや魚そのものは小麦を含みませんが、醤油、煮穴子のツメ、づけまぐろ、玉子は通常小麦や醤油を含み、この店の調味料の情報はありません。天ぷらもあります。FindMeGlutenFreeの「Tsukiji Tama Sushi」の口コミは晴海通り店(築地2-15-19)のもので、この本店ではないため使っていません(そちらでもGFメニューなしとされています)。グルテンフリーの醤油を持参し、煮切りやツメなしのにぎりを頼んでください。',
    vegan_detail: 'ヴィーガンではありません。寿司と海鮮の店で、にぎり、海鮮丼、刺身、煮穴子。野菜の巻物の記述はありません。',
    notes: '[寿司・元祖玉寿司] 築地玉寿司の本店で、店によれば1924年創業(口コミには1926年ともあり、年はおおよそと考えてください)。近くに晴海通り店があり、駅ビルにも店舗がありますが、この路面店が元祖で、カウンター13席・テーブル・座敷。昼は11時の開店前から行列ができ、づけまぐろやねぎとろの丼(1,540円ほど、常連に人気のサービスの手巻き付き)、にぎりのセット、デザートも。夜は刺身盛り合わせ、煮穴子、アジのたたき、にぎりと日本酒。本店横の階段を上がった先には、カウンターのみの別の店があり、おまかせと日本酒のペアリングが楽しめます。',
  });
}

// ================================================================ 築地すし鮮 総本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1313/A131301/13029445/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:00', '05:00']);
  put({
    id: 'tokyo3__88', name: '築地すし鮮 総本店 (Tsukiji Sushisen, main shop)', category: 'OMNI',
    lat: 35.669032, lng: 139.77153,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Plain nigiri and sashimi contain no wheat in themselves, but the shop also serves tempura, rolls, chawanmushi and miso soup, and no source describes its soy sauce or seasonings. Bring your own tamari and ask for nigiri without nikiri or tsume.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as a restaurant. It is a sushi and seafood izakaya. A natto roll and vegetable tempura appear in 2026 reviews, but the tempura batter and dipping sauce are not described.',
    hours_raw: 'Daily 11:00–05:00 next morning (L.O. 04:30); open year-round (Tabelog). Appetiser charge ¥550. Cards, IC and PayPay accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Tsukiji 1-chōme, Aroa Tsukiji Bldg 1F — 3 min from Tsukiji Stn exit 4',
    cuisine: 'Sushi and seafood izakaya · open until 5 a.m. · sushi-and-tempura courses · sake', cuisine_type: 'sushi',
    website: null, gmaps: gm('築地すし鮮 総本店 築地1-9-6'), menu_url: null,
    notes: "[Sushi · open to 5 a.m.] The main shop of the Tsukiji Sushisen group, on the same block as Tamazushi's main shop (1-9-6 and 1-9-4), and open from 11 a.m. to 5 a.m. every day, so it is one of the few places for sushi after midnight. Seventy-eight seats at the counter, tables and private rooms. 2026 diners order the market's recommended ten-piece platter, conger-eel and horse-mackerel nigiri, grilled tuna, dobin-mushi and akadashi, and a ¥5,500 course of sashimi, grilled dish, tempura, chawanmushi, four nigiri and miso soup for friends who don't eat raw fish. A good sake list; ¥550 appetiser charge. Reviews are mixed on value and service.",
    chef_bio: {
      chef_name: null, roles: ['main shop (総本店) of the 築地すし鮮 group'],
      origin: 'Tsukiji 1-9-6; opening year not found',
      background: 'The listing name 総本店 marks it as the group\'s main shop; Tabelog lists a corporate invoice number (T8010001126810).',
      philosophy: null,
      specialty: 'Late-night sushi; sushi-and-tempura courses; sake.',
      anecdotes: [
        { text: '"I really appreciate that there are fewer sushi places open late these days." — a late visitor, August 2026.', source: R + 'B534576537/' },
        { text: 'A live horse mackerel was "still twitching on the plate"; the leftovers came back as kara-age.', source: R + 'B536849615/' },
      ],
      japanese_sources_summary: '食べログ: 築地すし鮮 総本店、築地1-9-6 アロア築地ビル1F、毎日11:00〜翌5:00、年中無休、78席、個室あり、お通し550円、カード・交通系IC・PayPay可、適格請求書T8010001126810。2026年の口コミ: 市場おすすめ10貫、穴子・活アジ、マグロの焼き物、土瓶蒸し、赤だし、刺身・焼物・天ぷら・茶碗蒸し・寿司4貫・味噌汁のコース5,500円、納豆巻き、野菜天ぷら、日本酒が豊富。',
      confidence: 'low', sources: [TB, R + 'B533137095/', R + 'B534065130/', R + 'B536849615/', R + 'B536605078/', R + 'B534171981/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Large restaurant with counter, tables and private rooms; open almost all night. Cards, IC and PayPay; ¥550 appetiser charge.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Assorted vegetable tempura and scallop tempura on the menu.', source: R + 'B533137095/' }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0045 東京都中央区築地1-9-6 アロア築地ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区築地一丁目9番6号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534065130/', R + 'B533137095/', R + 'B536131223/', R + 'B536605078/'],
    price_note: 'No menu read. One course price from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Sushi and tempura course (sashimi, grilled, tempura, chawanmushi, 4 nigiri, miso soup)', '¥5,500', 'Course', 'no', 'no', 'August 2026.', 'sushi_tempura_course'),
      it('', '', "Market's recommended 10-piece nigiri", '', 'Sushi', 'ask', 'no', '', 'nigiri_10'),
      it('穴子にぎり', 'anago nigiri', 'Conger-eel nigiri', '', 'Sushi', 'no', 'no', 'Usually glazed with tsume.', 'anago_nigiri'),
      it('納豆巻き', 'nattou maki', 'Natto roll', '', 'Sushi', 'ask', 'ask', '', 'natto_roll'),
      it('', '', 'Assorted vegetable tempura', '', 'Small plates', 'no', 'ask', '', 'vegetable_tempura'),
      it('土瓶蒸し', 'dobin mushi', 'Dobin-mushi (teapot soup)', '', 'Small plates', 'ask', 'no', '', 'dobin_mushi'),
      it('赤だし', 'akadashi', 'Akadashi (red miso soup)', '', 'Soup', 'ask', 'no', '', 'akadashi'),
    ] }, {
    cuisine: '寿司と海鮮の居酒屋・朝5時まで営業・寿司と天ぷらのコース・日本酒',
    neighborhood: '築地一丁目、アロア築地ビル1F。築地駅4番出口から徒歩3分',
    gf_detail: '要確認。にぎりや刺身そのものは小麦を含みませんが、天ぷら・巻物・茶碗蒸し・味噌汁もあり、醤油や調味料の情報はありません。グルテンフリーの醤油を持参し、煮切りやツメなしのにぎりを頼んでください。',
    vegan_detail: '店としてはヴィーガンではありません。寿司と海鮮の居酒屋です。2026年の口コミには納豆巻きや野菜の天ぷらがありますが、衣やつゆの記述はありません。',
    notes: '[寿司・朝5時まで] 築地すし鮮グループの総本店で、玉寿司の本店と同じ街区(築地1-9-6と1-9-4)。毎日11時から翌朝5時まで営業し、深夜に寿司が食べられる貴重な店です。カウンター・テーブル・個室で78席。2026年の口コミでは、市場おすすめの10貫、穴子や活アジのにぎり、マグロの焼き物、土瓶蒸し、赤だし、生魚が苦手な友人向けの刺身・焼物・天ぷら・茶碗蒸し・寿司4貫・味噌汁の5,500円のコース。日本酒が豊富で、お通し550円。値段や接客の評価は分かれています。',
  });
}

save();
