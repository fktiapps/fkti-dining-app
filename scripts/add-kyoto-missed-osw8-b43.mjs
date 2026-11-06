// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 43.
//   + グランドバーガー GRAND BURGER (handmade burgers and fish and chips on Teramachi by Imadegawa; core list)
//   + 旬菜 田中でたなか(仮) Shunsai Tanaka de Tanaka (Kari) (set-meal lunch and izakaya by Demachiyanagi; core list)
//   + グリル生研会館 Grill Seiken Kaikan (yoshoku of over 60 years by Shimogamo Shrine; notable list)
//   + アモーレ 木屋町 Amore Kiyamachi (trattoria-pizzeria on Kiyamachi with a Kamo River terrace; notable list)
//   Picked 2026-11-06 after batch 42. `queue.mjs kyoto-missed next core 200`, mod 6 = 1, after earlier skips:
//   グランドバーガー 26016853, 旬菜 田中でたなか(仮) 26039245. `next notable 200`: グリル生研会館 26001763, アモーレ 木屋町
//   26012647. Same-name check, same brand or operator only: グランドバーガー — one; 田中でたなか — one; 生研会館 — one; アモーレ
//   — the crawl also lists アモーレ赤坂 in Tokyo; one web search ("アモーレ 木屋町 系列店 京都 アモーレ") found no stated link
//   or shop list, and the total is two, so it is drafted. None of the four is in data/kyoto.json: grep by name and address
//   (真如堂前町107, 田中下柳町13-6, 下鴨森本町15, 和泉屋町161) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-43');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ グランドバーガー GRAND BURGER
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26016853/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:00', '20:30']); const S = day(['11:00', '18:00']);
  put({
    id: 'kyoto_grand_burger_teramachi', name: 'グランドバーガー (GRAND BURGER)', category: 'OMNI',
    lat: 35.028502, lng: 135.767695, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: burgers on wheat buns, battered fish and chips, fries; pancakes on the menu (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef patties, bacon, cheese, egg and battered fish (2025–2026 reviews).',
    hours_raw: 'Monday, Thursday and Friday 11:00–20:30; Tuesday, Saturday and Sunday 11:00–18:00; closed Wednesday; hours may change (Tabelog). No reservations at lunch, but takeaway orders can be booked (Tabelog). Cards (JCB, AMEX) and e-money; no QR (Tabelog). 20 seats: 8 at the counter and 12 at tables; non-smoking (Tabelog). On the west side of Teramachi-dori, 50 m south of Imadegawa; a paid car park 30 m south; 7 min walk from Demachiyanagi or Imadegawa stations (Tabelog).',
    hours: { 0: L, 1: S, 3: L, 4: L, 5: S, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi south of Imadegawa — 7 min walk from Demachiyanagi Stn',
    cuisine: 'Handmade burger café, also pancakes (Tabelog) · burgers: the GRAND BURGER, bacon cheeseburger, avocado burger, avocado with two cheeses, bacon burger, egg topping; juicy thick patties, lightly seasoned (2025–2026 reviews) · fish and chips with tartare sauce; sets with coleslaw, salad, fries of two cuts and a drink, just under ¥2,000 (June 2025; August 2026) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('GRAND BURGER 京都 寺町今出川'), menu_url: null,
    notes: '[Burgers · Teramachi south of Imadegawa] A small burger café by the Imperial Palace side of Teramachi: thick, juicy handmade patties with bacon, cheese, plenty of avocado or a fried egg, fish and chips with tartare, and hot fries — a set comes to just under ¥2,000. Lightly seasoned, with no signature sauce; busy with takeaway and visitors from abroad. One February 2026 guest found it soggy and pricey. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and counter staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a hamburger, café and pancake shop on Teramachi south of Imadegawa. Reviewers in 2025–2026 describe carefully handmade burgers, many takeaway orders and overseas visitors, and a small room that fills quickly.',
      philosophy: null, specialty: 'Bacon cheeseburger; avocado burger.',
      anecdotes: [
        { text: 'On a holiday morning in June 2025 a guest craving "a carefully handmade burger" rather than fast food came at opening, and watched takeaway orders pile up by early afternoon.', source: R + 'B508893845/' },
        { text: 'An August 2026 burger fan called it one of the best ever, after a bacon cheeseburger with egg and fish and chips.', source: R + 'B533390893/' },
        { text: 'A July 2026 diner found meat juices pooled at the bottom of the bacon burger by the last bite.', source: R + 'B532137413/' },
      ],
      japanese_sources_summary: '食べログ: ハンバーガー・カフェ・パンケーキ、上京区寺町通今出川下ル真如堂前町107 1F、出町柳駅から西へ徒歩7分、今出川駅から東へ徒歩7分、寺町今出川の交差点から南へ50m の西側、月・木・金 11:00〜20:30、火・土・日 11:00〜18:00、水曜定休、ランチの予約不可 (テイクアウトの予約は可)、カード (JCB・AMEX)・電子マネー可、QR 不可、20席 (カウンター8、テーブル12)、禁煙、30m 南に有料駐車場。口コミ (2025年6月〜2026年8月、英語): 手作りのハンバーガー、GRAND BURGER、ベーコンチーズバーガー、アボカドバーガー、アボカドと2種のチーズ、ベーコンバーガー、卵のトッピング、厚くジューシーなパティ、味付けは軽め、フィッシュ&チップスとタルタル、コールスロー、2種のポテト、セットで2,000円弱、テイクアウトと外国人客が多い、べちゃっとして割高との声 (2026年2月)。',
      confidence: 'medium', sources: [TB, R + 'B468002670/', R + 'B508893845/', R + 'B512397547/', R + 'B515733569/', R + 'B518969320/', R + 'B521778840/', R + 'B531385595/', R + 'B531457755/', R + 'B532137413/', R + 'B533390893/'] },
    cultural_comfort: { level: 'english', note: 'Burger café popular with visitors; order at the counter; cards (JCB, AMEX) and e-money.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区寺町通今出川下ル真如堂前町107 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.028502, 135.767695); cross-checked: GSI 京都府京都市上京区真如堂前町107番地 (lot) 32 m; kyoto_epice_demachi is 16 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508893845/', R + 'B521778840/'],
    price_note: 'Set prices from June 2025 and February 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Bacon cheeseburger set (salad, fries, drink)', '¥2,000', 'Burgers', 'no', 'no', 'Just under; June 2025.', 'bacon_cheese_set'),
      it('', '', 'Avocado and cheese burger with a drink', '¥1,800', 'Burgers', 'no', 'no', 'About; February 2026.', 'avocado_cheese'),
      it('', '', 'Fish and chips', '', 'Sides', 'no', 'no', '2025–2026 reviews.', 'fish_chips'),
    ] }, {
    cuisine: '手作りハンバーガーのカフェ、パンケーキも (食べログ)・バーガー: GRAND BURGER、ベーコンチーズバーガー、アボカドバーガー、アボカドと2種のチーズ、ベーコンバーガー、卵のトッピング、厚くジューシーなパティ、味付けは軽め (2025〜2026年の口コミ)・タルタルのフィッシュ&チップス、コールスロー、サラダ、2種のポテト、ドリンクのセットで2,000円弱 (2025年6月、2026年8月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '今出川の南の寺町通。出町柳駅から徒歩7分',
    gf_detail: 'グルテンフリー不可。小麦のバンズのハンバーガー、衣のフィッシュ&チップス、ポテト、パンケーキもある (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛のパティ、ベーコン、チーズ、卵、衣の魚 (2025〜2026年の口コミ)。',
    notes: '[ハンバーガー・今出川の南の寺町] 寺町通の御所側の小さなハンバーガーカフェ。厚くジューシーな手作りのパティにベーコン、チーズ、たっぷりのアボカドや目玉焼き、タルタルのフィッシュ&チップス、揚げたてのポテト、セットで2,000円弱。味付けは軽めで特製ソースはない。テイクアウトと外国人客で混む。2026年2月の客はべちゃっとして割高と感じた。水曜休み。',
  });
}

