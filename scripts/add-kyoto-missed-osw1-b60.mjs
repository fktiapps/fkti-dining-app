// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 60.
//   + boogaloo cafe (big sofa café off Teramachi; lasagna and all-you-can-eat bread)
//   + ダッテン datten (Italian bar in Gion, open from 14:00)
//   + 先斗町 八十八 Pontocho Yasohachi (yakitori in Pontocho with tatami rooms)
//   + 焼肉匠 覚王木屋町亭 Yakiniku Sho Kakuo Kiyamachi-tei (private-room Wagyu yakiniku, open until 7:00)
//   - Royal Scene, はた源: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26041934 (skipped), 26025890,
//   26019518, 26015834, 26024552 (skipped), 26022710. 鮨嵩 (26001122) is next and left for the following batch.
//   None of the four drafted is in data/kyoto.json by name (boogaloo, ダッテン/datten, 八十八/Yasohachi, 覚王/Kakuo) or
//   address (中筋町488 オオヤマビル2F, 大和町21-2, 下樵木町192, 北車屋町266-1).
//   Same-name count (same brand or operator only): one shop each in our crawl. boogaloo cafe: invoice holder 株式会社
//   ｂｏｏｇａｌｏｏ ｃａｆｅ (Kyoto, NTA register). 覚王: Tabelog's name search shows the unrelated Kakuozan shops of
//   Nagoya; no link found. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: ダッテン チャージ550円; none listed for the other three.
//   Other-diner remarks (Greg 2026-11-06): single-review remarks about other customers left out (ダッテン September 2026,
//   八十八 April 2026).
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-60');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26041934', 'Royal Scene: too thin to verify — one review since 2025 (April 2025); a 10th-floor shisha bar whose Tabelog hours (21:00–5:00) conflict with that review’s daytime café');
skip('26024552', 'はた源: not a place to eat — a condiment shop selling shichimi, ichimi, sansho and yuzu kosho (official site gion-hatagen.com; 2025–2026 reviews)');

