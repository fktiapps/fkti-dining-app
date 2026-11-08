// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 62.
//   Queue run from the osw2 worktree, 2026-11-07. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail.
//   - 佐曽羅 EAST 2F — thin (no hours or menu on Tabelog; older reviews mix in the 1F bar)
//   - しゃぶしゃぶ温野菜 京都河原町蛸薬師店 — chain
//   + 東山望 TAMANOHIKARI Tozanbo Tamanohikari (Kyoto kaiseki and hot pots in a Pontocho townhouse on the Kamo yuka; run by C&D, a local group)
//   - 京都かに源 四条河原町店 — franchise of the Osaka かに源 group
//   + りょうりや季 Ryoriya Toki (small kaiseki-kappo on the Takase River at Bukkoji; sister of りょうりや 御旅屋; since 2020)
//   + あごつゆしゃぶしゃぶ 山福 はなれ 先斗町店 Yamafuku Hanare (flying-fish-broth shabu-shabu; second shop of 山福; since September 2026)
//   - 代官山 Candy apple 京都河原町店 — chain
//   + 京都 与兵衛 Kyoto Yohei (Edomae sushi courses on Kiyamachi by the Kamo; since May 2026)
//   None of the four is in data/kyoto.json: grep by id, name and address. Brand names grepped in queue-status.jsonl: no earlier rulings
//   (the C&D sister 眺河 is in data; its 1923 bars were skipped as a same-name chain).
//   Service charges: 東山望 5%; 与兵衛 10% (Tabelog).
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; 東山望 offset ~5 m off 烹祥庵 (5 m), 山福 はなれ ~2 m off はっすんば (8 m); each now 9 m+ from every pin on main.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-62');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26022405', '佐曽羅 EAST 2F: thin — Tabelog gives no hours or menu for the 2F teppanyaki; three 2026 reviews describe a teppan course but no prices, and older reviews mix in the 1F café-bar (26022406). Not drafted');
skip('26027709', 'しゃぶしゃぶ温野菜 京都河原町蛸薬師店: a national chain — our crawls hold 温野菜 at Sanjo Kamogawa, Sennichimae, Ueno, Roppongi and more');
skip('26045067', '京都かに源 四条河原町店: a franchise of the Osaka かに源 group — two May 2026 reviews call it a new franchise shop of the Osaka Kanigen group; opened May 2026');
skip('26040723', '代官山 Candy apple 京都河原町店: a chain — our crawls hold Candy apple at Kyoto Kawaramachi, Kiyomizu Ninenzaka and Osaka, besides the Daikanyama original');

