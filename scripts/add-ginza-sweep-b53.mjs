// Ginza Station half-mile sweep (805 m), batch 53 — four small places with 2026 reviews (all OMNI).
//   + プティオザミ (casual first-floor bistro of the Ginza Oza Mi building, opened 2016; sister restaurant)
//   + ジャッジョーロ銀座 (Italian since 2007, known for an organic "15-herb salad"; owner not named)
//   + マトリキッチン (Russian restaurant with a ¥1,300 lunch set; owner not named)
//   + グラマシー テーブル (bistro since 2012, known for truffle omurice; owner not named)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ プティオザミ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13193458/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '15:00'], ['17:30', '22:00']), sat = day(['11:30', '15:30'], ['17:00', '22:00']), sun = day(['11:30', '15:30'], ['17:00', '21:00']);
  put({
    id: 'tokyo_petit_ozami_ginza1', name: 'プティオザミ (Petit Oza Mi)', category: 'OMNI',
    lat: 35.674943, lng: 139.766438,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a casual French bistro with bread, foie-gras hamburg steak, braised beef cheek and pudding; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: roast beef, foie gras, beef cheek, fish and dairy desserts.',
    hours_raw: 'Tue–Fri 11:30–15:00 and 17:30–22:00; Sat 11:30–15:30 and 17:00–22:00; Sun and holidays 11:30–15:30 and 17:00–21:00; closed Mondays (Tabelog). 10% service charge at bar time only. Reservations strongly advised. Cards and PayPay accepted.',
    hours: { 1: wk, 2: wk, 3: wk, 4: wk, 5: sat, 6: sun }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 1-chōme, Ginza Oza Mi Bldg 1F–2F — 1 min from Ginza-itchōme Stn exit 6',
    cuisine: 'Casual French bistro of the Oza Mi building (opened 2016) · lunch courses from about ¥2,950 · wine by glass or carafe', cuisine_type: 'french',
    website: null, gmaps: gm('プティオザミ 銀座1-4-9 銀座オザミビル'), menu_url: null,
    notes: "[Bistro · the casual floor of Oza Mi] The ground-floor bistro of the Ginza Oza Mi building, opened in March 2016. Its Tabelog text calls it the casual sister of Ginza Ozami De Vin, then celebrating its 29th year, with French food at 'petit' prices. Lunch courses start around ¥2,950, and wine comes by the glass, carafe or bottle. 2026 diners order a roast-beef salad lunch, or a course of four appetizers, poached fish, braised beef cheek and a 'noble pudding', which one called great value. A foie-gras hamburg steak cost more than expected. Book ahead: walk-ins on a Saturday faced waits and cancellation-fee notices. Expect ¥2,000–8,000 a head.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 March 2016 as the casual sister of Ginza Ozami De Vin (Tabelog)', background: 'Group restaurant; no chef is named in a source read.', philosophy: null, specialty: 'Braised beef cheek; pudding.',
      anecdotes: [
        { text: '"The entire building is dedicated to Oza Mi, with different levels of dining experiences on each floor." — September 2026.', source: R + 'B536660991/' },
        { text: '"The course included four types of appetizers, poached fish, and braised beef cheek… We finished with a \'noble pudding\'." — October 2026.', source: R + 'B537215974/' },
      ],
      japanese_sources_summary: '食べログ: プティオザミ、銀座1-4-9 銀座オザミビル1F・2F、銀座一丁目駅6番出口から徒歩1分、20席、火〜金11:30〜15:00・17:30〜22:00、土11:30〜15:30・17:00〜22:00、日祝は〜21:00、月休、2016年3月21日開店、バータイムのみサービス料10%、カード・PayPay可。店舗紹介(英文): 29年目の「銀座オザミデヴァン」のカジュアルな姉妹店、ランチコースは2,950円ほどから、グラス・カラフェ・ボトルのワイン。2026年の口コミ: ローストビーフのサラダランチ、前菜4種・魚のポシェ・牛頬肉の煮込み・プリンのコース、フォアグラのハンバーグ、予約推奨、2,000〜8,000円。',
      confidence: 'low', sources: [TB, R + 'B536660991/', R + 'B537215974/', R + 'B537123899/', R + 'B537883849/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead, especially weekends; casual and homely.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座1-4-9 銀座オザミビル 1F・2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座一丁目4番9号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B537215974/'],
    price_note: 'Lunch course price "from about ¥2,950" from the Tabelog shop text.', last_checked: TODAY, items: [
      it('ランチコース', 'ranchi koosu', 'Lunch course', '¥2,950–', 'Lunch', 'no', 'no', '', 'lunch_course'),
      it('牛頬肉の煮込み', 'gyuu hoho niku no nikomi', 'Braised beef cheek', '', 'Mains', 'ask', 'no', '', 'beef_cheek'),
      it('ローストビーフのサラダ', 'roosuto biifu no sarada', 'Roast-beef salad (lunch)', '', 'Lunch', 'ask', 'no', '', 'roast_beef_salad'),
    ] }, {
    cuisine: 'オザミのビルのカジュアルなフレンチビストロ(2016年開店)・ランチコースは2,950円ほどから・グラスやカラフェのワイン',
    neighborhood: '銀座一丁目、銀座オザミビル1F・2F。銀座一丁目駅6番出口から徒歩1分',
    gf_detail: '実際上グルテンフリーではありません。パン、フォアグラのハンバーグ、牛頬肉の煮込み、プリンなどのカジュアルなフレンチビストロで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。ローストビーフ、フォアグラ、牛頬肉、魚と乳製品のデザート。',
    notes: '[ビストロ・オザミのカジュアルな階] 銀座オザミビルの1階にある2016年3月開店のビストロ。食べログでは、29年目を迎えた「銀座オザミデヴァン」のカジュアルな姉妹店として、「プティ」な値段で本物のフレンチをうたっています。ランチコースは2,950円ほどから、ワインはグラス・カラフェ・ボトルで。2026年の口コミでは、ローストビーフのサラダランチや、前菜4種・魚のポシェ・牛頬肉の煮込み・「ノーブルプリン」のコースがお得との声。フォアグラのハンバーグは思ったより高くついたとも。予約を:土曜は予約なしだと待ち時間やキャンセル料の説明があったそう。1人2,000〜8,000円ほど。',
  });
}

