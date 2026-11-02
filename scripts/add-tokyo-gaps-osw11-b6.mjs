// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 6.
//   + 駄目な隣人 人形町店 Dame na Rinjin (9-seat ginger-shoyu ramen counter with wagyu sukiyaki rice) — no ramen block
//   + 紅菜館 Kousai Kan (back-alley machi-chuka with homemade egg noodles; cash only, smoking allowed)
//   + 焼鳥 角寿々 Yakitori Kado Suzu (Amakusa Daiou yakitori courses; opened December 2025)
//   + すし柿﨑 Sushi Kakizaki (8-seat omakase sushi counter run by a couple since 2008)
//   - skipped 13178823 よし梅 売店 and 13259609 人形町麻辣湯 (reasons in skip() below)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 8 ningyocho` (main repo, 2026-11-01): Dame na Rinjin 34 m
//   (genre Ramen, 9 seats), Kousai Kan 110 m (genre Ramen), then, after the two skips, Kado Suzu 119 m (20 seats) and
//   Kakizaki 121 m (8 seats).
//   Dedupe. None is in data/tokyo.json by name or address. Shared addresses: Kado Suzu is unit 1A of 日本橋芸者新道ビル
//   (1-5-10), the building of tokyo_sushi_kaminari_ningyocho ("…日本橋芸者新道ビル 1F") and tokyo_kisui_ningyocho
//   ("…日本橋芸者新道ビル 302"); its Tabelog point is the same as Kisui's (0.1 m apart), so its pin is block-level and moved
//   6 m east. Kousai Kan shares the lot number 2-7-11 with tokyo_kura_no_akari_ningyocho (address_ja
//   "東京都中央区日本橋人形町2-7-11"); pins 14 m apart.
//   Chain check. Dame na Rinjin: run by ZOT Co., Ltd., which per 2024–26 reviews runs other shops around Ningyocho (vegetable
//   cafés, a beer house, gyoza); no other Dame na Rinjin is in data. Kado Suzu, Kousai Kan, Kakizaki: single shops.
//   Ramen block for Dame na Rinjin left off: reviews source body, clarity, soy-sauce sharpness, noodle firmness and the
//   ginger aroma, but nothing about oiliness (brief LESSONS). Kousai Kan is a Chinese restaurant: cuisine `other`, no block.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13178823', 'よし梅 売店 (Yoshi Ume shop): no current sources — one review in 2025 (October 2025, critical) and none in 2026; Tabelog lists no hours; the official site yoshiume.jp answers 403; existence unverifiable');
skip('13259609', 'chain branch: 人形町麻辣湯 is a formal branch of 七宝麻辣湯 (October 2026 reviews), whose 60th shop opened in February 2026 (news.nissyoku.co.jp, 13 March 2026) — a rapidly expanding chain');

