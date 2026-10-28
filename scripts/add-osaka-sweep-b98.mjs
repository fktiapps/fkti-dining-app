// Osaka sweep (2-mile circle around Dotonbori), batch 98 — mom-and-pop phase (all OMNI).
//   + KATANAMI MAGURO (tuna-centred omakase with a showy uni-ikura bowl; Nishi-Shinsaibashi)
//   + 鮨 響 (881 Group entertainment sushi, ¥4,400 omakase in two seatings; Soemoncho)
//   + 中華スタンド ピュー (late-night gyoza and Chinese izakaya counter to 03:00; Higashi-Shinsaibashi)
//   + 香吾芽 (thin-noodle curry udon counter run by two, a Minami night finish) — mom_and_pop
//   + 寛 (seafood-and-meat creative izakaya, shrimp mayo; Higashi-Shinsaibashi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 98);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ KATANAMI MAGURO
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27152504/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_katanami_maguro_nishishinsaibashi', name: 'KATANAMI MAGURO', category: 'OMNI',
    lat: 34.669303, lng: 135.498655, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy-based seasoning, eel sauce, a hot-dog-style unagi roll.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tuna, uni, ikura, cod milt and eel throughout.',
    hours_raw: 'Daily 12:00–22:30 (L.O. 22:00); closing days vary (Tabelog, staff-maintained). Omakase about ¥12,000 (October 2026). Cards, e-money and QR accepted (Tabelog). Whole-room bookings by phone.',
    hours: ALL(day(['12:00', '22:30'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 2-6-9, ribera Nishi-Shinsaibashi 3F — 3 min from Namba Stn',
    cuisine: 'Tuna-centred omakase sushi, ¥12,000 · opens with a bowl of uni, ikura and otoro seared at the counter · "Dragon Roll" of otoro, negitoro, uni and egg yolk · akami, chutoro and otoro nigiri · shira-ko with ponzu · gold-leaf uni tofu · nigiri of shrimp, sea bream, scallop, salmon · unagi dog · 6 counter seats',
    website: null, gmaps: gm('KATANAMI MAGURO 西心斎橋'), menu_url: null,
    notes: "[Sushi · a showy tuna omakase counter just off Dotonbori] A six-seat counter on a third floor near Namba, calm despite the crowds below, built around tuna and theatre. The omakase (¥12,000 in October 2026) opens with a bowl heaped with uni, ikura and otoro that the chef sears in front of you, then the \"Dragon Roll\" of otoro, negitoro, uni and egg yolk, and a tuna flight of akami, chutoro and otoro. Shira-ko with ponzu, a gold-leaf uni tofu, nigiri of shrimp, sea bream, scallop and salmon, and an unagi dog handed straight across the counter round it out. Reviews call it visually spectacular and, past the show, well made. Open from noon, so it works for a splurge lunch too. Book ahead.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Omakase sushi counter (Tabelog, staff-maintained; October 2026 reviews).', philosophy: null, specialty: 'Tuna omakase; uni-ikura-otoro bowl.',
      anecdotes: [
        { text: '"The tuna nigiri included three types: akami (lean), chutoro (medium fatty), and otoro (fatty). Each offered a unique taste and sweetness from the fat, with the otoro\'s melt-in-your-mouth texture being especially memorable." — October 2026, premium omakase.', source: R + 'B537245971/' },
        { text: '"While the initial impression was the vibrant presentation, I was pleased to find that the quality of the ingredients was excellent, and every dish was delicious." — October 2026, omakase ¥12,000.', source: R + 'B537876587/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): KATANAMI MAGURO、大阪市中央区西心斎橋2-6-9 ribera西心斎橋 3F、なんば駅から徒歩3分、毎日12:00〜22:30(L.O.22:00)、不定休、カード・電子マネー・QR可、カウンター6席、貸切は電話で。口コミ(2026年10月): プレミアムおまかせコース12,000円、雲丹・いくら・大トロの丼、目の前で炙る厚切りの大トロ、大トロ・ねぎとろ・雲丹・卵黄のドラゴンロール、うなぎドッグ、道頓堀の喧騒を忘れる落ち着いた隠れ家、カウンターで目の前の調理、赤身・中トロ・大トロの握り、白子ポン酢、金箔の雲丹豆腐、おすすめの握り、記念日やデートに、海老・鯛・帆立・サーモンの握り、見た目だけでなく食材の質も高い。',
      confidence: 'medium', sources: [TB, R + 'B537245971/', R + 'B537876587/', R + 'B536859043/', R + 'B537363608/', R + 'B537380320/', R + 'B537864348/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter show; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-6-9 ribera西心斎橋 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目6番9号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537380320/', R + 'B537876587/'],
    price_note: 'Omakase price from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Premium omakase course', '¥12,000', 'Course', 'no', 'no', 'October 2026.', 'omakase'),
      it('', '', 'Uni, ikura and otoro rice bowl', '', 'Course', 'no', 'no', 'October 2026.', 'uni_ikura_don'),
      it('', '', 'Dragon Roll', '', 'Course', 'no', 'no', 'October 2026.', 'dragon_roll'),
    ] }, {
    cuisine: 'マグロが主役のおまかせ寿司12,000円・最初はカウンターで炙る大トロに雲丹といくらの丼・大トロ、ねぎとろ、雲丹、卵黄の「ドラゴンロール」・赤身、中トロ、大トロの握り・白子ポン酢・金箔の雲丹豆腐・海老、鯛、帆立、サーモンの握り・うなぎドッグ・カウンター6席',
    neighborhood: '中央区西心斎橋2-6-9 ribera西心斎橋 3F。なんば駅から徒歩3分',
    gf_detail: '実際にはグルテンフリーではありません。醤油ベースの味付け、鰻のたれ、ホットドッグ風の鰻。',
    vegan_detail: 'ヴィーガンではありません。マグロ、雲丹、いくら、白子、鰻が中心。',
    notes: '[寿司・道頓堀すぐ、魅せるマグロのおまかせカウンター] なんば近くのビル3階にあるカウンター6席の店で、下の喧騒が嘘のように落ち着き、マグロと演出が主役。おまかせ(2026年10月は12,000円)は、目の前で炙る大トロに雲丹といくらをたっぷりのせた丼から始まり、大トロ、ねぎとろ、雲丹、卵黄の「ドラゴンロール」、赤身・中トロ・大トロの食べ比べ。白子ポン酢、金箔の雲丹豆腐、海老・鯛・帆立・サーモンの握り、カウンター越しに手渡されるうなぎドッグまで。見た目の華やかさだけでなく質も高いという声。昼から開いているので贅沢ランチにも。予約を。',
  });
}

