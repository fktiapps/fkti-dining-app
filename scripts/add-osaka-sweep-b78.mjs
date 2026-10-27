// Osaka sweep (2-mile circle around Dotonbori), batch 78 — ramen phase (all OMNI).
//   + いかれたヌードル フィッシュトンズ (seafood-tonkotsu tsukemen, Tabelog Ramen OSAKA 100 2023–2025)
//   + 清麺屋 (chicken-shoyu tsukemen at the south end of Otaroad; two-person shop → mom_and_pop)
//   + 貝出汁中華そば カワチリバー (clam-broth chuka soba, lunch only)
//   + 人情麺家 牛骨王 (beef-bone ramen, owner runs it alone → mom_and_pop)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 78);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ いかれたヌードル フィッシュトンズ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27101904/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['18:00', '22:00']), SA = day(['07:00', '09:00'], ['11:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_ikareta_noodle_fish_tons', name: 'いかれたヌードル フィッシュトンズ (Ikareta Noodle Fish Tons)', category: 'OMNI',
    lat: 34.676304, lng: 135.495067, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat noodles; soy-based dipping sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone and seafood broth, chashu.',
    hours_raw: 'Daily 11:00–15:00 (L.O. 14:55) and 18:00–22:00 (L.O. 21:55); Saturday morning ramen 7:00–9:00; open through to the New Year break, check social media (Tabelog). One bowl per person; no eating while looking at phones (Tabelog). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: SA, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-25-18, Renagia Shinmachi Bldg 1F — 2 min from Nishi-Ohashi Stn',
    cuisine: 'Thick seafood-tonkotsu tsukemen · ajitama tsukemen · TOKYO-X premium tsukemen ¥1,500 with rare chashu · homemade thick, flat, straight noodles · diced onion and aji daikon on the side · Dive Rice or soup to finish · seafood tonkotsu ramen ¥1,000, medium or thin noodles, large free · mazesoba · brothless tantanmen · Saturday morning ramen such as charcoal-grilled chashu miso · 10 counter seats, 2 tables',
    website: null, gmaps: gm('いかれたヌードル フィッシュトンズ'), menu_url: null,
    notes: "[Ramen · Shinmachi's Ramen 100 seafood-tonkotsu tsukemen] A tsukemen shop near Nishi-Ohashi, open since 2017 and picked for Tabelog's Ramen OSAKA 100 in 2023, 2024 and 2025. The dipping sauce is thick pork bone and seafood, bonito-forward, and it clings to homemade thick, flat noodles chilled in water for a chewy, wheaty bite. Add diced onion and aji daikon as you go, then finish with soup or Dive Rice, a small bowl of rice with green onion to drop into the sauce. The TOKYO-X premium tsukemen (¥1,500) carries juicy rare chashu. There's also a seafood tonkotsu ramen (¥1,000) with a free large size. On Saturdays there is a 7 am morning ramen, such as a charcoal-grilled chashu miso. Noodles were too soft for one pair. Expect a short line at lunch. House rules: one bowl each, no phones while eating.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 December 2017 (Tabelog)', background: 'Tsukemen shop (Tabelog, staff-maintained); Tabelog Ramen OSAKA 100 2023, 2024 and 2025.', philosophy: null, specialty: 'Seafood-tonkotsu tsukemen.',
      anecdotes: [
        { text: '"The broth is a rich seafood and pork bone base, thick and hearty, with a strong flavor of both seafood and pork. The noodles are homemade, flat, and thick." — October 2026, ajitama tsukemen.', source: R + 'B419227263/' },
        { text: '"The broth is a double soup made from chicken and pork bones, lightly emulsified with ginger and kombu kelp… The chashu is charcoal-grilled and hung to dry." — October 2026, Saturday morning ramen.', source: R + 'B500019650/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): いかれたヌードル フィッシュトンズ、大阪市西区新町1-25-18 レナジア新町ビル 1F、西大橋駅2番出口から徒歩2分、四ツ橋駅から徒歩3分、毎日11:00〜15:00(L.O.14:55)・18:00〜22:00(L.O.21:55)、土曜は朝ラーメン7:00〜9:00、年末年始まで休まず営業、SNSで確認を、一人一杯、スマホを見ながらの食事は不可、カード・電子マネー・QR可、14席(カウンター10、2人テーブル2)、2017年12月16日開店、食べログ ラーメン OSAKA 百名店2023・2024・2025。口コミ(2026年10月): 雨の週末13時に行列、味玉つけ麺、濃厚な魚介豚骨、自家製の平打ち太麺、玉ねぎとあじ大根、Dive Rice、チャーシュー、炭火焼きチャーシューの味噌ラーメン(朝ラー)、鶏と豚骨のダブルスープ、生姜と昆布、TOKYO-X特製つけ麺1,500円、レアチャーシュー、スープ割り、水で締めた太麺、ラーメンOSAKA 2025、平日21時半は待ちなし、魚介豚骨ラーメン1,000円、鰹節が強い、中太麺か細麺、大盛り無料、麺が柔らかすぎたという声。',
      confidence: 'medium', sources: [TB, R + 'B419227263/', R + 'B500019650/', R + 'B512755075/', R + 'B537679567/', R + 'B537912496/', R + 'B538167646/'] },
    ramen: {
      broth_base: ['pork', 'gyokai'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'flat', hydration: null, handmade: true, notes: 'Homemade thick, flat, straight noodles chilled in water; too soft for one pair (October 2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen', 'mazesoba_aburasoba', 'shiru_nashi_tantanmen'],
      signature_bowl: 'Ajitama tsukemen; TOKYO-X premium tsukemen, ¥1,500 (October 2026).',
      chashu: 'Rare chashu; TOKYO-X pork chashu on the premium bowl (October 2026).',
      notable_toppings: ['diced onion', 'aji daikon', 'ajitama'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone and seafood broth.' },
      pantheon: 'Shinmachi\'s Ramen 100 tsukemen: bonito-heavy seafood tonkotsu on thick homemade flat noodles.',
      profile: { richness: 5, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B419227263/', '"Thick and hearty, with a strong flavor of both seafood and pork."'],
        oiliness: [R + 'B512755075/', '"A refined fat that wasn\'t overwhelming" (chashu) — mid-scale.'],
        clarity: [R + 'B419227263/', 'Thick dipping sauce — placed low.'],
        tare_strength: [R + 'B537679567/', '"Rich and has a perfect balance of umami" — placed high.'],
        noodle_firmness: [R + 'B537679567/', '"A strong chewiness due to being chilled in water"; too soft once (B538167646) — placed high.'],
        aroma_punch: [R + 'B537912496/', '"The bonito flakes, was strong and impactful."'],
      },
      confidence: 'medium', sources: [R + 'B419227263/', R + 'B537679567/', R + 'B537912496/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'House rules: one bowl per person, no phones while eating (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-25-18 レナジア新町ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目25番18号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B512755075/', R + 'B537912496/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ajitama tsukemen', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'ajitama_tsukemen'),
      it('', '', 'TOKYO-X premium tsukemen', '¥1,500', 'Tsukemen', 'no', 'no', 'October 2026.', 'tokyo_x'),
      it('', '', 'Seafood tonkotsu ramen', '¥1,000', 'Ramen', 'no', 'no', 'Large free; October 2026.', 'gyokai_tonkotsu'),
      it('', '', 'Dive Rice', '', 'Rice', 'no', 'no', 'October 2026.', 'dive_rice'),
      it('', '', 'Saturday morning ramen', '', 'Limited', 'no', 'no', 'Changes; charcoal-grilled chashu miso on 17 October 2026.', 'asa_ramen'),
    ] }, {
    cuisine: '濃厚魚介豚骨のつけ麺・味玉つけ麺・レアチャーシューのTOKYO-X特製つけ麺1,500円・自家製の平打ち太麺・玉ねぎとあじ大根を添えて・締めはDive Riceかスープ割り・魚介豚骨ラーメン1,000円、中太麺か細麺、大盛り無料・まぜそば・汁なし担々麺・土曜の朝ラーメン(炭火焼きチャーシューの味噌など)・カウンター10席、テーブル2卓',
    neighborhood: '西区新町1-25-18 レナジア新町ビル 1F。西大橋駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、醤油ベースのつけ汁。',
    vegan_detail: 'ヴィーガンではありません。豚骨と魚介のスープ、チャーシュー。',
    notes: '[ラーメン・新町の百名店の魚介豚骨つけ麺] 西大橋近くのつけ麺の店で、2017年開店、食べログのラーメン OSAKA 百名店に2023、2024、2025年と選出。つけ汁は鰹の効いた濃厚な豚骨魚介で、水で締めたもちもちで小麦の香る自家製の平打ち太麺によく絡む。玉ねぎとあじ大根を足しながら、最後はスープ割りか、ねぎをのせた小さなご飯をつけ汁に入れるDive Riceで。TOKYO-X特製つけ麺(1,500円)にはジューシーなレアチャーシュー。大盛り無料の魚介豚骨ラーメン(1,000円)も。土曜は朝7時から炭火焼きチャーシューの味噌などの朝ラーメン。麺が柔らかすぎたという2人連れも。昼は少し並ぶことも。店のルールは一人一杯、食事中のスマホは不可。',
  });
}

// ================================================================ 清麺屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27096769/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:00']), WE = day(['11:00', '16:00']);
  put({
    id: 'osaka_seimenya_nipponbashi', name: '清麺屋 (Seimenya)', category: 'OMNI',
    lat: 34.659809, lng: 135.504472, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based dipping sauce; tenkasu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth, niboshi, chashu.',
    hours_raw: 'Mon and Wed–Fri 11:00–15:00; Sat–Sun 11:00–16:00; closed Tuesday; hours may change (Tabelog). Ticket machine (August–October 2026). PayPay accepted; no cards or e-money (Tabelog). Families and wheelchair users welcome (Tabelog).',
    hours: { 0: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nipponbashi-nishi 1-4-8, Mansion Tanaka 1F — south end of Otaroad, 5 min from Ebisucho Stn',
    cuisine: 'Chicken-shoyu tsukemen ¥1,330 (medium) · gentle, chicken-rich soy dipping sauce with tenkasu and black shichimi · smooth, glossy noodles · chicken paitan with medium-thick curly noodles, and a limited chicken paitan curry ball · summer chilled niboshi soba ¥1,250 with a furikake rice to finish as cold chazuke · 5 counter seats, four 2-person tables',
    website: null, gmaps: gm('清麺屋 日本橋'), menu_url: null,
    notes: "[Ramen · a two-person tsukemen shop at the south end of Otaroad] A 13-seat noodle shop at the southern tip of Nipponbashi's Otaroad, open since 2013 and run by two: a chef in the kitchen and one person serving, both notably polite. The draw is chicken-shoyu tsukemen (¥1,330 for medium): smooth, glossy noodles and a gentle soy dipping sauce full of chicken, with tenkasu and black shichimi, mild enough to drink on its own. There's also chicken paitan on medium-thick curly noodles; this autumn it carried a curry ball you break into the broth. In summer the chilled niboshi soba (¥1,250) comes with a rice to drown in the cold broth. One bowl took about 15 minutes. Lunch only; closed Tuesdays.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Opened 1 November 2013 (Tabelog)', background: 'Two-person tsukemen and ramen shop on Otaroad (2026 reviews).', philosophy: null, specialty: 'Chicken-shoyu tsukemen.',
      anecdotes: [
        { text: '"The soy sauce-based dipping sauce was not too strong and incredibly delicious!… I personally prefer a gentler flavor that I could drink on its own." — October 2026, chicken-shoyu tsukemen.', source: R + 'B536598370/' },
        { text: '"I was advised to pour the broth over the rice, giving it a chilled chazuke-like experience. The furikake sprinkled on the rice added a nice accent." — August 2026, chilled niboshi soba.', source: R + 'B533891172/' },
      ],
      japanese_sources_summary: '食べログ: 清麺屋、大阪市浪速区日本橋西1-4-8 マンション田中1F、南海なんば駅から徒歩7分、恵美須町駅から徒歩5分、月・水〜金11:00〜15:00、土日11:00〜16:00、火曜休み、PayPay可、カード・電子マネー不可、13席(カウンター5、2人テーブル4)、禁煙、2013年11月1日開店、家族連れと車椅子歓迎。口コミ(2026年8〜10月): オタロードの南端、限定の鶏白湯カレーボール、やさしい鶏白湯と中太ちぢれ麺、冷やし煮干しそば1,250円、券売機、厨房と接客の二人が丁寧、紫玉ねぎとチャーシュー、強い煮干し、ストレート麺、ご飯にスープをかけて冷たい茶漬け風、ふりかけ、鶏醤油のつけ汁に天かすと黒七味、鶏醤油つけ麺(中)1,330円、長年愛される店、つやのある麺、濃すぎないつけ汁、提供まで15分ほど。',
      confidence: 'medium', sources: [TB, R + 'B536598370/', R + 'B533891172/', R + 'B251011518/', R + 'B534410921/', R + 'B536398456/', R + 'B536508775/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Smooth, glossy tsukemen noodles; medium-thick curly noodles in the chicken paitan; straight in the chilled niboshi soba (2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen', 'tori_paitan', 'niboshi'],
      signature_bowl: 'Chicken-shoyu tsukemen, ¥1,330 medium (September 2026).',
      chashu: 'Chashu on the chilled niboshi soba (August 2026).',
      notable_toppings: ['tenkasu', 'black shichimi', 'purple onion (chilled soba)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Otaroad\'s two-person tsukemen shop: a gentle chicken-shoyu dip you could drink straight.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B536398456/', '"Soy sauce dipping sauce packed with chicken flavor" — mid-scale.'],
        oiliness: [R + 'B251011518/', '"The gentle chicken paitan broth" — placed low.'],
        clarity: [R + 'B536598370/', 'Soy dipping sauce mild enough to drink — mid-scale.'],
        tare_strength: [R + 'B536598370/', '"The soy sauce-based dipping sauce was not too strong."'],
        noodle_firmness: [R + 'B536398456/', '"The chewy noodles have a smooth texture" — mid-scale.'],
        aroma_punch: [R + 'B536598370/', '"A gentler flavor" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B536598370/', R + 'B536398456/', R + 'B251011518/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; families and wheelchair users welcome (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市浪速区日本橋西1-4-8 マンション田中1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区日本橋西一丁目4番8号 (go) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536398456/', R + 'B533891172/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken-shoyu tsukemen (medium)', '¥1,330', 'Tsukemen', 'no', 'no', 'September 2026.', 'tori_shoyu_tsukemen'),
      it('', '', 'Chicken paitan', '', 'Ramen', 'no', 'no', 'October 2026.', 'tori_paitan'),
      it('', '', 'Chicken paitan curry ball', '', 'Limited', 'no', 'no', 'October 2026.', 'curry_ball'),
      it('', '', 'Chilled niboshi soba with rice', '¥1,250', 'Limited', 'no', 'no', 'Summer; August 2026.', 'hiyashi_niboshi'),
    ] }, {
    cuisine: '鶏醤油つけ麺(中)1,330円・天かすと黒七味の、鶏の旨みたっぷりのやさしい醤油のつけ汁・なめらかでつやのある麺・中太ちぢれ麺の鶏白湯、限定の鶏白湯カレーボール・夏はふりかけご飯に冷たいスープをかけて茶漬け風にする冷やし煮干しそば1,250円・カウンター5席、2人テーブル4卓',
    neighborhood: '浪速区日本橋西1-4-8 マンション田中1F。オタロードの南端、恵美須町駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースのつけ汁、天かす。',
    vegan_detail: 'ヴィーガンではありません。鶏のスープ、煮干し、チャーシュー。',
    notes: '[ラーメン・オタロード南端の二人で営むつけ麺の店] 日本橋オタロードの南の端にある13席の麺の店で、2013年開店、厨房の料理人と接客の一人の二人で営み、どちらもとても丁寧。看板は鶏醤油つけ麺(中1,330円)で、なめらかでつやのある麺に、天かすと黒七味の入った鶏の旨みたっぷりのやさしい醤油のつけ汁、そのまま飲めるほど穏やか。中太ちぢれ麺の鶏白湯もあり、この秋はスープに崩して溶かすカレーボールがのった。夏の冷やし煮干しそば(1,250円)はご飯付きで、冷たいスープをかけて。提供まで15分ほどかかったという声。昼のみ、火曜定休。',
  });
}

