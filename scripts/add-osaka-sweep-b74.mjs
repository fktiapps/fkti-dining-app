// Osaka sweep (2-mile circle around Dotonbori), batch 74 — mom-and-pop phase (all OMNI).
//   + 八八八 (seafood-and-seasonal izakaya off Shinsaibashi-suji, opened 2019)
//   + 居酒屋 ろくだん (Aomori izakaya with live Tsugaru shamisen twice nightly)
//   + しゃぶ舞 (counter-only individual shabu-shabu and sukiyaki in Souemoncho, open to 4 am)
//   + 串焼き 猿 (creative yakitori counter on Dotonbori 2-chome, opened 2014)
//   + ゆうや (kinki shabu-shabu specialist in Higashi-Shinsaibashi; English menu)
//   None shows a lone owner, so mom_and_pop stays false throughout.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 74);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 八八八
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27111125/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '23:59']);
  put({
    id: 'osaka_yayaya', name: '八八八 (Yayaya)', category: 'OMNI',
    lat: 34.670949, lng: 135.502067, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: tempura and fried dishes, soba, soy-based seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya. Tabelog tags the shop with vegetarian options, but no dish is described; ask.',
    hours_raw: 'Mon–Sat 18:00–24:00; closed Sunday (Tabelog). Reservations recommended (2026 reviews). Smoking allowed (Tabelog; April 2026). Cards accepted; no e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 2-2-2, 1F — 5 min from Shinsaibashi Stn',
    cuisine: 'Seafood-and-seasonal izakaya · assorted sashimi · signature giant shrimp tempura · karasumi, and karasumi soba to finish · toro-taku roll · grilled grouper in Saikyo miso · horse sashimi with tategami · potato salad · oysters · hairy crab and snow crab in season · Japanese course ¥6,000 · sake, shochu and wine · 11 counter seats, 8 table seats, private room for 8',
    website: null, gmaps: gm('八八八 心斎橋筋'), menu_url: null,
    notes: "[Japanese · a seafood-and-seasonal izakaya off Shinsaibashi-suji] A 19-seat izakaya open since 2019, which calls itself a hideout for adults built on hot pot, seafood, seasonal vegetables and drink. One diner says the food comes first. Fresh assorted sashimi is the constant. The signature giant shrimp tempura is plump and crisp; one diner had shrimp tempura wrapped in sakura shrimp. Karasumi goes with drinks, and the karasumi soba finish eats almost like pasta. Others order grilled grouper in Saikyo miso, horse sashimi with tategami fat, a rich potato salad, oysters, and seasonal crab. A ¥6,000 Japanese course is an option. The appetizer rarely changes. Smoking is allowed, which one non-smoker minded. Reserve; it gets busy. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 January 2019 (Tabelog)', background: 'Seafood izakaya; "A hideout for adults...hot pot x Seafood x seasonal vegetables x alcohol" (Tabelog, staff-maintained).', philosophy: null, specialty: 'Sashimi; giant shrimp tempura.',
      anecdotes: [
        { text: '"The signature giant shrimp tempura was impressive once again, with its plump meat and crispy batter that was simply irresistible." — December 2025, course meal.', source: R + 'B514463524/' },
        { text: '"To finish off, the karasumi soba was a unique experience—almost like pasta, and it was delicious." — February 2026.', source: R + 'B523250171/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 八八八、大阪市中央区心斎橋筋2-2-2 日宝畳屋町プラス1ビル 101、心斎橋駅から徒歩5分、月〜土18:00〜24:00、日曜休み、カード可、電子マネー・QR不可、19席(カウンター11、テーブル8)、8人の個室、20人まで貸切可、喫煙可、2019年1月22日開店、大人の隠れ家。口コミ(2025年9月〜2026年8月): 季節の料理、刺身の盛り合わせ、大きな海老フライ、締めのそばかトロたく巻き、予約がおすすめ、毛蟹、コース、ズワイガニ・白子・からすみ・鯛、看板の大海老の天ぷら、6,000円の和食コース、喫煙可で隣のたばこが気になる、お通しは変わらない、クエの西京焼き、からすみそばはパスタのよう、馬刺しの盛り合わせとたてがみ、ポテトサラダ、牡蠣、桜海老をまとわせた海老天、日本酒と焼酎。',
      confidence: 'medium', sources: [TB, R + 'B514463524/', R + 'B523250171/', R + 'B463884213/', R + 'B525493085/', R + 'B532845045/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and private room; reservations recommended.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-2-2 日宝畳屋町プラス1ビル 101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目2番2号 (go) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514463524/', R + 'B523250171/'],
    price_note: 'One price from a September 2025 review; reviewers spent ¥4,000–9,999.', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi', '', 'Seafood', 'ask', 'no', '2026 reviews.', 'sashimi'),
      it('', '', 'Giant shrimp tempura', '', 'Fried', 'no', 'no', 'December 2025.', 'ebi_ten'),
      it('', '', 'Karasumi soba', '', 'Finish', 'no', 'no', 'February 2026.', 'karasumi_soba'),
      it('', '', 'Toro-taku roll', '', 'Finish', 'ask', 'no', 'January–August 2026.', 'toro_taku'),
      it('', '', 'Japanese course', '¥6,000', 'Courses', 'no', 'no', 'September 2025.', 'course'),
    ] }, {
    cuisine: '魚介と季節の料理の居酒屋・刺身の盛り合わせ・看板の大海老の天ぷら・からすみ、締めのからすみそば・トロたく巻き・クエの西京焼き・たてがみ付きの馬刺し・ポテトサラダ・牡蠣・季節の毛蟹とズワイガニ・和食コース6,000円・日本酒、焼酎、ワイン・カウンター11席、テーブル8席、8人の個室',
    neighborhood: '中央区心斎橋筋2-2-2 1F。心斎橋駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。天ぷらや揚げ物、そば、醤油の味付け。',
    vegan_detail: 'ヴィーガンではありません。魚介の居酒屋。食べログにはベジタリアン対応のタグがありますが、具体的な料理は不明。要確認。',
    notes: '[和食・心斎橋筋の魚介と季節の料理の居酒屋] 2019年開店の19席の居酒屋で、鍋、魚介、季節の野菜、お酒の大人の隠れ家をうたいます。料理が主役という声も。定番は新鮮な刺身の盛り合わせ。看板の大海老の天ぷらはぷりぷりでさくさく、桜海老をまとわせた海老天を食べた人も。からすみはお酒に合い、締めのからすみそばはパスタのよう。ほかにクエの西京焼き、たてがみ付きの馬刺し、濃厚なポテトサラダ、牡蠣、季節の蟹。6,000円の和食コースも。お通しはほとんど変わらない。喫煙可で、気になったという非喫煙者も。混むので予約を。日曜定休。',
  });
}

