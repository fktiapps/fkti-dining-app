// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 44.
//   + DOLCH (French home-style bistro near the Imperial Palace, chef formerly cook at the embassy in Romania)  [core]
//   + La leche (paella, tapas, Spanish wine and specialty coffee all day, near Gojo)                           [core]
//   + 原了郭 京都駅 八条口店 Hara Ryokaku (the black-shichimi house's only eatery: udon and curry at Kyoto Stn)  [notable]
//   + 永楽屋 本店 Eirakuya Honten (sweets shop with a 2F café — kakigori and parfaits — on Kawaramachi-Shijo)   [notable]
//   - ベジョータ ムチョ 室町店 — chain (integrator ruling 2026-11-06: Retty documents a five-shop ベジョータ group).
//   Same-name counts first (same brand or operator): DOLCH 1; La leche 1; 原了郭 — the official store list says
//   eating is only at this 八条口店 (本店 and Ryokaku are retail); 永楽屋 — 本店, 室町店 and a factory shop, plus
//   counters in 大丸 and 高島屋 (official site); only the 本店 has a café; none in data, drafted — FLAGGED.
//   Taken in queue order on 2026-11-06: core 26003975, 26044241; notable (26018387 skip), 26026055, 26001491. None
//   drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: 永楽屋 「サービス料：なし，チャージ料：なし」;
//   the others have no section.
//   Pins: 原了郭 matches only the town and 永楽屋 (no lot number) only the ward, so both loc_precise false.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-44');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26018387', 'chain: ベジョータ is a five-shop group across Kyoto and Osaka documented on Retty (integrator ruling 2026-11-06; ベジョータコンチャ skipped by osw2 for the same reason)');

