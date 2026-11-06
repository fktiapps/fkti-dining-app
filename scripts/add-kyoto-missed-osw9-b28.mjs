// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 28.
//   + French Oden & Wine やほよろづ Yahoyorozu (oden in beef-bone broth with French sauces, Sanjo Shokusai Roji) [core]
//   + まる廣 Maru Hiro (14-seat Gion yakiniku of a meat-obsessed owner; omakase course)                            [core]
//   + 讃式 SANSHIKI (Sanuki-style udon and tempura by Gojo-zaka from a Kagawa-born owner)                          [notable]
//   + えいたろう屋 Eitaro Ya (Karasuma-Oike izakaya famous for its sashimi platter)                                 [notable]
//   - Kurasu (Kurasu Kyoto Stand) 26027807 skipped (16-shop coffee chain)
//   Same-name counts first (same brand or operator): やほよろづ 1; まる廣 1; 讃式 1; Kurasu — sixteen cafés and stands
//   on its own site, see skip; えいたろう屋 1.
//   Taken in queue order on 2026-11-05: core 26039783, 26023019; notable 26023919, 26027807 (skip), 26000459.
//   None of the four is in data/kyoto.json by name; やほよろづ shares 三条食彩ろぉじ (道祐町135) with
//   kyoto_tsuriya_sanjo, kyoto_ofuro_sanjo, kyoto_bushido_sanjo and Telaviv — different shops.
//   Service charges checked against Tabelog's Japanese original: やほよろづ "アラカルトはサービス料10%、ドリンクのみは
//   チャージ＋５００円"; the others have no section.
//   Pins: やほよろづ's Tabelog point is 1.2 m from ChIJezBqHpMJAWARi5BFOEhNolk (Telaviv), so moved ~6.7 m north.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-28');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26027807', 'Kurasu (Kurasu Kyoto Stand): a chain — the official café page (kurasu.kyoto/pages/cafe, read 2026-11-05) lists sixteen locations in seven cities: Kurasu Kyoto Stand, Kurasu Ebisugawa, Kurasu Nishijin Roastery, and shops in Singapore, Bangkok, Jakarta, Dubai and Shenzhen');

