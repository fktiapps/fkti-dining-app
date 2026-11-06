// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 16.
//   + ORALE! (Mexican kitchen of handmade corn tortillas off Sakaimachi near Shijo; since 2014)
//   + ワインと串揚げ こぱん 先斗町店 Wine to Kushikatsu Kopan (omakase kushiage and wine at Kiyamachi-Sanjo; since 2004)
//   + 魚河岸 宮武 Uogashi Miyatake (open-kitchen fish izakaya by the Central Wholesale Market in Shimabara; since 2012)
//   + 丸太町十二段家 Marutamachi Junidan Ya (ochazuke house since the Taisho era, by the Imperial Palace)
//   Picked on 2026-11-05: the first two with id mod 6 = 2 from `queue.mjs kyoto-missed next core 200` (26024924, 26002646);
//   the first two from `next notable 200` (26021276, 26000438). None is in data/kyoto.json: grep by name (ORALE/オラレ,
//   こぱん/Kopan, 宮武/Miyatake, 十二段家/Junidanya) and address (八百屋町555, 材木町180, 西新屋敷下之町6, 常真横町184) found none.
//   Same-name count (Greg's Samboa ruling): no second shop found for ORALE!, 魚河岸 宮武 or 丸太町十二段家. ワインと串揚げ こぱん has
//   two shops (先斗町店 and 那覇店) on the operator's site; the operator, Safari group of Osaka, runs about 15 shops in 13
//   concepts in Japan and Seattle, none with five or more same-name shops (its largest brand lists four) — drafted as a
//   small brand of a local group and flagged.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ORALE!
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26024924/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['17:00', '20:30']);
  put({
    id: 'kyoto_orale_mexican_shijo', name: 'ORALE!', category: 'OMNI',
    lat: 35.004209, lng: 135.763334, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tacos come on handmade corn tortillas, but the menu also has burritos and quesadillas, and sauces and soups are not described for gluten (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and a vegetable focus; reviewed fillings are pork, chicken, beef, shrimp, and bean with cheese (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Lunch 12:00–14:00 (L.O. 13:30), dinner 17:00–20:30 (L.O. 19:50); closed Monday; lunch may end early when the tortillas run out; temporary closures posted on Google and Instagram (Tabelog). Reservations accepted; busy at weekend lunch (Tabelog; March 2026). No service charge (Tabelog, original text). Cards, e-money and QR accepted (Tabelog). 16 seats: 6 at the counter, 10 at tables, plus a terrace (Tabelog). Non-smoking (Tabelog). Children welcome; takeaway and delivery via Demae-can, Uber Eats and Foodpanda (Tabelog). Near Nishiki, north from Shijo Stn exit 14 up Sakaimachi (Tabelog; April 2026). Opened 5 November 2014 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi north of Shijo, near Nishiki — 291 m from Karasuma Stn',
    cuisine: 'Mexican kitchen of handmade corn tortillas grilled one by one, house salsas and seasonal dishes; rare tequilas, Mexican wine and beer (Tabelog shop text) · Tres Tacos lunch ¥2,700 — three tacos with soup and a small salad (July 2025) · lunch sets around ¥2,000 with soup (November 2025) · suadero and carnitas tacos (August 2025), pork, chicken, and shrimp-avocado tacos (March–April 2026), taco set with mini taco rice (March 2026) · enchiladas, mole, quesadillas (bean and cheese), burritos, homemade tortilla chips with salsa and guacamole (2025–2026 reviews) · cilantro goes on the tacos (March 2026)',
    website: null, gmaps: gm('ORALE! 京都 堺町 メキシコ料理'), menu_url: null,
    notes: '[Mexican · Shijo-Sakaimachi, handmade corn tortillas] A small, cheerfully decorated Mexican restaurant up Sakaimachi from Shijo, around since 2014, where the corn tortillas are made and grilled by hand. Lunch sets come with a soup — the Tres Tacos with three heavily filled tacos was ¥2,700 in 2025 — and there are burritos, quesadillas, enchiladas and mole, plus tequila and Mexican beer. Portions are large; leftovers can be packed. Lunch can end early when the tortillas run out. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Tabelog gives the opening as 5 November 2014. An April 2026 reviewer admired the female owner’s creative ideas and presentation.',
      philosophy: null, specialty: 'Tacos on handmade corn tortillas.',
      anecdotes: [
        { text: 'A January 2026 diner, there only because another restaurant was closed, had a first burrito, could not finish it, and had the rest packed to take away.', source: R + 'B522384130/' },
        { text: 'A July 2025 diner found each taco so heavily filled that it would make three elsewhere.', source: R + 'B510574259/' },
      ],
      japanese_sources_summary: '食べログ: ORALE!、メキシコ料理、中京区八百屋町555 澤栄1F、四条駅14番出口から堺町通を北へ、烏丸駅から291m、火〜日 昼12:00〜14:00 (L.O.13:30)、夜17:00〜20:30 (L.O.19:50)、月曜休み、昼はトルティーヤがなくなり次第終了、予約可、サービス料なし、カード・電子マネー・QR可、16席 (カウンター6、テーブル10、テラス)、禁煙、子ども可、テイクアウト・デリバリー、2014年11月5日オープン。店の紹介: 一枚ずつ焼く手作りトルティーヤ、オリジナルのサルサ、季節のメキシコ料理、テキーラ、メキシコのワインとビール。口コミ (2025〜2026年、英語): タコス3種のランチ2,700円、スープ付き、スアデロ、カルニタス、ブリトー、ケサディーヤ、エンチラーダ、モレ、パクチー入り。',
      confidence: 'medium', sources: [TB, R + 'B507317372/', R + 'B507850854/', R + 'B510574259/', R + 'B510582008/', R + 'B518800629/', R + 'B522384130/', R + 'B526274829/', R + 'B527207155/', R + 'B527235516/', R + 'B527718560/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book for weekend lunch; large portions, takeaway of leftovers; cilantro on the tacos.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区八百屋町555 澤栄 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.004209, 135.763334); cross-checked: GSI 京都府京都市中京区八百屋町555番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510574259/', R + 'B518800629/'],
    price_note: 'No menu read; prices from 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tres Tacos lunch (three tacos, soup, small salad)', '¥2,700', 'Lunch', 'ask', 'no', 'July 2025.', 'tres_tacos_lunch'),
      it('', '', 'Suadero tacos, two', '¥3,000', 'Tacos', 'ask', 'no', 'August 2025.', 'suadero_tacos'),
    ] }, {
    cuisine: '一枚ずつ焼く手作りのコーントルティーヤ、自家製サルサ、季節のメキシコ料理。珍しいテキーラ、メキシコのワインとビール (食べログの店紹介)・タコス3種のランチ2,700円、スープと小さなサラダ付き (2025年7月)・スープ付きのランチは約2,000円 (2025年11月)・スアデロとカルニタスのタコス (2025年8月)、豚、鶏、えびアボカドのタコス (2026年3〜4月)、ミニタコライス付きのタコスのセット (2026年3月)・エンチラーダ、モレ、ケサディーヤ (豆とチーズ)、ブリトー、自家製トルティーヤチップスとサルサ、ワカモレ (2025〜2026年の口コミ)・タコスにはパクチー (2026年3月)',
    neighborhood: '四条の北の堺町通、錦市場の近く。烏丸駅から291m',
    gf_detail: '要確認。タコスは手作りのコーントルティーヤだが、ブリトーやケサディーヤもあり、ソースやスープのグルテンの説明はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアン対応と野菜へのこだわりの記載。口コミの具は豚、鶏、牛、えび、豆とチーズ (食べログ、2025〜2026年の口コミ)。',
    notes: '[メキシコ料理・四条堺町、手作りのコーントルティーヤ] 四条から堺町通を上がった、にぎやかな飾りの小さなメキシコ料理店。2014年から、コーントルティーヤを手で作り一枚ずつ焼く。ランチはスープ付きで、具だくさんのタコス3種が2025年に2,700円。ブリトー、ケサディーヤ、エンチラーダ、モレ、テキーラやメキシコのビールも。量が多く、残りは持ち帰れる。昼はトルティーヤがなくなると終了。月曜休み。',
  });
}

