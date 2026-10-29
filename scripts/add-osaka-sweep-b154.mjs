// Osaka sweep (2-mile circle around Dotonbori), batch 154 — mom / small-shop phase (all OMNI).
//   + うれしい居酒屋 酒歌 (late-night izakaya of small plates, Thai and Japanese; Shinmachi)
//   + 焼肉 Union (wagyu yakiniku with fresh offal and a wagyu chiritori hot pot; Shinmachi)
//   + conoji (Italian with a U-shaped counter: appetizer-and-pasta lunch sets; Shinmachi)
//   + PRESTAU (12-seat Italian of seasonal courses, desserts in three stages; Shinmachi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 154);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ うれしい居酒屋 酒歌
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27092227/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '02:00']);
  put({
    id: 'osaka_saka_song_shinmachi', name: 'うれしい居酒屋 酒歌 (Ureshii Izakaya Saka Song)', category: 'OMNI',
    lat: 34.676514, lng: 135.490894, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura; khao soi noodles; soy-based small plates.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, tuna and shrimp dishes; the Thai seasonings are not described; snap peas and takuan may be fine — ask.',
    hours_raw: 'Mon–Sat 18:00–02:00; closed Sun (Tabelog). Cash only (Tabelog; June 2026). Smoking allowed (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Shinmachi 2-19-20, Osakaya Nishi-Nagahori Bldg 1F, at the back — near Nishi-Ohashi Stn',
    cuisine: 'Izakaya of small plates, Japanese and Thai · yam woon sen with cilantro · khao soi with shrimp, coconut soup and crispy noodles, rice added to the broth to finish · Chicken Hero · takuan with cream cheese; tuna with tororo · boiled snap peas with salt; salt-grilled yagen nankotsu; mushrooms with anchovy butter; corn tempura · 15 seats: 9 at the counter, 6 on tatami',
    website: null, gmaps: gm('うれしい居酒屋 酒歌'), menu_url: null,
    notes: "[Izakaya · a friendly late-night izakaya of Japanese and Thai small plates, Shinmachi] A cozy, sticker-and-poster-covered izakaya tucked into the back of a building near Nishi-Ohashi, open until 2 am, where a friendly owner makes newcomers feel as welcome as the crowd of returning customers. Plates are small and cheap, so solo diners can try several: a nutty yam woon sen heaped with cilantro, salt-grilled chicken cartilage, mushrooms in anchovy butter, corn tempura. Finish with the khao soi, rich coconut soup with crispy noodles, and add rice to the last of the broth. Cash only; smoking allowed. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Izakaya (Tabelog; 2023–2026 reviews).', philosophy: null, specialty: 'Small plates; khao soi.',
      anecdotes: [
        { text: '"The Khao Soi features a rich coconut soup and crispy noodles that are simply amazing! It comes topped with lime, chili oil, and a mysterious yet tasty seasoning…" — September 2025.', source: R + 'B514651050/' },
        { text: '"The friendly owner provides warm service without any discrimination towards new guests…" — June 2026.', source: R + 'B530881865/' },
      ],
      japanese_sources_summary: '食べログ: うれしい居酒屋 酒歌、大阪市西区新町2-19-20 大阪屋西長堀ビル 1F、西大橋駅から291m、月〜土 18:00〜翌2:00、日曜休み、カード・電子マネー・QR不可、喫煙可、15席 (カウンター9、座敷6)。口コミ(2023年7月〜2026年6月): ビルの奥の小さな居酒屋、ステッカーやポスターだらけの店内、気さくな店主、初めてでも歓迎してくれる、小皿で安く、ひとりでもいろいろ頼める、パクチーたっぷりの yam woon sen、khao soi (海老、ココナッツのスープ、揚げた麺、残りのスープにご飯)、Chicken Hero、takuan とクリームチーズ、マグロの tororo、スナップエンドウの塩茹で、yagen nankotsu の塩焼き、きのこのアンチョビバター焼き、コーンの天ぷら、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B382059782/', R + 'B506310247/', R + 'B513938943/', R + 'B514651050/', R + 'B517800084/', R + 'B530881865/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small portions suit solo diners; newcomers welcomed (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町2-19-20 大阪屋西長堀ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町二丁目19番20号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B506310247/', R + 'B530881865/'],
    price_note: 'No dish prices in the reviews; JPY 2,000–3,999 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Yam woon sen', '', 'Thai', 'ask', 'no', 'May–September 2025.', 'yam'),
      it('', '', 'Khao soi', '', 'Thai', 'no', 'no', 'May–September 2025.', 'khaosoi'),
      it('スナップエンドウの塩茹で', '', 'Boiled snap peas with salt', '', 'Small plates', 'ask', 'ask', 'June 2026.', 'snap'),
      it('', '', 'Salt-grilled yagen nankotsu', '', 'Small plates', 'ask', 'no', 'June 2026.', 'nankotsu'),
      it('', '', 'Corn tempura', '', 'Small plates', 'no', 'ask', 'June 2026.', 'corn'),
    ] }, {
    cuisine: '和とタイの小皿の居酒屋・パクチーの yam woon sen・海老、ココナッツのスープ、揚げた麺の khao soi、締めは残りのスープにご飯・Chicken Hero・takuan とクリームチーズ、マグロの tororo・スナップエンドウの塩茹で、yagen nankotsu の塩焼き、きのこのアンチョビバター焼き、コーンの天ぷら・15席: カウンター9席、座敷6席',
    neighborhood: '西区新町2-19-20 大阪屋西長堀ビル 1F の奥。西大橋駅の近く',
    gf_detail: 'グルテンフリーではありません。天ぷら、khao soi の麺、醤油の小皿。',
    vegan_detail: 'ヴィーガンではありません。鶏、マグロ、海老の料理、タイ料理の調味料は不明。スナップエンドウや takuan は大丈夫かもしれないので確認を。',
    notes: '[居酒屋・新町、和とタイの小皿が楽しい夜遅くまでの居酒屋] 西大橋近く、ビルの奥にあるステッカーやポスターだらけの居心地のいい居酒屋で、深夜2時まで。気さくな店主が、よく来る客にも初めての客にも同じように迎えてくれる。小皿は小さく安いので、ひとりでもいろいろ頼める: パクチーたっぷりの香ばしい yam woon sen、鶏の軟骨の塩焼き、きのこのアンチョビバター焼き、コーンの天ぷら。締めは濃厚なココナッツのスープに揚げた麺の khao soi、残りのスープにご飯を入れて。現金のみ、喫煙可。日曜休み。',
  });
}

