// Ginza Station half-mile sweep (805 m), batch 70 — four of the last non-Japanese filter entries (all OMNI).
//   + The Kitchen Salvatore Cuomo GINZA (Daiwa Roynet Hotel Ginza PREMIER 2F; wood-fired pizza buffet)
//   + GOOD CHEESE GOOD PIZZA 日比谷 (Midtown Hibiya 2F; in-house cheese workshop; Tabelog: allergy info)
//   + Sophie at EDITION (Tokyo EDITION Ginza 14F hotel Italian)
//   + BAGUS GOLKA (Ginza 8-chōme private-room karaoke dining, open to 5 a.m.)
// Skipped: GINZA SAPPHIRE LOUNGE 13314302 — members-only (2026 reviews), added to the filter skip set.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ The Kitchen Salvatore Cuomo GINZA
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13189254/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['07:00', '10:30'], ['11:30', '15:30'], ['17:30', '23:00']), we = day(['07:00', '10:30'], ['11:30', '16:00'], ['17:30', '23:00']);
  put({
    id: 'tokyo_kitchen_salvatore_cuomo_ginza1', name: 'The Kitchen Salvatore Cuomo GINZA (ザ キッチン サルヴァトーレ クオモ 銀座)', category: 'OMNI',
    lat: 35.673397, lng: 139.769192,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the lunch buffet centres on wood-fired Neapolitan pizza; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: pizza buffet and dessert buffet; no vegan option is mentioned.',
    hours_raw: 'Breakfast 7:00–10:30; lunch Mon–Fri 11:30–15:30, weekends 11:30–16:00; dinner 17:30–23:00 (L.O. 22:00) (Tabelog).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 1-chōme, Daiwa Roynet Hotel Ginza PREMIER 2F — near Ginza-itchōme and Takarachō Stns',
    cuisine: 'Salvatore Cuomo group Italian · wood-fired Neapolitan pizza · weekday lunch buffet ¥2,900, weekend about ¥5,000 · dessert buffet', cuisine_type: 'other',
    website: 'http://www.kitchensalvatore.jp/ginza/index.html', gmaps: gm('The Kitchen Salvatore Cuomo GINZA'), menu_url: null,
    notes: "[Italian · Salvatore Cuomo's hotel pizza kitchen] A 96-seat Salvatore Cuomo restaurant on the second floor of the Daiwa Roynet Hotel Ginza PREMIER, open since 2015. It has an open kitchen around a big wood-fired oven, a terrace and private rooms. Lunch is a pizza-centred buffet: ¥2,900 for 90 minutes on weekdays in October 2026, about ¥5,000 on holidays, when preschool children eat free and families and groups of women fill it. Peroni is on draft. Diners love the Neapolitan pizza hot from the oven but found the weekend buffet limited and the pizza weaker once cold, so à la carte may suit better. Open from breakfast.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 December 2015 (Tabelog)', background: 'Produced by chef Salvatore Cuomo (Tabelog listing); group-run.', philosophy: null, specialty: 'Wood-fired Neapolitan pizza.',
      anecdotes: [
        { text: '"I took advantage of the weekday-only \'Autumn Lunch Buffet Plan (JPY 2,900)\' for a 90-minute slot… authentic Neapolitan pizza baked in a wood-fired oven." — October 2026.', source: R + 'B537071942/' },
        { text: '"Children under school age eat for free… Although the all-you-can-eat option was JPY 5000, I was disappointed by the limited menu." — October 2026, holiday lunch.', source: R + 'B537365782/' },
      ],
      japanese_sources_summary: '食べログ: The Kitchen Salvatore Cuomo GINZA(ザ キッチン サルヴァトーレ クオモ 銀座)、銀座1-13-15 ダイワロイネットホテル銀座PREMIER 2F、96席(個室8・テラス12・カウンター6)、朝7:00〜10:30、昼(平日)11:30〜15:30・(土日祝)11:30〜16:00、夜17:30〜23:00、2015年12月1日開店。店の紹介: サルヴァトーレ・クオモのプロデュース、薪窯のナポリピッツァ、オープンキッチン、デザートビュッフェ。2026年10月の口コミ: 平日限定の秋のランチビュッフェ2,900円(90分)、ペローニの生、祝日のビュッフェ約5,000円・未就学児無料、ピザ中心でメニューが少ない、冷めると味が落ちる。',
      confidence: 'medium', sources: [TB, R + 'B537071942/', R + 'B537365782/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Family friendly; buffet with time slots.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座1-13-15 ダイワロイネットホテル銀座PREMIER 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座一丁目13番15号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537071942/', R + 'B537365782/'],
    price_note: 'Buffet prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('平日ランチビュッフェ(90分)', '', 'Weekday lunch buffet, 90 minutes (pizza-centred)', '¥2,900', 'Buffet', 'no', 'no', 'October 2026.', 'weekday_buffet'),
      it('休日ランチビュッフェ', '', 'Weekend/holiday lunch buffet (preschoolers free)', '¥5,000', 'Buffet', 'no', 'no', 'About ¥5,000, October 2026.', 'weekend_buffet'),
    ] }, {
    cuisine: 'サルヴァトーレ・クオモのイタリアン・薪窯のナポリピッツァ・平日ランチビュッフェ2,900円、休日は約5,000円・デザートビュッフェ',
    neighborhood: '銀座一丁目、ダイワロイネットホテル銀座PREMIER 2F。銀座一丁目駅・宝町駅の近く',
    gf_detail: '実際上グルテンフリーではありません。ランチビュッフェは薪窯のナポリピッツァが中心で、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。ピザとデザートのビュッフェで、ヴィーガンの選択肢は書かれていません。',
    notes: '[イタリアン・サルヴァトーレ・クオモのホテルのピザキッチン] ダイワロイネットホテル銀座PREMIERの2階、2015年開店の96席のサルヴァトーレ・クオモの店で、大きな薪窯を囲むオープンキッチン、テラス、個室も。ランチはピザ中心のビュッフェで、2026年10月は平日90分2,900円、祝日は約5,000円で、未就学児は無料なので家族連れや女性グループでにぎわいます。ペローニの生も。窯から出たばかりのナポリピッツァは好評ですが、休日のビュッフェは品数が少なく、冷めると味が落ちるのでアラカルトの方がいいという声も。朝食営業もあり。',
  });
}

