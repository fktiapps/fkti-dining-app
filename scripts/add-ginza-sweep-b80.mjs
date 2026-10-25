// Ginza Station half-mile sweep (805 m), batch 80 — all-genre phase (all OMNI).
//   + Wine&Bistro barchetta 汐留シティセンター店 (¥1,200 60-min free wine tasting; weekdays)
//   + 蕎麦粉懐石 銀座てあん (soba-flour kaiseki, Shirakami buckwheat; private rooms)
//   + 桂庵 銀座三丁目店 (neighbourhood soba with rice-bowl sets; a branch)
//   + 銀座 梅林 本店 (Ginza's first tonkatsu specialist, nearing 100 years; katsudon)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ barchetta 汐留
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13282204/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:00', '23:00']);
  put({
    id: 'tokyo_barchetta_shiodome', name: 'Wine&Bistro barchetta 汐留シティセンター店 (バルケッタ)', category: 'OMNI',
    lat: 35.665507, lng: 139.760889,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bistro plates such as chicken and vegetable cream stew, lasagna and mozzarella; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken cream stew, lasagna, mozzarella.',
    hours_raw: 'Mon–Fri 17:00–23:00 (food L.O. 22:00); closed Sat, Sun and holidays (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shiodome City Center 2F (next to Menya Takeichi) — direct from Shimbashi and Shiodome Stns',
    cuisine: 'Wine bistro · ~30 wines free-pour for ¥1,200 / 60 min (+¥600 per 30 min) · dishes ¥380–1,880 · private room for 10', cuisine_type: 'other',
    website: null, gmaps: gm('barchetta 汐留シティセンター'), menu_url: null,
    notes: "[Wine bistro · all-you-can-taste wine in Shiodome] A 24-seat weekday-evening bistro on the second floor of Shiodome City Center, open since 2023. The draw is a free-pour tasting of about 30 wines for ¥1,200 for 60 minutes, extendable by ¥600 per 30 minutes. Dishes run ¥380–1,880. The chicken and vegetable cream stew is the hit; one diner found the ¥1,800 lasagna plain and unlike its menu photo. Course plans with free-flow wine and champagne suit company events, and there's a fully private room for ten. The building's signage is poor, so look for it beside Menya Takeichi.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 27 February 2023 (Tabelog)', background: 'No source names the operator.', philosophy: null, specialty: 'Wine tasting plan.',
      anecdotes: [
        { text: '"They offer nearly 30 different wines for an all-you-can-drink price of JPY 1,200 for 60 minutes… The food prices range from JPY 380 to a maximum of JPY 1,880." — February 2026.', source: R + 'B523425629/' },
        { text: '"The top recommendation is the chicken and vegetable cream stew—it\'s an unforgettable flavor!" — November 2025.', source: R + 'B517209647/' },
      ],
      japanese_sources_summary: '食べログ: Wine&Bistro barchetta 汐留シティセンター店(バルケッタ)、港区東新橋1-5-2 汐留シティセンター2F(麺屋武一の並び)、24席(カウンター4・完全個室10・テーブル10)、平日17:00〜23:00、土日祝休、2023年2月27日開店。店の紹介: 30種のワインの飲み比べが60分1,200円。口コミ: 30分ごと+600円、料理は380〜1,880円、鶏と野菜のクリーム煮込みが一番人気、ラザニア1,800円は写真と違い質素だったとの声、飲み放題付きのコースでワインとシャンパーニュ、看板が分かりにくい。',
      confidence: 'medium', sources: [TB, R + 'B523425629/', R + 'B517209647/', R + 'B502209460/', R + 'B534762489/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Weekday evenings only; hard to spot.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0021 東京都港区東新橋1-5-2 汐留シティセンター 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated February–March 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区東新橋一丁目5番 (lot) 48m (large complex); 744 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B523425629/', R + 'B534762489/'],
    price_note: 'Prices from February–March 2026 reviews and Tabelog.', last_checked: TODAY, items: [
      it('ワイン飲み比べ(60分)', '', 'Free-pour tasting of ~30 wines, 60 minutes (+¥600 per 30 min)', '¥1,200', 'Drinks', 'gf', 'ask', '2026.', 'wine_tasting'),
      it('鶏と野菜のクリーム煮込み', '', 'Chicken and vegetable cream stew', '', 'Mains', 'ask', 'no', '', 'cream_stew'),
      it('ラザニア', 'razania', 'Lasagna', '¥1,800', 'Mains', 'no', 'no', 'March 2026.', 'lasagna'),
    ] }, {
    cuisine: 'ワインビストロ・約30種のワインを60分1,200円で飲み比べ(30分ごと+600円)・料理380〜1,880円・10名の個室',
    neighborhood: '汐留シティセンター2F(麺屋武一の並び)。新橋駅・汐留駅直結',
    gf_detail: '要確認。鶏と野菜のクリーム煮込み、ラザニア、モッツァレラなどのビストロ料理で、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。鶏のクリーム煮込み、ラザニア、モッツァレラ。',
    notes: '[ワインビストロ・汐留でワインの飲み比べ放題] 汐留シティセンター2階、2023年開店の24席の平日夜だけのビストロ。目玉は約30種のワインを60分1,200円で飲み比べられるプランで、30分ごとに600円で延長できます。料理は380〜1,880円。人気は鶏と野菜のクリーム煮込みで、1,800円のラザニアは写真と違い質素だったという声も。ワインやシャンパーニュの飲み放題付きコースは会社の集まりに向き、10名の完全個室も。ビルの看板が分かりにくいので、麺屋武一の並びを目印に。',
  });
}

