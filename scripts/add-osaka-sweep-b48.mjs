// Osaka sweep (2-mile circle around Dotonbori), batch 48 — ramen phase, nearest first (all OMNI).
//   + 麺に光を 別邸 (shellfish shio and shoyu by Nankai Namba; sister of Men ni Hikari o, b33)
//   + 壱賢家 日本橋店 (Yokohama iekei to 3 am)
//   + 薬膳担担麺 胡仙 (medicinal-herb tantanmen, Kyoto white and Sichuan red; opened Mar 2026)
//   + 一蘭 心斎橋店 (Ichiran booth-counter tonkotsu, 10 am–6 am)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 48);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 麺に光を 別邸
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27124370/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00'], ['18:00', '20:30']);
  put({
    id: 'osaka_men_ni_hikari_o_bettei', name: '麺に光を 別邸 (Men ni Hikari o Bettei)', category: 'OMNI',
    lat: 34.66395, lng: 135.500285, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce versions.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oyster, clam and dried-seafood broth, chashu, ikura.',
    hours_raw: 'Mon, Tue, Fri, Sat, Sun 11:30–15:00 and 18:00–20:30; closed Wednesday and Thursday (open on holidays) (Tabelog). Cash only — no cards, e-money or QR (Tabelog). A queue of about 20 at opening (September 2026).',
    hours: { 0: D, 1: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nambanaka 1-18-8, Namba Culture Bldg 1F — 2 min from Nankai Namba Stn',
    cuisine: 'Shellfish ramen in a kaiseki-style room · "Kai no Hikari" shio ¥1,290 (Hiroshima oysters, clams and dried seafood) · with seasoned egg ¥1,440 · special "Sansho no Hikari" shio ¥1,670 · special shoyu ¥1,570 · shoyu ramen · medium straight Hinomoto Seimen noodles · chashu, menma, yuzu, ikura · 12 seats',
    website: null, gmaps: gm('麺に光を 別邸 難波'), menu_url: null,
    notes: "[Ramen · shellfish shio in a kaiseki-style room by Nankai Namba] The sister shop of Men ni Hikari o, two minutes from Nankai Namba, in a modern-Japanese room that feels more kaiseki than ramen bar, with a queue of 20 at opening. The signature is \"Kai no Hikari\" (¥1,290), a shio of Hiroshima oysters, clams and dried seafood. It's light yet packed with flavor, served piping hot with a breath of yuzu, on smooth medium-straight noodles from Hinomoto Seimen, topped with chashu, menma and ikura. A sansho version (special ¥1,670) adds a gentle numbing note to the shellfish. The special shoyu (¥1,570) is a clear, deep-amber bowl with assorted chashu and mitsuba. Every bowl is plated like a work of art. Cash only; closed Wednesdays and Thursdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 July 2021 (Tabelog)', background: 'The "Bettei" (annex) of Men ni Hikari o, the Nishi-Shinsaibashi duck-ramen shop recorded separately (osaka_men_ni_hikari_o).', philosophy: null, specialty: 'Shellfish shio ramen.',
      anecdotes: [
        { text: '"The soup, made with Hiroshima oysters, clams, and dried seafood, was light yet packed with flavor. It was served piping hot and incredibly delicious! The refreshing scent of yuzu added a wonderful touch." — October 2026, "Shellfish Light" with seasoned egg ¥1,440.', source: R + 'B488087931/' },
        { text: '"The medium straight noodles from Hinomoto Seimen are smooth and have a great texture, perfectly complementing the light broth." — October 2026, Kai no Hikari ¥1,290.', source: R + 'B537057260/' },
      ],
      japanese_sources_summary: '食べログ: 麺に光を 別邸、大阪市浪速区難波中1-18-8 なんばカルチャービル1F、予約不可、月・火・金・土・日11:30〜15:00・18:00〜20:30、水・木休み(祝日は営業)、カード・電子マネー・QR不可、12席(カウンター8、2人テーブル2)、2021年7月22日開店。2026年の口コミ(9〜10月): 南海なんば駅から徒歩2分、懐石のようなモダンな和の店内、平日13時過ぎでも外で待ち、看板の「貝の光」味玉付き1,440円(広島の牡蠣、蛤、乾物のスープ、あっさりで濃い、熱々、柚子の香り)、特製山椒の光(塩)1,670円(ほのかな山椒と貝)、開店前に一番乗りで開店時には20人の行列、醤油ラーメンはすっきり、麺がおいしい、チャーシューと柑橘の美しい盛り付け、貝の光1,290円(Hinomoto Seimenの中太ストレート麺、メンマ、チャーシュー、柚子、いくら)、特製醤油1,570円(澄んだ深い琥珀色、数種のチャーシュー、味玉、刻み玉ねぎ、三つ葉)。',
      confidence: 'medium', sources: [TB, R + 'B488087931/', R + 'B537057260/', R + 'B529640264/', R + 'B537290413/', R + 'B535918815/', R + 'B536084605/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Medium straight noodles from Hinomoto Seimen, smooth (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '"Kai no Hikari" shellfish shio ¥1,290 (October 2026).',
      chashu: 'Assorted chashu on the specials (October 2026).',
      notable_toppings: ['yuzu', 'ikura', 'menma', 'mitsuba', 'sansho (Sansho no Hikari)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Shellfish broth.' },
      pantheon: 'Namba\'s kaiseki-plated shellfish shio: Hiroshima oysters, clams and yuzu in a light, piping-hot bowl.',
      profile: { richness: 3, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B488087931/', '"Light yet packed with flavor."'],
        oiliness: [R + 'B537290413/', 'Shoyu "surface was beautifully coated with oil" — but the shio is light; placed low-mid.'],
        clarity: [R + 'B537290413/', '"A clear, deep amber broth."'],
        tare_strength: [R + 'B537057260/', '"Blended with a special salt seasoning"; "the salty soup" — mid-scale.'],
        noodle_firmness: [R + 'B537057260/', '"Smooth and have a great texture" — mid-scale.'],
        aroma_punch: [R + 'B488087931/', '"The aroma of the shellfish broth was delightful… The refreshing scent of yuzu."'],
      },
      confidence: 'medium', sources: [R + 'B488087931/', R + 'B537057260/', R + 'B537290413/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue at opening; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中1-18-8 なんばカルチャービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中一丁目18番8号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537057260/', R + 'B488087931/', R + 'B529640264/', R + 'B537290413/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('貝の光', 'Kai no Hikari', '"Kai no Hikari" shellfish shio ramen', '¥1,290', 'Ramen', 'no', 'no', 'October 2026.', 'kai_no_hikari'),
      it('', '', '"Kai no Hikari" with seasoned egg', '¥1,440', 'Ramen', 'no', 'no', 'October 2026.', 'kai_ajitama'),
      it('', '', 'Special "Sansho no Hikari" (shio)', '¥1,670', 'Ramen', 'no', 'no', 'September 2026.', 'sansho'),
      it('', '', 'Special shoyu ramen', '¥1,570', 'Ramen', 'no', 'no', 'October 2026.', 'tokusei_shoyu'),
      it('醤油ラーメン', 'shōyu rāmen', 'Shoyu ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'shoyu'),
    ] }, {
    cuisine: '懐石のような店内の貝のラーメン・「貝の光」塩1,290円(広島の牡蠣、蛤、乾物)・味玉付き1,440円・特製「山椒の光」塩1,670円・特製醤油1,570円・醤油ラーメン・Hinomoto Seimenの中太ストレート麺・チャーシュー、メンマ、柚子、いくら・12席',
    neighborhood: '難波中1-18-8 なんばカルチャービル1F。南海なんば駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油の味も。',
    vegan_detail: 'ヴィーガンではありません。牡蠣、蛤、乾物のスープ、チャーシュー、いくら。',
    notes: '[ラーメン・南海なんば駅近くの懐石のような店の貝の塩] 麺に光をの姉妹店で、南海なんば駅から2分、ラーメン店というより懐石のようなモダンな和の店内、開店時には20人の行列。看板は「貝の光」(1,290円)で、広島の牡蠣、蛤、乾物の塩。あっさりなのに味が濃く、熱々で柚子がふわり、Hinomoto Seimenのなめらかな中太ストレート麺に、チャーシュー、メンマ、いくら。山椒版(特製1,670円)は貝にほのかなしびれが加わります。特製醤油(1,570円)は澄んだ深い琥珀色で、数種のチャーシューと三つ葉。どの一杯も作品のような盛り付け。現金のみ、水・木定休。',
  });
}

// ================================================================ 壱賢家 日本橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27141400/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ikkenya_nipponbashi', name: '壱賢家 日本橋店 (Ikkenya Nipponbashi)', category: 'OMNI',
    lat: 34.667184, lng: 135.507515, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy-sauce tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, chashu, quail eggs.',
    hours_raw: 'Daily 11:00–3:00 (Tabelog). Ticket machine with firmness, richness and oil options. No cards or e-money; QR accepted (Tabelog).',
    hours: ALL(day(['11:00', '03:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nippombashi 1-6-5 — 2 min from Nippombashi Stn',
    cuisine: 'Yokohama iekei to 3 am · rich pork-bone shoyu on thick noodles with spinach and chashu · firmness, richness and oil chosen at the ticket machine · chashu ramen with quail eggs and nori · tsukemen · onion, pepper, sesame, chili oil and garlic to add · counter only',
    website: null, gmaps: gm('壱賢家 日本橋店'), menu_url: null,
    notes: "[Ramen · a late-night iekei counter by Nippombashi] A clean, counter-only Yokohama iekei shop two minutes from Nippombashi, open until 3 am; one reviewer heads to the sauna afterward. It's a rich pork-bone shoyu on thick noodles with spinach and chashu. Pick firmness, richness and oil at the ticket machine, then build with onion, pepper, sesame, chili oil and garlic. The chashu ramen with quail eggs and nori is a classic combination, and the tsukemen has firm, springy noodles in a rich dip. Two staff keep it moving quickly. It's a balanced, crowd-pleasing take on the style, which one reviewer believes is independently franchised.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 March 2024 (Tabelog)', background: 'A Yokohama-style iekei shop; one reviewer believes it is an independent franchise (August 2026).', philosophy: null, specialty: 'Iekei ramen.',
      anecdotes: [
        { text: '"Ikenya\'s house-style ramen features a rich pork bone broth and thick noodles, creating a deep and satisfying flavor. The toppings of spinach and chashu add texture." — September 2026.', source: R + 'B535080871/' },
        { text: '"You choose your preferences at the vending machine, of course, with options for \'hard, rich, and extra\'." — June 2026.', source: R + 'B529265102/' },
      ],
      japanese_sources_summary: '食べログ: 壱賢家 日本橋店、大阪市中央区日本橋1-6-5、予約不可、毎日11:00〜翌3:00、カード・電子マネー不可、QR可、カウンター席、2024年3月25日開店。2026年の口コミ(4〜9月): 家系ラーメン、カウンターのみで清潔、2人のスタッフで手際よく提供、万人向けのバランス、日本橋駅から徒歩2分、横浜家系、券売機で硬め・濃いめ・多めを選ぶ、玉ねぎ、胡椒、ごまで味変、チャーシュー麺にうずら卵とのり、濃いけど重くない、つけ麺(硬めで弾力のある麺、濃いつけ汁)、深夜営業、豚骨と太麺、ほうれん草とチャーシュー、ラー油とにんにく、深夜3時まで、独自にフランチャイズ展開しているようという声。',
      confidence: 'medium', sources: [TB, R + 'B535080871/', R + 'B529265102/', R + 'B526979846/', R + 'B530052598/', R + 'B534970711/', R + 'B536728219/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick noodles; firmness to order (June–September 2026).' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Iekei ramen (shoyu) (June 2026).',
      chashu: 'Chashu with spinach (September 2026).',
      notable_toppings: ['spinach', 'nori', 'quail eggs', 'onion', 'sesame', 'garlic'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Nippombashi\'s 3 am iekei: rich pork-bone shoyu, thick noodles and a ticket machine of choices.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B535080871/', '"A rich pork bone broth… creating a deep and satisfying flavor."'],
        oiliness: [R + 'B530052598/', '"The broth was rich but not overwhelming" — mid-scale.'],
        clarity: [R + 'B535080871/', 'Pork-bone broth — opaque.'],
        tare_strength: [R + 'B526979846/', '"Well-balanced and seemed to appeal to a wide range of tastes" — mid-scale.'],
        noodle_firmness: [R + 'B534970711/', '"A firm texture and just the right amount of elasticity" (tsukemen).'],
        aroma_punch: [R + 'B535080871/', 'With chili oil and garlic "the taste becomes even more robust" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B535080871/', R + 'B529265102/', R + 'B534970711/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; counter only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋1-6-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋一丁目6番5号 (go) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529265102/', R + 'B534970711/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('ラーメン', 'rāmen', 'Iekei ramen (shoyu)', '', 'Ramen', 'no', 'no', 'June 2026.', 'ramen'),
      it('チャーシューメン', 'chāshūmen', 'Chashu ramen', '', 'Ramen', 'no', 'no', 'April 2026.', 'chashu'),
      it('つけ麺', 'tsukemen', 'Tsukemen', '', 'Tsukemen', 'no', 'no', 'September 2026.', 'tsukemen'),
    ] }, {
    cuisine: '深夜3時までの横浜家系・太麺にほうれん草とチャーシューの濃厚な豚骨醤油・券売機で硬さ、濃さ、油を選ぶ・うずら卵とのりのチャーシュー麺・つけ麺・玉ねぎ、胡椒、ごま、ラー油、にんにくを追加・カウンターのみ',
    neighborhood: '日本橋1-6-5。日本橋駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油だれ。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー、うずら卵。',
    notes: '[ラーメン・日本橋の深夜の家系カウンター] 日本橋駅から2分、深夜3時まで営業するカウンターのみの清潔な横浜家系の店で、食べた後にサウナに向かう人も。濃厚な豚骨醤油に太麺、ほうれん草とチャーシュー。券売機で硬さ、濃さ、油を選び、玉ねぎ、胡椒、ごま、ラー油、にんにくで仕上げます。うずら卵とのりのチャーシュー麺は定番の組み合わせで、つけ麺は硬めで弾力のある麺を濃いつけ汁に。スタッフ2人で手際よく回します。バランスのいい万人向けの家系で、独自にフランチャイズ展開しているようだという口コミも。',
  });
}

// ================================================================ 薬膳担担麺 胡仙
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27155228/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '15:30'], ['18:00', '20:30']), S = day(['11:00', '16:00']);
  put({
    id: 'osaka_yakuzen_tantanmen_kosen_kitahorie', name: '薬膳担担麺 胡仙 (Yakuzen Tantanmen Kosen)', category: 'OMNI',
    lat: 34.672677, lng: 135.497017, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles; fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat miso and broth not described as plant-based; egg in the fried rice. The Sichuan bowl uses soy milk, but no vegan version is described.',
    hours_raw: 'Mon–Sat 11:30–15:30 and 18:00–20:30; Sun 11:00–16:00 (Tabelog). Order by QR code (or verbally). Cards, e-money and QR accepted. Homemade doubanjiang sold at ¥300.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 1-2-16 #103 — 1 min from Yotsubashi Stn',
    cuisine: 'Medicinal-herb tantanmen (20+ herbs, per staff) · Kyoto-style white tantanmen (signature) · Sichuan-style red tantanmen ¥1,200 (large ¥1,400) · Kyoto-style cold tantanmen ¥1,300 (summer) · lettuce fried rice (small ¥500) · herbal vinegar and homemade doubanjiang on the table · 25 seats',
    website: null, gmaps: gm('薬膳担担麺 胡仙 四ツ橋'), menu_url: null,
    notes: "[Ramen · medicinal-herb tantanmen by Yotsubashi] A tantanmen specialist a minute from Yotsubashi, open since March 2026, built on more than 20 medicinal herbs, per the staff. There are two styles: the signature Kyoto-style white tantanmen, sesame-rich with a herbal edge, and a Sichuan-style red one (¥1,200; large ¥1,400). A September 2026 diner found the Sichuan soy-milk version thin, so start with the Kyoto. Summer brought a chilled Kyoto-style bowl (¥1,300) that a reviewer likened to a famous Shijo-Omiya shop in Kyoto. Add the staff's recommended herbal vinegar or the homemade doubanjiang (sold at ¥300 to take home). The fluffy lettuce fried rice is a sleeper hit. Staff explain everything to first-timers. Reviews range from a favourite to just average.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 17 March 2026 (Tabelog)', background: 'A yakuzen (medicinal-herb) tantanmen specialist; staff explain the herbs and how to eat (October 2026 review).', philosophy: 'Authentic tantanmen with over 20 medicinal herbs (September–October 2026 reviews).', specialty: 'Kyoto-style white tantanmen.',
      anecdotes: [
        { text: '"The overwhelming presence of sesame combined with a subtle spiciness and the herbal flavor of the broth created a rich and smooth experience. The thin noodles had a perfect chewiness." — July 2026, Kyoto-style cold tantanmen ¥1,300.', source: R + 'B531927546/' },
        { text: '"They offer both Kyoto-style white Tantanmen and Sichuan-style red Tantanmen. I ordered the \'Sichuan Tantanmen\' in large size (JPY 1,200 for regular, JPY 1,400 for large)." — September 2026.', source: R + 'B535296700/' },
      ],
      japanese_sources_summary: '食べログ: 薬膳担担麺 胡仙、大阪市西区北堀江1-2-16 103、予約不可、月〜土11:30〜15:30・18:00〜20:30、日11:00〜16:00、カード・電子マネー・QR決済可、25席、禁煙、2026年3月17日開店。2026年の口コミ(7〜10月): 京都風担担麺、薬膳のスープを完飲、初めての客に丁寧な説明、夏限定の京都風冷やし担担麺1,300円とレタス炒飯(小)500円、ごまの存在感と薬膳の風味、細麺、スタッフおすすめの薬膳酢、自家製豆板醤と唐辛子、京都・四条大宮の店に似た味、四川担担麺は豆乳の味で薄いという声、普通という声、京都風(白)と四川風(赤)、四川担担麺並1,200円・大1,400円、QRで注文、20種類以上の薬膳、卓上の調味料、自家製豆板醤300円で販売、清潔な店内。',
      confidence: 'medium', sources: [TB, R + 'B531927546/', R + 'B535296700/', R + 'B531275111/', R + 'B534052356/', R + 'B537076434/', R + 'B534761918/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['other'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin noodles with good chew (July–August 2026).' },
      regional_style: [], sub_genre: ['tantanmen'],
      signature_bowl: 'Kyoto-style white tantanmen (October 2026).',
      chashu: null,
      notable_toppings: ['herbal vinegar (table)', 'homemade doubanjiang (table)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Not described as plant-based.' },
      pantheon: 'Yotsubashi\'s herb-built tantanmen: a sesame-rich Kyoto white bowl with 20-odd medicinal herbs.',
      profile: { richness: 3, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B531927546/', '"A rich and smooth experience"; the Sichuan bowl "on the watery side" (' + R + 'B534052356/) — mid-scale.'],
        oiliness: [R + 'B531927546/', 'Sesame-rich — mid-scale (inferred).'],
        clarity: [R + 'B531927546/', 'Sesame tantan broth — opaque (inferred).'],
        tare_strength: [R + 'B531927546/', '"A subtle spiciness" — mid-scale.'],
        noodle_firmness: [R + 'B531927546/', '"The thin noodles had a perfect chewiness" — mid-scale.'],
        aroma_punch: [R + 'B531927546/', '"The herbal flavor of the broth" — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B531927546/', R + 'B534052356/', R + 'B535296700/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; staff explain the dishes.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-2-16 103',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened March 2026; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目2番16号 (go) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535296700/', R + 'B531927546/', R + 'B537076434/'],
    price_note: 'Prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kyoto-style white tantanmen', '', 'Tantanmen', 'no', 'no', 'October 2026.', 'kyoto'),
      it('', '', 'Sichuan-style red tantanmen (regular / large)', '¥1,200 / ¥1,400', 'Tantanmen', 'no', 'no', 'September 2026.', 'sichuan'),
      it('', '', 'Kyoto-style cold tantanmen (summer)', '¥1,300', 'Seasonal', 'no', 'no', 'July 2026.', 'hiyashi'),
      it('', '', 'Lettuce fried rice (small)', '¥500', 'Rice', 'no', 'no', 'July 2026.', 'lettuce_chahan'),
      it('', '', 'Homemade doubanjiang (to take home)', '¥300', 'Retail', 'ask', 'ask', 'October 2026.', 'doubanjiang'),
    ] }, {
    cuisine: '薬膳担担麺(20種以上の薬膳、スタッフ談)・看板の京都風の白い担担麺・四川風の赤い担担麺1,200円(大1,400円)・京都風の冷やし担担麺1,300円(夏)・レタス炒飯(小500円)・卓上に薬膳酢と自家製豆板醤・25席',
    neighborhood: '北堀江1-2-16 103。四ツ橋駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の細麺、炒飯。',
    vegan_detail: 'ヴィーガンではありません。肉味噌やスープが植物性とは書かれておらず、炒飯に卵。四川風は豆乳を使いますが、ヴィーガン版の記述はありません。',
    notes: '[ラーメン・四ツ橋の薬膳担担麺] 四ツ橋駅から1分、2026年3月開店の担担麺の専門店で、スタッフによると20種以上の薬膳を使用。2種類あり、看板の京都風の白い担担麺はごまが濃く薬膳の風味、四川風の赤(1,200円、大1,400円)も。2026年9月には四川の豆乳版が薄かったという声もあるので、まずは京都風を。夏の京都風の冷やし(1,300円)は京都・四条大宮の名店に似ているという口コミも。スタッフおすすめの薬膳酢や自家製豆板醤(持ち帰り300円)を足して。ふわふわのレタス炒飯は隠れた人気。初めての人には丁寧に説明してくれます。評価はお気に入りから普通まで。',
  });
}

