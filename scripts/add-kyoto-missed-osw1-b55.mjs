// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 55.
//   + 和食 まこたろう Washoku Makotaro (dashi-and-fermentation Japanese courses in an alley west of the Takase River)
//   + 月彩 Kassai (Japanese restaurant on Kiyamachi with summer kawadoko over the Kamo)
//   + ペッパー Pepper (Okinawan dining bar on Nishikiyamachi, open to 3:00)
//   + 一品香 Ippin Ko (light, Kyoto-style Chinese in Pontocho)
//   - 肉バル銀次郎 先斗町店: skipped (reason below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26028074 (skipped), 26043554, 26000972,
//   26005274, 26001116.
//   None of the four drafted is in data/kyoto.json by name (まこたろう/Makotaro, 月彩/Kassai, ペッパー/Pepper, 一品香/Ippin
//   Ko) or address (紙屋町364, 天王町144, 紙屋町364 マツヤビル3F, 鍋屋町220-5).
//   Same-name count (same brand or operator only): one shop each in our crawl and in Tabelog's Kyoto name search.
//   まこたろう: an August 2026 reviewer heard it has sister restaurants of other kinds — not named, flagged.
//   Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: ペッパー お通し・お席料350円; 月彩 “Appetizer fee: 800 yen”
//   in the shop's remarks (no Japanese original shown); none listed for the other two.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-55');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26028074', '肉バル銀次郎 先斗町店: no reviews in 2025–26 — the latest Tabelog review is from November 2019');