// ================================================================ 蕎麦粉懐石 銀座てあん
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13238911/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_ginza_tean_soba_kaiseki', name: '蕎麦粉懐石 銀座てあん (Sobako Kaiseki Ginza Tean)', category: 'OMNI',
    lat: 35.672827, lng: 139.77069,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses are built on buckwheat (soba dumplings, soba mixed with egg, duck soba with matcha soba) alongside tempura; no source says whether the soba is 100% buckwheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: clams, soft-shelled turtle, squid, duck; oden-style dashi.',
    hours_raw: 'Mon–Sat 11:30–15:00 (L.O. 13:30) and 17:00–22:00 (L.O. 21:30); closed Sundays and holidays (Tabelog). 10% service charge. Drinks ordered by smartphone (2026 review).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 1-chōme, Ginza Seiwa Bldg B1F — near Takarachō and Kyōbashi Stns',
    cuisine: 'Soba-flour kaiseki with Shirakami-mountain buckwheat · Japanese-Western courses from ¥6,000 · duck and matcha soba · private rooms for 2–8', cuisine_type: 'udon_soba',
    website: 'https://te-an.jp', gmaps: gm('蕎麦粉懐石 銀座てあん'), menu_url: null,
    notes: "[Soba kaiseki · buckwheat in every course] A 26-seat basement restaurant near Takarachō, open since 2019, serving 'sobako kaiseki'. Courses use buckwheat from Aomori's Shirakami mountains and mix Japanese and Western styles. Dishes have included soba dumplings with an oden-like simmered dish, soba folded with egg, simmered clams, soft-shelled turtle, a squid salad, soba served in a wine glass and a signature duck soba with bright-green matcha soba. Courses from ¥6,000. Private rooms for two to eight suit business dinners, and there's a counter and lunch. Drinks are ordered by smartphone, and one diner missed having dishes explained. 10% service.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 19 August 2019 (Tabelog)', background: 'Kaiseki chefs paired with Shirakami soba flour (2026 review); no owner named.', philosophy: null, specialty: 'Duck soba; soba-flour courses.',
      anecdotes: [
        { text: '"This place specializes in \'Sobako Kaiseki,\' offering soba made from Aomori\'s Shirakami mountains flour, paired with dishes crafted by skilled kaiseki chefs." — September 2026.', source: R + 'B535213062/' },
        { text: '"The main dish, duck soba, is so exquisite… the vibrant green matcha soba has a perfectly balanced flavor on its own." — September 2026.', source: R + 'B535715854/' },
      ],
      japanese_sources_summary: '食べログ: 蕎麦粉懐石 銀座てあん、銀座1-20-5 銀座清和ビルB1F、26席、個室あり、月〜土11:30〜15:00・17:00〜22:00、日祝休、サービス料10%、2019年8月19日開店、公式サイト te-an.jp。口コミ: 青森・白神山地の蕎麦粉を使い懐石の料理人が作る蕎麦粉懐石、そばがき、おでんのような煮物、卵と和えたそば、蛤の煮物、すっぽん、イカのサラダ、ワイングラスで出すそば、鴨そばと抹茶そば、コース6,000円から、2〜8名の完全個室で接待向き、ドリンクはスマホで注文、料理の説明がなかったとの声も。',
      confidence: 'medium', sources: [TB, R + 'B535213062/', R + 'B535715854/', R + 'B516931620/', R + 'B520956818/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; drinks ordered by phone.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座1-20-5 銀座清和ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated November 2025–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座一丁目20番5号 (go) 9m; 617 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520956818/', R + 'B535715854/'],
    price_note: 'Course from ¥6,000 per a January 2026 review; 10% service extra.', last_checked: TODAY, items: [
      it('蕎麦粉懐石コース', '', 'Soba-flour kaiseki course', '¥6,000〜', 'Courses', 'ask', 'no', 'January 2026.', 'course'),
      it('鴨そば(抹茶そば)', '', 'Duck soba with matcha soba', '', 'Soba', 'ask', 'no', 'September 2026.', 'duck_soba'),
      it('そばがき', 'sobagaki', 'Soba dumplings', '', 'Courses', 'ask', 'ask', 'November 2025.', 'sobagaki'),
    ] }, {
    cuisine: '白神山地の蕎麦粉の蕎麦粉懐石・和洋のコース6,000円から・鴨そばと抹茶そば・2〜8名の個室',
    neighborhood: '銀座一丁目、銀座清和ビルB1F。宝町駅・京橋駅の近く',
    gf_detail: '要確認。そばがき、卵と和えたそば、鴨そばと抹茶そばなど蕎麦粉を軸にしたコースに天ぷらも。十割かどうかは書かれていません。',
    vegan_detail: 'ヴィーガンではありません。蛤、すっぽん、イカ、鴨、おでん風のだし。',
    notes: '[蕎麦懐石・コースのすべてに蕎麦粉] 宝町近くのビル地下、2019年開店の26席の「蕎麦粉懐石」の店。青森・白神山地の蕎麦粉を使い、和と洋を融合したコースを出します。そばがきとおでんのような煮物、卵と和えたそば、蛤の煮物、すっぽん、イカのサラダ、ワイングラスで出すそば、名物の鴨そばと鮮やかな緑の抹茶そばなど。コースは6,000円から。2〜8名の個室は接待向きで、カウンターやランチも。ドリンクはスマホで注文、料理の説明がなかったという声も。サービス料10%。',
  });
}

