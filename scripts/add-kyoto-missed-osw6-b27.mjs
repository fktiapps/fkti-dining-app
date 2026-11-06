// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 27.
//   + 角打ちと麺 ばんさん Kakuuchi to Men Bansan (self-serve sake bar and izakaya with finishing ramen, Gojo) — no ramen block
//   + 祇園白川ラーメン Gion Shirakawa Ramen (stir-fried miso ramen in Furukawa-cho arcade) — no ramen block
//   + ortensia オルテンシア (seafood-led Italian of chef Takayuki Nasu, Kawaramachi Marutamachi)
//   + KOSA (farm-to-table restaurant of Ace Hotel Kyoto, Shinpukan)
//   - skip 26042674 汁なし担々麺 麻婆豆腐 ラアノウミ 烏丸御池店 (same-concept branch of a brand in data)
//   - skip 26029498 近江ちゃんぽん亭 四条烏丸店 (chain)
//   Same-name counts first, per brand or operator (2026-11-05): ばんさん — a concept of the Kyoiro group (京色), whose
//   BANSAN 京色, 祇園 晩餐 京色 and 祇園天ぷら晩餐 are already in data: a sister concept of a small local group, drafted
//   (brief 2026-11-02/05). 祇園白川ラーメン — one (Kyoto Kitashirakawa Ramen Kairikiya is a different brand). ortensia —
//   one in Kyoto (unrelated Ortensia shops elsewhere). KOSA — one; Ace Hotel Kyoto has no hotel-wide record in data
//   (hotel-restaurant rule). ラアノウミ — 汁なし担々麺＆麻婆豆腐 ラアノウミ is in data (kyr_shirunashi_tantanmen_mab).
//   近江ちゃんぽん亭 — Tabelog lists many shops in Shiga, Gifu and beyond: chain.
//   Ramen: neither ばんさん nor 祇園白川ラーメン gets a ramen profile block — the sources do not cover all six dimensions.
//   Taken on 2026-11-05: `next core 200` gave ばんさん 26042188, ラアノウミ (skip), 近江ちゃんぽん亭 (skip) and 祇園白川ラーメン
//   26032348; `next notable 200` gave ortensia 26033104 and KOSA 26039878. None is in data/kyoto.json: grep by name and
//   address (亀屋町172 湯浅会館, 稲荷町北組567-26, 出水町274, 車屋町245-2 新風館 エースホテル京都) found none. Service
//   charges per Tabelog's Japanese original: ばんさん 「300円（税込）」; KOSA 「サービス料10％（メニューはサービス料・税込での
//   金額を表示しております。）」; 祇園白川ラーメン and ortensia none listed.
//   Greg's 2026-11-05 rulings applied; remarks about foreign customers kept as sourced facts.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-27');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042674', 'brand already in data: 汁なし担々麺＆麻婆豆腐 ラアノウミ (kyr_shirunashi_tantanmen_mab) is in data; this is the same-concept 烏丸御池店 (Tabelog search https://tabelog.com/en/rstLst/?sw=ラアノウミ lists both).');
skip('26029498', 'chain: Tabelog (https://tabelog.com/en/rstLst/?sw=近江ちゃんぽん亭) lists 近江ちゃんぽん亭 彦根駅前本店, 本店, ビエラ大津店, 御殿浜店, 多治見店, 土山SA店 and more — 5+.');

