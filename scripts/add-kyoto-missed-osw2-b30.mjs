// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 30.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   - HARIO CAFE 京都店 (26041611): chain — the glassware maker HARIO’s café brand, described as ten shops worldwide (four in Japan
//     by 2022; Tokyo, Karuizawa, Nagoya, Kyoto); sub-brand of a large parent.
//   + 京都 鳥八 Kyoto Torihachi (binchotan yakitori counter off Shijo-Muromachi; since 2022)
//   + カプリ食堂 Capri Shokudo (lemon-cuisine diner at Karasuma-Gojo; since 2016) — two shops: this one and カプリ食堂 LIMONE VERDE
//     at Imadegawa (not in data).
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + LAMARCK ラマルク (patisserie near Imadegawa; since 2019)
//   + 肉家かぐら Nikuya Kagura (wagyu yakiniku and meat kaiseki of a meat wholesaler at Muromachi-Oike; since 2012, formerly 肉家 桜真)
//   None of the four drafted is in data/kyoto.json: grep by id, name (鳥八/Torihachi, カプリ/Capri, ラマルク/LAMARCK, かぐら/Kagura —
//   only 麺屋 神楽, unrelated) and address (月鉾町59-3, 大堀町479, 弁財天町333-1, 御池之町309) found none.
//   Service charges: 肉家かぐら 「前菜3300円(単品注文のみ)」 (a ¥3,300 starter for à la carte orders); none listed for the others.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-30');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26041611', 'chain: HARIO CAFE, the café brand of the glassware maker HARIO, about ten shops worldwide (sub-brand of a large parent)');

