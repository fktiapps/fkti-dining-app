// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 82.
//   + 金隆 Kinryu (Chinese set meals and noodles on Takatsuji near Karasuma, ¥980 lunches)
//   + ちょっとBar 悟つぼ+cafe Chotto Bar Gotsubo + cafe (shochu bar and café near Shijo-Karasuma; second shop of a Nara bar)
//   + BERRY BUTTON (Korean-style financier café, Kawaramachi-Gojo; moved from the Karasuma-Oike area)
//   + はるみ屋 Harumiya (homely Okinawan izakaya east of Sanjo bridge)
//   - 近江ちゃんぽん亭 三条花見小路店, 酒・肴 タナゴコロ, 進々堂 ラクエ四条烏丸店, グッデイベロ: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26032256, 26043956 (skipped),
//   26022968 (skipped), 26016962 (skipped), 26031080 (skipped), 26043542, 26043908, 26015492.
//   queue-status.jsonl grepped for each brand (金隆, ちゃんぽん亭, タナゴコロ, 進々堂, グッデイベロ, 悟つぼ, BERRY BUTTON, はるみ屋):
//   only 近江ちゃんぽん亭 has an earlier ruling (26029498).
//   Data check: none of the four drafted is in data/kyoto.json by name or address. 悟つぼ shares 四条烏丸スタービル with
//   LOCANDA SENESE (B1F); はるみ屋 shares 二町目50 with Bistro&Wine espace.
//   Same-name count (same brand or operator only): 悟つぼ — an August 2025 reviewer calls it the second shop of a bar in
//   Yamato-Yagi, Nara; drafted as a small group, flagged. 金隆, BERRY BUTTON, はるみ屋 — one shop each (BERRY BUTTON moved
//   here). Large-parent and big-chain-hotel lists checked.
//   Service charges, checked against Tabelog’s Japanese original: 悟つぼ サービス料、チャージ不要; none listed for the others.
//   Other-diner remarks (Greg 2026-11-06): a single October 2026 remark about other customers at BERRY BUTTON left out.
//   Halal: no operator in this batch claims halal.
//   JA text: 祝日 written in full; no bare 天 (天ぷら / 天丼 in full).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-82');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043956', '近江ちゃんぽん亭 三条花見小路店: chain — same ruling as 26029498 (Tabelog lists many 近江ちゃんぽん亭 shops)');
skip('26022968', '酒・肴 タナゴコロ: too thin to verify — one short March 2025 review and an August 2026 review with no text');
skip('26016962', '進々堂 ラクエ四条烏丸店: chain — Tabelog’s name search lists many 進々堂 bakery cafés (京大北門前, 三条河原町, 三条, 工場直売, 北山, JR京都駅前, 寺町 and more); chain rules come before the retail ruling');
skip('26031080', 'グッデイベロ: no reviews dated 2025–2026 (latest July 2023)');

