// Osaka sweep (2-mile circle around Dotonbori), batch 45 — ramen phase, nearest first (all OMNI).
//   + 喫茶シロイヌ (owner-run kissa with handmade-noodle niboshi shoyu and curry → mom_and_pop)
//   + らーめん古潭 なんばCITY店 (Kotan's soy-tonkotsu with carrot and bean sprouts)
//   + ファンサパロット (Thai run by Thai staff near Kuromon Market — filed 'other')
//   + 若水 (eight-seat local Chinese ramen counter in Minami-Horie)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 45);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 喫茶シロイヌ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27135207/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '15:30'], ['20:00', '01:30']), S = day(['11:30', '15:30'], ['20:00', '23:30']);
  put({
    id: 'osaka_kissa_shiroinu_nishishinsaibashi', name: '喫茶シロイヌ (Kissa Shiroinu)', category: 'OMNI',
    lat: 34.673263, lng: 135.49844, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles; curry roux not described; soy sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: niboshi and fish-powder broth, back fat, chashu, raw egg.',
    hours_raw: 'Tue–Sat 11:30–15:30 (L.O. 15:00) and 20:00–1:30 (L.O. 1:00); Sun 11:30–15:30 and 20:00–23:30 (L.O. 23:00); closed Monday and some irregular days (Tabelog). Cards and QR (PayPay) accepted; no e-money (Tabelog). Back-fat shoyu ramen at night only (July 2026).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 1-9-23, D Bldg Nishi-Shinsaibashi 2-103 — about 3 min from Shinsaibashi Stn',
    cuisine: 'Owner-run kissa doubling as a ramen and curry counter · niboshi shoyu ramen ¥770 with fish powder on house-made noodles · shoyu ramen and mini curry set ¥1,100 · curry tsukemen · night-only back-fat shoyu · iron-pan tamago kake gohan · yakisoba · 10 seats',
    website: null, gmaps: gm('喫茶シロイヌ 西心斎橋'), menu_url: null,
    notes: "[Ramen · a kissa that's really a handmade-noodle ramen counter, Amemura] It looks like a coffee shop, but Kissa Shiroinu is a serious ten-seat ramen and curry counter near Amerika-mura, run quietly by an owner who once ran a rock bar. Self-taught, the owner makes the noodles in-house; a sign talks up the flour. The shoyu ramen (¥770, September 2026) is a bargain for the area, strong on niboshi with fish powder, gentle and rich without being heavy. The shoyu-and-mini-curry set (¥1,100) shows the curry could be a main in its own right. Late at night there's a back-fat shoyu, a curry tsukemen and an iron-pan tamago kake gohan. Open until 1:30 am most nights; closed Mondays.",
    chef_bio: { chef_name: null, roles: ['owner-chef'], origin: 'Opened 17 March 2023 (Tabelog)', background: 'The owner previously ran a rock bar and is self-taught, making the noodles from scratch (June 2026 review); runs the shop quietly (February 2026 review).', philosophy: 'A sign stresses high-quality flour (July 2026 review).', specialty: 'Niboshi shoyu ramen; curry.',
      anecdotes: [
        { text: '"The owner, who used to run a rock bar, started this venture as a self-taught chef, and even makes the noodles from scratch." — June 2026.', source: R + 'B535218774/' },
        { text: '"I tried the Shoyu Ramen for JPY 770. What a great price for this location!… The broth had a strong niboshi (dried sardine) flavor." — September 2026.', source: R + 'B536669568/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶シロイヌ、大阪市中央区西心斎橋1-9-23 Dビル西心斎橋2-103、予約不可、火〜土11:30〜15:30(L.O.15:00)・20:00〜翌1:30(L.O.1:00)、日11:30〜15:30・20:00〜23:30、月曜と不定休、カード・QR(PayPay)可、電子マネー不可、10席、2023年3月17日開店。2026年の口コミ(2〜9月): 安い、カレーがとてもおいしい、店主が静かに営業、飲んだ後に、焼きそばは売り切れでカレーつけ麺、醤油ラーメンとミニカレーのセット1,100円(魚粉でコク、やさしい味)、夜限定の背脂醤油ラーメン、こだわりの小麦粉の貼り紙、鉄板TKG、アメ村で見つけた本格ラーメン店、元ロックバーの店主が独学で自家製麺、濃いのに重くないスープ、チャーシュー、醤油ラーメン770円(煮干しが強い)。',
      confidence: 'medium', sources: [TB, R + 'B535218774/', R + 'B536669568/', R + 'B530727366/', R + 'B532079543/', R + 'B524400728/', R + 'B524716040/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: true, notes: 'House-made noodles; a sign stresses high-quality flour (June–July 2026).' },
      regional_style: [], sub_genre: ['ramen', 'niboshi', 'tsukemen'],
      signature_bowl: 'Shoyu ramen ¥770 (September 2026).',
      chashu: 'Chashu (June 2026); not described in detail.',
      notable_toppings: ['fish powder', 'back fat (night only)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Niboshi broth.' },
      pantheon: 'Amemura\'s ex-rock-bar ramen counter: handmade noodles in a niboshi shoyu, with curry on the side.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B535218774/', '"The broth was rich in flavor but not too heavy."'],
        oiliness: [R + 'B530727366/', '"A gentle flavor" — placed low-mid.'],
        clarity: [R + 'B530727366/', 'Shoyu with fish powder; clarity not described — mid-scale (inferred).'],
        tare_strength: [R + 'B536669568/', 'Shoyu; not described as strong — mid-scale.'],
        noodle_firmness: [R + 'B535218774/', '"The handmade noodles had a great presence" — mid-scale.'],
        aroma_punch: [R + 'B536669568/', '"The broth had a strong niboshi (dried sardine) flavor."'],
      },
      confidence: 'medium', sources: [R + 'B535218774/', R + 'B536669568/', R + 'B530727366/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small owner-run counter.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-9-23 Dビル西心斎橋 2-103',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated February–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目9番23号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536669568/', R + 'B530727366/'],
    price_note: 'Prices from June and September 2026 reviews.', last_checked: TODAY, items: [
      it('醤油ラーメン', 'shōyu rāmen', 'Shoyu ramen', '¥770', 'Ramen', 'no', 'no', 'September 2026.', 'shoyu'),
      it('', '', 'Shoyu ramen and mini curry set', '¥1,100', 'Sets', 'no', 'no', 'June 2026.', 'set'),
      it('', '', 'Curry tsukemen', '', 'Tsukemen', 'no', 'no', 'March 2026.', 'curry_tsuke'),
      it('', '', 'Back-fat shoyu ramen (night only)', '', 'Ramen', 'no', 'no', 'July 2026.', 'seabura'),
      it('', '', 'Iron-pan tamago kake gohan', '', 'Rice', 'no', 'no', 'July 2026.', 'tkg'),
    ] }, {
    cuisine: 'ラーメンとカレーのカウンターでもある店主一人の喫茶・魚粉入り煮干し醤油ラーメン770円(自家製麺)・醤油ラーメンとミニカレーのセット1,100円・カレーつけ麺・夜限定の背脂醤油・鉄板TKG・焼きそば・10席',
    neighborhood: '西心斎橋1-9-23 Dビル西心斎橋2-103。心斎橋駅から徒歩約3分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、カレーのルーの中身は不明、醤油。',
    vegan_detail: 'ヴィーガンではありません。煮干しと魚粉のスープ、背脂、チャーシュー、生卵。',
    notes: '[ラーメン・アメ村の、実は自家製麺のラーメンのカウンターの喫茶] 見た目は喫茶店ですが、喫茶シロイヌはアメリカ村近くの10席の本格的なラーメンとカレーのカウンターで、元はロックバーをしていた店主が静かに切り盛り。独学で、麺も自家製。小麦粉へのこだわりの貼り紙も。醤油ラーメン(770円、2026年9月)はこの辺りでは格安で、魚粉入りの煮干しが強く、やさしく濃いのに重くない。醤油とミニカレーのセット(1,100円)では、カレーが主役を張れるほど。夜遅くには背脂醤油、カレーつけ麺、鉄板TKGも。ほとんどの夜は深夜1時半まで、月曜定休。',
  });
}

// ================================================================ らーめん古潭 なんばCITY店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27002788/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ramen_kotan_namba_city', name: 'らーめん古潭 なんばCITY店 (Ramen Kotan Namba CITY)', category: 'OMNI',
    lat: 34.664068, lng: 135.501477, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza, fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soy-tonkotsu broth, chashu.',
    hours_raw: 'Daily 11:00–21:30, continuous; closed the third Thursday of each month (Tabelog). No cards; e-money and QR accepted (Tabelog). 10% off with an upgraded Namba CITY Minapita card (2026 reviews).',
    hours: ALL(day(['11:00', '21:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba CITY Main Bldg B2F (Namba 5-1-60) — by Nankai Namba Stn',
    cuisine: 'Long-running Osaka chain · Kotan ramen: soy-tonkotsu with shredded carrot and crunchy bean sprouts on straight, thicker-than-medium noodles · shio version · vegetable-laden nananmen · fried-rice set · summer cold noodles and chilled tantanmen · sesame on the table · 55 seats with spaced-out counters',
    website: 'http://ramen-kotan.co.jp/', gmaps: gm('らーめん古潭 なんばCITY店'), menu_url: null,
    notes: "[Ramen · Kotan's classic soy-tonkotsu in the Namba CITY basement] A branch of Kotan, a long-running Osaka ramen chain, in the B2F food floor of Namba CITY by Nankai Namba. It's open straight through, handy when you miss lunch. Kotan's signature is a soy-and-tonkotsu broth with shredded carrot and crunchy bean sprouts, on straight noodles a little thicker than medium; add the sesame on the table. Fans return for the nostalgic taste, and one came back after 15 years. A shio version exists, though the shoyu is the comfort order, and there's a vegetable-heavy nananmen. Fried-rice sets are popular but uneven. Summer brings cold noodles and a chilled tantanmen. The counters are well spaced, service is quick, and Namba CITY cardholders get 10% off. Closed the third Thursday.",
    chef_bio: { chef_name: null, roles: [], origin: 'Namba CITY branch (Tabelog)', background: 'Ramen Kotan chain (ramen-kotan.co.jp), described by reviewers as long-established.', philosophy: null, specialty: 'Soy-tonkotsu ramen with carrot and bean sprouts.',
      anecdotes: [
        { text: '"Kotan\'s signature is its soy sauce and tonkotsu base, complemented by shredded carrots and crunchy bean sprouts. The noodles are a unique straight style, thicker than usual medium noodles. The sesame on the table pairs perfectly with the dish." — October 2026.', source: R + 'B536852607/' },
        { text: '"It\'s been 15 years since I last had Ramen Kotan… The nostalgic taste of the broth brought back memories." — August 2026.', source: R + 'B534602980/' },
      ],
      japanese_sources_summary: '食べログ: らーめん古潭 なんばCITY店、大阪市中央区難波5-1-60 なんばCITY本館B2F、06-6644-2519、予約不可、毎日11:00〜21:30、毎月第3木曜休み、カード不可、電子マネー・QR決済可、55席、禁煙、公式 ramen-kotan.co.jp。2026年の口コミ(7〜10月): なんばCITY本館地下2階のチェーン、週末の昼は混む、ミナピタカード提示で割引(10%オフ)、シンプルな味、通し営業で遅い昼に便利、清潔で提供が早い、冷麺と冷やし担々麺、海外客とスタッフ、ラーメン古潭と炒飯のセット、大きなチャーシュー、炒飯は油のにおいが気になる、カウンターの間隔が広い、15年ぶりの古潭、野菜たっぷりのナナンメンと炒飯、懐かしいスープ、醤油とんこつに人参の千切りとシャキシャキのもやし、普通の中太より太めのストレート麺、卓上のごま、塩味も、炒飯はやや焦げ気味。',
      confidence: 'medium', sources: [TB, R + 'B536852607/', R + 'B534602980/', R + 'B533761070/', R + 'B532329481/', R + 'B533023142/', R + 'B457913145/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'unknown', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Straight noodles thicker than a usual medium (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Kotan ramen (soy-tonkotsu) (August–October 2026).',
      chashu: 'Large chashu (August 2026).',
      notable_toppings: ['shredded carrot', 'bean sprouts', 'sesame (table)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Osaka\'s nostalgic Kotan bowl: soy-tonkotsu with carrot shreds and bean sprouts, under Namba CITY.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B457913145/', '"The flavor is simple, but I think that\'s part of its charm."'],
        oiliness: [R + 'B536852607/', 'Soy-tonkotsu; oil not described — mid-scale (inferred).'],
        clarity: [R + 'B536852607/', 'Soy-tonkotsu — below mid (inferred).'],
        tare_strength: [R + 'B536852607/', 'Shoyu is "the familiar taste" — mid-scale.'],
        noodle_firmness: [R + 'B536852607/', 'Thicker-than-medium straight noodles — mid-scale.'],
        aroma_punch: [R + 'B457913145/', '"Simple" flavor — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B536852607/', R + 'B457913145/', R + 'B534602980/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Station-mall food floor.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波5-1-60 なんばCITY 本館 B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波五丁目1番60号 (go) 100m — Namba CITY is a large complex on one lot; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536852607/', R + 'B533761070/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Kotan ramen (soy-tonkotsu)', '', 'Ramen', 'no', 'no', 'August 2026.', 'kotan'),
      it('', '', 'Shio ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'shio'),
      it('', '', 'Nananmen (vegetable ramen)', '', 'Ramen', 'no', 'no', 'August 2026.', 'nanan'),
      it('', '', 'Ramen and fried-rice set', '', 'Sets', 'no', 'no', 'August–October 2026.', 'chahan_set'),
      it('', '', 'Chilled tantanmen (summer)', '', 'Seasonal', 'no', 'no', 'August 2026.', 'hiyashi_tantan'),
    ] }, {
    cuisine: '老舗の大阪のチェーン・古潭らーめん(人参の千切りとシャキシャキのもやしの醤油とんこつ、中太より太いストレート麺)・塩も・野菜たっぷりのナナンメン・炒飯のセット・夏の冷麺と冷やし担々麺・卓上にごま・間隔の広いカウンターの55席',
    neighborhood: 'なんばCITY本館B2F(難波5-1-60)。南海なんば駅そば',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子、炒飯。',
    vegan_detail: 'ヴィーガンではありません。醤油とんこつのスープ、チャーシュー。',
    notes: '[ラーメン・なんばCITY地下の古潭の醤油とんこつ] 大阪の老舗ラーメンチェーン、古潭のなんばCITY本館地下2階の店で、南海なんば駅のそば。通し営業なので昼を逃したときに便利。古潭の看板は醤油ととんこつのスープに人参の千切りとシャキシャキのもやし、普通の中太より少し太いストレート麺で、卓上のごまを足して。懐かしい味に通う人も多く、15年ぶりに来た人も。塩もありますが、落ち着くのはやはり醤油、野菜たっぷりのナナンメンも。炒飯のセットは人気ですが出来にむらも。夏は冷麺と冷やし担々麺。カウンターの間隔は広く、提供は早く、なんばCITYのカードで10%オフ。第3木曜定休。',
  });
}

// ================================================================ ファンサパロット
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27009428/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:00'], ['16:00', '22:00']);
  put({
    id: 'osaka_fans_parrot_thai_nipponbashi', name: 'ファンサパロット (Fans Parrot)', category: 'OMNI',
    lat: 34.666741, lng: 135.506993, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice dishes and salads may suit, but sauces (soy, oyster, fish sauce) and noodles are not described for wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish sauce in the salads (October 2026), pork stew soup, shrimp.',
    hours_raw: 'Mon and Wed–Sun 11:00–14:00 and 16:00–22:00 (L.O. 21:30); closed Tuesday (Tabelog). Reservations taken; 2F for groups up to 15. Cards and e-money accepted.',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nippombashi 1-17-23, on the corner by the Kuromon Market entrance — 1 min from Nippombashi Stn exits 9/10',
    cuisine: 'Thai cooking by a Thai team, spice not toned down · lunch sets A–E ¥1,100 (gapao rice, green curry with Thai noodles …) · yum woon sen · larb sen · tom yum goong · green curry · Thai omelette · shrimp fried rice · Singha beer · 24 seats on two floors',
    website: null, gmaps: gm('ファンサパロット 日本橋'), menu_url: null,
    notes: "[Thai · a Thai-run kitchen by the Kuromon Market entrance] A 24-seat Thai restaurant on the corner by the Kuromon Market entrance, a minute from Nippombashi; don't mix it up with the similar Thai place two doors down. It's run by Thai staff, Thai is the language in the room, and plenty of Thai customers eat here, a good sign. The spice isn't softened for Japanese palates. The yum woon sen is a standout, balancing lime, fish sauce and cilantro. The gapao is authentic, and the tom yum goong and coconut-rich green curry draw praise. The lunch sets (¥1,100 in 2025) are the value play; à la carte prices have climbed, and one diner found the portions small for Kuromon-area prices. Service can slow when busy. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Nippombashi 1-chōme, by Kuromon Market (Tabelog; reviews)', background: 'Run by Thai staff (2025–2026 reviews); a September 2026 reviewer calls it a Thai Select restaurant.', philosophy: null, specialty: 'Yum woon sen; gapao.',
      anecdotes: [
        { text: '"The staff, who are incredibly friendly, are from Thailand, and the spice level is not toned down for Japanese customers… their Yum Woon Sen is still delicious as ever. The balance of lemon\'s acidity, fish sauce, and cilantro is simply exquisite." — October 2026.', source: R + 'B537959783/' },
        { text: '"The Tom Yum Goong was particularly authentic, and the Green Curry had a rich coconut milk flavor." — March 2026.', source: R + 'B524311336/' },
      ],
      japanese_sources_summary: '食べログ: ファンサパロット、大阪市中央区日本橋1丁目17-23、06-6631-6872、予約可、月・水〜日11:00〜14:00・16:00〜22:00(L.O.21:30)、火曜休み、カード・電子マネー可、24席(1階カウンター8とテーブル4、2階テーブル12、貸切15名まで)。口コミ(2025年9月〜2026年10月): 2軒隣にも似たタイ料理店、角の店、タイ人の男性スタッフの笑顔、ラープセン、ヤムウンセン、Dランチ(グリーンカレー、タイの麺、ゆで卵と野菜のサラダ)1,100円、Cセット(ガパオライス、野菜サラダ、豚の煮込みスープ)1,100円、黒門市場の入り口手前、タイ人が営業しタイ語が飛び交う、トムヤムクン、グリーンカレー、タイ風オムレツ、値段はやや高め、ランチセットがおすすめ、忙しいと提供が遅い、タイセレクトの店、プーパッポンカリーは提供休止、エビチャーハン、シンハービール、辛さは日本人向けに抑えていない、タイ人客も多い、値上がり。',
      confidence: 'medium', sources: [TB, R + 'B537959783/', R + 'B524311336/', R + 'B536518242/', R + 'B514469123/', R + 'B514164112/', R + 'B513206603/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Thai-speaking staff (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋1丁目17-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋一丁目17番23号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B514469123/', R + 'B514164112/', R + 'B537959783/'],
    price_note: 'Lunch-set price from September 2025 reviews; à la carte prices have since risen (2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Lunch set C (gapao rice, salad, pork stew soup)', '¥1,100', 'Lunch', 'ask', 'no', 'September 2025.', 'set_c'),
      it('', '', 'Lunch set D (green curry, Thai noodles, egg and vegetable salad)', '¥1,100', 'Lunch', 'ask', 'no', 'September 2025.', 'set_d'),
      it('', '', 'Yum woon sen', '', 'Salads', 'ask', 'no', 'October 2026.', 'yumwoonsen'),
      it('', '', 'Tom yum goong', '', 'Soups', 'ask', 'no', 'March 2026.', 'tomyum'),
      it('', '', 'Gapao', '', 'Rice', 'ask', 'no', 'October 2026.', 'gapao'),
    ] }, {
    cuisine: 'タイ人のチームによるタイ料理、辛さは抑えない・ランチセットA〜E 1,100円(ガパオライス、タイの麺のグリーンカレーなど)・ヤムウンセン・ラープセン・トムヤムクン・グリーンカレー・タイ風オムレツ・エビチャーハン・シンハービール・2フロア24席',
    neighborhood: '日本橋1-17-23、黒門市場の入り口手前の角。日本橋駅9・10番出口から徒歩1分',
    gf_detail: '要確認。ご飯ものやサラダは合いそうですが、醤油、オイスター、ナンプラーなどのたれや麺の小麦についての情報はありません。',
    vegan_detail: 'ヴィーガンではありません。サラダにナンプラー(2026年10月)、豚の煮込みスープ、エビ。',
    notes: '[タイ料理・黒門市場の入り口のタイ人の店] 日本橋駅から1分、黒門市場の入り口手前の角にある24席のタイ料理店で、2軒隣の似たタイ料理店と間違えないように。タイ人のスタッフが営業し、店内はタイ語、タイ人の客も多く、それが良いしるし。辛さは日本人向けに抑えていません。看板はヤムウンセンで、レモンの酸味、ナンプラー、パクチーのバランスが絶妙。ガパオは本場の味、トムヤムクンとココナッツの濃いグリーンカレーも好評。お得なのはランチセット(2025年は1,100円)で、単品は値上がりし、黒門価格で量が少なかったという声も。混むと提供が遅め。火曜定休。',
  });
}

// ================================================================ 若水
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27007832/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '20:00']), S = day(['11:00', '17:00']);
  put({
    id: 'osaka_wakamizu_minamihorie', name: '若水 (Wakamizu)', category: 'OMNI',
    lat: 34.672385, lng: 135.497052, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce tare; Chinese sauces; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat broth, chashu, kara-age, egg.',
    hours_raw: 'Mon–Fri 11:00–20:00 (L.O. 19:00); Sun and holidays 11:00–17:00; closed Saturday (Tabelog). Cash only — no cards or e-money (Tabelog). Counter only; fast turnover.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minami-Horie 1-1-20 — 3 min from Yotsubashi Stn (south side)',
    cuisine: 'Long-running local Chinese counter · nostalgic shoyu ramen and half portions · shio butter-corn ramen · tantanmen (half and half with shoyu ¥800) · five-dish set meal ¥1,000 · Chinese rice bowl ¥650 · Tianjin rice · gyoza · 8 counter seats',
    website: null, gmaps: gm('若水 南堀江 中華'), menu_url: null,
    notes: "[Ramen · an eight-seat machi-chuka by Yotsubashi] A long-standing, old-fashioned local Chinese counter of eight seats on the south side of Yotsubashi Station, cheap and fast, mostly men at lunch. You squeeze past each other to reach the back. The shoyu ramen has a nostalgic, slightly sweet broth, thin wavy noodles with a good bite, bean sprouts, nori and thick marinated chashu. Order it as a half to pair with something: half tantanmen and half shoyu is ¥800. There's also a shio butter-corn ramen and gyoza. The five-dish set meal (¥1,000) piles a Chinese omelette, happosai, kara-age and chashu over cabbage with rice, and a Chinese rice bowl is just ¥650. Cash only; closed Saturdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Minami-Horie, near Amerika-mura (Tabelog; reviews)', background: 'A local Chinese counter that has been around a long time (April 2026 review).', philosophy: null, specialty: 'Shoyu ramen; set meals.',
      anecdotes: [
        { text: '"The noodles are thin with a slight wave, cooked to perfection with a nice bite… The shoyu broth has a nostalgic flavor with a subtle sweetness." — April 2026, half tantanmen and half shoyu ramen ¥800.', source: R + 'B527020588/' },
        { text: '"I ordered the 5 Dishes Set Meal for JPY 1,000… a Chinese-style omelet, a mix of eight treasures (happosai), three pieces of kara-age (fried chicken), two slices of chashu." — July 2026.', source: R + 'B426801621/' },
      ],
      japanese_sources_summary: '食べログ: 若水、大阪市西区南堀江1-1-20、06-6541-8951、予約不可、月〜金11:00〜20:00(L.O.19:00)、日・祝11:00〜17:00、土曜休み、カード・電子マネー不可、8席(カウンターのみ)。2026年の口コミ(4〜10月): アメ村の町中華、5品定食1,000円(中華風オムレツ、八宝菜、唐揚げ3個、チャーシュー2枚、キャベツ)、量が多い、塩バターコーンラーメンと餃子、昔からある、天津飯と半醤油ラーメン、満席で少し待った、男性客が多く回転が早い、半担々麺と半醤油ラーメン800円(少し波打つ細麺、甘みのある懐かしい醤油、もやし、のり、厚いチャーシュー、半熟卵の担々麺)、中華丼650円、8席、安い、提供が早い、昔ながらのラーメン屋の雰囲気、つるっとした麺。',
      confidence: 'medium', sources: [TB, R + 'B527020588/', R + 'B426801621/', R + 'B526642256/', R + 'B531368176/', R + 'B537165192/', R + 'B526818773/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'wavy', hydration: null, handmade: false, notes: 'Thin, slightly wavy noodles with a good bite; slippery (April–October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'chuka soba', 'tantanmen'],
      signature_bowl: 'Shoyu ramen (half portions available) (April 2026).',
      chashu: 'Thick, well-marinated slices (April 2026).',
      notable_toppings: ['bean sprouts', 'nori', 'butter and corn (shio)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat broth and chashu.' },
      pantheon: 'Yotsubashi\'s eight-seat machi-chuka: a sweet, nostalgic shoyu in half portions beside a ¥650 chukadon.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B527020588/', '"A nostalgic flavor with a subtle sweetness" — placed low-mid.'],
        oiliness: [R + 'B537165192/', '"A comforting taste" — placed low-mid (inferred).'],
        clarity: [R + 'B527020588/', 'Classic shoyu; clarity not described — mid-scale (inferred).'],
        tare_strength: [R + 'B527020588/', 'Shoyu with "subtle sweetness" — mid-scale.'],
        noodle_firmness: [R + 'B527020588/', '"Cooked to perfection with a nice bite."'],
        aroma_punch: [R + 'B537165192/', 'Nostalgic, mild — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B527020588/', R + 'B537165192/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Tiny counter; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江1-1-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江一丁目1番20号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527020588/', R + 'B426801621/', R + 'B531368176/'],
    price_note: 'Prices from April–July 2026 reviews.', last_checked: TODAY, items: [
      it('醤油ラーメン', 'shōyu rāmen', 'Shoyu ramen (half available)', '', 'Ramen', 'no', 'no', 'April–May 2026.', 'shoyu'),
      it('', '', 'Half tantanmen and half shoyu ramen', '¥800', 'Ramen', 'no', 'no', 'April 2026.', 'han_han'),
      it('', '', 'Shio butter-corn ramen', '', 'Ramen', 'no', 'no', 'June 2026.', 'shio_butter'),
      it('', '', 'Five-dish set meal', '¥1,000', 'Set meals', 'no', 'no', 'July 2026.', 'gohin'),
      it('中華丼', 'chūkadon', 'Chinese rice bowl', '¥650', 'Rice', 'no', 'no', 'June 2026.', 'chukadon'),
      it('天津飯', 'tenshinhan', 'Tianjin rice', '', 'Rice', 'no', 'no', 'May 2026.', 'tenshin'),
      it('餃子', 'gyōza', 'Gyoza', '', 'Sides', 'no', 'no', 'June 2026.', 'gyoza'),
    ] }, {
    cuisine: '老舗の町中華のカウンター・懐かしい醤油ラーメンと半ラーメン・塩バターコーンラーメン・担々麺(半担々と半醤油で800円)・5品定食1,000円・中華丼650円・天津飯・餃子・カウンター8席',
    neighborhood: '南堀江1-1-20。四ツ橋駅(南側)から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油だれ、中華のたれ、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。肉のスープ、チャーシュー、唐揚げ、卵。',
    notes: '[ラーメン・四ツ橋の8席の町中華] 四ツ橋駅の南側にある昔ながらの8席の町中華のカウンターで、安くて早く、昼は男性客が中心。奥へは座っている人の後ろをすり抜けて。醤油ラーメンは甘みのある懐かしいスープに、コシのある少し波打つ細麺、もやし、のり、よく味のしみた厚いチャーシュー。半ラーメンにして何かと合わせるのがおすすめで、半担々と半醤油で800円。塩バターコーンラーメンや餃子も。5品定食(1,000円)は中華風オムレツ、八宝菜、唐揚げ、チャーシューがキャベツの上にご飯付きでたっぷり、中華丼はたった650円。現金のみ、土曜定休。',
  });
}

save();
