// Ginza Station half-mile sweep (805 m), batch 56 — next four from the non-Japanese filter re-run (75 left; all OMNI).
//   + GINZA FUJIMARU (8-seat French teppan counter since 2019; Chef Fujimaru; ownership not stated)
//   + Caveau SenTir par Shinya Tasaki (sommelier Shinya Tasaki's company restaurant, opened March 2026; chef Ryota Tochigi)
//   + THE WINEBASE銀座 (18-seat wine bar featuring a different country each month; open to 03:00 on weekdays)
//   + エッセンス テラスダイニングバー (Higashi-Ginza terrace bistro-bar with a pasta lunch; company website)
// Skipped (no 2026 review): GINZA novantanove 13297746 (last Dec 2025), Wine Bar Bâtonnage 13197638 (Dec 2025),
// LOUNGE 13015067 (2018). Fetched for next time: Dining Bar GINZA 1986 13284632 (May 2026 review).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ GINZA FUJIMARU
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13244697/'; const R = TB + 'dtlrvwlst/';
  const d = day(['12:00', '15:00'], ['18:00', '22:30']);
  put({
    id: 'tokyo_ginza_fujimaru_ginza4', name: 'GINZA FUJIMARU', category: 'OMNI',
    lat: 35.670738, lng: 139.767632,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A set French teppan course built on butter and reduction sauces; recent courses included homemade bread, fried churros, beef en croûte and curry with butter rice. No source mentions a gluten-free version.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a set course of Wagyu, foie gras, abalone, lobster, eel and sea urchin.',
    hours_raw: 'Daily 12:00–15:00 (last entry 13:00) and 18:00–22:30 (last entry 20:00), reservation only; closed Wednesdays and the 1st and 3rd Tuesdays (Tabelog). 10% service charge. Cards accepted; no e-money or QR.',
    hours: { 0: d, 1: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme, Ginza AZA Bldg 6F — 2 min from Higashi-Ginza Stn exit A2',
    cuisine: 'French teppan omakase at an 8-seat counter · sauce-focused courses changing every two months · ¥15,000–30,000', cuisine_type: 'french',
    website: 'https://ginzafujimaru.com/', gmaps: gm('GINZA FUJIMARU 銀座4-10-1 銀座AZAビル'), menu_url: null,
    notes: "[French teppan · 8 seats] A cave-like, glamorous room with just eight counter seats around a large teppan, open since October 2019. Chef Fujimaru cooks French courses in front of you with the emphasis on sauces, and the menu changes about every two months. A September 2026 course ran Saga-beef prosciutto on churros with summer truffle, charcoal-grilled eel with foie gras and black-truffle sauce, corn mousse with sea urchin and consommé jelly, butter-basted abalone with saffron sauce, and a black-Wagyu tenderloin. Every course ends with a house European-style curry and butter rice (the frozen curry sauce is sold to take home at ¥1,500), dessert and cold-brew coffee from house-roasted beans. Regulars praise the even quality and the menu printed with their name. Reservation only; 10% service charge.",
    chef_bio: { chef_name: 'Chef Fujimaru (surname only, per Tabelog)', roles: ['chef'], origin: 'Opened 10 October 2019 (Tabelog)', background: 'Ownership not stated; Tabelog corporate-member listing.', philosophy: 'French cuisine centred on its sauces (Tabelog listing).', specialty: 'Sauces; house curry with butter rice.',
      anecdotes: [
        { text: '"I come here every time the menu changes, which is about every two months… every dish here is truly delicious." — August 2026, 8th visit.', source: R + 'B534839860/' },
        { text: '"Takeout available for curry sauce (frozen) at JPY 1500 per serving." — September 2026.', source: R + 'B509615062/' },
      ],
      japanese_sources_summary: '食べログ: GINZA FUJIMARU(フレンチ鉄板)、銀座4-10-1 銀座AZAビル6F、東銀座駅A2出口から徒歩2分、カウンター8席、昼12:00〜15:00(最終入店13:00)・夜18:00〜22:30(最終入店20:00)、完全予約制、第1・第3火曜と水曜休、サービス料10%、カード可・電子マネーとQR不可、2019年10月10日開店、7周年。店の紹介: ソースにこだわるシェフ Fujimaru のフレンチ。2026年の口コミ: 約2か月ごとにメニューが替わる、佐賀牛の生ハムとチュロスに夏トリュフ、鰻とフォアグラの黒トリュフソース、とうもろこしのムースと雲丹、鮑のサフランソース、黒毛和牛ヒレ、締めの自家製欧風カレーとバターライス(冷凍カレーソースの持ち帰り1,500円)、自家焙煎の水出しコーヒー、名前入りのメニュー。',
      confidence: 'medium', sources: [TB, R + 'B509615062/', R + 'B534839860/', R + 'B466640839/', R + 'B535890621/'] },
    cultural_comfort: { level: 'english', note: 'English menu; sommelier on hand; reservation only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-10-1 銀座AZAビル 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (7th-anniversary plans, October 2026); reviews dated March–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目10番1号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B509615062/'],
    price_note: 'Course prices vary by plan; reviewers spend ¥15,000–30,000. Curry-sauce takeout price from a September 2026 review.', last_checked: TODAY, items: [
      it('おまかせコース', 'omakase koosu', 'Chef’s French teppan course (changes about every two months)', '', 'Courses', 'ask', 'no', '', 'omakase'),
      it('自家製欧風カレーソース(冷凍・持ち帰り)', '', 'House European-style curry sauce, frozen, to take home', '¥1,500', 'Takeout', 'ask', 'no', '2026.', 'curry_takeout'),
    ] }, {
    cuisine: 'カウンター8席のフレンチ鉄板おまかせ・約2か月ごとに替わるソース重視のコース・15,000〜30,000円',
    neighborhood: '銀座四丁目、銀座AZAビル6F。東銀座駅A2出口から徒歩2分',
    gf_detail: '要確認。バターとソースを軸にしたフレンチ鉄板のコースで、最近のコースには自家製パン、揚げたチュロス、和牛のパイ包み、バターライスのカレーなど。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。和牛、フォアグラ、鮑、オマール、鰻、雲丹のコースです。',
    notes: '[フレンチ鉄板・8席] 大きな鉄板を囲むカウンター8席だけの、洞窟のような華やかな空間で、2019年10月開店。シェフの Fujimaru が目の前でソースを主役にしたフレンチのコースを仕上げ、メニューは約2か月ごとに替わります。2026年9月のコースは、佐賀牛の生ハムとチュロスに夏トリュフ、炭火で焼いた鰻とフォアグラの黒トリュフソース、とうもろこしのムースと雲丹のコンソメジュレ、バターで焼き上げた鮑のサフランソース、黒毛和牛ヒレなど。締めはいつも自家製の欧風カレーとバターライス(冷凍のカレーソースは1,500円で持ち帰り可)、デザート、自家焙煎の水出しコーヒー。常連は品質のぶれのなさと、名前入りのメニューを称えます。完全予約制、サービス料10%。',
  });
}

