// Ginza Station half-mile sweep (805 m), batch 48 — four small non-Japanese places with 2026 reviews (all OMNI).
//   + Dos Tios (late-night Spanish bar in a Ginza 8-chōme basement, opened 2023; master not named)
//   + Bar La Copita (Spanish bar in the Shimbashi Ekimae Bldg No. 1 basement, opened 2015; owner not named)
//   + IBAIA (Higashi-Ginza meat bistro, T-bone by reservation; owner not named)
//   + LAZUR (Tunisian restaurant opened June 2025, run by a Tunisian couple per a 2026 review; unnamed → OMNI)
// Left for later (group/branch): ブラーチェ・エ・ヴィーノ・ジジーノ (sister of Termini), KENZO ESTATE WINERY 銀座店,
// 鉄板焼 石垣島きたうち牧場 銀座店, セージ アンド フェンネル.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ Dos Tios
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13283989/'; const R = TB + 'dtlrvwlst/';
  const n = day(['18:00', '02:30']);
  put({
    id: 'tokyo_dos_tios_ginza8', name: 'Dos Tios', category: 'OMNI',
    lat: 35.667991, lng: 139.760631,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spanish tapas (carpaccio, ajillo, steak, salad) and wine; no source describes bread, flour or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: carpaccio, ajillo and steak.',
    hours_raw: 'Mon–Fri 18:00–2:30 (food L.O. 1:30, drinks 2:00); closed weekends and holidays (Tabelog). After 20:30, 10% service and ¥1,000 cover per person. Cards and IC accepted.',
    hours: { 0: n, 1: n, 2: n, 3: n, 4: n }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 8-chōme, Soirée de Dai-ni Yayoi Bldg B1F (stairs on the immediate left) — 4–5 min from Shimbashi Stn',
    cuisine: 'Quiet Spanish bar among Ginza 8-chōme\'s clubs · tapas and wine pairings · rum tastings · open until 2:30 a.m.', cuisine_type: 'other',
    website: null, gmaps: gm('Dos Tios 銀座8-7-11'), menu_url: null,
    notes: "[Spanish · a quiet bar among the clubs] A spacious, softly lit Spanish bar in a basement of Ginza 8-chōme, a block mostly of clubs and bars, opened in February 2023, with a counter, tables and semi-private rooms. Diners order carpaccio, ajillo, steak, salad and almonds with an extensive, fairly priced Spanish wine list. A September 2026 pairing of food with three glasses of wine came to about ¥10,000. Rum lovers come for tasting flights with detailed explanations, and the master is friendly. It serves until 2:30 a.m. on weekdays. From 20:30 a 10% service charge and a ¥1,000 cover apply.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 February 2023 (Tabelog)', background: 'A 2026 reviewer mentions a friendly master; no source names the owner.', philosophy: null, specialty: 'Ajillo; Spanish wine; rum tastings.',
      anecdotes: [
        { text: '"I visited Dos Tios on a weekday at 9:34 PM and was able to get a table as my second stop of the night. They\'re open until 2:30 AM." — May 2026.', source: R + 'B528667302/' },
        { text: '"I visited today to enjoy a rum tasting experience… The tasting set offers great value for money." — July 2026.', source: R + 'B534089511/' },
      ],
      japanese_sources_summary: '食べログ: Dos Tios、銀座8-7-11 ソワレド銀座第二弥生ビルB1F、新橋駅から徒歩4〜5分、16席(カウンター・テーブル・半個室)、平日18:00〜翌2:30、土日祝休、20:30以降サービス料10%とチャージ1,000円、2023年2月1日開店、カード・IC可。2026年の口コミ: クラブやバーの多い銀座8丁目の地下の静かなスペインバル、カルパッチョ・アヒージョ・ステーキ・サラダ・アーモンド、手頃で豊富なスペインワイン、ワイン3杯のペアリングで1万円ほど、ラムのテイスティング、気さくなマスター。',
      confidence: 'low', sources: [TB, R + 'B528667302/', R + 'B533662709/', R + 'B534089511/', R + 'B536572825/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Late-night bar; cover and service charge after 20:30.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-7-11 ソワレド銀座第二弥生ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目7番11号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536572825/', R + 'B533662709/'],
    price_note: 'Pairing price from a September 2026 review.', last_checked: TODAY, items: [
      it('料理とワイン3杯のペアリング', '', 'Food with three-glass wine pairing', '¥10,000', 'Sets', 'ask', 'no', '2026, per person.', 'pairing'),
      it('アヒージョ', 'ahiijo', 'Ajillo', '', 'Tapas', 'ask', 'ask', '', 'ajillo'),
      it('ラムのテイスティングセット', 'ramu no teisutingu', 'Rum tasting flight', '', 'Drinks', 'gf', 'vegan', '', 'rum_tasting'),
    ] }, {
    cuisine: '銀座8丁目のクラブ街の静かなスペインバル・タパスとワインのペアリング・ラムのテイスティング・深夜2時半まで',
    neighborhood: '銀座八丁目、ソワレド銀座第二弥生ビルB1F(入ってすぐ左の階段)。新橋駅から徒歩4〜5分',
    gf_detail: '要確認。カルパッチョ、アヒージョ、ステーキ、サラダなどのスペインのタパスとワイン。パンや小麦粉の使用、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。カルパッチョ、アヒージョ、ステーキ。',
    notes: '[スペイン・クラブ街の静かなバル] クラブやバーの多い銀座8丁目のビル地下、2023年2月開店の広く柔らかな照明のスペインバルで、カウンター、テーブル、半個室。カルパッチョ、アヒージョ、ステーキ、サラダ、アーモンドを、豊富で手頃なスペインワインと。2026年9月には料理とワイン3杯のペアリングで1万円ほど。ラム好きは丁寧な説明付きのテイスティングを目当てに通い、マスターも気さく。平日は深夜2時半まで。20時半以降はサービス料10%とチャージ1,000円。',
  });
}

