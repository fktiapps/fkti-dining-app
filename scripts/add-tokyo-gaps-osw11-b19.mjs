// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 19.
//   + 旬蕾 Shunrai (sake-led Japanese counter run by two women; since 2020)
//   + 人 8888 Hito 8888 (one-man sake izakaya in a renovated house; since 2018)
//   + Pizza Tane (sourdough wood-fired pizza in the SOIL Nihonbashi hotel; opened September 2025)
//   + Boeuf 彩 Boeuf Aya (yoshoku lunch sets of hamburg steak and fries; since 2013)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 8 ningyocho` (main repo, 2026-11-02).
//   Skipped: 13054270 マクドナルド 人形町店 (McDonald's, a national chain); 13142737 はんちか — the latest review (February 2025)
//   says "It's a shame to hear that they might be closing down", no review since, and a web search found nothing either
//   way: existence unresolved, not drafted. 13159396 Boeuf 彩 taken in its place.
//   Dedupe. None is in data/tokyo.json by name or address (2-24-5, 2-11-4, 3-2-4, 1-1-6); no record within 20 m.
//   Chain check. All four are single shops in the sources.
//   Omitted under the brief's looks line: Shunrai reviewers' remarks on the staff's looks (2023–26).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13054270', 'マクドナルド 人形町店: McDonald\'s, a national chain');
skip('13142737', 'はんちか (shabu-shabu izakaya, 日本橋人形町2-24-5 B1F): the latest review (February 2025, B501618984) says "they might be closing down"; no later review and no web source either way — existence unresolved, not drafted');

