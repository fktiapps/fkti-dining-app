// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 85.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   Brands checked against queue-status.jsonl (full names and brand stems), than.co.jp/brands and 株式会社WILL (will-food.com).
//   + カレーとカレーパン 野原屋 Noharaya (curry and fried curry-bread lunch shop of the Irish PUB field, with 後藤パン工房)
//   - 炭火串焼とりと 四条烏丸店 — same-concept second shop of a brand in data: 炭火串焼とりと (kyoto_sumibi_kushiyaki_torito)
//   + 焼肉スタミナ山 Yakiniku Stamina Yama (yakiniku by Keihan Sanjo, opened October 2024; 2026 reviews)
//   + はらぺこ Harapeko (old-style udon diner north of Gion; 2025–26 reviews)
//   + 歳時記 年神 Saijiki Toshigami (Kyoto cuisine and sake pairing on Tsukimi-cho since 2014)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Pins: Tabelog /en/ point, cross-checked with GSI; 野原屋 (2F) moved ~9.5 m off おにぎりはつき (1F of the same building, 0.1 m); each 9 m+
//   from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-85');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26026431', '炭火串焼とりと 四条烏丸店: same-concept second shop of a brand in data — 炭火串焼とりと (kyoto_sumibi_kushiyaki_torito), whose site links this Shijo-Karasuma shop; same rule as 山福 はなれ and いも松');

