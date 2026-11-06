// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 26.
//   Queue run from the osw2 worktree (coordinator 2026-11-05: run nothing from C:/pf/fkti-dining).
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + LOCANDA SENESE (couple-run Tuscan trattoria in a basement at Karasuma-Takoyakushi; since 2021)
//   - 三田製麺所 京都四条烏丸店 (26041779): chain — six 三田製麺所 branches in the Tabelog crawl alone (Kyoto and five in Osaka).
//   + 松涛カフェ KYOTO Shoto Cafe (chiffon-cake café in a machiya by Sanjo Keihan; since 2024) — the Kyoto branch of a Shibuya café; two shops
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + 京の鴨料理 北斎 Hokusai (Kyoto-duck house in Gion; here since 2022) — 株式会社北斎, single shop; 肉重 北斎 (中京区山崎町) and
//     肉重 北斎 心斎橋店 / すき焼き 北斎 (Tokyo) show no link to it (different addresses and genres, no shared operator found)
//   + 鉄板焼 葵 Teppanyaki Aoi (RIHGA Royal Hotel Kyoto’s teppanyaki) — the hotel’s own restaurant; no RIHGA record in data, so
//     drafted like Téori and SCALAE
//   None of the four drafted is in data/kyoto.json: grep by id, name (LOCANDA/セネーゼ, 松涛/Shoto, 北斎/Hokusai, 葵/Aoi, リーガ/RIHGA)
//   and address (手洗水町650, 新丸太町75-9, 弁財天町11, 松明町1) found none. 天天有 四条烏丸店 (26003259, next in core) is a same-concept
//   branch of kyr_tentenyu_honten and was not reached.
//   Service charges checked against Tabelog’s Japanese original: LOCANDA 「夜のみ500円(パン付き)」; 松涛カフェ 「無し」 (the English page
//   wrongly says a charge is added); 北斎 none listed; 葵 「サービス料15%」 (hotel site prices include tax and service).
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-26');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26041779', 'chain: 三田製麺所 has six branches in the Tabelog crawl alone (Kyoto 四条烏丸 and five in Osaka)');