// ================================================================ 旬蕾
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13243412/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '22:00']);
  put({
    id: 'tokyo_shunrai_ningyocho', name: '旬蕾 (Shunrai)', category: 'OMNI',
    lat: 35.686768, lng: 139.784327, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Small dishes include fritters, kara-age, shumai and spring rolls, and sashimi with ponzu or soy (2024–26 reviews); nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, chicken and oyster dishes; vegetables are served too, but ask about dashi.',
    hours_raw: 'Mon–Fri 16:00–22:00; closed Sat and Sun (Tabelog). Reservations accepted, including same-day and by email (2026 reviews). Cards and e-money; no QR (Tabelog). 12 seats: 8 at the counter and a private room for 4 (Tabelog). Non-smoking. Opened 14 January 2020 (Tabelog). Run by two women: the proprietress, who chooses the sake, and a female chef (April, May, August 2026); service can feel brisk when busy (March 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-24-5, 1F — about 185 m from Ningyocho Stn',
    cuisine: 'Sake-led Japanese counter with small seasonal dishes; sake chosen by the proprietress to your taste, or by omakase pairing (2024–26 reviews) · dishes in 2026: kombu-cured flounder and sea bream; kombu-cured chicken and chicken sashimi; sea bream and wild-vegetable spring rolls; maitake fritters with honey mustard; lotus-root kara-age; single-serving oyster hot pot; nyumen with Hiroshima oysters; shumai, a regular favourite; yodare chicken; chicken ham; ikura and chicken tekka rolls to finish · robust and namazake sakes, aged sakes, a wide shochu list, craft beer (2026)',
    website: TB, gmaps: gm('旬蕾 人形町'), menu_url: null,
    notes: "[Izakaya · Ningyocho, a sake counter run by two women] A quiet twelve-seat Japanese counter opened in 2020 and run by two women in kimono and kappōgi: the proprietress chooses the sake and a chef cooks (2026 reviews). There was no sake list in 2020: tell the proprietress what you like and a bottle is chosen for you, leaning to robust, namazake and aged bottles, or leave it to an omakase pairing. The food is small, careful plates made for drinking: kombu-cured fish and chicken, maitake fritters, a single-serving oyster hot pot, and the shumai regulars insist on. A four-seat private room suits business dinners. One March 2026 diner found service brisk when busy. Weekday evenings only.",
    chef_bio: { chef_name: null, roles: ['Proprietress, who selects the sake (2026 reviews)', 'Female chef ("run by … a talented female chef", April 2026 review)'], origin: null,
      background: 'Opened 14 January 2020 (Tabelog). "A popular restaurant run by two women" (May 2026); two women in kimono and kappōgi run the counter (September 2026).',
      philosophy: null, specialty: 'Sake pairing; shumai.',
      anecdotes: [
        { text: '"There’s no menu for the sake; instead, you communicate your preferences to the owner, who selects for you." — September 2020.', source: R + 'B430326583/' },
        { text: '"Most of the sake had a robust flavor, and the owner mentioned … selecting them carefully." — August 2026.', source: R + 'B533954097/' },
        { text: '"The two proprietresses manage the place, but during busy hours, the service can feel a bit impersonal." — March 2026.', source: R + 'B527439694/' },
      ],
      japanese_sources_summary: '食べログ: 旬蕾、日本料理、日本橋人形町2-24-5 日本橋人形町澤井ビル 1F、月〜金16:00〜22:00、土日休み、予約可、カード・電子マネー可、QR不可、12席 (カウンター8、個室4)、禁煙、日本酒・焼酎にこだわり、2020年1月14日オープン。口コミ(2023年12月〜2026年10月): 女性ふたりで営む、女将が好みを聞いて日本酒を選ぶ、おまかせのペアリング、昆布締めの平目や鯛、鶏の昆布締めと鶏刺し、鯛と山菜の春巻き、舞茸の天ぷら、蓮根の唐揚げ、牡蠣の小鍋、牡蠣のにゅうめん、常連おすすめの焼売、生酒や熟成酒、焼酎も豊富、個室は接待向き、混むと接客がそっけないという声も。',
      confidence: 'medium', sources: [TB, R + 'B430326583/', R + 'B477454429/', R + 'B503748484/', R + 'B522015010/', R + 'B524865686/', R + 'B526707328/', R + 'B527439694/', R + 'B530022404/', R + 'B533954097/', R + 'B537189882/'] },
    cultural_comfort: { level: 'japanese', note: 'Describe your sake taste to the proprietress; small plates.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-24-5 日本橋人形町澤井ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews to October 2026.' },
    pin_source: `Tabelog ${TB} (35.686768, 139.784327); cross-checked: GSI 東京都中央区日本橋人形町二丁目24番5号 (go) 7m. Hanchika (B1F, same building) was skipped, so no record shares the point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published prices; reviewers spent about ¥5,000–¥14,999 per person (2026).', last_checked: TODAY, items: [
      it('', '', 'Omakase dishes with sake pairing', 'not listed', 'Omakase', 'ask', 'no', 'Reviewers spent ¥8,000–¥14,999 (2026).', 'omakase'),
      it('', '', 'Shumai', 'not listed', 'Dishes', 'no', 'no', 'January 2024, April 2026.', 'shumai'),
    ] }, {
    cuisine: '日本酒を主役にした季節の小皿のカウンター。日本酒は女将が好みを聞いて選ぶか、おまかせのペアリングで (2024〜26年の口コミ)・2026年の料理: 平目と鯛の昆布締め、鶏の昆布締めと鶏刺し、鯛と山菜の春巻き、舞茸のフリットとハニーマスタード、蓮根の唐揚げ、ひとり用の牡蠣の小鍋、Hiroshima の牡蠣のにゅうめん、常連おすすめの焼売、よだれ鶏、鶏ハム、締めのいくらや鶏の鉄火巻き・しっかりした味の酒、生酒、熟成酒、焼酎も豊富、クラフトビール (2026年)',
    neighborhood: '日本橋人形町2-24-5 日本橋人形町澤井ビル 1F。人形町駅から約185m',
    gf_detail: '要確認。フリット、唐揚げ、焼売、春巻き、ポン酢や醤油の刺身もある (2024〜26年の口コミ)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 魚、鶏、牡蠣の料理。野菜の料理もあるが出汁は要確認。',
    notes: '[居酒屋・人形町、女性ふたりの日本酒のカウンター] 2020年に開いた12席の静かな日本料理のカウンターで、着物と割烹着の女性ふたりが営む。女将が日本酒を選び、料理人が料理を作る (2026年の口コミ)。2020年には日本酒のリストはなく、女将に好みを伝えると、しっかりした味や生酒、熟成酒を中心に選んでくれる。おまかせのペアリングも。料理は酒に合わせた小さな丁寧な皿で、昆布締めの魚や鶏、舞茸のフリット、ひとり用の牡蠣の小鍋、常連が推す焼売。4人の個室は接待向き。2026年3月には混むと接客がそっけないという声も。平日の夜のみ。',
  });
}

// ================================================================ 人 8888
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13223558/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'tokyo_hito_8888_ningyocho', name: '人　8888 (Hito 8888)', category: 'OMNI',
    lat: 35.68546, lng: 139.784234, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tempura, croquettes, fried yuba and a carbonara pasta are on the menu (2024–26 reviews); nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, seafood and dashi-based dishes.',
    hours_raw: 'Mon–Sat 16:00–23:00 (last order 22:30); closed Sundays and holidays (Tabelog). Reservations recommended; online bookings may be moved if they clash with phone bookings; a 2.5-hour limit at busy times (Tabelog; February 2026). Table charge ¥710 (Tabelog). Cards and transport IC; no QR (Tabelog). 10 seats: 3 at the counter and a long table for 6–7 (Tabelog; May 2026). Smoking allowed (Tabelog). Opened 2 July 2018 (Tabelog). The owner runs the place alone, and regulars sometimes help carry dishes (2025–26 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-11-4, a renovated old house down a narrow lane off Amazake Yokocho — 2 min from Ningyocho Stn exit A2 and Suitengumae Stn exit 7',
    cuisine: 'Sake izakaya of carefully made small dishes (2024–26 reviews) · sashimi from Toyosu, e.g. two-kind assortment ¥1,350, sea bream carpaccio ¥1,400 (Tabelog menu, 2021) · grilled squid liver, fried yuba with crab cream, tomato niku-dofu, dashimaki tamago, tempura of shiitake, yuba and isobe chikuwa, nama-fu with fuki miso, hamachi tataki (2025–26) · a carbonara popular with regulars (2024–26) · courses on request (October 2025) · a large sake fridge — pick a bottle and the owner pours it into a tokkuri (October 2025)',
    website: TB, gmaps: gm('人 8888 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · Ningyocho, a one-man sake den in an old house] A ten-seat izakaya tucked down a lane off Amazake Yokocho in a renovated old house, run single-handed by a cheerful owner since 2018. You pick your sake from a fridge stocked with labels you rarely see, and the owner pours it into a tokkuri. The food is small and careful: thick-cut sashimi, fried yuba with crab cream, dashimaki tamago, and a carbonara regulars keep recommending. Regulars set the tone and even help carry plates, which charms most visitors (2025–26). One October 2025 diner found the simmered fish collar overcooked and the sauce thin, and another thought drink prices high (July 2025). The name is read \"Hito 8888\" on Tabelog; one 2024 diner was told \"Quattro Eight\".",
    chef_bio: { chef_name: null, roles: ['Owner, running the shop alone ("the master, managing everything …", October 2025 review)'], origin: null,
      background: 'Opened 2 July 2018 (Tabelog). A diner who had been a regular since opening returned after five years (October 2026). Tabelog reads the name "Hito 8888"; a January 2024 reviewer gives the reading "Quattro Eight".',
      philosophy: null, specialty: 'Sake from the fridge; carbonara.',
      anecdotes: [
        { text: '"You get to pick your drink from the refrigerator, and the master pours it into a tokkuri (sake pitcher) for you." — October 2025.', source: R + 'B516323271/' },
        { text: '"This restaurant has many regular customers, creating a cozy and welcoming atmosphere where everyone seems to work together to enhance the experience! (Helping with serving dishes and taking orders)" — May 2025.', source: R + 'B507691776/' },
        { text: '"The simmered collar was slightly overcooked, and the sauce was a bit too sweet and thin." — October 2025.', source: R + 'B516323271/' },
      ],
      japanese_sources_summary: '食べログ: 人 8888、居酒屋、日本料理、日本酒バー、日本橋人形町2-11-4、人形町駅A2出口・水天宮前駅7番出口から徒歩2分、Amazake Yokocho のすぐそば、月〜土16:00〜23:00、日祝休み、予約可、混雑時は2時間半制、お通し710円、カード・交通系IC可、10席 (カウンター3、テーブル7)、喫煙可、2018年7月2日オープン。口コミ(2024年1月〜2026年10月): 店主がひとりで営む、常連が配膳を手伝う、古民家を改装、冷蔵庫から日本酒を選ぶと徳利に注いでくれる、Toyosu の刺身、湯葉の蟹クリーム揚げ、だし巻き、カルボナーラ、店名は「Quattro Eight」と読むという声も、カマ煮が煮すぎ・飲み物が高めという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B382510867/', R + 'B477576850/', R + 'B498328460/', R + 'B504377240/', R + 'B507691776/', R + 'B510336146/', R + 'B510434818/', R + 'B516323271/', R + 'B524064796/', R + 'B532097098/'] },
    cultural_comfort: { level: 'japanese', note: 'A regulars\' room; pick sake from the fridge; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-11-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews to October 2026.' },
    pin_source: `Tabelog ${TB} (35.685460, 139.784234); cross-checked: GSI 東京都中央区日本橋人形町二丁目11番4号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/'],
    price_note: 'Tabelog menu, tax included, last updated 2021-04-07 — may be out of date; table charge ¥710.', last_checked: TODAY, items: [
      it('', '', 'Sashimi, two kinds', '¥1,350', 'Sashimi', 'ask', 'no', 'Tabelog menu, 2021.', 'sashimi'),
      it('', '', 'Sea bream carpaccio', '¥1,400', 'Dishes', 'ask', 'no', 'Tabelog menu, 2021.', 'carpaccio'),
      it('', '', 'Three-snack assortment', '¥1,080', 'Snacks', 'ask', 'no', 'Tabelog menu, 2021.', 'snacks'),
    ] }, {
    cuisine: '丁寧な小皿料理の日本酒の居酒屋 (2024〜26年の口コミ)・Toyosu の刺身、2種盛り1,350円、鯛のカルパッチョ1,400円 (食べログのメニュー、2021年)・イカの肝焼き、湯葉の蟹クリーム揚げ、トマトの肉豆腐、だし巻き玉子、椎茸・湯葉・磯辺ちくわの天ぷら、生麩のふき味噌、ハマチのたたき (2025〜26年)・常連おすすめのカルボナーラ (2024〜26年)・頼めばコースも (2025年10月)・大きな日本酒の冷蔵庫から好きな瓶を選ぶと、店主が徳利に注いでくれる (2025年10月)',
    neighborhood: '日本橋人形町2-11-4、Amazake Yokocho から入った細い路地の改装した古民家。人形町駅A2出口・水天宮前駅7番出口から徒歩2分',
    gf_detail: '要確認。天ぷら、コロッケ、湯葉の揚げ物、カルボナーラもある (2024〜26年の口コミ)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 刺身、魚介、出汁の料理。',
    notes: '[居酒屋・人形町、古民家の店主ひとりの日本酒の店] Amazake Yokocho から入った路地の、古民家を改装した10席の居酒屋で、2018年から明るい店主がひとりで営む。日本酒はあまり見ない銘柄の並ぶ冷蔵庫から選び、店主が徳利に注いでくれる。料理は小さく丁寧で、厚切りの刺身、湯葉の蟹クリーム揚げ、だし巻き玉子、常連が勧めるカルボナーラ。常連が雰囲気を作り、料理を運ぶのを手伝うことも (2025〜26年)。2025年10月にはカマ煮が煮すぎでたれが薄いという声、2025年7月には飲み物が高めという声も。店名は食べログでは「Hito 8888」、2024年には「Quattro Eight」と読むと教わった人も。',
  });
}

