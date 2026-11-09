// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 87.
//   + ザコトラ商店 The Kotora Shoten (lunch-only shichirin izakaya in a former fish shop on Niomon-dori; Akagakiya group) — rest
//   + Méton (one-person café-bar of sweets and wine upstairs from ザコトラ商店) — rest
//   + 高台寺羽柴 Kodaiji Hashiba (house-made yuba lunches in the Kodaiji grounds, above the Sho Art Museum gallery) — rest
//   - skip 26032666 ブーランジェリー オショウ (retail food shop, Greg 11-07 ruling)
//   - skip 26010148 いふじ (thin)
//   + Roppakuya KADO (Western-style izakaya of Kyoto vegetables in a three-storey house off Muromachi; next door to くぐり鍋 六白屋, same Roppakuya name) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl, the THAN brand list
//   (than.co.jp/brands, read 2026-11-08) and the 株式会社WILL ruling (26043489): no matches for ザコトラ, Méton, 羽柴, オショウ, いふじ or KADO. LINK FLAGGED: Roppakuya KADO
//   (観音堂町453-1) is next door to くぐり鍋 六白屋 (kyoto_kuguri_nabe_roppakuya, 452-1, in data) and serves the same Rokuhaku black
//   pork (February 2025); a different name and concept (Western-style vegetable izakaya vs kuguri nabe), so drafted as a likely sister
//   concept on the same footing as ザコトラ商店.
//   LINK FLAGGED (coordinator 11-08 ruling): ザコトラ商店 is a sister concept of 赤垣屋 (kyoto_akagakiya, in data) — February,
//   April and September 2026 reviewers say it is run by Akagakiya / the Akagakiya group, using a former fish shop near the main
//   shop. Different name, concept (lunch-only, shichirin) and address (大菊町102 vs 孫橋町9), so drafted, with the link stated.
//   Méton shares the building (2F) but nothing ties it to the Akagakiya group; reviewers say one person runs it.
//   None of the drafted shops is in data/kyoto.json.
//   Charges: none listed on Tabelog. No halal claims; no owner deaths; single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-87');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26032666', 'retail food shop (Greg 11-07 ruling): ブーランジェリー オショウ is a takeaway bakery of rice-flour koppepan sandwiches, with only a three-seat counter to eat in (October 2026); the rice-flour bread still contains gluten (May 2024) (https://tabelog.com/en/kyoto/A2601/A260301/26032666/).');
skip('26010148', 'thin: いふじ has three 2025–26 Tabelog reviews, two being one-liners, and Tabelog lists no hours — not enough current sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260301/26010148/).');

