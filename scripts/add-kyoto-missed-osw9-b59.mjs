// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 59.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + プラチナビーフ Platinum Beef (lean-wagyu steak bar in Gion)
//   + pua'a (standing gyoza bar in Shitomi Kaikan; since 2022)
//   + 和 藤たて Wa Fujitate (Japanese set lunches and tempura west of Hanamikoji)
//   + Cest La Vie (old-style café-yoshoku at Gion-Shijo)
//   Same-name counts first (data and queue-status.jsonl): none for any of the four; no earlier chain rulings.
//   None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: プラチナビーフ 「チャージあり 1名/490円(税別)」;
//   the other three have no section.
//   Pins (checked against main 7a225e03): pua'a — Tabelog point 3.1 m from kyoto_zanguri_shitomi_kaikan (same
//   四富会館), moved 3 m west-south-west (6.1 m); Cest La Vie — Tabelog point 2.7 m from kyoto_restaurant_kiev and
//   3.9 m from kyoto_gion_sonou (same 鴨東ビル), moved 4 m north-north-east (6.1 m).
//   Ruling applied: single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-59');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ プラチナビーフ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26022647/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:00', '15:00'], ['18:00', '24:00']);
  put({
    id: 'kyoto_platinum_beef_gion', name: 'プラチナビーフ (Platinum Beef)', category: 'OMNI',
    lat: 35.003342, lng: 135.77289, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled steak, but pasta, a katsu sandwich and sauces are also served (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu steak bar (2025–26 reviews).',
    hours_raw: 'Daily 12:00–15:00 (lunch by booking by 22:00 the day before) and 18:00–24:00; may close early when sold out; irregular closures — call ahead (Tabelog). Bookings taken, with cancellation fees: ¥5,000 the day before; ¥10,000 same day with notice; ¥100,000 for a same-day no-show (Tabelog). Table charge: Tabelog\'s Japanese original says 「チャージあり 1名/490円(税別)」 — ¥490 per person plus tax. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). The owner speaks English (August 2025 review). 2F of the Gion Moriya building, above a well-known steakhouse, on Yamatooji south of Shijo; 3 min from Keihan Gion-Shijo Stn (Tabelog; July 2025 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yamatooji south of Shijo, Gion — 3 min from Gion-Shijo Stn',
    cuisine: 'Lean wagyu steak bar (2025–26 reviews): the chef\'s choice of three beef cuts — 600 g for three in October 2026 — a steak omakase and a tasting course; assorted appetizers with yukhoe, roast-beef salad, prosciutto, pasta; a katsu sandwich to take away; wine and fruit-laden cocktails (2025–26 reviews)',
    website: null, gmaps: gm('プラチナビーフ 祇園'), menu_url: TB + 'dtlmenu/',
    notes: "[Steak bar · Gion] A calm second-floor steak bar off Yamatooji serving tender lean wagyu — three cuts chosen by the chef — with yukhoe, roast-beef salad and pasta, and wine; the owner speaks English. About ¥10,000–15,000 at night. ¥490 charge; strict cancellation fees.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A Gion steak bar; reviewers describe a kind owner who speaks English (July and August 2025).',
      philosophy: null, specialty: 'Lean wagyu steak.',
      anecdotes: [
        { text: 'Three men aged 50 to 69 planning a trip in October 2026 expected tough lean beef from the price and found the chef\'s 600 g of three cuts juicy and tender.', source: R + 'B536659862/' },
        { text: 'A regular since 2023 calls it a choice for special days: lean meat that never feels heavy (July 2026).', source: R + 'B461304858/' },
        { text: 'A May 2025 diner had the three-cut steak omakase and planned to try the takeaway katsu sandwich next.', source: R + 'B506773639/' },
      ],
      japanese_sources_summary: '食べログ: プラチナビーフ、鉄板焼き・ステーキ・バル、東山区大和大路通四条下ル大和町7 祇園モーリヤビル 2F、京阪祇園四条駅から徒歩3分、毎日 12:00〜15:00 (昼は前日22時までに予約)・18:00〜24:00 (品切れで早じまいあり)、不定休、予約可、キャンセル料 (前日5,000円、当日連絡あり10,000円、当日無連絡100,000円)、チャージ1名490円 (税別)、カード可、電子マネー・QR 不可。口コミ (2025年3月〜2026年10月、英語): 赤身の和牛、おまかせのステーキ3種 (3人で600g)、テイスティングコース、ユッケ入りの前菜の盛り合わせ、ローストビーフのサラダ、生ハム、パスタ、持ち帰りのカツサンド、ワイン、果物たっぷりのカクテル、英語の話せる店主、有名なステーキ店の上の階。',
      confidence: 'medium', sources: [TB, R + 'B454203557/', R + 'B461304858/', R + 'B506773639/', R + 'B506785649/', R + 'B509493051/', R + 'B511397153/', R + 'B536659862/', R + 'B537160517/'] },
    cultural_comfort: { level: 'english', note: 'The owner speaks English.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通四条下ル大和町7 祇園モーリヤビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003342, 135.772890); cross-checked: GSI 京都府京都市東山区大和町7番地 (lot) 42m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Charge from Tabelog; no menu prices read.', last_checked: TODAY, items: [
      it('', '', "Chef's selection of three beef cuts", '', 'Steak', 'ask', 'no', 'May 2025 and October 2026 reviews.', 'steak_omakase'),
      it('', '', 'Table charge', '¥490 + tax', 'Charges', 'ask', 'ask', 'Tabelog.', 'charge'),
    ] }, {
    cuisine: '赤身の和牛のステーキバル (2025〜26年の口コミ): 店主が選ぶ3種の牛肉 (2026年10月は3人で600g)、ステーキのおまかせ、テイスティングコース。ユッケ入りの前菜の盛り合わせ、ローストビーフのサラダ、生ハム、パスタ、持ち帰りのカツサンド。ワイン、果物たっぷりのカクテル (2025〜26年の口コミ)',
    neighborhood: '祇園、四条の南の大和大路。祇園四条駅から徒歩3分',
    gf_detail: '要確認。焼いたステーキだが、パスタ、カツサンド、ソースもある (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛のステーキバル (2025〜26年の口コミ)。',
    notes: '[ステーキバル・祇園] 大和大路の2階の落ち着いたステーキバル。店主が選ぶ3種のやわらかい赤身の和牛に、ユッケ、ローストビーフのサラダ、パスタとワイン。店主は英語を話す。夜は1万〜1万5千円ほど。チャージ490円。キャンセル料は厳しめ。',
  });
}

