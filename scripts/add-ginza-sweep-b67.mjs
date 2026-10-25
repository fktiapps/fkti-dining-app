// Ginza Station half-mile sweep (805 m), batch 67 — the four fetched in b66 (all OMNI).
//   + MEAT&WINE WINEHALL GLAMOUR 新橋 (dd-holdings.jp; free-flow + unlimited Margherita plans; 703 m)
//   + ウェンディーズ・ファーストキッチン 日比谷シャンテ前店 (burger chain)
//   + San Antonio TEX-MEX 東京ミッドタウン日比谷店 (createrestaurants.com; fajitas, tacos)
//   + メリプリンチペッサ 銀座店 (Hiroshima-ingredient Italian above the TAU antenna shop; tau-hiroshima.jp)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ GLAMOUR 新橋
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13212656/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:00', '23:00']);
  put({
    id: 'tokyo_winehall_glamour_shimbashi', name: 'MEAT&WINE WINEHALL GLAMOUR 新橋 (ワインホールグラマー)', category: 'OMNI',
    lat: 35.666541, lng: 139.759498,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: courses centre on Margherita pizza, penne, fresh pasta and fritters; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: grilled domestic sirloin, seafood, mozzarella pizza.',
    hours_raw: 'Daily 17:00–23:00 (L.O. 22:00); holiday hours may change (Tabelog). Entrance is on the outside of the building.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimbashi 2-chōme, Shimbashi Ekimae Bldg No. 1, 1F (outside entrance) — 2 min from JR Shimbashi Ginza exit',
    cuisine: 'Wine bistro for groups · domestic sirloin grill, seafood, fresh pasta · ¥3,000–4,000 free-flow plans with unlimited Margherita', cuisine_type: 'other',
    website: 'https://www.dd-holdings.jp/shops/winehallglamour/shinbashi', gmaps: gm('ワインホールグラマー 新橋駅前ビル1号館'), menu_url: null,
    notes: "[Wine bistro · Shimbashi party plans] A wood-panelled 78-seat wine bistro on the ground floor of Shimbashi Ekimae Building No. 1, run by a restaurant group since 2017. The entrance is outside; you can't get in through the building corridor. The house specialty is grilled domestic sirloin, but popular meat dishes can sell out. The draw is the cheap Tabelog plans: about ¥3,000–4,000 for free-flow drinks (including a 'grape beer') with salad, fritters, unlimited Margherita pizza, penne and dessert. Expect noisy groups and a strict end time on plans.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 9 November 2017 (Tabelog)', background: 'Group-run (dd-holdings.jp).', philosophy: null, specialty: 'Sirloin grill; party plans.',
      anecdotes: [
        { text: '"An all-you-can-drink course with unlimited Margherita pizza for just JPY 4000… The course includes a salad, fritters, Margherita pizza, penne, and dessert." — September 2026.', source: R + 'B536383940/' },
        { text: '"I had heard that the meat dishes were delicious, but unfortunately, many of the main meat options were sold out." — August 2026.', source: R + 'B534813616/' },
      ],
      japanese_sources_summary: '食べログ: MEAT&WINE WINEHALL GLAMOUR 新橋(ワインホールグラマー)、港区新橋2-20-15 新橋駅前ビル1号館1F(入口は建物の外側)、78席、毎日17:00〜23:00、2017年11月9日開店、運営 dd-holdings.jp。店の紹介: 国産サーロインのグリル、魚介、生パスタ、ソムリエ厳選のワイン、木の内装。2026年の口コミ: 飲み放題とマルゲリータ食べ放題のプラン約3,000〜4,000円(サラダ、フリット、ペンネ、デザート)、ブドウのビール、肉料理は売り切れも、団体客で騒がしい、プランの時間に厳しいとの声。',
      confidence: 'medium', sources: [TB, R + 'B536383940/', R + 'B536679956/', R + 'B534813616/', R + 'B536314804/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Party venue; enter from outside the building.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋2-20-15 新橋駅前ビル1号館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋二丁目20番 (lot) 30m; 703 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536383940/'],
    price_note: 'Plan price from a September 2026 review.', last_checked: TODAY, items: [
      it('飲み放題とマルゲリータ食べ放題のプラン', '', 'Free-flow with unlimited Margherita: salad, fritters, penne, dessert', '¥4,000', 'Plans', 'no', 'no', 'About ¥3,000–4,000, September 2026.', 'margherita_plan'),
      it('国産サーロインのグリル', '', 'Grilled domestic sirloin', '', 'Mains', 'ask', 'no', 'Can sell out.', 'sirloin'),
    ] }, {
    cuisine: '団体向けのワインビストロ・国産サーロインのグリル、魚介、生パスタ・マルゲリータ食べ放題の飲み放題プラン3,000〜4,000円',
    neighborhood: '新橋二丁目、新橋駅前ビル1号館1F(入口は外側)。JR新橋駅銀座口から徒歩2分',
    gf_detail: '実際上グルテンフリーではありません。コースはマルゲリータ、ペンネ、生パスタ、フリットが中心で、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。国産サーロインのグリル、魚介、モッツァレラのピザ。',
    notes: '[ワインビストロ・新橋の宴会プラン] 新橋駅前ビル1号館1階、木の内装の78席のワインビストロで、2017年から飲食グループが運営。入口は建物の外側で、館内の通路からは入れません。名物は国産サーロインのグリルですが、人気の肉料理は売り切れることも。人気は食べログの格安プランで、約3,000〜4,000円で飲み放題(ブドウのビールも)にサラダ、フリット、マルゲリータ食べ放題、ペンネ、デザート。団体客でにぎやかで、プランの終了時間は厳格です。',
  });
}

