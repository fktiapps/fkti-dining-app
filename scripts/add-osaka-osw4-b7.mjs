// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 7.
//   + POMMIER ポミエ (katsudon on 400 g of rice, a lunch queue near Ebisucho)
//   + 伊吹珈琲店 黒門市場 Ibuki Coffee Ten Kuromon Ichiba (Showa kissaten in Kuromon Market, open 7:00)
//   + ヴォーク VOURKE (tiramisu and beignet café in Nambanaka)
//   + 瀧谷飯店 Takitani Hanten (Shinmachi Chinese of a 30-year chef; mapo tofu lunches)
//   - skip 炭火焼とり えんや 難波３号店 27081931: Enya yakitori chain (難波店, 難波千日前店, 梅田店 and this third Namba shop in
//     the crawl).
//   - skip 炭火焼肉大歓 三休橋筋店 27139275: the second shop of 炭火焼肉 大歓, which is in data
//     (osaka_sumibi_yakiniku_daikan_higashishinsaibashi, chef_bio.background "a second branch near Mikyu-bashi serves until 03:00").
//   - skip 魚匠 銀平 道頓堀店 27001291: Ginpei seafood chain (head shop in Wakayama, 心斎橋店 27000845, Tokyo KITTE Marunouchi;
//     search results), across cities.
//   Chain check: POMMIER one shop. Ibuki: a reviewer mentions a "main branch" and an origin as a branch of Marufuku Coffee
//   (both recorded as reviewers' statements); not in data. VOURKE: a reviewer calls it the second shop of HOOD by Vargas in
//   Nakatsu. Takitani Hanten: one shop. None of the four is in data/osaka.json (grep by name, Tabelog id and address,
//   2026-11-01).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27081931', '炭火焼とり えんや 難波３号店: Enya yakitori chain (Namba, Namba Sennichimae, Umeda and this third Namba shop) — chain');
skip('27139275', '炭火焼肉大歓 三休橋筋店: second shop of 炭火焼肉 大歓, already in data (osaka_sumibi_yakiniku_daikan_higashishinsaibashi) — chain in data');
skip('27001291', '魚匠 銀平 道頓堀店: Ginpei seafood chain (Wakayama head shop, Shinsaibashi, Tokyo Marunouchi) — multi-city chain');