// ================================================================ 鮨 響
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27149656/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_sushi_hibiki_soemoncho', name: '鮨 響 (Sushi Hibiki)', category: 'OMNI',
    lat: 34.66994, lng: 135.504555, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy seasoning, a fish sandwich, ramen in the course.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and seafood throughout; fish-broth ramen and chanko.',
    hours_raw: 'Daily, two seatings with a simultaneous start: 17:30–19:30 and 20:00–22:00 (Tabelog, staff-maintained). Reservation only (Tabelog bookings). Omakase ¥4,400; all-you-can-drink +¥2,200, premium +¥3,300 (September 2026). Cards, e-money and PayPay accepted (Tabelog).',
    hours: ALL(day(['17:30', '19:30'], ['20:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Soemoncho 2-23, Green House Bldg 1F — 5 min from Shinsaibashi, Nagahoribashi or Nippombashi Stn',
    cuisine: 'Entertainment omakase sushi from the 881 (Yabai) Group · one course ¥4,400, about 15 items · with all-you-can-drink ¥6,600, premium ¥7,700 · e.g. Tosa katsuo, chawanmushi, seasonal fish sandwiches (salmon, cod), kamasu, yuan-yaki, tuna, unadon · chanko and a ramen made from the sushi fish broth · shaved-ice dessert · sake in kappa-shaped flasks · 8 counter seats, two seatings',
    website: null, gmaps: gm('鮨 響 宗右衛門町'), menu_url: null,
    notes: "[Sushi · a lively ¥4,400 omakase in two seatings on Soemoncho] A counter sushi bar from the 881 (\"Yabai\") Group, open since June 2025, whose idea is authentic counter sushi made approachable and fun. There's one omakase (¥4,400), or ¥6,600 with all-you-can-drink, served to eight guests at a time in two seatings at 17:30 and 20:00, opening with a group shout-out. The course runs about 15 items: Tosa katsuo, chawanmushi, seasonal fish sandwiches, kamasu, yuan-yaki, tuna, unadon, then chanko and a ramen made from the broth of the sushi fish. Diners love the warm, playful atmosphere and the head chef's friendliness; one found only six nigiri and no chutoro, and the shaved-ice dessert plain. The door shows only a QR sign. Reservation only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 June 2025 (Tabelog)', background: 'Sushi counter of the 881 (Yabai) Group, "authentic sushi made approachable" (2026 reviews; Tabelog, staff-maintained).', philosophy: 'Entertainment sushi at reasonable prices (September 2026 review).', specialty: 'Omakase with chanko and fish-broth ramen.',
      anecdotes: [
        { text: '"The basic course is an incredible value at JPY 4,400, tax included. Even with the all-you-can-drink option, it\'s just JPY 6,600." — September 2026.', source: R + 'B535516046/' },
        { text: '"The ramen served was made with the broth from the fish used in the sushi, which was a nice touch… the squid sushi was the standout." — September 2026.', source: R + 'B535972902/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 鮨 響、大阪市中央区宗右衛門町2-23 グリーンハウスビル 1F、心斎橋駅・長堀橋駅・日本橋駅から徒歩5分、毎日17:30〜22:00、1部17:30〜19:30・2部20:00〜22:00の一斉スタート、カード・電子マネー・PayPay可、カウンター8席、2025年6月1日開店。口コミ(2026年9〜10月): 「本格寿司を気軽に」、881グループ、エンタメ寿司、15品のおまかせ飲み放題付き6,600円、土佐の戻り鰹、基本のコース4,400円、プレミアム飲み放題7,700円、鯛、茶碗蒸し、秋鮭のサンド、入口に店名がなくQRコードの看板、全員で掛け声、握りは6貫で中トロがなく物足りないという声、寿司の魚のアラでとったラーメン、イカが一番、デザートはかき氷、温かい雰囲気、ちゃんこ、カッパの徳利の冷酒、予約制、鰹のたたき、鱈サンド、鰻丼、カマス、幽庵焼き、マグロ。',
      confidence: 'medium', sources: [TB, R + 'B535516046/', R + 'B535972902/', R + 'B507241130/', R + 'B536931745/', R + 'B537438378/', R + 'B537688979/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Playful, friendly counter; book on Tabelog; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町2-23 グリーンハウスビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町2番23号 (go) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535516046/', R + 'B537438378/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥4,400', 'Course', 'no', 'no', 'September 2026.', 'omakase'),
      it('', '', 'Omakase with all-you-can-drink', '¥6,600', 'Course', 'no', 'no', 'Premium drinks ¥7,700; September 2026.', 'nomihodai'),
    ] }, {
    cuisine: '881グループのエンタメおまかせ寿司・コースは1種類4,400円、約15品・飲み放題付き6,600円、プレミアム7,700円・土佐の鰹、茶碗蒸し、鮭や鱈など季節の魚のサンド、カマス、幽庵焼き、マグロ、鰻丼など・ちゃんこと寿司の魚のアラのラーメン・かき氷のデザート・カッパの徳利の日本酒・カウンター8席、2部制',
    neighborhood: '中央区宗右衛門町2-23 グリーンハウスビル1F。心斎橋駅・長堀橋駅・日本橋駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。醤油の味付け、魚のサンド、コースのラーメン。',
    vegan_detail: 'ヴィーガンではありません。魚介が中心、魚のアラのラーメンとちゃんこ。',
    notes: '[寿司・宗右衛門町、2部制の4,400円おまかせのにぎやかな鮨] 881(やばい)グループのカウンター寿司で、2025年6月開店、本格寿司を気軽に楽しく、がコンセプト。おまかせは1種類(4,400円)、飲み放題付きは6,600円、17時半と20時の2部制で8人が一斉にスタート、最初は全員で掛け声。コースは約15品: 土佐の鰹、茶碗蒸し、季節の魚のサンド、カマス、幽庵焼き、マグロ、鰻丼、最後はちゃんこと寿司の魚のアラのラーメン。温かくにぎやかな雰囲気と料理人の人柄が好評だが、握りが6貫で中トロがなく、かき氷のデザートは物足りないという声も。入口はQRコードの看板だけ。予約制。',
  });
}

// ================================================================ 中華スタンド ピュー
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27132748/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '03:00']);
  put({
    id: 'osaka_chuka_stand_pyu_higashishinsaibashi', name: '中華スタンド ピュー (Chuka Stand Pyu)', category: 'OMNI',
    lat: 34.671523, lng: 135.50307, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat gyoza and shumai wrappers, fried chicken, soy-based sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork gyoza, shrimp, chicken.',
    hours_raw: 'Mon–Sat 18:00–03:00 (L.O. 02:30); holidays 18:00–23:00 (L.O. 22:30); closed Sundays; until sold out; 2-hour limit when busy (Tabelog, staff-maintained). Smoking allowed. Cards and e-money accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-8-5, Nippo New Grand Bldg 1F — 5 min from Shinsaibashi Stn exit 6',
    cuisine: 'Late-night Chinese izakaya counter · juicy pan-fried gyoza, also with truffle oil · boiled and fried gyoza · shumai · yurinchi (fried chicken with sweet-spicy sauce) · shrimp mayo · fried rice · garlic-sprout namul · shirako mapo tofu in winter · drinks in original glasses · counter seats',
    website: null, gmaps: gm('中華スタンド ピュー 東心斎橋'), menu_url: null,
    notes: "[Chinese · a late-night gyoza counter open until 3 am in Higashi-Shinsaibashi] A casual counter Chinese bar, open since 2022, made for a second or third stop: it runs until 03:00 most nights. The gyoza are the reason to come, crisp-edged and bursting with sweet, juicy filling, light enough that two people keep ordering; try one with truffle oil, as staff suggest, and compare pan-fried, boiled and fried. Around them come bold drinking food: yurinchi in a sweet-spicy sauce, shumai, shrimp mayo, fried rice, garlic-sprout namul, and in winter a shirako mapo tofu. Staff are friendly. Smoke from the kitchen can fill the small room when busy, and smoking is allowed. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 14 October 2022 (Tabelog)', background: 'Chinese izakaya counter (Tabelog, staff-maintained).', philosophy: null, specialty: 'Pan-fried gyoza.',
      anecdotes: [
        { text: '"The crispy edges were quite fragrant, and the filling was juicy—these gyoza are definitely a great match for drinks. Next, I tried the Yurinchi (fried chicken with a sweet and spicy sauce)." — March 2026.', source: R + 'B523838223/' },
        { text: '"The gyoza is delicious, especially the pan-fried gyoza with truffle oil, which pairs perfectly with the drinks." — February 2026.', source: R + 'B530684765/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 中華スタンド ピュー、大阪市中央区東心斎橋2-8-5 日宝ニューグランドビル 1F、心斎橋駅6番出口から徒歩5分、長堀橋駅7番出口から徒歩6分、月〜土18:00〜翌3:00(L.O.2:30)、祝18:00〜23:00(L.O.22:30)、日曜定休、売り切れ次第終了、混雑時は2時間制、カード・電子マネー可、喫煙可、2022年10月14日開店、2軒目・3軒目に。口コミ(2026年1〜7月): 肉汁があふれる餃子、焼売、炒飯、海老マヨ、コスパがよい、カウンター中心、焼き餃子は香ばしい羽根、油淋鶏、オリジナルのグラス、スタッフが親切、焼き・水・揚げ餃子、軽くていくらでも食べられる、厨房の煙、喫煙可、深夜3時まで、トリュフオイルの焼き餃子、にんにくの芽のナムル、冬は白子の麻婆豆腐、甘い肉汁、スタッフのおすすめでトリュフオイル。',
      confidence: 'medium', sources: [TB, R + 'B523838223/', R + 'B530684765/', R + 'B521670582/', R + 'B526334690/', R + 'B527276980/', R + 'B531907059/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly staff suggest how to eat the gyoza (July 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-8-5 日宝ニューグランドビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated January–July 2026. Same building as Yoshitaka (2F).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目8番5号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523838223/', R + 'B530684765/', R + 'B526334690/'],
    price_note: 'No prices found; reviewers spent about ¥2,000–5,000.', last_checked: TODAY, items: [
      it('', '', 'Pan-fried gyoza (truffle oil option)', '', 'Gyoza', 'no', 'no', '2026.', 'yaki_gyoza'),
      it('', '', 'Boiled or fried gyoza', '', 'Gyoza', 'no', 'no', 'April 2026.', 'sui_age_gyoza'),
      it('', '', 'Yurinchi', '', 'Small plates', 'no', 'no', 'March 2026.', 'yurinchi'),
      it('', '', 'Shrimp mayo', '', 'Small plates', 'no', 'no', 'January 2026.', 'ebimayo'),
    ] }, {
    cuisine: '深夜営業の中華居酒屋カウンター・肉汁たっぷりの焼き餃子、トリュフオイルでも・水餃子と揚げ餃子・焼売・油淋鶏・海老マヨ・炒飯・にんにくの芽のナムル・冬は白子の麻婆豆腐・オリジナルのグラス・カウンター席',
    neighborhood: '中央区東心斎橋2-8-5 日宝ニューグランドビル1F。心斎橋駅6番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の餃子や焼売の皮、唐揚げ、醤油ベースのたれ。',
    vegan_detail: 'ヴィーガンではありません。豚肉の餃子、海老、鶏肉。',
    notes: '[中華・東心斎橋、深夜3時まで開く餃子のカウンター] 2軒目、3軒目向けの気軽なカウンターの中華バーで、2022年開店、ほとんどの夜は翌3時まで。目当ては餃子で、香ばしい羽根に甘い肉汁があふれ、軽いので2人でもつい追加してしまう。スタッフのすすめどおりトリュフオイルでも試し、焼き・水・揚げを食べ比べて。まわりには酒が進む一品: 甘辛いたれの油淋鶏、焼売、海老マヨ、炒飯、にんにくの芽のナムル、冬は白子の麻婆豆腐。スタッフは親切。混むと小さな店内に厨房の煙がこもることも、喫煙可。日曜定休。',
  });
}

// ================================================================ 香吾芽
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27088034/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '01:30']);
  put({
    id: 'osaka_kagome_curry_udon_higashishinsaibashi', name: '香吾芽 (Kagome)', category: 'OMNI',
    lat: 34.670641, lng: 135.504212, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon and somen; curry roux.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based curry broth with beef; egg.',
    hours_raw: 'Mon–Sat 18:00–01:30; closed Sundays and holidays; hours may change (Tabelog). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-6-5, 1F, a glass-fronted counter north of Aioibashi — about 6 min from Nippombashi Stn',
    cuisine: 'Curry udon with very thin noodles · light, dashi-rich curry broth with good beef · curry udon ¥1,100 · kizami (sliced fried tofu) curry udon ¥1,200, tempura curry udon · kayaku gohan (mixed rice) ¥350 · sudachi udon with plenty of sudachi · warm nyumen with fluffy egg and green onion · kizami udon · 12 counter seats',
    website: null, gmaps: gm('香吾芽 東心斎橋 カレーうどん'), menu_url: null,
    notes: "[Udon · thin-noodle curry udon, the Minami night-out finish] A small, glass-fronted counter just north of Aioibashi, run by two people, where diners end a night of drinking with curry udon. The curry is light and rich in dashi, with noticeably good beef, and it comes over very thin noodles that slip down easily, unusual for curry udon (¥1,100; kizami with fried tofu ¥1,200; tempura too). Add kayaku gohan (¥350). For something gentler, there's a sudachi udon fragrant with citrus, a warm nyumen with fluffy egg, or plain kizami udon. On one weekday evening it was busy with families and regulars, and more overseas visitors have found it lately. Open 18:00 to 01:30; closed Sundays; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Curry udon counter run by two people (January 2026 review).', philosophy: null, specialty: 'Thin-noodle curry udon.',
      anecdotes: [
        { text: '"The light curry soup paired beautifully with the extremely thin noodles, making for a delicious meal. The flavor of the beef was particularly outstanding." — February 2026.', source: R + 'B522801271/' },
        { text: '"The curry soup is rich with dashi and served with thin udon noodles… The curry udon is priced at JPY 1,100, tax included." — July 2026.', source: R + 'B531871642/' },
      ],
      japanese_sources_summary: '食べログ: 香吾芽、大阪市中央区東心斎橋2-6-5 エイトワンビル 1F、日本橋駅から437m、月〜土18:00〜翌1:30、日祝休み、カード・電子マネー・QR不可、カウンター12席、禁煙。口コミ(2026年1〜7月): だしが主役の細麺カレーうどん、相合橋を北へ渡り八幡筋の手前、ガラス張りのきれいな店、カウンターのみ、2人で営む、きざみカレーうどん1,200円、かやくご飯350円、天ぷらカレーうどん、平日18:30に家族連れや常連でにぎわう、あっさりしたカレーと極細麺、牛肉がおいしい、飲んだあとの締め、外国人客が増えた、5年ぶり、きざみうどん、やさしい、カレーうどん1,100円、すだちうどん、卵とじのにゅうめん。',
      confidence: 'medium', sources: [TB, R + 'B522801271/', R + 'B531871642/', R + 'B521313398/', R + 'B527747974/', R + 'B529087130/', R + 'B537324189/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'More overseas visitors lately (April 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-6-5 エイトワンビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目6番5号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B521313398/', R + 'B531871642/', R + 'B537324189/'],
    price_note: 'Prices from January–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Curry udon (thin noodles)', '¥1,100', 'Udon', 'no', 'no', 'July 2026.', 'curry_udon'),
      it('', '', 'Kizami curry udon', '¥1,200', 'Udon', 'no', 'no', 'January 2026.', 'kizami_curry'),
      it('', '', 'Kayaku gohan', '¥350', 'Rice', 'no', 'no', 'January 2026.', 'kayaku'),
      it('', '', 'Sudachi udon', '', 'Udon', 'no', 'no', 'July 2026.', 'sudachi'),
      it('', '', 'Egg nyumen', '', 'Noodles', 'no', 'no', 'July 2026.', 'nyumen'),
    ] }, {
    cuisine: '極細麺のカレーうどん・だしの効いたあっさりカレーとおいしい牛肉・カレーうどん1,100円・きざみカレーうどん1,200円、天ぷらカレーうどん・かやくご飯350円・すだちたっぷりのすだちうどん・卵とじとねぎの温かいにゅうめん・きざみうどん・カウンター12席',
    neighborhood: '中央区東心斎橋2-6-5 1F、相合橋の北のガラス張りのカウンター。日本橋駅から徒歩6分ほど',
    gf_detail: 'グルテンフリーではありません。小麦のうどんと素麺、カレーのルウ。',
    vegan_detail: 'ヴィーガンではありません。牛肉入りのだしのカレー、卵。',
    notes: '[うどん・ミナミの夜の締め、細麺のカレーうどん] 相合橋のすぐ北にあるガラス張りの小さなカウンターで、2人で営み、飲んだあとの締めにカレーうどんを食べに来る客が多い。カレーはあっさりでだしが効き、牛肉のおいしさが際立ち、カレーうどんには珍しい極細麺がつるりと入る(1,100円、きざみは1,200円、天ぷらも)。かやくご飯(350円)も一緒に。やさしいものなら、すだちの香るすだちうどん、ふわふわ卵のにゅうめん、きざみうどんも。平日の夕方に家族連れや常連でにぎわっていた日も、最近は海外の客も増えた。18時〜深夜1時半、日曜定休、現金のみ。',
  });
}

