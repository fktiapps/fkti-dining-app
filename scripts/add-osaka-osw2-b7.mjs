// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 7 (lane: Tabelog id mod 4 = 1).
//   + LOBBY CAFE FASCINO (big-slice fruit tarts, Kahala-hotel pancakes and a dessert buffet at Takashimaya's Namba Dining Maison 7F)
//   + ヤキニク キナシ Yakiniku Kinashi (thick-cut black-wagyu yakiniku with clay-pot rice, open to 2 am; since 2024)
//   + orange (casual French and wine bar in Shinmachi since 2005; Asahi Maruefu draught poured four ways)
//   + 牛タンと野菜巻き串 おくを 難波店 Okuwo (beef-tongue shabu-shabu and Fukuoka-style vegetable-wrapped skewers, Sennichimae)
//   Skipped: やさい串巻き なるとやAo 27140837 — chain in data: one of about a dozen shops of 有限会社エンヤフードサービス (brand page:
//   炭火焼とり えんや ×6, やさい串巻き なるとや ×3, 焼鳥 えんや, Bird / Bird's nest), whose Bird's nest is in data as
//   osaka_birds_nest_namba (address_ja "大阪府大阪市中央区難波千日前9-17 千日前セントラル第2ビル 2F"; the brand page gives
//   難波千日前9-17 (2F)). https://enya-food.jp/brand/ and /about_us/, read 2026-11-01.
//   Chain check of the four kept:
//   - FASCINO: one café (Tabelog; its rtg.jp page returned 403; a web search found no operator).
//   - Kinashi: one shop (Tabelog).
//   - orange: one shop (Tabelog).
//   - Okuwo: 株式会社おくお lists three outlets: this izakaya, a lunch shop at the same address, and one in Minami-Honmachi
//     (okuo-kk.com/shop/); small, none in data; kept.
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27140837', 'Chain in data: やさい串巻き なるとやAo is one of about a dozen shops of 有限会社エンヤフードサービス (えんや, なるとや, Bird / Bird\'s nest), whose Bird\'s nest is in data as osaka_birds_nest_namba (enya-food.jp/brand/).');

