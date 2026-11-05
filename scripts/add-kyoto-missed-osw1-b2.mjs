// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 2.
//   + マリーＤ Marie D (European-style curry in the Yanagikoji alley off Shinkyogoku; open for decades)
//   + SOUP CURRY OHMIYA (Kyoto-style soup curry in clay pots, Urateramachi; since 2018)
//   + 麩嘉 錦店 Fuka Nishiki ten (the Nishiki shop of the old Kyoto nama-fu maker; fu manju; Wagashi WEST Tabelog 100 2023, 2026)
//   + 甘泉堂 Kansen Do (takeaway yokan shop in a Gion alley; founded 1884 per reviews; Wagashi WEST Tabelog 100 2023, 2026)
//   Picked on 2026-11-05: the first two with id mod 6 = 2 from `queue.mjs kyoto-missed next core 200` (26001260, 26031116)
//   and from `next notable 200` (26007146, 26001392). None is in data/kyoto.json: grep by name (マリー/Marie D, OHMIYA/
//   近江屋, 麩嘉/Fuka, 甘泉堂/Kansen) and address (中之町577, 裏寺町607, 菊屋町534, 祇園町北側344) found none.
//   Nearest existing pin: ChIJc2AXFs0JAWARGffpYkznMu8 (Pelgag) about 14 m from Marie D and 32 m from OHMIYA; Marie D and
//   OHMIYA are about 23 m apart. Tabelog URLs copied from each listing.txt line 1.
//   Group checks: OHMIYA has one sister shop, CLAY POT CURRY OHMIYA (European-style curry, a different format; not in data).
//   麩嘉 has two shops (本店, which does no retail, and this 錦店), neither in data.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-2');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ マリーＤ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001260/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:30'], ['17:00', '20:00']);
  put({
    id: 'kyoto_marie_d', name: 'マリーＤ (Marie D)', category: 'OMNI',
    lat: 35.004736, lng: 135.768155, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. European-style curry sauce with saffron rice; desserts include a caramel banana pudding; no information on what thickens the sauce (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The reviewed curries all carry meat or seafood (chicken, pork, hamburg steak, shrimp, scallops); no vegan information (2024–2026 reviews).',
    hours_raw: '12:00–15:30 and 17:00–20:00; closed Tuesday (Tabelog). Reservations taken (Tabelog). Curry is the point: a June 2025 visitor was told that dessert and tea alone could not be ordered. No photography (Tabelog remark), though in June 2025 the owner allowed photos that day. 14 seats; non-smoking; cash only — no cards, e-money or QR payments (Tabelog). 115 m from Kyoto Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yanagikoji alley off Shinkyogoku, north of Shijo — 3 min walk from Kawaramachi Stn',
    cuisine: 'Small European-style curry shop: a mildly spicy, slightly sweet sauce served apart from saffron rice topped with vegetables (2024–2026 reviews) · Lunch Set A with salad, pickles and coffee ¥1,500, e.g. pork and summer vegetable curry with manganji pepper and tomato (September 2026) · Curry Course A with pea soup, salad, pickles, curry, caramel banana pudding and coffee ¥1,900 (June 2025) · seasonal spring vegetable curry with shrimp and scallops ¥1,350 (June 2025) · special seafood curry with scallops, shrimp, squid and mussels · chicken curry, hamburg steak curry · cakes (2024–2026 reviews)',
    website: null, gmaps: gm('マリーD 京都 新京極'), menu_url: null,
    notes: '[Curry · Shinkyogoku, European-style curry in a stone-paved alley] A small curry shop on the quiet, stone-paved Yanagikoji, a few steps from the Shinkyogoku arcade, where the smell of curry carries into the alley. The curry is European-style — gently spiced, a little sweet — with the sauce served apart from saffron rice dressed with vegetables, on pretty tableware. Lunch Set A (¥1,500 with salad, pickles and coffee, September 2026) and the fuller Course A with soup and caramel banana pudding are the usual orders; seasonal curries change through the year. One diner first visited about 35 years ago. Curry only (no tea-and-cake orders), no photos, cash only; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'A May 2025 reviewer had first visited about 35 years earlier and noted that the interior had since been updated.',
      philosophy: null, specialty: 'European-style curry with saffron rice; caramel banana pudding.',
      anecdotes: [
        { text: '"Amidst the rapid changes in the Shijo Kawaramachi area, this restaurant has been around since I visited 35 years ago." — May 2025.', source: R + 'B507270143/' },
        { text: 'A June 2025 visitor who wanted only tea and cake was told that this is a curry shop, ordered Curry Course A instead, and found the service a bit lacking in warmth but every dish delightful.', source: R + 'B509629309/' },
        { text: 'A September 2025 diner felt watched at first by the woman running the room, then found the service polite once the two spoke.', source: R + 'B514600932/' },
        { text: '"My saffron rice arrived on a Peter Rabbit plate" — March 2025.', source: R + 'B503754367/' },
      ],
      japanese_sources_summary: '食べログ: マリーＤ、カレー、中京区新京極四条上ル東入ル中之町577、京都河原町駅から115m、12:00〜15:30・17:00〜20:00、火曜休み、予約可、14席、禁煙、カード・電子マネー・QR 不可、撮影禁止。口コミ (2024〜2026年、英語): 柳小路の石畳の路地、欧風カレー、サフランライス、ランチセットA 1,500円 (2026年9月)、カレーコースA 1,900円 (2025年6月)、春野菜と海老と帆立のカレー1,350円、シーフードカレー、キャラメルバナナプリン、35年前から続く店。',
      confidence: 'medium', sources: [TB, R + 'B487384391/', R + 'B498838419/', R + 'B503754367/', R + 'B507270143/', R + 'B508299680/', R + 'B509629309/', R + 'B514600932/', R + 'B521495506/', R + 'B523475753/', R + 'B534890242/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order a curry (dessert and tea alone are not served); no photos; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新京極四条上ル東入ル中之町577',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004736, 135.768155); cross-checked: GSI 京都府京都市中京区中之町577番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534890242/', R + 'B509629309/', R + 'B508299680/'],
    price_note: 'No menu read; prices from June 2025 and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch Set A (curry, salad, pickles, coffee)', '¥1,500', 'Lunch', 'ask', 'ask', 'September 2026.', 'lunch_set_a'),
      it('', '', 'Curry Course A (pea soup, salad, pickles, curry, caramel banana pudding, coffee)', '¥1,900', 'Course', 'ask', 'no', 'June 2025.', 'curry_course_a'),
      it('', '', 'Spring vegetable curry with shrimp and scallops', '¥1,350', 'Curry', 'ask', 'no', 'June 2025; seasonal.', 'spring_shrimp_scallop_curry'),
    ] }, {
    cuisine: '欧風カレーの小さな店。辛さ控えめで少し甘いルウを、野菜をのせたサフランライスと別盛りで (2024〜2026年の口コミ)・ランチセットA (サラダ、ピクルス、コーヒー付き) 1,500円、たとえば豚肉と夏野菜のカレーに万願寺とうがらしとトマト (2026年9月)・カレーコースA (豆のスープ、サラダ、ピクルス、カレー、キャラメルバナナプリン、コーヒー) 1,900円 (2025年6月)・季節の春野菜と海老と帆立のカレー1,350円 (2025年6月)・帆立、海老、イカ、ムール貝のスペシャルシーフードカレー・チキンカレー、ハンバーグカレー・ケーキ (2024〜2026年の口コミ)',
    neighborhood: '新京極から入る柳小路、四条の北。河原町駅から徒歩3分',
    gf_detail: '要確認。欧風カレーのルウにサフランライス、デザートにキャラメルバナナプリン。ルウのとろみに何を使うかの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。口コミのカレーはどれも肉か魚介入り (チキン、豚肉、ハンバーグ、海老、帆立)。ヴィーガンの情報はない (2024〜2026年の口コミ)。',
    notes: '[カレー・新京極、石畳の路地の欧風カレー] 新京極のアーケードからすぐ、静かな石畳の柳小路にある小さなカレー店で、路地までカレーの香りが漂う。カレーは欧風で、スパイスはやさしく少し甘め。ルウは野菜をのせたサフランライスと別盛りで、器もかわいい。定番はランチセットA (サラダ、ピクルス、コーヒー付き1,500円、2026年9月) と、スープとキャラメルバナナプリンの付くコースA。季節のカレーは一年を通して替わる。35年ほど前に初めて来たという客も。カレーのみ (お茶とケーキだけの注文は不可)、撮影禁止、現金のみ。火曜休み。',
  });
}

