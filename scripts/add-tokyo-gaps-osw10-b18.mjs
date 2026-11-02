// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 18.
//   + 四ッ谷 みね村 Yotsuya Minemura (6-seat Arakicho kappo counter, chef Shohei Minemura; courses end with ju-wari soba)
//   + 日本料理 しうが Nihon Ryori Shiuga (19-seat basement Japanese restaurant with a new take on washoku; chef-owner 渡邊 雅之)
//   + 寿司長 Sushi Cho (16-seat Arakicho sushi counter; ¥800 chirashi and ¥900 tekka-don at lunch)
//   + 松庵 Shoan (14-seat soba kaiseki run by a couple; in-house stone-milled heirloom buckwheat)
//   Chain check. All four are single listings; no other branch found. No skips: the first four non-data entries.
//   None is in data/tokyo.json (grep by name, Tabelog id and address; 小松庵 in Ginza is a different shop).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 四ッ谷 みね村
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13289509/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://yotsuya-minemura.com/';
  put({
    id: 'tokyo_yotsuya_minemura_arakicho', name: '四ッ谷 みね村 (Yotsuya Minemura)', category: 'MOM_AND_POP',
    lat: 35.688628, lng: 139.722964, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. The closing soba is ju-wari (100% buckwheat; Tabelog, reviews), but its dipping sauce and many course dishes use soy sauce, and some are fried; nothing gluten-free is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood-led kappo course built on dashi.',
    hours_raw: 'Dinner from about 18:00, times varying by date; irregular closing days (Tabelog). Reservation only; no children; 5% service charge; cancellation fees of 30% from 7 days, 50% from 3 days, 100% the day before (Tabelog). Whole-counter private bookings available (Tabelog; 2026 reviews). Cards accepted; no e-money or QR (Tabelog). 6 counter seats; non-smoking (Tabelog). About ¥30,000–50,000 a head (Tabelog; reviews). Opened 10 September 2023 (Tabelog).',
    hours: {}, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Arakichō 3-21, 宮内ビル 2F, at the end of a narrow lane off Shakumon-dōri — 6 min from Yotsuya-sanchome Stn',
    cuisine: 'Kappo counter: a seasonal omakase course finishing with handmade ju-wari (100% buckwheat) soba and a clay-pot rice; about ten sakes, mostly seasonal (Tabelog; 2026 reviews) · e.g. hairy crab with caviar or tosa-vinegar jelly; young ayu grilled for 40–45 minutes; pike conger or clam soups; abalone, white and black side by side; tiger pufferfish in winter; first bonito, salted and smoked; nodoguro with white asparagus; eel hand rolls; clay-pot rice of corn and eel, or firefly squid and sakura shrimp (2026 reviews)',
    website: SITE, gmaps: gm('四ッ谷 みね村 荒木町'), menu_url: null,
    notes: "[Kappo · Arakicho, a six-seat counter that ends in hand-cut soba] On the second floor at the end of a narrow Arakicho lane, a six-seat counter opened in 2023 by chef Shohei Minemura, who trained for twelve years in kitchens such as Yabe, Ichita and Masuda. The seasonal course is generous rather than dainty — hairy crab under caviar, young ayu grilled for forty minutes, a pike-conger soup diners rave about — and closes with handmade ju-wari soba and a clay-pot rice of corn and eel in summer. One regular counts nine visits; another calls the chef serious and hard-working, with an easy rapport across the counter. Reservation only, about ¥30,000–50,000; 5% service.",
    chef_bio: { chef_name: 'Shohei Minemura', roles: ['Chef-owner (May 2026 review; Tabelog)'], origin: 'Opened in September 2023 (Tabelog; May 2026 review).',
      background: 'A May 2026 reviewer: "The chef is Shohei Minemura, who trained for 12 years at places like Yabe, Ichita, and Masuda, and opened this restaurant in September 2023. It\'s located in Yotsuya Sanchome, where Tanihon used to be." Tabelog (shop text): "Our chef, with 13 years of experience, carefully selects ingredients, prepares the dishes, and designs the course menu"; handmade 100% buckwheat soba; about ten sakes. A September 2026 reviewer says the restaurant "has earned a Michelin star" (not checked against the guide). The kanji of the chef\'s given name is not given in the sources.',
      philosophy: '"We value building trust with each customer at the counter" (Tabelog, shop text, machine-translated).', specialty: 'Seasonal kappo course; ju-wari soba; clay-pot rice.',
      anecdotes: [
        { text: '"The handmade soba served at the end of the meal was a stunning finale… Honestly, I would love to return just for this soba." — July 2026.', source: R + 'B531359920/' },
        { text: '"The clay pot rice served at the end was a showstopper; the moment the lid was lifted, the sweet aroma of corn filled the air, prompting spontaneous applause." — July 2026.', source: R + 'B531359920/' },
        { text: '"This was my 9th visit, and every time I come, [the restaurant] skillfully [uses] seasonal ingredients to provide an exceptional course." — May 2026.', source: R + 'B473011448/' },
      ],
      japanese_sources_summary: '公式サイト: 東京四谷にある日本料理店「四ツ谷みね村」、旬の食材と職人の技で料理ごとに四季を映す。食べログ: 四ッ谷 みね村、日本料理、荒木町3-21 宮内ビル 2F、四谷三丁目駅から徒歩6分、18時ごろから (変わることもある)、不定休、完全予約制、子ども不可、サービス料5%、キャンセル料あり、カウンター6席、禁煙、2023年9月10日オープン、料理人は13年の経験、手打ちの十割そば、日本酒は約10種。口コミ(2026年): おまかせのコース、締めに手打ちのそばと土鍋ご飯、毛蟹、40分焼く若鮎、鱧のお椀、あわび、9回来た常連、1人約3〜5万円。',
      confidence: 'medium', sources: [TB, SITE, R + 'B473011448/', R + 'B527354417/', R + 'B528286312/', R + 'B528507200/', R + 'B530968779/', R + 'B531167540/', R + 'B531359920/', R + 'B532049598/', R + 'B534190386/', R + 'B534559058/', R + 'B535520649/', R + 'B536572888/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase at a six-seat counter, booked ahead; the chef talks with guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区荒木町3-21 宮内ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own website and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.688628, 139.722964); cross-checked: GSI 東京都新宿区荒木町3番地 (lot) 11m. Sushi Cho and Shoan (both 荒木町3) are about 18 m west; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B531359920/'],
    price_note: 'No published prices; reviewers spend about ¥30,000–50,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase course with ju-wari soba and clay-pot rice', '', 'Course', 'ask', 'no', 'Tabelog; 2026 reviews.', 'omakase'),
    ] }, {
    cuisine: '割烹のカウンター: 季節のおまかせのコースで、締めは手打ちの十割そばと土鍋ご飯。日本酒は季節ものを中心に約10種 (食べログ、2026年の口コミ)・料理の例: キャビアや土佐酢のジュレをのせた毛蟹、40〜45分かけて焼く若鮎、鱧やはまぐりのお椀、白と黒のあわびの食べ比べ、冬はとらふぐ、塩と燻製の初鰹、のどぐろと白アスパラガス、鰻の手巻き、とうもろこしと鰻、またはホタルイカと桜えびの土鍋ご飯 (2026年の口コミ)',
    neighborhood: '荒木町3-21 宮内ビル2階、Shakumon 通りから入った細い路地の突き当たり。四谷三丁目駅から徒歩6分',
    gf_detail: '予約時に要確認。締めのそばは十割 (食べログ、口コミ) だが、つゆやコースの多くの料理に醤油を使い、揚げ物もある。グルテンフリーの記述はない。',
    vegan_detail: 'ヴィーガンではない。出汁を土台にした魚介中心の割烹のコース。',
    notes: '[割烹・荒木町、手打ちそばで締める6席のカウンター] 荒木町の細い路地の突き当たり、ビルの2階にある6席のカウンター。2023年に、いくつかの名店で12年修業した料理人が開いた。季節のコースは上品さより気前のよさが持ち味で、キャビアをのせた毛蟹、40分焼く若鮎、客が絶賛する鱧のお椀と続き、締めは手打ちの十割そばと、夏ならとうもろこしと鰻の土鍋ご飯。9回来た常連も。料理人はまじめで働き者、カウンター越しの会話も気持ちよいという声。完全予約制、1人約3〜5万円、サービス料5%。',
  });
}

