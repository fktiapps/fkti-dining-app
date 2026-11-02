// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 3.
//   + おさかな屋オカピ Osakana Ya Okapi (seafood izakaya and lunch bowls, Osaka Station Building No. 4 B2F, since 2022)
//   + てんぷら 木坂 Tempura Kisaka (tempura counter in Kitashinchi, since 2014)
//   + 北新地 鮨 なか川 Kitashinchi Sushi Nakagawa (sushi and sake course, Kitashinchi, since 2014)
//   + Sushi Tiger OSAKA (Japan's first branch of a Vietnamese sushi brand, Kitashinchi, opened 21 September 2026)
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-01, after b2): the first four odd ids, 27129531,
//   27078383, 27080633, 27139623.
//   Chain check: Okapi calls itself a shop run directly by a central-market wholesaler (Tabelog); no other shop found.
//   Kisaka and Nakagawa: no other shop found. Sushi Tiger is a brand from Vietnam (Ho Chi Minh City, then Hanoi per Viet Nam
//   News, 26 July 2026); this is its first shop in Japan (Tabelog), so it is not a chain inside Japan. None is in
//   data/osaka.json (grep by id, name and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, save } = openCitySweep('osaka-kita', TODAY, 'osw6-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ おさかな屋オカピ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27129531/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:30'], ['17:00', '23:00']), WE = day(['14:00', '22:00']);
  put({
    id: 'osaka_osakana_ya_okapi_umeda', name: 'おさかな屋オカピ (Osakana Ya Okapi)', category: 'OMNI',
    lat: 34.700231, lng: 135.499479, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Tempura (hamo, anago) is wheat-battered; rice bowls and sashimi are usually eaten with soy sauce, which normally contains wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; the lunch bowls come with a fish-broth miso soup (2026 reviews).',
    hours_raw: 'Tue–Fri 11:30–14:30 (last order 14:00) and 17:00–23:00 (last order food 22:00, drinks 22:30); Sat, Sun and holidays 14:00–22:00 (last order food 21:00, drinks 21:30); closed Monday (Tabelog). The limited lunch tuna bowl can sell out by 12:30 (July 2026). Reservations accepted, including through Tabelog (July and August 2026); a weekday group walked in without one (October 2026). No service or cover charge (Tabelog). Cards (VISA, Master, JCB, AMEX) and PayPay; no e-money (Tabelog). 20 seats: 12 at the counter, two tables for four; private hire up to 20; smoking allowed (Tabelog; July 2026). Opened 10 June 2022 (Tabelog).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Osaka Station Building No. 4, B2F — 1 min from Higashi-Umeda Stn',
    cuisine: 'Seafood izakaya run directly by a central-market wholesaler, with fish delivered every morning (Tabelog) · lunch bowls with a fish-broth miso soup: seafood yukke bowl ¥900 (August and October 2026), Okapi\'s tuna bowl ¥900 (July 2026, limited), seafood bowl ¥1,000 with salmon, ikura and shirasu, miso soup, salad and pickles (July–October 2026) · evenings: sashimi platters (three kinds: salmon, sea bream, yellowtail; five kinds with seared pieces), large creamy oysters, horse-mackerel namerou, hamo and anago tempura, shirayaki eel (August–September 2026), grilled sanma and a seafood potato salad (September 2026), seared bonito (October 2026) · seasonal fish from across Japan, e.g. grilled turban shell from Mie and raw Hokkaido oysters (Tabelog) · shochu such as "Ikino Tsuyu" and "Tokuchu Amakusa", sake, Asahi Maru F draft beer',
    website: null, gmaps: gm('おさかな屋オカピ 大阪駅前第4ビル'), menu_url: null,
    notes: "[Seafood izakaya · Umeda, Osaka Station Building No. 4 B2F] A small seafood bar in the basement of Osaka Station Building No. 4, a minute from Higashi-Umeda, run directly by a fish wholesaler from the central market, with fish delivered each morning. At lunch it sells seafood bowls for ¥900–1,000 with a fish-broth miso soup that diners single out; one regular on a ninth visit still calls the price remarkable (October 2026), and the limited tuna bowl goes early. From mid-afternoon at weekends and in the evening it is a drinking spot: thick-cut sashimi platters, palm-sized oysters, namerou, hamo and anago tempura and grilled eel, with shochu and a Maru F draft. Twelve counter seats suit solo diners; smoking is allowed. One August 2026 diner found the food slow to come, and one September 2026 diner found the seats cramped and the service cool.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who chooses the ingredients every day (Tabelog)'], origin: 'Run directly by a wholesaler at the Osaka central market (Tabelog).', background: 'Shop text (Tabelog): "Directly operated store of Osaka Central Market"; a seafood tavern on B2F of Osaka Station Front Building, run directly by a central market wholesaler, with fresh seafood delivered every morning; "Carefully Selected Ingredients Sourced Daily by the Owner". Opened 10 June 2022.', philosophy: 'Fresh seafood from the market every morning, with shochu to match (Tabelog).', specialty: 'Seafood rice bowls at lunch; sashimi platters and oysters at night.',
      anecdotes: [
        { text: '"I decided to go with the seafood yukke rice bowl for JPY 900. I think it\'s an incredible value to get this bowl for under JPY 1,000. The miso soup, infused with fish broth, was absolutely delicious." — October 2026, a ninth visit.', source: R + 'B488071347/' },
        { text: '"The oysters were huge and creamy, absolutely delightful. The mackerel namero was a perfect match for beer." — August 2026, a Saturday 14:00 booking.', source: R + 'B532872745/' },
        { text: '"The dishes come out slowly, so it\'s a great spot to relax when you have some time." — August 2026, a first visit.', source: R + 'B534431568/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B488071347/', R + 'B531128740/', R + 'B531637807/', R + 'B532421270/', R + 'B532872745/', R + 'B534431568/', R + 'B536395815/', R + 'B537584991/', R + 'B537967504/', R + 'B538478195/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats for solo diners; lunch bowls ordered at the seat (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区梅田1-11-4 大阪駅前第4ビル B2F-70',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区梅田一丁目11番4号 (go) 74m (a large station-front building; the shop is on B2F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B488071347/', R + 'B532421270/', R + 'B537967504/'],
    price_note: 'Lunch bowl prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Seafood yukke rice bowl (lunch, with miso soup)', '¥900', 'Lunch', 'ask', 'no', 'October and August 2026 reviews.', 'seafood_yukke_bowl'),
      it('', '', 'Okapi\'s tuna rice bowl (lunch, limited)', '¥900', 'Lunch', 'ask', 'no', 'July 2026 review.', 'tuna_bowl'),
      it('', '', 'Seafood rice bowl with miso soup, salad and pickles (lunch)', '¥1,000', 'Lunch', 'ask', 'no', 'July and September 2026 reviews.', 'seafood_bowl'),
      it('', '', 'Assorted sashimi platter (3 or 5 kinds)', '', 'Sashimi', 'ask', 'no', 'August and September 2026 reviews.', 'sashimi_platter'),
      it('', '', 'Hamo or anago tempura', '', 'Tempura', 'no', 'no', 'August 2026 reviews.', 'tempura'),
    ] }, {
    cuisine: '中央市場の仲卸の直営の魚の居酒屋、魚は毎朝届く (食べログ)・ランチの丼は魚のだしのみそ汁つき: 海鮮ユッケ丼900円 (2026年8月・10月)、Okapi のマグロ丼900円 (2026年7月、数量限定)、サーモン、いくら、しらすの海鮮丼1,000円、みそ汁、サラダ、漬物つき (2026年7〜10月)・夜: 刺身の盛り合わせ (サーモン、鯛、ブリの3種、炙りも入る5種)、大きくクリーミーな牡蠣、アジのなめろう、はもとあなごの天ぷら、うなぎの白焼き (2026年8〜9月)、サンマの塩焼き、海鮮ポテトサラダ (2026年9月)、カツオのたたき (2026年10月)・全国の旬の魚、たとえば Mie のサザエのつぼ焼き、Hokkaido の生牡蠣 (食べログ)・焼酎は Ikino Tsuyu、Tokuchu Amakusa など、日本酒、生ビールはアサヒ Maru F',
    neighborhood: '大阪駅前第4ビルの地下2階。東梅田駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。天ぷら (はも、あなご) は小麦の衣。丼や刺身にはふつう醤油を使い、小麦を含む。',
    vegan_detail: 'ヴィーガンではありません。魚の居酒屋で、ランチの丼には魚のだしのみそ汁がつく (2026年の口コミ)。',
    notes: '[魚の居酒屋・梅田、大阪駅前第4ビル地下2階] 東梅田駅から1分、大阪駅前第4ビルの地下にある小さな魚の店で、中央市場の仲卸の直営、魚は毎朝届く。昼は900〜1,000円の海鮮丼で、魚のだしのきいたみそ汁がよく話題になる。9回目の来店だという人も今なおこの値段に驚いていて (2026年10月)、数量限定のマグロ丼は早くなくなる。週末は昼過ぎから、平日は夜に飲む店になり、厚切りの刺身の盛り合わせ、手のひら大の牡蠣、なめろう、はもやあなごの天ぷら、うなぎの白焼きを、焼酎や Maru F の生ビールと。カウンター12席はひとり客向き、喫煙可。2026年8月には料理が出るのがゆっくりだった、9月には席がせまくサービスもいまひとつだったという声も。',
  });
}