// ================================================================ 東山望 TAMANOHIKARI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033811/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://c-and-d.net/tamanohikari/';
  const A = day(['12:00', '21:00']), F = day(['12:00', '14:30'], ['17:00', '21:30']), S = day(['11:30', '14:30'], ['17:00', '21:30']);
  put({
    id: 'kyoto_tozanbo_tamanohikari', name: '東山望 TAMANOHIKARI (Tozanbo Tamanohikari)', category: 'OMNI',
    lat: 35.004976, lng: 135.771169, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki, sukiyaki and shabu-shabu, yudofu and fugu pots; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki with fish, wagyu sukiyaki and shabu-shabu (Tabelog). A yudofu pot is one of the hot-pot choices — ask about dashi (Tabelog).',
    hours_raw: 'Monday–Thursday and Sunday 12:00–21:00; Friday 12:00–14:30 and 17:00–21:30; Saturday 11:30–14:30 and 17:00–21:30 (Tabelog). Reservations taken. Cards and e-money accepted; cashless only (Tabelog). 5% service charge (Tabelog). 70 seats over two floors with private rooms looking over the Kamo River; a riverside yuka terrace in season, with an indoor seat held in case of rain; wheelchair and stroller access to the riverside; non-smoking, including the terrace (Tabelog; July 2025). Insects can be a nuisance on the terrace after dark (2024 and 2026 reviews). On Pontocho north of Shijo, 2 min from Kyoto Kawaramachi or Gion-Shijo Stn (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: F, 5: S, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho, north of Shijo — on the Kamo River, 2 min from Gion-Shijo Stn',
    cuisine: 'Kyoto cuisine in a Pontocho townhouse on the Kamo River, served with Tamanohikari sake (Tabelog) · small hot-pot kaiseki with a choice of wagyu or duck sukiyaki, tiger fugu or yudofu, one drink included ¥6,600; Kyoto Hirai beef and Kobe beef tasting kaiseki ¥9,900 (Tabelog, by reservation) · lunch gozen of sashimi, yudofu, Saikyo-grilled yellowtail and jako-sansho rice (May 2024); sukiyaki gozen with sashimi (August 2026) · summer hamo shabu-shabu and ayu (2024–2026 reviews)',
    website: SITE, gmaps: gm('東山望 TAMANOHIKARI 先斗町'), menu_url: TB,
    notes: "[Kyoto cuisine · Pontocho, a townhouse on the Kamo yuka] A Pontocho townhouse with private rooms and a summer yuka terrace over the Kamo River, looking across to Higashiyama. Kyoto kaiseki, wagyu sukiyaki and seasonal hot pots — hamo in summer, fugu in winter — with a small-pot kaiseki at ¥6,600. Cashless; 5% service; wheelchair access to the riverside.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Run by 有限会社シーアンドディー (C&D) of Shimogyo (National Tax Agency invoice register T7130002023987), a Kyoto company whose site lists Pontocho and Kiyamachi restaurants such as 眺河 and bars. The shop serves Kyoto cuisine with Tamanohikari sake in a Pontocho townhouse (Tabelog).',
      philosophy: null,
      specialty: 'Kyoto kaiseki and hot pots by the Kamo River.',
      anecdotes: [
        { text: 'A May 2024 guest, rained off the yuka, was given a 2nd-floor room and watched a white heron in the rain.', source: R + 'B484402676/' },
        { text: 'A February 2025 visitor ate while watching snow fall outside the window.', source: R + 'B522130050/' },
        { text: 'A July 2025 diner on a first river-terrace dinner had the Kobe beef sukiyaki and noted the terrace is non-smoking.', source: R + 'B510643737/' },
      ],
      japanese_sources_summary: '食べログ: 東山望 TAMANOHIKARI、日本料理・しゃぶしゃぶ、京都市中京区先斗町四条上ル鍋屋町228、阪急京都河原町駅・京阪祇園四条駅から徒歩2分、月〜木・日 12:00〜21:00、金 12:00〜14:30・17:00〜21:30、土 11:30〜14:30・17:00〜21:30、予約可、カード・電子マネー可、キャッシュレスのみ、サービス料5%、70席 (1階・2階、個室)、禁煙、鴨川の床、車椅子・ベビーカーで川床へ、雨の場合は室内席も確保、玉乃光の酒、小鍋会席 (和牛すき焼き・鴨すき・とらふぐ・湯豆腐から選択、1ドリンク付き) 6,600円、京都平井牛と神戸牛の食べ比べ会席9,900円、インボイス T7130002023987 (有限会社シーアンドディー)。口コミ (2024〜2026年、英語): 町家、鴨川と東山の眺め、御膳ランチ (刺身、湯豆腐、ぶりの西京焼き、じゃこ山椒ご飯)、鱧しゃぶ、鮎、神戸牛のすき焼き、すき焼き御膳、床は禁煙、夜は虫が多い。',
      confidence: 'low', sources: [TB, SITE, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=7130002023987', R + 'B484402676/', R + 'B485118746/', R + 'B490311701/', R + 'B493092128/', R + 'B510643737/', R + 'B513450791/', R + 'B522130050/', R + 'B524800211/', R + 'B532356399/', R + 'B533504182/'] },
    cultural_comfort: { level: 'english', note: 'Cashless; private rooms; riverside terrace.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町四条上ル鍋屋町228',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.005016, 135.771163), offset ~5m to clear 烹祥庵 (5m); cross-checked: GSI 京都府京都市中京区鍋屋町228番地 (lot) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course prices from Tabelog set menus (by reservation, tax included; 5% service extra).', last_checked: TODAY, items: [
      it('', '', 'Small hot-pot kaiseki (wagyu or duck sukiyaki, tiger fugu or yudofu), one drink', '¥6,600', 'Courses', 'ask', 'no', 'Reservation only; 4 or more.', 'konabe'),
      it('', '', 'Kyoto Hirai beef and Kobe beef tasting kaiseki, one drink', '¥9,900', 'Courses', 'ask', 'no', 'Reservation only.', 'beef_kaiseki'),
      it('', '', 'Sukiyaki gozen with sashimi', '', 'Lunch', 'ask', 'no', 'August 2026.', 'sukiyaki_gozen'),
    ] }, {
    cuisine: '鴨川に面した先斗町の町家の京料理、玉乃光の酒と (食べログ)・小鍋会席、和牛すき焼き・鴨すき・とらふぐ・湯豆腐から選べて1ドリンク付き6,600円、京都平井牛と神戸牛の食べ比べ会席9,900円 (食べログ、予約制)・刺身、湯豆腐、ぶりの西京焼き、じゃこ山椒ご飯の御膳ランチ (2024年5月)、刺身付きのすき焼き御膳 (2026年8月)・夏は鱧しゃぶと鮎 (2024〜2026年の口コミ)',
    neighborhood: '先斗町、四条の北。鴨川沿い、祇園四条駅から徒歩2分',
    gf_detail: '要確認。京会席、すき焼き、しゃぶしゃぶ、湯豆腐やふぐの鍋。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚の会席、和牛のすき焼きとしゃぶしゃぶ (食べログ)。湯豆腐の鍋も選べる、出汁は要確認 (食べログ)。',
    notes: '[京料理・先斗町、鴨川の床の町家] 個室と夏の床がある先斗町の町家。鴨川越しに東山を望む。京会席、和牛のすき焼き、季節の鍋 (夏は鱧、冬はふぐ)、小鍋会席は6,600円。キャッシュレスのみ、サービス料5%、車椅子で床へ。',
  });
}

