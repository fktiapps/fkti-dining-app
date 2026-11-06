// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 42.
//   + GRILL TERRACE ABURU (café and BBQ terrace in Miyako Messe, Okazaki)
//   + meat couture (shared-table meat bistro and natural wine, by Higashi Honganji)
//   + ゴリーズ キッチン Gori's Kitchen (wood-fired pizza and pasta, Kamitoba near Kintetsu Jujo)
//   + 漁港直送 海鮮酒場 あんじ 烏丸六角店 Anji Karasuma Rokkaku (seafood izakaya, open to 1 am)
//   Same-name counts first, per brand or operator (2026-11-06): ABURU — one in Kyoto (Tokyo's 大衆酒場 ABURU. is unrelated).
//   meat couture — one. ゴリーズ キッチン — one. あんじ — Tabelog lists three in Kyoto (烏丸六角店, 麩屋町綾小路店, 居酒屋
//   あんじ 府庁前店); others elsewhere are unrelated — a small local group, drafted.
//   Taken on 2026-11-06: `next core 200` (lane) gave ABURU 26036164 and meat couture 26041738; `next notable 200` (lane) gave
//   Gori's Kitchen 26027434 and あんじ 26003098. None is in data/kyoto.json: grep by name and address (成勝寺町9-1 みやこめっせ,
//   亀町8, 上鳥羽菅田町65, 堂之前町231 星の子六角ビル) found none.
//   Service charges per Tabelog's Japanese original: あんじ 「22時以降は深夜料金418円（税込）が発生いたします」; the others none
//   listed. No halal claims; no owner deaths in the sources.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-42');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ GRILL TERRACE ABURU
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036164/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['10:00', '17:00']); const WE = day(['10:00', '19:00']);
  put({
    id: 'kyoto_grill_terrace_aburu', name: 'GRILL TERRACE ABURU', category: 'OMNI',
    lat: 35.013242, lng: 135.780549, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, curry, fried chicken and cakes (2025–26 reviews); Tabelog says allergy information is available.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; most lunch plates are meat or seafood (2025–26 reviews).',
    hours_raw: 'Café weekdays 10:00–17:00 (last order 16:30), weekends and holidays 10:00–19:00 (last order 18:30); BBQ 10:00–21:30, last start 19:00; closed when the building is closed (Tabelog). Reservations accepted; BBQ bookings cancelled the day before or on the day are charged (Tabelog). Cards, e-money and QR (Tabelog). 108 seats: 60 on the terrace (unused in rain), 38 tables inside, 10 at the counter; parties up to 48 seated (Tabelog). Non-smoking; wheelchair accessible; free Wi-Fi (Tabelog). Miyako Messe underground car park, no validation (Tabelog). 1st floor of Miyako Messe (Kyoto City Industry Hall), Okazaki; 8 min from Higashiyama Stn (Tabelog). Opened 3 July 2021 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki, in Miyako Messe — 8 min from Higashiyama Stn',
    cuisine: 'A café by day with a BBQ terrace (Tabelog; May 2025) · lunch plates around ¥1,100, about ¥1,500 with a drink (May 2025): fried chicken ¥1,100 plus ¥400 for a drink (September 2025), meaty Bolognese ¥1,400 (November 2025), seafood curry, roast beef rice bowl (January 2026) · a ¥600 free-refill drinks deal for 90 minutes with soup (August 2026) · cakes; a limited kids menu (June 2025) · themed menus with events such as the Kyoto International Manga and Anime Fair (September 2025)',
    website: 'https://aburu.jp/', gmaps: gm('GRILL TERRACE ABURU みやこめっせ'), menu_url: TB + 'dtlmenu/',
    notes: '[Café and BBQ · Okazaki, a terrace in Miyako Messe] The café on the ground floor of Miyako Messe, between the Heian Shrine and the Okazaki museums and zoo: plain-value lunches around ¥1,100–1,500 (Bolognese, fried chicken, curry), coffee and cake, and terrace BBQ booked ahead into the evening. Wheelchair-friendly, roomy and rarely crowded. Hours follow the building.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a café, dining bar and BBQ terrace on the first floor of Miyako Messe (Kyoto City Industry Hall), opened 3 July 2021. A June 2026 visitor found it much changed after a renovation.',
      philosophy: null, specialty: 'Lunch plates; terrace BBQ.',
      anecdotes: [
        { text: 'A September 2025 wheelchair user recommended it as a good-value lunch near Okazaki Park, where many places are pricey, crowded or hard to reach.', source: R + 'B521417957/' },
        { text: 'A March 2026 visitor often lunches here when going to the zoo, finding it reasonable for the area.', source: R + 'B524281477/' },
        { text: 'An August 2026 visitor found the ¥600 90-minute drinks deal with soup a better buy than the famous coffee shop across the street.', source: R + 'B534306926/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・ダイニングバー・BBQ、左京区岡崎成勝寺町9-1 みやこめっせ京都市勧業館 1F、東山駅から徒歩約8分、平日10:00〜17:00 (L.O. 16:30)、土日祝10:00〜19:00 (L.O. 18:30)、BBQ 10:00〜21:30 (最終入店19:00)、施設の休館日に準じる、予約可 (BBQ は前日・当日のキャンセル料あり)、カード・電子マネー・QR 可、108席 (テラス60、店内38、カウンター10)、禁煙、車椅子可、ベジタリアンメニュー・アレルギー表示あり、2021年7月3日オープン。口コミ (2025年5月〜2026年8月、英語): 昼は約1,100円、ドリンク付きで約1,500円、唐揚げ1,100円、ボロネーゼ1,400円、シーフードカレー、ローストビーフ丼、600円で90分のドリンクとスープ、ケーキ、京まふとのコラボ、改装。',
      confidence: 'medium', sources: [TB, 'https://aburu.jp/', R + 'B500278815/', R + 'B507464874/', R + 'B508055339/', R + 'B508438030/', R + 'B516083616/', R + 'B516801565/', R + 'B521417957/', R + 'B522851212/', R + 'B524281477/', R + 'B527232269/', R + 'B529899045/', R + 'B534306926/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter or table; spacious and wheelchair-accessible; book BBQ ahead. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎成勝寺町9-1 みやこめっせ京都市勧業館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.013242, 135.780549); cross-checked: GSI 京都府京都市左京区岡崎成勝寺町9番地 (lot) 82m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B516801565/', R + 'B521417957/', R + 'B534306926/'],
    price_note: 'Prices from September 2025–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Meaty Bolognese', '¥1,400', 'Lunch', 'no', 'no', 'November 2025.', 'bolognese'),
      it('', '', 'Fried chicken lunch', '¥1,100', 'Lunch', 'no', 'no', 'Drink +¥400 (September 2025).', 'karaage_lunch'),
      it('', '', 'Drinks for 90 minutes with soup', '¥600', 'Café', '', 'ask', 'August 2026.', 'drink_deal'),
      it('', '', 'Terrace BBQ', '', 'BBQ', 'ask', 'ask', 'Reservation; last start 19:00 (Tabelog).', 'bbq'),
    ] }, {
    cuisine: '昼はカフェ、テラスで BBQ (食べログ、2025年5月)・昼の皿は約1,100円、ドリンク付きで約1,500円 (2025年5月): 唐揚げ1,100円とドリンク400円 (2025年9月)、肉たっぷりのボロネーゼ1,400円 (2025年11月)、シーフードカレー、ローストビーフ丼 (2026年1月)・600円で90分のドリンクとスープ (2026年8月)・ケーキ、少なめのキッズメニュー (2025年6月)・京都国際マンガ・アニメフェアなどのイベントとのコラボメニュー (2025年9月)',
    neighborhood: '岡崎、みやこめっせの中。東山駅から徒歩8分',
    gf_detail: '要確認。パスタ、カレー、唐揚げ、ケーキ (2025〜2026年の口コミ)。食べログではアレルギー表示あり。',
    vegan_detail: '要確認。食べログではベジタリアンメニューあり。昼の皿の多くは肉か魚介 (2025〜2026年の口コミ)。',
    notes: '[カフェと BBQ・岡崎、みやこめっせのテラス] 平安神宮、岡崎の美術館や動物園のそば、みやこめっせ1階のカフェ。昼は約1,100〜1,500円の手頃な皿 (ボロネーゼ、唐揚げ、カレー)、コーヒーとケーキ、予約制のテラスの BBQ は夜まで。車椅子でも入りやすく、広く、混みにくい。営業は建物に準じる。',
  });
}

