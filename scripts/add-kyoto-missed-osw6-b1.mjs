// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 1.
//   + Hyssop (vegetable-led café-restaurant on the 4th floor of GOOD NATURE STATION, Shijo Kawaramachi; since 2019)
//   + 京都 鉄板焼 grow Kyoto Teppanyaki grow (14-seat wagyu-and-lobster teppanyaki counter at Kawaramachi; since 2017)
//   + LA VOITURE (tarte tatin café in Okazaki/Shogoin, from a family business begun in Gion in 1959)
//   + 酒処 てらやま Sake Dokoro Terayama (16-seat counter izakaya in an alley off Ayanokoji; Izakaya WEST Tabelog 100 2024–2026)
//   Taken on 2026-11-05 from `queue.mjs kyoto-missed next core 200` (Hyssop 26033518, grow 26029024: the first two with
//   id mod 6 = 4) and `next notable 200` (LA VOITURE 26001070, Terayama 26032384: the first two in the lane).
//   None is in data/kyoto.json: grep by name (ヒソップ/Hyssop, grow/鉄板焼, VOITURE/ヴォワチュール, てらやま/Terayama) and
//   address (稲荷町318, 真町88, 円頓美町47, 足袋屋町317) found none. Hyssop shares GOOD NATURE STATION with
//   kyr_chuka_soba_roku (neighborhood "河原町四条（GOOD NATURE STATION 2F）"); the two pins are about 8 m apart.
//   Chain check: grow — no other branch found (macaro-ni calls it "河原町店", but no other shop is named anywhere);
//   Hyssop is the one restaurant of its hotel complex; LA VOITURE and Terayama are single shops.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-1');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ Hyssop
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033518/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://goodnaturestation.com/restaurant/hyssop/';
  const H = day(['11:30', '16:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_hyssop', name: 'Hyssop (ヒソップ)', category: 'OMNI',
    lat: 35.002483, lng: 135.768845, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask, and tell the restaurant in advance: it asks guests with allergies to say so beforehand and warns that, depending on the allergy, it may not be able to adapt on the day (Tabelog). Lunch sets include bread or rice, fritters, miso sauces and wontons; dinner has pasta (official menu; 2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the cooking is built on vegetables, with a shojin (vegetarian) dashi in some soups, but most sets carry chicken, pork, fish or egg; one spring 2025 lunch let the diner pick the wonton filling (2025–26 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last order), closing 16:00; dinner 17:30–21:00 (last order), closing 22:00; closed days follow the building (official site). Tabelog gives the same two sittings (lunch last orders food 15:00, drinks 15:30; dinner food 21:00, drinks 21:30) and in its notes a continuous 11:30–22:00 day with lunch last order 14:30, brunch and desserts until 16:30 and no café service during lunch; closed irregularly. Bookings online (TableCheck link on the official site; Tabelog); party plans for 10 or more by phone (Tabelog). 54 seats at 2- and 4-person tables, sofa seats and an open terrace; a table charge applies on the terrace (Tabelog). Non-smoking; cards and PayPay; wheelchair accessible (Tabelog). The bill could not be split per person for a group of five (October 2026). 4th floor of GOOD NATURE STATION, 2 min walk from Kyoto Kawaramachi Stn (official site; Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo Kawaramachi, next to Takashimaya — 4F of GOOD NATURE STATION, 2 min from Kyoto Kawaramachi Stn',
    cuisine: 'Casual restaurant of healthy, vegetable-centred dishes in a plant-filled room with an open-atrium terrace (official site); vegetables mostly from producers in Kyoto, cooked simply (Tabelog) · seasonal lunch sets with a medicinal-food theme: Summer Balanced Meal ¥2,500 (soup, five small deli dishes, charcoal-grilled Tanba chicken, multigrain rice, tofu pudding; September 2026), Autumn Hyssop Lunch Set ¥3,400 (vegetable mousse and shojin jelly, saury and cauliflower bagna salad, minestrone, roast Kyoto pork with mustard sauce, mini douhua, coffee or tea; Tabelog, September 2026) · dinner à la carte: hors d’oeuvre ¥2,200, farm tomato and burrata caprese ¥2,400, long pasta with Kyoto duck ragù ¥2,400, charcoal-grilled venison with mushroom koji-miso sauce 100 g ¥4,000, roast Kameoka beef loin 120 g ¥5,400 (official site) · party plans with free-flow drinks ¥6,500 and ¥9,500 (Kameoka beef) (Tabelog); summer "Nature Beer Terrace 2026" free-flow course ¥5,500 (July 2026) · cocktails, wine, sake, elderflower soda ¥500',
    website: SITE, gmaps: gm('Hyssop グッドネイチャーステーション 京都'), menu_url: SITE,
    notes: "[Vegetable-led restaurant · Shijo Kawaramachi, a greenhouse room four floors up] The restaurant of GOOD NATURE STATION, next to Takashimaya: a room full of plants with an open-atrium terrace, cooking mostly Kyoto-grown vegetables simply. Lunch is a seasonal set with a medicinal-food theme — five small deli dishes, soup, a main of Tanba chicken or Kyoto pork, multigrain rice and a small dessert (¥2,500–3,400 in 2026); dinner turns to wine with caprese, duck-ragù pasta, venison and Kameoka beef. Terrace seats carry a table charge, and a September 2026 diner on the open terrace worried about the many birds overhead. Book online; 11:30–16:00 and 17:30–22:00.",
    chef_bio: { chef_name: null, roles: ['Hotel restaurant; no chef or manager is named in the sources'], origin: null,
      background: 'Opened 9 December 2019 (Tabelog) on the 4th floor of GOOD NATURE STATION, the building of GOOD NATURE HOTEL KYOTO (official site; 2026 reviews). A July 2026 reviewer describes it as part of the Keihan group. Lunch sets change with the seasons; a repeat diner who visited from 2022 to October 2026 described the winter set as a way to experience "Winter Nourishment" through food and the lunch sets as medicinal-herb sets, and a July 2022 visit found an afternoon-tea wellness set themed on "Yaku Shoku Dougen" (the synergy of medicine and food).',
      philosophy: 'Per Tabelog (the restaurant’s own text): ingredients, mainly vegetables, are sourced from local producers in Kyoto and cooked simply to bring out their character; the lunch course pairs "sauces that embody the essence of French cuisine" with Kyoto and Japanese flavours.',
      specialty: 'Seasonal vegetable lunch sets; Kameoka beef and venison at dinner.',
      anecdotes: [
        { text: '"The interior is filled with greenery, making it feel like a botanical garden, and the open terrace seating is delightful." — September 2026.', source: R + 'B507780129/' },
        { text: 'A September 2026 diner on the open terrace felt anxious about bird droppings, as many birds are around, and suggested a garden-view seat inside or a later booking; the same diner found the portions a little smaller than in July.', source: R + 'B538561479/' },
        { text: '"The drink ordering system via smartphone meant we didn’t have to call a waiter" — July 2026.', source: R + 'B538561479/' },
        { text: 'A group of five in October 2026 could not split the bill per person and had to settle up among themselves.', source: R + 'B536756013/' },
      ],
      japanese_sources_summary: '公式サイト (goodnaturestation.com): GOOD NATURE STATION 4F、野菜を中心としたヘルシーなお料理をお楽しみいただけるカジュアルレストラン、吹き抜けのテラス席、ランチ 11時30分〜15時00分 (L.O.) 16時00分close、ディナー 17時30分〜21時00分 (L.O) 22時00分close、定休日は施設に準ずる、ディナー: 前菜オードブル2,200円、農園トマトとブーラッタチーズカプレーゼ2,400円、ロングパスタ 京鴨ラグーソース2,400円、鹿肉 炭火焼 きのこ麹味噌ソース 100g 4,000円、亀岡牛ロース肉のロースト 120g 5,400円、予約は TableCheck。食べログ: カフェ・ダイニングバー、下京区稲荷町318-6 グッドネイチャーホテル 4F、54席、テラス席はテーブルチャージ、アレルギーは事前に連絡 (当日は対応できない場合あり)、ベジタリアンメニューあり、禁煙、カード・PayPay 可、車椅子可、2019年12月9日オープン、ランチセット3,400円、パーティープラン6,500円・9,500円。口コミ (2022〜2026年、英語): 季節のランチセット (夏2,500円、秋3,400円)、薬膳、Tanba の鶏、京都ポーク、精進出汁、Nature Beer Terrace 2026 (5,500円)、テラスの鳥、スマートフォンでのドリンク注文、個別会計不可。',
      confidence: 'medium', sources: [TB, SITE, R + 'B482268493/', R + 'B483572912/', R + 'B507485358/', R + 'B507780129/', R + 'B531928087/', R + 'B532729521/', R + 'B533626101/', R + 'B536287848/', R + 'B536756013/', R + 'B538561479/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online; drinks can be ordered by smartphone; cards accepted.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'The restaurant asks guests with allergies to tell it in advance and warns that, depending on the allergy, it may not be able to accommodate on the day of the visit.', source: TB, verified: TODAY }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区河原町通四条下ル2丁目稲荷町318-6 GOOD NATURE STATION 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002483, 135.768845); cross-checked: GSI 京都府京都市下京区稲荷町318番地 (lot) 34m; about 8 m from kyr_chuka_soba_roku (same building, 2F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, TB, R + 'B536287848/', R + 'B507780129/'],
    price_note: 'Dinner prices from the official site (November 2026); lunch prices from Tabelog and September 2026 reviews; menus change with the seasons.', last_checked: TODAY, items: [
      it('', '', 'Seasonal lunch set: Summer Balanced Meal (soup, five deli dishes, Tanba chicken, multigrain rice, dessert, drink)', '¥2,500', 'Lunch', 'ask', 'no', 'September 2026.', 'lunch_set_summer'),
      it('', '', 'Autumn Hyssop Lunch Set (appetizer, salad, soup, roast Kyoto pork, dessert, coffee or tea)', '¥3,400', 'Lunch', 'ask', 'no', 'Tabelog; September 2026.', 'lunch_set_autumn'),
      it('前菜オードブル', '', 'Hors d’oeuvre platter', '¥2,200', 'Dinner', 'ask', 'ask', '', 'hors_doeuvre'),
      it('農園トマトとブーラッタチーズカプレーゼ', '', 'Farm tomato and burrata caprese', '¥2,400', 'Dinner', 'ask', 'no', '', 'caprese'),
      it('ロングパスタ 京鴨ラグーソース', '', 'Long pasta with Kyoto duck ragù', '¥2,400', 'Dinner', 'no', 'no', '', 'duck_ragu_pasta'),
      it('“やまとある”鹿肉 炭火焼 きのこ麹味噌ソース 100g', '', 'Charcoal-grilled venison with mushroom koji-miso sauce, 100 g', '¥4,000', 'Dinner', 'ask', 'no', '', 'venison'),
      it('亀岡牛ロース肉のロースト 120g', '', 'Roast Kameoka beef loin, 120 g', '¥5,400', 'Dinner', 'ask', 'no', '', 'kameoka_beef'),
    ] }, {
    cuisine: '野菜を中心としたヘルシーなお料理のカジュアルレストラン。植物に囲まれた店内と吹き抜けのテラス (公式サイト)。野菜は主に京都の生産者から仕入れ、シンプルに調理 (食べログ)・薬膳の考えをもとにした季節のランチセット: 夏のセット2,500円 (スープ、デリ5種、Tanba の鶏の炭火焼、雑穀ご飯、豆腐プリン、2026年9月)、秋のランチセット3,400円 (野菜のムースと精進ゼリー、秋刀魚とカリフラワーのHyssop風バーニャサラダ、ミネストローネ、京都ポークのロティ マスタードソース、ミニ Hyssop Douhua、コーヒーか紅茶、食べログ・2026年9月)・ディナーのアラカルト: 前菜オードブル2,200円、農園トマトとブーラッタチーズカプレーゼ2,400円、ロングパスタ 京鴨ラグーソース2,400円、鹿肉の炭火焼 きのこ麹味噌ソース 100g 4,000円、亀岡牛ロース肉のロースト 120g 5,400円 (公式サイト)・飲み放題付きのパーティープラン6,500円・9,500円 (亀岡牛) (食べログ)、夏の「Nature Beer Terrace 2026」5,500円 (2026年7月)・カクテル、ワイン、日本酒、エルダーフラワーソーダ500円',
    neighborhood: '四条河原町、髙島屋の隣。GOOD NATURE STATION 4F、京都河原町駅から徒歩2分',
    gf_detail: '要確認。アレルギーは事前に伝えること。内容によっては当日対応できない場合があると店は案内している (食べログ)。ランチセットにはパンかご飯、フリット、味噌のソース、ワンタンがあり、ディナーにはパスタがある (公式メニュー、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、料理は野菜が中心で精進出汁のスープもあるが、多くのセットに鶏肉、豚肉、魚、卵が入る。2025年春のランチではワンタンの具を選べた (2025〜2026年の口コミ)。',
    notes: '[野菜中心のレストラン・四条河原町、4階の植物園のような店] 髙島屋の隣、GOOD NATURE STATION のレストラン。植物に囲まれた店内と吹き抜けのテラスで、主に京都の野菜をシンプルに調理する。ランチは薬膳の考えをもとにした季節のセットで、デリ5種、スープ、Tanba の鶏や京都ポークのメイン、雑穀ご飯、小さなデザート (2026年は2,500〜3,400円)。ディナーはワインに合わせてカプレーゼ、京鴨ラグーのパスタ、鹿肉、亀岡牛。テラス席はテーブルチャージがかかり、2026年9月の客はテラスの上の鳥の多さを気にしていた。予約はオンラインで。11時30分〜16時、17時30分〜22時。',
  });
}

// ================================================================ 京都 鉄板焼 grow
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26029024/'; const R = TB + 'dtlrvwlst/';
  const MAC = 'https://macaro-ni.jp/15751?page=2';
  const WD = day(['17:00', '22:00']); const WE = day(['12:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_teppanyaki_grow', name: '京都 鉄板焼 grow (Kyoto Teppanyaki grow)', category: 'OMNI',
    lat: 35.003526, lng: 135.770177, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The courses mix plain teppan-grilled wagyu and lobster with a wagyu katsu sandwich, baguette with the stew, a soy-sauce foam and teriyaki-sauced beef sushi; no gluten information is published (Tabelog course menu; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every course is built on wagyu beef and lobster, with beef broth in the chawanmushi (2026 reviews).',
    hours_raw: 'Monday–Friday 17:00–22:00; Saturday, Sunday and public holidays 12:00–14:00 and 17:00–22:00; closed irregularly (Tabelog). Two-hour seating limit; same-day cancellations are charged 100%; a 5% service charge is added (Tabelog). 14 seats: 10 at the counter and a private room for 4 (Tabelog). Non-smoking; cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay; children and strollers welcome (Tabelog). B1F of the ユーイットゥ池善ビル, 1 min from Exit 2 of Kyoto Kawaramachi Stn (Hankyu), 3 min from Gion-Shijo Stn Exit 3 — reachable without an umbrella in the rain (Tabelog). Instagram @kyoto.grow (October 2026 review).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-dori east of Kawaramachi, basement — 1 min from Kyoto Kawaramachi Stn Exit 2',
    cuisine: 'Teppanyaki counter for black wagyu and lobster; an undated macaro-ni article calls the beef A5 grade at reasonable prices (macaro-ni) · most popular dinner (Tabelog): 10 dishes with Ise lobster teppanyaki, lean black wagyu steak and 2-hour free-flow drinks ¥14,000 — foie gras roast beef, seared wagyu sushi, dish of the day (wagyu tomato stew with baguette), wagyu and taro chawanmushi, Ise lobster with Kujo-negi sauce and lobster-broth sauce, salad with anchovy-garlic sauce, wagyu katsu sandwich with shibazuke tartar, steak (upgrade strip loin +¥1,600, tenderloin +¥2,700, Chateaubriand +¥3,800) with whipped soy-sauce foam, garlic rice ball finished with broth, panna cotta (October–November 2026) · lunch wagyu lean steak course, 9 dishes ¥6,600, abalone or lobster extra (Tabelog) · Christmas course 24–25 December ¥15,000 (Tabelog)',
    website: null, gmaps: gm('京都 鉄板焼 grow 河原町'), menu_url: TB + 'dtlmenu/',
    notes: "[Teppanyaki · Shijo Kawaramachi, wagyu and lobster in a basement] A 10-seat counter (plus one private room) a minute from Kawaramachi Station, where black wagyu and Ise lobster are grilled on the teppan in front of you. The popular dinner is ten dishes with two hours of free-flow drinks for ¥14,000 — foie gras roast beef, seared wagyu sushi, lobster with Kujo-negi sauce, a wagyu katsu sandwich, a lean steak you can upgrade to Chateaubriand, and a garlic rice ball finished with broth. Popular for birthdays, with decorated dessert plates; one October 2026 diner found the room loud and the 5% service charge unwelcome. Two-hour limit; book ahead. Dinner daily, lunch at weekends.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Opened 1 June 2017 (Tabelog); run by a company (a corporate invoice registrant, Tabelog). An October 2026 reviewer credits the owner with sourcing high-quality wagyu at reasonable prices and noted many foreign guests that evening. A macaro-ni article (undated) describes the shop as serving top-grade A5 beef at reasonable prices.',
      philosophy: null, specialty: 'Black wagyu steak; Ise lobster teppanyaki; wagyu katsu sandwich.',
      anecdotes: [
        { text: '"There were many foreign guests, and the thoughtful gesture of a dessert plate decorated with anime characters made for a memorable experience." — October 2026.', source: R + 'B536994065/' },
        { text: '"According to the staff, they whip the soy sauce to create a foamy texture" — October 2026.', source: R + 'B538005678/' },
        { text: 'An October 2026 birthday diner found the room lively rather than subdued, the staff’s energy like an izakaya’s, the 5% service charge unexpected and the birthday plate the same as everyone else’s, while calling the food delicious.', source: R + 'B538274984/' },
        { text: 'A September 2026 diner preferred the lean cut to the filet and found the house red wine served too warm.', source: R + 'B536327474/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板焼・ステーキ、下京区真町88-3 ユーイットゥ池善ビル B1F、阪急京都河原町駅2番出口から徒歩1分、京阪祇園四条駅3番出口から徒歩3分、月〜金 17:00〜22:00、土日祝 12:00〜14:00・17:00〜22:00、不定休、2時間制、当日キャンセル100%、サービス料5%、14席 (カウンター10、個室4名)、禁煙、カード・PayPay 可、子供可、2017年6月1日オープン、ディナー (飲み放題2時間 + 伊勢海老 + 黒毛和牛赤身ステーキ、全10品) 14,000円、ランチ (和牛赤身ステーキコース 9品) 6,600円、クリスマスコース15,000円。macaro-ni: 京都鉄板焼 グロウ（grow）河原町店、最高級であるA5ランクのお肉をリーズナブルに。口コミ (2026年9〜11月、英語): フォアグラのローストビーフ、黒毛和牛の炙り寿司、和牛のトマト煮込み、茶碗蒸し、伊勢海老の鉄板焼 (九条ねぎのソース、海老の出汁のソース)、柴漬けタルタルの和牛カツサンド、泡の醤油、ガーリックライスのおにぎり、パンナコッタ、誕生日のプレート、サービス料への不満。',
      confidence: 'medium', sources: [TB, MAC, R + 'B536327474/', R + 'B536994065/', R + 'B537104746/', R + 'B537408546/', R + 'B537439958/', R + 'B538005678/', R + 'B538083858/', R + 'B538274984/', R + 'B538629195/', R + 'B538663339/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course online; many foreign guests (October 2026); cards accepted; 5% service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区真町88-3 ユーイットゥ池善ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with 2026 Christmas course; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003526, 135.770177); cross-checked: GSI 京都府京都市下京区真町88番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537408546/', R + 'B538629195/'],
    price_note: 'Course prices from Tabelog (November 2026), confirmed by October–November 2026 reviews; 5% service charge on top.', last_checked: TODAY, items: [
      it('', '', 'Dinner: 10 dishes with Ise lobster teppanyaki, lean black wagyu steak and 2-hour free-flow drinks', '¥14,000', 'Course', 'ask', 'no', 'Most popular course.', 'dinner_lobster_wagyu'),
      it('', '', 'Steak upgrade: strip loin / tenderloin / Chateaubriand', '+¥1,600 / +¥2,700 / +¥3,800', 'Course', 'ask', 'no', 'October 2026.', 'steak_upgrade'),
      it('', '', 'Lunch: wagyu lean steak course, 9 dishes', '¥6,600', 'Course', 'ask', 'no', 'Weekends and holidays.', 'lunch_wagyu'),
      it('', '', 'Christmas course with Chateaubriand and lobster (24–25 December)', '¥15,000', 'Course', 'ask', 'no', '', 'christmas_course'),
    ] }, {
    cuisine: '黒毛和牛と伊勢海老の鉄板焼のカウンター。A5ランクのお肉をリーズナブルにと紹介する記事もある (macaro-ni)・人気のディナー (食べログ): 伊勢海老の鉄板焼、黒毛和牛の赤身ステーキ、2時間飲み放題付きの全10品14,000円。フォアグラのローストビーフ、黒毛和牛の炙り寿司、本日の一品 (和牛のトマト煮込みとバゲット)、和牛と里芋の茶碗蒸し、九条ねぎのソースと海老の出汁のソースの伊勢海老、アンチョビとにんにくのソースのサラダ、柴漬けタルタルの和牛カツサンド、泡の醤油を添えたステーキ (サーロイン +1,600円、ヒレ +2,700円、シャトーブリアン +3,800円)、出汁をかけるガーリックライスのおにぎり、パンナコッタ (2026年10〜11月)・ランチの和牛赤身ステーキコース9品6,600円、アワビや伊勢海老は追加料金 (食べログ)・12月24・25日のクリスマスコース15,000円 (食べログ)',
    neighborhood: '河原町の東の四条通、地下。京都河原町駅2番出口から徒歩1分',
    gf_detail: '要確認。コースには鉄板で焼くだけの和牛や伊勢海老のほか、和牛カツサンド、煮込みに添えるバゲット、泡の醤油、照り焼きのたれの肉寿司がある。グルテンの情報は公開されていない (食べログのコース、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。どのコースも黒毛和牛と伊勢海老が中心で、茶碗蒸しも牛の出汁 (2026年の口コミ)。',
    notes: '[鉄板焼・四条河原町、地下の和牛と伊勢海老] 京都河原町駅から1分、カウンター10席と個室1室の鉄板焼。目の前で黒毛和牛と伊勢海老を焼く。人気のディナーは2時間飲み放題付きの全10品14,000円で、フォアグラのローストビーフ、黒毛和牛の炙り寿司、九条ねぎのソースの伊勢海老、和牛カツサンド、シャトーブリアンにも変えられる赤身ステーキ、出汁をかけるガーリックライスのおにぎり。誕生日の利用が多く、デザートのプレートも飾ってくれる。一方、2026年10月の客は店内のにぎやかさとサービス料5%に不満を書いている。2時間制、予約がおすすめ。ディナーは毎日、ランチは土日祝。',
  });
}

// ================================================================ LA VOITURE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001070/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://voiture.buyshop.jp/'; const ABOUT = SITE + 'about';
  const LEAF = 'https://leafkyoto.net/en/store/210219_la_voiture';
  const FH = 'https://www.fashion-headline.com/article/13499';
  const H = day(['11:30', '18:00']);
  put({
    id: 'kyoto_la_voiture', name: 'LA VOITURE', category: 'MOM_AND_POP',
    lat: 35.016608, lng: 135.780195, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the tarte tatin is baked on tart pastry, and the shop’s own allergen label lists wheat, milk, egg and apple, with walnuts handled on the same line (official online shop).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the apples are caramelised with butter and sugar (Fashion Headline, 2016), the allergen label lists milk and egg (official online shop), and the tart comes with yogurt (2026 reviews). Drinks only.',
    hours_raw: 'Tuesday–Sunday 11:30–18:00 (last order 17:00); closed Monday; other closures irregular — check the official website (Tabelog). No reservations (Tabelog). Can be busy: a 10-minute wait (October 2026) and a 5-minute wait on a holiday afternoon (September 2026); quiet right after opening on a weekday (October 2026). Slices to take away at the shop (2026 reviews); frozen tarts by mail through the official online shop. 18 seats, tables only; non-smoking; cards and IC/e-money, no QR payments; one parking space (No. 2) (Tabelog; September 2026). A step at the door and a narrow doorway make wheelchair access difficult (October 2026). 15 min walk from Jingu-Marutamachi Stn, 5 min from the Kumano-jinja-mae city bus stop: head east on Marutamachi-dori and turn right just before the city martial arts centre (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shogoin, south of Marutamachi near Heian Shrine — 15 min walk from Jingu-Marutamachi Stn',
    cuisine: 'Tarte tatin shop and café in Okazaki (official site): each tart uses about 20 apples caramelised with butter and sugar for over four hours (Fashion Headline, 2016; Leaf Kyoto, 2021) · choose among two to four apple varieties by season — Fuji all year, plus e.g. サンつがる, Shinano Gold, Iwai, Olin (2026 reviews) — served warm with unsweetened yogurt · tarte tatin (Fuji) ¥950, takeaway slice ¥1,000 · walnut caramel tart ¥730 · Darjeeling with a cake ¥730, iced café au lait ¥800, apple-caramel flavoured tea (September–October 2026) · by mail, frozen: 2 slices ¥2,250, 15 cm whole tart ¥7,150 (official online shop, sold out at the time of reading)',
    website: SITE, gmaps: gm('LA VOITURE 京都 タルトタタン'), menu_url: null,
    notes: "[Tarte tatin café · Okazaki, half a century of tarte tatin] A small, old-fashioned café near Heian Shrine devoted to tarte tatin. Its story starts with the café 紅屋 that Yuri Matsunaga and husband 辰夫 opened in Gion in 1959; it became an art gallery, moved here in 1971 as a French restaurant beside the gallery, and turned into this café in 1987. Yuri kept baking the tarte tatin — honoured in France by the Confrérie des Lichonneux de tarte tatin in 2006 — until dying in 2014, and a grandchild bakes it now. About 20 apples go into each tart; pick from the day's varieties (Fuji ¥950 in 2026) and eat it warm with yogurt. No bookings; Tuesday–Sunday 11:30–18:00.",
    chef_bio: { chef_name: 'Maya Wakabayashi', roles: ['Granddaughter of the founder, named in a January 2016 article as carrying on the recipe; the official site says the recipe is now baked by the founder’s grandchild'], origin: null,
      background: 'Per the official site: the first owners, 松永ユリ (Yuri Matsunaga in Leaf Kyoto and Fashion Headline) and 辰夫, opened the café 紅屋, forerunner of LA VOITURE, in Gion in 1959; out of a love of art it became the gallery 紅 in 1964; in 1971 the business moved to Okazaki, where the French restaurant LA VOITURE opened alongside the gallery. Yuri, captivated by the tarte tatin served as a French dessert, kept baking it and was admitted in France to the Confrérie des Lichonneux de tarte tatin in 2006. The official site gives Yuri’s death in 2014 at 96; a January 2016 Fashion Headline article says Yuri died "two years ago at the age of 92", was born in the Taisho era, always sat in a corner of the shop, and created the recipe after eating tarte tatin on a trip to France. Leaf Kyoto (March 2021) adds that the daughter, Tomomi, helped open the 1971 restaurant and that the shop became a tarte tatin café in 1987. The maker on the online shop is the company 株式会社 紅 at the shop address. Tabelog Sweets WEST "Tabelog 100" 2020, 2022, 2023, 2026.',
      philosophy: 'Per the official site: Yuri baked the tarte tatin "with an artist’s feeling", and that feeling and the recipe are being carried on by the grandchild.',
      specialty: 'Tarte tatin by apple variety; walnut caramel tart.',
      anecdotes: [
        { text: 'A September 2026 visitor learned that the classic Fuji tarte tatin is offered all year, alongside several seasonal varieties made with other apples.', source: R + 'B536099334/' },
        { text: '"The cake was served slightly warm with yogurt on the side." — September 2026.', source: R + 'B536040878/' },
        { text: 'A November 2026 reviewer remembers the shop having been in Gion before and says it was much less crowded in the reviewer’s student days.', source: R + 'B538448441/' },
        { text: 'An October 2026 reviewer found one young staff member a little aloof; another that month said the staff were very kind and explained a lot.', source: R + 'B538192773/' },
        { text: 'An October 2026 first-timer found ordering a little complicated, with three apple varieties and five teas to choose from.', source: R + 'B536909044/' },
      ],
      japanese_sources_summary: '公式サイト (voiture.buyshop.jp): 京都・岡崎のタルトタタンの店、初代店主 松永ユリと辰夫が1959年に祇園で喫茶「紅屋」を始め、1964年に画廊「紅」へ転業、1971年に岡崎へ移り画廊「紅」と共にフランス料理店「LA VOITURE」が始まる、ユリは「タルトタタン」に魅了され芸術への思いを込めて焼き続け、2006年フランスで Confrerie des Lichonneux de tarte tatin の一員として認められる、2014年96歳で亡くなる、現在はレシピと思いが孫へと焼き継がれている。オンラインショップ: タルトタタンカット2個入 (サンつがる・早生ふじ) 2,250円、15cmホール7,150円、冷凍で発送、アレルギー物質: 乳、小麦、卵、りんご、製造ラインでくるみを含む製品を製造、製造者 株式会社 紅 (左京区聖護院円頓美町47-5)。食べログ: ケーキ・カフェ、火〜日 11:30〜18:00 (L.O. 17:00)、月曜休み、予約不可、18席、禁煙、カード・電子マネー可、QR 不可、駐車場1台、スイーツ WEST 百名店 2020・2022・2023・2026。英語の記事: Leaf Kyoto (2021年3月) 1971年に娘の Tomomi と開店、1987年に今のカフェに、Fashion Headline (2016年1月) 92歳で亡くなった、孫の Maya Wakabayashi が継ぐ。口コミ (2026年8〜11月、英語): ふじ950円、テイクアウト1,000円、クルミのタルト730円、ダージリン730円、アイスカフェオレ800円、りんごは3〜4種から選ぶ、ヨーグルト添え。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, LEAF, FH, R + 'B535508641/', R + 'B536040878/', R + 'B536099334/', R + 'B536109435/', R + 'B536143528/', R + 'B536405585/', R + 'B536909044/', R + 'B537215478/', R + 'B538192773/', R + 'B538383198/', R + 'B538448441/', R + 'B538526560/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table; staff explain the apple varieties; cards accepted; no bookings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院円頓美町47-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026; Sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.016608, 135.780195); cross-checked: GSI 京都府京都市左京区聖護院円頓美町47番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536109435/', R + 'B536099334/', R + 'B535508641/', SITE],
    price_note: 'Café prices from September 2026 reviews; mail-order prices from the official online shop (November 2026).', last_checked: TODAY, items: [
      it('', '', 'Tarte tatin (Fuji), with yogurt', '¥950', 'Cakes', 'no', 'no', 'September 2026; other apple varieties by season.', 'tarte_tatin'),
      it('', '', 'Tarte tatin, takeaway slice', '¥1,000', 'Takeaway', 'no', 'no', 'September 2026.', 'tarte_tatin_takeaway'),
      it('', '', 'Walnut caramel tart', '¥730', 'Cakes', 'no', 'no', 'September 2026.', 'walnut_tart'),
      it('', '', 'Darjeeling tea (with a cake)', '¥730', 'Drinks', '', '', 'September 2026.', 'darjeeling'),
      it('', '', 'Iced café au lait', '¥800', 'Drinks', '', '', 'September 2026.', 'iced_cafe_au_lait'),
      it('タルトタタンカット-2個入(サンつがる1個・早生ふじ1個)-', '', 'Tarte tatin, 2 slices, frozen by mail', '¥2,250', 'Mail order', 'no', 'no', 'Official online shop.', 'mail_2_slices'),
      it('2026年「早生ふじ」タルトタタン 15cmホール', '', 'Whole tarte tatin 15 cm, frozen by mail', '¥7,150', 'Mail order', 'no', 'no', 'Official online shop.', 'mail_whole'),
    ] }, {
    cuisine: '岡崎のタルトタタンの店とカフェ (公式サイト)。1台にりんご約20個を使い、バターと砂糖で4時間以上キャラメリゼ (Fashion Headline、2016年・Leaf Kyoto、2021年)・季節で2〜4種のりんごから選ぶ。ふじは通年、ほかにサンつがる、Shinano Gold、Iwai、Olin など (2026年の口コミ)。温かいタルトに甘くないヨーグルトを添えて・タルトタタン (ふじ) 950円、テイクアウト1,000円・クルミのキャラメルタルト730円・ケーキとセットのダージリン730円、アイスカフェオレ800円、りんごとキャラメルのフレーバーティー (2026年9〜10月)・冷凍の通販: カット2個入2,250円、15cmホール7,150円 (公式オンラインショップ、閲覧時は売り切れ)',
    neighborhood: '平安神宮に近い丸太町の南、聖護院。神宮丸太町駅から徒歩15分',
    gf_detail: 'グルテンフリーではない。タルトタタンはタルト生地に焼き、店のアレルギー表示は乳、小麦、卵、りんご。同じ製造ラインでくるみも扱う (公式オンラインショップ)。',
    vegan_detail: 'ヴィーガン不可。りんごはバターと砂糖でキャラメリゼし (Fashion Headline、2016年)、アレルギー表示に乳と卵があり (公式オンラインショップ)、ヨーグルトを添える (2026年の口コミ)。飲み物のみ。',
    notes: '[タルトタタンのカフェ・岡崎、半世紀続くタルトタタン] 平安神宮の近く、タルトタタンの小さなクラシックなカフェ。始まりは1959年に松永ユリと辰夫が祇園で開いた喫茶「紅屋」。画廊「紅」を経て1971年にここへ移り、画廊とともにフランス料理店に、1987年に今のカフェになった。ユリは2006年にフランスの Confrerie des Lichonneux de tarte tatin に認められ、2014年に亡くなるまで焼き続け、今は孫が焼き継ぐ。1台にりんご約20個。その日のりんごから選び (2026年はふじ950円)、温かいうちにヨーグルトと。予約不可。火〜日 11時30分〜18時。',
  });
}

// ================================================================ 酒処 てらやま
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26032384/'; const R = TB + 'dtlrvwlst/';
  const RETTY = 'https://retty.me/restaurant/100001483051/';
  const H = day(['13:00', '21:00']);
  put({
    id: 'kyoto_sakedokoro_terayama', name: '酒処 てらやま (Sake Dokoro Terayama)', category: 'OMNI',
    lat: 35.002316, lng: 135.766047, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal fish, oden, kabura-mushi with a thickened sauce, curry, fried rice, tempura and a beef katsu sandwich; soy-based seasonings throughout and no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the menu is fish, oden in broth, chicken wings and beef; ginkgo nuts and pickles are the few plant dishes (2025–26 reviews).',
    hours_raw: 'Monday, Wednesday, Thursday, Friday and Sunday 13:00–21:00; closed Tuesday and Saturday (Tabelog). The 13:00 opening began in September 2026; last call 21:00 (September 2026). Reservations by phone: no bookings by proxy; during business hours call only about availability and same-day bookings (Tabelog); the shop sometimes limits bookings even when seats are free and the line can be hard to get through (October 2026). Menu without prices (market prices); bills from about ¥6,000 a head for two to about ¥11,600 for one (2026 reviews). 16 seats: 8 at the counter and two tables for 4–5 upstairs; children are seated upstairs only, with no children’s menu (Tabelog). Non-smoking; cards accepted, no e-money or QR (Tabelog). Down a narrow alley entered from the north; 6–8 min walk from Kyoto Kawaramachi Stn (October 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ayanokoji, west of Kawaramachi, down an alley — 6–8 min walk from Kyoto Kawaramachi Stn',
    cuisine: 'Counter izakaya-kappo of seasonal fish and sake (2025–26 reviews) · sashimi (seared hamo, sea urchin, squid, tuna), shime saba, first-of-season saury, seared sawara, hamo nanban with okra, hamo with matsutake, sea urchin with eggplant, rock oysters with sea grapes · maguro namero, kabura-mushi with wasabi, dashimaki, oden (from October 2026), chicken wings (single wings can be ordered), toro-taku, kizushi, fried matsutake, ginkgo nuts · to finish: beef curry rice with garlic rice, fried rice, the "famous" beef katsu sandwich, crusts cut off · sake chosen for you, hot sake, Hakushu and Yamazaki highballs, homemade lemon sour (2024–26 reviews)',
    website: null, gmaps: gm('酒処 てらやま 京都'), menu_url: null,
    notes: "[Izakaya · Shijo Kawaramachi, seasonal fish down an alley] A 16-seat counter izakaya hidden down a narrow alley off Ayanokoji, behind a sign one diner found hard to read. The board has no prices: seasonal fish — hamo, sea urchin, sawara, shime saba — dashimaki, oden in the cold months and juicy chicken wings, with sake picked for you, then the shop's beef curry, fried rice or katsu sandwich to finish. Since September 2026 it opens at 13:00 for daytime drinking. A September 2026 diner was surprised by the prices; others call it fair for the quality. Book by phone; closed Tuesday and Saturday.",
    chef_bio: { chef_name: null, roles: ['Chef at the counter (unnamed in the sources)'], origin: null,
      background: 'A September 2025 Tabelog reviewer calls it a counter kappo "run by the owner of Shokudo Ogawa", and a September 2026 reviewer was told it is easier to book than the popular Ogawa; Retty reviews (one posted March 2026) say instead that the shop’s cook came from 食堂おがわ. An October 2026 regular heard the shop will mark its 10th anniversary in December 2026. A March 2025 reviewer found the interior renovated. Tabelog Izakaya WEST "Tabelog 100" 2024, 2025, 2026.',
      philosophy: null, specialty: 'Seasonal fish; beef curry; katsu sandwich; chicken wings.',
      anecdotes: [
        { text: '"The option to order just one is a thoughtful touch for solo diners" (of the chicken wings) — October 2026.', source: R + 'B538506548/' },
        { text: '"Starting this month, they open at 1 PM, which is great news for daytime drinking." — September 2026.', source: R + 'B534938072/' },
        { text: 'A September 2026 diner was surprised by the high prices on the unpriced menu, especially as several planned dishes were unavailable, while praising the sashimi.', source: R + 'B535170627/' },
        { text: 'A repeat diner ranks the curry among the top three in Kyoto: rice fragrant with garlic, tender beef and a blend of spices (September 2025).', source: R + 'B424666335/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理、下京区綾小路通足袋屋町317-11、月水木金日 13:00〜21:00、火曜・土曜休み、予約可 (代理予約不可、営業中は空席と当日予約の問い合わせのみ)、16席 (カウンター8、2階に4〜5名のテーブル2)、子供は2階のみ、禁煙、カード可、電子マネー・QR 不可、居酒屋 WEST 百名店 2024・2025・2026。Retty: 口コミによれば食堂おがわ出身の方の店。口コミ (2024〜2026年、英語): 値段のないお品書き、鱧、雲丹と茄子、しめ鯖、秋刀魚、まぐろのなめろう、かぶら蒸し、手羽先 (1本から)、だし巻き、おでん、カレー、炒飯、カツサンド、日本酒のおまかせ、2026年9月から13時開店、2026年12月に10周年、路地の奥。',
      confidence: 'medium', sources: [TB, RETTY, R + 'B424666335/', R + 'B502302352/', R + 'B515333870/', R + 'B532816515/', R + 'B532997506/', R + 'B534938072/', R + 'B535170627/', R + 'B535412355/', R + 'B536603867/', R + 'B538506548/'] },
    cultural_comfort: { level: 'japanese', note: 'Book by phone in Japanese (no proxy bookings); the menu has no prices; ask what is in season.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路通足袋屋町317-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Izakaya WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.002316, 135.766047); cross-checked: GSI 京都府京都市下京区足袋屋町317番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532997506/', R + 'B536603867/', R + 'B538506548/'],
    price_note: 'The menu shows no prices; reviewers paid ¥12,000 for two (September 2026) and ¥11,600 for one (August 2026).', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi (seared hamo, sea urchin, squid, tuna)', '', 'Fish', 'ask', 'no', 'August 2026.', 'sashimi'),
      it('', '', 'Maguro namero (tuna minced with vegetables and sesame)', '', 'Small dishes', 'ask', 'no', 'October 2026.', 'maguro_namero'),
      it('', '', 'Chicken wings (order by the piece)', '', 'Small dishes', 'ask', 'no', 'October 2026.', 'tebasaki'),
      it('', '', 'Kabura-mushi (turnip and egg white, thickened sauce, wasabi)', '', 'Small dishes', 'ask', 'no', 'October 2026.', 'kaburamushi'),
      it('', '', 'Beef curry rice with garlic rice', '', 'Rice', 'ask', 'no', '2025–26.', 'curry'),
      it('', '', 'Beef katsu sandwich', '', 'Rice', 'no', 'no', 'July and September 2026.', 'katsu_sando'),
    ] }, {
    cuisine: '季節の魚と日本酒のカウンターの居酒屋・割烹 (2025〜2026年の口コミ)・刺身 (炙り鱧、雲丹、いか、まぐろ)、しめ鯖、初物の秋刀魚、炙り鰆、鱧の南蛮とオクラ、鱧と松茸、雲丹と茄子、岩牡蠣と海ぶどう・まぐろのなめろう、わさびのかぶら蒸し、だし巻き、おでん (2026年10月から)、手羽先 (1本から注文可)、トロたく、きずし、松茸の揚げ物、銀杏・締めは牛肉のカレーライス (ガーリックライス)、炒飯、名物の牛カツサンド (耳を落として)・日本酒のおまかせ、燗酒、Hakushu や Yamazaki のハイボール、自家製レモンサワー (2024〜2026年の口コミ)',
    neighborhood: '河原町の西の綾小路、路地の奥。京都河原町駅から徒歩6〜8分',
    gf_detail: '要確認。季節の魚、おでん、あんかけのかぶら蒸し、カレー、炒飯、天ぷら、牛カツサンドがあり、醤油の味付けが多い。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、出汁のおでん、手羽先、牛肉が中心で、植物性の料理は銀杏や漬物くらい (2025〜2026年の口コミ)。',
    notes: '[居酒屋・四条河原町、路地の奥の季節の魚] 綾小路の細い路地の奥にある16席のカウンターの居酒屋。看板は読みにくいと書く客もいる。お品書きに値段はなく、鱧、雲丹、鰆、しめ鯖などの季節の魚、だし巻き、寒い時期のおでん、ジューシーな手羽先を、おまかせの日本酒と。締めは牛肉のカレー、炒飯、カツサンド。2026年9月から13時開店で昼飲みもできる。2026年9月の客は値段の高さに驚き、ほかの客は質を考えれば妥当と書く。予約は電話で。火曜・土曜休み。',
  });
}

save();
