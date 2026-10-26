// Osaka sweep (2-mile circle around Dotonbori), batch 2 — ramen phase, nearest first (all OMNI).
//   + ラー麺ずんどう屋 道頓堀店 (Himeji back-fat tonkotsu chain; 24 h; opened Oct 2025)
//   + 大阪王将 道頓堀本店 (Osaka Ohsho's gyoza flagship — Tabelog tags it ramen; no ramen block)
//   + 一蘭 なんば御堂筋店 (Ichiran's "100% no tonkotsu" shop: beef-bone and chicken broth)
//   + 金龍ラーメン 御堂筋店 (Kinryū's standing yatai-style branch; smoking allowed)
// Skipped (stale or thin): 牛門ラーメン 道頓堀店, 上海タイガー, 神戸牛らーめん 麓の宮, 神戸牛ラーメン 915.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, skip, save } = openCitySweep('osaka', TODAY, 2);

skip('27144424', 'Latest reviews November 2024 (3 total); existence not confirmable for 2025–26.');
skip('27141015', 'All reviews March–April 2024; nothing since.');
skip('27133946', 'Two reviews, both January 2023.');
skip('27088624', 'Reviews 2017–2020 plus one 2024 visit and an August 2025 edit; too stale to describe.');

// ================================================================ ラー麺ずんどう屋 道頓堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27152648/'; const R = TB + 'dtlrvwlst/';
  const d = day(['00:00', '23:59']);
  put({
    id: 'osaka_zundoya_dotonbori', name: 'ラー麺ずんどう屋 道頓堀店 (Ramen Zundoya Dotonbori)', category: 'OMNI',
    lat: 34.669221, lng: 135.501963, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a pork-bone soy broth; sides include gyoza and kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth with back fat, pork-belly chashu.',
    hours_raw: 'Open 24 hours, every day (Tabelog; may change). Ticket machine in front; seating upstairs.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sōemonchō 7-6, just east of Ebisubashi — 3 min from Namba Stn',
    cuisine: 'Himeji-born back-fat tonkotsu shoyu chain · motomi ramen ¥860, ajitama ¥980, all-toppings ¥1,360 · pick back-fat level (light to extra rich) and thin or curly noodles · table pickled ginger, garlic, takana · 24 h',
    website: 'https://zundouya.com/', gmaps: gm('ラー麺ずんどう屋 道頓堀店'), menu_url: null,
    notes: "[Ramen · Himeji back-fat tonkotsu, round the clock] The Dotonbori branch, opened 31 October 2025, of Zundōya, a Himeji-founded chain with over a hundred shops (about 106 in Japan and 4 in Shanghai, per a December 2025 visitor). It sits just east of Ebisubashi and is open 24 hours. The broth is pork bone with a slightly creamy soy seasoning and as much back fat as you choose (light, regular, rich or extra rich). Noodles are house-made: ultra-thin straight (recommended) or curly. The motomi (original) ramen is ¥860, ajitama ¥980, and all-toppings up to ¥1,360; summer brought a cold ramen with grated daikon. Season at the table with pepper, pickled ginger, garlic, chili oil, sesame and takana. Buy a ticket outside (transit IC accepted) and head upstairs. A Kansai-friendly tonkotsu with a hint of sweetness.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 31 October 2025 (Tabelog)', background: 'Chain founded in Himeji (zundouya.com).', philosophy: null, specialty: 'Back-fat tonkotsu shoyu.',
      anecdotes: [
        { text: '"The broth is made from pork bone, featuring a slightly creamy soy sauce soup with added back fat… The noodles are house-made, straight, and thin, providing a pleasant texture with just the right amount of chewiness." — October 2025, opening day.', source: R + 'B516327758/' },
        { text: '"The broth is rich and fatty, yet not overwhelming, packed with meaty flavors… The firm noodles pair perfectly with the large seaweed." — May 2026, late night.', source: R + 'B528046856/' },
      ],
      japanese_sources_summary: '食べログ: ラー麺ずんどう屋 道頓堀店、大阪市中央区宗右衛門町7-6、なんば駅から277m、24時間営業、予約不可、2025年10月31日開店、公式サイト zundouya.com。口コミ(2025年10月〜2026年9月): 姫路に本店のチェーンの新店、元味らーめん860円(豚骨醤油に背脂)、極細ストレート麺2.00mm、豚バラのチャーシュー、ねぎ、海苔、メニュー(チャーシュー1,400円、味玉980円、ねぎ980円、HOT930円、全部のせ1,360円、野菜1,060円、バターコーンなど)、替え玉150円、背脂は4段階(あっさり・ふつう・こってり・こってり増し)、細麺か縮れ麺を選べる、卓上に胡椒・紅生姜・にんにく・ラー油・ごま・高菜、国内106店と上海4店、全部のせチャーシューと祭りセット(餃子と唐揚げ)、宗右衛門町、戎橋の東、関西向けの姫路豚骨でほんのり甘い、深夜にこってりでもくどくない、硬めの麺と大きな海苔、券売機で交通系ICで冷やしおろしらーめん960円、2階の店内。',
      confidence: 'medium', sources: [TB, R + 'B516327758/', R + 'B516309315/', R + 'B516387909/', R + 'B528046856/', R + 'B518376428/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['lard_seabura'], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: true, notes: 'House-made ultra-thin straight noodles (2.00 mm), or curly noodles on request (2025–26).' },
      regional_style: ['Himeji tonkotsu'], sub_genre: ['ramen'],
      signature_bowl: '元味らーめん (motomi ramen) — ¥860; 味玉らーめん ¥980 (October 2025).',
      chashu: 'Pork-belly chashu, thick and tender on the all-toppings bowl.',
      notable_toppings: ['back fat (choose the level)', 'seasoned egg', 'green onion', 'nori', 'table takana and pickled ginger'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth and back fat.' },
      pantheon: 'Himeji\'s answer to Hakata on Dotonbori\'s east side: a pork-bone soy broth whose back fat you set yourself, ultra-thin house noodles, and a table of ginger, garlic and takana, all night.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B516309315/', '"A rich pork bone-based soy sauce broth with added back fat."'],
        oiliness: [R + 'B528046856/', '"The broth is rich and fatty, yet not overwhelming"; back fat chosen from four levels (' + R + 'B516387909/).'],
        clarity: [R + 'B516327758/', '"A slightly creamy soy sauce soup with added back fat" — an opaque pork-bone broth.'],
        tare_strength: [R + 'B516327758/', '"The moderate soy sauce seasoning enhances the richness of the pork broth."'],
        noodle_firmness: [R + 'B528046856/', '"The firm noodles pair perfectly"; "ultra-thin straight noodles, measuring 2.00mm" (' + R + 'B516309315/).'],
        aroma_punch: [R + 'B522213767/', '"There was a hint of sweetness, possibly influenced by Banshu ramen"; table garlic, chili oil and takana let you add punch (' + R + 'B516327758/).'],
      },
      confidence: 'medium', sources: [R + 'B516309315/', R + 'B516327758/', R + 'B516387909/', R + 'B528046856/', R + 'B522213767/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine outside; seats upstairs.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町7-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2025–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町7番6号 (go) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B516327758/', R + 'B535690820/'],
    price_note: 'Prices from October 2025 and September 2026 reviews.', last_checked: TODAY, items: [
      it('元味らーめん', 'motomi rāmen', 'Motomi (original) ramen', '¥860', 'Ramen', 'no', 'no', 'October 2025.', 'motomi'),
      it('味玉らーめん', '', 'Ajitama ramen', '¥980', 'Ramen', 'no', 'no', 'October 2025.', 'ajitama'),
      it('全部のせらーめん', '', 'All-toppings ramen', '¥1,360', 'Ramen', 'no', 'no', 'October 2025.', 'zenbu'),
      it('冷やしおろしらーめん', '', 'Cold ramen with grated daikon (summer)', '¥960', 'Seasonal', 'no', 'no', 'September 2026.', 'hiyashi_oroshi'),
    ] }, {
    cuisine: '姫路発の背脂豚骨醤油のチェーン・元味らーめん860円、味玉980円、全部のせ1,360円・背脂の量(あっさり〜こってり増し)と細麺か縮れ麺を選べる・卓上の紅生姜、にんにく、高菜・24時間',
    neighborhood: '宗右衛門町7-6、戎橋のすぐ東。なんば駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。豚骨醤油スープに小麦の麺。餃子や唐揚げもあります。',
    vegan_detail: 'ヴィーガンではありません。背脂入りの豚骨スープ、豚バラのチャーシュー。',
    notes: '[ラーメン・24時間の姫路の背脂豚骨] 姫路発で100店を超えるチェーン(2025年12月の客によると国内約106店、上海4店)のずんどう屋の道頓堀店で、2025年10月31日開店。戎橋のすぐ東にあり24時間営業。スープは豚骨にややクリーミーな醤油の味付けで、背脂は好みで(あっさり・ふつう・こってり・こってり増し)。麺は自家製の極細ストレート(おすすめ)か縮れ麺。元味らーめんは860円、味玉は980円、全部のせは1,360円まで、夏は冷やしおろしらーめんも。卓上の胡椒、紅生姜、にんにく、ラー油、ごま、高菜で味を変えられます。店前の券売機で食券を買い(交通系IC可)、2階へ。ほんのり甘さのある関西向けの豚骨です。',
  });
}

