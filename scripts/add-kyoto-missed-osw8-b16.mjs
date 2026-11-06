// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 16.
//   + RUNG ARUN タイ料理 (Thai on Kiyamachi above Sanjo, opened 2025; core list)
//   + OFURO (young izakaya in a Sanjo food alley, seafood-heaped rolls; core list)
//   + 中善 Nakazen (couple-run Kitashirakawa kappo since 2009; notable list)
//   + Synager (French in a machiya with aroma and non-alcoholic pairings; notable list)
//   Picked 2026-11-05 after batch 15. `queue.mjs kyoto-missed next core 200`: 新潟カツ丼タレカツ 高倉六角店 26040631 (skipped,
//   chain), RUNG ARUN 26042797, OFURO 26037379. `next notable 200`: ＨＡＮＡ吉兆 26000563 (skipped, Kyoto Kitcho group),
//   中善 26014039, Synager 26036071. Same-name check first: no other RUNG ARUN, OFURO, 中善 or Synager in our crawls (OFURO's
//   sister shop SAUNA 26039479 is a different name, not in data). None of the four is in data/kyoto.json: grep by name and
//   address (上大阪町528, 道祐町135, 久保田町26, 壺屋町512) found none — 上大阪町528 also holds 中華そば らんたん
//   (kyr_chuka_soba_rantan), the ground-floor ramen shop of the same building.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040631', '新潟カツ丼タレカツ 高倉六角店: a branch of the 新潟カツ丼 タレカツ chain — web listings show at least the 本店 (Jimbocho), 日比谷店, 神保町すずらん通り店, 吉祥寺店 and KITTE大阪店 besides this Kyoto shop, 5+ same-name shops (Greg, 2026-11-05).');
skip('26000563', 'ＨＡＮＡ吉兆: a shop of the Kyoto Kitcho group (京都吉兆) — Tabelog EN "HANA Kiccho"; web: founded 1991 as 花吉兆 by 徳岡孝二, listed with 嵐山本店 and 松花堂店 among the group\'s shops (about 7), and our crawls hold 京都吉兆 ジェイアール京都伊勢丹店 26042887 — a sub-brand of a large parent counts as a chain (Greg, 2026-11-05).');

