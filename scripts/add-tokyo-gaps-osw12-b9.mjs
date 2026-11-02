// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 9.
//   + T'sたんたん エキュート上野店 (plant-based tantanmen inside JR Ueno Stn) — researched IN PLACE on the hidden placeholder
//     tokyo3_t_s_212 (hidden: 'unresearched'); T's TanTan has five station/airport shops (official menu page), see report.
//   + COFFEE & BAR gg KURAMAE エキュート上野店 (10-seat station café, second shop of a Kuramae café; opened April 2025)
//   + 麺屋 天王 Menya Tenno (tsukemen, abura-soba and miso ramen near the Iriya exit) — no ramen block (see report)
//   + 元長 Motocho (one-man soba-udon stand with noodles made upstairs; opens 6 am on weekdays)
// Skipped (see skip()): 立喰寿司 佐渡弁慶 13308024 (Benkei group, 10+ shops), ベックスコーヒーショップ 上野中央口店 13208453
//   (JR station café chain), 六厘舎 上野店 13241939 (chain already in data as hidden placeholders tokyo3_ / tokyo3__20 at Tokyo Stn).
// Chain check. gg KURAMAE: Ueno is the second shop after Kuramae (search results; Tabelog listing website gg-genie.com) — kept.
//   Menya Tenno: the listing calls this the Ueno branch of a Tabata-Shinmachi shop; a July 2026 review says the Tabata branch has
//   closed — at most two shops, kept. Motocho: one shop.
// Dedupe: gg, Tenno, Motocho are not in data by name, Tabelog id or address. Tenno (東上野4-10-6 東ビル 1F) and Motocho
//   (東上野4-10-7 東ビル 1F) give the same building name at neighbouring street numbers; their Tabelog points are 8 m apart.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13308024', 'chain: 立喰寿司 佐渡弁慶 is part of the Sado Benkei kaiten-sushi group — its 佐渡本店 listing says 10+ shops centred on Niigata, plus a standing-sushi annex at Pia Bandai and an Urawa PARCO shop (search results, not opened).');
skip('13208453', 'chain: BECK\'S COFFEE SHOP is a JR East station café chain (this one on Ueno Stn platform 13).');
skip('13241939', 'chain in data: 六厘舎 already has placeholders tokyo3_ and tokyo3__20 (Tokyo Ramen Street, Tokyo Stn).');