// ================================================================ てんぷら 木坂
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27078383/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:30', '23:00']);
  put({
    id: 'osaka_tempura_kisaka_kitashinchi', name: 'てんぷら 木坂 (Tempura Kisaka)', category: 'OMNI',
    lat: 34.697773, lng: 135.495808, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a tempura counter; every course is wheat-battered tempura (the chef dusts each piece with flour, October 2026), finished with a tempura rice bowl or tempura chazuke.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses mix seafood (shrimp, kisu, hamo, anago, abalone, caviar) with vegetables, and finish with a dashi-based tempura chazuke or a rice bowl.',
    hours_raw: 'Daily 11:30–15:00 (last order 14:00) and 17:30–23:00 (last order 21:00); closing days not fixed (Tabelog). Reservations accepted; give a phone number that answers or an online booking is cancelled (Tabelog). Lunch is cash only (Tabelog; October 2026); cards (VISA, Master, JCB, AMEX, Diners) at dinner; no e-money or QR (Tabelog). One drink per person; no bringing your own alcohol; children order a course too (Tabelog). 15 seats, about seven at the counter plus tables (September 2026); groups of 12–15 or private hire up to 20; non-smoking (Tabelog). Opened 14 April 2014 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, 7F of a building at the west end of the Kitashinchi main street, near the Sakurabashi crossing — 2 min from JR Kitashinchi Stn and Nishi-Umeda Stn',
    cuisine: 'Tempura counter: seasonal vegetables chosen with a vegetable sommelier, some of them rare, two frying oils, live shrimp from a tank fried two ways, and a rice blend chosen by a rice master for the tendon, tencha and tempura rolls (Tabelog) · dinner courses (Tabelog, tax included): 13 tempura in 18 dishes ¥8,800; 14 tempura ¥11,000; 15 tempura with abalone ¥14,300 · lunch: custom tendon ¥1,200 (choose four from shrimp, hamo, kisu, squid and four vegetables; miso soup, pickles, iced coffee or tea; September 2026); premium tendon with two shrimp and abalone ¥3,500 (October 2026); a 9-item tempura course with sesame tofu and ikura, salad and sparkling wine, ending in a kakiage rice bowl and an orange served in its peel (October 2026); the abalone course at lunch (August 2026) · pieces named in 2026 reviews: shrimp, kisu, hamo, anago, sea bass, sawara or amadai with caviar, fugu shirako, abalone, Beni Haruka and Anno sweet potato, fig, lotus root, makomotake, maitake · finish with a tempura rice bowl or tempura chazuke · sake to match',
    website: null, gmaps: gm('てんぷら 木坂 北新地'), menu_url: null,
    notes: "[Tempura · Kitashinchi, a seventh-floor counter] A tempura counter on the seventh floor of a building at the west entrance of Kitashinchi's main street, near the Sakurabashi crossing. The shop chooses seasonal vegetables with a vegetable sommelier, fries in two oils, and keeps shrimp alive in a tank; the chef dusts each piece with a brush. Courses run ¥8,800–14,300 at dinner, through shrimp, kisu, hamo and abalone to sweet potato and figs, and end with a tempura rice bowl or tempura chazuke whose dashi a third-time diner calls exquisite (October 2026). Lunch is the bargain: a ¥1,200 tendon built from eight pieces you choose, or an abalone tendon for ¥3,500, cash only. With a small kitchen team, food can take a while; allow time. One September 2026 diner noticed a cloth smell on the rice bowl. Staff walked one diner to the lift (October 2026).",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), who fries at the counter', 'Owner (unnamed; "friendly and easy to talk to", September 2026 review)'], origin: null, background: 'Shop text (Tabelog): seasonal ingredients and carefully selected tempura; seasonal vegetables sourced in consultation with a vegetable sommelier, including rare ones; two frying oils; live shrimp; a rice blend chosen by a rice master for tendon, tencha and tempura rolls. Opened 14 April 2014. In 2026 reviews: the chef "seemed very sincere" and the owner "friendly and easy to talk to" (September); "a skilled team of two chefs and one part-timer" (October); a September diner describes it as a one-person operation at the fryer.', philosophy: 'Seasonal ingredients fried to bring out their own flavour (Tabelog).', specialty: 'Seasonal tempura course; custom tendon at lunch.',
      anecdotes: [
        { text: '"The dashi for the tempura rice at the end was exquisite, making the meal enjoyable until the very last bite." — October 2026, a third visit.', source: R + 'B467966566/' },
        { text: '"You can customize your tempura rice bowl with 4 items from a selection of shrimp, conger eel, whiting, and squid. Choose 4 more items from onions, lotus root, broccoli, maitake mushrooms, sweet potatoes, pumpkin, and eggplant." — September 2026, the ¥1,200 lunch.', source: R + 'B535354021/' },
        { text: '"The chef skillfully dusts the tempura with flour using a brush." — October 2026, the ¥3,500 premium tendon.', source: R + 'B538422016/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B119200358/', R + 'B467966566/', R + 'B531841567/', R + 'B533772433/', R + 'B535354021/', R + 'B536044535/', R + 'B536604654/', R + 'B537803180/', R + 'B538422016/', R + 'B538429757/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set tempura courses at the counter; lunch is cash only (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-3-19 北新地ビルディング 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目3番19号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535354021/', R + 'B538422016/'],
    price_note: 'Dinner courses from the Tabelog listing (tax included); lunch prices from September and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Dinner course: 13 tempura (18 dishes)', '¥8,800', 'Course', 'no', 'no', 'Tabelog listing.', 'course_8800'),
      it('', '', 'Dinner course: 14 tempura (19 dishes)', '¥11,000', 'Course', 'no', 'no', 'Tabelog listing.', 'course_11000'),
      it('', '', 'Course: 15 tempura with abalone (20 dishes)', '¥14,300', 'Course', 'no', 'no', 'Tabelog listing; August 2026 review (at lunch).', 'course_abalone'),
      it('', '', 'Custom tendon lunch: 8 tempura you choose, miso soup, pickles, iced coffee or tea', '¥1,200', 'Lunch', 'no', 'no', 'September 2026 review.', 'custom_tendon'),
      it('', '', 'Premium tendon with two shrimp and abalone (lunch)', '¥3,500', 'Lunch', 'no', 'no', 'October 2026 review.', 'premium_tendon'),
    ] }, {
    cuisine: '天ぷらのカウンター: 野菜ソムリエと選ぶ季節の野菜 (めずらしいものも)、2種類の揚げ油、生け簀の生きたえびを2通りの揚げ方で、天丼、天茶、天ぷら巻きにはお米マイスターが選んだブレンド米 (食べログ)・夜のコース (食べログ、税込): 天ぷら13種の18品8,800円、14種11,000円、アワビ入り15種14,300円・ランチ: 好きな具を選ぶ天丼1,200円 (えび、はも、キス、イカから4つと野菜4つ、みそ汁、漬物、アイスコーヒーかアイスティー、2026年9月)、えび2本とアワビの上天丼3,500円 (2026年10月)、ごま豆腐といくら、サラダ、スパークリングワインのセットの天ぷら9品のコース、最後はかき揚げ丼と皮を器にしたオレンジ (2026年10月)、昼のアワビのコース (2026年8月)・2026年の口コミに出てくる天ぷら: えび、キス、はも、あなご、スズキ、キャビアをのせたサワラや甘鯛、ふぐの白子、アワビ、Beni Haruka と Anno のさつまいも、いちじく、れんこん、マコモダケ、まいたけ・締めは天丼か天茶・合わせる日本酒',
    neighborhood: '北新地の本通りの西の入口、Sakurabashi の交差点の近くのビルの7階。JR北新地駅と西梅田駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。天ぷらのカウンターで、コースはすべて小麦の衣の天ぷら (大将が刷毛で粉をはたく、2026年10月)。締めは天丼か天茶。',
    vegan_detail: 'ヴィーガンではありません。コースは魚介 (えび、キス、はも、あなご、アワビ、キャビア) と野菜の天ぷらで、締めはだしの天茶か天丼。',
    notes: '[天ぷら・北新地、ビルの7階のカウンター] 北新地の本通りの入口、Sakurabashi の交差点の近くのビルの7階にある天ぷらのカウンター。季節の野菜は野菜ソムリエと選び、2種類の油で揚げ、えびは生け簀で生かしておく。大将は刷毛で粉をはたいて揚げる。夜のコースは8,800〜14,300円で、えび、キス、はも、アワビからさつまいも、いちじくまで。締めは天丼か天茶で、そのだしが絶品という3回目の来店の人の声 (2026年10月)。お得なのはランチで、好きな8品を選ぶ1,200円の天丼や、3,500円のアワビの上天丼があり、ランチは現金のみ。少人数で揚げるので時間に余裕をもって。2026年9月には丼にふきんのにおいがしたという人も。エレベーターまで見送ってもらったという声 (2026年10月)。',
  });
}

