// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 56.
//   Queue run from the osw2 worktree, 2026-11-07. Core continues (notable exhausted).
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + バーレスク Burlesque (smash-burger shop sharing a space with a hair salon, near Umekoji Park)
//   + MAHA CURRY (Indian curry and naan near Kitashirakawa; since 2014)
//   + イカヅチうどん Ikazuchi Udon (hand-made udon by the Ginkakuji-michi bus stop; since 2018)
//   + 喫茶とパンdo. Kissa to Pan do. (bakery café on Shirakawa-dori near Ginkakuji-michi)
//   None of the four is in data/kyoto.json: grep by id, name and address; 浄土寺西田町114 matches only a GSI cross-check line of
//   another record. Brand names grepped in queue-status.jsonl: no earlier rulings.
//   Service charges: none listed.
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; re-checked against current main before handoff.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-56');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ バーレスク
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26026593/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://burlesquekyoto.wixsite.com/burlesque2015';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_burlesque_umekoji', name: 'バーレスク (Burlesque)', category: 'OMNI',
    lat: 34.9900364378725, lng: 135.73929326022565, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: burgers on sesame buns with fries (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef patties, cheese and pulled pork (reviews).',
    hours_raw: '11:00–19:00 Monday, Tuesday, Wednesday, Friday and Sunday; closed Thursday and Saturday; hours may change (Tabelog). Bookings accepted. No cards; e-money and QR accepted (Tabelog). 15 seats including about four tables and a sofa by the salon window (Tabelog; February 2024; February 2025). Smoking allowed per Tabelog. Pets welcome inside (December 2025). A burger shop at the front with a hair salon at the back (2022–2025 reviews). About 10 min walk from JR Umekoji Kyoto-Nishi Stn, 300 m from Umekoji Park (Tabelog; August 2025).',
    hours: { 0: H, 1: H, 2: H, 4: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Umekoji Park — 10 min walk from Umekoji Kyoto-Nishi Stn',
    cuisine: 'American-style burgers without lettuce or tomato, letting the meat and bun lead (August 2025) · grilled-onion smash burger ¥1,160, about ¥1,500 with a drink (February 2024); double-onion smash burger; cheeseburger; double cheeseburger with fries ¥1,490 (January 2023); pulled-pork burger; kids’ cheeseburgers (2022–2025) · sesame buns; coffee; jazz playing (2023)',
    website: SITE, gmaps: gm('Burlesque 梅小路 ハンバーガー'), menu_url: TB,
    notes: "[Burgers · near Umekoji Park, smash burgers beside a hair salon] A stylish, jazz-playing burger counter that shares its space with a hair salon at the back — easy to mistake for a salon from outside. Juicy smash burgers with grilled onions on sesame buns, no lettuce or tomato, about ¥1,200–1,500. Dogs welcome inside. Handy after the Kyoto Aquarium. Closed Thursday and Saturday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Reviewers (2017–2025) describe an American-style burger shop at the entrance of a space that also houses a hair salon, with the hours written discreetly in English; the website name dates from 2015.',
      philosophy: null,
      specialty: 'Grilled-onion smash burger.',
      anecdotes: [
        { text: 'An eleven-time regular (March 2024) insists Burlesque is the place for smash burgers, especially the double onion.', source: R + 'B381676221/' },
        { text: 'A December 2023 passer-by had long taken it for a beauty salon before spotting the opening hours in English.', source: R + 'B476927298/' },
        { text: 'A December 2025 first-timer came with a dog, glad pets are welcome inside in winter.', source: R + 'B519691521/' },
      ],
      japanese_sources_summary: '食べログ: バーレスク (Burlesque)、ハンバーガー・カフェ、下京区朱雀北ノ口町3、梅小路京都西駅から371m、月火水金日 11:00〜19:00、木土定休、予約可、カード不可、電子マネー・QR可、15席、貸切可、喫煙可。口コミ (2017〜2025年、英語): 入口がハンバーガー店で奥が美容室、焼き玉ねぎのスマッシュバーガー1,160円 (ドリンク付きで1,500円ほど)、ダブルオニオンのスマッシュバーガー、チーズバーガー、ダブルチーズバーガーとポテト1,490円、プルドポーク、子ども向けのチーズバーガー、レタスとトマトなし、ごまのバンズ、ジャズ、ペット可、梅小路公園から300m、京都水族館の帰りに。',
      confidence: 'medium', sources: [TB, SITE, R + 'B241853449/', R + 'B381676221/', R + 'B446981014/', R + 'B457632496/', R + 'B459870196/', R + 'B471323573/', R + 'B476927298/', R + 'B479013063/', R + 'B495254022/', R + 'B500966700/', R + 'B512486736/', R + 'B519691521/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hours shown in English at the door; pets welcome.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区朱雀北ノ口町3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (34.990036, 135.739293); cross-checked: GSI 京都府京都市下京区朱雀北ノ口町3番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B479013063/', R + 'B459870196/'],
    price_note: 'Prices from January 2023 and February 2024 reviews.', last_checked: TODAY, items: [
      it('', '', 'Grilled-onion smash burger', '¥1,160', 'Burger', 'no', 'no', 'February 2024; about ¥1,500 with a drink.', 'smash'),
      it('', '', 'Double cheeseburger with fries', '¥1,490', 'Burger', 'no', 'no', 'January 2023.', 'double_cheese'),
      it('', '', 'Pulled-pork burger', '', 'Burger', 'no', 'no', '', 'pulled_pork'),
    ] }, {
    cuisine: 'レタスやトマトを挟まず肉とバンズを味わうアメリカンスタイルのハンバーガー (2025年8月)・焼き玉ねぎのスマッシュバーガー1,160円、ドリンク付きで1,500円ほど (2024年2月)、ダブルオニオンのスマッシュバーガー、チーズバーガー、ダブルチーズバーガーとポテト1,490円 (2023年1月)、プルドポーク、子ども向けのチーズバーガー (2022〜2025年)・ごまのバンズ、コーヒー、ジャズ (2023年)',
    neighborhood: '梅小路公園の近く。梅小路京都西駅から徒歩10分',
    gf_detail: 'グルテンフリー不可。ごまのバンズのハンバーガーとポテト (口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛のパティ、チーズ、プルドポーク (口コミ)。',
    notes: '[ハンバーガー・梅小路公園の近く、美容室と並ぶスマッシュバーガー] 奥に美容室のある空間の、ジャズの流れるおしゃれなハンバーガー店。外からは美容室と間違えそう。焼き玉ねぎのジューシーなスマッシュバーガーをごまのバンズで、レタスやトマトなし、1,200〜1,500円ほど。犬も店内OK。京都水族館の帰りに。木土休み。',
  });
}

