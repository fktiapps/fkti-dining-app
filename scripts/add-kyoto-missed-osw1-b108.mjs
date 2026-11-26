// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 108.
//   + 炭火焼鳥 みっちゃん (small charcoal yakitori bar near Marutamachi, run by a manager at the grill)
//   + どんグリル (one-person Western-style lunch house at Kojinguchi, hamburg steak and fry sets)
//   + Cafe&Bal Cercle (eight-seat townhouse café and bar north of Nishinotoin-Nanajo, near Kyoto Station)
//   + 烹菓 京都本店 (Pouka) (cookie shop at Kojinguchi; a wheat-free chickpea cookie in its own words)
//   No skips this batch.
//   Core and notable lists have nothing left in the lane; rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first,
//   lane ids: 26042738 (囲 四条大宮駅前店 — held for Greg, NOT drafted and NOT skipped), 26028830 (うぐいす 京都駅前店 — held
//   for Greg, NOT drafted and NOT skipped), 26038238, 26038298, 26038994, 26005850.
//   Data check (current main b058a529, hidden included): none of the four is in data/kyoto.json by Tabelog id, name or
//   address; none is in another worker's pending script (all C:/PF/fkti-dining-osw*/scripts/add-kyoto-missed-* grepped).
//   Romaji rule (integrator 2026-11-26): Tabelog's English names ("Sumibi Yakitori Micchan", "Don Grill", "Poka Kyoto
//   honten") are not a source. みっちゃん and どんグリル: no source romaji — kana only, whole-string name gloss. Cercle: the
//   name is written in Latin letters on Tabelog's own name line. 烹菓: the shop's own domain pouka.co.jp and its copyright
//   line ("pouka All rights reserved") give Pouka.
//   Operator checks: みっちゃん — one shop found (Tabelog corporate-member listing; web search found no other). どんグリル —
//   one shop found. Cercle — one shop found. 烹菓 — 有限会社 烹菓 (own site): two own shops (京都本店 and 美山店 in Nantan)
//   plus cakes sold at 京せれくと in JR Kyoto Station Porta; a small group, drafted.
//   Retail rule (Greg 2026-11-07): 烹菓 is a take-home cookie shop; it qualifies on sourced GF options — the own site calls
//   its 想いやり series one that includes gluten-free cookies, and lists the chickpea cookie as made without wheat. No
//   founding date found (one June 2025 reviewer calls it long-established).
//   Other-diner remarks (Greg 2026-11-06): one February 2024 みっちゃん review about many children making it lively is a
//   single review and left out; the same month another reviewer's note that the shop suits families with children is about
//   the shop and kept.
//   Halal: no operator in this batch claims halal certification.
//   JA text: no bare 祝 or 天. Generic dish words written in Japanese (油淋鶏, トンテキ, 魯肉飯, キッシュ).
//   Pins: Tabelog /en/ ld+json points; no OSM/GSI cross-check this round (integrator runs pincheck). どんグリル and 烹菓 are
//   ~20 m apart (different addresses, 荒神町115-4 and 宮垣町96-2); nearest existing pins are Da.uchi Curry (15–18 m) and
//   Salman & Sohel Halal Kitchen (16–26 m); nothing within 15 m of any of the four.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-108');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
void skip;

