// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 47.
//   + ALKAA (natural-wine bar by the Hachijo exit of Kyoto Station; wine only)
//   + ダイニングカフェ＆バー ロンド Dining Cafe & Bar Rondo (the restaurant of Miyako Hotel Kyoto Hachijo; lunch buffet, courses, cakes)
//   + 食道 萬きち Shokudo Mankichi (sushi and Japanese courses near the Hachijo exit; 有限会社らくちん group)
//   + 鳥茂 Tori Shige (yakitori, oyakodon and seasonal mizutaki in Mibu, since 1973)
//   - Le Pain Ikariya Kyoto (26043614), 小籠包の王様 華星 (26043524), 志津屋 JR二条駅店 (26026796): skipped (reasons below).
//   Picked on 2026-11-06: from `queue.mjs kyoto-missed next core 300`, lane ids in queue order 26043614 (skipped),
//   26043524 (skipped), 26037554, 26000606, 26040632, 26026796 (skipped), 26011304. None of the four drafted is in
//   data/kyoto.json by name (ALKAA, ロンド/Rondo, 萬きち/Mankichi, 鳥茂/Tori Shige) or address (東九条西山王町15-7, 西九条院町17
//   都ホテル京都八条, 東九条西山王町1-5, 壬生松原町40-39). No record in data covers Miyako Hotel Kyoto Hachijo as a whole.
//   Same-name count (same brand or operator only): ALKAA — one shop in our crawl (atelier ALKAA, the owner's wife's pastry
//   shop, has no storefront sales May–October per a May 2025 review). ロンド — one shop (Rondo at 朱雀分木町 is a different
//   name and operator). 萬きち — one shop; Tabelog's website link is the company page of 有限会社らくちん (NTA invoice holder of
//   T5130002022652), which runs 11 shops (8 directly, 3 franchised) of izakaya, yakiniku, yakitori, French and Thai under
//   several names, led by 大衆酒場フレンチマン — a local Kyoto/Osaka group, drafted as a sister concept and flagged. 鳥茂 — one shop;
//   invoice holder an individual, 松尾 茂 (NTA register). Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: ALKAA チャージ料500円（税込）; ロンド サービス料は料金に含む;
//   萬きち and 鳥茂 list none.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-47');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043614', 'Le Pain Ikariya Kyoto: same-name shops of five or more — our crawl (shops.jsonl) has six Ikariya shops in Kyoto (イカリヤ食堂, イカリヤ365, チンクエ イカリヤ, ikariya523, IKARIYA BEIKA KYOTO, Le Pain Ikariya Kyoto); the IKARIYA KYOTO brand is run by 株式会社Ludico (atpress.ne.jp/news/545666, /551719), whose registered address is the Ikariya 365 address. Note: イカリヤ食堂 and IKARIYA BEIKA KYOTO are already in data');
skip('26043524', '小籠包の王様 華星 京都アバンティ店: chain — the operator 有限会社華星 (Yokohama) lists 54 shops on its own site (kasei-323.com), including 横浜中華 華星, 創造中華 華星, 小龍包の王様 華星 and 餃子の王様 龍吟');
skip('26026796', '志津屋 JR二条駅店: same-name shops of five or more — our crawl (shops.jsonl) has ten 志津屋 shops in Kyoto (京都駅店, 三条店, 祇園店, 烏丸御池店, 京阪三条店 and others)');

