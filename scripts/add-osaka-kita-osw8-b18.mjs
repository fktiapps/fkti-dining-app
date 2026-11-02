// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), NOTABLE phase, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 18.
//   + 大衆肉酒場 こだわり米 匠 Taishu Niku Sakaba Kodawari Kome Takumi (27068763, by id per the coordinator: the 匠 group's meat-and-rice izakaya,
//     Oita wagyu from the group's own farm with rice cooked to order; Tabelog Yakiniku 100 2023)
//   + 個室焼肉匠 Private Rooms Yakiniku Takumi (the 匠 group's private-room yakiniku; drafted as the group's one yakiniku shop per the coordinator;
//     焼肉 匠 本店 27117961 and ニュー焼肉食堂匠 are to be skipped as same-concept branches when they come up)
//   + マキノマキ Makino Maki (Hakata-style vegetable-roll skewers by Nishinakajima-Minamigata, open to 1:00)
//   + カサブランカ Casablanca (a couple's seafood izakaya with rare sake and dry curry in Higashi-Mikuni, since 1994)
//   Group: 株式会社匠 (takumi.farm, read 2026-11-02) runs 焼肉匠 本店, 大衆肉酒場こだわり米匠, 個室焼肉匠, ニュー焼肉食堂匠, 黒毛和牛研究所 and
//   豆皿おばんざい匠; the coordinator ruled them sister concepts. Makino Maki and Casablanca: one shop each (Tabelog; web search 2026-11-02).
//   None is in data/osaka.json by id or name. 個室焼肉匠 shares the lot 西中島4-8-30 with 悠楽 (osaka_yuraku_nishinakajima, 山よしビル 1F, here
//   サンライズビル 102) and its Tabelog point falls on the same spot (0 m): two shops in one building, flagged as a stacked pin. Kodawari Kome and
//   Makino Maki have records 29–57 m away at other addresses; Casablanca none within 60 m.
//   open_late per Greg's rule (after 22:00 is late): both 匠 shops to 23:00 and Makino Maki to 1:00 set true; Casablanca 22:00 false.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const GROUP = 'https://takumi.farm/';

