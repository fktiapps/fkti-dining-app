// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 62.
//   + 祇園おばんざい ぎんや Gion Obanzai Gin'ya (obanzai counter by the Kamo in Gion; reservation only)
//   + 京料理 旬味旬彩 太一 Kyoryori Shunmi Shunsai Taichi (kaiseki in a machiya with private rooms, near Karasuma)
//   + うなぎと串料理 うなたま Unagi to Kushi Ryori Unatama (towering eel-and-omelette bowls, opened June 2026)
//   + 御菓子司 かぎ甚 Okashi Tsukasa Kagijin (wagashi shop by Ebisu Shrine, founded 1921)
//   - 大衆酒場 むに 京都河原町店, 炭焼肉バル baRmeat: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26040620, 26039408 (skipped),
//   26023940, 26045090, 26035682 (skipped), 26013998.
//   queue-status.jsonl grepped for each brand (ぎんや, むに, 太一, うなたま, baRmeat, かぎ甚): no earlier rulings.
//   None of the four drafted is in data/kyoto.json by name or address (弁財天町14 エクセタコート1F, 塩屋町43, 山崎町258-23
//   原正ビル1F, 大和大路通四条小松140).
//   Same-name count (same brand or operator only): one shop each in our crawl and in Tabelog's name search. 太一: invoice
//   holder is an individual, 横井 勇一郎 (NTA register). Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: ぎんや お通し代あり; 太一 席料10％; none listed for the
//   other two.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-62');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26039408', '大衆酒場 むに 京都河原町店: chain — Tabelog’s name search lists Taishu Sakaba Muni shops at Sakae-Sumiyoshi, Kobe Sannomiya (two), Machida, Kichijoji, Kyoto Sanjo and Kyoto Kawaramachi');
skip('26035682', '炭焼肉バル baRmeat: too thin to verify — one review since 2025 (July 2026)');