// ================================================================ Bar La Copita
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13185584/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['17:00', '23:30']);
  put({
    id: 'tokyo_bar_la_copita_shimbashi', name: 'Bar La Copita (ラ コピータ)', category: 'OMNI',
    lat: 35.66626, lng: 139.759622,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spanish bar snacks such as shrimp and mushroom ajillo, prosciutto, oil sardines, marinated sardines, a warm potato salad, sausages and fries; no source describes bread, flour or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: prosciutto, sardines, shrimp and sausages; nuts and olives are among the snacks.',
    hours_raw: 'Mon–Fri 17:00–23:30; Sat 16:00–22:00; closed Sundays and holidays (Tabelog). ¥400 charge. Cards and PayPay accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['16:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimbashi 2-chōme, Shimbashi Ekimae Bldg No. 1 B1F — 1 min from Shimbashi Stn',
    cuisine: 'Cheerful Spanish bar in the station-building basement · ajillo and tapas · wine from ¥550 a glass', cuisine_type: 'other',
    website: null, gmaps: gm('Bar La Copita 新橋2-20-15 新橋駅前ビル一号館'), menu_url: null,
    notes: "[Spanish · a bar in the station-building basement] A small Spanish bar, opened in March 2015, among the basement drinking dens of the Shimbashi Ekimae Building No. 1, a minute from the station. Its Tabelog page describes a cheerful owner and wines from ¥550 a glass. Diners pair Spanish beer, sparkling, wine and wine cocktails with snacks: shrimp ajillo, the house top recommendation, plus mushroom ajillo, prosciutto, oil and marinated sardines, a warm potato salad, sausages, fries, nuts and olives. Portions are small, prices low, about ¥2,000–4,000 a head, and there is a ¥400 charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 March 2015 (Tabelog)', background: 'The shop text mentions a cheerful owner; no source names the owner.', philosophy: null, specialty: 'Shrimp ajillo; Spanish wine by the glass.',
      anecdotes: [
        { text: '"I enjoyed nuts and olives, French fries, shrimp ajillo, and sausages, paired with draft beer and a bottle of white wine." — August 2026.', source: R + 'B534615941/' },
        { text: '"I particularly enjoy the warm potato salad. The marinated sardines and mushroom ajillo make excellent snacks to pair with wine cocktails." — September 2025.', source: R + 'B508915507/' },
      ],
      japanese_sources_summary: '食べログ: Bar La Copita、新橋2-20-15 新橋駅前ビル一号館B1F、新橋駅から徒歩1分、16席、平日17:00〜23:30、土16:00〜22:00、日祝休、チャージ400円(税込)、2015年3月18日開店、カード・PayPay可。店舗紹介: 明るいオーナー、おすすめは海老のアヒージョ、グラスワイン550円から。口コミ(2024〜2026年): スペインビール、生ハム、オイルサーディン、鰯のマリネ、温かいポテトサラダ、茸のアヒージョ、ソーセージ、フライドポテト、ナッツとオリーブ、2,000〜4,000円。',
      confidence: 'low', sources: [TB, R + 'B534615941/', R + 'B508915507/', R + 'B504301755/', R + 'B497805699/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual station-building bar; small plates; ¥400 charge.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋2-20-15 新橋駅前ビル一号館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; latest review August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋二丁目20番 (lot) 5m; Shimbashi Ekimae Bldg No. 1 (724 m, inside the radius); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B534615941/'],
    price_note: 'Glass-wine price from the Tabelog shop text.', last_checked: TODAY, items: [
      it('海老のアヒージョ', 'ebi no ahiijo', 'Shrimp ajillo (house recommendation)', '', 'Tapas', 'ask', 'no', '', 'shrimp_ajillo'),
      it('温かいポテトサラダ', 'atatakai poteto sarada', 'Warm potato salad', '', 'Tapas', 'ask', 'ask', '', 'warm_potato'),
      it('グラスワイン', 'gurasu wain', 'Wine by the glass', '¥550–', 'Drinks', 'gf', 'ask', '', 'wine_glass'),
    ] }, {
    cuisine: '駅前ビル地下の明るいスペインバル・アヒージョとタパス・グラスワイン550円から',
    neighborhood: '新橋二丁目、新橋駅前ビル一号館B1F。新橋駅から徒歩1分',
    gf_detail: '要確認。海老や茸のアヒージョ、生ハム、オイルサーディン、鰯のマリネ、温かいポテトサラダ、ソーセージ、フライドポテトなどのスペインバルのつまみ。パンや小麦粉、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。生ハム、鰯、海老、ソーセージ。ナッツやオリーブもあります。',
    notes: '[スペイン・駅前ビル地下のバル] 新橋駅から1分、新橋駅前ビル一号館の地下飲み屋街にある2015年3月開店の小さなスペインバル。食べログの店舗紹介には明るいオーナーとグラス550円からのワイン。スペインビールやスパークリング、ワイン、ワインカクテルに、イチオシの海老のアヒージョ、茸のアヒージョ、生ハム、オイルサーディンや鰯のマリネ、温かいポテトサラダ、ソーセージ、フライドポテト、ナッツとオリーブを。量は少なめで値段は手頃、1人2,000〜4,000円ほど、チャージ400円。',
  });
}

