// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 2.
//   + for bal meat (Italian meat bar with an 11-item appetizer platter, by Ueno Stn Asakusa exit, since 2017)
//   + 上海陽春麺坊 Shanghai Youshun Menbou (Shanghai/Chinese noodle-and-rice house, ¥900 lunch sets; cash only)
//   + 海鮮市場 八芳 上野店 Seafood Shijo Happou (290-seat self-serve one-person hot pot over Ameyoko, open to 05:00; opened June 2026)
//   + 食堂ボンド Shokudo Bond (14-seat sushi izakaya, torched pressed sushi; Higashi-Ueno, opened November 2025)
// Skipped: ハードロックカフェ 上野駅東京 13005549 (international chain); 北山珈琲店 13016499 (beans only, no drinks served).
// Chain check. for bal meat: one shop (official site forbalmeat.com names no sister shops). Shanghai Youshun Menbou: one
//   Tabelog listing, none found elsewhere. Happou: run by FANG DREAM COMPANY, which also runs the 銀座八芳 seafood buffet
//   (Toyo Keizai, 28 June 2026); this self-serve hot-pot format is described there as new, and this is the one 海鮮市場 八芳
//   listing found; kept (doubt noted). Shokudo Bond: one shop.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address (上野7-2-16, 東上野3-22-3, 上野4-7-8, 東上野5-17-8). The
//   nearest record to Shanghai Youshun Menbou is the hidden placeholder tokyo3__218 (麺巧 潮 上野製麺所, address_ja
//   "東京都台東区東上野3-22-2 クレアツィオーネ上野 1F"), a different shop at a different street number, 12 m away.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-2');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13005549', 'international chain: Hard Rock Cafe (ハードロックカフェ 上野駅東京, inside atré Ueno).');
skip('13016499', 'not serving: 北山珈琲店 sells coffee beans only — Tabelog remarks "Only selling beans for a while"; reviews from December 2024 to March 2025 say drinks are no longer served (B490937038, B501598860, B502466639). Revisit if the café reopens.');

