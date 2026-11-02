// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 5.
//   + 鳥四季 上野駅前店 Tori Shiki (private-room chicken-and-seafood izakaya by Ueno Stn Asakusa exit; opened 2018)
//   + 全席個室 九州うまいもん 酒兵衛 上野店 Sakebei (private-room Kyushu-dishes izakaya, TSDビル 4F; opened July 2024)
//   + 美健食道 三羊開泰 Biken Shokudo Sanyokaitai (Chinese/Taiwanese lamb and all-you-can-eat hot pot, TSDビル 2F; opened 2022)
//   + 本格中華・北京ダック専門店 北京カォヤーテン 上野店 Peking Kaoyaten (240-seat Chinese, wood-fired Peking duck, UENO3153 1F)
// Skipped: ファイヤーチキン 上野入谷店 13268713 and 全席個室 鮨と酒 魚縁 13297906 — chains (see skip()).
// Chain check. Tori Shiki: 上野駅前店 plus a 横浜駅前店 of the same "地鶏と鮮魚×完全個室 焼き鳥" format (gurunavi page titles in
//   search results; not opened) — two shops, kept. Its Tabelog listing gives 03-5830-7319, the same phone number as the
//   Tabelog listing of Oden to Meshi Hanamidou (13289752; record tokyo_oden_to_meshi_hanamido_ueno, address_ja
//   "東京都台東区上野7-2-5 ニューウエノ 2F-D"), in the same building. Sakebei: one shop found. Sanyokaitai: one shop found.
//   Peking Kaoyaten: the Tabelog page title gives 北京烤鴨店, and Yokohama Chinatown has a 北京烤鴨店 / ペキンカォヤーテン
//   (Tabelog 14055981 and gurunavi, in search results; not opened) — two shops, kept (doubt noted).
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address. Same-building neighbours are named in pin_source.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13268713', 'chain: ファイヤーチキン 上野入谷店 — the brand site periperi-chicken.com lists 上野入谷店 and 菊川店 and is recruiting franchisees ("フランチャイズ加盟店 募集スタート"); integrator decision 2026-11-01.');
skip('13297906', 'chain: 全席個室 鮨と酒 魚縁 (Ueno, TSDビル 4F-A) is one of several 魚縁 private-room izakaya — gurunavi lists 寿司居酒屋 魚縁 上野店, 魚縁ほたる上野店 and 日本酒と魚 魚縁 秋葉原店 (page titles in search results, not opened).');

