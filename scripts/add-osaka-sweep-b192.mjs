// Osaka sweep (2-mile circle around Dotonbori), batch 192 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + ANNIE's Diner (American and Mexican diner: hamburg steak lunches, tacos and burgers at night; Minami-Senba)
//   + おにぎり三昧 ちゅん太郎 Onigiri Zanmai Chuntaro (onigiri izakaya run by one young owner; Minami-Senba)
//   + 麻婆豆腐シン Mapo Tofu Shin (Sichuan-style mapo tofu specialist; Shinmachi)
//   + だし処 船場山本 Dashi Dokoro Semba Yamamoto (dashi-focused Japanese cooking in a renovated old house; Minami-Senba)
//   First batch after dropping the "pass over person-like shop names" habit (see docs/osaka-sweep.md).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 192);
const ALL7 = h => ({ 0: h, 1: h, 2: h, 3: h, 4: h, 5: h, 6: h });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ANNIE's Diner
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27141483/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '14:30'], ['17:00', '23:00']); const SA = day(['11:00', '18:00']);
  put({
    id: 'osaka_annies_diner_minamisenba', name: "ANNIE's Diner", category: 'OMNI',
    lat: 34.677526, lng: 135.50288, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; burgers, flour tortillas (burritos, quesadillas, tacos) and sauces point to wheat. Taco rice and the hamburg-steak plates are the dishes to ask about.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steaks, burgers, chicken wings, chili con carne, cheese and egg throughout; no vegan statement.',
    hours_raw: 'Mon–Fri 11:00–14:30 and 17:00–23:00; Sat 11:00–18:00 (last order 17:30); closed Sundays and holidays (Tabelog). Reservations accepted (Tabelog). Cards, e-money and QR accepted (Tabelog). 12 seats: 8 at the counter, one table of 4; smoking allowed except at lunch (Tabelog; a February 2026 diner went early for that reason). On the 2nd floor; look for the menu board on the street and on the stair landing (Tabelog reviews). Weekday lunch fills and lines form by noon (October 2026 review). Opened 7 February 2024 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minami-Senba 3-2-28, NIPPO Taiyo Bldg 2F — 5 min from Shinsaibashi Stn Exit 7',
    cuisine: 'Retro American diner with Mexican dishes (12 seats) · lunch: hamburg steak with a choice of weight and sauce, rice, soup, salad and potatoes (about ¥1,000), taco rice, a monthly special (chashu and fried egg set, eel torotama hamburg, arrabbiata cheese hamburg) · dinner: 200 g hamburg steak ¥1,400, Mexican potato salad ¥500, chicken, beef or pork tacos, beef burrito, chili con carne cheese quesadilla with guacamole and salsa, Buffalo wings with blue-cheese yogurt dip, melt garlic rice, "Maximum The Burg" on a teppan with hot cheese poured over, chocolate banana split · Corona',
    website: null, gmaps: gm("ANNIE's Diner 南船場"), menu_url: null,
    notes: "[American diner · Minami-Senba, hamburg-steak lunches and Tex-Mex nights] A second-floor diner done up in retro Americana (dolls, colorful stickers) with a counter and one window table. Lunch is the draw: a hamburg steak where you choose the weight, the sauce and how much rice, with soup, salad and potatoes for about ¥1,000, plus taco rice and a monthly special that one regular (14 visits) comes back for every time — a chashu-and-fried-egg set in October 2026, an eel torotama hamburg in July. Expect a line by noon. Evenings turn Tex-Mex: tacos you squeeze lime over, two-piece beef burritos, a chili-con-carne quesadilla with guacamole and salsa, Buffalo wings with a blue-cheese yogurt dip, and the 'Maximum The Burg', finished at the table with hot cheese. Smoking is allowed at night but not at lunch.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'American diner with Mexican influences that opened on 7 February 2024 (Tabelog).', philosophy: null, specialty: 'Hamburg steak; monthly lunch special; tacos and burritos.',
      anecdotes: [
        { text: '"This month\'s limited-time offering is the Unagi Torotama Hamburg, likely due to the Day of the Eel… the hamburger sauce was a sweet soy-based blend that complemented the eel perfectly." — July 2026, 13th visit.', source: R + 'B505269743/' },
        { text: '"I was able to choose the weight of the steak and the sauce, and they also asked how much rice I wanted. With rice, soup, salad, and potatoes included, it was around JPY 1000." — December 2025.', source: R + 'B518490668/' },
      ],
      japanese_sources_summary: '食べログ: ANNIE\'s Diner、大阪市中央区南船場3-2-28 NIPPOタイヨービル 2F、心斎橋駅7番出口から徒歩5分、月〜金11:00〜14:30・17:00〜23:00、土11:00〜18:00 (L.O. 17:30)、日祝休み、予約可、カード・電子マネー・QR可、12席 (カウンター8、テーブル4)、喫煙可 (ランチは禁煙)、オープン日2024年2月7日。口コミ(2025年6月〜2026年10月): アメリカンなレトロな内装、ハンバーグは重さとソースとご飯の量を選べてご飯・スープ・サラダ・ポテトつきで1000円ほど、タコライス、毎月の限定 (チャーシューと目玉焼きの定食、うなぎのとろたまハンバーグ、アラビアータのチーズハンバーグ)、ハンバーグ200g 1400円、メキシカンポテトサラダ500円、ライス250円、チキン・ビーフ・ポークのタコス、ビーフブリトー、チリコンカンのチーズケサディーヤ (ワカモレとサルサ)、バッファローウイング (ブルーチーズとヨーグルトのディップ)、メルトガーリックライス、鉄板で熱いチーズをかける「Maximum The Burg」、チョコバナナスプリット、コロナビール、平日のランチは昼には満席で行列。',
      confidence: 'medium', sources: [TB, R + 'B505269743/', R + 'B509187344/', R + 'B518490668/', R + 'B522062715/', R + 'B528976744/', R + 'B533357306/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose weight, sauce and rice amount for the hamburg (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-2-28 NIPPOタイヨービル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated December 2025–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目2番28号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B522062715/', R + 'B518490668/'],
    price_note: 'Prices from December 2025 and February 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hamburg steak lunch with rice, soup, salad and potatoes', '¥1,000', 'Lunch', 'ask', 'no', 'About ¥1,000; December 2025.', 'hamburglunch'),
      it('', '', 'Hamburg steak, 200 g', '¥1,400', 'Dinner', 'ask', 'no', 'February 2026.', 'hamburg200'),
      it('', '', 'Mexican potato salad', '¥500', 'Dinner', 'ask', 'ask', 'February 2026.', 'potatosalad'),
      it('', '', 'Beef burrito', '', 'Dinner', 'no', 'no', 'August 2026.', 'burrito'),
    ] }, {
    cuisine: 'メキシコ料理もあるレトロなアメリカンダイナー (12席)・ランチ: 重さとソースを選べるハンバーグ、ご飯・スープ・サラダ・ポテトつき (1000円ほど)、タコライス、毎月の限定 (チャーシューと目玉焼きの定食、うなぎのとろたまハンバーグ、アラビアータのチーズハンバーグ)・ディナー: ハンバーグ200g 1400円、メキシカンポテトサラダ500円、チキン・ビーフ・ポークのタコス、ビーフブリトー、チリコンカンのチーズケサディーヤ (ワカモレとサルサ)、バッファローウイング (ブルーチーズとヨーグルトのディップ)、メルトガーリックライス、鉄板で熱いチーズをかける「Maximum The Burg」、チョコバナナスプリット・コロナビール',
    neighborhood: '南船場3-2-28 NIPPOタイヨービル 2F。心斎橋駅7番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。バーガー、小麦のトルティーヤ (ブリトー、ケサディーヤ、タコス)、ソースは小麦の可能性。聞くならタコライスとハンバーグの皿。',
    vegan_detail: 'ヴィーガンではありません。ハンバーグ、バーガー、手羽、チリコンカン、チーズや卵が中心で、ヴィーガンの記載なし。',
    notes: '[アメリカンダイナー・南船場、ハンバーグのランチとメキシカンの夜] 人形やカラフルなステッカーでレトロなアメリカ風に飾った2階のダイナーで、カウンターと窓際のテーブルが1つ。人気はランチ。ハンバーグは重さ、ソース、ご飯の量を選べて、スープ、サラダ、ポテトつきで1000円ほど。タコライスや毎月の限定もあり、14回通う常連は毎回その限定を頼む (2026年10月はチャーシューと目玉焼きの定食、7月はうなぎのとろたまハンバーグ)。昼には行列。夜はメキシカン寄りで、ライムを絞るタコス、2本のビーフブリトー、ワカモレとサルサのチリコンカンのケサディーヤ、ブルーチーズとヨーグルトのディップのバッファローウイング、テーブルで熱いチーズをかける「Maximum The Burg」。夜は喫煙可、ランチは禁煙。',
  });
}

