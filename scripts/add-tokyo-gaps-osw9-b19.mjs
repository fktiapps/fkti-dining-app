// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 19.
//   + 鳥義士 Tori Gishi (charcoal jidori yakitori by Roppongi Stn, reopened 17 Nov 2025; course with drinks ¥9,300)
//   + リストランテ オステリア Ristorante L'osteria (long-running Italian with a terrace on the 3rd floor of the Pyramide building)
//   + ケバブバー Kebab Bar (5-seat chicken-kebab counter on Roppongi-dori; sandwiches and rice bowls ¥800)
//   + orange (all-day dining bar in Tokyo Midtown Plaza, truffle fries, terrace; Zetton)
//   Skipped: R1 TOKYO Bar&Restaurant 13260955 — sister venue of R2 SUPPER CLUB (tokyo_r2_supper_club_roppongi), already in data.
//   Chain check: none of the four is in data/tokyo, osaka or kyoto by name, Tabelog id or address; no same-concept sister
//   found for any of them.
//   Pins: Tori Gishi (2F) and Kebab Bar (1F) share ROPPONGI662 (6-2-35) with Tabelog points 2 m apart, so Kebab Bar is offset
//   ~9 m south-west. L'osteria is 10 m from RIO GRANDE GRILL in the same building — no offset. orange: the GSI lot point for
//   Akasaka 9-7-1 (all of Tokyo Midtown) is 168 m away, so loc_precise is false. Tabelog URLs copied from each listing.txt
//   line 1. No placeholder hours (Kebab Bar has none listed).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13260955', 'R1 TOKYO Bar&Restaurant: sister venue of R2 SUPPER CLUB (tokyo_r2_supper_club_roppongi) — branch of a brand already in data');

