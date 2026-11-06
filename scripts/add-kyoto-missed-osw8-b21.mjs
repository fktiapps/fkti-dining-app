// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 21.
//   + 祇園 かにを喰らう Gion Kani o Kurau (live-crab restaurant run by a Kasumi crab wholesaler; core list)
//   + 祇園 えばた Gion Ebata (counter yakiniku course, Gion sister of a Kitano Hakubaicho hormone house; core list)
//   + here (specialty coffee café near Karasuma Oike, opened 2019; notable list)
//   + サケホール 益や SAKE-HALL MASUYA (sake hall with 40+ brands in a renovated townhouse; notable list)
//   Picked 2026-11-05 after batch 20. `queue.mjs kyoto-missed next core 200`: 祇園 かにを喰らう 26040799, 祇園 えばた
//   26035999. `next notable 200`: アジェ 木屋町団栗店 26016229 (skipped, chain), here 26032789, シズヤパン 京都駅店 26022799
//   (skipped, chain), サケホール 益や 26029819. Same-name check first: no other かにを喰らう or えばた in our crawls; here has
//   one sister in our crawls (here Kyoto Kiyomizu 26039160; the brand also lists Tainan and Shanghai shops — 4 in all, a small
//   group, none in data); 益や製菓 26039305 is an unrelated sweets maker. None of the four is in data/kyoto.json: grep by name
//   and address (林下町434, 姉西洞院町524, 一蓮社町298) found none — 林下町434 EXIT祇園 1F also holds kyoto_sushi_no_kura.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-21');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26016229', 'アジェ 木屋町団栗店: a branch of the Kyoto hormone-yakiniku chain アジェ — web sources describe three Kyoto shops (including 松原本店) and further shops in Osaka, Nagoya, Gifu and Kanazawa, 5+ shops of one brand (Greg, 2026-11-05).');
skip('26022799', 'シズヤパン 京都駅店: a branch of the Kyoto bakery chain 志津屋 — a web article counts 21 shops in Kyoto plus 京阪くずは駅店, and our crawls hold シズヤパン 四条烏丸店 26028292 too, 5+ shops of one brand (Greg, 2026-11-05).');

