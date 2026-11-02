// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 6.
//   + 飯田 Iida (tea-kaiseki-rooted counter of chef Shinichi Iida in a former tea-utensil shop; Tabelog Gold 2019–2026; since 2010)
//   + 木山 Kiyama (well-water kaiseki of ex-Wakuden head chef Yoshiro Kiyama near the Imperial Palace; since 2017)
//   + 祇園 さゝ木 Gion Sasaki (Hiroshi Sasaki's lively kaiseki counter on Yasaka-dori; since 1998, here since 2006)
//   + 御料理 はやし Oryori Hayashi (traditional Kyoto kaiseki by Demachiyanagi; over 30 years)
//   The first four entries of `queue.mjs kyoto-missed next notable 80` on 2026-11-01. None is in data/kyoto.json: grep by name
//   (飯田/Iida, 木山/Kiyama — only unrelated "Kiyamachi" shops match — さゝ木/Sasaki, はやし/Hayashi) and by address (姉小路富小路,
//   絹屋町136, 小松町566, 梶井町448) found nothing; no Rakumi shop is in data either. Nearest record: ChIJR9XSUa8JAWAR1b9iGn1o0Wc
//   "Fune Ethical Lifestyle" 62 m from Kiyama, a different shop. Chain check: Gion Sasaki has three sister shops (Gion Rakumi,
//   Sushi Rakumi, Shoku Bar Rakumi, official site) and a 2026 review mentions a Kiyama ryotei in Beppu; neither is a fast-
//   growing chain. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 飯田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26016833/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '20:00']);
  put({
    id: 'kyoto_iida_anekoji', name: '飯田 (Iida)', category: 'MOM_AND_POP',
    lat: 35.009797, lng: 135.764762, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask through whoever books (seats go mainly to regulars and their guests). No gluten information; a kaiseki course seasoned with soy sauce and miso, with sushi and noodles in some months (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kaiseki course built on dashi, with eel, carp, bonito, sea bream, ayu and hamo (2026 reviews).',
    hours_raw: 'Daily from 18:00 (Tabelog lists 18:00–20:00), reservation only, closing days irregular (Tabelog); a September 2026 dinner took about 2.5 hours. Seats go mostly to regulars and referrals; several 2026 diners came as guests of regulars, one booked a year ahead (2026 reviews). 10 seats: a counter of about 5–6 and a 4.5-mat tatami room for 4 (Tabelog; 2026 reviews). Shoes off at the entrance (May, September 2026). No photos of the dishes; photos of the vessels allowed on one October 2026 visit; posting on social media not permitted (2026 reviews). Cash only (Tabelog). Non-smoking (Tabelog). About 7 min from Kyoto Shiyakusho-mae Stn, 10 min from Karasuma Stn (Tabelog; reviews). Opened 2010 (May 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Anekoji-dori west of Tomikoji, south side (as a May 2026 review gives the address) — about 7 min from Kyoto Shiyakusho-mae Stn, 10 min from Karasuma Stn',
    cuisine: 'A kaiseki course rooted in tea kaiseki, served on museum-grade tableware by Rosanjin and Eiraku, with Taisho-era glass and contemporary pieces (Tabelog) · about ¥57,000 with drinks (May 2026); diners report ¥50,000–79,999 · May 2026: eel Yawata-maki (a May-only dish), thin soybean kuzu tofu with abalone, a soup of fried carp with yomogi noodles, lightly seared aburame sashimi, seared bonito with wild garlic and myoga, sea bream chumaki sushi with edamame, grilled young ayu · June 2026: a clear soup of hamo and ume · October 2026: Matsutake · a welcome cup of ume kombu tea (May 2026) · sake and wine',
    website: TB, gmaps: gm('飯田 姉小路 京都'), menu_url: null,
    notes: "[Kaiseki · Anekoji, tea-kaiseki cooking on Rosanjin ware] A Sukiya-style house from the early Showa era, once a tea-utensil shop, left almost as it was: a broad entrance, a small inner garden, a counter of five or six and a four-and-a-half-mat room down the corridor. Chef Shinichi Iida, who trained in Kanazawa and Kyoto, has haunted antique shops since apprentice days, and the course comes on pieces by Rosanjin and Eiraku alongside Taisho glass. The cooking keeps to the shape of tea kaiseki — eel Yawata-maki in May, a hamo and ume soup in June, Matsutake in autumn — and reviewers call the clear soups the measure of the place. No photos of the food, cash only, and nearly every seat goes to regulars and their guests. Tabelog Gold every year from 2019 to 2026.",
    chef_bio: { chef_name: 'Shinichi Iida (Tabelog; a May 2026 review)', roles: ['Owner-chef (Tabelog: "The chef, Shinichi Iida"; 2026 reviews: "the owner")'], origin: null,
      background: 'Per Tabelog: trained in Kanazawa and Kyoto; built the cooking on tea kaiseki; since training days has visited antique shops whenever possible, valuing the "harmony between food and tableware"; uses works by Rosanjin and Eiraku, Taisho-era glass and contemporary pieces; fell in love with an early-Showa Sukiya-style house that was a tea-utensil shop and left it nearly untouched apart from the counter and kitchen. A May 2026 reviewer gives 2010 as the opening year and says the chef opened it. Reviewers in 2026 describe the owner as warm and engaging, explaining dishes in the private room. Tabelog Award Gold 2019–2026; Japanese cuisine WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: 'Harmony between food and vessel; a chance to touch the depth of Japanese culture through a meal (Tabelog).', specialty: 'Tea-kaiseki courses on Rosanjin and Eiraku ware; clear soups.',
      anecdotes: [
        { text: '"This is the only month when I can enjoy the eel Yawata-maki from the May menu!" — May 2026, a ninth visit.', source: R + 'B444422881/' },
        { text: '"On this day, the hamo (pike eel) and ume (plum) soup was exceptional. I feel that the quality of a Japanese restaurant can be best judged by its clear soup." — June 2026.', source: R + 'B530408403/' },
        { text: '"While I couldn\'t take photos of the food, I was allowed to photograph the beautiful vessels, including a teacup made by Rosanjin." — October 2026.', source: R + 'B538397120/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 飯田、日本料理、中京区姉小路富小路西入ル南側、毎日18:00〜20:00、要予約、不定休、カード不可、10席 (カウンター6、座敷4)、個室4名、禁煙、The Tabelog Award Gold 2019〜2026、日本料理 WEST 百名店 2021・2023・2025。口コミ (2026年3〜10月、英語): 常連の紹介でしか入りにくい、もと茶道具店の建物、Rosanjin や Eiraku の器、料理の撮影は不可、5月だけの鰻の Yawata 巻き、hamo と梅のお椀、Matsutake、店主が気さくに説明。',
      confidence: 'medium', sources: [TB, R + 'B444422881/', R + 'B461404946/', R + 'B524466545/', R + 'B525425267/', R + 'B528689513/', R + 'B530408403/', R + 'B533423089/', R + 'B535847816/', R + 'B536422128/', R + 'B538397120/'] },
    cultural_comfort: { level: 'japanese', note: 'Seats go mostly to regulars and their guests; no food photos; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区姉小路富小路西入ル南側',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026. No official website found.' },
    pin_source: `Tabelog ${TB} (35.009797, 135.764762); the address has no lot number and GSI resolves it only to 中京区 (ward), OSM not queried (sweep rule: GSI only), so the pin rests on the Tabelog point alone; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528689513/', R + 'B533423089/'],
    price_note: 'No menu or prices are published; the price is what a May 2026 diner paid, food and drink together.', last_checked: TODAY, items: [
      it('', '', 'Omakase kaiseki with drinks (total paid)', '¥57,000', 'Course', 'ask', 'no', 'May 2026.', 'omakase'),
      it('', '', 'Eel Yawata-maki (in course, May only)', '', 'Course', 'ask', 'no', 'May 2026.', 'unagi_yawatamaki'),
    ] }, {
    cuisine: '茶懐石を土台にした懐石のコースを、Rosanjin や Eiraku の名品、Taisho のガラス、現代作家の器で (食べログ)・飲み物込みで約57,000円 (2026年5月)、口コミの予算は50,000〜79,999円・2026年5月: 5月だけの鰻の Yawata 巻き、薄い大豆の kuzu 豆腐と鮑、鯉の揚げ物と yomogi の麺の椀、軽く炙った aburame のお造り、行者にんにくとみょうがの鰹のたたき、枝豆を添えた鯛の chumaki 寿司、若い ayu の焼き物・2026年6月: hamo と梅のお椀・2026年10月: Matsutake・迎えの一杯は梅 kombu 茶 (2026年5月)・日本酒とワイン',
    neighborhood: '姉小路富小路西入ル南側。京都市役所前駅から徒歩約7分、烏丸駅から徒歩10分',
    gf_detail: '予約してくれる人を通して要確認 (席はほとんど常連とその連れ)。グルテンの情報なし。醤油や味噌で味付けする懐石で、月によって寿司や麺も出る (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。出汁を土台に、鰻、鯉、鰹、鯛、ayu、hamo を使う懐石 (2026年の口コミ)。',
    notes: '[懐石・姉小路、Rosanjin の器で味わう茶懐石の流れ] Showa 初期の Sukiya 風の元茶道具店を、ほとんど手を入れずに使う店。広い玄関、小さな中庭、5〜6席のカウンター、廊下の奥に四畳半の座敷。Kanazawa と京都で修業した飯田さんは修業時代から骨董店に通い、Rosanjin や Eiraku の器に Taisho のガラスを合わせる。料理は茶懐石の流れに沿い、5月は鰻の Yawata 巻き、6月は hamo と梅のお椀、秋は Matsutake。椀物こそこの店の真価という声も。料理の撮影は不可、現金のみ、席はほとんど常連とその連れ。The Tabelog Award Gold を2019年から2026年まで毎年受賞。',
  });
}

// ================================================================ 木山
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029017/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_kiyama_gosho', name: '木山 (Kiyama)', category: 'MOM_AND_POP',
    lat: 35.015735, lng: 135.762958, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a kaiseki course built on bonito dashi and seasoned with soy sauce and miso, with tempura, sushi and a clam-dashi ramen among the closing dishes in 2026.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the course centres on dashi from freshly shaved bonito, with fish, shellfish and beef (Tabelog; 2026 reviews).',
    hours_raw: 'Daily lunch 12:00–15:00 (last entry 13:00) and dinner 18:00–22:00 (last entry 19:30); closing days irregular (Tabelog). The head chef is away on some days, listed on Tabelog — in 2026: 26–28 September, 17, 18, 30, 31 October and 1 November. Reservation only; no bookings through third parties; no seat requests; stairs may be involved; no strong fragrances (Tabelog). 30 seats: a counter of 9 and private rooms, on two floors (Tabelog; October 2026 review). Smart casual, no T-shirts, shorts or sandals (Tabelog). Children and babies welcome; children eat at the counter only on the adult course, otherwise in a private room with à la carte dishes by arrangement (Tabelog). Non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR; service charge 10% (Tabelog). About 5 min from Marutamachi Stn (Tabelog). Opened 25 April 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'West of the Kyoto Gosho (Imperial Palace), ヴェルドール御所 1F — about 5 min from Marutamachi Stn (Karasuma Line)',
    cuisine: 'Kaiseki that begins and ends with water from a well found on the site: a cup of hot well water, then katsuobushi shaved in front of you, tasted as arabushi and honkarebushi, and turned into the first dashi; then seasonal dishes, small soups, grilled fish, a choice of about five closing rice and noodle dishes in sizes you pick (with refills), and usucha (Tabelog; 2026 reviews) · lunch ¥18,870 (August 2026); dinner diners report ¥30,000–49,999; two diners paid ¥102,780 with a Matsutake supplement and a sake-and-wine pairing (October 2026) · August 2026: natural eel from the Sanpōgoko lakes (as one review writes it) over corn rice, potato purée with scallop and red sea urchin, horse mackerel with bitter melon and egg-yolk vinegar, abalone and liver tofu soup, Biwa trout and hanadai sashimi; Lake Biwa trout roe; a summer watermelon course at lunch · September 2026: taro, sweet shrimp and tofu; Ise lobster cake; anago with mushrooms and crisp rice; fermented ginger and daikon · October 2026: large Nagano Matsutake; a clam-dashi ramen among the closing dishes · pairings of wine and sake',
    website: TB, gmaps: gm('木山 京都 絹屋町'), menu_url: TB,
    notes: "[Kaiseki · Gosho-nishi, a former Wakuden head chef's dashi theatre] Natural wood, a counter of nine and private rooms near the west side of the Imperial Palace, in the building where the chef struck good well water while opening in 2017. The course starts with a cup of that water, then the chef shaves bonito in front of you, lets you taste two kinds of flakes and pours the first dashi — a ritual 2026 diners call the heart of the meal, not a show. Yoshiro Kiyama, from Gifu, spent 15 years at Wakuden, ten as head chef of Kyoto Wakuden and Murasakino Wakuden; Kiyama won a Michelin star a year after opening. The finish is a spread of five rice and noodle dishes you can size and repeat. Tabelog Silver almost every year since 2019 (Gold 2021). Lunch from about ¥19,000; the chef is away on some listed days.",
    chef_bio: { chef_name: 'Yoshiro Kiyama (Tabelog; 2026 reviews also give "Yoshio" and "Yoshihiro"; no kanji in a source)', roles: ['Owner-chef (Tabelog chef section; August 2026 review: "The owner, Yoshio Kiyama")'], origin: 'Gifu Prefecture, born 1981 (Tabelog).',
      background: 'Per Tabelog\'s chef section: born in 1981 in Gifu; after high school went into cooking; joined Wakuden at 19 and trained there 15 years, ten of them as head chef at Kyoto Wakuden and Murasakino Wakuden Hishitate; opened Kiyama in April 2017 and won a Michelin star in 2018. A September 2026 reviewer says a well-digger found a good water vein when the shop was being built. An August 2026 reviewer cites a star in the Michelin Guide Kyoto-Osaka 2026; an October 2026 reviewer mentions a ryotei the team has opened in Beppu. Tabelog Award Silver 2019–2020 and 2022–2026, Gold 2021; Japanese cuisine WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: '"Highlight the deliciousness of water from start to finish" (Tabelog).', specialty: 'Well-water kaiseki; bonito shaved at the counter; the first dashi; a choice of closing rice dishes.',
      anecdotes: [
        { text: '"The chef shaves bonito flakes right in front of the customers, and tasting the freshly shaved flakes and the first dashi is not just a performance; it enhances the entire course." — October 2026, second visit.', source: R + 'B525863314/' },
        { text: '"Every summer, I come to Kiyama for lunch, mainly for the watermelon." — August 2026; lunch ¥18,870.', source: R + 'B487877888/' },
        { text: '"For the finale, there are five different dishes, and you can adjust the portion sizes in advance, with the option to order more." — September 2026.', source: R + 'B534958526/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 木山、日本料理、中京区絹屋町136 ヴェルドール御所 1F、丸太町駅から徒歩5分、昼12:00〜13:00 (最終入店)、夜18:00〜19:30 (最終入店)、不定休、大将不在の日あり、第三者による予約は不可、席の指定不可、香水は控えて、30席 (カウンター9と個室)、スマートカジュアル、子ども・赤ちゃん可でお子様メニューあり、カード可、サービス料10%、2017年4月25日オープン、The Tabelog Award Gold 2021・Silver、日本料理 WEST 百名店 2021・2023・2025。シェフは1981年 Gifu 生まれ、19歳で Wakuden に入り15年、うち10年は料理長、2017年に独立、2018年にミシュランの星。口コミ (2026年8〜10月、英語): 井戸水を沸かした湯から始まる、目の前で削る katsuobushi と一番出汁、締めのご飯が5種類、Matsutake、夏の昼のスイカ、Beppu に料亭。',
      confidence: 'medium', sources: [TB, R + 'B295493848/', R + 'B487877888/', R + 'B525863314/', R + 'B528253311/', R + 'B534958526/', R + 'B535318294/', R + 'B536156792/', R + 'B536504153/', R + 'B536574822/', R + 'B538159575/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One set course with an optional Matsutake or similar supplement; book directly (no third-party bookings).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区絹屋町136 ヴェルドール御所 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026. No official website found.' },
    pin_source: `Tabelog ${TB} (35.015735, 135.762958); cross-checked: GSI 京都府京都市中京区絹屋町136番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B487877888/', R + 'B538159575/'],
    price_note: 'No prices are published; lunch from an August 2026 review, the October 2026 total for two from another.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥18,870', 'Course', 'ask', 'no', 'August 2026.', 'lunch'),
      it('', '', 'Dinner course for two with Matsutake supplement and pairing (total)', '¥102,780', 'Course', 'ask', 'no', 'October 2026.', 'dinner_pair'),
      it('', '', 'Choice of closing rice and noodle dishes, refills (in course)', '', 'Course', 'ask', 'no', 'September–October 2026.', 'closing_rice'),
    ] }, {
    cuisine: '敷地で見つかった井戸の水で始まり終わる懐石: 井戸水を沸かした湯、目の前で削る katsuobushi を arabushi と honkarebushi で味わい、一番出汁に。季節の料理、小吸物、焼き魚、締めは量を選べておかわりもできる5種ほどのご飯や麺、最後に薄茶 (食べログ、2026年の口コミ)・昼18,870円 (2026年8月)、夜の口コミの予算は30,000〜49,999円、2026年10月には Matsutake の追加と日本酒・ワインのペアリングで2人102,780円・2026年8月: Sanpōgoko (口コミの表記) の天然の鰻ととうもろこしのご飯、帆立と赤雲丹のじゃがいものピュレ、鯵とゴーヤと黄身酢、鮑と肝豆腐の椀、Biwa masu と hanadai のお造り、夏の昼はスイカづくし・2026年9月: 里芋と甘海老と豆腐、Ise の海老のすり身、穴子ときのこのおこげ、発酵させた生姜や大根・2026年10月: 大きな Nagano の Matsutake、締めのひとつにはまぐりの出汁のラーメン・ワインと日本酒のペアリング',
    neighborhood: 'Kyoto Gosho の西、ヴェルドール御所 1F。地下鉄烏丸線丸太町駅から徒歩約5分',
    gf_detail: '予約時に要確認。グルテンの情報なし。鰹の出汁を土台に醤油や味噌で味付けする懐石で、2026年の締めには天ぷら、寿司、はまぐりの出汁のラーメンもあった。',
    vegan_detail: 'ヴィーガンではありません。削りたての鰹の出汁が中心で、魚、貝、牛肉も使う (食べログ、2026年の口コミ)。',
    notes: '[懐石・Gosho の西、元 Wakuden の料理長の出汁の舞台] Kyoto Gosho の西、白木のカウンター9席と個室。2017年の開店時に良い水脈が見つかった井戸の水が料理の土台。コースは井戸水の一杯で始まり、大将が目の前で鰹を削り、2種の削り節を味わったあとに一番出汁を注ぐ。2026年の口コミではこれが見せ物ではなく食事の核心だという声。Gifu 出身の Yoshiro Kiyama さんは Wakuden で15年、うち10年は Kyoto Wakuden と Murasakino Wakuden の料理長を務め、開店1年でミシュランの星。締めは量を選べておかわりもできる5種のご飯や麺。The Tabelog Award は2019年からほぼ毎年 Silver (2021年は Gold)。昼は約19,000円から。大将不在の日がある。',
  });
}

// ================================================================ 祇園 さゝ木
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001863/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://gionsasaki.com';
  const D = day(['18:30', '21:00']); const L = day(['12:00', '14:00'], ['18:30', '21:00']);
  put({
    id: 'kyoto_gion_sasaki', name: '祇園 さゝ木 (Gion Sasaki)', category: 'MOM_AND_POP',
    lat: 34.998917, lng: 135.775005, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking by phone. No gluten information; the course includes sushi, somen noodles, sesame tofu and tempura (a corn tempura as dessert in July 2026), seasoned with soy sauce and dashi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Tabelog states the shop cannot accommodate vegan menu requests; the course uses fish, shellfish and shark fin.',
    hours_raw: 'Lunch Thu, Fri, Sat, one start at 12:00; dinner Tue–Sat, one start at 18:30; closed Sunday, Monday and irregularly (official site; Tabelog). More than 30 minutes late counts as a cancellation (Tabelog). Reservations by phone only, from the first business day of each month for dates up to the end of the month after next; the site gives call hours of 10:00–12:00 and 14:00 (or 16:30)–18:30 (official site). 20 seats: a main counter of 13 and a private counter of 7 (Tabelog). Shoes off at the entrance; smart casual, no sandals or shorts for men (Tabelog). No children under 10 (Tabelog). Non-smoking, with a smoking area outside (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR; service included at lunch, 10% at dinner (Tabelog). About 10–15 min from Gion-Shijo Stn, 3 min from the Kiyomizu-michi bus stop (Tabelog; official site).',
    hours: { 1: D, 2: D, 3: L, 4: L, 5: L }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yasaka-dori east of Yamato-oji, south of Kennin-ji, in a house reached up a flight of steps — about 10–15 min from Gion-Shijo Stn',
    cuisine: 'A Kyoto kaiseki of the day\'s best ingredients, bought at markets and fishing ports by the chef, served to everyone at once with theatre at the counter (Tabelog; official site) · lunch ¥22,000, dinner ¥44,000 including tax and service, varying with the market (official site) · July 2026 lunch: watermelon juice, grilled Mikawa eel, box sushi for the Gion Matsuri, hamo in mixed rice, a corn tempura dessert · September 2026: abalone and liver rice porridge, octopus with home-made karasumi in a chestnut burr, sweet sea bream soup, flounder sashimi cut by the chef, an extra-large cutlassfish grilled over charcoal, sesame tofu made with warabi starch; at dinner somen with crab and caviar, sushi handed over by the chef, shark-fin soup and an all-you-can-eat marinated tuna rice bowl · May 2026: Awaji hamo with egg yolk and water eggplant, young Lake Biwa ayu with watermelon sauce, nodoguro with wakame jelly · Japanese sake and wine',
    website: SITE, gmaps: gm('祇園さゝ木 八坂通'), menu_url: SITE,
    notes: "[Kaiseki · Yasaka-dori, a showman's Kyoto kaiseki] Up steps on Yasaka-dori south of Kennin-ji, past guardian figures at the door, thirteen guests at a counter with a big charcoal grill in the middle watch a crew of apprentices and chef Hiroshi Sasaki work, and everyone starts together. The chef buys at markets and fishing ports and serves the day's best with wit and some theatre: abalone porridge, a cutlassfish so big it is called a dragon, sushi handed across the counter, a dessert of corn tempura. Born in Nara in 1961 into a family of cooks, the chef ran Fujita in Pontocho at 27 and opened Gion Sasaki in 1998, moving here in 2006; 2026 reviewers note seven straight years of three Michelin stars. One July 2026 diner found the apprentices did most of the cooking that day. Book by phone at the start of each month for two months ahead. Lunch ¥22,000, dinner ¥44,000 all in.",
    chef_bio: { chef_name: 'Hiroshi Sasaki (佐々木浩; official site: "sasaki hiroshi")', roles: ['Owner-chef (Tabelog: "the owner, Mr. Sasaki"; official site)'], origin: 'Nara Prefecture, born 1961 (Tabelog).',
      background: 'Per Tabelog\'s chef section: born in 1961 in Nara into a family of cooks — a grandfather in catering, a father with a kaiseki restaurant, relatives running inns and sushi shops; trained at places including the kaiseki inn Rinko-an in Shiga; head chef at Fujita in Pontocho at 27; opened Gion Sasaki in 1998 on the north side of Gion, moved to a larger room in 2002 and to the present house south of Kennin-ji in 2006. A May 2026 review adds training at Funaiwa (Shiga), Mikazukiro and Shin Gion. 2026 reviewers note three Michelin stars for seven consecutive years (May, September 2026). The group also runs Gion Rakumi, Sushi Rakumi and Shoku Bar Rakumi (official site). Tabelog Award Bronze 2019–2021, 2023, 2024, 2026, Silver 2022, 2025; Japanese cuisine WEST "Tabelog 100" 2021, 2025.',
      philosophy: '"Delicious… no, fun!": for guests, the chef and the whole staff to enjoy the meal together as one (official site).', specialty: 'The day\'s best ingredients; counter theatre; charcoal grilling.',
      anecdotes: [
        { text: '"For the second dessert, I was served corn tempura. Sweet corn. It was interesting to have this as a dessert." — July 2026, a seventh visit.', source: R + 'B497221888/' },
        { text: '"The chef personally handed me sushi he prepared right at the counter, including freshly boiled natural sweet shrimp, which he peeled while still steaming." — September 2026, first visit.', source: R + 'B536647718/' },
        { text: '"The dishes are primarily prepared by the apprentice. While Chef Sasaki greeted us at the beginning, he was not present during the meal." — July 2026, lunch.', source: R + 'B525693934/' },
      ],
      japanese_sources_summary: '公式サイト (gionsasaki.com): 祇園さゝ木、佐々木浩、お客様の「おいしい・・・、いや楽しい。」の言葉が一番の望み、スタッフ全員が楽しみながら料理を出し店内が一体感のある時間を、昼は木・金・土のみ12:00一斉スタート、夜18:30一斉スタート、ランチ22,000円・ディナー44,000円 (税サ込み、仕入れで変動)、予約は毎月月初の営業日から2か月先の末日まで、電話のみ、日曜・月曜休みと不定休、東山区八坂通り小松町566-27、市バス清水道から徒歩3分、グループ店は祇園楽味、鮨楽味、食ばぁー楽味。食べログ (店舗会員): ヴィーガンメニューには対応できない、30分以上の遅刻はキャンセル扱い、20席 (カウンター13、個室カウンター7)、10歳未満不可、靴を脱ぐ、昼はサービス料込み・夜は10%、The Tabelog Award Bronze・Silver、日本料理 WEST 百名店 2021・2025。口コミ (2026年5〜10月、英語): 一斉スタート、大勢の弟子、炭火の焼き場、大将が手渡す寿司、ミシュラン三つ星7年連続。',
      confidence: 'medium', sources: [TB, SITE, R + 'B497221888/', R + 'B518003240/', R + 'B525693934/', R + 'B528879728/', R + 'B533443112/', R + 'B535175067/', R + 'B536647718/', R + 'B536973045/', R + 'B538157511/', R + 'B7860067/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone bookings only, at the start of each month; one set course at a shared start; shoes off.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂通大和大路東入小松町566-27',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.998917, 135.775005); cross-checked: GSI 京都府京都市東山区小松町566番地 (lot) 81m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, TB],
    price_note: 'Prices from the official site (tax and service included; vary with the market; read November 2026).', last_checked: TODAY, items: [
      it('ランチ', '', 'Lunch course (Thu–Sat, 12:00 start)', '¥22,000', 'Course', 'ask', 'no', 'Official site.', 'lunch'),
      it('ディナー', '', 'Dinner course (18:30 start)', '¥44,000', 'Course', 'ask', 'no', 'Official site.', 'dinner'),
    ] }, {
    cuisine: '大将が市場や漁港で仕入れるその日一番の食材の京料理を、全員一斉に、カウンターの見せ場とともに (食べログ、公式サイト)・ランチ22,000円、ディナー44,000円 (税サ込み、仕入れで変動、公式サイト)・2026年7月の昼: スイカのジュース、Mikawa の鰻の焼き物、祇園祭にちなんだ箱寿司、hamo の混ぜご飯、デザートにとうもろこしの tempura・2026年9月: 鮑と肝のお粥、栗のいがに盛った蛸と自家製の karasumi、甘鯛のお椀、大将が引くひらめのお造り、炭火で焼く特大の太刀魚、warabi 粉の胡麻豆腐。夜は蟹とキャビアの素麺、大将が手渡す寿司、ふかひれのスープ、食べ放題の漬けまぐろ丼・2026年5月: Awaji の hamo と卵黄と水茄子、Lake Biwa の若い ayu とスイカのソース、のどぐろとわかめのジュレ・日本酒とワイン',
    neighborhood: '八坂通大和大路東入、Kennin-ji の南、階段を上がった家。祇園四条駅から徒歩約10〜15分',
    gf_detail: '電話で予約するときに要確認。グルテンの情報なし。コースには寿司、素麺、胡麻豆腐、天ぷら (2026年7月はデザートにとうもろこしの tempura) があり、醤油と出汁で味付けする。',
    vegan_detail: 'ヴィーガンではありません。食べログによればヴィーガンメニューには対応できない。魚、貝、ふかひれを使うコース。',
    notes: '[懐石・八坂通、見せ場のある京料理] Kennin-ji の南、八坂通の階段を上がり、入口の像の前を通ると、中央に大きな炭火の焼き場のあるカウンターに13人。大勢の弟子と佐々木浩さんが料理し、全員一斉に始まる。大将は市場や漁港で仕入れたその日一番の食材を、機知と見せ場とともに出す: 鮑のお粥、龍と呼ばれるほど大きな太刀魚、カウンター越しに手渡す寿司、とうもろこしの tempura のデザート。1961年 Nara の料理人の家に生まれ、27歳で Pontocho の Fujita の料理長、1998年に祇園さゝ木を開き、2006年にここへ移った。2026年の口コミではミシュラン三つ星7年連続。2026年7月の昼には料理のほとんどを弟子が作っていたという声も。予約は毎月月初に電話で2か月先まで。ランチ22,000円、ディナー44,000円 (税サ込み)。',
  });
}

