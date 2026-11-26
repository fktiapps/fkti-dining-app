// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 105.
//   + 飲 京都小川生薬 Cafe (first-floor herbal-tea café of the 京都小川生薬 building by Nijo Castle; sister of kyoto_ogawa_shoyaku_restaurant) — rest
//   + りょうりや○ (Ryoriya En: six-seat counter of vegetable-led Japanese cuisine at Sanjo Inokuma, run by a young couple; since 2024) — rest
//   + 樂遇レストラン (lu rou fan and boiled dumplings by a couple from China, across from Kumano Shrine; since May 2025) — rest
//   + テンダーコーヒー ワンダーワッフル (Tender Coffee Wonder Waffle: waffle and coffee café looking over Kumano Shrine) — rest
//   - かわさだ (26020426): skipped — no review since 2012.
//   Rest tier, nearest-first from `next rest 2000` (core and notable have nothing left in this lane). Fetched by this worker
//   with fetchshop.mjs (Tabelog /en/, 3 s between requests); 26041012 was fetched last round.
//   Dedupe (2026-11-26): none of the four is in data/kyoto.json (name, Tabelog id, address) or in another worker's pending script.
//   Chain / group checks: 京都小川生薬 is one building (1F café, 2F restaurant, 3F one-group villa, official site) run by the
//   herbal-medicine maker 小川生薬; its restaurant is already in data as kyoto_ogawa_shoyaku_restaurant ("Per the official site:
//   the 京都小川生薬 building has a first-floor café pairing health teas with sweets, this second-floor restaurant, and a one-group
//   villa on the third floor"), so the café is drafted as a sister concept (different format, same building). りょうりや○, 樂遇
//   and Tender Coffee are single shops (Michelin Guide page, Tabelog, the café's Instagram).
//   Romaji: Kyoto Ogawa Shouyaku Cafe from the café's own English page (kyoto-ogawa.jp/en/cafe, title "Kyoto Ogawa Shouyaku CAFE";
//   the restaurant record spells it Shoyaku, which the same site also uses). Ryoriya En from the Michelin Guide page
//   ("りょうりや〇／Ryoriya EN", "EN means 'circle' or 'connection'") and the shop's Tabelog kana リョウリヤエン. Tender Coffee Wonder
//   Waffle from the shop's own Instagram display name (@tender_coffee). 樂遇レストラン has no sourced romaji: kanji/kana only.
//   Names given in machine-translated reviews (the chef's and training restaurants' at りょうりや○, farm and brand names at 樂遇)
//   are left out. No remarks about other diners; no halal claims; no owner deaths; no posting bans.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-105');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 飲 京都小川生薬 Cafe
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26041012/'; const R = TB + 'dtlrvwlst/';
  const HP = 'https://kyoto-ogawa.jp/', CAFE = HP + 'cafe/', EN = HP + 'en/cafe', STOLLEN = HP + '2026-11-17/';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_ogawa_shoyaku_cafe', name: '飲 京都小川生薬 Cafe (Kyoto Ogawa Shouyaku Cafe)', category: 'OMNI',
    lat: 35.012486, lng: 135.753561, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: no gluten-free claim on the official site or Tabelog. The teas are herbal blends, but the menu includes a soup plate served with bread, Handa somen (wheat, summer 2026), a burdock brownie, granola, tiramisu and stollen; the soup curry, warabi mochi and dashimaki are not described for gluten (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: no vegan claim. The soup curry has chicken in the broth (June 2026) and the dashimaki set is eaten with chicken dashi (official site; September and October 2026); the teas are herbal, and brown-sugar warabi mochi with corn, azuki and matcha powders is on the menu, but its ingredients are not stated (official site; September 2026).',
    hours_raw: 'Every day 10:00–17:00, last order 16:30; meals (soup curry, soup plate, dashimaki set, tuna bowl) 10:00–15:00 (official café page). Tabelog gives every day 10:00–17:00 (L.O. 16:30) with closing days not fixed — check Google Maps. No reservations (Tabelog; a July 2026 diner came at 11:30 because booking was not possible). 38 seats at 2- and 4-person tables; private hire possible (Tabelog). Cards (JCB), e-money and QR accepted; non-smoking; wheelchair accessible; children and strollers welcome; no parking — bicycles only out front, coin parking nearby (Tabelog; October 2026). Multilingual menu: English, Traditional and Simplified Chinese, Korean (Tabelog). First floor of the 京都小川生薬 building; the restaurant kyoto_ogawa_shoyaku_restaurant is upstairs. Opened 6 April 2024 (Tabelog). 2 minutes from Exit 2 of Nijojo-mae Station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Aburanokoji near Nijo Castle — 2 min from Nijojo-mae Stn',
    cuisine: 'Herbal health teas paired with sweets, from the 小川生薬 herbal-medicine house (official site) · official menu, tax included: five-tea sweets pairing 5種の茶菓めぐり ¥1,800; tea and gelato set ¥780 (kuromoji, laurel with olive, rooibos gelato); mini parfait of mulberry-matcha warabi mochi with a matcha latte ¥1,300; forest warabi mochi of brown sugar with corn, azuki and matcha powders ¥1,200; rooibos tiramisu scented with rice, with kuromoji gelato ¥1,200; single items from ¥380; until 15:00, a medicinal soup curry with 100 herbs ¥1,480, a soup plate of two soups with bread ¥1,280, an egg-yolk dashimaki set with chicken dashi ¥1,480 and a bowl of seared and raw marinated tuna on multigrain rice ¥1,600 (official café page, read 2026-11-26) · deluxe stollen ¥1,000 with herbal tea in the café, winter 2026 (official news, 17 November 2026) · about ten health teas, hot or iced, free-flowing with a meal or dessert: pink rooibos, Hokkaido azuki, ginger rooibos, kuromoji, black soybean, organic burdock, Japanese black tea, organic mulberry leaf (2026 reviews) · soup curry with black rice and three chutneys, honey on hand if it is too spicy (June, July, October 2026) · dashimaki with a runny yolk, multigrain rice, chicken and lotus root soboro, wasabi kombu, finished as chazuke with chicken dashi, from 16 September 2026 (September, October 2026) · summer Handa somen with sudachi and shiso sorbet and a small multigrain soboro bowl (June, July 2026) · cheesecake, brown sugar warabi mochi, burdock brownie, kuromoji gelato and dokudami and rooibos nuts in the five-tea set (July 2026) · teas, granola and powdered ginger sold to take home (2026 reviews)',
    website: CAFE, gmaps: gm('京都小川生薬 カフェ 二条油小路町272'), menu_url: CAFE,
    notes: '[Café · Nijo Castle, herbal teas] The first-floor café of the 京都小川生薬 building near Nijo Castle, run by an herbal-medicine house that has worked with medicinal herbs for nearly a hundred years: about ten health teas, hot or iced and free-flowing, paired with warabi mochi, gelato and tiramisu, and until 15:00 a soup curry of 100 herbs or a dashimaki set (¥1,480). Calm modern Japanese room with a garden; no reservations. Teas sold to take home.',
    chef_bio: { chef_name: null, roles: ['Run by the herbal-medicine maker 小川生薬 (official site)'], origin: null,
      background: 'Per the official site: the café pairs health teas made from 小川生薬’s high-grade herbal ingredients with sweets, aiming at an easy-drinking taste that overturns the image of herbal medicine as bitter, and draws on nearly a hundred years of working with herbal medicine. The building also holds the second-floor restaurant (kyoto_ogawa_shoyaku_restaurant) and a third-floor villa for one group. Opened 6 April 2024 (Tabelog). Reviewers describe indirect lighting and a garden (June 2026) and a calm space like a Kyoto townhouse (July 2026).',
      philosophy: 'A nature-inspired casual café to soothe mind and body (official site: ココロとカラダを癒す自然派カジュアルカフェ).',
      specialty: 'Herbal tea and sweets pairings; soup curry of 100 medicinal herbs.',
      anecdotes: [
        { text: 'A June 2026 visitor who ordered only a ginger lemon tea was served dokudami nuts with it and given yogurt with granola on the house.', source: R + 'B530145881/' },
        { text: 'A July 2026 diner noted that tea refills are requested with a button under the table.', source: R + 'B531036364/' },
        { text: 'A September 2026 neighbour ordered warabi mochi and drank from the self-serve choice of ten teas, likening it to a healthy afternoon tea.', source: R + 'B536040240/' },
      ],
      japanese_sources_summary: '公式サイト: 京都小川生薬 1F カフェスペース、お茶菓子と健康茶のペアリングを味わえる親しみやすい自然派カジュアルカフェ、小川生薬ならではの高品質な生薬を用いた健康茶、「苦そう」というイメージを覆す飲みやすい味わい、100年近く生薬を見続けてきた。10:00〜17:00 (L.O.16:30)、食事は10:00〜15:00。メニュー (税込): 5種の茶菓めぐり1,800円、お茶とジェラートセット780円、ミニパフェ＆抹茶ラテ1,300円、森のわらび餅1,200円、ルイボスティラミス1,200円、単品380円〜、100種類生薬が入った薬膳スープカレー1,480円、養生スーププレート1,280円、割ってとろ〜り。黄身だし巻き御膳1,480円、2種の漬けマグロ丼セット1,600円。お知らせ (2026年11月17日): カフェで贅沢シュトーレン1,000円。食べログ: 飲 京都小川生薬 Cafe、カフェ・スイーツ・スープカレー、中京区油小路通押小路上ル二条油小路町272、二条城前駅2番出口から徒歩2分、毎日10:00〜17:00、定休日は不定、予約不可、38席、カード (JCB)・電子マネー・QR可、禁煙、車椅子可、子ども可、多言語メニュー、2024年4月6日オープン。口コミ (2026年、英語): 健康茶10種が飲み放題、生薬のスープカレー、黄身のだし巻き御膳、夏の半田そうめん、茶葉やグラノーラを買って帰れる。',
      confidence: 'medium', sources: [TB, HP, CAFE, EN, STOLLEN, R + 'B528798804/', R + 'B530145881/', R + 'B530360606/', R + 'B530807478/', R + 'B530930958/', R + 'B531036364/', R + 'B531192371/', R + 'B531673992/', R + 'B534656102/', R + 'B536040240/', R + 'B536219208/', R + 'B536241469/'] },
    cultural_comfort: { level: 'english', note: 'English website and a menu in English, Chinese and Korean (official site; Tabelog). Tabelog warns phone service may be Japanese only. Self-serve teas; no reservations.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区油小路通押小路上ル二条油小路町272 京都小川生薬 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (café page, news of 17 November 2026); Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012431, 135.753561) is the same point as the restaurant upstairs (kyoto_ogawa_shoyaku_restaurant, 35.012432, 135.753558); offset ~6 m north so the two pins do not stack; not cross-checked (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [CAFE, STOLLEN],
    price_note: 'Official café page, tax included (read 2026-11-26). Meals 10:00–15:00.', last_checked: TODAY, items: [
      it('5種の茶菓めぐり', '', 'Five teas paired with five sweets', '¥1,800', 'Café', 'ask', 'ask', 'July 2026: cheesecake, warabi mochi, burdock brownie, kuromoji gelato, nuts.', 'pairing5'),
      it('お茶とジェラートセット', '', 'Tea and gelato set (three gelato)', '¥780', 'Café', 'ask', 'ask', '', 'gelato_set'),
      it('森のわらび餅', '', 'Forest warabi mochi with three powders', '¥1,200', 'Café', 'ask', 'ask', '', 'warabimochi'),
      it('ルイボスティラミス', '', 'Rooibos tiramisu with kuromoji gelato', '¥1,200', 'Café', 'ask', 'no', '', 'tiramisu'),
      it('100種類生薬が入った薬膳スープカレー', '', 'Medicinal soup curry with 100 herbs', '¥1,480', 'Meals', 'ask', 'no', 'Chicken in the broth (June 2026).', 'soup_curry'),
      it('割ってとろ〜り。黄身だし巻き御膳', '', 'Egg-yolk dashimaki set with chicken dashi', '¥1,480', 'Meals', 'ask', 'no', '', 'dashimaki'),
      it('2種の漬けマグロ丼セット', '', 'Two-kind marinated tuna bowl set', '¥1,600', 'Meals', 'ask', 'no', '', 'tuna_don'),
    ] }, {
    cuisine: '生薬の小川生薬の健康茶とお茶菓子のペアリング (公式サイト)・公式メニュー (税込): 5種の茶菓めぐり1,800円、お茶とジェラートセット780円 (黒文字、ローリエ×オリーブ、ルイボスのジェラート)、桑抹茶わらび餅のミニパフェと抹茶ラテ1,300円、黒糖わらび餅にとうもろこし粉末・あずき粉末・抹茶の森のわらび餅1,200円、ルイボスティとお米の香りのルイボスティラミスに黒文字のジェラート1,200円、単品380円〜、15時までは100種類生薬が入った薬膳スープカレー1,480円、2種類のスープとパンの養生スーププレート1,280円、鶏だしで味わう黄身だし巻き御膳1,480円、炙りと生の漬けマグロを雑穀米にのせた2種の漬けマグロ丼セット1,600円 (公式サイトのカフェのページ、2026年11月26日閲覧)・冬の贅沢シュトーレン1,000円を健康茶と (公式サイトのお知らせ、2026年11月17日)・食事やデザートには健康茶10種ほどが温・冷で飲み放題: ルイボスティー、小豆茶、生姜ルイボスティー、黒文字茶、黒豆茶、ごぼう茶、和紅茶、桑の葉茶 (2026年の口コミ)・スープカレーは黒米と3種のチャツネ、辛すぎるときは蜂蜜も (2026年6月・7月・10月)・黄身がとろりと流れるだし巻き、雑穀米、鶏とれんこんのそぼろ、わさび昆布、最後は鶏だしで茶漬けに。2026年9月16日から (2026年9月・10月)・夏はすだちと紫蘇のシャーベットの半田そうめんと雑穀米の小さなそぼろ丼 (2026年6月・7月)・5種の茶菓めぐりにはチーズケーキ、黒糖のわらび餅、ごぼうのブラウニー、黒文字のジェラート、どくだみとルイボスのナッツ (2026年7月)・お茶やグラノーラ、生姜パウダーは持ち帰り用に買える (2026年の口コミ)',
    neighborhood: '二条城近くの油小路通。二条城前駅から徒歩2分',
    gf_detail: 'GF — 要確認。公式サイトにも食べログにもグルテンフリーの記載なし。お茶は生薬のブレンドだが、パンがつく養生スーププレート、半田そうめん (小麦、2026年夏)、ごぼうのブラウニー、グラノーラ、ティラミス、シュトーレンもある。スープカレー、わらび餅、だし巻きのグルテンの説明はない (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン — 要確認。ヴィーガンの記載なし。スープカレーのスープには鶏が入り (2026年6月)、だし巻きの御膳は鶏だしで味わう (公式サイト、2026年9月・10月)。お茶は生薬で、とうもろこし・あずき・抹茶の粉末のわらび餅もあるが、材料は記載なし (公式サイト、2026年9月)。',
    notes: '[カフェ・二条城、健康茶] 二条城近く、100年近く生薬を扱ってきた小川生薬の建物の1階のカフェ。健康茶10種ほどを温・冷で飲み放題、わらび餅やジェラート、ティラミスとのペアリング。15時までは100種類の生薬のスープカレーや黄身のだし巻き御膳 (1,480円)。間接照明と庭のある落ち着いた和モダンの店内。予約不可。お茶は持ち帰り用も買える。',
  });
}