// ================================================================ Caveau SenTir par Shinya Tasaki
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13321195/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'tokyo_caveau_sentir_ginza6', name: 'Caveau SenTir par Shinya Tasaki', category: 'OMNI',
    lat: 35.667792, lng: 139.765531,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal French pairing courses; recent courses included bread, a pâte-sucrée tartlet and a coq au vin. No source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of salmon, shamo chicken, quail, foie gras and seafood.',
    hours_raw: 'Hours not fixed — reservation only; check the website (Tabelog). The website also shows when Shinya Tasaki is present (2026 review). Prices exclude tax; no service charge. Cards, IC and QR accepted.',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, Ginza Yamamoto Bldg B1F — 5 min from Higashi-Ginza or Tsukiji-shijō Stn',
    cuisine: 'French pairing courses from sommelier Shinya Tasaki’s company · ¥500 glasses of directly imported wine · lunch from ¥3,300', cuisine_type: 'french',
    website: 'https://www.caveau-sentir.com/', gmaps: gm('Caveau SenTir 銀座6-16-11 銀座山本ビル'), menu_url: null,
    notes: "[French · wine pairing] A reservation-only basement restaurant that opened in March 2026 in the former Le Jardin des Saveurs space. It is produced by Shinya Tasaki, honorary president of the Japan Sommelier Association, and run by Tasaki's company Santir. Twelve seats: a half-moon counter around the open kitchen and one table of four. Chef Ryota Tochigi previously led the company's Yamanashi-produce restaurant in Nihonbashi. 2026 lunches included quail with foie gras mousse, a seafood soup risotto, Amagi shamo chicken in vin jaune, Fuji no Suke salmon tartare and rillettes, coq au vin and a mirabelle tartlet. Because the wine is imported directly, glasses start at ¥500. A walk-in lunch course costs ¥3,300 and the Tabelog lunch courses ¥6,600–13,200; dinner runs ¥20,000–30,000. Smart-casual dress, and no strong perfume.",
    chef_bio: { chef_name: 'Ryota Tochigi (chef); produced by sommelier Shinya Tasaki', roles: ['chef'], origin: 'Opened 21 March 2026 (Tabelog)', background: 'Ryota Tochigi trained at French and Italian restaurants in Tokyo, joined Santir Co., Ltd. in 2014 and was head chef at its Yamanashi-produce restaurant in Nihonbashi before this spring-2026 opening (2026 review).', philosophy: 'The name’s "sentir" (to feel): a pleasant experience through space, food, drink and service (Tabelog listing).', specialty: 'Classic French paired with Tasaki-selected wine.',
      anecdotes: [
        { text: '"I learned that the wines are directly imported by Santir, managed by Tasaki, without going through a distributor, which allows for such a price." — July 2026, on the ¥500 glasses.', source: R + 'B531920499/' },
        { text: '"…joined Mr. Tasaki\'s company, Santir Co., Ltd., in 2014 and served as the head chef at \"Cave de Wine Prefecture Yamanashi,\" a restaurant and antenna shop in Nihonbashi." — October 2026, on chef Ryota Tochigi.', source: R + 'B537177264/' },
      ],
      japanese_sources_summary: '食べログ: Caveau SenTir par Shinya Tasaki、銀座6-16-11 銀座山本ビルB1F、東銀座駅・築地市場駅から徒歩5分、12席(カウンター8・テーブル4)、営業時間は不定、完全予約制、税別・サービス料なし、カード・IC・QR可、2026年3月21日開店、ドレスコードはスマートカジュアル、強い香水は控えるよう案内。店の紹介: 日本ソムリエ協会名誉会長・Shinya Tasaki 氏プロデュース、季節の食材とフランスの技法のコースにワインとオリジナルドリンクのペアリング。ランチコース6,600円・13,200円。2026年の口コミ: 旧 Le Jardin des Saveursの場所、半月形のカウンター、グラスワイン500円から(Santir の直輸入)、予約なしのランチ3,300円、シェフ Ryota Tochigi(英文表記)、うずらとフォアグラのムース、魚介のスープリゾット、Amagi shamo のヴァン・ジョーヌ煮込み、Fuji no Suke のタルタルとリエット、コック・オー・ヴァン、ミラベルのタルトレット。',
      confidence: 'medium', sources: [TB, R + 'B531920499/', R + 'B537177264/', R + 'B536521738/', R + 'B536710623/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; dishes and wines are explained at the counter.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-16-11 銀座山本ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; opened March 2026; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目16番11号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B531920499/'],
    price_note: 'Lunch course prices from Tabelog (tax incl.); walk-in lunch and glass prices from a July 2026 review.', last_checked: TODAY, items: [
      it('ランチ セレクトコース(4品)', '', 'Lunch Select Course, 4 dishes', '¥6,600', 'Lunch', 'ask', 'no', 'Tabelog.', 'lunch_select'),
      it('ランチ シグネチャーコース(4品)', '', 'Lunch Signature Course, 4 dishes', '¥13,200', 'Lunch', 'ask', 'no', 'Tabelog.', 'lunch_signature'),
      it('予約なしのランチコース', '', 'Walk-in lunch course', '¥3,300', 'Lunch', 'ask', 'no', 'July 2026.', 'lunch_walkin'),
      it('グラスワイン', '', 'House wine by the glass', '¥500', 'Drinks', 'gf', 'ask', 'From ¥500, July 2026.', 'glass_wine'),
    ] }, {
    cuisine: 'Shinya Tasaki 氏の会社によるフレンチのペアリングコース・直輸入ワインのグラス500円から・ランチ3,300円から',
    neighborhood: '銀座六丁目、銀座山本ビルB1F。東銀座駅・築地市場駅から徒歩5分',
    gf_detail: '要確認。季節のフレンチのペアリングコースで、最近のコースにはパン、パート・シュクレのタルトレット、コック・オー・ヴァンなど。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。サーモン、軍鶏、うずら、フォアグラ、魚介のコースです。',
    notes: '[フレンチ・ワインペアリング] 旧 Le Jardin des Saveursの場所に2026年3月に開いた完全予約制の地下のレストラン。日本ソムリエ協会名誉会長・Shinya Tasaki 氏のプロデュースで、運営はTasaki 氏の会社 Santir。オープンキッチンを囲む半月形のカウンターと4人がけのテーブル1卓の12席。シェフの Ryota Tochigi(英文の口コミの表記)は、同社が日本橋で営んでいた山梨の食材のレストランで料理長を務めた人。2026年のランチは、うずらとフォアグラのムース、魚介のスープリゾット、Amagi shamo のヴァン・ジョーヌ煮込み、Fuji no Suke のタルタルとリエット、コック・オー・ヴァン、ミラベルのタルトレットなど。ワインは直輸入のためグラス500円から。予約なしのランチは3,300円、食べログのランチコースは6,600〜13,200円、夜は20,000〜30,000円ほど。服装はスマートカジュアルで、強い香水は控えるよう案内されています。',
  });
}