// ================================================================ POMMIER
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27012039/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '17:00']);
  put({
    id: 'osaka_pommier_nipponbashi', name: 'POMMIER (ポミエ)', category: 'OMNI',
    lat: 34.658838, lng: 135.505222, cuisine_type: 'donburi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the dishes people come for are breaded and fried (katsudon, chicken katsu, kara-age, shrimp fry) in a dashi-and-soy sauce; no gluten-free option described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the menu is built on pork, chicken and egg, with miso soup and dashi.',
    hours_raw: 'Mon–Wed and Fri–Sun 11:00–17:00; closed Thursday; hours may change (Tabelog). No reservations; write your name on the waiting board at the door, which can fill up before opening, and expect a queue at 11:30 on weekends (Tabelog; August–October 2026). Cash only, paid after the meal (Tabelog; October 2026 reviews). 30 seats at tables for two and four, shared when busy; non-smoking; children welcome (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nipponbashi 5-17-20, north of Ebisucho near Den-Den Town — 6 min from Ebisucho Stn',
    cuisine: 'Huge rice bowls and set meals in a café room (2026 reviews) · katsudon ¥1,550 with 400 g of rice, the egg piled over the cutlet; large ¥1,950 (October 2026, or "+¥400" in August 2026); extra egg +¥300 · chicken katsu don ¥1,550 (October 2026) · oyakodon, small ¥1,550 (August 2026) · tamago-don, rice in half (200 g) or small (300 g) portions · kara-age set meal ¥1,550, egg over rice +¥300 (August 2026); a single giant kara-age ¥200 · hamburger curry, kara-age curry · shrimp fry à la carte · bowls come with miso soup and pickles; up to 800 g of rice on request (August 2026)',
    website: null, gmaps: gm('POMMIER ポミエ 日本橋'), menu_url: null,
    notes: '[Donburi · Nipponbashi, the big-portion café] A café-looking room near Den-Den Town that is famous for portions: the regular katsudon (¥1,550 in 2026) comes on 400 g of rice under a cutlet and a mound of soft egg that spills over the bowl, and the large and the 800 g versions are for competitive eaters. Order a half or small rice if unsure; diners in 2026 saw others leave food behind. The oyakodon and the kara-age set are the other favourites, and a single kara-age is ¥200. Write your name on the board by the door, ideally before 11:00; cash only; closed Thursdays.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Reviewers describe POMMIER as a café-style room known across Japan to big eaters for its portions (2026); a September 2026 diner was moved from a shared table when one came free. A regular in August 2026 notes the large katsudon cost ¥1,200 in May 2019.', philosophy: null, specialty: 'Katsudon on 400 g of rice; oyakodon; kara-age set.',
      anecdotes: [
        { text: '"Since I couldn\'t reach the rice directly, I kindly asked the staff for a separate plate to temporarily set aside some of the pork cutlet and egg" — October 2026, a third visit, the large katsudon for JPY 1,950.', source: R + 'B106529397/' },
        { text: '"I wrote my name on the waiting board. Even though I arrived at 10 AM, there were already several names listed." — September 2026, a Sunday.', source: R + 'B535494318/' },
        { text: '"Looking around, I noticed that both international guests and salarymen were leaving some behind, which made sense given the portion size." — September 2026, katsudon with extra egg.', source: R + 'B536664086/' },
      ],
      japanese_sources_summary: '食べログ: POMMIER (ポミエ)、喫茶店・かつ丼、大阪市浪速区日本橋5-17-20、Ebisucho 駅から徒歩6分、月〜水・金〜日11:00〜17:00、木曜休み、予約不可、カード・電子マネー・QR不可、30席、禁煙、子ども可。口コミ(2026年8月〜10月): 大盛りの聖地、かつ丼はご飯400gで1,550円、大は1,950円 (2026年10月)、卵増し300円、チキンかつ丼1,550円、親子丼 (小) 1,550円、kara-age定食1,550円に玉子かけご飯300円、kara-age1個200円、ハンバーグカレー、ご飯は半分200g、小300g、800gも、味噌汁と漬物つき、入口の名前を書くボードで順番待ち、開店前から行列、現金のみで後払い、相席になることも。',
      confidence: 'medium', sources: [TB, R + 'B106529397/', R + 'B278406272/', R + 'B415292086/', R + 'B451612975/', R + 'B533628106/', R + 'B533868440/', R + 'B534237246/', R + 'B535494318/', R + 'B536110803/', R + 'B536664086/', R + 'B536875504/', R + 'B537479168/', R + 'B537613770/', R + 'B537713486/', R + 'B538394330/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Write your name on the waiting board and order verbally; a short menu of bowls and set meals (2026); international guests too (September 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区日本橋5-17-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区日本橋五丁目17番 (lot) 15m. RAMEN .R 難波店 (osaka_ramen_r_namba, 日本橋5-17-18) is 24 m away at the next house number; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B106529397/', R + 'B535494318/', R + 'B451612975/', R + 'B415292086/'],
    price_note: 'Prices from 2026 reviews (tax included); the large katsudon is ¥1,950 in an October 2026 review and "+¥400" over the regular in an August 2026 one.', last_checked: TODAY, items: [
      it('かつ丼', '', 'Katsudon (400 g rice), with miso soup and pickles', '¥1,550', 'Donburi', 'no', 'no', 'September–October 2026 reviews.', 'katsudon'),
      it('', '', 'Large katsudon', '¥1,950', 'Donburi', 'no', 'no', 'October 2026 review; "+¥400" in August 2026.', 'katsudon_large'),
      it('', '', 'Oyakodon, small', '¥1,550', 'Donburi', 'no', 'no', 'August 2026 review.', 'oyakodon_small'),
      it('', '', 'Kara-age set meal', '¥1,550', 'Set meals', 'no', 'no', 'August 2026 review; egg over rice +¥300.', 'karaage_teishoku'),
      it('', '', 'Single kara-age (topping)', '¥200', 'Extras', 'no', 'no', 'August and October 2026 reviews.', 'karaage_piece'),
    ] }, {
    cuisine: '喫茶店の店内で大盛りの丼と定食 (2026年の口コミ)・かつ丼1,550円はご飯400g、カツの上にたっぷりの卵、大は1,950円 (2026年10月、2026年8月の口コミでは「+400円」)、卵増し+300円・チキンかつ丼1,550円 (2026年10月)・親子丼、小1,550円 (2026年8月)・玉子丼、ご飯は半分 (200g) や小 (300g) も・kara-age定食1,550円、玉子かけご飯+300円 (2026年8月)、大きなkara-age1個200円・ハンバーグカレー、kara-ageカレー・エビフライの単品・丼には味噌汁と漬物、ご飯は800gまで (2026年8月)',
    neighborhood: '日本橋5-17-20、Ebisucho の北、Den-Den Townのそば。Ebisucho 駅から徒歩6分',
    gf_detail: '実質グルテンフリーではありません。目当ての料理はかつ丼、チキンかつ、kara-age、エビフライなど衣をつけて揚げたものを出汁と醤油で。グルテンフリーの選択肢の説明はない。',
    vegan_detail: 'ヴィーガンではありません。メニューは豚肉、鶏肉、卵が中心で、味噌汁と出汁も。',
    notes: '[丼・日本橋、大盛りの喫茶店] Den-Den Town近くの喫茶店のような店で、量で有名。普通のかつ丼 (2026年は1,550円) でもご飯400gに、丼からあふれるカツとふわふわの卵。大や800gは大食いの人向け。迷ったらご飯は半分か小で。2026年の口コミでは残す人も見かけたそう。親子丼とkara-age定食も人気で、kara-ageは1個200円。入口のボードに名前を書いて、できれば11時前に。現金のみ。木曜休み。',
  });
}

