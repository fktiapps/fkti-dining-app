// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 21.
//   + 百歳牛肉麺 三条河原町店 Hyakusai Gyuniku Men (hand-pulled Lanzhou and Taiwanese beef noodles off Sanjo)    [core]
//   + 洋食屋 なかご Nakago (8-seat yoshoku counter in the Momiji-no-Koji machiya alley; dinner only now)       [core]
//   + 京野菜と炭火料理 庵都 Ihoto (lunch restaurant of the ryokan Fufu Kyoto by Nanzen-ji)                      [notable]
//   + コムシコムサ comme ci comme ca (six-seat French in an Okazaki house)                                     [notable]
//   - 天ぷら おばんざい いしかわ 26038637 skipped (same-concept branch of mp_okazuya_ishikawa)
//   Same-name counts first: 百歳牛肉麺 1 — the official site lists only this shop (a June 2026 regular recalls an
//   earlier Fukakusa location); いしかわ — 天ぷら おばんざい いしかわ and お数家いしかわ (in data), see the skip;
//   なかご — 洋食屋 なかご 1 in Kyoto (なかご in Tokyo is ramen and 寿司 なかご in Osaka is sushi: other businesses);
//   庵都 1; コムシコムサ 1.
//   Taken in queue order on 2026-11-05: core 26035535, 26038637 (skip), 26039891; notable 26035499, 26001089.
//   None of the four is in data/kyoto.json by name or address.
//   Service charges: none of the four Tabelog listings has a service-charge section.
//   Pins: Tabelog points; GSI lot matches 15–92 m; なかご is 22.5 m from kyoto_sashimi_maru in the same alley.
//   百歳牛肉麺 is Tabelog-listed as ramen; it is a beef-noodle (niu rou mian) shop and no ramen block is added —
//   the six ramen dimensions are not sourced.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-21');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26038637', '天ぷら おばんざい いしかわ: a same-concept branch of a brand already in data — mp_okazuya_ishikawa (お数家いしかわ, an obanzai izakaya near Shijo-Karasuma); the group site okazuya-ishikawa.com lists just these two shops ("【お数家いしかわ】【天ぷら おばんざい いしかわ】"), Tabelog reviews call it the "sister restaurant" and "main branch", and a May 2026 reviewer says it has offered "a menu almost identical to the main branch starting this spring"');

