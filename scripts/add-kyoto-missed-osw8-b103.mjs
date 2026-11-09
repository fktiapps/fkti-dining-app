// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 103 (2026-11-08).
//   + 京都御所 富小路休憩所 Tominokoji Rest House (park rest house café in Kyoto Gyoen, by the Tominokoji plaza; rest)
//   + Focacceria CHUCHO (focaccia sandwich café from Kyoto coffee shop COYOTE, Kinudana-Ebisugawa; rest)
//   + モリオカ Morioka (ten-seat pasta and set-meal shop opposite Kumano Shrine; rest)
//   Rest list (mod 6 = 1) after batch 102, nearest-first — skipped:
//   - 六盛 スフレ・カフェコーナー茶庭 26026465: covered by kyoto_rokusei_okazaki — the soufflé café corner of Rokusei at the
//     same address, already named in that record's cuisine line (Soufflé & Café 茶庭).
//   - 趣肴酒彩 ますたけ 26022553: no review dated 2025–26 (latest October 2020).
//   - シェプロ 26041027: thin listing (4 reviews).
//   - Listening Bar LISTEN KYOTO 26043517: thin listing (1 review).
//   - ホリーズカフェ 四条大宮店 26038561: chain.
//   Coordinator ruling (osw8-102 reply): one 2025–26 review describing the current menu meets the bar for 富小路休憩所, and a
//   public-park foundation's rest house is not a chain; hours from fng.or.jp.
//   Brand check: queue-status.jsonl, than.co.jp/brands and the WILL brands checked — none matches. COYOTE (CHUCHO's parent,
//   per reviews) is not in data; El Coyote 26034321 (skipped osw2-65) is a different, unrelated listing. None of the three is in
//   data (main 65610e43, hidden records included).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-103');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260302/26026465/', 'covered by kyoto_rokusei_okazaki: the soufflé café corner of Rokusei at the same address, already named in that record');
skip('https://tabelog.com/en/kyoto/A2601/A260302/26022553/', 'no review dated 2025–26 (latest October 2020)');
skip('https://tabelog.com/en/kyoto/A2601/A260302/26041027/', 'thin listing: 4 reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260302/26043517/', 'thin listing: 1 review');
skip('https://tabelog.com/en/kyoto/A2601/A260203/26038561/', 'chain: ホリーズカフェ');