// ================================================================ 貝出汁中華そば カワチリバー
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27125442/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:30']);
  put({
    id: 'osaka_kawachiriba_minamisenba', name: '貝出汁中華そば カワチリバー (Kaidashi Chuka Soba Kawachiriba)', category: 'OMNI',
    lat: 34.677457, lng: 135.505318, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare; clam tsukudani.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: clam broth, chashu.',
    hours_raw: 'Lunch only: Mon–Sat and days before/after holidays 11:00–14:30; closed Sundays and holidays (Tabelog). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minamisenba 2-7-1 — 5 min from Nagahoribashi Stn',
    cuisine: 'Clam-broth chuka soba · kaidashi shio ramen · asari shoyu ramen · shio set with clam tsukudani rice · seasoned egg and menma · thin-sliced chashu · smooth, chewy noodles, extra noodles · meat soba · cold pasta (2023) · sansho and Yamatsu Tsujita shichimi on the counter · 8 counter seats',
    website: null, gmaps: gm('貝出汁中華そば カワチリバー'), menu_url: null,
    notes: "[Ramen · clam-broth chuka soba for lunch near Nagahoribashi] An eight-seat lunch counter near Nagahoribashi, open since 2021, built on a clear shellfish broth. The kaidashi shio ramen tastes most clearly of clam, light yet deep. The asari shoyu is lighter still, too subtle for some, and the shichimi from Sakai's Yamatsu Tsujita lifts it. Smooth, chewy noodles are the constant praise; one diner ordered extra noodles. Thin chashu, seasoned egg and menma complete the bowl, and the shio set adds rice with clam tsukudani; sansho on the counter suits it. There's also a meat soba, and it once served cold pasta. A calm room with many women dining. Lunch only, Monday to Saturday. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 October 2021 (Tabelog)', background: 'Clam-broth chuka soba, lunch only (Tabelog, staff-maintained).', philosophy: null, specialty: 'Clam-broth shio and shoyu.',
      anecdotes: [
        { text: '"The broth was a beautifully clear clam soup, and the noodles were smooth and delicious!… The clam tsukudani (sweet simmered clams) was also great with both the rice and ramen." — September 2026, shio set.', source: R + 'B495913296/' },
        { text: '"You can really taste the clam broth in this shio ramen. The richness is sufficient even without changing the flavor of the soup." — June 2026.', source: R + 'B531574976/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 貝出汁中華そば カワチリバー、大阪市中央区南船場2-7-1、長堀橋から337m、月〜土・祝前日・祝後日11:00〜14:30、日祝休み、昼のみ、カード・電子マネー・QR不可、カウンター8席、禁煙、2021年10月1日開店。口コミ(2026年6〜10月): 冷製パスタ、貝出汁中華そば塩のセット、澄んだ貝のスープ、なめらかな麺、味玉とメンマ、卓上の山椒、あさりの佃煮とご飯、あさり醤油はあっさりで貝の濃さは控えめ、Yamatsu Tsujitaの七味、貝出汁塩は貝の味がしっかり、上品な貝の旨み、チャーシューは薄め、麺のもちもち感、替え玉、スープがぬるめだったという声、落ち着いた雰囲気で女性客も多い、肉そば、あさり醤油ラーメン。',
      confidence: 'medium', sources: [TB, R + 'B495913296/', R + 'B531574976/', R + 'B534490214/', R + 'B535291427/', R + 'B535446705/', R + 'B537085539/'] },
    ramen: {
      broth_base: ['shellfish'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Smooth, chewy noodles; extra noodles available (June–September 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Kaidashi shio ramen (June–September 2026).',
      chashu: 'Thinly sliced (September 2026).',
      notable_toppings: ['seasoned egg', 'menma', 'sansho (table)', 'Yamatsu Tsujita shichimi (table)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Clam broth.' },
      pantheon: 'Minamisenba\'s clam-broth lunch counter: a clear shellfish shio with sansho on the side.',
      profile: { richness: 2, oiliness: 1, clarity: 5, tare_strength: 2, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B534490214/', '"A light yet deeply rich taste."'],
        oiliness: [R + 'B531574976/', '"It was indeed light" — placed low.'],
        clarity: [R + 'B495913296/', '"A beautifully clear clam soup."'],
        tare_strength: [R + 'B535291427/', '"A light and subtle taste" — placed low.'],
        noodle_firmness: [R + 'B535291427/', '"The noodles had a nice chewiness."'],
        aroma_punch: [R + 'B535291427/', '"The flavor of the shellfish broth was not very strong" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B495913296/', R + 'B534490214/', R + 'B535291427/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Eight-seat counter; calm room (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-7-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目7番1号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B495913296/', R + 'B531574976/'],
    price_note: 'No prices captured; reviewers spent ¥1,000–1,999.', last_checked: TODAY, items: [
      it('', '', 'Kaidashi shio ramen', '', 'Ramen', 'no', 'no', 'June 2026.', 'kaidashi_shio'),
      it('', '', 'Asari shoyu ramen', '', 'Ramen', 'no', 'no', 'June–October 2026.', 'asari_shoyu'),
      it('', '', 'Shio set with clam tsukudani rice', '', 'Sets', 'no', 'no', 'September 2026.', 'shio_set'),
      it('', '', 'Meat soba', '', 'Ramen', 'no', 'no', 'On the menu; October 2026.', 'niku_soba'),
    ] }, {
    cuisine: '貝出汁の中華そば・貝出汁の塩ラーメン・あさり醤油ラーメン・あさりの佃煮ご飯の付く塩のセット・味玉とメンマ・薄切りのチャーシュー・なめらかでもちもちの麺、替え玉・肉そば・冷製パスタ(2023年)・卓上に山椒とYamatsu Tsujitaの七味・カウンター8席',
    neighborhood: '中央区南船場2-7-1。長堀橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、あさりの佃煮。',
    vegan_detail: 'ヴィーガンではありません。貝のスープ、チャーシュー。',
    notes: '[ラーメン・長堀橋近くの昼だけの貝出汁中華そば] 長堀橋近くの昼だけのカウンター8席の店で、2021年開店、澄んだ貝のスープが軸。貝出汁の塩は貝の味がいちばんはっきりして、軽いのに奥深い。あさり醤油はさらにあっさりで物足りない人も、堺のYamatsu Tsujitaの七味で引き締まる。なめらかでもちもちの麺はいつも好評で、替え玉した人も。薄いチャーシュー、味玉、メンマがのり、塩のセットにはあさりの佃煮ご飯、卓上の山椒がよく合う。肉そばもあり、冷製パスタを出していたことも。落ち着いた店内で女性客も多い。月〜土の昼のみ。現金のみ。',
  });
}

// ================================================================ 人情麺家 牛骨王
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27092423/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_gyukotsu_ou_minamisenba', name: '人情麺家 牛骨王 (Ninjo Menya Gyukotsu Ou)', category: 'OMNI',
    lat: 34.676698, lng: 135.507905, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-bone broth, beef tendon and chashu.',
    hours_raw: 'Daily 11:30–24:00 (L.O. 23:30); hours may change (Tabelog). Ticket machine (October 2026). PayPay accepted; no cards or e-money (Tabelog). Free extra noodles or rice at lunch (October 2026). Ashtray outside (Tabelog).',
    hours: ALL(day(['11:30', '23:59'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minamisenba 1-12-27, Kofuku Sogo Bldg 1F — near Nagahoribashi Stn',
    cuisine: 'Beef-bone ramen · recommended shio beef-bone ramen · white-broth ramen · tender beef tendon, stew-like chashu · thin straight noodles · fried garlic chips, pickled ginger and sesame · free extra noodles, or rice at lunch · summer chilled noodles with pork shabu-shabu, aosa and lemon · 9 counter seats',
    website: null, gmaps: gm('人情麺家 牛骨王 南船場'), menu_url: null,
    notes: "[Ramen · a one-person beef-bone counter near Nagahoribashi] A nine-seat counter open since 2016, run single-handed by the owner, serving beef-bone ramen until midnight. The broth is rich yet clean, with no off-flavor, and one diner called it richer than tonkotsu. The recommended shio bowl and the white broth come over thin straight noodles that one diner likened to Hong Kong wonton noodles, topped with tender beef tendon or stew-soft chashu, fragrant fried garlic chips, sesame and pickled ginger. Extra noodles are free, or rice at lunch. Summer brought a chilled bowl with pork shabu-shabu, aosa and lemon. Service is warmer than the name suggests: one diner was seen off at the door. Buy a ticket at the machine; PayPay accepted.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Opened 6 June 2016 (Tabelog)', background: 'Beef-bone ramen counter run by the owner alone (May 2026 review).', philosophy: null, specialty: 'Beef-bone shio ramen.',
      anecdotes: [
        { text: '"The broth was free of any unpleasant odors or bitterness, and it was very delicious! It had a nice thickness and was easy to drink!" — October 2026.', source: R + 'B537477612/' },
        { text: '"The fragrant fried garlic chips are the standout feature of this restaurant, adding an incredible aroma that makes you want to eat more." — May 2026, shio beef-bone ramen.', source: R + 'B527741711/' },
      ],
      japanese_sources_summary: '食べログ: 人情麺家 牛骨王、大阪市中央区南船場1-12-27 幸福相互ビル 1F、長堀橋から278m、毎日11:30〜24:00(L.O.23:30)、PayPay可、カード・電子マネー不可、9席、禁煙(店外に灰皿)、2016年6月6日開店。口コミ(2026年5〜10月): おすすめの塩の牛骨ラーメン、ほかにない味、香港の雲呑麺のようなもちもちの麺、香ばしいフライドガーリック、カウンターの店を店主が一人で切り盛り、豚骨より濃厚、チャーシューの代わりに柔らかい牛すじ、細麺、紅しょうがとごま、海外の客が握手を求めた、温かい接客で見送ってくれる、やさしい味、白湯ラーメン、替え玉無料、限定の冷やし麺(味玉、豚しゃぶ、あおさ、海苔、ねぎ、レモン)、券売機、外国人客が多い、臭みや苦みのないスープ、シチューのような肉のチャーシュー、ストレート麺、昼は替え玉かご飯が無料。',
      confidence: 'medium', sources: [TB, R + 'B537477612/', R + 'B527741711/', R + 'B528744851/', R + 'B534403702/', R + 'B534443001/', R + 'B536033524/'] },
    ramen: {
      broth_base: ['beef'], broth_texture: 'paitan', tare: ['shio'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles, chewy like wonton noodles to one diner; free extra noodles (May–October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Shio beef-bone ramen (May 2026); white-broth ramen (August 2026).',
      chashu: 'Tender beef tendon on one bowl (May 2026); stew-like meaty chashu on another (October 2026).',
      notable_toppings: ['fried garlic chips', 'beef tendon', 'pickled ginger', 'sesame'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Beef-bone broth.' },
      pantheon: 'Nagahoribashi\'s one-person beef-bone counter: a clean, rich gyukotsu with garlic chips, open to midnight.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B528744851/', '"The broth is rich and flavorful, even more so than tonkotsu!"'],
        oiliness: [R + 'B537477612/', '"A nice thickness and was easy to drink" — mid-scale.'],
        clarity: [R + 'B534443001/', '"The rich and flavorful white broth" — placed low.'],
        tare_strength: [R + 'B534403702/', '"A gentle flavor that is rich and savory" — mid-scale.'],
        noodle_firmness: [R + 'B527741711/', '"A delightful chewy texture, reminiscent of Hong Kong wonton noodles."'],
        aroma_punch: [R + 'B527741711/', '"Fragrant fried garlic chips… an incredible aroma."'],
      },
      confidence: 'medium', sources: [R + 'B537477612/', R + 'B527741711/', R + 'B528744851/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; many overseas customers (May–October 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区南船場1-12-27 幸福相互ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場一丁目12番27号 (go) 2m; OSM 牛骨王 node/5907511638 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527741711/', R + 'B537477612/'],
    price_note: 'No prices captured; reviewers spent under ¥2,000.', last_checked: TODAY, items: [
      it('', '', 'Shio beef-bone ramen', '', 'Ramen', 'no', 'no', 'Recommended; May 2026.', 'gyukotsu_shio'),
      it('', '', 'White-broth ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'paitan'),
      it('', '', 'Chilled limited noodles', '', 'Limited', 'no', 'no', 'Pork shabu-shabu, aosa, lemon; July 2026.', 'hiyashi'),
    ] }, {
    cuisine: '牛骨ラーメン・おすすめの塩の牛骨ラーメン・白湯ラーメン・柔らかい牛すじ、シチューのようなチャーシュー・細ストレート麺・フライドガーリック、紅しょうが、ごま・替え玉無料、昼はご飯も・夏は豚しゃぶ、あおさ、レモンの冷やし麺・カウンター9席',
    neighborhood: '中央区南船場1-12-27 幸福相互ビル 1F。長堀橋駅近く',
    gf_detail: 'グルテンフリーではありません。小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。牛骨のスープ、牛すじとチャーシュー。',
    notes: '[ラーメン・長堀橋近くの一人で営む牛骨ラーメン] 2016年開店のカウンター9席の店を店主が一人で切り盛りし、深夜0時まで牛骨ラーメンを出す。スープは濃厚なのに臭みがなくすっきりで、豚骨より濃いと評した人も。おすすめの塩と白湯は細ストレート麺で、香港の雲呑麺のようという声も。柔らかい牛すじかシチューのようなチャーシュー、香ばしいフライドガーリック、ごま、紅しょうががのる。替え玉は無料、昼はご飯も選べる。夏は豚しゃぶ、あおさ、レモンの冷やし麺。名前より接客は温かく、厨房から出てきて見送ってくれたという声も。食券は券売機で、PayPay可。',
  });
}

save();
