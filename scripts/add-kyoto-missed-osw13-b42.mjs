// Kyoto priority (kyoto-missed), worker osw13, batch 42 — lane: Tabelog id mod 6 = 0.
// Core: Affinage, IL TESORO. Notable: 京都祇園 おかる, すっぽん鍋 鱧料理 三栄.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-42');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26036634', 'chain: 肉 听 is one of 8 same-name 听 shops in the crawl (熟成焼肉 听 四条大宮店・京都駅前店, ステーキハウス 听 京都本店・北新地, プレミアム 听 祇園店, PREMIUM焼肉 听 祇園, ハンバーグ＆ステーキ 听 梅小路店); 5+ same-name = chain (Greg ruling 2026-11-05)');
skip('26004222', 'large parent: 柚子屋旅館・一心居 is run by the KIWA group — the ryokan site (yuzuyaryokan.com) links its company profile to kiwa-group.co.jp and sells its products on kiwa-bazaar.jp; KIWA is listed as a large parent in the brief (integrator ruling 2026-11-05)');
skip('26034036', 'large parent: BENOIT Kyoto Alain Ducasse is a branch of the Alain Ducasse group’s Benoit bistros — a famous brand house with restaurants worldwide; sub-brand of a large parent');

// ================================================================ Affinage
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26017518/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://affinage-kyoto.com/';
  const H = day(['17:00', '01:00']);
  put({
    id: 'kyoto_affinage_gion', name: 'Affinage (アフィナージュ)', category: 'MOM_AND_POP',
    lat: 35.006514, lng: 135.775451, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A wine bar whose food runs to quiche, naturally leavened bread, cheese, prosciutto, potage and braised beef cheek (2025–2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cheese, prosciutto, quiche and beef dishes (2025–2026 reviews); the fruit cocktails are plain fruit and spirits — ask.',
    hours_raw: 'Official site: Tue–Sun and holidays 17:00–01:00 (L.O. 0:00); closed Monday; bookings by phone (official site), also online on Tabelog — if online shows full, call (Tabelog). 7 counter seats; non-smoking; cards (JCB, AMEX, Diners per Tabelog). No service charge listed on Tabelog. Glass wine at a flat ¥3,500 (November 2025, May 2026), up from ¥1,500 (July 2026 regular); dishes from ¥500 (July 2026). Opened 11 March 2011 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Shirakawa, on Hanamikoji north of Shinmonzen — 10 min walk from Gion-Shijo Stn',
    cuisine: 'Wine bar on the Shirakawa: Champagne and wine by the glass, a flat ¥3,500 a glass (2025–2026 reviews), and seasonal whole-fruit cocktails — strawberry, melon, apple (official site; 2025–2026 reviews) · food from ¥500: cheese platter, quiche (oyster and cheese Lorraine), naturally leavened bread, prosciutto sliced to order, potage, homemade cheesecake (2025–2026 reviews) · the "Kojikoji" set of five: amuse, quiche, potage, beef cheek bourguignon or fish, dessert or cheese (May 2025)',
    website: SITE, gmaps: gm('Affinage アフィナージュ 祇園 花見会館'), menu_url: null,
    notes: '[Wine bar · Gion Shirakawa, one-man counter till 1 am] A seven-seat counter cut from a single slab of rock, on the Shirakawa, where the owner, working alone, pours French wine at a flat ¥3,500 a glass and makes whole-fruit cocktails — melon, strawberry, apple — and surprisingly good food: quiche, cheese, beef cheek bourguignon. Regulars praise the gentle, attentive master and the music; a July 2026 regular regrets that the glass price rose from ¥1,500. Gion mamas drink here (October 2026). Closed Monday.',
    chef_bio: { chef_name: 'Yukinori Kojima (from the Instagram account yukinori_kojima_kyoto linked on the official site; reviews call the master Mr. Kojima; no kanji in a source)', roles: ['Owner and only staff (July 2026: "despite being run by a single person")'], origin: 'From Aomori, per an April 2026 review ("A wine bar run by a proprietor from Aomori").',
      background: 'Per the official site: a wine bar on the bank of the Gion Shirakawa serving Champagne and wine by the glass and cocktails of seasonal fruit; the name Affinage means "maturing" — the owner hopes the bar, the owner and the guests will mature over 10, 20, 30 years like a fine wine. Opened 11 March 2011 (Tabelog). A July 2026 regular says the set name "Coji Coji" comes from the master’s name.',
      philosophy: 'Official site: a bar to ease the day’s tiredness and restore energy for tomorrow; 「マリアージュ（出会い）から アフィナージュ（熟成）へ」.',
      specialty: 'Whole-fruit cocktails; wine by the glass; quiche.',
      anecdotes: [
        { text: '"I think one downside is that the price for glass wine has increased from JPY 1500 to JPY 3500 across the board." — July 2026, a regular on a fourth visit.', source: R + 'B516178324/' },
        { text: '"It’s one of the bars frequented by the mamas of Gion." — October 2026.', source: R + 'B536058130/' },
        { text: 'An April 2026 guest booked the same day and came in at 10 pm after work for a strawberry cocktail, carrot soup and red wine.', source: R + 'B287177137/' },
        { text: 'A May 2025 guest came back after eight years for the five-course Kojikoji set and a melon-and-Champagne cocktail.', source: R + 'B465414582/' },
      ],
      japanese_sources_summary: '公式サイト (affinage-kyoto.com): Affinage、祇園白川のほとりのワインバー、シャンパーニュとワインをグラスで、季節のフルーツのカクテル、店名は熟成の意味で、店も店主もお客様も10年、20年、30年と熟成していきたい、1日の疲れを癒し明日の元気を取り戻すバーを目指す、グラスワインは時々で変わる、カード可、店内全面禁煙、予約は電話、東山区花見小路通新門前上ル東側 花見会館汀館1F、火〜日・祝 17:00〜1:00 (0:00 L.O.)、月曜休み、店主の Instagram (yukinori_kojima_kyoto)。食べログ: ワインバー、東山区中之町244-1、7席、ネットで空きがなければ電話を、2011年3月11日オープン。口コミ (2025年5月〜2026年10月、英語): 一人で営業、青森出身の店主、一枚岩のカウンター、フルーツカクテル (苺、メロン、林檎)、グラスワインは一律3,500円 (以前は1,500円)、料理は500円から、チーズ盛り合わせ、キッシュ、天然酵母のパン、目の前で切る生ハム、自家製チーズケーキ、コジコジのセット5品、牛頬肉の赤ワイン煮、音楽、祇園のママたちが通う。',
      confidence: 'medium', sources: [TB, SITE, R + 'B287177137/', R + 'B465414582/', R + 'B508495082/', R + 'B516178324/', R + 'B517980832/', R + 'B525780079/', R + 'B527796408/', R + 'B529793530/', R + 'B531946667/', R + 'B536058130/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A seven-seat counter run by one person; book by phone, or call if online shows full.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区中之町244-1 花見会館汀館１F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006514, 135.775451); cross-checked: GSI 京都府京都市東山区中之町244番地 (lot) 35m; kyoto_gion_245 (245-1) 23 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527796408/', R + 'B516178324/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Wine by the glass (flat price)', '¥3,500', 'Drink', 'ask', 'ask', 'May 2026.', 'wine'),
      it('', '', 'Seasonal whole-fruit cocktail', '', 'Drink', 'ask', 'ask', 'Price not given.', 'cocktail'),
      it('', '', 'Dishes, from', '¥500', 'Food', 'ask', 'no', 'July 2026.', 'snacks'),
    ] }, {
    cuisine: '白川沿いのワインバー: シャンパーニュとワインのグラスは一律3,500円 (2025〜2026年の口コミ)、季節のフルーツをまるごと使うカクテル、苺、メロン、林檎 (公式サイト、2025〜2026年の口コミ)・料理は500円から: チーズ盛り合わせ、キッシュ (牡蠣とチーズのロレーヌ)、天然酵母のパン、目の前で切る生ハム、ポタージュ、自家製チーズケーキ (2025〜2026年の口コミ)・5品の「コジコジ」セット: アミューズ、キッシュ、ポタージュ、牛頬肉の赤ワイン煮か魚、デザートかチーズ (2025年5月)',
    neighborhood: '祇園白川、新門前上ルの花見小路。祇園四条駅から徒歩10分',
    gf_detail: '要確認。キッシュ、天然酵母のパン、チーズ、生ハム、ポタージュ、牛頬肉の煮込みなどの料理で (2025〜2026年の口コミ)、グルテンの情報なし。',
    vegan_detail: 'ヴィーガン不可: チーズ、生ハム、キッシュ、牛肉 (2025〜2026年の口コミ)。フルーツカクテルは果物とお酒 — 要確認。',
    notes: '[ワインバー・祇園白川、深夜1時まで一人で] 白川沿い、一枚岩のカウンター7席。店主が一人で、フランスワインを一律3,500円のグラスで注ぎ、メロンや苺や林檎をまるごと使ったフルーツカクテルを作り、キッシュ、チーズ、牛頬肉の赤ワイン煮など料理も評判。穏やかで気配りのある店主と音楽が好評で、2026年7月の常連はグラスが1,500円から上がったのを残念がる。祇園のママたちも通う (2026年10月)。月曜休み。',
  });
}