// ================================================================ 焼肉 Union
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27132889/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '23:00']);
  put({
    id: 'osaka_yakiniku_union_shinmachi', name: '焼肉 Union (Yakiniku Union)', category: 'OMNI',
    lat: 34.677187, lng: 135.491449, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-based yakiniku sauces and ponzu; cold noodles; yukke sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant; kimchi ingredients not described — ask.',
    hours_raw: 'Mon, Wed–Sun and public holidays 18:00–23:00 (last food order 22:30); closed Tue (Tabelog). Same-day reservations possible (June 2026). Cards, QUICPay and PayPay accepted (Tabelog). Heated tobacco allowed inside (Tabelog).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 2-17-5, Act One Shinmachi 1F, a minute from the Life supermarket — 7 min from Nishi-Ohashi Stn',
    cuisine: 'Wagyu yakiniku with fresh offal · wagyu yukke ¥1,600; wagyu harami sashimi yukke ¥1,600 · special black-haired wagyu tongue ¥3,500 (limited); premium salt tongue ¥2,800 · special harami ¥2,200; special lean ¥1,800; premium lean ¥1,200 · heart sashimi, abu-hatsu, tsurami, mino, kori kori, tongue kalbi · chef\'s assorted platter (say lean or rib) · wagyu chiritori hot pot of lean meat and offal with vegetables, extra cuts can be added · cold noodles ¥800; yukke jang soup ¥800; kimchi ¥800; spicy grated-daikon ponzu ¥400; rice ¥350 · 11 seats: 6 at the counter',
    website: null, gmaps: gm('焼肉 Union'), menu_url: null,
    notes: "[Yakiniku · a stylish wagyu yakiniku with fresh offal, Shinmachi] An eleven-seat yakiniku near Nishi-Ohashi with a stylish room and charming staff, where one diner reported eating well for about ¥10,000 and feeling light afterwards. Start raw with the wagyu yukke or harami sashimi yukke, then grill the tender special harami, lean cuts and thick tongue, and don't skip the fresh offal, such as heart, mino and kori kori. Unsure? Ask for the chef's platter and say lean or rib. The wagyu chiritori hot pot, packed with vegetables, is a cold-night alternative, and the thin, sweet-sour cold noodles make a good finish. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Wagyu yakiniku (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Wagyu yakiniku; fresh offal; chiritori hot pot.',
      anecdotes: [
        { text: '"If you\'re unsure about what to order, I recommend going with the chef\'s assorted platter. Just [say] if you prefer lean cuts or rib cuts…" — June 2026.', source: R + 'B531229890/' },
        { text: '"…here you can add meats and horumon from the regular yakiniku menu to the hot pot, allowing you to customize your own Chiritori Nabe…" — October 2026.', source: R + 'B523943216/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉 Union、大阪市西区新町2-17-5 アクトワン新町 1F、西大橋駅から徒歩7分、Life 西大橋店から1分、月・水〜日・祝 18:00〜23:00 (L.O. 料理22:30)、火曜休み、カード・QUICPay・PayPay 可、加熱式たばこは店内可、11席 (カウンター6、テーブル5)。口コミ(2026年5〜10月): おしゃれな焼肉店、和牛の yukke 1,600円、和牛 harami の刺身の yukke 1,600円、黒毛和牛の特上タン3,500円 (数量限定)、上塩タン2,800円、特上 harami 2,200円、特上赤身1,800円、上赤身1,200円、ハツ刺し、abu-hatsu、tsurami、mino、kori kori、tongue kalbi、おまかせの盛り合わせ (赤身かカルビか伝えて)、和牛の chiritori nabe (赤身とホルモン、野菜、追加もできる)、冷麺800円、yukke jang スープ800円、kimchi 800円、辛いおろしポン酢400円、ご飯350円、ひとり1万円ほど、当日予約も可、感じのいい店の人。',
      confidence: 'medium', sources: [TB, R + 'B523943216/', R + 'B529218190/', R + 'B531229890/', R + 'B531363707/', R + 'B532680836/', R + 'B534639002/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Chef\'s platter on request (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町2-17-5 アクトワン新町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町二丁目17番5号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531363707/'],
    price_note: 'Prices from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Wagyu yukke', '¥1,600', 'Raw', 'no', 'no', 'June 2026.', 'yukke'),
      it('', '', 'Wagyu harami sashimi yukke', '¥1,600', 'Raw', 'no', 'no', 'June 2026.', 'harami_yukke'),
      it('', '', 'Special black-haired wagyu tongue', '¥3,500', 'Grill', 'ask', 'no', 'June 2026; limited.', 'tongue_sp'),
      it('', '', 'Special harami', '¥2,200', 'Grill', 'ask', 'no', 'June 2026.', 'harami'),
      it('', '', 'Special lean', '¥1,800', 'Grill', 'ask', 'no', 'June 2026.', 'lean'),
      it('', '', 'Cold noodles', '¥800', 'Finish', 'no', 'no', 'June 2026.', 'reimen'),
    ] }, {
    cuisine: '新鮮なホルモンもある和牛の焼肉・和牛の yukke 1,600円、和牛 harami の刺身の yukke 1,600円・黒毛和牛の特上タン3,500円 (限定)、上塩タン2,800円・特上 harami 2,200円、特上赤身1,800円、上赤身1,200円・ハツ刺し、abu-hatsu、tsurami、mino、kori kori、tongue kalbi・おまかせの盛り合わせ (赤身かカルビか伝えて)・赤身とホルモンと野菜の和牛の chiritori nabe、好きな肉を追加できる・冷麺800円、yukke jang スープ800円、kimchi 800円、辛いおろしポン酢400円、ご飯350円・11席: カウンター6席',
    neighborhood: '西区新町2-17-5 アクトワン新町 1F、Life のスーパーから1分。西大橋駅から徒歩7分',
    gf_detail: 'グルテンフリーではありません。醤油の焼肉のたれとポン酢、冷麺、yukke のたれ。',
    vegan_detail: 'ヴィーガンではありません。和牛の焼肉店。kimchi の材料は不明なので確認を。',
    notes: '[焼肉・新町、新鮮なホルモンもあるおしゃれな和牛の焼肉] 西大橋近くの11席の焼肉店で、店内はおしゃれ、店の人は感じがよく、ひとり1万円ほどでしっかり食べても胃にもたれないという声。まず和牛の yukke か harami の刺身の yukke から、やわらかい特上 harami、赤身、厚いタンを焼き、ハツや mino、kori kori など新鮮なホルモンも。迷ったらおまかせの盛り合わせを頼み、赤身かカルビかを伝えて。野菜たっぷりの和牛の chiritori nabe は寒い夜に、締めは細く甘酸っぱい冷麺を。火曜休み。',
  });
}