// ================================================================ 桂庵 銀座三丁目店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13044874/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '21:00']), we = day(['11:00', '17:00']);
  put({
    id: 'tokyo_katsuraan_ginza3', name: '桂庵 銀座三丁目店 (Katsura-an)', category: 'OMNI',
    lat: 35.671076, lng: 139.767815,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soba with soy-based tsuyu, katsudon and fried-chicken bowls.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork seiro, katsudon, chicken and pork bowls; dashi tsuyu.',
    hours_raw: 'Mon–Fri 11:00–21:00; Sat, Sun and holidays 11:00–17:00; closed over New Year (Tabelog). Cash only (2026 review).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, Tōgin Bldg 1F — near Higashi-Ginza Stn',
    cuisine: 'Neighbourhood soba · hearty pork seiro · mini katsudon, chicken-don or pork-and-egg-don sets ¥1,200–1,300 · open weekends', cuisine_type: 'udon_soba',
    website: null, gmaps: gm('桂庵 銀座三丁目店'), menu_url: null,
    notes: "[Soba · everyday soba with rice-bowl sets] A 26-seat neighbourhood soba shop near Higashi-Ginza, handy because it's open on weekends when many places close. Kantō-style soba with a rich tsuyu and soba-yu at the end. Regulars order the hearty pork seiro with green onion, or half-and-half sets with a rice bowl: a mini chicken-don of freshly fried kara-age in sweet-savoury sauce (¥1,200), a new braised-pork-and-fried-egg bowl (half set ¥1,300) and katsudon (¥1,200 on a ¥50-off day). Cash only; tables are shared when busy.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 3-chōme branch (opening date not given)', background: 'A branch; no source names the operator.', philosophy: null, specialty: 'Pork seiro; soba-and-don sets.',
      anecdotes: [
        { text: '"Mini Chicken Rice Bowl Set (JPY 1,200) *Cash only… freshly fried kara-age cut into bite-sized pieces, dipped in a sweet and savory sauce." — October 2026.', source: R + 'B525789638/' },
        { text: '"The soba had a rich flavor typical of Kanto style, and I was impressed that they served soba-yu." — August 2026, Saturday.', source: R + 'B533146990/' },
      ],
      japanese_sources_summary: '食べログ: 桂庵 銀座三丁目店、銀座3-10-14 東銀ビル1F、26席(4人卓5・2人卓1)、平日11:00〜21:00、土日祝11:00〜17:00、年末年始休。2026年の口コミ: 肉せいろ(豚肉たっぷり、ねぎと)、新メニューの焼豚丼(目玉焼きのせ、ハーフセット1,300円)、ミニ鶏丼セット1,200円(揚げたての唐揚げを甘辛いタレで、現金のみ)、カツ丼セット(50円引きで1,200円)、関東風の濃いつゆ、そば湯、混雑時は相席、土曜も営業。',
      confidence: 'medium', sources: [TB, R + 'B525789638/', R + 'B533146990/', R + 'B469561855/', R + 'B500222413/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; shared tables at peak.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-10-14 東銀ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目10番14号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525789638/', R + 'B500222413/', R + 'B533146990/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('ミニ鶏丼セット', '', 'Mini chicken-don (fried kara-age in sweet sauce) with soba', '¥1,200', 'Sets', 'no', 'no', 'October 2026.', 'torido_set'),
      it('焼豚丼ハーフセット', '', 'Braised-pork and fried-egg bowl, half set with soba', '¥1,300', 'Sets', 'no', 'no', 'September 2026.', 'yakibuta_set'),
      it('肉せいろ', 'niku seiro', 'Pork seiro (cold soba with hot pork dipping broth)', '', 'Soba', 'no', 'no', '', 'niku_seiro'),
    ] }, {
    cuisine: '町のそば屋・豚肉たっぷりの肉せいろ・ミニカツ丼、鶏丼、焼豚丼のセット1,200〜1,300円・週末も営業',
    neighborhood: '銀座三丁目、東銀ビル1F。東銀座駅の近く',
    gf_detail: 'グルテンフリーではありません。醤油のつゆのそば、カツ丼、唐揚げの丼です。',
    vegan_detail: 'ヴィーガンではありません。肉せいろ、カツ丼、鶏や豚の丼、だしのつゆ。',
    notes: '[そば・丼セットの日常のそば屋] 東銀座近くの26席の町のそば屋で、多くの店が休む週末も開いているのが便利。関東風の濃いつゆで、最後にそば湯も。常連は豚肉たっぷりの肉せいろをねぎと、または丼とのセットを。揚げたての唐揚げを甘辛いタレで和えたミニ鶏丼(1,200円)、新しい目玉焼きのせの焼豚丼(ハーフセット1,300円)、カツ丼(50円引きの日で1,200円)など。現金のみ、混むと相席です。',
  });
}