// ================================================================ 祇園 かにを喰らう
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040799/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://kaniwokurau.com/';
  const H = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_gion_kani_o_kurau', name: '祇園 かにを喰らう (Gion Kani o Kurau)', category: 'OMNI',
    lat: 35.005490, lng: 135.777180, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Crab courses with sashimi, grilled and shabu-shabu crab, crab-miso in the shell, crab bowls with dashi, zosui and ramen; no gluten information (official site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a crab-only restaurant — every course is built on live crab (official site).',
    hours_raw: 'Daily 11:30–15:00 and 17:00–22:00 (food last order 20:00); closed the day after a holiday, with variable closures (Tabelog). The official site gives lunch 12:00–17:00 and dinner 17:00–22:00, closed irregularly. Reservation only; courses only for guests of junior-high age and up (Tabelog). Lunch courses ¥12,000 and ¥14,000 (March–May 2026); a lunch-only Kasumi crab bowl set (official site, January 2026); seasonal full courses (official site). Tabelog\'s service-charge field reads 無し (none) in the original. 17 seats: tables for 4, 4 and 3 and a private room for 6; non-smoking (Tabelog). Cards (Tabelog). Ground floor of EXIT祇園ビル near Yasaka Shrine and Chion-in; 6 min walk from Gion-Shijo Stn (Tabelog). Opened February 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion near Yasaka Shrine and Chion-in — 6 min walk from Gion-Shijo Stn',
    cuisine: 'Live-crab specialist run by a Kasumi crab wholesaler founded in 1941, which trucks crabs from the Shibayama and Kasumi ports of Hyogo and keeps the crabs alive until cooking; no seafood but crab (official site) · live Shibayama crab (Matsuba crab) courses from November to March; live Kasumi crab (Benizuwai) from autumn to early summer; Hokkaido hairy crab full course in summer (official site; 2026 reviews) · sashimi, grilled, shabu-shabu, zosui (official site) · lunch: Kasumi crab bowl with crab-miso grilled in the shell and dashi poured over (official site; March 2026); kuppe (young Matsuba crab) lunch in season (January 2026); lunch courses ¥12,000–14,000 (2026 reviews) · matcha pudding to finish (August 2026) · sake, shochu, wine (Tabelog)',
    website: WEB, gmaps: gm('祇園 かにを喰らう'), menu_url: null,
    notes: '[Crab · Gion by Chion-in, live crab from Hyogo] A crab-only restaurant near Yasaka Shrine run by a Kasumi crab wholesaler (in business since 1941) that trucks live crabs from Shibayama and Kasumi ports and cooks each to order: Matsuba (Shibayama) crab in winter, Benizuwai in spring, hairy crab in summer — as sashimi, grilled, shabu-shabu and zosui. Lunch courses are about ¥12,000–14,000, or try the crab bowl finished with dashi. Reviews range from "worth the price" to a March 2026 diner who felt overcharged and was served Kasumi crab instead of the Shibayama on the menu. Reservation only.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and staff'], origin: null,
      background: 'Per the official site and Tabelog: a crab wholesaler at the Shibayama and Kasumi fishing ports since 1941 (Tabelog EN gives "Kani Nakaori Kaneni", supplying ryokans and restaurants in Kasumi), focusing on the "Shibayama crab" brand of top-graded Matsuba crab, opened this Gion restaurant in February 2024; crabs are kept alive in tanks at the port and delivered by the company\'s own trucks. An August 2026 reviewer found the owner kind.',
      philosophy: '"Live, ultimate crab" — crabs alive until just before cooking (official site).', specialty: 'Live Matsuba crab; crab bowl with crab-miso shell.',
      anecdotes: [
        { text: 'A March 2026 guest on the ¥14,000 lunch course was surprised at the price, was served Kasumi crab although the menu said Shibayama, found the meat too soft, and wrote: "I really don\'t want to go back to this restaurant again. However, the staff were nice."', source: R + 'B523641455/' },
        { text: 'A December 2025 father, whose family crab trip had been cancelled, brought the daughters here instead and ate two servings of Kasumi Matsuba crab.', source: R + 'B519694391/' },
        { text: '"Towards the end, I started to feel a bit overwhelmed by the crab (laughs)" — August 2026, on the full course.', source: R + 'B534445848/' },
      ],
      japanese_sources_summary: '公式サイト: 祇園 かにを喰らう、兵庫の香住・柴山漁港から自社便で届く「活極蟹」、食事の直前まで生きている蟹を調理する活蟹料理の専門店、八坂神社・知恩院の近く、柴山・香住漁港で1941年創業の蟹仲買人、ブランド「柴山がに」、蟹以外の魚介は出さない、刺身・焼き・しゃぶ・雑炊、活柴山がに (松葉がに) コース、活香住ガニコース、香住ガニ丼と蟹味噌甲羅焼の「香住御膳」(ランチ限定)、Hokkaido の毛蟹フルコース、東山区林下町434 EXIT祇園ビル1F、昼の部12:00〜17:00、夜の部17:00〜22:00、不定休。食べログ: かに・海鮮・日本料理、11:30〜15:00・17:00〜22:00 (料理L.O.20:00)、祝日の翌日休み、完全予約制、中学生以上でコースを注文する客のみ、サービス料無し、17席、個室6名、禁煙、カード可、2024年2月オープン。口コミ (2025年12月〜2026年8月、英語): ランチコース12,000円・14,000円、クッペのランチ、蟹丼に出汁、抹茶プリン、値段の割にという声 (2026年3月)、店主は親切。',
      confidence: 'medium', sources: [WEB, TB, R + 'B519096108/', R + 'B519694391/', R + 'B523641455/', R + 'B524114779/', R + 'B524191697/', R + 'B524322262/', R + 'B526450571/', R + 'B528585805/', R + 'B534261452/', R + 'B534445848/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; courses; crab shelled for you; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区林下町434 EXIT祇園ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with news dated April 2026; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.005510, 135.777203) shares EXIT祇園ビル (林下町434) with kyoto_sushi_no_kura and 祇園 えばた; pin moved ~3 m south-west to (35.005490, 135.777180), 8 m from Sushi no Kura and 6.5 m from Ebata; GSI 京都府京都市東山区林下町434番地 (lot) 13 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB, R + 'B523641455/', R + 'B528585805/'],
    price_note: 'Courses named on the official site; lunch prices from March–May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch crab course', '¥12,000', 'Lunch', 'ask', 'no', 'May 2026.', 'lunch_12000'),
      it('', '', 'Lunch crab course', '¥14,000', 'Lunch', 'ask', 'no', 'March 2026.', 'lunch_14000'),
      it('香住御膳', 'Kasumi gozen', 'Kasumi crab bowl with crab-miso shell and dashi (lunch only)', '', 'Lunch', 'ask', 'no', 'Official site, January 2026.', 'kasumi_gozen'),
      it('', '', 'Live Shibayama (Matsuba) crab course', '', 'Course', 'ask', 'no', 'November–March.', 'shibayama_course'),
    ] }, {
    cuisine: '1941年創業の香住の蟹仲買人が営む活蟹の専門店。兵庫の柴山・香住漁港から自社便で運び、調理の直前まで生かしておく。蟹以外の魚介は出さない (公式サイト)・11月〜3月は活柴山がに (松葉がに) のコース、秋から初夏は活香住ガニ (紅ずわい)、夏は Hokkaido の毛蟹のフルコース (公式サイト、2026年の口コミ)・刺身、焼き、しゃぶ、雑炊 (公式サイト)・ランチ: 蟹味噌の甲羅焼をのせ出汁をかける香住ガニ丼 (公式サイト、2026年3月)、季節のクッペのランチ (2026年1月)、ランチコース12,000〜14,000円 (2026年の口コミ)・締めに抹茶プリン (2026年8月)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '八坂神社と知恩院の近くの祇園。祇園四条駅から徒歩6分',
    gf_detail: '要確認。刺身、焼き蟹、蟹しゃぶ、甲羅の蟹味噌、出汁をかける蟹丼、雑炊、ラーメンなどの蟹のコース。グルテンの情報はない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。どのコースも活蟹が中心の蟹だけの店 (公式サイト)。',
    notes: '[蟹・知恩院近くの祇園、兵庫の活蟹] 八坂神社近くの蟹だけの店。1941年創業の香住の蟹仲買人が、柴山・香住漁港から活蟹を運び、注文ごとに料理する: 冬は松葉がに (柴山がに)、春は紅ずわい、夏は毛蟹を、刺身、焼き、しゃぶ、雑炊で。ランチコースは12,000〜14,000円ほど、出汁で締める蟹丼も。値段に見合うという声の一方、2026年3月の客は高すぎると感じ、品書きの柴山がにではなく香住ガニが出たと書いている。完全予約制。',
  });
}

