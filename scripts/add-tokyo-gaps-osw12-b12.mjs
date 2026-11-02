// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 12.
//   + ランビアンス ドゥース L'ambiance douce (one-person French bistro near Naka-Okachimachi; ¥1,650 pork lunches; opened 2017)
//   + 小粋そば Koiki Soba (standing-style soba by Inaricho Stn from 7:30; ramen and champon too; izakaya from 17:00)
//   + そば shin Soba shin (creative dipping soba from Ginza Kurahashi; opened July 2025; cashless)
//   + 草原の家 Sogen no Ie (Mongolian lamb restaurant, formerly listed as モンゴル焼売)
// Skipped (see skip()): 日高屋 稲荷町店 13176526, 黒工号 上野店 13224239, まぐろ人 御徒町出張所 13100996,
//   カナピナ 東上野店 13041211 (chains), 吉祥 13115651 (no hours, identity unclear).
// Chain check (with Greg's 2026-11-02 rulings). L'ambiance douce, Koiki Soba, Sogen no Ie: one shop each found.
//   Soba shin: the listing and an August 2026 review say it is run by the Ginza restaurant Kurahashi — a different concept
//   from the same operator (not in data), so drafted as its own shop; no other Soba shin branch found.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address. Soba shin gives 上野2-12-4 VERTEX UENO 1F, the same lot
//   number as Nobuchan (tokyo_nobuchan_ueno, address_ja "東京都台東区上野2-12-4 レインボータワービル 1F"); building names
//   differ, GSI point is 4.5 m from the Nobuchan pin, so Soba shin is offset ~5 m.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13176526', 'national chain: 日高屋 (Hidakaya); this is the 稲荷町店.');
skip('13224239', 'chain: 黒工号 has same-concept branches (e.g. 新高円寺店); this is the 上野店.');
skip('13100996', 'chain: まぐろ人 (江戸ダイニング, formerly 栄都商事) runs same-concept stands (e.g. 雷門出張所); this is the 御徒町出張所.');
skip('13041211', 'chain: the listing calls the 東上野店 "the first location of the popular brand Kanapina with six stores in Tokyo" (flagship counts as chain).');
skip('13115651', 'thin and identity unclear: Tabelog lists no hours or seats; categories say dim sum, while a December 2022 reviewer read the sign as a malatang branch; reviews sparse (September 2024, February 2026). Revisit if a fuller listing appears.');

