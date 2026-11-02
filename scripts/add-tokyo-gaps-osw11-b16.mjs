// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 16.
//   All four drafts are in KYOE PLAZA 日本橋人形町 (日本橋人形町2-10-11), the dining building on Amazake Yokocho that already holds
//   on your side (tokyo_on_your_side_ningyocho, address_ja "東京都中央区日本橋人形町2-10-11 2F"):
//   + huit, 5F (natural-wine and junmai-sake bistro with vegetable dishes; since 2022)
//   + 日本料理 柳燕 Ryuen, 7F (8-seat Japanese omakase, chef Noro; Tabelog Japanese 100 2023, 2025)
//   + L'appartamento di NAOKI, 4F (wood-fired Italian counter of chef Naoki Yokoe, moved from Azabu-Juban in 2021)
//   + 御料理 心馬 Oryori Kokoroba, 3F (6-seat kaiseki counter run single-handed by its owner; since 2022)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 8 ningyocho` (main repo, 2026-11-02).
//   Skipped: 13250543 SARAY 人形町店 — a branch of SARAY GROUP, which lists 12 shops in Tokyo and 2 in Yokohama (14 in Tokyo in
//   another section of saray.jp, 2026-11-02): 5 or more same-concept shops is a chain (brief working line). The next
//   candidate, 13276509 御料理 心馬, was taken in its place.
//   Dedupe. None is in data/tokyo.json by name. Address: all share 2-10-11 with on your side, on different floors.
//   Pins. The five Tabelog points for this building lie within about 6 m of each other (huit 3.2 m, Ryuen 1.7 m, NAOKI
//   4.3 m and Kokoroba 6.4 m from on your side's point 35.685631, 139.783982). All four new records are block-level and
//   spread 6 m around on your side's point — huit south, Ryuen north, NAOKI east, Kokoroba west — so none stack.
//   GSI 東京都中央区日本橋人形町二丁目10番11号 (go) is 8 m from the building's points.
//   Chain check. Ryuen, NAOKI, huit, Kokoroba: single shops in the sources (NAOKI relocated; no second branch).
//   Invoice numbers (huit T7010001224978, NAOKI T9010401132993, Kokoroba T1010003017782) are corporate registrations; no
//   owner names taken from them.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const BLD = 'Block-level: KYOE PLAZA 日本橋人形町 (2-10-11) holds five records in data (on your side 2F, Kokoroba 3F, NAOKI 4F, huit 5F, Ryuen 7F); their Tabelog points lie within about 6 m, so the new four are spread 6 m around on your side\'s point (35.685631, 139.783982). GSI 東京都中央区日本橋人形町二丁目10番11号 (go) 8m.';

skip('13250543', 'SARAY 人形町店 (Turkish, 日本橋堀留町2-1-3): a branch of SARAY GROUP, whose site saray.jp lists 12 shops in Tokyo and 2 in Yokohama (another section says 14 in Tokyo) — 5+ same-concept shops is a chain');

