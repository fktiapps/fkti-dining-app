// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 31.
//   + 串かつ専門 串文 Kushibun (kushikatsu counter at Shijo Karasuma, founded in Arashiyama in 1972)
//   + ブション Le Bouchon (Lyonnais bistro on Teramachi-Nijo, Bellecour group since 1985)
//   + 饗応 元 Kyoou Hajime (sake-master owner's Japanese-based small-dish bar near Marutamachi)
//   + 福栄堂 Fukueido (Gion dango shop, open late; sister of 壹錢洋食)
//   Picked on 2026-11-05: from `queue.mjs kyoto-missed next core 200`, lane ids 26014910, 26002328; from `next notable
//   200`: 26033510, 26000564. None is in data/kyoto.json by name (串文/Kushibun, ブション/Bouchon, 饗応 元/Hajime,
//   福栄堂/Fukueido) or address (月鉾町46 竹中ビル2F, 榎木町71-1, 松竹町135-1, 廿一軒町226).
//   Same-name count (same brand or operator only): 串文 — one shop (official site: Arashiyama 1972, closed 2006, reopened
//   near Karasuma 2009). ブション — Bellecour group (since 1985) lists two places, the salon de thé オ・タン・ペルデュ and
//   ブション (official group page). 饗応 元 — one shop. 福栄堂 — same operator as 壹錢洋食 (issen-yosyoku.co.jp, which
//   names both); 壹錢洋食 本店 is already in data (kyoto_issen_yoshoku_honten); two brands, a local group.
//   Service charges, checked against Tabelog's Japanese original: 饗応 元 サービス料5% (cash refunded) and ワンドリンク制
//   (¥500 if no drink). 串文: ¥300 cover with cabbage (official site). ブション and 福栄堂: none listed.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-31');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 串かつ専門 串文
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26014910/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kushibun-arashiyama.com/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_kushibun_shijo', name: '串かつ専門 串文 (Kushikatsu Kushibun)', category: 'OMNI',
    lat: 35.003625, lng: 135.757013, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: every skewer is battered and fried; nama-fu (wheat gluten) is on the menu; dipping sauces include a sauce and ponzu (official site; 2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: vegetable skewers (Manganji pepper, lotus root, yuba, konnyaku, pumpkin) share the fryer and batter with meat and seafood; batter ingredients not stated (official site; 2024–2026 reviews).',
    hours_raw: '17:30–23:00; irregular closures (Tabelog; official site). Reservations accepted; GoToEat online bookings must order at least ¥2,000 a head (Tabelog). ¥300 cover per person including free cabbage; ¥2,000 a head for a same-day no-show (official site). Cards (VISA, Master) per Tabelog; the official site adds PayPay and Alipay. 17 seats: 6 at the counter, 11 on tatami (official site; Tabelog says 18). Private hire for 15–18. Non-smoking, smoking area (Tabelog). Children welcome (Tabelog). Second floor of the Takenaka Building on Shijo-dori, up a staircase; 2–3 min from Hankyu Karasuma exit 26 and subway Shijo exit 2 (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-dori just west of Karasuma — 2 min from Hankyu Karasuma Stn exit 26',
    cuisine: 'Kushikatsu with Kyoto vegetables, in a fine, light batter fried in a blend of six vegetable oils including sesame and rice-bran oil (official site; August 2025 and October 2026) · omakase: skewers keep coming until you say stop (official site) · Kyoto set “Arashiyama” ¥3,280: dashimaki, 15 skewers (beef, shrimp, Manganji pepper, shiso-wrapped sweetfish, conger eel, quail egg, lotus root, konnyaku, shumai, yuba, octopus, eggplant, chikuwa, cherry tomato, yuzu-miso dengaku), nori chazuke, yuzu sorbet (October 2026) · single skewers ¥120–250: beef ¥250, pork ¥200, shrimp ¥250, scallop ¥150, bacon-cheese ¥220, mochi ¥150; dashimaki ¥400 (December 2025) · dipping sauce, ponzu, mayonnaise and sansho; free cabbage refills (October 2026)',
    website: SITE, gmaps: gm('串かつ専門 串文 京都 四条烏丸'), menu_url: SITE,
    notes: '[Kushikatsu · Shijo Karasuma, since 1972] A small second-floor counter and tatami room on Shijo-dori, founded in Arashiyama in 1972 and here since 2009. Light, finely battered skewers with Kyoto touches — Manganji pepper, yuba, nama-fu, shiso-wrapped sweetfish — fried to order and handed straight to your plate, with free cabbage. Take the ¥3,280 Arashiyama set or the omakase until you say stop; single skewers from ¥120. ¥300 cover.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'The official site dates the shop to 1972 in Arashiyama; it closed in 2006 and reopened near Karasuma Station in 2009. An August 2025 reviewer, back after more than ten years, read that actors Shun Oguri and Osamu Mukai had visited. A July 2025 diner was thanked by the owner for eating so many skewers.',
      philosophy: null, specialty: 'Light-battered kushikatsu with Kyoto vegetables.',
      anecdotes: [
        { text: 'An October 2024 visitor ordered the Manganji pepper skewer about three times.', source: R + 'B494057408/' },
        { text: 'An August 2025 family on the omakase said the children were thrilled to eat skewers straight out of the fryer.', source: R + 'B511806214/' },
        { text: 'A February 2025 diner found the oil not well drained and the ochazuke flavourless.', source: R + 'B501829467/' },
      ],
      japanese_sources_summary: '公式サイト: 串かつ専門 串文、下京区四条通新町東入ル月鉾町46 竹中ビル2階 (階段)、阪急烏丸駅26番出口・地下鉄四条駅2番出口から徒歩約3分、17:30〜23:00、不定休、カウンター6席・座敷11席、貸切15〜18名、お通し300円 (キャベツ付き)、当日無断キャンセル2,000円、カード・PayPay・Alipay可、1972年に嵐山で創業、2006年に一度閉店、2009年に烏丸駅近くで再開、おまかせはストップと言うまで。食べログ: 串揚げ・居酒屋、毎日17:30〜23:00、不定休、予約可、18席、禁煙 (喫煙所あり)、子ども可。口コミ (2024〜2026年、英語): 6種の植物油、細かい衣、京野菜、万願寺とうがらし、湯葉、生麩、京の彩りセット「嵐山」3,280円、1本120〜250円。',
      confidence: 'medium', sources: [SITE, TB, R + 'B489221853/', R + 'B494057408/', R + 'B501829467/', R + 'B510487468/', R + 'B510708636/', R + 'B511806214/', R + 'B515406789/', R + 'B519794099/', R + 'B535975645/', R + 'B537575879/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter dining with skewers served one by one; ¥300 cover; omakase until you say stop.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通新町東入ル月鉾町46 竹中ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003575, 135.757013), moved about 5.5 m north to 35.003625 because kyoto_kamomeken_shijo (1F of the same building) sits 1.4 m away; cross-checked: GSI 京都府京都市下京区月鉾町46番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537575879/', R + 'B519794099/', SITE],
    price_note: 'Set and skewer prices from October and December 2025–2026 reviews; cover from the official site.', last_checked: TODAY, items: [
      it('', '', 'Kyoto set “Arashiyama” (15 skewers, dashimaki, chazuke, sorbet)', '¥3,280', 'Courses', 'no', 'no', 'October 2026.', 'arashiyama_set'),
      it('', '', 'Omakase (until you say stop)', '', 'Courses', 'no', 'no', 'Official site.', 'omakase'),
      it('', '', 'Beef skewer', '¥250', 'Skewers', 'no', 'no', 'December 2025.', 'beef_kushi'),
      it('', '', 'Lotus root skewer', '¥200', 'Skewers', 'no', 'no', 'December 2025.', 'renkon_kushi'),
      it('', '', 'Dashimaki', '¥400', 'À la carte', 'ask', 'no', 'December 2025.', 'dashimaki'),
      it('', '', 'Cover (with cabbage)', '¥300', 'Charges', '', '', 'Official site.', 'otoshi'),
    ] }, {
    cuisine: '京野菜を使う串かつ。細かく軽い衣、ごま油や米油など6種の植物油のブレンドで揚げる (公式サイト、2025年8月、2026年10月)・おまかせ: ストップと言うまで続く (公式サイト)・京の彩りセット「嵐山」3,280円: だし巻き、串15本 (牛、海老、万願寺とうがらし、鮎の大葉巻き、穴子、うずら、蓮根、こんにゃく、焼売、湯葉、蛸、茄子、竹輪、ミニトマト、柚子味噌田楽)、のり茶漬け、柚子シャーベット (2026年10月)・1本120〜250円: 牛250円、豚200円、海老250円、帆立150円、ベーコンチーズ220円、餅150円、だし巻き400円 (2025年12月)・ソース、ポン酢、マヨネーズ、山椒。キャベツはおかわり自由 (2026年10月)',
    neighborhood: '烏丸のすぐ西の四条通。阪急烏丸駅26番出口から徒歩2分',
    gf_detail: 'グルテンフリーではない。串はすべて衣をつけて揚げる。生麩もある。ソースやポン酢も (公式サイト、2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。野菜の串 (万願寺とうがらし、蓮根、湯葉、こんにゃく、かぼちゃ) も肉や魚介と同じ油と衣。衣の材料は書かれていない (公式サイト、2024〜2026年の口コミ)。',
    notes: '[串かつ・四条烏丸、1972年から] 四条通のビル2階、小さなカウンターと座敷。1972年に嵐山で創業し、2009年からこの場所に。細かく軽い衣の串に、万願寺とうがらし、湯葉、生麩、鮎の大葉巻きなど京都らしい種。揚げたてを一本ずつ皿へ、キャベツは無料。3,280円の「嵐山」セットか、ストップと言うまでのおまかせ。1本120円から。お通し300円。',
  });
}

