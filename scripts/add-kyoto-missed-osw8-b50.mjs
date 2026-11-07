// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 50.
//   + 京の焼肉処 蓮蔵 Kyo no Yakiniku Dokoro Renzou (wagyu yakiniku in a Japanese-style house by Sakaimachi-Sanjo)
//   + さるぅ屋 Saruuya (burger and sandwich cafe in an old house by Demachiyanagi; cash only)
//   + Panel Cafe 京都店 (souffle pancake cafe with a dog-friendly river terrace, Gion Shijo)
//   + 京都 鮨 もと樹 Kyoto Sushi Motoki (red-vinegar Edomae sushi courses by Kyoto Station; sister of 京都 鮨 まつもと)
//   - パクチー丸太町 26013889: branch of a brand already in data (四条パクチー, kyoto_shijo_pakuchi, whose record names the
//     Marutamachi sister shop).
//   - 中国料理 百楽 近鉄京都駅店 26007619: sub-brand of a large parent — hyakuraku.com lists five shops (four 百楽 plus a 幸福
//     麻婆豆腐 shop) and its footer names KINTETSU RETAILING CO., Ltd.
//   - すし酒場 さしす 京都ヨドバシ店 26040475: chain — the KITTE Osaka opening was reported as its 11th shop (foodle, July 2024).
//   - 田ごと 京都ポルタ店 26007277: brand already in data (京料理 御旅町田ごと); three 田ごと shops in crawls.
//   - 肉もん 四条大宮本店 26024455: brand already in data (肉もん 河原町竹屋町店).
//   - 炭火とワイン 烏丸店 26030965: chain — five 炭火とワイン shops in our crawls (Kyoto and Namba).
//   Picked 2026-11-06 after batch 49 from `queue.mjs kyoto-missed next notable 200` (mod 6 = 1; core is exhausted), in order
//   after the skips above. Same-name check, same brand or operator only: 蓮蔵 — one in our crawls; Gurunavi lists a second
//   shop at Shimamoto (Osaka) — two shops, drafted. さるぅ屋 — one (豊前裏打会 饂飩酒場さるぅ in Tokyo is unrelated by name and
//   genre). Panel Cafe — one in crawls; a web search found no shop list (a Gurunavi alias reads 京橋店 at the same address);
//   the same みかくビル 1F also holds Niku Bar W (in data) and Tabelog says the space runs as Dining Bar W at night. もと樹 —
//   one; an October 2026 review calls it a sister of まつもと (京都 鮨 まつもと is in data at the same lot) — sister concept of
//   a small group, drafted. None of the four is in data/kyoto.json by name or address (大阪材木町690, 田中下柳町14, Panel
//   Cafe at 常盤町165 みかくビル is a separate listing from Niku Bar W, 真苧屋町99 ブーケガルニ B1F).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-50');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26013889/', 'branch of a brand already in data: 四条パクチー (kyoto_shijo_pakuchi), whose record names the Marutamachi sister shop');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26007619/', 'sub-brand of a large parent: hyakuraku.com lists five shops and names KINTETSU RETAILING CO., Ltd.');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26040475/', 'chain: すし酒場 さしす opened its 11th shop at KITTE Osaka (foodle, July 2024)');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26007277/', 'brand already in data: 田ごと (京料理 御旅町田ごと); three 田ごと shops in crawls');
skip('https://tabelog.com/en/kyoto/A2601/A260203/26024455/', 'brand already in data: 肉もん (肉もん 河原町竹屋町店)');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26030965/', 'chain: five 炭火とワイン shops in our crawls');

