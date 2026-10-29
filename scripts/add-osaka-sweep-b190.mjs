// Osaka sweep (2-mile circle around Dotonbori), batch 190 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + 鉄板焼き Oribe (bistro-style teppanyaki à la carte ending in okonomiyaki; Shinmachi)
//   + Yabu Distillery Restaurant 養父蒸溜所 (counter courses with whisky, wine or non-alcoholic pairings; Minami-Senba)
//   + nöjd ICE CREAM (homemade ice cream with sorbets and oat-milk flavors, quiche lunch plates; Minami-Horie)
//   + Hot Cross 南堀江店 (bakery café known for curry bread; Minami-Horie)
//   - skip 海鮮丼の駅前 心斎橋店 (Ekimae group chain; listing links ekimae-group.co.jp/shop/kaisendon/)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 190);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鉄板焼き Oribe
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27013493/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://o-ri-be.com/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'osaka_teppanyaki_oribe_shinmachi', name: '鉄板焼き Oribe (Teppanyaki Oribe)', category: 'OMNI',
    lat: 34.676239, lng: 135.49619, cuisine_type: 'okonomiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the menu runs from baguette with rillettes to sauces, okonomiyaki and cake.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: pork rillettes, seafood, wagyu, Gorgonzola and okonomiyaki with seafood.',
    hours_raw: 'Tue–Sun 18:00–22:00 (last order 21:00); closed Monday and the third Tuesday of the month (Tuesday if Monday is a holiday); check the official site (Tabelog). Reservations accepted and recommended; one diner found it fully booked on the door (Tabelog; November 2025). ¥550 appetizer charge per person (Tabelog). Cards (JCB, AMEX) only; no e-money or QR (Tabelog). 15 seats: 11 at the counter, 4 at a table; non-smoking; ask ahead about children of elementary age or younger (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-6-18, Takara House Yotsubashi 1F — 5 min from Yotsubashi Stn Exit 2',
    cuisine: 'Bistro-style teppanyaki with French technique, ordered à la carte and served course-style (15 seats) · pork rillettes with red cabbage and baguette · Canadian lobster and scallops with salted onion mousse and lobster consommé jelly ¥3,960 · wild red shrimp and snow crab with carrot mousse · cabbage steak with Gorgonzola (half portions possible) · sautéed cod milt with Shimonita leeks and port-wine onion sauce · Black Wagyu sirloin cap steak 100 g · wagyu tendon and garlic rice · mixed seafood okonomiyaki to finish · chocolate cake with vanilla ice cream · wine',
    website: OWN, gmaps: gm('鉄板焼き Oribe 四ツ橋'), menu_url: null,
    notes: "[Teppanyaki · French-leaning teppanyaki that ends in okonomiyaki, Yotsubashi] A calm, wood-toned counter near Yotsubashi Station that cooks teppanyaki with French technique and still finishes the Osaka way, with okonomiyaki. You order à la carte and dishes arrive course-style: pork rillettes with red cabbage, lobster and scallops with salted onion mousse and lobster consommé jelly (¥3,960), the signature cabbage steak under a Gorgonzola sauce (mop it up with baguette), cod milt with Shimonita leeks, a 100 g Black Wagyu sirloin cap steak, then garlic rice or a mixed seafood okonomiyaki. Portions suit two, and one pair of diners was allowed to take leftovers home. Run by two people, so service can be slow; one diner felt pressed to order a full run from appetizer to dessert. Book ahead; ¥550 appetizer charge; JCB or AMEX only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Teppanyaki and okonomiyaki restaurant using French techniques (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Cabbage steak with Gorgonzola; seafood starters; okonomiyaki finish.',
      anecdotes: [
        { text: '"The lobster meat was plump and elastic, paired with a fluffy, sweet salted onion mousse. On top, a consommé jelly made from simmered lobster shells added depth…" — November 2025, Canadian Lobster, Scallops, Salted Onion Mousse and Lobster Consommé Jelly ¥3,960.', source: R + 'B510708562/' },
        { text: '"The specialty here was delicious, featuring a Gorgonzola sauce. I recommend dipping the leftover sauce with a baguette." — August 2026, cabbage steak.', source: R + 'B535478048/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板焼き Oribe、大阪市西区新町1-6-18 タカラハウス四ツ橋 1F、四ツ橋駅2番出口から徒歩5分、火〜日18:00〜22:00 (L.O. 21:00)、月曜と第3火曜休み (月曜祝日なら火曜)、予約可、付き出し550円、カード (JCB・AMEX) のみ、電子マネー・QR不可、15席 (カウンター11席、テーブル4席)、禁煙、小学生以下は予約時に確認、公式サイトあり。口コミ(2025年11月〜2026年8月): フレンチの技法の鉄板焼き、アラカルトをコースのように出す、豚のリエットと紫キャベツとバゲット、カナダ産ロブスターとホタテと塩玉ねぎのムースとロブスターのコンソメジュレ3960円、天然の赤海老とズワイガニと人参のムース、ゴルゴンゾーラのキャベツステーキ (ハーフも)、タラの白子のソテーと Shimonita ねぎとポートワインの玉ねぎソース、 Black Wagyu のサーロインキャップのステーキ100g、 wagyu のすじとガーリックライス、ミックスのお好み焼きで締め、チョコレートケーキとバニラアイス、量は2人前が基本で残りを持ち帰らせてもらえた、2人で営業で提供に時間がかかる、前菜からデザートまで注文するよう強く言われたという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B510708562/', R + 'B518438948/', R + 'B519942066/', R + 'B522556448/', R + 'B522927729/', R + 'B535478048/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; à la carte served as a course; JCB/AMEX only (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区新町1-6-18 タカラハウス四ツ橋 １Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated November 2025–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目6番18号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B510708562/', R + 'B519942066/', R + 'B522556448/'],
    price_note: 'Prices from a November 2025 review; ¥550 appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'Canadian lobster and scallops, salted onion mousse, lobster consommé jelly', '¥3,960', 'Starters', 'ask', 'no', 'November 2025.', 'lobster'),
      it('', '', 'Cabbage steak with Gorgonzola', '', 'Teppan', 'ask', 'no', 'December 2025–August 2026.', 'cabbage'),
      it('', '', 'Black Wagyu sirloin cap steak (100 g)', '', 'Teppan', 'ask', 'no', 'December 2025.', 'steak'),
      it('', '', 'Mixed seafood okonomiyaki', '', 'Teppan', 'no', 'no', 'December 2025–January 2026.', 'okonomiyaki'),
    ] }, {
    cuisine: 'フレンチの技法のビストロ風の鉄板焼き、アラカルトをコースのように (15席)・豚のリエット、紫キャベツとバゲット・カナダ産ロブスターとホタテ、塩玉ねぎのムース、ロブスターのコンソメジュレ3960円・天然の赤海老とズワイガニ、人参のムース・ゴルゴンゾーラのキャベツステーキ (ハーフも)・タラの白子のソテー、 Shimonita ねぎとポートワインの玉ねぎソース・ Black Wagyu のサーロインキャップのステーキ100g・ wagyu のすじとガーリックライス・締めにミックスのお好み焼き・チョコレートケーキとバニラアイス・ワイン',
    neighborhood: '新町1-6-18 タカラハウス四ツ橋 1F。四ツ橋駅2番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。バゲットとリエットからソース、お好み焼き、ケーキまで。',
    vegan_detail: '実質ヴィーガンではありません。豚のリエット、魚介、 wagyu、ゴルゴンゾーラ、魚介入りのお好み焼き。',
    notes: '[鉄板焼き・四ツ橋、フレンチ寄りの鉄板焼きとお好み焼きの締め] 四ツ橋駅近く、木の落ち着いたカウンターで、フレンチの技法の鉄板焼きを出しながら最後は大阪らしくお好み焼きで締める。注文はアラカルトで、コースのように順に出てくる。紫キャベツを添えた豚のリエット、塩玉ねぎのムースとロブスターのコンソメジュレをのせたロブスターとホタテ (3960円)、看板のゴルゴンゾーラのソースのキャベツステーキ (残ったソースはバゲットで)、 Shimonita ねぎとタラの白子、 Black Wagyu のサーロインキャップ100g、そしてガーリックライスかミックスのお好み焼き。量は2人前が基本で、残りを持ち帰らせてもらえたという声も。2人で営業しているので提供はゆっくりめ。前菜からデザートまで頼むよう強く言われたという声も。予約がおすすめ。付き出し550円、カードはJCBかAMEXのみ。',
  });
}