// ================================================================ 百歳牛肉麺 三条河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035535/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://hyakusai-beefnoodles.com/';
  const H = day(['11:00', '21:00']);
  put({
    id: 'kyoto_hyakusai_gyuniku_men', name: '百歳牛肉麺 三条河原町店 (Hyakusai Gyuniku Men Sanjo Kawaramachi)', category: 'OMNI',
    lat: 35.008682, lng: 135.768434, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: hand-pulled wheat noodles and gyoza (Tabelog; official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-bone broth, beef, lamb and dumplings (Tabelog; official site).',
    hours_raw: '11:00–21:00 daily, open all year (official site; Tabelog). No bookings (Tabelog). The shop serves no pork dishes, per its Tabelog text. Mobile ordering (June 2026). 39 seats over two floors; English, Chinese and Korean menus with photos; English- and Chinese-speaking staff; children welcome; takeaway and delivery; BYO allowed; non-smoking; cards, IC cards and QR incl. Alipay and WeChat Pay (Tabelog). On the south side of the Sanjo shopping street just off Kawaramachi; 8 min from Keihan Sanjo Stn exit 7 (Tabelog; January 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo shopping street just off Kawaramachi — 8 min from Keihan Sanjo Stn',
    cuisine: 'Beef noodles with noodles hand-pulled to order in eight shapes, from thin to flat, thick and triangular (Tabelog) · Lanzhou beef noodles in clear beef-bone broth ¥1,000, beef dan dan noodles ¥1,000, spicy beef mixed noodles ¥1,050, Taiwanese beef noodles ¥1,100, pickled-mustard beef noodles ¥1,100 (official site) · grilled gyoza (lamb, chive and egg), lamb dishes, honeycomb tripe with sesame, Taiwanese sweets such as douhua; Taiwan beer (Tabelog; official site; 2026 reviews)',
    website: SITE, gmaps: gm('百歳牛肉麺 三条河原町店'), menu_url: SITE,
    notes: "[Beef noodles · Sanjo off Kawaramachi] Lanzhou and Taiwanese beef noodles with noodles hand-pulled to order in your choice of eight shapes — about ¥1,000–1,100 a bowl — plus lamb dumplings, sesame tripe and douhua for dessert. No pork dishes. Multilingual menus, mobile ordering, open daily 11:00–21:00.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Per the operator: a beef-noodle specialist where skilled cooks hand-pull the noodles after you order. The official site lists this single shop. A June 2026 regular has eaten its beef noodles since a former location in Fukakusa before the pandemic.',
      philosophy: null, specialty: 'Hand-pulled beef noodles.',
      anecdotes: [
        { text: 'A diner who lived in Taiwan for six months forty years ago came for the Taiwanese beef noodles — June 2026.', source: R + 'B529480393/' },
        { text: 'An April 2026 lunch guest chose the wide flat noodles and found them broader than expected, almost knife-cut.', source: R + 'B527206940/' },
        { text: 'On a staff recommendation, a June 2026 business traveller paired beer with the sesame honeycomb tripe — "incredibly delicious".', source: R + 'B530791968/' },
      ],
      japanese_sources_summary: '公式サイト (hyakusai-beefnoodles.com): 百歳牛肉麺 三条河原町店、中京区石橋町14-14、毎日11:00〜21:00、蘭州牛肉麺1,000円、牛肉担々麺1,000円、旨辛牛肉混ぜ麺1,050円、台湾牛肉麺1,100円、酸菜牛肉麺1,100円、焼き餃子・揚げ物、羊料理、台湾甘味。食べログ (店舗会員): ラーメン・中華・居酒屋、京阪三条駅7番出口から徒歩8分、年中無休、予約不可、39席、注文後に手打ちする8種の麺、豚肉料理はなし、英語・中国語・韓国語のメニュー、テイクアウト・デリバリー、カード・電子マネー・QR 可。口コミ (2026年1〜9月、英語): 蘭州牛肉麺980円、台湾牛肉麺、羊の餃子、ハチノスの胡麻和え、豆花、モバイルオーダー、以前は Fukakusa にあった。',
      confidence: 'medium', sources: [TB, SITE, R + 'B439291297/', R + 'B521084119/', R + 'B527206940/', R + 'B528280622/', R + 'B529480393/', R + 'B530780126/', R + 'B530791968/', R + 'B530985202/', R + 'B533772358/', R + 'B536013916/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus; English- and Chinese-speaking staff; mobile ordering (Tabelog; 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区石橋町14-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.008682, 135.768434); cross-checked: GSI 京都府京都市中京区石橋町14番地 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [SITE],
    price_note: 'Prices from the official site (read 2026-11-05).', last_checked: TODAY, items: [
      it('蘭州牛肉麺', '', 'Lanzhou beef noodles', '¥1,000', 'Noodles', 'no', 'no', '', 'lanzhou'),
      it('牛肉担々麺', '', 'Beef dan dan noodles', '¥1,000', 'Noodles', 'no', 'no', '', 'dandan'),
      it('旨辛牛肉混ぜ麺', '', 'Spicy beef mixed noodles', '¥1,050', 'Noodles', 'no', 'no', '', 'mazemen'),
      it('台湾牛肉麺', '', 'Taiwanese beef noodles', '¥1,100', 'Noodles', 'no', 'no', '', 'taiwan'),
      it('酸菜牛肉麺', '', 'Pickled-mustard beef noodles', '¥1,100', 'Noodles', 'no', 'no', '', 'suancai'),
    ] }, {
    cuisine: '注文後に手打ちする8種の形の麺 (細麺、平麺、太麺、三角麺など) の牛肉麺 (食べログ)・牛骨の澄んだスープの蘭州牛肉麺1,000円、牛肉担々麺1,000円、旨辛牛肉混ぜ麺1,050円、台湾牛肉麺1,100円、酸菜牛肉麺1,100円 (公式サイト)・焼き餃子 (羊、ニラ玉)、羊料理、ハチノスの胡麻和え、豆花などの台湾甘味。台湾ビール (食べログ、公式サイト、2026年の口コミ)',
    neighborhood: '河原町から入った三条名店街。京阪三条駅から徒歩8分',
    gf_detail: 'グルテンフリー不可。手打ちの小麦の麺と餃子 (食べログ、公式サイト)。',
    vegan_detail: 'ヴィーガン不可。牛骨スープ、牛肉、羊、餃子 (食べログ、公式サイト)。',
    notes: '[牛肉麺・河原町近くの三条] 注文ごとに8種から選べる麺を手打ちする蘭州や台湾の牛肉麺 (1杯1,000〜1,100円ほど) に、羊の餃子、ハチノスの胡麻和え、デザートの豆花。豚肉料理はなし。多言語メニュー、モバイルオーダー、毎日11時〜21時。',
  });
}

// ================================================================ 洋食屋 なかご
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039891/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '21:00']);
  put({
    id: 'kyoto_yoshokuya_nakago', name: '洋食屋 なかご (Nakago)', category: 'OMNI',
    lat: 34.998723, lng: 135.765927, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Demi-glace hamburg, breaded cutlets, gratin and pasta; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steak, pork, prosciutto, pâté and shrimp (2025–26 reviews).',
    hours_raw: 'Tue–Sun 17:30–21:00, last seating 20:00; closed Monday (Tabelog). A September 2026 reviewer says lunch has stopped and only dinner is served; earlier lunch sets (hamburg set ¥2,200 in January and April 2026) are no longer offered. Bookings taken — one diner booked by phone a month ahead (May 2026); no photos of the menu (April 2026). 8 counter seats; non-smoking; cards and e-money (Tabelog). At the back of "Momiji no Koji", a machiya alley off Matsubara-dori; 7 min from Kawaramachi Stn (Tabelog; March 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Matsubara-dori near Kawaramachi, in the Momiji no Koji alley — 7 min from Kawaramachi Stn',
    cuisine: 'Yoshoku at an eight-seat counter: hamburg steak with long-simmered demi-glace, cabbage rolls, pork cutlet on potato purée, pork ginger, Neapolitan pasta (2025–26 reviews) · evenings now centre on drinks and small plates: chicken ham, prosciutto salad, pâté de campagne, seared bonito, chicken liver, shrimp with nama-fu, shrimp gratin, finished with a hamburg steak (September–October 2026)',
    website: null, gmaps: gm('洋食屋 なかご 京都'), menu_url: null,
    notes: "[Yoshoku · Momiji no Koji off Matsubara] An eight-seat counter at the back of a renovated machiya alley, cooking classic Western-style dishes — a hamburg steak in long-simmered demi-glace, cabbage rolls — alongside wine-friendly small plates. Dinner only since 2026; about ¥8,000–10,000 with drinks. Regulars fill it: book. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed; a May 2026 reviewer describes a husband-and-wife team)'], origin: null,
      background: 'Opened 27 July 2023 (Tabelog). An October 2026 reviewer heard stories about the owner\'s work in New York; a May 2026 reviewer says it appears to be run by a husband-and-wife team, the husband cooking quietly and the wife serving.',
      philosophy: null, specialty: 'Hamburg steak with demi-glace.',
      anecdotes: [
        { text: 'A January 2026 lunch guest found the service "quite unfriendly", while regulars were greeted with conversation — "a nostalgic feel reminiscent of Kyoto from decades ago".', source: R + 'B520412949/' },
        { text: 'A May 2026 diner booked by phone a month ahead and found the counter full of chatting regulars.', source: R + 'B528244553/' },
        { text: 'Returning in September 2026, a guest found lunch discontinued and the evening menu richer in drinks and appetizers.', source: R + 'B534819804/' },
      ],
      japanese_sources_summary: '食べログ: 洋食屋 なかご、洋食、下京区松原通御幸町西入ル石不動之町682-2 もみじの小路 H-8、阪急京都河原町駅から徒歩7分、火〜日 17:30〜21:00 (最終入店20:00)、月曜休み、8席 (カウンター)、禁煙、2023年7月27日オープン。口コミ (2025年9月〜2026年10月、英語): デミグラスのハンバーグ、ロールキャベツ、トンカツ、ポークジンジャー、ナポリタン、ランチのハンバーグ定食2,200円 (のちにランチ終了)、生ハムのサラダ、パテ・ド・カンパーニュ、鰹のたたき、海老グラタン、メニューの撮影不可、夫婦で営む様子、ニューヨークでの仕事の話。',
      confidence: 'medium', sources: [TB, R + 'B486859990/', R + 'B487908759/', R + 'B520412949/', R + 'B522253355/', R + 'B524635461/', R + 'B526038303/', R + 'B528244553/', R + 'B528785507/', R + 'B528874487/', R + 'B534819804/'] },
    cultural_comfort: { level: 'japanese', note: 'A small counter of regulars; book by phone; no menu photos.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区松原通御幸町西入ル石不動之町682-2 もみじの小路 H-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.998723, 135.765927); cross-checked: GSI 京都府京都市下京区石不動之町682番地 (lot) 15m; 22.5 m from kyoto_sashimi_maru in the same alley; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526038303/'],
    price_note: 'No current menu read; the ¥2,200 hamburg set was a lunch item (April 2026), and lunch has since stopped.', last_checked: TODAY, items: [
      it('', '', 'Hamburg steak with demi-glace', '', 'Mains', 'ask', 'no', '', 'hamburg'),
    ] }, {
    cuisine: '8席のカウンターの洋食: じっくり煮込んだデミグラスのハンバーグ、ロールキャベツ、ポテトピュレにのせたトンカツ、ポークジンジャー、ナポリタン (2025〜26年の口コミ)・夜は酒と小皿が中心に: 鶏ハム、生ハムのサラダ、パテ・ド・カンパーニュ、鰹のたたき、鶏レバー、海老と生麩、海老グラタン、締めにハンバーグ (2026年9〜10月)',
    neighborhood: '河原町に近い松原通の、もみじの小路の路地。河原町駅から徒歩7分',
    gf_detail: '要確認。デミグラスのハンバーグ、カツ、グラタン、パスタ。グルテンの情報はない (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ハンバーグ、豚肉、生ハム、パテ、海老 (2025〜26年の口コミ)。',
    notes: '[洋食・松原通のもみじの小路] 町家を改装した路地の奥の8席のカウンターで、じっくり煮込んだデミグラスのハンバーグやロールキャベツなどの洋食と、ワインに合う小皿を出す。2026年から夜のみ、酒込みで8千〜1万円ほど。常連で埋まるので予約を。月曜休み。',
  });
}