// ================================================================ ワインと串揚げ こぱん 先斗町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002646/'; const R = TB + 'dtlrvwlst/';
  const GROUP = 'https://www.safarigroup.info/introduction';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_kopan_kushiage_pontocho', name: 'ワインと串揚げ こぱん 先斗町店 (Wine to Kushikatsu Kopan, Pontocho)', category: 'OMNI',
    lat: 35.007804, lng: 135.770998, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a kushiage restaurant — every skewer is breaded and deep-fried (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: skewers include beef fillet, braised pork, salmon and duck, fried in batter (2026 reviews).',
    hours_raw: '17:00–22:00, last entry 21:00, Monday and Thursday–Sunday; closed Tuesday and Wednesday (Tabelog). Reservations accepted for the omakase course; same-day cancellations by phone (Tabelog). Seat charge ¥550 including a vegetable platter and dessert (Tabelog). Cards: VISA, Master, JCB, AMEX; e-money; no QR (Tabelog). 20 seats: 10 at the counter and tables (Tabelog). Non-smoking (Tabelog). Children welcome (Tabelog). Kiyamachi south of Sanjo, 3 min from Keihan Sanjo exit 6 (Tabelog). Opened 30 July 2004 (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi south of Sanjo — 3 min from Keihan Sanjo Stn',
    cuisine: 'Creative kushiage fried one skewer at a time with wine chosen by a sommelier, using Kyoto ingredients (Safari group site; Tabelog) · omakase course of 12 skewers ¥4,620 or 16 skewers ¥6,160, served until you say stop; the special beef fillet skewer +¥638 (Tabelog) · skewers from about ¥500 à la carte (August 2026) · the menu changes monthly: yuba, braised pork, truffle-topped, salmon, duck skewers (2026 reviews) · vegetable platter and dessert with the ¥550 seat charge (Tabelog) · wine by the bottle at fair prices, beer (2026 reviews)',
    website: GROUP, gmaps: gm('ワインと串揚げ こぱん 先斗町店'), menu_url: null,
    notes: '[Kushiage · Kiyamachi-Sanjo, omakase skewers with wine] A stylish counter just south of Sanjo where kushiage are fried one at a time and brought hot until you say stop — 12 skewers for ¥4,620 or 16 for ¥6,160, with a beef fillet skewer as an extra. The skewers change monthly (yuba, braised pork, truffle) and pair with a fair-priced wine list, to jazz in the background. ¥550 seat charge brings a vegetable platter and dessert. Closed Tuesday and Wednesday.',
    chef_bio: { chef_name: null, roles: ['Run by the Safari group (Osaka); a woman reviewers took to be the owner runs the floor'], origin: null,
      background: 'Tabelog gives the opening as 30 July 2004. The Safari group site lists ワインと串揚げ こぱん with shops in Naha and Pontocho, among the group’s 13 concepts in Kansai and Seattle.',
      philosophy: null, specialty: 'Omakase kushiage; beef fillet skewer.',
      anecdotes: [
        { text: 'An April 2026 regular asked to skip a few skewers so as to reach the end of the course, and was given braised pork and others not tried before.', source: R + 'B505233206/' },
        { text: 'A March 2026 diner named a cucumber allergy, yet was served vegetable sticks with cucumber.', source: R + 'B525256862/' },
        { text: 'A May 2026 diner found the skewers arrived faster than a drinker could keep up with, and the plate overflowed.', source: R + 'B529238394/' },
      ],
      japanese_sources_summary: '食べログ: ワインと串揚げ こぱん 先斗町店、串揚げ・居酒屋・ワインバー、中京区木屋町三条下ル材木町180-1 1F、京阪三条駅6番出口から徒歩3分、月・木〜日 17:00〜22:00 (最終入店21:00)、火・水休み、予約可、おまかせ12本4,620円、16本6,160円、特選牛フィレ串は1本638円追加、席料550円 (野菜盛り合わせ・デザート付き)、カード・電子マネー可、20席、禁煙、子ども可、2004年7月30日オープン。サファリグループのサイト: 創作串あげ専門店、京の食材、ソムリエが選ぶワイン、那覇店と先斗町店。口コミ (2026年、英語): 毎月替わる串、湯葉、豚の角煮、トリュフ、ジャズ、ワインが手ごろ。',
      confidence: 'medium', sources: [TB, GROUP, R + 'B505233206/', R + 'B521142685/', R + 'B523407192/', R + 'B525256862/', R + 'B525562367/', R + 'B529238394/', R + 'B531932072/', R + 'B533479840/', R + 'B534226475/', R + 'B537473419/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥550 seat charge; say when to stop the skewers; state allergies clearly (one slip reported in March 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町三条下ル材木町180-1 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and the Safari group site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007804, 135.770998); cross-checked: GSI 京都府京都市中京区材木町180番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices and seat charge from the Tabelog reservation note (tax included).', last_checked: TODAY, items: [
      it('', '', 'Omakase, 12 skewers', '¥4,620', 'Courses', 'no', 'no', 'Tabelog.', 'omakase_12'),
      it('', '', 'Omakase, 16 skewers', '¥6,160', 'Courses', 'no', 'no', 'Tabelog.', 'omakase_16'),
      it('', '', 'Special beef fillet skewer (add-on)', '¥638', 'Skewers', 'no', 'no', 'Tabelog.', 'beef_fillet_skewer'),
      it('', '', 'Seat charge with vegetable platter and dessert', '¥550', 'Charges', '', '', 'Tabelog.', 'seat_charge'),
    ] }, {
    cuisine: '京の食材を使い一本ずつ揚げる創作串揚げと、ソムリエが選ぶワイン (サファリグループのサイト、食べログ)・おまかせ12本4,620円か16本6,160円、ストップと言うまで出てくる、特選牛フィレ串は1本638円追加 (食べログ)・単品は1本約500円から (2026年8月)・串は毎月替わる。湯葉、豚の角煮、トリュフのせ、サーモン、鴨など (2026年の口コミ)・席料550円で野菜の盛り合わせとデザート (食べログ)・手ごろなボトルワイン、ビール (2026年の口コミ)',
    neighborhood: '三条の南の木屋町。京阪三条駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。串揚げの店で、どの串も衣をつけて揚げる (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。牛フィレ、豚の角煮、サーモン、鴨などの串を衣で揚げる (2026年の口コミ)。',
    notes: '[串揚げ・木屋町三条、ワインとおまかせの串] 三条のすぐ南、おしゃれなカウンターで串揚げを一本ずつ揚げ、ストップと言うまで熱々を出してくれる。12本4,620円か16本6,160円、牛フィレ串は追加で。串は毎月替わり (湯葉、豚の角煮、トリュフ)、手ごろなワインとジャズとともに。席料550円で野菜の盛り合わせとデザート付き。火・水休み。',
  });
}