// ================================================================ 駄目な隣人 人形町店
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13255889/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'tokyo_dame_na_rinjin_ningyocho', name: '駄目な隣人 人形町店 (Dame na Rinjin Ningyocho)', category: 'OMNI',
    lat: 35.686277, lng: 139.78181, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: whole-wheat noodles in a soy-sauce broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu and egg on the bowls; the broth is described with bouillon (October 2026), and bonito flakes sit on the table.',
    hours_raw: 'Daily 11:00–23:00 (last order 22:30) (Tabelog). No reservations; queues at peak times (eight waiting after 21:00 on an October 2026 night). Order by marking a paper slip and pay first; PayPay only, no cards or e-money (Tabelog; 2026 reviews). 9 counter seats; non-smoking; children welcome; takeaway (Tabelog). Opened 8 February 2021 per Tabelog; an October 2026 review says 2022.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 3-7-13, 日本橋センチュリープラザ 1F — at Ningyocho Stn exit A5 (Hibiya Line, Toei Asakusa Line), 6 min from Suitengumae Stn',
    cuisine: 'Ginger-shoyu ramen made without additives (Tabelog; 2026 reviews) · REGULAR ¥950; PLUS with seasoned egg ¥1,150; SUPREME special ¥1,300 on the Tabelog menu (April 2025), ¥1,350 in October 2026 · thick or thin whole-wheat noodles from a noodle maker reviewers call Sugano (or Kanno) Seimenjo · green-pepper-oil mazesoba ¥1,050–1,300 · wagyu sukiyaki rice grilled to order, beef from a Ningyocho sukiyaki shop ¥550 (August and October 2026); SUPREME and sukiyaki rice set ¥1,900 (October 2026); clay-pot rice ¥200 · free on the table: raw eggs, nori, spicy garlic chives, bonito flakes, soy sauce, pepper (2026 reviews) · free large portion (April 2026)',
    website: TB, gmaps: gm('駄目な隣人 人形町'), menu_url: MENU,
    notes: "[Ramen · Ningyocho, ginger-shoyu ramen and wagyu sukiyaki rice at the station exit] A nine-seat counter at Ningyocho exit A5 with a curious name (\"bad neighbour\"), serving one thing well: a clear soy-sauce broth lifted by ginger, made without additives, with whole-wheat noodles thick or thin and rare loin and belly chashu (October 2026). Most diners add the sukiyaki rice, wagyu grilled to order and served over clay-pot rice, then help themselves to the free raw eggs, nori, bonito flakes and fiery garlic chives on the counter to make tamago-kake-gohan or a broth chazuke. One regular calls it an upgraded Showa-era Tokyo ramen; an October 2026 reviewer likened the broth to a fond de veau. You mark an order slip and prepay (PayPay accepted, no cards). Staff are mostly from overseas and many customers are too (August and October 2026). Open daily, 11:00–23:00, with queues at peak times.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Run by ZOT Co., Ltd. (October 2026 review); a January 2024 reviewer says the company runs other places around Ningyocho — vegetable cafés, a beer house and gyoza shops. The sukiyaki rice uses wagyu from a Ningyocho sukiyaki shop (Tabelog menu: "Hinoyama"; reviewers write "Hiyama" and "Nishiyama"). An October 2026 review is titled "Ramen created by a French chef". Opened 8 February 2021 (Tabelog); an October 2026 review gives 2022.',
      philosophy: 'Carefully selected ingredients, no additives (Tabelog; 2025–26 reviews).', specialty: 'Ginger-shoyu ramen; wagyu sukiyaki rice.',
      anecdotes: [
        { text: '"The clear broth has a refined soy sauce flavor. In short, it\'s an upgraded version of Showa-era Tokyo ramen." — October 2026, fifth visit.', source: R + 'B479301697/' },
        { text: '"A clear soy sauce broth with a refreshing ginger aroma." — October 2026, SUPREME and sukiyaki rice ¥1,900.', source: R + 'B537674609/' },
        { text: '"Even though it was past 9 PM, there were eight people waiting outside... It\'s clearly a popular spot." — October 2026, after a rakugo show.', source: R + 'B537765659/' },
      ],
      japanese_sources_summary: '食べログ: 駄目な隣人 人形町店、ラーメン、油そば、まぜそば、つけ麺、日本橋人形町3-7-13 日本橋センチュリープラザ 1F、人形町駅A5出口すぐ、毎日11:00〜23:00 (L.O.22:30)、予約不可、カード・電子マネー不可、PayPay可、9席 (カウンターのみ)、禁煙、子ども可、テイクアウト可、2021年2月8日オープン、無添加の生姜醤油ラーメン、全粒粉の麺 (太麺か細麺)、土鍋で炊いたご飯、卓上の生卵。メニュー (2025年4月): REGULAR 950円、PLUS 1,150円、SUPREME 1,300円、青唐辛子油そば、和牛の焼きすき焼きご飯550円。口コミ(2024年1月〜2026年10月): 澄んだ醤油スープに生姜の香り、レアのロースとバラのチャーシュー、生卵、海苔、ニラ、鰹節は無料、紙に書いて先に払う、スタッフの多くは海外の人、運営は ZOT、2026年10月に SUPREME とすき焼きご飯で1,900円、夜9時過ぎに8人待ち。',
      confidence: 'medium', sources: [TB, MENU, R + 'B478609979/', R + 'B479301697/', R + 'B537642172/', R + 'B537674609/', R + 'B537765659/', R + 'B537788683/', R + 'B538041943/', R + 'B538119283/', R + 'B538339331/', R + 'B538339705/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order slip with a short menu; staff mostly from overseas (2026 reviews); PayPay only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町3-7-13 日本橋センチュリープラザ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated January 2024–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686277, 139.781810); cross-checked: GSI 東京都中央区日本橋人形町三丁目7番13号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B537765659/', R + 'B538041943/', R + 'B538119283/'],
    price_note: 'Prices from the Tabelog menu (April 2025; may exclude tax) and 2025–26 reviews; SUPREME was ¥1,350 in October 2026.', last_checked: TODAY, items: [
      it('', '', 'REGULAR ginger shoyu ramen', '¥950', 'Ramen', 'no', 'no', 'Tabelog menu; October 2026.', 'regular'),
      it('', '', 'SUPREME special ginger shoyu ramen', '¥1,300', 'Ramen', 'no', 'no', 'Tabelog menu (2025); ¥1,350 in October 2026.', 'supreme'),
      it('', '', 'Green-pepper-oil mazesoba, REGULAR', '¥1,050', 'Mazesoba', 'no', 'no', 'Tabelog menu.', 'mazesoba'),
      it('', '', 'Wagyu grilled sukiyaki rice', '¥550', 'Rice', 'ask', 'no', 'Tabelog menu; August and October 2026.', 'sukiyaki_rice'),
      it('', '', 'SUPREME with grilled sukiyaki rice', '¥1,900', 'Sets', 'no', 'no', 'October 2026.', 'supreme_set'),
    ] }, {
    cuisine: '無添加の生姜醤油ラーメン (食べログ、2026年の口コミ)・REGULAR 950円、味玉の PLUS 1,150円、特製の SUPREME は食べログのメニュー (2025年4月) で1,300円、2026年10月には1,350円・太麺か細麺の全粒粉の麺、口コミでは Sugano (または Kanno) Seimenjo の麺・青唐辛子油のまぜそば1,050〜1,300円・注文ごとに焼く和牛のすき焼きご飯、牛肉は人形町のすき焼き店から550円 (2026年8月、10月)、SUPREME とすき焼きご飯のセット1,900円 (2026年10月)、土鍋ご飯200円・卓上は無料: 生卵、海苔、辛いニラ、鰹節、醤油、胡椒 (2026年の口コミ)・大盛り無料 (2026年4月)',
    neighborhood: '日本橋人形町3-7-13 日本橋センチュリープラザ 1F。人形町駅A5出口すぐ (日比谷線、都営浅草線)、水天宮前駅から徒歩6分',
    gf_detail: 'グルテンフリーではない: 醤油スープに全粒粉の麺。',
    vegan_detail: 'ヴィーガンではない: 丼にはチャーシューと卵、スープにはブイヨンが使われ (2026年10月)、卓上には鰹節。',
    notes: '[ラーメン・人形町、駅の出口すぐの生姜醤油ラーメンと和牛のすき焼きご飯] 人形町駅A5出口すぐ、変わった店名の9席のカウンター。生姜が香る澄んだ醤油スープを添加物なしで作り、全粒粉の太麺か細麺、レアのロースとバラのチャーシュー (2026年10月)。多くの客がすき焼きご飯を追加し、注文ごとに焼いた和牛を土鍋ご飯にのせ、カウンターの無料の生卵、海苔、鰹節、辛いニラで卵かけご飯やスープ茶漬けに。常連の一人は昭和の東京ラーメンの進化版と呼び、2026年10月の口コミはスープをフォン・ド・ヴォーのようと書く。注文は紙に印をつけて先払い (PayPay 可、カード不可)。スタッフも客も海外の人が多い (2026年8月、10月)。毎日11時〜23時、混む時間は行列。',
  });
}