// ================================================================ T'sたんたん エキュート上野店 (in place: tokyo3_t_s_212)
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13314025/'; const R = TB + 'dtlrvwlst/';
  const TOP = 'https://foods.jr-cross.co.jp/ts-tantan/'; const MENU = TOP + 'menu/';
  const MENUPDF = TOP + 'lib/img/mt_upload/HP_TSUeno_GM_20261001.pdf';
  const ALLER = TOP + 'allergen/'; const ALLERPDF = TOP + 'lib/img/mt_upload/HP_TSTokyoAkibaUenoIKe_allergen_202610016.pdf';
  const INTERVIEW = 'https://weeeat.tokyogas-com.co.jp/column/interview/c-00163.html';
  const W = day(['10:00', '22:00']); const S = day(['10:00', '21:00']);
  put({
    id: 'tokyo3_t_s_212', name: 'T\'sたんたん エキュート上野店 (T\'s Tantan, ecute Ueno)', category: 'VEGAN',
    lat: 35.713274, lng: 139.776728, cuisine_type: 'ramen',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask — not safe for coeliacs without checking. The wheat noodles can be swapped for rice-flour noodles, flat rice pho or konnyaku noodles (+¥150), and the shop\'s allergen chart of 4 October 2026 marks no wheat for the yuzu vegetable SIO ramen with any of those three noodles; every tantanmen, the curry bowl, gyoza and most mini bowls are marked wheat. The same chart says all food is cooked with shared equipment and utensils, that cross-contamination does occur, and that the shop does not change or remove ingredients for allergies (though the printed menu says to ask staff about allergies, and a July 2026 diner was offered an allergy-friendly noodle).',
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: 'The brand says it uses no animal ingredients — "肉・魚介類・卵・乳製品等の動物性食材を一切使用せず" (official site) and, on the allergen page, that no animal ingredients are used in any menu item; the October 2026 allergen chart marks no egg or milk for any item, and the toppings are soy cheese, soy meatballs and soy char siu. Held at "some vegan options" from an earlier check (2026-08-20, see vegan_disproven_downgrade); proposed for review against these sources.',
    vegan_disproven_downgrade: { from: 'full', date: '2026-08-20', disproven: 1, note: 'Held at "options": vegan finding(s) on this record were checked against their sources and contradicted by them. (Re-researched 2026-11-02 from the official site, the official allergen page and the October 2026 allergen chart, which all state no animal ingredients; the hold is kept for review.)' },
    hours_raw: 'Mon–Sat 10:00–22:00; Sun and holidays 10:00–21:00; hours may change (Tabelog). Inside the JR Ueno ticket gates, ecute 3F near the Iriya side. Order and prepay at the counter, collect when your number is called (September 2026). No reservations. 16 seats (Tabelog); a September 2026 diner counted six counter seats and three tables for two. Non-smoking. Cards and transport IC (Tabelog says no QR); contactless card tap was not accepted (September 2026). Children welcome. A museum ticket gave 10% off in August 2026. Opened here 16 October 2025 (Tabelog), after a move within the station (reviews).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Inside JR Ueno Stn ticket gates, ecute Ueno 3F (Iriya side)',
    cuisine: 'Plant-based ramen from the T\'s brand: no meat, seafood, egg or dairy (official site) · menu at ecute Ueno (official, October 2026, tax included): golden sesame tantanmen ¥1,250 or special ¥1,800; black sesame tantanmen (spicy) ¥1,250 or special ¥1,700; yuzu vegetable SIO ramen ¥1,250; vegetable T\'s curry and Buddha bowl with multigrain rice ¥1,700 · noodles: wheat, or rice-flour noodles, flat rice pho or konnyaku noodles +¥150 · Fortune vegetable boiled gyoza, three, ¥720; mini rice bowls (curry, soy-meat crumble, seared soy char siu) ¥400; toppings: soy cheese ¥300, soy meatballs ¥350, seared soy char siu ¥500, spicy topping ¥180; multigrain rice ¥200 · matcha iced latte with oat milk ¥750, organic sodas ¥750, Heartland beer ¥800, vegan gelato ¥650 · several dishes marked "Oriental Veg OK! 五葷不使用" (no alliums)',
    website: TOP, gmaps: gm('T\'sたんたん エキュート上野店'), menu_url: MENUPDF,
    notes: "[Vegan ramen · inside Ueno Station, plant-based tantanmen behind the ticket gates] The ecute Ueno branch of T's TanTan, the station noodle bar of the T's plant-based brand, which uses no meat, seafood, egg or dairy. Bowls are sesame tantanmen — golden (mild, rich, with peanut paste) or black (spicier) — or a light yuzu vegetable SIO ramen, piled with pea shoots and vegetables and topped with soy 'meat'; swap the wheat noodles for rice noodles, flat rice pho or konnyaku for ¥150. There are also a T's curry and Buddha bowl, three-colour vegetable gyoza, oat-milk matcha latte and vegan gelato. Diners in 2026 found the bowls gentle rather than fiery, a bit pricey (¥1,250–1,800) and handy between trains; the room was full of overseas visitors in September 2026. Order and pay first at the counter. Note the allergen chart: the yuzu SIO ramen on rice, pho or konnyaku noodles lists no wheat, but the kitchen is shared and the shop does not adjust dishes for allergies.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened here 16 October 2025 (Tabelog), after moving within Ueno Station (reviews)',
      background: 'T\'s TanTan has shops at Gransta Tokyo, ecute Akihabara, Ikebukuro, Narita Airport Terminal 2 and ecute Ueno (official menu page); its site is hosted at foods.jr-cross.co.jp. The brand grew from T\'s Restaurant in Jiyugaoka, opened on 25 September 2009 by its owner 下川祠左都, a former full-time homemaker who began cooking animal-free dinners after a friend\'s illness; the interview notes that T\'s TanTan has spread through JR East station concourses (weeeat interview, 7 March 2025). No source names this shop\'s staff.',
      philosophy: '"私たちは、「食」を通して健康の大切さを発信しています" — conveying the importance of health through food, with food everyone can enjoy at one table (official site).', specialty: 'Golden and black sesame tantanmen; yuzu vegetable SIO ramen.',
      anecdotes: [
        { text: '"They also mentioned that they can accommodate allergies and offer tofu noodles as an alternative when ordering." — July 2026, black and golden sesame tantanmen ¥1,250.', source: R + 'B533652311/' },
        { text: '"You can choose to replace the regular wheat noodles with konjac noodles or rice flour noodles. The Golden Sesame Tan Tan Noodles are a visually stunning dish." — September 2026.', source: R + 'B535048326/' },
        { text: '"The restaurant was fully packed with international customers! Perhaps because it\'s a vegan restaurant, there were a lot of women from overseas." — September 2026.', source: R + 'B538396354/' },
      ],
      japanese_sources_summary: '公式サイト (foods.jr-cross.co.jp/ts-tantan): 肉・魚介類・卵・乳製品等の動物性食材を一切使用せず、たっぷりのお野菜と豆乳を用いてお料理を作ります。アレルギー情報のページ: 全てのメニューにおいて動物性食材を一切使用していないが、共通の設備・調理器具で調理し、個人のアレルギーに合わせた調理はできない。店舗はグランスタ東京、エキュート秋葉原、池袋、成田空港第二ターミナル、エキュート上野。エキュート上野店のメニュー (2026年10月): 金胡麻たんたん麺スペシャル1,800円、黒胡麻たんたん麺スペシャル1,700円、ゆず野菜SIOらーめん1,250円、金胡麻たんたん麺1,250円、黒胡麻たんたん麺1,250円、ベジT\'sカレー＆ブッタBowl 1,700円、麺は小麦麺か米粉麺・フォー (米粉平麺)・こんにゃく麺 (+150円)、フォーチュン ベジ水餃子3個720円、ミニライスボウル400円、ソイチーズ、ベジミートボウル、炙りベジチャーシュー、抹茶アイスラテ (オーツミルク) 750円、オーガニックソーダ750円、ハートランドビール800円、ヴィーガンジェラート650円、五葷不使用の表示。アレルギー一覧表 (2026年10月4日): ゆず野菜SIOらーめんは米粉麺・フォー・こんにゃく麺で小麦の表示なし (大豆のみ)、たんたん麺は小麦・落花生・ごま・大豆、卵と乳の表示はどの品にもない、食材の変更や除去はしない、コンタミネーションが生じている。インタビュー (weeeat、2025年3月7日): オーナー下川祠左都、友人の病気がきっかけ、2009年9月25日に自由が丘でオープン、JR東日本の駅ナカに T\'sたんたん。食べログ: エキュート上野 3F、月〜土10:00〜22:00、日祝10:00〜21:00、16席、禁煙、2025年10月16日オープン。口コミ(2026年6月〜9月): 改札内で便利、先に注文と支払い、金胡麻・黒胡麻たんたん麺1,250円、黒胡麻スペシャル1,700円、フォーに変更+150円、フォーチュン ベジ水餃子720円、辛さはやさしい、アレルギー対応と豆腐麺の案内があったという声 (2026年7月)、メニューは主に英語、海外の客が多い、美術館のチケットで10%引き。',
      confidence: 'high', sources: [TB, TOP, MENU, MENUPDF, ALLER, ALLERPDF, INTERVIEW, R + 'B515467324/', R + 'B531685174/', R + 'B533652311/', R + 'B534130582/', R + 'B535048326/', R + 'B535259126/', R + 'B535947909/', R + 'B536666026/', R + 'B537082707/', R + 'B538396354/'] },
    cultural_comfort: { level: 'english', note: 'Menu mainly in English (September 2026); order and pay at the counter, number called.' },
    safety: { dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Allergen chart (4 October 2026): all items cooked with shared equipment and utensils; allergen cross-contamination does occur.', source: ALLERPDF, verified: TODAY }],
      soy_sauce_wheat: [{ text: 'Allergen chart marks wheat for every tantanmen (any noodle), the curry bowl, gyoza and most mini bowls; the yuzu vegetable SIO ramen on rice-flour, pho or konnyaku noodles lists soybean only.', source: ALLERPDF, verified: TODAY }],
      vegan_cross_contact: [{ text: 'Official allergen page: no animal ingredients are used in any menu item.', source: ALLER, verified: TODAY }],
      staff_allergy_handling: [{ text: 'Allergen chart: "We do not offer allergy-related services, such as changing or removing ingredients." The printed menu says to tell staff about allergies; a July 2026 diner was offered an allergy-friendly noodle.', source: ALLERPDF, verified: TODAY }],
      positives: [{ text: 'Rice-flour, flat rice pho and konnyaku noodle swaps (+¥150).', source: MENUPDF, verified: TODAY }],
      confidence: 'medium', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野7-1-1 エキュート上野 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official menu and allergen chart for ecute Ueno (October 2026); Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (inside JR Ueno Stn, ecute 3F); GSI 東京都台東区上野七丁目1番 (lot level, the station block) 50 m from the Tabelog point; the placeholder's earlier approximate point is replaced; ${TODAY}`,
  }, { verified: 'authoritative', confidence: 'high', sources: [MENUPDF, ALLERPDF],
    price_note: 'Prices from the official ecute Ueno menu (October 2026, tax included).', last_checked: TODAY, items: [
      it('金胡麻たんたん麺', '', 'Golden sesame tantanmen', '¥1,250', 'Ramen', 'no', 'vegan', 'Official menu; wheat in all noodle versions (allergen chart).', 'gold_tantan'),
      it('金胡麻たんたん麺スペシャル', '', 'Golden sesame tantanmen special', '¥1,800', 'Ramen', 'no', 'vegan', 'Official menu.', 'gold_tantan_sp'),
      it('黒胡麻たんたん麺', '', 'Black sesame tantanmen (spicy)', '¥1,250', 'Ramen', 'no', 'vegan', 'Official menu.', 'black_tantan'),
      it('黒胡麻たんたん麺スペシャル', '', 'Black sesame tantanmen special', '¥1,700', 'Ramen', 'no', 'vegan', 'Official menu; September 2026 review.', 'black_tantan_sp'),
      it('ゆず野菜SIOらーめん', '', 'Yuzu vegetable SIO ramen', '¥1,250', 'Ramen', 'ask', 'vegan', 'Official menu; with rice-flour, pho or konnyaku noodles the chart lists no wheat (soybean only), but the kitchen is shared.', 'yuzu_sio'),
      it('米粉麺／フォー（米粉平麺）／こんにゃく麺', '', 'Noodle swap: rice-flour noodles, flat rice pho or konnyaku', '+¥150', 'Noodles', 'ask', 'vegan', 'Official menu.', 'noodle_swap'),
      it('ベジT\'sカレー＆ブッタBowl', '', 'Vegetable T\'s curry and Buddha bowl', '¥1,700', 'Bowls', 'no', 'vegan', 'Official menu; wheat in the curry (allergen chart).', 'buddha_bowl'),
      it('フォーチュン ベジ水餃子 3個', '', 'Fortune vegetable boiled gyoza (3)', '¥720', 'Sides', 'no', 'vegan', 'Official menu; September 2026 review.', 'gyoza'),
      it('抹茶アイスラテ（オーツミルク）', '', 'Matcha iced latte with oat milk', '¥750', 'Drinks', 'ask', 'vegan', 'Official menu.', 'matcha_latte'),
      it('ヴィーガンジェラート', '', 'Vegan gelato (strawberry sorbet, pistachio, matcha)', '¥650', 'Dessert', 'ask', 'vegan', 'Official menu.', 'gelato'),
    ] }, {
    cuisine: 'T\'s の植物性のらーめん。肉・魚介類・卵・乳製品を使わない (公式サイト)・エキュート上野店のメニュー (公式、2026年10月、税込み): 金胡麻たんたん麺1,250円、スペシャル1,800円、黒胡麻たんたん麺 (辛口) 1,250円、スペシャル1,700円、ゆず野菜SIOらーめん1,250円、雑穀ごはんのベジT\'sカレー＆ブッタBowl 1,700円・麺は小麦麺か、米粉麺、フォー (米粉平麺)、こんにゃく麺 (+150円)・フォーチュン ベジ水餃子3個720円、ミニライスボウル (カレー、ベジ魯肉そぼろ、炙りベジチャーシュー) 400円、トッピングはソイチーズ300円、ベジミートボウル350円、炙りベジチャーシュー500円、辛味トッピング180円、雑穀ごはん200円・抹茶アイスラテ (オーツミルク) 750円、オーガニックソーダ750円、ハートランドビール800円、ヴィーガンジェラート650円・一部の品に「Oriental Veg OK! 五葷不使用」の表示',
    neighborhood: 'JR上野駅の改札内、エキュート上野 3F (入谷側)',
    gf_detail: '要確認。セリアック病の人は確認なしでは安全ではありません。小麦麺は米粉麺、フォー、こんにゃく麺に変更でき (+150円)、2026年10月4日のアレルギー一覧表では、この3種の麺のゆず野菜SIOらーめんに小麦の表示はない。たんたん麺はどの麺でも、カレー、餃子、ほとんどのミニボウルも小麦の表示がある。同じ表には、すべて共通の設備・調理器具で調理しコンタミネーションが生じていること、アレルギーのための食材の変更や除去はしないことが書かれている (ただしメニューにはアレルギーはスタッフに伝えるようにとあり、2026年7月にはアレルギー向けの麺を案内されたという人も)。',
    vegan_detail: '公式サイトに「肉・魚介類・卵・乳製品等の動物性食材を一切使用せず」、アレルギーのページにも全てのメニューで動物性食材を使っていないとあり、2026年10月のアレルギー表にも卵と乳の表示はどの品にもない。トッピングもソイチーズ、ベジミートボウル、炙りベジチャーシュー。以前の確認 (2026年8月20日) で「一部ヴィーガン」に据え置かれており、これらの資料での見直しを提案中。',
    notes: '[ヴィーガンらーめん・上野駅の改札内、植物性のたんたん麺] 肉、魚介、卵、乳製品を使わない T\'s ブランドの駅ナカの麺の店、T\'sたんたんのエキュート上野店。金胡麻 (まろやかで濃厚、ピーナッツペースト付き) か黒胡麻 (辛め) のたんたん麺、またはあっさりしたゆず野菜SIOらーめんで、豆苗や野菜がたっぷり、大豆の「肉」がのる。小麦麺は150円で米粉麺、フォー、こんにゃく麺に変えられる。T\'sカレーとブッタBowl、3色の野菜の水餃子、オーツミルクの抹茶ラテ、ヴィーガンジェラートも。2026年の口コミでは辛さはやさしく、値段はやや高め (1,250〜1,800円) で、乗り換えの合間に便利という声。2026年9月は店内が海外の客でいっぱいだったという。先にカウンターで注文して支払う。アレルギー表では米粉麺・フォー・こんにゃく麺のゆず野菜SIOらーめんに小麦の表示はないが、厨房は共通で、アレルギーに合わせた調理の変更はしない。',
  });
}

