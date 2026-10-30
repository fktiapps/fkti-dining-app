// Osaka sweep (2-mile circle around Dotonbori), batch 219 — mom-phase clean-up: near-centre listings with 30+ reviews passed over earlier without a skip() mark.
//   - ヘミングウェイ 27001846 — skipped: closed (final party in May 2026 after 28–29 years)
//   + 心斎橋 鮨 おか崎 Shinsaibashi Sushi Okazaki (couple-run sushi shop opened 2017; chefs with 30+ years from Fukki Sushi; lunch nigiri and chirashi, omakase at night)
//   + 藤久 Fuji Kyuu (30-year-old kaiseki hideaway in an alley between Namba and Nipponbashi; a chef reviewers say trained at Kiccho, often working alone)
//   - 今屋のハンバーガー 大阪1号店 27156429 — skipped: chain (Fukuoka original cart, Tokyo Ebisu 2023, Osaka 2026, Taipei 2026)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 219);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ヘミングウェイ — closed
skip('27001846', 'ヘミングウェイ (Hemingway): closed. Two reviews dated "Visited on May, 2026": "Shinsaibashi\'s Hemingway is closing its doors after 28 years of operation. On this day, former staff members gathered for the restaurant\'s final party." (B528848816) and "Thank you for 29 years of service. … A truly unforgettable establishment." (B528814168). The Tabelog listing (read 2026-10-30) carries no closed badge yet; the shop site www.bar-hemingway.com did not respond on 2026-10-30. Also a Spanish bar whose food is tapas (ham, olives, garlic soup); closed');