// ================================================================ ブション
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002328/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.bellecour.co.jp/bouchon%20file/bouchon.htm'; const LUNCH = 'https://www.bellecour.co.jp/bouchon%20file/dejeuner.html';
  const CARTE = 'https://www.bellecour.co.jp/bouchon%20file/bouchon%20carte.htm';
  const H = day(['11:30', '14:30'], ['17:30', '21:30']);
  put({
    id: 'kyoto_le_bouchon_teramachi', name: 'ブション (Le Bouchon)', category: 'OMNI',
    lat: 35.013390, lng: 135.767552, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lyonnais bistro — grilled hanging tender with fries, braised beef, fish of the day, terrines, cassoulet, gratinée lyonnaise (onion soup with bread and cheese), baguette with every lunch; no gluten information (official menus; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but the menus are built on meat, charcuterie and fish; no vegan dish is listed (official menus; Tabelog).',
    hours_raw: 'Lunch 11:30–14:30 (last entry), dinner 17:30–21:30; closed Thursdays and the second and fourth Mondays (official site; Tabelog gives Thursday only). Monthly opening calendars on the official site. Reservations by phone only, up to a month ahead, on 075-211-5220 between 9:00–11:00, 15:30–17:00 or 21:00–22:00 (official site; Tabelog). Fills by noon on weekdays and holidays; booking advised (2026 reviews). Cash only — no cards, e-money or QR (Tabelog; November 2026). 32 seats, open terrace, non-smoking, English menu, children welcome (Tabelog). On Teramachi just south of Nijo, 4 min from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Teramachi just south of Nijo — 4 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Traditional Lyonnais bistro (Bellecour group page) · lunch: Formule ¥2,100 (main, green salad, bread) or ¥2,600 with dessert; mains of grilled hanging tender with maître d’hôtel butter and fries, beef braised with carrots, meat or fish of the day (official lunch menu); reviewers paid ¥2,500 with drink and dessert (October 2026) · carte: soupe de poisson, gratinée lyonnaise, salads (mushroom and raw ham, endive with Roquefort), sea-bream carpaccio, scallop-and-vegetable terrine with tomato jelly, crab terrine, pâté de campagne, gras-double à la lyonnaise, assiette de cochonnaille, hot saucisson with lentils (official carte, prices not legible) · tripe, cassoulet of duck and pork, lamb, lamb couscous, praline dessert, chocolate cake (2025–2026 reviews) · baguette refills free at lunch (August 2026); wine list praised (August 2026)',
    website: SITE, gmaps: gm('ブション 京都 寺町二条'), menu_url: LUNCH,
    notes: '[Lyonnais bistro · Teramachi-Nijo, cash only] A Parisian-looking bistro with a terrace on Teramachi below Nijo, from the Bellecour group (since 1985). Lunch is the draw: ¥2,100 for salad, free baguette and a main — the grilled hanging tender with fries is the favourite — or ¥2,600 with dessert. At night, Lyonnais classics: gratinée, tripe, cochonnaille, cassoulet. Phone bookings only, at set hours; cash only; fills by noon.',
    chef_bio: { chef_name: null, roles: ['Kitchen (unnamed); operated by the Bellecour group'], origin: null,
      background: 'The Bellecour group page (“ベルクールグループ depuis 1985”) lists the salon de thé restaurant オ・タン・ペルデュ and ブション, “伝統的地方料理、リヨン料理” (traditional regional, Lyonnais cooking). No chef is named on the pages opened.',
      philosophy: null, specialty: 'Lyonnais bistro cooking; grilled hanging tender (onglet).',
      anecdotes: [
        { text: 'A September 2026 visitor came back for the hanging tender before seeing Super Kabuki at Minami-za.', source: R + 'B533140189/' },
        { text: 'A family celebrated a mother’s 80th birthday over the meat dishes and the praline dessert (September 2026).', source: R + 'B536438349/' },
        { text: 'An August 2026 diner heard many languages in the room and called it like being abroad.', source: R + 'B534700173/' },
      ],
      japanese_sources_summary: '公式サイト (ベルクールグループ): ブション、伝統的地方料理・リヨン料理、中京区寺町二条榎木町71-1、昼11:30〜14:30 (最終入店)、夜17:30〜21:30閉店、木曜および第2・第4月曜定休、予約は1か月前以内、電話のみ (9〜11時、15時半〜17時、21〜22時)。ランチ: Formule 2,100円 (主菜、サラダ、パン)、2,600円 (デザート付き)、主菜はハラミステーキのメートルドテルバターとポテトフライ、牛肉の人参煮込み、本日の肉料理、本日の魚料理。食べログ: フレンチ・ダイニングバー、カード・電子マネー・QR不可、32席、テラス、禁煙、英語メニュー、ベジタリアン対応、子ども可。口コミ (2025〜2026年、英語): ハラミ、トリップ、カスレ、仔羊のクスクス、昼は満席、現金のみ、海外の客が多い。',
      confidence: 'medium', sources: [SITE, LUNCH, CARTE, 'https://www.bellecour.co.jp/', TB, R + 'B475778773/', R + 'B533140189/', R + 'B534700173/', R + 'B535496021/', R + 'B535549264/', R + 'B536438349/', R + 'B537102207/', R + 'B537528657/', R + 'B537824963/', R + 'B538578515/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); bilingual French–English lunch menu (official site); many international guests (August 2026). Phone-only reservations; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区寺町通二条榎木町71-1 グランデヴェラ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with October–November 2026 calendars; Tabelog reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.01339, 135.767552); cross-checked: GSI 京都府京都市中京区榎木町71番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [LUNCH],
    price_note: 'Official lunch menu read 2026-11-05; the carte’s prices could not be read.', last_checked: TODAY, items: [
      it('', '', 'Lunch Formule: main, green salad, bread', '¥2,100', 'Lunch', 'ask', 'ask', 'Official lunch menu.', 'lunch_a'),
      it('', '', 'Lunch Formule with dessert', '¥2,600', 'Lunch', 'ask', 'ask', 'Official lunch menu.', 'lunch_b'),
      it('ハラミステーキ、メートルドテルバター、ポテトフライ添え', '', 'Grilled hanging tender, maître d’hôtel butter, fries (lunch main)', '', 'Lunch', 'ask', 'no', 'Official lunch menu.', 'onglet'),
      it('柔らかく煮込んだ牛肉の人参添え', '', 'Beef braised with carrots (lunch main)', '', 'Lunch', 'ask', 'no', 'Official lunch menu.', 'boeuf_braise'),
    ] }, {
    cuisine: 'リヨンの伝統的なビストロ (ベルクールグループの案内)・ランチ: Formule 2,100円 (主菜、グリーンサラダ、パン)、デザート付き2,600円。主菜はハラミステーキのメートルドテルバターとポテトフライ、牛肉の人参煮込み、本日の肉か魚 (公式ランチメニュー)。ドリンクとデザートで2,500円だったとの口コミも (2026年10月)・アラカルト: スープドポワソン、グラティネ・リヨネーズ、サラダ (きのこと生ハム、アンディーブとロックフォール)、鯛のカルパッチョ、帆立と野菜のテリーヌ トマトのジュレ、蟹のテリーヌ、パテ・ド・カンパーニュ、トリップのリヨン風、シャルキュトリーの盛合せ、温かいソーセージとレンズ豆 (公式メニュー、価格は読めず)・トリップ、鴨と豚のカスレ、仔羊、仔羊のクスクス、プラリネのデザート、ガトーショコラ (2025〜2026年の口コミ)・昼はバゲットおかわり自由 (2026年8月)、ワインの評判もよい (2026年8月)',
    neighborhood: '二条のすぐ南の寺町通。京都市役所前駅から徒歩4分',
    gf_detail: '要確認。リヨンのビストロ。ハラミのグリルとポテトフライ、牛肉の煮込み、本日の魚、テリーヌ、カスレ、グラティネ (パンとチーズのオニオンスープ)。ランチにはバゲット。グルテンの情報はない (公式メニュー、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログではベジタリアン対応とあるが、メニューは肉、シャルキュトリー、魚が中心で、ヴィーガンの料理は載っていない (公式メニュー、食べログ)。',
    notes: '[リヨンのビストロ・寺町二条、現金のみ] 二条の南の寺町通、テラスのあるパリの雰囲気のビストロ。1985年からのベルクールグループの店。人気は昼: サラダ、おかわり自由のバゲット、主菜で2,100円 (一番人気はハラミステーキとポテトフライ)、デザート付き2,600円。夜はグラティネ、トリップ、シャルキュトリー、カスレなどリヨンの定番。予約は決まった時間の電話のみ。現金のみ。昼は正午には満席に。',
  });
}

// ================================================================ 饗応 元
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26033510/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyouou-hajime.github.io/'; const MENU = SITE + 'menu.html'; const ABOUT = SITE + 'about.html'; const FAQ = SITE + 'faq.html';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_kyoou_hajime', name: '饗応 元 (Kyoou Hajime)', category: 'OMNI',
    lat: 35.015963, lng: 135.758747, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A long menu of small dishes, many with soy sauce, dashi or frying — tempura, karaage, fries, nanban-zuke, croquettes, katsu, gyoza, ramen, pasta, chazuke, cha-soba; no gluten information (official menu).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A few vegetable and tofu dishes (hiyayakko, yuba, nama-fu dengaku, baby-leaf salad, fries, grilled nagaimo with soy) and mixed nuts are listed, but seasonings and dashi are not described (official menu).',
    hours_raw: 'Opens 18:00; last walk-in entry 23:00; with a phone booking made before 23:00, à la carte until as late as 2:00; closes if no guests at 23:00. Irregular closures, some Sundays closed — see the site’s news page (official site; Tabelog). Courses must be booked two days ahead; à la carte seat bookings taken; parties of 5 or more (6 or more per another note) by phone (official site; Tabelog). On the 29th of each month, reservation only: a Kuroge Wagyu “meat day” course ¥10,500 (Tabelog). Service charge 5% (refunded for cash) and one-drink rule (¥500 if no drink) — Tabelog original: サービス料5%（現金の場合キャッシュバック有り）、ワンドリンク制（飲まれない場合はチャージ500円頂きます）. Cards (VISA, Master, JCB, AMEX, Diners) and e-money; no QR (Tabelog). 14 seats: 6 at the counter, two tables for 4; private hire up to 20 (Tabelog; official site). Listed as non-smoking, with an ashtray on the table (Tabelog). School-age children only, for the first booking of the day only; children’s meals not prioritised (Tabelog). BYO allowed; sommelier (Tabelog). In a back lane on Ryogaemachi north of Ebisugawa, 3 min from Marutamachi Stn exits 4 and 5 (official site). Opened 6 January 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Back lane on Ryogaemachi north of Ebisugawa — 3 min from Marutamachi Stn',
    cuisine: 'Japanese cooking “with free ideas” built on washoku, with ideas from an Italian background (official site) · seasonal fish as sashimi, grills, soups and sake snacks; horse sashimi; Kuroge Wagyu (official site) · à la carte (official menu, prices a guide): Japanese mapo tofu ¥1,050, tuna and avocado ¥1,000, Earl Grey-scented duck loin ¥950, gyoza ¥900, Kyoto nama-fu dengaku ¥900, karasumi daikon ¥1,250, Kyoto pickles of suguki, shibazuke and senmaizuke ¥700, A5 Kuroge Wagyu gyudon ¥2,700, homemade ramen ¥1,050, curry of the day from ¥1,100, dashi chazuke ¥950, A5 Wagyu steak from ¥3,000 per 100 g, Ezo deer ¥2,300 per 100 g, hamburg steak with white-mould cheese ¥1,150 · seasonal courses booked two days ahead (official site) · spring rolls including duck-and-sansho keema curry, sakura yukhoe, red snow-crab tomato-cream pasta, karasumi mochi (2026 reviews) · sake chosen by the owner to match each dish, plus whisky, shochu and wine (official site)',
    website: SITE, gmaps: gm('饗応 元 京都 丸太町'), menu_url: MENU,
    notes: '[Japanese small plates and sake · Marutamachi, open late] A 14-seat house in a back lane near Marutamachi run by an owner qualified as a sake master (酒匠) and sake taster, who picks a sake for each dish and talks you through it. A long à la carte list on a washoku base with Italian-influenced freedom — horse sashimi, Earl Grey duck, karasumi daikon, keema-curry spring rolls, A5 Wagyu gyudon — or a seasonal course booked two days ahead. Last walk-in 23:00; with a call, food until 2:00. 5% service charge (refunded if you pay cash); one drink required.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), 酒匠 (sake master) and 唎酒師 (sake taster)'], origin: null,
      background: 'The official site describes the owner as a 酒匠 and 唎酒師 who checks every ingredient personally — seasonal fish, horse meat, Kuroge Wagyu — and builds the dishes on washoku technique with “free ideas cultivated in Italian cooking” (イタリアンで培った自由な発想). Tabelog’s shop text calls 酒匠 an advanced qualification held by few, and notes a KBS Kyoto TV appearance (Angya de Gozaru!!). Reviewers call the owner “a manager like a professor” with “an incredible knowledge of alcohol” who visits breweries (August and October 2026).',
      philosophy: '“Low threshold, high expertise” (敷居は低く、専門性は高く); a shop where the sake master chooses sake to suit the dish, not a shop with many sakes (official site).', specialty: 'Sake pairing; horse sashimi; Kuroge Wagyu.',
      anecdotes: [
        { text: 'A November 2025 group, waiting for change after paying, was surprised with a birthday celebration the group had forgotten to request.', source: R + 'B520077382/' },
        { text: 'A January 2026 regular on an eleventh visit described sakes matched by temperature and age to duck tataki, horse sashimi, veal yukhoe and grilled eel.', source: R + 'B422387671/' },
      ],
      japanese_sources_summary: '公式サイト: 饗応 元 (キョウオウハジメ)、中京区両替町通夷川上る松竹町135-1、丸太町駅4・5番出口から徒歩約3分、18:00開店、予約なしの最終入店23:00、23:00までの電話予約で最長翌2:00まで、23:00に客がいなければ閉店、不定休 (日曜休業あり)、コースは2日前までに予約、14席。「和食をベースに、自由な発想を加えた料理」、酒匠・唎酒師の店主、「料理に合わせて酒匠が日本酒を選ぶ店」、イタリアンで培った発想、旬魚、馬刺し、黒毛和牛、毎月29日の肉会。メニュー例: 和製麻婆豆腐1,050円、アールグレイ香る鴨ロース950円、カラスミ大根1,250円、大人の牛丼2,700円、自家製ラーメン1,050円など。水曜の担々麺ランチは休止中。食べログ: サービス料5% (現金の場合キャッシュバック有り)、ワンドリンク制 (飲まれない場合はチャージ500円)、カード・電子マネー可、子どもは小学生以上で当日最初の予約のみ、2020年1月6日オープン、KBS京都の番組で紹介。',
      confidence: 'medium', sources: [SITE, ABOUT, MENU, FAQ, TB, R + 'B422387671/', R + 'B465271667/', R + 'B515224728/', R + 'B520077382/', R + 'B529892709/', R + 'B530214360/', R + 'B532687130/', R + 'B533585866/', R + 'B534558398/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The owner explains each dish and sake; tell the owner what you like. 5% service charge (refunded for cash) and a one-drink rule. Children: school-age only, first booking of the day.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区両替町通夷川上る松竹町135-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (November 2026 news) and Tabelog; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.015963, 135.758747); cross-checked: GSI 京都府京都市中京区松竹町135番地 (lot) 57m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official menu examples, prices a guide; fish at market price on the blackboard; read 2026-11-05.', last_checked: TODAY, items: [
      it('和製麻婆豆腐', '', 'Japanese-style mapo tofu', '¥1,050', 'À la carte', 'ask', 'ask', 'Official menu.', 'mapo_tofu'),
      it('アールグレイ香る鴨ロース', '', 'Earl Grey-scented duck loin', '¥950', 'À la carte', 'ask', 'no', 'Official menu.', 'duck_loin'),
      it('京生麩の田楽 よもぎ麸', '', 'Kyoto yomogi nama-fu dengaku', '¥900', 'À la carte', 'no', 'ask', 'Official menu; nama-fu is wheat gluten.', 'namafu_dengaku'),
      it('カラスミ大根', '', 'Karasumi with daikon', '¥1,250', 'Sake snacks', 'ask', 'no', 'Official menu.', 'karasumi_daikon'),
      it('京都3大漬物盛り合わせ', '', 'Three Kyoto pickles (suguki, shibazuke, senmaizuke)', '¥700', 'Sake snacks', 'ask', 'ask', 'Official menu.', 'tsukemono'),
      it('大人の牛丼 黒毛和牛A5', '', 'A5 Kuroge Wagyu gyudon (regular / small)', '¥2,700 / ¥1,700', 'Rice and noodles', 'ask', 'no', 'Official menu.', 'gyudon'),
      it('自家製ラーメン', '', 'Homemade ramen', '¥1,050', 'Rice and noodles', 'no', 'no', 'Official menu; ichiban dashi, fish powder, chicken.', 'ramen'),
      it('出汁茶漬け', '', 'Dashi chazuke', '¥950', 'Rice and noodles', 'ask', 'no', 'Official menu.', 'dashi_chazuke'),
      it('', '', 'Meat-day Kuroge Wagyu course (29th of each month)', '¥10,500', 'Courses', 'ask', 'no', 'Tabelog.', 'niku_kai'),
    ] }, {
    cuisine: '和食をベースに自由な発想を加えた料理、イタリアンで培った発想も (公式サイト)・旬の魚の造り、焼物、椀、酒肴、馬刺し、黒毛和牛 (公式サイト)・アラカルト (公式メニュー、価格は目安): 和製麻婆豆腐1,050円、鮪とアボカド1,000円、アールグレイ香る鴨ロース950円、肉汁水餃子900円、京生麩の田楽900円、カラスミ大根1,250円、京都3大漬物盛り合わせ700円、大人の牛丼2,700円、自家製ラーメン1,050円、本日のカレー1,100円から、出汁茶漬け950円、A5黒毛和牛ステーキ100g 3,000円から、蝦夷鹿100g 2,300円、白カビチーズ入りハンバーグ1,150円・季節のコースは2日前までに予約 (公式サイト)・鴨と山椒のキーマカレー春巻きなどの春巻き、桜ユッケ、紅ずわい蟹のトマトクリームパスタ、カラスミ餅 (2026年の口コミ)・料理に合わせて店主が選ぶ日本酒、ウイスキー、焼酎、ワイン (公式サイト)',
    neighborhood: '夷川の北、両替町通の路地裏。丸太町駅から徒歩3分',
    gf_detail: '要確認。醤油、出汁、揚げ物を使う小皿が多い。天ぷら、唐揚げ、ポテトフライ、南蛮漬け、コロッケ、カツ、餃子、ラーメン、パスタ、茶漬け、茶そば。グルテンの情報はない (公式メニュー)。',
    vegan_detail: '要確認。冷や奴、汲み上げ湯葉、生麩の田楽、ベビーリーフのサラダ、ポテトフライ、長芋焼、ミックスナッツなど野菜や豆腐の皿もあるが、調味料や出汁は書かれていない (公式メニュー)。',
    notes: '[和食の小皿と日本酒・丸太町、夜遅くまで] 丸太町近くの路地裏、14席の一軒家。酒匠・唎酒師の店主が、料理ごとに日本酒を選んで説明してくれる。和食をベースにイタリアンで培った自由な発想を加えたアラカルト (馬刺し、アールグレイの鴨、カラスミ大根、キーマカレーの春巻き、A5和牛の牛丼) か、2日前までに予約する季節のコース。予約なしの最終入店23時、電話すれば最長翌2時まで。サービス料5% (現金ならキャッシュバック)、ワンドリンク制。',
  });
}

