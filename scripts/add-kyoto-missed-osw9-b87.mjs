// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 87.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - よしだpapa — no 2025–26 review (latest October 2020)
//   + 祇園下河原 おりじん Origin (kushiage and wine counter on Shimogawara, run by the owner-chef alone; since 2020)
//   + ハラルムガル 四条烏丸SUINA室町店 Halal Mughal (Pakistani biryani in the SUINA Muromachi food hall; Kyoto shop of an
//     Osaka group of four open shops, none in data; since July 2026)
//   + 京料理 竹島 ICHIGO Kyoryori Takeshima (Kiyamachi kaiseki with a summer riverside deck; founded as an inn in 1897)
//   + 京料理 さつき Kyoryori Satsuki (Kiyamachi Kyoto kaiseki and fugu with a summer riverside deck; since 1961)
//   Brand checks: none in data or queue-status by name (the 竹島 hit in data is the アイル竹島ビル address of ムガール
//   (kyoto_mughal_kiyamachi), a different restaurant from ハラルムガル); a Tabelog search for ハラルムガル lists OSAKA HALAL
//   MUGHAL Honmachi, Osaka Masjid-side, the Kyoto shop, an Expo 2025 shop (listing on hold) and a closed Dojima shop, and a
//   July 2026 review mentions an Ibaraki shop — four open shops, under the five-shop threshold; no sister shop found for 竹島
//   (ikyu, Retty, gurunavi). None is a THAN or WILL brand (no WILL invoice T4120001183828 on any listing). None is in a hotel.
//   Service charges from Tabelog's Japanese original: おりじん 「無し」 (the English line on Tabelog says a service charge applies —
//   a machine-translation error; the original says none); 竹島 「座敷・川床のみサービス料10%」; さつき 「コースの料金に含まれております」;
//   ハラルムガル has no section.
//   Pins (checked against main, hidden records included): 竹島 and さつき's lots resolve only to the town on GSI, so both use
//   the Tabelog point with loc_approx 'single'; 竹島 moved 2m NE (4.0m from kyoto_togiya_kiyamachi_oike); the rest ≥ 10m.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-87');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26000045', 'no 2025–26 review (the latest fetched review is from October 2020)');