// ================================================================ 鳥義士
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13181076/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:59']);
  put({
    id: 'tokyo_tori_gishi_roppongi', name: '鳥義士 (Tori Gishi)', category: 'OMNI',
    lat: 35.66227, lng: 139.730707, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Skewers with salt or tare, chicken skin with ponzu and a mini oyakodon in dashi (2026 reviews); nothing is said about gluten.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken yakitori courses with chicken soup.',
    hours_raw: 'Mon–Sat and days before/after holidays 18:00–24:00 (last order 23:30); closed Sundays and holidays (Tabelog). 5% service charge. 20 seats: 12 at the counter and a private room for up to 8 (groups of 4+, booking required, one group a day). Heated tobacco only, in a designated area. Cards, e-money and QR (PayPay, Alipay and others). Reopened 17 November 2025 (August 2026 reviews). Some cuts sell out later in the evening (September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 6-2-35, ROPPONGI662 2F, beside Roppongi Stn exit 1a/1b near the former Azabu Police Station — 30 seconds from exit 3 (Hibiya line)',
    cuisine: 'Charcoal-grilled jidori yakitori (Tabelog shop text; 2026 reviews) · jidori tasting course with 2.5 hours of drinks ¥9,300, 11 dishes: two appetizers (grated daikon with quail egg, pickles), salad, a small dish such as chicken ham or chicken skin with ponzu, seven skewers and grilled items, a mini oyakodon, homemade collagen chicken soup, salted vanilla ice cream; food-only course ¥8,000 (Tabelog; August–September 2026) · skewers: tsukune with rich egg yolk (the speciality), breast, thigh (kashiwa), heart, liver, wings, neck, bonjiri, knee cartilage, skin, ginkgo, zucchini, nagaimo, shiitake · a hot pot of house chicken broth on request · sake, shochu, wine; sansho and shichimi on the counter',
    website: null, gmaps: gm('鳥義士 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakitori · Roppongi, a jidori counter by the station with an all-in ¥9,300 course] A chic, dark counter of twelve on the second floor right beside Roppongi Station, reopened in November 2025, where jidori chicken is grilled over charcoal in front of you. Most diners in 2026 take the ¥9,300 tasting course with two and a half hours of drinks: appetizers and salad, seven skewers — the tsukune with egg yolk is the speciality, the liver converts sceptics — then a mini oyakodon, a deep collagen chicken soup and salted vanilla ice cream. Reviewers call it great value for Roppongi and good for dates and business; a private room seats up to eight. Open until midnight, Monday to Saturday.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Two August 2026 diners note the shop reopened on 17 November 2025 as a charcoal-grilled jidori specialist. No one is named in the sources read.',
      philosophy: null, specialty: 'Tsukune with egg yolk; collagen chicken soup.',
      anecdotes: [
        { text: '"The homemade collagen chicken soup stole the show that night." — August 2026, tasting course ¥9,300.', source: R + 'B534194708/' },
        { text: '"Personally, my favorite was the liver. I usually don’t enjoy it much, but it was surprisingly delicious without any off-putting smell, leaving a lasting impression!" — August 2026.', source: R + 'B533649490/' },
        { text: '"The chicken neck, in particular, had a delightful bounce and an explosion of flavor, making it the best dish of the day." — August 2026.', source: R + 'B533206493/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鳥義士、港区六本木6-2-35 ROPPONGI662 2F、日比谷線六本木駅3番出口から30秒、月〜土・祝前日・祝後日18:00〜24:00 (L.O.23:30)、日祝休み、サービス料5%、20席 (カウンター12、個室8)、加熱式たばこのみの喫煙所、カード・電子マネー・QR可。店の紹介: 名物のつくねを濃厚な卵黄で。コース: 地鶏の食べ比べコースと2.5時間飲み放題9,300円、料理のみ8,000円。口コミ(2026年8月〜9月): 2025年11月17日に再オープン、炭火の地鶏、前菜 (うずらの卵の大根おろし、漬物)、サラダ、串7本、ミニ親子丼、自家製のコラーゲン鶏スープ、塩バニラのアイス、レバーが評判、六本木にしてはお得。',
      confidence: 'medium', sources: [TB, R + 'B520967384/', R + 'B533206493/', R + 'B533649490/', R + 'B533978785/', R + 'B534028980/', R + 'B534194708/', R + 'B534952896/', R + 'B535192690/', R + 'B535503488/', R + 'B535920127/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course-based yakitori counter; book via Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木6-2-35 ROPPONGI662 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with courses; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.662270, 139.730707); GSI 東京都港区六本木六丁目2番 (lot) 37m; Kebab Bar (tokyo_kebab_bar_roppongi, same building, 1F) is the one offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534194708/'],
    price_note: 'Course prices from Tabelog (tax included) and August–September 2026 reviews; 5% service.', last_checked: TODAY, items: [
      it('', '', 'Jidori tasting course with 2.5 hours of drinks (11 dishes)', '¥9,300', 'Course', 'ask', 'no', 'Tabelog; 2026 reviews.', 'course_nomihodai'),
      it('', '', 'Jidori course, food only', '¥8,000', 'Course', 'ask', 'no', 'Tabelog.', 'course_food'),
      it('', '', 'Tsukune with egg yolk', '', 'Skewers', 'ask', 'no', 'Tabelog shop text; 2026 reviews.', 'tsukune'),
    ] }, {
    cuisine: '炭火で焼く地鶏の焼き鳥 (食べログの店の紹介、2026年の口コミ)・2.5時間飲み放題付きの地鶏の食べ比べコース9,300円、11品: 前菜2品 (うずらの卵の大根おろし、漬物)、サラダ、鶏ハムや鶏皮ポン酢などの小鉢、串と焼き物7品、ミニ親子丼、自家製のコラーゲン鶏スープ、塩バニラのアイス。料理のみのコース8,000円 (食べログ、2026年8〜9月)・串: 名物の濃厚な卵黄のつくね、ささみ、かしわ、ハツ、レバー、手羽、せせり、ぼんじり、げんこつ、皮、銀杏、ズッキーニ、長芋、椎茸・頼めば自家製の鶏スープの鍋も・日本酒、焼酎、ワイン、カウンターに山椒と七味',
    neighborhood: '六本木6-2-35 ROPPONGI662 2F、六本木駅1a・1b出口のすぐ横、旧 Azabu Police Station の近く。日比谷線3番出口から30秒',
    gf_detail: '要確認。串は塩かたれで、鶏皮ポン酢や出汁のミニ親子丼もある (2026年の口コミ)。グルテンについての説明はない。',
    vegan_detail: 'ヴィーガン不可。鶏の焼き鳥のコースと鶏のスープ。',
    notes: '[焼き鳥・六本木、駅のすぐ横の地鶏のカウンター、飲み放題付き9,300円] 六本木駅のすぐ横のビル2階、シックで落ち着いたカウンター12席で、2025年11月に再オープン。目の前で地鶏を炭火で焼く。2026年の客の多くは2.5時間飲み放題付きの9,300円のコース: 前菜とサラダ、串7本 (名物は卵黄のつくね、レバーは苦手な人も驚く)、ミニ親子丼、濃厚なコラーゲン鶏スープ、塩バニラのアイス。六本木にしてはお得で、デートにも会食にもいいとの声。個室は8名まで。月〜土、夜12時まで。',
  });
}

// ================================================================ リストランテ オステリア
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13001890/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.losteria-roppongi.com/';
  const H = day(['12:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'tokyo_ristorante_losteria_roppongi', name: "リストランテ オステリア (Ristorante L'osteria)", category: 'OMNI',
    lat: 35.661748, lng: 139.731263, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses include two pastas (e.g. tomato and karasumi, September 2026) and a risotto; nothing is said about gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and antipasti such as white asparagus and eggplant are offered (April 2026), but no vegan dishes are described.',
    hours_raw: 'Mon–Sat 12:00–15:00 (last order 14:00) and 17:30–22:00 (last order 20:00); closed Sundays, and over the summer holidays and New Year (Tabelog). 45 seats: 30 inside and 15 on the terrace (not on rainy days); private rooms for 2–8, room fee ¥5,500, booked by phone only. Non-smoking. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR. Wine cellar.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 6-6-9, ピラミデビル 3F, near Roppongi Hills — 1 min from Roppongi Stn exit 1',
    cuisine: 'Traditional Italian with seasonal ingredients (Tabelog shop text) · antipasti chosen from a selection, portions adjusted to appetite: white asparagus, marinated sardines, burrata caprese, eggplant, ham with walnut sauce (March–July 2026) · pasta and risotto: a short pasta shaped like Vesuvius, firefly-squid risotto, tomato and karasumi pastas · mains: ossobuco, roast lamb with mint, fish or meat · a dessert cart when available · courses (Tabelog, tax included): seasonal lunch course with a double main ¥11,000; dinner omakase, 7 dishes, ¥15,000; a seasonal dinner course; a lunch prix-fixe from about ¥3,000–6,000 in reviews · a full wine cellar',
    website: SITE, gmaps: gm("Ristorante L'osteria 六本木"), menu_url: TB + 'dtlmenu/',
    notes: "[Italian · Roppongi, a long-running ristorante with a terrace above the Pyramide] A long-established Italian on the third floor of the Pyramide building near Roppongi Hills, with a calm dining room, private rooms and a 15-seat terrace. Guests choose from a spread of antipasti — white asparagus, marinated sardines, burrata caprese — in portions sized to appetite, then pastas such as a Vesuvius-shaped short pasta and a firefly-squid risotto, ossobuco or roast lamb, and wine from a deep cellar. Diners in 2026 praise the warm service and traditional cooking; a few found the portions small, the service slow or the food not what it was, and the dessert cart is not always out. Lunch prix-fixe, dinner omakase ¥15,000; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reviewers in 2026 describe it as a long-established Roppongi Italian; one has come for dinner several times over the years. No one is named in the sources read.',
      philosophy: 'The traditions and culture of Italy through seasonal ingredients (Tabelog course text).', specialty: 'Antipasti selection; ossobuco.',
      anecdotes: [
        { text: '"This restaurant gets you excited right from choosing the appetizers." — April 2026.', source: R + 'B526577065/' },
        { text: '"… adjust the portion sizes, which I think is great for women with smaller appetites." — July 2026.', source: R + 'B528955226/' },
        { text: '"One disappointment was the absence of a dessert cart, which I had been looking forward to." — June 2026, course of about ¥20,000.', source: R + 'B530696365/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): リストランテ オステリア、港区六本木6-6-9 ピラミデビル3F、六本木駅1番出口から徒歩1分、月〜土12:00〜15:00 (L.O.14:00)、17:30〜22:00 (L.O.20:00)、日休み、夏休みと年末年始は休み、45席 (店内30、テラス15)、2〜8名の個室 (個室料5,500円、電話のみ)、禁煙、カード可、ワインセラー、ベジタリアンメニューあり。コース: 昼の季節のスペシャルコース11,000円、夜のおまかせ7品15,000円。口コミ(2026年3月〜9月): 老舗、選べる前菜 (白アスパラ、鰯のマリネ、ブッラータのカプレーゼ、茄子、胡桃のソースのハム)、ヴェスヴィオのショートパスタ、蛍烏賊のリゾット、オッソブーコ、仔羊のロースト、からすみのパスタ、量が少ない・提供が遅いという声、デザートワゴンがない日も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B209797705/', R + 'B524351581/', R + 'B526577065/', R + 'B527084237/', R + 'B527208024/', R + 'B528955226/', R + 'B530696365/', R + 'B533690514/', R + 'B536377597/', R + 'B536855202/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses or à la carte; staff explain the menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木6-6-9 ピラミデビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with courses and an official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.661748, 139.731263); GSI 東京都港区六本木六丁目6番 (lot) 17m; RIO GRANDE GRILL (same building) is 10 m and Bistro Vino 26 m away, so no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536855202/'],
    price_note: 'Course prices from Tabelog (tax included) and a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch: seasonal special course with fish and meat mains (6 dishes)', '¥11,000', 'Lunch', 'ask', 'no', 'Tabelog.', 'lunch_special'),
      it('', '', 'Dinner omakase course (7 dishes)', '¥15,000', 'Course', 'ask', 'no', 'Tabelog; September 2026 review.', 'dinner_omakase'),
      it('', '', 'Ossobuco', '', 'Main', 'ask', 'no', 'April 2026 review.', 'ossobuco'),
    ] }, {
    cuisine: '季節の食材を使う伝統的なイタリアン (食べログの店の紹介)・好みの量で選べる前菜: 白アスパラ、鰯のマリネ、ブッラータのカプレーゼ、茄子、胡桃のソースのハム (2026年3〜7月)・パスタとリゾット: ヴェスヴィオ山の形のショートパスタ、蛍烏賊のリゾット、トマトとからすみのパスタ・メイン: オッソブーコ、ミントの仔羊のロースト、魚か肉・あればデザートワゴン・コース (食べログ、税込み): 魚と肉のダブルメインの昼の季節のコース11,000円、夜のおまかせ7品15,000円、夜の季節のコース。口コミでは昼のプリフィクスが約3,000〜6,000円・充実したワインセラー',
    neighborhood: '六本木6-6-9 ピラミデビル3F、Roppongi Hills の近く。六本木駅1番出口から徒歩1分',
    gf_detail: '要確認。コースにはパスタが2皿 (トマトやからすみ、2026年9月) とリゾットが入る。グルテンについての説明はない。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、白アスパラや茄子の前菜も選べる (2026年4月) が、ヴィーガンの料理の記載はない。',
    notes: '[イタリアン・六本木、ピラミデの上のテラス付きの老舗リストランテ] Roppongi Hills 近くのピラミデビル3階にある老舗のイタリアン。落ち着いたダイニング、個室、15席のテラス。並んだ前菜から好きなものを好みの量で選び (白アスパラ、鰯のマリネ、ブッラータのカプレーゼ)、ヴェスヴィオの形のショートパスタや蛍烏賊のリゾット、オッソブーコや仔羊のロースト、充実したセラーのワインへ。2026年の客は温かいサービスと伝統的な料理を称え、量が少ない、提供が遅い、以前ほどではないという声も少し。デザートワゴンは出ない日もある。昼はプリフィクス、夜のおまかせ15,000円、日曜休み。',
  });
}

