// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 22.
//   + 紅茶倶楽部 Kocha Club (one-man tea specialist and café by Rokuharamitsu-ji, with pasta and scones)
//   + エスベトナム料理 S Vietnamese Ryori (Vietnamese on Kiyamachi near Oike, 2F; since 2023)
//   + ポワンプールポワン 府庁前店 Point Pour Point (bakery and cake shop by the Kyoto Prefectural Office)
//   + ACTUAL KYOTO (specialty coffee and cheesecake in a 100-year machiya by the Randen line; since 2023)
//   - シェイクシャック 京都四条烏丸 (26032046), 和牛火山おあがり 祇園店 (26041640) and 志津屋 祇園店 (26005532): skipped
//     (reasons below).
//   Picked on 2026-11-05: from `queue.mjs kyoto-missed next core 200`, lane ids 26015396, 26032046, 26041640, 26005532
//   (three skipped), 26039558; from `next notable 200`: 26001530, 26039246. None of the four is in data/kyoto.json by name
//   (紅茶倶楽部, エスベトナム/S Vietnam, ポワンプールポワン/Point Pour Point, ACTUAL) or address (東川原町508, 上大阪町515,
//   春帯町345, 壬生賀陽御所町20). S Vietnam’s Tabelog point is 1.5 m from ChIJ8fgL_FHnAGARtiRGS_o5ACY (MOON and BACK, hidden
//   'closed') — pin offset.
//   Same-name count (Greg's Samboa ruling): 紅茶倶楽部, エスベトナム料理 and ACTUAL KYOTO single shops. ポワンプールポワン is
//   named 府庁前店, implying another shop, but no second shop was found in the sources read — drafted and flagged.
//   Service charges checked against Tabelog's Japanese original: none listed for the four.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-22');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26032046', 'シェイクシャック 京都四条烏丸: a same-name chain — Shake Shack had 18 shops in Japan before its Hakata opening in late July 2026 (Have a Good Holiday article, read 2026-11-05), and is a multinational chain');
skip('26041640', '和牛火山おあがり 祇園店: a same-name chain expanding fast (Greg, 2026-11-02) — besides this shop, 肉の隠れ家 おあがり 祇園本店 and its first Sapporo outlet うしと肴 狸小路店 (fun-japan, 5 October 2024), 嵐山本店 (aumo) and 大阪なんば店, opened 9 September 2025 (aumo), all read 2026-11-05: five shops in Kyoto, Osaka and Sapporo');
skip('26005532', '志津屋 祇園店: a same-name chain — 志津屋 had 21 shops in Kyoto and one at Keihan Kuzuha (Keihan 枚方つーしん article, 17 March 2021, read 2026-11-05)');

