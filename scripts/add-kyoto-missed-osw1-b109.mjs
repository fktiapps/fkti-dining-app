// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 109.
//   + 焼肉屋 ロマンポップ (Yakiniku Roman Pop) (Kyoto-style yakiniku in a two-storey townhouse on the Sanjo-kai arcade)
//   + ナンゴク カフェ (tropical-themed lunch café across from Kyoto University Hospital)
//   + MARTIN (breakfast-to-brunch café at Kojinguchi on the site of the former bakery LAND)
//   + お料理かさい (Oryori Kasai) (eight-seat kaiseki counter near Horikawa-Marutamachi, run by a chef and the chef's wife)
//   - 3 skips: やっぱりステーキ 京都府庁前店 (chain), さと茂旅館 (too thin), いろはかるた 京都駅前店 (brand in data).
//   Core and notable lists have nothing left in the lane; rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first,
//   lane ids: 26042738 (囲 — held for Greg, NOT drafted and NOT skipped), 26028830 (うぐいす — held for Greg, NOT drafted and
//   NOT skipped), 26031350, 26038028 (skip), 26021330 (skip), 26034056, 26039894, 26000792 (skip), 26043842.
//   Data check (main 871737c1, hidden included): none of the four is in data/kyoto.json by Tabelog id, name or address
//   (ナンゴク カフェ shares the lot 聖護院西町19 with the bakery record kyoto_angledian_shogoin, a different shop); none is in
//   another worker's pending script (all C:/PF/fkti-dining-osw*/scripts/add-kyoto-missed-* grepped).
//   Romaji rule (integrator 2026-11-26): Roman Pop — the own site romanpop.info writes "Yakiniku Roman Pop" in its text
//   (title "Yakiniku Romanpop"). ナンゴク カフェ — no source romaji; kana only, whole-string name gloss. MARTIN — written in
//   Latin letters on Tabelog's name line and the own Instagram (@martin_kyoto). かさい — the own domain oryori-kasai.com and
//   Instagram @oryori_kasai give Oryori Kasai. The chef's given name appears only in machine-translated reviews, so chef_name
//   stays null; a restaurant in Arashiyama named in one machine-translated review is left unnamed.
//   Operator checks: Roman Pop — one shop found (own site; web search). ナンゴク カフェ, MARTIN, かさい — one shop each found.
//   Other-diner remarks (Greg 2026-11-06): one April 2025 Roman Pop review noting foreign tourists already eating is a single
//   review and left out; one March 2026 MARTIN review saying the room was full of young women likewise.
//   Halal: no operator in this batch claims halal; かさい states it cannot cater to halal requests (Tabelog).
//   JA text: no bare 祝 or 天. Tokushima stays Latin in JA (English review only); 熊本県産, 香川県産, 島根県産 appear in a
//   reviewer's Japanese photo captions.
//   Pins: Tabelog /en/ ld+json points; no OSM/GSI cross-check this round (integrator runs pincheck). ナンゴク カフェ is 9.3 m
//   from kyoto_angledian_shogoin (same lot, 聖護院西町19); both points are Tabelog's own, kept as given (above the 5 m line).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-109');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26038028', 'やっぱりステーキ 京都府庁前店: chain — yapparigroup.jp (株式会社ディーズプランニング) announces Yappari Steak openings in Okinawa, Hong Kong, Singapore, the Philippines, Australia and Nepal, with more Philippine and Singapore shops coming (read 2026-11-26)');
skip('26021330', 'さと茂旅館: too thin to verify — four Tabelog reviews (2012–2025), all about meals during an overnight stay; the own site lists banquet rooms but no dining-only booking route');
skip('26000792', 'いろはかるた 京都駅前店: same-concept branch of a brand in data — kyoto_iroha_karuta_kiyamachi (いろはかるた 木屋町本店), whose background reads "a second shop by Kyoto Station is in our crawls"');