// ================================================================ LOCANDA SENESE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26035935/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['12:00', '15:00'], ['18:00', '23:00']); const SU = day(['12:00', '15:00']);
  put({
    id: 'kyoto_locanda_senese', name: 'LOCANDA SENESE (ロカンダ セネーゼ)', category: 'OMNI',
    lat: 35.00584516786903, lng: 135.75992945037086, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Homemade pasta, focaccia, quiche and desserts; no gluten information is published (Tabelog; 2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plenty of Kyoto vegetables, but the menu centres on meat, fish and cheese; nothing vegan is marked (Tabelog; reviews).',
    hours_raw: 'Tuesday–Saturday lunch 12:00–15:00 (last order 14:30) and dinner 18:00–23:00 (last order 22:00); Sunday lunch 12:00–15:00; closed Monday (Tabelog). Bookings advised — lunch fills by noon (2024–2026 reviews). Dinner only: ¥500 per person including bread (Tabelog’s Japanese original: 「夜のみ500円(パン付き)」). 18 seats: 14 at tables and 4 at the counter; private hire for up to 20; non-smoking; English menu; children welcome, kids’ menu, stroller storage; BYO allowed; sommelier; cards (VISA, Master, JCB, AMEX, Diners) and PayPay, though mobile signal is weak in the basement (Tabelog; August 2024). Down a steep staircase with no elevator, in the basement of the Shijo Karasuma Star Building on Karasuma-dori south of Takoyakushi, 242 m from Karasuma Stn (Tabelog; March 2025). Opened 1 June 2021 (Tabelog).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Takoyakushi — 242 m from Karasuma Stn',
    cuisine: 'Tuscan cooking with Kyoto vegetables: hearty meat, homemade pasta (Tabelog official introduction) · pasta lunch with soup and focaccia ¥1,500 (April 2026; ¥1,400 before) · one-plate lunch of pasta, quiche or omelette and salad, with drink and dessert, ¥2,000 · pair or share sets of pasta and meat · e.g. Shogoin-turnip or squash potage, homemade tagliatelle with beef ragù, clam and zucchini celery genovese, Hiroshima wild-boar pappardelle, grilled beef with basil sauce, antipasti platter, tiramisu, gelato, apple tart (2024–2026 reviews)',
    website: null, gmaps: gm('LOCANDA SENESE 京都 烏丸'), menu_url: TB,
    notes: "[Italian · Karasuma-Takoyakushi, a couple's Tuscan basement] Down a steep stair off Karasuma-dori, a small, homely trattoria run by a couple, the chef having trained four years in Tuscany. Lunch is the bargain: potage, warm focaccia and a homemade pasta for about ¥1,500, or ¥2,000 with drink and dessert; share sets add a grilled meat. Dinner brings antipasti, wild-boar pappardelle and steaks. Book — it fills at noon. No elevator. Closed Monday; Sunday lunch only.",
    chef_bio: { chef_name: null, roles: ['Chef not named; run by a couple'], origin: null,
      background: 'Per Tabelog’s official introduction: run by a friendly couple; the chef trained for four years in Tuscany and pairs traditional Tuscan cooking with fresh, seasonal Kyoto vegetables. Opened 1 June 2021 (Tabelog).',
      philosophy: 'Per Tabelog’s official introduction: to recreate authentic Tuscan flavours faithfully with an abundance of seasonal Kyoto produce.',
      specialty: 'Homemade tagliatelle and pappardelle; grilled meat.',
      anecdotes: [
        { text: 'An April 2026 regular on a sixth visit noted the pasta lunch had gone up ¥100, to ¥1,500.', source: R + 'B463016549/' },
        { text: 'An August 2024 couple at a two-top were offered a larger four-seat table when one came free.', source: R + 'B490979735/' },
        { text: 'A March 2025 diner warned that the steep basement stairs may be hard for anyone with limited mobility.', source: R + 'B502893463/' },
      ],
      japanese_sources_summary: '食べログ: LOCANDA SENESE (ロカンダ セネーゼ)、イタリアン・ステーキ・パスタ、中京区烏丸通蛸薬師下ル手洗水町650 四条烏丸スタービル B1F、烏丸駅から242m、火〜土 12:00〜15:00 (L.O. 14:30)・18:00〜23:00 (L.O. 22:00)、日 12:00〜15:00、月曜定休、夜のみ500円 (パン付き)、18席 (テーブル14、カウンター4)、20名まで貸切可、禁煙、英語メニュー、子供可・キッズメニュー、持ち込み可、ソムリエ、カード・PayPay 可、エレベーターなし、2021年6月1日オープン。公式紹介: 仲の良い夫婦によるおもてなし、トスカーナで4年修業したシェフ、伝統のトスカーナ料理と新鮮な京野菜。口コミ (2024〜2026年、英語): パスタランチ1,500円、ドリンクとデザート付きのワンプレートランチ2,000円、シェアセット、自家製タリアテッレ、猪のパッパルデッレ、急な階段。',
      confidence: 'medium', sources: [TB, R + 'B461310746/', R + 'B463016549/', R + 'B490979735/', R + 'B492972734/', R + 'B502893463/', R + 'B503455342/', R + 'B503464033/', R + 'B515172707/', R + 'B517378098/', R + 'B520368390/', R + 'B531259288/', R + 'B534916685/'] },
    cultural_comfort: { level: 'english', note: 'English menu available (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区烏丸通蛸薬師下ル手洗水町650 四条烏丸スタービル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.005845, 135.759929); cross-checked: GSI 京都府京都市中京区手洗水町650番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B463016549/', R + 'B520368390/', R + 'B503464033/'],
    price_note: 'Lunch prices from November 2025–April 2026 reviews; dinner dishes from a March 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Pasta lunch with soup and focaccia', '¥1,500', 'Lunch', 'no', 'ask', 'April 2026.', 'pasta_lunch'),
      it('', '', 'One-plate lunch with drink and dessert', '¥2,000', 'Lunch', 'no', 'ask', '', 'one_plate_lunch'),
      it('', '', 'Share set of pasta and meat', '', 'Lunch', 'no', 'no', '', 'share_set'),
      it('', '', 'Pappardelle with wild-boar ragù', '', 'Dinner', 'no', 'no', '', 'boar_pappardelle'),
      it('', '', 'Dinner cover with bread', '¥500', 'Charge', 'no', 'ask', 'Dinner only.', 'cover'),
    ] }, {
    cuisine: '京野菜を使ったトスカーナ料理: しっかりした肉料理、自家製パスタ (食べログの公式紹介)・スープとフォカッチャ付きのパスタランチ1,500円 (2026年4月、以前は1,400円)・パスタ、キッシュかオムレツ、サラダのワンプレートランチ、ドリンクとデザート付き2,000円・パスタと肉のペアやシェアのセット・例: 聖護院かぶやかぼちゃのポタージュ、牛肉のラグーの自家製タリアテッレ、アサリとズッキーニのセロリのジェノベーゼ、広島の猪のパッパルデッレ、バジルソースの牛肉のグリル、前菜の盛り合わせ、ティラミス、ジェラート、りんごのタルト (2024〜2026年の口コミ)',
    neighborhood: '烏丸蛸薬師。烏丸駅から242m',
    gf_detail: '要確認。自家製パスタ、フォカッチャ、キッシュ、デザート。グルテンの情報は公開されていない (食べログ、2024〜2026年の口コミ)。',
    vegan_detail: '要確認。京野菜は多いが、肉、魚、チーズが中心。ヴィーガンの表示はない (食べログ、口コミ)。',
    notes: '[イタリアン・烏丸蛸薬師、夫婦の営むトスカーナの地下の店] 烏丸通から急な階段を下りた、夫婦が営む家庭的な小さなトラットリア。シェフはトスカーナで4年修業。お得なのは昼で、ポタージュ、温かいフォカッチャ、自家製パスタで1,500円ほど、ドリンクとデザート付きで2,000円。シェアのセットには肉のグリルも。夜は前菜、猪のパッパルデッレ、ステーキ。昼は正午に埋まるので予約を。エレベーターなし。月曜休み、日曜は昼のみ。',
  });
}