// ================================================================ RUNG ARUN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26042797/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_rung_arun_thai', name: 'RUNG ARUN タイ料理 (Rung Arun Thai)', category: 'OMNI',
    lat: 35.009615, lng: 135.770680, cuisine_type: 'thai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Thai rice and rice-noodle dishes, but also fried spring rolls, egg noodles, fish-sauce and soy-based sauces; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but most dishes use fish sauce, shrimp, pork or chicken (Tabelog; 2026 reviews).',
    hours_raw: 'Tuesday to Sunday and holidays 11:30–15:00 and 17:00–22:00; closed Monday (Tabelog). Reservations accepted; bookings lapse 30 minutes after the time without contact; two-hour limit when busy (Tabelog). 23 seats: 5 at the counter, 18 at tables; private hire 20–50; non-smoking; free Wi-Fi (Tabelog). Cards and PayPay (Tabelog). English menu with photos; takeaway (Tabelog). Third floor of 遊里香ビル on Kiyamachi above Sanjo, above a ramen shop; 3 min walk from Sanjo Stn (Keihan) (Tabelog; July 2026). Opened 2 June 2025 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi north of Sanjo, 3rd floor — 3 min walk from Sanjo Stn',
    cuisine: 'Thai restaurant (Tabelog) · tom yum kung hot pot, gapao rice, seafood curry, Thai beers and Thai milk tea (Tabelog) · lunch sets with salad, soup, shrimp chips and a mini dessert — khao man gai set ¥1,100; pad thai with pork-ball soup ¥1,500; green curry with Thai omelette; tom yum seafood noodles with egg fried rice (2026 reviews) · po pia tod, rad na mee krob moo ¥1,210, sup nor mai bamboo-shoot salad ¥1,100 (2026 reviews) · Singha (July 2026) · dinner about ¥3,000–5,000 (Tabelog)',
    website: null, gmaps: gm('RUNG ARUN タイ料理 京都'), menu_url: null,
    notes: '[Thai · Kiyamachi above Sanjo, lunch sets upstairs] A third-floor Thai room on Kiyamachi, opened in 2025, easy to miss above a ramen shop. Lunch sets of about ¥1,100–1,500 bring salad, soup, shrimp chips and a mini dessert with khao man gai, pad thai, green curry or tom yum noodles; staff will steer you to milder dishes. Dinner adds tom yum hot pot and seafood curry with Thai beer. English menu. Busy at lunch — book. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: opened 2 June 2025, serving authentic Thai dishes in a wood-toned room for up to 23. Reviewers in 2026 describe friendly staff, kitchen staff who laughed along with a guest practising Thai, and a busy lunch trade.',
      philosophy: null, specialty: 'Lunch sets; pad thai; tom yum.',
      anecdotes: [
        { text: 'An August 2026 regular asked the kitchen to teach the Thai phrase for a dish, mispronounced it into an unintended joke, and the whole room laughed — "something Thai people cherish."', source: R + 'B531637352/' },
        { text: '"I asked the staff for recommendations on milder dishes, and I ended up having a delicious meal." — May 2026.', source: R + 'B530557467/' },
        { text: '"It seems to be a popular spot; I was able to get in early in the evening, but it looked like later customers would have a hard time without a reservation." — May 2026.', source: R + 'B530940426/' },
      ],
      japanese_sources_summary: '食べログ: タイ料理・東南アジア料理・エスニック、中京区上大阪町528 遊里香ビル3F、京阪三条駅から徒歩3分、火〜日・祝 11:30〜15:00・17:00〜22:00、月曜休み、予約可 (30分連絡なしで取消、混雑時2時間制)、23席 (カウンター5、テーブル18)、貸切20〜50名、禁煙、Wi-Fi、カード・PayPay 可、英語メニュー、テイクアウト、ベジタリアン対応あり、2025年6月2日オープン、トムヤムクン鍋、ガパオ、シーフードカレー、タイビール。口コミ (2026年5月〜11月、英語): ランチセット (サラダ、スープ、えびせん、ミニデザート)、カオマンガイ1,100円、パッタイ、グリーンカレー、トムヤムラーメン、ポーピアトート、ラートナー1,210円、スップノーマイ1,100円、昼は混む。',
      confidence: 'medium', sources: [TB, R + 'B510974544/', R + 'B520892546/', R + 'B521852035/', R + 'B530557467/', R + 'B530940426/', R + 'B531637352/', R + 'B532272353/', R + 'B534283451/', R + 'B537326747/', R + 'B538647677/'] },
    cultural_comfort: { level: 'english', note: 'English menu with photos (Tabelog); ask staff for milder dishes; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区上大阪町528 遊里香ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.009615, 135.770680); cross-checked: GSI 京都府京都市中京区上大阪町528番地 (lot) 42 m; same building as kyr_chuka_soba_rantan (ground-floor ramen), 6.5 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532272353/', R + 'B531637352/', R + 'B537326747/'],
    price_note: 'No menu read; prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Khao man gai lunch set', '¥1,100', 'Lunch', 'ask', 'no', 'July 2026.', 'khao_man_gai'),
      it('', '', 'Pad thai with pork-ball soup, lunch set', '¥1,500', 'Lunch', 'ask', 'no', 'October 2026.', 'pad_thai_set'),
      it('', '', 'Rad na mee krob moo (crisp noodles with pork in gravy)', '¥1,210', 'Noodles', 'ask', 'no', 'August 2026.', 'rad_na'),
      it('', '', 'Sup nor mai (spicy bamboo-shoot salad)', '¥1,100', 'Salads', 'ask', 'ask', 'August 2026.', 'sup_nor_mai'),
    ] }, {
    cuisine: 'タイ料理の店 (食べログ)・トムヤムクン鍋、ガパオライス、シーフードカレー、タイビールとタイのミルクティー (食べログ)・ランチセットはサラダ、スープ、えびせん、ミニデザート付き: カオマンガイ1,100円、パッタイと肉団子のスープ1,500円、グリーンカレーとタイ風オムレツ、トムヤムシーフード麺と卵チャーハン (2026年の口コミ)・ポーピアトート、ラートナー1,210円、スップノーマイ1,100円 (2026年の口コミ)・シンハー (2026年7月)・夜は3,000〜5,000円ほど (食べログ)',
    neighborhood: '三条の北、木屋町のビル3階。三条駅から徒歩3分',
    gf_detail: '要確認。米や米粉の麺の料理もあるが、揚げ春巻き、卵麺、ナンプラーや醤油系のソースも。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアン対応ありとあるが、多くの料理にナンプラー、海老、豚、鶏を使う (食べログ、2026年の口コミ)。',
    notes: '[タイ料理・三条の北の木屋町、ビル3階のランチセット] 2025年に開いた、木屋町のビル3階のタイ料理店。1階のラーメン店の上で見落としやすい。1,100〜1,500円ほどのランチセットは、カオマンガイ、パッタイ、グリーンカレー、トムヤム麺にサラダ、スープ、えびせん、ミニデザート付き。辛さ控えめの料理も相談できる。夜はトムヤムクン鍋やシーフードカレーとタイビール。英語メニューあり。昼は混むので予約を。月曜休み。',
  });
}