// ================================================================ COFFEE & BAR gg KURAMAE エキュート上野店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13309122/'; const R = TB + 'dtlrvwlst/';
  const D = day(['09:00', '21:00']);
  put({
    id: 'tokyo_gg_kuramae_ecute_ueno', name: 'COFFEE & BAR gg KURAMAE エキュート上野店', category: 'OMNI',
    lat: 35.714290, lng: 139.777473, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee, tea and lattes are the core, but nothing is described as gluten-free; the food is cheesecake, scones and Pelican-bread toast.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee, Earl Grey and orange tea are on the menu, but plant milk is not mentioned in the sources; lattes and the food use dairy, eggs or butter.',
    hours_raw: 'Daily 9:00–21:00; hours may change (Tabelog). Inside the JR Ueno ticket gates, 3F (ecute Ueno). No reservations. About 10 counter seats (Tabelog: 10 seats); seats are few, so expect to wait at busy times. Non-smoking. Cards (VISA, Master, JCB), transport IC and PayPay. Takeout. Opened 24 April 2025 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Inside JR Ueno Stn ticket gates, ecute Ueno 3F',
    cuisine: 'Station branch of a Kuramae coffee-and-bar café, known for drinks in a bear-shaped "Kuma bottle" you can take home (reviews) · café latte ¥700, iced café latte ¥700, milk tea ¥720, orange tea ¥720, matcha latte in a Kuma bottle ¥830, a drink in the bear container about ¥850 (glass version about ¥1,200) (August–October 2026) · cheesecake, scones, Pelican-bread honey butter toast, affogato · bear-themed goods (stickers, keychains, plush toys)',
    website: 'https://gg-genie.com/', gmaps: gm('COFFEE & BAR gg KURAMAE エキュート上野'), menu_url: null,
    notes: "[Café · inside Ueno Station, coffee in a bear bottle] A tiny café inside the JR Ueno ticket gates, the station branch of a Kuramae coffee and bar, opened in April 2025. Its draw is the bear-shaped \"Kuma bottle\": lattes, matcha latte and teas come in a resealable bear you can rinse and take home (about ¥850 with a drink in 2026), alongside regular cups from ¥700. Food is light — the cheesecake from the Kuramae shop, scones and honey-butter toast on Pelican bread — and the shelves sell bear-themed goods. With about ten seats it is often full; one September 2026 diner found the scones reheated rather than freshly baked as advertised. Card, IC and PayPay.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 24 April 2025 (Tabelog)', background: 'Reviews describe it as the station branch of a popular café in Kuramae, whose cheesecake has been popular since the Kuramae shop opened (August 2026). The listing\'s website is gg-genie.com. No source names the owner.', philosophy: null, specialty: 'Drinks in a bear bottle; cheesecake.',
      anecdotes: [
        { text: '"The Kuma bottle offers a larger serving, but if you ask the staff, you can take it home after shaking it up." — September 2026, matcha latte ¥830.', source: R + 'B536113773/' },
        { text: '"I visited with the expectation of enjoying freshly baked scones. However, what I received were scones that had just been reheated, not freshly made." — September 2026.', source: R + 'B537026504/' },
        { text: '"On my way out, the staff kindly asked if I wanted to rinse the container." — October 2026, iced caramel latte in the bear container, about ¥850.', source: R + 'B537513779/' },
      ],
      japanese_sources_summary: '食べログ: COFFEE & BAR gg KURAMAE エキュート上野店、上野7-1-1 JR上野駅改札内 3F、毎日9:00〜21:00、予約不可、10席、禁煙、カード (VISA・Master・JCB)・交通系IC・PayPay 可、2025年4月24日オープン。口コミ(2026年8月〜10月): Kuramae の人気カフェの駅ナカ店、くまの形のボトル (持ち帰れる)、アイスカフェラテ700円、オレンジティー720円、チーズケーキ、抹茶ラテ (くまボトル) 830円、カフェラテ700円、ミルクティー720円、席が少なく待つことも、くまのグッズ、アールグレイ、Pelican のパンのハニーバタートースト、アフォガート、スコーンは焼きたてではなく温め直しだったという声、くまの容器入りのドリンク約850円 (ガラス約1,200円)、容器をすすいでくれる。',
      confidence: 'medium', sources: [TB, R + 'B533736795/', R + 'B534325255/', R + 'B536113773/', R + 'B536125633/', R + 'B536295212/', R + 'B536366994/', R + 'B536432884/', R + 'B536647552/', R + 'B537026504/', R + 'B537513779/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small station café; order at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野7-1-1 JR上野駅改札内 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (inside JR Ueno Stn, 3F); GSI 東京都台東区上野七丁目1番 (lot level, the station block) 83 m from the Tabelog point; T's Tantan (tokyo3_t_s_212, ecute Ueno 3F) is 131 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536113773/', R + 'B536432884/', R + 'B537513779/'],
    price_note: 'Prices from August–October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Café latte (hot, R)', '¥700', 'Coffee', 'ask', 'no', 'September 2026.', 'latte'),
      it('', '', 'Orange tea (R)', '¥720', 'Tea', 'ask', 'ask', 'September 2026.', 'orange_tea'),
      it('', '', 'Matcha latte in a Kuma (bear) bottle, iced', '¥830', 'Drinks', 'ask', 'no', 'September 2026.', 'kuma_matcha'),
      it('', '', 'Drink in the bear container (plastic)', '¥850', 'Drinks', 'ask', 'ask', 'October 2026 ("about"); glass version about ¥1,200.', 'kuma_bottle'),
    ] }, {
    cuisine: 'Kuramae のコーヒーとバーのカフェの駅ナカ店で、持ち帰れるくまの形の「くまボトル」のドリンクが人気 (口コミ)・カフェラテ700円、アイスカフェラテ700円、ミルクティー720円、オレンジティー720円、くまボトルの抹茶ラテ830円、くまの容器入りのドリンク約850円 (ガラスは約1,200円) (2026年8月〜10月)・チーズケーキ、スコーン、Pelican のパンのハニーバタートースト、アフォガート・くまのグッズ (ステッカー、キーホルダー、ぬいぐるみ)',
    neighborhood: 'JR上野駅の改札内、エキュート上野 3F',
    gf_detail: '要確認。コーヒー、紅茶、ラテが中心だが、グルテンフリーの説明はありません。食べ物はチーズケーキ、スコーン、Pelican のパンのトースト。',
    vegan_detail: '要確認。ブラックコーヒー、アールグレイ、オレンジティーはあるが、植物性ミルクの話は口コミにありません。ラテと食べ物には乳、卵、バターを使う。',
    notes: '[カフェ・上野駅の改札内、くまのボトルのコーヒー] JR上野駅の改札内にある小さなカフェで、Kuramae のコーヒーとバーの駅ナカ店、2025年4月の開店。目玉はくまの形の「くまボトル」で、ラテ、抹茶ラテ、紅茶をふた付きのくまの容器に入れてもらい、すすいで持ち帰れる (2026年はドリンク込みで約850円)。普通のカップは700円から。食べ物は軽めで、Kuramae の店から人気のチーズケーキ、スコーン、Pelican のパンのハニーバタートースト。棚にはくまのグッズが並ぶ。席は約10席でよく満席。2026年9月には、焼きたてとあったスコーンが温め直しだったという人も。カード、交通系IC、PayPay 可。',
  });
}

