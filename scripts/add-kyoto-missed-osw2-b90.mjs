// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 90.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   Brands checked against queue-status.jsonl (full names and brand stems), than.co.jp/brands and 株式会社WILL (will-food.com).
//   + ビストロ山形 Bistro Yamagata (French bistro with game, in an alley off Nishikikoji-Muromachi; official site; 2025–26 reviews)
//   + grand-bar (cocktail and whisky bar near Karasuma-Oike since 2006; 2025–26 reviews)
//   + いもぼう平野家本家 Imobo Hirano-ya Honke (the imobo house in Maruyama Park, 14th generation per the official site)
//   - 鉄板焼 ときわ — big-chain hotel venue (Hotel Okura Kyoto 17F)
//   - 京都カレー製作所 カリル 市役所店 — same concept, second shop of kyoto_curry_kariru
//   - ハイボールバー京都烏丸1923 — chain (1923 highball bars; ruled at osw8-52)
//   - 京もつ鍋 秀寅 — large parent (有限会社起福, NTA T1130002022210: 17 shops in Kyoto and Osaka per its recruiting page)
//   - ブルーブックスカフェ 京都 — chain (BLUE BOOKS cafe by Blue Note Japan, run by 大垣書店, 35 shops; in Hotel Resol Trinity Kyoto)
//   - &COFFEE MAISON KAYSER SUINA室町店 — chain (Maison Kayser)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Service charges: grand-bar 10% (Tabelog); いもぼう平野家本家 none (official site).
//   Pins: Tabelog /en/ point, cross-checked with GSI; いもぼう has no lot number (inside Maruyama Park), so it is marked approximate;
//   each 9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-90');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26001495', '鉄板焼 ときわ: big-chain hotel venue — Hotel Okura Kyoto 17F (Tabelog address)');
skip('26044941', '京都カレー製作所 カリル 市役所店: same concept — a second shop of 京都カレー製作所 カリル, already in data as kyoto_curry_kariru');
skip('26029875', 'ハイボールバー京都烏丸1923: chain — the 1923 highball bars (as ruled for 26019835, osw8-52)');
skip('26032617', '京もつ鍋 秀寅: large parent — Tabelog invoice T1130002022210 is 有限会社起福 (NTA), whose recruiting page (en-gage.net/kifukurecruit_career) lists 17 shops and 10–11 formats in Kyoto and Osaka');
skip('26031321', 'ブルーブックスカフェ 京都: chain and large parent — a BLUE BOOKS cafe brand produced by 株式会社ブルーノート・ジャパン and run by 株式会社大垣書店 (35 shops), the ground-floor tenant of Hotel Resol Trinity Kyoto (Resol release 791, resol.jp)');
skip('26032149', '&COFFEE MAISON KAYSER SUINA室町店: chain — Maison Kayser’s &COFFEE brand (maisonkayser.jp)');

