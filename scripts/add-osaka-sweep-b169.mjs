// Osaka sweep (2-mile circle around Dotonbori), batch 169 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + 酒場 音色 定食と路地裏の酒場 (10-seat alley counter: set-meal lunch, Okinawa-tinged small plates at night; Shinsaibashi-suji)
//   + 天carat (13-seat tempura counter with creative tempura and a ¥4,400 course, to 3 am; Higashi-Shinsaibashi)
//   + 日本酒BAR 四季 (10-seat sake bar, Tohoku sake and seasonal fish; Higashi-Shinsaibashi)
//   + お結び屋TARITARI (rice-ball and seafood izakaya, fish caught by the owner, to 7 am; Souemoncho)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 169);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 酒場 音色 定食と路地裏の酒場
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27153247/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://sakabaneiro.com/';
  const LD = day(['11:30', '14:30'], ['18:00', '22:30']);
  put({
    id: 'osaka_sakaba_neiro_shinsaibashi', name: '酒場 音色 定食と路地裏の酒場 (Sakaba Neiro)', category: 'OMNI',
    lat: 34.672317, lng: 135.501636, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; set meals and small plates include chicken nanban, fried horse mackerel, gyoza, gratin and tacos.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: set-meal mains are meat or fish and come with a raw egg; nothing described as vegan.',
    hours_raw: 'Tabelog hours table: Tuesday 18:00–22:30; Wed–Sun 11:30–14:30 (last order 14:00) and 18:00–22:30 (food last order 21:45); closed Monday. The same listing\'s note says closed Sundays and the 1st and 3rd Mondays, so check before a Sunday visit. Lunch can be reserved (September–October 2026). Cards, iD/QUICPay and PayPay accepted (Tabelog). Heated tobacco only, dinner only (Tabelog). Opened 15 November 2025; formerly Wabisuke, same owner (Tabelog; August 2026).',
    hours: { 1: day(['18:00', '22:30']), 2: LD, 3: LD, 4: LD, 5: LD, 6: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 1-5-19, Shinbura-gai 1F, in a back alley just off the Shinsaibashi-suji arcade — 2 min from Shinsaibashi Stn exit 6',
    cuisine: 'Set-meal lunch and an izakaya at night, at a 10-seat counter · lunch sets (choose a main): meat tofu ¥1,100; chicken nanban with mentaiko and tartar sauces; fried horse mackerel; with rice (free refills), miso soup, small side dishes and a raw egg · dinner: obanzai assortment (3 kinds) ¥990 · rafute (Okinawan braised pork) tacos ¥550, with hot sauce · tako-wasa and chopped nagaimo salad ¥580 · crab gratin ¥500 · shrimp gyoza ¥580',
    website: OWN, gmaps: gm('酒場 音色 心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · a 10-seat back-alley counter with set-meal lunches, Shinsaibashi] A quiet 10-seat counter in an alley just off the busy Shinsaibashi-suji arcade, reopened in November 2025 under a new name by the owner of the former Wabisuke, with an Okinawan streak. Lunch is a tray set: pick a main such as the gently seasoned meat tofu (¥1,100) or chicken nanban with both mentaiko and tartar sauce, with rice refills, miso soup, small sides and a raw egg for egg-over-rice. At night order the obanzai assortment (¥990), which one diner saw every table order, plus rafute tacos (¥550) with hot sauce, tako-wasa with nagaimo, crab gratin and shrimp gyoza. Lunch can be reserved, which helps with so few seats.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Opened 15 November 2025 (Tabelog); formerly Wabisuke, same owner (August 2026 review).', background: 'Counter izakaya with set-meal lunches (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Set-meal lunches; obanzai; rafute tacos.',
      anecdotes: [
        { text: '"You can get free refills on rice, and it comes with four types of obanzai (Japanese side dishes) and a raw egg, which I used to make a delicious egg over rice." — August 2026, Meat Tofu Set Meal ¥1,100.', source: R + 'B533082533/' },
        { text: '"…I particularly enjoyed the original tacos made with rafute (Okinawan braised pork)… You can also increase the spiciness with sauce…" — September 2026, Rafutinas ¥550.', source: R + 'B535063836/' },
      ],
      japanese_sources_summary: '食べログ: 酒場 音色 定食と路地裏の酒場、大阪市中央区心斎橋筋1-5-19 しんぶら街 1F、心斎橋駅6番出口から徒歩2分、営業時間の表は火18:00〜22:30、水〜日11:30〜14:30 (L.O. 14:00)・18:00〜22:30 (料理L.O. 21:45)、月曜休み、同じ掲載の備考には日曜と第1・第3月曜休みとも、2025年11月15日開店、10席、カード・iD・QUICPay・PayPay可、加熱式たばこのみ (夜)、公式サイトあり。口コミ(2026年8〜10月): 心斎橋筋の商店街から路地に入った静かなカウンター、以前の Wabisuke と同じオーナー、沖縄の雰囲気、昼はメインを選ぶ定食 (meat tofu 1,100円、mentaiko とタルタルの chicken nanban、アジのフライ)、ご飯おかわり自由、みそ汁、小鉢、生卵、昼も予約できる、夜は obanzai 3種盛り990円、rafute のタコス550円、tako-wasa と nagaimo のサラダ580円、蟹グラタン500円、海老の gyoza 580円。',
      confidence: 'medium', sources: [TB, OWN, R + 'B533082533/', R + 'B535063836/', R + 'B535077938/', R + 'B536251600/', R + 'B536252509/', R + 'B537739265/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter only; reserve lunch (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-5-19 しんぶら街 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目5番19号 (go) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533082533/', R + 'B535063836/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Meat tofu set meal (lunch)', '¥1,100', 'Lunch', 'ask', 'no', 'August–October 2026.', 'nikudofu'),
      it('', '', 'Chicken nanban set meal (lunch)', '', 'Lunch', 'no', 'no', 'September 2026.', 'nanban'),
      it('', '', 'Obanzai assortment (3 kinds)', '¥990', 'Dinner', 'ask', 'ask', 'September 2026.', 'obanzai'),
      it('', '', 'Rafute tacos', '¥550', 'Dinner', 'ask', 'no', 'September 2026.', 'tacos'),
      it('', '', 'Crab gratin', '¥500', 'Dinner', 'ask', 'no', 'September 2026.', 'gratin'),
      it('', '', 'Shrimp gyoza', '¥580', 'Dinner', 'no', 'no', 'September 2026.', 'gyoza'),
    ] }, {
    cuisine: '昼は定食、夜は居酒屋の10席のカウンター・昼の定食 (メインを選ぶ): meat tofu 1,100円、mentaiko とタルタルの chicken nanban、アジのフライ、ご飯おかわり自由、みそ汁、小鉢、生卵つき・夜は obanzai 3種盛り990円・辛いソースで食べる rafute (沖縄の豚の煮込み) のタコス550円・tako-wasa と刻んだ nagaimo のサラダ580円・蟹グラタン500円・海老の gyoza 580円',
    neighborhood: '心斎橋筋1-5-19 しんぶら街 1F、心斎橋筋の商店街から入った路地。心斎橋駅6番出口から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。定食や小皿には chicken nanban、アジのフライ、gyoza、グラタン、タコスも。',
    vegan_detail: '実質ヴィーガンではありません。定食のメインは肉か魚で生卵つき。ヴィーガンの記載なし。',
    notes: '[居酒屋・心斎橋、定食ランチのある路地裏の10席] にぎやかな心斎橋筋の商店街から路地に入った静かな10席のカウンターで、以前の Wabisuke のオーナーが2025年11月に新しい名前で再開。沖縄の雰囲気も。昼はトレーの定食で、やさしい味の meat tofu (1,100円) やmentaiko とタルタルの両方がかかった chicken nanban などからメインを選び、ご飯おかわり、みそ汁、小鉢、ご飯にかける生卵つき。夜は obanzai の盛り合わせ (990円) を、まわりの全員が頼んでいたという声も。rafute のタコス (550円) に辛いソース、tako-wasa と nagaimo、蟹グラタン、海老の gyoza も。席が少ないので昼も予約できるのがありがたい。',
  });
}