// ================================================================ huit
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13274558/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['11:30', '15:00'], ['17:00', '23:00']); const WE = day(['12:00', '21:00']);
  put({
    id: 'tokyo_huit_ningyocho', name: 'huit', category: 'OMNI',
    lat: 35.685577, lng: 139.783982, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Homemade bread, pasta and risotto are central to the courses (2026 reviews); nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: vegetable-led, but courses include pork, fish, prosciutto and cheese; hummus and vegetable dishes appear (2026).',
    hours_raw: 'Mon–Fri 11:30–15:00 (food last order 14:00) and 17:00–23:00 (food last order 22:00); Sat, Sun and holidays 12:00–21:00 (food last order 20:00); generally closed Tuesday, though sometimes open; closures posted on Instagram (huit.tokyo) (Tabelog). Lunch about 90 minutes, dinner about 2 hours (Tabelog). Reservations accepted; dessert plates must be ordered by phone a day ahead (Tabelog). Non-drinkers pay ¥500 after 15:00 (Tabelog). Cards, transport IC, iD, QUICPay and PayPay (Tabelog). 20 seats including a counter; wheelchair accessible; non-smoking (Tabelog). Opened 8 August 2022 (Tabelog). On Sunday the elevator stops at this floor only from 12:00 (July 2026).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-10-11, KYOE PLAZA 5F, on Amazake Yokocho — 1–2 min from Ningyocho Stn exits A1/A2, 4 min from Suitengumae Stn exit 7',
    cuisine: 'Bistro of natural wines, junmai sake and vegetables from partner farms (Tabelog) · huit\'s course, food only ¥3,800 — six dishes and homemade bread, with at least two drinks (February 2026): appetisers such as hummus, carrot râpé and wild-boar rillettes; sea-bream carpaccio cured in house salted kombu; cauliflower soup; pork marinated in salt koji or sake lees with tonnato sauce; Basque cheesecake · party plan ¥7,000 (October 2026) · lunch: one-plate ¥1,400, pasta or soup lunch (July 2026) · à la carte (October 2026): carpaccio ¥1,200, open pie of smoked char ¥1,400, miso chicken-thigh confit ¥2,700, pork ragù pasta ¥1,900, homemade potato and rosemary bread ¥300 · junmai-sake tasting sets and sake highballs ¥800',
    website: TB, gmaps: gm('huit 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Bistro · Ningyocho, natural wine, junmai sake and vegetables on Amazake Yokocho] A fifth-floor bistro in the KYOE PLAZA dining building, pairing natural wines and junmai sake with vegetable-forward cooking from partner farms. The master is a certified sommelier (October 2026). The bargain is the ¥3,800 food-only course: six small plates and a chewy homemade rosemary bread that diners rave about, from wild-boar rillettes and kombu-cured carpaccio to salt-koji pork with tonnato. Lunch starts at ¥1,400, and weekends run straight through from noon. Staff are warm, chatting even with children (July 2026); portions can feel small to big eaters. Dinner is about two hours, and non-drinkers pay ¥500 after 15:00.",
    chef_bio: { chef_name: null, roles: ['The master, a certified sommelier (October 2026 review)'], origin: null,
      background: 'Opened 8 August 2022 (Tabelog). Natural wines from organic and low-pesticide producers, junmai sake and vegetables and herbs from partner farms (Tabelog shop text).',
      philosophy: 'Natural wine × junmai sake × vegetables (Tabelog shop text).', specialty: 'Homemade bread; the ¥3,800 course.',
      anecdotes: [
        { text: '"The homemade bread served here was so delicious it left me in awe!" — February 2026.', source: R + 'B523424665/' },
        { text: '"The staff humorously described the tonato sauce as a fancy tuna mayo" — February 2026.', source: R + 'B523424665/' },
        { text: '"The master is a certified sommelier." — October 2026.', source: R + 'B537867697/' },
      ],
      japanese_sources_summary: '食べログ: huit、ビストロ、ワインバー、日本酒バー、日本橋人形町2-10-11 KYOE PLAZA 5F、人形町駅A2出口から徒歩2分、月〜金11:30〜15:00、17:00〜23:00、土日祝12:00〜21:00、火曜はおおむね休み、Instagram で告知、昼は約90分・夜は約2時間、予約可、15時以降お酒を飲まない人は500円、カード・電子マネー・PayPay可、20席、車椅子可、2022年8月8日オープン、自然派ワインと純米酒と提携農家の野菜。口コミ(2024年2月〜2026年10月): 料理だけのコース3,800円 (6品と自家製パン、2杯以上の注文)、パーティープラン7,000円、ランチのワンプレート1,400円、自家製パンが評判、マスターはソムリエ、量は少なめという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B480690890/', R + 'B522984601/', R + 'B523424665/', R + 'B524273128/', R + 'B526807808/', R + 'B531533637/', R + 'B531714810/', R + 'B533129781/', R + 'B537867697/', R + 'B537875462/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book on Tabelog; order by QR code at lunch (April 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都中央区日本橋人形町2-10-11 KYOE PLAZA 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated to October 2026.' },
    pin_source: `Tabelog ${TB} gives 35.685602, 139.783982, 3.2 m from on your side (tokyo_on_your_side_ningyocho, address_ja "東京都中央区日本橋人形町2-10-11 2F"). ${BLD} huit placed 6 m south; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B522984601/', R + 'B531714810/', R + 'B537867697/', R + 'B537875462/'],
    price_note: 'Prices from February–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'huit\'s course, food only (6 dishes and bread)', '¥3,800', 'Courses', 'no', 'no', 'February 2026; at least two drinks.', 'course'),
      it('', '', 'Party plan', '¥7,000', 'Courses', 'no', 'no', 'October 2026.', 'party'),
      it('', '', 'One-plate lunch', '¥1,400', 'Lunch', 'ask', 'no', 'July 2026.', 'lunch'),
      it('', '', 'Pork ragù pasta', '¥1,900', 'À la carte', 'no', 'no', 'October 2026.', 'ragu'),
      it('', '', 'Homemade potato and rosemary bread', '¥300', 'À la carte', 'no', 'ask', 'October 2026.', 'bread'),
    ] }, {
    cuisine: '自然派ワイン、純米酒、提携農家の野菜のビストロ (食べログ)・料理だけのコース3,800円、6品と自家製パン、2杯以上の注文 (2026年2月): フムス、キャロットラペ、猪のリエットなどの前菜、自家製の塩昆布で締めた鯛のカルパッチョ、カリフラワーのスープ、塩麹や酒粕に漬けた豚のトンナートソース、バスクチーズケーキ・パーティープラン7,000円 (2026年10月)・ランチ: ワンプレート1,400円、パスタやスープのランチ (2026年7月)・アラカルト (2026年10月): カルパッチョ1,200円、燻製の char のオープンパイ1,400円、味噌の鶏もものコンフィ2,700円、豚のラグーのパスタ1,900円、じゃがいもとローズマリーの自家製パン300円・純米酒の飲み比べと日本酒のハイボール800円',
    neighborhood: '日本橋人形町2-10-11 KYOE PLAZA 5F、Amazake Yokocho。人形町駅A1・A2出口から徒歩1〜2分、水天宮前駅7番出口から徒歩4分',
    gf_detail: '要確認。コースは自家製パン、パスタ、リゾットが中心 (2026年の口コミ)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 野菜が中心だが、コースには豚肉、魚、生ハム、チーズも。フムスや野菜の料理もある (2026年)。',
    notes: '[ビストロ・人形町、Amazake Yokocho の自然派ワインと純米酒と野菜] 飲食ビル KYOE PLAZA の5階のビストロで、自然派ワインと純米酒に、提携農家の野菜を生かした料理を合わせる。マスターはソムリエ (2026年10月)。お得なのは料理だけの3,800円のコースで、小皿6品と評判のもちもちした自家製ローズマリーパン。猪のリエットや昆布締めのカルパッチョから、塩麹の豚のトンナートまで。ランチは1,400円から、週末は昼から通しで営業。スタッフは温かく、子どもにも話しかけてくれる (2026年7月)。よく食べる人には量が少なめに感じることも。夜は約2時間制で、15時以降お酒を飲まない人は500円。',
  });
}

// ================================================================ 日本料理 柳燕
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13258874/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.ryuen-tokyo.jp/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'tokyo_ryuen_ningyocho', name: '日本料理 柳燕 (Ryuen)', category: 'OMNI',
    lat: 35.685685, lng: 139.783982, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — the shop declines bookings with wide-ranging allergies (shop website). Courses include soy-based sauces, a beef cutlet and fried fugu (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a dashi-based seafood and meat omakase.',
    hours_raw: 'Mon–Sat 17:00–23:00; closed Sundays and holidays (Tabelog); the shop website gives 17:00–23:00, closed Sundays and irregularly. Reservation only; late starts such as 21:00 are possible (December 2025, July 2026). Arrive on time — there is no waiting area; no perfume; cancellations 50% from two days before, 100% on the day (shop website). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 8 counter seats; non-smoking (Tabelog). Opened 8 May 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-10-11, KYOE PLAZA 日本橋人形町 7F, on Amazake Yokocho — 2 min from Ningyocho Stn, 3 min from Suitengumae Stn',
    cuisine: 'Japanese omakase at an 8-seat counter, the menu changing every month (shop website; 2025–26 reviews) · omakase ¥27,000 including tax, varying with the season (shop website); ¥29,700 in a July 2026 review · a 2026 course: purple sea urchin with winter melon and abalone; striped-jack sushi roll; Chateaubriand cutlet with matsutake; clear soup; sashimi of bonito and kohada; ankimo; sake-marinated hairy crab; a small hot pot; sukiyaki-style rice, with sweetfish rice to take home (August 2026) · winter: fried fugu, kue hot pot, crab rice with sea urchin (December 2025) · sake and wine pairings by the glass',
    website: SITE, gmaps: gm('日本料理 柳燕 人形町'), menu_url: null,
    notes: "[Kaiseki · Ningyocho, a monthly-changing Japanese counter with a devoted following] An eight-seat Japanese counter on the seventh floor of KYOE PLAZA, open since 2021 and a Tabelog Japanese-cuisine 100 pick in 2023 and 2025. The young chef Noro writes a new menu each month: sea urchin with winter melon and abalone, a Chateaubriand cutlet with matsutake, sake-marinated hairy crab, a small hot pot, then a rice course with leftovers packed to take home. Pairings lean on carefully chosen sake, with Burgundy when the dish calls for it. Regulars return monthly, one for a 21st visit (July 2026), and several compare it favourably with starred restaurants. The omakase is about ¥27,000–¥29,700. Book well ahead, arrive on time, and skip the perfume.",
    chef_bio: { chef_name: 'Noro (surname only, romaji from reviews; no kanji source)', roles: ['Head chef ("Chef Noro", "the young chef, Noro-san", 2025–26 reviews)', 'Owner: "Mr. Moritoh (the owner)" (November 2025 review)', 'Second-in-command Fujito, since promoted (2025–26 reviews)'], origin: 'Aomori (a July 2026 diner talked with "the chef from Aomori")',
      background: 'Opened 8 May 2021 (Tabelog); a regular celebrated its 5th anniversary in May 2026. Selected for Tabelog Japanese cuisine TOKYO 100 in 2023 and 2025 (Tabelog). Per reviews: the owner, Moritoh, was absent from the counter by May 2025 and present again in November 2025; the menu changes every month.',
      philosophy: null, specialty: 'Monthly omakase; rice course with a take-home portion.',
      anecdotes: [
        { text: '"Despite the menu changing every month, Mr. Noro skillfully brings out the maximum deliciousness of the ingredients" — April 2026, a 17th visit.', source: R + 'B445248802/' },
        { text: '"The chef suggested that the mineral notes of the aosa would pair well with the Chablis." — March 2026.', source: R + 'B524099798/' },
        { text: '"… even let us take home some of the rice dish as a souvenir." — December 2025.', source: R + 'B519684400/' },
      ],
      japanese_sources_summary: 'ホームページ: 日本料理 柳燕 (りゅうえん)、おまかせコース27,000円 (税込み、季節の食材で多少上下)、17:00〜23:00、日曜・不定休、カウンター8席、時間通りの来店を、広範囲のアレルギーは予約不可、香水は遠慮を、キャンセルは2日前から50%、当日100%。食べログ: 日本料理、日本料理 TOKYO 百名店2023・2025、日本橋人形町2-10-11 KYOE PLAZA日本橋人形町 7F、月〜土17:00〜23:00、日祝休み、完全予約制、カード可、禁煙、2021年5月8日オープン。口コミ(2024年12月〜2026年9月): 料理長 Noro さん、オーナー Moritoh さん、毎月変わる献立、雲丹と冬瓜と鮑、シャトーブリアンのカツ、毛蟹の酒漬け、小鍋、締めのご飯は持ち帰りも、日本酒とワインの合わせ、Aomori 出身の料理人、2026年7月の口コミでは29,700円。',
      confidence: 'medium', sources: [SITE, TB, R + 'B445248802/', R + 'B480367472/', R + 'B502920775/', R + 'B506776516/', R + 'B519684400/', R + 'B519866015/', R + 'B523827581/', R + 'B524099798/', R + 'B530169662/', R + 'B531762351/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; punctual arrival; many inbound guests recently (2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Bookings with wide-ranging allergies are declined (shop website).'] },
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都中央区日本橋人形町2-10-11 KYOE PLAZA日本橋人形町 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop website and Tabelog official listing; reviews to September 2026.' },
    pin_source: `Tabelog ${TB} gives 35.685616, 139.783988, 1.7 m from on your side (tokyo_on_your_side_ningyocho, address_ja "東京都中央区日本橋人形町2-10-11 2F"). ${BLD} Ryuen placed 6 m north; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B531762351/'],
    price_note: 'Course price from the shop website (tax included, varies by season); ¥29,700 in a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥27,000', 'Courses', 'ask', 'no', 'Shop website; ¥29,700 in July 2026.', 'omakase'),
    ] }, {
    cuisine: 'カウンター8席の日本料理のおまかせ、献立は毎月変わる (ホームページ、2025〜26年の口コミ)・おまかせ27,000円、税込み、季節で上下 (ホームページ)。2026年7月の口コミでは29,700円・2026年のコース: 紫雲丹と冬瓜と鮑、縞鯵の巻き寿司、松茸を添えたシャトーブリアンのカツ、お椀、鰹と小肌の刺身、あん肝、毛蟹の酒漬け、小鍋、すき焼き風のご飯、持ち帰りの鮎ご飯 (2026年8月)・冬はふぐの唐揚げ、クエ鍋、雲丹をのせた蟹ご飯 (2025年12月)・日本酒とワインをグラスで合わせる',
    neighborhood: '日本橋人形町2-10-11 KYOE PLAZA日本橋人形町 7F、Amazake Yokocho。人形町駅から徒歩2分、水天宮前駅から徒歩3分',
    gf_detail: '予約時に要確認。広範囲のアレルギーは予約を受けられない (ホームページ)。コースには醤油のたれ、牛カツ、ふぐの唐揚げも (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガンではない: 出汁を使う魚介と肉のおまかせ。',
    notes: '[日本料理・人形町、熱心な常連の通う毎月変わる日本料理のカウンター] KYOE PLAZA の7階にある8席の日本料理のカウンターで、2021年から。2023年と2025年の食べログ日本料理百名店。若い料理長の Noro さんが毎月新しい献立を組み、雲丹と冬瓜と鮑、松茸を添えたシャトーブリアンのカツ、毛蟹の酒漬け、小鍋、締めのご飯は残りを持ち帰りに包んでくれる。合わせるのは選び抜いた日本酒で、料理によってはブルゴーニュも。毎月通う常連も多く、21回目の人も (2026年7月)、星付きの店より上だという声も。おまかせは約27,000円〜29,700円。予約は早めに、時間通りに、香水は控えて。',
  });
}