// ================================================================ りょうりや○
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26041024/'; const R = TB + 'dtlrvwlst/';
  const MG = 'https://guide.michelin.com/en/kyoto-region/kyoto/restaurant/ryoriya-en', MGJ = 'https://guide.michelin.com/jp/ja/kyoto-region/kyoto/restaurant/ryoriya-en';
  const D = day(['18:30', '21:30']); const W = day(['08:00', '10:00'], ['18:30', '21:30']);
  put({
    id: 'kyoto_ryoriya_en', name: 'りょうりや○ (Ryoriya En)', category: 'OMNI',
    lat: 35.007723, lng: 135.75056, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: the shop’s Tabelog page lists gluten-free, vegan, vegetarian and kosher options, but says nothing on how gluten is handled; courses have included tempura, fried dishes, crab noodles and dashi dishes (2024–26 reviews). Ask when booking.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: the shop’s own Tabelog text says it created a vegan ramen with a kombu broth for vegetarian and vegan guests, and its page lists vegan options; the courses themselves are built on fish, dashi and meat (2024–26 reviews). Ask when booking.',
    hours_raw: 'Dinner 18:30–21:30, closed Wednesday; breakfast 8:00–10:00 on Fridays, Saturdays, Sundays and holidays (Tabelog; the Michelin Guide page gives the same dinner hours). Reservations only; 7 or more by phone (Tabelog); online booking linked from the Michelin Guide page. A May 2026 reviewer wrote that weekday lunch ended that month and that from June 2026 lunch would be served on Sundays only (times not given). The shop holds a few à la carte days a month (Tabelog). 6 counter seats; groups of 4 or more can take the whole counter; private hire up to 20 (Tabelog). Cards (Visa, Mastercard, JCB); no e-money or QR; no service charge; non-smoking; wheelchair accessible; free Wi-Fi; English menu; children by prior phone call; coin parking nearby (Tabelog). Opened 20 June 2024 (Tabelog). 5 minutes from Omiya, Shijo Omiya and Nijojo-mae stations (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: W, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo Inokuma — between Nijo Castle and Shijo Omiya',
    cuisine: 'Japanese cuisine led by vegetables picked in the morning, some grown with farmers in Kamigamo and by the Shugakuin Imperial Villa (Michelin Guide) · the shop’s own text: Kyoto vegetables bought directly from producers, fish chosen with an eye on the catch, dashi made with water from its own well, every seasoning checked (Tabelog) · reviewers’ spend ¥20,000–29,999 for dinner (Tabelog average), from ¥24,400 with drinks (August 2024); a ¥10,000 lunch (May 2026); breakfast ¥10,000–14,999 (January 2025) · breakfast course: steamed shrimp yam, kombu-cured sea bream, dashimaki with Kujo green onions, vegetable tempura with salt, clay-pot rice with accompaniments, apple ice cream (December 2024) · dinner: chawanmushi with sweet shrimp and lily bulb, shirako with sansho, eel with crisp skin, sesame salad, the chef’s own karasumi, 3 go of Koshihikari rice, strawberry ice cream with croquant, handmade warabi mochi (February 2026); hemp-seed inari, shrimp shinjo, three-month fermented mackerel, wagyu aged a week with tofu cream and cacao (February 2025); risotto, Biwa trout, fried pike conger, crab noodles (November 2024) · new-onion soup from vegetable broth alone, horse mackerel from Shimane with mitarashi sauce and myoga, Koshihikari from Gotemba grown by a friend of the chef, warabi mochi kneaded at the counter (May 2026) · a matsutake feast with mushrooms sent daily from Iwate and Nagano (October 2026); plenty of flower sansho in spring (April 2026) · à la carte days: edamame, karaage, shrimp chili, unadon (July 2025); beef stew (Tabelog) · sea bream shio ramen from sea bream trimmings and kombu, seasoned only with salt (Tabelog) · about 30 sakes, 10 champagnes and wines (December 2024)',
    website: null, gmaps: gm('りょうりや○ 京都 三条猪熊町635-1'), menu_url: null,
    notes: '[Japanese · Sanjo Inokuma, vegetable-led counter] A six-seat pine counter behind a large enso-circle noren, opened in 2024 by a young chef and run by a young couple: Japanese courses built on morning-picked vegetables, well-water dashi and generous clay-pot rice, with a weekend breakfast course. Dinner about ¥20,000–30,000 (reviews). Reservations only; closed Wednesday. Listed in the Michelin Guide.',
    chef_bio: { chef_name: null, roles: ['owner-chef'], origin: null,
      background: 'Opened on 20 June 2024 (Tabelog). The Michelin Guide page says the name EN means “circle” or “connection”, that the restaurant believes cooking reflects the person, and that some vegetables are grown with farmers in Kamigamo and by the Shugakuin Imperial Villa and picked in the morning. Reviewers describe a young owner-chef who trained at well-known restaurants and opened the shop in the chef’s twenties (August 2024, February 2025), and a restaurant run by a young couple (February 2026), the owner and the proprietress both friendly and chatty (August 2024, January 2025, June 2025, February 2026). The chef visits farmers to choose vegetables (May 2026). A December 2024 reviewer explains the pine counter, bamboo flooring and plum chopstick rests as pine, bamboo and plum for good fortune.',
      philosophy: 'Cooking reflects the person (Michelin Guide). The shop’s own text: everything starts at sourcing, and it uses vegetable trimmings and fish scraps for stocks to cut food waste (Tabelog).',
      specialty: 'Vegetable-led courses; clay-pot rice; warabi mochi made at the counter.',
      anecdotes: [
        { text: 'A February 2026 diner, back after a year, was welcomed by the owner waiting outside in the cold, and left the drinks to the owner while chatting over sake at the end.', source: R + 'B500309818/' },
        { text: 'A May 2026 diner got the house warabi mochi instead of the usual ice cream because a guest who had ordered it cancelled, and watched it kneaded and chilled at the counter.', source: R + 'B528141398/' },
        { text: 'A February 2025 first-timer found the meal moved at the owner’s pace, and two February 2026 regulars praised the vegetables but wished for more fish.', source: R + 'B500947086/' },
      ],
      japanese_sources_summary: 'ミシュランガイド: りょうりや〇／Ryoriya EN、日本料理、中京区三条猪熊町635-1、店先の大きな円相の暖簾が印象的、朝採れ野菜の瑞々しさを届けてくれる、上賀茂や修学院離宮の近くの農家と野菜を育てる、18:30〜21:30、水曜休み。食べログ: りょうりや○ (リョウリヤエン)、日本料理、完全予約制 (7名以上は電話)、18:30〜21:30、水曜休み、金・土・日・祝は朝食8:00〜10:00、6席、4名以上で貸切、最大20名、カード可、サービス料なし、禁煙、車椅子可、英語メニュー、2024年6月20日オープン。店の紹介: 京野菜は生産者から直接、魚は漁の状況も確認、出汁の水は自家の井戸水、調味料まで自分で確かめる、月に数回のアラカルトの日、鯛のあらと昆布の塩ラーメン、ヴィーガンのお客様のための昆布だしのヴィーガンラーメン。口コミ (2024年8月〜2026年10月、英語): 若いご夫婦が営む、店主と女将さんが気さく、松のカウンター、朝食の御膳、土鍋ご飯、自家製からすみ、わらび餅、10月の松茸づくし。',
      confidence: 'medium', sources: [TB, MG, MGJ, R + 'B489903046/', R + 'B490562743/', R + 'B496216860/', R + 'B497745473/', R + 'B500309818/', R + 'B500947086/', R + 'B501469241/', R + 'B501963292/', R + 'B509217643/', R + 'B513497250/', R + 'B528141398/', R + 'B529738934/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog) and online booking via the Michelin Guide page; Tabelog warns phone service may be Japanese only. No evidence of spoken English.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区三条猪熊町635-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (official information) and Michelin Guide page; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007723, 135.750560); not cross-checked (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B528141398/'],
    price_note: 'No menu or course prices published; reviewers’ spend bands from Tabelog (2024–26) and a ¥10,000 lunch (May 2026).', last_checked: TODAY, items: [
      it('', '', 'Dinner course (reviewers’ spend)', '¥20,000–29,999', 'Dinner', 'ask', 'ask', 'Tabelog average; from ¥24,400 with drinks (August 2024).', 'dinner'),
      it('', '', 'Breakfast course (Fri, Sat, Sun, holidays)', '¥10,000–14,999', 'Breakfast', 'ask', 'no', 'Reviewer’s spend band (January 2025).', 'breakfast'),
    ] }, {
    cuisine: '朝採れの野菜を軸にした日本料理。上賀茂や修学院離宮の近くの農家と育てる野菜も (ミシュランガイド)・店の紹介: 京野菜は生産者から直接、魚は漁の状況も確認して選び、出汁の水は自家の井戸水、調味料まで自分で確かめる (食べログ)・口コミの予算は夜20,000〜29,999円 (食べログ)、飲み物込みで24,400円〜 (2024年8月)、昼10,000円 (2026年5月)、朝10,000〜14,999円 (2025年1月)・朝の御膳: 海老芋の蒸し物、鯛の昆布締め、九条ねぎのだし巻き、野菜の天ぷらを塩で、土鍋ご飯とご飯のお供、りんごのアイス (2024年12月)・夜: 甘海老と百合根の茶碗蒸し、山椒の白子、皮がぱりっとした鰻、胡麻のサラダ、自家製からすみ、コシヒカリ3合、クロッカンを添えた苺のアイス、手作りのわらび餅 (2026年2月)。麻の実のいなり、海老しんじょう、3か月熟成の鯖、1週間熟成の和牛に豆腐のクリームとカカオ (2025年2月)。リゾット、ビワマス、鱧の揚げ物、蟹の麺 (2024年11月)・野菜のだしだけの新玉ねぎのスープ、Shimane の鯵にみたらしのたれと茗荷、シェフの友人が Gotemba で育てたコシヒカリ、目の前で練るわらび餅 (2026年5月)・Iwate と Nagano から毎日届く松茸づくし (2026年10月)。春は花山椒をたっぷり (2026年4月)・アラカルトの日: 枝豆、唐揚げ、海老チリ、鰻丼 (2025年7月)。ビーフシチュー (食べログ)・鯛のあらと昆布で取った、塩だけの鯛の塩ラーメン (食べログ)・日本酒約30種、シャンパーニュ10種、ワイン (2024年12月)',
    neighborhood: '三条猪熊。二条城と四条大宮のあいだ',
    gf_detail: 'GF — 要確認。食べログの店のページにはグルテンフリー、ヴィーガン、ベジタリアン、コーシャの対応ありとあるが、グルテンの扱いの説明はない。コースには天ぷら、揚げ物、蟹の麺、出汁の料理が出た (2024〜2026年の口コミ)。予約時に相談を。',
    vegan_detail: 'ヴィーガン — 要確認。食べログの店の紹介では、ベジタリアンやヴィーガンのお客様のために昆布だしのヴィーガンラーメンを作ったとあり、ヴィーガン対応ありとも載っている。ただしコースは魚、出汁、肉が中心 (2024〜2026年の口コミ)。予約時に相談を。',
    notes: '[日本料理・三条猪熊、野菜が主役のカウンター] 大きな円相の暖簾の奥に松のカウンター6席。2024年に若い店主が開き、若いご夫婦が営む。朝採れの野菜、井戸水の出汁、たっぷりの土鍋ご飯のコース。週末は朝食の御膳も。夜は口コミで20,000〜30,000円ほど。完全予約制、水曜休み。ミシュランガイドに掲載。',
  });
}

