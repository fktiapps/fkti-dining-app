// Ginza Station half-mile sweep (805 m), batch 66 — next four from the non-Japanese filter (all OMNI).
//   + CADRAN (GINZA PLACE 7F modern French with a terrace over the Wako clock; zetton.co.jp)
//   + Opuses / オウパセズ (Royal Park Canvas Ginza 8 14F all-day French)
//   + イル・バロッコ 有楽町店 (giraud.co.jp chain; happy hour)
//   + Cafe＆Dining ballo ballo 銀座店 (Ginza Inz 1 2F cheese and wood-fired pizza; sld-inc.com)
// Fetched for b67 (2026 reviews): GLAMOUR 新橋 13212656, ウェンディーズ・ファーストキッチン 日比谷 13203656,
// San Antonio TEX-MEX 13310426, メリプリンチペッサ 13143907.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ CADRAN
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13290419/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_cadran_ginza_place', name: 'CADRAN', category: 'OMNI',
    lat: 35.670885, lng: 139.765003,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal modern French courses built around white fish, grilled fish and meat, though one course included a battered anago tempura; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: fish and meat courses.',
    hours_raw: 'Mon–Fri 11:30–15:00 and 17:00–23:00 (food L.O. 22:00); Sat 11:30–23:00; Sun and holidays 11:30–22:00; closed some August days (Tabelog).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['11:30', '23:00']), 6: day(['11:30', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'GINZA PLACE 7F, Ginza 5-chōme — direct from Ginza Stn exit A4',
    cuisine: 'Modern French with a terrace facing the Ginza crossing · ¥5,500 lunch course · courses and à la carte', cuisine_type: 'french',
    website: 'https://ginza-cadran.zetton.co.jp/', gmaps: gm('CADRAN 銀座プレイス'), menu_url: null,
    notes: "[French · terrace over the Ginza crossing] A 90-seat modern French restaurant on the seventh floor of GINZA PLACE, open since 2023 and reached directly from Ginza Station. The 26-seat terrace looks straight at Mitsukoshi and the Ginza clock tower, best from autumn into winter. Two private rooms and an 8-seat counter too. Seasonal courses lean on lightly seasoned white fish: an October 2026 dinner's favourite was a hot, crisp anago tempura, alongside grilled fish and a juicy meat main, all beautifully plated. The ¥5,500 lunch course is good value for the view, but service can drag on busy days, so leave extra time. A birthday cake for two is available.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 November 2023 (Tabelog)', background: 'Company-run (zetton.co.jp).', philosophy: null, specialty: 'Seasonal fish courses; the terrace.',
      anecdotes: [
        { text: '"Right in front of me was Ginza Mitsukoshi, and I could see the iconic clock tower of Ginza up close… I chose the JPY 5,500 course." — October 2026.', source: R + 'B537266904/' },
        { text: '"The tempura of anago (conger eel) was hot and crispy, and it was my favorite dish of the course." — October 2026, dinner.', source: R + 'B537772204/' },
      ],
      japanese_sources_summary: '食べログ: CADRAN、銀座5-8-1 銀座プレイス7F、銀座駅A4出口直結、90席(カウンター8・テラス26)、個室2、平日11:30〜15:00・17:00〜23:00、土11:30〜23:00、日祝11:30〜22:00、8月に休業日あり、2023年11月28日開店、運営 zetton.co.jp。店の紹介: 銀座を見渡すモダンフレンチ、季節の食材、コースとアラカルト、オープンテラス。2026年10月の口コミ: テラス席から銀座三越と時計塔、ランチコース5,500円、混雑時は提供に時間がかかる、白身魚中心の軽い味つけ、穴子の天ぷら、魚のグリル、肉料理、盛り付けと器が美しい、誕生日ケーキ。',
      confidence: 'medium', sources: [TB, R + 'B537266904/', R + 'B537772204/', R + 'B537858047/', R + 'B537378797/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a terrace seat; allow time for lunch.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-8-1 銀座プレイス 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目8番1号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537266904/'],
    price_note: 'Lunch price from an October 2026 review.', last_checked: TODAY, items: [
      it('ランチコース', 'ranchi koosu', 'Lunch course', '¥5,500', 'Courses', 'ask', 'no', 'October 2026.', 'lunch_course'),
      it('ディナーコース', 'dinaa koosu', 'Dinner course (white fish, anago tempura, meat)', '', 'Courses', 'ask', 'no', 'October 2026.', 'dinner_course'),
    ] }, {
    cuisine: '銀座の交差点を望むテラスのモダンフレンチ・ランチコース5,500円・コースとアラカルト',
    neighborhood: '銀座プレイス7F、銀座五丁目。銀座駅A4出口直結',
    gf_detail: '要確認。白身魚や魚のグリル、肉料理が中心の季節のモダンフレンチのコースですが、衣をつけた穴子の天ぷらが出たことも。グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。魚と肉のコースです。',
    notes: '[フレンチ・銀座の交差点を見下ろすテラス] 銀座駅直結の銀座プレイス7階、2023年開店の90席のモダンフレンチ。26席のテラスからは銀座三越と時計塔が目の前で、秋から冬が特におすすめ。個室2室とカウンター8席も。季節のコースは軽い味つけの白身魚が中心で、2026年10月のディナーでは熱々でサクサクの穴子の天ぷらが一番人気、魚のグリル、ジューシーな肉料理も盛り付けが美しいと好評。ランチコース5,500円は眺めを考えればお得ですが、混む日は料理の間隔が長いので時間に余裕を。2人で分けられる誕生日ケーキも。',
  });
}

