// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 110
// (drafted 2026-11-26 against main b7575b43; core and notable lists empty in the lane, so rest list nearest-first per the brief).
//   + ちから餅 (Chikara Mochi; old udon-and-donburi diner north of Kyoto Stn on Shichijo; rest) — romaji from Tabelog's kana ちからもち
//   + Utr. (seafood-led creative izakaya on a second floor near Shijo-Omiya, opened May 2025; rest) — Latin name as the shop writes it
//   + bar ISLAND (late cocktail bar by Kyoto Tower, since 2008; rest) — Latin name as the shop writes it
//   + Restaurant Passion (レストラン パッション; couple-run French bistro at Kojinguchi; rest) — Latin from the Retty listing, see report
//   Rest list (mod 6 = 1), nearest-first — skipped:
//   - 茶季 三井ガーデンホテル京都駅前 26033707: big-chain hotel (Greg 11-08): breakfast buffet and guest lounge of Mitsui Garden Hotel.
//   - ハートフルダイニング 京大病院店 26031055: operator 株式会社フードシティ (Nagoya) runs hospital shops in seven hospitals.
//   - スカイラウンジ「空」KUU 26005057: big-chain hotel: Kyoto Tower Hotel, Keihan Hotels & Resorts (KIZAHASHI / SCALAE hidden as chain-hotel).
//   - 京都仁王門, 京ばあむ, 益や製菓, 都松庵, 京都とバターと (all 京都タワーサンド 1F): retail food shops (Greg 11-07 ruling).
//   Left in the queue, not drafted: 京甚兵衛 26031679 and かつを 26039281 (held for Greg).
//   None of the four drafted is in data (main b7575b43, hidden records included; grep of Tabelog id, name, address) or in
//   another worker's pending add-kyoto-missed-* script (osw2 b98, osw6 b107, osw9 b103).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-110');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260101/26033707/', 'large parent: big-chain hotel (Greg 2026-11-08) — 茶季 is the breakfast buffet and guest lounge of 三井ガーデンホテル京都駅前 (Tabelog website link gardenhotels.co.jp/kyoto-station/restaurant/; reviews 2023–2026)');
skip('https://tabelog.com/en/kyoto/A2601/A260302/26031055/', 'non-local multi-venue operator: ハートフルダイニング is run by 株式会社フードシティ (Nagoya), which lists hospital shops in seven hospitals (foodcity.co.jp 実績店舗一覧, read 2026-11-26) and runs a Tully’s Coffee in the same Kyoto University Hospital lobby');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26005057/', 'large parent: big-chain hotel (Greg 2026-11-08) — the lounge of 京都タワーホテル, a 京阪ホテルズ&リゾーツ hotel (Tabelog website link keihanhotels-resorts.co.jp; the group site lists 京都タワーホテル, アネックス, 京都センチュリーホテル, ザ・サウザンド京都, 琵琶湖ホテル and more); same group as KIZAHASHI and SCALAE, hidden as chain-hotel');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26037607/', 'retail food shop (Greg 11-07 ruling): take-home yatsuhashi and dried-persimmon sweets bought as souvenirs (May and June 2026 reviews); no founding date or GF/vegan options sourced');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26029057/', 'retail food shop (Greg 11-07 ruling): Kyo Baamu souvenir counter in the Kyoto Tower building, with a soft-serve to eat on the go (May, August, November 2026 reviews); no GF/vegan options sourced');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26039305/', 'retail food shop (Greg 11-07 ruling): gift sets of canned sake and snacks (2024 and January 2026 reviews); opened 2023 (Tabelog)');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26029447/', 'retail food shop (Greg 11-07 ruling): yokan and white-bean cheesecake to take home (December 2025 – October 2026 reviews); no founding date or GF/vegan options sourced');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26045851/', 'retail food shop (Greg 11-07 ruling): newly opened take-away baumkuchen and financier shop (September 2026 reviews); only two reviews');

