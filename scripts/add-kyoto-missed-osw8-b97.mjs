// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 97 (2026-11-08).
//   + 石野味噌 Ishino Miso (white-miso maker founded 1781, nine generations; takeaway only — re-checked at the coordinator's
//     request under Greg's historic-retail rulings; supersedes the osw8-96 thin-listing skip)
//   + ØC coffee kyoto (organic crêpes and light-roast coffee, Okazaki; rest)
//   + ゑびや寿司 Ebiya Zushi (old neighbourhood udon and sushi lunch house, Ryogaemachi-Nijo; rest)
//   + 森田倶楽部 Morita Club (late-night French wine bar, Kawaramachi-Marutamachi; rest)
//   Brand check: queue-status.jsonl, than.co.jp/brands and the WILL brands checked — none matches. ØC has its Tokyo shops
//   (Kitazawa and Inokashira Park, per rurubu.jp and co-trip.jp search results) plus this one — not a chain; none in data.
//   None of the four is in data (main 0a090779, hidden records included).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-97');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 石野味噌 Ishino Miso
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26028511/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.ishinomiso.co.jp/'; const HIST = 'http://www.ishinomiso.co.jp/history.html'; const CO = 'http://www.ishinomiso.co.jp/company.html';
  const KH = 'https://www.keihan.co.jp/navi/kyoto_tsu/tsu202603.html';
  const H = day(['09:00', '11:30'], ['13:30', '16:30']);
  put({
    id: 'kyoto_ishino_miso', name: '石野味噌 (Ishino Miso)', category: 'OMNI',
    lat: 35.00300809786887, lng: 135.75376932034655, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto white miso is made from rice koji and soybeans (Keihan guide), but product ingredient lists are not given in the sources, so wheat in other misos or chinmi is unconfirmed.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. White miso is rice koji and soybeans (Keihan guide); the chinmi and flavoured miso range is not described.',
    hours_raw: 'TAKEAWAY ONLY — a miso brewery that sells at its works; no seating. Monday–Friday 9:00–11:30 and 13:30–16:30; closed Saturday, Sunday and holidays; hours may change (Tabelog). Stand in front of the big shutter and it opens to the office and brewery (March 2017). No QR payments (Tabelog). Also sold at a Daimaru counter (October 2018). Founded in Tenmei 1 (1781); nine generations (official site). On Aburakoji-dori just south of Shijo; about 8 min walk from Hankyu Karasuma.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Aburakoji-Shijo',
    cuisine: 'Takeaway-only Kyoto miso brewery, founded 1781, best known for the white miso used in Kyoto cooking (official site; Keihan guide) · white miso including a kaiseki white miso and a special white miso for New Year zoni, sold up to 4 kg tubs (October 2018; January 2019) · red miso, the red-dashi miso “Kyozakura”, chinmi and flavoured misos (official site) · brewed with water from the Ishiizutsu well on site (official site; Keihan guide)',
    website: WEB, gmaps: gm('石野味噌 油小路 四条'), menu_url: 'http://www.ishinomiso.co.jp/item.html',
    notes: '[Takeaway only · white miso since 1781, Aburakoji-Shijo] A historic white-miso brewery on its own spring-water well, nine generations on: buy kaiseki-grade Kyoto white miso, red-dashi miso and flavoured misos straight from the works on weekdays. Takeaway only.',
    chef_bio: { chef_name: null, roles: ['Miso brewers'], origin: null,
      background: 'Per the official site: the founder, from Tanba, came to Kyoto in Tenmei 1 (1781) to brew miso, setting up beside the Ishiizutsu spring by the old course of the Kamo River; the business has passed through nine generations and now pairs traditional technique with modern equipment. The current representative is listed on the company page. Keihan’s Kyoto guide notes the shop has used the Ishiizutsu water since its mid-Edo founding.',
      philosophy: 'Good water and nine generations of handed-down technique (official site).', specialty: 'Kyoto white miso.',
      anecdotes: [
        { text: 'A March 2017 buyer was told to stand before the big shutter, which rose to reveal the office and the miso works.', source: R + 'B250912947/' },
        { text: 'An October 2018 home cook skips the Daimaru counter and drives to the works to stock up on a 4 kg tub of special white miso.', source: R + 'B394845083/' },
        { text: 'A New Year 2019 zoni was made with the kaiseki white miso recommended by a Kyoto-born friend.', source: R + 'B410376325/' },
      ],
      japanese_sources_summary: '公式サイト: 「創業天明元年」、「二百三十余年を遡る創業以来、大切に守り続けてきた銘水と、九代にわたる伝承の技でつくりあげる石野の味噌。」、「京料理に欠かせない白味噌をはじめ、赤味噌、赤だし味噌、珍味・菜味噌など」、石野の歴史: 「石野味噌の初代は、丹波森村の出身で森村屋庄兵衛と号し、天明元年（1781年）味噌の醸造を志し入洛しました。」、銘水「石井筒」、「九代にわたり連綿斯業を継承してきました。」、赤だし「京桜」、会社概要: 株式会社石野味噌、下京区油小路通四条下る石井筒町546。京阪電車のおけいはんねっと: 「江戸時代中期の創業以来、石井筒（いしいづつ）と呼ばれる名水を味噌造りに使用しています」。食べログ: 月〜金 9:00〜11:30、13:30〜16:30、土・日・祝日休み。口コミ (2017〜2019年、英語): シャッターの前に立つと開く、大丸にも売り場、正月の雑煮用の特選白味噌の4キロ樽、懐石白味噌。',
      confidence: 'medium', sources: [WEB, HIST, CO, KH, TB, R + 'B250912947/', R + 'B394845083/', R + 'B410376325/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway only; buy at the works on weekdays.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区油小路通四条下る石井筒町546',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (company page and history) and Tabelog listing; Tabelog reviews end in 2019 — drafted under the historic-retail rulings at the coordinator’s request.' },
    pin_source: `Tabelog ${TB} (35.003008, 135.753769); cross-checked: GSI 京都府京都市下京区石井筒町546番地 (lot) 30 m; nearest existing record 58.8 m (kyoto_sakaba_light_shijo); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB, R + 'B394845083/'],
    price_note: 'No prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Kyoto white miso (incl. kaiseki and special grades)', '', 'Takeaway', 'ask', 'ask', 'Official site; 2018–2019 reviews.', 'shiromiso'),
      it('', '', 'Red-dashi miso “Kyozakura”', '', 'Takeaway', 'ask', 'ask', 'Official site.', 'kyozakura'),
    ] }, {
    cuisine: '1781年創業、京料理の白味噌で知られるテイクアウトのみの京の味噌蔵 (公式サイト、京阪のガイド)・懐石白味噌や正月の雑煮用の特選白味噌など、4キロ樽まで (2018年10月、2019年1月)・赤味噌、赤だし「京桜」、珍味・菜味噌 (公式サイト)・蔵の銘水「石井筒」で仕込む (公式サイト、京阪のガイド)',
    neighborhood: '油小路四条',
    gf_detail: '要確認。京の白味噌は米麹と大豆 (京阪のガイド)。商品の原材料は資料になく、ほかの味噌や珍味の小麦は未確認。',
    vegan_detail: '要確認。白味噌は米麹と大豆 (京阪のガイド)。珍味や菜味噌の説明はない。',
    notes: '[テイクアウトのみ・1781年からの白味噌、油小路四条] 銘水の井戸を持つ九代続く白味噌の老舗の蔵。懐石の京白味噌、赤だし味噌、菜味噌を平日に蔵で直接。持ち帰りのみ。',
  });
}

// ================================================================ ØC coffee kyoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043925/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_oc_coffee_okazaki', name: 'ØC coffee kyoto', category: 'OMNI',
    lat: 35.01177077583137, lng: 135.78065450999665, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat-flour crêpes are the speciality (November 2026); coffee itself is fine.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee is plant-based; crêpes come with butter and cream; no plant milk mentioned (2026 reviews).',
    hours_raw: 'Tuesday–Sunday 9:00–18:00; closed Monday; hours may change (Tabelog). Cards and e-money; no QR (Tabelog). A large round table and square tables inside, plus a terrace; non-smoking (Tabelog; February–November 2026). Near Okazaki Park, about 6 min walk from Higashiyama Stn or 3 min from the Higashiyama-Sanjo bus stop (August 2026). Opened 31 October 2025 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki',
    cuisine: 'Kyoto shop of a Tokyo crêpe café: chewy organic crêpes and fruity, light-roast Nordic-style coffee (February–November 2026) · sugar-butter crêpe ¥1,300 with a pat of butter to cut in; lemon ¥1,600; azuki ¥1,600; apple ¥1,700; a savoury crêpe (February–November 2026) · cappuccino ¥700, honey latte ¥850, ginger latte ¥850, matcha latte ¥1,000, single-origin iced coffees (February–November 2026) · about ¥1,500–3,000 (Tabelog)',
    website: null, gmaps: gm('ØC coffee kyoto 岡崎'), menu_url: null,
    notes: '[Crêpes and coffee · Okazaki] The Kyoto branch of a Tokyo crêpe café near Okazaki Park: chewy organic crêpes — the sugar-butter one comes with a pat of butter to wrap in — and fruity light-roast coffee, with a terrace for cherry-blossom season. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Baristas and crêpe makers (unnamed)'], origin: null,
      background: 'Per reviewers: a crêpe and coffee café whose main shop is in Tokyo, opened near Okazaki Park on 31 October 2025 (Tabelog), focused on organic crêpes with a chewy texture and fruity, light-roast Nordic-style coffee (February–November 2026).',
      philosophy: null, specialty: 'Sugar-butter crêpe.',
      anecdotes: [
        { text: 'An August 2026 guest’s tip: cut the butter that comes on the side and wrap it in the crêpe rather than melting it.', source: R + 'B535080877/' },
        { text: 'A March 2026 visitor hoping for the terrace in full cherry blossom found the inside empty and settled for a savoury crêpe there.', source: R + 'B525251491/' },
        { text: 'An August 2026 light-roast fan warned that it may not suit those who like dark roasts.', source: R + 'B534738525/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、左京区岡崎円勝寺町36-1 1F、東山駅から281m、火〜日 9:00〜18:00、月曜休み、カード・電子マネー可、QR 不可、禁煙、2025年10月31日開店。口コミ (2026年2〜11月、英語): 東京に本店のクレープとコーヒーの店、オーガニックのもちもちのクレープ、北欧風の浅煎りのフルーティーなコーヒー、シュガーバター1,300円 (バターを切って包む)、レモン1,600円、あずき1,600円、りんご1,700円、食事のクレープ、カプチーノ700円、はちみつラテ850円、ジンジャーラテ850円、抹茶ラテ1,000円、テラス席。',
      confidence: 'medium', sources: [TB, R + 'B523723130/', R + 'B523846556/', R + 'B525030673/', R + 'B525251491/', R + 'B526782743/', R + 'B534281766/', R + 'B534738525/', R + 'B535080877/', R + 'B537328497/', R + 'B538768702/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards and e-money; terrace seats.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎円勝寺町36-1 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.011771, 135.780655); cross-checked: GSI 京都府京都市左京区岡崎円勝寺町36番地 (lot) 75 m; nearest existing record 6.8 m (kyoto_kyo_seika_okazaki, 36-3 2F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523846556/', R + 'B526782743/', R + 'B538768702/'],
    price_note: 'Prices from February, April and November 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Sugar-butter crêpe', '¥1,300', 'Crêpes', 'no', 'no', 'February 2026.', 'sugarbutter'),
      it('', '', 'Lemon crêpe', '¥1,600', 'Crêpes', 'no', 'no', 'February 2026.', 'lemon'),
      it('', '', 'Cappuccino', '¥700', 'Coffee', 'ask', 'no', 'February 2026.', 'cappuccino'),
    ] }, {
    cuisine: '東京のクレープ店の京都の店、オーガニックのもちもちのクレープと北欧風の浅煎りのフルーティーなコーヒー (2026年2〜11月)・バターを切って包むシュガーバター1,300円、レモン1,600円、あずき1,600円、りんご1,700円、食事のクレープ (2026年2〜11月)・カプチーノ700円、はちみつラテ850円、ジンジャーラテ850円、抹茶ラテ1,000円、産地別のアイスコーヒー (2026年2〜11月)・1,500〜3,000円ほど (食べログ)',
    neighborhood: '岡崎',
    gf_detail: 'グルテンフリー不可。看板は小麦粉のクレープ (2026年11月)。コーヒーは問題なし。',
    vegan_detail: '要確認。ブラックコーヒーは植物性、クレープはバターやクリーム。植物性ミルクの記載はない (2026年の口コミ)。',
    notes: '[クレープとコーヒー・岡崎] 岡崎公園近くの東京のクレープ店の京都の店。バターを包んでいただくシュガーバターなどもちもちのオーガニックのクレープと浅煎りのコーヒー、桜の季節にはテラスも。月曜休み。',
  });
}

// ================================================================ ゑびや寿司 Ebiya Zushi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26008765/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00']);
  put({
    id: 'kyoto_ebiya_zushi_ryogaemachi', name: 'ゑびや寿司 (Ebiya Zushi)', category: 'OMNI',
    lat: 35.013325537078636, lng: 135.75899287502108, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat udon and soba in soy dashi; sushi seasonings likely soy (2019–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broths, chicken udon and fish sushi; inari may be cooked in dashi (2019–2026 reviews).',
    hours_raw: 'Monday–Saturday 11:00–15:00; closed Sunday and holidays; hours may change (Tabelog). Lunch only. No reservations (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 20 seats (Tabelog). A Showa-era room popular with office workers at weekday lunch (August 2019; April 2023). One block west of Karasuma, near Karasuma-Oike Stn.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ryogaemachi-Nijo',
    cuisine: 'Long-established neighbourhood sushi shop that now serves mainly udon and soba (2019–2026 reviews) · tori-nanban udon with three inari for ¥990 (November 2025); kitsune udon with thick fried tofu; Kyoto-style tanuki (ginger, fried tofu, ankake); ankake keiran; hanamaki udon with nori and wasabi (December 2022–July 2026) · nigiri ¥1,600 with a rolled-omelette tamago and red miso soup; box sushi; inari and maki; sukeroku (August 2019–August 2025) · under ¥1,000–2,000 (2023–2025 reviews)',
    website: null, gmaps: gm('ゑびや寿司 両替町'), menu_url: null,
    notes: '[Udon and sushi · Ryogaemachi-Nijo, lunch only, cash only] A Showa-era local where office workers eat gentle-dashi udon — tori-nanban, kitsune, Kyoto tanuki, nori-and-wasabi hanamaki — with inari, box sushi or a modest nigiri set. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per reviewers: a long-established local udon and sushi restaurant from the Showa era, originally a sushi shop, now mostly serving udon and soba with sushi on the side to a crowd of local office workers (2019–2026 reviews).',
      philosophy: null, specialty: 'Udon with inari; box sushi.',
      anecdotes: [
        { text: 'A seven-visit regular in November 2025 always orders tori-nanban udon with three inari for ¥990 — and finishes the broth.', source: R + 'B463290762/' },
        { text: 'A July 2026 diner, curious for years, ordered hanamaki — udon under a big sheet of nori with wasabi — a dish not seen elsewhere.', source: R + 'B531482565/' },
        { text: 'An August 2019 Kyoto local who dislikes sweet egg loved the rolled-omelette tamago sushi.', source: R + 'B416138198/' },
      ],
      japanese_sources_summary: '食べログ: 寿司、中京区両替町通二条下る金吹町479、烏丸御池から283m、月〜土 11:00〜15:00、日・祝日休み、予約不可、カード・電子マネー・QR 不可、20席。口コミ (2019年8月〜2026年7月、英語): 昭和の町の老舗、もとは寿司屋でいまはうどんとそばが中心、平日の昼は会社員でにぎわう、鳥南蛮うどんといなり3個で990円 (2025年11月)、きつねうどん、京風のたぬき (しょうが、お揚げ、あんかけ)、あんかけの卵とじ、海苔とわさびの花巻うどん、にぎり1,600円 (だし巻きの玉子、赤だし)、箱寿司、いなり、巻き寿司、助六。',
      confidence: 'medium', sources: [TB, R + 'B408216018/', R + 'B416138198/', R + 'B458751576/', R + 'B459761261/', R + 'B463267900/', R + 'B463290762/', R + 'B480143097/', R + 'B510919177/', R + 'B512229155/', R + 'B531482565/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; lunch only; busy with office workers at noon.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区両替町通二条下る金吹町479',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.013326, 135.758993); cross-checked: GSI 京都府京都市中京区金吹町479番地 (lot) 49 m; nearest existing record 89.0 m (kyoto_zen_kashoin_muromachi); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B463290762/', R + 'B408216018/'],
    price_note: 'Prices from April 2023 and November 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tori-nanban udon with three inari', '¥990', 'Udon', 'no', 'no', 'November 2025.', 'torinanban'),
      it('', '', 'Nigiri set', '¥1,600', 'Sushi', 'ask', 'no', 'April 2023.', 'nigiri'),
    ] }, {
    cuisine: 'もとは寿司屋で、いまはうどんとそばが中心の町の老舗 (2019〜2026年の口コミ)・鳥南蛮うどんといなり3個990円 (2025年11月)、厚いお揚げのきつねうどん、京風のたぬき (しょうが、お揚げ、あんかけ)、あんかけの卵とじ、海苔とわさびの花巻うどん (2022年12月〜2026年7月)・だし巻きの玉子と赤だしのにぎり1,600円、箱寿司、いなりと巻き寿司、助六 (2019年8月〜2025年8月)・1,000〜2,000円未満 (2023〜2025年の口コミ)',
    neighborhood: '両替町二条',
    gf_detail: 'グルテンフリー不可。醤油のだしの小麦のうどんとそば、寿司の味付けも醤油の可能性 (2019〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのつゆ、鳥のうどん、魚の寿司。いなりもだしの可能性 (2019〜2026年の口コミ)。',
    notes: '[うどんと寿司・両替町二条、昼のみ・現金のみ] 会社員でにぎわう昭和の町の店。やさしいだしの鳥南蛮、きつね、京風たぬき、海苔とわさびの花巻うどんに、いなり、箱寿司、にぎりのセット。日曜休み。',
  });
}

// ================================================================ 森田倶楽部 Morita Club
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043667/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '26:00']);
  put({
    id: 'kyoto_morita_club', name: '森田倶楽部 (Morita Club)', category: 'OMNI',
    lat: 35.01627743786522, lng: 135.76876388047003, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Prosciutto with fruit and grilled aubergine may suit, but tartines, pâté, kara-age and breadcrumb toppings contain wheat (2025–2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: charcuterie, duck, shrimp and meat dishes (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday 18:00–2:00; closed Sunday and a few other days a month (not fixed); hours may change (Tabelog). Reservations accepted (Tabelog). Cards, e-money and QR (Tabelog). A counter and two tables, dimly lit; non-smoking (Tabelog; August 2026). Champagne by the glass (August 2026). On Kawaramachi-dori north of Takeyamachi, about 5 min walk from Jingu-Marutamachi Stn. Opened 8 September 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-Marutamachi',
    cuisine: 'Chic, late-night French wine bar with carefully made small plates (2025–2026 reviews) · mainly French wines, Alsace Riesling, Champagne by the glass, plus Japanese spirits (May–August 2026) · chicken-ham Genovese ¥800; 12-month prosciutto with seasonal fruit ¥1,800; Omi beef tendon braised in red wine with herb crumbs ¥1,600 (March 2026) · tomato and ricotta tartine, pâté de campagne, duck ham, kara-age, grilled aubergine with prosciutto, the signature Morita shrimp, desserts (October 2025–September 2026) · about ¥5,000–8,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('森田倶楽部 河原町'), menu_url: null,
    notes: '[French wine bar · Kawaramachi-Marutamachi, until 2 a.m.] A dim, grown-up wine bar of mostly French bottles and Champagne by the glass, with excellent small plates — prosciutto and fruit, red-wine Omi beef tendon, the signature Morita shrimp — until 2 a.m. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Per reviewers: a wine bar opened 8 September 2025 by an owner who previously worked at the Kyoto restaurant Hahaha (May 2026), known for warm hospitality and food carefully matched to wine (October 2025–September 2026).',
      philosophy: null, specialty: 'Wine-matched small plates; Morita shrimp.',
      anecdotes: [
        { text: 'A May 2026 diner who knew the owner had worked at Hahaha expected good food and found it, along with an Alsace Riesling.', source: R + 'B527610496/' },
        { text: 'An August 2026 night owl was delighted by Champagne by the glass and opening until 2 a.m.', source: R + 'B535498574/' },
        { text: 'A September 2026 regular on a ninth visit brought a daughter and the daughter’s friend for a light dinner.', source: R + 'B527767113/' },
      ],
      japanese_sources_summary: '食べログ: バー、中京区河原町通竹屋町上る大文字町233、神宮丸太町駅から379m、月〜土 18:00〜26:00、日曜休み、不定休 (月に数回)、予約可、カード・電子マネー・QR 可、カウンター、禁煙、2025年9月8日開店。口コミ (2025年10月〜2026年9月、英語): フランスワイン中心のワインバー、アルザスのリースリング、グラスのシャンパン、和の蒸留酒、鶏ハムのジェノベーゼ800円、12か月熟成の生ハムと季節の果物1,800円、近江牛すじの赤ワイン煮と香草パン粉1,600円、トマトとリコッタのタルティーヌ、パテ・ド・カンパーニュ、鴨のハム、唐揚げ、焼きなすと生ハム、名物の森田えび、デザート、Hahaha 出身の店主 (2026年5月)、深夜2時まで。',
      confidence: 'medium', sources: [TB, R + 'B517033330/', R + 'B517661966/', R + 'B519078648/', R + 'B520262739/', R + 'B524516146/', R + 'B527610496/', R + 'B527767113/', R + 'B534949828/', R + 'B535098744/', R + 'B535498574/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Late-night; cards and QR; counter.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区河原町通竹屋町上る大文字町233',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.016277, 135.768764); GSI matched a different 大文字町 1.8 km away, so the Tabelog pin is kept unconfirmed — it sits 3.6 m from kyoto_raamen_hiryuu at 大文字町234, the next lot; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524516146/'],
    price_note: 'Prices from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chicken-ham Genovese', '¥800', 'Small plates', 'ask', 'no', 'March 2026.', 'genovese'),
      it('', '', '12-month prosciutto with seasonal fruit', '¥1,800', 'Small plates', 'ask', 'no', 'March 2026.', 'prosciutto'),
      it('', '', 'Omi beef tendon in red wine with herb crumbs', '¥1,600', 'Mains', 'no', 'no', 'March 2026.', 'gyusuji'),
    ] }, {
    cuisine: 'ていねいな小皿の大人の深夜のフレンチのワインバー (2025〜2026年の口コミ)・フランス中心のワイン、アルザスのリースリング、グラスのシャンパン、和の蒸留酒 (2026年5〜8月)・鶏ハムのジェノベーゼ800円、12か月熟成の生ハムと季節の果物1,800円、近江牛すじの赤ワイン煮と香草パン粉1,600円 (2026年3月)・トマトとリコッタのタルティーヌ、パテ・ド・カンパーニュ、鴨のハム、唐揚げ、焼きなすと生ハム、名物の森田えび、デザート (2025年10月〜2026年9月)・5,000〜8,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '河原町丸太町',
    gf_detail: '要確認。生ハムと果物や焼きなすは合う可能性があるが、タルティーヌ、パテ、唐揚げ、パン粉は小麦 (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。シャルキュトリ、鴨、えび、肉料理 (2025〜2026年の口コミ)。',
    notes: '[フレンチのワインバー・河原町丸太町、深夜2時まで] フランス中心のワインとグラスのシャンパンの薄暗い大人のバー。生ハムと果物、近江牛すじの赤ワイン煮、名物の森田えびなど見事な小皿を深夜2時まで。日曜休み。',
  });
}

save();