// ================================================================ Opuses
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13230882/'; const R = TB + 'dtlrvwlst/';
  const d = day(['07:00', '22:00']);
  put({
    id: 'tokyo_opuses_canvas_ginza8', name: 'Opuses (オウパセズ)', category: 'OMNI',
    lat: 35.668152, lng: 139.762303,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog lists allergy information as available; the menu is oven-cooked seafood, vegetables and pork, but no gluten-free option is named.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: seafood and pork courses; no vegan option is mentioned.',
    hours_raw: 'Daily: breakfast 7:00–10:30, lunch 11:30–14:30, tea 14:30–17:30, dinner 17:30–22:00 (L.O. 21:30); Sundays to 21:00 (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: day(['07:00', '21:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, The Royal Park Canvas Ginza 8 14F — near Shimbashi and Ginza Stns',
    cuisine: 'Hotel all-day modern French · seafood and vegetables from a special oven · ¥4,000 share lunch course with two drinks · terrace', cuisine_type: 'french',
    website: 'https://www.canvas-ginza8.jp/restaurant/', gmaps: gm('Opuses ロイヤルパーク キャンバス 銀座8'), menu_url: null,
    notes: "[French · hotel top floor in Ginza 8-chōme] The all-day restaurant on the 14th floor of The Royal Park Canvas Ginza 8, formerly Opus, with 60 seats inside and 20 on a private terrace. Interior, tableware, art and music are designed as one. Seafood and vegetables sourced from across Japan are cooked in a special oven. The autumn 2026 share lunch course, ¥4,000 per person, includes two drinks (sparkling, red or white wine, or non-alcoholic; sparkling only once). Pork dishes stood out, and the 'shortcake' dessert looked more like panna cotta. Portions are bigger than expected. Many hotel guests are tourists. Tabelog lists allergy information. Open from breakfast.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 March 2019 (Tabelog); former name Opus', background: 'Hotel restaurant (Royal Park Canvas Ginza 8).', philosophy: 'A unified aesthetic of interior, dishes, tableware, art and music (Tabelog listing).', specialty: 'Oven-cooked seafood.',
      anecdotes: [
        { text: '"【LUNCH AUTUMN COURSE】SHARE COURSE JPY 4000 / person… surprisingly, this price includes two drinks of your choice!" — September 2026.', source: R + 'B536573791/' },
        { text: '"I initially thought the portion sizes might be small, but they turned out to be surprisingly generous." — October 2026.', source: R + 'B536858529/' },
      ],
      japanese_sources_summary: '食べログ: Opuses(オウパセズ、旧店名 Opus)、銀座8-9-4 ザ ロイヤルパーク キャンバス 銀座8 14F、80席(店内60・テラス20)、朝7:00〜10:30、ランチ11:30〜14:30、ティー14:30〜17:30、ディナー17:30〜22:00、日曜は21:00まで、無休、2019年3月20日開店、魚にこだわり、朝食あり、アレルギー表示あり。店の紹介: 全国の魚介と野菜を特製オーブンで、内装・料理・器・アート・音楽を統一したオールデイダイニング、専用テラス。2026年の口コミ: 秋のシェアランチコース1人4,000円(ドリンク2杯付き、スパークリングは1回のみ)、豚肉料理、パンナコッタのようなショートケーキ、量は意外と多い、観光客の宿泊客が多い。',
      confidence: 'medium', sources: [TB, R + 'B536573791/', R + 'B536858529/', R + 'B536613424/', R + 'B536270165/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant; terrace seating.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Tabelog lists "allergy information available".', source: TB }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-9-4 ザ ロイヤルパーク キャンバス 銀座8 14F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目9番4号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536573791/'],
    price_note: 'Lunch price from a September 2026 review.', last_checked: TODAY, items: [
      it('ランチ シェアコース(秋)', '', 'Autumn share lunch course with two drinks', '¥4,000', 'Courses', 'ask', 'no', 'Per person, September 2026.', 'share_lunch'),
    ] }, {
    cuisine: 'ホテルのオールデイ・モダンフレンチ・特製オーブンの魚介と野菜・ドリンク2杯付きのシェアランチ4,000円・テラス',
    neighborhood: '銀座八丁目、ザ ロイヤルパーク キャンバス 銀座8 14F。新橋駅・銀座駅の近く',
    gf_detail: '要確認。食べログではアレルギー表示ありとされ、オーブンで焼く魚介や野菜、豚肉の料理ですが、グルテンフリーの料理は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。魚介と豚肉のコースで、ヴィーガンの選択肢は書かれていません。',
    notes: '[フレンチ・銀座八丁目のホテル最上階] ザ ロイヤルパーク キャンバス 銀座8の14階のオールデイダイニングで、旧店名は Opus。店内60席と専用テラス20席。内装、器、アート、音楽まで統一したデザインです。全国から届く魚介と野菜を特製オーブンで調理。2026年秋のシェアランチコースは1人4,000円で、ドリンク2杯付き(スパークリング・赤白ワイン・ノンアルコール、スパークリングは1回のみ)。豚肉料理が好評で、「ショートケーキ」はパンナコッタのような見た目だったそう。量は思ったより多め。宿泊の観光客も多い店です。食べログにはアレルギー表示ありと記載。朝食から営業。',
  });
}