// ================================================================ 大衆肉酒場 こだわり米 匠
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27068763/'; const R = TB + 'dtlrvwlst/';
  const D = ['17:00', '23:00'];
  put({
    id: 'osaka_kodawari_kome_takumi_nishinakajima', name: '大衆肉酒場 こだわり米 匠 (Taishu Niku Sakaba Kodawari Kome Takumi)', category: 'OMNI',
    lat: 34.725832, lng: 135.496579, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sukiyaki-style kalbi in soy-based sauce, marinated cuts and sauces; cold noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku and meat house.',
    hours_raw: 'Mon–Fri 17:00–23:00; Sat, Sun and holidays 12:00–15:00 and 17:00–23:00 (food last order 22:00, drinks 22:30; lunch last order 14:00); closures not fixed (Tabelog). Reservations online at any time; for 7 or more, phone (Tabelog). Entry needs free registration in the Takumi fan club (a LINE friend), also possible at the door (Tabelog). Cards and PayPay (Tabelog). 52 seats, a U-shaped counter after renovation, tables and private rooms for 4–20 (Tabelog; September 2026). Non-smoking; free Wi-Fi; children welcome (Tabelog). One drink per person at lunch (August 2026).',
    hours: { 0: day(D), 1: day(D), 2: day(D), 3: day(D), 4: day(D), 5: day(['12:00', '15:00'], D), 6: day(['12:00', '15:00'], D) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島4-8-11 大阪屋北1号館 1F, 5 min from Nishinakajima-Minamigata or Hankyu Minamikata, 10 min from JR Shin-Osaka, along the tracks (Tabelog; September 2026)',
    cuisine: 'Meat izakaya and yakiniku built around rice as much as beef (Tabelog; reviews) · Oita wagyu from the group’s own farm (group site; 2026) · rice cooked to order in a clay pot, a blend of Yume Shizuku and Tsuki Akari, 1 or 2 go per table; leftovers made into onigiri to take home (2026) · courses ¥5,000, ¥6,000 (with all you can eat rice) and ¥7,000 (2026): kimchi, namul, cabbage; seared beef sushi, salt tongue, three rare Oita wagyu cuts, thick-cut harami, sukiyaki-style kalbi over rice with egg, "grilled shabu-shabu", oxtail or chicken-and-egg soup (2026) · "ultimate yakiniku block", chosen from vacuum-packed cuts and served like roast beef (October 2026) · cold noodles to finish (2026)',
    website: 'https://takumi.farm/nikusakaba-takumi/', gmaps: gm('大衆肉酒場 こだわり米 匠 西中島'), menu_url: null,
    notes: '[Yakiniku · Nishinakajima-Minamigata, wagyu from the group’s own farm and rice cooked for your table] A 52-seat meat izakaya along the tracks five minutes from Nishinakajima-Minamigata, in Tabelog’s Yakiniku 100 for 2023 and a Hot Restaurant in 2025 and 2026. The Takumi group raises its own Oita wagyu, and the ¥5,000–7,000 courses run from seared beef sushi and thick tongue to sukiyaki-style kalbi laid on rice; the rice itself is the other star, cooked in a clay pot for each table, with what you leave made into onigiri to take home (2026). Register free with the group’s LINE fan club to enter. Open to 23:00; lunch at weekends.',
    chef_bio: { chef_name: null, roles: ['Kitchen and grill staff of the 匠 group (unnamed)'], origin: null,
      background: 'Per the group site (takumi.farm, read 2026-11-02): the 匠 group began with a barbecue business in 2010, now runs its own farm, restaurants in Nishinakajima (焼肉匠 本店, 大衆肉酒場こだわり米匠, 個室焼肉匠, ニュー焼肉食堂匠, 黒毛和牛研究所 and 豆皿おばんざい匠, opened 15 September 2026) and mail order; 15th anniversary in 2026. Per the shop-maintained Tabelog listing: Tabelog Yakiniku WEST 100 in 2023; Hot Restaurant 2025 and 2026; "the Takumi Group has returned to its roots ... the most important thing we must cherish at all times is our fans and customers", hence the fan-club entry. Per reviews: "Following the staff’s recommendation ... I chose the JPY 5,000 course" (October 2026); "[the staff] kindly explained the menu and recommended dishes" (September 2026); "the staff kindly made the leftovers into onigiri for us" (October 2026).',
      philosophy: 'Yakiniku "with white rice", as the name Kodawari Kome (particular about rice) says (Tabelog; September 2026 review).', specialty: 'Oita wagyu courses with clay-pot rice.',
      anecdotes: [
        { text: '"They serve a blend of the varieties Yume Shizuku and Tsuki Akari, which I initially thought was a bit too soft, but after some time, it became just right." — September 2026, ¥7,000 course.', source: R + 'B536907903/' },
        { text: '"The moment it melts in your mouth, it feels like ice cream or butter dissolving." — September 2026, the large grilled beef sushi.', source: R + 'B536240161/' },
        { text: '"I usually dislike fatty meat, but I was able to enjoy it until the end without feeling sick." — October 2026.', source: R + 'B537731661/' },
      ],
      japanese_sources_summary: 'グループのサイト (takumi.farm): 株式会社匠、大阪西中島、2010年のBBQ事業から始まり、自社牧場、飲食店 (焼肉匠 本店、大衆肉酒場こだわり米匠、個室焼肉匠、ニュー焼肉食堂匠、黒毛和牛研究所、2026年9月15日オープンの豆皿おばんざい匠)、通販、15周年。食べログ (店舗会員): 大衆肉酒場 こだわり米 匠、焼肉・ホルモン・ステーキ、大阪市淀川区西中島4-8-11 大阪屋北1号館 1F、西中島南方駅と阪急南方駅から徒歩5分、月〜金17:00〜23:00、土日祝12:00〜15:00、17:00〜23:00、不定休、カード・PayPay 可、52席、個室、禁煙、匠ファンクラブ (LINE) の登録が入店の条件、焼肉 WEST 百名店 2023、ホットレストラン 2025・2026。口コミ (2026年): 自社牧場の大分の和牛、コース5,000円・6,000円・7,000円、炙り寿司、塩タン、希少部位3種、厚切りハラミ、すき焼きカルビ、土鍋で炊くごはん (Yume Shizuku と Tsuki Akari のブレンド、1合か2合)、残りはおにぎりにして持ち帰り、ultimate yakiniku block、冷麺、テールスープ、U字のカウンター。',
      confidence: 'medium', sources: [GROUP, TB, R + 'B362282922/', R + 'B534372635/', R + 'B535042785/', R + 'B535126278/', R + 'B536179336/', R + 'B536240161/', R + 'B536907903/', R + 'B537209709/', R + 'B537231389/', R + 'B537731661/', R + 'B537757036/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu with photos; staff explain the menu (Tabelog; September 2026). Entry needs a LINE fan-club registration. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-8-11 大阪屋北1号館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained Tabelog listing with 2026 awards and the group site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目8番11号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B362282922/', R + 'B536240161/', R + 'B536907903/'],
    price_note: 'Course prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course with rare cuts and clay-pot rice', '¥5,000', 'Courses', 'no', 'no', 'October 2026.', 'course_5000'),
      it('', '', '"Kome Takumi" course with all you can eat rice', '¥6,000', 'Courses', 'no', 'no', 'September 2026.', 'course_6000'),
      it('', '', 'Course', '¥7,000', 'Courses', 'no', 'no', 'September 2026.', 'course_7000'),
    ] }, {
    cuisine: '牛肉と同じくらいごはんにこだわる肉酒場と焼肉 (食べログ、口コミ)・グループの自社牧場の大分の和牛 (グループのサイト、2026年)・ごはんはテーブルごとに土鍋で炊き、Yume Shizuku と Tsuki Akari のブレンド、1合か2合。残りはおにぎりにして持ち帰り (2026年)・コース5,000円、6,000円 (ごはん食べ放題)、7,000円 (2026年): キムチ、ナムル、キャベツ。炙りの牛肉の寿司、塩タン、大分の和牛の希少部位3種、厚切りハラミ、ごはんにのせるすき焼きカルビと卵、焼きしゃぶ、テールか鶏と卵のスープ (2026年)・真空パックの塊から選ぶ ultimate yakiniku block、ローストビーフのように (2026年10月)・締めに冷麺 (2026年)',
    neighborhood: '西中島4-8-11 大阪屋北1号館 1F、西中島南方駅か阪急南方駅から5分、JR 新大阪駅から10分、線路沿い (食べログ、2026年9月)',
    gf_detail: 'グルテンフリーではありません。醤油ベースのたれのすき焼きカルビ、たれの肉とソース。締めの冷麺。',
    vegan_detail: 'ヴィーガンではありません。和牛の焼肉と肉料理の店。',
    notes: '[焼肉・西中島南方、自社牧場の和牛とテーブルごとに炊くごはん] 西中島南方から5分、線路沿いの52席の肉酒場で、食べログ焼肉百名店 2023、ホットレストラン 2025・2026。匠グループは大分の和牛を自社で育て、5,000〜7,000円のコースは炙りの牛肉の寿司や厚いタンから、ごはんにのせるすき焼きカルビまで。もうひとつの主役はごはんで、テーブルごとに土鍋で炊き、残ればおにぎりにして持ち帰れる (2026年)。入店にはグループの LINE ファンクラブへの無料登録が必要。23時まで。週末は昼も。',
  });
}