// ================================================================ 魚河岸 宮武
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26021276/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://uogashi-miyatake.jp/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_uogashi_miyatake', name: '魚河岸 宮武 (Uogashi Miyatake)', category: 'OMNI',
    lat: 34.992978, lng: 135.743052, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fish courses of sashimi, grills, simmered dishes and sushi, including tempura and fried cod, which are not gluten-free (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish courses with dashi soups (2025–2026 reviews).',
    hours_raw: '17:00–23:00 (food L.O. 22:00, drinks 22:30), Monday–Saturday; closed Sunday and holidays; no lunch at present (Tabelog; official site). Reservations by phone 14:00–22:00 (official site); Tabelog: phone bookings for 1–2 guests (seats only), courses booked online for 3 or more. Evenings are course-based (December 2025; September 2026). Cards, IC cards and QR accepted (Tabelog). 34 seats: 10 at the counter, 24 in a sunken-hearth tatami room for 2–24 (Tabelog; official site). Non-smoking; wheelchair access (Tabelog). Junior-high age and up only (Tabelog). In Shimabara next to the Kyoto Central Wholesale Market, 3 min from JR Tambaguchi Stn; no sign outside (official site). Opened 1 October 2012 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shimabara, by the Kyoto Central Wholesale Market — 3 min from JR Tambaguchi Stn',
    cuisine: 'Open-kitchen fish izakaya aiming at “ryotei-class seasonal fish as an izakaya,” with the counter level with the chopping board (official site) · courses ¥6,000 and ¥9,900 (October 2025; July–September 2026) · sashimi of akou, amadai, ojisan and others; buri grilled with shio-koji; scallops with garlic and basil; simmered kinmedai head; cod fry; mozuku soup; omakase sushi and a small dessert (July–August 2026) · autumn: shrimp and persimmon with tofu dressing, grilled fugu, seiko crab, steamed kinmedai with turnip, cod-milt tempura, clam soup (November 2025) · marinated mackerel (September 2026) · mini seafood bowl to finish (December 2025) · a broad sake list',
    website: SITE, gmaps: gm('魚河岸 宮武 島原'), menu_url: null,
    notes: '[Fish izakaya · Shimabara, the market’s back door] An unsigned izakaya in old Shimabara beside Kyoto’s Central Wholesale Market, where the cooks work at a counter level with your plate and the fish comes from a trusted market wholesaler. Evenings are courses — ¥6,000 or ¥9,900 — that change completely between visits: rare sashimi such as akou and ojisan, shio-koji yellowtail, simmered kinmedai head, cod fry, omakase sushi. Lunch has stopped for now. Closed Sunday and holidays; junior-high age and up.',
    chef_bio: { chef_name: null, roles: ['Kitchen team (unnamed)'], origin: null,
      background: 'Per the official site: opened in Shimabara next to the Kyoto Central Wholesale Market as a sign-less open-kitchen izakaya, buying through the market wholesaler 河市水産. Tabelog gives the opening as 1 October 2012. December 2025 and September 2026 reviewers note the popular lunch has stopped and evenings run on courses.',
      philosophy: 'Seasonal fish close to ryotei standard at izakaya prices, served in the spirit of ichigo ichie (official site).', specialty: 'Seasonal fish courses; omakase sushi.',
      anecdotes: [
        { text: 'A September 2026 visitor booked a hotel five or six minutes away purely to eat here, and phoned to book the ¥6,000 course.', source: R + 'B536537507/' },
        { text: 'An August 2026 regular had the same ¥6,000 course twice and found the dishes completely different, opening with sashimi of akou and ojisan.', source: R + 'B531415138/' },
        { text: 'A February 2026 visitor stopped in after training at the Kyoto Railway Museum.', source: R + 'B522245810/' },
      ],
      japanese_sources_summary: '公式サイト: 魚河岸 宮武、京都中央卸売市場に隣接する島原の看板のない大人の隠れ家、オープンキッチンの居酒屋、「料亭クラスに限りなく近い旬の魚料理を居酒屋として」、カウンターとまな板を同じ高さに、17:00〜23:00 (L.O.22:00)、日曜・祝日休み、予約は電話 (14:00〜22:00)、カウンター10席、座敷24席、主要仕入先 河市水産、JR丹波口駅から徒歩3分。食べログ: 下京区西新屋敷下之町6-5 アンクル島原1F、昼の営業は休止中、カード・電子マネー・QR可、禁煙、車椅子可、中学生以上、2012年10月1日オープン。口コミ (2025〜2026年、英語): 6,000円と9,900円のコース、あこう、おじさん、ぶりの塩麹焼き、金目鯛のかぶと煮、鱈フライ、おまかせ握り、締め鯖。',
      confidence: 'medium', sources: [TB, SITE, R + 'B201898225/', R + 'B516231132/', R + 'B518045657/', R + 'B521062905/', R + 'B522245810/', R + 'B525092959/', R + 'B531415138/', R + 'B536537507/', R + 'B536556092/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone (courses online for 3 or more); no sign outside; junior-high age and up.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西新屋敷下之町6-5 アンクル島原 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.992978, 135.743052); cross-checked: GSI 京都府京都市下京区西新屋敷下之町6番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531415138/', R + 'B516231132/'],
    price_note: 'No menu read; course prices from October 2025 and July–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course (sashimi, grill, simmered dish, fry, soup, omakase sushi, dessert)', '¥6,000', 'Courses', 'ask', 'no', 'July–September 2026.', 'course_6000'),
      it('', '', 'Course', '¥9,900', 'Courses', 'ask', 'no', 'October 2025.', 'course_9900'),
    ] }, {
    cuisine: '「料亭クラスに限りなく近い旬の魚料理を居酒屋として」、まな板とカウンターが同じ高さのオープンキッチンの魚居酒屋 (公式サイト)・コース6,000円と9,900円 (2025年10月、2026年7〜9月)・あこう、甘鯛、おじさんなどの造り、ぶりの塩麹焼き、帆立のガーリックバジル炒め、金目鯛のかぶと煮、鱈フライ、もずくの汁、おまかせ握りと小さなデザート (2026年7〜8月)・秋: 海老と柿のほうれん草の白和え、焼きふぐ、せいこ蟹、金目鯛のかぶら蒸し、白子の天ぷら、はまぐりの汁 (2025年11月)・締め鯖 (2026年9月)・締めのミニ海鮮丼 (2025年12月)・日本酒が豊富',
    neighborhood: '京都中央卸売市場の隣、島原。JR丹波口駅から徒歩3分',
    gf_detail: '要確認。造り、焼き物、煮物、握りの魚のコースで、天ぷらや鱈フライはグルテンフリーではない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚のコースと出汁の汁物 (2025〜2026年の口コミ)。',
    notes: '[魚居酒屋・島原、市場の裏口] 京都中央卸売市場の隣、島原の看板のない居酒屋。まな板とカウンターが同じ高さで、仕入れは信頼する市場の仲卸から。夜はコース (6,000円か9,900円) で、来るたびに中身ががらりと替わる。あこうやおじさんの造り、ぶりの塩麹焼き、金目鯛のかぶと煮、鱈フライ、おまかせ握り。昼の営業は休止中。日曜・祝日休み、中学生以上。',
  });
}