// ================================================================ 京都 鳥八
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038401/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '23:00']); const S = day(['17:00', '22:00']);
  put({
    id: 'kyoto_torihachi_shijo', name: '京都 鳥八 (Kyoto Torihachi)', category: 'OMNI',
    lat: 35.0035981678697, lng: 135.75753102034986, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori seasoned with salt, tare or soy by cut, with fried dishes and a chicken curry to finish; no gluten information is published (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakitori counter (Tabelog).',
    hours_raw: 'Tuesday–Saturday 17:00–23:00; Sunday and holidays 17:00–22:00; closed Monday (Tabelog). An early-evening course is offered roughly 17:00–19:00 (February–April 2026). No service charge listed (Tabelog). 15 seats at a U-shaped counter; private hire up to 20; non-smoking, though grill smoke can cling to clothes (December 2025; March 2026). Cards (VISA, Master, JCB, AMEX, Diners) and transit IC (Tabelog). Down a narrow alley just south of Shijo-Muromachi, 214 m from Shijo Stn (Tabelog; November 2025). Opened 17 November 2022 (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Muromachi — 214 m from Shijo Stn',
    cuisine: 'Yakitori grilled over Kishu binchotan from Japanese brand chickens — 阿波尾鶏 (Awa-odori), Tanba jidori, Date-dori — with selected sake and wine (Tabelog) · omakase courses of about 13–14 dishes, including an all-you-can-drink course ¥7,000 launched for the third anniversary (October 2025–October 2026) · à la carte skewers: thigh, gizzard, heart, breast, neck, wings, ginkgo, zucchini, quail eggs, thick fried tofu · chicken curry or egg over rice to finish (2025–2026 reviews)',
    website: null, gmaps: gm('京都 鳥八 四条室町'), menu_url: TB,
    notes: "[Yakitori · Shijo-Muromachi, binchotan skewers down an alley] A fifteen-seat U-shaped counter tucked down a narrow lane south of Shijo-Muromachi, grilling brand chickens over Kishu binchotan. Go for the omakase — about 13 skewers and small dishes ending in a chicken curry — or the ¥7,000 course with all-you-can-drink. Early-evening courses are a good deal. Reviews differ on seasoning (some find it mild), and grill smoke lingers. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Head chef and grill cook not named'], origin: null,
      background: 'Per Tabelog’s official introduction: yakitori grilled carefully over Kishu binchotan from local and premium chickens including 阿波尾鶏, Tanba jidori and Date-dori. A November 2025 reviewer counted four staff — a young grill cook, a seasoned server and two others. Opened 17 November 2022 (Tabelog).',
      philosophy: null,
      specialty: 'Binchotan yakitori omakase.',
      anecdotes: [
        { text: 'An August 2025 diner watched a young cook work the grill under the eye of the head chef.', source: R + 'B512582222/' },
        { text: 'An October 2025 visitor noted the all-you-can-drink ¥7,000 course launched for the third anniversary.', source: R + 'B516400503/' },
        { text: 'An October 2026 first-timer finished the ¥7,000 course with a chicken curry.', source: R + 'B538376538/' },
      ],
      japanese_sources_summary: '食べログ: 京都 鳥八、焼き鳥・居酒屋、下京区月鉾町59-3、四条駅から214m、火〜土17:00〜23:00、日祝17:00〜22:00、月曜定休、カウンター15席、20名まで貸切可、禁煙、カード・交通系IC 可、2022年11月17日オープン。公式紹介: 紀州備長炭で丁寧に焼く焼き鳥、阿波尾鶏・丹波地鶏・伊達鶏などの地鶏や銘柄鶏、厳選の日本酒とワイン。口コミ (2025年7月〜2026年10月、英語): 四条室町の南の細い路地、U字のカウンター、おまかせ13〜14品、3周年の飲み放題付き7,000円のコース、17時〜19時の早い時間のコース、締めのチキンカレー、味が薄いという声や煙が気になるという声も。',
      confidence: 'medium', sources: [TB, R + 'B462063484/', R + 'B512582222/', R + 'B515700367/', R + 'B516400503/', R + 'B517131654/', R + 'B518674611/', R + 'B519758750/', R + 'B523100093/', R + 'B523642162/', R + 'B524298525/', R + 'B526912300/', R + 'B538376538/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses make ordering easy; counter seating only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区月鉾町59-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003598, 135.757531); cross-checked: GSI 京都府京都市下京区月鉾町59番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516400503/', R + 'B538376538/', R + 'B519758750/'],
    price_note: 'From 2025–2026 reviews; no menu published.', last_checked: TODAY, items: [
      it('', '', 'Omakase course with all-you-can-drink', '¥7,000', 'Course', 'ask', 'no', '', 'course_7000'),
      it('', '', 'Binchotan yakitori, à la carte', '', 'Skewers', 'ask', 'no', '', 'yakitori'),
      it('', '', 'Chicken curry to finish', '', 'Finish', 'no', 'no', '', 'chicken_curry'),
    ] }, {
    cuisine: '紀州備長炭で焼く阿波尾鶏、丹波地鶏、伊達鶏などの銘柄鶏の焼き鳥、厳選の日本酒とワイン (食べログ)・13〜14品ほどのおまかせコース、3周年に始まった飲み放題付き7,000円のコースも (2025年10月〜2026年10月)・単品の串: もも、砂肝、ハツ、むね、せせり、手羽、銀杏、ズッキーニ、うずら、厚揚げ・締めはチキンカレーや卵かけご飯 (2025〜2026年の口コミ)',
    neighborhood: '四条室町。四条駅から214m',
    gf_detail: '要確認。部位により塩、たれ、醤油で味付けする焼き鳥、揚げ物、締めのチキンカレー。グルテンの情報は公開されていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼き鳥のカウンター (食べログ)。',
    notes: '[焼き鳥・四条室町、路地の備長炭の串] 四条室町の南、細い路地の奥のU字カウンター15席。銘柄鶏を紀州備長炭で焼く。おすすめはおまかせで、串と小鉢13品ほど、締めはチキンカレー。飲み放題付き7,000円のコースも。早い時間のコースはお得。味付けは薄めという声もあり、煙は残りやすい。月曜休み。',
  });
}

