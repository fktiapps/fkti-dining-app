// Osaka sweep (2-mile circle around Dotonbori), core leftovers — lane osw3 (Tabelog id mod 4 = 2), batch 24.
//   - 串かつ料理 活 心斎橋パルコ店 (27121246): skipped as a chain (7 串かつ料理 活 shops).
//   + Cafe BOHEMIA 心斎橋 (Turkish-lamp cafe and dining in the Four Points Flex by Sheraton, breakfast to midnight)
//   + 日本料理 弁慶 ホテル日航大阪 (Japanese Cuisine Benkei: kaiseki, sushi counter and bento at Hotel Nikko Osaka)
//   + 花華 (Hanahana: okonomiyaki and teppan-yaki on three floors in Higashi-Shinsaibashi)
//   Lane: the first four ids with id mod 4 = 2 in `queue.mjs osaka next core 200` (2026-11-02, after batch 23):
//   27121246, 27102434, 27011386, 27077246 (last two digits 46, 34, 86, 46: each = 2 mod 4).
//   None is in data/osaka.json (grep by Tabelog id, name, romaji and address).
//   Group checks: Cafe BOHEMIA — this shop plus the original in Shibuya (web search; none in data): small group.
//   Benkei — the Japanese restaurant of Hotel Nikko Osaka; no same-concept shop in data (toba_benkei is unrelated).
//   Hanahana — no other shop found.
//   Stacked pins: Benkei's Tabelog point is 1.4 m from osaka_oden_sumiyoshi_nishishinsaibashi and 4.4 m from
//   osaka_tohlee_hotel_nikko_osaka (same hotel building), so it is moved 5 m to a point at least 5.2 m from every
//   record in the building. Hanahana is 4.9 m from osaka_kaettekita_miyata_menji (next-door address 1-13-5): left as is.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-24');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27121246', 'Chain (5+): 串かつ料理 活 has at least seven shops — 心斎橋パルコ店 (this one, https://tabelog.com/en/osaka/A2701/A270201/27121246/, https://r.gnavi.co.jp/c519410/), なんばウォーク店 (https://r.gnavi.co.jp/c519401/), 阿倍野店 (https://r.gnavi.co.jp/c519402/), ホワイティうめだ店 (https://www.hotpepper.jp/strJ000014513/), and 阪急三番街店, 阪急グランドビル店 and ナビオ阪急店 (listed as sister shops on that Hot Pepper page).');