// ================================================================ 寛
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27086049/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:30', '23:00']);
  put({
    id: 'osaka_kan_izakaya_higashishinsaibashi', name: '寛 (Kan)', category: 'OMNI',
    lat: 34.671326, lng: 135.503105, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: fried oysters, beef cutlet, shrimp mayo, pasta, soy-based seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and meat throughout.',
    hours_raw: 'Mon–Sat 17:30–23:00; closed Sundays and holidays (Tabelog, staff-maintained). Appetizer charge ¥550. Reservations recommended. Cards accepted; no e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-8-7, Nippo N-STREET — 5 min from Shinsaibashi Stn',
    cuisine: 'Creative seafood-and-meat izakaya · shrimp mayo, the standout · scallop butter · fried oysters · sashimi of bluefin tuna and yellowtail belly · shirako with ponzu · simmered eggplant and enoki · octopus and cucumber with miso · grilled soy-marinated salmon · sukiyaki-style hot pot · beef cutlet · sanma and matsutake in foil · uni cream pasta · good sake list · no prices on the menu; course-style meals on request · counter seats, a second-floor room for about ten',
    website: null, gmaps: gm('寛 東心斎橋 居酒屋'), menu_url: null,
    notes: "[Japanese · a creative seafood-and-meat izakaya in Higashi-Shinsaibashi] A tucked-away izakaya in the middle of the Minami nightlife streets, open since 2015, with a counter downstairs and a second-floor room that groups of about ten can book. The menu runs from seafood to meat and seasonal plates: bluefin tuna and yellowtail-belly sashimi, shirako with ponzu, scallop butter that left one table speechless, fried oysters, sanma and matsutake in foil, a beef cutlet and uni cream pasta, but the dish people come back for is the shrimp mayo. The sake list is broad. There are no prices on the menu and portions scale to your group, so ask; dinners ran about ¥5,000–15,000. One diner found service slow and the room noisy, another found it calm and suited to business dinners. Book ahead; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 June 2015 (Tabelog)', background: 'Creative izakaya (Tabelog, staff-maintained; 2024–2026 reviews).', philosophy: null, specialty: 'Shrimp mayo; seasonal seafood and meat.',
      anecdotes: [
        { text: '"I\'ve never encountered a shrimp mayo that surpasses the one here! Haha. Everything I try is always delicious. I was also glad to enjoy a variety of seasonal dishes." — April 2026.', source: R + 'B526267876/' },
        { text: '"For around JPY 5000, we enjoyed about seven dishes including simmered eggplant and enoki mushrooms, octopus and cucumber with miso sauce, grilled salmon marinated in soy sauce, and a sukiyaki-style hot pot." — November 2024.', source: R + 'B495377759/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 寛、大阪市中央区東心斎橋2-8-7 日宝N-STREET A号、心斎橋駅から徒歩5分、月〜土17:30〜23:00、日祝休み、カード可、電子マネー・QR不可、お通し550円、20席(カウンター10、個室2)、個室・2階は10名ほどで貸切可、2015年6月25日開店。口コミ(2024年11月〜2026年4月): 予約、1階と2階、コースはないがコース風に対応、5,000円ほどで7品(茄子とえのきの煮浸し、蛸と胡瓜の酢味噌、鮭の醤油漬け焼き、すき焼き風の鍋)、静かで上品、接待に、魚介と肉がおいしい、気さくなスタッフ、日本酒が豊富、帆立バター、メニューに値段がない、人数で量が変わる、牡蠣フライと海老マヨ、わかりにくい場所、提供が遅くにぎやかという声、本マグロとハマチのトロの刺身、鱈の白子ポン酢、牛カツ、秋刀魚と松茸のホイル焼き、雲丹クリームパスタ、海老マヨが一番、季節の料理、予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B526267876/', R + 'B495377759/', R + 'B501296864/', R + 'B510798970/', R + 'B512167283/', R + 'B515190376/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No prices on the menu; ask staff. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-8-7 日宝N-STREET A号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目8番7号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526267876/', R + 'B510798970/', R + 'B515190376/'],
    price_note: 'No prices on the menu; dinners about ¥5,000–15,000; appetizer ¥550.', last_checked: TODAY, items: [
      it('', '', 'Shrimp mayo', '', 'Signature', 'no', 'no', 'April 2026.', 'ebimayo'),
      it('', '', 'Scallop butter', '', 'Small plates', 'no', 'no', 'July 2025.', 'hotate_butter'),
      it('', '', 'Fried oysters', '', 'Fried', 'no', 'no', 'July 2025.', 'kaki_fry'),
      it('', '', 'Uni cream pasta', '', 'Mains', 'no', 'no', 'October 2025.', 'uni_pasta'),
    ] }, {
    cuisine: '魚介も肉も楽しめる創作居酒屋・一番は海老マヨ・帆立バター・牡蠣フライ・本マグロとハマチのトロの刺身・白子ポン酢・茄子とえのきの煮浸し・蛸と胡瓜の酢味噌・鮭の醤油漬け焼き・すき焼き風の鍋・牛カツ・秋刀魚と松茸のホイル焼き・雲丹クリームパスタ・日本酒が豊富・メニューに値段なし、コース風も相談可・カウンター席、10名ほどの2階',
    neighborhood: '中央区東心斎橋2-8-7 日宝N-STREET。心斎橋駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。牡蠣フライ、牛カツ、海老マヨ、パスタ、醤油ベースの味付け。',
    vegan_detail: 'ヴィーガンではありません。魚介と肉が中心。',
    notes: '[和食・東心斎橋、魚介も肉もそろう創作居酒屋] ミナミの繁華街のただ中にひっそりある居酒屋で、2015年開店、1階はカウンター、2階は10名ほどで貸切もできる。料理は魚介から肉、季節の一品まで: 本マグロとハマチのトロの刺身、白子ポン酢、言葉を失うほどの帆立バター、牡蠣フライ、秋刀魚と松茸のホイル焼き、牛カツ、雲丹クリームパスタ。でもまた食べに来る理由は海老マヨ。日本酒は豊富。メニューに値段がなく量は人数に合わせるので確認を。5,000〜15,000円ほど。提供が遅く騒がしかったという声も、静かで接待向きという声も。予約を。日曜定休。',
  });
}

save();
