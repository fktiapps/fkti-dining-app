// Ginza Station half-mile sweep (805 m), batch 63 — the four fetched in b62 (all OMNI).
//   + Osteria Barababao 銀座 (Venetian-style osteria, Ospitalità Italiana; Italian staff; standing-bar corner)
//   + マイアミパティオ 新橋駅前店 (Italian chain branch, 797 m — inside the radius)
//   + Susan's MEAT BALL 東京ミッドタウン日比谷 (food-hall meatball counter)
//   + Hola！ Ginza7 (Spanish bar; custom paella; smoking allowed throughout)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ Osteria Barababao 銀座
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13005913/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '15:30'], ['17:30', '23:00']), we = day(['11:30', '15:30'], ['17:00', '23:00']);
  put({
    id: 'tokyo_osteria_barababao_ginza2', name: 'Osteria Barababao 銀座 (オステリア バラババオ)', category: 'OMNI',
    lat: 35.6737, lng: 139.767172,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Prix-fixe lunches run an eight-appetizer plate, pasta, main and dessert; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: pork and fish mains, cicchetti-style appetizers; no vegan option is mentioned.',
    hours_raw: 'Mon–Fri 11:30–15:30 (L.O. 14:30) and 17:30–23:00; Sat, Sun and holidays 11:30–15:30 and 17:00–23:00 (food L.O. 21:30); standing-bar corner from the evening opening; follows building hours (Tabelog). Smoking room at the back.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 2-chōme, Ginza Treasure Bldg 9F — near Ginza-itchōme Stn',
    cuisine: 'Venetian-style osteria and wine bar · Italian staff · prix-fixe lunch with 8 appetizers · standing-bar cicchetti', cuisine_type: 'other',
    website: 'https://osteria-barababao.com/', gmaps: gm('Osteria Barababao 銀座トレシャス'), menu_url: null,
    notes: "[Italian · a Venetian back-street osteria] A 56-seat osteria recreating a Venetian back-street wine bistro, with Italian staff and the Italian government's Ospitalità Italiana mark. It has been open since 2010 on a ninth floor in the same building as Unzen. The weekend prix-fixe lunch (about ¥3,000–5,000) opens with a plate of eight appetizers, then a choice of pasta, main (diners loved the pork) and dessert. There's a queue before opening, even for those with reservations. In the evening the standing-bar corner serves small snacks with beer and wine; two people spent about ¥5,000. Some October 2026 diners found the staff brusque and one found the pasta dry.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 April 2010 (Tabelog)', background: 'Company-run; Italian staff (Tabelog listing).', philosophy: 'Genuine Venetian-style hospitality (Tabelog listing).', specialty: 'Appetizer plate; Italian wine.',
      anecdotes: [
        { text: '"The meal included a plate with 8 types of appetizers, and you could choose from several options for pasta, main dishes, and desserts!" — October 2026.', source: R + 'B538005328/' },
        { text: '"I visited for standing drinks… it cost around JPY 5,000 for two people. Perfect for a quick drink." — October 2026.', source: R + 'B537651061/' },
      ],
      japanese_sources_summary: '食べログ: Osteria Barababao 銀座(オステリア バラババオ)、銀座2-6-5 銀座トレシャス9F、56席、平日11:30〜15:30・17:30〜23:00、土日祝11:30〜15:30・17:00〜23:00、立ち飲みコーナーは夕方から、ビルの営業に準ずる、店内禁煙・奥に喫煙室、2010年4月16日開店、公式サイト osteria-barababao.com。店の紹介: イタリア政府のオスピタリタ・イタリアーナ認定、ヴェネツィアの路地裏のワインビストロを再現、イタリア人スタッフ。2026年10月の口コミ: 週末のプリフィクスランチ(前菜8種の盛り合わせ、パスタ・メイン・デザートを選択、豚のメイン)、開店前から行列、立ち飲みで前菜をつまみにビールとワイン(2人で約5,000円)、一部スタッフの態度が悪い・パスタが乾いていたとの声も。',
      confidence: 'medium', sources: [TB, R + 'B538005328/', R + 'B537613350/', R + 'B537651061/', R + 'B537887565/'] },
    cultural_comfort: { level: 'english', note: 'Italian staff; standing bar for a quick glass.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座2-6-5 銀座トレシャス 9F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座二丁目6番5号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538005328/', R + 'B537651061/'],
    price_note: 'No prices captured; reviewers spend ¥3,000–10,000.', last_checked: TODAY, items: [
      it('プリフィクスランチ', 'purifikusu ranchi', 'Prix-fixe lunch: 8-appetizer plate, choice of pasta, main and dessert', '', 'Lunch', 'no', 'no', 'October 2026.', 'prixfixe'),
      it('ヴェネツィア コース(飲み放題付き)', '', 'Venezia course with free-flow', '', 'Courses', 'ask', 'no', 'Tabelog.', 'venezia_course'),
    ] }, {
    cuisine: 'ヴェネツィア風のオステリアとワインバー・イタリア人スタッフ・前菜8種のプリフィクスランチ・立ち飲みでおつまみ',
    neighborhood: '銀座二丁目、銀座トレシャス9F。銀座一丁目駅の近く',
    gf_detail: '要確認。プリフィクスランチは前菜8種の盛り合わせ、パスタ、メイン、デザートで、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。豚や魚のメイン、前菜の盛り合わせで、ヴィーガンの選択肢は書かれていません。',
    notes: '[イタリアン・ヴェネツィアの路地裏のオステリア] ヴェネツィアの路地裏のワインビストロを再現した56席のオステリアで、イタリア人スタッフ、イタリア政府のオスピタリタ・イタリアーナ認定。2010年から、雲仙と同じビルの9階に。週末のプリフィクスランチ(3,000〜5,000円ほど)は前菜8種の盛り合わせに始まり、パスタ、メイン(豚が好評)、デザートを選べます。開店前から行列ができ、予約していても並ぶよう言われたという声も。夜は立ち飲みコーナーでおつまみとビールやワインを、2人で約5,000円。2026年10月には、スタッフの態度がそっけない、パスタが乾いていたという声も。',
  });
}

