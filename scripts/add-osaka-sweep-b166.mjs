// Osaka sweep (2-mile circle around Dotonbori), batch 166 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + 鉄板工房 Panyo (12-seat teppanyaki on Dotonbori with a river-view semi-private room)
//   + 不純喫茶 アルテミス (Showa-retro night café, pudding and whisky to 6 am; Souemoncho)
//   + 月虹 (10-seat teppanyaki and Gekko-yaki round counter; Higashi-Shinsaibashi)
//   + 韓国料理コモネ (16-seat basement Korean, soy-marinated crab; Sennichimae) — mom
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 166);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鉄板工房 Panyo
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27122776/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_teppan_kobo_panyo_dotonbori', name: '鉄板工房 Panyo (Teppan Kobo Panyo)', category: 'OMNI',
    lat: 34.668724, lng: 135.498493, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The staff-maintained Tabelog listing asks guests to mention allergies and food preferences when booking; nothing describes how gluten is handled on the shared teppan. The tenderloin comes with salt, garlic and wasabi (December 2025); the courses also include a burger, garlic rice and dessert.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: courses built around Wagyu steak, live shrimp and abalone; nothing described as vegan.',
    hours_raw: 'Daily 11:30–15:00 (last order 14:00) and 17:00–22:00 (last order 20:30) (Tabelog). Reservations taken. Semi-private room fee: ¥500 per person at lunch, ¥3,000 per room at dinner (Tabelog). Cards and e-money accepted; no QR (Tabelog). E-cigarettes only, in the semi-private room (Tabelog).',
    hours: ALL(day(['11:30', '15:00'], ['17:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 2-4-10, Chiyonoya Bldg 1F, street level — 4 min from Namba Stn exit 25',
    cuisine: 'Teppanyaki steak and seafood at a 7-seat counter · Panyo Dinner course: seared meat sushi, Panyo burger, domestic tenderloin steak (9 items) · steak from Special Wagyu or Matsusaka beef · live shrimp and abalone from the tank · lunch courses; meat can be raised to 100 g · garlic rice (+¥880, with chicken soup) or curry to finish · wine list · semi-private room for up to 5 with a Dotonbori River view',
    website: null, gmaps: gm('鉄板工房 Panyo'), menu_url: TB + 'dtlmenu/',
    notes: "[Teppanyaki · a 12-seat Dotonbori teppan counter with a river-view room] A small teppanyaki restaurant at street level on Dotonbori: seven counter seats facing the griddle and a semi-private room at the back that looks out on the Dotonbori River. The house course, the Panyo Dinner, runs through seared meat sushi, a Panyo burger and a domestic tenderloin; steaks can be upgraded to Special Wagyu or Matsusaka beef, and shrimp and abalone come live from the tank. A December 2025 course had grilled turnip, pumpkin and green onion and an 80 g tenderloin with salt, garlic and wasabi, then garlic rice with a light chicken soup. Diners have booked lunch courses for celebrations; on request the kitchen cooked the meat sushi through, and a birthday dessert came with fireworks in place of candles and a message. Dinner about ¥8,000–10,000, lunch ¥3,000–4,000 (Tabelog).",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Teppanyaki restaurant with a staff-maintained Tabelog listing (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Teppanyaki Wagyu steak and live seafood.',
      anecdotes: [
        { text: '"…this restaurant features a counter facing the teppan and private rooms in the back. The view of the Dotonbori River from the private rooms is simply stunning…" — December 2025, course.', source: R + 'B518373184/' },
        { text: '"The lean meat is refreshing, and you can enjoy it with salt, garlic, and wasabi for a delightful flavor change." — December 2025, Japanese beef tenderloin steak (80 g).', source: R + 'B518720249/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 鉄板工房 Panyo、大阪市中央区道頓堀2-4-10 千代の家ビル 1F、なんば駅25番出口から徒歩4分、毎日11:30〜15:00 (L.O. 14:00)、17:00〜22:00 (L.O. 20:30)、予約可、アレルギーや好みは事前に相談、12席 (カウンター7席、半個室1)、個室料はランチ500円/人・ディナー3,000円/室、カード・電子マネー可、QR不可、予算はディナー8,000〜9,999円、ランチ3,000〜3,999円。和牛、活け海老、活けあわび、特選和牛か松阪牛のステーキ、Panyo Dinner (肉の炙り寿司、Panyoバーガー、国産ヒレステーキ、9品)。口コミ(2025年12月〜2026年8月): 鉄板の前のカウンターと奥の個室、個室から道頓堀川が見える、季節の焼き野菜 (かぶ、かぼちゃ、ねぎ)、国産牛ヒレ80gを塩・にんにく・わさびで、Panyo風ガーリックライス (+880円、鶏のスープつき) かカレー、ランチコースで肉を100gに、お祝いのデザートに花火とメッセージ、頼めば肉寿司にしっかり火を通してくれた。',
      confidence: 'medium', sources: [TB, R + 'B518373184/', R + 'B518720249/', R + 'B527193684/', R + 'B528869498/', R + 'B530871274/', R + 'B534712927/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter cooking in front of you; semi-private room for groups (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀2-4-10 千代の家ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀二丁目4番10号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B518720249/'],
    price_note: 'Course contents from the Tabelog listing; garlic rice price from a December 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Panyo Dinner course (seared meat sushi, Panyo burger, domestic tenderloin; 9 items)', '', 'Courses', 'ask', 'no', 'Tabelog listing.', 'panyo_dinner'),
      it('', '', 'Japanese beef tenderloin steak (80 g), with salt, garlic and wasabi', '', 'Courses', 'ask', 'no', 'December 2025.', 'tenderloin'),
      it('', '', 'Panyo-style garlic rice with chicken soup', '+¥880', 'Courses', 'ask', 'no', 'December 2025.', 'garlic_rice'),
      it('', '', 'Lunch course', '', 'Lunch', 'ask', 'no', 'March–June 2026.', 'lunch'),
    ] }, {
    cuisine: '7席のカウンターで鉄板焼きのステーキと海鮮・Panyo Dinner: 肉の炙り寿司、Panyoバーガー、国産ヒレステーキ (9品)・ステーキは特選和牛か松阪牛・生け簀の活け海老と活けあわび・ランチコース、肉は100gにも・しめはガーリックライス (+880円、鶏のスープつき) かカレー・ワイン・道頓堀川が見える5人までの半個室',
    neighborhood: '道頓堀2-4-10 千代の家ビル 1F、通りに面した店。なんば駅25番出口から徒歩4分',
    gf_detail: '要確認。店舗会員の食べログ情報はアレルギーや好みを予約時に伝えるよう案内しているが、共用の鉄板でのグルテンの扱いは書かれていない。ヒレは塩、にんにく、わさびで (2025年12月)。コースにはバーガー、ガーリックライス、デザートも。',
    vegan_detail: '実質ヴィーガンではありません。和牛ステーキ、活け海老、あわびが中心のコース。ヴィーガンの記載なし。',
    notes: '[鉄板焼き・道頓堀、川が見える部屋のある12席の鉄板カウンター] 道頓堀の通りに面した小さな鉄板焼きの店で、鉄板に向かうカウンター7席と、奥に道頓堀川を望む半個室。看板コースのPanyo Dinnerは肉の炙り寿司、Panyoバーガー、国産ヒレへと続き、ステーキは特選和牛や松阪牛に変更でき、海老とあわびは生け簀から。2025年12月のコースはかぶ、かぼちゃ、ねぎの焼き野菜に、塩・にんにく・わさびで食べる80gのヒレ、しめに鶏のスープつきのガーリックライス。ランチコースをお祝いに使ったという声があり、頼めば肉寿司にしっかり火を通してくれ、誕生日のデザートには花火とメッセージ。ディナー約8,000〜10,000円、ランチ3,000〜4,000円 (食べログ)。',
  });
}

// ================================================================ 不純喫茶 アルテミス
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27139617/'; const R = TB + 'dtlrvwlst/';
  const NIGHT = day(['19:00', '06:00']); const WKND = day(['13:00', '06:00']);
  put({
    id: 'osaka_fujun_kissa_artemis_souemoncho', name: '不純喫茶 アルテミス (Fujun Kissa Artemis)', category: 'OMNI',
    lat: 34.670097, lng: 135.504412, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the menu includes pudding, terrine, pancakes, a banana split and Neapolitan pasta.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information; desserts, pasta and drinks are not described in detail.',
    hours_raw: 'Mon–Fri 19:00–06:00; Sat, Sun and holidays 13:00–06:00; last order 05:30; open year-round (Tabelog). No reservations; a waiting board at the door, sometimes a short line (2026). Table charge ¥550 (Tabelog). Cards, e-money and PayPay listed (Tabelog), but one diner was asked to pay cash on a bill under ¥5,000 (March 2026). Smoking allowed (Tabelog).',
    hours: { 0: NIGHT, 1: NIGHT, 2: NIGHT, 3: NIGHT, 4: NIGHT, 5: WKND, 6: WKND }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Souemoncho 2-25, Minami Bldg 2F, up a flight of stairs — between Nippombashi and Shinsaibashi',
    cuisine: 'Showa-retro night café · pudding · terrine · banana split · pancakes · Neapolitan pasta under an omelet · cold coffee · cocktails, wine and whisky such as Macallan · zodiac fortune slips · counter, sofa seats and two private rooms (20 seats)',
    website: null, gmaps: gm('不純喫茶 アルテミス'), menu_url: TB + 'dtlmenu/',
    notes: "[Café · a Showa-retro night kissa open until 6 am, Souemoncho] A second-floor night café off Souemoncho, done up in Showa-retro style, that opens at 19:00 on weekdays (13:00 at weekends) and runs until 6 am. The draw is dessert with a drink: pudding with a glass of Macallan, a rich, moist terrine, a banana split, or pancakes with cold coffee; there's also Neapolitan pasta under an omelet, cocktails and wine. One diner praised the cute plating, another the hidden-gem feel; at 4 am it was quiet. No reservations, and at weekend afternoons there's a waiting board at the door. ¥550 table charge; smoking allowed. Cards are listed, but one diner was asked for cash on a small bill.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Night café with a staff-maintained Tabelog listing (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Pudding and drinks late at night.',
      anecdotes: [
        { text: '"I visited this night cafe in Minami around 4 AM, and it was very quiet with a lovely atmosphere… One thing to note is that if your bill is under JPY 5000, [cash is requested]…" — March 2026.', source: R + 'B525810363/' },
        { text: '"This time, I had pancakes, which paired perfectly with cold coffee! We also shared a Neapolitan pasta topped with an omelet…" — July 2026.', source: R + 'B535585140/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 不純喫茶 アルテミス、大阪市中央区宗右衛門町2-25 南ビル 2F、日本橋駅から375m、月〜金19:00〜翌6:00、土日祝13:00〜翌6:00 (L.O. 5:30)、年中無休、予約不可、チャージ550円、カード・電子マネー・PayPay可、喫煙可、20席 (カウンター4、ソファ席、個室2)。口コミ(2026年2〜7月): 昭和レトロの夜カフェ、プリン、マッカラン、テリーヌ、バナナスプリット、パンケーキとアイスコーヒー、オムレツをのせたナポリタン、星座のおみくじ、土曜の午後は入口に順番待ちのボード、ときどき行列、午前4時は静か、5,000円未満は現金でと頼まれたという声。',
      confidence: 'medium', sources: [TB, R + 'B523579247/', R + 'B523928099/', R + 'B524512399/', R + 'B525810363/', R + 'B530414665/', R + 'B535585140/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Late-night café; waiting board at the door (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町2-25 南ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町2番25号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523579247/', R + 'B535585140/'],
    price_note: 'No prices in the reviews; about ¥1,000–3,000 per person (Tabelog, reviews) plus ¥550 table charge.', last_checked: TODAY, items: [
      it('', '', 'Custard pudding', '', 'Sweets', 'ask', 'ask', 'February–June 2026.', 'pudding'),
      it('', '', 'Banana split', '', 'Sweets', 'ask', 'ask', 'March 2026.', 'banana_split'),
      it('', '', 'Pancakes', '', 'Sweets', 'ask', 'ask', 'July 2026.', 'pancakes'),
      it('', '', 'Neapolitan pasta with omelet', '', 'Food', 'no', 'ask', 'July 2026.', 'napolitan'),
    ] }, {
    cuisine: '昭和レトロの夜カフェ・プリン・テリーヌ・バナナスプリット・パンケーキ・オムレツをのせたナポリタン・アイスコーヒー・カクテル、ワイン、マッカランなどのウイスキー・星座のおみくじ・カウンター、ソファ席、個室2 (20席)',
    neighborhood: '宗右衛門町2-25 南ビル 2F、階段を上がった先。日本橋駅と心斎橋駅の間',
    gf_detail: '要確認。グルテンの情報なし。メニューにはプリン、テリーヌ、パンケーキ、バナナスプリット、ナポリタン。',
    vegan_detail: '要確認。ヴィーガンの情報なし。デザート、パスタ、ドリンクの詳しい説明なし。',
    notes: '[カフェ・宗右衛門町、朝6時まで開く昭和レトロの夜喫茶] 宗右衛門町の2階にある昭和レトロの夜カフェで、平日は19時 (土日は13時) から朝6時まで。デザートとお酒の組み合わせが楽しみで、プリンにマッカラン、濃厚でしっとりしたテリーヌ、バナナスプリット、パンケーキにアイスコーヒー。オムレツをのせたナポリタン、カクテル、ワインも。盛りつけがかわいいという声、隠れ家のようだという声、朝4時は静かだったという声も。予約不可、週末の午後は入口に順番待ちのボード。チャージ550円、喫煙可。カードは使えると掲載されているが、少額は現金でと頼まれたという声も。',
  });
}

// ================================================================ 月虹
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27099997/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_gekko_teppan_higashishinsaibashi', name: '月虹 (Gekko)', category: 'OMNI',
    lat: 34.671341, lng: 135.503601, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the signature Gekko-yaki and okonomiyaki use a batter, the yakisoba is wheat noodles, and sauces are not described. Grilled seafood with salt and grilled asparagus are on the menu; ask about the shared teppan.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: pork, seafood, beef and eggs through the menu; stir-fried vegetables come topped with abura-kasu (fried beef offal).',
    hours_raw: 'Daily 18:00–23:30; closed on some irregular days (Tabelog). Opened 27 May 2017, formerly 鉄板ダイニング KAYA (Tabelog). Reservations taken; the shop may decline students, and children need prior consultation (Tabelog). Dress code: no sandals, sweatpants, jerseys or work clothes (Tabelog). Cards accepted; no e-money or QR (Tabelog). Heated tobacco only (Tabelog).',
    hours: ALL(day(['18:00', '23:30'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-5-19, Minami Grand Kaikan 1F, tucked into a corner of the building — 3 min from Shinsaibashi Stn',
    cuisine: 'Teppanyaki and okonomiyaki at a 6-seat counter (plus a table for 4) · Gekko-yaki, a fluffy egg-and-cabbage okonomiyaki-style dish with thick pork; kimchi-cheese version ¥2,700 · seafood yakisoba carbonara ¥2,500 · grilled shrimp, squid and scallops with salt ¥2,000–2,400 · stir-fried vegetables with abura-kasu ¥1,000 · curry yakisoba · grilled fatty beef intestine with salt · Japanese omelet; grilled asparagus · A5 Saga beef filet course · about 10 red wines; kaku highball ¥750',
    website: null, gmaps: gm('月虹'), menu_url: TB + 'dtlmenu/',
    notes: "[Teppanyaki · a 10-seat round-counter teppan with its own Gekko-yaki, Higashi-Shinsaibashi] A calm, grown-up teppanyaki bar in a corner of a Higashi-Shinsaibashi building, with six seats around the griddle and one table, where the owner cooks in front of you and pours from a short list of red wines. The signature is Gekko-yaki, a fluffy egg-and-cabbage cake with thick pork, and two diners single out the kimchi-cheese version (¥2,700); the seafood yakisoba carbonara (¥2,500) folds shrimp and scallops into thick chewy noodles under a soft egg. Simpler plates: shrimp, squid and scallops grilled with salt, cabbage stir-fried with abura-kasu, grilled asparagus, salty grilled beef intestine. One diner found the seasoning salty overall. Expect about ¥6,000–8,000. Students may be turned away, children by arrangement only, and there's a dress code (no sandals or sweats).",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Opened 27 May 2017; formerly 鉄板ダイニング KAYA (Tabelog).', background: 'Teppanyaki counter with a staff-maintained Tabelog listing; the owner cooks at the counter (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Gekko-yaki; seafood yakisoba carbonara.',
      anecdotes: [
        { text: '"The thick noodles typical of a teppan-yaki restaurant are coated in a rich carbonara sauce. Topped with large shrimp and scallops, and a soft-boiled egg in the center…" — July 2026, Seafood Yaki Soba Carbonara.', source: R + 'B530996380/' },
        { text: '"This fluffy creation combines eggs and cabbage with thick slices of pork, reminiscent of a Japanese okonomiyaki." — August 2026, Gekko-yaki.', source: R + 'B536581984/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 月虹 (旧店名 鉄板ダイニング KAYA)、大阪市中央区東心斎橋2-5-19 南グランド会館 1F、心斎橋駅から徒歩3分、毎日18:00〜23:30、不定休あり、2017年5月27日開店、予約可、学生は予約していても入店を断る場合あり、子ども連れは要相談、ドレスコード (サンダル、スウェット、ジャージ、作業着不可)、カウンター6席・テーブル4席、カード可、電子マネー・QR不可、加熱式たばこのみ、自家製ソースともちもちの yakisoba、A5佐賀牛ヒレのコース、赤ワイン約10種。口コミ(2026年6〜10月): 鉄板を囲むカウンター、店主が目の前で焼く、看板の Gekko-yaki (卵とキャベツのふんわりした生地に厚切りの豚)、キムチチーズ2,700円、海鮮の yakisoba カルボナーラ2,500円、海鮮の塩焼き2,000〜2,400円、abura-kasu をのせた野菜炒め1,000円、curry yakisoba、ikatama、そば入り野菜炒め、アスパラ焼き、イカ塩もやしこんにゃく、卵焼き、Kaku ハイボール750円、グラスワイン1,000円、全体に塩気が強いという声、予算6,000〜8,000円。',
      confidence: 'medium', sources: [TB, R + 'B530956262/', R + 'B530996380/', R + 'B531412841/', R + 'B531585033/', R + 'B536581984/', R + 'B537567477/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Dress code; students may be declined; children by prior arrangement (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-5-19 南グランド会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目5番19号 (go) 26m; 13 m from Shinsaibashi Sushi En (separate building), no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530956262/', R + 'B530996380/', R + 'B537567477/'],
    price_note: 'Prices from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Gekko-yaki, kimchi and cheese', '¥2,700', 'Teppan', 'no', 'no', 'July 2026.', 'gekko_kimchi'),
      it('', '', 'Seafood yakisoba carbonara', '¥2,500', 'Teppan', 'no', 'no', 'July 2026.', 'carbonara'),
      it('', '', 'Seafood grilled with salt (shrimp, squid, scallops)', '¥2,000–2,400', 'Teppan', 'ask', 'no', 'July–October 2026.', 'seafood_salt'),
      it('', '', 'Stir-fried vegetables with abura-kasu', '¥1,000', 'Teppan', 'ask', 'no', 'July 2026.', 'yasai'),
      it('アスパラ焼き', '', 'Grilled asparagus', '', 'Teppan', 'ask', 'ask', 'July–October 2026.', 'asparagus'),
      it('', '', 'Kaku highball', '¥750', 'Drinks', '', '', 'July 2026.', 'highball'),
    ] }, {
    cuisine: '6席のカウンター (とテーブル4席) で鉄板焼きとお好み焼き・Gekko-yaki: 卵とキャベツのふんわりした生地に厚切りの豚、キムチチーズ2,700円・海鮮の yakisoba カルボナーラ2,500円・海老、イカ、ホタテの塩焼き2,000〜2,400円・abura-kasu をのせた野菜炒め1,000円・curry yakisoba・卵焼き、アスパラ焼き・A5佐賀牛ヒレのコース・赤ワイン約10種、Kaku ハイボール750円',
    neighborhood: '東心斎橋2-5-19 南グランド会館 1F、ビルの一角。心斎橋駅から徒歩3分',
    gf_detail: '実質グルテンフリーではありません。看板の Gekko-yaki とお好み焼きは生地、yakisoba は小麦の麺、ソースの説明なし。海鮮の塩焼きやアスパラ焼きもあるが、共用の鉄板について確認を。',
    vegan_detail: '実質ヴィーガンではありません。豚、海鮮、牛、卵が中心で、野菜炒めには abura-kasu がのる。',
    notes: '[鉄板焼き・東心斎橋、名物の Gekko-yaki と10席の鉄板カウンター] 東心斎橋のビルの一角にある落ち着いた大人の鉄板焼きの店で、鉄板を囲むカウンター6席とテーブル1卓。店主が目の前で焼き、赤ワインを選んでくれる。看板は卵とキャベツのふんわりした生地に厚切りの豚の Gekko-yaki で、キムチチーズ (2,700円) を挙げる声がふたり。海鮮の yakisoba カルボナーラ (2,500円) はもちもちの太麺に海老とホタテ、真ん中に半熟卵。海老・イカ・ホタテの塩焼き、abura-kasu をのせたキャベツの炒め物、アスパラ焼き、牛ホルモンの塩焼きなどシンプルな皿も。全体に塩気が強いという声も。予算は6,000〜8,000円ほど。学生は断られることがあり、子ども連れは要相談、ドレスコードあり (サンダルやスウェット不可)。',
  });
}

// ================================================================ 韓国料理コモネ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27114031/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '02:00']);
  put({
    id: 'osaka_korean_komone_sennichimae', name: '韓国料理コモネ (Korean Komone)', category: 'OMNI',
    lat: 34.66824, lng: 135.504673, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the menu leans on soy-marinated (ganjang) crab and shrimp, cheese jeon pancakes and jjigae stews.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: crab, shrimp, octopus, pork and chicken dishes; nothing described as vegan.',
    hours_raw: 'Mon, Tue, Thu–Sun 16:00–02:00 (last order 01:00); closed Wednesday (Tabelog). Nearly full at 23:30 one night (May 2026). Reservations taken; the octopus hot pot for two needs booking (Tabelog). Cards, e-money and PayPay accepted (Tabelog). Smoking allowed (Tabelog). Bottle keep available (2025).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-6-8, Matoba Bldg B1F — 4 min from Namba and Nippombashi Stns',
    cuisine: 'Home-style Korean in a 16-seat basement · ganjang gejang (soy-marinated crab) large ¥5,500 / small ¥2,700 · yangnyeom gejang (crab in sweet-spicy sauce) · ganjang saeu (soy-marinated shrimp) large ¥4,050 / small ¥2,430 · samgyetang ¥3,800 · chadolbagi ¥5,300 · cheese jeon ¥1,800 · rice dumplings ¥1,300 · pork trotter slices ¥1,500 · tofu or kimchi jjigae ¥1,200 · samgyeopsal; sundubu · nakopsae octopus, offal and shrimp hot pot for two (book ahead) · makgeolli by the bottle ¥1,700 or bowl; bokbunja',
    website: null, gmaps: gm('韓国料理コモネ'), menu_url: TB + 'dtlmenu/',
    notes: "[Korean · a two-person basement Korean spot for soy-marinated crab, Sennichimae] A 16-seat basement Korean restaurant off Sennichimae, run by two people, open from 16:00 to 2 am and busy late; one night it was nearly full at 23:30. Come for the house-made ganjang gejang, crab marinated in soy (¥2,700 small, ¥5,500 large), or the sweet-spicy yangnyeom version, served with gloves; the soy-marinated shrimp is the other draw. Also cheese jeon, tender steamed pork, samgyetang, and an octopus, offal and shrimp hot pot for two that needs booking. Makgeolli comes by the bottle or ladled from a big bowl, and there's bottle keep. One diner found the food average and a little pricey but the service warm; another said it felt like coming home. English and Korean menus (Tabelog). Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Reopened 29 February 2024 (Tabelog).', background: 'Korean restaurant run by two people (2025 reviews; Tabelog).', philosophy: null, specialty: 'Ganjang gejang; ganjang saeu.',
      anecdotes: [
        { text: '"The Kanjang Gejang and Kanjang Saeu are just as amazing as I remembered!… It felt like coming home, making it a very comforting place." — November 2025, second visit.', source: R + 'B516776396/' },
        { text: '"This dish features fresh blue crabs marinated in a sweet and spicy sauce, and it\'s truly addictive!! [Clear gloves were provided] since it can get messy…" — May 2026, yangnyeom gejang.', source: R + 'B527979302/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 韓国料理コモネ、大阪市中央区千日前1-6-8 的場ビル B1F、なんば駅・日本橋駅から徒歩4分、16:00〜翌2:00 (L.O. 1:00)、水曜定休、2024年2月29日に営業再開、予約可、16席、カウンターあり、喫煙可、カード・電子マネー・PayPay可、英語・韓国語のメニュー、Kanjang Gejang、Ebi Kanjang、Samgyetang、Samgyeopsal、Sundubu、Nakopsae (2人前、要予約)、韓国のお酒 (Bokbunja、生 makgeolli)。口コミ(2025年1月〜2026年9月): ふたりで営む店、ganjang gejang 大5,500円・小2,700円、ganjang saeu 大4,050円・小2,430円、豆腐とキムチの jjigae 1,200円、cheese jeon 1,800円、餅1,300円、chadolbagi 5,300円、samgyetang 3,800円、豚足1,500円、makgeolli 1本1,700円、ボトルキープ、yangnyeom gejang は手袋つき、23時半でもほぼ満席、味は普通で少し高いが接客がよいという声、家に帰ったような安心感という声。',
      confidence: 'medium', sources: [TB, R + 'B469187619/', R + 'B510653338/', R + 'B510893635/', R + 'B516776396/', R + 'B527979302/', R + 'B537118214/'] },
    cultural_comfort: { level: 'english', note: 'English and Korean menus and menu photos (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-6-8 的場ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目6番8号 (go) 18m; offset 7 m north of the Tabelog point to clear Shodoten (separate building, 9 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B510653338/', R + 'B510893635/'],
    price_note: 'Prices from July–August 2025 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Ganjang gejang (soy-marinated crab), small / large', '¥2,700 / ¥5,500', 'Korean', 'ask', 'no', 'July 2025.', 'gejang'),
      it('', '', 'Ganjang saeu (soy-marinated shrimp), small / large', '¥2,430 / ¥4,050', 'Korean', 'ask', 'no', 'July 2025.', 'saeu'),
      it('', '', 'Samgyetang', '¥3,800', 'Korean', 'ask', 'no', 'July 2025.', 'samgyetang'),
      it('', '', 'Cheese jeon', '¥1,800', 'Korean', 'ask', 'ask', 'July 2025.', 'jeon'),
      it('', '', 'Tofu jjigae', '¥1,200', 'Korean', 'ask', 'ask', 'July 2025.', 'jjigae'),
      it('', '', 'Makgeolli, bottle', '¥1,700', 'Drinks', '', '', 'July 2025.', 'makgeolli'),
    ] }, {
    cuisine: '16席の地下で家庭的な韓国料理・ganjang gejang 大5,500円 / 小2,700円・甘辛いたれの yangnyeom gejang・ganjang saeu 大4,050円 / 小2,430円・samgyetang 3,800円・chadolbagi 5,300円・cheese jeon 1,800円・餅1,300円・豚足1,500円・豆腐とキムチの jjigae 1,200円・samgyeopsal、sundubu・タコとホルモンと海老の鍋 (2人前、要予約)・makgeolli は1本1,700円か大きな器で、bokbunja',
    neighborhood: '千日前1-6-8 的場ビル B1F。なんば駅・日本橋駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。醤油漬けの蟹と海老 (ganjang)、cheese jeon、jjigae が中心。',
    vegan_detail: '実質ヴィーガンではありません。蟹、海老、タコ、豚、鶏の料理が中心。ヴィーガンの記載なし。',
    notes: '[韓国料理・千日前、ふたりで営む地下の醤油漬けの蟹の店] 千日前の地下にある16席の韓国料理店で、ふたりで営み、16時から深夜2時まで。夜遅くもにぎわい、23時半にほぼ満席だった夜も。目当ては自家製の ganjang gejang (生の蟹の醤油漬け、小2,700円・大5,500円) か甘辛いたれの yangnyeom gejang で、手袋つき。醤油漬けの海老も人気。cheese jeon、やわらかい蒸し豚、samgyetang、要予約の2人前のタコとホルモンと海老の鍋も。makgeolli は瓶か大きな器からすくって、ボトルキープも。味は普通で少し高いが接客がよかったという声、家に帰ったようだという声も。英語・韓国語のメニューあり (食べログ)。水曜定休。',
  });
}

save();
