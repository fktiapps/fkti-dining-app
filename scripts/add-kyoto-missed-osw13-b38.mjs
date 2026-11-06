// Kyoto priority (kyoto-missed), worker osw13, batch 38 — lane: Tabelog id mod 6 = 0.
// Core: ELOVE, 旬の料理とおばんざい つぼみ. Notable: 祇園 なん波, 割烹 市川.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-38');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ELOVE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26036532/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.elove-kyoto.com/';
  const LUNCH = 'https://www.elove-kyoto.com/lunch.html';
  const DINNER = 'https://www.elove-kyoto.com/dinner.html';
  const STORY = 'https://www.elove-kyoto.com/story.html';
  const GROUP = 'https://www.ushinohone.com/all_top/recruit.html';
  const H = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_elove', name: 'ELOVE (エラブ)', category: 'OMNI',
    lat: 35.004206, lng: 135.762671, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; the lunch sets come with house focaccia (or multigrain rice with the hamburg steak), and pasta is a course; the rest of the courses are vegetables, fish and meat (official site).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetables lead every dish and Tabelog lists vegetarian options, but the set courses include fish, venison, boar or wagyu, and desserts include a white-miso tiramisu (official site; 2026 reviews).',
    hours_raw: 'Official site: lunch 11:30–15:00 (L.O. 13:30), dinner 17:00–22:00 (L.O. 21:30), irregular closing days. Tabelog: dinner food L.O. 21:00, drinks 21:30; lunch in two seatings, 90 minutes when busy; dinner 2.5 hours when busy; bookings after 21:00 by phone; Christmas Eve and Day course only, in two seatings. Same-day cancellation may be charged 100% (official site). 30 table seats on two floors; private hire 12–30 (official site). Non-smoking; children welcome; take-out; cards and PayPay. No service charge listed on Tabelog. Opened 18 September 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Karasuma — 1 min walk from Hankyu Karasuma Stn, exit 16',
    cuisine: 'Vegetable-led Italian built on about 20 morning-picked vegetables from contract farms (official site) · lunch course of four dishes with a drink ¥2,500; pasta or risotto set ¥1,500; hamburg steak with vegetables ¥2,000 (official site) · dinner course with one drink ¥6,800, upgraded course ¥8,000, three-glass wine pairing ¥3,000 (official site) · natural wine, vegetable highballs and house sodas (official site) · deli and vegetable stand: salad bowl ¥1,000 (official site) · seen: choose-your-own grilled or fried vegetables, Spanish mackerel, clam risotto, white-miso sweet-potato tiramisu (2026 reviews)',
    website: SITE, gmaps: gm('ELOVE エラブ 京都 帯屋町'), menu_url: LUNCH,
    notes: '[Italian · Shijo-Karasuma, vegetables first] A two-floor wooden dining room by Karasuma Station where every course is built on the day’s vegetables from Kyoto contract farms — diners pick vegetables to be grilled or fried, and the white-miso tiramisu is a favourite. Lunch course ¥2,500; dinner course with a drink ¥6,800; a deli and a vegetable stand too. Several diners warn the portions are generous. One of six shops of the local Ushinohone group.',
    chef_bio: { chef_name: null, roles: ['One of six shops of the うしのほねグループ (株式会社セカンダイズ); the chef is not named in a source'], origin: null,
      background: 'Per the official site: Italian with vegetables as the star, using around 20 kinds of morning-picked vegetables sent daily by contract farmers, with a vegetable stand and a deli; the site lists named farms behind each dish. The group site (株式会社セカンダイズ) says the うしのほねグループ runs six shops of different styles in central Kyoto plus an online shop; ELOVE’s site lists the other five as sister shops. Opened 18 September 2021 (Tabelog).',
      philosophy: 'Official site: to pass on, in the restaurant’s own way, the vegetables producers want people to eat now — not the textbook season but "delicious at this moment".',
      specialty: 'Daily vegetable courses; white-miso and sweet-potato tiramisu.',
      anecdotes: [
        { text: 'An October 2026 diner found a thank-you card at the table addressed to the diner by name, and a menu dated for the day.', source: R + 'B536764208/' },
        { text: '"Even though there were just two of us, we ended up ordering too much." — September 2026, after choosing vegetables to be grilled or fried.', source: R + 'B537411469/' },
        { text: 'A clam risotto came with a vegetable the October 2026 diner had never heard of — "slimy" but crunchy.', source: R + 'B537448301/' },
      ],
      japanese_sources_summary: '公式サイト (elove-kyoto.com): 京都・四条烏丸の野菜が主役のイタリアン ELOVE (エラブ)、契約農家から毎朝届く朝採れ野菜を20種ほど、一般的な旬ではなく「今この瞬間、美味しい」こと、野菜の直売とデリカテッセン、ランチコース (全4品、ドリンク付き) 2,500円、季節の野菜と煮込みハンバーグ2,000円、本日のパスタ・リゾット各1,500円、ディナーコース (ワンドリンク付き) 6,800円、8,000円のコース、マリアージュセット3,000円、ナチュールワイン、野菜のハイボール、サラダボウル1,000円、グリルセット1,200円、価格は税込み、当日キャンセルは100%の場合あり、ランチ11:30〜15:00 (L.O. 13:30)、ディナー17:00〜22:00 (L.O. 21:30)、不定休、テーブル30席 (2階建て)、貸切12〜30名、系列店5軒。グループ (株式会社セカンダイズ): うしのほねグループは京都の中心部に業態の異なる6店舗とオンラインショップ。食べログ: イタリアン・カフェ・惣菜、中京区帯屋町585、ランチは2部制で混雑時90分、ディナーは混雑時2.5時間、21時以降の予約は電話、ベジタリアン対応、禁煙、子供可、テイクアウト、2021年9月18日オープン。口コミ (2026年1月〜10月、英語): 量が多い、野菜を選んで焼くか揚げる、鰆、あさりのリゾット、白味噌とさつまいものティラミス、名前入りのメッセージカード。',
      confidence: 'medium', sources: [TB, SITE, LUNCH, DINNER, STORY, GROUP, R + 'B521990172/', R + 'B527999338/', R + 'B535988811/', R + 'B536001292/', R + 'B536618537/', R + 'B536764208/', R + 'B537411469/', R + 'B537448301/', R + 'B537671250/', R + 'B537828403/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses with online booking; vegetables are chosen at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区帯屋町585',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004206, 135.762671); cross-checked: GSI 京都府京都市中京区帯屋町 (town only, lot 585 not found) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [LUNCH, DINNER, STORY],
    price_note: 'Prices from the official site, tax included.', last_checked: TODAY, items: [
      it('ランチコース', '', 'Lunch course (four dishes and a drink)', '¥2,500', 'Lunch', 'ask', 'ask', '', 'lunch_course'),
      it('本日のパスタ', '', 'Pasta of the day (with salad or soup, focaccia, small dessert)', '¥1,500', 'Lunch', 'no', 'ask', '', 'pasta'),
      it('本日のリゾット', '', 'Risotto of the day (with salad, focaccia, small dessert)', '¥1,500', 'Lunch', 'ask', 'ask', '', 'risotto'),
      it('季節の野菜と煮込みハンバーグ', '', 'Stewed hamburg steak with seasonal vegetables', '¥2,000', 'Lunch', 'ask', 'no', '', 'hamburg'),
      it('ディナーコース', '', 'Dinner course with one drink', '¥6,800', 'Dinner', 'ask', 'no', '', 'course'),
      it('', '', 'Upgraded dinner course', '¥8,000', 'Dinner', 'ask', 'no', '¥8,500 with one drink.', 'course'),
      it('マリアージュセット', '', 'Wine pairing, three glasses', '¥3,000', 'Drink', 'ask', 'ask', '', 'wine'),
      it('サラダボウル', '', 'Salad bowl (deli)', '¥1,000', 'Deli', 'ask', 'ask', 'Over ten vegetables; three kinds daily.', 'salad'),
    ] }, {
    cuisine: '契約農家から届く朝採れ野菜20種ほどが主役のイタリアン (公式サイト)・ランチコース (4品、ドリンク付き) 2,500円、パスタやリゾットのセット1,500円、季節の野菜と煮込みハンバーグ2,000円 (公式サイト)・ディナーコース (ワンドリンク付き) 6,800円、8,000円のコース、ワイン3杯のマリアージュ3,000円 (公式サイト)・ナチュールワイン、野菜のハイボール、自家製ソーダ (公式サイト)・デリと野菜の直売: サラダボウル1,000円 (公式サイト)・これまでの料理: 選んだ野菜を焼くか揚げる、鰆、あさりのリゾット、白味噌とさつまいものティラミス (2026年の口コミ)',
    neighborhood: '四条烏丸。阪急烏丸駅16番出口から徒歩1分',
    gf_detail: '予約時に要確認。グルテンの情報なし。ランチのセットには自家製フォカッチャ (ハンバーグは雑穀ごはんも)、パスタのコースもあり、ほかは野菜、魚、肉 (公式サイト)。',
    vegan_detail: '要確認。どの皿も野菜が主役で食べログにはベジタリアン対応とあるが、コースには魚、鹿、猪、和牛が入り、デザートには白味噌のティラミスもある (公式サイト、2026年の口コミ)。',
    notes: '[イタリアン・四条烏丸、野菜が主役] 烏丸駅すぐの木の2階建ての店。京都の契約農家のその日の野菜でコースを組み、客が選んだ野菜を焼くか揚げてくれる。白味噌のティラミスが人気。ランチコース2,500円、ドリンク付きのディナーコース6,800円。デリと野菜の直売も。量が多いので頼みすぎに注意という声が複数。地元のうしのほねグループの6店舗の一つ。',
  });
}