// ================================================================ マイアミパティオ 新橋駅前店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13049950/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '23:59']);
  put({
    id: 'tokyo_miami_patio_shimbashi', name: 'マイアミパティオ 新橋駅前店 (Miami Patio)', category: 'OMNI',
    lat: 35.66763, lng: 139.756732,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the lunch is a pasta set; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: daily pastas such as sakura shrimp; no vegan option is mentioned.',
    hours_raw: 'Daily 11:00–24:00 (Tabelog). No service charge. Smoking permitted throughout at dinner; designated smoking area at lunch.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shimbashi 2-chōme, Shimbashi iMark Bldg 1F — by Shimbashi Stn',
    cuisine: 'Casual Italian chain · ¥1,200 pasta lunch with salad and coffee · open all day to midnight', cuisine_type: 'other',
    website: 'http://www.miami-garden.jp/shop_shinbashi.html', gmaps: gm('マイアミパティオ 新橋駅前店'), menu_url: null,
    notes: "[Italian · Shimbashi station-front chain] A 56-seat branch of the Miami Garden group's casual Italian chain, steps from Shimbashi Station and open from 11:00 to midnight. The ¥1,200 lunch is the daily pasta (sakura shrimp in August 2026) with a generous salad, a small appetizer and a drink or coffee. It's calm after the lunch rush, and the staff are friendly. Smoking is permitted throughout at dinner, and one diner noticed a cigarette smell even at lunch. Flavours are mild.",
    chef_bio: { chef_name: null, roles: [], origin: 'Chain branch (opening date not given)', background: 'Chain-run (miami-garden.jp).', philosophy: null, specialty: 'Pasta lunch.',
      anecdotes: [
        { text: '"For today\'s lunch, the pasta of the day came with sakura shrimp, a salad, and coffee for JPY 1200." — August 2026.', source: R + 'B534682711/' },
        { text: '"Upon entering the restaurant, I noticed a strong smell of cigarettes, even though it\'s supposed to be a non-smoking establishment." — August 2026, lunch.', source: R + 'B534395196/' },
      ],
      japanese_sources_summary: '食べログ: マイアミパティオ 新橋駅前店、港区新橋2-6-2 新橋アイマークビル1F、56席、毎日11:00〜24:00、サービス料なし、分煙(ディナータイムは全席喫煙可)、公式サイト miami-garden.jp。2026年の口コミ: 日替わりパスタ(桜えび)とサラダとコーヒーで1,200円、前菜と飲み物付きのセット、サラダがたっぷり、ランチ後も落ち着いて入れる、スタッフが親切、昼もたばこの臭いがしたとの声、味は控えめ。',
      confidence: 'low', sources: [TB, R + 'B534682711/', R + 'B534395196/', R + 'B537388524/', R + 'B537483008/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed at dinner.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋2-6-2 新橋アイマークビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋二丁目6番 (lot) 19m; 797 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534682711/'],
    price_note: 'Lunch price from an August 2026 review.', last_checked: TODAY, items: [
      it('日替わりパスタランチ', 'higawari pasuta ranchi', 'Daily pasta lunch with salad and coffee', '¥1,200', 'Lunch', 'no', 'no', 'August 2026.', 'pasta_lunch'),
    ] }, {
    cuisine: '気軽なイタリアンのチェーン・サラダとコーヒー付きのパスタランチ1,200円・深夜0時まで通し営業',
    neighborhood: '新橋二丁目、新橋アイマークビル1F。新橋駅のすぐそば',
    gf_detail: '実際上グルテンフリーではありません。ランチはパスタのセットで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。桜えびなどの日替わりパスタで、ヴィーガンの選択肢は書かれていません。',
    notes: '[イタリアン・新橋駅前のチェーン] 新橋駅すぐ、マイアミガーデン系列の気軽なイタリアンの56席の店で、11時から深夜0時まで営業。ランチは1,200円で、日替わりパスタ(2026年8月は桜えび)にたっぷりのサラダ、小さな前菜、ドリンクかコーヒー付き。ランチのピークを過ぎると落ち着いていて、スタッフも親切。夜は全席喫煙可で、昼にもたばこの臭いがしたという声も。味つけは控えめです。',
  });
}

