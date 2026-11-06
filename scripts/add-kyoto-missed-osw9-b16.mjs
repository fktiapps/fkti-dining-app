// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 16.
//   + アケトテモロ Aketote moro (late-night izakaya and standing bar at Kawaramachi-Matsubara; self-serve bottles) [core]
//   + 祇園 静水香 Gion Shizuka (Gion machiya counter: kaiseki with sake pairings; since 2024)                     [core]
//   + 祇園 川上 Gion Kawakami (Gion kappo on Nishi-Hanamikoji since 1960; lunch kaiseki and bento)              [notable]
//   + mane (måne: creative Italian near Kyoto City Hall, moved from Kyotanabe in 2024)                        [notable]
//   Same-name counts first: アケトテモロ 1; 静水香 1 — its operator EDGE (ed-ge.co.jp) also lists Tokyo bars and
//   restaurants of other names and formats (Fish Bank TOKYO, Bar&Lounge MAJESTIC, TOKYO Whisky Library, Cheese Tavern
//   CASCINA, スナックロマンチック), none in data — a small group, drafted; 祇園 川上 1 (下町鉄板 お好み焼き 川上, 川上酒店,
//   麻布 川上庵 are other names); mane 1.
//   Taken in queue order on 2026-11-05: core 26037737, 26041409; notable 26001875, 26041109. None is in
//   data/kyoto.json by name or address.
//   Pins: Tabelog points; GSI lot matches 3–74 m; nearest records 12 m (祇園 川上 vs kyoto_kashi_wabiya_nishihanamikoji,
//   the next lot 570-123) and more.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ アケトテモロ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037737/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '01:00']);
  put({
    id: 'kyoto_aketotemoro', name: 'アケトテモロ (Aketote moro)', category: 'OMNI',
    lat: 34.99869, lng: 135.767682, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yaki udon, kamatama udon, spring rolls, fried dishes and French bread; no gluten information (Tabelog; 2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but the dishes named are mostly pork, shrimp, duck and meat miso (Tabelog; 2025–26 reviews).',
    hours_raw: '18:00–1:00 daily (food last order 23:30, drinks 0:30); closing days not fixed — monthly closures on Instagram @ake.totemoro (Tabelog). Bookings taken; a reviewer says book, as it fills within 30 minutes of opening (August 2026). 21 places: 13 counter seats and 8 standing; private hire up to 20; non-smoking until 23:00, smoking allowed inside after 23:00 (Tabelog; August 2026). Bottled beer and sours are self-serve from the fridge, with an opener on the table; all-you-can-drink available (Tabelog; 2026 reviews). Cards, IC cards and QR (Tabelog). At the corner of Kawaramachi and Matsubara; 6 min from Kiyomizu-Gojo Stn (Tabelog; May 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi at Matsubara — 6 min from Kiyomizu-Gojo Stn',
    cuisine: 'Izakaya and standing bar in a Taisho-style room with a scarlet sign: small plates, garlic-loaded pork yaki udon, late-night kamatama udon; sake and shochu, and self-serve bottled beer (Tabelog) · shell-on garlic shrimp (bread for the sauce), broccoli in shrimp oil, shrimp fresh spring rolls, fried taro with seaweed, duck breast, meat-miso tofu, potato salad (2025–26 reviews) · a small stove on each table for hot pot in the cold months (February 2026)',
    website: null, gmaps: gm('アケトテモロ 京都 河原町松原'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya & standing bar · Kawaramachi-Matsubara, open to 1 am] A nostalgic, dimly lit bar on the corner under a scarlet sign: grab a bottled beer from the fridge yourself, then order garlic shrimp, spring rolls or the garlic pork yaki udon. Counter or standing; about ¥3,000–4,000. Run by two people, so service can be slow (2026 reviews). Smoking allowed inside after 23:00.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Per the operator: a nostalgic, Taisho-era-style room behind a tiled front and large windows, with lighting that dims as the night goes on. Two 2026 reviewers say it is run by two people (June and August 2026).',
      philosophy: null, specialty: 'Garlic shrimp; garlic pork yaki udon.',
      anecdotes: [
        { text: 'Staying at a nearby hotel in November 2025, a visitor was drawn in by the bright red sign and found a mostly twenty-something crowd.', source: R + 'B518644641/' },
        { text: 'A June 2026 diner found the service "a bit hit or miss" with two people running the room, but reasonably quick.', source: R + 'B529810071/' },
        { text: 'Without a booking, two December 2025 diners were found seats anyway.', source: R + 'B528170706/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): アケトテモロ、居酒屋・もつ鍋・立ち飲み、下京区河原町通松原下る難波町405、清水五条駅から徒歩約6分、18:00〜翌1:00 (料理 L.O. 23:30、ドリンク L.O. 0:30)、不定休 (Instagram で告知)、21席 (カウンター13、立ち8)、貸切20名まで、23時以降は店内喫煙可、瓶のドリンクはセルフ、飲み放題あり、ベジタリアンメニューあり、ニンニクたっぷりの豚焼うどん、深夜の釜玉うどん、カード・電子マネー・QR 可。口コミ (2025年11月〜2026年8月、英語): 殻付きのガーリックシュリンプ、海老の春巻き、里芋の海苔揚げ、鴨ロース、肉味噌豆腐、二人で切り盛り。',
      confidence: 'medium', sources: [TB, R + 'B518644641/', R + 'B518718217/', R + 'B526758354/', R + 'B527181719/', R + 'B528170706/', R + 'B528856865/', R + 'B528955369/', R + 'B529759963/', R + 'B529810071/', R + 'B533515657/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the self-serve system to first-timers (2026 reviews); book for evenings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区河原町通松原下る難波町405',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.998690, 135.767682); cross-checked: GSI 京都府京都市下京区難波町405番地 (lot) 48m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No priced menu read; dishes from Tabelog and 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Garlic pork yaki udon', '', 'Mains', 'no', 'no', 'Tabelog.', 'pork_yaki_udon'),
      it('', '', 'Late-night kamatama udon', '', 'Mains', 'no', 'ask', 'Tabelog.', 'kamatama_udon'),
      it('', '', 'Garlic shrimp', '', 'Small plates', 'ask', 'no', '2025–26 reviews.', 'garlic_shrimp'),
    ] }, {
    cuisine: '朱色の看板の大正風の店の居酒屋兼立ち飲み: 一品料理、ニンニクたっぷりの豚焼うどん、深夜の釜玉うどん。日本酒と焼酎、瓶ビールはセルフ (食べログ)・殻付きのガーリックシュリンプ (ソースにはバゲット)、ブロッコリーの海老オイル、海老の生春巻き、里芋の海苔揚げ、鴨ロース、肉味噌豆腐、ポテトサラダ (2025〜26年の口コミ)・寒い時期は各テーブルの小さなコンロで鍋 (2026年2月)',
    neighborhood: '河原町通と松原通の角。清水五条駅から徒歩6分',
    gf_detail: '要確認。焼うどん、釜玉うどん、春巻き、揚げ物、バゲット。グルテンの情報はない (食べログ、2025〜26年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、口コミに出る料理は豚、海老、鴨、肉味噌が中心 (食べログ、2025〜26年の口コミ)。',
    notes: '[居酒屋と立ち飲み・河原町松原、深夜1時まで] 朱色の看板の角にある、薄暗くノスタルジックな店。瓶ビールは冷蔵庫から自分で取り、ガーリックシュリンプ、春巻き、ニンニクの豚焼うどんを。カウンターか立ち飲みで3千〜4千円ほど。二人で回しているので提供は遅めのことも (2026年の口コミ)。23時以降は店内喫煙可。',
  });
}

// ================================================================ 祇園 静水香
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041409/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gion-shizuka.jp/';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_gion_shizuka', name: '祇園 静水香 (Gion Shizuka)', category: 'OMNI',
    lat: 35.005379, lng: 135.774462, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Kyoto kaiseki with sushi, sukiyaki, a kadaif-coated croquette, udon and ponzu; the official site has a notice on ingredient restrictions (April 2026) that we could not read (Tabelog; 2026 reviews; official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of fish, foie gras, sea urchin, wagyu and dashi (Tabelog; 2026 reviews).',
    hours_raw: 'Lunch 12:00–15:00 (last order 12:30); dinner from 18:00, all guests starting together, booking required; no regular closing day (official site; Tabelog). Tabelog gives dinner to 22:00, the official site to 21:00. Pairing courses by advance booking only; bookings may be cancelled after 15 minutes\' unannounced lateness (Tabelog). No children under 12; everyone 12 and over orders a course; no very casual clothes or strong perfume; please do not leave your seat to smoke during the meal (Tabelog). Service 10%, included in some prices (Tabelog). 18 seats: a 10-seat counter and a 2nd-floor tatami room for 2–8 (room charge); English menu; English- and Chinese-speaking staff; cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). Near the Tatsumi bridge on the Shirakawa; 5 min from Gion-Shijo or Sanjo-Keihan Stn (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion Shirakawa near the Tatsumi bridge — 5 min from Gion-Shijo Stn',
    cuisine: 'Kyoto kaiseki at a counter in a renovated Gion machiya, built around sake pairings: sake sent direct from breweries and kept at –5 °C, pairings of nine sake including Juyondai with ten dishes, and non-alcoholic or light pairings (Tabelog) · courses: seasonal omakase dinner ¥19,800 (one drink required), anniversary kaiseki "Yui" ¥19,800, sake pairing course ¥26,400 (Tabelog); "Shiki" ¥16,500 (September 2026) · monthly menus in 2026 reviews: foie gras croquette in kadaif, round tofu with sea urchin, hassun, sashimi with ponzu, guji with Inaniwa udon, kamasu or aji sushi, hamo, abalone with fig and miso dengaku, black wagyu sukiyaki, sanma or mackerel rice, hojicha kakigori, chestnut Mont Blanc · lunch options with Kyoto vegetables and Kyoto-style sushi (September 2026)',
    website: SITE, gmaps: gm('祇園 静水香 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Kaiseki & sake pairing · Gion Shirakawa] A ten-seat counter in a renovated machiya near the Tatsumi bridge, where seasonal Kyoto kaiseki comes with pairings of rare sake (Juyondai among them) kept at –5 °C. The cooking is credited to a Michelin-starred chef. Dinner courses about ¥16,500–26,400 + service; lunch too. No under-12s; English menu. Open daily.",
    chef_bio: { chef_name: null, roles: ['Supervising chef: "Kazumi Sawada" per Tabelog (romaji only; a Michelin star in 2008 and 2009)', 'Head chef unnamed on the official site; a September 2026 reviewer names "Chef Kimura"'], origin: null,
      background: 'Opened 29 July 2024 (Tabelog). Per Tabelog: a 10-course Kyoto kaiseki by chef Kazumi Sawada, "who has earned a Michelin star" (2008 and 2009), with Kyoto vegetables, wagyu and Setouchi seafood. The official site credits a Michelin-starred chef with supervising the food and names no one; it is run by EDGE (ed-ge.co.jp), whose other venues listed on the site are in Tokyo.',
      philosophy: null, specialty: 'Kaiseki with sake pairings.',
      anecdotes: [
        { text: 'A September 2026 diner was touched by "the warm hospitality of Chef Kimura and the staff".', source: R + 'B535761656/' },
        { text: 'In September and October the room keeps crickets, so the meal comes with their song — September 2026.', source: R + 'B536381359/' },
        { text: 'An October 2026 family calls it the family favourite, above all for the sake pairings, and hopes it stays easy to book.', source: R + 'B506195246/' },
      ],
      japanese_sources_summary: '公式サイト (gion-shizuka.jp): 祇園 静水香、ミシュラン星付きシェフ監修、料理長、ランチ 12:00〜15:00 (L.O. 12:30)、ディナー 18:00〜21:00 (18:00 一斉スタート)、無休、運営 EDGE (Fish Bank TOKYO、Bar&Lounge MAJESTIC、TOKYO Whisky Library、Cheese Tavern CASCINA、スナックロマンチック)、食材制限についてのお知らせ (2026年4月16日)。食べログ (店舗会員): 日本料理、東山区清本町371-2、祇園四条駅から徒歩5分、12:00〜15:00・18:00〜22:00、サービス料10%、18席 (カウンター10、2階座敷)、12歳未満入店不可、英語メニュー、2024年7月29日オープン、蔵元直送で−5℃保管の日本酒、Juyondai を含む9種と10品のペアリング、Kazumi Sawada (ミシュラン一つ星 2008・2009年)、季節のおまかせ19,800円、Yui 19,800円、日本酒ペアリングコース26,400円。口コミ (2025年10月〜2026年10月、英語): フォアグラのコロッケ、雲丹の丸豆腐、八寸、ぐじと稲庭うどん、黒毛和牛のすき焼き、Shiki 16,500円、Chef Kimura、虫の音。',
      confidence: 'medium', sources: [TB, SITE, R + 'B506195246/', R + 'B509032252/', R + 'B535761656/', R + 'B536053528/', R + 'B536160751/', R + 'B536252538/', R + 'B536381359/', R + 'B536707142/', R + 'B537023424/', R + 'B537474724/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English/Chinese-speaking staff (Tabelog); book ahead; no under-12s.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清本町371-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005379, 135.774462); cross-checked: GSI 京都府京都市東山区清本町371番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog, tax included (read 2026-11-05); service 10% where not included.', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase dinner course (10 dishes; one drink required)', '¥19,800', 'Dinner', 'ask', 'no', '', 'omakase_dinner'),
      it('', '', 'Anniversary kaiseki "Yui" (10 dishes)', '¥19,800', 'Dinner', 'ask', 'no', '', 'yui'),
      it('', '', 'Sake pairing course with sashimi, sushi and wagyu (10 dishes, free-flow pairing)', '¥26,400', 'Dinner', 'ask', 'no', '', 'sake_course'),
      it('', '', '"Shiki" course', '¥16,500', 'Dinner', 'ask', 'no', 'September 2026 reviews.', 'shiki'),
    ] }, {
    cuisine: '祇園の町家を改装したカウンターで日本酒のペアリングを軸にした京懐石: 蔵元直送で−5℃で保管する日本酒、Juyondai を含む9種と10品のペアリング、ノンアルコールや少量のペアリングも (食べログ)・コース: 季節のおまかせ19,800円 (ドリンク1杯必須)、記念日の懐石 Yui 19,800円、日本酒ペアリングコース26,400円 (食べログ)。Shiki 16,500円 (2026年9月)・2026年の口コミの月替わりの献立: カダイフを巻いたフォアグラのコロッケ、雲丹の丸豆腐、八寸、ポン酢の造り、ぐじと稲庭うどん、かますや鯵の寿司、鱧、鮑と無花果の味噌田楽、黒毛和牛のすき焼き、秋刀魚や鯖のご飯、ほうじ茶のかき氷、栗のモンブラン・昼は京野菜や京寿司のコースも (2026年9月)',
    neighborhood: '巽橋に近い祇園白川。祇園四条駅から徒歩5分',
    gf_detail: '予約時に要確認。寿司、すき焼き、カダイフのコロッケ、うどん、ポン酢を含む京懐石。公式サイトに食材制限のお知らせ (2026年4月) があるが読めていない (食べログ、2026年の口コミ、公式サイト)。',
    vegan_detail: 'ヴィーガン不可。魚、フォアグラ、雲丹、和牛、出汁のコース (食べログ、2026年の口コミ)。',
    notes: '[懐石と日本酒のペアリング・祇園白川] 巽橋近くの町家を改装した10席のカウンターで、旬の京懐石に−5℃で保管した希少な日本酒 (Juyondai も) を合わせる。料理はミシュラン星付きの料理人の監修。夜のコースは1万6,500〜2万6,400円+サービス料、昼もある。12歳未満不可、英語メニューあり。無休。',
  });
}

// ================================================================ 祇園 川上
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001875/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.gion-kawakami.co.jp/'; const MENU = SITE + 'menu.html'; const ABOUT = SITE + 'about.html';
  const H = day(['12:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_gion_kawakami', name: '祇園 川上 (Gion Kawakami)', category: 'OMNI',
    lat: 35.003147, lng: 135.774611, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Kappo kaiseki with dashi and soy-grilled fish; no gluten information (official site; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-led kaiseki on dashi — sea bream, eel, konowata (official site; 2025–26 reviews).',
    hours_raw: '12:00–15:00 and 17:30–22:00 daily; holidays posted on the official site (a November–December 2026 notice) (Tabelog; official site). Bookings by phone or online (TableCheck) (official site; Tabelog). A lunch kaiseki was ¥6,600 with tax, service extra (September 2026). 24 seats: a 10-seat counter and seven private rooms across the main house and annex (Tabelog; February 2026). Non-smoking; JCB, AMEX and Diners (Tabelog). Takeaway seasonal bento in November only, ¥5,250, two days\' notice, no shipping (official site). On a lane one street west of Hanamikoji, south of Shijo; 248 m from Gion-Shijo Stn (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, a lane west of Hanamikoji south of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Gion "itamae kappo" with no fixed monthly menu — dishes built daily from the day\'s produce and each guest\'s wishes; Awaji sea bream and suppliers kept since the founding; kabura-mushi from mid-November (official site) · lunch: kaiseki ¥6,600 (September 2026) and bento such as the "Chochin" bento, in the ¥5,000s (2025–26 reviews) · dinner kaiseki ¥20,000–39,999 per reviewers: konowata chawanmushi, hamo, steamed sea-bream head, dashi-steamed eel (2026 reviews) · takeaway November bento ¥5,250 (official site)',
    website: SITE, gmaps: gm('祇園川上 京都'), menu_url: MENU,
    notes: "[Kappo · Gion, since 1960] A Gion kappo in a 100-year-old machiya on a quiet lane off Hanamikoji, with a bright counter where you watch the cooks and private rooms behind. No fixed menu: the day's market sets the dishes. Lunch kaiseki around ¥6,600 or a bento is the easy way in; dinners run ¥20,000+. A reviewer notes a Michelin star.",
    chef_bio: { chef_name: null, roles: ['Owner (店主, signs the official site, unnamed)'], origin: null,
      background: 'Per the official site: founded in 1960 (Showa 35) in the middle of Gion; motto "親切・センス・鮮度" (kindness, sense, freshness) kept since the founding; teamwork among the cooks at the counter. Per a February 2026 reviewer: a renovated machiya over 100 years old, a 10-seat counter and seven private rooms, and one Michelin star.',
      philosophy: 'Per the official site: no set monthly menu — the day\'s ingredients and each guest\'s wishes make the menu; bring out each ingredient\'s own aroma and taste.',
      specialty: 'Seasonal kappo; kabura-mushi in winter.',
      anecdotes: [
        { text: 'A December 2025 diner warned the chef\'s sharp style "might not appeal to those who lack a refined palate" — and praised the dashi-maki.', source: R + 'B520111293/' },
        { text: 'A June 2026 visitor with business at Minami-za dropped in for the Chochin bento and found lunch very reasonable.', source: R + 'B532577623/' },
        { text: 'Sake runs just under ¥2,000 for 180 ml, and the staff gladly suggest pairings — February 2026.', source: R + 'B521828890/' },
      ],
      japanese_sources_summary: '公式サイト (gion-kawakami.co.jp): 京都の割烹 祇園川上、創業昭和35年、花見小路、「親切・センス・鮮度」、月ごとの決まった献立はなくその日の食材とお客様のご要望で献立、淡路島の鯛、創業以来の仕入先、板前割烹、11月中旬からかぶら蒸し、11月限定の季節のお弁当一段5,250円 (持ち帰りのみ、2日前までに予約)、東山区祇園町南側570-122、11〜12月のお休みのご案内。食べログ: 日本料理・弁当、12:00〜15:00・17:30〜22:00、24席、個室、禁煙、カード (JCB・AMEX・Diners)。口コミ (2025年12月〜2026年10月、英語): 築100年超の町家、カウンター10席と個室7室、ミシュラン一つ星、このわたの茶碗蒸し、昼の懐石6,600円、Chochin Bento、鯛のかぶと蒸し、鱧。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, MENU, R + 'B520111293/', R + 'B521828890/', R + 'B523555811/', R + 'B525073894/', R + 'B526850689/', R + 'B532577623/', R + 'B533066330/', R + 'B536256485/', R + 'B536274496/', R + 'B537275010/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online or by phone; English page on the official site.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-122',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (November–December 2026 holiday notice) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003147, 135.774611); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 74m; 12 m from kyoto_kashi_wabiya_nishihanamikoji (570-123); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [MENU, R + 'B536256485/'],
    price_note: 'Bento price from the official site (tax included, read 2026-11-05); lunch kaiseki from a September 2026 review.', last_checked: TODAY, items: [
      it('季節のお弁当', '', 'Seasonal bento to take away (November only, one tier)', '¥5,250', 'Takeaway', 'ask', 'no', 'Order two days ahead.', 'bento_takeaway'),
      it('', '', 'Lunch kaiseki', '¥6,600', 'Lunch', 'ask', 'no', 'September 2026 review; service extra.', 'lunch_kaiseki'),
    ] }, {
    cuisine: '月ごとの決まった献立がない祇園の板前割烹。その日の食材と客の要望で献立を作る。淡路島の鯛と創業以来の仕入先、11月中旬からかぶら蒸し (公式サイト)・昼: 懐石6,600円 (2026年9月)、Chochin Bento などの弁当は5千円台 (2025〜26年の口コミ)・夜の懐石は口コミで2万〜4万円: このわたの茶碗蒸し、鱧、鯛のかぶと蒸し、鰻の出汁蒸し (2026年の口コミ)・11月の持ち帰り弁当5,250円 (公式サイト)',
    neighborhood: '四条の南、花見小路の一本西の路地の祇園。祇園四条駅から徒歩5分',
    gf_detail: '予約時に要確認。出汁や醤油焼きの魚の割烹懐石。グルテンの情報はない (公式サイト、2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鯛、鰻、このわたなど魚が中心の出汁の懐石 (公式サイト、2025〜26年の口コミ)。',
    notes: '[割烹・祇園、1960年創業] 花見小路から一本入った静かな路地の、築100年の町家の祇園の割烹。料理人の手元が見える明るいカウンターと奥の個室。決まった献立はなく、その日の市場で料理が決まる。昼の懐石6,600円ほどや弁当が入りやすく、夜は2万円から。口コミにはミシュランの星とある。',
  });
}

// ================================================================ mane
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041109/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_mane', name: 'mane', category: 'OMNI',
    lat: 35.013567, lng: 135.766306, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the restaurant says it cannot accommodate wheat allergies; courses include pasta and house bread (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: "We cannot accommodate vegetarian requests. We do not have a vegan menu." A seafood-only course can be arranged (Tabelog).',
    hours_raw: 'Tue–Sun 12:00–15:00 and 18:00–22:00; closed Monday, open on some Mondays (Tabelog). Reservation only; solo diners and families with children of elementary-school age or younger book by phone (Tabelog). Water (free-flow) ¥880 per person on top of the course (Tabelog). Allergies handled where possible, but not fish or wheat (Tabelog). 16 seats: 12 at the counter and one table, facing a garden; private hire up to 20; children of all ages welcome; English menu and staff; smart casual; cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). 7 min from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'West of Kawaramachi near Kyoto City Hall — 7 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Creative Italian courses of seasonal local ingredients, seafood-centred with a meat main; the owner buys at the market and from local farmers (Tabelog) · lunch omakase of 3 appetizers, pasta and a main ¥8,360, with black wagyu ¥10,560; chef\'s special lunch of 8 dishes ¥14,960 (Tabelog) · dinner: chef\'s special of 7 dishes and dessert ¥17,160 (July 2026); drink pairing ¥7,700 (October 2026) · dishes in 2026 reviews: clam chowder, burrata with peas, kinmedai with mountain vegetables, shirasu and spring cabbage pasta, hairy crab and scallop carpaccio, cold pasta with ayu, Mangalica pork, Agu pork with burdock and Kyoho grapes, Tottori wagyu, eel spring rolls with kabosu, tiramisu with milk gelato; house herbal tea',
    website: null, gmaps: gm('mane 京都 山本町 イタリアン'), menu_url: TB + 'dtlmenu/',
    notes: "[Creative Italian · near Kyoto City Hall] Moved from Kyotanabe in 2024 after eight years there: a bright 12-seat counter facing a small garden, serving inventive, seafood-led Italian courses with Japanese and other Asian touches. Lunch from ¥8,360, dinner about ¥17,000; plus ¥880 for water. Cannot cater for wheat allergies, vegetarians or vegans. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed in the sources)'], origin: null,
      background: 'Opened here 23 April 2024 (Tabelog). Per 2026 reviews: previously in Matsuiyamate, Kyotanabe City, for about eight years before moving (May and August 2026); the name is the Scandinavian word for moon, written "måne" (May 2026); a July 2026 reviewer writes the chef trained at Yonemura and Il Ghiottone, and that the restaurant was selected by Michelin. Per the operator: the tables came from the old premises.',
      philosophy: null, specialty: 'Seasonal seafood Italian courses.',
      anecdotes: [
        { text: 'A March 2026 diner who dislikes coffee still wanted more of the tiramisu.', source: R + 'B525231947/' },
        { text: 'An October 2026 reviewer read the cooking as fusion, with Japanese, Chinese and Korean touches.', source: R + 'B538070469/' },
        { text: 'A passer-by of more than two years had never noticed it, then came for the duck — August 2026.', source: R + 'B533738247/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): mane、イタリアン・イノベーティブ、中京区山本町440-1、京都市役所前駅から徒歩7分、火〜日 12:00〜15:00・18:00〜22:00、月曜休み (営業する月曜もあり)、完全予約制、ベジタリアン・ヴィーガン不可、魚介のみのコースは可、魚と小麦のアレルギーは不可、水 (フリーフロー) 1人880円、16席 (カウンター12、テーブル1)、子供可、英語メニュー、スマートカジュアル、2024年4月23日オープン、昼のおまかせ8,360円・黒毛和牛10,560円・シェフスペシャル14,960円。口コミ (2026年1〜10月、英語): Kyotanabe (Matsuiyamate) から移転 (約8年)、måne は月の意味、Yonemura と Il Ghiottone で修業、ミシュラン選出、夜17,160円、ペアリング7,700円、ティラミス。',
      confidence: 'medium', sources: [TB, R + 'B520024517/', R + 'B520069832/', R + 'B525231947/', R + 'B528038192/', R + 'B531957879/', R + 'B532277923/', R + 'B532701157/', R + 'B533738247/', R + 'B537275447/', R + 'B538070469/'] },
    cultural_comfort: { level: 'english', note: 'English menu and staff (Tabelog); reservation only; ¥880 water charge.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Allergies handled within its means, but not fish or wheat allergies (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区山本町440-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013567, 135.766306); cross-checked: GSI 京都府京都市中京区山本町440番地 (lot) 70m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Lunch course prices from Tabelog, tax included (read 2026-11-05); dinner from a July 2026 review; water ¥880 extra.', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase (3 appetizers, pasta, main)', '¥8,360', 'Lunch', 'no', 'no', '', 'lunch_omakase'),
      it('', '', 'Lunch omakase with black wagyu main', '¥10,560', 'Lunch', 'no', 'no', '', 'lunch_wagyu'),
      it('', '', 'Lunch chef\'s special (5 appetizers, pasta, main)', '¥14,960', 'Lunch', 'no', 'no', '', 'lunch_special'),
      it('', '', 'Dinner chef\'s special (7 dishes and dessert)', '¥17,160', 'Dinner', 'no', 'no', 'July 2026 review.', 'dinner_special'),
      it('', '', 'Water, free-flow', '¥880', 'Charges', '', '', 'Per person.', 'water'),
    ] }, {
    cuisine: '地元の旬の食材のイノベーティブなイタリアンのコース。魚介が中心でメインは肉。店主が市場と地元の農家から仕入れる (食べログ)・昼のおまかせ (前菜3品、パスタ、メイン) 8,360円、黒毛和牛付き10,560円、シェフスペシャル8品14,960円 (食べログ)・夜: シェフスペシャル7品とデザート17,160円 (2026年7月)、ドリンクペアリング7,700円 (2026年10月)・2026年の口コミの料理: クラムチャウダー、えんどう豆とブッラータ、金目鯛と山菜、しらすと春キャベツのパスタ、毛蟹と帆立のカルパッチョ、鮎の冷製パスタ、マンガリッツァ豚、アグー豚とごぼうと巨峰、鳥取の和牛、鰻とかぼすの春巻き、ミルクジェラートのティラミス。自家製のハーブティー',
    neighborhood: '京都市役所近く、河原町の西。京都市役所前駅から徒歩7分',
    gf_detail: 'グルテンフリー不可。店は小麦アレルギーに対応できないとしている。コースにはパスタと自家製パン (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。「ベジタリアンには対応できない、ヴィーガンメニューはない」。魚介のみのコースは可 (食べログ)。',
    notes: '[イノベーティブ・イタリアン・京都市役所の近く] Kyotanabe で8年続いたのち2024年に移転。小さな庭を望む明るい12席のカウンターで、魚介中心の独創的なイタリアンのコースに和やアジアの要素も。昼は8,360円から、夜は1万7千円ほど、水は別に880円。小麦アレルギー、ベジタリアン、ヴィーガンは不可。月曜休み。',
  });
}

save();