// ================================================================ 祇園下河原 おりじん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033993/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:00']);
  put({
    id: 'kyoto_gion_shimogawara_origin', name: '祇園下河原 おりじん (Gion Shimogawara Origin)', category: 'OMNI',
    lat: 35.000439, lng: 135.778444, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: battered, deep-fried skewers, croquettes and katsu sandwiches (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: skewers of seafood and meat, croquettes and beef cutlet (2025 reviews); the skewers are fried in rice oil (Tabelog).',
    hours_raw: 'Mon, Tue, Thu–Sun and holidays 17:00–23:00; closed Wednesdays, with other irregular closures (Tabelog). No service charge (Tabelog Japanese original 「無し」). Cards and e-money; no QR (Tabelog). 10 seats: 8 at the counter and 2 at a table; non-smoking (Tabelog). Down a long, spotless alley off Shimogawara-dori below the Yasaka torii, 3 min from the Higashiyama Yasui bus stop (Tabelog; November 2024 and August 2026 reviews).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shimogawara, south of Yasaka Shrine — 3 min from Higashiyama Yasui bus stop',
    cuisine: 'Kushiage and wine with Japanese-Western dishes: skewers of seasonal vegetables and seafood fried in rice oil (Tabelog); a ¥12,000 course of octopus with Kujo negi, sweetlip emperor, shrimp and other skewers, two croquettes, a beef cutlet and hayashi rice (October 2025); omakase five skewers, wagyu katsu sandwich (September 2025); crab-cream and chili-con-carne croquettes, thick ham katsu, shrimp katsu sandwich (February 2025); peach and melon salad (August 2026); about ¥10,000–15,000',
    website: null, gmaps: gm('祇園下河原 おりじん'), menu_url: null,
    notes: '[Kushiage · Shimogawara] A ten-seat counter at the end of a quiet Shimogawara alley where the owner-chef alone fries crisp, light kushiage in rice oil and serves katsu sandwiches and croquettes with wine. About ¥10,000–15,000.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Opened 27 February 2020 (Tabelog). The owner-chef works alone and keeps the dishes coming at a good pace (October 2025 review).',
      philosophy: 'Carefully made skewers and Japanese-Western dishes for casual courses (Tabelog).',
      specialty: 'Kushiage; katsu sandwich.',
      anecdotes: [
        { text: 'An October 2025 diner on the ¥12,000 course found the owner-chef, working alone, so pleasant that every dish got finished.', source: R + 'B516340845/' },
        { text: 'A November 2024 guest said the katsu sandwich at the end changed a lifetime\'s idea of katsu sandwiches.', source: R + 'B497388507/' },
        { text: 'An August 2026 regular, back after three years, felt light after a kushiage dinner and almost dozed off in the calm room.', source: R + 'B533125663/' },
      ],
      japanese_sources_summary: '食べログ: 祇園下河原 おりじん、串揚げ・ワインバー・洋食、東山区上弁天町435-2、東山安井バス停から徒歩3分、月・火・木〜日・祝日 17:00〜23:00、水曜休み、不定休あり、サービス料なし、カード・電子マネー可、QR 不可、10席 (カウンター8)、禁煙、2020年2月27日オープン、米油で揚げる串揚げ (紹介文、英訳)。口コミ (2024〜2026年、英語): 店主が一人で営む (2025年10月)、12,000円のコース、カツサンド、クリームコロッケ、長い路地の奥。',
      confidence: 'medium', sources: [TB, R + 'B497388507/', R + 'B501496227/', R + 'B516340845/', R + 'B526458555/', R + 'B533125663/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区下河原通八坂鳥居前下ル上弁天町435-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.000439, 135.778444); cross-checked: GSI 京都府京都市東山区上弁天町435番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516340845/'],
    price_note: 'Course price from an October 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Kushiage course', '¥12,000', 'Courses', 'no', 'no', 'October 2025 review.', 'course'),
      it('', '', 'Wagyu katsu sandwich', '', 'A la carte', 'no', 'no', '2024–25 reviews.', 'katsu_sand'),
    ] }, {
    cuisine: '串揚げとワイン、和洋の料理: 米油で揚げる季節の野菜と魚介の串 (食べログ)、タコと Kujo ねぎ、魚、海老などの串、コロッケ2種、牛カツ、ハヤシライスの12,000円のコース (2025年10月)、おまかせの串5本、和牛のカツサンド (2025年9月)、カニクリームとチリコンカンのコロッケ、厚切りハムカツ、海老カツサンド (2025年2月)、桃とメロンのサラダ (2026年8月)、10,000〜15,000円ほど',
    neighborhood: '下河原、八坂神社の南。東山安井バス停から徒歩3分',
    gf_detail: 'グルテンフリー不可。衣をつけて揚げる串、コロッケ、カツサンド (2024〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介と肉の串、コロッケ、牛カツ (2025年の口コミ)。串は米油で揚げる (食べログ)。',
    notes: '[串揚げ・下河原] 下河原の静かな路地の奥の10席のカウンター。店主が一人で米油で軽く揚げる串揚げに、カツサンドやコロッケ、ワイン。10,000〜15,000円ほど。',
  });
}