// ================================================================ L'appartamento di NAOKI
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13259645/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.naokiyokoe.com/';
  const D = day(['19:00', '23:59']); const SUN = day(['12:00', '15:30'], ['19:00', '23:59']);
  put({
    id: 'tokyo_lappartamento_di_naoki_ningyocho', name: "L'appartamento di NAOKI", category: 'MOM_AND_POP',
    lat: 35.685631, lng: 139.784048, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — the shop may refuse bookings whose allergies prevent the course (Tabelog). Fresh pasta is a centrepiece (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a set course with a choice of meat main and fish dishes.',
    hours_raw: 'Wed–Sat, holidays and the days before and after holidays 19:00–23:59; Sun 12:00–15:30 and 19:00–23:59; closed Mon and Tue (Tabelog). Dinner is one seating at 19:00; ring the intercom by the elevator (May 2026). Reservations; cancellation seats announced on Instagram; enquiries via LINE (Tabelog). Service charge 10% (Tabelog). Cards and PayPay; no e-money (Tabelog). Tabelog lists 6 seats; a May 2026 diner counted 8 at the counter. Non-smoking; leaving mid-meal to smoke can mean no re-entry (Tabelog). No children (May 2026 review).',
    hours: { 2: D, 3: D, 4: D, 5: D, 6: SUN }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-10-11, KYOE PLAZA 日本橋人形町 4F, on Amazake Yokocho — 2 min from Ningyocho Stn, about 3 min from Suitengumae Stn',
    cuisine: 'Italian cooking with a wood-fired oven, as a prix fixe of about ten dishes (2026 reviews) · prix-fixe course ¥19,800 (May 2026) — grissini, a smoked vegetable-scrap soup poured from a siphon into a wine glass, potato and octopus tart, pork tongue with salsa verde, caprese, peas and caviar, a choice of meat main shared by two, then fresh pasta in small portions — three chosen from several, or as much as you like — and smoked ice cream (May–October 2026) · wine pairing or non-alcoholic kombucha pairing (May, August 2026)',
    website: SITE, gmaps: gm("L'appartamento di NAOKI 人形町"), menu_url: null,
    notes: "[Italian · Ningyocho, a wood-fired counter that moved from Azabu-Juban] An Italian counter on the fourth floor of KYOE PLAZA, where chef Naoki Yokoe moved in 2021 after ten years in Azabu-Juban, adding a wood-fired oven the old shop lacked. Everyone starts together at 19:00 for a prix fixe of about ten dishes (¥19,800 in May 2026). Smoke runs through everything, down to the ice cream, and the pasta comes after the main as small servings of three or more kinds, made in front of you. The kitchen is a one-chef show, so the chef talks once dessert arrives (May 2026). A Tabelog Italian 100 pick in 2023 and 2025. Adults only; book via Tabelog, Instagram or LINE.",
    chef_bio: { chef_name: 'Naoki Yokoe', roles: ['Chef ("a prefix course crafted with the skill and sensibility of Chef Naoki Yokoe", May 2026 review); the shop bears the chef\'s name'], origin: null,
      background: 'Per 2026 reviews: established for 10 years in Azabu-Juban, then relocated to Ningyocho in 2021 with a new wood-fired cooking setup; trained in Italy (August 2026). A May 2026 diner saw the chef cooking alone, with front of house apparently run by the chef\'s wife. Selected for Tabelog Italian TOKYO 100 in 2023 and 2025 (Tabelog).',
      philosophy: null, specialty: 'Wood-fired Italian; fresh pasta in several small servings.',
      anecdotes: [
        { text: '"After establishing a solid reputation in Azabu-Juban for 10 years, the restaurant relocated to Ningyocho in 2021." — May 2026.', source: R + 'B528376772/' },
        { text: '"Even the final ice cream was smoked" — May 2026.', source: R + 'B528535268/' },
        { text: '"The non-alcoholic kombucha had a great variety, and I loved them all (the plum flavor was my favorite)." — August 2026.', source: R + 'B534034623/' },
      ],
      japanese_sources_summary: '食べログ: L\'appartamento di NAOKI、イタリアン、イノベーティブ、イタリアン TOKYO 百名店2023・2025、日本橋人形町2-10-11 KYOE PLAZA日本橋人形町 4F、水〜土・祝・祝前日・祝後日19:00〜23:59、日12:00〜15:30、19:00〜23:59、月・火休み、予約可、アレルギーでコースが組めない場合は予約を断ることも、サービス料10%、カード・PayPay可、6席、禁煙、ホームページ naokiyokoe.com。口コミ(2026年5月〜10月): Azabu-Juban で10年のあと2021年に人形町へ、薪火の調理、シェフ Naoki Yokoe、19時一斉スタート、プリフィクス19,800円、約10品、メインの肉を選ぶ、パスタは少しずつ何種類も、燻製のアイス、コンブチャのペアリング、8席のカウンターという声、子どもは不可。',
      confidence: 'medium', sources: [TB, SITE, R + 'B527829329/', R + 'B528073728/', R + 'B528376772/', R + 'B528535268/', R + 'B532011835/', R + 'B534034623/', R + 'B534312771/', R + 'B536361846/', R + 'B537262633/', R + 'B538015698/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One 19:00 seating; ring the intercom; adults only.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tell the shop about dislikes when booking; bookings whose allergies prevent the course may be refused (Tabelog).'] },
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都中央区日本橋人形町2-10-11 KYOE PLAZA日本橋人形町 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB} gives 35.685628, 139.784030, 4.3 m from on your side (tokyo_on_your_side_ningyocho, address_ja "東京都中央区日本橋人形町2-10-11 2F"). ${BLD} NAOKI placed 6 m east; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528376772/'],
    price_note: 'Course price from a May 2026 review; plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Prix-fixe course (about 10 dishes)', '¥19,800', 'Courses', 'ask', 'no', 'May 2026; plus 10% service.', 'prefix'),
    ] }, {
    cuisine: '薪窯を使うイタリアン、約10品のプリフィクス (2026年の口コミ)・プリフィクスコース19,800円 (2026年5月): グリッシーニ、サイフォンからワイングラスに注ぐ野菜の端材の燻製スープ、Inca potato と蛸のタルト、豚タンのサルサヴェルデ、カプレーゼ、グリーンピースとキャビア、2人でひとつ選ぶメインの肉、そのあと手打ちパスタを少しずつ、数種から3つ、または好きなだけ、燻製のアイスクリーム (2026年5月〜10月)・ワインかノンアルコールのコンブチャのペアリング (2026年5月、8月)',
    neighborhood: '日本橋人形町2-10-11 KYOE PLAZA日本橋人形町 4F、Amazake Yokocho。人形町駅から徒歩2分、水天宮前駅から徒歩約3分',
    gf_detail: '予約時に要確認。アレルギーでコースが組めない場合は予約を断ることがある (食べログ)。手打ちパスタが中心のひとつ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない: メインの肉と魚の料理を選ぶ決まったコース。',
    notes: '[イタリアン・人形町、Azabu-Juban から移った薪火のカウンター] KYOE PLAZA の4階のイタリアンのカウンターで、シェフの Naoki Yokoe さんがAzabu-Juban で10年営んだあと2021年に移り、前の店になかった薪窯を入れた。全員19時に一斉に始まる約10品のプリフィクス (2026年5月で19,800円)。燻製の香りがアイスクリームまで行き渡り、パスタはメインのあとに3種類以上を少しずつ、目の前で作る。厨房はシェフひとりなので、話せるのはデザートになってから (2026年5月)。2023年と2025年の食べログ イタリアン百名店。大人のみ。予約は食べログ、Instagram、LINE で。',
  });
}

