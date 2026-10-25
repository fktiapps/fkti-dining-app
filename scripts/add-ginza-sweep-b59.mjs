// Ginza Station half-mile sweep (805 m), batch 59 — the four fetched in b58 (all OMNI).
//   + 銀座シシリア (Italian since 1971, famous Napolitan; relocated to GINZATOKIDEN Bldg 3F)
//   + バル＆タパス セロナ (HIBIYA FOOD HALL, Midtown Hibiya B1; Create Restaurants site; ¥1,000 senbero set)
//   + 五右衛門 日比谷店 (Japanese-style spaghetti chain branch)
//   + Madera (Ginza 6-chōme basement wine bar, Spanish wines and paella; opened 2023 in the former Aladdin Duo space)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ 銀座シシリア
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13308408/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '14:30'], ['16:30', '22:00']), we = day(['11:30', '21:00']);
  put({
    id: 'tokyo_ginza_sicilia_ginza8', name: '銀座シシリア (Ginza Sicilia)', category: 'OMNI',
    lat: 35.669256, lng: 139.759238,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a Shōwa-style Italian built on Napolitan spaghetti, square thin pizza, lasagna and chicken katsu; no gluten-free option is mentioned. The green salad with oil, vinegar and garlic dressing is the lightest dish.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: bacon Napolitan, meat lasagna, chicken katsu, cheese; the cucumber green salad is the only plant-based dish described.',
    hours_raw: 'Mon–Fri 11:30–14:30 (L.O. 14:00) and 16:30–22:00 (L.O. 21:00); Sat, Sun and holidays 11:30–21:00 (L.O. 20:00); closed about 28 Dec–3 Jan (Tabelog). Service charge applies. Cards, IC and QR accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, GINZATOKIDEN Bldg 3F — 5 min from JR Shimbashi Ginza exit or Ginza Stn C2',
    cuisine: 'Shōwa-era Italian since 1971 · signature Napolitan (¥900 lunch), cucumber green salad, square thin pizza · Sicilian wines', cuisine_type: 'yoshoku',
    website: 'https://www.ginza-sicilia.jp/', gmaps: gm('銀座シシリア 銀座8-3-1 GINZATOKIDENビル'), menu_url: null,
    notes: "[Italian · Shōwa-era classic since 1971] A long-loved Ginza Italian that has served the same recipes since 1971. It recently moved from a basement to a bright 38-seat third floor with big windows, all tables, and suits solo lunches. The signature is the Napolitan: a generous, sweet tomato spaghetti with bacon, ¥900 at lunch with a small soup, and grated cheese to change it up. Regulars also order the green salad (¥850), a mound of thin-sliced cucumber over lettuce with an oil, vinegar and garlic dressing, along with square thin-crust mixed pizza, basil spaghetti, lasagna, cheese fries, ajillo, pilaf and chicken katsu with demi-glace (¥1,100). One October 2026 first-timer found it nostalgic rather than memorable. 23 wines include Sicilian reds and whites.",
    chef_bio: { chef_name: null, roles: [], origin: 'Since 1971 (Tabelog); relocated and reopened (opening date of new site not given)', background: 'No source names the owner.', philosophy: '"Unchanged traditional flavors" since the Shōwa era (Tabelog listing).', specialty: 'Napolitan; cucumber green salad.',
      anecdotes: [
        { text: '"Ginza Sicilia, which relocated from the basement of the Kyoto Newspaper Ginza Building last June, is my go-to spot when I\'m craving vegetables." — October 2026.', source: R + 'B537333804/' },
        { text: '"The generous portion was rich in tomato sauce flavor and absolutely delicious. The bacon added a great touch as well." — October 2026, ¥900 Napolitan.', source: R + 'B536964619/' },
      ],
      japanese_sources_summary: '食べログ: 銀座シシリア、銀座8-3-1 GINZATOKIDENビル3F、JR新橋駅銀座口・銀座駅C2出口・内幸町駅A5出口から徒歩5分、38席(テーブルのみ)、平日11:30〜14:30・16:30〜22:00、土日祝11:30〜21:00、年末年始休、サービス料あり、カード・IC・QR可、公式サイト ginza-sicilia.jp。店の紹介: 1971年から変わらぬ昭和の味、名物ナポリタン、シチリアの赤白など23種のワイン、移転リニューアル、大きな窓の開放的な空間。2026年10月の口コミ: ナポリタン900円(スープ付き、粉チーズで味変)、名物のグリーンサラダ850円(薄切りきゅうり、オリーブオイル・酢・ニンニクのドレッシング)、チキンカツのデミグラス1,100円、四角い薄焼きのミックスピザ、バジルのスパゲッティ、ラザニア、チーズフライ、アヒージョ、ピラフ。',
      confidence: 'medium', sources: [TB, R + 'B536964619/', R + 'B537333804/', R + 'B537363770/', R + 'B537618493/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual; solo lunch friendly.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-3-1 GINZATOKIDENビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (relocated); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目3番1号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536964619/', R + 'B537333804/'],
    price_note: 'Lunch prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('ナポリタン', 'naporitan', 'Napolitan spaghetti with bacon, with soup (lunch)', '¥900', 'Pasta', 'no', 'no', 'October 2026.', 'napolitan'),
      it('グリーンサラダ', 'guriin sarada', 'Green salad: thin-sliced cucumber over lettuce, oil, vinegar and garlic dressing', '¥850', 'Salads', 'ask', 'ask', 'October 2026.', 'green_salad'),
      it('チキンカツ ライス付き', 'chikin katsu', 'Chicken katsu with demi-glace and rice', '¥1,100', 'Lunch', 'no', 'no', 'October 2026.', 'chicken_katsu'),
      it('ミックスピザ', 'mikkusu piza', 'Square thin-crust mixed pizza', '', 'Pizza', 'no', 'no', '', 'mixed_pizza'),
    ] }, {
    cuisine: '1971年からの昭和のイタリアン・名物ナポリタン(昼900円)、きゅうりのグリーンサラダ、四角い薄焼きピザ・シチリアワイン',
    neighborhood: '銀座八丁目、GINZATOKIDENビル3F。JR新橋駅銀座口・銀座駅C2出口から徒歩5分',
    gf_detail: '実際上グルテンフリーではありません。ナポリタン、四角い薄焼きピザ、ラザニア、チキンカツが中心の昭和のイタリアンで、グルテンフリーの選択肢は記載がありません。いちばん軽いのはオイル・酢・ニンニクのドレッシングのグリーンサラダです。',
    vegan_detail: '記述上はヴィーガンではありません。ベーコンのナポリタン、ラザニア、チキンカツ、チーズ。植物性で紹介されているのはきゅうりのグリーンサラダだけです。',
    notes: '[イタリアン・1971年からの昭和の味] 1971年から同じ味を守る銀座の老舗イタリアン。地下から、大きな窓の明るい3階38席(テーブルのみ)に移転し、一人の昼にも向いています。名物はナポリタンで、ベーコン入りの甘めのトマトのスパゲッティがたっぷり、昼は小さなスープ付きで900円、途中で粉チーズをかけて味変も。常連はレタスの上に薄切りきゅうりを山のように盛り、オリーブオイル・酢・ニンニクのドレッシングをかけたグリーンサラダ(850円)、四角い薄焼きのミックスピザ、バジルのスパゲッティ、ラザニア、チーズフライ、アヒージョ、ピラフ、デミグラスのチキンカツ(1,100円)なども。2026年10月の初訪問の客は、懐かしいけれど印象には残らなかったとも。ワインはシチリアの赤白など23種。',
  });
}