// ================================================================ 炭火焼鳥 みっちゃん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038238/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_sumibi_yakitori_marutamachi', name: '炭火焼鳥 みっちゃん', category: 'OMNI',
    lat: 35.017583, lng: 135.755335, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal yakitori with salt or a sweet-savoury tare, plus side dishes such as offal yakisoba and cheese-fried gyoza; no gluten information (2022–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The menu is built on chicken; corn butter is the one vegetable dish reviewers name, and nothing is described as vegan.',
    hours_raw: 'Monday–Saturday 17:00–24:00 (last order 23:00); closed Sunday (Tabelog). Card accepted (AMEX listed) (Tabelog). No private rooms (Tabelog). Takeout: the yakitori rice bowl from one order and yakitori from five skewers (February 2025). About 400 m from Marutamachi station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Marutamachi — about 400 m from Marutamachi station',
    cuisine: 'Charcoal-grilled yakitori · negima, chicken skin, pork belly; the salt seasoning preferred by one diner (December 2022) · tsukune, a rich tare (January 2023) · tender, juicy chicken breast (August 2023) · quail wrapped in bacon with mayonnaise (February 2024) · low-temperature chicken liver with sesame oil and salt, grilled chicken outer skirt, corn butter and cheese-fried gyoza (February 2024) · gizzard, offal yakisoba, sake tastings, rice (March 2024) · yakitori rice bowl and yakitori to take away (February 2025)',
    website: null, gmaps: gm('炭火焼鳥 みっちゃん 京都 梅屋町'), menu_url: TB,
    notes: '[Charcoal yakitori · Marutamachi, open to midnight] A small, clean yakitori bar, new when first reviewed in December 2022, grilling over charcoal until midnight six nights a week. Reviewers like the skin, tsukune, juicy breast and low-temperature liver, the manager’s seasoning, and the offal yakisoba; sake tastings, children welcome, and yakitori bowls to take away. Service can be slow when one person runs it alone.',
    chef_bio: { chef_name: null, roles: ['Manager (unnamed)'], origin: null,
      background: 'A newly opened shop in December 2022 and January 2023 reviews. In January 2023 the manager was running everything alone and orders were slow; a March 2024 regular praises the manager’s seasoning of the gizzard and the polite, attentive service, and a February 2024 regular calls it comfortable alone or with children, with friendly staff. One February 2024 diner was disappointed when the mayonnaise was cleared before the quail bacon was finished.',
      philosophy: null, specialty: 'Charcoal yakitori; offal yakisoba.',
      anecdotes: [
        { text: 'A December 2022 diner in the mood for yakitori dropped in, surprised to find a yakitori shop there, and found the negima had hardly any green onion but the skin delicious.', source: R + 'B457662681/' },
        { text: 'A February 2025 diner who took the yakitori home found it good even cold.', source: R + 'B500502285/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 炭火焼鳥 みっちゃん、居酒屋・焼き鳥・串焼き、月〜土 17:00〜24:00 (L.O. 23:00)、日曜定休、カード可 (AMEX)、個室なし、丸太町駅から402m。口コミ (2022〜2025年、英語): 新しい店 (2022年12月、2023年1月)、清潔な店内、ねぎま、皮、豚バラ、塩がおすすめ (2022年12月)、店長が一人で切り盛りして提供が遅かった日も、濃いめのタレ、つくね (2023年1月)、柔らかくジューシーなむね (2023年8月)、うずらのベーコン巻きとマヨネーズ (2024年2月)、低温調理の鶏レバーをごま油と塩で、鶏のハラミ、コーンバター、チーズ揚げ餃子、一人でも子連れでも居心地がよい (2024年2月)、店長の砂肝の味付け、ホルモン焼きそば、日本酒の飲み比べ、ご飯、丁寧な接客 (2024年3月)、焼き鳥丼は1つから、焼き鳥は5本から持ち帰り可 (2025年2月)。',
      confidence: 'low', sources: [TB, R + 'B457662681/', R + 'B459720083/', R + 'B469555525/', R + 'B479172604/', R + 'B480412284/', R + 'B487012888/', R + 'B500502285/'] },
    cultural_comfort: { level: 'japanese', note: 'Small local yakitori bar; phone may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区梅屋町166-5 樋口ビル 1F',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog corporate-member listing checked 2026-11-26 (no closure badge); reviews dated December 2022 to February 2025, none since.' },
    pin_source: `Tabelog ${TB} (35.0175832, 135.7553348); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B480412284/', R + 'B487012888/', R + 'B500502285/'],
    price_note: 'No prices in the sources; reviewers spent ¥1,000–¥2,999 a head (2023–2025).', last_checked: TODAY, items: [
      it('', '', 'Chicken skin (kawa) skewer', '', 'Yakitori', 'ask', 'no', 'December 2022.', 'kawa'),
      it('', '', 'Tsukune', '', 'Yakitori', 'ask', 'no', 'January 2023.', 'tsukune'),
      it('', '', 'Low-temperature chicken liver with sesame oil and salt', '', 'Small plates', 'ask', 'no', 'February 2024.', 'chicken_liver'),
      it('', '', 'Offal yakisoba', '', 'Small plates', 'no', 'no', 'March 2024.', 'horumon_yakisoba'),
      it('', '', 'Cheese-fried gyoza', '', 'Small plates', 'no', 'no', 'February 2024.', 'cheese_gyoza'),
      it('', '', 'Yakitori rice bowl (also to take away)', '', 'Rice', 'ask', 'no', 'February 2025.', 'yakitori_don'),
    ] }, {
    cuisine: '炭火焼きの焼き鳥・ねぎま、皮、豚バラ、塩がおすすめという声 (2022年12月)・つくね、濃いめのタレ (2023年1月)・柔らかくジューシーなむね (2023年8月)・うずらのベーコン巻きとマヨネーズ (2024年2月)・低温調理の鶏レバー ごま油と塩で、鶏のハラミ、コーンバター、チーズ揚げ餃子 (2024年2月)・砂肝、ホルモン焼きそば、日本酒の飲み比べ、ご飯 (2024年3月)・焼き鳥丼と焼き鳥の持ち帰り (2025年2月)',
    neighborhood: '丸太町、丸太町駅から約400m',
    gf_detail: '要確認。塩か甘辛いタレの炭火焼き鳥と、ホルモン焼きそばやチーズ揚げ餃子などの一品。グルテンの情報はない (2022〜2025年の口コミ)。',
    vegan_detail: '要確認。中心は鶏肉。口コミに出る野菜の品はコーンバターだけで、ヴィーガンと書かれた品はない。',
    notes: '[炭火焼き鳥・丸太町、深夜0時まで] 2022年12月の口コミで新しい店とされた、清潔で小さな焼き鳥店。週6日、夜0時まで炭火で焼く。皮、つくね、ジューシーなむね、低温調理のレバー、店長の味付け、ホルモン焼きそばが好評。日本酒の飲み比べもあり、子連れでも過ごしやすく、焼き鳥丼の持ち帰りも。ひとりで回す日は提供に時間がかかることも。',
  });
}

// ================================================================ どんグリル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26038298/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_yoshoku_hamburg_kojinguchi', name: 'どんグリル', category: 'OMNI',
    lat: 35.021434, lng: 135.769597, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Hamburg steak with demi-glace or Japanese-style sauce, and breaded fried shrimp, tenderloin cutlet and kara-age in the sets — the fried items are wheat-battered; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Every set reviewers name is built on beef, pork, chicken or shrimp, with miso soup on the side; nothing is described as vegan.',
    hours_raw: 'Hours not given on Tabelog. Reviewers came for lunch from before noon to about 13:00 (July 2025; February and March 2026) and at 19:00, when it was fully booked (November 2026). About five counter seats and three tables (November 2026). Opened 10 October 2022 (Tabelog). About 440 m from Jingu-Marutamachi station (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: null, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kojinguchi — on Kawaramachi near the Kyoto Prefectural University of Medicine',
    cuisine: 'Western-style set meals · Variety Set: large fried shrimp, small homemade hamburg steak, kara-age with tartar sauce, tenderloin cutlet and salad (July and August 2025) · hamburg steak set with demi-glace and Japanese-style sauces, salad, rice, miso soup and pickles (December 2025) · Mixed Set of hamburg steak, fried shrimp and kara-age ¥2,200 tax incl., shredded cabbage with a tomato-based dressing (February 2026) · fist-sized hamburg steak of coarsely ground meat with a mild demi-glace (March 2026) · Hamburg Steak Sets B and C, rice, miso soup and pickles served first (June 2026) · “Burg Rice”, hamburg steak over rice (May 2026) · hamburg steak with kara-age (August 2026) · hamburg steak and tartar kara-age set (November 2026)',
    website: null, gmaps: gm('どんグリル 京都 荒神町'), menu_url: TB,
    notes: '[Yoshoku lunch house · Kojinguchi, one-person kitchen] A small, café-like Western-style restaurant at Kawaramachi-Kojinguchi, opened in 2022, where the young owner cooks alone and shapes each hamburg steak by hand. Coarse, juicy hamburg steak with demi-glace, fried shrimp and cutlet sets with miso soup, and cabbage in a homemade tomato dressing, mostly around ¥1,000–¥2,000. Students and elderly local couples at lunch (March 2026); orders take a little time.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Opened on 10 October 2022 (Tabelog). Reviewers describe a young owner working alone, whose kneading and patting of the hamburg could be heard from the counter (April 2026), a one-person restaurant where orders take a little time (March 2026), and an owner running the place alone (November 2026). One March 2026 reviewer found students and elderly local couples eating there at 11:30 on a holiday, with the room about 80% full; an August 2026 reviewer was neither surprised nor disappointed, and a November 2026 diner wanted a bit more meat flavour.',
      philosophy: null, specialty: 'Hand-shaped hamburg steak; the Variety Set.',
      anecdotes: [
        { text: 'A March 2026 diner looking for lunch along the Kamo River suddenly remembered the place, and wrote up the visit while half wishing to keep it a secret.', source: R + 'B528071126/' },
        { text: 'A November 2026 diner arriving at 7 pm found the whole restaurant booked.', source: R + 'B539674528/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): どんグリル、洋食・とんかつ・ダイニングバー、上京区荒神町、神宮丸太町駅から438m、予算1,000〜1,999円、2022年10月10日オープン、営業時間の記載なし。口コミ (2025〜2026年、英語): バラエティセット (大きなエビフライ、小さな自家製ハンバーグ、タルタルの唐揚げ、ヒレカツ、サラダ) (2025年7・8月)、デミグラスと和風の2種のソースのハンバーグ定食、サラダ、ご飯、味噌汁、漬物 (2025年12月)、ハンバーグ、エビフライ、唐揚げのミックスセット2,200円 (税込)、千切りキャベツにトマトのドレッシング (2026年2月)、こぶし大の粗挽きハンバーグ、やさしいデミグラス、自家製トマトソースのドレッシング、一人で営む店、祝日の11:30で8割ほどの席が埋まる、学生や地元の年配の夫婦 (2026年3月)、若い店主が一人で手ごねのハンバーグ、カフェのような店内 (2026年4月)、ハンバーグ丼のような「バーグライス」(2026年5月)、ご飯と味噌汁と漬物が先に出る (2026年6月)、喫茶店のような雰囲気 (2026年8月)、カウンター5席ほどとテーブル3卓、19時に満席の予約 (2026年11月)。',
      confidence: 'low', sources: [TB, R + 'B511012342/', R + 'B517465676/', R + 'B519650267/', R + 'B519677390/', R + 'B522432664/', R + 'B527269148/', R + 'B528071126/', R + 'B530830263/', R + 'B532842881/', R + 'B535669210/', R + 'B539544743/', R + 'B539674528/'] },
    cultural_comfort: { level: 'japanese', note: 'Small one-person restaurant; phone may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区荒神町115-4 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing checked 2026-11-26 (no closure badge); reviews dated July 2025 to November 2026.' },
    pin_source: `Tabelog ${TB} (35.0214338, 135.7695966); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511012342/', R + 'B522432664/', R + 'B532842881/'],
    price_note: 'One price in reviews (February 2026); reviewers spent ¥1,000–¥2,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Variety Set (fried shrimp, mini hamburg, kara-age, tenderloin cutlet)', '', 'Sets', 'no', 'no', 'July and August 2025.', 'variety_set'),
      it('', '', 'Mixed Set (hamburg steak, fried shrimp, kara-age)', '¥2,200', 'Sets', 'no', 'no', 'February 2026, tax incl.', 'mixed_set'),
      it('', '', 'Hamburg steak set, demi-glace or Japanese-style sauce', '', 'Sets', 'ask', 'no', 'December 2025; March 2026.', 'hamburg_set'),
      it('', '', 'Burg Rice (hamburg steak over rice)', '', 'Rice', 'ask', 'no', 'May 2026.', 'burg_rice'),
    ] }, {
    cuisine: '洋食の定食・バラエティセット (大きなエビフライ、小さな自家製ハンバーグ、タルタルソースの唐揚げ、ヒレカツ、サラダ) (2025年7・8月)・デミグラスと和風のソースのハンバーグ定食、サラダ、ご飯、味噌汁、漬物 (2025年12月)・ハンバーグ、エビフライ、唐揚げのミックスセット2,200円 (税込)、トマトのドレッシングの千切りキャベツ (2026年2月)・こぶし大の粗挽きハンバーグ、やさしいデミグラス (2026年3月)・ハンバーグ定食のBとC、ご飯と味噌汁と漬物が先に出る (2026年6月)・ご飯にハンバーグをのせた「バーグライス」(2026年5月)・ハンバーグと唐揚げ (2026年8月)・ハンバーグとタルタル唐揚げの定食 (2026年11月)',
    neighborhood: '河原町荒神口',
    gf_detail: '要確認。デミグラスか和風ソースのハンバーグと、衣をつけて揚げたエビフライ、ヒレカツ、唐揚げのセット。揚げ物には小麦の衣を使う。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。口コミに出るセットはすべて牛肉、豚肉、鶏肉、エビが中心で、味噌汁付き。ヴィーガンと書かれた品はない。',
    notes: '[洋食・荒神口、店主ひとりの厨房] 河原町荒神口の、カフェのような小さな洋食店。2022年オープン。若い店主が一人で、ハンバーグを一つずつ手でこねて焼く。粗挽きでジューシーなデミグラスのハンバーグ、エビフライやヒレカツのセットに味噌汁、自家製トマトのドレッシングのキャベツ。おおむね1,000〜2,000円。昼は学生や地元の年配の夫婦も (2026年3月)。提供には少し時間がかかる。',
  });
}