// ================================================================ 京の焼肉処 蓮蔵 Renzou
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040169/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_yakiniku_renzou_sakaimachi', name: '京の焼肉処 蓮蔵 (Kyo no Yakiniku Dokoro Renzou)', category: 'OMNI',
    lat: 35.009683097867665, lng: 135.76329873040726, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: yakiniku with soy-based sauces, cold noodles, bibimbap and set meals (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant (2026 reviews).',
    hours_raw: 'Daily 11:30–14:00 (last order 13:30) and 17:00–23:00 (last order 22:00); irregular closing days (Tabelog). Reservations accepted; booked stays have a time limit, but guests may stay until the next booking arrives (Tabelog). One October 2026 visitor could not book a course on the day and booked a table instead. Cards, e-money and QR (Tabelog). 84 seats over two floors, with counter, tables, sofas and private rooms; 1F non-smoking, 2F heated tobacco only; the floors can be booked separately (Tabelog). Coin parking nearby (October 2026). 5 min walk from Karasuma Oike Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sakaimachi south of Sanjo — 5 min walk from Karasuma Oike Stn',
    cuisine: 'Wagyu yakiniku in a calm Japanese-style house, opened December 2023 (Tabelog; 2026 reviews) · lunch: three-cut yakiniku set with salad, soup and rice ¥2,200, or a five-cut set with two kinds of tongue (May and October 2026) · courses: Kyo no Nihon Teien ¥4,500 with kimchi, small dishes, salt and sauce cuts, horumon, rice and hojicha panna cotta; a ¥6,500 course; the photogenic Kyo no Kaidan Mori staircase platter ¥7,980 (September–October 2026) · à la carte: salted tongue, premium wagyu loin, harami, Chateaubriand, tongue sashimi, yukhoe, namul, cold noodles, oxtail soup, meat sushi (2026 reviews) · lunch about ¥1,000–3,000, dinner about ¥5,000–10,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('京の焼肉処 蓮蔵'), menu_url: null,
    notes: '[Yakiniku · Sakaimachi-Sanjo, wagyu in a quiet Japanese house] A calm, screened yakiniku house serving tender wagyu tongue, harami and loin, a ¥2,200 lunch set and courses up to the photogenic staircase platter, with birthday plates on request. Some found side dishes and finishers weaker than the meat; one October 2026 guest was promised a dessert for posting a review that never came. Open till 23:00.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a yakiniku restaurant opened 15 December 2023 on two floors near Sakaimachi-Sanjo. Gurunavi lists a second Renzou shop in Shimamoto, Osaka Prefecture. Reviewers in 2026 describe attentive staff who explain the cuts, and screens that keep tables private.',
      philosophy: null, specialty: 'Kyo no Kaidan Mori staircase platter; salted tongue.',
      anecdotes: [
        { text: 'A September 2026 diner who doubted the staircase platter found it ordered from light tongue up to richer cuts, with not one tough piece.', source: R + 'B535836867/' },
        { text: 'An October 2026 visitor was told a review would earn a dessert; after showing the review and waiting 15 minutes the dessert never came, and an unordered soup arrived at the bill.', source: R + 'B538253077/' },
        { text: 'A September 2026 solo birthday diner loved the meat but found the bibimbap, oxtail soup and dessert platter disappointing.', source: R + 'B537327654/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・居酒屋・日本料理、中京区大阪材木町690、烏丸御池駅から徒歩5分、毎日 11:30〜14:00 (L.O.13:30)、17:00〜23:00 (L.O.22:00)、不定休、予約可 (時間制だが次の予約まではゆっくりできる)、カード・電子マネー・QR 可、84席、個室あり、1階禁煙・2階は加熱式たばこのみ、1階と2階は別々に貸切可、2023年12月15日開店。口コミ (2026年5月〜10月、英語): 落ち着いた和の内装、ついたて、昼の焼肉3種盛り定食2,200円、5種盛り、京の日本庭園コース4,500円、6,500円のコース、京の階段盛り7,980円、塩タン、和牛上ロース、ハラミ、シャトーブリアン、タン刺し、ユッケ、ナムル、冷麺、テールスープ、肉寿司、誕生日のプレート、店員が忙しそうとの声、口コミを書くとデザートと言われたが来なかったとの声 (2026年10月)、ビビンバやテールスープは物足りないとの声。',
      confidence: 'medium', sources: [TB, 'https://gurunavi.com/en/keg0601/rst', R + 'B508839223/', R + 'B535435979/', R + 'B535799360/', R + 'B535836867/', R + 'B536366908/', R + 'B537327654/', R + 'B537705156/', R + 'B537793765/', R + 'B538082319/', R + 'B538253077/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the cuts; private rooms; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区大阪材木町690',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009683, 135.763299); cross-checked: GSI 京都府京都市中京区大阪材木町690番地 (lot) 39 m; nearest Kyoto record 20 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508839223/', R + 'B536366908/', R + 'B535836867/', R + 'B538253077/'],
    price_note: 'Prices from May–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch: three-cut yakiniku set', '¥2,200', 'Lunch', 'no', 'no', 'May 2026.', 'lunch_3', ),
      it('', '', 'Kyo no Nihon Teien course', '¥4,500', 'Courses', 'no', 'no', 'September 2026.', 'teien_course'),
      it('', '', 'Course with raw meat, salad, kimchi, rice and dessert', '¥6,500', 'Courses', 'no', 'no', 'September 2026.', 'course_6500'),
      it('', '', 'Kyo no Kaidan Mori (staircase platter)', '¥7,980', 'À la carte', 'ask', 'no', 'October 2026.', 'kaidan_mori'),
    ] }, {
    cuisine: '落ち着いた和の店の和牛の焼肉、2023年12月開店 (食べログ、2026年の口コミ)・昼: サラダ・スープ・ご飯付きの焼肉3種盛り定食2,200円、タン2種入りの5種盛り (2026年5月・10月)・コース: キムチ、小鉢、塩とタレの肉、ホルモン、ご飯、ほうじ茶のパンナコッタの京の日本庭園コース4,500円、6,500円のコース、写真映えする京の階段盛り7,980円 (2026年9〜10月)・単品: 塩タン、和牛上ロース、ハラミ、シャトーブリアン、タン刺し、ユッケ、ナムル、冷麺、テールスープ、肉寿司 (2026年の口コミ)・昼1,000〜3,000円ほど、夜5,000〜10,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '三条の南の堺町通。烏丸御池駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。醤油のタレの焼肉、冷麺、ビビンバ、定食 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉の店 (2026年の口コミ)。',
    notes: '[焼肉・堺町三条、静かな和の店で和牛] ついたてで仕切られた落ち着いた焼肉の店。やわらかい和牛のタン、ハラミ、ロース、2,200円の昼の定食、写真映えする階段盛りまでのコース、頼めば誕生日のプレートも。サイドや締めは肉ほどではないと感じた客も。2026年10月の客は口コミを書けばデザートと言われたが来なかった。23時まで。',
  });
}