// ================================================================ 金隆
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26032256/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_kinryu_takatsuji', name: '金隆 (Kinryu)', category: 'OMNI',
    lat: 35.000082, lng: 135.760444, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chinese set meals, noodles, dumplings and fried rice; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, beef, chicken and shrimp dishes with egg soup (2026 reviews).',
    hours_raw: '11:30–15:00 and 17:00–22:00; closed on irregular days (Tabelog). Lunch gets busy — arrive before noon (January 2026). Cards and QR; no e-money (Tabelog). Tables and tatami seating (January 2026). Non-smoking (Tabelog). On Takatsuji-dori in 高辻ビル, a few minutes from Karasuma and Shijo (Tabelog; January and May 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takatsuji west of Karasuma — a few minutes from Shijo',
    cuisine: 'Mainland-style Chinese cooking with generous portions (2026 reviews) · daily set meals ¥980 with rice, soup, pickles and a small side — black-vinegar sweet-and-sour pork, twice-cooked pork, nira and liver (January and April 2026) · green-pepper beef or pork set (May and August 2026) · Sichuan dan dan noodles, half fried rice (May 2026) · authentic Sichuan mapo tofu set ¥980 (August 2026) · shrimp fried rice (July 2026) · boiled dumplings (June 2026) · banquet dishes: spicy jellyfish, century-egg tofu, shrimp with mayonnaise and chili sauce (May 2026)',
    website: null, gmaps: gm('金隆 高辻'), menu_url: TB + 'dtlmenu/',
    notes: '[Chinese · Takatsuji near Karasuma, ¥980 sets] A no-frills Chinese restaurant on Takatsuji with tables and tatami, run by native-speaking staff: generous ¥980 lunch sets like black-vinegar sweet-and-sour pork or mapo tofu, Sichuan dan dan noodles, fried rice and dumplings, and banquet dishes at night.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe native Chinese-speaking staff with a cheerful welcome (August 2026) and simple, no-frills service (January and June 2026).',
      philosophy: null, specialty: 'Black-vinegar sweet-and-sour pork; ¥980 set meals.',
      anecdotes: [
        { text: 'A May 2026 regular, back after eleven months, notes there are few places nearby with sets or noodles under ¥1,000.', source: R + 'B464832430/' },
        { text: 'An August 2026 first customer of the lunch was greeted with a cheerful, slightly accented “Irasshaimase!” from the back.', source: R + 'B533546347/' },
      ],
      japanese_sources_summary: '食べログ: 金隆、中華料理・食堂、下京区因幡堂町654 高辻ビル 1F、四条から308m、11:30〜15:00、17:00〜22:00、不定休、カード・QR可、禁煙。口コミ (2026年、英語): ボリュームのある中国本場の味、日替わり定食980円 (ご飯、スープ、漬物、小鉢付き)、黒酢酢豚、回鍋肉、ニラレバ炒め、青椒肉絲、四川担々麺、半チャーハン、本格四川麻婆豆腐定食980円、海老チャーハン、水餃子、宴会の料理 (くらげの和え物、ピータン豆腐、海老マヨ、海老チリ)、テーブル席と座敷、中国語が母語のスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B464832430/', R + 'B497728580/', R + 'B521504006/', R + 'B521534575/', R + 'B521615867/', R + 'B527174633/', R + 'B528519322/', R + 'B530222587/', R + 'B531866876/', R + 'B533546347/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Simple, fast service; Chinese-speaking staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区因幡堂町654 高辻ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.000082, 135.760444); cross-checked: GSI 京都府京都市下京区因幡堂町654番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527174633/', R + 'B533546347/'],
    price_note: 'Set-meal prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daily set meal (e.g. black-vinegar sweet-and-sour pork)', '¥980', 'Set meals', 'ask', 'no', 'April 2026.', 'teishoku'),
      it('', '', 'Sichuan mapo tofu set meal', '¥980', 'Set meals', 'ask', 'no', 'August 2026.', 'mapo'),
      it('', '', 'Sichuan dan dan noodles', '', 'Noodles', 'no', 'no', 'May 2026.', 'tantan'),
      it('', '', 'Shrimp fried rice', '', 'Rice', 'ask', 'no', 'July 2026.', 'ebichahan'),
    ] }, {
    cuisine: 'ボリュームのある中国本場の味 (2026年の口コミ)・ご飯、スープ、漬物、小鉢付きの日替わり定食980円: 黒酢酢豚、回鍋肉、ニラレバ炒め (2026年1・4月)・青椒肉絲の定食 (2026年5・8月)・四川担々麺、半チャーハン (2026年5月)・本格四川麻婆豆腐定食980円 (2026年8月)・海老チャーハン (2026年7月)・水餃子 (2026年6月)・宴会料理: くらげの辛い和え物、ピータン豆腐、海老マヨ、海老チリ (2026年5月)',
    neighborhood: '烏丸の西の高辻。四条から数分',
    gf_detail: '要確認。中華の定食、麺、餃子、チャーハン。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。豚、牛、鶏、海老の料理と卵スープ (2026年の口コミ)。',
    notes: '[中華・烏丸高辻、980円の定食] テーブルと座敷のある高辻通の飾らない中華料理店。中国語が母語のスタッフが、黒酢酢豚や麻婆豆腐などボリュームのある980円の昼の定食、四川担々麺、チャーハン、餃子、夜は宴会料理も出す。',
  });
}