// ================================================================ 居酒屋 ろくだん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27062000/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.rokudan.net/';
  const D = day(['17:00', '23:00']);
  put({
    id: 'osaka_izakaya_rokudan', name: '居酒屋 ろくだん (Izakaya Rokudan)', category: 'OMNI',
    lat: 34.667873, lng: 135.503693, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: tempura, croquettes, yakisoba and koji-marinated fish; soy-based seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, scallops, egg and meat throughout the menu.',
    hours_raw: 'Tue–Sat 17:00–23:00; closed Monday, Sunday and holidays (Tabelog). Live shamisen at about 19:00 and 21:00 (May 2026). Reservations hard to get; book early (September 2026). Cash only: no cards, e-money or QR (Tabelog). Heated tobacco only in a designated area (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sennichimae 1-8-20, Takahashi Bldg 3F — 5 min from Nipponbashi Stn',
    cuisine: 'Aomori izakaya with live Tsugaru shamisen · Horoyoi Set of sake, sashimi and appetizers · Nebuta-zuke · herring and red salmon marinated in koji · Appa-yaki, scallops in egg · komai dried overnight · iburigakko with cream cheese · Rokudan taro croquettes · conger eel and squid tempura · chicken nanban · grilled beef tendon with green onion · yakisoba · Aomori sake · 16 seats, counter and tatami',
    website: OWN, gmaps: gm('居酒屋 ろくだん 千日前'), menu_url: null,
    notes: "[Japanese · an Aomori izakaya with live Tsugaru shamisen in Sennichimae] A rare Aomori izakaya in Osaka, open since 2011 on the third floor of a Sennichimae building, a little hard to find. Live Tsugaru shamisen plays twice a night, around 19:00 and 21:00, and one diner was captivated by its power. Start with the Horoyoi Set of sake, sashimi and appetizers, then move to northern dishes: Nebuta-zuke, koji-marinated herring and red salmon, Appa-yaki (scallops simmered in egg), komai, and iburigakko with cream cheese. The taro croquettes, tempura, chicken nanban and beef tendon round it out, with Aomori sake. The owner is bright and attentive, and the regulars make newcomers feel at home. Book early. Cash only.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Opened 15 December 2011 (Tabelog)', background: 'Aomori and Tsugaru regional izakaya with live Tsugaru shamisen (Tabelog; 2026 reviews); official site rokudan.net.', philosophy: null, specialty: 'Tsugaru regional dishes and Aomori sake.',
      anecdotes: [
        { text: '"The regional appetizers are plentiful, featuring items like Nebuta-zuke and Appa-yaki (scallop with simmered eggs), all well-seasoned and pairing wonderfully with Japanese sake." — August 2026.', source: R + 'B534841040/' },
        { text: '"The owner was attentive, checking in for refills at just the right moments, which led me to indulge a bit too much in both food and drink." — September 2026.', source: R + 'B537863286/' },
      ],
      japanese_sources_summary: '公式 rokudan.net。食べログ(店舗会員): 居酒屋 ろくだん、大阪市中央区千日前1-8-20 高橋ビル 3F、日本橋駅から徒歩5分、火〜土17:00〜23:00、月・日・祝休み、カード・電子マネー・QR不可、16席、座敷・掘りごたつ、ライブ演奏、加熱式たばこのみ喫煙所、2011年12月15日開店、Tsugaru shamisenのライブ。口コミ(2026年5〜9月): 19時と21時ごろの2回のライブ、Horoyoi Set、Nebuta-zuke・紅鮭・にしんの麹漬けの3種盛り、焼き魚、Iburigakkoとクリームチーズ、ぬたサラダ、穴子と烏賊の天ぷら、こんにゃく煮、揚げ出し豆腐、チキン南蛮、ろくだんコロッケ(里芋)、焼きねぎ、焼きそば、Appa-yaki、一夜干しのコマイ、牛すじのねぎ焼き、Aomoriのお酒と料理、オーナーの気配り、常連が多い、ビルの3階で入りにくい、予約は早めに。',
      confidence: 'medium', sources: [TB, OWN, R + 'B534841040/', R + 'B537863286/', R + 'B528302560/', R + 'B532983419/', R + 'B533623507/', R + 'B536407225/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Third-floor izakaya with regulars; reservations recommended.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-8-20 高橋ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated May–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目8番20号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528302560/', R + 'B532983419/'],
    price_note: 'No prices captured; reviewers spent ¥3,000–14,999.', last_checked: TODAY, items: [
      it('', '', 'Horoyoi Set (sake, sashimi, appetizers)', '', 'Sets', 'no', 'no', 'May–September 2026.', 'horoyoi'),
      it('', '', 'Three delicacies: Nebuta-zuke, koji-marinated red salmon and herring', '', 'Small plates', 'no', 'no', 'May–August 2026.', 'chinmi3'),
      it('', '', 'Appa-yaki (scallops in egg)', '', 'Small plates', 'ask', 'no', 'August 2026.', 'appa_yaki'),
      it('', '', 'Iburigakko with cream cheese', '', 'Small plates', 'ask', 'no', 'May–August 2026.', 'iburigakko'),
      it('', '', 'Rokudan croquettes (taro)', '', 'Fried', 'no', 'ask', 'May 2026.', 'croquette'),
    ] }, {
    cuisine: 'Tsugaru shamisenのライブのあるAomoriの居酒屋・お酒、刺身、前菜のHoroyoi Set・Nebuta-zuke・にしんと紅鮭の麹漬け・Appa-yaki(ホタテの卵とじ)・一夜干しのコマイ・Iburigakkoとクリームチーズ・里芋のろくだんコロッケ・穴子と烏賊の天ぷら・チキン南蛮・牛すじのねぎ焼き・焼きそば・Aomoriのお酒・16席、カウンターと座敷',
    neighborhood: '中央区千日前1-8-20 高橋ビル 3F。日本橋駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。天ぷら、コロッケ、焼きそば、麹漬けの魚、醤油の味付け。',
    vegan_detail: 'ヴィーガンではありません。魚、ホタテ、卵、肉が中心。',
    notes: '[和食・千日前のTsugaru shamisenのライブのあるAomoriの居酒屋] 大阪では珍しいAomoriの居酒屋で、2011年開店、千日前のビルの3階にあり少し見つけにくい。Tsugaru shamisenのライブは毎晩19時と21時ごろの2回で、その迫力に引き込まれたという声。まずはお酒、刺身、前菜のHoroyoi Setから、Nebuta-zuke、にしんと紅鮭の麹漬け、Appa-yaki(ホタテの卵とじ)、コマイ、Iburigakkoとクリームチーズなど北国の料理へ。里芋のコロッケ、天ぷら、チキン南蛮、牛すじも、Aomoriのお酒と一緒に。オーナーは明るく気配りがあり、常連が初めての客も温かく迎えてくれる。予約は早めに。現金のみ。',
  });
}