// ================================================================ カレーとカレーパン 野原屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034957/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyotofield.com/noharaya.html';
  const H = day(['11:30', '15:00']);
  put({
    id: 'kyoto_noharaya_curry_pan', name: 'カレーとカレーパン 野原屋 (Noharaya)', category: 'OMNI',
    lat: 35.005146, lng: 135.760629, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: fried curry bread, katsu and curry roux; a Guinness curry (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: keema curries and katsu (reviews).',
    hours_raw: 'Lunch 11:30–15:00 Tuesday–Saturday; closed Monday and Sunday (Tabelog). At night the room runs as a bar (June 2025). Curry bread can be taken away (June 2025). Cards accepted (Tabelog). 60 seats; non-smoking (Tabelog). Karasuma-Nishiki Building 2F, 3 minutes from Hankyu Karasuma (Tabelog). Opened 15 September 2020 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma, by Nishiki',
    cuisine: 'Curry and curry-bread lunch shop, a collaboration of the Irish PUB field (Kyoto’s first Irish pub, since 2000) and 後藤パン工房 (official site) · combination curry ¥1,060 with Guinness curry and sweet keema, katsu +¥410 (December 2025); regular plate with salad and two keema curries about ¥1,300, pineapple topping (May 2026) · freshly fried curry bread with a thin, crisp crust and fruity keema; curry doria; katsu-curry sandwich (2025)',
    website: SITE, gmaps: gm('カレーとカレーパン 野原屋 京都'), menu_url: SITE,
    notes: "[Curry · Karasuma by Nishiki, Guinness curry and curry bread] A daytime curry counter that turns into a bar at night: Guinness curry and sweet keema combinations from ¥1,060, and curry bread fried to order with a crisp shell. Lunch Tuesday–Saturday.",
    chef_bio: { chef_name: null, roles: ['Not named'], origin: null,
      background: 'A curry and curry-bread shop run with the Irish PUB field — which calls itself Kyoto’s first Irish pub, opened in January 2000 — in collaboration with 後藤パン工房 (official site). Opened in September 2020 (Tabelog).',
      philosophy: null,
      specialty: 'Guinness curry; fried curry bread.',
      anecdotes: [
        { text: 'A June 2025 visitor had freshly fried curry bread with a drink set at the bar counter.', source: R + 'B508493905/' },
        { text: 'A May 2026 office worker, a “curry refugee” from the company canteen, ordered Guinness katsu curry with a large rice.', source: R + 'B528199125/' },
      ],
      japanese_sources_summary: '公式サイト: カレーとカレーパンの店 野原屋、野原屋「field×後藤パン工房」のコラボ店、Irish PUB field は2000年1月に開店した京都で初めてのアイリッシュパブ。食べログ: カレーとカレーパン 野原屋、カレー・パン、京都市中京区元法然寺町683 烏丸錦ビル2F、火〜土 11:30〜15:00、月・日定休、カード可、60席、禁煙、2020年9月15日オープン。口コミ (2022〜2026年、英語): 昼はカレーとカレーパン、夜はバー、揚げたてのカレーパン (薄くサクッとした生地、フルーティーなキーマ)、持ち帰りも、カレードリア、カツカレーサンド、あいがけカレー1,060円 (ギネスカレーと甘いキーマ)、カツ+410円、サラダとキーマ2種のレギュラー1,300円ほど、パイナップルのトッピング。',
      confidence: 'low', sources: [SITE, 'https://kyotofield.com/', TB, R + 'B508493905/', R + 'B518242940/', R + 'B528199125/', R + 'B528208002/'] },
    cultural_comfort: { level: 'none_needed', note: 'Order at the counter; curry bread to take away.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区元法然寺町683 烏丸錦ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.005146, 135.760525), offset ~9.5m to clear おにぎりはつき (kyoto_onigiri_hatsuki, 1F of the same building, 0.1m); cross-checked: GSI 京都府京都市中京区元法然寺町683番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518242940/'],
    price_note: 'Prices from a December 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Combination curry (Guinness curry and sweet keema)', '¥1,060', 'Curry', 'no', 'no', 'December 2025.', 'combo'),
      it('', '', 'Katsu topping', '¥410', 'Curry', 'no', 'no', '', 'katsu'),
      it('', '', 'Fried curry bread', '', 'Bread', 'no', 'no', 'To take away too.', 'currypan'),
    ] }, {
    cuisine: 'アイリッシュパブ field と後藤パン工房のコラボのカレーとカレーパンの昼の店 (公式サイト)・ギネスカレーと甘いキーマのあいがけ1,060円、カツは410円追加 (2025年12月)、サラダとキーマ2種のレギュラー1,300円ほど、パイナップルのトッピング (2026年5月)・揚げたての薄くサクッとしたカレーパン、フルーティーなキーマ、カレードリア、カツカレーサンド (2025年)',
    neighborhood: '烏丸、錦の近く',
    gf_detail: 'グルテンフリー不可。揚げたカレーパン、カツ、カレーのルウ、ギネスカレー (口コミ)。',
    vegan_detail: 'ヴィーガン不可。キーマカレーとカツ (口コミ)。',
    notes: '[カレー・烏丸の錦近く、ギネスカレーとカレーパン] 昼はカレー、夜はバーになる店。ギネスカレーと甘いキーマのあいがけは1,060円から、注文してから揚げるサクサクのカレーパン。ランチは火〜土。',
  });
}