// ================================================================ イル・バロッコ 有楽町店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13100445/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '22:00']);
  put({
    id: 'tokyo_il_barocco_yurakucho', name: 'イル・バロッコ 有楽町店 (Il Barocco)', category: 'OMNI',
    lat: 35.673441, lng: 139.761459,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: pasta sets and snack pizzas lead the menu; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: lamb braised with plums, Margherita pizza, cheese-topped pastas.',
    hours_raw: 'Daily 11:00–22:00 (L.O. 21:00); irregular closures (Tabelog). Happy hour with half-price sparkling wine (2026 review).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō 2-chōme, 2-1-16 — between Hibiya and Yūrakuchō',
    cuisine: 'Casual Italian chain · garlicky pastas, snack pizzas · ¥1,800 pasta and drink · happy hour', cuisine_type: 'other',
    website: 'https://www.giraud.co.jp/il-barocco/', gmaps: gm('イル・バロッコ 有楽町店'), menu_url: null,
    notes: "[Italian · budget-friendly between Hibiya and Yūrakuchō] An 84-seat branch of a casual Italian chain, open all day since 2009. Diners call it good value for the area: pasta and a drink for ¥1,800, and half-price sparkling wine at happy hour. October 2026 orders included lamb braised in red wine with plums and a snack-sized Margherita pizza. The cooking is garlic-forward, and there's a good wine selection. Staff are smiling and accommodating; one diner had Parmesan served on the side on request. About ¥2,000–4,000.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 9 December 2009 (Tabelog); chain branch', background: 'Chain-run (giraud.co.jp).', philosophy: null, specialty: 'Pasta.',
      anecdotes: [
        { text: '"I happened to arrive just in time for happy hour and enjoyed sparkling wine at half price! Since I\'m not a fan of Parmesan cheese, they kindly brought it separately." — October 2026.', source: R + 'B536953790/' },
        { text: '"I had pasta and a drink for just JPY 1800! Considering the location, the price is unbeatable." — October 2026.', source: R + 'B537906593/' },
      ],
      japanese_sources_summary: '食べログ: イル・バロッコ 有楽町店、千代田区有楽町2-1-16、84席、毎日11:00〜22:00、不定休、2009年12月9日開店、運営 giraud.co.jp。2026年10月の口コミ: ハッピーアワーでスパークリングワイン半額、パルメザンを別添えにしてくれた、仔羊肉とプラムの赤ワイン煮込みソース、おつまみピザ マルゲリータ、パスタとドリンクで1,800円、ニンニクの効いた料理、ワインの種類が豊富、2,000〜4,000円。',
      confidence: 'medium', sources: [TB, R + 'B536953790/', R + 'B537906593/', R + 'B537226534/', R + 'B537974098/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual; accommodates small requests.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Parmesan served on the side on request.', source: R + 'B536953790/' }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町2-1-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町二丁目1番 (lot) 34m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537906593/', R + 'B537226534/'],
    price_note: 'Pasta-and-drink price from an October 2026 review.', last_checked: TODAY, items: [
      it('パスタとドリンク', '', 'Pasta with a drink', '¥1,800', 'Pasta', 'no', 'no', 'October 2026.', 'pasta_drink'),
      it('仔羊肉とプラムの赤ワイン煮込みソース', '', 'Lamb braised in red wine with plums', '', 'Mains', 'ask', 'no', 'October 2026.', 'lamb_plum'),
      it('おつまみピザ マルゲリータ', '', 'Snack-size Margherita pizza', '', 'Pizza', 'no', 'no', 'October 2026.', 'snack_pizza'),
    ] }, {
    cuisine: '気軽なイタリアンのチェーン・ニンニクの効いたパスタ、おつまみピザ・パスタとドリンクで1,800円・ハッピーアワー',
    neighborhood: '有楽町二丁目、2-1-16。日比谷と有楽町の間',
    gf_detail: '実際上グルテンフリーではありません。パスタのセットとおつまみピザが中心で、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。仔羊肉とプラムの赤ワイン煮込み、マルゲリータ、チーズをかけたパスタ。',
    notes: '[イタリアン・日比谷と有楽町の間で手頃に] 2009年開店、通し営業の気軽なイタリアンのチェーンの84席の店。このあたりにしてはお得との声が多く、パスタとドリンクで1,800円、ハッピーアワーにはスパークリングワインが半額。2026年10月の客は、仔羊肉とプラムの赤ワイン煮込みソースやおつまみピザのマルゲリータなど。ニンニクの効いた料理で、ワインの種類も豊富。スタッフは笑顔で融通がきき、パルメザンを別添えにしてもらった客も。2,000〜4,000円ほど。',
  });
}