// ================================================================ Cafe BOHEMIA 心斎橋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27102434/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '10:30'], ['11:30', '24:00']);
  put({
    id: 'osaka_cafe_bohemia_shinsaibashi', name: 'Cafe BOHEMIA Shinsaibashi', category: 'OMNI',
    lat: 34.673627, lng: 135.499222, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Hummus, salads and the curries with rice are the places to ask; pasta, pizza, croissants and cake are wheat-based.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; hummus and salads appear in reviews, but nothing is labelled vegan.',
    hours_raw: 'Daily breakfast 07:00–10:30 (last order 10:00) and 11:30–24:00 (last order 23:30) (Tabelog). Breakfast for hotel guests and visitors, e.g. a kapao rice set (July 2026). Reservations (Tabelog); ordering by smartphone (March 2026). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (Tabelog). 71 seats (59 at breakfast) with sofas and a stage; live music and belly-dance shows on some evenings (Tabelog; August–October 2026). Tabelog says non-smoking, but reviewers in 2025–2026 saw guests smoking shisha inside (January and October 2026). English menu; children welcome; free Wi-Fi; wheelchair accessible (Tabelog). Opened 5 January 2018 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 1-10-10, ground floor of the Four Points Flex by Sheraton Osaka Shinsaibashi — 3 min from Shinsaibashi and Yotsubashi Stns',
    cuisine: 'Cafe and dining room hung with Turkish lamps, with Middle Eastern, Italian and Asian dishes (Tabelog; 2026) · shrimp and coconut-milk curry with coriander and extra rice on request; hummus; tandoori chicken; Caesar salad; lunch pasta with salad and soup (December 2025–October 2026) · honey dessert pizza with apple and pineapple; dried-fruit and walnut parfait; a ¥750 parfait; gâteau chocolat and coffee; a mint-tea set for two (November 2025–October 2026) · breakfast of kapao rice with salad, grilled fish and scrambled eggs, mushroom cream soup and croissant (July 2026) · gin cocktails and chorizo at night (September 2026)',
    website: null, gmaps: gm('Cafe BOHEMIA 心斎橋'), menu_url: null,
    notes: "[Cafe · Nishi-Shinsaibashi, Turkish-lamp cafe from breakfast to midnight] A spacious, dim cafe under hundreds of Turkish lamps on the ground floor of a Sheraton hotel near Shinsaibashi, open from breakfast until midnight. Come for the shrimp coconut curry, hummus or tandoori chicken, or late for a parfait and mint tea; some evenings bring belly-dance shows on the back stage. Reviewers find it calm and good value in the day, though some find the food salty, and the smell of shisha smoked by other guests made one pair leave (October 2025).",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a cafe with Middle Eastern (Turkish), Italian and cafe dishes, breakfast, a stage and live music, opened 5 January 2018 in what is now the Four Points Flex by Sheraton Osaka Shinsaibashi. A July 2026 hotel guest ate breakfast there. An October 2026 diner heard of a Turkish-lamp workshop.',
      philosophy: null, specialty: 'Shrimp coconut curry; parfaits.',
      anecdotes: [
        { text: '"Escape the hustle and bustle of Shinsaibashi at the exotic Cafe BOHEMIA, adorned with stunning Turkish lamps." — May 2026, a ¥750 parfait.', source: R + 'B528034700/' },
        { text: '"There’s a stage in the back where they sometimes have belly dancing performances." — September 2026, gin drinks and chorizo.', source: R + 'B535194252/' },
        { text: '"However, when other customers started smoking shisha, the smell became noticeable, so we decided to leave." — October 2025, dried-fruit parfait.', source: R + 'B515133682/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Cafe BOHEMIA 心斎橋、カフェ・イタリアン・トルコ料理、西心斎橋1-10-10 Four Points Flex by Sheraton Osaka Shinsaibashi 1F、Shinsaibashi 駅から196m、毎日7:00〜10:30 (L.O.10:00)・11:30〜24:00 (L.O.23:30)、予約可、カード・電子マネー・QR可、71席 (朝は59席)、ソファ席、ライブ、プロジェクター、禁煙と記載、無料Wi-Fi、車椅子可、朝食あり、ベジタリアンメニュー、英語メニュー、子ども可、2018年1月5日オープン。口コミ(2025年10月〜2026年10月): トルコのランプ、エビとココナッツミルクのカレー、フムス、タンドリーチキン、シーザーサラダ、パスタのランチ、はちみつのデザートピザ、ドライフルーツのパフェ、ガトーショコラ、ミントティー、朝食のガパオライス、ジンのカクテルとチョリソー、ベリーダンスのショー、店内でシーシャを吸う客、塩気が強いという声も。',
      confidence: 'medium', sources: [TB, R + 'B515133682/', R + 'B517463339/', R + 'B519173592/', R + 'B523508909/', R + 'B525194103/', R + 'B528034700/', R + 'B531764648/', R + 'B533786726/', R + 'B534713597/', R + 'B535194252/', R + 'B537506533/', R + 'B537859915/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); hotel ground floor.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-10-10 フォーポイント フレックス by シェラトン 大阪心斎橋 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目10番10号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528034700/', R + 'B515133682/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Parfait', '¥750', 'Sweets', 'ask', 'no', 'May 2026.', 'parfait'),
      it('', '', 'Dried-fruit and walnut parfait with tea', '¥1,020', 'Sweets', 'no', 'no', 'January 2026; total bill.', 'dried_fruit_parfait'),
      it('', '', 'Shrimp and coconut-milk curry', '', 'Food', 'ask', 'no', 'March and October 2026.', 'shrimp_curry'),
      it('', '', 'Hummus', '', 'Food', 'ask', 'ask', 'March and October 2026.', 'hummus'),
    ] }, {
    cuisine: 'トルコのランプが下がるカフェ兼ダイニングで、中東、イタリアン、アジアの料理 (食べログ、2026年)・エビとココナッツミルクのカレー、パクチー、ご飯の大盛り可、フムス、タンドリーチキン、シーザーサラダ、サラダとスープつきのランチのパスタ (2025年12月〜2026年10月)・りんごとパイナップルのはちみつのデザートピザ、ドライフルーツとくるみのパフェ、750円のパフェ、ガトーショコラとコーヒー、2人用のミントティーのセット (2025年11月〜2026年10月)・ガパオライスにサラダ、焼き魚、スクランブルエッグ、きのこのクリームスープ、クロワッサンの朝食 (2026年7月)・夜はジンのカクテルとチョリソー (2026年9月)',
    neighborhood: '西心斎橋1-10-10、Four Points Flex by Sheraton Osaka Shinsaibashi の1階。Shinsaibashi 駅・Yotsubashi 駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。フムス、サラダ、ご飯のカレーから確認を。パスタ、ピザ、クロワッサン、ケーキは小麦。',
    vegan_detail: '要確認。食べログにベジタリアンメニューの記載があり、口コミにはフムスやサラダも出てくるが、ヴィーガンの表示はない。',
    notes: '[カフェ・西心斎橋、朝食から深夜までのトルコランプのカフェ] 心斎橋近くのシェラトンのホテルの1階にある、たくさんのトルコのランプが下がる広くて薄暗いカフェで、朝食から深夜0時まで。エビのココナッツカレー、フムス、タンドリーチキンを、遅い時間ならパフェとミントティーを。夜には奥のステージでベリーダンスのショーがある日も。昼は落ち着いてお得という声が多く、塩気が強いという声や、ほかの客のシーシャのにおいで店を出たという声も (2025年10月)。',
  });
}