// ================================================================ りょうりや季
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26034627/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://toki-kyoto.com/';
  const H = day(['12:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_ryoriya_toki', name: 'りょうりや季 (Ryoriya Toki)', category: 'OMNI',
    lat: 35.00106508260888, lng: 135.76921703484368, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal kaiseki: sashimi, clear soups, charcoal-grilled fish and meat, tempura, ochazuke; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki of fish, eel and meat (official site; reviews).',
    hours_raw: 'Lunch 12:00–15:00 (last order 13:30, reservation only), dinner 17:00–22:00; closed Wednesday (Tabelog; official site). Reservations advised — often full (April 2026). Cash or cards; no e-money (official site). 16 seats: 8 at the counter, small tables and a semi-private room looking over the Takase River; non-smoking (official site; 2024–2026 reviews). Solo diners welcome at the counter (official site). On the corner of Kiyamachi and Bukkoji, about 5 min from Kyoto Kawaramachi Stn (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi at Bukkoji, on the Takase River — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Casual kaiseki of the season, with meat and fish grilled over charcoal in a kamado (official site) · dinner courses ¥7,500, ¥9,500 and ¥11,500 (official site); e.g. hamo clear soup with winter melon and junsai, sashimi of chutoro, wild sea bream, Biwa trout and uni (August 2026) · a la carte at dinner: sashimi platter from ¥1,500 a person, firefly squid with vinegar miso ¥1,400, charcoal-grilled Kyoto bamboo shoots ¥1,500, mountain-vegetable tempura ¥1,400 (April 2026) · salt-grilled Lake Biwa ayu, mehikari, seafood ochazuke (2025–2026)',
    website: SITE, gmaps: gm('りょうりや季 京都'), menu_url: SITE + 'dishes/index.html',
    notes: "[Kaiseki · Kiyamachi on the Takase River, small and seasonal] A 16-seat kaiseki-kappo on the corner of Kiyamachi and Bukkoji, sister of りょうりや 御旅屋, cooking fish and meat over charcoal in a kamado. Dinner courses from ¥7,500 or a la carte at the counter — sashimi, Lake Biwa ayu, mountain-vegetable tempura. Takase River views; often full, so book; closed Wednesday.",
    chef_bio: { chef_name: '原田 祐司', roles: ['Owner (店主)'], origin: null,
      background: 'The official greeting, dated the opening on 23 August 2020, is signed by owner 原田 祐司, who runs Toki as the sibling shop of りょうりや 御旅屋 on Nishikiyamachi at Takatsuji. The name means "season".',
      philosophy: 'Serve each season’s best food casually and at a fair price (official site).',
      specialty: 'Seasonal kaiseki; charcoal-grilled fish and meat.',
      anecdotes: [
        { text: 'On the fourth anniversary in August 2024, a local who walks a dog along the path outside was poured complimentary sake.', source: R + 'B490757407/' },
        { text: 'A March 2025 traveller, turned away by the full main restaurant, was sent to this sister shop.', source: R + 'B502981769/' },
        { text: 'An April 2026 guest found a "Fully Booked" sign at the door and was glad to have reserved ten days ahead.', source: R + 'B525850415/' },
      ],
      japanese_sources_summary: '公式サイト: りょうりや 季 (TOKI)、京都河原町駅から徒歩圏内の会席・割烹店、京都市下京区市之町260-1 仏光寺角、京都河原町駅から徒歩約5分、16席 (カウンター8、テーブル8)、禁煙、現金・カード可、電子マネー不可、姉妹店「りょうりや御旅屋」、かまど (おくどさん) で肉と魚を炭火焼き、気軽に楽しめる会席料理、ディナーはアラカルトも可、夜の部コース7,500円・9,500円・11,500円、ご挨拶は店主 原田祐司 (令和2年8月23日開店)。食べログ: 12:00〜15:00 (L.O.13:30、昼は予約のみ)・17:00〜22:00、水曜定休。口コミ (2023〜2026年、英語): 高瀬川の眺め、カウンター、半個室、刺身盛り合わせ1,500円から、ホタルイカの酢味噌1,400円、京都の筍の炭火焼き1,500円、山菜の天ぷら1,400円、琵琶湖の鮎の塩焼き、めひかり、海鮮茶漬け、鱧の椀、4周年、満席が多い。',
      confidence: 'medium', sources: [SITE, SITE + 'dishes/index.html', SITE + 'greeting/index.html', TB, R + 'B432141428/', R + 'B437993285/', R + 'B479477139/', R + 'B490757407/', R + 'B502981769/', R + 'B508797970/', R + 'B512233975/', R + 'B525850415/', R + 'B529526982/', R + 'B532868146/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards accepted; counter welcomes solo diners; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町仏光寺角市之町260-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026. Tabelog still carries a 2023 closing notice, contradicted by the site and later reviews.' },
    pin_source: `Tabelog ${TB} (35.001065, 135.769217); cross-checked: GSI 京都府京都市下京区市之町260番地 (lot) 57m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'dishes/index.html', R + 'B525850415/'],
    price_note: 'Course prices from the official site; a la carte prices from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Dinner course (seasonal sashimi, grilled dish and more)', '¥7,500', 'Dinner', 'ask', 'no', 'Also ¥9,500 and ¥11,500.', 'course'),
      it('', '', 'Assorted sashimi, per person', '¥1,500', 'A la carte', 'ask', 'no', 'From ¥1,500.', 'sashimi'),
      it('', '', 'Firefly squid with vinegar miso', '¥1,400', 'A la carte', 'ask', 'no', 'Spring.', 'hotaruika'),
      it('', '', 'Charcoal-grilled Kyoto bamboo shoots', '¥1,500', 'A la carte', 'ask', 'ask', 'Spring.', 'takenoko'),
      it('', '', 'Mountain-vegetable tempura', '¥1,400', 'A la carte', 'no', 'ask', 'Spring.', 'sansai'),
    ] }, {
    cuisine: 'かまどの炭火で肉や魚を焼く、気軽な季節の会席 (公式サイト)・夜のコース7,500円、9,500円、11,500円 (公式サイト)。たとえば鱧と冬瓜とじゅんさいの椀、中トロ・天然鯛・ビワマス・雲丹の刺身 (2026年8月)・夜はアラカルトも: 刺身盛り合わせ1人1,500円から、ホタルイカの酢味噌1,400円、京都の筍の炭火焼き1,500円、山菜の天ぷら1,400円 (2026年4月)・琵琶湖の鮎の塩焼き、めひかり、海鮮茶漬け (2025〜2026年)',
    neighborhood: '木屋町仏光寺角、高瀬川沿い。京都河原町駅から徒歩5分',
    gf_detail: '要確認。季節の会席: 刺身、椀物、炭火焼きの魚と肉、天ぷら、茶漬け。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、鰻、肉の会席 (公式サイト、口コミ)。',
    notes: '[会席・木屋町の高瀬川、小さな季節の店] 木屋町仏光寺角の16席の会席・割烹。りょうりや御旅屋の姉妹店で、かまどの炭火で魚や肉を焼く。夜のコースは7,500円から、カウンターでアラカルトも (刺身、琵琶湖の鮎、山菜の天ぷら)。高瀬川の眺め。満席が多いので予約を、水曜休み。',
  });
}

// 山福 はなれ: drafted by the worker; converted to a skip by the integrator (same-concept branch of a brand in data).
skip('26045727', 'brand already in data: same agotsuyu-shabushabu concept as あごつゆしゃぶしゃぶ 山福 本店 (kyoto_agotsuyu_yamafuku); second shop, opened September 2026');

// ================================================================ 京都 与兵衛
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044731/'; const R = TB + 'dtlrvwlst/';
  const TC = 'https://www.tablecheck.com/sushiya-yohey-kyoto';
  const H = day(['11:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_yohei_sushi_kiyamachi', name: '京都 与兵衛 (Kyoto Yohei)', category: 'OMNI',
    lat: 35.00107153335032, lng: 135.76954608774878, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edomae sushi with red-vinegar rice; small dishes such as eel chawanmushi; no gluten information is published (TableCheck; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Edomae sushi course (Tabelog).',
    hours_raw: 'Lunch 11:00–15:00 (last order 14:00), dinner 18:00–22:00 (last order 20:30); closed Wednesday (Tabelog). Reservations taken; allergies or dislikes affecting two or more dishes are treated as a cancellation — say so when booking (Tabelog). Cards, e-money and QR accepted (Tabelog). 10% service charge (Tabelog). 26 seats: a counter and private rooms for 2 and 4; non-smoking (Tabelog; TableCheck). Large windows on the Kamo River (Tabelog; September 2026). On the ground floor of HANAMIYA on Kiyamachi above Matsubara, 5 min from Kyoto Kawaramachi or Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi above Matsubara, on the Kamo River — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Edomae sushi with red-vinegar rice, opened May 2026 (Tabelog; TableCheck) · omakase courses: ¥8,800 (May 2026: e.g. grilled eel chawanmushi); lunch of 3 dishes, 10 sushi and dessert ¥16,500; 4 dishes, 12 sushi and dessert ¥27,500 (Tabelog) · bluefin tuna, sardine, whale (TableCheck; September 2026)',
    website: null, gmaps: gm('京都 与兵衛 寿司 木屋町'), menu_url: TC,
    notes: "[Sushi · Kiyamachi by the Kamo, Edomae courses] A new Edomae sushi counter in a hotel building on Kiyamachi, with solid-wood fittings and big windows on the Kamo River. Red-vinegar rice and omakase courses from ¥8,800 to ¥27,500 at lunch and dinner. Private rooms; 10% service; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Opened in May 2026 on the ground floor of HANAMIYA (Tabelog). A May 2026 reviewer calls it a new restaurant of the Kyoto Saeki group, opened with a hotel’s backing; a September 2026 reviewer says the chef comes from an Edomae sushi background.',
      philosophy: null,
      specialty: 'Edomae omakase with red-vinegar rice.',
      anecdotes: [
        { text: 'A May 2026 couple were the only guests on a rainy day before the hotel had opened.', source: R + 'B529335758/' },
        { text: 'A September 2026 diner singled out the deep-red whale nigiri.', source: R + 'B535741862/' },
        { text: 'A June 2026 diner found the taste almost the same as at Saeki.', source: R + 'B529682902/' },
      ],
      japanese_sources_summary: '食べログ: 京都 与兵衛、寿司・日本料理・海鮮、京都市下京区木屋町通松原上る三丁目天王町155-1 HANAMIYA 1F、京都河原町駅・祇園四条駅から徒歩5分、昼11:00〜15:00 (L.O.14:00)・夜18:00〜22:00 (L.O.20:30)、水曜定休、予約可、アレルギーや苦手な食材がコースの2品以上に及ぶ場合はキャンセル扱い、カード・電子マネー・QR可、サービス料10%、26席、個室 (2名・4名)、2026年5月1日オープン、鴨川を望む大きな窓、おまかせ8,800円、昼のコース16,500円 (3品・握り10貫・甘味)・27,500円 (4品・握り12貫・甘味)。TableCheck: 鮨屋与兵衛 京都、江戸前寿司、赤酢の酢飯、クロマグロ、いわし。口コミ (2026年、英語): 京都の佐伯グループの新店、ホテルの1階、鰻の茶碗蒸し、鯨の握り、江戸前出身の職人。',
      confidence: 'low', sources: [TB, TC, R + 'B529335758/', R + 'B529682902/', R + 'B535557431/', R + 'B535741862/'] },
    cultural_comfort: { level: 'english', note: 'Cards and QR accepted; private rooms; 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町通松原上る三丁目天王町155-1 HANAMIYA 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing and TableCheck page; reviews dated May–September 2026.' },
    pin_source: `Tabelog ${TB} (35.001072, 135.769546); cross-checked: GSI 京都府京都市下京区天王町155番地 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course prices from Tabelog set menus (tax included; 10% service extra).', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥8,800', 'Courses', 'ask', 'no', '', 'omakase'),
      it('', '', 'Lunch course: 3 dishes, 10 sushi, dessert', '¥16,500', 'Lunch', 'ask', 'no', '', 'lunch10'),
      it('', '', 'Lunch course: 4 dishes, 12 sushi, dessert', '¥27,500', 'Lunch', 'ask', 'no', '', 'lunch12'),
    ] }, {
    cuisine: '赤酢の酢飯の江戸前寿司、2026年5月開業 (食べログ、TableCheck)・おまかせ8,800円 (2026年5月: 鰻の茶碗蒸しなど)、昼の3品・握り10貫・甘味16,500円、4品・握り12貫・甘味27,500円 (食べログ)・クロマグロ、いわし、鯨 (TableCheck、2026年9月)',
    neighborhood: '木屋町の松原上ル、鴨川沿い。京都河原町駅から徒歩5分',
    gf_detail: '要確認。赤酢の酢飯の江戸前寿司、鰻の茶碗蒸しなどの一品。グルテンの情報は公開されていない (TableCheck、口コミ)。',
    vegan_detail: 'ヴィーガン不可。江戸前寿司のコース (食べログ)。',
    notes: '[寿司・木屋町の鴨川、江戸前のコース] 木屋町のホテルの1階にできた江戸前寿司の店。無垢材のしつらえと鴨川を望む大きな窓。赤酢のシャリで、おまかせは昼夜とも8,800円から27,500円。個室あり、サービス料10%、水曜休み。',
  });
}

save();