// ================================================================ 京野菜と炭火料理 庵都
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26035499/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.fufukyoto.jp//lunch/';
  const H = day(['11:30', '14:30']);
  put({
    id: 'kyoto_ihoto_fufu', name: '京野菜と炭火料理 庵都 (Kyoyasai to Sumibi Ryori Ihoto)', category: 'OMNI',
    lat: 35.011586, lng: 135.786165, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Gozen sets with tempura, charcoal-grilled skewers, miso soup and many small dishes; a July 2026 reviewer says allergies were catered for well; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: sashimi, chicken and fish skewers, and an Ihoto soup with pork (2026 reviews).',
    hours_raw: 'Lunch 11:30–14:30 (last order 13:30) daily (Tabelog). Bookings advised; the tempura gozen can be ordered on the day (September 2026). Enter by the restaurant\'s own entrance, left of the ryokan Fufu Kyoto\'s north front along the stone path (Tabelog) — a January 2026 guest was sent round to the hotel entrance instead. No lunch parking (Tabelog). 46 seats incl. a counter facing the garden and private rooms; English menu; children welcome with kids\' menu; wheelchair accessible; smoking area; cards and QR (Tabelog). By Nanzen-ji; 7 min from Keage Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nanzen-ji, by the Lake Biwa Canal — 7 min from Keage Stn',
    cuisine: 'Kyoto vegetables and charcoal cooking at the lunch restaurant of the ryokan Fufu Kyoto, over a Japanese garden (Tabelog; 2026 reviews) · gozen sets: "Fukushige" of nine small dishes with tempura, rice, Ihoto soup and dessert; tempura gozen ¥3,800 (September 2026); charcoal-grilled gozen ¥5,800 (March 2026); lunch about ¥4,800 (July 2026) · tempura of shrimp, white fish and eight vegetables with salt and lemon; sea bream and tuna sashimi; white-miso soup; seasonal smoothies (2026 reviews)',
    website: SITE, gmaps: gm('京野菜と炭火料理 庵都 ふふ京都'), menu_url: SITE,
    notes: "[Ryokan lunch · Nanzen-ji] The garden restaurant of the luxury ryokan Fufu Kyoto, open to non-guests at lunch: gozen trays of Kyoto vegetables, tempura and charcoal-grilled skewers (about ¥3,800–5,800) in quiet, screened seats over the garden. Use the restaurant's own side entrance; book ahead. Open daily for lunch.",
    chef_bio: { chef_name: null, roles: ['Restaurant of the ryokan Fufu Kyoto (no person named)'], origin: null,
      background: 'Opened 20 April 2023 (Tabelog), as the restaurant of Fufu Kyoto, a small luxury ryokan by Nanzen-ji with a garden fed by the Lake Biwa Canal (2026 reviews). A January 2026 guest describes Ihoto as the ryokan\'s main dining room, also serving its breakfast. Lunch is open to non-guests (Tabelog).',
      philosophy: null, specialty: 'Fukushige gozen; tempura.',
      anecdotes: [
        { text: 'A January 2026 lunch guest found the service on the gozen "rather careless" for a hotel of this calibre.', source: R + 'B521487497/' },
        { text: 'The waiting area is laid out so that guests do not cross paths — July 2026, when allergies were also handled well.', source: R + 'B532036975/' },
        { text: 'After Nanzen-ji, a March 2026 visitor had the charcoal gozen of chicken and fish skewers while gazing at the garden.', source: R + 'B535083257/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 京野菜と炭火料理 庵都、日本料理、左京区南禅寺草川町41、蹴上駅から徒歩約7分、毎日11:30〜14:30 (L.O. 13:30)、ふふ 京都の北側の正面に向かって左の石畳から専用の入口、ランチ用の駐車場なし、46席、個室、英語メニュー、子供可、ホテルのレストラン、2023年4月20日オープン。口コミ (2026年1〜10月、英語): Fukushige 膳 (小鉢9品、天ぷら、ご飯、庵都の汁、甘味)、天ぷら御膳3,800円、炭火焼き御膳5,800円、日本庭園を望むカウンター、白味噌の味噌汁、アレルギー対応、朝食も庵都で。',
      confidence: 'medium', sources: [TB, R + 'B521487497/', R + 'B521807118/', R + 'B523609608/', R + 'B528528378/', R + 'B529606777/', R + 'B532036975/', R + 'B535083257/', R + 'B535472228/', R + 'B535824075/', R + 'B538720002/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); book ahead; use the restaurant\'s own entrance.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['A July 2026 reviewer says allergy concerns were catered for perfectly.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区南禅寺草川町41',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026. The ryokan\'s lunch page returned HTTP 503 on 2026-11-05.' },
    pin_source: `Tabelog ${TB} (35.011586, 135.786165); cross-checked: GSI 京都府京都市左京区南禅寺草川町41番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535472228/', R + 'B535083257/'],
    price_note: 'No menu read; prices from March and September 2026 reviews.', last_checked: TODAY, items: [
      it('天ぷら御膳', '', 'Tempura gozen', '¥3,800', 'Lunch', 'no', 'no', 'September 2026 review.', 'tempura_gozen'),
      it('', '', 'Charcoal-grilled gozen', '¥5,800', 'Lunch', 'ask', 'no', 'March 2026 review.', 'sumibi_gozen'),
    ] }, {
    cuisine: '旅館ふふ 京都の昼のレストランで、日本庭園を眺めながら京野菜と炭火の料理 (食べログ、2026年の口コミ)・御膳: 小鉢9品に天ぷら、ご飯、庵都の汁、甘味のFukushige 膳、天ぷら御膳3,800円 (2026年9月)、炭火焼きの御膳5,800円 (2026年3月)、昼は4,800円ほど (2026年7月)・海老と白身魚と野菜8種の天ぷらを塩とレモンで、鯛と鮪の造り、白味噌の味噌汁、季節のスムージー (2026年の口コミ)',
    neighborhood: '琵琶湖疏水のそばの南禅寺。蹴上駅から徒歩7分',
    gf_detail: '予約時に要確認。天ぷら、炭火の串、味噌汁、小鉢の多い御膳。2026年7月の口コミではアレルギーにしっかり対応。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。刺身、鶏や魚の串、豚の入る庵都の汁 (2026年の口コミ)。',
    notes: '[旅館の昼ごはん・南禅寺] 高級旅館ふふ 京都の庭のレストランで、昼は宿泊客以外も利用できる。京野菜、天ぷら、炭火の串の御膳 (3,800〜5,800円ほど) を、庭を望む仕切られた静かな席で。入口は店専用の脇の入口から。予約がおすすめ。昼のみ毎日営業。',
  });
}

// ================================================================ コムシコムサ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001089/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://comme-ci-comme-ca.net';
  const D = ['17:30', '21:30'], L = ['12:00', '15:00'];
  put({
    id: 'kyoto_comme_ci_comme_ca', name: 'コムシコムサ (comme ci comme ca)', category: 'OMNI',
    lat: 35.013859, lng: 135.785742, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. A French omakase with bread, a venison pie and a curry or cheese finale; no gluten information (2023–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: foie gras, fish, eel, venison and black wagyu (2023–26 reviews).',
    hours_raw: 'Lunch Thu–Sun from 12:00 (last entry), closing 15:00; dinner Wed–Sun 17:30–21:30, last entry 18:30; closed Monday and Tuesday (Tabelog). Reservation only, from about two months ahead (Tabelog). 6 seats, up to 4 per group; children 12 and over; no very casual clothes (beach sandals, geta, shorts); no flash photography; non-smoking; cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). A house in an alley in Okazaki; by the Okazaki Park and Zoo bus stop (buses 5, 32, 100) (Tabelog; April 2024).',
    hours: { 2: day(D), 3: day(L, D), 4: day(L, D), 5: day(L, D), 6: day(L, D) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki near the zoo — Okazaki Park and Zoo bus stop',
    cuisine: 'A ten-course French omakase with Japanese touches and a garden view: dashi jellies, sea urchin, eel, a paella-like rice, scale-crisped fish with Thai seasoning, a small foie gras burger, venison pie, black wagyu roast; a finale of curry, pho or a cheese platter; petits fours, bread and coffee (2023–26 reviews) · wine pairings, including lighter pairings on request (2024–25 reviews)',
    website: SITE, gmaps: gm('コムシコムサ 京都 岡崎'), menu_url: null,
    notes: "[French · a house in Okazaki] A six-seat French restaurant in a hidden house near the Okazaki zoo, where the hostess's warm welcome is as famous as the cooking — ten courses with Japanese touches, ending in a choice of curry or cheese. About ¥15,000–20,000; wine pairings. Reservation only, two months ahead; 12 and over. Closed Monday–Tuesday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), with a hostess ("Madam") who runs the room (2024–26 reviews)'], origin: null,
      background: 'Opened 27 May 2015 (Tabelog). Reviews from 2023 to 2026 describe a madam who greets and serves, and an owner remembered as "warm and wonderful" (June 2025).',
      philosophy: null, specialty: 'French omakase with a curry or cheese finale.',
      anecdotes: [
        { text: 'A six-time regular in June 2023 sensed a return to Japanese influences — dashi jellies and Dentaku anago — as foie gras grew expensive.', source: R + 'B136068305/' },
        { text: 'For a February 2025 birthday, the madam took many photos with the birthday plate.', source: R + 'B502093238/' },
        { text: 'A July 2025 couple had stayed away two years after price rises but found it worth it for a birthday.', source: R + 'B509865361/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): コムシコムサ、フレンチ、左京区岡崎法勝寺町124-4、市バス「岡崎公園 動物園前」すぐ、昼 木〜日 12:00 (最終入店)〜15:00、夜 水〜日 17:30〜18:30 (最終入店)〜21:30、月火休み、完全予約制 (約2か月前から)、6席 (1組4名まで)、12歳以上、ラフすぎる服装は不可、フラッシュ撮影不可、2015年5月27日オープン。口コミ (2023年6月〜2026年5月、英語・日本語): マダムの温かいもてなし、10品のコース、雲丹、鰻、黒毛和牛、鹿のパイ、締めはカレーかチーズ、ワインのペアリング、一皿の量が多い。',
      confidence: 'medium', sources: [TB, R + 'B136068305/', R + 'B467542545/', R + 'B482456262/', R + 'B484041359/', R + 'B495666403/', R + 'B502093238/', R + 'B504653225/', R + 'B509865361/', R + 'B513904421/', R + 'B528421283/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book about two months ahead; small groups of up to four.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎法勝寺町124-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.013859, 135.785742); cross-checked: GSI 京都府京都市左京区岡崎法勝寺町124番地 (lot) 92m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu or course prices read; reviewers report ¥15,000–20,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (about 10 dishes)', '', 'Courses', 'ask', 'no', '', 'omakase'),
    ] }, {
    cuisine: '庭を望む、和のひねりのある10品のフレンチのおまかせ: 出汁のジュレ、雲丹、鰻、パエリア風のご飯、鱗を立ててタイ風に味付けした魚、小さなフォアグラのバーガー、鹿のパイ、黒毛和牛のロースト。締めにカレー、フォー、チーズの盛り合わせから。小菓子、パン、コーヒー (2023〜26年の口コミ)・ワインのペアリング。軽めのペアリングも頼める (2024〜25年の口コミ)',
    neighborhood: '動物園近くの岡崎。岡崎公園 動物園前バス停から',
    gf_detail: '予約時に要確認。パン、鹿のパイ、締めのカレーかチーズのあるフレンチのおまかせ。グルテンの情報はない (2023〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。フォアグラ、魚、鰻、鹿、黒毛和牛 (2023〜26年の口コミ)。',
    notes: '[フレンチ・岡崎の一軒家] 岡崎の動物園近くの隠れた一軒家にある6席のフレンチで、マダムの温かいもてなしが料理と同じくらい有名。和のひねりのある10品で、締めはカレーかチーズを選ぶ。1万5千〜2万円ほど、ワインのペアリングも。完全予約制で2か月前から、12歳以上。月・火曜休み。',
  });
}

save();