// ================================================================ ジャッジョーロ銀座
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13041337/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:30', '14:30'], ['17:30', '21:30']);
  put({
    id: 'tokyo_giaggiolo_ginza', name: 'ジャッジョーロ銀座 (GIAGGIOLO GINZA)', category: 'OMNI',
    lat: 35.668582, lng: 139.763467,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An Italian restaurant known for its organic vegetable "15-herb salad" and gentle, broth-led cooking (a maternity course is offered); no source describes the pasta or bread situation or a gluten-free option.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The signature herb and organic vegetable salad may suit, but its dressing and toppings are not described, and courses include prosciutto.',
    hours_raw: 'Tue–Sat 11:30–14:30 (food L.O. 13:00) and 17:30–21:30 (food L.O. 19:30); closed Sundays and Mondays (Tabelog). Cards accepted.',
    hours: { 1: ld, 2: ld, 3: ld, 4: ld, 5: ld }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, The Orb Luminous B1F — 5 min from Ginza Stn A3 or Higashi-Ginza Stn',
    cuisine: 'Italian since 2007 · the organic "15-herb salad" inspired by Santa Maria Novella · maternity course · non-alcoholic wine', cuisine_type: 'other',
    website: null, gmaps: gm('ジャッジョーロ銀座 銀座7-10-5 ジ オーブ ルミナス'), menu_url: null,
    notes: "[Italian · the 15-herb salad] A long-established, softly lit basement Italian restaurant in Ginza 7-chōme, open since July 2007. The signature is the '15 Herb Salad' of organic vegetables and herbs, which a regular says is inspired by the old Florentine pharmacy Santa Maria Novella. It comes in a large size with all the toppings, and can be taken away. The cooking is gentle and led by ingredients and broth, with a maternity course for pregnant guests and non-alcoholic sparkling and wine. Dinner courses open with herb salad and prosciutto. About ¥10,000–15,000 a head at dinner.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 6 July 2007 (Tabelog)', background: 'No source names the owner or chef.', philosophy: null, specialty: '15-herb organic salad.',
      anecdotes: [
        { text: '"I always have to order the signature \'15 Herb Salad.\' This dish, inspired by the world\'s oldest pharmacy, Santa Maria Novella, truly revitalizes me." — May 2026.', source: R + 'B83311049/' },
        { text: '"I made a reservation for a maternity course to celebrate a special occasion! The menu was gentle on the body of a pregnant woman." — September 2026.', source: R + 'B536428146/' },
      ],
      japanese_sources_summary: '食べログ: ジャッジョーロ銀座、銀座7-10-5 ジ オーブ ルミナスB1F、銀座駅A3出口・東銀座駅から徒歩5分、20席、火〜土11:30〜14:30・17:30〜21:30、日月休、2007年7月6日開店、カード可。2026年の口コミ: 名物の有機野菜の「15種のハーブサラダ」(サンタ・マリア・ノヴェッラにちなむ)、大盛り・全部のせ、持ち帰り、出汁と素材を生かしたやさしい味、マタニティコース、ノンアルコールのスパークリングとワイン、ハーブサラダと生ハムの前菜、夜1〜1.5万円。',
      confidence: 'low', sources: [TB, R + 'B83311049/', R + 'B536428146/', R + 'B532829725/', R + 'B526763036/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Calm basement; maternity course and non-alcoholic pairings available.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Maternity course adapted for pregnant guests (September 2026).', source: R + 'B536428146/' }], positives: [{ text: 'Organic vegetable salad is the signature dish.', source: R + 'B532829725/' }], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-10-5 ジ オーブ ルミナス B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目10番5号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B83311049/', R + 'B532829725/'],
    price_note: 'No prices captured; reviewers spend ¥10,000–15,000 at dinner.', last_checked: TODAY, items: [
      it('15種のハーブサラダ', '', '"15 Herb Salad" of organic vegetables and herbs', '', 'Salads', 'ask', 'ask', '', 'herb_salad'),
      it('マタニティコース', 'matanitii koosu', 'Maternity course', '', 'Courses', 'ask', 'no', '', 'maternity_course'),
    ] }, {
    cuisine: '2007年からのイタリアン・サンタ・マリア・ノヴェッラにちなむ有機野菜の「15種のハーブサラダ」・マタニティコース・ノンアルコールワイン',
    neighborhood: '銀座七丁目、ジ オーブ ルミナスB1F。銀座駅A3出口・東銀座駅から徒歩5分',
    gf_detail: '要確認。有機野菜の「15種のハーブサラダ」と、出汁を生かしたやさしいイタリアン(マタニティコースあり)。パスタやパン、グルテンフリーの対応は書かれていません。',
    vegan_detail: '要確認。名物のハーブと有機野菜のサラダは候補ですが、ドレッシングやトッピングは書かれておらず、コースには生ハムも。',
    notes: '[イタリアン・15種のハーブサラダ] 銀座7丁目のビル地下、柔らかな照明の2007年7月開店の老舗イタリアン。名物は有機野菜とハーブの「15種のハーブサラダ」で、常連によればフィレンツェの古い薬局サンタ・マリア・ノヴェッラにちなむもの。大盛りの全部のせにも、持ち帰りにも。料理は素材と出汁を生かしたやさしい味わいで、妊婦向けのマタニティコースや、ノンアルコールのスパークリングとワインも。夜のコースはハーブサラダと生ハムから。夜は1人1〜1.5万円ほど。',
  });
}

