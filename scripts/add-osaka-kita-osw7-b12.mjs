// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 12.
//   + 太鼓寿し Taiko Zushi (cheap, lively machi-zushi counter west of Nishinakajima-Minamigata, nigiri by the piece)
//   + すしまる屋 東三国店 Sushi Maru Ya Higashimikuni ten (sushi izakaya by Higashimikuni, open to 2 am, since 2004)
//   + イタリアンバル ストーリア Italian Bar Storia (small Italian bar, ¥900 lunch pasta, open to 1 am)
//   + 悠楽 Yuraku (Omi-beef yakiniku at night, big tonjiru set lunches by day)
//   - skipped 27063116 餃子の王将 西中島店: chain already in data (Gyoza no Ohsho; 餃子の王将 心斎橋店 in data/osaka.json).
//   Lane check: every id above is even. Taken in queue order (nearest first) after the chain skip.
//   Chain check: none of the four names another shop on Tabelog; a web search on 2026-11-02 for すしまる屋 found no other branch.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   open_late per Greg's 2026-11-02 ruling (true when the shop closes after 22:00).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27063116', 'chain already in data: Gyoza no Ohsho (餃子の王将 心斎橋店 in data/osaka.json)');

// ================================================================ 太鼓寿し
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27001872/'; const R = TB + 'dtlrvwlst/';
  const N = day(['17:00', '00:00']);
  put({
    id: 'osaka_taiko_zushi_nishinakajima', name: '太鼓寿し (Taiko Zushi)', category: 'OMNI',
    lat: 34.726292, lng: 135.496484, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Nigiri come with soy sauce (soy sauce usually contains wheat), and tempura, chawanmushi and butter sautés are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood counter.',
    hours_raw: 'Mon–Sat 17:00–24:00; closed Sunday and holidays, Obon (13–17 August) and New Year (30 December–4 January) (Tabelog). Reservations accepted (Tabelog). Cash only: no cards, e-money or QR (Tabelog). 20 seats: a counter and two tables or a tatami room at the back (Tabelog; 2024–2025). Tabelog says all seats became non-smoking from April 2025, but diners could use an IQOS (April 2026) and found smoking allowed (September 2026). Busy most evenings; a Saturday at 20:00 was full (August 2026).',
    hours: { 0: N, 1: N, 2: N, 3: N, 4: N, 5: N }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: '西中島4-7-10, ground floor of ローズコーポ — 5 min west of Nishinakajima-Minamigata Stn and Hankyu Minamikata (Tabelog)',
    cuisine: 'Neighbourhood sushi by the piece, plus side dishes (2024–2026) · nigiri prices, September 2025: egg ¥82, grilled horse mackerel and yellowtail ¥110, conger eel ¥165, shrimp, tuna and mackerel (raw or seared) ¥220, flounder fin, red clam and salmon roe ¥275, eel ¥330, sea urchin ¥385; small rises since (February 2026) · mackerel, sweet shrimp ("Akashi" shrimp) and sprouted green onion praised (May, August and September 2026) · rolls: fatty tuna with takuan, yamagobo (2025–2026) · sides: grilled turban shell, butter-sautéed scallop and asparagus, tempura, shrimp tempura, chawanmushi, firefly squid, grilled fish (2025–2026) · sake, shochu (Tabelog) · about ¥5,000 a head with drinks (September 2026)',
    website: null, gmaps: gm('太鼓寿し 西中島4-7-10'), menu_url: null,
    notes: "[Sushi · Nishinakajima, cheap and cheerful machi-zushi] A lively neighbourhood sushi counter five minutes west of Nishinakajima-Minamigata, with a homely tatami room at the back, where nigiri are priced by the piece from about ¥80 to ¥385 (September 2025) and the regulars order fast. The chef, the chef's brother and the staff keep up a friendly patter (January 2026), and diners single out the mackerel, the big sweet shrimp and the sprouted green onion; there are side dishes too, from turban shell to tempura and chawanmushi. Eating and drinking well comes to about ¥5,000 a head (2026). It fills up in the evening. Cash only. Tabelog says non-smoking since April 2025, but 2026 diners still saw smoking. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), the chef\'s brother and staff'], origin: null, background: 'No shop description on Tabelog. Reviewers: the chef, the chef\'s brother and the staff "were all very friendly" (January 2026); "The two owners were friendly, creating a welcoming atmosphere" (August 2026); a diner on a fourth visit was recognised at once (February 2026).', philosophy: null, specialty: 'Nigiri by the piece; sweet shrimp; mackerel.',
      anecdotes: [
        { text: '"Especially the mackerel, with such rich flavor for just JPY 75. I can\'t go back to high-end places after this." — September 2026.', source: R + 'B536039808/' },
        { text: '"I always order the sweet shrimp, which is thick, large, and absolutely delicious!" — February 2026, a fourth visit.', source: R + 'B517868755/' },
        { text: '"We were led to a cozy, homey room at the back of the counter." — July 2024.', source: R + 'B490295692/' },
      ],
      japanese_sources_summary: '食べログ: 太鼓寿し、寿司・海鮮・居酒屋、大阪市淀川区西中島4-7-10 ローズコーポ 1F、西中島南方駅と阪急 南方駅から西へ5分、月〜土17:00〜24:00、日・祝休み、お盆 (8月13日〜17日) と年末年始 (12月30日〜1月4日) 休み、予約可、現金のみ、20席 (奥にテーブル2つ)、2025年4月から全席禁煙。口コミ(2024年7月〜2026年9月): 1貫ずつの値段 (2025年9月: 玉子82円、アジのあぶりとハマチ110円、穴子165円、エビ、マグロ、サバ220円、エンガワ、赤貝、いくら275円、うなぎ330円、ウニ385円)、少し値上がり、サバ、甘エビ、めねぎがおいしい、トロたく、山ごぼう巻き、サザエのつぼ焼き、ホタテとアスパラのバター焼き、天ぷら、エビの天ぷら、茶わん蒸し、ホタルイカ、焼き魚、日本酒、焼酎、大将と兄弟とスタッフが気さく、奥に座敷、ひとり約5,000円、夜は満席に、2026年もたばこが吸えたという声。',
      confidence: 'medium', sources: [TB, R + 'B442662506/', R + 'B490295692/', R + 'B498896275/', R + 'B501977930/', R + 'B517868755/', R + 'B526826296/', R + 'B528203370/', R + 'B536039808/', R + 'B536501133/', R + 'B536892453/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order nigiri piece by piece at the counter; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-7-10 ローズコーポ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目7番10号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B442662506/', R + 'B536039808/'],
    price_note: 'Per-piece prices from a September 2025 review; one September 2026 diner paid ¥75 for mackerel.', last_checked: TODAY, items: [
      it('', '', 'Tuna nigiri (per piece)', '¥220', 'Nigiri', 'ask', 'no', 'September 2025.', 'maguro'),
      it('', '', 'Mackerel nigiri (per piece)', '¥220', 'Nigiri', 'ask', 'no', 'September 2025; ¥75 per a September 2026 diner.', 'saba'),
      it('', '', 'Sea urchin nigiri (per piece)', '¥385', 'Nigiri', 'ask', 'no', 'September 2025.', 'uni'),
      it('', '', 'Egg nigiri (per piece)', '¥82', 'Nigiri', 'ask', 'no', 'September 2025.', 'tamago'),
      it('', '', 'Sweet shrimp nigiri', '', 'Nigiri', 'ask', 'no', 'February, May and August 2026.', 'amaebi'),
    ] }, {
    cuisine: '1貫ずつ頼む町の寿司と一品料理 (2024〜2026年)・2025年9月の握りの値段: 玉子82円、アジのあぶりとハマチ110円、穴子165円、エビ、マグロ、サバ (生かあぶり) 220円、エンガワ、赤貝、いくら275円、うなぎ330円、ウニ385円。その後少し値上がり (2026年2月)・サバ、大きな甘エビ、めねぎが好評 (2026年5月、8月、9月)・巻き物: トロたく、山ごぼう (2025〜2026年)・一品: サザエのつぼ焼き、ホタテとアスパラのバター焼き、天ぷら、エビの天ぷら、茶わん蒸し、ホタルイカ、焼き魚 (2025〜2026年)・日本酒、焼酎 (食べログ)・飲んで食べてひとり約5,000円 (2026年9月)',
    neighborhood: '西中島4-7-10、ローズコーポの1階。西中島南方駅と阪急 南方駅から西へ5分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。握りは醤油で食べ (醤油はたいてい小麦を含む)、天ぷら、茶わん蒸し、バター焼きもある。',
    vegan_detail: 'ヴィーガンではありません。寿司と魚介の店。',
    notes: '[寿司・西中島、安くてにぎやかな町の寿司] 西中島南方駅から西へ5分の、にぎやかな町の寿司のカウンターで、奥には家庭的な座敷。握りは1貫ずつで約80円から385円 (2025年9月)、常連はどんどん頼む。大将とその兄弟、スタッフが気さくに話してくれて (2026年1月)、サバ、大きな甘エビ、めねぎが好評。サザエから天ぷら、茶わん蒸しまで一品もある。しっかり飲んで食べてひとり約5,000円 (2026年)。夜は満席になる。現金のみ。食べログでは2025年4月から禁煙だが、2026年もたばこが吸えたという声。日曜休み。',
  });
}