// ================================================================ ちょっとBar 悟つぼ+cafe
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043542/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'kyoto_chotto_bar_gotsubo', name: 'ちょっとBar 悟つぼ+cafe (Chotto Bar Gotsubo + cafe)', category: 'OMNI',
    lat: 35.005852, lng: 135.75981, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled Miyazaki chicken, cheese snacks, cakes and kakigori; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mostly drinks; kakigori and coffee are served, but nothing is said about dairy-free options (2025 reviews).',
    hours_raw: 'Monday, Wednesday–Sunday and holidays 16:00–23:00 (L.O. 22:30); closed Tuesday unless a holiday (Tabelog). No service charge or cover (Tabelog, original サービス料、チャージ不要). Cards, IC and QR incl. Alipay (Tabelog). 25 seats: 5 at the counter and 20 at tables (Tabelog). On the ground floor of 四条烏丸スタービル, 3 min from Shijo/Karasuma (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma north of Shijo — 3 min from Shijo/Karasuma',
    cuisine: 'A shochu bar with over 100 shochu from across Japan, plus whisky and sake (Tabelog; August 2025) · charcoal-grilled Miyazaki chicken; cheese and Camembert snacks (Tabelog) · a café menu of coffee, desserts and kakigori, e.g. Shirokuma milk kakigori ¥1,000 (August 2025) · shochu such as Queen Bee ¥640; ginger shochu with soda; tea-flavoured shochu with milk; chocolate cake (August 2025, March 2026)',
    website: null, gmaps: gm('ちょっとBar 悟つぼ 四条烏丸'), menu_url: TB + 'dtlmenu/',
    notes: '[Shochu bar and café · Shijo-Karasuma] A friendly bar-café with over 100 shochu from across Japan, where staff pour and explain from the bottles behind the counter; Miyazaki charcoal-grilled chicken and cheese to snack on, and coffee, cakes and kakigori for the café crowd. No cover charge; closed Tuesday. Flagged: the second shop of a bar in Yamato-Yagi, Nara.',
    chef_bio: { chef_name: null, roles: ['Master and staff (unnamed)'], origin: null,
      background: 'An August 2025 reviewer calls it the second shop of a popular bar in Yamato-Yagi, Nara. Reviewers describe a friendly master and staff who introduce shochu from the bottles behind the counter (December 2025, March 2026).',
      philosophy: null, specialty: 'Shochu; Miyazaki charcoal-grilled chicken.',
      anecdotes: [
        { text: 'A March 2026 visitor mixed a tea-flavoured shochu with milk and found it like unsweetened milk tea, perfect with chocolate cake.', source: R + 'B525769613/' },
      ],
      japanese_sources_summary: '食べログ: ちょっとBar 悟つぼ+cafe、バー・カフェ、中京区手洗水町650 四条烏丸スタービル 1F、地下鉄四条駅・阪急烏丸駅から徒歩3分、月・水〜日・祝日 16:00〜23:00 (L.O.22:30)、火曜定休 (祝日は営業)、サービス料・チャージ不要、カード・電子マネー・QR可、25席 (カウンター5、テーブル20)、全国の焼酎、ウイスキー、日本酒、宮崎の炭火焼き鶏、チーズとカマンベール、カフェメニュー。口コミ (2025〜2026年、英語): 100種以上の焼酎、奈良・大和八木の店の2号店、しろくまのかき氷 (ミルク) 1,000円、Queen Bee 640円、生姜の焼酎のソーダ割り、お茶の焼酎のミルク割り、チョコレートケーキ、気さくなマスターとスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B512243310/', R + 'B519840509/', R + 'B525769613/', R + 'B537355086/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the shochu; no cover charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区手洗水町650 四条烏丸スタービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005852, 135.75981); cross-checked: GSI 京都府京都市中京区手洗水町650番地 (lot) 28m; LOCANDA SENESE (B1F, same building) is 10.9 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512243310/'],
    price_note: 'Prices from an August 2025 review; no cover charge.', last_checked: TODAY, items: [
      it('', '', 'Shirokuma kakigori (milk)', '¥1,000', 'Café', 'ask', 'no', 'August 2025.', 'kakigori'),
      it('', '', 'Charcoal-grilled Miyazaki chicken', '', 'Snacks', 'ask', 'no', 'Tabelog.', 'jitokko'),
      it('', '', 'Shochu (e.g. Queen Bee)', '¥640', 'Drinks', '', '', 'August 2025.', 'shochu'),
    ] }, {
    cuisine: '全国の100種以上の焼酎にウイスキーと日本酒の焼酎バー (食べログ、2025年8月)・宮崎の炭火焼きの鶏、チーズとカマンベール (食べログ)・コーヒー、デザート、かき氷のカフェメニュー、しろくまのかき氷 (ミルク) 1,000円 (2025年8月)・Queen Bee 640円などの焼酎、生姜の焼酎のソーダ割り、お茶の焼酎のミルク割り、チョコレートケーキ (2025年8月、2026年3月)',
    neighborhood: '四条の北の烏丸。四条・烏丸から徒歩3分',
    gf_detail: '要確認。宮崎の炭火焼きの鶏、チーズのつまみ、ケーキ、かき氷。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。ほぼ飲み物。かき氷とコーヒーがあるが、乳製品を使わない選択肢は書かれていない (2025年の口コミ)。',
    notes: '[焼酎バーとカフェ・四条烏丸] カウンターの後ろのボトルから注いで説明してくれる、全国の焼酎が100種以上の気さくなバーカフェ。つまみは宮崎の炭火焼きの鶏とチーズ、カフェ使いならコーヒー、ケーキ、かき氷。チャージなし、火曜定休。奈良・大和八木のバーの2号店 (要確認)。',
  });
}