// ================================================================ 紅茶倶楽部
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26015396/'; const R = TB + 'dtlrvwlst/';
  const BLOG = 'https://ameblo.jp/kyotokouchaclub/';
  const H = day(['11:00', '17:00']);
  put({
    id: 'kyoto_kocha_club_gojo', name: '紅茶倶楽部 (Kocha Club)', category: 'OMNI',
    lat: 34.997359, lng: 135.770594, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tea with scones, cakes (mille-feuille, Mont Blanc, petit cakes) and fresh tagliatelle; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Teas are plain leaf or flavoured; the pasta (carbonara, basil with steamed chicken) and cakes use egg, dairy or meat (2024–2026 reviews).',
    hours_raw: '11:00–17:00; closed Tuesday and the second Monday of each month (open that Monday for reservations; third Monday if the second is a holiday) (Tabelog). Reservations accepted; private hire by phone (Tabelog). Cards and PayPay accepted; no e-money (Tabelog). 10 seats (Tabelog). Non-smoking (Tabelog). Tea leaves, sweets and tea cosies to take away; some sweets are made by people with disabilities (Tabelog shop text). On Kaki-machi-dori by Rokuharamitsu-ji, 3 min from Keihan Kiyomizu-Gojo exit 5 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kaki-machi-dori by Rokuharamitsu-ji — 3 min from Keihan Kiyomizu-Gojo Stn',
    cuisine: 'Tea specialist café: leaf teas from many countries and flavoured blends, brewed with care; choose your own cup from the shelf and a cosy for the pot (2024–2026 reviews) · Nuwara Eliya with a scone about ¥1,200–1,300 (July 2024) · Afternoon Tea Blend 1 (Darjeeling and Assam); Ichigo Ichie, a strawberry-and-peach blend, sold by the 100 g (2026) · crisp scones, four petit cakes, mille-feuille, Mont Blanc (2024–2026) · pasta, tea and dessert set: fresh tagliatelle with basil and steamed chicken, or carbonara (March and October 2026) · iced tea in round cups (October 2026)',
    website: BLOG, gmaps: gm('紅茶倶楽部 京都 五条'), menu_url: null,
    notes: '[Kissa · Kiyomizu-Gojo, a one-man tea room] A ten-seat tea specialist near Rokuharamitsu-ji, run single-handed by a kind, elderly owner who explains every tea. Pick your own cup and pot cosy from the shelves, then a Darjeeling-Assam blend or a fruit tea with crisp scones, cake, or the fresh-pasta lunch set. Blankets on the chairs in winter; tea leaves and sweets to take home, some made by people with disabilities. Closed Tuesday and the second Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who runs the shop alone'], origin: null,
      background: 'A March 2026 reviewer describes the shop as run single-handed by a kind elderly gentleman; a January 2026 regular has come for about fifteen years. A July 2024 reviewer describes the owner as supporting children with disabilities, and the shop’s Tabelog text says some sweets on sale are made by people with disabilities. A November 2024 reviewer heard it is loved by Kyoto’s geiko and maiko.',
      philosophy: null, specialty: 'Leaf teas; scones; fresh pasta.',
      anecdotes: [
        { text: 'A February 2025 visitor came in from the snow to find blankets on the seats, and had the owner explain the teas before choosing a cup from the shelf.', source: R + 'B502900641/' },
        { text: 'An October 2026 visitor found it full with three groups at 1:30 on a weekday, bought 100 g of the strawberry-and-peach Ichigo Ichie blend in a pouch of choice, and resolved to book next time.', source: R + 'B537700424/' },
        { text: 'A September 2025 visitor noticed the floor by the entrance table sloped slightly.', source: R + 'B514151329/' },
      ],
      japanese_sources_summary: '食べログ: 紅茶倶楽部、喫茶店、東山区柿町通大黒町西入東川原町508、清水五条駅5番出口から徒歩3分、11:00〜17:00、火曜と第2月曜休み (予約があれば営業)、予約可、カード・PayPay可、10席、禁煙、茶葉、お菓子 (障がいのある方が作った商品も)、ティーコジーの販売、ブログ。口コミ (2024〜2026年、英語): 年配の店主がひとりで営む、棚からカップを選べる、ヌワラエリヤとスコーン約1,200〜1,300円、Afternoon Tea Blend 1、Ichigo Ichie (いちごと桃)、スコーン、ミルフィーユ、モンブラン、パスタと紅茶とデザートのセット (タリアテッレ)、芸妓さん舞妓さんにも愛される。',
      confidence: 'medium', sources: [TB, BLOG, R + 'B455500277/', R + 'B489026370/', R + 'B496420550/', R + 'B502900641/', R + 'B514151329/', R + 'B523653778/', R + 'B525490357/', R + 'B536838117/', R + 'B537700424/', R + 'B538470396/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ten seats, often full; reservations accepted; the owner explains the teas.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区柿町通大黒町西入東川原町508',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.997359, 135.770594); cross-checked: GSI 京都府京都市東山区東川原町508番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B489026370/'],
    price_note: 'No menu read; one price from a July 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Nuwara Eliya tea with a scone', '¥1,200', 'Tea', 'ask', 'ask', 'July 2024, recalled as about ¥1,200–1,300.', 'tea_scone'),
      it('', '', 'Pasta, tea and dessert set', '', 'Lunch', 'ask', 'no', 'March and October 2026; price not given.', 'pasta_set'),
    ] }, {
    cuisine: '紅茶専門の喫茶: さまざまな国の茶葉とフレーバーティー、丁寧に淹れる。棚からカップとポットのティーコジーを選べる (2024〜2026年の口コミ)・ヌワラエリヤとスコーンで約1,200〜1,300円 (2024年7月)・Afternoon Tea Blend 1 (ダージリンとアッサム)、いちごと桃の Ichigo Ichie は100g単位で販売 (2026年)・さくさくのスコーン、プチケーキ4種、ミルフィーユ、モンブラン (2024〜2026年)・パスタと紅茶とデザートのセット: バジルと蒸し鶏、カルボナーラの生パスタのタリアテッレ (2026年3月と10月)・丸いグラスのアイスティー (2026年10月)',
    neighborhood: '六波羅蜜寺近くの柿町通。京阪清水五条駅から徒歩3分',
    gf_detail: '要確認。紅茶にスコーン、ケーキ (ミルフィーユ、モンブラン、プチケーキ)、生パスタのタリアテッレ。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。紅茶はストレートやフレーバー。パスタ (カルボナーラ、バジルと蒸し鶏) やケーキは卵、乳製品、肉を使う (2024〜2026年の口コミ)。',
    notes: '[喫茶・清水五条、ひとりで営む紅茶の店] 六波羅蜜寺近くの10席の紅茶専門店。やさしい年配の店主がひとりで切り盛りし、紅茶を一つひとつ説明してくれる。棚から好きなカップとポットのティーコジーを選び、ダージリンとアッサムのブレンドやフルーツティーを、さくさくのスコーンやケーキ、生パスタのランチセットと。冬は椅子にブランケット。茶葉やお菓子も買え、障がいのある方が作ったお菓子も。火曜と第2月曜休み。',
  });
}