// ================================================================ ウェンディーズ・ファーストキッチン 日比谷シャンテ前店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13203656/'; const R = TB + 'dtlrvwlst/';
  const d = day(['07:30', '22:00']);
  put({
    id: 'tokyo_wendys_first_kitchen_hibiya', name: 'ウェンディーズ・ファーストキッチン 日比谷シャンテ前店 (Wendy’s First Kitchen)', category: 'OMNI',
    lat: 35.673793, lng: 139.760464,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: burgers on buns; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef and chicken burgers.',
    hours_raw: 'Daily 7:30–22:00 (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō 1-chōme, in front of Hibiya Chanter, by Midtown Hibiya — near Hibiya Stn',
    cuisine: 'Burger chain · spicy chicken burger, flavoured fries · sets about ¥1,300 · from 7:30 a.m.', cuisine_type: 'other',
    website: null, gmaps: gm('ウェンディーズ・ファーストキッチン 日比谷シャンテ前店'), menu_url: null,
    notes: "[Fast food · burgers by Midtown Hibiya] An 80-seat Wendy's First Kitchen opposite Hibiya Chanter and next to Midtown Hibiya, one of the few burger chains in the area, open since 2016 from 7:30 a.m. 2026 diners had the spicy chicken burger, flavoured fries and iced coffee. A burger set runs about ¥1,300, a little above other fast-food chains. Plenty of seats; service is good. Handy before a film.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 November 2016 (Tabelog); chain branch', background: 'Chain-run.', philosophy: null, specialty: 'Burgers; flavoured fries.',
      anecdotes: [
        { text: '"I ordered the A la carte Spicy Chicken Burger. While the prices are slightly higher than other fast food places, the taste was quite good." — October 2026.', source: R + 'B511096966/' },
        { text: '"The set was JPY 1,300. It seems like fast food prices have really gone up." — October 2026.', source: R + 'B537887826/' },
      ],
      japanese_sources_summary: '食べログ: ウェンディーズ・ファーストキッチン 日比谷シャンテ前店、千代田区有楽町1-6-1、80席、毎日7:30〜22:00、2016年11月18日開店。2026年10月の口コミ: スパイシーチキンバーガー、フライドポテト(フレーバーが選べる)、アイスコーヒー、セットで1,300円、ほかのファストフードより少し高め、席は多い、接客はよい、日比谷ミッドタウンの正面入口のすぐ横。',
      confidence: 'medium', sources: [TB, R + 'B511096966/', R + 'B537887826/', R + 'B537556671/', R + 'B537393264/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter-service fast food.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町1-6-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町一丁目6番1号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537887826/', R + 'B511096966/'],
    price_note: 'Set price from an October 2026 review.', last_checked: TODAY, items: [
      it('バーガーセット', 'baagaa setto', 'Burger set', '¥1,300', 'Burgers', 'no', 'no', 'October 2026.', 'burger_set'),
      it('スパイシーチキンバーガー', '', 'Spicy chicken burger', '', 'Burgers', 'no', 'no', '', 'spicy_chicken'),
      it('フライドポテト', 'furaido poteto', 'Fries with a choice of flavours', '', 'Sides', 'ask', 'ask', '', 'fries'),
    ] }, {
    cuisine: 'バーガーチェーン・スパイシーチキンバーガー、フレーバーポテト・セット約1,300円・朝7時半から',
    neighborhood: '有楽町一丁目、日比谷シャンテ前、ミッドタウン日比谷の隣。日比谷駅の近く',
    gf_detail: 'グルテンフリーではありません。バンズのバーガーで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。牛肉と鶏肉のバーガーです。',
    notes: '[ファストフード・ミッドタウン日比谷のそばのバーガー] 日比谷シャンテの向かい、ミッドタウン日比谷の隣にある80席のウェンディーズ・ファーストキッチン。このあたりでは珍しいバーガーチェーンで、2016年から朝7時半に開店。2026年の客は、スパイシーチキンバーガー、フレーバーを選べるポテト、アイスコーヒーなど。セットは約1,300円で、ほかのファストフードより少し高め。席は多く、接客は好評。映画の前に便利です。',
  });
}