// ================================================================ ばんさん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042188/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '24:00']);
  put({
    id: 'kyoto_kakuuchi_bansan', name: '角打ちと麺 ばんさん (Kakuuchi to Men Bansan)', category: 'OMNI',
    lat: 34.996994, lng: 135.762572, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Izakaya plates, tempura, shumai and wheat ramen to finish (2025–26 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the ramen broth is simmered six hours with seafood dashi, and oden and most plates use dashi or meat (Tabelog; 2026 reviews).',
    hours_raw: '15:00–24:00 (last order 23:00), daily, with irregular closures announced on Tabelog (e.g. 3, 10, 11 and 18 November) (Tabelog). Reservations accepted and often needed; a booking is cancelled if you cannot be reached 10 minutes after the time (Tabelog; October 2026). No children (Tabelog). Charge ¥300 with tax (Tabelog, Japanese text: 「300円（税込）」). Drinks are self-serve from the fridge — pour your own sake and leave a numbered tag (2026 reviews). 23 seats: standing bar and counter, private rooms for 4–20 (Tabelog). Cards and IC cards, no QR (Tabelog). In the Yuasa Kaikan, a renovated townhouse north of Gojo; 4 min from Gojo Stn (Tabelog; May 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'North of Gojo, west of Karasuma — 4 min from Gojo Stn',
    cuisine: 'Kakuuchi-style sake bar and izakaya of the Kyoiro restaurant group: help yourself to sake and wine from the fridge, order Kyoto small plates, finish with noodles (Tabelog, shop text; 2026 reviews) · "Yamamen" ramen in a clear broth simmered six hours with seafood dashi — the same ramen as a Gion late-night shop of the group (Tabelog; June 2026) · simmered manganji peppers ¥700, oden platter ¥950, large grilled mushrooms (May 2026) · Kameoka Nanatani duck tataki, Nanatani egg dashimaki, jellyfish sashimi, water kimchi, mizu-nasu with myoga, nishin-nasu, chikuwa tempura, shumai, garlic tomatoes, horse sashimi, potato salad (2026 reviews) · Kyoto red-chicken hot pot course for private rooms (Tabelog) · about ¥3,000–6,500 a head (2026 reviews)',
    website: 'https://www.kyosyoku.com/kakuuti.html', gmaps: gm('角打ちと麺 ばんさん 五条'), menu_url: TB + 'dtlmenu/',
    notes: "[Sake bar & izakaya · Gojo, pour your own and finish with ramen] A Kyoiro-group bar in a renovated townhouse north of Gojo where you take sake from the fridge, pour it yourself, and order Kyoto snacks — Nanatani duck, dashimaki, garlic tomatoes — before the house \"Yamamen\" ramen in a six-hour broth. Lively and affordable; book ahead. No children; ¥300 charge. 15:00–24:00.",
    chef_bio: { chef_name: null, roles: ['Shop of the Kyoiro group; staff unnamed'], origin: null,
      background: 'Per Tabelog (the shop’s own text): a shop created by the representative of the Kyoiro group, a Kyoto restaurant group, serving sake from around Japan and Kyoto seasonal dishes in a townhouse, with noodles in a broth simmered six hours. A June 2026 diner noted the same ramen is served at a Gion shop open only from 23:00 to 2:00.',
      philosophy: 'Per a May 2026 reviewer quoting the shop: "Noodles after drinking that lead to tomorrow."',
      specialty: 'Yamamen ramen; self-serve sake.',
      anecdotes: [
        { text: 'A May 2026 diner found the regular ramen too much for one after shumai, but drank all the broth.', source: R + 'B505172155/' },
        { text: 'A May 2026 diner who came for the noodles found it an izakaya and settled for a light drink.', source: R + 'B528623109/' },
        { text: 'An August 2026 diner found prices a little above typical standing bars but the flavours exceptional.', source: R + 'B533822384/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・鍋・ラーメン、下京区五条上ル亀屋町172 湯浅会館 1F、五条駅から徒歩4分、毎日15:00〜24:00 (L.O. 23:00)、不定休 (11月3・10・11・18日休み)、予約可 (10分連絡がなければキャンセル)、子ども入店不可、チャージ300円 (税込)、23席、個室 4〜20名、カード・交通系IC可、京色グループの代表が手がける店、6時間炊いた清湯と魚介出汁の締めの麺、冷蔵庫から自分で取る全国の地酒。口コミ (2025年4月〜2026年10月、英語): Yamamen、万願寺の煮びたし700円、おでん盛り合わせ950円、Nanatani の鴨のたたき、Nanatani の卵のだし巻き、くらげの刺身、ガーリックトマト、馬刺し、4人で1人約6,500円、立ち飲みより少し高めという声。',
      confidence: 'medium', sources: [TB, 'https://www.kyosyoku.com/kakuuti.html', R + 'B505172155/', R + 'B527623192/', R + 'B528039175/', R + 'B528623109/', R + 'B529399823/', R + 'B529755817/', R + 'B532209453/', R + 'B533822384/', R + 'B533956010/', R + 'B534051978/', R + 'B534813026/', R + 'B538462393/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pour your own drinks from the fridge; book ahead; no children; ¥300 charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区五条上ル亀屋町172 湯浅会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and group site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.996994, 135.762572); GSI resolves 京都府京都市下京区亀屋町172番地 about 630 m west — a different 亀屋町 — so the pin stays on the Tabelog point, which fits 五条上ル and the 4-min walk from Gojo Stn; 6.7 m from kyoto_yamamoto_ryoriten (湯浅会館 2F, same building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528623109/', TB],
    price_note: 'Prices from a May 2026 review; ¥300 charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Yamamen ramen (to finish)', '', 'Noodles', 'no', 'no', '2026 reviews.', 'yamamen'),
      it('', '', 'Simmered manganji peppers', '¥700', 'Small plates', 'ask', 'no', 'May 2026.', 'manganji'),
      it('', '', 'Oden platter', '¥950', 'Small plates', 'ask', 'no', 'May 2026.', 'oden'),
      it('', '', 'Charge (per person)', '¥300', 'Charge', '', '', 'Tabelog.', 'charge'),
    ] }, {
    cuisine: '京色グループの角打ちと居酒屋: 冷蔵庫から日本酒やワインを自分で取り、京都の小皿を頼み、締めは麺 (食べログの店の紹介、2026年の口コミ)・6時間炊いた清湯と魚介出汁の「Yamamen」。グループの祇園の深夜の店と同じラーメン (食べログ、2026年6月)・万願寺の煮びたし700円、おでん盛り合わせ950円、大きな焼き椎茸 (2026年5月)・Kameoka の Nanatani の鴨のたたき、Nanatani の卵のだし巻き、くらげの刺身、水キムチ、水茄子と茗荷、にしん茄子、ちくわ天、焼売、ガーリックトマト、馬刺し、ポテトサラダ (2026年の口コミ)・個室は京都の赤鶏の鍋のコース (食べログ)・1人約3,000〜6,500円 (2026年の口コミ)',
    neighborhood: '五条の北、烏丸の西。五条駅から徒歩4分',
    gf_detail: '要確認。居酒屋の小皿、天ぷら、焼売、締めの小麦のラーメン (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。ラーメンのスープは6時間炊いて魚介出汁を合わせ、おでんなど多くの皿に出汁や肉を使う (食べログ、2026年の口コミ)。',
    notes: '[角打ち・居酒屋・五条、自分で注いで締めはラーメン] 五条の北の改装した町家の、京色グループの店。冷蔵庫から日本酒を取って自分で注ぎ、Nanatani の鴨、だし巻き、ガーリックトマトなど京都のつまみを。締めは6時間炊いたスープの名物「Yamamen」。にぎやかで手頃、予約を。子どもは入店不可、チャージ300円。15時〜24時。',
  });
}

// ================================================================ 祇園白川ラーメン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26032348/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '21:30']);
  put({
    id: 'kyoto_gion_shirakawa_ramen', name: '祇園白川ラーメン (Gion Shirakawa Ramen)', category: 'OMNI',
    lat: 35.007647, lng: 135.778579, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles, and fried karaage and croquettes on the sets (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork chashu and a bonito-accented miso broth (2025–26 reviews).',
    hours_raw: 'Tue–Sun 11:00–15:00 and 17:00–21:30; closed Monday (Tabelog). A December 2025 reviewer listed Mon–Fri 11:30–14:00 and 18:00–22:00, closed weekends — check before going; the official site posts hour changes. No reservations; buy a ticket at the machine; short waits at busy times (Tabelog; January and May 2026). No cards; e-money and Rakuten Pay (Tabelog). 13 seats: 9 at the counter and a table for 4 (Tabelog; April 2026). Non-smoking (Tabelog). At the south end of the Furukawa-cho arcade, near Ipponbashi on the Shirakawa; 5 min from Higashiyama Stn (Tabelog; 2025–26 reviews). Opened 1 May 2021 (Tabelog; official site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Furukawa-cho arcade, Higashiyama — 5 min from Higashiyama Stn',
    cuisine: 'Ramen of stir-fried ("aori") miso (official site) · miso ramen with a bonito accent, ginger, watercress and sautéed onions, caramelised chashu; spicy miso ramen (2025–26 reviews) · shoyu chuka soba ¥950; extra chashu (3 slices) +¥300; set C of rice and karaage +¥400; lunch set with rice and two croquettes ¥1,200 (June 2025, April–May 2026) · chashu and karaage rice bowls; a lemon-peel sorbet after the meal (April 2025, October 2026) · featured in 究極のラーメン 2020 and 2022 関西版 (official site)',
    website: 'https://gion-shirakawa.com/', gmaps: gm('祇園白川ラーメン 古川町'), menu_url: null,
    notes: "[Ramen · Higashiyama, stir-fried miso in an old arcade] A thirteen-seat ramen shop at the far end of the Furukawa-cho arcade near the Shirakawa, known for miso ramen made with stir-fried miso — rich, ginger-bright, with watercress and caramelised chashu — and a lighter shoyu chuka soba from ¥950. Buy a ticket at the machine. No cards. Closed Monday; check hours, which have changed.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Per the official site: a ramen shop of "authentic aori (stir-fried) miso" that opened on 1 May (2021, Tabelog) on the south side of the Furukawa-cho arcade, and has appeared in 究極のラーメン 2020 and 2022 (関西版) and a LEAF guide to Kyoto and Shiga ramen. A January 2026 diner was greeted by the owner during a wait.',
      philosophy: null, specialty: 'Miso ramen.',
      anecdotes: [
        { text: 'A June 2025 diner found the extra chashu a bit dry and tough but the karaage good, and most guests were tourists from abroad.', source: R + 'B508696124/' },
        { text: 'A May 2026 diner found the shoyu ramen smooth but would have liked more dashi or soy punch.', source: R + 'B529178454/' },
        { text: 'An April 2025 diner touring with friends from abroad was struck by the warm welcome while waiting.', source: R + 'B505592612/' },
      ],
      japanese_sources_summary: '公式サイト (gion-shirakawa.com): 東山区古川町商店街南側の「本格煽り味噌」のラーメン店、5月1日開店、雑誌「究極のラーメン2020 関西版」「究極のラーメン2022 関西版」、LEAF 別冊「京都 滋賀旨いラーメン」に掲載、営業時間変更のお知らせあり。食べログ: ラーメン、東山区稲荷町北組567-26、東山駅から徒歩5分、火〜日 11:00〜15:00・17:00〜21:30、月曜休み、予約不可、カード不可、電子マネー・楽天ペイ可、13席、禁煙、2021年5月1日オープン。口コミ (2025年4月〜2026年11月、英語): 味噌ラーメン、辛味噌、中華そば950円、チャーシュー追加300円、C セット (ご飯と唐揚げ) +400円、昼のセット1,200円、食券制、海外の客が多い、チャーシューが硬いという声。',
      confidence: 'medium', sources: [TB, 'https://gion-shirakawa.com/', R + 'B505592612/', R + 'B508696124/', R + 'B508700666/', R + 'B514269880/', R + 'B518647493/', R + 'B518926680/', R + 'B525608342/', R + 'B527355346/', R + 'B529178454/', R + 'B537208479/', R + 'B538219921/', R + 'B538490459/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Buy a ticket at the machine; no cards (e-money and Rakuten Pay); check hours.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区稲荷町北組567-26',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.007647, 135.778579); cross-checked: GSI 京都府京都市東山区稲荷町北組567番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B508696124/', R + 'B529178454/'],
    price_note: 'Prices from June 2025–May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba (shoyu)', '¥950', 'Ramen', 'no', 'no', 'June 2025, April 2026.', 'chuka_soba'),
      it('', '', 'Miso ramen', 'about ¥1,000', 'Ramen', 'no', 'no', 'June 2025.', 'miso_ramen'),
      it('', '', 'Chuka soba lunch set (rice and two croquettes)', '¥1,200', 'Sets', 'no', 'no', 'May 2026.', 'lunch_set'),
      it('', '', 'Set C: rice and karaage', '+¥400', 'Sets', 'no', 'no', 'June 2025.', 'set_c'),
    ] }, {
    cuisine: '煽り味噌のラーメン (公式サイト)・鰹の効いた味噌ラーメン、生姜、クレソン、炒め玉ねぎ、香ばしいチャーシュー、辛味噌ラーメン (2025〜2026年の口コミ)・醤油の中華そば950円、チャーシュー追加 (3枚) +300円、ご飯と唐揚げの C セット+400円、ご飯とコロッケ2個の昼のセット1,200円 (2025年6月、2026年4〜5月)・チャーシュー丼、唐揚げ丼、食後のレモンピールのシャーベット (2025年4月、2026年10月)・「究極のラーメン2020」「2022 関西版」に掲載 (公式サイト)',
    neighborhood: '東山、古川町商店街。東山駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。小麦の麺と、セットの唐揚げやコロッケ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚のチャーシューと鰹の効いた味噌スープ (2025〜2026年の口コミ)。',
    notes: '[ラーメン・東山、古い商店街の煽り味噌] 白川近くの古川町商店街の奥の13席のラーメン店。煽り味噌の味噌ラーメンが名物で、濃厚で生姜が効き、クレソンと香ばしいチャーシュー。あっさりした醤油の中華そばは950円から。食券制、カード不可。月曜休み、営業時間は変わることがあるので確認を。',
  });
}