// ================================================================ 祇園 えばた
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035999/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_gion_ebata', name: '祇園 えばた (Gion Ebata)', category: 'OMNI',
    lat: 35.005480, lng: 135.777250, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A yakiniku course with tare and seasoned meats, kimchi, a beef-roast salad and curry to finish; no gluten information (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat course of beef cuts and offal grilled at the counter (Tabelog; 2023–2026 reviews).',
    hours_raw: 'Tuesday to Sunday 18:00–23:00, last entry 21:00; closed Monday (Tabelog). Reservation only; one omakase course (Tabelog; 2024 reviews). 14 counter seats; private hire up to 20; non-smoking; no children (Tabelog). Cards (Tabelog). At the back of EXIT祇園 on the ground floor, opposite the Chion-in entrance — hard to find the first time; 7 min walk from Gion-Shijo or Higashiyama stations (Tabelog; March 2023; May 2025). Opened 1 June 2021 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion opposite the Chion-in entrance — 7 min walk from Gion-Shijo Stn',
    cuisine: '"Meat kappo": a single omakase course of many cuts grilled for you at the counter, from the owner of a long-established Kitano Hakubaicho yakiniku house known for hormone (Tabelog; 2024 review) · e.g. salad and kimchi, fresh tongue, grilled cuts, roast-beef salad, Chateaubriand, abomasum with green onion, curry and soup to finish, ice cream (2023–2026 reviews) · wine by the glass, sake, shochu, highballs (Tabelog; 2023 review) · about ¥10,000–20,000 (Tabelog; 2024–2025 reviews)',
    website: null, gmaps: gm('祇園 えばた 焼肉'), menu_url: null,
    notes: '[Yakiniku · Gion opposite Chion-in, grilled for you at the counter] The Gion counter of a long-loved Kitano Hakubaicho hormone house: one omakase course of beef and offal grilled in front of you and served at just the right moment — fresh tongue, Chateaubriand, abomasum with green onion — ending with a curry many ask seconds of. About ¥10,000–15,000; drinks are Gion-priced. Chatty owner and staff, but one 2024 newcomer felt out of place among regulars. Hidden at the back of the building. No children. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and staff'], origin: null,
      background: 'Per Tabelog: the owner of a popular, long-established yakiniku restaurant in Kitano Hakubaicho opened this Gion shop, serving one omakase course of cuts grilled at the counter; opened 1 June 2021. A November 2024 reviewer recalls the parent Ebata near Senbon Imadegawa, famous for gyū-ranegi. Reviewers describe an entertaining manager (July 2025), owner and staff who talk with regulars and first-timers (March 2023), and "the couple running the restaurant" (March 2026).',
      philosophy: 'A traditional hormone house\'s flavours served as a counter course (Tabelog).', specialty: 'Omakase meat course; curry to finish.',
      anecdotes: [
        { text: 'A March 2026 visitor found the couple running the restaurant friendly and chatty with tourists, and asked for a second helping of the closing curry.', source: R + 'B525058606/' },
        { text: '"Last time, I ended up eating three bowls of rice early on, which made the later part of the meal quite difficult, so this time I practiced some moderation (laughs)." — July 2025.', source: R + 'B482884686/' },
        { text: '"Perhaps it was just coincidence, but it felt a bit awkward as we were the only newcomers among regulars. Also, being in Gion, the drinks were understandably pricey." — May 2024.', source: R + 'B484708150/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉、東山区林下町434 EXIT祇園1F、祇園四条駅・東山駅から徒歩7分、火〜日 18:00〜23:00 (最終入店21:00)、月曜休み、完全予約制、14席 (カウンター)、貸切20名まで、禁煙、子ども不可、カード可、2021年6月1日オープン、北野白梅町の老舗焼肉店の店主が祇園に開いた店、おまかせコースのみ、目の前で焼く、肉割烹。口コミ (2023年3月〜2026年3月、英語): 姉妹店の千本今出川のえばた、サラダとキムチ、タン、ローストビーフのサラダ、シャトーブリアン、ギアラのねぎ、締めのカレーとスープ、知恩院の入口の向かい、建物の奥で見つけにくい、店主とスタッフの会話、夫婦で営む (2026年3月)、常連ばかりで気まずかったとの声 (2024年5月)。',
      confidence: 'medium', sources: [TB, R + 'B469629988/', R + 'B475700574/', R + 'B482884686/', R + 'B484708150/', R + 'B486526852/', R + 'B496146870/', R + 'B507855486/', R + 'B511530778/', R + 'B525058606/', R + 'B529833953/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; one course grilled for you; at the back of the building; no children; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区林下町434 EXIT祇園 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.005511, 135.777240) lies 3 m from kyoto_sushi_no_kura in the same building (林下町434); pin moved 3.5 m south to (35.005480, 135.777250), 6.3 m from Sushi no Kura and 6.5 m from 祇園 かにを喰らう; GSI 京都府京都市東山区林下町434番地 (lot) 19 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529833953/', R + 'B486526852/'],
    price_note: 'No menu prices read; bills about ¥10,000–20,000.', last_checked: TODAY, items: [
      it('', '', 'Omakase meat course', '', 'Course', 'ask', 'no', 'Only menu.', 'omakase'),
      it('', '', 'Course with Chateaubriand', '', 'Course', 'ask', 'no', 'February 2024.', 'chateaubriand_course'),
    ] }, {
    cuisine: '「肉割烹」: 北野白梅町のホルモンで知られる老舗焼肉店の店主による、カウンターで焼いて出す多くの部位のおまかせコースひとつ (食べログ、2024年の口コミ)・例: サラダとキムチ、生のタン、焼き物、ローストビーフのサラダ、シャトーブリアン、ギアラのねぎのせ、締めのカレーとスープ、アイス (2023〜2026年の口コミ)・グラスワイン、日本酒、焼酎、ハイボール (食べログ、2023年の口コミ)・10,000〜20,000円ほど (食べログ、2024〜2025年の口コミ)',
    neighborhood: '知恩院の入口の向かいの祇園。祇園四条駅から徒歩7分',
    gf_detail: '要確認。タレや下味の肉、キムチ、ローストビーフのサラダ、締めのカレーの焼肉コース。グルテンの情報はない (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。カウンターで焼く牛の部位とホルモンのコース (食べログ、2023〜2026年の口コミ)。',
    notes: '[焼肉・知恩院の向かい、カウンターで焼いてくれる] 北野白梅町で長く愛されるホルモンの店の祇園のカウンター。牛と内臓を目の前で焼き、ちょうどよい頃合いで出すおまかせのコースひとつ: 生のタン、シャトーブリアン、ギアラのねぎのせ、締めのカレーはおかわりする客も。10,000〜15,000円ほどで、酒は祇園の値段。店主とスタッフは話好きだが、2024年に初めて来た客は常連ばかりで気まずかったと書いている。建物の奥。子ども不可。月曜休み。',
  });
}