// ================================================================ 旬菜 田中でたなか(仮)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26039245/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_shunsai_tanaka_de_tanaka', name: '旬菜 田中でたなか(仮) (Shunsai Tanaka de Tanaka (Kari))', category: 'OMNI',
    lat: 35.028671, lng: 135.773285, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, obanzai, tempura, fried fish and somen with soy and dashi; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-led set meals and izakaya plates, beef-tendon stew, dashi throughout (2025–2026 reviews).',
    hours_raw: 'Daily 11:30–14:00 and 17:00–23:00; irregular closing days posted on Instagram (Tabelog). Reservations accepted and advised — walk-ins turned away when full at lunch (Tabelog; July 2026). The owner may run lunch alone, so dishes come in order (April 2026). Rice refills appear to be free (April 2026). Cards; no e-money or QR (Tabelog). 17 seats incl. a counter in a renovated townhouse (Tabelog; August 2026). 3 min walk from Demachiyanagi Stn (Tabelog). Opened 13 March 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tanaka, by Demachiyanagi Stn — 3 min walk',
    cuisine: 'Townhouse izakaya with Japanese set lunches (2025–2026 reviews) · lunch sets ¥1,200–2,000 with five small obanzai and rice: sashimi of fish said to come from Kochi, thick-cut; tempura; kaisendon of kanpachi; fried oyster or fried fugu with sashimi; the ¥2,000 Shunsai set with both tempura and sashimi (2025–2026 reviews) · evening: assorted sashimi, eight obanzai, agedashi tofu, saikyo-yaki of sawara, conger eel over shaved ice with plum, fresh yuba dengaku, beef-tendon stew, somen to finish (July–October 2025) · a line of sake (2025–2026 reviews) · lunch ¥1,000–2,000, dinner ¥3,000–4,000 (Tabelog)',
    website: null, gmaps: gm('旬菜 田中でたなか 出町柳'), menu_url: null,
    notes: '[Japanese set meals and izakaya · by Demachiyanagi Stn] A renovated townhouse near Demachiyanagi that one reviewer likens to a kaiseki kitchen: lunch sets of thick-cut sashimi, tempura or fried fugu with five small obanzai for ¥1,200–2,000, and evenings of obanzai, saikyo-yaki and beef-tendon stew with sake. Popular with locals, so book; when the owner works lunch alone, expect a wait and brisk manners. Irregular closures on Instagram.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), sometimes alone at lunch (April 2026)', 'Male staff in the evening (July 2025)'], origin: null,
      background: 'Per Tabelog: an izakaya opened 13 March 2023 near Demachiyanagi; registered as an official listing by the shop. A July 2025 reviewer calls it the lunch of a Japanese kaiseki restaurant; reviewers in 2026 note fish said to be shipped from Kochi (August 2026) and an owner handling a full room alone at lunch (April 2026).',
      philosophy: null, specialty: 'Sashimi set lunch; obanzai.',
      anecdotes: [
        { text: 'An April 2026 lunch guest found the owner, handling everything alone, curt under the workload.', source: R + 'B526520510/' },
        { text: 'Another April 2026 diner was told dishes would come in order and chose the fried fugu and sashimi set — with firefly squid on the plate.', source: R + 'B526633429/' },
        { text: 'A March 2026 newcomer, drawn by the older regulars filing in, had a ¥1,200 fried-oyster set and noticed the cat-shaped chopstick rests.', source: R + 'B523604272/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、左京区田中下柳町13-6、出町柳駅から徒歩3分、毎日 11:30〜14:00・17:00〜23:00、不定休 (Instagram で告知)、予約可、カード可、電子マネー・QR 不可、17席、カウンター、貸切可、2023年3月13日オープン。口コミ (2025年7月〜2026年8月、英語): 改装した町家、昼の定食1,200〜2,000円 (小鉢5品とご飯)、高知から届くという魚の厚切りのお造り、天ぷら、かんぱちの海鮮丼、牡蠣フライやふぐの唐揚げとお造り、天ぷらとお造りの旬菜定食2,000円、ご飯のおかわりは無料らしい、夜はお造りの盛り合わせ、おばんざい8品、揚げ出し豆腐、鰆の西京焼き、鱧のかき氷と梅肉、生湯葉の田楽、牛すじの煮込み、締めのそうめん、日本酒、店主一人の昼は待つ・愛想がないとの声、猫の箸置き、予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B509658137/', R + 'B510230259/', R + 'B510299882/', R + 'B515786009/', R + 'B516656500/', R + 'B520165021/', R + 'B523604272/', R + 'B526520510/', R + 'B526633429/', R + 'B533461334/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; Japanese set menus; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区田中下柳町13-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through August 2026.' },
    pin_source: `GSI 京都府京都市左京区田中下柳町13番地 (lot) (35.028671, 135.773285), used instead of the Tabelog pin ${TB} (35.028719, 135.773174), which sits 4 m from kyr_kamomachi_ramen (lot 12); the GSI lot is 11 m from the Tabelog pin and 15 m from that record; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520165021/', R + 'B523604272/'],
    price_note: 'Lunch prices from March and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shunsai set (tempura and sashimi, obanzai, rice)', '¥2,000', 'Lunch', 'no', 'no', 'July 2026.', 'shunsai_set'),
      it('', '', 'Daily special set (e.g. fried oyster with sashimi)', '¥1,200', 'Lunch', 'no', 'no', 'March 2026.', 'daily_set'),
    ] }, {
    cuisine: '和の定食の昼と町家の居酒屋 (2025〜2026年の口コミ)・昼の定食1,200〜2,000円、小鉢5品とご飯: 高知から届くという厚切りのお造り、天ぷら、かんぱちの海鮮丼、牡蠣フライやふぐの唐揚げとお造り、天ぷらもお造りも付く2,000円の旬菜定食 (2025〜2026年の口コミ)・夜: お造りの盛り合わせ、おばんざい8品、揚げ出し豆腐、鰆の西京焼き、梅肉を添えた鱧のかき氷仕立て、生湯葉の田楽、牛すじの煮込み、締めのそうめん (2025年7〜10月)・日本酒が並ぶ (2025〜2026年の口コミ)・昼1,000〜2,000円、夜3,000〜4,000円 (食べログ)',
    neighborhood: '出町柳駅のそばの田中。徒歩3分',
    gf_detail: '要確認。醤油とだしのお造り、おばんざい、天ぷら、魚の揚げ物、そうめん。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚中心の定食と居酒屋の皿、牛すじの煮込み、だしを全体に使う (2025〜2026年の口コミ)。',
    notes: '[和の定食と居酒屋・出町柳駅のそば] 出町柳近くの改装した町家。口コミで懐石の店とも評される。昼は厚切りのお造り、天ぷら、ふぐの唐揚げに小鉢5品の定食1,200〜2,000円、夜はおばんざい、西京焼き、牛すじの煮込みと日本酒。地元の人に人気なので予約を。店主が一人で昼を回すときは待つこと、そっけないこともある。不定休は Instagram で。',
  });
}

// ================================================================ グリル生研会館 Grill Seiken Kaikan
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001763/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00']);
  put({
    id: 'kyoto_grill_seiken_kaikan', name: 'グリル生研会館 (Grill Seiken Kaikan)', category: 'OMNI',
    lat: 35.036842, lng: 135.771260, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: demi-glace hamburg, ebi fry in homemade breadcrumbs, crab cream croquette and beef curry (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg, pork sauté, fried shrimp, croquettes and beef curry (2026 reviews).',
    hours_raw: 'Tabelog lists 12:00–14:00 (last order 13:30), closed Thursday, with lunch and dinner both until sold out; hours may change (Tabelog). Reservations accepted — weekday same-day bookings possible; lines at weekend lunch (Tabelog; May and August 2026). The menu can be limited on some days (July 2026). No cards or e-money; QR accepted (Tabelog). 27 seats: seven tables for two and two for four; non-smoking; children welcome (Tabelog; May 2026). 1F of the research-institute building on Shimogamo Morimoto-cho, by Shimogamo Shrine; Tadasu-no-Mori bus stop; paid parking to the south (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimogamo, by Shimogamo Shrine — Tadasu-no-Mori bus stop',
    cuisine: 'Long-established yoshoku of over 60 years (August 2026) · value lunch ¥1,500 of a 140 g hamburg and two ebi fry; special lunch ¥1,900 with hamburg, ebi fry in homemade breadcrumbs and crab cream croquette (May–October 2026) · hamburg steak with a fruity demi-glace; pork sauté; spicy beef curry with slow-cooked beef; potage soup +¥400; potato salad, pickled cucumber and shallots (2026 reviews) · the beef cutlet, once a speciality, is off the menu for now because of beef prices (October 2026) · about ¥1,500–2,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('グリル生研会館 下鴨'), menu_url: null,
    notes: '[Yoshoku · Shimogamo, by the shrine] A yoshoku restaurant of over sixty years in a research-institute building beside Shimogamo Shrine: a hearty special lunch of demi-glace hamburg, ebi fry in homemade crumbs and a crab cream croquette for ¥1,900, a spicy slow-cooked beef curry, and potage on the side. Lines at weekend lunch; the beef cutlet is paused while beef is dear. QR, no cards. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a yoshoku, hamburg and curry restaurant on the ground floor of a research-institute building in Shimogamo. Reviewers in 2026 describe a long-established restaurant of over 60 years (August 2026), lines at weekend lunch, a broad age range of guests, and a beef cutlet withdrawn because of rising beef prices (October 2026).',
      philosophy: null, specialty: 'Special lunch; hamburg steak.',
      anecdotes: [
        { text: 'An October 2026 regular says many guests ask for the beef cutlet, the old speciality, which is off the menu while beef prices are high.', source: R + 'B513393313/' },
        { text: 'A May 2026 guest arriving just after noon on a weekend found six groups waiting.', source: R + 'B528245202/' },
        { text: 'An October 2026 visitor found the croquette and shrimp very good but the hamburg disappointing and the portion modest.', source: R + 'B537487798/' },
      ],
      japanese_sources_summary: '食べログ: 洋食・ハンバーグ・カレー、左京区下鴨森本町15 生産開発科学研究所ビル1F、バス停 Tadasu-no-Mori、出町柳駅から726m、12:00〜14:00 (L.O.13:30)、木曜定休、昼も夜も売り切れまで、予約可、カード・電子マネー不可、QR 可、27席、禁煙、子ども可、南に有料駐車場 (1日600円)。口コミ (2026年5月〜10月、英語): 下鴨神社のそば、60年以上の老舗の洋食、週末の昼は行列、平日は当日予約も、お得なランチ1,500円 (140g のハンバーグと海老フライ2本)、スペシャルランチ1,900円 (ハンバーグ、自家製パン粉の海老フライ、蟹クリームコロッケ)、フルーティーなデミグラス、ポークソテー、辛口の牛肉のカレー、ポタージュ+400円、ポテトサラダ、ピクルスとらっきょう、名物だったビーフカツは牛肉の高騰で休止中、ハンバーグがいまひとつとの声。',
      confidence: 'medium', sources: [TB, R + 'B513393313/', R + 'B528245202/', R + 'B529189745/', R + 'B530466806/', R + 'B531634860/', R + 'B534597134/', R + 'B535133346/', R + 'B535762260/', R + 'B536231408/', R + 'B537487798/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Expect a queue at weekend lunch; book on weekdays; QR, no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区下鴨森本町15 生産開発科学研究所ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.036842, 135.771260); cross-checked: GSI 京都府京都市左京区下鴨森本町15番地 (lot) 27 m; kyoto_la_klassique is 20 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528245202/', R + 'B530466806/'],
    price_note: 'Prices from May–June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Value lunch (140 g hamburg, two ebi fry)', '¥1,500', 'Lunch', 'no', 'no', 'May 2026.', 'value_lunch'),
      it('', '', 'Special lunch (hamburg, ebi fry, crab cream croquette)', '¥1,900', 'Lunch', 'no', 'no', 'June 2026.', 'special_lunch'),
      it('', '', 'Potage soup add-on', '+¥400', 'Lunch', 'ask', 'no', 'October 2026.', 'potage'),
    ] }, {
    cuisine: '60年以上続く老舗の洋食 (2026年8月)・お得なランチ1,500円 (140g のハンバーグと海老フライ2本)、スペシャルランチ1,900円 (ハンバーグ、自家製パン粉の海老フライ、蟹クリームコロッケ) (2026年5〜10月)・フルーティーなデミグラスのハンバーグ、ポークソテー、じっくり煮込んだ牛肉の辛口のカレー、ポタージュ+400円、ポテトサラダ、きゅうりのピクルスとらっきょう (2026年の口コミ)・かつての名物のビーフカツは牛肉の値段のため当面休止 (2026年10月)・1,500〜2,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '下鴨神社のそばの下鴨。バス停 Tadasu-no-Mori',
    gf_detail: 'グルテンフリー不可。デミグラスのハンバーグ、自家製パン粉の海老フライ、蟹クリームコロッケ、牛肉のカレー (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ハンバーグ、ポークソテー、海老フライ、コロッケ、牛肉のカレー (2026年の口コミ)。',
    notes: '[洋食・下鴨、神社のそば] 下鴨神社の横、研究所のビルの1階で60年以上続く洋食店。デミグラスのハンバーグ、自家製パン粉の海老フライ、蟹クリームコロッケのスペシャルランチ1,900円、じっくり煮込んだ辛口のビーフカレー、ポタージュも。週末の昼は行列。ビーフカツは牛肉が高い間は休止中。QR 可、カード不可。木曜休み。',
  });
}

// ================================================================ アモーレ 木屋町 Amore Kiyamachi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26012647/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_amore_kiyamachi', name: 'アモーレ 木屋町 (Amore Kiyamachi)', category: 'OMNI',
    lat: 35.000668, lng: 135.769268, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a trattoria-pizzeria of pizza, pasta and lasagna (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: prosciutto, seafood carpaccio and ajillo, meat lasagna, carbonara and cheese pizzas (2025–2026 reviews).',
    hours_raw: 'Thursday–Tuesday 11:30–15:00 (last order 14:30) and 17:00–22:00 (last order 21:30); closed Wednesday since 18 June 2025 (Tabelog). Reservations accepted, and advised for the terrace; same-day cancellations are charged the full meal price; groups of 10–20 by phone, three days ahead (Tabelog; September 2026). During the Kamogawa summer-deck season, a table charge of ¥350 per person for à la carte dinners (Tabelog original 鴨川納涼床期間中のディナータイム時アラカルトご注文の場合はテーブルチャージとしてお一人様350円(税込)頂戴致します。). 120 seats in four rooms, plus a riverside terrace and a summer noryo-doko deck; non-smoking (Tabelog; 2026 reviews). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). Kiyamachi south of Bukkoji, on the Kamo River; 5 min walk from Kawaramachi or Gion-Shijo stations (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi south of Bukkoji, on the Kamo River — 5 min walk from Kawaramachi Stn',
    cuisine: 'Trattoria-pizzeria and bar on the Kamo River (Tabelog) · pizzas such as prosciutto Margherita, quattro formaggi, pork belly and Kujo negi (September–October 2026) · pastas: thin-noodle Bolognese, karasumi, classic carbonara; meat lasagna (2025–2026 reviews) · shrimp and mushroom ajillo, tomato salad, prosciutto, tuna and white-fish carpaccio (August–October 2026) · an artful dessert plate (September 2026) · wine on the riverside terrace (August 2026) · lunch ¥4,000–5,000, dinner ¥6,000–8,000 by reviews (Tabelog)',
    website: null, gmaps: gm('アモーレ 木屋町'), menu_url: null,
    notes: '[Italian · Kiyamachi on the Kamo River, terrace and summer deck] A big, casual trattoria-pizzeria between Kiyamachi and the Kamo River: pizzas such as quattro formaggi or pork belly with Kujo negi, karasumi pasta, ajillo and carpaccio, enjoyed best on the riverside terrace or the summer noryo-doko deck. Book for the terrace. Some find portions small for the price, and one August 2026 table waited for water and food. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a trattoria-pizzeria, bar and pasta restaurant on Kiyamachi with a Kamogawa summer deck; registered as an official listing by the operator. Reviewers in 2026 describe terrace or indoor seating chosen at booking, a quick fill on holidays, and a regular who works nearby.',
      philosophy: null, specialty: 'Pizza; terrace dining by the Kamo River.',
      anecdotes: [
        { text: 'An August 2026 family wanted riverside dining but thought Japanese food too early for the children, and booked the Italian terrace instead.', source: R + 'B533817247/' },
        { text: 'An August 2026 friend from Kyoto booked the riverside terrace for a visitor who asked to drink by the Kamo River.', source: R + 'B536704830/' },
        { text: 'An August 2026 table was never brought water, though a group seated later was, and the food was slow.', source: R + 'B533653785/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・バル・パスタ、下京区木屋町通仏光寺下ル和泉屋町161、阪急河原町駅・京阪祇園四条駅から徒歩5分、木〜火 11:30〜15:00 (L.O.14:30)・17:00〜22:00 (L.O.21:30)、2025年6月18日から水曜定休、予約可 (当日キャンセルは料金全額、10〜20名は電話、大人数は3日前まで)、鴨川納涼床期間中のディナーのアラカルトはテーブルチャージ1人350円 (税込)、120席 (4つのエリア)、禁煙、カード・電子マネー・QR 可。口コミ (2025年6月〜2026年10月、英語): 鴨川沿い、テラス席と川床、プロシュートのマルゲリータ、クアトロフォルマッジ、豚バラと九条ねぎのピザ、細麺のボロネーゼ、からすみのパスタ、カルボナーラ、ラザニア、海老ときのこのアヒージョ、トマトサラダ、生ハム、まぐろと白身のカルパッチョ、デザートの盛り合わせ、ワイン、量が少なめとの声、水が出てこなかった・料理が遅いとの声 (2026年8月)。',
      confidence: 'medium', sources: [TB, R + 'B488220545/', R + 'B533653785/', R + 'B533817247/', R + 'B535222951/', R + 'B536421221/', R + 'B536557152/', R + 'B536568253/', R + 'B536704830/', R + 'B537097714/', R + 'B537592029/'] },
    cultural_comfort: { level: 'english', note: 'Book the terrace; full charge for same-day cancellation; summer-deck table charge; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町通仏光寺下ル和泉屋町161',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.000668, 135.769268); cross-checked: GSI 京都府京都市下京区和泉屋町161番地 (lot) 34 m; kyoto_kyo_no_musubime is 10 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices read; lunch ¥4,000–5,000, dinner ¥6,000–8,000 by reviews (Tabelog); ¥350 summer-deck charge.', last_checked: TODAY, items: [
      it('', '', 'Pork belly and Kujo negi pizza', '', 'Pizza', 'no', 'no', 'October 2026.', 'butabara_negi'),
      it('', '', 'Shrimp and mushroom ajillo', '', 'Antipasti', 'ask', 'no', 'October 2026.', 'ajillo'),
      it('', '', 'Karasumi pasta', '', 'Pasta', 'no', 'no', 'September 2026.', 'karasumi_pasta'),
    ] }, {
    cuisine: '鴨川沿いのトラットリア・ピッツェリアとバー (食べログ)・ピザ: プロシュートのマルゲリータ、クアトロフォルマッジ、豚バラと九条ねぎ (2026年9〜10月)・パスタ: 細麺のボロネーゼ、からすみ、カルボナーラ、ラザニア (2025〜2026年の口コミ)・海老ときのこのアヒージョ、トマトサラダ、生ハム、まぐろと白身魚のカルパッチョ (2026年8〜10月)・美しいデザートの盛り合わせ (2026年9月)・川沿いのテラスでワイン (2026年8月)・口コミでは昼4,000〜5,000円、夜6,000〜8,000円 (食べログ)',
    neighborhood: '仏光寺の南の木屋町、鴨川沿い。河原町駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。ピザ、パスタ、ラザニアのトラットリア・ピッツェリア (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。生ハム、魚介のカルパッチョやアヒージョ、ミートのラザニア、カルボナーラ、チーズのピザ (2025〜2026年の口コミ)。',
    notes: '[イタリアン・鴨川沿いの木屋町、テラスと夏の川床] 木屋町と鴨川の間の大きなカジュアルなトラットリア・ピッツェリア。クアトロフォルマッジや豚バラと九条ねぎのピザ、からすみのパスタ、アヒージョ、カルパッチョを、川沿いのテラスや夏の納涼床で。テラスは予約を。値段の割に量が少ないと感じる人もいて、2026年8月の客は水が出ず料理も遅かったと書いている。水曜休み。',
  });
}

save();