// ================================================================ 一蘭 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27102242/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://ichiran.com/shop/kinki/shinsaibashi/';
  put({
    id: 'osaka_ichiran_shinsaibashi', name: '一蘭 心斎橋店 (Ichiran Shinsaibashi)', category: 'OMNI',
    lat: 34.674283, lng: 135.5019, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth, chashu.',
    hours_raw: 'Daily 10:00–6:00 (food L.O. 5:45), open year-round (Tabelog). Night-time prices are higher (August 2026). Ticket machine and order sheet; booth seats ("flavor concentration counter"). Long tourist queues at peak; a late-night fast pass is mentioned (August 2026). Cards and e-money accepted.',
    hours: ALL(day(['10:00', '06:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashi-suji 1-3-29, Miya Plaza Shinsaibashi 1F — off Shinsaibashi Stn exit 2',
    cuisine: 'Ichiran tonkotsu in partitioned booths · ramen ¥1,290 at night prices · salted soft-boiled egg ¥180 · extra garlic ¥180 · thin, low-hydration noodles · order sheet for richness, firmness and secret red sauce · rice, extra noodles · 40 booth seats · open to 6 am',
    website: OWN, gmaps: gm('一蘭 心斎橋店'), menu_url: null,
    notes: "[Ramen · Ichiran's booth-counter tonkotsu, nearly round the clock] The Shinsaibashi branch of Ichiran, by Shinsaibashi Station exit 2, open from 10 am to 6 am. You eat in a partitioned booth at the \"flavor concentration counter\" and rarely see staff. Buy a ticket, fill in an order sheet for richness, firmness and the secret red sauce, then eat and leave. The tonkotsu is mild and creamy without pork funk, on thin, low-hydration noodles; firm is the popular call. A regular orders the red sauce at level 6, and one diner's 10× version was fiercely hot. At night the ramen is ¥1,290, with a salted egg and extra garlic at ¥180 each. Tourist queues can mean a 40-minute wait, though the line is well managed. One 2:30 am visit was walk-in.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 December 2017 (Tabelog)', background: 'Ichiran chain (ichiran.com).', philosophy: null, specialty: 'Tonkotsu ramen in booth seating.',
      anecdotes: [
        { text: '"The broth was mild and creamy without the typical pork bone smell, and the firm, thin noodles clung well to it… When I mixed in the red secret sauce in the center, it added just the right amount of spiciness and depth." — August 2026.', source: R + 'B536550921/' },
        { text: '"At Ichiran, I had ramen for JPY 1290, a soft-boiled salted egg for JPY 180, and an extra serving of garlic for JPY 180. These are all night-time prices." — August 2026.', source: R + 'B473316056/' },
      ],
      japanese_sources_summary: '食べログ: 一蘭 心斎橋店、大阪市中央区心斎橋筋1-3-29 ミヤプラザ心斎橋1F、050-1808-2625、予約不可、毎日10:00〜翌6:00(料理L.O.5:45)、年中無休、カード・電子マネー可、味集中カウンター40席、2017年12月15日開店、公式 ichiran.com。2026年の口コミ(8〜9月): 夜の価格でラーメン1,290円、半熟塩ゆで玉子180円、にんにく増量180円、秘伝のたれ10倍はかなり辛い、低加水の細麺と濃厚とんこつ、濃さと硬さを選べる、辛さ6、土曜は遅くまで営業、終電後の深夜0時に観光客と日本人の行列、回転が早い、深夜は待たずに入れるファストパス的な仕組み、券売機→席→食べる→帰る、仕切りのある味集中カウンター、仕切りは外せないタイプ、約40分待ちでも列の管理がスムーズ、注文用紙、天然とんこつラーメン、硬め、臭みのないまろやかでクリーミーなスープ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B536550921/', R + 'B473316056/', R + 'B521825187/', R + 'B533439985/', R + 'B532866761/', R + 'B535104355/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: 'low', handmade: false, notes: 'Thin, low-hydration noodles; firmness to order (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Natural tonkotsu ramen ¥1,290 at night prices (August 2026).',
      chashu: 'Chashu optional on the order sheet (August 2026).',
      notable_toppings: ['secret red sauce', 'salted soft-boiled egg', 'garlic'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Ichiran in Shinsaibashi: a mild, creamy tonkotsu and thin noodles in a private booth, 10 am to 6 am.',
      profile: { richness: 3, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B521825187/', '"The tonkotsu broth was rich yet had a refreshing aftertaste."'],
        oiliness: [R + 'B536550921/', '"Mild and creamy" — mid-scale.'],
        clarity: [R + 'B536550921/', 'Creamy tonkotsu — opaque.'],
        tare_strength: [R + 'B536550921/', 'Richness set at "basic" — mid-scale.'],
        noodle_firmness: [R + 'B536550921/', '"The firm, thin noodles clung well to it."'],
        aroma_punch: [R + 'B473316056/', 'Secret red sauce from mild to "quite spicy" at 10× — mid-scale default.'],
      },
      confidence: 'medium', sources: [R + 'B536550921/', R + 'B521825187/', R + 'B473316056/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order sheet and booth system with minimal staff interaction; heavily used by overseas visitors (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-3-29 ミヤプラザ心斎橋 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目3番29号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B473316056/'],
    price_note: 'Night-time prices from an August 2026 review; daytime prices are lower.', last_checked: TODAY, items: [
      it('', '', 'Natural tonkotsu ramen (night price)', '¥1,290', 'Ramen', 'no', 'no', 'August 2026.', 'ramen'),
      it('', '', 'Salted soft-boiled egg', '¥180', 'Toppings', 'ask', 'no', 'August 2026.', 'egg'),
      it('', '', 'Extra garlic', '¥180', 'Toppings', 'ask', 'vegan', 'August 2026.', 'garlic'),
      it('替玉', 'kaedama', 'Extra noodles', '', 'Options', 'no', 'vegan', 'August 2026.', 'kaedama'),
    ] }, {
    cuisine: '仕切りのある席の一蘭のとんこつ・夜の価格でラーメン1,290円・半熟塩ゆで玉子180円・にんにく増量180円・低加水の細麺・注文用紙で濃さ、硬さ、秘伝のたれを選ぶ・ご飯、替え玉・味集中カウンター40席・朝6時まで',
    neighborhood: '心斎橋筋1-3-29 ミヤプラザ心斎橋1F。心斎橋駅2番出口からすぐ',
    gf_detail: 'グルテンフリーではありません。小麦の細麺。',
    vegan_detail: 'ヴィーガンではありません。とんこつスープ、チャーシュー。',
    notes: '[ラーメン・ほぼ24時間の一蘭の仕切り席のとんこつ] 心斎橋駅2番出口すぐの一蘭 心斎橋店で、朝10時から翌朝6時まで。「味集中カウンター」の仕切られた席で食べ、店員とはほとんど顔を合わせません。食券を買い、濃さ、硬さ、秘伝の赤いたれを注文用紙に記入し、食べて帰るだけ。とんこつは臭みがなくまろやかでクリーミー、低加水の細麺で、硬めが人気。赤いたれを辛さ6にする常連や、10倍でかなり辛かったという人も。夜はラーメン1,290円、塩ゆで玉子とにんにく増量が各180円。観光客の行列で40分待ちのこともありますが、列の誘導はスムーズ。深夜2時半に待たずに入れたという人も。',
  });
}

save();