// ================================================================ カプリ食堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26028357/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://capri.red/'; const GOJO = SITE + 'gojo/'; const MENU = SITE + 'menu/';
  const H = day(['11:30', '15:00'], ['17:30', '23:00']);
  put({
    id: 'kyoto_capri_shokudo_gojo', name: 'カプリ食堂 (Capri Shokudo)', category: 'MOM_AND_POP',
    lat: 34.997726037068816, lng: 135.75989877912707, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lemon-seasoned kara-age, fried oysters, chicken cutlet, carbonara and pizza; no gluten information is published (official site; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Meat- and seafood-led set meals; nothing vegan is marked (reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:00); dinner 17:30–23:00 (last order 22:00); closed irregularly (official site); Tabelog lists it as open year-round. Food can be slow at busy times, as it is often run by one person (October–December 2025). No service charge listed (Tabelog). 20 seats on the 1st floor (6 at the counter) plus a 2nd floor for parties of up to 15 seated or 20 standing; non-smoking; cards (JCB, VISA, Master); average spend about ¥2,000 (official site). Takeout and Uber Eats (official site). At the north-east corner of Karasuma-Manjuji, one block north of Gojo-Karasuma, 3 min from Gojo Stn (official site). Opened 17 December 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Gojo — 3 min from Gojo Stn',
    cuisine: 'Lemon-cuisine diner using domestic 瀬戸田 lemons in every dish (Tabelog; official site) · lunch set meals about ¥980 with soup, e.g. salt-lemon kara-age, fried oysters, chicken cutlet with tomato-lemon tartare, avocado-lemon hamburg steak, lemon carbonara with salad and appetizers, "Italian rice bowl" of avocado and egg, lemon steak (2024–2026 reviews) · dinner of lemon steak, lemon carbonara, ajillo, margherita, lemon ice macedonia; Christmas courses ¥4,980 and ¥5,980 (official site) · signature lemon mojito (Tabelog)',
    website: SITE, gmaps: gm('カプリ食堂 烏丸五条'), menu_url: MENU,
    notes: "[Italian · Karasuma-Gojo, everything with lemon] A small, cheerful corner diner one block north of Gojo-Karasuma where lemons from Setoda go into every dish. Lunch is a bargain plate of salt-lemon kara-age, fried oysters or lemon carbonara with soup for about ¥1,000; evenings bring lemon steak, ajillo and a showy lemon mojito. Often run single-handed, so lunch can be slow when it fills. Upstairs room for parties. Closed irregularly.",
    chef_bio: { chef_name: '金森 陽平', roles: ['Representative of カプリ食堂 (official site’s commercial-transactions notice)'], origin: null,
      background: 'Per the official site: a Kyoto lemon-cuisine restaurant with two shops — this Karasuma-Gojo original and カプリ食堂 LIMONE VERDE at Imadegawa-Karasuma; the commercial-transactions notice names 金森 陽平 as representative. Tabelog says it uses domestic 瀬戸田 lemons. Reviewers in October and December 2025 describe the Gojo shop as often run by one person. Opened 17 December 2016 (Tabelog).',
      philosophy: null,
      specialty: 'Salt-lemon kara-age; lemon carbonara; lemon mojito.',
      anecdotes: [
        { text: 'A July 2025 lunch guest heard from the owner about a house seasoning made with salt and lemon.', source: R + 'B510581825/' },
        { text: 'A December 2025 couple paid ¥980 each for fried-oyster and lemon kara-age set meals with soup.', source: R + 'B518951380/' },
        { text: 'A January 2026 diner added prosciutto to the signature salt-lemon kara-age set.', source: R + 'B520232422/' },
      ],
      japanese_sources_summary: '公式サイト (capri.red): カプリ食堂、京都のレモン料理専門店、烏丸五条店 (下京区大堀町479 1階、五条駅から徒歩3分、烏丸万寿寺の北東角) と今出川御所店 カプリ食堂 LIMONE VERDE の2店、11:30〜15:00 (L.O. 14:00)、17:30〜23:00 (L.O. 22:00)、不定休、1階テーブル8席とカウンター6席、2階は貸切 (着席15名・立食20名)、全席禁煙、カード可 (JCB・VISA・Master)、平均予算2,000円、テイクアウト・Uber Eats、クリスマスコース5,980円・4,980円 (レモンステーキ、レモンカルボナーラ、アヒージョ、マルゲリータ、レモンアイスマチェドニア)、特定商取引法の表記: 代表者 金森陽平。食べログ: イタリアン、国産の瀬戸田レモンを使ったレモン料理専門店、名物のレモンモヒート、20席、2016年12月17日オープン。口コミ (2024〜2026年、英語): ランチの定食980円ほど、塩レモン唐揚げ、カキフライ、トマトレモンタルタルのチキンカツ、アボカドレモンハンバーグ、レモンカルボナーラ、ワンオペで提供が遅いことも。',
      confidence: 'medium', sources: [TB, SITE, GOJO, MENU, R + 'B391534233/', R + 'B492368967/', R + 'B495884851/', R + 'B495925765/', R + 'B502070961/', R + 'B502369540/', R + 'B509062303/', R + 'B510581825/', R + 'B514467569/', R + 'B518951380/', R + 'B520232422/', R + 'B521750551/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual diner; bookings online.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区大堀町479 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (menu news July–August 2026) and Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (34.997726, 135.759899); cross-checked: GSI 京都府京都市下京区大堀町479番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [MENU, R + 'B518951380/'],
    price_note: 'Lunch price from a December 2025 review; courses from the official site.', last_checked: TODAY, items: [
      it('', '', 'Salt-lemon kara-age set meal with soup', '¥980', 'Lunch', 'no', 'no', 'December 2025.', 'shio_lemon_karaage'),
      it('', '', 'Fried oyster set meal with soup', '¥980', 'Lunch', 'no', 'no', 'December 2025.', 'kaki_fry'),
      it('レモンカルボナーラ', '', 'Lemon carbonara', '', 'Dishes', 'no', 'no', '', 'lemon_carbonara'),
      it('レモンステーキ', '', 'Lemon steak', '', 'Dishes', 'ask', 'no', '', 'lemon_steak'),
      it('贅沢クリスマス特別Sコース', '', 'Christmas S course', '¥5,980', 'Course', 'ask', 'no', 'Christmas only.', 'xmas_s'),
    ] }, {
    cuisine: '国産の瀬戸田レモンをすべての料理に使うレモン料理専門店 (食べログ、公式サイト)・昼はスープ付きの定食が980円ほど、たとえば塩レモン唐揚げ、カキフライ、トマトレモンタルタルのチキンカツ、アボカドレモンハンバーグ、サラダと前菜付きのレモンカルボナーラ、アボカドと卵の「イタリアン丼」、レモンステーキ (2024〜2026年の口コミ)・夜はレモンステーキ、レモンカルボナーラ、アヒージョ、マルゲリータ、レモンアイスマチェドニア。クリスマスコース4,980円・5,980円 (公式サイト)・名物のレモンモヒート (食べログ)',
    neighborhood: '烏丸五条。五条駅から徒歩3分',
    gf_detail: '要確認。レモン味の唐揚げ、カキフライ、チキンカツ、カルボナーラ、ピザ。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: '要確認。肉と魚介が中心の定食で、ヴィーガンの表示はない (口コミ)。',
    notes: '[イタリアン・烏丸五条、何にでもレモン] 五条烏丸の一筋北の角の、小さく明るい食堂。瀬戸田のレモンをすべての料理に使う。昼は塩レモン唐揚げ、カキフライ、レモンカルボナーラなどの定食がスープ付きで1,000円ほどとお得。夜はレモンステーキ、アヒージョ、映えるレモンモヒート。一人で回すことが多く、混むと昼は遅め。2階は貸切に。不定休。',
  });
}

// ================================================================ LAMARCK
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032371/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_lamarck_imadegawa', name: 'LAMARCK (ラマルク)', category: 'MOM_AND_POP',
    lat: 35.02913422785299, lng: 135.75600182060887, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a French patisserie of cakes, cream puffs and tarts (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream, butter and eggs throughout the cakes (2026 reviews).',
    hours_raw: '11:00–18:00; closed Tuesday and Wednesday, and some Mondays; hours may change (Tabelog). Cakes can sell out by late afternoon (June 2026). No service charge listed (Tabelog). 6 seats at three small tables for eat-in, plus takeout; non-smoking; children and strollers welcome; cards and e-money, no QR (Tabelog). About 6 min from exit 6 of Imadegawa Stn (Tabelog; 2026 reviews). Opened 1 May 2019 (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'West of Imadegawa Stn — 6 min from exit 6',
    cuisine: 'Classic French patisserie (2026 reviews) · vanilla cream puff with almond crunch, filled to order with Tahitian-vanilla custard ¥390–398 · peach shortcake ¥880 · matcha tiramisu ¥860 · pistachio dacquoise with banana ¥860 · moelleux au chocolat · chocolat framboise ¥702 · iri-kyobancha and Japanese chestnut tart ¥715 · savarin in a glass · baked goods to order · coffee, Darjeeling and Earl Grey ¥620 for eat-in (March–October 2026 reviews)',
    website: null, gmaps: gm('LAMARCK ラマルク 今出川'), menu_url: TB,
    notes: "[Sweets · Imadegawa, a small French patisserie] A tiny patisserie a few minutes from Imadegawa Station, named after the Paris street where the chef once lived. The must-have is the cream puff, filled to order with Tahitian-vanilla custard under an almond crunch (about ¥390); the matcha tiramisu, pistachio dacquoise and a rare savarin also have fans. Three small tables for eating in with good coffee. Closed Tuesday and Wednesday.",
    chef_bio: { chef_name: 'Yoshida (pâtissier; given name not published)', roles: ['Owner-pâtissier (per an August 2026 review)'], origin: null,
      background: 'Per an August 2026 review: chef Yoshida trained for five and a half years at Hotel Granvia Kyoto, worked at La Risata, spent two and a half years in France, then trained further at Ke Montebello in Osaka before opening LAMARCK in May 2019; the name comes from Rue Lamarck in Paris, where the chef lived. Tabelog gives the opening as 1 May 2019.',
      philosophy: null,
      specialty: 'Vanilla cream puff filled to order; savarin.',
      anecdotes: [
        { text: 'A June 2026 visitor at 16:00 on a Thursday was told only one kind of cake was left, and enjoyed it with Darjeeling.', source: R + 'B529480078/' },
        { text: 'An April 2026 regular loves the glass savarin, rare for a cake shop, but came back for the cream puff.', source: R + 'B525597344/' },
        { text: 'A September 2026 visitor rated the matcha tiramisu above the dacquoise, both ¥860.', source: R + 'B535313719/' },
      ],
      japanese_sources_summary: '食べログ: LAMARCK (ラマルク)、ケーキ・カフェ、上京区弁財天町333-1、今出川駅から322m、月・木〜日11:00〜18:00、火水定休 (月曜不定休)、イートイン6席 (2人席×3)、禁煙、子供可、カード・電子マネー可、2019年5月1日オープン。口コミ (2026年3〜10月、英語): シェフ Yoshida はホテルグランヴィア京都で5年半、La Risata、フランスで2年半、大阪の Ke Montebello を経て2019年5月に開業、店名はパリで住んでいた Rue Lamarck から。注文後に詰めるタヒチ産バニラのシュークリーム390〜398円、桃のショートケーキ880円、抹茶ティラミス860円、ピスタチオのダックワーズ860円、ショコラフランボワーズ702円、炒り京番茶と和栗のタルト715円、グラスのサバラン。',
      confidence: 'medium', sources: [TB, R + 'B422840936/', R + 'B513211121/', R + 'B525107252/', R + 'B525597344/', R + 'B525619979/', R + 'B526532975/', R + 'B527183876/', R + 'B529480078/', R + 'B530639616/', R + 'B533762492/', R + 'B535313719/', R + 'B537594423/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the showcase; only six seats for eating in.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区弁財天町333-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.029134, 135.756002); cross-checked: GSI 京都府京都市上京区弁財天町333番地 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533762492/', R + 'B535313719/', R + 'B525619979/'],
    price_note: 'Prices from April–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Vanilla cream puff, filled to order', '¥390', 'Cakes', 'no', 'no', 'August 2026.', 'cream_puff'),
      it('', '', 'Peach shortcake', '¥880', 'Cakes', 'no', 'no', 'Summer.', 'peach_shortcake'),
      it('', '', 'Matcha tiramisu', '¥860', 'Cakes', 'no', 'no', '', 'matcha_tiramisu'),
      it('', '', 'Pistachio dacquoise', '¥860', 'Cakes', 'no', 'no', '', 'dacquoise'),
      it('', '', 'Earl Grey (iced)', '¥620', 'Drinks', '', 'ask', '', 'earl_grey'),
    ] }, {
    cuisine: '正統派のフランス菓子 (2026年の口コミ)・アーモンドクランチをのせ、注文後にタヒチ産バニラのカスタードを詰めるシュークリーム390〜398円・桃のショートケーキ880円・抹茶ティラミス860円・バナナを挟んだピスタチオのダックワーズ860円・モワルーショコラ・ショコラフランボワーズ702円・炒り京番茶と和栗のタルト715円・グラスのサバラン・焼き菓子は注文も・イートインはコーヒー、ダージリン、アールグレイ620円 (2026年3〜10月の口コミ)',
    neighborhood: '今出川駅の西。6番出口から徒歩6分',
    gf_detail: 'グルテンフリー不可。ケーキ、シュークリーム、タルトのフランス菓子店 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ケーキには生クリーム、バター、卵を使う (2026年の口コミ)。',
    notes: '[スイーツ・今出川、小さなフランス菓子店] 今出川駅から数分の小さなパティスリー。店名はシェフがパリで暮らした通りの名から。必ず食べたいのは、アーモンドクランチの下に注文後タヒチ産バニラのカスタードを詰めるシュークリーム (390円ほど)。抹茶ティラミス、ピスタチオのダックワーズ、珍しいサバランも人気。イートインは小さなテーブル3つで、コーヒーもおいしい。火水休み。',
  });
}

