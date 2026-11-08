// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 68.
//   + 麩屋柳緑 Fuya Ryuryoku (tea stand, shop and tea-sweets café, Fuyacho; rest — skipped in osw8-67 for missing hours,
//     now drafted with hours {} per the coordinator: missing hours are not a skip reason)
//   + N祇園35° N Gion 35° (seven-seat Spanish-and-sushi counter, Gion Kiyomoto-cho; rest)
//   + 居酒屋 マウム izakaya maumu (creative Kyoto izakaya open from noon, Gion Tominaga-cho; rest)
//   + エスプレッソ珈琲 吉田屋 Espresso Coffee Yoshidaya (old espresso kissa, Kiyamachi-Sanjo; rest)
//   Rest list (mod 6 = 1) after batch 67, nearest-first — skipped:
//   - のらりくらり 26045647: thin listing, 5 reviews.
//   - すき焼き 肉のひろ重 錦市場 26040619: chain — five 肉のひろ重 shops in our crawls (same call as 26043469, osw8-64).
//   Brand check: queue-status.jsonl grepped for 柳緑, 35°, マウム, 吉田屋 — no skip or done entries except 柳緑's own osw8-67 skip.
//   Same-name: マウム — a Tabelog name search (2026-11-07) shows Yakiniku Maumu, Yakiniku Maumu Kyoto Kiyamachi, BISTRO MAUMU and
//   izakaya maumu; an October 2024 review says the izakaya is part of the series with the yakiniku and the bistro — a small local
//   group, drafted as a sister concept. 柳緑 is run by the team behind kabura (kyoto_kabura_takoyakushi) per an October 2025
//   review — a sister concept of a small local group, drafted. None is in data/kyoto.json (main 08cd65fa) by name or address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-68');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26045647/', 'thin listing: 5 reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26040619/', 'chain: five 肉のひろ重 shops in our crawls (室町, 錦市場, 高辻, 八百屋, 御池); same call as 26043469 (osw8-64)');