// ================================================================ ortensia
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26033104/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_ortensia_marutamachi', name: 'ortensia (オルテンシア)', category: 'MOM_AND_POP',
    lat: 35.018843, lng: 135.76947, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses centre on pasta, gratins and fried seafood (2025–26 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood-led Italian with cheese and house-cured pork (2024–26 reviews).',
    hours_raw: 'Lunch 12:00–15:00 and dinner 18:00–21:00; closed Wednesday (Tabelog). Reservations accepted; lunch is cash only (Tabelog). Lunch course about ¥5,300 with a drink (December 2025); chef’s dinner course of 5–6 dishes with a drink ¥8,300 (May 2026); à la carte also offered (January 2026). 14 seats; private hire; non-smoking; cards (JCB, AMEX) at dinner (Tabelog). On Kawaramachi-dori north of Marutamachi; 5 min from Jingu-Marutamachi Stn (Tabelog). Opened October 2019 per Tabelog (a review says November 2019).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi Marutamachi — 5 min from Jingu-Marutamachi Stn',
    cuisine: 'Seafood-led, seasonal Italian of chef Takayuki Nasu (Tabelog review) · lunch course ¥5,300: two appetizers, pasta, fish, dessert, coffee and a drink (December 2025) · dinner course ¥8,300: stracciatella with sweet shrimp, white asparagus with prosciutto and gorgonzola, clams, scallops, wakasagi and firefly squid in parsley sauce, pasta with tuna and wild asparagus (May 2026) · cold spaghettini with sea urchin, hamo wrapped in prosciutto, acqua pazza of isaki or itoyori, Bolognese, Amatriciana, hamo and caper tomato spaghetti, porcini and scallop butter spaghetti (2025–26 reviews) · house-cured pork ham and sausages, buffalo mozzarella, beef cheek braised in red wine (December 2024) · panna cotta with peach sorbet, blancmange (2025–26 reviews)',
    website: 'https://www.ortensia-kyoto.com', gmaps: gm('ortensia オルテンシア 京都 丸太町'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian · Kawaramachi Marutamachi, seafood and pasta in a small room] A stylish fourteen-seat Italian north of Marutamachi where chef Takayuki Nasu cooks generous seasonal plates — sea urchin cold pasta, hamo in prosciutto, acqua pazza, house-cured ham. Lunch courses about ¥5,300 (cash only), dinner ¥8,300 with a drink. Reviews mention a Michelin Bib Gourmand (2021–23). Service can be slow when one person runs lunch. Closed Wednesday.",
    chef_bio: { chef_name: 'Takayuki Nasu', roles: ['Chef (named in a May 2025 Tabelog review)'], origin: null,
      background: 'A May 2025 Tabelog review names the chef as Takayuki Nasu; a March 2023 review notes a Michelin Bib Gourmand for 2021–2023 and an opening in November 2019 (Tabelog gives 1 October 2019). Reviewers saw one person running lunch alone (December 2025, September 2026).',
      philosophy: null, specialty: 'Seafood pasta; acqua pazza.',
      anecdotes: [
        { text: 'A December 2025 birthday-lunch diner found two rich appetizers in a row and the flavours strong throughout — better suited to an evening with wine.', source: R + 'B520075987/' },
        { text: 'A January 2026 diner’s only gripe was that espresso was the only post-meal drink.', source: R + 'B521833647/' },
        { text: 'A July 2026 regular found the sweet shrimp and buffalo mozzarella sold out but loved the sea-urchin cold pasta.', source: R + 'B530756797/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・パスタ・海鮮、上京区河原町丸太町上ル出水町274、神宮丸太町駅から徒歩約5分、昼 12:00〜15:00・夜 18:00〜21:00、水曜休み、予約可、昼は現金のみ、14席、貸切可、禁煙、カード (JCB・AMEX)、2019年10月1日オープン。口コミ (2023年3月〜2026年9月、英語): シェフ Takayuki Nasu、ミシュランのビブグルマン 2021〜2023、昼のコース5,300円、夜のおまかせ8,300円 (1ドリンク付き)、雲丹の冷製パスタ、鱧の生ハム巻き、アクアパッツァ、自家製のハムとソーセージ、昼は一人で回していて時間がかかるという声、味が全体に濃いという声。',
      confidence: 'medium', sources: [TB, 'https://www.ortensia-kyoto.com', R + 'B474253408/', R + 'B519854754/', R + 'B520075987/', R + 'B520826973/', R + 'B520864871/', R + 'B521833647/', R + 'B522664364/', R + 'B523145071/', R + 'B529482150/', R + 'B530756797/', R + 'B533785246/', R + 'B536066797/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course; cash only at lunch; JCB or AMEX at dinner.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区河原町丸太町上ル出水町274',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.018843, 135.769470); cross-checked: GSI 京都府京都市上京区出水町274番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B519854754/', R + 'B520826973/'],
    price_note: 'Course prices from December 2025 and May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (two appetizers, pasta, fish, dessert, coffee, drink)', '¥5,300', 'Lunch', 'ask', 'no', 'December 2025; cash only at lunch.', 'lunch_course'),
      it('', '', 'Chef’s dinner course (5–6 dishes, one drink)', '¥8,300', 'Dinner', 'ask', 'no', 'May 2026.', 'dinner_course'),
    ] }, {
    cuisine: 'シェフ Takayuki Nasu の、魚介中心の季節のイタリアン (食べログの口コミ)・昼のコース5,300円: 前菜2品、パスタ、魚、デザート、コーヒー、ドリンク (2025年12月)・夜のコース8,300円: stracciatella と甘海老、白アスパラと生ハムとゴルゴンゾーラ、あさり・帆立・わかさぎ・ホタルイカのパセリソース、まぐろと山アスパラのパスタ (2026年5月)・雲丹の冷製スパゲッティーニ、鱧の生ハム巻き、イサキやイトヨリのアクアパッツァ、ボロネーゼ、アマトリチャーナ、鱧とケッパーのトマトのスパゲッティ、ポルチーニと帆立のバターのスパゲッティ (2025〜2026年の口コミ)・自家製の豚のハムとソーセージ、水牛のモッツァレラ、牛ほほ肉の赤ワイン煮 (2024年12月)・パンナコッタと桃のソルベ、ブランマンジェ (2025〜2026年の口コミ)',
    neighborhood: '河原町丸太町。神宮丸太町駅から徒歩5分',
    gf_detail: '要確認。パスタ、グラタン、魚介のフリットが中心のコース (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。チーズや自家製の豚肉加工品も使う魚介中心のイタリアン (2024〜2026年の口コミ)。',
    notes: '[イタリアン・河原町丸太町、小さな店の魚介とパスタ] 丸太町の北の、14席のおしゃれなイタリアン。シェフ Takayuki Nasu が、雲丹の冷製パスタ、鱧の生ハム巻き、アクアパッツァ、自家製ハムなど季節の皿をたっぷりと。昼のコースは約5,300円 (現金のみ)、夜は飲み物付きで8,300円。ミシュランのビブグルマン (2021〜2023年) という口コミも。昼は一人で回すので時間がかかることも。水曜休み。',
  });
}

