// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 96.
//   Queue run from the osw2 worktree, 2026-11-26. Core and notable tiers have nothing left in this lane, so rest tier,
//   nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance). Shops fetched by the worker from
//   Tabelog /en/ with 3 s between requests.
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   + カフェ グリーンドア (Cafe Green Door; the official site writes "CAFE GREEN DOOR（カフェ グリーンドア）") — machiya café
//     of house-baked pita sandwiches at Higashiyama-Sanjo, opened 1 November 2014 (Tabelog)
//   + 清風庭 (Chon Bun Jon; reading チョンブンジョン from a human-written 2022 blog, mach-no-osusume.com) — home-style Korean
//     cooking by Higashiyama station, run by a Korean "omoni" for about 18 years as of December 2022 (same blog)
//   + Gojo Paradiso — Israeli/Mediterranean dining bar with traveller lodging on the Takase River at Gojo; vegan course,
//     GF/celiac-tagged items on the official menu
//   + 和たり (Watari; the shop's own domain is watari-kyoto.com) — creative Japanese with sake and wine at Sakaimachi-Nijo, open to 1:00
//   Skip: Samurai Restaurant Omakase Kyoto Kamogawa (too thin to verify).
//   None of the drafted shops is in data/kyoto.json (main, hidden records included): grep by id, name and address.
//   Brands: all four are single shops as far as searched.
//   Pins: Tabelog /en/ point for each shop; not pin-checked by the worker (integrator pin-checks).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-96');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26044869', 'Samurai Restaurant Omakase Kyoto Kamogawa: too thin to verify — one Tabelog review (January 2026, a sushi-making class), which predates the listed opening day of 25 April 2026');

