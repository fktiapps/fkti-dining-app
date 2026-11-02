// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 24.
//   + 祇園 丸山 Gion Maruyama (Gion kaiseki house since 1988, with private rooms over a garden)
//   + 二条城ふる田 Nijojo Furuta (one-chef charcoal counter near Nijo Castle; since 2016)
//   + スマート珈琲店 Smart Coffee (Teramachi kissaten since 1932, famous for pancakes)
//   + ワルダー Warder (takeaway bakery on Fuyacho; since 2007)
//   Taken in queue order from `queue.mjs kyoto-missed next notable 80` on 2026-11-02 (the first four after batch 23).
//   None is in data/kyoto.json: grep by name (丸山/Maruyama, ふる田/Furuta, スマート/Smart, ワルダー/Warder) and
//   address (祇園町南側570-171, 古城町371, 天性寺前町537, 坂井町452) found none. Gion Maruyama sits 21–43 m from five Gion
//   records — none within 3 m (check-stacked-pins run before hand-off). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-24');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 祇園 丸山
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001968/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gionmaruyama.com/';
  put({
    id: 'kyoto_gion_maruyama', name: '祇園 丸山 (Gion Maruyama)', category: 'OMNI',
    lat: 35.002679, lng: 135.776056, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. A seasonal Kyoto kaiseki with soy and miso seasoning; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a dashi-based kaiseki with fish, crab and seafood (2025–2026 reviews).',
    hours_raw: 'Tabelog lists 11:00–13:00 and 17:00–19:30, closed Wednesday; these read as seating times — the official site notes the last dinner entry was extended to 19:30 — so no closing times are known and no hours are stored. Reservation only, by phone 075-525-0009 or the official site (Tabelog; official site). Courses from about ¥50,000 before tax (December 2025) to ¥75,900 (April 2026), plus 15% service (Tabelog). Counter, private tatami rooms and sunken seating (Tabelog). Non-smoking (Tabelog). Cards (Tabelog). 5 min from Gion-Shijo Stn (Tabelog). Opened 15 January 1988 (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, the south-side lanes east of Hanamikoji — 5 min from Gion-Shijo Stn',
    cuisine: 'Seasonal Kyoto kaiseki with careful presentation, served in private rooms over a garden (2026 reviews) · April 2026 seasonal course ¥75,900: a sakura and gold-leaf platter, bamboo shoots several ways, firefly squid with broad beans, sakura sea bream with tuna, grilled moroko, sea-bream roe and monkfish, pea and egg rice · December 2025: a ¥50,000 (before tax) course with crab · ayu in summer (September 2025) · sake, shochu, wine; service 15% · the shop also sells take-home dishes such as seasonal rice and hot-pot sets (official site)',
    website: SITE, gmaps: gm('祇園 丸山'), menu_url: null,
    notes: "[Kaiseki · Gion, a quiet room over a rain-washed garden] A Gion kaiseki house since 1988, where private tatami rooms shut out the city and the only sound may be rain in the garden. The cooking is gentle and seasonal rather than showy — in spring, sakura sea bream, firefly squid with broad beans, bamboo shoots in several forms, grilled moroko and a pea-and-egg rice — and beautifully plated. An April 2026 diner notes two Michelin stars. Courses run about ¥50,000–76,000 plus 15% service; book ahead; closed Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Kaiseki house; no person is named in the sources read'], origin: null,
      background: 'Per 2025–2026 reviews: a renowned Gion kaiseki restaurant using seasonal ingredients with meticulous presentation; an April 2026 review notes two Michelin stars. The official site sells take-home dishes and notes the last dinner entry extended to 19:30. Tabelog: opened 15 January 1988; The Tabelog Award Bronze 2018–2021; Japanese cuisine WEST "Tabelog 100" 2021.',
      philosophy: null, specialty: 'Seasonal kaiseki in private rooms.',
      anecdotes: [
        { text: '"The only sound we heard was the gentle rain falling in the garden." — July 2026.', source: R + 'B531221100/' },
        { text: '"From the JPY 50,000 course, you can enjoy crab dishes." — December 2025.', source: R + 'B520367249/' },
        { text: '"I would love to visit this place four times a year, to experience each season\'s offerings." — September 2025.', source: R + 'B517857390/' },
      ],
      japanese_sources_summary: '公式サイト (gionmaruyama.com): 祇園丸山、夜営業の最終入店を19:30まで延長、特製弁当、お取り寄せ (京野菜白味噌鍋と松葉蟹ご飯、松茸ご飯、炭火焼鮎うどん、天然鱧のしゃぶしゃぶなど)。食べログ: 日本料理、東山区祇園町南側570-171、祇園四条駅から徒歩5分、月・火・木〜日 11:00〜13:00・17:00〜19:30、水曜休み、予約のみ、サービス料15%、カウンター・座敷・掘りごたつ、個室あり、カード可、1988年1月15日オープン、The Tabelog Award Bronze 2018〜2021、日本料理 WEST 百名店 2021。口コミ (2025年4月〜2026年7月、英語): 季節の懐石、庭に面した個室、コース50,000円 (税別) から75,900円、ミシュラン二つ星。',
      confidence: 'medium', sources: [TB, SITE, R + 'B477676659/', R + 'B494560291/', R + 'B502587718/', R + 'B505553737/', R + 'B508009381/', R + 'B513514608/', R + 'B517857390/', R + 'B520367249/', R + 'B531221100/', R + 'B537488146/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set kaiseki in private rooms; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-171',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live; Tabelog reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.002679, 135.776056); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 212m — the large 570 block, so the pin stays on the Tabelog point; five Gion records are 21–43 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537488146/', R + 'B520367249/'],
    price_note: 'No published prices read; from December 2025 and April 2026 reviews; service 15% (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Seasonal kaiseki course', '¥50,000–75,900', 'Course', 'ask', 'no', 'December 2025 (¥50,000 before tax) and April 2026 (¥75,900).', 'course'),
    ] }, {
    cuisine: '庭に面した個室で味わう、盛り付けにこだわった季節の京懐石 (2026年の口コミ)・2026年4月の季節のコース75,900円: 桜と金箔の盛り合わせ、筍をさまざまに、ホタルイカとそら豆、桜鯛とマグロ、もろこの焼き物、鯛の子と鮟鱇、豆と玉子のご飯・2025年12月: 蟹の入る50,000円 (税別) のコース・夏は鮎 (2025年9月)・日本酒、焼酎、ワイン、サービス料15%・持ち帰りの季節のご飯や鍋のセットも (公式サイト)',
    neighborhood: '祇園、花見小路の東の南側の路地。祇園四条駅から徒歩5分',
    gf_detail: '予約時に要確認。醤油や味噌を使う季節の京懐石。グルテンの情報なし (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。出汁に魚、蟹、魚介を使う懐石 (2025〜2026年の口コミ)。',
    notes: '[懐石・祇園、雨の庭を望む静かな部屋] 1988年からの祇園の懐石の店。座敷の個室は街の音を遮り、聞こえるのは庭の雨音だけ、という日も。料理は派手さより季節の穏やかさで、春は桜鯛、ホタルイカとそら豆、筍づくし、もろこの焼き物、豆と玉子のご飯を美しく盛る。2026年4月の口コミではミシュラン二つ星。コースは50,000〜76,000円ほどにサービス料15%、予約は早めに、水曜休み。',
  });
}