// ================================================================ 焼肉スタミナ山
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041923/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '24:00']);
  put({
    id: 'kyoto_yakiniku_stamina_yama', name: '焼肉スタミナ山 (Yakiniku Stamina Yama)', category: 'OMNI',
    lat: 35.009941017870446, lng: 135.7725529504034, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakiniku with tare and salt, a sukiyaki course dish and cold noodles to finish; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant (reviews).',
    hours_raw: '11:30–14:00 and 17:00–24:00 Monday, Wednesday–Sunday and holidays (Tabelog); Tuesday is not stated. Staff grill the meat at the table (2026 reviews). Cards (incl. UnionPay) and e-money (Tabelog). 40 seats at tables for 4 and 6; heated tobacco only, outside the front (Tabelog). One minute from Keihan Sanjo (Tabelog; May 2026). Opened 19 October 2024 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo Keihan',
    cuisine: 'Wagyu yakiniku grilled at the table by the staff (2026 reviews) · Stamina Yama course ¥8,000: salted yukhoe, seared lean wagyu tataki, kimchi and namul, the signature wagyu lean steak, sukiyaki-style beef, cold noodles and ice cream (April–June 2026) · à la carte from lunch to dinner: harami, salt yukhoe, lean tataki (2026)',
    website: null, gmaps: gm('焼肉スタミナ山 三条'), menu_url: TB,
    notes: "[Yakiniku · Keihan Sanjo, staff-grilled wagyu] A lively yakiniku room a minute from Sanjo station where the staff grill everything for you: the ¥8,000 Stamina Yama course runs from salted yukhoe through thick wagyu lean steak and sukiyaki beef to cold noodles. Lunch too.",
    chef_bio: { chef_name: null, roles: ['Not named'], origin: null,
      background: 'Opened in October 2024 (Tabelog). Reviewers (2026) describe energetic, friendly staff who grill every piece at the table, meat bought through the shop’s own channels, and a stated aim to be “the best yakiniku place in my history”.',
      philosophy: 'To be “the best yakiniku place in my history”, with high-quality meat at good value (June 2026 review).',
      specialty: 'Wagyu lean steak; salted yukhoe.',
      anecdotes: [
        { text: 'A May 2026 diner found the salted yukhoe nothing like the usual sweet kind.', source: R + 'B527828684/' },
        { text: 'A June 2026 guest praised a staff member for the careful grilling and generous service.', source: R + 'B530413402/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉スタミナ山、焼肉・ホルモン・居酒屋、京都市左京区法林寺門前町36-3、月・水〜日・祝日 11:30〜14:00、17:00〜0:00、カード (銀聯も)・電子マネー可、40席 (4人卓7、6人卓2)、加熱式たばこは店頭で、2024年10月19日オープン。口コミ (2026年、英語): 京阪三条駅から1分、スタミナ山コース8,000円 (塩ユッケ、赤身のたたき、キムチ、ナムル、和牛赤身ステーキ、すき焼き、冷麺、アイス)、スタッフが目の前で焼いてくれる、元気で気さくなスタッフ、独自のルートの肉、ランチから夜までアラカルトも。',
      confidence: 'low', sources: [TB, R + 'B525860537/', R + 'B527828684/', R + 'B527957048/', R + 'B529019546/', R + 'B530066857/', R + 'B530413402/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff grill for you; tables for 4–6.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区法林寺門前町36-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.009941, 135.772553); cross-checked: GSI 京都府京都市左京区法林寺門前町36番地 (lot) 50m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529019546/'],
    price_note: 'Course price from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Stamina Yama course', '¥8,000', 'Courses', 'ask', 'no', '', 'course'),
      it('', '', 'Salted yukhoe', '', 'À la carte', 'ask', 'no', '', 'yukhoe'),
    ] }, {
    cuisine: 'スタッフが卓で焼く和牛の焼肉 (2026年の口コミ)・スタミナ山コース8,000円、塩ユッケ、和牛赤身のたたき、キムチとナムル、名物の和牛赤身ステーキ、すき焼き風の牛肉、冷麺、アイス (2026年4〜6月)・昼から夜までアラカルトも、ハラミ、塩ユッケ、赤身のたたき (2026年)',
    neighborhood: '三条京阪',
    gf_detail: '要確認。たれと塩の焼肉、コースのすき焼き、締めの冷麺。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉店 (口コミ)。',
    notes: '[焼肉・三条京阪、スタッフが焼く和牛] 三条駅から1分のにぎやかな焼肉店。肉はすべてスタッフが焼いてくれる。8,000円のスタミナ山コースは塩ユッケから厚い和牛赤身ステーキ、すき焼き、冷麺まで。ランチもあり。',
  });
}