// ================================================================ BERRY BUTTON
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043908/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_berry_button_gojo', name: 'BERRY BUTTON', category: 'OMNI',
    lat: 34.996246, lng: 135.765362, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: financiers, madeleines, tigres, canelés and flan (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter-rich financiers and cream lattes (2026 reviews).',
    hours_raw: 'Monday, Tuesday, Thursday–Sunday 11:00–18:00; closed Wednesday; drinks only once the baked goods sell out (Tabelog). Eat-in and takeaway share one queue; popular items and eat-in-only desserts can sell out by mid-afternoon (September and October 2026). Cards, e-money and QR (Tabelog). Non-smoking (Tabelog). On the ground floor of STANDZ河原町五条, about 300 m from Kiyomizu-Gojo (Tabelog). Opened here 1 November 2025, moved from the Karasuma-Oike/Nijo area (Tabelog; October 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Gojo — about 300 m from Kiyomizu-Gojo',
    cuisine: 'A Korean-style baked-goods café known for colourful financiers (October 2026) · plain financier ¥280; salty-chocolate, hojicha-tigre and matcha-tigre ¥350; salty-caramel almond and fig-cream-cheese ¥320; hazelnut vanilla ¥360; sweet-potato flan ¥540 (October 2026) · seasonal sweet-potato financier; lemon madeleine; canelé (September–October 2026) · iced cream latte with whipped cream; café latte (October 2026) · eat-in-only desserts (October 2026)',
    website: null, gmaps: gm('BERRY BUTTON 京都 五条'), menu_url: TB + 'dtlmenu/',
    notes: '[Café · Kawaramachi-Gojo, Korean-style financiers] A busy Korean-style café and bakery where people queue for colourful financiers — fig and cream cheese, salty chocolate, hojicha and matcha tigres — and cream lattes, to eat in or take away; go early, as favourites sell out by mid-afternoon. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers say the café moved here from the Karasuma-Oike/Nijo-jo area (October 2026). No operator was found.',
      philosophy: null, specialty: 'Financiers.',
      anecdotes: [
        { text: 'A September 2026 visitor staying nearby joined a queue outside at 3 pm and found the Earl Grey financier already sold out.', source: R + 'B535922396/' },
        { text: 'An October 2026 regular, visiting for the first time since the move, called the fig-cream-cheese financier with a café latte an ideal break.', source: R + 'B537822651/' },
      ],
      japanese_sources_summary: '食べログ: BERRY BUTTON、カフェ、下京区本覚寺前町811 STANDZ河原町五条 1F、清水五条から301m、月・火・木〜日 11:00〜18:00、水曜定休、焼き菓子が売り切れたらドリンクのみ、カード・電子マネー・QR可、禁煙、2025年11月1日オープン。口コミ (2026年、英語): 韓国風の焼き菓子カフェ、プレーンのフィナンシェ280円、ソルティチョコ・ほうじ茶ティグレ・抹茶ティグレ350円、塩キャラメルアーモンドといちじくクリームチーズ320円、ヘーゼルナッツバニラ360円、さつまいもプリン540円、マドレーヌ、カヌレ、クリームラテ、イートインとテイクアウトは同じ列、イートイン限定のデザート、午後には売り切れも、烏丸御池・二条から移転。',
      confidence: 'medium', sources: [TB, R + 'B535922396/', R + 'B536376359/', R + 'B536583989/', R + 'B536599482/', R + 'B536974722/', R + 'B537397871/', R + 'B537489258/', R + 'B537789904/', R + 'B537822651/', R + 'B537938009/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue for eat-in or takeaway; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区本覚寺前町811 STANDZ河原町五条 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.996246, 135.765362); cross-checked: GSI 京都府京都市下京区本覚寺前町811番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536974722/', R + 'B537489258/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Plain financier', '¥280', 'Baked goods', 'no', 'no', 'October 2026.', 'plain'),
      it('', '', 'Fig and cream cheese financier', '¥320', 'Baked goods', 'no', 'no', 'October 2026.', 'fig'),
      it('', '', 'Matcha tigre', '¥350', 'Baked goods', 'no', 'no', 'October 2026.', 'matcha'),
      it('', '', 'Sweet-potato flan', '¥540', 'Baked goods', 'ask', 'no', 'October 2026.', 'flan'),
    ] }, {
    cuisine: '色とりどりのフィナンシェで知られる韓国風の焼き菓子カフェ (2026年10月)・プレーンのフィナンシェ280円、ソルティチョコ・ほうじ茶ティグレ・抹茶ティグレ350円、塩キャラメルアーモンドといちじくクリームチーズ320円、ヘーゼルナッツバニラ360円、さつまいもプリン540円 (2026年10月)・季節のさつまいものフィナンシェ、レモンのマドレーヌ、カヌレ (2026年9〜10月)・ホイップをのせたクリームラテ、カフェラテ (2026年10月)・イートイン限定のデザート (2026年10月)',
    neighborhood: '河原町五条。清水五条から約300m',
    gf_detail: 'グルテンフリーではない。フィナンシェ、マドレーヌ、ティグレ、カヌレ、プリン (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。バターたっぷりのフィナンシェとクリームラテ (2026年の口コミ)。',
    notes: '[カフェ・河原町五条、韓国風フィナンシェ] 色とりどりのフィナンシェ (いちじくクリームチーズ、ソルティチョコ、ほうじ茶や抹茶のティグレ) とクリームラテに行列ができる韓国風のカフェ兼焼き菓子店。店内でも持ち帰りでも。人気の品は午後には売り切れるので早めに。水曜定休。',
  });
}