// ================================================================ boogaloo cafe
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26025890/'; const R = TB + 'dtlrvwlst/';
  const L = day(['12:00', '21:00']);
  put({
    id: 'kyoto_boogaloo_cafe', name: 'boogaloo cafe', category: 'OMNI',
    lat: 35.006637, lng: 135.767023, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: lasagna, pizza and an all-you-can-eat bread basket are the core of the menu (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Salad bowls and bread appear, but the signature lasagnas use meat sauce or cheese (2026 reviews).',
    hours_raw: 'Daily: lunch 12:00–15:00; café time 15:00–17:00; dinner 17:00–21:00 (L.O. food 20:00, drinks 20:30) (Tabelog). Reservations accepted; queues before opening on weekends and holidays (Tabelog; July and August 2026). Cards, e-money, PayPay, d Barai, au PAY and Alipay (Tabelog). 120 seats, many on sofas; parties up to 150 standing; weddings and after-parties by arrangement (Tabelog). On the 2nd floor of the Oyama Building, by lift beside the Sun Drug on Teramachi-Kyogoku or by stairs, 6 min from Kyoto-Shiyakusho-mae (Tabelog; May 2026). Opened 10 January 2002 (Tabelog).',
    hours: { 0: L, 1: L, 2: L, 3: L, 4: L, 5: L, 6: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi-Kyogoku north of Shijo — 2F, near Kyoto-Shiyakusho-mae',
    cuisine: 'A large, relaxed café and Italian bar with designer sofa seating (Tabelog) · lunch course of a vegetable bowl, all-you-can-eat bread of four kinds and a main such as meat-sauce or blue-cheese lasagna, with a cookie and coffee (May–September 2026) · pizza and handmade lasagna (Tabelog) · dinner course of 8 dishes with homemade bread and roast beef and free-flow drinks, ¥5,000 (Tabelog) · drinks with natural crushed ice (Tabelog)',
    website: null, gmaps: gm('boogaloo cafe 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Café and Italian · Teramachi 2F, lasagna and bread] A huge, sofa-filled café up a lift off Teramachi-Kyogoku, busy with lunch groups for its rich lasagnas and all-you-can-eat bread basket, and turning into a party venue at night with a ¥5,000 course and free-flow drinks. Queues on holidays.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s invoice number T8130001026305 is registered to 株式会社ｂｏｏｇａｌｏｏ ｃａｆｅ, Kyoto (NTA register). Tabelog’s shop text describes designer furniture, homemade dishes, pizza and handmade lasagna.',
      philosophy: null, specialty: 'Lasagna; all-you-can-eat bread.',
      anecdotes: [
        { text: 'An August 2026 regular came back for the lasagna and found five groups already queuing before opening on a holiday.', source: R + 'B441404638/' },
        { text: 'A July 2026 group on a weekday walked straight in and had the pick of the seats.', source: R + 'B532560140/' },
      ],
      japanese_sources_summary: '食べログ: boogaloo cafe、カフェ・イタリアン・バル、中京区中筋町488 オオヤマビル2F、市役所前駅から徒歩6分、毎日 ランチ12:00〜15:00、カフェ15:00〜17:00、ディナー17:00〜21:00、予約可、カード・電子マネー・QR決済可、120席、2002年1月10日オープン、デザイナー家具のソファ席、ピザと手作りのラザニア、自家製パンとローストビーフの8品の飲み放題コース5,000円、適格請求書 T8130001026305 (株式会社boogaloo cafe)。口コミ (2026年、英語): ミートソースやブルーチーズのラザニア、4種のパンの食べ放題、野菜のボウル、クッキーとコーヒー、休日は開店前から行列、寺町京極のサンドラッグ横のエレベーター。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=8130001026305', R + 'B441404638/', R + 'B528834282/', R + 'B530400973/', R + 'B532560140/', R + 'B534753636/', R + 'B535486879/', R + 'B535514835/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Large café; queues on holidays.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区中筋町488 オオヤマビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006637, 135.767023); cross-checked: GSI 京都府京都市中京区中筋町488番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course price from Tabelog; lunch spend ¥1,000–2,999 per reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch: lasagna with all-you-can-eat bread', '', 'Lunch', 'no', 'no', '2026 reviews.', 'lasagna_lunch'),
      it('', '', 'Dinner course, 8 dishes, free-flow drinks', '¥5,000', 'Courses', 'no', 'no', 'Tabelog.', 'course'),
    ] }, {
    cuisine: 'デザイナー家具のソファ席の広いカフェとイタリアンバル (食べログ)・野菜のボウル、4種のパンの食べ放題、ミートソースやブルーチーズのラザニアなどのメイン、クッキーとコーヒーのランチコース (2026年5〜9月)・ピザと手作りのラザニア (食べログ)・自家製パンとローストビーフの8品の飲み放題付きディナーコース5,000円 (食べログ)・天然のかち割り氷のドリンク (食べログ)',
    neighborhood: '四条の北の寺町京極。2階、市役所前の近く',
    gf_detail: 'グルテンフリーではない。ラザニア、ピザ、パンの食べ放題が中心 (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。サラダのボウルやパンもあるが、名物のラザニアはミートソースかチーズ (2026年の口コミ)。',
    notes: '[カフェとイタリアン・寺町の2階、ラザニアとパン] 寺町京極からエレベーターで上がる、ソファの並ぶ大きなカフェ。濃厚なラザニアとパンの食べ放題のランチが人気で、夜は5,000円の飲み放題コースのパーティー会場にも。休日は行列。',
  });
}