// ================================================================ MAHA CURRY
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26025693/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_maha_curry', name: 'MAHA CURRY', category: 'OMNI',
    lat: 35.028570887863424, lng: 135.78765262058096, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: curry sets come with wheat naan, and cheese naan is the favourite (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A June 2024 reviewer says the restaurant caters to vegetarians; vegan dishes are not described (reviews).',
    hours_raw: 'Lunch 11:00–15:00, dinner 17:00–22:00 (last food order 21:30), daily (Tabelog). Bookings accepted. No cards or e-money (Tabelog). 20 seats: an 8-seat counter and a table downstairs, and a 10-seat sunken-kotatsu table upstairs; smoking allowed per Tabelog. Staff from India, per 2024 reviewers. 3 min walk from the Kitashirakawa bus stop, on the way to Ginkaku-ji (Tabelog; April 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kitashirakawa, near Ginkaku-ji — 3 min walk from the Kitashirakawa bus stop',
    cuisine: 'Indian curry with naan at student prices (2023–2026 reviews) · lunch curry-and-naan set with salad ¥590; cheese naan set ¥790, the favourite — slightly sweet, melting cheese (2024–2025) · chicken curry, shrimp and spinach curry; papad; fried spring rolls; Nepali-style fried noodles (April 2026) · medium spice by default, adjustable (February 2024)',
    website: null, gmaps: gm('MAHA CURRY 北白川'), menu_url: TB,
    notes: "[Indian curry · Kitashirakawa near Ginkaku-ji, cheap cheese naan] A friendly, bargain Indian curry house on the road to Ginkaku-ji, busy with students: a curry-and-naan lunch for ¥590, or ¥790 with a gooey, slightly sweet cheese naan. Upstairs is a sunken-kotatsu table in an old-house room. Open daily, lunch and dinner; cash only.",
    chef_bio: { chef_name: null, roles: ['Staff from India per 2024 reviewers; names not given'], origin: null,
      background: 'Opened 5 February 2014 (Tabelog). Reviewers (2023–2026) describe friendly Indian staff, a Nepali-style noodle dish on the menu, an upstairs sunken-kotatsu room, and prices that suit the student neighbourhood.',
      philosophy: null,
      specialty: 'Cheese naan set.',
      anecdotes: [
        { text: 'A January 2025 diner was on a third cheese naan and still found the slight sweetness addictive.', source: R + 'B502094501/' },
        { text: 'A November 2025 visitor came because a parent wanted curry with naan, and called it high value near Ginkaku-ji.', source: R + 'B516640031/' },
        { text: 'A June 2024 reviewer liked that the curries are not overly salty or greasy and the naan not oversized.', source: R + 'B486285874/' },
      ],
      japanese_sources_summary: '食べログ: MAHA CURRY、インド料理・インドカレー、左京区浄土寺西田町114、市バス・京都バス「北白川」から徒歩3分、毎日 11:00〜15:00・17:00〜22:00 (L.O. 料理21:30)、予約可、カード・電子マネー不可、20席 (1階カウンター8・テーブル2、2階掘りごたつ10)、喫煙可、2014年2月5日オープン。口コミ (2023〜2026年、英語): カレーとナンとサラダのランチ590円、チーズナンのセット790円、ほんのり甘いチーズナン、チキンカレー、海老とほうれん草のカレー、パパド、春巻き、ネパール風焼きそば、辛さは中辛から、インドの店員、ベジタリアン対応という口コミ、学生が多い、銀閣寺へ行く道。',
      confidence: 'medium', sources: [TB, R + 'B476755628/', R + 'B480607592/', R + 'B481370932/', R + 'B486285874/', R + 'B494752716/', R + 'B495729729/', R + 'B502094501/', R + 'B507101504/', R + 'B509095691/', R + 'B516640031/', R + 'B518729079/', R + 'B527170782/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区浄土寺西田町114',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.028571, 135.787653); cross-checked: GSI 京都府京都市左京区浄土寺西田町114番地 (lot) 30m; 10m from vm_asian_chample_foods_goya; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B518729079/', R + 'B494752716/'],
    price_note: 'Prices from 2024–2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Curry and naan lunch set with salad', '¥590', 'Lunch', 'no', 'ask', 'December 2025.', 'naan_set'),
      it('', '', 'Cheese naan set', '¥790', 'Lunch', 'no', 'no', 'December 2025.', 'cheese_naan_set'),
      it('', '', 'Shrimp and spinach curry', '', 'Curry', 'ask', 'no', 'April 2026.', 'shrimp_spinach'),
    ] }, {
    cuisine: '学生価格のインドカレーとナン (2023〜2026年の口コミ)・サラダ付きのカレーとナンのランチ590円、人気のチーズナンのセット790円 (ほんのり甘くチーズがとろける、2024〜2025年)・チキンカレー、海老とほうれん草のカレー、パパド、春巻き、ネパール風焼きそば (2026年4月)・辛さは中辛から調整可 (2024年2月)',
    neighborhood: '北白川、銀閣寺の近く。北白川のバス停から徒歩3分',
    gf_detail: 'グルテンフリーは実質不可。カレーのセットは小麦のナン付き、人気はチーズナン (口コミ)。',
    vegan_detail: '要確認。ベジタリアンにも対応するという口コミ (2024年6月) があるが、ヴィーガンの料理は説明されていない (口コミ)。',
    notes: '[インドカレー・銀閣寺近くの北白川、安いチーズナン] 銀閣寺へ向かう道の、学生でにぎわう気さくで安いインドカレー店。昼はカレーとナンのセット590円、とろけるほんのり甘いチーズナンなら790円。2階は古民家風の掘りごたつ席。毎日昼夜営業、現金のみ。',
  });
}

