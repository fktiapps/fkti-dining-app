// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 23.
//   + 人形町らーめん いなせ Ningyocho Ramen Inase (cheap, light iekei-style ramen from ¥600, open until 2:30–4:00)
//   + タイニートリア 本店 ティー&サムシングラブリー Tinytria (British tea room: scones, cream tea, afternoon tea; since 2016)
//   + 串揚家 でらじろう Kushiageya Derajiro (budget kushiage izakaya, about 12 years old; smoking allowed)
//   + アン ファス EN FACE (one-chef French bistro of huge portions; Tabelog French 100 2023, 2025)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 8 ningyocho` (main repo, 2026-11-02): the first four,
//   229, 232, 233 and 233 m from the centre.
//   Dedupe. None is in data/tokyo.json by name or address (2-2-3, 2-20-2, 1-16-12, 2-11-9); Sasa Shin (2-20-3) is 7.8 m
//   from Tinytria — different address, own pins.
//   Chain check. Tinytria's Tabelog name carries 本店 ("main shop"), but a web search and Time Out Tokyo (February 2022)
//   mention no other branch; drafted. Others: single shops in the sources.
//   Address note: Time Out Tokyo (February 2022) gave Tinytria's address as 日本橋人形町2-20-5 柿沼ビル 1F; Tabelog now gives
//   2-20-2 大山ビル 1F. The pin follows Tabelog; both addresses are recorded.
//   Ramen block left off for Inase: reviews do not source all six dimensions (brief LESSONS).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-23');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 人形町らーめん いなせ
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13040849/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '02:30']); const FRI = day(['11:00', '04:00']); const SUN = day(['11:00', '23:00']);
  put({
    id: 'tokyo_ningyocho_ramen_inase', name: '人形町らーめん いなせ (Ningyocho Ramen Inase)', category: 'OMNI',
    lat: 35.684772, lng: 139.783919, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza alongside.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu-shoyu broth with chashu.',
    hours_raw: 'Tabelog hours table: Mon–Thu, Sat and holidays 11:00–02:30; Fri 11:00–04:00; Sun 11:00–23:00. Tabelog\'s remarks instead give Sat and Sun 11:00–02:30 and Mon 11:00–23:00. Open year-round (Tabelog). No reservations. No cards; e-money and QR accepted (Tabelog). 15 counter seats; non-smoking inside, with an ashtray by the sign outside at night (Tabelog). Separate plates and cutlery for small children (Tabelog). Busy at lunch and late at night (2025–26 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: FRI, 5: H, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-2-3, 堀口ビル 1F — 2 min from Ningyocho Stn (Hibiya Line)',
    cuisine: 'Iekei-style tonkotsu-shoyu ramen, milder and lighter than most, with spinach, nori and chashu; noodle firmness and fat to order (2025–26 reviews) · ramen ¥600, up from ¥550 (September 2026); medium ¥700 (October 2026); negi ramen with spicy green onion ¥750, the most popular (September 2026); ajitama chashu ramen ¥950; Ningyocho ramen with 5 nori, 3 chashu and an egg ¥1,000 (September–October 2026) · kaedama of thin noodles ¥150, extra soup ¥50; three-snack set ¥380; gyoza; draft beer ¥300, bottled beer ¥580 (2026) · garlic and doubanjiang on the counter',
    website: TB, gmaps: gm('人形町らーめん いなせ'), menu_url: null,
    notes: "[Ramen · Ningyocho, ¥600 iekei-style ramen into the small hours] A fifteen-seat ramen counter that has been the cheap, late answer in Ningyocho for years: iekei-style tonkotsu-shoyu with spinach and nori, but gentler and lighter than the usual, from ¥600 (September 2026). Most order the negi ramen with spicy green onion (¥750), and night-time regulars add a thin-noodle kaedama with extra soup, or start with gyoza and a ¥300 draft beer. It is open year-round from 11:00 until 2:30 a.m. most nights, later on Fridays, and fills with salarymen and builders at lunch and after drinking. Some diners wish the broth had more punch. No cards; e-money and QR work.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A long-running Ningyocho ramen shop (a diner returning after 10 years, September 2026). Prices have risen modestly: ramen ¥500 → ¥550 (April 2025) → ¥600 (September 2026).',
      philosophy: null, specialty: 'Negi ramen.',
      anecdotes: [
        { text: '"While it had the characteristic punch of a Yokohama-style ramen (but on the milder side), the broth was surprisingly light." — September 2026, negi ramen ¥750.', source: R + 'B535261188/' },
        { text: '"After finishing the first bowl of medium-thick noodles, I ordered a \'Kaedama (JPY 150) + Extra Soup (JPY 50).\' Here, the kaedama is switched to \'thin noodles.\'" — October 2026.', source: R + 'B538331096/' },
        { text: '"The flavor might depend on personal preference; I felt it could use a bit more punch." — October 2026.', source: R + 'B537688716/' },
      ],
      japanese_sources_summary: '食べログ: 人形町らーめん いなせ、ラーメン、日本橋人形町2-2-3 堀口ビル 1F、人形町駅から徒歩2分、月〜木・土・祝11:00〜2:30、金11:00〜4:00、日曜11:00〜23:00 (備考では土日11:00〜2:30、月曜11:00〜23:00)、年中無休、予約不可、カード不可、電子マネー・QR可、15席、店内禁煙、子ども用の取り皿あり。口コミ(2025年4月〜2026年10月): 家系のようだが軽い豚骨醤油、ほうれん草と海苔、らーめん600円 (550円から値上げ)、中盛り700円、いちばん人気のネギらーめん750円、味玉チャーシュー麺950円、人形町らーめん1,000円、替玉は細麺150円、スープ増し50円、おつまみ3点セット380円、生ビール300円、深夜も混む、もう少しパンチがほしいという声も。',
      confidence: 'medium', sources: [TB, R + 'B197267754/', R + 'B505462801/', R + 'B509374030/', R + 'B535261188/', R + 'B535829643/', R + 'B536394817/', R + 'B536528016/', R + 'B537688716/', R + 'B538331096/', R + 'B538361908/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu on the wall; firmness and fat to order; open late.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-2-3 堀口ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews to October 2026.' },
    pin_source: `Tabelog ${TB} (35.684772, 139.783919); cross-checked: GSI 東京都中央区日本橋人形町二丁目2番3号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B505462801/', R + 'B535261188/', R + 'B538331096/', R + 'B535829643/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen', '¥600', 'Ramen', 'no', 'no', 'September 2026.', 'ramen'),
      it('', '', 'Negi ramen (spicy green onion)', '¥750', 'Ramen', 'no', 'no', 'September 2026.', 'negi'),
      it('', '', 'Ajitama chashu ramen', '¥950', 'Ramen', 'no', 'no', 'October 2026.', 'ajitama_chashu'),
      it('', '', 'Ningyocho ramen (nori, chashu, egg)', '¥1,000', 'Ramen', 'no', 'no', 'September 2026.', 'ningyocho'),
      it('', '', 'Kaedama (thin noodles)', '¥150', 'Extras', 'no', 'no', 'October 2026; extra soup ¥50.', 'kaedama'),
    ] }, {
    cuisine: '家系のような豚骨醤油ラーメン、たいていの家系より穏やかで軽く、ほうれん草、海苔、チャーシュー。麺の硬さと脂の量を選べる (2025〜26年の口コミ)・らーめん600円、550円から値上げ (2026年9月)、中盛り700円 (2026年10月)、いちばん人気の辛いねぎのネギらーめん750円 (2026年9月)、味玉チャーシュー麺950円、海苔5枚、チャーシュー3枚、味玉の人形町らーめん1,000円 (2026年9月〜10月)・替玉は細麺で150円、スープ増し50円、おつまみ3点セット380円、餃子、生ビール300円、瓶ビール580円 (2026年)・カウンターににんにくと豆板醤',
    neighborhood: '日本橋人形町2-2-3 堀口ビル 1F。人形町駅 (日比谷線) から徒歩2分',
    gf_detail: 'グルテンフリーではない: 小麦の麺。餃子も。',
    vegan_detail: 'ヴィーガンではない: 豚骨醤油のスープにチャーシュー。',
    notes: '[ラーメン・人形町、深夜まで600円の家系のようなラーメン] 何年も前から人形町の安くて遅い時間の頼りになってきた15席のラーメンのカウンター。ほうれん草と海苔の家系のような豚骨醤油だが、ふつうよりやさしく軽く、600円から (2026年9月)。多くの客が頼むのは辛いねぎのネギらーめん (750円)。夜の常連は細麺の替玉にスープ増し、または餃子と300円の生ビールから始める。年中無休で11時からほぼ毎晩深夜2時半まで、金曜はもっと遅くまで開き、昼と飲んだあとは会社員や職人で埋まる。もう少しパンチがほしいという声も。カード不可、電子マネーと QR は可。',
  });
}

// ================================================================ タイニートリア 本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13191773/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.tinytoria.com/';
  const TO = 'https://www.timeout.jp/tokyo/ja/%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3/tinytoria';
  const H = day(['11:00', '17:30']);
  put({
    id: 'tokyo_tinytria_ningyocho', name: 'タイニートリア 本店 ティー&サムシングラブリー (Tinytria Honten Tea & Something Lovely)', category: 'MOM_AND_POP',
    lat: 35.685659, lng: 139.784637, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: scones (including whole-wheat), crumpets, sandwiches and cakes are the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter scones, egg-based cakes, lemon curd, cream cheese frosting.',
    hours_raw: 'Wed–Sun 11:00–17:30; closed Monday and Tuesday, but open on holidays (Tabelog). Reservations essential for afternoon tea — booked up to three months ahead in 2023 — though walk-ins are sometimes possible for scones and tea (April 2026). Cards and QR; no e-money (Tabelog). 12 seats: 8 at tables and 4 at the counter (Tabelog), plus terrace seats with leash hooks for dogs (May 2026). Non-smoking. Takeaway scones and cakes (Tabelog; 2023–26). Opened 2 February 2016 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-20-2, 大山ビル 1F (Tabelog; Time Out Tokyo gave 2-20-5 柿沼ビル in 2022), just off Amazake Yokocho — 3 min from Ningyocho Stn exit A1',
    cuisine: 'British tea room (Tabelog; 2018–26 reviews) · cream tea set — whole-wheat or plain scone with a pot of tea — ¥880 (January 2018) · crumpet set; plain scone with lemon curd; banana bread; carrot cake with cream cheese and pumpkin seeds; Victoria sponge (2024–26) · casual afternoon tea on a tea stand with cucumber and tuna sandwiches, scones and a choice of about five daily cakes, not served in busy seasons such as Christmas (Time Out Tokyo, 2022; February 2024, May 2026) · teas including Taylors of Harrogate and Yorkshire Tea (Time Out Tokyo, 2022); a house original blend (April 2026) · scones and cakes to take away',
    website: SITE, gmaps: gm('タイニートリア 人形町'), menu_url: null,
    notes: "[Café · Ningyocho, an English country tea room on Amazake Yokocho] A twelve-seat British-style tea room just off Amazake Yokocho, opened in 2016 by owner 慶本佐知子 and filled with vintage china and objects the owner bought (Time Out Tokyo, 2022). The scones are the reason to come — plain or whole-wheat, crisp outside and fluffy within, with a sharp lemon curd — alongside crumpets, banana bread, carrot cake and Victoria sponge, with pots of Taylors of Harrogate tea. The casual afternoon tea on a tea stand books out weeks or months ahead (three months in 2023), though scones and tea are sometimes possible on the day. It has appeared on the TV show “Matsuko’s World” (August 2023 review). Dogs are welcome on the terrace. Closed Mondays and Tuesdays.",
    chef_bio: { chef_name: '慶本佐知子 (as written in Time Out Tokyo, February 2022; no reading given)', roles: ['Owner, who buys the vintage tableware and objects (Time Out Tokyo, 2022)'], origin: null,
      background: 'Opened 2 February 2016 (Tabelog). Per Time Out Tokyo (15 February 2022): a tea salon on Amazake Yokocho evoking the English countryside, decorated with vintage tableware and objects bought by the owner, serving Taylors of Harrogate teas and a casual afternoon tea; address then given as 2-20-5 柿沼ビル 1F. Featured on the TV show “Matsuko’s World” for its scones (August 2023 review).',
      philosophy: null, specialty: 'Scones; casual afternoon tea.',
      anecdotes: [
        { text: '"I reserved afternoon tea three months in advance, and both the tea and scones were delicious." — August 2023.', source: R + 'B469442650/' },
        { text: '"I was pleasantly surprised to find such delicious crumpets available in Japan." — January 2024.', source: R + 'B490782443/' },
        { text: '"I was delighted to find leash hooks provided for pet owners, making it easy to enjoy afternoon tea without worry." — May 2026.', source: R + 'B534040954/' },
      ],
      japanese_sources_summary: '食べログ: タイニートリア 本店 ティー&サムシングラブリー、その他、日本橋人形町2-20-2 大山ビル 1F、人形町駅A1出口から徒歩3分、水〜日11:00〜17:30、月・火休み (祝日は営業)、完全予約制、カード・QR可、12席 (テーブル8、カウンター4)、禁煙、テイクアウト、2016年2月2日オープン、ホームページ tinytoria.com。タイムアウト東京 (2022年2月15日): 甘酒横丁のイギリスのカントリーサイドのようなティーサロン、オーナーの慶本佐知子さんが買い付けたビンテージの器と雑貨、Taylors of Harrogate の紅茶、カジュアルアフタヌーンティー、住所は2-20-5 柿沼ビル 1階。口コミ(2018年1月〜2026年10月): クリームティーセット880円 (2018年)、スコーン、クランペット、レモンカード、バナナブレッド、キャロットケーキ、ヴィクトリアスポンジ、アフタヌーンティーは数か月前から予約、テレビの「Matsuko’s World」で紹介、テラス席は犬も可。',
      confidence: 'medium', sources: [TB, SITE, TO, R + 'B321827768/', R + 'B432978403/', R + 'B469442650/', R + 'B480698681/', R + 'B490782443/', R + 'B516706537/', R + 'B520853671/', R + 'B527099794/', R + 'B534040954/', R + 'B537588988/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead for afternoon tea; dogs on the terrace.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-20-2 大山ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews to October 2026. Time Out Tokyo (2022) gave a different street number (2-20-5).' },
    pin_source: `Tabelog ${TB} (35.685659, 139.784637); cross-checked: GSI 東京都中央区日本橋人形町二丁目20番2号 (go) 4m. Sasa Shin (2-20-3) is 7.8 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B321827768/'],
    price_note: 'Only an old price is published (January 2018); afternoon tea price not found.', last_checked: TODAY, items: [
      it('', '', 'Cream tea set (scone and pot of tea)', '¥880', 'Tea sets', 'no', 'no', 'January 2018 — likely higher now.', 'cream_tea'),
      it('', '', 'Casual afternoon tea', 'not listed', 'Afternoon tea', 'no', 'no', 'Reservation; 2024–26 reviews.', 'afternoon_tea'),
    ] }, {
    cuisine: 'イギリスのティールーム (食べログ、2018〜26年の口コミ)・全粒粉かプレーンのスコーンとポットの紅茶のクリームティーセット880円 (2018年1月)・クランペットのセット、レモンカードのプレーンスコーン、バナナブレッド、クリームチーズとかぼちゃの種のキャロットケーキ、ヴィクトリアスポンジ (2024〜26年)・ティースタンドのカジュアルアフタヌーンティー、きゅうりとツナのサンドイッチ、スコーン、日替わり約5種から選ぶケーキ、クリスマスなど忙しい時期はなし (タイムアウト東京、2022年。2024年2月、2026年5月)・Taylors of Harrogate と Yorkshire Tea (タイムアウト東京、2022年)、オリジナルブレンド (2026年4月)・スコーンとケーキの持ち帰り',
    neighborhood: '日本橋人形町2-20-2 大山ビル 1F (食べログ。2022年のタイムアウト東京では2-20-5 柿沼ビル)、甘酒横丁のすぐそば。人形町駅A1出口から徒歩3分',
    gf_detail: 'グルテンフリーではない: スコーン (全粒粉も)、クランペット、サンドイッチ、ケーキが中心。',
    vegan_detail: 'ヴィーガンではない: バターのスコーン、卵のケーキ、レモンカード、クリームチーズ。',
    notes: '[カフェ・人形町、甘酒横丁のイギリスの田舎のティールーム] 甘酒横丁のすぐそばにある12席のイギリス風のティールームで、2016年にオーナーの慶本佐知子さんが開き、買い付けたビンテージの器や雑貨が並ぶ (タイムアウト東京、2022年)。目当てはスコーンで、プレーンか全粒粉、外はカリッと中はふんわり、酸味のあるレモンカードで。クランペット、バナナブレッド、キャロットケーキ、ヴィクトリアスポンジに、Taylors of Harrogate の紅茶をポットで。ティースタンドのカジュアルアフタヌーンティーは数週間から数か月先まで予約で埋まる (2023年は3か月) が、スコーンと紅茶なら当日入れることも。テレビの「Matsuko’s World」でも紹介された (2023年8月の口コミ)。テラス席は犬も可。月・火休み。',
  });
}

