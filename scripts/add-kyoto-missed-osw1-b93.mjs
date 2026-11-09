// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 93.
//   + ワインとハイボール ふじ屋 Wine to Highball Fujiya (10-seat late-night counter bar east of Nishinotoin-Takatsuji)
//   + 喫茶ポッポ Kissa Poppo (Showa coffee shop with curry, run single-handed, on Higashioji in Sakyo)
//   + 二条高倉 うい Ui (creative Japanese dishes and sake bar near Karasuma-Oike, opened June 2026)
//   + カフェ かねや Cafe Kaneya (Japanese-style café lunch on the slope to Kiyomizu, Gojo)
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26032424, 26013680, 26045180, 26005028.
//   Next in lane: 26041034 創作京料理 誠ごころ (fetched, not yet worked).
//   queue-status.jsonl grepped for each brand (ふじ屋, ポッポ, うい, かねや): no earlier rulings.
//   Data check (current main, hidden included): none of the four is in data/kyoto.json by Tabelog id, name or address;
//   うい took over the site of 日本酒食堂 しずく (closed; not in data).
//   Same-name count: one shop each; operators: ふじ屋 — invoice holder 佐藤雄大, an individual (NTA register); others not
//   found.
//   Service charges, checked against the Japanese original: ふじ屋 チャージ料600円（税込）(おつきだし付) — the English
//   wrongly says “includes soup stock”; it includes an appetizer. うい お席料330円（17時～）※コースの場合はなし.
//   None listed for ポッポ or かねや.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal certification.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-93');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ワインとハイボール ふじ屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032424/'; const R = TB + 'dtlrvwlst/';
  const H = day(['19:00', '02:00']);
  put({
    id: 'kyoto_wine_highball_fujiya', name: 'ワインとハイボール ふじ屋 (Wine to Highball Fujiya)', category: 'OMNI',
    lat: 35.000063, lng: 135.75593, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wine, whisky highballs and Japanese small plates; no food or gluten details beyond an appetizer with the cover charge (Tabelog; January 2026).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No information on the dishes (Tabelog; January 2026).',
    hours_raw: 'Monday–Saturday 19:00–02:00 (last orders 1:30); closed Sunday (Tabelog). Cover charge ¥600 incl. tax, with an appetizer (Tabelog, original チャージ料600円（税込）(おつきだし付); the English page mistranslates it as “soup stock”). Cards and QR; no e-money (Tabelog). 10 counter seats (Tabelog; January 2026). A minute east of Nishinotoin-Takatsuji (January 2026). Open since 1 May 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'A minute east of Nishinotoin-Takatsuji',
    cuisine: 'A late-night counter for wine, whisky highballs and Japanese small plates (Tabelog) · a carefully arranged appetizer with whisky and water (January 2026)',
    website: null, gmaps: gm('ワインとハイボール ふじ屋 京都'), menu_url: TB,
    notes: '[Bar · Nishinotoin-Takatsuji, late] A ten-seat counter bar a minute from Nishinotoin-Takatsuji, open till 2:00, for wine, highballs and small Japanese plates, where the owner looks after regulars and newcomers alike. ¥600 cover with an appetizer. Closed Sunday.',
    chef_bio: { chef_name: '佐藤雄大 (reading not sourced)', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'The receipt invoice number on Tabelog belongs to 佐藤雄大, an individual (NTA register). A January 2026 reviewer describes a master whose thoughtful service makes regulars and first-timers mix easily.',
      philosophy: null, specialty: 'Wine and highballs.',
      anecdotes: [
        { text: 'A January 2026 regular came for a New Year drink and spent the evening chatting with three other regulars at the counter.', source: R + 'B481755499/' },
      ],
      japanese_sources_summary: '食べログ: ワインとハイボール ふじ屋、ワインバー・居酒屋・日本料理、下京区堀乃内272-4、月〜土 19:00〜翌2:00 (L.O. 1:30)、日曜定休、2019年5月1日オープン、チャージ料600円 (税込、おつきだし付)、カード・QR可、電子マネー不可、10席。適格請求書: 佐藤雄大 (個人)。口コミ (2026年1月、英語): 西洞院高辻から東へ1分、カウンターのみ、常連と新しい客が交わる、マスターの気配り、美しく盛られたお通しと水割り。',
      confidence: 'low', sources: [TB, R + 'B481755499/'] },
    cultural_comfort: { level: 'japanese', note: 'Small regulars’ counter; ¥600 cover with an appetizer.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区堀乃内272-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; review dated January 2026.' },
    pin_source: `Tabelog ${TB} (35.000063, 135.75593); cross-checked: GSI 京都府京都市下京区堀之内町272番地 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Cover ¥600 with an appetizer (Tabelog); reviewers spent ¥2,000–¥2,999 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Cover charge with appetizer', '¥600', 'Cover', 'ask', 'ask', 'Tabelog.', 'otoshi'),
      it('', '', 'Whisky highball', '', 'Drinks', 'ask', 'ask', 'Tabelog.', 'highball'),
    ] }, {
    cuisine: 'ワイン、ハイボール、和の小皿の深夜のカウンター (食べログ)・美しく盛られたお通しと水割り (2026年1月)',
    neighborhood: '西洞院高辻から東へ1分',
    gf_detail: '要確認。ワイン、ハイボール、和の小皿。チャージに付くお通し以外に料理やグルテンの情報はない (食べログ、2026年1月)。',
    vegan_detail: '要確認。料理の情報はない (食べログ、2026年1月)。',
    notes: '[バー・西洞院高辻、深夜まで] 西洞院高辻から1分、10席のカウンターのバー。深夜2時まで、ワイン、ハイボール、和の小皿を。店主が常連にも初めての客にも気を配る。チャージ600円 (お通し付)。日曜定休。',
  });
}

// ================================================================ 喫茶ポッポ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26013680/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '14:00']);
  put({
    id: 'kyoto_kissa_poppo_niomon', name: '喫茶ポッポ (Kissa Poppo)', category: 'OMNI',
    lat: 35.011456, lng: 135.778522, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: curry roux, curry udon and toast (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef curry (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday 7:00–14:00; closed Sunday (Tabelog). The sign may read “preparing” while it is open (April 2026). About four counter seats and two tables for two (April 2026). Smoking allowed; no smartphones or Wi-Fi — newspapers, magazines and TV instead (July 2026). On Higashioji, southeast of the 仁王門 crossing (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashioji, Sakyo — southeast of the 仁王門 crossing',
    cuisine: 'A Showa-era neighbourhood coffee shop (July 2026) · beef curry with A4-grade meat ¥750 (April 2025) · spicy curry with braised beef; breakfast toast set ¥450; coffee (April 2026) · curry rice and curry udon only at lunch now (July 2026)',
    website: null, gmaps: gm('喫茶ポッポ 京都'), menu_url: TB,
    notes: '[Kissaten · Higashioji, Showa era] A tiny old coffee shop for neighbourhood regulars, run alone by an elderly owner: morning toast sets from 7:00, good coffee, and a beef curry with chunks of A4 beef for ¥750. No phones or Wi-Fi; smoking allowed. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; runs it alone)'], origin: null,
      background: 'A July 2026 reviewer describes an elderly owner who runs everything alone; an April 2025 reviewer found the owner friendly with first-timers. No operator was found.',
      philosophy: null, specialty: 'Beef curry.',
      anecdotes: [
        { text: 'An April 2026 couple skipping hotel breakfast found the sign set to “preparing”, saw customers inside, and were served curry and a ¥450 toast set among the regulars.', source: R + 'B527197434/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶ポッポ、カレー・喫茶店、左京区北門前町 (東大路仁王門南東)、月〜土 7:00〜14:00、日曜定休。口コミ (2025〜2026年、英語): 常連の多い店、気さくなマスター、A4ランクの牛肉のカレー750円、辛めのカレー、モーニングのトーストセット450円、コーヒー、カウンター4席と2人掛けテーブル2卓、昼はカレーライスとカレーうどんのみ、スマホとWi-Fi禁止、テレビと新聞・雑誌、喫煙可、年配の店主が一人で切り盛り。',
      confidence: 'low', sources: [TB, R + 'B505743523/', R + 'B509632069/', R + 'B527197434/', R + 'B530986424/'] },
    cultural_comfort: { level: 'japanese', note: 'Regulars’ coffee shop; no phones; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市左京区北門前町 (東大路仁王門南東)',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated April 2025 to July 2026.' },
    pin_source: `Tabelog ${TB} (35.011456, 135.778522); no lot number — GSI places only 北門前町 (town, 97 m); OSM reverse gives the neighbouring 東門前町 — kept the Tabelog point, marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505743523/', R + 'B527197434/'],
    price_note: 'Prices from April 2025 and April 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Beef curry rice', '¥750', 'Curry', 'no', 'no', 'April 2025.', 'curry'),
      it('', '', 'Breakfast toast set', '¥450', 'Morning', 'no', 'ask', 'April 2026.', 'toast_set'),
      it('', '', 'Curry udon', '', 'Curry', 'no', 'no', 'July 2026.', 'curry_udon'),
    ] }, {
    cuisine: '昭和の近所の喫茶店 (2026年7月)・A4ランクの牛肉のカレー750円 (2025年4月)・煮込んだ牛肉の辛めのカレー、モーニングのトーストセット450円、コーヒー (2026年4月)・昼は今はカレーライスとカレーうどんのみ (2026年7月)',
    neighborhood: '東大路仁王門の南東',
    gf_detail: 'グルテンフリーではない。カレーのルー、カレーうどん、トースト (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。牛肉のカレー (2025〜2026年の口コミ)。',
    notes: '[喫茶店・東大路仁王門、昭和の店] 年配の店主が一人で営む、近所の常連の小さな昔ながらの喫茶店。朝7時からトーストのセット、おいしいコーヒー、A4の牛肉がごろっと入った750円のカレー。スマホとWi-Fiは禁止、喫煙可。日曜定休。',
  });
}

