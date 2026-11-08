// Kyoto priority (kyoto-missed), worker osw13, batch 94 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 隠れ家酒場 すみか, 和香, 居酒屋 りらく, 東すし.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-94');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26030652', 'too thin to verify: Premium Wagyu Beef SHIBATA has five reviews, the only recent one (December 2025) a single line ("It was delicious."); a 2018 review calls it a sister of Yakiniku Shibata in Neyagawa');
skip('26043996', 'same-concept branch of a brand already in data: 京都和牛すき焼きしゃぶしゃぶ 富之上 三条河原町店 — 富之上 祇園本店 is in data as kyoto_tominojo_gion_honten (osw13-85)');

// ================================================================ 隠れ家酒場 すみか
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006520/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['17:00', '24:00']); const SU = day(['17:00', '23:00']);
  put({
    id: 'kyoto_kakurega_sakaba_sumika_kiyamachi', name: '隠れ家酒場 すみか (Kakurega Sakaba Sumika)', category: 'OMNI',
    lat: 35.008291, lng: 135.770802, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kushikatsu, karaage, teppan soba and tare yakitori (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: yakitori, meat-wrapped vegetable skewers, sushi and steak (2023–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat and days before holidays 17:00–24:00 (last order 23:30); Sun 17:00–23:00 (last order 22:30). Reservations taken. 76 seats, mostly cave-like semi-private rooms for 2–9 near a counter (2023–2025). Non-smoking with a smoking room. Table ordering by tablet ("table servers", December 2023). Cards and PayPay; no e-money. Basement of 黄桜ビル at the first corner below Sanjo on Kiyamachi. Reviews in 2025–2026 also call it "串×肉×寿司 酒場ごはん すみか 三条木屋町".',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WK, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi below Sanjo, basement — 4 min walk from Keihan Sanjo',
    cuisine: 'A basement izakaya of cave-like private rooms for skewers, meat and sushi (Tabelog; 2023–2026 reviews) · yakitori, meat-wrapped vegetable skewers, kushikatsu (Tabelog; 2023–2025) · homemade roast beef; teppan soba; cut steak on a hot plate; karaage (2025–2026) · chicken kamameshi cooked at the table; sashimi platter; sushi (2025–2026) · agedashi tofu; dashimaki; vegetable sticks; a "power salad" (2023; September 2026) · all-you-can-drink self-pour lemon sour, about ¥600–660 an hour (2022–2023); highballs ¥209 (September 2026); frozen-fruit sours; plum wine (2025–2026)',
    website: null, gmaps: gm('隠れ家酒場 すみか 三条木屋町'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Kiyamachi below Sanjo, cave-like private rooms] A basement warren of private grottos off Kiyamachi for skewers, roast beef, sushi and kamameshi, with cheap drinks — ¥209 highballs, frozen-fruit sours and self-pour lemon sour. Reviews are uneven: good value and fun rooms, but past complaints about service and yakitori. Open nightly till midnight.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Tabelog lists it as a corporate member; no source names the operator or says whether it has sister shops. Reviewers like the cave-like private rooms and the cheap drinks; criticism covers forgotten drink orders (April 2024), yakitori with "a foul odor" (August 2024), and prices "somewhat on the higher side" (August 2026).',
      philosophy: null,
      specialty: 'Skewers; chicken kamameshi.',
      anecdotes: [
        { text: 'December 2023: "We were seated in a half-private room that resembled a cave near the entrance, which I absolutely loved."', source: R + 'B475615303/' },
        { text: 'September 2026: "This restaurant offers highballs for just JPY 209, tax included, every day."', source: R + 'B536259685/' },
      ],
      japanese_sources_summary: '食べログ: 隠れ家酒場 すみか、居酒屋・焼き鳥・串揚げ、中京区三条通木屋町下ル1筋目角 黄桜ビル B1F、京阪三条から徒歩4分、月〜土・祝前日 17:00〜24:00 (L.O. 23:30)、日 17:00〜23:00 (L.O. 22:30)、予約可、76席、半個室、禁煙 (喫煙室あり)、カード・PayPay可、電子マネー不可、法人会員、名物は野菜の肉巻き串。口コミ (2022年4月〜2026年9月、英語): 洞窟のような半個室、焼き鳥、肉巻き串、串カツ、自家製ローストビーフ、鉄板そば、カットステーキ、唐揚げ、席で炊く鶏の釜飯、刺身盛り合わせ、寿司、揚げだし豆腐、だし巻き、パワーサラダ、セルフのレモンサワー飲み放題 (1時間600〜660円)、ハイボール209円 (2026年9月)、冷凍フルーツのサワー、梅酒、「串×肉×寿司 酒場ごはん すみか 三条木屋町」とも、注文忘れ (2024年4月)、焼き鳥の臭み (2024年8月)、やや高め (2026年8月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B448105820', 'B475615303', 'B483493989', 'B487351313', 'B491057627', 'B504779111', 'B505837823', 'B506957169', 'B534201500', 'B536259685'])) },
    cultural_comfort: { level: 'japanese', note: 'Tablet ordering; private rooms.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区三条通木屋町下ル1筋目角 黄桜ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.008291, 135.770802); address has no town or lot (三条通木屋町下ル1筋目角) — GSI resolves only to the ward, so marked approximate; nearest pin kyoto_uotana_fumibun 9.4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536259685/', R + 'B475615303/'],
    price_note: 'Drink prices from 2023 and 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Highball', '¥209', 'Drink', 'ask', 'ask', 'September 2026.', 'highball'),
      it('', '', 'All-you-can-drink lemon sour (1 hour)', '¥660', 'Drink', 'ask', 'ask', 'December 2023.', 'lemon_sour_nomihodai'),
      it('', '', 'Chicken kamameshi', null, 'Rice', 'no', 'no', 'April 2025.', 'kamameshi'),
    ] }, {
    cuisine: '洞窟のような個室の地下の居酒屋で、串、肉、寿司 (食べログ、2023〜2026年の口コミ)・焼き鳥、野菜の肉巻き串、串カツ (食べログ、2023〜2025年)・自家製ローストビーフ、鉄板そば、鉄板のカットステーキ、唐揚げ (2025〜2026年)・席で炊く鶏の釜飯、刺身盛り合わせ、寿司 (2025〜2026年)・揚げだし豆腐、だし巻き、野菜スティック、パワーサラダ (2023年、2026年9月)・セルフのレモンサワー飲み放題、1時間600〜660円ほど (2022〜2023年)、ハイボール209円 (2026年9月)、冷凍フルーツのサワー、梅酒 (2025〜2026年)',
    neighborhood: '木屋町三条下ル、地下。京阪三条から徒歩4分',
    gf_detail: 'グルテンフリーではない: 串カツ、唐揚げ、鉄板そば、たれの焼き鳥 (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 焼き鳥、肉巻きの野菜串、寿司、ステーキ (2023〜2026年の口コミ)。',
    notes: '[居酒屋・木屋町三条下ル、洞窟のような個室] 木屋町の地下に洞窟のような個室が並ぶ居酒屋。串、ローストビーフ、寿司、釜飯に、ハイボール209円、冷凍フルーツのサワー、セルフのレモンサワーなど安い飲み物。部屋は楽しく値段も手頃だが、接客や焼き鳥への不満の声も過去に。毎晩深夜0時まで。',
  });
}

