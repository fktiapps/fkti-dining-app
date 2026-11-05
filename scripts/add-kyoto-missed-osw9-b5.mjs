// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 5.
//   + 烹祥庵 Hosho An (Kamo-River-view wagyu, yuba and lava-stone grill courses on Pontocho; since 2016)   [core]
//   + G麺 G Men (late-night udon-and-teppan izakaya off Kiyamachi, open to 7:00; curry udon)              [core]
//   + 和食晴ル Washoku Haru (11-seat à la carte washoku counter near Shijo-Karasuma; since 2015)          [notable]
//   + 京都くりや Kyoto Kuriya (chestnut wagashi near the prefectural office; Kin no Mi, kuri ohagi)        [notable]
//   - 都そば 河原町店 26009333 skipped (chain) · 六曜社珈琲店 26013227 skipped (already in data)
//   Taken in queue order on 2026-11-05 from `queue.mjs kyoto-missed next core 200` (lane ids 26027255, 26009333
//   skipped, 26005217) and `next notable 200` (26013227 skipped, 26026013, 26005379), after batch 4. None of the four
//   drafted is in data/kyoto.json: grep by name (烹祥庵/Hosho, G麺/G Men, 晴ル/Haru, くりや/Kuriya) and address
//   (鍋屋町227, 下樵町202, 神明町230-2, 大文字町42) found only kyoto_kiu_shijo_karasuma, a different shop on the 2F of
//   神明町230-2 (its address_ja: "京都府京都市下京区神明町230-2 2F").
//   Pins: Haru's Tabelog point is 1.9 m from kyoto_kiu_shijo_karasuma (35.002484, 135.762556), so Haru is moved ~6 m
//   south. Hosho An is 12 m from kyoto_pontocho_asari.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26009333', '都そば 河原町店: a branch of the 都そば stand-soba chain — six branches in our crawls (河原町 26009333, 神崎川 27027729, 鶴橋 27027741, 天満 27027743, 福島 27027751, 天五 27104559), and a 4travel review (4travel.jp/dm_shisetsu/11114717) says 「『都そば』は、大阪誠和食品という会社がやっている立ち食いそば・うどんのチェーン店です」');
skip('26013227', '六曜社珈琲店 (the first-floor kissaten): already in data as part of mp_rokuyosha_chikaten_rokuy, whose notes say "The basement shop is run by second-generation Osamu Okuno and the first-floor shop by third-generation Kumpei Okuno. Only the first-floor and basement shops in the same building"');