// ================================================================ エスベトナム料理
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039558/'; const R = TB + 'dtlrvwlst/';
  const IG = 'https://www.instagram.com/s_vietnamkyoto';
  const HW = day(['11:00', '15:00'], ['17:00', '22:00']); const HE = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_s_vietnam_kiyamachi', name: 'エスベトナム料理 (S Vietnamese Ryori)', category: 'OMNI',
    lat: 35.010307, lng: 135.770665, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pho uses rice noodles and fresh spring rolls rice paper, but banh mi is wheat bread and fried spring rolls and sauces are not described for gluten (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; the reviewed dishes use chicken, shrimp and fish sauce (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Lunch 11:00–15:00 daily; dinner 17:00–22:00 Monday–Thursday, 17:00–23:00 Friday–Sunday and holidays (Tabelog). Reservations accepted (Tabelog). Cards, e-money and QR accepted (Tabelog). 28 seats; private hire for 20–50 (Tabelog). Non-smoking; free Wi-Fi and power outlets; children welcome (Tabelog). Two staff at lunch (July 2025). Second floor of the MIYUKI building on Kiyamachi south of Oike, the lift opening straight into the restaurant; 1 min from Kyoto Shiyakusho-mae Stn (Tabelog; 2025–2026 reviews). Opened 7 June 2023 (Tabelog).',
    hours: { 0: HW, 1: HW, 2: HW, 3: HW, 4: HE, 5: HE, 6: HE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi south of Oike — 1 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Vietnamese cooking, named for the S-shape of Vietnam (Tabelog shop text) · lunch sets about ¥1,000–1,300 with dessert and a drink (2025–2026 reviews) · Special S set ¥1,200: half pho, fresh and fried spring rolls, mini rice bowl, salad, coconut-milk che, shrimp chips (2025–2026) · banh mi and half pho set ¥1,200–1,300; grilled-chicken pho (2025–2026) · shrimp fresh spring rolls ¥420, Hanoi fried spring rolls (two) ¥490 (July 2026) · Saigon beer; Asahi Super Dry ¥650 (February 2026) · takeaway (Tabelog)',
    website: IG, gmaps: gm('エスベトナム料理 京都 木屋町'), menu_url: null,
    notes: '[Vietnamese · Kiyamachi-Oike, pho and banh mi upstairs] A small, cheerfully decorated Vietnamese restaurant one floor up on Kiyamachi near Oike — the lift opens straight into the room. Lunch is the draw: the ¥1,200 Special S set brings half a pho, both kinds of spring rolls, a mini rice bowl, salad and che; or pair homemade banh mi with half a pho. Evenings run to beer and small plates. Seasoning is mild — add fish sauce at the table. Open daily.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog gives the opening as 7 June 2023; the shop’s text says the name comes from Vietnam’s S-shaped map. A July 2025 reviewer found two staff running lunch.',
      philosophy: null, specialty: 'Special S set; banh mi.',
      anecdotes: [
        { text: 'A June 2025 diner, drawn by high Google reviews despite a low Tabelog score, found the seasoning toned down for Japanese tastes and added plenty of fish sauce.', source: R + 'B509162459/' },
        { text: 'A February 2026 regular of a nearby Thai restaurant tried Vietnamese for a change and nearly walked past the street-level menu board.', source: R + 'B523150130/' },
      ],
      japanese_sources_summary: '食べログ: エスベトナム料理、ベトナム料理、中京区上大阪515 MIYUKIビル2F、京都市役所前駅から徒歩1分、昼11:00〜15:00、夜17:00〜22:00 (金〜日祝は23:00まで)、予約可、カード・電子マネー・QR可、28席、禁煙、Wi-Fi、電源、子ども可、テイクアウト、2023年6月7日オープン、店名はベトナムのS字の形から。口コミ (2025〜2026年、英語): スペシャルSセット1,200円 (ハーフのフォー、生春巻き、揚げ春巻き、ミニ丼、サラダ、チェー、えびせん)、バインミーとハーフフォーのセット1,200〜1,300円、えびの生春巻き420円、ハノイの揚げ春巻き490円、サイゴンビール、味はやさしめ。',
      confidence: 'medium', sources: [TB, IG, R + 'B509162459/', R + 'B510097282/', R + 'B510765788/', R + 'B512662639/', R + 'B515572466/', R + 'B521904717/', R + 'B523150130/', R + 'B523266580/', R + 'B532062280/', R + 'B536481842/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Upstairs, lift opens into the room; reviewers note many guests from abroad (June 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区上大阪515 MIYUKIビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.010357, 135.770665), offset about 6 m south to (35.010307, 135.770665) because ChIJ8fgL_FHnAGARtiRGS_o5ACY (MOON and BACK, hidden as closed) sits 1.5 m from the Tabelog point; cross-checked: GSI 京都府京都市中京区上大阪町515番地 (lot) 61m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B509162459/', R + 'B532062280/'],
    price_note: 'No menu read; prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special S set (half pho, spring rolls, mini rice bowl, salad, che, shrimp chips)', '¥1,200', 'Lunch', 'ask', 'no', '2025–2026.', 'special_s_set'),
      it('', '', 'Banh mi and half pho set', '¥1,300', 'Lunch', 'no', 'no', 'July 2026; ¥1,200 in June 2025.', 'banh_mi_pho_set'),
      it('', '', 'Shrimp fresh spring rolls', '¥420', 'Small plates', 'ask', 'no', 'July 2026.', 'goi_cuon_shrimp'),
      it('', '', 'Hanoi fried spring rolls, two', '¥490', 'Small plates', 'ask', 'no', 'July 2026.', 'nem_ran'),
    ] }, {
    cuisine: 'ベトナム料理。店名はベトナムのS字の形から (食べログの店紹介)・昼のセットはデザートと飲み物付きで約1,000〜1,300円 (2025〜2026年の口コミ)・スペシャルSセット1,200円: ハーフのフォー、生春巻きと揚げ春巻き、ミニ丼、サラダ、ココナッツミルクのチェー、えびせん (2025〜2026年)・バインミーとハーフフォーのセット1,200〜1,300円、焼いた鶏のフォー (2025〜2026年)・えびの生春巻き420円、ハノイの揚げ春巻き2本490円 (2026年7月)・サイゴンビール、アサヒスーパードライ650円 (2026年2月)・テイクアウト (食べログ)',
    neighborhood: '御池の南の木屋町。京都市役所前駅から徒歩1分',
    gf_detail: '要確認。フォーは米の麺、生春巻きはライスペーパーだが、バインミーは小麦のパンで、揚げ春巻きやたれのグルテンの説明はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにベジタリアン対応の記載。口コミの料理は鶏、えび、ヌクマムを使う (食べログ、2025〜2026年の口コミ)。',
    notes: '[ベトナム料理・木屋町御池、2階のフォーとバインミー] 御池近くの木屋町、エレベーターを降りるとそのまま店内の、にぎやかな飾りの小さなベトナム料理店。目当ては昼で、1,200円のスペシャルSセットにはハーフのフォー、2種の春巻き、ミニ丼、サラダ、チェー。手作りのバインミーとハーフフォーの組み合わせも。夜はビールと小皿。味はやさしめなので卓上のヌクマムで調整を。無休。',
  });
}