// ================================================================ カフェ グリーンドア
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26024835/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.cafe-green-door.com/';
  const H = day(['07:00', '17:00']);
  put({
    id: 'kyoto_cafe_green_door', name: 'カフェ グリーンドア (Cafe Green Door)', category: 'OMNI',
    lat: 35.00906528787316, lng: 135.77932104038982, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the menu is built on house pita bread of domestic wheat and whole-wheat flour (official site), with cakes such as cheesecake and tiramisu (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the pita fillings are smoked chicken, gouda, sausage, egg, bacon and mozzarella (official site). The pita itself is baked without oil, and the homemade shiso and yuzu juices have no stated animal ingredients, but no vegan information is published.',
    hours_raw: 'Monday–Saturday 7:00–17:00, closed Sunday (official site, 2026). Tabelog gives a different week: Monday–Wednesday and Friday–Sunday 7:00–17:00, Thursday 7:00–12:00. Summer closure 25 July–7 August 2026 (official site). No reservations (Tabelog); the tatami room was held for a larger group on an April 2024 visit. Payment: the official site lists cash only, and an October 2024 reviewer was told cash only; Tabelog lists AMEX. 14 seats including 6 at the counter (Tabelog); about five counter seats and two low tables for four in a tatami room (October 2024 review). Non-smoking (Tabelog; official site). Takeaway drinks (official site). On a side street off the Furukawacho shopping street, about a minute from Higashiyama station (May 2024 review; Tabelog: 45 m). Two entrances (May 2022 review). Opened 1 November 2014 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashiyama-Sanjo',
    cuisine: 'House pita bread of domestic wheat and whole-wheat flour, natural yeast and no oil, with vegetables mostly from the shop’s own garden in Keihoku (official site) · smoked chicken pita sandwich, the most popular item; gouda, sausage and egg pita sandwiches; smoked bacon and mozzarella pita pizzas (official site, undated) · smoked chicken pita about ¥1,100 and a tiramisu and americano set about ¥990, as the reviewer remembered them (October 2024) · mozzarella omelette pita sandwich (March 2026) · homemade sausage with craft beer as the German set (November 2024) · soufflé cheesecake set with caffè latte (April and November 2024) · tiramisu with cappuccino; a large espresso latte topped with homemade gelato (October 2025) · original blend coffee, cold-brew iced coffee ¥650 (April 2025), Darjeeling ¥600, Earl Grey ¥650 (January 2025), homemade shiso and yuzu juices, Heartland beer (official site)',
    website: SITE, gmaps: gm('カフェ グリーンドア 京都 東山'), menu_url: SITE + '#menu',
    notes: '[Café · Higashiyama-Sanjo, machiya pita café] A café in an old Kyoto townhouse a minute from Higashiyama station, open from 7:00: house pita sandwiches and pita pizzas with vegetables from the shop’s own garden, espresso drinks, cheesecake and tiramisu, in a tatami room or at the counter. Cash per the official site. Closed Sunday per the official site (Tabelog gives other hours).',
    chef_bio: { chef_name: null, roles: ['Operator (not named)'], origin: null,
      background: 'The official site says the café was converted from Kisen Kobo (亀仙工房, read きせんこうぼう), a tenugui and pottery workshop, and reborn as CAFE GREEN DOOR. Opened on 1 November 2014 (Tabelog). Most vegetables come from the shop’s own garden in Keihoku, Ukyo Ward (official site). A May 2022 reviewer wondered whether one person runs everything. A May 2024 reviewer thought the place also worked as a guesthouse, with many international visitors coming and going; the official site does not mention lodging. Reviewers in November 2024 and October 2025 found it full of, or popular with, visitors from overseas.',
      philosophy: 'Handmade food: house-smoked chicken and bacon, own-garden vegetables, house pita baked with natural yeast and no oil (official site).',
      specialty: 'Smoked chicken pita sandwich; espresso drinks and tiramisu.',
      anecdotes: [
        { text: 'An April 2025 visitor, sure that a place called Green Door must be entered by the green door, found the entrance was actually a brown one.', source: R + 'B510436628/' },
        { text: 'A diner looking for a late lunch around 15:00 in October 2024, with little else open, followed a sign in, and found the tiramisu so good and generous that the place seemed a real find for Kyoto prices.', source: R + 'B494715719/' },
        { text: 'A January 2025 visitor chose the tatami room over the counter and found it quiet and relaxing, with soft Western music in the background; the coffee is roasted only after an order is placed.', source: R + 'B498618332/' },
        { text: 'A November 2025 diner came for breakfast before Heian Shrine and found an interior that recalled not just the Showa era but the Taisho period.', source: R + 'B518432445/' },
      ],
      japanese_sources_summary: '公式サイト: CAFE GREEN DOOR (カフェ グリーンドア)、京都東山三条の京町家カフェ、てぬぐいとやきもの亀仙工房 (きせんこうぼう) を改装、和室とカウンター席、国産小麦と全粒粉をオリジナルブレンドし天然酵母で発酵、オイル不使用で焼き上げた自家製ピタパン、野菜の多くは京都市右京区の京北にある自家菜園のもの、自家製スモークチキンピタサンドイッチ (一番人気)、ゴーダチーズ、ソーセージ、たまごのピタサンドイッチ、自家製スモークベーコン、モッツァレラチーズのピタピザ、オリジナルブレンドコーヒー、水出しアイスコーヒー、自家製しそジュース、ゆずジュース、ハートランドビール、テイクアウト可、OPEN 7:00〜17:00、定休日 日曜日、支払いは現金、2026年夏季休業7月25日〜8月7日、京都府京都市東山区八軒町448。食べログ (英語版): カフェ、予約不可、月〜水・金〜日7:00〜17:00、木7:00〜12:00、カード可 (AMEX)、電子マネー・QRコード決済不可、14席 (カウンター6席)、全席禁煙、駐車場なし、東山駅から45m、オープン日2014年11月1日。口コミ (2022〜2026年、英語): 町家、入口が二つ (2022年5月)、スモークチキンのピタ約1,100円 (2024年10月)、現金のみ (2024年10月)、スフレチーズケーキ、ティラミス、海外からの客が多い (2024年11月、2025年10月)。',
      confidence: 'medium', sources: [SITE, TB, R + 'B448934525/', R + 'B484024742/', R + 'B492639388/', R + 'B494715719/', R + 'B496039206/', R + 'B498618332/', R + 'B510436628/', R + 'B514883418/', R + 'B518432445/', R + 'B522276491/', R + 'B527224564/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Popular with visitors from overseas (2024–25 reviews); cash only per the official site.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八軒町448',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with a July 2026 notice; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.009065, 135.779321); the official site's schema point (35.0078, 135.7745) is coarse and about 450 m west, so not used; not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B494715719/', R + 'B510436628/', R + 'B498618332/'],
    price_note: 'Items from the official site (no prices); prices from reviews, dated by visit; the October 2024 prices are as the reviewer remembered them.', last_checked: TODAY, items: [
      it('自家製スモークチキンピタサンドイッチ', '', 'House smoked chicken pita sandwich', '¥1,100', 'Pita', 'no', 'no', 'October 2024 review (price as remembered); the most popular item (official site).', 'smoked_chicken_pita'),
      it('', '', 'Tiramisu and americano set', '¥990', 'Sweets', 'no', 'no', 'October 2024 review (price as remembered).', 'tiramisu_set'),
      it('水出しアイスコーヒー', '', 'Cold-brew iced coffee', '¥650', 'Drinks', '', 'ask', 'April 2025 review.', 'cold_brew'),
      it('', '', 'Earl Grey tea', '¥650', 'Drinks', '', 'ask', 'January 2025 review; Darjeeling ¥600.', 'earl_grey'),
    ] }, {
    cuisine: '国産小麦と全粒粉、天然酵母、オイル不使用の自家製ピタパン、野菜の多くは京北の自家菜園のもの (公式サイト)・一番人気の自家製スモークチキンピタサンドイッチ、ゴーダチーズ、ソーセージ、たまごのピタサンドイッチ、自家製スモークベーコンとモッツァレラチーズのピタピザ (公式サイト、日付なし)・スモークチキンのピタ約1,100円、ティラミスとアメリカーノのセット約990円 (2024年10月、口コミの記憶による)・モッツァレラとオムレツのピタサンド (2026年3月)・手作りソーセージとクラフトビールのセット (2024年11月)・スフレチーズケーキとカフェラテのセット (2024年4月、11月)・ティラミスとカプチーノ、自家製ジェラートをのせた大きなエスプレッソラテ (2025年10月)・オリジナルブレンドコーヒー、水出しアイスコーヒー650円 (2025年4月)、ダージリン600円、アールグレイ650円 (2025年1月)、自家製しそジュース、ゆずジュース、ハートランドビール (公式サイト)',
    neighborhood: '東山三条',
    gf_detail: 'グルテンフリー不可。国産小麦と全粒粉の自家製ピタパンが中心 (公式サイト)、チーズケーキやティラミスも (口コミ)。',
    vegan_detail: 'ヴィーガン不可。ピタの具はスモークチキン、ゴーダチーズ、ソーセージ、たまご、ベーコン、モッツァレラ (公式サイト)。ピタパンはオイル不使用、自家製のしそジュースとゆずジュースに動物性の記載はないが、ヴィーガンの情報は公開されていない。',
    notes: '[カフェ・東山三条、町家のピタのカフェ] 東山駅から1分ほどの京町家のカフェ、朝7時から。自家菜園の野菜を使う自家製ピタサンドイッチとピタピザ、エスプレッソのドリンク、チーズケーキやティラミスを和室かカウンターで。公式サイトでは支払いは現金。定休日は公式サイトでは日曜日 (食べログは別の営業時間)。',
  });
}

