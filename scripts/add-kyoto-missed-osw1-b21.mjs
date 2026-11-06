// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 21.
//   + 空想Complete Kusou Complete (one-person wine bar in an alley off Shijo-Karasuma; since 2022)
//   + GOICHI PANINO (Italian panino shop by Kyoto Shiyakusho-mae, run by Italian staff; since 2024)
//   + 祇園肉亭 新 Gion Nikutei Shin (Omi-beef kaiseki and hitsumabushi in a Gion machiya)
//   + GOODMAN ROASTER KYOTO (specialty roaster-café near Shijo-Nishinotoin, with two sister shops in Taipei; since 2019)
//   - 京辛麺 KYO-KARA 京都祇園店 (26043200): skipped (reason below).
//   Picked on 2026-11-05: from `queue.mjs kyoto-missed next core 200`, lane ids 26037926, 26043200 (skipped), 26041676;
//   from `next notable 200`: 26033192, 26033336. None is in data/kyoto.json by name (空想/Kusou, GOICHI/51 panino, 肉亭/
//   Nikutei, GOODMAN). By address, 恵比須町534-28 also holds kyoto_istanbul_saray (松木ビル 3F, a different shop) — pins offset.
//   Same-name count (Greg's Samboa ruling): 空想Complete, GOICHI PANINO and 祇園肉亭 新 single shops. GOODMAN ROASTER has three
//   shops (two in Taipei, one in Kyoto) per its own site — a small group. Service charges checked against Tabelog's Japanese
//   original: 祇園肉亭 新 adds 5% on counter courses and ¥1,100 for dinner private rooms; GOICHI PANINO is cashless only;
//   the other two list none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-21');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043200', '京辛麺 KYO-KARA 京都祇園店: a same-concept branch of a brand already in data — the Kiyamachi shop is kyoto_kyokara_kiyamachi');

