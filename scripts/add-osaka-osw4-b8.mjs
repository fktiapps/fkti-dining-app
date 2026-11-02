// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 8.
//   + しゃにむに 心斎橋本店 SHANIMUNI (binchotan robata and kaiseki courses with private rooms near Nagahoribashi)
//   + かもふく Kamofuku (Kyoto duck hot pot, grilled shabu and handmade soba in Hozenji Yokocho)
//   + フランス料理 レ・セレブリテ ホテル日航大阪 Les Celebrites (classic hotel French, open Friday to Sunday and holidays)
//   + 象印食堂 大阪本店 Zojirushi Shokudo (rice-cooker maker's restaurant: three rices, refills, set meals; since 2018)
//   Chain check: SHANIMUNI one shop found (search, 2026-11-01). Kamofuku one shop. Les Celebrites is the French restaurant
//   of Hotel Nikko Osaka. Zojirushi Shokudo: this main shop and 梅田店 (27152910 in the crawl), neither in data; the
//   listing links dynac-japan.com. None of the four is in data/osaka.json (grep by name, Tabelog id and address, 2026-11-01).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ しゃにむに 心斎橋本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27008095/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '14:00'], D = ['17:30', '22:00'];
  const WD = day(L, D), SA = day(D);
  put({
    id: 'osaka_shanimuni_shinsaibashi', name: 'しゃにむに 心斎橋本店 (SHANIMUNI Shinsaibashi)', category: 'OMNI',
    lat: 34.673882, lng: 135.505523, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking (the listing asks guests to state allergies). No gluten information. Binchotan-grilled skewers and eel come with tare, and the courses run through tempura, sushi and pudding; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of fish, chicken skewers, eel and wagyu; the lunch is grilled meat on rice.',
    hours_raw: 'Mon–Fri lunch 11:30–14:00; Mon–Sat and holidays dinner 17:30–22:00 (last order food 21:00, drinks 21:30); closed Sunday and some irregular days (Tabelog). Reservations accepted, same-day too; say whether you want the counter or a private room; tell the shop about allergies and dislikes; two-hour limit at busy times; no children below elementary-school age; cancel at least two days ahead (Tabelog). Appetiser ¥770 and 10% service at dinner (Tabelog). Cards, e-money and PayPay (Tabelog). 30 seats: a counter of 9 and four private rooms, sunken seating, for 2 up to 20; smoking only in the private rooms, and not at lunch (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-3-19, 五興ビル 1F, a quiet back street — 3 min from Nagahoribashi Stn exit 7',
    cuisine: 'Japanese robata of seasonal ingredients from around Japan grilled slowly over chosen binchotan (Tabelog shop text) · courses: basic ¥9,900, special kaiseki "Kotobuki" ¥12,100, seasonal "Roku" kaiseki (Tabelog) · à la carte: sashimi, charcoal-grilled chicken skewers, harami skewers, grilled eel, sirloin cap, octopus simmered with daikon, potato salad, soft-roe tempura, temari sushi, oyakodon (2025–2026 reviews) · wasanbon pudding, also to take away, sometimes sold out (July 2026) · lunch on weekdays: grilled-meat set ¥1,800 (May 2026), a box of harami and rib over rice with rice in sizes (February 2026), served with rooibos tea instead of water (October 2026) · a long list of sake and shochu, e.g. coarse peach liqueur',
    website: null, gmaps: gm('しゃにむに 心斎橋本店'), menu_url: null,
    notes: '[Robata · Higashi-Shinsaibashi, private rooms by the charcoal] A stylish, unmarked-looking robata restaurant on a quiet back street near Nagahoribashi: a counter in front of the binchotan where the chef grills, and four sunken private rooms behind it for two to twenty. Dinner is courses (¥9,900–12,100) or à la carte sashimi, skewers, grilled eel and seasonal small plates with a long sake list; finish with the wasanbon pudding. Weekday lunch is a grilled-meat box over rice for about ¥1,800. Diners describe a calm room, attentive staff and a gracious owner (2026). No young children; closed Sundays; add a ¥770 appetiser and 10% service at dinner.',
    chef_bio: { chef_name: null, roles: ['Owner and chef, unnamed in the sources read'], origin: null, background: 'Per the Tabelog shop text: charcoal grilling over binchotan, a traditional Japanese method, with seasonal food gathered from around Japan and private rooms for up to 20. An October 2026 diner describes a thoughtful, beautiful owner and the chef working behind the counter; a January 2026 diner praised the women on the floor staff and a staff member who ran after the diner to return a forgotten item.', philosophy: '"Enjoy the quality of the ingredients, the heart of the griller and the grilled food while it is still hot" (Tabelog shop text, translated).', specialty: 'Binchotan-grilled skewers and eel; seasonal kaiseki courses; wasanbon pudding.',
      anecdotes: [
        { text: '"I also appreciate the staff member who ran after me to return my forgotten item." — January 2026, a sake and sushi course with extra skewers.', source: R + 'B521105234/' },
        { text: '"Instead of plain water, they offer delicious rooibos tea!" — October 2026, a third lunch visit.', source: R + 'B523244244/' },
        { text: '"The only downside was that the Wasanbon Pudding for takeout was sold out" — July 2026, a colleague\'s wedding celebration.', source: R + 'B531194843/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): しゃにむに 心斎橋本店 (SHANIMUNI)、居酒屋・焼き鳥・うなぎ、大阪市中央区東心斎橋1-3-19 五興ビル 1F、長堀橋駅7番出口から徒歩3分、心斎橋駅6番出口から徒歩5分、月〜金11:30〜14:00、月〜土・祝17:30〜22:00 (L.O. 料理21:00、ドリンク21:30)、日曜休み、不定休あり、予約は当日も可、カウンターか個室か確認を、アレルギーや苦手なものは事前に、混雑時は2時間制、未就学児は不可、キャンセルは2日前まで、先付770円とサービス料10%、カード・電子マネー・PayPay 可、30席 (カウンター9、個室4)、個室のみ喫煙可、ランチは禁煙、厳選した備長炭でじっくり焼く、全国の旬の食材、基本のコース9,900円、特選会席「Kotobuki」12,100円、季節限定の会席「Roku」。口コミ(2025年2月〜2026年10月): 刺身、炭火の串、ハラミ串、うなぎ、イチボ、タコと大根の煮物、ポテトサラダ、白子の天ぷら、手まり寿司、親子丼、和三盆プリン、平日ランチの焼肉定食1,800円、ハラミとカルビのお重、水のかわりにルイボスティー、カウンターの奥に掘りごたつの個室、気配りのあるきれいなオーナー。',
      confidence: 'medium', sources: [TB, R + 'B224646093/', R + 'B351559848/', R + 'B501141480/', R + 'B521105234/', R + 'B521779336/', R + 'B523244244/', R + 'B523849018/', R + 'B525160801/', R + 'B527762390/', R + 'B528902419/', R + 'B531194843/', R + 'B531431255/', R + 'B534216037/', R + 'B536688389/', R + 'B538233656/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses booked ahead, or à la carte at the counter (2026). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog listing: "If you have any food allergies or dislikes, please let us know."'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-3-19 五興ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目3番19号 (go) 18m. Nearest record is ペッシェ・ロッソ (osaka_pesce_rosso_higashi_shinsaibashi, 東心斎橋1-3-18) 23 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B528902419/'],
    price_note: 'Course prices from the Tabelog listing (tax included; plus ¥770 appetiser and 10% service); lunch set from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Basic course', '¥9,900', 'Course', 'ask', 'no', 'Tabelog listing.', 'basic_course'),
      it('', '', 'Special kaiseki "Kotobuki" course', '¥12,100', 'Course', 'ask', 'no', 'Tabelog listing.', 'kotobuki_course'),
      it('', '', 'Grilled-meat lunch set', '¥1,800', 'Lunch', 'ask', 'no', 'May 2026 review.', 'yakiniku_lunch'),
      it('和三盆プリン', '', 'Wasanbon pudding (also to take away)', '', 'Dessert', 'ask', 'no', 'January and July 2026 reviews.', 'wasanbon_pudding'),
    ] }, {
    cuisine: '全国の旬の食材を厳選した備長炭でじっくり焼く炉端 (食べログの店の紹介)・コース: 基本のコース9,900円、特選会席「Kotobuki」12,100円、季節限定の会席「Roku」(食べログ)・アラカルト: 刺身、炭火の鶏の串、ハラミの串、うなぎの蒲焼き、イチボ、タコと大根の煮物、ポテトサラダ、白子の天ぷら、手まり寿司、親子丼 (2025〜2026年の口コミ)・持ち帰りもできる和三盆プリン、売り切れることも (2026年7月)・平日ランチ: 焼肉定食1,800円 (2026年5月)、ハラミとカルビをご飯にのせたお重、ご飯の量を選べる (2026年2月)、水のかわりにルイボスティー (2026年10月)・日本酒と焼酎が豊富、たとえばAragoshi Momoshu',
    neighborhood: '東心斎橋1-3-19 五興ビル 1階、静かな裏通り。長堀橋駅7番出口から徒歩3分',
    gf_detail: '予約時に要確認 (食べログではアレルギーを伝えるよう案内)。グルテンの情報なし。備長炭の串やうなぎはタレで、コースには天ぷら、寿司、プリンもある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚、鶏の串、うなぎ、和牛のコースで、ランチはご飯にのせた焼肉。',
    notes: '[炉端・東心斎橋、炭火のそばの個室] 長堀橋近くの静かな裏通りにある、外からは何の店かわかりにくいおしゃれな炉端の店。備長炭の前で料理人が焼くカウンターと、その奥に2〜20名の掘りごたつの個室が4つ。夜はコース (9,900〜12,100円) か、刺身、串、うなぎの蒲焼き、季節の小皿をアラカルトで、日本酒も豊富。締めは和三盆プリンを。平日ランチは焼肉をのせたお重で1,800円ほど。2026年の口コミでは落ち着いた店内、気配りのあるスタッフと品のあるオーナー。未就学児は不可、日曜休み、夜は先付770円とサービス料10%。',
  });
}

// ================================================================ かもふく
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27073759/'; const R = TB + 'dtlrvwlst/';
  const MO = day(['17:00', '23:00']), TS = day(['11:30', '23:00']);
  put({
    id: 'osaka_kamofuku_hozenji', name: 'かもふく (Kamofuku)', category: 'OMNI',
    lat: 34.668186, lng: 135.50264, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the meal finishes with handmade soba (or thick somen) and the hot pot broth and dips are soy-based; no gluten-free soba described. Ask when booking about allergies, as the listing invites.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: duck in every course and a duck or dashi broth for the soba.',
    hours_raw: 'Tue–Sun 11:30–23:00; Mon 17:00–23:00 by reservation only, courses only; last order 22:00 (Tabelog; October 2026 review). Reservations accepted online or by phone; ask by phone if online shows full; two guests sit at the counter and three or more in a private room unless you ask; no charge for hot pot or course orders; tell the shop about allergies and dislikes (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and PayPay (Tabelog). 52 seats over two floors, counter, tatami and sunken private rooms for 2 to 20; non-smoking (Tabelog). The second floor is shared with a neighbouring okonomiyaki restaurant (September 2026).',
    hours: { 0: MO, 1: TS, 2: TS, 3: TS, 4: TS, 5: TS, 6: TS }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-1-18, エチゲンビル 1F–2F, in the north alley of Hozenji Yokocho — 3 min from Namba Stn',
    cuisine: 'Kyoto duck shipped direct from Kyoto and handmade soba (Tabelog shop text) · Kyoto duck hot pot course of six dishes ¥6,710; duck hot pot course with free drinks ¥7,500; grilled-shabu course with free drinks ¥7,500 (Tabelog; September 2026) · Kyoto duck and Kujo green-onion grilled shabu-shabu with ponzu or house sesame sauce · duck sukiyaki · finish with soba, zosui or thick somen · duck tataki, duck prosciutto, duck chawanmushi, all-parts duck skewers (thigh, negi, heart, gizzard, breast, liver, skin), tsukune · lunch: oyakodon, Kyoto duck bukkake soba set, Kyoto duck roast box with a mini soba, sudachi soba · sake chosen by the owner (July 2026)',
    website: null, gmaps: gm('かもふく 法善寺横丁'), menu_url: null,
    notes: '[Duck and soba · Hozenji Yokocho] A duck house in the north alley of Hozenji Yokocho serving Kyoto duck sent from Kyoto, with private rooms upstairs. At dinner the order is a duck course: tataki and duck ham, then grilled shabu-shabu of duck and Kujo green onion on a teppan (staff show you how), or the duck hot pot, finished with the handmade soba. Lunch is calmer and cheaper: oyakodon, a roast-duck box with a mini soba, or duck bukkake soba. Book for the private rooms; Monday nights are courses by reservation only. Expect ¥6,000–8,000 a head at dinner.',
    chef_bio: { chef_name: null, roles: ['Owner who chooses the sake (July 2026 review); unnamed'], origin: null, background: 'Per the Tabelog shop text: fresh Kyoto duck shipped directly from Kyoto, Kyoto duck hot pot, grilled shabu-shabu and sukiyaki, handmade soba and duck zosui at reasonable prices in Hozenji Yokocho. A July 2026 diner notes the sake was personally chosen by the owner.', philosophy: null, specialty: 'Kyoto duck grilled shabu-shabu; duck hot pot with handmade soba.',
      anecdotes: [
        { text: '"At first, the staff grilled it for us and showed us how to do it, which was very helpful." — September 2026, the grilled shabu-shabu course with free drinks for JPY 7,500.', source: R + 'B535372394/' },
        { text: '"It seems the second floor is shared by two restaurants, and I could smell okonomiyaki from the neighboring table..." — September 2026.', source: R + 'B536651387/' },
        { text: '"The selection of sake was personally curated by the owner, and it was very tasty." — July 2026, the Kyoto duck shabu-shabu course.', source: R + 'B531290172/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): かもふく、居酒屋・そば・鍋、大阪市中央区難波1-1-18 エチゲンビル 1〜2F、なんば駅から徒歩3分、千日前のラウンドワン横のアーケードを北へ、法善寺横丁の北側の路地の中ほど左手、火〜日11:30〜23:00、月17:00〜23:00 (予約のみ)、L.O. 22:00、予約可 (ネットで満席でも電話で空きがあることも)、2名はカウンター、3名以上は個室、鍋やコースはチャージなし、苦手なものやアレルギーは事前に、カード・電子マネー・PayPay 可、52席、個室 (2〜20名)、禁煙、京都から直送のKyoto の鴨、Kyoto の鴨鍋、Kyoto の鴨の焼きしゃぶ、Kyoto の鴨すき焼き、手打ちそば、鴨雑炊、Kyoto の鴨鍋コース6,710円、飲み放題付きコース7,500円。口コミ(2026年2月〜10月): Kujo ねぎと鴨の焼きしゃぶをポン酢か自家製ごまだれで、スタッフが焼き方を教えてくれる、鴨のたたき、鴨の生ハム、鴨の茶碗蒸し、鴨串、締めはそば・雑炊・太めのそうめん、ランチの親子丼、ぶっかけそば、鴨ロースの重とミニそば、月曜はコースのみ、オーナーが選んだ日本酒、2階は隣のお好み焼き店と共有。',
      confidence: 'medium', sources: [TB, R + 'B321067644/', R + 'B492827747/', R + 'B525712745/', R + 'B531113145/', R + 'B531290172/', R + 'B532849823/', R + 'B533065825/', R + 'B533478667/', R + 'B534792003/', R + 'B535372394/', R + 'B536651387/', R + 'B536827873/', R + 'B536880024/', R + 'B536893002/', R + 'B538249726/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff show you how to grill the duck at the table (September–October 2026). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog listing: "Please let us know if you have any food dislikes or allergies."'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-1-18 エチゲンビル 1F・2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.668097, 135.502636); GSI 大阪府大阪市中央区難波一丁目1番18号 (go) 10m. 法善寺横丁 やき然 (osaka_yakizen_hozenji, address_ja "大阪府大阪市中央区難波1-1-18") shares the address and is pinned 2 m from the Tabelog point, and a September 2026 diner smelled okonomiyaki from the shared second floor; 天ぷら天山 and 日本酒AWA (難波1-1-17) are 3 m away. So this pin uses the GSI point, about 9 m north of やき然; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535372394/'],
    price_note: 'Course prices from the Tabelog listing (tax included), the free-drinks course matched by a September 2026 review; lunch prices not seen.', last_checked: TODAY, items: [
      it('', '', 'Kyoto duck hot pot course (6 dishes)', '¥6,710', 'Course', 'no', 'no', 'Tabelog listing.', 'duck_nabe_course'),
      it('', '', 'Duck grilled-shabu course with 120 minutes of free drinks', '¥7,500', 'Course', 'no', 'no', 'September 2026 review; Tabelog.', 'yakishabu_course'),
      it('', '', 'Kyoto duck bukkake soba set (lunch)', '', 'Lunch', 'no', 'no', 'July 2026 reviews.', 'bukkake_soba'),
      it('', '', 'Kyoto duck roast box with a mini soba (lunch)', '', 'Lunch', 'no', 'no', 'July and October 2026 reviews.', 'duck_roast_box'),
      it('', '', 'Duck skewers, all parts', '', 'Skewers', 'ask', 'no', 'August 2026 review.', 'duck_skewers'),
    ] }, {
    cuisine: '京都から直送のKyoto の鴨と手打ちそば (食べログの店の紹介)・Kyoto の鴨鍋コース6品6,710円、飲み放題付きの鴨鍋コース7,500円、飲み放題付きの焼きしゃぶコース7,500円 (食べログ、2026年9月)・Kyoto の鴨とKujo ねぎの焼きしゃぶ、ポン酢か自家製ごまだれで・Kyoto の鴨すき焼き・締めはそば、雑炊、太めのそうめん・鴨のたたき、鴨の生ハム、鴨の茶碗蒸し、部位いろいろの鴨串 (もも、ねぎま、ハツ、砂肝、むね、レバー、皮)、つくね・ランチ: 親子丼、Kyoto の鴨のぶっかけそばのセット、ミニそばつきのKyoto の鴨ロースの重、sudachi そば・オーナーが選ぶ日本酒 (2026年7月)',
    neighborhood: '難波1-1-18 エチゲンビル 1・2階、法善寺横丁の北側の路地。なんば駅から徒歩3分',
    gf_detail: '実質グルテンフリーではありません。締めは手打ちそば (か太めのそうめん) で、鍋のだしやタレは醤油ベース。グルテンフリーのそばの説明はない。アレルギーは予約時に伝えるよう食べログで案内している。',
    vegan_detail: 'ヴィーガンではありません。どのコースも鴨で、そばも鴨やだしのつゆ。',
    notes: '[鴨とそば・法善寺横丁] 法善寺横丁の北側の路地にある鴨の店で、京都から届くKyoto の鴨を出し、2階に個室がある。夜は鴨のコースを。たたきや鴨の生ハムから、鉄板で焼く鴨とKujo ねぎの焼きしゃぶ (スタッフが焼き方を教えてくれる) か鴨鍋、締めは手打ちそば。ランチは落ち着いていて手頃で、親子丼、ミニそばつきの鴨ロースの重、鴨のぶっかけそば。個室なら予約を。月曜の夜は予約のみでコースだけ。夜はひとり6,000〜8,000円ほど。',
  });
}

// ================================================================ レ・セレブリテ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27000859/'; const R = TB + 'dtlrvwlst/';
  const FR = day(['11:30', '14:30'], ['17:30', '21:00']), SA = day(['11:30', '14:30'], ['17:30', '21:30']);
  put({
    id: 'osaka_les_celebrites_hotel_nikko', name: 'フランス料理 レ・セレブリテ ホテル日航大阪 (Les Celebrites)', category: 'OMNI',
    lat: 34.673981, lng: 135.49972, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Classic French courses with sauces, pâté en croûte, bread with two butters and a dessert trolley; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of foie gras, fish, wagyu, lamb or pork with butter and cream sauces.',
    hours_raw: 'Open only on Friday, Saturday, Sunday and holidays: lunch 11:30–14:30; dinner 17:30–21:00 (last order 20:30), on Saturday and the day before a holiday until 21:30 (last order 21:00); closed Monday to Thursday except holidays (Tabelog). Reservations accepted; with a seat-only booking you choose the meal on the day (Tabelog). Service charge 15% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC, WAON and many QR payments (Tabelog). 28 seats and a private room for 10–20; non-smoking; wheelchair accessible; hotel parking (Tabelog).',
    hours: { 4: FR, 5: SA, 6: FR }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-3-3, Hotel Nikko Osaka 3F, on Midosuji — directly connected to Shinsaibashi Stn exit 8',
    cuisine: 'Classic French in a hotel dining room (2025–2026 reviews) · courses at ¥7,500, ¥10,000 and ¥13,000 (August 2025); a Friday dinner course ¥10,000 (February 2026); an executive course ¥32,000 with caviar, abalone, lobster and A5 wagyu (March 2025) · e.g. pâté en croûte of Daichi pork, lobster bisque, wagyu fillet Rossini with Périgueux sauce, bouillabaisse, turbot gratin (winter 2024); a spring menu with tuna tartare and hachis Parmentier (March 2026); foie gras and steak (June 2026); a choice of main such as lamb or pork (July 2026); a September 2026 lunch with bell-pepper soup and meat with foie gras and truffle sauce · two breads and two butters, incl. smoked butter · several dessert plates and a trolley of petits fours to choose from (2024–2026) · wine',
    website: null, gmaps: gm('レ・セレブリテ ホテル日航大阪'), menu_url: null,
    notes: '[French · Shinsaibashi, a weekend hotel classic] The French restaurant of Hotel Nikko Osaka, three floors above Shinsaibashi Station, now open only Friday to Sunday and on holidays. The cooking is classic: pâté en croûte, bisque, Rossini-style wagyu with foie gras and truffle sauce, and a run of desserts ending with a trolley of petits fours you pick from. Courses ran ¥7,500–13,000 in 2025–2026 (¥10,000 on a February 2026 Friday), with a ¥32,000 luxury course, plus 15% service. Reviews in 2026 are mostly warm, though a July 2026 diner found the lamb and pork mains tough. Good for anniversaries; wheelchair accessible.',
    chef_bio: { chef_name: null, roles: ['Hotel Nikko Osaka; chef unnamed in the sources read'], origin: null, background: 'Reviewers call it a long-established French restaurant of Hotel Nikko Osaka; a March 2025 diner who had found the cooking had slipped noticed it improved and wondered whether the chef had changed. Open only on weekends and holidays (Tabelog).', philosophy: null, specialty: 'Classic French courses; dessert trolley of petits fours.',
      anecdotes: [
        { text: '"For this quantity and quality, the Friday price is JPY 10,000!" — February 2026.', source: R + 'B523210286/' },
        { text: '"We could choose as many tea sweets as we liked from a wide selection!" — August 2026, a celebration on the middle course.', source: R + 'B535005102/' },
        { text: '"The atmosphere is relatively casual for a hotel French restaurant. … However, the meat in the main course was tough" — July 2026, a lamb main.', source: R + 'B532033717/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): フランス料理 レ・セレブリテ ホテル日航大阪、大阪市中央区西心斎橋1-3-3 ホテル日航大阪 3F、心斎橋駅8番出口直結、金・日・祝11:30〜14:30と17:30〜21:00 (L.O. 20:30)、土・祝前日は21:30まで (L.O. 21:00)、月〜木休み (祝日を除く)、予約可、席のみの予約は当日に料理を選ぶ、サービス料15%、カード・交通系IC・WAON・QR可、28席、個室10〜20名、禁煙、車いす可、駐車場あり。口コミ(2024年11月〜2026年9月): 週末と祝日だけの老舗フレンチ、コース7,500円・10,000円・13,000円 (2025年8月)、金曜のディナー10,000円 (2026年2月)、32,000円のエグゼクティブコース (2025年3月)、パテ・アン・クルート、オマールのビスク、和牛フィレのロッシーニ、ブイヤベース、2種のパンとバター、デザートが何皿も、好きなだけ選べる小菓子、2026年7月はメインの肉が硬かったという口コミも。',
      confidence: 'medium', sources: [TB, R + 'B495022242/', R + 'B498071695/', R + 'B507832221/', R + 'B508654997/', R + 'B509050827/', R + 'B511595841/', R + 'B513758576/', R + 'B523210286/', R + 'B526958414/', R + 'B527403955/', R + 'B527422033/', R + 'B531212929/', R + 'B532033717/', R + 'B535005102/', R + 'B536254824/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant with set courses; a choice of main and of petits fours at the table (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-3-3 ホテル日航大阪 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.673909, 135.499720); same building as おでん すみ吉 (osaka_oden_sumiyoshi_nishishinsaibashi, address_ja "西心斎橋1-3-3 オー・エム・ホテル日航ビル B2F"), pinned 1 m from this Tabelog point, so this pin is offset ~8 m north to keep the two apart; GSI 大阪府大阪市中央区西心斎橋一丁目3番3号 (go) 37m from the Tabelog point, inside the hotel block; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511595841/', R + 'B523210286/', R + 'B508654997/'],
    price_note: 'Course prices from reviews only: ¥7,500 / ¥10,000 / ¥13,000 (August 2025), ¥10,000 on a Friday (February 2026), ¥32,000 executive course (March 2025); plus 15% service.', last_checked: TODAY, items: [
      it('', '', 'Dinner course (Friday)', '¥10,000', 'Course', 'ask', 'no', 'February 2026 review; ¥7,500–13,000 courses in August 2025.', 'dinner_course'),
      it('', '', 'Executive course (caviar, abalone, lobster, A5 wagyu)', '¥32,000', 'Course', 'ask', 'no', 'March 2025 review.', 'executive_course'),
      it('', '', 'Petits fours from the trolley', '', 'Dessert', 'ask', 'no', '2024–2026 reviews.', 'petits_fours'),
    ] }, {
    cuisine: 'ホテルのダイニングでクラシックなフレンチ (2025〜2026年の口コミ)・コースは7,500円、10,000円、13,000円 (2025年8月)、金曜のディナーコース10,000円 (2026年2月)、キャビア、アワビ、オマール、A5和牛の32,000円のエグゼクティブコース (2025年3月)・たとえば Daichi ポークのパテ・アン・クルート、オマールのビスク、和牛フィレのロッシーニ、ペリグーソース、ブイヤベース、ターボットのグラタン (2024年冬)、マグロのタルタルとアシ・パルマンティエの春のメニュー (2026年3月)、フォアグラとステーキ (2026年6月)、仔羊や豚から選ぶメイン (2026年7月)、2026年9月のランチはパプリカのスープ、フォアグラとトリュフソースの肉・2種のパンと燻製バターなど2種のバター・何皿ものデザートと、好きなだけ選べるワゴンの小菓子 (2024〜2026年)・ワイン',
    neighborhood: '西心斎橋1-3-3 ホテル日航大阪 3階、御堂筋沿い。心斎橋駅8番出口直結',
    gf_detail: '予約時に要確認。グルテンの情報なし。ソース、パテ・アン・クルート、2種のパンとバター、デザートワゴンのあるクラシックなフレンチのコース。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。フォアグラ、魚、和牛、仔羊や豚に、バターとクリームのソースのコース。',
    notes: '[フレンチ・心斎橋、週末のホテルの老舗] 心斎橋駅直結のホテル日航大阪の3階にあるフレンチで、今は金曜から日曜と祝日だけの営業。料理はクラシックで、パテ・アン・クルート、ビスク、フォアグラとトリュフソースのロッシーニ風の和牛、何皿ものデザートのあとに好きなだけ選べるワゴンの小菓子。コースは2025〜2026年に7,500〜13,000円 (2026年2月の金曜は10,000円)、ぜいたくな32,000円のコースもあり、サービス料15%。2026年の口コミはおおむね好評だが、2026年7月には仔羊と豚のメインが硬かったという人も。記念日向き。車いす可。',
  });
}

// ================================================================ 象印食堂 大阪本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27106883/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.dynac-japan.com/shop/zojirushi-shokudo/zojirushi-shokudo-namba/';
  const WD = day(['11:00', '15:00'], ['17:00', '21:00']), WE = day(['11:00', '15:15'], ['17:00', '21:00']);
  put({
    id: 'osaka_zojirushi_shokudo_namba', name: '象印食堂 大阪本店 (Zojirushi Shokudo Osaka)', category: 'OMNI',
    lat: 34.663885, lng: 135.501088, cuisine_type: 'shokudo',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not safe for gluten avoidance: the listing says the restaurant cannot remove all allergens from its sourcing and cooking and does not accommodate food allergies. The rice itself is plain, but the mains and side dishes are seasoned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every set is built around a fish or meat main with small side dishes such as sea bream and nori tsukudani, and allergy requests are not accommodated.',
    hours_raw: 'Mon–Fri 11:00–15:00 and 17:00–21:00; Sat, Sun and holidays 11:00–15:15 and 17:00–21:00 (Tabelog). Reservations accepted; at lunch take a numbered ticket (from about 10:30) and come back on the QR code; a 60-minute limit; 30-minute waits at noon on weekdays and weekends in 2026 (Tabelog; September–October 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC, Edy, iD, QUICPay, PayPay, au PAY, Alipay, WeChat Pay (Tabelog). 61 seats, all tables; non-smoking; children welcome, kids\' menu for preschoolers only, no children\'s chairs; parking at Namba Parks and Namba City (Tabelog). Opened 17 October 2018 (Tabelog). No allergy accommodation (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 5-1-60, なんばスカイオ 6F, above Nankai Namba Stn — 1 min walk',
    cuisine: 'Rice restaurant of the rice-cooker maker Zojirushi: rice blended by a five-star rice master and cooked in its top "Enbutaiki" cooker, with seasonal side dishes (Tabelog shop text) · set meals from ¥2,300 at lunch (October 2026), e.g. salmon and chunky vegetables in black-vinegar sauce ¥2,300, roast pork with grated-onion sauce, teriyaki chicken, salmon rare cutlet · three rices to compare (a soft and a firm cooking, multigrain or brown) with free refills from the counter, small sides such as sea bream, umeboshi and nori tsukudani, and a sea-bream chazuke to finish (2026) · egg ¥300 (October 2026) · rice ice cream for dessert · dinner kaiseki "Aki Hime" with free drinks ¥8,900 (Tabelog) · Zojirushi craft beer "Zou no Mai" · bento and a roast beef set to take away',
    website: SITE, gmaps: gm('象印食堂 大阪本店 なんばスカイオ'), menu_url: null,
    notes: '[Set meals · Namba, a rice-cooker maker\'s dining room] The restaurant of the rice-cooker maker Zojirushi on the sixth floor of Namba Skyo, above Nankai Namba Station, where rice is the main course: two or three rices cooked in the company\'s top cooker, soft, firm and multigrain, to compare and refill as often as you like, with a fish or meat main and small sides. Finish with sea-bream chazuke and rice ice cream. Lunch sets start at ¥2,300 (October 2026); take a numbered ticket from about 10:30, as queues of 30 minutes are usual, and there is a 60-minute limit. The restaurant does not accommodate food allergies.',
    chef_bio: { chef_name: null, roles: ['Restaurant of Zojirushi Mahobin (Tabelog shop text); the listing links dynac-japan.com'], origin: null, background: 'Per the Tabelog shop text: a rice restaurant by Zojirushi Mahobin, with rice blended by a five-star rice master and cooked in the "Enbutaiki" cooker that reproduces a traditional kamado; seasonal set meals at lunch and kaiseki at dinner; bento to take home. Opened 17 October 2018; a sister shop opened in Umeda (Tabelog 27152910 in the crawl). An October 2026 diner recalls long queues on the news at the opening.', philosophy: null, specialty: 'Three rices with free refills; sea-bream chazuke; rice ice cream.',
      anecdotes: [
        { text: '"I started checking in around 10:30. I was the 7th in line" — September 2026, a second visit, all three types of rice.', source: R + 'B534051110/' },
        { text: '"However, the real reason I keep coming back to this place is for the dessert—rice ice cream." — October 2026.', source: R + 'B537176880/' },
        { text: '"The only thing I would mention is that paying JPY 300 for one egg seems a bit pricey" — October 2026, seated at noon after a numbered ticket.', source: R + 'B538098472/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 象印食堂 大阪本店、食堂・日本料理・弁当、大阪市中央区難波5-1-60 なんばスカイオ 6F、南海なんば駅から徒歩1分、月〜金11:00〜15:00と17:00〜21:00、土・日・祝11:00〜15:15と17:00〜21:00、予約可、食材の調達や調理でアレルゲンを完全に除けないためアレルギーには対応できない、カード・交通系IC・楽天Edy・iD・QUICPay・PayPay・au PAY・Alipay・WeChat Pay 可、61席 (テーブルのみ)、禁煙、子ども可 (キッズメニューは未就学児のみ、子ども用の椅子なし)、なんばパークスとなんばシティの駐車場、2018年10月17日オープン、象印のごはんレストラン、五つ星お米マイスターのブレンド米を「Enbutaiki」で、季節のおかず、ランチと会席、弁当、「Aki Hime 会席」飲み放題8,900円。口コミ(2026年8月〜10月): 10時半ごろから整理券と QR コード、60分制、ランチは2,300円から、鮭と大きな野菜の黒酢あん2,300円、ご飯は3種類をおかわり自由、鯛、梅干し、のりの佃煮、鯛茶漬け、ごはんアイス、卵は300円、クラフトビール「Zou no Mai」、平日も行列。',
      confidence: 'medium', sources: [TB, SITE, R + 'B534051110/', R + 'B535869873/', R + 'B536093741/', R + 'B536538795/', R + 'B536580617/', R + 'B536861009/', R + 'B536959134/', R + 'B537117948/', R + 'B537176880/', R + 'B537720737/', R + 'B537885847/', R + 'B538067601/', R + 'B538098472/', R + 'B538300791/', R + 'B538423551/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Numbered tickets and a QR code for the queue; staff explain the rices (September 2026). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog listing: "it is difficult to eliminate all allergens during the procurement of ingredients and the cooking process, so we are unable to accommodate food allergies."'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波5-1-60 なんばスカイオ 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波五丁目1番60号 (go) 11m. Same building as ぐり虎 大阪なんばスカイオ店 (osaka_guriko_namba_skyo, address_ja "難波5-1-60 なんばスカイオ 2F"), pinned 16 m away, so the two stay apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537117948/', R + 'B538300791/', R + 'B538098472/', TB],
    price_note: 'Lunch prices from October 2026 reviews; the dinner kaiseki with free drinks from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Set meal: salmon and chunky vegetables in black-vinegar sauce, with three rices', '¥2,300', 'Set meals', 'no', 'no', 'October 2026 reviews; lunch from ¥2,300.', 'salmon_kurozu_set'),
      it('', '', 'Extra egg', '¥300', 'Extras', 'no', 'no', 'October 2026 review.', 'egg'),
      it('', '', 'Aki Hime kaiseki with free drinks (dinner)', '¥8,900', 'Course', 'no', 'no', 'Tabelog listing.', 'aki_hime_kaiseki'),
      it('', '', 'Rice ice cream', '', 'Dessert', 'no', 'no', 'October 2026 review.', 'rice_ice_cream'),
    ] }, {
    cuisine: '炊飯器の象印のごはんレストラン: 五つ星お米マイスターのブレンド米を最上位の「Enbutaiki」で炊き、季節のおかずと (食べログの店の紹介)・ランチの定食は2,300円から (2026年10月)、たとえば鮭とごろごろ野菜の黒酢あん2,300円、玉ねぎおろしソースのローストポーク、照り焼きチキン、サーモンのレアカツ・食べ比べる3種のご飯 (やわらかめとかため、雑穀か玄米) はカウンターでおかわり自由、鯛、梅干し、のりの佃煮などの小鉢、締めは鯛茶漬け (2026年)・卵300円 (2026年10月)・デザートはごはんのアイス・夜は飲み放題付きの「Aki Hime 会席」8,900円 (食べログ)・象印のクラフトビール「Zou no Mai」・持ち帰りの弁当とローストビーフのセット',
    neighborhood: '難波5-1-60 なんばスカイオ 6階、南海なんば駅の上。徒歩1分',
    gf_detail: 'グルテンを避ける人には向かない: 食べログでは、食材の調達や調理でアレルゲンを完全に除けないため、食物アレルギーには対応できないとしている。ご飯そのものは白いご飯だが、主菜や小鉢は味付けしてある。',
    vegan_detail: 'ヴィーガンではありません。どの定食も魚か肉の主菜に、鯛やのりの佃煮などの小鉢で、アレルギーなどの要望にも対応していない。',
    notes: '[定食・なんば、炊飯器メーカーの食堂] 南海なんば駅の上、なんばスカイオ6階にある炊飯器の象印の食堂で、主役はご飯。最上位の炊飯器で炊いた、やわらかめ、かため、雑穀などのご飯を2〜3種、食べ比べておかわりも自由、それに魚か肉の主菜と小鉢。締めは鯛茶漬けとごはんのアイス。ランチの定食は2,300円から (2026年10月)。30分待ちはふつうなので10時半ごろから整理券を。60分制。食物アレルギーには対応していない。',
  });
}

save();
