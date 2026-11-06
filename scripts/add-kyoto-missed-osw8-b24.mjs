// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 24.
//   + 天丼専門店 Loosen up！ (nine-seat tendon counter north of Yasaka Shrine; core list)
//   + MALDA (Café MALDA, Babaghuri's café below a three-room inn; egg-, dairy- and sugar-free bakes, GF rice-flour muffins; core list)
//   + CHERIE MAISON DU BISCUIT (Kanae Kobayashi's biscuit-sandwich shop, takeaway; notable list)
//   + かもがわカフェ Kamogawa Cafe (second-floor house-roast coffee café near Kojinguchi; notable list)
//   Picked 2026-11-05 after batch 23. `queue.mjs kyoto-missed next core 200`: 天丼専門店 Loosen up！ 26037823, MALDA 26031025.
//   `next notable 200`: CHERIE MAISON DU BISCUIT 26032033, かもがわカフェ 26001895. Same-name check first, same brand or
//   operator only: CHERIE has three shops (MAISON DU BISCUIT, CHÉRIE CAFE, MAISON DU PARFAIT 26039962 — official site), a
//   small group, none in data; no other Loosen up!, MALDA or かもがわカフェ business in our crawls. None of the four is in
//   data/kyoto.json: grep by name and address (松原町290, 丸木材木町684, 福屋町733, 上生洲町229) found none —
//   上生洲町229-1 also holds kyoto_bonne_volonte, 15 m away.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-24');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 天丼専門店 Loosen up！
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037823/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:30'], ['17:30', '21:00']);
  put({
    id: 'kyoto_tendon_loosen_up', name: '天丼専門店 Loosen up！ (Ten-don Senmon Ten Loosen up!)', category: 'OMNI',
    lat: 35.006011, lng: 135.777844, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-battered tempura over rice with a sweet soy sauce, including nama-fu (wheat gluten) tempura (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tendon bowls with shrimp, scallop, eel and cheese tempura; tencha finished with dashi (2026 reviews).',
    hours_raw: 'Tuesday to Sunday and holidays 12:00–15:30 and 17:30–21:00 (food last order 20:30); closed Monday and irregularly — the shop says to check Google Maps, as it sometimes opens on Mondays (Tabelog). Reservations accepted (Tabelog); queues at opening (September 2026). 9 seats: 4 at a counter and 5 side by side facing the wall; non-smoking; free Wi-Fi (Tabelog). Cards, Suica and QR incl. Alipay and WeChat Pay (Tabelog). Allergy information available (Tabelog). Ground floor on Higashioji-dori near the Chion-in-mae bus stop, a couple of minutes north of Yasaka Shrine; 7 min walk from Higashiyama Stn (Tabelog; 2026 reviews).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashioji north of Yasaka Shrine — 7 min walk from Higashiyama Stn',
    cuisine: 'Tendon specialist, each bowl fried to order by a chef with a Japanese-cuisine background (September 2026) · "Hannari Ten-don" of 15 bite-sized tempura — a large shrimp plus vegetables, nama-fu, cheese, scallop — eaten with chopsticks and a spoon, ¥1,600; bowls from ¥1,200 (2026 reviews) · Hannari Ten-don with grilled eel (August–September 2026) · chilled tencha finish with myoga, mitsuba and wasabi, +¥300; oolong tea ¥300 as a set drink (August 2026) · sake (Tabelog) · about ¥1,200–2,500 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('天丼専門店 Loosen up 京都'), menu_url: null,
    notes: '[Tendon · Higashioji by Yasaka Shrine, fifteen bites in a bowl] A nine-seat café-like counter north of Yasaka Shrine frying tendon to order: the "Hannari" bowl of fifteen bite-sized tempura — a big shrimp, nama-fu, cheese, scallop, vegetables — is ¥1,600, with eel as an upgrade and a chilled tencha finish for ¥300 more. Bright, friendly staff; popular with visitors from abroad; queues at opening. Closed Monday (sometimes open — check Google Maps).',
    chef_bio: { chef_name: null, roles: ['Chef with a Japanese-cuisine background (unnamed)', 'Manager and staff'], origin: null,
      background: 'Reviewers in 2026 describe a tendon shop "crafted with care by a chef from a Japanese cuisine background" (September 2026), a bright manager and staff (August 2026), a Western-style name and interior, and a room where an August 2026 family were the only Japanese guests.',
      philosophy: null, specialty: 'Hannari Ten-don; chilled tencha.',
      anecdotes: [
        { text: 'A party of five — mother, daughter, sister, niece and the reviewer — found it at 2 pm in August 2026 when other places were closing, and asked for the air-conditioning to be turned up.', source: R + 'B534888538/' },
        { text: '"It was my first time trying eel tempura, and it was shockingly delicious." — September 2026.', source: R + 'B536499202/' },
        { text: '"The manager and staff were bright and provided wonderful service." — August 2026.', source: R + 'B535183742/' },
      ],
      japanese_sources_summary: '食べログ: 天丼・天ぷら・日本料理、東山区松原町290、祇園四条駅から徒歩8分、東山駅から徒歩7分、火〜日・祝 12:00〜15:30・17:30〜21:00 (料理L.O.20:30)、月曜と不定休 (月曜に営業することもあり、最新はGoogleマップで)、予約可、9席 (カウンター4、壁向きの5席)、禁煙、Wi-Fi、カード・Suica・QR (Alipay、WeChat Pay も) 可、アレルギー表示あり。口コミ (2026年2月〜9月、英語): 東大路通の知恩院前バス停の近く、八坂神社の北、はんなり天丼 (15種の一口天ぷら、大海老、生麩、チーズ、帆立) 1,600円、1,200円から、鰻の天ぷらも、冷やし天茶 +300円、和食出身の料理人、明るいスタッフ、開店前から行列、海外の客が多い。',
      confidence: 'medium', sources: [TB, R + 'B521976954/', R + 'B532658384/', R + 'B532865762/', R + 'B533812944/', R + 'B534620734/', R + 'B534888538/', R + 'B535183742/', R + 'B536282134/', R + 'B536499202/', R + 'B537283234/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; queue at opening; cards, Suica and QR (Alipay, WeChat Pay).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区松原町290',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006011, 135.777844); cross-checked: GSI 京都府京都市東山区松原町290番地 (lot) 64 m; kyoto_gion_tsuzaki is 70 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535183742/', R + 'B534620734/'],
    price_note: 'No menu read; prices from 2026 reviews.', last_checked: TODAY, items: [
      it('はんなり天丼', 'hannari tendon', 'Hannari Ten-don (15 bite-sized tempura)', '¥1,600', 'Tendon', 'no', 'no', 'February–September 2026.', 'hannari_tendon'),
      it('', '', 'Hannari Ten-don with eel', '', 'Tendon', 'no', 'no', 'August–September 2026.', 'unagi_tendon'),
      it('', '', 'Chilled tencha finish', '+¥300', 'Add-on', 'ask', 'no', 'August 2026.', 'hiyashi_tencha'),
    ] }, {
    cuisine: '注文ごとに揚げる天丼の専門店。和食出身の料理人 (2026年9月)・15種の一口天ぷら (大きな海老、野菜、生麩、チーズ、帆立など) をスプーンと箸で食べる「はんなり天丼」1,600円、1,200円からの天丼 (2026年の口コミ)・鰻をのせたはんなり天丼 (2026年8月〜9月)・茗荷、三つ葉、わさびで食べる冷やし天茶 +300円、セットのウーロン茶300円 (2026年8月)・日本酒 (食べログ)・1,200〜2,500円ほど (食べログ、2026年の口コミ)',
    neighborhood: '八坂神社の北、東大路通。東山駅から徒歩7分',
    gf_detail: 'グルテンフリーではない。小麦の衣の天ぷらに甘辛い醤油のたれ、生麩の天ぷらも (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。海老、帆立、鰻、チーズの天ぷらの天丼、締めの天茶にはだし (2026年の口コミ)。',
    notes: '[天丼・八坂神社の北の東大路、一杯に15の天ぷら] 八坂神社の北、カフェのような9席のカウンターで注文ごとに揚げる天丼。15種の一口天ぷら (大海老、生麩、チーズ、帆立、野菜) の「はんなり天丼」は1,600円、鰻ものせられ、冷やし天茶の締めは +300円。明るく気さくなスタッフ。海外の客に人気で、開店時は行列。月曜休み (営業することもあるので Google マップで確認を)。',
  });
}

// ================================================================ MALDA (Café MALDA)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26031025/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://www.maldakyoto.com/'; const MENU = 'https://www.maldakyoto.com/cafemalda';
  const H = day(['11:30', '19:00']);
  put({
    id: 'kyoto_cafe_malda', name: 'MALDA (Café MALDA)', category: 'OMNI',
    lat: 35.009876, lng: 135.763346, cuisine_type: 'cafe',
    gf_confidence: 'options', gf_label: 'Some GF options', gf_detail: 'GF options: the official menu labels two rice-flour muffins gluten-free (maple; matcha with adzuki), and the almond gelato is made with rice flour; the lunch curry comes with organic brown and black rice. Wheat muffins (maple, banana-cocoa-coconut) are baked in the same kitchen every day, so ask about cross-contact (official site, 2026; October 2026 review).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: all desserts are made with no sugar, egg or dairy (official menu), and the gelatos are dairy-free. The lunch curry is vegetarian but served with raita (yogurt), and the chai contains milk — the menu says "not vegan" (official site, 2026).',
    hours_raw: 'Wednesday to Sunday 11:30–19:00, lunch 11:30–14:00; closed Monday and Tuesday (official site). Tabelog gives 11:30–17:00. No reservations (Tabelog). 8 seats around a large communal table, counter and tables (Tabelog; December 2025). Cards (VISA, Master, JCB, AMEX, Diners) only for bills of ¥5,000 or more (Tabelog). English menu; takeaway muffins and cookies (Tabelog; September 2026). Ground floor of Hotel MALDA, a three-room inn, on Sakaimachi just south of Oike; 5 min walk from Karasuma Oike Stn exit 3 (official site; Tabelog). Opened July 2018 (official site).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi just south of Oike — 5 min walk from Karasuma Oike Stn',
    cuisine: 'Café of the Babaghuri brand below its three-room inn: muffins and cookies baked daily with no sugar, egg or dairy, hand-drip organic coffee, herb teas and gelato (official site) · lunch: MALDA curry of seasonal vegetables and lentil dal with organic brown and black rice, four sides and raita — vegetarian, the Jurgen Lehl company-canteen favourite (official site; September 2026); Taiwanese-style congee with a scallion pancake (October 2025; October 2026) · muffins: maple (with rum), rice-flour maple and rice-flour matcha (gluten-free), banana-cocoa-coconut, muffin of the day; e.g. lemon and Earl Grey rice-flour muffin ¥410–450 (official site; December 2025; June 2026) · roasted-almond or cardamom-coconut gelato with a cookie, caramel nuts (official site) · Babaghuri bean tea, lemongrass tea from the Ishigaki farm, chai ¥700 (milk), green-lemon and honey soda, natural wine (official site; June 2026)',
    website: WEB, gmaps: gm('Café MALDA 京都'), menu_url: MENU,
    notes: '[Café · Sakaimachi Oike, egg-, dairy- and sugar-free baking] The Babaghuri brand\'s café under its three-room inn: a calm, wooden room where everything sweet — muffins, cookies, gelato — is made without sugar, egg or dairy, with gluten-free rice-flour muffins. Lunch is a vegetarian lentil-and-vegetable curry on brown and black rice (raita on the side) or a Taiwanese congee; herb teas from Lehl\'s Ishigaki farm. Cards only from ¥5,000. Closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed)'], origin: null,
      background: 'Per the official site: MALDA opened in July 2018 on Anekoji as a café and inn embodying the life philosophy of Babaghuri; desserts are baked in-house every morning without sugar, egg or dairy, and the lunch curry is a favourite from Jurgen Lehl\'s company canteen; seasonal fruit and herbs come from Jurgen Lehl\'s farm on Ishigaki Island. The inn upstairs takes three groups a day.',
      philosophy: '"Simple, yet born over time from facing people, things and the environment honestly" — Babaghuri\'s philosophy of living (official site).', specialty: 'Egg- and dairy-free muffins; vegetarian curry; congee.',
      anecdotes: [
        { text: 'A September 2026 hotel guest received a vegan cookie as a welcome gift, went down to buy a tin, and found the tins sold out.', source: R + 'B533733110/' },
        { text: '"After exercising, I pay special attention to what I eat" — an October 2026 visitor chose the congee with ginger and mozuku while recovering from a cold, noting the vegan options and rice-flour gluten-free sweets.', source: R + 'B537185798/' },
        { text: 'A September 2026 diner liked best the beet and chickpea hummus on the vegetarian curry plate.', source: R + 'B538562435/' },
      ],
      japanese_sources_summary: '公式サイト: MALDA、2018年7月に姉小路通に開いたカフェと宿、ババグーリの生活哲学、カフェ・マルダは宿の1階、砂糖・卵・乳製品を使わないお菓子 (マフィン、クッキー) を毎朝手作り、ランチ (11:30〜14:00) は季節の野菜とレンズ豆のダールのマルダのカレー (オーガニック玄米と黒米、4種の付け合わせ、ライタ)、米粉のメープルマフィンと米粉の抹茶マフィン (グルテンフリー)、ローストアーモンドのジェラート (乳製品不使用)、ババグーリの豆茶、石垣島ヨーガンレール農園のレモングラス茶、チャイ (牛乳使用、ヴィーガンではない)、自然派ワイン、11:30〜19:00、月・火定休、京都市中京区堺町通御池下る丸木材木町684、宿は1日3組。食べログ: カフェ・洋菓子、烏丸御池駅3番出口から徒歩5分、水〜日、予約不可、8席、禁煙、カードは5,000円から、英語メニュー、テイクアウト、ベジタリアン対応、2018年7月23日オープン。口コミ (2025年10月〜2026年11月、英語): 台湾風のお粥とねぎ餅、レモンとアールグレイの米粉マフィン410〜450円、チャイ700円、ベジカレー、ビーツとひよこ豆のフムス、金継ぎの器、ヴィーガンのクッキー。',
      confidence: 'high', sources: [WEB, MENU, TB, R + 'B515302888/', R + 'B518339653/', R + 'B527381103/', R + 'B529552523/', R + 'B533340219/', R + 'B533733110/', R + 'B535910766/', R + 'B537185798/', R + 'B538562435/', R + 'B538693005/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog; official site is bilingual); cards only from ¥5,000.' },
    safety: { ...SAFETY0, confidence: 'medium',
      gf_cross_contamination: [
        { text: 'Gluten-free rice-flour muffins are baked in the same kitchen as wheat muffins (maple, banana-cocoa-coconut) every day; no separation is described — ask before ordering if you are coeliac.', source: MENU, verified: TODAY },
      ],
      vegan_cross_contact: [
        { text: 'All desserts are free of egg and dairy, but the kitchen also prepares raita (yogurt) and milk chai.', source: MENU, verified: TODAY },
      ],
      positives: [
        { text: 'The official menu labels the rice-flour maple and matcha muffins gluten-free and states that all desserts contain no sugar, egg or dairy.', source: MENU, verified: TODAY },
      ] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通御池下る丸木材木町684',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (breakfast-price notice for February 2026) and Tabelog; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.009876, 135.763346); cross-checked: GSI 京都府京都市中京区丸木材木町684番地 (lot) 52 m; kyoto_muromachi_wakuden is 33 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B518339653/', R + 'B529552523/'],
    price_note: 'Dishes from the official menu; prices from December 2025 and June 2026 reviews.', last_checked: TODAY, items: [
      it('マルダのカレー', 'Malda no karē', 'MALDA curry (vegetable and lentil dal, brown and black rice, four sides, raita)', '', 'Lunch', 'ask', 'ask', 'Vegetarian; raita is yogurt.', 'malda_curry'),
      it('米粉のメープルマフィン（グルテンフリー）', 'komeko no mēpuru mafin', 'Rice-flour maple muffin (gluten-free)', '', 'Muffins', 'gf', 'vegan', 'No sugar, egg or dairy (official menu).', 'rice_maple_muffin'),
      it('米粉の抹茶マフィン（グルテンフリー）', 'komeko no maccha mafin', 'Rice-flour matcha and adzuki muffin (gluten-free)', '', 'Muffins', 'gf', 'vegan', 'Official menu.', 'rice_matcha_muffin'),
      it('', '', 'Lemon and Earl Grey rice-flour muffin', '¥450', 'Muffins', 'ask', 'vegan', 'June 2026; ¥410 in December 2025.', 'lemon_muffin'),
      it('チャイティー', 'chai tī', 'Chai tea (with milk)', '¥700', 'Drinks', 'ask', 'no', 'June 2026; "includes milk, not vegan" (official menu).', 'chai'),
    ] }, {
    cuisine: 'ババグーリの3室の宿の1階のカフェ: 砂糖・卵・乳製品を使わず毎日焼くマフィンとクッキー、ハンドドリップの有機コーヒー、ハーブティー、ジェラート (公式サイト)・ランチ: 季節の野菜とレンズ豆のダールのマルダのカレー、オーガニック玄米と黒米、4種の付け合わせとライタ、ベジタリアンでヨーガンレール社の社食の人気メニュー (公式サイト、2026年9月)、台湾風のお粥とねぎ餅 (2025年10月、2026年10月)・マフィン: メープル (ラム酒入り)、米粉のメープルと米粉の抹茶 (グルテンフリー)、バナナとココアとココナッツ、本日のマフィン、例: レモンとアールグレイの米粉マフィン410〜450円 (公式サイト、2025年12月、2026年6月)・ローストアーモンドかカルダモンとココナッツのジェラートにクッキー、キャラメルナッツ (公式サイト)・ババグーリの豆茶、石垣島の農園のレモングラス茶、チャイ700円 (牛乳)、グリーンレモンと蜂蜜のソーダ、自然派ワイン (公式サイト、2026年6月)',
    neighborhood: '御池のすぐ南、堺町通。烏丸御池駅から徒歩5分',
    gf_detail: 'グルテンフリーの選択肢あり: 公式のメニューでは米粉のメープルマフィンと米粉の抹茶マフィンがグルテンフリー、アーモンドのジェラートも米粉を使う。ランチのカレーはオーガニック玄米と黒米。ただし小麦のマフィンも同じ厨房で毎日焼くので、混入は確認を (公式サイト、2026年、2026年10月の口コミ)。',
    vegan_detail: 'ヴィーガンの選択肢あり: お菓子はすべて砂糖・卵・乳製品を使わず (公式メニュー)、ジェラートも乳製品不使用。ランチのカレーはベジタリアンだがライタ (ヨーグルト) 付き、チャイは牛乳入りで公式メニューに「ヴィーガンではない」とある (公式サイト、2026年)。',
    notes: '[カフェ・堺町御池、砂糖・卵・乳製品なしのお菓子] ババグーリの3室の宿の1階のカフェ。木の落ち着いた空間で、マフィン、クッキー、ジェラートなど甘いものはすべて砂糖・卵・乳製品を使わず、米粉のグルテンフリーのマフィンもある。ランチは玄米と黒米のベジタリアンのレンズ豆と野菜のカレー (ライタ付き) か台湾風のお粥。石垣島の農園のハーブティーも。カードは5,000円から。月・火休み。',
  });
}