// ================================================================ 大阪王将 道頓堀本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27069608/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '22:30']);
  put({
    id: 'osaka_osaka_ohsho_dotonbori_honten', name: '大阪王将 道頓堀本店 (Osaka Ohsho Dotonbori Honten)', category: 'OMNI',
    lat: 34.668795, lng: 135.502022, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-wrapper gyoza, fried rice and Chinese stir-fries in soy-based sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork gyoza, beef and pork stir-fries, mapo tofu, kara-age.',
    hours_raw: 'Daily 11:00–22:30 (Tabelog; may change). Touch-panel ordering and payment.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-chōme (1-6-13), on the canal — 10 min from Namba Stn',
    cuisine: 'Osaka Ohsho chain’s Dotonbori main shop · juicy gyoza · gyoza sets with fried rice or kara-age · hoikoro, mapo tofu, green-pepper beef · lu-su fried rice · 189 seats, upstairs river views',
    website: 'http://www.osaka-ohsho.com/index.html', gmaps: gm('大阪王将 道頓堀本店'), menu_url: null,
    notes: "[Gyoza · Osaka Ohsho's main shop on Dotonbori] The Dotonbori main shop of the Osaka Ohsho gyoza chain: 189 seats over two floors, with back tables upstairs looking over the canal, and touch-panel ordering and payment. The gyoza are the reason to come: juicy enough that one fan skips the dipping sauce. Sets pair them with fried rice (generous chashu), kara-age or a hoikoro set meal (¥1,320 with gyoza). The menu also has mapo tofu, green-pepper beef, chilled Chinese noodles and the punchy lu-su fried rice (¥1,200 as a gyoza set). Plain gyoza are ¥700 here, which one visitor found steep, and the service at the flagship disappointed another. Fast and easy, with a take-out counter.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 December 2012 at this site (Tabelog listing date)', background: 'Main shop of the Osaka Ohsho chain (osaka-ohsho.com).', philosophy: null, specialty: 'Gyoza.',
      anecdotes: [
        { text: '"The seat at the back on the second floor had a nice view of the Dotonbori River… enjoying it here in its hometown is truly special." — April 2026, gyoza, mapo tofu and green-pepper beef.', source: R + 'B527118204/' },
        { text: '"The gyoza here is flavorful on its own, so you don’t need any dipping sauce… The gyoza is juicy, with the meat juices bursting out like in xiaolongbao." — June 2026.', source: R + 'B530222172/' },
      ],
      japanese_sources_summary: '食べログ: 大阪王将 道頓堀本店、大阪市中央区道頓堀1-6-13、なんば駅から243m、189席、毎日11:00〜22:30、予約不可、テイクアウト可、子ども可、2012年12月7日開店、公式サイト osaka-ohsho.com。2026年の口コミ: 回鍋肉定食と餃子1,320円、2階の席、タッチパネルで注文と会計、提供が早い、餃子セットのチャーハンはチャーシューが多い、餃子・麻婆豆腐・青椒牛肉絲、2階の奥の席から道頓堀川が見える、新メニューの肉絲(ロースー)炒飯の餃子セット1,200円、本店とは知らずに入った、餃子定食と唐揚げ、タレなしでもおいしい肉汁あふれる餃子、冷やし中華、本店の接客にがっかりとの声、餃子700円は高いとの声。',
      confidence: 'medium', sources: [TB, R + 'B527118204/', R + 'B530222172/', R + 'B524205318/', R + 'B528601183/', R + 'B536739683/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Touch-panel ordering.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒542-0071 大阪府大阪市中央区道頓堀1-6-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目6番13号 (go) 4m; OSM 大阪王将 node/2326940021 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524205318/', R + 'B528601183/', R + 'B536739683/'],
    price_note: 'Prices from March–September 2026 reviews.', last_checked: TODAY, items: [
      it('餃子', 'gyōza', 'Gyoza', '¥700', 'Gyoza', 'no', 'no', 'September 2026.', 'gyoza'),
      it('回鍋肉定食と餃子', '', 'Hoikoro set meal with gyoza', '¥1,320', 'Sets', 'no', 'no', 'March 2026.', 'hoikoro_set'),
      it('肉絲炒飯 餃子セット', '', 'Lu-su fried rice gyoza set', '¥1,200', 'Sets', 'no', 'no', 'May 2026.', 'rusu_set'),
      it('麻婆豆腐', 'mābō dōfu', 'Mapo tofu', '', 'Chinese', 'no', 'no', 'April 2026.', 'mapo'),
    ] }, {
    cuisine: '大阪王将の道頓堀本店・肉汁あふれる餃子・チャーハンや唐揚げとの餃子セット・回鍋肉、麻婆豆腐、青椒牛肉絲・肉絲炒飯・189席、2階から川の眺め',
    neighborhood: '道頓堀一丁目(1-6-13)、川沿い。なんば駅から徒歩10分',
    gf_detail: 'グルテンフリーではありません。小麦の皮の餃子、チャーハン、醤油ベースの中華の炒め物。',
    vegan_detail: 'ヴィーガンではありません。豚肉の餃子、牛肉や豚肉の炒め物、麻婆豆腐、唐揚げ。',
    notes: '[餃子・道頓堀の大阪王将の本店] 餃子チェーン大阪王将の道頓堀本店で、二フロアに189席、2階の奥のテーブルからは川が見え、注文と会計はタッチパネル。目当ては餃子で、タレなしでもおいしいほど肉汁があふれます。セットはチャーシューの多いチャーハン、唐揚げ、回鍋肉定食(餃子付きで1,320円)など。麻婆豆腐、青椒牛肉絲、冷やし中華、パンチのある肉絲炒飯(餃子セットで1,200円)も。餃子単品はここでは700円で、高いと感じた客や、本店の接客にがっかりした客も。早くて気軽、持ち帰りもあります。',
  });
}

