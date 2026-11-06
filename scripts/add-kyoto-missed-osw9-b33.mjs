// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 33.
//   + Bistro&Wine espace (one-man bistro and natural-wine counter by Sanjo Keihan; since 2022)                  [core]
//   + 屋台いなば Yatai Inaba (revived food-stall oden counter south of Shijo-Karasuma, Thu–Sat nights only)           [core]
//   + 九時五時 Kuji Goji (morning-to-afternoon Italian small plates and drinks; alcohol order required)         [notable]
//   + 和牛ぱんが 祇園四条店 Wagyu Panga (A5 wagyu hitsumabushi by Minamiza; halal-certified per the operator)    [notable]
//   - クー・オ・ミディ — the Kyoto Brighton Hotel lounge closes on 30 November 2026 with the hotel (2026 reviews).
//   Same-name counts first (same brand or operator): espace 1; いなば 1; 九時五時 1; PANGA — this shop, 和牛すき焼き
//   京都 ぱんが, The WAGYU BURGER by PANGA (opened April 2026) and the Tokyo yakiniku ぱんが of 1999 that the burger
//   site names as its origin: 4 known, none in data, so a small group and this one drafted — FLAGGED (the Tokyo side
//   may have more shops).
//   Taken in queue order on 2026-11-06: core 26037617, 26039135; notable (26001527 skip), 26033885, 26042651. None
//   drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: espace 「チャージなし」; いなば, 九時五時 and ぱんが
//   have no section.
//   Halal: the operator's Tabelog text says "Halal Certification" and reviewers mention a prayer room, but no certifier
//   is named, so flags.halal stays false and the claim is recorded in the text — FLAGGED.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-33');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26001527', 'closing: クー・オ・ミディ, the Kyoto Brighton Hotel lounge, closes on 30 November 2026 with the hotel, to reopen as a Curio Collection by Hilton hotel in 2028 (October 2026 reviews)');