// ================================================================ OFURO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26037379/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['17:00', '23:00']); const SA = day(['15:00', '23:00']); const SU = day(['15:00', '22:00']);
  put({
    id: 'kyoto_ofuro_sanjo', name: 'OFURO', category: 'OMNI',
    lat: 35.008252, lng: 135.763504, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Izakaya dishes including edamame tempura, a rare salmon cutlet, sushi rolls, hot pots and cheesecake; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood-focused izakaya of sashimi, seafood rolls, katsuo tataki, salmon and fish hot pots (Tabelog; 2026 reviews).',
    hours_raw: 'Monday and Wednesday to Friday 17:00–23:00; Saturday 15:00–23:00; Sunday 15:00–22:00; closed Tuesday; hours may change (Tabelog). Reservations accepted by phone; DMs are not answered during opening hours (Tabelog); 19:00 slots fill, with 90-minute seatings at busy times (March 2026). No table charge (Tabelog original チャージ料無し). Orders by smartphone (July 2026). 16 seats: 6 at a ground-floor counter, 10 at tables upstairs; private hire up to 20; non-smoking, smoking area outside (Tabelog; July 2026). Cards (VISA, JCB, AMEX) and PayPay (Tabelog). In the 三条食彩ろぉじ alley of small shops — look for the red noren (Tabelog; April 2026).',
    hours: { 0: WK, 2: WK, 3: WK, 4: WK, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo shokusai roji, off Sanjo near Karasuma Oike',
    cuisine: 'Young, lively izakaya with a sister shop, SAUNA (2026 reviews) · seafood overflowing from the negitoro roll, mentaiko roll, katsuo tataki, squid sashimi several ways (2026 reviews) · edamame tempura, a popular dish; salmon rare cutlet; cream cheese dip; hamo and matsutake tempura (2026 reviews) · shirako dishes in winter, a "gout hot pot", yellowtail hot pot (2026 reviews) · cheesecake of the day (2026 reviews) · OFURO sour with Amaou strawberry, yuzu honey; Japanese sake (2026 reviews) · bills about ¥3,000–6,000 (Tabelog)',
    website: null, gmaps: gm('OFURO 京都 三条食彩ろぉじ'), menu_url: null,
    notes: '[Izakaya · Sanjo food alley, seafood rolls and edamame tempura] A small, young izakaya behind a red noren in a lane of tiny shops off Sanjo: sushi rolls heaped with seafood, edamame tempura, rare salmon cutlet, katsuo tataki and fish hot pots in winter, with fruit sours and sake. Staff are friendly and chatty, and both regulars and travellers fill it — book, as evening slots go fast. One August 2026 guest found the counter noisy. Orders go through your smartphone. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Young staff (unnamed)'], origin: null,
      background: 'Reviewers in 2026 describe a young team cooking dish by dish in a small kitchen, friendly service and drink suggestions, many regulars, and a sister restaurant, SAUNA (April and August 2026).',
      philosophy: null, specialty: 'Seafood-overflow rolls; edamame tempura.',
      anecdotes: [
        { text: 'An April 2026 visitor stayed longer than planned, and on the way out one of the staff flashed a peace sign.', source: R + 'B525595687/' },
        { text: '"The Edamame Tempura, a popular menu item, was especially tasty and disappeared quickly!" — March 2026.', source: R + 'B525417625/' },
        { text: '"I had my meal at the counter, but it was quite noisy, possibly because there were many regular customers." — August 2026.', source: R + 'B534660531/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、中京区道祐町135-1 三条食彩ろぉじ、月・水〜金 17:00〜23:00、土 15:00〜23:00、日 15:00〜22:00、火曜休み、予約可 (営業中はDMに返信できない)、チャージ料無し、16席 (カウンター6、テーブル10)、貸切20名まで、禁煙 (外に喫煙所)、カード・PayPay 可。口コミ (2026年1月〜8月、英語): 若いスタッフ、姉妹店 SAUNA、海鮮こぼれ巻き、明太子巻き、鰹のたたき、いかのお造り、枝豆の天ぷら、サーモンのレアカツ、クリームチーズのディップ、鱧と松茸の天ぷら、冬は白子、ぶり鍋、日替わりのチーズケーキ、あまおうのサワー、スマホで注文、1階カウンター・2階テーブル、常連が多く騒がしいとの声 (2026年8月)。',
      confidence: 'medium', sources: [TB, R + 'B523928545/', R + 'B524854151/', R + 'B525417625/', R + 'B525595687/', R + 'B526617260/', R + 'B531650909/', R + 'B532832699/', R + 'B533335031/', R + 'B534425036/', R + 'B534660531/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smartphone ordering; book by phone; no table charge; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区道祐町135-1 三条食彩ろぉじ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.008252, 135.763504); cross-checked: GSI 京都府京都市中京区道祐町135番地 (lot) 31 m; nearest Kyoto record 17 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525417625/', R + 'B526617260/'],
    price_note: 'No menu prices read; bills about ¥3,000–6,000 (Tabelog; 2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Seafood-overflow negitoro roll', '', 'Rolls', 'ask', 'no', '', 'kobore_maki'),
      it('', '', 'Edamame tempura', '', 'Fried', 'no', 'ask', 'Popular dish.', 'edamame_tempura'),
      it('', '', 'Salmon rare cutlet', '', 'Fried', 'no', 'no', '', 'salmon_rare_katsu'),
      it('', '', 'Cheesecake of the day', '', 'Dessert', 'ask', 'no', '', 'cheesecake'),
    ] }, {
    cuisine: '若いスタッフのにぎやかな居酒屋、姉妹店に SAUNA (2026年の口コミ)・ネギトロの海鮮こぼれ巻き、明太子巻き、鰹のたたき、いかのお造りいろいろ (2026年の口コミ)・人気の枝豆の天ぷら、サーモンのレアカツ、クリームチーズのディップ、鱧と松茸の天ぷら (2026年の口コミ)・冬は白子の料理、Gout Hot Pot、ぶり鍋 (2026年の口コミ)・日替わりのチーズケーキ (2026年の口コミ)・あまおうの OFURO サワー、柚子はちみつ、日本酒 (2026年の口コミ)・会計は3,000〜6,000円ほど (食べログ)',
    neighborhood: '三条通沿いの三条食彩ろぉじ、烏丸御池の近く',
    gf_detail: '要確認。枝豆の天ぷら、サーモンのレアカツ、巻き寿司、鍋、チーズケーキなどの居酒屋料理。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。お造り、海鮮の巻き寿司、鰹のたたき、サーモン、魚の鍋の海鮮中心の居酒屋 (食べログ、2026年の口コミ)。',
    notes: '[居酒屋・三条の路地、海鮮こぼれ巻きと枝豆天] 三条の小さな店が並ぶ路地の、赤いのれんの小さな居酒屋。若いスタッフが海鮮のこぼれる巻き寿司、枝豆の天ぷら、サーモンのレアカツ、鰹のたたき、冬は魚の鍋を、フルーツサワーや日本酒とともに出す。スタッフは気さくで、常連も旅行者も多い。夜の枠はすぐ埋まるので予約を。2026年8月の客はカウンターが騒がしかったと書いている。注文はスマホで。火曜休み。',
  });
}