// ================================================================ SOUP CURRY OHMIYA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26031116/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://soupcurryohmiya.com/';
  const WD = day(['11:30', '15:00'], ['17:30', '21:00']); const WE = day(['11:30', '15:30'], ['17:30', '21:00']);
  put({
    id: 'kyoto_soup_curry_ohmiya', name: 'SOUP CURRY OHMIYA', category: 'OMNI',
    lat: 35.004849, lng: 135.768363, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soup curry on a Japanese dashi base with fried vegetables, rice and toppings such as cheese and fried onion; no gluten information (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as served: every soup is built on a Japanese-style dashi base, even the colourful vegetable soup curry (¥1,280); ask whether the broth can be made without fish or meat (official site).',
    hours_raw: 'Weekdays 11:30–15:00 and 17:30–21:00; weekends and holidays 11:30–15:30 and 17:30–21:00; last food order 20:30; may close early when the soup runs out; irregular holidays (Tabelog; the official site gives 11:30–15:00 and 17:30–21:00). Reservations via Instagram DM (official site) or the booking link on the site, for 11:30–12:00 and 17:30–18:00 only, two groups per slot; phone bookings may not be accepted; one-hour seating limit (Tabelog). Queues at lunch, often of overseas visitors (June, September 2026); orders through an app (September 2026). Menu in English, Chinese and Korean (Tabelog). 16 seats (4 counter, 12 table), second floor; non-smoking; cards, IC cards and QR payments including PayPay and Alipay (Tabelog). Behind Kawaramachi OPA, opposite the Super Hotel; 2 min from Hankyu Kawaramachi Stn (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Urateramachi, behind Kawaramachi OPA — 2 min from Hankyu Kawaramachi Stn',
    cuisine: 'Kyoto-style soup curry: more than 15 spices with a Japanese dashi taste, served in an orange clay pot with fried vegetables from contract farms; spice in 7 levels (official site) · Kyoto Akajidori chicken drumstick soup curry ¥1,580 (¥1,550 in March 2026) · domestic pork hamburg steak ¥1,880 · Kyoto-brand beef (京の肉) braised in red wine ¥2,200, limited · braised pork belly ¥1,650 · colourful vegetable soup curry ¥1,280; extra vegetables +¥200; extra soup ¥300 · toppings: seared cheese ¥180, soft-boiled egg ¥150, fried garlic or onion ¥130 · potato salad with pickled daikon ¥350 · caramel ice cream ¥330 (official site) · rice in sizes, e.g. 200 g or 300 g (2026 reviews)',
    website: SITE, gmaps: gm('SOUP CURRY OHMIYA 京都 裏寺町'), menu_url: SITE,
    notes: '[Curry · Kawaramachi, Kyoto-style soup curry in clay pots] A small second-floor soup curry shop behind Kawaramachi OPA that gives the Hokkaido dish a Kyoto turn: a dashi-tasting broth with more than 15 spices, Kyoto Akajidori chicken and the Kyoto beef brand 京の肉, and a pile of fried vegetables, served piping hot in an orange clay pot. The chicken drumstick soup curry (¥1,580) is the house pick; there is a vegetable soup curry too (¥1,280, dashi base). Spice runs in 7 levels, but reviewers found even level 5 mild (June 2026). Lunch queues are common — book a 11:30 or 17:30 slot through Instagram. One-hour seating; cards accepted.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed on the official site, which calls the chicken drumstick curry 店主オススメ)'], origin: null,
      background: 'Per the official site: formerly named 土鍋スープカレー近江屋清右衛門; a sister shop of the European-style curry shop CLAY POT CURRY OHMIYA; the shop studied which chicken suits its soup curry and settled on Kyoto Akajidori; vegetables come direct from contract farms around Japan; the clay pots are handmade Mashiko ware. Tabelog gives the opening as 21 August 2018.',
      philosophy: null, specialty: 'Kyoto Akajidori chicken drumstick soup curry; beef braised in red wine.',
      anecdotes: [
        { text: '"The soup, based on a Japanese dashi broth and blended with over 15 spices, is robustly spicy yet has a gentle flavor." — June 2026.', source: R + 'B531415841/' },
        { text: 'A June 2026 reviewer found the soup milder than expected even at level 5 and the dish more vegetable-led than spice-led, noting many tourists from Chinese-speaking regions among the customers.', source: R + 'B529443184/' },
        { text: 'A June 2026 diner booked noon on a holiday through Instagram and arrived to a line of about ten people, mostly foreign tourists.', source: R + 'B530404218/' },
        { text: 'An October 2026 visitor found level 2 not spicy at all and suggested level 3 for anyone who can handle "Karumucho".', source: R + 'B538100426/' },
      ],
      japanese_sources_summary: '公式サイト (soupcurryohmiya.com): 阪急河原町駅徒歩2分、裏寺町、京都の食材と15種類以上のスパイスと和風出汁のテイストの特製スープカレーをオレンジの土鍋で、京赤地鶏、京の肉、全国の契約農家の野菜、辛さ7段階、益子焼の器、欧風カレー店 CLAY POT CURRY OHMIYA の姉妹店、予約はインスタグラムの DM、旧店名 土鍋スープカレー近江屋清右衛門。メニュー: 京赤地鶏の手羽元スープカレー1,580円、国産豚のハンバーグのスープカレー1,880円、京の肉の赤ワイン煮込みスープカレー2,200円、豚の角煮スープカレー1,650円、彩り野菜のスープカレー1,280円、たっぷり野菜トッピング+200円、追加スープ300円、ポテトサラダ350円、キャラメルアイス330円。食べログ: スープカレー、中京区裏寺町607-3 2F、16席、予約は2組まで、1時間制、英語・中国語・韓国語メニュー、カード・電子マネー・QR 可、2018年8月21日オープン。',
      confidence: 'medium', sources: [TB, SITE, R + 'B431777428/', R + 'B524980890/', R + 'B525454194/', R + 'B525736433/', R + 'B529443184/', R + 'B530404218/', R + 'B531415841/', R + 'B532916014/', R + 'B536632052/', R + 'B538100426/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu in English, Chinese and Korean (Tabelog); order through the app; book via Instagram DM; cards and QR payments accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区裏寺町607-3 西川ビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004849, 135.768363); cross-checked: GSI 京都府京都市中京区裏寺町607番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official site menu (tax included, undated); a March 2026 review paid ¥1,550 for the chicken curry.', last_checked: TODAY, items: [
      it('『京赤地鶏』の手羽元スープカレー', '', 'Kyoto Akajidori chicken drumstick soup curry', '¥1,580', 'Soup curry', 'ask', 'no', 'Spice in 7 levels.', 'akajidori_soup_curry'),
      it('国産豚のハンバーグのスープカレー', '', 'Domestic pork hamburg steak soup curry', '¥1,880', 'Soup curry', 'ask', 'no', '', 'hamburg_soup_curry'),
      it('『京の肉』の赤ワイン煮込みスープカレー', '', 'Kyoto beef braised in red wine soup curry', '¥2,200', 'Soup curry', 'ask', 'no', 'Limited quantity.', 'red_wine_beef_soup_curry'),
      it('豚の角煮スープカレー', '', 'Braised pork belly soup curry', '¥1,650', 'Soup curry', 'ask', 'no', '', 'kakuni_soup_curry'),
      it('彩り野菜のスープカレー', '', 'Colourful vegetable soup curry', '¥1,280', 'Soup curry', 'ask', 'no', 'Dashi-based soup.', 'vegetable_soup_curry'),
      it('ポテトサラダ', '', 'Potato salad with pickled daikon', '¥350', 'Sides', 'ask', 'ask', '', 'potato_salad'),
      it('キャラメルアイス', '', 'Caramel ice cream (New Zealand)', '¥330', 'Dessert', 'ask', 'no', '', 'caramel_ice'),
    ] }, {
    cuisine: '京都風のスープカレー: 15種類以上のスパイスに和風出汁のテイスト、オレンジの土鍋に契約農家の揚げ野菜、辛さは7段階 (公式サイト)・京赤地鶏の手羽元スープカレー1,580円 (2026年3月は1,550円)・国産豚のハンバーグ1,880円・京の肉の赤ワイン煮込み2,200円 (数量限定)・豚の角煮1,650円・彩り野菜のスープカレー1,280円、たっぷり野菜+200円、追加スープ300円・トッピング: 炙りチーズ180円、温玉150円、フライドガーリックやフライドオニオン130円・大根の漬物入りポテトサラダ350円・キャラメルアイス330円 (公式サイト)・ご飯は200gや300gなど量を選べる (2026年の口コミ)',
    neighborhood: '河原町 OPA の裏の裏寺町。阪急河原町駅から徒歩2分',
    gf_detail: '要確認。和風出汁ベースのスープカレーに揚げ野菜、ご飯、チーズやフライドオニオンなどのトッピング。グルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: 'このままではヴィーガンではない。彩り野菜のスープカレー (1,280円) も含め、スープはすべて和風出汁ベース。魚や肉を使わないスープにできるかは要確認 (公式サイト)。',
    notes: '[カレー・河原町、土鍋の京都風スープカレー] 河原町 OPA の裏、2階にある小さなスープカレー店。北海道の料理を京都風に仕立て、出汁の効いたスープに15種類以上のスパイス、京赤地鶏や京都のブランド牛「京の肉」、たっぷりの揚げ野菜を、オレンジの土鍋で熱々に。看板は京赤地鶏の手羽元 (1,580円)、野菜のスープカレー (1,280円、出汁ベース) もある。辛さは7段階だが、5辛でも穏やかだったという声も (2026年6月)。昼は行列が多いので、11時半か17時半の枠をインスタグラムで予約するとよい。1時間制、カード可。',
  });
}