// ================================================================ 和食 まこたろう
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043554/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_washoku_makotaro', name: '和食 まこたろう (Washoku Makotaro)', category: 'OMNI',
    lat: 35.004967, lng: 135.77029, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese courses seasoned with soy-sauce koji, salt koji and miso, plus tempura and spring rolls; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every course opens with a kombu-and-bonito dashi, and the dishes are fish and Wagyu (2026 reviews).',
    hours_raw: '17:00–23:00 (L.O. food 22:00, drinks 22:30); closed Wednesday (Tabelog). Reservations for courses only (Tabelog). Cards including UnionPay, IC cards, e-money and QR payments (Tabelog). 28 seats: 8 at a single-slab counter and 20 at tables; private rooms (Tabelog; January and June 2026). No sign — a small nameplate by the door, in an alley west of the Takase River, 2 min from Hankyu Kawaramachi (Tabelog; January 2026). Opened 23 October 2025 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Alley west of the Takase River, north of Shijo — 2 min from Hankyu Kawaramachi',
    cuisine: 'Creative Japanese courses built on charcoal grilling, dashi and fermentation, with sake and wine pairings by a sommelier (Tabelog; 2026) · the course opens with a first dashi of Hokkaido kombu and Yaizu or Shizuoka bonito (2026) · monthly courses from about ¥8,000–8,800 (January and April 2026): hassun with sesame miso and salt-koji shrimp, yuba, sakura-shrimp and bamboo-shoot spring rolls, Wagyu, kinmedai with fava-bean sauce, charcoal young corn, ayu, hamo, mackerel namero (2026) · clay-pot rice of Sado Koshihikari, leftovers made into onigiri to take home (April–October 2026) · rare sake in small lots (Tabelog)',
    website: null, gmaps: gm('和食 まこたろう 紙屋町'), menu_url: null,
    notes: '[Japanese courses · alley off the Takase River, dashi and fermentation] A sign-less restaurant down a quiet alley near Hankyu Kawaramachi, opened in October 2025: a young chef’s monthly courses built on a golden first dashi and koji and miso seasonings, served at a handsome single-slab counter, with sake pairings and clay-pot rice to finish. Courses only; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Sommelier (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes healthy Japanese courses that cherish Kyoto tradition, rare sake in limited quantities and pairings by a sommelier. A June 2026 reviewer mentions a young chef at the counter; an August 2026 reviewer heard the restaurant has sister shops of other kinds.',
      philosophy: 'Origin, fermentation and freshness (January 2026 review).', specialty: 'First dashi; clay-pot rice.',
      anecdotes: [
        { text: 'A July 2026 guest during the Gion Matsuri had the counter alone on a stormy night and took leftover rice home as onigiri.', source: R + 'B531377931/' },
        { text: 'An August 2026 diner found it while looking for a wife’s birthday dinner.', source: R + 'B533095614/' },
      ],
      japanese_sources_summary: '食べログ: 和食 まこたろう、日本料理・海鮮・天ぷら、中京区紙屋町364、阪急河原町駅から徒歩2分、17:00〜23:00 (L.O.料理22:00、ドリンク22:30)、水曜定休、予約はコースのみ、カード・電子マネー・QR決済可、28席 (カウンター8、テーブル20)、個室あり、2025年10月23日オープン、炭火と出汁の創作和食、ソムリエの日本酒とワインのペアリング。口コミ (2026年、英語): 看板のない店、一枚板のカウンター、北海道の昆布と焼津や静岡の鰹の一番出汁、醤油麹・塩麹・胡麻味噌・ねぎ味噌、8,000〜8,800円ほどのコース、八寸、湯葉、桜えびと筍の春巻き、和牛、金目鯛の空豆ソース、ヤングコーンの炭火焼き、鮎、鱧、鯖のなめろう、佐渡のコシヒカリの土鍋ご飯、残りはおにぎりに、若い料理人、姉妹店があるとのこと。',
      confidence: 'medium', sources: [TB, R + 'B521083649/', R + 'B521666335/', R + 'B521764981/', R + 'B523609596/', R + 'B526425417/', R + 'B530724044/', R + 'B531377931/', R + 'B531738512/', R + 'B533095614/', R + 'B534130082/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses only; no sign outside; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区紙屋町364',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005017, 135.77029), offset about 5.5 m south to (35.004967, 135.77029) because ペッパー (kyoto_pepper_okinawa, also 紙屋町364) sits within 2 m; cross-checked: GSI 京都府京都市中京区紙屋町364番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521083649/', R + 'B526425417/'],
    price_note: 'Course prices from January and April 2026 reviews; the menu changes monthly.', last_checked: TODAY, items: [
      it('', '', 'Monthly Japanese course', '¥8,000–8,800', 'Courses', 'ask', 'no', 'January and April 2026.', 'course'),
      it('', '', 'Sake pairing', '', 'Drinks', '', '', '2026.', 'pairing'),
    ] }, {
    cuisine: '炭火と出汁と発酵を軸にした創作和食のコースに、ソムリエの日本酒やワインのペアリング (食べログ、2026年)・コースは北海道の昆布と焼津や静岡の鰹の一番出汁から (2026年)・毎月替わるコースは8,000〜8,800円ほど (2026年1月・4月): 胡麻味噌や塩麹の海老の八寸、湯葉、桜えびと筍の春巻き、和牛、金目鯛の空豆ソース、ヤングコーンの炭火焼き、鮎、鱧、鯖のなめろう (2026年)・佐渡のコシヒカリの土鍋ご飯、残りはおにぎりにして持ち帰り (2026年4〜10月)・少量入荷の珍しい日本酒 (食べログ)',
    neighborhood: '四条の北、高瀬川の西の路地。阪急河原町から徒歩2分',
    gf_detail: '要確認。醤油麹、塩麹、味噌で味をつける和食のコース、天ぷらや春巻きも。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。コースは昆布と鰹の出汁から始まり、料理は魚と和牛 (2026年の口コミ)。',
    notes: '[和食のコース・高瀬川沿いの路地、出汁と発酵] 阪急河原町近くの静かな路地にある、2025年10月開店の看板のない店。若い料理人の毎月替わるコースは金色の一番出汁と麹や味噌の味付けが軸で、立派な一枚板のカウンターで日本酒のペアリングとともに、締めは土鍋ご飯。コースのみ、水曜定休。',
  });
}

