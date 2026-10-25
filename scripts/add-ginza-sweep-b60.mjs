// Ginza Station half-mile sweep (805 m), batch 60 — next four from the non-Japanese filter (all OMNI).
//   + Turkish Restaurant Istanbul GINZA (Corridor-gai, est. 1988; Turkish chef; Tabelog ticks vegetarian options)
//   + ヌガ / Le Nougat (Paris-style bistro since 2008, à la carte, chalkboard game; reviewer mentions Bib Gourmand)
//   + Gucci Osteria da Massimo Bottura Tokyo (Gucci Namiki 4F; head chef Rafaela De Vita since 2025)
//   + 銀座イタリアン Fabi's (since 2006, basement with private rooms; prix-fixe lunch)
// Fetched for b61 (2026 reviews): TOKYO ALEWORKS 13250415, すぱじろう 13111925, トゥット イル マーレ 13160565, 銀座ZION 13124292.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ Istanbul GINZA
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13058690/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_istanbul_ginza_corridor', name: 'トルコレストラン イスタンブールGINZA (Turkish Restaurant Istanbul GINZA)', category: 'OMNI',
    lat: 35.671186, lng: 139.760029,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled kebabs and butter rice sit beside pita, cheese spring rolls, spinach crêpes and baklava; no source mentions gluten-free handling.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks vegetarian options and the meze include dips and a spinach dish, but several vegetable dishes are cheese-filled and no vegan option is named.',
    hours_raw: 'Daily 11:30–15:00 (L.O. 14:30) and 17:00–22:00 (L.O. 21:30); irregular closures (Tabelog). Takeout available. Cards, IC and QR accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, Ginza Corridor-gai 1F — 5 min from Ginza Stn exit C2',
    cuisine: 'Turkish since 1988 · meze with pita, kebab platters, baklava air-freighted from Güllüoğlu · lunch under ¥1,500', cuisine_type: 'other',
    website: 'https://istanbul.co.jp/', gmaps: gm('Istanbul GINZA 銀座コリドー街'), menu_url: null,
    notes: "[Turkish · Corridor-gai since 1988] A 44-seat Turkish restaurant on Corridor Street (8 counter seats, the rest tables) that bills itself as Japan's first, established in 1988, with a Turkish chef. Cooking is spiced rather than hot. Groups order the meze platter with pita (a spinach dish stands out), cheese-filled spring rolls and spinach crêpes, then a kebab assortment of beef, chicken, lamb and minced meat, or doner and lamb shish. Butter rice and salad come alongside. Baklava and pistachio paste are flown in through a partnership with the Istanbul sweets house Güllüoğlu, best with Turkish coffee. Efes beer, Turkish wine and pomegranate juice. The daily lunch, such as beef-salami sausage with potato stew, is under ¥1,500; free-flow courses start at ¥5,500.",
    chef_bio: { chef_name: null, roles: ['chef'], origin: 'Established 1988 (Tabelog)', background: 'Tabelog: a Turkish chef, unnamed.', philosophy: '"Authentic healthy Turkish cuisine" (Tabelog listing).', specialty: 'Kebab; baklava.',
      anecdotes: [
        { text: '"The kebab assortment included four types: beef, chicken, lamb, and minced meat… To finish, we shared baklava and Turkish coffee." — October 2026.', source: R + 'B481382670/' },
        { text: '"Not spicy at all, filled with cheese, surprisingly accompanied by a salad, and the rice was fragrant butter rice." — October 2026.', source: R + 'B536861228/' },
      ],
      japanese_sources_summary: '食べログ: Turkish Restaurant Istanbul GINZA、銀座7-2 銀座コリドー街1F、銀座駅C2出口から徒歩5分、44席(カウンター8・テーブル36)、毎日11:30〜15:00・17:00〜22:00、不定休、テイクアウト可、カード・IC・QR可、ジャンル欄に「野菜にこだわる・ベジタリアンメニューあり」、公式サイト istanbul.co.jp。店の紹介: 1988年創業、日本初のトルコ料理店、トルコ人シェフ、イスタンブールの Güllüoğlu と提携し空輸のバクラヴァとピスタチオペースト、飲み放題コース5,500円から。2026年10月の口コミ: 前菜盛り合わせとピタパン(ほうれん草の一品)、ケバブ盛り合わせ(牛・鶏・羊・ミンチ)、ドネルとシシケバブ、チーズの春巻き、ほうれん草のクレープ、バターライス、エフェスビール、トルコワイン、ざくろジュース、バクラヴァとトルココーヒー、日替わりランチ(牛サラミのソーセージとじゃがいもの煮込み)1,500円未満。',
      confidence: 'medium', sources: [TB, R + 'B481382670/', R + 'B536861228/', R + 'B537039598/', R + 'B537921437/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Turkish chef; good for groups; takeout available.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-2 銀座コリドー街 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都中央区銀座七丁目2番 (lot) 91m — address has no building number, so GSI matched only the lot centroid; Tabelog point kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B481382670/', R + 'B537039598/'],
    price_note: 'Free-flow course price from Tabelog; lunch under ¥1,500 per an October 2026 review.', last_checked: TODAY, items: [
      it('前菜盛り合わせとピタパン', '', 'Meze platter with pita bread', '', 'Meze', 'no', 'ask', '', 'meze'),
      it('ケバブ盛り合わせ', 'kebabu moriawase', 'Kebab assortment: beef, chicken, lamb and minced meat', '', 'Kebab', 'ask', 'no', '', 'kebab_platter'),
      it('バクラヴァ', 'bakurava', 'Baklava (air-freighted from Güllüoğlu)', '', 'Dessert', 'no', 'no', '', 'baklava'),
      it('飲み放題コース(2時間)', '', '2-hour free-flow course', '¥5,500〜', 'Courses', 'ask', 'ask', 'Tabelog.', 'freeflow'),
    ] }, {
    cuisine: '1988年からのトルコ料理・ピタパンと前菜、ケバブ盛り合わせ、Güllüoğlu から空輸のバクラヴァ・ランチ1,500円未満',
    neighborhood: '銀座七丁目、銀座コリドー街1F。銀座駅C2出口から徒歩5分',
    gf_detail: '要確認。グリルのケバブやバターライスのほか、ピタパン、チーズの春巻き、ほうれん草のクレープ、バクラヴァもあり、グルテンフリーの対応は書かれていません。',
    vegan_detail: '要確認。食べログではベジタリアンメニューありとされ、前菜にはディップやほうれん草の一品もありますが、野菜料理にもチーズ入りが多く、ヴィーガンの選択肢は書かれていません。',
    notes: '[トルコ料理・1988年からのコリドー街] コリドー街にある44席(カウンター8、ほかはテーブル)のトルコ料理店で、1988年創業の日本初のトルコ料理店を名乗り、シェフはトルコ人。辛さより香辛料の効いた味。グループなら、ピタパン付きの前菜盛り合わせ(ほうれん草の一品が人気)、とろけるチーズの春巻きやほうれん草のクレープ、牛・鶏・羊・ミンチのケバブ盛り合わせ、ドネルや羊のシシケバブを。バターライスとサラダも添えられます。バクラヴァとピスタチオペーストはイスタンブールの菓子店 Güllüoğlu との提携で空輸、トルココーヒーと一緒に。エフェスビール、トルコワイン、ざくろジュースも。日替わりランチ(牛サラミのソーセージとじゃがいもの煮込みなど)は1,500円未満、飲み放題コースは5,500円から。',
  });
}