// ================================================================ 二条城ふる田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26027316/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_nijojo_furuta', name: '二条城ふる田 (Nijojo Furuta)', category: 'OMNI',
    lat: 35.012192, lng: 135.753892, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. A Japanese omakase of charcoal-grilled fish, dashi dishes and takikomi rice; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi and fish throughout (2025–2026 reviews).',
    hours_raw: 'Lunch 12:00–14:30; dinner from 17:00 with last entry 20:30; closed irregularly (Tabelog). No dinner closing time is published, so no hours are stored. Reservation only, by phone (075-254-8377) or online via the shop\'s Instagram or Facebook (Tabelog). Omakase from ¥20,000; a course built around chosen ingredients from ¥30,000 at market price (Tabelog); a June 2026 diner paid ¥24,200 including tax for the simplest course; service 10% (Tabelog). A counter of six; groups of six or more take the whole room; no preschool children except for private hire (Tabelog; November 2025). Cards and PayPay (Tabelog). 3 min from Nijojo-mae Stn (Tabelog). Opened 27 April 2016 (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Oshikoji-dori near Nijo Castle, behind a modest sign — 3 min from Nijojo-mae Stn',
    cuisine: 'A one-chef counter of charcoal-grilled seasonal fish and dashi-led Japanese cooking, ending with takikomi rice (2025–2026 reviews) · omakase from ¥20,000; ingredient-led course from ¥30,000 at market price (Tabelog) · summer 2025: generous summer dishes and grilled bonito; June 2026: watermelon and mango to finish · sake and wine (a June 2026 diner found drinks pricey)',
    website: null, gmaps: gm('二条城ふる田'), menu_url: null,
    notes: "[Kaiseki · Nijo Castle, a six-seat charcoal counter] Behind a modest sign near Nijo Castle, a counter of six where the owner-chef — trained at Yukimura, Wakuden and Gion Okada, per a November 2025 review — cooks alone over charcoal, letting the fish take its time. Dishes lean on dashi and the grill, and the meal ends with a takikomi rice diners remember. It can feel like being invited into someone's home. Omakase from ¥20,000 plus 10% service; one June 2026 diner found the drinks pricey. Book by phone or via Instagram.",
    chef_bio: { chef_name: null, roles: ['Owner-chef cooking alone (November 2025 reviews); not named in the sources'], origin: null,
      background: 'Per November 2025 reviews: the owner-chef trained at Yukimura and worked at Wakuden and Gion Okada, and runs the kitchen single-handed with charcoal cooking. Tabelog: opened 27 April 2016; The Tabelog Award Bronze 2018–2023; Japanese cuisine WEST "Tabelog 100" 2021, 2023.',
      philosophy: 'To serve a variety of delicious foods (July 2025 review).', specialty: 'Charcoal-grilled fish; takikomi rice.',
      anecdotes: [
        { text: '"The charcoal fire never rushed. It patiently waited for the moment when the fish would be at its most delicious." — November 2025.', source: R + 'B518033109/' },
        { text: '"The chef managed everything by himself and was incredibly efficient; every dish was outstanding." — November 2025.', source: R + 'B517511977/' },
        { text: '"The prices for alcohol seemed a bit high." — June 2026.', source: R + 'B529600555/' },
      ],
      japanese_sources_summary: '食べログ: 二条城ふる田、日本料理、中京区押小路通小川西入ル古城町371、二条城前駅2番出口から徒歩約3分、昼12:00〜14:30、夜17:00〜20:30 (最終入店)、不定休、予約のみ、Instagram・Facebook から予約可、基本のおまかせ20,000円〜、食材指定の特別コース30,000円〜 (時価)、サービス料10%、6名以上は貸切、未就学児は原則不可、カード・PayPay 可、2016年4月27日オープン、The Tabelog Award Bronze 2018〜2023、日本料理 WEST 百名店 2021・2023。口コミ (2025年7月〜2026年6月、英語): 6席のカウンター、ひとりで切り盛りする店主、Yukimura・Wakuden・Gion Okada で修業、炭火、炊き込みご飯、酒が高めという声。',
      confidence: 'medium', sources: [TB, R + 'B511124177/', R + 'B517511977/', R + 'B518033109/', R + 'B529600555/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase at a six-seat counter; book by phone or Instagram.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区押小路通小川西入ル古城町371',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated November 2025 and June 2026.' },
    pin_source: `Tabelog ${TB} (35.012192, 135.753892); cross-checked: GSI 京都府京都市中京区古城町371番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B529600555/'],
    price_note: 'Course prices from Tabelog remarks; June 2026 dinner ¥24,200 including tax; service 10%.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', 'from ¥20,000', 'Course', 'ask', 'no', 'Tabelog.', 'omakase'),
      it('', '', 'Special course built around chosen ingredients (market price)', 'from ¥30,000', 'Course', 'ask', 'no', 'Tabelog.', 'special'),
    ] }, {
    cuisine: 'ひとりの料理人が炭火で焼く旬の魚と出汁の和食のカウンター、締めは炊き込みご飯 (2025〜2026年の口コミ)・おまかせ20,000円〜、食材を指定する特別コース30,000円〜 (時価、食べログ)・2025年夏: 量たっぷりの夏の料理、鰹の焼き物・2026年6月: 締めの水菓子はすいかとマンゴー・日本酒とワイン (2026年6月には酒が高めという声)',
    neighborhood: '二条城の近くの押小路通、控えめな看板の店。二条城前駅から徒歩3分',
    gf_detail: '予約時に要確認。炭火焼きの魚、出汁の料理、炊き込みご飯の和のおまかせ。グルテンの情報なし (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。出汁と魚が中心 (2025〜2026年の口コミ)。',
    notes: '[懐石・二条城、6席の炭火のカウンター] 二条城の近く、控えめな看板の奥に6席のカウンター。2025年11月の口コミによれば Yukimura、Wakuden、Gion Okada で修業した店主がひとりで炭火に向かい、魚がいちばんおいしくなる瞬間をじっくり待つ。出汁と焼き物が軸で、締めの炊き込みご飯が忘れられないという声。誰かの家に招かれたような気分になる店。おまかせは20,000円からにサービス料10%、2026年6月には酒が高めという声も。予約は電話か Instagram で。',
  });
}

// ================================================================ スマート珈琲店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000647/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.smartcoffee.jp/';
  const H = day(['08:00', '19:00']);
  put({
    id: 'kyoto_smart_coffee', name: 'スマート珈琲店 (Smart Coffee)', category: 'OMNI',
    lat: 35.009462, lng: 135.767091, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the menu centres on pancakes, French toast and sandwiches; coffee and pudding aside, little else is wheat-free (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee suits; the pancakes, French toast, pudding and sandwiches use eggs, butter or dairy (2026 reviews).',
    hours_raw: '8:00–19:00 every day (Tabelog); the upstairs western-style lunch room keeps its own hours and is sometimes closed (October 2026). No reservations (Tabelog); weekend and morning queues, shorter on weekday afternoons (October 2026). 38 seats at tables (Tabelog). Non-smoking (Tabelog). Cards: AMEX only (Tabelog). Coffee beans to take away (October 2026). On Teramachi-dori north of Sanjo, 2 min from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi arcade north of Sanjo — 2 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Classic Kyoto kissaten, said to date from 1932 (October 2026 reviews): coffee downstairs, a western-style lunch room upstairs · pancakes with butter and maple syrup (pancake set ¥1,400), French toast, firm house pudding ¥700, mixed sandwich of ham and egg or vegetables and dashi-rolled omelette ¥900 · coffee ¥650; beans to take home · upstairs lunch such as hamburg steak (2021 visit)',
    website: SITE, gmaps: gm('スマート珈琲店 寺町'), menu_url: null,
    notes: "[Kissaten · Teramachi, Kyoto's pancake kissaten since 1932] A wood-panelled, high-ceilinged coffee house in the Teramachi arcade, said to date from 1932, where the queue forms for the pancakes — crisp outside, soft inside, with butter and maple syrup — and the French toast. The mixed sandwich and the firm, caramel-topped pudding are just as loved, and the coffee is rich and balanced; beans are sold to take home. Upstairs, a western-style lunch room keeps shorter hours. Pancake set ¥1,400; weekday afternoons have the shortest waits. Open daily 8:00–19:00; AMEX only.",
    chef_bio: { chef_name: null, roles: ['Long-established kissaten; no person is named in the sources'], origin: null,
      background: 'Per October 2026 reviews: established in 1932 and said to be the second-oldest coffee shop in Kyoto; the first floor is a café and the second a lunch room with its own kitchen. Tabelog Kissaten "Tabelog 100" 2021, 2022, 2026.',
      philosophy: null, specialty: 'Pancakes; French toast; mixed sandwich.',
      anecdotes: [
        { text: '"The pancakes, slathered with butter and drenched in maple syrup, brought me to tears." — October 2026.', source: R + 'B537338785/' },
        { text: '"I arrived before 10 AM and there were already about seven groups in line." — October 2026.', source: R + 'B537324548/' },
        { text: '"It’s rare to be moved by a sandwich, but this one truly impressed me." — October 2026.', source: R + 'B537031528/' },
      ],
      japanese_sources_summary: '食べログ: スマート珈琲店、喫茶店・洋食・パンケーキ、中京区寺町通三条上ル天性寺前町537、京都市役所前駅から徒歩2分、毎日8:00〜19:00、予約不可、38席、禁煙、カードは AMEX のみ、喫茶店百名店 2021・2022・2026。口コミ (2026年10〜11月、英語): 1932年創業、1階は喫茶、2階は洋食のランチ、ホットケーキ、フレンチトースト、固めのプリン、ミックスサンド、行列、豆の持ち帰り。',
      confidence: 'medium', sources: [TB, SITE, R + 'B440490717/', R + 'B475261978/', R + 'B536855500/', R + 'B537031528/', R + 'B537324548/', R + 'B537338785/', R + 'B537487249/', R + 'B537565251/', R + 'B537960197/', R + 'B538364762/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue at the door; order at the table; AMEX or cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区寺町通三条上ル天性寺前町537',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Kissaten Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.009462, 135.767091); cross-checked: GSI 京都府京都市中京区天性寺前町537番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537487249/', R + 'B536855500/', R + 'B537031528/'],
    price_note: 'No price list read; prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pancake set with coffee', '¥1,400', 'Kissa', 'no', 'no', 'October 2026.', 'pancake_set'),
      it('', '', 'Mixed sandwich', '¥900', 'Kissa', 'no', 'no', 'October 2026.', 'mixed_sandwich'),
      it('', '', 'Pudding', '¥700', 'Kissa', 'ask', 'no', 'October 2026.', 'pudding'),
      it('', '', 'Coffee', '¥650', 'Drinks', '', '', 'October 2026.', 'coffee'),
    ] }, {
    cuisine: '1932年創業という京都の老舗喫茶 (2026年10月の口コミ)。1階は珈琲、2階は洋食のランチ・バターとメープルシロップのホットケーキ (セット1,400円)、フレンチトースト、固めの自家製プリン700円、ハムと卵、または野菜とだし巻きのミックスサンド900円・珈琲650円、豆の持ち帰りも・2階はハンバーグなどのランチ (2021年)',
    neighborhood: '三条の北の寺町通のアーケード。京都市役所前駅から徒歩2分',
    gf_detail: '実際にはグルテンフリーではない。ホットケーキ、フレンチトースト、サンドイッチが中心で、珈琲とプリン以外に小麦なしのものはほとんどない (2026年の口コミ)。',
    vegan_detail: '要確認。ブラックの珈琲は合う。ホットケーキ、フレンチトースト、プリン、サンドイッチは卵、バター、乳製品を使う (2026年の口コミ)。',
    notes: '[喫茶・寺町、1932年からのホットケーキの喫茶] 寺町のアーケードの、木の内装と高い天井の喫茶。1932年創業といわれ、外はかりっと中はふんわりのホットケーキにバターとメープルシロップ、フレンチトーストを求めて行列ができる。ミックスサンドやカラメルの固めのプリンも人気で、珈琲はコクとバランスがよく、豆も買える。2階は洋食のランチで営業時間は短め。ホットケーキセット1,400円、平日の午後がすいている。毎日8時〜19時、カードは AMEX のみ。',
  });
}

// ================================================================ ワルダー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26004637/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '19:00']);
  put({
    id: 'kyoto_warder_bakery', name: 'ワルダー (Warder)', category: 'OMNI',
    lat: 35.007025, lng: 135.765887, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery of hard breads, danishes, croissants and filled breads (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many breads use butter, cheese, cream or meat; the Kyoto dashi bread uses fish stock; plain hard breads may suit (2026 reviews).',
    hours_raw: '9:00–19:00, Mon, Tue and Fri–Sun; closed Wednesday and Thursday (Tabelog). Takeaway only, no seats (Tabelog). Fresh bread keeps coming out through the morning; busy at weekends (October 2026). Reservations accepted (Tabelog). Cards, IC cards, iD and QUICPay (Tabelog). On Fuyacho-dori south of Rokkaku, by a small park; 8 min from Kyoto-Kawaramachi Stn (Tabelog). Opened 5 February 2007 (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fuyacho-dori south of Rokkaku, opposite a small park — 8 min from Kyoto-Kawaramachi Stn',
    cuisine: 'Small bakery packed with hard breads, danishes and filled breads under handwritten signs (2026 reviews) · examples: Kyoto dashi bread with iriko and katsuobushi (two per person); baked curry bread with curry from the Osaka shop Navin; Shiba-zuke French bread; garlic French; squid-ink bread; pistachio an-butter sandwich; cheese pretzel ¥270; banana-caramel bread ¥370; chestnut pie and chestnut danish; tea croissant with almond and apple; sausage focaccia; canelé; sliced loaf (September–November 2026)',
    website: null, gmaps: gm('ワルダー 京都'), menu_url: null,
    notes: "[Bakery · Fuyacho, the busy little bread shop] A small bakery by a little park on Fuyacho-dori, its wooden shelves crowded with handwritten labels and more bread arriving from the oven all morning: a Kyoto dashi bread that tastes of iriko and bonito (two per customer), a baked curry bread with curry from Osaka's Navin, Shiba-zuke French, squid-ink bread, and autumn chestnut pies and danishes. Prices are modest, from about ¥270. Takeaway only; cards and IC accepted; closed Wednesday and Thursday.",
    chef_bio: { chef_name: null, roles: ['Bakery staff; no person is named in the sources'], origin: null,
      background: 'Tabelog: bread and sandwiches, opened 5 February 2007; takeaway only; Bread "Tabelog 100" 2017, 2018 and Bread WEST 2020, 2022, 2026.',
      philosophy: null, specialty: 'Kyoto dashi bread; danishes; hard breads.',
      anecdotes: [
        { text: '"I tried the Dashi Bread after getting home, and from the very first bite, I could taste the flavors of iriko (dried sardines) and katsuobushi (dried bonito flakes)." — October 2026.', source: R + 'B538433073/' },
        { text: '"As soon as I entered just before noon, fresh bread started coming out one after another" — October 2026.', source: R + 'B537517870/' },
        { text: '"It uses a medium-spicy curry from the famous Osaka curry shop, Navin" — September 2026.', source: R + 'B536428391/' },
      ],
      japanese_sources_summary: '食べログ: ワルダー、パン・サンドイッチ、中京区麩屋町六角下ル坂井町452 ハイマート・ふや町 1F、京都河原町駅から徒歩8分、月・火・金〜日 9:00〜19:00、水・木休み、持ち帰りのみ、予約可、カード・交通系 IC・iD・QUICPay 可、2007年2月5日オープン、パン百名店 2017・2018、パン WEST 百名店 2020・2022・2026。口コミ (2026年9〜11月、英語): Kyoto Dashi Bread (1人2個まで)、Navin のカレーの焼きカレーパン、柴漬けのフランス、栗のパイ、あんバターサンド、手書きの札。',
      confidence: 'medium', sources: [TB, R + 'B495021063/', R + 'B536025407/', R + 'B536428391/', R + 'B536586978/', R + 'B536943620/', R + 'B537195906/', R + 'B537517870/', R + 'B538148435/', R + 'B538420380/', R + 'B538433073/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-service trays; pay at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区麩屋町六角下ル坂井町452 ハイマート・ふや町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Bread WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.007025, 135.765887); cross-checked: GSI 京都府京都市中京区坂井町452番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536025407/'],
    price_note: 'No price list; from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Cheese pretzel', '¥270', 'Bread', 'no', 'no', 'September 2026.', 'cheese_pretzel'),
      it('', '', 'Banana and caramel bread', '¥370', 'Bread', 'no', 'ask', 'September 2026.', 'banana_caramel'),
      it('', '', 'Kyoto dashi bread (two per person)', '', 'Bread', 'no', 'no', 'October 2026.', 'dashi_bread'),
    ] }, {
    cuisine: '手書きの札の並ぶ、ハード系、デニッシュ、具入りのパンがぎっしりの小さなパン屋 (2026年の口コミ)・例: 煮干しと鰹節の Kyoto Dashi Bread (1人2個まで)、大阪の Navin のカレーの焼きカレーパン、柴漬けのフランス、ガーリックフランス、イカスミのパン、ピスタチオのあんバターサンド、チーズプレッツェル270円、バナナとキャラメルのパン370円、栗のパイと栗のデニッシュ、りんご入りの紅茶のクロワッサン・アマンド、ソーセージのフォカッチャ、カヌレ、食パン (2026年9〜11月)',
    neighborhood: '六角の南の麩屋町通、小さな公園の向かい。京都河原町駅から徒歩8分',
    gf_detail: 'グルテンフリーではありません。ハード系、デニッシュ、クロワッサン、具入りのパンなど小麦のパン (2026年の口コミ)。',
    vegan_detail: '要確認。多くのパンにバター、チーズ、クリーム、肉を使い、Kyoto Dashi Bread は魚の出汁。シンプルなハード系なら合うかもしれない (2026年の口コミ)。',
    notes: '[パン・麩屋町、にぎわう小さなパン屋] 麩屋町通の小さな公園のそばのパン屋。木の棚に手書きの札が並び、午前中は焼きたてが次々と出てくる: 煮干しと鰹の味がする Kyoto Dashi Bread (1人2個まで)、大阪の Navin のカレーの焼きカレーパン、柴漬けのフランス、イカスミのパン、秋は栗のパイやデニッシュ。値段は手頃で270円ほどから。持ち帰りのみ、カードや交通系 IC 可、水・木曜休み。',
  });
}

save();
