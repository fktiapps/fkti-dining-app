// Ginza Station half-mile sweep (805 m), batch 64 — next four from the non-Japanese filter (all OMNI).
//   + オステリア ダ アダ (GICROS 4F; standing bar + 16-seat dining room; miki-international; Shinjuku sister)
//   + LaVASARA 銀座本店 (Marronnier Gate Ginza 1 11F; Tabelog ticks vegetarian options)
//   + ラ・セヌ (Mercure Tokyo Hibiya B1F hotel restaurant-café; Tabelog ticks allergy info + vegetarian)
//   + エル・チャテオ 銀座店 (Spanish wine bar since 1996, sister of VIDRIO; paella championships)
// Fetched for b65 (2026 reviews): パパミラノ 国際フォーラム 13010970, マイアミ・ヴィッラ 有楽町 13055172, DONA 有楽町 13046017, oasis 13051665.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ オステリア ダ アダ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13240885/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '15:30'], ['17:30', '23:00']);
  put({
    id: 'tokyo_osteria_da_ada_ginza6', name: 'オステリア ダ アダ (osteria da Ada)', category: 'OMNI',
    lat: 35.67161, lng: 139.761982,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seafood carpaccio, a seafood platter and white-wine clams sit beside the pastas the place is known for; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: seafood, prosciutto and meat dishes; a vegetable appetizer plate is the only plant-based dish described.',
    hours_raw: 'Daily 11:30–15:30 (L.O. 14:30) and 17:30–23:00 (L.O. 21:30); lunch is standing counter only; dinner has the standing counter (no reservations) plus a 16-seat dining room (Tabelog). Private room minimum spend ¥75,000.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, GICROS 4F — near Ginza Stn',
    cuisine: 'Italian osteria with a standing bar · glasses of wine ¥300–900, counter appetizers ¥300–450 · seafood platter, lemon pasta', cuisine_type: 'other',
    website: 'https://www.miki-international.co.jp/ada/', gmaps: gm('osteria da Ada 銀座 GICROS'), menu_url: null,
    notes: "[Italian · standing bar and dining room] A lively fourth-floor osteria that opens straight off the lift into a standing bar, with a calmer 16-seat dining room at the back, open since 2019. The standing counter takes no bookings and is lunch's only option. Wine is cheap for Ginza: glasses from ¥300 to ¥900, generously poured. Counter appetizers are ¥300–450 each, and pastas about ¥1,500. 2026 diners rate the bonito and sweet-shrimp carpaccio, the seafood platter, clams in white wine, prosciutto, a colourful vegetable appetizer, lemon pasta and tiramisu. It's full by 7 p.m. on Saturdays. About ¥4,000–8,000 a head.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 November 2019 (Tabelog); a sister shop in Shinjuku (2026 review)', background: 'Company-run (miki-international.co.jp).', philosophy: null, specialty: 'Seafood; pasta.',
      anecdotes: [
        { text: '"The wine is generously poured at JPY 330… The appetizers… priced around JPY 300 to 450 each." — October 2026.', source: R + 'B537601791/' },
        { text: '"The bonito and sweet shrimp carpaccio were particularly outstanding… What stood out the most was the pasta." — October 2026.', source: R + 'B537644125/' },
      ],
      japanese_sources_summary: '食べログ: オステリア ダ アダ、銀座6-4-3 GICROS 4F、60席(テーブルは5卓16席、ほかは立ち飲み)、毎日11:30〜15:30・17:30〜23:00、ランチは立ち飲みのみ、立ち飲みカウンターは予約不可、個室は最低75,000円、2019年11月16日開店、運営 miki-international.co.jp。2026年10月の口コミ: グラスワイン300〜900円、カウンターの前菜300〜450円、パスタ1,500円、カツオと甘海老のカルパッチョ、魚介の盛り合わせ、あさりの白ワイン蒸し、生ハム、彩り野菜の前菜、レモンのパスタ、ティラミス、土曜19時は満席、新宿にも店。',
      confidence: 'medium', sources: [TB, R + 'B537601791/', R + 'B537644125/', R + 'B538009194/', R + 'B537814400/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing bar is walk-in only; book the dining room.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-4-3 GICROS 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目4番3号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537601791/', R + 'B537644125/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('グラスワイン', '', 'Glass of wine', '¥300〜900', 'Drinks', 'gf', 'ask', 'October 2026.', 'glass_wine'),
      it('カウンターの前菜', '', 'Counter appetizers (each)', '¥300〜450', 'Appetizers', 'ask', 'ask', 'October 2026.', 'counter_appetizers'),
      it('レモンのパスタ', 'remon no pasuta', 'Lemon pasta', '¥1,500', 'Pasta', 'no', 'ask', 'About ¥1,500, October 2026.', 'lemon_pasta'),
      it('魚介の盛り合わせ', '', 'Seafood platter', '', 'Appetizers', 'ask', 'no', '', 'seafood_platter'),
    ] }, {
    cuisine: '立ち飲みのあるイタリアンのオステリア・グラスワイン300〜900円、カウンターの前菜300〜450円・魚介の盛り合わせ、レモンのパスタ',
    neighborhood: '銀座六丁目、GICROS 4F。銀座駅の近く',
    gf_detail: '要確認。カルパッチョ、魚介の盛り合わせ、あさりの白ワイン蒸しなどのほか、評判のパスタも。グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。魚介、生ハム、肉料理。植物性の料理として書かれているのは彩り野菜の前菜だけです。',
    notes: '[イタリアン・立ち飲みとダイニング] エレベーターを降りるとすぐにぎやかな立ち飲みスペース、奥に落ち着いた16席のダイニングがある4階のオステリアで、2019年開店。立ち飲みカウンターは予約不可で、ランチは立ち飲みのみ。ワインは銀座にしては安く、グラス300〜900円でたっぷり注いでくれます。カウンターの前菜は1品300〜450円、パスタは1,500円ほど。2026年の客は、カツオと甘海老のカルパッチョ、魚介の盛り合わせ、あさりの白ワイン蒸し、生ハム、彩り野菜の前菜、レモンのパスタ、ティラミスを推しています。土曜は19時には満席。1人4,000〜8,000円ほど。',
  });
}