// ================================================================ CHERIE MAISON DU BISCUIT
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032033/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.kanaekobayashi.com/';
  const TF = day(['12:30', '16:00']); const SA = day(['12:30', '16:30']);
  put({
    id: 'kyoto_cherie_maison_du_biscuit', name: 'CHERIE MAISON DU BISCUIT', category: 'MOM_AND_POP',
    lat: 35.015622, lng: 135.762472, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: biscuits, biscuit sandwiches, financiers and cakes made with wheat flour and fermented butter (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: baked goods built on fermented butter, with cream-filled biscuit sandwiches and cheese cookies (2026 reviews).',
    hours_raw: 'Thursday and Friday 12:30–16:00; Saturday 12:30–16:30; closed Sunday to Wednesday; hours may change (Tabelog; official site). Takeaway only for now — the salon is closed; no reservation needed to buy, but biscuit sandwiches are limited per person (Tabelog). Queues at opening (June 2026). Biscuit sandwiches must be refrigerated and keep about a week; online sales sell out fast (July 2026). Cash only — no cards, e-money or QR (Tabelog). A white building on Takakura-dori north of Ebisugawa, south of the Imperial Palace; 4–5 min walk from Marutamachi Stn (Tabelog; official site; 2026 reviews). Opened 1 March 2019 (Tabelog).',
    hours: { 3: TF, 4: TF, 5: SA }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Takakura-dori north of Ebisugawa — 5 min walk from Marutamachi Stn',
    cuisine: 'Biscuit shop of the confectionery researcher Kanae Kobayashi, one of three CHÉRIE shops with CHÉRIE CAFE and CHÉRIE MAISON DU PARFAIT (official site) · the signature biscuit sandwich (refrigerated) and biscuits of fermented butter and premium flour — e.g. Biscuit Nature set of three, chocolate, Parmigiano cookies (2026 reviews) · financiers, lemon cake (2026 reviews) · tins illustrated by the artist Yuko Higuchi (May 2026) · about ¥1,000–4,000 a purchase (2026 reviews)',
    website: WEB, gmaps: gm('CHERIE MAISON DU BISCUIT 京都'), menu_url: null,
    notes: '[Biscuits · Takakura south of the Imperial Palace, a cult biscuit sandwich] A white-walled shop on Takakura-dori where confectionery researcher Kanae Kobayashi sells the famous biscuit sandwiches — crisp biscuits around cream, refrigerated, rationed per person and hard to buy online — plus fermented-butter biscuits, Parmigiano cookies and financiers, some in tins illustrated by Yuko Higuchi. Takeaway only for now; open Thursday to Saturday afternoons; queue at opening. Cash only.',
    chef_bio: { chef_name: '小林かなえ (Kanae Kobayashi)', roles: ['Owner, confectionery researcher'], origin: null,
      background: 'Per the official site: the shops of 小林かなえ, with books, media appearances and NHK sweets recipes listed; CHÉRIE MAISON DU BISCUIT sells sweets to take away, CHÉRIE CAFE serves soft serve, and CHÉRIE MAISON DU PARFAIT is a reservation-only parfait shop in a townhouse; the company recruits staff. A May 2026 reviewer calls the shop well known among dessert lovers in Kyoto. Per Tabelog: opened 1 March 2019.',
      philosophy: null, specialty: 'Biscuit sandwich; Parmigiano cookies.',
      anecdotes: [
        { text: 'A June 2026 visitor who had once left with only biscuits — not realising the famous sandwich was refrigerated — came back, queued before 12:30, and bought both.', source: R + 'B524542437/' },
        { text: 'An October 2026 buyer of Parmigiano cookies found the balance of cheese and sweetness "simply exquisite" and could not stop eating.', source: R + 'B537927458/' },
        { text: '"As a lemon cake lover, I found it a bit lacking in lemon flavor, but as a baked sweet, it was truly delicious." — August 2026.', source: R + 'B531399384/' },
      ],
      japanese_sources_summary: '公式サイト: CHÉRIE MAISON DU BISCUIT、小林かなえ、シェリーメゾンドビスキュイ (お菓子テイクアウト) 12:30〜16:00 (土16:30)、日・月・火・水定休、京都市中京区高倉通夷川上る福屋町733-2 (高倉通りの白いビル)、シェリーカフェ (ソフトクリーム、東洞院竹屋町)、シェリーメゾンドパフェ (完全予約制のパフェ店、竹屋町通の町家)、オンラインショップ、書籍、NHK のお菓子レシピ、スタッフ募集。食べログ: カフェ・洋菓子、木・金 12:30〜16:00、土 12:30〜16:30、予約不要で購入可、ビスキュイサンドは個数制限、現在サロンは休業しお菓子の販売のみ、7席、現金のみ、2019年3月1日オープン。口コミ (2026年5月〜11月、英語): 丸太町駅から徒歩4〜5分、御所の南、ビスキュイサンド (要冷蔵、日持ち約1週間、オンラインはすぐ完売)、発酵バター、パルミジャーノのクッキー、フィナンシェ、レモンケーキ、Yuko Higuchi のイラストの缶、開店前から行列。',
      confidence: 'medium', sources: [WEB, TB, R + 'B524542437/', R + 'B528548940/', R + 'B530627708/', R + 'B531399384/', R + 'B531769907/', R + 'B531882178/', R + 'B535268579/', R + 'B536546197/', R + 'B537927458/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway only; biscuit sandwiches rationed and refrigerated; cash only; open Thu–Sat afternoons.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区高倉通り夷川上る福屋町733-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.015622, 135.762472); cross-checked: GSI 京都府京都市中京区福屋町733番地 (lot) 10 m; ChIJR9XSUa8JAWAR1b9iGn1o0Wc (Fune) is 20 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB, R + 'B528548940/'],
    price_note: 'No prices read; purchases about ¥1,000–4,000 in 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Biscuit sandwich (refrigerated)', '', 'Sweets', 'no', 'no', 'Limited per person.', 'biscuit_sand'),
      it('', '', 'Biscuit Nature (assorted set of 3)', '', 'Biscuits', 'no', 'no', 'May 2026.', 'biscuit_nature'),
      it('', '', 'Parmigiano cookies', '', 'Biscuits', 'no', 'no', 'October 2026.', 'parmigiano'),
    ] }, {
    cuisine: '菓子研究家 小林かなえ のビスキュイの店で、シェリーカフェ、シェリーメゾンドパフェと並ぶ3店のひとつ (公式サイト)・看板のビスキュイサンド (要冷蔵) と、発酵バターと上質な小麦粉のビスキュイ (例: Biscuit Nature 3枚セット、ショコラ、パルミジャーノのクッキー) (2026年の口コミ)・フィナンシェ、レモンケーキ (2026年の口コミ)・Yuko Higuchi のイラストの缶 (2026年5月)・購入は1,000〜4,000円ほど (2026年の口コミ)',
    neighborhood: '夷川の北の高倉通。丸太町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。小麦粉と発酵バターのビスキュイ、ビスキュイサンド、フィナンシェ、ケーキ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。発酵バターの焼き菓子、クリームのビスキュイサンド、チーズのクッキー (2026年の口コミ)。',
    notes: '[ビスキュイ・御所の南の高倉通、評判のビスキュイサンド] 高倉通の白い建物で、菓子研究家の小林かなえが評判のビスキュイサンドを売る: クリームをはさんだ要冷蔵のサンドは1人あたりの数に限りがあり、オンラインでも手に入りにくい。発酵バターのビスキュイ、パルミジャーノのクッキー、フィナンシェも、Yuko Higuchi のイラストの缶入りのものも。今は持ち帰りのみ、木〜土の午後のみ営業、開店時は行列。現金のみ。',
  });
}

