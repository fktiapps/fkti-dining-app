// Osaka sweep (2-mile circle around Dotonbori), batch 117 — ramen phase (all OMNI).
//   + 中華そば トライ (late-night Takaida-style dark shoyu on thick noodles, 19:00–03:00, one-person shop; Tennoji) — mom_and_pop
//   + 麺富 天洋 九条店 (the 1988 garlic tonkotsu-shoyu shop, open to 05:00–06:00; Kujo by Kyocera Dome)
//   + 牛骨ら～めん ぶっこ志 北浜店 (creamy beef-bone paitan ramen from ¥850; Doshomachi)
//   + 麻婆倶楽部 肥後橋店 (mapo mazesoba under a giant fried-to-order chicken katsu; Edobori)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 117);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 中華そば トライ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27092030/'; const R = TB + 'dtlrvwlst/';
  const D = day(['19:00', '03:00']);
  put({
    id: 'osaka_chuka_soba_try_tennoji', name: '中華そば トライ (Chuka Soba Try)', category: 'OMNI',
    lat: 34.651815, lng: 135.513991, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; dark soy broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu; the broth base is not described in sources.',
    hours_raw: 'Mon–Sat 19:00–03:00 (food L.O. 02:30); closed Sun; hours may change (Tabelog). Run by one person (May 2026). Self-service canned drinks; rice balls on the counter (2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Daido 1-7-11 (Tennoji-ku), on Tanimachi-suji — 6–7 min from Tennoji Stn',
    cuisine: 'Late-night Takaida-style chuka soba · chuka soba ¥700: dark, clear soy broth, thick straight noodles, chashu, menma, chunky-cut green onion · chashu ramen ¥900 · seasoned egg ¥150 · rice balls on the counter · canned beer ¥400, self-service drinks',
    website: null, gmaps: gm('中華そば トライ 天王寺'), menu_url: null,
    notes: "[Ramen · late-night Takaida-style dark shoyu on thick noodles, near Tennoji] A one-person chuka soba counter on Tanimachi-suji a short walk from Tennoji, open from 19:00 to 03:00, a natural stop after a night out. It serves Takaida-style ramen, the Osaka and Higashi-Osaka genre: a dark, clear soy broth and thick straight noodles with real chew, under chashu, menma and green onion cut in big, crunchy pieces. The chuka soba is ¥700 and the chashu ramen ¥900 with generous slices. Diners differ on the broth: some find it punchy, one found it milder than it looks, another lukewarm, with tough chashu. Grab a rice ball from the counter, and help yourself to a canned beer. The owner is cheerful. Cash only; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 May 2016 (Tabelog)', background: 'Late-night ramen counter run by one person (May 2026 review; Tabelog).', philosophy: null, specialty: 'Takaida-style chuka soba.',
      anecdotes: [
        { text: '"The standout features are the \'rich soy sauce\' and \'thick noodles!\' The dark broth has a clear soy sauce flavor… The thick noodles have a satisfying chewiness." — August 2026.', source: R + 'B534555519/' },
        { text: '"The noodles are thick and quite filling. The green onions are cut into larger pieces, which pair well with the broth. The chashu was generously served and delicious." — October 2026, chashu ramen.', source: R + 'B537198347/' },
      ],
      japanese_sources_summary: '食べログ: 中華そば トライ、大阪市天王寺区大道1-7-11、天王寺から522m、月〜土 19:00〜翌3:00(L.O. 2:30)、日休み、カード・電子マネー・QR不可、2016年5月1日開店。口コミ(2026年3〜10月): 19時から深夜3時まで、Takaida系の中華そば、飲んだ後に、セルフのドリンク、中華そば700円、味玉150円、缶ビール400円、店主一人で切り盛り、チャーシュー麺(並)900円、濃い醤油、中太〜太い麺、大きく切ったねぎ、明るい店主、谷町筋沿いで天王寺駅から徒歩6〜7分、大阪・東大阪のご当地ラーメン、濃い醤油と太麺、ストレートの太麺、スープがぬるくチャーシューが硬く臭みがあったという声、見た目ほど濃くないという声、カウンターのおにぎり、チャーシューたっぷり。',
      confidence: 'medium', sources: [TB, R + 'B524259938/', R + 'B527337274/', R + 'B534555519/', R + 'B535837907/', R + 'B536566430/', R + 'B537198347/'] },
    ramen: {
      broth_base: [], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thick', shape: 'straight', hydration: null, handmade: false, notes: 'Thick straight noodles (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Chuka soba ¥700; chashu ramen ¥900 (2026).',
      chashu: 'Generous slices (October 2026); tough to one diner (September 2026).',
      notable_toppings: ['chunky green onion', 'menma', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles; soy broth.' },
      vegan: { status: 'no', note: 'Chashu.' },
      pantheon: 'Tennoji\'s one-person, 7 pm–3 am Takaida-style dark shoyu on thick noodles.',
      profile: { richness: 3, oiliness: 2, clarity: 4, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536566430/', '"Wasn\'t as intense in flavor as it appeared" — mid-scale.'],
        oiliness: [R + 'B534555519/', 'Clear soy broth; no remark on oil — placed low.'],
        clarity: [R + 'B534555519/', '"The dark broth has a clear soy sauce flavor" — placed high.'],
        tare_strength: [R + 'B527337274/', '"It has a rich soy sauce flavor"; "quite strong… punchy" (B534555519) — placed high.'],
        noodle_firmness: [R + 'B534555519/', '"The thick noodles have a satisfying chewiness" — placed high.'],
        aroma_punch: [R + 'B537198347/', 'Large-cut green onions; no remark on aroma — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B534555519/', R + 'B536566430/', R + 'B537198347/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Cheerful owner; self-service drinks (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市天王寺区大道1-7-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区大道一丁目7番11号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524259938/', R + 'B527337274/'],
    price_note: 'Prices from March–May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba', '¥700', 'Ramen', 'no', 'no', 'September 2026.', 'chuka'),
      it('', '', 'Chashu ramen', '¥900', 'Ramen', 'no', 'no', 'May 2026.', 'chashu_men'),
      it('', '', 'Seasoned egg', '¥150', 'Toppings', 'no', 'no', 'March 2026.', 'ajitama'),
      it('', '', 'Canned beer', '¥400', 'Drinks', 'ask', 'ask', 'March 2026.', 'beer'),
    ] }, {
    cuisine: '深夜のTakaida系中華そば・中華そば700円: 澄んだ濃い色の醤油スープ、太いストレート麺、チャーシュー、メンマ、大きく切ったねぎ・チャーシュー麺900円・味玉150円・カウンターにおにぎり・缶ビール400円、ドリンクはセルフ',
    neighborhood: '天王寺区大道1-7-11、谷町筋沿い。天王寺駅から徒歩6〜7分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、濃い醤油のスープ。',
    vegan_detail: 'ヴィーガンではありません。チャーシュー、スープのベースは情報源に記載なし。',
    notes: '[ラーメン・天王寺近く、深夜のTakaida系、太麺の濃い醤油] 天王寺から少し歩いた谷町筋沿い、店主一人の中華そばのカウンターで、19時から深夜3時まで、飲んだ後に寄りやすい。大阪・東大阪のご当地ラーメンTakaida系で、澄んだ濃い色の醤油スープにしっかりコシのある太いストレート麺、チャーシュー、メンマ、大きくザクザク切ったねぎ。中華そばは700円、チャーシューたっぷりのチャーシュー麺は900円。スープの評価は分かれ、パンチがあるという人、見た目ほど濃くないという人、ぬるくてチャーシューが硬かったという人も。カウンターのおにぎりを取り、缶ビールはセルフで。店主は明るい。現金のみ、日曜休み。',
  });
}