// ================================================================ 個室焼肉匠
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27092725/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:00']); const WE = day(['12:00', '23:00']);
  put({
    id: 'osaka_koshitsu_yakiniku_takumi_nishinakajima', name: '個室焼肉匠 (Private Rooms Yakiniku Takumi)', category: 'OMNI',
    lat: 34.726041, lng: 135.497455, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sauces and marinated cuts; sukiyaki-style kalbi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku house; raw-egg dishes.',
    hours_raw: 'Mon–Fri 17:00–23:00 (last order 22:30); Sat, Sun and holidays 12:00–23:00 (food last order 22:00, drinks 22:30); closures not fixed; seating limited to 2 hours (Tabelog). Reservations accepted; groups of six or more may be split across neighbouring rooms (Tabelog). Cards and PayPay (Tabelog). 34 seats in rooms for 2 to 30; some rooms are partitioned rather than fully closed, and can feel small for four or get warm (Tabelog; 2026). Non-smoking; free Wi-Fi (Tabelog). Children’s cutlery and drinks (June 2026). Opened 9 June 2016 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島4-8-30 サンライズビル 102, 4–5 min west of Nishinakajima-Minamigata or Hankyu Minamikata, at the back of a building’s ground floor (Tabelog; May and October 2026)',
    cuisine: 'Yakiniku in private rooms over charcoal shichirin (Tabelog; May 2026) · Oita wagyu from the 匠 group (2026) · signature "astonishing grilled yukhoe", seared with a torch and wrapped in egg yolk over rice; charcoal-grilled horumon with yuzu; steamed horumon (2026) · tongue four ways, including the "juicy explosion tongue" (order it early) and negi-shio tongue (2026) · assorted lean, fatty and offal platters labelled by cut; omasum; sukiyaki kalbi; harami (2026) · rice cooked to order in a pot, about 15 minutes (2026) · courses such as the wagyu indulgence course and Oita wagyu full course; Saturday lunch course ¥3,850 (April 2026)',
    website: GROUP, gmaps: gm('個室焼肉匠 西中島'), menu_url: null,
    notes: '[Yakiniku · Nishinakajima-Minamigata, wagyu over charcoal in small private rooms] The 匠 group’s private-room yakiniku, tucked at the back of a building four minutes from Nishinakajima-Minamigata, where small rooms with sliding doors each have a charcoal shichirin (2026). The signature is a torch-seared yukhoe wrapped in egg yolk and laid on pot-cooked rice; tongue comes four ways, and the yuzu-scented grilled horumon is unlike other places, say regulars. Order the rice early, as it takes 15 minutes. Rooms are snug and can get warm. Two-hour seating; open to 23:00, from noon at weekends.',
    chef_bio: { chef_name: null, roles: ['Grill staff of the 匠 group (unnamed)'], origin: null,
      background: 'Per Tabelog: private-room yakiniku, sukiyaki and sushi; opened 9 June 2016. One of the 匠 group’s restaurants in Nishinakajima (takumi.farm, read 2026-11-02). Per reviews: "No matter which location of the Takumi group I visit, the food is always delicious and offers exceptional value!" (August 2026); "The staff were all very pleasant" (August 2026); "the green onions were served separately rather than on top of the raw meat, showing the restaurant’s consideration" (August 2026); one diner found it pricey for the taste (September 2026).',
      philosophy: null, specialty: 'Grilled yukhoe with egg yolk; charcoal-grilled horumon.',
      anecdotes: [
        { text: '"Although it’s called yukhoe, it’s served rare, lightly grilled, and wrapped in egg—absolutely delicious!" — May 2026.', source: R + 'B235427532/' },
        { text: '"The seared horumon had a unique flavor infused with yuzu, unlike anything I’ve tasted elsewhere." — August 2026, wagyu indulgence course.', source: R + 'B517356631/' },
        { text: '"The rice takes about 15 minutes to prepare, so it’s best to order it early." — September 2026.', source: R + 'B536574296/' },
      ],
      japanese_sources_summary: '食べログ: 個室焼肉匠、焼肉・すき焼き・寿司、大阪市淀川区西中島4-8-30 サンライズビル 102、西中島南方駅と阪急南方駅から徒歩5分、月〜金17:00〜23:00、土日祝12:00〜23:00、不定休、2時間制、カード・PayPay 可、34席、2〜30名の個室、禁煙、Wi-Fi、2016年6月9日オープン。匠グループ (takumi.farm) の店。口コミ (2023年〜2026年10月): 大分の和牛、七輪の炭火、名物の炙りユッケを卵黄で包んでごはんに、ゆずの香りの炭火焼きホルモン、蒸しホルモン、4種のタン、ねぎ塩タン、部位ごとの盛り合わせ、センマイ、すき焼きカルビ、釜で炊くごはんは約15分、和牛のコース、土曜のランチコース3,850円、個室はふすまで仕切る小さな部屋、子ども用の食器、どの匠の店もおいしいという声。',
      confidence: 'medium', sources: [GROUP, TB, R + 'B235427532/', R + 'B517356631/', R + 'B525657061/', R + 'B526341749/', R + 'B529214071/', R + 'B529346622/', R + 'B529866188/', R + 'B532970784/', R + 'B533393337/', R + 'B536574296/', R + 'B537432280/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms suit families; children’s cutlery (June 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-8-30 サンライズビル 102',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and group site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目8番30号 (go) 7m; same lot and same Tabelog point as osaka_yuraku_nishinakajima (山よしビル 1F), a different building (サンライズビル), so moved 5 m north to keep the pins apart (integrator, 2026-11-02); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525657061/', R + 'B529346622/'],
    price_note: 'One course price from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Weekend lunch course', '¥3,850', 'Courses', 'no', 'no', 'April 2026.', 'lunch_course'),
      it('', '', '"Astonishing grilled yukhoe" with egg yolk', '', 'Signature', 'no', 'no', '2026.', 'aburi_yukhoe'),
    ] }, {
    cuisine: '炭火の七輪で焼く個室の焼肉 (食べログ、2026年5月)・匠グループの大分の和牛 (2026年)・名物はバーナーで炙ったユッケを卵黄で包んでごはんに。ゆずの香りの炭火焼きホルモン。蒸しホルモン (2026年)・4種のタン、Juicy Explosion Tongue (早めに注文) とねぎ塩タン (2026年)・部位ごとに名前のついた赤身、脂、ホルモンの盛り合わせ。センマイ。すき焼きカルビ。ハラミ (2026年)・注文してから釜で炊くごはん、約15分 (2026年)・和牛のコースなど。土曜のランチコース3,850円 (2026年4月)',
    neighborhood: '西中島4-8-30 サンライズビル 102、西中島南方駅か阪急南方駅から西へ4〜5分、ビルの1階の奥 (食べログ、2026年5月・10月)',
    gf_detail: 'グルテンフリーではありません。たれともみだれの肉。すき焼きカルビ。',
    vegan_detail: 'ヴィーガンではありません。和牛の焼肉店。生卵の料理も。',
    notes: '[焼肉・西中島南方、小さな個室で炭火の和牛] 西中島南方から4分、ビルの奥にある匠グループの個室焼肉で、ふすまで仕切った小さな部屋ごとに炭火の七輪 (2026年)。名物はバーナーで炙ったユッケを卵黄で包み、釜炊きのごはんにのせる一品。タンは4種、ゆずの香りの焼きホルモンはほかにない味と常連。ごはんは15分かかるので早めに注文を。部屋は狭めで暑くなることも。2時間制。23時まで、週末は昼から。',
  });
}

