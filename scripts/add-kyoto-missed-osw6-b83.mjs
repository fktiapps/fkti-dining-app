// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 83.
//   - skip 26036500 JUICY MEAT 四条烏丸店 (no review since March 2024; its address is now cafe Prima)
//   + .COFFEE (café near Sanjo Keihan with large lattes, acai bowls and gluten-free cakes) — rest
//   - skip 26044918 スターバックス コーヒー 京都市役所店 (chain)
//   + 焼肉 寅のや 市役所前店 Yakiniku Toranoya (yakiniku next to Kyoto City Hall, sundubu lunches, late on weekends) — rest
//   + 京都祇園ボロニヤ珈琲店 Kyoto Gion Bologna Coffee (café of the Bologna Danish-bread maker, Higashiyama) — rest
//   - skip 26036332 隠れ酒場 ともしび (same brand as 隠れ酒場ともしび3rd, already in data)
//   - skip 26001334 湯波半老舗 (retail food shop, Greg 11-07 ruling)
//   - skip 26042398 HANAKAGO (retail food shop, Greg 11-07 ruling)
//   + 京ゆば工房 Kyo Yuba Kobo (weekend fresh-yuba plates and tofu soft-serve near Yasui Konpiragu) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl and the THAN brand list
//   (than.co.jp/brands, read 2026-11-08): no matches and no earlier rulings for .COFFEE, 寅のや, ボロニヤ, ゆば工房, JUICY MEAT,
//   湯波半 or HANAKAGO; スターバックス was ruled a chain (26003270, osw1-44); ともしび3rd is in data.
//   Same-name counts (2026-11-08): .COFFEE — one. 寅のや 市役所前店 — the other Tabelog "Toranoya" listings are unrelated
//   names; a September 2024 review calls it the sister shop of a Korean restaurant in Minami Ward. ボロニヤ — about four
//   Tabelog listings (Kyoto Gion café, Sendai, Shin-Tanabe, BOLONIYA). 京ゆば工房 — one.
//   None of the four drafted is in data/kyoto.json.
//   Charges: none listed on Tabelog for the four. No halal claims; no owner deaths; single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-83');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26036500', 'thin / likely gone: JUICY MEAT 四条烏丸店 has no Tabelog review since March 2024, and its address (手洗水町671 B1F) is now cafe Prima, already in data (https://tabelog.com/en/kyoto/A2601/A260201/26036500/).');
skip('26044918', 'chain: Starbucks (earlier ruling on 26003270, osw1-44) (https://tabelog.com/en/kyoto/A2601/A260201/26044918/).');
skip('26036332', 'same brand already in data: 隠れ酒場 ともしび is the same brand as 隠れ酒場ともしび3rd (https://tabelog.com/en/kyoto/A2601/A260201/26036332/).');
skip('26001334', 'retail food shop (Greg 11-07 ruling): 湯波半老舗 is a yuba maker and shop; its site says 「1716年（享保元年）創業のゆばの製造・小売専門店」 but no family succession or GF/vegan claim is sourced, and 2025–26 reviews are about takeaway yuba (https://yubahan.com/; https://tabelog.com/en/kyoto/A2601/A260202/26001334/).');
skip('26042398', 'retail food shop (Greg 11-07 ruling): HANAKAGO is a takeaway bakery, opened January 2025, that also supplies restaurants (https://tabelog.com/en/kyoto/A2601/A260202/26042398/).');