// ================================================================ here
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032789/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://coffeehere.world/';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_here_coffee', name: 'here', category: 'OMNI',
    lat: 35.009230, lng: 135.755229, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee and tea alongside canelé, croissants, sandwiches and a house pudding; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Lattes can be made with oat milk (official Instagram feed), and black coffee and tea are plant-based, but the pudding, canelé and pastries use egg and dairy (official site; 2026 reviews).',
    hours_raw: 'Daily 9:00–18:00, irregular closures; hours may change (Tabelog). No reservations; order at the counter and you are called to collect (Tabelog; October 2026). Busy with visitors from abroad at times (August–September 2026). Cards and e-money; no QR (Tabelog). Non-smoking (Tabelog). Ground floor of the hotel 椛 京都三条, between Karasuma and Karasuma Oike stations; 10 min walk from Nijojo-mae Stn (Tabelog; October 2026). Opened 27 July 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo west of Karasuma, hotel ground floor — between Karasuma and Karasuma Oike stations',
    cuisine: 'Specialty coffee café, one of a small group with a Kyoto kiosk and shops in Tainan and Shanghai (official site) · single-origin espresso, e.g. Ethiopia Bench Maji Geisha G1 Natural ¥400 (October 2026); café latte and iced latte (September 2026); coffee and tea about ¥500 (September 2026); organic green rooibos ¥450 (September 2026) · house pudding ¥650 with vanilla ice cream; canelé; croissants; sandwiches (2026 reviews)',
    website: WEB, gmaps: gm('here coffee 京都 三条'), menu_url: null,
    notes: '[Coffee · Sanjo near Karasuma Oike, opens at 9] A spacious, concrete-walled café on the ground floor of a hotel near Karasuma Oike, built around a big shared table: single-origin espresso and fruity iced lattes, a firm house pudding with vanilla ice cream (¥650), and a chewy canelé. Coffee and tea run about ¥400–500. Popular with visitors from abroad, so busy at times. Open daily 9:00–18:00.',
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed)'], origin: null,
      background: 'Per Tabelog: opened 27 July 2019. Per the official site: the brand also runs here Kyoto kiosk and shops in Tainan and Shanghai, marked its seventh anniversary, and is recruiting staff. Reviewers in 2026 describe staff who explain the coffees attentively and a large open table under exposed concrete.',
      philosophy: null, specialty: 'Single-origin espresso and latte; pudding; canelé.',
      anecdotes: [
        { text: '"The iced latte here is truly delicious! If you love single-origin café lattes, you must visit this place." — September 2026.', source: R + 'B537779496/' },
        { text: 'An October 2026 guest, back for a second visit after loving the canelé, ordered the pudding and found the price justified by the vanilla-bean ice cream and portion; only the coffee could have been hotter.', source: R + 'B537250439/' },
        { text: '"During certain times, it can get quite crowded with inbound tourists, which might not be ideal for those looking to relax alone." — August 2026.', source: R + 'B534565751/' },
      ],
      japanese_sources_summary: '公式サイト: here、here Kyoto kiosk、Tainan と Shanghai の店舗、7周年、スタッフ募集、オーツミルクのラテ。食べログ: カフェ、中京区姉西洞院町524 椛 京都三条1F、二条城前駅から徒歩10分、毎日 9:00〜18:00、不定休、予約不可、禁煙、カード・電子マネー可、QR 不可、2019年7月27日オープン。口コミ (2026年8月〜10月、英語): 烏丸駅と烏丸御池駅の間、ホテルの1階、コンクリート打ち放しで大きなテーブル、エチオピアのエスプレッソ400円、カフェラテ、アイスラテ、コーヒーと紅茶は500円ほど、オーガニックのグリーンルイボス450円、プリン650円 (バニラアイス付き)、カヌレ、クロワッサン、サンドイッチ、海外の客が多く混む時間がある。',
      confidence: 'medium', sources: [WEB, TB, R + 'B496516164/', R + 'B534565751/', R + 'B535099145/', R + 'B535358969/', R + 'B535901190/', R + 'B536881564/', R + 'B537250439/', R + 'B537418050/', R + 'B537779496/', R + 'B538618299/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter and collect when called; cards and e-money.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区姉西洞院町524 椛 京都三条 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009230, 135.755229); cross-checked: GSI 京都府京都市中京区姉西洞院町524番地 (lot) 12 m; kyr_goriki is 55 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538618299/', R + 'B535901190/'],
    price_note: 'No menu read; prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Espresso (Ethiopia Bench Maji Geisha G1 Natural)', '¥400', 'Coffee', 'ask', 'ask', 'October 2026.', 'espresso'),
      it('', '', 'Original pudding with vanilla ice cream', '¥650', 'Sweets', 'ask', 'no', 'September 2026.', 'pudding'),
      it('', '', 'Organic green rooibos tea', '¥450', 'Tea', 'ask', 'ask', 'September 2026.', 'rooibos'),
      it('', '', 'Canelé', '', 'Sweets', 'no', 'no', '', 'canele'),
    ] }, {
    cuisine: '京都の kiosk、Tainan、Shanghai にも店のある小さなグループのスペシャルティコーヒーのカフェ (公式サイト)・シングルオリジンのエスプレッソ (例: Ethiopia Bench Maji Geisha G1 Natural 400円、2026年10月)、カフェラテ、アイスラテ (2026年9月)、コーヒーと紅茶は500円ほど (2026年9月)、オーガニックのグリーンルイボス450円 (2026年9月)・自家製プリン650円 (バニラアイス付き)、カヌレ、クロワッサン、サンドイッチ (2026年の口コミ)',
    neighborhood: '烏丸の西の三条通、ホテルの1階。烏丸駅と烏丸御池駅の間',
    gf_detail: '要確認。コーヒーや紅茶のほか、カヌレ、クロワッサン、サンドイッチ、自家製プリン。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。ラテはオーツミルクでも作れ (公式のインスタグラム)、ブラックコーヒーや紅茶は植物性だが、プリン、カヌレ、焼き菓子には卵や乳を使う (公式サイト、2026年の口コミ)。',
    notes: '[コーヒー・烏丸御池近くの三条、朝9時から] 烏丸御池近くのホテルの1階、コンクリート打ち放しの広いカフェで、大きな共用テーブルが中心。シングルオリジンのエスプレッソとフルーティーなアイスラテ、しっかりした自家製プリンにバニラアイス (650円)、もちもちのカヌレ。コーヒーや紅茶は400〜500円ほど。海外の客に人気で混む時間も。毎日9:00〜18:00。',
  });
}