// ================================================================ KOSA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039878/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '11:00'], ['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_kosa_ace_hotel', name: 'KOSA (Kōsa, Ace Hotel Kyoto)', category: 'OMNI',
    lat: 35.00973, lng: 135.76012, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask — the restaurant asks guests with allergies or dietary restrictions to tell it in advance (Tabelog). Breakfast toasts, focaccia, burgers and set meals with rice (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask in advance (Tabelog). A vegetable set meal, a vegetable clay-pot steam and a salad lunch of over ten vegetables are on the menu, but most dishes have meat, fish or dairy (Tabelog; April–October 2026).',
    hours_raw: 'Daily: breakfast 7:00–11:00 (last order 10:30), lunch 11:30–15:00 (last order 14:30), dinner 17:30–22:00 (last order 21:30) (Tabelog). Reservations accepted; seat requests may not be met; tell the restaurant of allergies or dietary restrictions in advance (Tabelog). Menu prices include a 10% service charge and tax (Tabelog, Japanese text: 「サービス料10％（メニューはサービス料・税込での金額を表示しております。）」). Water: filtered or bottled; one diner found the water charged and expensive (March–April 2026). 118 seats with a bar counter, private room ¥22,000 for 2–12, and a garden terrace (Tabelog; 2026 reviews). Cards, no e-money or QR (Tabelog). Third floor of Ace Hotel Kyoto in the Shinpukan; 1 min from Karasuma Oike Stn exit 5 (Tabelog; official site). Opened 10 August 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma Oike, in Ace Hotel Kyoto — 1 min from Karasuma Oike Stn',
    cuisine: 'Seasonal farm-to-table dining overlooking a rooftop garden (official site) · breakfast of about six choices — eggs Benedict, avocado toast, Japanese and American breakfasts (April–October 2026) · lunch "teishoku" one-plate sets of fish (grilled sea bream), vegetables or meat with soup and kamameshi (March–April 2026); KOSA salad lunch of over ten vegetables ¥3,000, ¥3,800 with a drink, ¥3,500 with a topping such as roast beef (Tabelog; October 2026); wagyu burger ¥3,800 (June 2026) · dinner steak course with Japanese strip loin and hojicha cheesecake ¥8,000 (June 2026) · cocktails and mocktails (2026 reviews)',
    website: 'https://www.kosakyoto.com/about/', gmaps: gm('KOSA エースホテル京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Hotel restaurant · Karasuma Oike, farm-to-table in the Ace Hotel] The third-floor restaurant of Ace Hotel Kyoto, a big, sunlit room opening onto a garden terrace. Breakfast from 7:00 (eggs Benedict, avocado toast), one-plate fish or vegetable teishoku and a ten-vegetable salad lunch at about ¥3,000–3,800, and steak courses at night. Prices include service but run high, and water isn't free. Open daily.",
    chef_bio: { chef_name: null, roles: ['Hotel restaurant; chef unnamed'], origin: null,
      background: 'Per the official site: "Kōsa: Seasonal Farm-to-Table Dining in the heart of Kyoto", overlooking a rooftop garden, on the third floor of Ace Hotel Kyoto. Per Tabelog (the shop’s own text): valuing farm-to-table and fresh ingredients; opened 10 August 2023. An April 2026 diner had expected an American chef’s steak-and-burger menu.',
      philosophy: 'Per Tabelog (the shop’s own text): serving dishes of fresh ingredients, valuing farm-to-table.',
      specialty: 'Farm-to-table set meals; salad lunch.',
      anecdotes: [
        { text: 'A March 2026 diner enjoyed the teishoku and kamameshi but found the water charged and quite expensive.', source: R + 'B523948326/' },
        { text: 'A May 2026 business diner found the steak course’s five sauces too many and the rice portion small.', source: R + 'B528572245/' },
        { text: 'An October 2026 breakfast guest who could not eat smoked salmon was given bacon instead.', source: R + 'B538396944/' },
        { text: 'A June 2026 breakfast guest found the eggs Benedict perfect but the side vegetables a little wilted.', source: R + 'B529761939/' },
      ],
      japanese_sources_summary: '公式サイト (kosakyoto.com): Kōsa、京都の中心の季節のファーム・トゥ・テーブル、屋上庭園を望む、エースホテル京都3F、車屋町245-2。食べログ: 創作料理・オーガニック・カフェ、中京区車屋町245-2 新風館 エースホテル京都 3F、烏丸御池駅5番出口から徒歩1分、毎日 朝 7:00〜11:00 (L.O. 10:30)・昼 11:30〜15:00 (L.O. 14:30)・夜 17:30〜22:00 (L.O. 21:30)、予約可、アレルギーや食事制限は事前に、サービス料10% (メニューはサービス料・税込で表示)、118席、個室料22,000円、カード可、2023年8月10日オープン、KOSA サラダランチ3,000円 (1ドリンク付き3,800円)。口コミ (2026年3〜10月、英語): 朝食6種、エッグベネディクト、魚や野菜の定食と釜飯、和牛バーガー3,800円、ステーキのコース8,000円、庭のテラス、水が有料で高いという声。',
      confidence: 'medium', sources: [TB, 'https://www.kosakyoto.com/about/', R + 'B523948326/', R + 'B525594692/', R + 'B525669286/', R + 'B525914023/', R + 'B528572245/', R + 'B529761939/', R + 'B530412593/', R + 'B530641435/', R + 'B534047852/', R + 'B535448548/', R + 'B538388270/', R + 'B538396944/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant; prices include 10% service; give allergies in advance.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Guests with food allergies or dietary restrictions are asked to tell the restaurant in advance; a breakfast guest’s smoked salmon was swapped for bacon on request (October 2026).', source: TB, verified: TODAY }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区車屋町245-2 新風館 エースホテル京都 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009730, 135.760120); cross-checked: GSI 京都府京都市中京区車屋町245番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B530412593/', R + 'B530641435/'],
    price_note: 'Salad lunch prices from the Tabelog set-menu page; others from June and October 2026 reviews; service and tax included.', last_checked: TODAY, items: [
      it('', '', 'KOSA salad lunch', '¥3,000', 'Lunch', 'ask', 'ask', 'Tabelog; ¥3,800 with a drink.', 'salad_lunch'),
      it('', '', 'Wagyu burger', '¥3,800', 'Lunch', 'no', 'no', 'June 2026.', 'wagyu_burger'),
      it('', '', 'Steak course (strip loin, hojicha cheesecake)', '¥8,000', 'Dinner', 'ask', 'no', 'June 2026.', 'steak_course'),
    ] }, {
    cuisine: '屋上庭園を望む季節のファーム・トゥ・テーブル (公式サイト)・朝食は約6種から: エッグベネディクト、アボカドトースト、和朝食とアメリカン (2026年4〜10月)・昼はワンプレートの「TEISHOKU」: 鯛の塩焼きなどの魚、野菜、肉にスープと釜飯 (2026年3〜4月)。10種以上の野菜の KOSA サラダランチ3,000円、ドリンク付き3,800円、ローストビーフなどのトッピングで3,500円 (食べログ、2026年10月)、和牛バーガー3,800円 (2026年6月)・夜のステーキのコース (国産サーロイン、ほうじ茶のチーズケーキ) 8,000円 (2026年6月)・カクテルとモクテル (2026年の口コミ)',
    neighborhood: '烏丸御池、エースホテル京都の中。烏丸御池駅から徒歩1分',
    gf_detail: '要確認。アレルギーや食事制限は事前に伝えること (食べログ)。朝食のトースト、フォカッチャ、バーガー、ご飯の定食など (2026年の口コミ)。',
    vegan_detail: '事前に確認を (食べログ)。野菜の定食、野菜のせいろ蒸し、10種以上の野菜のサラダランチはあるが、多くの料理に肉、魚、乳製品が入る (食べログ、2026年4〜10月)。',
    notes: '[ホテルのレストラン・烏丸御池、エースホテルのファーム・トゥ・テーブル] エースホテル京都の3階の、庭のテラスに開いた明るく大きなダイニング。朝7時からの朝食 (エッグベネディクト、アボカドトースト)、昼は魚や野菜のワンプレートの定食や10種の野菜のサラダランチ (約3,000〜3,800円)、夜はステーキのコース。サービス料込みだが値段は高めで、水は有料という声も。年中無休。',
  });
}

save();