// ================================================================ しゃぶ舞
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27032897/'; const R = TB + 'dtlrvwlst/';
  const L = day(['18:00', '04:00']), TU = day(['18:00', '03:00']);
  put({
    id: 'osaka_shabu_mai', name: 'しゃぶ舞 (Shabu Mai)', category: 'OMNI',
    lat: 34.66953, lng: 135.504063, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: sukiyaki warishita and the beef rice bowl sauce are soy-based; sesame sauce ingredients not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef and pork hot-pot counter.',
    hours_raw: 'Mon and Wed–Sat and holidays 18:00–4:00 am (food L.O. 3:00); Tue 18:00–3:00 am; closed Sunday (Tabelog). Smoking allowed (Tabelog). Cards, e-money and QR (PayPay, Alipay, WeChat Pay) accepted (Tabelog).',
    hours: { 0: L, 1: TU, 2: L, 3: L, 4: L, 5: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Souemoncho 5-11 — 7 min from Namba, Shinsaibashi or Nipponbashi Stn',
    cuisine: 'Individual-pot shabu-shabu and sukiyaki at the counter · kuroge wagyu and Kurobuta pork · homemade sesame sauce · premium beef good enough to eat raw with wasabi and soy · seared rare beef rice bowl with sweet-spicy sauce · also stew, hamburg steak and chicken sashimi · 16 counter seats',
    website: null, gmaps: gm('しゃぶ舞 宗右衛門町'), menu_url: null,
    notes: "[Japanese · counter shabu-shabu and sukiyaki in Souemoncho until 4 am] A 16-seat counter in late-night Souemoncho where each diner gets a personal pot, so solo diners are at ease. Choose shabu-shabu or sukiyaki: kuroge wagyu and Kurobuta pork that melt in the mouth, with a homemade sesame sauce. The top beef can even be eaten raw with wasabi and soy over rice. One regular's after-drinks order is a rice bowl of seared rare beef with a sweet-spicy sauce. The menu has run to stew, hamburg steak and chicken sashimi too. Staff walk first-timers through it. It isn't cheap: reviewers spent ¥6,000–15,000 on hot pot. Open until 4 am most nights; closed Sundays. Smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Counter shabu-shabu and sukiyaki in Souemoncho (Tabelog, staff-maintained).', philosophy: null, specialty: 'Individual-pot shabu-shabu and sukiyaki.',
      anecdotes: [
        { text: '"The carefully selected black-haired Wagyu and Kurobuta pork are of exceptional quality, melting in your mouth with deliciousness. The homemade sesame sauce pairs perfectly." — June 2026, shabu-shabu.', source: R + 'B530066665/' },
        { text: '"The premium beef here can be eaten raw, and I used to love eating it with wasabi and soy sauce alongside rice." — August 2026, sukiyaki.', source: R + 'B533274782/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): しゃぶ舞、大阪市中央区宗右衛門町5-11、なんば・心斎橋・日本橋の各駅から徒歩7分、月・水〜土・祝18:00〜翌4:00(料理L.O.3:00)、火18:00〜翌3:00、日曜休み、カード・電子マネー・QR(PayPay、Alipay、WeChat Pay)可、カウンター16席、20人まで貸切可、喫煙可。口コミ(2025年3月〜2026年8月): 朝まで営業、しゃぶしゃぶ、すき焼き、シチュー、ハンバーグ、鶏刺し、カウンターで一人鍋、店員が親切、飲んだ後の丼、レアの焼き牛、甘辛のたれ、誕生日のすき焼き、黒毛和牛と黒豚、自家製ごまだれ、食べ方を教えてくれる、生でも食べられる上等の牛肉をわさび醤油とご飯で、やや高め。',
      confidence: 'medium', sources: [TB, R + 'B530066665/', R + 'B533274782/', R + 'B522336210/', R + 'B525499720/', R + 'B503981834/', R + 'B514661155/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain how to eat; counter seating suits solo diners (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町5-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町5番11号 (go) 9m; OSM しゃぶ舞 node/2349198953 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530066665/', R + 'B522336210/'],
    price_note: 'No prices captured; reviewers spent ¥6,000–14,999 on hot pot, ¥1,000–1,999 on the rice bowl.', last_checked: TODAY, items: [
      it('', '', 'Shabu-shabu (kuroge wagyu, Kurobuta pork)', '', 'Hot pot', 'ask', 'no', 'Homemade sesame sauce; June 2026.', 'shabu'),
      it('', '', 'Sukiyaki', '', 'Hot pot', 'no', 'no', 'March–August 2026.', 'sukiyaki'),
      it('', '', 'Seared rare beef rice bowl', '', 'Rice', 'no', 'no', 'Sweet-spicy sauce; February 2026.', 'beef_don'),
    ] }, {
    cuisine: 'カウンターで一人鍋のしゃぶしゃぶとすき焼き・黒毛和牛と黒豚・自家製ごまだれ・生でも食べられる上等の牛肉をわさび醤油で・甘辛だれのレアの焼き牛の丼・シチュー、ハンバーグ、鶏刺しも・カウンター16席',
    neighborhood: '中央区宗右衛門町5-11。なんば・心斎橋・日本橋駅から徒歩7分',
    gf_detail: '実際にはグルテンフリーではありません。すき焼きの割り下や丼のたれは醤油ベース、ごまだれの材料は不明。',
    vegan_detail: 'ヴィーガンではありません。牛肉と豚肉の鍋のカウンター。',
    notes: '[和食・宗右衛門町で朝4時までのカウンターのしゃぶしゃぶとすき焼き] 夜更かしの宗右衛門町にあるカウンター16席の店で、一人ずつ鍋が出るので一人でも気楽。しゃぶしゃぶかすき焼きを、口の中でとろける黒毛和牛と黒豚で、自家製ごまだれと。上等の牛肉は生でもわさび醤油でご飯にのせて食べられる。飲んだ後に通う人の定番は、レアの焼き牛に甘辛のたれの丼。シチュー、ハンバーグ、鶏刺しがあったことも。初めてでも店員が食べ方を教えてくれる。安くはなく、鍋で6,000〜15,000円ほど。ほとんどの日は朝4時まで、日曜定休。喫煙可。',
  });
}

// ================================================================ 串焼き 猿
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27014489/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kushiyaki_saru', name: '串焼き 猿 (Kushiyaki Saru)', category: 'OMNI',
    lat: 34.668756, lng: 135.499014, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: tare-glazed skewers and katsu udon; salt seasoning not confirmed.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, pork, beef and seafood skewers.',
    hours_raw: 'Daily 17:00–24:00; closes irregularly (Tabelog). Two-dish otoshi ¥200 (Tabelog). Smoking allowed (Tabelog; 2024–2026 reviews). Cards and QR (PayPay, d Barai, Rakuten Pay) accepted (Tabelog).',
    hours: ALL(day(['17:00', '23:59'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 2-4-5, 1F — 3 min from Namba Stn, on the quieter street west of Midosuji',
    cuisine: 'Creative kushiyaki, mostly chicken · chicken hearts (kokoro), seseri, tamahimo, chochin · charcoal-grilled chicken thigh and cheek · tsukune · negima · pork-asparagus rolls · meat-wrapped cherry tomatoes · also pork, beef and seafood skewers · chicken sashimi · salmon tartare · katsu udon · daily recommendations · 10 counter seats, 8 table seats, semi-private rooms',
    website: null, gmaps: gm('串焼き 猿 道頓堀'), menu_url: null,
    notes: "[Yakitori · a creative skewer counter on quiet Dotonbori 2-chome] A yakitori izakaya open since 2014 on the quieter stretch of Dotonbori west of Midosuji, three minutes from Namba. Chicken leads: hearts, seseri, tamahimo and chochin (one diner reserved just for it), plus charcoal-grilled thigh and cheek. The tsukune is grilled just right. Pork, beef and seafood skewers keep it varied; the meat-wrapped cherry tomatoes burn the unwary. There's chicken sashimi, salmon tartare and a filling katsu udon, and the daily specials are worth asking about. The master is fun to talk to from the counter, and there are semi-private rooms in back. One May evening the room was half overseas visitors. Otoshi ¥200. Smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 2 January 2014 (Tabelog)', background: 'Creative kushiyaki on Dotonbori 2-chome (Tabelog, staff-maintained).', philosophy: null, specialty: 'Chicken hearts; charcoal-grilled chicken.',
      anecdotes: [
        { text: '"This time, I was advised to try the charcoal-grilled cheek meat, and it was incredibly delicious! All the yakitori is tasty, but I highly recommend the seseri (neck meat), kokoro (heart), and tamahimo (chicken tail)." — April 2026.', source: R + 'B526980637/' },
        { text: '"I was looking for a place that served chōchin… and made a reservation specifically for that, and it was so delicious that I ordered more. The grilling of the tsukune (chicken meatballs) was also perfect." — May 2026.', source: R + 'B531779900/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 串焼き 猿、大阪市中央区道頓堀2-4-5 1階、なんば駅から徒歩3分、毎日17:00〜24:00、不定休、つきだし2品200円、カード・QR(PayPay、d払い、楽天ペイ)可、18席(カウンター10、テーブル8)、半個室、20人まで貸切可、喫煙可、2014年1月2日開店、道頓堀の創作串焼き。口コミ(2024年4月〜2026年5月): 御堂筋の西の静かな道頓堀2丁目、てっちり通りの名残、ハツと炭火焼き鳥、日替わりのおすすめ、つくねともも炭火焼き、豚・牛・魚介の串も、喫煙可、半個室、かつうどん、カウンターで店長の話、ねぎま、豚アスパラ巻き、鶏刺し、サーモンタルタル、肉巻きミニトマトでやけど、炭火焼きのほほ肉、せせり・こころ・玉ひも、マスターとの会話、外国人と日本人が半々、ちょうちん、つくねの焼き加減。',
      confidence: 'medium', sources: [TB, R + 'B526980637/', R + 'B531779900/', R + 'B389886929/', R + 'B483991186/', R + 'B525325031/', R + 'B526630085/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and semi-private rooms; a mix of overseas and Japanese diners (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀2-4-5 1階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀二丁目4番5号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526980637/', R + 'B526630085/'],
    price_note: 'Otoshi from Tabelog; reviewers spent ¥3,000–5,999.', last_checked: TODAY, items: [
      it('', '', 'Otoshi (two small dishes)', '¥200', 'Charge', 'ask', 'ask', 'Tabelog.', 'otoshi'),
      it('', '', 'Chicken skewers: kokoro, seseri, tamahimo, chochin', '', 'Skewers', 'ask', 'no', 'April–May 2026.', 'tori_kushi'),
      it('', '', 'Tsukune', '', 'Skewers', 'ask', 'no', 'May 2024–May 2026.', 'tsukune'),
      it('', '', 'Charcoal-grilled chicken thigh', '', 'Grill', 'ask', 'no', 'May 2024.', 'sumibi_momo'),
      it('', '', 'Katsu udon', '', 'Finish', 'no', 'no', 'January 2026.', 'katsu_udon'),
    ] }, {
    cuisine: '鶏中心の創作串焼き・こころ、せせり、玉ひも、ちょうちん・炭火焼きの鶏ももとほほ肉・つくね・ねぎま・豚アスパラ巻き・肉巻きミニトマト・豚、牛、魚介の串も・鶏刺し・サーモンタルタル・かつうどん・日替わりのおすすめ・カウンター10席、テーブル8席、半個室',
    neighborhood: '中央区道頓堀2-4-5 1階。なんば駅から徒歩3分、御堂筋の西の静かな通り',
    gf_detail: '実際にはグルテンフリーではありません。たれの串やかつうどん。塩の味付けは未確認。',
    vegan_detail: 'ヴィーガンではありません。鶏、豚、牛、魚介の串。',
    notes: '[焼き鳥・道頓堀2丁目の静かな通りの創作串焼き] なんばから3分、御堂筋の西の静かな道頓堀に2014年から店を構える焼き鳥の居酒屋。主役は鶏で、ハツ、せせり、玉ひも、ちょうちん(これを目当てに予約した人も)、炭火焼きのももやほほ肉。つくねの焼き加減も絶妙。豚、牛、魚介の串もあり、肉巻きミニトマトは熱くてやけどに注意。鶏刺し、サーモンタルタル、お腹いっぱいになるかつうどんも。日替わりのおすすめも聞いてみて。カウンターではマスターとの会話が楽しく、奥には半個室。5月のある晩は客の半分が外国人だった。つきだし200円。喫煙可。',
  });
}

// ================================================================ ゆうや
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27015267/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://zoo-jp.com/shop/syunsai/';
  const D = day(['18:00', '23:59']);
  put({
    id: 'osaka_yuuya', name: 'ゆうや (Yuuya)', category: 'OMNI',
    lat: 34.670574, lng: 135.502653, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a Japanese course with simmered, grilled and fried dishes; soy-based seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish restaurant built around kinki shabu-shabu.',
    hours_raw: 'Mon–Sat and days before/after holidays 18:00–24:00 (food L.O. 23:00, drinks 23:30); closed Sundays and holidays (Tabelog). Smoking allowed (Tabelog). Cards and PayPay accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-7-18, 1F rear — 5 min from Shinsaibashi Stn',
    cuisine: 'Seasonal Japanese seafood · Hokkaido kinki shabu-shabu courses, finished with rice porridge · sashimi · simmered, grilled and fried dishes · deep sake and shochu list · private rooms for 2 to 20 · 18 seats',
    website: OWN, gmaps: gm('ゆうや 東心斎橋'), menu_url: null,
    notes: "[Japanese · a kinki shabu-shabu specialist in Higashi-Shinsaibashi] A seasonal seafood restaurant tucked at the back of the ground floor of a nightlife building, behind a cabaret-style entrance that can make a first visit feel like a wrong turn. Inside is a calm Japanese room with private rooms, used for business dinners and special occasions. The specialty is kinki shabu-shabu: the Hokkaido fish, rare in Osaka, has a refined fat that melts into the broth, and the course ends with a rich rice porridge. Sashimi and the simmered, grilled and fried courses also draw praise, as does a deep sake list. It's a splurge: reviewers spent ¥8,000–30,000. The shop has moved from its old building. Menu in English and Chinese. The newest review is from March 2026.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Shunsai Yuya (Tabelog, staff-maintained); operator site zoo-jp.com. Relocated after its former building was demolished (November 2025 review).', philosophy: null, specialty: 'Kinki shabu-shabu.',
      anecdotes: [
        { text: '"The Kinki sourced from Kushiro has a refined fat that blends beautifully with the broth, making it exquisite. The finishing rice porridge has a rich umami that is different from fugu." — November 2025.', source: R + 'B516713301/' },
        { text: '"The restaurant is located at the back of the first floor of a building that houses nightlife establishments, so you might initially wonder, \'Is this the right place?\' But don\'t worry, it is!" — June 2025.', source: R + 'B508558358/' },
      ],
      japanese_sources_summary: '運営サイト zoo-jp.com。食べログ(店舗会員): ゆうや(Shunsai Yuya)、大阪市中央区東心斎橋2-7-18 暫ビル 1F、心斎橋駅から徒歩5分、月〜土・祝前日・祝後日18:00〜24:00(料理L.O.23:00、ドリンクL.O.23:30)、日祝休み、カード・PayPay可、18席、2〜20人の個室、喫煙可、英語と中国語のメニューあり。口コミ(2024年12月〜2026年3月): Kinkiしゃぶしゃぶのコース、個室、脂がのったKinki、Hokkaidoの高級魚、旧ビルが取り壊されて移転、締めの雑炊、ナイトクラブのビルの1階奥、接待向けの和の店内、刺身、煮物・焼き物・揚げ物、季節の食材、日本酒の品揃え、新年会、Kinkiに付いたタグ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B516713301/', R + 'B508558358/', R + 'B498037787/', R + 'B501066573/', R + 'B524720477/', R + 'B533115618/'] },
    cultural_comfort: { level: 'english', note: 'Menu available in English and Chinese (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-7-18 暫ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained) with current hours; newest review March 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目7番18号 (go) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516713301/', R + 'B498037787/'],
    price_note: 'No prices captured; reviewers spent ¥8,000–29,999.', last_checked: TODAY, items: [
      it('', '', 'Kinki shabu-shabu course', '', 'Courses', 'ask', 'no', 'Finished with rice porridge; December 2024–November 2025.', 'kinki_shabu'),
    ] }, {
    cuisine: '旬の魚介の和食・HokkaidoのKinkiしゃぶしゃぶのコース、締めは雑炊・刺身・煮物、焼き物、揚げ物・日本酒と焼酎が豊富・2〜20人の個室・18席',
    neighborhood: '中央区東心斎橋2-7-18 暫ビル 1F奥。心斎橋駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。煮物、焼き物、揚げ物の和食のコース、醤油の味付け。',
    vegan_detail: 'ヴィーガンではありません。Kinkiしゃぶしゃぶが中心の魚の店。',
    notes: '[和食・東心斎橋のKinkiしゃぶしゃぶの店] 夜の店が入るビルの1階奥にある旬の魚介の店で、キャバレーのような入口に初めての人は戸惑うほど。中は落ち着いた和の空間で個室もあり、接待や特別な日に使われる。名物はKinkiしゃぶしゃぶで、大阪では珍しいHokkaidoの魚の上品な脂がスープに溶け、締めは旨みの濃い雑炊。刺身や煮物、焼き物、揚げ物、日本酒の品揃えも好評。予算は高めで8,000〜30,000円ほど。以前のビルから移転しています。英語と中国語のメニューあり。最新の口コミは2026年3月です。',
  });
}

save();