// ================================================================ LaVASARA 銀座本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13308972/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '23:00']);
  put({
    id: 'tokyo_lavasara_ginza2', name: 'LaVASARA 銀座本店', category: 'OMNI',
    lat: 35.67438, lng: 139.765406,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pizza and pasta lead the menu, alongside burrata and prosciutto salad and grilled vegetables; no source mentions gluten-free handling.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks vegetarian options and grilled vegetables are on the menu, but no vegan dish is named.',
    hours_raw: 'Daily 11:00–23:00 (L.O. 22:00); closed 1 January (Tabelog). 10% service charge after 17:00. QR-code ordering.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 2-chōme, Marronnier Gate Ginza 1 11F — near Ginza-itchōme Stn',
    cuisine: 'Casual Italian café and grill with a view · pizza, pasta, burrata · lunch sets with free soft-drink refills · family friendly', cuisine_type: 'other',
    website: null, gmaps: gm('LaVASARA 銀座本店 マロニエゲート銀座1'), menu_url: null,
    notes: "[Italian · café and grill on the 11th floor] A bright 63-seat Italian café and grill on the 11th floor of Marronnier Gate Ginza 1, open since May 2025, with open views, families welcome and many overseas customers. You order by QR code. Lunch sets with pizza or pasta (such as squid ink) include free soft-drink refills. À la carte, diners had burrata and prosciutto salad, grilled vegetables, Bolognese, Margherita pizza and a chocolate terrine, served one at a time like a course. Friendly service, but reviewers call the flavours ordinary and à la carte pricey. 10% service after 5 p.m.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 9 May 2025 (Tabelog)', background: 'No source names the operator.', philosophy: 'Warm but not over-formal service (Tabelog listing).', specialty: 'Pizza and pasta.',
      anecdotes: [
        { text: '"We had a salad with burrata cheese and prosciutto, grilled vegetables, and a Bolognese dish. I appreciated that the dishes were served one by one, like a course meal." — October 2026.', source: R + 'B537131462/' },
        { text: '"I appreciated the unlimited soft drinks; it\'s a nice option for when you want to relax and chat." — October 2026, lunch set.', source: R + 'B537337607/' },
      ],
      japanese_sources_summary: '食べログ: LaVASARA 銀座本店、銀座2-2-14 マロニエゲート銀座1 11F、63席、毎日11:00〜23:00、元日休、17時以降サービス料10%、2025年5月9日開店、野菜にこだわり・ベジタリアンメニューあり。店の紹介: 眺めのよい開放的な空間、子ども連れ歓迎、LaVASARA café & Grill。2026年10月の口コミ: ブッラータと生ハムのサラダ、野菜のグリル、ボロネーゼ、ショコラのテリーヌ、イカ墨のパスタのランチセット(ソフトドリンク飲み放題)、ピザとパスタのランチ、QRコードで注文、マルゲリータ、外国人客が多い、味つけと価格は好みが分かれるとの声。',
      confidence: 'low', sources: [TB, R + 'B537131462/', R + 'B537337607/', R + 'B537946252/', R + 'B538020944/'] },
    cultural_comfort: { level: 'english', note: 'Many overseas guests; QR ordering; families welcome.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座2-2-14 マロニエゲート銀座1 11F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座二丁目2番14号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537131462/', R + 'B537337607/'],
    price_note: 'No prices captured; reviewers spend ¥2,000–6,000.', last_checked: TODAY, items: [
      it('パスタのランチセット', '', 'Pasta lunch set with salad and free soft-drink refills', '', 'Lunch', 'no', 'ask', 'October 2026.', 'pasta_lunch'),
      it('ブッラータと生ハムのサラダ', '', 'Burrata and prosciutto salad', '', 'Salads', 'ask', 'no', '', 'burrata_salad'),
      it('野菜のグリル', 'yasai no guriru', 'Grilled vegetables', '', 'Sides', 'ask', 'ask', '', 'grilled_veg'),
      it('マルゲリータ', 'marugeriita', 'Margherita pizza', '', 'Pizza', 'no', 'no', '', 'margherita'),
    ] }, {
    cuisine: '眺めのよい気軽なイタリアンのカフェ&グリル・ピザ、パスタ、ブッラータ・ソフトドリンク飲み放題のランチセット・子ども連れ歓迎',
    neighborhood: '銀座二丁目、マロニエゲート銀座1 11F。銀座一丁目駅の近く',
    gf_detail: '要確認。ピザとパスタが中心で、ブッラータと生ハムのサラダや野菜のグリルもありますが、グルテンフリーの対応は書かれていません。',
    vegan_detail: '要確認。食べログではベジタリアンメニューありとされ、野菜のグリルもありますが、ヴィーガンの料理は書かれていません。',
    notes: '[イタリアン・11階のカフェ&グリル] マロニエゲート銀座1の11階、開放的な眺めの明るい63席のイタリアンのカフェ&グリルで、2025年5月開店。子ども連れ歓迎で、外国人客も多い店です。注文はQRコード。ランチはピザやパスタ(イカ墨など)のセットで、ソフトドリンクは飲み放題。アラカルトでは、ブッラータと生ハムのサラダ、野菜のグリル、ボロネーゼ、マルゲリータ、ショコラのテリーヌなどを、コースのように1品ずつ出してくれます。接客は好評ですが、味はふつう、アラカルトは割高という声も。17時以降はサービス料10%。',
  });
}