// ================================================================ はるみ屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26015492/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_harumiya_sanjo', name: 'はるみ屋 (Harumiya)', category: 'OMNI',
    lat: 35.009257, lng: 135.775376, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Okinawan home cooking such as a Spam tower and pork dishes; no gluten information (March 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Spam and pork dishes (March 2026).',
    hours_raw: '18:00–22:00 daily incl. holidays; hours may change (Tabelog). Cash only: no cards, e-money or QR (Tabelog). Counter seating where regulars chat (March 2026). Smoking allowed (Tabelog). East of Sanjo bridge, about 120 m from Sanjo Keihan (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'East of Sanjo bridge — about 120 m from Sanjo Keihan',
    cuisine: 'Okinawan dishes cooked by “Mama Harumi”: a Spam tower and an original pork dish among cheap plates for drinking; under ¥4,000 a head for a feast (March 2026)',
    website: null, gmaps: gm('はるみ屋 三条'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · east of Sanjo bridge, Okinawan home cooking] A homely little izakaya where “Mama Harumi” cooks Okinawan dishes such as a Spam tower at cheap prices, with a counter where strangers end up chatting. Cash only; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Proprietor (“Mama Harumi”, per a review)'], origin: null,
      background: 'A March 2026 reviewer says the Okinawan dishes are made by “Mama Harumi” and describes a home-like atmosphere.',
      philosophy: null, specialty: 'Okinawan home cooking.',
      anecdotes: [
        { text: 'A March 2026 office group feasted for under ¥4,000 each and made friends with another drinker at the bar.', source: R + 'B523856345/' },
      ],
      japanese_sources_summary: '食べログ: はるみ屋、居酒屋・お好み焼き、東山区三条大橋東入二町目50、三条京阪から123m、毎日 18:00〜22:00 (祝日も)、カード・電子マネー・QR不可、喫煙可。口コミ (2025〜2026年、英語): 「はるみママ」の沖縄料理、スパムタワー、オリジナルの豚料理、手頃でみんなで食べても1人4,000円以下、家庭的な雰囲気、カウンターで常連と仲良く。',
      confidence: 'low', sources: [TB, R + 'B506138527/', R + 'B507268521/', R + 'B523856345/'] },
    cultural_comfort: { level: 'japanese', note: 'Small local bar; cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区三条大橋東入二町目50',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated May 2025 to August 2026.' },
    pin_source: `Tabelog ${TB} (35.009257, 135.775376); cross-checked: GSI 京都府京都市東山区二町目50番地 (lot) 36m; Bistro&Wine espace at the same lot is 16 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523856345/'],
    price_note: 'No menu prices found; under ¥4,000 a head (March 2026).', last_checked: TODAY, items: [
      it('', '', 'Spam tower', '', 'Okinawan', 'ask', 'no', 'March 2026.', 'spam'),
    ] }, {
    cuisine: '「はるみママ」が作る沖縄料理: スパムタワーやオリジナルの豚料理など飲むのにぴったりの手頃な品。たっぷり食べても1人4,000円以下 (2026年3月)',
    neighborhood: '三条大橋の東。三条京阪から約120m',
    gf_detail: '要確認。スパムタワーや豚料理などの沖縄の家庭料理。グルテンの情報はない (2026年3月)。',
    vegan_detail: 'ヴィーガンではない。スパムと豚の料理 (2026年3月)。',
    notes: '[居酒屋・三条大橋の東、沖縄の家庭料理] 「はるみママ」がスパムタワーなどの沖縄料理を手頃に出す家庭的な小さな居酒屋。カウンターでは知らない客同士も話が弾む。現金のみ、喫煙可。',
  });
}

save();