// ================================================================ ALKAA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26037554/'; const R = TB + 'dtlrvwlst/';
  const D = day(['15:00', '24:00']);
  put({
    id: 'kyoto_alkaa_hachijo', name: 'ALKAA', category: 'OMNI',
    lat: 34.98301, lng: 135.760134, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A wine bar with small plates and sweets — salami, charcuterie, quiche, gougères, canelés, financiers, Basque cheesecake, salt sablés; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Wine is the focus; the food is charcuterie, cheese-based and baked sweets, and nothing plant-based is described (2025–2026 reviews).',
    hours_raw: 'Monday–Thursday, Saturday and Sunday 15:00–24:00; Friday 18:00–24:00; days off vary — check Instagram; after a day off it opens 18:00–24:00 (Tabelog). Reservations accepted; a reservation is advisable (Tabelog; June 2025). Charge ¥500 including tax (Tabelog, original チャージ料500円（税込）). Cards, QUICPay, PayPay and Rakuten Pay (Tabelog). 15 seats: a counter downstairs and a private room upstairs (Tabelog; November 2025, April 2026). Wine is the only drink served, and the bar asks people who do not drink alcohol not to visit; guests wearing strong perfume may be refused entry (Tabelog). Two minutes on foot from the Hachijo exit of Kyoto Station (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: day(['18:00', '24:00']), 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Quiet lane by the Hachijo exit of Kyoto Station — 2 min on foot',
    cuisine: 'A wine bar for natural and French wines by the glass, from about ¥1,300–1,400 (May and August 2025) — champagne, orange, white and red, poured in Zalto glasses (April 2026); more Japanese wines lately (April 2026) · three-salami plate ¥1,000; canelé ¥300 (May 2025) · gougères (November 2025) · salted-chocolate financier and Basque cheesecake (October 2025) · charcuterie platter, quiche, salt sablé (July 2026) · sweets from atelier ALKAA, the pastry shop of the owner’s wife (May and November 2025)',
    website: null, gmaps: gm('ALKAA 京都 東九条西山王町'), menu_url: null,
    notes: '[Wine bar · Kyoto Station Hachijo exit, natural wine and canelés] A calm, stylish wine bar two minutes from the Shinkansen side of Kyoto Station, open from 15:00 most days: natural and French wines by the glass, salami and charcuterie, and sweets such as canelés and Basque cheesecake from the owner’s wife’s pastry shop. Wine only — non-drinkers are asked not to come; ¥500 charge.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A five-time regular noted the bar’s fourth anniversary in April 2026, and in June 2025 found the master seemingly running the evenings alone; a December 2025 visitor also thought the master handled everything single-handedly. The sweets come from atelier ALKAA, run by the owner’s wife (May 2025), whose canelés another reviewer praised (November 2025). An April 2026 visitor heard the floor had been rebuilt to make a wine cellar.',
      philosophy: null, specialty: 'Natural and French wine by the glass; canelés.',
      anecdotes: [
        { text: 'A November 2025 visitor, back after three years, drinks here until the last minute before the Shinkansen — the bar is that close to the platforms.', source: R + 'B517106654/' },
        { text: 'An April 2026 group of four phoned at about 19:30 and got the upstairs private room.', source: R + 'B526004385/' },
      ],
      japanese_sources_summary: '食べログ: ALKAA、ワインバー、南区東九条西山王町15-7、京都駅八条口から徒歩2分、月〜木・土・日 15:00〜24:00、金 18:00〜24:00、定休日はインスタグラムで告知、休みの翌日は18:00〜24:00、予約可、チャージ料500円 (税込)、カード可、15席、ワイン以外の飲み物はなく、お酒を飲めない方の来店は遠慮してもらう、強い香水は入店を断ることがある。口コミ (2025〜2026年、英語): 自然派とフランスのワインをグラスで1,300〜1,400円ほど、サラミ3種1,000円、カヌレ300円、グジェール、塩チョコのフィナンシェ、バスクチーズケーキ、シャルキュトリー、キッシュ、塩サブレ、甘味は店主の妻の atelier ALKAA から、2階に個室、4周年 (2026年4月)。',
      confidence: 'medium', sources: [TB, R + 'B461790107/', R + 'B507915573/', R + 'B509312052/', R + 'B512164066/', R + 'B516705875/', R + 'B517106654/', R + 'B523130280/', R + 'B526004385/', R + 'B526851490/', R + 'B532137898/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Wine only — non-drinkers are asked not to come; no strong perfume; ¥500 charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市南区東九条西山王町15-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.98301, 135.760134); cross-checked: GSI 京都府京都市南区東九条西山王町15番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B509312052/'],
    price_note: 'Prices from a May 2025 review; ¥500 charge extra.', last_checked: TODAY, items: [
      it('', '', 'Wine by the glass', 'from ¥1,300', 'Wine', '', 'ask', 'May 2025.', 'glass_wine'),
      it('', '', 'Three-salami plate', '¥1,000', 'Snacks', 'ask', 'no', 'May 2025.', 'salami'),
      it('', '', 'Canelé', '¥300', 'Sweets', 'no', 'no', 'May 2025.', 'canele'),
      it('', '', 'Charge', '¥500', 'Charges', '', '', 'Tabelog.', 'charge'),
    ] }, {
    cuisine: '自然派とフランスのワインをグラスで1,300〜1,400円ほどから (2025年5月・8月)。シャンパーニュ、オレンジ、白、赤を Zalto のグラスで (2026年4月)、最近は日本ワインも増えた (2026年4月)・サラミ3種1,000円、カヌレ300円 (2025年5月)・グジェール (2025年11月)・塩チョコのフィナンシェ、バスクチーズケーキ (2025年10月)・シャルキュトリーの盛り合わせ、キッシュ、塩サブレ (2026年7月)・甘味は店主の妻の店 atelier ALKAA から (2025年5月・11月)',
    neighborhood: '京都駅八条口のそばの静かな路地。徒歩2分',
    gf_detail: '要確認。サラミ、シャルキュトリー、キッシュ、グジェール、カヌレ、フィナンシェ、バスクチーズケーキ、塩サブレなどの小皿と甘味のワインバー。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。主役はワインで、料理はシャルキュトリーやチーズ、焼き菓子。植物性の料理は書かれていない (2025〜2026年の口コミ)。',
    notes: '[ワインバー・京都駅八条口、自然派ワインとカヌレ] 京都駅の新幹線側から徒歩2分、たいてい15時から開く落ち着いたおしゃれなワインバー。自然派やフランスのワインをグラスで、サラミやシャルキュトリー、店主の妻の菓子店のカヌレやバスクチーズケーキ。ワインのみで、お酒を飲めない人は遠慮してもらう。チャージ500円。',
  });
}