// ================================================================ 北新地 鮨 なか川
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27080633/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'osaka_sushi_nakagawa_kitashinchi', name: '北新地 鮨 なか川 (Kitashinchi Sushi Nakagawa)', category: 'OMNI',
    lat: 34.697521, lng: 135.496294, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. One set course of seasonal vegetables, sashimi, a grilled dish (sawara saikyo-yaki in November 2025), 7–8 nigiri and red miso soup; sushi and sashimi are usually served with soy sauce, which normally contains wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: one set course of seafood and sushi, with a shrimp-flavoured red miso soup.',
    hours_raw: 'Mon–Sat 18:00–23:00, last order 21:00; may close early when ingredients run out, so phone ahead (Tabelog). Sundays and holidays: private bookings only, for four or more, booked a day ahead (Tabelog). One course only, ¥22,000 tax included, plus a service fee; seat reservations for guests 10 and over (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 14 seats: 8 at the counter and a table for 6; private rooms for 4 and 6; private hire up to 20; non-smoking; takeout; catering from ¥18,000 a person for 8 or more (Tabelog). Opened 14 July 2014 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, GOTS北新地ビル一号館 3F — 3 min from JR Kitashinchi Stn',
    cuisine: 'One kaiseki-style course, ¥22,000 tax included: seasonal vegetable appetizer, sashimi in the shop\'s own presentation, a grilled speciality, 7–8 pieces of Edomae sushi, a red miso soup made to bring out shrimp (Tabelog) · fish from ports across Japan; rice from Yae Hara, Nagano, "Sun and Earth Rice" with no added sugar; tableware chosen with care (Tabelog) · a November 2025 course: persimmon shiraae, sawara, kue, young kanpachi, aji, sawara saikyo-yaki, ishidai, aori squid, marinated tuna, tachiuo, akagai, shirako, a bowl of raw sakura shrimp and sea urchin, red miso soup, toro · charcoal-grilled fish skin, sweet shrimp (April 2026); toro-taku, anago (January 2026) · Daishinshu sake, a favourite of the chef (January and April 2026); the chef visits sake breweries and wine producers to build pairings (Tabelog) · about ¥20,000–26,000 a person with drinks (August and September 2026)',
    website: 'https://www.sushinakagawa.jp/', gmaps: gm('北新地 鮨 なか川'), menu_url: null,
    notes: "[Sushi · Kitashinchi, a sake-loving sushi counter] An eight-seat sushi counter with private rooms, three floors up in Kitashinchi, serving one course of fish from ports across Japan: seasonal vegetables, thick-cut sashimi, a grilled dish, Edomae nigiri and a shrimp-rich red miso soup, on rice from Yae Hara in Nagano seasoned without sugar. Diners remember the sashimi above all, and a November 2025 course ended with a bowl of raw sakura shrimp and sea urchin. The chef seeks out sake breweries and wine makers for pairings and is fond of Daishinshu sake. Diners describe a warm, entertaining chef, who per an August 2026 diner has ties to surfers and joins beach clean-ups; tell the staff your budget and dishes and drinks are suggested to fit it (January 2025). The course is ¥22,000; with drinks expect ¥20,000–26,000. Book ahead: a September 2026 weekday was full. Private rooms suit business dinners.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed in the sources read)'], origin: null, background: 'Shop text (Tabelog): seafood from ports across Japan; the chef personally visits sake breweries and wine producers to make pairings and pursues harmony with the rice; tableware that reflects the spirit of Nakagawa; events, private parties and catering. Opened 14 July 2014. Reviews: the chef is warm and entertaining (November 2025, September 2026); "may not have the typical sushi chef appearance, but … has connections with surfers and participates in beach clean-up activities" (August 2026); holds Daishinshu sake dear (April 2026).', philosophy: 'The deliciousness of Japan\'s seafood, in harmony with rice, sake and tableware (Tabelog).', specialty: 'Sashimi; sake pairing; raw sakura shrimp and sea urchin bowl.',
      anecdotes: [
        { text: '"As soon as we entered, the enticing aroma of delicious food lifted our spirits. (I later realized it was the smell of the skin being grilled over charcoal.)" — April 2026, a birthday dinner.', source: R + 'B526662291/' },
        { text: '"The raw sakura ebi and uni rice bowl was the highlight of the day!" — November 2025, a first visit.', source: R + 'B523716127/' },
        { text: '"Just share your budget, and the staff will recommend dishes and drinks accordingly." — January 2025, a business dinner.', source: R + 'B500403241/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B500403241/', R + 'B517774086/', R + 'B518421130/', R + 'B520393508/', R + 'B521870562/', R + 'B523716127/', R + 'B526662291/', R + 'B533460087/', R + 'B535162380/', R + 'B535292811/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One set course, with drinks suggested by the chef; book ahead (2025–2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-3-9 GOTS北新地ビル一号館 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目3番9号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'The single course from the Tabelog listing (tax included; a service fee is added).', last_checked: TODAY, items: [
      it('', '', 'Kaiseki-style course: appetizer, sashimi, grilled dish, 7–8 Edomae sushi, red miso soup', '¥22,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'course'),
    ] }, {
    cuisine: '会席風のコースひとつ、22,000円 (税込): 季節の野菜の前菜、店の盛りつけの刺身、焼き物、江戸前の握り7〜8貫、えびのうまみの赤だし (食べログ)・全国の港の魚、Nagano の Yae Hara の砂糖を加えない「Sun and Earth Rice」、こだわりの器 (食べログ)・2025年11月のコース: 柿の白和え、サワラ、クエ、若いカンパチ、アジ、サワラの西京焼き、イシダイ、アオリイカ、マグロの漬け、タチウオ、赤貝、白子、生のサクラエビとウニの丼、赤だし、トロ・炭火で焼いた魚の皮、甘エビ (2026年4月)、トロたく、あなご (2026年1月)・大将が好きな Daishinshu の日本酒 (2026年1月・4月)、大将は酒蔵やワインの生産者を訪ねてペアリングを考える (食べログ)・飲み物を入れて1人2万〜2万6千円ほど (2026年8月・9月)',
    neighborhood: '北新地、GOTS北新地ビル一号館の3階。JR北新地駅から徒歩3分',
    gf_detail: '予約時に要確認。グルテンの情報なし。季節の野菜、刺身、焼き物 (2025年11月はサワラの西京焼き)、握り7〜8貫、赤だしのコースひとつ。鮨や刺身にはふつう醤油を使い、小麦を含む。',
    vegan_detail: 'ヴィーガンではありません。魚介と鮨のコースひとつで、赤だしはえびのうまみ。',
    notes: '[鮨・北新地、日本酒好きの鮨のカウンター] 北新地のビルの3階にある8席のカウンターと個室の鮨屋で、全国の港の魚のコースひとつ。季節の野菜、厚切りの刺身、焼き物、江戸前の握り、えびのうまみの赤だし。シャリは Nagano の Yae Hara の米で、砂糖を加えない。いちばん印象に残るのは刺身という声が多く、2025年11月のコースは生のサクラエビとウニの丼で締めた。大将は酒蔵やワインの生産者を訪ねてペアリングを考え、Daishinshu の日本酒がお気に入り。あたたかく楽しい大将で、2026年8月の口コミではサーファーとのつながりがあり海岸の清掃にも参加しているとのこと。予算を伝えればスタッフが料理と飲み物を選んでくれる (2025年1月)。コースは22,000円、飲み物を入れて2万〜2万6千円ほど。2026年9月の平日も満席だったので予約を。接待には個室が向いている。',
  });
}