// ================================================================ 天carat
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27138582/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '03:00']);
  put({
    id: 'osaka_ten_carat_higashishinsaibashi', name: '天carat (Ten Carat)', category: 'OMNI',
    lat: 34.672051, lng: 135.503293, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A tempura counter; three diners describe the soba as 100% buckwheat (ju-wari), but the dipping broth and any shared fryer are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: the course runs through shrimp, anago, egg, cheese and a beef soup; nothing described as vegan.',
    hours_raw: 'Mon–Sat and holidays 17:00–03:00 (food last order 02:00); Sunday 17:00–24:00; irregular closures (Tabelog). Same-day reservations until 1.5 hours before closing (Tabelog). Seat charge ¥330 (Tabelog). Cards, e-money and QR (including Alipay and WeChat Pay) accepted (Tabelog). Heated tobacco only (Tabelog). Opened 30 September 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: day(['17:00', '00:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-16-7, Nippo Suomachi Arden 1F — 5 min from Shinsaibashi Stn',
    cuisine: 'Tempura counter izakaya (13 counter seats) · course ¥4,400 · classic tempura: jumbo shrimp, a whole anago, autumn eggplant · creative tempura: toro-taku canapé on seaweed, soft-boiled egg with shiba-zuke tartar, Camembert with honey · Carat Roll ¥1,540: salmon, sea bream and roe wrapped with myoga and shiso · niku-sui, beef soup with tofu · ju-wari (100% buckwheat) soba for dipping · sweet-potato tempura with vanilla ice cream and honey · sashimi · six kinds of sake; sparkling sake Mio ¥1,210',
    website: null, gmaps: gm('天carat 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Tempura · a 13-seat late-night tempura counter with creative pieces, Higashi-Shinsaibashi] A calm, stylish tempura counter in Higashi-Shinsaibashi that stays open until 3 am. The ¥4,400 course is the easy way in: a toro-taku canapé on seaweed tempura, a soft-boiled egg with shiba-zuke tartar, Camembert drizzled with honey, then jumbo shrimp, a whole anago and fan-cut eggplant, all served piping hot, plus the Carat Roll of salmon and sea bream wrapped with myoga and shiso. Two diners say the beef niku-sui soup, with 100% buckwheat soba to dip, stole the show; dessert is sweet-potato tempura with vanilla ice cream. Menus in English, Chinese and Korean, and English-speaking staff (Tabelog). ¥330 seat charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 30 September 2023 (Tabelog).', background: 'Tempura counter izakaya with a staff-maintained Tabelog listing (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Creative tempura; niku-sui.',
      anecdotes: [
        { text: '"For the soft-boiled egg, I chose a sauce made with shiba-zuke (pickled vegetables) tartar… The tempura of Camembert cheese was drizzled with honey…" — September 2026.', source: R + 'B535211375/' },
        { text: '"What stood out to me this time was the Nikusui (meat soup). Although it\'s a tempura restaurant, this dish left the strongest impression on me." — October 2026.', source: R + 'B537777488/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 天carat、大阪市中央区東心斎橋1-16-7 日宝周防町アーデン 1F、心斎橋駅から徒歩5分、月〜土・祝17:00〜翌3:00 (料理L.O. 2:00)、日17:00〜24:00、不定休、2023年9月30日開店、当日予約は閉店1時間半前まで、席料330円、カード・電子マネー・QR可、加熱式たばこのみ、カウンター13席、英語・中国語・韓国語のメニュー、英語を話すスタッフ、日本酒6種。口コミ(2026年8〜10月): 4,400円のコース、toro-taku のカナッペ、shiba-zuke のタルタルの半熟卵、はちみつのカマンベール、大海老、anago 1本、秋なす、Carat Roll 1,540円 (サーモン、鯛、魚卵を myoga と shiso で巻く)、niku-sui、ju-wari soba のつけそば、さつまいもの天ぷらにバニラアイス、スパークリング日本酒 Mio 1,210円、揚げたてで熱々。',
      confidence: 'medium', sources: [TB, R + 'B534455695/', R + 'B535211375/', R + 'B535433063/', R + 'B536979694/', R + 'B537089895/', R + 'B537777488/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Chinese and Korean; English-speaking staff (Tabelog; October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-16-7 日宝周防町アーデン 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目16番7号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535211375/', R + 'B537089895/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course (toro-taku canapé to sweet-potato tempura)', '¥4,400', 'Courses', 'no', 'no', 'October 2026.', 'course'),
      it('', '', 'Carat Roll', '¥1,540', 'Plates', 'ask', 'no', 'September 2026.', 'roll'),
      it('', '', 'Assorted tempura (jumbo shrimp, anago, eggplant)', '', 'Tempura', 'no', 'no', 'September–October 2026.', 'tempura'),
      it('', '', 'Niku-sui (beef soup) with ju-wari soba', '', 'Plates', 'ask', 'no', 'August–October 2026.', 'nikusui'),
      it('', '', 'Sparkling sake Mio', '¥1,210', 'Drinks', '', '', 'October 2026.', 'mio'),
    ] }, {
    cuisine: '天ぷらのカウンター居酒屋 (カウンター13席)・4,400円のコース・定番の天ぷら: 大海老、anago 1本、秋なす・創作天ぷら: 海苔の天ぷらにのせた toro-taku のカナッペ、shiba-zuke のタルタルの半熟卵、はちみつのカマンベール・Carat Roll 1,540円: サーモン、鯛、魚卵を myoga と shiso で巻く・niku-sui (豆腐の入った牛のスープ)・つけて食べる ju-wari soba・さつまいもの天ぷらにバニラアイスとはちみつ・sashimi・日本酒6種、スパークリング日本酒 Mio 1,210円',
    neighborhood: '東心斎橋1-16-7 日宝周防町アーデン 1F。心斎橋駅から徒歩5分',
    gf_detail: '要確認。天ぷらのカウンター。そばは ju-wari (そば粉100%) という声が3人あるが、つけ汁や揚げ油の共用は書かれていない。',
    vegan_detail: '実質ヴィーガンではありません。コースは海老、anago、卵、チーズ、牛のスープへと続く。ヴィーガンの記載なし。',
    notes: '[天ぷら・東心斎橋、深夜3時まで開く創作天ぷらの13席] 東心斎橋の落ち着いたおしゃれな天ぷらのカウンターで、深夜3時まで。入りやすいのは4,400円のコースで、海苔の天ぷらにのせた toro-taku のカナッペ、shiba-zuke のタルタルの半熟卵、はちみつをかけたカマンベール、続いて大海老、anago 1本、扇形の茄子が熱々で。サーモンと鯛を myoga と shiso で巻いた Carat Roll も。牛の niku-sui に ju-wari soba をつけるのがいちばん印象に残ったという声がふたり。デザートはさつまいもの天ぷらにバニラアイス。英語・中国語・韓国語のメニュー、英語を話すスタッフ (食べログ)。席料330円。',
  });
}

// ================================================================ 日本酒BAR 四季
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27089103/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '00:00']);
  put({
    id: 'osaka_sake_bar_shiki_higashishinsaibashi', name: '日本酒BAR 四季 (SAKE BAR SHIKI)', category: 'OMNI',
    lat: 34.671852, lng: 135.503899, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the food is seasonal fish and small dishes, some with sauces (liver mayo, sukiyaki-style, cream soup).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A seafood-led menu; Senshu water eggplant appears seasonally; nothing described as vegan.',
    hours_raw: 'Mon–Sat 18:00–24:00 (food last order 23:30; last entry 23:00, call if arriving later); closed Sunday and holidays (Tabelog). Charge ¥300 (Tabelog). Sashimi platter from ¥1,500 per person to your budget, booked at least a day ahead (Tabelog). Cards, e-money and QR accepted (Tabelog). Non-smoking (Tabelog). Opened 2 September 2015 (Tabelog). Occasional events such as fruit nights and brewery visits (2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-5-30, Ox Suomachi Bldg 2F — 5 min from Shinsaibashi Stn',
    cuisine: 'Sake bar with seasonal fish at a 10-seat counter · sake focused on local brews from Tohoku, with tasting flights and suggestions · fish bought daily, as sashimi and cooked dishes · sashimi platter from ¥1,500 per person (book a day ahead) · red shrimp marinated in sake · bonito paired with sake · Senshu water eggplant · grilled squid tentacles with liver mayo · Wagyu sukiyaki-style · black truffle cream soup · Okinawa soba with squid-ink yakisoba · tamago kake gohan',
    website: null, gmaps: gm('日本酒BAR 四季 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Sake bar · a 10-seat Tohoku sake counter with seasonal fish, Higashi-Shinsaibashi] A calm second-floor sake bar of ten counter seats in Higashi-Shinsaibashi, open since 2015 and focused on local sake from Tohoku. Tell the staff what you like and a few get poured to try; one diner did a flight of one brewery's range, another paired sake with bonito. The food beats bar snacks: fish bought daily, red shrimp marinated in sake (two diners single it out), Senshu water eggplant as sashimi, squid tentacles with liver mayo, Wagyu sukiyaki-style, even Okinawa soba with squid-ink yakisoba. A sashimi platter from ¥1,500 a head can be ordered a day ahead. Beginners are welcome (Tabelog). Last entry 23:00; closed Sundays and holidays; ¥300 charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 2 September 2015 (Tabelog).', background: 'Sake bar with seasonal fish (Tabelog; 2026 reviews).', philosophy: 'Seasonal fish bought daily; local sake from Tohoku (Tabelog listing).', specialty: 'Tohoku sake; sake-marinated red shrimp.',
      anecdotes: [
        { text: '"The red shrimp marinated in sake was incredibly delicious! The rich sweetness of the shrimp combined with the flavor of the sake made it the perfect accompaniment for drinks." — January 2026.', source: R + 'B522031332/' },
        { text: '"On this visit, I enjoyed a tasting of Rashomon. It was fascinating to realize how the aroma, flavor, and finish can vary so much even within the same brewery…" — July 2026.', source: R + 'B531889978/' },
      ],
      japanese_sources_summary: '食べログ: 日本酒BAR 四季、大阪市中央区東心斎橋2-5-30 オックス周防町ビル 2F、心斎橋駅から徒歩5分、月〜土18:00〜24:00 (料理L.O. 23:30、最終入店23:00、遅れる場合は電話を)、日・祝休み、2015年9月2日開店、チャージ300円、カード・電子マネー・QR可、禁煙、カウンター10席、sashimiの盛り合わせは一人1,500円から予算に応じて (前日までに予約)、東北の地酒が中心、毎日仕入れる旬の魚、日本酒初心者も歓迎。口コミ(2026年1〜9月): 好みを伝えると何種類か出してくれる、Rashomon の飲み比べ、鰹と日本酒の組み合わせ、赤海老の酒漬け、泉州の水なすのsashimi、イカの足の肝マヨ焼き、和牛の sukiyaki 風、黒トリュフのクリームスープ、イカ墨の yakisoba の Okinawa soba、tamago kake gohan、フルーツナイトや酒蔵が来る日などのイベント、11周年。',
      confidence: 'medium', sources: [TB, R + 'B463703651/', R + 'B522031332/', R + 'B523792118/', R + 'B525175789/', R + 'B528636189/', R + 'B531889978/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff suggest sake to your taste; beginners welcome (Tabelog; 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-5-30 オックス周防町ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目5番30号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B522031332/'],
    price_note: 'Sashimi platter price from the Tabelog listing; no dish prices in the reviews.', last_checked: TODAY, items: [
      it('', '', 'Sashimi platter (book a day ahead)', 'from ¥1,500 per person', 'Fish', 'ask', 'no', 'Tabelog listing.', 'sashimi'),
      it('', '', 'Red shrimp marinated in sake', '', 'Fish', 'ask', 'no', 'January–May 2026.', 'akaebi'),
      it('', '', 'Grilled squid tentacles with liver mayo', '', 'Plates', 'ask', 'no', 'September 2026.', 'geso'),
    ] }, {
    cuisine: 'カウンター10席の旬の魚と日本酒のバー・東北の地酒が中心、飲み比べや好みに合わせた提案・毎日仕入れる魚をsashimiや料理で・sashimiの盛り合わせは一人1,500円から (前日までに予約)・赤海老の酒漬け・鰹と日本酒の組み合わせ・泉州の水なす・イカの足の肝マヨ焼き・和牛の sukiyaki 風・黒トリュフのクリームスープ・イカ墨の yakisoba の Okinawa soba・tamago kake gohan',
    neighborhood: '東心斎橋2-5-30 オックス周防町ビル 2F。心斎橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。旬の魚と小皿が中心で、ソースを使う料理 (肝マヨ、sukiyaki 風、クリームスープ) も。',
    vegan_detail: '要確認。魚が中心のメニュー。季節に泉州の水なすも。ヴィーガンの記載なし。',
    notes: '[日本酒バー・東心斎橋、旬の魚と東北の地酒の10席] 東心斎橋の2階にあるカウンター10席の落ち着いた日本酒バーで、2015年から、東北の地酒が中心。好みを伝えると何種類か出してくれ、ひとつの蔵の飲み比べをした人も、鰹と合わせた人も。料理はバーのつまみ以上で、毎日仕入れる魚、ふたりが挙げる赤海老の酒漬け、泉州の水なすのsashimi、イカの足の肝マヨ焼き、和牛の sukiyaki 風、イカ墨の yakisoba の Okinawa soba まで。sashimiの盛り合わせは一人1,500円から前日までに予約。日本酒初心者も歓迎 (食べログ)。最終入店23時、日・祝休み、チャージ300円。',
  });
}

