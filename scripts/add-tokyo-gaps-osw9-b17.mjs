// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 17.
//   + FREY's Famous Pizzeria (Neapolitan pizza by chef Yamaguchi, ex-SAVOY; Tabelog pizza 100 in 2017–2019 and 2021)
//   + 天吉 Ten Kichi (couple-run set-meal lunch counter of the Showa kind: ¥1,000 teishoku, cash only)
//   + RIO GRANDE GRILL 六本木 (churrasco and salad bar of Create Restaurants; one of 4 shops)
//   + 六本木田舎家 東店 Roppongi Inakaya Higashi (robatayaki since 1970; no prices on display)
//   Chain / group check (working line of 2026-11-02): RIO GRANDE GRILL's official site lists 4 shops (Roppongi, Ebisu,
//   Yokohama Bay Quarter, Ikspiari) — a small group, none in data, so Roppongi is drafted. Roppongi Inakaya runs an East
//   (this) and a West shop — a group of two, none in data. FREY's: no other branch found. None of the four is in
//   data/tokyo, osaka or kyoto by name, Tabelog id or address. No pin offsets needed (nearest neighbours 25–37 m away).
//   Tabelog URLs copied from each listing.txt line 1. No placeholder hours.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ FREY's Famous Pizzeria
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13124749/'; const R = TB + 'dtlrvwlst/';
  const L2 = day(['11:30', '14:00'], ['17:00', '21:00']); const SU = day(['11:30', '15:00'], ['17:00', '21:00']);
  put({
    id: 'tokyo_freys_famous_pizzeria_roppongi', name: "FREY's Famous Pizzeria", category: 'OMNI',
    lat: 35.665162, lng: 139.732629, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a Neapolitan pizzeria — wheat dough is the menu.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A marinara pizza is on the menu (2026 reviews), but its ingredients are not described; most pizzas use cheese.',
    hours_raw: 'Tue–Sat 11:30–14:00 (last order 13:30) and 17:00–21:00; Sun 11:30–15:00 and 17:00–21:00; holidays 11:30–15:00; closed Mondays, and on some days in summer and over New Year (Tabelog). Lunch and dinner end when the dough runs out. Holiday-Monday openings are posted on Instagram (Tabelog). 16 seats: two tables for 4 and a counter of 8 + 2. Non-smoking. Cards (VISA, Master, JCB) and iD; no QR. Booking advised — small and busy, with many international visitors (September 2026).',
    hours: { 1: L2, 2: L2, 3: L2, 4: L2, 5: L2, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 4-5-15, 1F, a back street near Tokyo Midtown — about 3–6 min from Roppongi Stn',
    cuisine: 'Neapolitan pizza from a wood-fired oven behind the counter (July 2026) · about ten pizzas, basic and special: margherita, marinara, bufala ¥1,600 (with tomato as a caprese +¥300), cheese ¥2,000, Papa\'s ¥2,200 with salami and pepper, Sunny Side Up with egg and Italian parsley; extra toppings such as spicy salami on the margherita (2026 reviews) · green salad, French fries, mushrooms · limonata ¥660, IPA ¥1,650, beer and sparkling wine (2026 reviews)',
    website: null, gmaps: gm("FREY's Famous Pizzeria 六本木"), menu_url: TB + 'dtlmenu/',
    notes: "[Pizza · Roppongi, a small Neapolitan pizzeria near Midtown] A café-like room of 16 seats on a back street by Tokyo Midtown, with a wood-fired oven behind the counter, where chef Yamaguchi — formerly of SAVOY, the Neapolitan pioneer in Azabu-Juban, per a July 2026 diner — bakes about ten pizzas: margherita and marinara, bufala, a cheese pizza, the salami-and-pepper Papa\'s and a Sunny Side Up with egg. Selected for the Tabelog pizza 100 in 2017, 2018, 2019 and 2021. One 2026 diner calls it Roppongi\'s best pizza, others a relaxed spot for pizza and beer; one found the margherita ordinary and the egg pizza salty, and lunch can feel a little pricey. Closed Mondays; it closes early when the dough runs out.",
    chef_bio: { chef_name: 'Yamaguchi (surname as written in a July 2026 review)', roles: ['Chef (July 2026 review)'], origin: null,
      background: 'A July 2026 diner writes that chef Yamaguchi previously worked at the renowned "SAVOY", which helped spread Neapolitan pizza culture from Azabu-Juban. Tabelog lists the shop in its pizza "Tabelog 100" for 2017, 2018, 2019 and 2021.',
      philosophy: null, specialty: 'Margherita and marinara from a wood-fired oven.',
      anecdotes: [
        { text: '"The Papa Pizza I had was incredibly delicious! The balance of the savory salami and the pepper\'s accent was exquisite, creating a simple yet addictive flavor." — October 2026.', source: R + 'B361306223/' },
        { text: '"The Sunny Side Up combined the mildness of the egg with the saltiness of Italian parsley beautifully!" — September 2026, lunch.', source: R + 'B536049568/' },
        { text: '"The texture of the crust was good, but while it was tasty, it didn’t leave a special impression; it felt quite ordinary." — July 2026, margherita.', source: R + 'B530935816/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): FREY\'s Famous Pizzeria、港区六本木4-5-15 1F、火〜土11:30〜14:00 (L.O.13:30)、17:00〜21:00、日11:30〜15:00、17:00〜21:00、祝11:30〜15:00、月休み (夏と年末年始に不定休)、生地がなくなり次第終了、16席 (4人テーブル2、カウンター8+2)、禁煙、カード・iD 可、ピザ 百名店 2017・2018・2019・2021。口コミ(2026年5月〜10月): 薪窯のナポリピッツァ、マルゲリータ、マリナーラ、ブッファラ1,600円、チーズ2,000円、Papa\'s 2,200円、Sunny Side Up、レモネード660円、IPA 1,650円、シェフ Yamaguchi は SAVOY 出身という声、海外の客が多い、普通だったという声も。',
      confidence: 'medium', sources: [TB, R + 'B361306223/', R + 'B462489298/', R + 'B528694387/', R + 'B530935816/', R + 'B531431457/', R + 'B531624496/', R + 'B532671834/', R + 'B533984486/', R + 'B536049568/', R + 'B536176582/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Short pizza menu; many international guests (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-5-15 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.665162, 139.732629); GSI 東京都港区六本木四丁目5番 (lot) 23m; Yakitori Rin (4-5-14) is 25 m and Shunsai Gyo Ai (4-4-3) 26 m away in other buildings; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528694387/', R + 'B536176582/'],
    price_note: 'Prices from May and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pizza bufala', '¥1,600', 'Pizza', 'no', 'no', 'May 2026 review; +¥300 with tomato as a caprese.', 'bufala'),
      it('', '', 'Cheese pizza', '¥2,000', 'Pizza', 'no', 'no', 'May 2026 review.', 'cheese'),
      it('', '', "Papa's pizza (salami, pepper)", '¥2,200', 'Pizza', 'no', 'no', 'May and October 2026 reviews.', 'papas'),
      it('', '', 'Marinara', '', 'Pizza', 'no', 'ask', 'July and September 2026 reviews.', 'marinara'),
    ] }, {
    cuisine: 'カウンターの後ろの薪窯で焼くナポリピッツァ (2026年7月)・定番とスペシャル合わせて約10種: マルゲリータ、マリナーラ、ブッファラ1,600円 (トマトを足してカプレーゼに+300円)、チーズ2,000円、サラミと胡椒の Papa\'s 2,200円、卵とイタリアンパセリの Sunny Side Up。マルゲリータに辛いサラミなどのトッピングも (2026年の口コミ)・グリーンサラダ、フライドポテト、きのこ・レモネード660円、IPA 1,650円、ビールとスパークリングワイン (2026年の口コミ)',
    neighborhood: '六本木4-5-15 1F、Tokyo Midtown 近くの裏通り。六本木駅から徒歩3〜6分',
    gf_detail: 'グルテンフリー不可。ナポリピッツァの店で、小麦の生地が中心。',
    vegan_detail: '要確認。マリナーラはあるが (2026年の口コミ)、材料の説明はない。ほとんどのピッツァにチーズを使う。',
    notes: '[ピッツァ・六本木、Midtown 近くの小さなナポリピッツァの店] Tokyo Midtown 近くの裏通り、カフェのような16席の店で、カウンターの後ろに薪窯。2026年7月の客によれば、麻布十番でナポリピッツァを広めた SAVOY 出身のシェフ Yamaguchi が、マルゲリータ、マリナーラ、ブッファラ、チーズ、サラミと胡椒の Papa\'s、卵の Sunny Side Up など約10種を焼く。ピザ 百名店 2017・2018・2019・2021。2026年には六本木いちばんのピザと書く客も、ビールと気軽に楽しめる店と書く客もいる。マルゲリータは普通、卵のピザはしょっぱい、昼にしては少し高いという声も。月曜休み、生地がなくなれば早じまい。',
  });
}

// ================================================================ 天吉
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13074372/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_ten_kichi_roppongi', name: '天吉 (Ten Kichi)', category: 'OMNI',
    lat: 35.664309, lng: 139.730849, cuisine_type: 'shokudo',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the set meals are mostly breaded or battered — tonkatsu, mixed fry, shrimp tempura, katsudon (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat, fish and egg set meals with miso soup.',
    hours_raw: 'Mon–Fri 11:30–15:00 and 18:00–22:00; closed Saturdays and Sundays; hours may change (Tabelog). Cash only (February 2026; Tabelog lists no cards, e-money or QR). Run by two people, an elderly couple — the wife cooks, the husband serves (February and April 2026) — so an order took about 15 minutes at noon (April 2026). 18 seats: 6 at the counter and tables. Smoking allowed (Tabelog). On the 2nd floor; the sign can be hard to spot (April 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Roppongi 7-13-2, アーバンビル 2F, opposite Tokyo Midtown — about 1–3 min from Roppongi Stn exit 7 (Oedo line)',
    cuisine: 'A Showa-style set-meal counter that keeps the name of a tempura shop (2025–2026 reviews) · lunch set meals ¥1,000 with rice, miso soup, natto, seaweed and pickles, about ten kinds: mixed fry (shrimp, small pork cutlet, ham cutlet), tonkatsu, pork sauté, grilled salted mackerel, stir-fries; katsudon set ¥1,200; rice in three sizes (2025–2026 reviews)',
    website: null, gmaps: gm('天吉 六本木7-13-2'), menu_url: null,
    notes: "[Set meals · Roppongi, a couple-run ¥1,000 lunch counter by Midtown] On the second floor of a building opposite Tokyo Midtown, a Showa-era room of a counter and a few tables where an elderly couple serve big ¥1,000 lunch sets to local office workers: mixed fry with shrimp, pork cutlet and ham cutlet, tonkatsu, pork sauté or grilled mackerel, each with rice, miso soup, natto, nori and pickles. Diners in 2025–2026 marvel at the portions and the price for Roppongi; one expected tempura and found set meals instead. With two people doing everything, food takes a while at noon. Cash only; weekdays only; smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'An April 2026 diner describes the shop as run by an elderly couple, the wife cooking and the husband looking after the dining room; a February 2026 diner also notes it is run by just two people. A December 2025 diner calls it a long-established tempura restaurant whose lunch is set meals. The couple are not named in the sources read.',
      philosophy: null, specialty: '¥1,000 mixed-fry set meal.',
      anecdotes: [
        { text: '"… since the restaurant is run by just two people, it may take a little time for your order to be served." — February 2026, mixed fry ¥1,000.', source: R + 'B522805074/' },
        { text: '"If you enter expecting tempura, you might feel a bit let down." — December 2025.', source: R + 'B519947308/' },
        { text: '"After a while, a plate with freshly fried Tonkatsu arrived. The portion was incredibly generous." — February 2026, tonkatsu ¥1,000.', source: R + 'B522747428/' },
      ],
      japanese_sources_summary: '食べログ: 天吉、港区六本木7-13-2 アーバンビル2F、大江戸線六本木駅から徒歩3分、日比谷線から6分、月〜金11:30〜15:00、18:00〜22:00、土日休み、変わることもある、カード・電子マネー・QR不可、18席 (カウンター6、テーブル3卓12席)、喫煙可。口コミ(2025年10月〜2026年10月): 昼の定食は1,000円でご飯、味噌汁、納豆、海苔、漬物付き、ミックスフライ (海老、カツ、ハムカツ)、とんかつ、ポークソテー、塩鯖、カツ丼セット1,200円、量が多い、現金のみ、年配のご夫婦二人で営む (奥さんが調理、ご主人が接客)、提供に時間がかかる。',
      confidence: 'medium', sources: [TB, R + 'B516657750/', R + 'B518156730/', R + 'B518356679/', R + 'B519947308/', R + 'B522747428/', R + 'B522805074/', R + 'B523210249/', R + 'B523758663/', R + 'B526999883/', R + 'B530051885/'] },
    cultural_comfort: { level: 'japanese', note: 'Lunch menu posted outside; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都港区六本木7-13-2 アーバンビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.664309, 139.730849); GSI 東京都港区六本木七丁目13番 (lot) 37m; nearest record tokyo3__409 (37 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B522747428/', R + 'B530051885/'],
    price_note: 'Lunch prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mixed fry set meal (shrimp, pork cutlet, ham cutlet)', '¥1,000', 'Lunch', 'no', 'no', 'February–April 2026 reviews.', 'mix_fry'),
      it('', '', 'Tonkatsu set meal', '¥1,000', 'Lunch', 'no', 'no', 'November 2025 and February 2026 reviews.', 'tonkatsu'),
      it('', '', 'Grilled salted mackerel set meal', '¥1,000', 'Lunch', 'ask', 'no', 'August 2026 review.', 'shiosaba'),
      it('', '', 'Katsudon set meal', '¥1,200', 'Lunch', 'no', 'no', 'July 2026 review.', 'katsudon'),
    ] }, {
    cuisine: '天ぷら屋の名前のまま、昭和の定食屋 (2025〜2026年の口コミ)・昼の定食は1,000円でご飯、味噌汁、納豆、海苔、漬物付き、約10種: ミックスフライ (海老、小さなとんかつ、ハムカツ)、とんかつ、ポークソテー、塩鯖、炒め物。カツ丼の定食1,200円。ご飯は3サイズ (2025〜2026年の口コミ)',
    neighborhood: '六本木7-13-2 アーバンビル2F、Tokyo Midtown の向かい。六本木駅7番出口 (大江戸線) から徒歩1〜3分',
    gf_detail: 'グルテンフリー不可。定食の多くはとんかつ、ミックスフライ、海老の天ぷら、カツ丼などの揚げ物 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉、魚、卵の定食と味噌汁。',
    notes: '[定食・六本木、Midtown 向かいの夫婦で営む1,000円のランチ] Tokyo Midtown の向かいのビルの2階、カウンターとテーブルの昭和の店で、年配のご夫婦が近くで働く人たちに量の多い1,000円の昼の定食を出す: 海老、とんかつ、ハムカツのミックスフライ、とんかつ、ポークソテー、塩鯖。どれもご飯、味噌汁、納豆、海苔、漬物付き。2025〜2026年の客は六本木でこの量と値段に驚き、天ぷらを期待したら定食だったという声も。二人で切り盛りするので昼は時間がかかる。現金のみ、平日のみ、喫煙可。',
  });
}