// ================================================================ 二条高倉 うい
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26045180/'; const R = TB + 'dtlrvwlst/';
  const HW = day(['17:00', '23:00']); const HSS = day(['14:00', '23:00']);
  put({
    id: 'kyoto_nijo_takakura_ui', name: '二条高倉 うい (Ui)', category: 'OMNI',
    lat: 35.013402, lng: 135.762313, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Creative Japanese small plates (appetizer platter, sashimi with ponzu jelly, miso-butter stir-fry, corn tempura, fried rice); no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sea bream, hamo, salmon, duck, wagyu and chicken; dashi-based dishes (2026 reviews).',
    hours_raw: 'Monday–Friday 17:00–23:00; Saturday, Sunday and public holidays 14:00–23:00 (last orders 22:00); days off irregular (Tabelog). Seat charge ¥330 from 17:00, none with a course (Tabelog, original お席料330円（17時～）※コースの場合はなし). Cards and e-money (Tabelog). 18 seats at tables for 2–4 and a counter (Tabelog; October 2026). Non-smoking (Tabelog). QR-code ordering (October 2026). Opened 1 June 2026 in the former 日本酒食堂 しずく (Tabelog; June and October 2026). 5–6 min on foot from Karasuma-Oike (July and October 2026).',
    hours: { 0: HW, 1: HW, 2: HW, 3: HW, 4: HW, 5: HSS, 6: HSS }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Northeast of Karasuma-Oike — 5 min on foot',
    cuisine: 'Creative Japanese plates with Kyoto ingredients and sake from around Japan (October 2026) · assorted appetizers for one ¥1,500: sea bream with ponzu jelly, roast duck, salmon nanban-zuke, smoked-daikon potato salad (August 2026) · asparagus and maitake in miso butter ¥950; Awaji hamo sashimi ¥950; corn tempura ¥650; suguki and dried-sardine fried rice ¥650 (August 2026) · grilled wagyu with balsamic (July 2026) · truffle-salt fries; saikyo-miso salmon (October 2026) · seseri and Kujo negi; sake by 60 ml, 100 ml or tokkuri (August and October 2026)',
    website: null, gmaps: gm('二条高倉 うい'), menu_url: TB,
    notes: '[Sake and small plates · near Karasuma-Oike, opened 2026] A quiet new sake bar near Karasuma-Oike from an owner who is both sommelier and barista and ran a restaurant in Gion: creative Japanese plates, a generous appetizer platter for one, and sake by the 60 ml glass. Opens 14:00 at weekends. ¥330 seat charge from 17:00.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A June 2026 reviewer says the owner previously managed a restaurant in Gion and has gone independent here; a September 2026 reviewer describes the owner as a sommelier and barista. No operator was found.',
      philosophy: null, specialty: 'Creative Japanese small plates with sake.',
      anecdotes: [
        { text: 'An August 2026 solo traveller, not very hungry, made a meal of the appetizer platter and four 60 ml pours of sake.', source: R + 'B533281751/' },
      ],
      japanese_sources_summary: '食べログ: 二条高倉 うい、居酒屋・創作料理・バル、中京区瓦町540、月〜金 17:00〜23:00、土日祝日 14:00〜23:00 (L.O. 22:00)、不定休、2026年6月1日オープン、お席料330円 (17時〜、コースの場合はなし)、カード・電子マネー可、18席、禁煙。口コミ (2026年、英語): 日本酒食堂 しずくの跡、店主は祇園の店を任されていた、ソムリエでバリスタ、前菜の盛り合わせ1人前1,500円 (鯛のポン酢ジュレ、鴨のロースト、鮭の南蛮漬け、燻製大根のポテサラ)、アスパラと舞茸の味噌バター950円、淡路の鱧の造り950円、とうもろこしの天ぷら650円、すぐきとじゃこの炒飯650円、和牛のバルサミコ、トリュフ塩のフライドポテト、鮭の西京焼き、せせりと九条ねぎ、日本酒は60ml・100ml・徳利、QRで注文。',
      confidence: 'low', sources: [TB, R + 'B530547361/', R + 'B533281751/', R + 'B533826822/', R + 'B535200538/', R + 'B535585491/', R + 'B535938482/', R + 'B537133165/', R + 'B538825005/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering; ¥330 seat charge after 17:00.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区瓦町540',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened June 2026; reviews dated June to October 2026.' },
    pin_source: `Tabelog ${TB} (35.013402, 135.762313); cross-checked: GSI 京都府京都市中京区瓦町540番地 (lot) 60m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535200538/'],
    price_note: 'Prices from an August 2026 review; ¥330 seat charge from 17:00.', last_checked: TODAY, items: [
      it('', '', 'Assorted appetizers for one', '¥1,500', 'Small plates', 'ask', 'no', 'August 2026.', 'zensai'),
      it('', '', 'Awaji hamo sashimi', '¥950', 'Small plates', 'ask', 'no', 'August 2026.', 'hamo'),
      it('', '', 'Asparagus and maitake in miso butter', '¥950', 'Small plates', 'ask', 'no', 'August 2026.', 'asparagus'),
      it('', '', 'Corn tempura', '¥650', 'Small plates', 'no', 'ask', 'August 2026.', 'corn_tempura'),
      it('', '', 'Suguki and dried-sardine fried rice', '¥650', 'Rice', 'ask', 'no', 'August 2026.', 'fried_rice'),
    ] }, {
    cuisine: '京都の食材の創作和食と全国の日本酒 (2026年10月)・前菜の盛り合わせ1人前1,500円: 鯛のポン酢ジュレ、鴨のロースト、鮭の南蛮漬け、燻製大根のポテサラ (2026年8月)・アスパラと舞茸の味噌バター950円、淡路の鱧の造り950円、とうもろこしの天ぷら650円、すぐきとじゃこの炒飯650円 (2026年8月)・和牛のバルサミコソース (2026年7月)・トリュフ塩のフライドポテト、鮭の西京焼き (2026年10月)・せせりと九条ねぎ、日本酒は60ml・100ml・徳利で (2026年8・10月)',
    neighborhood: '二条高倉。烏丸御池から北東へ徒歩5分',
    gf_detail: '要確認。創作和食の小皿 (前菜の盛り合わせ、ポン酢ジュレの刺身、味噌バター炒め、とうもろこしの天ぷら、炒飯)。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。鯛、鱧、鮭、鴨、和牛、鶏、出汁を使う料理 (2026年の口コミ)。',
    notes: '[日本酒と小皿・二条高倉、2026年開店] 烏丸御池近くの静かな新しい日本酒の店。ソムリエでバリスタ、祇園の店を任されていた店主の創作和食、一人でも頼める前菜の盛り合わせ、60mlから選べる日本酒。週末は14時から。17時からお席料330円。',
  });
}

// ================================================================ カフェ かねや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005028/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:30', '18:00']);
  put({
    id: 'kyoto_cafe_kaneya_gojozaka', name: 'カフェ かねや (Cafe Kaneya)', category: 'OMNI',
    lat: 34.994831, lng: 135.777761, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: lunch mains include yaki udon and curry udon (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable-rich curry udon and shiratama sweets, but nothing is described as vegan (2025–2026 reviews).',
    hours_raw: 'Monday, Tuesday, Thursday–Sunday 10:30–18:00; closed Wednesday (Tabelog). Cards: AMEX (Tabelog). 24 seats (Tabelog). On the slope up to Kiyomizu-dera (December 2025; May 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo east of Higashioji — on the slope to Kiyomizu-dera',
    cuisine: 'A stylish Japanese-style café on the way to Kiyomizu-dera (December 2025) · lunch of about ¥1,500 with salad, soup and a small dessert, four mains to choose from incl. yaki udon (December 2025) · vegetable-packed curry udon; shiratama (May 2026)',
    website: null, gmaps: gm('カフェ かねや 五条'), menu_url: TB,
    notes: '[Café lunch · Gojo-zaka, Kiyomizu slope] A calm Japanese-style café on the slope up to Kiyomizu-dera, good for a break: lunch sets of about ¥1,500 with salad, soup and a little dessert, yaki udon, curry udon full of vegetables, and shiratama sweets. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'No operator or owner details were found.', philosophy: null, specialty: 'Udon lunch sets; shiratama.',
      anecdotes: [
        { text: 'A May 2026 visitor walking down from Kiyomizu-dera stopped in for vegetable-packed curry udon and loved the shiratama.', source: R + 'B527821394/' },
      ],
      japanese_sources_summary: '食べログ: カフェ かねや、カフェ、東山区五条通東大路東入白糸町570、月・火・木〜日 10:30〜18:00、水曜定休、カードはAMEX、24席。口コミ (2025〜2026年、英語): 清水寺への坂の和風カフェ、サラダ・スープ・小さなデザート付きのランチ約1,500円、4種から選べる (焼うどんなど)、野菜たっぷりのカレーうどん、白玉。',
      confidence: 'low', sources: [TB, R + 'B519901319/', R + 'B527821394/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Sightseeing-route café.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区五条通東大路東入白糸町570',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated December 2025 and May 2026.' },
    pin_source: `Tabelog ${TB} (34.994831, 135.777761); cross-checked: GSI 京都府京都市東山区白糸町570番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519901319/'],
    price_note: 'Lunch about ¥1,500 (December 2025).', last_checked: TODAY, items: [
      it('', '', 'Lunch set with salad, soup and small dessert', '¥1,500', 'Lunch', 'ask', 'ask', 'December 2025; about ¥1,500.', 'lunch'),
      it('', '', 'Yaki udon', '', 'Lunch', 'no', 'ask', 'December 2025.', 'yakiudon'),
      it('', '', 'Curry udon with vegetables', '', 'Lunch', 'no', 'ask', 'May 2026.', 'curry_udon'),
      it('', '', 'Shiratama', '', 'Sweets', 'ask', 'ask', 'May 2026.', 'shiratama'),
    ] }, {
    cuisine: '清水寺への道のおしゃれな和風カフェ (2025年12月)・サラダ、スープ、小さなデザート付きのランチ約1,500円、焼うどんなど4種から選ぶ (2025年12月)・野菜たっぷりのカレーうどん、白玉 (2026年5月)',
    neighborhood: '五条通東大路の東。清水寺への坂の途中',
    gf_detail: 'グルテンフリーではない。昼のメインに焼うどんやカレーうどん (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。野菜たっぷりのカレーうどんや白玉はあるが、ヴィーガンとは書かれていない (2025〜2026年の口コミ)。',
    notes: '[カフェのランチ・五条坂、清水への坂] 清水寺への坂にある落ち着いた和風カフェ。サラダ、スープ、小さなデザート付きの約1,500円のランチ、焼うどん、野菜たっぷりのカレーうどん、白玉。ひと休みに。水曜定休。',
  });
}

save();