// ================================================================ pua'a
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038655/'; const R = TB + 'dtlrvwlst/';
  const D = day(['16:00', '23:00']);
  put({
    id: 'kyoto_puaa_shitomi_kaikan', name: "pua'a (プアア)", category: 'OMNI',
    lat: 35.004255, lng: 135.764981, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-wrapper dumplings (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork and shrimp dumplings, saliva chicken (2025–26 reviews).',
    hours_raw: 'Tue–Sat 16:00–23:00; closed Sunday, Monday and holidays; hours may change (Tabelog). No bookings; no cards (Tabelog). A tiny standing counter for about five, lively with regulars who make room for newcomers (August 2025, February and April 2026 reviews). In 四富会館, the old drinking arcade at Tominokoji-Shijo, about 4 min from Kyoto-Kawaramachi Stn (Tabelog; April 2026 review).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shitomi Kaikan, Tominokoji north of Shijo — 4 min from Kawaramachi Stn',
    cuisine: 'Gyoza and Chinese snacks at a standing bar (2025–26 reviews): boiled dumplings, shrimp dumplings with chives, pan-fried gyoza, mapo tofu, spicy shredded potato, saliva chicken',
    website: null, gmaps: gm("pua'a 四富会館"), menu_url: null,
    notes: "[Gyoza standing bar · Shitomi Kaikan] A five-person standing counter in the Shitomi Kaikan drinking arcade, where regulars squeeze up for newcomers: plump boiled and shrimp dumplings, pan-fried gyoza, mapo tofu and saliva chicken from 16:00. About ¥2,000–3,000. No cards.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened 13 October 2022 (Tabelog). "pua\'a" is Hawaiian for pig (November 2025 review).',
      philosophy: null, specialty: 'Boiled dumplings.',
      anecdotes: [
        { text: 'Ending a Nagoya-Osaka tour in November 2025, a returning visitor came back after two and a half years for the owner\'s dedicated gyoza.', source: R + 'B459474864/' },
        { text: 'A nervous first-timer in August 2025 was soon chatting with the staff and regulars over boiled dumplings.', source: R + 'B512657735/' },
        { text: 'Dropping in at 16:00 in February 2026 for an early drink, a visitor squeezed in and had boiled and pan-fried dumplings and mapo tofu.', source: R + 'B523198186/' },
      ],
      japanese_sources_summary: '食べログ: pua\'a、餃子、中京区富小路通四条上る西大文字町615 四富会館、京都河原町駅から333m、火〜土 16:00〜23:00、日月祝休み、予約不可、カード不可、2022年10月13日オープン。口コミ (2025年8月〜2026年4月、英語): 5人ほどの立ち飲みのカウンター、常連と店の人が温かい、水餃子、エビとニラの水餃子、焼き餃子、麻婆豆腐、辛い細切りじゃがいも、よだれ鶏、pua\'a はハワイ語で豚。',
      confidence: 'medium', sources: [TB, R + 'B459474864/', R + 'B512657735/', R + 'B517969202/', R + 'B523198186/', R + 'B526727415/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tiny standing bar of regulars.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区富小路通四条上る西大文字町615 四富会館',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.004265, 135.765011) is 3.1 m from kyoto_zanguri_shitomi_kaikan (same 四富会館), so moved 3 m west-south-west to 35.004255, 135.764981 (6.1 m from it); cross-checked: GSI 京都府京都市中京区西大文字町615番地 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526727415/'],
    price_note: 'No prices read.', last_checked: TODAY, items: [
      it('', '', 'Shrimp dumplings with chives', '', 'Dumplings', 'no', 'no', 'April 2026 review.', 'ebi_suigyoza'),
      it('', '', 'Pan-fried gyoza', '', 'Dumplings', 'no', 'no', 'February 2026 review.', 'yaki_gyoza'),
    ] }, {
    cuisine: '立ち飲みの餃子と中華のつまみ (2025〜26年の口コミ): 水餃子、エビとニラの水餃子、焼き餃子、麻婆豆腐、辛い細切りじゃがいも、よだれ鶏',
    neighborhood: '四富会館、四条の北の富小路。河原町駅から徒歩4分',
    gf_detail: 'グルテンフリー不可。小麦の皮の餃子 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚やエビの餃子、よだれ鶏 (2025〜26年の口コミ)。',
    notes: '[餃子の立ち飲み・四富会館] 四富会館の5人ほどの立ち飲みのカウンター。常連が詰めて迎えてくれる。ぷりぷりの水餃子やエビ餃子、焼き餃子、麻婆豆腐、よだれ鶏を16時から。2千〜3千円ほど。カード不可。',
  });
}