// ================================================================ 祇園おばんざい ぎんや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040620/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://foodplace.jp/ginya/';
  const H = day(['17:30', '22:30']);
  put({
    id: 'kyoto_gion_obanzai_ginya', name: '祇園おばんざい ぎんや (Gion Obanzai Gin\'ya)', category: 'OMNI',
    lat: 35.005815, lng: 135.772732, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai, sashimi, oden, saba sushi, tempura and sukiyaki, seasoned with soy and dashi; no gluten information (official site; 2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based obanzai with fish and meat dishes (official site; reviews).',
    hours_raw: 'Monday–Saturday 17:30–22:30 (L.O. 22:00); closed Sundays and holidays (Tabelog). The shop’s own site gives 18:00–23:00 (L.O. 22:30). Reservations essential — walk-ins not accepted (March 2025). Otoshi charged (Tabelog, original お通し代あり). Cards, IC cards and e-money; no QR (Tabelog). 14 seats: 8 at the counter and a tatami room for 4–6 (Tabelog). In Gion Shirakawa facing the Kamo River, 2 min from exit 9 of Gion-Shijo Station (Tabelog; March 2025). Opened 18 January 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion Shirakawa by the Kamo — 2 min from Gion-Shijo exit 9',
    cuisine: 'An obanzai counter run by a proprietress, with a head chef in the kitchen (March 2025) · obanzai such as spicy konnyaku, simmered okara, braised shellfish, potato salad, kinpira, nanohana with mustard, simmered shrimp-yam (2025) · sashimi platters including sardine rolls; yokowa tataki; jidori and beef sashimi (2025) · saba sushi, sardines simmered with ume, assorted oden (official site) · dashimaki, shirauo tempura, fried oysters, venison steak, A5 Wagyu sukiyaki with udon (2025) · sake mostly from Yamagata, chosen for dryness (February 2025)',
    website: SITE, gmaps: gm('祇園おばんざい ぎんや'), menu_url: SITE,
    notes: '[Obanzai · Gion by the Kamo, a proprietress’s counter] A cosy obanzai counter facing the Kamo River in Gion, where the proprietress chats in Kyoto dialect and the head chef sends out platters of obanzai, sardine-roll sashimi, oden, saba sushi and sukiyaki, with dry Yamagata sake. Reservations essential; closed Sundays and holidays.',
    chef_bio: { chef_name: null, roles: ['Proprietress (okami, unnamed)', 'Head chef (unnamed)'], origin: null,
      background: 'The official site refers to the okami (proprietress). Reviewers describe a friendly owner with charming Kyoto dialect and a head chef in charge of the food (March 2025); one calls the owner beautiful and a joy to talk to (March 2025). The owner explained that the sake is mostly from Yamagata because guests prefer dry sake (February 2025).',
      philosophy: null, specialty: 'Obanzai; sardine rolls.',
      anecdotes: [
        { text: 'A March 2025 guest on a second visit was remembered by name.', source: R + 'B500098562/' },
        { text: 'A January 2025 diner ordered every obanzai on the board and stayed from 18:00 to about 21:00.', source: R + 'B500035300/' },
      ],
      japanese_sources_summary: '公式サイト: 祇園おばんざい ぎんや、18:00〜23:00 (L.O.22:30)、日曜・祝日休み、鯖寿司、いわしの梅煮、おでんの盛り合わせ、カウンターと個室、女将。食べログ: 日本料理、東山区弁財天町14 エクセタコート1F、祇園四条駅9番出口から徒歩2分、月〜土 17:30〜22:30 (L.O.22:00)、日祝休み、お通し代あり、カード・電子マネー可、14席 (カウンター8、座敷4〜6)、2024年1月18日オープン。口コミ (2025年、英語): 予約必須で飛び込み不可、ピリ辛こんにゃく、おから、貝の煮物、ポテサラ、きんぴら、菜の花の辛子和え、海老芋の炊いたん、いわしの巻物の刺身、よこわのたたき、地鶏や牛の刺身、だし巻き、白魚の天ぷら、カキフライ、鹿のステーキ、A5和牛のすき焼きとうどん、山形の辛口の日本酒、京ことばの女将、料理長。',
      confidence: 'medium', sources: [SITE, TB, R + 'B489944954/', R + 'B500035300/', R + 'B500098562/', R + 'B502076147/', R + 'B503779862/', R + 'B504113600/', R + 'B511436860/'] },
    cultural_comfort: { level: 'japanese', note: 'Reservation only; counter chat in Kyoto dialect; otoshi charged.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区弁財天町14 エクセタコート 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews dated through August 2025.' },
    pin_source: `Tabelog ${TB} (35.005815, 135.772732); cross-checked: GSI 京都府京都市東山区弁財天町14番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B503779862/'],
    price_note: 'No prices read; reviewers spend ¥5,000–15,000.', last_checked: TODAY, items: [
      it('鯖寿司', 'saba-zushi', 'Saba sushi', '', 'Signature', 'ask', 'no', 'Official site.', 'saba_zushi'),
      it('いわし梅煮', 'iwashi ume-ni', 'Sardines simmered with ume', '', 'Signature', 'ask', 'no', 'Official site.', 'iwashi'),
      it('おでん盛り合わせ', 'oden moriawase', 'Assorted oden', '', 'Signature', 'ask', 'no', 'Official site.', 'oden'),
      it('', '', 'Obanzai of the day', '', 'Obanzai', 'ask', 'ask', '2025 reviews.', 'obanzai'),
    ] }, {
    cuisine: '女将が切り盛りし、料理長が腕をふるうおばんざいのカウンター (2025年3月)・ピリ辛こんにゃく、おから、貝の煮物、ポテトサラダ、きんぴら、菜の花の辛子和え、海老芋の炊いたんなどのおばんざい (2025年)・いわしの巻物を含む刺身の盛り合わせ、よこわのたたき、地鶏や牛の刺身 (2025年)・鯖寿司、いわしの梅煮、おでんの盛り合わせ (公式サイト)・だし巻き、白魚の天ぷら、カキフライ、鹿のステーキ、A5和牛のすき焼きと締めのうどん (2025年)・辛口が好まれるので日本酒は山形のものが中心 (2025年2月)',
    neighborhood: '鴨川に面した祇園白川。祇園四条駅9番出口から徒歩2分',
    gf_detail: '要確認。醤油と出汁のおばんざい、刺身、おでん、鯖寿司、天ぷら、すき焼き。グルテンの情報はない (公式サイト、2025年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁のおばんざいと魚や肉の料理 (公式サイト、口コミ)。',
    notes: '[おばんざい・鴨川に面した祇園、女将のカウンター] 祇園の鴨川に面した居心地のよいおばんざいのカウンター。京ことばの女将と話しながら、料理長のおばんざい、いわしの巻物の刺身、おでん、鯖寿司、すき焼きを、辛口の山形の酒とともに。予約必須、日曜・祝日休み。',
  });
}

// ================================================================ 京料理 旬味旬彩 太一
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26023940/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_shunmi_shunsai_taichi', name: '京料理 旬味旬彩 太一 (Kyoryori Shunmi Shunsai Taichi)', category: 'OMNI',
    lat: 35.002602, lng: 135.764196, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kaiseki courses — sashimi, soups, grilled fish, fugu and game dishes, tempura; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, fugu and game courses built on dashi (Tabelog; reviews).',
    hours_raw: 'Lunch 11:30–14:30 (L.O. food 12:30); dinner 17:00–22:00 (L.O. food 20:00, drinks 21:30); open daily; Japanese-style afternoon tea from 13:00 (Tabelog). Reservations accepted; requests for celebrations taken (Tabelog; 2025–2026). Service charge 10% (Tabelog, original 席料10％). Cards and Edy (Tabelog). 40 seats: 5 at the counter, tables on the ground floor overlooking a garden, and private rooms upstairs (Tabelog; May 2025). On Ayanokoji east of Yanaginobamba, 6–7 min from Shijo or Karasuma stations (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ayanokoji-Yanaginobamba, south of Shijo — near Shijo-Karasuma',
    cuisine: 'Kaiseki in a Kyoto machiya with private rooms and a courtyard garden; Kyoto vegetables and game from Rakuhoku (Tabelog; August 2026) · seasonal courses themed on events — the Gion Matsuri (July 2025), the Daimonji fire festival (August 2026); menus personalised for celebrations (June 2026) · fugu course with grilled fugu, tecchiri hot pot and porridge, free-flow drinks available (November 2025) · Shogoin daikon, fugu monaka, boar (January 2026) · grilled ayu (June 2026) · à la carte on the ground floor; Japanese afternoon tea from 13:00 (Tabelog)',
    website: null, gmaps: gm('京料理 旬味旬彩 太一'), menu_url: TB + 'dtlmenu/',
    notes: '[Kaiseki · Ayanokoji near Shijo-Karasuma, private rooms] A machiya kaiseki restaurant with private rooms upstairs and a courtyard garden, serving seasonal courses themed on Kyoto’s festivals — plus fugu, Rakuhoku game and Kyoto vegetables — and personalising menus for birthdays and business dinners. Lunch, dinner and afternoon tea; 10% service charge.',
    chef_bio: { chef_name: '横井 勇一郎', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'Tabelog’s invoice number T4810587676802 is registered to the individual 横井 勇一郎 (NTA register). A May 2025 diner was pleased that the head chef came to explain the dishes; reviewers describe courses themed on the season and menus printed with guests’ names for celebrations (2025–2026).',
      philosophy: null, specialty: 'Seasonal kaiseki; fugu.',
      anecdotes: [
        { text: 'A June 2026 family birthday was given a menu bearing the family’s names and the occasion.', source: R + 'B530497716/' },
        { text: 'An October 2026 visitor staying in Namba for the Osaka Expo came to Kyoto for the kaiseki and plans to return on every Kansai trip.', source: R + 'B507783921/' },
      ],
      japanese_sources_summary: '食べログ: 京料理 旬味旬彩 太一、日本料理・ふぐ・天ぷら、下京区綾小路柳馬場東入ル塩屋町43、地下鉄四条駅から徒歩6分、昼11:30〜14:30、夜17:00〜22:00、無休、13時からの和のアフタヌーンティー、席料10%、カード可、40席 (カウンター5)、個室あり、京町家、京野菜と洛北のジビエ、ふぐのコース、適格請求書 T4810587676802 (横井 勇一郎)。口コミ (2025〜2026年、英語): 祇園祭や五山送り火に見立てた献立、名前入りのお祝いの献立、料理長が料理を説明、ふぐのコース (焼きふぐ、てっちり、雑炊、飲み放題)、聖護院大根、ふぐの最中、猪、鮎の塩焼き、中庭。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=4810587676802', R + 'B506842311/', R + 'B507783921/', R + 'B511188869/', R + 'B517173998/', R + 'B518923729/', R + 'B521696185/', R + 'B530497716/', R + 'B531970265/', R + 'B538687157/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; 10% service charge; celebrations catered for.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路柳馬場東入ル塩屋町43',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002602, 135.764196); cross-checked: GSI 京都府京都市下京区塩屋町43番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No course prices read; reviewers spend ¥8,000–20,000; 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Seasonal kaiseki course', '', 'Courses', 'ask', 'no', '2025–2026 reviews.', 'kaiseki'),
      it('', '', 'Fugu course', '', 'Courses', 'ask', 'no', 'November 2025.', 'fugu'),
      it('', '', 'Service charge', '10%', 'Charges', '', '', 'Tabelog.', 'service'),
    ] }, {
    cuisine: '個室と中庭のある京町家の会席。京野菜と洛北のジビエ (食べログ、2026年8月)・祇園祭 (2025年7月) や五山送り火 (2026年8月) に見立てた季節の献立。お祝いには名前入りの献立 (2026年6月)・焼きふぐ、てっちり、雑炊のふぐのコース、飲み放題も (2025年11月)・聖護院大根、ふぐの最中、猪 (2026年1月)・鮎の塩焼き (2026年6月)・1階は庭を眺めてアラカルト、13時から和のアフタヌーンティー (食べログ)',
    neighborhood: '四条の南の綾小路柳馬場。四条烏丸の近く',
    gf_detail: '要確認。刺身、椀物、焼き魚、ふぐ、ジビエ、天ぷらの会席。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁を基本にした魚、ふぐ、ジビエのコース (食べログ、口コミ)。',
    notes: '[会席・四条烏丸近くの綾小路、個室] 2階に個室、中庭のある京町家の会席料理店。京都の祭りに見立てた季節の献立、ふぐ、洛北のジビエ、京野菜を出し、誕生日や接待には名前入りの献立も。昼、夜、アフタヌーンティー。席料10%。',
  });
}

// ================================================================ うなぎと串料理 うなたま
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26045090/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_unagi_unatama_kiyamachi', name: 'うなぎと串料理 うなたま (Unagi to Kushi Ryori Unatama)', category: 'OMNI',
    lat: 35.007408, lng: 135.769948, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled eel with tare over rice and dashimaki, eel skewers, fried eel and kushi-age; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel and skewer restaurant (Tabelog; reviews).',
    hours_raw: '17:00–24:00 (L.O. 23:00) daily (Tabelog). Reservations accepted (Tabelog). Cards, e-money and QR payments (Tabelog). 40 seats — counter, tables and a tatami room at the back; private rooms for 4 and 6 (Tabelog; June 2026). Leftover rice from the big bowl can be taken home as onigiri (June 2026). On the ground floor of the 原正ビル near Kiyamachi, 5 min from Hankyu Kawaramachi (Tabelog). Opened 1 June 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi south of Sanjo — 5 min from Hankyu Kawaramachi',
    cuisine: 'An eel-and-skewer izakaya opened June 2026 (Tabelog) · towering unatama-don: grilled eel on a thick dashimaki over 600 g of tare-soaked rice, ¥3,280 (June–August 2026) · eel skewers ¥380 each; eel liver skewers; a three-skewer eel platter (June–July 2026) · dashimaki topped with sweet-spicy beef ¥480; fried eel with eggplant ¥880 (June 2026) · shirayaki and kabayaki eel; unaju (July–August 2026) · kushi-age (Tabelog)',
    website: null, gmaps: gm('うなぎと串料理 うなたま'), menu_url: TB + 'dtlmenu/',
    notes: '[Eel izakaya · Kiyamachi, the towering unatama-don] A new eel-and-skewer izakaya near Kiyamachi, built around a photogenic bowl of grilled eel stacked on a thick dashimaki over 600 g of rice (¥3,280) — leftovers go home as onigiri — with eel skewers, liver and kushi-age. Open every evening until midnight.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s shop text pitches the towering unatama-don as the signature. Reviewers describe friendly staff (July 2026); one August 2026 diner wondered whether the eel was charcoal-grilled, given its soft skin.',
      philosophy: null, specialty: 'Towering unatama-don.',
      anecdotes: [
        { text: 'A June 2026 visitor who could not finish the 600 g bowl took the rest home as onigiri.', source: R + 'B530964185/' },
        { text: 'A July 2026 diner, having ordered shirayaki, kabayaki, liver and dashimaki, admitted to perhaps over-ordering.', source: R + 'B533666935/' },
      ],
      japanese_sources_summary: '食べログ: うなぎと串料理 うなたま、うなぎ・串揚げ・居酒屋、中京区山崎町258-23 原正ビル1F、河原町駅から徒歩5分、毎日17:00〜24:00 (L.O.23:00)、予約可、カード・電子マネー・QR決済可、40席、4名・6名の個室、2026年6月1日オープン、名物の盛り盛りうなたま丼。口コミ (2026年、英語): うなたま丼3,280円 (だし巻きに鰻、ご飯600g)、残りはおにぎりで持ち帰り、うなぎ串380円、肝串、うなぎ串3種盛り、甘辛牛のせだし巻き480円、うなぎと茄子の揚げ物880円、白焼きと蒲焼き、うな重、カウンター・テーブル・奥の座敷。',
      confidence: 'medium', sources: [TB, R + 'B530465401/', R + 'B530964185/', R + 'B531936984/', R + 'B532655101/', R + 'B533101082/', R + 'B533193114/', R + 'B533666935/', R + 'B533983047/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual izakaya; leftovers can be taken home.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区山崎町258-23 原正ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened June 2026; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.007408, 135.769948); cross-checked: GSI 京都府京都市中京区山崎町258番地 (lot) 97m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530465401/'],
    price_note: 'Prices from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Towering unatama-don (eel, dashimaki, 600 g rice)', '¥3,280', 'Signature', 'ask', 'no', 'June 2026.', 'unatama_don'),
      it('', '', 'Eel skewer', '¥380', 'Skewers', 'ask', 'no', 'June 2026; each.', 'unagi_kushi'),
      it('', '', 'Dashimaki with sweet-spicy beef', '¥480', 'Small plates', 'ask', 'no', 'June 2026.', 'dashimaki'),
      it('', '', 'Fried eel and eggplant', '¥880', 'Small plates', 'no', 'no', 'June 2026.', 'fried_eel'),
    ] }, {
    cuisine: '2026年6月開店のうなぎと串の居酒屋 (食べログ)・だし巻きに鰻をのせ、たれのしみたご飯600gにそびえるうなたま丼3,280円 (2026年6〜8月)・うなぎ串1本380円、肝串、うなぎ串3種盛り (2026年6〜7月)・甘辛牛のせだし巻き480円、うなぎと茄子の揚げ物880円 (2026年6月)・白焼きと蒲焼き、うな重 (2026年7〜8月)・串揚げ (食べログ)',
    neighborhood: '三条の南の木屋町。阪急河原町から徒歩5分',
    gf_detail: '要確認。たれの鰻とご飯とだし巻き、うなぎ串、うなぎの揚げ物、串揚げ。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。うなぎと串の店 (食べログ、口コミ)。',
    notes: '[うなぎの居酒屋・木屋町、そびえるうなたま丼] 木屋町近くに新しくできたうなぎと串の居酒屋。名物は厚いだし巻きに鰻を重ね600gのご飯にのせた写真映えする丼 (3,280円) で、残りはおにぎりにして持ち帰れる。うなぎ串、肝、串揚げも。毎晩24時まで。',
  });
}

// ================================================================ 御菓子司 かぎ甚
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26013998/'; const R = TB + 'dtlrvwlst/';
  const A = day(['09:00', '17:00']);
  put({
    id: 'kyoto_okashi_kagijin', name: '御菓子司 かぎ甚 (Okashi Tsukasa Kagijin)', category: 'OMNI',
    lat: 35.000707, lng: 135.772578, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagashi — Ebisu-yaki of chofu dough (egg and flour) with red-bean paste, ayu of mostly rice flour with mochi, sakura mochi, mizu-yokan; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many wagashi are bean, rice and sugar, but the Ebisu-yaki dough contains egg and nothing is labelled vegan (2025–2026 reviews).',
    hours_raw: 'Monday, Thursday–Sunday 9:00–17:00; Tuesday 9:00–16:00; closed Wednesday; hours may change (Tabelog). Takeaway shop. No cards; e-money and QR payments (Tabelog). During the Toka Ebisu festival in January the shop bakes Ebisu-yaki at a stall out front, and queues form (January 2025 and 2026). On Yamato-oji south of Shijo near Kyoto Ebisu Shrine (Tabelog; reviews).',
    hours: { 0: A, 1: day(['09:00', '16:00']), 3: A, 4: A, 5: A, 6: A }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yamato-oji south of Shijo — by Kyoto Ebisu Shrine',
    cuisine: 'A wagashi shop founded in 1921, a reviewer notes (January 2025) · Ebisu-yaki, chofu-style cakes of red-bean paste stamped with Ebisu’s face, sold at New Year’s Toka Ebisu (¥250 each, January 2026) and around the Ebisu festival in October (2025–2026) · ayu, a pale, chewy rice-flour sweet with mochi, in early summer (June 2025) · sakura mochi in white and sakura versions for Hinamatsuri (March 2026) · white-miso mizu-yokan with sansho, ¥1,080 (May 2026) · minazuki in June (July 2026)',
    website: null, gmaps: gm('御菓子司 かぎ甚'), menu_url: null,
    notes: '[Wagashi · Yamato-oji by Ebisu Shrine, since 1921] An old neighbourhood wagashi shop beside Kyoto Ebisu Shrine, famous for the Ebisu-yaki it bakes out front during the New Year Toka Ebisu (¥250), with seasonal sweets through the year — chewy rice-flour ayu, sakura mochi, white-miso mizu-yokan. Takeaway; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'A January 2025 reviewer calls it a wagashi shop founded in 1921 that now styles its name “Kagi Jin”, with live demonstrations of Ebisu-yaki at the festival stall.',
      philosophy: null, specialty: 'Ebisu-yaki.',
      anecdotes: [
        { text: 'A January 2026 worshipper lined up before opening after returning the old lucky bamboo at Toka Ebisu.', source: R + 'B498944542/' },
        { text: 'An October 2025 passer-by caught the Ebisu-yaki on sale out of season for the Ebisu festival.', source: R + 'B411255269/' },
      ],
      japanese_sources_summary: '食べログ: 御菓子司 かぎ甚、和菓子、東山区大和大路通四条小松140、祇園四条駅から318m、月・木〜日 9:00〜17:00、火 9:00〜16:00、水曜定休、カード不可、電子マネー・QR決済可。口コミ (2025〜2026年、英語): 1921年創業、十日ゑびすのEbisu-yaki (1個250円、店先で実演販売、行列)、10月の Ebisu festivalにも、初夏の鮎 (米粉が多くもちもち)、ひな祭りの桜餅 (白と桜)、白味噌の水ようかん (山椒付き) 1,080円、水無月、京都ゑびす神社のそば。',
      confidence: 'medium', sources: [TB, R + 'B411255269/', R + 'B498944542/', R + 'B498994875/', R + 'B506060265/', R + 'B515487750/', R + 'B520450147/', R + 'B520630543/', R + 'B521355196/', R + 'B524035596/', R + 'B531535706/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway counter; no cards; long queues during Toka Ebisu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通四条小松140',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.000707, 135.772578); cross-checked: GSI 京都府京都市東山区小松町140番地 (lot) 97m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520630543/', R + 'B515487750/'],
    price_note: 'Prices from January and May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ebisu-yaki (red-bean cake, festival only)', '¥250', 'Wagashi', 'no', 'no', 'January 2026; contains egg and flour.', 'ebisu_yaki'),
      it('', '', 'White-miso mizu-yokan with sansho', '¥1,080', 'Seasonal', 'ask', 'ask', 'May 2026.', 'mizu_yokan'),
      it('', '', 'Ayu (rice-flour sweet with mochi)', '', 'Seasonal', 'ask', 'ask', 'June 2025.', 'ayu'),
    ] }, {
    cuisine: '1921年創業の和菓子屋 (2025年1月の口コミ)・ゑびすの顔を押した、餡入りの調布風のEbisu-yaki。正月の十日ゑびす (1個250円、2026年1月) と10月の Ebisu festival (2025〜2026年) に・初夏の鮎は米粉の多い白くもちもちの生地に求肥 (2025年6月)・ひな祭りの桜餅、白と桜 (2026年3月)・山椒を添えた白味噌の水ようかん1,080円 (2026年5月)・6月の水無月 (2026年7月)',
    neighborhood: '四条の南の大和大路。京都ゑびす神社のそば',
    gf_detail: '要確認。卵と小麦の生地に餡のEbisu-yaki、米粉ともちの鮎、桜餅、水ようかんなどの和菓子。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。豆、米、砂糖の和菓子が多いが、Ebisu-yakiの生地には卵が入り、ヴィーガンの表示はない (2025〜2026年の口コミ)。',
    notes: '[和菓子・ゑびす神社そばの大和大路、1921年創業] 京都ゑびす神社のそばの古い町の和菓子屋。正月の十日ゑびすに店先で焼くEbisu-yaki (250円) が名物で、もちもちの鮎、桜餅、白味噌の水ようかんなど季節の菓子も。持ち帰り、水曜定休。',
  });
}

save();