// ================================================================ 日本料理 しうが
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13267070/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://siuga.net/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'tokyo_shiuga_yotsuya', name: '日本料理 しうが (Shiuga)', category: 'MOM_AND_POP',
    lat: 35.687788, lng: 139.722523, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The shop takes requests on disliked ingredients (August 2026); courses include fried and pastry-wrapped dishes such as kadaif-wrapped ayu, and dashi- and soy-based sauces. Nothing gluten-free is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based cooking with fish and meat courses.',
    hours_raw: 'Daily 18:00–24:00 (last order 23:00) on the website; Tabelog lists 18:00–23:00; irregular closing days, mainly Sundays and holidays, posted on Instagram (website; Tabelog). Same-day course reservations taken; online bookings carry a ¥200 per person fee; after 21:00 for light dishes as a second stop (Tabelog). Private rooms for groups of 3 or more ordering a course, ¥5,000 per room (Tabelog). Cards accepted; no e-money or QR (Tabelog). 19 seats: an L-shaped counter, tables, semi-private and two private rooms; non-smoking (Tabelog; 2026 reviews). In the basement of the SUGA building on Shinjuku-dōri since October 2021 (website).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yotsuya 3-1, スガビル B1F, on Shinjuku-dōri down a steep stair (lift at the back) — 3 min from Yotsuya-sanchome Stn',
    cuisine: 'Japanese cuisine "from a new angle": monthly courses of starter, warm dish, soup, sashimi, fish, meat, rice and dessert, using spices and herbs such as cumin and coriander, relying on dashi rather than salt, fat or MSG (website) · seasonal course ¥8,500 (October 2026); a six-dish omakase ¥10,000 (September 2026); à la carte snacks, rice and noodle dishes for a second stop (website; Tabelog) · e.g. potato purée with rosemary butter; mackerel, new sweet potato, persimmon and mushrooms under Pecorino; cuttlefish with bamboo shoot and zucchini; returning bonito with yam noodles, fennel and rhubarb; ayu wrapped in kadaif; Honshu venison with pumpkin and peanuts; a clay-pot rice; castella or shaved ice (2026 reviews) · warmed sake chosen monthly to match the course, Burgundy reds, natural wines, Chinese teas (website; 2026 reviews)',
    website: SITE, gmaps: gm('日本料理 しうが 四谷三丁目'), menu_url: SITE + 'menu.html',
    notes: "[Japanese · Yotsuya-sanchome, washoku with cumin and Pecorino] A black-and-grey basement room on Shinjuku-dōri where chef-owner 渡邊 雅之, who trained at つきぢ田村 and ran a Japanese kitchen in Germany, cooks washoku from a new angle: mackerel and persimmon under Pecorino, ayu wrapped in kadaif, venison with pumpkin and peanuts, a potato purée with rosemary butter in place of the opening soup. The monthly course is ¥8,500, sakes are chosen and warmed to match, and natural wines and Chinese teas fill out the list; after nine, à la carte snacks make it a second stop. Diners call it a revelation; one found the explanations brusque, another the service slow to clear glasses. Irregular closing days.",
    chef_bio: { chef_name: '渡邊 雅之', roles: ['Owner-chef (website)'], origin: 'Born in 1983 in Yamagata Prefecture (website).',
      background: 'Website (料理人): born in 1983 in Yamagata, drawn to cooking by the family sushi shop; began at つきぢ田村, learning the basics of Japanese cuisine for six years; head chef at a Japanese restaurant abroad in Germany; back in Japan learned producing and management, and went independent at 28 with 旬菜料理 山灯; moved and reopened as 日本料理 しうが in October 2021. Reviewers: the chef has always focused on Japanese food, not Western (October 2026); "the explanations of the dishes may come off as somewhat brusque" (October 2026).',
      philosophy: '"Drawing out the appeal of each ingredient to the fullest is the essence of Japanese cuisine" — cumin and coriander used "not to be eccentric, but to make better Japanese food" (website, translated).', specialty: 'Monthly washoku course; warmed sake pairings.',
      anecdotes: [
        { text: '"This first plate was truly shocking. It completely shattered my concept of Japanese cuisine… I wondered if this chef had a background in Western cuisine, but I was told [the chef has] always focused on Japanese food." — October 2026.', source: R + 'B537762592/' },
        { text: '"Particularly intriguing was the sauce made with the liver of the sea snail paired with coffee." — September 2026.', source: R + 'B535390029/' },
        { text: '"When I ordered a new drink, they didn\'t clear the empty glasses. I was also surprised that the draft beer was lukewarm." — September 2026, private room.', source: R + 'B535888387/' },
      ],
      japanese_sources_summary: '公式サイト: 日本料理しうが、日本伝統の和食を新たな切り口で、四谷3-1 スガビル B1F、18:00〜24:00 (L.O.23:00)、不定休、店主 渡邊 雅之は1983年山形県生まれ、実家の寿司店の影響で料理人に、つきぢ田村で6年、ドイツの日本料理店で料理長、28歳で独立、2021年10月に現在の地に移転オープン、月替わりのコース、クミンやパクチーも使う、塩・油脂・うま味調味料に頼らない、燗酒を中心とした日本酒、ブルゴーニュの赤ワイン、個室2室。食べログ: 予約可、ネット予約は1人200円、個室料5,000円、19席、禁煙。口コミ(2026年): 季節のコース8,500円、ペコリーノをのせたサバ、カダイフで包んだ鮎、鹿肉、説明がそっけないという声。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'person.html', SITE + 'kodawari.html', R + 'B534398399/', R + 'B534399960/', R + 'B535390029/', R + 'B535888387/', R + 'B536604430/', R + 'B536785378/', R + 'B537032756/', R + 'B537110437/', R + 'B537508022/', R + 'B537762592/', R + 'B537891989/', R + 'B537963373/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses or à la carte; dishes explained at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷3-1 スガビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own website with online booking and Tabelog listing with October 2026 closing days; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.687788, 139.722523); cross-checked: GSI 東京都新宿区四谷三丁目1番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536604430/', R + 'B535888387/'],
    price_note: 'Course prices from September–October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Seasonal course', '¥8,500', 'Course', 'ask', 'no', 'October 2026 reviews.', 'seasonal_course'),
      it('', '', 'Omakase course, 6 dishes', '¥10,000', 'Course', 'ask', 'no', 'September 2026 review.', 'omakase_6'),
    ] }, {
    cuisine: '日本伝統の和食を新たな切り口で: 月替わりのコースは先付、温皿、椀、割鮮、魚料理、肉料理、食事、デザート。クミンやパクチーも使い、塩、油脂、うま味調味料に頼らず出汁で味を引き立てる (公式サイト)・季節のコース8,500円 (2026年10月)、6品のおまかせ10,000円 (2026年9月)。二軒目向けに肴、単品、ご飯や麺もの (公式サイト、食べログ)・料理の例: ローズマリーバターのじゃがいものピューレ、サバ・さつまいも・柿・きのこにペコリーノ、イカと筍とズッキーニ、戻り鰹に長芋の素麺とフェンネルとルバーブ、カダイフで包んだ鮎、鹿肉とかぼちゃとピーナッツ、土鍋ご飯、カステラやかき氷 (2026年の口コミ)・燗酒を中心にコースに合わせて毎月替える日本酒、ブルゴーニュの赤、自然派ワイン、中国茶 (公式サイト、2026年の口コミ)',
    neighborhood: '四谷3-1 スガビル地下1階、新宿通り沿いの急な階段の下 (奥にエレベーター)。四谷三丁目駅から徒歩3分',
    gf_detail: '要確認。苦手な食材の相談には応じる (2026年8月)。コースにはカダイフで包んだ鮎などの揚げ物や、出汁や醤油のソースがある。グルテンフリーの記述はない。',
    vegan_detail: 'ヴィーガンではない。出汁が土台で、魚と肉の皿がある。',
    notes: '[日本料理・四谷三丁目、クミンとペコリーノの和食] 新宿通りの地下、黒とグレーの店で、つきぢ田村で修業しドイツの日本料理店で料理長を務めた店主の渡邊 雅之さんが、和食を新たな切り口で出す。サバと柿にペコリーノ、カダイフで包んだ鮎、かぼちゃとピーナッツを添えた鹿肉、最初のお椀の代わりにローズマリーバターのじゃがいものピューレ。月替わりのコースは8,500円で、日本酒は料理に合わせて燗をつけ、自然派ワインや中国茶も。21時以降は単品で二軒目にも。目からうろこだという客が多い一方、説明がそっけない、空いたグラスを下げないという声も。不定休。',
  });
}