// ================================================================ Yabu Distillery Restaurant
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27139497/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://yabu-distillery.co.jp/';
  const D = day(['18:00', '22:00']); const SU = day(['12:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_yabu_distillery_restaurant_minamisenba', name: 'Yabu Distillery Restaurant 養父蒸溜所', category: 'OMNI',
    lat: 34.677045, lng: 135.498264, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the course includes bread and ends with a duck ramen.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a set course of seafood, venison, duck and beef.',
    hours_raw: 'Wed–Sat 18:00–22:00; Sunday 12:00–14:00 and 18:00–22:00; closed Monday and Tuesday (Tabelog). Reservations only, by phone (13:00–17:00 on business days) or Instagram message; enter no earlier than 10 minutes before the course time (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) accepted; no e-money or QR; no service or table charge (Tabelog). 11 counter seats; non-smoking; English menu; no sandals or shorts; children only if old enough for the course (Tabelog). Opened 11 January 2024 (Tabelog).',
    hours: { 2: D, 3: D, 4: D, 5: D, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 4-10-18, Nasa Prime House Annex 1F — 5 min from Shinsaibashi Stn North Exit 12 or Yotsubashi Stn Exit 1-A',
    cuisine: 'Counter course restaurant of a whisky distillery (11 seats) · seasonal set course with a choice of whisky, wine or non-alcoholic pairing for each dish: finger foods such as red shrimp and sea urchin with yuzu; chilled corn soup with prosciutto; ayu dishes; grilled sea bream with crisp scales, winter melon and green onion oil; Yabu venison with chimichurri; bluefin tuna aged in Tajima red vinegar; Ezo abalone with escargot butter; Tajima beef ribeye or Tajima duck; Tajima duck ramen with a choice of portion; two desserts · Sunday lunch course ¥7,800 (August 2026) · the distillery\'s own young whisky "Yabu"',
    website: OWN, gmaps: gm('養父蒸溜所 心斎橋'), menu_url: null,
    notes: "[Innovative · seasonal course with whisky pairings, Minami-Senba] An 11-seat counter restaurant run by a whisky distillery, where each course dish comes with a choice of whisky, wine or a non-alcoholic drink, and the staff explain each pairing in detail. The seasonal menu leans on Hyogo produce: finger foods such as red shrimp and sea urchin with yuzu, chilled corn soup with prosciutto, ayu, sea bream grilled with crisp scales, Yabu venison, Tajima-vinegar-aged bluefin, then Tajima beef or duck, and an unexpected finish of Tajima duck ramen in a portion you choose, followed by two desserts that one diner rated at patisserie level. The distillery's own young whisky 'Yabu' is on offer. Sunday lunch was ¥7,800 in August 2026; dinner runs ¥15,000–29,999 with pairings in reviews. Reservations only; no sandals or shorts. Closed Mondays and Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 January 2024 (Tabelog).', background: 'Restaurant of a whisky distillery serving French-innovative courses (Tabelog; 2026 reviews).', philosophy: 'Each dish paired with a choice of whisky, wine or a non-alcoholic drink (2026 reviews).', specialty: 'Seasonal course; Tajima duck ramen finish.',
      anecdotes: [
        { text: '"The shrimp and sea urchin finger foods had a refreshing yuzu aroma… The chilled corn soup paired excellently with the prosciutto…" — August 2026, lunch ¥7,800.', source: R + 'B533323159/' },
        { text: '"The pairing menu includes two non-alcoholic options, allowing you to choose from three selections that complement each dish." — August 2026, pairing course ending with Tajima Duck Ramen.', source: R + 'B534736091/' },
      ],
      japanese_sources_summary: '食べログ: Yabu Distillery Restaurant 養父蒸溜所、大阪市中央区南船場4-10-18 ナサプライムハウス別館 1F、心斎橋駅北12番出口・四ツ橋駅1-A出口から徒歩5分、水〜土18:00〜22:00、日12:00〜14:00・18:00〜22:00、月・火休み、完全予約制 (電話は営業日の13時〜17時、InstagramのDMでも)、入店はコースの10分前から、カード (VISA・Master・JCB・AMEX・Diners) 可、電子マネー・QR不可、サービス料・チャージなし、カウンター11席、禁煙、英語メニュー、サンダル・短パン不可、子どもはコースを食べられる年齢から、2024年1月11日開店、公式サイトあり。口コミ(2026年2〜9月): 料理ごとにウイスキー・ワイン・ノンアルコールから選べるペアリング、ていねいな説明、赤海老とウニのフィンガーフード (柚子)、冷たいとうもろこしのスープと生ハム、 ayu、鱗を焼いた鯛、冬瓜と青ねぎのオイル、 Yabu の鹿肉とチミチュリ、 Tajima の赤酢で熟成した本鮪、 Ezo アワビとエスカルゴバター、 Tajima 牛のリブロースや Tajima の鴨、締めは量を選べる Tajima の鴨のラーメン、デザート2品、蒸溜所の若いウイスキー「 Yabu」、日曜のランチ7800円 (2026年8月)。',
      confidence: 'medium', sources: [TB, OWN, R + 'B501403370/', R + 'B514083441/', R + 'B525086798/', R + 'B533323159/', R + 'B534736091/', R + 'B534858082/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservations only; English menu; pairings explained at the counter (Tabelog, 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-10-18 ナサプライムハウス別館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated February–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目10番18号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533323159/', R + 'B534736091/'],
    price_note: 'Lunch price from an August 2026 review; dinner with pairings ¥15,000–29,999 per person in reviews.', last_checked: TODAY, items: [
      it('', '', 'Sunday lunch course', '¥7,800', 'Courses', 'ask', 'no', 'August 2026.', 'lunch'),
      it('', '', 'Dinner course with whisky, wine or non-alcoholic pairing', '', 'Courses', 'ask', 'no', '2026 reviews.', 'dinner'),
      it('', '', 'Tajima duck ramen (course finish)', '', 'Courses', 'no', 'no', 'August 2026.', 'ramen'),
    ] }, {
    cuisine: 'ウイスキー蒸溜所のカウンターのコースの店 (11席)・料理ごとにウイスキー・ワイン・ノンアルコールから選べるペアリングの季節のコース: 赤海老とウニのフィンガーフード (柚子)、冷たいとうもろこしのスープと生ハム、 ayu、鱗をパリッと焼いた鯛と冬瓜と青ねぎのオイル、 Yabu の鹿肉とチミチュリ、 Tajima の赤酢で熟成した本鮪、 Ezo アワビとエスカルゴバター、 Tajima 牛のリブロースか Tajima の鴨、量を選べる Tajima の鴨のラーメン、デザート2品・日曜のランチのコース7800円 (2026年8月)・蒸溜所の若いウイスキー「 Yabu」',
    neighborhood: '南船場4-10-18 ナサプライムハウス別館 1F。心斎橋駅北12番出口・四ツ橋駅1-A出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。コースにはパンがあり、締めは鴨のラーメン。',
    vegan_detail: 'ヴィーガンではありません。魚介、鹿肉、鴨、牛肉のおまかせのコース。',
    notes: '[イノベーティブ・南船場、ウイスキーのペアリングで味わう季節のコース] ウイスキー蒸溜所が営む11席のカウンターの店で、コースの料理ごとにウイスキー・ワイン・ノンアルコールから選べ、ペアリングの説明もていねい。季節のメニューは兵庫の素材が中心で、柚子の香る赤海老とウニのフィンガーフード、冷たいとうもろこしのスープと生ハム、 ayu、鱗をパリッと焼いた鯛、 Yabu の鹿肉、 Tajima の赤酢で熟成した本鮪、そして Tajima 牛か鴨。締めは量を選べる Tajima の鴨のラーメンという意外さで、デザート2品はパティスリー並みという声も。蒸溜所の若いウイスキー「 Yabu」も飲める。日曜のランチは7800円 (2026年8月)、夜はペアリング込みで口コミでは1万5000〜3万円ほど。完全予約制、サンダル・短パン不可。月・火休み。',
  });
}

