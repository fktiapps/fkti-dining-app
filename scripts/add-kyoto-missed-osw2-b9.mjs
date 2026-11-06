// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 9.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first two lane ids):
//   + Café DOnG by Sfera (café in the Sfera design building by the Shirakawa; Shogetsu wagashi on weekends)
//   + La Mer giki ラ・メール・ギキ (Shingo Giki's attic French near Kawaramachi-Takatsuji)
//   notable (queue.mjs kyoto-missed next notable 200, first two lane ids):
//   + 休憩処 さるや Saruya (tea house in the grounds of Shimogamo Shrine; the revived 申餅)
//   + 亀屋良長 本店 Kameya Yoshinaga (Kyoto confectioner since 1803; ubatama; 4-seat tea corner)
//   None is in data/kyoto.json: grep by id, name (Sfera/スフェラ, ギキ/giki, さるや/Saruya, 亀屋良長) and address
//   (弁財天町17, 茶磨屋町228, 下鴨泉川町59, 柏屋町17) found none. 亀屋良永 (kyoto_kameya_yoshinaga) is a different
//   house (永 not 長). さるや appears only in kyoto_hosen_kyoto_station's background as one of 宝泉's outlets; it is a
//   shrine tea house, a different format from that station shop, so drafted under the sister-concept rule (宝泉 lists
//   four outlets: 本店, 茶寮 宝泉, the station shop and さるや).
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ Café DOnG by Sfera
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001633/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.ricordi-sfera.com/';
  const H = day(['12:00', '19:00']);
  put({
    id: 'kyoto_cafe_dong_sfera', name: 'Café DOnG by Sfera (カフェ・ドン バイ スフェラ)', category: 'OMNI',
    lat: 35.005994, lng: 135.772603, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tarts, pudding and wagashi from Shogetsu are the sweets; no gluten information is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. An August 2026 reviewer praised the café’s "commitment to quality vegan food" and the menu offers soy lattes, but the lavender pudding and cheese tart are not vegan; nothing is marked on Tabelog (2026 reviews).',
    hours_raw: '12:00–19:00 (last order 18:30); closed Wednesday; hours may change for events — check Instagram (Tabelog). No seat reservations; wagashi from Shogetsu can be reserved by phone for Friday–Sunday (Tabelog; May 2026). No service charge (Tabelog). 30 seats — tables, sunken kotatsu, sofas and a terrace; smoking only on the terrace or outside (Tabelog). Pets allowed inside in a cart or bag (July and October 2026). Cards and PayPay (Tabelog). On the semi-basement floor of the Sfera building by the Shirakawa, with galleries and the Sfera shop upstairs; 5 min from Gion-Shijo or Sanjo Stn (Tabelog; 2026 reviews). Formerly named せせらぎ すへら (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'By the Shirakawa between Sanjo and Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Design café of the Kyoto homeware brand Sfera, with a weekend wagashi set from Shogetsu (2026 reviews) · Shogetsu set: a seasonal wagashi (chestnut kinton, warabi-mochi) with a drink, Friday–Sunday, ¥1,500 (July 2026); seasonal wagashi set Kōgetsu ¥1,800 (October 2026) · organic lavender pudding with iced coffee ¥1,500 (August 2026); tart of the day with tea; matcha "Fujiyama", matcha soy latte, Awaban tea · Kyoto Brewing’s Ichigo Ichie saison ¥1,200 (August 2026)',
    website: SITE, gmaps: gm('Café DOnG by Sfera 京都'), menu_url: null,
    notes: "[Café · Shirakawa, a design café with weekend Shogetsu wagashi] A calm, spacious café on the semi-basement floor of the Sfera building, home of the Kyoto homeware brand, near the Shirakawa between Sanjo and Shijo. Seats range from sofas to sunken kotatsu and a terrace, and everything — chairs, cups, plates — is designed. On Friday to Sunday it serves seasonal wagashi from Shogetsu with a drink (¥1,500–1,800; reserve the sweets by phone); otherwise try the organic lavender pudding or the tart of the day. Pets in a carrier welcome. 12:00–19:00, closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Café of Sfera (homeware brand; official site); no person is named'], origin: null,
      background: 'Per the official site: Sfera designs furniture, tableware and home accessories in natural materials made with traditional hand techniques. Tabelog: formerly せせらぎ すへら; invoice T9130001053604. Tabelog Cafe WEST "Tabelog 100" 2025 (August 2026 review).',
      philosophy: null, specialty: 'Shogetsu wagashi set (weekends); lavender pudding.',
      anecdotes: [
        { text: 'A May 2026 visitor phoned the same day and was kindly let reserve Shogetsu wagashi, though a day’s notice is usual.', source: R + 'B529173657/' },
        { text: 'A June 2026 visitor loved the interior and tableware but found the air conditioning weak on a 33 °C day.', source: R + 'B530940370/' },
        { text: 'An October 2026 visitor arriving on a gloomy Sunday at 13:00 had the room to choose from.', source: R + 'B538120228/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・甘味処、旧店名 せせらぎ すへら、東山区弁財天町17 スフェラ・ビル、祇園四条駅・三条駅から徒歩約5分、12:00〜19:00 (L.O. 18:30)、水曜休み、イベントで変わる場合は Instagram で、席の予約不可、松月の和菓子は金・土・日のみ電話で予約、サービス料・チャージなし、30席 (テーブル、掘りごたつ、ソファ、テラス)、テラスと店外で喫煙可、カード・PayPay 可、インボイス T9130001053604。公式サイト (ricordi-sfera.com): スフェラのオリジナルの家具、食器、ホームアクセサリー。口コミ (2026年5〜10月、英語): 松月のセット1,500円、Kōgetsu のセット1,800円、オーガニックのラベンダープリン、日替わりのタルト、Kyoto Brewing の Ichigo Ichie 1,200円、ペット可 (カートかバッグ)。',
      confidence: 'medium', sources: [TB, SITE, R + 'B529173657/', R + 'B530940370/', R + 'B531670156/', R + 'B533338351/', R + 'B533400789/', R + 'B533681722/', R + 'B534891452/', R + 'B536373405/', R + 'B536709823/', R + 'B537328210/', R + 'B538120228/', R + 'B538129357/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No bookings for seats; phone ahead for the weekend Shogetsu wagashi.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区弁財天町17 スフェラ・ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005994, 135.772603); cross-checked: GSI 京都府京都市東山区弁財天町17番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534891452/', R + 'B533681722/', R + 'B538120228/'],
    price_note: 'No menu published; prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shogetsu wagashi set with a drink (Fri–Sun)', '¥1,500', 'Sweets', 'ask', 'ask', 'July 2026.', 'shogetsu_set'),
      it('', '', 'Organic lavender pudding with iced coffee', '¥1,500', 'Sweets', 'ask', 'no', 'August 2026.', 'lavender_pudding'),
      it('', '', 'Kyoto Brewing Ichigo Ichie (craft beer)', '¥1,200', 'Drinks', 'no', '', 'August 2026.', 'ichigo_ichie'),
    ] }, {
    cuisine: '京都のホームウェアのブランド Sfera のデザインカフェ。週末は Shogetsu の和菓子のセット (2026年の口コミ)・Shogetsu のセット: 季節の和菓子 (栗きんとん、わらび餅) とドリンク、金〜日、1,500円 (2026年7月)。季節の和菓子のセット Kōgetsu 1,800円 (2026年10月)・オーガニックのラベンダープリンとアイスコーヒー1,500円 (2026年8月)、日替わりのタルトとお茶、抹茶「Fujiyama」、抹茶ソイラテ、Awaban tea・Kyoto Brewing の Ichigo Ichie (セゾン) 1,200円 (2026年8月)',
    neighborhood: '三条と四条の間、白川のそば。祇園四条駅から徒歩5分',
    gf_detail: '要確認。甘いものはタルト、プリン、Shogetsu の和菓子。グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。2026年8月の客は「質の高いヴィーガンの料理へのこだわり」を褒め、ソイラテもあるが、ラベンダープリンやチーズのタルトはヴィーガンではない。食べログに表示はない (2026年の口コミ)。',
    notes: '[カフェ・白川、週末は Shogetsu の和菓子のデザインカフェ] 三条と四条の間、白川近くのスフェラ・ビルの半地下にある、京都のホームウェアのブランド Sfera の落ち着いた広いカフェ。ソファから掘りごたつ、テラスまで席はさまざまで、椅子も器もすべてデザインされたもの。金〜日は Shogetsu の季節の和菓子をドリンクと (1,500〜1,800円、和菓子は電話で予約を)。ほかの日はオーガニックのラベンダープリンや日替わりのタルトを。キャリーのペット可。12時〜19時、水曜休み。',
  });
}