// ================================================================ すしまる屋 東三国店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27006986/'; const R = TB + 'dtlrvwlst/';
  const N = day(['17:00', '02:00']);
  put({
    id: 'osaka_sushimaruya_higashimikuni', name: 'すしまる屋 東三国店 (Sushi Maru Ya Higashimikuni ten)', category: 'OMNI',
    lat: 34.740775, lng: 135.497669, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi and sashimi come with soy sauce (usually wheat-containing), and tempura, kara-age, croquettes and gratin are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood izakaya. Tabelog\'s feature list ticks "vegetarian options", but no vegetarian dish is named.',
    hours_raw: 'Daily 17:00–02:00 (last order 01:30) (Tabelog). Reservations accepted; no seat requests in December (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Service charge: the English listing says one is added, but its original Japanese reads 無し (none) (Tabelog). 57 seats including sunken-kotatsu seats, a counter and private rooms for 10–20; outdoor tables (October 2025); smoking allowed (Tabelog). A seven-for-five sashimi deal through Tabelog bookings (September 2025, April 2026). Opened 17 February 2004 (Tabelog).',
    hours: { 0: N, 1: N, 2: N, 3: N, 4: N, 5: N, 6: N }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '東三国4-3-1, ground floor of グロリアビル — 2 min from Exit 5 of Higashimikuni Stn (Tabelog)',
    cuisine: 'Sushi izakaya (Tabelog) · banquet courses with two hours of drinks: "Omakase" ¥5,000 (July 2025), "Utage" ¥5,500 (March 2026), with the house eel sushi under crab and salmon roe, eight small starters, five kinds of sashimi, a Hamamatsu shirasu and tofu salad, tempura, butter-grilled scallops and mushrooms, three nigiri and red miso soup (July 2025) · sashimi platters, thick-cut (2025–2026) · nigiri: medium-fatty tuna, yellowtail, sweet shrimp, sea urchin, salmon roe, nodoguro (2025) · crab gratin with crab miso and scallops, kept hot over a candle (August 2025) · nanban kara-age, honey potatoes, shrimp and lotus-root fry (September 2025); manganji pepper tempura, crab cream croquettes, agedashi tofu, grilled eel (October 2025); fresh oysters (May 2026); conger eel tempura (June 2026); a very large shrimp tempura (2025–2026) · sake and shochu lists (Tabelog)',
    website: null, gmaps: gm('すしまる屋 東三国店'), menu_url: null,
    notes: "[Sushi izakaya · Higashimikuni, fish until 2 am] A roomy sushi izakaya by Higashimikuni Station, open since 2004 and serving until 2 am every night, with a counter, sunken-kotatsu tables, private rooms and a few outdoor tables. It is a favourite for office parties: two-hour all-you-can-drink courses at ¥5,000–5,500 open with the house eel sushi under crab and salmon roe and run through sashimi, tempura and butter-grilled scallops to nigiri and red miso soup, with the group's name printed on the menu (2025–2026). À la carte, people order thick-cut sashimi, a huge shrimp tempura and a crab gratin kept hot over a candle. About ¥6,000–9,000 a head with drinks (2026). Staff are warm, and one diner left with a small gift (June 2026). Smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog beyond booking notes; opened 17 February 2004 (Tabelog). Reviewers note a menu printed with the booking name (July 2025), warm service (2025–2026) and a small parting gift (June 2026).', philosophy: null, specialty: 'Banquet courses; sashimi platters; shrimp tempura.',
      anecdotes: [
        { text: '"… a menu with the reservation name printed on it again." — July 2025, the JPY 5,000 Omakase banquet course.', source: R + 'B483162188/' },
        { text: '"It\'s served with a personal stove (heated by a candle), so I could enjoy it piping hot." — August 2025, the crab gratin.', source: R + 'B513412167/' },
        { text: '"I was looking for a sushi restaurant open late at night and ended up here." — December 2025.', source: R + 'B519988377/' },
      ],
      japanese_sources_summary: '食べログ: すしまる屋 東三国店、寿司・鍋・居酒屋、大阪市淀川区東三国4-3-1 グロリアビル 1F、Midosuji 線 東三国駅5番出口から徒歩2分、毎日17:00〜翌2:00 (L.O.1:30)、予約可 (12月は席の指定不可)、カード可、電子マネー・QR 不可、サービス料: 無し、57席 (掘りごたつ、カウンターなど)、10〜20名の個室、喫煙可、飲み放題、ベジタリアンメニューありの表示、2004年2月17日オープン。口コミ(2024年5月〜2026年9月): 2時間飲み放題の宴会コース5,000円と5,500円 (名物のうなぎの寿司にカニといくら、前菜8種、刺身5種、Hamamatsu のしらすと豆腐のサラダ、天ぷら、ホタテときのこのバター焼き、握り3貫、赤だし)、予約名入りのお品書き、厚切りの刺身、中トロ、ハマチ、甘エビ、ウニ、いくら、のどぐろ、ろうそくの火で温めるカニグラタン、南蛮の kara-age、はちみつポテト、エビとレンコンの揚げ物、万願寺とうがらしの天ぷら、カニクリームコロッケ、揚げ出し豆腐、うなぎ、生ガキ、ハモの天ぷら、大きなエビの天ぷら、食べログの予約で刺身5種が7種に、外のテーブル、ひとり約6,000〜9,000円、帰りに小さなおみやげ。',
      confidence: 'medium', sources: [TB, R + 'B483162188/', R + 'B513412167/', R + 'B513536600/', R + 'B515753141/', R + 'B516406179/', R + 'B519988377/', R + 'B525503502/', R + 'B529748651/', R + 'B530728972/', R + 'B534915939/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses for groups, counter for solo diners; book through Tabelog for a sashimi deal. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国4-3-1 グロリアビル １Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国四丁目3番1号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B483162188/', R + 'B513412167/'],
    price_note: 'Course prices from July 2025 and March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', '"Utage" banquet course with two hours of drinks', '¥5,500', 'Courses', 'ask', 'no', 'March 2026.', 'utage'),
      it('', '', '"Omakase" banquet course with two hours of drinks', '¥5,000', 'Courses', 'ask', 'no', 'July 2025.', 'omakase'),
      it('', '', 'Eel sushi with crab and salmon roe', '', 'Sushi', 'ask', 'no', 'July 2025.', 'unagi_sushi'),
      it('', '', 'Crab gratin', '', 'Dishes', 'no', 'no', 'August 2025.', 'kani_gratin'),
      it('', '', 'Shrimp tempura', '', 'Dishes', 'no', 'no', 'October 2025; September 2026.', 'ebi_ten'),
    ] }, {
    cuisine: '寿司の居酒屋 (食べログ)・2時間飲み放題の宴会コース: 「Omakase」5,000円 (2025年7月)、「Utage」5,500円 (2026年3月)。名物のうなぎの寿司にカニといくら、前菜8種、刺身5種、Hamamatsu のしらすと豆腐のサラダ、天ぷら、ホタテときのこのバター焼き、握り3貫、赤だし (2025年7月)・厚切りの刺身の盛り合わせ (2025〜2026年)・握り: 中トロ、ハマチ、甘エビ、ウニ、いくら、のどぐろ (2025年)・カニみそとホタテのカニグラタン、ろうそくの火で温めて (2025年8月)・南蛮の kara-age、はちみつポテト、エビとレンコンの揚げ物 (2025年9月)。万願寺とうがらしの天ぷら、カニクリームコロッケ、揚げ出し豆腐、うなぎ (2025年10月)。生ガキ (2026年5月)。ハモの天ぷら (2026年6月)。とても大きなエビの天ぷら (2025〜2026年)・日本酒と焼酎 (食べログ)',
    neighborhood: '東三国4-3-1、グロリアビルの1階。東三国駅5番出口から徒歩2分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。寿司と刺身は醤油で (たいてい小麦を含む)、天ぷら、kara-age、コロッケ、グラタンもある。',
    vegan_detail: 'ヴィーガンではありません。寿司と魚介の居酒屋。食べログの特徴に「ベジタリアンメニューあり」とあるが、料理の名前は出てこない。',
    notes: '[寿司居酒屋・東三国、夜2時までの魚] 東三国駅のそばの広い寿司の居酒屋で、2004年から毎晩2時まで。カウンター、掘りごたつ、個室、外のテーブル席もある。会社の宴会に人気で、2時間飲み放題の5,000〜5,500円のコースは、名物のうなぎの寿司にカニといくらから始まり、刺身、天ぷら、ホタテのバター焼き、握り、赤だしまで。お品書きには予約の名前が入る (2025〜2026年)。単品なら厚切りの刺身、とても大きなエビの天ぷら、ろうそくの火で温めるカニグラタン。飲んでひとり約6,000〜9,000円 (2026年)。スタッフはあたたかく、帰りに小さなおみやげをもらった人も (2026年6月)。喫煙可。',
  });
}