// ================================================================ 丸太町十二段家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000438/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.m-jyunidanya.com/'; const ABOUT = SITE + 'aboutus/';
  const H = day(['11:30', '14:00'], ['17:00', '19:00']);
  put({
    id: 'kyoto_marutamachi_junidanya', name: '丸太町十二段家 (Marutamachi Junidan Ya)', category: 'OMNI',
    lat: 35.017238, lng: 135.758541, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Ochazuke sets of rice, pickles, dashimaki and red-miso soup; the pickles and miso are not described for gluten (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashimaki of egg and bonito-kombu dashi in every set; some sets add fish (official site; 2026 reviews).',
    hours_raw: 'Lunch 11:30–14:00 (L.O. 13:30), dinner 17:00–19:00 (L.O. 18:30); closed Wednesday and over New Year; open until sold out; other irregular closures, posted on the site — closed on 6 November 2026 (official site; Tabelog). No reservations (official site), except the second-floor shabu-shabu rooms, whose bookings resumed in September 2026 (official site notice). Queues in autumn — nearly an hour for the second seating in November 2026. Cards and e-money accepted; Apple Pay; no QR (Tabelog). 22 seats on the first floor at tables and low round tables; Tabelog notes only the first floor open with a limited menu (Tabelog). Non-smoking; children welcome (Tabelog). On Marutamachi west of Karasuma, at the southwest corner of the Imperial Palace grounds, 2 min from Marutamachi Stn exit 4 (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Marutamachi west of Karasuma, by the Imperial Palace — 2 min from Marutamachi Stn',
    cuisine: '“Everyday Kyoto cuisine”: the original ochazuke house, a light meal of rice, pickles and sides (official site) · Suzushiro set ¥1,500 — dashimaki, red-miso soup, rice in a wooden tub for about two bowls, assorted seasonal pickles, hojicha (official site; July–September 2026) · Mizuna set with a seasonal simmered dish; a set with sea bream nanban (2026 reviews) · dashimaki of two eggs and a strong first dashi of Makurazaki katsuobushi and Rishiri kombu, made from 4 a.m. (official site) · pickles from contract and local farms, some homemade nukazuke; Ippodo hojicha (official site; July 2026) · shuanyangrou (beef shabu-shabu), wagyu steak, tuna sashimi (official site)',
    website: SITE, gmaps: gm('丸太町十二段家'), menu_url: SITE + 'menu/',
    notes: '[Ochazuke · Marutamachi, Kyoto’s everyday meal since the Taisho era] An old machiya by the Imperial Palace serving “ochazuke” in the Kyoto sense — a modest meal. The Suzushiro set (¥1,500, lunch or dinner) brings a feather-light rolled omelette made with a dashi started at 4 a.m., red-miso soup, a tub of rice and seasonal pickles, with Ippodo hojicha for the ochazuke. No reservations and queues in autumn; dinner ends early, at 19:00. Staff greet in soft Kyoto dialect and speak English. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Family business (unnamed in the sources)'], origin: null,
      background: 'Per the official site: an ochazuke house in business since the Taisho era. It began as a sweets shop in Gion named Junidanya after the twelve acts of Chushingura; ochazuke served to settle the palates of tipsy customers proved so popular that it has continued ever since. The site lists TV and press coverage and a 2025 article recalling 長嶋茂雄 as a patron.',
      philosophy: 'Ochazuke as Kyoto cuisine in everyday dress — plain food that cannot hide anything; local and contract-farm vegetables, Ippodo tea (official site).', specialty: 'Dashimaki; the Suzushiro ochazuke set.',
      anecdotes: [
        { text: 'A September 2026 sightseer sent by a taxi driver got a table straight away, and on leaving was waved off by the kitchen staff with "Enjoy your trip in Kyoto!"', source: R + 'B536268212/' },
        { text: 'A November 2026 visitor arrived five minutes before opening, still landed in the second seating, and waited nearly an hour — good food, not worth that wait.', source: R + 'B538643889/' },
        { text: 'A September 2026 regular noticed many visitors from abroad and staff who spoke fluent English.', source: R + 'B535875887/' },
      ],
      japanese_sources_summary: '公式サイト: 丸太町十二段家、中京区常真横町184-3 (丸太町通両替町西入)、大正から続くお茶漬けの老舗、もとは祇園町の甘党屋で歌舞伎の忠臣蔵十二段にちなむ屋号、酔客の口直しのお茶漬けが始まり、元祖お茶漬け、すずしろ (だし巻き、赤だし、ご飯、季節のお漬物盛り合わせ)、枕崎の鰹本節と利尻昆布の一番だしのだし巻き、毎朝4時から出汁、契約農家と地元の野菜、一保堂のほうじ茶、涮牛肉と和牛ステーキ、昼11:30〜14:00、夜17:00〜19:00、水曜休み、予約不可、2026年11月6日は臨時休業、しゃぶしゃぶ2階個室の予約再開 (2026年9月)。食べログ: 22席、カード・電子マネー可、禁煙、子ども可、現在は1階のみで品数を限定。口コミ (2026年、英語): すずしろ1,500円、ふわふわのだし巻き、京言葉の接客、英語を話すスタッフ、秋は行列。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, SITE + 'menu/', R + 'B532152445/', R + 'B533037898/', R + 'B533191095/', R + 'B533791378/', R + 'B534770563/', R + 'B534927912/', R + 'B535875887/', R + 'B536268212/', R + 'B536440908/', R + 'B538643889/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff (September 2026); no reservations, queue in busy seasons.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区常真横町184-3 (丸太町通両替町西入)',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (notices through 5 November 2026); Tabelog reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.017238, 135.758541); cross-checked: GSI 京都府京都市中京区常真横町184番地 (lot, from the official-site address; Tabelog gives only 烏丸丸太町西入) <1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532152445/', R + 'B536440908/', SITE],
    price_note: 'Set contents from the official site; price from July and September 2026 reviews.', last_checked: TODAY, items: [
      it('すずしろ', 'Suzushiro', 'Suzushiro ochazuke set (dashimaki, red-miso soup, rice, seasonal pickles, hojicha)', '¥1,500', 'Ochazuke', 'ask', 'no', 'Official site; July and September 2026.', 'suzushiro'),
    ] }, {
    cuisine: '「普段着の京料理」、元祖お茶漬けの店。ご飯と漬物とおかずの軽い食事 (公式サイト)・すずしろ1,500円: だし巻き、赤だし、二膳ほどのおひつのご飯、季節のお漬物盛り合わせ、ほうじ茶 (公式サイト、2026年7〜9月)・季節の炊き合わせ付きの水菜、鯛の南蛮漬け付きのセット (2026年の口コミ)・卵2個に枕崎産の鰹本節と利尻昆布の濃いめの一番だしを加えるだし巻き、出汁は毎朝4時から (公式サイト)・契約農家や地元の野菜の漬物、自家製のぬか漬けも、一保堂のほうじ茶 (公式サイト、2026年7月)・涮牛肉 (牛肉のしゃぶしゃぶ)、和牛ステーキ、本マグロの角造り (公式サイト)',
    neighborhood: '烏丸の西の丸太町通、京都御所のそば。丸太町駅から徒歩2分',
    gf_detail: '要確認。ご飯、漬物、だし巻き、赤だしのお茶漬けのセット。漬物と味噌のグルテンの説明はない (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。どのセットにも卵と鰹昆布出汁のだし巻き、魚の付くセットも (公式サイト、2026年の口コミ)。',
    notes: '[お茶漬け・丸太町、大正から続く京の普段着の食事] 御所のそばの古い町家で、京都流の「お茶漬け」、つまり軽い食事を出す。すずしろ (昼も夜も1,500円) は、朝4時から引く出汁のふわふわのだし巻き、赤だし、おひつのご飯、季節の漬物。お茶漬けには一保堂のほうじ茶を。予約不可で秋は行列、夜は19時で終わる。京言葉の接客で、英語も通じる。水曜休み。',
  });
}

save();