// ================================================================ 月彩
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000972/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kyoto-kassai.com/';
  const WD = day(['17:00', '24:00']); const WE = day(['11:30', '14:00'], ['17:00', '24:00']);
  put({
    id: 'kyoto_kassai_kiyamachi', name: '月彩 (Kassai)', category: 'OMNI',
    lat: 35.001792, lng: 135.769907, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese courses — sashimi, hamo shabu-shabu, grilled fish, soups and fried dishes, seasonal rice; no gluten information. A March 2025 guest’s food preferences were met with substitutes when stated at booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-led Japanese courses with soups, hamo and house-marinated ikura (Tabelog; reviews).',
    hours_raw: 'Monday–Friday 17:00–24:00; Saturday and Sunday 11:30–14:00 and 17:00–24:00 (Tabelog). Appetizer fee ¥800 (Tabelog remarks). Cards and e-money (Tabelog). 46 seats: a counter downstairs and private rooms upstairs for 8 or 20–30; a riverside kawadoko deck in season (Tabelog; 2024–2026). Smoking allowed (Tabelog; September 2026). About 5 min from Hankyu Kawaramachi, on Kiyamachi (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi south of Shijo — riverside, 5 min from Hankyu Kawaramachi',
    cuisine: 'Creative Japanese food in a modern machiya, with summer kawadoko seating over the Kamo River (Tabelog; 2024–2026) · fish from the Seto Inland Sea and Kamijo satoimo from Fukui; the owner’s own soy-marinated ikura from Hokkaido salmon (Tabelog) · hamo full course in summer — hamo shabu-shabu and grilled hamo, the chef boning it at the counter (July–September 2026) · courses with sashimi, soups, grilled and fried dishes (November 2025) · saikyo-miso grilled masu salmon; monthly rice such as corn or sea bream (March–May 2025) · a strong sake list (2026)',
    website: SITE, gmaps: gm('月彩 木屋町'), menu_url: SITE,
    notes: '[Japanese · Kiyamachi on the Kamo, summer kawadoko] A Japanese restaurant in a modern machiya on Kiyamachi with a riverside deck in season: courses of Seto Inland Sea fish, the owner’s own marinated ikura, and in summer a full hamo course boned at the counter, with a good sake list. Counter downstairs, private rooms upstairs; ¥800 appetizer fee; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Chef (unnamed)'], origin: null,
      background: 'Tabelog’s shop text says the owner personally takes the roe from Hokkaido salmon for the house-marinated ikura, and that the kitchen chooses Seto Inland Sea fish and Kamijo satoimo from Fukui. Reviewers watched the chef bone hamo at the counter (July and September 2026).',
      philosophy: 'Bringing out the umami of seasonal ingredients (Tabelog; May 2024 review).', specialty: 'Hamo full course; house-marinated ikura.',
      anecdotes: [
        { text: 'A July 2026 traveller chose the counter over the hot riverside deck and was made welcome among the locals.', source: R + 'B532293597/' },
        { text: 'A March 2025 guest mentioned food dislikes when booking and found substitutes ready.', source: R + 'B502606809/' },
      ],
      japanese_sources_summary: '食べログ: 月彩、日本料理、下京区天王町144、阪急河原町駅から徒歩5分、月〜金 17:00〜24:00、土日 11:30〜14:00・17:00〜24:00、お通し代800円 (備考)、カード・電子マネー可、46席、個室 (8名、20〜30名)、喫煙可、京町家の和モダンな店、瀬戸内の魚と福井の Kamijo の里芋、店主が北海道の鮭から自らほぐす自家製のいくら醤油漬け。口コミ (2024〜2026年、英語): 夏の川床、鱧のフルコース (鱧しゃぶ、焼き鱧、カウンターで骨切り)、刺身、西京焼き、月替わりのご飯、日本酒が豊富、予約時に苦手なものを伝えると替えてくれる。',
      confidence: 'medium', sources: [SITE, TB, R + 'B485352213/', R + 'B502606809/', R + 'B510632744/', R + 'B519069981/', R + 'B519157669/', R + 'B531042357/', R + 'B531924456/', R + 'B532293597/', R + 'B535097249/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Kawadoko in season; ¥800 appetizer fee; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区天王町144',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.001792, 135.769907); cross-checked: GSI 京都府京都市下京区天王町144番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No course prices read; reviewers spend ¥10,000–19,999 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Hamo full course (summer)', '', 'Courses', 'ask', 'no', 'July–September 2026.', 'hamo_course'),
      it('', '', 'House soy-marinated ikura', '', 'À la carte', 'ask', 'no', 'Tabelog.', 'ikura'),
      it('', '', 'Appetizer fee', '¥800', 'Charges', '', '', 'Tabelog remarks.', 'otoshi'),
    ] }, {
    cuisine: '和モダンな京町家の創作和食、夏は鴨川の川床 (食べログ、2024〜2026年)・瀬戸内の魚、福井の Kamijo の里芋、店主が北海道の鮭からほぐす自家製のいくら醤油漬け (食べログ)・夏の鱧のフルコース: 鱧しゃぶ、焼き鱧、カウンターで料理人が骨切り (2026年7〜9月)・刺身、椀物、焼き物、揚げ物のコース (2025年11月)・鱒の西京焼き、とうもろこしや鯛の月替わりのご飯 (2025年3〜5月)・日本酒が豊富 (2026年)',
    neighborhood: '四条の南の木屋町、川沿い。阪急河原町から徒歩5分',
    gf_detail: '要確認。刺身、鱧しゃぶ、焼き魚、椀物、揚げ物、季節のご飯の和食のコース。グルテンの情報はない。2025年3月の客は予約時に好みを伝えて替わりの料理を用意してもらった。',
    vegan_detail: 'ヴィーガンではない。魚中心の和食のコースで、椀物、鱧、自家製のいくら (食べログ、口コミ)。',
    notes: '[和食・鴨川沿いの木屋町、夏の川床] 木屋町の和モダンな京町家の日本料理店で、季節には川床も。瀬戸内の魚、店主手づくりのいくら醤油漬け、夏はカウンターで骨切りする鱧のフルコース、日本酒も豊富。1階はカウンター、2階は個室。お通し代800円、喫煙可。',
  });
}