// ================================================================ 一蘭 なんば御堂筋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27112600/'; const R = TB + 'dtlrvwlst/';
  const d = day(['09:00', '22:00']);
  put({
    id: 'osaka_ichiran_namba_midosuji', name: '一蘭 なんば御堂筋店 (Ichiran Namba Midosuji)', category: 'OMNI',
    lat: 34.669296, lng: 135.500661, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the broth is built from beef bones and chicken; beef replaces pork chashu.',
    hours_raw: 'Daily 9:00–22:00 (L.O. 21:45); open year-round (Tabelog; check the official site for changes). Waits of 30–80 minutes are common; take a QR number.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashisuji 2-4-2, Gurukasu City Bldg 2F — 3 min from Namba Stn exit 14',
    cuisine: 'Ichiran’s "100% no tonkotsu" branch · creamy beef-bone and chicken broth with the red secret sauce · beef "gyūyarō" instead of pork chashu · order sheet for firmness and richness · booth counters · ¥1,280',
    website: 'https://ichiran.com/np/shop/kinki/namba-midosuji.html', gmaps: gm('一蘭 なんば御堂筋店'), menu_url: 'https://ichiran.com/np/shop/kinki/namba-midosuji.html',
    notes: "[Ramen · Ichiran's pork-free \"no tonkotsu\" shop] The one Ichiran operating under its \"100% no tonkotsu used\" concept: the familiar experience (booth counters with partitions, an order sheet, Arita-ware bowls) but a broth developed from beef bones and chicken, so people who can't eat pork can have Ichiran. Diners call it surprisingly rich and creamy, very like tonkotsu, with the signature red secret sauce. One found it lacked real tonkotsu's punch. Instead of pork chashu there's sweet-spicy seasoned beef (gyūyarō), plus soft salted egg, extra garlic and a matcha pudding. The 100% pork-free ramen was ¥1,280 in July 2026. Expect 30–80-minute waits (scan a QR code and return); a 9 am weekday arrival walked straight in. 25 seats, many overseas visitors.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 August 2019 (Tabelog)', background: 'Ichiran chain (ichiran.com); this branch uses a pork-free broth (2026 reviews).', philosophy: null, specialty: 'Pork-free tonkotsu-style ramen.',
      anecdotes: [
        { text: '"This location is quite unique among Ichiran branches, as it operates under the special concept of \'100% no tonkotsu used.\' They provide a special broth developed using beef bones and other ingredients, ensuring that those who cannot eat pork or pork bones can still enjoy the deliciousness of Ichiran." — June 2026.', source: R + 'B531864582/' },
        { text: '"100% Pork Bone-Free Ramen + Soft-Boiled Salted Egg + Extra Gyuu Yaro for JPY 1820. The \'100% Pork Bone-Free Ramen\' itself costs JPY 1280." — July 2026, right after 9 am opening.', source: R + 'B532878103/' },
      ],
      japanese_sources_summary: '食べログ: 一蘭 なんば御堂筋店、大阪市中央区心斎橋筋2-4-2 グルカスシティビル2F、なんば駅14番出口徒歩3分、25席(味集中カウンター)、毎日9:00〜22:00(L.O. 21:45)、年中無休、2019年8月8日開店、公式サイト ichiran.com。2026年の口コミ: 「とんこつ不使用100%」の店、牛骨などで開発したスープで豚や豚骨を食べられない人も楽しめる、有田焼の重箱風の器と仕切りのカウンター、とんこつのようなクリーミーさ、本物の豚骨ほどのパンチはないとの声、豚のチャーシューの代わりに甘辛い牛肉(牛野郎)、鶏ベース、赤い秘伝のたれ、抹茶プリン、とんこつ不使用ラーメン1,280円(塩ゆで卵と牛野郎追加で1,820円)、平日9時の開店直後は並ばず、80分待ちの案内やQRでの順番待ち、30分以上待つ、海外からの客が多い、注文用紙で麺の硬さを選ぶ、にんにく追加。',
      confidence: 'high', sources: [TB, R + 'B531864582/', R + 'B532878103/', R + 'B527974467/', R + 'B519069446/', R + 'B429355331/'] },
    ramen: {
      broth_base: ['beef', 'chicken'], broth_texture: 'paitan', tare: ['other'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Firmness chosen on the order sheet (one diner chose firm, usually extra hard) (December 2025).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'とんこつ不使用100%ラーメン (100% pork-free ramen) — ¥1,280 (July 2026).',
      chashu: 'No pork chashu: sweet-spicy seasoned beef ("gyūyarō") instead.',
      notable_toppings: ['red secret sauce', 'gyūyarō beef', 'soft salted egg', 'garlic', 'white and green onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Beef-bone and chicken broth; beef topping.' },
      pantheon: 'Ichiran for people who can\'t eat pork: the booths, the order sheet and the red secret sauce over a creamy broth rebuilt from beef bones and chicken, with sweet-spicy beef where the chashu would be.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B527974467/', '"The flavor was surprisingly rich and creamy."'],
        oiliness: [R + 'B531864582/', 'No source mentions oil directly; placed mid-scale from the "astonishing creaminess and smoothness reminiscent of tonkotsu".'],
        clarity: [R + 'B531864582/', '"An astonishing creaminess and smoothness reminiscent of tonkotsu" — an opaque broth.'],
        tare_strength: [R + 'B527974467/', '"The unique \'red secret sauce\' was perfectly balanced."'],
        noodle_firmness: [R + 'B429355331/', 'Firmness is chosen on the order sheet: "while I usually go for extra hard noodles, this time I opted for firm."'],
        aroma_punch: [R + 'B531864582/', '"I felt it lacked the punch that real tonkotsu ramen offers"; garlic can be added (' + R + 'B429355331/).'],
      },
      confidence: 'medium', sources: [R + 'B527974467/', R + 'B531864582/', R + 'B429355331/', R + 'B532878103/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order sheet; booth seating; QR queue numbers.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [{ text: 'Pork-free broth ("100% no tonkotsu used") for diners who avoid pork.', source: R + 'B531864582/' }], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-4-2 グルカスシティビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated December 2025–July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目4番2号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532878103/'],
    price_note: 'Price from a July 2026 review.', last_checked: TODAY, items: [
      it('とんこつ不使用100%ラーメン', '', '100% pork-free ramen (beef-bone and chicken broth)', '¥1,280', 'Ramen', 'no', 'no', 'July 2026.', 'porkfree_ramen'),
      it('牛野郎', 'gyūyarō', 'Sweet-spicy seasoned beef topping', '', 'Toppings', 'ask', 'no', 'July 2026.', 'gyuyaro'),
      it('抹茶プリン', '', 'Matcha pudding', '', 'Dessert', 'ask', 'no', 'May 2026.', 'matcha_pudding'),
    ] }, {
    cuisine: '一蘭の「とんこつ不使用100%」の店・赤い秘伝のたれの牛骨と鶏のクリーミーなスープ・豚のチャーシューの代わりに牛肉「牛野郎」・注文用紙で硬さやこってり度・仕切りのカウンター・1,280円',
    neighborhood: '心斎橋筋2-4-2 グルカスシティビル2F。なんば駅14番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。スープは牛骨と鶏、チャーシューの代わりは牛肉。',
    notes: '[ラーメン・豚を使わない一蘭の「とんこつ不使用」の店] 一蘭で唯一「とんこつ不使用100%」の形で営業する店。仕切りのカウンター、注文用紙、有田焼の器はいつもどおりで、スープは牛骨と鶏で開発したもの。豚を食べられない人も一蘭を楽しめます。客の評価は、意外なほど濃厚でクリーミー、とんこつにそっくりで、赤い秘伝のたれも健在。本物の豚骨ほどのパンチはないという声も。豚のチャーシューの代わりに甘辛い牛肉(牛野郎)、塩ゆで卵、にんにく追加、抹茶プリンも。とんこつ不使用ラーメンは2026年7月で1,280円。30〜80分待ちはよくあり(QRコードで順番を取って出直す)、平日朝9時の開店直後はすぐ入れた例も。25席、海外からの客が多い。',
  });
}