// ================================================================ conoji
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27148020/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '15:00'], ['18:00', '23:00']);
  put({
    id: 'osaka_conoji_shinmachi', name: 'conoji', category: 'OMNI',
    lat: 34.676908, lng: 135.490763, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta at every lunch; bread; tiramisu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat sauces, shellfish and cheese pastas; appetizers vary — ask.',
    hours_raw: 'Mon, Tue, Thu–Sun and public holidays 11:30–15:00 (last order food 14:00) and 18:00–23:00 (last order food 22:00); closed Wed; New Year break (Tabelog). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: LD, 1: LD, 3: LD, 4: LD, 5: LD, 6: LD }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 2-18-19, Sanyo Heights 101 — 3 min from Nishi-Nagahori or Nishi-Ohashi Stn exit 1',
    cuisine: 'Italian with a U-shaped counter · lunch set: a plate of about six appetizers, bread and a choice of two daily pastas, e.g. paccheri with chicken mince and eggplant ragù; tagliatelle with meat sauce; a pecorino, black pepper and garlic pasta; tiramisu and cappuccino extra (about ¥2,000 all in) · evenings: pastas such as summer truffle cream, or tomato with clams and mussels · 20 seats: 14 at the counter',
    website: null, gmaps: gm('conoji'), menu_url: null,
    notes: "[Italian · an Italian with a U-shaped counter, Shinmachi] A calm, stylish Italian near Nishi-Ohashi built around a striking U-shaped counter, with a few tables and a cute chicken-shaped water pitcher. Lunch is a well-priced set: a pretty plate of about six appetizers, bread, then one of two daily pastas, such as chewy paccheri in a chicken and eggplant ragù or a cheese-heavy pecorino and black pepper pasta to toss while hot; add tiramisu and a cappuccino for about ¥2,000 in total. In the evening it works for a pasta to finish the night, until 10 pm last orders. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Italian restaurant (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Pasta lunch sets.',
      anecdotes: [
        { text: '"The chewy paccheri was perfectly coated with the rich meat sauce made from chicken mince and eggplant." — July 2026, lunch.', source: R + 'B531942740/' },
        { text: '"The cheese pasta was rich with black pepper and garlic, and it was generously topped with cheese, making it incredibly tasty." — October 2026, lunch set, ¥2,000 with tiramisu and cappuccino.', source: R + 'B537119276/' },
      ],
      japanese_sources_summary: '食べログ: conoji、大阪市西区新町2-18-19 三洋ハイツ 101、西長堀駅・西大橋駅1番出口から徒歩3分、月・火・木〜日・祝 11:30〜15:00 (L.O. 料理14:00)・18:00〜23:00 (L.O. 料理22:00)、水曜休み、年末年始休み、カード・電子マネー・QR可、20席 (カウンター14、テーブル3)。口コミ(2026年7〜10月): コの字のカウンター、落ち着いたおしゃれな店、昼は前菜6種ほどの盛り合わせ、パン、日替わり2種から選ぶパスタ (鶏ひき肉となすのラグーのパッケリ、ミートソースのタリアテッレ、ペコリーノと黒こしょうとにんにくのパスタ)、ティラミスとカプチーノを足して約2,000円、夜は夏トリュフのクリーム、あさりとムール貝のトマトなど、鶏の形の水差し、説明の声が小さいという声。',
      confidence: 'medium', sources: [TB, R + 'B531942740/', R + 'B533211607/', R + 'B535544619/', R + 'B537119276/', R + 'B537600289/', R + 'B537851667/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Dishes explained, though quietly (July 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町2-18-19 三洋ハイツ 101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町二丁目18番19号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537119276/', R + 'B531942740/'],
    price_note: 'About ¥2,000 for the lunch set with tiramisu and cappuccino (October 2026); lunch JPY 1,000–1,999 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Lunch set: appetizers, bread, pasta', '', 'Lunch', 'no', 'no', 'July–October 2026.', 'lunch'),
      it('', '', 'Paccheri with chicken and eggplant ragù', '', 'Pasta', 'no', 'no', 'July 2026.', 'paccheri'),
      it('', '', 'Pecorino and black pepper pasta', '', 'Pasta', 'no', 'no', 'October 2026.', 'pecorino'),
      it('', '', 'Tiramisu', '', 'Dessert', 'no', 'no', 'October 2026.', 'tiramisu'),
    ] }, {
    cuisine: 'コの字のカウンターのイタリアン・昼のセット: 前菜6種ほどの盛り合わせ、パン、日替わり2種から選ぶパスタ (たとえば鶏ひき肉となすのラグーのパッケリ、ミートソースのタリアテッレ、ペコリーノと黒こしょうとにんにくのパスタ)、ティラミスとカプチーノを足して約2,000円・夜は夏トリュフのクリーム、あさりとムール貝のトマトなどのパスタ・20席: カウンター14席',
    neighborhood: '西区新町2-18-19 三洋ハイツ 101。西長堀・西大橋駅1番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。昼は必ずパスタ、パン、ティラミス。',
    vegan_detail: 'ヴィーガンではありません。肉のソース、貝やチーズのパスタ。前菜は変わるので確認を。',
    notes: '[イタリアン・新町、コの字のカウンターのイタリアン] 西大橋近くの落ち着いたおしゃれなイタリアンで、目を引くコの字のカウンターにテーブルが少し、鶏の形の水差しもかわいい。昼はお手ごろなセット: 前菜6種ほどのきれいな盛り合わせとパン、それから日替わり2種のパスタから、もちもちのパッケリの鶏となすのラグーや、熱いうちに混ぜるチーズたっぷりのペコリーノと黒こしょうのパスタなど。ティラミスとカプチーノを足して約2,000円。夜は締めのパスタにも、L.O. は22時。水曜休み。',
  });
}

