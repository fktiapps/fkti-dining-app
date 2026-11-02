// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 5.
//   + 鮨 うら紀 Sushi Uraki (sushi and tempura omakase, Grand Green Osaka South 1F, since 2025; chef Hiroki Anguro)
//   + BELLA BOCCA 阪急梅田店 Bella Bocca Umeda (Italian with vegetables from its own farm, Shibata basement)
//   + イタリアン食べ放題 CHEESE MEAT GARDEN 梅田店 (all-you-can-eat cheese and meat Italian, since 2019)
//   + 日本酒と料理 くろ川 Japan Shu to Ryori Kurokawa (Japanese cooking and 100 sakes, Kitashinchi, since 2024; one-person shop)
//   - 瓢斗 梅田店 27152329 skipped: chain (seven 瓢斗 shops in Kyoto, Tokyo, Osaka and Yokohama; hyoto.jp).
//   - 鶏っく 大阪駅前うめきた店 27074161 skipped: chain (鶏っく branches in Kawanishi, Kyobashi, Hakata, Niigata, Toyama; gnavi).
//   - 世界のビール博物館 グランフロント大阪店 27070799 skipped: chain (four or more shops in Tokyo, Osaka, Yokohama, Nagoya; zato.co.jp).
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-01, after b4): odd ids in order 27152329, 27074161,
//   27070799, 27147973, 27066961, 27111259, 27146059.
//   Chain check: Sushi Uraki is the second shop of Sushi urag in Fukushima (September 2026 review); neither is in data.
//   BELLA BOCCA lists three related shops (BELLA BOCCA Namba, BELLA PORTO, Tatsuya Hankyu Umeda; Tabelog remarks); none in data.
//   CHEESE MEAT GARDEN: only this Umeda shop found. Kurokawa: one shop. None is in data/osaka.json (grep by id, name and
//   address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw6-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27152329', '瓢斗 梅田店: chain; the official site lists seven 瓢斗 shops (京都駅前本店, 四条烏丸店, 渋谷店, 新橋店, 品川店, 梅田店, 横浜店; hyoto.jp, read 2026-11-01).');
skip('27074161', '鶏っく 大阪駅前うめきた店: chain; gnavi lists 鶏っく branches at Kawanishi-Noseguchi, Kyobashi, Hakata, Niigata and Toyama as well as this one.');
skip('27070799', '世界のビール博物館 グランフロント大阪店: chain; the operator zato.co.jp lists shops at Tokyo Skytree Town Solamachi, Grand Front Osaka, Yokohama and Dai Nagoya Building (read 2026-11-01).');

