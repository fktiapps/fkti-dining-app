// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 45.
//   + 湯葉料理 かめや本家 Kameya Honke (yuba restaurant at Shijo-Omiya since the Taisho era; official vegan shojin course)
//   + ミーミーミー ME ME ME (American-style breakfast café near Kawaramachi-Marutamachi)
//   + 食と森 Shoku to Mori (one-person plate-lunch café in a Taisho machiya south of Shichijo)
//   + 無鄰菴 Murin-an (café in Yamagata Aritomo's villa garden by Nanzen-ji; garden admission required)
//   Picked on 2026-11-06: `queue.mjs kyoto-missed next notable 2000` returned no lane shops (notable lane already cleared);
//   from `next core 300`, lane ids 26015624, 26029370, 26037416, 26013902. None is in data/kyoto.json by name (かめや本家 —
//   the 亀屋 wagashi houses in data are unrelated — ミーミーミー/ME ME ME, 食と森, 無鄰菴/Murin) or address (錦大宮町135,
//   上生州町210, 蛭子水町605, 南禅寺草川町31).
//   Same-name count (same brand or operator only): one shop each in the sources opened. Large-parent list checked.
//   Service charges: none listed on any of the four Tabelog listings (無鄰菴’s ¥600 is garden admission, from reviews).
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-45');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 湯葉料理 かめや本家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26015624/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kameya-honke.com/'; const MENU = SITE + 'menu.html';
  const H = day(['17:00', '21:30']);
  put({
    id: 'kyoto_yuba_kameya_honke', name: '湯葉料理 かめや本家 (Yuba Ryori Kameya Honke)', category: 'OMNI',
    lat: 35.004266, lng: 135.749048, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yuba and tofu kaiseki served with soy sauce, nama-fu (wheat gluten), shojin tempura and yuba-and-shrimp spring rolls; no gluten information (official menu; 2025–2026 reviews).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: the shojin kaiseki “Rokujo” (¥5,000 plus tax) is made without fish, shrimp, crab, meat, shellfish, egg, dairy, green onion, garlic, nira, rakkyo, onion or fish dashi, per the official menu. The yuba kaiseki courses include yuba-and-shrimp spring rolls. Book the Rokujo course ahead.',
    hours_raw: 'Dinner 17:00–21:30 (food L.O. 20:00, drinks 20:30), Tuesday–Saturday; Sunday 17:00–21:00; closed Monday; lunch on Saturdays and Sundays by reservation made the day before (Tabelog). Reservation only; parties of six or more by enquiry; cancellation policy applies (Tabelog). Strollers and wheelchairs are not allowed; the dining room is upstairs (Tabelog; August 2025). Cards and e-money (Tabelog). 26 seats at tables with screens; private rooms; no smoking inside or in front (Tabelog; official site). Shoes off at the entrance (November 2025). Three doors from Hankyu Omiya Stn exit 1, 2 min from Randen Shijo-Omiya Stn (Tabelog). A yuba restaurant since the Taisho era (March 2026 review).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: day(['17:00', '21:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Omiya just north of Shijo — 1 min from Hankyu Omiya Stn',
    cuisine: 'Yuba and tofu kaiseki in a townhouse, with the popular yuba hot pot, yudofu and nama-fu (official site) · shojin kaiseki “Rokujo” ¥5,000 plus tax: sakizuke, appetizers, yudofu, sesame tofu, fresh yuba sashimi, dengaku, small dish, simmered dish, shojin tempura, steamed dish, rice, soup, pickles and dessert — fully plant-based (official menu) · yuba kaiseki: fresh yuba sashimi, three-flavour dengaku, yuba-and-shrimp spring rolls, crispy fried yuba edges, yuba hot pot in a sweet soy-milk broth, Japanese sweet (November 2025) · shojin kaiseki ¥4,600 in March 2026 · grilled nama-fu (July 2026) · Kyoto sake; Yoshino umeshu (2025–2026)',
    website: SITE, gmaps: gm('湯葉料理 かめや本家 四条大宮'), menu_url: MENU,
    notes: '[Yuba · Shijo-Omiya, a Taisho-era yuba house with a vegan course] An old townhouse yuba restaurant by Hankyu Omiya Station: fresh yuba sashimi, dengaku, the soy-milk yuba hot pot, and a fully plant-based shojin kaiseki (no fish dashi, egg, dairy or alliums) for ¥5,000 plus tax. Reservation only; dining room upstairs, shoes off; no strollers or wheelchairs. Weekend lunch by advance booking.',
    chef_bio: { chef_name: null, roles: ['Kitchen (unnamed)'], origin: null,
      background: 'A March 2026 reviewer calls it a long-established yuba restaurant dating from the Taisho era. Photos of Showa-era stars line the walls (November 2025). Reviewers describe friendly women staff (November 2025).',
      philosophy: null, specialty: 'Yuba hot pot; fresh yuba sashimi; shojin kaiseki.',
      anecdotes: [
        { text: 'A November 2025 diner on the vegan “Rokujo” course was told the crispy fried yuba was made from the edges scooped up while making yuba.', source: R + 'B517607629/' },
        { text: 'A November 2025 guest was quizzed by the staff on how to read “hiryozu”.', source: R + 'B518049200/' },
      ],
      japanese_sources_summary: '公式サイト: 湯葉料理 かめや本家、中京区大宮通四条上ル錦大宮町135、町家で湯葉料理、ゆば鍋、湯豆腐、生麩の懐石、全席椅子・テーブル席、阪急大宮駅から3軒目、精進懐石 (六条) 5,000円 (税別): 先附け、前菜、湯豆腐、胡麻豆腐、生湯葉刺身、田楽、小鉢、煮物、精進揚げ、蒸し物、ご飯、汁物、漬物、デザート、「魚、海老、蟹、肉、貝、卵、乳製品、ネギ、ニンニク、ニラ、ラッキョウ、タマネギ、魚の出汁等は使用しておりません」。食べログ: 豆腐料理、火〜土 17:00〜21:30、日 17:00〜21:00、月曜定休、土日の昼は前日までに予約、完全予約制、ベビーカー・車椅子不可、26席、禁煙 (店の前も)。口コミ (2025〜2026年、英語): 大正からの老舗、生湯葉の刺身、田楽、湯葉と海老の春巻き、湯葉鍋、焼き生麩、2階の席、靴を脱ぐ。',
      confidence: 'medium', sources: [SITE, MENU, TB, R + 'B511500728/', R + 'B516454643/', R + 'B517524572/', R + 'B517607629/', R + 'B518049200/', R + 'B521193590/', R + 'B525069704/', R + 'B535144251/', R + 'B537984142/', R + 'B538011543/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; upstairs, shoes off; no strollers or wheelchairs.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'The plant-based Rokujo course is cooked in the same kitchen as yuba courses that include shrimp spring rolls; whether pans or fryers are separated is not stated.', source: MENU, verified: TODAY }],
      staff_allergy_handling: [],
      positives: [{ text: 'Official shojin kaiseki “Rokujo” uses no fish, shellfish, meat, egg, dairy, alliums or fish dashi (official menu).', source: MENU, verified: TODAY }],
      confidence: 'medium', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区大宮通四条上ル錦大宮町135',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004266, 135.749048); cross-checked: GSI 京都府京都市中京区錦大宮町135番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B525069704/'],
    price_note: 'Rokujo price from the official menu (tax extra), read 2026-11-06; a March 2026 review paid ¥4,600 for a shojin kaiseki.', last_checked: TODAY, items: [
      it('精進懐石 (六条)', '', 'Shojin kaiseki “Rokujo” (fully plant-based)', '¥5,000 + tax', 'Courses', 'ask', 'vegan', 'Official menu; no fish dashi, egg, dairy or alliums.', 'rokujo'),
      it('', '', 'Yuba kaiseki (with yuba-and-shrimp spring rolls)', '', 'Courses', 'ask', 'no', 'November 2025.', 'yuba_kaiseki'),
      it('', '', 'Yuba hot pot', '', 'Courses', 'ask', 'ask', '2025–2026 reviews.', 'yuba_nabe'),
    ] }, {
    cuisine: '町家の湯葉と豆腐の懐石。人気のゆば鍋、湯豆腐、生麩 (公式サイト)・精進懐石 (六条) 5,000円 (税別): 先附け、前菜、湯豆腐、胡麻豆腐、生湯葉刺身、田楽、小鉢、煮物、精進揚げ、蒸し物、ご飯、汁物、漬物、デザート。すべて植物性 (公式のお品書き)・湯葉懐石: 生湯葉の刺身、3種の田楽、湯葉と海老の春巻き、汲み上げ湯葉の揚げ物、豆乳の甘いゆば鍋、和菓子 (2025年11月)・2026年3月は精進懐石4,600円・焼き生麩 (2026年7月)・京都の地酒、梅酒 (2025〜2026年)',
    neighborhood: '四条のすぐ北の大宮通。阪急大宮駅から徒歩1分',
    gf_detail: '要確認。醤油で食べる湯葉と豆腐の懐石、生麩 (小麦のグルテン)、精進揚げ、湯葉と海老の春巻き。グルテンの情報はない (公式のお品書き、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンの選択肢あり。精進懐石「六条」(5,000円、税別) は「魚、海老、蟹、肉、貝、卵、乳製品、ネギ、ニンニク、ニラ、ラッキョウ、タマネギ、魚の出汁等は使用しておりません」(公式のお品書き)。湯葉懐石には湯葉と海老の春巻きが入る。六条は予約時に。',
    notes: '[湯葉・四条大宮、大正からの湯葉料理と精進の懐石] 阪急大宮駅のすぐそばの、古い町家の湯葉料理店。生湯葉の刺身、田楽、豆乳のゆば鍋、そして魚の出汁も卵も乳製品もネギ類も使わない完全な精進懐石 (5,000円、税別)。完全予約制、2階の席で靴を脱ぐ。ベビーカーと車椅子は不可。週末の昼は前日までに予約。',
  });
}

