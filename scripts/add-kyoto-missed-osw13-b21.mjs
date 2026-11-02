// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 21.
//   + 味 ふくしま Aji Fukushima (kaiseki in a former Gion teahouse off Hanamikoji; since 2013)
//   + 一子相伝 なかむら Isshisoden Nakamura (Kyoto ryori house founded 1827; sixth-generation 中村元計)
//   + 青いけ Aoike (vegetable-led French counter in a renovated machiya south of the Imperial Palace; since 2014)
//   + 佳肴 岡もと Kakou Okamoto (Ryota Okamoto's eight-seat counter near Umamachi, run with a spouse; since 2013)
//   Taken in queue order from `queue.mjs kyoto-missed next notable 80` on 2026-11-02 (the first four after batch 20).
//   None is in data/kyoto.json: grep by name (ふくしま/Fukushima, なかむら/Nakamura — only a ramen shop 中村商店, a
//   different place — 青いけ/Aoike, 岡もと/Okamoto) and address (祇園町南側570, 富小路御池下ル136, 塀之内町631,
//   常盤町470-4) found nothing. Aji Fukushima is 43 m from kyoto_niku_no_takumi_miyoshi_gion — not stacked.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-21');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 味 ふくしま
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26022527/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_aji_fukushima', name: '味 ふくしま (Aji Fukushima)', category: 'OMNI',
    lat: 35.003114, lng: 135.775421, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. A Kyoto kaiseki with soy- and miso-seasoned dishes and tempura; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a dashi-based kaiseki with fish and shellfish (2025–2026 reviews).',
    hours_raw: 'Tabelog lists Monday 17:30–20:00 and Tue–Sat 11:30–13:00, closed Sunday and the last Monday of the month; these look like seating times (2026 diners booked lunch at 11:30 and 13:00 and also dined in the evening on other days), so no hours are stored. Reservation only, by phone 075-561-4848 (Tabelog). Lunch omakase ¥7,150 (December 2025); dinner about ¥20,000–29,999 with a service charge at night only (Tabelog; 2025–2026 reviews). No cards at lunch; JCB, AMEX, Diners at dinner (Tabelog). 21 seats: a counter of 9 and two sunken-kotatsu private rooms for 2–6 (Tabelog). Non-smoking; smoking room inside (Tabelog). 7–8 min from Gion-Shijo Stn (Tabelog). Opened 2 April 2013 (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, a lane off Hanamikoji in a former teahouse — 7–8 min from Gion-Shijo Stn',
    cuisine: 'Kyoto kaiseki served dish by dish in a renovated machiya that was a Gion teahouse (2026 reviews) · lunch omakase ¥7,150 (December 2025) with a bento, rice refills; dinner about ¥20,000–29,999 · spring 2026: firefly squid with broad beans; kombu-cured sea bream and aged tuna; clam shinjo soup; icefish tempura; milt rice; a hassun for the cherry blossoms; bamboo shoots · winter 2025: yuzu soup with soy-milk sauce, steamed sushi with seiko crab · sake and wine',
    website: null, gmaps: gm('味 ふくしま 祇園'), menu_url: null,
    notes: "[Kaiseki · Gion, a teahouse's own kaiseki] A short walk off Hanamikoji and its crowds, a former Gion teahouse turned kaiseki restaurant, unsigned, with a beautiful counter and two sunken-kotatsu rooms. Reviews say it earned a Michelin star soon after opening; the lunch omakase (¥7,150 in late 2025) is a gentle way in — a run of seasonal dishes, tempura and a bento with rice refills. In the evening a geiko may stop by to chat. Book by phone; closed Sundays; cash only at lunch.",
    chef_bio: { chef_name: null, roles: ['Kaiseki restaurant started by a Gion teahouse (April 2026 review); no person is named in the sources'], origin: null,
      background: 'Per 2026 reviews: a kaiseki restaurant started by a Gion ochaya, in a renovated machiya, that earned a Michelin star about a year and a half after opening; at an April 2026 private dinner a geiko came to chat. Tabelog: opened 2 April 2013; The Tabelog Award Bronze 2017–2020; Japanese cuisine WEST "Tabelog 100" 2021, 2023.',
      philosophy: null, specialty: 'Seasonal kaiseki; lunch omakase.',
      anecdotes: [
        { text: '"A Michelin Star is within reach during the day" — December 2025, the lunch omakase at ¥7,150.', source: R + 'B417105473/' },
        { text: '"During my visit, a geiko came over to chat, which truly captured the essence of Kyoto\'s entertainment culture." — April 2026.', source: R + 'B526916470/' },
        { text: '"the white wine and highball were presented without any brand descriptions, making it hard to gauge their quality." — December 2025.', source: R + 'B518692133/' },
      ],
      japanese_sources_summary: '食べログ: 味 ふくしま、日本料理、東山区祇園町南側570、祇園四条駅から徒歩約7〜8分、月 17:30〜20:00、火〜土 11:30〜13:00、日曜と月末の月曜休み、予約のみ、昼はカード不可、サービス料は夜のみ、21席 (カウンター9、掘りごたつの個室2室)、店内に喫煙室、2013年4月2日オープン、The Tabelog Award Bronze 2017〜2020、日本料理 WEST 百名店 2021・2023。口コミ (2025年12月〜2026年5月、英語): 祇園のお茶屋が始めた懐石、改装した町家、昼のおまかせ7,150円、ミシュランの星、芸妓さんとの会話。',
      confidence: 'medium', sources: [TB, R + 'B417105473/', R + 'B494475031/', R + 'B518692133/', R + 'B519411986/', R + 'B520053113/', R + 'B522104532/', R + 'B524647828/', R + 'B525641225/', R + 'B525703395/', R + 'B526916470/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set kaiseki; book by phone; cash at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.003114, 135.775421); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 139m; kyoto_niku_no_takumi_miyoshi_gion is 43 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B417105473/'],
    price_note: 'No published prices; lunch from a December 2025 review; dinner as diners report.', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase course', '¥7,150', 'Lunch', 'ask', 'no', 'December 2025.', 'lunch'),
    ] }, {
    cuisine: '祇園のお茶屋だった改装町家で一皿ずつ出す京懐石 (2026年の口コミ)・昼のおまかせ7,150円 (2025年12月)、弁当付きでご飯のおかわり可、夜は約20,000〜29,999円・2026年春: ホタルイカとそら豆、昆布締めの鯛と熟成マグロ、蛤のしんじょの椀、白魚の天ぷら、白子のご飯、桜の八寸、筍・2025年冬: 豆乳あんの柚子のお椀、せいこ蟹の蒸し寿司・日本酒とワイン',
    neighborhood: '祇園、花見小路から入った路地の元お茶屋。祇園四条駅から徒歩7〜8分',
    gf_detail: '予約時に要確認。醤油や味噌を使う京懐石で、天ぷらもある。グルテンの情報なし (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。出汁と魚介の懐石 (2025〜2026年の口コミ)。',
    notes: '[懐石・祇園、お茶屋の懐石] 花見小路の人混みから少し入った、看板のない元お茶屋の懐石の店。美しいカウンターと掘りごたつの個室が2室。口コミによれば開店後まもなくミシュランの星。昼のおまかせ (2025年末で7,150円) は入門にぴったりで、季節の料理、天ぷら、ご飯のおかわりもできる弁当。夜には芸妓さんが立ち寄って話していくことも。予約は電話で、日曜休み、昼は現金のみ。',
  });
}