// ================================================================ IL TESORO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26018370/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:45', '14:30'], ['18:00', '22:00']);
  put({
    id: 'kyoto_il_tesoro_sanjo', name: 'IL TESORO (イル テゾーロ)', category: 'OMNI',
    lat: 35.008849, lng: 135.764315, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; courses centre on pasta (squid ink, cold crab, anago with Kujo leeks), three homemade breads and a pork cutlet (2024–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of duck, fish, pork spare ribs, cutlet, burrata and crab pasta (2024–2025 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 11:45–14:30 (L.O. 13:30) and 18:00–22:00 (L.O. 21:00); closed Wednesday and the first and third Thursdays. Bookings taken. 12 seats, counter and tables, up steep stairs (September 2025); non-smoking; cash only — no cards, e-money or QR (Tabelog). No service charge listed on Tabelog. A December 2025 regular says it moved here from Shijo-Karasuma.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanjo-dori east of Yanagibamba, upstairs under an Italian flag — 10 min walk from Karasuma Oike Stn',
    cuisine: 'Italian set lunches and dinners with a long pasta list · lunch course ¥3,850 (September 2025): appetizer plate, soup, three homemade breads, a choice of pasta and main, dessert · pastas: cold crab pasta with orange (a regulars’ favourite), squid ink (+¥440), anago and Kujo leeks · mains: Kyoto-raised "Moti Pork" spare-rib confit, Yonezawa pork cutlet, roast sea bass, venison · caprese of fruit tomato and burrata (2024–2025 reviews)',
    website: null, gmaps: gm('IL TESORO イル テゾーロ 三条 中之町'), menu_url: null,
    notes: '[Italian · Sanjo-dori, up the stairs] Look for the Italian flag on Sanjo-dori and climb steep stairs to a twelve-seat room with an old coffee-house feel. Set lunches start with a lavish appetizer plate and three homemade breads, then a choice from a long pasta list — the cold crab pasta is the regulars’ pick — and mains like spare-rib confit or a crisp pork cutlet. Portions are big. A September 2025 diner found it generous but ordinary. Cash only. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Tabelog introduces a hidden Italian restaurant on the second floor of a building on Sanjo-dori, marked by an Italian flag. A December 2025 regular has followed it since it was at Shijo-Karasuma; a March 2025 diner likens the room to an old coffee house.',
      philosophy: 'Tabelog introduction: Italian food for grown-ups, made with good ingredients.',
      specialty: 'Cold pasta; homemade breads; set lunch.',
      anecdotes: [
        { text: 'Asked what to order, the staff told a May 2025 diner that many regulars choose the cold pasta.', source: R + 'B507876516/' },
        { text: '"Everything had a homemade touch and was made with care, but overall it felt quite ordinary." — September 2025.', source: R + 'B513426174/' },
        { text: 'A September 2024 diner’s friend was given a birthday plate on the house.', source: R + 'B492801104/' },
      ],
      japanese_sources_summary: '食べログ: IL TESORO (イル テゾーロ)、イタリアン・パスタ・ダイニングバー、中京区三条通柳馬場東入中之町6 三条有本ビル2F、月火木〜日 11:45〜14:30 (L.O. 13:30)・18:00〜22:00 (L.O. 21:00)、水曜と第1・第3木曜休み、予約可、12席、禁煙、カード・電子マネー・QR不可、ビルの2階の隠れ家、三条通のイタリア国旗が目印、良い食材の大人のイタリアン。口コミ (2024年6月〜2025年12月、英語): ランチ3,850円、前菜の盛り合わせ、自家製パン3種、冷製パスタ (蟹とオレンジ)、イカスミ (+440円)、穴子と九条ねぎ、京都産の Moti Pork のスペアリブのコンフィ、Yonezawa のポークのカツレツ、スズキのロースト、鹿肉、フルーツトマトとブッラータのカプレーゼ、量が多い、昔の喫茶店のような店内、急な階段、四条烏丸から移転、誕生日プレート、普通だったという声。',
      confidence: 'medium', sources: [TB, R + 'B486630423/', R + 'B487673578/', R + 'B492499382/', R + 'B492562066/', R + 'B492801104/', R + 'B503688534/', R + 'B507876516/', R + 'B509155917/', R + 'B513426174/', R + 'B519749727/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses with choices; staff suggest dishes (May 2025); cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通柳馬場東入中之町6 三条有本ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.008849, 135.764315); cross-checked: GSI 京都府京都市中京区中之町6番地 (lot) 6m; kyoto_ryoriya_jizai 24 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B513426174/', R + 'B492499382/'],
    price_note: 'Prices from 2024–2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (appetizers, soup, bread, pasta or main, dessert)', '¥3,850', 'Lunch', 'no', 'no', 'September 2025.', 'lunch_course'),
      it('', '', 'Squid-ink pasta supplement', '+¥440', 'Pasta', 'no', 'no', 'September 2024.', 'pasta'),
    ] }, {
    cuisine: 'パスタの種類が多いイタリアンのランチとディナーのコース・ランチ3,850円 (2025年9月): 前菜の盛り合わせ、スープ、自家製パン3種、パスタかメイン、デザート・パスタ: 蟹とオレンジの冷製パスタ (常連の人気)、イカスミ (+440円)、穴子と九条ねぎ・メイン: 京都産の Moti Pork のスペアリブのコンフィ、Yonezawa のポークのカツレツ、スズキのロースト、鹿肉・フルーツトマトとブッラータのカプレーゼ (2024〜2025年の口コミ)',
    neighborhood: '三条通の柳馬場の東、イタリア国旗の下の2階。烏丸御池駅から徒歩10分',
    gf_detail: '要確認。グルテンの情報なし。コースの中心はパスタ (イカスミ、蟹の冷製、穴子と九条ねぎ)、自家製パン3種、豚のカツレツ (2024〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鴨、魚、豚のスペアリブ、カツレツ、ブッラータ、蟹のパスタのコース (2024〜2025年の口コミ)。',
    notes: '[イタリアン・三条通、階段の上] 三条通のイタリア国旗が目印で、急な階段を上ると昔の喫茶店のような12席。ランチは豪華な前菜の盛り合わせと自家製パン3種に、豊富なパスタから選ぶ1品 (常連の人気は蟹の冷製パスタ)、スペアリブのコンフィやカツレツなどのメイン。量が多い。2025年9月には丁寧だが普通という声も。現金のみ。水曜休み。',
  });
}