// ================================================================ 御料理 心馬
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13276509/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kokoroba2022.com/';
  const H = day(['12:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_oryori_kokoroba_ningyocho', name: '御料理 心馬 (Oryori Kokoroba)', category: 'OMNI',
    lat: 35.685631, lng: 139.783916, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Courses include tempura, sesame soy sauce and an oyakodon with a dashi-based sauce (2025–26 reviews); nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a dashi-based kaiseki course with seafood and meat.',
    hours_raw: 'Daily 12:00–14:00 and 18:00–22:00, including holidays; closing days irregular, and the phone is not always answered (Tabelog). Reservation only. Run single-handed by the owner, who cooks and serves (Tabelog; 2026 reviews). Service charge 10% (Tabelog). Cards, transport IC, Rakuten Edy, PayPay, d Barai, Rakuten Pay and au PAY (Tabelog). 6 counter seats; non-smoking, including the whole building; smart casual recommended (Tabelog). Opened 20 August 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-10-11, KYOE PLAZA 3F, on Amazake Yokocho — 2 min from Ningyocho Stn exit A2, 3 min from exit A3 and Suitengumae Stn exit 7',
    cuisine: 'Kaiseki at a 6-seat counter of Kiso hinoki and cedar, with ingredients from Toyosu and 10–15 sakes (Tabelog) · evening courses (tax included; service 10% on top): Light ¥13,000 for two or more, Standard ¥18,000, Full ¥24,000 (Tabelog); sake pairing ¥550 a cup (Tabelog) · lunch: oyakodon course ¥4,950 with a welcome drink, appetiser, sashimi, tempura, a grilled dish, soup and an oyakodon of Daisendori chicken (November 2025); lunch diners spent about ¥4,000–¥8,000 (January–March 2026) · dishes in 2026: ichiban dashi, anago chawanmushi, hamo clear soup, wagyu with noodles, matsutake and yakitori warm noodles, sea urchin sashimi, unadon (August–September 2026)',
    website: SITE, gmaps: gm('御料理 心馬 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Kaiseki · Ningyocho, a one-person kaiseki counter in hinoki] A six-seat kaiseki counter on the third floor of KYOE PLAZA, built in Kiso hinoki and cedar like a tea room, and run entirely by one owner who cooks, explains and serves. Courses start with a clean, strong ichiban dashi and move through Toyosu fish, a hamo clear soup and wagyu with noodles, with a sake pairing at ¥550 a cup. Lunch is the way in: an oyakodon course for about ¥5,000. Several 2026 diners say it now holds a Michelin star. Because one person does everything, the owner is often in the back, and some evenings had only one or two parties (April, June 2026). One June 2026 diner found the portions a little small.",
    chef_bio: { chef_name: null, roles: ['Owner, cooking and serving single-handed (Tabelog shop text; "a one-person operation", June 2026 review)'], origin: null,
      background: 'Opened 20 August 2022 (Tabelog). Per the Tabelog shop text: a tea-room-style counter of Kiso hinoki and cedar; ingredients from Toyosu Market; tableware by artisans from across Japan; the owner\'s greeting aims for "a comfortable home-like atmosphere that is both soft and dignified". Horse ornaments reflect the name (August 2026). Reviews from June, July and September 2026 describe it as Michelin-starred; an April 2026 review calls it Michelin Guide-listed.',
      philosophy: '"Subtle yet extravagant" Japanese elegance in cuisine, decor and hospitality (owner\'s greeting, Tabelog).', specialty: 'Ichiban dashi; oyakodon lunch course.',
      anecdotes: [
        { text: '"Since it\'s a one-person operation, the chef is often in the back, making it hard to see" — June 2026.', source: R + 'B530181116/' },
        { text: '"The first dish is the ichiban dashi, featuring a robust bonito flavor that is free of any impurities" — August 2026.', source: R + 'B534066955/' },
        { text: '"Since it was a Sunday night, there was only one staff member, and I was the only customer for a while." — September 2026.', source: R + 'B536403231/' },
      ],
      japanese_sources_summary: '食べログ: 御料理 心馬、日本料理、日本橋人形町2-10-11 KYOE PLAZA 3F、人形町駅A2出口から徒歩2分、毎日12:00〜14:00、18:00〜22:00、不定休、完全予約制、サービス料10%、カード・電子マネー・QR可、カウンター6席、禁煙、2022年8月20日オープン、店主がひとりで料理も接客も、Kiso の檜と杉の茶室風、Toyosu の食材、日本酒10〜15種、夜のコース13,000円・18,000円・24,000円、日本酒のペアリング1杯550円。口コミ(2025年11月〜2026年9月): 昼の親子丼のコース4,950円 (Daisendori)、一番出汁、穴子の茶碗蒸し、鱧のお椀、和牛と麺、ミシュランの星を得たという声、量が少なめという声も、客が1〜2組だけの日も。',
      confidence: 'medium', sources: [TB, SITE, TB + 'dtlmenu/', R + 'B517386870/', R + 'B520403075/', R + 'B520522676/', R + 'B522890517/', R + 'B523934699/', R + 'B525582760/', R + 'B530181116/', R + 'B532851656/', R + 'B534066955/', R + 'B536403231/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; smart casual; the owner explains each dish.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_approx: 'block', address_ja: '東京都中央区日本橋人形町2-10-11 KYOE PLAZA 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated November 2025–September 2026.' },
    pin_source: `Tabelog ${TB} gives 35.685583, 139.784022, 6.4 m from on your side (tokyo_on_your_side_ningyocho, address_ja "東京都中央区日本橋人形町2-10-11 2F"). ${BLD} Kokoroba placed 6 m west; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B517386870/'],
    price_note: 'Evening courses from Tabelog (tax included; 10% service on top); lunch from a November 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Evening Light course (2 or more)', '¥13,000', 'Dinner', 'ask', 'no', 'Tabelog; ¥14,300 with service.', 'light'),
      it('', '', 'Evening Standard course', '¥18,000', 'Dinner', 'ask', 'no', 'Tabelog; ¥19,800 with service.', 'standard'),
      it('', '', 'Evening Full course', '¥24,000', 'Dinner', 'ask', 'no', 'Tabelog; ¥26,400 with service.', 'full'),
      it('', '', 'Lunch oyakodon course', '¥4,950', 'Lunch', 'ask', 'no', 'November 2025.', 'oyakodon'),
    ] }, {
    cuisine: 'Kiso の檜と杉の6席のカウンターの懐石、Toyosu の食材と日本酒10〜15種 (食べログ)・夜のコース (税込み、別にサービス料10%): 2人からのライト13,000円、スタンダード18,000円、フル24,000円 (食べログ)。日本酒のペアリング1杯550円 (食べログ)・昼: 親子丼のコース4,950円、ウェルカムドリンク、先付、刺身、天ぷら、焼き物、汁物、Daisendori の親子丼 (2025年11月)、昼の支払いは約4,000円〜8,000円 (2026年1月〜3月)・2026年の料理: 一番出汁、穴子の茶碗蒸し、鱧のお椀、和牛と麺、松茸と焼き鳥の温かい麺、雲丹の刺身、鰻丼 (2026年8月〜9月)',
    neighborhood: '日本橋人形町2-10-11 KYOE PLAZA 3F、Amazake Yokocho。人形町駅A2出口から徒歩2分、A3出口と水天宮前駅7番出口から徒歩3分',
    gf_detail: '予約時に要確認。コースには天ぷら、ごま醤油、出汁のたれの親子丼も (2025〜26年の口コミ)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 出汁を使う魚介と肉の懐石のコース。',
    notes: '[懐石・人形町、檜のカウンターでひとりで営む懐石] KYOE PLAZA の3階にある6席の懐石のカウンターで、茶室のようにKiso の檜と杉で造り、店主がひとりで料理、説明、給仕まですべてこなす。コースは澄んで力強い一番出汁から始まり、Toyosu の魚、鱧のお椀、和牛と麺へ。日本酒のペアリングは1杯550円。入りやすいのは昼で、親子丼のコースが約5,000円。2026年の口コミではミシュランの星を得たという声が複数ある。ひとりで営むので店主は奥にいることが多く、1〜2組だけの夜もあった (2026年4月、6月)。2026年6月には量が少し少なめという声も。',
  });
}

save();