// ================================================================ 麺屋 天王
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13117496/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'tokyo_menya_tenno_higashiueno', name: '麺屋 天王 (Menya Tenno)', category: 'OMNI',
    lat: 35.714132, lng: 139.779780, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles in seafood-tonkotsu, miso and sesame soups, with gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and pork-bone soups, chashu and egg toppings.',
    hours_raw: 'Mon–Sat 11:30–15:00 and 17:30–22:00 (food last order 21:30); closed Sundays; hours may change (Tabelog). No reservations. Ticket machine takes cash only; for cashless (QR) payment order at the table and pay after (July 2026); Tabelog lists no cards or e-money. 20 seats: 8 at the counter, 12 at tables. Smoking allowed (Tabelog). Diners in March, August and September 2026 found the shop\'s cleanliness lacking (coughing staff, a smell, greasy tables).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Ueno 4-chōme, 東ビル 1F — 3 min from JR Ueno Stn Iriya exit',
    cuisine: 'Tsukemen, ramen and abura-soba with house-made noodles, thick or thin, large size free (Tabelog; reviews) · seafood-tonkotsu tsukemen ¥790 (April and August 2026); miso tsukemen and dandan tsukemen ¥890 (July 2026); abura-soba ¥720 (July 2026); miso ramen ¥860 with a gyoza and rice set +¥300 (May 2026); rich ramen, tantanmen, a summer cold dandan noodle · seasoned egg ¥110, green onion ¥100 · draft beer ¥360 (May 2026)',
    website: null, gmaps: gm('麺屋 天王 東上野4-10-6'), menu_url: TB + 'dtlmenu/',
    notes: "[Ramen · Higashi-Ueno, cheap tsukemen with a free large size] A plain noodle shop three minutes from the Iriya exit of Ueno Station, serving tsukemen, ramen and abura-soba on house-made noodles you can have thick or thin, with the large size free. Prices are low for 2026: seafood-tonkotsu tsukemen ¥790, abura-soba ¥720, miso ramen ¥860 (gyoza and rice +¥300) and draft beer ¥360. Diners liked the chewy noodles, the balanced seafood-pork dip and the value; others in 2026 found the flavour faint, the 'free large' closer to a medium, and the room greasy and not very clean. The listing calls it the Ueno branch of a Tabata shop; a July 2026 diner says the Tabata branch has closed. Cash at the machine, QR at the table. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog listing\'s remarks, the Ueno branch of Menya Tenno in Tabata-Shinmachi, Kita-ku; a July 2026 review says "The Tabata branch has closed." No source names the owner or gives an opening date.', philosophy: null, specialty: 'Tsukemen; abura-soba.',
      anecdotes: [
        { text: '"The balance of seafood and pork bone flavors was excellent, and it paired perfectly with the homemade noodles." — July 2026, tsukemen.', source: R + 'B531350243/' },
        { text: '"While the large size is free, it wasn\'t that large—more like a typical medium size (about 300 grams). The most concerning aspect was the smell inside the restaurant." — August 2026, tsukemen ¥790.', source: R + 'B533072963/' },
        { text: '"The ticket vending machine only accepts cash. If you prefer cashless payment, you can order at the table and pay later." — July 2026, abura-soba ¥720.', source: R + 'B532119454/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 天王、東上野4-10-6 東ビル 1F、JR上野駅入谷口から徒歩3分、月〜土11:30〜15:00・17:30〜22:00 (L.O.21:30)、日曜休み、予約不可、カード・電子マネー不可、QR可、20席 (カウンター8、テーブル12)、喫煙可、Kita-ku Tabata-Shinmachi の麺屋 天王の上野店、太麺か細麺を選べて大盛り無料。口コミ(2026年3月〜9月): 魚介豚骨つけ麺790円、自家製麺、味噌ラーメン860円 (餃子とライスのセット+300円)、生ビール360円、油そば720円、味噌つけ麺890円、味玉110円、券売機は現金のみでキャッシュレスは席で注文してあと払い、Tabata の店は閉店したという声 (2026年7月)、担々つけ麺890円、ねぎ100円、大盛りは並くらい (約300g)、店内のにおい、テーブルと床がべたつく、店員が咳を気にしないなど衛生面の不満 (2026年3月)、濃厚ラーメン、担々麺、夏限定の冷やし担々麺。',
      confidence: 'medium', sources: [TB, R + 'B525722416/', R + 'B531350243/', R + 'B531572218/', R + 'B532091982/', R + 'B532119454/', R + 'B532641337/', R + 'B533072963/', R + 'B535568176/', R + 'B536463507/', R + 'B536534262/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine (cash); QR payment if you order at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区東上野4-10-6 東ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野四丁目10番6号 (go) 7m; Motocho (this batch, 東上野4-10-7 東ビル 1F) is 8 m away at its own GSI point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525722416/', R + 'B532119454/', R + 'B532091982/'],
    price_note: 'Prices from April–August 2026 reviews (tax included); large size free.', last_checked: TODAY, items: [
      it('', '', 'Seafood-tonkotsu tsukemen', '¥790', 'Tsukemen', 'no', 'no', 'April and August 2026.', 'tsukemen'),
      it('', '', 'Abura-soba', '¥720', 'Abura-soba', 'no', 'no', 'July 2026.', 'abura_soba'),
      it('', '', 'Miso ramen', '¥860', 'Ramen', 'no', 'no', 'May 2026; gyoza and rice set +¥300.', 'miso_ramen'),
      it('', '', 'Dandan tsukemen', '¥890', 'Tsukemen', 'no', 'no', 'July 2026.', 'dandan_tsukemen'),
    ] }, {
    cuisine: '自家製麺のつけ麺、ラーメン、油そば。太麺か細麺を選べ、大盛り無料 (食べログ、口コミ)・魚介豚骨つけ麺790円 (2026年4月・8月)、味噌つけ麺と担々つけ麺890円 (2026年7月)、油そば720円 (2026年7月)、味噌ラーメン860円に餃子とライスのセット+300円 (2026年5月)、濃厚ラーメン、担々麺、夏の冷やし担々麺・味玉110円、ねぎ100円・生ビール360円 (2026年5月)',
    neighborhood: '東上野四丁目、東ビル 1F。JR上野駅入谷口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。魚介豚骨、味噌、ごまのスープに自家製の小麦の麺、餃子も。',
    vegan_detail: 'ヴィーガンではありません。魚介と豚骨のスープ、チャーシュー、卵のトッピング。',
    notes: '[ラーメン・東上野、大盛り無料の安いつけ麺] 上野駅入谷口から3分の飾り気のない麺の店で、自家製麺のつけ麺、ラーメン、油そばを、太麺か細麺で、大盛り無料で出す。2026年にしては安く、魚介豚骨つけ麺790円、油そば720円、味噌ラーメン860円 (餃子とライス+300円)、生ビール360円。もちもちの麺やバランスのいい魚介豚骨のつけ汁、お得さが好評な一方、2026年には味が薄い、無料の大盛りは並くらい、店内がべたつき清潔とはいえないという声も。食べログでは Tabata の店の上野店とあるが、2026年7月の口コミでは Tabata の店は閉店したという。券売機は現金、QRは席で。日曜休み。',
  });
}

