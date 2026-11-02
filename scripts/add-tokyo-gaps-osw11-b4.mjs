// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 4.
//   + 人形町 なな福 Ningyocho Nanafuku (17-seat seasonal washoku; jubako lunch, hot-pot courses; since June 2023)
//   + インディアンレストラン アンキットの気持ち Ankit no Kimochi (Indian curry and biryani by chef Ankit; since 2018)
//   + 川田 Kawada (7-seat Kyoto-lineage kappo run by owner-chef Haruji Kawada; Tabelog Award Bronze 2021/22/25/26)
//   + 汽素火 Kisui (7-seat counter of washoku, tempura and ju-wari soba by two chefs; opened May 2026)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 10 ningyocho` (main repo, 2026-11-01): the first four,
//   81, 88, 108 and 119 m from the circle centre. Core by: Nanafuku 17 seats; Ankit vegtag (Tabelog "Vegetarian options");
//   Kawada 7 seats; Kisui 7 seats; reviews 30–339.
//   Dedupe. None is in data/tokyo.json by name or address. Shared buildings: Kawada is at 日本橋人形町1-5-5 B1F, the same
//   basement as tokyo_washoku_bar_kamesuke_ningyocho (address_ja "東京都中央区日本橋人形町1-5-5 芳町ビル B1F"; Tabelog
//   points 5 m apart); Kisui is room 302 of 日本橋芸者新道ビル, the building of tokyo_sushi_kaminari_ningyocho (address_ja
//   "東京都中央区日本橋人形町1-5-10 日本橋芸者新道ビル 1F"; 13 m apart). Each keeps its own Tabelog point.
//   Chain check. Ankit: the earlier Hamacho shop is closed (September 2026 review), so one shop. Others: single shops.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 人形町 なな福
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13284683/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const WK = day(['11:30', '14:00'], ['17:00', '23:00']); const SAT = day(['17:00', '23:00']);
  put({
    id: 'tokyo_nanafuku_ningyocho', name: '人形町 なな福 (Ningyocho Nanafuku)', category: 'OMNI',
    lat: 35.686054, lng: 139.78304, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as served: the shop says all food is made in one kitchen with allergens and it may decline guests with severe or wide-ranging allergies (Tabelog). The cooking is dashi- and soy-based, with tempura and fried dishes on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the shop lists vegetarians, vegans and anyone who cannot eat seafood "including dashi" among the diets it may not be able to accommodate (Tabelog).',
    hours_raw: 'Mon–Fri 11:30–14:00 (last order 13:30) and 17:00–23:00 (last order food 22:00, drinks 22:30); Sat 17:00–23:00; the day after a holiday lunch from 12:00; closed Sundays and holidays (Tabelog). Lunch reservations accepted; the ¥2,000 sashimi-and-drink lunch is reservation-only (2026 reviews). Seat charge ¥600 for the starter (Tabelog). Cards, e-money and QR (Tabelog). 17 seats (15 at lunch), incl. a counter; can be hired for up to 20 (Tabelog). Non-smoking. Cancellations or changes at least two days ahead (Tabelog). Opened 1 June 2023 (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: SAT }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-6-11, 五十番ビル 1F, just off the main street — 1 min from Ningyocho Stn',
    cuisine: 'Seasonal Japanese cooking, menu changing daily (Tabelog) · lunch: jubako of nine small dishes with sashimi and a drink, reservation-only, ¥2,000 (April and September 2026), with clay-pot rice and miso soup; tuna bowl (May 2026); four lunch options in April 2026 · dinner à la carte (Tabelog menu, tax included, updated 20 October 2026): 5-kind sashimi ¥1,880, 8-kind ¥2,200; monkfish liver with ponzu ¥1,300; kinki grilled and simmered ¥2,380; tuna yukke ¥1,500; drunken shrimp ¥1,800; taro steamed and fried ¥1,000 · conger eel and a wide range of tempura (June 2026); thick-cut lean and fatty tuna sashimi (October 2026) · courses with daily dishes: winter anko (monkfish) hot pot to rice porridge ¥11,800 and hon-ara hot pot ¥14,800 (online prices; Tabelog); Fuku course with all-you-can-drink, incl. grilled sweetfish, firefly squid, wagyu shabu-shabu and takikomi-gohan (April 2026); wagyu geta sukiyaki on courses (Tabelog) · sake picked by a sake expert, wine by a sommelier (Tabelog)',
    website: TB, gmaps: gm('人形町 なな福'), menu_url: MENU,
    notes: "[Izakaya · Ningyocho, seasonal washoku with a jubako lunch near the station] A small modern-Japanese dining room just off the main street near Ningyocho station, opened in 2023, with a menu that changes daily. Lunch is the bargain: a reservation-only tiered box of nine small dishes with sashimi and a drink for ¥2,000. A September 2026 box held hot karaage, thick salmon, bonito with ponzu, vegetable curry and more; it comes with clay-pot rice. A May 2026 diner came before a Meijiza matinee and found it nearly full by 11:45. Dinner is sashimi, tempura and seasonal plates with a long sake list, or courses: an April 2026 course ran from grilled sweetfish and firefly squid to wagyu shabu-shabu and seasoned rice; in winter, monkfish or hon-ara hot pot ending in porridge. Service can be thin: one man on the floor on a busy April 2026 day, one server and one cook in September 2026. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 1 June 2023 (Tabelog). Tabelog\'s shop text: authentic Japanese cuisine with seasonal ingredients in a modern Japanese space; the menu changes daily; sake chosen by a sake expert and wine by a sommelier; early-booking discounts on courses. Its allergy notice says food is made in a kitchen with allergens and that it may be unable to accommodate vegetarians, vegans, guests who cannot eat seafood including dashi, carbohydrate or fat restrictions, or severe allergies.',
      philosophy: null, specialty: 'Jubako lunch with sashimi; seasonal hot-pot courses.',
      anecdotes: [
        { text: '"I arrived at the restaurant at 11:30, just in time for the 13:00 performance at Meijiza." — May 2026, jubako lunch.', source: R + 'B528833418/' },
        { text: '"The gozen set featured hot and crispy chicken kara-age, thick salmon, bonito with ponzu sauce, komatsuna (Japanese mustard spinach) ohitashi … a vegetable curry with zucchini and potatoes." — September 2026, ¥2,000 reservation-only set.', source: R + 'B534996446/' },
        { text: '"I was completely satisfied after having a second helping of the flavorful takikomi gohan (seasoned rice)." — April 2026, Fuku course.', source: R + 'B498024585/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 人形町 なな福、日本料理、海鮮、居酒屋、日本橋人形町2-6-11 五十番ビル 1F、人形町駅から徒歩1分、月〜金11:30〜14:00、17:00〜23:00、土17:00〜23:00、日祝休み、席料600円 (先付け代金)、17席 (昼は15席)、カード・電子マネー・QR可、禁煙、2023年6月1日オープン、日替わりのメニュー、日本酒は専門家が、ワインはソムリエが選ぶ、冬のあんこう鍋コース11,800円、Hon-ara の鍋のコース14,800円、アレルギーの食材と同じ厨房で調理、ベジタリアン、ヴィーガン、出汁を含む魚介が食べられない方などには対応できない場合あり。メニュー (2026年10月20日更新): 刺身5種盛り1,880円、8種2,200円、あん肝ポン酢1,300円、きんきの焼きと煮付け2,380円。口コミ(2024年12月〜2026年10月): 予約限定の刺身と飲み物付きの重箱御膳2,000円、9品のおかず、土鍋ご飯、Meijiza の観劇前に、11:45にほぼ満席、天ぷらが豊富、穴子、マグロの刺身、Fuku コースで鮎、ホタルイカ、和牛しゃぶしゃぶ、炊き込みご飯、ホールのスタッフはひとり。',
      confidence: 'medium', sources: [TB, MENU, R + 'B498024585/', R + 'B526161467/', R + 'B526320381/', R + 'B526664436/', R + 'B527258893/', R + 'B528833418/', R + 'B529359148/', R + 'B534598671/', R + 'B534996446/', R + 'B538307651/'] },
    cultural_comfort: { level: 'japanese', note: 'A daily-changing Japanese menu; the ¥2,000 lunch box must be booked ahead.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['One kitchen with allergens; trace contamination possible; may decline severe or wide-ranging allergies; may not accommodate vegetarians, vegans or no-dashi diets (Tabelog)'] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-6-11 五十番ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with a menu updated 20 October 2026; reviews dated December 2024–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686054, 139.783040); cross-checked: GSI 東京都中央区日本橋人形町二丁目6番11号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, TB, R + 'B534996446/'],
    price_note: 'À la carte from the Tabelog menu (tax included; updated 20 October 2026); lunch from 2026 reviews; courses at Tabelog online prices.', last_checked: TODAY, items: [
      it('', '', 'Reservation-only lunch: jubako of 9 dishes with sashimi and a drink', '¥2,000', 'Lunch', 'no', 'no', 'April and September 2026.', 'jubako_lunch'),
      it('', '', 'Sashimi, 5 kinds', '¥1,880', 'Fish', 'no', 'no', 'Tabelog menu; 8 kinds ¥2,200.', 'sashimi5'),
      it('', '', 'Monkfish liver with ponzu', '¥1,300', 'Fish', 'no', 'no', 'Tabelog menu.', 'ankimo'),
      it('', '', 'Kinki, grilled and simmered', '¥2,380', 'Fish', 'no', 'no', 'Tabelog menu.', 'kinki'),
      it('', '', 'Anko (monkfish) hot pot course, 8 items', '¥11,800', 'Courses', 'no', 'no', 'Tabelog online price; winter.', 'anko_course'),
      it('', '', 'Hon-ara hot pot course, 8 items', '¥14,800', 'Courses', 'no', 'no', 'Tabelog online price; winter.', 'honara_course'),
    ] }, {
    cuisine: '日替わりの季節の和食 (食べログ)・昼: 予約限定の刺身と飲み物付きの9品の重箱2,000円 (2026年4月、9月)、土鍋ご飯と味噌汁付き。鮪丼 (2026年5月)。2026年4月には昼の選択肢が4つ・夜の一品 (食べログのメニュー、税込み、2026年10月20日更新): 刺身5種盛り1,880円、8種2,200円、あん肝ポン酢1,300円、きんきの焼きと煮付け2,380円、まぐろのユッケ1,500円、酔っ払い海老1,800円、里芋の蒸しと揚げ1,000円・穴子といろいろな天ぷら (2026年6月)、赤身と脂ののったマグロの厚切りの刺身 (2026年10月)・日替わりの料理のコース: 冬のあんこう鍋から雑炊まで11,800円、Hon-ara の鍋14,800円 (ネット予約の値段、食べログ)。2026年4月の飲み放題付きの Fuku コースは鮎の塩焼き、ホタルイカ、和牛しゃぶしゃぶ、炊き込みご飯。コースには和牛の Geta すき焼きも (食べログ)・日本酒は専門家が、ワインはソムリエが選ぶ (食べログ)',
    neighborhood: '日本橋人形町2-6-11 五十番ビル 1F、大通りから少し入ったところ。人形町駅から徒歩1分',
    gf_detail: 'このままではグルテンフリーではない: 店はアレルギーの食材と同じ厨房で調理し、重度または多くのアレルギーの方はお断りすることがあるとしている (食べログ)。料理は出汁と醤油が基本で、天ぷらや揚げ物もある。',
    vegan_detail: 'ヴィーガンではない: 店は対応できない場合がある食事として、ベジタリアン、ヴィーガン、出汁を含む魚介が食べられない方を挙げている (食べログ)。',
    notes: '[居酒屋・人形町、駅近くの重箱ランチの季節の和食] 人形町駅近く、大通りから少し入った和モダンの小さな店で、2023年の開店、メニューは日替わり。お得なのは昼で、予約限定の刺身と飲み物付きの9品の重箱が2,000円。2026年9月には熱々の唐揚げ、厚切りの鮭、鰹のポン酢、野菜のカレーなどが入り、土鍋ご飯が付く。2026年5月には Meijiza の昼の公演の前に寄った人も、11:45には満席に近かったという。夜は刺身、天ぷら、季節の一品を豊富な日本酒と、またはコースで。2026年4月のコースは鮎の塩焼きやホタルイカから和牛しゃぶしゃぶ、炊き込みご飯まで。冬はあんこうやHon-ara の鍋を雑炊まで。ホールの人手は少なめで、2026年4月の混んだ日は男性スタッフひとり、9月はホールと厨房にひとりずつ。日曜休み。',
  });
}

// ================================================================ インディアンレストラン アンキットの気持ち
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13222086/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const H = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_ankit_no_kimochi_ningyocho', name: 'インディアンレストラン アンキットの気持ち (Indian Restaurant Ankit no Kimochi)', category: 'OMNI',
    lat: 35.685567, lng: 139.781754, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Curry with basmati rice or biryani avoids the naan, and rice can be chosen instead of naan at lunch (2026 reviews), but no curry is described as gluten-free, and samosas, naan and Indian-style yakisoba are wheat.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and spinach (saag) and chickpea curries appear in 2026 reviews, but saag chicken, butter chicken and creamy malai tikka show dairy and meat are common; ask which curries are made without ghee, cream or yogurt.',
    hours_raw: 'Tue–Sun 11:00–15:00 and 17:00–23:00; closed Monday (Tabelog). Cards only at dinner; e-money and PayPay (Tabelog). 43 seats: 19 on the 1st floor, 24 on the 2nd (Tabelog). Non-smoking; children and strollers welcome; takeaway (Tabelog). Lunch sets come with one free refill of naan or rice (August–September 2026). Biryani at lunch on certain days only (Thursday–Saturday per an August 2026 diner; "weekend-only" per a September 2026 diner). Opened 29 May 2018 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 1-4-13 — 1 min from Ningyocho Stn, 4 min from Suitengumae Stn',
    cuisine: 'North and South Indian curries, tandoori and biryani · lunch sets about ¥1,000–1,100 with naan (plain or pumpkin; cheese naan extra) or basmati rice and one free refill: chicken steak and curry set ¥1,000 (September 2026); B set of two curries with salad ¥1,050 (August 2026); Ankit no Kimochi set of two curries with chicken tikka ¥1,100 (September 2026); biryani set with one curry ¥950, lassi +¥150 (September 2026) · curries in 2026 reviews: saag (spinach), saag chicken, butter chicken, keema, mutton, chickpea and chicken, tomato daily curry; free onion achar on the table · chicken biryani of basmati rice with whole cardamom and cloves; the house biryani uses 17 spices (Tabelog) · tandoori chicken ¥300 a piece; chicken tikka 3 pieces ¥600; malai tikka; seekh kebab; samosa ¥300; dahi vada ¥500 (Tabelog menu, 2023) · Indian-style yakisoba with a house sauce ¥700 (October 2026) · courses with all-you-can-drink: 9 dishes and 2 h ¥4,500; 12 dishes with biryani, masala dosa and cheese naan and 2.5 h ¥5,000 (Tabelog)',
    website: TB, gmaps: gm('アンキットの気持ち 人形町'), menu_url: MENU,
    notes: "[Curry · Ningyocho, Indian curry and biryani by chef Ankit] A two-floor Indian restaurant a minute from Ningyocho station, opened in 2018 by the team behind a popular Hamacho shop. That shop has since closed, and a September 2026 diner found the same kind server here seven years on. Tabelog says Chef Ankit sources ingredients from home in India. Lunch is the draw: a curry set for about ¥1,000 with plain or pumpkin naan or basmati rice, one free refill, and a jar of onion achar on every table. A three-time visitor keeps ordering the chicken biryani, and an August 2026 diner found it fragrant with whole cardamom and cloves. Diners also like the spiced chicken steak set, the saag and the keema. At night there are tandoori, samosas, dosa and an Indian-style yakisoba (¥700) that one October 2026 diner rated with a highball. Party courses with drinks run from ¥4,500. Spice is mild unless you ask. Closed Mondays.",
    chef_bio: { chef_name: 'Ankit (Tabelog: "Chef Ankit")', roles: ['Chef (Tabelog: "Chef Ankit sources ingredients directly from [the chef’s] hometown")'], origin: 'India (Tabelog: "my hometown India")',
      background: 'Tabelog\'s shop text: "Ankit no Kimochi, a popular spot in Hamacho, has opened in Ningyocho"; chef Ankit sources ingredients from the chef\'s home town; biryani made with 17 spices; "I want to share the beauty of my hometown India". A September 2026 diner recognised the server at the register from the now-closed Hamacho branch, visited about seven years earlier. Opened 29 May 2018 (Tabelog). A September 2026 diner found the Japanese staff lively.',
      philosophy: 'Share the beauty of the chef\'s home country, India (Tabelog).', specialty: 'Chicken biryani; curry lunch sets with free naan refills.',
      anecdotes: [
        { text: '"I hesitantly asked on my way out if it was indeed [the same server], and [the server] confirmed it. It made me realize that memories of kind people linger on." — September 2026, about the server from the closed Hamacho branch.', source: R + 'B411091258/' },
        { text: '"The fluffy basmati rice is truly delicious, and every time I have it, I\'m reminded that I made the right choice." — October 2026, chicken biryani.', source: R + 'B519681731/' },
        { text: '"It has a slight spiciness to it. I wondered what the flavor was, and when I asked, they mentioned they have an \'original sauce.\'" — October 2026, Indian-style yakisoba ¥700.', source: R + 'B537407520/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): インディアンレストラン アンキットの気持ち、インドカレー、居酒屋、ダイニングバー、日本橋人形町1-4-13、人形町駅から徒歩1分、火〜日11:00〜15:00、17:00〜23:00、月曜休み、サービス料なし、カードはディナーのみ、電子マネー・PayPay可、43席 (1階19席、2階24席)、禁煙、子ども可、テイクアウト可、ベジタリアンメニューあり、2018年5月29日オープン、Hamacho の人気店が人形町に、Ankit シェフが故郷から食材を、17種類のスパイスのビリヤニ、飲み放題付きのコース4,500円・5,000円。口コミ(2025年12月〜2026年10月): ランチは1,000円前後でナンかライスのおかわり1回無料、プレーンかかぼちゃのナン、テーブルに食べ放題の玉ねぎのアチャール、チキンビリヤニ、サグ、キーマ、マトン、チキンステーキのセット、インド風焼きそば700円、Hamacho 店は閉店、辛さは控えめ。',
      confidence: 'medium', sources: [TB, MENU, R + 'B411091258/', R + 'B494341379/', R + 'B519681731/', R + 'B534969424/', R + 'B535124805/', R + 'B535734943/', R + 'B536221009/', R + 'B536414597/', R + 'B536985363/', R + 'B537407520/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch is a short list of curry sets; Japanese-speaking staff (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-4-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated December 2025–October 2026.' },
    pin_source: `Tabelog ${TB} (35.685567, 139.781754); cross-checked: GSI 東京都中央区日本橋人形町一丁目4番13号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536414597/', R + 'B535124805/', R + 'B536221009/', R + 'B411091258/', MENU],
    price_note: 'Lunch prices from August–September 2026 reviews; tandoori and snacks from the Tabelog menu (last updated November 2023); courses from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Chicken steak and curry set (lunch)', '¥1,000', 'Lunch', 'ask', 'no', 'September 2026; naan or rice, one free refill.', 'chicken_steak_set'),
      it('', '', 'B set: two curries, salad, naan and rice (lunch)', '¥1,050', 'Lunch', 'ask', 'ask', 'August 2026.', 'b_set'),
      it('', '', 'Ankit no Kimochi set: two curries with chicken tikka (lunch)', '¥1,100', 'Lunch', 'ask', 'no', 'September 2026.', 'ankit_set'),
      it('', '', 'Biryani set with one curry (lunch, certain days)', '¥950', 'Lunch', 'ask', 'ask', 'September 2026.', 'biryani_set'),
      it('', '', 'Tandoori chicken, 1 piece', '¥300', 'Tandoori', 'ask', 'no', 'Tabelog menu (2023).', 'tandoori'),
      it('', '', 'Indian-style yakisoba', '¥700', 'Dinner', 'no', 'ask', 'October 2026.', 'yakisoba'),
      it('', '', 'Course with biryani, 9 dishes, 2 h all-you-can-drink', '¥4,500', 'Courses', 'ask', 'ask', 'Tabelog.', 'course_4500'),
    ] }, {
    cuisine: '北と南のインドカレー、タンドール料理、ビリヤニ・ランチセットは1,000〜1,100円ほどで、ナン (プレーンかかぼちゃ、チーズナンは追加料金) かバスマティライス、おかわり1回無料: チキンステーキとカレーのセット1,000円 (2026年9月)、カレー2種とサラダのBセット1,050円 (2026年8月)、カレー2種とチキンティッカのアンキットの気持ちセット1,100円 (2026年9月)、カレー1種付きのビリヤニセット950円、ラッシー+150円 (2026年9月)・2026年の口コミのカレー: サグ (ほうれん草)、サグチキン、バターチキン、キーマ、マトン、ひよこ豆とチキン、トマトの日替わり。テーブルには無料の玉ねぎのアチャール・カルダモンとクローブが入ったバスマティライスのチキンビリヤニ。店のビリヤニは17種類のスパイス (食べログ)・タンドリーチキン1ピース300円、チキンティッカ3ピース600円、マライティッカ、シークカバブ、サモサ300円、ダヒワダ500円 (食べログのメニュー、2023年)・特製ソースのインド風焼きそば700円 (2026年10月)・飲み放題付きのコース: 9品2時間4,500円、ビリヤニ、マサラドーサ、チーズナンの12品2時間半5,000円 (食べログ)',
    neighborhood: '日本橋人形町1-4-13。人形町駅から徒歩1分、水天宮前駅から徒歩4分',
    gf_detail: '要確認。カレーにバスマティライスやビリヤニならナンは避けられ、昼はナンの代わりにライスも選べる (2026年の口コミ) が、グルテンフリーと書かれたカレーはなく、サモサ、ナン、インド風焼きそばは小麦。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、2026年の口コミにはほうれん草 (サグ) やひよこ豆のカレーも出てくるが、サグチキン、バターチキン、クリーミーなマライティッカなど乳製品と肉が多い。ギー、生クリーム、ヨーグルトを使わないカレーを確認して。',
    notes: '[カレー・人形町、Ankit シェフのインドカレーとビリヤニ] 人形町駅から1分、2フロアのインド料理店で、Hamacho の人気店が2018年に人形町に開いた。Hamacho の店はその後閉店し、2026年9月には7年前にHamacho で会った親切な店員にここで再会した人も。食べログによれば Ankit シェフは故郷インドから食材を取り寄せる。昼が人気で、1,000円ほどのカレーのセットにプレーンかかぼちゃのナン、またはバスマティライス、おかわり1回無料、どのテーブルにも玉ねぎのアチャール。カルダモンとクローブが香るチキンビリヤニを毎回頼む人もいて、スパイスのきいたチキンステーキのセット、サグ、キーマも好評。夜はタンドール料理、サモサ、ドーサ、2026年10月の口コミでハイボールに合うと評判のインド風焼きそば (700円)。飲み放題付きの宴会コースは4,500円から。辛さは頼まなければ控えめ。月曜休み。',
  });
}

// ================================================================ 川田
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13232330/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['17:30', '21:00']); const WE = day(['12:00', '14:30'], ['17:30', '21:00']);
  put({
    id: 'tokyo_kawada_ningyocho', name: '川田 (Kawada)', category: 'MOM_AND_POP',
    lat: 35.68539, lng: 139.781711, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. A set omakase of Kyoto-style dishes: some fish is served with salt (2026 reviews), but soups, simmered dishes and sauces are dashi- and soy-based, and courses have included tempura, kudzu-thickened dishes, a final dashi curry and warabi mochi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led omakase built on dashi (sea-bream broth jelly, conger eel soups, bonito).',
    hours_raw: 'Mon–Fri 17:30–21:00; Sat, Sun and holidays 12:00–14:30 and 17:30–21:00; Sundays irregular (Tabelog). Reservations only; the person who booked must attend; more than 30 minutes late and the booking is cancelled; dinner takes about 2½ hours (Tabelog). Omakase ¥39,000, booked for two (Tabelog set menu). No strong perfume (Tabelog). Drinks may be brought in for a fee (Tabelog). Cards incl. UnionPay; no e-money or QR (Tabelog). 7 seats (Tabelog; a July 2026 diner counted 8 at the counter). Non-smoking. Opened February 2019 (March 2025 review).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 1-5-5 B1F, at the very back of a basement row of shops in an alley — 2 min from Ningyocho Stn exit A6; Washoku Bar Kamesuke is in the same basement',
    cuisine: 'Kyoto-lineage Japanese omakase changing with the season, about 12 dishes and three rice courses (2026 reviews) · omakase ¥39,000 (Tabelog); a May 2026 diner paid ¥30,000 for food · signatures: sea-bream broth jelly with fresh sea urchin; taro stems in Yoshino kudzu sauce with ginger, a Kyo-mi classic; fig dengaku; bonito seared over burning straw at the counter; abalone in the crisp-coated style of Kyo-mi\'s late chef Nishikawa · seasonal 2026 dishes: young sweetfish tempura, hamo and junsai soup, kamo eggplant with hairy crab (June); conger-eel sushi, corn, winter melon (July); matsutake rice and wagyu-matsutake sukiyaki, Ise lobster (October); Matsuba crab from Tsuiyama in winter (Tabelog) · clay-pot rice served three ways (e.g. ginger rice, shirasu with sansho, sea bream in sesame sauce), and an off-menu seafood dashi curry · warabi mochi kneaded at the counter · about four sakes; wine by the bottle only (May 2026) · Rosanjin tableware (Tabelog)',
    website: TB, gmaps: gm('川田 日本料理 人形町'), menu_url: null,
    notes: "[Kaiseki · Ningyocho, a seven-seat Kyoto-lineage counter of chef Haruji Kawada] A plain basement counter at the back of an alley arcade near Ningyocho station, where owner-chef Haruji Kawada has cooked alone since opening in February 2019 (2026 reviews). Tabelog traces the cooking from Kyo-mi through the restaurant its English page calls \"Isetsu\" (reviewers write \"Iiyuki\"). The omakase (about ¥39,000) follows the season closely. In summer 2026 there was sea-bream broth jelly under sea urchin, taro stems in kudzu sauce, young sweetfish, hamo with junsai, and bonito seared over burning straw at the counter, a technique the chef learned in Kochi. Autumn brings matsutake and Ise lobster, and winter crab from Tsuiyama. The meal ends with clay-pot rice three ways, an off-menu dashi curry and warabi mochi kneaded in front of you. Tabelog Award Bronze 2021, 2022, 2025 and 2026. Some regulars come every two months; a first-timer in June 2026 found the flavours too restrained. A May 2026 diner noted little English. No perfume; booking essential.",
    chef_bio: { chef_name: 'Haruji Kawada (川田; romaji from Tabelog and 2026 reviews)', roles: ['Owner-chef, cooking alone (June 2026 review: "the owner, Haruji Kawada, has been cooking solo since its opening")'], origin: null,
      background: 'Per Tabelog\'s shop text: Japanese cuisine by Haruji Kawada "crafted with only the essential techniques", passing down techniques "from Kyo-mi to Isetsu" (as Tabelog\'s English writes it); Rosanjin tableware; a compact kitchen. An October 2026 regular calls the chef a disciple of "the renowned chef Iiyuki from Kyo-mi", a grand-disciple of Kyo-mi; a March 2025 review says the chef trained at "Iiyuki" and opened in February 2019, handling almost all preparation alone. A June 2026 regular says the chef studied straw-grilling in Kochi. Tabelog Award Bronze 2021, 2022, 2025 and 2026; Tabelog Japanese cuisine TOKYO 100 in 2021, 2023 and 2025.',
      philosophy: 'Each dish clearly expresses what it is at first bite; no unnecessary embellishment (Tabelog shop text).', specialty: 'Kyoto-lineage seasonal omakase; straw-seared bonito; taro stems in Yoshino kudzu; clay-pot rice three ways.',
      anecdotes: [
        { text: '"It was impressive to see the chef ignite straw to sear the bonito right in front of us." — September 2026.', source: R + 'B534943198/' },
        { text: '"I absolutely love Kawada\'s fig dengaku. I don\'t know anywhere else where I can have it." — July 2026, seventh visit.', source: R + 'B429247037/' },
        { text: '"There were just five customers, including myself and four foreigners, but the owner\'s limited English skills dampened the mood." — May 2026, ¥34,500 with drinks.', source: R + 'B531693377/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 川田、日本料理、日本橋人形町1-5-5 B1F、人形町駅A6出口から徒歩2分、月〜金17:30〜21:00、土日祝12:00〜14:30、17:30〜21:00、日曜は不定、予約のみ、予約した本人の来店、30分以上の遅刻はキャンセル、所要約2時間半、おまかせ39,000円 (2名)、香水は控えて、持ち込みは有料、カード可、電子マネー・QR不可、7席、禁煙、The Tabelog Award 2021・2022・2025・2026 Bronze、日本料理 TOKYO 百名店 2021・2023・2025、Rosanjin の器。口コミ(2026年4月〜10月): 店主 Haruji Kawada が開店以来ひとりで料理、Kyo-mi の系譜、鯛の出汁のジュレと生雲丹、芋の茎の Yoshino 葛仕立て、無花果の田楽、目の前で藁焼きにする鰹、鮎の天ぷら、鱧とじゅんさいのお椀、松茸ご飯と和牛と松茸のすき焼き、伊勢海老、土鍋ご飯を3種、裏メニューの出汁カレー、目の前で練るわらび餅、2か月ごとに通う常連、英語はあまり通じない、2019年2月開店。',
      confidence: 'medium', sources: [TB, R + 'B419487360/', R + 'B422238031/', R + 'B429247037/', R + 'B460672396/', R + 'B470692316/', R + 'B528459377/', R + 'B529302407/', R + 'B531693377/', R + 'B534943198/', R + 'B536813707/'] },
    cultural_comfort: { level: 'japanese', note: 'Set omakase; little English and no English drink list (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-5-5 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with 2026 awards; reviews dated April–October 2026.' },
    pin_source: `Tabelog ${TB} (35.685390, 139.781711); cross-checked: GSI 東京都中央区日本橋人形町一丁目5番5号 (go) 17m. Same basement as Washoku Bar Kamesuke (tokyo_washoku_bar_kamesuke_ningyocho, address_ja "東京都中央区日本橋人形町1-5-5 芳町ビル B1F"), whose pin is 5 m away; both keep their own Tabelog points; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B531693377/'],
    price_note: 'Course price from Tabelog (tax included; read November 2026); a May 2026 diner paid ¥30,000 for food.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (booked for two)', '¥39,000', 'Courses', 'ask', 'no', 'Tabelog set menu.', 'omakase'),
    ] }, {
    cuisine: '季節で変わる Kyo-mi の系譜の日本料理のおまかせ、約12品と3種のご飯 (2026年の口コミ)・おまかせ39,000円 (食べログ)。2026年5月には料理30,000円だった人も・名物: 鯛の出汁のジュレと生雲丹、Kyo-mi の定番の芋の茎の Yoshino 葛仕立てと生姜、無花果の田楽、カウンターで藁を燃やして焼く鰹、Kyo-mi の故 Nishikawa さんのやり方のカリッとした衣の鮑・2026年の季節の料理: 稚鮎の天ぷら、鱧とじゅんさいのお椀、Kamo 茄子と毛蟹の炊き合わせ (6月)、鱧寿司、とうもろこし、冬瓜 (7月)、松茸ご飯と和牛と松茸のすき焼き、伊勢海老 (10月)、冬は Tsuiyama の Matsuba 蟹 (食べログ)・土鍋ご飯を3通り (たとえば新生姜ご飯、しらすと山椒、鯛の胡麻だれ)、裏メニューの魚介の出汁カレー・目の前で練るわらび餅・日本酒は4種ほど、ワインはボトルのみ (2026年5月)・Rosanjin の器 (食べログ)',
    neighborhood: '日本橋人形町1-5-5 B1F、路地の地下の店の並びのいちばん奥。人形町駅A6出口から徒歩2分。同じ地下に Washoku バル かめすけ',
    gf_detail: '予約時に要確認。京都風の料理のおまかせで、塩で出る魚もある (2026年の口コミ) が、お椀、炊き合わせ、たれは出汁と醤油が基本で、コースには天ぷら、葛の料理、締めの出汁カレー、わらび餅も。',
    vegan_detail: 'ヴィーガンではない: 出汁が基本の魚中心のおまかせ (鯛の出汁のジュレ、鱧のお椀、鰹)。',
    notes: '[懐石・人形町、Haruji Kawada さんの7席の Kyo-mi の系譜のカウンター] 人形町駅近くの路地の地下、店の並びのいちばん奥の簡素なカウンター。店主の Haruji Kawada さんは2019年2月の開店以来ひとりで料理する (2026年の口コミ)。食べログは料理の系譜を Kyo-mi から英語ページで "Isetsu" と書く店へとたどる (口コミでは "Iiyuki")。おまかせ (39,000円ほど) は季節に忠実で、2026年夏は雲丹をのせた鯛の出汁のジュレ、芋の茎の葛仕立て、稚鮎、鱧とじゅんさい、カウンターで藁を燃やして焼く鰹 (店主が Kochi で学んだ技)。秋は松茸と伊勢海老、冬は Tsuiyama の蟹。締めは土鍋ご飯を3通り、裏メニューの出汁カレー、目の前で練るわらび餅。The Tabelog Award Bronze 2021・2022・2025・2026。2か月ごとに通う常連もいる一方、2026年6月に初めて来た人は味が控えめすぎると感じた。2026年5月には英語があまり通じなかったという声も。香水は控えて、予約は必須。',
  });
}