// ================================================================ 伊吹珈琲店 黒門市場
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27012983/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.ibuki-coffee.com/';
  const H = day(['07:00', '18:30']);
  put({
    id: 'osaka_ibuki_coffee_kuromon', name: '伊吹珈琲店 黒門市場 (Ibuki Coffee Ten Kuromon Ichiba)', category: 'OMNI',
    lat: 34.66612, lng: 135.507509, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The food is toast, sandwiches and cakes; coffee, iced tea and cream sodas are the drinks.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Black coffee and tea are the plain options; the egg sandwiches, buttered toast and cakes use egg and dairy.',
    hours_raw: 'Daily 7:00–18:30, last food order 18:00; closed only on 1 January (Tabelog). No reservations; cash only, no cards, e-money or QR (Tabelog). Non-smoking (Tabelog; August 2026). A few seats at the front and about eight tables for four further in (May 2026). Breakfast sets (Tabelog; 2026 reviews). Beans and drip bags also sold online (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nipponbashi 1-22-31, inside the Kuromon Market arcade — a short walk south of Nippombashi Stn exits 8/9',
    cuisine: 'A Showa-era coffee shop roasting its own beans, with blends and single origins sold at the register (official site; 2026 reviews) · hot coffee ¥590, a dark roast with a strong bitterness, served full with sugar cubes (May and October 2026) · iced coffee, iced café au lait and iced tea, sweetened or not on request (July–August 2026) · morning sets: A egg toast, C morning sandwich of egg and cucumber; egg toast set ¥660 (May 2026) · thick toast with butter and jam · cakes, e.g. chestnut marron cake ¥660, fruit shortcake (May 2026) · cream sodas',
    website: SITE, gmaps: gm('伊吹珈琲店 黒門市場'), menu_url: null,
    notes: '[Kissaten · Kuromon Market, open from 7 a.m.] A wood-panelled Showa coffee shop inside the Kuromon Market arcade, quiet and classical-music calm when the market outside is packed. The coffee is dark and strong, poured to the brim with sugar cubes on the side (¥590 in 2026); come early for a morning set of egg toast or an egg-and-cucumber sandwich, or later for a marron cake. Iced drinks are made sweet or unsweet as you ask. Staff hand out an English menu to visitors (July 2026). Cash only; open every day but 1 January.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'A June 2026 reviewer writes that the shop began as a branch of Marufuku Coffee and was renamed after the surname of a previous owner; an October 2026 reviewer mentions a "main branch" where the strength can be chosen, and a May 2026 reviewer wonders about a link to an Ibuki Coffee in Tenma. These are reviewers\' statements, not checked against another source. The official site sells house-roasted beans, drip bags and bottled coffee.', philosophy: null, specialty: 'Dark-roast hot coffee; egg-toast morning set.',
      anecdotes: [
        { text: '"At first, the staff brought me an English menu, perhaps because there are many tourists in the area" — July 2026, an egg sandwich and iced café au lait at 9:30.', source: R + 'B531529043/' },
        { text: '"The coffee was incredibly strong—much stronger than I remembered from Marufuku. … It also came with four pieces of rare cube sugar." — June 2026.', source: R + 'B529588994/' },
        { text: '"From the outside, it seemed like there were few seats, but as I went further inside, I discovered about eight spacious four-person tables." — May 2026, hot coffee for JPY 590.', source: R + 'B528558487/' },
      ],
      japanese_sources_summary: '食べログ: 伊吹珈琲店 黒門市場、喫茶店、大阪市中央区日本橋1丁目22-31 黒門市場内、近鉄日本橋駅から151m、毎日7:00〜18:30 (料理 L.O. 18:00)、1月1日のみ休み、予約不可、カード・電子マネー・QR不可、禁煙、モーニングあり、オンラインショップは24時間。公式サイト: 伊吹珈琲店、自家焙煎コーヒー豆、ドリップバック、瓶詰めリキッド珈琲。口コミ(2026年4月〜10月): 昭和レトロの店内、クラシック音楽、ホットコーヒー590円は深煎りで苦味が強い、角砂糖、アイスは甘い・甘くないを聞いてくれる、モーニングのAセット (玉子トースト)、Cセット (モーニングサンド)、玉子トーストのセット660円、厚切りトースト、栗のケーキ660円、クリームソーダ、奥に4人掛けのテーブルが8つほど、英語のメニュー、Marufuku Coffeeの支店から始まったという口コミ、海外の客も地元の客も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B527383645/', R + 'B527764853/', R + 'B528558487/', R + 'B529588994/', R + 'B530046209/', R + 'B530189649/', R + 'B530995023/', R + 'B531529043/', R + 'B533277469/', R + 'B534293876/', R + 'B535456303/', R + 'B535607496/', R + 'B536348942/', R + 'B536745763/', R + 'B538010636/'] },
    cultural_comfort: { level: 'english', note: 'Staff offered an English menu (July 2026); many overseas visitors in the market (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋1-22-31 黒門市場内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained) and official online shop (news dated October 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋一丁目22番31号 (go) 11m. Nearest record is 麺屋 7.5Hz 黒門市場店 (osaka_menya_75hz_kuromon, 日本橋1-16-8) 21 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528558487/', R + 'B530189649/', R + 'B538010636/'],
    price_note: 'Prices from 2026 reviews (May and October 2026); no menu published.', last_checked: TODAY, items: [
      it('', '', 'Hot coffee (dark roast)', '¥590', 'Coffee', 'ask', 'ask', 'May and October 2026 reviews.', 'hot_coffee'),
      it('', '', 'Egg toast set', '¥660', 'Morning', 'no', 'no', 'May 2026 review.', 'egg_toast_set'),
      it('', '', 'Morning sandwich set (egg and cucumber)', '', 'Morning', 'no', 'no', 'April–July 2026 reviews.', 'morning_sandwich'),
      it('', '', 'Chestnut marron cake', '¥660', 'Cakes', 'no', 'no', 'May 2026 review.', 'marron_cake'),
    ] }, {
    cuisine: '自家焙煎の豆の昭和の喫茶店、レジでブレンドやストレートの豆も売る (公式サイト、2026年の口コミ)・ホットコーヒー590円、深煎りで苦味が強く、なみなみと注いで角砂糖つき (2026年5月と10月)・アイスコーヒー、アイスカフェオレ、アイスティーは甘い・甘くないを選べる (2026年7〜8月)・モーニング: Aセットは玉子トースト、Cセットは卵ときゅうりのモーニングサンド、玉子トーストのセット660円 (2026年5月)・バターとジャムの厚切りトースト・ケーキ、たとえば栗のマロンケーキ660円、フルーツショート (2026年5月)・クリームソーダ',
    neighborhood: '日本橋1-22-31、黒門市場のアーケードの中。日本橋駅8・9番出口から南へすぐ',
    gf_detail: '要確認。グルテンの情報なし。料理はトースト、サンドイッチ、ケーキ。飲み物はコーヒー、アイスティー、クリームソーダ。',
    vegan_detail: '要確認。ヴィーガンの情報なし。ブラックコーヒーと紅茶がシンプルな選択肢。卵サンド、バタートースト、ケーキは卵や乳製品を使う。',
    notes: '[喫茶店・黒門市場、朝7時から] 黒門市場のアーケードの中の、木の内装の昭和の喫茶店。外の市場が混んでいても、中は静かでクラシックが流れる。コーヒーは深煎りで濃く、なみなみと注いで角砂糖を添えて (2026年は590円)。朝なら玉子トーストか卵ときゅうりのサンドのモーニング、あとならマロンケーキを。アイスの飲み物は甘い・甘くないを選べる。観光客には英語のメニューを出してくれる (2026年7月)。現金のみ。1月1日以外は毎日営業。',
  });
}