// ================================================================ 烹祥庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26027255/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_hoshoan_pontocho', name: '烹祥庵 (Hosho An)', category: 'OMNI',
    lat: 35.005059, lng: 135.771185, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses run through yuba, yudofu, sashimi with dashi soy sauce, hamo shabu with plum sauce, lava-stone grilled meat with house soy sauce, and sukiyaki in winter; no gluten information (Tabelog; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: the courses centre on black wagyu, hamo, lobster, abalone and sashimi, with sukiyaki in winter (Tabelog; 2025–26 reviews).',
    hours_raw: '17:00–23:00 (last order 22:00), Tuesday to Sunday; closed Monday, and Tuesday may close after a Monday holiday (Tabelog). Kawadoko terrace over the Kamo River from May to the end of September (Tabelog). Book by phone or Tabelog; tell changes by the day before; 100% charge for cancellations on the day before or the day (Tabelog). Each guest orders at least one dish and one drink (Tabelog). 20 table seats; private hire for 20; non-smoking; free Wi-Fi; cards accepted (Tabelog). Back of the first floor of 紫光会館 on Pontocho, north of Shijo; 3 min from Kawaramachi or Gion-Shijo Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, north of Shijo, facing the Kamo River — 3 min from Kyoto Kawaramachi Stn',
    cuisine: 'Black-wagyu yakiniku, meat sushi, yuba and yudofu with a night view of the Kamo River and Higashiyama; black-wagyu sukiyaki in winter (Tabelog) · black-wagyu sukiyaki set ¥7,000 (Tabelog) · lava-stone (Fuji) yakiniku course ¥9,500: three appetizers, yudofu, hamo shabu, lobster, abalone, grilled meat, meat sushi, dessert (July 2025) · fresh yuba with caviar, sea bream and tuna sashimi, abalone steak with burnt butter, grilled A5 wagyu strip loin with rock salt and house soy sauce (August 2026) · all-you-can-drink courses (Tabelog; June 2025)',
    website: 'http://kyo-shikian.com/menu_housho/', gmaps: gm('烹祥庵 先斗町'), menu_url: null,
    notes: "[Wagyu & Kyoto courses · Pontocho, on the Kamo River] A restaurant at the back of a Pontocho building that looks over the Kamo River toward Higashiyama and the Minamiza theatre, with a riverside kawadoko terrace from May to September. Courses pair Kyoto starters — yuba, yudofu, hamo shabu — with lobster, abalone and black wagyu grilled on Fuji lava stones (about ¥9,500); in winter, wagyu sukiyaki (¥7,000 set). Reviews range from delighted to disappointed. 17:00–23:00, closed Monday.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 28 March 2016 (Tabelog). A June 2025 reviewer had dessert at a sister restaurant downstairs. Tabelog lists kyo-shikian.com as the website; it did not answer on 2026-11-05.',
      philosophy: null, specialty: 'Lava-stone wagyu course; kawadoko terrace.',
      anecdotes: [
        { text: 'A May 2025 diner was lent a blanket when the terrace turned chilly, and warned that crows are many along the river.', source: R + 'B506234979/' },
        { text: 'An April 2026 diner found the food average, the shrimp and meat served cold, the furniture cheap for the price and the card payment slow.', source: R + 'B526358063/' },
        { text: 'For a birthday the staff brought a "Happy Birthday" plate — October 2026.', source: R + 'B536775769/' },
        { text: 'Grilling the meat at the table was a bit challenging for one September 2026 diner.', source: R + 'B535776356/' },
      ],
      japanese_sources_summary: '食べログ: 烹祥庵、日本料理・焼肉・居酒屋、中京区先斗町通四条上ル鍋屋町227 紫光会館 1F奥、阪急河原町駅・京阪祇園四条駅から徒歩3分、火〜日 17:00〜23:00 (L.O. 22:00)、月曜休み (祝日の月曜の翌火曜は休みの場合あり)、20席 (テーブル)、貸切20人、禁煙、無料 Wi-Fi、カード可、2016年3月28日オープン、5月〜9月末は川床、黒毛和牛すき焼き鍋セット7,000円、黒毛和牛の焼肉と肉寿司、湯葉、湯豆腐、鴨川と東山の夜景、キャンセルは前日・当日100%、1人1品1ドリンク。口コミ (2025年5月〜2026年10月、英語): 富士の溶岩石の焼肉コース9,500円、鱧しゃぶ、ロブスター、あわび、湯豆腐、川床、南座の眺め、評価は分かれる。',
      confidence: 'medium', sources: [TB, R + 'B506234979/', R + 'B506371748/', R + 'B508631861/', R + 'B509558554/', R + 'B510015525/', R + 'B518091948/', R + 'B526358063/', R + 'B534610272/', R + 'B535776356/', R + 'B536775769/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead, especially for the terrace; one dish and one drink each.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通四条上ル鍋屋町227 紫光会館 1F奥',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (operator text and set menu); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005059, 135.771185); cross-checked: GSI 京都府京都市中京区鍋屋町227番地 (lot) 48m; 12 m from kyoto_pontocho_asari; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B509558554/'],
    price_note: 'Sukiyaki set price from the Tabelog course list (read 2026-11-05); course price from a July 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Black-wagyu sukiyaki hot-pot set', '¥7,000', 'Courses', 'no', 'no', 'Per person, 2–8 people; Tabelog.', 'wagyu_sukiyaki_set'),
      it('', '', 'Fuji lava-stone yakiniku course', '¥9,500', 'Courses', 'ask', 'no', 'July 2025.', 'lava_course'),
    ] }, {
    cuisine: '鴨川と東山の夜景を見ながら、黒毛和牛の焼肉と肉寿司、湯葉、湯豆腐。冬は黒毛和牛のすき焼き (食べログ)・黒毛和牛すき焼き鍋セット7,000円 (食べログ)・富士の溶岩石の焼肉コース9,500円: 前菜3種、湯豆腐、鱧しゃぶ、ロブスター、あわび、焼肉、肉寿司、デザート (2025年7月)・キャビアをのせた生湯葉、鯛とまぐろの刺身、焦がしバターのあわびステーキ、岩塩と自家製醤油のA5和牛サーロインの焼き物 (2026年8月)・飲み放題付きコース (食べログ、2025年6月)',
    neighborhood: '四条の北の先斗町、鴨川に面する。京都河原町駅から徒歩3分',
    gf_detail: '要確認。コースは湯葉、湯豆腐、だし醤油の刺身、梅だれの鱧しゃぶ、自家製醤油の溶岩焼きの肉、冬はすき焼き。グルテンの情報はない (食べログ、2025〜26年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。コースは黒毛和牛、鱧、ロブスター、あわび、刺身が中心で、冬はすき焼き (食べログ、2025〜26年の口コミ)。',
    notes: '[和牛と京料理のコース・先斗町、鴨川沿い] 先斗町のビルの奥にある店で、鴨川越しに東山と南座を望む。5月から9月は川床も。湯葉、湯豆腐、鱧しゃぶなどの京の前菜に、ロブスター、あわび、富士の溶岩石で焼く黒毛和牛のコース (約9,500円)。冬は和牛のすき焼き (セット7,000円)。口コミの評価は大きく分かれる。17時〜23時、月曜休み。',
  });
}