// ================================================================ DOLCH
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26003975/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '21:30']);
  put({
    id: 'kyoto_dolch_marutamachi', name: 'DOLCH', category: 'OMNI',
    lat: 35.017000, lng: 135.766724, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses with fresh pasta, focaccia and bread beside meat and fish mains (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: house ham, pâté, fish and meat mains (2025–26 reviews).',
    hours_raw: 'Wed–Sun and holidays 11:30–15:00 (last orders food 14:00, drinks 14:30) and 18:00–21:30 (last orders food 19:30, drinks 20:00); closed Monday and Tuesday; dinner by reservation only since 2024 (Tabelog). Lunch often fully booked — book ahead (2025–26 reviews). Cards and e-money (Tabelog). 16 seats incl. a counter; non-smoking (Tabelog). Takeout, catering and private hire (Tabelog). South of Marutamachi, near the Imperial Palace; 3–4 min from the Kawaramachi-Marutamachi or Saibansho-mae bus stops, 8 min from Jingu-Marutamachi Stn (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of Marutamachi near the Imperial Palace',
    cuisine: 'French home-style cooking drawing on many countries (Tabelog): lunch courses from ¥1,870 (July 2024) — Course A ¥2,750 with appetizers, main, dessert and coffee (March, July 2026) — assorted appetizers of house ham, pâté and salmon with beet salad, fresh pasta bolognese with shiitake, Japanese pork stew, red-wine braised veal tongue, sea bass with marigold, lamb; rosemary focaccia; coffee pudding and gelato; fruit-syrup sodas; Christmas take-away dinners (2025–26 reviews)',
    website: null, gmaps: gm('DOLCH 京都 丸太町'), menu_url: TB + 'dtlmenu/',
    notes: "[French bistro · near the Imperial Palace] A cosy hidden bistro whose chef once cooked at Japan's embassy in Romania: generous lunch courses from about ¥1,900–2,750 with house ham, pâtés, fresh pasta and braises, and dinner by reservation. Book lunch ahead; closed Monday and Tuesday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), former cook at the Japanese Embassy in Romania (Tabelog)'], origin: null,
      background: 'Per Tabelog: a French restaurant near the Imperial Palace whose chef formerly cooked at the Japanese Embassy in Romania, blending many countries into home-style French cooking.',
      philosophy: 'Special but unpretentious French dining (Tabelog).',
      specialty: 'Lunch courses; house ham and pâté.',
      anecdotes: [
        { text: 'Phoning from the Hankyu train in March 2025, a visitor got a lunch table that had just opened up.', source: R + 'B504052495/' },
        { text: 'For an aunt\'s birthday in April 2026, the kitchen wrote "Happy Birthday" on the dessert.', source: R + 'B526385002/' },
        { text: 'For Christmas 2025 DOLCH offered take-away dinners with two pickup times.', source: R + 'B115191611/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): DOLCH、ビストロ・フレンチ・イタリアン、中京区御幸町通丸太町下ル毘沙門町553、市バス河原町丸太町・裁判所前から徒歩3〜4分、神宮丸太町駅から徒歩8分、水〜日・祝 11:30〜15:00・18:00〜21:30、月火休み、2024年からディナーは予約制、カード・電子マネー可、16席 (カウンター含む)、禁煙、テイクアウト・ケータリング・貸切、元在ルーマニア日本大使館の料理人のシェフ。口コミ (2024年7月〜2026年7月、英語): ランチ1,870円から、A コース2,750円、自家製ハムやパテやサーモンの前菜盛り合わせ、生パスタのボロネーゼ、豚の煮込み、仔牛タンの赤ワイン煮、すずき、仔羊、ローズマリーのフォカッチャ、コーヒープリン、ジェラート、果実シロップのジュース、クリスマスのテイクアウト、予約で満席。',
      confidence: 'medium', sources: [TB, R + 'B115191611/', R + 'B504052495/', R + 'B510527738/', R + 'B524174676/', R + 'B526385002/', R + 'B528206360/', R + 'B529038493/', R + 'B529619043/', R + 'B531540334/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; dinner by reservation only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通丸太町下ル毘沙門町553',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.017000, 135.766724); cross-checked: GSI 京都府京都市中京区毘沙門町553番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531540334/', R + 'B524174676/'],
    price_note: 'No menu read; prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch Course A (appetizers, main, dessert, coffee)', '¥2,750', 'Lunch', 'ask', 'no', 'March and July 2026 reviews.', 'lunch_a'),
    ] }, {
    cuisine: '各国の要素を取り入れたフランスの家庭料理 (食べログ): ランチコースは1,870円から (2024年7月)、前菜・メイン・デザート・コーヒーの A コース2,750円 (2026年3月、7月)。自家製ハム、パテ、サーモンとビーツのサラダの前菜盛り合わせ、椎茸入りの生パスタのボロネーゼ、豚の煮込み、仔牛タンの赤ワイン煮、マリーゴールドのすずき、仔羊。ローズマリーのフォカッチャ、コーヒープリンとジェラート、果実シロップのジュース、クリスマスのテイクアウト (2025〜26年の口コミ)',
    neighborhood: '御所近く、丸太町の南',
    gf_detail: '要確認。生パスタ、フォカッチャ、パンと、肉や魚のメインのコース (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。自家製ハム、パテ、魚や肉のメイン (2025〜26年の口コミ)。',
    notes: '[フレンチビストロ・御所近く] 元在ルーマニア日本大使館の料理人がシェフの、居心地のよい隠れ家ビストロ。自家製ハム、パテ、生パスタ、煮込みの量のあるランチコースは1,900〜2,750円ほど、夜は予約制。ランチも予約を。月火休み。',
  });
}