// ================================================================ 清風庭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26031867/'; const R = TB + 'dtlrvwlst/';
  const BLOG = 'http://mach-no-osusume.com/2022/12/28/1-1646/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_korean_tb26031867', name: '清風庭 (Chon Bun Jon)', category: 'OMNI',
    lat: 35.009682, lng: 135.7788668503969, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Korean home cooking: pajeon (a wheat-batter pancake), japchae, namul, kimchi, grilled pork, stews and samgyetang; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Korean kitchen of pork, chicken and clam dishes; vegetable namul and kimchi are served, but no vegan information is published.',
    hours_raw: '17:00–24:00 daily (Tabelog; listing not marked as updated by the shop). A December 2022 blog gives hours and closing days as unknown. A December 2019 reviewer came for lunch. Reservations taken (Tabelog); a December 2022 visitor booked and was offered the omakase course. Cash only: no cards, e-money or QR (Tabelog). Counter seats and a tatami room at the back (December 2022 blog). Smoking allowed (Tabelog). No parking. About 54 m from Higashiyama station on the Tozai line (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashiyama-Sanjo',
    cuisine: 'Home-style Korean cooking (reviews) · omakase course ¥4,000 (December 2022; November 2023): Korean-style chilled tofu with a spicy sauce, japchae, namul of cucumber, eggplant, bean sprouts and daikon, kimchi of napa cabbage, kkakdugi and cucumber, moksal (pork neck) wrapped in perilla leaves with garlic and ssamjang, pajeon, and a choice of water dumplings, yukgaejang or samgyetang to finish (December 2022) · broccoli namul (December 2019; January 2020) · dakhanmari (December 2019) · stone-pot bibimbap, samgyetang and makgeolli at lunch for about ¥2,500 a head (December 2019) · bibimbap, jjajangmyeon and grilled pork (January 2023) · sundubu jjigae with clams in a stone pot (April 2024)',
    website: null, gmaps: gm('清風庭 京都 東山 韓国料理'), menu_url: null,
    notes: '[Korean · Higashiyama station, an omoni’s home cooking] A homely Korean restaurant by Higashiyama station where a Korean mother has cooked for some 18 years: a ¥4,000 omakase of namul, kimchi, japchae, pork neck wrapped in perilla, pancake and samgyetang, with spice and garlic adjusted on request. Cash only; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Owner-cook, the "omoni" (not named)'], origin: 'Korea (November 2023 review)',
      background: 'A December 2022 blog: the current proprietress, "or rather the omoni", has stood in the shop for about 18 years, serving authentic Korean cooking; the place is not fancy but homely. A November 2023 reviewer says the dishes are made by a mother from Korea, in a room like a cosy living room with family photos on display. An April 2024 reviewer describes the omoni finishing the dishes in the kitchen and calls the omoni’s strong presence and laughter the true treasure of the place. Reviewers in February 2019 and January 2020 had the spice and garlic adjusted to taste. A January 2025 diner enjoyed talking with the owner. A regular logged ten visits between December 2022 and December 2023 and found the omoni hilarious.',
      philosophy: null,
      specialty: 'Omakase course of Korean home cooking; moksal (pork neck).',
      anecdotes: [
        { text: 'A December 2022 diner was told the pork neck (moksal) beats samgyeopsal, wrapped it in perilla with garlic, ssamjang and green chilli, and ended up ordering makgeolli; the ¥4,000 course was really portioned for two.', source: BLOG },
        { text: 'A February 2019 visitor whose friend does not like spicy food had the whole course adjusted to suit.', source: R + 'B412193871/' },
        { text: 'A November 2023 diner filled up on namul because nothing could be taken away, then still finished the water dumplings served last.', source: R + 'B474100307/' },
        { text: 'A friend brought a December 2019 diner to lunch: stone-pot bibimbap with broccoli among the vegetables, samgyetang, makgeolli and two kimchis, for about ¥2,500 a head.', source: R + 'B423007670/' },
      ],
      japanese_sources_summary: 'ブログ「マッハのおすすめ」(2022年12月): 東山「清風庭」、地下鉄東西線東山駅から徒歩すぐ、「チョンブンジョン」と読む、今のお内儀さん、いやオモニがお店に立つ様になって18年くらい、オモニの本格的な韓国料理、奥に座敷、カウンター、おまかせ4000円 (2人前の量)、韓国風冷奴、チャプチェ、ナムル盛り合わせ、キムチ盛り合わせ、モクサル、チヂミ、参鶏湯、営業時間・定休日は不明、京都市東山区分木町65-1。食べログ (英語版): 韓国料理、予約可、毎日17:00〜24:00、カード・電子マネー・QRコード決済不可、個室なし、貸切可、喫煙可、駐車場なし、東山駅から54m。口コミ (2019〜2025年、英語): 辛さとにんにくの調整 (2019年2月、2020年1月)、ブロッコリーのナムル、タッカンマリ (2019年12月)、韓国出身のお母さんが作る料理、家族の写真 (2023年11月)、スンドゥブチゲ (2024年4月)、店主との会話 (2025年1月)。',
      confidence: 'medium', sources: [TB, BLOG, R + 'B412193871/', R + 'B422794231/', R + 'B423007670/', R + 'B423652637/', R + 'B458554001/', R + 'B471157296/', R + 'B474100307/', R + 'B500010276/', R + 'B512947804/'] },
    cultural_comfort: { level: 'japanese', note: 'No English menu or staff mentioned in any source; cash only; book by phone.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区分木町65-1',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing (no closure badge); latest review dated January 2025; no official site.' },
    pin_source: `Tabelog ${TB} (35.009736, 135.778867), moved about 6 m south: the Tabelog point is 2.3 m from 屋島うどん 京都店 (kyoto_yashima_udon_higashiyama, address_ja 京都府京都市東山区古川三条上分木65, the same lot); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [BLOG, R + 'B474100307/', R + 'B423007670/'],
    price_note: 'Prices from reviews, dated by visit.', last_checked: TODAY, items: [
      it('おまかせ', '', 'Omakase course of Korean home cooking (portioned for two)', '¥4,000', 'Courses', 'ask', 'no', 'December 2022 blog; November 2023 review.', 'omakase'),
    ] }, {
    cuisine: '韓国の家庭料理 (口コミ)・おまかせ4,000円 (2022年12月、2023年11月): 辛いたれの韓国風冷奴、チャプチェ、きゅうり、なす、もやし、大根のナムル、白菜、カクテキ、きゅうりのキムチ、えごまの葉とにんにく、サムジャンで包むモクサル (豚の首肉)、チヂミ、締めは水餃子、ユッケジャン、参鶏湯から選ぶ (2022年12月)・ブロッコリーのナムル (2019年12月、2020年1月)・タッカンマリ (2019年12月)・昼に石焼ビビンバ、参鶏湯、マッコリで一人約2,500円 (2019年12月)・ビビンバ、ジャージャー麺、豚肉の焼き物 (2023年1月)・あさりのスンドゥブチゲ (2024年4月)',
    neighborhood: '東山三条',
    gf_detail: '要確認。チヂミ (小麦の生地)、チャプチェ、ナムル、キムチ、豚肉の焼き物、チゲ、参鶏湯などの韓国の家庭料理。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚肉、鶏肉、あさりの料理が中心の韓国料理。野菜のナムルやキムチもあるが、ヴィーガンの情報はない。',
    notes: '[韓国料理・東山駅、オモニの家庭料理] 東山駅のそば、韓国出身のオモニが18年ほど店に立つ家庭的な韓国料理の店。ナムル、キムチ、チャプチェ、えごまの葉で包むモクサル、チヂミ、参鶏湯のおまかせ4,000円。辛さやにんにくは好みに合わせてくれる。現金のみ、喫煙可。',
  });
}

// ================================================================ Gojo Paradiso
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26022915/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gojoparadiso.net/'; const MENU = SITE + 'Restaurant';
  const H = day(['09:00', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_gojo_paradiso', name: 'Gojo Paradiso', category: 'OMNI',
    lat: 34.99356131787867, lng: 135.76568739024273, cuisine_type: 'other',
    gf_confidence: 'options', gf_label: 'Some GF options', gf_detail: 'GF options: the official menu tags hummus, mini hummus, edamame and the chopped, mixed, spicy carrot and tomato salads GF and celiac-friendly, and lets diners filter by gluten-free and celiac-friendly. Pita, schnitzel, falafel and fried dishes are not tagged GF, and the menu describes no separate preparation, so ask about cross-contact (official site, 2026).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: a Gojo Vegan Course (¥4,300) of homemade hummus, falafel, tofu schnitzel and grilled mushrooms, a vegan falafel burger (¥1,650), tofu schnitzel, and a vegan filter on the menu; the site says most dishes are vegetarian (official site, 2026). An October 2019 reviewer had the vegan breakfast set D (hash browns, tofu and chickpea scramble, pita) and saw vegan-friendly stickers at the entrance.',
    hours_raw: 'Daily 9:00–14:00 for breakfast and lunch (last order 13:30) and 17:00–23:00 for dinner (last order 22:30) (official site; Tabelog). Tabelog says no reservations; the official site says bookings are taken and may be needed for Friday meals, holidays, groups and events. Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), e-money and QR payments (PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay) (Tabelog). Tabelog’s service-charge field reads なし (none) in the original Japanese. 35 seats with counter and sofa seating, up to 50 standing; private hire for 20–50 (Tabelog). Non-smoking (Tabelog). English menu and English-speaking staff; takeaway and delivery; free Wi-Fi; children welcome (Tabelog; official site). The kitchen is not kosher (official site). On the Takase River, about 5 minutes from Keihan Kiyomizu-Gojo (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gojo-Takasegawa',
    cuisine: 'Israeli and Mediterranean dining bar with breakfast (official site; reviews) · hummus ¥1,580, mini hummus ¥980, falafel balls with tahini (3) ¥680, shakshuka ¥1,180, schnitzel plate ¥2,260, tofu schnitzel ¥880, vegan falafel burger ¥1,650, pita ¥290, Pita Sabich ¥1,730, pasta pesto ¥1,480 (official site, 2026) · Gojo Course, Vegetarian Course and Vegan Course ¥4,300 each, Chef’s Choice Course ¥6,900 (official site, 2026) · a traditional fried bread with eggs and tomato sauce from the breakfast menu ¥980, served at noon (April 2026) · hummus and a katsu-style chicken schnitzel (October 2026) · Israeli plate of homemade hummus, falafel and pita (August 2018) · vegan breakfast set D ¥790 (October 2019) · all-you-can-drink course ¥2,000 with pizza and fries (November 2016) · Kirin beer from ¥850, craft beer from ¥980, cocktails ¥890–1,350 (official site, 2026)',
    website: SITE, gmaps: gm('Gojo Paradiso Kyoto'), menu_url: MENU,
    notes: '[Israeli · Gojo-Takasegawa, a travellers’ dining bar] An Israeli and Mediterranean dining bar in a converted machiya on the Takase River, with traveller lodging upstairs: hummus, falafel, shakshuka and schnitzel, breakfast from 9:00, and dinner to 23:00. A vegan course and vegan falafel burger, and GF/celiac-tagged hummus and salads on the menu. English-speaking staff and many travellers from abroad.',
    chef_bio: { chef_name: null, roles: ['Operator (not named)'], origin: null,
      background: 'The official site calls Gojo Paradiso "the home for travelers in Kyoto": a Mediterranean restaurant, traveller lodging, Japanese workshops and holiday events in one place, "Kyoto’s home for travelers for over 5 years". Its Hebrew text describes an Israeli restaurant and community centre for Israeli travellers in Japan. Tabelog reviews go back to August 2015. A June 2017 reviewer describes a converted Kyoto townhouse on the Takase River with shared rooms on the 2nd floor, mostly for international guests, and staff fluent in English and Japanese; a December 2015 reviewer understood that it runs a nearby guesthouse. A November 2016 diner played the table-football game at the back. An August 2018 reviewer was served by a handsome foreign staff member who took the order in English. Reviewers across 2015–2026 mention many foreign guests and foreign staff, and in 2016 half Japanese and half foreign customers.',
      philosophy: 'Most dishes are vegetarian (official site).',
      specialty: 'Homemade hummus, falafel and schnitzel; vegan course.',
      anecdotes: [
        { text: 'An April 2026 diner was surprised to find the breakfast menu still served at noon; the menu was in Japanese, the staff spoke only English, and ordering turned into fun.', source: R + 'B526302257/' },
        { text: 'An October 2019 runner on the way to a sento stopped in for breakfast, ordered by gesture from a lone staff member who spoke little Japanese, and got the vegan set D in about 10 minutes.', source: R + 'B421731431/' },
        { text: 'In December 2015 a diner found the staff overwhelmed as the room filled, making orders and food slow, but liked that every drink cost ¥500 and that a water pipe was on offer.', source: R + 'B142634350/' },
        { text: 'An October 2026 diner who could not speak English found the foreign staff kind and the gestures enough, and thought it a good place to practise English.', source: R + 'B536639428/' },
      ],
      japanese_sources_summary: '公式サイト (英語、ヘブライ語): Gojo Paradiso、地中海料理のレストラン、旅行者の宿泊、日本文化のワークショップ、ホリデーイベント、ほとんどの料理はベジタリアン、厨房はコーシャではない、朝食とランチ9:00〜14:00、ディナー17:00〜23:00、毎日営業、フムス1,580円、ファラフェル3個680円、シャクシュカ1,180円、シュニッツェルのプレート2,260円、ヴィーガンのファラフェルバーガー1,650円、豆腐のシュニッツェル880円、ヴィーガンコース4,300円、メニューにGF、LF、CFの表示、グルテンフリーとセリアック対応の絞り込み。食べログ (英語版): ダイニングバー、ヨーロッパ料理、予約不可、京都市下京区聖真子町169-1、京阪清水五条駅から徒歩5分、9:00〜14:00 (L.O.13:30)、17:00〜23:00 (L.O.22:30)、カード・電子マネー・QRコード決済可、サービス料なし、35席、立食50名、貸切20〜50名、全席禁煙、英語メニュー、英語を話すスタッフ、ヴィーガン・ベジタリアン・グルテンフリーのメニューあり、テイクアウト、デリバリー。口コミ (2015〜2026年、英語): 高瀬川沿いの京町家、2階はドミトリー (2017年6月)、イスラエル料理 (2016年11月、2018年8月)、ヴィーガンの朝食Dセット790円 (2019年10月)、海外からの客とスタッフが多い。',
      confidence: 'medium', sources: [SITE, MENU, SITE + 'articles/gogo-paradiso-kyoto-restaurant', TB, R + 'B142634350/', R + 'B229122973/', R + 'B229759009/', R + 'B277382269/', R + 'B374905724/', R + 'B421731431/', R + 'B526302257/', R + 'B536545079/', R + 'B536639428/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff and English menu (Tabelog; reviews); in April 2026 the staff spoke only English.' },
    safety: { ...SAFETY0, confidence: 'medium',
      gf_cross_contamination: [
        { text: 'Hummus, edamame and several salads are tagged GF and celiac-friendly, but the same kitchen makes pita, za’atar bread, schnitzel, falafel and fried dishes, and the menu describes no separate preparation or fryer — ask before ordering if you are coeliac.', source: MENU, verified: TODAY },
      ],
      vegan_cross_contact: [
        { text: 'Vegan dishes (vegan course, falafel burger, tofu schnitzel) come from the same kitchen as chicken schnitzel, karaage and egg dishes; no separation is described.', source: MENU, verified: TODAY },
      ],
      positives: [
        { text: 'The official menu marks dishes GF, LF and CF and can be filtered by Vegetarian, Vegan, Gluten Free, Lactose Free and Celiac Friendly.', source: MENU, verified: TODAY },
      ],
    },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区聖真子町169-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with a 2026 menu; reviews dated April, September and October 2026.' },
    pin_source: `Tabelog ${TB} (34.993561, 135.765687); the official site's schema point (34.9957, 135.7584) is coarse and about 700 m west, so not used; not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [MENU],
    price_note: 'Official-site prices, 2026 (about 100 items; a selection).', last_checked: TODAY, items: [
      it('', '', 'Hummus', '¥1,580', 'Mezze', 'gf', 'ask', 'Tagged GF, LF, CF on the official menu; shared kitchen, ask about cross-contact.', 'hummus'),
      it('', '', 'Falafel balls with tahini sauce (3)', '¥680', 'Izakaya plates', 'no', 'ask', 'Tagged LF only.', 'falafel'),
      it('', '', 'Shakshuka', '¥1,180', 'Mains', 'no', 'no', 'Tagged LF.', 'shakshuka'),
      it('', '', 'Vegan falafel burger', '¥1,650', 'Mains', 'no', 'vegan', 'Named vegan on the official menu.', 'falafel_burger'),
      it('', '', 'Gojo Vegan Course: hummus, falafel, tofu schnitzel, grilled mushrooms', '¥4,300', 'Courses', 'ask', 'vegan', 'Named vegan on the official menu.', 'vegan_course'),
      it('', '', 'Chopped vegetable salad', '¥870', 'Salads', 'gf', 'ask', 'Tagged GF, LF, CF; shared kitchen, ask about cross-contact.', 'chopped_salad'),
    ] }, {
    cuisine: 'イスラエル料理と地中海料理のダイニングバー、朝食もある (公式サイト、口コミ)・フムス1,580円、ミニフムス980円、タヒニソースのファラフェル3個680円、シャクシュカ1,180円、シュニッツェルのプレート2,260円、豆腐のシュニッツェル880円、ヴィーガンのファラフェルバーガー1,650円、ピタ290円、Pita Sabich 1,730円、ジェノベーゼのパスタ1,480円 (公式サイト、2026年)・Gojo Course、ベジタリアンコース、ヴィーガンコース各4,300円、シェフのおまかせコース6,900円 (公式サイト、2026年)・朝食メニューの伝統的な揚げパンに卵とトマトソース980円、正午にも注文できた (2026年4月)・フムスとカツ風のチキンシュニッツェル (2026年10月)・自家製フムス、ファラフェル、ピタのイスラエルプレート (2018年8月)・ヴィーガンの朝食Dセット790円 (2019年10月)・ピザとフライドポテト付きの飲み放題コース2,000円 (2016年11月)・キリンビール850円から、クラフトビール980円から、カクテル890〜1,350円 (公式サイト、2026年)',
    neighborhood: '五条高瀬川',
    gf_detail: 'グルテンフリーの選択肢あり。公式メニューではフムス、ミニフムス、枝豆、チョップドサラダ、ミックスサラダ、にんじんのスパイシーサラダ、トマトのサラダにGFとセリアック対応の表示があり、グルテンフリーとセリアック対応で絞り込める。ピタ、シュニッツェル、ファラフェル、揚げ物には表示がなく、別調理の記載もないので、混入は要確認 (公式サイト、2026年)。',
    vegan_detail: 'ヴィーガンの選択肢あり。自家製フムス、ファラフェル、豆腐のシュニッツェル、焼ききのこのGojo Vegan Course (4,300円)、ヴィーガンのファラフェルバーガー (1,650円)、豆腐のシュニッツェル、メニューにヴィーガンの絞り込み。ほとんどの料理はベジタリアン (公式サイト、2026年)。2019年10月の口コミではヴィーガンの朝食Dセット (ハッシュブラウン、豆腐とひよこ豆のスクランブル、ピタ)、入口にヴィーガン対応のステッカー。',
    notes: '[イスラエル料理・五条高瀬川、旅行者のダイニングバー] 高瀬川沿いの京町家を改装した、2階に旅行者の宿泊施設のあるイスラエル料理と地中海料理のダイニングバー。フムス、ファラフェル、シャクシュカ、シュニッツェル、朝9時から朝食、夜は23時まで。ヴィーガンコースやヴィーガンのファラフェルバーガー、GFとセリアック対応表示のフムスやサラダもある。英語を話すスタッフ、海外からの旅行者が多い。',
  });
}