// ================================================================ おにぎり三昧 ちゅん太郎
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27121692/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_onigiri_zanmai_chuntaro', name: 'おにぎり三昧 ちゅん太郎 (Onigiri Zanmai Chuntaro)', category: 'OMNI',
    lat: 34.67733, lng: 135.498368, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the onigiri rice is plain, but fillings (mentaiko butter, egg-yolk miso, cream-cheese miso, tenmusu), miso soups, fried chicken and agedashi tofu may involve soy sauce, miso or batter.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan statement; ume onigiri and vegetable sides (spinach ohitashi, okara) exist, but okaka is bonito and the soups and ohitashi likely use fish dashi.',
    hours_raw: 'Daily 18:00–24:00; closing days not fixed (Tabelog). Reservations accepted; courses need booking ahead (Tabelog; February 2026 review). Cards accepted; no e-money or QR (Tabelog). 15 seats: 7 at the counter, 8 at tables; non-smoking, ashtray outside; children and strollers welcome (Tabelog). At the back of the building, easy to miss (Tabelog shop text). An April 2025 review describes a limited onigiri lunch 13:00–15:00 (one plate ¥1,500 or a pork kakuni set); not on the current listing. Opened 11 February 2021 (Tabelog).',
    hours: ALL7(day(['18:00', '24:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minami-Senba 4-10-21, Nippo Eco Bldg 1F (at the back) — 3 min from Yotsubashi Stn Exit 1-a, 4 min from Shinsaibashi Stn Exit 3',
    cuisine: 'Onigiri izakaya with seasonal fish, meat and vegetable dishes (15 seats) · onigiri of organic Koshihikari from Okayama: egg-yolk miso, mentaiko butter, house tuna mayo, cream-cheese miso, okaka, ume, tenmusu · miso soups including a "nebaneba" soup of sticky ingredients, clam soup and Senba soup · firefly squid, dashimaki, fried chicken, mackerel grilled with miso, white miso with dried persimmon, agedashi tofu, oden in winter, sashimi platter · "one plate" of three small onigiri with sides · sake and shochu',
    website: null, gmaps: gm('おにぎり三昧 ちゅん太郎'), menu_url: null,
    notes: "[Onigiri izakaya · Minami-Senba, a one-person counter at the back of a building] A small izakaya hidden at the back of the Nippo Eco Building, run by one young owner, where the onigiri are the point: soft, gently shaped rice (organic Koshihikari from Okayama) with crisp nori and fillings like egg-yolk miso, mentaiko butter, house tuna mayo, cream-cheese miso and tenmusu. Around them come careful home-style dishes — firefly squid, dashimaki, mackerel grilled with miso, agedashi tofu, and a white miso with dried persimmon one regular calls exceptional — and a list of miso soups, from a sticky 'nebaneba' soup to clam soup with huge clams. Diners mention organic, pesticide-free ingredients and say non-drinkers are just as welcome. The 'one plate' of three small onigiri can only be ordered when the owner isn't busy.",
    chef_bio: { chef_name: null, roles: ['Owner (runs the shop alone, per an October 2025 review)'], origin: null, background: 'Onigiri izakaya that opened on 11 February 2021 (Tabelog); "run by a young man on his own" (October 2025 review).', philosophy: 'Seasonal fish, meat and vegetables, finished with onigiri; organic rice and vegetables (Tabelog shop text; 2025 reviews).', specialty: 'Onigiri; miso soups; white miso with dried persimmon.',
      anecdotes: [
        { text: '"The onigiri were fluffy and tender, pairing wonderfully with the crispy nori… watching the preparation process gave me the impression that they were handled gently to preserve the rice\'s deliciousness." — April 2025, One Plate ¥1,500.', source: R + 'B505323472/' },
        { text: '"Everything was delicious, but the white miso with dried persimmons was truly exceptional." — March 2026, fifth visit.', source: R + 'B510172562/' },
      ],
      japanese_sources_summary: '食べログ: おにぎり三昧 ちゅん太郎、大阪市中央区南船場4-10-21 日宝エコービル 1F、四ツ橋駅1-a出口から徒歩3分、心斎橋駅3番出口から徒歩4分、毎日18:00〜24:00、不定休、予約可、カード可、電子マネー・QR不可、15席 (カウンター7、テーブル8)、禁煙 (外に灰皿)、子供・ベビーカー可、オープン日2021年2月11日。店の紹介: おにぎりの専門で、季節の魚・肉・野菜の料理、お酒に合う料理とおにぎりで締め、飲まない人も、ビルの奥でわかりにくいがお一人様歓迎。口コミ(2025年4月〜2026年9月): 岡山県産の有機コシヒカリ、卵黄味噌、明太バター、自家製ツナマヨ、クリームチーズ味噌、おかか、梅、天むす、ねばねばの汁、大きなあさりの汁、船場汁、ホタルイカ、だし巻き、唐揚げ、鯖の味噌焼き、干し柿の白味噌、揚げ出し豆腐、おでん、刺身の盛り合わせ、有機・無農薬の食材、若い男性が一人で営む、ワンプレート (小さなおにぎり3つ) は店主に余裕があるときだけ、コースは事前予約、2025年4月には13時〜15時の限定のおにぎりランチ (ワンプレート1500円か豚の角煮の定食)。',
      confidence: 'medium', sources: [TB, R + 'B505323472/', R + 'B506450084/', R + 'B510172562/', R + 'B519818310/', R + 'B523353057/', R + 'B535732868/'] },
    cultural_comfort: { level: 'japanese', note: 'Small counter run by one person; menu in Japanese (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-10-21 日宝エコービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April 2025–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目10番21号 (go) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B505323472/', R + 'B506450084/', R + 'B535732868/'],
    price_note: 'Price from an April 2025 review (lunch plate).', last_checked: TODAY, items: [
      it('', '', 'One plate: three small onigiri with side dishes and miso soup', '¥1,500', 'Onigiri', 'ask', 'ask', 'April 2025 lunch; also at night when the owner has time (February 2026).', 'oneplate'),
      it('', '', 'Onigiri, mentaiko butter', '', 'Onigiri', 'ask', 'no', 'May 2025–September 2026.', 'mentaiko'),
      it('', '', 'Onigiri, egg-yolk miso', '', 'Onigiri', 'ask', 'no', 'May 2025.', 'yolkmiso'),
      it('', '', 'White miso with dried persimmon', '', 'Small dishes', 'ask', 'ask', 'March 2026.', 'persimmon'),
    ] }, {
    cuisine: '季節の魚・肉・野菜の料理もあるおにぎりの居酒屋 (15席)・岡山県産の有機コシヒカリのおにぎり: 卵黄味噌、明太バター、自家製ツナマヨ、クリームチーズ味噌、おかか、梅、天むす・汁: ねばねばの汁、あさりの汁、船場汁など・ホタルイカ、だし巻き、唐揚げ、鯖の味噌焼き、干し柿の白味噌、揚げ出し豆腐、冬はおでん、刺身の盛り合わせ・小さなおにぎり3つの「ワンプレート」・日本酒と焼酎',
    neighborhood: '南船場4-10-21 日宝エコービル 1F (ビルの奥)。四ツ橋駅1-a出口から徒歩3分、心斎橋駅3番出口から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。おにぎりのご飯はそのままだが、具 (明太バター、卵黄味噌、クリームチーズ味噌、天むす)、汁、唐揚げ、揚げ出し豆腐に醤油、味噌、衣が使われている可能性。',
    vegan_detail: '要確認。ヴィーガンの記載なし。梅のおにぎりや野菜の小鉢 (ほうれん草のおひたし、おから) はあるが、おかかは鰹節で、汁やおひたしは魚の出汁の可能性。',
    notes: '[おにぎりの居酒屋・南船場、ビルの奥の一人営業のカウンター] 日宝エコービルの奥に隠れた小さな居酒屋で、若い店主が一人で営む。主役はおにぎり。岡山県産の有機コシヒカリをふんわりやさしく握り、パリッとした海苔で、具は卵黄味噌、明太バター、自家製ツナマヨ、クリームチーズ味噌、天むすなど。ほかにホタルイカ、だし巻き、鯖の味噌焼き、揚げ出し豆腐など、ていねいな家庭的な料理。常連が絶品という干し柿の白味噌も。汁はねばねばの汁から大きなあさりの汁まで。有機・無農薬の食材を使っているという声や、飲まない人も気軽に食事できるという声。小さなおにぎり3つの「ワンプレート」は店主が忙しくないときだけ。',
  });
}