// ================================================================ ヴォーク
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27120959/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '20:00']);
  put({
    id: 'osaka_vourke_nambanaka', name: 'ヴォーク (VOURKE)', category: 'OMNI',
    lat: 34.661872, lng: 135.4987, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The sweets are tiramisu, beignets (fried dough), pudding, brownie and pancakes, and the light meal is a croque monsieur; the pudding is the item without obvious flour, but nothing is stated about it.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Black coffee is the plain option; the tiramisu, pudding, beignets and croque monsieur use dairy and eggs.',
    hours_raw: 'Daily 10:00–20:00, open all year (Tabelog). No reservations; order and pay at the counter first, then sit; tables are shared when full, and Saturday afternoons from 14:00 are packed (Tabelog; September 2026). Cards (VISA, Master) and PayPay; no e-money (Tabelog). Non-smoking (Tabelog); a pet-friendly terrace (August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 3-6-3, T4 BUILDING 1F, a quiet side street with a wooden deck — 5–7 min from Nankai Namba Stn',
    cuisine: 'Café of homemade sweets and coffee (2026 reviews) · tiramisu, generous and boozy; seasonal peach tiramisu (August–September 2026) · beignets with tiramisu cream, e.g. fig beignet ¥1,350 (August 2026), an-butter topping · pudding with ice cream (sold out by 16:00 on an October 2026 day) · pecan and chocolate brownie · pancakes · croque monsieur with white sauce, ham and cheese ¥1,000, a newer light meal (August 2026) · today\'s coffee ¥650 (August 2026), café latte with latte art, iced coffee, tea',
    website: null, gmaps: gm('VOURKE ヴォーク 難波中'), menu_url: null,
    notes: '[Café · Nambanaka, tiramisu and beignets] A wood-and-dried-flower café on a quiet street a few minutes from Nankai Namba, with a wooden deck and a terrace where dogs are welcome. Order at the counter: the homemade tiramisu (peach in late summer 2026) and the beignets, fried dough split around tiramisu cream or seasonal fruit (fig, ¥1,350 in August 2026), are what diners come for, with a coffee (¥650). The pudding sells out. Weekend afternoons are crowded and tables get shared.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'An August 2026 reviewer describes VOURKE as the second shop of HOOD by Vargas in Nakatsu, Osaka (not checked elsewhere). The staff suggested a brownie instead of beignets after a meal to a September 2026 diner.', philosophy: null, specialty: 'Tiramisu; beignets.',
      anecdotes: [
        { text: '"I was also curious about the beignets, but the staff suggested that after a meal, the brownie would be a better choice" — September 2026, with the tiramisu.', source: R + 'B535032330/' },
        { text: '"After placing my order at the register, I noticed a line of customers forming behind me!" — August 2026, seasonal peach tiramisu and beignets.', source: R + 'B474152007/' },
        { text: '"Even though it was 30 minutes before closing, the staff welcomed me warmly." — October 2026, pancakes and a latte.', source: R + 'B538401862/' },
      ],
      japanese_sources_summary: '食べログ: ヴォーク (VOURKE)、カフェ、大阪市浪速区難波中3-6-3 T4 BUILDING 1F、なんば駅から341m、毎日10:00〜20:00、年中無休、予約不可、カード (VISA・Master)・PayPay 可、禁煙。口コミ(2026年8月〜10月): 自家製のティラミス、季節の桃のティラミス、ティラミスクリームのベニエ、いちじくのベニエ1,350円、あんバター、アイスのせプリン、ブラウニー、パンケーキ、クロックムッシュ1,000円、本日のコーヒー650円、ラテアート、先にレジで注文と会計、満席なら相席、土曜の14時以降は満席、木のデッキの入口、テラスはペット可、中津の HOOD by Vargas の2号店という口コミ。',
      confidence: 'medium', sources: [TB, R + 'B474152007/', R + 'B533405753/', R + 'B533434463/', R + 'B534144323/', R + 'B534523554/', R + 'B534571995/', R + 'B535032330/', R + 'B535211839/', R + 'B535497243/', R + 'B536058876/', R + 'B536557931/', R + 'B536671620/', R + 'B536860956/', R + 'B537720579/', R + 'B538401862/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the counter, then find a seat (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中3-6-3 T4 BUILDING 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中三丁目6番3号 (go) 9m. No other record in data within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536671620/', R + 'B534571995/'],
    price_note: 'Prices from August 2026 reviews; no menu published.', last_checked: TODAY, items: [
      it('', '', 'Tiramisu (homemade; seasonal peach in late summer)', '', 'Sweets', 'no', 'no', 'August–October 2026 reviews.', 'tiramisu'),
      it('', '', 'Fig beignet', '¥1,350', 'Sweets', 'no', 'no', 'August 2026 review.', 'fig_beignet'),
      it('', '', 'Pudding with ice cream', '', 'Sweets', 'ask', 'no', 'August–October 2026 reviews.', 'pudding'),
      it('', '', 'Croque monsieur', '¥1,000', 'Meals', 'no', 'no', 'August 2026 review.', 'croque_monsieur'),
      it('', '', "Today's coffee", '¥650', 'Coffee', 'ask', 'ask', 'August 2026 review.', 'todays_coffee'),
    ] }, {
    cuisine: '自家製のスイーツとコーヒーのカフェ (2026年の口コミ)・量が多くお酒のきいたティラミス、季節の桃のティラミス (2026年8〜9月)・ティラミスクリームのベニエ、たとえばいちじくのベニエ1,350円 (2026年8月)、あんバター・アイスのせプリン (2026年10月は16時に売り切れの日も)・ピーカンナッツとチョコのブラウニー・パンケーキ・ホワイトソース、ハム、チーズのクロックムッシュ1,000円、新しく始めた軽食 (2026年8月)・本日のコーヒー650円 (2026年8月)、ラテアートのカフェラテ、アイスコーヒー、紅茶',
    neighborhood: '難波中3-6-3 T4 BUILDING 1階、木のデッキのある静かな通り。南海なんば駅から徒歩5〜7分',
    gf_detail: '要確認。グルテンの情報なし。スイーツはティラミス、揚げ生地のベニエ、プリン、ブラウニー、パンケーキで、軽食はクロックムッシュ。小麦が目立たないのはプリンだが、説明はない。',
    vegan_detail: '要確認。ヴィーガンの情報なし。ブラックコーヒーがシンプルな選択肢。ティラミス、プリン、ベニエ、クロックムッシュは乳製品や卵を使う。',
    notes: '[カフェ・難波中、ティラミスとベニエ] 南海なんば駅から数分の静かな通りにある、木とドライフラワーのカフェ。木のデッキと、犬連れでも入れるテラス。注文はカウンターで。目当ては自家製のティラミス (2026年の夏の終わりは桃) と、ティラミスクリームや季節の果物をはさんだベニエ (2026年8月はいちじくで1,350円)、それにコーヒー (650円)。プリンは売り切れることも。週末の午後は混んで相席になる。',
  });
}

