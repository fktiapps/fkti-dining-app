// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 49.
// Core lane still has shops, so all four come from core, in queue order:
//   + 京都氷屋 万年雪 Kyoto Koriya Mannen Yuki (year-round kakigori by Umekoji Park; since 2025)                  [core]
//   + かもドーナツ 堀川商店街店 Kamo Donut (old-style donut shop in the Horikawa shopping street; 本店 Kitaoji)    [core]
//   + 炭火焼鳥issiki Sumibi Yakitori issiki (11-seat charcoal yakitori near Nijo Stn; since 2023)               [core]
//   - ミスタードーナツ 出町ショップ — chain (Mister Donut)                                                      [core]
//   + crème plus クレーム プリュス (small pâtisserie on Senbon known for custard and crème brûlée; since 2015)   [core]
//   Same-name counts first: 万年雪 0 (one shop; no operator found); かもドーナツ 0 — a December 2025 review puts the
//   本店 in Kitaoji, so 2 shops, none in data, drafted one; issiki 0 (no group found); crème plus 0 (クレーム デ ラ
//   クレーム in data is unrelated).
//   None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: 万年雪 「なし」; crème plus 「なし」; かもドーナツ and
//   issiki have no section.
//   Pins: かもドーナツ and crème plus — GSI matched only a town (かもドーナツ's to a different 桝屋町), so
//   loc_precise false.
//   Ruling applied: single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-49');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26006393', 'chain: ミスタードーナツ (Mister Donut, Duskin) — national chain');