// ================================================================ ダッテン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26019518/'; const R = TB + 'dtlrvwlst/';
  const A = day(['14:00', '23:00']); const S = day(['14:00', '22:00']);
  put({
    id: 'kyoto_datten_gion', name: 'ダッテン (datten)', category: 'OMNI',
    lat: 35.002911, lng: 135.773204, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta, pizza and bread are central; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Seasonal Kyoto vegetables, marinated beets and homemade pickles appear, but most dishes use cheese, cream, ham or seafood (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Tuesday–Saturday 14:00–23:00 (L.O. 22:00); Sunday 14:00–22:00; closed Monday (Tabelog). Charge ¥550 (Tabelog, original チャージ550円). Cards; no e-money or QR (Tabelog). 25 seats: a counter downstairs and sofas upstairs (Tabelog). Opening at 14:00 suits people coming out of a Minami-za show (March 2026). About 4 min from Keihan Gion-Shijo, south of Shijo off Yamato-oji (Tabelog). Opened 8 February 2012 (Tabelog).',
    hours: { 1: A, 2: A, 3: A, 4: A, 5: A, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, off Yamato-oji south of Shijo — 4 min from Keihan Gion-Shijo',
    cuisine: 'A hidden Italian bar with seasonal Kyoto vegetables and a long wine list (Tabelog) · early-opening lunch: appetizers and a choice of three pastas, about ¥2,000 (January 2025) · course in the ¥4,000 range with a drink and coffee or tea (July 2025) · à la carte: prosciutto, Yoro pork ham, liver pâté, foie gras terrine, ajillo, mussels in white wine, lamb chops, pizza, pasta (2025–2026) · homemade pickles and umeshu (September 2026)',
    website: null, gmaps: gm('datten 祇園 イタリアン'), menu_url: TB + 'dtlmenu/',
    notes: '[Italian bar · Gion off Yamato-oji, open from 14:00] A small, tucked-away Italian bar in Gion with a counter downstairs and sofas upstairs, cooking with Kyoto vegetables — pastas and pizza, liver pâté, ajillo, lamb chops — with good wine, and open from mid-afternoon, handy after a Minami-za show. ¥550 charge; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Chefs (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes authentic Italian food with plenty of seasonal Kyoto vegetables and a wide drinks list. A February 2025 diner found the owner and chefs friendly and easy to talk to.',
      philosophy: null, specialty: 'Pasta; liver pâté.',
      anecdotes: [
        { text: 'A March 2026 theatre-goer was grateful to find good Italian food open at 14:00 after a Minami-za performance.', source: R + 'B524074966/' },
        { text: 'A September 2026 visitor came in as the fifth stop of the night for homemade pickles and umeshu.', source: R + 'B535572268/' },
      ],
      japanese_sources_summary: '食べログ: datten (ダッテン)、イタリアン・バー・居酒屋、東山区大和大路通四条下ル東入ル大和町21-2、京阪祇園四条駅から徒歩4分、火〜土 14:00〜23:00 (L.O.22:00)、日 14:00〜22:00、月曜定休、チャージ550円、カード可、25席 (1階カウンター、2階ソファ)、2012年2月8日オープン、京野菜を使う本格イタリアン、ワインが豊富。口コミ (2025〜2026年、英語): 前菜と3種から選ぶパスタの昼約2,000円、4,000円台のコース、生ハム、Yoro pork のハム、レバーパテ、フォアグラのテリーヌ、アヒージョ、ムール貝の白ワイン蒸し、ラムチョップ、ピザ、パスタ、自家製の漬物、梅酒、南座の公演後にも便利。',
      confidence: 'medium', sources: [TB, R + 'B447779518/', R + 'B498923616/', R + 'B498942972/', R + 'B501356397/', R + 'B510811218/', R + 'B522216608/', R + 'B524074966/', R + 'B524723622/', R + 'B535572268/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥550 charge; à la carte portions sized for two.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通四条下ル東入ル大和町21-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002911, 135.773204); cross-checked: GSI 京都府京都市東山区大和町21番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B498923616/', R + 'B510811218/'],
    price_note: 'Prices from 2025 reviews; ¥550 charge extra.', last_checked: TODAY, items: [
      it('', '', 'Lunch: appetizers and a choice of pasta', 'about ¥2,000', 'Lunch', 'no', 'ask', 'January 2025.', 'pasta_lunch'),
      it('', '', 'Course with a drink and coffee or tea', '¥4,000s', 'Courses', 'no', 'no', 'July 2025.', 'course'),
      it('', '', 'Charge', '¥550', 'Charges', '', '', 'Tabelog.', 'charge'),
    ] }, {
    cuisine: '旬の京野菜と豊富なワインの隠れ家のイタリアンバル (食べログ)・前菜と3種から選ぶパスタの昼、約2,000円 (2025年1月)・ドリンクとコーヒーか紅茶付きの4,000円台のコース (2025年7月)・一品: 生ハム、Yoro pork のハム、レバーパテ、フォアグラのテリーヌ、アヒージョ、ムール貝の白ワイン蒸し、ラムチョップ、ピザ、パスタ (2025〜2026年)・自家製の漬物と梅酒 (2026年9月)',
    neighborhood: '四条の南、大和大路の東の祇園。京阪祇園四条から徒歩4分',
    gf_detail: 'グルテンフリーではない。パスタ、ピザ、パンが中心。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。旬の京野菜、ビーツのマリネ、自家製の漬物もあるが、多くはチーズ、クリーム、ハム、魚介を使う (食べログ、2025〜2026年の口コミ)。',
    notes: '[イタリアンバル・大和大路の祇園、14時から] 1階はカウンター、2階はソファの祇園の小さな隠れ家イタリアン。京野菜のパスタやピザ、レバーパテ、アヒージョ、ラムチョップに良いワイン。昼の14時から開き、南座の帰りにも便利。チャージ550円、月曜定休。',
  });
}

// ================================================================ 先斗町 八十八
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26015834/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:30']);
  put({
    id: 'kyoto_pontocho_yasohachi', name: '先斗町 八十八 (Pontocho Yasohachi)', category: 'OMNI',
    lat: 35.006652, lng: 135.771002, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori with salt or a thick soy-based tare, chicken wings, lotus-root tsukune, nama-fu and yuba dengaku; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Nama-fu dengaku and yuba with yuzu miso appear, but miso and tare ingredients are not described (2025–2026 reviews).',
    hours_raw: '17:00–23:30 (L.O. 22:30) daily (Tabelog). Reservations accepted — advised on holiday weekends (July 2025). Cards (Tabelog). 48 seats with private tatami rooms for 2–10 on the second floor (Tabelog; January and July 2025). English menu (April 2026). On Pontocho south of Sanjo, 5 min from Keihan Sanjo or Hankyu Kawaramachi (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho south of Sanjo — 5 min from Keihan Sanjo',
    cuisine: 'A Pontocho yakitori house with tatami rooms upstairs (2025–2026 reviews) · yakitori — negima, momo, seseri, sunagimo with salt; heart, bonjiri, skin; liver with tare (2025–2026) · lotus-root tsukune with a thick soy tare (April and October 2026) · fried chicken wings; enoki with cheese; shrimp with tartar (2025–2026) · nama-fu dengaku; yuba with yuzu-miso dengaku (July 2025, July 2026) · local sake (April 2026)',
    website: null, gmaps: gm('先斗町 八十八 焼き鳥'), menu_url: null,
    notes: '[Yakitori · Pontocho south of Sanjo, tatami rooms] A lively yakitori house on Pontocho with tatami rooms upstairs: firm, juicy skewers with salt or a thick soy tare, a crunchy lotus-root tsukune, chicken wings and Kyoto touches such as nama-fu and yuba dengaku, with local sake. English menu; book on busy weekends.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe a long-running, casual yakitori spot in Pontocho, reasonable for the area (January 2025), with an English menu (April 2026).',
      philosophy: null, specialty: 'Lotus-root tsukune; liver with tare.',
      anecdotes: [
        { text: 'A January 2025 diner loved the liver skewers with tare and ate five alone.', source: R + 'B498546736/' },
        { text: 'A July 2025 nama-fu fan ordered three more sticks of the dengaku.', source: R + 'B510969805/' },
      ],
      japanese_sources_summary: '食べログ: 先斗町 八十八、焼き鳥・串焼き・居酒屋、中京区先斗町通三条下ル下樵木町192、京阪三条駅・阪急河原町駅から徒歩5分、毎日17:00〜23:30 (L.O.22:30)、カード可、48席、2〜10名の座敷の個室。口コミ (2025〜2026年、英語): ねぎま、もも、せせり、砂肝の塩、ハツ、ぼんじり、皮、レバーのたれ、れんこんつくね (濃い醤油のたれ)、手羽先の唐揚げ、えのきチーズ、海老のタルタル、生麩田楽、湯葉の柚子味噌田楽、地酒、英語メニューあり、2階は座敷、連休は予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B496829455/', R + 'B498540083/', R + 'B498546736/', R + 'B510969805/', R + 'B513242252/', R + 'B526953229/', R + 'B530661498/', R + 'B531926650/', R + 'B537494010/'] },
    cultural_comfort: { level: 'english', note: 'English menu (April 2026); tatami rooms upstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通三条下ル下樵木町192',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006652, 135.771002); cross-checked: GSI 京都府京都市中京区下樵木町192番地 (lot) 41m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537494010/', R + 'B531926650/'],
    price_note: 'No prices read; reviewers spend ¥3,000–10,000.', last_checked: TODAY, items: [
      it('', '', 'Lotus-root tsukune with tare', '', 'Yakitori', 'ask', 'no', 'April and October 2026.', 'renkon_tsukune'),
      it('', '', 'Yakitori with salt (negima, momo, seseri, sunagimo)', '', 'Yakitori', 'ask', 'no', 'October 2026.', 'shio'),
      it('生麩田楽', 'namafu dengaku', 'Nama-fu dengaku', '', 'Kyoto dishes', 'no', 'ask', 'July 2025.', 'namafu'),
    ] }, {
    cuisine: '2階に座敷のある先斗町の焼き鳥屋 (2025〜2026年の口コミ)・焼き鳥: ねぎま、もも、せせり、砂肝は塩で、ハツ、ぼんじり、皮、レバーはたれ (2025〜2026年)・濃い醤油だれのれんこんつくね (2026年4月・10月)・手羽先の唐揚げ、えのきチーズ、海老のタルタル (2025〜2026年)・生麩田楽、湯葉の柚子味噌田楽 (2025年7月、2026年7月)・地酒 (2026年4月)',
    neighborhood: '三条の南の先斗町。京阪三条から徒歩5分',
    gf_detail: '要確認。塩や濃い醤油だれの焼き鳥、手羽先、れんこんつくね、生麩や湯葉の田楽。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。生麩田楽や湯葉の柚子味噌田楽もあるが、味噌やたれの材料は書かれていない (2025〜2026年の口コミ)。',
    notes: '[焼き鳥・三条の南の先斗町、座敷] 2階に座敷のある先斗町のにぎやかな焼き鳥屋。塩か濃い醤油だれの歯ごたえのある串、シャキッとしたれんこんつくね、手羽先、生麩や湯葉の田楽などの京都らしい品と地酒。英語メニューあり、週末は予約を。',
  });
}