// ================================================================ バル＆タパス セロナ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13217805/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '22:30']);
  put({
    id: 'tokyo_bar_tapas_celona_hibiya', name: 'バル＆タパス セロナ (Bar & Tapas Celona)', category: 'OMNI',
    lat: 35.673971, lng: 139.759639,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the pintxos are served on toasted baguette; no gluten-free option is mentioned.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Chef-chosen pintxos have included vegetable ones (with cheese) and carrot râpé; no vegan option is described.',
    hours_raw: 'Mon–Thu, Sat and Sun 11:00–22:30 (L.O. 22:00); Fri 11:00–23:00; closures follow the facility (Tabelog). No cover charge. Cards, IC and QR accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: day(['11:00', '23:00']), 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tokyo Midtown Hibiya B1F, HIBIYA FOOD HALL — direct from Hibiya Stn, 5 min from Ginza Stn',
    cuisine: 'Food-hall Spanish bar · ¥1,000 senbero set (1 drink + 2 pintxos) · glasses of wine ¥390', cuisine_type: 'other',
    website: 'https://shop.create-restaurants.co.jp/0924/', gmaps: gm('バル＆タパス セロナ 東京ミッドタウン日比谷'), menu_url: null,
    notes: "[Spanish bar · Midtown Hibiya food hall] A cheerful, mostly self-service tapas bar of 38 seats in the HIBIYA FOOD HALL under Tokyo Midtown Hibiya, open all day since 2018 and run by a restaurant group. The draw is the ¥1,000 senbero set: a glass of sparkling, red or white wine or a highball with two chef-chosen pintxos on toasted baguette, such as picadillo with eggplant, prosciutto with carrot râpé, vegetable and cheese, or duck. A glass of wine alone is ¥390, with no cover charge and no need to order food. A relaxed solo stop before a train or meeting.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 March 2018 (Tabelog)', background: 'Group-run (Create Restaurants shop site).', philosophy: null, specialty: 'Senbero set; pintxos.',
      anecdotes: [
        { text: '"For just JPY 1000, you get one drink and two pintxos… A glass of wine on its own is also just JPY 390." — September 2026.', source: R + 'B504799992/' },
        { text: '"It was nice that no snacks were required and there was no cover charge." — October 2026.', source: R + 'B537034574/' },
      ],
      japanese_sources_summary: '食べログ: バル＆タパス セロナ、千代田区有楽町1-1-2 東京ミッドタウン日比谷B1F HIBIYA FOOD HALL、日比谷駅直結・銀座駅から徒歩5分、38席、月〜木・土日11:00〜22:30、金11:00〜23:00、休みは施設に準ずる、カード・IC・QR可、2018年3月29日開店、公式は create-restaurants.co.jp。2026年の口コミ: せんべろセット1,000円(スパークリング・赤白ワイン・ハイボールから1杯とおまかせピンチョス2種)、茄子のピカディージョ、生ハムとキャロットラペ、野菜とチーズ、鴨のピンチョス、トーストしたバゲット、グラスワイン390円、お通し・チャージなし、ほぼセルフサービス、一人でも入りやすい。',
      confidence: 'medium', sources: [TB, R + 'B504799992/', R + 'B536007076/', R + 'B537034574/', R + 'B537771812/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Mostly self-service; no cover charge; solo friendly.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町1-1-2 東京ミッドタウン日比谷 B1F HIBIYA FOOD HALL',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町一丁目1番 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B504799992/', R + 'B536007076/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('せんべろセット', 'senbero setto', 'Senbero set: one drink (sparkling, red, white or highball) and two chef-chosen pintxos', '¥1,000', 'Sets', 'no', 'ask', '2026.', 'senbero'),
      it('グラスワイン', '', 'Glass of wine', '¥390', 'Drinks', 'gf', 'ask', 'September 2026.', 'glass_wine'),
    ] }, {
    cuisine: 'フードホールのスペインバル・せんべろセット1,000円(1杯+ピンチョス2種)・グラスワイン390円',
    neighborhood: '東京ミッドタウン日比谷B1F、HIBIYA FOOD HALL。日比谷駅直結、銀座駅から徒歩5分',
    gf_detail: '実際上グルテンフリーではありません。ピンチョスはトーストしたバゲットにのっていて、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '要確認。おまかせのピンチョスには野菜(チーズ入り)やキャロットラペもありましたが、ヴィーガンの選択肢は書かれていません。',
    notes: '[スペインバル・ミッドタウン日比谷のフードホール] 東京ミッドタウン日比谷地下のHIBIYA FOOD HALLにある、明るくほぼセルフサービスの38席のタパスバルで、2018年から通し営業、飲食グループの店。人気はせんべろセット1,000円で、スパークリング・赤白ワイン・ハイボールから1杯と、トーストしたバゲットにのせたおまかせのピンチョス2種(茄子のピカディージョ、生ハムとキャロットラペ、野菜とチーズ、鴨など)。グラスワインだけなら390円、チャージなしで料理の注文も不要。電車や打ち合わせの前に一人で気軽に。',
  });
}