// ================================================================ THE WINEBASE銀座
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13268514/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['18:00', '03:00']), we = day(['18:00', '23:59']);
  put({
    id: 'tokyo_the_winebase_ginza4', name: 'THE WINEBASE銀座', category: 'OMNI',
    lat: 35.672315, lng: 139.764751,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A wine bar serving local dishes from a featured country each month, plus pasta and gratin; no source mentions gluten-free handling.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Hummus has been on the menu (April 2026), but the food rotates monthly with the featured country and no vegan option is described.',
    hours_raw: 'Mon–Fri 18:00–03:00; Sat, Sun and holidays 18:00–24:00; closed 1 January and every 2nd Sunday (Tabelog). Cards, IC and QR accepted. Steep stairs.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 4-chōme, Hatori Bldg 3F — 2 min from Ginza Stn exit B2',
    cuisine: 'World-wine bar with a featured country each month (Serbia, Moldova, China…) and matching local dishes · glasses from about ¥1,500', cuisine_type: 'other',
    website: null, gmaps: gm('THE WINEBASE銀座 銀座4-3-5 ハトリビル'), menu_url: null,
    notes: "[Wine bar · a different country every month] A long, narrow 18-seat wine bar up a steep flight of stairs, 72 m from Ginza Station, open since the last day of 2020. A counter runs down one side, with four tables for two by the window. Each month features a different wine country with local dishes to match. In spring 2026 that was Serbian red and white with hummus, followed by Moldova, and diners have also tried a Chinese wine. Staff explain the local grape varieties. Glasses start at around ¥1,500. A friend-recommended gratin and other dishes round out the food. Open to 3 a.m. on weekdays, which makes it an easy second stop. Not for big groups.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 31 December 2020 (Tabelog)', background: 'No source names the owner.', philosophy: null, specialty: 'Monthly featured wine country with local dishes.',
      anecdotes: [
        { text: '"They feature a different country each month, and I tried both red and white wines from Serbia." — April 2026.', source: R + 'B526506101/' },
        { text: '"This month features Serbian cuisine, and next up is Moldovan." — April 2026.', source: R + 'B526844798/' },
      ],
      japanese_sources_summary: '食べログ: THE WINEBASE銀座、銀座4-3-5 ハトリビル3F、銀座駅B2出口から徒歩2分、18席(カウンター8・テーブル10)、平日18:00〜翌3:00、土日祝18:00〜24:00、1月1日と毎月第2日曜休、カード・IC・QR可、2020年12月31日開店、ソムリエあり。2026年の口コミ: 毎月違う国を特集し現地の料理も(4月はセルビア、次はモルドバ)、セルビアの赤白とフムス、中国ワイン、グラス1,500円ほどから、ブドウ品種の説明、グラタン、急な階段、細長い店内で窓際に2人がけ4卓。',
      confidence: 'low', sources: [TB, R + 'B526506101/', R + 'B526844798/', R + 'B532012899/', R + 'B533983591/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter bar; staff explain each country’s grapes.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-3-5 ハトリビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目3番5号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526506101/', R + 'B533983591/'],
    price_note: 'Glass price from an April 2026 review; dish prices not captured.', last_checked: TODAY, items: [
      it('今月の国のグラスワイン', '', 'Glass of wine from the month’s featured country', '¥1,500〜', 'Drinks', 'gf', 'ask', 'April 2026.', 'glass_wine'),
      it('フムス', 'fumusu', 'Hummus', '', 'Food', 'ask', 'ask', 'April 2026 (Serbian month).', 'hummus'),
      it('グラタン', 'guratan', 'Gratin', '', 'Food', 'no', 'no', '', 'gratin'),
    ] }, {
    cuisine: '毎月違う国(セルビア、モルドバ、中国など)を特集する世界のワインバーと現地の料理・グラス1,500円ほどから',
    neighborhood: '銀座四丁目、ハトリビル3F。銀座駅B2出口から徒歩2分',
    gf_detail: '要確認。毎月特集する国の料理のほか、パスタやグラタンのあるワインバーで、グルテンフリーの対応は書かれていません。',
    vegan_detail: '要確認。2026年4月にはフムスがありましたが、料理は特集する国とともに毎月替わり、ヴィーガンの選択肢は書かれていません。',
    notes: '[ワインバー・毎月違う国] 銀座駅から72m、急な階段を上がった先の細長い18席のワインバーで、2020年の大晦日に開店。片側にカウンター、奥の窓際に2人がけのテーブルが4卓。毎月違う国のワインを特集し、現地の料理も合わせます。2026年春はセルビアの赤白とフムス、次はモルドバで、中国ワインを試した客も。ブドウ品種の説明を聞きながら飲めて、グラスは1,500円ほどから。友人おすすめのグラタンなどの料理も。平日は深夜3時までなので2軒目にも。大人数には向きません。',
  });
}