// ================================================================ ミーミーミー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26029370/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:30', '15:00']);
  put({
    id: 'kyoto_me_me_me_coffee', name: 'ミーミーミー (ME ME ME)', category: 'OMNI',
    lat: 35.019783, lng: 135.770166, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a menu: pancakes (including cornmeal pancakes, flour not stated), French toast, toast (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: breakfast plates with bacon, eggs and dairy (2025–2026 reviews).',
    hours_raw: '8:30–15:00 daily; irregular closures (Tabelog; hours may change). No reservations; order and pay at the register first (Tabelog; February 2026). Fills by mid-morning, waits of 15–20 minutes around 10:00 (November 2025; March 2026). Cards (JCB, AMEX, Diners) and e-money; no QR (Tabelog). 16 seats with a counter; non-smoking (Tabelog). Original merchandise (August 2026). Down an alley near the Kamo River, 5 min from Jingu-Marutamachi Stn (Tabelog; December 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Kawaramachi-Marutamachi by the Kamo River — 5 min from Jingu-Marutamachi Stn',
    cuisine: 'American-style breakfast café, said “Mi Mi Mi” (September 2025) · pancake set with bacon, sunny-side-up egg, salad, fruit and a drink ¥1,800 (November 2025) · cornmeal pancakes with bacon, eggs, fruit and salad (December 2025; February 2026) · French toast (March 2026) · coffee and toast breakfast about ¥1,400 (August 2026) · café latte, chai latte, straightforward coffee (2025–2026)',
    website: null, gmaps: gm('ME ME ME 京都 カフェ'), menu_url: null,
    notes: '[Breakfast café · near the Kamo River at Marutamachi] A small retro, American-feeling café in an alley off the Kamo, open from 8:30 for pancake plates — cornmeal pancakes with bacon and eggs, French toast — and good coffee or chai. Order at the register; queues by 10:00. Some reviewers found the service brusque.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'No owner is named in the sources read. Two 2026 reviewers found the service cold, one describing food and napkins being tossed onto the table (April 2026).',
      philosophy: null, specialty: 'Cornmeal pancakes; breakfast plates.',
      anecdotes: [
        { text: 'A December 2025 guest staying near Kyoto University walked along the Kamo River to breakfast and tried cornmeal pancakes for the first time.', source: R + 'B518384172/' },
        { text: 'A November 2025 visitor got in at 8:30 on a Sunday and watched it fill up right after.', source: R + 'B517703380/' },
      ],
      japanese_sources_summary: '食べログ: ミーミーミー (ME ME ME)、カフェ・パン、上京区上生州町210、神宮丸太町駅から徒歩5分、毎日8:30〜15:00、不定休、予約不可、カード (JCB、AMEX、Diners)・電子マネー可、16席、禁煙。口コミ (2025〜2026年、英語): 「ミーミーミー」と読む、アメリカ風の朝食カフェ、パンケーキのセット (ベーコン、目玉焼き、サラダ、果物、ドリンク) 1,800円、コーンミールのパンケーキ、フレンチトースト、トーストとコーヒーの朝食約1,400円、チャイラテ、先に会計、10時頃は待つ、接客が冷たいとの声も。',
      confidence: 'medium', sources: [TB, R + 'B513865654/', R + 'B517703380/', R + 'B518384172/', R + 'B523068424/', R + 'B524000277/', R + 'B525520273/', R + 'B527168048/', R + 'B533270387/', R + 'B534333414/', R + 'B537679032/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the register; busy mornings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区上生州町210',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.019783, 135.770166); GSI matched only the town (上生洲町, centroid 83m away) and OpenStreetMap has no node for the shop, so the pin is marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517703380/', R + 'B534333414/'],
    price_note: 'Prices from November 2025 and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pancake set (bacon, egg, salad, fruit, drink)', '¥1,800', 'Breakfast', 'no', 'no', 'November 2025.', 'pancake_set'),
      it('', '', 'Cornmeal pancakes', '', 'Breakfast', 'ask', 'no', '2025–2026.', 'cornmeal_pancakes'),
      it('', '', 'Coffee and toast breakfast', '¥1,400', 'Breakfast', 'no', 'no', 'August 2026, about ¥1,400.', 'toast_breakfast'),
    ] }, {
    cuisine: 'アメリカ風の朝食カフェ、「ミーミーミー」と読む (2025年9月)・ベーコン、目玉焼き、サラダ、果物、ドリンク付きのパンケーキセット1,800円 (2025年11月)・ベーコン、卵、果物、サラダのコーンミールのパンケーキ (2025年12月、2026年2月)・フレンチトースト (2026年3月)・コーヒーとトーストの朝食約1,400円 (2026年8月)・カフェラテ、チャイラテ、まっすぐなコーヒー (2025〜2026年)',
    neighborhood: '河原町丸太町近く、鴨川のそば。神宮丸太町駅から徒歩5分',
    gf_detail: 'メニューとしてはグルテンフリーではない。パンケーキ (コーンミールのパンケーキも、小麦の有無は書かれていない)、フレンチトースト、トースト (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。ベーコン、卵、乳製品の朝食プレート (2025〜2026年の口コミ)。',
    notes: '[朝食カフェ・丸太町の鴨川のそば] 鴨川近くの路地の、レトロでアメリカっぽい小さなカフェ。8時半からパンケーキのプレート (ベーコンと卵のコーンミールのパンケーキ、フレンチトースト) とおいしいコーヒーやチャイ。レジで先に注文、10時頃には待ちも。接客がそっけないとの声も。',
  });
}