// ================================================================ ちから餅 (north of Kyoto Stn, Shichijo-dori)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26001463/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:30', '16:00']);
  put({
    id: 'kyoto_chikara_mochi_shichijo', name: 'ちから餅 (Chikara Mochi)', category: 'OMNI',
    lat: 34.989361787878224, lng: 135.7559052702072, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the core is wheat udon made from Hokkaido flour (Tabelog), with soba, curry udon and tempura udon (2024–2026 reviews); the rice bowls and inari sushi are rice but no gluten information is given.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dashi is made from Rishiri kombu and katsuobushi (Tabelog), and it goes into the noodles, the curry and the donburi (2026 reviews).',
    hours_raw: 'Monday–Saturday 10:30–16:00; closed Sunday (Tabelog). A September 2026 reviewer gave 11:00–14:00, closed Saturday and Sunday, and a November 2026 reviewer called it lunch-only, so Saturday is left unset here — check before going. No reservations; no credit cards (Tabelog); paid in cash after eating (June 2026); e-money not stated. 32 seats: 20 at tables and 12 on tatami (Tabelog). Non-smoking; no parking, coin parking nearby (Tabelog). Shared tables at busy times (September 2026). 7 min walk from JR Kyoto Stn, on the north side of Shichijo-dori (Tabelog; April and September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shichijo-dori, north side, 7 min from Kyoto Stn',
    cuisine: 'Old-style udon, soba and donburi diner with a display case of inari sushi (March and November 2026) · udon from Hokkaido unbleached flour aged each day, with dashi from Rishiri kombu and katsuobushi (Tabelog) · the regulars’ order is the value lunch: Kyoto-style curry udon with chopped fried tofu and Kujo green onion, plus two inari sushi with black sesame, ¥800 tax included (April–August 2026), large +¥150 (April 2026); curry udon alone ¥650 (April 2026); a curry udon set ¥900 (February 2024) · meat udon ¥750, Kinugasa-don ¥750 with a tofu soup, inari ¥100 (March 2026); tempura udon ¥1,200, served chilled (June 2026); kitsune udon with the fried tofu cut up (July 2026); tori-nanba udon ¥750 (September 2026); meat ankake udon (September 2026); meat donburi with clear soup and white pickles (May 2026); chilled sansai soba and an onigiri made to order, off the menu (August 2026) · in March 2026 the shop said it had stopped making fried dishes, so no katsudon · under ¥1,000 (Tabelog)',
    website: null, gmaps: gm('ちから餅 京都市下京区夷之町699'), menu_url: null,
    notes: '[Udon · Shichijo-dori, north of Kyoto Stn, curry udon and inari in an old diner] A long-established udon and donburi diner with tatami and table seats, seven minutes from Kyoto Station: the ¥800 curry udon with two inari sushi is what most regulars order, and the dashi is the point. Run by a friendly owner, sometimes alone. Cash only; closed Sunday; daytime only.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: the shop’s own Tabelog text says it has kept its original flavours since its founding in 1924, while Tabelog’s opening-date field gives 1 October 1938. A September 2026 reviewer traces the wider Chikara Mochi name to 1903, a name that spread across Kansai on everyday udon and donburi diners; whether this shop belongs to that line is not stated. Reviewers describe a Showa-era soba-shop interior (March 2026) behind a wooden lattice and noren (September 2026), an owner who greets guests warmly with hojicha (March 2026) and gives friendly service (August 2026), and, at 12:30 one August 2026 day, one person cooking and serving alone. Most customers seemed to be locals, with hardly any tourists (September 2026). One September 2026 diner found the noodles uniform, like frozen ones, but praised the broth.',
      philosophy: 'Keeps its original flavours while adding new dishes (the shop’s Tabelog text).', specialty: 'Curry udon with two inari sushi.',
      anecdotes: [
        { text: 'In March 2026 a diner came in craving katsudon, learned the shop no longer fried anything, and settled happily on meat udon and a Kinugasa-don — then watched regulars order curry udon and came back in April for it.', source: R + 'B524532014/' },
        { text: 'An August 2026 regular, first in the door just after 11, asked for an off-menu chilled sansai soba with an onigiri made to order.', source: R + 'B479255228/' },
        { text: 'A diner who had never managed to catch it open finally came on a quiet weekday in November 2026 for the curry udon set.', source: R + 'B538539551/' },
      ],
      japanese_sources_summary: '食べログ: うどん・そば・丼、下京区夷之町699、京都駅から徒歩7分、月〜土 10:30〜16:00、日曜定休、予約不可、カード不可、32席 (テーブル20席、座敷12席)、禁煙、駐車場なし、近くにコインパーキング、予算〜999円、オープン日1938年10月1日、店の紹介文では創業1924年、Hokkaido 産の無漂白の小麦粉を毎日寝かせたうどん、Rishiri 昆布とかつお節のだし。口コミ (2024年2月〜2026年11月、英語): カレーうどんセット900円 (2024年2月)、肉うどん750円、衣笠丼750円、いなり寿司100円、揚げ物はやめた (2026年3月)、カレーうどん単品650円、京風カレーうどんといなり寿司2個のお得なランチ800円、大盛り150円 (2026年4月)、肉丼、すまし汁、白い漬物 (2026年5月)、天ぷらうどん1,200円 (2026年6月)、きつねうどん (2026年7月)、冷たい山菜そばとおにぎり、ひとりで料理と配膳 (2026年8月)、鶏なんばうどん750円、肉あんかけうどん、11:00〜14:00、土日休みという記載 (2026年9月)、昼だけの営業 (2026年11月)。',
      confidence: 'medium', sources: [TB, R + 'B479255228/', R + 'B524532014/', R + 'B525383946/', R + 'B528865223/', R + 'B529774520/', R + 'B529874640/', R + 'B531673772/', R + 'B532380297/', R + 'B536265761/', R + 'B536821901/', R + 'B538539551/'] },
    cultural_comfort: { level: 'japanese', note: 'Local diner with few tourists (September 2026); cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区夷之町699',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); reviews September and November 2026.' },
    pin_source: `Tabelog ${TB} (34.989362, 135.755905); not pin-checked by the worker (integrator to check); nearest record kyoto_tsunku_shichijo 44.7 m; osw1's kyoto_cafe_bal_cercle_nanajo 68.2 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524532014/', R + 'B525383946/', R + 'B529874640/', R + 'B536821901/'],
    price_note: 'Prices from reviews, March–September 2026; tax included where stated. Under ¥1,000 per person (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Value lunch: Kyoto-style curry udon with two inari sushi', '¥800', 'Lunch', 'no', 'no', 'April–August 2026; large +¥150 (April 2026).', 'curry_udon_inari_set'),
      it('', '', 'Curry udon', '¥650', 'Udon', 'no', 'no', 'April 2026.', 'curry_udon'),
      it('', '', 'Meat udon', '¥750', 'Udon', 'no', 'no', 'March 2026.', 'niku_udon'),
      it('', '', 'Tori-nanba udon', '¥750', 'Udon', 'no', 'no', 'September 2026.', 'tori_nanba_udon'),
      it('', '', 'Kinugasa-don (fried tofu, Kujo onion and egg on rice)', '¥750', 'Donburi', 'ask', 'no', 'March 2026; comes with a tofu soup.', 'kinugasa_don'),
      it('', '', 'Inari sushi (one piece)', '¥100', 'Sides', 'ask', 'ask', 'March and June 2026.', 'inari'),
    ] }, {
    cuisine: 'いなり寿司を並べたケースのある昔ながらのうどん・そば・丼の店 (2026年3月、11月)・Hokkaido 産の無漂白の小麦粉を毎日寝かせたうどん、Rishiri 昆布とかつお節のだし (食べログ)・常連の注文はお得なランチ: 刻んだ油揚げと九条ねぎの京風カレーうどんに黒ごまのいなり寿司2個で税込800円 (2026年4月〜8月)、大盛り150円 (2026年4月)、カレーうどん単品650円 (2026年4月)、カレーうどんセット900円 (2024年2月)・肉うどん750円、豆腐の汁付きの衣笠丼750円、いなり寿司100円 (2026年3月)、冷たい天ぷらうどん1,200円 (2026年6月)、油揚げを刻んだきつねうどん (2026年7月)、鶏なんばうどん750円 (2026年9月)、肉あんかけうどん (2026年9月)、すまし汁と白い漬物付きの肉丼 (2026年5月)、メニューにない冷たい山菜そばと注文後に握るおにぎり (2026年8月)・2026年3月には揚げ物はやめたとのことで、カツ丼はない・1,000円未満 (食べログ)',
    neighborhood: '七条通の北側、京都駅から徒歩7分',
    gf_detail: 'グルテンフリー不可。中心はHokkaido 産の小麦粉のうどん (食べログ)。そば、カレーうどん、天ぷらうどんもある (2024〜2026年の口コミ)。丼といなり寿司はご飯だが、グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。だしはRishiri 昆布とかつお節 (食べログ) で、うどん、カレー、丼に使われる (2026年の口コミ)。',
    notes: '[うどん・七条通、京都駅の北、昔ながらの店でカレーうどんといなり寿司] 京都駅から7分、座敷とテーブル席の老舗のうどんと丼の店。常連の多くが頼むのは800円のカレーうどんといなり寿司2個のセットで、だしがおいしい。気さくな店主が一人で切り盛りすることもある。現金のみ、日曜定休、昼の営業。',
  });
}

// ================================================================ Utr. (Shijo-Omiya, 坊城ビル 2F)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26043037/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_utr_shijo_omiya', name: 'Utr.', category: 'OMNI',
    lat: 35.00494764786556, lng: 135.74717176037067, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi and grilled fish sit alongside tempura, fried fish, spring rolls and dashi omelette (2025–2026 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The menu centres on fish, but there are vegetable dishes such as maitake tempura (July 2025), turnips sautéed in butter and soy sauce (January 2026) and a strawberry-kumquat salad with mascarpone (March 2026); no vegan dish is described.',
    hours_raw: 'Tuesday–Sunday and public holidays 18:00–24:00 (last order 23:30); closed Monday and the day after a public holiday (Tabelog). Reservations accepted, including through Tabelog (Tabelog; October 2025); it filled up one December 2025 night. Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and e-money (transport IC, QUICPay) accepted; no QR (Tabelog). 12 seats: 8 at the counter and a table for 4 (Tabelog). Non-smoking; no parking, coin parking nearby (Tabelog). Opened 5 May 2025 (Tabelog). On the second floor of 坊城ビル, whose ground floor is SOUTH BOUND KYOTO (kyoto_south_bound, address_ja "壬生坊城町55 坊城ビル 1F"); the entrance is a little hard to find (January 2026). 3 min walk from Shijo-Omiya (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Omiya, Mibu-Bojo-cho',
    cuisine: 'Second-floor izakaya with fish-led, inventive small plates and a long sake and craft-beer list (Tabelog; October 2025) · sashimi platters — isaki, ishigaki-dai, kensaki squid and octopus (July 2025); whelk (August 2025); bonito, flounder and whale (January 2026) · maitake tempura with sansho salt, ayu matsukasa-yaki (July 2025); conger-eel tempura, fried eggplant (August 2025) · grilled-mackerel potato salad with mitsuba and a soft egg, Nagasaki-style seared bonito with spicy garlic soy, fried sawara and Kamo eggplant in dashi, eel on a sea-bream-dashi omelette, tsukudani with mascarpone, horse-mackerel fry with house narazuke tartar (October 2025); sanma spring rolls (October 2025); cucumber-and-eel spring rolls, the signature (June 2026) · strawberry-and-kumquat salad with mascarpone ¥750, tea-brewed duck breast ¥1,200, grilled eel and egg ¥1,080 (March 2026); grilled young corn with cheese, pudding (May 2026); canelés from another maker (June 2026) · half glasses of sake and half-size plates for solo diners (October 2025); a Jersey-yoghurt and daiginjo drink (August 2025) · about ¥3,000–4,000 (Tabelog); ¥3,000–8,000 in reviews',
    website: null, gmaps: gm('Utr. 京都 壬生坊城町55 坊城ビル'), menu_url: null,
    notes: '[Izakaya · Shijo-Omiya, fish and inventive small plates upstairs] A twelve-seat second-floor izakaya opened in May 2025 by an owner who used to run a fish shop: sashimi platters, eel-and-cucumber spring rolls, eel on dashi omelette, seasonal tempura, with sake and craft beer by the half glass. Solo-friendly; open to midnight. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: opened on 5 May 2025. An October 2025 diner learned that the owner used to run a fish shop, and a July 2025 diner that the owner had worked at another restaurant before. Reviewers describe a stylish, calm room with soft lighting and a window onto the back alley (October 2025; March 2026), roomy counter seats (October 2025), pop music playing (January 2026), and a friendly owner who chats with solo guests (October 2025; March 2026). A January 2026 diner noted that the place is run by one person, so the sashimi came only after a large beer was finished, and was disappointed that there was no starter and that the beer was not ice-cold.',
      philosophy: null, specialty: 'Fish dishes; eel-and-cucumber spring rolls.',
      anecdotes: [
        { text: 'An October 2025 couple worked through eight dishes; the owner also sliced some yellowtail being tried for a new dish that was not yet on the menu.', source: R + 'B515561830/' },
        { text: 'In June 2026 a diner who meant to stop in briefly for a second round stayed long over the spring rolls and canelés.', source: R + 'B530443016/' },
        { text: 'A March 2026 visitor wanted the salted-milk yoghurt sake, found it sold out, and took the yoghurt one instead.', source: R + 'B531284851/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・ダイニングバー、中京区壬生坊城町55 坊城ビル 2F、四条大宮駅から210m、火〜日・祝日 18:00〜24:00 (L.O.23:30)、月曜・祝日の翌日定休、予約可、カード可 (VISA・Master・JCB・AMEX・Diners・銀聯)、電子マネー可 (交通系IC・QUICPay)、QR 不可、12席 (カウンター8席、4人掛けテーブル1卓)、禁煙、駐車場なし、近くにコインパーキング、日本酒・魚にこだわる、予算3,000〜4,000円、オープン日2025年5月5日。口コミ (2025年7月〜2026年6月、英語): イサキ、イシガキダイ、ケンサキイカ、タコの刺身の盛り合わせ、まいたけの天ぷら、鮎の松笠焼き (2025年7月)、穴子の天ぷら、揚げなす (2025年8月)、店主は元魚屋、さんまの春巻き (2025年10月)、日本酒は半分の量でも、ひとりなら料理も半分の量に (2025年10月)、一人で営業、お通しはない (2026年1月)、いちごと金柑のマスカルポーネサラダ750円、鴨胸肉1,200円、うなぎと卵焼き1,080円 (2026年3月)、チーズをかけたヤングコーンのグリル、プリン (2026年5月)、きゅうりとうなぎの春巻きが看板 (2026年6月)。',
      confidence: 'medium', sources: [TB, R + 'B510195231/', R + 'B511013647/', R + 'B512081367/', R + 'B515561830/', R + 'B515856005/', R + 'B515953925/', R + 'B519570028/', R + 'B520598533/', R + 'B523905274/', R + 'B525094963/', R + 'B530443016/', R + 'B531284851/'] },
    cultural_comfort: { level: 'japanese', note: 'Small Japanese izakaya; the owner chats with solo guests; no English menu mentioned.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区壬生坊城町55 坊城ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); reviews May and June 2026.' },
    pin_source: `Tabelog ${TB} (35.004948, 135.747238), offset ~6 m west because kyoto_south_bound (1F of the same building) sits 2.1 m from that point; now 7.2 m from kyoto_south_bound, 15.0 m from kyr_menya_kanae; not pin-checked by the worker (integrator to check); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531284851/', R + 'B530443016/', R + 'B515953925/'],
    price_note: 'Prices from a March 2026 review; about ¥3,000–4,000 per person (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Strawberry and kumquat salad with mascarpone', '¥750', 'Dishes', 'ask', 'no', 'March 2026; the fruit changes with the season.', 'strawberry_kumquat_salad'),
      it('', '', 'Tea-brewed duck breast', '¥1,200', 'Dishes', 'ask', 'no', 'March 2026.', 'tea_duck'),
      it('', '', 'Grilled eel on dashi omelette', '¥1,080', 'Dishes', 'ask', 'no', 'March 2026; also October 2025.', 'unagi_tamago'),
      it('', '', 'Cucumber and eel spring rolls', '', 'Dishes', 'no', 'no', 'The signature (June 2026).', 'eel_harumaki'),
      it('', '', 'Sashimi platter of the day', '', 'Dishes', 'ask', 'no', 'July 2025 – January 2026.', 'sashimi_platter'),
    ] }, {
    cuisine: '魚を中心にした工夫のある小皿と日本酒、クラフトビールの2階の居酒屋 (食べログ、2025年10月)・刺身の盛り合わせはイサキ、イシガキダイ、ケンサキイカ、タコ (2025年7月)、whelk (2025年8月)、かつお、flounder、鯨 (2026年1月)・山椒塩のまいたけの天ぷら、鮎の松笠焼き (2025年7月)、穴子の天ぷら、揚げなす (2025年8月)・三つ葉と半熟卵の焼きさばのポテトサラダ、ピリ辛のにんにく醤油のNagasaki 風かつおのたたき、鰆と賀茂なすの揚げ物をだしで、鯛だしの卵焼きにうなぎをのせた一品、佃煮とマスカルポーネ、自家製の奈良漬けタルタルのアジフライ (2025年10月)、さんまの春巻き (2025年10月)、看板のきゅうりとうなぎの春巻き (2026年6月)・いちごと金柑のマスカルポーネサラダ750円、鴨胸肉1,200円、うなぎと卵焼き1,080円 (2026年3月)、チーズをかけたチーズをかけたヤングコーンのグリル、プリン (2026年5月)、ほかの店のカヌレ (2026年6月)・日本酒は半分の量でも、ひとりなら料理も半分の量に (2025年10月)、ジャージーヨーグルトと大吟醸のお酒 (2025年8月)・3,000〜4,000円ほど (食べログ)、口コミでは3,000〜8,000円',
    neighborhood: '四条大宮、壬生坊城町',
    gf_detail: '要確認。刺身や焼き魚のほかに、天ぷら、揚げ物、春巻き、卵焼きがある (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。魚が中心だが、まいたけの天ぷら (2025年7月)、かぶのバター醤油炒め (2026年1月)、いちごと金柑のマスカルポーネサラダ (2026年3月) など野菜の料理もある。ヴィーガン向けの料理の説明はない。',
    notes: '[居酒屋・四条大宮、2階で魚と工夫のある小皿] 元魚屋の店主が2025年5月に開いた12席の2階の居酒屋。刺身の盛り合わせ、うなぎときゅうりの春巻き、卵焼きにうなぎをのせた一品、季節の天ぷらに、日本酒とクラフトビールは半分の量でも。一人でも入りやすく、24時まで。月曜定休。',
  });
}