// ================================================================ サケホール 益や
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029819/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['17:00', '22:30']); const FR = day(['17:00', '23:30']); const SA = day(['15:00', '23:30']); const SU = day(['15:00', '22:30']);
  put({
    id: 'kyoto_sake_hall_masuya', name: 'サケホール 益や (SAKE-HALL MASUYA)', category: 'OMNI',
    lat: 35.006252, lng: 135.760363, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Creative izakaya dishes — kara-age, fried octopus and chicken nanban with tartar, corn tempura, spring rolls, yuba pizza, gratin, chilled soba — beside sashimi and tofu; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tofu, ginkgo nuts and some vegetable dishes appear, but most dishes are fish, chicken, beef or cheese; no vegan information (2026 reviews).',
    hours_raw: 'Monday, Tuesday and Thursday 17:00–22:30; Friday and the day before a holiday 17:00–23:30; Saturday 15:00–23:30; Sunday 15:00–22:30; holidays 15:00–23:00; closed Wednesday, with other closures posted on Instagram (Tabelog). Reservations accepted; seating type (counter or table) may change on the day; same-day bookings possible (Tabelog; September 2026). An otoshi of ¥450 — a small dish with a glass of sake (Tabelog original 付き出し料金450円; August and October 2026). 40 seats at the counter, tables and private rooms (private rooms for courses from ¥6,500); a standing area; non-smoking; wheelchair accessible (Tabelog; August 2026). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). A renovated townhouse with a courtyard on Takoyakushi east of Karasuma; 3 min walk from Karasuma or Shijo stations (Tabelog).',
    hours: { 0: WK, 1: WK, 3: WK, 4: FR, 5: SA, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takoyakushi east of Karasuma — 3 min walk from Karasuma / Shijo stations',
    cuisine: 'Sake hall in a renovated townhouse with a courtyard: over 40 sakes from across Japan, changing daily, by the half-gō or in tasting sets, with creative Japanese dishes; weekend daytime drinking; party courses (Tabelog) · e.g. fried octopus with shibazuke tartar, corn tempura, cheese with shuto (August 2026); kara-age with shibazuke tartar, yuba pizza with gorgonzola (September 2026); chicken nanban with curry tartar, eggplant gratin (September 2026); assorted sashimi, spring rolls of fig, avocado and blue cheese (October 2026); ginkgo nuts, tofu, chawanmushi, chilled soba with marbled beef (October 2026) · sake highball; Akabu, Hanayuki (2026 reviews) · bills about ¥3,000–6,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('サケホール 益や 京都'), menu_url: null,
    notes: '[Sake hall · Takoyakushi Karasuma, 40 sakes in a townhouse] A renovated townhouse near Shijo Karasuma turned into a sake hall: forty-odd sakes from across Japan, poured by the half-gō or in tasting flights, with knowledgeable staff to guide you, and inventive snacks — octopus or kara-age with shibazuke tartar, yuba pizza, fig and blue-cheese spring rolls. The ¥450 otoshi includes a glass of sake. Counter, tables, a standing area and a courtyard; open from 3 pm at weekends. Drinks can add up. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a renovated Kyoto townhouse with a courtyard, more than 40 sakes chosen from across Japan and changing daily, creative Japanese dishes, and weekend daytime drinking. Reviewers in 2026 describe knowledgeable, younger staff, a sake list organised by type, and staff who phoned a guest about a forgotten umbrella.',
      philosophy: 'Casual yet authentic sake, easy for beginners (Tabelog).', specialty: 'Sake flights; shibazuke tartar dishes.',
      anecdotes: [
        { text: 'A September 2026 guest who left a folding umbrella behind was promptly phoned by the staff on the number given when booking.', source: R + 'B535401714/' },
        { text: '"I started with a Japanese sake highball, and to my surprise, the appetizer came with a small cup of sake as well." — August 2026.', source: R + 'B534199977/' },
        { text: '"The drinks were a bit on the pricey side, but the food was so good that I plan to visit again." — September 2026.', source: R + 'B536116916/' },
      ],
      japanese_sources_summary: '食べログ: 日本酒バー・居酒屋・日本料理、中京区蛸薬師通烏丸東入ル一蓮社町298-2 1F、烏丸駅・四条駅から徒歩3分、月・火・木 17:00〜22:30、金・祝前日 17:00〜23:30、土 15:00〜23:30、日 15:00〜22:30、祝日 15:00〜23:00、水曜休み (ほかの休みはインスタで)、予約可、付き出し料金450円、40席 (カウンター、テーブル、個室)、立ち飲みあり、禁煙、車椅子可、カード・電子マネー・QR 可、京町家を改装、中庭、全国から選んだ日本酒40種以上、半合から、飲み比べ、週末は昼飲み、宴会コース。口コミ (2026年8月〜10月、英語): 付き出しに日本酒が一杯、たこの唐揚げと柴漬けタルタル、とうもろこしの天ぷら、湯葉のピザ、カレータルタルのチキン南蛮、茄子のグラタン、刺身の盛り合わせ、無花果とアボカドとブルーチーズの春巻き、銀杏、豆腐、茶碗蒸し、霜降り牛の冷やしそば、Akabu、Hanayuki、スタッフが詳しい、忘れた傘を電話で知らせてくれた、酒はやや高め。',
      confidence: 'medium', sources: [TB, R + 'B534199977/', R + 'B534552938/', R + 'B535367669/', R + 'B535401714/', R + 'B536116916/', R + 'B537160628/', R + 'B537454996/', R + 'B538038240/', R + 'B538173659/', R + 'B538319506/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask staff to guide a sake flight; ¥450 otoshi with sake; cards, e-money and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区蛸薬師通烏丸東入ル一蓮社町298-2 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006252, 135.760363); cross-checked: GSI 京都府京都市中京区一蓮社町298番地 (lot) 9 m; kyr_ramen_mugyu_vol_2_karasu is 34 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B537160628/'],
    price_note: 'No menu prices read except the ¥450 otoshi.', last_checked: TODAY, items: [
      it('', '', 'Otoshi (small dish with a glass of sake)', '¥450', 'Charge', 'ask', 'ask', 'Tabelog original 付き出し料金450円.', 'otoshi'),
      it('', '', 'Fried octopus with shibazuke tartar', '', 'Food', 'no', 'no', 'August 2026.', 'tako_karaage'),
      it('', '', 'Yuba pizza with gorgonzola', '', 'Food', 'no', 'no', 'September 2026.', 'yuba_pizza'),
      it('', '', 'Sake tasting set', '', 'Sake', 'ask', 'ask', 'Tabelog.', 'sake_flight'),
    ] }, {
    cuisine: '中庭のある京町家を改装した日本酒の店: 全国から選び日替わりの日本酒40種以上を半合から、飲み比べも、創作の日本料理とともに。週末は昼飲み、宴会コースも (食べログ)・例: たこの唐揚げの柴漬けタルタル、とうもろこしの天ぷら、酒盗のせチーズ (2026年8月)、唐揚げの柴漬けタルタル、ゴルゴンゾーラの湯葉ピザ (2026年9月)、カレータルタルのチキン南蛮、茄子のグラタン (2026年9月)、刺身の盛り合わせ、無花果とアボカドとブルーチーズの春巻き (2026年10月)、銀杏、豆腐、茶碗蒸し、霜降り牛の冷やしそば (2026年10月)・日本酒ハイボール、Akabu、Hanayuki (2026年の口コミ)・会計は3,000〜6,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '烏丸の東、蛸薬師通。烏丸駅・四条駅から徒歩3分',
    gf_detail: '要確認。唐揚げ、たこの唐揚げやチキン南蛮のタルタル、とうもろこしの天ぷら、春巻き、湯葉ピザ、グラタン、冷やしそばなどの創作居酒屋料理と、刺身、豆腐。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。豆腐、銀杏、野菜の料理もあるが、多くは魚、鶏、牛、チーズの料理。ヴィーガンの情報はない (2026年の口コミ)。',
    notes: '[日本酒・蛸薬師烏丸、町家に40種の日本酒] 四条烏丸近くの京町家を改装した日本酒の店。全国の日本酒40種ほどを半合や飲み比べで、詳しいスタッフが案内してくれる。肴は工夫があり、たこや唐揚げの柴漬けタルタル、湯葉ピザ、無花果とブルーチーズの春巻きなど。付き出し450円には日本酒が一杯つく。カウンター、テーブル、立ち飲み、中庭。週末は15時から。酒代はかさむことも。水曜休み。',
  });
}

save();