// ================================================================ G麺
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005217/'; const R = TB + 'dtlrvwlst/';
  const H = day(['19:00', '07:00']);
  put({
    id: 'kyoto_g_men_kiyamachi', name: 'G麺 (G Men)', category: 'OMNI',
    lat: 35.005777, lng: 135.77065, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the house dish is homemade wheat udon, and the menu adds ramen, katsudon, tempura and fried food (Tabelog; 2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: the udon is served in the house dashi, and most dishes carry meat, egg or tempura (Tabelog; 2024–26 reviews).',
    hours_raw: '19:00–7:00 every day (Tabelog). Bookings possible (Tabelog). Order by QR code on your phone (September 2026). 14 seats at the counter and tables; smoking allowed; cash only (Tabelog). In the passage between Pontocho and Kiyamachi, north of Shijo (Tabelog; July 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Between Kiyamachi and Pontocho, north of Shijo — 276 m from Gion-Shijo Stn',
    cuisine: 'Late-night udon and teppan izakaya: homemade udon in a house dashi and 28 teppanyaki dishes (Tabelog) · curry udon, the house favourite, with shrimp tempura (tempura curry ¥900 in July 2024), keiran (egg-drop) udon with ginger · soba, ramen, curry ramen, katsudon, rice bowls, onigiri, fried food · izakaya plates: yam and onion slices, tofu (2024–26 reviews)',
    website: null, gmaps: gm('G麺 木屋町'), menu_url: null,
    notes: "[Udon izakaya · Kiyamachi, open until 7 am] A small, worn, friendly late-night spot in the lane between Kiyamachi and Pontocho, open from 19:00 to 7:00 every night — the last stop after drinks. The curry udon (thin, firm noodles in a mild, dashi-rich curry) is what most people order; there are also egg-drop udon, katsudon, ramen and teppan snacks. Orders by QR code. Cash only; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Per an April 2023 review: a long-running shop famous for its curry udon, which had recently opened another place on Marutamachi in front of the prefectural office. Per the operator’s Tabelog text: homemade noodles, a special dashi and 28 kinds of teppanyaki.',
      philosophy: null, specialty: 'Curry udon.',
      anecdotes: [
        { text: '"Late at night on Kiyamachi, it\'s pretty much filled with Westerners. It\'s like a different country. It’s quite troublesome." — April 2023.', source: R + 'B463566167/' },
        { text: '"The owner, with a charming smile, adds to the experience." — July 2024.', source: R + 'B488424223/' },
        { text: 'Regulars include staff from nearby bars, and guests shift seats as space frees up — July 2024.', source: R + 'B501485385/' },
        { text: '"I thought the noodles might be soft, but they were actually quite firm" — September 2026.', source: R + 'B536410542/' },
      ],
      japanese_sources_summary: '食べログ: G麺、居酒屋・うどん、中京区木屋町通四条上ル下樵町202-1 1F、毎日 19:00〜7:00、予約可、14席 (カウンターとテーブル)、喫煙可、カード・電子マネー・QR 不可、自家製麺と特製だしのうどん、28種の鉄板焼き。口コミ (2024年7月〜2026年10月、英語): カレーうどん、天ぷらカレー900円 (2024年7月)、卵とじうどん、カツ丼、カレーラーメン、深夜から早朝まで、QR コードで注文。',
      confidence: 'medium', sources: [TB, R + 'B450094710/', R + 'B463566167/', R + 'B484243016/', R + 'B488424223/', R + 'B496166989/', R + 'B496834916/', R + 'B501485385/', R + 'B520507064/', R + 'B536410542/', R + 'B537367062/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code; late-night crowd; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町通四条上ル下樵町202-1 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (operator text); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005777, 135.770650); cross-checked: GSI 京都府京都市中京区下樵木町 (town; Tabelog writes 下樵町) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B488424223/'],
    price_note: 'No menu read; the only price is from a July 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Tempura curry udon', '¥900', 'Udon', 'no', 'no', 'July 2024.', 'tempura_curry_udon'),
      it('', '', 'Keiran (egg-drop) udon', '', 'Udon', 'no', 'no', 'November 2024.', 'keiran_udon'),
      it('', '', 'Katsudon', '', 'Rice bowls', 'no', 'no', '', 'katsudon'),
    ] }, {
    cuisine: '深夜のうどんと鉄板焼きの居酒屋。自家製麺と特製だしのうどん、28種の鉄板焼き (食べログ)・人気のカレーうどん、海老天のせ (2024年7月 天ぷらカレー900円)、生姜の効いた卵とじうどん・そば、ラーメン、カレーラーメン、カツ丼、丼、おにぎり、揚げ物・居酒屋のつまみ: 長いもやオニオンスライス、豆腐 (2024〜26年の口コミ)',
    neighborhood: '四条の北、木屋町と先斗町の間。祇園四条駅から276m',
    gf_detail: '実際にはグルテンフリーではない。看板は自家製の小麦のうどんで、ラーメン、カツ丼、天ぷら、揚げ物もある (食べログ、2024〜26年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。うどんは特製のだしで、ほとんどの料理に肉、卵、天ぷらが入る (食べログ、2024〜26年の口コミ)。',
    notes: '[うどん居酒屋・木屋町、朝7時まで] 木屋町と先斗町の間の路地にある、年季の入った気さくな深夜の店。毎晩19時から朝7時まで開いていて、飲んだあとの最後の一軒に。細めでコシのある麺に、だしの効いたやさしいカレーのカレーうどんがいちばん人気。卵とじうどん、カツ丼、ラーメン、鉄板のつまみも。注文は QR コードで。現金のみ、喫煙可。',
  });
}