// ================================================================ bar ISLAND (by Kyoto Tower, エムワンビル 2F)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26007571/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['19:00', '02:00']); const WE = day(['19:00', '04:00']);
  put({
    id: 'kyoto_bar_island_kyoto_station', name: 'bar ISLAND', category: 'OMNI',
    lat: 34.987660837074884, lng: 135.75896297902613, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail and whisky bar: over 200 drinks, including fresh-fruit cocktails, Scotch, bourbon, brandy and wine (Tabelog), with snacks such as a ham-and-salami platter (September 2024) and chocolate (December 2021); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The fresh-fruit cocktails and spirits are the point (Tabelog; 2021–2026 reviews); the food mentioned is cured meat and chocolate (2021; 2024); no vegan information.',
    hours_raw: 'Monday–Thursday and Sunday 19:00–2:00; Friday, Saturday and the day before a public holiday 19:00–4:00; open year-round except 31 December and 1 January (Tabelog). Cover charge ¥500 per person (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) accepted (Tabelog). 24 seats: 8 at the counter, two tables for 4 and a semi-private room for 8; private hire for 20–50 (Tabelog). Smoking allowed (Tabelog; September 2024). On the second floor of エムワンビル in front of Kyoto Tower, 1–2 min from the Karasuma Central Exit of Kyoto Stn (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WE, 5: WE, 6: WD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'In front of Kyoto Tower, Karasuma side of Kyoto Stn',
    cuisine: 'Classic bar opened in 2008 with over 200 drinks: original cocktails with seasonal fruit, Scotch, bourbon, brandy, wine (Tabelog) · fresh-fruit special cocktails with fruit pieces, Glenmorangie and Glen Grant (December 2021); a cocktail on the bar’s own gin (February 2023); an original matcha gin and tonic, a Sakurao gin and tonic and a White Lady (April 2023); a kiwi cocktail (May 2024); an original blended highball and a house spice gin and tonic, then a martini (October 2026) · snacks: chocolate (December 2021), a ham-and-salami platter (September 2024) · no soft drinks on the menu in April 2017 · about ¥2,000–3,000 (Tabelog); ¥1,000–10,000 in reviews, plus the ¥500 cover',
    website: null, gmaps: gm('bar ISLAND 京都 東塩小路町577-2 エムワンビル'), menu_url: null,
    notes: '[Bar · in front of Kyoto Tower, fruit cocktails until late] A calm, dimly lit cocktail bar on a second floor by Kyoto Station, open since 2008 and until 2:00 (4:00 on Fridays and Saturdays) — rare near the station. Over 200 drinks, fresh-fruit cocktails and its own gin; ¥500 cover; smoking allowed. Open year-round.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed)', 'Bartender'], origin: null,
      background: 'Per Tabelog and reviewers: opened on 21 April 2008 a short walk from Kyoto Station, as a simple, classic bar for dates and travellers (Tabelog). Reviewers describe a calm room with soft lighting (2024; July 2026), a friendly master (February 2023; September 2024; October 2026) and bartenders who keep a pleasant distance while chatting (May 2024). In October 2026 it was run by the master and a female staff member, both easy to talk to. A January 2020 diner disliked how actively the bartender asked guests for the next order, and an April 2017 diner was disappointed by plastic glasses. A July 2026 visitor found it busy late on a weekday and valued a bar near the station that stays open late.',
      philosophy: null, specialty: 'Fresh-fruit cocktails; house gin.',
      anecdotes: [
        { text: 'In October 2026 a first-time visitor praised the sansho in the house spice gin and tonic and was told, with a smile, that there was no sansho in it; a martini order brought the bar’s stock joke, “just a little martini”.', source: R + 'B538511312/' },
        { text: 'A December 2021 couple made this the third bar of the night: neat Glenmorangie, then a Glen Grant on the bartender’s advice, with two fruit cocktails, for about ¥8,000.', source: R + 'B443672118/' },
        { text: 'After a first and a second party in May 2024, a group searched around Kyoto Station for somewhere still open late, ended the night here, and liked the kiwi cocktail.', source: R + 'B485550937/' },
      ],
      japanese_sources_summary: '食べログ: バー・ダイニングバー、下京区東塩小路町577-2 エムワンビル 2F、京都タワーの西口前のビルの2階、京都駅烏丸中央口から徒歩1分、月〜木・日 19:00〜翌2:00、金・土・祝日の前日 19:00〜翌4:00、年中無休 (12月30日まで、1月2日から営業)、チャージ料お一人様500円、予約可、カード可 (VISA・Master・JCB・AMEX・Diners)、24席 (カウンター8席、4人掛けテーブル2卓、半個室8席)、20〜50名の貸切可、喫煙可、駐車場なし、予算2,000〜3,000円、オープン日2008年4月21日、季節のフルーツのオリジナルカクテル、スコッチ、バーボン、ブランデー、ワインなど200種以上。口コミ (2016年10月〜2026年10月、英語): プラスチックのグラス、ソフトドリンクがない (2017年4月)、バーテンダーが次の注文を勧める (2020年1月)、フルーツのカクテル、Glenmorangie、Glen Grant、チョコレート、ふたりで8,000円ほど (2021年12月)、店のオリジナルのジンのカクテル (2023年2月)、抹茶のジントニック、Sakurao のジントニック、ホワイトレディ (2023年4月)、キウイのカクテル (2024年5月)、ハムとサラミの盛り合わせ、喫煙可 (2024年9月)、平日の深夜でも混んでいた (2026年7月)、マスターと女性のスタッフ、オリジナルブレンドのハイボール、自家製スパイスのジントニック、マティーニ (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B264514985/', R + 'B423785188/', R + 'B443672118/', R + 'B460950364/', R + 'B485550937/', R + 'B493894364/', R + 'B533008358/', R + 'B538511312/'] },
    cultural_comfort: { level: 'japanese', note: 'Japanese bar with a ¥500 cover; staff are chatty; no English menu mentioned.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町577-2 エムワンビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); reviews July and October 2026.' },
    pin_source: `Tabelog ${TB} (34.987661, 135.758897), offset ~6 m east because mp_henkotsu sits 1.8 m from that point; now 6.8 m from mp_henkotsu, 21.7 m from kyoto_nepali_curry_kyoto_tower_annex; not pin-checked by the worker (integrator to check); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B443672118/', R + 'B493894364/', R + 'B538511312/'],
    price_note: 'No drink prices in the sources; ¥500 cover per person, about ¥2,000–3,000 per person (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Seasonal fresh-fruit cocktail', '', 'Cocktails', '', '', 'Tabelog; December 2021, May 2024.', 'fruit_cocktail'),
      it('', '', 'House spice gin and tonic', '', 'Cocktails', '', '', 'October 2026.', 'spice_gin_tonic'),
      it('', '', 'Ham and salami platter', '', 'Snacks', 'ask', 'no', 'September 2024.', 'ham_salami'),
    ] }, {
    cuisine: '2008年開店、200種以上のお酒のクラシックなバー: 季節のフルーツのオリジナルカクテル、スコッチ、バーボン、ブランデー、ワイン (食べログ)・果肉入りのフルーツの特製カクテル、Glenmorangie と Glen Grant (2021年12月)、店のオリジナルのジンのカクテル (2023年2月)、オリジナルの抹茶のジントニック、Sakurao のジントニック、ホワイトレディ (2023年4月)、キウイのカクテル (2024年5月)、オリジナルブレンドのハイボール、自家製スパイスのジントニック、マティーニ (2026年10月)・つまみ: チョコレート (2021年12月)、ハムとサラミの盛り合わせ (2024年9月)・2017年4月にはソフトドリンクがなかった・2,000〜3,000円ほど (食べログ)、口コミでは1,000〜10,000円、ほかにチャージ500円',
    neighborhood: '京都タワーの前、京都駅の烏丸口',
    gf_detail: '要確認。200種以上のお酒のカクテルとウイスキーのバーで、フルーツのカクテル、スコッチ、バーボン、ブランデー、ワイン (食べログ)。つまみはハムとサラミの盛り合わせ (2024年9月) やチョコレート (2021年12月)。グルテンの情報はない。',
    vegan_detail: '要確認。中心はフルーツのカクテルと蒸留酒 (食べログ、2021〜2026年の口コミ)。口コミにある料理はハム、サラミ、チョコレート (2021年、2024年)。ヴィーガンの情報はない。',
    notes: '[バー・京都タワーの前、遅くまでフルーツのカクテル] 京都駅のそば、2008年からの2階の落ち着いた暗めのカクテルバー。2:00まで (金・土は4:00まで) 開いていて、駅の近くでは珍しい。200種以上のお酒、フルーツのカクテル、店のオリジナルのジン。チャージ500円、喫煙可。年中無休。',
  });
}

// ================================================================ Restaurant Passion (Kojinguchi, east of Kawaramachi)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26016637/'; const R = TB + 'dtlrvwlst/';
  const RETTY = 'https://retty.me/restaurant/100001078158/';
  const H = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_restaurant_passion_kojinguchi', name: 'Restaurant Passion (レストラン パッション)', category: 'OMNI',
    lat: 35.02132015537284, lng: 135.77019241014725, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lunch comes with soup and either bread — a baguette and a rice-flour bread (2021–2024 reviews) — or rice (November 2024); mains are fish, pork, beef and mussels (2021–2025 reviews), and fried oysters appear in season (March 2024). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The courses are built around fish and meat (2021–2026 reviews); vegetable soups such as beet, pumpkin and squash are served (2022–2024), but no vegan dish is described.',
    hours_raw: 'Tuesday–Sunday lunch 11:30–15:00 (last order 14:00) and dinner 17:30–22:00 (last order 21:00); closed Monday, open on a Monday public holiday and closed the next day (Tabelog; Retty). Reservations accepted (Tabelog) and advised: full with bookings on a Saturday in October 2022 and a rainy day in November 2026; private hire possible (Tabelog; November 2025). No credit cards (Tabelog) and no e-money (April 2020 review). 22 seats: 2 at the counter and 20 at tables (Tabelog: "10 seats at the table x 2"). Non-smoking; children welcome; no parking, coin parking nearby (Tabelog). Opened 17 September 2010 (Tabelog). 1 min walk east of the Kojinguchi bus stop on Kawaramachi-dori, 5 min from Jingu-Marutamachi Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kojinguchi, just east of Kawaramachi-dori',
    cuisine: 'Neighbourhood French bistro with lunch sets of soup, a main and bread or rice (2014–2024 reviews) · lunch ¥1,080 or ¥980, coffee +¥200 (October 2014); pan-seared fish of three kinds ¥1,450 (September 2024); three hors d’oeuvres of the day ¥1,450 (November 2024) · soups: Shogoin daikon (February 2021), chilled beet (August 2022; September 2024), pumpkin potage (October 2022), butternut squash (November 2024) · pan-fried Yoro pork with mozzarella (February 2021); pork and chorizo (August 2022); Mont Saint-Michel mussels steamed in wine, seared tsumuburi carpaccio with black edamame, roast beef with mushroom sauce (November 2024); fried oysters (March 2024); a bite of white-peach ice cream for booked guests (November 2024) · baguette and rice-flour bread with olive oil (2021–2024) · dinner meat course with three starters, one chosen by the guest (June 2026); a private-hire course of soup, starters, two mains, dessert and coffee with a top-blade steak, ¥5,000 before drinks (November 2025) · take-away lunch ¥1,000, best booked the day before (April 2020) · lunch about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('レストラン パッション 京都 荒神口 上生洲町201'), menu_url: null,
    notes: '[French · Kojinguchi, couple-run bistro lunches near the Kamo River] A homely 22-seat French bistro a minute east of Kawaramachi at Kojinguchi, run by the chef and the chef’s wife since 2010: lunches of soup, a main of three fish or three hors d’oeuvres, and warm rice-flour bread for about ¥1,450, with meat courses at night. Book ahead; cash only. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Chef’s wife, front of house'], origin: null,
      background: 'Per Tabelog and reviewers: opened on 17 September 2010 (Tabelog). A March 2024 diner called it a very homely place run by a couple; in November 2024 the chef and the chef’s wife were the only two in the kitchen, timing each dish well; in November 2026 the chef seemed calm and the chef’s wife friendly. An April 2020 regular of about five years liked the two owners and noted that the shop does little marketing. Reviewers praise the prices and the bread (2014–2026); in September 2024 a returning diner found prices had risen quite a bit, and an August 2022 diner found the cauliflower a little soggy. Retty describes it as a casual French restaurant of quality.',
      philosophy: null, specialty: 'Lunch sets of fish or three hors d’oeuvres.',
      anecdotes: [
        { text: 'A November 2024 diner, sent by a taxi driver known for Kyoto restaurant tips, booked by phone, was shown how to lift the mussel shells with tongs, and was told on leaving that oysters would soon be in.', source: R + 'B494964510/' },
        { text: 'In August 2022 a diner booked at the last minute from Demachiyanagi, walked along the Kamo River in the sun, and called the chorizo perhaps the best ever.', source: R + 'B452532901/' },
        { text: 'A party of ten hired the whole room for an early year-end party in November 2025, at ¥5,000 a head before drinks.', source: R + 'B518027720/' },
      ],
      japanese_sources_summary: '食べログ: フレンチ、上京区荒神口通河原町東入上生洲町201、荒神口バス停から東へ徒歩1分、神宮丸太町駅から徒歩5分、火〜日 11:30〜15:00 (L.O.14:00)、17:30〜22:00 (L.O.21:00)、月曜定休 (祝日は営業し翌日休み)、予約可、カード不可、22席 (カウンター2席、テーブル20席)、貸切可、禁煙、子ども可、駐車場なし、近くにコインパーキング、オープン日2010年9月17日。Retty: Restaurant Passion (レストラン パッション)、荒神口河原町東入上生洲201-3、月曜定休、全席禁煙、上質なカジュアルフレンチ。口コミ (2014年10月〜2026年11月、英語): ランチ1,080円と980円、コーヒー200円 (2014年10月)、テイクアウト1,000円、電子マネー・カード不可、ふたりの店主 (2020年4月)、Shogoin 大根のスープ、Yoro 豚とモッツァレラ、バゲットと米粉のパン (2021年2月)、ビーツのスープ、豚肉とチョリソー (2022年8月)、かぼちゃのポタージュ (2022年10月)、夫婦の店、カキフライ (2024年3月)、鮮魚3種のポワレ1,450円 (2024年9月)、Mont Saint-Michel のムール貝の白ワイン蒸し、ツムブリのカルパッチョ、ローストビーフ、前菜3種のランチ1,450円、厨房はシェフと奥さんのふたり (2024年11月)、10人で貸切、1人5,000円のコース (2025年11月)、夜の肉のコース (2026年6月)、雨の日も予約で満席 (2026年11月)。',
      confidence: 'medium', sources: [TB, RETTY, R + 'B435506811/', R + 'B452532901/', R + 'B455757574/', R + 'B481100704/', R + 'B494964510/', R + 'B51508294/', R + 'B518027720/', R + 'B531068398/', R + 'B539457320/'] },
    cultural_comfort: { level: 'japanese', note: 'Small Japanese neighbourhood bistro; book by phone; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区荒神口通河原町東入上生洲町201',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); reviews June and November 2026.' },
    pin_source: `Tabelog ${TB} (35.021320, 135.770192); not pin-checked by the worker (integrator to check); nearest record kyoto_pouka_cookie_shop_kojinguchi 36.9 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B435506811/', R + 'B494964510/', R + 'B518027720/'],
    price_note: 'Prices from reviews, September 2024 – November 2025; lunch about ¥1,000–2,000 per person (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Lunch: pan-seared fish of three kinds, with soup and bread', '¥1,450', 'Lunch', 'ask', 'no', 'September 2024.', 'lunch_poisson'),
      it('', '', 'Lunch: three hors d’oeuvres of the day, with soup and bread or rice', '¥1,450', 'Lunch', 'ask', 'ask', 'November 2024.', 'lunch_hors_doeuvres'),
      it('', '', 'Private-hire course (soup, starters, two mains, dessert, coffee)', '¥5,000', 'Dinner', 'ask', 'no', 'November 2025; drinks extra.', 'course_5000'),
    ] }, {
    cuisine: 'スープ、メイン、パンかご飯のランチの町のフレンチビストロ (2014〜2024年の口コミ)・ランチ1,080円と980円、コーヒー200円 (2014年10月)、鮮魚3種のポワレ1,450円 (2024年9月)、本日の前菜3種1,450円 (2024年11月)・スープ: Shogoin 大根 (2021年2月)、冷たいビーツ (2022年8月、2024年9月)、かぼちゃのポタージュ (2022年10月)、バターナッツかぼちゃ (2024年11月)・Yoro 豚とモッツァレラのソテー (2021年2月)、豚肉とチョリソー (2022年8月)、Mont Saint-Michel のムール貝の白ワイン蒸し、黒枝豆を添えたツムブリのカルパッチョ、きのこソースのローストビーフ (2024年11月)、カキフライ (2024年3月)、予約客にひと口の白桃のアイス (2024年11月)・バゲットと米粉のパンにオリーブオイル (2021〜2024年)・夜は前菜3種 (1つは選べる) の肉のコース (2026年6月)、スープ、前菜、メイン2品、デザート、コーヒーの貸切のコースで飲み物別5,000円 (2025年11月)・テイクアウトのランチ1,000円、前日の予約がおすすめ (2020年4月)・ランチは1,000〜2,000円ほど (食べログ)',
    neighborhood: '荒神口、河原町通のすぐ東',
    gf_detail: '要確認。ランチにはスープと、バゲットと米粉のパン (2021〜2024年の口コミ) かご飯 (2024年11月) が付く。メインは魚、豚肉、牛肉、ムール貝 (2021〜2025年の口コミ)、季節にはカキフライも (2024年3月)。グルテンの情報はない。',
    vegan_detail: '要確認。コースは魚と肉が中心 (2021〜2026年の口コミ)。ビーツ、かぼちゃなどの野菜のスープはあるが (2022〜2024年)、ヴィーガン向けの料理の説明はない。',
    notes: '[フレンチ・荒神口、鴨川の近くの夫婦の店のランチ] 荒神口、河原町通から東へすぐの22席の家庭的なフレンチビストロ。2010年からシェフと奥さんのふたりで営む。スープ、3種の魚か前菜3種のメイン、温かい米粉のパンのランチが1,450円ほどで、夜は肉のコース。予約がおすすめ、現金のみ。月曜定休。',
  });
}

save();
