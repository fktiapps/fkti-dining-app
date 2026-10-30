// Osaka sweep (2-mile circle around Dotonbori), batch 206 — mom-and-pop queue (≤20 seats, 30+ reviews), nearest-first past ~1.2 km.
//   + 新町 和けい Shinmachi Wakei (seasonal Japanese: lunch gozen and kaiseki, tempura and shabu-shabu courses; Shinmachi)
//     Chain check: one Wakei listing in shops.jsonl; the course page says "we also operate a shabu-shabu specialty restaurant"
//     and a September 2025 review says the head chef "manages several establishments" — a small group, not a chain; nothing
//     under 和けい/Wakei in data/osaka.json.
//   + 布目の里 Nunome no Sato (vegetable-heavy set meals with Yamazoe-village vegetables and Wakayama fish; Shinmachi)
//     Chain check: one listing in shops.jsonl, nothing under 布目/Nunome in data/osaka.json.
//   + アグー専門店 白いとんかつ花ひらく 四ツ橋店 Aguu Senmon Ten Shiroi Tonkatsu Hana Hiraku Yotsubashi ten (Agu-pork tonkatsu
//     and shabu-shabu counter, 7 seats; Shinmachi)
//     Chain check: the "四ツ橋店" is the shop's move from Fuse, not a branch: "Hana Hiraku has moved from Fuse to Nishi-Ohashi!"
//     (review B517350191, November 2025); the shop site (hanahiraku-yotsubashi.com) lists only this shop. Not in data/osaka.json
//     (the Agu shabu-shabu record osaka_agu_buta_shabu_butaya_aoi is a different shop, 豚や 葵 in Higashi-Shinsaibashi).
//   + べつばら Betsubara (reservation-only kakigori with fresh-fruit syrups, open since 2013; Shinmachi)
//     Chain check: one listing in shops.jsonl, nothing under べつばら/Betsubara in data/osaka.json.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 206);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 新町 和けい
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27101398/'; const R = TB + 'dtlrvwlst/';
  const LUNCH = TB + 'dtlmenu/lunch/'; const COURSE = TB + 'party/'; const TAKEOUT = TB + 'dtlmenu/';
  const H = day(['12:00', '14:00'], ['18:00', '24:00']);
  put({
    id: 'osaka_shinmachi_wakei', name: '新町 和けい (Shinmachi Wakei)', category: 'OMNI',
    lat: 34.67779, lng: 135.492504, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The shop asks to be told about food allergies when booking and offers to adjust dishes, but makes no gluten-free claim; tempura comes with nearly every set and course, and the shabu-shabu uses a house dipping sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the cooking is built on a dashi of Rishiri kelp and honkarebushi bonito (Tabelog, shop-provided), and the sets and courses centre on fish, shrimp, pork and beef.',
    hours_raw: 'Daily 12:00–14:00 (last order 13:30) and 18:00–24:00; lunch closes if there are no reservations, dinner by reservation only and same-day bookings may not be possible because of market closures; closing days not fixed (late May listed); the shop will try to take bookings outside these hours (Tabelog). Lunch courses 12:00–14:30 (Tabelog course page). Service charge 5%, private-room charge 5% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 15 seats: a counter (about five to seven seats per 2023–2024 reviews) and one sunken-kotatsu private room for 4–8, which may refuse children when booked for business; whole-shop booking up to 20; smoking only in the private room at night (Tabelog). Opened 20 November 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmachi 2-3-13, Lions Mansion Yotsubashi 105 — 3 min from Nishi-Ohashi Stn (Exit 1), 8 min from Yotsubashi Stn (Exit 2)',
    cuisine: 'Seasonal Japanese cooking on a Rishiri-kelp and honkarebushi dashi (15 seats, counter and a private room) · lunch: Wakei set of about 12 small side dishes with seasonal rice, soup and a sweet ¥1,600, with sashimi and tempura ¥2,500; three-tiered bento ¥3,500 (two a day, book); add-ons: tempura, sashimi, pork shabu-shabu in a paper pot · lunch kaiseki from ¥4,300 (Sumire ¥4,500, Aoi ¥6,000, Miyabi ¥8,500); tempura kaiseki ¥6,500 and ¥8,000 · omakase from ¥10,000–15,000; matsutake courses in autumn; Yamasan wagyu shabu-shabu ¥18,000; pork shabu-shabu course ¥8,500; torafugu tetchiri ¥19,800 (prices before tax) · takeout bento, sushi and the house shabu-shabu sauce · sake and shochu',
    website: null, gmaps: gm('新町 和けい'), menu_url: LUNCH,
    notes: "[Kaiseki · Shinmachi, a hideaway for seasonal Japanese cooking at honest prices] A small Japanese restaurant tucked into the ground floor of an apartment block near Nishi-Ohashi, opened in 2017 by a chef who trained at a long-established Osaka restaurant and was head chef at the Michelin-starred Sōsaku Ryori Kawahara in Ehime, the chef's home prefecture. Everything rests on a delicate dashi of Rishiri kelp and honkarebushi. Lunch is the draw: the Wakei set lays out about a dozen bite-sized seasonal dishes (sesame tofu, duck, fried horse mackerel, vegetable jellies) with seasonal rice, and the fuller version adds two sashimi and tempura, the thick-cut eggplant and the sweet Awaji onion singled out by diners. Kaiseki lunches and dinner omakase run up to fugu, wagyu shabu-shabu and matsutake in season. There is a counter and one sunken-kotatsu private room, popular for family celebrations; a 90-year-old guest who could not eat raw food was cooked for and finished everything (April 2026). Everything is by reservation; lunch closes when nobody has booked.",
    chef_bio: { chef_name: null, roles: ['Head chef and owner (Tabelog, shop-provided)'], origin: 'Ehime Prefecture, the chef\'s hometown (Tabelog, shop-provided)', background: 'Trained at a long-established restaurant in Osaka, then head chef at the Michelin one-star "Sōsaku Ryori Kawahara" in Ehime, before opening Wakei on 20 November 2017 (Tabelog, shop-provided). A September 2025 review calls the chef "a chef from Kiccho"; another says the head chef "comes from a high-end Japanese restaurant and manages several establishments", and the course page notes "we also operate a shabu-shabu specialty restaurant".', philosophy: 'To share the beauty of Japanese cuisine: the finest seasonal seafood and local vegetables on a dashi of Rishiri kelp and honkarebushi, at honest prices (Tabelog, shop-provided).', specialty: 'Wakei set lunch of a dozen small dishes; tempura; shabu-shabu with a house dipping sauce.',
      anecdotes: [
        { text: '"The chef asked, \'Have you ever tried tempura of grilled eel?\'" — and served it with figs, September 2025, Wakei Gozen ¥2,750.', source: R + 'B513891957/' },
        { text: '"My mother, who is 90 and cannot eat raw food, was well taken care of and finished everything." — April 2026, a Mother\'s Day lunch.', source: R + 'B526180744/' },
      ],
      japanese_sources_summary: '食べログ (店の公式情報): 新町 和けい、大阪市西区新町2-3-13 ライオンズマンション四ツ橋 105、西大橋駅1番出口から徒歩3分、四ツ橋駅2番出口から徒歩8分、毎日12:00〜14:00 (L.O. 13:30)・18:00〜24:00、昼は予約がなければ休み、夜は予約のみ (市場の休みで当日予約は難しいことも)、不定休、アレルギーや苦手な食材は予約時に、カード可、電子マネー・QR不可、サービス料5%・個室料5%、15席、掘りごたつの個室1室 (4〜8人)、貸切20人まで、オープン日2017年11月20日。店の紹介: 大阪の老舗で修業し、故郷 Ehime のミシュラン一つ星 Sōsaku Ryori Kawahara の料理長を経て独立、利尻昆布と本枯節のだし、旬の魚と地元の野菜、正直な値段。メニュー (2026年8月更新): Wakei Gozen 1600円、刺身と天ぷら付き2500円、三段弁当3500円 (1日2食)、昼の会席4300円から、天ぷら会席6500円・8000円、おまかせ10000円から、松茸、Yamasan の牛肉のしゃぶしゃぶのコース、豚しゃぶのコース、てっちりのコース、しゃぶしゃぶ専門店も営業。口コミ(2023年5月〜2026年9月): 約12品の小鉢、刺身2種、天ぷら (厚切りの茄子、Awaji の玉ねぎ、海老)、季節のご飯、焼いた鰻の天ぷら、おぼろ豆腐、Sumire の会席4500円、個室でゆっくり、90歳の母も完食、料理長は Kiccho 出身という声、気さくで説明がていねい。',
      confidence: 'medium', sources: [TB, LUNCH, COURSE, TAKEOUT, R + 'B469274286/', R + 'B468182923/', R + 'B484673168/', R + 'B511573649/', R + 'B513891957/', R + 'B513973460/', R + 'B526180744/', R + 'B536688399/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation needed for every meal; book by phone (070-3224-3014) or online through Tabelog (2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: [
      { text: 'The shop asks guests to say which foods they are allergic to or dislike when booking, and offers to make dishes to suit (Tabelog reservation note, shop-provided).', source: TB },
    ] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町2-3-13 ライオンズマンション四ツ橋 105',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing maintained by the shop (menu updated August 2026); reviews dated to September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町二丁目3番13号 (go) 1m; OSM node/8663780417 「和けい」 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [LUNCH, COURSE, R + 'B513891957/', R + 'B536688399/'],
    price_note: 'Prices from the Tabelog lunch menu (updated 1 August 2026) and course page, before tax; review prices dated September 2025 and September 2026.', last_checked: TODAY, items: [
      it('', '', 'Wakei set (about 12 small dishes, seasonal rice, soup, sweet)', '¥1,600', 'Lunch set', 'ask', 'no', 'Tabelog lunch menu.', 'wakei_zen'),
      it('', '', 'Wakei set with sashimi and tempura', '¥2,500', 'Lunch set', 'ask', 'no', 'Tabelog lunch menu; ¥2,600 before tax on the course page; ¥2,750 in September 2025 reviews.', 'wakei_gozen'),
      it('', '', 'Three-tiered bento (two a day, reservation)', '¥3,500', 'Lunch set', 'ask', 'no', 'Tabelog lunch menu; ¥2,980 before tax in an August 2025 review.', 'bento3'),
      it('', '', 'Sumire kaiseki (lunch, reservation)', '¥4,500', 'Lunch course', 'ask', 'no', 'September 2026: oboro tofu, soup, two sashimi, simmered dish, tempura, eel pressed sushi, red miso soup, dessert.', 'sumire'),
      it('', '', 'Tempura kaiseki (8 kinds)', '¥6,500', 'Course', 'ask', 'no', 'Tabelog lunch menu; reservation.', 'tempura_kaiseki'),
      it('', '', 'Pork shabu-shabu course with house sauce', '¥8,500', 'Course', 'ask', 'no', 'Tabelog course page.', 'pork_shabu'),
      it('', '', 'Omakase course', '¥15,000', 'Course', 'ask', 'no', 'From ¥15,000 on the course page; from ¥10,000 on the lunch menu.', 'omakase'),
    ] }, {
    cuisine: '利尻昆布と本枯節のだしで作る旬の和食 (15席、カウンターと個室)・昼: 約12品の小鉢に季節のご飯、汁、甘味のWakei Gozen 1600円、刺身と天ぷら付き2500円、三段弁当3500円 (1日2食、要予約)、追加で天ぷら、刺身、紙鍋の豚しゃぶ・昼の会席4300円から (Sumire 4500円、Aoi 6000円、Miyabi 8500円)、天ぷら会席6500円・8000円・おまかせ10000〜15000円から、秋は松茸のコース、Yamasan の和牛のしゃぶしゃぶ18000円、豚しゃぶのコース8500円、てっちり19800円 (税別)・持ち帰りの弁当、寿司、しゃぶしゃぶのたれ・日本酒、焼酎',
    neighborhood: '新町2-3-13 ライオンズマンション四ツ橋 105。西大橋駅1番出口から徒歩3分、四ツ橋駅2番出口から徒歩8分',
    gf_detail: '要確認。アレルギーは予約時に伝えれば料理を合わせてくれるが、グルテンフリーの表示はなし。ほとんどの御膳とコースに天ぷらが付き、しゃぶしゃぶは店のたれ。',
    vegan_detail: 'ヴィーガンではありません。料理は利尻昆布と本枯節のだしが基本 (食べログ、店の情報) で、魚、海老、豚、牛が中心。',
    notes: '[会席・新町、隠れ家で旬の和食を手ごろに] 西大橋の近く、マンションの1階にひっそりある和食の店。大阪の老舗で修業し、故郷 Ehime のミシュラン一つ星 Sōsaku Ryori Kawahara で料理長を務めた料理人が2017年に開いた。基本は利尻昆布と本枯節のやさしいだし。人気は昼で、Wakei Gozen には胡麻豆腐、鴨、鯵の揚げ物、野菜のゼリー寄せなど一口サイズの旬の小鉢が十数品と季節のご飯。刺身2種と天ぷら付きもあり、厚切りの茄子と甘い Awaji の玉ねぎの天ぷらが評判。昼の会席や夜のおまかせは、季節によってふぐ、和牛のしゃぶしゃぶ、松茸まで。カウンターと掘りごたつの個室がひとつで、家族のお祝いにも使われる。生ものが食べられない90歳の母に合わせてもらい、完食したという声も (2026年4月)。どの食事も予約制で、昼は予約がなければ休み。',
  });
}