// ================================================================ 和香 (shojin café)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26026056/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.oterahouse.com/cafe/index.htm';
  const H = day(['11:00', '15:00']);
  put({
    id: 'kyoto_waka_shojin_cafe_bukkoji', name: '和香 (Waka)', category: 'OMNI',
    lat: 35.000621, lng: 135.763813, cuisine_type: 'shojin',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: an October 2018 reviewer eating gluten-free found the shojin lunch suitable, but soy sauce, miso and spring-roll wrappers may contain wheat — confirm on the day (2015–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: reviewers say the café uses no animal products, including dashi (August 2015; March 2018; December 2022; April 2025); confirm on the day.',
    hours_raw: 'Tabelog: Wed–Sat 11:00–15:00; closed Sunday, Monday and Tuesday; hours may change. Lunch is one daily shojin set (July 2024); some customers take food away (April 2021). 14 seats at tables and a counter with a garden view; gallery upstairs (2015; December 2022). Non-smoking. Inside "Otera House" at Daizen-in, a sub-temple of Bukkoji, east of the temple (2015–2025).',
    hours: { 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'By Bukkoji temple, south of Shijo-Karasuma — 8 min walk from Shijo / Karasuma',
    cuisine: 'A temple café serving one plant-based shojin set lunch a day (2015–2025 reviews) · shojin set: multigrain or barley rice, miso or tofu soup and four or five seasonal sides, e.g. okara or mushroom spring rolls, bean croquettes, braised eggplant, pumpkin with adzuki (2015–2025) · July 2024 example: coconut-milk soup, fresh spring rolls, soy-meat karaage with couscous, mint salad, bitter melon and eggplant · shojin set ¥850; with coffee ¥1,000 (June 2016)',
    website: SITE, gmaps: gm('和香 お寺ハウス 大善院'), menu_url: SITE,
    notes: '[Shojin café · Daizen-in by Bukkoji, a temple\'s plant-based lunch] A quiet café inside a Bukkoji sub-temple\'s "Otera House", with a garden view and a gallery upstairs, serving one daily shojin set — grains, soup and four or five vegetable dishes — made without animal products, reviewers say. Lunch only, Wednesday to Saturday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers describe a café run within the temple (December 2022) at Daizen-in, a sub-temple of the Shinshu Bukkoji school, with temple-history books and a gallery on the second floor. They say no animal products are used, "including dashi and oil" (August 2015), and praise bold, satisfying flavours; regulars have come for years (July 2024).',
      philosophy: 'Plant-based shojin cooking without animal products (reviews).',
      specialty: 'Daily shojin set.',
      anecdotes: [
        { text: 'June 2016: "The flavors were rather bold… and the dishes were satisfying enough that you wouldn\'t even notice the absence of meat."', source: R + 'B201278502/' },
        { text: 'July 2024: "I\'ve been coming here quite often for four years now. The set meal offers only one type each day."', source: R + 'B488287633/' },
      ],
      japanese_sources_summary: '食べログ: 和香、カフェ・日本料理、下京区新開町397-9、地下鉄四条駅・阪急烏丸駅から徒歩約8分、水〜土 11:00〜15:00、日・月・火休み、14席、禁煙、Tabelog のサイト欄は oterahouse.com。口コミ (2015年8月〜2025年4月、英語・日本語): 佛光寺の塔頭 大善院の「お寺ハウス」の精進カフェ、2階はギャラリー、庭の緑、日替わりの精進定食ひとつ、雑穀や麦ご飯、味噌汁、4〜5品の季節の惣菜 (おからや豆のコロッケ、春巻き、なすの煮物、かぼちゃとあずき)、2024年7月はココナッツミルクのスープ、生春巻き、大豆ミートの唐揚げとクスクス、ミントのサラダ、ゴーヤとなす、精進定食850円・コーヒー付き1,000円 (2016年6月)、動物性のものを使わない、グルテンフリーの人も食べられた (2018年10月)。',
      confidence: 'medium', sources: [TB, SITE].concat(rv(R, ['B110800810', 'B112810506', 'B127219682', 'B201278502', 'B302941624', 'B393160358', 'B417969274', 'B437208330', 'B459726617', 'B487936142', 'B488287633', 'B505895017'])) },
    cultural_comfort: { level: 'japanese', note: 'Temple café; one daily set; lunch only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区新開町397-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with a review dated April 2025.' },
    pin_source: `Tabelog ${TB} (35.000621, 135.763813); cross-checked: GSI 京都府京都市下京区新開町397番地 (lot) 36m; nearest pin kyoto_kanegura 58m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B127219682/'],
    price_note: 'Only 2016 prices in the sources.', last_checked: TODAY, items: [
      it('精進定食', '', 'Shojin set lunch', '¥850', 'Lunch', 'ask', 'ask', 'June 2016; 2025 price not given.', 'shojin_set'),
      it('精進定食（コーヒー付）', '', 'Shojin set with coffee', '¥1,000', 'Lunch', 'ask', 'ask', 'June 2016.', 'shojin_set_coffee'),
    ] }, {
    cuisine: '動物性のものを使わない精進の日替わり定食をひとつだけ出すお寺のカフェ (2015〜2025年の口コミ)・精進定食: 雑穀か麦のご飯、味噌汁や豆腐の汁、季節の惣菜4〜5品 (おからやきのこの春巻き、豆のコロッケ、なすの煮物、かぼちゃとあずきなど) (2015〜2025年)・2024年7月の例: ココナッツミルクのスープ、生春巻き、大豆ミートの唐揚げとクスクス、ミントのサラダ、ゴーヤとなす・精進定食850円、コーヒー付き1,000円 (2016年6月)',
    neighborhood: '四条烏丸の南、佛光寺のそば。四条・烏丸から徒歩8分',
    gf_detail: '要確認: グルテンフリーの人が食べられたという口コミ (2018年10月) もあるが、醤油、味噌、春巻きの皮は小麦の可能性。当日確認を (2015〜2025年の口コミ)。',
    vegan_detail: '要確認: だしを含め動物性のものを使わないという口コミ (2015年8月、2018年3月、2022年12月、2025年4月)。当日確認を。',
    notes: '[精進カフェ・佛光寺の大善院、お寺の植物性のランチ] 佛光寺の塔頭の「お寺ハウス」にある静かなカフェ。庭が見え、2階はギャラリー。動物性のものを使わない日替わりの精進定食 (ご飯、汁、野菜の惣菜4〜5品) をひとつだけ。昼のみ、水〜土。',
  });
}

// ================================================================ 居酒屋 りらく
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26003952/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['17:30', '23:30']); const SU = day(['17:30', '23:00']);
  put({
    id: 'kyoto_izakaya_riraku_karasuma', name: '居酒屋 りらく (Izakaya Riraku)', category: 'OMNI',
    lat: 35.002571, lng: 135.762695, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tare yakitori, chicken ramen to finish, soy-glazed firefly squid and beef-tendon stew (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-bone hotpot, yakitori and chicken sashimi (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Wed, Fri, Sat 17:30–23:30 (last order 22:30); Sun 17:30–23:00 (last order 22:00); closed Thursday; closing days not fixed. Lunch from 1 September 2026 (August–September 2026 reviews); lunch hours not given. Reservations taken — cancelled after 15 minutes without word. Appetizer ¥330 — Tabelog, Japanese original 「付きだし 330円」. 30 seats: counter, tables and sunken seating. Smoking allowed at all seats. Touch-panel ordering (May 2026). Cards, e-money and PayPay. Ground floor of アルテビル高倉, 2 min from Karasuma / Shijo.',
    hours: { 0: WK, 1: WK, 2: WK, 4: WK, 5: WK, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takakura near Shijo — 2 min walk from Karasuma / Shijo',
    cuisine: 'A yakitori and chicken-hotpot izakaya using Kyoto red chicken (akadori) grilled over binchotan (2025–2026 reviews) · rich salt chicken hotpot from bones simmered for hours ¥1,900 per person, from one serving; noodles to finish ¥400 (May and August 2026) · yakitori: thigh (Kyoto red chicken) ¥380, heart ¥200; five-skewer platter ¥1,200; liver, gizzard, tsukune, bonjiri, quail eggs, ginkgo (2025–2026) · chicken thigh tartare ¥900; white liver sashimi ¥1,000; chicken sashimi (2025–2026) · beef-tendon stew with soft egg ¥850; bacon and avocado ¥700; grilled Kujo leek ¥250; Camembert with honey and nuts ¥250 (May 2026) · lunch from September 2026: binchotan yakitori bowl with thigh, breast, tsukune, Kujo leek and shredded egg ¥1,500 · sake such as Namikusa Uma ¥580 (May 2026)',
    website: null, gmaps: gm('居酒屋 りらく 烏丸 アルテビル高倉'), menu_url: TB + 'dtlmenu/',
    notes: '[Yakitori & chicken hotpot · near Shijo-Karasuma, Kyoto red chicken over binchotan] A busy after-work izakaya two minutes from Karasuma: Kyoto akadori skewers over binchotan, chicken sashimi, and a thick, salty chicken-bone hotpot from ¥1,900 a head with noodles to finish. New yakitori-bowl lunch (¥1,500) from September 2026. Smoking allowed. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Tabelog lists it as a corporate member. Reviewers in 2025–2026 praise Kyoto red chicken grilled over binchotan, a hotpot broth "simmered for hours daily" and a value-for-money menu; one October 2026 diner found the hotpot over-thick, "possibly due to being simmered for too long". Lunch began on 1 September 2026.',
      philosophy: null,
      specialty: 'Chicken koku-nabe hotpot; akadori yakitori.',
      anecdotes: [
        { text: 'May 2026: "The broth, simmered for hours daily, is incredibly thick and rich, bursting with chicken flavor!"', source: R + 'B528104208/' },
        { text: 'September 2026: "While the rice bowl was impressive, I was actually blown away by the soup. It\'s a rich broth made from hot pot soup, diluted and filled with chicken and root vegetables."', source: R + 'B538420172/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋 りらく、焼き鳥・鶏料理・居酒屋、下京区高材木町228-1 アルテビル高倉 1F、阪急烏丸駅・地下鉄四条駅から徒歩2分、月・火・水・金・土 17:30〜23:30 (L.O. 22:30)、日 17:30〜23:00 (L.O. 22:00)、木曜休み、不定休、予約可 (15分で取消)、原文で「付きだし 330円」、30席 (カウンター、テーブル、掘りごたつ)、全席喫煙可、カード・電子マネー・PayPay可、法人会員。口コミ (2025年11月〜2026年10月、英語): 京赤地鶏を備長炭で、濃厚塩の鶏鍋1人前1,900円、締めの麺400円、もも380円、ハツ200円、5本盛り1,200円、レバー、砂肝、つくね、ぼんじり、うずら、銀杏、鶏ももユッケ900円、白レバー刺し1,000円、鶏刺し、牛すじの半熟卵煮込み850円、ベーコンとアボカド700円、九条ねぎ焼き250円、カマンベール250円、2026年9月1日からランチの備長炭焼き鳥丼1,500円、日本酒 (Namikusa Uma 580円)、タッチパネル、鍋が煮詰まりすぎとの声 (2026年10月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B517822986', 'B528104208', 'B528296659', 'B528904825', 'B529204824', 'B529327694', 'B533656329', 'B533874843', 'B534511947', 'B534862273', 'B537399514', 'B538420172'])) },
    cultural_comfort: { level: 'japanese', note: 'Touch-panel ordering; smoking allowed at all seats.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高材木町228-1 アルテビル高倉 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002571, 135.762695); cross-checked: GSI 京都府京都市下京区高材木町228番地 (lot) 41m; nearest pin kyoto_kiu_shijo_karasuma 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528104208/', R + 'B528296659/', R + 'B534862273/'],
    price_note: 'Prices from May–September 2026 reviews; ¥330 appetizer.', last_checked: TODAY, items: [
      it('', '', 'Rich salt chicken hotpot (per person)', '¥1,900', 'Hotpot', 'ask', 'no', 'May and August 2026.', 'tori_nabe'),
      it('', '', 'Noodles to finish the hotpot', '¥400', 'Hotpot', 'no', 'no', 'May 2026.', 'shime_noodles'),
      it('', '', 'Assorted yakitori (5 skewers)', '¥1,200', 'Yakitori', 'ask', 'no', 'May 2026.', 'yakitori_platter'),
      it('', '', 'Beef-tendon stew with soft-boiled egg', '¥850', 'Side', 'no', 'no', 'May and August 2026.', 'gyusuji'),
      it('', '', 'Lunch yakitori rice bowl', '¥1,500', 'Lunch', 'ask', 'no', 'August–September 2026.', 'yakitori_don'),
    ] }, {
    cuisine: '京赤地鶏を備長炭で焼く焼き鳥と鶏鍋の居酒屋 (2025〜2026年の口コミ)・毎日長時間炊く鶏ガラの濃厚塩鶏鍋1人前1,900円 (1人前から)、締めの麺400円 (2026年5月・8月)・焼き鳥: もも (京赤地鶏) 380円、ハツ200円、5本盛り1,200円、レバー、砂肝、つくね、ぼんじり、うずら、銀杏 (2025〜2026年)・鶏ももユッケ900円、白レバー刺し1,000円、鶏刺し (2025〜2026年)・牛すじの半熟卵煮込み850円、ベーコンとアボカド700円、九条ねぎ焼き250円、カマンベールのはちみつナッツ250円 (2026年5月)・2026年9月からのランチ: もも、むね、つくね、九条ねぎ、錦糸卵の備長炭焼き鳥丼1,500円・日本酒 (Namikusa Uma 580円、2026年5月)',
    neighborhood: '四条近くの高倉。烏丸・四条から徒歩2分',
    gf_detail: 'グルテンフリーではない: たれの焼き鳥、締めの鶏ラーメン、ほたるいかの醤油漬け、牛すじ煮込み (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鶏ガラの鍋、焼き鳥、鶏刺し (2025〜2026年の口コミ)。',
    notes: '[焼き鳥と鶏鍋・四条烏丸近く、備長炭の京赤地鶏] 烏丸から2分のにぎやかな仕事帰りの居酒屋。京赤地鶏の備長炭焼き、鶏刺し、1人前1,900円からの濃厚な塩の鶏ガラ鍋と締めの麺。2026年9月から焼き鳥丼 (1,500円) のランチも。喫煙可。木曜休み。',
  });
}

// ================================================================ 東すし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26026686/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '28:00']);
  put({
    id: 'kyoto_azuma_sushi_gion', name: '東すし (Azuma Sushi)', category: 'OMNI',
    lat: 35.004103, lng: 135.775245, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy for nigiri, shiro-ebi tempura, red miso soup (2016–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi izakaya (Tabelog; reviews).',
    hours_raw: 'Tabelog: Mon–Sat 18:00–04:00; closed Sunday and holidays; hours may change. Reservations taken; no children under school age. 18 seats: 10 at the counter and 8 on tatami; shoes off; the lift opens straight into the room (2022). Smoking allowed. Cards; no e-money or QR. 3rd floor of 吉川ビル on Hanamikoji above Shijo.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Hanamikoji above Shijo, Gion north side — 3 min walk from Gion-Shijo',
    cuisine: 'A late-night Gion sushi izakaya open until 4 am (2016–2026 reviews) · nigiri — torigai, toro-taku, negitoro roll (2016–2022) · grilled yellowtail collar; shiro-ebi tempura; red miso soup (2018–2022) · sake and shochu (Tabelog)',
    website: null, gmaps: gm('東すし 花見小路 吉川ビル'), menu_url: null,
    notes: '[Sushi izakaya · Hanamikoji above Shijo, open till 4 am] A homely third-floor sushi bar in Gion, shoes off at the lift, where an older chef serves nigiri, grilled yellowtail collar and red miso soup until 4 am at fair Gion prices — a late stop for locals. Smoking allowed. Closed Sundays and holidays.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers describe a long-running, welcoming spot where "the chef seems like a kind elderly man" (February 2022), with friendly staff and reasonable prices for Gion (December 2023), popular with regulars (August 2026). Criticism: a harsh 2018 review of salad, dried-looking shrimp and octopus and fishy toro, and rice lacking firmness (March 2022).',
      philosophy: null,
      specialty: 'Late-night sushi.',
      anecdotes: [
        { text: 'February 2022: "You take off your shoes upon entering… It\'s great that they stay open until late at night!"', source: R + 'B445927207/' },
        { text: 'March 2022: "To wrap up the meal, I ordered red miso soup, which turned out to be the highlight of the day."', source: R + 'B446753402/' },
      ],
      japanese_sources_summary: '食べログ: 東すし、寿司、東山区花見小路四条上ル祇園町北側270-5 吉川ビル 3F、祇園四条駅から徒歩3分、月〜土 18:00〜翌4:00、日・祝休み、予約可、未就学児不可、18席 (カウンター10、座敷8)、喫煙可、カード可、電子マネー・QR不可。口コミ (2016年10月〜2026年8月、英語・日本語): 深夜まで営業の祇園の寿司居酒屋、靴を脱いで上がる、エレベーターを降りるとすぐ店内、年配の大将、とり貝、トロたく、ネギトロ巻き、ぶりのかま焼き、白えびの天ぷら、赤だし、祇園にしては手頃、常連、2018年は厳しい評価、シャリが柔らかい (2022年3月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B224070276', 'B278863447', 'B384804091', 'B421636065', 'B445927207', 'B446753402', 'B473608508', 'B476821797', 'B526703027', 'B536353051'])) },
    cultural_comfort: { level: 'japanese', note: 'Shoes off; smoking allowed; no young children.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区花見小路四条上ル祇園町北側270-5 吉川ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated April and August 2026.' },
    pin_source: `Tabelog ${TB} (35.004103, 135.775245); cross-checked: GSI 京都府京都市東山区祇園町北側270番地 (lot) 5m; nearest pin kyoto_ching_ming_gion 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B446753402/'],
    price_note: 'No item prices in recent reviews; reviewers spent about ¥5,000–15,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Assorted nigiri', null, 'Sushi', 'no', 'no', 'March 2022.', 'nigiri'),
      it('', '', 'Grilled yellowtail collar', null, 'Grilled', 'ask', 'no', '2018; March 2022.', 'buri_kama'),
      it('', '', 'Red miso soup', null, 'Soup', 'ask', 'no', 'March 2022.', 'akadashi'),
    ] }, {
    cuisine: '朝4時まで開いている祇園の寿司居酒屋 (2016〜2026年の口コミ)・にぎり、とり貝、トロたく、ネギトロ巻き (2016〜2022年)・ぶりのかま焼き、白えびの天ぷら、赤だし (2018〜2022年)・日本酒と焼酎 (食べログ)',
    neighborhood: '花見小路四条上ル、祇園町北側。祇園四条から徒歩3分',
    gf_detail: 'グルテンフリーではない: にぎりの醤油、白えびの天ぷら、赤だし (2016〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 寿司居酒屋 (食べログ、口コミ)。',
    notes: '[寿司居酒屋・花見小路四条上ル、朝4時まで] エレベーターを降りて靴を脱ぐ、祇園のビル3階の家庭的な寿司屋。年配の大将が、にぎり、ぶりのかま焼き、赤だしを朝4時まで、祇園にしては手頃に。地元の人の遅い時間の一軒。喫煙可。日曜・祝日休み。',
  });
}

save();