// ================================================================ San Antonio TEX-MEX
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13310426/'; const R = TB + 'dtlrvwlst/';
  const mt = day(['11:00', '15:00'], ['17:00', '22:30']);
  put({
    id: 'tokyo_san_antonio_texmex_hibiya', name: 'San Antonio TEX-MEX 東京ミッドタウン日比谷店', category: 'OMNI',
    lat: 35.67428, lng: 139.759286,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fajitas and tacos may come with flour or corn tortillas, and no source says which, nor mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: chicken fajitas, tacos, ajillo.',
    hours_raw: 'Mon–Thu 11:00–15:00 and 17:00–22:30; Fri and days before holidays to 23:00; Sat 11:00–23:00; Sun and holidays 11:00–22:30; closed on building closure days (Tabelog). Split bills depend on staff (2026 review).',
    hours: { 0: mt, 1: mt, 2: mt, 3: mt, 4: day(['11:00', '15:00'], ['17:00', '23:00']), 5: day(['11:00', '23:00']), 6: day(['11:00', '22:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tokyo Midtown Hibiya B1F, HIBIYA FOOD HALL — direct from Hibiya Stn',
    cuisine: 'Tex-Mex · chicken fajitas, loaded tacos, ajillo · cocktails · lunch ¥1,000–2,000', cuisine_type: 'other',
    website: 'https://sanantoniotexmex.createrestaurants.com/', gmaps: gm('San Antonio TEX-MEX 東京ミッドタウン日比谷'), menu_url: null,
    notes: "[Tex-Mex · Midtown Hibiya food hall] An 88-seat Tex-Mex restaurant (18 at the counter) in the HIBIYA FOOD HALL under Tokyo Midtown Hibiya, opened in July 2025 by a restaurant group. Food-court-style but stylish, with generous portions. A regular keeps returning for the chicken fajitas in a spiced sauce. Others had overflowing tacos, ajillo and beer at 4 p.m., with extra spicy sauce on request. Staff are bright and the food is quick; it fills up at dinner, so book. One regular noticed split bills now depend on who's serving.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 July 2025 (Tabelog)', background: 'Group-run (createrestaurants.com).', philosophy: null, specialty: 'Fajitas.',
      anecdotes: [
        { text: '"I visited for lunch and ordered the chicken fajitas again. The sauce with its unique blend of spices is incredibly delicious and addictive." — October 2026.', source: R + 'B532241402/' },
        { text: '"Tacos: Overflowing with ingredients and delicious. Ajillo: Packed with ingredients and very tasty." — October 2026.', source: R + 'B537181738/' },
      ],
      japanese_sources_summary: '食べログ: San Antonio TEX-MEX 東京ミッドタウン日比谷店、千代田区有楽町1-1-2 東京ミッドタウン日比谷B1F HIBIYA FOOD HALL、日比谷駅直結、88席(カウンター18・テーブル70)、月〜木11:00〜15:00・17:00〜22:30、金・祝前日は23:00まで、土11:00〜23:00、日祝11:00〜22:30、施設の休館日は休み、2025年7月18日開店、運営 createrestaurants.com。2026年10月の口コミ: スパイスの効いたソースのチキンファヒータ、具だくさんのタコス、アヒージョ、16時からビール、辛いソースを持ってきてくれた、明るいスタッフと早い提供、夜はすぐ満席、ボリュームがありお得、別会計はスタッフ次第。',
      confidence: 'medium', sources: [TB, R + 'B532241402/', R + 'B537181738/', R + 'B537235948/', R + 'B537557979/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Food-hall style; book for dinner.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町1-1-2 東京ミッドタウン日比谷 B1F HIBIYA FOOD HALL',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町一丁目1番 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532241402/', R + 'B537181738/'],
    price_note: 'No prices captured; reviewers spend ¥1,000–4,000.', last_checked: TODAY, items: [
      it('チキンファヒータ', 'chikin fahiita', 'Chicken fajitas', '', 'Mains', 'ask', 'no', '', 'fajitas'),
      it('タコス', 'takosu', 'Tacos', '', 'Mains', 'ask', 'no', '', 'tacos'),
    ] }, {
    cuisine: 'テクス・メクス・チキンファヒータ、具だくさんのタコス、アヒージョ・カクテル・ランチ1,000〜2,000円',
    neighborhood: '東京ミッドタウン日比谷B1F、HIBIYA FOOD HALL。日比谷駅直結',
    gf_detail: '要確認。ファヒータやタコスのトルティーヤが小麦かコーンかは書かれておらず、グルテンフリーの対応も記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。チキンファヒータ、タコス、アヒージョ。',
    notes: '[テクス・メクス・ミッドタウン日比谷のフードホール] 東京ミッドタウン日比谷地下のHIBIYA FOOD HALLに2025年7月、飲食グループが開いた88席(カウンター18)のテクス・メクス。フードコート風ながらおしゃれで、量はたっぷり。スパイスの効いたソースのチキンファヒータを目当てに通う常連も。具だくさんのタコスやアヒージョを16時からビールと楽しむ客もいて、辛いソースも頼めます。スタッフは明るく提供も早いですが、夜はすぐ満席になるので予約を。別会計は担当者次第になったという声も。',
  });
}

// ================================================================ メリプリンチペッサ 銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13143907/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '14:30'], ['17:30', '22:00']), we = day(['12:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'tokyo_meri_principessa_ginza1', name: 'メリプリンチペッサ 銀座店 (Meri Principessa)', category: 'OMNI',
    lat: 35.674279, lng: 139.767392,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses run steamed Hiroshima oysters, a mandarin caprese and a choice of pizza or pasta; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: oysters, seafood, meat and mozzarella.',
    hours_raw: 'Mon–Fri 11:30–14:30 (L.O. 14:00) and 17:30–22:00; Sat, Sun and holidays 12:00–15:00 and 17:30–22:00; irregular closures (Tabelog). After 20:00 use the outside lift (TAU shop closes).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 1-chōme, above the Hiroshima antenna shop TAU, 3F — 1 min from Ginza-itchōme Stn',
    cuisine: 'Italian with Hiroshima ingredients · steamed oysters, mandarin caprese · ¥3,500 lunch course · free-flow courses ¥6,600–7,700 · natural wines', cuisine_type: 'other',
    website: 'http://www.tau-hiroshima.jp/shop/3f/meripri', gmaps: gm('メリプリンチペッサ 銀座 TAU'), menu_url: null,
    notes: "[Italian · Hiroshima ingredients above the TAU antenna shop] A 90-seat Italian on the third floor of TAU, Hiroshima Prefecture's antenna shop, open since 2012 (formerly Paccio). It uses Hiroshima produce under the concept 'Anchor to the table', and the room is decorated with Bingo kasuri cloth. Regulars come for oysters: the ¥3,500 lunch course includes steamed oysters, appetizers and a choice of pizza or pasta, with coffee or tea. Evening courses are served on big sharing platters, such as a caprese with Hiroshima mandarins. They come with two-hour free-flow at ¥6,600 (with sparkling) or ¥7,700. Natural wines too. Often fully booked with office groups, even on weekdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 July 2012 (Tabelog); former name Paccio', background: 'Restaurant of the Hiroshima antenna shop TAU (tau-hiroshima.jp).', philosophy: '"Anchor to the table" — connecting Hiroshima producers with diners (Tabelog listing).', specialty: 'Hiroshima oysters.',
      anecdotes: [
        { text: '"I reserved the JPY 3500 course, which allowed me to choose between pizza and pasta… it also comes with steamed oysters." — October 2026.', source: R + 'B521308696/' },
        { text: '"The first dish was a Caprese salad featuring mozzarella cheese and Hiroshima mandarins." — October 2026, ¥7,700 free-flow course.', source: R + 'B537884735/' },
      ],
      japanese_sources_summary: '食べログ: メリプリンチペッサ 銀座店(旧店名 パッチョ)、銀座1-6-10 銀座上一ビルディング3F、銀座一丁目駅から徒歩1分、90席(テーブル70・ハイテーブル10・個室10)、平日11:30〜14:30・17:30〜22:00、土日祝12:00〜15:00・17:30〜22:00、不定休、20時以降は外のエレベーターで、2012年7月16日開店。店の紹介: 広島の食材のイタリアン、「Anchor to the table」、季節の野菜・鮮魚・肉のコースと飲み放題、自然派ワイン、備後絣の内装。2026年10月の口コミ: 1階は広島のアンテナショップ「TAU」、3,500円のランチコース(ピザかパスタ、蒸し牡蠣、コーヒーか紅茶)、牡蠣が目当て、週末は予約困難、大皿で取り分けるコース(広島みかんとモッツァレラのカプレーゼ)、飲み放題付きコース7,700円・スパークリング付き6,600円、平日も満席。',
      confidence: 'medium', sources: [TB, R + 'B521308696/', R + 'B537884735/', R + 'B538023635/', R + 'B537484427/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; popular with office groups.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座1-6-10 銀座上一ビルディング 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座一丁目6番10号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B521308696/', R + 'B537884735/', R + 'B538023635/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('ランチコース', 'ranchi koosu', 'Lunch course: appetizers, steamed oysters, pizza or pasta, coffee or tea', '¥3,500', 'Lunch', 'no', 'no', 'October 2026.', 'lunch_course'),
      it('2時間飲み放題付きコース', '', 'Sharing-platter course with 2-hour free-flow', '¥7,700', 'Courses', 'ask', 'no', 'October 2026.', 'course_7700'),
      it('スパークリング飲み放題付きコース', '', 'Course with 2-hour sparkling free-flow', '¥6,600', 'Courses', 'ask', 'no', 'October 2026.', 'course_6600'),
    ] }, {
    cuisine: '広島の食材のイタリアン・蒸し牡蠣、みかんのカプレーゼ・ランチコース3,500円・飲み放題付きコース6,600〜7,700円・自然派ワイン',
    neighborhood: '銀座一丁目、広島のアンテナショップTAUの3F。銀座一丁目駅から徒歩1分',
    gf_detail: '要確認。コースは広島の蒸し牡蠣、みかんのカプレーゼ、ピザかパスタなどで、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。牡蠣、魚介、肉、モッツァレラ。',
    notes: '[イタリアン・アンテナショップTAUの上で広島の食材] 広島県のアンテナショップ「TAU」の3階、2012年開店の90席のイタリアン(旧店名パッチョ)。「Anchor to the table」をコンセプトに広島の食材を使い、店内は備後絣で彩られています。常連のお目当ては牡蠣で、3,500円のランチコースは蒸し牡蠣、前菜、ピザかパスタ、コーヒーか紅茶付き。夜は広島みかんとモッツァレラのカプレーゼなどを大皿で取り分けるコースで、2時間飲み放題付き7,700円、スパークリング付き6,600円。自然派ワインも。平日でも会社帰りの団体で満席になることが多い人気店です。',
  });
}

save();