// ================================================================ 福栄堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000564/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://issen-yosyoku.co.jp/fukueidou/';
  const H = day(['10:00', '22:00']); const HL = day(['10:00', '23:00']);
  put({
    id: 'kyoto_fukueido_gion', name: '福栄堂 (Fukueido)', category: 'OMNI',
    lat: 35.003941, lng: 135.773029, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dango and ohagi are rice-based, but no ingredient list is published; the matcha dango is described with a kuzumochi-like texture in bamboo leaf (January 2026).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Dango with bean paste and ohagi are often plant-based, but no ingredient list is published; the 祇園ぷるこちゃん jelly contains collagen and is not vegan (official site).',
    hours_raw: 'Sunday–Thursday 10:00–22:00, Friday–Saturday 10:00–23:00; no closing days (official site). Tabelog gives Monday–Saturday 10:00–24:00, Sundays and holidays to 22:00, open year-round. Takeaway. Reservations accepted (Tabelog; phone 075-561-3078). Cards and PayPay; no e-money (Tabelog). Online shop (official site). On Yamatooji just north of Shijo, near 壹錢洋食 (same company), 110 m from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: HL, 5: HL, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yamatooji just north of Shijo, Gion — 2 min from Gion-Shijo Stn',
    cuisine: 'Takeaway Kyoto sweets from a shop with 80 years of history (official site) · Gion no Tsuki (祇園の月) dango, the long-seller since the founding, in smooth bean paste: matchbox-style box of 6, ¥820 (February 2026) to ¥880 (August 2026), with a choice of box designs · Kabuki dango, three colours of bean paste on a skewer, ¥300 (April 2026) · ohagi of chestnut, tsubuan and koshian (February 2026) · matcha dango with chestnut in bamboo leaf (January 2026) · small minazuki, plain and matcha, ¥400 (June 2026) · chilled dango in summer (August 2026) · 祇園ぷるこちゃん matcha anmitsu jelly with collagen (official site)',
    website: SITE, gmaps: gm('福栄堂 祇園 大和大路'), menu_url: null,
    notes: '[Dango · Gion, open until 22:00] A small sweets counter on Yamatooji just above Shijo, open late every day, run by the same company as nearby 壹錢洋食. Buy the house dango, Gion no Tsuki — soft rice dumplings in smooth bean paste, six in a matchbox-style box for about ¥880, a pretty souvenir — or a ¥300 three-colour Kabuki dango to eat on the walk, plus ohagi and seasonal minazuki. Mildly sweet.',
    chef_bio: { chef_name: null, roles: ['Shop artisans (unnamed); operated with 壹錢洋食'], origin: null,
      background: 'The official site, on the 壹錢洋食 company domain, calls it a Kyoto sweets shop with 80 years of tradition whose dango 祇園の月 has been sold since the founding and are made by the shop’s artisans; the company’s top page thanks maiko and geiko for supporting both 福栄堂 and 壹錢洋食.',
      philosophy: null, specialty: 'Gion no Tsuki dango.',
      anecdotes: [
        { text: 'An August 2026 buyer was allowed to choose among three box designs and bought one of each.', source: R + 'B536038118/' },
        { text: 'An April 2026 buyer ordered the plain pack and was charged the boxed price, putting it down to inexperienced staff.', source: R + 'B526991573/' },
      ],
      japanese_sources_summary: '公式サイト: 福栄堂、創業から80年の伝統を持つ京菓子店、自慢のお団子「祇園の月」は創業当時からのロングセラー、コラーゲン入りの「祇園ぷるこちゃん 抹茶あんみつゼリー」、職人の手づくり、日〜木10:00〜22:00、金・土10:00〜23:00、定休日なし、東山区大和大路通四条上る廿一軒町226、オンラインショップあり。壹錢洋食の会社サイトに掲載。食べログ: 和菓子、予約可、カード・PayPay可、テイクアウト、祇園四条駅から110m。口コミ (2026年、英語): 祇園の月のマッチ箱 (6個) 820〜880円、歌舞伎団子300円、栗・つぶあん・こしあんのおはぎ、笹の抹茶団子、水無月400円、甘さ控えめ、夜遅くまで開いている。',
      confidence: 'medium', sources: [SITE, 'https://issen-yosyoku.co.jp/', TB, R + 'B522800807/', R + 'B523924067/', R + 'B524214188/', R + 'B525575547/', R + 'B526991573/', R + 'B529655235/', R + 'B530455266/', R + 'B531847586/', R + 'B533473489/', R + 'B536038118/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A takeaway counter; point at the dango boxes. Cards and PayPay accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通四条上る廿一軒町226',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.003941, 135.773029); cross-checked: GSI 京都府京都市東山区廿一軒町226番地 (lot) 23m; 18m from kyoto_issen_yoshoku_honten, no offset needed; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536038118/', R + 'B525575547/', R + 'B530455266/'],
    price_note: 'No price list read; prices from 2026 reviews.', last_checked: TODAY, items: [
      it('祇園の月', '', 'Gion no Tsuki dango, matchbox of 6', '¥880', 'Wagashi', 'ask', 'ask', 'August 2026 (¥820 in February 2026).', 'gion_no_tsuki'),
      it('', '', 'Kabuki dango (three colours, skewer)', '¥300', 'Wagashi', 'ask', 'ask', 'April 2026.', 'kabuki_dango'),
      it('', '', 'Small minazuki (plain and matcha)', '¥400', 'Seasonal', 'ask', 'ask', 'June 2026.', 'minazuki'),
    ] }, {
    cuisine: '創業80年の京菓子店の持ち帰りの菓子 (公式サイト)・創業当時からのロングセラー、こしあんで包んだ団子「祇園の月」。マッチ箱のような6個入り820円 (2026年2月)〜880円 (2026年8月)、箱の柄を選べる・3色のあんの串団子「歌舞伎団子」300円 (2026年4月)・栗、つぶあん、こしあんのおはぎ (2026年2月)・笹に包んだ栗入りの抹茶団子 (2026年1月)・小さな水無月、プレーンと抹茶で400円 (2026年6月)・夏は冷たい団子 (2026年8月)・コラーゲン入りの「祇園ぷるこちゃん 抹茶あんみつゼリー」(公式サイト)',
    neighborhood: '祇園、四条のすぐ北の大和大路通。祇園四条駅から徒歩2分',
    gf_detail: '要確認。団子とおはぎは米が主だが、原材料は公開されていない。抹茶団子は笹に包んだ葛餅のような食感とされる (2026年1月)。',
    vegan_detail: '要確認。あんの団子やおはぎは植物性のことが多いが、原材料は公開されていない。「祇園ぷるこちゃん」のゼリーはコラーゲン入りでヴィーガンではない (公式サイト)。',
    notes: '[団子・祇園、夜10時まで] 四条のすぐ北の大和大路通、毎日夜遅くまで開く小さな和菓子屋。近くの壹錢洋食と同じ会社の店。名物の「祇園の月」はこしあんで包んだやわらかい団子で、マッチ箱のような6個入りが880円ほど、お土産にかわいい。食べ歩きには3色の歌舞伎団子300円。おはぎや季節の水無月も。甘さ控えめ。',
  });
}

save();