// ================================================================ .COFFEE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036860/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_dot_coffee', name: '.COFFEE', category: 'OMNI',
    lat: 35.009503, lng: 135.77557, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A December 2025 diner found gluten-free cheesecake and chocolate cake made without wheat; other cakes and snacks are not described. No cross-contact information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The gluten-free cakes were made without soy milk (December 2025), but no vegan claim is sourced; the acai bowl comes with honey (August 2025).',
    hours_raw: 'Hours not listed on Tabelog; check before visiting. Reviews mention Saturday early afternoon (December 2025) and lunch (August 2025). E-money and QR accepted (Tabelog). Non-smoking (Tabelog). Counter seats at the front, sofas and tables at the back (December 2025). Wi-Fi (December 2024) and phone charging (January 2025). Near Sanjo Keihan Station (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Sanjo Keihan — Higashiyama',
    cuisine: 'Small café with espresso drinks and light snacks · large café latte ¥650, about 1.5 times the usual size (February 2025) · acai bowl with banana, berries, mango, coconut and chocolate granola, drizzled with honey (August 2025) · gluten-free cheesecake and chocolate cake (December 2025)',
    website: null, gmaps: gm('.COFFEE ドットコーヒー 京都 三条'), menu_url: TB,
    notes: '[Café · Sanjo Keihan] A small café near Sanjo Keihan with a counter at the front and sofas at the back, serving strong espresso drinks in large sizes, acai bowls and cakes — including gluten-free cheesecake and chocolate cake. Wi-Fi. Hours not listed; check first.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a café near Sanjo Keihan Station, opened 29 October 2021.',
      philosophy: null, specialty: 'Large espresso drinks; acai bowls; gluten-free cakes.',
      anecdotes: [
        { text: 'A December 2025 Saturday visitor was surprised to find gluten-free cheesecake and chocolate cake, made without wheat or soy milk; the sofa seats filled within an hour.', source: R + 'B518440847/' },
        { text: 'A February 2025 walker ordered a large café latte for ¥650 and got about one and a half times the expected size, with very strong espresso.', source: R + 'B501357792/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、京阪三条駅近く、2021年10月29日オープン、電子マネー・QR 可、全席禁煙、営業時間の記載なし。口コミ (2024年12月〜2025年12月、英語): Wi-Fi、充電可、ラージのカフェラテ650円は約1.5倍の量、フルーツとグラノーラにはちみつのアサイーボウル、小麦も豆乳も使わないグルテンフリーのチーズケーキとチョコレートケーキ、手前にカウンター、奥にソファ席。',
      confidence: 'low', sources: [TB, R + 'B498049168/', R + 'B499672395/', R + 'B501357792/', R + 'B512503077/', R + 'B518440847/', R + 'B519888610/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; ask whether the gluten-free cakes are in stock that day. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区3-35-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.009503, 135.775570); the listed address (東山区3-35-7) names no town, so no GSI lot cross-check — approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B501357792/', R + 'B512503077/', R + 'B518440847/'],
    price_note: 'One price from February 2025; reviewers report up to ¥1,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Café latte, large', '¥650', 'Drinks', 'ask', 'no', 'February 2025.', 'latte_large'),
      it('', '', 'Acai bowl (fruit, chocolate granola, honey)', '', 'Food', 'ask', 'no', 'August 2025.', 'acai_bowl'),
      it('', '', 'Gluten-free cheesecake', '', 'Cakes', 'ask', 'ask', 'December 2025; no wheat or soy milk.', 'gf_cheesecake'),
      it('', '', 'Gluten-free chocolate cake', '', 'Cakes', 'ask', 'ask', 'December 2025; no wheat or soy milk.', 'gf_choc_cake'),
    ] }, {
    cuisine: 'エスプレッソドリンクと軽食の小さなカフェ・約1.5倍の量のラージのカフェラテ650円 (2025年2月)・バナナ、ベリー、マンゴー、ココナッツ、チョコグラノーラにはちみつのアサイーボウル (2025年8月)・グルテンフリーのチーズケーキとチョコレートケーキ (2025年12月)',
    neighborhood: '京阪三条駅近く。東山',
    gf_detail: '要確認。2025年12月の口コミでは、小麦を使わないグルテンフリーのチーズケーキとチョコレートケーキがあった。ほかのケーキや軽食の情報なし。交差接触の情報なし。',
    vegan_detail: '要確認。グルテンフリーのケーキは豆乳も不使用 (2025年12月) だが、ヴィーガンの記載はない。アサイーボウルにはちみつ (2025年8月)。',
    notes: '[カフェ・京阪三条] 手前にカウンター、奥にソファ席のある京阪三条近くの小さなカフェ。濃いエスプレッソのドリンクを大きなサイズで。アサイーボウルやケーキも、グルテンフリーのチーズケーキとチョコレートケーキあり。Wi-Fi。営業時間の記載なし、事前に確認を。',
  });
}