// ================================================================ Sushi Tiger OSAKA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27139623/'; const R = TB + 'dtlrvwlst/';
  const FULL = day(['11:30', '14:30'], ['18:00', '22:30']), FRI = day(['18:00', '22:30']);
  put({
    id: 'osaka_sushi_tiger_osaka_kitashinchi', name: 'Sushi Tiger OSAKA', category: 'OMNI',
    lat: 34.697633, lng: 135.49444, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: the shop asks for allergies in advance and may not manage requests on the day (Tabelog). No gluten information; courses include anago tempura sushi and sauces from around the world, and cha soba (buckwheat-tea noodles, usually with wheat) at lunch (October 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi courses of fish, shellfish, wagyu and egg.',
    hours_raw: 'Lunch 11:30–14:30 (last order 14:00) every day except Friday; dinner 18:00–22:30 (last order 22:00) every day, in two seatings starting at 18:00 or 20:30 (Tabelog). Opened 21 September 2026 (Tabelog shop text, "Opening on 9/21"; an October 2026 review says it opened the month before); the Tabelog opening-date field reads 19 January 2024. Tell the shop about dislikes and allergies in advance (Tabelog). No cover charge; cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 20 seats: 10 at the counter and private rooms for 4 and 6 (groups of 3 or 4 and more, courses from ¥5,500); non-smoking (Tabelog).',
    hours: { 0: FULL, 1: FULL, 2: FULL, 3: FULL, 4: FRI, 5: FULL, 6: FULL }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, キチリンビル 1F — 3 min from JR Kitashinchi Stn, 4 min from Nishi-Umeda Stn',
    cuisine: 'Modern sushi from Vietnam: Edomae technique (preparation, rice, hand-shaping) with ingredients, methods and sauces from around the world (Tabelog) · dinner omakase until 6 December 2026: 8 pieces with seasonal appetizers ¥4,950; 10 pieces with chutoro cheese and anago tempura sushi ¥6,050; 12 pieces with black wagyu and oyster ¥7,150 (tax included); a sake pairing with all-you-can-drink from 20+ kinds for ¥3,300 more (Tabelog) · lunch course ¥5,000, rice bowls from ¥1,000 (Tabelog); a Sushi Gozen of 9 kinds (October 2026); seafood yukke bowl with tuna, salmon and yellowtail under a quail yolk ¥1,000, cha soba ¥330 (October 2026) · an October 2026 course: sea bream, amberjack, marinated red fish, chawanmushi, squid, young horse mackerel, hot-spring yuba, sardine, bluefin chutoro, black wagyu, anago tempura, sea urchin and ikura, oyster · bluefin tuna with truffle cheese (October 2026) · red-vinegar rice mixed live at the counter (October 2026)',
    website: null, gmaps: gm('Sushi Tiger OSAKA 北新地'), menu_url: null,
    notes: "[Sushi · Kitashinchi, a Vietnamese sushi brand comes to Japan] The first Japanese branch of Sushi Tiger, a sushi brand from Vietnam, opened in Kitashinchi on 21 September 2026. It keeps Edomae technique and red-vinegar rice, mixed live at the counter, but tops the nigiri with ideas from abroad: chutoro with truffle cheese, black wagyu, oyster, anago tempura. Dinner courses run ¥4,950–7,150 for 8–12 pieces, with sushi-bar showmanship; a ¥3,300 add-on brings a sake pairing and free-flowing drinks. Lunch brings a ¥1,000 seafood yukke bowl or a sushi set. In its first month the room was mostly overseas guests, with staff interpreting (October 2026). Most diners loved the fun; a traditionalist missed plain fish with soy sauce, and another was not keen on the rice. No lunch on Fridays.",
    chef_bio: { chef_name: null, roles: ['Sushi chefs (unnamed in the sources read)'], origin: 'Sushi Tiger began in Vietnam; this is its first shop in Japan (Tabelog). Viet Nam News (26 July 2026) reports the brand built its name in Ho Chi Minh City before opening in Hanoi.', background: 'Shop text (Tabelog): "Sushi Tiger," a beloved sushi brand from Vietnam, values Edo-style techniques of preparation, rice and hand-shaping while combining ingredients, cooking methods, materials and sauces from around the world, to "reconstruct the deliciousness of the world into modern sushi that breaks the mold". An October 2026 diner calls it a concept planned overseas and brought back to Japan.', philosophy: 'Preserve Edomae tradition while rebuilding sushi with flavours from around the world (Tabelog).', specialty: 'Creative nigiri courses; chutoro with truffle cheese.',
      anecdotes: [
        { text: '"The live sushi rice cutting right in front of me, along with the chef\'s bold yet delicate performance, kept my senses engaged" — October 2026.', source: R + 'B537705102/' },
        { text: '"Most of the customers were from overseas, but the staff provided attentive service while acting as interpreters." — October 2026, after bluefin tuna with truffle cheese.', source: R + 'B537898534/' },
        { text: '"Instead of just eating normally, it feels like you\'re constantly being thrown curveballs or sliders, haha." — October 2026.', source: R + 'B537731230/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, 'https://ovietnam.vietnamnews.vn/sushi-tiger-makes-its-move-in-ha-noi-post409146.html', R + 'B537126359/', R + 'B537705102/', R + 'B537717128/', R + 'B537731230/', R + 'B537841850/', R + 'B537869907/', R + 'B537898534/', R + 'B537994428/', R + 'B538210047/', R + 'B538245945/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Mostly overseas guests in October 2026, with staff interpreting; set courses booked ahead. No English menu listed.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Tabelog: "Please inform us in advance about any dislikes or allergy information. We may not be able to accommodate requests on the day of your visit."', source: TB }] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地2-4-21 キチリンビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; opened 21 September 2026; ten reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地二丁目4番21号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B538245945/'],
    price_note: 'Dinner courses from the Tabelog listing (tax included, until 6 December 2026); lunch bowl and cha soba from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Course: seasonal appetizer and 8 creative nigiri', '¥4,950', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_8'),
      it('', '', 'Course: 10 creative nigiri incl. chutoro cheese and anago tempura sushi', '¥6,050', 'Course', 'no', 'no', 'Tabelog listing.', 'course_10'),
      it('', '', 'Course: 12 creative nigiri incl. black wagyu and oyster', '¥7,150', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_12'),
      it('', '', 'Sake pairing with all-you-can-drink (20+ kinds), added to a course', '¥3,300', 'Drinks', '', '', 'Tabelog listing.', 'sake_pairing'),
      it('', '', 'Seafood yukke rice bowl (lunch)', '¥1,000', 'Lunch', 'ask', 'no', 'October 2026 review.', 'seafood_yukke_bowl'),
    ] }, {
    cuisine: 'Vietnam 生まれのモダンな鮨: 江戸前の技 (仕込み、シャリ、握り) に世界の食材、調理法、ソースを合わせる (食べログ)・夜のおまかせ (2026年12月6日まで): 季節の前菜と握り8貫4,950円、中トロのチーズとあなごの天ぷらの鮨を含む10貫6,050円、黒毛和牛と牡蠣を含む12貫7,150円 (税込)、プラス3,300円で20種以上の日本酒のペアリングと飲み放題 (食べログ)・ランチのコース5,000円、丼は1,000円から (食べログ)、9種の Sushi Gozen (2026年10月)、マグロ、サーモン、ブリにうずらの卵黄をのせた海鮮ユッケ丼1,000円、茶そば330円 (2026年10月)・2026年10月のコース: 鯛、カンパチ、赤身の漬け、茶碗蒸し、イカ、小アジ、温泉湯葉、イワシ、本マグロの中トロ、黒毛和牛、あなごの天ぷら、ウニといくら、牡蠣・トリュフチーズをのせた本マグロ (2026年10月)・カウンターで目の前で切る赤酢のシャリ (2026年10月)',
    neighborhood: '北新地、キチリンビルの1階。JR北新地駅から徒歩3分、西梅田駅から徒歩4分',
    gf_detail: '予約時に要確認: 苦手なものやアレルギーは事前に伝えて、当日は対応できないこともある (食べログ)。グルテンの情報なし。コースにはあなごの天ぷらの鮨や世界のソースがあり、ランチには茶そば (ふつう小麦を含む) も (2026年10月)。',
    vegan_detail: 'ヴィーガンではありません。魚、貝、和牛、卵の鮨のコース。',
    notes: '[鮨・北新地、Vietnam の鮨のブランドが日本へ] Vietnam の鮨のブランド Sushi Tiger の日本1号店で、2026年9月21日に北新地にオープン。江戸前の技と赤酢のシャリ (カウンターで目の前で切る) はそのままに、握りには海外のアイデアをのせる: トリュフチーズの中トロ、黒毛和牛、牡蠣、あなごの天ぷら。夜のコースは握り8〜12貫で4,950〜7,150円、鮨屋らしいパフォーマンスも。プラス3,300円で日本酒のペアリングと飲み放題。ランチは1,000円の海鮮ユッケ丼や鮨のセット。開店1か月目は海外のお客さんがほとんどで、スタッフが通訳していた (2026年10月)。楽しさをほめる声が多い一方、魚を醤油でシンプルに食べたいという人や、シャリが好みでなかったという人も。金曜はランチなし。',
  });
}

save();