// ================================================================ 松涛カフェ KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26040645/'; const R = TB + 'dtlrvwlst/';
  const TU = day(['12:00', '18:00']); const SA = day(['11:30', '18:00']); const SU = day(['11:30', '17:30']);
  put({
    id: 'kyoto_shoto_cafe', name: '松涛カフェ KYOTO (Shoto Cafe KYOTO)', category: 'OMNI',
    lat: 35.01042980787035, lng: 135.77320488040783, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a chiffon-cake and roll-cake café; the chiffon is made with Hokkaido wheat flour (December 2025 review).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the chiffon uses eggs, the roll cake egg whites, and both come with whipped cream (2025–2026 reviews).',
    hours_raw: 'Tuesday–Friday 12:00–18:00; Saturday 11:30–18:00; Sunday 11:30–17:30; closed Monday; hours may change (Tabelog). No service charge (Tabelog’s Japanese original: 「無し」 — the English page wrongly says one is added). Cash only: no cards, e-money or QR (Tabelog). Eat-in upstairs at a few tables (about 18 places); take-out and the counter downstairs; showcase sweets can be eaten in for ¥100 extra; the L roll cake sells out, so reserve it (Tabelog; December 2025–November 2026). Non-smoking (Tabelog). A renovated machiya in a quiet lane 148 m from Sanjo Keihan Stn; narrow, steep stairs (Tabelog; November 2025). Opened 1 March 2024 (Tabelog); the Kyoto branch of 松涛カフェ in Shibuya, Tokyo (2026 reviews).',
    hours: { 1: TU, 2: TU, 3: TU, 4: TU, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanjo Keihan, north side — 148 m from Sanjo Keihan Stn',
    cuisine: 'Chiffon cake and roll cake, from the Kyoto branch of a Shibuya, Tokyo café (2026 reviews) · chiffon of Hokkaido wheat and red-yolk eggs, plain, as "cake butter toast" or half and half, e.g. Shoto Cake Half & Half with cream and maple ¥1,070 (August 2026), half & half chiffon ¥750, with ice cream and maple · egg-white roll cake in four heights, SS 3.5 cm to L 14 cm, S ¥550 (February 2026) · freshly roasted coffee, iced chai, sandwiches; the lunch menu has given way to sweets and bread (September 2026)',
    website: null, gmaps: gm('松涛カフェ KYOTO 三条'), menu_url: TB,
    notes: "[Café · Sanjo Keihan, chiffon cake in a machiya] The Kyoto outpost of Shibuya's Shoto Cafe, in a renovated townhouse on a quiet lane just north of Sanjo Keihan. The star is the chiffon cake — fluffy, lightly salty, best as crisp-edged \"cake butter toast\" heaped with cream — and a tall egg-white roll cake sold in four heights. Climb the steep stairs to a small upstairs room; the owner is warm and chatty. Cash only. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Tabelog gives the opening as 1 March 2024. Reviewers in 2026 describe it as the second shop of 松涛カフェ of Shoto, Shibuya, Tokyo, known for chiffon and roll cakes; the chiffon is made with Hokkaido wheat flour and red-yolk eggs, the roll cake with egg whites only (December 2025).',
      philosophy: null,
      specialty: 'Chiffon "cake butter toast"; roll cake in four heights.',
      anecdotes: [
        { text: 'An August 2026 guest asked about toppings for the toast chiffon and the owner laughed, "No need, no need!" — it came heaped with whipped cream anyway.', source: R + 'B533825696/' },
        { text: 'A January 2026 regular was offered a larger sandwich than the regular size.', source: R + 'B520341962/' },
        { text: 'A September 2026 regular noted that lunch has given way to sweets and bread, with online sales too.', source: R + 'B494792360/' },
      ],
      japanese_sources_summary: '食べログ: 松涛カフェ KYOTO、カフェ、左京区新丸太町75-9、三条京阪駅から148m、火〜金12:00〜18:00、土11:30〜18:00、日11:30〜17:30、月曜定休、サービス料無し、カード・電子マネー・QR 不可、テーブル (最大18名)、禁煙、2024年3月1日オープン。口コミ (2025年11月〜2026年11月、英語): 東京・渋谷の松涛カフェの2号店、町家を改装、1階は厨房とレジと持ち帰り、2階がイートイン、急な階段、北海道産小麦と赤玉子のシフォン、ケーキバタートースト、卵白だけのロールケーキ (SS 3.5cm〜L 14cm)、ハーフ&ハーフ1,070円、ロールケーキS 550円、ショーケースの菓子はイートイン+100円、気さくな店主。',
      confidence: 'medium', sources: [TB, R + 'B494792360/', R + 'B516614010/', R + 'B518280594/', R + 'B518453440/', R + 'B520341962/', R + 'B524471479/', R + 'B527912206/', R + 'B533586275/', R + 'B533825696/', R + 'B534581959/', R + 'B538400282/', R + 'B538570163/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; the owner is friendly and happy to recommend.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区新丸太町75-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.01043, 135.773205); cross-checked: GSI 京都府京都市左京区新丸太町75番地 (lot) 71m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534581959/', R + 'B524471479/', R + 'B518280594/'],
    price_note: 'Prices from February and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoto Cake Half & Half with whipped cream and maple syrup', '¥1,070', 'Sweets', 'no', 'no', 'August 2026.', 'shoto_half_half_cream'),
      it('', '', 'Chiffon half & half', '¥750', 'Sweets', 'no', 'no', 'February 2026.', 'chiffon_half_half'),
      it('', '', 'Chiffon "cake butter toast"', '', 'Sweets', 'no', 'no', '', 'cake_butter_toast'),
      it('', '', 'Roll cake, S size', '¥550', 'Sweets', 'no', 'no', 'Sizes SS to L; reserve the L.', 'roll_cake_s'),
    ] }, {
    cuisine: '東京・渋谷のカフェの京都店の、シフォンケーキとロールケーキ (2026年の口コミ)・北海道産小麦と赤玉子のシフォン、そのままでもケーキバタートーストでもハーフ&ハーフでも。例: 生クリームとメープルの松涛ケーキ ハーフ&ハーフ1,070円 (2026年8月)、シフォンのハーフ&ハーフ750円、アイスとメープルも・卵白のロールケーキは SS 3.5cm から L 14cm まで4種、S 550円 (2026年2月)・自家焙煎のコーヒー、アイスチャイ、サンドイッチ。ランチはやめて菓子とパンが中心に (2026年9月)',
    neighborhood: '三条京阪の北側。三条京阪駅から148m',
    gf_detail: 'グルテンフリー不可。シフォンケーキとロールケーキのカフェで、シフォンは北海道産の小麦粉を使う (2025年12月の口コミ)。',
    vegan_detail: 'ヴィーガン不可。シフォンは卵、ロールケーキは卵白を使い、どちらも生クリーム付き (2025〜2026年の口コミ)。',
    notes: '[カフェ・三条京阪、町家のシフォンケーキ] 渋谷の松涛カフェの京都店。三条京阪のすぐ北の静かな路地の、改装した町家にある。主役はふわふわで少し塩気のあるシフォンで、縁がカリッとしたケーキバタートーストに生クリームをたっぷりのせるのがおすすめ。卵白の背の高いロールケーキは4種の高さで。急な階段を上がった2階の小さな部屋で。店主は気さくで話好き。現金のみ。月曜休み。',
  });
}

