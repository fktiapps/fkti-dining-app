// Osaka sweep (2-mile circle around Dotonbori), batch 143 — mom / small-shop phase (all OMNI).
//   + アルバロンガ (Italian on 2F of Unagidani Block: chilled snow-crab capellini lunch course; Higashi-Shinsaibashi)
//   + 循誠 (reservation-only innovative counter behind a hidden door, formerly Karato; same building as Albalonga)
//   + ビストロ＆バー ヴィスコ (11-seat bistro and wine bar of 21 years: quiche, foie gras omelette, galette; by Nagahoribashi)
//   + 心斎橋東 焼とりporc (basement yakitori with sashimi and beef dishes; next lot to Sosaku Chuka Enishi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 143);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ アルバロンガ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27009401/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.albalonga-italian.com/albalonga/';
  const D = day(['11:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'osaka_albalonga_higashishinsaibashi', name: 'アルバロンガ (ALBALONGA)', category: 'OMNI',
    lat: 34.674643, lng: 135.502489, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta; bread; fried hamo and cutlet.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: snow crab, shrimp, hamo, karasumi and pork; desserts likely with dairy — ask.',
    hours_raw: 'Tue–Sat 11:00–15:00 (last order food 13:30) and 17:30–22:00 (last order food 20:30); closed Sun and Mon (Tabelog). Lunch courses by reservation (2026). Cards and PayPay accepted; no e-money (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-19-15, Unagidani Block 2F — 2 min from Shinsaibashi Stn',
    cuisine: 'Italian courses · lunch course with a drink ¥5,200: assorted antipasti and bread with olive oil; the signature chilled capellini with snow crab and fruit tomato; a main of Mochi pork or fried hamo; dessert plate · dinner course: e.g. long shrimp, a cutlet, hamo and karasumi pasta · wines incl. Sardinian Vermentino · 19 seats',
    website: OWN, gmaps: gm('アルバロンガ'), menu_url: null,
    notes: "[Italian · refined Italian with a chilled snow-crab capellini, Higashi-Shinsaibashi] A popular second-floor Italian restaurant two minutes from Shinsaibashi, known for a delicately flavored, carefully built cooking that rewards slow attention. Lunch is the easy way in: four courses with a drink for ¥5,200, starting with antipasti and bread, then the signature chilled capellini, where the acidity of fruit tomato meets the richness of snow crab, then Mochi pork or fried hamo, then dessert. Dinner courses run to dishes like hamo and karasumi pasta, matched with Sardinian Vermentino. One diner found the baguette hard. Reserve for lunch. Closed Sundays and Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Italian restaurant (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Italian courses; chilled snow-crab capellini.',
      anecdotes: [
        { text: '"The acidity of the fruit tomatoes and the richness of the snow crab created a perfect balance. The extremely thin pasta, \'Capellini,\' had a smooth yet chewy texture…" — September 2026, lunch course with a drink, ¥5,200.', source: R + 'B536309427/' },
        { text: '"Each dish had a delicate flavor, and while it initially felt a bit lacking… as I continued eating, the rich flavors gradually emerged!" — October 2026, lunch course.', source: R + 'B537548374/' },
      ],
      japanese_sources_summary: '食べログ: アルバロンガ、大阪市中央区東心斎橋1-19-15 Unagidani Block 2F、心斎橋駅から徒歩2分、火〜土 11:00〜15:00 (L.O. 料理13:30)・17:30〜22:00 (L.O. 料理20:30)、日・月休み、カード・PayPay 可、電子マネー不可、19席、公式サイトあり。口コミ(2026年9〜10月): ビル2階の人気のイタリアン、ドリンク1杯付きの昼のコース5,200円 (前菜の盛り合わせとパンとオリーブオイル、看板のズワイガニとフルーツトマトの冷製カッペリーニ、メインはMochi の豚かhamo のフリット、デザートの盛り合わせ)、夜のコース (長い海老、カツレツ、hamo と karasumi のパスタ)、サルデーニャの Vermentino、繊細で丁寧な味付け、バゲットが硬いという声、昼は予約を。',
      confidence: 'medium', sources: [TB, OWN, R + 'B534872560/', R + 'B536309427/', R + 'B536785824/', R + 'B537010101/', R + 'B537548374/', R + 'B537627064/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses; reserve for lunch (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-19-15 Unagidani Block 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目19番15号 (go) 11m; same building as Junsei, which is offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536309427/', R + 'B537010101/'],
    price_note: 'Lunch price from a September 2026 review; dinner course price not given.', last_checked: TODAY, items: [
      it('', '', 'Lunch course with a drink (antipasti, chilled capellini, main, dessert)', '¥5,200', 'Courses', 'no', 'no', 'September 2026.', 'lunch'),
      it('', '', 'Chilled capellini with snow crab and fruit tomato', '', 'Pasta', 'no', 'no', 'September–October 2026.', 'capellini'),
      it('', '', 'Hamo and karasumi pasta', '', 'Pasta', 'no', 'no', 'October 2026.', 'hamo_karasumi'),
      it('', '', 'Dinner course', '', 'Courses', 'no', 'no', 'October 2026.', 'dinner'),
    ] }, {
    cuisine: 'イタリアンのコース・ドリンク1杯付きの昼のコース5,200円: 前菜の盛り合わせとオリーブオイルのパン、看板のズワイガニとフルーツトマトの冷製カッペリーニ、メインはMochi の豚かhamo のフリット、デザートの盛り合わせ・夜のコース: たとえば長い海老、カツレツ、hamo と karasumi のパスタ・サルデーニャの Vermentinoなどのワイン・19席',
    neighborhood: '中央区東心斎橋1-19-15 Unagidani Block 2F。心斎橋駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。パスタ、パン、hamo のフリットとカツレツ。',
    vegan_detail: 'ヴィーガンではありません。ズワイガニ、海老、hamo、karasumi、豚肉。デザートは乳製品を使っていそうなので確認を。',
    notes: '[イタリアン・東心斎橋、ズワイガニの冷製カッペリーニが看板の端正なイタリアン] 心斎橋から2分、ビル2階の人気のイタリアンで、繊細でていねいな料理は味わうほどに良さがわかる。入りやすいのは昼: ドリンク付きの4品5,200円で、前菜とパン、看板の冷製カッペリーニ (フルーツトマトの酸味とズワイガニのコク)、Mochi の豚かhamo のフリット、デザート。夜のコースはhamo と karasumi のパスタなどにサルデーニャの Vermentinoを合わせて。バゲットが硬いという声も。昼は予約を。日・月曜休み。',
  });
}