// ================================================================ 心斎橋 鮨 おか崎
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27102316/'; const R = TB + 'dtlrvwlst/';
  const MENU = TB + 'dtlmenu/', LUNCH = TB + 'dtlmenu/lunch/';
  const L = ['11:30', '14:00'];
  const W = day(L, ['17:00', '19:00']); const SU = day(L);
  put({
    id: 'osaka_sushi_okazaki_shinsaibashi', name: '心斎橋 鮨 おか崎 (Shinsaibashi Sushi Okazaki)', category: 'OMNI',
    lat: 34.674803, lng: 135.50094, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; sushi with soy sauce, conger eel grilled with a sauce, chirashi with shiitake and conger eel, and takeout rolls with dried gourd and shiitake.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi and chirashi of fish and shellfish, with chawanmushi and soup in every set.',
    hours_raw: 'Mon, Tue, Thu, Fri, Sat 11:30–14:00 (last order 14:00) and 17:00–19:00 (19:00 is the last seating for the evening; no closing time given); Sun 11:30–14:00 only; closed Wednesday, plus two longer breaks a month on dates that are not fixed; open until sold out (Tabelog). Reservations accepted (Tabelog); lunch is often fully booked (March 2024 review); same-day booking worked in December 2021. Cards (VISA, Master, JCB, AMEX, Diners), e-money and PayPay (Tabelog). 20 seats: 6 at the counter, 16 at tables; private hire possible; non-smoking; wheelchair accessible (Tabelog). Opened 7 December 2017 (Tabelog).',
    hours: { 0: W, 1: W, 3: W, 4: W, 5: W, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashisuji 1-10-12, トレスビル 3F, a mixed-use building — 2 min on foot from Shinsaibashi Station (Midosuji Line), near Daimaru and PARCO',
    cuisine: 'Sushi (6 counter seats, 16 at tables) · lunch, 11:30–14:00 (Tabelog menu, updated September 2026, tax included): Jō (premium) nigiri, 8 pieces with a thin roll, chawanmushi and soup ¥3,850; special nigiri, 10 pieces ¥5,500; chirashi sushi (kombu, shiitake, conger eel, boiled octopus, egg, shrimp) ¥3,300; conger-eel chirashi ¥3,300; deluxe chirashi ¥4,950 · courses: Sakura (2 starters, sashimi, 8 nigiri, a hand roll, red miso or clear soup) ¥16,500; Hana (4 starters, sashimi, 10 nigiri, a hand roll, soup) ¥22,000 · omakase and à la carte at the counter: aged bluefin otoro, Yura sea urchin from Awaji, kohada, firefly squid, homemade karasumi, grilled shirako, kuruma shrimp, conger eel grilled with sauce, tamago (reviews 2024–2026) · to take home: nori rolls ¥1,728, premium rolls ¥4,104, chirashi ¥3,240, conger-eel roll ¥3,780, pressed sushi of conger eel, mackerel, horse mackerel or sea bream ¥2,484 · sake, shochu, wine',
    website: null, gmaps: gm('心斎橋 鮨 おか崎'), menu_url: MENU,
    notes: "[Sushi · Shinsaibashi, a couple-run sushi room a minute from the station] A sushi shop on the third floor of an older building on Shinsaibashi-suji, bright and spacious inside, with a six-seat counter and tables for sixteen. The shop says its chefs bring more than 30 years at Osaka's Fukki Sushi; a March 2024 diner found it run by a couple — the owner, the owner's wife, a long-time chef friend and a part-timer. Lunch is the easy way in and is often fully booked: nigiri sets from ¥3,850 and chirashi from ¥3,300, each with chawanmushi and soup, and warm mozuku to start (2024–2025 reviews). At the counter the omakase runs to aged bluefin otoro ('I could easily eat 20 pieces'), Yura sea urchin from Awaji, kohada, conger eel grilled with sauce and the tamago — the last two the shop's specialties, per an April 2026 diner who ordered the Yura uni so many times that the lunch bill 'made my head spin'. A few lunch diners found it pricey for what came.",
    chef_bio: { chef_name: null, roles: ['Owner (with the owner\'s wife, per a March 2024 review)'], origin: null, background: 'Opened 7 December 2017 (Tabelog). The shop text on Tabelog says: "Freshness of the ingredients is guaranteed, with over 30 years of experience from Osaka Fukki Sushi\'s skilled chefs." A March 2024 review: "The restaurant is run by a couple, and it was operated by four people including the owner, [the owner\'s] wife, a long-time friend who is a chef, and a part-timer." Reviewers since 2023 call it long-established.', philosophy: 'Reasonably priced sushi near the station at lunch; courses for business dinners and parties, and à la carte at the counter (Tabelog shop text).', specialty: 'Aged otoro; Yura sea urchin; conger eel grilled with sauce; tamago.',
      anecdotes: [
        { text: '"What really shocked me was the aged fatty tuna (otoro), which was perfectly firm with no excess moisture or fat. I could easily eat 20 pieces of that quality otoro." — March 2024, omakase.', source: R + 'B482019944/' },
        { text: '"I got carried away by how delicious the Yura uni was and ended up ordering it multiple times, resulting in a bill that made my head spin, even for lunch." — April 2026; on a May 2026 return the same diner ordered the ¥10,000 "Kiwami" lunch and spent about ¥20,000 less.', source: R + 'B526435277/' },
        { text: '"It was the best chirashi sushi I\'ve had recently." — May 2025, lunch chirashi with anago, sea bream and sea urchin, sea-bream ushio soup and chawanmushi.', source: R + 'B506579565/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 心斎橋 鮨 おか崎、寿司、大阪市中央区心斎橋筋1-10-12 トレスビル 3F、心斎橋駅から徒歩2分、月・火・木・金・土11:30〜14:00と17:00〜19:00 (夜は19:00最終入店)、日曜は昼のみ、水曜休み、月に2回の不定の連休、売り切れまで、予約可、カード・電子マネー・PayPay 可、20席 (カウンター6、テーブル16)、貸切可、禁煙、車椅子可、オープン日2017年12月7日。メニュー (2026年9月更新、税込): 上にぎり3850円、特上にぎり5500円、ちらし寿司3300円、穴子ちらし3300円、特上ちらし4950円、Sakura のコース16500円、Hana のコース22000円、持ち帰りの巻きずし、ちらし、穴子の巻き、押し寿司 (穴子、さば、あじ、鯛)。店の紹介: Fukki Sushi で30年以上の経験を持つ職人。口コミ (2021年12月〜2026年5月): 夫婦で営む店、店主と奥さん、料理人の古い友人、アルバイトの4人 (2024年3月)、明るく広い店内、昼はいつも満席に近い、温かいもずく、茶碗蒸し、熟成の大トロ、Yura のうに、こはだ、ホタルイカ、自家製のからすみ、白子焼き、車えび、タレで焼いた穴子と玉子が名物、昼に少し高いと感じた人も。',
      confidence: 'medium', sources: [TB, MENU, LUNCH, R + 'B444126452/', R + 'B461723171/', R + 'B482019944/', R + 'B482614372/', R + 'B495822176/', R + 'B506579565/', R + 'B523803898/', R + 'B526435277/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book lunch ahead; it is often full. Last evening seating is 19:00; closed Wednesday.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_approx: 'block', address_ja: '大阪府大阪市中央区心斎橋筋1-10-12 トレスビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing current, menu updated 23 September 2026; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目10番12号 (go) 10m. Same building as ALI'S KITCHEN (osaka_alis_kitchen, address_ja "大阪府大阪市中央区心斎橋筋1-10-12 トレスビル B1F"), whose Tabelog point is about 1 m away, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, LUNCH, R + 'B523803898/', R + 'B526435277/'],
    price_note: 'Prices from the Tabelog menu (updated 23 September 2026, tax included); the shop notes that rising costs are changing its menu.', last_checked: TODAY, items: [
      it('', '', 'Jō (premium) nigiri: 8 pieces, thin roll, chawanmushi, soup (lunch)', '¥3,850', 'Lunch set', 'ask', 'no', 'Tabelog menu; March 2026 review.', 'jo_nigiri'),
      it('', '', 'Special nigiri: 10 pieces, chawanmushi, soup (lunch)', '¥5,500', 'Lunch set', 'ask', 'no', 'Tabelog menu; ¥4,400 with two extra pieces in December 2021.', 'tokujo_nigiri'),
      it('', '', 'Chirashi sushi with chawanmushi and soup (lunch)', '¥3,300', 'Lunch set', 'ask', 'no', 'Tabelog menu.', 'chirashi'),
      it('', '', 'Conger-eel chirashi (lunch)', '¥3,300', 'Lunch set', 'ask', 'no', 'Tabelog menu.', 'anago_chirashi'),
      it('', '', 'Deluxe chirashi (lunch)', '¥4,950', 'Lunch set', 'ask', 'no', 'Tabelog menu.', 'tokujo_chirashi'),
      it('', '', 'Sakura course (2 starters, sashimi, 8 nigiri, hand roll, soup)', '¥16,500', 'Course', 'ask', 'no', 'Tabelog menu.', 'sakura'),
      it('', '', 'Hana course (4 starters, sashimi, 10 nigiri, hand roll, soup)', '¥22,000', 'Course', 'ask', 'no', 'Tabelog menu.', 'hana'),
      it('', '', 'Pressed sushi to take home (conger eel, mackerel, horse mackerel or sea bream)', '¥2,484', 'Takeout', 'ask', 'no', 'Tabelog menu.', 'oshizushi'),
    ] }, {
    cuisine: 'すし (カウンター6席、テーブル16席)・昼11:30〜14:00 (食べログのメニュー、2026年9月更新、税込): 上にぎり8貫と細巻き、茶碗蒸し、お椀3850円、特上にぎり10貫5500円、ちらし寿司 (昆布、しいたけ、穴子、ゆでだこ、玉子、えび) 3300円、穴子ちらし3300円、特上ちらし4950円・コース: Sakura (前菜2品、刺身、握り8貫、手巻き、赤だしかお吸い物) 16500円、Hana (前菜4品、刺身、握り10貫、手巻き、お椀) 22000円・カウンターのおまかせとお好み: 熟成の本まぐろの大トロ、Awaji の Yura のうに、こはだ、ホタルイカ、自家製のからすみ、白子焼き、車えび、タレで焼いた穴子、玉子 (2024〜2026年の口コミ)・持ち帰り: 巻きずし1728円、上巻き4104円、ちらし3240円、穴子の巻き3780円、押し寿司 (穴子、さば、あじ、鯛) 2484円・日本酒、焼酎、ワイン',
    neighborhood: '心斎橋筋1-10-12 トレスビル 3F。心斎橋駅 (御堂筋線) から徒歩2分、大丸とパルコの近く',
    gf_detail: '要確認。グルテンの情報なし。すしと醤油、タレで焼いた穴子、しいたけと穴子のちらし寿司、かんぴょうとしいたけの持ち帰りの巻きずし。',
    vegan_detail: 'ヴィーガンではありません。魚介のすしとちらしで、どのセットにも茶碗蒸しとお椀が付きます。',
    notes: '[すし・心斎橋、駅から1分の夫婦で営むすしの店] 心斎橋筋の古いビルの3階にある、明るく広いすしの店で、カウンター6席とテーブル16席。店によると職人は大阪の Fukki Sushi で30年以上の経験があり、2024年3月の口コミでは夫婦で営み、店主と奥さん、料理人の古い友人、アルバイトの4人だったという。気軽に入れるのは昼で、満席のことも多い。にぎりは3850円から、ちらしは3300円からで、どれも茶碗蒸しとお椀付き、最初に温かいもずくが出る (2024〜2025年の口コミ)。カウンターのおまかせでは熟成の本まぐろの大トロ (「20貫でも食べられる」)、Awaji の Yura のうに、こはだ、タレで焼いた穴子、玉子。穴子と玉子は店の名物で、2026年4月にはYura のうにを何度も頼んで昼なのに目が回るような会計になった人も。昼は値段のわりに少し高いと感じた人もいる。',
  });
}

// ================================================================ 藤久
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27000410/'; const R = TB + 'dtlrvwlst/';
  const MENU = TB + 'dtlmenu/', COURSE = TB + 'party/';
  const H = day(['11:30', '14:00'], ['17:30', '21:00']);
  put({
    id: 'osaka_fuji_kyuu_nipponbashi', name: '藤久 (Fuji Kyuu)', category: 'OMNI',
    lat: 34.664036, lng: 135.505802, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; courses and à la carte include tempura and other fried dishes, soy-grilled fish and simmered dishes, and the shop will adapt dishes to what is in stock.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki courses of fish, crab, shamo chicken and game, with dashi-based soups and simmered dishes.',
    hours_raw: 'Daily 11:30–14:00 (last order 13:30) and 17:30–21:00 (last order 20:00); closing days not fixed (Tabelog). Reservations accepted; seat requests cannot be guaranteed (Tabelog). The Tabelog reservation notes (machine-translated) give a lunch minimum spend of ¥20,000 and a dinner minimum of ¥30,000 for table seating; the menu page (updated November 2024) says private rooms are for bookings over ¥20,000, others sit at the counter, and lunch bookings need at least ¥10,000 — neither says whether per person or per group, so ask when booking. Children only when the whole shop is reserved (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 14 seats: a counter on the ground floor, tatami and a table room upstairs for up to 12; private hire possible; non-smoking (Tabelog). The chef often works alone, so dishes can come slowly (2018 and 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nipponbashi 2-7-28, in a narrow alley between Namba and Nipponbashi (Ura Namba); white wooden lattice at the door — 3 min from Nipponbashi Stn (Sennichimae Line)',
    cuisine: 'Kaiseki and à la carte Japanese cooking with seasonal fish (14 seats) · omakase courses (Tabelog course page, tax included): lunch only ¥4,180; ¥6,600; ¥9,900; ¥13,200 · examples: sea-bream soup, tuna, flounder and swordtip-squid sashimi, teriyaki Spanish mackerel, simmered winter melon, burdock and pumpkin, mushroom rice (¥6,600 course, September 2026); sea-urchin somen, Ajimaimo from Nara, Seiko crab with male-crab legs, a pressed sushi with more fish than rice (top course, November 2025); certified Matsuba crab, sesame tofu, saba sushi, soy-grilled shamo (November 2025); a shamo hot pot (lunch course, June 2025) · à la carte by season (menu page, November 2024): fugu and tiger puffer, tuna sashimi and tuna shabu-shabu, yellowtail, Matsuba and Seko crab, shiroguchi, sashimi platters, assorted tempura, ayu, oysters, cod milt, shamo chicken, whale, aokubi duck, wild boar, beef, horse meat, pork shabu-shabu · charcoal-grilled eel ¥10,000 (June 2025) · seasonal rice to finish (sea bream, bamboo shoot), leftovers wrapped to take home · about 10 sakes, wine, champagne',
    website: null, gmaps: gm('藤久 日本橋 大阪'), menu_url: COURSE,
    notes: "[Kaiseki · Nipponbashi, a 30-year-old alley hideaway with a chef who trained at Kiccho] A small Japanese restaurant behind a white wooden lattice in a narrow alley between Namba and Nipponbashi, in business for about 30 years: a counter downstairs, tatami and a table room upstairs. Reviewers say the quiet chef trained at Kiccho (two name it Ajikiccho) and, as often as not, cooks and serves alone — one September 2026 diner reckons that is how a full kaiseki course can cost ¥6,600. Courses run from a ¥4,180 lunch to ¥13,200; regulars order à la carte from whatever the season brings (fugu, Matsuba crab, ayu grilled at the table, wild boar, even bear meat in March 2025), and the kitchen will cook something off the menu if it has the ingredients. Rice comes at the end in a pot, and what you can't finish goes home with you: wrapped sea-bream rice in February 2026, bamboo-shoot rice made into rice balls for each guest in April 2026. A visitor from Minato Ward who has kept coming back since 2017 calls it a must-visit for Japanese food in Kansai.",
    chef_bio: { chef_name: null, roles: ['Owner-chef'], origin: null, background: 'Reviewers: "run by a chef who trained at Yoshikichi" (November 2025); "the chef has trained for many years at Ajikichou" (March 2025); "the chef here is from Kiccho" (December 2024, per the diner\'s companion); "The owner is from \'Ajikiccho\' in Osaka and seems to run the place with [the owner\'s] wife, while a young part-time staff member handles the floor" (June 2025); "Kaiseki cuisine offered at a low price by a chef from Kiccho" (September 2026). In business for about 30 years (Tabelog shop text; June 2025 review). "Typically, the owner manages everything alone" (April 2018); "The chef operates the restaurant alone" (September 2026); in July 2017 a server and the head chef.', philosophy: 'Authentic Japanese cooking with seasonal ingredients delivered directly from the source, attention to detail from presentation to delicate flavours, and around 10 sakes from rare brands to seasonal ones (Tabelog shop text).', specialty: 'Kaiseki courses; seasonal à la carte (crab, fugu, ayu, game); pot-cooked rice.',
      anecdotes: [
        { text: '"Even if a dish isn\'t on the menu, they are flexible and will prepare it in a recommended way if the ingredients are available, which is truly impressive." — March 2025, à la carte: sashimi, tempura, bear meat, oyster tempura, oyakodon.', source: R + 'B497727425/' },
        { text: '"Since we couldn\'t finish it all, they kindly made the leftovers into rice balls for each of us, and my family praised them when I brought them home." — April 2026, bamboo-shoot rice.', source: R + 'B527564699/' },
        { text: '"The chef operates the restaurant alone, which means the food may take a little longer to be served, but I believe this style allows [the chef] to offer such a course at this price." — September 2026, ¥6,600 omakase.', source: R + 'B536436484/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 藤久 (ふじきゅう)、日本料理、大阪市中央区日本橋2-7-28、地下鉄千日前線日本橋駅から徒歩3分、毎日11:30〜14:00 (L.O. 13:30)・17:30〜21:00 (L.O. 20:00)、不定休、予約可 (席の指定はできない)、昼と夜の最低料金の案内 (テーブル席)、子供は貸切のときのみ、カード可、電子マネー・QR不可、14席 (1階カウンター、2階は座敷とテーブル12人まで)、貸切可、禁煙。店の紹介: 日本橋で30年、産地直送の旬の食材、盛り付けから繊細な味まで、日本酒は約10種。コース: 昼だけのおまかせ4180円、おまかせ6600円、9900円、13200円。一品 (2024年11月更新): ふぐ、まぐろの刺身としゃぶしゃぶ、ぶり、Matsuba crab と Seko crab、shiroguchi、刺身の盛り合わせ、天ぷら、鮎、牡蠣、白子、軍鶏、鯨、青首鴨、猪肉、牛、馬肉、豚しゃぶ。口コミ (2017年7月〜2026年9月): 狭い路地の白い格子戸、2025年11月の口コミでは入口と1階カウンターが改装済み、Kiccho (Ajikiccho という声も) で修業した物静かな大将、ひとりで切り盛りすることが多く料理が出るのに時間がかかることも、2025年6月は奥さんらしき人とアルバイト、ごま豆腐、蟹、軍鶏の鍋、うにそうめん、Ajimaimo、Seko crab、炭火の鰻10000円、熊肉、牡蠣の天ぷら、親子丼、tairagi の刺身、鯛めしや筍ご飯の残りを持ち帰りに包んでくれる。',
      confidence: 'medium', sources: [TB, MENU, COURSE, R + 'B282311472/', R + 'B497727425/', R + 'B509728212/', R + 'B509867536/', R + 'B519855245/', R + 'B522446538/', R + 'B527564699/', R + 'B536436484/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone (06-6632-4037); ask about the minimum spend when booking; the chef often works alone, so allow time.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋2-7-28',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing current; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋二丁目7番28号 (go) 9m. 酒肴哲 (osaka_sakana_tetsu_nipponbashi, address_ja "大阪府大阪市中央区日本橋2-7-27") is next door, about 19 m away on its own Tabelog point, so nothing stacks; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [COURSE, R + 'B509728212/', R + 'B536436484/', R + 'B509867536/'],
    price_note: 'Course prices from the Tabelog course page (tax included, read 2026-10-30); review prices dated June 2025 to September 2026. À la carte prices are not listed.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (lunch only)', '¥4,180', 'Course', 'ask', 'no', 'Tabelog course page; June 2025 review (with a shamo hot pot). A February 2026 diner paid ¥4,500 for the lunch course.', 'lunch_omakase'),
      it('', '', 'Omakase course', '¥6,600', 'Course', 'ask', 'no', 'Tabelog course page; September 2026 review.', 'omakase_6600'),
      it('', '', 'Omakase course', '¥9,900', 'Course', 'ask', 'no', 'Tabelog course page.', 'omakase_9900'),
      it('', '', 'Omakase course (special seasonal ingredients)', '¥13,200', 'Course', 'ask', 'no', 'Tabelog course page.', 'omakase_13200'),
      it('', '', 'Charcoal-grilled eel', '¥10,000', 'À la carte', 'ask', 'no', 'June 2025.', 'unagi'),
      it('', '', 'Assorted tempura', '', 'À la carte', 'no', 'no', 'Tabelog menu page (November 2024); April 2018 review.', 'tempura'),
    ] }, {
    cuisine: '旬の魚の懐石と一品の日本料理 (14席)・おまかせのコース (食べログのコースページ、税込): 昼だけ4180円、6600円、9900円、13200円・例: 鯛のお椀、まぐろ、ひらめ、剣先いかの刺身、さわらの照り焼き、冬瓜、ごぼう、かぼちゃの炊き合わせ、きのこご飯 (6600円のコース、2026年9月)、うにそうめん、Nara の Ajimaimo、Seko crab と雄の蟹の脚、魚の多い押し寿司 (いちばん上のコース、2025年11月)、証明付きの Matsuba crab、ごま豆腐、さばずし、軍鶏の醤油焼き (2025年11月)、軍鶏の鍋 (昼のコース、2025年6月)・季節の一品 (メニュー、2024年11月): ふぐ、とらふぐ、まぐろの刺身としゃぶしゃぶ、ぶり、Matsuba crab と Seko crab、shiroguchi、刺身の盛り合わせ、天ぷらの盛り合わせ、鮎、牡蠣、白子、軍鶏、鯨、青首鴨、猪肉、牛、馬肉、豚しゃぶ・炭火の鰻10000円 (2025年6月)・最後に季節のご飯 (鯛めし、筍ご飯)、残りは包んで持ち帰りに・日本酒約10種、ワイン、シャンパン',
    neighborhood: '日本橋2-7-28、なんばと日本橋のあいだの狭い路地 (Ura Namba)、入口は白い木の格子。千日前線日本橋駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。コースにも一品にも天ぷらなどの揚げもの、醤油で焼いた魚、煮物があり、材料があれば料理を変えてくれる店です。',
    vegan_detail: 'ヴィーガンではありません。魚、蟹、軍鶏、ジビエの懐石で、お椀や煮物はだしを使います。',
    notes: '[懐石・日本橋、Kiccho で修業した大将の30年続く路地の隠れ家] なんばと日本橋のあいだの狭い路地、白い木の格子の奥にある小さな日本料理の店で、30年ほど続く。1階はカウンター、2階は座敷とテーブル。口コミによると物静かな大将は Kiccho (Ajikiccho という声も) で修業し、ひとりで料理も接客もすることが多い。2026年9月の客は、だから6600円で懐石のコースが食べられるのだろうという。コースは昼の4180円から13200円まで。常連は季節の一品を頼む (ふぐ、Matsuba crab、席で焼く鮎、猪肉、2025年3月には熊肉も)。材料があればメニューにない料理も作ってくれる。最後のご飯は土鍋で出て、食べきれない分は持ち帰れる。2026年2月は鯛めしを包んでもらい、2026年4月は筍ご飯をひとりずつおにぎりにしてもらった。2017年から通い続ける Minato Ward の客は、関西で日本料理を食べるならここだという。',
  });
}

// ================================================================ 今屋のハンバーガー 大阪1号店 — chain
skip('27156429', '今屋のハンバーガー 大阪1号店 (Imaya no Hamburger Osaka Ichigoten): branch of an expanding brand. The shop site imaya-hamburger.com (read 2026-10-30) says the brand began with one mobile van in 西公園, 福岡市中央区, in the late 1970s and that this is the "大阪1号店"; Time Out Tokyo (2023-05-30): "福岡の「西公園」で長年愛されている「今屋のハンバーガー」が、東京に初出店。" (今屋のハンバーガー東京 恵比寿本店, opened 2023-03-28); NOWnews (2026-08-27): "今屋漢堡首家海外分店「今屋のハンバーガー 台灣」座落於台北松山區" (opening 10 September 2026). Osaka opened 2026-05-19 (Tabelog), so three new shops in Tokyo, Osaka and Taipei since 2023; chain');

save();