// ================================================================ ビストロ山形
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001117/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://bistro-yamagata.com/'; const MENU = SITE + 'menu/'; const GIB = SITE + 'gibier/'; const ABOUT = SITE + 'about/';
  const H = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_bistro_yamagata', name: 'ビストロ山形 (Bistro Yamagata)', category: 'OMNI',
    lat: 35.00460423786944, lng: 135.75873690035917, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses come with homemade bread and end with curry or hayashi rice; lunches include breaded pork cutlet; no gluten information is published (official menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a French bistro built on seafood, wagyu and game such as bear and boar (official site).',
    hours_raw: 'Monday–Saturday: lunch 11:30–14:00, dinner 17:00–23:00 (last order 22:00); closed Sunday (official site; Tabelog). Game is delivered irregularly — call ahead to ask; the bear hot-pot and lobster courses need booking (official site). Cards (VISA, Master) (Tabelog). Shoes off at the entrance: 8–10 counter seats on the ground floor, about 20 seats at sunken tables upstairs (official site). In a narrow alley off Nishikikoji, east of Muromachi, about 2 minutes from Shijo station Exit 22 (official site; reviews). Designated smoking area (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishikikoji-Muromachi',
    cuisine: 'French bistro of seasonal seafood, vegetables and game from contracted hunters (official site) · omakase course ¥8,250 tax in: hors d’oeuvre salad, three seasonal plates, soup, Hokkaido potatoes baked in butter, a main of fish, Kagoshima wagyu steak or red-wine-braised wagyu cheek, curry or hayashi rice, dessert (official menu) · live lobster course ¥9,900–12,100; bear hot-pot course ¥19,800 (official menu) · lunch from about ¥1,300: hamburg steak, chicken steamed in wine, pork cutlet (2025–2026 reviews) · game hamburgers of bear or Japanese badger on some nights (November 2024)',
    website: SITE, gmaps: gm('ビストロ山形 錦小路'), menu_url: MENU,
    notes: "[French · alley off Nishikikoji, a veteran’s bistro with game] A shoes-off townhouse bistro where a chef of 40 years cooks at the counter: seasonal French courses ending in curry or hayashi rice, live lobster, and game — bear hot pot, boar, even badger. Lunch from about ¥1,300. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Chef (not named)'], origin: null,
      background: 'A veteran chef of about 40 years in the trade (May 2025 review) who still cooks at the counter; a September 2025 reviewer saw the same chef working seven or eight years earlier. The restaurant buys game from hunters it contracts with, and buys bear whole, direct from matagi hunters (official site).',
      philosophy: 'Fresh seafood, vegetables and game, chosen at home and abroad, cooked as French food that lets the seasonal ingredients speak (official site).',
      specialty: 'Bear hot pot; seasonal courses ending in curry or hayashi rice.',
      anecdotes: [
        { text: 'In November 2024 the game hamburger was bear and Japanese badger; the server first checked the diner was fine with a strong game flavour.', source: R + 'B495761820/' },
        { text: 'A July 2025 regular came back on Yoiyama night of the Gion Festival for the omakase course.', source: R + 'B471839627/' },
        { text: 'An August 2026 lunch guest noticed a suit cover hanging on the wall as a sign of the care taken.', source: R + 'B533127400/' },
      ],
      japanese_sources_summary: '公式サイト: ビストロ山形、京都市中京区錦小路通室町東入ル占出山町310-5、阪急烏丸駅・地下鉄四条駅22番出口より徒歩2分、国内外から厳選した新鮮な魚介類や野菜、ジビエなど旬の素材を活かしたフランス料理、おすすめはカウンター席、月〜土 ランチ11:30〜14:00、ディナー17:00〜23:00 (オーダーストップ22:00)、1階カウンター8〜10席、2階約20席、すべて掘りごたつ、玄関で靴を脱ぐ。おまかせコース税込8,250円 (オードブルサラダ、季節の一品3皿、スープ、北海道産じゃがいもバター焼き、本日の鮮魚・鹿児島産黒毛和牛イチボステーキ・黒毛和牛ホホ肉の赤ワイン煮から選ぶメイン、パン、カレーかハヤシライス、デザート、コーヒーか紅茶)、活オマール海老のコース税込9,900〜12,100円、熊鍋コース税込19,800円。ジビエ: 猟師と契約した質の良いジビエ、熊肉はマタギから直送、一頭買い、猪の生ハム、味噌仕立ての猪鍋、入荷は電話で確認を。食べログ: フレンチ、30席、カード (VISA、Master)。口コミ (2023〜2026年、英語): 路地の奥の隠れ家、ランチは3〜4種で1,300円ほど、ハンバーグ、鶏の白ワイン蒸し和風ソース、とんかつ1,400円、40年のベテランの料理人、熊やアナグマのハンバーグ、パンは自家製、締めのカレー。',
      confidence: 'medium', sources: [SITE, MENU, GIB, ABOUT, TB, R + 'B471839627/', R + 'B495761820/', R + 'B506927842/', R + 'B513414717/', R + 'B531501136/', R + 'B533127400/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; English on the official menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通室町東入ル占出山町310-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news and menu current in 2026) and Tabelog; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004604, 135.758737); cross-checked: GSI 京都府京都市中京区占出山町310番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B513414717/', R + 'B533127400/'],
    price_note: 'Courses from the official menu (tax in); lunch prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('おまかせコース', '', 'Chef’s omakase course', '¥8,250', 'Dinner', 'ask', 'no', '', 'omakase'),
      it('活オマール海老のコース', '', 'Live lobster course', '¥9,900–12,100', 'Dinner', 'ask', 'no', 'Market price.', 'lobster'),
      it('熊鍋コース', '', 'Bear hot-pot course', '¥19,800', 'Dinner', 'ask', 'no', 'Book ahead; depends on supply.', 'kuma'),
      it('', '', 'Lunch (e.g. hamburg steak, chicken steamed in wine)', '¥1,300', 'Lunch', 'ask', 'no', 'September 2025.', 'lunch'),
      it('', '', 'Pork cutlet lunch', '¥1,400', 'Lunch', 'no', 'no', 'August 2026.', 'katsu'),
    ] }, {
    cuisine: '旬の魚介、野菜、契約した猟師のジビエのビストロ (公式サイト)・おまかせコース税込8,250円 (オードブルサラダ、季節の一品3皿、スープ、北海道産じゃがいもバター焼き、鮮魚か鹿児島産黒毛和牛のステーキかホホ肉の赤ワイン煮、カレーかハヤシライス、デザート) (公式メニュー)・活オマール海老のコース税込9,900〜12,100円、熊鍋コース税込19,800円 (公式メニュー)・ランチは1,300円ほどから、ハンバーグ、鶏のワイン蒸し、とんかつ (2025〜2026年の口コミ)・熊やアナグマのジビエのハンバーグの日も (2024年11月)',
    neighborhood: '錦小路室町',
    gf_detail: '要確認。コースに自家製パン、締めにカレーかハヤシライス、ランチにとんかつも。グルテンの情報は公開されていない (公式メニュー、口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介、和牛、熊や猪などのジビエのビストロ (公式サイト)。',
    notes: '[フレンチ・錦小路の路地、ベテランのジビエのビストロ] 靴を脱いで上がる町家のビストロ。料理人歴40年のシェフがカウンターで、カレーかハヤシライスで締める季節のコース、活オマール海老、熊鍋や猪、アナグマまでのジビエを。ランチは1,300円ほどから。日曜休み。',
  });
}