// ================================================================ 鳥四季 上野駅前店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13225372/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['16:00', '23:30']); const WE = day(['14:00', '23:30']);
  put({
    id: 'tokyo_tori_shiki_ueno', name: '鳥四季 上野駅前店 (Tori Shiki)', category: 'OMNI',
    lat: 35.712641, lng: 139.777718, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt-grilled yakitori and sashimi are on the menu, but nothing is described as gluten-free, and fried dishes and hot pots are part of the courses.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken and seafood izakaya (yakitori, sashimi, basashi, dashimaki, tongue carpaccio). Tabelog\'s listing ticks "vegetarian options" but names no dish.',
    hours_raw: 'Mon–Fri and the day before a holiday 16:00–23:30; Sat and Sun 14:00–23:30; holidays 14:00–23:00; no regular closing day, apart from building closures (Tabelog). Reservations taken; 2-hour limit when busy. 130 seats in private rooms for 2 to over 30; the listing notes the rooms have doors but are not fully sealed, and an October 2026 diner could hear neighbouring tables. Designated smoking area; an October 2026 reviewer mentions private rooms where smoking is allowed. Cards and PayPay; no e-money. Menus in English, Chinese and Korean, with photos. DAZN and horse racing on screen. Opened 1 September 2018 (Tabelog). The entrance is separate from the hotel entrance in the same building.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 7-chōme, ニューウエノ 2F — 1 min from JR Ueno Stn Asakusa exit',
    cuisine: 'Private-room izakaya of charcoal-grilled jidori chicken and fresh fish from local producers, with low-temperature-cooked dishes and hot pots (Tabelog) · dishes named in 2026 reviews: yakitori, sashimi, basashi, dashimaki tamago, tongue carpaccio, fried dishes · banquet courses with all-you-can-drink from ¥3,500 (Tabelog)',
    website: null, gmaps: gm('鳥四季 上野駅前店 ニューウエノ'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · Ueno, chicken and fish in private rooms a minute from the station] A second-floor izakaya just outside the Asakusa exit of JR Ueno Station, open since 2018, with 130 seats in private rooms with doors (not fully sealed: one October 2026 diner could hear the next table). The menu is jidori chicken grilled over charcoal, sashimi, basashi, low-temperature-cooked dishes and hot pots, with a long drinks list and all-you-can-drink courses from ¥3,500. Repeat visitors in 2026 praise generous portions, fast service and private rooms where smoking is allowed. The listing says the shop is run by Japanese owners. It shares a phone number with Oden to Meshi Hanamidou in the same building.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 September 2018 (Tabelog)', background: 'A corporate-member Tabelog listing, which states "Our establishment is managed by Japanese owners!" The listing\'s phone number, 03-5830-7319, is the same as on the Tabelog listing of Oden to Meshi Hanamidou in the same building (tokyo_oden_to_meshi_hanamido_ueno). No source names the operator or chef.', philosophy: null, specialty: 'Jidori yakitori; sashimi; private rooms.',
      anecdotes: [
        { text: '"The menu features a variety of dishes including sashimi, basashi (raw horse meat), and yakitori… The yakitori, in particular, was delicious." — October 2026.', source: R + 'B534098679/' },
        { text: '"My favorite dish from last time was the dashimaki tamago (Japanese rolled omelette), but when I checked the menu, I found my beloved tongue carpaccio and had to order it!" — October 2026.', source: R + 'B536570846/' },
        { text: '"I chose to use a private room, but I was a bit disappointed that I could hear a lot of conversations and voices from the surrounding tables." — October 2026.', source: R + 'B537977298/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鳥四季 上野駅前店、上野7-2-5 ニューウエノ 2F、JR上野駅浅草口から徒歩1分 (ホテルの入口とは別)、月〜金・祝前日16:00〜23:30、土日14:00〜23:30、祝日14:00〜23:00、定休日なし (ビルの休館日を除く)、混雑時は2時間制、130席、2名から30名以上の個室 (扉付きだが完全には仕切られていない)、分煙、カード・PayPay 可、英語・中国語・韓国語の写真付きメニュー、DAZN と競馬中継、日本人オーナーの経営、2018年9月1日オープン、地鶏の炭火焼き鳥と生産者直送の鮮魚、低温調理、鍋、飲み放題付きの宴会コース3,500円から、電話番号はおでんとメシ はなみ堂と同じ。口コミ(2026年5月〜10月): 何度も通う人が多い、駅から近い、量が多い、提供が早い、個室でたばこが吸える、焼き鳥、刺身、馬刺し、だし巻き玉子、タンのカルパッチョ、揚げ物、個室でも周りの声が聞こえたという声。',
      confidence: 'medium', sources: [TB, 'https://tabelog.com/en/tokyo/A1311/A131101/13289752/', R + 'B521231551/', R + 'B522738474/', R + 'B528036903/', R + 'B528037022/', R + 'B530644598/', R + 'B534098679/', R + 'B536570846/', R + 'B537489260/', R + 'B537977298/', R + 'B538170994/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists menus in English, Chinese and Korean, with photos.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野7-2-5 ニューウエノ 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.712701, 139.777718); same building as Oden to Meshi Hanamidou (tokyo_oden_to_meshi_hanamido_ueno, address_ja "東京都台東区上野7-2-5 ニューウエノ 2F-D", pinned 3 m from this Tabelog point), so this pin is offset ~7 m south to keep the two apart; GSI 東京都台東区上野七丁目2番5号 (go) 25m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu prices published on Tabelog; course price from the listing.', last_checked: TODAY, items: [
      it('', '', 'Banquet course with all-you-can-drink', '¥3,500', 'Course', 'ask', 'no', 'Tabelog ("starting at 3,500 yen").', 'course'),
      it('', '', 'Tongue carpaccio', '', 'Dishes', 'ask', 'no', 'October 2026 review.', 'tongue_carpaccio'),
      it('', '', 'Dashimaki tamago', '', 'Dishes', 'ask', 'no', 'October 2026 review.', 'dashimaki'),
    ] }, {
    cuisine: '炭火の地鶏の焼き鳥と生産者直送の鮮魚の個室居酒屋。低温調理や鍋も (食べログ)・2026年の口コミに出てくる料理: 焼き鳥、刺身、馬刺し、だし巻き玉子、タンのカルパッチョ、揚げ物・飲み放題付きの宴会コース3,500円から (食べログ)',
    neighborhood: '上野七丁目、ニューウエノ 2F。JR上野駅浅草口から徒歩1分',
    gf_detail: '要確認。塩の焼き鳥や刺身はあるが、グルテンフリーの説明はなく、コースには揚げ物や鍋も入る。',
    vegan_detail: 'ヴィーガンではありません。鶏と魚の居酒屋 (焼き鳥、刺身、馬刺し、だし巻き、タンのカルパッチョ)。食べログには「ベジタリアンメニューあり」の印があるが、料理名は書かれていません。',
    notes: '[居酒屋・上野、駅から1分の個室で鶏と魚] JR上野駅浅草口を出てすぐの2階、2018年からの居酒屋で、130席が扉付きの個室 (完全には仕切られておらず、2026年10月には隣の声が聞こえたという人も)。炭火で焼く地鶏、刺身、馬刺し、低温調理の料理、鍋に、酒の種類も多く、飲み放題付きのコースは3,500円から。2026年に何度も通う人たちは量の多さ、提供の早さ、たばこが吸える個室を評価している。食べログには日本人オーナーの経営とある。同じビルのおでんとメシ はなみ堂と電話番号が同じ。',
  });
}

// ================================================================ 全席個室 九州うまいもん 酒兵衛 上野店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13297907/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['13:00', '24:00']); const WE = day(['12:00', '24:00']);
  put({
    id: 'tokyo_sakebei_ueno', name: '全席個室 九州うまいもん 酒兵衛 上野店 (Sakebei)', category: 'OMNI',
    lat: 35.712485, lng: 139.777717, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the Kyushu dishes include chicken nanban, goma saba, fried dishes, fried rice and motsunabe; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: horse sashimi, beef tongue, chicken, mackerel and motsunabe. Tabelog\'s listing ticks "vegetarian options" but names no dish.',
    hours_raw: 'Mon–Fri and the day before or after a holiday 13:00–24:00; Sat, Sun and holidays 12:00–24:00 (Tabelog). Reservations taken; seat-only bookings must order two dishes and two drinks each; 2-hour limit on Fri, Sat and the day before a holiday, and for everyone in December, when a ¥500 year-end charge per person also applies; same-day cancellations charged. 50 seats in private rooms with doors, for 2 to over 30. Designated smoking area. Cards only (no e-money or QR). Ordering by tablet (January 2025). Opened 1 July 2024 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 7-chōme, TSDビル 4F-B, reached by the pedestrian bridge from the station — 1 min from JR Ueno Stn',
    cuisine: 'Kyushu dishes and seafood in private rooms (Tabelog) · banquet course with 3-hour all-you-can-drink ¥3,980 (listed ¥4,980): Kumamoto horse sashimi, Hakata goma saba, Miyazaki chicken nanban, Saga beef tongue as carpaccio, grilled and skewered, the head chef\'s fried rice and dessert (Tabelog course text) · courses "from ¥3,280" in a February 2025 review; about ¥4,800 for a meat course in February 2026 · also sashimi platters, meat sushi, roast beef, motsunabe, mentaiko salad, octopus with wasabi (2024–2025 reviews) · about 20 Japanese sakes (February 2025 review)',
    website: null, gmaps: gm('酒兵衛 上野店 TSDビル'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · Ueno, Kyushu dishes behind closed doors] A fourth-floor private-room izakaya a minute from Ueno Station across the pedestrian bridge, opened in July 2024. The draw is a party course of Kyushu specialities with three hours of drinks: Kumamoto horse sashimi, Hakata goma saba, Miyazaki chicken nanban and Saga beef tongue served three ways, from ¥3,980 by coupon. Early reviewers (late 2024 to early 2025) liked the thick sashimi, the goma saba and the tongue carpaccio, though one waited 40 minutes for sashimi; a December 2025 diner found the seating cramped and a fish starter off, and won't return, while a February 2026 group praised the fast pace of a ¥4,800 course. Seat-only bookings must order two dishes and two drinks each. Cards only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 July 2024 (Tabelog)', background: 'A corporate-member Tabelog listing; the course text mentions a head chef (料理長) but no name. No source names the operator.', philosophy: null, specialty: 'Kyushu course: horse sashimi, goma saba, chicken nanban, Saga beef tongue.',
      anecdotes: [
        { text: '"The standout dish was the \'Saga Beef Tongue Carpaccio.\' The thinly sliced tongue was tender and melted in my mouth… The horse sashimi I had been looking forward to was very thick." — January 2025.', source: R + 'B499329969/' },
        { text: '"The place was almost full, and the seating was cramped, with my feet bumping into the person next to me. Although they promote it as Kyushu delicacies, I was disappointed. The appetizer fish had a bit of an off smell." — December 2025.', source: R + 'B519780695/' },
        { text: '"I ordered a course meal for about JPY 4,800. The course focused on meat dishes and included an all-you-can-drink option. The pace at which the courses were served was incredibly fast." — February 2026.', source: R + 'B523001003/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 全席個室 九州うまいもん 酒兵衛 上野店、上野7-3-2 TSDビル 4F-B、上野駅から徒歩1分、月〜金・祝前日・祝後日13:00〜24:00、土日祝12:00〜24:00、席のみの予約は1人2品2ドリンク、金土・祝前日は2時間制、12月は全員2時間制で年末料金1人500円、50席、扉付きの個室 (2名から30名以上)、分煙、カードのみ、2024年7月1日オープン、3時間飲み放題付きの宴会コース3,980円から。コースの説明 (日本語): 熊本県産の馬刺しや博多名物の胡麻サバ、宮崎名物のチキン南蛮に加え、佐賀牛タンはカルパッチョ・網焼き・串焼きと異なる仕立て、〆には料理長特製の香味チャーハン、本日のデザート。口コミ(2024年11月〜2026年2月): 刺身の盛り合わせ (サラダから約40分待った)、肉寿司、ローストビーフ、もつ鍋、明太子のサラダ、牛タンのカルパッチョ、厚切りの馬刺し、胡麻サバ、チキン南蛮、タブレットで注文、日本酒は約20種、飲み放題付きコースは3,280円からという声 (2025年2月)、席が狭く前菜の魚ににおいがあったという声 (2025年12月)、約4,800円の肉中心のコースは提供が早い (2026年2月)。',
      confidence: 'medium', sources: [TB, R + 'B496286943/', R + 'B496956110/', R + 'B498932418/', R + 'B498932711/', R + 'B499329969/', R + 'B499804169/', R + 'B500763093/', R + 'B500775906/', R + 'B519780695/', R + 'B523001003/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by tablet (January 2025); no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野7-3-2 TSDビル 4F-B',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing (December 2026 rules posted); reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.712445, 139.777717); same building as Biken Shokudo Sanyokaitai (tokyo_sanyokaitai_ueno, TSDビル 2F, this batch), whose Tabelog point is 1 m away, so the two pins are offset ~4 m north (this one) and ~4 m south; GSI 東京都台東区上野七丁目3番2号 (go) 10m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B500763093/', R + 'B523001003/'],
    price_note: 'Course price from the Tabelog listing (coupon price, tax included); other prices from reviews.', last_checked: TODAY, items: [
      it('', '', 'Kyushu banquet course: horse sashimi, goma saba, chicken nanban, Saga beef tongue three ways, fried rice, dessert; 3-hour drinks', '¥3,980', 'Course', 'no', 'no', 'Tabelog (listed ¥4,980); "from ¥3,280" in a February 2025 review.', 'kyushu_course'),
      it('', '', 'Meat-focused course with all-you-can-drink', '¥4,800', 'Course', 'no', 'no', 'February 2026 review ("about JPY 4,800").', 'meat_course'),
    ] }, {
    cuisine: '個室で九州の料理と魚介 (食べログ)・3時間飲み放題付きの宴会コース3,980円 (通常4,980円): 熊本県産の馬刺し、博多名物の胡麻サバ、宮崎名物のチキン南蛮、佐賀牛タンのカルパッチョ・網焼き・串焼き、料理長特製の香味チャーハン、デザート (食べログのコースの説明)・2025年2月の口コミではコースは「3,280円から」、2026年2月は肉中心のコースで約4,800円・ほかに刺身の盛り合わせ、肉寿司、ローストビーフ、もつ鍋、明太子のサラダ、たこわさ (2024〜2025年の口コミ)・日本酒は約20種 (2025年2月の口コミ)',
    neighborhood: '上野七丁目、TSDビル 4F-B、駅から歩道橋で。JR上野駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。九州の料理にはチキン南蛮、胡麻サバ、揚げ物、チャーハン、もつ鍋がある。グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンではありません。馬刺し、牛タン、鶏、さば、もつ鍋。食べログには「ベジタリアンメニューあり」の印があるが、料理名は書かれていません。',
    notes: '[居酒屋・上野、扉付きの個室で九州の料理] 上野駅から歩道橋を渡って1分、ビルの4階にある全席個室の居酒屋で、2024年7月の開店。目玉は3時間飲み放題付きの九州名物の宴会コースで、熊本の馬刺し、博多の胡麻サバ、宮崎のチキン南蛮、佐賀牛タンの3種の仕立てが、クーポンで3,980円から。2024年末から2025年初めの口コミでは厚切りの刺身、胡麻サバ、牛タンのカルパッチョが好評 (刺身を40分待ったという人も)。2025年12月には席が狭く前菜の魚ににおいがあったのでもう行かないという声、2026年2月には4,800円のコースの提供が早いと好評。席のみの予約は1人2品2ドリンクの注文が必要。支払いはカードのみ。',
  });
}

// ================================================================ 美健食道 三羊開泰
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13273256/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['17:00', '23:30']);
  put({
    id: 'tokyo_sanyokaitai_ueno', name: '美健食道 三羊開泰 (Biken Shokudo Sanyokaitai)', category: 'OMNI',
    lat: 35.712401, lng: 139.777706, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. In the hot-pot courses you pick vegetables, mushrooms, tofu, meat and seafood yourself, but none of the soups (medicinal, white broth, spicy) is described as gluten-free, and the all-you-can-eat counter includes boiled dumplings and noodles.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog\'s listing ticks "vegetarian options", and vegetables, mushrooms and tofu are all-you-can-eat with the hot pots, but the soups are built on lamb, beef and medicinal broths and none is described as meat-free.',
    hours_raw: 'Daily 11:00–15:00 and 17:00–23:30 (last order 23:00) (Tabelog). Reservations taken. Lunch sets come with a salad bar (September 2026). 66 seats with private rooms for 4 to 20; non-smoking, smoking corner outside. Cards, Suica and PayPay. Children welcome. Opened 15 April 2022 (Tabelog). A July 2026 diner was put off by fruit flies; a September 2026 diner found service slow and an order forgotten, apparently from short staffing.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 7-chōme, TSDビル 2F — 1 min from JR Ueno Stn; 2 min from Ueno Stn (Ginza and Hibiya lines)',
    cuisine: 'Chinese and Taiwanese cooking "tailored to Japanese tastes", centred on lamb, medicinal hot pot and all-you-can-eat shabu-shabu (Tabelog) · 2-hour all-you-can-eat courses: medicinal hot pot and shabu-shabu course C with three soups, lamb, beef, pork, wagyu offal, white fish and shrimp ¥3,480 (listed ¥3,980); spicy beef-tendon hot pot ¥3,065 (30% off ¥4,378) (Tabelog, tax included) · all-you-can-drink from ¥1,320 for 2 hours · lamb spine ("Yangxiezi"), slow-cooked lamb shank, lamb horumon soup hot pot with thick vermicelli and spam, mapo tofu lunch with salad bar and egg soup (2026 reviews)',
    website: null, gmaps: gm('美健食道 三羊開泰 上野7-3-2'), menu_url: TB + 'dtlmenu/',
    notes: "[Chinese hot pot · Ueno, lamb and medicinal hot pots by the station] A second-floor Chinese and Taiwanese restaurant a minute from Ueno Station, opened in 2022, built around lamb: tender lamb spine (Yangxiezi) and slow-cooked bone-in lamb shank, plus medicinal and spicy hot pots and all-you-can-eat shabu-shabu with self-serve vegetables, mushrooms, tofu and noodles. Two-hour courses run about ¥3,000–3,500 by coupon; lunch brings hot-pot sets and a daily mapo tofu with a salad bar. A July 2026 regular on a ninth visit found it full of Chinese diners at lunch. Reviews in July–September 2026 are mixed: tender lamb and friendly staff, but fruit flies at one July lunch and slow, short-staffed service in September.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 April 2022 (Tabelog)', background: 'A corporate-member Tabelog listing; no source names the operator or chef.', philosophy: null, specialty: 'Lamb spine; lamb shank; medicinal hot pot.',
      anecdotes: [
        { text: '"This restaurant specializes in lamb. I found myself enjoying hot pot among a crowd of Chinese diners who always indulge in lamb." — July 2026, ninth visit.', source: R + 'B485779132/' },
        { text: '"The taste was undeniably delicious, but there were too many fruit flies, which made it hard to focus on my meal." — July 2026, hot-pot set meal.', source: R + 'B531935193/' },
        { text: '"The slow-cooked lamb shank is incredibly tender, falling off the bone effortlessly… The all-you-can-eat vegetables, tofu, and noodles were also fresh." — September 2026.', source: R + 'B535799762/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 美健食道 三羊開泰、上野7-3-2 TSDビル 2F、JR上野駅から徒歩1分、毎日11:00〜15:00・17:00〜23:30 (L.O.23:00)、66席、4〜20名の個室、禁煙 (店外に喫煙所)、カード・Suica・PayPay 可、子ども可、2022年4月15日オープン、日本人向けの中華と台湾料理、羊肉の料理、薬膳鍋、しゃぶしゃぶ食べ放題、2時間の薬膳鍋としゃぶしゃぶ食べ放題コースC 3,480円 (通常3,980円)、牛すじの辛い鍋の食べ放題3,065円 (4,378円の30%引き)、2時間飲み放題1,320円から。口コミ(2026年7月〜9月): 羊のホルモンのスープ鍋 (太い春雨とスパム入り)、昼は中国の客が多い、コバエが多かった (2026年7月)、ゆでた餃子、麻婆豆腐のランチ (サラダバーと卵スープ付き)、羊の背骨 (Yangxiezi)、骨付きの羊のすね肉、食べ放題の野菜と豆腐と麺、人手不足で提供が遅く注文を忘れられた (2026年9月)、スタッフは親切。',
      confidence: 'medium', sources: [TB, R + 'B485779132/', R + 'B531935193/', R + 'B532989835/', R + 'B533399090/', R + 'B534939273/', R + 'B535799762/', R + 'B535800226/', R + 'B535970241/', R + 'B535978716/', R + 'B536459964/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-serve counters for hot-pot ingredients; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野7-3-2 TSDビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB} (35.712441, 139.777706); same building as Sakebei (tokyo_sakebei_ueno, TSDビル 4F-B, this batch), whose Tabelog point is 1 m away, so this pin is offset ~4 m south and Sakebei's ~4 m north; GSI 東京都台東区上野七丁目3番2号 (go) 9m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (coupon prices, tax included).', last_checked: TODAY, items: [
      it('', '', 'Medicinal hot pot and shabu-shabu all-you-can-eat course C (2 hours, three soups)', '¥3,480', 'Hot pot', 'ask', 'ask', 'Tabelog; listed ¥3,980.', 'course_c'),
      it('', '', 'Spicy beef-tendon hot pot all-you-can-eat (2 hours)', '¥3,065', 'Hot pot', 'ask', 'no', 'Tabelog; 30% off ¥4,378.', 'beef_tendon'),
      it('', '', '2-hour all-you-can-drink', '¥1,320', 'Drinks', 'ask', 'ask', 'Tabelog ("from").', 'nomihodai'),
    ] }, {
    cuisine: '「日本人向けに」した中華と台湾料理。羊肉、薬膳鍋、しゃぶしゃぶ食べ放題が中心 (食べログ)・2時間の食べ放題コース: 3種のスープの薬膳鍋としゃぶしゃぶのコースC (羊、牛、豚、和牛ホルモン、白身魚、海老) 3,480円 (通常3,980円)、牛すじの辛い鍋3,065円 (4,378円の30%引き) (食べログ、税込み)・2時間飲み放題1,320円から・羊の背骨 (Yangxiezi)、じっくり煮た羊のすね肉、太い春雨とスパム入りの羊のホルモンのスープ鍋、サラダバーと卵スープ付きの麻婆豆腐のランチ (2026年の口コミ)',
    neighborhood: '上野七丁目、TSDビル 2F。JR上野駅から徒歩1分、銀座線・日比谷線上野駅から徒歩2分',
    gf_detail: '要確認。鍋のコースでは野菜、きのこ、豆腐、肉、魚介を自分で選べるが、スープ (薬膳、白湯、辛いスープ) にグルテンフリーの説明はなく、食べ放題のコーナーにはゆでた餃子や麺もある。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」の印があり、鍋には野菜、きのこ、豆腐が食べ放題で付くが、スープは羊、牛、薬膳のだしで、肉を使わないと書かれたスープはありません。',
    notes: '[中華の鍋・上野、駅前で羊と薬膳鍋] 上野駅から1分、ビルの2階にある中華・台湾料理の店で、2022年の開店。羊が中心で、やわらかい羊の背骨 (Yangxiezi) や骨付きの羊のすね肉の煮込み、薬膳鍋や辛い鍋、野菜、きのこ、豆腐、麺を自分で取るしゃぶしゃぶ食べ放題がある。2時間のコースはクーポンで約3,000〜3,500円。昼は鍋の定食や日替わりの麻婆豆腐にサラダバーが付く。2026年7月に9回目という常連は、昼は中国の客でいっぱいだったという。2026年7月〜9月の口コミは分かれていて、羊がやわらかくスタッフが親切という声の一方、7月の昼にはコバエが多かった、9月には人手不足で提供が遅かったという声も。',
  });
}

// ================================================================ 本格中華・北京ダック専門店 北京カォヤーテン 上野店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13278864/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '23:00']);
  put({
    id: 'tokyo_peking_kaoyaten_ueno', name: '本格中華・北京ダック専門店 北京カォヤーテン 上野店 (Peking Kaoyaten)', category: 'OMNI',
    lat: 35.711697, lng: 139.774357, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog\'s listing says allergy information is available, but no dish is described as gluten-free; Peking duck comes in wheat pancakes, and the menu leans on dim sum, xiaolongbao, buns and sauces.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog\'s listing ticks "vegetarian options", but no vegetarian dish is named; the menu is built on duck, pork, beef and seafood.',
    hours_raw: 'Daily 11:00–23:00 (last order 22:30); open all year (Tabelog). Reservations taken; private rooms bookable for dinner (ask by phone for lunch). 240 seats on the listing ("up to 300 guests" in its introduction; a November 2026 diner described a "nearly 100-seat" dining area) with five private rooms for 6 to 70 (the introduction says 6 to 40). Non-smoking, with a separate smoking room. Cards, e-money and QR. Children welcome, kids\' menu. Opened 1 December 2022 per the listing\'s opening date; its anniversary course text puts the third anniversary on 5 December 2025.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno-kōen, UENO3153 1F, at the crossing in front of Ueno Stn — 1 min from JR Ueno Stn Shinobazu exit, Ueno Stn exit 7 and Keisei Ueno Stn',
    cuisine: 'Beijing cooking with Sichuan, Shanghai and Cantonese dishes; wood-fired Peking duck carved at the table by a chef trained at a famous Peking-duck restaurant in China (Tabelog) · all-you-can-eat plan of 140 dishes in 120 minutes from ¥4,680 · courses: 10 dishes from ¥2,980; 8 dishes with Peking duck, shark-fin shumai and 2-hour drinks ¥3,980; 12-dish anniversary course with drinks ¥6,000 (Tabelog, tax included) · lunch sets under ¥2,000 with a choice of Peking duck rolls, xiaolongbao or drink bar (October 2026) · seafood shumai, shark-fin shumai, xiaolongbao, mapo tofu, fried rice, sea cucumber (2026 reviews)',
    website: 'https://pekingduckstoreueno.foodre.jp/', gmaps: gm('北京カォヤーテン 上野店 UENO3153'), menu_url: TB + 'dtlmenu/',
    notes: "[Chinese · Ueno, Peking duck and all-you-can-eat in front of the station] A huge ground-floor Chinese restaurant in UENO3153 by the Shinobazu exit, open since December 2022 and all day. The sign is wood-fired Peking duck, carved at the table by a chef trained at a famous duck house in China; around it come Beijing, Sichuan, Shanghai and Cantonese dishes, dim sum, a 140-dish all-you-can-eat plan from ¥4,680 and party courses from ¥2,980. At lunch, sets under ¥2,000 can include two duck rolls. Diners in October–November 2026 praised the shark-fin shumai, fried rice and duck, and found it full and popular with overseas tourists; one October 2026 diner met curt service and found the food disappointing, and another thought two restaurants shared the space. Private rooms for groups.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 December 2022 (Tabelog opening date; the listing\'s course text marks a third anniversary on 5 December 2025)', background: 'Per Tabelog\'s listing (corporate member), the Peking duck is carved by "our skilled chef, trained at the famous \'Peking Duck\' restaurant in China"; the restaurant is unnamed. The page title gives the name 北京烤鴨店. No source names the chef or operator.', philosophy: null, specialty: 'Wood-fired Peking duck; shark-fin shumai.',
      anecdotes: [
        { text: '"I was met with a rather unfriendly response, telling me to \'find it myself.\'… As for the food, it didn\'t quite meet my expectations overall." — October 2026.', source: R + 'B537027774/' },
        { text: '"The lunch set allows you to choose from options like a drink bar and xiaolongbao, but I opted for the Peking duck. Two rolls were just the right amount." — October 2026.', source: R + 'B538366978/' },
        { text: '"As expected in Ueno, the nearly 100-seat dining area was fully packed and buzzing with energy!" — November 2026, Sunday lunch, ¥3,980 course.', source: R + 'B538492386/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 本格中華・北京ダック専門店 北京カォヤーテン 上野店 (ページの題名では北京烤鴨店)、上野公園1-57 UENO3153 1F、JR上野駅不忍口・東京メトロ上野駅7番出口・京成上野駅から徒歩1分、毎日11:00〜23:00 (L.O.22:30)、年中無休、240席 (紹介文では最大300名)、個室5室 (6〜70名、紹介文では6〜40名)、禁煙 (喫煙室あり)、カード・電子マネー・QR可、子ども可、キッズメニュー、2022年12月1日オープン (コースの説明では2025年12月5日に3周年)、北京料理に四川・上海・広東料理、中国の有名な北京ダックの店で修業した料理人が席で切り分ける薪窯の北京ダック、140品120分の食べ放題4,680円から、10品のコース2,980円から、北京ダックとふかひれ焼売の8品と2時間飲み放題3,980円、3周年記念の12品6,000円。口コミ(2026年9月〜11月): 北京ダック、ふかひれ焼売、海鮮焼売、小籠包、チャーハン、麻婆豆腐、なまこ、2,000円以下のランチで北京ダック2本、海外の観光客に人気、2つの店が一緒になっているようだという声、10月には接客がそっけなく料理も期待外れだったという声、日曜の昼は約100席の店内が満席。',
      confidence: 'medium', sources: [TB, R + 'B536476579/', R + 'B536816452/', R + 'B537027774/', R + 'B537731148/', R + 'B537777383/', R + 'B538050581/', R + 'B538333150/', R + 'B538366978/', R + 'B538478940/', R + 'B538492386/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Popular with overseas tourists (October 2026); no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野公園1-57 UENO3153 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; same building as Sanseira Mei Shi Juukei Hinabe (tokyo_sanseira_chongqing_hotpot_ueno, address_ja "東京都台東区上野公園1-57-7 UENO3153 3F"), whose pin is 9 m away, so no offset; GSI 東京都台東区上野公園1番57号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B538478940/'],
    price_note: 'Prices from the Tabelog listing (tax included) and October–November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat plan, 140 dishes, 120 minutes', '¥4,680', 'All-you-can-eat', 'ask', 'ask', 'Tabelog ("starting from").', 'tabehodai'),
      it('', '', 'Course: 8 dishes with Peking duck and shark-fin shumai, 2-hour drinks', '¥3,980', 'Course', 'no', 'no', 'Tabelog; November 2026 reviews.', 'course_3980'),
      it('', '', 'Course: 10 dishes', '¥2,980', 'Course', 'ask', 'ask', 'Tabelog ("starting from").', 'course_2980'),
      it('', '', 'Lunch set with two Peking duck rolls', '', 'Lunch', 'no', 'no', 'October 2026 ("under JPY 2000").', 'lunch_duck'),
    ] }, {
    cuisine: '北京料理に四川・上海・広東の料理。中国の有名な北京ダックの店で修業した料理人が席で切り分ける薪窯の北京ダック (食べログ)・140品120分の食べ放題4,680円から・コース: 10品2,980円から、北京ダックとふかひれ焼売の8品と2時間飲み放題3,980円、飲み放題付きの3周年記念の12品6,000円 (食べログ、税込み)・2,000円以下のランチセットに北京ダック2本、小籠包、ドリンクバーから選べる (2026年10月)・海鮮焼売、ふかひれ焼売、小籠包、麻婆豆腐、チャーハン、なまこ (2026年の口コミ)',
    neighborhood: '上野公園、UENO3153 1F、上野駅前の交差点。JR上野駅不忍口、東京メトロ上野駅7番出口、京成上野駅から徒歩1分',
    gf_detail: '要確認。食べログにはアレルギー表示ありとあるが、グルテンフリーの料理は書かれていません。北京ダックは小麦の皮で包み、点心、小籠包、まんじゅう、たれの料理が多い。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」の印があるが、料理名は書かれていません。料理は鴨、豚、牛、魚介が中心。',
    notes: '[中華・上野、駅前の北京ダックと食べ放題] 不忍口の前、UENO3153の1階にある大きな中華料理店で、2022年12月から通しで営業。看板は薪窯の北京ダックで、中国の有名な店で修業した料理人が席で切り分ける。ほかに北京、四川、上海、広東の料理、点心、140品の食べ放題 (4,680円から)、2,980円からの宴会コース。昼は2,000円以下のセットに北京ダック2本を付けられる。2026年10月〜11月の口コミでは、ふかひれ焼売、チャーハン、北京ダックが好評で、店は満席、海外の観光客にも人気。10月には接客がそっけなく料理も期待外れだったという人や、2つの店が同じ場所にあるようだという人も。グループには個室。',
  });
}

save();