// ================================================================ 鮨 うら紀
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27147973/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:00', '14:30'], ['18:00', '23:00']);
  put({
    id: 'osaka_sushi_uraki_grand_green', name: '鮨 うら紀 (Sushi Uraki)', category: 'MOM_AND_POP',
    lat: 34.702492, lng: 135.492221, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: every course mixes sushi with wheat-battered tempura, fried in sunflower and cottonseed oil (September 2026), including shrimp tempura sushi; sushi is also usually finished with soy sauce, which normally contains wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase of sushi, seafood and tempura.',
    hours_raw: 'Daily: lunch 12:00–14:30, all guests starting at 12:00; dinner 18:00–23:00, starting at 18:00, 19:00, 20:00 or 20:30 (last entry 20:30; last food order 20:30) (Tabelog). Closing days not fixed, often Monday and Thursday (Tabelog). Reservation only; the shop recommends booking through OMAKASE, a multilingual site; parties of five or more call the shop; tell the shop in advance about guests who cannot eat raw food (Tabelog). Cancellation: 50% from midnight the day before, 100% on the day; a booking is cancelled if you are 30 minutes late without contact (Tabelog). Service charge 3% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog). 12 seats and a private room for 4; non-smoking; wheelchair access; children welcome, with a kids menu; sommelier; no strong perfume or scented products; message cakes on two days\' notice (Tabelog). Opened 21 March 2025 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Grand Green Osaka South building, 1F — 8 min from JR Osaka Stn, 10 min from Umeda Stn',
    cuisine: 'Sushi kaiseki: sushi and tempura in one omakase, from a sushi chef and a tempura chef at a counter of 150-year-old hinoki (Tabelog) · lunch omakase ¥22,000 at 12:00; dinner omakase ¥33,000 at 18:00 or 19:00; plus 3% service (Tabelog, tax included) · red-vinegar rice blended from three vinegars including a three-year aged one (October 2026) · Boston tuna (208 kg) aged two weeks, marinated akami and otoro; squid scored about 200 times; Miyazu mackerel with ponzu jelly; Hokkaido purple sea urchin; simmered Tsushima anago; a small bowl of hairy crab and ikura; sweet-shrimp tempura with sushi rice and nori (September–October 2026) · tempura of seasonal vegetables and fish: hamo from Awaji with ume, okra, ginkgo, maitake, abalone simmered then fried, kisu (September–October 2026) · goya gari (August 2026) · wine and sake chosen by a sommelier, e.g. Ubushuna, Kokuryu, Kame no O (September–October 2026)',
    website: 'https://sushiuraki.com/', gmaps: gm('鮨 うら紀 グラングリーン大阪'), menu_url: null,
    notes: "[Sushi · Umekita, sushi and tempura in Grand Green Osaka] The second restaurant of Hiroki Anguro, the sushi chef behind Sushi urag on the grounds of Enkakuji temple in Fukushima (September 2026 review), on the ground floor of Grand Green Osaka's south building. Two chefs work one counter of 150-year-old hinoki, one on sushi and one on tempura, so the omakase moves between nigiri on red-vinegar rice (two-week aged Boston tuna, squid scored some 200 times) and tempura fried in sunflower and cottonseed oil, with a hairy-crab and ikura bowl along the way. Lunch is ¥22,000 and dinner ¥33,000, plus 3%; a sommelier pours wine and rare sake. Diners mention attentive service (staff open the door and pull out chairs), a warm head chef, and walls signed by Hollywood stars (October 2026). In September 2026 the tempura chef and the sommelier changed. A staff member told one October 2026 diner that about 30% of guests come from overseas.",
    chef_bio: { chef_name: 'Hiroki Anguro', roles: ['Sushi chef, formerly head chef at luxury hotels (Tabelog)', 'Founder of Sushi urag, Fukushima (September 2026 review)', 'Tempura chef (unnamed; changed by September 2026, per a review)'], origin: null, background: 'Shop text (Tabelog): "Standing at a counter made from 150-year-old hinoki wood is Hiroki Anguro, a former head chef at luxury hotels"; a "Sushi Kaiseki" of sushi and tempura, with ageing techniques; selected in 2026 for the "Japan Brand Collection: 100 Selected Renowned Japanese Restaurants". A September 2026 review: "Sushi Uraki, the second branch of the popular restaurant \'Sushi urag\' founded by sushi chef Hiroki Anguro within the grounds of Enkakuji Temple in Fukushima". Another September 2026 review notes a change of sommelier and tempura chef, the tempura "the same or even higher quality". Opened 21 March 2025 (Tabelog).', philosophy: 'Dishes that are genuinely delicious rather than just visually impressive (Tabelog).', specialty: 'Sushi and tempura omakase; aged tuna.',
      anecdotes: [
        { text: '"The tuna was sourced from Boston, USA, weighing 208 kg. The \'Marinated Akami\' had a rich umami flavor after being aged for two weeks." — September 2026, the ¥33,000 dinner.', source: R + 'B535943576/' },
        { text: '"The rice was made with red vinegar, blended from three types, including a three-year aged red vinegar." — October 2026.', source: R + 'B537377170/' },
        { text: '"Even though I\'m not a fan of goya (bitter melon), the goya gari was so tasty that I ended up eating it all." — August 2026.', source: R + 'B534232916/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B514221772/', R + 'B534232916/', R + 'B534673956/', R + 'B535599317/', R + 'B535943576/', R + 'B536315934/', R + 'B536595955/', R + 'B537377170/', R + 'B537763328/', R + 'B537794779/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Booking through OMAKASE, a multilingual site (Tabelog); about 30% of guests from overseas, per staff (October 2026). No English menu listed.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Tabelog: "If you have guests who cannot eat raw food, please inform us in advance before your visit."', source: TB }] },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市北区大深町5-54 グラングリーン大阪南館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; GSI resolves 大阪府大阪市北区大深町5-54 only to the town (大深町), 320m away, so the pin rests on the Tabelog point (Grand Green Osaka South building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535943576/', R + 'B536595955/'],
    price_note: 'Courses from the Tabelog listing (tax included; 3% service extra); confirmed by September and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase of sushi and tempura (12:00 start)', '¥22,000', 'Course', 'no', 'no', 'Tabelog listing; October 2026 reviews.', 'lunch_omakase'),
      it('', '', 'Dinner omakase of sushi and tempura (18:00 or 19:00 start)', '¥33,000', 'Course', 'no', 'no', 'Tabelog listing; September and October 2026 reviews.', 'dinner_omakase'),
    ] }, {
    cuisine: '鮨会席: 樹齢150年のヒノキのカウンターで、鮨の職人と天ぷらの職人が鮨と天ぷらをひとつのおまかせに (食べログ)・ランチのおまかせ22,000円 (12:00)、夜のおまかせ33,000円 (18:00か19:00)、サービス料3%別 (食べログ、税込)・赤酢のシャリは3年熟成のものを含む3種のブレンド (2026年10月)・Boston のマグロ (208kg) を2週間熟成させた赤身の漬けと大トロ、200回ほど包丁を入れたイカ、Miyazu のサバのポン酢ジュレ、Hokkaido の紫ウニ、Tsushima の煮穴子、毛ガニといくらの小丼、甘エビの天ぷらとシャリと海苔 (2026年9〜10月)・季節の野菜と魚の天ぷら: Awaji のはもと梅、オクラ、銀杏、まいたけ、煮てから揚げるアワビ、キス (2026年9〜10月)・ゴーヤのガリ (2026年8月)・ソムリエが選ぶワインと日本酒、たとえば Ubushuna、Kokuryu、Kame no O (2026年9〜10月)',
    neighborhood: 'グラングリーン大阪南館の1階。JR大阪駅から徒歩8分、梅田駅から徒歩10分',
    gf_detail: '実際にはグルテンフリーではありません。どのコースも鮨と小麦の衣の天ぷら (ひまわり油と綿実油で揚げる、2026年9月) の組み合わせで、えびの天ぷらの鮨もある。鮨もふつう小麦を含む醤油で仕上げる。',
    vegan_detail: 'ヴィーガンではありません。鮨、魚介、天ぷらのおまかせ。',
    notes: '[鮨・うめきた、グラングリーン大阪の鮨と天ぷら] Fukushima の Enkakuji の境内にある Sushi urag の鮨職人 Hiroki Anguro さんの2軒目で (2026年9月の口コミ)、グラングリーン大阪南館の1階。樹齢150年のヒノキのカウンターに鮨と天ぷらの職人が並び、おまかせは赤酢のシャリの握り (2週間熟成の Boston のマグロ、200回ほど包丁を入れたイカ) と、ひまわり油と綿実油で揚げる天ぷらを行き来し、途中に毛ガニといくらの小丼も。ランチ22,000円、夜33,000円にサービス料3%。ソムリエがワインやめずらしい日本酒を注ぐ。ドアを開けて椅子を引いてくれるていねいなサービス、あたたかい大将、ハリウッドスターのサインが並ぶ壁 (2026年10月) という声。2026年9月には天ぷらの職人とソムリエが替わった。2026年10月の口コミでは、スタッフの話としてお客さんの3割ほどが海外から。',
  });
}