// ================================================================ nöjd ICE CREAM
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27144531/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.nojdicecream.com/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'osaka_nojd_ice_cream_minamihorie', name: 'nöjd ICE CREAM', category: 'OMNI',
    lat: 34.672347, lng: 135.492104, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog lists gluten-free options and allergy information, and the breakfast plate uses rice-flour bread or rice-flour pancakes. Cross-contact handling is not described; ask which ice creams and cakes avoid gluten (cookie, popcorn and cake mix-ins exist).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some options: Tabelog lists vegan options, and the case includes fruit sorbets (mango and cardamom, peach and Earl Grey) and an oat-milk caramel banana ice cream. Lunch plates use egg and dairy; ask which flavors are vegan.',
    hours_raw: 'Mon and Wed–Sun 11:00–18:00 (last order 17:30); closed Tuesday (Tabelog). Breakfast plate on Fridays and Saturdays 8:00–11:00 (June 2026). Reservations by phone; lunch sets can be reserved on Tabelog (Tabelog; 2026). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR accepted (Tabelog). 10 table seats; non-smoking; wheelchair accessible; pets OK; English menu; takeout (Tabelog). Free tasting spoons (2026). Opened 13 September 2024 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Horie 2-1-15, Splendid Horie unit 1, set back from the main road — 5 min from Nishi-Ohashi Stn',
    cuisine: 'Homemade ice cream shop and café (10 seats) · about 14 flavors with tastings: 1 scoop ¥640, 2 scoops ¥790, 3 minis ¥840 · flavors such as matcha and salted black cocoa cookie, pistachio and caramel walnut, strawberry and berry, caramel banana oat milk, corn and caramel popcorn, mango and cardamom sorbet, peach and Earl Grey sorbet · quiche plate lunch with soup, salad and a dessert plate ¥1,950 · chicken rice plate · breakfast plate ¥1,190 (Fri–Sat mornings; rice-flour bread or pancakes, Tanba vegetables, soft-boiled egg, Greek yogurt, homemade juice) · carrot cake, pound cake, hojicha latte',
    website: OWN, gmaps: gm('nöjd ICE CREAM 南堀江'), menu_url: null,
    notes: "[Sweets · homemade ice cream with sorbets, oat-milk flavors and quiche lunches, Minami-Horie] A bright ice cream café tucked a little off the main road in Minami-Horie, whose name means 'satisfied' in Swedish. The case holds about 14 homemade flavors, and you can taste before you choose: matcha with salted black cocoa cookie, pistachio and caramel walnut, a creamy caramel banana made with oat milk, and seasonal sorbets like mango and cardamom (one diner found the spice faint). Scoops run ¥640–840. It's also a lunch spot: the quiche plate (¥1,950 with a dessert plate) comes with a thick soup and a dill salad, and on Friday and Saturday mornings there's a breakfast plate with rice-flour bread or pancakes and Tanba vegetables (¥1,190). Tabelog lists vegan and gluten-free options; ask at the counter. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 13 September 2024 (Tabelog).', background: 'Homemade ice cream shop and café (Tabelog; 2026 reviews).', philosophy: 'Quality ingredients and methods for treats that are gentle on the body (Tabelog listing).', specialty: 'Homemade ice cream; quiche plate lunch.',
      anecdotes: [
        { text: '"I was curious about the oat milk. Thanks to the caramel and banana, it had a rich, creamy milk flavor that was surprisingly good." — 2026, dessert plate with the quiche lunch.', source: R + 'B525804307/' },
        { text: '"The matcha flavor was rich and aromatic, and the slight bitterness and saltiness of the salted black cocoa cookie provided a nice contrast." — June 2026, 2 scoops ¥790.', source: R + 'B529983728/' },
      ],
      japanese_sources_summary: '食べログ: nöjd ICE CREAM、大阪市西区南堀江2-1-15 スプランディッド堀江 店舗1、西大橋駅から徒歩5分、月・水〜日11:00〜18:00 (L.O. 17:30)、火曜休み、電話で予約可、カード (VISA・Master・JCB・AMEX・Diners)・電子マネー・QR可、テーブル10席、禁煙、車椅子可、ペット可、英語メニュー、テイクアウト、アレルギー表示・ヴィーガン・ベジタリアン・グルテンフリーのメニューあり、2024年9月13日開店、公式サイトあり。店の紹介: スウェーデン語で「満足」、体にやさしい素材と製法、ランチも。口コミ(2026年6〜10月): 約14種のアイス、試食できる、1スクープ640円・2スクープ790円・ミニ3つ840円、抹茶と塩の黒ココアクッキー、ピスタチオとキャラメルくるみ、いちごとベリー、キャラメルバナナのオーツミルク、とうもろこしとキャラメルポップコーン、マンゴーとカルダモンのソルベ、桃とアールグレイのソルベ (スパイスは弱いという声)、キッシュのプレートのランチとデザートのプレート1950円 (濃いスープ、ディルのサラダ)、チキンライスのプレート、金・土の朝8〜11時のモーニングのプレート1190円 (米粉のパンかパンケーキ、 Tanba の野菜、半熟卵、ギリシャヨーグルト、手作りのジュース)、キャロットケーキ、パウンドケーキ、hojicha ラテ、大通りから少し奥の建物。',
      confidence: 'medium', sources: [TB, OWN, R + 'B525804307/', R + 'B529983728/', R + 'B531720628/', R + 'B533870463/', R + 'B535002078/', R + 'B537294652/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; tastings offered; allergy information available (Tabelog, 2026).' },
    safety: { ...SAFETY0, positives: ['Tabelog lists allergy information and vegan, vegetarian and gluten-free options.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江2-1-15 スプランディッド堀江 店舗1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江二丁目1番15号 (go) 33m — building set back from the road, kept the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529983728/', R + 'B525804307/', R + 'B531720628/'],
    price_note: 'Prices from June–September 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', '2 scoops (regular + mini)', '¥790', 'Ice cream', 'ask', 'ask', 'June 2026; 1 scoop ¥640, 3 minis ¥840.', 'scoops'),
      it('', '', 'Caramel banana oat milk ice cream', '', 'Ice cream', 'ask', 'ask', '2026.', 'oat'),
      it('', '', 'Quiche plate lunch with dessert plate', '¥1,950', 'Lunch', 'no', 'no', '2026.', 'quiche'),
      it('', '', 'Breakfast plate (rice-flour bread or pancakes)', '¥1,190', 'Breakfast', 'ask', 'no', 'June 2026; Fri–Sat 8:00–11:00.', 'breakfast'),
    ] }, {
    cuisine: '手作りのアイスクリームの店とカフェ (10席)・試食できる約14種: 1スクープ640円、2スクープ790円、ミニ3つ840円・抹茶と塩の黒ココアクッキー、ピスタチオとキャラメルくるみ、いちごとベリー、キャラメルバナナのオーツミルク、とうもろこしとキャラメルポップコーン、マンゴーとカルダモンのソルベ、桃とアールグレイのソルベなど・キッシュのプレートのランチ (スープ、サラダ、デザートのプレートつき) 1950円・チキンライスのプレート・モーニングのプレート1190円 (金・土の朝、米粉のパンかパンケーキ、 Tanba の野菜、半熟卵、ギリシャヨーグルト、手作りのジュース)・キャロットケーキ、パウンドケーキ、hojicha ラテ',
    neighborhood: '南堀江2-1-15 スプランディッド堀江 店舗1、大通りから少し奥。西大橋駅から徒歩5分',
    gf_detail: '要確認。食べログにグルテンフリーのメニューとアレルギー表示ありとあり、モーニングは米粉のパンか米粉のパンケーキ。交差接触の対応は不明で、クッキー・ポップコーン・ケーキ入りのフレーバーもあるので、どれがグルテンを含まないか確認を。',
    vegan_detail: '一部あり: 食べログにヴィーガンのメニューありとあり、フルーツのソルベ (マンゴーとカルダモン、桃とアールグレイ) やオーツミルクのキャラメルバナナがある。ランチのプレートは卵と乳製品を使う。どのフレーバーがヴィーガンか確認を。',
    notes: '[スイーツ・南堀江、ソルベやオーツミルクもある手作りアイスとキッシュのランチ] 南堀江の大通りから少し奥にある明るいアイスクリームのカフェで、店名はスウェーデン語で「満足」。ショーケースには手作りの約14種が並び、試食してから選べる。抹茶と塩の黒ココアクッキー、ピスタチオとキャラメルくるみ、オーツミルクのクリーミーなキャラメルバナナ、季節のマンゴーとカルダモンのソルベなど (スパイスは弱めという声も)。640〜840円。ランチにも使え、キッシュのプレート (デザートのプレートつき1950円) は濃いスープとディルのサラダつき。金・土の朝は米粉のパンかパンケーキに Tanba の野菜のモーニングのプレート (1190円)。食べログにヴィーガンとグルテンフリーのメニューありとあるので、店で確認を。火曜休み。',
  });
}