// ================================================================ 汽素火
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13320600/'; const R = TB + 'dtlrvwlst/';
  const MON = day(['17:00', '23:00']); const H = day(['12:00', '14:30'], ['17:30', '23:00']);
  put({
    id: 'tokyo_kisui_ningyocho', name: '汽素火 (Kisui)', category: 'OMNI',
    lat: 35.685215, lng: 139.782025, cuisine_type: 'tempura',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — the shop says allergies are hard to accommodate on the day (Tabelog). The soba is 100% buckwheat (ju-wari, 2026 reviews), but the course centres on tempura, with soy-sauce dips and dashi dishes; the batter is not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led omakase of washoku and tempura with dashi broths (conger eel, chicken, shamo).',
    hours_raw: 'Mon 17:00–23:00; Tue–Sun and holidays 12:00–14:30 and 17:30–23:00; closing days irregular (Tabelog). Reservations only; seats not shown online may be free by phone (Tabelog). Omakase ¥30,000 at lunch or dinner; a lunch short course of 8 items (two starters, four tempura, soba, dessert; 60–75 minutes) ¥12,000 online until 30 November 2026 (¥13,200 per August and September 2026 diners); service charge 10% (Tabelog). English menu (Tabelog). Cards incl. UnionPay; no e-money or QR (Tabelog). 7 counter seats; private hire possible (Tabelog). No shorts, sandals or strong perfume (Tabelog). Opened 20 May 2026 (Tabelog).',
    hours: { 0: MON, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 1-5-10, 日本橋芸者新道ビル room 302 — 1 min from Ningyocho Stn, 5 min from Suitengumae Stn; Sushi Kaminari is on the ground floor',
    cuisine: 'Omakase of seasonal washoku, tempura and soba at a 7-seat counter, menu changing monthly (2026 reviews) · omakase ¥30,000 plus 10% service; lunch short course ¥12,000–13,200 (Tabelog; 2026 reviews) · house tofu made with only salt and nigari, served with edamame and cucumber or ground peanuts; sashimi with house squid salt, Tosa soy sauce and conger-eel vinegar; soups such as shamo-chicken broth over winter melon, hamo and wild maitake · tempura fried in front of you at an island fryer: live amago and sweetfish from Iida, Akashi conger eel, manganji peppers, shiitake, figs, ginkgo, hamo wrapped round matsutake, duck and matsutake · ju-wari (100% buckwheat) soba, cold with lotus root and okra or with salmon roe · clay-pot rice tasting of two varieties (Hitomebore and Sasanishiki; Yukiwakamaru), hot pot of hamo, duck and matsutake · soba pudding · sake by the half-gō from across Japan',
    website: TB, gmaps: gm('汽素火 人形町'), menu_url: null,
    notes: "[Tempura · Ningyocho, a seven-seat counter of washoku, tempura and soba] A quiet counter styled like a tea room on the third floor of the building that houses Sushi Kaminari, opened in May 2026 by two chefs. Reviewers say one cooks Japanese dishes and the other tempura and soba, and that both trained at well-known restaurants (named in reviews as Ogino/Oginoya and Myojaku/Meijaku). Tabelog credits the style to Naoki Butaya. The omakase (¥30,000 plus service) changes monthly. It opens with house tofu made with only salt and nigari, then sashimi with a powder of squid salt, then tempura fried at an island fryer in front of you: river fish delivered live from Iida, Akashi conger eel, figs, matsutake. It ends with ju-wari soba, a tasting of two rices from clay pots and a soba pudding. A weekday lunch short course of about ¥12,000–13,200 shows the style in about an hour. Diners in August–October 2026 were mostly delighted; one September pair found it uneven and pricey. Bookings only.",
    chef_bio: { chef_name: 'Naoki Butaya (romaji as Tabelog gives it: "A New Style of Kappo by Naoki Butaya"; no kanji source found)', roles: ['Chef credited on Tabelog', 'Two chefs: one for Japanese dishes, one for tempura and soba (September 2026 review)', 'Owner (unnamed; worked at a renowned restaurant, October 2026 review)'], origin: null,
      background: 'Opened 20 May 2026 (Tabelog). Tabelog\'s shop text: a 7-seat counter with the feel of a tea room; tempura in a light batter; seasonal dishes "woven from salt, water and bittern"; live cooking in front of guests. September 2026 reviewers say the two chefs come from renowned restaurants, given in English as "Oginoya and Myojaku" and "Meijaku and Ogino". An October 2026 diner heard the owner wants to keep the flavour of the old restaurant while doing things only this chef can do. Per an August 2026 diner, ingredients come direct from producers rather than the market, and the day\'s tempura fish arrived alive from Nagano at 11:00 (September 2026). A September 2026 diner notes Isoda is on the same floor.',
      philosophy: 'Capture the moment each ingredient shines brightest, on the traditions of Japanese cuisine (Tabelog course text).', specialty: 'Tempura of live river fish; ju-wari soba; house tofu.',
      anecdotes: [
        { text: '"The tofu is made with just salt and nigari, yet its flavor is incredibly rich." — August 2026, omakase.', source: R + 'B533640180/' },
        { text: '"They take great care in selecting their fish; the day\'s tempura fish arrived alive from Nagano at 11 AM." — September 2026, lunch short course ¥13,200.', source: R + 'B535074268/' },
        { text: '"The Ju-wari soba was incredibly delicious, ranking high among the best soba I\'ve had." — September 2026, a critical review of the omakase.', source: R + 'B536926162/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 汽素火、日本料理、天ぷら、そば、日本橋人形町1-5-10 日本橋芸者新道ビル 302、人形町駅から徒歩1分、月17:00〜23:00、火〜日・祝12:00〜14:30、17:30〜23:00、不定休、予約のみ、当日のアレルギー対応は難しい、おまかせ30,000円、11月30日までの昼のショートコース12,000円、サービス料10%、7席、英語メニュー、短パンやサンダル、強い香水は控えて、2026年5月20日オープン、茶室のようなカウンター、塩と水とにがりで紡ぐ季節の味。口コミ(2026年8月〜10月): 料理人ふたり (日本料理と天ぷら・そば)、名店の出身、塩とにがりだけの自家製豆腐、イカの塩、Iida から活けで届く川魚の天ぷら、無花果の天ぷら、十割そば、土鍋ご飯の食べ比べ、そばプリン、メニューは毎月変わる、満足という声が多いが、ちぐはぐで高いという声も。',
      confidence: 'medium', sources: [TB, R + 'B533517717/', R + 'B533640180/', R + 'B534598020/', R + 'B535074268/', R + 'B536532807/', R + 'B536926162/', R + 'B537025925/', R + 'B537450879/', R + 'B537927208/', R + 'B538099032/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); chefs explain each dish at the counter (October 2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Allergies are hard to accommodate on the day — tell the shop when booking (Tabelog)'] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-5-10 日本橋芸者新道ビル 302',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; opened May 2026; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB} (35.685215, 139.782025); cross-checked: GSI 東京都中央区日本橋人形町一丁目5番10号 (go) 37m. Same building as Sushi Kaminari (tokyo_sushi_kaminari_ningyocho, address_ja "東京都中央区日本橋人形町1-5-10 日本橋芸者新道ビル 1F"), whose pin is 13 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534598020/', R + 'B535074268/'],
    price_note: 'Prices from Tabelog set menus (tax included, plus 10% service; read November 2026) and August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (lunch or dinner)', '¥30,000', 'Courses', 'ask', 'no', 'Tabelog; plus 10% service.', 'omakase'),
      it('', '', 'Lunch short course, 8 items: two starters, four tempura, soba, dessert', '¥12,000', 'Courses', 'ask', 'no', 'Tabelog online price until 30 November 2026; ¥13,200 per August–September 2026 diners.', 'lunch_short'),
    ] }, {
    cuisine: '7席のカウンターで季節の和食、天ぷら、そばのおまかせ、メニューは毎月変わる (2026年の口コミ)・おまかせ30,000円と別途サービス料10%、昼のショートコース12,000〜13,200円 (食べログ、2026年の口コミ)・塩とにがりだけで作る自家製豆腐、枝豆と胡瓜や砕いた落花生と・刺身は自家製のイカの塩、Tosa の醤油、鱧の出汁の酢で・お椀は冬瓜にかけたシャモの出汁、鱧と天然の舞茸など・目の前のアイランドの揚げ場で揚げる天ぷら: Iida から活けで届くアマゴや鮎、Akashi の穴子、Manganji の唐辛子、椎茸、無花果、銀杏、鱧で巻いた松茸、鴨と松茸・十割そば、冷やしで蓮根とオクラ、またはいくらと・土鍋ご飯の2種の食べ比べ (Hitomebore と Sasanishiki、Yukiwakamaru)、鱧と鴨と松茸の鍋・そばプリン・全国の日本酒を半合から',
    neighborhood: '日本橋人形町1-5-10 日本橋芸者新道ビル 302。人形町駅から徒歩1分、水天宮前駅から徒歩5分。1階は鮨かみなり',
    gf_detail: '予約時に要確認。当日のアレルギー対応は難しいと店は書く (食べログ)。そばは十割 (2026年の口コミ) だが、コースの中心は天ぷらで、醤油のつけだれや出汁の料理もあり、衣の説明はない。',
    vegan_detail: 'ヴィーガンではない: 魚が中心の和食と天ぷらのおまかせで、お椀は出汁 (鱧、鶏、シャモ)。',
    notes: '[天ぷら・人形町、和食、天ぷら、そばの7席のカウンター] 鮨かみなりと同じビルの3階、茶室のような静かなカウンターで、2026年5月にふたりの料理人が開いた。口コミによれば一人が日本料理、もう一人が天ぷらとそばを担当し、どちらも名店の出身 (口コミでは Ogino/Oginoya と Myojaku/Meijaku)。食べログは Naoki Butaya の新しい割烹とうたう。おまかせ (30,000円とサービス料) は毎月変わり、塩とにがりだけの自家製豆腐に始まり、イカの塩を添えた刺身、目の前の揚げ場で揚げる天ぷら (Iida から活けで届く川魚、Akashi の穴子、無花果、松茸)、十割そば、土鍋ご飯の2種の食べ比べ、そばプリンで締める。昼のショートコース (12,000〜13,200円ほど) なら1時間ほどで味わえる。2026年8月〜10月の客は満足した人が多いが、9月の2人連れはちぐはぐで高いと感じた。予約のみ。',
  });
}

save();