// ================================================================ さるぅ屋 Saruuya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26004169/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '22:00']);
  put({
    id: 'kyoto_saruuya_demachiyanagi', name: 'さるぅ屋 (Saruuya)', category: 'OMNI',
    lat: 35.02873780785864, lng: 135.77293255059297, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: burgers on bakery buns, sandwiches on country bread, curry (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef burgers, chicken and bacon-egg sandwiches; herbal teas and lemonade are the plant-based options seen (2025–2026 reviews).',
    hours_raw: 'Daily 11:30–22:00 (last orders food 21:00, drinks 21:30); closing days may vary (Tabelog). No table reservations — only course bookings (2 hours, from ¥3,500) (Tabelog). Cash only: no cards, e-money or QR (Tabelog). 34 seats with counter, sofas, tatami and a loft upstairs; non-smoking inside, smoking area in the garden; the toilet is out in the back yard (Tabelog; May 2026). The front looks like a bicycle shop (November 2025). By Keihan Demachiyanagi Stn exit 2 and a bus stop (Tabelog; January 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Tanaka by Demachiyanagi Stn — on the way to Shimogamo Shrine',
    cuisine: 'Burger and sandwich cafe in a renovated old house, with antique furniture and many herbal teas (2025–2026 reviews) · large burgers on bakery-style buns: hamburger, cheeseburger, double cheeseburger with a hint of spicy sausage, avocado burger; a burger and drink set ¥1,500 (October 2025–June 2026) · sandwich sets on country bread such as mustard chicken or bacon, egg and cheese, with spiced pumpkin soup as an extra (January 2026) · curry, weekday specials with salad, lemonade, coffee (2025–2026 reviews) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('さるぅ屋 出町柳'), menu_url: null,
    notes: '[Cafe · Demachiyanagi, burgers in an old house] A dim, homey cafe in a renovated old house by Demachiyanagi Stn — sink into a sofa or the upstairs loft for big burgers on bakery buns, country-bread sandwiches, curry and herbal tea. Easy to miss: the front looks like a bicycle shop. Some found portions generous, one found the dishes small for the price; it can be chilly in winter. Cash only; open till 22:00.',
    chef_bio: { chef_name: null, roles: ['Cafe staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a cafe and burger shop by Demachiyanagi with course bookings for groups. Reviewers in 2025–2026 describe a renovated old house of two floors with a loft, antique decor, assorted sofas and accessories for sale at the entrance.',
      philosophy: null, specialty: 'Double cheeseburger; herbal teas.',
      anecdotes: [
        { text: 'A November 2025 visitor hesitated at the door because the front looks just like a bicycle shop.', source: R + 'B517233933/' },
        { text: 'An October 2025 lunch guest thought two burgers had arrived, so large was the single burger ordered.', source: R + 'B515756776/' },
        { text: 'A January 2026 visitor on the way to Shimogamo Shrine found the cafe a little chilly and warmed up with the pumpkin soup.', source: R + 'B520733341/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・ハンバーガー、左京区田中下柳町14、京阪出町柳駅2番出口、毎日 11:30〜22:00 (L.O.フード21:00、ドリンク21:30)、定休日は変わることあり、席のみの予約不可 (コースのみ、2時間制、3,500円から)、カード・電子マネー・QR 不可、34席、カウンター・ソファ・座敷、禁煙 (庭に喫煙所)。口コミ (2025年10月〜2026年6月、英語): 古い家を改装、2階はロフト、アンティーク、自転車屋のような外観、大きなハンバーガー、パン屋のようなバンズ、ダブルチーズバーガー、アボカドバーガー、ハンバーガーとドリンクのセット1,500円、田舎パンのサンドイッチ (マスタードチキン、ベーコンエッグチーズ)、かぼちゃのスープ、カレー、ハーブティー、レモネード、トイレは裏庭、量が多いとの声と、値段のわりに少ないとの声、冬は少し寒い。',
      confidence: 'medium', sources: [TB, R + 'B515756776/', R + 'B517233933/', R + 'B520046882/', R + 'B520094542/', R + 'B520733341/', R + 'B520823602/', R + 'B527763683/', R + 'B529340705/', R + 'B530370597/', R + 'B530887558/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; toilet in the back yard; sofas and a loft.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区田中下柳町14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through June 2026.' },
    pin_source: `Tabelog ${TB} (35.028738, 135.772933); cross-checked: GSI 京都府京都市左京区田中下柳町14番地 (lot) 33 m; nearest Kyoto record 18 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530370597/'],
    price_note: 'Price from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Hamburger and drink set', '¥1,500', 'Burgers', 'no', 'no', 'June 2026.', 'burger_set'),
    ] }, {
    cuisine: 'アンティークの家具とたくさんのハーブティーの、改装した古い家のハンバーガーとサンドイッチのカフェ (2025〜2026年の口コミ)・パン屋のようなバンズの大きなハンバーガー: ハンバーガー、チーズバーガー、スパイシーなソーセージの風味のダブルチーズバーガー、アボカドバーガー、ハンバーガーとドリンクのセット1,500円 (2025年10月〜2026年6月)・マスタードチキンやベーコンエッグチーズの田舎パンのサンドイッチのセット、追加でスパイスのかぼちゃのスープ (2026年1月)・カレー、サラダ付きの平日のメニュー、レモネード、コーヒー (2025〜2026年の口コミ)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '出町柳駅近くの田中。下鴨神社への道すがら',
    gf_detail: 'グルテンフリー不可。バンズのハンバーガー、田舎パンのサンドイッチ、カレー (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛肉のハンバーガー、チキンやベーコンエッグのサンドイッチ。植物性はハーブティーとレモネードのみ確認 (2025〜2026年の口コミ)。',
    notes: '[カフェ・出町柳、古い家でハンバーガー] 出町柳駅近くの改装した古い家の、薄暗く家庭的なカフェ。ソファや2階のロフトで、パン屋のようなバンズの大きなハンバーガー、田舎パンのサンドイッチ、カレー、ハーブティーを。外観は自転車屋のようで見落としやすい。量が多いという声と、値段のわりに少ないという声。冬は少し寒い。現金のみ、22時まで。',
  });
}

// ================================================================ Panel Cafe 京都店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033749/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '17:30']);
  put({
    id: 'kyoto_panel_cafe_gion', name: 'Panel Cafe 京都店 (Panel Cafe Kyoto)', category: 'OMNI',
    lat: 35.00508, lng: 135.772643, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: souffle pancakes, burgers and chips (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg-rich souffle pancakes with soft serve, bacon-and-egg pancakes, burgers (2024–2026 reviews).',
    hours_raw: 'Daily 10:00–17:30, last order 16:00; irregular closing days (Tabelog). Reservations accepted, but not same-day at weekends and holidays (Tabelog). Waits of 30 minutes to an hour at busy times (2024–2026 reviews). Order and pay at the register before being seated; one food order per person (September 2026). No toilet inside — guests are sent to a public toilet (August and September 2026). Cards (VISA, Master, Diners); no e-money or QR (Tabelog). 80 seats inside and on a dog-friendly river terrace; non-smoking; takeaway (Tabelog; 2024–2026 reviews). In the evenings the space runs as Dining Bar W (Tabelog). 2 min walk from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion Shijo, by the river — 2 min walk from Gion-Shijo Stn',
    cuisine: 'Souffle pancake cafe with a river terrace, opened January 2020 (Tabelog; 2024–2026 reviews) · wobbly brulee pancakes with vanilla soft serve: chocolate brulee ¥1,570, creme brulee, matcha brulee, caramel banana (2025–2026 reviews) · savory bacon-and-egg pancakes ¥1,650–1,860 (August–September 2026) · burgers, chips, house-roasted coffee ¥275 in a set, lemonade, hojicha latte (2024–2026 reviews) · about ¥1,000–3,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('Panel Cafe 京都店 祇園'), menu_url: null,
    notes: '[Pancakes · Gion Shijo, river terrace, dogs welcome] A chic cafe known for wobbly, pudding-soft souffle pancakes topped with brulee and soft serve, plus burgers, with a riverside terrace where dogs are welcome. Order and pay first; expect a queue, and book on weekdays. Several 2026 reviewers note it is popular with overseas visitors; some found the pancakes average or pre-cooked. No toilet inside.',
    chef_bio: { chef_name: null, roles: ['Cafe staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a cafe opened 20 January 2020 near Kawaramachi, known for souffle pancakes and burgers, with a pet-friendly terrace; registered as an official listing. In the evening the space operates as Dining Bar W.',
      philosophy: null, specialty: 'Creme brulee pancakes.',
      anecdotes: [
        { text: 'A reviewer who returns with a dog chooses it for the riverside terrace, and waited about an hour on a May 2025 visit.', source: R + 'B494894062/' },
        { text: 'An August 2026 visitor found the pancakes average, seemingly pre-cooked and thin, and was disappointed by the lack of a toilet.', source: R + 'B534059601/' },
        { text: 'Several 2026 reviewers mention that many of the guests are overseas visitors (August–October 2026).', source: R + 'B538101507/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・パンケーキ・ハンバーガー、東山区常盤町165 みかくビル 1F、祇園四条駅から徒歩2分、阪急京都河原町駅から徒歩5分、毎日 10:00〜17:30 (L.O.16:00)、不定休、予約可 (土日祝の当日予約は不可)、カード (VISA・Master・Diners) 可、電子マネー・QR 不可、80席、禁煙、テラスはペット可、テイクアウト、2020年1月20日開店、夜は Dining Bar W として営業。口コミ (2024年11月〜2026年10月、英語): ふわふわのスフレパンケーキ、チョコブリュレ1,570円、クリームブリュレ、抹茶ブリュレ、キャラメルバナナ、ベーコンエッグのパンケーキ1,650〜1,860円、ハンバーガー、チップス、自家焙煎コーヒー (セット275円)、川沿いのテラス、30分〜1時間待ち、先にレジで注文と支払い、1人1フード、店内にトイレなし、外国人客が多いとの声が複数、普通・作り置きのようとの声、ソフトクリームが重い・持ち帰り用カップとの声。',
      confidence: 'medium', sources: [TB, R + 'B494894062/', R + 'B533256496/', R + 'B534059601/', R + 'B534628293/', R + 'B534762864/', R + 'B535911039/', R + 'B536202810/', R + 'B536441928/', R + 'B537740743/', R + 'B538101507/'] },
    cultural_comfort: { level: 'english', note: 'Many overseas guests (several 2026 reviews); order and pay at the register; no toilet inside; dogs on the terrace.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区常盤町165 みかくビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005149, 135.772643) is 1.4 m from kyoto_gion_mikaku (same lot 165, みかくビル), so moved ~7.7 m south to 35.005080 (6.6 m from it; kyoto_niku_bar_w_gion, same building, is 15 m north); cross-checked: GSI 京都府京都市東山区常盤町165番地 (lot) 7 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534762864/', R + 'B536202810/'],
    price_note: 'Prices from August and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chocolate brulee pancake', '¥1,570', 'Pancakes', 'no', 'no', 'August 2026.', 'choco_brulee'),
      it('', '', 'Bacon egg Benedict pancake', '¥1,650', 'Pancakes', 'no', 'no', 'August 2026.', 'benedict'),
      it('', '', 'Bacon egg pancake', '¥1,860', 'Pancakes', 'no', 'no', 'September 2026.', 'bacon_egg'),
      it('', '', 'House-roasted coffee (with a set)', '¥275', 'Drinks', 'gf', 'vegan', 'August 2026.', 'coffee_set'),
    ] }, {
    cuisine: '川沿いのテラスのスフレパンケーキのカフェ、2020年1月開店 (食べログ、2024〜2026年の口コミ)・バニラソフトをのせたふるふるのブリュレのパンケーキ: チョコブリュレ1,570円、クリームブリュレ、抹茶ブリュレ、キャラメルバナナ (2025〜2026年の口コミ)・ベーコンエッグのパンケーキ1,650〜1,860円 (2026年8〜9月)・ハンバーガー、チップス、セットの自家焙煎コーヒー275円、レモネード、ほうじ茶ラテ (2024〜2026年の口コミ)・1,000〜3,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '祇園四条、川沿い。祇園四条駅から徒歩2分',
    gf_detail: 'グルテンフリー不可。スフレパンケーキ、ハンバーガー、チップス (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。卵たっぷりのスフレパンケーキにソフトクリーム、ベーコンエッグのパンケーキ、ハンバーガー (2024〜2026年の口コミ)。',
    notes: '[パンケーキ・祇園四条、川沿いのテラス、犬も可] プリンのようにやわらかいふるふるのスフレパンケーキにブリュレとソフトクリーム、ハンバーガーも。川沿いのテラスは犬連れ可。先に注文と支払い。行列ができるので平日は予約を。2026年の口コミの複数が外国人客が多いと書く。普通、作り置きのようと感じた客も。店内にトイレなし。',
  });
}

// ================================================================ 京都 鮨 もと樹 Kyoto Sushi Motoki
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26039689/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['11:30', '14:00'], ['17:00', '23:00']); const WE = day(['11:30', '14:00'], ['16:00', '23:00']);
  put({
    id: 'kyoto_sushi_motoki_shichijo', name: '京都 鮨 もと樹 (Kyoto Sushi Motoki)', category: 'OMNI',
    lat: 34.98935062035281, lng: 135.7600750001106, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edomae nigiri seasoned before serving, a foam soy sauce with bonito, tempura and chawanmushi in the courses; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi omakase courses (2025–2026 reviews).',
    hours_raw: 'Monday–Friday 11:30–14:00 and 17:00–23:00; Saturday, Sunday and holidays 11:30–14:00 and 16:00–23:00; irregular closing days (Tabelog). Reservations accepted and advised; same-day cancellations are charged 100%, and phone cancellations are not taken outside opening hours (Tabelog; October 2026). Service charge 10% (Tabelog original サービス料10%). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 25 seats: a counter of about 8 with backrests and private rooms for 2–6; non-smoking (Tabelog; October 2026). B1F of the Bouquet Garni building at the northeast corner of Shichijo and Karasuma, easy to miss; 4 min walk from Kyoto Stn (Tabelog; September 2026).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma Shichijo, north of Kyoto Station — 4 min walk',
    cuisine: 'Edomae sushi courses on red-vinegar Kinu Hikari rice, opened August 2023; an October 2026 reviewer calls it a sister of まつもと (Tabelog; 2023–2026 reviews) · courses of about ¥10,000–12,000: appetizers such as whale bacon with komatsuna, mozuku, fresh yuba and roast chicken; sashimi with a foam soy sauce; tempura; chawanmushi; about 8–9 nigiri such as squid, flounder, engawa, aged and marinated tuna, toro, shime saba, kohada, steamed anago; a negitoro hand roll; ikura rice; pudding-style tamago; dessert (2023–2026 reviews) · lunch about ¥5,000–8,000, dinner about ¥10,000–15,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('京都 鮨 もと樹'), menu_url: null,
    notes: '[Sushi · Karasuma Shichijo, by Kyoto Station] A calm basement Edomae counter with private rooms near Kyoto Station, serving seasoned nigiri on red-vinegar rice in courses of about ¥10,000–12,000 — fresh yuba, foam soy with bonito, melting toro and soft steamed anago. A sister of the nearby Kyoto Sushi Matsumoto, per a reviewer. Critics noted clumsy service one night and rice undercooked at the centre. 10% service; same-day cancellations charged in full.',
    chef_bio: { chef_name: null, roles: ['Sushi chef at the counter (unnamed)', 'Kitchen assistant and server'], origin: 'Nagasaki Prefecture (an October 2026 review)',
      background: 'Per Tabelog: a sushi and seafood restaurant opened 22 August 2023 on the B1F of the Bouquet Garni building, at the same address as 京都 鮨 まつもと. An October 2026 reviewer learned it is a sister establishment of Matsumoto; another October 2026 reviewer writes that the chef comes from Nagasaki Prefecture and grew up eating fresh fish. One October 2026 visitor counted one chef, one kitchen assistant and one server for about 20 seats.',
      philosophy: 'Each nigiri seasoned so no soy sauce is needed (October 2026 review).', specialty: 'Red-vinegar Edomae nigiri; steamed anago.',
      anecdotes: [
        { text: 'An April 2026 birthday couple found the sushi delicious but the service poor: a server reached across guests with an elbow on the counter and set dishes down with a thud.', source: R + 'B527987532/' },
        { text: 'An October 2026 diner liked the fluffy anago but found the red-vinegar rice a little undercooked at the centre, the kohada over-vinegared and only four sakes on offer.', source: R + 'B537698772/' },
        { text: 'A July 2026 pair paid ¥15,000 in total for two courses and drinks on a quiet holiday, and the chef started a conversation with the pair.', source: R + 'B532708468/' },
      ],
      japanese_sources_summary: '食べログ: 寿司・海鮮、下京区真苧屋町99 ブーケガルニ B1F、京都駅から徒歩4分、月〜金 11:30〜14:00・17:00〜23:00、土日祝 11:30〜14:00・16:00〜23:00、不定休、予約可、当日キャンセルは100%、営業時間外の電話キャンセル不可、サービス料10%、カード (VISA・Master・JCB・AMEX・Diners) 可、電子マネー・QR 不可、25席、個室 (2・4・6名)、禁煙、2023年8月22日開店。口コミ (2023年11月〜2026年10月、英語): 七条烏丸の北東角のビルの地下、カウンター約8席と個室、赤酢のキヌヒカリのシャリ、江戸前の仕事で醤油なし、おまかせ1万〜1万2千円、昼のプレミアムコース1万円、お試しコース1万円、鯨ベーコンと小松菜、もずく酢、生湯葉、鶏、泡醤油のかつお、天ぷら、茶碗蒸し、いか、ひらめ、えんがわ、熟成まぐろ、漬けまぐろ、とろ、しめ鯖、こはだ、蒸し穴子、ねぎとろの手巻き、いくらご飯、プリンのような玉子、まつもとの姉妹店との声、大将は長崎県出身との声、配膳が雑だったとの声 (2026年4月)、シャリの芯が硬い・こはだの酢が強い・日本酒が4種のみとの声 (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B474525009/', R + 'B511491470/', R + 'B523128471/', R + 'B527987532/', R + 'B532708468/', R + 'B535883283/', R + 'B536181577/', R + 'B536982962/', R + 'B537698772/', R + 'B537708153/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter or private rooms; the chef chats with guests; 10% service; same-day cancellations charged in full.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区真苧屋町99 ブーケガルニ B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989351, 135.760075); GSI matched only the town 真苧屋町, so loc_precise false; kyoto_kyoto_sushi_matsumoto (same lot 99) is 7.9 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511491470/', R + 'B523128471/', R + 'B537708153/'],
    price_note: 'Prices from August 2025–October 2026 reviews; plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Omakase premium course', '¥12,000', 'Courses', 'ask', 'no', 'August 2025.', 'omakase_premium'),
      it('', '', 'Premium lunch course', '¥10,000', 'Courses', 'ask', 'no', 'September 2026.', 'lunch_premium'),
      it('', '', 'Trial course', '¥10,000', 'Courses', 'ask', 'no', 'October 2026.', 'trial_course'),
    ] }, {
    cuisine: '赤酢のキヌヒカリのシャリの江戸前のすしのコース、2023年8月開店、2026年10月の口コミはまつもとの姉妹店と書く (食べログ、2023〜2026年の口コミ)・1万〜1万2千円ほどのコース: 鯨ベーコンと小松菜、もずく、生湯葉、鶏などの先付、泡醤油のお造り、天ぷら、茶碗蒸し、いか、ひらめ、えんがわ、熟成や漬けのまぐろ、とろ、しめ鯖、こはだ、蒸し穴子など握り8〜9貫、ねぎとろの手巻き、いくらご飯、プリンのような玉子、デザート (2023〜2026年の口コミ)・昼5,000〜8,000円ほど、夜1万〜1万5千円ほど (食べログ、2026年の口コミ)',
    neighborhood: '京都駅の北、七条烏丸。徒歩4分',
    gf_detail: '要確認。仕事をした江戸前の握り、かつおに泡醤油、コースに天ぷらと茶碗蒸し。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。すしのおまかせのコース (2025〜2026年の口コミ)。',
    notes: '[すし・七条烏丸、京都駅近く] 京都駅近くの地下の落ち着いた江戸前のカウンターと個室。赤酢のシャリの仕事をした握りを1万〜1万2千円ほどのコースで。生湯葉、泡醤油のかつお、とろけるとろ、やわらかい蒸し穴子。口コミでは近くの京都 鮨 まつもとの姉妹店。配膳が雑だった夜や、シャリの芯が硬かったという声も。サービス料10%、当日キャンセルは全額。',
  });
}

save();
