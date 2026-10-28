// Osaka sweep (2-mile circle around Dotonbori), batch 103 — ramen phase (all OMNI).
//   + 中華そば やいろ亭 (very thin noodles in shoyu or porcini shio, "aedama" second noodles; Tanimachi 4)
//   + 麺富 天洋 大正橋店 (garlic tonkotsu-shoyu open to 05:00 by Taisho and Kyocera Dome)
//   + 中華そば 花京 大正店 (back-fat tonkotsu shoyu, once a Kyobashi favorite; by Taisho Stn)
//   + ちょんまげ食堂 ラーメン部 (ramen-and-set-meal diner, garlic butter and chicken paitan; Uehonmachi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 103);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 中華そば やいろ亭
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27135844/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_chuka_soba_yairotei_tanimachi', name: '中華そば やいろ亭 (Chuka Soba Yairo Tei)', category: 'OMNI',
    lat: 34.682344, lng: 135.516974, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: very thin wheat noodles; soy tare; wontons.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth, niboshi, pork and chicken chashu.',
    hours_raw: 'Daily 11:00–15:00 and 17:30–22:00 (Tabelog, staff-maintained). Busy after 12:00 (October 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:00', '15:00'], ['17:30', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Tanimachi 3-4-9, 1F — 1 min from Tanimachi 4-chome Stn',
    cuisine: 'Chuka soba on very thin straight noodles · shoyu chuka soba ¥900: chicken broth with a savory, slightly sweet soy · special shoyu ¥1,350: low-temperature pork and chicken chashu, soft-boiled egg, fried green onion, nori · shio chuka soba in a golden broth with porcini and Okinawan salt, large rare chashu · special shio niboshi with wontons · "aedama" ¥350: a second serving of dressed noodles with seasoning powder, then dipped in the soup · 9 counter seats',
    website: null, gmaps: gm('中華そば やいろ亭 谷町'), menu_url: null,
    notes: "[Ramen · very thin noodles in shoyu or porcini shio by Tanimachi 4-chome] A bright, clean nine-seat counter a minute from Tanimachi 4-chome, open since 2023 and open daily, with neatly folded, very thin straight noodles that fans come back for. The shoyu chuka soba (¥900) is a chicken broth with a savory, slightly sweet soy; the special (¥1,350) adds tender low-temperature pork and chicken chashu, an egg and fried green onion. The shio is the one to try if soy is too strong for you: a golden broth deepened with porcini and Okinawan salt under large slices of rare chashu. Don't skip the aedama (¥350), a second round of dressed noodles with a seasoning powder, eaten as is and then dipped in the soup. Reactions vary: one diner found the shoyu overpowering and an egg forgotten. Lunch fills after noon. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 May 2023 (Tabelog)', background: 'Ramen counter (Tabelog, staff-maintained; 2026 reviews).', philosophy: null, specialty: 'Chuka soba on very thin noodles; aedama.',
      anecdotes: [
        { text: '"The noodles are extremely thin, resembling the straight noodles used in tonkotsu ramen. They soak up the broth beautifully… The toppings include low-temperature cooked pork chashu, chicken chashu, a soft-boiled egg, fried green onions, and nori." — October 2026, special shoyu ¥1,350.', source: R + 'B537399816/' },
        { text: '"Taking a sip of the broth, I was greeted with a deep richness and refined umami from the porcini mushrooms and special Okinawan salt." — October 2026, shio chuka soba.', source: R + 'B537840915/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 中華そば やいろ亭、大阪市中央区谷町3-4-9 EM&C谷町ビル 1F、谷町四丁目駅から徒歩1分、毎日11:00〜15:00・17:30〜22:00、カード・電子マネー・QR不可、9席、禁煙、Wi-Fi、2023年5月1日開店。口コミ(2026年5〜10月): きれいに整えた細麺、平日13時過ぎに2組待ち、醤油中華そば900円、和え玉350円、もちもちの細麺、和え玉の粉を混ぜる、残りは醤油のスープにつけて、大盛りより和え玉、カウンター8席の明るくきれいな店、特製醤油ラーメン1,350円、提供7分、醤油の香り、鶏ベースで甘めの醤油、豚骨ラーメンのような極細ストレート麺、低温調理の豚と鶏のチャーシュー、半熟卵、揚げねぎ、海苔、特製塩煮干し、煮干しの香りは強いが味は控えめ、ワンタン、やや油っぽい、醤油が強すぎた、味玉を忘れられた、紙エプロンがなかったという声、塩中華そば、提供2分、金色のスープにレアチャーシュー、ポルチーニと沖縄の塩、12時以降は混む。',
      confidence: 'medium', sources: [TB, R + 'B537399816/', R + 'B537840915/', R + 'B525903239/', R + 'B537591934/', R + 'B537621535/', R + 'B537936870/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Very thin straight noodles, neatly folded; aedama second serving (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Special shoyu chuka soba, ¥1,350 (October 2026); shoyu ¥900.',
      chashu: 'Low-temperature pork and chicken chashu; large rare chashu in the shio (October 2026).',
      notable_toppings: ['fried green onion', 'soft-boiled egg', 'nori', 'aedama'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Tanimachi 4-chome\'s thin-noodle chuka soba, with a porcini shio and an aedama second round.',
      profile: { richness: 3, oiliness: 2, clarity: 4, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537840915/', '"A deep richness and refined umami" (shio) — mid-scale.'],
        oiliness: [R + 'B537591934/', 'Niboshi shio "a bit oily" to one diner — placed low overall.'],
        clarity: [R + 'B537840915/', '"A stunning golden broth" — placed high.'],
        tare_strength: [R + 'B537621535/', '"The broth was too strong in soy sauce" to one diner — placed high.'],
        noodle_firmness: [R + 'B525903239/', 'Thin noodles with "texture and chewiness" — mid-scale.'],
        aroma_punch: [R + 'B537399816/', '"The rich aroma of soy sauce wafted up" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537399816/', R + 'B537840915/', R + 'B537621535/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter ordering; free Wi-Fi (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区谷町3-4-9 EM&C谷町ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区谷町三丁目4番9号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525903239/', R + 'B537399816/', R + 'B537840915/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu chuka soba', '¥900', 'Ramen', 'no', 'no', 'October 2026.', 'shoyu'),
      it('', '', 'Special shoyu chuka soba', '¥1,350', 'Ramen', 'no', 'no', 'October 2026.', 'tokusei_shoyu'),
      it('', '', 'Shio chuka soba (porcini, Okinawan salt)', '', 'Ramen', 'no', 'no', 'October 2026.', 'shio'),
      it('', '', 'Special shio niboshi with wontons', '', 'Ramen', 'no', 'no', 'October 2026.', 'niboshi'),
      it('', '', 'Aedama (second noodles)', '¥350', 'Toppings', 'no', 'no', 'October 2026.', 'aedama'),
    ] }, {
    cuisine: '極細ストレート麺の中華そば・醤油中華そば900円: 鶏のスープに香ばしくほんのり甘い醤油・特製醤油1,350円: 低温調理の豚と鶏のチャーシュー、半熟卵、揚げねぎ、海苔・ポルチーニと沖縄の塩の金色のスープに大きなレアチャーシューの塩中華そば・ワンタン入りの特製塩煮干し・和え玉350円: 粉をかけた替え玉をそのまま、次にスープにつけて・カウンター9席',
    neighborhood: '中央区谷町3-4-9 1F。谷町四丁目駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の極細麺、醤油のたれ、ワンタン。',
    vegan_detail: 'ヴィーガンではありません。鶏のスープ、煮干し、豚と鶏のチャーシュー。',
    notes: '[ラーメン・谷町四丁目、極細麺の醤油とポルチーニの塩] 谷町四丁目から1分の明るくきれいなカウンター9席の店で、2023年開店、無休、きれいにたたんだ極細ストレート麺を目当てに通う人も。醤油中華そば(900円)は鶏のスープに香ばしくほんのり甘い醤油、特製(1,350円)は柔らかい低温調理の豚と鶏のチャーシュー、卵、揚げねぎ付き。醤油が強いと感じるなら塩を: ポルチーニと沖縄の塩で深みを出した金色のスープに大きなレアチャーシュー。和え玉(350円)もぜひ、粉をかけた二玉目をそのまま食べ、次にスープにつけて。評価は分かれ、醤油が強すぎ、味玉を忘れられたという声も。昼は12時過ぎに混む。現金のみ。',
  });
}

// ================================================================ 麺富 天洋 大正橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270401/27009431/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.tenyou.jp/';
  put({
    id: 'osaka_mentomi_tenyo_taishobashi', name: '麺富 天洋 大正橋店 (Mentomi Tenyo Taishobashi)', category: 'OMNI',
    lat: 34.667219, lng: 135.48032, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-head, chicken-feet and pork-belly broth; chashu.',
    hours_raw: 'Daily 11:00–05:00 next morning; hours may change (Tabelog). Order verbally. AMEX accepted; no other cards, e-money or QR (Tabelog). Smoking allowed. Coin parking nearby.',
    hours: ALL(day(['11:00', '05:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sangenya-higashi 1-1-1 (Taisho-ku), yellow sign — 3 min from Taisho Stn, near Kyocera Dome',
    cuisine: 'Garlic ramen open until 05:00 · ramen ¥1,100: light tonkotsu-shoyu of pork head, chicken feet, pork belly and vegetables, fresh minced garlic to taste, medium-thick curly noodles, thick, sweet, melting pork-belly chashu · set A +¥350: stir-fried takana, kimchi and rice · miso ramen ¥1,150, miso chashu B set · wakame ramen · "W vinegar" ramen ¥1,250 with black and balsamic vinegar, peppers, onion, ginger and garlic · hyaku-negi ramen ¥1,300 with 100 g of Kujo green onion · tsukemen ¥1,150 with fish powder · gyoza ¥450 · 21 counter seats',
    website: OWN, gmaps: gm('麺富 天洋 大正橋店'), menu_url: null,
    notes: "[Ramen · garlic tonkotsu shoyu until 5 am by Taisho and Kyocera Dome] A lively local garlic-ramen shop under a yellow sign a few minutes from Taisho Station, open until 05:00 and busy after Kyocera Dome events. The base ramen (¥1,100) is a surprisingly light tonkotsu-shoyu, made, the shop says, from pork head, chicken feet, pork belly and vegetables; it comes alive when you load on the fresh minced garlic, adjustable when you order. Medium-thick curly noodles hold it well, and the thick pork-belly chashu melts. Add set A (+¥350) for stir-fried takana, kimchi and rice. Variations include a miso, a hyaku-negi bowl heaped with Kujo green onion, a tangy-spicy \"W vinegar\" ramen, and tsukemen. The same garlic-ramen name has a Shinmachi shop in this guide. Staff are friendly. Smoking allowed; AMEX only for cards.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Garlic ramen shop (official site tenyou.jp; Tabelog; 2026 reviews).', philosophy: 'House tonkotsu of 40% pork head, 40% chicken feet, 10% pork belly and 10% vegetables (October 2026 review).', specialty: 'Garlic ramen.',
      anecdotes: [
        { text: '"The tonkotsu-based broth is surprisingly mild and not overly rich, offering a light texture. However, the addition of robust garlic gives it a powerful punch… The medium-thick curly noodles hold the broth well." — October 2026, ramen ¥1,100.', source: R + 'B467890131/' },
        { text: '"The ramen itself lacks a bit of punch. However, when you add a generous amount of the separately served minced garlic, the flavor explodes." — October 2026.', source: R + 'B536860528/' },
      ],
      japanese_sources_summary: '公式 tenyou.jp。食べログ: 麺富 天洋 大正橋店、大阪市大正区三軒家東1-1-1、大正駅から徒歩3分、毎日11:00〜翌5:00、カードはAMEXのみ、電子マネー・QR不可、21席、喫煙可、コインパーキングあり。口コミ(2026年9〜10月): 京セラドーム近くのにんにくラーメン、ラーメン1,100円、Aセット+350円(高菜炒め、キムチ、ご飯)、味噌ラーメン1,150円、黄色い看板、豚骨ベースで意外にまろやか、にんにくの量を注文時に調整、中太の縮れ麺、厚く柔らかく甘い豚バラチャーシュー、にぎやかで一人でも入りやすい、朝5時まで、味噌チャーシュー麺Bセット、わかめラーメン、Wビネガーラーメン1,250円(黒酢とバルサミコ、ピーマン、白髪ねぎ、生姜、にんにく)、餃子450円、口頭注文、豚骨・もみじ・豚バラ・野菜に醤油ベース、つけ麺1,150円に魚粉、百ねぎラーメン1,300円(九条ねぎ100g)、生のおろしにんにく、ねぎ増しとにんにく増し、スタッフが親切、豚頭4割・もみじ4割・豚バラ1割・秘伝の野菜1割のスープ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B467890131/', R + 'B536860528/', R + 'B499957535/', R + 'B536401197/', R + 'B536739858/', R + 'B537467699/'] },
    ramen: {
      broth_base: ['tonkotsu', 'chicken'], broth_texture: 'paitan', tare: ['shoyu', 'miso'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium-thick', shape: 'wavy', hydration: null, handmade: false, notes: 'Medium-thick curly noodles (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Ramen with fresh minced garlic, ¥1,100 (September–October 2026).',
      chashu: 'Thick, tender, sweet pork-belly chashu (October 2026).',
      notable_toppings: ['fresh minced garlic', 'Kujo green onion (hyaku-negi)', 'takana (set)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork and chicken broth.' },
      pantheon: 'Taisho\'s after-hours garlic ramen: light tonkotsu-shoyu you load with fresh garlic, open until 5 am.',
      profile: { richness: 2, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B467890131/', '"Surprisingly mild and not overly rich" — placed low.'],
        oiliness: [R + 'B536860528/', '"A light tonkotsu ramen" with fatty chashu — mid-scale.'],
        clarity: [R + 'B467890131/', 'Tonkotsu-based broth — placed low.'],
        tare_strength: [R + 'B536860528/', '"The ramen itself lacks a bit of punch" — mid-scale.'],
        noodle_firmness: [R + 'B467890131/', '"Provide a satisfying bite" — mid-scale.'],
        aroma_punch: [R + 'B536860528/', 'With minced garlic "the flavor explodes" — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B467890131/', R + 'B536860528/', R + 'B537467699/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order verbally; friendly staff (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市大正区三軒家東1-1-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市大正区三軒家東一丁目1番1号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B467890131/', R + 'B536401197/', R + 'B536860528/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen', '¥1,100', 'Ramen', 'no', 'no', 'October 2026.', 'ramen'),
      it('', '', 'Set A (takana, kimchi, rice)', '+¥350', 'Sets', 'no', 'no', 'October 2026.', 'set_a'),
      it('', '', 'Miso ramen', '¥1,150', 'Ramen', 'no', 'no', 'October 2026.', 'miso'),
      it('', '', 'W vinegar ramen', '¥1,250', 'Ramen', 'no', 'no', 'September 2026.', 'w_vinegar'),
      it('', '', 'Hyaku-negi ramen', '¥1,300', 'Ramen', 'no', 'no', 'October 2026.', 'hyaku_negi'),
      it('', '', 'Tsukemen', '¥1,150', 'Tsukemen', 'no', 'no', 'October 2026.', 'tsukemen'),
      it('', '', 'Gyoza', '¥450', 'Sides', 'no', 'no', 'September 2026.', 'gyoza'),
    ] }, {
    cuisine: '朝5時まで営業のにんにくラーメン・ラーメン1,100円: 豚頭、もみじ、豚バラ、野菜の軽い豚骨醤油、生のおろしにんにくはお好みで、中太の縮れ麺、厚く甘くとろける豚バラチャーシュー・Aセット+350円: 高菜炒め、キムチ、ご飯・味噌ラーメン1,150円、味噌チャーシュー麺Bセット・わかめラーメン・黒酢とバルサミコ、ピーマン、玉ねぎ、生姜、にんにくのWビネガーラーメン1,250円・九条ねぎ100gの百ねぎラーメン1,300円・魚粉のつけ麺1,150円・餃子450円・カウンター21席',
    neighborhood: '大正区三軒家東1-1-1、黄色い看板。大正駅から徒歩3分、京セラドームの近く',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、餃子。',
    vegan_detail: 'ヴィーガンではありません。豚頭、もみじ、豚バラのスープ、チャーシュー。',
    notes: '[ラーメン・大正駅と京セラドームの近く、朝5時までのにんにく豚骨醤油] 大正駅から数分、黄色い看板のにぎやかな町のにんにくラーメン店で、朝5時まで営業、京セラドームのイベント後は混む。基本のラーメン(1,100円)は意外に軽い豚骨醤油で、店によれば豚頭、もみじ、豚バラ、野菜から。注文時に量を調整できる生のおろしにんにくをたっぷり入れると一気に生きる。中太の縮れ麺がよく絡み、厚い豚バラチャーシューはとろける。Aセット(+350円)で高菜炒め、キムチ、ご飯を。味噌、九条ねぎ山盛りの百ねぎ、酸っぱ辛いWビネガー、つけ麺も。同じ天洋の新町店もこのガイドに掲載。スタッフは気さく。喫煙可、カードはAMEXのみ。',
  });
}

// ================================================================ 中華そば 花京 大正店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270401/27097602/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '23:00']);
  put({
    id: 'osaka_chuka_soba_hanakyo_taisho', name: '中華そば 花京 大正店 (Chuka Soba Hanakyo Taisho)', category: 'OMNI',
    lat: 34.665937, lng: 135.47958, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth with back fat, chashu.',
    hours_raw: 'Tue–Sun 11:30–23:00; closed Mondays (Tabelog, staff-maintained). PayPay accepted; no cards or e-money (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sangenya 1-4-6 (Taisho-ku) — turn right out of JR Taisho Stn, about 20 m along the tracks',
    cuisine: 'Back-fat tonkotsu shoyu chuka soba · rich ajitama chuka soba ¥1,000 · special rich with thick chashu, egg and menma · light (soy) version too · thin straight noodles or thicker Chinese-style noodles; large free; extra noodles extra · moyashi chashu rice bowl ¥360 · 12 counter seats, tables upstairs',
    website: null, gmaps: gm('中華そば 花京 大正店'), menu_url: null,
    notes: "[Ramen · rich back-fat tonkotsu shoyu by JR Taisho Station] A small ramen shop seconds from JR Taisho, open here since 2017 and carrying on a bowl that late-night drinkers once loved at its former Kyobashi shop, with Orix memorabilia and signatures on the walls. The chuka soba is a thick soy tonkotsu glossed with back fat and a strong pork-bone aroma, nostalgic and indulgent but with a clean finish; the rich ajitama version is ¥1,000, and the special adds thick chashu. Choose thin straight noodles or thicker Chinese-style noodles; large is free. Add the moyashi chashu rice bowl (¥360). The pork aroma isn't for everyone, and one diner had cleanliness concerns. Handy before a Kyocera Dome event. Open to 23:00; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 2 April 2017 (Tabelog); formerly in Kyobashi (September 2026 reviews).', background: 'Tonkotsu ramen shop (Tabelog, staff-maintained).', philosophy: null, specialty: 'Back-fat tonkotsu shoyu.',
      anecdotes: [
        { text: '"The broth is rich with back fat and has a strong pork bone aroma, evoking a sense of nostalgia, though it might not be to everyone\'s taste. The noodles are straight and thin." — September 2026.', source: R + 'B536490465/' },
        { text: '"It was a thick soy sauce tonkotsu ramen topped with thick chashu, a soft-boiled egg, and menma. While it was quite rich, the aftertaste was pleasant… large size is free, and you can choose between thin noodles and Chinese-style noodles." — September 2026, special rich chuka soba.', source: R + 'B535393386/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 中華そば 花京 大正店、大阪市大正区三軒家1-4-6、JR大正駅の改札を出て右、高架沿いに天王寺方面へ約20m、火〜日11:30〜23:00、月曜定休、PayPay可、カード・電子マネー不可、24席(2階に4人掛け3卓、カウンター12)、禁煙、2017年4月2日開店、有名人も通う、再開。口コミ(2026年9月): 京橋の名店の味、オリックスのグッズとサイン、こってり味玉中華そば1,000円、もやしチャーシュー丼360円、背脂豚骨、細麺、チャーシュー・メンマ・ねぎ・味玉、豚骨の香り、醤油系もある、京セラドームのイベント前、店主ひとり、特製こってり、濃い醤油豚骨に厚いチャーシュー、後味はよい、大盛り無料、細麺か中華麺を選べる、替え玉は有料、本格的な豚骨、京橋店閉店から7年、くさうま、好みが分かれる、味玉は濃い、清潔さが気になったという声、特製こってり背脂中華そば。',
      confidence: 'medium', sources: [TB, R + 'B536490465/', R + 'B535393386/', R + 'B265932754/', R + 'B535214473/', R + 'B536419014/', R + 'B536679695/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['back fat'], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight, or thicker Chinese-style noodles; large free (September 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Rich ajitama chuka soba, ¥1,000 (September 2026).',
      chashu: 'Thick chashu with a nostalgic, meaty flavor (September 2026).',
      notable_toppings: ['back fat', 'seasoned egg', 'menma', 'green onion'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Tonkotsu and back fat.' },
      pantheon: 'Taisho\'s nostalgic back-fat tonkotsu shoyu, the old Kyobashi bowl by the station.',
      profile: { richness: 5, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536679695/', '"It was incredibly rich and delicious!"'],
        oiliness: [R + 'B536490465/', '"Rich with back fat" — placed high.'],
        clarity: [R + 'B535393386/', '"A thick soy sauce tonkotsu ramen" — placed low.'],
        tare_strength: [R + 'B535393386/', 'Thick soy tonkotsu — placed high.'],
        noodle_firmness: [R + 'B536419014/', 'Thin noodles "paired perfectly with the thick broth" — mid-scale.'],
        aroma_punch: [R + 'B536490465/', '"A strong pork bone aroma" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B536490465/', R + 'B535393386/', R + 'B536679695/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small shop by the station; PayPay accepted; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市大正区三軒家1-4-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; GSI resolved only to the ward (218m), so the Tabelog point is kept, consistent with the listing\'s "20 m from Taisho Stn" directions; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B265932754/', R + 'B535393386/'],
    price_note: 'Prices from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Rich ajitama chuka soba', '¥1,000', 'Ramen', 'no', 'no', 'September 2026.', 'kotteri_ajitama'),
      it('', '', 'Special rich chuka soba', '', 'Ramen', 'no', 'no', 'September 2026.', 'tokusei'),
      it('', '', 'Moyashi chashu rice bowl', '¥360', 'Rice', 'no', 'no', 'September 2026.', 'moyashi_don'),
    ] }, {
    cuisine: '背脂の豚骨醤油の中華そば・こってり味玉中華そば1,000円・厚いチャーシュー、卵、メンマの特製こってり・あっさり(醤油)も・細ストレート麺か太めの中華麺、大盛り無料、替え玉は有料・もやしチャーシュー丼360円・カウンター12席、2階にテーブル',
    neighborhood: '大正区三軒家1-4-6。JR大正駅を出て右、高架沿いに約20m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。背脂の豚骨スープ、チャーシュー。',
    notes: '[ラーメン・JR大正駅すぐ、背脂こってり豚骨醤油] JR大正駅から数秒の小さなラーメン店で、2017年からここで営業、かつて京橋で飲んだあとの客に愛された一杯を受け継ぎ、壁にはオリックスのグッズやサイン。中華そばは背脂が光り豚骨の香りが強い濃い醤油豚骨で、懐かしく背徳的だが後味はすっきり。こってり味玉は1,000円、特製は厚いチャーシュー付き。細ストレート麺か太めの中華麺を選べ、大盛り無料。もやしチャーシュー丼(360円)も。豚骨の香りは好みが分かれ、清潔さが気になったという声も。京セラドームのイベント前にも便利。23時まで、月曜定休。',
  });
}

// ================================================================ ちょんまげ食堂 ラーメン部
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27067498/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:30'], ['17:30', '23:30']), WE = day(['11:30', '23:30']);
  put({
    id: 'osaka_chonmage_shokudo_ramenbu_uehonmachi', name: 'ちょんまげ食堂 ラーメン部 (Chonmage Shokudo Ramen Bu)', category: 'OMNI',
    lat: 34.675705, lng: 135.520991, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy and miso tare; gyoza and kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu and chicken paitan broths, chashu, butter.',
    hours_raw: 'Mon, Tue, Thu, Fri 11:30–14:30 and 17:30–23:30; Wed 11:30–14:00; Sat–Sun 11:30–23:30; may close early when the soup runs out (Tabelog, staff-maintained). E-money and PayPay accepted; no cards (Tabelog).',
    hours: { 0: WD, 1: WD, 2: day(['11:30', '14:00']), 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Uehonmachi 1-1-18, 1F (Tennoji-ku) — near Tanimachi 6-chome Stn exit 7',
    cuisine: 'Ramen and set-meal diner that doubles as an izakaya · lunch ramen set ¥990: soy tonkotsu ramen with gyoza and rice · spicy miso ramen with rice ¥1,140: mild, creamy, with mizuna · chicken paitan shio and shoyu · garlic-butter chicken ramen set with gyoza and rice ¥1,600 · smaller mini-ramen sets · kara-age rice bowl · gyoza, fries, beer · garlic powder and other condiments on the counter · counter and tables, 16 seats',
    website: null, gmaps: gm('ちょんまげ食堂 ラーメン部 上本町'), menu_url: null,
    notes: "[Ramen · a ramen-and-set-meal diner by Tanimachi 6-chome] A casual ramen diner near Tanimachi 6-chome, open since 2012, where you can have a quick lunch set or settle in for beer, gyoza and fries at night, with the TV on. The lunch ramen set (¥990) pairs a rich soy tonkotsu with gyoza and rice. The spicy miso (¥1,140 with rice) is mild and creamy rather than fiery, with crunchy mizuna. There are chicken paitan bowls in shio or shoyu, rich and punchy, and a garlic-butter chicken ramen with thin noodles as a ¥1,600 set. Smaller mini-ramen sets suit lighter appetites, and garlic powder on the counter perks things up. One diner found the noodles a little soft. Short waits at lunch; open late most nights.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 6 June 2012 (Tabelog)', background: 'Ramen and set-meal shop with an izakaya menu (Tabelog, staff-maintained).', philosophy: null, specialty: 'Ramen sets with gyoza and rice.',
      anecdotes: [
        { text: '"I took a sip of the soup first, and while it wasn\'t overly spicy, it had a mild, creamy flavor that was rich and very delicious… the crunchy mizuna added a nice touch." — July 2026, spicy miso ramen with rice ¥1,140.', source: R + 'B532547409/' },
        { text: '"The rich chicken broth infused with garlic butter paired perfectly with the thin noodles, making it delicious." — September 2026, garlic butter ramen set ¥1,600.', source: R + 'B536045265/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): ちょんまげ食堂 ラーメン部、大阪市天王寺区上本町1-1-18 武島ビル 1F、谷町六丁目駅7番出口から、月火木金11:30〜14:30・17:30〜23:30、水11:30〜14:00、土日11:30〜23:30、スープがなくなり次第終了、電子マネー・PayPay可、カード不可、16席、禁煙、2012年6月6日開店。口コミ(2026年7〜9月): 鶏白湯塩ラーメン、カウンターに調味料、ガーリックパウダー、12:20に3人待ちで5分、辛味噌ラーメンと白ご飯1,140円、辛すぎずクリーミーでまろやか、ほぼストレート麺、水菜、柔らかいチャーシュー、何度も来ている、ミニラーメンのセット、唐揚げ丼、デザート付き、餃子・ポテト・ビール、鶏白湯醤油に味玉、濃厚でパンチ、麺はやや柔らかい、ハーフラーメンとハーフご飯のセット、ランチのラーメン定食990円(醤油豚骨、餃子、ご飯)、ガーリックバターラーメンと焼き餃子と白ご飯のセット1,600円、細麺、居酒屋使いも、テレビを見ながら。',
      confidence: 'medium', sources: [TB, R + 'B532547409/', R + 'B536045265/', R + 'B532245982/', R + 'B533447866/', R + 'B533680015/', R + 'B534881985/'] },
    ramen: {
      broth_base: ['tonkotsu', 'chicken'], broth_texture: 'paitan', tare: ['shoyu', 'shio', 'miso'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Mostly straight, thin noodles; a little soft to one diner (July–September 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan'],
      signature_bowl: 'Lunch ramen set with gyoza and rice, ¥990 (September 2026).',
      chashu: 'Tender, well-simmered chashu (July 2026).',
      notable_toppings: ['mizuna', 'garlic butter', 'garlic powder (counter)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork and chicken broth.' },
      pantheon: 'Tanimachi 6-chome\'s all-day ramen diner: ¥990 sets by day, beer and gyoza by night.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 2, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B533680015/', '"The broth was quite rich and had a strong punch of flavor."'],
        oiliness: [R + 'B532547409/', 'Spicy miso "not heavy at all" — mid-scale.'],
        clarity: [R + 'B534881985/', '"A rich, soy-based tonkotsu flavor" — placed low.'],
        tare_strength: [R + 'B533680015/', '"A strong punch of flavor" — placed high.'],
        noodle_firmness: [R + 'B533680015/', '"The noodles were on the softer side" — placed low.'],
        aroma_punch: [R + 'B532245982/', '"Adding garlic powder really enhanced the flavor" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B533680015/', R + 'B532547409/', R + 'B534881985/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual diner with counter and tables; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区上本町1-1-18 武島ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区上本町一丁目1番18号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534881985/', R + 'B532547409/', R + 'B536045265/'],
    price_note: 'Prices from July–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch ramen set (ramen, gyoza, rice)', '¥990', 'Sets', 'no', 'no', 'September 2026.', 'ramen_teishoku'),
      it('', '', 'Spicy miso ramen with rice', '¥1,140', 'Ramen', 'no', 'no', 'July 2026.', 'kara_miso'),
      it('', '', 'Chicken paitan ramen (shio or shoyu)', '', 'Ramen', 'no', 'no', 'July–August 2026.', 'tori_paitan'),
      it('', '', 'Garlic butter ramen set', '¥1,600', 'Sets', 'no', 'no', 'September 2026.', 'garlic_butter'),
      it('', '', 'Kara-age rice bowl', '', 'Rice', 'no', 'no', 'July 2026.', 'karaage_don'),
    ] }, {
    cuisine: '居酒屋にもなるラーメンと定食の店・昼のラーメン定食990円: 醤油豚骨ラーメンに餃子とご飯・辛味噌ラーメンとご飯1,140円: まろやかでクリーミー、水菜・鶏白湯の塩と醤油・鶏のガーリックバターラーメンと餃子とご飯のセット1,600円・小さめのミニラーメンのセット・唐揚げ丼・餃子、ポテト、ビール・カウンターにガーリックパウダーなどの調味料・カウンターとテーブルで16席',
    neighborhood: '天王寺区上本町1-1-18 1F。谷町六丁目駅7番出口の近く',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油や味噌のたれ、餃子と唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。豚骨と鶏白湯のスープ、チャーシュー、バター。',
    notes: '[ラーメン・谷町六丁目近く、ラーメンと定食の食堂] 谷町六丁目近くの気軽なラーメン食堂で、2012年開店、昼はさっと定食、夜はテレビを見ながらビールに餃子やポテトでゆっくりも。昼のラーメン定食(990円)は濃い醤油豚骨に餃子とご飯。辛味噌(ご飯付き1,140円)は辛さよりまろやかでクリーミー、シャキシャキの水菜。鶏白湯は塩か醤油で濃厚でパンチがあり、細麺の鶏のガーリックバターラーメンは1,600円のセットで。小さめのミニラーメンのセットも、カウンターのガーリックパウダーで味変を。麺がやや柔らかいという声も。昼は少し待つ程度、ほとんどの夜は遅くまで。',
  });
}

save();