// ================================================================ ラ・セヌ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13292558/'; const R = TB + 'dtlrvwlst/';
  const d = day(['07:00', '22:30']);
  put({
    id: 'tokyo_la_scene_mercure_hibiya', name: 'ラ・セヌ (La Scene)', category: 'OMNI',
    lat: 35.66953, lng: 139.757989,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog lists allergy information as available, but lunch comes with unlimited bread and the café is known for fruit tarts; no gluten-free option is named — ask the hotel staff.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks vegetarian options and allergy information, but no vegan dish is named.',
    hours_raw: 'Daily: breakfast 7:00–11:00, lunch 11:30–13:30 L.O., tea 13:30–17:30, dinner 17:30–21:30 (L.O. 20:30), bar 11:30–22:30 (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Uchisaiwaichō, Mercure Tokyo Hibiya B1F — underground from Shimbashi Stn exit 7, 5 min',
    cuisine: 'Hotel French restaurant-café · weekend prix-fixe lunch with unlimited bread · seasonal fruit tarts and tea · breakfast to bar', cuisine_type: 'french',
    website: 'https://www.mercure-tokyo-hibiya.com/', gmaps: gm('ラ・セヌ メルキュール東京日比谷'), menu_url: null,
    notes: "[French · hotel lounge at Mercure Tokyo Hibiya] The all-day restaurant, café and bar of the Mercure Tokyo Hibiya, open since December 2023. Its 77 seats are spread over sofas, tables, a private room and a semi-private room in a basement that still gets natural light, and you can reach it underground from Shimbashi without getting rained on. Surprisingly quiet for Shimbashi. The weekend lunch set includes a drink, a choice of four appetizers and a fish, meat or pasta main, with unlimited bread. Tea-time regulars come for the seasonal fruit tart, with a crisp crust, and flavoured teas such as mango-strawberry. Truffle fries are on the bar menu. Staff were kind even to a diner in sweatpants. Tabelog lists allergy information and vegetarian options.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 19 December 2023 (Tabelog)', background: 'Hotel restaurant (Mercure Tokyo Hibiya).', philosophy: null, specialty: 'Seasonal fruit tart; weekend lunch.',
      anecdotes: [
        { text: '"For the appetizers, I could choose from four options, and for the main dish, I selected one from fish, meat, or pasta… the unlimited bread helped make it a satisfying meal." — August 2026.', source: R + 'B534654525/' },
        { text: '"I was in my natural state with no makeup and dressed in what looked like sweatpants, but the staff treated me with kindness and courtesy." — September 2026.', source: R + 'B535968775/' },
      ],
      japanese_sources_summary: '食べログ: ラ・セヌ(La Scene)、千代田区内幸町1-5-2 メルキュール東京日比谷B1F、77席(個室・半個室、ソファ席など)、朝食7:00〜11:00、ランチ11:30〜L.O.13:30、ティータイム13:30〜17:30、ディナー17:30〜21:30、バー11:30〜22:30、無休、2023年12月19日開店、野菜・魚にこだわり、朝食あり、アレルギー表示あり、ベジタリアンメニューあり。2026年の口コミ: 週末限定のランチセット(1ドリンク、前菜4種から選択、魚・肉・パスタから選ぶメイン、パンおかわり自由)、季節のタルト、マンゴーストロベリーティー、トリュフフライ、新橋駅7番出口から地下通路で濡れずに行ける、自然光の入る明るい空間、ホテルらしい接客。',
      confidence: 'medium', sources: [TB, R + 'B534654525/', R + 'B535968775/', R + 'B535227461/', R + 'B537665681/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant; open from breakfast.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Tabelog lists "allergy information available".', source: TB }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0011 東京都千代田区内幸町1-5-2 メルキュール東京日比谷 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区内幸町一丁目5番 (lot) 44m; 594 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534654525/', R + 'B535227461/'],
    price_note: 'No prices captured; reviewers spend ¥1,000–2,000 at tea and ¥4,000–10,000 at lunch.', last_checked: TODAY, items: [
      it('週末限定ランチセット', '', 'Weekend lunch set: drink, choice of 4 appetizers, fish/meat/pasta main, unlimited bread', '', 'Lunch', 'ask', 'ask', 'August 2026.', 'weekend_lunch'),
      it('季節のタルトのケーキセット', '', 'Seasonal fruit tart cake set with tea', '', 'Tea', 'no', 'no', 'September 2026.', 'tart_set'),
      it('トリュフフライ', 'toryufu furai', 'Truffle fries', '', 'Bar', 'ask', 'ask', '', 'truffle_fries'),
    ] }, {
    cuisine: 'ホテルのフレンチのレストラン&カフェ・パンおかわり自由の週末プリフィクスランチ・季節のフルーツタルトと紅茶・朝食からバーまで',
    neighborhood: '内幸町、メルキュール東京日比谷B1F。新橋駅7番出口から地下通路で徒歩5分',
    gf_detail: '要確認。食べログではアレルギー表示ありですが、ランチはパンおかわり自由で、カフェはフルーツタルトが人気。グルテンフリーの料理は書かれていないので、ホテルのスタッフに確認を。',
    vegan_detail: '要確認。食べログではベジタリアンメニューとアレルギー表示ありとされますが、ヴィーガンの料理は書かれていません。',
    notes: '[フレンチ・メルキュール東京日比谷のラウンジ] メルキュール東京日比谷の、朝から夜まで営業するレストラン・カフェ・バーで、2023年12月開店。自然光の入る地下に、ソファ席やテーブル、個室と半個室で77席。新橋駅から地下通路で雨に濡れずに行けて、新橋とは思えない静かさ。週末限定のランチセットは1ドリンク付きで、前菜4種から1つ、魚・肉・パスタから選ぶメイン、パンはおかわり自由。ティータイムは、サクサクの生地の季節のフルーツタルトとマンゴーストロベリーなどのフレーバーティーがお目当て。バーにはトリュフフライも。スウェット姿の客にも丁寧に接してくれたそう。食べログにはアレルギー表示とベジタリアンメニューありと記載。',
  });
}

