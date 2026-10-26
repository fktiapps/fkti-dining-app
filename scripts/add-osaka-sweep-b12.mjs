// Osaka sweep (2-mile circle around Dotonbori), batch 12 — ramen phase, nearest first (all OMNI).
//   + 古潭 なんばウォーク中央店 (Osaka's old-school Kotan chain in Namba Walk; pin chōme-level only)
//   + 河童ラーメン本舗 千日前本店 (back-fat tonkotsu shoyu, 24 h, free kimchi and garlic)
//   + 麺屋ガテン なんば心斎橋 総本店 (Jirō-style mazesoba; cash only; smoking allowed)
//   + 金龍ラーメン 本店 (the original Kinryu, 24 h, free kimchi, garlic, chives and rice)
// Skipped: 中華居酒屋 ねこや (27088662) — newest review April 2025.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, skip, save } = openCitySweep('osaka', TODAY, 12);

skip('27088662', 'Newest of 32 reviews is April 2025; hours are announced on Instagram stories only. Too stale to describe.');
const H24 = day(['00:00', '23:59']);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });

// ================================================================ 古潭 なんばウォーク中央店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27002796/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kotan_namba_walk', name: '古潭 なんばウォーク中央店 (Kotan Namba Walk)', category: 'OMNI',
    lat: 34.666967, lng: 135.500798, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza, shrimp tempura, spring rolls, croquettes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu, meat broth.',
    hours_raw: 'Daily 11:00–21:30; closed the third Tuesday of each month (Tabelog). Cards and e-money accepted. App coupons (March 2026).',
    hours: ALL(day(['11:00', '21:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Walk (underground), Niji-no-Machi 2-bangai south street — under a minute from the Midōsuji Line north gates at Namba',
    cuisine: 'Old-school Osaka Kotan ramen (shoyu or shio) with chashu, bean sprouts and carrot · pork-belly Kotan ¥950 · seasoned egg +¥120 · spicy cold noodles ¥980 · wonton noodles · fried rice, gyoza · lunch sets · sesame on the table',
    website: 'http://ramen-kotan.co.jp/', gmaps: gm('古潭 なんばウォーク中央店'), menu_url: null,
    notes: "[Ramen · Osaka's old-school Kotan under Namba] A bright, 33-seat Kotan in the Namba Walk underground mall, steps from the Midōsuji Line, and for many Osakans the taste of childhood. The Kotan ramen comes in shoyu (soy-forward but not heavy) or shio (a light yet rich white broth), with thin noodles, chashu, bean sprouts, carrot and green onion. Regulars shower it in sesame from the table. The pork-belly Kotan is ¥950, a seasoned egg adds ¥120, and the spicy cold noodles with kimchi are ¥980 (September 2026). There are wonton noodles, and lunch sets with fried rice, gyoza or a croquette. Food comes fast, often in two minutes. A brisk hall manager in thick Osaka dialect keeps it moving.",
    chef_bio: { chef_name: null, roles: [], origin: 'Namba Walk Central branch (Tabelog listing name)', background: 'Kotan, a local Osaka ramen and Chinese chain (ramen-kotan.co.jp); a September 2026 reviewer compares it to Tokyo\'s Hidakaya.', philosophy: null, specialty: 'Kotan ramen.',
      anecdotes: [
        { text: '"Kotan, located in Namba Walk, has been my go-to ramen spot for decades… the Pork Belly Kotan, priced at JPY 950, with a seasoned egg topping for an additional JPY 120." — September 2026.', source: R + 'B434550445/' },
        { text: '"The \'Kotan Ramen (Salt)\' featured a light yet rich white broth filled with bean sprouts, carrots, green onions, and plenty of chashu. The gentle saltiness paired perfectly with the thin noodles." — August 2026.', source: R + 'B534813188/' },
      ],
      japanese_sources_summary: '食べログ: 古潭 なんばウォーク中央店、大阪市中央区難波1丁目 なんばウォーク虹の街2番街南通り、33席、毎日11:00〜21:30、第3火曜定休、禁煙、カード・電子マネー可、公式 ramen-kotan.co.jp。店の紹介: アジアンな明るい店、ラーメンと餃子・海老天・春巻のセット。2025〜2026年の口コミ: 何十年も通う、バラ肉古潭950円、味玉120円(以前は半分付いていた)、ピリ辛冷麺980円とキムチ、ごまをたっぷり、古潭醤油ラーメン、2分で出てくる、アプリのクーポンで生野菜のトッピング、冷やしラーメン(サラダチキンとキムチ)、塩はあっさりで濃厚な白いスープ・もやし・人参・ねぎ・チャーシュー・細麺、ふわふわの炒飯、餃子、ランチセット(小ラーメン、小炒飯、野菜コロッケ)、ワンタン麺、大阪弁のホール責任者、阪神優勝の日。',
      confidence: 'medium', sources: [TB, R + 'B434550445/', R + 'B534813188/', R + 'B498086614/', R + 'B536153988/', R + 'B535919764/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin noodles (August 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '古潭ラーメン (Kotan ramen), shoyu or shio; pork-belly Kotan ¥950 (September 2026).',
      chashu: 'Chashu; pork-belly chashu on the pork-belly Kotan.',
      notable_toppings: ['bean sprouts', 'carrot', 'green onion', 'sesame (table)', 'seasoned egg +¥120'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chashu; meat broth.' },
      pantheon: 'The Osaka childhood bowl under Namba: Kotan\'s light soy or salt ramen with sprouts, carrot and chashu, buried in table sesame.',
      profile: { richness: 2, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B534813188/', '"A light yet rich white broth."'],
        oiliness: [R + 'B536153988/', '"Not overly heavy" — placed low (inferred).'],
        clarity: [R + 'B534813188/', '"White broth" (shio) — opaque.'],
        tare_strength: [R + 'B536153988/', '"The broth was rich in soy sauce flavor but not overly heavy—just a bit stronger than what I\'m used to as a Tokyoite."'],
        noodle_firmness: [R + 'B534813188/', 'Thin noodles; firmness not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B536895875/', '"Classic and simple ramen from Osaka" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B534813188/', R + 'B536153988/', R + 'B434550445/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Busy, fast underground chain shop.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区難波1丁目 なんばウォーク虹の街 2番街南通り',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI resolves the underground-mall address only to 大阪府大阪市中央区難波一丁目 (chōme, 110m) and OSM has no match, so the pin rests on the Tabelog point alone; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B434550445/'],
    price_note: 'Prices from a September 2026 review.', last_checked: TODAY, items: [
      it('古潭ラーメン', 'kotan rāmen', 'Kotan ramen (shoyu or shio)', '', 'Ramen', 'no', 'no', 'August 2026.', 'kotan'),
      it('バラ肉古潭', '', 'Pork-belly Kotan ramen', '¥950', 'Ramen', 'no', 'no', 'September 2026.', 'bara_kotan'),
      it('味玉', 'ajitama', 'Seasoned egg', '¥120', 'Toppings', 'gf', 'no', 'September 2026.', 'ajitama'),
      it('ピリ辛冷麺', '', 'Spicy cold noodles with kimchi', '¥980', 'Noodles', 'no', 'no', 'September 2026.', 'pirikara_reimen'),
      it('ワンタン麺', 'wantan-men', 'Wonton noodles', '', 'Ramen', 'no', 'no', 'September 2026.', 'wonton'),
      it('炒飯', 'chāhan', 'Fried rice', '', 'Rice', 'no', 'no', 'August 2026.', 'chahan'),
    ] }, {
    cuisine: '大阪の昔ながらの古潭ラーメン(醤油か塩)、チャーシュー、もやし、人参・バラ肉古潭950円・味玉120円・ピリ辛冷麺980円・ワンタン麺・炒飯、餃子・ランチセット・卓上のごま',
    neighborhood: 'なんばウォーク(地下街)虹の街2番街南通り。なんば駅の御堂筋線北改札から1分以内',
    gf_detail: 'グルテンフリーではありません。小麦の麺。餃子、海老天、春巻、コロッケも。',
    vegan_detail: 'ヴィーガンではありません。チャーシュー、肉のスープ。',
    notes: '[ラーメン・なんば地下の昔ながらの古潭] 御堂筋線からすぐのなんばウォークにある明るい33席の古潭で、多くの大阪人にとって子どもの頃の味。古潭ラーメンは醤油(醤油がしっかり、でも重くない)か塩(あっさりなのに濃厚な白いスープ)で、細麺にチャーシュー、もやし、人参、ねぎ。常連は卓上のごまをたっぷりかけます。バラ肉古潭は950円、味玉は120円、キムチ入りのピリ辛冷麺は980円(2026年9月)。ワンタン麺や、炒飯、餃子、コロッケ付きのランチセットも。2分で出てくることも多く、大阪弁のきびきびしたホール責任者が店を回しています。',
  });
}

// ================================================================ 河童ラーメン本舗 千日前本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27004248/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'http://www.kappa-hompo.co.jp/';
  put({
    id: 'osaka_kappa_ramen_honpo_sennichimae', name: '河童ラーメン本舗 千日前本店 (Kappa Ramen Honpo Sennichimae)', category: 'OMNI',
    lat: 34.667379, lng: 135.503431, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles in a soy-tonkotsu broth. The company publishes an allergy page (kappa-hompo.co.jp).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth and back fat, chashu.',
    hours_raw: 'Open 24 hours (Tabelog). Free extra noodles 6:00–18:00 at this shop (Tabelog). Touch-panel ticket machines inside on the right; the left one takes mobile payment.',
    hours: ALL(H24), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-9-12, Tomato Bldg 1F, on Sennichimae-dōri between Namba and Nippombashi',
    cuisine: 'Back-fat tonkotsu shoyu ("koi-me" rich, or "assari" with seafood oil) · house-made thin straight noodles, 7 firmness levels · Kappa ramen ¥930 · free kimchi and fried garlic · free kaedama 6:00–18:00 · kara-age and rice ¥350 · limited black tsukimi ramen ¥1,100 · 24 h',
    website: OWN, gmaps: gm('河童ラーメン本舗 千日前本店'), menu_url: null,
    notes: "[Ramen · Kappa's 24-hour back-fat shoyu tonkotsu on Sennichimae] The main shop of Kappa Ramen Honpo, a 27-seat counter on Sennichimae-dōri, open around the clock. The pork-bone broth comes two ways: koi-me, sweet with back fat, or assari, lifted with a seafood oil. House-made thin straight noodles have seven firmness levels. A standard Kappa ramen is ¥930, and kimchi and fried garlic are free, as are extra noodles from 6 am to 6 pm. Regulars add the kara-age and rice (¥350). September 2026 brought a limited, squid-ink-black tsukimi ramen (¥1,100). Order on the touch-panel machines inside the hard-to-spot entrance. One regular found the koi-me too strong at this branch.",
    chef_bio: { chef_name: null, roles: [], origin: 'Sennichimae main shop (Tabelog listing name)', background: 'Kappa Ramen Honpo chain (kappa-hompo.co.jp), which bills itself as the originator of back-fat shoyu tonkotsu (元祖背あぶら醤油とんこつラーメン).', philosophy: '「たかがラーメン、されどラーメン」 (official site).', specialty: 'Back-fat shoyu tonkotsu.',
      anecdotes: [
        { text: '"For just JPY 930, I got a regular ramen with free fried garlic, kimchi, and an extra noodle serving." — October 2026.', source: R + 'B475006073/' },
        { text: '"The Kappa Ramen, while based on a pork bone soy sauce broth, has a light version that incorporates seafood-flavored oil, making it easy to enjoy while still savoring the richness of the pork." — October 2026.', source: R + 'B519782991/' },
      ],
      japanese_sources_summary: '食べログ: 河童ラーメン本舗 千日前本店、大阪市中央区千日前1-9-12 トマトビル1F、27席(カウンターのみ)、24時間営業、禁煙、カード・電子マネー・QR決済可、公式 kappa-hompo.co.jp。店の紹介: 背脂豚骨醤油の専門店、背脂の甘みの「こいめ」と魚介油の「あっさり」、自家製の細ストレート麺は「粉落とし」から「バリやわ」まで7段階、キムチと揚げにんにく無料、千日前店は6時〜18時替玉無料。公式: 元祖背あぶら醤油とんこつラーメン、アレルギーへの配慮のページ。2025〜2026年の口コミ: 河童ラーメン(こいめ)930円、唐揚げと白ご飯350円、タッチパネルの券売機2台(左はモバイル決済)、こいめが濃すぎたという声、あっさりと唐揚げセット、平日の炒飯半分セット1,000円はなかった、月見ラーメン1,100円(9月1日からの限定、イカ墨の黒)、海苔150円、白ご飯220円、深夜3時でも客が来る、外国人スタッフ、炒飯と餃子、黒河童(にんにく油)。',
      confidence: 'medium', sources: [TB, OWN, R + 'B475006073/', R + 'B519782991/', R + 'B431558095/', R + 'B444538635/', R + 'B436554929/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['lard_seabura'], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: true, notes: 'House-made thin straight noodles, seven firmness levels from konaotoshi to bari-yawa (Tabelog).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '河童ラーメン (Kappa ramen) ¥930, koi-me or assari (September–October 2026).',
      chashu: 'Chashu (not described in detail).',
      notable_toppings: ['free kimchi', 'free fried garlic', 'pork back fat', 'seafood oil (assari)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Sennichimae\'s 24-hour back-fat soy tonkotsu: sweet koi-me or seafood-oil assari, thin noodles at seven firmnesses, free kimchi and fried garlic.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B431558095/', 'The "Koi-me" (rich flavor) "was a bit too strong"; assari is lighter (' + R + 'B519782991/).'],
        oiliness: [TB, 'Tabelog introduction: "Koi-me" with the sweetness of back fat; back-fat tonkotsu shoyu specialty.'],
        clarity: [R + 'B519782991/', 'Pork-bone soy sauce broth with back fat — opaque.'],
        tare_strength: [R + 'B431558095/', '"The \'Koi-me\' (rich flavor) I ordered this time was a bit too strong."'],
        noodle_firmness: [TB, 'Seven firmness levels to choose from; thin noodles — mid-scale by default.'],
        aroma_punch: [R + 'B475006073/', 'Free fried garlic and kimchi at the counter.'],
      },
      confidence: 'medium', sources: [R + 'B431558095/', R + 'B519782991/', R + 'B475006073/', TB], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Touch-panel ticket machines; counter only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-9-12 トマトビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目9番12号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B475006073/', R + 'B431558095/', R + 'B444538635/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('河童ラーメン', 'kappa rāmen', 'Kappa ramen (koi-me or assari)', '¥930', 'Ramen', 'no', 'no', 'September–October 2026; free kaedama 6:00–18:00.', 'kappa'),
      it('月見ラーメン', 'tsukimi rāmen', 'Tsukimi ramen (limited, squid-ink black)', '¥1,100', 'Seasonal', 'no', 'no', 'From 1 September 2026.', 'tsukimi'),
      it('', '', 'Kara-age and white rice', '¥350', 'Sets', 'no', 'no', 'September 2026.', 'karaage_rice'),
      it('ご飯', 'gohan', 'White rice (regular)', '¥220', 'Rice', 'gf', 'vegan', 'September 2026.', 'rice'),
      it('海苔', 'nori', 'Nori', '¥150', 'Toppings', 'gf', 'vegan', 'September 2026.', 'nori'),
    ] }, {
    cuisine: '背脂豚骨醤油(背脂の甘みの「こいめ」か魚介油の「あっさり」)・自家製の細ストレート麺、硬さ7段階・河童ラーメン930円・キムチと揚げにんにく無料・6時〜18時替玉無料・唐揚げとご飯350円・限定の黒い月見ラーメン1,100円・24時間',
    neighborhood: '千日前1-9-12 トマトビル1F、なんばと日本橋の間の千日前通り沿い',
    gf_detail: 'グルテンフリーではありません。醤油豚骨スープに自家製の小麦の麺。会社のサイトにアレルギーのページがあります(kappa-hompo.co.jp)。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープと背脂、チャーシュー。',
    notes: '[ラーメン・千日前の24時間の河童の背脂醤油豚骨] 河童ラーメン本舗の本店で、千日前通り沿いの27席のカウンター、24時間営業。豚骨スープは背脂の甘みの「こいめ」と、魚介油の「あっさり」の2種類。自家製の細ストレート麺は硬さ7段階。普通の河童ラーメンは930円で、キムチと揚げにんにくは無料、替玉も朝6時から夕方6時まで無料。常連は唐揚げとご飯(350円)も。2026年9月はイカ墨で黒い限定の月見ラーメン(1,100円)。わかりにくい入口から入り、タッチパネルの券売機で注文を。この店のこいめは濃すぎたという常連も。',
  });
}

// ================================================================ 麺屋ガテン なんば心斎橋 総本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27070905/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_menya_gaten_namba_shinsaibashi', name: '麺屋ガテン なんば心斎橋 総本店 (Menya Gaten)', category: 'OMNI',
    lat: 34.669648, lng: 135.498919, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork fat, chashu; chicken paitan; egg soup.',
    hours_raw: 'Lunch (last entry 15:00) and dinner (last entry 22:00 Mon–Thu, 22:30 Fri–Sun and holidays); no regular closing day, New Year break possible (Tabelog). Opening times are not listed. Cash only; smoking allowed (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 2-7-28, Manjufuku Bldg 1F (Amerikamura)',
    cuisine: 'Jirō-style "MAZE soba" with thick chewy noodles (150–300 g) · call extra vegetables, fat and garlic · curry mazesoba · DX chicken paitan ramen ¥1,400 · thick chashu · free self-serve kimchi and egg soup · gyoza · cash only',
    website: null, gmaps: gm('麺屋ガテン なんば心斎橋 総本店'), menu_url: null,
    notes: "[Ramen · Jirō-style mazesoba in Amerikamura] The 15-seat head shop of Menya Gaten, since 2013, built on a Jirō-style \"MAZE soba\": thick, chewy, firm noodles (150 g up to 300 g) under vegetables, thick-cut chashu, fat and garlic, all scaled when you hand over your ticket. Mix it hard (one diner flipped it, \"tenchi gaeshi\"), and add mayo halfway. There's a curry mazesoba with a decent kick, and a DX chicken paitan ramen (¥1,400, August 2026) with tender thick chashu that won over a paitan fan. Kimchi and egg soup are free and self-serve, when they haven't run out. Some find the mazesoba merely salty without Jirō-style depth. Cash only, smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 14 February 2013 (Tabelog)', background: 'Head shop (総本店) of Menya Gaten (Tabelog listing name).', philosophy: null, specialty: 'Jirō-style mazesoba.',
      anecdotes: [
        { text: '"When I handed over the ticket, I made my order with extra noodles, lots of vegetables, extra fat, and garlic… I managed with a technique called \'tenchi gaeshi\' (flipping it over)." — October 2026, curry mazesoba.', source: R + 'B515272849/' },
        { text: '"I was expecting the typical \'washi-washi\' noodles found in Jiro-style ramen, but instead, I encountered thick noodles that were chewy and slightly firm." — September 2026.', source: R + 'B536014193/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋ガテン なんば心斎橋 総本店、大阪市中央区西心斎橋2-7-28 萬壽福ビル1F、15席、ランチは15:00まで入店、ディナーは月〜木22:00・金〜日祝22:30まで入店、定休日なし(年末年始は休みの場合あり)、カード・電子マネー・QR決済不可、喫煙可、2013年2月14日開店。2025〜2026年の口コミ: カレーまぜそば(麺増し、野菜多め、脂多め、にんにく)、無料のキムチとスープは売り切れのことも、天地返し、マヨネーズ、MAZEそば150g・にんにく普通・油少なめ、硬い麺は味噌煮込みうどんのよう、餃子、DX鶏白湯ラーメン1,400円と厚いチャーシュー、MAZEそば300g脂多め、二郎系のわしわし麺ではなくもちもちの太麺、塩辛いだけという声、サウナの後、キムチとスープは食べ放題・飲み放題、野菜多めで味が薄くなった。',
      confidence: 'medium', sources: [TB, R + 'B515272849/', R + 'B536014193/', R + 'B534975027/', R + 'B534696151/', R + 'B537433884/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick, chewy, slightly firm noodles, 150–300 g (2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba', 'jiro_kei'],
      signature_bowl: 'MAZEそば (MAZE soba), Jirō-style; DX chicken paitan ramen ¥1,400 (August 2026).',
      chashu: 'Thick-cut chashu ("fantastic", October 2026).',
      notable_toppings: ['vegetables (call)', 'back fat (call)', 'garlic (call)', 'mayonnaise', 'free kimchi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork fat and chashu.' },
      pantheon: 'Amerikamura\'s Jirō-style mixed bowl: thick, chewy noodles under a called-out heap of vegetables, fat and garlic, flipped and mixed hard.',
      profile: { richness: 4, oiliness: 4, clarity: 3, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537433884/', '"For those who love Mazesoba, the rich flavor is irresistible!"'],
        oiliness: [R + 'B515272849/', 'Fat is called as a topping ("extra fat"); "less oil" can be requested (' + R + 'B534696151/).'],
        clarity: [R + 'B534696151/', 'A soupless mixed noodle — clarity does not apply; neutral mid-scale (inferred).'],
        tare_strength: [R + 'B536014193/', '"Just a monotonous saltiness that stood out"; "a slightly strong saltiness" (' + R + 'B537477670/).'],
        noodle_firmness: [R + 'B534696151/', '"What stands out the most is the firm texture of the noodles."'],
        aroma_punch: [R + 'B515272849/', 'Garlic called as a topping; curry version "had a decent level of spiciness".'],
      },
      confidence: 'medium', sources: [R + 'B534696151/', R + 'B536014193/', R + 'B515272849/', R + 'B537433884/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine, then call your toppings (vegetables, fat, garlic); cash only; smoking allowed.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-7-28 萬壽福ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目7番28号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534975027/', R + 'B515272849/'],
    price_note: 'One price from an August 2026 review.', last_checked: TODAY, items: [
      it('MAZEそば', 'maze soba', 'MAZE soba (Jirō-style mixed noodles), 150–300 g', '', 'Noodles', 'no', 'no', 'August–October 2026.', 'maze_soba'),
      it('カレーまぜそば', '', 'Curry mazesoba', '', 'Noodles', 'no', 'no', 'October 2026.', 'curry_maze'),
      it('DX鶏白湯ラーメン', '', 'DX chicken paitan ramen', '¥1,400', 'Ramen', 'no', 'no', 'August 2026.', 'dx_toripaitan'),
      it('餃子', 'gyōza', 'Gyoza', '', 'Sides', 'no', 'no', 'August 2026.', 'gyoza'),
    ] }, {
    cuisine: '二郎系の「MAZEそば」、もちもちの太麺(150〜300g)・野菜、脂、にんにくのコール・カレーまぜそば・DX鶏白湯ラーメン1,400円・厚いチャーシュー・無料でセルフのキムチと玉子スープ・餃子・現金のみ',
    neighborhood: '西心斎橋2-7-28 萬壽福ビル1F(アメリカ村)',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、餃子。',
    vegan_detail: 'ヴィーガンではありません。豚の脂、チャーシュー、鶏白湯、玉子スープ。',
    notes: '[ラーメン・アメ村の二郎系まぜそば] 2013年からの麺屋ガテンの15席の総本店で、二郎系の「MAZEそば」が看板。もちもちで硬めの太麺(150gから300g)に野菜、厚切りチャーシュー、脂、にんにくをのせ、食券を渡すときに量をコールします。よく混ぜて(「天地返し」した客も)、途中でマヨネーズを。辛さのしっかりしたカレーまぜそばや、やわらかい厚切りチャーシューのDX鶏白湯ラーメン(1,400円、2026年8月)も鶏白湯好きに好評。キムチと玉子スープは無料のセルフで、売り切れていなければ。まぜそばは塩辛いだけで二郎系の深みがないという声も。現金のみ、喫煙可。',
  });
}

// ================================================================ 金龍ラーメン 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27014916/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kinryu_ramen_honten', name: '金龍ラーメン 本店 (Kinryu Ramen Honten)', category: 'OMNI',
    lat: 34.668861, lng: 135.504373, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chashu.',
    hours_raw: 'Open 24 hours (Tabelog); part of the seating closes late at night. Ticket machine. Cash only; smoking allowed (Tabelog).',
    hours: ALL(H24), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-1-18, the eastern end of Dotonbori by Sakaisuji — 5 min from Namba Stn',
    cuisine: 'The original Kinryu: light Osaka tonkotsu · chashu ramen piled with pork · free kimchi, garlic and garlic chives · free rice instead of kaedama · 24 h · standing space',
    website: null, gmaps: gm('金龍ラーメン 本店'), menu_url: null,
    notes: "[Ramen · the original Kinryu at the east end of Dotonbori] The main shop of the Kinryu dragon-sign chain, a 38-place counter with standing space at the Sakaisuji end of Dotonbori, open 24 hours. The bowl is Osaka's light tonkotsu, much lighter than Kyushu-style and easy to finish, with generous chashu. Even the plain ramen carries several slices and trimmings, and the chashu ramen piles it on. The ritual is unchanged for half a century, as one diner put it: free kimchi, garlic and garlic chives to load in as you like, plus free rice in place of extra noodles. Waits run 10–30 minutes at busy times. Buy a ticket first. Cash only, smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Kinryu main shop (Tabelog listing name)', background: 'Main shop of Kinryu Ramen; a September 2026 reviewer says the free garlic, chives and kimchi have "remained unchanged for half a century".', philosophy: null, specialty: 'Light Osaka tonkotsu with free kimchi and garlic.',
      anecdotes: [
        { text: '"Unlimited toppings of garlic, chives, and kimchi have remained unchanged for half a century." — September 2026, after a 10-minute wait.', source: R + 'B447787742/' },
        { text: '"This famous tonkotsu ramen shop in Osaka offers a lighter flavor compared to Kyushu-style tonkotsu ramen… Instead of extra noodles, you can enjoy all-you-can-eat rice." — November 2025.', source: R + 'B520089292/' },
      ],
      japanese_sources_summary: '食べログ: 金龍ラーメン 本店、大阪市中央区道頓堀1-1-18、38席(立ち席あり、深夜は一部閉鎖)、24時間営業、予約不可、カード・電子マネー・QR決済不可、喫煙可。2025〜2026年の口コミ: 定番の本店、10分待ち、大きなチャーシュー、にんにく・ニラ・キムチ取り放題は半世紀変わらない、大阪のあっさり豚骨の王様(以前はワンコイン、2022年は800円)、チャーシューメン、キムチ・にんにく・ニラ、ご飯無料、食券で30分待ち、普通のラーメンでもチャーシュー数枚と切れ端、九州豚骨よりあっさり、替玉の代わりにご飯食べ放題、二次会の後、濃厚な豚骨とご飯とキムチ、息子も感動。',
      confidence: 'medium', sources: [TB, R + 'B447787742/', R + 'B520089292/', R + 'B517102299/', R + 'B491974980/', R + 'B530619176/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Not described; free rice instead of kaedama.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'ラーメン; チャーシューメン (chashu ramen) (2025–2026).',
      chashu: 'Generous: several slices and trimmings even on the plain ramen (November 2025).',
      notable_toppings: ['free kimchi', 'free garlic', 'free garlic chives', 'free rice'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Where the dragon began: Kinryu\'s light Osaka tonkotsu at the east end of Dotonbori, loaded at will with free kimchi, garlic and chives, with free rice on the side.',
      profile: { richness: 2, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B520089292/', '"A lighter flavor compared to Kyushu-style tonkotsu ramen. It\'s very easy to eat"; one found it "rich" (' + R + 'B530619176/).'],
        oiliness: [R + 'B520089292/', 'Light tonkotsu — placed low (inferred).'],
        clarity: [R + 'B520089292/', 'Tonkotsu — not clear, though light (inferred).'],
        tare_strength: [R + 'B447787742/', 'Seasoning not described — mid-scale (inferred).'],
        noodle_firmness: [R + 'B520089292/', 'Noodles not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B491974980/', 'Free garlic, garlic chives and kimchi to add ("the side of garlic? Truly amazing").'],
      },
      confidence: 'low', sources: [R + 'B520089292/', R + 'B447787742/', R + 'B491974980/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; cash only; smoking allowed.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-1-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated November 2025–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目1番18号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520089292/', R + 'B530619176/'],
    price_note: 'No 2026 prices captured (¥800 in April 2022, per one review).', last_checked: TODAY, items: [
      it('ラーメン', 'rāmen', 'Ramen (light tonkotsu)', '', 'Ramen', 'no', 'no', 'November 2025.', 'ramen'),
      it('チャーシューメン', 'chāshū-men', 'Chashu ramen', '', 'Ramen', 'no', 'no', 'March 2026.', 'chashumen'),
      it('', '', 'Free kimchi, garlic, garlic chives and rice', '', 'Free', 'ask', 'ask', '2025–2026.', 'free_toppings'),
    ] }, {
    cuisine: '金龍の本店・大阪のあっさり豚骨・チャーシューたっぷりのチャーシューメン・キムチ、にんにく、ニラ無料・替玉の代わりにご飯無料・24時間・立ち席あり',
    neighborhood: '道頓堀1-1-18、堺筋側の道頓堀の東端。なんば駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー。',
    notes: '[ラーメン・道頓堀の東端の元祖金龍] 龍の看板の金龍ラーメンの本店で、道頓堀の堺筋寄りにある立ち席もある38席の店、24時間営業。大阪のあっさり豚骨で、九州の豚骨よりずっと軽く食べやすく、チャーシューはたっぷり。普通のラーメンでも数枚と切れ端がのり、チャーシューメンはさらに山盛り。キムチ、にんにく、ニラは無料で好きなだけ、替玉の代わりにご飯も無料という流れは「半世紀変わらない」という客も。混む時間は10〜30分待ち。先に食券を。現金のみ、喫煙可。',
  });
}

save();
