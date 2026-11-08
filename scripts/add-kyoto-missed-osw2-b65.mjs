// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 65.
//   Queue run from the osw2 worktree, 2026-11-07. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail.
//   - El Coyote — thin (2 reviews, one empty)
//   + 麥酒 夢詠ミ Bakushu Yumeyomi (beer bar by Minami-za known for its Yebisu pour; since 2021)
//   + 京都 舞鮨 KYOTO MAISUSHI (standing sushi bar with Maizuru fish and Aomori sake; since December 2025)
//   - ダイニングダーツバーBee 河原町店 — chain
//   + 京懐石 新家 Kyokaiseki Shinya (small kaiseki on Kawabata north of Shijo since 1974; run by a couple)
//   - 世界の山ちゃん 河原町店 — chain (earlier ruling)
//   + Beer Cafe 麦潤 BAKUJUN (craft-beer bar with gyoza, in a hotel annex south of Shijo; 15 years in 2026)
//   None of the four is in data/kyoto.json, hidden records included: grep by id, name and address. Brand names grepped in queue-status.jsonl: rulings
//   followed for 世界の山ちゃん; none on the others.
//   Service charges: 夢詠ミ none; 新家 none (Tabelog).
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; 夢詠ミ offset ~5 m off 和牛ぱんが (same building), 新家 ~3 m off うずら屋 (6 m);
//   each now 9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-65');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26034321', 'El Coyote: thin — two Tabelog reviews, one (March 2026) with no text and the other (August 2025) about a private standing party; no menu or prices on Tabelog. Not drafted');
skip('26003853', 'ダイニングダーツバーBee 河原町店: a chain — the operator site (bee-style.jp/shop, read 2026-11-07) lists Bee darts bars in Sannomiya, Ueno, Sendai, Meieki, Omiya, Tenjin, Shinjuku, Umeda and more');
skip('26018565', '世界の山ちゃん 河原町店: a chain — same ruling as 26017069 (nine shops in our crawls plus eight more in Nagoya)');