// ================================================================ Cafe&Bal Cercle
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26038994/'; const R = TB + 'dtlrvwlst/';
  const MENU = TB + 'dtlmenu/'; const DRINK = MENU + 'drink/';
  const A = day(['12:00', '19:00']); const F = day(['12:00', '20:00']); const S = day(['12:00', '18:00']);
  put({
    id: 'kyoto_cafe_bal_cercle_nanajo', name: 'Cafe&Bal Cercle', category: 'OMNI',
    lat: 34.989491, lng: 135.755173, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog notes that allergy information is available; the food is homemade set meals (hamburg steak, pork steak, fried chicken, quiche, tuna melt) and cakes, with no gluten information (Tabelog menu 2025; 2023–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The sets are meat-, egg- or tuna-based and come with miso soup; nothing is described as vegan.',
    hours_raw: 'Tuesday–Thursday 12:00–19:00; Friday and Saturday 12:00–20:00; Sunday 12:00–18:00; closed Monday, and on some Sundays (Tabelog: “Not fixed (Sundays)”). Reservations accepted (Tabelog). 8 seats at 3 tables (Tabelog); a February 2024 reviewer counted four tables, joined for a group of four. Private hire possible (Tabelog). Cards accepted; no e-money or QR payments (Tabelog). Non-smoking; no parking; power outlets; school-age children welcome; takeout (Tabelog). Allergy information available (Tabelog). Opened 22 February 2023 (Tabelog). The fourth house north of the Nishinotoin–Nanajo crossing, a townhouse with a turquoise awning; about 590 m from Kyoto Station (Tabelog).',
    hours: { 1: A, 2: A, 3: A, 4: F, 5: F, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'North of Kyoto Station — by Nishinotoin-Nanajo',
    cuisine: 'Homemade café lunch sets and a small bar · simmered hamburg steak set ¥980 with salad and soup, large rice free; pork steak set ¥1,100 (Tabelog menu, updated October 2025) · fried chicken with sweet-and-sour sauce ¥950, coffee ¥480, strawberry schnitte about ¥300–¥400 (March 2023) · yurinchi (fried chicken in a sweet vinegar sauce) set with steamed chicken and vegetables, rice and soup (July 2023); ¥960 (October 2024) · tuna melt, steamed chicken salad (May 2023) · tonteki pork steak set ¥1,000, large rice +¥100 (October 2024); ¥1,100, three a day (April 2025) · quiche plate ¥850 with vegetables and miso soup, bacon-and-mushroom or homemade tuna-and-potato, set drink +¥200 (January and April 2025) · hamburg steak, chicken nanban, sandwiches at lunch (January 2025) · chocolate cake, café au lait (March 2026) · lu rou fan (August 2026) · Asahi draft beer ¥600, highball ¥450, beer cocktails ¥580, glass of wine ¥400, bottle ¥2,500 (Tabelog drink menu, October 2025)',
    website: null, gmaps: gm('Cafe&Bal Cercle 京都 福本町'), menu_url: MENU,
    notes: '[Café and bar · north of Kyoto Station, eight seats] A narrow townhouse café behind a turquoise awning near Nishinotoin-Nanajo, open since 2023; an October 2024 reviewer found the owner, a woman, running it alone. Homemade lunch sets around ¥1,000 — simmered hamburg steak, a pork steak limited to three a day, yurinchi, quiche plates — with miso soup, cakes and coffee in the afternoon, and draft beer and wine into the evening. Takeout is popular.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened 22 February 2023 (Tabelog). An October 2024 reviewer, who went twice in one week, found the female owner apparently handling everything alone, most lunches under ¥1,000, and large rice now ¥100 extra where it had been free; the Tabelog menu updated in October 2025 again lists large rice as free with the hamburg set. A January 2025 diner who came in alone, phone battery dead, stayed longer than planned; an April 2025 reviewer saw many people buying takeout.',
      philosophy: null, specialty: 'Homemade lunch sets; quiche plate.',
      anecdotes: [
        { text: 'An October 2024 diner who usually researches before eating out walked in on a whim after reading the lunch board outside, then came back within the same week.', source: R + 'B494659758/' },
        { text: 'A February 2024 regular on a fourth visit, with a group of four, watched the back tables pushed together into one.', source: R + 'B461551550/' },
      ],
      japanese_sources_summary: '食べログ: Cafe&Bal Cercle、カフェ・バル・スイーツ、下京区福本町、西洞院七条を北へ4軒目、ターコイズのテントの町家、京都駅から589m、火〜木 12:00〜19:00、金・土 12:00〜20:00、日 12:00〜18:00、月曜定休、日曜は不定休、予約可、8席 (テーブル3卓)、貸切可、カード可、電子マネー・QR決済不可、禁煙、駐車場なし、電源あり、子ども可、テイクアウト可、アレルギー表示あり、2023年2月22日オープン。メニュー (2025年10月31日更新): 煮込みハンバーグ定食980円 サラダとスープ付き、ご飯大盛り無料、ポークステーキ定食1,100円、アサヒ生ビール600円、ハイボール450円、ビアカクテル580円、グラスワイン400円、ボトル2,500円。口コミ (2023〜2026年、英語): 甘酢の唐揚げ950円、コーヒー480円、いちごのシュニッテ (2023年3月)、ツナメルト、蒸し鶏のサラダ (2023年5月)、油淋鶏の定食 (2023年7月)、トンテキ定食1,000円、油淋鶏定食960円、大盛りは無料から100円に、女性の店主が一人で切り盛り (2024年10月)、キッシュプレート850円 野菜と味噌汁付き、ベーコンとキノコか自家製ツナとじゃがいも、セットドリンク200円 (2025年1・4月)、トンテキ定食1,100円は1日3食限定 (2025年4月)、テイクアウトの客が多い、チョコレートケーキ、カフェオレ (2026年3月)、魯肉飯 (2026年8月)。',
      confidence: 'low', sources: [TB, MENU, DRINK, R + 'B461551550/', R + 'B463596437/', R + 'B468335727/', R + 'B494659758/', R + 'B501502461/', R + 'B501565281/', R + 'B504133596/', R + 'B504273041/', R + 'B524545443/', R + 'B532837191/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small café; the lunch menu is posted outside (October 2024); phone may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区福本町407',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing checked 2026-11-26 (no closure badge; menu updated 2025-10-31); reviews dated February 2023 to August 2026.' },
    pin_source: `Tabelog ${TB} (34.9894905, 135.7551726); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, DRINK, R + 'B504133596/', R + 'B504273041/'],
    price_note: 'Prices from the Tabelog menu (tax incl., updated 2025-10-31) and 2024–2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Simmered hamburg steak set, with salad and soup', '¥980', 'Lunch sets', 'ask', 'no', 'Tabelog menu 2025; large rice free.', 'hamburg_set'),
      it('', '', 'Pork steak (tonteki) set', '¥1,100', 'Lunch sets', 'ask', 'no', 'Tabelog menu 2025; three a day (April 2025).', 'tonteki_set'),
      it('', '', 'Yurinchi set', '¥960', 'Lunch sets', 'no', 'no', 'October 2024.', 'yurinchi_set'),
      it('', '', 'Quiche plate, with vegetables and miso soup', '¥850', 'Lunch sets', 'no', 'no', 'January and April 2025; drink +¥200.', 'quiche_plate'),
      it('', '', 'Asahi draft beer', '¥600', 'Drinks', 'no', 'ask', 'Tabelog drink menu 2025.', 'draft_beer'),
      it('', '', 'Glass of wine, red or white', '¥400', 'Drinks', 'ask', 'ask', 'Tabelog drink menu 2025.', 'glass_wine'),
    ] }, {
    cuisine: '手作りのカフェの定食と小さなバル・煮込みハンバーグ定食980円 サラダとスープ付き、ご飯大盛り無料、ポークステーキ定食1,100円 (食べログのメニュー、2025年10月更新)・甘酢の唐揚げ950円、コーヒー480円、いちごのシュニッテ300〜400円ほど (2023年3月)・蒸し鶏と野菜を添えた油淋鶏の定食、ご飯とスープ (2023年7月)、960円 (2024年10月)・ツナメルト、蒸し鶏のサラダ (2023年5月)・トンテキ定食1,000円、ご飯大盛り100円 (2024年10月)、1,100円で1日3食 (2025年4月)・キッシュプレート850円 野菜と味噌汁付き、ベーコンとキノコか自家製ツナとじゃがいも、セットドリンク200円 (2025年1・4月)・昼はハンバーグ、チキン南蛮、サンドイッチも (2025年1月)・チョコレートケーキ、カフェオレ (2026年3月)・魯肉飯 (2026年8月)・アサヒ生ビール600円、ハイボール450円、ビアカクテル580円、グラスワイン400円、ボトル2,500円 (食べログのドリンクメニュー、2025年10月)',
    neighborhood: '京都駅の北、西洞院七条のそば',
    gf_detail: '要確認。食べログにはアレルギー表示ありとある。料理はハンバーグ、ポークステーキ、唐揚げ、キッシュ、ツナメルトなど手作りの定食とケーキで、グルテンの情報はない (食べログのメニュー 2025年、2023〜2026年の口コミ)。',
    vegan_detail: '要確認。定食は肉、卵、ツナが中心で味噌汁付き。ヴィーガンと書かれた品はない。',
    notes: '[カフェ&バル・京都駅の北、8席] 西洞院七条近く、ターコイズのテントの細長い町家のカフェ。2023年オープン。女性の店主が一人で切り盛りしていたという口コミ (2024年10月)。煮込みハンバーグ、1日3食のポークステーキ、油淋鶏、キッシュプレートなど1,000円前後の手作りの定食に味噌汁。午後はケーキとコーヒー、夕方まで生ビールやワインも。テイクアウトも人気。',
  });
}

// ================================================================ 烹菓 京都本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26005850/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.pouka.co.jp/'; const ABOUT = WEB + 'abouts/';
  const ING = WEB + 'user_data/ingredient.php'; const MIYAMA = WEB + 'user_data/miyama.php';
  const C14 = WEB + 'products/list.php?category_id=14'; const C15 = WEB + 'products/list.php?category_id=15';
  const P76 = WEB + 'products/detail.php?product_id=76'; const P72 = WEB + 'products/detail.php?product_id=72'; const P73 = WEB + 'products/detail.php?product_id=73';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_pouka_cookie_shop_kojinguchi', name: '烹菓 京都本店 (Pouka)', category: 'OMNI',
    lat: 35.021453, lng: 135.769821, cuisine_type: 'sweets',
    gf_confidence: 'options', gf_label: 'Some GF options', gf_detail: 'Some GF options: the shop’s 想いやり cookie series includes gluten-free cookies (own site), and its chickpea cookie (ひよこ豆クッキー, ¥640) is listed as made without wheat, sugar, butter or egg. Every other cookie and cake on the site lists wheat flour, and nothing is said about separate equipment — ask in the shop.',
    vegan_status: 'limited', vegan_label: 'Limited vegan', vegan_detail: 'Limited: the buckwheat cookie (そばクッキー, ¥500) and oatmeal cookie (¥550) list no animal ingredients (own site), but the shop does not call them vegan; the rest use butter, eggs, cheese or honey. Chiffon cakes use eggs.',
    hours_raw: 'Tuesday–Sunday 10:00–18:00; closed Monday (since 2023), plus a summer break and the New Year holidays (own site; Tabelog). Takeaway only: a shop of bagged cookies and a few cakes, no seating mentioned (own site; reviews). No reservations (Tabelog). Cards (JCB, AMEX), e-money and QR payments (Tabelog). Non-smoking; no parking (Tabelog). 3 minutes from the Kojinguchi city bus stop, 5 minutes from Keihan Marutamachi (own site). Cookies are also sold online and at the shop’s second branch in Miyama (Nantan), which has a café corner; cakes are also at 京せれくと in JR Kyoto Station Porta (own site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kojinguchi — just east of Kawaramachi, near the Kamo River',
    cuisine: 'Cookie specialist, takeaway · domestic wheat flour and 100% butter, no margarine, shortening, preservatives or colourings (own site) · plain cookie ¥530, mixed bag of 12 kinds ¥780, egg-free almond cookie ¥544, white-miso cookie with 加藤商店 white miso ¥520, sweet-yuba cookie ¥500, mugwort ¥500, rice cookie with Miyama rice flour ¥581, cornflake balls ¥550, cheese cookie ¥650 (own site) · Kyoto-vegetable cookie mixes (own site; 2023–2026 reviews) · 想いやり series without butter or white sugar, in rice oil: chickpea cookie ¥640 (wheat-free), buckwheat ¥500, oatmeal ¥550, Jerusalem artichoke ¥500, okara-konnyaku ¥500 (own site) · plain chiffon cake ¥237, banana, tea and seasonal ¥259 (own site); plain chiffon ¥255 (September 2023) · plain cookie ¥389, squirrel cookie ¥213 (March 2025) · white-miso cookie ¥445, mugwort ¥418, a tasting of freshly baked cookies on a food tour (June 2025) · mixed bag about ¥800 (September 2026)',
    website: WEB, gmaps: gm('烹菓 京都本店 荒神口'), menu_url: C14,
    notes: '[Cookie shop · Kojinguchi, takeaway] A small, retro-feeling cookie specialist a few steps east of Kawaramachi, with rows of bagged cookies — plain butter cookies, mugwort, white miso, yuba, Kyoto-vegetable mixes — and a few chiffon cakes. Made with domestic flour and butter and no additives (own site). A series without butter or white sugar includes a wheat-free chickpea cookie; the buckwheat and oatmeal cookies list no animal ingredients. Gift boxes; a second shop in Miyama.',
    chef_bio: { chef_name: null, roles: ['Operator 有限会社 烹菓 (staff unnamed)'], origin: null,
      background: 'Run by 有限会社 烹菓, with this main shop and a second in Miyama, Nantan, that has a café space (own site). The shop uses local Kyoto ingredients and bakes simply to bring out their flavour (own site); its plain cookie was featured on 毎日放送’s ちちんぷいぷい (own site). A June 2025 reviewer on a food tour calls it a long-established Kyoto cookie shop; a December 2023 reviewer found the entrance and the cookies retro, with a Showa feel. No founding date found.',
      philosophy: 'Domestic wheat flour, 100% butter, and no preservatives or colourings (own site).', specialty: 'Plain butter cookies; Kyoto-vegetable cookies.',
      anecdotes: [
        { text: 'A December 2023 diner, out walking after a café, was led here when the diner’s husband spotted a sign for a handmade-cookie shop, and took home the squirrel-printed mixed bag.', source: R + 'B74963067/' },
        { text: 'A February 2026 parent reports that after trying the plain cookie, the child stopped eating cheap supermarket cookies.', source: R + 'B522045162/' },
      ],
      japanese_sources_summary: '公式サイト (京都のクッキー専門店 烹菓、有限会社 烹菓): 京都本店 上京区荒神口通り河原町東入る宮垣町96-2、10:00〜18:00、月曜定休 (2023年より)、夏季休業・年末年始を除く、市バス荒神口から徒歩3分、京阪丸太町から徒歩5分、美山店 (南丹市美山町、カフェスペースあり)、ケーキは京都本店、美山店、JR京都駅ポルタ内「京せれくと店」で、京都特産の素材と地元産材料、国産小麦粉、バター100%、マーガリン・ショートニング・保存料・着色料は使わない、プレーンクッキー530円 (毎日放送「ちちんぷいぷい」で紹介)、ミックスクッキー780円 (12種類)、卵を使わないアーモンドクッキー544円、加藤商店の白味噌の白味噌クッキー520円、京ゆばクッキー500円、よもぎクッキー500円、美山産のうるち米を使ったお米のクッキー581円、京都かおるこさんの想いやりクッキー (保存料や合成添加物、バターと白砂糖を使わず、米油、グルテンフリーやシュガーフリーなどのクッキー): ひよこ豆クッキー640円 (小麦・砂糖・バター・卵不使用)、そばクッキー500円 (白砂糖・バター・卵不使用、原材料にそば粉と国産小麦粉)、オートミールクッキー550円 (砂糖・バター・卵不使用、全粒粉)、菊芋クッキー500円、おからこんにゃくクッキー500円、シフォンケーキ プレーン237円、バナナ・紅茶・季節259円 (国産小麦粉、砂糖、卵、植物油)。食べログ: ケーキ、火〜日 10:00〜18:00、月曜定休、予約不可、カード (JCB、AMEX)・電子マネー・QR決済可、禁煙、駐車場なし、神宮丸太町駅から429m。口コミ (2023〜2026年、英語): 無添加のクッキーとシフォンケーキ、プレーンのシフォン255円、京野菜ミックス600円 (2023年9月)、コーンフレークボール、よもぎ (2023年7月)、定番12種の詰め合わせと京野菜7種のミックス (京ゆば、丹波黒豆きな粉、よもぎ)、チーズ (2024年10月)、ひよこの形のクッキー (2024年11月)、プレーン389円、リス213円 (2025年3月)、焼きたてのクッキーの試食、老舗のクッキー店、白味噌445円、よもぎ418円 (2025年6月)、クッキーのほかはプレーンのシフォンケーキだけ (2026年2月)、ミックス800円ほど (2026年9月)、昭和レトロな入口、リスの絵の袋 (2023年12月)。',
      confidence: 'low', sources: [WEB, ABOUT, ING, MIYAMA, C14, C15, P72, P73, P76, TB, R + 'B248741525/', R + 'B487863231/', R + 'B495178899/', R + 'B495895248/', R + 'B503382619/', R + 'B507996763/', R + 'B510769509/', R + 'B518590836/', R + 'B522045162/', R + 'B536066998/', R + 'B537327687/', R + 'B74963067/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-serve bagged cookies with Japanese labels; pay at the counter. One July 2023 reviewer could not read all the descriptions and bought a mixed bag.' },
    safety: { dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Every other cookie and cake on the own site lists wheat flour (国産小麦粉 or 全粒粉); the site says nothing about separate equipment or packing for the wheat-free cookie.', source: C15, verified: TODAY }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'The buckwheat and oatmeal cookies list no animal ingredients but are not labelled vegan; most other cookies use butter and eggs (own site).', source: C14, verified: TODAY }],
      staff_allergy_handling: [],
      positives: [
        { text: 'ひよこ豆クッキー (¥640): listed as made without wheat, sugar, butter or egg; ingredients chickpea flour, honey, walnuts, raisins, rice oil, chocolate, soy milk, white sesame, baking powder.', source: P76, verified: TODAY },
        { text: 'The shop describes its 想いやり cookie series as including gluten-free and sugar-free cookies, without preservatives, synthetic additives, butter or white sugar.', source: C15, verified: TODAY },
      ],
      confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区荒神口通河原町東入ル宮垣町96-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site (copyright 2012–2026) and Tabelog listing checked 2026-11-26 (no closure badge); reviews dated July 2023 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.021453, 135.7698212); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [C14, C15, P72, P73, P76],
    price_note: 'Prices from the own online shop (tax incl., read 2026-11-26); some 2025 review prices differ.', last_checked: TODAY, items: [
      it('プレーンクッキー', '', 'Plain cookie', '¥530', 'Cookies', 'no', 'no', 'Own site; egg and butter.', 'plain_cookie'),
      it('ミックスクッキー', '', 'Mixed cookies, 12 kinds', '¥780', 'Cookies', 'no', 'no', 'Own site.', 'mixed_cookies'),
      it('白味噌クッキー', '', 'White-miso cookie', '¥520', 'Cookies', 'no', 'ask', 'Own site; ¥445 in June 2025.', 'shiro_miso_cookie'),
      it('ひよこ豆クッキー', '', 'Chickpea cookie (wheat-free)', '¥640', 'Cookies', 'gf', 'no', 'Own site: no wheat, sugar, butter or egg; contains honey.', 'chickpea_cookie'),
      it('そばクッキー', '', 'Buckwheat cookie', '¥500', 'Cookies', 'no', 'ask', 'Own site: buckwheat and wheat flour, soy milk, rice oil; no animal ingredients listed.', 'soba_cookie'),
      it('オートミールクッキー', '', 'Oatmeal cookie', '¥550', 'Cookies', 'no', 'ask', 'Own site: whole-wheat flour, oats, rice oil, maple syrup; no animal ingredients listed.', 'oatmeal_cookie'),
      it('シフォンケーキ プレーン', '', 'Plain chiffon cake', '¥237', 'Cakes', 'no', 'no', 'Own site; in store only.', 'chiffon_cake'),
    ] }, {
    cuisine: 'クッキー専門店、持ち帰り・国産小麦粉とバター100%、マーガリン、ショートニング、保存料、着色料は使わない (公式サイト)・プレーンクッキー530円、12種のミックスクッキー780円、卵を使わないアーモンドクッキー544円、加藤商店の白味噌の白味噌クッキー520円、京ゆばクッキー500円、よもぎ500円、美山産のうるち米を使ったお米のクッキー581円、コーンフレークボール550円、チーズクッキー650円 (公式サイト)・京野菜クッキーのミックス (公式サイト、2023〜2026年の口コミ)・バターと白砂糖を使わず米油で焼く想いやりクッキー: 小麦不使用のひよこ豆クッキー640円、そば500円、オートミール550円、菊芋500円、おからこんにゃく500円 (公式サイト)・シフォンケーキ プレーン237円、バナナ、紅茶、季節259円 (公式サイト)、プレーンのシフォン255円 (2023年9月)・プレーンクッキー389円、リスのクッキー213円 (2025年3月)・白味噌クッキー445円、よもぎ418円、食べ歩きツアーで焼きたての試食 (2025年6月)・ミックス800円ほど (2026年9月)',
    neighborhood: '荒神口、河原町のすぐ東、鴨川の近く',
    gf_detail: '一部グルテンフリーあり: 想いやりクッキーのシリーズにグルテンフリーのクッキーがあり (公式サイト)、ひよこ豆クッキー (640円) は小麦・砂糖・バター・卵不使用と書かれている。ほかのクッキーとケーキはすべて原材料に小麦粉があり、製造器具を分けているかの記載はない。店で確認を。',
    vegan_detail: '少しだけ: そばクッキー (500円) とオートミールクッキー (550円) は原材料に動物性のものがない (公式サイト) が、店はヴィーガンとはうたっていない。ほかはバター、卵、チーズ、蜂蜜を使い、シフォンケーキにも卵。',
    notes: '[クッキー専門店・荒神口、持ち帰り] 河原町から少し東に入った、レトロな雰囲気の小さなクッキー専門店。プレーンのバタークッキー、よもぎ、白味噌、京ゆば、京野菜のミックスなど袋入りのクッキーが並び、シフォンケーキも少し。国産小麦粉とバターを使い、添加物は使わない (公式サイト)。バターと白砂糖を使わないシリーズには小麦不使用のひよこ豆クッキーがあり、そばとオートミールのクッキーは原材料に動物性のものがない。ギフトの詰め合わせも。美山にも店がある。',
  });
}

save();