// ================================================================ ヌガ / Le Nougat
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13048464/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['17:30', '23:59']), sat = day(['12:00', '16:00'], ['17:00', '23:59']), sun = day(['12:00', '16:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_le_nougat_ginza6', name: 'ヌガ (Le Nougat)', category: 'OMNI',
    lat: 35.669301, lng: 139.764899,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. À la carte bistro food: salads, tartare, bouillabaisse and steaks sit alongside cassoulet, venison en croûte and an omurice; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: game, rabbit, sakura-meat tartare, cassoulet and cheese; the carrot rémoulade and mushroom salad are the only vegetable dishes described.',
    hours_raw: 'Mon–Fri 17:30–24:00 (L.O. 23:00); Sat 12:00–16:00 and 17:00–24:00; Sun and holidays 12:00–16:00 and 17:00–23:00; open year-round except New Year (Tabelog). 10% service charge. Cards and PayPay accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: sat, 6: sun }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 6-chōme, Tokyo Ginza Bldg 1F — 3 min from Higashi-Ginza Stn exit A1',
    cuisine: 'Paris-style bistro since 2008 · à la carte, big portions · carrot salad, bouillabaisse, chalkboard game (venison, bear, rabbit)', cuisine_type: 'french',
    website: 'http://www.lenougat.jp', gmaps: gm('ヌガ Le Nougat 銀座6-12-2'), menu_url: null,
    notes: "[French bistro · à la carte] A Paris street-corner bistro of 44 seats, open since 2008, with antique decor, a terrace-like ground floor and a high-ceilinged upper room dotted with elephant ornaments. People queue before the 5 p.m. opening and it fills within half an hour, so groups of three or more should book early. Many guests are from overseas. You order à la carte from the grand menu and a chalkboard of specials. The popular carrot rémoulade comes first, then mushroom and watercress salad, sakura-meat tartare, bouillabaisse, sautéed Spanish mackerel, cassoulet (a full order serves four), rabbit with mustard sauce, Ezo venison en croûte, bear in season and an Okukuji-egg herb omurice. Portions are generous, so don't over-order. A thick wine list; 10% service charge. One reviewer notes it has held a Michelin Bib Gourmand.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 January 2008 (Tabelog)', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Carrot rémoulade; cassoulet; game.',
      anecdotes: [
        { text: '"Customers start gathering outside before the 5 PM opening, and as soon as the doors open, they rush in. It was fully booked within 30 minutes." — October 2026.', source: R + 'B537591108/' },
        { text: '"I was advised that the half portion of cassoulet would be better since the full portion serves four." — October 2026.', source: R + 'B537590676/' },
      ],
      japanese_sources_summary: '食べログ: ヌガ(Le Nougat)、銀座6-12-2 東京銀座ビル1F、東銀座駅A1出口から徒歩3分、44席、平日17:30〜24:00、土12:00〜16:00・17:00〜24:00、日祝12:00〜16:00・17:00〜23:00、年末年始以外は無休、サービス料10%、カード・PayPay可、2008年1月15日開店、ライブ演奏あり。2026年10月の口コミ: パリの街角のようなアンティーク調、2階は天井が高く象の飾り、外国人客が多い、17時前から並び30分で満席、アラカルト、黒板のおすすめ(キャロットラペ、マッシュルームとクレソンのサラダ、桜肉のタルタル、カスレ(フルは4人前)、うさぎの背肉のマスタードソース、奥久慈卵のハーブオムライス、鹿や熊も)、ブイヤベース、鰆のソテー、24か月熟成の生ハム、ニース風サラダ、蝦夷鹿ロースのパイ包み、ボリューム満点、ミシュランのビブグルマンとの記述も。',
      confidence: 'medium', sources: [TB, R + 'B537591108/', R + 'B537590676/', R + 'B537979188/', R + 'B535129326/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests; queue or book early; portions are large.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-12-2 東京銀座ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目12番2号 (go) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537590676/', R + 'B537591108/'],
    price_note: 'No prices captured; reviewers spend ¥10,000–15,000 at dinner.', last_checked: TODAY, items: [
      it('キャロットラペ', 'kyarotto rape', 'Carrot rémoulade', '', 'Starters', 'ask', 'ask', 'The popular starter.', 'carrot_rapee'),
      it('ブイヤベース', 'buiyabeesu', 'Bouillabaisse', '', 'Mains', 'ask', 'no', '', 'bouillabaisse'),
      it('カスレ(ハーフ)', 'kasure', 'Cassoulet, half portion (full serves four)', '', 'Mains', 'ask', 'no', '', 'cassoulet'),
      it('蝦夷鹿ロースのパイ包み', '', 'Ezo venison loin en croûte', '', 'Mains', 'no', 'no', '', 'venison_croute'),
    ] }, {
    cuisine: '2008年からのパリ風ビストロ・アラカルトでボリューム満点・キャロットラペ、ブイヤベース、黒板のジビエ(鹿、熊、うさぎ)',
    neighborhood: '銀座六丁目、東京銀座ビル1F。東銀座駅A1出口から徒歩3分',
    gf_detail: '要確認。アラカルトのビストロ料理で、サラダ、タルタル、ブイヤベース、ステーキのほか、カスレ、鹿のパイ包み、オムライスも。グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。ジビエ、うさぎ、桜肉のタルタル、カスレ、チーズ。野菜料理として書かれているのはキャロットラペとマッシュルームのサラダだけです。',
    notes: '[フレンチビストロ・アラカルト] 2008年開店、パリの街角のような44席のビストロで、アンティーク調の内装、テラスのような1階と、象の飾りが点在する天井の高い2階。17時の開店前から人が並び、30分で満席になるので、3人以上なら早めの予約を。外国人客も多い店です。グランドメニューと黒板のおすすめからアラカルトで。人気のキャロットラペに始まり、マッシュルームとクレソンのサラダ、桜肉のタルタル、ブイヤベース、鰆のソテー、カスレ(フルは4人前)、うさぎのマスタードソース、蝦夷鹿のパイ包み、季節には熊、奥久慈卵のハーブオムライスなど。量が多いので頼みすぎに注意。ワインリストは分厚く、サービス料10%。ミシュランのビブグルマンに選ばれたことがあるとの口コミも。',
  });
}