// ================================================================ 食と森
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26037416/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00']);
  put({
    id: 'kyoto_shoku_to_mori', name: '食と森 (Shoku to Mori)', category: 'OMNI',
    lat: 34.991499, lng: 135.755327, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A single plate lunch that changes — sawara and vegetable tempura, tofu hamburg steak — plus pudding; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Seasonal Kyoto-vegetable plate lunches, sometimes with a tofu hamburg, but most days include fish, and dashi and seasonings are not described (Tabelog shop text; 2026 reviews).',
    hours_raw: '11:30–15:00 (L.O. 14:30) daily, closing early when food runs out; irregular closures (Tabelog). Reservations accepted, including same-day; walk-ins wait for the second sitting (Tabelog; March and May 2026). One lunch menu, different on weekdays and holidays (September 2026). Cash only (Tabelog; September 2026). 20 seats on tatami and at low tables over two floors; shoes off; kotatsu-style chairs on request (Tabelog; May–June 2026). Children welcome (Tabelog). Down narrow alleys between Higashi Hongan-ji and Nishi Hongan-ji, about 13 min from Gojo Stn, 15 min from Kyoto Station (Tabelog; 2026 reviews). Opened 8 June 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Between Higashi and Nishi Hongan-ji — 15 min on foot from Kyoto Station',
    cuisine: 'A café in a Taisho-era townhouse with seasonal Kyoto-vegetable plate lunches by an experienced chef (Tabelog shop text) · one plate lunch, different on weekdays and holidays: sawara and assorted vegetable tempura (March and September 2026); tofu hamburg steak plate (March 2026) · firm, old-fashioned pudding; tea (February 2026)',
    website: null, gmaps: gm('食と森 京都 下京区'), menu_url: null,
    notes: '[Plate lunch · between the Hongan-ji temples, a one-person machiya café] A 100-year-old townhouse café down narrow alleys, with tatami and low tables over two floors, where a single cook turns out one carefully made plate lunch a day — crisp sawara and vegetable tempura, a tofu hamburg — and a firm Showa-style pudding. Book (even same-day) to avoid waiting; slow but worth it. Cash only.',
    chef_bio: { chef_name: null, roles: ['Owner-cook (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes dishes by an experienced chef in a converted Taisho-era townhouse. An April 2026 reviewer found the café “being managed by just one person”, cooking at the entrance kitchen; a February 2026 guest marvelled at one staff member covering both floors. A March 2026 reviewer wondered whether a couple runs it. A May 2026 guest found the building’s age and a restroom without a hand basin unsettling, though the food was outstanding.',
      philosophy: null, specialty: 'Seasonal plate lunch; pudding.',
      anecdotes: [
        { text: 'A May 2026 guest with leg trouble was seated on a kotatsu chair with a view of the courtyard.', source: R + 'B528016781/' },
        { text: 'An October 2026 holiday visitor waited about 30 minutes; the reviewer advises coming with time to spare.', source: R + 'B537281387/' },
      ],
      japanese_sources_summary: '食べログ: 食と森、カフェ、下京区蛭子水町605、五条駅から徒歩13分、毎日11:30〜15:00 (L.O.14:30)、売り切れ次第終了、不定休、予約可、現金のみ、20席、座敷、子ども可、2022年6月8日オープン。店の紹介: 大正時代の町家を改装したカフェ、経験のある料理人の料理、京野菜の季節のプレートランチ。口コミ (2026年、英語): ランチは平日と休日でひとつずつ、鰆と野菜の天ぷら、豆腐ハンバーグのプレート、固めのプリン、ひとりで切り盛り、靴を脱いで座敷、待つこともある。',
      confidence: 'medium', sources: [TB, R + 'B523400132/', R + 'B524861798/', R + 'B525174294/', R + 'B525637160/', R + 'B527218809/', R + 'B528016781/', R + 'B529963531/', R + 'B530621015/', R + 'B536053689/', R + 'B537281387/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One set lunch; shoes off on tatami; cash only; reservations advised.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区蛭子水町605',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.991499, 135.755327); cross-checked: GSI 京都府京都市下京区蛭子水町605番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices read; reviewers spend ¥1,000–2,999.', last_checked: TODAY, items: [
      it('', '', 'Plate lunch of the day', '', 'Lunch', 'ask', 'ask', '2026 reviews.', 'plate_lunch'),
      it('', '', 'Pudding', '', 'Sweets', 'ask', 'no', 'February 2026.', 'pudding'),
    ] }, {
    cuisine: '大正の町家のカフェで、経験のある料理人の京野菜の季節のプレートランチ (食べログの店の紹介)・平日と休日で一種類ずつのプレートランチ: 鰆と野菜の天ぷら (2026年3月、9月)、豆腐ハンバーグのプレート (2026年3月)・昔ながらの固めのプリン、お茶 (2026年2月)',
    neighborhood: '東本願寺と西本願寺の間。京都駅から徒歩15分',
    gf_detail: '要確認。日替わりのプレートランチ (鰆と野菜の天ぷら、豆腐ハンバーグ) とプリン。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。京野菜の季節のプレートで豆腐ハンバーグの日もあるが、ほとんどの日は魚が入り、出汁や調味料は書かれていない (食べログの店の紹介、2026年の口コミ)。',
    notes: '[プレートランチ・東西本願寺の間、ひとりで営む町家カフェ] 細い路地の奥の築100年の町家。2階まで座敷と卓袱台が並び、ひとりの料理人が一日一種類のていねいなプレートランチ (さくさくの鰆と野菜の天ぷら、豆腐ハンバーグ) と昔ながらの固いプリンを出す。当日でも予約がおすすめ、時間に余裕を。現金のみ。',
  });
}