// ================================================================ 紅菜館
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13050772/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:30', '22:00']);
  put({
    id: 'tokyo_kousai_kan_ningyocho', name: '紅菜館 (Kousai Kan)', category: 'OMNI',
    lat: 35.686611, lng: 139.78334, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat-and-egg noodles, gyoza and soy-sauce stir-fries; nothing on the menu is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: even the vegetable stir-fry with zha cai contains pork belly (March 2026), and the noodles contain egg.',
    hours_raw: 'Mon–Fri and the days before and after holidays 11:30–14:30 (last order 14:00) and 17:30–22:00 (last order 21:30); closed Sat, Sun and holidays (Tabelog). Reservations accepted (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 24 seats; tatami room upstairs, used when the ground floor fills (Tabelog; March 2026). Smoking allowed (Tabelog; a March 2026 diner warns non-smokers). No cover charge.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-7-11, 泰野戸部ビル 1F, in a back alley — 1 min from Ningyocho Stn exit A3',
    cuisine: 'Old-style Tokyo machi-chuka with a sign for homemade egg noodles (2025–26 reviews) · ramen and half fried rice set ¥920 (November 2025), ¥970 (October 2026); classic shoyu ramen with chashu, kamaboko and menma · umami soba with vegetables, pork and shrimp in a thick broth ¥900 (March 2026); crab-omelette noodles (January 2026); dan-dan noodles · shrimp fried rice ¥950; liver and garlic chives on rice ¥850; zha cai and vegetable stir-fry ¥700; vegetable soup; sauce yakisoba · gyoza with a cabbage-and-pork filling (2025–26 reviews) · bottled beer',
    website: TB, gmaps: gm('紅菜館 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Chinese · Ningyocho, a Showa-era back-alley chuka with homemade egg noodles] A long-established neighbourhood Chinese restaurant in a back alley behind Ningyocho station, where you can't see in from the street. Inside: manga magazines, the Sankei Shimbun, five tables and a tatami room upstairs (2025–26 reviews). The sign advertises homemade egg noodles, and diners like them smooth and chewy in a thick vegetable \"umami soba\" or a classic Tokyo shoyu ramen with half fried rice for under ¥1,000. Others come for juicy cabbage gyoza, shrimp fried rice (which sometimes sells out by evening) and sauce yakisoba. Reviewers find it comforting rather than exciting; one in March 2026 thought the ramen plain, and warns that smoking is allowed. Cash only; weekdays only.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Described as a long-established Chinese restaurant in Ningyocho (January 2026 review) with a sign boasting homemade egg noodles (March 2026). Gyoza filling is made in-house with bought wrappers (May 2026).',
      philosophy: null, specialty: 'Homemade egg noodles; gyoza; fried rice.',
      anecdotes: [
        { text: '"Of course, it has that classic style with manga magazines and the Sankei Shimbun available." — March 2026, sauce yakisoba.', source: R + 'B525533329/' },
        { text: '"The Umami Soba came with a thick broth filled with vegetables, pork, and shrimp, making it a great value ramen at JPY 900." — March 2026.', source: R + 'B524511979/' },
        { text: '"Notably, the restaurant allows smoking, which presents a challenge." — March 2026.', source: R + 'B524507795/' },
      ],
      japanese_sources_summary: '食べログ: 紅菜館、中華料理、ラーメン、日本橋人形町2-7-11 泰野戸部ビル 1F、人形町駅A3出口から徒歩1分、月〜金・祝前日・祝後日11:30〜14:30、17:30〜22:00、土日祝休み、予約可、カード・電子マネー・QR不可、24席、座敷、喫煙可、チャージなし。口コミ(2025年6月〜2026年10月、写真の見出しに「えびチャーハンのスープ」「半チャーハン」): 人形町の裏路地の町中華、自家製の玉子麺、ラーメンと半チャーハン920円・970円、Umami Soba 900円、蟹玉そば、えびチャーハン950円、ザーサイと野菜の炒め700円、餃子、ソース焼きそば、喫煙可に注意、昭和の雰囲気。',
      confidence: 'medium', sources: [TB, R + 'B491270417/', R + 'B508854732/', R + 'B513290736/', R + 'B516967803/', R + 'B520642900/', R + 'B524507795/', R + 'B524511979/', R + 'B525533329/', R + 'B528629381/', R + 'B537950770/'] },
    cultural_comfort: { level: 'japanese', note: 'An old-style Japanese menu on the wall; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-7-11 泰野戸部ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated June 2025–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686611, 139.783340); cross-checked: GSI 東京都中央区日本橋人形町二丁目7番11号 (go) 27m. Same lot number as Kura no Akari (tokyo_kura_no_akari_ningyocho, address_ja "東京都中央区日本橋人形町2-7-11"), 14 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B491270417/', R + 'B516967803/', R + 'B524511979/', R + 'B537950770/'],
    price_note: 'Prices from June 2025–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen and half fried rice', '¥970', 'Noodles', 'no', 'no', 'October 2026; ¥920 in November 2025.', 'ramen_han_chahan'),
      it('', '', 'Umami soba (vegetables, pork, shrimp in a thick broth)', '¥900', 'Noodles', 'no', 'no', 'March 2026.', 'umani_soba'),
      it('', '', 'Shrimp fried rice', '¥950', 'Rice', 'ask', 'no', 'March 2026.', 'ebi_chahan'),
      it('', '', 'Zha cai and vegetable stir-fry', '¥700', 'Dishes', 'ask', 'no', 'March 2026; with pork belly.', 'zhacai_itame'),
      it('', '', 'Liver and garlic chives on rice', '¥850', 'Rice', 'no', 'no', 'September 2025.', 'reba_nira'),
    ] }, {
    cuisine: '自家製の玉子麺の看板を出す昔ながらの東京の町中華 (2025〜26年の口コミ)・ラーメンと半チャーハンのセット920円 (2025年11月)、970円 (2026年10月)。チャーシュー、かまぼこ、メンマの醤油ラーメン・野菜、豚肉、海老のとろみスープの Umami Soba 900円 (2026年3月)、蟹玉そば (2026年1月)、担々麺・えびチャーハン950円、レバニラご飯850円、ザーサイと野菜の炒め700円、野菜スープ、ソース焼きそば・キャベツと豚肉の餃子 (2025〜26年の口コミ)・瓶ビール',
    neighborhood: '日本橋人形町2-7-11 泰野戸部ビル 1F、裏路地。人形町駅A3出口から徒歩1分',
    gf_detail: 'グルテンフリーではない: 自家製の小麦と卵の麺、餃子、醤油の炒め物。グルテンフリーと書かれた料理はない。',
    vegan_detail: 'ヴィーガンではない: ザーサイと野菜の炒めにも豚バラが入り (2026年3月)、麺には卵。',
    notes: '[中華・人形町、自家製の玉子麺の昭和の裏路地の町中華] 人形町駅の裏路地にある、外から中が見えない昔ながらの町中華。店内には漫画雑誌と Sankei Shimbun、テーブルが5つ、2階に座敷 (2025〜26年の口コミ)。看板は自家製の玉子麺で、つるつるでコシがあり、野菜たっぷりのとろみの「Umami Soba」や、東京らしい醤油ラーメンと半チャーハンのセットが1,000円以下。キャベツの多いジューシーな餃子、夜には売り切れることもあるえびチャーハン、ソース焼きそばを目当てにする人も。驚きより安心の味という声が多く、2026年3月にはラーメンが普通すぎるという声と、喫煙可なので注意という声も。現金のみ、平日のみ営業。',
  });
}