// ================================================================ Hot Cross 南堀江店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27000768/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.hotcross.co.jp/';
  const H = day(['08:00', '19:30']);
  put({
    id: 'osaka_hot_cross_minamihorie', name: 'Hot Cross 南堀江店 (Hot Cross Minami-Horie)', category: 'OMNI',
    lat: 34.672106, lng: 135.491936, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery (curry bread, sandwiches, French bread, buns).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: curry breads with meat and egg, sausage dogs, cheese and bacon breads; no vegan item described.',
    hours_raw: 'Mon and Wed–Sun 8:00–19:30; closed Tuesday (open if Tuesday is a holiday, then closed the next day) and over New Year; may change (Tabelog). No reservations (Tabelog). Cards (JCB, AMEX, Diners), e-money and QR accepted (Tabelog). 16 eat-in seats; eat-in requires a drink order (June 2026); non-smoking; takeout (Tabelog). Breakfast and sandwich menus (August 2026). A sister shop is in Kita-Horie (June 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Horie 2-2-11, GATO D.M Minami-Horie — about 6 min from Nishi-Ohashi Stn; bread counter on the right, eat-in space on the left',
    cuisine: 'Bakery café known for curry bread (16 seats) · curry breads: crispy minced-meat curry bread (like a menchi katsu inside); egg curry bread · curry cabbage dog · curry lunch · bacon French bread; pizza bread; mixed nuts bread ¥268; cheese "fromage" ¥328; anpan · sandwiches and a breakfast menu · coffee, café latte',
    website: OWN, gmaps: gm('ホットクロス 南堀江'), menu_url: null,
    notes: "[Bakery café · curry bread and a curry cabbage dog, Minami-Horie] A friendly, unpretentious bakery with an eat-in café on a stylish Minami-Horie street, known for its curry breads. The crispy minced-meat curry bread looks ordinary until you bite into a filling closer to a minced cutlet; there's an egg curry bread too, and the curry cabbage dog piles curry-spiced cabbage around a sausage. A curry lunch is served, and the shelves hold breads like mixed nuts (¥268), cheese fromage (¥328), bacon French bread and anpan, plus sandwiches and a breakfast menu from 8 am. Eating in requires a drink; the coffee gets praise. One diner found prices have crept up. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Bakery café with a sister shop in Kita-Horie (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Curry bread; curry cabbage dog.',
      anecdotes: [
        { text: '"It has a unique flavor and texture that combines the essence of curry bread and minced cutlet, making it a one-of-a-kind experience." — June 2026, Crispy Minced Curry.', source: R + 'B185523777/' },
        { text: '"The mixed nuts bread has a crumbly, soft texture and is sweet and delicious. There are plenty of nuts in it!" — August 2026, Mixed Nuts ¥268.', source: R + 'B534276196/' },
      ],
      japanese_sources_summary: '食べログ: ホット クロス 南堀江店、大阪市西区南堀江2-2-11 GATO D.M南堀江、西大橋駅から405m、月・水〜日8:00〜19:30、火曜休み (祝日なら営業し翌日休み)、年末年始休み、予約不可、カード (JCB・AMEX・Diners)・電子マネー・QR可、16席、禁煙、テイクアウト、公式サイトあり。口コミ(2025年7月〜2026年9月): カレーパンで知られるベーカリーカフェ、サクサクのミンチカレーパン (中はメンチカツのよう)、卵のカレーパン、カレーキャベツドッグ、カレーのランチ、ベーコンのフランスパン、ピザパン、ミックスナッツ268円、チーズのフロマージュ328円、 anpan、サンドイッチとモーニングのメニュー、イートインはドリンクの注文が必要、コーヒーもおいしいという声、北堀江にも店がある、値段が上がったという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B185523777/', R + 'B510612643/', R + 'B514163061/', R + 'B531389925/', R + 'B534276196/', R + 'B535045946/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick bread at the counter; eat-in with a drink order (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江2-2-11 GATO D.M南堀江',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江二丁目2番11号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534276196/', R + 'B185523777/'],
    price_note: 'Prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Crispy minced-meat curry bread', '', 'Bread', 'no', 'no', 'June 2026.', 'mincecurry'),
      it('', '', 'Curry cabbage dog', '', 'Bread', 'no', 'no', 'June 2026.', 'cabbagedog'),
      it('', '', 'Mixed nuts bread', '¥268', 'Bread', 'no', 'ask', 'August 2026.', 'nuts'),
      it('', '', 'Cheese fromage bread', '¥328', 'Bread', 'no', 'no', 'August 2026.', 'fromage'),
    ] }, {
    cuisine: 'カレーパンで知られるベーカリーカフェ (16席)・カレーパン: サクサクのミンチカレーパン (中はメンチカツのよう)、卵のカレーパン・カレーキャベツドッグ・カレーのランチ・ベーコンのフランスパン、ピザパン、ミックスナッツ268円、チーズのフロマージュ328円、 anpan・サンドイッチとモーニングのメニュー・コーヒー、カフェラテ',
    neighborhood: '南堀江2-2-11 GATO D.M南堀江。西大橋駅から徒歩6分ほど。右がパンの売り場、左がイートイン',
    gf_detail: 'グルテンフリーではありません。小麦のパンの店 (カレーパン、サンドイッチ、フランスパン、菓子パン)。',
    vegan_detail: '実質ヴィーガンではありません。肉や卵のカレーパン、ソーセージのドッグ、チーズやベーコンのパンで、ヴィーガンの記載なし。',
    notes: '[ベーカリーカフェ・南堀江、カレーパンとカレーキャベツドッグ] おしゃれな南堀江の通りにある、気取らない親しみやすいパン屋で、イートインのカフェつき。知られているのはカレーパン。サクサクのミンチカレーパンは見た目はふつうでも、中はメンチカツに近い。卵のカレーパンもあり、カレーキャベツドッグはカレー味のキャベツがソーセージをたっぷり包む。カレーのランチもあり、棚にはミックスナッツ (268円)、チーズのフロマージュ (328円)、ベーコンのフランスパン、 anpanなど。サンドイッチと朝8時からのモーニングも。イートインはドリンクの注文が必要で、コーヒーもおいしいという声。値段が上がったという声も。火曜休み。',
  });
}

skip('27105678', '海鮮丼の駅前 心斎橋店: Ekimae group chain branch (listing links ekimae-group.co.jp/shop/kaisendon/)');

save();