// ================================================================ イカヅチうどん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26031531/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '14:30'], ['18:00', '19:30']); const L = day(['11:30', '14:30']);
  put({
    id: 'kyoto_ikazuchi_udon', name: 'イカヅチうどん (Ikazuchi Udon)', category: 'OMNI',
    lat: 35.028149337058984, lng: 135.7897333794135, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat udon, with tempura such as chicken and burdock (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broth, chicken tempura and eel toppings (reviews).',
    hours_raw: 'Lunch 11:30–14:30 Wednesday–Sunday; dinner 18:00–19:30 Wednesday and Thursday only; closed Monday, Tuesday and some other days; closes when the noodles sell out (Tabelog). No reservations — expect a short queue; noodles can run out by 13:30 at weekends (February and June 2026). Groups of up to four recommended (August 2026). Cards, e-money and PayPay (Tabelog). 16 seats; non-smoking; babies welcome (Tabelog). Right by the Ginkakuji-michi bus stop on Shirakawa-dori just north of Imadegawa (Tabelog; June 2026).',
    hours: { 2: LD, 3: LD, 4: L, 5: L, 6: L }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginkakuji-michi, Shirakawa-dori near Imadegawa',
    cuisine: 'Homemade udon with natural dashi, firm and chewy (2026 reviews) · kashiwa (chicken) tempura bukkake, with grated daikon, in half or regular size — the signature (2026) · udon with ginger; daily "kimagure" udon (March 2026) · weekday kitsune udon with a burdock-tempura rice bowl set (June 2026) · summer grilled eel with yuba in chilled broth (July 2026)',
    website: null, gmaps: gm('イカヅチうどん 銀閣寺道'), menu_url: TB,
    notes: "[Udon · Ginkakuji-michi, hand-made udon with chicken tempura] A small, busy udon shop at the Ginkakuji-michi bus stop: firm, chewy homemade noodles in a clean natural dashi, best known for chicken (kashiwa) tempura bukkake with grated daikon; a daily special and, in summer, grilled eel with yuba. Around ¥1,000–2,000. Arrive early — it sells out. Lunch Wednesday–Sunday, short dinners Wednesday and Thursday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened 12 November 2018 (Tabelog). Reviewers (2026) describe udon with natural dashi and homemade noodles, a queue and early sell-outs.',
      philosophy: null,
      specialty: 'Kashiwa (chicken) tempura bukkake udon.',
      anecdotes: [
        { text: 'A six-time regular (July 2026) makes an annual tradition of the grilled eel with yuba in chilled broth.', source: R + 'B507040323/' },
        { text: 'A February 2026 diner arrived on a Sunday after 13:00; by 13:30 the noodles had sold out for those further back.', source: R + 'B523152664/' },
        { text: 'An April 2026 guest was gently warned the regular chicken tempura bukkake is a big portion.', source: R + 'B526792464/' },
      ],
      japanese_sources_summary: '食べログ: イカヅチうどん、うどん、左京区浄土寺西田町82-6、市バス・京都バス「銀閣寺道」のすぐそば、水木 11:30〜14:30・18:00〜19:30、金土日 11:30〜14:30、月火定休 (ほか不定休)、麺がなくなり次第終了、予約不可、カード・電子マネー・PayPay可、16席、禁煙、赤ちゃん可、2018年11月12日オープン。口コミ (2026年、英語): 天然だしと自家製麺、コシのある麺、かしわ天ぶっかけ (おろし、半玉・並)、生姜、日替わりの「気まぐれうどん」、平日限定のきつねうどんとごぼ天丼のセット、夏の焼き鰻と湯葉の冷やし、行列、週末は13時半ごろに売り切れ、4名までがおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B507040323/', R + 'B523152664/', R + 'B523462606/', R + 'B525123089/', R + 'B525217318/', R + 'B525804359/', R + 'B526114788/', R + 'B526792464/', R + 'B529878151/', R + 'B530914436/', R + 'B532731486/', R + 'B533782511/'] },
    cultural_comfort: { level: 'japanese', note: 'Queue; sells out.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区浄土寺西田町82-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.028149, 135.789733); cross-checked: GSI 京都府京都市左京区浄土寺西田町82番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525804359/'],
    price_note: 'No item prices in reviews; spend about ¥1,000–2,000.', last_checked: TODAY, items: [
      it('', '', 'Kashiwa (chicken) tempura bukkake udon', '', 'Udon', 'no', 'no', 'Half or regular size.', 'kashiwa_ten'),
      it('', '', 'Daily kimagure udon', '', 'Udon', 'no', 'no', '', 'kimagure'),
      it('', '', 'Grilled eel and yuba in chilled broth (summer)', '', 'Udon', 'no', 'no', 'July 2026.', 'unagi_yuba'),
    ] }, {
    cuisine: '天然だしの自家製うどん、コシがある (2026年の口コミ)・名物のかしわ天ぶっかけ、おろし、半玉か並 (2026年)・生姜のうどん、日替わりの「気まぐれうどん」 (2026年3月)・平日のきつねうどんとごぼ天丼のセット (2026年6月)・夏の焼き鰻と湯葉の冷やし (2026年7月)',
    neighborhood: '銀閣寺道、今出川近くの白川通',
    gf_detail: 'グルテンフリー不可。小麦の自家製うどんに、とり天やごぼう天 (口コミ)。',
    vegan_detail: 'ヴィーガン不可。だし、とり天、鰻のトッピング (口コミ)。',
    notes: '[うどん・銀閣寺道、手打ちうどんとかしわ天] 銀閣寺道のバス停そばの小さくにぎわううどん屋。天然だしにコシのある自家製麺、名物はおろしのかしわ天ぶっかけ。日替わりや夏の焼き鰻と湯葉も。1,000〜2,000円ほど。売り切れるので早めに。昼は水〜日、夜は水木のみ短く。',
  });
}