// ================================================================ 空想Complete
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037926/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '23:00']);
  put({
    id: 'kyoto_kusou_complete', name: '空想Complete (Kusou Complete)', category: 'OMNI',
    lat: 35.005716, lng: 135.762264, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wine-bar plates: marinated mushrooms, pâté, prosciutto sliced to order, cheese, quiche and cake; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Some vegetable plates (marinated mushrooms, sautéed bamboo shoots in butter, lotus root, pickles) alongside charcuterie and cheese; ingredients not described (2024–2026 reviews).',
    hours_raw: '15:00–23:00; closed Thursday; hours may change (Tabelog). Reservations accepted; walk-ins possible early (Tabelog; December 2024; October 2026). No cards or e-money; PayPay accepted (Tabelog). 16 seats, counter (Tabelog; February 2026). Non-smoking (Tabelog). The owner runs it alone, so dishes can take time (2024–2026 reviews). At the end of a narrow alley of small restaurants near Shijo-Karasuma, 294 m from Karasuma Stn (Tabelog; March 2026). Opened 30 June 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'An alley off Shijo-Karasuma — 294 m from Hankyu Karasuma Stn',
    cuisine: 'Wine bar with a large cellar and a long food menu, open from mid-afternoon (2024–2026 reviews) · three reds and three whites by the glass, bottles from about ¥5,000, grape juice (2025–2026 reviews) · marinated mushrooms ¥700 (March 2025) · prosciutto sliced to order by the slice, cheese platter, pâté, mackerel rillettes, quiche, pickles (2024–2026) · seasonal plates: butter-sautéed bamboo shoots, venison, iidako and turnip aglio olio, oysters, lotus root (January–May 2026) · black-honey and rum-raisin cake with ice cream (May 2026)',
    website: null, gmaps: gm('空想Complete 京都 烏丸'), menu_url: null,
    notes: '[Wine bar · Shijo-Karasuma, a one-person bar in an alley] At the end of a narrow alley of tiny restaurants near Shijo-Karasuma, a clean, dim counter in front of a big wine cellar, open from 3 p.m. The owner runs everything alone — pours, recommends and cooks — so settle in: prosciutto sliced to order, marinated mushrooms (¥700), cheese, quiche, seasonal plates such as butter-sautéed bamboo shoots. Bottles from about ¥5,000. PayPay but no cards; closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who runs the bar and cooks alone'], origin: null,
      background: 'Tabelog gives the opening as 30 June 2022. Reviewers from December 2024 to May 2026 note the owner handles everything single-handed.',
      philosophy: null, specialty: 'Wines by the glass and bottle; prosciutto sliced to order.',
      anecdotes: [
        { text: 'A May 2026 regular on a fourth visit advises patience, since the owner does everything, and found the butter-sautéed bamboo shoots impossible to stop eating.', source: R + 'B496185387/' },
        { text: 'A February 2026 visitor loved a wine the owner recommended and tried to buy a bottle, but found it sold out everywhere online.', source: R + 'B523326391/' },
      ],
      japanese_sources_summary: '食べログ: 空想Complete、ワインバー・居酒屋・ビストロ、中京区貝屋町561、烏丸駅から294m、15:00〜23:00、木曜休み、予約可、カード・電子マネー不可、PayPay可、16席、禁煙、2022年6月30日オープン。口コミ (2024〜2026年、英語): 四条烏丸の路地奥、大きなワインセラー、グラスは赤白3種ずつ、ボトルは約5,000円から、きのこのマリネ700円、注文ごとに切る生ハム、チーズ、パテ、鯖のリエット、キッシュ、たけのこのバターソテー、鹿肉、飯蛸と蕪のアーリオオーリオ、黒蜜とラムレーズンのケーキ、店主がひとりで切り盛り。',
      confidence: 'medium', sources: [TB, R + 'B478833579/', R + 'B496185387/', R + 'B504137288/', R + 'B508908658/', R + 'B521081417/', R + 'B523326391/', R + 'B523842035/', R + 'B523913451/', R + 'B528302318/', R + 'B537848199/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One-person bar, so be patient; PayPay but no cards.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区貝屋町561',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005716, 135.762264); cross-checked: GSI 京都府京都市中京区貝屋町561番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B478833579/', R + 'B508908658/'],
    price_note: 'No menu read; prices from March and June 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Marinated assorted mushrooms', '¥700', 'Plates', 'ask', 'ask', 'March 2025.', 'mushroom_marinade'),
      it('', '', 'Bottle of wine, from', '¥5,000', 'Wine', '', '', 'June 2025.', 'wine_bottle'),
    ] }, {
    cuisine: '大きなセラーと豊富な料理のワインバー、昼下がりから営業 (2024〜2026年の口コミ)・グラスは赤白3種ずつ、ボトルは約5,000円から、ぶどうジュースも (2025〜2026年の口コミ)・きのこのマリネ700円 (2025年3月)・1枚ずつ切る生ハム、チーズの盛り合わせ、パテ、鯖のリエット、キッシュ、ピクルス (2024〜2026年)・季節の皿: たけのこのバターソテー、鹿肉、飯蛸と蕪のアーリオオーリオ、牡蠣、蓮根 (2026年1〜5月)・黒蜜とラムレーズンのケーキとアイス (2026年5月)',
    neighborhood: '四条烏丸の路地。阪急烏丸駅から294m',
    gf_detail: '要確認。きのこのマリネ、パテ、生ハム、チーズ、キッシュ、ケーキなどワインバーの皿。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。きのこのマリネ、たけのこのバターソテー、蓮根、ピクルスなど野菜の皿もあるが、シャルキュトリーやチーズが中心。材料の説明はない (2024〜2026年の口コミ)。',
    notes: '[ワインバー・四条烏丸、路地奥のひとりの店] 四条烏丸近く、小さな飲食店が並ぶ細い路地の奥。大きなワインセラーの前に清潔で薄暗いカウンター、午後3時から開く。店主がひとりで注ぎ、勧め、料理もするので、ゆったりと。注文ごとに切る生ハム、きのこのマリネ (700円)、チーズ、キッシュ、たけのこのバターソテーなどの季節の皿。ボトルは約5,000円から。PayPay可、カード不可、木曜休み。',
  });
}