// ================================================================ やほよろづ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039783/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '22:00']);
  put({
    id: 'kyoto_french_oden_yahoyorozu', name: 'French Oden & Wine やほよろづ (Yahoyorozu)', category: 'OMNI',
    lat: 35.008383, lng: 135.763343, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask — the shop asks for allergies in advance. Oden includes fu and mochi pouches, served with French sauces, plus bread and bistro dishes (Tabelog; 2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the oden simmers in a domestic beef-bone broth and comes with cheese sauces (Tabelog).',
    hours_raw: 'Tue–Sat, holidays and days before/after holidays 15:00–22:00 (food last order 21:00, drinks 21:30); closed Sunday and Monday (Tabelog). Bookings taken; tell the shop about allergies in advance; groups of 14 or more get the whole shop (Tabelog). Service charge 10% on à la carte, and a ¥500 charge for drinks only — Tabelog\'s Japanese original: "アラカルトはサービス料10%、ドリンクのみはチャージ＋５００円". 14 seats: a counter with Kyoto kumiko woodwork and tables upstairs; non-smoking; cards, e-money and QR incl. Alipay (Tabelog). In 三条食彩ろぉじ, the alley off Sakaimachi south of Sanjo; 6 min from Karasuma-Oike Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi south of Sanjo, in Sanjo Shokusai Roji — 6 min from Karasuma-Oike Stn',
    cuisine: '"French oden": oden simmered in a domestic beef-bone broth, served with four French sauces — the gorgonzola is recommended — with daikon, egg and konnyaku as house picks; daily obanzai and bistro dishes; about three glass wines a day, sake (Tabelog) · in reviews: white-mushroom skewers, stick fu from Hanbeifu, mochi pouches, chilled oden in summer, the "Yahoyorozu Salad"; a casual course ¥4,400 with beef-bone soup, seasonal dishes, salad and bread (2024–26 reviews)',
    website: null, gmaps: gm('French Oden & Wine やほよろづ'), menu_url: TB + 'dtlmenu/',
    notes: "[French oden & wine · Sanjo Shokusai Roji] A bright little bistro in a Sanjo alley that simmers oden in beef-bone broth and serves it with French sauces — try daikon or egg with gorgonzola — alongside wine. Courses from ¥4,400; à la carte +10%. Some find the flavours mild. Closed Sunday and Monday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed; trained in Italian cooking per a November 2024 reviewer)'], origin: null,
      background: 'Per a November 2024 reviewer: a new place that opened the year before, whose chef trained in Italian cuisine and pairs oden with Italian-style sauces. Per the operator: a counter with Kyo-kumiko woodwork.',
      philosophy: null, specialty: 'Oden with gorgonzola sauce.',
      anecdotes: [
        { text: 'An October 2025 first-timer found the food beautiful but the flavours "a bit too mild", with little difference between the gorgonzola and mozzarella sauces.', source: R + 'B515741719/' },
        { text: 'A March 2026 diner who grew up dipping oden in red miso found the Burgundy-style sauce a natural fit.', source: R + 'B524977335/' },
        { text: 'Arriving late in January 2025, a guest found many dishes sold out and was shown upstairs, where the doorbell was a little bell.', source: R + 'B499522261/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): French Oden & Wine やほよろづ、ビストロ・創作料理・ワインバー、中京区堺町通三条下ル道祐町135 三条食彩ろぉじ堺町の道 せりの舗、烏丸御池駅から徒歩6分、火〜土・祝・祝前後 15:00〜22:00 (L.O. 料理21:00、ドリンク21:30)、日・月休み、アレルギーは事前に、14名以上は貸切、アラカルトはサービス料10%、ドリンクのみはチャージ+500円、14席、Kyo-kumiko のカウンター、2階のテーブル、国産牛骨のスープで煮込むフレンチおでんと4種のフレンチソース、ゴルゴンゾーラ、大根・卵・こんにゃく、日替わりのおばんざいとビストロ料理、グラスワイン3種。口コミ (2024年11月〜2026年10月、英語): マッシュルームの串、Hanbeifu の棒麩、餅巾着、夏は冷やしおでん、カジュアルコース4,400円、イタリアンで修業した料理人、味が控えめという声。',
      confidence: 'medium', sources: [TB, R + 'B479913505/', R + 'B496250490/', R + 'B499522261/', R + 'B503553311/', R + 'B505524988/', R + 'B512735392/', R + 'B515741719/', R + 'B524383610/', R + 'B524977335/', R + 'B535568569/'] },
    cultural_comfort: { level: 'konnichiwa', note: '10% service on à la carte; ¥500 charge for drinks only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通三条下ル道祐町135 三条食彩ろぉじ堺町の道 せりの舗',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008323, 135.763343), moved ~6.7 m north to 35.008383 because ChIJezBqHpMJAWARi5BFOEhNolk (Telaviv) is pinned 1.2 m from the Tabelog point; cross-checked: GSI 京都府京都市中京区道祐町135番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535568569/'],
    price_note: 'No menu read; course price from a September 2026 review; 10% service on à la carte per Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Casual course (beef-bone soup, seasonal dishes, salad, bread, oden)', '¥4,400', 'Courses', 'ask', 'no', 'September 2026 review.', 'casual_course'),
      it('', '', 'Oden with gorgonzola sauce', '', 'Oden', 'ask', 'no', '', 'oden_gorgonzola'),
    ] }, {
    cuisine: '「フレンチおでん」: 国産牛骨のスープで煮込んだおでんに4種のフレンチソース (おすすめはゴルゴンゾーラ)、店のおすすめは大根、卵、こんにゃく。日替わりのおばんざいとビストロ料理、日替わりのグラスワイン3種と日本酒 (食べログ)・口コミの料理: マッシュルームの串、Hanbeifu の棒麩、餅巾着、夏の冷やしおでん、やほよろづサラダ、牛骨スープ、季節の皿、サラダ、パンのカジュアルコース4,400円 (2024〜26年の口コミ)',
    neighborhood: '三条の南の堺町、三条食彩ろぉじ。烏丸御池駅から徒歩6分',
    gf_detail: '要確認。アレルギーは事前に伝える。おでんには麩や餅巾着、フレンチソース、パンやビストロ料理も (食べログ、2024〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。おでんは国産牛骨のスープで煮込み、チーズのソースを添える (食べログ)。',
    notes: '[フレンチおでんとワイン・三条食彩ろぉじ] 三条の路地の明るい小さなビストロで、牛骨スープで煮たおでんにフレンチソース (大根や卵にゴルゴンゾーラを) とワインを合わせる。コースは4,400円から、アラカルトは+10%。味が控えめという声も。日・月曜休み。',
  });
}