// ================================================================ 循誠
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27113963/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.ykarato.com';
  const D = day(['12:00', '15:00'], ['18:00', '21:00']);
  put({
    id: 'osaka_junsei_higashishinsaibashi', name: '循誠 (Junsei)', category: 'OMNI',
    lat: 34.674544, lng: 135.50244, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade pasta and bread; brioche; curry with a pork cutlet.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, jamón, beef and pheasant throughout; sea urchin; Comté.',
    hours_raw: 'Tue–Sun and public holidays, reservation only, lunch from 12:00 and dinner from 18:00; closed Mon except private bookings (Tabelog). Dislikes asked in advance (March 2026). Cards accepted; no e-money or QR (Tabelog). Formerly Karato (July 2026 review).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-19-15, Unagidani Block 1F–2F, behind an intercom door — 3 min from Shinsaibashi Stn exit 2',
    cuisine: 'Innovative, genre-free courses · special omakase course ¥22,000, built daily on the best ingredients: appetizers such as caviar with karasumi, lotus-root chips, kensaki squid and shiso; aged wagyu tartare on homemade bread; fried bone-in Daisendori chicken with honey and red-wine gastrique; fish marinated in aged Shaoxing wine; 48-month Iberico bellota jamón sliced in front of you · corn soup · homemade hand-rolled pasta (e.g. crab and sweet shrimp; asparagus and clams) · sea urchin on brioche · pheasant soup · charcoal-finished mahata · chateaubriand with tuna soup · European-style beef curry with a Kobe pork cutlet · a choice of five desserts, e.g. Mont Blanc or a vegetable dessert of celeriac mousse and burdock caramel · fruit juices (pear, melon, peach) as a non-alcoholic pairing · 8–10 counter seats, tatami, shoes off',
    website: OWN, gmaps: gm('循誠'), menu_url: null,
    notes: "[Innovative · a hidden-door counter of genre-free courses, Higashi-Shinsaibashi] Ring the intercom at a hidden door, climb to the second floor, take off your shoes and step into a modern Japanese room with tatami and a counter of about ten. Formerly Karato, now Junsei, it serves one omakase course (¥22,000) set each day by the ingredients: caviar layered with karasumi, aged wagyu tartare, 48-month Iberico jamón sliced at the counter, a fresh corn soup, homemade pasta, sea urchin on brioche, then a charcoal-finished fish and a beef curry with a Kobe pork cutlet. Choose your dessert from five; fruit juices such as pear and melon make a non-alcoholic pairing. Dishes are explained carefully. Reservation only; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 2 August 2019 (Tabelog); renamed from Karato to Junsei (July 2026 review).', background: 'Reservation-only innovative counter (Tabelog; 2026 reviews).', philosophy: 'The menu is decided by the day\'s ingredients, each cooked the best way for it (September 2026 review).', specialty: 'Genre-free omakase course.',
      anecdotes: [
        { text: '"Entering this restaurant begins with a playful touch, as you press the intercom of a hidden door. Located on the second floor, the interior features a modern Japanese space with tatami flooring." — June 2026.', source: R + 'B507066270/' },
        { text: '"First, I was amazed by the freshly sliced jamón【Real Bellota】 right in front of me… The four appetizers… were all presented with exceptional flair." — September 2026.', source: R + 'B535574216/' },
      ],
      japanese_sources_summary: '食べログ: 循誠、大阪市中央区東心斎橋1-19-15 UNAGIDANI BLOCK 1F.2F、心斎橋駅2番出口から徒歩3分、火〜日・祝 完全予約制で昼12:00〜・夜18:00〜、月休み (貸切は可)、カード可、電子マネー・QR不可、2019年8月2日開店、公式サイトあり。口コミ(2026年3〜9月): 以前の店名は Karato、隠し扉のインターホン、2階で靴を脱ぐ、畳の和モダンな空間、カウンター8〜10席、スペシャルおまかせコース22,000円、その日の食材で決める、前菜 (キャビアと karasumi、れんこんチップス、Kensaki のイカ、大葉)、熟成和牛のタルタルと自家製パン、Daisen の鶏の骨付きkara-ageとはちみつと赤ワインビネガーのgastrique、熟成紹興酒でマリネした魚、目の前で切る48か月熟成のIberico bellota の生ハム、とうもろこしのスープ、自家製の手延べパスタ、ウニのブリオッシュ、キジのスープ、炭火で仕上げたMahata、シャトーブリアンとマグロのスープ、神戸の豚のカツをのせた欧風ビーフカレー、5種から選ぶデザート (モンブラン、根セロリのムースとごぼうのキャラメルの野菜デザート)、梨・メロン・桃のジュース、苦手なものは事前に、ていねいな説明。',
      confidence: 'medium', sources: [TB, OWN, R + 'B507066270/', R + 'B508703540/', R + 'B525384297/', R + 'B532137396/', R + 'B535406132/', R + 'B535574216/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; dislikes asked in advance; dishes explained (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-19-15 UNAGIDANI BLOCK 1F.2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB} (34.674607, 135.50244); same building as Albalonga (osaka_albalonga_higashishinsaibashi), pin offset ~7 m south so the two do not stack; GSI 大阪府大阪市中央区東心斎橋一丁目19番15号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B508703540/', R + 'B535574216/'],
    price_note: 'Course price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Special omakase course', '¥22,000', 'Courses', 'no', 'no', 'September 2026.', 'omakase'),
      it('', '', 'Fruit juice pairing (pear, melon, peach)', '', 'Drinks', 'ask', 'ask', 'September 2026.', 'juice'),
    ] }, {
    cuisine: 'ジャンルにとらわれないイノベーティブのコース・その日の最良の食材で組むスペシャルおまかせコース22,000円: キャビアと karasumi、れんこんチップス、Kensaki のイカ、大葉などの前菜、自家製パンにのせた熟成和牛のタルタル、Daisen の鶏の骨付きkara-ageとはちみつと赤ワインビネガーのgastrique、熟成紹興酒でマリネした魚、目の前で切る48か月熟成のIberico bellota の生ハム・とうもろこしのスープ・自家製の手延べパスタ (カニと甘エビ、アスパラと貝など)・ウニのブリオッシュ・キジのスープ・炭火で仕上げたMahata・シャトーブリアンとマグロのスープ・神戸の豚のカツをのせた欧風ビーフカレー・5種から選ぶデザート (モンブラン、根セロリのムースとごぼうのキャラメルの野菜デザートなど)・ノンアルコールのペアリングに梨、メロン、桃のジュース・カウンター8〜10席、畳、靴を脱いで',
    neighborhood: '中央区東心斎橋1-19-15 UNAGIDANI BLOCK 1F・2F、インターホンの扉の奥。心斎橋駅2番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。自家製のパスタとパン、ブリオッシュ、豚カツのカレー。',
    vegan_detail: 'ヴィーガンではありません。魚介、生ハム、牛肉、キジばかり、ウニ、コンテ。',
    notes: '[イノベーティブ・東心斎橋、隠れた扉の奥のジャンルにとらわれないコース] 隠し扉のインターホンを押し、2階に上がって靴を脱ぐと、畳の和モダンな空間に10席ほどのカウンター。以前は Karato、今は循誠で、その日の食材で決めるおまかせコース (22,000円) ひとつ: karasumi を重ねたキャビア、熟成和牛のタルタル、カウンターで切る48か月熟成のイベリコの生ハム、とれたてのとうもろこしのスープ、自家製パスタ、ウニのブリオッシュ、炭火で仕上げた魚、神戸の豚のカツをのせたビーフカレー。デザートは5種から選べ、梨やメロンのジュースでノンアルコールのペアリングも。料理の説明はていねい。完全予約制、月曜休み。',
  });
}