// ================================================================ La leche
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044241/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_la_leche_gojo', name: 'La leche', category: 'OMNI',
    lat: 34.995771, lng: 135.753668, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice paellas beside a pasta paella, fritters, French toast and cheesecake (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood paellas, jamón, lamb and beef (2026 reviews).',
    hours_raw: '11:00–22:00 (last orders food 21:00, drinks 21:30), continuous; closed Monday (Tabelog). Bookings taken (Tabelog). Cards, IC cards, PayPay, Alipay, WeChat Pay (Tabelog). 20 seats: tables, a counter and benches, with high stools and low single seats; free Wi-Fi; wheelchair accessible; non-smoking (Tabelog; May 2026 review). South of Gojo; 7 min from Gojo Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of Gojo — 7 min from Gojo Stn',
    cuisine: 'Paella, seasonal tapas and Spanish wine, with specialty coffee all day (Tabelog): small paellas for one — lunch sets with a choice of three, +¥300 for large (July 2026) — seafood, squid ink, squid and bamboo shoot, pasta paella; Spanish omelette, assorted appetizers, mackerel, jamón, fritters, lamb, beef outside skirt; dinner courses built around paella; Spanish-style French toast, Basque cheesecake, café latte (2026 reviews)',
    website: null, gmaps: gm('La leche 京都 五条'), menu_url: TB + 'dtlmenu/',
    notes: "[Paella & coffee · near Gojo] A stylish all-day Spanish café-bar south of Gojo: single-portion paellas (seafood, squid ink), tapas and sommelier-chosen Spanish wines, then Basque cheesecake or French toast with specialty coffee. Lunch about ¥1,500–2,500; dinner ¥4,000–5,000. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), a certified sommelier (Tabelog)'], origin: null,
      background: 'Per Tabelog: the owner, a certified sommelier, chooses the Spanish wines; the shop also serves specialty coffee.',
      philosophy: 'Authentic paella at fair prices, sized for solo diners (Tabelog).',
      specialty: 'Paella.',
      anecdotes: [
        { text: 'A September 2026 regular on an eighth visit recommended the Spanish-style French toast and takes coffee home after each meal.', source: R + 'B519506555/' },
        { text: 'A solo diner in May 2026 loved the food but found the backless high stools and low single seats uncomfortable.', source: R + 'B528496555/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): La leche、スペイン料理、下京区油小路通五条下ル中金仏町213-5 1F、五条駅から徒歩7分、11:00〜22:00 (L.O. 21:00)、月曜休み、予約可、カード・電子マネー・QR 可、20席 (テーブル、カウンター、ベンチ)、Wi-Fi、車椅子可、禁煙、ソムリエの店主が選ぶスペインワイン、スペシャルティコーヒー、一人用の小さなパエリア、季節のタパス、パエリアのコース。口コミ (2026年3〜9月、英語): ランチは3種から選ぶパエリアのセット (大盛り +300円)、魚介、イカスミ、イカと筍、パスタのパエリア、スペインオムレツ、前菜盛り合わせ、鯖、生ハム、フリット、仔羊、ハラミ、スペイン風フレンチトースト、バスクチーズケーキ、カフェラテ、椅子が座りにくいという声。',
      confidence: 'medium', sources: [TB, R + 'B519506555/', R + 'B522170812/', R + 'B528496555/', R + 'B530239002/', R + 'B530706137/', R + 'B531788798/', R + 'B532690437/', R + 'B533720451/', R + 'B536693108/', R + 'B538453993/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Continuous hours; Wi-Fi.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区油小路通五条下ル中金仏町213-5 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.995771, 135.753668); cross-checked: GSI 京都府京都市下京区中金仏町213番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531788798/'],
    price_note: 'No menu read; no item prices beyond the +¥300 large-size upgrade (July 2026).', last_checked: TODAY, items: [
      it('', '', 'Lunch paella set (choice of three; large +¥300)', '', 'Lunch', 'ask', 'no', 'July 2026 review.', 'paella_lunch'),
      it('', '', 'Squid-ink paella', '', 'Paella', 'ask', 'no', '2026 reviews.', 'paella_negra'),
    ] }, {
    cuisine: 'パエリア、季節のタパス、スペインワインと終日のスペシャルティコーヒー (食べログ): 一人用の小さなパエリア (ランチは3種から選ぶセットで大盛り +300円、2026年7月)、魚介、イカスミ、イカと筍、パスタのパエリア。スペインオムレツ、前菜盛り合わせ、鯖、生ハム、フリット、仔羊、ハラミ、パエリアが主役の夜のコース。スペイン風フレンチトースト、バスクチーズケーキ、カフェラテ (2026年の口コミ)',
    neighborhood: '五条の南。五条駅から徒歩7分',
    gf_detail: '要確認。米のパエリアと、パスタのパエリア、フリット、フレンチトースト、チーズケーキ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介のパエリア、生ハム、仔羊、牛肉 (2026年の口コミ)。',
    notes: '[パエリアとコーヒー・五条近く] 五条の南の、通し営業のおしゃれなスペインのカフェバル。一人用のパエリア (魚介、イカスミ)、タパス、ソムリエの選ぶスペインワイン、締めにバスクチーズケーキやフレンチトーストとスペシャルティコーヒー。昼は1,500〜2,500円、夜は4千〜5千円ほど。月曜休み。',
  });
}