// ================================================================ LOBBY CAFE FASCINO
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27046865/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '22:00']);
  put({
    id: 'osaka_lobby_cafe_fascino_namba', name: 'LOBBY CAFE FASCINO', category: 'OMNI',
    lat: 34.664694, lng: 135.501565, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu is cakes and tarts, pancakes, sandwiches, omurice and salad lunches; nothing is stated about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream cakes, tarts and pancakes; nothing is described as vegan.',
    hours_raw: 'Daily 10:00–22:00 (last order 21:30); closed when Osaka Takashimaya is closed; holidays such as Christmas, New Year and Golden Week follow the weekend plan (Tabelog). Reservations accepted, e.g. for the lunch set (October 2026); lines at weekend afternoons (November 2026). Cards (VISA, Master, JCB, AMEX, Diners), transport IC, Rakuten Edy and iD, and QR (PayPay, d Barai, Rakuten Pay, au PAY) (Tabelog). 100 seats, many on sofas; non-smoking; children welcome; takeout (Tabelog). Opened 2 March 2010 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 5-1-18, Namba Dining Maison 7F (Osaka Takashimaya) — 5 min from Namba Stn (Midosuji Line)',
    cuisine: 'Hotel-lounge-style café with breakfast, lunch, cake and a dessert buffet (Tabelog) · large seasonal fruit tarts: Shine Muscat, peach and fig (September 2026), fig and chestnut (September 2026), a half-size pair allowed (September 2026); fruit tart and Mont Blanc with café latte (November 2026); cheese tart, tea roll cake, strawberry shortcake (October 2026) · the Kahala hotel\'s thin pancakes ("Shimpancake"), crêpe-like, with sauce (2025–2026 reviews) · salad lunch of salad, soup, bread, drink and cake ¥2,500 (October 2026); omurice; mixed sandwich · wine and cocktails',
    website: null, gmaps: gm('LOBBY CAFE FASCINO なんばダイニングメゾン'), menu_url: TB,
    notes: "[Café · Namba, big fruit tarts in Takashimaya's restaurant lobby] A large hotel-lounge-style café full of sofas on the seventh floor of Takashimaya's Namba Dining Maison, open until 10 pm. The cakes are the point: tall seasonal fruit tarts (Shine Muscat, peach, fig, chestnut in autumn 2026), Mont Blanc, cheese tart and a strawberry shortcake one diner called huge, and the Kahala hotel's thin, crêpe-like pancakes, which bring one regular back once or twice a year. There is a lunch with salad, soup and a slice of cake (¥2,500) and a dessert buffet. Prices are hotel-level, and in October 2026 one diner found the lunch salad small and the cake slice thin, another the service stretched.",
    chef_bio: { chef_name: null, roles: ['Operator and staff unnamed in every source read'], origin: null, background: 'Opened 2 March 2010 (Tabelog), in Takashimaya Osaka\'s Namba Dining Maison; its official page (rtg.jp) refused access when read. Reviewers come back for the fruit tarts and for the Kahala hotel\'s pancakes served here (2025–2026); one found the staff guided a solo diner kindly to a sofa (September 2026).', philosophy: null, specialty: 'Seasonal fruit tarts; Kahala-hotel pancakes.',
      anecdotes: [
        { text: '"I visit this place once or twice a year because I can enjoy the famous Shimpancake from Kahala Hotel here." — October 2026.', source: R + 'B517407759/' },
        { text: '"The fruit tart was consistently delicious, and the Mont Blanc had a hint of liqueur, giving it a more sophisticated flavor." — November 2026, a sixth visit.', source: R + 'B502694332/' },
        { text: '"The taste was delicious, but I was surprised by the small portion of the salad and the thinness of the cake." — October 2026, salad lunch ¥2,500.', source: R + 'B538056986/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員、英語版): LOBBY CAFE FASCINO、カフェ・ケーキ・ビュッフェ、難波5-1-18 なんばダイニングメゾン 7F、なんば駅から徒歩5分、毎日10:00〜22:00 (L.O.21:30)、大阪高島屋の休館日は休み、クリスマス・年末年始・ゴールデンウィークは土日祝のプラン、予約可、カード・電子マネー・QR可、100席、ソファ席、禁煙、子ども可、テイクアウト、モーニング、デザートビュッフェ、オープン2010年3月2日、ホテルのラウンジのような空間。口コミ(2025年11月〜2026年11月): Shine Muscat、桃、いちじくのタルト、いちじくと栗のタルト、ハーフサイズで2種、フルーツタルトとモンブラン、チーズタルト、紅茶のロールケーキ、いちごのショートケーキ、Kahala Hotel のパンケーキ (Shimpancake)、クレープのよう、サラダランチ2,500円 (サラダ、スープ、パン、飲み物、ケーキ)、オムライス、ミックスサンド、夜10時まで、日曜の午後は行列、値段はホテル並み、サラダが少なくケーキが薄いという声、スタッフが少ないという声。',
      confidence: 'medium', sources: [TB, R + 'B502694332/', R + 'B517407759/', R + 'B535952728/', R + 'B536250898/', R + 'B537028821/', R + 'B537529815/', R + 'B537640186/', R + 'B538056986/', R + 'B538233155/', R + 'B538449360/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Department-store café with sofa seating; staff seat you (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波5-1-18 なんばダイニングメゾン 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波五丁目1番18号 (go) 142m (large department-store building). Same building as 福太郎 なんばダイニングメゾン店 (osaka_fukutaro_namba_dining_maison, 8F) and 浪花そば なんばダイニングメゾン店 (osaka_naniwa_soba_namba_dining_maison, 7F), pinned about 22 and 36 m away, so none is stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538056986/'],
    price_note: 'Only the salad lunch price is known (October 2026 review).', last_checked: TODAY, items: [
      it('', '', 'Salad lunch: salad, soup, bread, drink, cake', '¥2,500', 'Lunch', 'no', 'no', 'October 2026 review.', 'salad_lunch'),
      it('', '', 'Seasonal fruit tart', '', 'Cake', 'no', 'no', '2026 reviews.', 'fruit_tart'),
      it('', '', 'Kahala hotel thin pancakes', '', 'Pancakes', 'no', 'no', '2025–2026 reviews.', 'kahala_pancakes'),
    ] }, {
    cuisine: 'ホテルのラウンジのようなカフェで、モーニング、ランチ、ケーキ、デザートビュッフェ (食べログ)・季節のフルーツの大きなタルト: Shine Muscat、桃、いちじく (2026年9月)、いちじくと栗 (2026年9月)、ハーフサイズで2種も (2026年9月)、フルーツタルトとモンブランにカフェラテ (2026年11月)、チーズタルト、紅茶のロールケーキ、いちごのショートケーキ (2026年10月)・Kahala Hotel の薄いパンケーキ (Shimpancake)、クレープのような食感、ソース付き (2025〜2026年の口コミ)・サラダ、スープ、パン、飲み物、ケーキのサラダランチ2,500円 (2026年10月)、オムライス、ミックスサンド・ワイン、カクテル',
    neighborhood: '難波5-1-18 なんばダイニングメゾン 7F (大阪高島屋)。なんば駅 (御堂筋線) から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。メニューはケーキとタルト、パンケーキ、サンドイッチ、オムライス、サラダランチ。小麦の説明はない。',
    vegan_detail: 'ヴィーガンではありません。生クリームのケーキ、タルト、パンケーキ。ヴィーガンの説明はない。',
    notes: '[カフェ・なんば、高島屋のレストランフロアの入口で大きなフルーツタルト] 高島屋のなんばダイニングメゾン7階にある、ソファ席の多いホテルのラウンジのような大きなカフェで、夜10時まで。目当てはケーキ: 背の高い季節のフルーツタルト (2026年秋は Shine Muscat、桃、いちじく、栗)、モンブラン、チーズタルト、ある人が巨大と言ったいちごのショートケーキ、そして Kahala Hotel の薄いクレープのようなパンケーキで、これを食べに年に1、2回来る常連も。サラダ、スープ、ケーキ付きのランチ (2,500円) やデザートビュッフェもある。値段はホテル並みで、2026年10月にはランチのサラダが少なくケーキが薄いという声や、スタッフの手が足りないという声も。',
  });
}

// ================================================================ ヤキニク キナシ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27140921/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '02:00']);
  put({
    id: 'osaka_yakiniku_kinashi_higashishinsaibashi', name: 'ヤキニク キナシ (Yakiniku Kinashi)', category: 'OMNI',
    lat: 34.674396, lng: 135.50329, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Cuts come with sauce or salt, and the menu has yukgaejang, cold noodles and other noodles; nothing is stated about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a black-wagyu yakiniku restaurant; namul, kimchi and grilled vegetables are sides.',
    hours_raw: 'Daily 17:00–02:00 (Tabelog). Reservations recommended (most guests book, October 2026); same-day cancellations by phone at least 2 hours ahead; children under 12 by phone booking only; 1 hour 45 minutes when busy (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC and QUICPay, PayPay (Tabelog). 28 seats with a counter; hire for 20–50; smoking allowed (Tabelog). Opened 3 March 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-19-5, 3F of ウィステリア心斎橋ビル — 3 min from Shinsaibashi Stn',
    cuisine: 'Yakiniku of black wagyu chosen for its balance of fat and lean, at moderate prices, with "five-star master blend" rice cooked in a clay pot (Tabelog) · signatures: thick-cut tongue and premium kalbi (Tabelog) · from 2026 reviews: special premium salted tongue grilled with spices, special outside skirt, premium loin, premium mountain-chain tripe, local chicken thigh, fresh grilled liver, thick loin, ribeye, a three-cut platter of loin, tenderloin and flap, mixed horumon; fresh heart sashimi, raw omasum, yukhoe grilled hard; avocado kimchi, namul, kakuteki, mushroom namul; thick-cut yam and roast sweet potato; green-chili dishes; yukgaejang, cold noodles and other noodles · beef fat served for the grill (September 2026) · sake, shochu, wine',
    website: null, gmaps: gm('ヤキニク キナシ 東心斎橋'), menu_url: TB,
    notes: "[Yakiniku · Higashi-Shinsaibashi, thick-cut wagyu late into the night] A lively third-floor yakiniku room near Shinsaibashi Station, opened in 2024, open until 2 am every night and usually full of bookings, its walls already covered in signed photos. Cuts are notably thick: the special premium salted tongue grilled with spices, outside skirt and loin, plus fresh grilled liver that diners single out, raw heart and omasum, and a clay-pot rice. The young staff serve fast and are easy to call over. One regular on a third visit (October 2026) recommends it to anyone craving yakiniku in Minami; one October 2026 diner's order went missing on a busy night. Smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Owner and staff unnamed; a young team (October 2026)'], origin: null, background: 'Opened 3 March 2024 (Tabelog), selling carefully selected black wagyu at reasonable prices with clay-pot rice (Tabelog shop text). Diners describe mostly young, friendly staff, very fast service, many signed photos of celebrities on the walls, and a fully booked room (2026). An October 2026 diner came on another yakiniku owner\'s recommendation.', philosophy: null, specialty: 'Thick-cut tongue; premium kalbi; clay-pot rice.',
      anecdotes: [
        { text: '"The grilled items, including special premium salt tongue, special outside skirt, premium loin, premium mountain chain tripe, and local chicken thigh, were undoubtedly top quality. The fresh grilled liver was incredibly tender!" — October 2026, a third visit.', source: R + 'B534516377/' },
        { text: '"The highlight here is undoubtedly the thickly sliced tongue, which is tender and packed with flavor that intensifies with each bite." — September 2026.', source: R + 'B537231601/' },
        { text: '"The owner of the yakiniku restaurant mentioned that this place is really great, so I decided to check it out right away." — October 2026.', source: R + 'B538224632/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員、英語版): Yakiniku Kinashi、焼肉・ホルモン・居酒屋、東心斎橋1-19-5 ウィステリア心斎橋ビル 3F、心斎橋駅から徒歩3分、毎日17:00〜翌2:00、当日キャンセルは2時間前までに電話、12歳未満の子どもは電話予約のみ、混雑時は1時間45分制、カード・電子マネー・PayPay可、28席、貸切20〜50名、喫煙可、オープン2024年3月3日。店の説明: 厳選した黒毛和牛をリーズナブルに、脂と赤身のバランス、五ツ星お米マイスターのブレンドの銀シャリを土鍋で、名物は厚切りタンと上カルビ。口コミ(2026年8月〜10月): 特上塩タン、特上ハラミ、上ロース、上ミノ、地鶏のもも、生レバーの焼き、厚切りのタンとロース、リブロース、ロース・ヘレ・カイノミの盛り合わせ、ホルモンミックス、ハツの sashimi、生センマイ、焼き Yukhoe、アボカドキムチ、namul、kakuteki、きのこの namul、厚い長芋と焼き芋、青唐辛子の料理、Yukgaejang、冷麺、牛脂、壁にサイン、若いスタッフ、早い、予約でいっぱい、注文が通っていなかったという声。',
      confidence: 'medium', sources: [TB, R + 'B534516377/', R + 'B536456817/', R + 'B536763608/', R + 'B537145663/', R + 'B537231601/', R + 'B537628802/', R + 'B537679417/', R + 'B538224632/', R + 'B538325666/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; quick, attentive young staff (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-19-5 ウィステリア心斎橋ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目19番5号 (go) 5m. Nearest record 心斎橋東 焼とりporc (osaka_yakitori_porc_higashishinsaibashi, "…東心斎橋1-18-1 BEST PLAZA B1F") is about 10 m away at another address, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices found; dishes from Tabelog and 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Thick-cut tongue', '', 'Tongue', 'ask', 'no', 'Tabelog signature.', 'atsugiri_tan'),
      it('', '', 'Premium kalbi', '', 'Wagyu', 'ask', 'no', 'Tabelog signature.', 'jo_karubi'),
      it('', '', 'Clay-pot rice', '', 'Rice', 'ask', 'ask', 'Tabelog.', 'donabe_rice'),
    ] }, {
    cuisine: '脂と赤身のバランスで選ぶ黒毛和牛の焼肉を手ごろに、五ツ星お米マイスターのブレンドの銀シャリを土鍋で (食べログ)・名物: 厚切りタンと上カルビ (食べログ)・2026年の口コミから: スパイスで焼く特上塩タン、特上ハラミ、上ロース、上ミノ、地鶏のもも、生レバーの焼き、厚いロース、リブロース、ロース・ヘレ・カイノミの3種盛り、ホルモンミックス、ハツの sashimi、生センマイ、しっかり焼く Yukhoe、アボカドキムチ、namul、kakuteki、きのこの namul、厚切りの長芋と焼き芋、青唐辛子の料理、Yukgaejang、冷麺などの麺・網に牛脂 (2026年9月)・日本酒、焼酎、ワイン',
    neighborhood: '東心斎橋1-19-5 ウィステリア心斎橋ビル 3F。心斎橋駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。肉はタレか塩で、Yukgaejang や冷麺などの麺も。小麦の説明はない。',
    vegan_detail: 'ヴィーガンではありません。黒毛和牛の焼肉の店で、namul、キムチ、焼き野菜はサイド。',
    notes: '[焼肉・東心斎橋、夜中まで厚切りの和牛] 心斎橋駅近くのビルの3階のにぎやかな焼肉店で、2024年開店、毎晩夜中の2時まで、たいてい予約でいっぱいで、壁にはもうサインがずらり。肉はどれも厚い: スパイスで焼く特上塩タン、ハラミ、ロース、それに名前の挙がる生レバーの焼き、ハツの sashimi、センマイ、土鍋ご飯。若いスタッフは早く、声をかけやすい。3回目の常連 (2026年10月) はミナミで焼肉ならここと。混んだ夜に注文が通っていなかったという声も (2026年10月)。喫煙可。',
  });
}

// ================================================================ orange
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27004361/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '24:00']); const E = day(['17:00', '24:00']);
  put({
    id: 'osaka_orange_shinmachi', name: 'orange (オレンジ)', category: 'OMNI',
    lat: 34.676506, lng: 135.495835, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu has quiche, gratin, fritters, spring rolls, baguette and focaccia, alongside carpaccio, grilled fish and meat; nothing is stated about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a French bistro of seafood, pâté, duck and beef; nothing is described as vegan.',
    hours_raw: 'Tue–Fri 18:00–24:00; Sat, Sun and holidays 17:00–24:00 (last order 23:00); closed Monday, sometimes open on holiday Mondays (Tabelog lists the times one minute past the hour). Reservations for two or more; five or more by phone, best called 14:00–17:00; 2½ hours per table; seat-only bookings order at least one drink and one dish each; same-day cancellations charged in full for courses and ¥4,500 a head for seats (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 28 seats: 4 at the counter, 24 at tables; non-smoking (Tabelog). Opened 15 November 2005 (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmachi 1-23-3, ground floor of 誠和ビル — 3 min from Yotsubashi Stn exit 2, 5 min from Shinsaibashi Stn exit 3',
    cuisine: 'Casual French with wine and draught beer (Tabelog) · Asahi "Maruefu" from a Showa-era server in four pours: one pour, two pours, three pours and mild (Tabelog; August–September 2026) · wines mainly French by the glass or bottle, sparkling, white, orange and red (Tabelog; 2026) · à la carte from 2025–2026 reviews: scallop carpaccio, assorted meat appetizers with liver pâté, quiche, corn fritters, spring rolls, green-bean and mushroom salad, gizzard confit with cream sauce, sea bass with cream sauce, pan-seared fish, rare-fried Norwegian salmon, duck, wagyu cheek braised in red wine, blue-cheese gratin, shrimp ajillo, three-cheese platter; a focaccia limited to 10 a day, kept for bookings (July 2026); about four desserts not on the menu, e.g. peach compote · all-you-can-drink plan from ¥6,500 with tax (Tabelog)',
    website: null, gmaps: gm('orange 新町 フレンチ'), menu_url: TB,
    notes: "[French · Shinmachi, bistro plates with wine and Maruefu draught] A small, calm French bistro and wine bar near Yotsubashi, open since 2005 and until midnight. It makes a point of beer as much as wine: Asahi Maruefu from a Showa-era server, poured four ways, one pour to three pours and mild, so you can taste the difference. The food is à la carte French to share: thick scallop carpaccio, a meat-appetizer plate whose liver pâté won over a liver-hater (July 2026), quiche, corn fritters, sea bass in cream, red-wine-braised wagyu cheek, and a focaccia baked ten a day. Wines by the glass run from sparkling to orange. Handy after a show at the nearby Orix Theater, as several diners note; one diner wondered whether the owner was working alone on a busy September 2026 night.",
    chef_bio: { chef_name: null, roles: ['Owner and kitchen unnamed in every source read'], origin: null, background: 'Opened 15 November 2005 (Tabelog). Per the Tabelog shop text, "French cuisine isn\'t just about wine": Maruefu draught from a Showa-era server poured four ways, with carefully chosen wines and gastronomic dishes for drinking. A regular on a fourth visit missed a two-person course with lobster that had been dropped (July 2026, November 2025). A September 2026 diner wondered whether the owner was managing everything alone.', philosophy: '"French cuisine isn\'t just about wine!" (Tabelog shop text).', specialty: 'Maruefu draught in four pours; scallop carpaccio; red-wine-braised wagyu cheek.',
      anecdotes: [
        { text: '"For my first drink, I had a beer poured right in front of me from the tap. The smoothness and crispness of Maru Efu was absolutely fantastic!" — August 2026, after a concert at Kyocera Dome.', source: R + 'B534347150/' },
        { text: '"The liver pâté from the assorted meat appetizers was so good that even my friend, who usually dislikes liver, enjoyed it." — July 2026.', source: R + 'B531839264/' },
        { text: '"Especially, the Wagyu cheek meat braised in red wine was incredibly tender and flavorful." — September 2026.', source: R + 'B535094677/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員、英語版): orange、フレンチ・ワインバー・イタリアン、新町1-23-3 誠和ビル 1F、四ツ橋駅2番出口から徒歩3分、心斎橋駅3番出口から徒歩5分、火〜金18:00〜24:00、土日祝17:00〜24:00 (L.O.23:00)、月曜休み (祝日は営業することも)、予約は2名から、5名以上は電話で (14〜17時がつながりやすい)、2時間半制、席のみの予約は1人1ドリンク1品、当日キャンセルはコース100%・席のみ1人4,500円、カード・PayPay可、28席 (カウンター4、テーブル24)、禁煙、オープン2005年11月15日。店の説明: フレンチはワインだけじゃない、昭和のビールサーバーのマルエフを一度注ぎ・二度注ぎ・三度注ぎ・まろやか注ぎの4通りで、フランス中心のワインをグラスかボトルで、飲み放題プラン6,500円 (税込) から。口コミ(2025年7月〜2026年10月): 帆立のカルパッチョ、肉の前菜盛り合わせのレバーパテ、キッシュ、とうもろこしのフリット、春巻き、いんげんときのこのサラダ、砂肝のコンフィのクリームソース、スズキのクリームソース、鮮魚のポワレ、ノルウェーサーモンのレアフライ、鴨、和牛ほほ肉の赤ワイン煮、ブルーチーズのグラタン、海老のアヒージョ、チーズ3種盛り、1日10個のフォカッチャ (予約で取り置き)、メニューにない4種ほどのデザート、桃のコンポート、スパークリング・白・オレンジ・赤のグラスワイン、Orix Theater の帰りに、ひとりで切り盛りしているのかという声、2人用のコースがなくなって残念という常連。',
      confidence: 'medium', sources: [TB, R + 'B507974996/', R + 'B530807804/', R + 'B531839264/', R + 'B534033544/', R + 'B534347150/', R + 'B535094677/', R + 'B535184455/', R + 'B535429081/', R + 'B535951213/', R + 'B537838140/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte French bistro; desserts offered verbally (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-23-3 誠和ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目23番3号 (go) 8m. Nearest record 焼鳥 刻 TOKI (osaka_yakitori_toki_shinmachi, "…新町1-20-3 1F") is about 42 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B535429081/'],
    price_note: 'No à la carte prices found; the all-you-can-drink plan price is from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Asahi Maruefu draught, one to three pours or mild', '', 'Drinks', 'no', 'ask', 'Tabelog.', 'maruefu'),
      it('', '', 'Scallop carpaccio', '', 'Starters', 'ask', 'no', '2026 reviews.', 'scallop_carpaccio'),
      it('', '', 'Wagyu cheek braised in red wine', '', 'Mains', 'ask', 'no', 'September 2026.', 'wagyu_cheek'),
      it('', '', 'Orange plan with all-you-can-drink (from)', '¥6,500', 'Course', 'ask', 'no', 'Tabelog, tax included.', 'orange_plan'),
    ] }, {
    cuisine: 'ワインと生ビールで楽しむ気軽なフレンチ (食べログ)・昭和のビールサーバーのアサヒ「マルエフ」を一度注ぎ、二度注ぎ、三度注ぎ、まろやか注ぎの4通りで (食べログ、2026年8〜9月)・フランス中心のワインをグラスかボトルで、スパークリング、白、オレンジ、赤 (食べログ、2026年)・2025〜2026年の口コミのアラカルト: 帆立のカルパッチョ、レバーパテ入りの肉の前菜盛り合わせ、キッシュ、とうもろこしのフリット、春巻き、いんげんときのこのサラダ、砂肝のコンフィのクリームソース、スズキのクリームソース、鮮魚のポワレ、ノルウェーサーモンのレアフライ、鴨、和牛ほほ肉の赤ワイン煮、ブルーチーズのグラタン、海老のアヒージョ、チーズ3種盛り。1日10個のフォカッチャは予約で取り置き (2026年7月)、メニューにない4種ほどのデザート、たとえば桃のコンポート・飲み放題プランは税込6,500円から (食べログ)',
    neighborhood: '新町1-23-3 誠和ビル 1F。四ツ橋駅2番出口から徒歩3分、心斎橋駅3番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。キッシュ、グラタン、フリット、春巻き、バゲット、フォカッチャのほか、カルパッチョ、魚や肉の料理も。小麦の説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚介、パテ、鴨、牛肉のフレンチビストロで、ヴィーガンの説明はない。',
    notes: '[フレンチ・新町、ビストロの皿にワインとマルエフ] 四ツ橋に近い小さく落ち着いたフレンチビストロ兼ワインバーで、2005年から、夜12時まで。ワインと同じくらいビールにこだわり、昭和のサーバーのアサヒ マルエフを一度注ぎから三度注ぎ、まろやか注ぎまで4通りに注ぎ分けて飲み比べられる。料理はみんなで分けるアラカルトのフレンチ: 厚い帆立のカルパッチョ、レバー嫌いの友人も食べたというレバーパテの入った肉の前菜 (2026年7月)、キッシュ、とうもろこしのフリット、スズキのクリームソース、和牛ほほ肉の赤ワイン煮、1日10個のフォカッチャ。グラスワインはスパークリングからオレンジまで。近くの Orix Theater の帰りに寄ったという人も多い。2026年9月の忙しい夜、ひとりで切り盛りしているのかと思ったという声も。',
  });
}