// ================================================================ ballo ballo
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13148124/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '15:00'];
  put({
    id: 'tokyo_ballo_ballo_ginza_inz', name: 'Cafe＆Dining ballo ballo 銀座店 (カフェアンドダイニング バロバロ)', category: 'OMNI',
    lat: 35.674529, lng: 139.764797,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: wood-fired pizza, pasta with cheese and ajillo; Tabelog lists allergy information as available — ask for it.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a cheese-focused menu (aged-cheese Bolognese, cheese grated at the table, omurice).',
    hours_raw: 'Mon–Tue 11:30–15:00 and 17:00–22:30; Wed–Fri 11:30–15:00 and 17:00–23:00; Sat and days before holidays 11:30–23:00; Sun and holidays 11:30–22:30; follows Ginza Inz closures (Tabelog). QR ordering; PayPay and cards.',
    hours: { 0: day(L, ['17:00', '22:30']), 1: day(L, ['17:00', '22:30']), 2: day(L, ['17:00', '23:00']), 3: day(L, ['17:00', '23:00']), 4: day(L, ['17:00', '23:00']), 5: day(['11:30', '23:00']), 6: day(['11:30', '22:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza Inz 1 2F, under the expressway — direct from Ginza Stn exit C9, 2 min from Yūrakuchō',
    cuisine: 'Cheese-focused Italian dining bar · wood-fired pizza, aged-cheese Bolognese, omurice lunch ¥1,380 · sofa semi-private booths', cuisine_type: 'other',
    website: 'http://www.sld-inc.com/', gmaps: gm('ballo ballo 銀座インズ1'), menu_url: null,
    notes: "[Italian · cheese and pizza in Ginza Inz] An 85-seat dining bar on the second floor of Ginza Inz 1, under the expressway and connected to Ginza Station. It has plush sofas, many semi-private booths and a cheese theme. Waiters grate cheese over your pasta until you say stop. Wood-fired pizzas, hearty salads and a well-stocked ajillo are the evening staples. Weekday lunch sets include soup, salad and a drink: a fluffy omurice with a choice of two sauces (¥1,380) or an aged-cheese Bolognese on thick noodles. Birthday plates on request; QR-code ordering. Tabelog lists allergy information. Run by a restaurant company.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 November 2012 (Tabelog)', background: 'Company-run (sld-inc.com).', philosophy: null, specialty: 'Cheese dishes; wood-fired pizza.',
      anecdotes: [
        { text: '"They have a system where they generously sprinkle cheese on the pasta until you tell them to stop." — October 2026.', source: R + 'B537790950/' },
        { text: '"Fluffy and Creamy Omurice with a Choice of Two Luxurious Sauces (JPY 1,380). Available on weekdays only. Includes soup, salad, and a drink." — October 2026.', source: R + 'B537734213/' },
      ],
      japanese_sources_summary: '食べログ: Cafe＆Dining ballo ballo 銀座店(カフェアンドダイニング バロバロ)、中央区銀座西3-1 銀座インズ1 2F、銀座駅C9出口直結、85席、月火11:30〜15:00・17:00〜22:30、水〜金は23:00まで、土・祝前日11:30〜23:00、日祝11:30〜22:30、休みは銀座インズに準ずる、2012年11月15日開店、魚にこだわり、アレルギー表示あり、運営 sld-inc.com。店の紹介: とろけるチーズ料理、もちもちの窯焼きピザ、ふかふかのソファ席と半個室。2026年10月の口コミ: ピザとサラダはボリューム満点、具だくさんのアヒージョ、ふわとろオムライス(ソース2種から、平日限定1,380円、スープ・サラダ・ドリンク付き)、熟成チーズのボロネーゼ(太麺)、ストップと言うまでチーズをかけてくれる、誕生日プレート、QRコードで注文、PayPay可。',
      confidence: 'medium', sources: [TB, R + 'B537790950/', R + 'B537734213/', R + 'B537951611/', R + 'B536581249/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; semi-private sofa booths.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Tabelog lists "allergy information available".', source: TB }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座西3-1 銀座インズ1 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI matched only 東京都中央区銀座 (ward) — 銀座西 is a non-standard address for the Inz buildings under the expressway; Tabelog point kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537734213/', R + 'B537951611/'],
    price_note: 'Lunch price from an October 2026 review.', last_checked: TODAY, items: [
      it('ふわとろオムライス(ソース2種から)', '', 'Fluffy omurice with a choice of two sauces, with soup, salad and drink (weekday lunch)', '¥1,380', 'Lunch', 'ask', 'no', 'October 2026.', 'omurice'),
      it('熟成チーズのボロネーゼ', '', 'Aged-cheese Bolognese (thick noodles), lunch set', '', 'Lunch', 'no', 'no', 'October 2026.', 'cheese_bolognese'),
      it('窯焼きピザ', 'kamayaki piza', 'Wood-fired pizza', '', 'Pizza', 'no', 'no', '', 'pizza'),
    ] }, {
    cuisine: 'チーズが主役のイタリアンダイニングバー・窯焼きピザ、熟成チーズのボロネーゼ、オムライスのランチ1,380円・ソファの半個室',
    neighborhood: '銀座インズ1 2F、高速道路の下。銀座駅C9出口直結、有楽町駅から徒歩2分',
    gf_detail: '実際上グルテンフリーではありません。窯焼きピザ、チーズのパスタ、アヒージョが中心です。食べログにはアレルギー表示ありとあるので確認を。',
    vegan_detail: 'ヴィーガンではありません。熟成チーズのボロネーゼ、席でかけるチーズ、オムライスなどチーズ中心のメニューです。',
    notes: '[イタリアン・銀座インズのチーズとピザ] 高速道路の下、銀座駅直結の銀座インズ1の2階にある85席のダイニングバー。ふかふかのソファや半個室が多く、テーマはチーズ。パスタには「ストップ」と言うまでチーズをかけてくれます。夜は窯焼きピザ、ボリュームのあるサラダ、具だくさんのアヒージョが定番。平日のランチはスープ・サラダ・ドリンク付きで、ソース2種から選ぶふわとろオムライス(1,380円)や太麺の熟成チーズのボロネーゼなど。誕生日プレートにも対応、注文はQRコード。食べログにはアレルギー表示ありと記載。運営は飲食会社。',
  });
}

save();