// ================================================================ 一子相伝 なかむら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26003637/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kyoryori-nakamura.com/'; const ABOUT = 'http://www.kyoryori-nakamura.com/about/';
  put({
    id: 'kyoto_isshisoden_nakamura', name: '一子相伝 なかむら (Isshisoden Nakamura)', category: 'MOM_AND_POP',
    lat: 35.01045, lng: 135.765209, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: courses only, and the restaurant asks for dislikes in advance (Tabelog). The signature white-miso zoni is made without dashi (official site); other dishes use soy and miso.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-centred Kyoto kaiseki, including the signature sake-grilled guji (official site).',
    hours_raw: 'Lunch 12:00–14:00; dinner from 17:00, last entry 19:30; closed Sunday except for parties of 10 or more (Tabelog). No dinner closing time is published, so no hours are stored. Reservations accepted, by phone 075-221-5511; courses only, so mention dislikes when booking (Tabelog). 67 seats with private rooms (Tabelog). Non-smoking (Tabelog). Cards (Tabelog). On Tomikoji-dori just south of Oike, 1 min from Kyoto Shiyakusho-mae Stn west exit (official site; April 2025 review).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tomikoji-dori just south of Oike, behind a white noren — near Kyoto Shiyakusho-mae Stn',
    cuisine: 'Classic Kyoto ryori, kaiseki courses with house dishes handed down from father to son (official site) · signatures: guji salted overnight, sprinkled with sake and grilled, then finished with hot water poured over the bones as a soup; white-miso zoni made with water and no dashi, with a grilled round mochi and thin mustard (official site) · 2026 courses: hishi crab with ikura and yam; sashimi of shrimp, sea bream and octopus; scooped tofu with hamo-bone crackers; summer courses with hamo, ayu, sea urchin and hairy crab · the house sake 「Aoko」 (as written in reviews) brewed for Nakamura · diners report ¥20,000–29,999 at lunch and ¥40,000–49,999 at dinner',
    website: SITE, gmaps: gm('一子相伝 なかむら'), menu_url: null,
    notes: "[Kaiseki · Oike, two hundred years of Kyoto ryori] Behind a white noren on Tomikoji-dori, a house that began in 1827 when the first master carried Wakasa fish along the 鯖街道 (the mackerel road) to the palace and court nobles. Sixth-generation 中村元計 (Motokazu Nakamura) — once a Zen trainee at 天龍寺 and now a doctor of food science — keeps the two dishes passed from father to son: sake-grilled guji, finished as a soup with hot water over the bones, and a white-miso zoni made without dashi. Courses are served in quiet private rooms over a courtyard; reviewers note three Michelin stars. Lunch around ¥20,000–30,000, dinner ¥40,000–50,000; book ahead; closed Sundays.",
    chef_bio: { chef_name: 'Motokazu Nakamura (中村元計; official site, sixth-generation master, with the romaji Motokazu Nakamura)', roles: ['Sixth-generation master (official site)'], origin: null,
      background: 'Per the official site: founded in Bunsei 10 (1827) when the first master, 若狭屋清兵衛, carried Wakasa fish such as guji and mackerel to Kyoto for the palace and court nobles; the second generation began catering; the third, a tea devotee, made tea kaiseki catering the core; the fourth supplied the inns 柊家, 俵屋 and 炭家 during the war; after the war the restaurant opened on its present site, and the fifth generation built today\'s base. The sixth, 中村元計, studied at Tokyo University of Fisheries, trained as a Zen monk at 天龍寺 in 嵯峨嵐山, and in 2021 earned a doctorate in food and agricultural science at 龍谷大学, approaching cooking as science. Tabelog Award Bronze 2017–2023; Japanese cuisine WEST "Tabelog 100" 2021. 2026 reviews call it Michelin three-starred.',
      philosophy: '「即味心也」 — taste is the heart: only a person\'s heart moves another\'s (official site).', specialty: 'Sake-grilled guji; white-miso zoni.',
      anecdotes: [
        { text: '"This restaurant has been awarded three Michelin stars for six consecutive years." — October 2026.', source: R + 'B30819284/' },
        { text: '"The white miso zoni (soup) was surprising; I learned that it didn’t use any dashi, yet it was incredibly tasty." — January 2026.', source: R + 'B521264609/' },
        { text: '"Due to its adherence to tradition, I felt that this course, at this price point, lacked the surprises" — May 2026.', source: R + 'B527977967/' },
      ],
      japanese_sources_summary: '公式サイト (kyoryori-nakamura.com): 一子相伝 なかむら、「即味心也」、中京区富小路御池下ル136、6代目主人 中村元計、創業は文政十年 (1827年)、初代若狭屋清兵衛が若狭物を鯖街道で運び御所や公卿衆に供した、二代目から仕出しと出張料理、三代目中村庄三郎の茶懐石、四代目中村正蔵は戦中に柊家・俵屋・炭家に仕出し、戦後に京料理「なかむら」を設立、当代は東京水産大学卒業、天龍寺僧堂で修行、2021年に龍谷大学で博士 (食農科学)、名物は一晩寝かせて酒をふって焼くぐじの酒焼きと、出汁を使わず白味噌を水だけで練る雑煮。食べログ: 日本料理、昼12:00〜14:00、夜17:00〜19:30最終入店、日曜休み (10名以上は予約で営業)、67席、個室あり、カード可、The Tabelog Award Bronze 2017〜2023、日本料理 WEST 百名店 2021。口コミ (2025年4月〜2026年10月、英語): ミシュラン三つ星、ぐじの酒焼き、白味噌の雑煮、店の日本酒、伝統に忠実で驚きは少ないという声も。',
      confidence: 'high', sources: [SITE, ABOUT, TB, R + 'B30819284/', R + 'B505854188/', R + 'B507138332/', R + 'B510149520/', R + 'B521264609/', R + 'B527977967/', R + 'B528836577/', R + 'B534932471/', R + 'B535840102/', R + 'B535914342/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set kaiseki in private rooms; mention dislikes when booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区富小路御池下ル136',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010450, 135.765209); the sourced address (富小路御池下ル136) has no town name, so GSI could not confirm a lot — pin stays on the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published prices read; diners report ¥20,000–29,999 at lunch and ¥40,000–49,999 at dinner.', last_checked: TODAY, items: [
      it('ぐじの酒焼き', '', 'Sake-grilled guji, finished as a soup (in the course)', '', 'Course', 'ask', 'no', 'Official site.', 'guji'),
      it('白味噌の雑煮', '', 'White-miso zoni made without dashi (in the course)', '', 'Course', 'ask', 'ask', 'Official site.', 'zoni'),
    ] }, {
    cuisine: '一子相伝の名物のある古典的な京料理の懐石 (公式サイト)・名物: 塩をして一晩寝かせ酒をふって焼き、身を食べた後に湯を注いで汁にするぐじの酒焼き、出汁を使わず白味噌を水だけで練り、焼いた丸餅と溶き辛子を添える雑煮 (公式サイト)・2026年のコース: 菱蟹とイクラと長芋、海老・鯛・蛸のお造り、鱧の骨せんべいとすくい豆腐、鱧、鮎、雲丹、毛蟹の夏のコース・なかむらのための日本酒「Aoko」(口コミの表記)・口コミの予算は昼20,000〜29,999円、夜40,000〜49,999円',
    neighborhood: '御池のすぐ南の富小路通、白いのれんの店。京都市役所前駅の近く',
    gf_detail: '予約時に要確認。コースのみで、苦手な食材は予約時に伝えるよう案内がある (食べログ)。名物の白味噌の雑煮は出汁を使わない (公式サイト)。ほかの料理は醤油や味噌を使う。',
    vegan_detail: 'ヴィーガンではありません。名物のぐじの酒焼きなど魚が中心の京懐石 (公式サイト)。',
    notes: '[懐石・御池、200年の京料理] 富小路通の白いのれんの奥、1827年に初代が若狭の魚を鯖街道で御所や公卿衆に運んだことに始まる店。天龍寺で雲水として修行し食農科学の博士号を持つ6代目の中村元計さんが、一子相伝の二品を守る: 骨に湯を注いで汁にして締めるぐじの酒焼きと、出汁を使わない白味噌の雑煮。中庭に面した静かな個室で、口コミによればミシュラン三つ星。昼は20,000〜30,000円、夜は40,000〜50,000円ほど。予約は早めに、日曜休み。',
  });
}

