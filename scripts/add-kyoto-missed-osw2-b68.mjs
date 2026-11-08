// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 68.
//   Queue run from the osw2 worktree, 2026-11-07. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours, not filled in.
//   + 京町家イタリアンろんくす Kyomachiya Italian Ronkusu (course-only Italian in a townhouse at Gokomachi-Takatsuji; since 2013)
//   + バー ホップシード BAR HOP SEED (casual Pontocho bar with Kyoto craft beer on tap and whisky)
//   + 旬菜ダイニング e-とこ屋 Shunsai Dining e-Tokoya (seasonal-vegetable and seafood izakaya near Sanjo; since 2015)
//   + 汎洛 Panraku (small neighbourhood bakery on Takatsuji at Gokomachi, open from 8 am)
//   None of the four is in data/kyoto.json, hidden records included: grep by id, name and address. Brand names grepped in queue-status.jsonl: no earlier rulings.
//   Service charges: none listed.
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; ホップシード offset ~8 m off 先斗町 華楽 (7 m), e-とこ屋 ~6 m off 京辛麺 KYO-KARA (7 m);
//   each now 9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-68');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 京町家イタリアンろんくす
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26017557/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '21:30']);
  put({
    id: 'kyoto_kyomachiya_italian_ronkusu', name: '京町家イタリアンろんくす (Kyomachiya Italian Ronkusu)', category: 'OMNI',
    lat: 35.000325497874506, lng: 135.76611044031077, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Set courses with pasta and two homemade breads; the shop asks guests to mention allergies in advance (Tabelog menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses include fish and meat dishes (Tabelog menu).',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:00, or 13:30 depending on bookings); dinner 18:00–21:30 (last order 20:00); closed Monday and the 2nd and 4th Sunday (the next day when a holiday) (Tabelog). Sundays are left out of the hours below because only some Sundays open. Courses only — no a la carte; children of school age and up only (Tabelog menu). Reservations taken, including via the shop’s Instagram (January 2026). Cards accepted; no e-money; service included in course prices (Tabelog). 28 seats: an 8-seat counter and 20 at tables, with private rooms upstairs at no charge; non-smoking, with a smoking area inside (Tabelog; June 2026). In a renovated townhouse on the north-west corner of Gokomachi and Takatsuji, a walk from Shijo (Tabelog; June 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gokomachi at Takatsuji, south of Shijo',
    cuisine: 'Italian set courses in a Kyoto townhouse, opened December 2013 (Tabelog) · monthly lunch course of six dishes — appetiser, fish, meat, pasta, dessert, two homemade breads — ¥4,000–4,300 (2026 reviews; ¥3,800 on the 2024 menu) · seasonal dinner course of a chef’s small dish, cold and warm appetisers, fish, meat, pasta, dessert, ¥6,000 (Tabelog menu, 2024) · Kyoto vegetables; Japanese touches; birthday dessert plates on request; a baked good to take home with Instagram bookings (2026 reviews)',
    website: null, gmaps: gm('京町家イタリアンろんくす'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian · Gokomachi-Takatsuji, courses in a townhouse] A course-only Italian restaurant in a renovated Kyoto townhouse south of Shijo, with private rooms upstairs at no charge. The monthly lunch runs to six generous dishes for about ¥4,000; dinner courses about ¥6,000, using Kyoto vegetables. Book ahead; closed Monday and some Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner-chef not named on Tabelog'], origin: null,
      background: 'Opened in December 2013 (Tabelog). The invoice registration on the Tabelog page is held by an individual, 佐々木禎信 (National Tax Agency register T4810717222667). Reviewers (2025–2026) describe Italian courses with Japanese touches and Kyoto vegetables, served in a renovated townhouse with private rooms.',
      philosophy: null,
      specialty: 'Monthly Italian lunch course.',
      anecdotes: [
        { text: 'A June 2026 group of school-parent friends who meet twice a year found the food even better than last time.', source: R + 'B530963753/' },
        { text: 'A January 2026 regular reserved a whole room for a loved one’s birthday, with a requested dessert plate.', source: R + 'B523636984/' },
        { text: 'A January 2026 diner booked through Instagram and was offered a baked good to take home.', source: R + 'B521721378/' },
      ],
      japanese_sources_summary: '食べログ: 京町家イタリアンろんくす、イタリアン・ステーキ・パスタ、京都市下京区御幸町通高辻北西角橘町453、火〜日 11:30〜15:00 (L.O.14:00)・18:00〜21:30 (L.O.20:00)、月曜と第2・第4日曜定休 (祝日の場合は翌日)、予約可、カード可、電子マネー不可、サービス料はコースに含む、28席 (カウンター8、テーブル20)、禁煙 (店内に喫煙所)、2013年12月1日オープン、インボイス T4810717222667 (佐々木禎信)。メニュー (2024年): コースのみ、アラカルトなし、小学生以上、月替わりランチコース3,800円 (シェフの一皿、前菜、魚料理、肉料理、パスタ、デザート、自家製パン2種、コーヒーか紅茶)、季節のディナーフルコース6,000円、苦手な食材やアレルギーは事前に。口コミ (2025〜2026年、英語): 町家を改装、2階の個室 (無料)、ランチ4,000〜4,300円、京野菜、和のエッセンス、誕生日のデザートプレート、Instagram予約で焼き菓子のお土産、四条から歩ける。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=4810717222667', R + 'B516349782/', R + 'B520310442/', R + 'B520524448/', R + 'B521721378/', R + 'B522453145/', R + 'B523636984/', R + 'B523889200/', R + 'B528455801/', R + 'B530735778/', R + 'B530963753/', R + 'B534957387/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses only; book ahead; private rooms.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区御幸町通高辻北西角橘町453',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.000325, 135.766110); cross-checked: GSI 京都府京都市下京区橘町453番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/', R + 'B534957387/'],
    price_note: 'Lunch price from 2026 reviews; dinner price from the Tabelog menu (February 2024), which may not include tax.', last_checked: TODAY, items: [
      it('', '', 'Monthly lunch course (6 dishes with homemade bread)', '¥4,300', 'Lunch', 'ask', 'no', 'April 2026; ¥4,000 in June 2026.', 'lunch'),
      it('', '', 'Seasonal dinner course', '¥6,000', 'Dinner', 'ask', 'no', '2024 menu.', 'dinner'),
    ] }, {
    cuisine: '京町家のイタリアンのコース、2013年12月開業 (食べログ)・月替わりのランチコース6品、前菜、魚料理、肉料理、パスタ、デザート、自家製パン2種で4,000〜4,300円 (2026年の口コミ、2024年のメニューでは3,800円)・季節のディナーコース、シェフの一皿、冷前菜と温前菜、魚、肉、パスタ、デザートで6,000円 (食べログのメニュー、2024年)・京野菜、和のエッセンス、誕生日のデザートプレート、Instagram予約で焼き菓子のお土産 (2026年の口コミ)',
    neighborhood: '御幸町高辻、四条の南',
    gf_detail: '要確認。パスタと自家製パン2種のコース。アレルギーは事前に伝えるよう店が案内 (食べログのメニュー)。',
    vegan_detail: 'ヴィーガン不可。コースに魚料理と肉料理がある (食べログのメニュー)。',
    notes: '[イタリアン・御幸町高辻、町家のコース] 四条の南、改装した京町家のコースだけのイタリアン。2階に無料の個室。月替わりのランチは6品で4,000円ほど、たっぷり。ディナーは6,000円ほどで京野菜を使う。要予約、月曜と一部の日曜休み。',
  });
}