// ================================================================ 布目の里
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27106305/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_nunome_no_sato_shinmachi', name: '布目の里 (Nunome no Sato)', category: 'OMNI',
    lat: 34.678701, lng: 135.493614, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; mains are cooked with soy-based and oyster sauces and the menu includes curry.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The menu has a stir-fried vegetable set and a vegetable curry, but nothing says whether the miso soup, sauces or side dishes use fish stock, and most sets centre on pork, chicken or fish.',
    hours_raw: 'Hours not listed (Tabelog gives none; the shop website nunomenosato.net did not resolve on 2026-10-30). Reviews show weekday lunch from about 12:00, full by 12:10 on a weekday (May 2025), a Saturday visit at 14:00 (April 2026) and set meals in the evening for ¥100 more (2022–2023 reviews). Cash only: no cards, e-money or QR (Tabelog). 18 seats: 6 at the counter, three tables of 4; non-smoking; reservations and private hire possible (Tabelog). Punch cards sold (October 2026 review). Vegetables sold in and outside the shop (November 2023 review).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-34-20, Noble Square Shinmachi 1F — about 360 m from Nishi-Ohashi Stn',
    cuisine: 'Set-meal restaurant built on vegetables from Yamazoe Village in Nara and fish shipped direct from Wakayama (18 seats) · sets of about ¥1,000–1,500 with mixed rice (hijiki, five-grain, seasonal greens), miso soup, salad and two small vegetable sides: ginger pork, pork steak with green-onion sauce, juhosai (stir-fry of ten ingredients in oyster sauce), simmered fish, sautéed fish, grilled fish, ginger chicken, stir-fried vegetables, vegetable curry, ajillo, a daily special, chef\'s choice · evenings: the same sets plus omakase and drinks · sake, shochu, wine',
    website: null, gmaps: gm('布目の里 新町'), menu_url: null,
    notes: "[Shokudo · Shinmachi, vegetable-packed set meals from a Nara village] A clean little set-meal shop with a counter and three tables that sources its vegetables from Yamazoe Village in Nara and its fish straight from Wakayama, and sells some of that produce at the door. Every set comes with a pile of vegetables: a salad with a vegetable dressing, two small sides (wasabi-leaf ohitashi, stir-fried shirataki, wakame) and rice mixed with hijiki, grains or whatever is in season. Favourites are the ginger pork, the pork steak under green-onion sauce, the simmered fish, and the juhosai, an oyster-sauce stir-fry so full of vegetables one diner could not count them. The master cooks everything alone, so a crowd can mean a wait, and it fills with office workers by 12:10; diners call the master and staff kind. Cash only.",
    chef_bio: { chef_name: null, roles: ['Master and cook (handles all the cooking alone, per a November 2025 review)'], origin: null, background: 'Set-meal restaurant in Shinmachi using vegetables from Yamazoe Village, Nara Prefecture, and fish sent direct from Wakayama Prefecture (December 2022, February 2023 and July 2026 reviews).', philosophy: 'Healthy set meals of fresh, seasonal vegetables and fish (2023–2026 reviews).', specialty: 'Juhosai stir-fry; ginger pork; simmered fish; vegetable mixed rice.',
      anecdotes: [
        { text: 'The master handles all the cooking single-handed, so there can be a short wait depending on the timing, per a November 2025 lunch diner.', source: R + 'B517884530/' },
        { text: 'Offered a choice of yuzu rice or seri rice, an undecided diner was served half of each: "Such a thoughtful gesture!" — January 2024, juhosai set.', source: R + 'B472834448/' },
      ],
      japanese_sources_summary: '食べログ: 布目の里、大阪市西区新町1-34-20 ノーブルスクエア新町 1F、西大橋駅から約360m、営業時間の記載なし、予約可、カード・電子マネー・QR不可、18席 (カウンター6席、4人がけテーブル3卓)、禁煙、貸切可、ウェブサイト nunomenosato.net (2026年10月30日にはつながらず)。口コミ(2022年10月〜2026年10月): Yamazoe Village (Nara) の野菜と Wakayama から直送の魚の定食、生姜焼き定食、ポークステーキ定食 (ねぎソース)、Juhosai の定食 (オイスターソース) 1200円、煮魚定食1100円、魚のソテー定食、焼き魚定食、生姜の鶏むね、野菜炒め定食、野菜カレー、アヒージョ定食、日替わり、おまかせ、夜は100円増し、ひじきや雑穀や季節の混ぜご飯、サラダ、小鉢2品、平日12時10分には満席、マスターがひとりで調理、スタッフも親切、店先や店内で野菜を販売、回数券あり、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B459424865/', R + 'B460782886/', R + 'B472834448/', R + 'B474338796/', R + 'B506633944/', R + 'B517884530/', R + 'B518410484/', R + 'B525562033/', R + 'B532265829/', R + 'B538254033/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at your seat; staff take orders in seat order, so wait to be asked (November 2023). Cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区新町1-34-20 ノーブルスクエア新町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May 2025–October 2026. The listed website nunomenosato.net did not resolve (2026-10-30).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目34番20号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B459424865/', R + 'B518410484/', R + 'B532265829/'],
    price_note: 'Prices from November 2025 and July 2026 reviews; the full list is from a December 2022 review (evening +¥100).', last_checked: TODAY, items: [
      it('', '', 'Juhosai set (stir-fry of ten ingredients in oyster sauce)', '¥1,200', 'Set meals', 'ask', 'no', 'November 2025; ¥1,100 in December 2022.', 'juhosai'),
      it('', '', 'Simmered fish set', '¥1,100', 'Set meals', 'ask', 'no', 'July 2026: rice, pickles, vinegared dish, miso soup, salad.', 'nizakana'),
      it('', '', 'Ginger pork set', '¥1,100', 'Set meals', 'ask', 'no', 'January 2024.', 'shogayaki'),
      it('', '', 'Sautéed fish set', '¥1,200', 'Set meals', 'ask', 'no', 'October 2023, with green-onion sauce.', 'fish_saute'),
      it('', '', 'Pork steak set (green-onion sauce)', '¥1,100', 'Set meals', 'ask', 'no', 'December 2022.', 'pork_steak'),
      it('', '', 'Vegetable curry', '¥1,000', 'Set meals', 'ask', 'ask', 'December 2022.', 'veg_curry'),
      it('', '', 'Stir-fried vegetable set', '¥1,000', 'Set meals', 'ask', 'ask', 'December 2022.', 'yasai_itame'),
    ] }, {
    cuisine: 'Yamazoe Village (Nara) の野菜と Wakayama から直送の魚の定食屋 (18席)・1000〜1500円ほどの定食に、ひじきや雑穀や季節の混ぜご飯、味噌汁、サラダ、野菜の小鉢2品: 生姜焼き、ねぎソースのポークステーキ、Juhosai (オイスターソースの炒め物)、煮魚、魚のソテー、焼き魚、生姜の鶏むね、野菜炒め、野菜カレー、アヒージョ、日替わり、おまかせ・夜も同じ定食とおまかせ、お酒・日本酒、焼酎、ワイン',
    neighborhood: '新町1-34-20 ノーブルスクエア新町 1F。西大橋駅から約360m',
    gf_detail: '要確認。グルテンの情報なし。料理には醤油やオイスターソースを使い、カレーもある。',
    vegan_detail: '要確認。野菜炒め定食や野菜カレーはあるが、味噌汁、たれ、小鉢に魚のだしを使うかどうかの情報はなく、ほとんどの定食は豚、鶏、魚が中心。',
    notes: '[定食・新町、奈良の村の野菜たっぷりの定食] カウンターとテーブル3卓の清潔な小さな定食屋。野菜は奈良の Yamazoe Village から、魚は Wakayama から直送で、その野菜を店先でも売っている。どの定食も野菜が山盛りで、野菜のドレッシングのサラダ、わさびの葉のおひたしやしらたきの炒め物、わかめなどの小鉢2品、ひじきや雑穀や旬の野菜の混ぜご飯が付く。人気は生姜焼き、ねぎソースのポークステーキ、煮魚、そして数えきれないほど野菜が入ったオイスターソースの炒め物 Juhosai。マスターがひとりで調理するので混むと待つこともあり、平日は12時10分には会社員で満席。マスターもスタッフも親切という声。現金のみ。',
  });
}