// ================================================================ Susan's MEAT BALL
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13217804/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '22:30']);
  put({
    id: 'tokyo_susans_meatball_hibiya', name: 'Susan’s MEAT BALL 東京ミッドタウン日比谷 (スーザンズ ミートボール)', category: 'OMNI',
    lat: 35.673765, lng: 139.759114,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: meatballs served on pasta, bread or burger buns; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef, pork and chicken meatballs.',
    hours_raw: 'Mon–Thu, Sat and Sun 11:00–22:30 (L.O. 21:30); Fri 11:00–23:00 (L.O. 22:00); closures follow Tokyo Midtown Hibiya (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: day(['11:00', '23:00']), 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tokyo Midtown Hibiya B1F, HIBIYA FOOD HALL — direct from Hibiya Stn, by the TOHO cinema lifts',
    cuisine: 'Meatball counter · beef, pork or basil-chicken meatballs on pasta, rice, bread or burger · ¥1,000–1,100', cuisine_type: 'other',
    website: 'http://susans-meatball.com/', gmaps: gm('Susan\'s MEAT BALL 東京ミッドタウン日比谷'), menu_url: null,
    notes: "[American · meatballs in the Midtown Hibiya food hall] A 56-seat counter in the HIBIYA FOOD HALL under Tokyo Midtown Hibiya, right by the lifts from the TOHO cinema, with its own seats plus the hall's shared ones. Open since 2018. Choose beef, pork or basil-chicken meatballs, or one of each, over pasta, rice or bread with fries or mash. Pasta sauces are tomato, chili, mushroom cream or spicy mala tomato. In 2026 the meatball pasta cost ¥1,000, a meatball burger ¥1,050 and the cheese version ¥1,100, with Carlsberg at ¥650. Diners rate the pork meatballs fluffiest. Good before or between films.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 March 2018 (Tabelog)', background: 'Food-hall counter; no source names the operator.', philosophy: null, specialty: 'Meatballs.',
      anecdotes: [
        { text: '"I had the meatball pasta a la carte for exactly JPY 1000! You can choose three meatballs from beef, pork, and basil chicken… the pork was the fluffiest." — October 2026.', source: R + 'B537833930/' },
        { text: '"For the pasta sauce, you can select from tomato sauce, chili sauce, mushroom cream sauce, or spicy mala tomato sauce." — October 2026.', source: R + 'B537353887/' },
      ],
      japanese_sources_summary: '食べログ: Susan’s MEAT BALL 東京ミッドタウン日比谷(スーザンズ ミートボール)、千代田区有楽町1-1-2 東京ミッドタウン日比谷B1F HIBIYA FOOD HALL、日比谷駅直結、56席、月〜木・土日11:00〜22:30、金11:00〜23:00、休みは施設に準ずる、2018年3月29日開店。2026年の口コミ: 牛・豚・バジルチキンのミートボールから選ぶ(3種盛りも)、パスタ・ライス・パンとポテトかマッシュ、ソースはトマト・チリ・マッシュルームクリーム・麻辣トマト、ミートボールパスタ1,000円、ミートボールバーガー1,050円、チーズ1,100円、カールスバーグ650円、豚がいちばんふわふわ、TOHOシネマズのエレベーター前。',
      confidence: 'medium', sources: [TB, R + 'B537833930/', R + 'B537353887/', R + 'B536824598/', R + 'B537844363/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Food-hall counter; quick.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町1-1-2 東京ミッドタウン日比谷 B1F HIBIYA FOOD HALL',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町一丁目1番 (lot) 53m (large complex); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537833930/', R + 'B536824598/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('ミートボールパスタ', 'miitobooru pasuta', 'Meatball pasta, choose beef, pork or basil chicken and a sauce', '¥1,000', 'Mains', 'no', 'no', 'October 2026.', 'meatball_pasta'),
      it('ミートボールバーガー', 'miitobooru baagaa', 'Meatball burger', '¥1,050', 'Mains', 'no', 'no', 'October 2026.', 'meatball_burger'),
      it('チーズミートボールバーガー', '', 'Cheese meatball burger', '¥1,100', 'Mains', 'no', 'no', 'October 2026.', 'cheese_burger'),
    ] }, {
    cuisine: 'ミートボールの店・牛、豚、バジルチキンのミートボールをパスタ、ライス、パン、バーガーで・1,000〜1,100円',
    neighborhood: '東京ミッドタウン日比谷B1F、HIBIYA FOOD HALL。日比谷駅直結、TOHOシネマズのエレベーター前',
    gf_detail: '実際上グルテンフリーではありません。ミートボールをパスタ、パン、バンズで出す店で、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。牛・豚・鶏のミートボールです。',
    notes: '[アメリカン・ミッドタウン日比谷のフードホールでミートボール] 東京ミッドタウン日比谷地下のHIBIYA FOOD HALL、TOHOシネマズからのエレベーターを降りた目の前にある56席の店で、専用席とホールの共用席を利用。2018年開店。牛・豚・バジルチキンのミートボール(3種盛りも)を選び、パスタ、ライス、パンに、ポテトかマッシュを。パスタのソースはトマト、チリ、マッシュルームクリーム、麻辣トマト。2026年はミートボールパスタ1,000円、ミートボールバーガー1,050円、チーズは1,100円、カールスバーグ650円。豚がいちばんふわふわとの声。映画の前や合間に便利です。',
  });
}