// ================================================================ PRESTAU
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27135751/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_prestau_shinmachi', name: 'PRESTAU', category: 'OMNI',
    lat: 34.677358, lng: 135.491053, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade pastas in every course; desserts and petits fours. Changes are possible if asked when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, duck, beef tongue and venison courses.',
    hours_raw: 'Tue–Sun and public holidays 12:00–15:00 (last food order 13:30) and 18:00–22:00 (last food order 20:00); closed Mon (Tue if Mon is a holiday) and one Sunday a month (Tabelog). Courses; dislikes accommodated if told in advance (September 2026). Cards and e-money accepted; no QR (Tabelog).',
    hours: { 1: LD, 2: LD, 3: LD, 4: LD, 5: LD, 6: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 2-17-17, behind a pale-blue façade — 5 min from Nishi-Ohashi Stn',
    cuisine: 'Italian courses · monthly lunch course ¥7,700, e.g. cuttlefish and squid-ink risotto with water eggplant, okra and sudachi; sardine with summer turnip and Shira-Kaga plum; linguine with hamo and bottarga; homemade conchiglie with beef-tongue ragù; charcoal-grilled Moulard duck; pineapple with sansho; petits fours; coffee or herbal tea · dinner courses (short course with drink pairing), e.g. swordfish, quail, venison, purple carrot · desserts in three stages: pre-dessert, dessert, petits fours · 12 seats',
    website: null, gmaps: gm('PRESTAU'), menu_url: null,
    notes: "[Italian · a refined Italian of seasonal courses, Shinmachi] A calm twelve-seat Italian near Nishi-Ohashi, pale blue outside and gray stone and concrete within, where courses of unexpected ingredient pairings arrive on carefully chosen tableware. The monthly lunch course (¥7,700) is the way in: a squid-ink risotto with cuttlefish and sudachi, delicate sardine with turnip, homemade conchiglie in beef-tongue ragù and charcoal-grilled duck, with a delicate rather than bold hand on seasoning. Desserts come in three stages. Dislikes are handled if mentioned ahead. One diner found drink service slow. Closed Mondays and one Sunday a month.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Italian course restaurant (Tabelog; 2026 reviews).', philosophy: 'Ingredients chosen through visits to producers (July 2026 review).', specialty: 'Seasonal Italian courses; homemade pasta.',
      anecdotes: [
        { text: '"The homemade short pasta, conchiglie, was delightfully chewy, perfectly infused with the richness of beef tongue ragù…" — July 2026, monthly lunch course ¥7,700.', source: R + 'B534205731/' },
        { text: '"They kindly substituted ingredients for me when I mentioned my dislikes in advance." — September 2026.', source: R + 'B536207188/' },
      ],
      japanese_sources_summary: '食べログ: PRESTAU、大阪市西区新町2-17-17、西大橋駅から徒歩5分、火〜日・祝 12:00〜15:00 (L.O. 料理13:30)・18:00〜22:00 (L.O. 料理20:00)、月曜休み (祝日なら翌火曜)、月に一度日曜休み、カード・電子マネー可、QR不可、12席。口コミ(2026年7〜10月): 淡い水色の外観、グレーの石とコンクリートの店内、器へのこだわり、昼の月替わりコース7,700円 (コウイカと水なすとオクラのイカスミのリゾットに sudachi、イワシと夏かぶと Shira-Kaga の梅、hamo とからすみのリングイネ、自家製コンキリエの牛タンのラグー、Moulard 鴨の炭火焼き、パイナップルと sansho、小菓子、コーヒーやハーブティー)、夜のショートコースとドリンクのペアリング、メカジキ、うずら、鹿、紫にんじん、デザートは3段階、苦手なものは事前に伝えれば対応、繊細な味つけ、ドリンクの気配りが足りないという声、鹿のナイフが切れにくいという声。',
      confidence: 'medium', sources: [TB, R + 'B532334489/', R + 'B534205731/', R + 'B535514508/', R + 'B536207188/', R + 'B536897178/', R + 'B537909811/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ingredient changes on request when booking (September 2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Substituted ingredients for dislikes mentioned in advance (September 2026).', source: R + 'B536207188/' }] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町2-17-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町二丁目17番17号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534205731/'],
    price_note: 'Lunch price from a July 2026 review; dinner JPY 10,000–19,999 (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Monthly lunch course', '¥7,700', 'Courses', 'no', 'no', 'July 2026.', 'lunch'),
      it('', '', 'Dinner short course with drink pairing', '', 'Courses', 'no', 'no', 'July 2026.', 'dinner'),
    ] }, {
    cuisine: 'イタリアンのコース・昼の月替わりコース7,700円、たとえばコウイカと水なすとオクラのイカスミのリゾットに sudachi、イワシと夏かぶと Shira-Kaga の梅、hamo とからすみのリングイネ、自家製コンキリエの牛タンのラグー、Moulard 鴨の炭火焼き、パイナップルと sansho、小菓子、コーヒーかハーブティー・夜のコース (ドリンクのペアリングつきのショートコースなど)、たとえばメカジキ、うずら、鹿、紫にんじん・デザートは3段階: プレデザート、デザート、小菓子・12席',
    neighborhood: '西区新町2-17-17、淡い水色の外観。西大橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。どのコースにも自家製パスタ、デザートと小菓子。予約の際に頼めば変更も可能。',
    vegan_detail: 'ヴィーガンではありません。魚介、鴨、牛タン、鹿のコース。',
    notes: '[イタリアン・新町、季節のコースの端正なイタリアン] 西大橋近くの落ち着いた12席のイタリアンで、外は淡い水色、中はグレーの石とコンクリート、意外な素材の組み合わせのコースが選び抜いた器で出てくる。入りやすいのは昼の月替わりコース (7,700円): コウイカと sudachi のイカスミのリゾット、かぶを合わせた繊細なイワシ、牛タンのラグーの自家製コンキリエ、鴨の炭火焼きと、味つけは強さより繊細さ。デザートは3段階。苦手なものは事前に伝えれば対応してくれる。ドリンクの気配りが足りないという声も。月曜と月に一度の日曜休み。',
  });
}

save();