// ================================================================ 麩屋柳緑 Fuya Ryuryoku
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26035891/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_fuya_ryuryoku', name: '麩屋柳緑 (Fuya Ryuryoku)', category: 'OMNI',
    lat: 35.00796909786956, lng: 135.76582234038818, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tea itself is gluten-free, but the sweets include canelé, brownie, dorayaki, cheesecake and wagashi; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plain matcha, hojicha, green tea and Japanese black tea are plant-based; lattes, pudding, crème brûlée and cakes contain dairy or egg (2024–2026 reviews).',
    hours_raw: 'Tabelog lists no hours; reviewers visited between about 13:00 and 15:00, on Saturdays, Sundays and weekdays (2025–2026 reviews). Reservations accepted (Tabelog). Cards, e-money and QR (Tabelog). Non-smoking (Tabelog). Order and pay at the counter before sitting (December 2025). Tea is brewed with care, so it can take a while when busy (March 2026). Ground floor: a tea stand and shop for tea from Minamiyamashiro village, with pudding and dorayaki to take home; upstairs: a counter where tea sweets are finished in front of you; a garden at the back (2024–2025 reviews). Opened 29 April 2021 (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nakagyo, near Kyoto Shiyakusho-mae',
    cuisine: 'Townhouse tea café and shop themed on tea from Minamiyamashiro village in Kyoto Prefecture (2024–2025 reviews) · matcha with the day\'s sweet, a set of three hojicha roasts with a sweet, Japanese black tea (benifuki, saeakari), matcha and hojicha lattes, sweet green tea, kakigori in summer (2024–2026 reviews) · matcha crème brûlée, matcha cheesecake, Japanese black tea canelé, hojicha and citrus brownie, terrine, village-tea pudding in matcha and hojicha; tea leaves to take home (2024–2025 reviews) · about ¥1,000–2,000 (Tabelog)',
    website: 'https://ryu-ryoku.kyoto/', gmaps: gm('麩屋柳緑'), menu_url: null,
    notes: '[Tea café · Nakagyo, townhouse with garden] A tea house for the green and black teas of Minamiyamashiro village: a casual tea stand and shop downstairs looking onto a garden, and an upstairs counter where tea sweets — matcha crème brûlée, black-tea canelé — are finished in front of you. Order and pay first. Hours are not published; check before going.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a shop opened 29 April 2021 in Nakagyo. Reviewers in 2024–2025 describe a townhouse café and antenna shop for tea from Minamiyamashiro village; an October 2025 reviewer says it is run by the same team as the Italian restaurant kabura at Fuyacho-Takoyakushi.',
      philosophy: null, specialty: 'Matcha with seasonal sweets; tea-based baked sweets.',
      anecdotes: [
        { text: 'A May 2024 visitor sat at the upstairs counter as the sweets were finished and the matcha whisked at the counter, and planned to come back for the village-tea pudding.', source: R + 'B488536853/' },
        { text: 'A December 2025 guest paid at the counter first, then tasted three roasts of hojicha side by side with a sweet.', source: R + 'B519873328/' },
        { text: 'A March 2026 visitor noted the tea is brewed slowly and carefully, so service can lag when the room fills.', source: R + 'B524691356/' },
      ],
      japanese_sources_summary: '食べログ: 店舗、中京区白壁町439、営業時間の掲載なし、予約可、カード・電子マネー・QR 可、禁煙、2021年4月29日開店、公式サイトあり (2026年11月7日は応答なし)。口コミ (2024年5月〜2026年3月、英語): Minamiyamashiro 村のお茶の町家カフェとアンテナショップ、1階はお茶のスタンドと販売 (村のお茶、紅茶の品種 benifuki・saeakari、抹茶とほうじ茶のプリン、どら焼き)、奥に庭、2階はカウンターで目の前で仕上げる茶菓子、抹茶のクレームブリュレ、和紅茶のカヌレ、ほうじ茶と柑橘のブラウニー、抹茶のチーズケーキ、ほうじ茶3種の飲み比べ、先に会計してから席へ (2025年12月)、丁寧にいれるので混むと時間がかかる (2026年3月)、Fuyacho-Takoyakushi のイタリアン kabura と同じ運営との声 (2025年10月)。',
      confidence: 'medium', sources: [TB, R + 'B485795485/', R + 'B487787179/', R + 'B488536853/', R + 'B504087235/', R + 'B505610344/', R + 'B516403249/', R + 'B516681909/', R + 'B519873328/', R + 'B524691356/', R + 'B532840723/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the counter first; hours not published; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区白壁町439',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through March 2026. Website did not respond on 2026-11-07.' },
    pin_source: `Tabelog ${TB} (35.007969, 135.765822); GSI matches only the town 京都府京都市中京区白壁町 (13 m), not the lot, so the Tabelog pin is kept; nearest existing record 66.0 m (kyoto_train_train); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516403249/', R + 'B516681909/'],
    price_note: 'No prices in the sources; items from October and November 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Matcha crème brûlée', '', 'Sweets', 'ask', 'no', 'November 2025.', 'creme_brulee'),
      it('', '', 'Japanese black tea canelé', '', 'Sweets', 'no', 'no', 'October 2025.', 'canele'),
    ] }, {
    cuisine: 'Minamiyamashiro 村のお茶をテーマにした町家のお茶のカフェと店 (2024〜2025年の口コミ)・本日の菓子付きの抹茶、ほうじ茶3種と菓子のセット、和紅茶 (benifuki、saeakari)、抹茶とほうじ茶のラテ、甘い緑茶、夏はかき氷 (2024〜2026年の口コミ)・抹茶のクレームブリュレ、抹茶のチーズケーキ、和紅茶のカヌレ、ほうじ茶と柑橘のブラウニー、テリーヌ、村のお茶のプリン (抹茶・ほうじ茶)、持ち帰りの茶葉 (2024〜2025年の口コミ)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '中京区、市役所前駅の近く',
    gf_detail: '要確認。お茶そのものはグルテンフリーだが、菓子にカヌレ、ブラウニー、どら焼き、チーズケーキ、和菓子。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。抹茶、ほうじ茶、緑茶、和紅茶そのものは植物性。ラテ、プリン、クレームブリュレ、ケーキには乳製品や卵 (2024〜2026年の口コミ)。',
    notes: '[お茶のカフェ・中京区、庭のある町家] Minamiyamashiro 村の緑茶と紅茶の店。1階は庭を望む気軽なお茶のスタンドと売り場、2階のカウンターでは抹茶のクレームブリュレや和紅茶のカヌレなどの茶菓子を目の前で仕上げる。先に注文と会計を。営業時間は公表されていないので確認を。',
  });
}

// ================================================================ N祇園35° N Gion 35°
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042965/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:30', '23:00']);
  put({
    id: 'kyoto_n_gion_35', name: 'N祇園35° (N Gion 35°)', category: 'OMNI',
    lat: 35.00536563787409, lng: 135.77486118035554, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An omakase of Spanish-style dishes and sushi — capellini, gratin and soy are likely; no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, meat and sushi omakase (2024–2026 reviews).',
    hours_raw: 'Daily 12:30–23:00; closing days vary (Tabelog). Reservation only (Tabelog); a 2024 reviewer believed a referral system had begun — see the shop\'s Instagram. Service charge 5% (Tabelog original サービス料5%). Dress code: elegant attire for fine dining, no casual wear (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (Tabelog). 7 counter seats; private hire up to 20 (Tabelog). Smoking area outside; e-cigarettes inside only on private hire (Tabelog). Children only on private hire (Tabelog). 2F of the Rumondo building, 5 min walk from Keihan Gion-Shijo Stn (Tabelog). Listed from 1 May 2025 (Tabelog); an August 2025 reviewer says the restaurant had recently changed its name.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Kiyomoto-cho near Tatsumi-bashi — 2F',
    cuisine: 'Seven-seat omakase counter that runs Spanish-inspired dishes into sushi on red-vinegar rice (Tabelog; 2024–2026 reviews) · dishes change every visit: oysters with caviar, firefly squid paella, capellini in clam broth with sea urchin and caviar, grouper with burdock chips, hamo with matsutake, abalone gratin with cumin, zabuton and sirloin cap with charcoal salt; a Korean dish in one 2026 course (2025–2026 reviews) · wine, sake and cocktails (Tabelog; July 2026) · about ¥15,000–30,000 (Tabelog)',
    website: null, gmaps: gm('N祇園35°'), menu_url: null,
    notes: '[Spanish-and-sushi omakase · Gion Kiyomoto-cho, 7 seats] A tiny counter where a former sushi chef with Spanish, Italian and Chinese experience sends out a parade of inventive dishes — abalone gratin, firefly-squid paella, capellini with uni and caviar — before finishing on red-vinegar sushi. Reservation only; dress smartly; 5% service charge. Portions are generous.',
    chef_bio: { chef_name: 'Kenji Nakajima', roles: ['Owner-chef'], origin: null,
      background: 'Per an April 2024 review: owner-chef Kenji Nakajima was once a sushi chef and draws on experience in Spanish, Italian and Chinese cooking for genre-crossing dishes at a seven-seat counter. Tabelog lists the restaurant from 1 May 2025; an August 2025 reviewer notes a recent change of name.',
      philosophy: null, specialty: 'Spanish-style dishes followed by sushi.',
      anecdotes: [
        { text: 'A May 2026 regular celebrated a wedding here, opening with oysters topped with caviar and finishing with leftover firefly squid paella.', source: R + 'B505914311/' },
        { text: 'A May 2025 diner from Nagoya says the place is worth the trip just to eat this food and meet the chef.', source: R + 'B513680329/' },
        { text: 'A July 2026 guest found the owner charming — skilled at cooking, endearingly clumsy otherwise — and the portions so generous that the sushi arrived on a full stomach.', source: R + 'B532280532/' },
      ],
      japanese_sources_summary: '食べログ: 創作料理・寿司・スペイン料理、東山区清本町375-2 るもんどビル2F、京阪祇園四条駅から徒歩5分、毎日 12:30〜23:00、不定休、完全予約制、サービス料5%、ドレスコード (カジュアル不可)、カード・電子マネー・QR 可、カウンター7席、20名まで貸切可、店外に喫煙所 (貸切時は店内で電子たばこ可)、子どもは貸切時のみ、2025年5月1日。口コミ (2024年4月〜2026年7月、英語): オーナーシェフ Kenji Nakajima は元寿司職人でスペイン・イタリア・中華の経験 (2024年4月)、紹介制になったとの声 (2024年4月)、店名が変わったばかり (2025年8月)、スペイン風の料理のあと赤酢のシャリの寿司、牡蠣とキャビア、ホタルイカのパエリア、雲丹とキャビアの貝のだしのカッペリーニ、grouper、鱧と松茸、クミンの鮑グラタン、ザブトンと sirloin cap、2026年2月は韓国料理も、量が多いとの声 (2026年7月)。',
      confidence: 'medium', sources: [TB, R + 'B505914311/', R + 'B511861403/', R + 'B513123270/', R + 'B513680329/', R + 'B530268380/', R + 'B532280532/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; smart dress; 5% service charge; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清本町375-2 るもんどビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.005366, 135.774861); cross-checked: GSI 京都府京都市東山区清本町375番地 (lot) 2 m; nearest existing record 11.2 m (kyoto_gion_haba, 374-9); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Only the service charge is priced (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Omakase (Spanish-style dishes and sushi)', '', 'Courses', 'ask', 'no', '2024–2026 reviews.', 'omakase'),
      it('', '', 'Service charge', '5%', 'Charge', 'ask', 'no', 'Tabelog.', 'service'),
    ] }, {
    cuisine: 'スペイン風の料理から赤酢のシャリの寿司へと続く、カウンター7席のおまかせ (食べログ、2024〜2026年の口コミ)・料理は来るたびに変わる: 牡蠣とキャビア、ホタルイカのパエリア、雲丹とキャビアの貝のだしのカッペリーニ、grouper とごぼうチップ、鱧と松茸、クミンの鮑グラタン、炭塩のザブトンと sirloin cap、2026年のコースには韓国料理も (2025〜2026年の口コミ)・ワイン、日本酒、カクテル (食べログ、2026年7月)・15,000〜30,000円ほど (食べログ)',
    neighborhood: '祇園、清本町、2階',
    gf_detail: '要確認。スペイン風の料理と寿司のおまかせで、カッペリーニやグラタン、醤油も。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介、肉、寿司のおまかせ (2024〜2026年の口コミ)。',
    notes: '[スペイン料理と寿司のおまかせ・祇園清本町、7席] スペイン、イタリア、中華の経験をもつ元寿司職人が、鮑のグラタン、ホタルイカのパエリア、雲丹とキャビアのカッペリーニなど創意ある料理を次々と出し、赤酢の寿司で締める小さなカウンター。完全予約制、きちんとした服装で、サービス料5%。量は多め。',
  });
}

// ================================================================ 居酒屋 マウム izakaya maumu
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041945/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.izakaya-maumu.com/home';
  const H = day(['12:00', '23:00']);
  put({
    id: 'kyoto_izakaya_maumu', name: '居酒屋 マウム (izakaya maumu)', category: 'OMNI',
    lat: 35.00431533787487, lng: 135.7752080803447, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: ham katsu, gyoza, steak sandwich and soy-seasoned plates (2024–2026 reviews).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Tabelog lists vegan and vegetarian options and allergy information; a February 2025 guest found choices for a vegetarian friend. Ask about dashi in each dish.',
    hours_raw: 'Tuesday–Sunday and holidays 12:00–23:00, all day; closed Monday (Tabelog; official site). No reservations (Tabelog). No cover charge (Tabelog original チャージ料なし). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), e-money and QR (Tabelog). 28 seats: a ground-floor counter with sitting and standing places, and a second floor; private hire up to 20 (Tabelog; November 2024). Heated tobacco only, at the counter (Tabelog); a sign allows e-cigarettes only when no other guests object (April 2026). English, Chinese and Korean menus; English-speaking staff; wheelchair accessible; children and strollers welcome; take-away and delivery (Tabelog). Near Hanamikoji, 3 min walk from Yasaka Shrine (Tabelog). Opened 1 October 2024 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Tominaga-cho, off Hanamikoji',
    cuisine: 'Creative izakaya of Kyoto vegetables and seasonal fish, cooked by a chef trained in Japanese, French and Spanish cuisine, open from noon (Tabelog; official site) · charcoal-grilled rice balls with wagyu and butter, sardine wrapped in nori with herbs, izakaya potato salad with a soft egg, wagyu carpaccio, wagyu steak, steak sandwich, Gorgonzola ham katsu, Kyoto jidori with white negi, gyoza, hand-rolled sushi (2024–2026 reviews) · Japanese sake, wine, craft beer, Kyoto beer (Tabelog; February 2025) · dishes about ¥1,200–1,500; about ¥3,000–8,000 a head (April 2026; Tabelog)',
    website: WEB, gmaps: gm('居酒屋 マウム 祇園'), menu_url: null,
    notes: '[Creative izakaya · Gion Tominaga-cho, from noon] A cheerful Gion izakaya, open all day, from the team behind Yakiniku Maumu: charcoal-grilled wagyu rice balls, a potato salad finished with a soft egg, wagyu carpaccio and Gorgonzola ham katsu, with sake and craft beer. Over fifty rubber ducks keep watch. English menus and staff; vegetarian options. No bookings.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog: a casual Gion izakaya opened 1 October 2024 serving small plates of seasonal ingredients and Kyoto vegetables, by a chef with skills from Japanese, French and Spanish cuisine, among a collection of rubber ducks from around the world. An October 2024 reviewer describes it as part of a series with Yakiniku Maumu and BISTRO MAUMU.',
      philosophy: 'Genre-crossing small plates with Kyoto vegetables and sake from around Japan (Tabelog).', specialty: 'Charcoal-grilled wagyu rice ball.',
      anecdotes: [
        { text: 'An October 2024 opening-month visitor counted over fifty rubber ducks around the room and watched the staff cut a soft egg into the potato salad.', source: R + 'B493427983/' },
        { text: 'A February 2025 guest brought friends from overseas and found the menu and staff at ease in English, with choices for a vegetarian friend.', source: R + 'B500808883/' },
        { text: 'An April 2026 solo diner, handed an English menu at a counter full of international guests, was quickly given a Japanese one instead.', source: R + 'B525499587/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・創作料理、東山区富永町121、祇園四条駅から徒歩5分、八坂神社から徒歩3分、火〜日・祝 12:00〜23:00、月曜休み、予約不可、チャージ料なし、カード (VISA・Master・JCB・AMEX・Diners・銀聯)・電子マネー・QR 可、28席、20名まで貸切可、加熱式たばこのみカウンター席で可、英語・中国語・韓国語メニュー、英語を話すスタッフ、車椅子可、子ども可、テイクアウト・デリバリー、ヴィーガン・ベジタリアン対応、アレルギー表示あり、2024年10月1日開店、和食・フレンチ・スペイン料理の技術をもつシェフ、京野菜と旬の食材の小皿、世界のラバーダックのコレクション。公式サイト: 祇園・花見小路の創作和食ダイニング、12:00〜23:00 通し営業。口コミ (2024年10月〜2026年4月、英語): 焼肉マウム、BISTRO MAUMU と同じシリーズ、50羽以上のアヒル、和牛とバターの炭火焼きおにぎり、いわしの海苔巻き、半熟卵のポテトサラダ、和牛カルパッチョ、ゴルゴンゾーラのハムカツ、京地鶏、餃子、手巻き寿司、1品1,200〜1,500円ほどで高め (2026年4月)、電子たばこは他の客がいれば不可との掲示 (2026年4月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B493427983/', R + 'B494997801/', R + 'B496451847/', R + 'B500016871/', R + 'B500808883/', R + 'B510613470/', R + 'B525499587/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus; English-speaking staff; no bookings; cards, IC and QR.' },
    safety: { ...SAFETY0, positives: [{ text: 'Tabelog lists allergy information as available, with vegan and vegetarian options.', source: TB, verified: false }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区富永町121',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through April 2026.' },
    pin_source: `Tabelog ${TB} (35.004315, 135.775208); cross-checked: GSI 京都府京都市東山区富永町121番地 (lot) 6 m; nearest existing record 11.2 m (kyoto_maimaian_gion); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B493427983/', R + 'B525499587/'],
    price_note: 'No item prices in the sources; dishes about ¥1,200–1,500 (April 2026).', last_checked: TODAY, items: [
      it('', '', 'Charcoal-grilled rice ball with wagyu and butter', '', 'Small plates', 'ask', 'no', 'October 2024.', 'yaki_onigiri'),
      it('', '', 'Gorgonzola ham katsu', '', 'Small plates', 'no', 'no', 'April 2026.', 'hamkatsu'),
      it('', '', 'Wagyu carpaccio', '', 'Small plates', 'ask', 'no', 'February 2025; April 2026.', 'carpaccio'),
    ] }, {
    cuisine: '和食・フレンチ・スペイン料理の技術をもつシェフによる京野菜と旬の魚の創作居酒屋、昼から営業 (食べログ、公式サイト)・和牛とバターの炭火焼きおにぎり、いわしとハーブの海苔巻き、半熟卵の居酒屋ポテトサラダ、和牛カルパッチョ、和牛ステーキ、ステーキサンド、ゴルゴンゾーラのハムカツ、京地鶏と白髪ねぎ、餃子、手巻き寿司 (2024〜2026年の口コミ)・日本酒、ワイン、クラフトビール、京都のビール (食べログ、2025年2月)・1品1,200〜1,500円ほど、1人3,000〜8,000円ほど (2026年4月、食べログ)',
    neighborhood: '祇園富永町、花見小路のそば',
    gf_detail: 'グルテンフリー不可。ハムカツ、餃子、ステーキサンド、醤油味の小皿 (2024〜2026年の口コミ)。',
    vegan_detail: '食べログにヴィーガン・ベジタリアン対応とアレルギー表示あり。2025年2月の客はベジタリアンの友人向けの料理を見つけた。料理ごとにだしの使用を確認を。',
    notes: '[創作居酒屋・祇園富永町、昼から] 焼肉マウムの系列の、昼から通しで開く明るい祇園の居酒屋。和牛の炭火焼きおにぎり、半熟卵を崩すポテトサラダ、和牛カルパッチョ、ゴルゴンゾーラのハムカツに日本酒やクラフトビール。50羽以上のラバーダックが見守る。英語メニューと英語を話すスタッフ、ベジタリアン対応あり。予約不可。',
  });
}