// ================================================================ 金龍ラーメン 御堂筋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27005074/'; const R = TB + 'dtlrvwlst/';
  const d = day(['00:00', '23:59']);
  put({
    id: 'osaka_kinryu_ramen_midosuji', name: '金龍ラーメン 御堂筋店 (Kinryu Ramen Midosuji)', category: 'OMNI',
    lat: 34.668085, lng: 135.500605, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a pork-bone broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chashu.',
    hours_raw: 'Open 24 hours, every day (Tabelog; may change). Ticket machine; mostly standing. Smoking allowed (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-7-12, on Midōsuji under the big dragon sign — 3 min from Namba Stn',
    cuisine: 'Kinryū’s yatai-style standing branch on Midōsuji · light tonkotsu ramen ¥900 · free kimchi, garlic and garlic chives · open kitchen, pavement-side tables · 24 h · smoking allowed',
    website: null, gmaps: gm('金龍ラーメン 御堂筋店'), menu_url: null,
    notes: "[Ramen · Kinryū's standing yatai on Midōsuji] One of Kinryū's several Namba shops, under a big dragon sign on Midōsuji. It's done in a food-stall style: buy a ticket, then mostly stand at the counter or use the tables by the pavement, with the kitchen in full view. Like the Dotonbori shop, it serves a simple tonkotsu ramen (¥900) that most find lighter than its strong pork aroma suggests, plus free kimchi, garlic and garlic chives to pile on. A seven-time visitor praises the old-school simplicity of a shop that has served for over 35 years; a first-timer was underwhelmed. Turnover is quick and it's open 24 hours, handy at 2 am. Smoking is allowed (Tabelog).",
    chef_bio: { chef_name: null, roles: [], origin: 'Midōsuji branch of Kinryū Ramen (Tabelog listing name)', background: 'Multi-shop Minami brand; see also the Dotonbori shop.', philosophy: null, specialty: 'Tonkotsu ramen with free kimchi and garlic chives.',
      anecdotes: [
        { text: '"The Midosuji branch has a food stall style. You buy a ticket and eat standing up!" — October 2026, Saturday 3 pm.', source: R + 'B537678241/' },
        { text: '"Compared to the strong aroma of the tonkotsu (pork bone) broth, the flavor was not as rich as I expected… It was amusing to see the garlic and kimchi served in generous portions." — September 2026, around 2 am.', source: R + 'B536595461/' },
      ],
      japanese_sources_summary: '食べログ: 金龍ラーメン 御堂筋店、大阪市中央区難波1-7-12、なんば駅徒歩3分、24時間営業、予約不可、喫煙可、カウンター。2026年の口コミ: 35年以上続く店、昔ながらのシンプルな味、にんにく・キムチ・ニラは自分で、豚骨の濃さを感じず期待外れとの声、セルフのにんにくと辛ニラ、大きな龍の看板、立ち食い、ラーメン900円、豚骨ベースで見た目よりあっさり、深夜2時でも回転が早い、歩道沿いのテーブルとオープンキッチン、無料のキムチ・にんにく・ニラ、チャーシューがおいしい、濃厚なのにさっぱり、屋台スタイルで食券を買って立って食べる。',
      confidence: 'medium', sources: [TB, R + 'B537678241/', R + 'B536595461/', R + 'B536561246/', R + 'B490353361/', R + 'B537370878/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'unknown', tare: ['other'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: '"The noodles, which absorbed the flavorful soup, were delicious" (October 2026); thickness not described.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'ラーメン (ramen) — ¥900 (September–October 2026).',
      chashu: 'Chashu ("delicious", October 2026).',
      notable_toppings: ['free kimchi', 'free garlic', 'free garlic chives'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Kinryū at its most street-food: a ticket, a standing counter on Midōsuji and a light pork-bone bowl that smells stronger than it tastes until the free kimchi and garlic chives go in.',
      profile: { richness: 2, oiliness: 2, clarity: 2, tare_strength: 2, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536561246/', '"The tonkotsu-based broth is lighter than it looks"; "I didn’t really taste the rich pork flavor" (' + R + 'B535411051/).'],
        oiliness: [R + 'B537370878/', '"The rich yet refreshing broth was perfect for a late-night meal."'],
        clarity: [R + 'B536561246/', 'A tonkotsu-based broth "lighter than it looks"; no source says it is clear.'],
        tare_strength: [R + 'B490353361/', '"The base ramen is quite ordinary… this simple flavor is hard to find these days."'],
        noodle_firmness: [R + 'B537370878/', '"The noodles, which absorbed the flavorful soup, were delicious"; firmness not described, placed mid-scale.'],
        aroma_punch: [R + 'B536595461/', '"The strong aroma of the tonkotsu (pork bone) broth"; garlic and kimchi "served in generous portions".'],
      },
      confidence: 'medium', sources: [R + 'B536561246/', R + 'B537370878/', R + 'B536595461/', R + 'B490353361/', R + 'B535411051/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; standing counter; smoking allowed.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-7-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目7番12号 (go) 5m; OSM 金龍ラーメン node/2125083243 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536561246/', R + 'B537306473/'],
    price_note: 'Price from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('ラーメン', 'rāmen', 'Ramen', '¥900', 'Ramen', 'no', 'no', 'October 2026.', 'ramen'),
    ] }, {
    cuisine: '御堂筋の金龍の屋台風の立ち食い店・あっさり豚骨ラーメン900円・キムチ、にんにく、ニラは無料・オープンキッチン、歩道沿いのテーブル・24時間・喫煙可',
    neighborhood: '難波1-7-12、御堂筋沿いの大きな龍の看板の下。なんば駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。豚骨スープに小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー。',
    notes: '[ラーメン・御堂筋の金龍の立ち食い屋台] ミナミにいくつかある金龍ラーメンの一つで、御堂筋沿いの大きな龍の看板の下。屋台風で、食券を買って主にカウンターで立って食べるか歩道沿いのテーブルで、厨房は丸見えです。道頓堀店と同じく、強い豚骨の香りの割にあっさりと感じる人が多いシンプルな豚骨ラーメン(900円)に、無料のキムチ、にんにく、ニラをたっぷり。7回通う客は35年以上続く店の昔ながらの素朴さを評価し、初めての客は期待外れだったとも。回転が早く24時間営業で、深夜2時にも便利。喫煙可(食べログ)。',
  });
}

save();