// ================================================================ 中善
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26014039/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://nakazen-kyoto.com/';
  const H = day(['18:30', '23:30']);
  put({
    id: 'kyoto_nakazen_kitashirakawa', name: '中善 (Nakazen)', category: 'OMNI',
    lat: 35.028685, lng: 135.790506, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase kappo courses with dashi, soy-based sauces, saba sushi, ganmodoki and fried ginkgo; no gluten information (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of Setouchi fish, hamo, anago, sweetfish and duck liver, on dashi (official site; 2022–2026 reviews).',
    hours_raw: 'Monday, Tuesday and Thursday to Sunday 18:30–23:30, last order 20:30; closed Wednesday (official site). Tabelog gives 18:00–24:00 with last seating 22:00, and lunch by reservation only; lunch serves the same courses as dinner (2025 review). Reservations through the official site (AutoReserve) or by phone (official site; Tabelog); book well ahead — locals fill it (June 2025). A fixed course of about ¥14,000–15,000 (2022–2024 reviews); reviewers spent ¥15,000–29,999 (2025–2026). 10 seats: 6 at the counter and one table of 4; non-smoking (Tabelog; February 2024). Cards (JCB, AMEX, Diners) (official site; Tabelog). Near the corner of the Daikokuya supermarket, Kitashirakawa, by Kyoto University; 3 min walk from the Ginkakuji-michi bus stop (Tabelog; May 2022).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashirakawa, near Ginkakuji-michi — 3 min walk from the bus stop',
    cuisine: 'A couple\'s kappo of Setouchi fish and vegetables from Ohara, with local sake and Italian and French wines for pairing (official site) · omakase course, about ¥14,000–15,000 (2022–2024 reviews); in February and September the course is more lavish (February 2024) · e.g. yam kan with mountain vegetables, Awaji sea bream, densuke anago with torigai, guji soup made with gyokuro, an eight-item hassun, saba sushi in bamboo leaf with sansho, suzuki grilled crisp in sesame oil (May 2022); Akashi sea bream and shima-aji, hamo, anago and ganmodoki (June 2025); grilled eggplant with dashi jelly, wild grouper and yellowtail, duck liver, hamo dumplings (2025) · grilled sweetfish (July 2024) · leftover rice made into onigiri to take home (2024 reviews)',
    website: WEB, gmaps: gm('中善 北白川 京都'), menu_url: null,
    notes: '[Kappo · Kitashirakawa, a couple since 2009] A ten-seat kappo near Ginkakuji-michi, opened in 2009 by a husband and wife: the chef (trained at Kikunoi, reviewers say) cooks Setouchi fish and Ohara vegetables into a fixed omakase of around ¥15,000, and the okami, a sake sommelier per one reviewer, pairs local sake or wine. Generous, unfussy and warm, with leftover rice wrapped as onigiri. Popular with locals — book well ahead. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)', 'Okami (the wife of the owner, unnamed)'], origin: null,
      background: 'Per the official site: opened in Kitashirakawa in 2009 and run by a married couple; the owner honed skills at famous Kyoto restaurants and wanted a kappo that is easier and freer to enjoy; fish from the Seto Inland Sea and vegetables from Ohara. Reviewers say the owner seems to have trained at Kikunoi (October 2022) and that the chef trained at Kikunoi and the okami is a sake sommelier (February 2026). A September 2025 reviewer calls it a Michelin one-star restaurant.',
      philosophy: '"A kappo to enjoy more closely and more freely" (official site).', specialty: 'Omakase course; hamo; saba sushi.',
      anecdotes: [
        { text: 'A February 2024 guest on a fourth visit, coming only every year or two, was still remembered.', source: R + 'B480433684/' },
        { text: 'February and September, the low seasons in Kyoto, are a "special service month with more extravagant dishes" (February 2024).', source: R + 'B480433684/' },
        { text: 'A June 2025 guest who could not get a booking on an earlier trip — locals had taken every seat — called the hamo, cut with a large steel knife, the best of a lifetime.', source: R + 'B425746988/' },
      ],
      japanese_sources_summary: '公式サイト: 京都・北白川の夫婦で営む隠れ家的な割烹、2009年開店、京都の名店で腕を磨いた店主、女将の気配り、瀬戸内の魚介と大原の野菜、地酒とイタリア・フランスのワイン、ペアリング、月・火・木〜日 18:30〜23:30 (L.O.20:30)、水曜休み、最寄りは元田中駅、駐車場なし、カード可 (JCB、AMEX、Diners)、予約は公式サイトから。食べログ: 日本料理、左京区北白川久保田町26、銀閣寺道バス停から徒歩3分、10席 (カウンター6、テーブル4)、昼は予約のみ。口コミ (2022年5月〜2026年2月、英語): Kikunoi で修業したという店主、女将は sake sommelier、おまかせ14,000円ほど、2月と9月は特別に豪華、鱧、伝助穴子、ぐじのお椀、八寸、鯖寿司、ご飯の残りはおにぎりに、ミシュラン一つ星との記述 (2025年9月)。',
      confidence: 'medium', sources: [WEB, TB, R + 'B105163877/', R + 'B425746988/', R + 'B455630180/', R + 'B480433684/', R + 'B489114067/', R + 'B490169140/', R + 'B505517538/', R + 'B513750962/', R + 'B522340760/', R + 'B538735010/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online through the official site (multilingual) well ahead; fixed omakase; cards (JCB, AMEX, Diners).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区北白川久保田町26',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.028685, 135.790506); cross-checked: GSI 京都府京都市左京区北白川久保田町26番地 (lot) 30 m; kyr_chuka_soba_masutani_kita is 34 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B480433684/', R + 'B455630180/'],
    price_note: 'No menu read; course price from 2022 and 2024 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥14,000', 'Course', 'ask', 'no', 'February 2024; about ¥15,000 in October 2022.', 'omakase'),
      it('', '', 'Saba sushi in bamboo leaf', '', 'Course dish', 'ask', 'no', 'May 2022.', 'saba_zushi'),
    ] }, {
    cuisine: '夫婦の割烹、瀬戸内の魚と大原の野菜に、地酒やイタリア・フランスのワインを合わせる (公式サイト)・おまかせのコース、14,000〜15,000円ほど (2022〜2024年の口コミ)、2月と9月はより豪華に (2024年2月)・例: 山の芋の羹に山菜、Awaji の鯛、伝助穴子と鳥貝、玉露を使ったぐじのお椀、8品の八寸、山椒の効いた笹巻きの鯖寿司、太白胡麻油でぱりっと焼いたすずき (2022年5月)、Akashi の鯛としまあじ、鱧、穴子とがんもどき (2025年6月)、焼き茄子のだしジュレ、天然の grouper とぶり、鴨のレバー、鱧の団子 (2025年)・鮎の塩焼き (2024年7月)・ご飯の残りはおにぎりにして持ち帰り (2024年の口コミ)',
    neighborhood: '北白川、銀閣寺道の近く。バス停から徒歩3分',
    gf_detail: '要確認。だし、醤油系のたれ、鯖寿司、がんもどき、揚げ銀杏のあるおまかせの割烹コース。グルテンの情報はない (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。瀬戸内の魚、鱧、穴子、鮎、鴨のレバーなど、だしのコース (公式サイト、2022〜2026年の口コミ)。',
    notes: '[割烹・北白川、2009年からの夫婦の店] 銀閣寺道の近くのカウンター6席とテーブル1卓の割烹。2009年に夫婦で開いた。店主 (Kikunoi で修業したと口コミにある) が瀬戸内の魚と大原の野菜で15,000円ほどのおまかせを作り、女将 (sake sommelier と口コミにある) が地酒やワインを合わせる。気取らず温かく、量も多く、残ったご飯はおにぎりに。地元の客が多いので早めに予約を。水曜休み。',
  });
}