// ================================================================ エッセンス テラスダイニングバー
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13275153/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '14:30'], ['17:00', '23:00']);
  put({
    id: 'tokyo_essence_terrace_ginza3', name: 'essence Terrace Dining BAR (エッセンス テラスダイニングバー)', category: 'OMNI',
    lat: 35.670691, lng: 139.768661,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: lunch is pasta, and courses finish with pasta; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: charcoal-grilled meat, beef-tendon soup, cream and hamburg-topped pastas.',
    hours_raw: 'Mon–Fri 11:00–14:30 (L.O. 14:00) and 17:00–23:00 (L.O. 22:00); Sat 11:00–14:30 and 17:00–22:00 (L.O. 21:00); closed Sundays, except open Sunday and closed Monday when Monday is a holiday (Tabelog). Cards and PayPay accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['11:00', '14:30'], ['17:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, Dai-roku Maruka Bldg 1F — 1 min from Higashi-Ginza Stn exit A7',
    cuisine: 'Western-based bistro bar with charcoal grill and a terrace · pasta lunch ¥1,000–2,000 · courses at dinner', cuisine_type: 'other',
    website: 'http://www.essence-ginza.co.jp', gmaps: gm('エッセンス テラスダイニングバー 銀座3-11-8'), menu_url: null,
    notes: "[Bistro bar · terrace in Higashi-Ginza] A cozy, stylish 27-seat ground-floor bar a minute from Higashi-Ginza Station, with counter, sofa seats and an open terrace that people seek out in good weather. The chef is grounded in classic Western cooking, the menu crosses genres and the mains come off a charcoal grill. Weekday lunch is a pasta set with salad and a beef-tendon soup that diners rave about; a September 2026 diner's kimchi cream pasta was spicy and excellent. Dinner courses end with a pasta, such as one topped with a hamburg steak, and a retro pudding, and the kitchen will make a birthday plate. About ¥1,000–2,000 at lunch and ¥6,000–8,000 at dinner.",
    chef_bio: { chef_name: null, roles: [], origin: 'Higashi-Ginza; opening date not given', background: 'Tabelog: a chef well versed in traditional Western cuisine, unnamed; company website.', philosophy: null, specialty: 'Charcoal-grilled mains; pasta.',
      anecdotes: [
        { text: '"I ordered the pasta lunch, and when it arrived, the soup had beef tendon in it, which was incredibly delicious." — September 2026.', source: R + 'B536447746/' },
        { text: '"The pasta topped with hamburger steak was hearty and flavorful… I also thoroughly enjoyed the retro pudding for dessert." — September 2026.', source: R + 'B535513581/' },
      ],
      japanese_sources_summary: '食べログ: エッセンス テラスダイニングバー、銀座3-11-8 第六丸嘉ビル1F、東銀座駅A7出口から徒歩1分、27席(テラス席あり)、平日11:00〜14:30・17:00〜23:00、土11:00〜14:30・17:00〜22:00、日休(月曜が祝日なら日曜営業・月曜休)、カード・PayPay可、公式サイト essence-ginza.co.jp。店の紹介: 伝統的な洋食に精通したシェフ、ジャンルにとらわれない洋食ベースの料理、メインは炭火焼き、テラス。2026年の口コミ: パスタランチに牛すじのスープ、キムチクリームパスタ、コースの締めのハンバーグのせパスタ、レトロなプリン、誕生日プレート、昼1,000〜2,000円・夜6,000〜8,000円。',
      confidence: 'low', sources: [TB, R + 'B536447746/', R + 'B535513581/', R + 'B536291885/', R + 'B499149276/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual; terrace seating in good weather.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-11-8 第六丸嘉ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目11番8号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536447746/', R + 'B536291885/'],
    price_note: 'No prices captured; reviewers spend ¥1,000–2,000 at lunch.', last_checked: TODAY, items: [
      it('パスタランチ', 'pasuta ranchi', 'Pasta lunch with salad and beef-tendon soup', '', 'Lunch', 'no', 'no', '', 'pasta_lunch'),
      it('キムチクリームパスタ', 'kimuchi kuriimu pasuta', 'Kimchi cream pasta', '', 'Lunch', 'no', 'no', '', 'kimchi_cream'),
      it('レトロプリン', 'retoro purin', 'Retro custard pudding', '', 'Dessert', 'ask', 'no', '', 'pudding'),
    ] }, {
    cuisine: '炭火焼きとテラスのある洋食ベースのダイニングバー・パスタランチ1,000〜2,000円・夜はコース',
    neighborhood: '銀座三丁目、第六丸嘉ビル1F。東銀座駅A7出口から徒歩1分',
    gf_detail: '実際上グルテンフリーではありません。ランチはパスタ、コースもパスタで締めくくり、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。炭火焼きの肉、牛すじのスープ、クリームやハンバーグのパスタ。',
    notes: '[ダイニングバー・東銀座のテラス] 東銀座駅から1分、1階にある居心地のよいおしゃれな27席のバーで、カウンター、ソファ席、天気のいい日に人気のオープンテラス。伝統的な洋食に精通したシェフがジャンルにとらわれない料理を作り、メインは炭火焼き。平日の昼はサラダと評判の牛すじのスープ付きのパスタランチで、2026年9月の客が食べたキムチクリームパスタはピリッと辛くて絶品だったそう。夜のコースはハンバーグをのせたパスタなどで締め、デザートはレトロなプリン。誕生日プレートにも対応。昼は1,000〜2,000円、夜は6,000〜8,000円ほど。',
  });
}

save();