// ================================================================ IBAIA
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13159072/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:00', '22:00']);
  put({
    id: 'tokyo_ibaia_higashi_ginza', name: 'IBAIA (イバイア)', category: 'OMNI',
    lat: 35.670795, lng: 139.769236,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A meat bistro (reservation-only T-bone, tenderloin) with fish and vegetable dishes; no source describes sauces, bread or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-focused bistro with fish dishes.',
    hours_raw: 'Tue–Sun 17:00–22:00; closed Mondays (Tabelog). ¥1,500 table charge. Cards and d Barai accepted.',
    hours: { 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme back alley, First Bldg 1F — 2 min from Higashi-Ginza Stn (Asakusa Line)',
    cuisine: 'Meat bistro in a Higashi-Ginza back alley · reservation-only T-bone · counter seats', cuisine_type: 'other',
    website: null, gmaps: gm('IBAIA 銀座3-12-5 ファーストビル'), menu_url: null,
    notes: "[Bistro · the T-bone in a back alley] A cosy, mostly counter bistro in a Higashi-Ginza back alley known for its meat. The T-bone is reservation only, and a September 2026 diner who usually struggles with strip loin found it free of any beefy smell or heaviness, with tenderloin just as good. Fish and vegetable dishes also impressed. A party of four ordered eight appetizers, three mains and two desserts and praised the simple ingredients and good house wine. The menu is short and focused. Expect ¥8,000–15,000 a head, plus a ¥1,500 table charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Higashi-Ginza back alley; opening date not found in a source read', background: 'No source names the owner or chef.', philosophy: null, specialty: 'T-bone steak; tenderloin.',
      anecdotes: [
        { text: '"This T-bone steak is reservation-only… To my surprise, there was none of the typical beefy smell or heaviness, and it was delicious!" — September 2026.', source: R + 'B536273626/' },
        { text: '"We were a party of four and ordered a variety of dishes: 8 appetizers, 3 main courses, and 2 desserts." — September 2026.', source: R + 'B323500080/' },
      ],
      japanese_sources_summary: '食べログ: IBAIA、銀座3-12-5 ファーストビル1F、東銀座駅(浅草線)から徒歩2分、17席、火〜日17:00〜22:00、月休、テーブルチャージ1,500円、カード・d払い可、6,000〜8,000円。2026年の口コミ: 東銀座の路地裏の肉のビストロ、カウンター中心、予約制のTボーン、ヒレ、魚と野菜の料理、前菜8品・メイン3品・デザート2品、ハウスワイン、メニューは絞られている、8,000〜15,000円。',
      confidence: 'low', sources: [TB, R + 'B536273626/', R + 'B323500080/', R + 'B533883407/', R + 'B533830832/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cosy counter; reserve the T-bone ahead. ¥1,500 table charge.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-12-5 ファーストビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目12番5号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536273626/'],
    price_note: 'No prices captured; reviewers spend ¥8,000–15,000.', last_checked: TODAY, items: [
      it('Tボーンステーキ(要予約)', 'tii boon suteeki', 'T-bone steak (reservation only)', '', 'Mains', 'ask', 'no', '', 't_bone'),
      it('ヒレ', 'hire', 'Tenderloin', '', 'Mains', 'ask', 'no', '', 'tenderloin'),
    ] }, {
    cuisine: '東銀座の路地裏の肉のビストロ・予約制のTボーン・カウンター',
    neighborhood: '銀座三丁目の路地裏、ファーストビル1F。東銀座駅(浅草線)から徒歩2分',
    gf_detail: '要確認。予約制のTボーンやヒレの肉のビストロで、魚や野菜の料理も。ソースやパン、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。肉中心のビストロで魚料理もあります。',
    notes: '[ビストロ・路地裏のTボーン] 東銀座の路地裏、カウンター中心の居心地のよい肉のビストロ。Tボーンは予約制で、普段はサーロインが苦手という2026年9月の客も、牛の臭みや重さがなく美味しかったそう。ヒレも同じく好評で、魚や野菜の料理も。4人で前菜8品・メイン3品・デザート2品を頼んだグループは、シンプルな食材と美味しいハウスワインを称賛。メニューは絞り込まれています。予算は8,000〜15,000円ほど、テーブルチャージ1,500円。',
  });
}