// ================================================================ ハラルムガル 四条烏丸SUINA室町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26045351/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '22:00']);
  put({
    id: 'kyoto_halal_mughal_suina_muromachi', name: 'ハラルムガル 四条烏丸SUINA室町店 (Halal Mughal)', category: 'OMNI',
    lat: 35.003403, lng: 135.758625, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Biryani is rice-based, but naan, burgers and pizza are wheat; the shop says it caters to allergy needs (Tabelog shop text).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'The shop says its Middle Eastern menu caters to halal, vegetarian, vegan and allergy needs (Tabelog shop text); ask which dishes.',
    hours_raw: 'Daily 11:00–22:00 (food L.O. 21:00, drinks 21:30) (Tabelog). Order and pay at the counter; takeaway (Tabelog). Bookings through Tabelog only, with a cancellation fee (Tabelog). Cards, e-money and QR (Tabelog). 42 seats in the food hall; non-smoking; wheelchair accessible (Tabelog). SUINA Muromachi B1F, linked to Hankyu Karasuma exit 26 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: true, open_late: false },
    neighborhood: 'Shijo-Muromachi — linked to Hankyu Karasuma Stn',
    cuisine: 'Pakistani and Middle Eastern halal dishes: chicken biryani ¥1,480 — the dish sold more than 52,000 times at Expo 2025 — and mutton biryani ¥1,980 with raita (2026); kebabs, tandoori chicken, curry and naan set ¥1,300, burgers and pizza (2026); halal Arita beef (Tabelog); mirshari strawberry or mango ¥680 (July 2026)',
    website: null, gmaps: gm('ハラルムガル 四条烏丸 SUINA室町'), menu_url: null,
    notes: '[Pakistani halal · Shijo] The Kyoto counter of the Osaka halal group that sold over 52,000 biryani at Expo 2025: fluffy chicken or mutton biryani, curry and naan, kebabs and mango mirshari in the SUINA Muromachi food hall. About ¥1,300–2,000.',
    chef_bio: { chef_name: null, roles: ['Kyoto shop of the Osaka Halal Mughal group'], origin: null,
      background: 'Opened 1 July 2026 as the group\'s first Kyoto shop, after a stall at Expo 2025 (July 2026 reviews); the group\'s Osaka shops number two or three (July 2026 reviews), and a Tabelog search lists Honmachi, Masjid-side and Hankyu Ibaraki shops.',
      philosophy: 'Halal, vegetarian, vegan and allergy-friendly Middle Eastern food in a casual café (Tabelog shop text).',
      specialty: 'Chicken biryani.',
      anecdotes: [
        { text: 'The first customer on opening day in July 2026 found the lunch menu had no kebabs and settled happily on chicken biryani.', source: R + 'B530953743/' },
        { text: 'A November 2026 diner who had given up on mutton biryani elsewhere found this one free of any gamey smell.', source: R + 'B538818822/' },
      ],
      japanese_sources_summary: '食べログ: ハラルムガル 四条烏丸SUINA室町店、中東料理・パキスタン料理・カフェ、下京区函谷鉾町78 SUINA室町 B1F、阪急烏丸駅26番出口直結、毎日 11:00〜22:00、カウンターで注文と先払い、テイクアウト可、予約は食べログのみ、カード・電子マネー・QR 可、42席、禁煙、ハラル・ベジタリアン・ヴィーガン・アレルギーに対応 (店の紹介文、英訳)。口コミ (2026年、英語): 2026年7月1日オープン、万博で52,000食のチキンビリヤニ1,480円、マトンビリヤニ1,980円、カレーとナンのセット1,300円、大阪にも店。',
      confidence: 'medium', sources: [TB, R + 'B530953743/', R + 'B530953746/', R + 'B531616745/', R + 'B532627042/', R + 'B532930593/', R + 'B533523383/', R + 'B538818822/', 'https://tabelog.com/en/rstLst/?sw=%E3%83%8F%E3%83%A9%E3%83%AB%E3%83%A0%E3%82%AC%E3%83%AB'] },
    cultural_comfort: { level: 'english', note: 'Counter ordering; halal and vegan needs catered for (Tabelog shop text).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通室町東入函谷鉾町78 SUINA室町 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (official information); reviews dated July–November 2026.' },
    pin_source: `Tabelog ${TB} (35.003403, 135.758625); cross-checked: GSI 京都府京都市下京区函谷鉾町78番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533523383/', R + 'B532930593/', R + 'B532627042/'],
    price_note: 'Prices from July–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken biryani', '¥1,480', 'Biryani', 'ask', 'no', 'August 2026 review.', 'chicken_biryani'),
      it('', '', 'Mutton biryani', '¥1,980', 'Biryani', 'ask', 'no', 'July 2026 review.', 'mutton_biryani'),
      it('', '', 'Chicken curry and naan set', '¥1,300', 'Curry', 'no', 'no', 'July 2026 review.', 'curry_naan'),
      it('', '', 'Mirshari (strawberry or mango)', '¥680', 'Drinks', 'ask', 'ask', 'July 2026 review.', 'mirshari'),
    ] }, {
    cuisine: 'パキスタンと中東のハラル料理: 万博で52,000食を超えたチキンビリヤニ1,480円、ライタのマトンビリヤニ1,980円 (2026年)、ケバブ、タンドリーチキン、カレーとナンのセット1,300円、バーガーとピザ (2026年)、ハラルの Arita 牛 (食べログ)、ミルシャリのいちごとマンゴー680円 (2026年7月)',
    neighborhood: '四条室町。阪急烏丸駅直結',
    gf_detail: '要確認。ビリヤニは米だが、ナン、バーガー、ピザは小麦。アレルギーに対応 (食べログの店の紹介文)。',
    vegan_detail: '店の紹介文によると、ハラル、ベジタリアン、ヴィーガン、アレルギーに対応 (食べログ)。料理は要確認。',
    notes: '[パキスタン・ハラル・四条] 万博でビリヤニを52,000食以上売った大阪のハラルのグループの京都の店。SUINA室町のフードホールで、ふんわりしたチキンやマトンのビリヤニ、カレーとナン、ケバブ、マンゴーのミルシャリ。1,300〜2,000円ほど。',
  });
}

// ================================================================ 京料理 竹島 ICHIGO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001167/'; const R = TB + 'dtlrvwlst/';
  const IK = 'https://restaurant.ikyu.com/102275/';
  const D = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_kyoryori_takeshima_ichigo', name: '京料理 竹島 ICHIGO (Kyoryori Takeshima)', category: 'OMNI',
    lat: 35.011828, lng: 135.770748, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kaiseki with sashimi, grilled ayu and hamo shabu-shabu; soy and dashi are likely (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki of fish and hamo (2025–26 reviews).',
    hours_raw: 'Daily 11:30–14:00 (L.O. 13:00) and 17:00–22:00 (L.O. 20:00); irregular closures (Tabelog). Riverside deck (kawadoko) in season, May–September in 2025–26 reviews; blankets given on cool nights (May 2026 review). Service charge 10% in the tatami rooms and on the kawadoko only (Tabelog Japanese original 「座敷・川床のみサービス料10%」). Cards; no e-money or QR (Tabelog). 50 seats: counter, tatami rooms and an open terrace; smoking area (Tabelog). On Kiyamachi north of Oike, between the Kamo and Takase rivers; the entrance is easy to miss (ikyu; August 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi, north of Oike — 3 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Kyoto kaiseki on the Kamo River: the mini kaiseki of sashimi, sesame tofu and freshly grilled ayu (September 2025, July and September 2026), about ¥6,000 on the riverside deck (September 2026); hamo shabu-shabu (June and August 2026); omakase courses; seasonal touches such as rabbit kamaboko and tsukimi dango in September (2026); a good sake list',
    website: IK, gmaps: gm('京料理 竹島 木屋町'), menu_url: null,
    notes: '[Kaiseki & kawadoko · Kiyamachi] A Kiyamachi house between the Kamo and Takase rivers, founded as an inn in 1897, serving Kyoto kaiseki and hamo shabu-shabu — on a riverside deck in summer from about ¥6,000. Reviews are mixed on service.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Founded in Meiji 30 (1897) as an inn (ikyu shop text); Tabelog gives 8 April 1980 as the opening date of the current restaurant.',
      philosophy: null,
      specialty: 'Mini kaiseki on the kawadoko; hamo shabu-shabu.',
      anecdotes: [
        { text: 'A May 2026 visitor on a chilly night on the riverside deck was handed blankets by the staff.', source: R + 'B528228203/' },
        { text: 'A September 2026 guest found the riverside dinner around ¥6,000 good value, with rabbit-shaped kamaboko and moon-viewing dumplings on the tray.', source: R + 'B537424697/' },
        { text: 'A July 2026 diner found the food fine but the service uneven, and the dim deck lighting made the dishes hard to see.', source: R + 'B531966878/' },
      ],
      japanese_sources_summary: '食べログ: 京料理 竹島 ICHIGO、日本料理・居酒屋、中京区上樵木町496 アイル竹島ビル1F、京都市役所前駅から徒歩3分、毎日 11:30〜14:00 (L.O. 13:00)・17:00〜22:00 (L.O. 20:00)、不定休、座敷・川床のみサービス料10%、カード可、電子マネー・QR 不可、50席、1980年4月8日オープン。一休: 明治30年に旅館として創業、鴨川と高瀬川の間。口コミ (2025〜2026年、英語): 川床のミニ懐石、鮎の塩焼き、hamo しゃぶ、9月は月見の趣向、6,000円ほど。',
      confidence: 'medium', sources: [TB, IK, R + 'B515075973/', R + 'B528228203/', R + 'B530345555/', R + 'B531795401/', R + 'B531966878/', R + 'B534569956/', R + 'B536140809/', R + 'B537424697/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book the riverside deck in season.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町御池上ル上樵木町496 アイル竹島ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and ikyu; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.011815, 135.770732), moved 2m NE to clear kyoto_togiya_kiyamachi_oike (4.0m); GSI resolves 上樵木町496 only to the town, so loc_approx single; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537424697/'],
    price_note: 'Riverside price from a September 2026 review; 10% service in tatami rooms and on the deck.', last_checked: TODAY, items: [
      it('', '', 'Mini kaiseki', 'about ¥6,000', 'Courses', 'ask', 'no', '2025–26 reviews.', 'mini_kaiseki'),
      it('', '', 'Hamo shabu-shabu course', '', 'Courses', 'ask', 'no', 'June and August 2026 reviews.', 'hamo_shabu'),
    ] }, {
    cuisine: '鴨川の京料理: 刺身、胡麻豆腐、焼きたての鮎のミニ懐石 (2025年9月、2026年7月・9月)、川床で6,000円ほど (2026年9月)、hamo しゃぶ (2026年6月・8月)、おまかせのコース、9月はうさぎのかまぼこや tsukimi dango などの季節の趣向 (2026年)、豊富な日本酒',
    neighborhood: '木屋町、御池の北。京都市役所前駅から徒歩3分',
    gf_detail: '要確認。刺身、鮎の塩焼き、hamo しゃぶの懐石。醤油と出汁を使う可能性が高い (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚と hamo の懐石 (2025〜26年の口コミ)。',
    notes: '[京料理と川床・木屋町] 鴨川と高瀬川の間、明治30年に旅館として創業した木屋町の店。京料理と hamo しゃぶを、夏は川床で6,000円ほどから。接客の評価は分かれる。',
  });
}

// ================================================================ 京料理 さつき
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26010227/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://satsuki-kyoto.com';
  const D = day(['17:00', '22:00']);
  put({
    id: 'kyoto_kyoryori_satsuki_kiyamachi', name: '京料理 さつき (Kyoryori Satsuki)', category: 'OMNI',
    lat: 35.011891, lng: 135.770839, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki with fu (wheat gluten) among the starters and dashi throughout (October 2024 review).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki of hamo, fugu, tuna and ayu (2024–26 reviews).',
    hours_raw: 'Mon–Sat 17:00–22:00; closed Sundays and holidays (Tabelog). Reservation only (Tabelog). Service is included in the course price (Tabelog Japanese original 「コースの料金に含まれております」). From May to 15 October dining is mainly on the riverside deck (noryo-doko), indoors if it rains; from 16 October to April indoors, in three private rooms and at the counter; all seats are chairs (Tabelog). Cards; no e-money or QR (Tabelog). 25 seats; non-smoking (Tabelog). On Kiyamachi north of Oike, 1 min from Kyoto Shiyakusho-mae exit 2; for taxis, "Kiyamachi-dori Nijo-agaru" (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi, north of Oike — 1 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Traditional Kyoto kaiseki and fugu: persimmon and fu, hamo dobin-mushi, tuna and fugu sashimi, ayu roe (October 2024); an autumn hassun in a chestnut-burr dish with ginkgo, and young ayu in black lacquer (October 2026); New Year dishes (January 2026); about ¥15,000–20,000',
    website: WEB, gmaps: gm('京料理 さつき 木屋町'), menu_url: null,
    notes: '[Kaiseki & fugu · Kiyamachi] A Kiyamachi kaiseki house since 1961, dining on a Kamo River deck from May to mid-October and in private rooms in winter: seasonal hassun, hamo dobin-mushi and fugu. About ¥15,000–20,000, service included; booking only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 13 May 1961 (Tabelog). Chosen as "a historical restaurant" for a first kawadoko by an August 2024 guest.',
      philosophy: null,
      specialty: 'Kyoto kaiseki; fugu.',
      anecdotes: [
        { text: 'An October 2026 party, rained off the deck, ate indoors facing the Kamo River and singled out a chestnut-burr hassun and young ayu set in black lacquer.', source: R + 'B537604093/' },
        { text: 'An October 2024 visitor, sent by a former colleague, nearly missed the entrance before a private-room kaiseki with hamo dobin-mushi.', source: R + 'B494422710/' },
      ],
      japanese_sources_summary: '食べログ: 京料理 さつき、日本料理・ふぐ、中京区の木屋町、御池の北、京都市役所前駅2番出口から徒歩1分、月〜土 17:00〜22:00、日曜・祝日休み、予約のみ、サービス料はコースの料金に含む、5月〜10月15日は noryo-doko、雨天と10月16日〜4月は室内 (個室3つとカウンター)、カード可、電子マネー・QR 不可、25席、禁煙、1961年5月13日オープン。口コミ (2024〜2026年、英語): 京都らしい懐石、hamo の dobin-mushi、ふぐの刺身、秋の hassun。',
      confidence: 'medium', sources: [TB, WEB, R + 'B490451316/', R + 'B494422710/', R + 'B520361360/', R + 'B523211719/', R + 'B537604093/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Booking only; chairs throughout (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町通御池上る上樵木町495',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.011891, 135.770839); GSI resolves 上樵木町495 only to the town, so loc_approx single; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No course prices found; Tabelog average ¥15,000–19,999, service included.', last_checked: TODAY, items: [
      it('', '', 'Kyoto kaiseki course', '', 'Courses', 'ask', 'no', '2024–26 reviews.', 'kaiseki'),
    ] }, {
    cuisine: '昔ながらの京料理とふぐ: 柿と麩、hamo の dobin-mushi、マグロとふぐの刺身、鮎の子 (2024年10月)、栗のいがの器の秋の hassun に銀杏、黒漆の器の若鮎 (2026年10月)、正月の料理 (2026年1月)、15,000〜20,000円ほど',
    neighborhood: '木屋町、御池の北。京都市役所前駅から徒歩1分',
    gf_detail: '要確認。前菜に麩があり、出汁を多く使う京料理 (2024年10月の口コミ)。',
    vegan_detail: 'ヴィーガン不可。hamo、ふぐ、マグロ、鮎の懐石 (2024〜26年の口コミ)。',
    notes: '[京料理とふぐ・木屋町] 1961年からの木屋町の京料理の店。5月から10月半ばは鴨川の noryo-doko、冬は個室で。季節の hassun、hamo の dobin-mushi、ふぐ。15,000〜20,000円ほど、サービス料込み、予約のみ。',
  });
}

save();