// ================================================================ 日本料理 弁慶 ホテル日航大阪
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27011386/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://www.hno.co.jp/restaurant/benkay.html';
  const H = day(['11:30', '14:30'], ['17:30', '21:00']); const SA = day(['11:30', '14:30'], ['17:30', '21:30']);
  put({
    id: 'osaka_benkei_hotel_nikko_osaka', name: '日本料理 弁慶 ホテル日航大阪 (Japanese Cuisine Benkei, Hotel Nikko Osaka)', category: 'OMNI',
    lat: 34.673936, lng: 135.499675, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog says allergy information is available. The cooking centres on dashi and the sets include tempura and fried dishes; sashimi and sushi are the plainest, with soy sauce to ask about.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask in advance. Tabelog lists vegan options, but the regular kaiseki is built on dashi and fish.',
    hours_raw: 'Lunch 11:30–14:30 daily; dinner 17:30–21:00 (last order 20:30), Saturdays and the day before a holiday to 21:30 (last order 21:00) (Tabelog). A Japanese breakfast is also served, with rolled omelette cooked to order (July 2026). Service charge 15% (Tabelog). Reservations; cancel by the day before; the sushi counter is for children of primary-school age and up (Tabelog). Lunch sets (tax included, before service): weekday "body support" lunch ¥3,950, five-kind sashimi gozen ¥5,800, seasonal three-tier bento ¥6,800 (Tabelog); sushi course Daihoji ¥16,000 (December 2025). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards, WAON and QR (Tabelog). 78 seats with a counter of a 250-year-old single slab; private rooms for 8, 10 and up to 32 (room fee for groups of 5 or fewer: ¥5,500 at lunch, ¥11,000 at dinner); non-smoking; hotel parking (Tabelog). English menu; children and strollers welcome (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: SA, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-3-3, Hotel Nikko Osaka 3F, on Midosuji — straight from exit 8 of Shinsaibashi Stn',
    cuisine: 'Hotel Japanese restaurant with seasonal kaiseki built on a traditional dashi, a sushi counter and private rooms over the Midosuji ginkgo trees (Tabelog) · lunch: weekday "body support" set of seasonal vegetables ¥3,950, five-kind sashimi gozen ¥5,800, seasonal three-tier bento ¥6,800 with tempura, sashimi and rice (Tabelog; September–October 2025, September 2026) · Aoi kaiseki with tuna, sea bream and other sashimi and a choice of chirimen rice or sushi (November 2024, August 2025) · sushi course Daihoji ¥16,000 with sashimi, chawanmushi, 10 nigiri and a hand roll (December 2025) · summer kaiseki ending in kamameshi (August 2026) · Japanese breakfast with rolled omelette cooked to order, chicken tsukune in ago dashi, soba, grilled and simmered fish (July 2026)',
    website: SITE, gmaps: gm('日本料理 弁慶 ホテル日航大阪'), menu_url: null,
    notes: "[Kaiseki · Shinsaibashi, Hotel Nikko Osaka's Japanese restaurant] The Japanese restaurant on the third floor of Hotel Nikko Osaka, reached straight from Shinsaibashi Station, with windows over the Midosuji ginkgo trees, a sushi counter cut from a 250-year-old slab, and private rooms. Lunch is the easy way in: the seasonal three-tier bento at ¥6,800 or the five-sashimi gozen; dinner brings seasonal kaiseki and a ¥16,000 sushi course. Diners praise the dashi, the sashimi and the attentive staff; one found plates cleared while still being eaten (November 2025). 15% service charge.",
    chef_bio: { chef_name: 'Yoshida Masao', roles: ['Chef (named on Tabelog)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: seasonal kaiseki centred on the traditional dashi handed down by Chef Yoshida Masao for 35 years, served on the third floor of Hotel Nikko Osaka; Tabelog gives the opening day as 7 July 2015. The listing does not say whether the chef still leads the kitchen.',
      philosophy: 'Authentic Japanese cuisine focused on ingredients and dashi (Tabelog).', specialty: 'Seasonal kaiseki; three-tier bento.',
      anecdotes: [
        { text: '"In addition to the Western and Japanese buffet restaurant, Benkei offers a breakfast focused solely on Japanese cuisine." — July 2026, a hotel breakfast.', source: R + 'B532146950/' },
        { text: '"It felt like the staff was instructed to clear the plates as soon as they were out of sight, resulting in them taking away my half-eaten dishes." — November 2025.', source: R + 'B518262930/' },
        { text: '"The final dish, the kamameshi (rice cooked in an iron pot), was incredibly delicious and brought me so much joy." — August 2026, summer kaiseki.', source: R + 'B534640772/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 日本料理 弁慶 ホテル日航大阪、日本料理・寿司、西心斎橋1-3-3 ホテル日航大阪 3F、Shinsaibashi 駅8番出口直結、昼11:30〜14:30、夜17:30〜21:00 (L.O.20:30)、土曜と祝前日は21:30まで (L.O.21:00)、サービス料15%、予約可 (前日までにキャンセル、寿司カウンターは小学生から)、平日のボディサポートランチ3,950円、5種の刺身の御膳5,800円、季節の三段弁当6,800円、カード・電子マネー・QR可、78席、250年の一枚板のカウンター、8名・10名・最大32名の個室 (5名以下は昼5,500円・夜11,000円)、禁煙、駐車場、朝食あり、アレルギー表示、ヴィーガンメニュー、英語メニュー、子ども・ベビーカー可、2015年7月7日オープン、Yoshida Masao 料理長が35年受け継ぐ出汁、御堂筋のいちょう並木を望む個室。口コミ(2024年11月〜2026年9月): 三段弁当、天ぷら、Aoi の会席、刺身、寿司コース16,000円、夏の会席の釜飯、和朝食のだし巻き卵、スタッフの気配り、皿を下げるのが早すぎるという声も。',
      confidence: 'medium', sources: [SITE, TB, R + 'B115450160/', R + 'B483235998/', R + 'B511866949/', R + 'B512918492/', R + 'B514217688/', R + 'B515878551/', R + 'B518262930/', R + 'B519137231/', R + 'B531083219/', R + 'B532146950/', R + 'B534640772/', R + 'B536757037/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); a hotel restaurant.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog lists allergy information as available.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-3-3 ホテル日航大阪 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with 2026 set menus; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}, moved 5 m off the hotel cluster (Tabelog point 1.4 m from osaka_oden_sumiyoshi_nishishinsaibashi); cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目3番3号 (go) 37m (Hotel Nikko Osaka); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B519137231/'],
    price_note: 'Lunch prices from Tabelog (read November 2026), tax included; 15% service charge extra.', last_checked: TODAY, items: [
      it('', '', 'Weekday "body support" lunch of seasonal vegetables', '¥3,950', 'Lunch', 'ask', 'no', 'Tabelog; for 2–6 people.', 'body_support'),
      it('', '', 'Five-kind sashimi gozen, 9 dishes', '¥5,800', 'Lunch', 'ask', 'no', 'Tabelog.', 'sashimi_gozen'),
      it('', '', 'Seasonal three-tier bento', '¥6,800', 'Lunch', 'no', 'no', 'Tabelog; includes tempura and fried dishes.', 'three_tier_bento'),
      it('', 'Daihoji', 'Sushi course Daihoji (10 nigiri, hand roll)', '¥16,000', 'Courses', 'ask', 'no', 'December 2025.', 'daihoji'),
    ] }, {
    cuisine: '伝統の出汁を軸にした季節の会席、寿司カウンター、御堂筋のいちょう並木を望む個室のホテルの日本料理店 (食べログ)・昼: 季節の野菜の平日のボディサポートランチ3,950円、5種の刺身の御膳5,800円、天ぷら、刺身、ご飯の季節の三段弁当6,800円 (食べログ、2025年9〜10月、2026年9月)・マグロや鯛の刺身とちりめんご飯か寿司を選ぶ Aoi の会席 (2024年11月、2025年8月)・刺身、茶碗蒸し、握り10貫、手巻きの寿司コース Daihoji 16,000円 (2025年12月)・締めに釜飯の夏の会席 (2026年8月)・目の前で焼くだし巻き卵、あご出汁の鶏つくね、そば、焼き魚と煮魚の和朝食 (2026年7月)',
    neighborhood: '西心斎橋1-3-3 ホテル日航大阪 3F、御堂筋沿い。Shinsaibashi 駅8番出口直結',
    gf_detail: '要確認。食べログによるとアレルギー表示あり。料理は出汁が中心で、天ぷらや揚げ物もセットに入る。刺身と寿司がいちばんシンプルで、醤油は要確認。',
    vegan_detail: '要確認、事前に。食べログにヴィーガンメニューの記載があるが、通常の会席は出汁と魚が基本。',
    notes: '[会席・心斎橋、ホテル日航大阪の日本料理店] Shinsaibashi 駅から直結のホテル日航大阪3階の日本料理店で、窓から御堂筋のいちょう並木が見え、250年の一枚板の寿司カウンターと個室がある。入りやすいのは昼で、6,800円の季節の三段弁当や刺身の御膳。夜は季節の会席や16,000円の寿司コース。出汁、刺身、スタッフの気配りの評判がよく、食べている途中の皿を下げられたという声も (2025年11月)。サービス料15%。',
  });
}

// ================================================================ 花華
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27077246/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_hanahana_higashishinsaibashi', name: '花華 (Hanahana)', category: 'OMNI',
    lat: 34.673804, lng: 135.504236, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: okonomiyaki, negiyaki, modern-yaki and yakisoba are wheat-based. Tabelog shows no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but the reviewed dishes use pork, squid, beef and egg, and the batter and sauces are not described.',
    hours_raw: 'Daily 11:00–14:00 and 17:00–23:00 (Tabelog). Lunch came back in May 2026 after a break, with set meals rather than the old lunch menu (August–September 2026). Weekdays before 20:00, a ¥1,200 drink set of okonomiyaki or yakisoba with a draft beer and a small side (2025–2026 reviews). All-you-can-drink course ¥4,290 (February 2026). Reservations (Tabelog); ordering by tablet (2023–2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, e-money and QR (Tabelog). 54 seats on three floors; non-smoking; children welcome (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-13-6 — 3 min from Nagahoribashi Stn',
    cuisine: 'Okonomiyaki with a batter made fluffy inside and crisp outside, and teppan-yaki (Tabelog) · pork okonomiyaki and grilled squid yakisoba ¥1,090 each (November 2025); the modern-yaki the shop is known for; okonomiyaki with beef or beef tendon; negiyaki; tonpei-yaki; squid and green-onion yaki (2025–2026) · thick-noodle yakisoba in sauce, and a soy-sauce yakisoba (February–July 2026) · teppan dishes of squid legs, beef offal and beef steak; grilled chicken neck; wagyu saiboshi (February–September 2026)',
    website: null, gmaps: gm('花華 お好み焼き 東心斎橋'), menu_url: null,
    notes: "[Okonomiyaki · Higashi-Shinsaibashi, a lively three-floor okonomiyaki house] A busy okonomiyaki house near Nagahoribashi, its walls covered with signatures of famous visitors. Order the modern-yaki or a beef-tendon okonomiyaki and a thick-noodle yakisoba; on weekdays before 8 pm the ¥1,200 drink set brings an okonomiyaki or yakisoba with a beer. Regulars like the fluffy okonomiyaki, the quick service and the value; some found the side dishes salty or the prices a little high.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: okonomiyaki in Higashi-Shinsaibashi with a carefully made batter, fluffy inside and crisp outside. Reviewers in 2026 note celebrity signatures on the walls, a change of grill cook, and lunch resuming in May 2026.',
      philosophy: 'Affordable, delicious and filling (Tabelog).', specialty: 'Modern-yaki; yakisoba.',
      anecdotes: [
        { text: '"The okonomiyaki was delicious, but the soy sauce-flavored yakisoba was incredibly tasty!" — July 2026, a regular on the tenth visit.', source: R + 'B475222501/' },
        { text: '"I left my jacket with the staff, and the course began. I really appreciated their consideration to prevent any odors from clinging to my jacket." — February 2026, the ¥4,290 drinks course.', source: R + 'B503381514/' },
        { text: '"The a la carte menu items were tasty, but they were quite salty." — January 2026.', source: R + 'B521970786/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 花華 (Hanahana)、お好み焼き、東心斎橋1-13-6、Nagahoribashi 駅から徒歩3分、毎日11:00〜14:00・17:00〜23:00、予約可、カード・電子マネー・QR可、54席 (1〜3階)、禁煙、子ども可、ベジタリアンメニュー、中はふわふわで外はカリッとした生地のお好み焼き、安い・うまい・ボリューム。口コミ(2025年11月〜2026年9月): 豚玉と焼きイカの焼きそば各1,090円、モダン焼き、牛すじのお好み焼き、ねぎ焼き、とん平焼き、イカとねぎの焼き、太麺の焼きそば、醤油の焼きそば、イカゲソ、牛ホルモン、牛ステーキ、鶏のせせり、和牛のさいぼし、平日20時までの1,200円の飲みセット、飲み放題のコース4,290円、2026年5月にランチ再開、壁に有名人のサイン、タブレットで注文、塩気が強い、少し高いという声も。',
      confidence: 'medium', sources: [TB, R + 'B475222501/', R + 'B503381514/', R + 'B521744006/', R + 'B521970786/', R + 'B524031894/', R + 'B528298133/', R + 'B531889483/', R + 'B532422847/', R + 'B534340715/', R + 'B534835278/', R + 'B535872706/', R + 'B536027713/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering (2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-13-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目13番6号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlrvwlst/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pork okonomiyaki', '¥1,090', 'Okonomiyaki', 'no', 'no', 'November 2025.', 'buta_tama'),
      it('', '', 'Grilled squid yakisoba', '¥1,090', 'Yakisoba', 'no', 'no', 'November 2025.', 'ika_yakisoba'),
      it('', '', 'Weekday drink set (okonomiyaki or yakisoba, draft beer, small side), before 20:00', '¥1,200', 'Sets', 'no', 'no', '2025–2026 reviews.', 'drink_set'),
      it('', '', 'All-you-can-drink course', '¥4,290', 'Courses', 'no', 'no', 'February 2026.', 'nomihodai_course'),
    ] }, {
    cuisine: '中はふわふわで外はカリッとした生地のお好み焼きと鉄板焼き (食べログ)・豚玉と焼きイカの焼きそば各1,090円 (2025年11月)、名物のモダン焼き、牛肉や牛すじのお好み焼き、ねぎ焼き、とん平焼き、イカとねぎの焼き (2025〜2026年)・ソースの太麺の焼きそば、醤油の焼きそば (2026年2〜7月)・イカゲソ、牛ホルモン、牛ステーキの鉄板焼き、鶏のせせり、和牛のさいぼし (2026年2〜9月)',
    neighborhood: '東心斎橋1-13-6。Nagahoribashi 駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。お好み焼き、ねぎ焼き、モダン焼き、焼きそばは小麦。食べログにグルテンの情報はなし。',
    vegan_detail: '要確認。食べログにベジタリアンメニューの記載があるが、口コミの料理は豚、イカ、牛、卵を使い、生地とソースの中身は書かれていない。',
    notes: '[お好み焼き・東心斎橋、にぎやかな3階建てのお好み焼き店] Nagahoribashi 近くのにぎやかなお好み焼き店で、壁には有名人のサインがいっぱい。モダン焼きや牛すじのお好み焼きと太麺の焼きそばを。平日20時までは1,200円の飲みセットでお好み焼きか焼きそばとビールが。常連はふわふわのお好み焼き、早い提供、お得さをほめ、一品料理の塩気が強い、少し高いという声も。',
  });
}

save();