// ================================================================ ビストロ＆バー ヴィスコ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27012156/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:00', '23:00']); const B = day(['17:00', '02:00']);
  put({
    id: 'osaka_bistro_bar_visco_higashishinsaibashi', name: 'ビストロ＆バー ヴィスコ (BISTRO&BAR VISCO)', category: 'OMNI',
    lat: 34.673377, lng: 135.505418, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: quiche pastry; pasta; cutlet; galette (ask whether it is buckwheat-only).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: foie gras, shirako, carpaccio and prosciutto; cheese and egg.',
    hours_raw: 'Mon, Thu, Sun 17:00–23:00; Fri–Sat 17:00–02:00; closed Tue–Wed (Tabelog). Counter only; reserve (2025–2026). Table charge ¥450 (Tabelog). Cards and e-money accepted; no QR (Tabelog).',
    hours: { 0: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-4-23, just south of Nagahori-dori, behind a narrow, easy-to-miss entrance — 1 min from Nagahoribashi Stn',
    cuisine: 'Bistro and wine bar, à la carte · amuse of pumpkin soup (chilled in summer) and pâté · assorted appetizers · carpaccio, marinated fish · caprese · quiche of the day · foie gras omelette · sautéed shirako in season · prosciutto, karasumi · cutlet · porcini pasta · galette · wines chosen to your taste (e.g. Muscadet, Chablis) · ¥450 table charge · 11 counter seats',
    website: null, gmaps: gm('ビストロ＆バー ヴィスコ'), menu_url: null,
    notes: "[Bistro · a tiny counter bistro and wine bar of 21 years, by Nagahoribashi] An eleven-seat counter behind a narrow, easy-to-miss door just south of Nagahori-dori, celebrating its 21st year in 2026, that eats like a cozy bistro rather than a bar. Seasonal à la carte dishes run from a pumpkin soup amuse and assorted appetizers to carpaccio, a foie gras omelette, quiche of the day, a chewy galette, a cutlet and porcini pasta, each fresh and homemade in feel. Tell the staff what you like and two wines come out to choose from. A good second stop, open until 2:00 on Fridays and Saturdays. ¥450 table charge; reserve. Closed Tuesdays and Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: '21st anniversary in 2026 (June 2026 review).', background: 'Counter bistro and wine bar (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Seasonal bistro dishes with wine.',
      anecdotes: [
        { text: '"With only a counter that accommodates about 8 people, it offers a delightful selection of seasonal ingredients in a la carte dishes, ranging from appetizers to mains and salads." — October 2026, quiche, carpaccio, caprese, foie gras omelette, galette.', source: R + 'B420372806/' },
        { text: '"First, I tried the cold pumpkin soup served as an appetizer, and it was genuinely tasty… there\'s a great balance of rustic charm and skillful use of ingredients…" — August 2026.', source: R + 'B533799140/' },
      ],
      japanese_sources_summary: '食べログ: ビストロ＆バー ヴィスコ、大阪市中央区東心斎橋1-4-23、長堀橋駅から徒歩1分、月・木・日 17:00〜23:00、金・土 17:00〜翌2:00、火・水休み、チャージ料450円、カード・電子マネー可、QR不可、カウンター11席。口コミ(2025年10月〜2026年10月): 長堀通のすぐ南、見落としそうな細い入口、2026年で21周年、季節の食材のアラカルト、お通しのかぼちゃのスープ (夏は冷製) とパテ、前菜の盛り合わせ、カルパッチョ、魚のマリネ、カプレーゼ、本日のキッシュ、フォアグラのオムレツ、shirakoのソテー、生ハム、karasumi、カツレツ、ポルチーニのパスタ、もちもちのガレット、好みを伝えると2種のワインを出してくれる (Muscadet、Chablis)、気さくな店の人、二軒目にも、予約を。',
      confidence: 'medium', sources: [TB, R + 'B420372806/', R + 'B515421981/', R + 'B518942324/', R + 'B524357056/', R + 'B533562734/', R + 'B533799140/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter; staff suggest wines to taste (October 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-4-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目4番23号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B420372806/', R + 'B515421981/', R + 'B533799140/'],
    price_note: 'No dish prices in the reviews; JPY 5,000–7,999 average (Tabelog); ¥450 table charge.', last_checked: TODAY, items: [
      it('', '', 'Assorted appetizers', '', 'Starters', 'no', 'no', 'October 2025–December 2025.', 'antipasto'),
      it('', '', 'Carpaccio', '', 'Starters', 'ask', 'no', 'October 2026.', 'carpaccio'),
      it('', '', 'Quiche of the day', '', 'Dishes', 'no', 'no', 'October 2026.', 'quiche'),
      it('', '', 'Foie gras omelette', '', 'Dishes', 'ask', 'no', 'October 2026.', 'foie_omelette'),
      it('', '', 'Galette', '', 'Dishes', 'ask', 'no', 'October 2026.', 'galette'),
      it('', '', 'Porcini pasta', '', 'Pasta', 'no', 'no', 'October 2025.', 'porcini'),
    ] }, {
    cuisine: 'ビストロとワインバー、アラカルト・お通しのかぼちゃのスープ (夏は冷製) とパテ・前菜の盛り合わせ・カルパッチョ、魚のマリネ・カプレーゼ・本日のキッシュ・フォアグラのオムレツ・季節のshirakoのソテー・生ハム、karasumi・カツレツ・ポルチーニのパスタ・ガレット・好みに合わせて選ぶワイン (Muscadet、Chablisなど)・チャージ料450円・カウンター11席',
    neighborhood: '中央区東心斎橋1-4-23、長堀通のすぐ南、見落としそうな細い入口。長堀橋駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。キッシュの生地、パスタ、カツレツ、ガレット (そば粉だけか確認を)。',
    vegan_detail: 'ヴィーガンではありません。フォアグラ、shirako、カルパッチョ、生ハム、チーズと卵。',
    notes: '[ビストロ・長堀橋近く、21年続く小さなカウンターのビストロ兼ワインバー] 長堀通のすぐ南、見落としそうな細い扉の奥にあるカウンター11席の店で、2026年で21年目、バーというより居心地のいいビストロ。季節のアラカルトは、かぼちゃのスープのお通しと前菜の盛り合わせから、カルパッチョ、フォアグラのオムレツ、本日のキッシュ、もちもちのガレット、カツレツ、ポルチーニのパスタまで、どれも新鮮で手づくりの温かみがある。好みを伝えれば2種のワインから選ばせてくれる。二軒目にもよく、金・土は深夜2時まで。チャージ450円、予約を。火・水曜休み。',
  });
}