// ================================================================ for bal meat
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13205483/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://forbalmeat.com';
  const W = day(['17:30', '22:30']); const F = day(['17:30', '23:30']);
  put({
    id: 'tokyo_for_bal_meat_ueno', name: 'for bal meat', category: 'OMNI',
    lat: 35.713059, lng: 139.777941, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The official site says courses can be arranged around allergies ("アレルギーやご予算に応じたコースをご案内いたします"), and grilled steaks, carpaccio and caprese are on the menu, but nothing is described as gluten-free; pasta and pizza are central to the courses.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog\'s listing ticks "vegetarian options", and the appetizer platter includes ratatouille, herb-marinated olives and house pickles, with a green salad on the menu; everything else is meat, fish or cheese, and no vegan dish is named.',
    hours_raw: 'Mon–Thu 17:30–22:30; Fri–Sat 17:30–23:30; closed Sundays and holidays, though it may open on a holiday that falls on a Friday or Saturday, and can be hired on Sundays and holidays (Tabelog). The official site (©2021) gives slightly different hours. Reservations taken; changes by the day before, same-day changes are charged. 50 table seats plus a 4-seat counter; private hire up to 80 standing. Non-smoking, with a smoking room inside. Cards, e-money, PayPay and d Barai. Children welcome, with a kids\' menu. English menu. Opened 9 February 2017 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 7-chōme, ground floor of サウナ・カプセルホテル北欧 — 2 min from JR Ueno Stn Asakusa exit; 3 min from Ueno Stn exit 9 (Ginza and Hibiya lines)',
    cuisine: 'Italian meat bar (Tabelog menu, October 2026, tax included) · appetizers from a list of 11 — liver pâté, potato salad with wine-stewed beef, ratatouille, herb olives, pickles, pork ham, corn terrine, scallop and leek jelly, pâté de campagne, fig and almond cheese dip, sweet potato and rum-raisin terrine — one ¥480, 3 ¥980, 5 ¥1,580, 7 ¥1,980, all 11 ¥2,480 · A5 black wagyu fillet 110 g ¥4,980; three-meat platter ¥2,980; black wagyu grill 100 g ¥1,880; sirloin cap 100 g ¥1,480; lamb top sirloin 200 g ¥2,980; duck confit ¥1,780; beef tongue stewed five days in red wine ¥1,880 · caprese ¥880, fish carpaccio from ¥980 · carbonara and other pasta · wine by the glass from ¥650 (Tabelog), over 50 wines · courses with all-you-can-drink from ¥6,000; December Christmas courses ¥11,000–13,000',
    website: SITE, gmaps: gm('for bal meat 上野7-2-16'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian · Ueno, a lively meat bar off the main street] A big, cheerful Italian bar on the ground floor of a sauna-and-capsule hotel two minutes from the Asakusa exit of JR Ueno Station, open since 2017. The house favourite is the appetizer platter, picked from eleven kinds (homemade liver pâté, potato salad with wine-stewed beef, ratatouille, corn terrine and more), then move to grilled meat: black wagyu by the 100 g, an A5 wagyu fillet, lamb, duck confit, or a three-meat platter at ¥2,980. The chef is a certified sommelier (Tabelog), and the official site says the chefs trained in French and Italian cooking; over 50 wines, with glasses from ¥650. Portions are generous (leftovers can be taken home, July 2026), staff are upbeat, and birthday surprises come with music. Friday nights fill with bookings (May 2026), and all-you-can-drink party courses start at ¥6,000. Closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 9 February 2017 (Tabelog)', background: 'Per Tabelog\'s listing (corporate member), the chef is a certified sommelier, and the dishes are by chefs with experience in Italian and French cuisine; the official site says the chef trained in French and Italian cooking ("フレンチとイタリアンで修業を重ねたシェフ"). No source names the chef or the operator.', philosophy: '"A cheerful hidden Italian restaurant for adults located in the back alleys of Ueno" (Tabelog).', specialty: 'Appetizer platter of up to 11 kinds; grilled black wagyu.',
      anecdotes: [
        { text: '"The potato salad appetizer, which includes meat, was exquisite. I often order the assorted platter of three types of meat, as it\'s reasonably priced." — April 2026, fourth visit.', source: R + 'B477911471/' },
        { text: '"It was a Friday night, and the place was almost fully booked with reservation guests. I noticed some walk-in customers had to leave." — May 2026.', source: R + 'B529440540/' },
        { text: '"It seems that any leftover food can be taken away… The portion of the steak was quite generous." — July 2026, girls\' party plan.', source: R + 'B531996596/' },
      ],
      japanese_sources_summary: '公式サイト (forbalmeat.com、©2021): フレンチとイタリアンで修業を重ねたシェフ、アレルギーやご予算に応じたコースを案内、コース5,000円〜8,500円、日曜・祝日休み (貸切や結婚式二次会は日曜も営業)。食べログ (店舗会員): 上野7-2-16 サウナ・カプセルホテル北欧 1F、JR上野駅浅草口から徒歩2分、月〜木17:30〜22:30、金土17:30〜23:30、日祝休み、50席とカウンター4席、店内に喫煙室、カード・電子マネー・PayPay 可、子ども可、英語メニュー、2017年2月9日オープン、シェフはソムリエの資格を持つ、ワイン50種以上、グラスワイン650円から、11種から選べる前菜盛り合わせ (1種480円〜11種2,480円)、A5黒毛和牛フィレ110g 4,980円、肉3種盛り2,980円、黒毛和牛グリル100g 1,880円、飲み放題付きコース6,000円から。口コミ(2026年4月〜8月): 肉入りのポテトサラダ、3種の肉の盛り合わせ、店長のすすめる赤ワイン、カプレーゼ、11種の前菜、黒毛和牛の塊肉、金曜の夜は予約でほぼ満席、カルボナーラ、量が多く残りは持ち帰れる、誕生日のサプライズ、アヒージョ、スパークリングワイン。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', SITE, R + 'B477911471/', R + 'B525940851/', R + 'B529440540/', R + 'B531996596/', R + 'B532059856/', R + 'B532337634/', R + 'B533706830/', R + 'B533732303/', R + 'B534942706/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu; lively and busy on Friday nights — book.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Official site: courses arranged around allergies and budget on request ("アレルギーやご予算に応じたコースをご案内いたします").'] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野7-2-16 サウナ・カプセルホテル北欧 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing (menu updated 8 October 2026, December 2026 courses posted); reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野七丁目2番16号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', TB],
    price_note: 'Prices from the Tabelog menu (updated 8 October 2026, tax included).', last_checked: TODAY, items: [
      it('', '', 'Appetizer platter, all 11 kinds', '¥2,480', 'Appetizers', 'no', 'no', 'Tabelog menu; one kind ¥480, 3 ¥980, 5 ¥1,580, 7 ¥1,980.', 'antipasti_11'),
      it('', '', 'A5 black wagyu fillet grill, 110 g', '¥4,980', 'Meat', 'ask', 'no', 'Tabelog menu; with fondue and mustard sauce.', 'a5_fillet'),
      it('', '', 'Three-meat platter', '¥2,980', 'Meat', 'ask', 'no', 'Tabelog menu.', 'meat_3'),
      it('', '', 'Black wagyu grill, 100 g', '¥1,880', 'Meat', 'ask', 'no', 'Tabelog menu; 200 g ¥3,380.', 'wagyu_100'),
      it('', '', 'Beef tongue stewed in red wine, with Parmesan', '¥1,880', 'Meat', 'ask', 'no', 'Tabelog menu.', 'tongue_stew'),
      it('', '', 'Caprese', '¥880', 'Cold dishes', 'ask', 'no', 'Tabelog menu.', 'caprese'),
      it('', '', 'Green salad (S)', '¥680', 'Salad', 'ask', 'ask', 'Tabelog menu; yuzu-pepper dressing; L ¥980.', 'green_salad'),
    ] }, {
    cuisine: 'イタリアンの肉バル (食べログのメニュー、2026年10月、税込み)・11種から選ぶ前菜: レバーパテ、牛肉のワイン煮込み入りポテトサラダ、ラタトゥイユ、ハーブのオリーブ、ピクルス、豚のハム、とうもろこしのテリーヌ、帆立と長ねぎのジュレ、パテ・ド・カンパーニュ、いちじくとアーモンドのチーズディップ、さつまいもとラムレーズンのテリーヌ。1種480円、3種980円、5種1,580円、7種1,980円、11種2,480円・A5黒毛和牛フィレ110g 4,980円、肉3種盛り2,980円、黒毛和牛グリル100g 1,880円、サーロインキャップ100g 1,480円、仔羊のトップサーロイン200g 2,980円、鴨のコンフィ1,780円、5日間煮込んだ牛タンの赤ワイン煮1,880円・カプレーゼ880円、魚のカルパッチョ980円から・カルボナーラなどのパスタ・グラスワイン650円から (食べログ)、ワイン50種以上・飲み放題付きコース6,000円から、12月のクリスマスコース11,000〜13,000円',
    neighborhood: '上野七丁目、サウナ・カプセルホテル北欧の1階。JR上野駅浅草口から徒歩2分、銀座線・日比谷線上野駅9番出口から徒歩3分',
    gf_detail: '要確認。公式サイトにはアレルギーに合わせたコースを案内するとあり、ステーキ、カルパッチョ、カプレーゼもあるが、グルテンフリーの説明はありません。コースはパスタとピザが中心。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」の印があり、前菜にはラタトゥイユ、ハーブのオリーブ、ピクルス、メニューにはグリーンサラダもあるが、ほかは肉、魚、チーズで、ヴィーガンの料理名は書かれていません。',
    notes: '[イタリアン・上野、大通りから外れたにぎやかな肉バル] JR上野駅浅草口から2分、サウナとカプセルホテルの建物の1階にある広くて明るいイタリアンのバルで、2017年から。人気は名物の前菜盛り合わせ (自家製レバーパテ、牛肉のワイン煮込み入りポテトサラダ、ラタトゥイユ、とうもろこしのテリーヌなど11種から選ぶ) で、そのあとグリルの肉へ。100g単位の黒毛和牛、A5和牛のフィレ、仔羊、鴨のコンフィ、2,980円の肉3種盛り。シェフはソムリエの資格を持ち (食べログ)、公式サイトによればフレンチとイタリアンで修業したシェフ。ワインは50種以上、グラスは650円から。量が多く (残りは持ち帰れる、2026年7月)、スタッフは明るく、誕生日のサプライズは音楽付き。金曜の夜は予約で埋まる (2026年5月)。飲み放題付きの宴会コースは6,000円から。日曜・祝日休み。',
  });
}