// ================================================================ 京都氷屋 万年雪
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26042939/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:00', '18:00']);
  put({
    id: 'kyoto_koriya_mannen_yuki', name: '京都氷屋 万年雪 (Kyoto Koriya Mannen Yuki)', category: 'OMNI',
    lat: 34.988293, lng: 135.749064, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Shaved ice with fruit syrups, but many bowls are built with pie, tart, cake or daifuku elements (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: house condensed milk, custard, cream and mascarpone (Tabelog; 2026 reviews).',
    hours_raw: 'Mon, Tue and Thu–Sun 12:00–18:00; closed Wednesday; closing days may vary (Tabelog). Bookings through Air Reserve (airrsv.net/mannenyuki) (Tabelog); a September 2026 visitor found it easy to book. Order and pay at the entrance; cash or PayPay/Alipay, no cards or e-money (Tabelog; September 2026 review). Regular or mini size (about ¥100 less) (September–October 2026 reviews). Free self-serve hojicha at the back to warm up (September 2026 review). 20 seats in a long, narrow room; non-smoking; strollers welcome; free Wi-Fi (Tabelog; September 2026 review). 1 min from the Kyoto Aquarium-mae bus stop, 5 min from Umekoji-Kyotonishi Stn (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Umekoji Park / Kyoto Aquarium — 5 min from Umekoji-Kyotonishi Stn',
    cuisine: 'Year-round kakigori of pure ice frozen over three days, with homemade fruit syrups, condensed milk and white syrup (Tabelog): strawberry custard pie ¥1,750 (the most popular), matcha custard daifuku ¥1,750, freshly squeezed kiwi with almond jelly ¥1,600, kiwi milk, strawberry shortcake, strawberry tart, strawberry mascarpone; limited seasonal-fruit bowls; very large portions (2026 reviews)',
    website: 'https://airrsv.net/mannenyuki/calendar', gmaps: gm('京都氷屋 万年雪'), menu_url: null,
    notes: "[Kakigori · Umekoji Park] A shaved-ice shop open all year, a minute from the Kyoto Aquarium bus stop: fluffy, very large bowls of three-day pure ice with fresh-fruit syrups — strawberry custard pie, kiwi with almond jelly, matcha custard daifuku — about ¥1,600–1,750 (mini sizes cheaper). Book online; no cards. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 15 April 2025 (Tabelog).',
      philosophy: 'Pure ice shaved fluffy, enhanced by homemade syrups that concentrate fresh fruit (Tabelog).',
      specialty: 'Strawberry custard pie kakigori.',
      anecdotes: [
        { text: 'In September 2026 a friend failed to book a famously hard-to-reserve kakigori shop, so the pair came here instead and shared a strawberry custard pie and a matcha custard daifuku.', source: R + 'B535490289/' },
        { text: 'On a rainy 26 September 2026 a visitor was offered mini sizes but chose regular, and was surprised how big they were.', source: R + 'B536313324/' },
        { text: 'An August 2026 visitor loved the kiwi ice but shivered in the strong air conditioning while eating it.', source: R + 'B534547132/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 京都氷屋 万年雪、かき氷・カフェ、下京区上之町429-1、京都駅から徒歩15分、梅小路京都西駅から徒歩5分、京都水族館前バス停から徒歩1分、月・火・木〜日 12:00〜18:00、水曜休み、予約可 (Air リザーブ)、カード・電子マネー不可、QR 可 (PayPay、Alipay)、サービス料なし、20席、禁煙、Wi-Fi、2025年4月15日オープン、3日かけて作る純氷、旬の果物の自家製シロップ、自家製練乳と白蜜。口コミ (2026年8〜10月、英語): いちごカスタードパイ1,750円 (一番人気)、抹茶カスタード大福1,750円、生搾りキウイと杏仁1,600円、キウイミルク、いちごのショートケーキ、いちごのタルト、いちごマスカルポーネ、ミニサイズは約100円引き、入口で注文と支払い、セルフのほうじ茶、量が多い、冷房が強いという声。',
      confidence: 'medium', sources: [TB, R + 'B532827197/', R + 'B534535247/', R + 'B534547132/', R + 'B534748852/', R + 'B535011810/', R + 'B535490289/', R + 'B536208808/', R + 'B536313324/', R + 'B536618551/', R + 'B537196701/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the entrance; online booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区上之町429-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.988293, 135.749064); cross-checked: GSI 京都府京都市下京区上之町429番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535490289/', R + 'B532827197/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Strawberry custard pie kakigori', '¥1,750', 'Kakigori', 'no', 'no', 'August and September 2026 reviews.', 'ichigo_custard_pie'),
      it('', '', 'Freshly squeezed kiwi with almond jelly kakigori', '¥1,600', 'Kakigori', 'ask', 'ask', 'August 2026 review.', 'kiwi_annin'),
    ] }, {
    cuisine: '3日かけて作る純氷に、旬の果物の自家製シロップ、自家製練乳、白蜜を合わせる一年中のかき氷 (食べログ): 一番人気のいちごカスタードパイ1,750円、抹茶カスタード大福1,750円、生搾りキウイと杏仁1,600円、キウイミルク、いちごのショートケーキ、いちごのタルト、いちごマスカルポーネ、季節の果物の限定。量がとても多い (2026年の口コミ)',
    neighborhood: '梅小路公園・京都水族館。梅小路京都西駅から徒歩5分',
    gf_detail: '要確認。果物のシロップのかき氷だが、パイ、タルト、ケーキ、大福を使うものが多い (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。自家製練乳、カスタード、クリーム、マスカルポーネ (食べログ、2026年の口コミ)。',
    notes: '[かき氷・梅小路公園] 京都水族館前のバス停から1分の、一年中開くかき氷の店。3日かけた純氷をふわふわに削った特大の器に、生の果物のシロップ。いちごカスタードパイ、キウイと杏仁、抹茶カスタード大福で1,600〜1,750円ほど (ミニサイズは安い)。ネット予約。カード不可。水曜休み。',
  });
}

// ================================================================ かもドーナツ 堀川商店街店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26031023/'; const R = TB + 'dtlrvwlst/';
  const D = day(['09:30', '20:30']);
  put({
    id: 'kyoto_kamo_donut_horikawa', name: 'かもドーナツ 堀川商店街店 (Kamo Donut, Horikawa Shotengai)', category: 'OMNI',
    lat: 35.021493, lng: 135.751566, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat donuts (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Ingredients not described; cake donuts and crullers usually contain egg and dairy (2025–26 reviews).',
    hours_raw: 'Mon and Wed–Sun 9:30–20:30; closed Tuesday (Tabelog). No bookings; cash only — no cards, e-money or QR (Tabelog). 6 seats for eating in; non-smoking (Tabelog; December 2025 review). No parking (December 2025 review). In the Horikawa shopping street, in the 出水団地 block; the main shop is in Kitaoji (Tabelog; December 2025 review).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Horikawa shopping street — about 900 m from Marutamachi Stn',
    cuisine: 'Old-style donuts, small but filling (2025–26 reviews): French cruller ¥190, kinako ¥190, coconut cake ¥230 (December 2025), chocolate cake ¥210, whipped French ¥230 (December 2025), apple fritter, sesame milk, rum raisin, a snowman donut at Christmas, lemon cake, an-donut, double chocolate, plain cake, twist, mini donuts; Shinshu apple juice',
    website: null, gmaps: gm('かもドーナツ 堀川商店街'), menu_url: null,
    notes: "[Donuts · Horikawa shopping street] The Horikawa branch of a Kitaoji donut shop, with a wood-lined room and a few seats: moist, old-fashioned donuts from about ¥190 — French crullers, a crisp apple fritter, kinako and lemon cake. Cash only; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Branch of かもドーナツ, whose main shop is in Kitaoji (December 2025 review). A 2020 report on 4travel mentions its donuts at a bakery fair in the Fujii Daimaru basement.',
      philosophy: null, specialty: 'Apple fritter; French cruller.',
      anecdotes: [
        { text: 'A family visiting in December 2025 at the children\'s request chose an apple fritter, a snowman and a sprinkled cruller; the crisp apple fritter was the star.', source: R + 'B518492285/' },
        { text: 'An April 2026 first-timer found the glazed donut so light it barely needed chewing.', source: R + 'B526908044/' },
        { text: 'An October 2026 visitor who found the shop on social media thought the line-up resembled Mister Donut\'s and found the double chocolate too sweet.', source: R + 'B536787273/' },
      ],
      japanese_sources_summary: '食べログ: かもドーナツ 堀川商店街店、ドーナツ、上京区西堀川通出水上ル桝屋町28 出水団地第一棟、月・水〜日 9:30〜20:30、火曜休み、予約不可、カード・電子マネー・QR 不可、6席、禁煙。口コミ (2025年12月〜2026年10月、英語): 本店は北大路、駐車場なし、イートイン、フレンチクルーラー190円、きなこ190円、ココナッツケーキ230円、チョコケーキ210円、ホイップフレンチ230円、アップルフリッター、ごまミルク、ラムレーズン、雪だるま、レモンケーキ、あんドーナツ、ダブルチョコ、ミニドーナツ、信州りんごのジュース、昔ながらの小さくしっとりしたドーナツ。',
      confidence: 'low', sources: [TB, 'https://4travel.jp/dm_shisetsu/11374494', R + 'B518153535/', R + 'B518492285/', R + 'B518910825/', R + 'B519835431/', R + 'B524104560/', R + 'B526402689/', R + 'B526908044/', R + 'B528224645/', R + 'B536051924/', R + 'B536787273/'] },
    cultural_comfort: { level: 'none_needed', note: 'Point at the showcase; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区西堀川通出水上ル桝屋町28 出水団地第一棟',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.021493, 135.751566); GSI matched only a town-level 桝屋町 elsewhere (1.6 km east), so not lot-checked; the point is on Horikawa-dori as the address says; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518153535/', R + 'B518910825/'],
    price_note: 'Prices from December 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'French cruller', '¥190', 'Donuts', 'no', 'ask', 'December 2025 review.', 'french_cruller'),
      it('', '', 'Coconut cake donut', '¥230', 'Donuts', 'no', 'ask', 'December 2025 review.', 'coconut_cake'),
    ] }, {
    cuisine: '小さいが食べごたえのある昔ながらのドーナツ (2025〜26年の口コミ): フレンチクルーラー190円、きなこ190円、ココナッツケーキ230円 (2025年12月)、チョコケーキ210円、ホイップフレンチ230円 (2025年12月)、アップルフリッター、ごまミルク、ラムレーズン、クリスマスの雪だるま、レモンケーキ、あんドーナツ、ダブルチョコ、プレーンケーキ、ツイスト、ミニドーナツ。信州りんごのジュース',
    neighborhood: '堀川商店街。丸太町駅から約900m',
    gf_detail: 'グルテンフリー不可。小麦のドーナツ (2025〜26年の口コミ)。',
    vegan_detail: '要確認。材料の説明はない。ケーキドーナツやクルーラーは卵と乳を使うことが多い (2025〜26年の口コミ)。',
    notes: '[ドーナツ・堀川商店街] 北大路に本店のあるドーナツ店の堀川店。木の内装で、数席のイートインも。しっとりした昔ながらのドーナツが190円ほどから。フレンチクルーラー、さくさくのアップルフリッター、きなこ、レモンケーキ。現金のみ。火曜休み。',
  });
}