// ================================================================ バー ホップシード
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26030853/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '02:00']);
  put({
    id: 'kyoto_bar_hop_seed_pontocho', name: 'バー ホップシード (BAR HOP SEED)', category: 'OMNI',
    lat: 35.006968, lng: 135.771063, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a craft-beer bar (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Snacks are light, such as smoked potato chips (December 2021).',
    hours_raw: '18:00–02:00 daily (Tabelog). Cards accepted (Tabelog). 20 seats; smoking allowed (Tabelog; January 2023). Walk-ins welcome; many foreign guests (2025–2026 reviews). On Pontocho near Sanjo, 5 min from Sanjo Stn (Tabelog; June 2022).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, north end near Sanjo — 5 min from Sanjo Stn',
    cuisine: 'Bright, casual bar with Kyoto craft beer on tap — about four seasonal taps, e.g. Hannari IPA — plus bottled beers (2022 and May 2026) · Japanese and imported whiskies at fair prices (January 2023; May 2026) · light snacks such as smoked potato chips (2021; February 2025)',
    website: null, gmaps: gm('BAR HOP SEED 先斗町'), menu_url: TB,
    notes: "[Bar · Pontocho near Sanjo, Kyoto craft beer] Perhaps the easiest bar to walk into on Pontocho: bright and casual, with a few seasonal Kyoto craft beers on tap, a good shelf of Japanese and imported whisky, and smoked potato chips. Open to 2 am daily; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Reviewers (2021–2026) describe a bright, easy-going beer bar on Pontocho with Kyoto craft beer on tap and friendly owner and staff.',
      philosophy: null,
      specialty: 'Kyoto craft beer on tap.',
      anecdotes: [
        { text: 'A March 2025 traveller liked the owner, staff and drinks enough to come back two days running.', source: R + 'B502868970/' },
        { text: 'A February 2025 pair sat among quiet groups of Western visitors and found the snacks surprisingly good.', source: R + 'B500450120/' },
        { text: 'A November 2022 craft-beer fan drifted in from Akagaki-ya and started with a Hannari IPA.', source: R + 'B457532372/' },
      ],
      japanese_sources_summary: '食べログ: バー ホップシード、バー、京都市中京区材木町188-9、毎日18:00〜翌2:00、カード可、20席、喫煙可。口コミ (2021〜2026年、英語): 先斗町でいちばん入りやすいバー、三条駅から徒歩5分、明るい店内、京都のクラフトビール (季節の4タップ、はんなりIPA)、瓶ビール、国内外のウイスキーを手頃に、燻製ポテトチップス、気さくな店主とスタッフ、外国からの客が多い。',
      confidence: 'low', sources: [TB, R + 'B444214893/', R + 'B452406559/', R + 'B453819652/', R + 'B457532372/', R + 'B458926845/', R + 'B500450120/', R + 'B502868970/', R + 'B526012155/', R + 'B528276840/'] },
    cultural_comfort: { level: 'english', note: 'Many foreign guests; walk-ins welcome; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区材木町188-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.007031, 135.771019), offset ~8m to clear 先斗町 華楽 (7m); cross-checked: GSI 京都府京都市中京区材木町188番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528276840/'],
    price_note: 'No published prices.', last_checked: TODAY, items: [
      it('', '', 'Kyoto craft beer on tap (seasonal)', '', 'Beer', 'no', 'ask', '', 'craft'),
      it('', '', 'Japanese whisky', '', 'Whisky', 'gf', 'ask', '', 'whisky'),
      it('', '', 'Smoked potato chips', '', 'Snacks', 'ask', 'ask', '', 'chips'),
    ] }, {
    cuisine: '明るく気軽なバー。京都のクラフトビールを樽で、季節の4タップほど、たとえばはんなりIPA、瓶ビールも (2022年、2026年5月)・国内外のウイスキーを手頃に (2023年1月、2026年5月)・燻製ポテトチップスなど軽いつまみ (2021年、2025年2月)',
    neighborhood: '先斗町の北、三条の近く。三条駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。クラフトビールのバー (口コミ)。',
    vegan_detail: '要確認。つまみは軽いもので、燻製ポテトチップスなど (2021年12月)。',
    notes: '[バー・先斗町の三条寄り、京都のクラフトビール] 先斗町でいちばん入りやすいかもしれない、明るく気軽なバー。京都のクラフトビールを季節のタップで数種、国内外のウイスキー、燻製ポテトチップス。毎日深夜2時まで、喫煙可。',
  });
}