// ================================================================ LAZUR
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13310790/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:00', '23:00']);
  put({
    id: 'tokyo_lazur_tunisian_higashi_ginza', name: 'LAZUR (ラズール)', category: 'OMNI',
    lat: 35.670786, lng: 139.769491,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as described: Tunisian couscous (wheat semolina) and tuna brik in pastry are signatures; harissa, hummus and salads are not described ingredient by ingredient.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Hummus and some salads may suit, but the classic course has chicken couscous and tuna brik, the houiriya salad comes with sardines, and moussaka has meat sauce and cheese.',
    hours_raw: 'Mon–Sat and holidays 17:00–23:00 (food L.O. 21:00, drinks 22:30); closed Sundays (Tabelog). Cards, IC and QR (incl. Alipay, WeChat Pay) accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, Karitsu Bldg 1F–2F (terrace at the entrance) — 3 min from Higashi-Ginza Stn',
    cuisine: 'Tunisian cuisine, rare in Japan (opened 2025) · couscous, tuna brik, harissa · ¥4,800 classic course · Celtia beer', cuisine_type: 'other',
    website: null, gmaps: gm('LAZUR 銀座3-13-19 華立ビル'), menu_url: null,
    notes: "[Tunisian · a rare North African kitchen] One of only a handful of Tunisian restaurants in Japan, opened in June 2025 in Higashi-Ginza and run, according to a June 2026 diner, by a Tunisian couple, neither named. There is terrace seating by the door on the ground floor and a standing-bar-like room upstairs. The 'LAZUR classic course' (¥4,800) brings couscous with chicken and vegetables, tuna brik, salad and dessert. Or order à la carte: the signature harissa, hummus, houiriya salad with harissa and sardines, and a moussaka of baked eggplant and cheese under meat sauce. Drinks include Tunisian Celtia beer, Casablanca, the herbal liqueur Cedratine and fig brandy with soda. The owner explains how each dish is eaten in Tunisia and sometimes pours a complimentary Tunisian drink. About ¥4,000–6,000 a head.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 2 June 2025 (Tabelog)', background: 'A June 2026 reviewer says a Tunisian couple runs it; no source names them.', philosophy: null, specialty: 'Couscous; tuna brik; harissa.',
      anecdotes: [
        { text: '"A Tunisian restaurant run by a Tunisian couple… that opened in 2025." — June 2026.', source: R + 'B530874988/' },
        { text: '"I was treated to various Tunisian drinks as a complimentary service after my first drink… the owner explained the dishes and how to enjoy them in Tunisia." — April 2026.', source: R + 'B527105123/' },
      ],
      japanese_sources_summary: '食べログ: LAZUR、銀座3-13-19 華立ビル1F・2F、東銀座駅から徒歩3分、17席、月〜土・祝17:00〜23:00、日休、2025年6月2日開店、カード・IC・QR(Alipay・WeChat Pay含む)可、2,000〜3,000円。2026年の口コミ: チュニジア人夫婦が営む日本では珍しいチュニジア料理、1階入口にテラス・2階は立ち飲み風、LAZURクラシックコース4,800円(鶏と野菜のクスクス、ツナのブリック、サラダ、デザート)、ハリッサ、フムス、ホウリーヤサラダ(鰯)、ムサカ、チュニジアビール「セルティア」、カサブランカ、セドラティーヌ、イチジクのブランデー、オーナーが食べ方を説明しチュニジアの酒をサービス。',
      confidence: 'low', sources: [TB, R + 'B530874988/', R + 'B527105123/', R + 'B528291938/', R + 'B520440657/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly, explanatory service; solo diners welcome. Alipay and WeChat Pay accepted.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [{ text: 'Couscous and tuna brik (pastry) in the classic course.', source: R + 'B530874988/' }], soy_sauce_wheat: [], vegan_cross_contact: [{ text: 'Houiriya salad with sardines; moussaka with meat sauce.', source: R + 'B528291938/' }], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-13-19 華立ビル 1F・2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened June 2025; Tabelog reviews dated January–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目13番19号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530874988/', R + 'B528291938/'],
    price_note: 'Course price from a June 2026 review.', last_checked: TODAY, items: [
      it('LAZURクラシックコース', 'razuuru kurashikku koosu', 'LAZUR classic course: chicken and vegetable couscous, tuna brik, salad, dessert', '¥4,800', 'Courses', 'no', 'no', '2026.', 'classic_course'),
      it('ハリッサ', 'harissa', 'Harissa', '', 'Small plates', 'ask', 'ask', '', 'harissa'),
      it('フムス', 'fumusu', 'Hummus', '', 'Small plates', 'ask', 'ask', '', 'hummus'),
      it('ツナのブリック', 'tsuna no burikku', 'Tuna brik (pastry)', '', 'Small plates', 'no', 'no', '', 'brik'),
      it('セルティア', 'serutia', 'Celtia (Tunisian beer)', '', 'Drinks', 'no', 'ask', '', 'celtia'),
    ] }, {
    cuisine: '日本では珍しいチュニジア料理(2025年開店)・クスクス、ツナのブリック、ハリッサ・クラシックコース4,800円・セルティアビール',
    neighborhood: '銀座三丁目、華立ビル1F・2F(入口にテラス)。東銀座駅から徒歩3分',
    gf_detail: '記述上はグルテンフリーではありません。名物はクスクス(小麦のセモリナ)とパイ生地のツナのブリック。ハリッサ、フムス、サラダは材料が書かれていません。',
    vegan_detail: '要確認。フムスや一部のサラダは候補ですが、クラシックコースは鶏のクスクスとツナのブリック、ホウリーヤサラダは鰯入り、ムサカは肉のソースとチーズです。',
    notes: '[チュニジア・珍しい北アフリカの料理] 日本では数えるほどしかないチュニジア料理の店で、2025年6月に東銀座で開店。2026年6月の口コミによればチュニジア人の夫婦が営みます(名前は書かれていません)。1階の入口にテラス、2階は立ち飲みのような空間。「LAZURクラシックコース」(4,800円)は鶏と野菜のクスクス、ツナのブリック、サラダ、デザート。アラカルトなら名物のハリッサ、フムス、ハリッサと鰯のホウリーヤサラダ、焼き茄子とチーズに肉のソースのムサカも。飲み物はチュニジアビールのセルティア、カサブランカ、ハーブのリキュール「セドラティーヌ」、イチジクのブランデーのソーダ割りなど。オーナーがチュニジアでの食べ方を説明し、チュニジアの酒をサービスしてくれることも。1人4,000〜6,000円ほど。',
  });
}

save();