// ================================================================ BELLA BOCCA 阪急梅田店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27066961/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'https://bellabocca-hankyu.kimiyu.co.jp/';
  const WD = day(['11:30', '14:30'], ['17:30', '23:00']), WE = day(['11:00', '14:30'], ['17:30', '23:00']);
  put({
    id: 'osaka_bella_bocca_hankyu_umeda', name: 'BELLA BOCCA 阪急梅田店 (Bella Bocca Umeda)', category: 'OMNI',
    lat: 34.7061, lng: 135.497483, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The shop makes fresh pasta from 100% domestic wheat (Tabelog); pizzas (including a pie-crust pizza), bread with the lunch sets, and fried plates (shrimp tempura, cutlet, Camembert fries) are on the menu.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog shows a vegetarian-options flag, and organic vegetables from the shop\'s own farm run through the menu (bagna cauda, vegetable cheese fondue, vegetable pie pizza), but most come with cheese, egg or meat; no vegan dish is described.',
    hours_raw: 'Mon–Fri 11:30–14:30 (last order 14:00) and 17:30–23:00 (last order 22:30); Sat, Sun and holidays 11:00–14:30 (last order 14:00) and 17:30–23:00 (Tabelog). A queue forms before the lunch opening; reserved guests go in first (October and November 2026). No service or cover charge; bring-your-own drinks allowed; no split bills (Tabelog). Cards (VISA, Master, JCB, AMEX) and PayPay; no e-money (Tabelog). 45 seats in a basement; private hire 20–45 with projector and microphones; non-smoking, smoking outside the entrance; children welcome; takeout (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'A basement down a flight of stairs near Hankyu Umeda — 2 min from Hankyu or Midosuji Line Umeda Stn, 3 min from JR Osaka Stn',
    cuisine: 'Italian built on organic vegetables from the shop\'s own farm and growers across Japan; fresh pasta from 100% domestic wheat; wine chosen by a sommelier, also in the all-you-can-drink menu; tiramisu (Tabelog) · lunch: a one-plate lunch with cheese fondue or with an appetizer platter, and four set meals (November 2026); appetizer lunch ¥1,950 with a drink, then a plate of fries, shrimp tempura, cutlet and hamburg steak (October 2026); young chicken with lemon sauce, pumpkin gratin (October 2026) · organic vegetable cheese fondue, a rustic vegetable pie pizza, sweet potato and apple potato salad, beet potato salad, moringa sours (October 2026) · year-end courses with all-you-can-drink: A ¥5,000 (10 dishes), B ¥6,000 (11), C ¥7,000 (13), ¥500 off when booked by 20 November; bagna cauda, Chikara potatoes from Toyokawa Farm, Camembert fries, margherita pie pizza, chicken confit, skirt steak, Iberico pork, penne arrabbiata (Tabelog, tax included)',
    website: OFF, gmaps: gm('BELLA BOCCA 阪急梅田店'), menu_url: null,
    notes: "[Italian · Umeda, a basement trattoria with its own farm] A lively basement Italian a couple of minutes from Hankyu Umeda, run by a company that grows its own organic vegetables. Lunch is the draw, with a queue before opening: a one-plate lunch built on cheese fondue or an overflowing platter of vegetable appetizers (beet potato salad among them), with bread and a drink, from about ¥1,950. Evenings bring vegetable cheese fondue, pie-crust pizzas, fresh pasta from Japanese wheat and wines picked by a sommelier, and all-you-can-drink party courses from ¥5,000. Diners praise attentive staff, one of whom saw a guest off up the stairs (October 2026); another found the room noisy with lunch crowds. You can bring your own drinks; no split bills.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed) (Tabelog)'], origin: 'Run with three related shops: BELLA BOCCA Namba, BELLA PORTO and Tatsuya Hankyu Umeda (Tabelog remarks); the website is on kimiyu.co.jp.', background: 'Shop text (Tabelog): organic vegetables from the shop\'s own farm and across the country; fresh pasta of 100% domestic wheat; sommelier-selected wines; "our Italian chef prepares them with care"; an authentic-recipe tiramisu; an online shop for a European-style cheesecake and a shabu-shabu set.', philosophy: 'Vegetables from its own farm, cooked Italian (Tabelog).', specialty: 'Organic vegetable cheese fondue; appetizer-platter lunch.',
      anecdotes: [
        { text: '"The staff provided very attentive service" and saw the diner off all the way up the stairs — October 2026, the ¥1,950 appetizer lunch.', source: R + 'B537461056/' },
        { text: '"A variety of vegetables, including beets and butternut squash, were plentiful! The sweetness of the vegetables paired perfectly with the cheese sauce" — October 2026, the organic vegetable cheese fondue.', source: R + 'B537582005/' },
        { text: '"I was surprised to see a long line before opening time, but once inside, I realized the secret to its popularity is the staff\'s attentiveness." — October 2026.', source: R + 'B537752939/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, OFF, R + 'B537430896/', R + 'B537461056/', R + 'B537505705/', R + 'B537582005/', R + 'B537752939/', R + 'B537862646/', R + 'B537982369/', R + 'B538279876/', R + 'B538423493/', R + 'B538447891/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch sets and à la carte; book to skip the queue (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区芝田1-3-13 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with year-end 2026 courses; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区芝田一丁目3番13号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537461056/'],
    price_note: 'Year-end courses from Tabelog (tax included; ¥500 off when booked by 20 November); the appetizer lunch from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Appetizer lunch: vegetable appetizer platter, main plate, bread, drink', '¥1,950', 'Lunch', 'no', 'no', 'October 2026 review.', 'appetizer_lunch'),
      it('', '', 'Year-end course A with all-you-can-drink (10 dishes)', '¥5,000', 'Course', 'no', 'no', 'Tabelog listing.', 'course_a'),
      it('', '', 'Year-end course B with all-you-can-drink (11 dishes)', '¥6,000', 'Course', 'no', 'no', 'Tabelog listing.', 'course_b'),
      it('', '', 'Year-end course C with all-you-can-drink (13 dishes)', '¥7,000', 'Course', 'no', 'no', 'Tabelog listing.', 'course_c'),
    ] }, {
    cuisine: '自社の農園と全国の生産者の有機野菜のイタリアン、国産小麦100%の生パスタ、ソムリエが選んだワイン (飲み放題にも)、ティラミス (食べログ)・ランチ: チーズフォンデュか前菜の盛り合わせのワンプレートランチと、4種類のセット (2026年11月)、前菜ランチ1,950円はドリンクつきで、メインはフライドポテト、えびの天ぷら、カツ、ハンバーグのプレート (2026年10月)、若鶏のレモンソース、かぼちゃのグラタン (2026年10月)・有機野菜のチーズフォンデュ、野菜たっぷりのパイピザ、さつまいもとりんごのポテトサラダ、ビーツのポテトサラダ、モリンガのサワー (2026年10月)・飲み放題つきの忘年会コース: A 5,000円 (10品)、B 6,000円 (11品)、C 7,000円 (13品)、11月20日までの予約で500円引き。バーニャカウダ、Toyokawa Farm の Chikara のじゃがいも、カマンベールのフライ、マルゲリータのパイピザ、鶏のコンフィ、ハラミのステーキ、イベリコ豚、ペンネアラビアータ (食べログ、税込)',
    neighborhood: '芝田、階段を下りた地下。阪急・御堂筋線の梅田駅から徒歩2分、JR大阪駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。国産小麦100%の生パスタ (食べログ)、ピザ (パイ生地のものも)、ランチのパン、揚げ物 (えびの天ぷら、カツ、カマンベールのフライ) がある。',
    vegan_detail: '要確認。食べログにはベジタリアンのオプションの表示があり、自社の農園の有機野菜がメニューのあちこちに (バーニャカウダ、野菜のチーズフォンデュ、野菜のパイピザ) あるが、ほとんどにチーズ、卵、肉が入り、ヴィーガンの料理は書かれていない。',
    notes: '[イタリアン・梅田、自社の農園を持つ地下のトラットリア] 阪急梅田から2分ほどの、にぎやかな地下のイタリアンで、有機野菜を自社で育てている会社の店。目当てはランチで、開店前から行列ができる。チーズフォンデュか、あふれるほどの野菜の前菜の盛り合わせ (ビーツのポテトサラダなど) のワンプレートランチに、パンとドリンクがついて1,950円ほどから。夜は野菜のチーズフォンデュ、パイ生地のピザ、国産小麦の生パスタ、ソムリエが選んだワイン、5,000円からの飲み放題つきのコース。スタッフのていねいなサービスをほめる声が多く、階段の上まで見送ってもらったという人も (2026年10月)。ランチの客でにぎやかで、声を張らないと話せなかったという人も。飲み物の持ちこみ可、割り勘の支払いは不可。',
  });
}