// ================================================================ 心斎橋東 焼とりporc
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27102463/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_yakitori_porc_higashishinsaibashi', name: '心斎橋東 焼とりporc (Shinsaibashi Higashi Yakitori porc)', category: 'OMNI',
    lat: 34.674313, lng: 135.50326, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tare on some skewers; kara-age; soy and ponzu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, beef and sashimi; egg and dashi in the rice bowl.',
    hours_raw: 'Daily 17:00–23:00; closing days not fixed (Tabelog). Reserve at busy times; order on your phone (October 2026). Cards and PayPay accepted; no e-money (Tabelog).',
    hours: ALL(day(['17:00', '23:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-18-1, BEST PLAZA B1F, at the Unagidani-minami-dori and Sankyubashi-suji corner — 1 min from Shinsaibashi Stn',
    cuisine: 'Yakitori with sashimi and beef · large, juicy skewers, two per order, seasoned by the kitchen: seseri, liver, tsukune and more · big shiitake, shishito · sashimi platter with soy, ponzu and condiments · beef dishes · kara-age on a bamboo leaf · chicken and egg rice bowl with dashi to finish · complimentary pickles as a palate cleanser · sake in clear ochoko · courses with all-you-can-drink · 4 counter seats and 11 at tables',
    website: null, gmaps: gm('心斎橋東 焼とりporc'), menu_url: null,
    notes: "[Yakitori · a basement yakitori with sashimi and beef, Higashi-Shinsaibashi] A cozy, hidden-feeling basement yakitori a minute from Shinsaibashi, open since 2017, with a sister shop in Namba. Skewers come large and juicy, two at a time, seasoned the way the kitchen thinks best; the seseri and liver are standouts, and one diner wished for more of the big shiitake. Beyond yakitori there's a fresh sashimi platter with several dipping options, beef dishes and kara-age served on a bamboo leaf; finish with a chicken-and-egg rice bowl in dashi. A pickle palate cleanser comes unasked. Order on your phone; staff explain the menu warmly. Reserve at busy times. Courses with all-you-can-drink for groups.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 December 2017 (Tabelog); has a Namba branch (June 2026 review).', background: 'Yakitori izakaya (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Yakitori; sashimi; beef dishes.',
      anecdotes: [
        { text: '"The chicken neck (seseri) was amazing… The seasoning for the skewers is chosen by the restaurant…" — October 2026.', source: R + 'B538061316/' },
        { text: '"The grilling is perfect, and the meat is so juicy! The tsukune (chicken meatball) was delicious, but the liver was exceptional!" — September 2026.', source: R + 'B535663628/' },
      ],
      japanese_sources_summary: '食べログ: 心斎橋東 焼とりporc、大阪市中央区東心斎橋1-18-1 BEST PLAZA B1F、心斎橋駅から徒歩1分、うなぎ谷南通と三休橋筋の交差点、毎日17:00〜23:00、定休日不定、カード・PayPay 可、電子マネー不可、13席 (カウンター4、テーブル11)、2017年12月21日開店。口コミ(2026年6〜10月): 地下の隠れ家のような店、なんば店もある、大きくジューシーな串、2本から、味付けは店におまかせ、seseri、レバー、tsukune、大きなshiitake、shishito、醤油・ポン酢・薬味の刺身の盛り合わせ、牛肉の料理、笹の葉にのせたkara-age、締めのだしの鶏肉と卵の丼、頼まなくても出てくる口直しの漬物、透明なochokoの日本酒、Ume Suisho、飲み放題のコース、スマホで注文、ていねいに説明してくれる親切な店の人、忙しい時間は予約を。',
      confidence: 'medium', sources: [TB, R + 'B531503998/', R + 'B531753649/', R + 'B534785547/', R + 'B535663628/', R + 'B538061316/', R + 'B538122990/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone ordering; staff explain dishes (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-18-1 BEST PLAZA B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (34.67425, 135.50326); next lot to Sosaku Chuka Enishi (osaka_sosaku_chuka_enishi, 1-18-2), pin offset ~7 m north so the two do not stack; GSI 大阪府大阪市中央区東心斎橋一丁目18番1号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538061316/', R + 'B535663628/', R + 'B531753649/'],
    price_note: 'No dish prices in the reviews; JPY 4,000–5,999 per person (Tabelog; 2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Seseri skewers (two)', '', 'Skewers', 'ask', 'no', 'October 2026.', 'seseri'),
      it('', '', 'Liver skewers (two)', '', 'Skewers', 'ask', 'no', 'September 2026.', 'reba'),
      it('', '', 'Big shiitake', '', 'Vegetables', 'ask', 'ask', 'June–October 2026.', 'shiitake'),
      it('', '', 'Sashimi platter', '', 'Sashimi', 'ask', 'no', 'October 2026.', 'sashimi'),
      it('', '', 'Kara-age on a bamboo leaf', '', 'Dishes', 'no', 'no', 'October 2026.', 'karaage'),
      it('', '', 'Chicken and egg rice bowl with dashi', '', 'Rice', 'no', 'no', 'October 2026.', 'oyakodon'),
    ] }, {
    cuisine: '刺身と牛肉もある焼き鳥・大きくジューシーな串、2本から、味付けは店におまかせ: seseri、レバー、tsukuneなど・大きなshiitake、shishito・醤油、ポン酢、薬味で食べる刺身の盛り合わせ・牛肉の料理・笹の葉のkara-age・締めのだしの鶏肉と卵の丼・口直しのサービスの漬物・透明なochokoの日本酒・飲み放題のコース・カウンター4席とテーブル11席',
    neighborhood: '中央区東心斎橋1-18-1 BEST PLAZA B1F、うなぎ谷南通と三休橋筋の角。心斎橋駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。一部の串のたれ、kara-age、醤油とポン酢。',
    vegan_detail: 'ヴィーガンではありません。鶏、牛肉、刺身、鶏肉と卵の丼の卵とだし。',
    notes: '[焼き鳥・東心斎橋、刺身と牛肉もある地下の焼き鳥] 心斎橋から1分、隠れ家のような地下の焼き鳥店で、2017年開店、なんばにも店がある。串は大きくジューシーで2本ずつ、味付けは店のおすすめで。seseriとレバーが際立ち、大きな shiitake をもっと食べたかったという声も。焼き鳥のほかに、つけだれを選べる新鮮な刺身の盛り合わせ、牛肉の料理、笹の葉にのせたkara-age、締めはだしの鶏肉と卵の丼。口直しの漬物は頼まなくても出てくる。注文はスマホで、店の人が親切に説明してくれる。忙しい時間は予約を。団体には飲み放題のコースも。',
  });
}

save();