// ================================================================ ランビアンス ドゥース
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13215214/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '14:30'], ['18:00', '22:30']); const N = day(['18:00', '22:30']);
  put({
    id: 'tokyo_lambiance_douce_higashiueno', name: "ランビアンス ドゥース (L'ambiance douce)", category: 'OMNI',
    lat: 35.708946, lng: 139.777878, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free statement. Lunch comes with bread (one free refill) and dinner has a bread-and-service charge; the sauces (cream, mustard cream, Lyonnaise, red wine) are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork-led bistro — charcuterie, pâté, roast and braised pork, duck, beef, gizzard confit, cream and cheese; no vegan dish is named.',
    hours_raw: 'Tue, Wed, Fri, Sat 11:30–14:30 (food last order 13:30) and 18:00–22:30 (food last order 20:00, drinks 22:00); Thu dinner only 18:00–22:30; closed Mondays and Sundays (Tabelog). How to book: phone 03-6284-2962, best after 14:30; lunch can be booked only on Saturdays and public holidays, by phone; groups of five or more by phone only. Weekday lunch is first come, first served — about 10 people were already queuing before the 11:30 opening in October 2026. Dinner: ¥500 per person for bread and service; at least one drink per person; no children under junior-high age. 19 seats (16 at tables, 3 at the counter). Non-smoking. Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money. Opened 1 November 2017.',
    hours: { 1: L, 2: L, 3: N, 4: L, 5: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Ueno 2-chōme, 岩本ビル 1F — 3 min from Naka-Okachimachi Stn; 5 min from Ueno Stn (Hibiya Line) and from JR Okachimachi North Exit',
    cuisine: 'French bistro with hearty pork dishes, cooked and served by one person (Tabelog; reviews) · lunch: four mains at ¥1,650 each with salad, carrot râpé and bread — e.g. steak haché with mustard cream sauce and butter rice, grilled pork chuck eye roll, braised pork shank with mushrooms, pork belly stew with sauerkraut, a monthly chicken special (October 2026) · dinner à la carte (Tabelog menu, March 2026): assorted charcuterie ¥1,950, country pâté ¥1,250, mushroom omelette with truffle sauce ¥1,750, roast Shimanto pork ¥3,950, duck breast with red wine ¥3,950, beef cheek in red wine ¥4,200, veal blanquette ¥4,000, duck leg confit ¥3,850; desserts ¥700–950 (crème brûlée, tarte Tatin) · dinner courses, including one with self-service all-you-can-drink (October 2026) · wine-focused',
    website: null, gmaps: gm("L'ambiance douce 東上野2-12-2"), menu_url: TB + 'dtlmenu/',
    notes: "[French bistro · Naka-Okachimachi, the one-person bistro with the lunch queue] A small, warm French bistro between Ueno and Okachimachi, open since 2017, best known for generous ¥1,650 lunches: salad with a spicy carrot râpé, bread, and a choice of four mains such as a coarse French-style hamburger (steak haché) with mustard cream sauce, braised pork shank, or pork belly with sauerkraut. Reviewers keep remarking that one person cooks and serves everything smoothly. Weekday lunch is first come, first served, and about ten people were already queuing before the 11:30 opening in October 2026; Saturday lunch is booked by phone. Dinner is a wine bistro — charcuterie, pâté, roast pork from Kochi, duck, beef cheek — with a ¥500 bread-and-service charge, one drink per person, and no young children.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 November 2017 (Tabelog)', background: 'Reviews from September–October 2026 say the owner runs the restaurant alone; at an October 2026 dinner for six, a second server was helping. No source names the owner.', philosophy: 'Per the listing, the menu is made to go with wine, so dishes may taste strong without alcohol; at dinner, at least one drink per person is asked.', specialty: 'Pork dishes; steak haché lunch.',
      anecdotes: [
        { text: '"Despite being a one-person operation, the service was smooth, and I didn\'t feel like I was waiting at all." — October 2026.', source: R + 'B537750643/' },
        { text: '"I arrived at 11:15 for the 11:30 opening, and there was already a line, making me the 10th in line." — October 2026, steak haché lunch ¥1,650.', source: R + 'B536886461/' },
        { text: '"The pork is incredibly tender, and the sauce has a subtle balance of acidity and sweetness" — October 2026, pork belly stew with sauerkraut ¥1,650.', source: R + 'B537253773/' },
      ],
      japanese_sources_summary: '食べログ: ランビアンス ドゥース、東上野2-12-2 岩本ビル1F、仲御徒町駅から徒歩3分、上野駅 (日比谷線)・JR御徒町駅北口から徒歩5分、火水金土11:30〜14:30 (料理L.O.13:30)・18:00〜22:30 (料理L.O.20:00、ドリンクL.O.22:00)、木は夜のみ、月日休み、電話予約 (14:30以降がつながりやすい)、ランチ予約は土曜・祝日のみ電話で、5名以上は電話のみ、ディナーは一人500円 (パン・サービス代)、ディナーは1ドリンク以上、中学生未満はディナー不可、19席 (テーブル16、カウンター3)、禁煙、カード・PayPay可、2017年11月1日オープン。口コミ (2025年5月〜2026年10月): 一人で切り盛りするビストロ、ランチは4種すべて1,650円でサラダとパン付き、開店前に約10人の行列、ステーキ・アッシェ、豚肩ロースのグリル、豚すね肉の煮込み、豚バラとシュークルート、シャルキュトリー、コース料理とセルフの飲み放題。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B507392586/', R + 'B528525857/', R + 'B534616993/', R + 'B536315118/', R + 'B536886461/', R + 'B537106965/', R + 'B537156392/', R + 'B537253773/', R + 'B537750643/', R + 'B537788725/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bookings by phone only; lunch is a queue on weekdays; one person cooks and serves.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都台東区東上野2-12-2 岩本ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated March 2026); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野二丁目12番2号 (go) 6m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B536886461/', R + 'B537253773/', R + 'B528525857/'],
    price_note: 'Dinner prices from the Tabelog menu (updated March 2026; seasonal changes); lunch ¥1,650 tax included (October 2026 reviews). Dinner adds ¥500 per person for bread and service.', last_checked: TODAY, items: [
      it('', '', 'Lunch: steak haché (coarse French-style hamburger) with mustard cream sauce and butter rice, salad and bread', '¥1,650', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_steak_hache'),
      it('', '', 'Lunch: braised pork shank with mushrooms, salad and bread', '¥1,650', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_pork_shank'),
      it('', '', 'Lunch: pork belly stew with sauerkraut, salad and bread', '¥1,650', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_choucroute'),
      it('', '', 'Assorted charcuterie', '¥1,950', 'Appetizers', 'ask', 'no', 'Tabelog menu, March 2026.', 'charcuterie'),
      it('', '', 'Country-style pâté', '¥1,250', 'Appetizers', 'ask', 'no', 'Tabelog menu, March 2026.', 'pate'),
      it('', '', 'Mushroom omelette with truffle sauce', '¥1,750', 'Appetizers', 'ask', 'no', 'Tabelog menu, March 2026.', 'omelette'),
      it('', '', 'Carrot râpé', '¥500', 'Side', 'ask', 'ask', 'Tabelog menu, March 2026.', 'carottes_rapees'),
      it('', '', 'Roast Shimanto pork from Kochi', '¥3,950', 'Main', 'ask', 'no', 'Tabelog menu, March 2026.', 'roast_pork'),
      it('', '', 'Roasted duck breast with red wine sauce', '¥3,950', 'Main', 'ask', 'no', 'Tabelog menu, March 2026.', 'duck_breast'),
      it('', '', 'Braised beef cheek in red wine with cassis', '¥4,200', 'Main', 'ask', 'no', 'Tabelog menu, March 2026.', 'beef_cheek'),
      it('', '', 'Crème brûlée', '¥800', 'Dessert', 'ask', 'no', 'Tabelog menu, March 2026.', 'creme_brulee'),
    ] }, {
    cuisine: '一人で切り盛りする、豚料理がボリューム満点のフレンチビストロ (食べログ、口コミ)・ランチはメイン4種がどれも1,650円でサラダ、キャロットラペ、パン付き。たとえばマスタードクリームソースとバターライスのステーキ・アッシェ (粗挽きのハンバーグ)、豚肩ロースのグリル、豚すね肉ときのこの煮込み、豚バラとシュークルート、月替わりの鶏肉 (2026年10月)・夜のアラカルト (食べログのメニュー、2026年3月): シャルキュトリーの盛り合わせ1,950円、田舎風パテ1,250円、きのこのオムレツ トリュフソース1,750円、高知の四万十ポークのロースト3,950円、鴨胸肉の赤ワインソース3,950円、牛ほほ肉の赤ワイン煮4,200円、仔牛のブランケット4,000円、鴨もも肉のコンフィ3,850円、デザート700〜950円 (クレームブリュレ、タルトタタン)・夜はコースも、セルフの飲み放題付きも (2026年10月)・ワイン中心',
    neighborhood: '東上野二丁目、岩本ビル1F。仲御徒町駅から徒歩3分、上野駅 (日比谷線)・JR御徒町駅北口から徒歩5分',
    gf_detail: 'グルテンフリーは要確認。グルテンフリーの説明はありません。ランチにはパン (おかわり1回無料)、夜はパン・サービス代あり。ソース (クリーム、マスタードクリーム、リヨネーズ、赤ワイン) の説明はありません。',
    vegan_detail: 'ヴィーガンではありません。豚肉中心のビストロで、シャルキュトリー、パテ、豚のローストや煮込み、鴨、牛、砂肝のコンフィ、クリーム、チーズ。ヴィーガンの料理名は書かれていません。',
    notes: '[フレンチビストロ・仲御徒町、行列のできる一人営業のビストロ] 上野と御徒町の間にある、小さく温かいフレンチビストロで、2017年から。知られているのはボリュームのある1,650円のランチで、ピリッとしたキャロットラペのサラダ、パン、メイン4種から一つ。粗挽きのフランス風ハンバーグ (ステーキ・アッシェ) のマスタードクリームソース、豚すね肉の煮込み、豚バラとシュークルートなど。一人で調理も接客もこなし、それでも待たされないと口コミで何度も書かれています。平日ランチは予約なしの先着順で、2026年10月には11:30の開店前にすでに約10人が並んでいました。土曜ランチは電話予約。夜はワインのビストロで、シャルキュトリー、パテ、高知のポークのロースト、鴨、牛ほほ肉など。パン・サービス代500円、一人1ドリンク以上、小さな子ども不可。',
  });
}

// ================================================================ 小粋そば
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13184593/'; const R = TB + 'dtlrvwlst/';
  const D = day(['07:30', '16:00'], ['17:00', '01:00']);
  put({
    id: 'tokyo_koiki_soba_inaricho', name: '小粋そば (Koiki Soba)', category: 'OMNI',
    lat: 35.71146, lng: 139.782669, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soba in a soy-based broth with wheat-batter tempura, plus ramen and champon with wheat noodles; the soba is not described as pure buckwheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the soba broth is a dashi (reviews praise the dashi flavour), and toppings include shrimp, squid and egg; even the vegetable tempura soba sits in that broth.',
    hours_raw: 'Mon–Fri 7:30–16:00 and 17:00–1:00; closed Saturdays and Sundays (Tabelog, a user-built listing — "accuracy cannot be guaranteed"). Reviews differ: a September 2026 diner ate there on a Saturday around noon, with one staff member instead of the usual two; an August 2026 diner was told it opened at 17:00 on Sunday, but found it closed. From 17:00 it runs as an izakaya with smartphone ordering (September 2026). No reservations. Tickets from a machine. No cards; e-money accepted. 20 seats (12 at the counter, 8 at tables). Smoking area; no smoking 11:00–14:00.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Ueno 5-chōme, at Inaricho Stn Exit 3 (Ginza Line); 7 min from Shin-Okachimachi Stn and Ueno Stn',
    cuisine: 'Standing-soba-style shop with a long menu, open from breakfast to late night (Tabelog; reviews) · vegetable tempura soba ¥550, large +¥100 (October 2026; ¥460 in June 2025) · warm egg and wakame soba ¥500 (September 2025) · shrimp tempura soba ¥880 (evening, September 2026); famous gesoten (squid-leg tempura) soba; duck soba; day\'s specials like eggplant tempura · sets: soba with vegetable tempura bowl ¥750; shrimp tempura rice bowl set; chilled eggplant tempura soba with a kara-age bowl ¥900 (August 2026) · shoyu ramen made with the soba dipping sauce ¥550, large ¥650 (September–October 2026) · Omi Champon ¥950, with thick sauce ¥1,050 (August–September 2026) · evenings: squid tempura, highballs, beer, sake',
    website: null, gmaps: gm('小粋そば 東上野5-1-2'), menu_url: null,
    notes: "[Soba · Inaricho, a station-side soba counter from 7:30 am to 1 am] A no-frills soba shop right by Exit 3 of Inaricho Station, with tickets from a machine and food out in seconds. The menu runs far past plain soba: vegetable tempura soba for ¥550, gesoten (squid-leg tempura) soba, rice-bowl sets, and an unusual shoyu ramen made with the soba dipping sauce (¥550; a September 2026 reviewer said fans of Kansai-style broth ramen will like it), plus Omi Champon. From 17:00 it turns into a small izakaya with phone ordering, highballs and squid tempura. Tabelog says closed at weekends, but reviewers in 2026 found it open on a Saturday and closed on a Sunday — check before going at the weekend. No smoking only from 11:00 to 14:00.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tabelog listing built by users ("accuracy cannot be guaranteed"); usually two staff on weekdays, one on a Saturday (September 2026). No source names the owner or opening date.', philosophy: null, specialty: 'Tempura soba; gesoten soba; ramen made with soba sauce.',
      anecdotes: [
        { text: '"The noodles were chewy and delicious, even better than some ramen shops." — October 2026, shoyu ramen ¥550 (large +¥100).', source: R + 'B521659704/' },
        { text: '"This ramen uses the dipping sauce from a soba shop. The sweet broth is prominent and quite delicious." — September 2026, large shoyu ramen ¥650.', source: R + 'B536224142/' },
        { text: '"The soba remained firm even in the hot dipping sauce, making this place a great choice for warm soba." — September 2026, shrimp tempura rice bowl set.', source: R + 'B482350559/' },
        { text: '"I thought it was a vending machine, but it turns out to be a smartphone ordering izakaya." — September 2026, from 17:00.', source: R + 'B534718711/' },
      ],
      japanese_sources_summary: '食べログ (ユーザー作成の店舗情報): 小粋そば、東上野5-1-2、稲荷町駅3番出口すぐ、新御徒町駅・上野駅から徒歩7分、月〜金7:30〜16:00・17:00〜1:00、土日休み、予約不可、カード不可・電子マネー可、20席 (カウンター12、テーブル8)、分煙 (11:00〜14:00は禁煙)。口コミ (2025年6月〜2026年10月): 食券制、野菜天そば550円 (大盛り+100円)、げそ天そば、鴨そば、天丼セット、そばのつゆを使った醤油ラーメン550円、Omi Champon 950円、17時からはスマホ注文の居酒屋、2026年9月に土曜の昼に営業、2026年8月には日曜17時からと聞いたが閉まっていた。',
      confidence: 'medium', sources: [TB, R + 'B482350559/', R + 'B508179523/', R + 'B515667008/', R + 'B521659704/', R + 'B534718711/', R + 'B536224142/', R + 'B536367506/', R + 'B536903241/', R + 'B537009677/', R + 'B538398405/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine by day, smartphone ordering from 17:00; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区東上野5-1-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (user-built); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野五丁目1番2号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508179523/', R + 'B521659704/', R + 'B536224142/', R + 'B534718711/'],
    price_note: 'Prices from 2025–2026 reviews; evening prices may differ (shrimp tempura soba ¥880 at night, September 2026).', last_checked: TODAY, items: [
      it('', '', 'Vegetable tempura soba', '¥550', 'Soba', 'no', 'no', 'October 2026; large +¥100.', 'yasai_ten_soba'),
      it('', '', 'Warm egg and wakame soba', '¥500', 'Soba', 'no', 'no', 'September 2025.', 'tamago_wakame_soba'),
      it('', '', 'Shrimp tempura soba', '¥880', 'Soba', 'no', 'no', 'Evening, September 2026.', 'ebi_ten_soba'),
      it('', '', 'Soba with vegetable tempura bowl set', '¥750', 'Sets', 'no', 'no', 'September 2026.', 'yasai_ten_set'),
      it('', '', 'Chilled eggplant tempura soba with kara-age bowl (seasonal)', '¥900', 'Sets', 'no', 'no', 'August 2026.', 'nasu_karaage_set'),
      it('', '', 'Shoyu ramen (made with the soba dipping sauce)', '¥550', 'Ramen', 'no', 'no', 'October 2026; large ¥650.', 'shoyu_ramen'),
      it('', '', 'Omi Champon', '¥950', 'Champon', 'no', 'no', 'August 2026.', 'champon'),
      it('', '', 'Omi Champon with thick sauce', '¥1,050', 'Champon', 'no', 'no', 'September 2026.', 'ankake_champon'),
    ] }, {
    cuisine: '朝から深夜まで営業の、メニューの多い立ち食いそば風の店 (食べログ、口コミ)・野菜天そば550円、大盛り+100円 (2026年10月、2025年6月は460円)・温玉わかめそば500円 (2025年9月)・海老天そば880円 (夜、2026年9月)、名物のげそ天そば、鴨そば、なす天など日替わり・セット: そばと野菜天丼750円、海老天丼セット、冷やしなす天そばと唐揚げ丼900円 (2026年8月)・そばのつゆで作る醤油ラーメン550円、大盛り650円 (2026年9〜10月)・Omi Champon 950円、あんかけ1,050円 (2026年8〜9月)・夜はいか天、ハイボール、ビール、日本酒',
    neighborhood: '東上野五丁目、稲荷町駅 (銀座線) 3番出口すぐ。新御徒町駅・上野駅から徒歩7分',
    gf_detail: 'グルテンフリーではありません。醤油ベースのつゆのそばに小麦の衣の天ぷら、小麦麺のラーメンやちゃんぽんも。そばは十割の説明はありません。',
    vegan_detail: 'ヴィーガンではありません。そばのつゆはだし (口コミでもだしの味がほめられています)。具は海老、いか、卵など。野菜天そばも同じつゆです。',
    notes: '[そば・稲荷町、朝7:30から深夜1時までの駅前のそば屋] 稲荷町駅3番出口のすぐそばにある飾らないそば屋で、食券制、注文から数秒で出てきます。メニューはそばだけではなく、野菜天そば550円、げそ天そば、丼のセット、そばのつゆで作る珍しい醤油ラーメン (550円、2026年9月の口コミでは関西風のだしのラーメンが好きな人に向くとのこと) や Omi Champon も。17時からはスマホ注文の小さな居酒屋になり、ハイボールやいか天も。食べログでは土日休みですが、2026年の口コミでは土曜に営業、日曜は閉まっていたという声があり、週末は確認してから。禁煙は11:00〜14:00のみ。',
  });
}

// ================================================================ そば shin
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13309904/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_soba_shin_ueno', name: 'そば shin (Soba shin)', category: 'OMNI',
    lat: 35.7095, lng: 139.77265, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the soba is a 2:8 blend (eight parts domestic buckwheat to two parts other flour, per the menu and an August 2026 review), served with soy-based dipping sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every dipping sauce is built on bonito (katsuobushi) dashi, some with chicken paitan or milk, and most bowls come with miso-marinated pork chashu.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 17:00–22:00; Sat 11:00–20:30; Sun 11:00–19:30; public holidays 11:00–20:00 (Tabelog). An August 2026 review said it was open into the evening only on Saturdays; Tabelog lists weekday evenings too. No reservations. Tickets from a machine at the entrance; fully cashless (cards, transport IC, PayPay, Alipay and more). 11 seats (7 at the counter, 4 at a table). Non-smoking. Children welcome. Opened 7 July 2025.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: day(['11:00', '20:30']), 6: day(['11:00', '19:30']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ueno 2-chōme, VERTEX UENO 1F — 2 min from Ueno-Hirokoji Stn; 4 min from Ueno-Okachimachi; 5 min from Okachimachi; 6 min from Ueno Stn',
    cuisine: 'Creative dipping soba from the Ginza restaurant Kurahashi: domestic-buckwheat 2:8 soba with bonito-dashi dipping sauces and grilled miso-marinated chashu (Tabelog; reviews) · menu (Tabelog, July 2026): sesame-vinegar seafood dipping soba ¥1,050, milk chicken-paitan cheese dipping soba ¥1,100, soy-milk tantan dipping soba ¥1,050, grilled miso dipping soba ¥1,000, mixed soba ¥950, zaru soba ¥850, summer chilled lemon tantan soba ¥1,150 · kayaku rice S/M/L ¥250/350/450; thick soba-yu ¥100 · toppings ¥100–200 (chashu, onsen egg, cheese, Kujo green onion) · later specials: "intestinal health" soba with natto and nagaimo, spicy mala dipping soba (September–October 2026) · sake and shochu',
    website: null, gmaps: gm('そば shin 上野2-12-4'), menu_url: TB + 'dtlmenu/',
    notes: "[Soba · Ueno-Hirokoji, creative dipping soba from a Ginza kitchen] A clean, modern soba counter between Ueno and Okachimachi, opened in July 2025 by the Ginza Japanese restaurant Kurahashi. It works like a ramen shop — buy a ticket at the machine (cashless only), sit at the counter — but the noodles are 2:8 domestic buckwheat, praised for texture and aroma, and the dipping sauces start from bonito dashi: sesame-vinegar seafood, a creamy milk chicken-paitan with cheese, soy-milk tantan, grilled miso, and spicy mala. A slice of miso-marinated pork chashu is grilled at the counter just before serving and is what several reviewers single out. Plain zaru soba is ¥850; most bowls are ¥1,000–1,150, and a September 2026 reviewer urges adding the kayaku rice. Tabelog lists an English menu.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 July 2025 (Tabelog)', background: 'Per the Tabelog listing (official information), a new soba concept from Kurahashi, a Japanese restaurant in Ginza, with dashi made by its chefs; an August 2026 review also says it is run by "Ginza Kurahashi". No source names the chef in Ueno.', philosophy: null, specialty: 'Dipping soba with grilled miso-marinated chashu.',
      anecdotes: [
        { text: '"Made with 80/20 buckwheat flour, it has great texture, aroma, and a smooth finish—definitely better than your average neighborhood soba shop." — August 2026, mazesoba.', source: R + 'B533595480/' },
        { text: '"What left the biggest impression on me was the grilled miso-marinated chashu!" — September 2026, grilled miso dipping soba.', source: R + 'B535469017/' },
        { text: '"The chashu I added as a topping is grilled just before serving, enhancing its aroma and making it the perfect appetizing accent." — September 2026, intestinal health soba.', source: R + 'B535633310/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): そば shin、上野2-12-4 VERTEX UENO 1F、上野広小路駅から徒歩2分、上野御徒町駅から4分、御徒町駅から5分、上野駅から6分、月〜金11:30〜14:00・17:00〜22:00、土11:00〜20:30、日11:00〜19:30、祝11:00〜20:00、予約不可、完全キャッシュレス、11席 (カウンター7、テーブル4)、禁煙、英語・中国語・韓国語のメニュー、2025年7月7日オープン、銀座の和食店 Kurahashi による新しいつけそば、国産そば粉の二八そば、かつお節のつけ汁、味噌漬けチャーシュー。メニュー (2026年7月): 胡麻酢の魚介つけそば1,050円、ミルク鶏白湯チーズつけそば1,100円、豆乳担々つけそば1,050円、焼き味噌つけそば1,000円、まぜそば950円、ざるそば850円。口コミ (2026年8〜10月): 食券制、チャーシューをその場で焼く、腸活そば、麻辣つけそば。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B533321813/', R + 'B533595480/', R + 'B533672061/', R + 'B534664684/', R + 'B535469017/', R + 'B535633310/', R + 'B536613764/', R + 'B537908131/', R + 'B537914227/', R + 'B538126629/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists menus in English, Simplified Chinese and Korean, with photos and a digital menu; ticket machine, cashless only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野2-12-4 VERTEX UENO 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated July 2026); reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野二丁目12番4号 (go) 11m; offset ~5 m from tokyo_nobuchan_ueno (same lot 上野2-12-4, レインボータワービル); ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B533321813/', R + 'B533672061/'],
    price_note: 'Prices from the Tabelog menu (updated July 2026, tax included). August 2026 reviews paid more for some bowls (sesame-vinegar seafood ¥1,200; soy-milk tantan ¥1,350).', last_checked: TODAY, items: [
      it('', '', 'Sesame-vinegar seafood dipping soba', '¥1,050', 'Dipping soba', 'no', 'no', 'Tabelog menu July 2026; ¥1,200 in an August 2026 review.', 'goma_su_tsukesoba'),
      it('', '', 'Milk chicken-paitan cheese dipping soba', '¥1,100', 'Dipping soba', 'no', 'no', 'Tabelog menu, July 2026.', 'milk_paitan_tsukesoba'),
      it('', '', 'Soy-milk tantan dipping soba', '¥1,050', 'Dipping soba', 'no', 'no', 'Tabelog menu July 2026; ¥1,350 in an August 2026 review.', 'tonyu_tantan_tsukesoba'),
      it('', '', 'Grilled miso dipping soba', '¥1,000', 'Dipping soba', 'no', 'no', 'Tabelog menu, July 2026.', 'yaki_miso_tsukesoba'),
      it('', '', 'Chilled lemon tantan soba (summer)', '¥1,150', 'Dipping soba', 'no', 'no', 'Tabelog menu, July 2026.', 'lemon_tantan'),
      it('', '', 'Mixed soba', '¥950', 'Cold soba', 'no', 'no', 'Tabelog menu, July 2026.', 'mazesoba'),
      it('', '', 'Zaru soba', '¥850', 'Cold soba', 'no', 'no', 'Tabelog menu, July 2026.', 'zaru_soba'),
      it('', '', 'Kayaku rice (small)', '¥250', 'Rice', 'ask', 'ask', 'Tabelog menu, July 2026; medium ¥350, large ¥450.', 'kayaku_gohan'),
      it('', '', 'Thick soba-yu', '¥100', 'Rice', 'ask', 'ask', 'Tabelog menu, July 2026.', 'sobayu'),
      it('', '', 'Grilled miso-marinated chashu (1 slice)', '¥150', 'Topping', 'ask', 'no', 'Tabelog menu, July 2026.', 'miso_chashu'),
    ] }, {
    cuisine: '銀座の和食店 Kurahashi による創作つけそば。国産そば粉の二八そばに、かつおだしのつけ汁と焼いた味噌漬けチャーシュー (食べログ、口コミ)・メニュー (食べログ、2026年7月): 胡麻酢の魚介つけそば1,050円、ミルク鶏白湯チーズつけそば1,100円、豆乳担々つけそば1,050円、焼き味噌つけそば1,000円、まぜそば950円、ざるそば850円、夏の冷やしレモン担々そば1,150円・かやくご飯 小/中/大 250/350/450円、濃いそば湯100円・トッピング100〜200円 (チャーシュー、温泉卵、チーズ、九条ねぎ)・その後の限定: 納豆と長芋の腸活そば、辛い麻辣つけそば (2026年9〜10月)・日本酒、焼酎',
    neighborhood: '上野二丁目、VERTEX UENO 1F。上野広小路駅から徒歩2分、上野御徒町駅から4分、御徒町駅から5分、上野駅から6分',
    gf_detail: 'グルテンフリーではありません。そばは二八 (メニューと2026年8月の口コミによると国産そば粉8に対しほかの粉2)。醤油ベースのつけ汁。',
    vegan_detail: 'ヴィーガンではありません。つけ汁はすべてかつお節のだしがベースで、鶏白湯や牛乳を使うものも。ほとんどの丼に豚の味噌漬けチャーシュー。',
    notes: '[そば・上野広小路、銀座の厨房の創作つけそば] 上野と御徒町の間にある清潔でモダンなそばのカウンターで、2025年7月に銀座の和食店 Kurahashi が開いた店。ラーメン屋のように入口の券売機で食券を買い (キャッシュレスのみ)、カウンターへ。そばは国産そば粉の二八で、食感と香りが好評。つけ汁はかつおだしから: 胡麻酢の魚介、チーズをのせたクリーミーなミルク鶏白湯、豆乳担々、焼き味噌、辛い麻辣。出す直前にカウンターで焼く豚の味噌漬けチャーシューが、いくつもの口コミで特にほめられています。ざるそば850円、ほとんどの丼は1,000〜1,150円。2026年9月の口コミはかやくご飯の追加を強くすすめています。食べログには英語のメニューあり。',
  });
}