// ================================================================ 五右衛門 日比谷店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13147319/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '21:30']), we = day(['11:30', '22:00']);
  put({
    id: 'tokyo_goemon_hibiya', name: '五右衛門 日比谷店', category: 'OMNI',
    lat: 35.673848, lng: 139.7605,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat-spaghetti chain; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: cod-roe, shirasu and egg spaghetti; a vegetable peperoncino exists but no source says it is free of animal products.',
    hours_raw: 'Mon–Fri 11:30–21:30; Sat, Sun and holidays 11:30–22:00 (L.O. 21:15) (Tabelog; may change). QR-code ordering at the table. Cards, IC and PayPay accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō 1-chōme, Dai-ni Hibiya Bldg 2F — 2 min from Hibiya Stn, near Midtown Hibiya',
    cuisine: 'Japanese-style spaghetti chain (Goemon), eaten with chopsticks · cod roe, takana, vegetable peperoncino · lunch sets', cuisine_type: 'other',
    website: 'http://www.yomenya-goemon.com/', gmaps: gm('五右衛門 日比谷店 有楽町1-6-1'), menu_url: null,
    notes: "[Chain · Japanese-style spaghetti] A 30-seat branch of the Goemon spaghetti chain on the second floor of an office building near Midtown Hibiya. It's easy to miss, often nearly full at noon, and can queue after 1 p.m. on weekdays. You order by QR code at the table and eat the pasta with chopsticks. 2026 diners had the Hakata-style mentaiko and spicy takana with shirasu and a raw egg (¥1,130), a tarako pasta with soup, and a packed vegetable peperoncino. Lunch sets add a drink or dessert. Expect up to about 20 minutes for your dish.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 September 2012 (Tabelog); chain branch', background: 'Chain-run.', philosophy: null, specialty: 'Japanese-style spaghetti.',
      anecdotes: [
        { text: '"I ordered the Hakata-style pasta with mentaiko and spicy takana (JPY 1,130)… After about 20 minutes, my dish finally arrived." — April 2026.', source: R + 'B525737171/' },
        { text: '"You can place your order using the QR code on the table." — April 2026.', source: R + 'B527104140/' },
      ],
      japanese_sources_summary: '食べログ: 五右衛門 日比谷店、千代田区有楽町1-6-1 第2日比谷ビル2F、日比谷駅から徒歩2分、30席、平日11:30〜21:30、土日祝11:30〜22:00、カード・IC・PayPay可、2012年9月21日開店、公式サイト yomenya-goemon.com。2026年の口コミ: 博多風の明太子と辛子高菜としらすと生卵のパスタ1,130円、たらこのパスタ(スープ付き)、野菜のペペロンチーノ、テーブルのQRコードで注文、箸で食べるパスタ、昼はドリンクかデザート付きのセット、提供まで約20分、平日13時過ぎは行列も。',
      confidence: 'medium', sources: [TB, R + 'B525737171/', R + 'B527104140/', R + 'B531248809/', R + 'B534884507/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; quick chain pasta, but allow 20 minutes.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町1-6-1 第2日比谷ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町一丁目6番1号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525737171/', R + 'B527104140/'],
    price_note: 'Price from an April 2026 review.', last_checked: TODAY, items: [
      it('博多風 明太子と辛子高菜', '', 'Hakata-style mentaiko and spicy takana with shirasu and raw egg', '¥1,130', 'Pasta', 'no', 'no', 'April 2026.', 'mentaiko_takana'),
      it('たらこ', 'tarako', 'Tarako (cod roe) spaghetti with soup', '', 'Pasta', 'no', 'no', '', 'tarako'),
      it('野菜のペペロンチーノ', 'yasai no peperonchiino', 'Vegetable peperoncino', '', 'Pasta', 'no', 'ask', '', 'veg_peperoncino'),
    ] }, {
    cuisine: '箸で食べる和風スパゲッティのチェーン(五右衛門)・明太子、高菜、野菜のペペロンチーノ・ランチセット',
    neighborhood: '有楽町一丁目、第2日比谷ビル2F。日比谷駅から徒歩2分、ミッドタウン日比谷のそば',
    gf_detail: 'グルテンフリーではありません。小麦のスパゲッティのチェーンで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。たらこ、しらす、卵のスパゲッティ。野菜のペペロンチーノはありますが、動物性不使用かは書かれていません。',
    notes: '[チェーン・和風スパゲッティ] ミッドタウン日比谷近くのオフィスビル2階にある、スパゲッティチェーン五右衛門の30席の店。見つけにくい場所ですが昼はほぼ満席で、平日13時過ぎに並ぶことも。テーブルのQRコードで注文し、パスタは箸で。2026年の客は、しらすと生卵をのせた博多風の明太子と辛子高菜(1,130円)、スープ付きのたらこ、具だくさんの野菜のペペロンチーノなど。昼はドリンクかデザート付きのセットも。提供まで20分ほどかかることも。',
  });
}