// ================================================================ 串揚家 でらじろう
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13172752/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['16:00', '23:30']); const SAT = day(['16:00', '23:00']);
  put({
    id: 'tokyo_kushiageya_derajiro_ningyocho', name: '串揚家 でらじろう (Kushiageya Derajiro)', category: 'OMNI',
    lat: 35.684492, lng: 139.78354, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: every skewer is breaded and deep-fried; the dipping sauce is Worcestershire-style.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and seafood skewers fried with the vegetable ones.',
    hours_raw: 'Mon–Fri 16:00–23:30 (last order 22:30); Sat and holidays 16:00–23:00 (last order 22:00); closed Sunday (Tabelog). Reservations accepted; private hire for groups (Tabelog). Cards (VISA, Master, JCB, AMEX); no e-money (Tabelog). 30 seats including a high counter (Tabelog; September 2026). Smoking allowed throughout — tell them when booking if you mind (Tabelog; 2025 reviews). About 12 years old (July 2026 review). Complimentary edamame and peanuts to start (2025–26).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: SAT }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 1-16-12, 寺村ビル 1F, in a side alley — 2 min from Ningyocho Stn exit A2 and Suitengumae Stn exit 6',
    cuisine: 'Budget kushiage izakaya with a light, well-drained batter; skewers with sauce or salt and lemon (2025–26 reviews) · omakase 10-skewer set ¥1,200 (Tabelog menu, 2018, before tax); skewers from about ¥90 (lotus root, onion) to ¥300 (foie gras) — pork, beef, beef with cheese, kisu with mitsuba, scallop, shrimp in shiso, squid, quail egg, egg bomb, red pickled ginger (Tabelog menu, 2018) · special garlic menchi; cheese tsukune; stuffed shiitake; pork and cheese mille-feuille; fried river shrimp; chicken wings; Akashi-style takoyaki (2025–26) · Nagoya dote-ni (Tabelog menu) · kamameshi to finish; potato salad · courses (December 2025)',
    website: TB, gmaps: gm('串揚家 でらじろう 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Kushiage · Ningyocho, cheap kushiage and kamameshi in a smoky alley izakaya] A lively, inexpensive kushiage izakaya in a Ningyocho side alley, about twelve years old (July 2026), where the batter is light and well drained and skewers start around ¥100. Edamame and peanuts come free to start; regulars order the 10-skewer omakase set or go à la carte — pork, shrimp in shiso, quail egg, a garlic menchi — and finish with a kamameshi rice pot. There is a Nagoya streak in the menu, with dote-ni stew. Bills stay low (two people ate and drank for under ¥6,000, June 2026), and the owner is warm. The catch: smoking is allowed throughout, and one December 2025 diner left smelling of smoke and oil; the potato salad was also found average. Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; "The owner\'s warm smile was a nice touch too!", June 2026)'], origin: null,
      background: 'About 12 years in business (July 2026 review). Tabelog shop text: kushiage made with carefully selected ingredients, with carefully selected local sake.',
      philosophy: null, specialty: 'Kushiage; kamameshi.',
      anecdotes: [
        { text: '"After drinking four alcoholic beverages, the total was just under JPY 6000." — June 2026, two people.', source: R + 'B417706070/' },
        { text: '"The kushiage here are known for their excellent oil drainage and light, crispy batter." — November 2025.', source: R + 'B516928934/' },
        { text: '"The smell of cigarettes and frying oil clung to my clothes, leaving me with a somewhat unpleasant feeling after the meal." — December 2025.', source: R + 'B518478944/' },
      ],
      japanese_sources_summary: '食べログ: 串揚家 でらじろう、串揚げ、居酒屋、日本橋人形町1-16-12 寺村ビル 1F、人形町駅A2出口・水天宮前駅6番出口から徒歩2分、月〜金16:00〜23:30、土・祝16:00〜23:00、日曜休み、予約可、貸切可、カード可、電子マネー不可、30席、喫煙可 (気になる人は予約時に)、こだわりの食材の串揚げと地酒、おまかせ10本セット1,200円 (2018年のメニュー、税別)、串は約90円〜300円、Nagoya のどて煮。口コミ(2025年7月〜2026年9月): 約12年、お通しの枝豆とピーナッツ、軽い衣、にんにくメンチ、チーズつくね、豚チーズのミルフィーユ、川海老の唐揚げ、明石焼き、締めの釜飯、安い、店主の笑顔、全席喫煙で煙と油のにおいが服につくという声、ポテサラは普通という声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B417706070/', R + 'B510386783/', R + 'B514670437/', R + 'B515166869/', R + 'B516928934/', R + 'B518478944/', R + 'B522298477/', R + 'B532211746/', R + 'B535925616/', R + 'B536502732/'] },
    cultural_comfort: { level: 'japanese', note: 'Smoking allowed throughout; set or à la carte skewers.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-16-12 寺村ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews to September 2026.' },
    pin_source: `Tabelog ${TB} (35.684492, 139.783540); cross-checked: GSI 東京都中央区日本橋人形町一丁目16番12号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/'],
    price_note: 'Tabelog menu dated 2018-12-04, before tax — likely higher now.', last_checked: TODAY, items: [
      it('', '', 'Omakase 10-skewer set', '¥1,200', 'Kushiage', 'no', 'no', 'Tabelog menu, 2018, before tax.', 'omakase10'),
      it('', '', 'Pork skewer', '¥130', 'Kushiage', 'no', 'no', 'Tabelog menu, 2018, before tax.', 'pork'),
      it('', '', 'Shrimp in shiso skewer', '¥180', 'Kushiage', 'no', 'no', 'Tabelog menu, 2018, before tax.', 'shrimp'),
      it('', '', 'Lotus root skewer', '¥90', 'Kushiage', 'no', 'no', 'Tabelog menu, 2018, before tax.', 'renkon'),
    ] }, {
    cuisine: '軽く油切れのよい衣の手ごろな串揚げの居酒屋、串はソースか塩とレモンで (2025〜26年の口コミ)・おまかせ10本セット1,200円 (食べログのメニュー、2018年、税別)、串は蓮根や玉ねぎの約90円からフォアグラの300円まで。豚、牛、牛チーズ、きすの三つ葉巻き、帆立、海老の大葉巻き、いか、うずら、玉子爆弾、紅しょうが (食べログのメニュー、2018年)・特製にんにくメンチ、チーズつくね、椎茸の肉詰め、豚チーズのミルフィーユ、川海老の唐揚げ、手羽先、明石焼き (2025〜26年)・Nagoya のどて煮 (食べログのメニュー)・締めの釜飯、ポテトサラダ・コース (2025年12月)',
    neighborhood: '日本橋人形町1-16-12 寺村ビル 1F、脇の路地。人形町駅A2出口・水天宮前駅6番出口から徒歩2分',
    gf_detail: 'グルテンフリーではない: どの串も衣を付けて揚げ、ソースはウスター系。',
    vegan_detail: 'ヴィーガンではない: 肉と魚介の串を野菜の串と一緒に揚げる。',
    notes: '[串揚げ・人形町、煙の立つ路地の居酒屋の安い串揚げと釜飯] 人形町の脇の路地にある、にぎやかで手ごろな串揚げの居酒屋で、約12年 (2026年7月)。衣は軽く油切れがよく、串は100円前後から。お通しの枝豆とピーナッツは無料で、常連は10本のおまかせセットか、豚、海老の大葉巻き、うずら、にんにくメンチなどをアラカルトで頼み、締めは釜飯。どて煮など Nagoya の味も。会計は安く (2026年6月、2人で6,000円弱)、店主の笑顔もいい。難点は全席喫煙で、2025年12月には煙と油のにおいが服に残ったという声も。ポテトサラダは普通という声も。日曜休み。',
  });
}

// ================================================================ アン ファス
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13238193/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'tokyo_en_face_ningyocho', name: 'アン　ファス (EN FACE)', category: 'MOM_AND_POP',
    lat: 35.685347, lng: 139.784503, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Gratins, terrines, pâté de grand-mère and bread from Éclat de Jour are on the menu (2026 reviews); nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-, seafood- and cream-based bistro.',
    hours_raw: 'Tabelog lists no business hours. Reservation only, often booked about a year ahead (October 2025 review). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). 10 seats, mostly counter; private hire up to 20 (Tabelog). Non-smoking. Opened 19 August 2019 (Tabelog). Leftovers can be packed to take home (October 2025).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-11-9, in the alleys between Ningyocho and Suitengumae',
    cuisine: 'À la carte French bistro of very large portions (2025–26 reviews) · freshly sliced prosciutto from Savoie with seasonal fruit ¥3,000; snow crab and celeriac mousse with shellfish jelly ¥4,900; scallop cream gratin ¥4,900; roast duck breast ¥5,900 (October 2026) · charcuterie platter, chicken liver mousse, carrot rillettes, pâté de grand-mère, foie gras terrine, baked oysters with herb garlic butter, pumpkin soup, cod milt gratin, confit sanma, roast Ezo venison with truffle sauce, Hungarian duck (September–October 2026) · desserts: peach compote with yogurt ice, coconut milk pudding, chocolate quenelle, freshly baked financier (2026) · bread from Éclat de Jour (September 2026) · wine',
    website: TB, gmaps: gm('アン ファス 人形町'), menu_url: null,
    notes: "[French · Ningyocho, a one-chef bistro famous for enormous portions] A ten-seat counter bistro in the alleys between Ningyocho and Suitengumae, cooked single-handed by chef Kameyama, who spent five years in a Paris bistro (September 2026). It is known above all for size: a crab and celeriac mousse with \"more than a can's worth of crab\", prosciutto sliced to order and piled with seasonal fruit, roast duck or Ezo venison under truffle sauce — three plates fill most people, and leftovers can be taken home. Prices run about ¥3,000–¥6,000 a dish; a group paid just over ¥30,000 with wine (October 2025). A Tabelog French 100 pick in 2023 and 2025; one reviewer mentions repeat Bib Gourmand listings. Bookings go up to a year ahead.",
    chef_bio: { chef_name: 'Kameyama (surname only, romaji from a September 2026 review; no kanji source)', roles: ['Chef, cooking alone ("Chef Kameyama, who trained for five years in a bistro in Paris, manages the kitchen solo", September 2026)'], origin: null,
      background: 'Opened 19 August 2019 (Tabelog). Per reviews: the chef trained five years in a Paris bistro and runs the kitchen alone (September 2026); the restaurant "has received the Bib Gourmand award multiple times" (September 2026 review). Selected for Tabelog French TOKYO 100 in 2023 and 2025 (Tabelog).',
      philosophy: null, specialty: 'Snow crab and celeriac mousse; freshly sliced prosciutto.',
      anecdotes: [
        { text: '"For an average person, three plates would likely be enough to feel full." — September 2026.', source: R + 'B456349400/' },
        { text: '"It felt like there was more than a can’s worth of crab meat" — September 2026, snow crab and celeriac mousse.', source: R + 'B515752503/' },
        { text: '"A popular restaurant with reservations a year in advance!" — October 2025.', source: R + 'B518038245/' },
      ],
      japanese_sources_summary: '食べログ: アン ファス、フレンチ、ビストロ、フレンチ TOKYO 百名店2023・2025、日本橋人形町2-11-9、営業時間の記載なし、完全予約制、カード可、電子マネー・QR不可、10席、貸切20名まで、禁煙、2019年8月19日オープン。口コミ(2025年10月〜2026年10月): シェフの Kameyama さんがひとりで料理、Paris のビストロで5年修業、量がとても多い、切りたての生ハムと季節の果物3,000円、ずわい蟹とセロリラブのムースと貝のジュレ4,900円、帆立のグラタン4,900円、鴨胸のロースト5,900円、シャルキュトリー、パテ・ド・グランメール、フォアグラのテリーヌ、Ezo 鹿のロースト、パンは Éclat de Jour、持ち帰り可、予約は1年先まで、ビブグルマンに何度も選ばれたという声。',
      confidence: 'medium', sources: [TB, R + 'B439108026/', R + 'B456349400/', R + 'B489500233/', R + 'B515752503/', R + 'B517153398/', R + 'B518038245/', R + 'B535715207/', R + 'B536407778/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; order less and add more — portions are huge.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-11-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews to October 2026.' },
    pin_source: `Tabelog ${TB} (35.685347, 139.784503); cross-checked: GSI 東京都中央区日本橋人形町二丁目11番9号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B439108026/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Freshly sliced prosciutto with fruit', '¥3,000', 'Starters', 'ask', 'no', 'October 2026.', 'jambon'),
      it('', '', 'Snow crab and celeriac mousse, shellfish jelly', '¥4,900', 'Starters', 'ask', 'no', 'October 2026.', 'crab_mousse'),
      it('', '', 'Scallop cream gratin', '¥4,900', 'Mains', 'no', 'no', 'October 2026.', 'gratin'),
      it('', '', 'Roast duck breast', '¥5,900', 'Mains', 'ask', 'no', 'October 2026.', 'duck'),
    ] }, {
    cuisine: '量がとても多いアラカルトのフレンチビストロ (2025〜26年の口コミ)・切りたての Savoie の生ハムと季節の果物3,000円、ずわい蟹とセロリラブのムースと貝のジュレ4,900円、帆立のクリームグラタン4,900円、鴨胸のロースト5,900円 (2026年10月)・シャルキュトリーの盛り合わせ、鶏レバーのムース、人参のリエット、パテ・ド・グランメール、フォアグラのテリーヌ、ハーブとにんにくのバターの焼き牡蠣、かぼちゃのスープ、鱈の白子のグラタン、さんまのコンフィ、トリュフソースのEzo 鹿のロースト、Hungary 産の鴨 (2026年9月〜10月)・デザート: 桃の白ワインのコンポートとヨーグルトのアイス、ココナッツのミルクプリン、チョコレートのクネル、焼きたてのフィナンシェ (2026年)・パンは Éclat de Jour (2026年9月)・ワイン',
    neighborhood: '日本橋人形町2-11-9、人形町と水天宮前の間の路地',
    gf_detail: '要確認。グラタン、テリーヌ、パテ、Éclat de Jour のパンがある (2026年の口コミ)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 肉、魚介、クリームのビストロ。',
    notes: '[フレンチ・人形町、量の多さで知られるシェフひとりのビストロ] 人形町と水天宮前の間の路地にある10席のカウンターのビストロで、Paris のビストロで5年修業したシェフの Kameyama さんがひとりで料理する (2026年9月)。いちばん知られているのは量で、「缶詰1缶分以上の蟹」が入った蟹とセロリラブのムース、その場で切る生ハムに季節の果物、トリュフソースの鴨やEzo 鹿のロースト。たいていの人は3皿で満腹になり、残りは持ち帰れる。1皿約3,000〜6,000円で、2025年10月にはワイン込みで数人で3万円強。2023年と2025年の食べログ フレンチ百名店で、ビブグルマンに何度も選ばれたという口コミも。予約は1年先まで埋まる。',
  });
}

save();