// ================================================================ Bistro&Wine espace
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037617/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['17:00', '24:00']);
  put({
    id: 'kyoto_bistro_wine_espace', name: 'Bistro&Wine espace', category: 'OMNI',
    lat: 35.009119, lng: 135.775324, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. House brioche, pâté and hachis parmentier sit beside carpaccio, grilled fish and steak; no gluten information (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat and fish bistro, though dishes come with many vegetables (2025–26 reviews).',
    hours_raw: '12:00–14:30 (last orders food 13:45, drinks 14:00) and 17:00–24:00 (last food order 23:00); closed Wednesday and 1–2 other days a month (Tabelog). Lunch is a course only (October 2026 review). Bookings taken, but not for 17:00–20:00 apéro visits; guests who do not drink alcohol pay a ¥500 seat charge (Tabelog). Charge: Tabelog\'s Japanese original says 「チャージなし」. Adults (20+) only. 9 counter seats; non-smoking; cards and IC cards (Tabelog). The owner-chef works alone, so dishes can take time (2025 reviews). 3 min from Sanjo Keihan Stn exits 1–2 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Sanjo Keihan Stn, east of the Kamo River',
    cuisine: 'Seasonal bistro cooking with natural wine: beef cheek braised four days in red wine, house sausages, beef with house sauce (Tabelog); fig butter and house brioche, pâté de campagne, persimmon and fish carpaccio, sardine confit, hachis parmentier, sautéed milt with burdock, smoked salmon with vegetable purée, grilled young tuna with tomato and basil, outside-skirt steak, carrot rapé, soups with espuma; house natural wine ¥4,000 a bottle (October 2026); a winery grape juice for non-drinkers (2024–26 reviews)',
    website: null, gmaps: gm('Bistro&Wine espace 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Bistro & natural wine · Sanjo Keihan] A nine-seat counter where one chef cooks seasonal bistro plates — brioche with fig butter, pâté, sardine confit, beef cheek in red wine — and pours natural wines. Lunch is a course; dinner runs to midnight, about ¥6,000–9,000. Adults only; non-drinkers pay ¥500. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), working alone'], origin: null,
      background: 'Opened 1 May 2022 (Tabelog). Reviewers describe the owner-chef working solo (January, March and November 2025); a June 2026 diner came from Gifu after a post by the chef\'s wife on Instagram.',
      philosophy: null, specialty: 'Seasonal bistro dishes; natural wine.',
      anecdotes: [
        { text: 'A February 2025 diner wrote of "a handsome owner" recommending red, white and orange wines at the counter.', source: R + 'B501600416/' },
        { text: 'A January 2025 table found ordering everything at once, course-style, a bit hectic with one person serving.', source: R + 'B500039276/' },
        { text: 'A November 2024 diner wished the solo owner-chef smiled a little more, but found the cooking meticulous and the value great.', source: R + 'B502317410/' },
        { text: 'An October 2026 lunch guest was disappointed that the house sausage was not preservative-free.', source: R + 'B537172375/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Bistro&Wine espace、ビストロ・ダイニングバー・居酒屋、東山区二町目50 サンラック東山 1F、三条京阪駅1・2番出口から徒歩3分、12:00〜14:30・17:00〜24:00、水曜休み (ほか月1〜2回不定休)、17〜20時のアペロ利用の予約不可、お酒を飲まない方は席料500円、チャージなし、20歳以上のみ、カウンター9席、2022年5月1日オープン、牛ほほ肉の4日漬け赤ワイン煮、自家製ソーセージ、自然派ワイン。口コミ (2024年11月〜2026年10月、英語): 店主シェフが一人で営む、ブリオッシュといちじくバター、パテ・ド・カンパーニュ、柿と魚のカルパッチョ、イワシのコンフィ、アッシ・パルマンティエ、昼はコースのみ、ハウスワインのボトル4,000円、ソーセージが無添加でないという声。',
      confidence: 'medium', sources: [TB, R + 'B496679455/', R + 'B500039276/', R + 'B501600416/', R + 'B502317410/', R + 'B502458541/', R + 'B527719690/', R + 'B529934793/', R + 'B535774752/', R + 'B537172375/', R + 'B538613532/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter only, adults only; ask the chef for recommendations.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区二町目50 サンラック東山 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009119, 135.775324); cross-checked: GSI 京都府京都市東山区二町目50番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537172375/', TB],
    price_note: 'No menu read; prices from Tabelog and an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'House natural wine (bottle)', '¥4,000', 'Drinks', 'ask', 'ask', 'October 2026 review.', 'house_wine'),
      it('', '', 'Seat charge for non-drinkers', '¥500', 'Charges', 'ask', 'ask', 'Tabelog.', 'non_drinker_fee'),
    ] }, {
    cuisine: '季節のビストロ料理と自然派ワイン: 4日漬けの牛ほほ肉の赤ワイン煮、自家製ソーセージ、自家製ソースの牛肉 (食べログ)。いちじくバターと自家製ブリオッシュ、パテ・ド・カンパーニュ、柿と魚のカルパッチョ、イワシのコンフィ、アッシ・パルマンティエ、白子のソテーとごぼう、スモークサーモンと野菜のピュレ、マグロの若魚のグリルとトマトとバジル、ハラミのステーキ、キャロットラペ、エスプーマのスープ。ハウスの自然派ワインはボトル4,000円 (2026年10月)、飲まない人にはワイナリーのぶどうジュース (2024〜26年の口コミ)',
    neighborhood: '鴨川の東、三条京阪駅近く',
    gf_detail: '要確認。自家製ブリオッシュ、パテ、アッシ・パルマンティエと、カルパッチョ、魚のグリル、ステーキ。グルテンの情報はない (2024〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉と魚のビストロ。野菜は多く添えられる (2025〜26年の口コミ)。',
    notes: '[ビストロと自然派ワイン・三条京阪] シェフが一人で営む9席のカウンター。季節のビストロ料理 (いちじくバターのブリオッシュ、パテ、イワシのコンフィ、牛ほほ肉の赤ワイン煮) と自然派ワイン。昼はコース、夜は深夜0時まで、6千〜9千円ほど。20歳以上のみ。飲まない人は500円。水曜休み。',
  });
}

// ================================================================ 屋台いなば
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039135/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_yatai_inaba', name: '屋台いなば (Yatai Inaba)', category: 'OMNI',
    lat: 34.999254, lng: 135.760717, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soy-based oden broth with chikuwa, fu and gyoza among the items; kara-age and tempura are battered (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in dashi broth, kara-age, fish cakes (2025–26 reviews).',
    hours_raw: 'Thu 18:00–23:00; Fri and Sat 18:00–24:00; closed Sun–Wed; hours may change (Tabelog). Bookings taken, advised — often full, and walk-ins get turned away (2025–26 reviews). 13 seats: 7 at the counter, tables for 2 and 4; you stand to let people pass to the restroom (Tabelog; January 2026 review). No cards; PayPay (Tabelog). Non-smoking. Late in the evening some dishes sell out (January 2026 review). 400 m from Shijo Stn (Tabelog).',
    hours: { 3: day(['18:00', '23:00']), 4: day(['18:00', '24:00']), 5: day(['18:00', '24:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'South of Shijo-Karasuma — 6 min from Shijo Stn',
    cuisine: 'Oden in a gentle, slightly sweet broth: daikon, egg, atsuage, kurumafu, potato, tofu, chikuwa, octopus, cabbage roll, shirataki, gyoza, shrimp shumai, and the favourite battered pickled-ginger tempura; big soy-and-garlic thigh kara-age, enoki kara-age, maitake tempura, foil-grilled shiitake; potato salad made with oden potatoes and eggs, topped with mentaiko or squid shiokara; Sapporo Akaboshi, craft beer, sake (2025–26 reviews)',
    website: null, gmaps: gm('屋台いなば 京都'), menu_url: null,
    notes: "[Oden counter · south of Shijo-Karasuma] A tiny, cheerful oden bar open three nights a week: broth-soaked daikon and potatoes, battered pickled ginger, huge garlicky kara-age and a potato salad made from the oden pot. About ¥2,000–3,500. Thu–Sat from 18:00; book, it fills up.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A January 2026 reviewer writes that it began as Kyoto\'s oldest food stall, loved for 60 years, removed in 2023 despite a petition after a police request to vacate, and revived indoors by devoted fans.',
      philosophy: null, specialty: 'Oden; kara-age; oden potato salad.',
      anecdotes: [
        { text: 'A March 2025 regular called the owner always kind and the squid-shiokara potato salad good enough to copy at home.', source: R + 'B504127786/' },
        { text: 'When a party of three had to change its booking time in October 2025, the owner\'s flexibility touched the group.', source: R + 'B515550861/' },
        { text: 'A March 2026 regular has twice been turned away on full nights.', source: R + 'B496086689/' },
      ],
      japanese_sources_summary: '食べログ: 屋台いなば、おでん、下京区東洞院通高辻下ル燈籠町592-1、四条駅から403m、木 18:00〜23:00、金土 18:00〜24:00、日月火水休み、予約可、13席 (カウンター7、テーブル2席・4席)、禁煙、カード不可、PayPay 可。口コミ (2025年1月〜2026年7月、英語): やさしい少し甘い出汁のおでん (大根、玉子、厚揚げ、車麩、じゃがいも、豆腐、ちくわ、たこ、ロールキャベツ、しらたき、餃子、海老焼売)、紅しょうがの天ぷら、にんにく醤油のもも唐揚げ、えのきの唐揚げ、舞茸の天ぷら、おでんのじゃがいもと玉子のポテサラ (明太子・いかの塩辛)、Sapporo Akaboshi、クラフトビール、日本酒、京都最古の屋台が2023年に撤去され復活したという話、店主が親切、満席で断られることも。',
      confidence: 'medium', sources: [TB, R + 'B473046374/', R + 'B496086689/', R + 'B499562341/', R + 'B504127786/', R + 'B515286552/', R + 'B515550861/', R + 'B522426106/', R + 'B522539704/', R + 'B523127896/', R + 'B524461781/'] },
    cultural_comfort: { level: 'japanese', note: 'Tiny, busy oden counter for regulars; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院通高辻下ル燈籠町592-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.999254, 135.760717); cross-checked: GSI 京都府京都市下京区燈籠町592番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B496086689/'],
    price_note: 'No menu or item prices read; dishes from 2025–26 reviews.', last_checked: TODAY, items: [
      it('紅しょうがの天ぷら', '', 'Battered pickled-ginger tempura (oden)', '', 'Oden', 'no', 'no', '2025–26 reviews.', 'beni_shoga_ten'),
      it('', '', 'Kara-age (chicken thigh)', '', 'Dishes', 'no', 'no', '2025–26 reviews.', 'karaage'),
      it('', '', 'Oden potato salad (mentaiko or squid shiokara topping)', '', 'Dishes', 'ask', 'no', '2025–26 reviews.', 'oden_potesara'),
    ] }, {
    cuisine: 'やさしく少し甘い出汁のおでん: 大根、玉子、厚揚げ、車麩、じゃがいも、豆腐、ちくわ、たこ、ロールキャベツ、しらたき、餃子、海老焼売、人気の紅しょうがの天ぷら。大きなにんにく醤油のもも唐揚げ、えのきの唐揚げ、舞茸の天ぷら、ホイル焼きの椎茸、おでんのじゃがいもと玉子のポテサラ (明太子かいかの塩辛のせ)、Sapporo Akaboshi、クラフトビール、日本酒 (2025〜26年の口コミ)',
    neighborhood: '四条烏丸の南。四条駅から徒歩6分',
    gf_detail: '要確認。醤油の出汁のおでんで、ちくわ、麩、餃子なども入る。唐揚げや天ぷらは衣付き (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のおでん、唐揚げ、練り物 (2025〜26年の口コミ)。',
    notes: '[おでんのカウンター・四条烏丸の南] 週3晩だけ開く小さく賑やかなおでん屋。出汁のしみた大根やじゃがいも、紅しょうがの天ぷら、大きなにんにく唐揚げ、おでんのポテサラ。2千〜3,500円ほど。木〜土の18時から。すぐ埋まるので予約を。',
  });
}

// ================================================================ 九時五時
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26033885/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '17:00']);
  put({
    id: 'kyoto_kuji_goji', name: '九時五時 (Kuji Goji)', category: 'OMNI',
    lat: 34.993696, lng: 135.763186, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, bread and hot sandwiches beside omelettes, carpaccio and steamed chicken; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: whitebait omelette, carpaccio, chicken and clam dishes, though vegetables feature (2026 reviews).',
    hours_raw: 'Tue, Wed, Fri and Sat 9:00–17:00; closed Mon, Thu and Sun; irregular days on Instagram (Tabelog). Drinkers only — Tabelog: "Not available if no alcohol is ordered. Non-alcoholic drinks are also not allowed." A June 2026 diner noted a sign at the entrance turning away those not drinking alcohol. No bookings: leave your name and phone number and the shop calls when a seat opens; people queue before 9:00 (Tabelog; 2026 reviews). Cash only (Tabelog). 8 counter seats, a table for 4 and some standing room; children welcome (Tabelog; May 2026 review). 10 min from Gojo Stn (Tabelog).',
    hours: { 1: H, 2: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'South-east of Gojo-Karasuma — 10 min from Gojo Stn',
    cuisine: 'Daytime-drinking Italian small plates that change with the seasons: shirasu omelette with sansho oil, steamed chicken with ginger "golden" sauce, isaki or seasonal carpaccio, lightly boiled conger eel with sansho oil, hard-bread hot sandwiches, appetizer bread, clam pasta, mentaiko-and-shiso pasta; bottled Sapporo Black Label only, wines, sangria and fruit drinks; house maple and walnut cookies to take away (2026 reviews)',
    website: null, gmaps: gm('九時五時 京都'), menu_url: null,
    notes: "[Daytime Italian & drinks · near Gojo] Named for its hours, nine to five: a bright counter for morning and afternoon drinking with seasonal Italian plates — shirasu omelette with sansho oil, ginger chicken, carpaccio, clam pasta. You must order alcohol; no bookings, leave your number and wait nearby. About ¥3,000–6,000; cash only. Open Tue, Wed, Fri, Sat.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 15 December 2019 (Tabelog).',
      philosophy: null, specialty: 'Shirasu omelette with sansho oil; seasonal small plates.',
      anecdotes: [
        { text: 'A June 2026 couple sharing one pasta found it already split into two plates, but felt the "no entry for those not drinking alcohol" sign might put some guests off, and the lunch prices a little high.', source: R + 'B529920741/' },
        { text: 'Ordering "two beers" in July 2026, a guest was asked, "Since it\'s bottled beer, shall I bring one for now?"', source: R + 'B532704025/' },
        { text: 'A September 2026 visitor was first in line 30 minutes before the 9:00 opening; three more groups queued soon after.', source: R + 'B535888854/' },
      ],
      japanese_sources_summary: '食べログ: 九時五時 (Kuji Goji)、イタリアン・洋菓子、下京区栄町514、五条駅から徒歩10分、火水金土 9:00〜17:00、月木日休み (不定休は Instagram で告知)、予約不可、カード・電子マネー・QR 不可、カウンター8席とテーブル4人1卓、子供可、2019年12月15日オープン、お酒を注文しない方は利用不可 (ノンアルコールも不可)。口コミ (2026年3〜9月、英語): 朝から飲める、名前と電話番号を残して呼び出し、しらすのオムレツ山椒オイル、蒸し鶏の生姜ソース、イサキのカルパッチョ、conger eel の湯引き、ハードパンのホットサンド、あさりのパスタ、明太子と大葉のパスタ、瓶ビールは Sapporo Black Label のみ、サングリア、焼き菓子、価格は高めという声。',
      confidence: 'medium', sources: [TB, R + 'B524609573/', R + 'B525529931/', R + 'B527742308/', R + 'B528643946/', R + 'B529337447/', R + 'B529920741/', R + 'B529978223/', R + 'B530886024/', R + 'B532704025/', R + 'B535888854/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Alcohol order required (Tabelog); no bookings — leave a phone number at the door.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区栄町514',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.993696, 135.763186); cross-checked: GSI 京都府京都市下京区栄町514番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528643946/'],
    price_note: 'No menu or item prices read; dishes from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shirasu omelette with sansho oil', '', 'Small plates', 'ask', 'no', '2026 reviews.', 'shirasu_omelette'),
      it('', '', 'Steamed chicken with ginger golden sauce', '', 'Small plates', 'ask', 'no', '2026 reviews.', 'mushidori_ginger'),
      it('', '', 'Clam pasta', '', 'Pasta', 'no', 'no', 'September 2026 review.', 'vongole'),
    ] }, {
    cuisine: '季節で変わる、昼飲みのイタリアンの小皿: しらすのオムレツ山椒オイル、蒸し鶏の生姜の「黄金」ソース、イサキや季節のカルパッチョ、conger eel の湯引き山椒オイル、ハードパンのホットサンド、前菜のパン、あさりのパスタ、明太子と大葉のパスタ。瓶ビールは Sapporo Black Label のみ、ワイン、サングリア、果物のドリンク。持ち帰りのメープルやくるみのクッキー (2026年の口コミ)',
    neighborhood: '五条烏丸の南東。五条駅から徒歩10分',
    gf_detail: '要確認。パスタ、パン、ホットサンドと、オムレツ、カルパッチョ、蒸し鶏。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。しらすのオムレツ、カルパッチョ、鶏やあさりの料理。野菜は多い (2026年の口コミ)。',
    notes: '[昼のイタリアンとお酒・五条近く] 営業時間の9時〜5時が店名。朝と昼に飲める明るいカウンターで、季節のイタリアンの小皿 (しらすのオムレツ山椒オイル、生姜の蒸し鶏、カルパッチョ、あさりのパスタ)。お酒の注文が必須。予約不可で、電話番号を残して近くで待つ。3千〜6千円ほど。現金のみ。火水金土の営業。',
  });
}