// ================================================================ お結び屋TARITARI
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27147322/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://omusubiya-taritari.com/';
  const H = day(['18:00', '07:00']);
  put({
    id: 'osaka_omusubiya_taritari_souemoncho', name: 'お結び屋TARITARI (Omusubi Ya TARITARI)', category: 'OMNI',
    lat: 34.670193, lng: 135.505644, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice balls, sashimi and seafood bowls are the core, but the soy sauce and fried dishes are not described for gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A seafood-led menu; rice-ball fillings and miso soup stock are not described.',
    hours_raw: 'Tabelog: Mon, Tue, Fri–Sun and holidays 18:00–07:00 (food last order 06:00); Wednesday 18:00–23:00; closed Thursday; may change over New Year. A March 2026 review instead gives closed Wednesday and open to 23:00 on Thursday, so check midweek. Appetizer ¥330 (Tabelog). Cards, e-money and QR (including Alipay and WeChat Pay) accepted (Tabelog). Non-smoking (Tabelog). Children and strollers welcome; takeout (Tabelog). Opened 9 January 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: day(['18:00', '23:00']), 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Souemoncho 1-28, Mitsuji Galaxy Bldg No. 8, 1F — about 5 min from Kintetsu Nippombashi or Nagahoribashi Stn',
    cuisine: 'Rice-ball and seafood izakaya, open through the night (14 seats: 7 at the counter, 7 at tables) · fish the owner catches each week off Wakayama and Maizuru · sashimi platter; thick-cut sashimi · seafood rice bowls, including a "super" bowl · rice balls (rice from Niigata and Hiroshima) · extra-large fried horse mackerel · grilled yellowtail collar · marinated mackerel · miso soup of the day; pork miso soup · individual hot pots · tamago kake gohan · sake and shochu',
    website: OWN, gmaps: gm('お結び屋TARITARI'), menu_url: OWN + 'oshinagaki/',
    notes: "[Izakaya · rice balls and owner-caught fish until 7 am, Souemoncho] A small izakaya in Souemoncho that pairs rice balls with fish the owner catches each week off Wakayama and Maizuru, and stays open until 7 am on most nights, handy after the last train. Start with a sashimi platter (thick-cut, from the week's catch) or a seafood rice bowl, add an extra-large fried horse mackerel that one diner calls a must, a grilled yellowtail collar or marinated mackerel, then finish with rice balls made from Niigata and Hiroshima rice and the miso soup of the day. Individual hot pots run to the 06:00 food last order. Friendly staff, counter and table seats, and children are welcome. Closed Thursdays (Tabelog).",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Opened 9 January 2025 (Tabelog).', background: 'Rice-ball and seafood izakaya; the owner catches much of the fish (Tabelog; 2026 reviews).', philosophy: 'Fish caught weekly by the owner; rice from Niigata and Hiroshima; soy sauce from Oita (February 2026 review).', specialty: 'Sashimi; rice balls; fried horse mackerel.',
      anecdotes: [
        { text: '"The owner personally prepares fresh fish caught in Wakayama and Maizuru, Kyoto, right in the restaurant… The rice is sourced from Niigata and Hiroshima…" — February 2026.', source: R + 'B524389670/' },
        { text: '"Seeing the one-meter-long yellowtail that was sourced from the fishing port and caught by [the owner], I just couldn\'t resist ordering it!" — March 2026, seafood rice bowl and grilled yellowtail collar.', source: R + 'B526224665/' },
      ],
      japanese_sources_summary: '食べログ: お結び屋TARITARI、大阪市中央区宗右衛門町1-28 三ッ寺ギャラクシービル8号館 1F、近鉄日本橋駅・長堀橋駅から徒歩約5分、月・火・金〜日・祝18:00〜翌7:00 (料理L.O. 6:00)、水18:00〜23:00、木曜休み、2025年1月9日開店、お通し330円、カード・電子マネー・QR可、禁煙、14席 (カウンター7、テーブル7)、子ども・ベビーカー歓迎、テイクアウト、公式サイトあり。口コミ(2026年2〜10月): 店主が毎週和歌山や舞鶴で釣る魚、新潟と広島の米、大分の醤油、sashimiの盛り合わせ、厚切りのsashimi、海鮮丼、お結び、本日のみそ汁、豚汁、写真に「大きな特大サイズのアジフライはイチオシ」、ぶりのかま焼き、鯖のマリネ、一人用の鍋、tamago kake gohan、スタッフが親しみやすい、水曜休み・木曜は23時までという声も。',
      confidence: 'medium', sources: [TB, OWN, R + 'B523644261/', R + 'B524193616/', R + 'B524389670/', R + 'B526224665/', R + 'B527992175/', R + 'B537708500/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly counter; children welcome (Tabelog; 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町1-28 三ッ寺ギャラクシービル8号館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町1番28号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523644261/', R + 'B524389670/'],
    price_note: 'No prices in the reviews; about ¥3,000–4,000 per person (Tabelog, reviews) plus ¥330 appetizer.', last_checked: TODAY, items: [
      it('', '', 'Sashimi platter', '', 'Fish', 'ask', 'no', 'March–October 2026.', 'sashimi'),
      it('', '', 'Super seafood rice bowl', '', 'Rice', 'ask', 'no', 'March 2026.', 'kaisendon'),
      it('アジフライ', '', 'Extra-large fried horse mackerel', '', 'Fried', 'no', 'no', 'February 2026.', 'ajifurai'),
      it('', '', 'Rice balls', '', 'Rice', 'ask', 'ask', 'February–March 2026.', 'omusubi'),
    ] }, {
    cuisine: '夜通し開くお結びと海鮮の居酒屋 (14席: カウンター7、テーブル7)・店主が毎週和歌山や舞鶴で釣る魚・sashimiの盛り合わせ、厚切りのsashimi・海鮮丼 (特大の丼も)・お結び (新潟と広島の米)・特大のアジフライ・ぶりのかま焼き・鯖のマリネ・本日のみそ汁、豚汁・一人用の鍋・tamago kake gohan・日本酒、焼酎',
    neighborhood: '宗右衛門町1-28 三ッ寺ギャラクシービル8号館 1F。近鉄日本橋駅・長堀橋駅から徒歩約5分',
    gf_detail: '要確認。お結び、sashimi、海鮮丼が中心だが、醤油や揚げ物のグルテンについての記載なし。',
    vegan_detail: '要確認。魚が中心のメニュー。お結びの具やみそ汁のだしの説明なし。',
    notes: '[居酒屋・宗右衛門町、店主が釣った魚とお結び、朝7時まで] 宗右衛門町の小さな居酒屋で、店主が毎週和歌山や舞鶴で釣る魚とお結びを合わせ、ほとんどの日は朝7時まで。終電を逃しても安心。まずはその週の釣果の厚切りのsashimiの盛り合わせか海鮮丼、必食という声のある特大のアジフライ、ぶりのかま焼きや鯖のマリネを足し、しめは新潟と広島の米のお結びと本日のみそ汁。一人用の鍋は朝6時の料理ラストオーダーまで。スタッフは親しみやすく、カウンターとテーブル席、子ども連れも歓迎。木曜定休 (食べログ)。',
  });
}

save();