// ================================================================ 上海陽春麺坊
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13097322/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:30'], ['17:00', '23:00']); const S = day(['11:30', '14:30'], ['17:00', '22:00']);
  put({
    id: 'tokyo_shanghai_youshun_menbou_higashiueno', name: '上海陽春麺坊 (Shanghai Youshun Menbou)', category: 'OMNI',
    lat: 35.711078, lng: 139.779001, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a noodle house (ramen, dandan noodles, fried noodles, mapo yakisoba) with pan-fried gyoza, kara-age and soy-braised dishes; the fried rice and clay-pot rice are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The menu has a clay-pot "temple vegetable" rice, Shanghai New Year shojin dishes, a yuba vegetable roll, wheat gluten with wood-ear mushroom, smacked cucumber and an eight-treasure vegetable stir-fry, but stocks and sauces are not described; most dishes use pork, chicken or seafood.',
    hours_raw: 'Mon–Fri 11:30–14:30 and 17:00–23:00 (food last order 22:30); Sat 11:30–14:30 and 17:00–22:00 (food last order 21:30); closed Sundays (open to groups of 15 or more by arrangement), Mondays that are holidays, and 31 December–4 January (Tabelog). Cash only (no cards, e-money or QR). A ¥440 charge per table in the evening (お通し代, Tabelog). 30 table seats, semi-private rooms; smoking allowed, but all seats non-smoking at lunch — an October 2026 diner left early because of smoke at night. Menu in Traditional and Simplified Chinese. A June 2026 diner found it open by 11:10.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashi-Ueno 3-chōme, 津多屋第2ビル 1F, between Ueno and Inaricho — 3 min from Ueno Stn (Hibiya Line); 5 min from JR Ueno Stn Asakusa or Hirokoji exit and from Inaricho Stn',
    cuisine: 'Local Shanghai-style Chinese, with spare ribs lightly sweetened with rock sugar and mapo tofu as signatures (Tabelog) · lunch sets ¥900 with fried rice or a main plus half ramen, pickles and almond jelly, large rice free (April and October 2026) · dandan noodles with sesame sauce ¥950 (+¥100 large, June 2026); Chinese soba ¥850 (April 2026) · menu (Tabelog, October 2025): scallion ramen ¥715, hot and sour noodles, Sichuan dandan, tanmen, jajangmyeon ¥880, duck braised ramen ¥1,320, shark-fin ramen ¥3,080, mapo dishes ¥935–1,045, clay-pot rice ¥1,078 · winged pan-fried gyoza, deep-fried yuba rolls, sweet and sour pork · five Shaoxing wines, highball ¥280 (July 2026) · all-you-can-drink courses ¥4,400 and ¥5,500; Shanghai crab course ¥7,000 in season',
    website: null, gmaps: gm('上海陽春麺坊 東上野3-22-3'), menu_url: TB + 'dtlmenu/',
    notes: "[Chinese · Higashi-Ueno, Shanghai home cooking and ¥900 lunches] A local Chinese restaurant between Ueno and Inaricho, run with a Chinese chef (July 2026), busy at lunch with office workers and locals. The ¥900 lunch sets bring fried rice or a main dish with a half bowl of shoyu ramen, pickled mustard greens and almond jelly, with cold oolong in patterned teapots on the table. The kitchen's signatures are spare ribs lightly sweetened with rock sugar and mapo tofu (also over fried rice, noodles or crisp yakisoba); there are light dandan noodles, winged pan-fried gyoza, deep-fried yuba rolls and over twenty noodle and rice dishes. At night it's a cheap Chinese izakaya with five Shaoxing wines and ¥280 highballs; smoking is allowed in the evening (an October 2026 diner left early because of it). A June 2026 diner found staff and customers all Chinese. Cash only; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'A corporate-member Tabelog listing; a July 2026 review says the food is local Chinese cooking by a Chinese chef. No source names the chef or owner, or gives an opening date.', philosophy: null, specialty: 'Spare ribs with rock sugar; mapo tofu; lunch sets.',
      anecdotes: [
        { text: '"With dishes like fried rice, rice bowls, main courses, and noodle dishes, we also got a decent-sized ramen as a side, along with almond tofu—all for just JPY 900." — April 2026, Saturday lunch.', source: R + 'B526789036/' },
        { text: '"I was drawn in by the JPY 280 highball. This place features local Chinese cuisine by a Chinese chef." — July 2026.', source: R + 'B532430463/' },
        { text: '"The dish featured curly noodles that were crispy on the surface, topped with Mapo tofu… However, the smoke from cigarettes filled the air." — October 2026, after 21:30.', source: R + 'B538482819/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 上海陽春麺坊、東上野3-22-3 津多屋第2ビル 1F、日比谷線上野駅から徒歩3分、稲荷町駅から326m、月〜金11:30〜14:30・17:00〜23:00、土11:30〜14:30・17:00〜22:00、日曜休み (15名以上は相談)、年末年始休み、現金のみ、お通し代440円 (1テーブルにつき)、30席、半個室、喫煙可 (ランチは全席禁煙)、中国語のメニュー、看板は氷砂糖で甘みをつけたスペアリブと麻婆豆腐、紹興酒5種、飲み放題付きコース4,400円・5,500円、上海蟹のコース7,000円。メニュー (2025年10月): ねぎラーメン715円、坦々麺、タンメン880円、鴨の醤油煮込みラーメン1,320円、ふかひれラーメン3,080円、麻婆の料理935〜1,045円、土鍋ご飯1,078円、精進料理、湯葉の野菜巻き、麩ときくらげ。口コミ(2026年2月〜10月): 軽めの坦々麺と半チャーハン、角煮チャーハンと半ラーメン、豚肉ときくらげの卵炒めの定食、ランチセット900円 (チャーハンと半ラーメン、杏仁豆腐)、中華そば850円、羽根つき焼き餃子、湯葉の揚げ巻き、芝麻醤の坦々麺950円、店員も客も中国の人だったという声、ハイボール280円、中国人の料理人、酢豚、麻婆焼きそば、夜はたばこの煙。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B522106436/', R + 'B525060034/', R + 'B525902704/', R + 'B526789036/', R + 'B528721756/', R + 'B530125396/', R + 'B532430463/', R + 'B532847649/', R + 'B536694148/', R + 'B538482819/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch sets are shown on a board outside; Tabelog lists a menu in Chinese; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区東上野3-22-3 津多屋第2ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野三丁目22番3号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526789036/', R + 'B530125396/', TB + 'dtlmenu/'],
    price_note: 'Lunch prices from 2026 reviews; other prices from the Tabelog menu (updated 3 October 2025, tax included).', last_checked: TODAY, items: [
      it('', '', 'Lunch set: fried rice or main dish with half ramen', '¥900', 'Lunch', 'no', 'no', 'April and October 2026 reviews.', 'lunch_set'),
      it('', '', 'Dandan noodles with sesame sauce', '¥950', 'Noodles', 'no', 'no', 'June 2026; large +¥100.', 'dandan'),
      it('', '', 'Chinese soba', '¥850', 'Noodles', 'no', 'no', 'April 2026 review (Tabelog menu, 2025: ¥880).', 'chuka_soba'),
      it('', '', 'Scallion ramen (Youshun men)', '¥715', 'Noodles', 'no', 'no', 'Tabelog menu, 2025.', 'youshun_men'),
      it('', '', 'Clay-pot temple vegetable rice', '¥1,078', 'Rice', 'ask', 'ask', 'Tabelog menu, 2025.', 'temple_veg_rice'),
      it('', '', 'Mapo tofu', '¥935', 'Mapo', 'ask', 'no', 'Tabelog menu, 2025.', 'mapo_tofu'),
    ] }, {
    cuisine: '上海の家庭料理風の町中華。看板は氷砂糖で甘みをつけたスペアリブと麻婆豆腐 (食べログ)・ランチセット900円: チャーハンか主菜に半ラーメン、からし菜の漬物、杏仁豆腐、ご飯の大盛り無料 (2026年4月・10月)・芝麻醤の坦々麺950円 (大盛り+100円、2026年6月)、中華そば850円 (2026年4月)・メニュー (食べログ、2025年10月): ねぎラーメン715円、酸辣湯麺、四川坦々麺、タンメン、ジャージャー麺880円、鴨の醤油煮込みラーメン1,320円、ふかひれラーメン3,080円、麻婆の料理935〜1,045円、土鍋ご飯1,078円・羽根つき焼き餃子、湯葉の揚げ巻き、酢豚・紹興酒5種、ハイボール280円 (2026年7月)・飲み放題付きコース4,400円・5,500円、季節の上海蟹のコース7,000円',
    neighborhood: '東上野三丁目、津多屋第2ビル 1F、上野と稲荷町の間。日比谷線上野駅から徒歩3分、JR上野駅浅草口・広小路口と稲荷町駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。麺の店 (ラーメン、坦々麺、焼きそば、麻婆焼きそば) で、焼き餃子、唐揚げ、醤油の煮込みも。チャーハンや土鍋ご飯の中身は書かれていません。',
    vegan_detail: '要確認。土鍋の精進風の野菜ご飯、上海の正月の精進料理、湯葉の野菜巻き、麩ときくらげ、たたききゅうり、八宝菜風の野菜炒めがメニューにあるが、スープやたれの中身は書かれていません。ほとんどの料理は豚、鶏、魚介を使う。',
    notes: '[中華・東上野、上海の家庭料理と900円のランチ] 上野と稲荷町の間にある町の中華料理店で、中国人の料理人の店 (2026年7月)。昼は会社員や近所の人でにぎわう。900円のランチセットはチャーハンか主菜に醤油の半ラーメン、からし菜の漬物、杏仁豆腐が付き、テーブルには柄入りの急須で冷たい烏龍茶。看板は氷砂糖で甘みをつけたスペアリブと麻婆豆腐 (チャーハン、麺、カリッと焼いた焼きそばにかけても)。軽めの坦々麺、羽根つき焼き餃子、湯葉の揚げ巻き、20種以上の麺とご飯もの。夜は紹興酒5種と280円のハイボールの安い中華居酒屋で、夜はたばこが吸える (2026年10月には煙で早めに店を出た人も)。2026年6月には店員も客もみな中国の人だったという口コミも。現金のみ、日曜休み。',
  });
}