// ================================================================ 和牛ぱんが 祇園四条店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042651/'; const R = TB + 'dtlrvwlst/';
  const TC = 'https://www.tablecheck.com/wagyu-panga-kyoto-gion';
  const SITE = 'https://sites.google.com/view/wagyupanga-kyoto-gion-shijo';
  const H = day(['12:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_wagyu_panga_gion_shijo', name: '和牛ぱんが 祇園四条店 (Wagyu Panga Gion Shijo)', category: 'OMNI',
    lat: 35.003648, lng: 135.772589, cuisine_type: 'donburi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled wagyu with a sweet-savoury sauce over rice, wagyu cutlet, sukiyaki bowl, red miso soup; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu restaurant (Tabelog).',
    hours_raw: '12:30–15:00 (last orders food 14:00, drinks 14:30) and 17:00–22:00 (last orders food 21:00, drinks 21:30), daily (Tabelog). Bookings via TableCheck (Tabelog; TableCheck). Halal: the operator\'s Tabelog text says the wagyu comes "with Halal Certification", without naming a certifier; TableCheck calls the dishes "halal-friendly"; a September 2026 diner saw a prayer room. English, Traditional and Simplified Chinese menus with photos; staff speaking English, Chinese and Korean — reviewers found the staff all from overseas (Tabelog; October 2026 reviews). 30 seats, tables and counter; non-smoking; cards, IC, PayPay, Alipay, WeChat Pay (Tabelog). 3F of the building just left of Minamiza, steps from Gion-Shijo Stn exit 6 (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Beside Minamiza at Shijo-Ohashi — Gion-Shijo Stn',
    cuisine: 'A5 black wagyu bought as whole cattle: wagyu hitsumabushi — eaten plain, with condiments, then with kombu dashi as ochazuke — lean 110 g ¥3,800 or 150 g ¥5,000, sirloin 110 g ¥5,500 or 150 g ¥7,500 (TableCheck), with pickles, red miso soup and matcha after (October 2026); kombu-cured lean wagyu cutlet set, sukiyaki bowl, a seven-dish A5 wagyu course with seared wagyu sushi and steak (Tabelog; 2026 reviews)',
    website: SITE, gmaps: gm('和牛ぱんが 祇園四条店'), menu_url: TB + 'dtlmenu/',
    notes: "[Wagyu hitsumabushi · beside Minamiza, Gion-Shijo] A bright third-floor room by the Minamiza theatre serving A5 wagyu hitsumabushi three ways — plain, with wasabi and shiso, then in kombu dashi — from ¥3,800 for 110 g of lean. Multilingual staff and menus; the operator states the wagyu is halal-certified (certifier not named). Open daily.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 9 March 2025 (Tabelog). Part of the PANGA wagyu group: a September 2026 reviewer calls it affiliated with The WAGYU BURGER by PANGA, whose site traces the brand to a Tokyo wagyu yakiniku shop founded in 1999; a sister 和牛すき焼き 京都 ぱんが also operates in Kyoto.',
      philosophy: 'Only the top 4% of A5 black wagyu, bought as whole cattle (Tabelog).',
      specialty: 'Wagyu hitsumabushi.',
      anecdotes: [
        { text: 'A September 2026 diner paid ¥1,800 for the 110 g lean hitsumabushi set and was served politely by a staff member from overseas still learning Japanese; other 2026 reviews give ¥3,800 for the same set.', source: R + 'B535509651/' },
        { text: 'An October 2026 guest got free matcha after the meal and caramels from the staff.', source: R + 'B537410729/' },
        { text: 'An October 2026 diner noted the many inbound guests and the friendly, English-speaking staff from overseas.', source: R + 'B538159255/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 和牛ぱんが 祇園四条店、日本料理・丼・肉料理、東山区中之町206 志満家ビル 3F、祇園四条駅6番出口すぐ、12:30〜15:00・17:00〜22:00、無休、30席、禁煙、カード・電子マネー・QR 可、英語・中国語のメニュー、英語・中国語・韓国語のスタッフ、2025年3月9日オープン、A5ランクの上位4%の黒毛和牛を一頭買い、ハラール認証 (認証機関の記載なし)、ひつまぶし御膳、牛カツ御膳、A5和牛スタンダードコース7品。TableCheck: 赤身ひつまぶし110g 3,800円・150g 5,000円、サーロイン110g 5,500円・150g 7,500円 (税込)、ハラールフレンドリー。口コミ (2026年9〜11月、英語): Minami-za の左隣のビル3階、そのまま・薬味・出汁茶漬けの三通り、赤だし、食後の抹茶、礼拝室、海外出身のスタッフ、The WAGYU BURGER by PANGA の系列。',
      confidence: 'medium', sources: [TB, TC, SITE, 'https://sites.google.com/view/thewagyuburger', R + 'B535509651/', R + 'B535556317/', R + 'B535776135/', R + 'B536448307/', R + 'B536823159/', R + 'B537410729/', R + 'B537788932/', R + 'B538144507/', R + 'B538159255/', R + 'B538517920/'] },
    cultural_comfort: { level: 'english', note: 'English and Chinese menus with photos; English-, Chinese- and Korean-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区中之町206 志満家ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop and TableCheck; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003648, 135.772589); cross-checked: GSI 京都府京都市東山区中之町206番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TC],
    price_note: 'Prices from TableCheck (tax included); a September 2026 review gives ¥1,800 for the lean 110 g set.', last_checked: TODAY, items: [
      it('', '', 'A5 wagyu lean hitsumabushi set, 110 g', '¥3,800', 'Hitsumabushi', 'ask', 'no', 'TableCheck; 2026 reviews.', 'lean_hitsumabushi_110'),
      it('', '', 'A5 wagyu lean hitsumabushi set, 150 g', '¥5,000', 'Hitsumabushi', 'ask', 'no', 'TableCheck.', 'lean_hitsumabushi_150'),
      it('', '', 'A5 wagyu sirloin hitsumabushi set, 110 g', '¥5,500', 'Hitsumabushi', 'ask', 'no', 'TableCheck.', 'sirloin_hitsumabushi_110'),
      it('', '', 'A5 wagyu sirloin hitsumabushi set, 150 g', '¥7,500', 'Hitsumabushi', 'ask', 'no', 'TableCheck.', 'sirloin_hitsumabushi_150'),
    ] }, {
    cuisine: '一頭買いの A5 黒毛和牛: 和牛のひつまぶし (そのまま、薬味、昆布出汁の茶漬けで)、赤身110g 3,800円・150g 5,000円、サーロイン110g 5,500円・150g 7,500円 (TableCheck)。漬物、赤だし、食後の抹茶 (2026年10月)。昆布締めの赤身の牛カツ御膳、すき焼き丼、和牛の炙り寿司やステーキの入る7品の A5 和牛コース (食べログ、2026年の口コミ)',
    neighborhood: 'Minami-za の隣。祇園四条駅',
    gf_detail: '要確認。甘辛いたれの和牛を焼いてご飯に、牛カツ、すき焼き丼、赤だし。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の店 (食べログ)。',
    notes: '[和牛ひつまぶし・祇園四条の Minami-za の隣] Minami-za の隣のビル3階の明るい店で、A5和牛のひつまぶしを三通り (そのまま、わさびや大葉で、昆布出汁で) に。赤身110gで3,800円から。多言語のスタッフとメニュー。運営者は和牛がハラール認証済みとする (認証機関の記載なし)。無休。',
  });
}

save();