// ================================================================ meat couture
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26041738/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_meat_couture', name: 'meat couture', category: 'OMNI',
    lat: 34.991718, lng: 135.760437, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Meat bistro dishes with house bread and short pasta (2025–26 reviews); Tabelog says allergy information is available.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat bistro — charcuterie, duck, lamb, wagyu, pork — with burrata (2025–26 reviews).',
    hours_raw: 'Mon, Wed–Sun 17:00–23:00 (last order food 22:00, drinks 22:30); closed Tuesday and irregularly (Tabelog). Reservations accepted and advised (Tabelog; November 2025). No children aged 7 or under; no strong perfume or fabric-softener scents — entry may be refused even with a booking (Tabelog). Cards and PayPay, no e-money (Tabelog). 16 seats, all at two large shared tables (Tabelog; August 2025). Non-smoking (Tabelog). On Akezu-dori by Higashi Honganji; 5 min from Gojo Stn, 7 min from Kyoto Stn (Tabelog; December 2025). Opened 17 October 2024 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'By Higashi Honganji — 5 min from Gojo Stn',
    cuisine: 'A meat bistro with natural wine (2025–26 reviews) · meat appetizer platter of roast beef, prosciutto and pâté (July 2026) · seasonal fruit with burrata — peach (August 2025), melon (June 2026) · duck, lamb and wagyu with short pasta (March 2026); sautéed pork, Caesar salad (September 2026) · freshly baked house bread (December 2025) · an anniversary course for two ¥12,000 (November 2025) · natural wines by the glass with the bottle and a tag on the table, craft beer, sake (November 2025; July 2026)',
    website: null, gmaps: gm('meat couture 京都 東本願寺'), menu_url: TB + 'dtlmenu/',
    notes: '[Meat bistro · Higashi Honganji, shared tables and natural wine] A dim, stylish bistro near Kyoto Station with two big shared tables and the smell of baking bread: a charcuterie platter, burrata with seasonal fruit, duck, lamb and wagyu, with natural wines poured with the bottle and its tag beside you. No children 7 and under and no strong perfume. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a bistro specialising in meat, opened 17 October 2024, with all seating at shared tables and rules against young children and strong fragrance.',
      philosophy: null, specialty: 'Meat appetizer platter; burrata with seasonal fruit.',
      anecdotes: [
        { text: 'A May 2026 solo guest walked in without a booking on a rainy weekday and found the shared tables comfortable.', source: R + 'B529218884/' },
        { text: 'A November 2025 couple had the ¥12,000 anniversary course and liked having each glass’s bottle and tag left on the table.', source: R + 'B517665480/' },
        { text: 'A June 2026 regular wants to come every month for the appetizers, seasonal fruit and burrata.', source: R + 'B527888291/' },
      ],
      japanese_sources_summary: '食べログ: ビストロ・肉料理、下京区不明門通上数珠屋町亀町8、五条駅から徒歩5分、京都駅から徒歩7分、月・水〜日17:00〜23:00 (L.O. 料理22:00、ドリンク22:30)、火曜休み (不定休あり)、予約可、7歳以下不可、香水や柔軟剤など強い香りは不可、カード・PayPay 可、16席 (すべて相席)、禁煙、2024年10月17日オープン。口コミ (2025年8月〜2026年9月、英語): 肉の前菜盛り合わせ (ローストビーフ、生ハム、パテ)、季節の果物とブラータ、鴨、ラム、和牛、ショートパスタ、豚のソテー、焼きたてのパン、記念日コース2名12,000円、自然派ワイン、クラフトビール、日本酒。',
      confidence: 'medium', sources: [TB, R + 'B512721601/', R + 'B512726597/', R + 'B516847227/', R + 'B517665480/', R + 'B518836952/', R + 'B523833027/', R + 'B527888291/', R + 'B528839309/', R + 'B529218884/', R + 'B531631858/', R + 'B531920847/', R + 'B535353929/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; seats are shared; no children 7 and under and no strong perfume. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区不明門通上数珠屋町亀町8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.991718, 135.760437); cross-checked: GSI 京都府京都市下京区亀町8番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517665480/'],
    price_note: 'One course price from November 2025.', last_checked: TODAY, items: [
      it('', '', 'Anniversary course (for two)', '¥12,000', 'Courses', 'ask', 'no', 'November 2025.', 'anniversary'),
      it('', '', 'Meat appetizer platter', '', 'Starters', 'ask', 'no', 'July 2026.', 'meat_platter'),
      it('', '', 'Seasonal fruit and burrata', '', 'Starters', 'ask', 'no', 'August 2025; June 2026.', 'burrata'),
    ] }, {
    cuisine: '自然派ワインと肉のビストロ (2025〜2026年の口コミ)・ローストビーフ、生ハム、パテの肉の前菜盛り合わせ (2026年7月)・季節の果物とブラータ (桃 2025年8月、メロン 2026年6月)・鴨、ラム、和牛とショートパスタ (2026年3月)、豚のソテー、シーザーサラダ (2026年9月)・焼きたての自家製パン (2025年12月)・記念日コース2名12,000円 (2025年11月)・グラスワインはボトルとタグを卓に置いてくれる。クラフトビール、日本酒も (2025年11月、2026年7月)',
    neighborhood: '東本願寺のそば。五条駅から徒歩5分',
    gf_detail: '要確認。自家製パンやショートパスタのある肉のビストロ (2025〜2026年の口コミ)。食べログではアレルギー表示あり。',
    vegan_detail: 'ヴィーガン不可。シャルキュトリー、鴨、ラム、和牛、豚、ブラータの肉のビストロ (2025〜2026年の口コミ)。',
    notes: '[肉のビストロ・東本願寺、相席と自然派ワイン] 京都駅近くの薄暗くおしゃれなビストロ。大きな相席のテーブル2つにパンの焼ける香り。シャルキュトリーの盛り合わせ、季節の果物とブラータ、鴨、ラム、和牛を、ボトルとタグを添えて出す自然派ワインと。7歳以下と強い香水は不可。火曜休み。',
  });
}

