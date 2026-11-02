// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 8.
// + スリランカ料理 ラサハラ RASA HALA (Sri Lankan rice-and-curry plates and biryani by Higashimikuni, since 2011; Curry WEST 100 2019)
// + コーヒー＆ベーカリー アルル Coffee & Bakery Aruru (levain bakery and coffee bar by Higashimikuni, wine and bread in the evening)
// + うどん工房 天空 Udon Kobo Tenku (homemade udon in the Umeda Hagakure line: nama shoyu udon, kayaku rice)
// + 中華ダイニング 隆勝 Chuka Dining Ryusho (Chinese set lunches with free rice, tantanmen; all-you-can-eat evenings)
// Lane check: every id above is even. Taken in queue order (nearest first); no skips this batch.
// Chain check: none of the four names another branch on Tabelog. The osaka-kita crawl holds two more shops called 隆勝
// (27080557 隆勝 and 27127595 唐揚げ&餃子専門店 隆勝, both at 東三国1-1-32); no source I read links them to this one, so no
// relation is claimed. None of the four is in data/osaka.json (grep by id, name and address, 2026-11-02).
// Shared buildings, checked against address_ja in data/osaka.json:
// - Udon Kobo Tenku is at 東三国4-17-7 メゾンハヤシ 1F, the same street number as osaka_katsu_bei_higashimikuni (address_ja
// "大阪府大阪市淀川区東三国4-17-7"); an August 2026 Tenku diner had "been to the nearby katsu shop before". Tabelog points 8 m
// apart, each kept. RASA HALA (4-17-6) and Aruru (4-17-8) are the neighbouring street numbers.
// - Ryusho is at 西宮原2-6-16 新大阪コーポビアネーズ 1F, the same building as osaka_ramen_yamafuji_shin_osaka (address_ja
// "大阪府大阪市淀川区西宮原2-6-16 新大阪コーポビアネーズ 1F"); Tabelog points 38 m apart, each kept.
// Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ スリランカ料理 ラサハラ
{
 const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27062180/'; const R = TB + 'dtlrvwlst/';
 const W = day(['11:00', '14:00'], ['17:30', '22:00']);
 put({
 id: 'osaka_rasa_hala_higashimikuni', name: 'スリランカ料理 ラサハラ (RASA HALA)', category: 'OMNI',
 lat: 34.739826, lng: 135.496860, cuisine_type: 'curry',
 gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The plates are basmati rice with curries, dal and side dishes, and the biryani is rice-based, but nothing is described as gluten-free and the curry bases are not described.',
 vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A Veggie Plate is on the menu, not spicy (August 2026), and the Ceylon plates include a lentil curry and a vegetable curry (October 2026), but nothing is labelled vegan and the sides are not described.',
 hours_raw: 'Tue–Sat 11:00–14:00 and 17:30–22:00; Sun 11:00–14:00; closed Monday (Tabelog, hours changed from July 2026). Special events on Poya (full-moon) days; daily specials and days off posted on the shop\'s Facebook page (Tabelog). Reservations accepted (Tabelog). No cards or e-money; PayPay accepted (Tabelog). 18 seats: two tables for four, three for two, four at the counter; hire up to 20; non-smoking (Tabelog). Spice adjusted on request, and a children\'s curry made with notice (Tabelog). Opened 5 December 2011 (Tabelog).',
 hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: day(['11:00', '14:00']) }, hours_status: 'regular',
 flags: { reservation: true, cash_only: false, halal: false, open_late: false },
 neighborhood: '東三国4-17-6 — 150 m west of Exit 5 of Higashimikuni Stn (Midosuji Line), 2 min (Tabelog)',
 cuisine: 'Sri Lankan rice and curry (Tabelog) · Special Ceylon Plate ¥1,500: basmati rice, five side dishes, an egg and three curries (meat, lentil and vegetable) (September and October 2026); Ceylon Plate lunch with a meat curry of choice (chicken, pork, mutton or pork keema) and beans and vegetables (September and November 2026) · Veggie Plate, not spicy (August 2026) · biryani: mutton ¥1,500, bone-in (September and October 2026); chicken ¥1,400 with mini salad, with fried and stewed chicken, sweet dal and tangy sides (September 2026); large portions possible · coriander sambol, fried rice with chicken curry (2026) · desserts: Kal Dothul (November 2026), ice cream on warm pastry (May 2026) · chai, iced chai; wine (Tabelog)',
 website: 'https://www.facebook.com/RASAHALA', gmaps: gm('RASA HALA ラサハラ 東三国'), menu_url: null,
 notes: "[Sri Lankan · Higashimikuni, rice and curry by the station] A small Sri Lankan restaurant two minutes from Higashimikuni Station, open since 2011 and on Tabelog's Curry WEST 100 in 2019, where a Sri Lankan chef cooks (September 2026). The lunch to order is the Ceylon plate: basmati rice with a meat curry (chicken, pork, mutton or keema), a lentil and a vegetable curry, an egg and five small sides, ¥1,500 for the special (2026), which you mix together as you go. The meat curries can be fierce, the dal gentle; there is a mild Veggie Plate, and biryani with chicken or bone-in mutton. Kal Dothul, a sweet set like a rice cake, finishes it (November 2026). The chef is friendly; ask about heat when ordering. Closed Monday; Sunday lunch only.",
 chef_bio: { chef_name: null, roles: ['Sri Lankan chef (unnamed) and staff'], origin: 'Sri Lanka, per a September 2026 review ("The Sri Lankan chef truly delivers authentic flavors").', background: 'Per the Tabelog listing: opened 5 December 2011; Tabelog Curry WEST 100 2019; daily specials and days off on Facebook; spice adjusted on request and a children\'s curry with notice; special events on Poya (full-moon) days. A November 2026 diner: "The chef was also very friendly and had a lovely smile!"', philosophy: null, specialty: 'Ceylon plate; biryani.',
 anecdotes: [
 { text: '"The Special Ceylon Plate is a colorful dish featuring basmati rice, five side dishes, an egg, and three types of curry—meat, lentil, and vegetable." — October 2026.', source: R + 'B536918195/' },
 { text: '"The Veggie Plate wasn\'t spicy, so it\'s recommended for those who want to enjoy spices but are sensitive to heat." — August 2026.', source: R + 'B534648642/' },
 { text: '"Kal Dothul had a texture similar to a sweet rice cake or yokan, and it was a sweet and spicy dessert." — November 2026, after a Ceylon plate with pork keema.', source: R + 'B538421573/' },
 ],
 japanese_sources_summary: '食べログ: スリランカ料理 ラサハラ、スリランカ料理・カレー、食べログ カレー WEST 百名店 2019、大阪市淀川区東三国4-17-6、Midosuji 線 東三国駅5番出口から西へ150m、徒歩2分、火〜土11:00〜14:00、17:30〜22:00、日11:00〜14:00、月曜休み (2026年7月から)、Poya (満月) の日に特別なイベント、日替わりと休みは Facebook で、予約可、カード・電子マネー不可、PayPay 可、18席 (4人テーブル2、2人テーブル3、カウンター4)、貸切20名まで、禁煙、辛さの調整と子ども用のカレーは事前に、2011年12月5日オープン。口コミ (2026年5月〜11月): スリランカ出身のシェフ、Special Ceylon Plate 1,500円 (バスマティライス、おかず5種、卵、肉・豆・野菜のカレー3種)、肉はチキン、ポーク、マトン、ポークキーマから、辛くない Veggie Plate、骨のついたマトンのビリヤニ1,500円、チキンビリヤニ1,400円、coriander sambol、チャーハン、Kal Dothul、チャイ、気さくなシェフ、肉のカレーは辛め。',
 confidence: 'medium', sources: [TB, 'https://www.facebook.com/RASAHALA', R + 'B531161453/', R + 'B534648642/', R + 'B534815007/', R + 'B535444350/', R + 'B535872053/', R + 'B536091050/', R + 'B536588128/', R + 'B536918195/', R + 'B538352438/', R + 'B538421573/'] },
 cultural_comfort: { level: 'konnichiwa', note: 'Spice adjusted on request; a mild Veggie Plate exists. No English menu listed and no English evidence found.' },
 safety: SAFETY0,
 mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国4-17-6',
 existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the shop\'s own July 2026 notice; reviews dated through November 2026.' },
 pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国四丁目17番6号 (go) 7m; next door to osaka_katsu_bei_higashimikuni (4-17-7), its own point 8 m away; ${TODAY}`,
 }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535872053/', R + 'B536091050/', R + 'B534648642/'],
 price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
 it('', '', 'Special Ceylon Plate (rice, three curries, five sides, egg)', '¥1,500', 'Plates', 'ask', 'no', 'September 2026.', 'special_ceylon'),
 it('', '', 'Veggie Plate', '', 'Plates', 'ask', 'ask', 'August 2026; not spicy.', 'veggie_plate'),
 it('', '', 'Mutton biryani', '¥1,500', 'Biryani', 'ask', 'no', 'September 2026.', 'mutton_biryani'),
 it('', '', 'Chicken biryani with mini salad', '¥1,400', 'Biryani', 'ask', 'no', 'September 2026.', 'chicken_biryani'),
 it('', '', 'Kal Dothul (dessert)', '', 'Dessert', 'ask', 'ask', 'November 2026.', 'kal_dothul'),
 ] }, {
 cuisine: 'スリランカのライスアンドカレー (食べログ)・Special Ceylon Plate 1,500円: バスマティライス、おかず5種、卵、カレー3種 (肉、豆、野菜) (2026年9月と10月)。肉のカレーをチキン、ポーク、マトン、ポークキーマから選ぶCeylon Plate のランチ、豆と野菜も (2026年9月と11月)・辛くない Veggie Plate (2026年8月)・ビリヤニ: 骨つきのマトン1,500円 (2026年9月と10月)。揚げたチキンと煮込んだチキン、甘いダル、酸味のあるおかずのチキン1,400円、ミニサラダつき (2026年9月)。大盛りも・coriander sambol、チャーハンとチキンカレー (2026年)・デザート: Kal Dothul (2026年11月)、温かいペストリーにアイス (2026年5月)・チャイ、アイスチャイ。ワイン (食べログ)',
 neighborhood: '東三国4-17-6。Midosuji 線 東三国駅5番出口から西へ150m、徒歩2分 (食べログ)',
 gf_detail: '要確認。グルテンの情報なし。プレートはバスマティライスにカレー、ダル、おかず、ビリヤニもお米だが、グルテンフリーの説明はなく、カレーのベースの説明もない。',
 vegan_detail: '要確認。辛くない Veggie Plate があり (2026年8月)、Ceylon Plate には豆のカレーと野菜のカレーがつく (2026年10月)。ヴィーガンと書かれた料理はなく、おかずの中身の説明もない。',
 notes: '[スリランカ料理・東三国、駅近くのライスアンドカレー] 東三国駅から2分の小さなスリランカ料理の店で、2011年から。食べログのカレー WEST 百名店に2019年に選ばれていて、スリランカ出身のシェフが作る (2026年9月)。頼むべきはCeylon Plate: バスマティライスに肉のカレー (チキン、ポーク、マトン、キーマ)、豆と野菜のカレー、卵、おかず5種で、スペシャルは1,500円 (2026年)。まぜながら食べる。肉のカレーはかなり辛いことも、ダルはやさしい。辛くない Veggie Plate や、チキンや骨つきマトンのビリヤニもある。しめは Kal Dothul、ようかんのような甘いお菓子 (2026年11月)。シェフは気さく。辛さは注文のときに相談を。月曜休み、日曜は昼だけ。',
 });
}

// ================================================================ コーヒー＆ベーカリー アルル
{
 const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27011538/'; const R = TB + 'dtlrvwlst/';
 const W = day(['07:30', '20:00']);
 put({
 id: 'osaka_aruru_higashimikuni', name: 'コーヒー＆ベーカリー アルル (Coffee & Bakery Aruru)', category: 'OMNI',
 lat: 34.739772, lng: 135.496470, cuisine_type: 'cafe',
 gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery (levain breads, baguettes, pastries, sandwiches).',
 vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The pain de Lodève is "made with just water and wheat" (March 2026) and the baguette is plain, but nothing is labelled vegan; most other breads use butter, cream, eggs, cheese or meat.',
 hours_raw: 'Mon–Fri 7:30–20:00; Sat and holidays 7:30–18:00; closed Sunday; hours may change (Tabelog). No reservations; cash only (Tabelog; April 2026). 16 seats at tables and a counter; non-smoking; takeaway (Tabelog). Eat-in requires one drink (July 2026); a toaster is there to warm your bread (2023, March 2026). Bread runs low by the evening (March 2026). Opened 4 August 2022 (Tabelog).',
 hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: day(['07:30', '18:00']) }, hours_status: 'regular',
 flags: { reservation: false, cash_only: true, halal: false, open_late: false },
 neighborhood: '東三国4-17-8, グランヴィー新大阪 103 — about 5 min from Exit 5 of Higashimikuni Stn (Tabelog), on a shopping-street-like road (July 2026), behind a plant-covered façade (March 2026)',
 cuisine: 'Levain bakery with freshly roasted coffee (2026) · hard breads: pain de Lodève, 90% hydration, water and wheat only, ¥250 (March and July 2026); baguette ¥250, cheese and dried-fruit loaf ¥690 (July 2026); cheese levain, half ¥580 (July 2026) · Lodève pizza with potato ¥350, roast-chicken rustique sandwich ¥420, French toast ¥300, rum raisin ¥350, almond croissant ¥350 (March 2026) · salt bread ¥150, cream bread ¥260, egg pizza ¥270 (October 2026); egg sandwich ¥230 (July 2026); melon bread (March 2026) · tartines at breakfast (September 2025) · coffee ¥500 (April 2026), iced latte ¥450 (July 2026) · evenings: a snack-bread set of soup, bruschetta and all-you-can-eat French and white bread ¥500 (July 2026); three reds, one orange and three whites by the glass, and shochu (March 2026)',
 website: null, gmaps: gm('コーヒー＆ベーカリー アルル 東三国'), menu_url: null,
 notes: "[Bakery café · Higashimikuni, levain bread by day, wine by night] A small bakery and coffee bar a few minutes from Higashimikuni Station, open since 2022 behind a plant-covered front, baking levain breads that reviewers rate highly: a 90%-hydration pain de Lodève of just water and wheat for ¥250, a cheese and dried-fruit loaf, baguettes, an almond croissant and a salt bread one diner loved (2026). Eat in with freshly roasted coffee (one drink each) and warm your bread in the toaster. In the evening it doubles as a bar, with a few wines by the glass and a ¥500 snack set of soup, bruschetta and all-you-can-eat bread with salt and sunflower oil (July 2026). One April 2026 diner found the service curt and the coffee lukewarm. Cash only; open from 7:30, closed Sunday.",
 chef_bio: { chef_name: null, roles: ['Baker and coffee bar staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 4 August 2022 (Tabelog). Reviewers: the breads are levain-based (March 2026); the "master" suggested drinks to match what one diner wanted (March 2026); an April 2026 diner wondered whether "the quiet young man" at the counter was the owner.', philosophy: null, specialty: 'Pain de Lodève and levain breads; evening snack-bread set.',
 anecdotes: [
 { text: '"With a hydration rate of 90%, this chewy bread is made with just water and wheat." — March 2026, the pain de Lodève for JPY 250.', source: R + 'B524036836/' },
 { text: '"The snack bread set comes with soup and bruschetta, along with all-you-can-eat French bread for just JPY 500!" — July 2026, an evening visit.', source: R + 'B524228978/' },
 { text: '"Upon taking a sip, I found it... lukewarm!!" — April 2026, a JPY 500 hot coffee.', source: R + 'B525487693/' },
 ],
 japanese_sources_summary: '食べログ: コーヒー＆ベーカリー アルル、パン・サンドイッチ、大阪市淀川区東三国4-17-8 グランヴィー新大阪103、Midosuji 線 東三国駅5番出口から約5分、月〜金7:30〜20:00、土・祝7:30〜18:00、日曜休み、予約不可、現金のみ、16席、禁煙、テイクアウト、2022年8月4日オープン。口コミ (2023年11月〜2026年10月): 緑の多い外観、ルヴァンのパン、加水率90%で水と小麦だけのpain de Lodève 250円、バゲット250円、チーズとドライフルーツのパン690円、チーズのルヴァン半分580円、Lodève のピザ350円、ローストチキンのサンド420円、フレンチトースト300円、ラムレーズン350円、アーモンドクロワッサン350円、塩パン150円、クリームパン260円、卵のピザ270円、卵サンド230円、メロンパン、朝のタルティーヌ、自家焙煎のコーヒー500円、アイスラテ450円、イートインはワンドリンク、トースターあり、夜はスープとブルスケッタと食べ放題のパンのセット500円、グラスワイン (赤3、オレンジ1、白3)、焼酎、コーヒーがぬるかったという声も。',
 confidence: 'medium', sources: [TB, R + 'B475241347/', R + 'B507781021/', R + 'B524036836/', R + 'B524228978/', R + 'B524455964/', R + 'B525487693/', R + 'B526529826/', R + 'B527828588/', R + 'B531173353/', R + 'B536572080/'] },
 cultural_comfort: { level: 'konnichiwa', note: 'Pick bread from the shelves and pay at the counter; eat-in with one drink; cash only. No English evidence found.' },
 safety: SAFETY0,
 mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国4-17-8 グランヴィー新大阪103',
 existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
 pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国四丁目17番8号 (go) 15m; ${TODAY}`,
 }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524036836/', R + 'B536572080/', R + 'B524228978/'],
 price_note: 'Prices from 2026 reviews, each dated in its note.', last_checked: TODAY, items: [
 it('', '', 'Pain de Lodève (water and wheat, 90% hydration)', '¥250', 'Bread', 'no', 'ask', 'March and July 2026.', 'lodeve'),
 it('', '', 'Baguette', '¥250', 'Bread', 'no', 'ask', 'July 2026.', 'baguette'),
 it('', '', 'Salt bread', '¥150', 'Bread', 'no', 'no', 'October 2026.', 'shiopan'),
 it('', '', 'Roast-chicken rustique sandwich', '¥420', 'Sandwiches', 'no', 'no', 'March 2026.', 'chicken_rustique'),
 it('', '', 'Evening snack-bread set: soup, bruschetta, all-you-can-eat bread', '¥500', 'Evening', 'no', 'ask', 'July 2026.', 'snack_set'),
 ] }, {
 cuisine: '自家焙煎のコーヒーとルヴァンのパンの店 (2026年)・ハード系: 加水率90%で水と小麦だけのpain de Lodève 250円 (2026年3月と7月)。バゲット250円、チーズとドライフルーツのパン690円 (2026年7月)。チーズのルヴァン、半分で580円 (2026年7月)・じゃがいものLodève のピザ350円、ローストチキンのサンド420円、フレンチトースト300円、ラムレーズン350円、アーモンドクロワッサン350円 (2026年3月)・塩パン150円、クリームパン260円、卵のピザ270円 (2026年10月)。卵サンド230円 (2026年7月)。メロンパン (2026年3月)・朝はタルティーヌ (2025年9月)・コーヒー500円 (2026年4月)、アイスラテ450円 (2026年7月)・夜: スープ、ブルスケッタ、食べ放題のフランスパンと食パンのセット500円 (2026年7月)。グラスワインは赤3、オレンジ1、白3、焼酎も (2026年3月)',
 neighborhood: '東三国4-17-8、グランヴィー新大阪103。東三国駅5番出口から約5分 (食べログ)、商店街のような通り (2026年7月)、緑におおわれた外観 (2026年3月)',
 gf_detail: 'グルテンフリーではありません。小麦のパン屋 (ルヴァンのパン、バゲット、ペストリー、サンド)。',
 vegan_detail: '要確認。pain de Lodève は「水と小麦だけ」 (2026年3月)、バゲットもシンプルだが、ヴィーガンの表示はない。ほかのパンの多くはバター、クリーム、卵、チーズ、肉を使う。',
 notes: '[ベーカリーカフェ・東三国、昼はルヴァン、夜はワイン] 東三国駅から数分の小さなパン屋とコーヒーの店で、2022年から。緑におおわれた外観で、ルヴァンのパンの評判がいい: 加水率90%、水と小麦だけのpain de Lodève が250円、チーズとドライフルーツのパン、バゲット、アーモンドクロワッサン、ほめられている塩パン (2026年)。自家焙煎のコーヒーでイートイン (ひとり1ドリンク)、トースターでパンを温められる。夜はバーにもなり、グラスワインと、スープ、ブルスケッタ、塩とひまわり油で食べる食べ放題のパンの500円のセット (2026年7月)。2026年4月には、愛想がなくコーヒーがぬるかったという人も。現金のみ。7時半から、日曜休み。',
 });
}