// ================================================================ Synager
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26036071/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_synager', name: 'Synager', category: 'OMNI',
    lat: 35.014483, lng: 135.760604, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A French tasting course with sauces, terrines, fried amuse-bouches, bread, butter and baked sweets; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a set French course of fish, shellfish, foie gras and meat, with butter and cheese (2026 reviews).',
    hours_raw: 'Lunch 12:00–15:00 (last food order 13:00) and dinner 18:00–22:00 (last food order 19:00); closed Monday, open on holidays (Tabelog). Reservation only (Tabelog). 10% service charge (Tabelog original サービス料10%). Courses with wine or non-alcoholic aroma pairings: lunch with four pairings a little over ¥12,000 (September 2026); bills ¥10,000–29,999 (Tabelog; 2026 reviews). 12 seats; private hire for 6 or more, children welcome when booked whole (Tabelog). Cards (incl. UnionPay), e-money and QR (Tabelog). English menu and English-speaking staff (Tabelog). A renovated machiya down a cobbled alley through a small wooden gate, Higashinotoin north of Nijo; 4 min walk from Marutamachi Stn (subway) (Tabelog; 2026 reviews).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin north of Nijo — 4 min walk from Marutamachi Stn',
    cuisine: 'French tasting course by a chef who is also an herb coordinator, with sommelier wine pairings or non-alcoholic aroma pairings from herb distillation (Tabelog) · a welcome of water scented with distilled Damask rose (2026 reviews) · e.g. fried shirako on coral, Shinshu salmon with caviar and flowers (February 2026); Yamato tachibana citrus (April 2026); corn and shrimp potage, fried hamo, sardine and potato-salad tart, tuna tartare, squid and hamo terrine, smoked vegetables (August 2026); oyster flan, sanma, eggplant and foie gras terrine (September 2026); higuma bear, fugu jelly (October 2026) · cheese platter for a supplement; baked sweets to finish (April, July 2026) · non-alcoholic pairing with kombucha and other drinks mimicking wines (September 2026)',
    website: null, gmaps: gm('Synager 京都 東洞院二条'), menu_url: null,
    notes: '[French · Higashinotoin Nijo, aromas and non-alcoholic pairings] A twelve-seat French restaurant in a renovated machiya down a cobbled alley near the Imperial Palace, where a chef who is also an herb coordinator builds the course around scent — it opens with rose-distilled water — and pairs it with wine or with non-alcoholic aroma drinks made by herb distillation. Fish, foie gras, game and flower-strewn plates; one diner found the meat sauces rich. Lunch with four pairings is a little over ¥12,000; 10% service. English spoken. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef and herb coordinator (unnamed)', 'Sommelier', 'A team of male staff (September 2026)'], origin: null,
      background: 'Per Tabelog: a "unique style: chef × herb coordinator × sommelier"; a chef\'s course viewed over the kitchen and courtyard, paired with wines by the sommelier or with aroma pairings created by herb distillation. Reviewers in 2026 describe a warm owner greeting guests (February 2026), a team of male staff (September 2026) and a dining room opened up by removing part of the first-floor ceiling of a two-storey house (September 2026).',
      philosophy: '"The chef\'s wish is for you to enjoy your meal time to the fullest" (Tabelog).', specialty: 'Aroma pairings; rose-water welcome.',
      anecdotes: [
        { text: 'A September 2026 diner took the full non-alcoholic pairing — kombucha and other drinks standing in for the acidity of white wine, the tannins of red and the sweetness of port — and called it the right decision.', source: R + 'B535536879/' },
        { text: '"The sauce for the meat dishes was a bit too rich for my taste, as I\'m not fond of spices" — July 2026.', source: R + 'B531082541/' },
        { text: 'A September 2026 guest found a vegetable mentioned as disliked still appeared in one dish — a small piece, eaten anyway.', source: R + 'B535536879/' },
      ],
      japanese_sources_summary: '食べログ: フレンチ・創作料理、中京区東洞院二条上ル壺屋町512-2、地下鉄丸太町駅から徒歩4分、昼 12:00〜15:00 (料理L.O.13:00)、夜 18:00〜22:00 (料理L.O.19:00)、月曜休み (祝日は営業)、完全予約制、サービス料10%、12席、6名以上で貸切可、カード・電子マネー・QR 可、英語メニュー・英語のスタッフ、シェフ兼ハーブコーディネーター、ソムリエのワインペアリング、ハーブ蒸留のアロマペアリング (ノンアルコール)。口コミ (2026年2月〜10月、英語): 町家を改装、ダマスクローズの香りの水、Shinshu salmon とキャビア、Yamato tachibana、鱧、まぐろのタルタル、牡蠣のフラン、フォアグラのテリーヌ、ヒグマ、ふぐのジュレ、チーズの盛り合わせ、焼き菓子、昼は4種のペアリングで12,000円あまり。',
      confidence: 'medium', sources: [TB, R + 'B522769482/', R + 'B524770846/', R + 'B527420773/', R + 'B527491479/', R + 'B531082541/', R + 'B533515395/', R + 'B535536879/', R + 'B536151624/', R + 'B536486818/', R + 'B538295911/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); reservation only; 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院二条上ル壺屋町512-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.014483, 135.760604); cross-checked: GSI 京都府京都市中京区壺屋町512番地 (lot) 17 m; kyoto_hunter_bistro is 46 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B536151624/'],
    price_note: 'No menu read; lunch with pairings a little over ¥12,000 (September 2026); 10% service extra.', last_checked: TODAY, items: [
      it('', '', 'Lunch course with four drink pairings', '', 'Lunch', 'ask', 'no', 'A little over ¥12,000 (September 2026).', 'lunch_pairing'),
      it('', '', 'Signature course with four pairings', '', 'Course', 'ask', 'no', 'Tabelog course listing.', 'signature_course'),
      it('', '', 'Cheese platter (supplement)', '', 'Extras', 'ask', 'no', 'April 2026.', 'cheese'),
    ] }, {
    cuisine: 'シェフ兼ハーブコーディネーターによるフレンチのコース。ソムリエのワインペアリングか、ハーブ蒸留のノンアルコールのアロマペアリングを合わせる (食べログ)・はじめにダマスクローズを蒸留した香りの水 (2026年の口コミ)・例: 白子のフライ、Shinshu salmon とキャビアと花 (2026年2月)、Yamato tachibana (2026年4月)、とうもろこしと海老のポタージュ、鱧のフライ、いわしとポテトサラダのタルト、まぐろのタルタル、いかと鱧のテリーヌ、燻製の野菜 (2026年8月)、牡蠣のフラン、さんま、茄子とフォアグラのテリーヌ (2026年9月)、ヒグマ、ふぐのジュレ (2026年10月)・追加でチーズの盛り合わせ、締めに焼き菓子 (2026年4月、7月)・コンブチャなどでワインを模したノンアルコールのペアリング (2026年9月)',
    neighborhood: '二条の北、東洞院通。丸太町駅から徒歩4分',
    gf_detail: '要確認。ソース、テリーヌ、揚げたアミューズ、パン、バター、焼き菓子のあるフレンチのコース。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、貝、フォアグラ、肉、バターやチーズのフレンチのコース (2026年の口コミ)。',
    notes: '[フレンチ・東洞院二条、香りとノンアルコールのペアリング] Kyoto Imperial Palace 近くの石畳の路地の奥、町家を改装したカウンターとテーブル計12席のフレンチ。ハーブコーディネーターでもあるシェフが香りを軸にコースを組み (はじめはバラを蒸留した水)、ワインか、ハーブ蒸留のノンアルコールのアロマドリンクを合わせる。魚、フォアグラ、ジビエ、花を散らした皿。肉のソースが濃いという声も。昼は4種のペアリング付きで12,000円あまり、サービス料10%。英語可。月曜休み。',
  });
}

save();