// ================================================================ 京の鴨料理 北斎
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037915/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyoto-hokusai.com/'; const FOOD = SITE + 'food'; const KAMO = SITE + 'foodkamo'; const SERVICE = SITE + 'service'; const SHOP = SITE + 'shop'; const CONCEPT = SITE + 'concept';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=7130001009657';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_kamo_ryori_hokusai', name: '京の鴨料理 北斎 (Kyo no Kamo Ryori Hokusai)', category: 'MOM_AND_POP',
    lat: 35.00567336787312, lng: 135.77244390036034, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Duck courses include katsu, fried dishes, nanban-zuke, yuba rolls, soups and ponzu; no gluten information is published (official menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Kyoto-duck specialist (official site).',
    hours_raw: 'Lunch 12:00–15:00 (last order 14:00); dinner 18:00–22:00 (last order 21:00); closed irregularly (official site; Tabelog). Sunday by reservation only; book ahead when bringing children; the kuwa-yaki course needs booking 2–3 days ahead (Tabelog; official site). No service charge listed (Tabelog). 28 seats: a 5-seat counter and 10 table seats downstairs, a 13-seat upstairs room that can be divided into semi-private rooms; private hire up to 13–20; non-smoking, with a smoking area outside; children welcome, kids’ menu; cards (VISA, Master, AMEX, Diners) and PayPay (Tabelog; official site). Ordering is by tablet (July 2026). On Yamato-oji south of Sanjo by the Shirakawa, 1 min from exit 9 of Gion-Shijo Stn (official site). Opened at this address 4 July 2022 (Tabelog); the official site gives the business as founded 75 years ago and calls it the birthplace of kuwa-yaki.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Yamato-oji by the Shirakawa — 1 min from Gion-Shijo Stn',
    cuisine: 'Kyoto-duck specialist using 京鴨 raised by 山城農産 (official site) · lunch: salad and appetizers, a main of choice and a glass parfait — chicken kara-age ¥2,300, duck tenderloin katsu ¥2,800, duck thigh ¥3,600, duck loin ¥4,100, both ¥4,800, wagyu roast beef ¥4,500; yukhoe-style mini duck bowl +¥770; Kyo-duck lunch course ¥6,300 · dinner courses: duck and roast beef ¥7,400, Kyo-duck course ¥9,500 (duck and tuna yukhoe, duck ham, seared duck-loin nigiri, duck-liver cheesecake), 10-plus-dish duck courses ¥13,200–13,800 · charcoal kuwa-yaki iron-plate course from ¥6,000 (jidori) to ¥18,000 (chateaubriand), book ahead · duck yakitori course ¥4,800 (March 2026) · maiko dance plan with candlelight, from ¥80,000 plus food (official site, tax included)',
    website: SITE, gmaps: gm('京の鴨料理 北斎 祇園'), menu_url: KAMO,
    notes: "[Duck · Gion by the Shirakawa, Kyoto duck every way] A duck house a minute from Gion-Shijo Station, cooking Kyoto's brand duck as salad, yakitori, katsu, ham, yukhoe and seared nigiri. Lunch is a choose-your-main set from ¥2,300 ending in a showy glass parfait; dinner courses run ¥7,400–13,800, and the old house speciality, charcoal kuwa-yaki, needs booking. Most reviews are warm, though a few 2026 diners found the duck gamey. Private rooms upstairs; maiko dinners can be arranged.",
    chef_bio: { chef_name: '岡本 賢志', roles: ['Representative (代表) of 株式会社北斎; head chef not named'], origin: null,
      background: 'Per the official site: run by 株式会社北斎 under representative 岡本 賢志; the duck is 京鴨, raised entirely in Kyoto by 山城農産; the business was founded 75 years ago and serves its traditional skills; it calls itself the birthplace of kuwa-yaki, cooked over charcoal. Tabelog gives the opening at this address as 4 July 2022. The invoice number belongs to 株式会社北斎, at the same address.',
      philosophy: 'Per the official site: a serene space and a luxurious meal; the true flavour of carefully chosen ingredients.',
      specialty: 'Kyo-duck courses; charcoal kuwa-yaki.',
      anecdotes: [
        { text: 'An April 2026 lunch guest chose among six duck mains and played with salt, shichimi and Kaneyama miso.', source: R + 'B526325347/' },
        { text: 'A May 2026 family found the staff very kind to the child in the party.', source: R + 'B527407874/' },
        { text: 'A June 2026 diner who had travelled for the duck course found the meat gamey and the meal a disappointment.', source: R + 'B531701668/' },
      ],
      japanese_sources_summary: '公式サイト (kyoto-hokusai.com): 京の鴨料理 北斎、株式会社北斎、代表 岡本賢志、東山区弁財天町11、京阪祇園四条駅9番出口より徒歩1分、ランチ12:00〜15:00 (L.O. 14:00)、ディナー18:00〜22:00 (L.O. 21:00)、不定休、創業75年、山城農産の京鴨、くわ焼き発祥の店。ランチ: メインを選ぶコース2,300円〜 (鳥もも唐揚げ2,300円、京鴨ささ身カツ2,800円、京鴨もも焼3,600円、ロース焼4,100円、もも・ロース4,800円、和牛ローストビーフ4,500円、ユッケ仕立てミニ丼+770円、グラスパフェ)、京鴨ランチコース6,300円、炭火くわ焼き一人鉄板コース6,000〜18,000円 (要予約)。会席: 京鴨とローストビーフ7,400円、京鴨満喫コース9,500円、京鴨づくし13,800円・13,200円。舞妓さんプラン80,000円・120,000円 (飲食別)、貸切最大13名。食べログ: 日曜は予約のみ、28席、禁煙、子供可、カード・PayPay 可、2022年7月4日オープン、インボイス T7130001009657 (株式会社北斎)。口コミ (2026年3〜9月、英語): 京鴨焼き鳥コース4,800円、パフェ、臭みがあるという声も。',
      confidence: 'high', sources: [TB, SITE, CONCEPT, FOOD, KAMO, SERVICE, SHOP, INV, R + 'B524872960/', R + 'B526124683/', R + 'B526325347/', R + 'B527407874/', R + 'B528976897/', R + 'B530887493/', R + 'B531495435/', R + 'B531701668/', R + 'B532671613/', R + 'B534635214/', R + 'B536136541/', R + 'B536487461/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering with photos; book ahead on Sundays and for kuwa-yaki.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通三条下ル3弁財天町11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news March 2026) and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005673, 135.772444); cross-checked: GSI 京都府京都市東山区弁財天町11番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [FOOD, KAMO, SERVICE],
    price_note: 'Official menu prices (tax included), checked November 2026.', last_checked: TODAY, items: [
      it('京鴨ささ身カツ', '', 'Lunch course with Kyo-duck tenderloin katsu', '¥2,800', 'Lunch', 'no', 'no', '', 'kamo_katsu_lunch'),
      it('京鴨ロース焼', '', 'Lunch course with grilled Kyo-duck loin', '¥4,100', 'Lunch', 'ask', 'no', '', 'kamo_rosu_lunch'),
      it('京鴨ランチコース', '', 'Kyo-duck lunch course', '¥6,300', 'Lunch', 'ask', 'no', '', 'kamo_lunch_course'),
      it('京鴨とローストビーフのコース', '', 'Kyo-duck and wagyu roast beef course', '¥7,400', 'Dinner', 'ask', 'no', '', 'kamo_roastbeef'),
      it('京鴨満喫コース', '', 'Kyo-duck course', '¥9,500', 'Dinner', 'ask', 'no', '', 'kamo_manki'),
      it('炭火くわ焼き一人鉄板コース', '', 'Charcoal kuwa-yaki course (from jidori)', '¥6,000', 'Course', 'ask', 'no', 'Book 2–3 days ahead; ¥7,500 with Kyo duck, up to ¥18,000.', 'kuwayaki'),
    ] }, {
    cuisine: '山城農産の京鴨を使う鴨料理の専門店 (公式サイト)・昼: サラダと前菜、選べるメイン、グラスパフェ。鳥もも唐揚げ2,300円、京鴨ささ身カツ2,800円、京鴨もも焼3,600円、ロース焼4,100円、もも・ロース4,800円、和牛ローストビーフ4,500円。京鴨のユッケ仕立てミニ丼に変更+770円。京鴨ランチコース6,300円・夜の会席: 京鴨とローストビーフ7,400円、京鴨満喫コース9,500円 (京鴨とまぐろのユッケ仕立て、京鴨生ハム、京鴨ロースの炙りにぎり寿司、京鴨肝入りチーズケーキ)、10品以上の京鴨のコース13,200〜13,800円・炭火くわ焼きの一人鉄板コースは地鶏6,000円からシャトーブリアン18,000円まで、要予約・京鴨焼き鳥コース4,800円 (2026年3月)・和ろうそくの舞妓さんプランは80,000円から、飲食別 (公式サイト、税込)',
    neighborhood: '祇園、白川そばの大和大路。祇園四条駅から徒歩1分',
    gf_detail: '要確認。鴨のコースにカツ、揚げ物、南蛮漬け、ゆば包み、お椀、ポン酢など。グルテンの情報は公開されていない (公式メニュー)。',
    vegan_detail: 'ヴィーガン不可。京鴨の専門店 (公式サイト)。',
    notes: '[鴨・祇園白川、京鴨をあらゆる形で] 祇園四条駅から1分の鴨料理の店。京都のブランド鴨を、サラダ、焼き鳥、カツ、生ハム、ユッケ、炙りにぎりで。昼は2,300円からメインを選ぶセットで、締めは見た目も華やかなグラスパフェ。夜の会席は7,400〜13,800円、老舗の名物の炭火くわ焼きは予約が必要。口コミの多くは好評だが、2026年には臭みを感じたという声もいくつか。2階に個室、舞妓さんとの食事も手配できる。',
  });
}