// ================================================================ Gucci Osteria
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13257180/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_gucci_osteria_ginza6', name: 'グッチオステリアダマッシモボットゥーラ トウキョウ (Gucci Osteria da Massimo Bottura Tokyo)', category: 'OMNI',
    lat: 35.670493, lng: 139.762162,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal tasting courses include cannolo, grissini, Hokkaido-wheat bread and ravioli; no source mentions gluten-free handling, though the kitchen has tailored dishes for guests (2026 review).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: prosciutto, cheese creams, seafood cacciucco, beef cheek.',
    hours_raw: 'Wed–Sun 11:30–15:00 and dinner 18:00–22:00 (bar from 17:00; dinner L.O. 20:30); closed Mondays and Tuesdays (Tabelog). 12% service charge. Cards accepted; no e-money or QR.',
    hours: { 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, Gucci Namiki 4F — 5 min from Ginza or Higashi-Ginza Stn',
    cuisine: 'Gucci and Massimo Bottura’s contemporary Italian · head chef Rafaela De Vita · lunch about ¥12,000, dinner tasting · non-alcoholic pairing', cuisine_type: 'other',
    website: 'https://gucciosteria.com/ja/tokyo', gmaps: gm('Gucci Osteria Tokyo グッチ並木'), menu_url: null,
    notes: "[Italian · Gucci's osteria inside Gucci Namiki] The third Gucci Osteria da Massimo Bottura, after Florence and Beverly Hills: 40 seats plus an 8-seat private room, up a green elevator inside Gucci Namiki, surrounded by emerald floral prints. Rafaela De Vita became head chef in 2025, and a returning diner noticed dish names turning more classic, around dashi and charcoal grilling. The menu changes about every three months. A September 2026 lunch ran caprese 'macarons' with basil cream, a prosciutto and cheese cannolo, grissini, truffled cauliflower gratin, Hokkaido-wheat bread and a squid-ink cacciucco. Others mention tricolour ravioli and beef cheek in red wine. A non-alcoholic pairing includes a hōjicha cocktail. Lunch was about ¥12,000 (October 2026), plus a 12% service charge; private room ¥25,000 extra.",
    chef_bio: { chef_name: 'Rafaela De Vita (head chef, per Tabelog)', roles: ['head chef'], origin: 'Opened 2 August 2021 (Tabelog); chef appointed 2025', background: 'Gucci restaurant with Massimo Bottura; Rafaela De Vita head chef since 2025 (Tabelog listing).', philosophy: 'Traditional Italian cooking meeting Japanese ingredients and culture (Tabelog listing).', specialty: 'Seasonal tasting menus.',
      anecdotes: [
        { text: '"What surprised me the most was the non-alcoholic pairing… even a cocktail made with hojicha (roasted green tea)." — October 2026.', source: R + 'B537079288/' },
        { text: '"The only notable change is the chef… focusing on keywords like \'dashi\' and \'charcoal grilling\'." — October 2026, on returning after three years.', source: R + 'B518281621/' },
      ],
      japanese_sources_summary: '食べログ: グッチオステリアダマッシモボットゥーラ トウキョウ、銀座6-6-12 グッチ並木4F、銀座駅・東銀座駅から徒歩5分、48席(メイン40・個室8、個室料25,000円)、水〜日 ランチ11:30〜15:00・ディナー18:00〜22:00(バーは17:00から)、月火休、サービス料12%、カード可・電子マネーとQR不可、2021年8月2日開店。店の紹介: フィレンツェ、ビバリーヒルズに続く世界3店舗目、2025年就任の料理長 Rafaela De Vita。2026年の口コミ: メニューは約3か月ごと、カプレーゼ風のマカロン、生ハムとチーズクリームのカンノーロ、グリッシーニ、トリュフのカリフラワーのグラタン、北海道産小麦のパン、イカ墨のカッチュッコ、三色のラビオリ、牛ほほ肉の赤ワイン煮、ほうじ茶のカクテルを含むノンアルコールペアリング、ランチ12,000円(税込・サービス料別)。',
      confidence: 'medium', sources: [TB, R + 'B536571717/', R + 'B537079288/', R + 'B518281621/', R + 'B505308144/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual clothes seen among guests; non-alcoholic pairing available.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-6-12 グッチ並木 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目6番12号 (go) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B518281621/', R + 'B536571717/'],
    price_note: 'Lunch price from an October 2026 review (tax incl., 12% service extra).', last_checked: TODAY, items: [
      it('ランチコース', 'ranchi koosu', 'Lunch tasting course', '¥12,000', 'Courses', 'ask', 'no', 'October 2026.', 'lunch'),
      it('シェフズ グランド テイスティング ディナー(7品)', '', 'Chef’s Grand Tasting dinner, 7 dishes', '', 'Courses', 'ask', 'no', 'Tabelog.', 'grand_tasting'),
      it('ノンアルコールペアリング', '', 'Non-alcoholic pairing (incl. hōjicha cocktail)', '', 'Drinks', 'ask', 'ask', 'October 2026.', 'na_pairing'),
    ] }, {
    cuisine: 'グッチとマッシモ・ボットゥーラのコンテンポラリー・イタリアン・料理長 Rafaela De Vita・ランチ約12,000円、ディナーはテイスティング・ノンアルコールペアリング',
    neighborhood: '銀座六丁目、グッチ並木4F。銀座駅・東銀座駅から徒歩5分',
    gf_detail: '要確認。季節のテイスティングコースにカンノーロ、グリッシーニ、北海道産小麦のパン、ラビオリなど。グルテンフリーの対応は書かれていませんが、客に合わせた料理を用意したとの口コミはあります(2026年)。',
    vegan_detail: '記述上はヴィーガンではありません。生ハム、チーズクリーム、魚介のカッチュッコ、牛ほほ肉。',
    notes: '[イタリアン・グッチ並木のオステリア] フィレンツェ、ビバリーヒルズに続く3店舗目の Gucci Osteria da Massimo Bottura。グッチ並木の緑のエレベーターで上がると、エメラルドの花柄に囲まれた40席と8席の個室。2025年に Rafaela De Vita が料理長になり、再訪の客は、料理名が出汁や炭火焼きを軸にしたクラシックなものに変わったと感じたそう。メニューは約3か月ごとに替わります。2026年9月のランチは、バジルクリームのカプレーゼ風マカロン、生ハムとチーズクリームのカンノーロ、グリッシーニ、トリュフのカリフラワーのグラタン、北海道産小麦のパン、イカ墨のカッチュッコなど。三色のラビオリや牛ほほ肉の赤ワイン煮の声も。ほうじ茶のカクテルを含むノンアルコールペアリングもあります。ランチは約12,000円(2026年10月)にサービス料12%、個室は25,000円追加。',
  });
}