// ================================================================ 京都祇園 おかる
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001282/'; const R = TB + 'dtlrvwlst/';
  const MT = day(['11:00', '15:00'], ['17:00', '02:00']);
  const FR = day(['11:00', '15:00'], ['17:00', '02:30']);
  const SA = day(['11:00', '15:00'], ['17:00', '03:00']);
  const SU = day(['11:00', '15:00']);
  put({
    id: 'kyoto_gion_okaru', name: '京都祇園 おかる (Kyoto Gion Okaru)', category: 'OMNI',
    lat: 35.004328, lng: 135.774114, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon in a curry or ankake broth (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every broth is a dashi of mackerel, urume and bonito flakes with kombu (Tabelog).',
    hours_raw: 'Tabelog: Mon–Thu 11:00–15:00 and 17:00–02:00; Fri until 02:30; Sat until 03:00; Sun 11:00–15:00 only; hours may change. No reservations; shared tables at busy times (October 2026). 37 seats: tables and two tatami tables for six. Smoking allowed except at lunch (Tabelog). Cash only (Tabelog; September 2026). No service charge listed on Tabelog. A large udon portion is +¥220, though not on the menu (Tabelog).',
    hours: { 0: MT, 1: MT, 2: MT, 3: MT, 4: FR, 5: SA, 6: SU }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Gion north of Shijo — 3 min walk from Gion-Shijo Stn, exit 7',
    cuisine: 'Gion udon house open until the small hours · famous cheese-and-meat curry udon, ¥1,470 large (September 2026); cheese curry kitsune udon; kitsune udon; chicken-and-egg udon; konoha-don made with mushrooms instead of chicken (2026 reviews) · winter ankake udon on a dashi of four kinds of katsuobushi and kombu, thickened with kudzu and topped with ginger, ¥680 (Tabelog) · large portion +¥220 (Tabelog) · sake, shochu (Tabelog)',
    website: null, gmaps: gm('京都祇園 おかる 富永町'), menu_url: null,
    notes: '[Udon · Gion, open till 2–3 am] A long-standing Gion udon house that fills up after midnight with people ending a night out. The draw is cheese-and-meat curry udon — spicy at first, then rich with dashi — beside soft Kyoto-style kitsune udon and a winter ankake udon thickened with kudzu. Quick turnover; shared tables when busy. Cash only; smoking allowed after lunch. Sunday lunch only.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Tabelog describes the ankake udon: a dashi from four kinds of katsuobushi — mackerel, urume and bonito among them — with fine kombu, thickened with kudzu without water and topped with grated ginger. An October 2026 diner first ate the cheese curry udon here over ten years ago; reviewers in 2026 call it a traditional place and describe it packed after midnight.',
      philosophy: null,
      specialty: 'Cheese-and-meat curry udon; ankake udon.',
      anecdotes: [
        { text: '"Even after midnight, the place was packed." — October 2026.', source: R + 'B76905963/' },
        { text: 'An October 2026 visitor ended a 30-person office outing here for the cheese curry udon first eaten ten years before ("Sorry for the commotion!").', source: R + 'B537593975/' },
        { text: 'A September 2026 diner tried the konoha-don, made with mushrooms instead of chicken, and noted it is cash only.', source: R + 'B536187706/' },
      ],
      japanese_sources_summary: '食べログ: 京都祇園 おかる、うどん・そば・食堂、東山区八坂新地富永町132、祇園四条駅7番出口から徒歩3分、月〜木 11:00〜15:00・17:00〜翌2:00、金は翌2:30まで、土は翌3:00まで、日 11:00〜15:00、予約不可、37席 (テーブルと6名の座敷2卓)、喫煙可 (ランチは禁煙)、カード・電子マネー・QR不可、うどんの大盛りは220円増し (メニューになし)、あんかけうどんは鯖・うるめ・鰹など4種の削り節と昆布のだしを葛でとじ、おろし生姜をのせて680円。口コミ (2026年3月〜10月、英語): チーズ肉カレーうどん大盛り1,470円、チーズカレーきつねうどん、きつねうどん、鶏卵うどん、このは丼、深夜も満席、相席、回転が早い、現金のみ、10年以上前から通う。',
      confidence: 'medium', sources: [TB, R + 'B535969099/', R + 'B536144050/', R + 'B536187706/', R + 'B536741528/', R + 'B536926560/', R + 'B537593975/', R + 'B537682259/', R + 'B537723095/', R + 'B538353079/', R + 'B76905963/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk in, share a table at busy times; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区八坂新地富永町132',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004328, 135.774114); GSI 京都府京都市東山区八坂新地富永町132 returned only 八坂上町 (town level, about 650 m away), so it cannot confirm the lot; the pin stays on the Tabelog point; kyr_kanton_ryori_heian 5.7 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B535969099/'],
    price_note: 'Ankake udon price and large-portion supplement from Tabelog; curry udon price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Cheese and meat curry udon, large', '¥1,470', 'Udon', 'no', 'no', 'September 2026.', 'curry_udon'),
      it('', '', 'Ankake udon (winter)', '¥680', 'Udon', 'no', 'no', 'Tabelog.', 'ankake_udon'),
      it('', '', 'Large udon portion', '+¥220', 'Udon', 'no', 'no', 'Not on the menu (Tabelog).', 'udon'),
    ] }, {
    cuisine: '深夜まで開く祇園のうどん屋・名物のチーズ肉カレーうどん、大盛り1,470円 (2026年9月)、チーズカレーきつねうどん、きつねうどん、鶏卵うどん、鶏の代わりにきのこを使ったこのは丼 (2026年の口コミ)・冬のあんかけうどん: 4種の削り節と昆布のだしを葛でとじ生姜をのせて680円 (食べログ)・大盛りは220円増し (食べログ)・日本酒、焼酎 (食べログ)',
    neighborhood: '四条通の北の祇園。祇園四条駅7番出口から徒歩3分',
    gf_detail: 'グルテンフリーではない: 小麦のうどんをカレーやあんかけのだしで (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: どのつゆも鯖・うるめ・鰹の削り節と昆布のだし (食べログ)。',
    notes: '[うどん・祇園、深夜2〜3時まで] 夜遊びの〆の客で深夜も満席になる祇園の老舗のうどん屋。目当てはチーズ肉カレーうどんで、最初は辛く、だんだんだしの旨みが来る。京都らしいやわらかいきつねうどん、冬は葛でとじたあんかけうどん。回転が早く、混むと相席。現金のみ、昼以外は喫煙可。日曜は昼のみ。',
  });
}