// ================================================================ 牛タンと野菜巻き串 おくを 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27118317/'; const R = TB + 'dtlrvwlst/'; const P = TB + 'party/';
  const SITE = 'https://okuo-kk.com/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'osaka_okuwo_namba_sennichimae', name: '牛タンと野菜巻き串 おくを 難波店 (Gyutan to Yasai Makigushi Okuwo Nanba ten)', category: 'OMNI',
    lat: 34.667993, lng: 135.503442, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The tongue shabu-shabu is in a kombu broth (October 2026), but the menu also has demi-glace stew, sukiyaki, motsunabe and mapo tofu; nothing is stated about wheat or soy sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-tongue, wagyu and pork dishes, and the vegetable skewers are wrapped in pork belly.',
    hours_raw: 'Daily 17:00–24:00 (last order food 23:00, drinks 23:30); open all year except 31 December 2026 to 4 January 2027 (Tabelog; official site, which closes for New Year and Obon). Reservations accepted; seat and private-room requests by phone (Tabelog). Table charge ¥550 per person (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), PayPay and au PAY; no e-money (Tabelog). 47 seats: a 17-seat counter and 30 at tables, all table seats in private rooms for 3–16; heated tobacco only (Tabelog). Opened 1 April 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-7-11, ground floor of 上方ビル — 5 min from Namba Stn (Midosuji Line) and Nipponbashi Stn (Sennichimae Line)',
    cuisine: 'Beef tongue every way, Fukuoka-style vegetable-wrapped skewers and black-wagyu motsunabe, Kyushu flavours in Osaka (Tabelog; official site) · courses, tax included (Tabelog): beef-tongue course with tongue shabu-shabu ¥12,500 (8 dishes: A5 wagyu "Nikura", marbled tongue and uni yukke, thick-cut grilled tongue, tongue demi-glace stew, premium tongue shabu-shabu with A5 strip loin); A5 wagyu strip-loin sukiyaki course ¥15,000 (8 dishes); a third tongue course; all-you-can-drink to add · à la carte (June 2026): marbled tongue shabu-shabu ¥4,400 per serving, Okuwo\'s "Uniku" ¥770, marbled tongue sashimi ¥1,760 · tongue tasting platter, tongue sushi, charcoal-grilled tongue, grilled liver, pork shabu-shabu, mapo tofu, asparagus and other vegetable-wrapped skewers, spicy offal hot pot, wagyu sashimi (2024–2026 reviews) · a wide range of drinks',
    website: SITE, gmaps: gm('牛タンと野菜巻き串 おくを 難波店'), menu_url: P,
    notes: "[Izakaya · Sennichimae, beef-tongue shabu-shabu and vegetable-wrapped skewers] A stylish izakaya in a traditional-house style near Namba Station, with a long 17-seat counter and every table in a private room, from 株式会社おくお, which brings Kyushu food to Osaka. The dish people come back for is the marbled beef-tongue shabu-shabu (¥4,400 a serving in June 2026): thin slices swished in a kombu broth and wrapped around plenty of green onion. Around it: Fukuoka-style vegetable skewers wrapped in pork belly, tongue sashimi, sushi and thick-cut grilled tongue, a black-wagyu motsunabe, and courses from ¥12,500 that add uni yukke and A5 wagyu. One September 2026 diner found the closing tongue hot pot bland; another regular finds the appetizer never changes and the skewers average. Heated tobacco is allowed.",
    chef_bio: { chef_name: null, roles: ['Operator: 株式会社おくお (official site); kitchen unnamed'], origin: null, background: 'Opened 1 April 2017 (Tabelog). Per the official site, 株式会社おくお runs restaurants mainly in Kansai and Osaka under the line "Kyushu flavours in Kansai too!", and lists this izakaya, a lunch shop at the same address and a shop in Minami-Honmachi. Diners describe smiling, attentive service and a calm atmosphere (2026).', philosophy: '"Always delicious, ever more fun" (おいしいをずっと、楽しいをもっと; official site).', specialty: 'Marbled beef-tongue shabu-shabu; vegetable-wrapped skewers; black-wagyu motsunabe.',
      anecdotes: [
        { text: '"When I quickly dipped it in the broth, the perfect amount of fat melted away, and with each bite, the umami spread throughout my mouth." — June 2026, marbled beef-tongue shabu-shabu ¥4,400.', source: R + 'B469896517/' },
        { text: '"The broth, infused with kombu kelp, is incredibly delicious, and I find myself coming back regularly." — October 2026.', source: R + 'B538244555/' },
        { text: '"I was a bit disappointed with the beef tongue hot pot that came out at the end. The broth was quite bland." — September 2026, course.', source: R + 'B536617556/' },
      ],
      japanese_sources_summary: '公式サイト: 株式会社おくお、九州の味を関西でも、関西・大阪エリアを中心に飲食店の運営、千日前1-7-11 上方ビル1F、17:00〜24:00 (L.O.23:30)、定休日なし (年末年始とお盆は休み)、店舗一覧には同じ住所のランチの店 (10:30〜14:00、水曜休み) と南本町1-5-14 グルラジビル 1F の店も。食べログ (店舗会員、英語版): Gyutan to Yasai Makigushi Okuwo Nanba ten、居酒屋・牛タン・もつ鍋、なんば駅・日本橋駅から徒歩5分、毎日17:00〜24:00 (L.O. 料理23:00・ドリンク23:30)、2026年12月31日〜2027年1月4日休み、チャージ550円、カード・PayPay・au PAY可、47席 (カウンター17、テーブル30)、テーブルはすべて個室 (3〜16名)、加熱式たばこのみ、オープン2017年4月1日。店の説明: 霜降り牛タンしゃぶしゃぶ、厚切り牛タン串、福岡発祥の野菜巻き串、黒毛和牛もつ鍋、古民家風。コース (税込): 牛タンしゃぶしゃぶのコース12,500円 (A5和牛の「Nikura」、霜降りタンとうにの Yukke、厚切りの焼きタン、タンのデミグラス煮込み、A5のストリップロイン入りの上タンしゃぶしゃぶ)、A5和牛ストリップロインのすき焼きコース15,000円。口コミ(2024年7月〜2026年10月): 霜降り牛タンしゃぶしゃぶ4,400円、Uniku 770円、霜降りタンの sashimi1,760円、昆布の出汁、ねぎを巻いて、タンの食べ比べ、タンの sushi、炭火焼きのタン、レバー焼き、豚しゃぶ、麻婆豆腐、アスパラなどの野菜巻き串、辛いもつ鍋、和牛の sashimi、笑顔の接客、締めのタン鍋は薄かったという声、お通しがいつも同じという声。',
      confidence: 'medium', sources: [TB, P, SITE, SITE + 'shop/', R + 'B431676641/', R + 'B469896517/', R + 'B489629705/', R + 'B525495104/', R + 'B530046674/', R + 'B534766433/', R + 'B535995907/', R + 'B536617556/', R + 'B538244555/', R + 'B538278042/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter or private rooms; booking requests by phone. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-7-11 上方ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and shop-maintained (corporate-member) Tabelog listing with a New Year 2026–27 notice; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}, offset about 6 m south: 松阪牛焼肉M 道頓堀千日前店 (osaka_matsusakagyu_yakiniku_m_sennichimae, address_ja "〒542-0074 大阪府大阪市中央区千日前1-7-11 上方ビル2F") is in the same building and pinned 1 m from the Tabelog point; cross-checked: GSI 大阪府大阪市中央区千日前一丁目7番11号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [P, R + 'B469896517/'],
    price_note: 'Course prices from the shop-maintained Tabelog course pages (tax included); à la carte from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Marbled beef-tongue shabu-shabu, per serving', '¥4,400', 'Hot pot', 'ask', 'no', 'June 2026 review.', 'tan_shabu'),
      it('', '', 'Marbled tongue sashimi', '¥1,760', 'Tongue', 'ask', 'no', 'June 2026 review.', 'tan_sashimi'),
      it('', '', 'Beef-tongue course with tongue shabu-shabu and A5 strip loin (8 dishes)', '¥12,500', 'Course', 'ask', 'no', 'Tabelog.', 'tan_course'),
      it('', '', 'A5 wagyu strip-loin sukiyaki course (8 dishes)', '¥15,000', 'Course', 'ask', 'no', 'Tabelog.', 'sukiyaki_course'),
      it('', '', 'Vegetable-wrapped skewers (pork belly)', '', 'Skewers', 'ask', 'no', 'Tabelog; 2026 reviews.', 'yasai_maki'),
    ] }, {
    cuisine: 'あらゆる食べ方の牛タン、福岡発祥の野菜巻き串、黒毛和牛のもつ鍋。九州の味を大阪で (食べログ、公式サイト)・コース (税込、食べログ): 牛タンしゃぶしゃぶのコース12,500円 (8品: A5和牛の「Nikura」、霜降りタンとうにの Yukke、厚切りの焼きタン、タンのデミグラス煮込み、A5のストリップロイン入りの上タンしゃぶしゃぶ)、A5和牛ストリップロインのすき焼きコース15,000円 (8品)、もうひとつのタンのコース、飲み放題を追加できる・アラカルト (2026年6月): 霜降り牛タンしゃぶしゃぶ1人前4,400円、おくをの「Uniku」770円、霜降りタンの sashimi1,760円・タンの食べ比べ、タンの sushi、炭火焼きのタン、レバー焼き、豚しゃぶ、麻婆豆腐、アスパラなどの野菜巻き串、辛いもつ鍋、和牛の sashimi (2024〜2026年の口コミ)・お酒の種類も多い',
    neighborhood: '千日前1-7-11 上方ビル 1F。なんば駅 (御堂筋線)、日本橋駅 (千日前線) から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。タンしゃぶは昆布の出汁 (2026年10月) だが、デミグラスの煮込み、すき焼き、もつ鍋、麻婆豆腐もある。小麦や醤油の説明はない。',
    vegan_detail: 'ヴィーガンではありません。牛タン、和牛、豚の料理で、野菜巻き串も豚バラで巻く。',
    notes: '[居酒屋・千日前、牛タンしゃぶしゃぶと野菜巻き串] なんば駅近くの古民家風のおしゃれな居酒屋で、17席の長いカウンターと、テーブルはすべて個室。九州の味を大阪にという株式会社おくおの店。何度も来たくなるのは霜降り牛タンしゃぶしゃぶ (2026年6月で1人前4,400円): 薄いタンを昆布の出汁にくぐらせ、たっぷりのねぎを巻いて。ほかに豚バラで巻いた福岡風の野菜巻き串、タンの sashimi、sushi、厚切りの焼きタン、黒毛和牛のもつ鍋、うにの Yukke や A5和牛の入る12,500円からのコース。締めのタン鍋は薄かったという声 (2026年9月) や、お通しはいつも同じで串はふつうという常連の声も。加熱式たばこ可。',
  });
}

save();