// ================================================================ 青いけ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26023539/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://aoike-kyoto.com/'; const LUNCH = 'http://aoike-kyoto.com/lunch.html'; const DINNER = 'http://aoike-kyoto.com/dinner.html'; const ACCESS = 'http://aoike-kyoto.com/access.html';
  put({
    id: 'kyoto_aoike', name: '青いけ (Aoike)', category: 'OMNI',
    lat: 35.016307, lng: 135.761887, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Vegetable-led French courses seasoned lightly with consommé; bread is served and some dishes are fried (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The courses centre on vegetables, but consommé jellies, fish and meat appear throughout (2025–2026 reviews).',
    hours_raw: 'Lunch from 12:00, last order 13:00; dinner from 18:00, last order 19:30; closed Sunday and one or two irregular days a month (official site). No closing times are published, so no hours are stored. Reservations by phone (075-204-3970) or Ikyu, not by Facebook or Instagram message (official site). Lunch ¥9,800, ¥14,000, ¥18,000 or ¥22,000; dinner ¥14,000, ¥18,000, ¥22,000 or ¥27,000, tax included, from January 2026 (official site); no service charge (Tabelog). 8 counter seats (official site). Non-smoking; no phone calls or camera flash; no children 10 and under (official site). 5 min from Marutamachi Stn (Tabelog). Opened 4 February 2014 (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takeyamachi-dori west of Takakura, south of the Imperial Palace — 5 min from Marutamachi Stn',
    cuisine: 'French omakase built on vegetables — about 60 kinds, grown and picked by the chef each morning (January and May 2026 reviews) — served on Venetian glass (2025 reviews) · lunch ¥9,800–22,000 and dinner ¥14,000–27,000 for 6 to 8+ dishes, tax included, from January 2026 (official site) · signature vegetable terrine of individually cooked vegetables wrapped in cabbage; vegetable mousses with consommé jelly; Omi beef skirt with mustard sauce (January 2026); potato and melon vichyssoise (July 2026); chawanmushi with eel and Matsutake, Spanish mackerel with anchovy-hazelnut sauce (2025) · reasonably priced wine',
    website: SITE, gmaps: gm('青いけ 京都'), menu_url: LUNCH,
    notes: "[French · Imperial Palace south, the vegetable French counter] An old Kyoto townhouse remade under 中村義明 of the sukiya builder 中村外二工務店, with a patchwork zelkova counter of eight seats, Danish chairs and Venetian glass on the table. The chef grows and picks some sixty kinds of vegetables each morning, and the light, consommé-seasoned courses are built around them — the signature terrine of separately cooked vegetables wrapped in cabbage, vegetable mousses, then fish or Omi beef. You leave light. Lunch from ¥9,800, dinner from ¥14,000, tax included and no service charge. Book by phone or Ikyu; no children 10 and under; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner-chef who grows the vegetables (2026 reviews); not named in the sources read'], origin: null,
      background: 'Per the official site: the interior and exterior were produced by 中村義明, head of the sukiya builder 中村外二工務店, renovating an old machiya simply and modernly with a patchwork zelkova counter, French tiles at the entrance, J.L. Møller chairs from Denmark and old Indian teak tables. Per 2026 reviews: the chef grows and harvests about 60 kinds of vegetables. Tabelog: opened 4 February 2014; French WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: null, specialty: 'Vegetable terrine; vegetable-led French courses.',
      anecdotes: [
        { text: '"This course is centered around 60 types of vegetables harvested fresh every morning by the chef, paired with complementary proteins." — January 2026.', source: R + 'B521337593/' },
        { text: '"I learned that the vegetables were grown and harvested by the chef himself, which made them even more delicious." — May 2026.', source: R + 'B528037688/' },
        { text: '"The restroom had a lovely garden and was spacious, which was nice. Restrooms are important!" — September 2026.', source: R + 'B538126426/' },
      ],
      japanese_sources_summary: '公式サイト (aoike-kyoto.com): 青いけ、京都御所南の野菜が主のフランス料理店、2026年1月からの価格: ランチ (本日のおまかせ料理6品) 9,800円・7品14,000円・8品18,000円・22,000円、ディナー6品14,000円・7品18,000円・22,000円・27,000円 (税込)、ランチ12:00〜13:00 (L.O)、ディナー18:00〜19:30 (L.O)、日曜と月1〜2日の不定休、カウンター8席、予約は電話か一休、SNS のメッセージでは受け付けない、全席禁煙、通話とフラッシュは遠慮、10歳以下は入店不可、中村外二工務店の中村義明が内外装をプロデュース、欅のパッチワークカウンター、デンマークの椅子、インドのチークのテーブル。食べログ: フレンチ、中京区竹屋町通高倉西入塀之内町631、サービス料なし、2014年2月4日オープン、フレンチ WEST 百名店 2021・2023・2025。口コミ (2025年7月〜2026年9月、英語): シェフが育てる約60種の野菜、野菜のテリーヌ、ヴェネツィアのガラスの器。',
      confidence: 'high', sources: [SITE, LUNCH, DINNER, ACCESS, TB, R + 'B510444665/', R + 'B511657874/', R + 'B513500346/', R + 'B513620830/', R + 'B515698984/', R + 'B517964321/', R + 'B521337593/', R + 'B528037688/', R + 'B531478769/', R + 'B538126426/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase courses at the counter; book by phone or Ikyu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区竹屋町通高倉西入塀之内町631',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with January 2026 prices; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.016307, 135.761887); cross-checked: GSI 京都府京都市中京区塀之内町631番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [LUNCH, DINNER],
    price_note: 'Official site, tax included, from January 2026 (read November 2026); no service charge (Tabelog).', last_checked: TODAY, items: [
      it('本日のおまかせ料理 全6品', '', 'Lunch: omakase of 6 dishes, dessert, coffee or tea', '¥9,800', 'Lunch', 'ask', 'ask', 'Official site; also ¥14,000, ¥18,000, ¥22,000.', 'lunch'),
      it('本日のおまかせ料理 全6品', '', 'Dinner: omakase of 6 dishes, two desserts, coffee or tea', '¥14,000', 'Dinner', 'ask', 'ask', 'Official site; also ¥18,000, ¥22,000, ¥27,000.', 'dinner'),
    ] }, {
    cuisine: 'シェフが毎朝育てて収穫する約60種の野菜を軸にしたフレンチのおまかせ (2026年1月・5月の口コミ)、ヴェネツィアのガラスの器で (2025年の口コミ)・2026年1月からランチ9,800〜22,000円、ディナー14,000〜27,000円、6〜8品以上、税込 (公式サイト)・名物: 一つずつ火を入れた野菜をキャベツで包んだ野菜のテリーヌ、コンソメのジュレの野菜のムース、マスタードソースの近江牛のハラミ (2026年1月)、じゃがいもとメロンのヴィシソワーズ (2026年7月)、鰻と松茸の茶碗蒸し、アンチョビとヘーゼルナッツのソースの鰆 (2025年)・手頃なワイン',
    neighborhood: '高倉通の西の竹屋町通、京都御所の南。丸太町駅から徒歩5分',
    gf_detail: '予約時に要確認。コンソメで軽く味付けする野菜中心のフレンチ。パンが出て、揚げ物もある (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。野菜が中心だが、コンソメのジュレ、魚、肉も出る (2025〜2026年の口コミ)。',
    notes: '[フレンチ・御所南、野菜のフレンチのカウンター] 数寄屋の中村外二工務店が手がけた古い町家で、欅のパッチワークカウンター8席、デンマークの椅子、ヴェネツィアのガラスの器。シェフが毎朝育てて摘む約60種の野菜を軸に、コンソメで軽く仕立てたコースは、一つずつ火を入れた野菜をキャベツで包む名物のテリーヌ、野菜のムース、それから魚か近江牛。食後も軽い。昼9,800円から、夜14,000円から、税込でサービス料なし。予約は電話か一休で、10歳以下は不可、日曜休み。',
  });
}