// ================================================================ ポワンプールポワン 府庁前店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001530/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '18:30']);
  put({
    id: 'kyoto_point_pour_point_fuchomae', name: 'ポワンプールポワン 府庁前店 (Point Pour Point, Fuchomae)', category: 'OMNI',
    lat: 35.018768, lng: 135.756599, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a bakery and cake shop of wheat breads, croissants, tarts and pies (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Croissants, tarts, cakes and filled breads use butter, cream, cheese or meat; the lean breads such as the 48-hour baguette are not described (2026 reviews).',
    hours_raw: '10:00–18:30, Wednesday–Sunday; closed Monday and Tuesday; hours may change (Tabelog). Reservations accepted (cakes, celebrations) (Tabelog). No cards or e-money; PayPay accepted (Tabelog). Takeaway; seats not listed (Tabelog). Non-smoking (Tabelog). No parking; coin parking nearby (July 2026). Near the Kyoto Prefectural Office and the Imperial Palace, 5 min from Marutamachi Stn (Tabelog; July–August 2026).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'By the Kyoto Prefectural Office — 5 min from Marutamachi Stn',
    cuisine: 'Bakery and cake shop that, per an August 2026 reviewer, changed from a cake shop to a bakery: hard and soft breads, savoury breads, baked goods and a cake showcase (2026 reviews) · mentaiko French bread, the 48-hour baguette, sausage breads, hot dogs, takuan-and-bonito bread (July–October 2026) · croissant ¥270, fig and cream cheese ¥230, fig and blue cheese ¥280, blueberry muffin ¥280, all before tax (July 2026) · fig croissant with vanilla cream, pear tart, onion tarte flambée, chocolate doughnut, canelé, mugwort and red-bean bread (June–August 2026) · thinly sliced apple pie, the house favourite (September–October 2026)',
    website: null, gmaps: gm('ポワンプールポワン 府庁前店'), menu_url: null,
    notes: '[Bakery · Prefectural Office, mentaiko bread and apple pie] A busy bakery-pâtisserie near the Kyoto Prefectural Office and the Imperial Palace, which an August 2026 regular says turned from a cake shop into a bakery. Regulars name the mentaiko French bread and the thin-sliced apple pie first; there are also croissants (¥270 before tax), fig breads, a 48-hour baguette, savoury twists such as takuan with bonito, and cakes in the case. PayPay but no cards; closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: ['Bakers (unnamed)'], origin: null,
      background: 'Not stated in the sources read. The shop name 府庁前店 implies another shop, but none was found.',
      philosophy: null, specialty: 'Mentaiko French bread; apple pie.',
      anecdotes: [
        { text: 'An August 2026 visitor came for the mentaiko French bread, found it not yet out of the oven, waited, and went straight home with it.', source: R + 'B534219546/' },
        { text: 'A July 2026 regular, who ranks it in a personal Kyoto top five, always buys the sausage breads.', source: R + 'B525887081/' },
      ],
      japanese_sources_summary: '食べログ: ポワンプールポワン 府庁前店、パン・ケーキ、上京区春帯町345、丸太町駅から365m、水〜日 10:00〜18:30、月・火休み、予約可、カード・電子マネー不可、PayPay可、テイクアウト、禁煙。口コミ (2026年、英語): ケーキ店からパン屋に、明太フランス、48時間のバゲット、ソーセージのパン、たくあんと鰹節のパン、クロワッサン270円、いちじくとクリームチーズ230円、いちじくとブルーチーズ280円、ブルーベリーマフィン280円 (税抜)、いちじくのクロワッサン、洋梨のタルト、タルトフランベ、チョコのドーナツ、カヌレ、よもぎと小豆のパン、薄切りのりんごのアップルパイ。',
      confidence: 'medium', sources: [TB, R + 'B525887081/', R + 'B530588695/', R + 'B531120493/', R + 'B531356470/', R + 'B531877098/', R + 'B534219546/', R + 'B534468358/', R + 'B535405947/', R + 'B536146346/', R + 'B537557334/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway bakery; PayPay but no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区春帯町345',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.018768, 135.756599); cross-checked: GSI 京都府京都市上京区春帯町345番地 (lot) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531356470/'],
    price_note: 'No menu read; prices before tax from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Croissant', '¥270', 'Bread', 'no', 'no', 'July 2026, before tax.', 'croissant'),
      it('', '', 'Fig and cream cheese bread', '¥230', 'Bread', 'no', 'no', 'July 2026, before tax.', 'fig_cream_cheese'),
      it('', '', 'Fig and blue cheese bread', '¥280', 'Bread', 'no', 'no', 'July 2026, before tax.', 'fig_blue_cheese'),
      it('', '', 'Blueberry muffin', '¥280', 'Baked goods', 'no', 'ask', 'July 2026, before tax.', 'blueberry_muffin'),
      it('', '', 'Mentaiko French bread', '', 'Bread', 'no', 'no', 'July–October 2026; price not given.', 'mentaiko_france'),
      it('', '', 'Apple pie', '', 'Cakes', 'no', 'ask', 'September–October 2026; price not given.', 'apple_pie'),
    ] }, {
    cuisine: '2026年8月の口コミによればケーキ店からパン屋に変わった店: ハード系とソフト系、惣菜パン、焼き菓子、ケーキのショーケース (2026年の口コミ)・明太フランス、48時間のバゲット、ソーセージのパン、ホットドッグ、たくあんと鰹節のパン (2026年7〜10月)・クロワッサン270円、いちじくとクリームチーズ230円、いちじくとブルーチーズ280円、ブルーベリーマフィン280円、いずれも税抜 (2026年7月)・バニラクリームのいちじくのクロワッサン、洋梨のタルト、新玉ねぎのタルトフランベ、チョコのドーナツ、カヌレ、よもぎと小豆のパン (2026年6〜8月)・薄切りのりんごのアップルパイが人気 (2026年9〜10月)',
    neighborhood: '京都府庁の近く。丸太町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。小麦のパン、クロワッサン、タルト、パイのパン屋とケーキ店 (2026年の口コミ)。',
    vegan_detail: '要確認。クロワッサン、タルト、ケーキ、惣菜パンにはバター、クリーム、チーズ、肉。48時間のバゲットなどシンプルなパンの材料は書かれていない (2026年の口コミ)。',
    notes: '[パン・府庁前、明太フランスとアップルパイ] 京都府庁と御所の近くのにぎわうパン屋兼洋菓子店。2026年8月の常連によればケーキ店からパン屋になった。常連がまず挙げるのは明太フランスと薄切りりんごのアップルパイ。クロワッサン (税抜270円)、いちじくのパン、48時間のバゲット、たくあんと鰹節などの惣菜パン、ショーケースのケーキも。PayPay可、カード不可、月・火休み。',
  });
}