// ================================================================ 焼肉匠 覚王木屋町亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26022710/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '07:00']);
  put({
    id: 'kyoto_yakiniku_kakuo_kiyamachi', name: '焼肉匠 覚王木屋町亭 (Yakiniku Sho Kakuo Kiyamachi-tei)', category: 'OMNI',
    lat: 35.007068, lng: 135.769935, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagyu yakiniku with sauces, tongue sashimi and yukhoe, stone-grilled bibimbap, egg soup; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Wagyu yakiniku restaurant (Tabelog; reviews).',
    hours_raw: '18:00–7:00 (L.O. 6:00) daily, open year-round (Tabelog). Reservations accepted; banquets up to 25 (Tabelog). Cards (Visa, Master, UnionPay), e-money and QR payments including Alipay and WeChat Pay (Tabelog). 35 seats in private rooms of various sizes with smokeless grills (Tabelog; October 2026). Between Kawaramachi and Kiyamachi south of Sanjo, 5 min from Hankyu Kawaramachi or Keihan Sanjo (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Between Kawaramachi and Kiyamachi, south of Sanjo',
    cuisine: 'Private-room yakiniku of high-grade Wagyu, open through the night (Tabelog) · e.g. beef-tongue sashimi ¥1,400, Kuroge Wagyu tongue yukhoe ¥1,680, Wagyu yaki-shabu ¥1,950, premium kalbi ¥2,490, harami ¥1,590, Omi beef chuck tender ¥2,490, heart ¥690, pork kalbi ¥650, grilled vegetables ¥890, seared Wagyu sushi ¥1,000, egg soup ¥650, stone-grilled cheese bibimbap ¥980 (September 2026) · thick-cut tongue with white leek and lemon; Kakuo premium assortment; Wagyu shabu-shabu (October 2026) · steamed pork; makgeolli (August–September 2026) · highballs ¥750–825 (September–October 2026)',
    website: null, gmaps: gm('焼肉匠 覚王木屋町亭'), menu_url: TB + 'dtlmenu/',
    notes: '[Yakiniku · Kiyamachi south of Sanjo, private rooms until 7:00] A Wagyu yakiniku house of private rooms with smokeless grills, open from 18:00 until 7:00: thick-cut tongue, tongue sashimi and yukhoe, yaki-shabu with egg-yolk sauce, Omi beef, heart and stone-grilled bibimbap, at mid-range prices. Open every day.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes elegant private rooms with smokeless grills and high-grade Wagyu presented with “Kyoto elegance”. Reviewers note signed celebrity photos (September 2026) and friendly staff (October 2026).',
      philosophy: null, specialty: 'Wagyu yaki-shabu; thick-cut tongue.',
      anecdotes: [
        { text: 'A September 2026 regular came in on a third stop of the night for heart and makgeolli.', source: R + 'B536260018/' },
        { text: 'An October 2026 trio chose it for the private rooms, to talk in peace.', source: R + 'B537246856/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉匠 覚王木屋町亭、焼肉・牛タン・居酒屋、中京区河原町三条下ル2丁目東入北車屋町266-1、阪急河原町駅・京阪三条駅から徒歩5分、毎日18:00〜翌7:00 (L.O.6:00)、年中無休、予約可 (宴会は25名まで)、カード・電子マネー・QR決済可、35席、無煙ロースターの個室。口コミ (2026年、英語): 牛タン刺し1,400円、黒毛和牛タンユッケ1,680円、焼きしゃぶ1,950円、上カルビ2,490円、ハラミ1,590円、近江牛のミスジ2,490円、ハツ690円、豚カルビ650円、焼き野菜890円、炙り寿司1,000円、玉子スープ650円、石焼チーズビビンバ980円、厚切りタン、覚王の上焼肉盛り合わせ、和牛しゃぶしゃぶ、蒸し豚、マッコリ、ハイボール750〜825円、有名人のサイン。',
      confidence: 'medium', sources: [TB, R + 'B535985303/', R + 'B536260018/', R + 'B536632589/', R + 'B536892091/', R + 'B537246061/', R + 'B537246856/', R + 'B537853281/', R + 'B537858052/', R + 'B538163194/', R + 'B538447778/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; open all night.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町三条下ル2丁目東入北車屋町266-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007068, 135.769935); cross-checked: GSI 京都府京都市中京区北車屋町266番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536632589/'],
    price_note: 'Prices from a September 2026 review, tax included.', last_checked: TODAY, items: [
      it('', '', 'Kuroge Wagyu yaki-shabu', '¥1,950', 'Yakiniku', 'ask', 'no', 'September 2026.', 'yakishabu'),
      it('', '', 'Premium Kuroge Wagyu kalbi', '¥2,490', 'Yakiniku', 'ask', 'no', 'September 2026.', 'kalbi'),
      it('', '', 'Beef-tongue sashimi', '¥1,400', 'Raw', 'ask', 'no', 'September 2026.', 'tan_sashi'),
      it('', '', 'Stone-grilled cheese bibimbap', '¥980', 'Rice', 'ask', 'no', 'September 2026.', 'bibimbap'),
    ] }, {
    cuisine: '上質な和牛の個室焼肉、夜通し営業 (食べログ)・牛タン刺し1,400円、黒毛和牛タンユッケ1,680円、焼きしゃぶ1,950円、上カルビ2,490円、ハラミ1,590円、近江牛のミスジ2,490円、ハツ690円、豚カルビ650円、焼き野菜の盛り合わせ890円、和牛の炙り寿司1,000円、玉子スープ650円、石焼チーズビビンバ980円 (2026年9月)・白髪ねぎとレモンの厚切りタン、覚王の上焼肉盛り合わせ、和牛しゃぶしゃぶ (2026年10月)・蒸し豚、マッコリ (2026年8〜9月)・ハイボール750〜825円 (2026年9〜10月)',
    neighborhood: '三条の南、河原町と木屋町のあいだ',
    gf_detail: '要確認。たれの和牛焼肉、タン刺しやユッケ、石焼ビビンバ、玉子スープ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。和牛の焼肉の店 (食べログ、口コミ)。',
    notes: '[焼肉・三条の南の木屋町、朝7時まで個室] 無煙ロースターの個室だけの和牛焼肉の店で、18時から朝7時まで。厚切りタン、タン刺しやユッケ、卵黄だれの焼きしゃぶ、近江牛、ハツ、石焼ビビンバを手頃な値段で。年中無休。',
  });
}

save();