// ================================================================ 焼肉 寅のや 市役所前店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041684/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']); const L = day(['17:00', '03:00']);
  put({
    id: 'kyoto_yakiniku_toranoya_shiyakushomae', name: '焼肉 寅のや 市役所前店 (Yakiniku Toranoya, Shiyakushomae)', category: 'OMNI',
    lat: 35.01152, lng: 135.767158, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: yakiniku with marinades and dipping sauces, mixed noodles, kimchi-based sundubu (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: grilled beef and offal, yukhoe, horumon sundubu (2024–26 reviews).',
    hours_raw: 'Mon, Tue, Wed, Sun 17:00–22:00; Fri–Sat 17:00–03:00; closed Thursday (Tabelog). Lunch is also served — sundubu sets, mixed noodles, steak rice bowl (July and November 2025); lunch hours not listed. Popular cuts can sell out by 18:00 (March 2025); some items, including kalbi, were out in May 2026. Payment: Tabelog lists cards and QR (no e-money), but a March 2025 diner was told cash only and no invoices — bring cash. Private rooms; smoking allowed (Tabelog). Next to Kyoto City Hall, above Kyoto Shiyakusho-mae subway station (May 2026).',
    hours: { 0: H, 1: H, 2: H, 4: L, 5: L, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto City Hall — Kawaramachi Oike',
    cuisine: 'Yakiniku from a sister shop of a Korean restaurant in Minami Ward · salads, namul, kimchi, special yukhoe, fresh heart, salted tongue with green onion, thick-cut tenderloin (September 2024) · thick-cut beef tongue (March 2025) · lunch: horumon sundubu set with bean-sprout and eggplant namul (July 2025), mixed noodles, steak rice bowl (November 2025) · a wide drinks list (May 2026)',
    website: null, gmaps: gm('焼肉 寅のや 市役所前店'), menu_url: TB,
    notes: '[Yakiniku · Kyoto City Hall] A yakiniku restaurant beside Kyoto City Hall, sister to a Korean restaurant in Minami Ward: thick-cut tongue and tenderloin, yukhoe and namul at night, and sundubu, mixed noodles and steak bowls at lunch. Open to 3:00 on Friday and Saturday; closed Thursday. Bring cash — a 2025 diner was told cash only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: opened 1 August 2024 near Kyoto City Hall as the sister shop of a well-known Korean restaurant in Minami Ward (September 2024).',
      philosophy: null, specialty: 'Thick-cut beef tongue; horumon sundubu.',
      anecdotes: [
        { text: 'A July 2025 lunch diner chose the horumon sundubu set on a hot day; the kimchi-based soup was milder than expected and arrived in a little over five minutes.', source: R + 'B509365797/' },
        { text: 'A March 2025 diner, expecting cards from the Tabelog listing, was told cash only; many items had sold out by 18:00, but the thick-cut tongue impressed.', source: R + 'B525421535/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉、中京区上本能寺前町480-3、月火水日17:00〜22:00、金土17:00〜翌3:00、木曜休み、カード・QR 可 (電子マネー不可)、個室あり、喫煙可、2024年8月1日オープン。口コミ (2024年9月〜2026年5月、英語): 南区の有名な韓国料理店の姉妹店、特製ユッケ、ハツ、ねぎ塩タン、厚切りヒレ、2025年3月は現金のみでインボイス未登録と言われた、18時には売り切れ多数、厚切りタン、ランチはホルモンスンドゥブ定食や麺料理、ステーキ丼、遅くまで営業、市役所前駅の真上、ドリンクが豊富、カルビがない日も。',
      confidence: 'medium', sources: [TB, R + 'B491516780/', R + 'B509365797/', R + 'B517272575/', R + 'B525421535/', R + 'B528721641/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bring cash even though Tabelog lists cards; arrive early in the evening, as popular cuts sell out. Smoking is allowed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区上本能寺前町480-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.011520, 135.767158); cross-checked: GSI 京都府京都市中京区上本能寺前町480番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B491516780/'],
    price_note: 'Prices from September 2024; reviewers report ¥3,000–9,999 per person at dinner and ¥1,000–1,999 at lunch.', last_checked: TODAY, items: [
      it('', '', 'Special yukhoe', '¥1,580', 'Meat', 'no', 'no', 'September 2024.', 'yukhoe'),
      it('', '', 'Salted beef tongue with green onion', '¥1,600', 'Meat', 'no', 'no', 'September 2024.', 'negi_tan'),
      it('', '', 'Thick-cut tenderloin', '¥2,600', 'Meat', 'no', 'no', 'September 2024.', 'hire'),
      it('', '', 'Assorted namul', '¥800', 'Sides', 'no', 'no', 'September 2024.', 'namul'),
      it('', '', 'Assorted kimchi', '¥900', 'Sides', 'no', 'no', 'September 2024.', 'kimchi'),
      it('', '', 'Horumon sundubu set (lunch)', '', 'Lunch', 'no', 'no', 'July 2025.', 'sundubu'),
    ] }, {
    cuisine: '南区の韓国料理店の姉妹店の焼肉・サラダ、ナムル、キムチ、特製ユッケ、ハツ、ねぎ塩タン、厚切りヒレ (2024年9月)・厚切りタン (2025年3月)・ランチはもやしとなすのナムル付きのホルモンスンドゥブ定食 (2025年7月)、麺料理、ステーキ丼 (2025年11月)・豊富なドリンク (2026年5月)',
    neighborhood: '京都市役所前。河原町御池',
    gf_detail: 'グルテンフリーではない。たれやつけだれの焼肉、麺料理、キムチベースのスンドゥブ (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛肉とホルモンの焼肉、ユッケ、ホルモンスンドゥブ (2024〜2026年の口コミ)。',
    notes: '[焼肉・京都市役所前] 京都市役所のそば、南区の韓国料理店の姉妹店の焼肉店。夜は厚切りタンや厚切りヒレ、ユッケ、ナムル。昼はスンドゥブ、麺料理、ステーキ丼。金土は翌3時まで、木曜休み。2025年に現金のみと言われた口コミあり、現金の用意を。',
  });
}

// ================================================================ 京都祇園ボロニヤ珈琲店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038642/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_gion_boloniya_coffee', name: '京都祇園ボロニヤ珈琲店 (Kyoto Gion Bologna Coffee)', category: 'OMNI',
    lat: 35.007297, lng: 135.778039, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the menu is built on the maker’s Danish bread — honey-cheese toast, pizza toast (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Danish-bread toasts with cheese and honey (2025–26 reviews); no vegan item sourced.',
    hours_raw: 'Daily 9:00–18:00 (last order 17:00); irregular closures (Tabelog). Order at the counter on the first floor, then sit upstairs in the second-floor café (January and October 2026). Reservations taken (Tabelog). Cards, e-money and QR (Tabelog). 46 seats (Tabelog). Power outlets and Wi-Fi (November 2025). Danish bread to take away is sold too (November 2025, October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion — Higashiyama',
    cuisine: 'Café of the Kyoto Bologna Danish-bread maker · honey-cheese toast on thick Danish bread with tea in a large pot (January 2026) · cream soda (February 2026) · pizza toast on a wooden board (October 2026) · Danish bread to take home',
    website: 'https://r.goope.jp/boloniyacoffee', gmaps: gm('京都祇園ボロニヤ珈琲店'), menu_url: TB,
    notes: '[Café · Gion] The café of Bologna, the Kyoto maker of Danish bread loaves: order downstairs, then eat thick honey-cheese toast or pizza toast in a roomy second-floor café with outlets and Wi-Fi. Daily 9:00–18:00.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a café opened 24 November 2022 by Bologna, a maker of Danish bread sold in Kyoto and online.',
      philosophy: null, specialty: 'Toasts on Danish bread.',
      anecdotes: [
        { text: 'An August 2026 visitor who had ordered the Danish bread online for about 20 years finally came to Kyoto with family to eat it in person.', source: R + 'B533648253/' },
        { text: 'A January 2026 brunch guest tried the most popular dish, the honey-cheese toast, on bread thick enough to fill up on its own; the set tea came in a large cup for about one and a half servings.', source: R + 'B521022070/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・喫茶店、東山区稲荷町南組577-1、毎日9:00〜18:00 (L.O.17:00)、不定休、予約可、カード・電子マネー・QR 可、46席、2022年11月24日オープン。口コミ (2025年11月〜2026年10月、英語): 2階に広いカフェ、電源と Wi-Fi、1階で注文、デニッシュパンのチーズはちみつトースト、セットの紅茶は大きなカップ、クリームソーダ、ピザトースト、通販で約20年買っている客が来店、テイクアウトも。',
      confidence: 'medium', sources: [TB, 'https://r.goope.jp/boloniyacoffee', R + 'B518057109/', R + 'B521022070/', R + 'B523684444/', R + 'B533648253/', R + 'B537511995/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the ground-floor counter, then go upstairs to sit. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区稲荷町南組577-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007369, 135.778039); cross-checked: GSI 京都府京都市東山区稲荷町南組577番地 (lot) 18m; offset 8 m south from the Tabelog point so as not to stack on 喫茶 六花 (577-4, same lot); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521022070/', R + 'B537511995/'],
    price_note: 'No prices quoted in 2025–26 reviews; reviewers report ¥1,000–1,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Honey-cheese toast on Danish bread', '', 'Toast', 'no', 'no', 'January 2026; the most popular dish.', 'cheese_honey_toast'),
      it('', '', 'Pizza toast', '', 'Toast', 'no', 'no', 'October 2026.', 'pizza_toast'),
      it('', '', 'Cream soda', '', 'Drinks', 'ask', 'ask', 'February 2026.', 'cream_soda'),
    ] }, {
    cuisine: '京都のデニッシュパンのメーカー、ボロニヤのカフェ・厚いデニッシュパンのチーズはちみつトーストと大きなポットの紅茶 (2026年1月)・クリームソーダ (2026年2月)・木の板にのったピザトースト (2026年10月)・持ち帰りのデニッシュパン',
    neighborhood: '祇園。東山',
    gf_detail: 'グルテンフリーではない。デニッシュパンのメニューが中心、チーズはちみつトースト、ピザトースト (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。チーズやはちみつのデニッシュトースト (2025〜2026年の口コミ)。ヴィーガンのメニューの情報なし。',
    notes: '[カフェ・祇園] 京都のデニッシュパンのメーカー、ボロニヤのカフェ。1階で注文し、電源と Wi-Fi のある広い2階で厚いチーズはちみつトーストやピザトーストを。毎日9:00〜18:00。',
  });
}

// ================================================================ 京ゆば工房
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26030356/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '17:00']);
  put({
    id: 'kyoto_kyo_yuba_kobo', name: '京ゆば工房 (Kyo Yuba Kobo)', category: 'OMNI',
    lat: 34.998729, lng: 135.777573, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fresh yuba is served with ponzu (2025–26 reviews); ponzu is usually made with soy sauce, which often contains wheat — ask about the sauce, or for the yuba plain.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fresh yuba and hot soy milk are soy products (2024–26 reviews), but the ponzu may contain fish stock and no vegan claim is sourced; the tofu soft-serve’s ingredients are not described.',
    hours_raw: 'Sat–Sun 12:00–17:00; closed Monday to Friday; may change (Tabelog). A small yuba workshop selling fresh yuba to eat on the spot — a ¥300 plate with ponzu (February 2025, September 2026) — with a bench outside (March 2025); you can watch it being made (February 2025). No cards; e-money accepted; no QR (Tabelog). No reservations (Tabelog). A February 2025 visitor stopped by between Yasui Konpiragu and Yasaka Koshindo.',
    hours: { 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Yasui Konpiragu — Higashiyama',
    cuisine: 'Yuba workshop serving fresh yuba to eat on the spot · fresh yuba plate with ponzu ¥300 (February 2025, September 2026) · hot soy milk (December 2024) · tofu soft-serve with a rich, firm-tofu flavour (March 2025)',
    website: null, gmaps: gm('京ゆば工房 京都 東山'), menu_url: TB,
    notes: '[Yuba · Higashiyama] A small yuba workshop near Yasui Konpiragu, open weekend afternoons: a ¥300 plate of freshly made yuba with ponzu, hot soy milk, and tofu soft-serve, eaten on the bench outside while you watch the yuba being made. A warm welcome from the owner.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), described as friendly (February 2025)'], origin: null,
      background: 'Per Tabelog and reviews: a yuba workshop in Higashiyama selling freshly made yuba to eat on the spot, open on weekend afternoons.',
      philosophy: null, specialty: 'Fresh yuba with ponzu.',
      anecdotes: [
        { text: 'A February 2025 sightseer, between Yasui Konpiragu and Yasaka Koshindo, spotted the sign for a ¥300 fresh-yuba plate, watched it being made, and was seen off with a loud “Thank you!” from the owner.', source: R + 'B500475602/' },
        { text: 'On a cold December 2024 day a visitor warmed up with hot soy milk and fresh yuba.', source: R + 'B497439990/' },
      ],
      japanese_sources_summary: '食べログ: 豆腐料理、東山区玉水町71-8、土日12:00〜17:00、月〜金休み、カード不可、電子マネー可、QR 不可、予約不可。口コミ (2024年12月〜2026年9月、英語): 生ゆば一皿300円をポン酢で、作るところが見られる、店主が元気に見送り、外のベンチで豆腐屋のソフトクリーム、熱い豆乳と生ゆば、温かいスタッフ、安井金比羅宮から八坂庚申堂へ向かう途中に立ち寄り、清水寺を訪れる際にまた来たいとの声。',
      confidence: 'medium', sources: [TB, R + 'B497439990/', R + 'B500475602/', R + 'B502755674/', R + 'B504558271/', R + 'B522465831/', R + 'B536699934/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Eat on the bench outside; bring e-money or cash, as cards are not taken. Weekends only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区玉水町71-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.998729, 135.777573); cross-checked: GSI 京都府京都市東山区玉水町71番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B500475602/', R + 'B536699934/'],
    price_note: 'One price from February 2025 and September 2026; reviewers report under ¥1,000 per person.', last_checked: TODAY, items: [
      it('', '', 'Fresh yuba plate with ponzu', '¥300', 'Yuba', 'ask', 'ask', 'February 2025 and September 2026.', 'nama_yuba'),
      it('', '', 'Hot soy milk', '', 'Drinks', 'ask', 'ask', 'December 2024.', 'tonyu'),
      it('', '', 'Tofu soft-serve', '', 'Sweets', 'ask', 'ask', 'March 2025.', 'tofu_softserve'),
    ] }, {
    cuisine: 'その場で食べる出来たての生ゆばのゆば工房・ポン酢の生ゆば一皿300円 (2025年2月、2026年9月)・熱い豆乳 (2024年12月)・木綿豆腐のような濃い味の豆腐ソフトクリーム (2025年3月)',
    neighborhood: '安井金比羅宮の近く。東山',
    gf_detail: '要確認。生ゆばはポン酢で (2025〜2026年の口コミ)。ポン酢は通常醤油を使い、醤油には小麦が入ることが多い。たれを確認するか、何もかけずに頼めるか確認を。',
    vegan_detail: '要確認。生ゆばと豆乳は大豆製品 (2024〜2026年の口コミ) だが、ポン酢に魚の出汁が入る可能性があり、ヴィーガンの記載はない。豆腐ソフトクリームの材料の情報なし。',
    notes: '[ゆば・東山] 安井金比羅宮近くの小さなゆば工房。週末の午後だけ営業。作るところを見ながら、出来たての生ゆばのポン酢一皿300円、熱い豆乳、豆腐ソフトクリームを外のベンチで。店主の温かい見送り。',
  });
}

save();