// ================================================================ すっぽん鍋 鱧料理 三栄
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002986/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kappou-sanei.com/';
  const KOD = 'https://www.kappou-sanei.com/kodawari/';
  const ACC = 'https://www.kappou-sanei.com/overview/access/';
  const H = day(['11:30', '14:30'], ['17:00', '21:00']);
  put({
    id: 'kyoto_sanei_hamo', name: 'すっぽん鍋 鱧料理 三栄 (Sanei)', category: 'OMNI',
    lat: 35.002724, lng: 135.769681, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; hamo courses include tempura and soy- or ponzu-seasoned dishes, and the winter guji course a fried dish in rice-flour crumbs (official site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamo, guji and soft-shell turtle courses, with a hamo-bone and kombu broth for the hot pot (official site).',
    hours_raw: 'Official site: lunch 11:30–14:30 (L.O. 13:00), dinner 17:00–21:00 (L.O. 19:00); closed Monday; summer holiday 28 September–1 October 2026. Tabelog gives dinner L.O. 20:00. Bookings by phone or online. Official site: up to 15 seats downstairs, the tatami room currently closed; Tabelog lists 30 seats (8 counter, 8 table, tatami for 2–14). Non-smoking since November 2019 (official site); children welcome; cards, e-money and QR (Tabelog; official site). No service charge (Tabelog; Japanese original 「なし」). Hamo shabu for mail order or take-away May–November (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Off Kawaramachi-dori just south of Shijo — 2 min walk from Kyoto Kawaramachi Stn',
    cuisine: 'Kyoto kappou of hamo, guji and soft-shell turtle, founded in 1934 (official site) · hamo cut to order after you arrive: hamo shabu course ¥12,100; seasonal hamo set of nine dishes ¥9,900 (official site; August 2026) · winter Wakasa guji course of eight dishes ¥15,400; spring bamboo-shoot courses ¥9,900 and ¥12,100 (official site) · lunch sets such as a lotus-root manju set ¥3,960, and seared-hamo dashi chazuke in October–November ¥4,180 (official site) · seen: hamo otoshi with plum, grilled hamo with cucumber and myoga, hamo tempura, anago or hamo pressed sushi, egg tofu, yuba (2025–2026 reviews) · Kyoto sake (August 2026)',
    website: SITE, gmaps: gm('鱧料理 三栄 河原町 稲荷町'), menu_url: SITE + 'menu/',
    notes: '[Hamo kappou · Kawaramachi-Shijo, since 1934] A third-generation kappou down an alley off Kawaramachi, where the hamo is bone-cut only after you arrive and the hamo-shabu broth is a family recipe. Summer and autumn bring hamo courses — otoshi with plum, tempura, hot pot, pressed sushi — winter brings Wakasa guji and soft-shell turtle. Hamo shabu course ¥12,100. Busy since a July 2026 TV feature. One August 2026 guest wanted service to match the room and found the hand towels too strongly scented. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['A family restaurant now in its third generation (official site: 三代続く); the owner is not named. A June 2026 diner writes of "the owner and his wife".'], origin: null,
      background: 'Per the official site: founded in 1934 (Showa 9), with three generations of hamo technique and a hamo-shabu broth passed down in the family; the hamo is bone-cut and blanched only after guests arrive; the shabu broth is made daily from grilled hamo heads and bones with kombu and Kujo leeks; bamboo shoots fetched each morning from a farm under contract. The site says the shop was featured on Kansai TV on 30 July 2026, after which bookings flooded in for two months, and that hamo is at its fattest in October and November, not summer.',
      philosophy: 'Official site: 「あーこれが本当の鱧料理なんだ」 — to let guests experience real hamo cooking.',
      specialty: 'Hamo shabu; hamo otoshi; Wakasa guji course.',
      anecdotes: [
        { text: 'A former chef dining in June 2026 enjoyed the sound of the hamo bones being cut.', source: R + 'B531004667/' },
        { text: '"The scent of the wet towels was surprisingly strong, almost overpowering the aroma of the food." — August 2026.', source: R + 'B533666990/' },
        { text: 'An October 2026 diner was told by the staff that autumn is the best time for hamo.', source: R + 'B538404968/' },
      ],
      japanese_sources_summary: '公式サイト (kappou-sanei.com): 京料理・鱧料理 三栄、昭和九年創業、三代続く本物の技と味、鱧しゃぶのスープは代々相伝、来店後に骨切りして湯引き、カウンターで割烹スタイル、テーブル席、鱧しゃぶコース12,100円、季節限定鱧旬菜御膳9品9,900円、グジづくしコース8品15,400円 (若狭ぐじ)、竹の子づくしコース9,900円、竹の子会席コース12,100円、ランチの蓮根饅頭御膳3,960円、10月・11月限定の炙り鱧の出汁茶漬け4,180円、鱧しゃぶの出汁は焼いた鱧の頭と背骨、昆布、九条ねぎ、2026年7月30日に関西テレビで紹介され予約が殺到、鱧は10月・11月が旬、9月28日〜10月1日は夏季休暇、昼11:30〜14:30 (L.O. 13:00)、夜17:00〜21:00 (L.O. 19:00)、月曜休み、一階席最大15名、お座敷は現在クローズ、カード・電子マネー・QR可、2019年11月から全席禁煙。食べログ: 日本料理・すっぽん、下京区河原町通四条下ル稲荷町319、夜 L.O. 20:00、30席、サービス料なし、子供可、5月〜11月は鱧しゃぶの通販・持ち帰り。口コミ (2025年9月〜2026年10月、英語): 鱧の落とし、鱧の造り、照り焼き、天ぷら、鱧鍋、押し寿司、卵豆腐、湯葉、焼き鱧の胡瓜と茗荷、9,900円のコース、店主夫婦、昭和の雰囲気、サービスがもう少しという声、おしぼりの香りが強い。',
      confidence: 'medium', sources: [TB, SITE, KOD, ACC, R + 'B488001240/', R + 'B531004667/', R + 'B533666990/', R + 'B534226125/', R + 'B534330671/', R + 'B535354932/', R + 'B536391928/', R + 'B537144883/', R + 'B537219950/', R + 'B538404968/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses by season; book ahead, especially since the July 2026 TV feature.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区河原町通四条下ル稲荷町319',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with a September 2026 notice; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002724, 135.769681); cross-checked: GSI 京都府京都市下京区稲荷町319番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, KOD],
    price_note: 'Prices from the official site, which posts menus by season.', last_checked: TODAY, items: [
      it('鱧しゃぶコース', '', 'Hamo shabu course', '¥12,100', 'Course', 'ask', 'no', '', 'hamo'),
      it('季節限定 鱧旬菜御膳', '', 'Seasonal hamo set, nine dishes', '¥9,900', 'Course', 'ask', 'no', '', 'hamo'),
      it('グジづくしコース', '', 'Wakasa guji course, eight dishes (winter)', '¥15,400', 'Course', 'ask', 'no', '', 'guji'),
      it('竹の子づくしコース', '', 'Bamboo-shoot course (spring)', '¥9,900', 'Course', 'ask', 'no', '', 'takenoko'),
      it('炙り鱧の出汁茶漬け', '', 'Seared hamo dashi chazuke (October–November lunch, 10 a day)', '¥4,180', 'Lunch', 'ask', 'no', '', 'chazuke'),
      it('蓮根饅頭御膳', '', 'Lotus-root manju set (lunch)', '¥3,960', 'Lunch', 'ask', 'no', '', 'lunch_set'),
    ] }, {
    cuisine: '昭和九年創業、鱧・ぐじ・すっぽんの京の割烹 (公式サイト)・来店後に骨切りする鱧: 鱧しゃぶコース12,100円、季節限定鱧旬菜御膳9品9,900円 (公式サイト、2026年8月)・冬の若狭ぐじのグジづくしコース8品15,400円、春の竹の子のコース9,900円・12,100円 (公式サイト)・ランチは蓮根饅頭御膳3,960円、10〜11月の炙り鱧の出汁茶漬け4,180円など (公式サイト)・これまでの料理: 鱧の落としと梅肉、焼き鱧の胡瓜と茗荷、鱧の天ぷら、穴子や鱧の押し寿司、卵豆腐、湯葉 (2025〜2026年の口コミ)・京都の日本酒 (2026年8月)',
    neighborhood: '四条のすぐ南、河原町通から入る。京都河原町駅から徒歩2分',
    gf_detail: '予約時に要確認。グルテンの情報なし。鱧のコースには天ぷらや醤油・ポン酢の料理があり、冬のぐじのコースにはみじん粉揚げもある (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鱧、ぐじ、すっぽんのコースで、鍋は鱧の骨と昆布の出汁 (公式サイト)。',
    notes: '[鱧の割烹・河原町四条、昭和九年から] 河原町から路地を入った三代続く割烹。鱧は客が来てから骨切りし、鱧しゃぶの出汁は代々相伝。夏から秋は鱧のコース (梅肉の落とし、天ぷら、鍋、押し寿司)、冬は若狭ぐじとすっぽん。鱧しゃぶコース12,100円。2026年7月のテレビ放映以来予約が多い。2026年8月にはサービスが店の雰囲気に追いつかず、おしぼりの香りが強すぎたという声も。月曜休み。',
  });
}

save();
