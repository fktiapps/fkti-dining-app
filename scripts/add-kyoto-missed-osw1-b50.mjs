// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 50.
//   + アオゾラ Aozora (Thai curry upstairs near Demachiyanagi; peanut curry, khao man gai)
//   + zushi curry ＆ ぱん屋LeuCocoRyne (croissant bakery and curry café by the Jodoji bus stop)
//   + 京湯どうふ 喜さ起 Kyoyu Dofu Kisaki (yudofu restaurant near Honen-in, about 50 years old)
//   + La Part Dieu (one-person French restaurant in Tanaka; the vegetable "flower crown")
//   - 博多長浜ラーメン みよし 銀閣寺店 (26034224): skipped (reason below).
//   Picked on 2026-11-06: from `queue.mjs kyoto-missed next core 300`, lane ids in queue order 26002352, 26032640,
//   26034224 (skipped), 26001806, 26025452. None of the four drafted is in data/kyoto.json by name (アオゾラ/Aozora —
//   キラメキノ青空 in data is a different shop, LeuCocoRyne, 喜さ起/Kisaki, La Part Dieu) or address (田中門前町23,
//   浄土寺下南田町23, 浄土寺南田町173-19, 田中里ノ前町59).
//   Same-name count (same brand or operator only): one shop each in our crawl for all four. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: 喜さ起 なし (the English wrongly says a charge applies);
//   none listed for the other three.
//   Other-diner remarks (Greg 2026-11-06): single-review remarks about other customers left out (Aozora October 2024,
//   Kisaki March 2026).
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-50');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26034224', '博多長浜ラーメン みよし 銀閣寺店: a same-concept branch of a brand already in data — 博多長浜ラーメン みよし (kyr_hakata_nagahama_ramen_mi)');