// ================================================================ まる廣
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26023019/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_maruhiro_gion', name: 'まる廣 (Maru Hiro)', category: 'OMNI',
    lat: 35.00276, lng: 135.777062, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakiniku with sauces, a sukiyaki-style cut and rice; no gluten information (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku course of wagyu (2024–26 reviews).',
    hours_raw: '17:00–23:00 daily incl. Sundays and holidays, later by arrangement; closing days not fixed (Tabelog). Bookings needed — usually full with regulars (2024 reviews); harder since a January 2026 TV appearance (February 2026). Omakase course only (October 2024); ¥10,200 in May 2024. Cash only — no cards (Tabelog). 14 seats incl. a counter and a private tatami room for 4; Tabelog lists smoking as allowed (Tabelog). Near Yasaka Shrine, south of Shijo; 5 min from Gion-Shijo Stn (Tabelog; November 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Gion south of Shijo, near Yasaka Shrine — 5 min from Gion-Shijo Stn',
    cuisine: 'Small yakiniku counter of a meat-obsessed owner who tastes and picks each cut for fat quality and grain; the chef\'s special omakase is what 60% of regulars order (Tabelog) · courses of about six cuts — chateaubriand, a Spencer-roll cut, a sukiyaki-style slice — with grilled vegetables, pickled tomatoes, rice and seasonal fruit (2024–26 reviews)',
    website: null, gmaps: gm('まる廣 祇園 焼肉'), menu_url: null,
    notes: "[Yakiniku · Gion near Yasaka Shrine] A tiny, regular-filled yakiniku counter where the meat-obsessed owner picks every cut and shows you how to grill it: one omakase course (about ¥10,000–15,000) from chateaubriand to rice. Cash only; book early. Open nightly to 23:00.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who runs the shop alone per the operator; 2024 reviewers met the owner and a spouse'], origin: null,
      background: 'Opened 1 September 2013 (Tabelog). Per the operator: "the owner manages everything alone" across 14 seats, pacing dishes to each table. A March 2024 reviewer was told the chef and a spouse had run it for about ten years; a January 2026 reviewer relates that the shop usually refuses media, but agreed to filming of Kotaro Koizumi for Nippon TV\'s "Oh! My God" (aired in Kanto only).',
      philosophy: 'Per the operator: "The higher the quality of fat, the quicker it melts just from being touched or cut… delivering only what I personally find delicious."',
      specialty: 'Chef\'s special yakiniku course.',
      anecdotes: [
        { text: 'A May 2024 reviewer: only a ¥10,200 course is offered at first, and diners who appreciate it may later order higher-grade meat.', source: R + 'B485319304/' },
        { text: 'During the July 2026 Gion Matsuri, a diner saw the portable shrine pass right in front of the shop.', source: R + 'B532915427/' },
        { text: 'After seeing the owner on TV, a February 2026 viewer phoned and was surprised to get a booking from the owner himself.', source: R + 'B523111076/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): まる廣、焼肉・居酒屋・鍋、東山区祇園町南側529-1 祇園Kentビル 1F、祇園四条から徒歩5分、17:00〜23:00 (23時以降は相談)、不定休 (日祝も営業)、カード不可、14席、4名の個室、喫煙可、2013年9月1日オープン、肉好きで知られる店主、脂の質や肉のきめを見極め自ら食べて美味しいものだけ、店主一人で切り盛り、常連の6割が頼むおまかせコース。口コミ (2024年3月〜2026年7月、英語): 夫婦で約10年、10,200円のコース、6種の肉、シャトーブリアン、すき焼き風、焼き野菜、トマトのマリネ、ご飯、季節の果物、Nippon TV の「Oh! My God」で Kotaro Koizumi が来店 (2026年1月)、予約が取りにくい。',
      confidence: 'medium', sources: [TB, R + 'B481202866/', R + 'B485319304/', R + 'B486499183/', R + 'B495011925/', R + 'B519468164/', R + 'B521791028/', R + 'B522968545/', R + 'B523111076/', R + 'B527951076/', R + 'B532915427/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book early; cash only; the owner explains how to grill each cut.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側529-1 祇園Kentビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.002760, 135.777062); cross-checked: GSI 京都府京都市東山区祇園町南側529番地 (lot) 74m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B485319304/'],
    price_note: 'No menu read; course price from a May 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase yakiniku course', '¥10,200', 'Courses', 'ask', 'no', 'May 2024 review.', 'omakase'),
    ] }, {
    cuisine: '脂の質ときめを見極めて自ら選ぶ肉好きの店主の小さな焼肉カウンター。常連の6割が頼むおまかせコース (食べログ)・シャトーブリアン、スペンサーロールの部位、すき焼き風の一枚など6種ほどの肉に、焼き野菜、トマトのマリネ、ご飯、季節の果物 (2024〜26年の口コミ)',
    neighborhood: '四条の南の祇園、八坂神社の近く。祇園四条駅から徒歩5分',
    gf_detail: '要確認。たれの焼肉、すき焼き風の肉、ご飯。グルテンの情報はない (2024〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉のコース (2024〜26年の口コミ)。',
    notes: '[焼肉・八坂神社近くの祇園] 常連で埋まる小さな焼肉のカウンターで、肉好きの店主が一枚ずつ選び、焼き方も教えてくれる。シャトーブリアンからご飯までのおまかせ一本で1万〜1万5千円ほど。現金のみ、早めの予約を。毎晩23時まで。',
  });
}