// ================================================================ 瀧谷飯店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27136187/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '14:00'], D = ['17:30', '22:00'];
  const LD = day(L, D), DO = day(D);
  put({
    id: 'osaka_takitani_hanten_shinmachi', name: '瀧谷飯店 (Takitani Hanten)', category: 'OMNI',
    lat: 34.678916, lng: 135.495324, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Chinese dishes in soy-, bean-paste and chili sauces: mapo tofu, yodare chicken, shrimp mayo, spring rolls, shumai, dandan noodles; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the mapo tofu has minced meat (June 2026), and the menu is built on chicken, seafood, lamb and beef.',
    hours_raw: 'Lunch Tue, Wed, Thu and Sat 11:30–14:00 (mapo tofu set on Tue, Thu and Sat; dandan noodles on Wednesday, per August 2026 reviews); dinner Tue–Sun 17:30–22:00; closed Monday and the second Sunday of each month (Tabelog). Reservations accepted; busy nights may mean the counter (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 30 seats: 4 at the counter and 26 at tables, a semi-private room for up to 25; non-smoking; wheelchair accessible; free Wi-Fi (Tabelog). Sources differ on staffing: a May 2026 diner saw staff running a busy weekend efficiently; a July 2026 diner calls it a one-person operation, so food can take a while.',
    hours: { 1: LD, 2: LD, 3: LD, 4: DO, 5: LD, 6: DO }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-14-39, 日宝立売堀ビル 1F — 5 min from Honmachi Stn exits 22/23',
    cuisine: 'Authentic yet nostalgic Chinese by a chef with 30 years of experience, the mapo tofu the pride of the house (Tabelog shop text) · lunch: mapo tofu set ¥1,200, large ¥1,450, with soup, salad and free rice refills; mini almond tofu +¥100 (May–August 2026); dandan noodles on Wednesdays · dinner: Tokushima yodare chicken wrapped in cucumber, Chinese-style sashimi of the day (kanpachi from Kagoshima, striped jack), shark-fin spring rolls, shrimp with mayonnaise, shrimp in chili sauce, shumai, stir-fried lamb tongue with chili, Sichuan braised beef, "Dojima" mapo tofu, jellyfish, yurinchi, shirasu fried rice (2025–2026 reviews) · banquet courses with two hours of drinks from ¥5,500 (Tabelog); ¥6,300 for a group of ten in June 2026 · Aoshima stout, Shaoxing wine, jasmine shochu',
    website: null, gmaps: gm('瀧谷飯店 新町'), menu_url: null,
    notes: '[Chinese · Shinmachi, the mapo tofu house] A modest-looking Chinese restaurant in Shinmachi whose chef, with 30 years behind the stove, is proud of the mapo tofu: numbing, meaty and balanced rather than salty. At lunch it is the only dish (Tue, Thu and Sat, ¥1,200 with free rice refills; dandan noodles on Wednesday). At dinner, order the yodare chicken, the Chinese-style sashimi of the day with vegetables and nuts, shark-fin spring rolls and the mapo tofu to finish. Book on weekend nights; expect ¥4,000–8,000 a head at dinner. Closed Mondays and the second Sunday.',
    chef_bio: { chef_name: null, roles: ['Chef with 30 years of experience, unnamed (Tabelog shop text)'], origin: null, background: 'Per the Tabelog shop text: authentic yet nostalgic Chinese cuisine crafted by a chef with 30 years of experience; the chef\'s pride is the mapo tofu; Wednesday-only dandan noodles and daily blackboard specials. A July 2026 diner describes it as a one-person operation; a May 2026 diner saw the staff manage a weekend rush efficiently.', philosophy: null, specialty: 'Mapo tofu; yodare chicken; Chinese-style sashimi.',
      anecdotes: [
        { text: '"The Mapo Tofu has a perfect amount of sauce that clings to the tofu, and the spiciness is just right." — May 2026, the weekly mapo tofu set for JPY 1,200.', source: R + 'B528431990/' },
        { text: '"However, since it\'s a one-person operation, there might be times when it takes a little longer to get your food" — July 2026.', source: R + 'B531749967/' },
        { text: '"Despite the weekend rush, the staff efficiently managed the restaurant." — May 2026, a Friday at 20:21 without a reservation.', source: R + 'B531399013/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 瀧谷飯店、中華料理、大阪市西区新町1-14-39 日宝立売堀ビル 1F、本町駅22・23番出口から徒歩5分、火・水・木・土11:30〜14:00と17:30〜22:00、金・日17:30〜22:00、月曜と第2日曜休み、予約可、混雑時はカウンターも、カード・PayPay 可、30席 (テーブル26、カウンター4)、半個室は25名まで、禁煙、車いす可、無料 Wi-Fi、30年の経験の料理人による本格的で懐かしい中華、自慢の麻婆豆腐、水曜限定の担々麺、黒板の日替わり、2時間飲み放題の宴会は5,500円から。口コミ(2025年10月〜2026年9月): 麻婆豆腐ランチ1,200円 (大1,450円、ご飯おかわり自由、スープとサラダ、ミニ杏仁豆腐100円)、火・木・土は麻婆、水曜は担々麺、yodare chicken、中華風お造り (カンパチ、シマアジ)、フカヒレ春巻き、エビマヨ、エビチリ、焼売、羊タンの唐辛子炒め、Dojima 麻婆豆腐、くらげ、yurinchi、しらすチャーハン、10名の飲み放題コース6,300円、ひとりで営業という口コミと、スタッフがてきぱき回していたという口コミ。',
      confidence: 'medium', sources: [TB, R + 'B485603184/', R + 'B505847604/', R + 'B528431990/', R + 'B528647029/', R + 'B529271368/', R + 'B529299099/', R + 'B530655000/', R + 'B531399013/', R + 'B531749967/', R + 'B532761723/', R + 'B532802200/', R + 'B533355478/', R + 'B534249580/', R + 'B534887465/', R + 'B535105838/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A single set at lunch; blackboard specials at dinner (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-14-39 日宝立売堀ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目14番39号 (go) 11m. No other record in data within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533355478/', R + 'B528431990/', TB],
    price_note: 'Lunch prices from May–August 2026 reviews; the banquet course from Tabelog (from ¥5,500); dinner à la carte prices not seen.', last_checked: TODAY, items: [
      it('', '', 'Mapo tofu lunch set (soup, salad, free rice refills)', '¥1,200', 'Lunch', 'ask', 'no', 'May–August 2026 reviews; large ¥1,450; Tue, Thu, Sat.', 'mapo_lunch'),
      it('', '', 'Dandan noodles (Wednesday lunch)', '', 'Lunch', 'no', 'no', 'Tabelog; August 2026 review.', 'dandan'),
      it('', '', 'Yodare chicken (Tokushima chicken)', '', 'Dinner', 'ask', 'no', '2025–2026 reviews.', 'yodare_chicken'),
      it('', '', 'Chinese-style sashimi of the day', '', 'Dinner', 'ask', 'no', '2025–2026 reviews.', 'chinese_sashimi'),
      it('', '', 'Banquet course with two hours of drinks', 'from ¥5,500', 'Course', 'ask', 'no', 'Tabelog.', 'banquet_course'),
    ] }, {
    cuisine: '30年の経験の料理人による本格的で懐かしい中華、自慢は麻婆豆腐 (食べログの店の紹介)・ランチ: 麻婆豆腐の定食1,200円、大1,450円、スープ、サラダ、ご飯おかわり自由、ミニ杏仁豆腐+100円 (2026年5〜8月)、水曜は担々麺・夜: きゅうりで巻いた Tokushima の鶏のyodare chicken、本日の中華風お造り (Kagoshima のカンパチ、シマアジ)、フカヒレ春巻き、エビマヨ、エビチリ、焼売、羊タンの唐辛子炒め、四川風の牛肉の煮込み、Dojima 麻婆豆腐、くらげ、yurinchi、しらすチャーハン (2025〜2026年の口コミ)・2時間飲み放題の宴会コース5,500円から (食べログ)、2026年6月は10名で6,300円・Aoshima Beer のスタウト、紹興酒、ジャスミン焼酎',
    neighborhood: '新町1-14-39 日宝立売堀ビル 1階。本町駅22・23番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。醤油、豆板醤、唐辛子のソースの中華: 麻婆豆腐、yodare chicken、エビマヨ、春巻き、焼売、担々麺。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。麻婆豆腐にはひき肉が入り (2026年6月)、メニューは鶏、魚介、羊、牛が中心。',
    notes: '[中華・新町、麻婆豆腐の店] 新町の見た目は控えめな中華料理店で、30年の経験の料理人の自慢は麻婆豆腐。しびれて肉の味がしっかりしていて、塩辛くなくバランスがいい。ランチはこれ一品 (火・木・土、1,200円でご飯おかわり自由、水曜は担々麺)。夜は、yodare chicken、野菜とナッツをあえた本日の中華風お造り、フカヒレ春巻き、最後に麻婆豆腐を。週末の夜は予約を。夜はひとり4,000〜8,000円ほど。月曜と第2日曜休み。',
  });
}

save();