// ================================================================ 麩嘉 錦店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26007146/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://fuka-kyoto.com/'; const ABOUT = SITE + 'about/'; const STORE = SITE + 'store/';
  const H = day(['10:00', '17:30']);
  put({
    id: 'kyoto_fuka_nishiki', name: '麩嘉 錦店 (Fuka Nishiki ten)', category: 'OMNI',
    lat: 35.005069, lng: 135.763358, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: nama-fu is wheat gluten mixed with glutinous rice flour and steamed, and the fu manju and fu taiyaki are made from it (official site; 2026 reviews).',
    vegan_status: 'limited', vegan_label: 'Limited vegan', vegan_detail: 'The fu manju is described as house-made smooth bean paste wrapped in nama-fu (wheat gluten and glutinous rice flour) flavoured with aonori and rolled in a bamboo leaf, with no animal ingredient named; a full ingredient list was not seen, so check (official site).',
    hours_raw: '10:00–17:30; closed Monday, and on the last Sunday of each month from February to August (Tabelog; the official site gives 10:00–17:30, closed Monday). Mainly takeaway, with a tiny eat-in corner: one table for two and a counter (September 2026); eat-in buyers can add Ippodo roasted bancha for ¥100 (August–September 2026) and one was served chilled tea (August 2026). Reservations taken by phone (Tabelog). Cards accepted (Tabelog). The main shop at Nishinotoin does no retail: phone ahead or buy online (official site). 326 m from Karasuma Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki Market at Sakaimachi — 5 min walk from Karasuma Stn',
    cuisine: 'The Nishiki shop of an old Kyoto nama-fu (fresh wheat gluten) maker that supplies ryotei (official site) · fu manju: house-made smooth bean paste in aonori-flavoured nama-fu, wrapped in a bamboo leaf, ¥330 (August 2026) or ¥350 (September 2026) · fu taiyaki, small and baked to order, ¥352 (October 2026) · summer shaved ice Sasa no Tsu with bean paste ¥400 (August 2026) · nama-fu to cook at home · Ippodo roasted bancha +¥100 with eat-in (2026 reviews)',
    website: SITE, gmaps: gm('麩嘉 錦店'), menu_url: null,
    notes: '[Wagashi · Nishiki Market, fu manju from an old nama-fu maker] The Nishiki Market counter of Fuka, a nama-fu maker that has supplied fresh wheat gluten to the Imperial Palace and to Kyoto ryotei since at least the 1860s. The thing to get is the fu manju its own history says Fuka created: smooth bean paste wrapped in chewy, aonori-green fu and a bamboo leaf (¥330–350), eaten chilled. Small fu taiyaki are baked to order (¥352). Two seats and a counter for eating on the spot, with Ippodo bancha for ¥100. 10:00–17:30, closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner, the 7th generation (official site; unnamed)'], origin: null,
      background: 'Per the official site: Fuka has long supplied fu to the Kyoto Imperial Palace; its founding year is unknown because its records burned in the upheavals of the late Edo period, but a pass for entering the palace is dated in the Keio era (1865–68), and the present owner is the 7th generation counted from then. Fuka helped bring nama-fu from plain temple cooking into Kyoto cuisine by delivering it fresh to ryotei every morning, and still works mainly to order for ryotei, making 30–40 kinds a day by hand from pumped groundwater with about 20 craftsmen, all of whom study the tea ceremony. The site says Fuka made the first nama-fu manju, an idea attributed to Emperor Meiji, who liked nama-fu. Tabelog Wagashi WEST "Tabelog 100" 2023 and 2026.',
      philosophy: 'Per the official site: the family business is "craft, not commerce" — use natural ingredients as far as possible and make by hand everything it can.',
      specialty: 'Fu manju; fu taiyaki.',
      anecdotes: [
        { text: 'A September 2026 reviewer noted that the fu is mixed with aonori and the filling is smooth bean paste of Tanba Dainagon azuki; fu manju and bancha came to ¥490.', source: R + 'B535599925/' },
        { text: '"I was pleasantly surprised to be served chilled tea when I chose to dine in." — August 2026.', source: R + 'B535070450/' },
        { text: 'A September 2026 visitor found the fu manju wobbly and slippery to hold, with a chewy skin and light, smooth filling, and the staff very kind.', source: R + 'B535646737/' },
      ],
      japanese_sources_summary: '公式サイト (fuka-kyoto.com): 京生麩の専門店、古くから京都御所に麩を献上、創業年は江戸時代後期の動乱で資料が焼失し不明、御所の手形に慶応年間の記載、現在の店主は7代目、料亭からの受注生産が主、毎朝生麩をつくる、一日30〜40種類、地下水を汲み上げて手づくり、職人は20人ほどで全員が茶道を習う、生麩饅頭をはじめてつくったのも麩嘉 (明治天皇のアイデアとされる)、自家製こしあんを青のりの生麩で包み笹で巻く、「商売ではなくものづくり」。店舗: 麩嘉 本店 (上京区西洞院通椹木町上る、小売りなし、電話予約かオンラインショップ)、麩嘉 錦店 (中京区錦小路堺町角菊屋町534-1、10:00〜17:30、月曜定休)。食べログ: 和菓子、2席、予約可、カード可、2月〜8月の最終日曜休み、和菓子・甘味処 WEST 百名店 2023・2026。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, STORE, R + 'B533992216/', R + 'B534642741/', R + 'B534755175/', R + 'B535070450/', R + 'B535365135/', R + 'B535421422/', R + 'B535599925/', R + 'B535646737/', R + 'B536012838/', R + 'B536891391/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Buy at the shop counter; ask to eat in if the table is free; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路堺町角菊屋町534-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026; Wagashi WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.005069, 135.763358); cross-checked: GSI 京都府京都市中京区菊屋町534番地 (lot) 50m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533992216/', R + 'B535421422/', R + 'B536891391/', R + 'B534755175/'],
    price_note: 'No price list read; prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('麩まんじゅう', '', 'Fu manju (bean paste in nama-fu, bamboo leaf)', '¥330', 'Wagashi', 'no', 'ask', '¥330 in August 2026, ¥350 in September 2026.', 'fu_manju'),
      it('', '', 'Fu taiyaki', '¥352', 'Wagashi', 'no', 'ask', 'October 2026.', 'fu_taiyaki'),
      it('', '', 'Sasa no Tsu shaved ice with bean paste (summer)', '¥400', 'Wagashi', 'ask', 'ask', 'August 2026.', 'sasa_no_tsu_kakigori'),
      it('', '', 'Ippodo roasted bancha (with eat-in)', '+¥100', 'Drinks', '', '', 'August–September 2026.', 'ippodo_bancha'),
    ] }, {
    cuisine: '料亭に生麩を納める京都の老舗の麩屋の錦店 (公式サイト)・麩まんじゅう: 自家製こしあんを青のりの生麩で包み笹で巻く、330円 (2026年8月) または350円 (2026年9月)・注文してから焼く小さな麩のたい焼き352円 (2026年10月)・夏のかき氷 Sasa no Tsu (あん入り) 400円 (2026年8月)・持ち帰って料理する生麩・イートインは一保堂のほうじ番茶+100円 (2026年の口コミ)',
    neighborhood: '錦市場の堺町角。烏丸駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。生麩は小麦のグルテンに餅粉を合わせて蒸したもので、麩まんじゅうや麩のたい焼きなどはこれで作る (公式サイト、2026年の口コミ)。',
    vegan_detail: '麩まんじゅうは、自家製こしあんを青のり入りの生麩 (小麦グルテンと餅粉) で包み笹で巻いたもので、動物性の材料の記載はない。原材料の全表示は確認していないので要確認 (公式サイト)。',
    notes: '[和菓子・錦市場、老舗の麩屋の麩まんじゅう] 京都御所や料亭に生麩を納めてきた麩嘉の錦市場の店。少なくとも1860年代から続く。名物は麩嘉が最初に作ったという麩まんじゅうで、こしあんをもちもちの青のりの生麩と笹で包む (330〜350円)、冷やして食べる。小さな麩のたい焼きは注文してから焼く (352円)。店先の2席とカウンターで食べられ、一保堂の番茶が100円。10時〜17時半、月曜休み。',
  });
}