// ================================================================ 海鮮市場 八芳 上野店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13321581/'; const R = TB + 'dtlrvwlst/';
  const TK = 'https://toyokeizai.net/articles/-/949147';
  const D = day(['11:00', '05:00']);
  put({
    id: 'tokyo_kaisen_ichiba_happou_ueno', name: '海鮮市場 八芳 上野店 (Seafood Shijo Happou)', category: 'OMNI',
    lat: 35.709892, lng: 139.774529, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog\'s listing ticks "gluten-free options", and you pick your own ingredients (seafood, meat, vegetables, mushrooms) for a one-person pot, but none of the 13 soups or the sauce bar is described as gluten-free; one soup is sukiyaki-style and noodles, fried bread and dumplings sit on the same counters.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog\'s listing ticks "vegan options", and the soups include a special mushroom soup and a tomato soup with vegetables, tofu and yuba dishes on the counters, but no soup is described as plant-based; several are chicken, beef-bone, pork-bone or clam stocks.',
    hours_raw: 'Daily 11:00–05:00 (last order 04:30), open all year; on the third Wednesday of each month it opens at 18:00 for building maintenance (Tabelog). Reservations for seats taken. Pay per plate: soup ¥500, sauce bar ¥330, plates ¥300–600 (Tabelog menu, prices before tax on some lines); October 2026 diners spent about ¥5,000–8,000 each. 290 seats with private rooms for 4 to 20; non-smoking, smoking area outside. Cards, PayPay, Alipay and WeChat Pay; no e-money. Children welcome, kids\' menu. Menus in English, Chinese and Korean, and staff speaking English, Chinese and Korean (Tabelog). Opened 15 June 2026 (Tabelog; Toyo Keizai).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 4-chōme, アメ横センタービル 2F, in Ameyoko — 3 min from JR Ueno Stn Hirokoji or Shinobazu exit; 5 min from JR Okachimachi Stn',
    cuisine: 'Market-style self-serve hot pot: pick a soup and fill your own one-person pot from counters of live crab, shrimp, abalone, oysters, shellfish, wagyu and other meats, mushrooms, vegetables, skewers and noodles (Tabelog; reviews) · 13 soups at ¥500 each, among them spicy Sichuan beef tallow, tomato, mushroom, hot and sour, fish maw and chicken collagen, rice porridge, sukiyaki-style, Hua Diao wine chicken paitan, beef bone, pork bone, tom yum kung, kombu and clam dashi, Korean jjigae · sauce bar ¥330 with refills · plates ¥300–600, some luxuries such as live lobster and crab priced higher · Chinese small plates from ¥300 (smacked cucumber, spicy yuba, cumin lamb skewers, garlic scallops and oysters, egg tarts) · grilled squid and garlic shrimp · self-serve drinks',
    website: null, gmaps: gm('海鮮市場 八芳 上野店 アメ横センタービル'), menu_url: TB + 'dtlmenu/',
    notes: "[Hot pot · Ameyoko, a 290-seat self-serve seafood market open till 5 am] Upstairs in a building in Ameyoko, a vast room laid out like a seafood market: you choose one of 13 soups for your own small pot, then walk the counters and pick plates of live crab, shrimp, abalone, oysters, wagyu, mushrooms, vegetables and Chinese small plates, priced per plate from about ¥300, like conveyor-belt sushi. Crab can be steamed for you and squid and shrimp grilled. The operator, which runs the 銀座八芳 seafood buffet in Ginza, opened it in June 2026 and calls the self-serve shabu-shabu format a first in Japan (Toyo Keizai). Diners in October 2026 enjoyed choosing but warned the plates add up fast (around ¥8,000 each with drinks), praised attentive staff who explain the sauces, and found the room lively and full of Chinese diners even on weekdays. Open 11:00–05:00 every day.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 June 2026 (Tabelog; Toyo Keizai, 28 June 2026)', background: 'Run by FANG DREAM COMPANY, the operator of 海鮮ブッフェダイニング 銀座八芳, a seafood buffet in Ginza; Toyo Keizai describes the company as founded by a former Chinese international student and this self-serve shabu-shabu format as its new, "Japan-first" concept (article of 28 June 2026). No chef is named.', philosophy: null, specialty: 'Self-serve one-person hot pot with live seafood.',
      anecdotes: [
        { text: '"This is a hot pot restaurant with a system similar to conveyor belt sushi, where you pick up plates and settle the bill at the end… If you try various dishes and order some drinks, it will likely cost around JPY 8,000." — October 2026.', source: R + 'B537268232/' },
        { text: '"I was also pleased to find that I could choose the hot pot soup for a reasonable price of JPY 550… I chose crab this time. It was steamed right in front of me." — October 2026.', source: R + 'B537532433/' },
        { text: '"The restaurant is packed even on weekdays. The place is filled with Chinese patrons, making you feel like you\'re on a trip!" — October 2026.', source: R + 'B538271834/' },
      ],
      japanese_sources_summary: '東洋経済オンライン (2026年6月28日): 6月15日、アメ横センタービルに「海鮮市場 八芳」がオープン、コンセプトは「セルフスタイルしゃぶしゃぶ」、「海鮮ブッフェダイニング 銀座八芳」の運営元 FANG DREAM COMPANY の新業態、元中国人留学生が立ち上げた企業。食べログ (店舗会員): 上野4-7-8 アメ横センタービル 2F、JR上野駅広小路口・不忍口から徒歩3分、毎日11:00〜翌5:00 (L.O.4:30)、年中無休、毎月第3水曜は18:00から、290席、4〜20名の個室、禁煙 (外に喫煙所)、カード・PayPay・Alipay・WeChat Pay 可、子ども可、英語・中国語・韓国語のメニューとスタッフ、2026年6月15日オープン、スープは13種で500円、たれのコーナー330円、1皿300〜600円。口コミ(2026年10月): 蟹、海老、牡蠣、鮑、肉と野菜、回転寿司のように皿を取って最後に会計、飲み物も入れて1人約8,000円、スープ550円、蟹はその場で蒸してくれる、焼きイカ、ガーリックシュリンプ、Hua Diao wine の鶏白湯、スタッフが親切にたれの食べ方を教えてくれる、平日も満席で中国の客が多い、ボトルも自分で取る。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', TK, R + 'B537168584/', R + 'B537268232/', R + 'B537272666/', R + 'B537532433/', R + 'B537643532/', R + 'B537676761/', R + 'B537691459/', R + 'B537815533/', R + 'B538271834/', R + 'B538368815/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists menus in English, Chinese and Korean and staff who speak English, Chinese and Korean; staff explain the system.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野4-7-8 アメ横センタービル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing (menu updated August 2026); Toyo Keizai article of 28 June 2026; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野四丁目7番8号 (go) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', TB, R + 'B537532433/'],
    price_note: 'Prices from the Tabelog menu (updated 26 August 2026; tax included on the menu page, though the listing quotes soup and plates before tax). An October 2026 diner paid ¥550 for the soup.', last_checked: TODAY, items: [
      it('', '', 'Hot-pot soup (13 kinds)', '¥500', 'Hot pot', 'ask', 'ask', 'Tabelog menu; ¥550 in an October 2026 review.', 'soup'),
      it('', '', 'Sauce bar, with refills', '¥330', 'Hot pot', 'ask', 'ask', 'Tabelog menu.', 'sauce_bar'),
      it('', '', 'Ingredient plates', '¥300–600', 'Hot pot', 'ask', 'ask', 'Tabelog listing and menu; live lobster and crab cost more.', 'plates'),
      it('', '', 'Smacked cucumber', '¥300', 'Small plates', 'ask', 'ask', 'Tabelog menu.', 'cucumber'),
      it('', '', 'Cumin lamb skewers', '¥500', 'Small plates', 'ask', 'no', 'Tabelog menu.', 'cumin_lamb'),
      it('', '', 'Grilled live oysters with garlic and glass noodles', '¥600', 'Small plates', 'ask', 'no', 'Tabelog menu.', 'garlic_oyster'),
    ] }, {
    cuisine: '市場のようなセルフ式の鍋。スープを選び、活きた蟹、海老、鮑、牡蠣、貝、和牛などの肉、きのこ、野菜、串、麺の並ぶコーナーから自分で取って1人用の鍋に (食べログ、口コミ)・スープは13種で各500円: 四川の牛脂の辛いスープ、トマト、きのこ、酸辣、魚の浮き袋と鶏のコラーゲン、お粥風、すき焼き風、Hua Diao wine の鶏白湯、牛骨、豚骨、トムヤムクン、昆布とあさりのだし、韓国のチゲ・たれのコーナー330円 (おかわり自由)・1皿300〜600円、活きたロブスターや蟹などはそれ以上・300円からの中華の小皿 (たたききゅうり、辛い湯葉、羊のクミン串、帆立や牡蠣のガーリック焼き、エッグタルト)・焼きイカ、ガーリックシュリンプ・飲み物はセルフ',
    neighborhood: '上野四丁目、アメ横センタービル 2F。JR上野駅広小路口・不忍口から徒歩3分、JR御徒町駅から徒歩5分',
    gf_detail: '要確認。食べログには「グルテンフリーメニューあり」の印があり、具 (魚介、肉、野菜、きのこ) は自分で選べるが、13種のスープとたれにグルテンフリーの説明はありません。すき焼き風のスープもあり、麺、揚げパン、点心も同じコーナーに並ぶ。',
    vegan_detail: '要確認。食べログには「ヴィーガンメニューあり」の印があり、スープにはきのこやトマト、コーナーには野菜、豆腐、湯葉の料理もあるが、植物性と書かれたスープはありません。鶏、牛骨、豚骨、あさりのスープも多い。',
    notes: '[鍋・Ameyoko、朝5時まで開く290席のセルフ式の海鮮市場] Ameyoko のビルの2階、魚市場のように食材が並ぶ広い店。13種のスープから1つ選んで自分の小さな鍋にし、活きた蟹、海老、鮑、牡蠣、和牛、きのこ、野菜、中華の小皿をコーナーから取っていく。1皿約300円からの皿ごとの値段で、回転寿司のように最後に会計。蟹はその場で蒸してもらえ、イカや海老は焼いてくれる。銀座で海鮮ブッフェの銀座八芳を営む会社が2026年6月に開いた店で、セルフスタイルのしゃぶしゃぶは日本初の業態だという (東洋経済)。2026年10月の口コミでは選ぶのが楽しい一方、皿はすぐにかさむ (飲み物込みで1人約8,000円)、たれの食べ方を教えてくれる親切なスタッフ、平日も満席で中国の客が多くにぎやか。毎日11時から翌5時まで。',
  });
}