// ================================================================ 旬の料理とおばんざい つぼみ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26013336/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_obanzai_tsubomi_gion', name: '旬の料理とおばんざい つぼみ (Shun no Ryouri to Obanzai Tsubomi)', category: 'OMNI',
    lat: 35.001932, lng: 135.774909, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; a dashi-seasoned obanzai platter is served to everyone on sitting down, and the menu runs to tempura, fried oysters and udon (2023–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the obanzai platter served to every guest is seasoned with dashi, and the menu is fish, chicken, duck and horse (2023–2025 reviews).',
    hours_raw: 'Tabelog: Tue–Sun 17:30–24:00 (L.O. 23:30); closed Monday, and may close two Sundays a month for a two-day break; lunch (booking only) is suspended. Seating charge ¥2,200 per guest for the obanzai platter (Tabelog; Japanese original 「着席セット料金（おばんざい盛合せ）2,200円」). Bookings taken; guests wearing strong perfume may be refused. 20 seats around two sunken counters; smoking allowed; cards, e-money and QR accepted (Tabelog). Second floor by lift.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion south of Shijo, on Hanamikoji three buildings north of the Gion Kobu Kaburenjo — 324 m from Gion-Shijo Stn',
    cuisine: 'Gion obanzai and seasonal dishes until midnight · obanzai platter on sitting down, ¥2,200 (Tabelog) · dashimaki omelette, umaki, tempura of okra with shrimp paste, conger eel or octopus, fried sakura shrimp and small flatfish, octopus stew, fried namafu, horse sashimi, salt-grilled Kyoto red chicken, smoked duck breast, chorizo, meat udon to finish (2023–2025 reviews) · sake and shochu (Tabelog)',
    website: null, gmaps: gm('旬の料理とおばんざい つぼみ 祇園'), menu_url: null,
    notes: '[Obanzai · Gion, open till midnight] Up a lift behind a lattice on Hanamikoji: two sunken U-shaped counters around a friendly owner, where an obanzai platter (¥2,200 seating charge) arrives as you sit. Fluffy dashimaki is the dish everyone mentions; then tempura, horse sashimi, smoked duck, meat udon. Regulars chat with the staff; diners like the late hours and fair prices for Gion. Smoking allowed; no strong perfume. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner at the counter (2023–2025 reviews); not named in a source'], origin: null,
      background: 'Tabelog describes a hidden Gion spot for seasonal dishes, obanzai and drinks, on the second floor of 第3万治ビル, three buildings north of the Kobu Kaburenjo theatre on Hanamikoji. Reviewers from 2023 to 2025 describe guests seated around the owner at sunken U-shaped counters, with regulars chatting with the staff.',
      philosophy: 'Tabelog introduction: a place to forget the rush of daily life over seasonal dishes and obanzai.',
      specialty: 'Obanzai platter; fluffy dashimaki tamago.',
      anecdotes: [
        { text: 'An April 2025 diner arriving late in Kyoto was greeted by regulars, who said cherry-blossom season makes a seat hard to get.', source: R + 'B505712557/' },
        { text: 'A December 2024 diner, turned away everywhere on a Saturday night, found a booking here and was seated at the warm sunken counter while a year-end party filled the other.', source: R + 'B496951500/' },
        { text: '"The friendly and warm service from the owner was outstanding." — October 2025.', source: R + 'B536562841/' },
      ],
      japanese_sources_summary: '食べログ: 旬の料理とおばんざい つぼみ、日本料理、東山区祇園町南側 第3万治ビル2F、四条花見小路を下がって歌舞練場の3軒北、路地の格子を開けてエレベーターで2階、火〜日 17:30〜24:00 (L.O. 23:30)、月曜休み (月2回日曜も連休の場合あり)、ランチ (予約制、20食限定) は休止中、着席セット料金 (おばんざい盛合せ) 2,200円、予約可、香水など強い香りの方は入店を断る場合あり、20席 (カウンター12と8)、喫煙可、カード・電子マネー・QR可、Facebook と ヒトサラのページあり。口コミ (2023年2月〜2026年7月、英語): 気さくな店主、掘りごたつのU字のカウンター2つ、おばんざいの盛り合わせ、ふわふわのだし巻き、う巻き、オクラと海老しんじょの天ぷら、鱧や蛸の天ぷら、桜海老と笹がれいの唐揚げ、蛸のやわらか煮、生麩の揚げ出し、馬刺し、京赤地鶏の塩焼き、鴨ロースの燻製、チョリソー、肉うどん、常連が多い、遅くまで開いている。',
      confidence: 'medium', sources: [TB, R + 'B461940165/', R + 'B463445493/', R + 'B486421494/', R + 'B496951500/', R + 'B504729124/', R + 'B505712557/', R + 'B507225366/', R + 'B508347053/', R + 'B533263067/', R + 'B536562841/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seating around the owner; a set obanzai platter arrives first; book at busy times.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側 第3万治ビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.001932, 135.774909); cross-checked: GSI 京都府京都市東山区祇園町南側 (ward-level only; the address has no lot number); nearest pins kyoto_gion_yutaka_steak and kyoto_gion_fukushi 53 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Only the seating charge is published (Tabelog); dish prices are not.', last_checked: TODAY, items: [
      it('着席セット料金（おばんざい盛合せ）', '', 'Seating charge: obanzai platter', '¥2,200', 'Set', 'ask', 'no', 'Per guest, served on sitting down.', 'obanzai'),
    ] }, {
    cuisine: '深夜0時まで開く祇園のおばんざいと旬の料理・席に着くとおばんざいの盛り合わせ、2,200円 (食べログ)・だし巻き、う巻き、オクラと海老しんじょや鱧や蛸の天ぷら、桜海老と笹がれいの唐揚げ、蛸のやわらか煮、生麩の揚げ出し、馬刺し、京赤地鶏の塩焼き、鴨ロースの燻製、チョリソー、〆の肉うどん (2023〜2025年の口コミ)・日本酒、焼酎 (食べログ)',
    neighborhood: '四条通の南の祇園、花見小路の歌舞練場の3軒北。祇園四条駅から324m',
    gf_detail: '要確認。グルテンの情報なし。席に着くと全員にだしのおばんざいの盛り合わせが出て、天ぷら、カキフライ、うどんもある (2023〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 全員に出るおばんざいの盛り合わせはだしの味付けで、料理は魚、鶏、鴨、馬 (2023〜2025年の口コミ)。',
    notes: '[おばんざい・祇園、深夜0時まで] 花見小路の路地の格子の奥、エレベーターで2階。気さくな店主を囲む掘りごたつのU字のカウンターが2つあり、座るとおばんざいの盛り合わせ (着席料金2,200円) が出る。誰もが挙げるのはふわふわのだし巻き、ほかに天ぷら、馬刺し、鴨の燻製、肉うどん。常連とスタッフの会話がにぎやかで、遅くまで開いていて祇園にしては手頃という声。喫煙可、強い香水は不可。月曜休み。',
  });
}