// ================================================================ 喫茶とパンdo.
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26029581/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '16:00']);
  put({
    id: 'kyoto_kissa_to_pan_do', name: '喫茶とパンdo. (Kissa to Pan do.)', category: 'OMNI',
    lat: 35.02860801786468, lng: 135.79165036057853, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a bakery café of sourdough and wheat breads, sandwiches and muffins (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Some breads may be plain, but ingredients are not described (reviews).',
    hours_raw: '9:00–16:00 Tuesday, Wednesday, Friday and Saturday; closed Monday, Thursday and Sunday; hours may change (Tabelog). Bookings accepted (Tabelog); often full, and breads sell out by early afternoon (2023–2026 reviews). Cards (JCB, AMEX, Diners), e-money and QR (Tabelog). 17 seats: tables and a 5-seat counter; non-smoking; breads to take away (Tabelog). At the Shirakawa-dori and Imadegawa crossing, 2 min walk from the Ginkakujimichi bus stop (Tabelog; January 2026).',
    hours: { 1: H, 2: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashirakawa, Shirakawa-Imadegawa crossing — 2 min from Ginkakujimichi bus stop',
    cuisine: 'A bakery and café of homemade breads and coffee (2023–2026 reviews) · soft, chewy sourdough breads; English muffins for breakfast; campagne sandwich about ¥600 (May 2023); breads warmed on request (2023–2025) · unsweetened chai about ¥500 and spicy chai with ginger; homemade-syrup lemonade about ¥600; beer (2023–2024)',
    website: null, gmaps: gm('喫茶とパンdo. 北白川'), menu_url: TB,
    notes: "[Bakery café · Kitashirakawa near Ginkakuji-michi, sourdough and chai] A calm bakery café at the Shirakawa-Imadegawa crossing, on the way to Ginkaku-ji but without a touristy feel: soft, chewy sourdough and English muffins, warmed if you like, with an unsweetened spicy chai or homemade lemonade. Breads sell out by early afternoon. Open 9:00–16:00, four days a week.",
    chef_bio: { chef_name: null, roles: ['Baker not named'], origin: null,
      background: 'Reviewers (2023–2026) describe a café that bakes its own bread and serves coffee, popular enough to be full at most times.',
      philosophy: null,
      specialty: 'Sourdough bread; spicy chai.',
      anecdotes: [
        { text: 'A spring 2024 walker on the Philosopher’s Path was greeted by the smell of freshly baked bread at the door.', source: R + 'B487332990/' },
        { text: 'An October 2024 lunch visitor found four groups ahead and only one kind of sandwich left.', source: R + 'B493580802/' },
        { text: 'A January 2026 visitor found every seat booked and took bread home instead.', source: R + 'B530954957/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶とパンdo.、パン・カフェ、左京区北白川東久保田町10-1 第二白川ハイツ1F、銀閣寺道バス停から徒歩2分、火水金土 9:00〜16:00、月木日定休、予約可、カード (JCB、AMEX、Diners)・電子マネー・QR可、17席 (テーブル、カウンター5)、禁煙、パンのテイクアウト。口コミ (2023〜2026年、英語): 自家製のパンとコーヒー、やわらかくもちもちのサワードウ、朝のイングリッシュマフィン、カンパーニュのサンド600円ほど、温めてくれる、甘くないチャイ500円ほど、生姜のスパイシーチャイ、自家製シロップのレモネード600円ほど、ビール、昼過ぎには売り切れ、いつも満席、白川通と今出川の交差点、銀閣寺へ向かう道。',
      confidence: 'low', sources: [TB, R + 'B465684771/', R + 'B471075275/', R + 'B473050824/', R + 'B481783463/', R + 'B487332990/', R + 'B492774995/', R + 'B493580802/', R + 'B493776151/', R + 'B496058463/', R + 'B504595797/', R + 'B530954957/', R + 'B532377950/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; breads to take away.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区北白川東久保田町10-1 第二白川ハイツ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.028608, 135.79165); cross-checked: GSI 京都府京都市左京区北白川東久保田町10番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B465684771/'],
    price_note: 'Prices from a May 2023 review.', last_checked: TODAY, items: [
      it('', '', 'Campagne sandwich', '¥600', 'Bread', 'no', 'ask', 'About ¥600, May 2023.', 'campagne'),
      it('', '', 'Chai (unsweetened)', '¥500', 'Drink', 'gf', 'ask', 'About ¥500, May 2023.', 'chai'),
      it('', '', 'Homemade lemonade', '¥600', 'Drink', 'gf', 'vegan', 'About ¥600, May 2023.', 'lemonade'),
    ] }, {
    cuisine: '自家製のパンとコーヒーのベーカリーカフェ (2023〜2026年の口コミ)・やわらかくもちもちのサワードウ、朝のイングリッシュマフィン、カンパーニュのサンド600円ほど (2023年5月)、頼めば温めてくれる (2023〜2025年)・甘くないチャイ500円ほどと生姜のスパイシーチャイ、自家製シロップのレモネード600円ほど、ビール (2023〜2024年)',
    neighborhood: '北白川、白川今出川の交差点。銀閣寺道バス停から徒歩2分',
    gf_detail: 'グルテンフリー不可。サワードウなどの小麦のパン、サンド、マフィンのベーカリーカフェ (口コミ)。',
    vegan_detail: '要確認。シンプルなパンもあるかもしれないが、原材料は説明されていない (口コミ)。',
    notes: '[ベーカリーカフェ・銀閣寺道近くの北白川、サワードウとチャイ] 白川今出川の交差点の落ち着いたベーカリーカフェ。銀閣寺への道沿いだが観光地っぽさはない。やわらかくもちもちのサワードウやイングリッシュマフィンを温めて、甘くないスパイシーチャイや自家製レモネードと。パンは昼過ぎに売り切れ。9:00〜16:00、週4日営業。',
  });
}

save();