// ================================================================ はらぺこ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26010927/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '17:00']);
  put({
    id: 'kyoto_harapeko_udon_wakatake', name: 'はらぺこ (Harapeko)', category: 'OMNI',
    lat: 35.00823644787244, lng: 135.77540501038416, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat udon and a fried offal dish (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: udon in dashi with beef, tendon or egg; fried offal (reviews).',
    hours_raw: '12:00–17:00 Tuesday–Sunday; closed Monday (Tabelog). Cash only — no cards, e-money or QR (Tabelog). Horumon yoshoku can be taken away (May 2025). On Hanamikoji south of Sanjo, at the north end of Gion (Tabelog; March 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Hanamikoji, south of Sanjo',
    cuisine: 'Neighbourhood udon diner with thin, soft noodles and a rich broth (2025 reviews) · suji udon ¥600; egg-drop udon ¥550; meat udon; curry udon; tanuki udon (2025–2026) · horumon yoshoku ¥300 — boiled then fried offal with a sweet sauce, to eat in or take away (March and May 2025)',
    website: null, gmaps: gm('はらぺこ 花見小路 うどん'), menu_url: TB,
    notes: "[Udon · Hanamikoji south of Sanjo, a cash-only town diner] A homely udon diner on Hanamikoji run with Kansai-auntie warmth: cheap bowls of suji or egg-drop udon (¥550–600) and an oddity, “horumon yoshoku” — fried offal in sweet sauce for ¥300. Cash only; afternoons, closed Monday.",
    chef_bio: { chef_name: null, roles: ['Not named'], origin: null,
      background: 'A long-running udon diner reviewed since 2011 (Tabelog). Reviewers (2025–2026) describe a town eatery with chatty, friendly staff and local regulars.',
      philosophy: null,
      specialty: 'Udon; horumon yoshoku.',
      anecdotes: [
        { text: 'A May 2025 first-timer spotted horumon yoshoku on the back of the menu and ordered it with suji udon.', source: R + 'B506810246/' },
        { text: 'A March 2025 weekday lunch of egg-drop udon came with a crisp plate of horumon yoshoku.', source: R + 'B507130574/' },
        { text: 'A June 2025 late-lunch guest felt the friendly Kansai-auntie atmosphere.', source: R + 'B508072999/' },
      ],
      japanese_sources_summary: '食べログ: はらぺこ、うどん、京都市東山区花見小路通三条下る若竹町414、火〜日 12:00〜17:00、月曜定休、カード・電子マネー・QR決済不可。口コミ (2011〜2026年、英語): 町の食堂、細くやわらかいうどんとおいしい出汁、すじうどん600円、玉子とじうどん550円、肉うどん、カレーうどん、たぬきうどん、ほるもん洋食300円 (ゆでてから揚げたホルモンに甘いソース、持ち帰りも)、気さくな関西のおばちゃんの雰囲気、地元の常連。',
      confidence: 'low', sources: [TB, R + 'B499780646/', R + 'B506810246/', R + 'B507130574/', R + 'B508072999/', R + 'B523794716/', R + 'B523803603/'] },
    cultural_comfort: { level: 'japanese', note: 'Cash only; casual town diner.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区花見小路通三条下る若竹町414',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026. The other Tabelog listing named はらぺこ (26043942, 竹屋町麩屋町) is a different shop.' },
    pin_source: `Tabelog ${TB} (35.008236, 135.775405); cross-checked: GSI 京都府京都市東山区若竹町414番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506810246/', R + 'B507130574/'],
    price_note: 'Prices from March and May 2025 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Suji udon', '¥600', 'Udon', 'no', 'no', 'May 2025.', 'suji'),
      it('', '', 'Egg-drop udon', '¥550', 'Udon', 'no', 'no', 'March 2025.', 'tamagotoji'),
      it('ほるもん洋食', '', 'Horumon yoshoku (fried offal, sweet sauce)', '¥300', 'Sides', 'no', 'no', 'Also to take away.', 'horumon'),
    ] }, {
    cuisine: '細くやわらかい麺とこくのある出汁の町のうどんの食堂 (2025年の口コミ)・すじうどん600円、玉子とじうどん550円、肉うどん、カレーうどん、たぬきうどん (2025〜2026年)・ゆでてから揚げたホルモンに甘いソースのほるもん洋食300円、店内でも持ち帰りでも (2025年3月、5月)',
    neighborhood: '花見小路、三条の南',
    gf_detail: 'グルテンフリー不可。小麦のうどんと揚げたホルモン (口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛肉、すじ、卵の出汁のうどん、揚げたホルモン (口コミ)。',
    notes: '[うどん・花見小路の三条南、現金のみの町の食堂] 関西のおばちゃんのあたたかさのある花見小路のうどん屋。すじうどんや玉子とじうどん (550〜600円) と、甘いソースの揚げたホルモン「ほるもん洋食」(300円)。現金のみ、昼から夕方、月曜休み。',
  });
}

// ================================================================ 歳時記 年神
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26025153/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyotowashoku-toshigami.com/';
  const H = day(['12:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_saijiki_toshigami', name: '歳時記 年神 (Saijiki Toshigami)', category: 'OMNI',
    lat: 35.00181247787715, lng: 135.77737059031793, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto cuisine with dashi and soy, tempura, and Western touches such as gratin; no gluten information is published (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based Japanese cooking with anago, hamo, fugu, crab and fish (official site).',
    hours_raw: 'Lunch 12:00–15:00 (last order 14:00) and dinner 17:00–23:00, last order 20:30 for courses (official site; Tabelog), Tuesday–Sunday and holidays (Tabelog); Monday is not stated. Courses must be booked the day before — lunch by 18:00, dinner by 22:00 (official site). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). 26 seats: a 10-seat L-shaped counter facing the owner and 16 upstairs; non-smoking (Tabelog; official site; February 2026). On Tsukimi-cho along Higashioji (“Todai Road” in a June 2025 review), about 5 minutes from Yasaka Shrine (Tabelog; June 2025). Opened 12 September 2014 (official site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashiyama, Tsukimi-cho near Yasaka Shrine',
    cuisine: 'Seasonal Kyoto cuisine built around pairing with sake, by an owner trained at well-known Kyoto ryotei (official site) · lunch: obanzai sets with grilled fish ¥1,850, seasonal tempura ¥1,960, sashimi ¥2,180, a choice of two ¥2,950; domestic eel ¥5,500; wagyu steak ¥6,600; lunch course ¥5,500 (official site) · dinner: seasonal kaiseki ¥7,700 of eight dishes (official site); sake pairing courses of seven small pours (June 2025; February 2026) · specialities: Densuke anago; hamo in summer, fugu and crab in winter; Western touches such as potato salad with cream cheese, gratin of seasonal vegetables, sake-lees ice cream and house pudding (official site) · Makicolle wines (official site)',
    website: SITE, gmaps: gm('歳時記 年神 京都'), menu_url: SITE + 'course/',
    notes: "[Kyoto cuisine · Higashiyama near Yasaka Shrine, sake pairing] A small wood-lined restaurant near Yasaka Shrine where the owner, trained at well-known Kyoto ryotei, pairs seasonal dishes — Densuke anago, hamo, fugu — with small pours of sake. Obanzai lunch sets from ¥1,850; dinner kaiseki ¥7,700; book the day before.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (店主), not named'], origin: null,
      background: 'Opened in September 2014 (official site). The owner honed skills for many years at well-known Kyoto ryotei and restaurants and goes to the central market every day to choose the fish (official site); reviewers enjoy the owner’s stories at the L-shaped counter (February 2026).',
      philosophy: 'Pairing Japanese food and sake, with sake chosen to drink with the meal (official site).',
      specialty: 'Sake pairing; Densuke anago.',
      anecdotes: [
        { text: 'A June 2025 daytime-drinking pairing ran to seven sakes in small sips, with fried hamo and warabi in the soup.', source: R + 'B508382497/' },
        { text: 'A February 2026 couple on the seven-dish pairing course chatted with the chef and other guests at the counter.', source: R + 'B523270654/' },
      ],
      japanese_sources_summary: '公式サイト: 歳時記 年神、京懐石と日本酒、テーマは「日本酒とお料理のペアリング」、和食一筋の店主、京都の有名料亭やレストランで長年腕を磨いた、毎日中央市場で仕入れ、名物の伝助穴子、夏は鱧、冬はふぐ・蟹、クリームチーズ入りのポテトサラダ、旬野菜のグラタン、酒粕アイス、自家製プリン、マキコレワイン、木を使った店内、店主正面のカウンター、昼限定コース5,500円 (2名から、前日18時までに予約)、焼き魚とおばんざい定食1,850円、季節の天ぷらとおばんざい定食1,960円、お造りとおばんざいの定食2,180円、ぜいたく定食2,950円、国産鰻の蒲焼き定食5,500円、和牛ステーキ定食6,600円、夜は季節の会席7,700円 (8品、前日22時までに予約)、来店12:00〜15:00 (L.O.14:00)、17:00〜23:00 (L.O.20:30)、2014年9月12日開店。食べログ: 歳時記 年神、日本料理・海鮮、京都市東山区月見町6、火〜日・祝日 12:00〜15:00、17:00〜23:00、カード可、電子マネー・QR決済不可、26席 (1階カウンター10、2階16)、禁煙。口コミ (2018〜2026年、英語): 7種の日本酒を少しずつのペアリング、鱧とわらびの椀、八寸、土鍋ご飯、店主の話が楽しい、L字のカウンター。',
      confidence: 'medium', sources: [SITE, SITE + 'course/', SITE + 'about/', TB, R + 'B508382497/', R + 'B511480459/', R + 'B523050792/', R + 'B523270654/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book courses the day before; site in English.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区月見町6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (posts to October 2026) and Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.001812, 135.777371); cross-checked: GSI 京都府京都市東山区月見町6番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'course/'],
    price_note: 'Prices from the official site (November 2026), tax included; may change.', last_checked: TODAY, items: [
      it('本日の焼き魚とおばんざい定食', '', 'Grilled fish and obanzai set (lunch)', '¥1,850', 'Lunch', 'ask', 'no', '', 'yakizakana'),
      it('季節の天ぷらとおばんざい定食', '', 'Seasonal tempura and obanzai set (lunch)', '¥1,960', 'Lunch', 'no', 'no', '', 'tempura'),
      it('お造りとおばんざいの定食', '', 'Sashimi and obanzai set (lunch)', '¥2,180', 'Lunch', 'ask', 'no', '', 'otsukuri'),
      it('国産鰻の蒲焼き定食', '', 'Domestic eel kabayaki set', '¥5,500', 'Lunch', 'ask', 'no', '', 'unagi'),
      it('季節の会席', '', 'Seasonal kaiseki, 8 dishes (dinner)', '¥7,700', 'Courses', 'ask', 'no', 'Book the day before.', 'kaiseki'),
    ] }, {
    cuisine: '京都の有名料亭で修業した店主の、日本酒とのペアリングを軸にした季節の和食 (公式サイト)・昼は焼き魚とおばんざいの定食1,850円、季節の天ぷら1,960円、お造り2,180円、ふたつ選べるぜいたく定食2,950円、国産鰻5,500円、和牛ステーキ6,600円、昼のコース5,500円 (公式サイト)・夜は8品の季節の会席7,700円 (公式サイト)、日本酒7種を少しずつのペアリングのコース (2025年6月、2026年2月)・名物の伝助穴子、夏は鱧、冬はふぐと蟹、クリームチーズのポテトサラダ、旬野菜のグラタン、酒粕アイス、自家製プリンなど洋の要素も (公式サイト)・マキコレワイン (公式サイト)',
    neighborhood: '東山、八坂神社近くの月見町',
    gf_detail: '要確認。出汁と醤油の京料理、天ぷら、グラタンなど洋の料理も。グルテンの情報は公開されていない (公式サイト)。',
    vegan_detail: 'ヴィーガン不可。穴子、鱧、ふぐ、蟹、魚と出汁の和食 (公式サイト)。',
    notes: '[和食・東山の八坂神社近く、日本酒のペアリング] 八坂神社近くの木の小さな店。京都の名料亭で修業した店主が、伝助穴子や鱧、ふぐなど季節の料理に少しずつの日本酒を合わせる。昼のおばんざい定食は1,850円から、夜の会席は7,700円、前日までに予約を。',
  });
}

save();