// ================================================================ 炭火焼鳥issiki
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040143/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:30', '24:00']);
  put({
    id: 'kyoto_sumibi_yakitori_issiki', name: '炭火焼鳥issiki (Sumibi Yakitori issiki)', category: 'OMNI',
    lat: 35.01421, lng: 135.742447, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt-grilled skewers are possible, but tare skewers, kara-age and fried rice are on the menu (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori bar; some vegetable skewers (2026 reviews).',
    hours_raw: 'Mon, Tue, Thu, Fri and Sat 17:30–24:00 (last order 23:00); Sun 17:30–22:00 (last order 21:30); closed Wednesday (Tabelog). Bookings taken, often full on Saturdays; same-day phone bookings sometimes possible (Tabelog; March and May 2026 reviews). Cards (VISA, Master, JCB, AMEX, Diners) and QR; no e-money (Tabelog). 11 seats: a counter of 7 and one table for 4; heated-tobacco-only smoking area; free Wi-Fi (Tabelog). Order from a single skewer, from the list above the grill (April 2026 review). 5 min from JR Nijo Stn, a little hard to find (Tabelog; May 2026 review).',
    hours: { 0: W, 1: W, 3: W, 4: W, 5: W, 6: day(['17:30', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishinokyo, west of Nijo Stn — 5 min from JR Nijo Stn',
    cuisine: 'Charcoal yakitori of Okutanba chicken (June 2026 review; Tabelog matome): thigh, tsukune with tare, wings, heart, bonjiri, neck with wasabi, garlic gizzards; green onion, zucchini, baby corn in the husk and lotus root skewers; potato salad, avocado and cream cheese, yam kara-age, young-chicken kara-age, braised beef tendon, a dobin-steamed dish; shibazuke fried rice and a yakitori rice bowl to finish; selected sake and highballs (2026 reviews)',
    website: null, gmaps: gm('炭火焼鳥issiki 二条'), menu_url: null,
    notes: "[Charcoal yakitori · Nijo] A calm 11-seat yakitori counter near Nijo Station grilling Okutanba chicken over charcoal: crisp-juicy thigh, tsukune, garlic gizzards and seasonal vegetables by the single skewer, with shibazuke fried rice to finish. About ¥5,000–6,000. Book ahead; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened 30 September 2023 (Tabelog).',
      philosophy: null, specialty: 'Chicken thigh; shibazuke fried rice.',
      anecdotes: [
        { text: 'A March 2026 diner phoned the same day and was told to come in an hour; the thigh and fluffy tsukune were the highlights.', source: R + 'B523621780/' },
        { text: 'A March 2026 diner was seen off at the door by the manager at the end of the meal.', source: R + 'B525813533/' },
        { text: 'An October 2026 regular says one serving of shibazuke fried rice is never enough, so the group now orders one each.', source: R + 'B537340837/' },
      ],
      japanese_sources_summary: '食べログ: 炭火焼鳥issiki、焼き鳥・居酒屋、中京区西ノ京小堀町1-5、JR二条駅から徒歩5分、月・火・木・金・土 17:30〜24:00 (L.O. 23:00)、日 17:30〜22:00 (L.O. 21:30)、水曜休み、予約可、カード・QR 可、電子マネー不可、11席 (カウンター7、4名テーブル1)、加熱式たばこのみの喫煙所、Wi-Fi、隠れ家、2023年9月30日オープン。食べログまとめ: 千本通沿い、奥丹波どり。口コミ (2026年3〜10月、英語): もも、つくね、手羽、ハツ、ぼんじり、せせりのわさび、にんにく砂肝、ねぎ、ズッキーニ、ヤングコーン、れんこん、ポテトサラダ、アボカドとクリームチーズ、長芋の唐揚げ、若鶏の唐揚げ、牛すじ煮込み、土瓶の煮物、柴漬けの炒飯、焼き鳥丼、1本から注文、日本酒とハイボール、店主の人柄、土曜は満席。',
      confidence: 'medium', sources: [TB, 'https://tabelog.com/matome/32122/', R + 'B523621780/', R + 'B525813533/', R + 'B525973936/', R + 'B526574560/', R + 'B527203113/', R + 'B528435030/', R + 'B528856375/', R + 'B528998466/', R + 'B531855679/', R + 'B537340837/'] },
    cultural_comfort: { level: 'japanese', note: 'Skewer list over the grill; small counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西ノ京小堀町1-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.014210, 135.742447); cross-checked: GSI 京都府京都市中京区西ノ京小堀町1番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537340837/'],
    price_note: 'No menu or prices read.', last_checked: TODAY, items: [
      it('', '', 'Chicken thigh skewer', '', 'Yakitori', 'ask', 'no', '2026 reviews.', 'momo'),
      it('', '', 'Shibazuke fried rice', '', 'To finish', 'ask', 'no', 'October 2026 review.', 'shibazuke_chahan'),
    ] }, {
    cuisine: '奥丹波どりの炭火焼き鳥 (2026年6月の口コミ、食べログまとめ): もも、たれのつくね、手羽、ハツ、ぼんじり、わさびのせせり、にんにく砂肝。ねぎ、ズッキーニ、皮付きのヤングコーン、れんこんの串。ポテトサラダ、アボカドとクリームチーズ、長芋の唐揚げ、若鶏の唐揚げ、牛すじ煮込み、土瓶の煮物。締めは柴漬けの炒飯と焼き鳥丼。選んだ日本酒とハイボール (2026年の口コミ)',
    neighborhood: '西ノ京、二条駅の西。JR二条駅から徒歩5分',
    gf_detail: '要確認。塩の串もあるが、たれの串、唐揚げ、炒飯もある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の焼き鳥店。野菜の串も少し (2026年の口コミ)。',
    notes: '[炭火焼き鳥・二条] 二条駅近くの、落ち着いた11席の焼き鳥のカウンター。奥丹波どりを炭火で焼く。外はぱりっと中はジューシーなもも、つくね、にんにく砂肝、季節の野菜を1本から、締めに柴漬けの炒飯。5千〜6千円ほど。予約を。水曜休み。',
  });
}

// ================================================================ crème plus
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26025515/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://cremexplus.raku-uru.jp';
  const D = day(['11:30', '19:30']);
  put({
    id: 'kyoto_creme_plus_senbon', name: 'crème plus (クレーム プリュス)', category: 'OMNI',
    lat: 35.016331, lng: 135.742725, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: cream puffs, tarts, roll cakes and cookies (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: custard, cream, cheese and egg-rich pastries (2025–26 reviews).',
    hours_raw: 'Mon–Wed and Fri–Sun 11:30–19:30 (café and drinks to 18:30); closed Thursday; temporary closures on Instagram (Tabelog). Bookings taken; the small team may not always answer the phone (Tabelog). Service charge: Tabelog\'s Japanese original says 「なし」 (none). Cards (VISA, Master, JCB, AMEX, Diners) and e-money (Tabelog). 6 seats for eating in; non-smoking; takeaway; children and strollers welcome (Tabelog). Cream puffs often sell out by evening (May and September 2026 reviews). On Senbon-dori, 1 min from the Senbon-Kyu-Nijo bus stop, 7 min north of Nijo Stn (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Senbon-dori north of Nijo Stn — 7 min from Nijo Stn',
    cuisine: 'Small pâtisserie and café known for its custard (2025–26 reviews): custard cream puff ¥350 (July 2026), crème brûlée torched in front of you when you buy it, baked cheesecake with a hint of salt, banana roll cake, pudding with brown sugar on the side, chestnut Mont Blanc ¥630 (July 2026), fraisier, lemon tart, espresso tiramisu, whole gâteau chocolat; matcha and hojicha lattes with cat latte art',
    website: SITE, gmaps: gm('crème plus 千本'), menu_url: null,
    notes: "[Pâtisserie & café · Senbon-dori] A tiny cake shop with six seats north of Nijo Station, known for rich custard: cream puffs that sell out by evening (¥350), crème brûlée torched as you buy it, salty-rich baked cheesecake and banana roll cake, with lattes. About ¥1,000 or less. Closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Pastry chef (unnamed)'], origin: null,
      background: 'Opened 7 March 2015 (Tabelog). A small team, per the Tabelog listing.',
      philosophy: null, specialty: 'Custard cream puff; crème brûlée.',
      anecdotes: [
        { text: 'A February 2026 local was surprised to have missed the shop for ten years, then loved the cream puff, fraisier, lemon tart and roll cake.', source: R + 'B522685560/' },
        { text: 'A May 2026 visitor came for cream puffs, found them sold out on a weekday evening, and vowed a cream-puff revenge after the banana roll cake.', source: R + 'B527234168/' },
        { text: 'In August 2026 the reviewer’s partner brought home a whole gâteau chocolat to thank the family for quickly helping recover a dropped suit jacket.', source: R + 'B113704295/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): crème plus、ケーキ・カフェ・喫茶店、上京区聚楽町848、JR・地下鉄二条駅から千本通を北へ徒歩約7分、千本旧二条バス停から徒歩1分、月〜水・金〜日・祝 11:30〜19:30 (カフェとドリンクは18:30まで)、木曜休み、臨時休業は Instagram、予約可 (少人数のため電話に出られないことあり)、サービス料なし、カード・電子マネー可、6席、禁煙、テイクアウト、子ども可、2015年3月7日オープン。口コミ (2025年2月〜2026年9月、英語): カスタードのシュークリーム350円、買うときに目の前で焼くクレームブリュレ、塩気のあるベイクドチーズケーキ、バナナのロールケーキ、黒糖を添えたプリン、栗のモンブラン630円、フレジエ、レモンタルト、エスプレッソのティラミス、ガトーショコラ、抹茶とほうじ茶のラテに猫のラテアート、夕方にはシュークリームが売り切れ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B113704295/', R + 'B487302703/', R + 'B501752564/', R + 'B522685560/', R + 'B523063727/', R + 'B527234168/', R + 'B535017220/', R + 'B536375565/', R + 'B537738513/'] },
    cultural_comfort: { level: 'none_needed', note: 'Point at the showcase; six seats.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区聚楽町848',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.016331, 135.742725); GSI matched only the town 聚楽町 (centroid 44 m away), so not lot-checked; the point is on Senbon-dori as the access note says; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537738513/'],
    price_note: 'Prices from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Custard cream puff', '¥350', 'Cakes', 'no', 'no', 'July 2026 review.', 'choux_cream'),
      it('', '', 'Chestnut Mont Blanc', '¥630', 'Cakes', 'no', 'no', 'July 2026 review.', 'mont_blanc'),
    ] }, {
    cuisine: 'カスタードで知られる小さな洋菓子店とカフェ (2025〜26年の口コミ): カスタードのシュークリーム350円 (2026年7月)、買うときに目の前で焼くクレームブリュレ、塩気のあるベイクドチーズケーキ、バナナのロールケーキ、黒糖を添えたプリン、栗のモンブラン630円 (2026年7月)、フレジエ、レモンタルト、エスプレッソのティラミス、ホールのガトーショコラ。猫のラテアートの抹茶とほうじ茶のラテ',
    neighborhood: '二条駅の北の千本通。二条駅から徒歩7分',
    gf_detail: 'グルテンフリー不可。シュークリーム、タルト、ロールケーキ、クッキー (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。カスタード、クリーム、チーズ、卵の多い菓子 (2025〜26年の口コミ)。',
    notes: '[洋菓子とカフェ・千本通] 二条駅の北の、6席の小さなケーキ店。濃いカスタードで知られる。夕方には売り切れるシュークリーム (350円)、買うときに焼くクレームブリュレ、塩気のあるベイクドチーズケーキ、バナナのロールケーキ、ラテも。千円以下。木曜休み。',
  });
}

save();