// ================================================================ 食堂ボンド
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13315567/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:30'], ['17:00', '21:00']);
  put({
    id: 'tokyo_shokudo_bond_higashiueno', name: '食堂ボンド (Shokudo Bond)', category: 'OMNI',
    lat: 35.713749, lng: 139.782878, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, nigiri and the seafood rice bowl may suit if soy sauce and sauces are swapped, but nothing is described as gluten-free; the pressed sushi comes with sauces and miso, and the menu has kara-age, tempura and croquettes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood izakaya; sets come with a fish-broth soup, and even the starters use cheese tofu, egg or fish.',
    hours_raw: 'Mon–Sat 11:30–14:30 (last order 14:00) and 17:00–21:00 (last order 20:45); closed Sundays (Tabelog). Reservations taken; lunch is often booked by overseas visitors, so book ahead (September 2026). 14 seats: a 10-seat counter and one table for four. Non-smoking. Cards, e-money and QR (PayPay and others). Children welcome, with a kids\' plate; one stroller at a time. English menu and English-speaking staff. Takeout. Opened 1 November 2025 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Ueno 5-chōme, street level next to a Maruetsu supermarket and facing the Taito Ward heated pool — 3 min from Inaricho Stn; 5 min from JR Ueno Stn Iriya exit',
    cuisine: 'Small sushi izakaya serving creative torched pressed sushi (oshizushi/battera) alongside Edomae nigiri, with sommelier-chosen wine and monthly sake (Tabelog) · signature Aburi REMIX: 6 pressed and 4 special nigiri, 10 pieces ¥4,000 (Tabelog menu, October 2026; ¥3,000 in January 2026) · pressed sushi of six pieces ¥1,400, such as Fuji salmon with homemade cream cheese and fig, or shrimp with tom yum sauce · special nigiri 8 pieces ¥4,000 (May 2026) · seafood rice bowl lunch with red-vinegar rice ¥1,600 (October 2026) · seasonal sashimi ¥1,400, homemade cheese tofu ¥600, kara-age ¥880, saikyo-miso fish collars ¥900, fish-broth soup ¥400 · kids\' plate ¥1,200 · a standing all-you-can-eat bluefin tuna event, 30 minutes for ¥3,900 (November 2026)',
    website: null, gmaps: gm('食堂ボンド 東上野5-17-8'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · Higashi-Ueno, creative pressed sushi at a small counter] A bright, wood-lined 14-seat sushi bar between Ueno and Inaricho, opened in November 2025, known for torched pressed sushi with unexpected toppings — Fuji salmon with homemade cream cheese and fig, shrimp with tom yum sauce — next to classic Edomae nigiri. The signature Aburi REMIX sets six pressed pieces beside four nigiri (¥4,000); reviewers in 2026 also praised the Toyosu tuna, sashimi and kara-age, while one October 2026 diner found six pieces for nearly ¥2,000 poor value and less traditional than hoped. Lunch adds a ¥1,600 seafood rice bowl with red-vinegar rice and fish soup. The staff speak good English, and many diners are overseas visitors, so lunch is often booked. Families are welcome, with a kids' plate. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 November 2025 (Tabelog)', background: 'A corporate-member Tabelog listing; an August 2026 review calls the fusion sushi the work of an experienced owner, and another August 2026 review says the owners are friendly. No source gives a name. The name stands for the bond between people, in the spirit of ichigo ichie (Tabelog).', philosophy: '"A place where people connect, embodying the spirit of \'Ichigo Ichie\'" (Tabelog).', specialty: 'Torched pressed sushi; Aburi REMIX.',
      anecdotes: [
        { text: '"The fusion sushi crafted by the experienced owner was quite a surprise. When I tried the shrimp, it had a Tom Yum flavor that caught me off guard (laughs)… The fatty tuna sourced from Toyosu was truly exceptional." — August 2026.', source: R + 'B534554189/' },
        { text: '"Next to me, there was a young foreign woman, and the staff\'s English explanations were excellent!" — October 2026, seafood rice bowl ¥1,600.', source: R + 'B537555671/' },
        { text: '"The price is JPY 3,900 per person, with drinks charged separately… After that, it becomes an all-you-can-eat affair." — November 2026, Hon-Maguro Festival.', source: R + 'B538474207/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 食堂ボンド、東上野5-17-8 1F、稲荷町駅から徒歩3分、上野駅入谷口から徒歩5分、月〜土11:30〜14:30 (L.O.14:00)・17:00〜21:00 (L.O.20:45)、日曜休み、14席 (カウンター10席、4名のボックス1)、禁煙、カード・電子マネー・QR可、子ども可、英語のメニューとスタッフ、テイクアウト、2025年11月1日オープン、創作の押し寿司と江戸前の握り、ソムリエが選ぶワインと月替わりの日本酒、「ボンド」は人と人がつながる一期一会の場。メニュー (2026年10月): Aburi REMIX 10貫4,000円、押し寿司6貫1,400円、刺身の盛り合わせ1,400円、自家製チーズ豆腐600円、唐揚げ880円、キッズプレート1,200円。口コミ(2026年1月〜11月): 炙り押し寿司、特上握り8貫4,000円、唐揚げは子どもに人気、英語が通じて海外の客が多い、トムヤム風味の海老、Toyosu のトロ、昼の海鮮丼1,600円 (赤酢の酢飯、魚のあら汁)、6貫で2,000円近くは割高という声、Hon-Maguro Festival (立ち食い30分3,900円)。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B521735856/', R + 'B530681271/', R + 'B530859945/', R + 'B531302728/', R + 'B534554189/', R + 'B536099339/', R + 'B537054556/', R + 'B537555671/', R + 'B538359225/', R + 'B538474207/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog; 2026 reviews); many overseas diners.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区東上野5-17-8 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing (menu updated 14 October 2026); reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野五丁目17番8号 (go) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B537555671/', R + 'B521735856/'],
    price_note: 'Prices from the Tabelog menu (updated 14 October 2026, tax included) and 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Aburi REMIX: 6 pressed and 4 special nigiri', '¥4,000', 'Sushi', 'ask', 'no', 'Tabelog menu; ¥3,000 in January 2026.', 'aburi_remix'),
      it('', '', 'Pressed sushi: Fuji salmon, homemade cream cheese and fig (6 pieces)', '¥1,400', 'Sushi', 'ask', 'no', 'Tabelog menu.', 'oshi_salmon'),
      it('', '', 'Pressed sushi: shrimp with tom yum sauce (6 pieces)', '¥1,400', 'Sushi', 'ask', 'no', 'Tabelog menu.', 'oshi_tomyum'),
      it('', '', 'Special nigiri, 8 pieces', '¥4,000', 'Sushi', 'ask', 'no', 'May 2026 review.', 'nigiri_8'),
      it('', '', 'Seafood rice bowl lunch with salad and fish soup', '¥1,600', 'Lunch', 'ask', 'no', 'October 2026 review.', 'kaisendon'),
      it('', '', 'Assorted seasonal sashimi', '¥1,400', 'Dishes', 'ask', 'no', 'Tabelog menu.', 'sashimi'),
      it('唐揚げ', '', 'Kara-age', '¥880', 'Dishes', 'no', 'no', 'Tabelog menu; January 2026 review.', 'karaage'),
    ] }, {
    cuisine: '創作の炙り押し寿司 (押し寿司・バッテラ) と江戸前の握りの小さな寿司居酒屋。ソムリエが選ぶワインと月替わりの日本酒 (食べログ)・看板の Aburi REMIX は押し寿司6貫と特選握り4貫の10貫で4,000円 (食べログのメニュー、2026年10月、2026年1月は3,000円)・6貫1,400円の押し寿司。たとえば自家製クリームチーズといちじくをのせた Fuji salmon、トムヤムのソースの海老・特上握り8貫4,000円 (2026年5月)・昼は赤酢の酢飯の海鮮丼1,600円 (2026年10月)・季節の刺身1,400円、自家製チーズ豆腐600円、唐揚げ880円、魚のかまの西京焼き900円、魚のだしの汁400円・キッズプレート1,200円・立ち食いで30分3,900円の本マグロの食べ放題のイベント (2026年11月)',
    neighborhood: '東上野五丁目、路面店、Maruetsu の隣で台東区の温水プールの前。稲荷町駅から徒歩3分、JR上野駅入谷口から徒歩5分',
    gf_detail: '要確認。刺身、握り、海鮮丼は醤油やたれを替えれば合うかもしれないが、グルテンフリーの説明はありません。押し寿司にはソースや味噌を使い、唐揚げ、天ぷら、コロッケもある。',
    vegan_detail: 'ヴィーガンではありません。寿司と魚介の居酒屋で、定食には魚のだしの汁が付き、前菜にもチーズ豆腐、卵、魚を使う。',
    notes: '[寿司・東上野、小さなカウンターの創作押し寿司] 上野と稲荷町の間、木の温かみのある14席の明るい寿司店で、2025年11月の開店。意外な具をのせた炙り押し寿司 (自家製クリームチーズといちじくの Fuji salmon、トムヤムのソースの海老など) と江戸前の握りが並ぶ。看板の Aburi REMIX は押し寿司6貫と握り4貫 (4,000円)。2026年の口コミではToyosu のトロ、刺身、唐揚げも好評だが、2026年10月には6貫で2,000円近くは割高で伝統的な味を期待していたという声も。昼は赤酢の酢飯の海鮮丼1,600円に魚の汁付き。スタッフの英語は上手で、海外からの客が多く昼は予約で埋まりがち。キッズプレートもあり家族連れも歓迎。日曜休み。',
  });
}

save();