// ================================================================ 祇園 なん波
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006220/'; const R = TB + 'dtlrvwlst/';
  const SAVOR = 'https://savorjapan.com/0004012529';
  const H = day(['12:00', '13:30'], ['17:30', '20:00']);
  put({
    id: 'kyoto_gion_nanba', name: '祇園 なん波 (Gion Nanba)', category: 'OMNI',
    lat: 35.004164, lng: 135.776163, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a dashi-based kaiseki with soy-seasoned dishes, somen and the occasional fried course (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish kaiseki on dashi — conger eel, sweetfish, bonito, duck (2024–2026 reviews).',
    hours_raw: 'Tabelog: lunch 12:00–13:30, dinner 17:30–20:00; closed Thursday; 2–4 January lunch from the ¥13,310 course. SavorJapan gives lunch from 12:30 (L.O. 13:00) and dinner from 17:30 (L.O. 20:00). Service charge 10% (Tabelog; Japanese original 「サービス料１０％」). Bookings taken; children welcome, with children’s dishes from ¥4,000 by reservation (Tabelog). 24 seats: 6 at the counter, 10 at tables upstairs, a tatami room and private rooms for 2–8; sunken kotatsu seating; non-smoking; cards, no e-money or QR (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion north of Shijo, down a narrow alley east of Hanamikoji — 1 min walk from the Gion bus stop',
    cuisine: 'Seasonal Kyoto kaiseki, the same course at lunch and dinner (July 2026) · lunch course ¥9,680 (September 2026); diners spent ¥8,000–39,999 a head (2026 reviews) · dishes seen: conger eel sashimi and hamo with plum rice soup, dobin-mushi of hamo and matsutake, grilled young sweetfish, somen with egg yolk, duck and eggplant, bonito, lotus-root tofu, fig, corn and ginger rice, matcha to finish (2026 reviews) · osechi for New Year (September 2026) · sake (Tabelog)',
    website: null, gmaps: gm('祇園 なん波 祇園町北側279-7'), menu_url: null,
    notes: '[Kaiseki · Gion, a Michelin-starred alley house] A kaiseki house down a narrow alley off Shijo near Yasaka Shrine, with a six-seat counter, tables upstairs and kotatsu private rooms. Diners in 2026 praise the dashi, summer hamo and early matsutake, and lunch from ¥9,680 for a Michelin-starred house; the owner, proprietress and staff chat through the meal. Others found it not exceptional for the stars (July 2026) and dishes slow, with repeated apologies (August 2026). 10% service. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Chef and owner (2026 reviews); not named in a primary source'], origin: null,
      background: 'Reviewers in 2026 call it long-established and Michelin-starred; Retty’s introduction also says it holds a Michelin star. A regular orders osechi every year and comes for a wedding anniversary (September 2026). A July 2026 diner describes conversation with the owner, the proprietress and the staff through the course.',
      philosophy: null,
      specialty: 'Seasonal kaiseki; dashi; summer hamo.',
      anecdotes: [
        { text: 'In an August 2026 kotatsu room, the staff said they were heating the kotatsu for a guest who felt chilly in the air conditioning, and brought a blanket.', source: R + 'B533914880/' },
        { text: '"I was disappointed that the staff repeatedly apologized for the wait each time they brought out a dish." — August 2026.', source: R + 'B533914880/' },
        { text: '"Personally, while it is Michelin-rated, I didn\'t find it exceptionally delicious." — July 2026, who still called the lunch a wonderful travel memory.', source: R + 'B532125069/' },
        { text: 'A regular who orders osechi every year comes back each September for the overlap of summer hamo and autumn matsutake.', source: R + 'B420235409/' },
      ],
      japanese_sources_summary: '食べログ (法人会員): 祇園 なん波、日本料理、東山区四条花見小路東入る祇園町北側279-7、祇園のバス停から徒歩1分、昼12:00〜13:30、夜17:30〜20:00、木曜休み、1月2〜4日の昼は13,310円のコースから、サービス料10%、予約可、子供料理4,000円から (要予約)、24席 (カウンター6、2階テーブル10、座敷、個室2〜8名)、掘りごたつ、禁煙、カード可、電子マネー・QR不可。SavorJapan: 昼12:30〜 (L.O. 13:00)、夜17:30〜 (L.O. 20:00)、木曜休み、昼の平均6,000円、先付・煮物椀・八寸・箸休・水物・菓子と抹茶。Retty: ミシュランで星を獲得している懐石料理店。口コミ (2024年9月〜2026年10月、英語): 八坂神社近くの路地、ミシュランの星、昼のコース9,680円、鱧と梅の雑炊、土瓶蒸し、鮎、鰹、卵黄のそうめん、毎年おせち、店主と女将とスタッフ、こたつを温めてくれた、料理の出が遅く何度も謝られた、星の割に特別おいしいとは思わなかった。',
      confidence: 'medium', sources: [TB, SAVOR, 'https://retty.me/restaurant/100000017309/', R + 'B420235409/', R + 'B481275533/', R + 'B492155272/', R + 'B530988304/', R + 'B532125069/', R + 'B533791312/', R + 'B533914880/', R + 'B536688186/', R + 'B536831954/', R + 'B537236598/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set kaiseki with dishes explained (July 2026); private rooms and a counter; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区四条花見小路東入る祇園町北側279-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (restaurant-managed) with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004164, 135.776163); cross-checked: GSI 京都府京都市東山区祇園町北側279番地 (lot) 31m; kyoto_gibier_miyama (279-3) is 8.6 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B420235409/'],
    price_note: 'Lunch course price from a September 2026 review; New Year price and children’s dishes from Tabelog; 10% service extra.', last_checked: TODAY, items: [
      it('', '', 'Lunch kaiseki course', '¥9,680', 'Lunch', 'ask', 'no', 'September 2026.', 'lunch_course'),
      it('', '', 'New Year lunch course (2–4 January), from', '¥13,310', 'Lunch', 'ask', 'no', 'Tabelog.', 'course'),
      it('', '', 'Children’s dishes, from', '¥4,000', 'Children', 'ask', 'no', 'By reservation (Tabelog).', 'kids'),
    ] }, {
    cuisine: '昼も夜も同じコースの季節の京懐石 (2026年7月)・昼のコース9,680円 (2026年9月)、口コミの1人あたりの支払いは8,000〜39,999円 (2026年)・これまでの料理: 鱧の造りと鱧と梅の雑炊、鱧と松茸の土瓶蒸し、若鮎の塩焼き、卵黄のそうめん、鴨と茄子、鰹、蓮根豆腐、いちじく、とうもろこしと生姜のご飯、〆の抹茶 (2026年の口コミ)・正月のおせち (2026年9月)・日本酒 (食べログ)',
    neighborhood: '四条通の北の祇園、花見小路の東の細い路地。祇園のバス停から徒歩1分',
    gf_detail: '予約時に要確認。グルテンの情報なし。だしの懐石で、醤油の味付け、そうめん、揚げ物もある (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鱧、鮎、鰹、鴨のだしの懐石 (2024〜2026年の口コミ)。',
    notes: '[懐石・祇園、路地のミシュランの店] 八坂神社近く、四条通から細い路地を入った懐石の店。カウンター6席、2階のテーブル、掘りごたつの個室。2026年の口コミでは、だし、夏の鱧と走りの松茸、ミシュランの店で昼9,680円からが好評で、店主と女将とスタッフとの会話も楽しい。一方、星の割に特別おいしいとは思わなかった (2026年7月)、料理の出が遅く何度も謝られた (2026年8月) という声も。サービス料10%。木曜休み。',
  });
}