// ================================================================ マトリキッチン
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13251757/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:30', '22:00']);
  put({
    id: 'tokyo_matri_kitchen_higashi_ginza', name: 'マトリキッチン (Matri Kitchen)', category: 'OMNI',
    lat: 35.671099, lng: 139.767838,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as described: Russian dishes such as pelmeni (wheat dumplings) and beef stroganoff with borscht and bread; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: meat pelmeni, beef stroganoff; borscht\'s stock is not described.',
    hours_raw: 'Mon–Wed and Fri–Sun 11:30–22:00; closed Thursdays (Tabelog). Cards, IC and d Barai accepted.',
    hours: { 0: a, 1: a, 2: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, Tōgin 1 Bldg 2F — 5 min from Higashi-Ginza Stn',
    cuisine: 'Russian restaurant · ¥1,300 lunch set (main, salad, borscht, drink) · freshly made pelmeni, Russian tea with jam', cuisine_type: 'other',
    website: null, gmaps: gm('マトリキッチン 銀座3-10-14 東銀1ビル'), menu_url: null,
    notes: "[Russian · a busy ¥1,300 lunch] A 20-seat Russian restaurant on a Higashi-Ginza second floor, with cheerful staff who reviewers say seem to be Russian. The weekday lunch set is ¥1,300 with a drink: a main such as beef stroganoff, plus salad and borscht. Add pelmeni, which appear to be made fresh before boiling, so they take a while at busy times. Russian tea comes with jam. Queues form before the 11:30 opening. Dinner runs to 22:00, about ¥2,000–3,000 a head.",
    chef_bio: { chef_name: null, roles: [], origin: 'Higashi-Ginza; opening date not found in a source read', background: 'No source names the owner.', philosophy: null, specialty: 'Pelmeni; beef stroganoff; borscht.',
      anecdotes: [
        { text: '"I thought they would just boil frozen ones, but it seems they probably make them fresh before boiling? It took quite a while, but they were delicious." — September 2026.', source: R + 'B535843368/' },
        { text: '"I ordered the lunch set, which featured stroganoff as the main dish, along with a salad, borscht, and a drink, all for a very reasonable price of JPY 1,300." — October 2026.', source: R + 'B537290040/' },
      ],
      japanese_sources_summary: '食べログ: マトリキッチン、銀座3-10-14 東銀1ビル2F、東銀座駅から徒歩5分、20席、月火水金土日11:30〜22:00、木休、カード・IC・d払い可、2,000〜3,000円。2026年の口コミ: ロシア料理、平日ランチセット1,300円(ドリンク付き、メインはビーフストロガノフなど、サラダ、ボルシチ)、作りたてのペリメニ、ジャム付きのロシアンティー、ロシア人らしい明るい女性スタッフ、開店前から行列。',
      confidence: 'low', sources: [TB, R + 'B535843368/', R + 'B537290040/', R + 'B535886100/', R + 'B537151094/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Busy lunch — arrive before 11:30; friendly staff.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [{ text: 'Pelmeni (dumplings) on the menu.', source: R + 'B535843368/' }], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-10-14 東銀1ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目10番14号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537290040/', R + 'B535843368/'],
    price_note: 'Lunch set price from October 2026 reviews.', last_checked: TODAY, items: [
      it('ランチセット(ビーフストロガノフ)', 'ranchi setto', 'Lunch set: beef stroganoff, salad, borscht, drink', '¥1,300', 'Lunch', 'no', 'no', '2026.', 'lunch_set'),
      it('ペリメニ', 'perimeni', 'Pelmeni (add-on)', '', 'Small plates', 'no', 'no', '', 'pelmeni'),
      it('ロシアンティー', 'roshian tii', 'Russian tea with jam', '', 'Drinks', 'gf', 'ask', '', 'russian_tea'),
    ] }, {
    cuisine: 'ロシア料理・1,300円のランチセット(メイン・サラダ・ボルシチ・ドリンク)・作りたてのペリメニ、ジャム付きのロシアンティー',
    neighborhood: '銀座三丁目、東銀1ビル2F。東銀座駅から徒歩5分',
    gf_detail: '記述上はグルテンフリーではありません。ペリメニ(小麦の水餃子)やビーフストロガノフにボルシチとパンなどのロシア料理で、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。肉のペリメニ、ビーフストロガノフ。ボルシチの出汁は書かれていません。',
    notes: '[ロシア料理・にぎわう1,300円ランチ] 東銀座のビル2階、20席のロシア料理店で、口コミによればロシア人らしい明るいスタッフが迎えます。平日ランチはドリンク付き1,300円のセットで、ビーフストロガノフなどのメインにサラダとボルシチ。追加のペリメニは茹でる前に作っているらしく、混む時間は時間がかかります。ロシアンティーはジャム付き。11時半の開店前から行列。夜は22時まで、1人2,000〜3,000円ほど。',
  });
}

// ================================================================ グラマシー テーブル
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13148770/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:30', '14:00'], ['18:00', '21:00']);
  put({
    id: 'tokyo_gramercy_table_ginza5', name: 'グラマシー テーブル (GRAMERCY TABLE)', category: 'OMNI',
    lat: 35.670309, lng: 139.765515,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a bistro whose lunch favourite is truffle omurice with salad and bread, plus hamburgers; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: omurice (egg), hamburgers and bistro mains.',
    hours_raw: 'Mon–Sat 11:30–14:00 and 18:00–21:00; closed Sundays (Tabelog). Dinner: 10% service and ¥540 charge. Cards (JCB, AMEX, Diners) accepted.',
    hours: { 0: ld, 1: ld, 2: ld, 3: ld, 4: ld, 5: ld }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, a short alley off the main streets — 1 min from Ginza or Higashi-Ginza Stn',
    cuisine: 'New York-style bistro since 2012 · truffle omurice (5 a day on Saturdays) · open kitchen and big windows', cuisine_type: 'other',
    website: null, gmaps: gm('グラマシー テーブル 銀座5-9-5'), menu_url: null,
    notes: "[Bistro · truffle omurice down an alley] A 20-seat bistro a short way down an alley off Ginza's main streets, open since October 2012. A June 2026 diner likens its black decor, large windows, open kitchen and lit plants to a New York townhouse restaurant. The lunch favourite is truffle omurice with salad and bread, limited to five servings on Saturdays. The menu has since added hamburgers. Regulars note staff remember them after years. Dinner is a fuller evening, about ¥30,000–40,000 in one June 2026 review. Lunch runs about ¥1,000–5,000. A 10% service charge and ¥540 charge apply at dinner.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 30 October 2012 (Tabelog)', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Truffle omurice.',
      anecdotes: [
        { text: '"I visited after several years, and I was delighted that the staff remembered me… I went with my favorite, the truffle omurice." — September 2026.', source: R + 'B461166288/' },
        { text: '"My companion wanted to try the limited 5 servings of Omurice, so we arrived before opening." — June 2026, a Saturday.', source: R + 'B533839457/' },
      ],
      japanese_sources_summary: '食べログ: グラマシー テーブル、銀座5-9-5、銀座駅・東銀座駅から徒歩1分、20席、月〜土11:30〜14:00・18:00〜21:00、日休、夜はサービス料10%とチャージ540円、カード(JCB・AMEX・Diners)可、2012年10月30日開店。2026年の口コミ: 路地を入った隠れ家ビストロ、黒基調で大きな窓とオープンキッチン、ニューヨークのタウンハウスのよう、トリュフのオムライス(土曜は5食限定)、サラダとパン、ハンバーガーも、常連を覚えているスタッフ、夜は3〜4万円の口コミも、昼1,000〜5,000円。',
      confidence: 'low', sources: [TB, R + 'B461166288/', R + 'B533839457/', R + 'B505960278/', R + 'B529536296/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Arrive early for the limited omurice; dinner adds service and charge.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-9-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目9番5号 (go) 19m; same lot as 割烹かむい; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B461166288/', R + 'B533839457/'],
    price_note: 'No prices captured; lunch about ¥1,000–5,000.', last_checked: TODAY, items: [
      it('トリュフのオムライス', 'toryufu no omuraisu', 'Truffle omurice with salad and bread (lunch)', '', 'Lunch', 'no', 'no', '', 'truffle_omurice'),
      it('ハンバーガー', 'hanbaagaa', 'Hamburger', '', 'Lunch', 'no', 'no', '', 'hamburger'),
    ] }, {
    cuisine: '2012年からのニューヨーク風ビストロ・トリュフのオムライス(土曜は5食限定)・オープンキッチンと大きな窓',
    neighborhood: '銀座五丁目、大通りから路地を少し入った場所。銀座駅・東銀座駅から徒歩1分',
    gf_detail: '実際上グルテンフリーではありません。昼の人気はサラダとパン付きのトリュフのオムライスで、ハンバーガーも。グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。オムライス(卵)、ハンバーガー、ビストロのメイン。',
    notes: '[ビストロ・路地のトリュフオムライス] 銀座の大通りから路地を少し入った、2012年10月開店の20席のビストロ。2026年6月の客は、黒基調の内装、大きな窓、オープンキッチン、照らされた観葉植物を、ニューヨークのタウンハウスのレストランのようだと書いています。昼の人気はサラダとパン付きのトリュフのオムライスで、土曜は5食限定。メニューにはハンバーガーも加わりました。何年ぶりでも覚えていてくれるスタッフとの声も。夜は本格的なディナーで、2026年6月には3〜4万円との口コミ。昼は1,000〜5,000円ほど。夜はサービス料10%とチャージ540円。',
  });
}

save();