// ================================================================ ダイニングカフェ＆バー ロンド
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26000606/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.miyakohotels.ne.jp/kyoto-hachijo/restaurant/ronde/';
  const WD = day(['11:30', '15:00'], ['17:00', '22:00']); const WE = day(['11:30', '22:00']);
  put({
    id: 'kyoto_rondo_miyako_hachijo', name: 'ダイニングカフェ＆バー ロンド (Dining Cafe & Bar Rondo)', category: 'OMNI',
    lat: 34.983841, lng: 135.756333, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wheat is one of the allergens the restaurant marks on each dish’s name card, so wheat-containing dishes can be spotted; but everything is cooked in one kitchen with shared utensils, trace contamination is possible, and no substitute dishes are made (Tabelog). The official site asks guests with food allergies to say so in advance.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The lunch buffet is heavy on vegetables (July and October 2026) and Tabelog lists vegetarian options, but no vegan dish is described.',
    hours_raw: 'Lunch 11:30–15:00 (L.O. courses and sets 13:30, others 14:30); dinner 17:00–22:00 (L.O. courses, sets and gozen 20:30, others 21:00); café time 15:00–17:00 on Saturdays, Sundays and holidays only (official site). Breakfast 6:30–9:00 — days vary, ask the staff (official site). Open year-round (Tabelog). Reservations accepted, without seat choice (Tabelog). Service charge included in prices (Tabelog, original サービス料は料金に含む). Cards and QR payments; no e-money (Tabelog). 140 seats, ground floor of the main building (official site). Hotel parking free for 2 hours with ¥2,000 spent, 3 hours with ¥3,000 (Tabelog). Two minutes on foot from the Hachijo exit of Kyoto Station (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Miyako Hotel Kyoto Hachijo, ground floor — 2 min from the Hachijo exit of Kyoto Station',
    cuisine: 'Hotel-style Western food and a café (Tabelog) · lunch choice buffet “ERANDE”: appetizers, soups, salads, bread, juice and desserts with one of five mains, ¥4,900, free-flow wine and sparkling wine +¥1,500 (Tabelog); machine-made mini pancakes (Tabelog; July–August 2026) · Rondo lunch course, six dishes, ¥5,500 — e.g. salmon gratin with tapenade, roast beef with red-wine sauce (Tabelog, September–November) · course with appetizer, soup, monthly pasta and meat or fish (July–August 2026) · kids’ meal ¥1,900 with fried shrimp, hamburg steak and omurice (August 2026) · Japanese-Western breakfast buffet ¥4,000 (hotel guests ¥3,300), children ¥2,000; American breakfast ¥4,000 (official site) · cakes to take away (Tabelog)',
    website: SITE, gmaps: gm('都ホテル京都八条 ロンド'), menu_url: SITE,
    notes: '[Hotel dining · Kyoto Station Hachijo exit, lunch buffet with a main] The big all-day restaurant of Miyako Hotel Kyoto Hachijo, two minutes from the station: a half-buffet lunch of salads, soups and desserts with a choice of main (¥4,900), set courses with pasta and roast beef, breakfast buffets and cakes. Attentive hotel service and no rush to leave. Service included.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'The restaurant of Miyako Hotel Kyoto Hachijo (Tabelog; official site). Tabelog’s invoice number T8010003050331 is registered to 合同会社京都八条ホテルアセット, Tokyo (NTA register). The official site mentions only “the Rondo chef”.',
      philosophy: null, specialty: 'Lunch choice buffet with a main dish.',
      anecdotes: [
        { text: 'An August 2026 family of three generations chose a course over the buffet; the ¥1,900 kids’ meal was bigger than expected.', source: R + 'B534265226/' },
        { text: 'A May 2026 guest who found the lunch on Ozmall stayed from 11:30 to 15:00 with no time limit.', source: R + 'B527551666/' },
      ],
      japanese_sources_summary: '公式サイト: ダイニングカフェ&バー「ロンド」、140席・本館1F、朝食6:30〜9:00 (営業日は日によって異なる)、ランチ11:30〜15:00、ディナー17:00〜22:00、カフェタイム15:00〜17:00 (土日祝のみ)、和洋朝食ブッフェ4,000円 (宿泊客3,300円)、小学生2,000円、アメリカンブレックファスト4,000円、ランチチョイスブッフェ ERANDE、食物アレルギーは予め申し出を。食べログ: 洋食・カフェ・ケーキ、南区西九条院町17 都ホテル京都八条 1F、京都駅八条口から徒歩2分、年中無休、予約可 (席の指定不可)、サービス料は料金に含む、カード可、電子マネー不可、適格請求書 T8010003050331 (合同会社京都八条ホテルアセット)、ERANDE 4,900円、ロンドランチコース5,500円、特定原材料の8品目 (9月から9品目) を料理の札に表示、同じ厨房と調理器具を使うため混入の可能性あり、代替メニューはない。口コミ (2026年、英語): 野菜の多いブッフェ、ミニパンケーキの機械、月替わりのパスタ、お子様ランチ1,900円、時間制限なしのランチ、ホテルの丁寧なサービス、朝食ブッフェ。',
      confidence: 'medium', sources: [SITE, TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=8010003050331', R + 'B527093387/', R + 'B527551666/', R + 'B532113352/', R + 'B533469813/', R + 'B533805285/', R + 'B534265226/', R + 'B534729301/', R + 'B536584542/', R + 'B537829134/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant; reservations online; allergen cards on the buffet.' },
    safety: { ...SAFETY0, gf_cross_contamination: ['All dishes are made in the same kitchen with the same utensils and cleaning equipment as allergen-containing dishes; trace contamination is possible (Tabelog).'], staff_allergy_handling: ['Eight (from September, nine) specified allergens, including wheat, are shown on each dish’s name card; other allergies are not handled and no substitute dishes are made (Tabelog). Tell the restaurant in advance (official site).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市南区西九条院町17 都ホテル京都八条 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official hotel site and Tabelog; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.983841, 135.756333); cross-checked: GSI 京都府京都市南区西九条院町17番地 (lot) 76m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, SITE],
    price_note: 'Prices from Tabelog set menus and the official site; service included.', last_checked: TODAY, items: [
      it('', '', 'Lunch choice buffet “ERANDE” with a main', '¥4,900', 'Lunch', 'ask', 'ask', 'Tabelog; free-flow wine +¥1,500.', 'erande'),
      it('', '', 'Rondo lunch course (6 dishes)', '¥5,500', 'Lunch', 'no', 'no', 'Tabelog, September–November: salmon gratin, roast beef, bread or rice, cheesecake.', 'lunch_course'),
      it('和洋朝食ブッフェ', '', 'Japanese-Western breakfast buffet', '¥4,000', 'Breakfast', 'ask', 'ask', 'Official site; hotel guests ¥3,300.', 'breakfast'),
      it('', '', 'Kids’ meal', '¥1,900', 'Children', 'no', 'no', 'August 2026: fried shrimp, hamburg steak, omurice, corn soup.', 'kids_meal'),
    ] }, {
    cuisine: 'ホテルの洋食とカフェ (食べログ)・ランチチョイスブッフェ ERANDE: 前菜、スープ、サラダ、パン、ジュース、デザートに5種から選ぶメイン、4,900円、ワインとスパークリングの飲み放題は+1,500円 (食べログ)。機械で焼くミニパンケーキ (食べログ、2026年7〜8月)・ロンドランチコース6品5,500円、サーモンのグラタン タプナードソース、ローストビーフ赤ワインソースなど (食べログ、9〜11月)・前菜、スープ、月替わりのパスタ、肉か魚のコース (2026年7〜8月)・お子様ランチ1,900円、エビフライ、ハンバーグ、オムライス (2026年8月)・和洋朝食ブッフェ4,000円 (宿泊客3,300円)、小学生2,000円、アメリカンブレックファスト4,000円 (公式サイト)・ケーキの持ち帰り (食べログ)',
    neighborhood: '都ホテル京都八条の1階。京都駅八条口から徒歩2分',
    gf_detail: '要確認。小麦は料理の札に表示するアレルゲンのひとつなので、小麦を含む料理は見分けられる。ただし同じ厨房と調理器具で作るので混入の可能性があり、代替メニューもない (食べログ)。食物アレルギーは予め申し出るよう公式サイトにある。',
    vegan_detail: '要確認。ランチのブッフェは野菜が多く (2026年7月・10月)、食べログにはベジタリアン対応とあるが、ヴィーガンの料理は書かれていない。',
    notes: '[ホテルのダイニング・京都駅八条口、メイン付きのランチブッフェ] 駅から徒歩2分、都ホテル京都八条の大きなレストラン。サラダ、スープ、デザートのハーフブッフェにメインを選ぶランチ (4,900円)、パスタやローストビーフのコース、朝食ブッフェ、ケーキ。ホテルらしい丁寧なサービスで、時間を気にせず過ごせる。サービス料込み。',
  });
}

// ================================================================ 食道 萬きち
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26040632/'; const R = TB + 'dtlrvwlst/';
  const CO = 'https://frenchman-rakuchin.jp/company/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_shokudo_mankichi', name: '食道 萬きち (Shokudo Mankichi)', category: 'OMNI',
    lat: 34.981977, lng: 135.760827, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi and Japanese dishes — sashimi, nigiri, tempura, miso-grilled fish, pork kakuni, tsukune; soy sauce and miso are not described (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-and-sushi kitchen; the course soup is made with Rishiri kombu and honkarebushi (bonito) dashi (Tabelog).',
    hours_raw: 'Tuesday–Sunday and holidays 17:00–23:00 (L.O. food 22:00, drinks 22:30); closed Monday (Tabelog). Reservations accepted; one order per person; seat-only bookings and à la carte on the day also possible (Tabelog). Junior-high age and older only (Tabelog). Cards, e-money and QR payments (Tabelog). 16 seats, counter and tables; private hire for up to 20 (Tabelog). Opened 29 February 2024 (Tabelog). About 7–8 min on foot from the Hachijo exit of Kyoto Station (Tabelog; October 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'South of Kyoto Station — 7 min from the Hachijo exit',
    cuisine: 'Sushi and modern Japanese food from a chef with about 30 years in kaiseki kitchens (Tabelog) · Mankichi Japanese course, 14 dishes, with a seasonal soup of Rishiri kombu and honkarebushi dashi, ¥8,800 (Tabelog) · sushi and à la carte course, 15 dishes — about ten nigiri and four or five plates — ¥8,800 (Tabelog; January and October 2026) · “Extreme” course with sea urchin, lobster, Wagyu and foie gras, made with the group restaurant Buta Otoko, ¥17,600 (Tabelog) · à la carte: chef’s-choice sashimi, grilled squid, ayu tempura, miso-grilled Spanish mackerel, chicken tsukune, fried oysters, pork kakuni, sardine-and-tomato spring rolls, grilled soft roe, karasumi (2025–2026 reviews) · sake, e.g. Harushika and Isojiman (2026)',
    website: CO, gmaps: gm('食道 萬きち 京都'), menu_url: null,
    notes: '[Sushi and Japanese · near the Hachijo exit, kaiseki-trained chef] A small counter south of Kyoto Station where a chef with three decades in kaiseki serves ¥8,800 sushi or Japanese courses — the mid-course soup is made in front of you — plus à la carte sashimi, grilled fish and sake. Adults and teens only; closed Monday. Part of the local らくちん restaurant group.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)'], origin: null,
      background: 'Tabelog says the chef trained for 30 years in a kaiseki restaurant and makes the course dashi personally. Tabelog’s website link is the company page of 有限会社らくちん, and the invoice number T5130002022652 is registered to 有限会社らくちん (NTA register); the company page lists 11 shops (8 run directly, 3 franchised), led by 大衆酒場フレンチマン, with izakaya, yakiniku, yakitori, French and Thai restaurants, under representative director 渡辺 哲也. Reviewers praise the chef’s timing (August 2025, January 2026) and the friendly staff (December 2025).',
      philosophy: null, specialty: 'Sushi with Japanese course dishes; seasonal soup.',
      anecdotes: [
        { text: 'An October 2025 birthday table got a surprise birthday plate; the reviewer called the chef the best.', source: R + 'B498177604/' },
        { text: 'An October 2026 guest filled up on sashimi, soft roe, karasumi and crab and never got to the sushi.', source: R + 'B537662539/' },
      ],
      japanese_sources_summary: '食べログ: 食道 萬きち、寿司・日本料理・海鮮、南区東九条西山王町1-5、京都駅八条口から徒歩7分、火〜日・祝 17:00〜23:00 (L.O.料理22:00、ドリンク22:30)、月曜定休、予約可、1人1オーダー、中学生以上、カード可、16席、貸切20名まで、2024年2月29日オープン、懐石で30年修業した料理人、萬きち日本料理コース14品8,800円 (利尻昆布と本枯節の出汁)、寿司と一品のコース15品8,800円、Buta Otoko とのコラボの極みコース17,600円、適格請求書 T5130002022652 (有限会社らくちん)。会社概要: 有限会社らくちん、代表取締役 渡辺 哲也、11店舗 (直営8、FC3)、大衆酒場フレンチマンほか。口コミ (2025〜2026年、英語): 刺身、握り、鮎の天ぷら、鰆の味噌焼き、つくね、カキフライ、豚の角煮、春巻き、白子、からすみ、日本酒。',
      confidence: 'medium', sources: [TB, CO, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=5130002022652', R + 'B498177604/', R + 'B517268859/', R + 'B519765925/', R + 'B520171657/', R + 'B520705959/', R + 'B522671012/', R + 'B524722222/', R + 'B526851415/', R + 'B537662539/', R + 'B538382421/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter sushi; junior-high age and older only; one order per person.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市南区東九条西山王町1-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.981977, 135.760827); cross-checked: GSI 京都府京都市南区東九条西山王町1番地 (lot) 46m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog, tax included.', last_checked: TODAY, items: [
      it('', '', 'Mankichi Japanese course (14 dishes)', '¥8,800', 'Courses', 'ask', 'no', 'Tabelog; seasonal soup with kombu and bonito dashi.', 'japanese_course'),
      it('', '', 'Sushi and à la carte course (15 dishes)', '¥8,800', 'Courses', 'ask', 'no', 'Tabelog.', 'sushi_course'),
      it('', '', 'Extreme course (sea urchin, lobster, Wagyu, foie gras, sushi)', '¥17,600', 'Courses', 'ask', 'no', 'Tabelog.', 'kiwami_course'),
    ] }, {
    cuisine: '懐石で約30年修業した料理人の寿司と今風の日本料理 (食べログ)・萬きち日本料理コース14品、利尻昆布と本枯節の出汁の季節の椀物、8,800円 (食べログ)・寿司と一品のコース15品、握り10貫ほどと一品4〜5皿、8,800円 (食べログ、2026年1月・10月)・ウニ、オマール、和牛、フォアグラの極みコース、グループ店 Buta Otoko とのコラボ、17,600円 (食べログ)・一品: おまかせの刺身、イカ焼き、鮎の天ぷら、鰆の味噌焼き、つくね、カキフライ、豚の角煮、イワシとトマトの春巻き、白子焼き、からすみ (2025〜2026年の口コミ)・日本酒 (Harushika、Isojiman など、2026年)',
    neighborhood: '京都駅の南。八条口から徒歩7分',
    gf_detail: '要確認。刺身、握り、天ぷら、味噌焼き、豚の角煮、つくねなどの寿司と日本料理。醤油や味噌については書かれていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚と寿司の店で、コースの椀物は利尻昆布と本枯節の出汁 (食べログ)。',
    notes: '[寿司と日本料理・八条口、懐石出身の料理人] 京都駅の南の小さなカウンター。懐石で30年の料理人が8,800円の寿司や日本料理のコースを出し、途中の椀物は目の前で仕上げる。一品の刺身や焼き魚、日本酒も。中学生以上のみ、月曜定休。地元のらくちんグループの店。',
  });
}