// ================================================================ 銀座イタリアン Fabi's
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13054702/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '14:30'], ['17:30', '22:30']);
  put({
    id: 'tokyo_ginza_fabis_ginza8', name: '銀座イタリアン Fabi’s (ファビズ)', category: 'OMNI',
    lat: 35.66809, lng: 139.76136,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses run appetizers, homemade pasta and a meat or lobster main; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: caviar, foie gras, Wagyu and lobster courses.',
    hours_raw: 'Mon–Fri 11:30–14:30 (L.O. 14:00) and 17:30–22:30 (L.O. 21:30); Sat 11:00–15:30 and 18:00–22:30; Sun and holidays 11:00–15:30 and 18:00–21:30; irregular closures and New Year (Tabelog). ¥550 dinner charge. Cards, PayPay and d Barai accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['11:00', '15:30'], ['18:00', '22:30']), 6: day(['11:00', '15:30'], ['18:00', '21:30']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, GINZA888 Bldg B1F — 5 min from Ginza, Shimbashi or Shiodome Stn',
    cuisine: 'Modern Italian since 2006 · caviar, foie gras, Wagyu · private rooms · prix-fixe lunch about ¥3,000–4,000', cuisine_type: 'other',
    website: 'http://ginza-fabis.com/', gmaps: gm('銀座イタリアン Fabis 銀座8-8-8'), menu_url: null,
    notes: "[Italian · basement with private rooms] A calm, low-lit 42-seat basement Italian near Shimbashi, open since 2006, with private rooms for two to eight that suit business meals and celebrations. The kitchen uses luxury ingredients such as caviar, foie gras and Wagyu, and a sommelier picks the wines. In October 2026 diners had the popular course of colourful appetizers, homemade pasta and a roasted meat main, the chef's omakase with beef steak or lobster, and a prix-fixe lunch with a choice of pasta, main and dessert. About ¥3,000–4,000 at lunch and ¥8,000–15,000 at dinner, plus a ¥550 charge in the evening.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 23 March 2006 (Tabelog)', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Homemade pasta; luxury ingredients.',
      anecdotes: [
        { text: '"Starting with a colorful assortment of appetizers, followed by homemade pasta that highlights the natural flavors of the ingredients, and finishing with a beautifully plated main meat dish." — October 2026.', source: R + 'B537663070/' },
        { text: '"The flexibility to choose our favorite main course, pasta, and dessert was great." — October 2026, prix-fixe lunch in a private room.', source: R + 'B538010133/' },
      ],
      japanese_sources_summary: '食べログ: 銀座イタリアン Fabi’s(ファビズ)、銀座8-8-8 GINZA888ビルB1F、銀座駅・新橋駅・汐留駅から徒歩5分、42席、個室(2〜8名)、平日11:30〜14:30・17:30〜22:30、土11:00〜15:30・18:00〜22:30、日祝11:00〜15:30・18:00〜21:30、不定休・年末年始休、ディナーのみチャージ550円、カード・PayPay・d払い可、2006年3月23日開店、公式サイト ginza-fabis.com。店の紹介: キャビア、フォアグラ、和牛などの高級食材、ソムリエ厳選のワイン。2026年10月の口コミ: 人気のイタリアンコース(前菜の盛り合わせ、自家製パスタ、肉のメイン)、シェフのおまかせ(牛ステーキ、オマール)、個室でのプリフィクスランチ、昼3,000〜4,000円・夜8,000〜15,000円。',
      confidence: 'low', sources: [TB, R + 'B537663070/', R + 'B538010133/', R + 'B366865479/', R + 'B537690871/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; good for business meals.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-8-8 GINZA888ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目8番8号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537663070/', R + 'B538010133/'],
    price_note: 'No prices captured; reviewers spend ¥3,000–4,000 at lunch and ¥8,000–15,000 at dinner.', last_checked: TODAY, items: [
      it('イタリアンコース', '', 'Italian course: appetizers, homemade pasta, roasted meat main', '', 'Courses', 'no', 'no', 'October 2026.', 'course'),
      it('プリフィクスランチ', 'purifikusu ranchi', 'Prix-fixe lunch: choose pasta, main and dessert', '', 'Lunch', 'no', 'no', 'October 2026.', 'prixfixe'),
    ] }, {
    cuisine: '2006年からのモダン・イタリアン・キャビア、フォアグラ、和牛・個室あり・プリフィクスランチ3,000〜4,000円ほど',
    neighborhood: '銀座八丁目、GINZA888ビルB1F。銀座駅・新橋駅・汐留駅から徒歩5分',
    gf_detail: '要確認。前菜、自家製パスタ、肉かオマールのメインのコースで、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。キャビア、フォアグラ、和牛、オマールのコースです。',
    notes: '[イタリアン・個室のある地下] 新橋寄りの地下、照明を落とした落ち着いた42席のイタリアンで、2006年開店。2〜8名の個室があり、接待やお祝いに向いています。キャビア、フォアグラ、和牛などの高級食材を使い、ワインはソムリエが選びます。2026年10月の客は、彩りのよい前菜盛り合わせ、自家製パスタ、ローストした肉のメインの人気コースや、牛ステーキかオマールのシェフのおまかせ、パスタ・メイン・デザートを選べるプリフィクスランチを。昼は3,000〜4,000円、夜は8,000〜15,000円ほど、夜はチャージ550円。',
  });
}

save();