// ================================================================ エル・チャテオ 銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002268/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '15:00'], ['17:00', '23:00']), we = day(['11:00', '15:00'], ['16:00', '23:00']);
  put({
    id: 'tokyo_el_chateo_ginza3', name: 'エル・チャテオ 銀座店 (EL CHATEO)', category: 'OMNI',
    lat: 35.673061, lng: 139.764774,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Paella is rice-based, but the squid-ink paella comes with mayonnaise sauce and tapas are mixed; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: seafood, squid-ink and duck paellas, steak, tapas.',
    hours_raw: 'Mon–Fri 11:00–15:00 (L.O. 14:00) and 17:00–23:00 (L.O. 22:00); Sat, Sun and holidays 11:00–15:00 and 16:00–23:00 (Tabelog). ¥550 dinner charge (not on courses).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, Ginza T8 Bldg 1F–2F — 1 min from Ginza Stn',
    cuisine: 'Spanish wine bar since 1996 · award-winning paellas (sister of VIDRIO) · lunch paella + tapas sets · courses from ¥6,600 with free-flow', cuisine_type: 'other',
    website: 'https://juraku.com/vidriog/elchateo/index.html', gmaps: gm('エル・チャテオ 銀座店 銀座3-2-12'), menu_url: null,
    notes: "[Spanish · paella wine bar by Ginza Station] A busy 78-seat Spanish wine bar over two floors, a minute from Ginza Station, open since 1996. It carries on the home cooking of the VIDRIO (びいどろ) group, whose paella has twice won at the Spanish world championship. Tapas start at ¥500. Lunch sets pair a paella, such as seafood, squid ink with mayonnaise sauce, or duck breast and truffle mushroom, with an assorted tapas plate and a drink. A ¥3,850 lunch course adds steak. Paella takes time, so book or expect a short wait. Dinner courses of eight dishes with two-hour free-flow start at ¥6,600; ¥550 dinner charge otherwise.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 3 April 1996 (Tabelog)', background: 'Group-run (juraku.com, sister of VIDRIO).', philosophy: null, specialty: 'Paella.',
      anecdotes: [
        { text: '"The squid ink paella had a perfect balance of squid ink flavor and mayonnaise sauce, with an exquisite cooking texture." — October 2026, lunch.', source: R + 'B537073856/' },
        { text: '"Lunch course + 2 Maou Beers, JPY 3,850 + JPY 1,980… The appetizers were plentiful, and the steak was delicious." — October 2026.', source: R + 'B537600208/' },
      ],
      japanese_sources_summary: '食べログ: エル・チャテオ 銀座店、銀座3-2-12 銀座T8ビル1〜2F、銀座駅から徒歩1分、78席(カウンター・ソファ・テーブル)、平日11:00〜15:00・17:00〜23:00、土日祝11:00〜15:00・16:00〜23:00、ディナーチャージ550円(コース・パーティープランは除く)、1996年4月3日開店、公式サイト juraku.com。店の紹介: 「びいどろ」の伝統的なスペイン家庭料理、スペインの世界大会で2度優勝のパエリア、500円からの料理、魚介のパエリアを含む8品と2時間飲み放題のコース6,600円から。2026年10月の口コミ: 鴨胸肉とトリュフマッシュルームのパエリア、ランチはパエリア・タパス盛り合わせ・ドリンクのセット、魚介とイカ墨(マヨネーズソース)のパエリア、ステーキ付きのランチコース3,850円、予約で満席、10分ほど待つことも。',
      confidence: 'medium', sources: [TB, R + 'B537073856/', R + 'B537600208/', R + 'B530819834/', R + 'B537954660/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead for lunch; paella takes time.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-2-12 銀座T8ビル 1〜2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目2番12号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537600208/', R + 'B537073856/'],
    price_note: 'Course prices from Tabelog; lunch course from an October 2026 review.', last_checked: TODAY, items: [
      it('ランチ パエリアとタパスのセット', '', 'Lunch: paella, assorted tapas and a drink', '', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_set'),
      it('ランチコース', 'ranchi koosu', 'Lunch course with steak', '¥3,850', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_course'),
      it('8品と2時間飲み放題のコース', '', 'Eight-dish course with seafood paella and 2-hour free-flow', '¥6,600〜', 'Courses', 'ask', 'no', 'Tabelog.', 'course_freeflow'),
      it('イカ墨のパエリア', 'ikasumi no paeria', 'Squid-ink paella with mayonnaise sauce', '', 'Paella', 'ask', 'no', '', 'squid_ink'),
    ] }, {
    cuisine: '1996年からのスペインのワインバル・受賞歴のあるパエリア(びいどろの系列)・パエリアとタパスのランチ・飲み放題付きコース6,600円から',
    neighborhood: '銀座三丁目、銀座T8ビル1〜2F。銀座駅から徒歩1分',
    gf_detail: '要確認。パエリアは米ですが、イカ墨のパエリアにはマヨネーズソース、タパスもいろいろで、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。魚介、イカ墨、鴨のパエリア、ステーキ、タパス。',
    notes: '[スペイン料理・銀座駅前のパエリアのワインバル] 銀座駅から1分、2フロア78席のにぎやかなスペインのワインバルで、1996年開店。スペインの世界大会で2度優勝したパエリアの「びいどろ」グループの家庭料理を受け継いでいます。タパスは500円から。ランチは魚介、マヨネーズソースのイカ墨、鴨胸肉とトリュフマッシュルームなどのパエリアに、タパスの盛り合わせとドリンクのセット。ステーキ付きのランチコースは3,850円。パエリアは時間がかかるので、予約するか少し待つつもりで。夜は8品と2時間飲み放題のコースが6,600円から、コース以外はディナーチャージ550円。',
  });
}

save();