// ================================================================ 甘泉堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001392/'; const R = TB + 'dtlrvwlst/';
  const GION = 'https://www.gion.or.jp/gion_shop_detail/%E7%94%98%E6%B3%89%E5%A0%82';
  const H = day(['10:30', '19:00']);
  put({
    id: 'kyoto_kansendo_gion', name: '甘泉堂 (Kansen Do)', category: 'OMNI',
    lat: 35.004243, lng: 135.775474, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A September 2026 buyer read the mizu yokan label as only adzuki beans, sugar and agar, but the steamed yokan (mushi yokan) ingredients were not reported and the shop publishes none; ask before buying (2026 reviews).',
    vegan_status: 'limited', vegan_label: 'Limited vegan', vegan_detail: 'The mizu yokan label lists only adzuki beans, sugar and agar (a September 2026 review); the steamed yokan in chestnut, hojicha, kinako and matcha flavours have no ingredient list in the sources (2026 reviews).',
    hours_raw: 'Mon–Sat 10:30–19:00, closed Sunday; may close early (Tabelog; the same in a September 2026 review). The Gion shopping street association lists 10:00–20:00, closed Sunday. Takeaway only, no seats (Tabelog): ring the bell at the counter and the owner comes out (September 2026). Popular yokan sell out by late afternoon (September 2026); orders can be reserved by phone (Tabelog; October 2026). Cash only (Tabelog). In an alley just north of Shijo-dori in Gion, about 8 min walk from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'A Gion alley just north of Shijo-dori — 8 min walk from Gion-Shijo Stn',
    cuisine: 'Takeaway-only yokan shop, founded in 1884 per reviews (2026 reviews) · kuri mushi yokan (chestnut steamed yokan) wrapped in bamboo leaves, ¥2,000, seasonal · mizu yokan ¥2,000 (adzuki, sugar and agar, with bamboo leaves inside) · small drum-shaped steamed yokan ¥350: hojicha, kinako, matcha, and bite-sized ones with tomato or nuts (September 2026)',
    website: GION, gmaps: gm('甘泉堂 祇園'), menu_url: null,
    notes: '[Wagashi · Gion, an old yokan shop down an alley] A small, Showa-feeling yokan shop hidden in an alley just off Shijo-dori in Gion, founded in 1884 according to reviewers. There is no one at the counter: ring the bell and the owner comes out (one reviewer describes a man in a white chef’s coat and black cap). The famous chestnut steamed yokan, packed with chunks of chestnut and wrapped in bamboo leaf (¥2,000), is seasonal — in September 2026 some visitors bought it and others were told it was not yet being made; there is also a silky mizu yokan, and small chilled steamed yokan (¥350) to eat on a walk. Flavours sell out by late afternoon — phone ahead for the big ones. Several reviewers call the service brusque. Cash only; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'September 2026 reviews give the founding as 1884 (Meiji 17), and one calls it the first shop in Kyoto to make mizu yokan. Tabelog Sweets "Tabelog 100" 2017 and Sweets WEST 2018–2020, 2022; Wagashi WEST 2023 and 2026.',
      philosophy: null, specialty: 'Chestnut steamed yokan; mizu yokan.',
      anecdotes: [
        { text: '"When I pressed the call button, a gentleman in a white chef\'s coat with a black cap came out from the back to assist me." — September 2026.', source: R + 'B536180513/' },
        { text: 'An October 2026 buyer reserved a chestnut yokan by phone three days ahead and found the shop more aloof than most — and was glad of the lack of fuss; other September 2026 reviewers found the service indifferent or brusque.', source: R + 'B536784009/' },
        { text: 'A September 2026 buyer read the mizu yokan label — adzuki beans, sugar and agar only — and was told to wait about five minutes.', source: R + 'B536597413/' },
        { text: 'A September 2026 visitor, before the chestnut season, found that the chestnut steamed yokan was not yet being made and bought mizu yokan, which came with two bamboo leaves inside to ease it out.', source: R + 'B537368104/' },
      ],
      japanese_sources_summary: '祇園商店街振興組合: 甘泉堂、京菓子、東山区祇園町北側344-6、10:00〜20:00、日曜定休。食べログ: 和菓子、祇園町344-6、祇園四条駅から徒歩約8分、月〜土 10:30〜19:00、日曜休み、早じまいの日あり、予約可、持ち帰りのみ、カード・電子マネー・QR 不可、スイーツ百名店 2017、スイーツ WEST 百名店 2018〜2020・2022、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2026年9〜11月、英語): 1884年創業、栗蒸し羊羹2,000円、水羊羹2,000円 (原材料は小豆、砂糖、寒天)、蒸し羊羹 (ほうじ茶、きなこ、抹茶) 350円、呼び鈴を押すと店主が出てくる、路地の奥、愛想のない接客という声。',
      confidence: 'medium', sources: [TB, GION, R + 'B534976251/', R + 'B535840792/', R + 'B536115824/', R + 'B536180513/', R + 'B536341881/', R + 'B536551062/', R + 'B536597413/', R + 'B536784009/', R + 'B537368104/', R + 'B538610470/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ring the bell for service; point at what you want; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側344-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and the Gion shopping street association page; reviews dated through November 2026; Wagashi WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.004243, 135.775474); cross-checked: GSI 京都府京都市東山区祇園町北側344番地 (lot) 22m; Gion association map point (35.004254, 135.775429) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536180513/', R + 'B536597413/', R + 'B536115824/', R + 'B535840792/'],
    price_note: 'No price list read; prices from September–November 2026 reviews.', last_checked: TODAY, items: [
      it('栗蒸し羊羹', '', 'Chestnut steamed yokan (kuri mushi yokan)', '¥2,000', 'Yokan', 'ask', 'ask', 'September–November 2026; seasonal.', 'kuri_mushi_yokan'),
      it('', '', 'Mizu yokan', '¥2,000', 'Yokan', 'ask', 'vegan', 'September 2026; label: adzuki beans, sugar, agar.', 'mizu_yokan'),
      it('', '', 'Small steamed yokan (hojicha, kinako or matcha)', '¥350', 'Yokan', 'ask', 'ask', 'September 2026.', 'small_mushi_yokan'),
    ] }, {
    cuisine: '持ち帰りのみの羊羹の店。口コミによれば1884年創業 (2026年の口コミ)・笹の葉で包んだ栗蒸し羊羹2,000円、季節もの・水羊羹2,000円 (小豆、砂糖、寒天、中に笹の葉)・小さな太鼓形の蒸し羊羹350円: ほうじ茶、きなこ、抹茶、トマトやナッツの一口サイズも (2026年9月)',
    neighborhood: '四条通のすぐ北、祇園の路地。祇園四条駅から徒歩8分',
    gf_detail: '要確認。2026年9月の購入者は水羊羹の原材料を小豆、砂糖、寒天のみと読んだが、蒸し羊羹の原材料は報告がなく、店も公開していない。買う前に確認を (2026年の口コミ)。',
    vegan_detail: '水羊羹の原材料表示は小豆、砂糖、寒天のみ (2026年9月の口コミ)。栗、ほうじ茶、きなこ、抹茶の蒸し羊羹は原材料の情報がない (2026年の口コミ)。',
    notes: '[和菓子・祇園、路地奥の老舗の羊羹] 祇園の四条通から少し入った路地に隠れた、昭和の雰囲気の小さな羊羹の店。口コミによれば1884年創業。店先に人はおらず、呼び鈴を押すと店主が出てくる (白いコックコートに黒い帽子の男性と書く口コミも)。名物の栗蒸し羊羹は大きな栗がたっぷりで笹の葉に包まれ (2,000円)、季節もの。2026年9月には買えた人と、まだ作っていないと言われた人がいた。なめらかな水羊羹もあり、小さな冷えた蒸し羊羹 (350円) は歩きながらでも。夕方には売り切れる味が多いので、大きいものは電話で予約を。接客がそっけないという声が多い。現金のみ、日曜休み。',
  });
}

save();