// ================================================================ 御料理 はやし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26000305/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:30', '21:30']);
  put({
    id: 'kyoto_oryori_hayashi', name: '御料理 はやし (Oryori Hayashi)', category: 'MOM_AND_POP',
    lat: 35.027977, lng: 135.769999, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information, and dishes are not explained at the table; a traditional Kyoto course seasoned with soy sauce and miso, with fried dishes and tempura (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a traditional kaiseki built on dashi, with sea bream, swordfish, hamo and ayu (2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last entry 13:00) and dinner 17:30–21:30 (last entry 19:00); closed Wednesday, some Thursdays and about twice a month (Tabelog). Reservations accepted; changes after confirmation cannot be accommodated, so call (Tabelog). 23 seats: a counter of 7 on the ground floor and three tatami private rooms upstairs for 2–8; whole-shop hire for up to 20 (Tabelog). No photos at the counter; dishes are deliberately not explained (Tabelog; 2026 reviews). Shoes off (September 2026). Children welcome; call first (Tabelog). Non-smoking (Tabelog). Cards: JCB and AMEX only; no e-money or QR (Tabelog). A 10% service charge, then 10% tax on the total (Tabelog). About 7 min from Demachiyanagi Stn, 2 min from the Kawaramachi-Imadegawa bus stop (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kamigyo, a quiet lane across from the Kitamura Art Museum, just over the Kamo Ohashi bridge — 7 min from Demachiyanagi Stn, 2 min from the Kawaramachi-Imadegawa bus stop',
    cuisine: 'Traditional Kyoto kaiseki with no menu and no explanations, so that diners wonder what each dish is; the price of the course decides the fish for sashimi and the grill rather than the number of dishes (2026 reviews) · lunch ¥15,730 including tax, plus 10% service (October 2026); diners report about ¥6,000–19,999 at lunch and ¥30,000–39,999 at dinner · August 2026: a persimmon or quince aperitif, assorted starters with ginger, a shrimp dumpling soup, white miso in summer, winter melon, a swordfish soup tied with mitsuba, grilled sea bream, young ayu tempura, kuzu noodles, a cold rice porridge, ume as a dessert, sweet beans with matcha · October 2026: salt-grilled sea bream collar, sashimi of sea bream, squid and bonito with salt vinegar · an original sake served ice-cold in a metal vessel (August 2026)',
    website: TB, gmaps: gm('御料理 はやし 出町柳'), menu_url: null,
    notes: "[Kaiseki · Demachiyanagi, a quiet old-school Kyoto counter] A wooden townhouse in a lane across from the Kitamura Art Museum, with a seven-seat counter downstairs where a still, focused chef cooks in full view and three tatami rooms upstairs. Chef Wataru Hayashi, more than fifty years in the trade, has run the place for over thirty: plain, deeply seasoned Kyoto cooking without show, from a shrimp dumpling soup to a salt-grilled sea bream collar and a cold rice porridge. There is no menu and no explanation — the house style is to let you guess. The counter is hushed (one diner found it tense) and allows no photos; the upstairs rooms are more relaxed. Lunch from about ¥15,700 is the gentle way in. Tabelog Silver or Bronze every year since 2019. Closed Wednesdays; JCB and AMEX only.",
    chef_bio: { chef_name: 'Wataru Hayashi (August 2026 review; no kanji in a source)', roles: ['Owner-chef (August 2026 review: "run by chef Wataru Hayashi")'], origin: null,
      background: 'An August 2026 reviewer describes a kaiseki restaurant of over 30 years run by chef Wataru Hayashi, with more than 50 years in cooking, known for straightforward dishes without flashy presentation or heavy seasoning. A September 2026 diner was told by the owner that the menu and dishes are deliberately not described, so guests can talk about the ingredients among themselves. Tabelog Award Silver 2019, 2022–2025, Bronze 2020, 2021, 2026; Japanese cuisine WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: null, specialty: 'Traditional Kyoto kaiseki; clear soups; salt-grilled sea bream.',
      anecdotes: [
        { text: '"This restaurant has a unique system where the ingredients for sashimi and grilled dishes change based on the course price rather than the number of dishes." — August 2026.', source: R + 'B533689115/' },
        { text: '"Rather than explaining the dishes, the style here is to let customers wonder, \'What is this?\' and enjoy imagining as they eat." — August 2026, private room.', source: R + 'B534643161/' },
        { text: '"I had the most popular lunch set, priced at JPY 15,730 (tax included, service charge 10% extra)." — October 2026, a third visit.', source: R + 'B326065787/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 御料理 はやし、日本料理、上京区梶井町448-61、出町柳駅から徒歩7分、昼11:30〜15:00 (最終入店13:00)、夜17:30〜21:30 (最終入店19:00)、水曜休み、木曜の一部と月2回ほど休み、予約確定後の変更は不可、23席 (1階カウンター7、2階に個室3室)、カウンターでの撮影不可、子どもは電話で相談、カードは JCB と AMEX のみ、サービス料10%を入れた金額に消費税10%、The Tabelog Award Silver・Bronze、日本料理 WEST 百名店 2021・2023・2025。口コミ (2026年8〜10月、英語): 30年以上続く店、料理の説明はしない、コースの値段で刺身と焼き物の魚が変わる、海老の団子の椀、冷たいお粥、鯛のかま、静かで緊張感のあるカウンター。',
      confidence: 'medium', sources: [TB, R + 'B326065787/', R + 'B518080551/', R + 'B525054136/', R + 'B529905312/', R + 'B533689115/', R + 'B534272549/', R + 'B534643161/', R + 'B535059811/', R + 'B536000023/', R + 'B536037739/'] },
    cultural_comfort: { level: 'japanese', note: 'Dishes are not explained by design and the counter is quiet; private rooms upstairs are more relaxed; JCB/AMEX or cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区梶井町448-61',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026. No official website found.' },
    pin_source: `Tabelog ${TB} (35.027977, 135.769999); GSI resolves 京都府京都市上京区梶井町448番地 (lot, not 448-61) 229m away, outside 150m, OSM not queried (sweep rule: GSI only), so the pin rests on the Tabelog point; an August 2026 review places it across from the Kitamura Art Museum; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B326065787/'],
    price_note: 'No prices are published; lunch price from an October 2026 review (tax included, service extra).', last_checked: TODAY, items: [
      it('', '', 'Lunch course (most popular)', '¥15,730', 'Course', 'ask', 'no', 'October 2026; +10% service.', 'lunch'),
      it('', '', 'Cold rice porridge to finish (in course, summer)', '', 'Course', 'ask', 'no', 'August 2026.', 'cold_porridge'),
    ] }, {
    cuisine: '献立も説明もない伝統的な京懐石で、何の料理かを想像しながら味わう。コースの値段で変わるのは品数ではなく刺身と焼き物の魚 (2026年の口コミ)・昼15,730円 (税込、サービス料10%別、2026年10月)。口コミの予算は昼約6,000〜19,999円、夜30,000〜39,999円・2026年8月: 柿や Karin の食前酒、生姜をきかせた八寸、海老の団子の椀、夏の白味噌、冬瓜、三つ葉で結んだ太刀魚の椀、鯛の焼き物、若い ayu の tempura、kuzu の麺、冷たいお粥、梅のデザート、甘い豆と抹茶・2026年10月: 鯛のかまの塩焼き、鯛、烏賊、鰹のお造りを塩と酢で・金属の器で冷たく出すオリジナルの日本酒 (2026年8月)',
    neighborhood: '上京区、Kamo Ohashi を渡ったところ、Kitamura Art Museum の向かいの静かな路地。出町柳駅から徒歩7分、Kawaramachi-Imadegawa のバス停から徒歩2分',
    gf_detail: '予約時に要確認。グルテンの情報はなく、料理の説明もしない。醤油や味噌で味付けする伝統的な京料理で、揚げ物や天ぷらもある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。出汁を土台に、鯛、太刀魚、hamo、ayu を使う伝統的な懐石 (2026年の口コミ)。',
    notes: '[懐石・出町柳、静かな昔ながらの京料理のカウンター] Kitamura Art Museum の向かいの路地の木造の町家。1階は大将が静かに目の前で料理する7席のカウンター、2階は座敷3室。料理歴50年を超える Wataru Hayashi さんが30年以上営む店で、見せ場のない、深い味の京料理: 海老の団子の椀、鯛のかまの塩焼き、冷たいお粥。献立も説明もなく、想像して味わうのがこの店の流儀。カウンターは静かで (緊張したという声も) 撮影不可、2階の座敷はくつろげる。昼15,700円ほどからが入りやすい。The Tabelog Award は2019年から毎年 Silver か Bronze。水曜休み、カードは JCB と AMEX のみ。',
  });
}

save();