// ================================================================ マキノマキ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27134187/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '01:00']); const WE = day(['16:00', '01:00']);
  put({
    id: 'osaka_makino_maki_nishinakajima', name: 'マキノマキ (Makino Maki)', category: 'OMNI',
    lat: 34.726303, lng: 135.497323, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried yam, chicken nanban, grilled ramen; seasoned skewers and sesame-soy kanpachi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: vegetables rolled in pork belly or bacon; yakitori and fish.',
    hours_raw: 'Mon–Fri 17:00–1:00; Sat, Sun and holidays 16:00–1:00; closures not fixed (Tabelog). Reservations accepted, often needed (Tabelog; 2026). Cards and e-money; no QR (Tabelog). 26 seats: 6 at the counter facing the grill and 16 at tables; private hire 20–50 (Tabelog; August 2026). Smoking allowed; tell the shop if you would rather people did not smoke (Tabelog). Free Wi-Fi; power outlets (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島4-7-1 チサンマンション新大阪 102, 3 min from Nishinakajima-Minamigata or Hankyu Minamikata, opposite Yakiniku Hyakuban (Tabelog)',
    cuisine: 'Hakata-style vegetable-roll skewers over charcoal, with yakitori and Kyushu dishes (Tabelog; 2026) · the signature lettuce roll of pork, as big as a fist; Hakata green-onion, shiso, pea-shoot and tomato rolls; egg and bacon; soy-butter shiitake (2025–2026) · skewers from ¥495, two or three pieces, order a single skewer; tsukune with egg yolk ¥385 (August 2026); heart, chicken neck (2026) · sesame kanpachi (or tai), grilled mentaiko ¥380, fried yam, chicken nanban, potato salad, an appetiser of milk tofu or Mineoka tofu (2025–2026) · kamameshi or grilled onigiri to finish; grilled ramen (2025–2026) · all-you-can-drink ¥1,100 without beer; course with drinks ¥3,500 (2026) · draft beer ¥418; shochu from ¥480, plenty of sweet-potato shochu (2026)',
    website: null, gmaps: gm('マキノマキ 西中島'), menu_url: null,
    notes: '[Izakaya · Nishinakajima-Minamigata, Hakata vegetable-roll skewers until 1 a.m.] A 26-seat skewer bar three minutes from Nishinakajima-Minamigata, grilling Hakata-style vegetable rolls over charcoal: lettuce wrapped in pork belly as big as a fist, Hakata green onion, shiso and pea shoots, with yakitori alongside (2026). Skewers can be ordered one at a time from about ¥400–500, and a ¥1,100 all-you-can-drink keeps a night to around ¥3,000–4,500 (2026). Sesame kanpachi and a kamameshi to finish are the other favourites. Lively and usually booked out; smoking allowed. Open to 1:00.',
    chef_bio: { chef_name: null, roles: ['Grill and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: izakaya with yakitori and kushiyaki; opposite Yakiniku Hyakuban. Per reviews: "They serve vegetable rolls that became popular in Hakata, Kyushu, and now you can find them all over the country" (August 2026); "The restaurant was lively and always packed" (September 2026); "there were many young staff members" (October 2026); a wall menu adds items missing from the printed menu (September 2026); seasoning on the vegetable skewers can be strong (September 2026).',
      philosophy: null, specialty: 'Pork-wrapped lettuce rolls and other vegetable-roll skewers.',
      anecdotes: [
        { text: '"I was surprised by how large it was—about the size of my fist!" — October 2026, lettuce-wrapped pork.', source: R + 'B536893146/' },
        { text: '"All the pork rolls are delicious!! Especially the Hakata green onions—they’re exquisite!!" — July 2026.', source: R + 'B513528482/' },
        { text: '"It’s great that you can order from just one skewer! Since each order comes with 2 to 3 pieces, sharing one skewer allows you to try a variety of flavors!" — October 2026.', source: R + 'B538154652/' },
      ],
      japanese_sources_summary: '食べログ: マキノマキ、居酒屋・焼き鳥・串焼き、大阪市淀川区西中島4-7-1 チサンマンション新大阪 102、西中島南方駅と阪急南方駅から徒歩3分、Yakiniku Hyakuban の向かい、月〜金17:00〜翌1:00、土日祝16:00〜翌1:00、不定休、予約可、カード・電子マネー可、QR 不可、26席 (カウンター6、テーブル16)、貸切20〜50名、喫煙可 (希望があれば対応)、Wi-Fi、電源。口コミ (2023年〜2026年10月): Hakata の野菜巻き串を炭火で、こぶし大のレタス巻き、Hakata ねぎ、しそ、豆苗、トマトの巻き、卵とベーコン、しいたけのバター醤油、串は495円から1本でも注文できる、卵黄のつくね385円、ハツ、せせり、ごまカンパチ、焼き明太子380円、長いものフライ、チキン南蛮、ポテトサラダ、お通しの豆腐、締めに釜めしか焼きおにぎり、焼きラーメン、飲み放題1,100円 (ビールなし)、飲み放題つきコース3,500円、生ビール418円、芋焼酎、予約が必要なほどにぎやか、若いスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B468482201/', R + 'B513528482/', R + 'B534886904/', R + 'B535050414/', R + 'B535559407/', R + 'B535934338/', R + 'B536860902/', R + 'B536893146/', R + 'B537765512/', R + 'B538154652/', R + 'B538285419/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Wall menu and printed menu (September 2026); counter facing the grill. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-7-1 チサンマンション新大阪 102',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目7番1号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538285419/', R + 'B535934338/', R + 'B537765512/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Vegetable-roll skewers (2–3 pieces)', 'from ¥495', 'Skewers', 'no', 'no', 'August 2026.', 'yasai_maki'),
      it('', '', 'Tsukune with egg yolk', '¥385', 'Skewers', 'no', 'no', 'August 2026.', 'tsukune'),
      it('', '', 'All-you-can-drink (no beer)', '¥1,100', 'Drinks', 'ask', 'ask', 'September 2026.', 'nomihodai'),
      it('', '', 'Course with all-you-can-drink', '¥3,500', 'Courses', 'no', 'no', 'October 2026.', 'course_3500'),
    ] }, {
    cuisine: 'Hakata 風の野菜巻き串を炭火で、焼き鳥と九州の料理も (食べログ、2026年)・名物はこぶし大の豚のレタス巻き。Hakata ねぎ、しそ、豆苗、トマトの巻き。卵とベーコン。しいたけのバター醤油 (2025〜2026年)・串は495円から、2〜3個で、1本から注文できる。卵黄で食べるつくね385円 (2026年8月)。ハツ、せせり (2026年)・ごまカンパチ (日によって鯛)、焼き明太子380円、長いものフライ、チキン南蛮、ポテトサラダ、お通しは豆腐 (2025〜2026年)・締めは釜めしか焼きおにぎり。焼きラーメン (2025〜2026年)・ビール抜きの飲み放題1,100円、飲み放題つきコース3,500円 (2026年)・生ビール418円、焼酎480円から、芋焼酎が豊富 (2026年)',
    neighborhood: '西中島4-7-1 チサンマンション新大阪 102、西中島南方駅か阪急南方駅から3分、Yakiniku Hyakuban の向かい (食べログ)',
    gf_detail: 'グルテンフリーではありません。長いものフライ、チキン南蛮、焼きラーメン。味つけした串やごまカンパチも。',
    vegan_detail: 'ヴィーガンではありません。野菜は豚バラやベーコンで巻く。焼き鳥と魚。',
    notes: '[居酒屋・西中島南方、深夜1時までの Hakata の野菜巻き串] 西中島南方から3分、26席の串の店で、Hakata 風の野菜巻きを炭火で焼く: こぶし大の豚バラのレタス巻き、Hakata ねぎ、しそ、豆苗に、焼き鳥も (2026年)。串は1本から約400〜500円、1,100円の飲み放題で、ひとり3,000〜4,500円ほど (2026年)。ごまカンパチと締めの釜めしも人気。にぎやかでたいてい予約でいっぱい。喫煙可。深夜1時まで。',
  });
}