// ================================================================ CHEESE MEAT GARDEN 梅田店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27111259/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['16:00', '24:00']), WE = day(['11:00', '24:00']);
  put({
    id: 'osaka_cheese_meat_garden_umeda', name: 'イタリアン食べ放題 CHEESE MEAT GARDEN 梅田店 (Italian All you can eat CHEESE MEAT GARDEN Umeda ten)', category: 'OMNI',
    lat: 34.702262, lng: 135.501579, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The buffet centres on pizza (including Chicago pizza), pasta, fried pasta, fried chicken, fries and fried baguette (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: an all-you-can-eat of meat and cheese dishes. Tabelog shows a vegetarian-options flag; bagna cauda appears on the à la carte menu (October 2026).',
    hours_raw: 'Mon–Fri and the day before a holiday 16:00–24:00; Sat, Sun and holidays 11:00–24:00; last order 23:00; closing days not fixed, closed 1 January (Tabelog). Weekend and holiday lunch buffets 11:00–17:30 (Tabelog). Time limit about 2 hours; a late start may shorten it (Tabelog). Every all-you-can-eat guest adds a drink plan, two drinks or all-you-can-drink, the same for the whole table (Tabelog; August 2026). Orders by smartphone QR code (August and October 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, iD, QUICPay, PayPay (Tabelog). 64 seats with night-view window seats and private rooms behind hidden doors; whole-floor hire; non-smoking with a smoking area (Tabelog). Children: the listing says no children allowed, but its course pages give children\'s prices (3 and under free, 4 to elementary school half price). Opened 30 May 2019 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '8F of 梅田エビスビル, near Higashi-Umeda — 4 min from JR Osaka Stn, Umeda Stn or Higashi-Umeda Stn',
    cuisine: 'All-you-can-eat cheese and meat Italian (Tabelog) · weekend and holiday lunch buffets: premium 76 dishes with black-wagyu steak and roast-beef bowl ¥2,880 (listed from ¥3,880), standard 59 dishes ¥2,480 (listed from ¥3,480); the hot teppan cheese and steak course, 91 dishes, ¥3,980 (listed from ¥4,980) (Tabelog, tax included) · dishes named in 2026 reviews: Chicago pizza used as a cheese-fondue bowl; domestic wagyu "avalanche cheese"; Parmigiano yukke; teppan chicken with tomato and cheese; carbonara; a cheese "flood" over vegetables and fries; honey cheese balls; roast beef under melted cheese; fried pasta; kara-age and fries to start; prosciutto and salami; a cheese platter with dried fruit · small portions so a table can try many dishes · a birthday cake on request (July 2026)',
    website: null, gmaps: gm('CHEESE MEAT GARDEN 梅田店'), menu_url: null,
    notes: "[Italian buffet · Umeda, all-you-can-eat cheese and meat] An eighth-floor all-you-can-eat Italian near Higashi-Umeda, popular with young groups, where cheese is poured over steak, roast beef and vegetables at the table and a Chicago pizza doubles as a cheese-fondue bowl. Courses run ¥2,480–3,980 for 59 to 91 small-plate dishes ordered by smartphone, plus a compulsory drink plan chosen for the whole table; weekend lunch buffets start at 11:00. Window seats look over the night lights (one July diner, arriving before dark, saw a pachinko sign), and private rooms hide behind secret doors. Diners praise quick service and value; others note a cramped room, the oily fried baguette, a drink system nobody explained, and being seated for a different course than booked (October 2026). Open to midnight.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed in the sources read)'], origin: null, background: 'Shop text (Tabelog): all-you-can-eat Italian in a stylish setting with sofa seats, night-view tables and private rooms behind hidden doors; rare steak cuts and sizzling cheese dishes "right before your eyes". Opened 30 May 2019.', philosophy: null, specialty: 'Cheese poured over steak and vegetables on a hot teppan; Chicago pizza.',
      anecdotes: [
        { text: '"The pizza crust serves as a vessel for a cheese fondue style." — October 2026, the 91-dish course ¥3,980.', source: R + 'B485435732/' },
        { text: '"Everyone must choose the same drink menu, which can be a bit tricky if someone in your group doesn\'t drink alcohol." — August 2026, a weekend lunch.', source: R + 'B534219502/' },
        { text: '"There were no limits on orders, and the staff never showed any displeasure no matter how much we requested." — October 2026.', source: R + 'B537455941/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B485435732/', R + 'B530855809/', R + 'B531381887/', R + 'B531979542/', R + 'B534219502/', R + 'B535494657/', R + 'B537147831/', R + 'B537455941/', R + 'B537858477/', R + 'B538407652/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smartphone QR ordering; a drink plan is required with the buffet (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区小松原町1-27 梅田エビスビル 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区小松原町1番27号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B485435732/'],
    price_note: 'Course prices from the Tabelog listing (tax included; discounted from the listed regular prices; a drink plan is added).', last_checked: TODAY, items: [
      it('', '', 'Weekend lunch premium buffet, 76 dishes incl. black-wagyu steak and roast-beef bowl', '¥2,880', 'Buffet', 'ask', 'no', 'Tabelog listing (regular ¥3,880).', 'lunch_premium'),
      it('', '', 'Weekend lunch standard buffet, 59 dishes', '¥2,480', 'Buffet', 'ask', 'no', 'Tabelog listing (regular ¥3,480).', 'lunch_standard'),
      it('', '', 'Hot teppan cheese and steak all-you-can-eat, 91 dishes', '¥3,980', 'Buffet', 'ask', 'no', 'Tabelog listing (regular ¥4,980); October 2026 review.', 'course_91'),
    ] }, {
    cuisine: 'チーズと肉のイタリアンの食べ放題 (食べログ)・土日祝のランチの食べ放題: 黒毛和牛のステーキとローストビーフ丼を含む76品のプレミアム2,880円 (通常3,880円)、59品のスタンダード2,480円 (通常3,480円)、熱々の鉄板チーズとステーキの91品のコース3,980円 (通常4,980円) (食べログ、税込)・2026年の口コミに出てくる料理: チーズフォンデュの器になるシカゴピザ、国産和牛の「Avalanche Cheese」、パルミジャーノのユッケ、鶏肉のトマトとチーズの鉄板焼き、カルボナーラ、野菜とポテトにあふれるチーズ、はちみつのチーズボール、とろけるチーズのローストビーフ、揚げパスタ、最初に出る kara-age とポテト、生ハムとサラミ、ドライフルーツつきのチーズの盛り合わせ・少なめの量で、いろいろ試せる・頼めば誕生日のケーキも (2026年7月)',
    neighborhood: '小松原町、梅田エビスビルの8階。JR大阪駅、梅田駅、東梅田駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。食べ放題はピザ (シカゴピザも)、パスタ、揚げパスタ、kara-age、ポテト、揚げたバゲットが中心 (2026年の口コミ)。',
    vegan_detail: '実際にはヴィーガンではありません。肉とチーズの料理の食べ放題。食べログにはベジタリアンのオプションの表示があり、アラカルトにはバーニャカウダもある (2026年10月)。',
    notes: '[イタリアンの食べ放題・梅田、チーズと肉の食べ放題] 東梅田に近いビルの8階にあるイタリアンの食べ放題で、若いグループに人気。テーブルでステーキやローストビーフ、野菜にチーズをかけ、シカゴピザはチーズフォンデュの器になる。コースは59〜91品の小皿で2,480〜3,980円、スマホで注文し、テーブル全員で同じドリンクのプランをつける決まり。土日祝は11時から昼の食べ放題も。窓際の席からは夜景が見え (7月に明るいうちに着いた人にはパチンコの看板が見えた)、隠し扉の個室もある。料理が早く出てお得という声の一方、店がせまい、揚げたバゲットが油っぽい、ドリンクの仕組みの説明がなかった、予約と違うコースの席だった (2026年10月) という声も。深夜0時まで営業。',
  });
}

// ================================================================ 日本酒と料理 くろ川
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27146059/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'https://kitashinchi-kurokawa.com/';
  const MS = day(['18:00', '02:00']), SU = day(['18:00', '24:00']);
  put({
    id: 'osaka_nihonshu_to_ryori_kurokawa', name: '日本酒と料理 くろ川 (Japan Shu to Ryori Kurokawa)', category: 'OMNI',
    lat: 34.698002, lng: 135.498166, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. The course includes Saikyo-yaki, a soy-dressed shirako dish (February 2026), sashimi and charcoal-grilled wagyu or chicken, usually seasoned with soy sauce or miso that can contain wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a course of fish, seafood, wagyu and dashi-based dishes, with homemade sake ice cream.',
    hours_raw: 'Official site: 18:00–2:00 (last order 1:30); Sunday 18:00–24:00 (last order 23:30). Tabelog: Mon–Fri 18:00–3:00; Sat, Sun and holidays 18:00–24:00. Closing days not fixed; check Instagram (both). À la carte late-night service from 21:00 (Tabelog). Courses by reservation only, limited to eight course guests a day (official site; Tabelog). Service charge 5% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners; UnionPay per the official site); Tabelog says no QR, the official site lists d Barai. 12 seats at a U-shaped counter with a night view over Kitashinchi; private hire up to 20; non-smoking; no strong perfume; paid parking in front (Tabelog). The shop is run by one person, so book or phone ahead (Tabelog). Opened 10 December 2024 (Tabelog).',
    hours: { 0: MS, 1: MS, 2: MS, 3: MS, 4: MS, 5: MS, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi, ミヤプラザ 8F, with a night view — 2 min from JR Kitashinchi Stn',
    cuisine: 'Seasonal Japanese cooking to go with sake: over 100 sakes from across Japan, from ¥600 a glass (official site) · courses (Tabelog, tax included): Kurokawa Main Course ¥12,000 (10 dishes), Premium ¥15,500, Special Omakase ¥22,000; the official ¥12,000 course runs appetizer, sashimi, sake snacks, soup, grilled dish, a small dish, vinegared dish, charcoal-grilled black wagyu, clay-pot rice and miso soup, homemade sake ice cream · rice bought as brown rice from Hokkaido, polished in Osaka and cooked in a clay pot; natural water known as sake-brewing water used for stock and rice (official site) · a December 2025 course: low-temperature sawara with burdock purée, crab chawanmushi, bluefin, kanpachi and Ishigaki sea bream, winter-yellowtail Saikyo-yaki, charcoal-grilled chicken, clay-pot rice, sake ice cream · February 2026: shirako with rapeseed flowers and strawberries in yuzu soy, tuna sushi, clam soup, yellowtail, sea bream and striped-jack sashimi · late-night à la carte from 21:00 (Tabelog)',
    website: OFF, gmaps: gm('日本酒と料理 くろ川 北新地'), menu_url: OFF,
    notes: "[Japanese · Kitashinchi, a sake counter with a night view] A one-person Japanese restaurant on the eighth floor of a Kitashinchi building, with a U-shaped counter facing the night lights and over a hundred sakes, poured from ¥600 a glass and matched to each dish. The owner, a cook who has worked only in Japanese cuisine (official site), serves a seasonal course from ¥12,000 to just eight course guests a day: sashimi, a seasonal soup, Saikyo-yaki, charcoal-grilled wagyu, and rice from Hokkaido polished in Osaka and cooked in a clay pot, ending with homemade sake ice cream. After 21:00 the counter opens for à la carte and drinks until late. Diners describe a friendly owner, and in December 2025 guests chatted easily across the counter; one found the course too slow to finish before a second booking (December 2025). A sake evening with the Ichinokura brewery was held in January 2026.",
    chef_bio: { chef_name: null, roles: ['Owner (店主, unnamed), who runs the shop alone (official site; Tabelog)'], origin: null, background: 'Official site (read 2026-11-01): "これまで和食一筋で歩んできましたが、常に心にあるのは、「美味しいものを、もっと美味しく食べてもらいたい」という思いです" — the owner has worked only in Japanese cuisine and wants good food eaten at its best; chose Kitashinchi for a relaxed place despite the district\'s formal image. Tabelog: "We operate with a single staff member." Opened 10 December 2024. Reviews: a friendly owner (December 2025; February 2026); a sake event with the Ichinokura brewery of Miyagi (January 2026).', philosophy: '"美味しいものを、もっと美味しく食べてもらいたい" (official site).', specialty: 'Seasonal course matched with 100+ sakes; clay-pot rice.',
      anecdotes: [
        { text: '"I made a vague request, and they brought out many recommended sakes." — December 2025.', source: R + 'B518224417/' },
        { text: '"From my seat at the counter, I had a great view of the cars passing by on Route 2." — February 2026.', source: R + 'B522333859/' },
        { text: '"The course took quite a long time, and since I had a reservation at another place, I couldn\'t finish everything, which was disappointing. However, the friendly owner made the experience enjoyable." — December 2025, a first visit.', source: R + 'B519658001/' },
      ],
      japanese_sources_summary: '公式サイト: 日本酒と料理 くろ川、大阪市北区曾根崎新地1-10-22 ミヤプラザ 8F、北新地駅から徒歩2分、18:00〜翌2:00 (L.O.翌1:30)、日曜18:00〜24:00、不定休 (Instagram で確認)、日本酒は常時100種類以上、1杯600円 (税込) から、北海道から玄米で仕入れて大阪で精米し釜炊きするご飯、清酒の仕込み水として知られる自然水を使う、12,000円の10品のコース (先付け、お造り、酒肴、椀物、焼き物、一品、酢の物、黒毛和牛の炭火焼、土鍋の白ご飯と味噌汁、自家製の日本酒アイス)、1日8名様限定のコース予約制、夜景が見える和モダンの店、店主は和食一筋、WEB予約で店主のおすすめの日本酒をおちょこ1杯、カード可、QR は d払い。食べログ (店舗会員): 月〜金18:00〜3:00、土日祝18:00〜24:00、21時からアラカルトの深夜営業、コース12,000円・15,500円・22,000円、サービス料5%、U字のカウンター12席、ひとりで営業、2024年12月10日オープン。',
      confidence: 'medium', sources: [TB, OFF, R + 'B499381856/', R + 'B518224417/', R + 'B519105613/', R + 'B519459929/', R + 'B519658001/', R + 'B521425955/', R + 'B522333859/', R + 'B522376968/', R + 'B525180633/', R + 'B526463862/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course by reservation, sake recommended by the owner; a counter where guests chat (2025–2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市北区曾根崎新地1-10-22 ミヤプラザ 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; official site (read 2026-11-01); reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目10番 (lot) 58m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, OFF],
    price_note: 'Courses from the Tabelog listing (tax included; 5% service); the ¥12,000 course and sake price from the official site.', last_checked: TODAY, items: [
      it('12,000円 10品コース', '', 'Kurokawa Main Course (10 dishes, ending in charcoal-grilled wagyu, clay-pot rice and sake ice cream)', '¥12,000', 'Course', 'ask', 'no', 'Official site; Tabelog.', 'main_course'),
      it('', '', 'Kurokawa Premium Course (10 dishes)', '¥15,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'premium_course'),
      it('', '', 'Kurokawa Special Omakase (10 dishes)', '¥22,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'special_omakase'),
      it('', '', 'Sake by the glass (100+ kinds)', '¥600', 'Drinks', '', '', 'Official site ("from ¥600").', 'sake_glass'),
    ] }, {
    cuisine: '日本酒に合う季節の和食: 全国の日本酒100種類以上、1杯600円から (公式サイト)・コース (食べログ、税込): くろ川のメインコース12,000円 (10品)、プレミアム15,500円、スペシャルおまかせ22,000円。公式の12,000円のコースは先付け、お造り、酒肴、椀物、焼き物、一品、酢の物、黒毛和牛の炭火焼、土鍋の白ご飯と味噌汁、自家製の日本酒アイス・ご飯は北海道から玄米で仕入れて大阪で精米し、土鍋で炊く。仕込みや炊飯には清酒の仕込み水として知られる自然水 (公式サイト)・2025年12月のコース: サワラの低温調理とごぼうのピュレ、かにの茶碗蒸し、本マグロ、カンパチ、Ishigaki の鯛、寒ブリの西京焼き、鶏の炭火焼き、土鍋ご飯、日本酒のアイス・2026年2月: 白子と菜の花といちごの柚子醤油、マグロの鮨、はまぐりのお吸い物、ブリ、鯛、シマアジの刺身・21時からは深夜のアラカルト (食べログ)',
    neighborhood: '北新地、ミヤプラザの8階、夜景が見える。JR北新地駅から徒歩2分',
    gf_detail: '予約時に要確認。グルテンの情報なし。コースには西京焼き、柚子醤油の白子 (2026年2月)、刺身、黒毛和牛や鶏の炭火焼きがあり、ふつう小麦を含むことがある醤油や味噌で味つけする。',
    vegan_detail: 'ヴィーガンではありません。魚、魚介、和牛、だしの料理のコースで、自家製の日本酒アイスも。',
    notes: '[和食・北新地、夜景の見える日本酒のカウンター] 北新地のビルの8階にある、ひとりで営む和食の店。夜景に向いたU字のカウンターで、100種類以上の日本酒を1杯600円から、料理に合わせて注いでくれる。和食一筋の店主 (公式サイト) が、1日8名様限定で12,000円からの季節のコースを出す: 刺身、季節の椀物、西京焼き、黒毛和牛の炭火焼き、北海道の玄米を大阪で精米して土鍋で炊いたご飯、最後は自家製の日本酒のアイス。21時からはアラカルトと日本酒で遅くまで。気さくな店主という声があり、2025年12月にはほかのお客さんとも話がはずんだという。コースに時間がかかり、次の予約までに食べきれなかったという人も (2025年12月)。2026年1月には Ichinokura の蔵元との日本酒の会もあった。',
  });
}

save();