// ================================================================ GOOD CHEESE GOOD PIZZA 日比谷
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13218441/'; const R = TB + 'dtlrvwlst/';
  const mw = day(['11:00', '15:30'], ['17:00', '22:30']), tf = day(['11:00', '14:30'], ['17:00', '22:30']), we = day(['11:00', '22:30']);
  put({
    id: 'tokyo_good_cheese_good_pizza_hibiya', name: 'GOOD CHEESE GOOD PIZZA 日比谷', category: 'OMNI',
    lat: 35.674, lng: 139.759067,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a pizza restaurant; Tabelog lists allergy information as available — ask for it.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: built around house-made mozzarella, ricotta and burrata.',
    hours_raw: 'Mon–Wed 11:00–15:30 and 17:00–22:30; Thu–Fri 11:00–14:30 and 17:00–22:30; Sat, Sun and holidays 11:00–22:30 (L.O. 21:30) (Tabelog).',
    hours: { 0: mw, 1: mw, 2: mw, 3: tf, 4: tf, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tokyo Midtown Hibiya 2F — 2 min from Hibiya Stn',
    cuisine: 'Pizza and cheese · in-house cheese workshop (fresh mozzarella, ricotta, burrata) · pizza and cheese platters · 40-seat terrace', cuisine_type: 'other',
    website: 'https://goodcheesegoodpizza.com/', gmaps: gm('GOOD CHEESE GOOD PIZZA 東京ミッドタウン日比谷'), menu_url: null,
    notes: "[Pizza · cheese made in-house at Midtown Hibiya] A 106-seat pizza restaurant on the second floor of Tokyo Midtown Hibiya, open since 2018. It has 10 counter seats and a 40-seat terrace, and makes its own mozzarella, ricotta and burrata from fresh milk. October 2026 diners ordered the pizza and cheese assorted platter (gooey cheese, hot pizza, a range of cheese textures), a carpaccio starter and a garlicky tomato pizza. Staff are friendly and attentive; drinks push the bill up. Tabelog lists allergy information. About ¥4,000–8,000 at dinner.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 March 2018 (Tabelog)', background: 'No source names the operator.', philosophy: null, specialty: 'House-made cheese; pizza.',
      anecdotes: [
        { text: '"I ordered the assorted platter of pizza and cheese, inspired by the restaurant\'s name… The cheese platter also offered a variety of textures and flavors." — October 2026.', source: R + 'B537998875/' },
        { text: '"The carpaccio appetizer was particularly delicious… The pizza had a strong garlic flavor with a rich tomato base." — October 2026.', source: R + 'B537992006/' },
      ],
      japanese_sources_summary: '食べログ: GOOD CHEESE GOOD PIZZA 日比谷、千代田区有楽町1-1-2 東京ミッドタウン日比谷2F、日比谷駅から徒歩2分、106席(店内56・カウンター10・テラス40)、月〜水11:00〜15:30・17:00〜22:30、木金11:00〜14:30・17:00〜22:30、土日祝11:00〜22:30、2018年3月29日開店、アレルギー表示あり。店の紹介: 搾りたての牛乳でチーズを作る工房、モッツァレラ・リコッタ・ブッラータ、季節の前菜とメイン、テラス。2026年10月の口コミ: ピザとチーズの盛り合わせ、カルパッチョ、ニンニクの効いたトマトのピザ、スタッフが親切、ドリンク込みでやや高め。',
      confidence: 'medium', sources: [TB, R + 'B537998875/', R + 'B537992006/', R + 'B538012882/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Terrace seating; friendly staff.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Tabelog lists "allergy information available".', source: TB }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町1-1-2 東京ミッドタウン日比谷 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町一丁目1番 (lot) 45m (large complex); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537998875/', R + 'B537992006/'],
    price_note: 'No prices captured; reviewers spend ¥4,000–8,000.', last_checked: TODAY, items: [
      it('ピザとチーズの盛り合わせ', '', 'Pizza and house-made cheese assorted platter', '', 'Platters', 'no', 'no', 'October 2026.', 'pizza_cheese_platter'),
      it('カルパッチョ', 'karupatcho', 'Carpaccio starter', '', 'Starters', 'ask', 'no', 'October 2026.', 'carpaccio'),
    ] }, {
    cuisine: 'ピザとチーズ・店内のチーズ工房(モッツァレラ、リコッタ、ブッラータ)・ピザとチーズの盛り合わせ・テラス40席',
    neighborhood: '東京ミッドタウン日比谷2F。日比谷駅から徒歩2分',
    gf_detail: '実際上グルテンフリーではありません。ピザの店です。食べログにはアレルギー表示ありとあるので確認を。',
    vegan_detail: 'ヴィーガンではありません。自家製のモッツァレラ、リコッタ、ブッラータが中心です。',
    notes: '[ピザ・ミッドタウン日比谷で自家製チーズ] 東京ミッドタウン日比谷2階、2018年開店の106席のピザの店で、カウンター10席とテラス40席。搾りたての牛乳でモッツァレラ、リコッタ、ブッラータを店内で作っています。2026年10月の客は、とろけるチーズと熱々のピザ、さまざまな食感のチーズのピザとチーズの盛り合わせ、カルパッチョ、ニンニクの効いたトマトのピザなどを。スタッフは親切で気が利きますが、ドリンクで会計が上がりがち。食べログにはアレルギー表示ありと記載。夜は4,000〜8,000円ほど。',
  });
}