// ================================================================ 鳥茂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26011304/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-torishige.com/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_tori_shige_mibu', name: '鳥茂 (Tori Shige)', category: 'OMNI',
    lat: 34.999312, lng: 135.740642, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori with salt or sauce, chicken mizutaki hot pot, oyakodon, karaage and chicken cutlet; seasonings are not described (official site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant — yakitori, chicken-bone mizutaki broth, oyakodon in dashi (official site; reviews).',
    hours_raw: '17:30–22:00 (L.O. 21:30); closed Sundays and Mondays, Mondays even on holidays (Tabelog; official site). Chicken mizutaki needs a reservation by the day before and is served from November to the end of March; the milky chicken soup is available all year (Tabelog; official site). Yakitori orders: at least two skewers of each kind for parties of two or more (official site). Cards, e-money and QR payments (Tabelog). 15 seats: 7 at the counter, 8 on sofas (Tabelog). Children welcome, with one free soft drink each up to high-school age (Tabelog). About 6 min on foot from JR Tambaguchi Station (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Residential Mibu — 6 min from JR Tambaguchi Stn',
    cuisine: 'A chicken restaurant founded in Kyoto in 1973 (official site) · yakitori ¥220 a skewer for most kinds (official site) — e.g. yagen cartilage, tsukune, Daisen chicken, wings (August 2025); five-skewer yakitori set with an appetizer and draft beer ¥2,000 (official site) · chicken mizutaki with zosui ¥4,700 a portion, November–March, by reservation; mizutaki course with yakitori ¥6,000 (official site) — kudzu noodles and tofu in the pot, egg zosui to finish (November 2026) · oyakodon ¥850 (official site) · karaage ¥830, salt-grilled wings ¥770, tamagoyaki ¥700 (official site) · chicken cutlet, natto omelet, duck breast, grilled shiitake (2025 reviews)',
    website: SITE, gmaps: gm('鳥茂 京都 壬生松原町'), menu_url: SITE,
    notes: '[Yakitori and mizutaki · Mibu, since 1973] A homey 15-seat chicken restaurant in a residential street, run by a friendly couple: ¥220 yakitori skewers, a much-praised oyakodon, and from November a milky chicken mizutaki hot pot (book the day before) finished with egg zosui. Family-friendly and non-smoking; closed Sunday and Monday.',
    chef_bio: { chef_name: '松尾 茂', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'The official site says the restaurant was founded in Kyoto in 1973 (Showa 48). Tabelog’s invoice number T8810019048857 is registered to the individual 松尾 茂 (NTA register). Reviewers describe a family-run shop with a warm hostess (May 2024), welcomed by “a very pleasant couple running the restaurant” (May 2025) and “the couple running the restaurant” who were friendly (November 2025); a December 2025 visitor found “both the chef and the owner incredibly kind”.',
      philosophy: null, specialty: 'Chicken mizutaki; oyakodon; yakitori.',
      anecdotes: [
        { text: 'A November 2025 visitor, there near closing time, was told to take as long as needed anyway.', source: R + 'B517382977/' },
        { text: 'A November 2026 family with children were given snacks on the way out.', source: R + 'B538639725/' },
      ],
      japanese_sources_summary: '公式サイト: 鳥茂、昭和48年に京都で創業、17:30〜22:00 (L.O.21:30)、日曜・月曜定休、焼き鳥は1本220円 (2名様より1種類につき2本以上)、親子丼850円、水炊きコース6,000円、鶏の水炊き (雑炊付き) 1人前4,700円・要予約、焼き鳥セット2,000円 (お通し、おまかせ5本、生ビール)、唐揚げ830円、手羽塩焼き770円、玉子焼き700円。食べログ: 焼き鳥・親子丼・水炊き、中京区壬生松原町40-39、JR丹波口駅から徒歩6分、カード可、15席 (カウンター7、ソファ8)、子どもにソフトドリンク1杯サービス、水炊きは11月から3月末まで・前日までの予約制、白湯スープは通年、適格請求書 T8810019048857 (松尾 茂)。口コミ (2025〜2026年、英語): 夫婦で営む店、焼き鳥、Daisen の鶏、チキンカツ、納豆オムレツ、鴨ロース、だし巻き、水炊きのコース、雑炊。',
      confidence: 'medium', sources: [SITE, TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=8810019048857', R + 'B484375774/', R + 'B505956985/', R + 'B515942912/', R + 'B517382977/', R + 'B518337788/', R + 'B518457461/', R + 'B519886366/', R + 'B538639725/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Neighbourhood chicken restaurant; book mizutaki the day before; families welcome.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区壬生松原町40-39',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.999312, 135.740642); cross-checked: GSI 京都府京都市中京区壬生松原町40番地 (lot) 126m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Prices from the official site, tax included.', last_checked: TODAY, items: [
      it('焼き鳥', 'yakitori', 'Yakitori (most kinds)', '¥220', 'Yakitori', 'ask', 'no', 'Per skewer; two of each kind for parties of two or more.', 'yakitori'),
      it('親子丼', 'oyakodon', 'Oyakodon', '¥850', 'Rice', 'ask', 'no', 'Official site.', 'oyakodon'),
      it('鶏の水炊き', 'tori no mizutaki', 'Chicken mizutaki with zosui (per portion)', '¥4,700', 'Hot pot', 'ask', 'no', 'November–March; reserve by the day before.', 'mizutaki'),
      it('', '', 'Mizutaki course with yakitori', '¥6,000', 'Hot pot', 'ask', 'no', 'Official site.', 'mizutaki_course'),
      it('', '', 'Yakitori set: appetizer, five skewers, draft beer', '¥2,000', 'Sets', 'ask', 'no', 'Official site.', 'yakitori_set'),
    ] }, {
    cuisine: '昭和48年 (1973年) に京都で創業した鶏料理の店 (公式サイト)・焼き鳥はほとんど1本220円 (公式サイト)。やげん軟骨、つくね、Daisen の鶏、手羽など (2025年8月)。お通し、おまかせ5本、生ビールの焼き鳥セット2,000円 (公式サイト)・鶏の水炊き (雑炊付き) 1人前4,700円、11〜3月、要予約。焼き鳥付きの水炊きコース6,000円 (公式サイト)。鍋に葛切りと豆腐、締めは玉子雑炊 (2026年11月)・親子丼850円 (公式サイト)・唐揚げ830円、手羽塩焼き770円、玉子焼き700円 (公式サイト)・チキンカツ、納豆オムレツ、鴨ロース、焼き椎茸 (2025年の口コミ)',
    neighborhood: '壬生の住宅街。JR丹波口駅から徒歩6分',
    gf_detail: '要確認。塩やたれの焼き鳥、鶏の水炊き、親子丼、唐揚げ、チキンカツ。調味料については書かれていない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。焼き鳥、鶏ガラの水炊き、出汁の親子丼の鶏料理の店 (公式サイト、口コミ)。',
    notes: '[焼き鳥と水炊き・壬生、1973年創業] 住宅街にある15席のあたたかい鶏料理の店で、感じのよい夫婦が営む。1本220円の焼き鳥、評判の親子丼、11月からは白濁した鶏の水炊き (前日までに予約) と締めの玉子雑炊。家族連れも歓迎、禁煙、日曜・月曜定休。',
  });
}

save();