// ================================================================ 旬菜ダイニング e-とこ屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26026731/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:00', '24:00']), B = day(['17:00', '01:00']);
  put({
    id: 'kyoto_shunsai_dining_etokoya', name: '旬菜ダイニング e-とこ屋 (Shunsai Dining e-Tokoya)', category: 'OMNI',
    lat: 35.007485, lng: 135.769745, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal vegetables, sashimi, tempura and fried dishes, buri shabu-shabu with ponzu; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. An April 2026 diner with a vegan friend was recommended avocado and seasonal-vegetable dishes such as kimchi tofu, corn tempura and butter-grilled shiitake (butter is not vegan) — check each dish (reviews).',
    hours_raw: 'Monday–Thursday and Sunday 17:00–24:00 (last order 23:30); Friday and Saturday 17:00–01:00 (last order 00:30); one irregular weekday off each week, posted on Instagram; holiday hours not given on Tabelog (Tabelog). Reservations taken; weekday private hire for 20+; a private room for up to 7 (Tabelog). Cards and PayPay accepted; no e-money (Tabelog). 30 seats (Tabelog). Near Sanjo (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Sanjo',
    cuisine: 'Izakaya of seasonal vegetables and market-fresh seafood and meat, opened December 2015 (Tabelog) · avocado specialities — avocado fries, avocado and salmon yukhoe (2023–2026) · sashimi, grilled fish collar, monkfish liver, firefly squid with nanohana, vegetable tempura, mushroom zosui (2023–2025) · courses with two hours’ all-you-can-drink: buri shabu-shabu ¥5,000 in winter, steak and five-kind sashimi ¥5,500 (Tabelog); 7 dishes from ¥3,500 (April 2024) · sake sangria (2023)',
    website: null, gmaps: gm('旬菜ダイニング e-とこ屋'), menu_url: TB,
    notes: "[Izakaya · near Sanjo, vegetables and fish] A calm, grown-up izakaya near Sanjo built around seasonal vegetables and fish from the central market, known for its avocado dishes. All-you-can-drink courses from about ¥3,500; buri shabu-shabu in winter. Open late, to 1 am at weekends.",
    chef_bio: { chef_name: null, roles: ['Manager not named'], origin: null,
      background: 'Opened in December 2015 (Tabelog). The shop says it sources fish and meat directly from the central market, with seasonal vegetables at the centre of the menu, and contrasts itself with chain izakaya (Tabelog). Reviewers (2024–2026) mention a polite, welcoming manager.',
      philosophy: 'Seasonal vegetables first, with classic izakaya dishes and market seafood, in a calm room unlike a chain (Tabelog).',
      specialty: 'Avocado dishes; buri shabu-shabu in winter.',
      anecdotes: [
        { text: 'An April 2026 diner came with a vegan friend; the manager recommended avocado and vegetable dishes and answered every question.', source: R + 'B526601921/' },
        { text: 'A December 2024 organiser liked that the year-end party course came on individual plates, so nothing had to be shared out.', source: R + 'B497220428/' },
        { text: 'A March 2023 group celebrated a friend’s wedding with a special plate.', source: R + 'B463199976/' },
      ],
      japanese_sources_summary: '食べログ: 旬菜ダイニング e-とこ屋、居酒屋・野菜料理・創作料理、京都市中京区山崎町258-24 1F、月〜木・日 17:00〜24:00 (L.O.23:30)、金土 17:00〜翌1:00 (L.O.0:30)、平日に週1回不定休 (Instagramで告知)、予約可、カード・PayPay可、電子マネー不可、30席、平日20名以上で貸切、7名までの個室、2015年12月6日オープン、旬の野菜、中央市場直送の魚と肉、チェーン店にない落ち着いた空間、冬はぶりしゃぶのコース5,000円、ステーキと刺身5種の満足コース5,500円 (いずれも2時間飲み放題付き)、インボイス T9810935329859。口コミ (2023〜2026年、英語): アボカド料理が名物 (アボカドフライ、アボカドとサーモンのユッケ)、刺身、カマ焼き、あん肝、ホタルイカと菜の花、野菜の天ぷら、きのこの雑炊、日本酒のサングリア、7品と飲み放題3,500円から、丁寧な店長。',
      confidence: 'low', sources: [TB, R + 'B251597533/', R + 'B463199976/', R + 'B475911538/', R + 'B483265825/', R + 'B497220428/', R + 'B506277088/', R + 'B526601921/', R + 'B537215706/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards and PayPay; private room for up to 7.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区山崎町258-24 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007440, 135.769773), offset ~6m to clear 京辛麺 KYO-KARA 木屋町店 (7m); cross-checked: GSI 京都府京都市中京区山崎町258番地 (lot) 83m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B483265825/'],
    price_note: 'Course prices from Tabelog set menus (tax included) and an April 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Buri shabu-shabu course with 2 hours’ all-you-can-drink', '¥5,000', 'Courses', 'ask', 'no', 'Winter.', 'buri_shabu'),
      it('', '', 'Steak and five-kind sashimi course with all-you-can-drink', '¥5,500', 'Courses', 'ask', 'no', '', 'manzoku'),
      it('', '', 'Avocado and salmon yukhoe', '', 'Dishes', 'ask', 'no', '', 'avocado_yukhoe'),
      it('', '', 'Corn tempura', '', 'Dishes', 'no', 'ask', '', 'corn_tempura'),
    ] }, {
    cuisine: '旬の野菜と市場直送の魚介や肉の居酒屋、2015年12月開業 (食べログ)・名物のアボカド料理: アボカドフライ、アボカドとサーモンのユッケ (2023〜2026年)・刺身、カマ焼き、あん肝、ホタルイカと菜の花、野菜の天ぷら、きのこの雑炊 (2023〜2025年)・2時間飲み放題付きのコース: 冬のぶりしゃぶ5,000円、ステーキと刺身5種5,500円 (食べログ)、7品で3,500円から (2024年4月)・日本酒のサングリア (2023年)',
    neighborhood: '三条の近く',
    gf_detail: '要確認。旬の野菜、刺身、天ぷらや揚げ物、ポン酢のぶりしゃぶ。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: '要確認。2026年4月、ヴィーガンの友人連れの客にアボカドや旬の野菜の料理 (キムチ豆腐、コーンの天ぷら、椎茸のバター焼きなど、バターはヴィーガン不可) を勧めた。一品ずつ確認を (口コミ)。',
    notes: '[居酒屋・三条の近く、野菜と魚] 三条近くの落ち着いた大人の居酒屋。旬の野菜と中央市場の魚が中心で、アボカド料理が名物。飲み放題付きのコースは3,500円ほどから、冬はぶりしゃぶ。夜遅くまで、週末は深夜1時まで。',
  });
}