// ================================================================ カサブランカ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27032645/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'osaka_casablanca_higashimikuni', name: 'カサブランカ (Casablanca)', category: 'OMNI',
    lat: 34.743431, lng: 135.500597, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Croquettes, kara-age, cutlets and fried fugu are battered; sashimi and grilled vegetables need checking for soy sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, shellfish, beef and pork; dashi-simmered dishes.',
    hours_raw: 'Mon, Tue and Fri–Sun 17:30–22:00; closed Wednesday and Thursday; no lunch (Tabelog). Reservations accepted and often needed; the couple take only a few groups at a time (Tabelog; 2025–2026). No cards, e-money or QR (Tabelog). 25 seats: 5 at the counter and 20 at tables; private hire up to 20; non-smoking; children welcome; takeaway (Tabelog). Opened 8 May 1994 (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: '東三国2-24-15, 4 min from exit 1 of Higashi-Mikuni on the Midosuji Line, in a quiet residential street off the main road; looks like an old kissaten from outside (Tabelog; December 2024)',
    cuisine: 'Seafood izakaya with Western dishes and rare sake (Tabelog; reviews) · sashimi platters of three to nine kinds, three for ¥900 (June 2024); the owner’s family runs a fish shop (December 2024); fish said to come straight from the market (July 2026) · simmered whelk and turban shell, simmered sardines, fried horse mackerel, fresh oysters, firefly squid marinated or grilled, fugu shirako, fried fugu, sea urchin, clams, eel (2023–2026) · crab cream croquettes ¥450, kara-age three pieces ¥500, bite-sized pork fillet cutlets, beef cutlet, roast beef, abalone-liver gratin, kasu-jiru made with Kizakiyama sake lees (2024–2026) · grilled seasonal vegetables, lotus root, corn, big asparagus as tempura or grilled (2024–2025) · the house dry curry to finish, ¥1,000 (June 2024) · sake such as Aramasa, Jikon, Juyondai and aged Moriizo; shochu highballs (2024–2025) · an appetiser of sesame tofu or chilled tofu with dengaku miso (2024)',
    website: null, gmaps: gm('カサブランカ 東三国 居酒屋'), menu_url: null,
    notes: '[Izakaya · Higashi-Mikuni, a couple’s fish house with rare sake and dry curry, since 1994] A 25-seat izakaya in a quiet street four minutes from Higashi-Mikuni, run since 1994 by a couple, that looks like an old coffee shop from outside. The owner’s family runs a fish shop, and the sashimi platter of up to nine kinds is the reason to come; simmered turban shell, fugu in winter and firefly squid in spring follow, with crab croquettes and roast beef from the Western side. The sake list runs to Aramasa and Juyondai, and everyone finishes with the dry curry (¥1,000, 2024). Cash only; closed Wednesday and Thursday; book ahead.',
    chef_bio: { chef_name: null, roles: ['Husband-and-wife owners (unnamed)'], origin: null,
      background: 'Per Tabelog: izakaya, seafood and yoshoku; particular about fish and sake; opened 8 May 1994. Per reviews: "The couple running the restaurant seemed quite busy" and a rare shellfish sashimi "thanks to the father’s recommendation" (May 2024); "apparently the owner’s family runs a fish shop" (December 2024); "It’s run by a couple, and [the couple] seem to manage reservations by only taking a few groups at a time" (August 2025); "run by a lovely couple" and mostly locals or regulars (June 2026); the dry curry is by "someone who has researched the art of curry to perfection" (August 2024).',
      philosophy: null, specialty: 'Sashimi platter; dry curry; rare sake.',
      anecdotes: [
        { text: '"At first glance, it seems like any typical izakaya in a small town, but the quality of the fish [the shop serves] is outstanding!" — October 2024.', source: R + 'B473851288/' },
        { text: '"The kasujiru made with Kizakiyama sake was luxurious." — February 2025.', source: R + 'B501213364/' },
        { text: '"Sashimi - Recommended assorted platter of 9 types → Outstanding freshness! Luxurious!" — May 2025.', source: R + 'B507578752/' },
      ],
      japanese_sources_summary: '食べログ: カサブランカ、居酒屋・海鮮・洋食、大阪市淀川区東三国2-24-15、Midosuji Line の東三国駅1番出口から徒歩約4分、月・火・金〜日17:30〜22:00、水・木曜休み、昼の営業なし、予約可、カード・電子マネー・QR 不可、25席 (カウンター5、テーブル20)、貸切20名まで、禁煙、子ども歓迎、テイクアウト、1994年5月8日オープン。口コミ (2023年〜2026年7月): 夫婦で営む、店主の実家は魚屋、市場から仕入れる魚、刺身盛り3種900円から9種まで、バイ貝やサザエの煮付け、イワシの煮付け、アジフライ、生ガキ、ホタルイカ、ふぐの白子、ふぐの唐揚げ、ウニ、アサリ、うなぎ、カニクリームコロッケ450円、唐揚げ3個500円、ひとくちヒレカツ、牛カツ、ローストビーフ、アワビの肝のグラタン、Kizakiyama の酒粕の粕汁、季節の焼き野菜、れんこん、とうもろこし、アスパラ、締めのドライカレー1,000円、Aramasa、Jikon、Juyondai、熟成の Moriizou、ごま豆腐のお通し、喫茶店のような外観。',
      confidence: 'medium', sources: [TB, R + 'B473851288/', R + 'B474585635/', R + 'B489491766/', R + 'B490583593/', R + 'B497106888/', R + 'B500782779/', R + 'B501213364/', R + 'B507578752/', R + 'B511515289/', R + 'B512810371/', R + 'B523165439/', R + 'B530813319/', R + 'B532107930/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Mostly locals and regulars (June 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国2-24-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国二丁目24番15号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B489491766/'],
    price_note: 'Prices from a June 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi, three kinds', '¥900', 'Sashimi', 'ask', 'no', 'June 2024.', 'sashimi_3'),
      it('', '', 'Crab cream croquette', '¥450', 'Western dishes', 'no', 'no', 'June 2024.', 'kani_cream_korokke'),
      it('', '', 'Kara-age, three pieces', '¥500', 'Fried', 'no', 'no', 'June 2024.', 'karaage'),
      it('', '', 'Dry curry', '¥1,000', 'To finish', 'no', 'no', 'June 2024.', 'dry_curry'),
    ] }, {
    cuisine: '洋食もある海鮮の居酒屋、めずらしい日本酒 (食べログ、口コミ)・刺身の盛り合わせは3種から9種、3種900円 (2024年6月)。店主の実家は魚屋 (2024年12月)。魚は市場からという声 (2026年7月)・バイ貝やサザエの煮付け、イワシの煮付け、アジフライ、生ガキ、ホタルイカのマリネや焼き物、ふぐの白子、ふぐの唐揚げ、ウニ、アサリ、うなぎ (2023〜2026年)・カニクリームコロッケ450円、唐揚げ3個500円、ひとくちヒレカツ、牛カツ、ローストビーフ、アワビの肝のグラタン、Kizakiyama の酒粕の粕汁 (2024〜2026年)・季節の焼き野菜、れんこん、とうもろこし、大きなアスパラを天ぷらか焼きで (2024〜2025年)・締めは店のドライカレー1,000円 (2024年6月)・日本酒は Aramasa、Jikon、Juyondai、熟成の Moriizou など。焼酎のハイボール (2024〜2025年)・お通しはごま豆腐か、田楽味噌の冷ややっこ (2024年)',
    neighborhood: '東三国2-24-15、Midosuji Line の東三国駅1番出口から4分、大通りから入った静かな住宅街。外観は古い喫茶店のよう (食べログ、2024年12月)',
    gf_detail: '要確認。グルテンの情報なし。コロッケ、唐揚げ、カツ、ふぐの唐揚げは衣つき。刺身や焼き野菜は醤油を確認。',
    vegan_detail: 'ヴィーガンではありません。魚、貝、牛、豚。だしの煮物。',
    notes: '[居酒屋・東三国、1994年からの夫婦の魚の店、めずらしい日本酒とドライカレー] 東三国から4分、静かな通りの25席の居酒屋で、1994年から夫婦で営み、外から見ると古い喫茶店のよう。店主の実家は魚屋で、最大9種の刺身の盛り合わせが目当て。サザエの煮付け、冬はふぐ、春はホタルイカ、洋食のカニクリームコロッケやローストビーフも。日本酒は Aramasa や Juyondai まで、締めはみんなドライカレー (1,000円、2024年)。現金のみ。水・木曜休み。予約がおすすめ。',
  });
}

save();