// ================================================================ La Mer giki
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26031723/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://la-mergiki.com/'; const LUNCH = SITE + 'lunch-6-4-2-2/'; const DINNER = SITE + 'dinner-menu-2-4/'; const INFO = SITE + 'information-2/';
  const H = day(['12:00', '15:00'], ['18:00', '21:30']);
  put({
    id: 'kyoto_la_mer_giki', name: 'La Mer giki (ラ・メール・ギキ)', category: 'MOM_AND_POP',
    lat: 35.000249, lng: 135.765814, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — the shop asks for allergies and dislikes at booking (official site). Courses include bread, tarts, sauces and desserts.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood-led French courses with duck, oysters, beef, lobster and fish (official menu).',
    hours_raw: 'Lunch 12:00–15:00 (last order 13:00) and dinner 18:00–21:30 (last order 19:30); closed Tuesday and irregularly (official site; Tabelog). Phone bookings 9:00–12:00 (Tabelog); the La Mer course can be booked the same day, the bouillabaisse, lobster and special courses two days ahead (official site). 50% charge for same-day cancellations (Tabelog). 12 seats (10 at tables, 2 at the counter), exclusive hire from 9 guests (Tabelog). Cards and QR (Tabelog). An attic room on the 2nd floor west of Kawaramachi-Takatsuji; 5 min from Hankyu Kyoto Kawaramachi Stn (Tabelog; February 2025).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'West of Kawaramachi-Takatsuji — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Seafood-minded French in an attic room, by owner Shingo Giki (official site) · lunch A ¥4,500 and B ¥5,300 courses (official site) · dinner La Mer course ¥6,500: amuse, starter, three-layer soup, fish, a main from duck with honey-mustard, oysters Burgundy-style, beef cheek in red wine (+¥800), beef steak (+¥1,400) or roast lobster (+¥1,800), dessert and coffee; bouillabaisse course ¥6,700 (risotto to finish); lobster course ¥9,000; special course with lobster and Kagoshima beef fillet ¥11,000 (official site) · signatures reviewers name: Kintoki-carrot mousse, the hot-and-cold three-layer soup, oysters Burgundy-style, Mont Blanc (2023–26 reviews) · osechi boxes for New Year (official site)',
    website: SITE, gmaps: gm('La Mer giki 京都'), menu_url: DINNER,
    notes: "[French · Kawaramachi-Takatsuji, a seafood French in the attic] A twelve-seat attic restaurant west of Kawaramachi-Takatsuji, decorated after the sea of the south of France and of the owner-chef's home, where Shingo Giki cooks French food built on Japanese seafood. The La Mer dinner course (¥6,500) runs from a Kintoki-carrot mousse and a hot-and-cold three-layer soup to a main such as oysters Burgundy-style or duck with honey and mustard; bouillabaisse and lobster courses need two days' notice. Lunch from ¥4,500. Reviewers find it charming and unpretentious; on weekdays the chef's wife may serve. Closed Tuesday.",
    chef_bio: { chef_name: 'Shingo Giki (冝喜 慎吾)', roles: ['Owner (official site: 代表 冝喜 慎吾（ギキ シンゴ）) and chef; the chef’s wife sometimes serves (March 2024)'], origin: null,
      background: 'Per the official site: La Mer is French for "the sea"; the interior evokes the sea of southern France and the sea of the owner’s home town; the aim is inventive cooking beyond the bounds of French, drawing on Japan’s fresh seafood, for guests including those who come from across the sea. A March 2024 regular notes that the chef usually handles everything and was helped that weekday by the chef’s wife.',
      philosophy: 'Per the official site: to bring out the best in fresh ingredients, especially Japan’s seafood, in cooking full of originality.',
      specialty: 'Three-layer soup; oysters Burgundy-style; Kintoki-carrot mousse.',
      anecdotes: [
        { text: 'A September 2026 diner missed the lobster, unavailable that day, but loved the oysters ordered instead.', source: R + 'B536307688/' },
        { text: 'A September 2026 diner enjoyed everything but found a few too many sweet dishes.', source: R + 'B536565551/' },
        { text: 'A February 2026 couple singled out the mushroom sauce on daikon and beef.', source: R + 'B499190589/' },
      ],
      japanese_sources_summary: '公式サイト (la-mergiki.com): 屋根裏レストラン ラメールギキ、La Mer はフランス語で「海」、店内は南仏の海と故郷の海のイメージ、代表 冝喜 慎吾 (ギキ シンゴ)、下京区茶磨屋町228-2、ランチ12:00〜15:00 (LO 13:00)、ディナー18:00〜21:30 (LO 19:30)、火曜定休 (不定休あり)、ランチ A コース4,500円・B コース5,300円 (税込)、ラメールコース6,500円 (メインは鴨のロースト、カキのブルゴーニュ風、国産牛ホホ肉の赤ワイン煮込み+800円、牛肉のステーキ+1,400円、オマール海老のロースト+1,800円)、ブイヤベースコース6,700円、オマール海老コース9,000円、特別コース11,000円 (2日前までの予約)、苦手な食材・アレルギーは予約時に、2027年のお節料理。食べログ: フレンチ・ビストロ、予約は9時〜12時、当日キャンセルは50%、12席 (テーブル10、カウンター2)、貸切は9名以上、カード・QR 可。口コミ (2023〜2026年、英語): 金時人参のムース、3層のスープ、カキのブルゴーニュ風、モンブラン、平日はシェフの奥さんがサービス。',
      confidence: 'medium', sources: [TB, SITE, LUNCH, DINNER, INFO, R + 'B428057087/', R + 'B464852569/', R + 'B471918564/', R + 'B484896833/', R + 'B497867611/', R + 'B499190589/', R + 'B500825957/', R + 'B536307688/', R + 'B536565551/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone (9:00–12:00) or online; special courses two days ahead.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区茶磨屋町228-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news October 2026) and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.000249, 135.765814); cross-checked: GSI 京都府京都市下京区茶磨屋町228番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [LUNCH, DINNER],
    price_note: 'Official site menus (prices including tax; undated).', last_checked: TODAY, items: [
      it('ランチAコース', '', 'Lunch course A', '¥4,500', 'Lunch', 'ask', 'no', '', 'lunch_a'),
      it('ラメールコース', '', 'La Mer dinner course', '¥6,500', 'Dinner', 'ask', 'no', '', 'la_mer_course'),
      it('ブイヤベースコース', '', 'Bouillabaisse course (2 days ahead)', '¥6,700', 'Dinner', 'ask', 'no', '', 'bouillabaisse'),
      it('オマール海老コース', '', 'Lobster course (2 days ahead)', '¥9,000', 'Dinner', 'ask', 'no', '', 'lobster_course'),
    ] }, {
    cuisine: '代表 冝喜 慎吾さんの、海の幸が中心の屋根裏のフレンチ (公式サイト)・ランチ A コース4,500円、B コース5,300円 (公式サイト)・ディナーのラメールコース6,500円: アミューズ、前菜、3層のスープ、お魚料理、メインは鴨のロースト ハチミツとマスタードソース、カキのブルゴーニュ風、国産牛ホホ肉の赤ワイン煮込み (+800円)、牛肉のステーキ (+1,400円)、オマール海老のロースト (+1,800円) から、デザートとコーヒー。ブイヤベースコース6,700円 (締めのリゾット)、オマール海老コース9,000円、オマール海老と鹿児島県産牛フィレ肉の特別コース11,000円 (公式サイト)・口コミで多いのは金時人参のムース、温冷の3層のスープ、カキのブルゴーニュ風、モンブラン (2023〜2026年の口コミ)・お正月のお節料理 (公式サイト)',
    neighborhood: '河原町高辻の西。京都河原町駅から徒歩5分',
    gf_detail: '予約時に要確認。苦手な食材やアレルギーは予約時に伝えるよう店は案内している (公式サイト)。コースにはパン、タルト、ソース、デザートが入る。',
    vegan_detail: 'ヴィーガン不可。鴨、カキ、牛肉、オマール海老、魚の海の幸中心のフレンチのコース (公式メニュー)。',
    notes: '[フレンチ・河原町高辻、屋根裏の海のフレンチ] 河原町高辻の西にある12席の屋根裏のレストラン。店内は南仏の海と店主の故郷の海がイメージで、冝喜 慎吾さんが日本の海の幸を生かしたフレンチを作る。夜のラメールコース (6,500円) は、金時人参のムースと温冷の3層のスープから、カキのブルゴーニュ風や鴨のハチミツとマスタードソースなどのメインへ。ブイヤベースとオマール海老のコースは2日前までに予約を。ランチは4,500円から。気取らず可愛らしいと好評で、平日はシェフの奥さんがサービスすることも。火曜休み。',
  });
}

// ================================================================ 休憩処 さるや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26018649/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.shimogamo-jinja.or.jp/saruya';
  const H = day(['10:00', '16:30']);
  put({
    id: 'kyoto_saruya_shimogamo', name: '休憩処 さるや (Saruya, Shimogamo Shrine)', category: 'OMNI',
    lat: 35.037575, lng: 135.772368, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The 申餅 is a rice-cake sweet with bean paste and the summer ice uses syrups and shiratama; the monaka has a wafer shell; no ingredient list is published (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The 申餅, bean tea, zenzai and matcha-azuki ice are plant-based in principle, but the strawberry and black-sugar ices come with milk and no ingredient list is published (official site; 2026 reviews).',
    hours_raw: '10:00–16:30 every day (official site; Tabelog); hours may change (Tabelog). No reservations (Tabelog). Pay at a ticket machine (November 2026). Summer kakigori is served until about mid-September (August 2026) and can take over 20 minutes in the busy season (August 2026). 60 seats; non-smoking; cards, e-money and QR; paid parking at the shrine; children welcome (Tabelog). Inside the grounds of Shimogamo Shrine; 2 min from the Tadasu-no-mori-mae bus stop, 10 min from Demachiyanagi Stn (Tabelog). Opened 15 May 2011 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimogamo Shrine grounds, Tadasu-no-mori — 10 min from Demachiyanagi Stn',
    cuisine: 'Rest house of Shimogamo Shrine serving the shrine’s own sweets (official site) · 申餅 (saru-mochi), the Aoi Matsuri rice cake pounded with azuki cooking water to a pale "hanezu" pink, revived after about 140 years; with まめ豆茶, a roasted black-soybean tea from Tanba, ¥500 (October 2026); the set with cold bean tea ¥550 (Tabelog menu, 2012) · 良縁ぜんざい made with Tanba dainagon azuki offered at the Aioi shrine (official site) · summer 鴨の氷室の氷 kakigori (matcha-azuki with Hosendo’s Tanba dainagon bean paste, black sugar with shiratama, strawberry milk) ¥1,300, with hojicha (August 2026) · Aoi monaka, iced green tea (August 2026)',
    website: SITE, gmaps: gm('休憩処 さるや 下鴨神社'), menu_url: SITE,
    notes: "[Wagashi tea house · Shimogamo Shrine, the revived Aoi Matsuri rice cake] A tea house inside the grounds of Shimogamo Shrine, by the Tadasu-no-mori woods. Its signature is the 申餅, the Aoi Matsuri rice cake coloured a dawn pink with azuki water and revived after some 140 years, served with まめ豆茶, a black-soybean tea that was once the drink of the shrine's priests (¥500). In summer it shaves 'ice of the Kamo ice house' with Hosendo bean paste (¥1,300); in winter, zenzai of Tanba azuki. Pay at the machine; free refills of hojicha. Daily 10:00–16:30.",
    chef_bio: { chef_name: null, roles: ['Shimogamo Shrine rest house (official shrine site); sweets made with Hosendo bean paste per an August 2026 review; no person is named'], origin: null,
      background: 'Per the official shrine site: the 申餅, offered to the deities on the Aoi Matsuri day until early Meiji, was revived after 140 years; the black-soybean tea was the drink of shrine priests during purification and is made only from Tanba black soybeans, once from the shrine’s estates; the summer ice is named after the shrine’s old ice house. A November 2026 review says local wagashi artisans revived the 申餅 in 2010 from the shrine’s oral tradition. The background of kyoto_hosen_kyoto_station lists 下鴨神社 さるや among 宝泉’s outlets. Opened 15 May 2011 (Tabelog).',
      philosophy: 'Per the official shrine site: eating the 申餅 purifies the body and brings good health, after the old custom.',
      specialty: '申餅 with まめ豆茶; summer ice; 良縁ぜんざい.',
      anecdotes: [
        { text: 'An August 2026 family waited over 20 minutes for the kakigori in the summer heat.', source: R + 'B533675453/' },
        { text: 'A September 2026 visitor found the 申餅’s filling "not overly sweet, perfectly seasoned".', source: R + 'B535143254/' },
        { text: 'An October 2026 visitor noted the free refills of warm hojicha.', source: R + 'B537808658/' },
      ],
      japanese_sources_summary: '下鴨神社の公式サイト (shimogamo-jinja.or.jp): 休憩処 さるや、下鴨神社境内、10:00〜16:30、「鴨の氷室の氷」(下鴨神社の氷室神事にならった夏のかき氷)、「良縁ぜんざい」(相生社に供えるあずき、最高級の丹波大納言小豆、紅白餅)、冬季メニュー「下鴨神社 まめ豆茶」(神社社領のあった丹波地方の黒豆、潔斎期間中の神官の飲み物)、「申餅」(葵祭りの日に小豆の茹で汁で搗いた御餅、はねず色、140年ぶりに復元)。食べログ: 甘味処・カフェ・和菓子、左京区下鴨泉川町59、糺の森前バス停から徒歩約2分、出町柳駅から徒歩約10分、毎日10:00〜16:30、予約不可、60席、禁煙、カード・電子マネー・QR 可、駐車場あり (有料)、2011年5月15日オープン。口コミ (2026年8〜11月、英語): 申餅とまめ豆茶500円、かき氷1,300円 (Hosendo の丹波大納言のあん)、Aoi Monaka、券売機、ほうじ茶のおかわり。',
      confidence: 'medium', sources: [TB, SITE, R + 'B469484053/', R + 'B533675453/', R + 'B533927310/', R + 'B533931955/', R + 'B535089879/', R + 'B535143254/', R + 'B537155365/', R + 'B537683112/', R + 'B537808658/', R + 'B537998419/', R + 'B538603600/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Buy a ticket at the machine; free hojicha refills.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区下鴨泉川町59 下鴨神社境内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official shrine site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.037575, 135.772368); cross-checked: GSI 京都府京都市左京区下鴨泉川町59番地 (lot, the shrine grounds) 135m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537683112/', R + 'B533927310/', TB + 'dtlmenu/'],
    price_note: 'Prices from August–November 2026 reviews; the Tabelog menu dates from 2012.', last_checked: TODAY, items: [
      it('申餅', '', 'Saru-mochi with black-soybean tea', '¥500', 'Wagashi', 'ask', 'ask', 'October 2026.', 'saru_mochi'),
      it('鴨の氷室の氷', '', 'Kamo ice-house kakigori (summer), matcha-azuki', '¥1,300', 'Kakigori', 'ask', 'ask', 'August 2026.', 'himuro_kakigori'),
      it('良縁ぜんざい', '', 'Ryoen zenzai (Tanba azuki)', '', 'Wagashi', 'ask', 'ask', '', 'ryoen_zenzai'),
    ] }, {
    cuisine: '下鴨神社の休憩処で、神社ゆかりの甘味 (公式サイト)・葵祭りの申餅: 小豆の茹で汁で搗いた淡い「はねず色」の御餅、約140年ぶりに復元。丹波の黒豆のまめ豆茶と500円 (2026年10月)、冷たい豆茶とのセット550円 (食べログのメニュー、2012年)・相生社に供えた丹波大納言小豆の良縁ぜんざい (公式サイト)・夏の「鴨の氷室の氷」(Hosendo の丹波大納言のあんの抹茶あずき、黒糖と白玉、いちごミルク) 1,300円、ほうじ茶付き (2026年8月)・Aoi Monaka、冷たい緑茶 (2026年8月)',
    neighborhood: '下鴨神社の境内、糺の森。出町柳駅から徒歩10分',
    gf_detail: '要確認。申餅はあんの入った餅菓子、夏の氷はシロップと白玉、もなかは皮を使う。原材料の一覧は公開されていない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。申餅、豆茶、ぜんざい、抹茶あずきの氷は基本的に植物性だが、いちごと黒糖の氷にはミルクがかかり、原材料の一覧は公開されていない (公式サイト、2026年の口コミ)。',
    notes: '[甘味処・下鴨神社、復元された葵祭りの申餅] 下鴨神社の境内、糺の森のそばの休憩処。名物は、小豆の茹で汁で明け方の空のようなはねず色に搗いた葵祭りの申餅で、約140年ぶりに復元されたもの。かつて神官が飲んだ黒豆のまめ豆茶と (500円)。夏は Hosendo のあんをのせた「鴨の氷室の氷」(1,300円)、冬は丹波小豆のぜんざい。支払いは券売機、ほうじ茶はおかわり自由。毎日10時〜16時半。',
  });
}

// ================================================================ 亀屋良長 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26000331/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kameya-yoshinaga.com/';
  const H = day(['09:30', '18:00']);
  put({
    id: 'kyoto_kameya_yoshinaga_honten', name: '亀屋良長 本店 (Kameya Yoshinaga Honten)', category: 'OMNI',
    lat: 35.003843, lng: 135.752991, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mostly bean-paste wagashi; a September 2026 reviewer saw new gluten-free products such as a bean-paste spread for bread, while monaka, castella-style An no Hako and baked sweets contain wheat; no full ingredient list was read (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Ubatama (black-sugar bean-paste balls coated in agar) and many bean-paste sweets are plant-based in principle, but no ingredient list was read; An no Hako combines Western-pastry technique (2026 reviews).',
    hours_raw: 'Shop 9:30–18:00 and tea room 11:00–17:00, every day; closed 1–2 January (Tabelog). The online shop’s phone line runs 9:00–17:30, closed 1–3 January (official site). Takeaway mainly; the tea room has 4 seats at 2 tables and serves fresh wagashi and kakigori (Tabelog; September 2026); the 吉村和菓子店 corner is at the back (Tabelog). Cards, e-money and QR; paper bags for a fee (Tabelog; September 2026). On Shijo-dori west of Aburanokoji; 5–6 min from Hankyu Omiya Stn (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-dori between Omiya and Horikawa — 5 min from Hankyu Omiya Stn',
    cuisine: 'Kyoto confectioner founded in 1803 (official site), branched from Kameya Yoshian and settled at Shijo Sakai for its water (2026 reviews); brands 亀屋良長, Satomi Fujita and 吉村和菓子店 (official site) · 烏羽玉 (ubatama): jet-black balls of smooth bean paste made with Hateruma black sugar, coated in agar, 6 for ¥540 (Tabelog menu, January 2026; 2026 reviews); seasonal assortments such as apricot-lemon ¥648 (September 2026) · Kyo Monaka about ¥300, An no Hako (castella-like bean-paste cake), Ichiyo Raifuku bean crackers, instant shiruko Hane Usagi ¥540 with a fortune slip (2026 reviews) · slice yokan, monaka, rice-cake sweets, baked sweets, senbei, higashi (official site) · fresh wagashi and kakigori in the 4-seat tea room (September 2026)',
    website: SITE, gmaps: gm('亀屋良長 本店 四条'), menu_url: SITE,
    notes: "[Wagashi · Shijo-Horikawa, a confectioner since 1803] An old Kyoto confectioner on Shijo-dori, founded in 1803 and still making its signature 烏羽玉: small jet-black balls of smooth bean paste and Hateruma black sugar, glossy with agar (six for ¥540). The bright, renovated shop also sells modern lines — An no Hako, bean-paste spreads, seasonal assortments — under the 亀屋良長, Satomi Fujita and 吉村和菓子店 names, and a four-seat tea room serves fresh wagashi and summer kakigori. Mostly takeaway. Daily 9:30–18:00.",
    chef_bio: { chef_name: null, roles: ['Family confectioner; the site links to the 八代目 (eighth generation) and the okami on X; no names read'], origin: null,
      background: 'Per the official site: founded in 1803; brands 亀屋良長, Satomi Fujita and 吉村和菓子店; wagashi-making classes and a collaboration with SOU・SOU. Per 2026 reviews: an independent offshoot of Kameya Yoshian from the Edo period, which settled at Shijo-Sakai for good water; the ubatama, made with Hateruma black sugar, has been made since the founding (September 2026); a September 2026 visitor found the store newly opened and beautiful, staffed by polite young women, with new gluten-free products.',
      philosophy: 'Per 2026 reviews: cherishing traditional Kyoto sweets while bringing in techniques and ingredients from Western confectionery.',
      specialty: '烏羽玉; Kyo Monaka; An no Hako.',
      anecdotes: [
        { text: 'A September 2026 visitor called the ubatama "small, jet-black balls beautifully arranged" that shimmered in the light.', source: R + 'B535305903/' },
        { text: 'An October 2026 buyer found the shiruko easy to make, with a fortune slip read from the shape of its amber jelly.', source: R + 'B536789712/' },
        { text: 'An October 2026 visitor thought the Ichiyo Raifuku bean crackers deserve to be better known.', source: R + 'B538062659/' },
      ],
      japanese_sources_summary: '公式サイト (kameya-yoshinaga.com): 創業1803年の京菓子司 亀屋良長、ブランド: 亀屋良長、Satomi Fujita、吉村和菓子店、烏羽玉、スライスようかん、もなか、おしるこ、涼菓、餅菓子、焼き菓子、せんべい、干菓子、羊羹、和菓子手づくり教室、SOU・SOU×亀屋良長、電話 9:00〜17:30 (1月1日〜3日休み)。食べログ: 和菓子、下京区四条通油小路西入柏屋町17-19、大宮駅から351m、販売9:30〜18:00、茶房11:00〜17:00、1月1日・2日休み、4席 (2卓)、カード・電子マネー・QR 可、テイクアウト、奥に吉村和菓子店のコーナー、メニュー (2026年1月更新): 烏羽玉 (6個) 540円。口コミ (2026年8〜10月、英語): 烏羽玉 (Hateruma の黒糖)、An no Hako、Kyo Monaka、Ichiyo Raifuku、Hane Usagi のおしるこ540円、1803年創業、Kameya Yoshian からの暖簾分け、グルテンフリーの品も。',
      confidence: 'medium', sources: [TB, SITE, TB + 'dtlmenu/', R + 'B533615061/', R + 'B534182586/', R + 'B535056687/', R + 'B535305903/', R + 'B535500687/', R + 'B536207752/', R + 'B536609451/', R + 'B536734115/', R + 'B536759248/', R + 'B536789712/', R + 'B537979051/', R + 'B538062659/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Mostly takeaway; a four-seat tea room for fresh wagashi.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通油小路西入柏屋町17-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing (menu January 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003843, 135.752991); cross-checked: GSI 京都府京都市下京区柏屋町17番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/', R + 'B535500687/', R + 'B536789712/'],
    price_note: 'Tabelog menu (January 2026) and September–October 2026 reviews.', last_checked: TODAY, items: [
      it('烏羽玉', '', 'Ubatama, 6 pieces (black-sugar bean-paste balls)', '¥540', 'Wagashi', 'ask', 'ask', '', 'ubatama'),
      it('', '', 'Seasonal ubatama assortment, 6 pieces', '¥648', 'Wagashi', 'ask', 'ask', 'September 2026.', 'ubatama_assort'),
      it('', '', 'Instant shiruko "Hane Usagi"', '¥540', 'Wagashi', 'ask', 'ask', 'October 2026.', 'shiruko'),
    ] }, {
    cuisine: '1803年創業の京菓子司 (公式サイト)。江戸時代に Kameya Yoshian から独立し、水を求めて Shijo Sakai に (2026年の口コミ)。ブランドは亀屋良長、Satomi Fujita、吉村和菓子店 (公式サイト)・烏羽玉: Hateruma の黒糖のこしあんを寒天で包んだ漆黒の玉、6個540円 (食べログのメニュー、2026年1月、2026年の口コミ)。季節の詰め合わせ、杏とレモンなど648円 (2026年9月)・Kyo Monaka 約300円、An no Hako (カステラのようなあんの菓子)、Ichiyo Raifuku (豆のせんべい)、おみくじ付きのおしるこ Hane Usagi 540円 (2026年の口コミ)・スライスようかん、もなか、餅菓子、焼き菓子、せんべい、干菓子 (公式サイト)・4席の茶房で生菓子とかき氷 (2026年9月)',
    neighborhood: '大宮と堀川の間の四条通。阪急大宮駅から徒歩5分',
    gf_detail: '要確認。あんの和菓子が中心。2026年9月の客はパン用のあんなどグルテンフリーの新商品を見ているが、もなか、An no Hako、焼き菓子は小麦を含む。原材料の一覧は確認していない (2026年の口コミ)。',
    vegan_detail: '要確認。烏羽玉 (黒糖のこしあんを寒天で包む) などあんの菓子は基本的に植物性だが、原材料は確認していない。An no Hako は洋菓子の技法も使う (2026年の口コミ)。',
    notes: '[和菓子・四条堀川、1803年創業の京菓子司] 四条通の老舗の京菓子司。1803年創業、今も名物は烏羽玉で、Hateruma の黒糖のこしあんを寒天で艶やかに包んだ小さな漆黒の玉 (6個540円)。改装した明るい店には、An no Hako、あんのスプレッド、季節の詰め合わせなど、亀屋良長、Satomi Fujita、吉村和菓子店の名の新しい菓子も並び、4席の茶房では生菓子や夏のかき氷も。持ち帰りが中心。毎日9時半〜18時。',
  });
}

save();