// ================================================================ Pizza Tane
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13313189/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_pizza_tane_ningyocho', name: 'Pizza Tane', category: 'OMNI',
    lat: 35.686395, lng: 139.779898, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sourdough wheat pizza and bread, fried calamari.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cheese on most pizzas; meat and seafood toppings.',
    hours_raw: 'Daily 11:30–15:00 (food last order 14:30) and 18:00–22:00 (food last order 21:00) (Tabelog). Lunch first come, first served — leave a name and number and you are called, with waits up to an hour on a Sunday (October 2026); dinner by reservation; allergies in advance; no special anniversary plates; pets on the terrace only, booked ahead; no bicycle or car parking (Tabelog). Cards, transport IC, iD, QUICPay, PayPay and more (Tabelog). 20 seats: 6 at the counter, 6 at tables, 8 on the terrace (Tabelog). Non-smoking. Opened 1 September 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 3-2-4, SOIL Nihonbashi Hotel 1F — 4 min from Ningyocho Stn, 9 min from Mitsukoshimae Stn',
    cuisine: 'Sourdough pizza from a wood-fired oven, long-fermented, high-hydration dough with a puffy cornicione, made with natural yeast and seasonal vegetables (Tabelog; 2026 reviews) · lunch set ¥2,150–¥2,300: salad, a pizza (Tomato & Mozzarella or a monthly special such as chestnut and maitake), dessert and coffee or tea (October 2026) · dinner menu (Tabelog, October 2026): pizzas ¥2,400–¥2,800, e.g. lotus root and salsiccia with ricotta, mushroom and Pacific saury with myoga, cauliflower and persimmon; starters: octopus carpaccio ¥1,900, garlic shrimp salad ¥1,500, fried calamari ¥1,600, prosciutto ¥1,600; oven-baked potato with sour cream ¥1,600; mac and cheese ¥1,700; spare ribs ¥3,400; wagyu strip-loin tagliata ¥4,500 · wine and beer',
    website: TB, gmaps: gm('Pizza Tane 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Pizza · Ningyocho, wood-fired sourdough pizza in a hotel lobby] A small sourdough pizzeria in the lobby of the SOIL Nihonbashi hotel, opened in September 2025 and quickly famous on social media; the dough comes from Parklet's bakery nearby (October 2026). The crust is long-fermented and high-hydration, with a big, chewy, slightly tangy cornicione, and the toppings change monthly: chestnut and maitake, lotus root with salsiccia, saury with myoga. Lunch is a ¥2,150–¥2,300 set with salad and dessert. Expect a wait at lunch; you leave a number and get a call. Some find the sour crust surprising, and the counter stools high and the room cramped beside the hotel reception (October 2026). Dogs welcome on the terrace.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 1 September 2025 (Tabelog). A sourdough pizza specialist using homemade natural yeast (Tabelog shop text); the dough is supplied by Parklet bakery nearby (October 2026 review). In the SOIL Nihonbashi hotel, sharing space with the reception (October 2026).',
      philosophy: null, specialty: 'Sourdough pizza; monthly seasonal pizza.',
      anecdotes: [
        { text: '"There’s a Parklet bakery nearby that supplies the pizza dough, so I was able to stop by there while waiting." — October 2026, a one-hour Sunday wait.', source: R + 'B537626027/' },
        { text: '"The pizza has a high hydration dough that is fluffy and chewy, which is quite rare." — October 2026.', source: R + 'B537328443/' },
        { text: '"…at first, I thought the sourness was from the balsamic vinegar, only to realize it was just the dough itself." — October 2026.', source: R + 'B538137150/' },
      ],
      japanese_sources_summary: '食べログ: Pizza Tane、ピザ、ワインバー、ビアバー、日本橋人形町3-2-4 SOIL Nihonbashi Hotel 1F、人形町駅から徒歩4分、毎日11:30〜15:00、18:00〜22:00、昼は先着順・夜は予約可、アレルギーは事前に、ペットはテラスのみ、カード・電子マネー・QR可、20席 (カウンター6、テーブル6、テラス8)、禁煙、2025年9月1日オープン、自家製の天然酵母のサワードウのピザ。口コミ(2026年8月〜10月): 薪窯、長時間発酵の加水の多い生地、近くの Parklet のパン屋が生地を供給、ランチセット2,150〜2,300円、月替わりのピザ (栗と舞茸、さんまとみょうが、蓮根とサルシッチャ)、日曜の昼は1時間待ち、生地の酸味に驚いたという声、店内が狭くカウンターの椅子が高いという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B533613045/', R + 'B537260523/', R + 'B537328443/', R + 'B537354257/', R + 'B537626027/', R + 'B537916834/', R + 'B537950154/', R + 'B538043788/', R + 'B538112072/', R + 'B538137150/'] },
    cultural_comfort: { level: 'english', note: 'Hotel setting with overseas guests at the reception (October 2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Contact the shop about allergies in advance (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町3-2-4 SOIL Nihonbashi Hotel 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated 2026-10-08); reviews August–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686395, 139.779898); cross-checked: GSI 東京都中央区日本橋人形町三丁目2番4号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [TB + 'dtlmenu/', R + 'B537328443/'],
    price_note: 'Tabelog dinner menu, tax included, updated 2026-10-08; lunch set from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set: salad, pizza, dessert, drink', '¥2,150', 'Lunch', 'no', 'no', 'October 2026 (¥2,300 in another review).', 'lunch'),
      it('', '', 'Pizza: lotus root and salsiccia', '¥2,600', 'Pizza', 'no', 'no', 'Tabelog menu, October 2026.', 'lotus'),
      it('', '', 'Pizza: mushroom and Pacific saury', '¥2,800', 'Pizza', 'no', 'no', 'Tabelog menu, October 2026.', 'sanma'),
      it('', '', 'Octopus carpaccio', '¥1,900', 'Starters', 'ask', 'no', 'Tabelog menu, October 2026.', 'octopus'),
      it('', '', 'Oven-baked potato with sour cream', '¥1,600', 'Hot dishes', 'ask', 'no', 'Tabelog menu, October 2026.', 'potato'),
    ] }, {
    cuisine: '薪窯で焼くサワードウのピザ、長時間発酵で加水の多い生地、ふっくらしたコルニチョーネ、天然酵母と季節の野菜 (食べログ、2026年の口コミ)・ランチセット2,150〜2,300円: サラダ、ピザ (トマトとモッツァレラか、栗と舞茸などの月替わり)、デザート、コーヒーか紅茶 (2026年10月)・夜のメニュー (食べログ、2026年10月): ピザ2,400〜2,800円、リコッタと蓮根とサルシッチャ、きのことさんまとみょうが、カリフラワーと柿など。前菜: 蛸のカルパッチョ1,900円、海老のガーリックサラダ1,500円、イカフライ1,600円、生ハム1,600円。じゃがいものオーブン焼きとサワークリーム1,600円、マカロニチーズ1,700円、スペアリブ3,400円、和牛サーロインのタリアータ4,500円・ワインとビール',
    neighborhood: '日本橋人形町3-2-4 SOIL Nihonbashi Hotel 1F。人形町駅から徒歩4分、三越前駅から徒歩9分',
    gf_detail: 'グルテンフリーではない: 小麦のサワードウのピザとパン、イカフライ。',
    vegan_detail: 'ヴィーガンではない: ほとんどのピザにチーズ、肉や魚介のトッピング。',
    notes: '[ピザ・人形町、ホテルのロビーの薪窯サワードウピザ] SOIL Nihonbashi のホテルのロビーにある小さなサワードウのピザ店で、2025年9月に開き、SNS ですぐに評判に。生地は近くの Parklet のパン屋から (2026年10月)。生地は長時間発酵で加水が多く、もちもちで少し酸味のある大きな縁が特徴。トッピングは月替わりで、栗と舞茸、蓮根とサルシッチャ、さんまとみょうが。昼はサラダとデザート付きのセットで2,150〜2,300円。昼は待つことが多く、電話番号を伝えて呼ばれる。生地の酸味に驚く人も、カウンターの椅子が高い、ホテルの受付の横で狭いという声も (2026年10月)。テラスなら犬も可。',
  });
}