// ================================================================ 讃式
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26023919/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:00', '15:00'], D = ['17:00', '20:00'];
  put({
    id: 'kyoto_sanshiki_udon', name: '讃式 (SANSHIKI)', category: 'OMNI',
    lat: 34.995577, lng: 135.770721, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon and tempura (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a bonito-dashi broth, chicken tempura, meat and curry udon (2026 reviews).',
    hours_raw: 'Mon 11:00–15:00; Wed–Sun 11:00–15:00 and 17:00–20:00; closed Tuesday (Tabelog). No bookings; short waits at lunch (2026 reviews). Cash only — no cards, e-money or QR (Tabelog). 18 seats, all at tables; non-smoking (Tabelog). On Gojo-dori, a few minutes from Gojo Ohashi; 3 min from Kiyomizu-Gojo Stn (Tabelog; October 2026).',
    hours: { 0: day(L), 2: day(L, D), 3: day(L, D), 4: day(L, D), 5: day(L, D), 6: day(L, D) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Gojo-dori near Gojo-zaka — 3 min from Kiyomizu-Gojo Stn',
    cuisine: 'Sanuki-style udon made in-house by an owner from Kagawa, with a bonito dashi (2026 reviews) · kashiwa (chicken) tempura bukkake ¥900, with meat ¥1,000; shrimp tempura udon ¥1,000 (plain ¥700); meat and wakame udon (medium) ¥1,100; curry meat udon, chicken tempura curry udon; kayaku rice and egg-tempura rice bowl (2026 reviews)',
    website: null, gmaps: gm('讃式 うどん 五条'), menu_url: null,
    notes: "[Udon · Gojo near Kiyomizu-dera] A popular little udon shop on Gojo-dori where a Kagawa-born owner makes chewy Sanuki-style noodles: chicken-tempura bukkake from ¥900, curry udon, and a fragrant bonito broth. Some find the noodles softer than true Sanuki. Cash only; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), from Kagawa Prefecture per an October 2026 reviewer'], origin: 'Kagawa Prefecture (October 2026 review).',
      background: 'Per an October 2026 reviewer: homemade noodles by an owner from Kagawa Prefecture; reviewers call it a popular spot for curry udon (January 2026).',
      philosophy: null, specialty: 'Kashiwa tempura bukkake; curry udon.',
      anecdotes: [
        { text: 'A February 2026 diner expected more chewiness and wondered whether the noodles are adjusted for tourists.', source: R + 'B522336457/' },
        { text: 'A March 2026 guest found too much udon for the broth, so the tempura batter soaked it up.', source: R + 'B523784332/' },
        { text: 'At the peak of Obon in August 2026 the shop was full, but a table opened within ten minutes and the bowl came in five.', source: R + 'B420023460/' },
      ],
      japanese_sources_summary: '食べログ: 讃式 (SANSHIKI)、うどん・天ぷら、東山区五条橋東2-9-4、京阪清水五条駅から徒歩3分、月 11:00〜15:00、水〜日 11:00〜15:00・17:00〜20:00、火曜休み、予約不可、カード・電子マネー・QR 不可、18席 (テーブルのみ)、禁煙。口コミ (2026年1〜10月、英語): かしわ天ぶっかけ900円、肉入り1,000円、海老天うどん1,000円 (素うどん700円)、肉わかめうどん中1,100円、カレー肉うどん、鶏天カレーうどん、かやくご飯、卵天丼、鰹出汁、Kagawa 出身の店主の自家製麺、Sanuki ほどのこしはないという声。',
      confidence: 'medium', sources: [TB, R + 'B420023460/', R + 'B521700837/', R + 'B522023414/', R + 'B522033143/', R + 'B522336457/', R + 'B523784332/', R + 'B524363951/', R + 'B530774497/', R + 'B537416108/', R + 'B538121584/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk in; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区五条橋東2-9-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.995577, 135.770721); cross-checked: GSI 京都府京都市東山区五条橋東二丁目9番地 (lot) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530774497/', R + 'B420023460/', R + 'B523784332/', R + 'B538121584/'],
    price_note: 'No menu read; prices from February–October 2026 reviews.', last_checked: TODAY, items: [
      it('かしわ天ぶっかけ', '', 'Chicken tempura bukkake udon', '¥900', 'Udon', 'no', 'no', 'February 2026 review; ¥1,000 with meat (August 2026).', 'kashiwaten_bukkake'),
      it('', '', 'Shrimp tempura udon', '¥1,000', 'Udon', 'no', 'no', 'March 2026 review; plain udon ¥700.', 'ebiten_udon'),
      it('', '', 'Meat and wakame udon (medium)', '¥1,100', 'Udon', 'no', 'no', 'October 2026 review.', 'niku_wakame'),
    ] }, {
    cuisine: 'Kagawa 出身の店主が打つSanuki 風の自家製うどんと鰹出汁 (2026年の口コミ)・かしわ天ぶっかけ900円、肉入り1,000円、海老天うどん1,000円 (素うどん700円)、肉わかめうどん中1,100円、カレー肉うどん、鶏天カレーうどん、かやくご飯、卵天丼 (2026年の口コミ)',
    neighborhood: '五条坂近くの五条通。清水五条駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。小麦のうどんと天ぷら (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鰹出汁、鶏天、肉やカレーのうどん (2026年の口コミ)。',
    notes: '[うどん・清水寺近くの五条] 五条通の人気の小さなうどん店で、Kagawa 出身の店主がこしのある Sanuki 風の麺を打つ。かしわ天ぶっかけ900円から、カレーうどん、香りのいい鰹出汁。本場の Sanuki より柔らかいという声も。現金のみ、火曜休み。',
  });
}

// ================================================================ えいたろう屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000459/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_eitaroya', name: 'えいたろう屋 (Eitaro Ya)', category: 'OMNI',
    lat: 35.011128, lng: 135.758513, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, simmered and fried dishes, Yanagawa nabe and kamameshi; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-led Japanese izakaya on dashi (2026 reviews).',
    hours_raw: 'Mon–Sat 17:30–23:00 (food last order 22:00); closed Sunday and once a month irregularly (Tabelog). Bookings advised — usually full (2026 reviews). Order the kamameshi early, as it takes time (February 2026). Cards (JCB, AMEX, Diners) and QR (Tabelog). A counter, three tables for four and one for two, and a tatami room; non-smoking (Tabelog; February 2026). On Oike-dori east of Muromachi; 1 min from Karasuma-Oike Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Oike-dori by Karasuma-Oike — 1 min from Karasuma-Oike Stn',
    cuisine: 'Japanese izakaya famous for its big, beautifully arranged sashimi platter (about ¥4,500 per person, July 2026) · in reviews: clam soup with nanohana, tuna with miso, lotus-root dumplings, Fushimi peppers simmered with chirimen-jako, pea dumplings with sauce, Biwa trout, bonito with wasabi-miso, grilled ayu with roe, fried duck, Yanagawa nabe of burdock and eel, chawanmushi, kamameshi (2026 reviews) · a reviewer says it has a Bib Gourmand (October 2026)',
    website: null, gmaps: gm('えいたろう屋 京都 御池'), menu_url: null,
    notes: "[Izakaya · Karasuma-Oike] A busy, always-booked izakaya by Karasuma-Oike station loved for its showpiece sashimi platter and seasonal Kyoto dishes — Fushimi peppers with jako, grilled ayu, eel Yanagawa nabe — finished with kamameshi. About ¥5,000–10,000. Book ahead; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Per 2026 reviews: a popular, usually fully booked izakaya with friendly regulars, the hall run by one staff member; an October 2026 reviewer says it has been selected as a Bib Gourmand.',
      philosophy: null, specialty: 'Sashimi platter; kamameshi.',
      anecdotes: [
        { text: 'A January 2026 diner enjoyed the friendly regulars and said "the owner looked just like Keanu Reeves".', source: R + 'B522202113/' },
        { text: 'A February 2026 walk-in met "some slightly rude comments" and left soon, while granting it suits those who like a chatty izakaya.', source: R + 'B525706369/' },
        { text: 'A July 2026 party paid ¥4,500 a head for a sashimi platter of salmon and cheaper fish while other tables got tuna for the same price — "very frustrating".', source: R + 'B532731881/' },
      ],
      japanese_sources_summary: '食べログ: えいたろう屋、日本料理・居酒屋、中京区御池通室町東入ル龍池町448、烏丸御池駅から徒歩1分、月〜土 17:30〜23:00 (料理 L.O. 22:00)、日曜休み、月1回不定休、カード (JCB・AMEX・Diners)・QR 可、カウンターと座敷、禁煙。口コミ (2026年1〜10月、英語): いつも予約で満席、刺身の盛り合わせ (1人4,500円)、菜の花と蛤の吸い物、鮪の味噌、蓮根まんじゅう、Fushimi とうがらしとちりめんじゃこの炊いたん、えんどう豆の団子、ビワマス、鰹のわさび味噌、子持ち鮎、鴨の唐揚げ、牛蒡と鰻の柳川鍋、釜飯は早めに、ホールは一人、常連が気さく、ビブグルマンとの記述、店主が Keanu Reeves に似ているという声、刺身の内容が他の卓と違ったという苦情。',
      confidence: 'medium', sources: [TB, R + 'B522202113/', R + 'B523190991/', R + 'B525537235/', R + 'B525706369/', R + 'B530594956/', R + 'B532263420/', R + 'B532731881/', R + 'B535980608/', R + 'B536568186/', R + 'B537961177/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; a chatty regulars\' counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御池通室町東入ル龍池町448',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.011128, 135.758513); cross-checked: GSI 京都府京都市中京区龍池町448番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532731881/'],
    price_note: 'No menu read; sashimi platter price from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi platter (per person)', '¥4,500', 'Sashimi', 'ask', 'no', 'July 2026 review.', 'sashimi_mori'),
      it('', '', 'Kamameshi (order early)', '', 'Rice', 'ask', 'no', '', 'kamameshi'),
    ] }, {
    cuisine: '大皿に美しく盛る刺身の盛り合わせで知られる和食の居酒屋 (1人4,500円ほど、2026年7月)・口コミの料理: 菜の花と蛤の吸い物、鮪の味噌、蓮根まんじゅう、Fushimi とうがらしとちりめんじゃこの炊いたん、えんどう豆の団子の餡かけ、ビワマス、鰹のわさび味噌、子持ち鮎の塩焼き、鴨の唐揚げ、牛蒡と鰻の柳川鍋、茶碗蒸し、釜飯 (2026年の口コミ)・口コミにはビブグルマン選出とある (2026年10月)',
    neighborhood: '烏丸御池の御池通。烏丸御池駅から徒歩1分',
    gf_detail: '要確認。刺身、炊いたんや揚げ物、柳川鍋、釜飯。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚中心の出汁の和食居酒屋 (2026年の口コミ)。',
    notes: '[居酒屋・烏丸御池] 烏丸御池駅すぐの、いつも予約で埋まるにぎやかな居酒屋。見事な刺身の盛り合わせと旬の京料理 (Fushimi とうがらしとじゃこ、子持ち鮎、鰻の柳川鍋) に、締めは釜飯。5千〜1万円ほど。予約を。日曜休み。',
  });
}

save();