// ================================================================ 和食晴ル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26026013/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_washoku_haru', name: '和食晴ル (Washoku Haru)', category: 'OMNI',
    lat: 35.00243, lng: 135.762539, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal Japanese à la carte built on dashi — sashimi, dashimaki, fried chicken, yakisoba, saba sushi, tempura rice bowl; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: the menu is fish, duck and chicken dishes and dashi-based cooking (2026 reviews).',
    hours_raw: '18:00–22:00 (Friday last orders: food 21:10, drinks 21:25); closed Monday; no lunch (Tabelog). Two seatings, 18:00 and 20:00; bookings through TableCheck only, with phone bookings on the day; the 18:00 seating fills even on weekdays (Tabelog; October 2026). Solo diners get in only when there is room on the day (October 2026). 11 counter seats; high-school age and up; non-smoking; cash only (Tabelog). 3 min from Shijo or Karasuma Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'A back lane near Bukkoji, Shijo-Karasuma area — 3 min from Shijo Stn',
    cuisine: 'Creative Japanese à la carte with seasonal ingredients, from a blackboard menu (2026 reviews) · the unmashed potato salad (cubed potatoes in mayonnaise sauce) that reviewers single out · sashimi platter, conger-eel sashimi · tai sansho mochi (sweet-spicy sea bream flakes with brown-rice mochi, ¥2,200), duck menchi katsu (¥2,000), duck wrapped in fu, roast duck · fried amadai scales, fried jidori chicken, dashimaki · salt yakisoba with crab, saba sushi (reserve it), shrimp tempura rice bowl · seasonal appetizers, e.g. fig with sesame cream · a strong sake list (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('和食晴ル 京都'), menu_url: null,
    notes: "[Washoku · near Shijo-Karasuma, an eleven-seat counter] A small counter on a back lane by Bukkoji, opened in 2015 by an owner who trained at Wakuden, serving refined Japanese cooking as à la carte plates to go with sake: the famous unmashed potato salad, conger-eel sashimi, duck menchi katsu, sea-bream sansho mochi, crab salt yakisoba and saba sushi to finish. Two seatings (18:00 and 20:00), booked on TableCheck; expect about ¥10,000–15,000 with drinks. Cash only; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; trained at Wakuden, per a July 2026 review)'], origin: null,
      background: 'Opened 16 June 2015 (Tabelog). Per a July 2026 review: the owner trained at the renowned Wakuden and opened the shop so guests could enjoy authentic kaiseki flavours in a relaxed à la carte setting. Tabelog Izakaya WEST "Tabelog 100" 2025 and 2026.',
      philosophy: null, specialty: 'Potato salad; conger-eel sashimi; saba sushi.',
      anecdotes: [
        { text: '"The potato salad will change your perception of it" — October 2026.', source: R + 'B538324424/' },
        { text: 'With an 8 pm booking on a holiday, a guest waited outside until just before the turnover — October 2026.', source: R + 'B537584414/' },
        { text: 'The sea-bream sansho mochi (¥2,200) and duck menchi katsu (¥2,000 each) were worth it but "on the expensive side"; about ¥15,000 for two with sake — October 2026.', source: R + 'B537118347/' },
        { text: '"It\'s a cash-only system where you are presented with the total amount at the end, so be sure to bring cash." — October 2026.', source: R + 'B506799066/' },
      ],
      japanese_sources_summary: '食べログ: 和食晴ル、居酒屋、下京区神明町230-2、地下鉄四条駅・阪急烏丸駅から徒歩3分、火〜日 18:00〜22:00 (金曜 L.O. 料理21:10・ドリンク21:25)、月曜休み、昼営業なし、11席 (カウンターのみ)、高校生以上、禁煙、現金のみ、20時入れ替えの2部制、予約は TableCheck のみ (電話は当日のみ)、2015年6月16日オープン、居酒屋 WEST 百名店 2025・2026。口コミ (2026年7〜10月、英語): ポテトサラダ、刺身盛り合わせ、穴子の刺身、鯛山椒餅2,200円、鴨メンチカツ2,000円、蟹の塩焼きそば、鯖寿司、和久傳で修業した店主、黒板のメニュー。',
      confidence: 'medium', sources: [TB, R + 'B482275764/', R + 'B506799066/', R + 'B532409629/', R + 'B532412891/', R + 'B534702696/', R + 'B536658917/', R + 'B537118347/', R + 'B537179240/', R + 'B537584414/', R + 'B538324424/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book on TableCheck; pick the 18:00 or 20:00 seating; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区神明町230-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Izakaya WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.002494, 135.762539), moved ~6 m south to 35.002430 because kyoto_kiu_shijo_karasuma (2F of the same building, 神明町230-2) is pinned 1.9 m from the Tabelog point; cross-checked: GSI 京都府京都市下京区神明町230番地 (lot) 52m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537118347/'],
    price_note: 'Blackboard menu, not read; prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tai sansho mochi (sea bream flakes with brown-rice mochi)', '¥2,200', 'À la carte', 'ask', 'no', 'October 2026.', 'tai_sansho_mochi'),
      it('', '', 'Duck menchi katsu', '¥2,000', 'À la carte', 'no', 'no', 'Each; October 2026.', 'duck_menchi'),
      it('', '', 'Potato salad', '', 'À la carte', 'ask', 'ask', 'The house signature.', 'potato_salad'),
    ] }, {
    cuisine: '旬の素材の創作和食をアラカルトで、黒板のメニューから (2026年の口コミ)・口コミが口をそろえる、つぶさないポテトサラダ (角切りのじゃがいもにマヨネーズのソース)・刺身盛り合わせ、穴子の刺身・鯛山椒餅 (甘辛い鯛のそぼろと玄米の餅、2,200円)、鴨のメンチカツ (2,000円)、鴨の麩巻き、鴨ロース・甘鯛の鱗揚げ、地鶏の唐揚げ、だし巻き・蟹の塩焼きそば、鯖寿司 (予約がおすすめ)、海老天丼・季節の先付、たとえば無花果の胡麻クリーム・充実した日本酒 (食べログ、2026年の口コミ)',
    neighborhood: '四条烏丸界隈、仏光寺近くの路地。四条駅から徒歩3分',
    gf_detail: '要確認。だしを土台にした旬の和食のアラカルト: 刺身、だし巻き、唐揚げ、焼きそば、鯖寿司、天丼。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。料理は魚、鴨、鶏とだしの料理が中心 (2026年の口コミ)。',
    notes: '[和食・四条烏丸、11席のカウンター] 仏光寺近くの路地にある小さなカウンター。和久傳で修業した店主が2015年に開き、本格的な味を酒に合うアラカルトで出す: 名物のつぶさないポテトサラダ、穴子の刺身、鴨メンチカツ、鯛山椒餅、蟹の塩焼きそば、締めの鯖寿司。18時と20時の2部制で予約は TableCheck、飲んで1人1万〜1万5千円ほど。現金のみ、月曜休み。',
  });
}