// ================================================================ 和 藤たて
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26035157/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_wa_fujitate_gion', name: '和 藤たて (Wa Fujitate)', category: 'OMNI',
    lat: 35.001902, lng: 135.772455, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Simmered and grilled fish, but tempura bowls and fried fish are central; tempura can be eaten with salt (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, eel and tempura with dashi (2025–26 reviews).',
    hours_raw: 'Mon, Tue and Thu–Sun 11:30–15:00 and 17:00–22:00; closed Wednesday; hours may change (Tabelog). Bookings taken (Tabelog). Cards (JCB, AMEX) and QR; no e-money (Tabelog). About 8 counter seats and a table for 4 downstairs, a tatami room for about 8 upstairs (June 2025 and August 2026 reviews). A little west of Hanamikoji, south of Shijo (February 2025 review).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of Shijo, west of Hanamikoji — Gion',
    cuisine: 'Japanese set lunches and evening dishes with sake (2025–26 reviews): shrimp tempura rice bowl ¥1,100 with miso soup (February 2025), sea-bream head simmered in a set ¥1,100 (October 2026), fried flatfish set, lunch sets with tempura; at night grilled ayu, fig tempura, steamed eel rice and seasonal dishes with a wide sake choice',
    website: null, gmaps: gm('和 藤たて 祇園'), menu_url: null,
    notes: "[Japanese set lunches · Gion] A clean little Japanese restaurant just south of Shijo with good-value lunches — a shrimp tempura bowl or simmered sea-bream set for about ¥1,100 — and seasonal dishes like grilled ayu and steamed eel rice with sake at night, upstairs on tatami for groups. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'A Japanese restaurant near Gion-Shijo, reviewed from 2025 (Tabelog).',
      philosophy: null, specialty: 'Tempura rice bowl; sea-bream set.',
      anecdotes: [
        { text: 'A February 2025 lunch guest had a large rice with the ¥1,100 shrimp tempura bowl and asked for more miso soup.', source: R + 'B500947265/' },
        { text: 'In July 2025 a diner asked to eat the set\'s tempura with salt rather than dipping sauce, and the kitchen obliged.', source: R + 'B520240972/' },
        { text: 'A group of seven on a hot August 2026 night had the upstairs tatami room, extra fans and steamed eel rice.', source: R + 'B520272211/' },
      ],
      japanese_sources_summary: '食べログ: 和 藤たて、日本料理・海鮮・天ぷら、東山区亀井町59、祇園四条駅から186m、月・火・木〜日 11:30〜15:00・17:00〜22:00、水曜休み、予約可、カード (JCB、AMEX)・QR 可、電子マネー不可。口コミ (2025年2月〜2026年10月、英語): Hanamikoji の少し西、海老天丼1,100円と味噌汁、鯛のあら煮の御膳1,100円、カレイの唐揚げの定食、天ぷら付きの昼の定食、塩で食べる天ぷら、鮎の塩焼き、いちじくの天ぷら、鰻の蒸しご飯、日本酒が豊富、1階はカウンター約8席と4名テーブル、2階は8名ほどの座敷。',
      confidence: 'medium', sources: [TB, R + 'B500947265/', R + 'B502519422/', R + 'B509220283/', R + 'B520240972/', R + 'B520272211/', R + 'B537102830/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and upstairs tatami.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区亀井町59',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001902, 135.772455); cross-checked: GSI 京都府京都市東山区亀井町59番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B500947265/', R + 'B537102830/'],
    price_note: 'Prices from February 2025 and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shrimp tempura rice bowl (with miso soup)', '¥1,100', 'Lunch', 'no', 'no', 'February 2025 review.', 'ebi_tendon'),
      it('', '', 'Simmered sea-bream head set', '¥1,100', 'Lunch', 'ask', 'no', 'October 2026 review.', 'tai_arani'),
    ] }, {
    cuisine: '昼の定食と夜の日本酒の料理 (2025〜26年の口コミ): 味噌汁付きの海老天丼1,100円 (2025年2月)、鯛のあら煮の御膳1,100円 (2026年10月)、カレイの唐揚げの定食、天ぷら付きの昼の定食。夜は鮎の塩焼き、いちじくの天ぷら、鰻の蒸しご飯、季節の料理と豊富な日本酒',
    neighborhood: '四条の南、Hanamikoji の西。祇園',
    gf_detail: '要確認。煮魚や焼き魚もあるが、天丼や揚げ物が中心。天ぷらは塩でも食べられる (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、鰻、だしの天ぷら (2025〜26年の口コミ)。',
    notes: '[和の定食・祇園] 四条のすぐ南のこぎれいな和食の店。昼は海老天丼や鯛のあら煮の御膳が1,100円ほどとお得で、夜は鮎の塩焼きや鰻の蒸しご飯など季節の料理を日本酒と。2階の座敷はグループ向け。水曜休み。',
  });
}