// ================================================================ アオゾラ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26002352/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_aozora_thai_curry', name: 'アオゾラ (Aozora)', category: 'OMNI',
    lat: 35.029265, lng: 135.778106, cuisine_type: 'thai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Thai curries with rice — green, red, yellow, peanut — plus khao man gai, karaage and spring rolls; fish sauce is used and no gluten information is given (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the curries carry chicken or shrimp and fish sauce (2024–2026 reviews).',
    hours_raw: '12:00–15:00 and 17:30–21:00; closed Thursday; hours may change (Tabelog). Irregular days off are posted on a board out front each month (October 2024). Reservations accepted; private hire for up to 20 (Tabelog). Cash only (Tabelog). 16 seats with a counter (Tabelog). Up a steep stair to the second floor of the K-SIDE building (Tabelog; October 2024). About 7 min on foot from Keihan Demachiyanagi Station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Near Kyoto University — 7 min from Demachiyanagi',
    cuisine: 'A Thai curry café of about twenty years’ standing (August 2024) · green, red, yellow and peanut curries and the house Aozora curry (2024–2026); the peanut curry is a regulars’ favourite (2025–2026) · daily lunch curry with a mini drink, salad and egg (October 2024); lunch set ¥1,200 (February 2026) · mini curry set with khao man gai ¥1,650 (July 2026) · spicy shrimp curry, spring rolls, chicken-skin karaage (2024–2025) · lassi, coconut-milk pudding (2026) · even “medium” is quite hot (May 2026)',
    website: null, gmaps: gm('アオゾラ タイカレー 田中門前町'), menu_url: null,
    notes: '[Thai curry · near Kyoto University, the peanut curry] A long-running, cosy Thai curry café up a steep staircase near Kyoto University: coconut-rich green, yellow and red curries, a much-loved peanut curry, and khao man gai sets around ¥1,200–1,650 with lassi. Cash only; closed Thursday, with extra days off posted out front.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'A longtime customer dates the shop to the mid-2000s, about twenty years in business (August 2024); another returned after more than ten years (October 2025).',
      philosophy: null, specialty: 'Peanut curry; green curry.',
      anecdotes: [
        { text: 'A January 2026 visitor who avoids spicy food came for the peanut curry, then returned in May because it was unforgettable.', source: R + 'B521898784/' },
        { text: 'A July 2026 regular chose Aozora over a sake-brewery stop, reasoning that Thai curry wins in the heat.', source: R + 'B532399522/' },
      ],
      japanese_sources_summary: '食べログ: アオゾラ、カレー・タイ料理、左京区田中門前町23 K-SIDEビル2F、京阪出町柳駅から徒歩7分、12:00〜15:00、17:30〜21:00、木曜定休、予約可、現金のみ、16席、貸切20名まで。口コミ (2024〜2026年、英語): 20年ほど続くタイカレーの店、グリーン・レッド・イエロー・ピーナッツのカレー、アオゾラカレー、日替わりのランチカレー、ランチセット1,200円、カオマンガイとミニカレーのセット1,650円、エビのカレー、春巻き、鶏皮の唐揚げ、ラッシー、ココナッツミルクのプリン、店の前の板に月の休みを掲示、急な階段。',
      confidence: 'medium', sources: [TB, R + 'B117361178/', R + 'B493580815/', R + 'B494390765/', R + 'B494638944/', R + 'B501516024/', R + 'B515832735/', R + 'B521898784/', R + 'B523091398/', R + 'B531715214/', R + 'B532399522/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small upstairs café; cash only; steep stairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区田中門前町23 Ｋ－ＳＩＤＥビル ２Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.029265, 135.778106); cross-checked: GSI 京都府京都市左京区田中門前町23番地 (lot) 46m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523091398/', R + 'B531715214/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set with the day’s curry', '¥1,200', 'Lunch', 'ask', 'no', 'February 2026.', 'lunch_set'),
      it('', '', 'Mini curry set with khao man gai', '¥1,650', 'Sets', 'ask', 'no', 'July 2026.', 'khao_man_gai'),
      it('', '', 'Peanut curry', '', 'Curry', 'ask', 'no', '2025–2026.', 'peanut_curry'),
    ] }, {
    cuisine: '20年ほど続くタイカレーの店 (2024年8月)・グリーン、レッド、イエロー、ピーナッツのカレーと店名のアオゾラカレー (2024〜2026年)。ピーナッツカレーは常連のお気に入り (2025〜2026年)・ミニドリンク、サラダ、卵付きの日替わりランチカレー (2024年10月)。ランチセット1,200円 (2026年2月)・カオマンガイとミニカレーのセット1,650円 (2026年7月)・辛いエビのカレー、春巻き、鶏皮の唐揚げ (2024〜2025年)・ラッシー、ココナッツミルクのプリン (2026年)・中辛でもかなり辛い (2026年5月)',
    neighborhood: '京大の近く。出町柳から徒歩7分',
    gf_detail: '要確認。グリーン、レッド、イエロー、ピーナッツのタイカレーとご飯、カオマンガイ、唐揚げ、春巻き。ナンプラーを使い、グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。カレーには鶏やエビとナンプラー (2024〜2026年の口コミ)。',
    notes: '[タイカレー・京大の近く、ピーナッツカレー] 京大の近く、急な階段を上がった先の長く続く居心地のよいタイカレーの店。ココナッツのきいたグリーン、イエロー、レッドのカレー、人気のピーナッツカレー、カオマンガイのセットが1,200〜1,650円ほどで、ラッシーも。現金のみ、木曜定休、ほかの休みは店の前に掲示。',
  });
}

