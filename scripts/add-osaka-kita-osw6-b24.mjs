// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 24.
//   + tabeNOko (small-plate izakaya to 2 am, Kitashinchi)
//   + 海鮮居酒屋 てつたろう 梅田中崎町店 Seafood Izakaya Tetsutarou (111-seat seafood banquet izakaya under the JR tracks, Nakazaki-nishi)
//   + 梅田 海鮮居酒屋いこう Umeda Seafood Izakaya Ikou (16-seat seafood and sake izakaya, Doyama)
//   + yoshi-carbona~ヨシカルボナ~ (carbonara-led Italian bar, Kitashinchi side of 堂島)
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b23): first odd ids 27138911, 27089733,
//   27138433, 27153539. None is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Chain check: Tetsutarou's official site lists only this Umeda-Nakazakicho shop (the lunch "Kaisen Shokudo Haruko" is the
//   same premises); tabeNOko, Ikou and yoshi-carbona show no other shop.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('osaka-kita', TODAY, 'osw6-24');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ tabeNOko
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27138911/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '02:00']), SA = day(['18:00', '24:00']);
  put({
    id: 'osaka_tabenoko_kitashinchi', name: 'tabeNOko', category: 'OMNI',
    lat: 34.696698, lng: 135.500732, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Small plates include aji fry, spring rolls, a low-temperature pork cutlet, and ramen or kasu udon to finish.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, meat and pork dishes; a grilled Shimonita leek and snap peas are on the menu.',
    hours_raw: 'Mon–Fri, holidays and days before and after holidays 18:00–2:00 (last order 1:30); Sat 18:00–24:00 (last order 23:00); closed Sundays (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay, d Barai, Rakuten Pay, au PAY; no e-money (Tabelog). 20 seats; private hire up to 20; smoking allowed (Tabelog). The entrance is hard to find (October 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi, 第二大川ビル 2F — 2 min from Kitashinchi and Oebashi Stns',
    cuisine: 'Small plates sized for one, so nothing is left over, from drinking snacks to ramen to finish; a low-temperature tonkatsu of Ebisu mochi pork (Tabelog) · courses with all-you-can-drink (Tabelog, tax included): omakase ¥6,500; tabeNOko ¥7,500; deluxe with sashimi and Awaji beef steak ¥10,000 (90 minutes); diners paid ¥6,000 (June 2026) and ¥5,500 (February 2026) · small plates from ¥300 (December 2025): thick aji fry, grilled salmon jerky, rare pork cutlet, simmered shrimp-yam, water dumplings, soft-boiled egg with chicken ham, grilled tuna cheek, mackerel with mentaiko, potato salad, prosciutto, shrimp-chili spring rolls, beef tendon and daikon, snap peas with sansho (2025–2026) · finishes: shijimi salt ramen with pork and chicken chashu; kasu udon as a LINE-only secret dish; mentaiko onigiri (2026) · Kaoru Ale draft ¥580; sake from ¥580 (December 2025)',
    website: null, gmaps: gm('tabeNOko 北新地'), menu_url: null,
    notes: "[Izakaya · Kitashinchi, small plates until 2 am] A twenty-seat izakaya up a hard-to-find stair in Kitashinchi whose name says it: eat everything, nothing left over. Every dish comes in a one-person portion from about ¥300, so you can work through thirty-odd choices, thick aji fry, rare low-temperature pork cutlet, grilled tuna cheek, water dumplings, and finish with shijimi salt ramen or a secret kasu udon. Courses with all-you-can-drink run about ¥5,500–10,000. Regulars love the variety and the late hours; one first-timer found the cooking homely and the clams salty. Smoking allowed; open until 2 am on weekdays.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff (unnamed)'], origin: null, background: 'Shop text (Tabelog): only truly delicious dishes in small plates, tailored for each person, from drinking snacks to a closing ramen; a rare low-temperature tonkatsu of Ebisu mochi pork; a cozy space for dates and parties, 2 minutes from Kitashinchi Station. A December 2025 diner reads the name as the concept of finishing every dish.', philosophy: '"Please enjoy so that there is no leftover food" (Tabelog).', specialty: 'Small plates; shijimi salt ramen.',
      anecdotes: [
        { text: '"They\'re open until 2 AM, so it\'s perfect for grabbing a late-night ramen after drinks!" — June 2026.', source: R + 'B492208125/' },
        { text: '"For the finale, I decided on the shijimi clam ramen with salt, which came topped with both pork and chicken chashu." — March 2026.', source: R + 'B524780199/' },
        { text: '"the overall presentation and seasoning felt more home-cooked than restaurant-quality." — February 2026.', source: R + 'B522632101/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B486379600/', R + 'B492208125/', R + 'B513116206/', R + 'B520210919/', R + 'B521352514/', R + 'B522066838/', R + 'B522632101/', R + 'B524780199/', R + 'B525014676/', R + 'B528391731/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small plates suit solo diners (December 2025). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曾根崎新地1-1-43 第二大川ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目1番43号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B528391731/'],
    price_note: 'Courses from the Tabelog listing (tax included); diners paid less for similar courses in 2026 (¥5,500–6,000).', last_checked: TODAY, items: [
      it('', '', 'Omakase course with all-you-can-drink', '¥6,500', 'Course', 'ask', 'no', 'Tabelog listing; ¥6,000 in a June 2026 review.', 'omakase_ayce'),
      it('', '', 'tabeNOko course with all-you-can-drink', '¥7,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'tabenoko_course'),
      it('', '', 'Deluxe course with sashimi and Awaji beef, all-you-can-drink 90 min', '¥10,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'deluxe'),
      it('', '', 'Small plates (from)', '¥300', 'À la carte', '', '', 'December 2025 review.', 'small_plates'),
    ] }, {
    cuisine: '食べ残しが出ないよう一人分ずつの小皿、つまみから締めのラーメンまで、Ebisu もち豚の低温調理のとんかつ (食べログ)・飲み放題つきのコース (食べログ、税込): おまかせ6,500円、tabeNOko 7,500円、刺身と Awaji 牛のステーキの極み10,000円 (90分)、口コミでは6,000円 (2026年6月)、5,500円 (2026年2月)・小皿は300円から (2025年12月): 厚切りのアジフライ、鮭とばの炙り、レアのとんかつ、海老芋の煮物、水餃子、半熟卵と鶏ハム、マグロのほほ肉の焼き物、サバの明太子、ポテトサラダ、生ハム、エビチリの春巻き、牛すじ大根、スナップえんどうの山椒揚げ (2025〜2026年)・締め: しじみの塩ラーメンに豚と鶏のチャーシュー、LINE 限定の裏メニューのかすうどん、明太子のおにぎり (2026年)・Kaoru Ale の生580円、日本酒は580円から (2025年12月)',
    neighborhood: '北新地、第二大川ビル 2階。北新地駅と大江橋駅から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。小皿にはアジフライ、春巻き、低温調理のとんかつ、締めのラーメンやかすうどんがある。',
    vegan_detail: 'ヴィーガンではありません。魚、肉、豚の料理で、Shimonita ねぎの焼き物やスナップえんどうもある。',
    notes: '[居酒屋・北新地、深夜2時までの小皿] 北新地のわかりにくい階段を上がった20席の居酒屋で、店名のとおり残さず食べてほしいという店。どの料理も一人分の小皿で300円ほどから、30種以上から選べる: 厚切りのアジフライ、レアの低温調理のとんかつ、マグロのほほ肉の焼き物、水餃子、締めはしじみの塩ラーメンか裏メニューのかすうどん。飲み放題つきのコースは5,500〜10,000円ほど。品数の多さと遅くまで開いているのが常連に好評で、家庭料理のよう、あさりが塩辛いという初めての客の声も。喫煙可、平日は深夜2時まで。',
  });
}

// ================================================================ 海鮮居酒屋 てつたろう 梅田中崎町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27089733/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://tetsutarou.com/umeda/about.html';
  const MO = day(['17:00', '23:30']), WK = day(['11:30', '14:00'], ['17:00', '23:30']), SA = day(['11:30', '14:00'], ['14:00', '23:30']), SU = day(['11:30', '14:00'], ['14:00', '22:30']);
  put({
    id: 'osaka_tetsutarou_nakazakicho', name: '海鮮居酒屋 てつたろう 梅田中崎町店 (Seafood Izakaya Tetsutarou Umeda Nakazakicho ten)', category: 'OMNI',
    lat: 34.707729, lng: 135.501752, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu includes tempura (lunch had an all-you-can-eat tempura deal), tuna katsu, gyoza and dashi-based dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; a ¥100 lotus-root kinpira and fried eggplant appear on the menu.',
    hours_raw: 'Dinner Mon and Wed–Fri 17:00–23:30, Sat 14:00–23:30, Sun 14:00–22:30 (last order 30 minutes before); lunch Wed–Sun 11:30–14:00 (last order 13:30) as the sister brand Kaisen Shokudo Haruko in the same premises; closed Tuesdays (open Tuesdays in December, without lunch); closing may run later (Tabelog). Groups of 10 or more by phone (Tabelog). Appetizer chosen by the guest, ¥400 (June 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, nanaco, WAON, iD, QUICPay, PayPay (Tabelog). 111 seats: 9 at the counter, 52 at tables and a 50-seat tatami room with partitions; no smoking at lunch, smoking in the tatami and horigotatsu areas at dinner; wheelchair accessible; projector and microphone (Tabelog). QR-code ordering; a free first drink for LINE sign-up (June 2026).',
    hours: { 0: MO, 2: WK, 3: WK, 4: WK, 5: SA, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nakazaki-nishi, under the JR Kyoto Line tracks — 5 min from Hankyu Umeda (Chayamachi exit) and Nakazakicho Stn exit 4',
    cuisine: 'Large seafood izakaya with fish from the market every morning, tempura and local sake with tasting sets (Tabelog) · signatures: "Ikura Bikkura Don" heaped with salmon roe to a shout; spoon-scraped tuna on the bone (limited) (Tabelog; official site) · courses with 2-hour all-you-can-drink (Tabelog, tax included): chef Gan\'s omakase ¥6,000 for returning guests; party course ¥5,000; daytime party ¥3,500 (11:00–15:00) · lunch as Kaisen Shokudo Haruko: thick-cut sashimi set of four fish ¥950 (May and August 2026); whole-block tuna "Maguro Dooon"; an all-you-can-eat tempura lunch (July 2025) · dinner in reviews: thick sashimi, kettle-cooked crab, marinated tuna ¥1,210, grilled stingray fin ¥550, shochu soda ¥480, gyoza, ara-jiru (2026) · dishes from Expo countries such as Zapiekanka, Shkmeruli and Paparazzina (August–October 2026)',
    website: WEB, gmaps: gm('海鮮居酒屋 てつたろう 梅田中崎町店'), menu_url: null,
    notes: "[Izakaya · Nakazakicho, a 111-seat seafood party house under the tracks] A huge, lively seafood izakaya under the JR tracks near Nakazakicho, built for parties of ten to a hundred, with a 50-seat tatami room and a microphone. Market fish arrives each morning: thick sashimi, tuna scraped from the bone with a spoon, a salmon-roe bowl heaped to a shout, tempura with assorted salts, and local sake by the tasting set; since the Expo it has added dishes from other countries. Party courses with drinks are about ¥5,000–6,000, and lunch, under the name Kaisen Shokudo Haruko, brings a ¥950 thick-sashimi set. Smoking at dinner in the tatami area; closed Tuesdays.",
    chef_bio: { chef_name: null, roles: ['Head chef Gan (Tabelog)', 'The company president, who poses for photos with guests (March 2026)'], origin: null, background: 'Shop text (Tabelog): Umeda\'s largest seafood banquet izakaya, 111 seats; fresh seafood and local sake; groups of 10 or more; a room for up to 50 with large monitors and microphones; lunch run as the sister brand Kaisen Shokudo Haruko with the same ingredients and chefs; the omakase course is left to head chef Gan. The official site lists this Umeda-Nakazakicho shop.', philosophy: null, specialty: 'Thick sashimi; Ikura Bikkura Don.',
      anecdotes: [
        { text: '"There was a menu item that allowed us to take a photo with the president" — March 2026.', source: R + 'B525076703/' },
        { text: '"I went for the Thick Sliced Sashimi Assorted Platter Set Meal… JPY 950." — May 2026, at the lunch shop Haruko.', source: R + 'B528240779/' },
        { text: '"At Tetsutarou, I tried Paparazzina, Zapiekanka, and Tuna Shkmeruli." — October 2026.', source: R + 'B537800330/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, WEB, R + 'B525076703/', R + 'B526562940/', R + 'B528240779/', R + 'B530191475/', R + 'B530309354/', R + 'B532476507/', R + 'B532950012/', R + 'B534327101/', R + 'B537036877/', R + 'B537800330/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering; group-friendly (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区中崎西3-3-15 JR高架下36号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区中崎西三丁目3番15号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534327101/'],
    price_note: 'Courses from the Tabelog listing (tax included); lunch from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chef Gan\'s omakase course with 2-hour all-you-can-drink (returning guests)', '¥6,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'omakase'),
      it('', '', 'Party course, 9 dishes, with 2-hour all-you-can-drink', '¥5,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'party_course'),
      it('', '', 'Daytime party course with 2-hour all-you-can-drink (11:00–15:00)', '¥3,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'day_party'),
      it('', '', 'Lunch: thick-cut sashimi set, four fish', '¥950', 'Lunch', 'ask', 'no', 'May and August 2026 reviews.', 'sashimi_lunch'),
    ] }, {
    cuisine: '毎朝市場から仕入れる魚の大型の海鮮居酒屋、天ぷら、利き酒セットのある地酒 (食べログ)・名物: 掛け声とともにいくらを盛る「Ikura Bikkura Don」、数量限定の骨付きまぐろをスプーンで (食べログ、公式サイト)・2時間飲み放題つきのコース (食べログ、税込): 料理長 Gan のおまかせ6,000円 (再来店の客向け)、宴会コース5,000円、昼宴会3,500円 (11〜15時)・昼は Kaisen Shokudo Haruko として: 厚切りの刺身4種の定食950円 (2026年5月と8月)、まぐろのかたまりの「Maguro Dooon」、天ぷら食べ放題のランチ (2025年7月)・夜の口コミ: 厚切りの刺身、カニの釜ゆで、まぐろの漬け1,210円、エイヒレ550円、焼酎ソーダ480円、餃子、あら汁 (2026年)・万博の国の料理 Zapiekanka、Shkmeruli、Paparazzina (2026年8〜10月)',
    neighborhood: '中崎西、JR京都線の高架下。阪急梅田駅茶屋町口と中崎町駅4番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。天ぷら (昼には食べ放題の日も)、まぐろカツ、餃子、だしの料理がある。',
    vegan_detail: 'ヴィーガンではありません。海鮮居酒屋で、100円のれんこんのきんぴらや揚げなすもある。',
    notes: '[居酒屋・中崎町、高架下の111席の海鮮の宴会場] 中崎町の近く、JR の高架下にある大きくてにぎやかな海鮮居酒屋で、10人から100人を超える宴会向け、50席の座敷とマイクもある。毎朝の市場の魚で、厚切りの刺身、骨からスプーンでこそげるまぐろ、掛け声で盛るいくら丼、塩で食べる天ぷら、利き酒セットの地酒。万博のあとは外国の料理も加わった。飲み放題つきの宴会コースは5,000〜6,000円ほどで、昼は Kaisen Shokudo Haruko の名前で厚切り刺身の定食950円。夜は座敷で喫煙可、火曜休み。',
  });
}

// ================================================================ 梅田 海鮮居酒屋いこう
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27138433/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:00']), FS = day(['17:00', '24:00']);
  put({
    id: 'osaka_seafood_izakaya_ikou', name: '梅田 海鮮居酒屋いこう (Umeda Seafood Izakaya Ikou)', category: 'OMNI',
    lat: 34.70376, lng: 135.504543, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi and simmered fish with soy-based seasoning, tempura, and dashi-cooked kamameshi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya.',
    hours_raw: 'Sun–Thu, holidays and days after holidays 17:00–23:00 (food last order 22:00); Fri, Sat and days before holidays 17:00–24:00 (food last order 23:00) (Tabelog). No closing days; renewal opening January 1, 2026; no takeout (April 2026). Appetizer ¥500, not with courses; private room ¥2,200 per group (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay; no e-money (Tabelog). 16 seats: 10 at the counter and a private room for 4–6 (from 3 people); heated tobacco only (Tabelog). Run by one or two staff (July and October 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: FS, 5: FS, 6: WD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Doyama, 那由多ビル 2F, on the road south of Kitano Hospital — 3 min from Nakazakicho Stn exit 4',
    cuisine: 'Seafood izakaya: seasonal sashimi, today\'s simmered fish, sushi, tempura and seasonal kamameshi; over 70 sakes (Tabelog) · drinks plans (Tabelog, tax included): standard all-you-can-drink of 50 drinks, 120 min ¥2,200; Manzoku all-you-can-drink of 140 incl. Maou and Hyakunen no Kodoku ¥3,300; Shun course of 3 sashimi, simmered fish and kamameshi with drinks ¥5,500 · popular: five-kind sashimi platter, monkfish liver in Nara pickles, seafood yukke, seasonal kamameshi (April 2026) · grilled crab miso with crab meat, oysters with ponzu, firefly squid with asparagus, bamboo-shoot and sakura-shrimp clay-pot rice (April 2026) · squid shiokara with cream cheese, kanpachi with sesame sauce, hokke, grilled squid, engawa (July 2026); anago and corn clay-pot rice, grilled collar, seared mentaiko (August 2026); sanma (September 2026)',
    website: null, gmaps: gm('梅田 海鮮居酒屋いこう 堂山町'), menu_url: null,
    notes: "[Izakaya · Umeda, Doyama, a quiet seafood counter] A sixteen-seat seafood izakaya up a flight of stairs at the edge of Doyama, near Nakazakicho, reopened in January 2026, with a ten-seat counter and a private room. The cooking is careful Japanese: five-kind sashimi platters, today's simmered fish, monkfish liver in Nara pickles, grilled crab miso, and a seasonal clay-pot rice to finish, with over seventy sakes. Drink plans run ¥2,200–3,300, or ¥5,500 with a set course. Diners praise the calm, the freshness and the speed of a one- or two-person team. Heated tobacco only; open every day.",
    chef_bio: { chef_name: null, roles: ['Cook and drinks staff (unnamed; one or two people, 2026)'], origin: null, background: 'Shop text (Tabelog): an adult hideaway on the second floor of a building away from the bustle of Umeda and Nakazakicho; seasonal seafood; fresh sashimi, today\'s simmered dish, sushi, tempura and seasonal kamameshi; courses with all-you-can-drink from ¥5,500; counter seating and a fully private room. Renewal opening January 1, 2026 (April 2026 review).', philosophy: null, specialty: 'Sashimi platter; seasonal kamameshi.',
      anecdotes: [
        { text: '"The crab miso is truly a thief of sake!" — April 2026.', source: R + 'B525937499/' },
        { text: '"The restaurant operates with two staff members: one for drinks and one for cooking" — July 2026.', source: R + 'B531597946/' },
        { text: '"Although the restaurant was operating with just one staff member, the food and drinks were served promptly." — October 2026.', source: R + 'B537983042/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B525937499/', R + 'B526708203/', R + 'B526789945/', R + 'B528536006/', R + 'B531597946/', R + 'B532093474/', R + 'B532469226/', R + 'B534448578/', R + 'B536169587/', R + 'B537983042/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Dishes explained at the counter (April 2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂山町11-14 那由多ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reopened January 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂山町11番14号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Plans from the Tabelog listing (tax included); ¥500 appetizer outside courses.', last_checked: TODAY, items: [
      it('', '', 'Shun course: 3 sashimi, simmered fish, kamameshi, 120-min all-you-can-drink', '¥5,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'shun_course'),
      it('', '', 'Standard all-you-can-drink, 50 drinks, 120 min', '¥2,200', 'Drinks', '', '', 'Tabelog listing.', 'ayce_standard'),
      it('', '', 'Manzoku all-you-can-drink, 140 drinks, 120 min', '¥3,300', 'Drinks', '', '', 'Tabelog listing.', 'ayce_manzoku'),
    ] }, {
    cuisine: '海鮮居酒屋: 旬の刺身、本日の煮付け、寿司、天ぷら、季節の釜飯、日本酒70種以上 (食べログ)・飲み放題 (食べログ、税込): 50種の120分2,200円、Maou や Hyakunen no Kodoku を含む140種の Manzoku 飲み放題3,300円、刺身3種と煮付けと釜飯の飲み放題つきの旬コース5,500円・人気: 刺身5種盛り、あん肝の奈良漬け、海鮮ユッケ、季節の釜飯 (2026年4月)・カニ味噌の甲羅焼きとカニの身、生牡蠣のポン酢、ホタルイカとアスパラの炒め物、たけのこと桜海老の土鍋ご飯 (2026年4月)・イカの塩辛のクリームチーズ、カンパチのごまだれ、ほっけ、イカ焼き、えんがわ (2026年7月)、穴子ととうもろこしの土鍋ご飯、カマ焼き、炙り明太子 (2026年8月)、さんま (2026年9月)',
    neighborhood: '堂山、Kitano Hospital の南の通りの那由多ビル 2階。中崎町駅4番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。醤油の味つけの刺身と煮付け、天ぷら、だしで炊く釜飯。',
    vegan_detail: 'ヴィーガンではありません。海鮮居酒屋。',
    notes: '[居酒屋・梅田堂山、静かな海鮮のカウンター] 中崎町に近い堂山のはずれ、階段を上がった2階にある16席の海鮮居酒屋で、2026年1月にリニューアルオープン。カウンター10席と個室がある。料理はていねいな和食で、刺身5種盛り、本日の煮付け、あん肝の奈良漬け、カニ味噌の甲羅焼き、締めは季節の土鍋ご飯、日本酒は70種以上。飲み放題は2,200〜3,300円、コースつきで5,500円。落ち着いた雰囲気と鮮度、1人か2人で回す手際の良さが好評。加熱式たばこのみ、無休。',
  });
}

// ================================================================ yoshi-carbona
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27153539/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:00', '14:00']), LD = day(['11:00', '14:00'], ['17:00', '23:00']), D = day(['17:00', '23:00']);
  put({
    id: 'osaka_yoshi_carbona', name: 'yoshi-carbona~ヨシカルボナ~ (yoshi-carbona~Yoshi Karubona~)', category: 'OMNI',
    lat: 34.696398, lng: 135.500449, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the menu centres on pasta and oven-baked pizza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: carbonara with egg, cheese and pancetta; cured meats and cheese.',
    hours_raw: 'Lunch Mon–Fri 11:00–14:00 (last order 13:30); dinner Tue–Sat and holidays 17:00–23:00 (food last order 21:30, drinks 22:30); closed Sundays (Tabelog). Bookings for dinner only; dinner is reservation only (Tabelog; October 2026). Opened August 2025 (October 2026 review). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay, PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay (Tabelog). Seats: 9 on Tabelog, 12 in the shop text, about 10 per a diner (5 counter, a booth for 4); private hire from 2; non-smoking (Tabelog; 2026). On a mezzanine up a few stairs; karaoke available (2026).',
    hours: { 0: L, 1: LD, 2: LD, 3: LD, 4: LD, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi side of 堂島, 谷安フォルテビル 1F (a mezzanine), near Midosuji — 5 min from Oebashi Stn, 6 min from Kitashinchi and Yodoyabashi',
    cuisine: 'Italian bar built around a Roman carbonara made without cream or milk, with miso for umami; Italian wines and beers, whisky and cocktails; house olive oil and dressings (Tabelog) · courses (Tabelog, tax included): Yoshikaru 5 dishes ¥5,900; cheese, prosciutto, pasta and dessert with Italian wine ¥6,600; five Italian beers with cheese, prosciutto and pizza ¥6,600; also ¥8,800 and ¥12,900 (October 2026) · à la carte: four appetizers ¥1,500; carbonara ¥1,800; Margherita ¥1,500 (August 2026) or ¥1,600 (October 2026), from a 450°C oven · weekly lunch pasta with salad and soup ¥990 (September 2026) · house dressing ¥990 and Shodoshima-pressed olive oil ¥2,000 to take home (October 2026)',
    website: null, gmaps: gm('yoshi-carbona 堂島'), menu_url: null,
    notes: "[Italian · Kitashinchi, a carbonara bar on a mezzanine] A hidden ten-odd-seat Italian bar on a half-floor near the Midosuji end of Kitashinchi, opened in August 2025 and named for its carbonara and, in part, its owner's name. The carbonara is Roman-style, no cream, with miso slipped in for depth; around it come cured meats with the house olive oil, a potato salad with an original dressing, Italian beers and a Margherita from a 450°C oven. Dinner is reservation-only and about ¥5,000–8,000 a head; the ¥990 weekday pasta lunch is a Kitashinchi bargain. There is karaoke too, and the room can be booked privately for meetings.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed; the "Yoshi" in the shop name comes from the owner’s name, August 2026)'], origin: null, background: 'Shop text (Tabelog): a signature carbonara in the traditional Roman style without cream or milk, with miso for umami; Italian wines, beers, whisky and cocktails; original olive oil and dressings; a cozy space for anniversaries, parties and business meetings. An August 2026 diner: "Karubona" comes from carbonara and "Yoshi" from the owner\'s name. Opened August 2025 (October 2026 review). The master makes each lunch dish to order (September 2026).', philosophy: null, specialty: 'Carbonara without cream.',
      anecdotes: [
        { text: '"Interestingly, it contains miso as a secret ingredient." — August 2026, on the carbonara.', source: R + 'B533592927/' },
        { text: '"The pizza, cooked at 450 degrees, was piping hot with a crispy yet fluffy crust" — September 2026.', source: R + 'B535875520/' },
        { text: '"What\'s interesting about this place is that you can enjoy a full meal and even sing karaoke!" — October 2026.', source: R + 'B536619267/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B533592927/', R + 'B534686355/', R + 'B534921470/', R + 'B535875520/', R + 'B536492147/', R + 'B536494987/', R + 'B536610004/', R + 'B536612161/', R + 'B536619267/', R + 'B536684727/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A friendly chef who talks through the dishes (August 2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-1-21 谷安フォルテビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; opened August 2025; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目1番21号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534686355/', R + 'B536684727/'],
    price_note: 'Courses from the Tabelog listing (tax included); à la carte from 2026 reviews; Margherita ¥1,500 (August) or ¥1,600 (October).', last_checked: TODAY, items: [
      it('', '', 'Carbonara (no cream, with miso)', '¥1,800', 'Pasta', 'no', 'no', 'August and October 2026 reviews.', 'carbonara'),
      it('', '', 'Margherita', '¥1,600', 'Pizza', 'no', 'no', 'October 2026 review; ¥1,500 in August 2026.', 'margherita'),
      it('', '', 'Assorted appetizers, 4 kinds', '¥1,500', 'Antipasti', 'ask', 'no', 'August and October 2026 reviews.', 'antipasti'),
      it('', '', 'Yoshikaru course, 5 dishes', '¥5,900', 'Course', 'no', 'no', 'Tabelog listing.', 'yoshikaru_course'),
      it('', '', 'Weekly lunch pasta with salad and soup', '¥990', 'Lunch', 'no', 'no', 'September 2026 review.', 'lunch_pasta'),
    ] }, {
    cuisine: '生クリームも牛乳も使わず味噌でうまみを足すローマ風のカルボナーラを軸にしたイタリアンのバー、イタリアのワインとビール、ウイスキー、カクテル、自家製のオリーブオイルとドレッシング (食べログ)・コース (食べログ、税込): 5品の Yoshikaru コース5,900円、チーズ、生ハム、パスタ、デザートとイタリアワインの6,600円、イタリアのビール5種とチーズ、生ハム、ピザの6,600円、ほかに8,800円と12,900円 (2026年10月)・アラカルト: 前菜4種1,500円、カルボナーラ1,800円、450℃の窯のマルゲリータ1,500円 (2026年8月) か1,600円 (2026年10月)・平日昼の週替わりパスタはサラダとスープつきで990円 (2026年9月)・持ち帰りにドレッシング990円とShodoshima で搾ったオリーブオイル2,000円 (2026年10月)',
    neighborhood: '堂島の北新地寄り、Midosuji の近くの谷安フォルテビル 1階 (中二階)。大江橋駅から徒歩5分、北新地駅と淀屋橋駅から6分',
    gf_detail: 'グルテンフリーではありません。パスタと窯焼きのピザが中心。',
    vegan_detail: 'ヴィーガンではありません。卵、チーズ、パンチェッタのカルボナーラ、生ハムとチーズ。',
    notes: '[イタリアン・北新地、中二階のカルボナーラのバー] 北新地の Midosuji 寄り、中二階にある10席ほどの隠れ家のイタリアンのバーで、2025年8月オープン。店名はカルボナーラと店主の名前から。カルボナーラは生クリームなしのローマ風で、隠し味に味噌。店のオリーブオイルをかけた生ハム、オリジナルドレッシングのポテトサラダ、イタリアのビール、450℃の窯のマルゲリータも。夜は予約制で1人5,000〜8,000円ほど、平日昼の990円のパスタは北新地では破格。カラオケもあり、打ち合わせ用に貸切もできる。',
  });
}

save();