// ================================================================ ゴリーズ キッチン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26027434/'; const R = TB + 'dtlrvwlst/';
  const MO = day(['11:30', '14:00'], ['17:30', '22:00']); const WK = day(['11:30', '13:45'], ['17:30', '22:00']); const WE = day(['11:30', '14:15'], ['17:30', '22:00']);
  put({
    id: 'kyoto_goris_kitchen', name: 'ゴリーズ キッチン (Gori’s Kitchen)', category: 'OMNI',
    lat: 34.971385, lng: 135.74853, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a menu: wood-fired pizza, pasta and homemade focaccia (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: mozzarella pizzas, anchovy carbonara, shrimp pasta, prosciutto (2026 reviews). No vegan information.',
    hours_raw: 'Lunch from 11:30 to 14:00 on Monday, 13:45 Tue–Fri, 14:15 at weekends and holidays; dinner 17:30–22:00; may close when ingredients run out; closed irregularly (Tabelog; the official site says open all year with occasional closures). Reservations accepted; dinner fills up (Tabelog; October 2026). Cards at dinner only — lunch is cash or PayPay (Tabelog). 34 seats: 6 at the counter, 16 at tables, a 12-seat tatami room, and a semi-private back room for parties; high chairs for small children (Tabelog). Non-smoking; parking available (Tabelog). Among warehouses and offices 7 min from Kintetsu Jujo Stn, west of Omiya-dori (Tabelog; October 2026). Opened 5 May 2016 (Tabelog).',
    hours: { 0: MO, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kamitoba, near Jujo — 7 min from Kintetsu Jujo Stn',
    cuisine: 'Pizza from a wood-fired oven with a chewy crust: Gori’s Pizza, a margherita with special mozzarella, honey pizza, a daily pizza; half-and-half for +¥300 (August–October 2026) · pasta such as anchovy carbonara and oil pastas with sakura shrimp or shrimp and edamame (August–October 2026) · lunch sets with salad and soup and a choice of pizza or pasta (August 2026) · homemade focaccia, caprese, prosciutto salad, fried chicken neck, pickles (2026 reviews) · wine (October 2026)',
    website: 'http://www.goris-kitchen.com/', gmaps: gm('ゴリーズ キッチン 上鳥羽'), menu_url: TB + 'dtlmenu/',
    notes: '[Pizza and Italian · Kamitoba near Jujo, a wood-fired local favourite] A busy Italian among warehouses south of Kyoto Station, worth the walk for wood-fired pizza with a chewy crust — the signature Gori’s margherita, honey pizza, half-and-half for ¥300 more — anchovy carbonara and homemade focaccia. Lunch sets with salad and soup; dinner is often full, so book. Cards at dinner only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a pizza, Italian and izakaya restaurant opened 5 May 2016. An August 2026 reviewer remembered the food from an earlier food truck.',
      philosophy: null, specialty: 'Gori’s Pizza (margherita); anchovy carbonara.',
      anecdotes: [
        { text: 'An August 2026 diner had loved the food from the shop’s food truck and found everything at the restaurant just as good.', source: R + 'B535386652/' },
        { text: 'A September 2026 diner who walked 20 minutes at 9 pm was told much was sold out but was glad to order what was left.', source: R + 'B535506762/' },
        { text: 'An October 2026 lunch guest found that drinks and sides are extra even at lunch, so a pizza alone is just the pizza.', source: R + 'B536611716/' },
      ],
      japanese_sources_summary: '食べログ: ピザ・イタリアン・居酒屋、南区上鳥羽菅田町65、近鉄十条駅から徒歩約7分、昼 月11:30〜14:00・火〜金11:30〜13:45・土日祝11:30〜14:15、夜17:30〜22:00、食材がなくなり次第終了、不定休、予約可、カードは夜のみ (昼は現金か PayPay)、34席 (カウンター6、テーブル16、座敷12)、奥に半個室、禁煙、駐車場あり、2016年5月5日オープン。公式サイト: 年中無休 (臨時休業あり)。口コミ (2026年8月〜10月、英語): 薪窯のピザ (ゴリーズピザ、はちみつ、日替わり、ハーフ&ハーフ300円増し)、アンチョビのカルボナーラ、桜海老や海老と枝豆のオイルパスタ、サラダとスープ付きの昼のセット、自家製フォカッチャ、以前のキッチンカー、夜は満席も。',
      confidence: 'medium', sources: [TB, 'http://www.goris-kitchen.com/', R + 'B533613211/', R + 'B534694678/', R + 'B534829639/', R + 'B535386652/', R + 'B535506762/', R + 'B535510005/', R + 'B535943659/', R + 'B536611716/', R + 'B537146829/', R + 'B537152926/', R + 'B537694606/', R + 'B538308695/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book dinner; pay by cash or PayPay at lunch; family-friendly with high chairs. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市南区上鳥羽菅田町65',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.971385, 135.748530); cross-checked: GSI 京都府京都市南区上鳥羽菅田町65番地 (lot) 46m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537146829/', R + 'B537152926/'],
    price_note: 'One add-on price from October 2026; others not found.', last_checked: TODAY, items: [
      it('', '', 'Gori’s Pizza (margherita)', '', 'Pizza', 'no', 'no', 'October 2026.', 'goris_pizza'),
      it('', '', 'Half-and-half pizza upgrade', '+¥300', 'Pizza', 'no', 'no', 'October 2026.', 'half_half'),
      it('', '', 'Anchovy carbonara', '', 'Pasta', 'no', 'no', 'September–October 2026.', 'anchovy_carbonara'),
      it('', '', 'Pizza or pasta lunch with salad and soup', '', 'Lunch', 'no', 'ask', 'August 2026.', 'lunch_set'),
    ] }, {
    cuisine: '薪窯で焼く、もちっとした生地のピザ: 特製モッツァレラのマルゲリータ「ゴリーズピザ」、はちみつのピザ、日替わり、ハーフ&ハーフは300円増し (2026年8月〜10月)・アンチョビのカルボナーラ、桜海老や海老と枝豆のオイルパスタ (2026年8月〜10月)・サラダとスープ付きで、ピザかパスタを選ぶ昼のセット (2026年8月)・自家製フォカッチャ、カプレーゼ、生ハムのサラダ、せせりの唐揚げ、ピクルス (2026年の口コミ)・ワイン (2026年10月)',
    neighborhood: '上鳥羽、十条の近く。近鉄十条駅から徒歩7分',
    gf_detail: 'グルテンフリーではない。薪窯のピザ、パスタ、自家製フォカッチャ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。モッツァレラのピザ、アンチョビのカルボナーラ、海老のパスタ、生ハム (2026年の口コミ)。ヴィーガンの情報はない。',
    notes: '[ピザとイタリアン・十条近くの上鳥羽、地元で人気の薪窯] 京都駅の南、倉庫の並ぶ一角の賑やかなイタリアン。もちっとした生地の薪窯ピザ (看板のゴリーズのマルゲリータ、はちみつ、ハーフ&ハーフは300円増し)、アンチョビのカルボナーラ、自家製フォカッチャを目当てに。昼はサラダとスープ付きのセット。夜は満席が多いので予約を。カードは夜のみ。',
  });
}

// ================================================================ あんじ 烏丸六角店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26003098/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '01:00']);
  put({
    id: 'kyoto_anji_karasuma_rokkaku', name: '漁港直送 海鮮酒場 あんじ 烏丸六角店 (Anji Karasuma Rokkaku)', category: 'OMNI',
    lat: 35.007288, lng: 135.760835, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seafood izakaya with sashimi, soy-simmered fish, ebi mayo and fried oysters (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya — sashimi, simmered fish heads, grilled shellfish (2026 reviews).',
    hours_raw: 'Lunch 11:30–14:00 (last order 13:30), dinner 17:00–1:00 (last order 0:00), every day except 31 December–3 January and 11 February (Tabelog). Reservations accepted; no outside food or drink (Tabelog). Late-night charge ¥418 per person after 22:00 (Tabelog, Japanese text: 「22時以降は深夜料金418円（税込）が発生いたします」). Cards incl. UnionPay; PayPay, Alipay and WeChat Pay (Tabelog). 75 seats; the front counter is quieter than the back (September 2026). Non-smoking with a smoking room (Tabelog). 2nd floor of 星の子六角ビル east of Karasuma on Rokkaku; 3 min from Karasuma Oike Stn exit 5 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Rokkaku Karasuma, by Rokkakudo — 3 min from Karasuma Oike Stn',
    cuisine: 'Seafood shipped straight from fishing ports with sake (Tabelog name; June 2026) · simmered sea-bream head, steamed fish head, assorted sashimi in thick cuts (July and September 2026) · grilled shellfish, squid and mirin-dried fish (September 2026) · oysters and matsutake in season; from about ¥3,000 per person (August 2026) · lunch: seafood rice bowl ¥1,300 (April 2026), sashimi set meal (July–September 2026), ebi mayo or yukhoe bowl (May 2026), fried oysters (October 2026)',
    website: 'https://anji-rokkaku.com/', gmaps: gm('海鮮酒場 あんじ 烏丸六角店'), menu_url: TB + 'dtlmenu/',
    notes: '[Seafood izakaya · Karasuma Rokkaku, fish till 1 am] A big second-floor seafood tavern by Rokkakudo, fish sent direct from the ports: thick-cut sashimi, simmered sea-bream head, grilled shellfish and seasonal oysters with sake, from about ¥3,000 a head. Good-value seafood lunches (bowl ¥1,300) every day. Open to 1:00 with a ¥418 charge after 22:00. Sit at the front counter for quiet.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a seafood izakaya ("fishing-port direct") open all year except New Year and 11 February. Tabelog lists two other Anji in Kyoto (麩屋町綾小路店, 府庁前店).',
      philosophy: null, specialty: 'Port-direct sashimi; simmered fish heads.',
      anecdotes: [
        { text: 'An August 2026 regular of many years calls it the best fish izakaya in Kyoto and ordered oysters and matsutake that night.', source: R + 'B534660016/' },
        { text: 'A July 2026 visitor praised the simmered sea-bream head for its balance of soy, sake, mirin and ginger.', source: R + 'B264490863/' },
        { text: 'An October 2026 lunch guest found the fried oysters small and mostly batter, though the sides and salad were good.', source: R + 'B537827129/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮・日本料理、中京区六角通烏丸東入ル堂之前町231 星の子六角ビル 2F、烏丸御池駅5番出口から徒歩3分、昼11:30〜14:00 (L.O. 13:30)、夜17:00〜翌1:00 (L.O. 0:00)、12月31日〜1月3日と2月11日以外は無休、予約可、持ち込み不可、22時以降は深夜料金418円、カード・PayPay・Alipay・WeChat Pay 可、75席、禁煙 (喫煙室あり)、京都に麩屋町綾小路店と府庁前店も。口コミ (2026年4月〜10月、英語): 鯛のあら炊き、兜蒸し、厚切りの刺身盛り、貝やいかの焼き物、みりん干し、牡蠣、松茸、一人3,000円から、昼の海鮮丼1,300円、刺身定食、海老マヨやユッケ丼、カキフライ、手前のカウンターは静か。',
      confidence: 'medium', sources: [TB, 'https://anji-rokkaku.com/', R + 'B264490863/', R + 'B454280176/', R + 'B526996553/', R + 'B527976650/', R + 'B531222327/', R + 'B531723323/', R + 'B533175940/', R + 'B534660016/', R + 'B535630341/', R + 'B535760080/', R + 'B536270045/', R + 'B537827129/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Big menu of seafood; counter seats are quieter; ¥418 charge after 22:00. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区六角通烏丸東入ル堂之前町231 星の子六角ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007288, 135.760835); cross-checked: GSI 京都府京都市中京区堂之前町231番地 (lot) 55m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B454280176/', R + 'B534660016/'],
    price_note: 'Lunch price from April 2026; dinner from about ¥3,000 a head (August 2026); ¥418 after 22:00 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Seafood rice bowl (lunch)', '¥1,300', 'Lunch', 'ask', 'no', 'April 2026.', 'kaisendon'),
      it('', '', 'Sashimi set meal (lunch)', '', 'Lunch', 'ask', 'no', 'July–September 2026.', 'sashimi_teishoku'),
      it('', '', 'Simmered sea-bream head', '', 'Dinner', 'ask', 'no', 'July 2026.', 'tai_arataki'),
      it('', '', 'Late-night charge (after 22:00)', '¥418', 'Charge', '', '', 'Tabelog.', 'late_charge'),
    ] }, {
    cuisine: '漁港直送の魚と日本酒 (食べログの店名、2026年6月)・鯛のあら炊き、魚の頭の蒸し物、厚切りの刺身盛り (2026年7月・9月)・貝やいかの焼き物、みりん干し (2026年9月)・旬の牡蠣や松茸、一人約3,000円から (2026年8月)・昼: 海鮮丼1,300円 (2026年4月)、刺身定食 (2026年7月〜9月)、海老マヨやユッケ丼 (2026年5月)、カキフライ (2026年10月)',
    neighborhood: '六角烏丸、六角堂のそば。烏丸御池駅から徒歩3分',
    gf_detail: '要確認。刺身、醤油の煮魚、海老マヨ、カキフライのある海鮮居酒屋 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。海鮮居酒屋 (刺身、魚の頭の煮付け、貝の焼き物) (2026年の口コミ)。',
    notes: '[海鮮居酒屋・烏丸六角、深夜1時まで魚] 六角堂近くの2階の大きな海鮮酒場。漁港直送の厚切りの刺身、鯛のあら炊き、貝の焼き物、旬の牡蠣を日本酒と、一人約3,000円から。昼も毎日、手頃な海鮮 (海鮮丼1,300円)。深夜1時までで、22時以降は418円の深夜料金。静かに飲むなら手前のカウンターへ。',
  });
}

save();