// ================================================================ 割烹 市川
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26030196/'; const R = TB + 'dtlrvwlst/';
  const FB = 'https://www.facebook.com/1554446404676074/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_kappou_ichikawa', name: '割烹 市川 (Kappou Ichikawa)', category: 'MOM_AND_POP',
    lat: 35.013981, lng: 135.761703, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the à la carte menu mixes sashimi and grilled fish with tempura, fried sardines or horse mackerel, mackerel sushi and soba (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led kappou — sashimi, guji, sweetfish, soft-shell turtle, oysters, beef (2023–2026 reviews).',
    hours_raw: 'Tabelog: 17:30–23:00 (L.O. 22:00), closed Thursday. Bookings by phone or online (Tabelog; an April 2026 review lists Gurunavi, Tabelog and Ikkyu). No service charge listed on Tabelog. 16 seats with a private room for 8 (Tabelog); a counter of 8 and two tables for 4 (April 2026 review; a February 2023 diner counted six counter seats). Non-smoking; no children; cards (JCB, AMEX, Diners per Tabelog). Opened 3 February 2018 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Between Karasuma Oike and Marutamachi — 7 min walk from Karasuma Oike Stn, 8 min from Marutamachi Stn',
    cuisine: 'Kyoto kappou with a long à la carte list as well as courses (2026 reviews) · course ¥11,000 (February 2023); à la carte prices not shown, about ¥25,000–31,000 for two with drinks (2026 reviews) · dishes seen: sashimi platters (bafun uni on squid, toro, shime saba, amadai, seared hamo), grilled guji, grilled sweetfish, corn tempura, firefly squid tempura, fried sardines or horse mackerel with house tartar, agedashi Kamo eggplant, whelk with asparagus, soft-shell turtle egg soup and hot pot, kinmedai in sake lees, mackerel sushi, rock oyster, potato salad with pickled shallots in nori, beef with flower pepper, soba and warabi mochi to finish (2023–2026 reviews) · sake, shochu, wine (Tabelog)',
    website: FB, gmaps: gm('割烹 市川 京都 夷町'), menu_url: null,
    notes: '[Kappou · Karasuma Oike–Marutamachi, à la carte kaiseki] A counter kappou north of Oike where, unusually, almost everything can be ordered à la carte: sashimi of bafun uni on squid, grilled guji whose scales one diner called life-changing, corn tempura, soft-shell turtle, potato salad wrapped in nori. Prices are not shown — two diners paid ¥25,000–31,000 for two with drinks. The owner trained at a Tankuma kaiseki house; a 2026 diner says it entered the Michelin Guide this year. Mostly regulars; private rooms can be noisy. No children. Closed Thursday.',
    chef_bio: { chef_name: 'Ichikawa (surname from the shop name; reviews give a full name only in machine translation, so it is not used)', roles: ['Owner-chef (2026 reviews)'], origin: null,
      background: 'Opened on 3 February 2018 (Tabelog). Per an April 2026 review, the owner trained at renowned kaiseki houses including a Tankuma house (the review’s English gives "Tan Kuma Kitaten"; a June 2026 review calls the owner "from Tankuma G"). A June 2026 regular on a 29th visit saw the Michelin award ceremony on Instagram Stories and writes that the restaurant was featured in the guide that year.',
      philosophy: null,
      specialty: 'À la carte kappou; grilled guji; soft-shell turtle.',
      anecdotes: [
        { text: '"Just like in the past at Tanakatan, there were no prices listed, which added a thrill to the bill at the end." — August 2026; two paid ¥31,000.', source: R + 'B461027222/' },
        { text: '"The grilled \'guji\' … was one of the most shocking fish experiences of my life. I never knew fish scales could be so delicious." — May 2026.', source: R + 'B528417583/' },
        { text: 'An April 2026 diner booked a course but was allowed to switch to à la carte for everything after the opening dishes.', source: R + 'B526870984/' },
        { text: '"I recommend the counter seats over the table ones, as private rooms can be noisy if neighboring guests are loud." — June 2026.', source: R + 'B533369379/' },
      ],
      japanese_sources_summary: '食べログ: 割烹 市川、日本料理、中京区夷町572、烏丸御池駅から徒歩約7分・丸太町駅から約8分、17:30〜23:00 (L.O. 22:00)、木曜休み、予約可、16席、個室8名、禁煙、子供不可、カード可 (JCB・AMEX・Diners)、電子マネー不可、サービス料の記載なし、Facebook ページ、2018年2月3日オープン。口コミ (2023年2月〜2026年9月、英語): アラカルトが充実、値段の書かれていない品書き、2人で25,000〜31,000円ほど、11,000円のコース (2023年)、馬糞雲丹をのせた烏賊、とろ、しめ鯖、甘鯛、炙り鱧、ぐじの焼き物、鮎、とうもろこしの天ぷら、ほたるいかの天ぷら、鰯や鯵のフライと自家製タルタル、賀茂茄子の揚げ出し、つぶ貝とアスパラ、すっぽんの卵のスープと鍋、金目鯛の粕煮、鯖寿司、岩牡蠣、ポテトサラダ、牛肉の花山椒、〆の蕎麦とわらび餅、常連が多い、店主は「Tan Kuma Kitaten」(英訳) などで修業、2026年にミシュランガイドに掲載、個室は隣がうるさいことも。',
      confidence: 'medium', sources: [TB, FB, R + 'B328919079/', R + 'B333932166/', R + 'B461027222/', R + 'B505328174/', R + 'B526388048/', R + 'B526870984/', R + 'B527744406/', R + 'B528417583/', R + 'B532223272/', R + 'B533369379/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte with no prices shown; staff suggest drink pairings (May 2026); mostly regulars.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区夷町572',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.013981, 135.761703); cross-checked: GSI 京都府京都市中京区夷町572番地 (lot) 46m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B461027222/', R + 'B528417583/'],
    price_note: 'No prices are shown on the à la carte list; figures are diners’ totals.', last_checked: TODAY, items: [
      it('', '', 'Course', '¥11,000', 'Course', 'ask', 'no', 'February 2023.', 'course'),
      it('', '', 'À la carte with drinks, for two', '~¥25,000–31,000', 'À la carte', 'ask', 'no', 'May and August 2026 totals.', 'a_la_carte'),
    ] }, {
    cuisine: 'コースのほかアラカルトが充実した京都の割烹 (2026年の口コミ)・コース11,000円 (2023年2月)、アラカルトは値段の表示なし、飲み物込みで2人25,000〜31,000円ほど (2026年の口コミ)・これまでの料理: 馬糞雲丹をのせた烏賊、とろ、しめ鯖、甘鯛、炙り鱧のお造り、ぐじの焼き物、鮎の焼き物、とうもろこしやほたるいかの天ぷら、鰯や鯵のフライと自家製タルタル、賀茂茄子の揚げ出し、つぶ貝とアスパラ、すっぽんの卵のスープや鍋、金目鯛の粕煮、鯖寿司、岩牡蠣、ポテトサラダの海苔巻き、牛肉の花山椒、〆の蕎麦とわらび餅 (2023〜2026年の口コミ)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '烏丸御池と丸太町の間。烏丸御池駅から徒歩7分、丸太町駅から8分',
    gf_detail: '要確認。グルテンの情報なし。アラカルトにはお造りや焼き魚のほか、天ぷら、鰯や鯵のフライ、鯖寿司、蕎麦がある (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: お造り、ぐじ、鮎、すっぽん、牡蠣、牛肉の魚中心の割烹 (2023〜2026年の口コミ)。',
    notes: '[割烹・烏丸御池〜丸太町、アラカルトの懐石] 御池の北のカウンターの割烹で、珍しくほとんどがアラカルトで頼める。馬糞雲丹をのせた烏賊のお造り、鱗まで旨いと驚かれたぐじの焼き物、とうもろこしの天ぷら、すっぽん、海苔で巻くポテトサラダ。値段の表示はなく、飲み物込みで2人25,000〜31,000円ほどだったという口コミ。店主は Tankuma の懐石の店で修業、2026年にミシュランガイドに載ったという口コミも。常連が多く、個室は隣がうるさいことも。子供不可。木曜休み。',
  });
}

save();