// ================================================================ Sophie at EDITION
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13292467/'; const R = TB + 'dtlrvwlst/';
  const d = day(['07:00', '10:30'], ['12:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'tokyo_sophie_at_edition_ginza2', name: 'Sophie at EDITION (ソフィ アット エディション)', category: 'OMNI',
    lat: 35.672663, lng: 139.76757,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Prix-fixe courses with homemade pasta and a veal Milanese, though starters such as yellowtail and octopus salad and mains such as roast cod exist; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: veal, oxtail, beef cheek, fish; no vegan option is mentioned.',
    hours_raw: 'Daily breakfast 7:00–10:30, lunch 12:00–15:00 (L.O. 14:30), dinner 17:30–22:00 (L.O. 20:30) (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tokyo EDITION Ginza 14F, Ginza 2-chōme — 280 m from Ginza Stn',
    cuisine: 'Hotel Italian trattoria · homemade pasta, veal Milanese · 3–4-course lunch, 5-course dinner · Tokyo Tower view', cuisine_type: 'other',
    website: 'https://www.sophietokyo.com/jp/', gmaps: gm('Sophie at EDITION 東京エディション銀座'), menu_url: null,
    notes: "[Italian · Tokyo EDITION Ginza 14th floor] The bright urban trattoria of the Tokyo EDITION Ginza, with 114 seats plus private rooms and a bar, and a view of Tokyo Tower. Daily homemade pasta is the signature. 2026 prix-fixe lunches (three or four courses with two or three choices each) included octopus salad, pea potage, marinated yellowtail, three-tomato spaghetti, snow-crab capellini, veal Milanese, roast cod, crème caramel, cassata semifreddo and Mont Blanc. A five-course dinner featured oxtail casoncelli in sage butter and braised beef cheek with mash. Families with small children come on holidays; drinks are pricey. Birthday plates with a Polaroid.",
    chef_bio: { chef_name: null, roles: [], origin: 'Tokyo EDITION Ginza (opening date not given)', background: 'Hotel restaurant.', philosophy: 'Classic Italian in an urban trattoria style (Tabelog listing).', specialty: 'Homemade pasta.',
      anecdotes: [
        { text: '"The pasta dishes included spaghetti with three types of tomatoes and capellini with snow crab. The main dish was veal Milanese cutlet." — September 2026, lunch.', source: R + 'B479873337/' },
        { text: '"Oxtail Casoncelli with Sage Butter Sauce… The chewy pasta was filled with rich, deeply flavored oxtail." — September 2026, dinner.', source: R + 'B535861833/' },
      ],
      japanese_sources_summary: '食べログ: Sophie at EDITION(ソフィ アット エディション)、銀座2-8-13 東京エディション銀座14F、銀座駅から280m、114席(個室・バーカウンター6席含め136席)、毎日 朝7:00〜10:30・昼12:00〜15:00・夜17:30〜22:00。店の紹介: アーバン・トラットリアのクラシックなイタリアン、毎日手打ちの自家製パスタ、日本とイタリアの食材。2026年の口コミ: 4品と3品のランチ(タコのサラダ、グリーンピースのポタージュ、3種のトマトのスパゲッティ、ズワイガニのカッペリーニ、仔牛のミラノ風カツレツ、クレームキャラメル、カッサータのセミフレッド)、ブリのマリネ、真鱈のロースト、モンブラン、5品のディナー(オックステールのカソンセッリのセージバター、牛ほほ肉の煮込み)、東京タワーが見える、誕生日プレートとポラロイド、休日は子連れ、ドリンクは高め。',
      confidence: 'medium', sources: [TB, R + 'B479873337/', R + 'B535861833/', R + 'B480472226/', R + 'B535739561/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel trattoria; families welcome on holidays.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座2-8-13 東京エディション銀座 14F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座二丁目8番13号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B479873337/', R + 'B535861833/'],
    price_note: 'No prices captured; reviewers spend ¥6,000–8,000 at lunch and ¥8,000–15,000 at dinner.', last_checked: TODAY, items: [
      it('ランチ 4品コース', '', 'Four-course prix-fixe lunch: appetizer, pasta, main, dessert', '', 'Lunch', 'ask', 'no', '2026.', 'lunch4'),
      it('オックステールのカソンセッリ セージバター', '', 'Oxtail casoncelli with sage butter', '', 'Pasta', 'no', 'no', 'September 2026.', 'casoncelli'),
      it('仔牛のミラノ風カツレツ', '', 'Veal Milanese cutlet', '', 'Mains', 'no', 'no', 'September 2026.', 'milanese'),
    ] }, {
    cuisine: 'ホテルのイタリアン・トラットリア・自家製パスタ、仔牛のミラノ風カツレツ・3〜4品のランチ、5品のディナー・東京タワーの眺め',
    neighborhood: '東京エディション銀座14F、銀座二丁目。銀座駅から280m',
    gf_detail: '要確認。自家製パスタや仔牛のミラノ風カツレツのプリフィクスですが、ブリのマリネやタコのサラダ、真鱈のローストもあります。グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。仔牛、オックステール、牛ほほ肉、魚で、ヴィーガンの選択肢は書かれていません。',
    notes: '[イタリアン・東京エディション銀座の14階] 東京エディション銀座の明るいアーバン・トラットリアで、114席に個室とバー、窓から東京タワー。名物は毎日手打ちする自家製パスタ。2026年のプリフィクスランチ(3〜4品、各2〜3種から選択)は、タコのサラダ、グリーンピースのポタージュ、ブリのマリネ、3種のトマトのスパゲッティ、ズワイガニのカッペリーニ、仔牛のミラノ風カツレツ、真鱈のロースト、クレームキャラメル、カッサータのセミフレッド、モンブランなど。5品のディナーには、セージバターのオックステールのカソンセッリや牛ほほ肉の煮込みとマッシュポテト。休日は小さな子ども連れも多く、ドリンクは高め。誕生日プレートとポラロイド撮影も。',
  });
}