// ================================================================ Madera
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13281196/'; const R = TB + 'dtlrvwlst/';
  const d = day(['18:00', '03:00']);
  put({
    id: 'tokyo_madera_ginza6', name: 'Madera', category: 'OMNI',
    lat: 35.669111, lng: 139.765302,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Paella and grilled lamb sit alongside pizza and pasta; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: paella, lamb, braised meats and cod-roe pasta.',
    hours_raw: 'Mon–Sat 18:00–03:00; closed Sundays and holidays (Tabelog). ¥800 charge. Cards accepted; no e-money or QR. Heated-tobacco area.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 6-chōme, Ginza S2 Bldg B1F — 2 min from Higashi-Ginza Stn exit A1',
    cuisine: 'Basement wine bar · about 100 wines, mostly Spanish · paella, pizza, pasta, grilled meats · open to 3 a.m.', cuisine_type: 'other',
    website: null, gmaps: gm('Madera 銀座6-13-4 銀座S2ビル'), menu_url: null,
    notes: "[Wine bar · late-night Spanish wine and paella] A warm basement bar of brick walls and solid wooden tables, opened in 2023 in the space of the old Aladdin Duo bar, with some former booths turned into wine cellars and semi-private rooms for six or eight. About 100 wines, focused on Spain, plus Japanese whisky and craft gin; glasses from about ¥1,300. The kitchen runs until late: paella with good crispy bits, oil and cod-roe-with-shiso pastas, pizza, wine-braised and grilled meats, and a herb-crusted roast lamb. A bottle plan for two costs ¥7,500 with a reservation. Charge ¥800.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 February 2023 (Tabelog), in the former Aladdin Duo space (2025 review)', background: 'No source names the owner.', philosophy: null, specialty: 'Spanish wine; paella.',
      anecdotes: [
        { text: '"The paella was also quite substantial! You could really taste the umami of the ingredients, and I was especially pleased that even the crispy bits were delicious." — July 2026, late-night visit.', source: R + 'B533253789/' },
        { text: '"Opened in 2023 in the underground space where Aladdin Duo used to be… Certain box seats have been transformed into wine cellars." — December 2025.', source: R + 'B519071712/' },
      ],
      japanese_sources_summary: '食べログ: Madera、銀座6-13-4 銀座S2ビルB1F、東銀座駅A1出口から徒歩2分、32席、半個室(6・8名)、月〜土18:00〜翌3:00、日祝休、チャージ800円、カード可・電子マネーとQR不可、加熱式たばこのみ喫煙可、2023年2月15日開店。店の紹介: 銀座六丁目の地下、レンガの壁と木のテーブル、スペインワイン中心に約100種、ウイスキーとクラフトジン、ピザ、パエリア、ワイン煮込みやグリル。2人で選べるボトルプラン7,500円(要予約)。口コミ: 旧 Aladdin Duo の場所(英文の口コミの表記)、グラスワイン1,300円から、子羊のロースト、パスタとピザ、2026年7月は深夜にオイルパスタ、大葉たっぷりのたらこパスタ、パエリア。',
      confidence: 'low', sources: [TB, R + 'B533253789/', R + 'B519071712/', R + 'B519415852/', R + 'B520351553/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Late-night; charge applies.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-13-4 銀座S2ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated December 2025 and July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目13番4号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B519415852/', R + 'B533253789/'],
    price_note: 'Bottle plan from Tabelog; glass price from a December 2025 review.', last_checked: TODAY, items: [
      it('ボトルワインプラン(2名)', '', 'Bottle plan for two, choose sparkling, white or red on the day (reservation)', '¥7,500', 'Plans', 'ask', 'ask', 'Tabelog.', 'bottle_plan'),
      it('パエリア', 'paeria', 'Paella', '', 'Mains', 'ask', 'no', '', 'paella'),
      it('たらこパスタ 大葉のせ', '', 'Cod-roe pasta with shiso', '', 'Pasta', 'no', 'no', '', 'tarako_pasta'),
    ] }, {
    cuisine: '地下のワインバー・スペイン中心に約100種のワイン・パエリア、ピザ、パスタ、グリル・深夜3時まで',
    neighborhood: '銀座六丁目、銀座S2ビルB1F。東銀座駅A1出口から徒歩2分',
    gf_detail: '要確認。パエリアや子羊のグリルのほかピザやパスタもあり、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。パエリア、子羊、肉の煮込み、たらこのパスタ。',
    notes: '[ワインバー・深夜のスペインワインとパエリア] レンガの壁とがっしりした木のテーブルの温かみのある地下のバーで、2023年に旧 Aladdin Duo のバーの場所に開店。かつてのボックス席の一部はワインセラーに変わり、6〜8名の半個室も。ワインはスペイン中心に約100種、ジャパニーズウイスキーやクラフトジンも、グラスは1,300円ほどから。厨房は深夜まで開いていて、おこげまで美味しいパエリア、オイルパスタや大葉たっぷりのたらこパスタ、ピザ、ワイン煮込みやグリル、ハーブの効いた子羊のロースト。2人で選べるボトルプラン7,500円(要予約)。チャージ800円。',
  });
}

save();