// ================================================================ 銀座 梅林 本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13261638/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '21:00']);
  put({
    id: 'tokyo_ginza_bairin_honten', name: '銀座 梅林 本店 (Ginza Bairin)', category: 'OMNI',
    lat: 35.669577, lng: 139.762681,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded tonkatsu and katsudon in a sweet sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork cutlets, egg.',
    hours_raw: 'Daily 11:30–21:00 (L.O. 20:00) (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, Ginza Bairin Bldg B1F — Ginza Stn A2',
    cuisine: 'Ginza’s first tonkatsu specialist (100th year in 2027) · special tenderloin katsudon, black-pork loin katsudon ¥3,200 · freshly renovated', cuisine_type: 'katsu',
    website: 'https://ginzabairin.jp/', gmaps: gm('銀座 梅林 本店'), menu_url: null,
    notes: "[Tonkatsu · Ginza's first tonkatsu specialist] The flagship of Bairin, called the first tonkatsu specialist in Ginza and reaching its 100th anniversary in February 2027 (per a 2026 review). A freshly renovated 28-seat basement room has a 12-seat counter with five cooks behind it. Expect a short queue at noon and many overseas visitors. Katsudon is the order: the special tenderloin katsudon with an 80 g cutlet and soft egg is admired for its balance, and the black-pork loin katsudon is ¥3,200. Finely shredded sweet cabbage and a tangy sauce come with the cutlets. Generous for Ginza.",
    chef_bio: { chef_name: null, roles: [], origin: 'Flagship; one 2026 review says its 100th anniversary falls in February 2027, another calls it 90 years old', background: 'Multi-branch tonkatsu house (ginzabairin.jp).', philosophy: null, specialty: 'Katsudon.',
      anecdotes: [
        { text: '"It features a special tenderloin Katsudon topped with a perfectly soft-boiled egg… At first, I thought 80g of tenderloin cutlet might be too little, but it turned out to be just perfect." — September 2026.', source: R + 'B522173159/' },
        { text: '"Ginza Bairin, celebrating its 100th anniversary in February next year, is famous as the first tonkatsu specialty restaurant in Ginza… Black Pig Special Katsu Rice Bowl… JPY 3,200." — September 2026.', source: R + 'B536425044/' },
      ],
      japanese_sources_summary: '食べログ: 銀座 梅林 本店、銀座7-8-1 銀座梅林ビルB1F、銀座駅A2出口、28席(カウンター12・4人卓4)、毎日11:30〜21:00、公式サイト ginzabairin.jp。2026年9〜10月の口コミ: 銀座初のとんかつ専門店、来年2月に100周年、特ヒレかつ丼(80gのヒレ、半熟卵)、黒豚特ロースかつ丼(100g)3,200円、昼は15分待ち、外国人客が多い、カウンターに5人の職人、改装したばかりで清潔、細切りの甘いキャベツ、酸味のあるソース、銀座にしてはお得。',
      confidence: 'medium', sources: [TB, R + 'B522173159/', R + 'B536425044/', R + 'B536226924/', R + 'B537516023/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Short queue at noon; counter seats.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-8-1 銀座梅林ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目8番1号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536425044/', R + 'B522173159/'],
    price_note: 'Price from a September 2026 review.', last_checked: TODAY, items: [
      it('黒豚特ロースかつ丼', '', 'Black-pork special loin katsudon (100 g)', '¥3,200', 'Katsudon', 'no', 'no', 'September 2026.', 'kurobuta_don'),
      it('特ヒレかつ丼', '', 'Special tenderloin katsudon with soft egg (80 g)', '', 'Katsudon', 'no', 'no', 'September 2026.', 'hire_don'),
    ] }, {
    cuisine: '銀座初のとんかつ専門店(2027年に100周年)・特ヒレかつ丼、黒豚特ロースかつ丼3,200円・改装したばかり',
    neighborhood: '銀座七丁目、銀座梅林ビルB1F。銀座駅A2出口',
    gf_detail: 'グルテンフリーではありません。衣のとんかつと、甘いたれのかつ丼です。',
    vegan_detail: 'ヴィーガンではありません。豚肉のとんかつ、卵。',
    notes: '[とんかつ・銀座初のとんかつ専門店] 銀座で最初のとんかつ専門店といわれる梅林の本店で、2026年の口コミによれば2027年2月に100周年。改装したばかりの地下の28席で、カウンター12席の向こうに5人の職人。昼は少し並び、海外からの客も多い。頼むならかつ丼で、80gのヒレと半熟卵の特ヒレかつ丼はバランスが絶妙と評判、黒豚特ロースかつ丼は3,200円。とんかつには甘い細切りキャベツと酸味のあるソース。銀座にしては量が多めです。',
  });
}

save();