// ================================================================ うどん工房 天空
{
 const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27110286/'; const R = TB + 'dtlrvwlst/';
 const LD = day(['11:00', '14:30'], ['17:30', '20:00']); const L = day(['11:00', '14:30']);
 put({
 id: 'osaka_udon_kobo_tenku_higashimikuni', name: 'うどん工房 天空 (Udon Kobo Tenku)', category: 'OMNI',
 lat: 34.739817, lng: 135.496714, cuisine_type: 'udon_soba',
 gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat udon with soy sauce, and tempura.',
 vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: udon broths and kayaku rice use dashi; tempura includes chikuwa and egg; meat and sukiyaki udon.',
 hours_raw: 'Mon, Wed and Thu 11:00–14:30 and 17:30–20:00, evenings until sold out; Tue, Fri, Sat and holidays 11:00–14:30; closed Sunday (Tabelog). No reservations; cash, PayPay or Rakuten Pay; no cards (Tabelog). 20 seats at a counter and in a tatami room at the back; non-smoking; children welcome, three children\'s menus from ¥500 (Tabelog). Full by noon, with people waiting inside and out; earlier or later is easier (September 2026). Opened 22 March 2019 (Tabelog).',
 hours: { 0: LD, 1: L, 2: LD, 3: LD, 4: L, 5: L }, hours_status: 'regular',
 flags: { reservation: false, cash_only: false, halal: false, open_late: false },
 neighborhood: '東三国4-17-7, ground floor of メゾンハヤシ — 3 min from Higashimikuni Stn (Midosuji Line) (Tabelog), among the udon shops west of the station (March 2026)',
 cuisine: 'Homemade udon in the line of Umeda Hagakure (Tabelog) · Nama Shoyu Udon, cold, ¥900: long, firm noodles with green onion, grated daikon and sudachi, the soy poured and the sudachi squeezed by the owner (August and September 2026) · bukkake udon set with three tempura (chikuwa, pumpkin, egg) ¥1,250 (September 2026); bukkake tempura udon ¥1,300 (October 2026); meat and grated-eggplant tempura bukkake (summer 2026) · curry udon ¥1,200 (March 2026); cold curry tsukemen (summer 2026); sukiyaki kamatama udon ¥1,250 (September 2026); chilled kitsune udon ¥900 (September 2026) · set of three tempura +¥300; "Manpuku" with kayaku rice and three tempura +¥450 (September 2026); chikuwa tempura ¥150 (September 2026) · kayaku rice, much praised (2026) · oden (September 2026)',
 website: null, gmaps: gm('うどん工房 天空 東三国'), menu_url: null,
 notes: "[Udon · Higashimikuni, nama shoyu udon from the Hagakure line] A bright udon shop west of Higashimikuni Station, opened in 2019 by a disciple of Osaka's famous Umeda Hagakure (September 2026 reviews), with a counter and a tatami room for families. The house dish is Hagakure's Nama Shoyu Udon: cold, long, firm homemade noodles with grated daikon and green onion, finished at the table when the owner squeezes sudachi and pours a little soy over them, \"udon is like sashimi\", as the shop puts it (Tabelog). Bukkake, curry and seasonal udon fill the menu; add three fresh tempura for ¥300, or kayaku rice as well for ¥450, and the rice may steal the show (September 2026). It is full by noon; come early. Lunch daily except Sunday, evenings Monday, Wednesday and Thursday only.",
 chef_bio: { chef_name: null, roles: ['Owner (unnamed) trained at Umeda Hagakure, and staff'], origin: null, background: 'Per the Tabelog listing: serves the "Nama Shoyu Udon" of the famous Osaka restaurant Umeda Hagakure; "The tradition of serving udon with soy sauce comes from our predecessor, who taught us that \'udon is like sashimi\'"; homemade noodles; opened 22 March 2019. Reviewers: "run by one of its disciples" (September 2026); a September 2026 diner read on the shop\'s website that the owner trained at Hagakure in Umeda.', philosophy: '"Udon is like sashimi" (Tabelog, the predecessor\'s teaching).', specialty: 'Nama Shoyu Udon; kayaku rice.',
 anecdotes: [
 { text: '"The owner squeezed sudachi (Japanese citrus) and drizzled a small amount of soy sauce over the grated daikon radish." — September 2026, the cold Nama Shoyu Udon for JPY 900.', source: R + 'B535919302/' },
 { text: '"I came to eat udon, but unexpectedly, the Kayaku Rice stole the show." — September 2026, a longtime Umeda Hagakure regular.', source: R + 'B535592524/' },
 { text: '"The udon had an exquisite texture, completely different from the overly chewy types often found in Tokyo lately." — September 2026.', source: R + 'B536098668/' },
 ],
 japanese_sources_summary: '食べログ: うどん工房 天空、うどん・天ぷら、大阪市淀川区東三国4-17-7 メゾンハヤシ 1F、Midosuji 線 東三国駅から3分、月・水・木11:00〜14:30、17:30〜20:00 (夜は売り切れまで)、火・金・土・祝11:00〜14:30、日曜休み、予約不可、カード不可、PayPay・楽天ペイ可、20席 (カウンターと奥の座敷)、禁煙、子ども可、キッズメニュー3種 (500円から)、2019年3月22日オープン。店の紹介: 大阪の有名店 Umeda Hagakure の「Nama Shoyu Udon」、ねぎ、大根おろし、すだち、選んだ醤油、「うどんは刺身のようなもの」という先代の教え、自家製麺。口コミ (2026年3月〜10月): Hagakure の弟子の店、冷たい Nama Shoyu Udon 900円、店主がすだちをしぼって醤油をかけてくれる、長くてコシのある麺、ぶっかけうどんのセット1,250円 (ちくわ、かぼちゃ、卵の天ぷら)、ぶっかけ天ぷらうどん1,300円、肉と揚げなすおろしのぶっかけ、カレーうどん1,200円、冷たいカレーつけ麺、すき焼きの釜玉うどん1,250円、冷やしきつねうどん900円、天ぷら3種のセット300円、かやくごはんと天ぷらの「Manpuku」450円、かやくごはんが絶品、おでん、昼は満席で外にも行列。',
 confidence: 'medium', sources: [TB, R + 'B510974676/', R + 'B533219389/', R + 'B534432089/', R + 'B535592524/', R + 'B535802168/', R + 'B535919302/', R + 'B536098668/', R + 'B536236760/', R + 'B536638846/', R + 'B537802072/'] },
 cultural_comfort: { level: 'konnichiwa', note: 'The owner finishes the nama shoyu udon at your seat; children\'s menus and tatami seats. No English evidence found.' },
 safety: SAFETY0,
 mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国4-17-7 メゾンハヤシ 1F',
 existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the shop\'s own description; reviews dated through October 2026.' },
 pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国四丁目17番7号 (go) 7m; same street number as osaka_katsu_bei_higashimikuni, its own Tabelog point 8 m away; ${TODAY}`,
 }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535919302/', R + 'B510974676/', R + 'B536236760/'],
 price_note: 'Prices from 2026 reviews, each dated in its note.', last_checked: TODAY, items: [
 it('', '', 'Nama Shoyu Udon, cold', '¥900', 'Udon', 'no', 'no', 'September 2026.', 'nama_shoyu'),
 it('', '', 'Bukkake udon set with three tempura', '¥1,250', 'Udon', 'no', 'no', 'September 2026.', 'bukkake_set'),
 it('', '', 'Curry udon', '¥1,200', 'Udon', 'no', 'no', 'March 2026.', 'curry_udon'),
 it('', '', 'Chilled kitsune udon', '¥900', 'Udon', 'no', 'no', 'September 2026.', 'hiyashi_kitsune'),
 it('', '', '"Manpuku" add-on: kayaku rice and three tempura', '¥450', 'Sets', 'no', 'no', 'September 2026.', 'manpuku'),
 ] }, {
 cuisine: 'Umeda Hagakure の流れの自家製うどん (食べログ)・冷たい Nama Shoyu Udon 900円: 長くてコシのある麺に、ねぎ、大根おろし、すだち。店主が醤油をかけてすだちをしぼる (2026年8月と9月)・天ぷら3種 (ちくわ、かぼちゃ、卵) つきのぶっかけうどんのセット1,250円 (2026年9月)。ぶっかけ天ぷらうどん1,300円 (2026年10月)。肉と揚げなすおろしのぶっかけ (2026年夏)・カレーうどん1,200円 (2026年3月)。冷たいカレーつけ麺 (2026年夏)。すき焼きの釜玉うどん1,250円 (2026年9月)。冷やしきつねうどん900円 (2026年9月)・天ぷら3種のセット300円増し、かやくごはんと天ぷら3種の「Manpuku」450円増し (2026年9月)。ちくわ天150円 (2026年9月)・評判のかやくごはん (2026年)・おでん (2026年9月)',
 neighborhood: '東三国4-17-7、メゾンハヤシの1階。Midosuji 線 東三国駅から3分 (食べログ)、駅の西のうどん屋がならぶあたり (2026年3月)',
 gf_detail: 'グルテンフリーではありません。醤油で食べる自家製の小麦のうどんと天ぷら。',
 vegan_detail: 'ヴィーガンではありません。うどんのつゆとかやくごはんにはだし、天ぷらにはちくわと卵、肉やすき焼きのうどんも。',
 notes: '[うどん・東三国、Hagakure の流れの Nama Shoyu Udon] 東三国駅の西の明るいうどん店で、大阪の有名店 Umeda Hagakure の弟子が2019年に開いた (2026年9月の口コミ)。カウンターと家族向けの奥の座敷。看板は Hagakure の Nama Shoyu Udon: 冷たくて長い、コシのある自家製麺に大根おろしとねぎ、店主が席ですだちをしぼって醤油を少しかけて仕上げる。店のことばでは「うどんは刺身のようなもの」 (食べログ)。ぶっかけ、カレー、季節のうどんもあり、揚げたての天ぷら3種は300円、かやくごはんもつけて450円。かやくごはんが主役をうばうことも (2026年9月)。昼は12時に満席になるので早めに。日曜以外は昼、夜は月・水・木だけ。',
 });
}

// ================================================================ 中華ダイニング 隆勝
{
 const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27113892/'; const R = TB + 'dtlrvwlst/';
 const D = day(['11:30', '14:30'], ['17:30', '23:00']);
 put({
 id: 'osaka_chuka_dining_ryusho_nishimiyahara', name: '中華ダイニング 隆勝 (Chuka Dining Ryusho)', category: 'OMNI',
 lat: 34.734929, lng: 135.490217, cuisine_type: 'other',
 gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kara-age, shrimp mayo and noodle dishes (tantanmen, mazesoba, ramen) are on every lunch menu; nothing is described as gluten-free.',
 vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, pork and shrimp sets with egg soup.',
 hours_raw: 'Mon–Sat and holidays 11:30–14:30 and 17:30–23:00 (last order 22:30); closed Sunday; hours may change (Tabelog). Reservations accepted (Tabelog). Cards (JCB, AMEX) and e-money; no QR (Tabelog). Lunch by ticket machine, which did not take new notes in July 2026 (staff changed them). Rice refills free at lunch, from a rice jar in the middle of the room (May 2026). Non-smoking on Tabelog, but a February 2026 diner called it a smoking establishment. Lines at lunch (August 2026).',
 hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
 flags: { reservation: true, cash_only: false, halal: false, open_late: true },
 neighborhood: '西宮原2-6-16, ground floor of 新大阪コーポビアネーズ, in a residential area about 15 min from Shin-Osaka (February 2026), between Mikuni and Shin-Osaka stations (October 2026)',
 cuisine: 'Chinese set lunches and dinners (2025–2026) · lunch sets ¥930–1,100 with egg soup, pickles, a small dessert and free rice (May 2026): kara-age set, four pieces, ¥1,000 (April 2026); shrimp mayo set (July 2026); yodare (mouth-watering) chicken set ¥930 (May and October 2026); daily specials such as pork with green peppers (October 2026) or Sichuan horumon (February 2026); egg fried rice set (often sold out, August 2026) · mapo mazesoba ¥1,100 (February 2026); sesame tantanmen and dry tantanmen (June 2026); spicy mazesoba (August 2026); a new chicken-salt ramen with one kara-age ¥1,000 (October 2026) · evenings: a set of two dishes with a drink ¥1,380 (June 2026); all-you-can-eat-and-drink ¥3,880 (February 2026); yurinchi, beef fried rice, shrimp and egg stir-fry, spicy green-onion chashu (February 2026)',
 website: null, gmaps: gm('中華ダイニング 隆勝 西宮原2-6-16'), menu_url: null,
 notes: "[Chinese · Nishimiyahara, set lunches with bottomless rice] A neighbourhood Chinese restaurant in the same apartment building as Ramen Yamafuji, west of Shin-Osaka, which per one May 2026 diner began as a tsukemen shop and has grown into a fuller Chinese menu with many staff \"from the region\". Lunch is the draw: a ¥930–1,100 set (kara-age, shrimp mayo, yodare chicken, a daily special) with egg soup, pickles, a small dessert and rice you refill yourself from a jar in the middle of the room (2026), or a sesame tantanmen or mapo mazesoba. It gets a lunch line and the popular egg fried rice set sells out (August 2026). In the evening it turns into a drinking spot with a two-dish set for ¥1,380 or all-you-can-eat-and-drink for ¥3,880 (2026). Closed Sunday.",
 chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: 'A May 2026 diner: the shop "has increasingly embraced authentic Chinese cuisine, thanks to many staff members from the region".', background: 'No shop description on Tabelog. Per a May 2026 review, it "started with Tsukemen but has increasingly embraced authentic Chinese cuisine"; an October 2026 diner notes decor and staff that "contribute to the authentic dining experience".', philosophy: null, specialty: 'Lunch sets with free rice; tantanmen; yodare chicken.',
 anecdotes: [
 { text: '"In the center of the restaurant, there\'s a self-service rice jar, allowing unlimited refills." — May 2026, the yodare chicken set for JPY 930.', source: R + 'B527792860/' },
 { text: '"The flavor of sesame is intense, and the slight spiciness warms you up from within!" — June 2026, the sesame tantanmen.', source: R + 'B528620496/' },
 { text: '"I noticed an all-you-can-eat and drink option for JPY 3,880! Given the current high prices, this is quite a reasonable deal for a local restaurant." — February 2026.', source: R + 'B522428361/' },
 ],
 japanese_sources_summary: '食べログ: 中華ダイニング 隆勝、中華料理・つけ麺・ラーメン、大阪市淀川区西宮原2-6-16 新大阪コーポビアネーズ 1F、三国駅から697m、月〜土・祝11:30〜14:30、17:30〜23:00 (L.O.22:30)、日曜休み、予約可、カード (JCB、AMEX)・電子マネー可、QR 不可、禁煙。口コミ (2025年1月〜2026年10月): もとはつけ麺の店で、本場出身のスタッフが多く本格的な中華に、昼の定食930〜1,100円 (卵スープ、漬物、デザート、ごはんおかわり自由)、kara-age 定食4個1,000円、エビマヨ定食、よだれ鶏定食930円、日替わり (ピーマンと豚肉の炒め物、四川の味のホルモン)、卵チャーハン定食は売り切れも、麻婆まぜそば1,100円、ごま担々麺、汁なし担々麺、辛いまぜそば、鶏塩ラーメンと kara-age 1,000円、夜は2品とドリンクのセット1,380円、食べ放題・飲み放題3,880円、Yurinchi、牛肉チャーハン、エビと卵の炒め物、ねぎチャーシュー、券売機は新札不可、昼は行列、喫煙できる店という声も。',
 confidence: 'medium', sources: [TB, R + 'B482961319/', R + 'B485397036/', R + 'B500300294/', R + 'B522428361/', R + 'B522698089/', R + 'B527792860/', R + 'B528620496/', R + 'B530536204/', R + 'B537003870/', R + 'B537681925/'] },
 cultural_comfort: { level: 'konnichiwa', note: 'Lunch by ticket machine (old notes only in July 2026); rice from a self-service jar. No English evidence found.' },
 safety: SAFETY0,
 mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西宮原2-6-16 新大阪コーポビアネーズ 1F',
 existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
 pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西宮原二丁目6番16号 (go) 13m; same building as osaka_ramen_yamafuji_shin_osaka, whose Tabelog point is 38 m away; ${TODAY}`,
 }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527792860/', R + 'B482961319/', R + 'B522698089/'],
 price_note: 'Prices from 2026 reviews, each dated in its note.', last_checked: TODAY, items: [
 it('', '', 'Kara-age set (four pieces)', '¥1,000', 'Lunch', 'no', 'no', 'April 2026.', 'karaage_set'),
 it('', '', 'Yodare (mouth-watering) chicken set', '¥930', 'Lunch', 'ask', 'no', 'May and October 2026.', 'yodaredori_set'),
 it('', '', 'Mapo mazesoba', '¥1,100', 'Noodles', 'no', 'no', 'February 2026.', 'mapo_maze'),
 it('', '', 'Sesame tantanmen', '', 'Noodles', 'no', 'no', 'June 2026.', 'goma_tantan'),
 it('', '', 'All-you-can-eat-and-drink (evening)', '¥3,880', 'Evening', 'ask', 'no', 'February 2026.', 'tabehoudai'),
 ] }, {
 cuisine: '中華の定食とお酒 (2025〜2026年)・昼の定食930〜1,100円、卵スープ、漬物、小さなデザート、ごはんはおかわり自由 (2026年5月): kara-age 4個の定食1,000円 (2026年4月)。エビマヨの定食 (2026年7月)。よだれ鶏の定食930円 (2026年5月と10月)。日替わりはピーマンと豚肉の炒め物 (2026年10月) や四川の味のホルモン (2026年2月)。卵チャーハンの定食 (よく売り切れ、2026年8月)・麻婆まぜそば1,100円 (2026年2月)。ごまの担々麺と汁なし担々麺 (2026年6月)。辛いまぜそば (2026年8月)。新しい鶏塩ラーメンに kara-age 1個で1,000円 (2026年10月)・夜: 2品とドリンクのセット1,380円 (2026年6月)。食べ放題・飲み放題3,880円 (2026年2月)。Yurinchi、牛肉のチャーハン、エビと卵の炒め物、辛いねぎチャーシュー (2026年2月)',
 neighborhood: '西宮原2-6-16、新大阪コーポビアネーズの1階。新大阪から約15分の住宅街 (2026年2月)、三国駅と新大阪駅のあいだ (2026年10月)',
 gf_detail: 'グルテンフリーではありません。昼のメニューには kara-age、エビマヨ、麺 (担々麺、まぜそば、ラーメン) が並び、グルテンフリーの説明はない。',
 vegan_detail: 'ヴィーガンではありません。鶏、豚、エビの定食に卵スープ。',
 notes: '[中華・西宮原、ごはんおかわり自由の昼の定食] 新大阪の西、らーめん やまふじと同じマンションにある町の中華で、2026年5月の客によると、もとはつけ麺の店だったのが、本場出身のスタッフが多いこともあって本格的な中華に広がった。人気は昼: kara-age、エビマヨ、よだれ鶏、日替わりの930〜1,100円の定食に、卵スープ、漬物、小さなデザート、店の真ん中のおひつから自由におかわりできるごはん (2026年)。ごまの担々麺や麻婆まぜそばも。昼は行列ができ、人気の卵チャーハンの定食は売り切れる (2026年8月)。夜は飲む店になり、2品のセット1,380円や食べ放題・飲み放題3,880円 (2026年)。日曜休み。',
 });
}

save();