// ================================================================ RIO GRANDE GRILL 六本木
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13167392/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://riogrande.createrestaurants.com/roppongi/';
  const WD = day(['11:30', '15:00'], ['17:30', '23:00']); const SA = day(['11:30', '15:30'], ['17:00', '23:00']); const SU = day(['11:30', '15:30'], ['17:00', '22:30']);
  put({
    id: 'tokyo_rio_grande_grill_roppongi', name: 'RIO GRANDE GRILL 六本木 (RIO GRANDE GRILL Roppongi)', category: 'OMNI',
    lat: 35.661753, lng: 139.731371, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled meats are carved at the table, but the buffet includes curry, croquettes and fried dishes (2026 reviews); nothing is said about gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the salad bar is large (alfalfa, pea shoots, chickpeas, October 2026), but the meals are built around meat; feijoada is on the buffet.',
    hours_raw: 'Mon–Fri 11:30–15:00 and 17:30–23:00; Sat 11:30–15:30 and 17:00–23:00; Sun 11:30–15:30 and 17:00–22:30; open all year except 1 January; hours may change (Tabelog). A service charge may be added (Tabelog). 164 seats: 108 inside and 56 on the terrace. Non-smoking; smoking area on the 3rd floor of the building. Wheelchair accessible. Cards, e-money and QR (PayPay, Alipay, WeChat Pay and others). Samba show on Thursdays (Tabelog course). Busy at weekday lunch.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 6-6-9, ピラミデビル 1F — 1 min from Roppongi Stn exit 1A (Hibiya line)',
    cuisine: 'Brazilian churrasco: skewers of beef cuts, chicken and shrimp grilled and carved at the table, with a salad and dessert buffet (Tabelog) · dinner: wagyu plus 15 kinds of churrasco with salad and dessert buffet ¥6,690 (Tabelog course, about 50 buffet dishes incl. feijoada) · lunch: 10 kinds of churrasco with salad and dessert buffet and soft-drink bar ¥4,819; or a main with the salad bar — grilled chicken ¥1,550, beef steak ¥1,900 (July–October 2026) · buffet: salads, soup, curry, croquettes, fried banana, homemade chilli sauce (2026 reviews) · all-you-can-drink available',
    website: SITE, gmaps: gm('RIO GRANDE GRILL 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[Churrasco · Roppongi, an all-you-can-eat Brazilian grill with a terrace] A big, airy churrascaria of 164 seats with a terrace in the Pyramide building by Roppongi Hills, part of Create Restaurants' four-shop RIO GRANDE GRILL group. At dinner, servers bring skewers of wagyu, other beef cuts, chicken and shrimp to the table and carve to order, alongside a buffet of about fifty dishes with feijoada and desserts (¥6,690); lunch is a bargain for Roppongi, a grilled chicken or steak plate with the full salad bar from ¥1,550. Repeat diners come back for the salad bar; one diner wished staff managed the buffet queue at peak lunch. Samba shows on Thursdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'One of 4 RIO GRANDE GRILL shops (Roppongi, Ebisu, Yokohama Bay Quarter, Ikspiari) of Create Restaurants (official site)',
      background: 'Create Restaurants Holdings opened RIO GRANDE GRILL as a new churrasco concept in Roppongi and Yokohama on 23 April 2014 (atpress release). The official site now lists four shops. No one is named in the sources read.',
      philosophy: 'Dynamic Brazilian barbecue — churrasco of many cuts, mostly beef (official site).', specialty: 'Churrasco carved at the table; salad bar.',
      anecdotes: [
        { text: '"You choose a main dish, and the rest is all you can eat: salad, soup, curry, and dessert." — August 2026, grilled chicken lunch ¥1,550.', source: R + 'B379455771/' },
        { text: '"The salad bar offers a variety of vegetables and desserts, and the fried banana might just be the standout dish among everything served at this restaurant." — October 2026, dinner.', source: R + 'B536733758/' },
        { text: '"I\'ve been here for both lunch and dinner, and it seems that the service and side dishes are much better in the evening, possibly due to the different pricing." — August 2026.', source: R + 'B534374315/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): RIO GRANDE GRILL 六本木、港区六本木6-6-9 ピラミデビル1F、日比谷線六本木駅1A出口から徒歩1分、月〜金11:30〜15:00、17:30〜23:00、土11:30〜15:30、17:00〜23:00、日11:30〜15:30、17:00〜22:30、1月1日以外は無休、サービス料がかかる場合あり、164席 (店内108、テラス56)、禁煙 (ビル3階に喫煙所)、カード・電子マネー・QR可、ベジタリアンメニューあり。コース: 和牛と15種のシュラスコ、サラダとデザートのビュッフェ6,690円、昼の10種のシュラスコ4,819円。公式サイト: リオグランデグリル 六本木、恵比寿、横浜ベイクォーター、イクスピアリの4店。口コミ(2026年3月〜10月): 昼はグリルチキン1,550円や牛ステーキ1,900円とサラダバー、揚げバナナ、自家製のチリソース、夜はサービスがよいという声、混む時間のビュッフェの列に不満の声。',
      confidence: 'medium', sources: [TB, SITE, 'https://riogrande.createrestaurants.com/', 'https://www.atpress.ne.jp/news/44610', R + 'B379455771/', R + 'B500523954/', R + 'B533748951/', R + 'B534374315/', R + 'B535221623/', R + 'B535547104/', R + 'B536733758/', R + 'B537335478/', R + 'B537847155/', R + 'B537962020/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Buffet and table service; easy to point and choose.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木6-6-9 ピラミデビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the group\'s official site (news dated November 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.661753, 139.731371); GSI 東京都港区六本木六丁目6番 (lot) 7m; Bistro Vino (tokyo_bistro_vino_roppongi, same building) is 29 m away, so no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B500523954/', R + 'B535547104/'],
    price_note: 'Course prices from Tabelog (tax included); lunch plate prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Dinner: wagyu + 15 kinds of churrasco, salad and dessert buffet', '¥6,690', 'Course', 'ask', 'no', 'Tabelog.', 'dinner_churrasco'),
      it('', '', 'Lunch: 10 kinds of churrasco, salad and dessert buffet, soft drinks', '¥4,819', 'Lunch', 'ask', 'no', 'Tabelog.', 'lunch_churrasco'),
      it('', '', 'Lunch: grilled chicken with salad bar', '¥1,550', 'Lunch', 'ask', 'no', 'July–August 2026 reviews.', 'lunch_chicken'),
      it('', '', 'Lunch: beef steak with salad bar', '¥1,900', 'Lunch', 'ask', 'no', 'September–October 2026 reviews.', 'lunch_steak'),
    ] }, {
    cuisine: 'ブラジルのシュラスコ: 牛のいろいろな部位、鶏、海老を串で焼いてテーブルで切り分け、サラダとデザートのビュッフェ付き (食べログ)・夜: 和牛と15種のシュラスコ、サラダとデザートのビュッフェで6,690円 (食べログのコース、フェイジョアーダを含む約50品のビュッフェ)・昼: 10種のシュラスコとサラダ・デザートのビュッフェとソフトドリンクバーで4,819円、またはメインとサラダバー、グリルチキン1,550円、牛ステーキ1,900円 (2026年7〜10月)・ビュッフェ: サラダ、スープ、カレー、コロッケ、揚げバナナ、自家製のチリソース (2026年の口コミ)・飲み放題もある',
    neighborhood: '六本木6-6-9 ピラミデビル1F。日比谷線六本木駅1A出口から徒歩1分',
    gf_detail: '要確認。肉はテーブルで切り分けるが、ビュッフェにはカレー、コロッケ、揚げ物もある (2026年の口コミ)。グルテンについての説明はない。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、サラダバーも充実 (アルファルファ、豆苗、ひよこ豆、2026年10月) だが、食事は肉が中心で、ビュッフェにはフェイジョアーダもある。',
    notes: '[シュラスコ・六本木、テラス付きのブラジル料理の食べ放題] Roppongi Hills 近くのピラミデビルにある、テラス付き164席の広々としたシュラスコの店で、クリエイト・レストランツの4店の RIO GRANDE GRILL のひとつ。夜は和牛などの牛肉、鶏、海老の串をテーブルで好きなだけ切り分け、フェイジョアーダとデザートを含む約50品のビュッフェ付きで6,690円。昼は六本木にしては安く、グリルチキンやステーキにサラダバーが付いて1,550円から。サラダバー目当てで通う客もいて、混む昼にビュッフェの列を店が整理してほしいという声も。木曜はサンバショー。',
  });
}