// ================================================================ 原了郭 京都駅 八条口店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26026055/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.hararyoukaku.co.jp/';
  const H = day(['11:00', '21:00']);
  put({
    id: 'kyoto_hararyokaku_hachijo', name: '原了郭 京都駅 八条口店 (Hara Ryokaku Kyoto Station Hachijo-guchi)', category: 'OMNI',
    lat: 34.984716, lng: 135.759550, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon and ramen noodles, curry, tempura (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broths, beef sukiyaki udon, hamo tempura (2026 reviews).',
    hours_raw: '11:00–21:00 (last order 20:30), daily, following Asty Road Kyoto\'s closures (Tabelog; official site). No bookings (Tabelog). Cards, e-money and QR (Tabelog). 24 seats, mostly counter; non-smoking (Tabelog; September 2026 review). Black shichimi and other products on sale. In the おもてなし小路 dining area on the 1F of the JR Central Shinkansen side of Kyoto Station, Hachijo exit — outside the ticket gates (official site; Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station, Hachijo exit (Shinkansen side)',
    cuisine: 'Udon, curry and ramen seasoned with the house\'s own spices — black shichimi and sansho on every table (Tabelog; 2026 reviews): curry udon with spices, beef sukiyaki udon, warm or chilled hamo tempura udon, chilled hiyashi udon with bonito, daikon and ume ¥1,595 (September 2026), Japanese-style tantanmen with yuzu pepper, "Gion Black" soy ramen with black pepper; beer ¥770 (2026 reviews)',
    website: SITE, gmaps: gm('原了郭 京都駅 八条口店'), menu_url: null,
    notes: "[Udon & curry · Kyoto Station Hachijo exit] The only place to eat at Hara Ryokaku, the Gion spice house famed for black shichimi: curry udon, sukiyaki udon and hamo tempura udon, with the house shichimi and sansho on every counter. About ¥1,200–1,800; handy before the Shinkansen. Open daily.",
    chef_bio: { chef_name: null, roles: ['Restaurant of 株式会社原了郭 (no person named)'], origin: null,
      background: 'Opened 8 August 2015 (Tabelog). Per the official site: the eat-in corner at the Gion 本店 closed on 29 February 2016, and this is now the house\'s only place to eat. An August 2026 reviewer calls Hara Ryokaku a long-established house founded in the Edo period.',
      philosophy: null, specialty: 'Curry udon with black shichimi.',
      anecdotes: [
        { text: 'An August 2026 diner found yuzu pepper surprisingly good on the tantanmen, but the "Gion Black" broth ordinary.', source: R + 'B533324103/' },
        { text: 'An October 2026 traveller found the sukiyaki udon "not beyond expectations, but not bad" for a pre-Shinkansen bowl.', source: R + 'B537398586/' },
      ],
      japanese_sources_summary: '公式サイト: 株式会社原了郭 (東山区祇園町北側267)、黒七味・香煎・粉山椒、店舗一覧: 本店 (2016年2月29日で奥の飲食コーナー終了)、Ryokaku (大和大路通新門前下ル)、京都駅 八条口店 (おもてなし小路内のお食事処、JR東海新幹線京都駅1F、11:00〜21:00 L.O. 20:30、年中無休、飲食はこの店のみ、改札外)。食べログ: 原了郭 京都駅 八条口店、うどん・カレー・ラーメン、下京区東塩小路高倉町8-3、不定休 (アスティロード京都に準ずる)、予約不可、カード・電子マネー・QR 可、24席、禁煙、2015年8月8日オープン。口コミ (2026年8〜10月、英語): 卓上の黒七味と山椒、カレーうどん、牛すき焼きうどん、鱧天のうどん、冷やしうどん1,595円、和風担々麺、祇園ブラック、ビール770円、江戸時代創業の老舗という声。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'tenpoichiran', R + 'B533324103/', R + 'B533619320/', R + 'B533640737/', R + 'B534073707/', R + 'B534398341/', R + 'B536176461/', R + 'B536188911/', R + 'B536545910/', R + 'B537398586/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Station counter restaurant; quick service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区東塩小路高倉町8-3 JR東海新幹線京都駅 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official store list and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.984716, 135.759550); GSI matched only the town (京都府京都市下京区東塩小路高倉町), so loc_precise false; 13.6 m from kyoto_kyo_dining_hachijo; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536188911/'],
    price_note: 'No menu read; one price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chilled hiyashi udon (bonito, daikon, ume)', '¥1,595', 'Udon', 'no', 'no', 'September 2026 review.', 'hiyashi_udon'),
      it('', '', 'Curry udon with spices', '', 'Udon', 'no', 'no', 'August 2026 review.', 'curry_udon'),
    ] }, {
    cuisine: '自家の香辛料で味わううどん、カレー、ラーメン。卓上に黒七味と山椒 (食べログ、2026年の口コミ): スパイスのカレーうどん、牛すき焼きうどん、温かいまたは冷たい鱧天うどん、かつお節・大根おろし・梅の冷やしうどん1,595円 (2026年9月)、柚子胡椒の和風担々麺、黒胡椒の醤油ラーメン「祇園ブラック」、ビール770円 (2026年の口コミ)',
    neighborhood: '京都駅八条口 (新幹線側)',
    gf_detail: 'グルテンフリー不可。小麦のうどんやラーメン、カレー、天ぷら (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のつゆ、牛すき焼きうどん、鱧天 (2026年の口コミ)。',
    notes: '[うどんとカレー・京都駅八条口] 黒七味で知られる祇園の原了郭の、唯一の食事処。カレーうどん、すき焼きうどん、鱧天うどんに、卓上の自家の黒七味と山椒。1,200〜1,800円ほど。新幹線の前に。無休。',
  });
}