// ================================================================ BAGUS GOLKA
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13050861/'; const R = TB + 'dtlrvwlst/';
  const d = day(['18:00', '05:00']);
  put({
    id: 'tokyo_bagus_golka_ginza8', name: 'BAGUS GOLKA (バグース ゴルカ)', category: 'OMNI',
    lat: 35.66813, lng: 139.762561,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Italian-style courses include pizza and a ponzu jelly; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: shrimp, bonito carpaccio, jamón serrano and ricotta.',
    hours_raw: 'Daily 18:00–05:00; New Year hours may change (Tabelog). 10% service charge after 22:00 on some plans. Drinks ordered by phone from the room.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 8-chōme, Ginza Southern Bldg 4F–6F — 4 min from JR Shimbashi Ginza exit or Ginza Stn A3',
    cuisine: 'Private-room karaoke dining · Italian-style courses · 3-hour free-flow plans about ¥6,000–8,000 · open to 5 a.m.', cuisine_type: 'other',
    website: 'http://www.bagus-99.com', gmaps: gm('BAGUS GOLKA 銀座サザンビル'), menu_url: null,
    notes: "[Karaoke dining · private rooms in Ginza 8-chōme] A 133-seat private-room venue over three floors of the Ginza Southern Building, with high-end interiors and karaoke in every room, open from 6 p.m. to 5 a.m. Three-hour plans with free-flow drinks and unlimited singing run about ¥6,000, or about ¥8,000 with a full course if you arrive by 7:30 p.m. Prices rise late at night. An August 2026 course ran a chestnut mousse and shrimp amuse-bouche, seared-bonito carpaccio with truffle-ponzu jelly, and persimmon, jamón serrano and ricotta salad. Pizza earns praise too. Sparkling wine comes by the bottle on free-flow; drinks are ordered by phone.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 September 2014 (Tabelog)', background: 'Company-run (bagus-99.com).', philosophy: null, specialty: 'Private-room parties with karaoke.',
      anecdotes: [
        { text: '"If you can enter by 7:30 PM, you can enjoy a solid three-hour course meal for about JPY 8,000 per person, along with unlimited singing and drinks." — August 2026.', source: R + 'B535485132/' },
        { text: '"The food portions were just right, and the pizza was incredibly delicious. The all-you-can-drink option for JPY 6000 for three hours is very reasonable." — July 2026.', source: R + 'B531754974/' },
      ],
      japanese_sources_summary: '食べログ: BAGUS GOLKA(バグース ゴルカ)、銀座8-10-17 銀座サザンビル4〜6F、JR新橋駅銀座口・銀座駅A3出口から徒歩4分、133席(完全個室)、毎日18:00〜翌5:00、プランにより22時以降サービス料10%、2014年9月1日開店、公式サイト bagus-99.com。2026年の口コミ: 全室カラオケ付きの個室、3時間飲み放題約6,000円、19時半までの入店で3時間のコース・歌い放題・飲み放題約8,000円、深夜は高め、栗のムースと海老のアミューズ、カツオのたたきのカルパッチョとトリュフポン酢のジュレ、柿とハモンセラーノとリコッタのサラダ、ピザ、ドリンクは電話で注文。',
      confidence: 'medium', sources: [TB, R + 'B535485132/', R + 'B531754974/', R + 'B519837340/', R + 'B492810196/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Karaoke private rooms; best for groups.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [{ text: 'Truffle-ponzu jelly on the bonito carpaccio.', source: R + 'B535485132/' }], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-10-17 銀座サザンビル 4〜6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目10番17号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535485132/', R + 'B531754974/'],
    price_note: 'Plan prices from July–August 2026 reviews.', last_checked: TODAY, items: [
      it('3時間飲み放題プラン', '', '3-hour free-flow plan with karaoke', '¥6,000', 'Plans', 'ask', 'no', 'July 2026.', 'plan_6000'),
      it('3時間コース(歌い放題・飲み放題)', '', '3-hour course with unlimited karaoke and drinks (enter by 19:30)', '¥8,000', 'Plans', 'ask', 'no', 'About ¥8,000, August 2026.', 'course_8000'),
    ] }, {
    cuisine: '個室カラオケのダイニング・イタリアン風のコース・3時間飲み放題のプラン約6,000〜8,000円・朝5時まで',
    neighborhood: '銀座八丁目、銀座サザンビル4〜6F。JR新橋駅銀座口・銀座駅A3出口から徒歩4分',
    gf_detail: '要確認。イタリアン風のコースにピザやポン酢のジュレもあり、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。海老、カツオのカルパッチョ、ハモンセラーノ、リコッタ。',
    notes: '[カラオケダイニング・銀座八丁目の個室] 銀座サザンビルの3フロアに133席、上質な内装で全室カラオケ付きの個室の店で、夕方6時から朝5時まで。飲み放題・歌い放題の3時間プランは約6,000円、19時半までに入れば3時間のコース付きで約8,000円、深夜は高め。2026年8月のコースは、栗のムースと海老のアミューズ、トリュフポン酢のジュレをのせたカツオのたたきのカルパッチョ、柿とハモンセラーノとリコッタのサラダなど。ピザも好評。飲み放題のスパークリングはボトルで出てきて、ドリンクの注文は電話で。',
  });
}

save();