// ================================================================ GOICHI PANINO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041676/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://51panino.com/';
  const H = day(['11:30', '19:30']);
  put({
    id: 'kyoto_goichi_panino', name: 'GOICHI PANINO', category: 'OMNI',
    lat: 35.0095, lng: 135.76951, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: every panino is on wheat bread; arancini and tiramisu on the side (official site).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The vegetable panini (caponata, tomato and basil pesto, eggplant) all come with cheese on the menu; ask about leaving it out (official site; 2026 reviews).',
    hours_raw: '11:30–19:30, Tuesday–Sunday; closed Monday; hours may change (Tabelog). No reservations (Tabelog). Order at the counter after choosing by QR code; cashless only — no cash (Tabelog, original text; March 2026). 10 seats, plus three terrace tables where dogs are welcome (Tabelog). Non-smoking (Tabelog). Italian staff who speak Japanese; English menu on the site (2026 reviews; official site). Bright yellow front on Kawaramachi north of Sanjo, 174 m from Kyoto Shiyakusho-mae Stn (Tabelog; June 2025). Opened 10 August 2024 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi north of Sanjo — 174 m from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Italian panino shop of crusty filled bread, regular or half size (official site; 2026 reviews) · nine panini, tax included: 1 mozzarella, prosciutto crudo, rocket, tomato, parmesan ¥2,400; 2 pistachio pesto, mortadella, stracciatella ¥2,400; 3 caponata and stracciatella ¥2,000; 4 tomato, mozzarella, basil pesto ¥2,100; 5 swordfish, rocket, lemon, tomato ¥2,200; 6 meatballs in tomato sauce with grana padano ¥1,800; 7 porchetta, grilled eggplant, scamorza, cherry tomato ¥2,400; 8 grilled chicken, spicy mayo, lettuce, tomato ¥1,800; 9 prosciutto cotto, grilled zucchini, stracciatella, dried-tomato pesto ¥2,400 (official site) · fries ¥660, arancini ¥770, tiramisu ¥770 · espresso ¥330, Americano ¥550, Italian sodas ¥770 (limonata, aranciata rossa), Peroni ¥880, Aperol (official site; March 2026)',
    website: SITE, gmaps: gm('GOICHI PANINO 京都'), menu_url: SITE,
    notes: '[Panini · Kyoto City Hall, a slice of Italy] A bright yellow Italian panino bar just north of Sanjo, run by Italian staff who chat in Japanese, where crusty, chewy bread is stuffed with mozzarella and prosciutto, pistachio pesto and mortadella, or porchetta with scamorza (¥1,800–2,400; half sizes too). Add arancini, tiramisu, a limonata or an Aperol. Order by QR code; cashless only; dogs welcome on the terrace. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Italian staff (unnamed)'], origin: null,
      background: 'Tabelog gives the opening as 10 August 2024. Reviewers note Italian staff who speak fluent Japanese and a largely international clientele (2025–2026).',
      philosophy: null, specialty: 'No. 1 mozzarella-and-prosciutto panino; porchetta panino.',
      anecdotes: [
        { text: 'A March 2026 visitor back from Venice came for the Aperol, and found the ciabatta, cicchetti and tiramisu just as good.', source: R + 'B525914438/' },
        { text: 'An August 2026 diner who usually dislikes hard bread found this crust a challenge to bite but the more delicious for it.', source: R + 'B534365059/' },
        { text: 'A March 2026 diner found the roast pork about half what the picture showed and the komatsuna a little wilted.', source: R + 'B524630116/' },
      ],
      japanese_sources_summary: '公式サイト (51 panino): GOICHI PANINO、中京区河原町通三条上る恵比須町534番地28、パニーノ9種 (税込): 1 モッツァレラ・生ハム・ルッコラ・トマト・パルミジャーノ2,400円、2 ピスタチオペースト・モルタデッラ・ストラッチャテッラ2,400円、3 カポナータ2,000円、4 トマト・モッツァレラ・バジル2,100円、5 かじき2,200円、6 ミートボール1,800円、7 ポルケッタ2,400円、8 グリルチキン1,800円、9 プロシュットコット2,400円、ポテト660円、アランチーニ770円、ティラミス770円、エスプレッソ330円、ペローニ880円。食べログ: 火〜日 11:30〜19:30、月曜休み、予約不可、キャッシュレスのみ (現金不可)、10席、テラス3卓 (犬可)、禁煙、2024年8月10日オープン。口コミ (2025〜2026年、英語): イタリア人スタッフ、QRで選んでレジで注文、ハーフサイズ、ブラッドオレンジのソーダ、アペロール、海外の客が多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B510979224/', R + 'B512482515/', R + 'B523475615/', R + 'B524445521/', R + 'B524630116/', R + 'B525914438/', R + 'B530106652/', R + 'B533183881/', R + 'B534365059/', R + 'B535760929/'] },
    cultural_comfort: { level: 'english', note: 'English menu; Italian staff; cashless only; dogs on the terrace.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区恵比須町534-28 松木ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.009529, 135.769482), offset about 7 m south-east to (35.0095, 135.76951) because kyoto_istanbul_saray (same building, 3F) sits 2.7 m from the Tabelog point; cross-checked: GSI 京都府京都市中京区恵比須町534番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official site menu, tax included, read 2026-11-05; prices are for the regular size.', last_checked: TODAY, items: [
      it('', '', 'No. 1 Mozzarella, prosciutto crudo, rocket, tomato, parmesan', '¥2,400', 'Panini', 'no', 'no', 'Official site.', 'panino_1'),
      it('', '', 'No. 2 Pistachio pesto, mortadella, stracciatella', '¥2,400', 'Panini', 'no', 'no', 'Official site.', 'panino_2'),
      it('', '', 'No. 3 Caponata, stracciatella', '¥2,000', 'Panini', 'no', 'no', 'Official site.', 'panino_3'),
      it('', '', 'No. 4 Tomato, mozzarella, basil pesto', '¥2,100', 'Panini', 'no', 'no', 'Official site.', 'panino_4'),
      it('', '', 'No. 7 Porchetta, grilled eggplant, scamorza, cherry tomato', '¥2,400', 'Panini', 'no', 'no', 'Official site.', 'panino_7'),
      it('', '', 'No. 8 Grilled chicken, spicy mayonnaise, lettuce, tomato', '¥1,800', 'Panini', 'no', 'no', 'Official site.', 'panino_8'),
      it('', '', 'Arancini', '¥770', 'Sides', 'no', 'ask', 'Official site.', 'arancini'),
      it('', '', 'Tiramisu', '¥770', 'Sides', 'no', 'no', 'Official site.', 'tiramisu'),
    ] }, {
    cuisine: '噛みごたえのあるパンのイタリアのパニーノ店、レギュラーとハーフ (公式サイト、2026年の口コミ)・パニーノ9種 (税込): 1 モッツァレラ、生ハム、ルッコラ、トマト、パルミジャーノ2,400円、2 ピスタチオペースト、モルタデッラ、ストラッチャテッラ2,400円、3 カポナータとストラッチャテッラ2,000円、4 トマト、モッツァレラ、バジルペースト2,100円、5 かじき、ルッコラ、レモン、トマト2,200円、6 トマトソースのミートボールとグラナパダーノ1,800円、7 ポルケッタ、焼きなす、スカモルツァ、ミニトマト2,400円、8 グリルチキン、スパイシーマヨ、レタス、トマト1,800円、9 プロシュットコット、焼きズッキーニ、ストラッチャテッラ、ドライトマトのペースト2,400円 (公式サイト)・ポテト660円、アランチーニ770円、ティラミス770円・エスプレッソ330円、アメリカーノ550円、イタリアのソーダ770円 (リモナータ、アランチャータ・ロッサ)、ペローニ880円、アペロール (公式サイト、2026年3月)',
    neighborhood: '三条の北の河原町通。京都市役所前駅から174m',
    gf_detail: 'グルテンフリーではない。どのパニーノも小麦のパン。サイドにアランチーニとティラミス (公式サイト)。',
    vegan_detail: '要確認。野菜のパニーノ (カポナータ、トマトとバジル、なす) もメニューではチーズ入り。抜けるか確認を (公式サイト、2026年の口コミ)。',
    notes: '[パニーノ・市役所前、イタリアのひと切れ] 三条のすぐ北、真っ黄色の外観のイタリアのパニーノの店。日本語で話すイタリア人スタッフが、噛みごたえのあるパンにモッツァレラと生ハム、ピスタチオペーストとモルタデッラ、ポルケッタとスカモルツァを挟む (1,800〜2,400円、ハーフも)。アランチーニ、ティラミス、リモナータやアペロールも。QRで選び、キャッシュレスのみ。テラスは犬可。月曜休み。',
  });
}