// ================================================================ イタリアンバル ストーリア
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27088582/'; const R = TB + 'dtlrvwlst/';
  const W = day(['12:00', '14:00'], ['18:00', '01:00']);
  put({
    id: 'osaka_italian_bar_storia_nishinakajima', name: 'イタリアンバル ストーリア (Italian Bar Storia)', category: 'OMNI',
    lat: 34.726251, lng: 135.496707, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat pasta and pizza make up most of the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pasta with cream, cheese, seafood and mentaiko; meat dishes.',
    hours_raw: 'Mon–Fri 12:00–14:00 (last order 13:30) and 18:00–01:00; Sat 18:00–01:00; closed Sunday (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR payments (Tabelog). 14 seats: 8 at the counter and 6 at tables; smoking allowed; free Wi-Fi; takeaway; all-you-can-drink plans (Tabelog; February 2026). Opened 1 October 2015 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: day(['18:00', '01:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島4-7-8, 2F of サンコープラザ — 3 min from Nishinakajima-Minamigata Stn (Tabelog)',
    cuisine: 'Italian bar food (2024–2026) · lunch pasta ¥900, large free (October 2026): mentaiko and mushroom cream (January 2025, October 2026); chilled seafood tomato pasta with thin noodles and bonito flakes (September 2025, July 2026) · lunch glass of wine ¥600 (October 2026) · evening: three-kind antipasto with curried soybeans, Margherita with a thin crust on request (July 2025); roast black wagyu with red-wine sauce, pizza Siciliana with anchovy (December 2024); shrimp and mushroom Genovese, salad, quiche (December 2025); oysters escargot-style, meat dishes (February 2026); butter pumpkin potage, spare ribs (October 2026) · a wide drinks list (May 2024)',
    website: null, gmaps: gm('イタリアンバル ストーリア 西中島'), menu_url: null,
    notes: "[Italian · Nishinakajima, a small bar open till 1 am] A 14-seat Italian bar on a second floor three minutes from Nishinakajima-Minamigata, open since 2015, with lunch on weekdays and dinner until 1 am. Lunch is a ¥900 pasta with a free large portion, often the mentaiko and mushroom cream or, in summer, a chilled seafood tomato pasta with bonito flakes, and a ¥600 glass of wine (2025–2026). Evenings are for small plates and wine: curried soybeans in the antipasto, oysters done like escargot, roast wagyu, spare ribs, a butter-pumpkin potage, and thin-crust pizza (2024–2026). The owner will halve a salad on request (December 2025) and suggest drinks. Smoking is allowed. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and staff'], origin: null, background: 'No shop description on Tabelog; opened 1 October 2015 (Tabelog). Reviewers: ask the master for drink recommendations (May 2024); the owner made a half-size salad on request (December 2025).', philosophy: null, specialty: 'Lunch pasta; antipasti and wine at night.',
      anecdotes: [
        { text: '"Pasta for JPY 900!! I also added some wine because it was such a great deal." — October 2026, lunch.', source: R + 'B536901207/' },
        { text: '"To avoid having too much food, I spoke with the owner and requested a half-size salad." — December 2025.', source: R + 'B519964598/' },
        { text: '"The oysters prepared escargot-style were also fantastic!" — February 2026.', source: R + 'B522326847/' },
      ],
      japanese_sources_summary: '食べログ: イタリアンバル ストーリア、イタリアン、大阪市淀川区西中島4-7-8 サンコープラザ 2F、Midosuji 線 西中島南方駅から徒歩3分、月〜金12:00〜14:00 (L.O.13:30)、18:00〜翌1:00、土18:00〜翌1:00、日曜休み、予約可、カード・電子マネー・QR 可、14席 (カウンター8、テーブル6)、喫煙可、Wi-Fi、テイクアウト、飲み放題、2015年10月1日オープン。口コミ(2024年5月〜2026年10月): 昼のパスタ900円 (大盛り無料)、明太子ときのこのクリーム、かつお節をのせた冷たい魚介のトマトのパスタ、昼のグラスワイン600円、夜は前菜3種 (カレー味の大豆)、薄い生地のマルゲリータ、黒毛和牛のロースト、アンチョビのピザ、エビときのこのジェノベーゼ、サラダ、キッシュ、カキのエスカルゴ風、かぼちゃのバターのポタージュ、スペアリブ、飲み物が豊富、マスターにおすすめを聞いて、店主がサラダを半分にしてくれた、喫煙可、PayPay 可。',
      confidence: 'medium', sources: [TB, R + 'B486603182/', R + 'B497541614/', R + 'B499731023/', R + 'B509877818/', R + 'B513355803/', R + 'B519964598/', R + 'B522326847/', R + 'B531766194/', R + 'B536892844/', R + 'B536901207/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A small counter bar; ask the owner for drink suggestions. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-7-8 サンコープラザ 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目7番8号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536901207/', R + 'B499731023/'],
    price_note: 'Lunch prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch pasta (large free)', '¥900', 'Lunch', 'no', 'no', 'October 2026.', 'lunch_pasta'),
      it('', '', 'Mentaiko and mushroom cream pasta', '', 'Pasta', 'no', 'no', 'January 2025; October 2026.', 'mentai_cream'),
      it('', '', 'Glass of wine at lunch', '¥600', 'Drinks', '', '', 'October 2026.', 'lunch_wine'),
      it('', '', 'Spare ribs', '', 'Evening', 'ask', 'no', 'October 2026.', 'spare_ribs'),
    ] }, {
    cuisine: 'イタリアンのバル料理 (2024〜2026年)・昼のパスタ900円、大盛り無料 (2026年10月): 明太子ときのこのクリーム (2025年1月、2026年10月)。細い麺にかつお節をのせた冷たい魚介のトマトのパスタ (2025年9月、2026年7月)・昼のグラスワイン600円 (2026年10月)・夜: カレー味の大豆の入った前菜3種、頼めば薄い生地のマルゲリータ (2025年7月)。黒毛和牛のローストの赤ワインソース、アンチョビのピザ・シチリアーナ (2024年12月)。エビときのこのジェノベーゼ、サラダ、キッシュ (2025年12月)。カキのエスカルゴ風、肉料理 (2026年2月)。かぼちゃのバターのポタージュ、スペアリブ (2026年10月)・飲み物が豊富 (2024年5月)',
    neighborhood: '西中島4-7-8、サンコープラザの2階。西中島南方駅から徒歩3分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。メニューのほとんどが小麦のパスタとピザ。',
    vegan_detail: 'ヴィーガンではありません。クリーム、チーズ、魚介、明太子のパスタと肉料理。',
    notes: '[イタリアン・西中島、夜1時までの小さなバル] 西中島南方駅から3分のビルの2階にある14席のイタリアンバルで、2015年から。平日は昼もあり、夜は1時まで。昼は大盛り無料の900円のパスタで、明太子ときのこのクリームや、夏はかつお節をのせた冷たい魚介のトマトのパスタ、グラスワインは600円 (2025〜2026年)。夜は小皿とワイン: カレー味の大豆の前菜、エスカルゴ風のカキ、和牛のロースト、スペアリブ、かぼちゃのバターのポタージュ、薄い生地のピザ (2024〜2026年)。頼めばサラダを半分にしてくれて (2025年12月)、飲み物もすすめてくれる。喫煙可。日曜休み。',
  });
}