// ================================================================ 京都くりや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26005379/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-kuriya.jp/'; const ITEMS = SITE + 'item'; const ABOUT = SITE + 'about'; const VISION = SITE + 'vision';
  const WD = day(['09:00', '18:00']); const SUN = day(['10:00', '15:00']);
  put({
    id: 'kyoto_kuriya', name: '京都くりや (Kyoto Kuriya)', category: 'OMNI',
    lat: 35.017238, lng: 135.753236, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Many sweets are chestnut, sugar, mochi rice and bean paste (Kin no Mi, kuri ohagi, chestnut yokan), but the range also has chestnut dorayaki, monaka and senbei; no ingredient list is published (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Candied chestnuts, kuri ohagi and yokan are described as chestnut, sugar and rice, but no ingredient list is published and the dorayaki batter is not described (official site; 2026 reviews).',
    hours_raw: 'Tuesday–Saturday 9:00–18:00, Sundays and public holidays 10:00–15:00; closed Monday (next day if Monday is a holiday) and New Year’s Day; hours may change (official site). Takeaway only, no seats (Tabelog). Orders can be reserved up to the day before (Tabelog); kuri ohagi is seasonal (autumn) and sells out, and a reviewer was told it is not made on some weekdays — reserve by phone (2026 reviews). Parking ticket for purchases of ¥2,500 or more at くるっとパーク大文字町 (official site). Cards, e-money and PayPay (Tabelog). 2 min from the Horikawa-Marutamachi bus stop, 8 min from Marutamachi Stn (official site).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Horikawa-Marutamachi and the prefectural office — 2 min from the Horikawa-Marutamachi bus stop',
    cuisine: 'Chestnut wagashi shop: simple, rustic sweets that "bring back home" rather than showy Kyoto confections (official site) · Kin no Mi, the signature: whole chestnuts candied in a crisp sugar coat, wrapped in gold (¥259 in September 2026) · kuri ohagi, mochi rice wrapped in chestnut paste of Tanba chestnuts, autumn only (¥324 each in September 2026) · chestnut dorayaki, chestnut yokan, Sato no Tsuki (monaka with mochi and chestnut, ¥313) · seasonal: mizu-yokan, wakaayu, brown-rice manju (official site; 2026 reviews)',
    website: SITE, gmaps: gm('京都くりや 大文字町'), menu_url: ITEMS,
    notes: "[Wagashi · Horikawa-Marutamachi, all about chestnuts] A small chestnut-sweets shop near the prefectural office whose wooden sign announces its signature, Kin no Mi — whole chestnuts glazed in a crisp sugar shell and wrapped in gold (about ¥260 each). In autumn the queue forms for kuri ohagi, sticky rice wrapped in Tanba-chestnut paste (about ¥320), which sells out: phone a day ahead. Also chestnut dorayaki and yokan. Takeaway only; cards accepted; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Per an October 2026 review: a chestnut-sweets specialist established in the Taisho era, using carefully selected domestic chestnuts. Tabelog Japanese-sweets WEST "Tabelog 100" 2023 and 2026.',
      philosophy: 'Per the official site: "当店の菓子は京菓子のような華やかさは無いかもしれませんが、故郷を思い出して頂ける素朴な菓子です" — not the showiness of Kyoto confections, but simple sweets that remind people of home, made with care for natural flavour.',
      specialty: 'Kin no Mi; kuri ohagi.',
      anecdotes: [
        { text: 'At 11:30 on a weekday, about five groups were waiting outside, and the reviewer got the last kuri ohagi — October 2026.', source: R + 'B537341818/' },
        { text: 'The staff serve each customer individually, so it can take a little while to be served — October 2026.', source: R + 'B536602154/' },
        { text: 'An October 2026 buyer found the mochi a bit soft for ohagi and the chestnut overly sweet, and was told the kuri ohagi is not made on Thursdays.', source: R + 'B499938225/' },
      ],
      japanese_sources_summary: '公式サイト (kyoto-kuriya.jp): 栗の和菓子製造・販売、銘菓「金の実」、名物「栗おはぎ」、中京区大文字町42-4、平日 (火〜土) 9:00〜18:00、日曜・祝日 10:00〜15:00、定休日 元旦・月曜日 (祝日の場合翌日休み)、堀川丸太町バス停から徒歩2分、丸太町駅から徒歩8分、2,500円以上で駐車サービス券 (くるっとパーク大文字町)、定番商品: 金の実 栗納豆、栗どら、山の端、栗羊羹、山里、るりの里、おちょぼ、さいからせんべい、季節商品: 水羊羹、梅香水・紫香水、若鮎、栗おはぎ、栗の園、玄米饅頭、一口羊羹、京菓子のような華やかさは無いかもしれないが故郷を思い出して頂ける素朴な菓子。食べログ: 和菓子、予約は前日まで、席なし、カード・電子マネー・QR (PayPay) 可、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2026年9〜10月、英語): 金の実259円、栗おはぎ324円、丹波栗100%、大正創業、行列、売り切れ。',
      confidence: 'medium', sources: [TB, SITE, ITEMS, ABOUT, VISION, R + 'B499938225/', R + 'B535949612/', R + 'B536351267/', R + 'B536432269/', R + 'B536602154/', R + 'B537141354/', R + 'B537341818/', R + 'B537802245/', R + 'B537980437/', R + 'B538707595/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter shop; staff serve one customer at a time; reserve kuri ohagi by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区大文字町42-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026; Japanese-sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.017238, 135.753236); cross-checked: GSI 京都府京都市中京区大文字町42番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [ITEMS, R + 'B535949612/', R + 'B536351267/', R + 'B537802245/'],
    price_note: 'Product list from the official site (no prices); prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('金の実', '', 'Kin no Mi (sugar-glazed whole chestnut), one piece', '¥259', 'Chestnut sweets', 'ask', 'ask', 'September 2026.', 'kin_no_mi'),
      it('栗おはぎ', '', 'Kuri ohagi (mochi rice in Tanba-chestnut paste), autumn', '¥324', 'Seasonal', 'ask', 'ask', 'September 2026; sells out.', 'kuri_ohagi'),
      it('', '', 'Sato no Tsuki (monaka with mochi and chestnut)', '¥313', 'Chestnut sweets', 'ask', 'ask', 'October 2026.', 'sato_no_tsuki'),
      it('栗どら', '', 'Chestnut dorayaki', '', 'Chestnut sweets', 'no', 'ask', '', 'kuri_dora'),
      it('栗羊羹', '', 'Chestnut yokan', '', 'Chestnut sweets', 'ask', 'ask', '', 'kuri_yokan'),
    ] }, {
    cuisine: '栗の和菓子の店。京菓子の華やかさではなく故郷を思い出す素朴な菓子 (公式サイト)・看板の金の実: 丸ごとの栗を砂糖でカリッと包み、金色の包装 (2026年9月 259円)・栗おはぎ: 丹波栗の栗あんでもち米を包む秋限定 (2026年9月 1個324円)・栗どら、栗羊羹、Sato no Tsuki (餅と栗の最中、313円)・季節の水羊羹、若鮎、玄米饅頭 (公式サイト、2026年の口コミ)',
    neighborhood: '堀川丸太町、府庁の近く。堀川丸太町バス停から徒歩2分',
    gf_detail: '要確認。金の実、栗おはぎ、栗羊羹など栗、砂糖、もち米、あんの菓子が多いが、栗どら、最中、せんべいもある。原材料の一覧は公開されていない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。栗の砂糖がけ、栗おはぎ、羊羹は栗、砂糖、米と説明されているが、原材料の一覧は公開されておらず、どら焼きの生地の説明もない (公式サイト、2026年の口コミ)。',
    notes: '[和菓子・堀川丸太町、栗づくし] 府庁近くの小さな栗菓子の店。木の看板に掲げる銘菓は金の実で、丸ごとの栗をカリッとした砂糖で包み金色の紙でくるむ (1個260円ほど)。秋は丹波栗のあんでもち米を包む栗おはぎ (320円ほど) を求めて行列ができ、売り切れることも多いので前日までに電話で予約を。栗どらや栗羊羹も。持ち帰りのみ、カード可、月曜休み。',
  });
}

save();