// ================================================================ Hola！ Ginza7
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13143836/'; const R = TB + 'dtlrvwlst/';
  const mt = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_hola_ginza7', name: 'Hola！ Ginza7 (オラギンザシエテ)', category: 'OMNI',
    lat: 35.670422, lng: 139.760049,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Paella is rice-based, but pinchos and ajillo come with bread; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: angel-shrimp paella, prosciutto, pinchos and ajillo.',
    hours_raw: 'Mon–Thu 11:30–15:00 and 17:00–23:00; Fri 11:30–15:00 and 17:00–04:00; Sat, Sun and holidays 11:30–22:00/23:00 all day; closed over New Year (Tabelog). Smoking allowed at all seats.',
    hours: { 0: mt, 1: mt, 2: mt, 3: mt, 4: day(['11:30', '15:00'], ['17:00', '04:00']), 5: day(['11:30', '23:00']), 6: day(['11:30', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 7-chōme, Kikumura Bldg 1F — 4 min from JR Shimbashi Ginza exit, 5 min from Ginza Stn',
    cuisine: 'Spanish bar · angel-shrimp paella or build-your-own paella · tapas, sangria, fresh cider · smoking allowed', cuisine_type: 'other',
    website: null, gmaps: gm('Hola Ginza7 銀座7-2-11'), menu_url: null,
    notes: "[Spanish bar · Ginza 7-chōme, smoking allowed] A 60-seat Spanish bar near Shimbashi, open since 2012, for parties, day drinking and late Fridays (to 4 a.m.). The signature is angel-shrimp paella, or you can choose your own ingredients for a custom paella, served about 20 minutes after ordering. Also pinchos, prosciutto, ajillo, sangria by the decanter and fresh cider, plus a paella and salad lunch set. Staff are friendly; a tip-based table magician appeared one October night. Note that smoking is allowed at every seat, and one diner found prices high, likely due to the location. About ¥5,000–8,000 at dinner.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 30 June 2012 (Tabelog)', background: 'No source names the owner.', philosophy: null, specialty: 'Paella.',
      anecdotes: [
        { text: '"It was also fun to choose my favorite ingredients for a custom paella… there was a magician performing at the tables." — October 2026.', source: R + 'B537501379/' },
        { text: '"We ordered ajillo, paella, tapas, and a decanter of sangria, and it was more than enough for the three of us." — September 2026.', source: R + 'B536834604/' },
      ],
      japanese_sources_summary: '食べログ: Hola！ Ginza7(オラギンザシエテ)、銀座7-2-11 菊村ビル1F、JR新橋駅銀座口から徒歩4分、60席(全席喫煙可)、月〜木11:30〜15:00・17:00〜23:00、金は翌4:00まで、土日祝は通し営業、年末年始休、2012年6月30日開店。店の紹介: 天使の海老のパエリア、ピンチョス、生ハム、タパス、生シードル、飲み放題の宴会プラン。2026年の口コミ: パエリアとサラダのランチセット、アヒージョ、パエリア、タパス、サングリアのデカンタ、好きな具材を選ぶパエリア(約20分)、チップ制のテーブルマジック、店内での喫煙が気になったとの声、値段は高めとの声も。',
      confidence: 'medium', sources: [TB, R + 'B537501379/', R + 'B536834604/', R + 'B536557944/', R + 'B536685734/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking at all seats; lively for groups.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-2-11 菊村ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目2番11号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B537501379/', R + 'B536557944/'],
    price_note: 'No prices captured; reviewers spend ¥5,000–8,000 at dinner.', last_checked: TODAY, items: [
      it('天使の海老のパエリア', '', 'Angel-shrimp paella', '', 'Paella', 'ask', 'no', 'The signature.', 'paella_angel'),
      it('具材を選ぶパエリア', '', 'Build-your-own paella', '', 'Paella', 'ask', 'ask', 'October 2026.', 'paella_custom'),
      it('パエリアとサラダのランチセット', '', 'Paella and salad lunch set', '', 'Lunch', 'ask', 'no', 'September 2026.', 'lunch_paella'),
    ] }, {
    cuisine: 'スペインバル・天使の海老のパエリアや具材を選ぶパエリア・タパス、サングリア、生シードル・喫煙可',
    neighborhood: '銀座七丁目、菊村ビル1F。JR新橋駅銀座口から徒歩4分、銀座駅から5分',
    gf_detail: '要確認。パエリアは米ですが、ピンチョスやアヒージョにはパンが付き、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。天使の海老のパエリア、生ハム、ピンチョス、アヒージョ。',
    notes: '[スペインバル・銀座七丁目、喫煙可] 新橋寄りの60席のスペインバルで、2012年開店。宴会や昼飲み、金曜は朝4時まで。名物は天使の海老のパエリアで、好きな具材を選ぶオリジナルのパエリアも。注文から20分ほどで出てきます。ピンチョス、生ハム、アヒージョ、デカンタのサングリア、生シードル、昼はパエリアとサラダのセットも。スタッフは親切で、10月にはチップ制のテーブルマジックも。ただし全席喫煙可で、場所柄か値段は高めと感じた客も。夜は5,000〜8,000円ほど。',
  });
}

save();