// ================================================================ 樂遇レストラン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043208/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '20:30']);
  put({
    id: 'kyoto_rakugu_restaurant', name: '樂遇レストラン', category: 'OMNI',
    lat: 35.017292, lng: 135.778000, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: lu rou fan braised with soy sauce and handmade wheat-skin dumplings with soy-sauce dips (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the menu is braised pork belly over rice and meat-filled dumplings (2026 reviews).',
    hours_raw: 'Tabelog: 11:30–15:00 and 17:00–20:30; closed Wednesday; hours may change. Payment: Tabelog says cards are accepted (no e-money or QR), but an October 2026 reviewer wrote that only cash is accepted — bring cash. Non-smoking; no private rooms; no parking (Tabelog). On the second floor of the パレステート日生熊野 building across from Kumano Shrine: up the stairs, at the end of the hall (August 2026). Opened May 2025 (owner, as told to an August 2026 reviewer). About 8 minutes from Jingu-Marutamachi Station.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kumano Shrine — Shogoin, near Higashiyama Marutamachi',
    cuisine: 'Taiwanese lu rou fan and boiled dumplings · lu rou fan with soup: regular ¥1,080 (March and August 2026; ¥1,000 in a July 2026 review), small ¥880 (July, August, October 2026), large ¥400 more (July 2026) — the regular has one more slice of pork and about 1.5 times the rice of the small (October 2026) · braised pork belly with star anise and five-spice, braised egg, cherry tomatoes, and a light turnip soup (March, August, October 2026) · handmade boiled dumplings: 6 for ¥400, 12 for ¥800, 20 for ¥1,200, with soy sauce, vinegar and chili dips (August, October 2026) · pork from a Kagoshima farm and soy sauce from a Kyoto maker over 140 years old (August, October 2026) · bottled beer with free peanuts (October 2026) · chocolate on the way out (March, October 2026)',
    website: null, gmaps: gm('樂遇レストラン 京都 聖護院山王町43-2'), menu_url: null,
    notes: '[Taiwanese · Kumano Shrine, lu rou fan] A small, quiet lu rou fan shop at the end of a hallway in a retro building across from Kumano Shrine, run by a cheerful couple from China: tender braised pork belly over rice from ¥880 with soup, and handmade boiled dumplings from ¥400 for six. Classical music, chocolate on the way out. Closed Wednesday; bring cash.',
    chef_bio: { chef_name: null, roles: ['owners (a couple)'], origin: 'China (August 2026 review)',
      background: 'Run by a husband-and-wife couple (March, May, August, October 2026 reviews). An August 2026 reviewer was told that the husband worked in the media industry in China before turning to winemaking, and opened the restaurant in a much-loved Kyoto in May 2025; the husband explained that lu rou fan is Taiwanese rather than Chinese, and the wife mentioned a hope of making lu rou fan with wine one day. The room is quiet and dimly lit with classical music (September 2025, August and October 2026). An October 2026 reviewer notes that Japanese is not widely spoken, but the couple is very welcoming.',
      philosophy: null, specialty: 'Taiwanese lu rou fan; handmade boiled dumplings.',
      anecdotes: [
        { text: 'An October 2026 diner came alone on a Friday, returned for Sunday lunch with the diner’s wife, and was given two bowls, a spoon and soup for both to share one regular lu rou fan.', source: R + 'B537490490/' },
        { text: 'The same October 2026 diner went back after leaving to point out a mistake on the bill, and said it was put right smoothly.', source: R + 'B537490490/' },
        { text: 'A September 2025 reviewer who had known the building for over 20 years had no idea it held so many restaurants on its semi-basement and middle floors.', source: R + 'B513934816/' },
      ],
      japanese_sources_summary: '食べログ: 樂遇レストラン、台湾料理、左京区聖護院山王町43-2 パレステート日生熊野、11:30〜15:00・17:00〜20:30、水曜休み、カード可・電子マネーとQR不可、禁煙、駐車場なし。口コミ (2025年9月〜2026年10月、英語): 熊野神社の向かいのレトロなビルの2階、階段を上がった廊下の奥、中国出身のご夫婦が営む、台湾の魯肉飯は普通1,080円 (スープ付き)・小880円・大は400円増し、手作りの水餃子6個400円・12個800円・20個1,200円、八角と五香粉の豚バラ、鹿児島の農場の豚、創業140年を超える京都の醤油、帰りにチョコレート、クラシック音楽、2025年5月開店、2026年10月の口コミでは現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B513934816/', R + 'B524763879/', R + 'B527395024/', R + 'B532758486/', R + 'B534558360/', R + 'B534645328/', R + 'B535884600/', R + 'B536236904/', R + 'B537490490/', R + 'B537888916/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Owners from China; an October 2026 reviewer says Japanese is not widely spoken, but the menu is short (lu rou fan in three sizes and dumplings) and easy to point at. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区聖護院山王町43-2 パレステート日生熊野 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.017292, 135.777951) is 2 m from kyoto_morioka_kumano (パレステート日生, 35.017297, 135.777934); moved ~5 m east to 35.017292, 135.778000 so the pins of this multi-shop building do not stack (also ~7 m from テンダーコーヒー, same building, 2F); not cross-checked (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532758486/', R + 'B534558360/', R + 'B537490490/'],
    price_note: 'Review prices only (2026); the regular lu rou fan is ¥1,080 in March and August 2026 reviews and ¥1,000 in a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Taiwanese lu rou fan (regular), with soup', '¥1,080', 'Mains', 'no', 'no', 'Small ¥880; large ¥400 more (July 2026).', 'lurou_regular'),
      it('', '', 'Taiwanese lu rou fan (small), with soup', '¥880', 'Mains', 'no', 'no', '', 'lurou_small'),
      it('', '', 'Handmade boiled dumplings (6)', '¥400', 'Dumplings', 'no', 'no', '12 for ¥800, 20 for ¥1,200 (August 2026).', 'dumplings6'),
    ] }, {
    cuisine: '台湾の魯肉飯と水餃子・魯肉飯はスープ付きで普通1,080円 (2026年3月・8月。2026年7月の口コミでは1,000円)、小880円 (2026年7月・8月・10月)、大は400円増し (2026年7月)。普通は小より豚が1枚多く、ご飯は1.5倍ほど (2026年10月)・八角と五香粉で煮た豚バラ、煮卵、ミニトマト、かぶの入ったあっさりしたスープ (2026年3月・8月・10月)・手作りの水餃子6個400円、12個800円、20個1,200円、醤油・酢・辛いたれの3種で (2026年8月・10月)・豚は鹿児島の農場のもの、醤油は創業140年を超える京都の醤油 (2026年8月・10月)・瓶ビールにはピーナッツのサービス (2026年10月)・帰りにチョコレート (2026年3月・10月)',
    neighborhood: '熊野神社前。聖護院、東山丸太町のそば',
    gf_detail: 'グルテンフリー不可。醤油で煮た魯肉飯と、小麦の皮の手作り水餃子を醤油のたれで (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚バラの煮込みご飯と肉の水餃子が中心 (2026年の口コミ)。',
    notes: '[台湾料理・熊野神社前、魯肉飯] 熊野神社の向かい、レトロなビルの廊下の奥にある静かな魯肉飯の店。中国出身の明るいご夫婦が営む。やわらかく煮た豚バラの魯肉飯はスープ付きで880円から、手作りの水餃子は6個400円から。クラシック音楽が流れ、帰りにチョコレート。水曜休み。現金の用意を。',
  });
}