// ================================================================ 京都御所 富小路休憩所
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025529/'; const R = TB + 'dtlrvwlst/';
  const FNG = 'https://fng.or.jp/kyoto/place/rest/';
  const H = day(['09:00', '16:30']);
  put({
    id: 'kyoto_tominokoji_rest_house', name: '京都御所 富小路休憩所 (Tominokoji Rest House)', category: 'OMNI',
    lat: 35.01813097601286, lng: 135.76583958515127, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The current quiche and cakes contain wheat; no gluten information (September 2026 review).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Quiche and cakes usually use eggs and dairy; no vegan information (September 2026 review).',
    hours_raw: 'Daily 9:00–16:30; closed over the New Year holidays; occasional closures for facility inspections (fng.or.jp, operator). Tabelog instead lists 10:00–16:30 with last food order 15:30, open year-round with occasional temporary closures. No service charge (Tabelog original なし). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Non-smoking; take-out; children welcome; whole-room hire for 20–50; use the Kyoto Gyoen car park (Tabelog; fng.or.jp). Inquiries in Japanese only (fng.or.jp). Inside Kyoto Gyoen next to the Tominokoji plaza and tennis courts, entered from the Tominokoji gate on Marutamachi-dori (fng.or.jp; June 2016 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Gyoen (Imperial Park), southeast corner',
    cuisine: 'Rest-house café of the National Gardens Association inside the Imperial Park (fng.or.jp) · quiche with plenty of vegetables and soup; cake set with a drink ¥1,500; outdoor tables; souvenir shop attached (September 2026) · earlier menus (2015–2020 reviews): kitsune udon, Kujo green-onion udon set, curry, shrimp pilaf, omelette hayashi rice, coffee — may have changed · about ¥1,000–2,000 (Tabelog)',
    website: FNG, gmaps: gm('富小路休憩所 京都御苑'), menu_url: null,
    notes: '[Café · Kyoto Gyoen] A spacious, wood-furnished rest house in the Imperial Park by the tennis courts — a break between palace visits, with quiche, a cake set and outdoor tables for autumn leaves, plus souvenirs. Open daily; cards.',
    chef_bio: { chef_name: null, roles: ['Operator: 一般財団法人国民公園協会 (National Gardens Association)'], origin: null,
      background: 'A rest house run by the National Gardens Association, which manages visitor facilities in Kyoto Gyoen under the Ministry of the Environment’s Kyoto Gyoen office; it sits beside the Tominokoji plaza and tennis courts (fng.or.jp).',
      philosophy: null, specialty: 'Cake set; quiche.',
      anecdotes: [
        { text: 'A September 2026 walker, tired after sightseeing, had a quiche with vegetables and soup and eyed the ¥1,500 cake set.', source: R + 'B535747526/' },
        { text: 'In July 2017 a rain-soaked pair fleeing a downpour after the Sento Palace tour warmed up with kitsune udon here.', source: R + 'B278732797/' },
        { text: 'A March 2019 visitor at a Kyoto Gosho special viewing liked the spacious, wooden room with matching tables and chairs.', source: R + 'B414192866/' },
      ],
      japanese_sources_summary: '国民公園協会 (fng.or.jp): 富小路休憩所は富小路広場とテニスコートに隣接した休憩所、電話075-256-4928、営業時間9:00〜16:30、定休日 無休 (年末年始を除く)、全面禁煙、問い合わせは日本語のみ。食べログ: うどん・喫茶、上京区京都御苑3、10:00〜16:30 (L.O.料理15:30)、無休 (臨時休業あり)、サービス料なし、カード (VISA・Master・JCB・AMEX・Diners) 可、電子マネー・QR 不可、禁煙、20〜50名で貸切可、駐車場は京都御苑の駐車場、テイクアウト、子ども可。口コミ (英語): 2026年9月 野菜たっぷりのキッシュとスープ、ケーキセット1,500円、外の席、おみやげ店。2015〜2020年 きつねうどん、九条ねぎうどん定食、カレー、えびピラフ、オムハヤシ、コーヒー。',
      confidence: 'medium', sources: [FNG, 'https://fng.or.jp/kyoto/category/%E5%AF%8C%E5%B0%8F%E8%B7%AF%E4%BC%91%E6%86%A9%E6%89%80/', TB, R + 'B535747526/', R + 'B432008451/', R + 'B421493496/', R + 'B414192866/', R + 'B278732797/', R + 'B278732661/', R + 'B274890180/', R + 'B203004124/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; inquiries in Japanese only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区京都御苑3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Operator page (fng.or.jp) and Tabelog; review September 2026.' },
    pin_source: `Tabelog ${TB} (35.018131, 135.765840); cross-checked: GSI 京都府京都市上京区京都御苑3番地 is the park-wide lot (853 m away, not usable); OSM 富小路広場 centroid about 117 m north, consistent with the operator’s “next to the Tominokoji plaza and tennis courts”; nearest existing record 97.1 m (mp_teuchi_soba_hanamomo); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535747526/'],
    price_note: 'Price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Cake set (cake and drink)', '¥1,500', 'Sweets', 'no', 'ask', 'September 2026.', 'cake_set'),
      it('', '', 'Quiche with vegetables and soup', '', 'Light meals', 'no', 'ask', 'September 2026.', 'quiche'),
    ] }, {
    cuisine: '京都御苑内の国民公園協会の休憩所のカフェ (fng.or.jp)・野菜たっぷりのキッシュとスープ、飲み物付きのケーキセット1,500円、外の席、おみやげ店を併設 (2026年9月)・以前のメニュー (2015〜2020年の口コミ): きつねうどん、九条ねぎうどん定食、カレー、えびピラフ、オムハヤシ、コーヒー (変わっている可能性あり)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '京都御苑の南東',
    gf_detail: '要確認。今のキッシュやケーキは小麦。グルテンの情報はない (2026年9月の口コミ)。',
    vegan_detail: '要確認。キッシュやケーキはふつう卵や乳製品を使う。ヴィーガンの情報はない (2026年9月の口コミ)。',
    notes: '[カフェ・京都御苑] テニスコート横の、木の家具の広々とした京都御苑の休憩所。御所の見学の合間に、キッシュ、ケーキセット、紅葉の季節によい外の席、おみやげも。無休、カード可。',
  });
}

// ================================================================ Focacceria CHUCHO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26044837/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:30', '17:00']);
  put({
    id: 'kyoto_focacceria_chucho', name: 'Focacceria CHUCHO', category: 'OMNI',
    lat: 35.015118827862274, lng: 135.75717785046646, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The menu centres on focaccia sandwiches, cream puffs and banana bread, all wheat-based; no gluten information (September–November 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Sandwiches feature ham, chicken, duck and Parmesan; no vegan option mentioned (September–November 2026 reviews).',
    hours_raw: 'Monday and Wednesday–Sunday 8:30–17:00 (last order 16:30); closed Tuesday (Tabelog). No reservations (Tabelog). Order and pay at the counter, then take a seat; take-out available (September and November 2026). Cashless — cards, transport IC, iD, QUICPay and PayPay (Tabelog; September 2026). No service charge (Tabelog original なし). Non-smoking; English menu; kids menu (Tabelog). Opened 8 April 2026 (Tabelog). On Kinudana-dori just off Ebisugawa-dori, about 4–5 min walk from Marutamachi Stn (Tabelog; September 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kinudana-Ebisugawa, near Marutamachi',
    cuisine: 'Focaccia sandwich café, a new concept from the Kyoto coffee shop COYOTE (September and November 2026 reviews) · five focaccia sandwiches: El Chucho of homemade roast ham, tomato-almond sauce, salad and Parmesan, as a set with a drink ¥1,980 and a ticket for a free second coffee or orange juice; seasonal fig and duck; yangnyeom chicken (September–November 2026) · weekend-only fig and tea cream puff ¥700; warm banana bread; tiramisu; chai, lattes, iced milk ¥660 (September–October 2026) · about ¥1,000–3,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('Focacceria CHUCHO 京都'), menu_url: null,
    notes: '[Café · near Marutamachi, from 8:30] A bright, stylish focaccia café from the COYOTE coffee team: chewy focaccia packed with homemade ham and tomato-almond sauce, a free second coffee with every set, and weekend fig cream puffs. Cashless; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: opened 8 April 2026 on Kinudana-dori as a new concept from the popular Kyoto coffee shop COYOTE, with focaccia that tastes freshly baked in the shop (Tabelog; September–November 2026).',
      philosophy: null, specialty: 'El Chucho focaccia sandwich.',
      anecdotes: [
        { text: 'An October 2026 regular, rarely impressed by sandwiches, was won over by the focaccia and the homemade roast ham.', source: R + 'B538723125/' },
        { text: 'A September 2026 visitor came the very day the fig and tea cream puffs launched, and ordered the chai again.', source: R + 'B535524059/' },
        { text: 'A November 2026 holiday visitor arrived around 9 a.m. to two customers ahead and a relaxed room.', source: R + 'B538922233/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、中京区花立町271、地下鉄丸太町駅から徒歩約4分、月・水〜日 8:30〜17:00 (L.O.16:30)、火曜休み、予約不可、カード・交通系IC・iD・QUICPay・PayPay 可、サービス料なし、禁煙、英語メニュー、キッズメニュー、2026年4月8日開店。口コミ (2026年9〜11月、英語): 京都のコーヒー店 COYOTE の新業態、完全キャッシュレス、カウンターで注文してから席へ、テイクアウト可、5種のフォカッチャ、El Chucho (自家製ハム、トマトとアーモンドのソース、サラダ、パルメザン) のセット1,980円、2杯目のコーヒーかオレンジジュースの無料券、季節のいちじくと鴨、ヤンニョムチキン、週末限定のいちじくと紅茶のシュークリーム700円、温かいバナナブレッド、ティラミス、チャイ、ラテ、アイスミルク660円。',
      confidence: 'medium', sources: [TB, R + 'B535524059/', R + 'B535890575/', R + 'B535940286/', R + 'B536209087/', R + 'B536218075/', R + 'B536438360/', R + 'B536478620/', R + 'B537988968/', R + 'B538723125/', R + 'B538922233/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; order at the counter; cashless.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区花立町271',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened April 2026; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.015119, 135.757178); cross-checked: GSI 京都府京都市中京区花立町271番地 (lot) 49 m; nearest existing record 85.1 m (kyoto_ginjo_kuraudo_marutamachi); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538922233/', R + 'B536478620/'],
    price_note: 'Prices from September and November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'El Chucho focaccia set (ham, tomato-almond sauce, salad, Parmesan; with drink)', '¥1,980', 'Sandwiches', 'no', 'no', 'November 2026; some drinks extra.', 'el_chucho'),
      it('', '', 'Fig and tea cream puff (weekends)', '¥700', 'Sweets', 'no', 'no', 'September 2026.', 'cream_puff'),
      it('', '', 'Iced milk', '¥660', 'Drinks', 'gf', 'no', 'September 2026.', 'iced_milk'),
    ] }, {
    cuisine: '京都のコーヒー店 COYOTE の新業態のフォカッチャサンドのカフェ (2026年9月、11月の口コミ)・5種のフォカッチャサンド: 自家製ローストハム、トマトとアーモンドのソース、サラダ、パルメザンの El Chucho、飲み物付きのセット1,980円と2杯目のコーヒーかオレンジジュースの無料券、季節のいちじくと鴨、ヤンニョムチキン (2026年9〜11月)・週末限定のいちじくと紅茶のシュークリーム700円、温かいバナナブレッド、ティラミス、チャイ、ラテ、アイスミルク660円 (2026年9〜10月)・1,000〜3,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '衣棚夷川、丸太町の近く',
    gf_detail: '要確認。フォカッチャサンド、シュークリーム、バナナブレッドが中心で、どれも小麦。グルテンの情報はない (2026年9〜11月の口コミ)。',
    vegan_detail: '要確認。サンドはハム、チキン、鴨、パルメザン。ヴィーガンの選択肢の記載はない (2026年9〜11月の口コミ)。',
    notes: '[カフェ・丸太町の近く、8:30から] COYOTE のチームの明るくおしゃれなフォカッチャのカフェ。自家製ハムとトマトとアーモンドのソースをはさんだもっちりしたフォカッチャ、セットには2杯目のコーヒーの無料券、週末はいちじくのシュークリーム。キャッシュレス、火曜休み。',
  });
}

// ================================================================ モリオカ Morioka
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26018767/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '24:00']);
  put({
    id: 'kyoto_morioka_kumano', name: 'モリオカ (Morioka)', category: 'OMNI',
    lat: 35.0172969, lng: 135.77793437210778, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta is the mainstay; daily set meals such as roast pork or steak with rice may suit, but sauces are unknown; no gluten information (2017–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Pastas include carbonara and bacon, sets centre on meat, and the pudding uses eggs and milk; no vegan information (2017–2026 reviews).',
    hours_raw: 'Monday–Saturday 11:30–15:00 and 17:00–24:00; closed Sunday, though it may open by reservation (Tabelog). Reservations accepted (Tabelog). Payment methods and service charge not listed on Tabelog. 10 seats; designated area for heated tobacco only (Tabelog). On the second floor at the back of the Palestate Nissei building opposite Kumano Shrine, by the Kumano Jinja-mae bus stop, 7 min walk from Jingu-Marutamachi Stn; look for a line-drawn sign (Tabelog; May 2023; November 2025; February 2026). Opened 7 November 2010 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kumano Shrine, Shogoin',
    cuisine: 'Ten-seat set-meal and pasta shop with a cosy, underground feel, cheap and filling (2017–2026 reviews) · pasta lunch with salad and homemade pudding (November 2025) · carbonara rich with cheese and pepper, ordered by the 100 g (March 2024) · daily set meals such as roast pork; Neapolitan, eggplant Bolognese and spicy tomato pastas (2017–2023) · under ¥2,000 (Tabelog)',
    website: null, gmaps: gm('モリオカ 聖護院山王町 京都'), menu_url: null,
    notes: '[Pasta and set meals · opposite Kumano Shrine, open late] A hidden ten-seat spot upstairs in a building by Kumano Shrine: generous carbonara sized by the 100 g, daily set meals and a homemade pudding to finish, at student prices. Gruff manner, good food. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: open since November 2010 at the back of a multi-tenant building opposite Kumano Shrine, serving pasta and daily set meals at low prices; reviewers describe the owner as brusque but a craftsman whose food is genuinely good (March 2024; February 2026).',
      philosophy: null, specialty: 'Carbonara; homemade pudding.',
      anecdotes: [
        { text: 'A February 2026 regular found the owner intimidating at first but the pasta exceptional, and has grown to love the place.', source: R + 'B532448398/' },
        { text: 'A November 2025 lunch guest had pasta with salad and found the homemade pudding incredibly good.', source: R + 'B517814251/' },
        { text: 'In May 2023 a hungry traveller arrived to find the rice gone; the roast pork came without it, at a discount.', source: R + 'B465958383/' },
      ],
      japanese_sources_summary: '食べログ: 定食・パスタ・ダイニングバー、左京区聖護院山王町42-2 パレステート日生112、市バス「熊野神社前」から徒歩1分、神宮丸太町駅から徒歩7分、月〜土 11:30〜15:00、17:00〜24:00、日曜休み (予約で営業の場合あり)、予約可、10席、加熱式たばこのみの喫煙スペース、2010年11月7日開店。支払い方法とサービス料の記載なし。口コミ (2017年〜2026年2月、英語): 熊野神社の向かいの雑居ビルの2階の奥、線画の看板、パスタランチにサラダと自家製プリン (2025年11月)、100グラム単位のカルボナーラ (2024年3月)、日替わり定食、ナポリタン、なすのボロネーゼ、店主はぶっきらぼうだが料理はよい (2024年3月、2026年2月)。',
      confidence: 'medium', sources: [TB, R + 'B532448398/', R + 'B517814251/', R + 'B481909299/', R + 'B465958383/', R + 'B453477740/', R + 'B294546719/', R + 'B99788234/', R + 'B191182764/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small and no-frills; payment methods not listed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区聖護院山王町42-2 パレステート日生112',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews November 2025 and February 2026.' },
    pin_source: `Tabelog ${TB} (35.017252, 135.777934), moved 5 m north (+0.000045 lat) because kyoto_chander_marutamachi (same building, B1F) sat 2.4 m away; now 7.4 m from it; cross-checked: GSI 京都府京都市左京区聖護院山王町42番地 (lot) 80 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517814251/', R + 'B481909299/'],
    price_note: 'No current item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Pasta lunch (with salad and pudding)', '', 'Lunch', 'no', 'ask', 'November 2025.', 'pasta_lunch'),
      it('', '', 'Carbonara (size by the 100 g)', '', 'Pasta', 'no', 'no', 'March 2024.', 'carbonara'),
    ] }, {
    cuisine: '地下のような落ち着いた雰囲気の、安くて満腹になる定食とパスタの10席の店 (2017〜2026年の口コミ)・サラダと自家製プリン付きのパスタランチ (2025年11月)・チーズと胡椒の濃いカルボナーラ、100グラム単位で注文 (2024年3月)・ローストポークなどの日替わり定食、ナポリタン、なすのボロネーゼ、辛いトマトのパスタ (2017〜2023年)・2,000円未満 (食べログ)',
    neighborhood: '熊野神社、聖護院',
    gf_detail: '要確認。パスタが中心。ローストポークやステーキとご飯の日替わり定食は合う可能性があるが、たれは不明。グルテンの情報はない (2017〜2026年の口コミ)。',
    vegan_detail: '要確認。パスタにカルボナーラやベーコン、定食は肉が中心、プリンは卵と牛乳。ヴィーガンの情報はない (2017〜2026年の口コミ)。',
    notes: '[パスタと定食・熊野神社の向かい、夜遅くまで] 熊野神社そばのビルの上の階に隠れた10席の店。100グラム単位で頼めるたっぷりのカルボナーラ、日替わり定食、締めの自家製プリンを学生向けの値段で。店主はぶっきらぼうだが料理はよい。日曜休み。',
  });
}

save();