// ================================================================ 寿司長
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13117549/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['17:00', '22:30']);
  put({
    id: 'tokyo_sushi_cho_arakicho', name: '寿司長 (Sushi Cho)', category: 'OMNI',
    lat: 35.688633, lng: 139.722762, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice bowls of raw fish are eaten with soy sauce; nothing gluten-free is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, and a dashi miso soup.',
    hours_raw: 'Mon–Fri lunch 12:00–14:00 and dinner 17:00–22:30; closed Saturday, Sunday and holidays (Tabelog). Several 2026 diners found it serving lunch from about 11:30; it fills by noon with regulars (2026 reviews). Reservations taken (Tabelog). Cards accepted; no e-money or QR (Tabelog). 16 seats: 8 at a single-slab counter and 8 at tables; private room for 8; non-smoking; children welcome (Tabelog; May 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Arakichō 3, 1F, off Shakumon-dōri — 3 min from Yotsuya-sanchome Stn (Exit 4)',
    cuisine: 'Neighbourhood sushi restaurant (Tabelog; reviews) · lunch is two bowls: chirashi-don ¥800 and tekka-don ¥900 of thick-cut lean and fatty tuna, some days with swordfish, shirasu or egg; large +¥100; with a seasonal miso soup, e.g. with saya-daikon pods (2026 reviews) · courses in the evening (April 2026 review, hearsay) · sake (Tabelog)',
    website: null, gmaps: gm('寿司長 荒木町'), menu_url: null,
    notes: "[Sushi · Arakicho, a regulars' counter with an ¥800 lunch] A long-established sushi shop in Arakicho with a single-slab counter and a quiet, regular crowd, best known now for lunch: just two bowls, chirashi at ¥800 and tekka-don at ¥900, the tuna cut thick and often mostly fatty, with a miso soup that changes with the season. The friendly head chef chats with regulars and checks on first-timers, and will keep your bags; a younger cook helps behind the counter. It opens around 11:30 despite the posted noon and fills by twelve. Evenings are sushi and courses. Weekdays only.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'No source names the chef or owner. Reviewers: "The head chef and a younger male staff member were working together. The chef was friendly, engaging even with newcomers" (May 2026); "The miso soup contained the rare \'saya daikon\' (pod radish), and I was impressed by how the owner took the time to explain it" (May 2026); "It had a calm atmosphere typical of a long-established sushi shop, with a beautiful single slab counter" (May 2026).',
      philosophy: null, specialty: 'Tekka-don and chirashi-don at lunch.',
      anecdotes: [
        { text: '"Although it\'s called Tekka Don, this version is almost all fatty tuna, and it\'s delicious." — October 2026, a fifth visit.', source: R + 'B495937310/' },
        { text: '"While lunch prices in the area are skyrocketing, the chirashi don is still JPY 800 and the tekka don is JPY 900." — April 2026.', source: R + 'B526914562/' },
        { text: '"Since I stopped by during work with a lot of luggage, I appreciated that [the staff] offered to hold my bags. The chef shared many interesting stories." — October 2026.', source: R + 'B537656882/' },
      ],
      japanese_sources_summary: '食べログ: 寿司長、寿司、荒木町3 1F、四谷三丁目駅から徒歩3分、月〜金12:00〜14:00・17:00〜22:30、土日祝休み、予約可、カード可、16席 (カウンター8席、テーブル8席)、個室あり、禁煙、子ども可。口コミ(2026年): 昼は11時半ごろから、ちらし丼800円と鉄火丼900円 (大盛り +100円)、厚切りのマグロ、季節の味噌汁、一枚板のカウンター、常連が多い、気さくな大将と若い職人。',
      confidence: 'medium', sources: [TB, R + 'B495937310/', R + 'B525050991/', R + 'B525390464/', R + 'B526098728/', R + 'B526103395/', R + 'B526914562/', R + 'B528186508/', R + 'B528394775/', R + 'B528401362/', R + 'B534899508/', R + 'B537656882/', R + 'B538174924/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A two-item lunch menu; regulars chat with the chef at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都新宿区荒木町3 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.688633, 139.722762); GSI 東京都新宿区荒木町3番地 (lot) 28m. Shoan (tokyo_shoan_arakicho, 荒木町3 北島ビル 1F) has a Tabelog point 1.4 m away, so the two are block pins: this one at its Tabelog point, Shoan 5 m south; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538174924/', R + 'B528186508/'],
    price_note: 'Lunch prices from April–October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('鉄火丼', '', 'Tekka-don (tuna rice bowl), lunch', '¥900', 'Lunch', 'ask', 'no', 'October 2026 review; large +¥100.', 'tekka_don'),
      it('ちらし丼', '', 'Chirashi-don, lunch', '¥800', 'Lunch', 'ask', 'no', 'October 2026 review; large +¥100.', 'chirashi_don'),
    ] }, {
    cuisine: '町の寿司店 (食べログ、口コミ)・昼は丼が2種類だけ: ちらし丼800円と、厚切りの赤身とトロの鉄火丼900円。日によってメカジキ、しらす、玉子ものる。大盛り +100円。季節の味噌汁付き (例えばさや大根) (2026年の口コミ)・夜はコースもあるという (2026年4月の口コミ、伝聞)・日本酒 (食べログ)',
    neighborhood: '荒木町3 1F、Shakumon 通りから入ったところ。四谷三丁目駅4番出口から徒歩3分',
    gf_detail: '要確認。生の魚の丼を醤油で食べる。グルテンフリーの記述はない。',
    vegan_detail: 'ヴィーガンではない。魚と、出汁の味噌汁。',
    notes: '[寿司・荒木町、800円の昼がある常連の店] 一枚板のカウンターに静かな常連が並ぶ荒木町の老舗の寿司店。いま知られているのは昼で、丼は2種類だけ。ちらし800円と鉄火丼900円で、マグロは厚切り、トロが多い日も。味噌汁は季節で変わる。気さくな大将が常連と話しながら初めての客にも声をかけ、荷物も預かってくれる。若い職人が手伝う。表示は12時開店だが11時半ごろから開いていて、12時には満席。夜は寿司とコース。平日のみ。',
  });
}