// ================================================================ Cest La Vie
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26023163/'; const R = TB + 'dtlrvwlst/';
  const W = day(['10:00', '19:00']);
  put({
    id: 'kyoto_cest_la_vie_gion', name: 'Cest La Vie', category: 'OMNI',
    lat: 35.004333, lng: 135.772844, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried shrimp, chicken katsu, cream sauces and spaghetti (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: omurice, hamburg steak, ham and sausage plates (2025–26 reviews).',
    hours_raw: 'Mon–Wed, Fri and Sat 10:00–19:00; Sun 10:00–18:00; holidays 10:00–18:30; last order 30 minutes before closing; closed Thursday and the 2nd and 4th Sundays; may close early when the rice runs out (Tabelog). Bookings taken (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 18 seats — a counter, tables and sofa seats; smoking allowed (Tabelog; October 2025 review). In the 鴨東ビル just north of Shijo, 1 min from Keihan Gion-Shijo Stn (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 4: W, 5: W, 6: day(['10:00', '18:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'North of Shijo by the Kamo River, Gion — 1 min from Gion-Shijo Stn',
    cuisine: 'Old-style café-yoshoku with a long menu (2025–26 reviews): shrimp omurice in a thin omelette ¥1,000, with cream sauce ¥1,050 (June 2026), hamburg steak and fried shrimp set just under ¥2,000, mushroom cream spaghetti ¥950, the "three-colour set" of sausage, bacon, ham and fried egg ¥1,550 (October 2025), chicken katsu set with three dressings, salad set with a drink ¥750 (June 2026); coffee',
    website: null, gmaps: gm('Cest La Vie 祇園四条'), menu_url: null,
    notes: "[Café-yoshoku · Gion-Shijo] A small, smoky old-style café-yoshoku a minute from Gion-Shijo Station: shrimp omurice in a thin omelette, hamburg steak with fried shrimp, chicken katsu and a sausage-and-egg plate, about ¥1,000–2,000, served with chopsticks and three dressings. Cash only; smoking allowed; closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'A Gion café-yoshoku known for its shrimp omurice (April 2025 review).',
      philosophy: null, specialty: 'Shrimp omurice.',
      anecdotes: [
        { text: 'An October 2025 lunch guest was pleased to get chopsticks and three dressings with the hamburg and fried shrimp set.', source: R + 'B515577392/' },
        { text: 'On a second stop in October 2025, a diner ordered shrimp omurice, mushroom cream spaghetti and the three-colour set.', source: R + 'B516144981/' },
        { text: 'A June 2026 diner thought ¥1,800 for cream-sauce omurice, salad and a drink was a fair Gion-Shijo price for the homey taste.', source: R + 'B531023170/' },
      ],
      japanese_sources_summary: '食べログ: Cest La Vie、洋食・カフェ、東山区廿一軒町236 鴨東ビル 1F、京阪祇園四条駅から徒歩1分、月〜水・金・土 10:00〜19:00、日 10:00〜18:00、祝 10:00〜18:30、L.O. は閉店30分前、木曜・第2第4日曜休み、ご飯がなくなり次第終了、予約可、カード・電子マネー・QR 不可、18席 (カウンター、テーブル、ソファ)、喫煙可。口コミ (2025年4月〜2026年6月、英語): 薄焼き卵の海老オムライス1,000円、クリームソースの海老オムライス1,050円、ハンバーグとエビフライのセット2,000円弱、きのこのクリームスパゲティ950円、ソーセージ・ベーコン・ハム・目玉焼きの Three-Color セット1,550円、チキンカツ定食と3種のドレッシング、ドリンク付きのサラダセット750円、箸も出る、喫煙可。',
      confidence: 'medium', sources: [TB, R + 'B504570874/', R + 'B515577392/', R + 'B516144981/', R + 'B516151372/', R + 'B531023170/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区廿一軒町236 鴨東ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.004300, 135.772827) is 2.7 m from kyoto_restaurant_kiev and 3.9 m from kyoto_gion_sonou (same 鴨東ビル), so moved 4 m north-north-east to 35.004333, 135.772844 (6.1 m from the nearest); cross-checked: GSI 京都府京都市東山区廿一軒町236番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516144981/', R + 'B531023170/'],
    price_note: 'Prices from October 2025 and June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shrimp omurice', '¥1,000', 'Yoshoku', 'no', 'no', 'October 2025 review.', 'ebi_omurice'),
      it('', '', 'Three-colour set (sausage, bacon, ham, fried egg)', '¥1,550', 'Yoshoku', 'ask', 'no', 'October 2025 review.', 'sanshoku_set'),
    ] }, {
    cuisine: 'メニューの多い昔ながらの喫茶洋食 (2025〜26年の口コミ): 薄焼き卵の海老オムライス1,000円、クリームソースは1,050円 (2026年6月)、ハンバーグとエビフライのセット2,000円弱、きのこのクリームスパゲティ950円、ソーセージ・ベーコン・ハム・目玉焼きの「Three-Color」セット1,550円 (2025年10月)、3種のドレッシングのチキンカツ定食、ドリンク付きのサラダセット750円 (2026年6月)。コーヒー',
    neighborhood: '祇園、四条の北。祇園四条駅から徒歩1分',
    gf_detail: 'グルテンフリー不可。エビフライ、チキンカツ、クリームソース、スパゲティ (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。オムライス、ハンバーグ、ハムとソーセージの皿 (2025〜26年の口コミ)。',
    notes: '[喫茶洋食・祇園四条] 祇園四条駅から1分の、小さく昔ながらの喫茶洋食。薄焼き卵の海老オムライス、ハンバーグとエビフライ、チキンカツ、ソーセージと目玉焼きの皿が1,000〜2,000円ほど。箸と3種のドレッシング付き。現金のみ。喫煙可。木曜休み。',
  });
}

save();