// ================================================================ ケバブバー
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13112305/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'tokyo_kebab_bar_roppongi', name: 'ケバブバー (Kebab Bar)', category: 'OMNI',
    lat: 35.662225, lng: 139.730622, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The sandwiches come in pita bread; the rice bowls are rice with chicken, cabbage and a sauce whose ingredients are not given.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the only meat is chicken (June 2022), with a mayonnaise-like sauce (March 2025).',
    hours_raw: 'Hours are not listed on Tabelog. Lunch is busy with takeout for nearby offices (November 2025). Cash and PayPay (January 2026); Tabelog lists no cards but e-money and QR. 5 counter seats; mostly takeout. Loud music (November 2023).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 6-2-35, ROPPONGI662 1F, on Roppongi-dori seconds from Roppongi Stn exit 1a (Hibiya line), by the former Azabu Police Station',
    cuisine: 'Chicken kebab (2022–2026 reviews) · kebab sandwich in pita, large ¥800 (January 2026); kebab rice bowl ¥800, large +¥100 (March 2025); kebab curry; kebab on its own; sizes for every item (November 2025) · sauces: original, spicy or mixed · lots of shredded cabbage · canned cola ¥100 (November 2023)',
    website: null, gmaps: gm('ケバブバー 六本木'), menu_url: null,
    notes: "[Kebab · Roppongi, a 5-seat chicken-kebab counter on Roppongi-dori] A small kebab counter right by Roppongi Station on Roppongi-dori, playing loud music, where office workers come at lunch for chicken kebab sandwiches piled with cabbage in pita, kebab rice bowls and kebab curry, with original, spicy or mixed sauce, for around ¥800. There are five seats; most people take it away. Reviewers over several years call it cheap and filling for Roppongi, though some found too much cabbage or too much mayonnaise-like sauce. Cash or PayPay.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A 2022 reviewer was unsure whether the shop is named "Kebab Bar" or is a branch of another kebab name. No one is named in the sources read.',
      philosophy: null, specialty: 'Chicken kebab sandwich and rice bowl.',
      anecdotes: [
        { text: '"This place offers a variety of kebab delights, from classic kebab sandwiches to kebab rice bowls, kebab curry, and even just kebabs." — November 2025.', source: R + 'B527052420/' },
        { text: '"It seems like there’s more cabbage than meat, but there’s still a good amount of meat in there too." — January 2026, large kebab sandwich ¥800.', source: R + 'B461257645/' },
        { text: '"What stood out the most was the excessive amount of a mayonnaise-like sauce poured on top." — March 2025, kebab rice bowl ¥800.', source: R + 'B502889963/' },
      ],
      japanese_sources_summary: '食べログ: ケバブバー、港区六本木6-2-35 ROPPONGI662 1F、営業時間の記載なし、カード不可 (電子マネー・QR可)、5席。口コミ(2022年〜2026年1月): 鶏肉のケバブ、ケバブサンドの大800円、ケバブ丼800円 (大盛り+100円)、ケバブカレー、オリジナル・辛口・ミックスのソース、キャベツたっぷり、昼はテイクアウトの客が多い、現金と PayPay、大音量の音楽、マヨネーズのようなソースが多すぎるという声。',
      confidence: 'low', sources: [TB, R + 'B453473990/', R + 'B461257645/', R + 'B46777579/', R + 'B474961983/', R + 'B485733665/', R + 'B486387831/', R + 'B489199697/', R + 'B502889963/', R + 'B513587636/', R + 'B527052420/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; point at the menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木6-2-35 ROPPONGI662 1F',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing (not shop-maintained) without hours; latest review dated January 2026.' },
    pin_source: `Tabelog ${TB} (35.662275, 139.730682), 2 m from Tori Gishi (tokyo_tori_gishi_roppongi, same building, 2F), so offset ~9 m south-west; GSI 東京都港区六本木六丁目2番 (lot) 36m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B461257645/', R + 'B502889963/'],
    price_note: 'Prices from March 2025 and January 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kebab sandwich, large', '¥800', 'Kebab', 'no', 'no', 'January 2026 review.', 'sandwich'),
      it('', '', 'Kebab rice bowl (large +¥100)', '¥800', 'Kebab', 'ask', 'no', 'March 2025 review.', 'kebab_don'),
    ] }, {
    cuisine: '鶏肉のケバブ (2022〜2026年の口コミ)・ピタパンのケバブサンドの大800円 (2026年1月)、ケバブ丼800円、大盛り+100円 (2025年3月)、ケバブカレー、ケバブだけも。どれもサイズを選べる (2025年11月)・ソースはオリジナル、辛口、ミックス・キャベツたっぷり・缶コーラ100円 (2023年11月)',
    neighborhood: '六本木6-2-35 ROPPONGI662 1F、六本木通り沿い、日比谷線六本木駅1a出口からすぐ、旧 Azabu Police Station のそば',
    gf_detail: '要確認。サンドはピタパン。丼はご飯に鶏とキャベツとソースで、ソースの材料は書かれていない。',
    vegan_detail: 'ヴィーガン不可。肉は鶏のみ (2022年6月) で、マヨネーズのようなソースもかかる (2025年3月)。',
    notes: '[ケバブ・六本木、六本木通りの5席の鶏ケバブ] 六本木駅のすぐそば、六本木通り沿いで大音量の音楽を流す小さなケバブのカウンター。昼は近くの会社員がテイクアウトに来て、キャベツたっぷりのピタパンの鶏ケバブサンド、ケバブ丼、ケバブカレーを、オリジナル、辛口、ミックスのソースで、800円前後で買う。席は5つで、ほとんどがテイクアウト。何年にもわたる口コミは六本木にしては安くてお腹いっぱいと書き、キャベツが多すぎる、マヨネーズのようなソースが多すぎるという声も。現金か PayPay。',
  });
}

// ================================================================ orange
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13037354/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://midtown-orange.zetton.co.jp/';
  const W = day(['11:00', '23:00']); const F = day(['11:00', '02:00']);
  put({
    id: 'tokyo_orange_midtown', name: 'orange', category: 'OMNI',
    lat: 35.664809, lng: 139.731109, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, gratin and a hamburger are signatures (October 2026); nothing is said about gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and there is a green salad, but no vegan dishes are described.',
    hours_raw: 'Sun–Thu 11:00–23:00; Fri–Sat 11:00–02:00; irregular holidays (Tabelog). 10% service charge after 22:00, except on courses. 130 seats: counter, sofas and a terrace with heaters; private rooms for 4–8; hire for 50+. Non-smoking. Wheelchair accessible. Cards, e-money and QR. Midtown parking P3: one hour free with ¥2,500 spent (Tabelog). Weekday happy hour (Tabelog shop text).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Tokyo Midtown Plaza 1F, Akasaka 9-7-1 — 1 min from Roppongi Stn exit 7 (Oedo line), 3 min from exit 8 (Hibiya line)',
    cuisine: 'An all-day dining bar with a menu "unbound by country or genre" (Tabelog shop text) · signature French fries with black truffle; seasonal pasta; gratin; grilled top sirloin; low-temperature salmon; large rigatoni (2026 reviews) · dinner share course of 7 dishes with 2 hours of drinks ¥7,500 (Tabelog) · lunch: hamburger ¥1,950 (+¥500 for salad or soup and a drink); a ¥2,500 set with a drink, deli salad, main, dessert and coffee; daily fish plate; a wine-free-flow lunch course ¥6,000 (October 2026) · champagne and cocktails, weekday happy hour',
    website: SITE, gmaps: gm('orange 東京ミッドタウン'), menu_url: TB + 'dtlmenu/',
    notes: "[Dining bar · Roppongi, an all-day terrace bar in Tokyo Midtown] A big, polished dining bar on the ground floor of Tokyo Midtown's Plaza, open from 11 am until 11 pm — 2 am on Fridays and Saturdays — with a counter, sofas, a second floor and a terrace kept warm with heaters. The signature is French fries with black truffle; around it, seasonal pastas, gratins, grilled sirloin and a ¥7,500 sharing course with drinks. Lunch brings a ¥1,950 hamburger and set lunches popular with gallery-goers. Diners in 2026 like the setting and the drinks prices; some found food pricey or uneven and terrace service slow. 10% service after 10 pm.",
    chef_bio: { chef_name: null, roles: [], origin: 'Operated by Zetton (official site domain zetton.co.jp)',
      background: 'The official site is on the Zetton domain (midtown-orange.zetton.co.jp). No one is named in the sources read.',
      philosophy: 'A unique, reliable line-up unbound by country or genre (Tabelog shop text).', specialty: 'French fries with black truffle.',
      anecdotes: [
        { text: '"There are heaters, so sitting outside might be nice even in winter." — October 2026.', source: R + 'B536837371/' },
        { text: '"In this stylish space, I enjoyed … signature truffle-flavored French fries, delicious pasta, and exquisite gratin dishes." — October 2026.', source: R + 'B537990312/' },
        { text: '"First, the pork shoulder was quite tough, possibly overcooked, making it difficult to cut and eat." — October 2026, ¥2,500 lunch.', source: R + 'B538076834/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): orange、港区赤坂9-7-1 東京ミッドタウン プラザ1F、大江戸線六本木駅7番出口から徒歩1分、日比谷線8番出口から3分、日〜木11:00〜23:00、金土11:00〜翌2:00、不定休、22時以降はサービス料10% (コースは除く)、130席 (カウンター、ソファ、テラス)、個室4〜8名、禁煙、カード・電子マネー・QR可、ベジタリアンメニューあり。店の紹介: 国やジャンルにとらわれないメニュー、平日のハッピーアワー、黒トリュフのフライドポテト。シェアコース2時間飲み放題付き7,500円。口コミ(2026年10月): ハンバーガーランチ1,950円、2,500円のランチセット、ワイン飲み放題のランチ6,000円、パスタ、グラタン、低温調理のサーモン、テラスのヒーター。',
      confidence: 'medium', sources: [TB, SITE, R + 'B492893802/', R + 'B536837371/', R + 'B537093123/', R + 'B537230387/', R + 'B537795920/', R + 'B537961176/', R + 'B537990312/', R + 'B538076834/', R + 'B538403152/', R + 'B538440722/'] },
    cultural_comfort: { level: 'english', note: 'International staff and a mall setting (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, address_ja: '東京都港区赤坂9-7-1 東京ミッドタウン プラザ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with a course and an official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.664809, 139.731109); GSI 東京都港区赤坂九丁目7番 (lot) is 168 m away — the lot is the whole of Tokyo Midtown — so loc_precise false; no record within 40 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537093123/', R + 'B538076834/'],
    price_note: 'Course price from Tabelog; lunch prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Dinner share course, 7 dishes, 2 hours of drinks', '¥7,500', 'Course', 'ask', 'ask', 'Tabelog.', 'share_course'),
      it('', '', 'Hamburger lunch', '¥1,950', 'Lunch', 'no', 'no', 'October 2026 review; +¥500 for salad or soup and a drink.', 'hamburger'),
      it('', '', 'Lunch set: drink, deli salad, main, dessert, coffee', '¥2,500', 'Lunch', 'ask', 'ask', 'October 2026 review.', 'lunch_set'),
      it('', '', 'French fries with black truffle', '', 'Signature', 'ask', 'ask', 'Tabelog; October 2026 review.', 'truffle_fries'),
    ] }, {
    cuisine: '国やジャンルにとらわれないメニューの昼から夜までのダイニングバー (食べログの店の紹介)・名物の黒トリュフのフライドポテト、季節のパスタ、グラタン、ランプステーキ、低温調理のサーモン、大きなリガトーニ (2026年の口コミ)・2時間飲み放題付きの7品のシェアコース7,500円 (食べログ)・昼: ハンバーガー1,950円 (+500円でサラダかスープとドリンク)、ドリンク、デリサラダ、メイン、デザート、食後のドリンクの2,500円のセット、日替わりの魚のプレート、ワイン飲み放題のランチコース6,000円 (2026年10月)・シャンパンとカクテル、平日のハッピーアワー',
    neighborhood: 'Tokyo Midtown プラザ1F、赤坂9-7-1。六本木駅7番出口 (大江戸線) から徒歩1分、8番出口 (日比谷線) から3分',
    gf_detail: '要確認。パスタ、グラタン、ハンバーガーが名物 (2026年10月)。グルテンについての説明はない。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、グリーンサラダもあるが、ヴィーガンの料理の記載はない。',
    notes: '[ダイニングバー・六本木、Tokyo Midtown のテラス付きの昼から夜までのバー] Tokyo Midtown のプラザ1階の大きく洗練されたダイニングバー。朝11時から夜11時まで (金土は翌2時まで)、カウンター、ソファ、2階、ヒーターのあるテラス。名物は黒トリュフのフライドポテトで、季節のパスタ、グラタン、ランプステーキ、飲み放題付きのシェアコース7,500円も。昼は1,950円のハンバーガーやセットが美術館帰りの客に人気。2026年の客は雰囲気と飲み物の値段を気に入り、料理が高い、ばらつきがある、テラスの注文が遅いという声も。22時以降はサービス料10%。',
  });
}

save();