// ================================================================ 草原の家
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13299298/'; const R = TB + 'dtlrvwlst/';
  const FJ = 'https://forbesjapan.com/articles/detail/71975';
  const D = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_sogen_no_ie_higashiueno', name: '草原の家 (Sogen no Ie)', category: 'OMNI',
    lat: 35.708298, lng: 139.777893, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: much of the menu is wheat — homemade noodles, shumai, gyoza, Khoshuur (fried meat pies), lamb udon; grilled skewers, salt-boiled spare ribs and salads are not described as gluten-free, and some stir-fries are soy-sauce based.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: a lamb, beef and milk menu; a few vegetable dishes (tofu salad, smashed cucumber, stir-fried shredded potato, stir-fried bean sprouts and pea shoots) are listed, but the seasonings and stock are not described.',
    hours_raw: 'Mon, Wed–Sun, public holidays 11:30–15:00 and 17:00–22:00; closed Tuesdays; closing days may vary (Tabelog). Reservations taken (Tabelog, phone or online); an August 2026 review says it often fills up. Appetizer charge ¥280 per person (Tabelog; a July 2026 diner paid ¥300 for the meat appetizer). Courses with all-you-can-drink for 3–20 people: ¥2,980 (90 min), ¥3,980 (120 min), ¥4,980 (180 min). Ordering by QR code (October 2026). Take-out and delivery. 20 seats (tables). Non-smoking (smoking area outside). Cards (VISA, Master, JCB, UnionPay), transport IC and QR payments. Tabelog lists free Wi-Fi; a September 2026 review says there is none.',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Ueno 1-chōme — 4 min from Naka-Okachimachi and JR Okachimachi Stns; 7 min from Ueno Stn',
    cuisine: 'Homemade Mongolian cooking — lamb, beef and milk dishes with simple seasoning (Tabelog; reviews) · lunch sets (Tabelog, October 2024): grilled lamb udon ¥780, lamb fried rice set ¥880, gyoza set ¥980, homemade beef noodles ¥980, beef or lamb shumai set ¥1,080 · à la carte (Tabelog, 2024): lamb or beef skewers 2 for ¥500, lamb chop ¥980, Bolchi (beef jerky) ¥1,100, salt-boiled spare ribs ¥1,980, stuffed lamb stomach ¥700, lamb soup ¥880, lamb shumai 4 for ¥880, lamb noodles ¥980 · 2026 reviews: Khorkhog 2 pieces ¥880, lamb skewers 2 for ¥700, beef tendon and cucumber salad ¥800, Khoshuur (fried lamb pies), homemade yogurt, salty milk tea ¥350 · Mongolian beers (Golden Gobi, Sengul), camel-milk liquor ¥780, Chinggis vodka',
    website: null, gmaps: gm('草原の家 東上野1-19-2'), menu_url: TB + 'dtlmenu/',
    notes: "[Mongolian · Naka-Okachimachi, lamb and shumai under a ger-style ceiling] A small, slightly hard-to-find Mongolian restaurant between Okachimachi and Ueno, decorated like a ger, with a ceiling that tints photos blue. The cooking is lamb-led and simply seasoned: steamed lamb shumai served in a bamboo basket, Khoshuur (fried lamb pies), cumin lamb skewers, Khorkhog, stuffed lamb stomach, lamb soup with homemade noodles, and homemade yogurt. Lunch sets cost about ¥800–1,100 (2024 prices); dinner runs ¥3,000–4,000 with Mongolian beers, salty milk tea, vodka and camel-milk liquor. Reviewers in 2025–2026 mostly found it authentic and generous; one in September 2026 found it toned down and the portions small. It was previously listed as モンゴル焼売 and renamed after a change of owner (Forbes Japan, June 2024).",
    chef_bio: { chef_name: null, roles: [], origin: 'At this address, a shop listed as モンゴル焼売 (Mongolian shumai) changed owners and was renamed 草原の家 (Forbes Japan, 26 June 2024).', background: 'Tabelog official listing; per the listing, guests can chat with the owner. Two staff on a busy July 2026 evening — one in the dining room, one in the kitchen. No source names the owner or cooks.', philosophy: null, specialty: 'Handmade shumai and gyoza; lamb spare ribs (Tabelog listing).',
      anecdotes: [
        { text: '"Quite Authentic! A Rare Mongolian Cuisine Specialty Restaurant" — July 2026, Khorkhog and salty milk tea.', source: R + 'B532605562/' },
        { text: '"The menu features a lot of lamb, beef, and sheep milk dishes, with very simple seasoning and cooking methods." — August 2026.', source: R + 'B533775257/' },
        { text: '"The interior has a charming atmosphere reminiscent of a grassland ger, which adds to its appeal." — August 2026, lamb yakisoba lunch.', source: R + 'B518337336/' },
        { text: '"The flavors are tailored to Japanese tastes, but it feels like something is missing—perhaps a bit more punch." — September 2026.', source: R + 'B534848608/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 草原の家、東上野1-19-2、仲御徒町駅・御徒町駅から徒歩4分、上野駅から7分、月水木金土日祝11:30〜15:00・17:00〜22:00、火曜休み、予約可、お通し280円、飲み放題付きコース2,980円・3,980円・4,980円 (3〜20名)、テイクアウト・デリバリー、20席、禁煙 (店外に喫煙所)、カード・交通系IC・QR決済可、手作りのモンゴル料理、焼売と餃子、ラムのスペアリブ。ランチ (2024年10月): ラムの焼きうどん780円、ラムチャーハン880円、牛・ラム焼売定食1,080円など。Forbes JAPAN (中村正人、2024年6月26日): 東上野1-19-2のモンゴル焼売は最近オーナーが変わり、店名は「草原の家」に。口コミ (2025年9月〜2026年10月): ゲルのような内装、ラム焼売、羊の串焼き、ゴールデンゴビ (モンゴルビール)、塩味のミルクティー、ラクダの乳のお酒、QRコード注文、2026年9月には味が日本向けで量が少ないという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', TB + 'dtlmenu/lunch/', FJ, R + 'B518337336/', R + 'B532186851/', R + 'B532605562/', R + 'B532679306/', R + 'B533156228/', R + 'B533775257/', R + 'B534848608/', R + 'B535131790/', R + 'B537826253/', R + 'B538385997/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code or call the staff over (October 2026); no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区東上野1-19-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated July–October 2026; renamed from モンゴル焼売 after a change of owner (Forbes Japan, June 2024).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野一丁目19番2号 (go) 5m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'low', sources: [TB + 'dtlmenu/', TB + 'dtlmenu/lunch/', R + 'B532605562/', R + 'B537826253/'],
    price_note: 'Prices from the Tabelog menu (updated October 2024, tax included); 2026 reviews paid more for some dishes (lamb skewers 2 for ¥700 vs ¥500; beef tendon salad ¥800 vs ¥680).', last_checked: TODAY, items: [
      it('', '', 'Lunch: grilled lamb udon with salad', '¥780', 'Lunch', 'no', 'no', 'Tabelog lunch menu, October 2024.', 'lamb_udon_lunch'),
      it('', '', 'Lunch: beef or lamb shumai set (5 pieces) with salad, rice and soup', '¥1,080', 'Lunch', 'no', 'no', 'Tabelog lunch menu, October 2024.', 'shumai_set'),
      it('', '', 'Grilled lamb skewers (2)', '¥500', 'Grilled', 'ask', 'no', 'Tabelog menu 2024; ¥700 in October 2026.', 'lamb_skewers'),
      it('', '', 'Salt-boiled spare ribs', '¥1,980', 'Meat', 'ask', 'no', 'Tabelog menu, 2024.', 'spare_ribs'),
      it('', '', 'Stuffed lamb stomach (1)', '¥700', 'Meat', 'ask', 'no', 'Tabelog menu 2024; same in October 2026.', 'lamb_stomach'),
      it('', '', 'Lamb soup', '¥880', 'Soup', 'ask', 'no', 'Tabelog menu, 2024.', 'lamb_soup'),
      it('', '', 'Lamb shumai (4)', '¥880', 'Staples', 'no', 'no', 'Tabelog menu, 2024.', 'lamb_shumai'),
      it('', '', 'Lamb noodles (homemade)', '¥980', 'Staples', 'no', 'no', 'Tabelog menu, 2024.', 'lamb_noodles'),
      it('', '', 'Khorkhog (2 pieces)', '¥880', 'Meat', 'ask', 'no', 'July 2026 review.', 'khorkhog'),
      it('', '', 'Tofu salad', '¥580', 'Snacks', 'ask', 'ask', 'Tabelog menu, 2024.', 'tofu_salad'),
      it('', '', 'Salty milk tea', '¥350', 'Drinks', 'ask', 'no', 'July 2026 review.', 'milk_tea'),
    ] }, {
    cuisine: '手作りのモンゴル料理。ラム、牛、乳製品の料理をシンプルな味付けで (食べログ、口コミ)・ランチ (食べログ、2024年10月): ラムの焼きうどん780円、ラムチャーハンセット880円、焼き餃子セット980円、自家製麺の牛肉麺980円、牛・ラム焼売セット1,080円・アラカルト (食べログ、2024年): ラム・牛の串焼き2本500円、ラムチョップ980円、Bolchi (干し牛肉) 1,100円、スペアリブの塩ゆで1,980円、ラムの胃袋の詰め物700円、ラムのスープ880円、ラム焼売4個880円、ラム麺980円・2026年の口コミ: Khorkhog 2個880円、ラムの串焼き2本700円、牛すじときゅうりのサラダ800円、Khoshuur (ラムの揚げパイ)、自家製ヨーグルト、塩味のミルクティー350円・モンゴルビール (ゴールデンゴビ、Sengul)、ラクダの乳のお酒780円、Chinggis ウォッカ',
    neighborhood: '東上野一丁目。仲御徒町駅・JR御徒町駅から徒歩4分、上野駅から7分',
    gf_detail: 'グルテンフリーは要確認。小麦のものが多いメニュー: 自家製麺、焼売、餃子、Khoshuur (揚げたミートパイ)、ラムの焼きうどん。串焼き、スペアリブの塩ゆで、サラダもグルテンフリーの説明はなく、醤油ベースの炒め物も。',
    vegan_detail: 'ヴィーガンは要確認。ラム、牛、乳製品のメニュー。野菜の料理 (豆腐サラダ、たたききゅうり、じゃがいもの細切り炒め、もやしと豆苗の炒め) もありますが、調味料やだしの説明はありません。',
    notes: '[モンゴル料理・仲御徒町、ゲル風の天井の下でラムと焼売] 御徒町と上野の間の、少しわかりにくい場所にある小さなモンゴル料理店で、ゲルのような内装、写真が青っぽく写る天井。料理はラム中心でシンプルな味付け: せいろで出てくるラム焼売、Khoshuur (ラムの揚げパイ)、クミンの効いたラムの串焼き、Khorkhog、ラムの胃袋の詰め物、自家製麺のラムのスープ、自家製ヨーグルト。ランチセットは約800〜1,100円 (2024年の価格)。夜は3,000〜4,000円ほどで、モンゴルビール、塩味のミルクティー、ウォッカ、ラクダの乳のお酒も。2025〜2026年の口コミはおおむね本格的で量が多いという声。2026年9月には日本向けにおとなしく、量が少ないという声も。以前はモンゴル焼売という店名で、オーナーが変わって改名 (Forbes JAPAN、2024年6月)。',
  });
}

save();