// ================================================================ ザコトラ商店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044324/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00']);
  put({
    id: 'kyoto_the_kotora_shoten', name: 'ザコトラ商店 (The Kotora Shoten)', category: 'OMNI',
    lat: 35.011778, lng: 135.773567, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fish cakes (hanpen, satsuma-age), agedashi tofu, mentaiko and beer are staples of the menu (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood-and-chicken menu — clams, firefly squid, river fish from the tank, fish cakes, kashiwa chicken (2026 reviews).',
    hours_raw: 'Mon–Sat 12:00–15:00, last order about 14:30; closed Sunday (Tabelog; April 2026). Lunchtime drinking only. No reservations; a queue forms at opening and later arrivals are often turned away (May–July 2026); the shop asks people to line up only from ten minutes before opening and not to wait nearby (October 2026). Cash only (Tabelog; June 2026). Five small tables, with a charcoal shichirin on each (February and June 2026). On Niomon-dori near Kawabata, about ten minutes from Keihan Sanjo (April 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Niomon-dori, by Kawabata — Sanjo Keihan',
    cuisine: 'Lunch-only izakaya grilling seafood on a shichirin at the table, in a former fish shop · hanpen or satsuma-age to start (February–May 2026) · akagai, firefly squid raw or grilled, iwana and moroko from the tank (March 2026) · live ayu grilled to order; isaki (June 2026) · clams, Biwa trout, kashiwa chicken, fried tofu, sardines; omakase by number of dishes (June 2026) · drinks ¥700 each, most dishes ¥300–500 (April 2026) · draft beer poured "bitter", "smooth" or "strongly carbonated" (March, May and October 2026)',
    website: null, gmaps: gm('ザコトラ商店 京都 仁王門'), menu_url: TB,
    notes: '[Daytime izakaya · Niomon-dori] A lunch-only drinking spot in a former fish shop, run by the Akagakiya group: seafood and river fish from the tank, part-cooked and finished on a charcoal shichirin at your table, with beer poured to taste — bitter, smooth or fizzy. Drinks ¥700, most dishes ¥300–500. Five tables, no reservations: queue from ten minutes before 12:00. Cash only; closed Sunday. Sister concept of Akagakiya (listed separately).',
    chef_bio: { chef_name: null, roles: ['Run by a couple, with one person in the kitchen (June 2026)'], origin: null,
      background: 'Per reviews: a daytime izakaya run by the Kyoto izakaya Akagakiya (Akagakiya group) in a former fish shop near the main shop (February, April and September 2026).',
      philosophy: null, specialty: 'Seafood and river fish on the shichirin; beer poured to taste.',
      anecdotes: [
        { text: 'A March 2026 return visitor watched iwana and moroko netted from the tank beside the table, with rakugo playing on a cassette deck, and grilled firefly squid both raw and on the shichirin.', source: R + 'B523260071/' },
        { text: 'An April 2026 diner arriving at 14:00 paid ¥1,300 for sake, agedashi tofu and moroko, and had to ask twice whether the bill was right.', source: R + 'B527086059/' },
        { text: 'An October 2026 group learned the house rule: line up only ten minutes before opening, and wait out of sight until then — most people wait at a nearby temple.', source: R + 'B538627727/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・立ち飲み、左京区大菊町102、月〜土12:00〜15:00、日曜休み、カード・電子マネー・QR 不可。口コミ (2025年10月〜2026年10月、英語): 赤垣屋 (Akagakiya) の系列の昼飲みの店、元魚屋の建物、予約不可、開店時に行列、並ぶのは開店10分前から、各テーブルに七輪、お通しのはんぺんやさつま揚げ、赤貝、ホタルイカ、水槽のいわなとモロコ、活けの鮎、いさき、貝、ビワマス、かしわ、厚揚げ、いわし、品数を言えばおまかせ、ドリンクは一律700円、料理はほぼ300〜500円、ビールは苦め・まろやか・強炭酸を選べる、カセットで落語、夫婦で営む、現金のみ、L.O.14:30ごろ、京阪三条から徒歩約10分。',
      confidence: 'medium', sources: [TB, R + 'B521824985/', R + 'B523260071/', R + 'B525961516/', R + 'B527086059/', R + 'B528075915/', R + 'B529792408/', R + 'B533390833/', R + 'B535691349/', R + 'B536946682/', R + 'B538627727/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue only from 11:50 — the shop asks people not to wait outside earlier. Bring cash. Say how many dishes you want and the kitchen chooses. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区大菊町102',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.011850, 135.773567); cross-checked: GSI 京都府京都市左京区大菊町102番地 (lot) 87m; offset 8 m south so as not to stack on Hz (Hertz), 3F of the same building, at the same Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527086059/', R + 'B529792408/'],
    price_note: 'Prices from April and June 2026; no printed prices on the blackboard (July 2026).', last_checked: TODAY, items: [
      it('', '', 'Any drink (beer, highball, sake, shochu)', '¥700', 'Drinks', 'no', 'ask', 'April and June 2026.', 'drink'),
      it('', '', 'Small dishes (most)', '¥300–500', 'Dishes', 'no', 'no', 'April 2026.', 'small_dish'),
      it('', '', 'River fish from the tank (iwana, moroko, ayu), grilled', '', 'Fish', 'ask', 'no', 'March and June 2026.', 'river_fish'),
      it('', '', 'Firefly squid, raw or on the shichirin', '', 'Seafood', 'ask', 'no', 'March and April 2026.', 'hotaruika'),
    ] }, {
    cuisine: '元魚屋で魚介を席の七輪で焼く昼だけの居酒屋・お通しのはんぺんやさつま揚げ (2026年2月〜5月)・赤貝、生でも焼いてもよいホタルイカ、水槽のいわなとモロコ (2026年3月)・注文してから焼く活けの鮎、いさき (2026年6月)・貝、ビワマス、かしわ、厚揚げ、いわし、品数を言えばおまかせ (2026年6月)・ドリンク一律700円、料理はほぼ300〜500円 (2026年4月)・苦め、まろやか、強炭酸から選べる生ビール (2026年3月・5月・10月)',
    neighborhood: '仁王門通、川端のそば。京阪三条',
    gf_detail: 'グルテンフリーではない。はんぺんやさつま揚げ、揚げ出し豆腐、明太子、ビールが定番 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介と鶏のメニュー。貝、ホタルイカ、水槽の川魚、練り物、かしわ (2026年の口コミ)。',
    notes: '[昼飲み・仁王門通] 赤垣屋の系列の、元魚屋の建物で昼だけ営む居酒屋。水槽の川魚や魚介を半ば火を入れて出し、席の七輪で仕上げる。ビールは苦め・まろやか・強炭酸から。ドリンク700円、料理はほぼ300〜500円。テーブル5つ、予約不可、並ぶのは12時の10分前から。現金のみ、日曜休み。赤垣屋とは別に掲載。',
  });
}

// ================================================================ Méton
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042626/'; const R = TB + 'dtlrvwlst/';
  const H = day(['14:00', '21:00']);
  put({
    id: 'kyoto_meton_cafe', name: 'Méton (メトン)', category: 'OMNI',
    lat: 35.011922, lng: 135.773567, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-baked madeleines, canelés, cream puffs, sablés, galette with a whole-grain crust, rum-currant cake (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pudding, cream puffs, panna cotta, prosciutto, madeleines (2025–26 reviews); no vegan item sourced.',
    hours_raw: 'Mon, Tue, Thu, Sat, Sun 14:00–21:00; closed Wednesday and Friday; may change — the shop posts changes on Instagram (Tabelog; November 2025). One person runs it, so orders take time — about 20 minutes for a latte on a busy day (December 2025). Order first; cash only (Tabelog; November 2025). A window counter, a stand and one table for four; tables may be shared when full (April 2025, March 2026). Photos of your own table only (April 2025). Second floor of the building that houses ザコトラ商店, up steep stairs, marked by a small red sign, on Niomon-dori about four minutes from Sanjo Keihan (April, October and November 2025).',
    hours: { 0: H, 1: H, 3: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Niomon-dori, by Kawabata — Sanjo Keihan',
    cuisine: 'Small café and wine stand of house-baked sweets, opened February 2025 · firm caramel pudding ¥600 and hot coffee ¥600, beans from STYLE COFFEE (April 2025) · canelé, strawberry panna cotta, cream puffs (May 2025, May 2026) · kumquat galette, visitandine (August 2025) · madeleines with fennel, served with prosciutto (April and December 2025) · café latte ¥650 (December 2025) · rum-currant cake with vanilla ice cream (March 2026) · wine and snacks such as œufs mayo (October 2025)',
    website: null, gmaps: gm('Méton メトン 京都 仁王門'), menu_url: TB,
    notes: '[Café & sweets · Niomon-dori] A tiny upstairs café-bar near Sanjo Keihan, above ザコトラ商店, where one person bakes and serves: firm caramel pudding, canelés, cream puffs, madeleines with prosciutto, seasonal galettes, coffee from STYLE COFFEE, and wine with small plates into the evening. 14:00–21:00; closed Wednesday and Friday. Cash only; expect to wait.',
    chef_bio: { chef_name: null, roles: ['Owner (named in one review as Yamashita), who runs the shop alone (April and November 2025)'], origin: null,
      background: 'Per reviews: opened in February 2025 by an owner from the apparel trade who later worked at Walkon (now closed) and NISHITOMIYA (April and November 2025).',
      philosophy: 'Per an August 2025 review: baked goods made with aluminium-free baking powder.', specialty: 'Pudding; canelé; madeleine with prosciutto.',
      anecdotes: [
        { text: 'A May 2025 pair shared a canelé, strawberry panna cotta and a cream puff with two drinks for ¥2,750, and called it a favourite opening of the year.', source: R + 'B505931596/' },
        { text: 'An April 2025 diner had madeleines — made with fennel — with prosciutto, and plans to come back for something sweet.', source: R + 'B504442374/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、左京区大菊町102 ザコトラ商店2F、月火木土日14:00〜21:00、水・金曜休み、カード・電子マネー・QR 不可、2025年2月24日オープン。口コミ (2025年4月〜2026年5月、英語): 仁王門通、京阪三条から徒歩約4分、赤い小さな看板、急な階段、一人で営む、先に注文、現金のみ、撮影は自分の席だけ、STYLE COFFEE の豆、プリン600円、ホットコーヒー600円、カフェラテ650円、カヌレ、いちごのパンナコッタ、シュークリーム、金柑のガレット、ヴィジタンディーヌ、フェンネル入りのマドレーヌと生ハム、ラムとカラントのケーキとバニラアイス、ワインとウフマヨ、アルミフリーのベーキングパウダー、店主は以前アパレルの仕事、Walkon (閉店) と NISHITOMIYA で経験。',
      confidence: 'medium', sources: [TB, R + 'B504415790/', R + 'B504442374/', R + 'B504478132/', R + 'B505931596/', R + 'B506005901/', R + 'B507504635/', R + 'B515922012/', R + 'B517464398/', R + 'B518965720/', R + 'B520590364/', R + 'B524458897/', R + 'B529211327/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay in cash first; one person runs the shop, so allow time. Photograph only your own table. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区大菊町102 ザコトラ商店 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.011850, 135.773567) — the same point as Hz (3F) and ザコトラ商店 (1F) in this building; offset 8 m north so as not to stack; cross-checked: GSI 京都府京都市左京区大菊町102番地 (lot) 95m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504478132/', R + 'B518965720/', R + 'B505931596/'],
    price_note: 'Prices from April and December 2025.', last_checked: TODAY, items: [
      it('', '', 'Pudding', '¥600', 'Sweets', 'no', 'no', 'April 2025.', 'pudding'),
      it('', '', 'Hot coffee (STYLE COFFEE beans)', '¥600', 'Drinks', 'ask', 'ask', 'April 2025.', 'coffee'),
      it('', '', 'Café latte', '¥650', 'Drinks', 'ask', 'no', 'December 2025.', 'latte'),
      it('', '', 'Canelé', '', 'Sweets', 'no', 'no', 'May and October 2025.', 'canele'),
      it('', '', 'Cream puff', '', 'Sweets', 'no', 'no', 'May 2025 and May 2026.', 'cream_puff'),
    ] }, {
    cuisine: '焼き菓子の小さなカフェとワインスタンド、2025年2月オープン・固めのカラメルのプリン600円、STYLE COFFEE の豆のホットコーヒー600円 (2025年4月)・カヌレ、いちごのパンナコッタ、シュークリーム (2025年5月・2026年5月)・金柑のガレット、ヴィジタンディーヌ (2025年8月)・フェンネル入りのマドレーヌと生ハム (2025年4月・12月)・カフェラテ650円 (2025年12月)・ラムとカラントのケーキにバニラアイス (2026年3月)・ワインとウフマヨなどのつまみ (2025年10月)',
    neighborhood: '仁王門通、川端のそば。京阪三条',
    gf_detail: 'グルテンフリーではない。自家製のマドレーヌ、カヌレ、シュークリーム、サブレ、全粒粉の生地のガレット、ラムとカラントのケーキ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。プリン、シュークリーム、パンナコッタ、生ハム、マドレーヌ (2025〜2026年の口コミ)。ヴィーガンのメニューの情報なし。',
    notes: '[カフェと焼き菓子・仁王門通] 京阪三条近く、ザコトラ商店の2階の小さなカフェ兼ワインスタンド。一人で焼いて出す固めのプリン、カヌレ、シュークリーム、生ハムとマドレーヌ、季節のガレット、STYLE COFFEE のコーヒー、夕方からはワインとつまみ。14:00〜21:00、水・金曜休み。現金のみ、待つ覚悟で。',
  });
}

// ================================================================ 高台寺羽柴
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005012/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00']);
  put({
    id: 'kyoto_kodaiji_hashiba', name: '高台寺羽柴 (Kodaiji Hashiba)', category: 'OMNI',
    lat: 35.000715, lng: 135.779662, cuisine_type: 'tofu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the yuba sets include nama-fu (wheat gluten) dengaku, tempura, yuba gratin and soy-based dashi dishes (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi throughout, shrimp tempura, shirasu rice, a dairy gratin (2025–26 reviews). The yuba itself is made from additive-free domestic soy milk (August 2026), but no vegan set is sourced.',
    hours_raw: 'Daily 11:00–15:00 (last order 14:30); during the spring, summer and autumn (23 October–13 December) illuminations also 17:00–19:30 (last order); may close for temple events (Tabelog). "サービス料なし、チャージ料なし" — no service or cover charge (Tabelog). No cards, e-money or QR (Tabelog). 48 seats, all at tables (Tabelog). Reservations taken (November 2025); a 20-minute wait at a March 2026 lunch. English menu and an English-speaking server (January and May 2026). Second floor above a gallery, inside the Kodaiji temple precinct beside the Sho Art Museum, with window views of the Yasaka pagoda (March, May and November 2025–26).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'seasonal',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kodaiji, Nene-no-michi — Higashiyama',
    cuisine: 'Yuba lunch restaurant in the Kodaiji grounds · three lunch sets (March 2026): house-made fresh yuba gozen — three yuba with wasabi, sesame and ginger, yuba gratin, the signature creamy yuba rice bowl, grilled nama-fu with miso, white miso soup with sesame tofu, fried yuba in dashi · shrimp and vegetable tempura gozen with yuba-and-shirasu rice and house sansho kombu · yudofu with yuba rice (November 2025) · additive-free domestic soy milk as a welcome drink (August 2026)',
    website: null, gmaps: gm('高台寺羽柴 京都'), menu_url: TB,
    notes: '[Yuba · Kodaiji] A second-floor dining room in the Kodaiji temple precinct, looking out to the Yasaka pagoda, serving lunch sets of house-made yuba from additive-free soy milk: three fresh yuba, a bubbling yuba gratin, the creamy yuba rice bowl, nama-fu dengaku, tempura or yudofu. Lunch daily; evenings during the temple illuminations. Cash only; English menu.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a yuba restaurant on the second floor of 京洛市 ねね, inside the Kodaiji temple precinct next to the Sho Art Museum, making its yuba from additive-free domestic soy milk (August 2026).',
      philosophy: null, specialty: 'House-made fresh yuba; yuba gratin; creamy yuba rice bowl.',
      anecdotes: [
        { text: 'A January 2026 diner found the server fluent in English and explaining each dish in detail, and wanted a second yuba gratin.', source: R + 'B520007002/' },
        { text: 'A May 2026 visitor half-expected a tourist trap from the English menu, then found long windows onto the early-summer green and the five-storey pagoda, and a yuba gozen judged excellent value.', source: R + 'B527863861/' },
      ],
      japanese_sources_summary: '食べログ: 京料理・天ぷら・豆腐料理、東山区高台寺下河原町530 京洛市 ねね 2F、毎日11:00〜15:00 (L.O.14:30)、春・夏・秋 (10月23日〜12月13日) のライトアップ期間は17:00〜19:30 (L.O.) も、寺の行事で臨時休業あり、サービス料なし、チャージ料なし、カード・電子マネー・QR 不可、48席 (すべてテーブル)。口コミ (2025年11月〜2026年8月、英語): 高台寺の境内、Sho Art Museum の隣、1階はギャラリー、窓から八坂の塔、自家製の京湯葉膳、ゆば3種 (わさび・ごま・しょうが)、ゆばグラタン、名物のとろとろのゆばのご飯、生麩田楽、白味噌の味噌汁、海老と野菜の天ぷら膳、ゆばとしらすのご飯、自家製の山椒昆布、湯豆腐、無添加の国産大豆の豆乳、英語のメニュー、英語の話せるスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B517153404/', R + 'B517390342/', R + 'B517696683/', R + 'B518728173/', R + 'B520007002/', R + 'B521682103/', R + 'B524026542/', R + 'B525242003/', R + 'B527863861/', R + 'B531440561/', R + 'B534631811/'] },
    cultural_comfort: { level: 'english', note: 'English menu (May 2026) and an English-speaking server (January 2026). Bring cash. Book ahead in the autumn leaves season.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区高台寺下河原町530 京洛市 ねね 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.000715, 135.779662); cross-checked: GSI 京都府京都市東山区下河原町530番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525242003/', R + 'B517696683/'],
    price_note: 'No set prices quoted in 2025–26 reviews; reviewers report ¥2,000–3,999 per person.', last_checked: TODAY, items: [
      it('', '', 'House-made fresh yuba gozen', '', 'Lunch sets', 'no', 'no', 'March and August 2026.', 'yuba_gozen'),
      it('', '', 'Shrimp and vegetable tempura gozen', '', 'Lunch sets', 'no', 'no', 'March 2026.', 'tempura_gozen'),
      it('', '', 'Yudofu with yuba rice', '', 'Lunch sets', 'no', 'no', 'November 2025.', 'yudofu_set'),
    ] }, {
    cuisine: '高台寺の境内のゆばの昼食の店・3種の昼の膳 (2026年3月): 自家製の京湯葉膳 (わさび・ごま・しょうがのゆば3種、ゆばグラタン、名物のとろとろのゆばのご飯、生麩田楽、ごま豆腐入りの白味噌の味噌汁、揚げゆばの出汁がけ)・海老と野菜の天ぷら膳 (ゆばとしらすのご飯、自家製の山椒昆布)・湯豆腐とゆばのご飯 (2025年11月)・ウェルカムドリンクに無添加の国産大豆の豆乳 (2026年8月)',
    neighborhood: '高台寺、ねねの道。東山',
    gf_detail: 'グルテンフリーではない。ゆばの膳に生麩田楽、天ぷら、ゆばグラタン、醤油の出汁の料理 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁、海老の天ぷら、しらすのご飯、乳製品のグラタン (2025〜2026年の口コミ)。ゆば自体は無添加の国産大豆の豆乳から (2026年8月) だが、ヴィーガンの膳の情報はない。',
    notes: '[ゆば・高台寺] 高台寺の境内、八坂の塔が見える2階の食事処。無添加の豆乳で作る自家製ゆばの昼の膳: 生ゆば3種、熱々のゆばグラタン、とろとろのゆばのご飯、生麩田楽、天ぷらや湯豆腐。昼は毎日、ライトアップの時期は夜も。現金のみ、英語のメニューあり。',
  });
}

// ================================================================ Roppakuya KADO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26023216/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '00:00']);
  put({
    id: 'kyoto_roppakuya_kado', name: 'Roppakuya KADO (ロッパクヤ カド)', category: 'OMNI',
    lat: 35.004469, lng: 135.757541, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pizza, pasta, tempura, gratin, clam chowder in a pastry shell (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat, fish and cheese menu; even the vegetable dishes come with cheese, butter or miso butter (2025–26 reviews).',
    hours_raw: 'Tue–Sun 17:00–24:00 (last order 23:30); closed Monday, but open on a Monday before a holiday (Tabelog). Reservations for seats only — order on the night (Tabelog); booking advised on weekends (January 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 30 seats over three floors: a four-seat counter on the ground floor, tables on the second (private hire up to 22), private sunken-kotatsu rooms on the third (Tabelog; March and July 2026). Down a back alley in Kannondo-cho off Muromachi, about five minutes from Hankyu Karasuma, next door to くぐり鍋 六白屋, which shares the Roppakuya name (Tabelog; July 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Muromachi, north of Shijo — Shijo Karasuma',
    cuisine: 'Western-style izakaya of Kyoto vegetables and wine · Kyoto-vegetable pizza ¥1,250, Kameoka beef yukhoe-style ¥1,500, avocado tartare ¥680 (May 2025) · ¥5,500 all-you-can-drink course with Roppaku black pork bolognese (February 2025) · oven-grilled Manganji peppers, white corn tempura, water-eggplant sashimi, zucchini steak ¥680, chicken neck with lemon butter, ajillo (July 2026) · fig tempura ¥700, whole onion in miso butter ¥590, sautéed apples with house ice cream ¥590 (July 2026) · clam chowder in a pastry shell (January 2026)',
    website: null, gmaps: gm('Roppakuya KADO 京都 室町'), menu_url: TB,
    notes: '[Vegetable izakaya & wine · Shijo-Muromachi] A three-storey back-alley house off Muromachi serving Kyoto vegetables Western-style with wine: Kyoto-vegetable pizza, Manganji peppers from the oven, corn and fig tempura, zucchini steak, pastry-topped clam chowder, pasta and Roppaku black pork. Four-seat counter downstairs, private rooms above. Open to midnight; closed Monday. Sister of くぐり鍋 六白屋 next door.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a Western-style izakaya in Kannondo-cho off Muromachi, next door to くぐり鍋 六白屋 and using the same Roppaku black pork (February 2025).',
      philosophy: null, specialty: 'Kyoto vegetables in Western-style dishes; Kyoto-vegetable pizza.',
      anecdotes: [
        { text: 'A July 2026 pair took the four-seat ground-floor counter and were most surprised by the water-eggplant sashimi and the zucchini steak.', source: R + 'B531572889/' },
        { text: 'A July 2026 diner came in during Gion Matsuri and ordered fig tempura, a whole onion stewed for two days in miso butter, and sautéed apples with house-made ice cream.', source: R + 'B531839152/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、中京区室町新町の間四条上ル観音堂町453-1、火〜日17:00〜24:00 (L.O.23:30)、月曜休み (祝日の前日は営業)、席のみの予約、カード可、電子マネー・QR 不可、30席 (宴会35名)。口コミ (2025年2月〜2026年7月、英語): 隣はくぐり鍋 六白屋、Roppaku 黒豚のボロネーゼ、飲み放題のコース5,500円、京野菜のピザ1,250円、亀岡牛のユッケ風1,500円、アボカドのタルタル680円、万願寺とうがらしのオーブン焼き、白とうもろこしの天ぷら、水なすの刺身、ズッキーニのステーキ680円、いちじくの天ぷら700円、玉ねぎ丸ごとの味噌バター煮590円、りんごのソテーと自家製アイス590円、パイ包みのクラムチャウダー、1階はカウンター4席、2階はテーブル (貸切22名)、3階は掘りごたつの個室、阪急烏丸駅から徒歩約5分。',
      confidence: 'medium', sources: [TB, R + 'B463146536/', R + 'B478336466/', R + 'B505147828/', R + 'B506481354/', R + 'B512516759/', R + 'B517636625/', R + 'B521974004/', R + 'B524347992/', R + 'B530682622/', R + 'B531572889/', R + 'B531839152/', R + 'B532112529/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a seat, then order on the night; ask for the ground-floor counter for two. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町新町の間四条上ル観音堂町453-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004469, 135.757541); cross-checked: GSI 京都府京都市中京区観音堂町453番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506481354/', R + 'B531839152/', R + 'B463146536/'],
    price_note: 'Prices from February and May 2025 and July 2026.', last_checked: TODAY, items: [
      it('', '', 'Kyoto-vegetable pizza', '¥1,250', 'Pizza', 'no', 'no', 'May 2025.', 'veg_pizza'),
      it('', '', 'Kameoka beef, yukhoe-style', '¥1,500', 'Meat', 'ask', 'no', 'May 2025.', 'kameoka_yukhoe'),
      it('', '', 'Zucchini steak with cheese', '¥680', 'Vegetables', 'ask', 'no', 'July 2026.', 'zucchini_steak'),
      it('', '', 'Fig tempura', '¥700', 'Vegetables', 'no', 'ask', 'July 2026.', 'fig_tempura'),
      it('', '', 'All-you-can-drink course', '¥5,500', 'Courses', 'no', 'no', 'February 2025.', 'course'),
    ] }, {
    cuisine: '京野菜とワインの洋風の居酒屋・京野菜のピザ1,250円、亀岡牛のユッケ風1,500円、アボカドのタルタル680円 (2025年5月)・Roppaku 黒豚のボロネーゼ入りの飲み放題のコース5,500円 (2025年2月)・万願寺とうがらしのオーブン焼き、白とうもろこしの天ぷら、水なすの刺身、ズッキーニのステーキ680円、鶏ネックのレモンバター炒め、アヒージョ (2026年7月)・いちじくの天ぷら700円、玉ねぎ丸ごとの味噌バター煮590円、りんごのソテーと自家製アイス590円 (2026年7月)・パイ包みのクラムチャウダー (2026年1月)',
    neighborhood: '室町、四条の北。四条烏丸',
    gf_detail: 'グルテンフリーではない。ピザ、パスタ、天ぷら、グラタン、パイ包みのクラムチャウダー (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉、魚、チーズのメニュー。野菜の料理にもチーズ、バター、味噌バター (2025〜2026年の口コミ)。',
    notes: '[野菜の居酒屋とワイン・四条室町] 室町の路地奥、3階建ての家で京野菜を洋風にワインと: 京野菜のピザ、万願寺とうがらしのオーブン焼き、とうもろこしやいちじくの天ぷら、ズッキーニのステーキ、パイ包みのクラムチャウダー、パスタ、Roppaku 黒豚。1階はカウンター4席、上階は個室。深夜0時まで、月曜休み。隣は同じ六白屋の名のくぐり鍋 六白屋。',
  });
}

save();