// ================================================================ 佳肴 岡もと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26022988/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_kakou_okamoto', name: '佳肴 岡もと (Kakou Okamoto)', category: 'MOM_AND_POP',
    lat: 34.992358, lng: 135.775759, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. A Japanese omakase with fried dishes, sushi and shark-fin noodles; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi, seafood and chicken throughout (2025–2026 reviews).',
    hours_raw: '18:00–22:00, Tue–Sun; closed Monday and the last Sunday of the month (Tabelog). Reservations accepted, by phone 075-551-1055 (Tabelog). One omakase course (July 2026); sake pairing available (January 2026); diners spend about ¥20,000–29,999. 8 counter seats; private hire up to 20 (Tabelog). Non-smoking (Tabelog). Cards (VISA, AMEX); no table charge (Tabelog). 2 min from the Umacho bus stop, 15 min from Kiyomizu-Gojo Stn (Tabelog). Opened 3 December 2013 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama near the Umacho bus stop, away from the tourist streets — 2 min from the bus stop',
    cuisine: 'One seasonal omakase at an eight-seat counter, with a strong dashi and French-touched creativity (2025–2026 reviews) · July 2026: shijimi kuzu soup with junsai and cucumber flowers; striped jack, sea urchin and shirasu over somen with grilled-eggplant purée; sea bass with egg tofu in a clear soup · signatures: shark-fin noodles with chapon chicken broth, natural karasumi, saba sushi (2025–2026) · winter 2026: shrimp yam with caviar, tiger fugu with sea urchin, crab soup in a treasure-box dish, Ise lobster · a wide sake list with pairings',
    website: null, gmaps: gm('佳肴 岡もと 京都'), menu_url: null,
    notes: "[Kaiseki · Higashiyama, a couple's eight-seat counter] Away from the tourist streets near the Umacho bus stop, a couple run an eight-seat counter with one omakase a night; the owner-chef, Ryota Okamoto, trained at Kyoto's HANA Kiccho and Akiyama. Expect deep dashi, playful touches borrowed from French cooking, signatures like shark-fin noodles in chapon broth and natural karasumi, and a long sake list poured to match. Regulars praise the chef's stories and the couple's hospitality; one has been 35 times. About ¥20,000–30,000; book by phone; closed Mondays.",
    chef_bio: { chef_name: 'Ryota Okamoto (July 2026 review; no given-name kanji in a source)', roles: ['Owner-chef (July 2026 review)'], origin: null,
      background: 'Per a July 2026 review: trained at Kyoto\'s HANA Kiccho and Akiyama before opening Kakou Okamoto; one omakase course. A May 2026 regular credits "the couple\'s skilled hospitality". Tabelog: opened 3 December 2013; The Tabelog Award 2021 Bronze; Japanese cuisine WEST "Tabelog 100" 2021.',
      philosophy: null, specialty: 'Shark-fin noodles in chapon broth; dashi; sake pairing.',
      anecdotes: [
        { text: '"The couple’s skilled hospitality enhances the experience, allowing first-time visitors to feel at ease and blend into the atmosphere as they enjoy their drinks." — May 2026, a 35th visit.', source: R + 'B445035882/' },
        { text: '"It wasn\'t just a simple explanation of the dishes; the delightful interactions with regular customers made the experience enjoyable until the very end." — April 2025.', source: R + 'B508994680/' },
        { text: '"They have a wide selection of Japanese sake, and they provide sake that pairs perfectly with the dishes." — February 2026.', source: R + 'B523186316/' },
      ],
      japanese_sources_summary: '食べログ: 佳肴岡もと、日本料理、東山区常盤町470-4、Umacho バス停から徒歩2分、清水五条駅から徒歩15分、火〜日 18:00〜22:00、月曜と月末の日曜休み、予約可、8席、貸切20名まで、カード可、チャージなし、2013年12月3日オープン、The Tabelog Award 2021 Bronze、日本料理 WEST 百名店 2021。口コミ (2025年2月〜2026年7月、英語): 店主の Ryota Okamoto さんは HANA Kiccho と Akiyama で修業、おまかせ一本、出汁、フカヒレの麺、からすみ、日本酒のペアリング、夫婦のもてなし。',
      confidence: 'medium', sources: [TB, R + 'B145038714/', R + 'B445035882/', R + 'B508895110/', R + 'B508994680/', R + 'B515828743/', R + 'B522405047/', R + 'B523186316/', R + 'B528480585/', R + 'B528866122/', R + 'B80694258/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One omakase at the counter; sake pairing; book by phone.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区常盤町470-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.992358, 135.775759); cross-checked: GSI 京都府京都市東山区常盤町470番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published prices; diners report ¥20,000–29,999 (2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '', 'Course', 'ask', 'no', 'July 2026.', 'omakase'),
    ] }, {
    cuisine: '8席のカウンターで季節のおまかせ一本。深い出汁とフレンチの遊び心 (2025〜2026年の口コミ)・2026年7月: じゅんさいと胡瓜の花のしじみの葛仕立て、焼き茄子のピュレと縞鯵・雲丹・しらすのそうめん、鱸と玉子豆腐のお椀・名物: シャポンの鶏のスープのフカヒレの麺、天然のからすみ、鯖寿司 (2025〜2026年)・2026年冬: キャビアの海老芋、雲丹をのせたとらふぐ、宝箱の器の蟹のお椀、伊勢海老・豊富な日本酒とペアリング',
    neighborhood: '東山、Umacho バス停の近く、観光地から離れた界隈。バス停から徒歩2分',
    gf_detail: '予約時に要確認。揚げ物、寿司、フカヒレの麺のある和のおまかせ。グルテンの情報なし (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。出汁、魚介、鶏を使う (2025〜2026年の口コミ)。',
    notes: '[懐石・東山、夫婦の8席のカウンター] 観光地から離れた Umacho のバス停の近く、京都の HANA Kiccho と Akiyama で修業した店主の Ryota Okamoto さんが夫婦で営む8席のカウンター。夜はおまかせ一本: 深い出汁、フレンチから借りた遊び心、シャポンのスープのフカヒレの麺や天然のからすみなどの名物、料理に合わせて注ぐ豊富な日本酒。常連は大将の話と夫婦のもてなしを褒め、35回通う人も。20,000〜30,000円ほど、予約は電話で、月曜休み。',
  });
}

save();