// ================================================================ 永楽屋 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001491/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.eirakuya.co.jp/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_eirakuya_honten', name: '永楽屋 本店 (Eirakuya Honten)', category: 'OMNI',
    lat: 35.004168, lng: 135.769538, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kakigori, parfaits, shiratama and warabi mochi; chofu and dorayaki contain wheat (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Red-bean and matcha sweets alongside cream-cheese, yogurt and gelato toppings (2026 reviews).',
    hours_raw: '1F shop 10:00–19:00; 2F café 11:00–19:00 (last order 18:30); occasional Wednesday closures — check the website (Tabelog). No bookings (Tabelog). Service charge: none — Tabelog\'s Japanese original says 「サービス料：なし，チャージ料：なし」. Cards, IC cards and au PAY (Tabelog). Children and strollers welcome (Tabelog). The air conditioning runs cold — bring a layer (August 2026 review). On the east side of Kawaramachi just north of Shijo; 2 min from Kyoto-Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi just north of Shijo — 2 min from Kyoto-Kawaramachi Stn',
    cuisine: 'A Kyoto confectioner\'s café upstairs from its shop (Tabelog): kakigori — summer "Lemon Shizuku" with yogurt and cream-cheese sauces ¥1,600 (August 2026), hojicha-kinako, Uji kintoki with shiratama; the "Raku Matcha" parfait with gyokuro ice cream, the Eiraku parfait, hojicha parfait; warabi mochi made to order; chofu with matcha; same-day dorayaki ("Mikasa"); sweets to take home (2026 reviews)',
    website: SITE, gmaps: gm('永楽屋 本店 河原町'), menu_url: TB + 'dtlmenu/',
    notes: "[Sweets café · Kawaramachi-Shijo] The 2F café of a Kyoto confectioner right on Kawaramachi: lemon-and-cream-cheese or hojicha-kinako kakigori in summer, matcha parfaits with gyokuro ice cream, warabi mochi made to order; shop for sweets downstairs. About ¥1,000–2,000; no service or cover charge.",
    chef_bio: { chef_name: null, roles: ['Confectioners of 永楽屋 (no person named)'], origin: null,
      background: 'Per the official site: the 本店 on Kawaramachi-Shijo, with a 室町店, a factory shop and counters in Daimaru and Takashimaya Kyoto; the 本店 sells sweets and tsukudani and has the café.',
      philosophy: 'Seasonal sweets from carefully chosen ingredients (Tabelog).',
      specialty: 'Kakigori; matcha parfait.',
      anecdotes: [
        { text: 'An August 2026 regular came back for the Lemon Shizuku kakigori, which had sold out by evening on another visit.', source: R + 'B534034653/' },
        { text: 'A September 2026 visitor found a single chofu filling and the matcha on the light side.', source: R + 'B535817238/' },
        { text: 'An October 2026 diner felt the hojicha parfait could use a little less red bean paste.', source: R + 'B538617632/' },
      ],
      japanese_sources_summary: '公式サイト: 永楽屋、河原町四条の本店、室町店、山科の工場直売の本社売店、大丸京都店・高島屋京都店。食べログ (店舗会員): 永楽屋 本店、カフェ・和菓子、中京区河原町通四条上る東側、京都河原町駅から徒歩2分、1階物販 10:00〜19:00、2階カフェ 11:00〜19:00 (L.O. 18:30)、不定期の水曜休み、予約不可、サービス料なし・チャージ料なし、カード・電子マネー・au PAY 可、子供・ベビーカー可、レモンしずく氷、楽抹茶パフェ (玉露アイス、宇治抹茶ゼリー)、注文後に作るわらび餅。口コミ (2026年6〜10月、英語): レモンしずく氷1,600円、ほうじ茶きなこ氷、宇治金時、白玉、永楽パフェ、ほうじ茶パフェ、調布と抹茶、当日限りのどら焼き (三笠)、冷房が強い。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'store/', R + 'B427092415/', R + 'B530655361/', R + 'B534034653/', R + 'B534069555/', R + 'B534421310/', R + 'B535817238/', R + 'B536140703/', R + 'B536262080/', R + 'B536401107/', R + 'B538617632/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Café upstairs; menus with photos.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区河原町通四条上る東側',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004168, 135.769538); the address has no lot number and GSI matched only the ward, so loc_precise false; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530655361/'],
    price_note: 'No menu read; one price from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lemon Shizuku kakigori (summer)', '¥1,600', 'Kakigori', 'ask', 'no', 'August 2026 review.', 'lemon_shizuku'),
      it('', '', 'Raku Matcha parfait', '', 'Parfaits', 'ask', 'no', 'Tabelog.', 'raku_matcha_parfait'),
    ] }, {
    cuisine: '京菓子屋の店の上のカフェ (食べログ): かき氷 (夏のヨーグルトとクリームチーズのソースの「レモンしずく氷」1,600円、2026年8月、ほうじ茶きなこ、白玉の宇治金時)、玉露アイスの「楽抹茶パフェ」、永楽パフェ、ほうじ茶パフェ、注文後に作るわらび餅、調布と抹茶、当日限りのどら焼き「三笠」、持ち帰りの菓子 (2026年の口コミ)',
    neighborhood: '四条のすぐ北の河原町。京都河原町駅から徒歩2分',
    gf_detail: '要確認。かき氷、パフェ、白玉、わらび餅。調布やどら焼きは小麦を含む (2026年の口コミ)。',
    vegan_detail: '要確認。あんや抹茶の甘味のほか、クリームチーズ、ヨーグルト、ジェラートのトッピングも (2026年の口コミ)。',
    notes: '[甘味カフェ・河原町四条] 河原町に面した京菓子屋の2階のカフェ。夏はレモンとクリームチーズやほうじ茶きなこのかき氷、玉露アイスの抹茶パフェ、注文後に作るわらび餅。1階で菓子も。千〜2千円ほどで、サービス料・チャージなし。',
  });
}

save();