// ================================================================ 焼肉屋 ロマンポップ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26031350/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://www.romanpop.info/'; const MENU = TB + 'dtlmenu/';
  const D = day(['17:30', '23:00']); const W = day(['12:30', '15:00'], ['17:30', '23:00']);
  put({
    id: 'kyoto_yakiniku_roman_pop_sanjokai', name: '焼肉屋 ロマンポップ (Yakiniku Roman Pop)', category: 'OMNI',
    lat: 35.008575, lng: 135.747823, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The meat comes pre-seasoned in a marinade (momi-dare), with a homemade dipping sauce and a lemon-and-broth “washing” sauce (arai-dare) on the side; the menu also has ramen, gyoza and bibimbap. No gluten information (Tabelog; 2022–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A yakiniku shop: the Tabelog menu’s vegetable section has salted cabbage, grilled sweet potato and corn, lettuce wraps, namul and kimchi, but nothing is described as vegan and the soups are egg, wakame or beef-tail (Tabelog menu 2022).',
    hours_raw: 'Monday, Wednesday–Friday 17:30–23:00; Saturday and Sunday 12:30–15:00 and 17:30–23:00 (last order 22:30); closed Tuesday (Tabelog). Lunch days “not fixed”; lunch is at the counter only and booked on the day only (Tabelog). The own site gives weekday dinner 17:30–23:00 and lunch Saturday and Sunday 12:30–15:00, closed Tuesday, and may close early when ingredients run out. One October 2024 reviewer found lunch on weekends only; an October 2025 reviewer arriving at 12:30 on a holiday was asked whether no lunch was all right. Payment: cards (VISA, Master, JCB, AMEX), e-money and QR codes on Tabelog and cards on the own site, but an October 2025 reviewer found a cash-only sign at the entrance and cards not accepted; a December 2020 reviewer saw a 10% discount for cash. 29 seats: 8 at the counter, two tatami tables for four and two tables for six; private hire for up to 20 (Tabelog). Non-smoking (Tabelog). One parking space (Tabelog). Dogs by phone booking only, one seat at the ground-floor counter, pet diaper required (Tabelog). Children and strollers welcome (Tabelog). Opened 22 June 2018 (Tabelog). 430 m from Nijojo-mae station (Tabelog).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: W, 6: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: null, halal: false, open_late: true },
    neighborhood: 'Sanjo-kai shopping arcade — south of Nijo Castle, about 430 m from Nijojo-mae station',
    cuisine: 'Kyoto-style yakiniku, the meat cut after ordering and washed of excess fat with a washing sauce; a sweet-spicy yangnyeom sauce without garlic (Tabelog) · additive-free sauces and a beef-bone soup simmered for hours (own site) · take-away Bolognese-style rice bowl with cheese (May 2019) · beef-tail-bone ramen ¥750 and gyoza ¥250, before tax (December 2020) · yakiniku ramen ¥700 before tax, with white leek, fried garlic, four slices of grilled outside skirt and spicy chives on the side (April and August 2022) · large tongue slices, thick outside skirt and tripe on a teppan, gentle soup, fluffy rice (August 2022) · Yamagata wagyu hand roll with cheese, wasabi and sea urchin, thick tongue with green onion, grilled harami yukhoe, harami steak, tessa mino (July 2024) · meat by the single piece, premium tongue, special kalbi and outside skirt ¥220 each (October 2024) · kalbi, premium tongue, meat temari sushi (November 2024) · weekend lunch with meats chosen by weight, rice, soup and a mini salad (January 2025) · grilled yukhoe, avocado kimchi, homemade yangnyeom sauce (April 2025) · lunch ¥1,200: a bowl of chicken thigh, kalbi and offal with bean-sprout namul, tofu and chicken-bone soup (July 2025) · premium beef tongue ¥1,408, thick-cut tongue ¥1,078, outside skirt ¥968, grilled liver ¥748, heart sashimi ¥990, clay-pot rice (medium) ¥220, grapefruit sour ¥385 (October 2025)',
    website: WEB, gmaps: gm('焼肉屋 ロマンポップ 京都 上瓦町'), menu_url: MENU,
    notes: '[Kyoto-style yakiniku · Sanjo-kai arcade, open to 23:00] A yakiniku shop in a converted two-storey townhouse on the Sanjo-kai shopping street, with a counter of small grills downstairs and sunken-table and table seating above. The meat is cut to order and marinated, eaten with a homemade dipping sauce and a light lemon-and-broth washing sauce; tongue, outside skirt, offal, grilled yukhoe and a yakiniku ramen are reviewers’ picks. Easy for solo diners; weekend lunch from ¥1,200; an English-language own site that offers a lunchtime cooking class. Card payment varies by report (see hours).',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 22 June 2018 (Tabelog); a May 2019 reviewer had heard of the new yakiniku shop in the Sanjo shopping street. The own site says every member of the team puts heart into the details, from the marinades to the additive-free sauces, and that the shop runs a Japanese cooking class at lunchtime. Reviews are mixed: a December 2020 diner had cold gyoza delivered first to the wrong customer without an apology and found the ramen broth weak; a July 2023 couple found many items sold out soon after opening, a slow wait and QR-code ordering hard; an October 2025 diner found the marinades too simple or too strong and the high chairs unsteady. Others praise the thick tongue, the staff cleaning the teppan (August 2022), the professional, warm staff (July 2024) and the value of the lunch (July 2025).',
      philosophy: 'A place where everyone can gather, unwind and share a good time over grilled meat (own site).', specialty: 'Kyoto-style yakiniku with a washing sauce; yakiniku ramen.',
      anecdotes: [
        { text: 'A July 2025 diner drawn in by a ¥1,200 lunch sign outside found the counter empty at 2 pm, then watched it fill up, and was glad of the timing.', source: R + 'B510652576/' },
        { text: 'An August 2022 diner tried the ramen plain, then piled the separately served grilled meat and spicy chives on top, and planned to ask for extra chives next time.', source: R + 'B452980966/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 焼肉屋 ロマンポップ、焼肉・ホルモン・冷麺、中京区上瓦町52-3、二条城前駅から430m、月・水・木・金 17:30〜23:00、土・日 12:30〜15:00、17:30〜23:00 (L.O. 22:30)、火曜定休、ランチは不定、ランチの予約は当日のみ、カウンターのみ、カード・電子マネー・QR決済可、チャージなし、29席 (カウンター8席、座敷4名2卓、テーブル6名2卓)、貸切20名まで、禁煙、駐車場1台、ペットは電話予約のみで1席、子ども・ベビーカー可、2018年6月22日オープン、洗いダレで脂を落とす京都風の焼肉、注文後に肉を切る、ニンニクを使わない甘辛いたれ。公式サイト (英語): 無添加のタレ、何時間も煮込んだ牛骨スープ、昼に和食の料理教室、平日夜 17:30〜23:00、土日の昼 12:30〜15:00、火曜定休、カード可。口コミ (2019〜2025年、英語): 持ち帰りのボロネーゼ風の丼 (2019年5月)、牛テールのラーメン750円と餃子250円 (税抜)、冷めた餃子、現金で10%引き (2020年12月)、焼肉ラーメン700円 (税抜)、白ねぎ、フライドガーリック、ハラミ4枚、辛いニラ (2022年4・8月)、大きなタン、厚いハラミとミノ、鉄板をこまめに掃除 (2022年8月)、開店直後に品切れが多い、QRコードの注文 (2023年7月)、町家を改装した2階建て、1階カウンター、2階に掘りごたつとテーブル、6mmの鉄板、Yamagata 牛の手巻き寿司、ハラミのユッケ、Tessa mino (2024年7月)、1枚から注文できる上タン、特選カルビ、ハラミ各220円、テッチャン、ミノ (2024年10月)、肉の手まり寿司 (2024年11月)、グラムで選ぶ週末のランチ (2025年1月)、焼きユッケ、アボカドキムチ、自家製の甘辛いたれ、持ち帰り可 (2025年4月)、1,200円のランチ、もみダレ、自家製のレモン果汁と和風だしの洗いダレ (2025年7月)、上タン1,408円、厚切りタン1,078円、ハラミ968円、レバー焼き748円、ハツ刺し990円、土鍋ご飯 (中) 220円、グレープフルーツサワー385円、入口に現金のみの貼り紙、高い椅子 (2025年10月)。',
      confidence: 'low', sources: [TB, MENU, WEB, R + 'B414937657/', R + 'B433551319/', R + 'B447623772/', R + 'B452980966/', R + 'B453545029/', R + 'B468428826/', R + 'B488719511/', R + 'B493226376/', R + 'B495150367/', R + 'B499916547/', R + 'B501457175/', R + 'B504587371/', R + 'B510652576/', R + 'B514841966/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The own site is in English and invites visitors to a lunchtime Japanese cooking class; ordering was by QR code in July 2023; phone may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区上瓦町52-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing checked 2026-11-26 (no closure badge); own site updated 2026-11-06; reviews dated May 2019 to October 2025.' },
    pin_source: `Tabelog ${TB} (35.0085749, 135.7478227); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B452980966/', R + 'B510652576/', R + 'B514841966/'],
    price_note: 'Prices from reviews (tax incl. unless stated); the Tabelog menu was last updated in July 2022.', last_checked: TODAY, items: [
      it('', '', 'Premium beef tongue', '¥1,408', 'Yakiniku', 'ask', 'no', 'October 2025.', 'premium_tongue'),
      it('', '', 'Thick-cut beef tongue', '¥1,078', 'Yakiniku', 'ask', 'no', 'October 2025.', 'thick_tongue'),
      it('', '', 'Outside skirt (harami)', '¥968', 'Yakiniku', 'ask', 'no', 'October 2025; marinated.', 'harami'),
      it('', '', 'Heart sashimi', '¥990', 'Small plates', 'ask', 'no', 'October 2025.', 'heart_sashimi'),
      it('', '', 'Yakiniku ramen', '¥700', 'Noodles', 'no', 'no', 'August 2022, before tax.', 'yakiniku_ramen'),
      it('', '', 'Weekend yakiniku lunch with rice, soup and sides', '¥1,200', 'Lunch', 'ask', 'no', 'July 2025.', 'yakiniku_lunch'),
      it('', '', 'Clay-pot rice, medium', '¥220', 'Rice', 'ask', 'ask', 'October 2025.', 'donabe_rice'),
    ] }, {
    cuisine: '京都風の焼肉。注文後に肉を切り、洗いダレで余分な脂を落とす。ニンニクを使わない甘辛いたれ (食べログ)・無添加のタレ、何時間も煮込んだ牛骨スープ (公式サイト)・チーズをのせたボロネーゼ風の丼の持ち帰り (2019年5月)・牛テールのラーメン750円、餃子250円、税抜 (2020年12月)・焼肉ラーメン700円 (税抜)、白ねぎ、フライドガーリック、別皿のハラミ4枚と辛いニラ (2022年4・8月)・大きなタン、厚いハラミとミノを鉄板で、やさしいスープ、ふっくらしたご飯 (2022年8月)・Yamagata 牛の手巻き寿司 チーズ、わさび、ウニのせ、ねぎ巻きの厚切りタン、焼きハラミのユッケ、ハラミステーキ、Tessa mino (2024年7月)・1枚から注文でき、上タン、特選カルビ、ハラミ各220円 (2024年10月)・カルビ、上タン、肉の手まり寿司 (2024年11月)・週末のランチは肉をグラムで選び、ご飯、スープ、ミニサラダ付き (2025年1月)・焼きユッケ、アボカドキムチ、自家製の甘辛いたれ (2025年4月)・1,200円のランチ、鶏もも、カルビ、ホルモンの盛り合わせに、もやしのナムル、豆腐、鶏ガラスープ (2025年7月)・上タン1,408円、厚切りタン1,078円、ハラミ968円、レバー焼き748円、ハツ刺し990円、土鍋ご飯 (中) 220円、グレープフルーツサワー385円 (2025年10月)',
    neighborhood: 'Sanjo-kai 商店街、二条城の南、二条城前駅から約430m',
    gf_detail: '要確認。肉はもみダレで味付け済みで、自家製のつけダレと、レモンとだしの洗いダレが付く。ラーメン、餃子、ビビンバもある。グルテンの情報はない (食べログ、2022〜2025年の口コミ)。',
    vegan_detail: '要確認。焼肉店で、食べログのメニューの野菜の欄には塩キャベツ、焼き野菜のさつまいもととうもろこし、サンチュ、ナムル、キムチがあるが、ヴィーガンと書かれた品はなく、スープは玉子、わかめ、テール (食べログのメニュー 2022年)。',
    notes: '[京都風の焼肉・Sanjo-kai 商店街、23時まで] Sanjo-kai 商店街の、2階建ての町家を改装した焼肉店。1階は小さなロースターが並ぶカウンター、2階に掘りごたつとテーブル席。肉は注文後に切ってもみダレで味付けし、自家製のつけダレと、レモンとだしのさっぱりした洗いダレで食べる。タン、ハラミ、ホルモン、焼きユッケ、焼肉ラーメンが好評。一人でも入りやすく、週末の昼は1,200円から。英語の公式サイトがあり、昼には料理教室も。カードが使えるかは情報が分かれる (営業時間の欄を参照)。',
  });
}

// ================================================================ ナンゴク カフェ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034056/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:30']);
  put({
    id: 'kyoto_tropical_cafe_shogoin', name: 'ナンゴク カフェ', category: 'OMNI',
    lat: 35.019678, lng: 135.778716, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice-based plates (taco rice, gapao rice, a Taiwanese minced-meat bowl, beef-tendon bowl, hamburg steak with multigrain rice) and scones; no gluten information (2020–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The bowls and sets reviewers name are built on meat, with egg in the soup and on the Taiwanese bowl; a salad bowl with scones is on the 2026 menu, but nothing is described as vegan.',
    hours_raw: 'Monday–Friday 11:00–18:30; closed Saturday and Sunday (Tabelog). Reservations accepted (Tabelog). No cards; QR payments accepted (Tabelog). Non-smoking; no parking; free Wi-Fi (Tabelog). Opened 2 March 2020, a date Tabelog says it got from the manager. A March 2022 reviewer found set meals at lunch and dinner. Across from Kyoto University Hospital, about 610 m from Jingu-Marutamachi station (Tabelog; reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shogoin — across from Kyoto University Hospital',
    cuisine: 'Tropical- and Okinawa-themed café meals · scone set with tea, brown-sugar milk coffee (October 2020) · daily lunch ¥1,000: twice-cooked pork, carrot râpée and marinated mushrooms, soup and multigrain rice (March 2021) · gapao rice ¥900 (June 2021) · daily specials, loco moco, taco rice, hamburg steak sets under ¥1,000 at lunch and dinner (March 2022) · daily lunch ¥1,000 (October 2022; April 2023) · fruit mix of mango, melon and pineapple ¥580; taco rice with soup ¥900, a spicy sauce on the side (May 2023) · beef-tendon bowl with soup ¥900 (June 2023) · homemade hamburg steak with salted rice malt (shio-koji), salad, soup, multigrain rice and pickles (July 2024) · Taiwanese bowl ¥1,000 with soup: spicy minced meat, green onion, garlic chives, egg yolk, seaweed and sesame (August 2025; July 2026) · menu in April 2026: homemade hamburg steak set with sides, salad, soup and multigrain rice ¥1,200; taco rice, gapao rice, Taiwanese bowl, beef-tendon bowl with soup ¥1,000; salad bowl and scone set with soup ¥1,300; scones or drinks added for extra · mango drink (August 2026) · gapao rice with fried onions (November 2026)',
    website: null, gmaps: gm('ナンゴク カフェ 京都 聖護院西町'), menu_url: TB,
    notes: '[Tropical café lunch · Shogoin, weekdays] A bright, wood-panelled café across from Kyoto University Hospital, open since 2020, with an Okinawan, tropical theme: taco rice, gapao rice, loco moco, a Taiwanese minced-meat bowl and homemade hamburg steak with multigrain rice, around ¥1,000–¥1,300, plus freshly baked scones and blended mango drinks. Friendly staff; portions on the light side, and service can be slow. Weekdays only; no cards.',
    chef_bio: { chef_name: null, roles: ['Manager (unnamed)', 'Staff (unnamed)'], origin: null,
      background: 'Opened 2 March 2020 (Tabelog, from the manager). An October 2020 reviewer says it was always fully booked when it first opened; a March 2021 reviewer found two friendly staff and an Okinawan theme in a warm, wooden, sunlit room. A reviewer of seven visits (May 2023 and April 2026) comes to escape reality and notes the menu and prices changed by 2026. Some find the portions small for the price (October 2022; April 2023; August 2025) and one July 2023 diner wished the service were faster. A November 2026 reviewer heard that cakes bought to take away from the bakery next door can be eaten here.',
      philosophy: null, specialty: 'Taiwanese minced-meat bowl; taco rice and gapao rice.',
      anecdotes: [
        { text: 'An April 2026 regular was told to mix the Taiwanese bowl well before eating, did so with a spoon, and found it like a bowl version of Taiwanese mazesoba, a little spicy and not greasy.', source: R + 'B427024944/' },
        { text: 'A March 2021 diner finished some errands on foot over a weekday lunch and stumbled on the café.', source: R + 'B436969725/' },
      ],
      japanese_sources_summary: '食べログ: ナンゴク カフェ、カフェ・喫茶店、左京区聖護院西町19、神宮丸太町駅から614m、月〜金 11:00〜18:30、土・日定休、予約可、カード不可、QR決済可、禁煙、駐車場なし、無料Wi-Fi、2020年3月2日オープン (店長に確認したとの記載)。口コミ (2020〜2026年、英語): 開店当初はいつも予約で満席、スコーンのセットと紅茶、黒糖ミルクコーヒー (2020年10月)、Okinawa がテーマ、日替わりランチ1,000円、回鍋肉、キャロットラペ、きのこのマリネ、スープ、雑穀米、スタッフ二人 (2021年3月)、ガパオライス900円 (2021年6月)、昼も夜も1,000円以下の定食、日替わり、ロコモコ、タコライス、ハンバーグ (2022年3月)、日替わり1,000円 (2022年10月、2023年4月)、マンゴー、メロン、パイナップルのフルーツミックス580円、スープ付きタコライス900円 (2023年5月)、牛すじ丼900円 (2023年6月)、提供が少し遅い (2023年7月)、塩麹の手作りハンバーグ、サラダ、スープ、雑穀米、漬物 (2024年7月)、台湾どんぶり1,000円 スープ付き、辛いひき肉、ねぎ、ニラ、卵黄、海苔、ごま (2025年8月、2026年7月)、2026年4月のメニュー: 手作りハンバーグ定食1,200円、タコライス、ガパオライス、台湾どんぶり、牛すじ丼 スープ付き1,000円、サラダボウルとスコーンのセット1,300円、マンゴードリンク (2026年8月)、フライドオニオンのガパオライス、隣のパン屋のケーキを持ち込める (2026年11月)。',
      confidence: 'low', sources: [TB, R + 'B427024944/', R + 'B431154131/', R + 'B436969725/', R + 'B438818130/', R + 'B446969053/', R + 'B455537493/', R + 'B464117381/', R + 'B468981732/', R + 'B489027960/', R + 'B512307418/', R + 'B530939371/', R + 'B534732452/', R + 'B539212145/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small café; phone may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院西町19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing checked 2026-11-26 (no closure badge); reviews dated April 2020 to November 2026.' },
    pin_source: `Tabelog ${TB} (35.0196782, 135.7787156); not cross-checked this round; 9.3 m from kyoto_angledian_shogoin (same lot, 聖護院西町19), kept as Tabelog gives it; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B427024944/', R + 'B512307418/'],
    price_note: 'Prices from reviews; the April 2026 prices are the latest.', last_checked: TODAY, items: [
      it('台湾どんぶり', '', 'Taiwanese bowl, with soup', '¥1,000', 'Lunch', 'ask', 'no', 'April 2026; August 2025.', 'taiwan_don'),
      it('', '', 'Taco rice, with soup', '¥1,000', 'Lunch', 'ask', 'ask', 'April 2026; ¥900 in May 2023.', 'taco_rice'),
      it('', '', 'Gapao rice, with soup', '¥1,000', 'Lunch', 'ask', 'no', 'April 2026.', 'gapao_rice'),
      it('', '', 'Homemade hamburg steak set with multigrain rice', '¥1,200', 'Lunch', 'ask', 'no', 'April 2026.', 'hamburg_set'),
      it('', '', 'Salad bowl and scone set, with soup', '¥1,300', 'Lunch', 'no', 'ask', 'April 2026.', 'salad_scone_set'),
      it('', '', 'Fruit mix (mango, melon, pineapple)', '¥580', 'Drinks', 'ask', 'ask', 'May 2023.', 'fruit_mix'),
    ] }, {
    cuisine: 'トロピカルと Okinawa がテーマのカフェごはん・スコーンのセットと紅茶、黒糖ミルクコーヒー (2020年10月)・日替わりランチ1,000円、回鍋肉、キャロットラペ、きのこのマリネ、スープと雑穀米 (2021年3月)・ガパオライス900円 (2021年6月)・昼も夜も1,000円以下の日替わり、ロコモコ、タコライス、ハンバーグの定食 (2022年3月)・日替わりランチ1,000円 (2022年10月、2023年4月)・マンゴー、メロン、パイナップルのフルーツミックス580円、スープ付きタコライス900円、辛いソースは別添え (2023年5月)・スープ付き牛すじ丼900円 (2023年6月)・塩麹の手作りハンバーグ、サラダ、スープ、雑穀米、漬物 (2024年7月)・スープ付き台湾どんぶり1,000円、辛いひき肉、ねぎ、ニラ、卵黄、海苔、ごま (2025年8月、2026年7月)・2026年4月のメニュー: 手作りハンバーグ定食 副菜、サラダ、スープ、雑穀米付き1,200円、タコライス、ガパオライス、台湾どんぶり、牛すじ丼 スープ付き1,000円、サラダボウルとスコーンのセット スープ付き1,300円、スコーンやドリンクの追加もできる・マンゴードリンク (2026年8月)・フライドオニオンのガパオライス (2026年11月)',
    neighborhood: '聖護院、Kyoto University Hospital の向かい',
    gf_detail: '要確認。タコライス、ガパオライス、台湾どんぶり、牛すじ丼、雑穀米のハンバーグなどご飯の料理とスコーン。グルテンの情報はない (2020〜2026年の口コミ)。',
    vegan_detail: '要確認。口コミに出る丼と定食は肉が中心で、スープや台湾どんぶりに卵も。2026年のメニューにはサラダボウルとスコーンのセットがあるが、ヴィーガンと書かれた品はない。',
    notes: '[トロピカルなカフェのランチ・聖護院、平日のみ] Kyoto University Hospital の向かいにある、木のぬくもりのある明るいカフェ。2020年オープン。Okinawa とトロピカルがテーマで、タコライス、ガパオライス、ロコモコ、台湾どんぶり、雑穀米の手作りハンバーグなどが1,000〜1,300円ほど。焼きたてのスコーンやマンゴーのドリンクも。スタッフは親切。量は控えめで、提供に時間がかかることも。平日のみ、カード不可。',
  });
}

// ================================================================ MARTIN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039894/'; const R = TB + 'dtlrvwlst/';
  const LEAF = 'https://leafkyoto.net/en/store/230907-kyoto-martin'; const IG = 'https://www.instagram.com/martin_kyoto/';
  const H = day(['09:00', '15:00']);
  put({
    id: 'kyoto_martin_cafe_kojinguchi', name: 'MARTIN', category: 'OMNI',
    lat: 35.021559, lng: 135.770417, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pancakes, toast, a croque madame, sandwiches, lasagna and donuts; no gluten information (Leaf 2023; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The plates reviewers name come with eggs, bacon, sausage or cheese; the avocado toast had cream cheese and bacon in March 2026. Nothing is described as vegan.',
    hours_raw: 'Tuesday–Sunday 9:00–15:00 (last order 14:00); after 14:00 café menu only, with donuts the only food; closed Monday, or the next business day when Monday is a public holiday (Tabelog). Leaf Kyoto gave 9:00–17:00, closed Monday, plate meals with a drink until 14:00 and cakes and French toast after (September 2023). Cash only: no cards, e-money or QR (Tabelog; August 2026). Tabelog says no reservations, but a November 2026 reviewer booked and found it fully booked that morning. Counter seating; no parking (Tabelog). Some steps inside; a reviewer came with a child (April 2026). Opened 23 July 2023 (Tabelog; Leaf). About 410 m from Jingu-Marutamachi station, near the Kojinguchi bus stop (Tabelog; November 2025).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: null, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kojinguchi — just east of Kawaramachi, by the Kamo River',
    cuisine: 'Breakfast-to-brunch plates, coffee and donuts · avocado toast plate ¥1,650 with side dishes (Leaf, September 2023); with dukkah of nuts and spices (March 2026) · croque madame with béchamel, cheese and a fried egg, hot café au lait (February 2025) · pancake plate: two pancakes with butter and maple syrup, fried egg, crispy bacon, sausage, avocado and beans (November 2025); ¥1,600, with chili beans (January 2026) · pancake plate and lasagna, hot latte (January 2026) · raspberry-jam, chicken and cheese sandwich ¥1,450 with a drink; lemonade with lemon and rosemary (February 2026) · custard donut ¥400; maple-bacon donut sold out (March 2026) · croque madame ¥1,450: croque monsieur with homemade cream sauce and a soft-boiled egg, salad, soup and a set drink (April 2026) · banana juice (April and August 2026) · red-shiso latte (August 2026) · homemade drinks (August 2026)',
    website: IG, gmaps: gm('MARTIN 京都 荒神口 亀屋町'), menu_url: TB,
    notes: '[Brunch café · Kojinguchi, cash only] A small café with a wooden door and yellow awning on the Kamo River side of Kojinguchi, opened in 2023 on the site of the popular bakery LAND. Breakfast and brunch plates with a drink until 14:00 — pancakes with bacon, egg and chili beans, avocado toast with dukkah, croque madame — then coffee and donuts. Soft lighting, country music and friendly staff; can be full, and some find the portions light.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 23 July 2023 on the site of the bakery LAND (Leaf Kyoto, September 2023; February 2025 and March 2026 reviews); an August 2026 reviewer remembers the space as a former sandwich shop. A February 2025 reviewer had heard the owner of LAND moved to Canada. Reviewers describe lovely, young, attentive staff (February 2025; January 2026) and a cosy, softly lit wooden room with country music (November 2025; January 2026). A March 2026 diner found the avocado toast nothing special, and an April 2026 diner wanted a bit more on the croque madame plate; most others found the plates filling.',
      philosophy: null, specialty: 'Pancake plate; avocado toast plate.',
      anecdotes: [
        { text: 'A February 2026 diner gave up on a long queue at a nearby udon shop, remembered this café, and found it surprisingly empty at 12:30 on a holiday.', source: R + 'B501519636/' },
        { text: 'A February 2025 diner walking north along the Kamo River realised it was Kyoto Marathon day and stopped in at 1:30 pm to find many seats free.', source: R + 'B501519636/' },
      ],
      japanese_sources_summary: '食べログ: MARTIN、カフェ、上京区荒神口通河原町東入亀屋町128、神宮丸太町駅から414m、火〜日 9:00〜15:00 (L.O. 14:00)、14時以降はカフェメニューのみ (食事はドーナツだけ)、月曜定休 (祝日の場合は翌営業日)、予約不可、カード・電子マネー・QR決済不可、カウンター席、駐車場なし、2023年7月23日オープン。Leaf Kyoto (2023年9月): 鴨川沿い、人気のパン屋 LAND の跡地にできたカフェ、9:00〜17:00、月曜定休、14時までドリンク付きのプレート、アボカドトーストのプレート1,650円、14時からケーキやフレンチトースト。口コミ (2025〜2026年、英語): クロックマダム、カフェオレ、LAND の店主は Canada へ移ったと聞いた (2025年2月)、パンケーキのプレート 目玉焼き、ベーコン、ソーセージ、アボカド、豆、木の扉と黄色いテント (2025年11月)、パンケーキのプレート1,600円、チリビーンズ、カントリー音楽 (2026年1月)、ラズベリージャムとチキンのチーズサンド1,450円、レモンとローズマリーのレモネード、隣にお地蔵さん (2026年2月)、デュカをのせたアボカドトースト1,650円、カスタードのドーナツ400円 (2026年3月)、クロックマダム1,450円 自家製クリームソース、半熟卵、サラダ、スープ、ドリンク付き、バナナジュース (2026年4月)、赤しそラテ、手作りのドリンク、現金のみ (2026年8月)、予約して朝も満席 (2026年11月)。',
      confidence: 'low', sources: [TB, LEAF, IG, R + 'B501519636/', R + 'B517897862/', R + 'B519475568/', R + 'B520518405/', R + 'B520582434/', R + 'B523626354/', R + 'B524777236/', R + 'B525898421/', R + 'B526259464/', R + 'B526582621/', R + 'B529429088/', R + 'B532134811/', R + 'B534318039/', R + 'B534957008/', R + 'B539489699/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small café; Leaf Kyoto has an English page; seat yourself (January 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区荒神口通河原町東入亀屋町128',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing checked 2026-11-26 (no closure badge); reviews dated February 2025 to November 2026.' },
    pin_source: `Tabelog ${TB} (35.0215593, 135.7704167); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [LEAF, R + 'B520518405/', R + 'B524777236/', R + 'B526259464/'],
    price_note: 'Prices from Leaf Kyoto (2023) and 2026 reviews; plates come with a drink.', last_checked: TODAY, items: [
      it('', '', 'Pancake plate (egg, bacon, sausage, avocado, chili beans)', '¥1,600', 'Plates', 'no', 'no', 'January 2026.', 'pancake_plate'),
      it('', '', 'Avocado toast plate', '¥1,650', 'Plates', 'no', 'no', 'Leaf 2023; March 2026.', 'avocado_toast'),
      it('', '', 'Croque madame, with salad, soup and a drink', '¥1,450', 'Plates', 'no', 'no', 'April 2026.', 'croque_madame'),
      it('', '', 'Raspberry jam, chicken and cheese sandwich', '¥1,450', 'Plates', 'no', 'no', 'February 2026.', 'raspberry_chicken_sandwich'),
      it('', '', 'Donut (custard)', '¥400', 'Sweets', 'no', 'no', 'March 2026.', 'donut'),
    ] }, {
    cuisine: '朝食からブランチのプレート、コーヒーとドーナツ・副菜を添えたアボカドトーストのプレート1,650円 (Leaf、2023年9月)、ナッツとスパイスのデュカのせ (2026年3月)・ベシャメル、チーズ、目玉焼きのクロックマダム、ホットのカフェオレ (2025年2月)・パンケーキのプレート: バターとメープルシロップのパンケーキ2枚、目玉焼き、カリカリのベーコン、ソーセージ、アボカド、豆 (2025年11月)、1,600円、チリビーンズ (2026年1月)・パンケーキのプレートとラザニア、ホットラテ (2026年1月)・ドリンク付きのラズベリージャムとチキンのチーズサンド1,450円、レモンとローズマリーのレモネード (2026年2月)・カスタードのドーナツ400円、メープルベーコンは売り切れ (2026年3月)・クロックマダム1,450円: 自家製クリームソースのクロックムッシュに半熟卵、サラダ、スープ、セットドリンク (2026年4月)・バナナジュース (2026年4・8月)・赤しそラテ (2026年8月)・手作りのドリンク (2026年8月)',
    neighborhood: '荒神口、河原町のすぐ東、鴨川のそば',
    gf_detail: '要確認。パンケーキ、トースト、クロックマダム、サンドイッチ、ラザニア、ドーナツ。グルテンの情報はない (Leaf 2023年、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。口コミに出るプレートは卵、ベーコン、ソーセージ、チーズ付きで、2026年3月のアボカドトーストにもクリームチーズとベーコン。ヴィーガンと書かれた品はない。',
    notes: '[ブランチカフェ・荒神口、現金のみ] 荒神口の鴨川寄り、木の扉と黄色いテントの小さなカフェ。2023年、人気のパン屋 LAND の跡地にオープン。14時まではドリンク付きの朝食、ブランチのプレート: ベーコンと目玉焼き、チリビーンズのパンケーキ、デュカのアボカドトースト、クロックマダム。その後はコーヒーとドーナツ。やわらかな照明、カントリー音楽、親切なスタッフ。満席のことも。量は控えめという声も。',
  });
}

// ================================================================ お料理かさい
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043842/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://oryori-kasai.com/'; const IG = 'https://www.instagram.com/oryori_kasai/';
  const D = day(['18:30', '21:30']); const L = day(['12:00', '15:00'], ['18:30', '21:30']);
  put({
    id: 'kyoto_oryori_kasai_marutamachi', name: 'お料理かさい (Oryori Kasai)', category: 'OMNI',
    lat: 35.016955, lng: 135.754088, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Tabelog states the restaurant cannot accommodate allergies or disliked ingredients on the day of the reservation. The kaiseki uses soy sauce, ponzu, miso and fried courses (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'No. The restaurant states it cannot cater to vegetarian requests (Tabelog), and the dashi is made with bonito and tuna flakes (August and September 2026).',
    hours_raw: 'Dinner from 18:30 Monday, Tuesday and Friday–Sunday; lunch from 12:00 on Sunday and Tuesday only; a Kyoto breakfast at 8:00 or 9:30 once a month; closed Wednesday and Thursday (own site). Tabelog gives dinner 18:30–21:30 and lunch 12:00–15:00, lunch reservations by phone only. Reservation only, at least two days ahead, through TableCheck or by phone (own site; Tabelog). Lunch kaiseki ¥11,000 (about 2½ hours), dinner kaiseki ¥14,300 (about 3 hours), Kyoto breakfast ¥3,000, tax incl. (own site). Children from middle-school age, served the same kaiseki as adults; arriving more than 30 minutes late counts as a cancellation (Tabelog). 8 counter seats; private hire possible; cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and e-money, no QR (Tabelog). Non-smoking, with a smoking room inside (Tabelog). Coin parking nearby (Tabelog). Opening: Tabelog lists 30 August 2025 (its highlights text says August 2023); 2026 reviewers speak of a first anniversary in August 2026. About 500 m from Marutamachi station, a short walk east of Horikawa-Marutamachi (Tabelog; August 2026).',
    hours: { 0: D, 1: L, 4: D, 5: D, 6: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Horikawa-Marutamachi — west of the Imperial Palace, about 500 m from Marutamachi station',
    cuisine: 'Kyoto kaiseki at an eight-seat counter · dashi made every morning to suit each dish; a monthly-changing evening kaiseki with Kyoto vegetables and rice from Shikoku (Tabelog) · special crab kaiseki (December 2025) · August 2026: duck breast, Kamo eggplant and small potatoes; fried golden-eye snapper or Spanish mackerel in a soup of bonito and tuna dashi with winter melon; hamo with plum sauce; charcoal-seared sawara with ponzu; hassun with figs in a tofu sauce and hamo-bone crackers; Tokushima wagyu with dengaku miso; corn porridge; hamo and zucchini tempura, fig tempura; Handa somen; rice from Kagawa in a gold rice cooker with grilled eel, dashimaki and chirimen sansho; brown-sugar pudding · late September 2026 course ¥14,300: grilled eggplant in jelly, grilled-sweetfish soup, striped jack and swordfish, Miyagi bonito with onion ponzu, a platter with mackerel sushi and steamed abalone, sesame-grilled amadai, Kumamoto red beef, chestnut porridge with matsutake sauce, fried matsutake and fig, clay-pot rice, marinated-bonito rice, noodle soup, homemade pudding; drinks from about ¥1,000 a glass · October 2026: hamo and matsutake dobin-mushi, Ine tuna, Shimane sweetfish and Nagasaki striped jack, Kumamoto red beef, Kyoto pork and shrimp-yam in white miso, new Kagawa rice with a bonito-yolk topping, Shin-taka pear and brown-sugar pudding; sake such as 杉勇 特別純米 and 美丈夫 純米吟醸',
    website: WEB, gmaps: gm('お料理かさい 京都 中之町'), menu_url: WEB,
    notes: '[Kaiseki counter · Horikawa-Marutamachi, reservation only] A calm, spacious eight-seat counter on a quiet street near Horikawa-Marutamachi, opened in 2025 by a chef with more than 20 years in Kyoto cuisine, trained in Arashiyama, Gion and Kibune (own site); the chef’s wife looks after the guests. A monthly kaiseki built on morning-made dashi, charcoal grilling and seasonal fish, ending with clay-pot rice and many toppings — ¥14,300 at dinner, ¥11,000 at the twice-weekly lunch. Book at least two days ahead; no vegetarian requests.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Chef’s wife, front of house (unnamed)'], origin: 'Tokushima (August 2026 review)',
      background: 'A cook with more than 20 years in Kyoto cuisine who trained in Arashiyama, Gion and Kibune (own site). An August 2026 reviewer says the chef was formerly head chef at a restaurant in Arashiyama; another August 2026 reviewer describes a native of Tokushima with over twenty years in kaiseki and ryotei kitchens in Gion, Arashiyama and Kibune. Reviewers in August–October 2026 describe the restaurant as run by the chef and the chef’s wife, together; a September 2026 reviewer praises the comfortable distance from the chef and the wife’s warm hospitality, and an August 2026 reviewer admired the glassware chosen by the hostess. The owner personally chooses seasonal ingredients at the market (Tabelog).',
      philosophy: 'Depth rather than flashiness: dishes that put flavour and the ingredients first (Tabelog; August and October 2026 reviews).', specialty: 'Monthly kaiseki; clay-pot rice with toppings.',
      anecdotes: [
        { text: 'An August 2026 diner, curious about a round item on the counter grill, found it was a tomato served with the Tokushima beef.', source: R + 'B534285193/' },
        { text: 'An October 2026 diner on a second visit took several helpings of rice, finishing with egg over rice and soy sauce, to the sound of recorded crickets.', source: R + 'B534285193/' },
      ],
      japanese_sources_summary: '公式サイト (お料理かさい、京都市中京区の会席・懐石料理店): 京の名所・嵐山や祇園、貴船で腕を磨いた京料理歴20年以上の料理人、お昼の会席 11,000円 (税込、約2時間半、日・火の週2回 12:00〜)、夜の会席 14,300円 (税込、約3時間、18:30〜)、京の朝食 3,000円 (税込、月1回 8:00〜・9:30〜)、水・木曜日定休、2日前までの完全予約制、TableCheck または電話。食べログ: 日本料理・海鮮・天ぷら、中京区小川通丸太町下ル中之町73-6、丸太町駅から501m、完全予約制、当日のアレルギーや苦手な食材には対応できない、ベジタリアンやハラールにも対応できない、子どもは中学生以上で大人と同じ会席、30分以上の遅れはキャンセル扱い、8席 (カウンター)、貸切可、カード・電子マネー可、QR決済不可、禁煙 (店内に喫煙室)、近くにコインパーキング、オープン日 2025年8月30日 (紹介文には2023年8月)、店主が市場で旬の食材を選ぶ、毎朝ひく出汁、月替わりの夜の会席、京野菜、Shikoku の米。口コミ (2025〜2026年、英語、一部日本語の写真説明): 蟹の特別会席、丁寧で親しみやすい店主 (2025年12月)、料理人とおかみの温かいもてなし (2026年7月更新)、開店1周年、Tokushima 出身、祇園・嵐山・貴船の会席や料亭で20年以上、8席のカウンター、鴨ロース、賀茂なす、金目鯛の揚げ物と冬瓜の椀、鱧の梅肉、鰆の炙り、無花果の豆腐のソース、Tokushima の黒毛和牛、とうもろこしの粥、鱧と無花果の天ぷら、Handa のそうめん、金の釜の香川の米、鰻、出汁巻、ちりめん山椒、黒糖プリン、嵐山の店の料理長だった (2026年8月)、9月下旬の会席14,300円、焼き茄子のジュレ、焼き鮎の椀、縞鯵とメカジキ、Miyagi の戻り鰹、鯖寿司、蒸し鮑、甘鯛のごま焼き、熊本の赤牛、栗の粥に松茸の餡、松茸と無花果の揚げ物、土鍋ご飯、鰹の漬け、にゅうめん、手作りプリン、飲み物は一杯1,000円ほどから、夫婦で営む (2026年9月)、焼き茄子の寒天寄せ 卸し生姜と花穂紫蘇、島根県産 甘鯛と長崎県産 縞鯵の造り、名残りの松茸と鱧の土瓶蒸し、熊本県産 赤牛の炭火焼、鰆の霰揚げに空芯菜の胡麻和え、京都ポークと海老芋の白味噌、出汁巻玉子の染め卸し、香川県産の新米ごはん、杉勇 特別純米、美丈夫 純米吟醸、黒糖プリン、ほうじ茶 (2026年10月)。',
      confidence: 'medium', sources: [WEB, IG, TB, R + 'B522054777/', R + 'B531367176/', R + 'B534285193/', R + 'B535192600/', R + 'B536331065/', R + 'B538671770/'] },
    cultural_comfort: { level: 'japanese', note: 'Reservation-only counter; book through TableCheck or by phone at least two days ahead (own site); phone may be Japanese only (Tabelog).' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [],
      soy_sauce_wheat: [],
      vegan_cross_contact: [],
      staff_allergy_handling: [{ text: 'Tabelog: the restaurant cannot accommodate allergies or disliked ingredients on the day of the reservation, and cannot cater to vegetarian or halal requests.', source: TB, verified: TODAY }],
      positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区小川通丸太町下ル中之町73-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog listing checked 2026-11-26 (no closure badge); reviews dated December 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.0169551, 135.7540882); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [WEB, R + 'B536331065/'],
    price_note: 'Course prices from the own site (tax incl., read 2026-11-26).', last_checked: TODAY, items: [
      it('夜の会席', '', 'Evening kaiseki course (about 3 hours)', '¥14,300', 'Courses', 'ask', 'no', 'Own site; changes monthly.', 'dinner_kaiseki'),
      it('お昼の会席', '', 'Lunch kaiseki course (about 2½ hours), Sunday and Tuesday', '¥11,000', 'Courses', 'ask', 'no', 'Own site.', 'lunch_kaiseki'),
      it('京の朝食', '', 'Kyoto breakfast, once a month', '¥3,000', 'Courses', 'ask', 'no', 'Own site.', 'kyo_breakfast'),
    ] }, {
    cuisine: 'カウンター8席の京料理の会席・毎朝、料理ごとにひく出汁、京野菜と Shikoku の米を使う月替わりの夜の会席 (食べログ)・蟹の特別会席 (2025年12月)・2026年8月: 鴨ロース、賀茂なす、小芋、金目鯛や鰆の揚げ物と冬瓜の、鰹節とまぐろ節の出汁の椀、梅肉の鱧、炭火で炙った鰆のポン酢、豆腐のソースの無花果や鱧の骨せんべいの八寸、Tokushima の和牛に田楽味噌、とうもろこしの粥、鱧とズッキーニ、無花果の天ぷら、Handa のそうめん、金の釜で炊いた香川の米に鰻、出汁巻、ちりめん山椒、黒糖プリン・2026年9月下旬の会席14,300円: 焼き茄子のジュレ、焼き鮎の椀、縞鯵とメカジキ、Miyagi の戻り鰹の玉ねぎポン酢、鯖寿司や蒸し鮑の盛り合わせ、甘鯛のごま焼き、熊本の赤牛、栗の粥に松茸の餡、松茸と無花果の揚げ物、土鍋ご飯、鰹の漬けご飯、にゅうめん、手作りプリン、飲み物は一杯1,000円ほどから・2026年10月: 名残りの松茸と鱧の土瓶蒸し、Ine のまぐろ、島根県産 甘鯛と長崎県産 縞鯵の造り、熊本県産 赤牛の炭火焼、京都ポークと海老芋の白味噌、香川県産の新米ごはんに鰹節の卵黄漬けをのせて、Shin-taka の梨と黒糖プリン、杉勇 特別純米、美丈夫 純米吟醸などの日本酒',
    neighborhood: '小川通丸太町下ル、丸太町駅から約500m',
    gf_detail: '予約時に確認を。食べログによると、当日のアレルギーや苦手な食材には対応できない。会席には醤油、ポン酢、味噌、揚げ物を使う (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ベジタリアンの希望には対応できないと店が明記 (食べログ)。出汁は鰹節とまぐろ節 (2026年8・9月)。',
    notes: '[会席のカウンター・堀川丸太町、完全予約制] 堀川丸太町近くの静かな通りにある、ゆったりとしたカウンター8席の店。2025年、嵐山や祇園、貴船で腕を磨いた京料理歴20年以上の料理人が開いた (公式サイト)。おかみさんがもてなす。毎朝ひく出汁、炭火焼き、旬の魚の月替わりの会席で、締めは土鍋ご飯とたくさんのごはんのとも。夜14,300円、週2回の昼11,000円。2日前までに予約を。ベジタリアンの希望は不可。',
  });
}

save();
