// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 93.
//   + SUNNY GEORGE (plant-based bakery café by an international couple, Nijo-Fuyacho; opened October 2025) — rest
//   + 中国料理 天嘉 (couple-run Chinese set-lunch spot upstairs at Muromachi-Sanjo) — rest
//   + 一政 Ichimasa (machiya izakaya of Tsukamoto-method aged fish near Shijo-Karasuma) — rest
//   + WEBER (one-man Italian bar of game meat at Kawabata-Nijo, open 15:00 to midnight) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl, the THAN brand list
//   (than.co.jp/brands, read 2026-11-08) and the 株式会社WILL ruling (26043489): no matches for SUNNY GEORGE, 天嘉, 一政 or
//   WEBER. Same-name counts (2026-11-08): one each.
//   None of the drafted shops is in data/kyoto.json.
//   Charges: none listed on Tabelog for the four. No halal claims; no owner deaths; single-review remarks about other diners
//   left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-93');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ SUNNY GEORGE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043850/'; const R = TB + 'dtlrvwlst/';
  const S = day(['08:00', '15:00']); const L = day(['08:00', '16:30']);
  put({
    id: 'kyoto_sunny_george', name: 'SUNNY GEORGE', category: 'OMNI',
    lat: 35.013605, lng: 135.76578, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The cinnamon rolls use rice flour and rice-koji yeast (November 2025, January 2026), but other bakes — focaccia, banana bread, country bread, sandwiches — are not described as gluten-free and no allergen information is sourced.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: a January 2026 reviewer says the whole food menu is plant-based, oat milk is the default in drinks (April 2026), and a May 2026 reviewer notes the co-owner is a plant-based chef. Single-source on the full menu — confirm at the counter.',
    hours_raw: 'Tue–Sat and holidays 8:00–16:30 (last order 16:00); Sunday and Monday 8:00–15:00; may close temporarily (Tabelog). Order at the counter, then sit; staff bring it over (May 2026). Large shared tables and a counter; small, and busy with visitors from mid-morning (May 2026). Country bread to take away is by reservation (September 2026). Cards (JCB), e-money and QR (Tabelog). Opened 31 October 2025 (November 2025 review).',
    hours: { 0: S, 1: L, 2: L, 3: L, 4: L, 5: L, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo, near Kyoto City Hall',
    cuisine: 'Plant-based bakery café with espresso from a yellow machine · rice-flour cinnamon rolls with walnuts and icing, cardamom buns (November 2025–April 2026) · banana bread with fresh banana and coffee caramel ¥650, lemon cake ¥600, carrot cake (January and May 2026) · carrot-and-hummus sandwich, focaccia (November 2025), avocado sandwich about ¥1,700 (April 2026) · cappuccino ¥800, iced latte ¥800, yomogi latte with oat milk (April and May 2026) · country bread by reservation (September 2026)',
    website: null, gmaps: gm('SUNNY GEORGE 京都 尾張町'), menu_url: TB,
    notes: '[Plant-based café · Nijo] A small, busy café near City Hall, opened in late 2025 by an international couple: espresso drinks made with oat milk, warm rice-flour cinnamon rolls and cardamom buns, banana bread and plant-based sandwiches, from 8:00. Order at the counter; expect shared tables.',
    chef_bio: { chef_name: null, roles: ['Owners (unnamed), an international couple; one partner handles the coffee, the other — described as a plant-based chef — the bread and dishes (May and September 2026)'], origin: null,
      background: 'Per reviews: opened 31 October 2025 by an international couple, one with about 25 years in the coffee business (September 2026).',
      philosophy: 'Per reviews: an entirely plant-based food menu (January 2026).', specialty: 'Rice-flour cinnamon rolls; banana bread.',
      anecdotes: [
        { text: 'A September 2026 regular, on an eleventh visit, found the country bread needed ordering a day ahead, and picked it up the next morning with a cardamom roll and a coffee.', source: R + 'B520764454/' },
        { text: 'A January 2026 visitor learned that the warm, chewy cinnamon roll is made with the café’s own rice-koji yeast.', source: R + 'B521232094/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、中京区尾張町102、火〜土・祝日8:00〜16:30 (L.O.16:00)、日・月8:00〜15:00、臨時休業あり、カード (JCB)・電子マネー・QR 可。口コミ (2025年11月〜2026年9月、英語): 2025年10月31日オープン、黄色いエスプレッソマシン、米粉のシナモンロール (自家製の米麹の酵母)、カルダモンロール、バナナブレッド650円、レモンケーキ600円、キャロットケーキ、にんじんとフムスのサンドイッチ、フォカッチャ、アボカドのサンドイッチ約1,700円、カプチーノ800円、アイスラテ800円、オーツミルクのよもぎラテ、食事はすべてプラントベースとの声、オーナー夫妻、パートナーはプラントベースのシェフ、カンパーニュは予約制、カウンターで注文、大きなテーブルで相席も。',
      confidence: 'medium', sources: [TB, R + 'B518083908/', R + 'B520578065/', R + 'B520764454/', R + 'B521232094/', R + 'B526162036/', R + 'B527365213/', R + 'B528859568/', R + 'B530332151/', R + 'B535404454/'] },
    cultural_comfort: { level: 'english', note: 'Run by an international couple; staff and most customers are from overseas (April and May 2026). Order at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区尾張町102',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.013605, 135.765868); GSI matched only the town 京都府京都市中京区尾張町 (no lot), 67m — approximate; offset 8 m west so as not to stack on Sudo (尾張町202-1); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528859568/', R + 'B527365213/', R + 'B530332151/'],
    price_note: 'Prices from April and May 2026.', last_checked: TODAY, items: [
      it('', '', 'Rice-flour cinnamon roll', '¥680', 'Bakes', 'ask', 'vegan', 'April 2026; plant-based menu per a January 2026 reviewer.', 'cinnamon_roll'),
      it('', '', 'Banana bread with coffee caramel', '¥650', 'Bakes', 'ask', 'ask', 'May 2026.', 'banana_bread'),
      it('', '', 'Cappuccino (oat milk by default)', '¥800', 'Drinks', 'ask', 'ask', 'May 2026.', 'cappuccino'),
      it('', '', 'Avocado sandwich', '¥1,700', 'Food', 'no', 'ask', 'April 2026; about ¥1,700.', 'avocado_sandwich'),
    ] }, {
    cuisine: '黄色いエスプレッソマシンのプラントベースのベーカリーカフェ・くるみとアイシングの米粉のシナモンロール、カルダモンロール (2025年11月〜2026年4月)・生のバナナとコーヒーキャラメルのバナナブレッド650円、レモンケーキ600円、キャロットケーキ (2026年1月・5月)・にんじんとフムスのサンドイッチ、フォカッチャ (2025年11月)、アボカドのサンドイッチ約1,700円 (2026年4月)・カプチーノ800円、アイスラテ800円、オーツミルクのよもぎラテ (2026年4月・5月)・予約制のカンパーニュ (2026年9月)',
    neighborhood: '二条、京都市役所の近く',
    gf_detail: '要確認。シナモンロールは米粉と米麹の酵母 (2025年11月、2026年1月) だが、フォカッチャ、バナナブレッド、カンパーニュ、サンドイッチはグルテンフリーの記載がなく、アレルゲンの情報もない。',
    vegan_detail: 'ヴィーガンの選択肢あり: 2026年1月の口コミでは食事はすべてプラントベース、ドリンクはオーツミルクが基本 (2026年4月)、2026年5月の口コミではオーナーのパートナーがプラントベースのシェフ。全メニューについては一件の口コミのみ、カウンターで確認を。',
    notes: '[プラントベースのカフェ・二条] 京都市役所近く、2025年秋に海外出身を含む夫妻が開いた小さな人気のカフェ。オーツミルクのエスプレッソドリンク、温かい米粉のシナモンロールやカルダモンロール、バナナブレッド、プラントベースのサンドイッチを8時から。カウンターで注文、相席あり。',
  });
}

// ================================================================ 中国料理 天嘉
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26018506/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:00', '21:30']);
  put({
    id: 'kyoto_chugoku_ryori_muromachi_sanjo', name: '中国料理 天嘉', category: 'OMNI',
    lat: 35.009194, lng: 135.758273, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: karaage, ramen, tantanmen, fried shrimp, soy-based sauces (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: mapo tofu with meat sauce, sweet-and-sour pork, karaage, egg soup (2025–26 reviews).',
    hours_raw: 'Daily 11:30–14:30 and 17:00–21:30; irregular closures (Tabelog). Lunch is busy with nearby office workers (April 2026); set meals come out fast. No cards or e-money; QR accepted (Tabelog). 45 seats, private rooms (Tabelog). Up a back staircase to the second floor of 白鳥ビル, above a curry shop, on Muromachi north of Sanjo just off Aneyakoji (April 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Muromachi-Sanjo — Karasuma Oike',
    cuisine: 'Neighbourhood Chinese restaurant run by a Chinese couple · lunch sets around ¥1,000: mapo tofu set with karaage, rice, soup, pickles and almond tofu ¥1,000 (April 2026); sweet-and-sour pork set ¥1,100 (April 2026); ramen, fried rice and karaage ¥1,000 (August 2025); eight-treasure vegetables set (May 2025) · dinner: jellyfish salad, cucumber with squid, fried shrimp, steamed whole fish, Shaoxing wine, about ¥4,000 a head (April 2025)',
    website: null, gmaps: gm('中国料理 天嘉 京都 室町'), menu_url: TB,
    notes: '[Chinese · Muromachi-Sanjo] A no-frills second-floor Chinese restaurant run by a Chinese couple near Karasuma Oike, packed with office workers at lunch for ¥1,000 sets — mapo tofu, sweet-and-sour pork, ramen with fried rice — each with a big portion of karaage; spicy home-style dishes and Shaoxing wine at night. QR payment or cash.',
    chef_bio: { chef_name: null, roles: ['Run by a Chinese couple (April 2025, April 2026)'], origin: null,
      background: 'Per Tabelog and reviews: a Chinese restaurant opened 19 August 2011, run by a couple from China (April 2025, April 2026).',
      philosophy: null, specialty: 'Karaage; mapo tofu set.',
      anecdotes: [
        { text: 'An April 2025 group ate jellyfish salad, fried shrimp and steamed white fish with Shaoxing wine for about ¥4,000 a head, finding nearly everything spicy except the tofu soup and almond jelly.', source: R + 'B505495672/' },
        { text: 'An April 2026 visitor followed office workers up a staircase that felt like a fire escape and along a narrow corridor to the dining room.', source: R + 'B527168820/' },
      ],
      japanese_sources_summary: '食べログ: 中華料理、中京区室町通三条上る役行者町370-1 白鳥ビル2F、毎日11:30〜14:30・17:00〜21:30、不定休、カード・電子マネー不可、QR 可、45席、個室あり、2011年8月19日オープン。口コミ (2025年4月〜2026年4月、英語): 中国出身の夫婦が営む、昼は約1,000円の定食 (麻婆豆腐定食に唐揚げ・ご飯・スープ・漬物・杏仁豆腐1,000円、酢豚定食1,100円、ラーメンとチャーハンと唐揚げ1,000円、八宝菜定食)、夜はくらげの和え物、きゅうりといか、海老の揚げ物、白身魚の蒸し物、紹興酒、一人約4,000円、辛い料理が多い、1階はカレー店、姉小路を西へ。',
      confidence: 'medium', sources: [TB, R + 'B505495672/', R + 'B507350096/', R + 'B512189510/', R + 'B525432281/', R + 'B527168820/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bring cash or a QR app — no cards. Ask for less heat if needed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区室町通三条上る役行者町370-1 白鳥ビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.009194, 135.758273); cross-checked: GSI 京都府京都市中京区役行者町370番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525432281/', R + 'B527168820/', R + 'B512189510/'],
    price_note: 'Lunch prices from August 2025 and April 2026 (raised in April 2026).', last_checked: TODAY, items: [
      it('', '', 'Mapo tofu set (with karaage, rice, soup, almond tofu)', '¥1,000', 'Lunch', 'no', 'no', 'April 2026.', 'mapo_set'),
      it('', '', 'Sweet-and-sour pork set', '¥1,100', 'Lunch', 'no', 'no', 'April 2026.', 'subuta_set'),
      it('', '', 'Ramen, fried rice and karaage', '¥1,000', 'Lunch', 'no', 'no', 'August 2025.', 'ramen_set'),
    ] }, {
    cuisine: '中国出身の夫婦が営む町の中華料理店・昼は約1,000円の定食: 唐揚げ・ご飯・スープ・漬物・杏仁豆腐付きの麻婆豆腐定食1,000円 (2026年4月)、酢豚定食1,100円 (2026年4月)、ラーメンとチャーハンと唐揚げ1,000円 (2025年8月)、八宝菜の定食 (2025年5月)・夜はくらげの和え物、きゅうりといか、海老の揚げ物、白身魚の蒸し物、紹興酒、一人約4,000円 (2025年4月)',
    neighborhood: '室町三条。烏丸御池',
    gf_detail: 'グルテンフリーではない。唐揚げ、ラーメン、担々麺、海老の揚げ物、醤油のたれ (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉味噌の麻婆豆腐、酢豚、唐揚げ、卵のスープ (2025〜2026年の口コミ)。',
    notes: '[中華・室町三条] 烏丸御池近く、中国出身の夫婦が営む飾り気のない2階の中華料理店。昼は麻婆豆腐、酢豚、ラーメンとチャーハンなどに大きな唐揚げが付く1,000円前後の定食で会社員がいっぱい、夜は辛い家庭の味と紹興酒。支払いは現金か QR。',
  });
}

// ================================================================ 一政
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26019388/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_ichimasa_shijo', name: '一政 (Ichimasa)', category: 'OMNI',
    lat: 35.004063, lng: 135.756112, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, karaage, yuba spring rolls, shrimp mayo, miso dengaku and soy sauce for the sashimi (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: aged-fish sashimi is the centre of the menu; pork, chicken and dairy dishes besides (2025–26 reviews).',
    hours_raw: 'Tue–Sun 17:00–23:00 (food last order 22:00); closed Monday (Tabelog). Reservations advised (September 2025). Courses with all-you-can-drink as well as à la carte (2026 reviews); the bill may be given as a total only (September 2025). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 48 seats: counter, tables, tatami and sunken kotatsu; only e-cigarettes at the counter (Tabelog). A renovated machiya in a back alley near Shijo and Karasuma stations (April and July 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Shijo-Karasuma',
    cuisine: 'Izakaya of fish bled and aged by the Tsukamoto method, with creative Japanese-Italian plates · aged-fish sashimi platters — kinmedai, sawara and others, some seared with salt (April 2025); mackerel, saury, sea bream, tuna, sawara (September 2025) · eggplant miso dengaku, yuba spring rolls with plum sauce, shrimp mayo, mini seafood rice bowl (September 2025) · garlic pork belly with vegetables ¥780, baked potato with cheese ¥680, karaage ¥680, seasonal sorbet ¥380 (July 2026) · a wide sake list (2025–26 reviews)',
    website: null, gmaps: gm('一政 京都 四条 炭之座町'), menu_url: TB,
    notes: '[Aged-fish izakaya · Shijo-Karasuma] A renovated machiya in a back alley near Shijo-Karasuma, built around fish bled and aged by the Tsukamoto method: rich, sticky aged-fish sashimi platters, then creative plates — yuba spring rolls, eggplant dengaku, shrimp mayo — with an unusual sake list. Closed Monday; book ahead.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: an izakaya opened 17 January 2012, serving fish treated by the Tsukamoto ultimate blood-removal method and then aged (January and April 2025).',
      philosophy: null, specialty: 'Aged-fish sashimi.',
      anecdotes: [
        { text: 'A September 2025 pair ordered the aged-sashimi omakase — mackerel, saury, sea bream, tuna, young sawara and shark — then found the rest of the menu more modern and creative than expected.', source: R + 'B514499194/' },
        { text: 'An April 2025 return visitor singled out the kinmedai and sawara in the sashimi platter, lightly seared and salted, to be eaten as served.', source: R + 'B507440289/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮・日本料理、中京区炭之座町416-1、火〜日17:00〜23:00 (料理L.O.22:00)、月曜休み、カード・PayPay 可、電子マネー不可、48席 (座敷・掘りごたつ・カウンター)、カウンターは電子たばこのみ、2012年1月17日オープン。口コミ (2025年1月〜2026年7月、英語): ツカモト式の究極の血抜きをして熟成させた魚の刺身、金目鯛や鰆の炙り、鯖、秋刀魚、鯛、まぐろ、なすの味噌田楽、湯葉の春巻き、海老マヨ、ミニ海鮮丼、豚バラと野菜のにんにく炒め780円、ベイクドポテトのチーズ焼き680円、若鶏の唐揚げ680円、季節のシャーベット380円、日本酒が豊富、飲み放題のコース、町家を改装、四条の路地。',
      confidence: 'medium', sources: [TB, R + 'B499200441/', R + 'B500203753/', R + 'B507440289/', R + 'B507865264/', R + 'B514499194/', R + 'B520513951/', R + 'B526630150/', R + 'B527841589/', R + 'B534128714/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead and ask for the aged-fish sashimi platter; ask prices if ordering omakase. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区炭之座町416-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004063, 135.756024); GSI matched only the town 京都府京都市中京区炭之座町 (no lot), 41m — approximate; offset 8 m east so as not to stack on チャコール Charcoal (炭之座町416, same lot); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534128714/'],
    price_note: 'À la carte prices from July 2026; reviewers report ¥5,000–7,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Aged-fish sashimi platter', '', 'Sashimi', 'ask', 'no', 'April 2025 to July 2026.', 'aged_sashimi'),
      it('', '', 'Garlic pork belly and vegetables', '¥780', 'Dishes', 'ask', 'no', 'July 2026.', 'pork_garlic'),
      it('', '', 'Karaage', '¥680', 'Dishes', 'no', 'no', 'July 2026.', 'karaage'),
      it('', '', 'Seasonal sorbet', '¥380', 'Dessert', 'ask', 'ask', 'July 2026.', 'sorbet'),
    ] }, {
    cuisine: 'ツカモト式の血抜きで熟成させた魚と和伊の創作料理の居酒屋・熟成魚の刺身の盛り合わせ (金目鯛や鰆の塩の炙りなど) (2025年4月)、鯖、秋刀魚、鯛、まぐろ、鰆 (2025年9月)・なすの味噌田楽、梅だれの湯葉春巻き、海老マヨ、ミニ海鮮丼 (2025年9月)・豚バラと野菜のにんにく炒め780円、ベイクドポテトのチーズ焼き680円、唐揚げ680円、季節のシャーベット380円 (2026年7月)・豊富な日本酒 (2025〜2026年の口コミ)',
    neighborhood: '釜座、四条烏丸の近く',
    gf_detail: 'グルテンフリーではない。天ぷら、唐揚げ、湯葉春巻き、海老マヨ、味噌田楽、刺身の醤油 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。熟成魚の刺身が中心、ほかに豚、鶏、乳製品の料理 (2025〜2026年の口コミ)。',
    notes: '[熟成魚の居酒屋・四条烏丸] 四条烏丸近くの路地の改装町家。ツカモト式で血抜きし熟成させた魚が主役で、ねっとり濃い熟成魚の刺身の盛り合わせのあとは、湯葉春巻き、なすの田楽、海老マヨなどの創作料理と珍しい日本酒を。月曜休み、予約がおすすめ。',
  });
}

// ================================================================ WEBER
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26041066/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '00:00']);
  put({
    id: 'kyoto_weber_kawabata_nijo', name: 'WEBER (ウェバー)', category: 'OMNI',
    lat: 35.01349, lng: 135.773051, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta, pizza, cotoletta, spelt (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wild boar, venison, pâté, cheese-topped vegetables (2024–26 reviews).',
    hours_raw: 'Daily 15:00–24:00 (last order 24:00); closing days vary (Tabelog). One man cooks and serves (November 2024, July 2026); fully booked by 16:00 on a weekday in August 2026 — reserve online. Cards, e-money and QR (Tabelog). 10 seats: four at the counter, tables for two and four (Tabelog). At Kawabata-Nijo, east of the river, near the ROHM Theatre (January 2025, July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawabata-Nijo — Sanjo Keihan',
    cuisine: 'Italian bar of game meat, open from mid-afternoon · wild-boar bolognese, wild-boar hamburg (July 2024, December 2025), oven-baked minced boar with eggplant (May 2025), venison steak (March 2026) · mushroom and myoga salad (January and August 2025), grilled vegetables with cheese, small pizzas (November 2024) · spelt with olives ¥900, pâté de campagne ¥800, water-eggplant cotoletta ¥450 (May 2024) · wines by the glass (August 2026)',
    website: null, gmaps: gm('WEBER 京都 川端二条'), menu_url: TB,
    notes: '[Italian & game · Kawabata-Nijo] A ten-seat Italian bar near Kawabata-Nijo run single-handed by a friendly owner: wild-boar bolognese and hamburg, venison steak, small pizzas and seasonal salads with wine by the glass, from 15:00 until midnight. Book ahead — it fills early.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), who runs the room alone (2024–26 reviews)'], origin: null,
      background: 'Per Tabelog and reviews: an Italian bar opened 10 May 2024 near Kawabata-Nijo; a March 2026 reviewer had eaten the owner’s venison and boar dishes at a previous restaurant.',
      philosophy: null, specialty: 'Game meat — wild boar and venison.',
      anecdotes: [
        { text: 'A July 2026 first-timer found game dishes with no gamey taste, and with the owner managing the room alone, finished three bottles of wine.', source: R + 'B532852391/' },
        { text: 'An April 2026 diner booked online for 22:00 and found the late hour a gift, with regulars around and the solo chef keeping the dishes coming at the right pace.', source: R + 'B536668459/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・肉料理・バル、左京区二条川端東入新先斗町121-1、毎日15:00〜24:00 (L.O.24:00)、不定休、カード・電子マネー・QR 可、10席 (カウンター4、テーブル2と4)、2024年5月10日オープン。口コミ (2024年5月〜2026年8月、英語): 店主が一人で営む、ジビエのイタリアン、猪のボロネーゼ、猪のハンバーグ、猪ひき肉となすのオーブン焼き、鹿のステーキ、きのこと茗荷のサラダ、野菜のグリルのチーズのせ、小さめのピザ、スペルト小麦とオリーブ900円、パテ・ド・カンパーニュ800円、水なすのコトレッタ450円、グラスワイン、平日16時に満席、オンライン予約、ロームシアターの近く。',
      confidence: 'medium', sources: [TB, R + 'B500725770/', R + 'B506174200/', R + 'B511235396/', R + 'B519447602/', R + 'B524270855/', R + 'B532852391/', R + 'B533669500/', R + 'B536668459/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reserve online; one person runs the room, so be patient at busy times. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区二条川端東入新先斗町121-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.013562, 135.773051); cross-checked: GSI 京都府京都市左京区新先斗町121番地 (lot) 13m; offset 8 m south so as not to stack on ペリフェリコ Periferico (新先斗町120-1, next door); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B485101524/'],
    price_note: 'Prices from May 2024; reviewers report ¥3,000–9,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Wild-boar bolognese', '', 'Pasta', 'no', 'no', 'July 2024 and December 2025.', 'boar_bolognese'),
      it('', '', 'Venison steak', '', 'Mains', 'ask', 'no', 'March 2026.', 'venison'),
      it('', '', 'Mushroom and myoga salad', '', 'Salads', 'ask', 'ask', 'January and August 2025.', 'mushroom_salad'),
      it('', '', 'Spelt with olives', '¥900', 'Starters', 'no', 'ask', 'May 2024.', 'spelt'),
    ] }, {
    cuisine: '昼過ぎから開くジビエのイタリアンバー・猪のボロネーゼ、猪のハンバーグ (2024年7月、2025年12月)、猪ひき肉となすのオーブン焼き (2025年5月)、鹿のステーキ (2026年3月)・きのこと茗荷のサラダ (2025年1月・8月)、チーズをのせた野菜のグリル、小さめのピザ (2024年11月)・スペルト小麦とオリーブ900円、パテ・ド・カンパーニュ800円、水なすのコトレッタ450円 (2024年5月)・グラスワイン (2026年8月)',
    neighborhood: '川端二条。京阪三条',
    gf_detail: 'グルテンフリーではない。パスタ、ピザ、コトレッタ、スペルト小麦 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。猪、鹿、パテ、チーズをのせた野菜 (2024〜2026年の口コミ)。',
    notes: '[イタリアンとジビエ・川端二条] 川端二条近く、気さくな店主が一人で営む10席のイタリアンバー。猪のボロネーゼやハンバーグ、鹿のステーキ、小さめのピザ、季節のサラダをグラスワインと、15時から深夜0時まで。早く埋まるので予約を。',
  });
}

save();