// ================================================================ grand-bar
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004339/'; const R = TB + 'dtlrvwlst/';
  const H = day(['19:00', '02:00']);
  put({
    id: 'kyoto_grand_bar_karasuma_oike', name: 'grand-bar', category: 'OMNI',
    lat: 35.01005466786698, lng: 135.761872690412, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail and whisky bar with small plates such as truffle nuts and raisin butter; no gluten information is published (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks and small plates; snacks such as raisin butter are not vegan, and no vegan information is published (reviews).',
    hours_raw: '19:00–02:00 daily; closed 31 December–2 January (Tabelog). Service charge 10% (course prices include it) (Tabelog). Cards and PayPay; no e-money (Tabelog). 27 seats: 8 at the counter, tables and sofa boxes; private hire for 20–40 (Tabelog). Smoking allowed throughout, so no minors (Tabelog). 2F, about 3 minutes from Karasuma-Oike station Exit 3-1 (Tabelog). Opened 31 August 2006 (Tabelog). English menu available (Tabelog). The website listed on Tabelog (grand-bar.com) no longer belongs to the bar (checked 2026-11-08).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Oike',
    cuisine: 'Cocktail and whisky bar: original cocktails with seasonal fruit such as Shine Muscat grapes and pears (2024–2025 reviews) · a wide, fairly priced whisky list, e.g. Yamazaki (2025–2026 reviews) · small plates: truffle nuts, raisin butter (2023–2024 reviews) · counter and big sofa seats at the back for groups (September 2026)',
    website: null, gmaps: gm('grand-bar 烏丸御池'), menu_url: null,
    notes: "[Bar · Karasuma-Oike, cocktails and whisky since 2006] A calm, plush second-floor bar a few minutes from Karasuma-Oike: friendly bartenders, seasonal-fruit cocktails, a broad whisky shelf and deep sofas at the back. Open 7 pm–2 am daily; 10% service; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Master and bartenders (not named)'], origin: null,
      background: 'Opened in August 2006 (Tabelog). Reviewers (2023–2026) describe a friendly master and staff who chat about whisky and make original cocktails from seasonal fruit.',
      philosophy: null,
      specialty: 'Seasonal-fruit cocktails; whisky.',
      anecdotes: [
        { text: 'A September 2024 visitor enjoyed an original cocktail of Shine Muscat grapes and pears.', source: R + 'B493656239/' },
        { text: 'A January 2026 first-timer chatted about whisky with the staff over a Yamazaki.', source: R + 'B521830914/' },
      ],
      japanese_sources_summary: '食べログ: grand-bar、バー・ダイニングバー・バル、京都市中京区間之町姉小路上ル木之下町274-12 カームネス御池2F、地下鉄烏丸御池駅3-1出口から徒歩3分、19:00〜翌2:00、定休日なし (12月31日〜1月2日休み)、サービス料10% (コースは込み)、カード可、電子マネー不可、PayPay可、27席 (カウンター8、テーブル2、ボックス2)、貸切20〜40名、全席喫煙可のため未成年不可、英語メニューあり、2006年8月31日オープン。口コミ (2023〜2026年、英語): 落ち着いた高級感のある雰囲気、気さくなマスター、季節のフルーツのオリジナルカクテル (シャインマスカットや梨)、ウイスキーが豊富で値段も手ごろ、山崎、トリュフナッツ、レーズンバター、奥に大きなソファ席。',
      confidence: 'low', sources: [TB, R + 'B477780058/', R + 'B493656239/', R + 'B517965474/', R + 'B521830914/', R + 'B522463113/', R + 'B535195590/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; 10% service; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区間之町姉小路上ル木之下町274-12 カームネス御池 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (corporate member); reviews dated through September 2026. The domain grand-bar.com now serves an unrelated site.' },
    pin_source: `Tabelog ${TB} (35.010055, 135.761873); cross-checked: GSI 京都府京都市中京区木之下町274番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published prices; reviews report about ¥2,000–5,000 a head, plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Seasonal-fruit cocktail', '', 'Drinks', 'ask', 'ask', '', 'fruitcocktail'),
      it('', '', 'Whisky', '', 'Drinks', 'ask', 'ask', '', 'whisky'),
      it('', '', 'Truffle nuts', '', 'Snacks', 'ask', 'ask', '', 'nuts'),
    ] }, {
    cuisine: 'カクテルとウイスキーのバー。シャインマスカットや梨など季節のフルーツのオリジナルカクテル (2024〜2025年の口コミ)・品ぞろえが多く値段も手ごろなウイスキー、たとえば山崎 (2025〜2026年の口コミ)・トリュフナッツ、レーズンバターなどのつまみ (2023〜2024年の口コミ)・カウンターと、奥にはグループ向けの大きなソファ席 (2026年9月)',
    neighborhood: '烏丸御池',
    gf_detail: '要確認。トリュフナッツやレーズンバターなどのつまみのあるカクテルとウイスキーのバー。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: '要確認。飲み物とつまみ。レーズンバターなどはヴィーガン不可、ヴィーガンの情報は公開されていない (口コミ)。',
    notes: '[バー・烏丸御池、2006年からのカクテルとウイスキー] 烏丸御池駅から数分、2階の落ち着いた上質なバー。気さくなバーテンダー、季節のフルーツのカクテル、豊富なウイスキー、奥には深いソファ。毎日19時〜深夜2時、サービス料10%、喫煙可。',
  });
}

// ================================================================ いもぼう平野家本家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002347/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.imobou.com/'; const HIST = SITE + 'imobou/'; const MENU = SITE + 'menu/';
  const H = day(['11:00', '14:30'], ['17:00', '21:00']);
  put({
    id: 'kyoto_imobo_hiranoya_honke', name: 'いもぼう平野家本家 (Imobo Hirano-ya Honke)', category: 'OMNI',
    lat: 35.00434658113477, lng: 135.7796851810457, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Imobo is ebi-imo taro simmered with dried cod; sets add tempura, a grated-yam nori roll, Gion-dofu and clear soup; seasonings are not published (official menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the signature imobo is simmered with dried cod (bodara) (official site).',
    hours_raw: 'Lunch 11:00–14:30 (last entry and order 14:00); dinner 17:00–21:00 (last entry 19:30, last order 20:00); closed irregularly (official site). Tabelog lists it as open all year, including New Year. No table charge or service charge (official menu). Cards (VISA, JCB, AMEX, Diners) (Tabelog). 120 seats, with tatami rooms, chairs and private rooms; parking for 4 cars (Tabelog). Kaiseki courses need booking two days ahead, for two or more (official menu). Inside Maruyama Park, on the north side of Yasaka Shrine (official site). A shop with a similar name nearby is a separate business (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Maruyama Park',
    cuisine: 'Home of いもぼう (imobo), a Kyoto dish of ebi-imo taro and Hokkaido dried cod simmered together for a full day and night, created in the mid-Edo period by the family’s founder (official site) · gozen sets ¥3,300–6,050 tax in: imobo with Gion-dofu, a grated-yam nori roll, tempura, rolled omelette, clear soup with a gourd-shaped egg (official menu) · yudofu set ¥4,180; hamo-ju in summer ¥4,950 (official menu) · imobo kaiseki ¥7,700–17,600, booked two days ahead (official menu) · summer hamo-shabu course (2026, official site)',
    website: SITE, gmaps: gm('いもぼう平野家本家 円山公園'), menu_url: MENU,
    notes: "[Kyoto cuisine · Maruyama Park, a family recipe for some 300 years] The house that created imobo — ebi-imo taro simmered a day and a night with dried cod — kept by one heir per generation since the mid-Edo founder. Gozen sets from ¥3,300 in a sukiya house in Maruyama Park; no service charge.",
    chef_bio: { chef_name: null, roles: ['14th-generation head of the house (official site)'], origin: null,
      background: 'The official site traces imobo to the Hirano house’s first-generation founder, who served the prince-abbot of Shoren-in in the Genroku–Kyoho era, grew the taro that became ebi-imo in Maruyama, and cooked it with dried cod. The method, called meoto-daki, has passed by oral tradition to one heir per generation for about 300 years: from the 11th generation, revered as the house’s restorer, to the 14th (current) and a named 15th. Yoshikawa Eiji and Kawabata Yasunari wrote in its praise, and Matsumoto Seicho set a novel here (official site). A member of the Kyoto cuisine association, among others (official site).',
      philosophy: 'To keep the genuine taste of imobo, taught to the heir alone (official site).',
      specialty: 'Imobo: ebi-imo and dried cod, simmered a full day and night.',
      anecdotes: [
        { text: 'A January 2025 diner noted that the Hirano family has both a Honke and a Honten near Maruyama Park, and chose the Honke.', source: R + 'B499690564/' },
        { text: 'A September 2024 host took guests from Italy for tempura, eel and yuba dengaku before Chion-in.', source: R + 'B492340335/' },
        { text: 'A February 2026 visitor found a warm welcome from an older woman at the register on a quiet holiday weekend.', source: R + 'B523458100/' },
      ],
      japanese_sources_summary: '公式サイト: 京名物「いもぼう」平野家本家、京・東山祇園円山公園内 (八坂神社北側)、300年続く伝統料理、「いもぼう」は登録商標、一子相伝。江戸中期、元禄から享保にかけ青蓮院の宮様に仕えた初代・平野権太夫が、宮様が九州から持ち帰った唐芋を円山で育て海老芋に、宮中への献上品の棒鱈と炊き合わせて「いもぼう」を考案。海老芋と一週間余りかけて戻した北海道産の棒鱈を丸一昼夜炊く「夫婦炊き」。中興の祖十一代・北村粂蔵、十二代・藤之助、十三代・多造、十四代・眞純 (当代)、十五代・晋一。吉川英治「百年を伝えし味には百年の味あり」、川端康成「美味延年」、松本清張の小説の舞台。京都料理組合、京都料理芽生会、京名物百味会。営業 11:00〜14:30 (最終入店・L.O.14:00)、17:00〜21:00 (最終入店19:30、L.O.20:00)、不定休。お品書き: 席料・サービス料なし、月御膳・雪御膳3,300円、花御膳3,850円、円山御膳4,950円、都御膳6,050円、湯豆腐御膳4,180円、鱧重4,950円 (6月〜9月中旬)、いもぼう京会席7,700〜17,600円 (2名から、2日前までに予約)、いずれも税込。近くによく似た名前の店があるが別の店。食べログ: 日本料理、11:00〜20:30、年中無休、カード可、120席、駐車場4台。口コミ (2024〜2026年、英語): 海老芋と棒鱈、本家と本店がある、個室、ゆば田楽、天ぷら、予約で満席に近い。',
      confidence: 'medium', sources: [SITE, HIST, MENU, TB, R + 'B492340335/', R + 'B499690564/', R + 'B507661371/', R + 'B518920145/', R + 'B523458100/', R + 'B535586110/'] },
    cultural_comfort: { level: 'japanese', note: 'Book ahead at busy times; no service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園円山公園内八坂神社北側',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news through July 2026) and Tabelog; reviews dated through May 2026. Historic family house: 14th generation current per the official site.' },
    pin_source: `Tabelog ${TB} (35.004347, 135.779685); the address has no lot number (inside Maruyama Park, north of Yasaka Shrine) and GSI resolves only to 円山町 (town centroid 320m) — marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official menu, tax in; no table or service charge.', last_checked: TODAY, items: [
      it('月御膳', '', 'Tsuki gozen: imobo, Gion-dofu, small dish, clear soup, rice, pickles', '¥3,300', 'Gozen', 'ask', 'no', '', 'tsuki'),
      it('雪御膳', '', 'Yuki gozen: imobo, grated-yam nori roll, small dish, clear soup, rice, pickles', '¥3,300', 'Gozen', 'ask', 'no', '', 'yuki'),
      it('円山御膳', '', 'Maruyama gozen: imobo, nori roll, Gion-dofu, rolled omelette and more', '¥4,950', 'Gozen', 'ask', 'no', '', 'maruyama'),
      it('都御膳', '', 'Gozen with imobo, tempura, rolled omelette and more', '¥6,050', 'Gozen', 'no', 'no', '', 'miyako'),
      it('湯豆腐御膳', '', 'Yudofu gozen (not in April or November)', '¥4,180', 'Gozen', 'ask', 'no', '', 'yudofu'),
      it('いもぼう京会席', '', 'Imobo kaiseki (book two days ahead, 2+)', '¥7,700–17,600', 'Courses', 'ask', 'no', '', 'kaiseki'),
    ] }, {
    cuisine: '海老芋と北海道産の棒鱈を丸一昼夜炊き合わせる京名物「いもぼう」の家。江戸中期に初代が考案 (公式サイト)・御膳は税込3,300〜6,050円、いもぼうに祇園豆腐、とろろ海苔巻、天ぷら、出し巻、ひさご玉子の梅椀など (公式のお品書き)・湯豆腐御膳4,180円、夏の鱧重4,950円 (公式のお品書き)・いもぼう京会席7,700〜17,600円、2日前までに予約 (公式のお品書き)・夏の鱧しゃぶコース (2026年、公式サイト)',
    neighborhood: '円山公園',
    gf_detail: '要確認。いもぼうは海老芋と棒鱈の炊き合わせ。御膳には天ぷら、とろろ海苔巻、祇園豆腐、吸物も。調味料は公開されていない (公式のお品書き)。',
    vegan_detail: 'ヴィーガン不可。名物のいもぼうは棒鱈と炊き合わせる (公式サイト)。',
    notes: '[京料理・円山公園、約300年の家伝の味] 海老芋と棒鱈を一昼夜炊く「いもぼう」を生んだ家。江戸中期の初代から一子相伝で受け継ぐ。円山公園の数寄屋造りで御膳は3,300円から、サービス料なし。',
  });
}

save();