// ================================================================ ACTUAL KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26039246/'; const R = TB + 'dtlrvwlst/';
  const RURUBU = 'https://rurubu.jp/andmore/article/19738';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_actual_kyoto_mibu', name: 'ACTUAL KYOTO', category: 'OMNI',
    lat: 35.002986, lng: 135.746298, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Specialty coffee with cheesecakes (classic Basque, matcha, chocolate, seasonal lemon); whether the cheesecakes contain flour is not stated (2023 article; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee suits; the cheesecakes, lattes and gelato use dairy (2023 article; 2026 reviews).',
    hours_raw: 'Tabelog: 10:00–18:00, closed Tuesday; hours may change. A July 2023 rurubu article gave Wednesday–Thursday 10:00–18:00, Friday–Sunday 11:00–18:00, evenings on Friday and Saturday, closed Monday and Tuesday. No reservations; queues — about an hour at 15:00 in October 2026; a July 2026 reviewer met unexpected closures (Tabelog; 2026 reviews). Cash, cards (VISA, Master), IC cards and PayPay (Tabelog). 20 seats over two floors; a terrace where pets are allowed (Tabelog; October 2026). Non-smoking (Tabelog). Beside the Randen Arashiyama line, 4 min from Hankyu Omiya Stn (Tabelog; 2026 reviews). Opened 14 April 2023 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Mibu, by the Randen line at Shijo-Omiya — 4 min from Hankyu Omiya Stn',
    cuisine: 'Specialty coffee and cheesecake in a machiya over 100 years old (rurubu, July 2023; 2026 reviews) · drip coffee ¥650, cold-brew iced coffee ¥650, café latte ¥650, iced matcha latte ¥750 (rurubu, July 2023) · classic Basque cheesecake ¥800 (the favourite), matcha and craft-chocolate cheesecakes ¥800, cheesecake with a drink ¥1,300 (rurubu, July 2023); a June 2026 reviewer says cheesecake comes only as a drink set · Ethiopian medium roast; seasonal lemon Basque; cheesecake with gelato and whipped cream (2026 reviews) · staff suggest beans to your taste (October 2026)',
    website: RURUBU, gmaps: gm('ACTUAL KYOTO 壬生'), menu_url: null,
    notes: '[Café · Shijo-Omiya, cheesecake by the Randen tracks] A machiya over a century old, opened up with concrete and old beams, right beside the Randen tram line near Shijo-Omiya — ask for a window seat upstairs and watch the trains pass. The order is specialty coffee (an Ethiopian medium roast is popular) with a cheesecake: classic Basque, matcha or a seasonal flavour, about ¥1,300 as a set. Expect a queue, sometimes an hour; pets welcome on the terrace. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owners 北浦夫妻 (a married couple), per rurubu'], origin: null,
      background: 'Per a July 2023 rurubu article: opened in April 2023 by the owners, the 北浦 couple, in a renovated machiya over 100 years old. Tabelog gives the opening as 14 April 2023.',
      philosophy: 'The name ACTUAL reflects a wish to value the place and time — that people actually come here on purpose, or meet someone here (rurubu, July 2023).', specialty: 'Classic Basque cheesecake; specialty coffee.',
      anecdotes: [
        { text: 'An October 2026 pair joined a queue of about ten at 3 p.m., got in after 4, and landed the upstairs window table right above the Randen tracks.', source: R + 'B537461267/' },
        { text: 'A July 2026 visitor had been turned away twice by unexpected closures before finally getting in, and found the lemon in the seasonal cheesecake a little faint.', source: R + 'B531541564/' },
        { text: 'A September 2026 visitor warns that service can be slow when busy, so allow extra time.', source: R + 'B535721311/' },
      ],
      japanese_sources_summary: 'るるぶ&more (2023年7月): ACTUAL KYOTO、2023年4月に四条大宮にオープンしたスペシャルティコーヒーとチーズケーキの店、オーナーは北浦夫妻、店名は「実際に、ここを目指して来ていただいたり、人と待ち合わせしたり」という場所や時間を大切にしたい思いから、築100年を超える町家をリノベーション、ドリップコーヒー650円、カフェラテ650円、抹茶ラテ750円、クラシックバスクチーズケーキ800円、抹茶チーズケーキ800円、セット1,300円、当時は月・火休み。食べログ: 中京区壬生賀陽御所町20-2、阪急大宮駅から徒歩4分、10:00〜18:00、火曜休み、予約不可、現金・カード・電子マネー・PayPay可、20席、テラスはペット可、2023年4月14日オープン。口コミ (2026年、英語): 嵐電の線路沿い、2階の窓から電車、エチオピア、レモンのバスクチーズケーキ、ジェラート、行列、臨時休業。',
      confidence: 'medium', sources: [TB, RURUBU, R + 'B529228053/', R + 'B529487191/', R + 'B530294367/', R + 'B531541564/', R + 'B533166777/', R + 'B534320450/', R + 'B535721311/', R + 'B536130550/', R + 'B537461267/', R + 'B538590511/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queues, no reservations; staff help choose beans; many visitors from abroad (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区壬生賀陽御所町20-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002986, 135.746298); cross-checked: GSI 京都府京都市中京区壬生賀陽御所町20番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [RURUBU],
    price_note: 'Prices from a July 2023 rurubu article; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Classic Basque cheesecake', '¥800', 'Cheesecake', 'ask', 'no', 'rurubu, July 2023.', 'basque_cheesecake'),
      it('', '', 'Matcha cheesecake', '¥800', 'Cheesecake', 'ask', 'no', 'rurubu, July 2023.', 'matcha_cheesecake'),
      it('', '', 'Cheesecake and drink set', '¥1,300', 'Sets', 'ask', 'no', 'rurubu, July 2023.', 'cheesecake_set'),
      it('', '', 'Drip coffee', '¥650', 'Coffee', '', '', 'rurubu, July 2023.', 'drip_coffee'),
      it('', '', 'Café latte', '¥650', 'Coffee', '', 'no', 'rurubu, July 2023.', 'cafe_latte'),
    ] }, {
    cuisine: '築100年を超える町家のスペシャルティコーヒーとチーズケーキ (るるぶ、2023年7月、2026年の口コミ)・ドリップコーヒー650円、水出しアイスコーヒー650円、カフェラテ650円、抹茶ラテ (アイス) 750円 (るるぶ、2023年7月)・クラシックバスクチーズケーキ800円 (一番人気)、抹茶とクラフトチョコレートのチーズケーキ800円、チーズケーキとドリンクのセット1,300円 (るるぶ、2023年7月)、2026年6月の口コミではチーズケーキはドリンクとのセットのみ・中煎りのエチオピア、季節のレモンのバスクチーズケーキ、ジェラートとホイップを添えたチーズケーキ (2026年の口コミ)・好みを聞いて豆を提案 (2026年10月)',
    neighborhood: '四条大宮の嵐電沿い、壬生。阪急大宮駅から徒歩4分',
    gf_detail: '要確認。スペシャルティコーヒーとチーズケーキ (クラシックバスク、抹茶、チョコレート、季節のレモン)。チーズケーキに小麦粉を使うかは書かれていない (2023年の記事、2026年の口コミ)。',
    vegan_detail: '要確認。ブラックのコーヒーは合うが、チーズケーキ、ラテ、ジェラートは乳製品を使う (2023年の記事、2026年の口コミ)。',
    notes: '[カフェ・四条大宮、嵐電沿いのチーズケーキ] 四条大宮近く、嵐電の線路のすぐそば。古い梁を残しコンクリートを合わせた築100年超の町家。2階の窓際なら電車が通るのを眺められる。注文はスペシャルティコーヒー (人気は中煎りのエチオピア) とチーズケーキ。クラシックバスク、抹茶、季節の味で、セットで約1,300円。1時間待ちのこともある行列、テラスはペット可。火曜休み。',
  });
}

save();