// ================================================================ zushi curry ＆ ぱん屋LeuCocoRyne
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26032640/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://mikadzuki716.com/';
  const H = day(['08:00', '18:00']);
  put({
    id: 'kyoto_leucocoryne_jodoji', name: 'zushi curry ＆ ぱん屋LeuCocoRyne', category: 'OMNI',
    lat: 35.023038, lng: 135.793429, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a croissant bakery; the curry comes with rice or as a doria, but the kitchen is built around wheat pastry and no gluten information is given (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter croissants, and the curry is made with Omi beef tendon (official site).',
    hours_raw: '8:00–18:00 (December–February L.O. 17:00) (official site); closed Tuesday (Tabelog); hours may change (Tabelog). Breakfast from 8:00 to 10:30 with a croissant of your choice (December 2025). No reservations (Tabelog). Cash only (Tabelog). 13 seats with a counter (Tabelog). One minute on foot from the Jodoji bus stop, near the Philosopher’s Path and Ginkakuji (Tabelog; reviews).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Jodoji, near the Philosopher’s Path — 1 min from the Jodoji bus stop',
    cuisine: 'A croissant bakery that also serves curry (official site; reviews) · zushi curry with a mini salad ¥950 — Omi beef tendon simmered in red wine with Awaji onions, cooked without added water, mild (official site) · croissants, the shop’s draw (December 2025); a croissant sandwich of Kyoto ice cream and anko is popular (official site); vanilla and matcha croissant sandwiches (June 2024) · breakfast 8:00–10:30 with a croissant of your choice and coffee (December 2025) · curry doria and keema dishes (2022–2023) · the French AOP-butter croissant has been discontinued for lack of supplies (official site)',
    website: SITE, gmaps: gm('LeuCocoRyne 浄土寺'), menu_url: SITE,
    notes: '[Croissants and curry · Jodoji, near the Philosopher’s Path] A small bakery-café a minute from the Jodoji bus stop, known for its butter croissants — at breakfast from 8:00 or as ice-cream-and-anko sandwiches — and for a mild Omi-beef-tendon “zushi curry” (¥950). Cash only; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Earlier reviewers describe one young man running the shop alone (November 2022) and an owner who imports goods from places such as Turkey for sale in the shop (January 2023).',
      philosophy: null, specialty: 'Croissants; zushi curry.',
      anecdotes: [
        { text: 'A December 2025 visitor called the croissants alone worth the trip.', source: R + 'B518211312/' },
        { text: 'A June 2024 hiker came down from Mount Daimon for a matcha croissant sandwich with additive-free Kyoto ice cream.', source: R + 'B534969992/' },
      ],
      japanese_sources_summary: '公式サイト: zushi curry & ぱん屋LeuCocoRyne、左京区浄土寺下南田町23、営業時間8:00〜18:00 (12〜2月は17:00 L.O.)、ずしかれー (ミニサラダ付き) 950円、近江牛のすじを赤ワインで煮込み淡路島の玉ねぎ、水や調味料を加えずに作るまろやかなカレー、京都のアイスとあんこのクロワッサンサンド、AOPバターのクロワッサンは原材料不足のため終売。食べログ: カレー・パン・カフェ、浄土寺バス停から徒歩1分、火曜定休、予約不可、現金のみ、13席。口コミ (2024〜2025年、英語): クロワッサンが名物、8:00〜10:30の朝食は好きなクロワッサンを選べる、バニラと抹茶のクロワッサンサンド。',
      confidence: 'medium', sources: [SITE, TB, R + 'B457491404/', R + 'B491257349/', R + 'B495100421/', R + 'B518211312/', R + 'B534969992/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small bakery-café; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区浄土寺下南田町23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; latest review December 2025.' },
    pin_source: `Tabelog ${TB} (35.023038, 135.793429); cross-checked: GSI 京都府京都市左京区浄土寺下南田町23番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Curry price from the official site.', last_checked: TODAY, items: [
      it('ずしかれー', 'zushi karē', 'Zushi curry with a mini salad', '¥950', 'Curry', 'ask', 'no', 'Official site; Omi beef tendon.', 'zushi_curry'),
      it('', '', 'Croissant sandwich with ice cream and anko', '', 'Croissants', 'no', 'no', 'Official site.', 'croissant_sand'),
      it('', '', 'Breakfast with a croissant of your choice', '', 'Breakfast', 'no', 'no', 'December 2025; 8:00–10:30.', 'breakfast'),
    ] }, {
    cuisine: 'カレーも出すクロワッサンのパン屋 (公式サイト、口コミ)・ずしかれー ミニサラダ付き950円。近江牛のすじを赤ワインで煮込み淡路島の玉ねぎを使い、水を加えずに作るまろやかなカレー (公式サイト)・名物のクロワッサン (2025年12月)。京都のアイスとあんこのクロワッサンサンドが人気 (公式サイト)。バニラと抹茶のクロワッサンサンド (2024年6月)・8:00〜10:30の朝食は好きなクロワッサンとコーヒー (2025年12月)・カレードリアやキーマ (2022〜2023年)・フランスのAOPバターのクロワッサンは原材料不足で終売 (公式サイト)',
    neighborhood: '浄土寺、哲学の道の近く。浄土寺バス停から徒歩1分',
    gf_detail: 'グルテンフリーではない。クロワッサンのパン屋で、カレーはご飯かドリアだが、小麦の生地が中心で、グルテンの情報はない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガンではない。バターのクロワッサン、カレーは近江牛のすじ (公式サイト)。',
    notes: '[クロワッサンとカレー・浄土寺、哲学の道の近く] 浄土寺バス停から1分の小さなパン屋のカフェ。バターのクロワッサンが名物で、8時からの朝食やアイスとあんこのサンドで。近江牛のすじのまろやかな「ずしかれー」(950円) も。現金のみ、火曜定休。',
  });
}

// ================================================================ 京湯どうふ 喜さ起
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001806/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '19:15']);
  put({
    id: 'kyoto_kisaki_yudofu', name: '京湯どうふ 喜さ起 (Kyoyu Dofu Kisaki)', category: 'OMNI',
    lat: 35.023985, lng: 135.796763, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog tags gluten-free options, but no dish is described as gluten-free; the yudofu comes with a soy-based dipping sauce, the sets include tempura, and awafu dengaku is made with wheat gluten (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog tags vegan and vegetarian options, but the yudofu uses the shop’s traditional dashi and comes with bonito flakes, and the sets include shrimp tempura (Tabelog; April 2026).',
    hours_raw: '11:00–19:15 (L.O. food 18:00, drinks 18:45); closed Wednesday; in February and on weekdays from June to September it may close at 16:00 when there are no reservations (Tabelog). Reservations accepted — tatami seating unless a table is requested; in autumn-leaf season large tables may be shared and groups over 11 should phone (Tabelog). No service charge (Tabelog, original なし — the English translation is wrong). Cards, IC cards, e-money, Alipay and WeChat Pay (Tabelog). 82 seats in tatami rooms and an annex with tables; private rooms (Tabelog). Smart-casual dress requested (Tabelog). English, Traditional Chinese and Korean menus; English-speaking staff (Tabelog). Free parking for 5 cars (Tabelog). Two minutes on foot from the Minamida-cho bus stop, 6 min from the Jodoji stop (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Honen-in and Ginkakuji — 2 min from the Minamida-cho bus stop',
    cuisine: 'A yudofu restaurant of about 50 years with a stone-garden view (Tabelog) · Kyoyu Dofu set ¥2,618: yudofu with dipping sauce and ginger, green onion, bonito flakes and nori, goma-dofu, and tempura of shrimp, yuba and vegetables, with rice and pickles (March–April 2026) · premium yudofu set with two shrimp tempura ¥3,600 (August 2026) · awafu dengaku ¥825; fresh yuba sashimi ¥935 (April 2026) · seasonal set meals (Tabelog) · sake, and bottled beer only (May 2026)',
    website: null, gmaps: gm('京湯どうふ 喜さ起'), menu_url: TB + 'dtlmenu/',
    notes: '[Yudofu · near Honen-in and the Philosopher’s Path, about 50 years] A long-established tofu restaurant in a quiet Japanese house with tatami rooms and a stone-garden view: smooth yudofu in the house dashi, rich goma-dofu and yuba tempura in sets from ¥2,618. English menu and staff; free parking; closed Wednesday.',
    chef_bio: { chef_name: '折田 真人', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'Tabelog’s invoice number T7810562887990 is registered to the individual 折田 真人 (NTA register). The shop’s Tabelog text says it has been open about 50 years and that its yudofu dashi is unchanged since it was founded; an August 2026 guest returned after 40 years and found the tofu unchanged.',
      philosophy: 'The yudofu dashi has not changed since the founding (Tabelog).', specialty: 'Yudofu; goma-dofu.',
      anecdotes: [
        { text: 'A May 2026 group of seven came down from Daimonji on a near-30-degree day and recovered over yudofu.', source: R + 'B528523222/' },
        { text: 'A May 2026 visitor was given a window seat cleared specially for the view.', source: R + 'B529393983/' },
      ],
      japanese_sources_summary: '食べログ: 京湯どうふ 喜さ起、豆腐料理・日本料理・鍋、左京区浄土寺南田町173-19、南田町バス停から徒歩2分、11:00〜19:15 (L.O.料理18:00、ドリンク18:45)、水曜定休、2月と6〜9月の平日は予約がなければ16時まで、予約可 (座敷優先)、サービス料なし、カード・電子マネー可、82席、個室あり、スマートカジュアル、英語・繁体字・韓国語のメニュー、無料駐車場5台、創業50年、創業以来変わらない湯豆腐の出汁、枯山水の見える座敷、ベジタリアン・ヴィーガン・グルテンフリー対応のタグ、適格請求書 T7810562887990 (折田 真人)。口コミ (2026年、英語): 京湯どうふのセット2,618円 (湯豆腐、胡麻豆腐、エビ・湯葉・野菜の天ぷら)、上のセット3,600円、粟麩田楽825円、生湯葉の刺身935円、薬味にかつお節、瓶ビールのみ、40年ぶりの再訪。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=7810562887990', R + 'B485914439/', R + 'B525629280/', R + 'B526003590/', R + 'B527455609/', R + 'B527505793/', R + 'B527526886/', R + 'B528523222/', R + 'B529393983/', R + 'B533889217/', R + 'B537169243/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); shoes off in tatami rooms; smart casual.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区浄土寺南田町173-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.023985, 135.796763); cross-checked: GSI 京都府京都市左京区浄土寺南田町173番地 (lot) 65m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527505793/', R + 'B533889217/'],
    price_note: 'Prices from 2026 reviews, tax included; no service charge.', last_checked: TODAY, items: [
      it('京湯どうふ', 'kyō yudōfu', 'Kyoyu Dofu set (yudofu, goma-dofu, tempura, rice, pickles)', '¥2,618', 'Sets', 'ask', 'no', 'April 2026; dashi and bonito flakes.', 'yudofu_set'),
      it('', '', 'Premium yudofu set', '¥3,600', 'Sets', 'ask', 'no', 'August 2026.', 'premium_set'),
      it('粟麩田楽', 'awafu dengaku', 'Awafu dengaku', '¥825', 'À la carte', 'no', 'ask', 'April 2026; wheat-gluten fu.', 'awafu'),
      it('生湯葉の刺身', 'nama yuba no sashimi', 'Fresh yuba sashimi', '¥935', 'À la carte', 'ask', 'ask', 'April 2026.', 'yuba'),
    ] }, {
    cuisine: '枯山水の見える、50年ほど続く湯豆腐の店 (食べログ)・京湯どうふのセット2,618円: たれと生姜、ねぎ、かつお節、海苔の薬味で食べる湯豆腐、胡麻豆腐、エビ・湯葉・野菜の天ぷら、ご飯と漬物 (2026年3〜4月)・エビの天ぷら2尾の上の湯豆腐のセット3,600円 (2026年8月)・粟麩田楽825円、生湯葉の刺身935円 (2026年4月)・季節の定食 (食べログ)・日本酒と瓶ビールのみ (2026年5月)',
    neighborhood: '法然院と銀閣寺の近く。南田町バス停から徒歩2分',
    gf_detail: '要確認。食べログにはグルテンフリー対応のタグがあるが、グルテンフリーと書かれた料理はない。湯豆腐は醤油系のたれで、セットには天ぷら、粟麩田楽には麩 (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはヴィーガンとベジタリアン対応のタグがあるが、湯豆腐は昔からの出汁でかつお節が添えられ、セットにはエビの天ぷら (食べログ、2026年4月)。',
    notes: '[湯豆腐・法然院と哲学の道の近く、創業50年ほど] 座敷と枯山水の見える静かな日本家屋の老舗の豆腐料理店。昔からの出汁のなめらかな湯豆腐、濃い胡麻豆腐、湯葉の天ぷらのセットが2,618円から。英語のメニューとスタッフ、無料駐車場あり、水曜定休。',
  });
}

// ================================================================ La Part Dieu
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26025452/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['18:00', '20:30']);
  put({
    id: 'kyoto_la_part_dieu', name: 'La Part Dieu', category: 'OMNI',
    lat: 35.033412, lng: 135.781525, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Vegetable-led French courses — potages, the “flower crown” vegetable starter, fish and meat mains with several sauces, bread on the side; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the courses are rich in vegetables (the flower crown uses dozens of kinds, May 2024), but the mains are fish or meat and nothing is described as vegan.',
    hours_raw: 'Tuesday–Sunday 12:00–14:00 and 18:00–20:30; closed Monday (Tabelog). Reservations accepted; private hire for up to 20 (Tabelog). Cash only (Tabelog). 10 seats (Tabelog). BYO drinks allowed (Tabelog). Children welcome (Tabelog). Run by one person (March, May and December 2025). About 180 m from Eizan Mototanaka Station (Tabelog). Opened 21 February 2015 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Tanaka, near Eizan Mototanaka Stn',
    cuisine: 'Seasonal French courses with a focus on vegetables (Tabelog; reviews) · the signature “flower crown” starter of many vegetables and edible flowers (2024–2025) · A dinner course ¥5,940: amuse, a starter and main of your choice, a seasonal vegetable dish, dessert, kuromoji tea (October 2026) · potages such as new onion with shichimi or a walnut-topped soup (May–June 2025); three-hour-roasted Ohara carrots with orange purée (June 2025); pan-fried anglerfish with spicy tomato sauce; sea bream with root-on spinach; beef with nasturtium (2025) · mains split half-and-half when two people order differently (June 2025) · tea chosen by the owner to finish (December 2023)',
    website: null, gmaps: gm('La Part Dieu 田中里ノ前町'), menu_url: null,
    notes: '[French · Tanaka near Mototanaka, the vegetable flower crown] A ten-seat French restaurant with a green wall and a dark, calm room, cooked and served by one person: seasonal courses built around vegetables — the signature “flower crown” starter, rich potages, fish and meat with several sauces — from about ¥5,940 at dinner. Cash only; BYO allowed; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Reviewers say the restaurant is run by one person, who cooks and serves with good timing (March, May and December 2025), and who chooses the tea served at the end (December 2023).',
      philosophy: null, specialty: 'Vegetable “flower crown”; seasonal French courses.',
      anecdotes: [
        { text: 'A May 2025 student plans to bring family here before graduating.', source: R + 'B506418779/' },
        { text: 'Two university friends reunited after 18 years over a Saturday lunch here (May 2025).', source: R + 'B508362480/' },
      ],
      japanese_sources_summary: '食べログ: La Part Dieu、フレンチ、左京区田中里ノ前町59、叡電元田中駅から179m、火〜日 12:00〜14:00、18:00〜20:30、月曜定休、予約可、現金のみ、10席、持ち込み可、ベジタリアン対応のタグ、2015年2月21日オープン。口コミ (2025〜2026年、英語): ひとりで営む店、名物の野菜の「花の冠」、Aディナーコース5,940円 (アミューズ、選べる前菜とメイン、季節の野菜、デザート、クロモジ茶)、新玉ねぎのポタージュ、大原の人参、アンコウ、鯛、根付きのほうれん草、牛肉、緑の壁の落ち着いた店内。',
      confidence: 'medium', sources: [TB, R + 'B407970294/', R + 'B409778495/', R + 'B476667239/', R + 'B484514938/', R + 'B506418779/', R + 'B508362480/', R + 'B508395743/', R + 'B537911814/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ten seats, one person cooking and serving — book; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区田中里ノ前町59',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.033412, 135.781525); cross-checked: GSI 京都府京都市左京区田中里ノ前町59番地 (lot) 56m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537911814/'],
    price_note: 'Dinner course price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'A dinner course (amuse, starter, vegetable dish, main, dessert, tea)', '¥5,940', 'Courses', 'ask', 'ask', 'October 2026.', 'dinner_a'),
      it('', '', 'Flower crown (vegetable starter)', '', 'Starters', 'ask', 'ask', '2024–2025.', 'flower_crown'),
    ] }, {
    cuisine: '野菜を大切にする季節のフランス料理のコース (食べログ、口コミ)・たくさんの野菜とエディブルフラワーの名物の前菜「花の冠」(2024〜2025年)・Aディナーコース5,940円: アミューズ、選べる前菜とメイン、季節の野菜の皿、デザート、クロモジ茶 (2026年10月)・七味をきかせた新玉ねぎやくるみをのせたポタージュ (2025年5〜6月)。3時間焼いた大原の人参とオレンジのピュレ (2025年6月)。アンコウのソテーの辛いトマトソース、根付きのほうれん草を添えた鯛、ナスタチウムをのせた牛肉 (2025年)・ふたりで別のメインを頼むと半分ずつ盛り分けてくれる (2025年6月)・締めは店主が選んだお茶 (2023年12月)',
    neighborhood: '田中、叡電元田中駅の近く',
    gf_detail: '要確認。ポタージュ、野菜の前菜「花の冠」、いくつものソースの魚や肉のメイン、パンが付く野菜中心のフランス料理のコース。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアン対応のタグがあり、野菜が多いコース (花の冠は何十種もの野菜、2024年5月) だが、メインは魚か肉で、ヴィーガンのものは書かれていない。',
    notes: '[フレンチ・元田中近くの田中、野菜の花の冠] 緑の壁と暗く落ち着いた店内の10席のフランス料理店で、ひとりで料理もサービスもこなす。名物の前菜「花の冠」、濃いポタージュ、いくつものソースの魚や肉など、野菜を中心にした季節のコースが夜5,940円ほどから。現金のみ、持ち込み可、月曜定休。',
  });
}

save();