// ================================================================ かもがわカフェ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001895/'; const R = TB + 'dtlrvwlst/';
  const MO = day(['10:30', '20:00']); const WE = day(['10:30', '17:00']); const SS = day(['10:30', '21:30']);
  put({
    id: 'kyoto_kamogawa_cafe', name: 'かもがわカフェ (Kamogawa Cafe)', category: 'OMNI',
    lat: 35.020171, lng: 135.769789, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee with scones, toast, cakes such as apple crumble, lasagna and a cheesy hamburg-steak gratin; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and a soy-milk chai appear, but the scones come with cream and the food uses cheese, butter and meat; no vegan information (2025–2026 reviews).',
    hours_raw: 'Monday, Tuesday and Friday 10:30–20:00; Wednesday 10:30–17:00; Saturday and Sunday 10:30–21:30; closed Thursday and the fourth Wednesday; hours may change (Tabelog). No reservations (Tabelog). Tabelog notes that lunch stopped in March 2024, with drinks and light meals continuing, though reviewers had a noon lunch and a hamburg gratin in 2025–2026. Cash only — no cards, e-money or QR (Tabelog). 30 seats on the second floor with counter and sofas; non-smoking (Tabelog; August 2025). Takeaway coffee beans (August 2025). On a residential street a block off the main road near Kojinguchi; 3 min from the Kojinguchi bus stop, 10 min north of Jingu-Marutamachi Stn (Tabelog).',
    hours: { 0: MO, 1: MO, 2: WE, 4: MO, 5: SS, 6: SS }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kojinguchi, a block west of the Kamo — 3 min walk from the Kojinguchi bus stop',
    cuisine: 'Second-floor café roasting and selling its own coffee (August 2025) · Kamogawa blend, a deep roast with a hint of sweetness; lightly roasted coffees brewed cup by cup (2025–2026 reviews) · scone set with fresh cream, toast, smoothie set with yogurt, fruit and toast (2025–2026 reviews) · cakes such as apple crumble (May 2026) · onion gratin with cheesy hamburg steak; lasagna after 15:00 (June 2026) · soy-milk chai, apple juice, wine with sets (2025–2026 reviews) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('かもがわカフェ 荒神口'), menu_url: null,
    notes: '[Café · Kojinguchi, house-roast coffee upstairs] A high-ceilinged second-floor café on a quiet street near Kojinguchi and the Kamo, with colored-glass windows you open yourself, rakugo posters, books and magazines — a student-quarter coffee house roasting its own beans. The Kamogawa blend, scones with cream, an apple crumble, a smoothie-and-toast set; lunch is limited. Open late at weekends. Cash only. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed)'], origin: null,
      background: 'Reviewers in 2025–2026 describe a long-running café that roasts and sells its own beans, with high ceilings, colored-glass windows and posters for solo rakugo shows; a May 2026 regular says it was once known as "Sarasa Kamogawa" and thinks its operation may have changed (not confirmed elsewhere).',
      philosophy: null, specialty: 'Kamogawa blend coffee; scone set.',
      anecdotes: [
        { text: 'An August 2025 visitor came on the night of the Gozan Okuribi and was impressed by the low-acid, aromatic Kamogawa blend.', source: R + 'B512147930/' },
        { text: 'A November 2025 guest, back after eleven years, arrived before the noon lunch and had the scone set with fresh cream.', source: R + 'B49371511/' },
        { text: '"I would be happy if there were more choices on the lunch menu." — June 2026.', source: R + 'B530465877/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、上京区西三本木通荒神口下ル上生洲町229-1、京阪丸太町駅から北へ徒歩10分、荒神口バス停から徒歩3分、大通りから一本入った住宅街、月・火・金 10:30〜20:00、水 10:30〜17:00、土・日 10:30〜21:30、木曜と第4水曜休み、予約不可、2024年3月からランチの提供をやめた (ドリンクと軽食は継続)、現金のみ、30席、禁煙、テイクアウト。口コミ (2025年5月〜2026年9月、英語): 2階、自家焙煎の豆も販売、かもがわブレンド、スコーンのセット、トースト、スムージーのセット、りんごのクランブルケーキ、オニオングラタンとチーズのハンバーグ、15時以降のラザニア、豆乳のチャイ、落語のポスター、色ガラスの窓、以前は「Sarasa Kamogawa」と呼ばれていたとの声 (未確認)。',
      confidence: 'medium', sources: [TB, R + 'B215746929/', R + 'B444914668/', R + 'B49371511/', R + 'B506245557/', R + 'B512147930/', R + 'B518264559/', R + 'B527605877/', R + 'B530465877/', R + 'B532022402/', R + 'B536704046/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Second floor; cash only; limited food; open late at weekends.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区西三本木通荒神口下ル上生洲町229-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.020171, 135.769789); cross-checked: GSI 京都府京都市上京区上生洲町229番地 (lot) 41 m; kyoto_bonne_volonte (same lot, 229-1) is 15 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B49371511/', R + 'B530465877/'],
    price_note: 'No menu prices read; about ¥1,000–2,000 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Kamogawa blend coffee', '', 'Coffee', 'ask', 'ask', '', 'kamogawa_blend'),
      it('', '', 'Scone set with fresh cream', '', 'Sets', 'no', 'no', 'November 2025.', 'scone_set'),
      it('', '', 'Apple crumble cake', '', 'Cakes', 'no', 'no', 'May 2026.', 'apple_crumble'),
    ] }, {
    cuisine: '自家焙煎の豆も売る2階のカフェ (2025年8月)・深煎りでほのかに甘いかもがわブレンド、一杯ずつ淹れる浅煎り (2025〜2026年の口コミ)・生クリーム付きのスコーンのセット、トースト、ヨーグルト・フルーツ・トーストのスムージーのセット (2025〜2026年の口コミ)・りんごのクランブルなどのケーキ (2026年5月)・オニオングラタンとチーズのハンバーグ、15時以降のラザニア (2026年6月)・豆乳のチャイ、りんごジュース、セットにワインも (2025〜2026年の口コミ)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '荒神口、鴨川の一本西。荒神口バス停から徒歩3分',
    gf_detail: '要確認。コーヒーにスコーン、トースト、りんごのクランブルなどのケーキ、ラザニア、チーズのハンバーグのグラタン。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。ブラックコーヒーや豆乳のチャイはあるが、スコーンには生クリーム、料理にはチーズ、バター、肉を使う。ヴィーガンの情報はない (2025〜2026年の口コミ)。',
    notes: '[カフェ・荒神口、2階の自家焙煎] 荒神口と鴨川の近く、静かな通りの天井の高い2階のカフェ。自分で開ける色ガラスの窓、落語のポスター、本や雑誌があり、学生街の喫茶店のよう。自家焙煎で、かもがわブレンド、生クリームのスコーン、りんごのクランブル、スムージーとトーストのセット。食事は少なめ。週末は夜遅くまで。現金のみ。木曜休み。',
  });
}

save();