// ================================================================ 松庵
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13165186/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:30']);
  put({
    id: 'tokyo_shoan_arakicho', name: '松庵 (Shoan)', category: 'OMNI',
    lat: 35.688578, lng: 139.722752, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soba is milled from heirloom buckwheat in house, but no source gives the buckwheat ratio, and the dipping sauce is soy-based; nothing gluten-free is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the soba dipping sauce is made with two-year-aged honkarebushi bonito (Tabelog), and the courses include fish, eel and duck.',
    hours_raw: 'Mon–Sat and holidays 18:00–23:30 (last order food 23:00, drinks 23:15); closed Sunday; closes when sold out (Tabelog). Courses only for now, no à la carte (Tabelog). Reservations taken; lunch for private bookings by arrangement (Tabelog). ¥400 seating charge (Tabelog). Cards accepted; no e-money or QR (Tabelog). 14 seats: 6 at the counter and 8 at tables; non-smoking, smoking area outside (Tabelog). Opened 10 February 2014 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Arakichō 3, 北島ビル 1F, in a quiet back alley — 4 min from Yotsuya-sanchome Stn',
    cuisine: 'Soba kaiseki: soba of heirloom buckwheat stone-milled in house, with a dipping sauce of two-year-aged honkarebushi (Tabelog) · three courses at dinner, e.g. omakase ¥9,900 and a seasonal special ¥14,300 (2026 reviews) · small dishes with sake — seasonal vegetables in dashi, kombu-cured fish, grilled kinmedai, kamo eggplant, duck, a whole grilled ayu filleted at the table, eel, whale (2026 reviews) · to finish, a tasting of two or three soba from different regions, tried with salt, grated daikon and green onion, a splash of sake, then thin and thick dipping sauces; rich soba-yu; soba gelato (2026 reviews) · a strong sake list (2026 reviews)',
    website: null, gmaps: gm('松庵 荒木町 そば'), menu_url: null,
    notes: "[Soba · Arakicho, soba kaiseki from a husband-and-wife counter] A back-alley Arakicho room, more kaiseki than soba shop, where a couple serve courses of small seasonal dishes with sake — kombu-cured fish, grilled kinmedai, a whole ayu filleted at the table, eel in summer — before the point of the evening: two or three soba from different regions, milled from heirloom buckwheat in house, tasted first with salt, then a splash of sake, then with a sauce of two-year-aged bonito. Courses run ¥9,900–14,300 and the sake list is strong. One regular comes monthly; others found it good rather than thrilling, or slow when the owner works alone. Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Run by a couple (May and August 2026 reviews)'], origin: 'Opened 10 February 2014 (Tabelog).',
      background: 'No source names the owners. Reviewers: "The hospitality from the couple running the place was excellent" (May 2026); "It seemed to be run by a kind owner and [the owner\'s] wife" (August 2026); "the chef and the owner sharing stories about foraging for wild vegetables over the counter" (May 2026); "since [the owner] was working alone, the pace was a bit slow" (August 2026). Tabelog (shop text): soba ground in house from fragrant heirloom buckwheat, dipping sauce of two-year-aged honkarebushi.',
      philosophy: null, specialty: 'Soba tasting of regional buckwheat; soba kaiseki.',
      anecdotes: [
        { text: '"I was served three types of soba, each from different regions, and I had the pleasure of trying them with salt, grated daikon, dipping sauce, and even with sake and salt." — May 2026.', source: R + 'B528538610/' },
        { text: '"As soon as I opened the door, I was greeted with a warm smile and the words, \'We\'ve been waiting for you!\'" — July 2026, a monthly regular.', source: R + 'B517049419/' },
        { text: '"There wasn\'t a single dish that struck me as \'amazing,\' and the experience felt consistently good but not exceptional." — June 2026.', source: R + 'B530715671/' },
      ],
      japanese_sources_summary: '食べログ: 松庵、そば・日本料理、荒木町3 北島ビル 1F、四谷三丁目駅から徒歩4分、月〜土・祝18:00〜23:30 (L.O.料理23:00、ドリンク23:15)、日曜休み、なくなり次第終了、当面はコースのみ、昼は貸切で相談、席料400円、カード可、14席 (テーブル8席、カウンター6席)、禁煙、2014年2月10日オープン、在来種のそばを自家製粉、2年熟成の本枯節のつゆ。口コミ(2026年): 夫婦で営む店、おまかせ9,900円、季節の特別コース14,300円、そば懐石、産地の違うそば2〜3種の食べ比べ、塩や酒で食べる、そばのジェラート、日本酒が充実、ひとりで回していて遅いという声。',
      confidence: 'medium', sources: [TB, R + 'B517049419/', R + 'B528538610/', R + 'B528893645/', R + 'B529081800/', R + 'B529886298/', R + 'B530072594/', R + 'B530715671/', R + 'B531725238/', R + 'B532942494/', R + 'B533199372/', R + 'B533869623/', R + 'B534109327/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses; the staff explain how to eat each soba.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_approx: 'block', address_ja: '東京都新宿区荒木町3 北島ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.688623, 139.722752), moved 5 m south; GSI 東京都新宿区荒木町3番地 (lot) about 30 m. Sushi Cho (tokyo_sushi_cho_arakicho, 荒木町3 1F) has a Tabelog point 1.4 m away, so the two are block pins 5 m apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528893645/', R + 'B532942494/'],
    price_note: 'Course prices from May–July 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Omakase course with soba tasting', '¥9,900', 'Course', 'ask', 'no', 'May 2026 reviews.', 'omakase'),
      it('', '', 'Seasonal ingredients special course', '¥14,300', 'Course', 'ask', 'no', 'July 2026 review.', 'special'),
    ] }, {
    cuisine: 'そば懐石: 在来種のそばを店で石臼挽きし、2年熟成の本枯節でつゆをとる (食べログ)・夜のコースは3種類で、例えばおまかせ9,900円と季節の特別コース14,300円 (2026年の口コミ)・酒に合う小皿: 季節の野菜のお浸し、昆布じめ、金目鯛の焼き物、賀茂なす、鴨、目の前でさばく鮎の塩焼き、鰻、鯨 (2026年の口コミ)・締めは産地の違うそば2〜3種の食べ比べで、塩、大根おろしとねぎ、酒をひとたらし、そして薄いつゆと濃いつゆで。濃いそば湯、そばのジェラート (2026年の口コミ)・日本酒が充実 (2026年の口コミ)',
    neighborhood: '荒木町3 北島ビル1階、静かな路地裏。四谷三丁目駅から徒歩4分',
    gf_detail: '要確認。在来種のそばを店で製粉するが、そば粉の割合の記述はなく、つゆは醤油ベース。グルテンフリーの記述はない。',
    vegan_detail: 'ヴィーガンではない。そばのつゆは2年熟成の本枯節 (食べログ)。コースには魚、鰻、鴨も出る。',
    notes: '[そば・荒木町、夫婦で営むそば懐石] 荒木町の路地裏の、そば屋というより懐石の店。夫婦が季節の小皿を酒とともに出す。昆布じめ、金目鯛の焼き物、目の前でさばく鮎、夏は鰻。そして主役は、店で挽く在来種のそば2〜3種の食べ比べで、まず塩、次に酒をひとたらし、最後に2年熟成の鰹節のつゆで。コースは9,900〜14,300円で、日本酒も充実。毎月通う常連がいる一方、よいけれど感動はしなかった、店主がひとりで回していて遅いという声も。日曜休み。',
  });
}

save();