// ================================================================ 和たり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26031039/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://watari-kyoto.com/';
  const H = day(['18:00', '25:00']);
  put({
    id: 'kyoto_watari_sakaimachi', name: '和たり (Watari)', category: 'OMNI',
    lat: 35.012771937865686, lng: 135.7632480804385, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Creative Japanese dishes: sashimi, carpaccio, tempura, a cutlet, simmered dishes in dashi and mixed rice; no gluten information is published (reviews; official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, wagyu and dashi-based dishes.',
    hours_raw: 'Daily 18:00–1:00 (last order 24:00) (official site; Tabelog). Book through the official site’s online booking or by phone (official site; Tabelog); a February 2023 reviewer notes bookings by Instagram too. Cards accepted (official site; Tabelog). Seats: one table for six, one for four and a few counter seats (May 2025 review); the official site mentions counter seats and private rooms, while Tabelog lists no private rooms. No parking. On Sakaimachi south of Nijo, ground floor of アルティスタ御所南, about 400 m from Karasuma Oike station (Tabelog; official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sakaimachi-Nijo',
    cuisine: 'Creative Japanese cooking blending Japanese and Western touches, paired with sake and wine (official site) · local seafood from Tango and selected wagyu; an obanzai assortment, a salad of blue cheese and suguki, Tosa-vinegar jelly and a new-ginger sauce (Tabelog shop text) · flap meat with sea urchin, chirimen sansho, a special curry, anchovy potato salad (August 2018) · Shine Muscat and mackerel carpaccio, fried taro, beef sirloin tataki, eel and matsutake tempura, grilled heshiko mackerel, udon to finish (October 2021) · three obanzai, carpaccio, tempura of fuki no to and tara no me, fried ebiimo, seared heshiko and salmon mixed rice, with drinks, ¥13,000 for two (February 2023) · an omakase in July 2023: okara with mentaiko and lotus root, simmered eggplant, sashimi of conger eel, squid, aged tuna, mackerel and flounder, steamed Sakoshi oysters, corn and young ayu tempura, a conger-eel cutlet, Shine Muscat and octopus carpaccio, wagyu tataki, shirasu and sansho rice',
    website: SITE, gmaps: gm('和たり 京都 堺町二条'), menu_url: null,
    notes: '[Izakaya · Sakaimachi-Nijo, creative Japanese with sake and wine] A small Japanese dining bar south of Nijo, open until 1:00: obanzai, sashimi, carpaccio with seasonal fruit, tempura and Kyoto-style dishes with Western touches, paired with sake and wine. Most prices are not on the menu; reviewers paid ¥5,000–10,000 a head. Book online or by phone.',
    chef_bio: { chef_name: null, roles: ['Owner (not named)'], origin: null,
      background: 'The official site says Watari was founded to serve cooking that keeps Kyoto’s traditional Japanese food culture while taking in a modern sense, built on seasonal ingredients and craft. Reviewers left the menu to the owner (August 2018), found the manager friendly and generous with sake recommendations (October 2021), and enjoyed chatting with the owner at the counter (October 2023). A July 2023 diner noticed the owner’s relatives in that evening, which made the room friendly. A May 2025 first-timer found the manager and chef kind, though the staff struggled to explain the dishes.',
      philosophy: 'Seasonal ingredients with traditional technique and a modern sense; Japanese food paired with wine and sake (official site).',
      specialty: 'Omakase of creative Japanese dishes; fruit carpaccio; heshiko.',
      anecdotes: [
        { text: 'A February 2023 couple, wary of a place with few reviews, researched it on five sites before a birthday dinner, arrived as the only guests at 18:00 on a Sunday and left at 21:00 with the room nearly full; the shop suggested dishes not on the menu when asked.', source: R + 'B460754986/' },
        { text: 'A July 2023 birthday dinner booked by the diner’s spouse ran from sashimi to a conger-eel cutlet the diner had never imagined, and the omakase seemed remarkable for the price.', source: R + 'B468766980/' },
        { text: 'In July 2022 a reviewer praised the sake and wine list but found the food just average, and liked that it stays open late.', source: R + 'B452079457/' },
      ],
      japanese_sources_summary: '公式サイト: 和たり、和食とワインの絶妙なハーモニー、京都・烏丸御池の和食ダイニング、地元の新鮮な食材を活かした和食とワイン、日本酒のペアリング、和と洋のエッセンスを融合させた創作料理、カウンター席、個室も完備、京都の伝統的な和食文化を大切にしながら現代の感覚を取り入れた料理を提供するために創業、月曜〜日曜18:00〜25:00 (L.O.24:00)、カード可、駐車場なし、京都府京都市中京区堺町二条下ル杉屋町640 アルティスタ御所南 1F、電話075-211-5828。食べログ (英語版): 日本料理、予約は公式サイトから、毎日18:00〜1:00、カード可、個室なし、Tango の海の幸と厳選した和牛、おばんざいの盛り合わせ、ブルーチーズとすぐきのサラダ、土佐酢のジュレ、新生姜のソース。口コミ (2018〜2025年、英語): 店主におまかせ (2018年8月)、へしこ、カルパッチョ (2021年10月、2023年2月)、二人で13,000円 (2023年2月)、6人のテーブル、4人のテーブル、カウンター数席 (2025年5月)。',
      confidence: 'medium', sources: [SITE, TB, R + 'B377706723/', R + 'B441656012/', R + 'B452079457/', R + 'B460754986/', R + 'B468766980/', R + 'B469077478/', R + 'B472887110/', R + 'B506378734/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Online booking through the official site (multilingual); most prices are not on the menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町二条下ル杉屋町640 アルティスタ御所南 1F',
    existence: { status: 'probable', checked: TODAY, note: 'Official site with online booking; latest Tabelog review dated May 2025.' },
    pin_source: `Tabelog ${TB} (35.012772, 135.763248); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B460754986/'],
    price_note: 'No menu prices published; the one price is a February 2023 bill.', last_checked: TODAY, items: [
      it('', '', 'Dinner for two: three obanzai, carpaccio, tempura, fried ebiimo, seared heshiko, salmon mixed rice, beer and sake', '¥13,000', 'Courses', 'ask', 'no', 'February 2023 review (total for two).', 'dinner_for_two'),
    ] }, {
    cuisine: '和と洋のエッセンスを融合させた創作料理、日本酒とワイン (公式サイト)・Tango の海の幸と厳選した和牛、おばんざいの盛り合わせ、ブルーチーズとすぐきのサラダ、土佐酢のジュレ、新生姜のソース (食べログの店舗紹介)・ハラミのウニのせ、ちりめん山椒、特製カレー、アンチョビのポテトサラダ (2018年8月)・シャインマスカットとサバのカルパッチョ、里芋の揚げ物、牛サーロインのたたき、うなぎと松茸の天ぷら、焼きへしこ、締めのうどん (2021年10月)・おばんざい3種、カルパッチョ、ふきのとうとたらの芽の天ぷら、海老芋の揚げ物、炙りへしこ、鮭の混ぜご飯、飲み物と合わせて二人で13,000円 (2023年2月)・2023年7月のおまかせ: おからと明太子とれんこん、なすの煮物、conger eel、イカ、熟成マグロ、サバ、ヒラメの刺身、Sakoshi の蒸し牡蠣、とうもろこしと稚鮎の天ぷら、conger eel のカツ、シャインマスカットとタコのカルパッチョ、和牛のたたき、しらすと山椒のご飯',
    neighborhood: '堺町二条',
    gf_detail: '要確認。刺身、カルパッチョ、天ぷら、カツ、だしの煮物、混ぜご飯などの創作和食。グルテンの情報は公開されていない (口コミ、公式サイト)。',
    vegan_detail: 'ヴィーガン不可。魚介、和牛、だしを使う料理。',
    notes: '[居酒屋・堺町二条、日本酒とワインの創作和食] 二条通の南、深夜1時まで営業の小さな和食ダイニング。おばんざい、刺身、季節の果物のカルパッチョ、天ぷら、洋のエッセンスを加えた京風の料理を日本酒やワインと。ほとんどの料理に値段の表示はなく、口コミでは一人5,000〜10,000円。予約は公式サイトか電話で。',
  });
}

save();