// ================================================================ 祇園肉亭 新
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033192/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '23:00']); const LD = day(['11:30', '15:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_gion_nikutei_shin', name: '祇園肉亭 新 (Gion Nikutei Shin)', category: 'OMNI',
    lat: 35.004913, lng: 135.774665, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Beef kaiseki and hitsumabushi with several sauces and a dashi to pour over the rice; the sauces are not described for gluten (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Omi-beef restaurant (2026 reviews).',
    hours_raw: 'Dinner 18:00–23:00 daily (food L.O. 22:00, drinks 22:30; courses by 21:00, à la carte after 21:00); lunch 11:30–15:00 (L.O. 14:00) on weekends and holidays only; irregular closures (Tabelog). Reservations for seats; lunch is the hitsumabushi set chosen on the day (Tabelog). Counter courses carry a 5% service charge; dinner private rooms ¥1,100 per room (Tabelog, original text). Cards, e-money and QR accepted (Tabelog). 38 seats: 10 at the counter on the first floor; on the second, a two-seat private counter overlooking the garden and six private rooms (Tabelog; July 2026). Counter non-smoking; smoking allowed in private rooms at dinner; all non-smoking at lunch (Tabelog). Restroom on the first floor only (September 2026). Through a noren and a long passage in a machiya off Shinbashi-dori, 4 min from Gion-Shijo Stn (Tabelog; September 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: LD, 6: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, off Shinbashi-dori — 4 min from Keihan Gion-Shijo Stn',
    cuisine: 'Omi-beef cooking in a Gion machiya: meat kaiseki at night, hitsumabushi at lunch (2026 reviews) · private-room course of nine dishes ¥14,300 plus ¥1,100 room fee (July 2026) · counter courses (5% service) with ranked cuts — chateaubriand +¥6,500, tenderloin (October 2026) · Omi beef hitsumabushi gozen with pickles, condiments, sauces and dashi for chazuke; red meat or rare cuts; a Kyoto egg (August–October 2026) · yukhoe (October 2026) · leftover pot rice packed as rice balls to take home (October 2026) · sake, wine (Tabelog)',
    website: null, gmaps: gm('祇園肉亭 新'), menu_url: null,
    notes: '[Beef · Gion, Omi beef in a machiya] Through a noren and down a long passage off Shinbashi in Gion, a machiya serving Omi beef two ways. At weekend lunch it is hitsumabushi: beef over rice in a pot, eaten plain, with condiments, then as chazuke with dashi (about ¥2,000–4,000). At night, nine-course meat kaiseki in private rooms (¥14,300 plus room fee) or at the counter, where premium cuts cost extra. Book the garden-view second-floor counter early. Celebrations handled warmly.',
    chef_bio: { chef_name: null, roles: ['Chefs and staff (unnamed)'], origin: null,
      background: 'Not stated in the sources read. Reviewers describe a machiya with private rooms, a live-kitchen counter and many guests from abroad (2026).',
      philosophy: null, specialty: 'Omi beef hitsumabushi; meat kaiseki.',
      anecdotes: [
        { text: 'A July 2026 couple celebrating a marriage registration that day were surprised at the end of the course with a small firework and a congratulatory message, and seen off at the door.', source: R + 'B531300305/' },
        { text: 'A September 2026 lunch guest who had booked the garden-view second-floor seat was shown to another room and waited about 20 minutes to be moved.', source: R + 'B536141582/' },
        { text: 'An October 2026 diner found chateaubriand a ¥6,500 supplement and thought it unsurprising for the price, while admiring the kintsugi-mended tableware.', source: R + 'B537263414/' },
      ],
      japanese_sources_summary: '食べログ: 祇園肉亭 新、牛料理・日本料理、東山区新橋通大和大路東入二丁目清本町366-2、祇園四条駅から徒歩4分、夜18:00〜23:00 (コースL.O.21:00)、土日祝は昼11:30〜15:00、不定休、昼はひつまぶし御膳、カウンターのコースはサービス料5%、夜の個室は1室1,100円、カード・電子マネー・QR可、38席 (1階カウンター10、2階の個室カウンター2、個室6)、分煙 (個室は喫煙可、昼は全席禁煙)。口コミ (2026年、英語): 京町家、Omi 牛、個室コース9品14,300円、シャトーブリアンは6,500円追加、Omi 牛のひつまぶし御膳、ユッケ、残ったご飯をおにぎりに、金継ぎの器。',
      confidence: 'medium', sources: [TB, R + 'B531084831/', R + 'B531300305/', R + 'B532928991/', R + 'B534432820/', R + 'B535495043/', R + 'B536141582/', R + 'B537263414/', R + 'B537408468/', R + 'B538073503/', R + 'B538453111/'] },
    cultural_comfort: { level: 'konnichiwa', note: '5% service on counter courses; ¥1,100 private-room fee at dinner; book early for the garden counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新橋通大和大路東入二丁目清本町366-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004913, 135.774665); cross-checked: GSI 京都府京都市東山区清本町366番地 (lot) 11m; nearest existing pin kyoto_gion_menya_rinrin 6.6 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531300305/', R + 'B537263414/', TB],
    price_note: 'No menu read; course price and supplement from July and October 2026 reviews; charges from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Private-room course, nine dishes', '¥14,300', 'Dinner', 'ask', 'no', 'July 2026; plus ¥1,100 room fee.', 'private_room_course'),
      it('', '', 'Chateaubriand supplement', '¥6,500', 'Dinner', 'ask', 'no', 'October 2026.', 'chateaubriand_supplement'),
      it('', '', 'Omi beef hitsumabushi gozen', '', 'Lunch', 'ask', 'no', 'August–October 2026; price not given (Tabelog lunch average ¥2,000–2,999).', 'hitsumabushi_gozen'),
    ] }, {
    cuisine: '祇園の京町家で味わうOmi 牛。夜は肉の会席、昼はひつまぶし (2026年の口コミ)・個室のコース9品14,300円と個室料1,100円 (2026年7月)・カウンターのコース (サービス料5%)、ランク分けされた部位、シャトーブリアンは6,500円追加、ヒレ (2026年10月)・Omi 牛のひつまぶし御膳、漬物、薬味、たれ、だし茶漬け用の出汁、赤身か希少部位、京都の卵 (2026年8〜10月)・ユッケ (2026年10月)・残ったご飯はおにぎりにして持ち帰り (2026年10月)・日本酒、ワイン (食べログ)',
    neighborhood: '祇園、新橋通から入った路地。京阪祇園四条駅から徒歩4分',
    gf_detail: '要確認。牛肉の会席とひつまぶし、数種のたれと出汁茶漬け。たれのグルテンの説明はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。Omi 牛の店 (2026年の口コミ)。',
    notes: '[牛肉料理・祇園、町家でOmi 牛] 祇園の新橋通から暖簾をくぐり長い通路を抜けた京町家で、Omi 牛を二通りに。週末の昼はひつまぶし。鍋のご飯に牛肉をのせ、そのまま、薬味で、最後は出汁で茶漬けに (約2,000〜4,000円)。夜は個室 (14,300円と個室料) かカウンターで9品の肉の会席、上の部位は追加料金。庭を望む2階のカウンターは早めに予約を。お祝いにも心のこもった対応。',
  });
}