// ================================================================ ペッパー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005274/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '03:00']);
  put({
    id: 'kyoto_pepper_okinawa', name: 'ペッパー (Pepper)', category: 'OMNI',
    lat: 35.005024, lng: 135.770306, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Okinawan dishes — champuru, rafute, umibudo, mozuku, jimami tofu, Okinawa soba, taco rice — plus risotto and pasta; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Umibudo, mozuku in vinegar, island shallots and jimami tofu appear, but sauces and dashi are not described, and most champuru include pork or egg (2024–2026 reviews).',
    hours_raw: '18:00–3:00 (L.O. 2:00); days off not fixed (Tabelog). Reservations accepted; for 4 or more, an 8-dish course with 120 minutes of free-flow drinks for ¥5,000, booked a day ahead (Tabelog). Otoshi and seat charge ¥350 (Tabelog, original お通し・お席料350円). Cards (Visa, Master, AMEX) (Tabelog). 24 seats: 12 at the counter, 12 at tables (Tabelog). Smoking allowed (December 2024). Third floor of the Matsuya Building, stairs only (March 2026). About 3 min from Hankyu Kawaramachi (Tabelog). Opened 13 April 2000 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishikiyamachi north of Shijo — 3 min from Hankyu Kawaramachi',
    cuisine: 'An Okinawan dining bar since 2000: Orion draft beer and a long awamori list (Tabelog; 2025–2026) · fresh umibudo from Miyako Island kept in a tank, ¥900 (August 2025) · goya champuru ¥850 (August 2025); somen champuru; rafute; pork ears with ponzu (2024) · mozuku vinegar and mozuku tempura; jimami tofu; shima-dofu with tororo; Okinawa soba; taco rice (2024–2026) · purple-sweet-potato and cream-cheese potato salad (2024–2026) · Ishigaki beef and island vegetables from contracted farms (Tabelog) · risottos and pastas from a chef with Italian experience (July 2025)',
    website: null, gmaps: gm('ペッパー 沖縄料理 木屋町'), menu_url: null,
    notes: '[Okinawan · Nishikiyamachi 3F, open to 3:00] A long-running Okinawan dining bar up three flights of stairs off Kiyamachi: fresh Miyako umibudo from a tank, goya and somen champuru, rafute, mozuku and Okinawa soba with Orion draft and awamori — and, from a chef with Italian training, risotto and pasta. ¥350 seat charge; smoking allowed; open until 3:00.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Chef (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes an Okinawan dining bar with Orion beer, umibudo shipped from Miyako Island and kept in a temperature-controlled tank, and Ishigaki beef. A December 2024 reviewer was served by the couple who run it; a July 2025 reviewer says the chef has worked as an Italian chef.',
      philosophy: null, specialty: 'Fresh umibudo; champuru.',
      anecdotes: [
        { text: 'A March 2026 regular asked for a pork-and-egg dish not on the menu, and the kitchen made it.', source: R + 'B525179883/' },
        { text: 'An August 2026 visitor found some ingredients short after a typhoon but filled up on jimami tofu, mozuku and Okinawa soba.', source: R + 'B533801746/' },
      ],
      japanese_sources_summary: '食べログ: ペッパー、沖縄料理・居酒屋・おでん、中京区西木屋町四条上る紙屋町364 マツヤビル3F、阪急河原町駅から徒歩3分、18:00〜翌3:00 (L.O.2:00)、不定休、予約可、お通し・お席料350円、カード可、24席 (カウンター12、テーブル12)、2000年4月13日オープン、オリオンの生ビール、宮古島直送の生海ぶどうを水槽で、石垣牛、契約農家の島野菜、8品と120分飲み放題のコース5,000円 (4名以上、前日まで)。口コミ (2024〜2026年、英語): 海ぶどう900円、ゴーヤチャンプルー850円、そうめんチャンプルー、ラフテー、ミミガーのポン酢、もずく酢ともずくの天ぷら、ジーマーミ豆腐、島豆腐とろろ、沖縄そば、タコライス、紅芋とクリームチーズのポテサラ、泡盛、夫婦で営む (2024年12月)、料理人はイタリアンの経験あり、喫煙可、階段のみ。',
      confidence: 'medium', sources: [TB, R + 'B481847314/', R + 'B491634903/', R + 'B496582072/', R + 'B496737825/', R + 'B507860469/', R + 'B510905355/', R + 'B511676468/', R + 'B518039342/', R + 'B525179883/', R + 'B533801746/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Stairs only to the 3rd floor; ¥350 seat charge; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区西木屋町四条上る紙屋町364 マツヤビル３Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.005024, 135.770306); cross-checked: GSI 京都府京都市中京区紙屋町364番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511676468/', TB],
    price_note: 'Prices from an August 2025 review and Tabelog.', last_checked: TODAY, items: [
      it('海ぶどう', 'umibudō', 'Fresh sea grapes from Miyako Island', '¥900', 'Okinawan', 'ask', 'ask', 'August 2025.', 'umibudo'),
      it('ゴーヤチャンプルー', 'gōya chanpurū', 'Goya champuru', '¥850', 'Okinawan', 'ask', 'no', 'August 2025.', 'goya'),
      it('', '', '8-dish course with 120-min free-flow drinks (4+)', '¥5,000', 'Courses', 'ask', 'no', 'Tabelog; book a day ahead.', 'course'),
      it('', '', 'Otoshi and seat charge', '¥350', 'Charges', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '2000年からの沖縄のダイニングバー。オリオンの生ビールと豊富な泡盛 (食べログ、2025〜2026年)・水槽で生かす宮古島の生海ぶどう900円 (2025年8月)・ゴーヤチャンプルー850円 (2025年8月)。そうめんチャンプルー、ラフテー、ミミガーのポン酢 (2024年)・もずく酢ともずくの天ぷら、ジーマーミ豆腐、島豆腐とろろ、沖縄そば、タコライス (2024〜2026年)・紅芋とクリームチーズのポテトサラダ (2024〜2026年)・石垣牛と契約農家の島野菜 (食べログ)・イタリアンの経験がある料理人のリゾットやパスタ (2025年7月)',
    neighborhood: '四条の北の西木屋町。阪急河原町から徒歩3分',
    gf_detail: '要確認。チャンプルー、ラフテー、海ぶどう、もずく、ジーマーミ豆腐、沖縄そば、タコライスの沖縄料理と、リゾットやパスタ。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。海ぶどう、もずく酢、島らっきょう、ジーマーミ豆腐もあるが、たれや出汁は書かれておらず、チャンプルーの多くは豚か卵入り (2024〜2026年の口コミ)。',
    notes: '[沖縄料理・西木屋町の3階、深夜3時まで] 木屋町から入ったビルの3階、階段で上がる老舗の沖縄ダイニングバー。水槽の宮古島の生海ぶどう、ゴーヤやそうめんのチャンプルー、ラフテー、もずく、沖縄そばに、オリオンの生と泡盛。イタリアン出身の料理人のリゾットやパスタも。席料350円、喫煙可、深夜3時まで。',
  });
}

// ================================================================ 一品香
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001116/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyotopontoinppinkou.com/';
  const H = day(['12:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_ippin_ko_pontocho', name: '一品香 (Ippin Ko)', category: 'OMNI',
    lat: 35.004411, lng: 135.771063, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto-style Chinese small plates — mapo tofu, shrimp chili, dim sum, ankake noodles, fried rice; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Stir-fried greens with Kyoto yuba and local Chinese vegetables are on the menu (Tabelog; April 2024), but sauces and stocks are not described.',
    hours_raw: 'Monday and Wednesday–Sunday 12:00–14:00 (L.O. 13:10) and 17:00–22:00 (L.O. 21:10; last entry about 20:50); closed Tuesday; lunch may be closed about four days a month (Tabelog). Reservations accepted (Tabelog). Cards (Visa, Master) (Tabelog). 32 seats, 16 on each floor; parties up to 20 upstairs (Tabelog; January 2026). On Pontocho, about 3 min from Hankyu Kawaramachi; moved here from an alley off Pontocho (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho north of Shijo — 3 min from Hankyu Kawaramachi',
    cuisine: 'Light, Kyoto-style Chinese small plates for two or more, with Kyoto yuba, seasonal and locally grown Chinese vegetables (Tabelog) · lunch A set: three small dishes and rice with a main — ankake yakisoba or ramen, tantan noodles, shrimp chili, mapo tofu, greens with Kyoto yuba — ¥1,100 (April 2024); cold-cut appetizers of pork, chicken and beef with garlic sauce (October 2025) · dim sum course of 10 dishes ¥2,980 (June 2025) · party course with free-flow drinks including Shaoxing wine ¥5,000 (January 2026) · blue crab with Kujo onion in black-bean sauce in season; shrimp mayonnaise; almond tofu (2023–2024)',
    website: SITE, gmaps: gm('一品香 先斗町'), menu_url: SITE,
    notes: '[Chinese · Pontocho, light Kyoto-style small plates] A two-floor Chinese restaurant on Pontocho with gentle, Kyoto-style cooking at fair prices: a ¥1,100 lunch set of three small dishes plus mapo tofu or shrimp chili, a ¥2,980 dim sum course, greens with Kyoto yuba, and party courses with Shaoxing wine upstairs. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes light flavours typical of Kyoto cooking, classic dishes made with Kyoto yuba and local vegetables, and some creative twists; the restaurant moved to its present site from an alley off Pontocho.',
      philosophy: null, specialty: 'Kyoto-style Chinese small plates.',
      anecdotes: [
        { text: 'A June 2025 group of four expected Pontocho prices and were surprised by a ¥2,980 ten-dish dim sum course.', source: R + 'B508771203/' },
        { text: 'An October 2025 lunch guest could not stop eating the three cold cuts with garlic sauce before the main arrived.', source: R + 'B515901619/' },
      ],
      japanese_sources_summary: '食べログ: 一品香、中華料理、中京区先斗町通四条上ル鍋屋町220-5、阪急河原町駅から徒歩3分、昼12:00〜14:00 (L.O.13:10)、夜17:00〜22:00 (L.O.21:10)、火曜定休、昼は月に4日ほど休みあり、予約可、カード可、32席 (1階16、2階16)、先斗町の路地から移転、京都らしいあっさりした味、京湯葉と季節の野菜や京都産の中国野菜。口コミ (2023〜2026年、英語): 小皿3品とご飯に主菜を選ぶAランチ1,100円、麻婆豆腐、エビチリ、あんかけ焼きそば、点心コース10品2,980円、紹興酒も飲み放題の宴会コース5,000円、豚・鶏・牛の前菜のにんにくソース、渡り蟹と九条ねぎの豆豉炒め、エビマヨ、杏仁豆腐。',
      confidence: 'medium', sources: [SITE, TB, R + 'B473825132/', R + 'B482730266/', R + 'B486336148/', R + 'B491037393/', R + 'B508771203/', R + 'B515901619/', R + 'B521509455/', R + 'B536078579/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual Chinese in Pontocho; book for groups upstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通四条上ル鍋屋町220-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB} (35.004411, 135.771063); cross-checked: GSI 京都府京都市中京区鍋屋町220番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B482730266/', R + 'B508771203/', R + 'B521509455/'],
    price_note: 'Prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch A set (three small dishes, rice, a main)', '¥1,100', 'Lunch', 'ask', 'ask', 'April 2024.', 'lunch_a'),
      it('', '', 'Dim sum course (10 dishes)', '¥2,980', 'Courses', 'no', 'no', 'June 2025.', 'dimsum'),
      it('', '', 'Party course with free-flow drinks', '¥5,000', 'Courses', 'ask', 'no', 'January 2026.', 'party'),
    ] }, {
    cuisine: '京湯葉や季節の野菜、京都産の中国野菜を使う、ふたりからでも楽しめるあっさりした京都らしい中華の小皿 (食べログ)・Aランチ: 小皿3品とご飯に、あんかけ焼きそばやラーメン、担々麺、エビチリ、麻婆豆腐、京湯葉と青菜の炒めから主菜を選んで1,100円 (2024年4月)。豚・鶏・牛の前菜のにんにくソース (2025年10月)・点心コース10品2,980円 (2025年6月)・紹興酒も入る飲み放題の宴会コース5,000円 (2026年1月)・旬の渡り蟹と九条ねぎの豆豉炒め、エビマヨ、杏仁豆腐 (2023〜2024年)',
    neighborhood: '四条の北の先斗町。阪急河原町から徒歩3分',
    gf_detail: '要確認。麻婆豆腐、エビチリ、点心、あんかけ麺、炒飯など京都らしい中華の小皿。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。京湯葉と青菜の炒めや京都産の中国野菜もある (食べログ、2024年4月) が、たれやスープについては書かれていない。',
    notes: '[中華・先斗町、京都らしいあっさりした小皿] 先斗町にある2階建ての中華料理店。手頃な値段の京都らしいやさしい味で、小皿3品に麻婆豆腐やエビチリの1,100円のランチ、2,980円の点心コース、京湯葉の青菜炒め、2階では紹興酒付きの宴会コースも。火曜定休。',
  });
}

save();