// ================================================================ 麺富 天洋 九条店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270401/27015118/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.tenyou.jp/';
  const D = day(['11:00', '06:00']);
  put({
    id: 'osaka_mentomi_tenyo_kujo', name: '麺富 天洋 九条店 (Mentomi Tenyo Kujo)', category: 'OMNI',
    lat: 34.674511, lng: 135.478124, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy and miso tare; curry noodles; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu-shoyu broth; pork chashu.',
    hours_raw: 'Daily 11:00–24:00 and on through the night to 05:00 (Sun night) or 06:00 (other nights); hours may change (Tabelog). Busy after Kyocera Dome games (September 2026). Choose garlic (none, a little, a lot) and noodle firmness. AMEX, e-money and QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: day(['11:00', '05:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Chiyozaki 1-27-9 (Nishi-ku) — 5 min from Kujo or Osaka Dome-mae Chiyozaki Stn, by Kyocera Dome',
    cuisine: 'Garlic tonkotsu-shoyu ramen, nearly round the clock · ramen ¥1,100: light tonkotsu shoyu, medium curly noodles, very tender slow-cooked domestic pork chashu, green onion, bean sprouts, minced garlic to taste (mix it up from the bottom) · miso ramen ¥1,150 · negi ramen ¥1,300 · miso chashu ramen ¥1,700 · W vinegar ramen · chilled ramen · curry noodles with a curry simmered 100 hours · tsukemen · gyoza · B set ¥450: chashu rice bowl and kimchi, free large rice · bottled beer ¥650 · 8 counter seats, two tables for four',
    website: OWN, gmaps: gm('麺富 天洋 九条店'), menu_url: null,
    notes: "[Ramen · garlic tonkotsu shoyu almost all night, by Kyocera Dome] The Kujo shop of the Tenyo garlic-ramen family, open since 1988 and now renovated and renamed from \"Garlic Ramen Tenyo,\" serving from 11:00 straight through to 05:00 or 06:00. It fills after Kyocera Dome games. The ramen (¥1,100) is a surprisingly light tonkotsu shoyu that the garlic transforms: ask for none, a little or a lot, and stir it up from the bottom. The chashu is slow-cooked domestic pork so soft it falls apart, and it's even better shredded in sweet-spicy sauce over the B-set rice bowl (¥450, large free). The menu now runs to miso, a negi ramen, a tangy W vinegar ramen, curry noodles and tsukemen. One diner found the noodles clumped. Tenyo's Shinmachi and Taishobashi shops are also in this guide.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 17 December 1988 (Tabelog)', background: 'Garlic ramen shop of the Tenyo name, formerly "Garlic Ramen Tenyo" (October 2026 review; official site tenyou.jp).', philosophy: null, specialty: 'Garlic tonkotsu-shoyu ramen.',
      anecdotes: [
        { text: '"The light tonkotsu soy sauce broth pairs perfectly with the medium-thin curly noodles… Slow-cooked domestic pork that has a melt-in-your-mouth texture, reminiscent of kakuni." — September 2026, ramen ¥1,100.', source: R + 'B536110762/' },
        { text: '"The name has also changed from \'Garlic Ramen Tenyo\' to just \'Tenyo.\' That said, the garlic ramen is still the highlight… options like miso ramen, tsukemen, and curry." — October 2026.', source: R + 'B537118071/' },
      ],
      japanese_sources_summary: '公式 tenyou.jp。食べログ: 麺富 天洋 九条店、大阪市西区千代崎1-27-9、九条駅・ドーム前千代崎駅から徒歩5分、毎日11:00〜24:00、月曜は0:00〜5:00、火〜日は0:00〜6:00も、カードはAMEX、電子マネー・QR可、16席(カウンター8、4人席2)、1988年12月17日開店。口コミ(2026年9〜10月): 京セラドームの試合後、ラーメン1,100円、味噌ラーメン1,150円、ねぎラーメン1,300円、チャーシュー丼セット+550円、瓶ビール650円、にんにくはなし・少し・多め、麺は硬めか普通、柔らかいチャーシューとご飯、Wビネガーラーメン、冷やしラーメン、100時間煮込んだカレーのカレー麺、餃子、細めでコシのある麺という声、味噌チャーシュー麺1,700円、厚切りチャーシュー、麺がくっついていたという声、軽い豚骨醤油、中細の縮れ麺、角煮のような国産豚のチャーシュー、ねぎ・もやし・刻みにんにく、底から混ぜる、Bセット450円(チャーシュー丼とキムチ、大盛り無料)、改装して店名が変わった、「にんにくラーメン天洋」から「天洋」へ、味噌・つけ麺・カレーも、昔より軽い豚骨、中太の縮れ麺。',
      confidence: 'medium', sources: [TB, OWN, R + 'B534813353/', R + 'B535401485/', R + 'B535681337/', R + 'B535768540/', R + 'B536110762/', R + 'B537118071/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu', 'miso'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'wavy', hydration: null, handmade: false, notes: 'Medium-thin to medium-thick curly noodles, firmness to order (September–October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Ramen with garlic, ¥1,100 (September 2026).',
      chashu: 'Slow-cooked domestic pork, melt-in-the-mouth like kakuni (September 2026).',
      notable_toppings: ['minced garlic', 'bean sprouts', 'green onion (negi ramen)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Kujo\'s 1988 garlic tonkotsu shoyu, open until dawn for the Dome crowd.',
      profile: { richness: 2, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B537118071/', '"The soup is quite light and easy to drink" — placed low.'],
        oiliness: [R + 'B536110762/', '"A rich pork flavor, it\'s not too heavy" — mid-scale.'],
        clarity: [R + 'B536110762/', 'Light tonkotsu shoyu — placed low.'],
        tare_strength: [R + 'B536110762/', '"The light tonkotsu soy sauce broth" — mid-scale.'],
        noodle_firmness: [R + 'B535681337/', '"Thin yet firm" to one diner; clumped to another (B535768540) — mid-scale.'],
        aroma_punch: [R + 'B536110762/', '"The garlic flavor spreads throughout the broth… The punch of garlic" — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B536110762/', R + 'B537118071/', R + 'B535681337/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Quick service; garlic and firmness to order (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区千代崎1-27-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区千代崎一丁目27番9号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534813353/', R + 'B536110762/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen', '¥1,100', 'Ramen', 'no', 'no', 'September 2026.', 'ramen'),
      it('', '', 'Miso ramen', '¥1,150', 'Ramen', 'no', 'no', 'September 2026.', 'miso'),
      it('', '', 'Negi ramen', '¥1,300', 'Ramen', 'no', 'no', 'September 2026.', 'negi'),
      it('', '', 'Miso chashu ramen', '¥1,700', 'Ramen', 'no', 'no', 'September 2026.', 'miso_chashu'),
      it('', '', 'W vinegar ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'w_vinegar'),
      it('', '', 'Curry noodles', '', 'Noodles', 'no', 'no', 'September 2026.', 'curry'),
      it('', '', 'B set (chashu rice bowl, kimchi)', '¥450', 'Sets', 'no', 'no', 'September 2026; large free.', 'b_set'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'September 2026.', 'gyoza'),
    ] }, {
    cuisine: 'ほぼ一晩中のにんにく豚骨醤油ラーメン・ラーメン1,100円: 軽い豚骨醤油、中太の縮れ麺、じっくり煮た国産豚のとろけるチャーシュー、ねぎ、もやし、刻みにんにくはお好みで(底から混ぜて)・味噌ラーメン1,150円・ねぎラーメン1,300円・味噌チャーシュー麺1,700円・Wビネガーラーメン・冷やしラーメン・100時間煮込んだカレーのカレー麺・つけ麺・餃子・Bセット450円: チャーシュー丼とキムチ、ご飯大盛り無料・瓶ビール650円・カウンター8席、4人席2卓',
    neighborhood: '西区千代崎1-27-9。九条駅・ドーム前千代崎駅から徒歩5分、京セラドームのそば',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油と味噌のたれ、カレー麺、餃子。',
    vegan_detail: 'ヴィーガンではありません。豚骨醤油のスープ、豚のチャーシュー。',
    notes: '[ラーメン・京セラドームのそば、ほぼ朝まで営業のにんにく豚骨醤油] 天洋のにんにくラーメンの九条店で、1988年開店、改装して「にんにくラーメン天洋」から店名が変わり、11時から朝5時か6時まで通しで営業。京セラドームの試合後は満席に。ラーメン(1,100円)は意外に軽い豚骨醤油で、にんにくで一変する: なし、少し、多めから選び、底から混ぜて。チャーシューはほろほろに崩れる柔らかさのじっくり煮た国産豚で、甘辛いたれでほぐしてのせたBセットのチャーシュー丼(450円、大盛り無料)もおすすめ。今は味噌、ねぎラーメン、酸っぱいWビネガー、カレー麺、つけ麺も。麺がくっついていたという声も。天洋の新町店と大正橋店もこのガイドに掲載。',
  });
}

// ================================================================ 牛骨ら～めん ぶっこ志 北浜店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27093042/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '14:30'], ['17:30', '22:45']);
  put({
    id: 'osaka_gyukotsu_ramen_bukkoshi_kitahama', name: '牛骨ら～めん ぶっこ志 北浜店 (Gyukotsu Ramen Bukkoshi Kitahama)', category: 'OMNI',
    lat: 34.688526, lng: 135.507612, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat noodles; tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-bone broth; beef-belly chashu; egg.',
    hours_raw: 'Mon–Fri 11:00–14:30 and 17:30–22:45; closed Sat–Sun (Tabelog). One diner found it open on a Sunday via the shop\'s Instagram (October 2026). Ticket machine; self-service water. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Doshomachi 1-5-12 — 5 min from Kitahama Stn',
    cuisine: 'Beef-bone paitan ramen · gyukotsu paitan ramen with soft-boiled egg ¥850: white, creamy yet light beef-bone soup slowly simmered, no dairy, beef-belly chashu, white negi, pea shoots, baby corn, homemade straight noodles · extra-meat gyukotsu paitan ¥1,250 · spicy gyukotsu paitan with egg ¥1,100 · lunch white rice ¥100 · roast beef rice · grilled pork rice bowl · 11 counter seats',
    website: null, gmaps: gm('ぶっこ志 北浜店'), menu_url: null,
    notes: "[Ramen · creamy beef-bone paitan ramen from ¥850 in Kitahama] A small weekday counter in Kitahama serving gyukotsu ramen, a white soup slow-simmered from beef bones, part of a family of beef-bone shops. It looks like tonkotsu but tastes lighter and gentler, creamy without dairy, so you'll likely finish the soup. The basic bowl with a soft-boiled egg is only ¥850; the extra-meat version (¥1,250) piles on thin, flavorful beef-belly chashu, and pea shoots and baby corn keep it fresh. The spicy version (¥1,100) brings real heat without hiding the beef. Noodles are homemade and straight, a bit firm. Add lunch rice for ¥100 or a roast beef rice bowl. One diner found the chashu tired one day. Weekdays only per Tabelog; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 July 2016 (Tabelog)', background: 'Beef-bone ramen shop, Kitahama branch, part of a group of beef-bone ramen shops (September 2026 review; Tabelog).', philosophy: null, specialty: 'Gyukotsu paitan ramen.',
      anecdotes: [
        { text: '"The distinctive feature of this ramen is the white broth, slowly simmered from beef bones. The rich umami of the beef is concentrated yet not overpowering, and the texture is creamy." — October 2026, extra-meat gyukotsu paitan ¥1,250.', source: R + 'B537477997/' },
        { text: '"At first glance, the soup looks like a traditional tonkotsu ramen, but in reality, it\'s creamy yet light and very easy to drink, with a gentle flavor." — October 2026, gyukotsu paitan with egg ¥850.', source: R + 'B538095614/' },
      ],
      japanese_sources_summary: '食べログ: 牛骨ら～めん ぶっこ志 北浜店、大阪市中央区道修町1-5-12、北浜駅から徒歩5分、月〜金 11:00〜14:30・17:30〜22:45、土日休み、カード・電子マネー・QR不可、カウンター11席、2016年7月11日開店。口コミ(2026年9〜10月): 牛骨スープの専門店、Kokorozashiグループの系列という声、辛い牛白湯の味玉1,100円、クリーミーなスープと辛さのバランス、食券制、水はセルフ、カウンター約8席という声、白濁したスープ、チャーシュー2枚、白髪ねぎ、豆苗、麺は少し固め、肉増し牛骨白湯1,250円、ランチの白ご飯100円、牛バラのチャーシュー、ヤングコーン、自家製のストレート麺、日曜にInstagramで営業を確認、乳製品を使わず軽いのにコク、焼豚丼は売り切れでローストビーフご飯、チャーシューに臭みがあったという声、牛骨白湯ラーメン(味玉)850円、飲んだ後にも。',
      confidence: 'medium', sources: [TB, R + 'B536120134/', R + 'B537058748/', R + 'B537477997/', R + 'B537737178/', R + 'B538095614/', R + 'B538114676/'] },
    ramen: {
      broth_base: ['beef'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: 'straight', hydration: null, handmade: true, notes: 'Homemade straight noodles, a bit firm (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Gyukotsu paitan ramen with soft-boiled egg, ¥850 (October 2026).',
      chashu: 'Thin beef-belly chashu (October 2026).',
      notable_toppings: ['pea shoots', 'baby corn', 'white negi', 'soft-boiled egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Beef-bone broth.' },
      pantheon: 'Kitahama\'s ¥850 beef-bone paitan: tonkotsu-white, but lighter and creamy without dairy.',
      profile: { richness: 3, oiliness: 2, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537477997/', '"Concentrated yet not overpowering" — mid-scale.'],
        oiliness: [R + 'B538095614/', '"Creamy yet light and very easy to drink" — placed low.'],
        clarity: [R + 'B537058748/', '"In the white, cloudy broth" — bottom of scale.'],
        tare_strength: [R + 'B538095614/', '"A gentle flavor" — mid-scale.'],
        noodle_firmness: [R + 'B537058748/', '"The noodles were a bit firm"; "a delightful chewiness" (B537477997) — placed high.'],
        aroma_punch: [R + 'B536120134/', '"The aroma was just right" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537477997/', R + 'B538095614/', R + 'B537058748/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; self-service water (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道修町1-5-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道修町一丁目5番12号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537477997/', R + 'B538095614/', R + 'B536120134/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Gyukotsu paitan ramen with soft-boiled egg', '¥850', 'Ramen', 'no', 'no', 'October 2026.', 'gyu_paitan'),
      it('', '', 'Extra-meat gyukotsu paitan ramen', '¥1,250', 'Ramen', 'no', 'no', 'October 2026.', 'niku_mashi'),
      it('', '', 'Spicy gyukotsu paitan with soft-boiled egg', '¥1,100', 'Ramen', 'no', 'no', 'September 2026.', 'kara'),
      it('', '', 'Lunch white rice', '¥100', 'Rice', 'ask', 'ask', 'October 2026.', 'rice'),
      it('', '', 'Roast beef rice', '', 'Rice', 'no', 'no', 'October 2026.', 'roast_beef'),
    ] }, {
    cuisine: '牛骨白湯のラーメン・味玉入り牛骨白湯ラーメン850円: じっくり炊いた白くクリーミーなのに軽い牛骨スープ、乳製品不使用、牛バラのチャーシュー、白髪ねぎ、豆苗、ヤングコーン、自家製のストレート麺・肉増し牛骨白湯1,250円・味玉入りの辛い牛骨白湯1,100円・ランチの白ご飯100円・ローストビーフご飯・焼豚丼・カウンター11席',
    neighborhood: '中央区道修町1-5-12。北浜駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の自家製麺、たれ。',
    vegan_detail: 'ヴィーガンではありません。牛骨スープ、牛バラのチャーシュー、卵。',
    notes: '[ラーメン・北浜、850円からのクリーミーな牛骨白湯] 北浜の平日の小さなカウンターで、牛骨をじっくり炊いた白いスープの牛骨ラーメンの店、牛骨ラーメンの系列店のひとつ。見た目は豚骨だが軽くやさしく、乳製品なしでクリーミーなので、スープまで飲み干しやすい。基本の味玉入りはわずか850円、肉増し(1,250円)は薄切りで味の濃い牛バラのチャーシューがたっぷり、豆苗とヤングコーンがさわやか。辛い(1,100円)はしっかり辛いのに牛の味を消さない。麺は自家製のストレートでやや固め。ランチのご飯100円かローストビーフご飯を添えて。チャーシューに臭みがあった日もという声。食べログでは平日のみ、現金のみ。',
  });
}

// ================================================================ 麻婆倶楽部 肥後橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27142268/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://mabo-club.com/';
  put({
    id: 'osaka_mabo_club_higobashi', name: '麻婆倶楽部 肥後橋店 (MABO CLUB Higobashi)', category: 'OMNI',
    lat: 34.688688, lng: 135.495347, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; breaded fried chicken and pork katsu; bean-sauce mapo.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: minced meat in the mapo; chicken and pork katsu.',
    hours_raw: 'Daily 11:00–14:30 and 17:30–22:00; hours may change (Tabelog). Lunch waits of about 10 minutes (August 2026). Ticket machine; paper aprons. Cash only: no cards, e-money or QR (Tabelog).',
    hours: ALL(day(['11:00', '14:30'], ['17:30', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Edobori 1-20-4 (Nishi-ku) — 288 m from Higobashi Stn',
    cuisine: 'Mapo mazesoba under fried katsu · チキンカツ麻婆麺 chicken katsu mabo noodles ¥1,400–1,600 (price rose in 2026): medium-thick chewy noodles coated in a thick, rich mapo with sweet bean sauce and Sichuan-pepper numbing, under a huge chicken-thigh katsu fried to order, with a mini rice to dive in at the end · five heat levels, up to 3 free · pork katsu version · chicken katsu mapo rice ¥1,200 · spicy cold noodles, large (summer) · weekly set meal · counter and tables',
    website: OWN, gmaps: gm('麻婆倶楽部 肥後橋店'), menu_url: null,
    notes: "[Ramen · mapo mazesoba under a giant fried-to-order katsu, near Higobashi] A stylish, black-themed counter near Higobashi, open since 2024, whose signature is built for photos: a mapo mazesoba hidden under a chicken-thigh katsu so large it covers the bowl. Mix the noodles through the thick mapo first; it's rich with sweet bean sauce and a Sichuan-pepper tingle rather than fiery, and the katsu, fried to order, stays crisp in the sauce. Pick from five heat levels (three free); level 3 is sweat-inducing, one diner warns. A mini rice comes on the side to dive into the leftovers. The bowl now runs ¥1,600 after a price rise, and it's a lot of food. There's also a mapo rice, cold noodles in summer and a weekly set. Expect a short wait at lunch. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 14 May 2024 (Tabelog)', background: 'Mapo-noodle shop, Higobashi branch (official site mabo-club.com; Tabelog).', philosophy: null, specialty: 'Chicken katsu mabo noodles.',
      anecdotes: [
        { text: '"This isn\'t the typical Mabo Noodles with the tofu floating in the broth; it\'s a Mazesoba style where the noodles are coated in the Mabo tofu… a thick, rich type with a strong flavor of sweet bean sauce." — August 2026, chicken katsu mabo noodles ¥1,400.', source: R + 'B534105349/' },
        { text: '"Each katsu is fried to order, with an astonishingly crispy coating that bursts with juicy meat. Even when submerged in the rich Mabo sauce, its light and crispy texture remains intact." — May 2026.', source: R + 'B528878286/' },
      ],
      japanese_sources_summary: '公式 mabo-club.com。食べログ: 麻婆倶楽部 肥後橋店、大阪市西区江戸堀1-20-4、肥後橋から288m、毎日11:00〜14:30・17:30〜22:00、カード・電子マネー・QR不可、2024年5月14日開店。口コミ(2026年5〜10月): 揚げたての大きなとんかつをのせた麻婆麺、花椒の香り、辛さ2で痺れ、辛さは5段階、チキンカツ麻婆麺、辛さ3は汗だくになるという声、昼は10分待ち、辛い冷麺の大盛り(夏)、チキンカツ麻婆麺1,400円(8月)、黒いエプロン、ミニご飯付き、まずよく混ぜるまぜそばスタイル、甜麺醤の濃い麻婆、チキンカツ麻婆飯1,200円、週替わりの定食、カウンターが多く一人でも、清潔、黒基調のおしゃれな店内、3人で営業、カウンターとテーブル、チキンカツ麻婆麺(辛さ2)1,600円、辛さ3まで無料、中太のもちもちの麺、ダイブめし付き、最近値上げ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B528878286/', R + 'B534056156/', R + 'B534105349/', R + 'B535288923/', R + 'B536014177/', R + 'B536583489/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium-thick', shape: null, hydration: null, handmade: false, notes: 'Medium-thick chewy noodles, very hot (October 2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba'],
      signature_bowl: 'Chicken katsu mabo noodles, ¥1,600 at level 2 (October 2026).',
      chashu: null,
      notable_toppings: ['fried-to-order chicken katsu', 'mini dive rice', 'green onion'],
      gf: { status: 'no', note: 'Wheat noodles; breaded katsu.' },
      vegan: { status: 'no', note: 'Meat mapo; katsu.' },
      pantheon: 'Higobashi\'s mapo mazesoba buried under a bowl-wide, fried-to-order chicken katsu.',
      profile: { richness: 5, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B534105349/', '"So heavy that it\'s hard to lift with chopsticks" — top of scale.'],
        oiliness: [R + 'B528878286/', 'Rich mapo with chili; "the deep richness of the meat" — placed high.'],
        clarity: [R + 'B534105349/', 'Brothless mazesoba in thick mapo — bottom of scale.'],
        tare_strength: [R + 'B534105349/', '"A strong flavor of sweet bean sauce" — placed high.'],
        noodle_firmness: [R + 'B536583489/', '"The noodles were chewy and of medium thickness" — placed high.'],
        aroma_punch: [R + 'B528878286/', '"The refreshing aroma of Sichuan peppercorns… intense numbing sensation" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B534105349/', R + 'B528878286/', R + 'B536583489/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; how-to-eat card at the counter (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区江戸堀1-20-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区江戸堀一丁目20番4号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534105349/', R + 'B535288923/', R + 'B536583489/'],
    price_note: 'Prices from August–October 2026 reviews; the katsu mabo noodles rose from ¥1,400 to ¥1,600.', last_checked: TODAY, items: [
      it('チキンカツ麻婆麺', '', 'Chicken katsu mabo noodles', '¥1,600', 'Mazesoba', 'no', 'no', 'October 2026; ¥1,400 in August.', 'chicken_katsu_mabo'),
      it('', '', 'Chicken katsu mapo rice', '¥1,200', 'Rice', 'no', 'no', 'September 2026.', 'mabo_rice'),
      it('', '', 'Spicy cold noodles (summer)', '', 'Noodles', 'no', 'no', 'August 2026.', 'hiyashi'),
      it('', '', 'Weekly set meal', '', 'Set meals', 'no', 'no', 'September 2026.', 'weekly'),
    ] }, {
    cuisine: 'カツをのせた麻婆まぜそば・チキンカツ麻婆麺1,400〜1,600円(2026年に値上げ): 中太のもちもちの麺に甜麺醤の濃い麻婆と花椒の痺れ、揚げたての大きなチキンカツ(もも肉)、最後に飛び込ませるミニご飯付き・辛さ5段階、3まで無料・とんかつ版も・チキンカツ麻婆飯1,200円・夏は辛い冷麺の大盛り・週替わりの定食・カウンターとテーブル',
    neighborhood: '西区江戸堀1-20-4。肥後橋駅から288m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、衣をつけて揚げたチキンカツととんかつ、甜麺醤の麻婆。',
    vegan_detail: 'ヴィーガンではありません。麻婆のひき肉、チキンカツととんかつ。',
    notes: '[ラーメン・肥後橋近く、揚げたての巨大カツの下の麻婆まぜそば] 肥後橋近く、黒基調のおしゃれなカウンターの店で、2024年開店、名物は写真映えする一杯: 丼を覆うほど大きなチキンカツ(もも肉)の下に隠れた麻婆まぜそば。まずは麺を濃い麻婆とよく混ぜて。甜麺醤のコクに花椒の痺れで、激辛というより濃厚、揚げたてのカツはたれの中でもサクサクのまま。辛さは5段階(3まで無料)、辛さ3は汗だくになるという声。残りにはミニご飯を飛び込ませて。値上げで今は1,600円、量もたっぷり。麻婆飯、夏の冷麺、週替わりの定食も。昼は少し待つことも。現金のみ。',
  });
}

save();