// ================================================================ Boeuf 彩
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13159396/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.boeuf-aya.com/';
  const H = day(['11:30', '14:00'], ['18:00', '23:00']);
  put({
    id: 'tokyo_boeuf_aya_ningyocho', name: 'Boeuf 彩 (Boeuf Aya)', category: 'OMNI',
    lat: 35.684808, lng: 139.780793, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded shrimp fry and cream croquettes, demi-glace, Neapolitan pasta.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steak, seafood fries and cream sauces.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 18:00–23:00; closed Sat, Sun and holidays (Tabelog). Reservations accepted (Tabelog). Cards (JCB, AMEX, Diners), e-money and QR (Tabelog). 19 seats including a counter; smoking allowed (Tabelog). Full of office workers by noon; dishes cooked to order (2025–26 reviews). Opened 20 August 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 1-1-6, B1F, near Nihonbashi Elementary School and Koami Shrine — 4 min from Ningyocho Stn, 8 min from Kayabacho Stn',
    cuisine: 'Yoshoku lunch sets A, B and C at ¥1,300 each, with salad, soup and rice, large rice free (October 2026) · set B: homemade hamburg steak, shrimp fry with tartar sauce and crab cream croquette, with Neapolitan pasta (2025–26) · hamburg steak sauces rotate weekly — tomato, demi-glace, pepper, or a Japanese grated-daikon and onion sauce (June 2026, December 2025) · curry (May 2026) · evening: wine with yoshoku (Tabelog)',
    website: SITE, gmaps: gm('Boeuf 彩 人形町'), menu_url: null,
    notes: "[Yoshoku · Ningyocho, a basement yoshoku with a ¥1,300 lunch] A basement yoshoku restaurant near Koami Shrine, open since 2013, where office workers fill every seat by noon. All three lunch sets are ¥1,300 with salad, soup and rice (large free); set B, the favourite, piles a juicy homemade hamburg steak, crisp shrimp fry and a crab cream croquette beside a little Neapolitan pasta, and the hamburg's sauce rotates weekly through tomato, demi-glace, pepper and a Japanese grated-daikon sauce. Everything is cooked to order, so it takes ten minutes or so. One November 2025 diner found it pricey for the portion and slow to turn tables. Weekdays only; evenings run late.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; opened the door early for waiting diners, June 2026 review)'], origin: null,
      background: 'Opened 20 August 2013 (Tabelog). A June 2026 diner found it through a Yahoo article. The building was under sheeting in December 2025, but the restaurant stayed open.',
      philosophy: null, specialty: 'Lunch set B: hamburg steak, shrimp fry, crab cream croquette.',
      anecdotes: [
        { text: '"… three types of sauces—tomato, demi-glace, and pepper sauce—on a rotating weekly basis" — June 2026.', source: R + 'B438570611/' },
        { text: '"Lunch offers three options: A, B, and C, all priced at JPY 1,300, tax included, and served with rice, salad, and soup." — October 2026.', source: R + 'B538297105/' },
        { text: '"It\'s always crowded, but the turnover isn\'t great." — November 2025.', source: R + 'B517896979/' },
      ],
      japanese_sources_summary: '食べログ: Boeuf 彩、洋食、日本橋人形町1-1-6 松和人形町ビル B1F、人形町駅から徒歩4分、月〜金11:30〜14:00、18:00〜23:00、土日祝休み、予約可、カード・電子マネー・QR可、19席、喫煙可、ワイン、2013年8月20日オープン、ホームページ boeuf-aya.com。口コミ(2025年11月〜2026年10月): 昼の A・B・C セットはどれも1,300円でサラダ、スープ、ご飯付き、大盛り無料、B はハンバーグ、エビフライ、カニクリームコロッケとナポリタン、ハンバーグのソースは週替わり (トマト、デミグラス、ペッパー、和風おろし)、注文を受けてから作る、昼は会社員で満席、量の割に高い・回転が遅いという声も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B438570611/', R + 'B517896979/', R + 'B519012723/', R + 'B521208005/', R + 'B526751813/', R + 'B527867457/', R + 'B529672347/', R + 'B530580946/', R + 'B536833683/', R + 'B538297105/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Three lunch sets by letter; arrive before noon.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-1-6 松和人形町ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews to October 2026.' },
    pin_source: `Tabelog ${TB} (35.684808, 139.780793); cross-checked: GSI 東京都中央区日本橋人形町一丁目1番6号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538297105/', R + 'B438570611/'],
    price_note: 'Lunch prices from June–October 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Lunch set B: hamburg steak, shrimp fry, crab cream croquette', '¥1,300', 'Lunch', 'no', 'no', 'October 2026; salad, soup and rice included.', 'set_b'),
      it('', '', 'Lunch set A or C', '¥1,300', 'Lunch', 'no', 'no', 'October 2026.', 'set_ac'),
    ] }, {
    cuisine: '洋食の昼の A・B・C セットはどれも1,300円、サラダ、スープ、ご飯付き、大盛り無料 (2026年10月)・B セット: 自家製ハンバーグ、タルタルソースのエビフライ、カニクリームコロッケにナポリタン (2025〜26年)・ハンバーグのソースは週替わりで、トマト、デミグラス、ペッパー、和風のおろし玉ねぎ (2026年6月、2025年12月)・カレー (2026年5月)・夜は洋食とワイン (食べログ)',
    neighborhood: '日本橋人形町1-1-6 松和人形町ビル B1F、Nihonbashi Elementary School と Koami Shrine の近く。人形町駅から徒歩4分、茅場町駅から徒歩8分',
    gf_detail: 'グルテンフリーではない: 衣のエビフライやクリームコロッケ、デミグラス、ナポリタン。',
    vegan_detail: 'ヴィーガンではない: ハンバーグ、魚介のフライ、クリームソース。',
    notes: '[洋食・人形町、1,300円のランチの地下の洋食店] Koami Shrine の近くの地下にある2013年からの洋食店で、正午には会社員で満席になる。昼のセットは3種類ともサラダ、スープ、ご飯 (大盛り無料) 付きで1,300円。人気の B は、肉汁あふれる自家製ハンバーグ、カリッとしたエビフライ、カニクリームコロッケに少しのナポリタン。ハンバーグのソースはトマト、デミグラス、ペッパー、和風おろしと週替わり。どれも注文を受けてから作るので10分ほどかかる。2025年11月には量の割に高く回転が遅いという声も。平日のみ、夜は遅くまで。',
  });
}

save();