// ================================================================ 汎洛
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005635/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '20:00']);
  put({
    id: 'kyoto_panraku_bakery', name: '汎洛 (Panraku)', category: 'OMNI',
    lat: 35.00004680749213, lng: 135.76631454500105, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a wheat bakery (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plain loaves (square and mountain loaves, wholegrain) are sold; many breads contain cheese, cream, sausage or tuna (reviews).',
    hours_raw: '08:00–20:00 Monday–Saturday; closed Sunday and holidays; hours may change (Tabelog). PayPay and other QR payments; no cards or e-money (Tabelog; March 2025). A small take-away bakery; popular breads such as baguettes sell out — by afternoon few are left (2025–2026 reviews). A giraffe painted on the outside wall (2026 reviews). On Takatsuji at the south-east corner of Gokomachi, about 8 min from Kyoto Kawaramachi Stn (Tabelog; August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takatsuji at Gokomachi, south of Shijo — 8 min from Kyoto Kawaramachi Stn',
    cuisine: 'Neighbourhood bakery of small, fairly priced breads (2024–2026 reviews) · rolls from ¥120; walnut and gorgonzola ¥210 (October 2024) · melon bread ¥190, tuna-corn roll ¥200 (March 2025); brown-sugar raisin bread ¥210 (May 2026); dark cherry ¥250, croquette roll ¥220 (August 2026) · curry bread, sausage roll, apple-custard bread, cream cheese with yuzu pepper, bacon with sansho (2024–2026) · square and mountain loaves, wholegrain bread, baguettes (2025–2026)',
    website: null, gmaps: gm('汎洛 パン 高辻'), menu_url: TB,
    notes: "[Bakery · Takatsuji at Gokomachi, small breads from 8 am] A cheerful neighbourhood bakery with a giraffe painted on its wall, open from 8 am: small, well-made breads from about ¥120 — brown-sugar raisin, curry bread, walnut and gorgonzola — and good square loaves. Go early; popular items sell out. QR payments, no cards; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Bakers not named'], origin: null,
      background: 'Reviewers (2024–2026) describe a small local bakery on Takatsuji with a giraffe mural and friendly staff, selling a changing range of small breads and loaves.',
      philosophy: null,
      specialty: 'Small breads and loaves.',
      anecdotes: [
        { text: 'A July 2026 visitor calls it a favourite, visited on every trip to Kyoto because it opens at 8 am.', source: R + 'B531568719/' },
        { text: 'An October 2026 shopper asked for a crisp crust and moist crumb and was recommended the mountain loaf.', source: R + 'B537446891/' },
        { text: 'A March 2025 worker with no time for lunch chose it over a convenience store.', source: R + 'B502867075/' },
      ],
      japanese_sources_summary: '食べログ: 汎洛、パン、京都市下京区高辻通御幸町南東角桝屋町458-2、月〜土 8:00〜20:00、日祝休み、カード・電子マネー不可、QR可、禁煙。口コミ (2024〜2026年、英語): パンラク、キリンの壁画の小さなパン屋、ロールパン120円、くるみとゴルゴンゾーラ210円、メロンパン190円、ツナコーン200円、黒糖レーズン210円、ダークチェリー250円、コロッケロール220円、カレーパン、ソーセージロール、りんごとカスタード、クリームチーズと柚子胡椒、ベーコンと山椒、山食、角食、全粒粉、バゲットは午前中に売り切れ、PayPay、京都河原町駅から徒歩8分。',
      confidence: 'low', sources: [TB, R + 'B494757623/', R + 'B497916757/', R + 'B502867075/', R + 'B507174975/', R + 'B508248542/', R + 'B520853387/', R + 'B528833973/', R + 'B530827760/', R + 'B531568719/', R + 'B534307685/', R + 'B537446891/'] },
    cultural_comfort: { level: 'japanese', note: 'Take-away bakery; QR payments, no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高辻通御幸町南東角桝屋町458-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.000047, 135.766315); cross-checked: GSI 京都府京都市下京区桝屋町458番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B494757623/', R + 'B502867075/', R + 'B528833973/', R + 'B534307685/'],
    price_note: 'Prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Roll bread', '¥120', 'Bread', 'no', 'ask', 'October 2024.', 'roll'),
      it('', '', 'Melon bread', '¥190', 'Bread', 'no', 'no', 'March 2025.', 'melonpan'),
      it('', '', 'Brown-sugar raisin bread', '¥210', 'Bread', 'no', 'ask', 'May 2026.', 'kokuto'),
      it('', '', 'Croquette roll', '¥220', 'Bread', 'no', 'ask', 'August 2026.', 'croquette'),
      it('', '', 'Walnut and gorgonzola bread', '¥210', 'Bread', 'no', 'no', 'October 2024.', 'walnut'),
    ] }, {
    cuisine: '小ぶりで手頃なパンの町のパン屋 (2024〜2026年の口コミ)・ロールパン120円から、くるみとゴルゴンゾーラ210円 (2024年10月)・メロンパン190円、ツナコーン200円 (2025年3月)、黒糖レーズン210円 (2026年5月)、ダークチェリー250円、コロッケロール220円 (2026年8月)・カレーパン、ソーセージロール、りんごとカスタード、クリームチーズと柚子胡椒、ベーコンと山椒 (2024〜2026年)・角食、山食、全粒粉、バゲット (2025〜2026年)',
    neighborhood: '高辻御幸町、四条の南。京都河原町駅から徒歩8分',
    gf_detail: 'グルテンフリー不可。小麦のパン屋 (口コミ)。',
    vegan_detail: '要確認。角食や山食、全粒粉の食パンがある。チーズ、クリーム、ソーセージ、ツナ入りのパンが多い (口コミ)。',
    notes: '[パン屋・高辻御幸町、朝8時から小さなパン] キリンの壁画が目印の明るい町のパン屋。朝8時から、黒糖レーズン、カレーパン、くるみとゴルゴンゾーラなど小ぶりで丁寧なパンが120円ほどから、角食もおいしい。人気のパンは売り切れるので早めに。QR決済可でカード不可、日曜休み。',
  });
}

save();