// ================================================================ 麻婆豆腐シン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27132480/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:30', '22:00']);
  put({
    id: 'osaka_mapo_tofu_shin_shinmachi', name: '麻婆豆腐シン (Mapo Tofu Shin)', category: 'OMNI',
    lat: 34.676046, lng: 135.495196, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; mapo tofu, the house chili oil and the four-hour meat sauce are seasoned sauces, and the menu also has xiao long bao, shumai and gyoza in wheat wrappers.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the mapo tofu is built on a minced-meat sauce, and the rest of the menu is chicken, shrimp and pork; no vegan statement.',
    hours_raw: 'Mon–Sat 11:30–15:00 (last order 14:30) and 18:30–22:00 (last order 21:15); closed Sunday; closed 31 December–3 January (Tabelog). Reservations accepted (Tabelog). Lunch is cash or PayPay only; cards accepted at dinner; no e-money; PayPay and au PAY (Tabelog). 18 seats, counter seating; non-smoking; children and strollers welcome (Tabelog). Lines form at lunch (October 2026 review). Opened 2 November 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-25-3, 8R Bld.5 1F — 3 min from Yotsubashi Stn, 4 min from Nishi-Ohashi Stn',
    cuisine: 'Mapo tofu specialist and Chinese bistro with wine (18 seats) · Shin-chan\'s Mapo Tofu (sweet and spicy) ¥1,400 at lunch with rice (free refills), soup and pickled mustard greens · First Love Mapo Tofu (hot and numbing) · mapo curry · house chili oil and a meat sauce cooked for four hours · at dinner mapo with an egg yolk to stir in · ebi mayo with nuts · yodare chicken · spicy chicken · xiao long bao · shrimp shumai · Kurobuta gyoza · sesame dumplings',
    website: null, gmaps: gm('麻婆豆腐シン 新町'), menu_url: null,
    notes: "[Mapo tofu · Shinmachi, a café-looking Sichuan bistro with lunch lines] A stylish, café-like front in the Shinmachi office district hides a mapo tofu specialist; at lunch the line tells you you've found it. The house chili oil and a chunky meat sauce simmered for four hours carry two versions: Shin-chan's Mapo Tofu, sweet-spicy with a hint of cinnamon and a numbness that builds slowly (¥1,400 with rice refills, soup and pickled mustard greens), and the hot First Love Mapo Tofu, named for the jolt it gives. There's also a mapo curry. Some diners find the standard heat mild and suggest asking for it spicier. At dinner the mapo comes with an egg yolk to stir in, alongside ebi mayo under crunchy nuts, yodare chicken, xiao long bao and Kurobuta gyoza. Lunch is cash or PayPay only; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Mapo tofu specialist that opened on 2 November 2022 (Tabelog).', philosophy: null, specialty: 'Mapo tofu with house chili oil and a four-hour meat sauce; ebi mayo; yodare chicken.',
      anecdotes: [
        { text: '"The first bite left a lasting impression with a subtle sweetness from the cinnamon aroma. At first, I thought it wasn\'t too spicy, but as I continued eating, the numbing sensation from the Sichuan peppercorns gradually kicked in." — October 2026, Shin-chan\'s Mapo Tofu (Sweet and Spicy) ¥1,400.', source: R + 'B537245181/' },
        { text: '"The signature dish, Mapo Tofu, is served in a unique style where you mix in the egg yolk placed in the center." — September 2026, dinner.', source: R + 'B535435632/' },
      ],
      japanese_sources_summary: '食べログ: 麻婆豆腐シン、大阪市西区新町1-25-3 8R Bld.5 1F、四ツ橋駅から徒歩3分、西大橋駅から徒歩4分、月〜土11:30〜15:00 (L.O. 14:30)・18:30〜22:00 (L.O. 21:15)、日曜休み、12月31日〜1月3日休み、予約可、ランチは現金かPayPayのみ、ディナーはカード可、18席、禁煙、子供・ベビーカー可、オープン日2022年11月2日。口コミ(2025年12月〜2026年10月): シンちゃんの麻婆豆腐 (甘辛) 1400円、ご飯おかわり自由・スープ・ザーサイつき、シナモンの香り、だんだん花椒のしびれ、初恋麻婆豆腐 (辛口)、麻婆カレー、自家製のラー油と4時間かけて作る肉味噌、夜は卵黄をのせた麻婆豆腐、ナッツのエビマヨ、よだれ鶏、辛い鶏、小籠包、海老焼売、黒豚餃子、ごま団子、辛さは控えめという声、ランチは行列、カフェのようなおしゃれな外観。',
      confidence: 'medium', sources: [TB, R + 'B518606094/', R + 'B535435632/', R + 'B536125338/', R + 'B536431969/', R + 'B537245181/', R + 'B537438131/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick a mapo version and spice level; lunch cash or PayPay (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-25-3 8R Bld.5 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目25番3号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537245181/', R + 'B537438131/', R + 'B536431969/'],
    price_note: 'Price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', "Shin-chan's Mapo Tofu (sweet and spicy), lunch with rice, soup and pickles", '¥1,400', 'Mapo tofu', 'ask', 'no', 'October 2026; rice refills free.', 'shinmapo'),
      it('', '', 'First Love Mapo Tofu (spicy)', '', 'Mapo tofu', 'ask', 'no', 'October 2026.', 'hatsukoi'),
      it('', '', 'Mapo curry', '', 'Mapo tofu', 'ask', 'no', 'September 2026.', 'mapocurry'),
      it('', '', 'Ebi mayo with nuts', '', 'Dinner', 'ask', 'no', 'September 2026.', 'ebimayo'),
    ] }, {
    cuisine: 'ワインもある麻婆豆腐の専門の中華ビストロ (18席)・シンちゃんの麻婆豆腐 (甘辛)、ランチは1400円でご飯おかわり自由、スープとザーサイつき・初恋麻婆豆腐 (辛口、しびれ)・麻婆カレー・自家製のラー油と4時間かけて作る肉味噌・夜は卵黄を混ぜて食べる麻婆豆腐・ナッツのエビマヨ・よだれ鶏・辛い鶏・小籠包・海老焼売・黒豚餃子・ごま団子',
    neighborhood: '新町1-25-3 8R Bld.5 1F。四ツ橋駅から徒歩3分、西大橋駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。麻婆豆腐、自家製のラー油、4時間煮込む肉味噌は調味したソースで、ほかに小籠包、焼売、餃子の小麦の皮も。',
    vegan_detail: 'ヴィーガンではありません。麻婆豆腐はひき肉の肉味噌がベースで、ほかの料理も鶏、海老、豚。ヴィーガンの記載なし。',
    notes: '[麻婆豆腐・新町、カフェのような外観の中華ビストロ、昼は行列] 新町のオフィス街にある、カフェのようにおしゃれな外観の麻婆豆腐の専門店。昼は行列が目印。自家製のラー油と4時間かけて煮込むゴロッとした肉味噌で、麻婆豆腐は2種類。シナモンがほんのり香り、しびれがじわじわくる甘辛の「シンちゃんの麻婆豆腐」 (1400円、ご飯おかわり自由、スープとザーサイつき) と、名前のとおり衝撃の辛さの「初恋麻婆豆腐」。麻婆カレーも。ふつうの辛さは控えめで、辛くしてもらうといいという声も。夜は卵黄をのせた麻婆豆腐に、ナッツをのせたエビマヨ、よだれ鶏、小籠包、黒豚餃子。ランチは現金かPayPayのみ。日曜休み。',
  });
}