// ================================================================ アグー専門店 白いとんかつ花ひらく 四ツ橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27151564/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://hanahiraku-yotsubashi.com/'; const SITE_EN = SITE + 'en';
  const D = day(['18:30', '23:00']);
  put({
    id: 'osaka_hanahiraku_agu_tonkatsu_shinmachi', name: 'アグー専門店 白いとんかつ花ひらく 四ツ橋店 (Aguu Senmon Ten Shiroi Tonkatsu Hana Hiraku Yotsubashi ten)', category: 'OMNI',
    lat: 34.677167, lng: 135.491372, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the house specialty is breaded, fried tonkatsu, and the courses add curry and minced cutlet; no gluten information from the shop.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Agu-pork specialist; the curry is simmered from Agu pork bones and the sides include dashi omelette.',
    hours_raw: 'From 1 November 2026: course menu by reservation only, one dinner sitting from 18:30, up to 7 guests a day; bookings for the next month open from the 20th to the end of each month (Tabelog notice). Closed Tuesday and Wednesday (Tabelog; shop site). Until October 2026 the shop also served lunch 11:00–15:00 (last order 14:00) and dinner 18:00–23:00 (last order 21:00) (Tabelog; shop site). Same-day bookings and whole-shop hire by phone; children who cannot eat a full course are asked not to come; no strong perfume or fabric softener; BYO drinks allowed (Tabelog). Payment: Tabelog lists no cards or e-money but PayPay, Rakuten Pay and au PAY; the shop site lists cards (VISA, Master, JCB, AMEX, Diners, UnionPay), e-money and QR — check when booking. 7 counter seats at a single cypress slab; non-smoking (Tabelog; shop site). Opened here 1 November 2025 (Tabelog; the shop site says 31 October 2025) after moving from Fuse (November 2025 review).',
    hours: { 0: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 2-17-5, GATE80 Shinsaibashi WEST III — 4 min from Nishi-Ohashi Stn (Exit 1), 6 min from Nishi-Nagahori Stn (Exit 1)',
    cuisine: 'Okinawan Agu-pork specialist: "white" tonkatsu fried slowly below 130°C, Agu shabu-shabu and pot-cooked rice at a 7-seat counter · about 14–15 kinds of Agu from Okinawa, Ishigaki and nearby islands, aged in-house 14 days or more · courses: tonkatsu tastings of tenderloin, loin, mille-feuille and chuck eye roll; shabu-shabu with three sauces (duck broth, garlic-chive soy, Arima-sansho ponzu) plus tonkatsu ¥4,800 · dashi-maki omelette, homemade pickles, miso soup with Okinawan mozuku, black curry simmered for 30 hours from Agu bones, white-miso pudding with brown sugar · until October 2026 also lunch sets: two-cut tonkatsu gozen ¥2,750, thick loin white tonkatsu with black curry ¥1,500, 300 g Agu pork steak ¥3,000, hamburg steak · Orion beer, sake, shochu, wine',
    website: SITE, gmaps: gm('白いとんかつ花ひらく 四ツ橋店'), menu_url: null,
    notes: "[Tonkatsu · Shinmachi, a seven-seat counter for Okinawan Agu pork] The shop of the pork-specialist cook known on social media as Gotton, who moved it from Fuse to Shinmachi in November 2025. It serves only Okinawan Agu pork, some 14 or 15 kinds from Okinawa, Ishigaki and the nearby islands, aged in-house for two weeks or more, down to rare purebred lines such as Manten Aguu Kuro Maru. The cutlets are \"white\": fried slowly below 130°C in a light crumb, so the coating stays pale and the pink meat juicy, with the sweet, clean fat diners keep mentioning. Courses pair tasting cuts with Agu shabu-shabu, three sauces including a sansho ponzu, a dashi omelette, rice cooked per person, and black curry simmered for 30 hours from the bones; finish with the white-miso pudding. From November 2026 there is no lunch: one 18:30 seating for seven, courses only, booked a month ahead.",
    chef_bio: { chef_name: '中野 順一 (Junichi Nakano, per the shop site\'s English page)', roles: ['Chef (profile on the shop site, which calls it "the shop of pork-specialist cook Gotton (SNS recipe account)")'], origin: 'Born and raised in Osaka (shop site)', background: 'Pork-specialist cook who posts home-cooking recipes on social media and has handled more than 100 domestic brand pigs (shop site); an August 2026 review gives 110,000 followers. Ran Hana Hiraku in Fuse before moving it here in November 2025 (November 2025 review). Takes part in study sessions with the pork expert Professor Kuwahara, per a June 2026 review.', philosophy: 'Tasted rare brand pigs across Japan and was captivated by Agu; cooks on a base of Japanese cuisine; "the pursuit of how to apply heat still has no end in sight" (shop site).', specialty: 'Low-temperature "white" Agu tonkatsu; Agu shabu-shabu; Agu-bone black curry.',
      anecdotes: [
        { text: '"Since there was no cooking equipment to evenly heat it at 80 degrees (unlike in Fuse), it was prepared in a balloon for a water bath." — the white-miso pudding, November 2025, lunch course ¥3,900.', source: R + 'B517350191/' },
        { text: '"After the meal, while chatting with the chef, I learned that \'someone interested in opening a tonkatsu restaurant in Okinawa came to study here.\'" — June 2026, Manten Aguu Kuro Maru course.', source: R + 'B519952930/' },
      ],
      japanese_sources_summary: '食べログ: アグー専門店 白いとんかつ花ひらく 四ツ橋店、大阪市西区新町2-17-5 GATE80心斎橋WESTⅢ、西大橋駅1番出口から徒歩4分、西長堀駅1番出口から徒歩6分、阿波座駅2番出口から徒歩8分、月・木〜日・祝11:00〜15:00・18:00〜23:00、火・水休み、2026年11月1日からは予約のコースのみ、18:30から1日7名まで、翌月分の予約は毎月20日から月末まで、当日予約と貸切は電話で、コースを食べられない子供は遠慮を、強い香りは控えて、持ち込み可、カード不可、PayPay・楽天ペイ・au PAY可、7席 (カウンター)、禁煙、オープン日2025年11月1日。店のサイト: 豚肉専門料理人ごっとんのお店 (SNS のレシピアカウント)、国内100種類以上のブランド豚、低温でじっくり揚げたとんかつ、ヒノキの一枚板のカウンター、2025年10月31日オープン、中野 順一 (大阪生まれ大阪育ち、日本全国の希少銘柄豚を食べ歩きアグーに取り憑かれる、和食が基礎)。口コミ(2025年11月〜2026年10月): Fuse から移転、Okinawa・Ishigaki などのアグー14〜15種を14日以上熟成、130℃以下で揚げる白いとんかつ、シャトーブリアン・ロース・ミルフィーユ・肩ロース、しゃぶしゃぶとたれ3種 (鴨だし、にらの醤油、Arima の山椒のポン酢)、だし巻き、自家製の漬物、もずくの味噌汁、アグーの骨を30時間煮込んだ黒カレー、白味噌のプリン、とんかつ御膳2750円、黒カレーのかつカレー1500円、アグーのステーキ300g 3000円、しゃぶしゃぶととんかつのコース4800円、フォロワー11万人。',
      confidence: 'medium', sources: [TB, SITE, SITE_EN, R + 'B517350191/', R + 'B519952930/', R + 'B525464263/', R + 'B527864264/', R + 'B531592548/', R + 'B533990624/', R + 'B534454334/', R + 'B538125023/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses by reservation only from November 2026; book online or by phone; the shop site has an English page and an earlier diner noted hiragana on the menu (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町2-17-5 GATE80心斎橋WESTⅢ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current with a notice of the November 2026 course-only change; reviews dated November 2025–October 2026; shop site live.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町二丁目17番5号 (go) 8m. Same lot number as 焼肉 Union (osaka_yakiniku_union_shinmachi, address_ja "大阪府大阪市西区新町2-17-5 アクトワン新町 1F"), whose Tabelog point is about 7 m away; the building names differ, so not marked block; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B517350191/', R + 'B527864264/', R + 'B531592548/', R + 'B533990624/', R + 'B534454334/'],
    price_note: 'Prices from November 2025–August 2026 reviews; the lunch items ended with the course-only change of 1 November 2026, and course prices after it are not listed.', last_checked: TODAY, items: [
      it('', '', 'Shabu-shabu and white tonkatsu course', '¥4,800', 'Course', 'no', 'no', 'May 2026: three shabu-shabu cuts and sauces, three tonkatsu, dashi omelette, curry, miso pudding.', 'shabu_katsu_course'),
      it('', '', 'Agu lunch course (shabu-shabu, tonkatsu, omelette, black curry)', '¥3,900', 'Course', 'no', 'no', 'November 2025.', 'lunch_course'),
      it('', '', 'White tonkatsu gozen, two Agu cuts', '¥2,750', 'Lunch (to October 2026)', 'no', 'no', 'July 2026: Chateaubriand and loin, pot rice, tamagoyaki, pickles.', 'katsu_gozen'),
      it('', '', 'Thick-cut loin white tonkatsu with black curry', '¥1,500', 'Lunch (to October 2026)', 'no', 'no', 'April and August 2026.', 'katsu_curry'),
      it('', '', 'Agu pork steak, 300 g (reserve ahead)', '¥3,000', 'Lunch (to October 2026)', 'ask', 'no', 'August 2026; takes about an hour, so reserve.', 'pork_steak'),
    ] }, {
    cuisine: '沖縄のアグー豚の専門店: 130℃以下でじっくり揚げる白いとんかつ、アグーのしゃぶしゃぶ、一人ずつ炊くご飯、カウンター7席・Okinawa、Ishigaki と周辺の島のアグー14〜15種を店で14日以上熟成・コース: ヒレ、ロース、ミルフィーユ、肩ロースのとんかつの食べ比べ、鴨だし、にらの醤油、Arima の山椒のポン酢の3種のたれのしゃぶしゃぶととんかつのコース4800円・だし巻き、自家製の漬物、沖縄のもずくの味噌汁、アグーの骨を30時間煮込んだ黒カレー、黒糖をかける白味噌のプリン・2026年10月までは昼の定食も: 2種の部位のとんかつ御膳2750円、厚切りロースの白いとんかつの黒カレー1500円、アグーのステーキ300g 3000円、ハンバーグ・Orion のビール、日本酒、焼酎、ワイン',
    neighborhood: '新町2-17-5 GATE80心斎橋WESTⅢ。西大橋駅1番出口から徒歩4分、西長堀駅1番出口から徒歩6分',
    gf_detail: 'グルテンフリーではありません。看板はパン粉の衣で揚げるとんかつで、コースにはカレーやミンチカツも。店からのグルテンの情報はなし。',
    vegan_detail: 'ヴィーガンではありません。アグー豚の専門店で、カレーはアグーの骨から煮込み、だし巻きも付く。',
    notes: '[とんかつ・新町、沖縄のアグー豚の7席のカウンター] SNS で「ごっとん」として知られる豚肉専門の料理人の店で、2025年11月に Fuse から新町へ移った。使うのは沖縄のアグー豚だけで、Okinawa、Ishigaki と周辺の島の14〜15種を店で2週間以上熟成させ、両親とも純血の Manten Aguu Kuro Maru のような希少な系統まで。とんかつは「白い」とんかつで、軽いパン粉で130℃以下でじっくり揚げるので衣は白いまま、中はピンクでジューシー。甘くてしつこくない脂がよく話題になる。コースは部位の食べ比べにアグーのしゃぶしゃぶ、山椒のポン酢を含む3種のたれ、だし巻き、一人ずつ炊くご飯、骨から30時間煮込んだ黒カレー。締めは白味噌のプリン。2026年11月からは昼の営業はなく、18:30からの1回7名、コースのみで、翌月分を予約する。',
  });
}

// ================================================================ べつばら
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27073402/'; const R = TB + 'dtlrvwlst/';
  const L = day(['13:00', '19:00']); const F = day(['13:00', '18:00']);
  put({
    id: 'osaka_betsubara_shinmachi', name: 'べつばら (Betsubara)', category: 'OMNI',
    lat: 34.677406, lng: 135.491485, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the shaved ice itself is plain ice with fruit syrups, but many versions carry tiramisu cream, custard, chocolate or mochi, and the shop is also listed for baked goods.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Most kakigori use milk syrup, mascarpone, cream or cheese custard; an August 2026 diner had a peach kakigori with 100% peach syrup and "no milk syrup", so a fruit-only bowl may be possible.',
    hours_raw: 'Wed, Thu, Sat 13:00–19:00; Fri 13:00–18:00; closed Sun, Mon, Tue; last order 18:00 (Tabelog). Reservation only: book online through the Airreserve link on the shop\'s Instagram (Tabelog); August and October 2026 diners describe booking the day before, with a 21:00 cut-off. Temporary closures and changes are posted on Instagram; diners report a Sunday visit (June 2026) and a special evening opening for the nearby park\'s Bon Odori (September 2026). No cards or e-money; PayPay (Tabelog). 10 seats; non-smoking; takeout; children welcome (Tabelog). Opened 29 May 2013 (Tabelog).',
    hours: { 2: L, 3: L, 4: F, 5: L }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 2-17-3, Shinmachi Apartment 1F — about 300 m north of Nishi-Ohashi Stn',
    cuisine: 'Year-round kakigori shop with fresh-fruit syrups made from seasonal fruit (10 seats) · summer peach (100% peach syrup blended to order), peach oolong milk tea, watermelon, melon mascarpone with kirsch cream, chocolate-mint melon, American and Rainier cherry, apricot vanilla milk, red shiso and Shiranui early mikan · autumn pear or fig "cheese tea" with Earl Grey syrup and cheese sauce, grape, pistachio · winter and spring strawberry vanilla pistachio, strawberry cream daifuku with mochi paste, lemon tiramisu, sakura mochi · condensed milk extra · warm tea served alongside',
    website: null, gmaps: gm('べつばら 新町'), menu_url: null,
    notes: "[Sweets · Shinmachi, reservation-only kakigori built on fresh fruit] A small, bright shaved-ice shop north of Nishi-Ohashi Station, open since 2013, where the menu turns with the fruit season and the bookings go fast. In summer the peach is the prize: the fruit is blended to order into a 100% peach syrup sweeter than the peaches on top, and it often sells out by evening. Around it come watermelon, melon with mascarpone, chocolate-mint melon and cherries; autumn brings pear or fig with the shop's signature \"cheese tea\" of Earl Grey syrup and cheese sauce; winter and spring bring strawberries, pistachio and mochi-paste versions. A June 2026 diner rated the pistachio the best pistachio kakigori ever eaten. The room is quiet enough that the loudest sound is the ice being shaved, and warm tea comes in a small paper cup. Book the day before through the link on the shop's Instagram.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Kakigori shop open since 29 May 2013 (Tabelog), open all year, with reservations through Airreserve (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Peach kakigori; Earl Grey "cheese tea" kakigori with seasonal fruit; pistachio.',
      anecdotes: [
        { text: 'The peaches went into the mixer after the order: "The 100% peach syrup was shockingly sweet!" — August 2026, peach kakigori ¥2,100.', source: R + 'B533269514/' },
        { text: '"The shop is quiet, with only the sound of the phone ringing and the ice being shaved, so I don\'t feel awkward dining solo at all." — February 2024, double-cherry mascarpone.', source: R + 'B479336870/' },
      ],
      japanese_sources_summary: '食べログ: べつばら、大阪市西区新町2-17-3 新町アパート 1F、西大橋駅から約300m、水・木・土13:00〜19:00、金13:00〜18:00、日・月・火休み、完全予約制 (Instagram の Airreserve から)、臨時休業は Instagram で、カード・電子マネー不可、PayPay可、10席、禁煙、テイクアウト可、子供可、オープン日2013年5月29日、ジャンルはかき氷・洋菓子・パン。口コミ(2024年2月〜2026年10月): 季節の果物のシロップのかき氷、桃 (注文後にミキサーで果汁100%のシロップ) 2100円、桃のウーロンミルクティー、すいか、メロンとマスカルポーネ1700円、チョコミントメロン1600円、アメリカンチェリー1900円、杏のバニラミルク、赤紫蘇と Shiranui の早生みかん1400円、梨や無花果のチーズティー (アールグレイのシロップとチーズソース) 1600円、ピスタチオ、ぶどう、いちごのバニラピスタチオ1600円、いちごの生クリーム大福、レモンのティラミス、桜餅、練乳50円、予約は前日の21時 (2026年8月・10月)、桃は夕方に売り切れることも、近くの公園の盆踊りの日は夜も営業、日曜の来店も、静かな店内、紙コップの温かいお茶、明るいスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B25803691/', R + 'B467108995/', R + 'B467971064/', R + 'B479336870/', R + 'B490835451/', R + 'B527029467/', R + 'B531446272/', R + 'B533269514/', R + 'B534023571/', R + 'B534068558/', R + 'B534291425/', R + 'B537485279/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only, online via the link on the shop\'s Instagram; no walk-in queue (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町2-17-3 新町アパート 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated to October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町二丁目17番3号 (go) 30m; OSM node/5938245169 「べつばら」 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B25803691/', R + 'B467108995/', R + 'B490835451/', R + 'B531446272/', R + 'B533269514/', R + 'B534291425/'],
    price_note: 'Prices from October 2025–September 2026 reviews; the menu changes with the fruit season.', last_checked: TODAY, items: [
      it('', '', 'Peach kakigori (100% peach syrup, summer)', '¥2,100', 'Kakigori', 'ask', 'ask', 'August 2026; no milk syrup on this one.', 'peach'),
      it('', '', 'Melon mascarpone kakigori', '¥1,700', 'Kakigori', 'ask', 'no', 'July 2026; kirsch whipped cream.', 'melon_mascarpone'),
      it('', '', 'Chocolate-mint melon kakigori', '¥1,600', 'Kakigori', 'ask', 'no', 'June 2026; mint milk.', 'chocomint_melon'),
      it('', '', 'American cherry kakigori', '¥1,900', 'Kakigori', 'ask', 'ask', 'July 2026.', 'cherry'),
      it('', '', 'Red shiso and Shiranui early mikan kakigori', '¥1,400', 'Kakigori', 'ask', 'ask', 'August 2026.', 'shiso_mikan'),
      it('', '', 'Pear cheese tea kakigori (Earl Grey syrup, cheese sauce)', '¥1,600', 'Kakigori', 'ask', 'no', 'October 2025.', 'pear_cheesetea'),
      it('', '', 'Strawberry vanilla pistachio kakigori', '¥1,600', 'Kakigori', 'ask', 'no', 'April 2026; vanilla milk.', 'strawberry_pistachio'),
    ] }, {
    cuisine: '季節の果物のシロップで一年中出すかき氷の店 (10席)・夏: 注文後にミキサーにかける果汁100%のシロップの桃、桃のウーロンミルクティー、すいか、メロンとマスカルポーネとキルシュのクリーム、チョコミントメロン、アメリカンチェリーとレーニアチェリー、杏のバニラミルク、赤紫蘇と Shiranui の早生みかん・秋: アールグレイのシロップとチーズソースの梨や無花果のチーズティー、ぶどう、ピスタチオ・冬から春: いちごのバニラピスタチオ、餅のペーストのいちごの生クリーム大福、レモンのティラミス、桜餅・練乳は追加・温かいお茶付き',
    neighborhood: '新町2-17-3 新町アパート 1F。西大橋駅の北、約300m',
    gf_detail: '要確認。グルテンの情報なし。氷自体は果物のシロップだけだが、ティラミスのクリーム、カスタード、チョコレート、餅をのせるものが多く、店は洋菓子・パンでも登録されている。',
    vegan_detail: '要確認。多くのかき氷はミルクシロップ、マスカルポーネ、クリーム、チーズカスタードを使う。2026年8月には果汁100%のシロップで「ミルクシロップなし」の桃のかき氷を食べた人がいるので、果物だけのものはできるかもしれない。',
    notes: '[スイーツ・新町、果物が主役の予約制のかき氷] 西大橋駅の北にある2013年からの明るく小さなかき氷の店。メニューは果物の季節で変わり、予約はすぐ埋まる。夏の目玉は桃で、注文を受けてからミキサーにかける果汁100%のシロップは上にのせた桃より甘いほど。夕方には売り切れることも多い。ほかにすいか、メロンとマスカルポーネ、チョコミントメロン、チェリー。秋は梨や無花果に、店の名物のアールグレイのシロップとチーズソースの「チーズティー」。冬から春はいちご、ピスタチオ、餅のペーストを使うもの。2026年6月には、ピスタチオを今まででいちばんのピスタチオのかき氷という声も。店内は静かで、いちばん大きな音は氷を削る音。温かいお茶は小さな紙コップで。予約は前日に、店の Instagram のリンクから。',
  });
}

save();