// ================================================================ 麥酒 夢詠ミ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036565/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['16:30', '24:00']), SA = day(['15:00', '24:00']), SU = day(['15:00', '22:00']);
  put({
    id: 'kyoto_bakushu_yumeyomi', name: '麥酒 夢詠ミ (Bakushu Yumeyomi)', category: 'OMNI',
    lat: 35.003727, lng: 135.772613, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a beer bar — Yebisu and craft beers are barley-based (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Snacks are few — mixed nuts, sweet-potato chips, Kyoto pickles, a sausage (2024–2026 reviews).',
    hours_raw: 'Monday and Wednesday–Friday 16:30–24:00; Saturday 15:00–24:00; Sunday and holidays 15:00–22:00; closed Tuesday; hours may change (Tabelog). Cards, e-money and PayPay accepted; no cover charge (Tabelog). A small counter with standing room and a few chairs; non-smoking (Tabelog; 2022–2026 reviews). The lift opens straight into the bar, and the entrance is easy to miss (2022 reviews). Busy with beer lovers in the evening (2022 and September 2026). On the 2nd floor of the Shimaya Building on Shijo by Minami-za, steps from Gion-Shijo Stn (Tabelog; 2022 and 2024 reviews).',
    hours: { 0: WD, 2: WD, 3: WD, 4: WD, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo by Minami-za, Gion — by Shijo Ohashi and Gion-Shijo Stn',
    cuisine: 'Beer bar opened June 2021, known for a carefully poured draught Yebisu — ¥800 (2022), ¥850 (2024) — said by reviewers to be among the best in Kyoto; kegs can run out (2022–2026 reviews) · rotating craft taps, e.g. Ohyama G Beer and IPAs; Sapporo too (2022–2026) · few snacks: pistachio salsiccia, mixed nuts, sweet-potato chips, Kyoto pickles (2024–2026) · about ¥2,000 for a short visit (2022)',
    website: null, gmaps: gm('麥酒 夢詠ミ 祇園'), menu_url: TB,
    notes: "[Beer bar · Shijo by Minami-za, the Yebisu pour] A small second-floor beer bar by Minami-za — the lift opens straight into it — where a carefully poured Yebisu (about ¥850) draws beer lovers, with a few craft taps and simple snacks. Standing room and a counter; no cover charge; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner (master) not named'], origin: null,
      background: 'Opened in June 2021 (Tabelog). Reviewers (2022–2026) describe a small beer bar run by an earnest owner, recommended by other brewers and beer fans for its draught Yebisu; the kegs turn over fast — three in one day, a September 2025 guest was told.',
      philosophy: null,
      specialty: 'Draught Yebisu poured with care; craft beer.',
      anecdotes: [
        { text: 'A July 2022 visitor came on the recommendation of the owner of Konoshima Beer in Higashiyama.', source: R + 'B451466987/' },
        { text: 'A September 2025 guest wanted a second Yebisu, but it had sold out — three kegs emptied that day.', source: R + 'B514036249/' },
        { text: 'A September 2026 drinker of big-brewery beer tried Yebisu poured in a single pour for the first time.', source: R + 'B535437759/' },
      ],
      japanese_sources_summary: '食べログ: 麥酒 夢詠ミ、ビアバー、京都市東山区四条通大和大路西入ル中之町206 志満家ビル2F、月・水〜金 16:30〜24:00、土 15:00〜24:00、日祝 15:00〜22:00、火曜定休、カード・電子マネー・PayPay可、チャージ料なし、禁煙、2021年6月26日オープン。口コミ (2022〜2026年、英語): 南座のすぐ隣、エレベーターを降りるとすぐ店内、カウンターと立ち飲み、ヱビス800円 (2022年)・850円 (2024年)、京都一とも言われるヱビス、一度注ぎ、樽の回転が速い (1日に3樽)、クラフトビール (大山Gビールなど)、サッポロ、ピスタチオのサルシッチャ、ミックスナッツ、さつまいもチップス、京漬物、真面目な店主、ビール好きでにぎわう。',
      confidence: 'low', sources: [TB, R + 'B445975497/', R + 'B445975505/', R + 'B451466987/', R + 'B455986431/', R + 'B488375671/', R + 'B498684152/', R + 'B514036249/', R + 'B527433687/', R + 'B535168156/', R + 'B535437759/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards accepted; no cover charge; standing room.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区四条通大和大路西入ル中之町206 志満家ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.003691, 135.772591), offset ~5m to clear 和牛ぱんが 祇園四条店 (same building, 5m); cross-checked: GSI 京都府京都市東山区中之町206番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B451466987/', R + 'B488375671/'],
    price_note: 'Prices from 2022 and 2024 reviews.', last_checked: TODAY, items: [
      it('', '', 'Draught Yebisu', '¥850', 'Beer', 'no', 'ask', 'July 2024; ¥800 in 2022.', 'yebisu'),
      it('', '', 'Craft beer on tap (rotating)', '', 'Beer', 'no', 'ask', '', 'craft'),
      it('', '', 'Pistachio salsiccia', '', 'Snacks', 'ask', 'no', 'September 2026.', 'salsiccia'),
    ] }, {
    cuisine: '2021年6月開業のビアバー。丁寧に注ぐ生のヱビスで知られる、800円 (2022年)・850円 (2024年)、京都一とも言われ、樽がなくなることも (2022〜2026年の口コミ)・入れ替わるクラフトビール、たとえば大山Gビールや IPA、サッポロも (2022〜2026年)・つまみは少なめ: ピスタチオのサルシッチャ、ミックスナッツ、さつまいもチップス、京漬物 (2024〜2026年)・短い滞在で2,000円ほど (2022年)',
    neighborhood: '四条の南座の隣、祇園。四条大橋と祇園四条駅のそば',
    gf_detail: 'グルテンフリー不可。ビアバーで、ヱビスやクラフトビールは麦が原料 (口コミ)。',
    vegan_detail: '要確認。つまみは少なく、ミックスナッツ、さつまいもチップス、京漬物、ソーセージ (2024〜2026年の口コミ)。',
    notes: '[ビアバー・南座の隣、ヱビスの一杯] 南座の隣のビル2階の小さなビアバー。エレベーターを降りるとすぐ店。丁寧に注ぐヱビス (850円ほど) を目当てにビール好きが集まる。クラフトビールも少し、つまみは簡単なもの。立ち飲みとカウンター、チャージなし、火曜休み。',
  });
}

// ================================================================ 京都 舞鮨
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044203/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://maisushi-kyoto.com/';
  const H = day(['16:00', '21:30']);
  put({
    id: 'kyoto_maisushi_ayanokoji', name: '京都 舞鮨 (KYOTO MAISUSHI)', category: 'OMNI',
    lat: 35.002419217872955, lng: 135.7654070903324, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nigiri, sashimi and obanzai made with Fukushima Katsuo dashi; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi, fish dishes and dashi-based obanzai (official site).',
    hours_raw: '16:00–21:30 (food last order 21:00), Friday–Tuesday; closed Wednesday, Thursday and every other Tuesday — check Instagram or Google Maps (official site; Tabelog). Bookings by Instagram DM or phone; courses can be booked ahead; weekend evenings fill early (official site; 2026 reviews). Cards and QR payments accepted (official site; Tabelog). A standing counter of 8–10 places; non-smoking (Tabelog; official site). Budget ¥6,000–8,000 (official site). On the ground floor of the Cosmo First building on Ayanokoji at Fuyacho, next to 焼肉力, about 5 min from Kyoto Kawaramachi Stn (official site; March 2026).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ayanokoji at Fuyacho, south of Shijo — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Standing sushi bar opened December 2025, with fish sent direct from Maizuru port (official site; Tabelog) · nigiri from ¥600 a piece — the house "Mai-saba", raw mackerel aged at ultra-low temperature; Kyoto sawara, young bluefin, nodoguro (official site) · Maizuru fish dishes from ¥600: namero, sesame mackerel, heshiko, sashimi platters; snacks from ¥400 such as Hachinohe squid shiokara; obanzai from ¥500 (official site) · courses: "Tsurugi" ¥6,000 (December 2025), "Tsuru" ¥6,500 (March 2026) · Aomori sakes such as Mutsu Hassen and Denshu, ¥800–1,000 (official site)',
    website: SITE, gmaps: gm('京都 舞鮨 綾小路'), menu_url: SITE + 'menu/',
    notes: "[Standing sushi · Ayanokoji, Maizuru fish and Aomori sake] A bright little standing sushi counter south of Shijo, opened in late 2025 by an owner from Hachinohe who trained at the Maizuru fish market. Nigiri from ¥600 — try the aged mackerel — with dashi obanzai and Aomori sake; courses about ¥6,000. Book at weekends; closed Wednesday and Thursday.",
    chef_bio: { chef_name: null, roles: ['Owner-sushi chef (from Hachinohe, Aomori), not named'], origin: 'Hachinohe, Aomori (official site; reviews).',
      background: 'The official site says the owner hand-makes each piece from Maizuru fish chosen by local brokers and stocks sake from the owner’s home town of Hachinohe. Reviewers (2026) describe a young woman from Aomori who trained for a year at a Maizuru fish market. The operator is 株式会社food&nature of Shimogyo, Kyoto (National Tax Agency invoice register T8040001115380).',
      philosophy: 'One piece, one glass: authentic sushi and sake enjoyed casually, standing, with conversation across the counter (official site).',
      specialty: 'Mai-saba (ultra-low-temperature aged raw mackerel) nigiri.',
      anecdotes: [
        { text: 'A March 2026 guest arrived before opening and watched the owner preparing; on weekends it can be full by 16:00.', source: R + 'B523056175/' },
        { text: 'A September 2026 local from northern Kyoto was delighted that most of the fish came from home waters.', source: R + 'B535616958/' },
        { text: 'A July 2026 business traveller booked a standing table for the Kyoto course and added water aubergine and oysters.', source: R + 'B531302108/' },
      ],
      japanese_sources_summary: '公式サイト: 京都 舞鮨、舞鶴港直送の魚で握るお寿司と京おばんざいの立ち飲み処、京都市下京区塩屋町80 コスモファースト1F、阪急京都河原町駅から徒歩約5分、16:00〜21:30、水・木曜、隔週火曜定休、予約はInstagramのDMか電話、平均予算6,000〜8,000円、カード・QR可、10席。店主自ら一貫ずつ、超低温熟成の生鯖「舞鯖」、京鰆、都まぐろ、福島鰹の出汁の京おばんざい、店主の地元青森県八戸市の陸奥八仙など青森の地酒。メニュー: 魚の逸品600円〜 (なめろう、ごま鯖、へしこ、刺身盛り合わせ)、寿司各600円〜、アテ各400円〜 (八戸のイカの塩辛)、おばんざい500円〜、青森の地酒800〜1,000円。食べログ: 2025年12月20日オープン、8席、カウンターのみ、禁煙、インボイス T8040001115380 (株式会社food&nature)。口コミ (2025〜2026年、英語): 八戸出身の若い女性店主、舞鶴の市場で1年修業、剣コース6,000円、鶴コース6,500円、週末は16時で満席になることも。',
      confidence: 'medium', sources: [SITE, SITE + 'menu/', TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=8040001115380', R + 'B519406971/', R + 'B521685083/', R + 'B522188523/', R + 'B523056175/', R + 'B525259022/', R + 'B525335081/', R + 'B526090344/', R + 'B526929264/', R + 'B531302108/', R + 'B533941832/', R + 'B535616958/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing counter; book by Instagram DM or phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路通麩屋町西入塩屋町80 コスモファースト 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (opening days to late November 2026) and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002419, 135.765407); cross-checked: GSI 京都府京都市下京区塩屋町80番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menu/', R + 'B519406971/', R + 'B525259022/'],
    price_note: 'Prices from the official menu ("from" prices, tax included) and 2025–2026 reviews.', last_checked: TODAY, items: [
      it('舞鯖', '', 'Mai-saba nigiri (ultra-low-temperature aged raw mackerel)', '¥600', 'Sushi', 'ask', 'no', 'Nigiri from ¥600 a piece.', 'maisaba'),
      it('', '', 'Maizuru fish dish (e.g. namero, sashimi platter)', '¥600', 'Fish', 'ask', 'no', 'From ¥600.', 'gyo_ippin'),
      it('', '', 'Obanzai', '¥500', 'Obanzai', 'ask', 'ask', 'From ¥500.', 'obanzai'),
      it('', '', 'Tsuru course (appetizers, 7 nigiri, simmered dishes, obanzai, red miso soup)', '¥6,500', 'Courses', 'ask', 'no', 'March 2026.', 'tsuru'),
      it('', '', 'Aomori sake, glass', '¥800', 'Drink', 'gf', 'ask', '¥800–1,000.', 'sake'),
    ] }, {
    cuisine: '2025年12月開業の立ち飲み寿司、舞鶴港直送の魚 (公式サイト、食べログ)・握りは1貫600円から: 超低温熟成の生鯖「舞鯖」、京鰆、都まぐろ、ノドグロ (公式サイト)・舞鶴の魚の逸品は600円から: なめろう、ごま鯖、へしこ、刺身盛り合わせ。アテは400円から、八戸のイカの塩辛など。おばんざいは500円から (公式サイト)・コース: 剣6,000円 (2025年12月)、鶴6,500円 (2026年3月)・陸奥八仙や田酒など青森の地酒800〜1,000円 (公式サイト)',
    neighborhood: '綾小路の麩屋町、四条の南。京都河原町駅から徒歩5分',
    gf_detail: '要確認。握り、刺身、福島鰹の出汁のおばんざい。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司、魚料理、出汁のおばんざい (公式サイト)。',
    notes: '[立ち飲み寿司・綾小路、舞鶴の魚と青森の酒] 四条の南の明るく小さな立ち飲み寿司。2025年末、舞鶴の魚市場で修業した八戸出身の店主が開いた。握りは600円から、熟成の舞鯖を。出汁のおばんざいと青森の地酒、コースは6,000円ほど。週末は予約を、水木休み。',
  });
}

// ================================================================ 京懐石 新家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26013309/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_kyokaiseki_shinya', name: '京懐石 新家 (Kyokaiseki Shinya)', category: 'OMNI',
    lat: 35.004582, lng: 135.772476, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki with sashimi, simmered dishes, tempura and miso dengaku; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of hamo, ayu, duck and Yanagawa loach pot (reviews).',
    hours_raw: '17:00–22:00 Monday–Saturday (holidays to 21:00); closed Sunday and holiday Mondays (Tabelog). Reservations taken. Cards accepted; no e-money or QR; no cover charge (Tabelog). 10 seats (12 when reserved whole); smoking allowed (Tabelog). The menu is in Japanese only (July 2025). On Kawabata-dori north of Shijo, ground floor of the No. 7 Kobashi Kaikan, near Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawabata-dori north of Shijo — by Gion-Shijo Stn',
    cuisine: 'Small Kyoto kaiseki house since 1974 (Tabelog) · courses: grilled seasonal fish with sashimi and sides ¥6,050; Yanagawa loach-pot course; seasonal tempura course (Tabelog) · e.g. an ¥8,000 summer course: egg tofu, hamo sashimi, Kamo aubergine dengaku, grilled young ayu, duck roast, Yanagawa pot, hamo pressed sushi, fruit, matcha (July 2025) · sashimi, simmered and fried dishes a la carte; homemade chirimen sansho with pickles (2022–2023)',
    website: null, gmaps: gm('京懐石 新家 川端四条'), menu_url: TB,
    notes: "[Kyoto kaiseki · Kawabata by Shijo, a 50-year couple-run room] A ten-seat kaiseki room on Kawabata just north of Shijo, open since 1974 and run by a couple. Courses from about ¥6,000 — grilled fish, Yanagawa loach pot or tempura — or a summer course of hamo and young ayu. Japanese menu only; smoking allowed; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owners (a couple), not named'], origin: null,
      background: 'Opened in April 1974 (Tabelog). A May 2022 reviewer found it run by a couple, with elegantly seasoned food; a July 2025 guest called it a hidden gem of 50 years.',
      philosophy: null,
      specialty: 'Seasonal kaiseki; Yanagawa loach pot.',
      anecdotes: [
        { text: 'A July 2025 guest had dirty chopsticks swapped for fresh ones before each course, because it would change the taste.', source: R + 'B510169007/' },
        { text: 'A May 2022 diner recommends the homemade chirimen sansho served with the pickles.', source: R + 'B449649638/' },
      ],
      japanese_sources_summary: '食べログ: 京懐石 新家、日本料理・海鮮・居酒屋、京都市東山区川端通四条上る常盤町177 第7小橋会館1F、月〜土 17:00〜22:00、祝日 17:00〜21:00、日曜・祝日の月曜定休、予約可、カード可、電子マネー・QR不可、チャージなし、10席 (貸切12名)、喫煙可、1974年4月9日オープン、焼き魚のコース6,050円、柳川鍋のコース、天ぷらのコース。口コミ (2022〜2025年、英語): ご夫婦で営む小さな店、上品な味付け、自家製ちりめん山椒、刺身・煮物・揚げ物、8,000円のコース (玉子豆腐、鱧の刺身、賀茂茄子の田楽、若鮎の塩焼き、鴨ロース、柳川鍋、鱧の押し寿司、果物、抹茶)、料理ごとに箸を替える、メニューは日本語のみ。',
      confidence: 'low', sources: [TB, R + 'B449649638/', R + 'B473192216/', R + 'B510169007/'] },
    cultural_comfort: { level: 'japanese', note: 'Japanese menu only; smoking allowed; ten seats.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区川端通四条上る常盤町177 第7小橋会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with bookable courses; reviews dated through July 2025.' },
    pin_source: `Tabelog ${TB} (35.004582, 135.772443), offset ~3m to clear うずら屋 京都・四条 (6m); cross-checked: GSI 京都府京都市東山区常盤町177番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B510169007/'],
    price_note: 'Course prices from Tabelog set menus and a July 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Grilled seasonal fish course (with sashimi and sides)', '¥6,050', 'Courses', 'ask', 'no', '', 'yakimono'),
      it('', '', 'Yanagawa loach-pot course', '', 'Courses', 'ask', 'no', '', 'yanagawa'),
      it('', '', 'Seasonal tempura course', '', 'Courses', 'no', 'no', '', 'tempura'),
      it('', '', 'Summer kaiseki course (hamo, young ayu, Yanagawa pot)', '¥8,000', 'Courses', 'ask', 'no', 'July 2025.', 'summer'),
    ] }, {
    cuisine: '1974年からの小さな京懐石の店 (食べログ)・コース: 焼き魚と刺身の6,050円、柳川鍋のコース、季節の天ぷらのコース (食べログ)・たとえば夏の8,000円のコース: 玉子豆腐、鱧の刺身、賀茂茄子の田楽、若鮎の塩焼き、鴨ロース、柳川鍋、鱧の押し寿司、果物、抹茶 (2025年7月)・刺身、煮物、揚げ物の一品も。自家製ちりめん山椒と漬物 (2022〜2023年)',
    neighborhood: '川端通の四条上ル。祇園四条駅のそば',
    gf_detail: '要確認。刺身、煮物、天ぷら、田楽の京懐石。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。鱧、鮎、鴨、柳川鍋のコース (口コミ)。',
    notes: '[京懐石・川端の四条上ル、ご夫婦の50年の店] 四条のすぐ北、川端通の10席の京懐石。1974年からご夫婦で営む。コースは6,000円ほどから: 焼き魚、柳川鍋、天ぷら。夏は鱧と若鮎のコースも。メニューは日本語のみ、喫煙可、日曜休み。',
  });
}

// ================================================================ Beer Cafe 麦潤
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26036691/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ameblo.jp/mugideuruoi/';
  const A = day(['16:00', '23:00']), B = day(['15:00', '22:00']);
  put({
    id: 'kyoto_beer_cafe_bakujun', name: 'Beer Cafe 麦潤 (BAKUJUN)', category: 'OMNI',
    lat: 35.00089073787437, lng: 135.766823150316, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a craft-beer bar whose food is mainly gyoza (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Gyoza come in several fillings, including ume-shiso and ginger, but most contain meat (reviews).',
    hours_raw: 'Tuesday–Thursday and Saturday 16:00–23:00; Friday and Sunday 15:00–22:00; closed Monday; hours may change (Tabelog). Cash only — no cards, e-money or QR (Tabelog). A reverse-L counter and a few small tables; non-smoking (Tabelog; 2021–2022 reviews). On the ground floor of the ホテルメルディア四条河原町 annex, about 5 min from Kyoto Kawaramachi Stn (Tabelog; May 2026).',
    hours: { 1: A, 2: A, 3: A, 4: B, 5: A, 6: B }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'South of Shijo — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Craft-beer bar of 15 years (May 2026), with about eight rotating taps — Kyoto Brewing, Kamado and Belgian styles — plus bottles and cans; the owner explains each beer (2021–2026 reviews) · e.g. a pint ¥1,300 (2021), a small ¥1,000 (May 2026) · gyoza in many fillings — shiso, ume-shiso, ginger, curry — from an Utsunomiya specialist; shumai, mapo tofu, rustic pâté ¥900 (2021–2025)',
    website: SITE, gmaps: gm('Beer Cafe 麦潤 京都'), menu_url: TB,
    notes: "[Craft beer · south of Shijo, beer and gyoza] A long-running craft-beer bar on the ground floor of a hotel annex, with about eight rotating taps and an owner happy to explain each one. Pair a pint with gyoza in odd fillings — ume-shiso, ginger, curry — or mapo tofu. Cash only; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner (master) not named'], origin: null,
      background: 'Reviewers (2021–2026) describe a craft-beer bar that moved to a hotel annex around 2021 and celebrated 15 years in May 2026, run by a knowledgeable owner who explains the beers and recommends by style.',
      philosophy: null,
      specialty: 'Rotating craft taps with gyoza.',
      anecdotes: [
        { text: 'A May 2026 guest came on the 15th-anniversary night, when the owner put seven special beers on tap.', source: R + 'B529086288/' },
        { text: 'An October 2022 visitor named it the go-to place for craft beer in Kyoto, thanks to the owner’s tasting notes.', source: R + 'B454986764/' },
        { text: 'A June 2024 guest came for the gyoza and stayed loyal to the mapo tofu.', source: R + 'B490278025/' },
      ],
      japanese_sources_summary: '食べログ: Beer Cafe 麦潤、ビアバー・バー、京都市下京区恵美須之町530 ホテルメルディア四条河原町アネックス1F、火〜木・土 16:00〜23:00、金・日 15:00〜22:00、月曜定休、カード・電子マネー・QR不可、禁煙。口コミ (2021〜2026年、英語): ホテルのアネックスに移転、8つほどのタップ (京都醸造、かまど、ベルギー系)、瓶・缶も、店主がビールを説明、パイント1,300円 (2021年)、S 1,000円 (2026年5月)、宇都宮の専門店から仕入れる餃子 (しそ、梅しそ、生姜、カレー)、焼売、麻婆豆腐、田舎風パテ900円、15周年 (2026年5月)。',
      confidence: 'low', sources: [TB, SITE, R + 'B442627772/', R + 'B454986764/', R + 'B456012841/', R + 'B458248430/', R + 'B472593631/', R + 'B490278025/', R + 'B501023499/', R + 'B529086288/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; the owner explains the beers.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区恵美須之町530 ホテルメルディア四条河原町アネックス 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.000891, 135.766823); cross-checked: GSI 京都府京都市下京区恵美須之町530番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B442627772/', R + 'B529086288/'],
    price_note: 'Prices from 2021 and May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Craft beer, small', '¥1,000', 'Beer', 'no', 'ask', 'May 2026.', 'beer_s'),
      it('', '', 'Craft beer, pint', '¥1,300', 'Beer', 'no', 'ask', '2021.', 'beer_pint'),
      it('', '', 'Gyoza (several fillings)', '', 'Food', 'no', 'ask', '', 'gyoza'),
      it('', '', 'Rustic pâté', '¥900', 'Food', 'ask', 'no', '2021.', 'pate'),
    ] }, {
    cuisine: '15年続くクラフトビールのバー (2026年5月)。8つほどの入れ替わるタップ (京都醸造、かまど、ベルギー系) に瓶と缶、店主が1杯ずつ説明 (2021〜2026年の口コミ)・パイント1,300円 (2021年)、S 1,000円 (2026年5月)・宇都宮の専門店の餃子、しそ、梅しそ、生姜、カレーなど、焼売、麻婆豆腐、田舎風パテ900円 (2021〜2025年)',
    neighborhood: '四条の南。京都河原町駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。クラフトビールのバーで、料理は主に餃子 (口コミ)。',
    vegan_detail: '要確認。梅しそや生姜など餃子の種類は多いが、多くは肉入り (口コミ)。',
    notes: '[クラフトビール・四条の南、ビールと餃子] ホテルのアネックス1階の老舗クラフトビールバー。8つほどの入れ替わるタップを店主が丁寧に説明してくれる。梅しそ、生姜、カレーなど変わり種の餃子や麻婆豆腐と。現金のみ、月曜休み。',
  });
}

save();