// ================================================================ 悠楽
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27087804/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '13:30'], ['18:00', '00:00']); const E = day(['18:00', '00:00']);
  put({
    id: 'osaka_yuraku_nishinakajima', name: '悠楽 (Yuraku)', category: 'OMNI',
    lat: 34.725997, lng: 135.497454, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Yakiniku comes with tare or salt; the lunch sets are kara-age, fried horse mackerel and tonjiru.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku and offal restaurant; the lunch tonjiru is full of pork.',
    hours_raw: 'Mon–Fri 11:30–13:30 and 18:00–24:00; Sat and Sun 18:00–24:00; closing days not fixed (Tabelog); lunch days may be irregular (August 2026). Reservations accepted (Tabelog). Cash only: no cards, e-money or QR (Tabelog). 20 seats: a counter of six and tables; smoking allowed; free Wi-Fi and two TVs for sports (Tabelog). A line at weekday lunch (2026).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: '西中島4-8-30, ground floor of 山よしビル — 2–3 min from Nishinakajima-Minamigata Stn (Tabelog)',
    cuisine: 'Yakiniku of Omi beef at night, set lunches by day (Tabelog) · night: Omi beef cuts, the popular "jou harami" (Tabelog); a ¥5,000 course with all-you-can-drink, from tongue to kalbi and offal, with kimchi and rice (September 2025); outside skirt (September 2026) · lunch sets about ¥1,000 with rice refills, a rolled omelette, salad and a small side: kara-age (spicy, or with homemade tartar) with tonjiru, fried horse mackerel with tonjiru (2025–2026); tonjiru instead of miso soup +¥50; a big bowl of pork-heavy tonjiru, the reason many come (2025–2026) · prices: tonjiru and kara-age set ¥890 (January 2026), ¥1,000 (May and October 2026); spicy kara-age set ¥950 (June 2026)',
    website: null, gmaps: gm('悠楽 焼肉 西中島4-8-30'), menu_url: null,
    notes: "[Yakiniku · Nishinakajima, Omi beef by night, tonjiru by day] A small yakiniku restaurant near Nishinakajima-Minamigata that grills Omi beef in the evening, with TVs on for big matches (Tabelog), but is best known at lunch for its tonjiru: a bowl bigger than the rice, crammed with pork and vegetables, in a ¥1,000 set with kara-age or fried horse mackerel, a rolled omelette and free rice refills (2025–2026). Office workers line up for it; three women ran the lunch on a July 2026 visit. At night there is a ¥5,000 all-you-can-drink course from tongue through kalbi to offal (September 2025). Cash only; smoking allowed. Lunch days can be irregular, so check.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Per the Tabelog listing: Omi beef, "one of Japan\'s top three wagyu", with the popular "Jou Harami"; a good-value lunch; counter and tables, free Wi-Fi, two TVs for sports, surprise celebrations by arrangement. A July 2026 diner saw three women running lunch.', philosophy: null, specialty: 'Tonjiru set lunches; Omi beef yakiniku.',
      anecdotes: [
        { text: '"The bowl of pork miso soup was larger than the rice bowl, filled to the brim with plenty of ingredients." — July 2026, the tonjiru and fried horse mackerel set for JPY 1,000.', source: R + 'B537461661/' },
        { text: '"Instead of miso soup, I recommend adding the Pork Soup for just an extra JPY 50." — October 2026.', source: R + 'B497518849/' },
        { text: '"For the JPY 5000 course, we had everything from tongue to kalbi and horumon." — September 2025, a group of six.', source: R + 'B513032679/' },
      ],
      japanese_sources_summary: '食べログ: 悠楽、焼肉・ホルモン、大阪市淀川区西中島4-8-30 山よしビル 1F、西中島南方駅から徒歩2〜3分、月〜金11:30〜13:30、18:00〜24:00、土日18:00〜24:00、不定休、予約可、現金のみ、20席 (カウンター6、テーブル)、喫煙可、Wi-Fi、テレビ2台でスポーツ観戦。店の紹介: 日本三大和牛の Omi beef の焼肉、人気の「Jou Harami」、お得なランチ。口コミ(2024年12月〜2026年10月): 昼は定食屋 (店の看板は「焼肉 ゆうらく」)、とん汁と kara-age の定食890円〜1,000円、辛い kara-age 定食950円、タルタルの kara-age、とん汁とアジフライの定食、みそ汁をとん汁にすると50円、ごはんおかわり自由、だし巻き、サラダ、小鉢、ごはんよりも大きなとん汁の器、豚肉と野菜がたっぷり、昼は行列、女性3人が切り盛り、夜は飲み放題つき5,000円のコース (タンからカルビ、ホルモン、キムチ、ごはん)、ハラミ、煙のこもる店内、昼は不定期という声も。',
      confidence: 'medium', sources: [TB, R + 'B430037783/', R + 'B497518849/', R + 'B506320058/', R + 'B510865177/', R + 'B512651264/', R + 'B513032679/', R + 'B535207075/', R + 'B535270042/', R + 'B536988545/', R + 'B537461661/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch sets with a choice of main; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-8-30 山よしビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the shop\'s own description; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目8番30号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537461661/', R + 'B430037783/', R + 'B513032679/'],
    price_note: 'Prices from 2025–2026 reviews, each dated in its note.', last_checked: TODAY, items: [
      it('', '', 'Tonjiru and kara-age set', '¥1,000', 'Lunch', 'no', 'no', 'May and October 2026; ¥890 in January 2026.', 'tonjiru_karaage'),
      it('', '', 'Tonjiru and fried horse mackerel set', '¥1,000', 'Lunch', 'no', 'no', 'July 2026.', 'tonjiru_aji'),
      it('', '', 'Spicy kara-age set', '¥950', 'Lunch', 'no', 'no', 'June 2026.', 'kara_karaage'),
      it('', '', 'Yakiniku course with all-you-can-drink', '¥5,000', 'Evening', 'ask', 'no', 'September 2025.', 'yakiniku_course'),
    ] }, {
    cuisine: '夜は Omi 牛の焼肉、昼は定食 (食べログ)・夜: Omi 牛の各部位、人気のJou Harami (食べログ)。タンからカルビ、ホルモン、キムチ、ごはんまでの飲み放題つき5,000円のコース (2025年9月)。ハラミ (2026年9月)・昼の定食は約1,000円で、ごはんおかわり自由、だし巻き、サラダ、小鉢つき: kara-age (辛いものや自家製タルタル) ととん汁、アジフライととん汁 (2025〜2026年)。みそ汁をとん汁にすると50円増し。豚肉たっぷりの大きなとん汁がお目当ての人が多い (2025〜2026年)・値段: とん汁と kara-age の定食890円 (2026年1月)、1,000円 (2026年5月と10月)。辛い kara-age の定食950円 (2026年6月)',
    neighborhood: '西中島4-8-30、山よしビルの1階。西中島南方駅から徒歩2〜3分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。焼肉はたれか塩で、昼の定食は kara-age、アジフライ、とん汁。',
    vegan_detail: 'ヴィーガンではありません。焼肉とホルモンの店で、昼のとん汁は豚肉たっぷり。',
    notes: '[焼肉・西中島、夜は Omi 牛、昼はとん汁] 西中島南方駅の近くの小さな焼肉の店で、夜は Omi 牛を焼き、大きな試合の日はテレビも (食べログ)。でもよく知られているのは昼のとん汁: ごはんより大きな器に豚肉と野菜がぎっしりで、kara-age かアジフライ、だし巻き、ごはんおかわり自由の1,000円の定食 (2025〜2026年)。会社員が並び、2026年7月は女性3人で昼を回していた。夜はタンからカルビ、ホルモンまでの飲み放題つき5,000円のコース (2025年9月)。現金のみ。喫煙可。昼は不定期のこともあるので確認を。',
  });
}

save();