// ================================================================ 無鄰菴
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26013902/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://murin-an.jp/';
  put({
    id: 'kyoto_murin_an_cafe', name: '無鄰菴 (Murin-an)', category: 'OMNI',
    lat: 35.011638, lng: 135.786954, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A tea-and-sweets set — matcha, dorayaki, monaka ice, dry sweets, Russian cakes from Murakami Kaishindo — none described for gluten (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Matcha and juices are plant-based; the sweets are not described (2026 reviews).',
    hours_raw: 'April–September 9:00–18:00, October–March 9:00–17:00; last entry 30 minutes before closing; reservations given priority (Tabelog). Garden admission ¥600 plus a café set ¥1,200 — any drink with any sweet; items are not sold singly (July–September 2026); entry and café can be booked together online (August 2026). Cards, e-money and QR (Tabelog). 20 seats, mostly tatami, facing the garden (Tabelog). Inside the garden villa of Yamagata Aritomo by Nanzen-ji, 7 min from Keage Stn (Tabelog).',
    hours: { 0: day(['09:00', '17:00']), 1: day(['09:00', '17:00']), 2: day(['09:00', '17:00']), 3: day(['09:00', '17:00']), 4: day(['09:00', '17:00']), 5: day(['09:00', '17:00']), 6: day(['09:00', '17:00']) }, hours_status: 'seasonal',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nanzen-ji approach, Okazaki — 7 min from Keage Stn',
    cuisine: 'Tea in the house of Yamagata Aritomo’s villa, overlooking the garden by the seventh-generation Ogawa Jihei (Tabelog shop text) · café set ¥1,200, any combination of seven or eight drinks and sweets (July–October 2026): matcha (hot or chilled) with dorayaki or Kyo-azuki dorayaki; monaka ice of matcha and red bean; Japanese white peach juice; dry sweets; Russian cakes from Murakami Kaishindo; Kyoto Beer Room’s “Muromachi Saison” beer (2026)',
    website: SITE, gmaps: gm('無鄰菴 京都'), menu_url: null,
    notes: '[Garden café · Nanzen-ji, Yamagata Aritomo’s villa] Tea on the tatami of a Meiji-era villa looking over one of Kyoto’s great modern gardens, laid out by the seventh-generation Ogawa Jihei for Yamagata Aritomo. Pay the ¥600 garden entry, then a ¥1,200 set of matcha or juice with a sweet (dorayaki, monaka ice, Murakami Kaishindo Russian cake). Book ahead; open from 9:00.',
    chef_bio: { chef_name: null, roles: ['Garden café staff (unnamed)'], origin: null,
      background: 'Tabelog’s shop text: the villa was built for the politician Yamagata Aritomo between 1894 and 1896, and the garden was made by the seventh-generation Ogawa Jihei on Yamagata’s instructions. Reviewers note an explanation of the garden before tea (August and October 2026) and its role in pre–Russo-Japanese War diplomatic talks (August 2026).',
      philosophy: null, specialty: 'Matcha and sweets with the garden view.',
      anecdotes: [
        { text: 'An August 2026 visitor booked a combined entry-and-café ticket online for a 17:00 slot.', source: R + 'B534056204/' },
        { text: 'A September 2026 visitor finally tried the Russian cakes of Murakami Kaishindo here, never having managed to visit the shop.', source: R + 'B534850328/' },
      ],
      japanese_sources_summary: '食べログ: 無鄰菴、カフェ、左京区南禅寺草川町31、蹴上駅から徒歩約7分、4〜9月 9:00〜18:00、10〜3月 9:00〜17:00、最終入場は閉場30分前、予約優先、カード・電子マネー・QR可、20席。店の紹介: 明治27〜29年にYamagata Aritomo が造営した別荘、七代目 Ogawa Jihei が作庭した近代日本庭園の名作を眺めながら抹茶を。口コミ (2026年、英語・日本語): 入場料600円とカフェのセット1,200円 (飲み物と菓子を自由に組み合わせ、単品不可)、抹茶とどら焼き、最中アイス、白桃ジュース、干菓子、村上開新堂のロシアケーキ、京都ビアルームの室町セゾン、事前予約がよい。',
      confidence: 'medium', sources: [SITE, TB, R + 'B530036316/', R + 'B532043953/', R + 'B532451805/', R + 'B534056204/', R + 'B534850328/', R + 'B535163932/', R + 'B535664246/', R + 'B536371991/', R + 'B536549777/', R + 'B537110220/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Garden admission ¥600 plus a ¥1,200 café set; many overseas visitors (September 2026); book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区南禅寺草川町31',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.011638, 135.786954); cross-checked: GSI 京都府京都市左京区南禅寺草川町31番地 (lot) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532043953/', R + 'B534850328/'],
    price_note: 'Prices from July and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Café set (any drink and sweet)', '¥1,200', 'Café', 'ask', 'ask', '2026; garden admission extra.', 'cafe_set'),
      it('', '', 'Garden admission', '¥600', 'Admission', '', '', '2026 reviews.', 'admission'),
    ] }, {
    cuisine: 'Yamagata Aritomo の別荘の母屋で、七代目 Ogawa Jihei の庭を眺めてお茶 (食べログの店の紹介)・カフェのセット1,200円、7〜8種の飲み物と菓子を自由に組み合わせ (2026年7〜10月): 抹茶 (温か冷) とどら焼きや京あずきのどら焼き、抹茶と小豆の最中アイス、国産白桃のジュース、干菓子、Murakami Kaishindo のロシアケーキ、Kyoto Beer Room の「Muromachi Saison」(2026年)',
    neighborhood: '南禅寺の参道、岡崎。蹴上駅から徒歩7分',
    gf_detail: '要確認。抹茶、どら焼き、最中アイス、干菓子、Murakami Kaishindo のロシアケーキのお茶と菓子のセット。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。抹茶やジュースは植物性だが、菓子の中身は書かれていない (2026年の口コミ)。',
    notes: '[庭園カフェ・南禅寺、Yamagata Aritomo の別荘] 七代目 Ogawa Jihei がYamagata Aritomo のために作った近代の名庭を、明治の別荘の座敷から眺めてお茶を。入場料600円のあと、抹茶やジュースと菓子 (どら焼き、最中アイス、Murakami Kaishindo のロシアケーキ) のセット1,200円。予約がおすすめ、朝9時から。',
  });
}

save();