// ================================================================ 肉家かぐら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26020065/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_nikuya_kagura', name: '肉家かぐら (Nikuya Kagura)', category: 'OMNI',
    lat: 35.01162870716693, lng: 135.7578233942301, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagyu with several sauces, simmered dishes, curry and cold noodles to finish; no gluten information is published (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku and meat-kaiseki house (Tabelog).',
    hours_raw: '17:00–23:00 (last order 22:00), Monday–Saturday; closed Sunday, irregularly, and over Obon and New Year (Tabelog). À la carte orders carry a ¥3,300 starter (Tabelog’s Japanese original: 「前菜3300円(単品注文のみ)」); courses avoid it. 28 seats: an 8-seat counter downstairs for meat kaiseki, and upstairs a 2-seat bar counter, semi-private rooms for 4 and 6 and a private room for 8, used for yakiniku and suki-shabu; private hire up to 20; non-smoking; cards (VISA, Master, JCB, AMEX, Diners) and QR including PayPay (Tabelog; July 2025). In a renovated machiya with a small front garden and white noren at Muromachi south of Oshikoji, 188 m from Karasuma-Oike Stn (Tabelog; 2025–2026 reviews). Opened 5 April 2012 as 肉家 桜真 in Kamitoba and moved here (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Muromachi-Oike — 188 m from Karasuma-Oike Stn',
    cuisine: 'A4 and A5 wagyu from the meat wholesaler Gyusho Kagura, as yakiniku, suki-shabu or meat kaiseki, à la carte or by course (Tabelog) · Kagura course of 13 dishes ¥10,000: seasonal soup, nine-item appetizer platter of wagyu and seasonal vegetables (wagyu nigiri, tongue stew, daikon in oxtail broth), roast beef, tongue and skirt sashimi, grilled top blade with grated daikon, a melon palate cleanser, curry or cold noodles to finish (2024–2026 reviews) · rotating wines and labelled shochu (Tabelog; March 2026)',
    website: null, gmaps: gm('肉家かぐら 室町御池'), menu_url: TB,
    notes: "[Yakiniku · Muromachi-Oike, a wholesaler's wagyu in a machiya] A meat wholesaler's own restaurant in a renovated townhouse off Muromachi, with a garden path and white noren. Downstairs is a counter for meat kaiseki; upstairs, private rooms for yakiniku and suki-shabu. The ¥10,000 Kagura course runs to 13 plates — wagyu nigiri, roast beef, tongue sashimi, grilled cuts and cold noodles — and is generous. À la carte adds a ¥3,300 starter. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Run directly by the meat wholesaler Gyusho Kagura (Tabelog); no chef named'], origin: null,
      background: 'Per Tabelog’s official introduction: run directly by the meat wholesaler Gyusho Kagura, serving A5 and A4 wagyu from à la carte to courses, with a regularly changing wine list; moved from Kamitoba to Muromachi-Oike. Tabelog gives the opening as 5 April 2012, under the former name 肉家 桜真.',
      philosophy: null,
      specialty: 'Kagura course of wagyu yakiniku and meat kaiseki.',
      anecdotes: [
        { text: 'A November 2025 diner singled out the wagyu nigiri, tongue stew and daikon in oxtail broth on the appetizer platter.', source: R + 'B517257580/' },
        { text: 'A March 2026 regular comes back once a year and ends with the cold noodles.', source: R + 'B509918124/' },
        { text: 'A January 2026 guest found the course portions generous to the point of being overwhelming.', source: R + 'B506582304/' },
      ],
      japanese_sources_summary: '食べログ: 肉家かぐら (旧店名 肉家 桜真)、焼肉・しゃぶしゃぶ、中京区室町通押小路下る御池之町309、烏丸御池駅から188m、月〜土17:00〜23:00 (L.O. 22:00)、日曜定休・不定休・お盆と年末年始休み、前菜3,300円 (単品注文のみ)、28席 (1階カウンター8、2階カウンター2・半個室4名と6名・完全個室8名)、20名まで貸切可、禁煙、カード・QR 可、2012年4月5日オープン。公式紹介: 上鳥羽から室町御池に移転、精肉卸 Gyusho Kagura の直営、A5・A4の和牛をアラカルトからコースまで、ワインは定期的に入れ替え。口コミ (2024〜2026年、英語): かぐらコース13品10,000円、和牛握り、牛タンシチュー、テールスープの大根、ローストビーフ、タンとハラミの刺身、締めのカレーや冷麺、町家を改装、前庭と白い暖簾。',
      confidence: 'medium', sources: [TB, R + 'B493497213/', R + 'B502716990/', R + 'B506148894/', R + 'B506582304/', R + 'B508178874/', R + 'B509918124/', R + 'B510298856/', R + 'B515558328/', R + 'B517257580/', R + 'B522539510/', R + 'B522769057/', R + 'B524758615/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses avoid the ¥3,300 à la carte starter charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町通押し小路下る御池之町309',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.011629, 135.757823); cross-checked: GSI 京都府京都市中京区御池之町309番地 (lot) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B515558328/', R + 'B517257580/'],
    price_note: 'Course price from 2025–2026 reviews; starter charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Kagura course, 13 dishes', '¥10,000', 'Course', 'ask', 'no', '', 'kagura_course'),
      it('前菜', '', 'Starter charged on à la carte orders', '¥3,300', 'Charge', 'ask', 'no', 'À la carte only.', 'zensai_charge'),
    ] }, {
    cuisine: '精肉卸 Gyusho Kagura の A4・A5和牛を、焼肉、すきしゃぶ、肉懐石で、アラカルトでもコースでも (食べログ)・13品のかぐらコース10,000円: 季節のスープ、和牛と季節の野菜の9種の前菜盛り (和牛握り、牛タンシチュー、テールスープで炊いた大根)、ローストビーフ、タンとハラミの刺身、大根おろしのミスジ焼き、口直しのメロン、締めはカレーか冷麺 (2024〜2026年の口コミ)・入れ替わるワインとラベルのかわいい焼酎 (食べログ、2026年3月)',
    neighborhood: '室町御池。烏丸御池駅から188m',
    gf_detail: '要確認。数種のたれの和牛、煮込み、締めのカレーや冷麺。グルテンの情報は公開されていない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉と肉懐石の店 (食べログ)。',
    notes: '[焼肉・室町御池、卸の和牛を町家で] 精肉卸の直営で、室町通から入る改装した町家。前庭の小径と白い暖簾。1階は肉懐石のカウンター、2階は焼肉やすきしゃぶの個室。10,000円のかぐらコースは13品: 和牛握り、ローストビーフ、タンの刺身、焼き物、冷麺と量もたっぷり。アラカルトでは前菜3,300円が付く。日曜休み。',
  });
}

save();