// ================================================================ エスプレッソ珈琲 吉田屋 Espresso Coffee Yoshidaya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001169/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_espresso_yoshidaya', name: 'エスプレッソ珈琲 吉田屋 (Espresso Coffee Yoshidaya)', category: 'OMNI',
    lat: 35.008457377597686, lng: 135.77094127351333, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF for food: cakes such as rum raisin (2025–2026 reviews). Coffee only.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Espresso, blend and black iced coffee are plant-based; cappuccino and the cakes contain dairy (2024–2026 reviews).',
    hours_raw: 'Monday and Wednesday–Sunday 11:00–22:00; closed Tuesday (Tabelog). No reservations (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 13 seats, all at an L-shaped counter (Tabelog; September 2024). Smoking allowed at all seats (Tabelog; 2024–2026 reviews). Run single-handed by an older woman (April 2025 reviews). On the first lane east off Kiyamachi south of Sanjo, by the Kamo River; 3 min walk from Keihan Sanjo Stn (Tabelog; April 2025).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kiyamachi-Sanjo, by the Kamo River',
    cuisine: 'Old-style kissa built around espresso machines (2023–2026 reviews) · blend ¥600, double espresso ¥1,200, espresso-based iced coffee ¥730, sweetened to taste; cappuccino all afternoon; single-origin Toraja (2023–2026 reviews) · a few cakes, including a rum raisin mousse cake (2024–2025 reviews) · under about ¥1,000 (Tabelog)',
    website: null, gmaps: gm('エスプレッソ珈琲 吉田屋 三条'), menu_url: null,
    notes: '[Espresso kissa · Kiyamachi-Sanjo, cash only, smoking] A long-standing counter café whose "coffee" sign shows across the Kamo: strong espresso, a famous iced coffee sweetened to your taste, and cake, served by the woman who runs it alone. Walls signed by kabuki actors from the nearby Minamiza. Smoking at every seat. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (older woman, unnamed)'], origin: null,
      background: 'Per reviewers: a long-established espresso coffee shop with a 13-seat counter near Sanjo Ohashi, run single-handed by an older woman (April 2025), its walls signed by visitors including kabuki actors from the Minamiza (April 2025). An October 2023 reviewer calls it a classic coffee shop that welcomes visitors and locals alike.',
      philosophy: null, specialty: 'Espresso-based iced coffee.',
      anecdotes: [
        { text: 'A September 2024 first-timer, hesitating over how sweet to take the famous iced coffee, was kindly asked "Shall I put in a little?"; a regular with a pipe sat by the door.', source: R + 'B493252235/' },
        { text: 'An April 2025 visitor noted the many autographs on the walls, including those of kabuki actors, and had a blend for ¥600 within two minutes.', source: R + 'B504282237/' },
        { text: 'A June 2025 regular enjoys an afternoon cappuccino with the Italian machine in the sunlight, and spots the "coffee" sign from across the river.', source: R + 'B507069158/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶店・カフェ、中京区木屋町三条下ル一筋目東入ル (番地の表示なし)、三条駅から145m、月・水〜日 11:00〜22:00、火曜休み、予約不可、カード・電子マネー・QR 不可、カウンター13席、全席喫煙可。口コミ (2023年10月〜2026年8月、英語): 鴨川のそばの老舗のエスプレッソの店、L字のカウンター、年配の女性が一人で営む (2025年4月)、南座が近く歌舞伎役者のサインが壁に (2025年4月)、天井に団扇、名物のアイスコーヒー (甘さを聞かれる)、ブレンド600円、ダブルエスプレッソ1,200円、アイスコーヒー730円、カプチーノ、トラジャ、ラムレーズンのケーキ、常連が多い、全席喫煙可。',
      confidence: 'medium', sources: [TB, R + 'B473848378/', R + 'B486418416/', R + 'B493252235/', R + 'B504282237/', R + 'B505476966/', R + 'B507069158/', R + 'B520372073/', R + 'B533160446/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; smoking at all seats; regulars; quick, kind service.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町三条下ル一筋目東入ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.008457, 135.770941); address has no lot number (GSI matches only a different town); nearest existing record 16.6 m (kyoto_shukura_pontocho); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504282237/', R + 'B473848378/', R + 'B533160446/'],
    price_note: 'Prices from October 2023 to August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Blend coffee', '¥600', 'Coffee', 'gf', 'vegan', 'April 2025.', 'blend'),
      it('', '', 'Iced coffee (espresso-based)', '¥730', 'Coffee', 'gf', 'ask', 'August 2026; sweetened to taste.', 'iced'),
      it('', '', 'Double espresso', '¥1,200', 'Coffee', 'gf', 'vegan', 'October 2023.', 'double'),
    ] }, {
    cuisine: 'エスプレッソマシンを中心にした昔ながらの喫茶 (2023〜2026年の口コミ)・ブレンド600円、ダブルエスプレッソ1,200円、甘さを選べるエスプレッソのアイスコーヒー730円、午後もカプチーノ、トラジャのシングル (2023〜2026年の口コミ)・ラムレーズンのムースケーキなど数種類のケーキ (2024〜2025年の口コミ)・1,000円未満ほど (食べログ)',
    neighborhood: '木屋町三条、鴨川のそば',
    gf_detail: '食べ物はグルテンフリー不可。ラムレーズンなどのケーキ (2025〜2026年の口コミ)。コーヒーのみ。',
    vegan_detail: '要確認。エスプレッソ、ブレンド、ブラックのアイスコーヒーは植物性。カプチーノとケーキには乳製品 (2024〜2026年の口コミ)。',
    notes: '[エスプレッソの喫茶・木屋町三条、現金のみ、喫煙可] 鴨川の向こうから「coffee」の看板が見える老舗のカウンター喫茶。濃いエスプレッソ、好みの甘さに仕上げる名物のアイスコーヒー、ケーキを、一人で店を切り盛りする女性が出す。近くの南座の歌舞伎役者のサインが壁に。全席喫煙可。火曜休み。',
  });
}

save();