// ================================================================ 鉄板焼 葵 (RIHGA Royal Hotel Kyoto)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26000883/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.rihga.co.jp/kyoto/restaurant/list/aoi';
  const WD = day(['12:00', '15:30'], ['17:00', '21:30']); const WE = day(['11:30', '15:00'], ['17:00', '21:30']);
  put({
    id: 'kyoto_teppanyaki_aoi_rihga', name: '鉄板焼 葵 (Teppanyaki Aoi, RIHGA Royal Hotel Kyoto)', category: 'MOM_AND_POP',
    lat: 34.986039667879325, lng: 135.75274359017584, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan-grilled wagyu, seafood and vegetables with soy- and butter-based sauces, garlic rice and dessert; the hotel asks guests with food allergies to tell the staff (hotel site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: teppanyaki courses of wagyu and seafood (hotel site).',
    hours_raw: 'Lunch weekdays 12:00–15:30 (last order 14:00 per the hotel; 14:30 per Tabelog); weekends and holidays in two sittings, 11:30–13:00 and 13:30–15:00; dinner 17:00–21:30 (last order 20:00); hours differ in holiday periods; closed irregularly — see the hotel site (hotel site; Tabelog). Service charge 15% (Tabelog’s Japanese original: 「サービス料15%」); the hotel’s listed prices include tax and service. 35 seats, all at counters, including one private room for 4–8 (room charge extra) and two semi-private rooms; non-smoking; children welcome, kids’ menu; sommelier; cards, e-money and QR; hotel parking (hotel site; Tabelog). On basement level 1 of RIHGA Royal Hotel Kyoto, about 5 min from Kyoto Stn (Tabelog; June 2025).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'RIHGA Royal Hotel Kyoto, B1 — 5 min from Kyoto Stn',
    cuisine: 'Teppanyaki of wagyu, seafood and vegetables grilled at the counter; a certified Omi-beef restaurant (hotel site) · lunch from ¥7,084, dinner from ¥17,457, tax and service included; à la carte too (hotel site) · e.g. lobster and scallop with lemon or butter soy, abalone with parsley butter or bouillabaisse sauce, catch of the day such as kinmedai in lemon butter, domestic beef or Kuroge wagyu fillet, garlic rice, chawanmushi, sweetfish escabeche, consommé, yuzu sorbet (2025–2026 reviews)',
    website: SITE, gmaps: gm('鉄板焼 葵 リーガロイヤルホテル京都'), menu_url: SITE,
    notes: "[Teppanyaki · Kyoto Station, the RIHGA Royal's grill counter] The RIHGA Royal Hotel Kyoto's teppanyaki room, a short walk from Kyoto Station: every seat faces the hot plate, where the chef sears lobster, abalone, scallops and Omi or Kuroge wagyu fillet, finishing with garlic rice. Lunch courses from about ¥7,100 are the gentler entry; dinner starts near ¥17,500. Prices include tax and 15% service. Good for birthdays — expect a message plate.",
    chef_bio: { chef_name: '鵜飼 大輔', roles: ['Chef of 鉄板焼 葵 (hotel staff)'], origin: null,
      background: 'Per the hotel site: worked at the hotel’s French Dining Top of Kyoto and at 鉄板焼 葵, then as banquet hot-kitchen chef, before becoming chef of 鉄板焼 葵; in 2018 trained in France at the two-star Jean Sulpice in Savoie and the three-star Maison Pic. The restaurant is one of the hotel’s own; it is a certified Omi-beef restaurant.',
      philosophy: 'Per the hotel site: to bring out seasonal, carefully chosen ingredients with skills from training in France, for a teppanyaki meal to remember.',
      specialty: 'Lobster and scallop teppanyaki; wagyu fillet with garlic rice.',
      anecdotes: [
        { text: 'A May 2025 lunch guest watched the cooking for about two hours while the chef chatted, and was given a generous helping of garlic rice.', source: R + 'B506928304/' },
        { text: 'A February 2025 guest celebrating a birthday received a birthday drink and a "Happy Birthday" dessert plate.', source: R + 'B497006359/' },
        { text: 'A June 2026 dinner opened with a chawanmushi styled as a cactus, served with a shovel-shaped spoon.', source: R + 'B530301252/' },
      ],
      japanese_sources_summary: 'リーガロイヤルホテル京都 公式サイト: 鉄板焼 葵、全席カウンター、三大和牛の一つ「近江牛」の認定指定店、和牛・魚介・野菜を目の前の鉄板で。シェフ 鵜飼大輔: フレンチダイニングトップオブキョウトと鉄板焼 葵で勤務、宴会ホットのシェフを経て葵のシェフ、2018年フランス・サヴォワの2つ星「ジャンシュルピス」と3つ星「メゾンピック」で研鑽。ランチ平日12:00〜15:30 (L.O. 14:00)、土日祝は2部制 (11:30〜13:00、13:30〜15:00)、ディナー17:00〜21:30 (L.O. 20:00)、地下1階、ランチ7,084円〜、ディナー17,457円〜、アラカルトあり、料金は税金・サービス料込み、35席 (個室含む)、個室1室 (4〜8名、個室料別)、全席禁煙、アレルギーは係員へ。食べログ: 鉄板焼・日本料理・ステーキ、下京区松明町1 リーガロイヤルホテル京都 B1F、サービス料15%、子供可、ソムリエ、カード・電子マネー・QR 可、駐車場117台、インボイス T1130003004166。口コミ (2024年12月〜2026年9月、英語): 伊勢海老と帆立、鮑、金目鯛、和牛ヒレ、ガーリックライス、誕生日のサービス。',
      confidence: 'high', sources: [TB, SITE, R + 'B452370242/', R + 'B497006359/', R + 'B499059268/', R + 'B506928304/', R + 'B508980461/', R + 'B509920397/', R + 'B514805328/', R + 'B522625150/', R + 'B530301252/', R + 'B530490874/', R + 'B531196179/', R + 'B537866859/'] },
    cultural_comfort: { level: 'english', note: 'International hotel with a multilingual website.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'The hotel asks guests worried about allergens to tell the staff and links a food-allergy notice.', source: SITE, verified: true }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区松明町1 リーガロイヤルホテル京都 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Hotel website with live availability and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.98604, 135.752744); cross-checked: GSI 京都府京都市下京区松明町1番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B531196179/'],
    price_note: 'Hotel site starting prices (tax and service included), checked November 2026; course examples from reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (from)', '¥7,084', 'Lunch', 'ask', 'no', '', 'lunch_from'),
      it('', '', 'Dinner course (from)', '¥17,457', 'Dinner', 'ask', 'no', '', 'dinner_from'),
      it('', '', 'Lobster and scallop lunch course with domestic beef fillet (80 g)', '', 'Lunch', 'ask', 'no', 'July 2026.', 'lobster_scallop_lunch'),
      it('', '', 'Garlic rice', '', 'Rice', 'ask', 'no', 'Extra charge at lunch.', 'garlic_rice'),
    ] }, {
    cuisine: 'カウンターの鉄板で焼く和牛、魚介、野菜の鉄板焼。近江牛の認定指定店 (ホテル公式サイト)・ランチ7,084円〜、ディナー17,457円〜、税金・サービス料込み、アラカルトも (ホテル公式サイト)・例: 伊勢海老と帆立のレモン醤油やバター醤油、パセリバターやブイヤベースソースの鮑、金目鯛のレモンバターなど本日の鮮魚、国産牛や黒毛和牛のヒレ、ガーリックライス、茶碗蒸し、小鮎のエスカベッシュ、コンソメ、柚子のシャーベット (2025〜2026年の口コミ)',
    neighborhood: 'リーガロイヤルホテル京都の地下1階。京都駅から徒歩5分',
    gf_detail: '要確認。醤油やバターのソースの和牛・魚介・野菜の鉄板焼、ガーリックライス、デザート。アレルギーが心配な客は係員に申し出るようホテルが案内している (ホテル公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛と魚介の鉄板焼のコース (ホテル公式サイト)。',
    notes: '[鉄板焼・京都駅、リーガロイヤルの鉄板カウンター] 京都駅から歩いてすぐのリーガロイヤルホテル京都の鉄板焼。全席が鉄板に向き、シェフが伊勢海老、鮑、帆立、近江牛や黒毛和牛のヒレを焼き、ガーリックライスで締める。昼のコースは7,100円ほどからで入りやすく、夜は17,500円ほどから。料金は税金とサービス料15%込み。誕生日に向き、メッセージプレートも。',
  });
}

save();