// ================================================================ GOODMAN ROASTER KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033336/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://goodman-company.com/';
  const H = day(['08:00', '18:00']);
  put({
    id: 'kyoto_goodman_roaster', name: 'GOODMAN ROASTER KYOTO', category: 'OMNI',
    lat: 35.002386, lng: 135.75568, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee with baked goods — carrot cake, blueberry cheesecake, lemon and cream-cheese pound cake — and a coffee soft serve; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee (Americano, pour-overs) suits; the cakes, soft serve, latte and flat white use dairy (2026 reviews).',
    hours_raw: '8:00–18:00; closed Wednesday; hours and closures may change — check Instagram (Tabelog; official site). No reservations (Tabelog). Cash only (Tabelog; November 2026). Counter, table, bench and sofa seats and a terrace (Tabelog; September 2026). Roaster on site; buy beans and get a free cup (September 2026). Non-smoking; English menu; staff speak English (Tabelog; September 2026). Shijo-Nishinotoin, south and one block east (official site), next to a coin laundry; 3 min from Karasuma Stn per the site, 10 min per Tabelog. Opened 22 November 2019 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shijo-Nishinotoin — 365 m from Shijo Stn',
    cuisine: 'Specialty roaster-café run by Q graders, with a Diedrich roaster on site (official site) · two Americanos, light and dark roast; single origins such as an Ethiopian with Earl Grey notes; iced coffee ¥760; latte; flat white (September–November 2026) · Alishan coffee from Taiwan, hand-brewed and served in tea ware (official site) · carrot cake with walnuts and cream, blueberry cheesecake, lemon and cream-cheese pound cake, coffee soft serve (2026 reviews) · beans to take home and wholesale (official site)',
    website: SITE, gmaps: gm('GOODMAN ROASTER KYOTO'), menu_url: null,
    notes: '[Café · Shijo-Nishinotoin, a roaster from Taipei] The Kyoto branch of a specialty roaster with two cafés in Taipei, roasting on site near Shijo-Nishinotoin. Choose a light or dark-roast Americano or a fruity single origin, or try Taiwanese Alishan coffee served in tea ware, with carrot cake or blueberry cheesecake. Spacious, with a terrace; a loud, cheerful welcome; full by 8:30 some mornings. Cash only; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Founder 伊藤 篤臣 (Atsuomi Ito), per the official site', 'Q-grader roasters'], origin: null,
      background: 'Per the official site: GOODMAN ROASTER is a specialty coffee roaster with two shops in Taipei and one in Kyoto, roasting on Diedrich machines linked through Cropster data between Taipei and Kyoto, and working for three years with the Tsou people’s organic Alishan coffee farm on quality. The site’s message is signed 伊藤 篤臣 (Atsuomi Ito). Tabelog gives the opening as 22 November 2019.',
      philosophy: '“Make time to do nothing” — good coffee as a route to a richer, more positive daily life (official site).', specialty: 'Alishan coffee; light-roast Americano.',
      anecdotes: [
        { text: 'A September 2026 traveller ate breakfast here while waiting on the coin laundry next door.', source: R + 'B535215954/' },
        { text: 'An October 2026 regular found the light-roast Americano sold out, took the dark roast and liked it, but thought the coffee soft serve tasted a little artificial.', source: R + 'B515866970/' },
        { text: 'An October 2026 customer carried cake home without an ice pack and found the cream melted after ten minutes.', source: R + 'B536888288/' },
      ],
      japanese_sources_summary: '公式サイト: GOODMAN ROASTER、台北に2店舗・京都に1店舗のスペシャルティコーヒーロースター、伊藤 篤臣 (Atsuomi Ito) のメッセージ「なにもしない時間を作ってください」、Cropster と diedrich の焙煎機 (京都店は5キロ機)、茶器で出す手沖式の阿里山珈琲、Qグレーダー、京都店は下京区矢田町115-2 (四条西洞院下ル一筋目東入ル南側)、地下鉄烏丸駅から徒歩3分、営業時間は Instagram で確認、卸売。食べログ: 8:00〜18:00、水曜休み、予約不可、カード・電子マネー・QR不可、テラス、英語メニュー、2019年11月22日オープン。口コミ (2026年、英語): 浅煎りと深煎りのアメリカーノ、エチオピア、アイスコーヒー760円、フラットホワイト、キャロットケーキ、ブルーベリーチーズケーキ、コーヒーソフト、豆を買うとコーヒー1杯無料、現金のみ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B515866970/', R + 'B534915090/', R + 'B535215954/', R + 'B536625017/', R + 'B536888288/', R + 'B537080824/', R + 'B537969686/', R + 'B538396979/', R + 'B538629078/', R + 'B538673438/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff; cash only; busy mornings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区矢田町115-2 ベアフルートイイノ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002386, 135.75568); cross-checked: GSI 京都府京都市下京区矢田町115番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537080824/'],
    price_note: 'No menu read; price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Iced coffee', '¥760', 'Coffee', '', '', 'September 2026.', 'iced_coffee'),
      it('', '', 'Carrot cake', '', 'Cakes', 'ask', 'no', 'September–October 2026; price not given.', 'carrot_cake'),
    ] }, {
    cuisine: 'Qグレーダーが営み、店内に diedrich の焙煎機があるスペシャルティのロースターカフェ (公式サイト)・浅煎りと深煎りの2種のアメリカーノ、アールグレイのような香りのエチオピアなどのシングルオリジン、アイスコーヒー760円、ラテ、フラットホワイト (2026年9〜11月)・茶器で出す台湾の阿里山珈琲 (公式サイト)・くるみとクリームのキャロットケーキ、ブルーベリーチーズケーキ、レモンとクリームチーズのパウンドケーキ、コーヒーソフトクリーム (2026年の口コミ)・持ち帰りの豆と卸売 (公式サイト)',
    neighborhood: '四条西洞院。四条駅から365m',
    gf_detail: '要確認。コーヒーと焼き菓子 (キャロットケーキ、ブルーベリーチーズケーキ、レモンとクリームチーズのパウンドケーキ)、コーヒーソフト。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。ブラックのコーヒー (アメリカーノ、ハンドドリップ) は合うが、ケーキ、ソフトクリーム、ラテ、フラットホワイトは乳製品を使う (2026年の口コミ)。',
    notes: '[カフェ・四条西洞院、台北から来たロースター] 台北に2店舗を持つスペシャルティロースターの京都店。四条西洞院の近くで店内焙煎。浅煎りか深煎りのアメリカーノ、フルーティーなシングルオリジン、茶器で出す台湾の阿里山珈琲を、キャロットケーキやブルーベリーチーズケーキと。広々としてテラスもあり、元気な「いらっしゃいませ」。朝8時半には満席の日も。現金のみ、水曜休み。',
  });
}

save();