// ================================================================ 焼鳥 角寿々
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13315623/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kadosuzu.com/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'tokyo_yakitori_kado_suzu_ningyocho', name: '焼鳥 角寿々 (Yakitori Kado Suzu)', category: 'OMNI',
    lat: 35.685215, lng: 139.782092, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt-grilled skewers may suit, but courses include sauce-grilled thigh, a tapioca-starch "crystal" chicken, a baguette, wheat-gluten (nama-fu) dengaku, miso dressings and rice with sauce; nothing is called gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken courses; the vegetable dishes come between skewers in a chicken-based meal.',
    hours_raw: 'Daily 17:00–23:00 (last order food 22:00, drinks 22:30) (Tabelog); a September 2026 review lists irregular holidays. Courses booked ahead; families with children are asked to book by phone (Tabelog). Service charge 5% (Tabelog). Cards, e-money and QR; no cash (Tabelog; September 2026 review). 20 seats: 16 at the counter and a private room for 2–4 (¥4,000 room fee under four guests) (Tabelog). Non-smoking. Opened 4 December 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 1-5-10, 日本橋芸者新道ビル unit 1A, behind a purple noren in a narrow alley — 1 min from Ningyocho Stn exit A6, 4 min from Suitengumae Stn; Sushi Kaminari and Kisui share the building',
    cuisine: 'Yakitori courses of Amakusa Daiou chicken from Kumamoto, grilled over charcoal (Tabelog; 2026 reviews) · Kado course with six skewers, small dishes, a rice finish and chicken soup ¥7,200; Suzu course of 11 skewers ¥8,200 (Tabelog, tax included) · top Goku course ¥13,000 plus 5% (October 2026) · courses in 2026: pickled-ginger skewer and refillable grated daikon; Amakusa Daiou thigh with salt and with sauce; daki-mi (breast wrapped in skin) with sudachi; "crystal" chicken breast with plum; steamed vegetables with house miso; maru-hatsu with yuzu pepper; tsukune; seseri; chochin paste spread on baguette; finish of grilled breast and egg yolk over rice or eel tsukudani rice ball, milky chicken soup and tiramisu · Goku extras: tuna chanja on yuba, Tsushima chutoro skewer, Kumamoto wagyu, mugwort nama-fu dengaku, cheese skewer with Ningyocho honey · sake, wine and cocktails from a bartender on some days (Tabelog)',
    website: SITE, gmaps: gm('焼鳥 角寿々 人形町'), menu_url: null,
    notes: "[Yakitori · Ningyocho, Kumamoto's Amakusa Daiou chicken at a calm new counter] Opened in December 2025 behind a purple noren in a narrow Ningyocho alley, this black-toned modern Japanese counter grills Kumamoto's Amakusa Daiou chicken over charcoal. Dinner is a course from ¥7,200: a pickled-ginger skewer and daikon (refilled on request), then skewers that change cooking by cut. A thigh comes with salt and another with sauce, along with skin-wrapped breast with sudachi, a heart with yuzu pepper, and the chicken's \"chochin\" spread like butter on baguette. You finish with grilled breast and egg yolk over rice and a milky chicken soup. Diners in September and October 2026 praised the juiciness and the staff; a bartender mixes cocktails on some nights. No cash; 5% service.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 4 December 2025 (Tabelog). Tabelog\'s shop text: a space where Japanese and Western styles blend; courses of Kumamoto\'s local chicken Amakusa Daiou; three plans; on days the bartender is in, original cocktails not on the menu; locals welcome. A September 2026 reviewer notes the chicken is prepared on site and cooked differently by cut. Website kadosuzu.com (Tabelog).',
      philosophy: null, specialty: 'Amakusa Daiou yakitori courses.',
      anecdotes: [
        { text: '"What stood out the most was the \'Chouchin\' (chicken tail) served in a unique style, spread like butter on a baguette." — September 2026, Kado course ¥7,200.', source: R + 'B536509939/' },
        { text: '"The highlight was the cheese skewer, featuring scamorza and caciocavallo cheeses drizzled with olive oil and honey from \'HONEY MARU\' in Ningyocho." — October 2026, Goku course ¥13,000.', source: R + 'B537871494/' },
        { text: '"Although it just opened and its Tabelog rating isn\'t high yet, I realized that ratings can be misleading." — September 2026.', source: R + 'B537580650/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 焼鳥 角寿々、焼き鳥、串焼き、居酒屋、日本橋人形町1-5-10 日本橋芸者新道ビル 1A、人形町駅A6出口から徒歩1分、毎日17:00〜23:00、サービス料5％のみ、カード・電子マネー・QR可、20席 (カウンター16席、2〜4名の個室、4名未満は室料4,000円)、禁煙、2025年12月4日オープン、Kumamoto の地鶏「Amakusa Daiou」のコース、Kado コース7,200円、Suzu コース8,200円、バーテンダーのいる日はオリジナルカクテル、ホームページ kadosuzu.com。口コミ(2026年9月〜10月): 紫の暖簾、黒基調の和モダン、ガリの串とおかわりできる大根おろし、Amakusa Daiou のかしわ (塩とたれ)、だきみ、ちょうちんをバゲットに、まるはつの柚子胡椒、締めは胸肉と卵黄のご飯、鶏白湯スープ、ティラミス、Goku コース13,000円、現金不可、スタッフの対応が良い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B535720607/', R + 'B536208893/', R + 'B536509939/', R + 'B536645160/', R + 'B537004511/', R + 'B537580650/', R + 'B537871494/', R + 'B537927921/', R + 'B538037000/', R + 'B538304158/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses at the counter; staff explain each skewer (2026 reviews); cashless.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都中央区日本橋人形町1-5-10 日本橋芸者新道ビル 1A',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; opened December 2025; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB} gives 35.685215, 139.782026 — the same point as Kisui (tokyo_kisui_ningyocho, address_ja "東京都中央区日本橋人形町1-5-10 日本橋芸者新道ビル 302", 0.1 m away) in the building that also holds Sushi Kaminari (tokyo_sushi_kaminari_ningyocho, 1F, 13 m away). Block-level: pin moved 6 m east so the two are not stacked; GSI 東京都中央区日本橋人形町一丁目5番10号 (go) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537871494/', R + 'B536509939/'],
    price_note: 'Course prices from Tabelog set menus (tax included; read November 2026) and October 2026; 5% service charge on top.', last_checked: TODAY, items: [
      it('', '', 'Kado course: six skewers, small dishes, rice finish, soup', '¥7,200', 'Courses', 'ask', 'no', 'Tabelog; September–October 2026.', 'kado_course'),
      it('', '', 'Suzu course: 11 skewers', '¥8,200', 'Courses', 'ask', 'no', 'Tabelog; October 2026.', 'suzu_course'),
      it('', '', 'Goku course', '¥13,000', 'Courses', 'no', 'no', 'October 2026; includes wheat-gluten dengaku.', 'goku_course'),
    ] }, {
    cuisine: 'Kumamoto の Amakusa Daiou を炭火で焼く焼き鳥のコース (食べログ、2026年の口コミ)・串6本、一品、締めのご飯、スープの Kado コース7,200円、串11本の Suzu コース8,200円 (食べログ、税込み)・上の Goku コース13,000円と5% (2026年10月)・2026年のコース: ガリの串とおかわりできる大根おろし、Amakusa Daiou のかしわの塩とたれ、すだちで食べるだきみ、梅を添えたクリスタルチキン、自家製味噌の蒸し野菜、柚子胡椒のまるはつ、つくね、せせり、バゲットに塗るちょうちんのペースト、締めは胸肉と卵黄のご飯か鰻の佃煮の焼きおにぎり、鶏白湯スープ、ティラミス・Goku コースには湯葉と鮪のチャンジャ、Tsushima の中トロの串、Kumamoto の和牛、よもぎ生麩の田楽、人形町の HONEY MARU の蜂蜜をかけたチーズの串も・日本酒、ワイン、日によってバーテンダーのカクテル (食べログ)',
    neighborhood: '日本橋人形町1-5-10 日本橋芸者新道ビル 1A、細い路地の紫の暖簾。人形町駅A6出口から徒歩1分、水天宮前駅から徒歩4分。同じビルに鮨かみなりと汽素火',
    gf_detail: '要確認。塩焼きの串は合うかもしれないが、コースにはたれ焼きのもも、タピオカ粉のクリスタルチキン、バゲット、生麩の田楽、味噌のたれ、たれをかけるご飯もあり、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 鶏のコースで、野菜の料理は串の合間に出る。',
    notes: '[焼き鳥・人形町、Kumamoto の Amakusa Daiou の落ち着いた新しいカウンター] 2025年12月、人形町の細い路地の紫の暖簾の奥に開いた、黒を基調にした和モダンのカウンターで、Kumamoto の Amakusa Daiou を炭火で焼く。夜は7,200円からのコースで、ガリの串と大根おろし (頼めばおかわり) に始まり、部位ごとに焼き方を変える串: 塩とたれのかしわ、すだちのだきみ、柚子胡椒のハツ、バゲットにバターのように塗るちょうちん。締めは胸肉と卵黄のご飯と鶏白湯スープ。2026年9月と10月の客はジューシーさとスタッフを褒め、日によってバーテンダーがカクテルを作る。現金不可、サービス料5%。',
  });
}