// ================================================================ 六本木田舎家 東店
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13010471/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.roppongiinakaya.jp';
  const H = day(['17:00', '23:00']);
  put({
    id: 'tokyo_roppongi_inakaya_higashi', name: '六本木田舎家 東店 (Roppongi Inakaya Higashi)', category: 'OMNI',
    lat: 35.662551, lng: 139.734969, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Robatayaki grilled over charcoal and generally served seasoned (August 2026); finishes with cold green-tea soba (May 2026). Nothing is said about gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetables such as eggplant, corn, shiitake and asparagus are grilled to order (July 2026), but seasonings are not described; the rest is seafood and meat.',
    hours_raw: 'Daily 17:00–23:00; closed 2–7 January (Tabelog). No printed menu or prices: you choose from the ingredients laid out in front of the counter, and several 2026 diners were shocked by the bill — e.g. kinki ¥15,000, kuruma prawn ¥6,800, about ¥20,000–50,000 a head. ¥880 appetizer charge (July 2026) and 10% service. 38 seats, all at the counter; whole-shop hire. Non-smoking. Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and Alipay/WeChat Pay. Children and strollers welcome. Mostly overseas guests (2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 3-14-7, アロービル 1F — 1 min from the Roppongi-Go-Chome bus stop, 4 min from Roppongi Stn exit 5',
    cuisine: 'Robatayaki since 1970: seafood, vegetables and meat chosen from the display and grilled over charcoal by shouting grill masters, handed across on long wooden paddles (official site; 2026 reviews) · prices in July 2026: sashimi platter (small) ¥6,710, kinki ¥15,000, kuruma prawn ¥6,800, grilled eggplant ¥770, corn ¥1,320, shiitake ¥990, asparagus ¥990, sawagani ¥1,100 · sweet shrimp at ¥4,000–6,800 each (June and August 2026); a mochi-pounding show and mochi (August–September 2026); cold green-tea soba to finish (May 2026) · Yamazaki highball ¥3,000 (August 2026)',
    website: SITE, gmaps: gm('六本木田舎家 東店'), menu_url: null,
    notes: "[Robatayaki · Roppongi, the 1970 robata theatre with no price list] Since 1970 Roppongi Inakaya has staged robatayaki as a show: guests sit along a 38-seat counter facing a bank of fresh seafood, vegetables and meat, point at what to have, and grill masters roast it over charcoal with loud calls and pass it across on long wooden paddles. Diners in 2026 say former President Trump and Prime Minister Abe ate here and that most guests now come from overseas; diners praise the prawns, the kinki and the closing green-tea soba, and the mochi-pounding — but there are no prices on display and many were stunned by bills of ¥20,000–50,000 a head (a kinki ¥15,000, a prawn ¥6,800). The East shop; a West shop is nearby.",
    chef_bio: { chef_name: null, roles: [], origin: 'Roppongi Inakaya, established 1970 (official site); East shop of two (East and West)',
      background: 'The official site describes Roppongi Inakaya as a robatayaki izakaya founded in 1970 (Showa 45) that has welcomed heads of state and famous guests. Reviewers in May and September 2026 say former President Trump and former Prime Minister Shinzo Abe dined here. No one is named in the sources read.',
      philosophy: null, specialty: 'Robatayaki served on wooden paddles; kinki; kuruma prawns.',
      anecdotes: [
        { text: '"It all starts with the classic question, "How many shrimp would you like?" and these shrimp are simply outstanding." — May 2026, business dinner.', source: R + 'B528367594/' },
        { text: '"There’s no menu book; instead, the options are displayed on the wall and on a tray in front of you, making it a bit challenging to decide what to order." — January 2026 visit.', source: R + 'B520535381/' },
        { text: '"Without any prices listed on the menu, it’s hard to gauge the current costs, which makes it feel like the value isn’t great." — June 2026, over ¥50,000 for two.', source: R + 'B520535381/' },
      ],
      japanese_sources_summary: '公式サイト (roppongiinakaya.jp): 六本木田舎家は昭和45年創業の炉端焼きの居酒屋、米国大統領など各国の要人や著名人が訪れる。食べログ (店舗会員): 六本木田舎家 東店、港区六本木3-14-7 アロービル1F、都バス「Roppongi-Go-Chome」から徒歩1分、六本木駅5番出口から4分、毎日17:00〜23:00、1月2〜7日休み、サービス料10%、38席 (すべてカウンター)、貸切可、禁煙、カード・Alipay・WeChat Pay 可、子ども可。口コミ(2025年12月〜2026年9月): メニューや値段の表示がなく目の前の食材から選ぶ、炭火の炉端で焼き長いへらで渡す、キンキ15,000円、車海老6,800円、刺身盛り合わせ (小) 6,710円、お通し880円、1人20,000〜50,000円、餅つき、締めの冷たい茶そば、海外の客が多い、元大統領 Trump と元首相 Abe が訪れたという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B518424594/', R + 'B520535381/', R + 'B525154941/', R + 'B528367594/', R + 'B531020100/', R + 'B532199244/', R + 'B534581085/', R + 'B534728823/', R + 'B535971955/', R + 'B536626215/'] },
    cultural_comfort: { level: 'english', note: 'Point-and-choose counter; mostly overseas guests (2026 reviews). Ask prices before ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-14-7 アロービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.662551, 139.734969); GSI 東京都港区六本木三丁目14番 (lot) 37m; no record within 40 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532199244/', R + 'B534581085/'],
    price_note: 'Prices from a July 2026 receipt and an August 2026 review; no prices are displayed in the shop.', last_checked: TODAY, items: [
      it('', '', 'Kinki, grilled', '¥15,000', 'Robata', 'ask', 'no', 'July 2026 review.', 'kinki'),
      it('', '', 'Kuruma prawns', '¥6,800', 'Robata', 'ask', 'no', 'July 2026 review.', 'kurumaebi'),
      it('', '', 'Sashimi platter (small)', '¥6,710', 'Sashimi', 'ask', 'no', 'July 2026 review.', 'sashimi'),
      it('', '', 'Grilled eggplant', '¥770', 'Robata', 'ask', 'ask', 'July 2026 review.', 'nasu'),
      it('', '', 'Yamazaki highball', '¥3,000', 'Drinks', '', '', 'August 2026 review.', 'highball'),
    ] }, {
    cuisine: '1970年からの炉端焼き: 目の前に並ぶ魚介、野菜、肉から選び、掛け声とともに炭火で焼いて長い木のへらで渡す (公式サイト、2026年の口コミ)・2026年7月の値段: 刺身盛り合わせ (小) 6,710円、キンキ15,000円、車海老6,800円、焼き茄子770円、とうもろこし1,320円、椎茸990円、アスパラガス990円、沢蟹1,100円・甘海老は1尾4,000〜6,800円 (2026年6月・8月)。餅つきと餅 (2026年8〜9月)、締めの冷たい茶そば (2026年5月)・Yamazaki のハイボール3,000円 (2026年8月)',
    neighborhood: '六本木3-14-7 アロービル1F。都バス「Roppongi-Go-Chome」から徒歩1分、六本木駅5番出口から4分',
    gf_detail: '要確認。炭火の炉端焼きで、たいてい味付けして出す (2026年8月)。締めは冷たい茶そば (2026年5月)。グルテンについての説明はない。',
    vegan_detail: '要確認。茄子、とうもろこし、椎茸、アスパラガスなどの野菜を焼いてくれるが (2026年7月)、味付けの説明はない。ほかは魚介と肉。',
    notes: '[炉端焼き・六本木、値段表示のない1970年からの炉端の劇場] 1970年から、六本木田舎家は炉端焼きをショーのように見せる。38席のカウンターに座ると目の前に新鮮な魚介、野菜、肉が並び、指さして選ぶと、焼き手が掛け声とともに炭火で焼き、長い木のへらで渡してくれる。2026年の客によれば元大統領 Trump と元首相 Abe も訪れ、今は海外の客が多い。海老、キンキ、締めの茶そば、餅つきを称える一方、値段の表示がなく、1人20,000〜50,000円の会計に驚いた客も多い (キンキ15,000円、車海老6,800円)。こちらは東店で、近くに西店もある。',
  });
}

save();