// ================================================================ 元長
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13156164/'; const R = TB + 'dtlrvwlst/';
  const D = day(['06:00', '21:00']);
  put({
    id: 'tokyo_motocho_soba_higashiueno', name: '元長 (Motocho)', category: 'OMNI',
    lat: 35.714187, lng: 139.779830, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soba and udon in a soy-and-bonito broth, with wheat-batter tempura, croquettes and curry; the soba\'s buckwheat ratio is not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dipping sauce and broth are bonito dashi; toppings include squid and shrimp tempura, chikuwa and raw egg.',
    hours_raw: 'Mon–Fri and holidays 6:00–21:00; closed Saturdays and Sundays (Tabelog). Meal tickets from a vending machine. 13 seats. Non-smoking. No cards; transport IC (Suica) accepted (Tabelog). Tempura is fried to order, so bowls take a few minutes; some tempura sells out by mid-afternoon (October 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Ueno 4-chōme, 東ビル 1F, across Showa-dori from the Iriya exit — 3 min from JR Ueno Stn',
    cuisine: 'Counter soba and udon with thin soba made daily in the noodle workshop upstairs, boiled and fried to order (reviews) · kakiage soba ¥560, nasu tempura soba ¥570, croquette soba ¥610, chilled tempura soba ¥610, tempura soba ¥640, squid tempura soba ¥650, shungiku tempura +¥150 (September–October 2026) · sets: soba with mini curry ¥750 (October 2026), zaru soba with a kakiage don, curry or chicken bowl ¥800 (September 2026), shrimp tempura and kakiage don service set ¥880 (July 2026), tempura soba and mini black curry ¥970 (October 2026), daily set (chikuwa tempura soba with salmon rice) · raw egg',
    website: null, gmaps: gm('元長 東上野4-10-7 そば'), menu_url: TB + 'dtlmenu/',
    notes: "[Soba · Higashi-Ueno, a one-man stand soba with noodles made upstairs] A small counter soba-udon shop across Showa-dori from Ueno Station's Iriya exit, open from 6 am on weekdays. It looks like a standing-soba stall, but the thin soba is made daily in the workshop upstairs and boiled to order, and the kakiage, eggplant and squid tempura are fried when you hand over your ticket. The broth is dark and Kanto-style, with bonito. Bowls run ¥560–650; sets add a mini curry (a rich black-roux curry), a kakiage don or salmon rice for ¥750–970. Diners in 2026 praise the noodles and the kind owner, who works alone; one diner found it not the cleanest, another the noodles a bit soft. Closed weekends.",
    chef_bio: { chef_name: null, roles: ['Owner, works alone (October 2026 review)'], origin: null, background: 'Reviews in September 2026 say the noodles are made fresh every day in the shop\'s noodle workshop on the second floor; an October 2026 diner saw the owner working alone, and a September 2026 diner found the owner very kind. The shop was featured as a morning-food spot on a TBS morning programme (October 2026 review). No source names the owner or gives an opening date.', philosophy: null, specialty: 'Thin house-made soba; kakiage.',
      anecdotes: [
        { text: '"I heard that the noodles are made on the second floor in their noodle factory and served fresh. The noodles have a wonderful soba flavor and are delicious." — September 2026, chilled tempura soba ¥610.', source: R + 'B535674278/' },
        { text: '"At a typical standing soba shop, the food would be served almost instantly, but here they take the time to boil the soba and fry the kakiage after you place your order." — September 2026, kakiage soba ¥560.', source: R + 'B536492246/' },
        { text: '"The owner, who was working alone, had a great vibe." — October 2026, daily set.', source: R + 'B536637566/' },
      ],
      japanese_sources_summary: '食べログ: 元長、東上野4-10-7 東ビル 1F、JR上野駅入谷口から徒歩3分、月〜金・祝6:00〜21:00、土日休み、13席、禁煙、カード不可、交通系IC可。口コミ(2026年7月〜10月): コロッケそば610円、いか天そば650円と春菊天150円、サービス定食 (海老天とかき揚げ丼) 880円、店主はやさしい、2階の製麺所で毎日打つ麺、冷やし天ぷらそば610円、ざる定食800円 (天丼・カレー・親子丼から)、かき揚げそば560円、注文を受けてからゆでて揚げる、濃いつゆ、店主一人、日替わり定食 (ちくわ天そばと鮭ご飯)、生卵、そば定食 (温かいそばとカレー) 750円、極細の自家製そば、天ぷらそば640円とミニカレー330円で970円、黒いルーの辛口カレー、なす天そば570円、TBS の朝の番組で紹介、昼過ぎには春菊天が売り切れ、清潔とはいえないという声、麺がやわらかめという声。',
      confidence: 'medium', sources: [TB, R + 'B466283239/', R + 'B535674278/', R + 'B535763859/', R + 'B536492246/', R + 'B536637566/', R + 'B536872220/', R + 'B536977680/', R + 'B537390571/', R + 'B537433559/', R + 'B537709878/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; Suica accepted.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都台東区東上野4-10-7 東ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野四丁目10番7号 (go) 3m; Menya Tenno (this batch, 東上野4-10-6 東ビル 1F) is 8 m away at its own GSI point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536492246/', R + 'B537390571/', R + 'B535763859/'],
    price_note: 'Prices from July–October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Kakiage soba', '¥560', 'Soba', 'no', 'no', 'September 2026.', 'kakiage_soba'),
      it('', '', 'Tempura soba', '¥640', 'Soba', 'no', 'no', 'October 2026; mini curry +¥330.', 'tempura_soba'),
      it('', '', 'Zaru soba set with kakiage don, curry or chicken bowl', '¥800', 'Sets', 'no', 'no', 'September 2026.', 'zaru_set'),
      it('', '', 'Soba with mini curry', '¥750', 'Sets', 'no', 'no', 'October 2026.', 'soba_curry'),
    ] }, {
    cuisine: '2階の作業場で毎日打つ細いそばを注文ごとにゆで、天ぷらも揚げるカウンターのそば・うどん (口コミ)・かき揚げそば560円、なす天そば570円、コロッケそば610円、冷やし天ぷらそば610円、天ぷらそば640円、いか天そば650円、春菊天+150円 (2026年9月〜10月)・定食: そばとミニカレー750円 (2026年10月)、ざるそばにかき揚げ丼・カレー・親子丼のどれか800円 (2026年9月)、海老天とかき揚げ丼のサービス定食880円 (2026年7月)、天ぷらそばとミニ黒カレー970円 (2026年10月)、日替わり定食 (ちくわ天そばと鮭ご飯)・生卵',
    neighborhood: '東上野四丁目、東ビル 1F、入谷口から Showa-dori を渡ってすぐ。JR上野駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。醤油とかつおのつゆのそばとうどんに、小麦の衣の天ぷら、コロッケ、カレー。そばの割合は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。つゆはかつおだしで、具にはいかや海老の天ぷら、ちくわ、生卵も。',
    notes: '[そば・東上野、2階で打つ麺の店主一人のそば] 上野駅入谷口から Showa-dori を渡ってすぐの小さなカウンターのそば・うどん店で、平日は朝6時から。立ち食いそばのような店構えだが、細いそばは2階の作業場で毎日打ち、注文ごとにゆで、かき揚げ、なす、いかの天ぷらも食券を渡してから揚げる。つゆは色の濃い Kanto 風でかつおが利く。一杯560〜650円、ミニカレー (黒いルーの辛口)、かき揚げ丼、鮭ご飯の付く定食は750〜970円。2026年の口コミでは麺と、一人で切り盛りするやさしい店主が好評。清潔とはいえない、麺がやわらかめという声も。土日休み。',
  });
}

save();