// ================================================================ テンダーコーヒー ワンダーワッフル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26028916/'; const R = TB + 'dtlrvwlst/';
  const IG = 'https://www.instagram.com/tender_coffee/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_tender_coffee_wonder_waffle', name: 'テンダーコーヒー ワンダーワッフル (Tender Coffee Wonder Waffle)', category: 'OMNI',
    lat: 35.017298, lng: 135.77808, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a waffle café; the food is waffles, doria and gratin (2022–26 reviews). No gluten-free claim.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: waffles come with cream, butter or ice cream, and the savoury dishes use cheese, bacon, sausage or meat sauce (2022–24 reviews). No vegan claim.',
    hours_raw: '11:00–18:00; closed Tuesday and Wednesday, plus irregular days (shop’s Instagram bio; Tabelog the same). An October 2022 reviewer noted that Instagram often announced an 11:30 opening while the signs said 11:00. Tabelog says no reservations, while a February 2022 reviewer wrote that bookings could be made by Instagram DM or phone. Cash only (Tabelog; October 2022, June 2024). Counter seating, small and cozy; non-smoking; no parking (Tabelog). Second floor of the パレステート日生熊野 building, directly across from Kumano Shrine, with a sign on the street (February 2022, January 2026). About 8 minutes from Jingu-Marutamachi Station (August 2026).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kumano Shrine — Shogoin, between Kyoto University and Heian Shrine',
    cuisine: 'Freshly baked waffles and coffee (shop’s Instagram bio) · a wide range of waffles from simple to elaborate, thin and crisp (2021–26 reviews): Mont Blanc waffle with cinnamon chocolate ¥750 (October 2022), matcha Mont Blanc (March 2025), cinnamon banana with ice cream (January 2026), simple cinnamon (January 2024) · doria and gratin, meatball stew rice; sets of a dish with salad, a small drink and a half waffle ¥1,300; avocado and thick-cut bacon gratin ¥800 alone (June 2024) · drinks: coffee, tea, orange juice (June 2024); Cafe Maria Theresa with orange liqueur (January 2026); café chocolat (November 2026); some drinks with alcohol (November 2021)',
    website: IG, gmaps: gm('テンダーコーヒー ワンダーワッフル 京都 熊野神社前'), menu_url: null,
    notes: '[Café · Kumano Shrine, waffles] A small second-floor counter café looking straight across at Kumano Shrine, cozy with teddy bears, books and handmade goods: freshly baked thin, crisp waffles from simple to Mont Blanc (about ¥750), doria and gratin sets with a half waffle (¥1,300 in 2024), and coffee. Cash only; closed Tuesday and Wednesday.',
    chef_bio: { chef_name: null, roles: ['owner'], origin: null,
      background: 'Reviewers in February and October 2022 describe a woman owner running the café alone, so service can take a while when busy. The room has teddy bears and books (February 2022), a country style with handmade items for sale (January 2024), and Beatles music (April 2023, June 2024); the counter looks out on Kumano Shrine (January 2024, January 2026, November 2026).',
      philosophy: null, specialty: 'Freshly baked waffles.',
      anecdotes: [
        { text: 'A June 2024 diner on a hot Sunday ordered a hot gratin set to warm up from the air conditioning, and was thanked with a cheerful “ookini” on leaving.', source: R + 'B455985794/' },
        { text: 'A January 2026 visitor, long curious after seeing people lingering over tea in the window, came for waffles and fell for the Cafe Maria Theresa, named after Empress Maria Theresa, said to have liked liqueur in coffee.', source: R + 'B520133677/' },
      ],
      japanese_sources_summary: 'Instagram (@tender_coffee、表示名 Tender Coffee Wonder Waffle): 京都熊野神社前 焼きたてワッフルとコーヒーの店、定休日は火曜と水曜と不定休、営業時間11:00〜18:00。食べログ: テンダーコーヒー ワンダーワッフル、カフェ・喫茶店、左京区聖護院山王町43-2 パレステート日生熊野 2F、月・木・金・土・日 11:00〜18:00、火・水休み、予約不可、カード・電子マネー・QR不可、カウンター席、禁煙。口コミ (2021年11月〜2026年11月、英語): 熊野神社の向かいのビルの2階、女性の店主がひとりで切り盛り (2022年)、ワッフルの種類が多い、ドリアやグラタンとハーフワッフルのセット1,300円、モンブランのワッフル750円、くまのぬいぐるみや本、ビートルズの音楽、現金のみ。',
      confidence: 'medium', sources: [TB, IG, R + 'B443585228/', R + 'B450854697/', R + 'B455985794/', R + 'B465537145/', R + 'B500352343/', R + 'B504096351/', R + 'B520133677/', R + 'B527229213/', R + 'B533372160/', R + 'B539830180/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter café; no English evidence found. Cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区聖護院山王町43-2 パレステート日生熊野 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop’s Instagram (hours in the bio); Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.017298, 135.778048); moved ~3 m east to 35.017298, 135.778080 to keep ~7 m from 樂遇レストラン in the same building (2F) and ~10 m from kyoto_morioka_kumano; an Instagram post shown on hamoni.jp gives 43-14 2F, Tabelog 43-2; not cross-checked (worker, no OSM this round); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B455985794/'],
    price_note: 'Review prices only; the latest are from October 2022 and June 2024.', last_checked: TODAY, items: [
      it('', '', 'Mont Blanc waffle with cinnamon chocolate', '¥750', 'Waffles', 'no', 'no', 'October 2022.', 'montblanc'),
      it('', '', 'Gratin or doria set with salad, small drink and half waffle', '¥1,300', 'Sets', 'no', 'no', 'June 2024.', 'set'),
      it('', '', 'Avocado and thick-cut bacon gratin', '¥800', 'Food', 'no', 'no', 'June 2024.', 'gratin'),
    ] }, {
    cuisine: '焼きたてワッフルとコーヒー (店のInstagram)・シンプルなものから凝ったものまで種類の多い、薄くてさくっとしたワッフル (2021〜2026年の口コミ): シナモンチョコのモンブランワッフル750円 (2022年10月)、抹茶のモンブラン (2025年3月)、シナモンバナナとアイス (2026年1月)、シンプルなシナモン (2024年1月)・ドリア、グラタン、ミートボールのシチューライス。料理にサラダ、小さな飲み物、ハーフワッフルのつくセット1,300円、アボカドと厚切りベーコンのグラタン単品800円 (2024年6月)・飲み物: コーヒー、紅茶、オレンジジュース (2024年6月)、オレンジのリキュールを使った Cafe Maria Theresa (2026年1月)、カフェショコラ (2026年11月)、お酒を使った飲み物も (2021年11月)',
    neighborhood: '熊野神社前。聖護院、京都大学と平安神宮のあいだ',
    gf_detail: 'グルテンフリー不可。ワッフルの店で、料理はワッフル、ドリア、グラタン (2022〜2026年の口コミ)。グルテンフリーの記載なし。',
    vegan_detail: 'ヴィーガン不可。ワッフルにはクリームやバター、アイスが添えられ、料理にはチーズ、ベーコン、ソーセージ、ミートソースを使う (2022〜2024年の口コミ)。ヴィーガンの記載なし。',
    notes: '[カフェ・熊野神社前、ワッフル] 熊野神社を真正面に望むビルの2階の小さなカウンターのカフェ。くまのぬいぐるみや本、手作りの雑貨。焼きたての薄くさくっとしたワッフルはシンプルなものからモンブランまで (750円ほど)、ドリアやグラタンとハーフワッフルのセット (2024年に1,300円)、コーヒー。現金のみ。火曜・水曜休み。',
  });
}

// ================================================================ skips
skip('26020426', 'too thin to verify: かわさだ has a single Tabelog review, from June 2012 (two photos, no text), and no review in 2025–26 (https://tabelog.com/en/kyoto/A2601/A260101/26020426/).');

save();