// ================================================================ すし柿﨑
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13046908/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://sushi-kakizaki.com/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'tokyo_sushi_kakizaki_ningyocho', name: 'すし柿﨑 (Sushi Kakizaki)', category: 'OMNI',
    lat: 35.685993, lng: 139.783478, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. The shari is seasoned only with rice vinegar and salt (August and October 2026), and some fish is served with salt, but most pieces and small dishes use soy sauce, sweet simmering or miso, and a scallop tamagoyaki ends the course.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish omakase.',
    hours_raw: 'Mon–Sat 17:30–22:00; closed Sundays and holidays (Tabelog). Courses only; the special course must be booked three days ahead; one course per table (Tabelog). Cards; no e-money or QR (Tabelog). 8 seats at an L-shaped counter; table seats at the front not in use (October 2026); private hire for up to 20 (Tabelog). English menu (Tabelog). Non-smoking. Opened 3 February 2008 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-8-11, 友高ビル 1F, behind a blue noren in a back alley — 3 min from Ningyocho Stn, 5 min from Suitengumae Stn',
    cuisine: 'Edomae-style omakase from small dishes to nigiri (Tabelog set menus, tax included): nigiri-only course ¥19,800; omakase ¥24,200; special course ¥26,400 · signatures: a three-way tasting of wild domestic bluefin tuna — akami, chutoro, otoro — from Toyosu (Tabelog; reviews in 2026 name Sado or Hachinohe tuna); bafun and murasaki uni side by side; raw oysters with jalapeño Tabasco (Rikuzentakata, Akkeshi); tender simmered octopus; clam soup mid-course; scallop tamagoyaki · 2026 small dishes: hime-sazae, kazunoko, large Oomasaari boiled peanuts, sawara or sea bream with plum paste, iwa-mozuku, wild kanpachi with mustard soy, corn tofu, grilled sawara, water eggplant · shari of large, firm grains seasoned only with rice vinegar and salt (2026 reviews) · junmai sake chosen for sushi',
    website: SITE, gmaps: gm('すし柿﨑 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · Ningyocho, an 18-year-old back-alley counter run by a couple] Behind a blue noren in a Ningyocho back alley since 2008, an eight-seat L-shaped counter of plain wood and plaster walls run by the chef and the chef's wife (August 2026), whose warm, unfussy welcome many 2026 diners mention first. Per an October 2026 review, the owner once headed the sushi section of a luxury hotel. The omakase (¥24,200) opens with a run of small dishes — octopus simmered meltingly soft, corn tofu, raw oysters with a jalapeño Tabasco that surprises everyone — then nigiri on large, firm grains of rice seasoned only with vinegar and salt. Then come lean, medium and fatty bluefin side by side, bafun and murasaki uni together, kohada and red clam, a clam soup and a scallop tamagoyaki. Many regulars; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Head chef and owner (unnamed; "the chef and [the chef’s] wife welcomed me", August 2026 review; Tabelog: "the warm hospitality of our head chef and owner")'], origin: null,
      background: 'Opened 3 February 2008 (Tabelog); 18 years in Ningyocho by 2026 (reviews). Tabelog\'s shop text: domestically sourced natural bluefin from Toyosu (otoro, chutoro, akami); a comparison of bafun and murasaki uni; junmai sake for sushi; a cosy hideaway with plastered walls. An October 2026 review says the owner previously served as head chef of the sushi section of a luxury hotel.',
      philosophy: null, specialty: 'Three-cut bluefin tasting; two-uni comparison; oysters with jalapeño Tabasco.',
      anecdotes: [
        { text: '"The atmosphere is refined and calming, and the chef and [the chef\'s] wife welcomed me with warm smiles." — August 2026, ¥24,200 omakase.', source: R + 'B534278011/' },
        { text: '"The biggest surprise of the evening was the fresh oyster, served with a jalapeño Tabasco sauce—a surprising combination for a sushi restaurant!" — October 2026.', source: R + 'B538395503/' },
        { text: '"The rice was also carefully selected, using large grains with less stickiness. Finished with just rice vinegar and salt, it crumbled beautifully in my mouth." — October 2026.', source: R + 'B538395503/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): すし柿﨑、寿司、日本橋人形町2-8-11 友高ビル 1F、月〜土17:30〜22:00、日祝休み、カード可、電子マネー・QR不可、8席 (カウンター)、貸切20名まで、禁煙、英語メニュー、2008年2月3日オープン、豊洲の国産天然本鮪 (大トロ、中トロ、赤身)、馬糞雲丹と紫雲丹の食べ比べ、鮨に合う純米酒、漆喰の壁の隠れ家、大将とオーナーのもてなし、握りのみのコース19,800円、おまかせ24,200円、特別コース26,400円 (3日前までに予約)、ホームページ sushi-kakizaki.com。口コミ(2026年8月〜10月、写真の見出しに「雲丹の食べ比べ」「赤身」「中トロ」「大トロ」): 青い暖簾、L字のカウンター、柔らかい煮だこ、とうもろこし豆腐、生牡蠣にハラペーニョのタバスコ、鮪3種と雲丹2種、蛤のお椀、帆立の玉子焼き、米酢と塩だけのしゃり、店主はホテルの寿司の料理長だったという話も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B533772073/', R + 'B534278011/', R + 'B534790456/', R + 'B534955561/', R + 'B535389989/', R + 'B535868360/', R + 'B536968473/', R + 'B537227405/', R + 'B537644745/', R + 'B538395503/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); set courses at the counter; a relaxed welcome (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-8-11 友高ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB} (35.685993, 139.783478); cross-checked: GSI 東京都中央区日本橋人形町二丁目8番11号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535389989/'],
    price_note: 'Course prices from Tabelog set menus (tax included; read November 2026); the omakase was ¥24,200 in August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Nigiri-only course', '¥19,800', 'Courses', 'ask', 'no', 'Tabelog.', 'nigiri_course'),
      it('', '', 'Omakase course: small dishes and nigiri incl. three tunas and two uni', '¥24,200', 'Courses', 'ask', 'no', 'Tabelog; 2026 reviews.', 'omakase'),
      it('', '', 'Special course (book 3 days ahead)', '¥26,400', 'Courses', 'ask', 'no', 'Tabelog.', 'special'),
    ] }, {
    cuisine: '一品から握りまでの江戸前のおまかせ (食べログのコース、税込み): 握りのみのコース19,800円、おまかせ24,200円、特別コース26,400円・名物: 豊洲の国産天然本鮪の赤身、中トロ、大トロの食べ比べ (食べログ。2026年の口コミでは Sado や Hachinohe の鮪)、馬糞雲丹と紫雲丹を並べて、ハラペーニョのタバスコの生牡蠣 (Rikuzentakata、Akkeshi)、柔らかい煮だこ、途中の蛤のお椀、帆立の玉子焼き・2026年の一品: 姫さざえ、数の子、大粒の Oomasaari の茹で落花生、梅肉の鰆や鯛、岩もずく、天然の間八の辛子醤油、とうもろこし豆腐、鰆の焼き物、水茄子・米酢と塩だけで味付けした大粒で硬めのしゃり (2026年の口コミ)・鮨に合う純米酒',
    neighborhood: '日本橋人形町2-8-11 友高ビル 1F、裏路地の青い暖簾。人形町駅から徒歩3分、水天宮前駅から徒歩5分',
    gf_detail: '予約時に要確認。しゃりは米酢と塩だけ (2026年8月、10月) で、塩で出る魚もあるが、ほとんどの握りと一品は醤油、甘い煮物、味噌を使い、締めは帆立の玉子焼き。',
    vegan_detail: 'ヴィーガンではない: 魚介のおまかせ。',
    notes: '[鮨・人形町、夫婦で営む18年目の裏路地のカウンター] 2008年から人形町の裏路地の青い暖簾の奥にある、木のカウンターと漆喰の壁の8席のL字のカウンター。大将と奥さんが営み (2026年8月)、2026年の多くの客はまず気さくで温かいもてなしを挙げる。2026年10月の口コミによれば、店主は高級ホテルの寿司の料理長だった。おまかせ (24,200円) は一品から始まり、とろけるように柔らかい煮だこ、とうもろこし豆腐、誰もが驚くハラペーニョのタバスコの生牡蠣。握りは米酢と塩だけの大粒で硬めのしゃりで、赤身、中トロ、大トロを並べ、馬糞雲丹と紫雲丹を一緒に、こはだ、赤貝、蛤のお椀、帆立の玉子焼き。常連が多い。日曜休み。',
  });
}

save();