// ================================================================ だし処 船場山本
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27126992/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://sembayamamoto.com/';
  const H = day(['11:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_dashidokoro_semba_yamamoto', name: 'だし処 船場山本 (Dashi Dokoro Semba Yamamoto)', category: 'OMNI',
    lat: 34.677428, lng: 135.498422, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the kombu-cured sashimi, dashimaki and dashi chazuke are dashi-based, but soy sauce, miso soup and the chicken tempura set are likely wheat sources.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the house dashi is kombu with honkarebushi bonito (official site), and the sets center on fish, egg and chicken.',
    hours_raw: 'Mon–Sat 11:00–14:00 (last order 13:30) and 17:00–22:00; closed Sundays, holidays and the 2nd and 4th Wednesday (Tabelog). No lunch reservations, and lunch ends when sold out (official site; Tabelog). Dinner reservations accepted; dinner is generally limited to 2 hours (Tabelog). Cards, e-money and QR accepted (Tabelog). 11 seats: 5 at the counter, 6 at tables; non-smoking (Tabelog). Lines form before opening at lunch (2026 reviews). Google Maps leads to 小倉屋山本\'s main store instead; follow the directions on the official site (official site). Opened 13 December 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 4-10-22, in a back alley near Shinmachibashi — 5 min from Shinsaibashi Stn Exit 3 or Yotsubashi Stn Exit 1-A',
    cuisine: 'Dashi-centered Japanese cooking in a renovated old house (11 seats) · dashi of ma-kombu from southern Hokkaido and Makurazaki honkarebushi · lunch: kombu-cured gozen ¥1,600 (three kombu-cured sashimi such as sea bream, salmon, kinmedai, skipjack or butterfish; dashimaki; kinpira gobo; tsukudani; miso soup; finished as dashi chazuke with salted kombu), chicken tempura gozen, a daily gozen (simmered sea bream) · dinner: à la carte and courses, autumn 2026: Kagoshima Black Wagyu yaki-shabu with Izumo eggs, autumn salmon dashi chazuke, lotus root fried in rice-cracker crumbs, hojicha pudding and fig brûlée · seasonal sake and shochu',
    website: OWN, gmaps: gm('だし処 船場山本'), menu_url: OWN,
    notes: "[Dashi cooking · Minami-Senba, a hidden old house run by a 170-year-old Osaka company] A small, modern-feeling Japanese restaurant in a renovated old house down a narrow Senba back alley, run by 小倉屋山本, a company with 170 years of history, on the street where it was founded (official site). Everything turns on the dashi: ma-kombu from southern Hokkaido and honkarebushi from Makurazaki. Lunch is the famous part, with a line before opening and no reservations: the kombu-cured gozen (¥1,600) brings three sashimi cured in kombu, a dashimaki diners call the best, kinpira gobo and miso soup, then hot dashi poured over rice and salted kombu for dashi chazuke. A regular on a 14th visit was still seen off by the familiar staff. Dinner is courses and à la carte with seasonal sake. Google Maps points to the company's main store; use the site's directions.",
    chef_bio: { chef_name: null, roles: [], origin: 'Osaka (Senba)', background: 'Japanese restaurant run by 小倉屋山本, a company with 170 years of history, in a renovated old house on the Senba back alley where the company was founded (official site). Opened 13 December 2021 (Tabelog).', philosophy: '"The essence of dashi cooking rooted in Osaka tradition" — dashi from southern-Hokkaido ma-kombu and Makurazaki honkarebushi (official site).', specialty: 'Kombu-cured gozen with dashi chazuke; dashimaki.',
      anecdotes: [
        { text: '"I poured the dashi over the rice, topped it with salted kombu, and made the ultimate dashi chazuke… the best way to experience the umami of the dashi." — October 2026, Kombu-zime Gozen ¥1,600.', source: R + 'B537325532/' },
        { text: '"As always, I was seen off by the familiar staff. Thank you for a wonderful meal! I will definitely come back." — October 2026, 14th visit.', source: R + 'B521694193/' },
      ],
      japanese_sources_summary: '食べログ: だし処 船場山本、大阪市中央区南船場4-10-22、心斎橋駅3番出口・四ツ橋駅1-A出口から徒歩5分、月〜土11:00〜14:00 (L.O. 13:30)・17:00〜22:00、日祝と第2・第4水曜休み、ランチは予約不可、ディナーは原則2時間制、カード・電子マネー・QR可、11席 (カウンター5、テーブル6)、禁煙、オープン日2021年12月13日。公式サイト: 心斎橋に佇む和食隠れ家、170年の歴史を持つ小倉屋山本が手がける店、北海道道南産の真こんぶと鹿児島県枕崎産の本枯節のだし、新町橋近く南船場の古民家を再生、小倉屋山本が創業の地として歩んできた船場裏路地、ランチは予約不可で完売次第終了、Googleマップでは小倉屋山本本店への案内になる。Instagram (2026年秋): 鹿児島県産黒毛和牛の焼きしゃぶと出雲卵、秋鮭の出汁茶漬け、蓮根のあられ揚げ、ほうじ茶プリンといちぢくのブリュレ。口コミ(2026年7月〜10月): 昆布〆御膳1600円 (昆布〆の刺身3種、だし巻き、きんぴら、佃煮、味噌汁、塩昆布をのせただし茶漬けで締め)、とり天御膳、日替わり御膳 (鯛の煮付け)、開店前から行列。',
      confidence: 'medium', sources: [TB, OWN, R + 'B521694193/', R + 'B531165533/', R + 'B534152918/', R + 'B535330187/', R + 'B535342433/', R + 'B537325532/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Line up for lunch, no reservations; book dinner (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-10-22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026; official site updated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目10番22号 (go) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537325532/', R + 'B534152918/'],
    price_note: 'Price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Kombu-cured gozen with dashi chazuke', '¥1,600', 'Lunch', 'ask', 'no', 'October 2026.', 'kombujime'),
      it('', '', 'Chicken tempura gozen', '', 'Lunch', 'no', 'no', 'September 2026.', 'toriten'),
      it('', '', 'Dashimaki tamago', '', 'Lunch', 'ask', 'no', 'July–October 2026.', 'dashimaki'),
    ] }, {
    cuisine: '古民家を再生した店の、だしが主役の和食 (11席)・北海道道南産の真こんぶと枕崎産の本枯節のだし・ランチ: 昆布〆御膳1600円 (昆布〆の刺身3種、鯛、サーモン、金目鯛、鰹、真魚鰹など、だし巻き、きんぴら、佃煮、味噌汁、塩昆布をのせただし茶漬けで締め)、とり天御膳、日替わり御膳 (鯛の煮付け)・ディナー: アラカルトとコース、2026年秋は鹿児島県産黒毛和牛の焼きしゃぶと出雲卵、秋鮭の出汁茶漬け、蓮根のあられ揚げ、ほうじ茶プリンといちぢくのブリュレ・季節の日本酒と焼酎',
    neighborhood: '南船場4-10-22、新町橋近くの裏路地。心斎橋駅3番出口・四ツ橋駅1-A出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。昆布〆の刺身、だし巻き、だし茶漬けはだしが中心だが、醤油、味噌汁、とり天の御膳は小麦を使っている可能性。',
    vegan_detail: 'ヴィーガンではありません。だしは真こんぶと本枯節 (公式サイト) で、御膳は魚、卵、鶏が中心。',
    notes: '[だしの和食・南船場、170年の歴史の会社の隠れ家] 船場の細い裏路地にある古民家を再生した、こぢんまりとした和食の店。170年の歴史を持つ小倉屋山本が、創業の地の路地で営む (公式サイト)。すべてはだしから。北海道道南産の真こんぶと枕崎産の本枯節。有名なのはランチで、予約はできず、開店前から行列。昆布〆御膳 (1600円) は昆布で締めた刺身3種、いちばんという声もあるだし巻き、きんぴら、味噌汁、最後に塩昆布をのせたご飯に熱いだしをかけて、だし茶漬けに。14回目の常連もいつものスタッフに見送られたという。夜はコースとアラカルトに季節の日本酒。Googleマップでは本店に案内されるので、公式サイトの行き方を見て。',
  });
}

save();
