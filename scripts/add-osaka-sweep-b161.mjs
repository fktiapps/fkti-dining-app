// Osaka sweep (2-mile circle around Dotonbori), batch 161 — ramen phase.
//   + れんげラーメン (long-running Kumamoto-style tonkotsu counter in Uehonmachi Haihai Town, free 1.5x noodles) — mom
//   + らーめん喜六 (old-style chicken-and-pork shoyu ramen, ¥700 sets; Nipponbashi 5-chome)
//   + 横浜家系ラーメン 幸来家 (Yokohama iekei by Honmachi, free rice before 18:00)
//   + 味千拉麺 船場店 (Kumamoto ramen chain branch that also serves tai-pien; Senba Center Bldg; offset vs Honmachi Seimensho)
//   Skipped chain branches: 27017177 and 27065012 天下一品, 27052562 玉五郎 本町店, 27095712 三豊麺 上本町, 27011199 亀王 恵美須町.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 161);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27017177', 'Chain branch: Tenka Ippin already in data.');
skip('27065012', 'Chain branch: Tenka Ippin already in data.');
skip('27052562', 'Chain branch: Niboshi Ramen Tamagoro already in data.');
skip('27095712', 'Chain branch: Sanpo Men already in data.');
skip('27011199', 'Chain branch: Kyushu Ramen Kio already in data.');

// ================================================================ れんげラーメン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27011503/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:15', '14:30']);
  put({
    id: 'osaka_renge_ramen_uehonmachi', name: 'れんげラーメン (Renge Ramen)', category: 'OMNI',
    lat: 34.665495, lng: 135.51821, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-seasoned rice; fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth; chashu.',
    hours_raw: 'Mon–Thu and Sat 11:15–14:30; Fri 11:15–14:30 and 18:00–20:20; closed Sun, public holidays and the day before a holiday (Tabelog). Cash only (Tabelog). Run by two people (2026).',
    hours: { 0: L, 1: L, 2: L, 3: L, 4: day(['11:15', '14:30'], ['18:00', '20:20']), 5: L }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Uehonmachi 6-3-31, Uehonmachi Haihai Town B1F — 4 min from Kintetsu Uehommachi or Tanimachi 9-chome Stn',
    cuisine: 'Kumamoto-style tonkotsu ramen · Renge Ramen ¥800 with 1.5 servings of noodles at no extra charge; Renge soup, miso or tonkotsu · extra noodles (tashi-dama) · Sarameshi set ¥1,000 with a lightly seasoned mixed rice; half fried rice set · spicy pickled ginger · 9 counter seats',
    website: null, gmaps: gm('れんげラーメン'), menu_url: null,
    notes: "[Ramen · an old-timer's Kumamoto-style tonkotsu counter in Haihai Town] A nine-seat ramen counter in the basement of Uehonmachi's Haihai Town, a survivor among the arcade's izakaya and run by two people with a gruff-but-friendly owner who has known some diners for a decade. The Renge Ramen is a gentle, natural tonkotsu in the Kumamoto line, ¥800 with a 1.5 serving of noodles free; miso is the other popular choice. The noodles are soft and high in water, so ask for firm, though one diner found even those soft. Pair it with the Sarameshi set (¥1,000), a lightly seasoned mixed rice. Lunch only except Friday nights. Cash only.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Ramen counter run by two people (Tabelog; 2018–2026 reviews).', philosophy: null, specialty: 'Kumamoto-style tonkotsu ramen.',
      anecdotes: [
        { text: '"I was a bit cautious when I heard it was Kumamoto ramen… However, it turned out to have a pleasantly balanced tonkotsu flavor, which was a relief." — April 2026, Renge Ramen 1.5 servings ¥800.', source: R + 'B525537482/' },
        { text: '"The miso ramen, based on a pork bone broth, had a light seasoning that made it easy to enjoy. The chashu was tender and flavorful…" — September 2026, Miso Ramen with the Sarameshi Set ¥1,000.', source: R + 'B339222347/' },
      ],
      japanese_sources_summary: '食べログ: れんげラーメン、大阪市天王寺区上本町6-3-31 うえほんまちハイハイタウン B1F、近鉄上本町駅・谷町九丁目駅から徒歩4分、月〜木・土 11:15〜14:30、金 11:15〜14:30・18:00〜20:20、日・祝・祝前日休み、カード・電子マネー・QR不可。口コミ(2018年9月〜2026年9月): ハイハイタウンで長く続く店、カウンター9席、ふたりで営む、熊本系のやさしいとんこつ、れんげラーメン800円 (1.5玉まで無料)、れんげスープ・味噌・とんこつ、tashi-dama、Sarameshi のセット1,000円 (味の薄めの混ぜご飯)、半チャーハンのセット、辛い漬けしょうが、加水の多いやわらかい麺 (硬めを頼んでもやわらかかったという声)、チャーシューはやわらかい、気さくな店主。',
      confidence: 'medium', sources: [TB, R + 'B339222347/', R + 'B356894936/', R + 'B522753127/', R + 'B525537482/', R + 'B530531167/', R + 'B532364566/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['miso'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'straight', hydration: 'high', handmade: false, notes: 'Soft, high-water noodles; 1.5 servings free; firm on request (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Renge Ramen with 1.5 servings of noodles, ¥800 (April 2026).',
      chashu: 'Tender chashu with the right amount of fat (September 2026).',
      notable_toppings: ['spicy pickled ginger'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Haihai Town\'s gentle Kumamoto-line tonkotsu, with a free half serving extra.',
      profile: { richness: 2, oiliness: 2, clarity: 2, tare_strength: 2, noodle_firmness: 1, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B530531167/', '"made with natural tonkotsu, offering a gentle flavor… a bit too light" — low.'],
        oiliness: [R + 'B339222347/', '"a light seasoning that made it easy to enjoy" — low.'],
        clarity: [R + 'B525537482/', 'A tonkotsu broth — placed low.'],
        tare_strength: [R + 'B339222347/', '"had a light seasoning" — low.'],
        noodle_firmness: [R + 'B525537482/', '"The noodles have a high water content, giving them a soft texture" — bottom of scale.'],
        aroma_punch: [R + 'B339222347/', '"a subtle hint of garlic" (January 2019 visit) — low.'],
      },
      confidence: 'medium', sources: [R + 'B525537482/', R + 'B339222347/', R + 'B530531167/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; owner chats fast (July 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市天王寺区上本町6-3-31 うえほんまちハイハイタウン B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM れんげラーメン node/3577957573 3m; GSI 大阪府大阪市天王寺区上本町六丁目3番31号 (go) 72m (large building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525537482/', R + 'B339222347/'],
    price_note: 'Prices from April and September 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Renge Ramen (1.5 servings free)', '¥800', 'Ramen', 'no', 'no', 'April 2026.', 'renge'),
      it('', '', 'Miso ramen with Sarameshi set', '¥1,000', 'Sets', 'no', 'no', 'September 2026.', 'miso_set'),
      it('', '', 'Tonkotsu ramen with Sarameshi set', '¥1,000', 'Sets', 'no', 'no', 'July 2026.', 'tonkotsu_set'),
    ] }, {
    cuisine: '熊本系のとんこつラーメン・れんげラーメン800円、1.5玉まで無料、れんげスープ・味噌・とんこつ・tashi-dama・Sarameshi のセット1,000円 (薄味の混ぜご飯)、半チャーハンのセット・辛い漬けしょうが・カウンター9席',
    neighborhood: '天王寺区上本町6-3-31 うえほんまちハイハイタウン B1F。近鉄上本町駅・谷町九丁目駅から徒歩4分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油味のご飯、チャーハン。',
    vegan_detail: 'ヴィーガンではありません。とんこつのスープ、チャーシュー。',
    notes: '[ラーメン・上本町、ハイハイタウンの熊本系とんこつの老舗カウンター] 上本町ハイハイタウンの地下、居酒屋の並ぶなかで長く続く9席のラーメンカウンターで、ふたりで営み、ぶっきらぼうだが気さくな店主は10年来の客もいる。れんげラーメンは熊本系のやさしい天然とんこつで、1.5玉まで無料で800円、味噌も人気。麺は加水の多いやわらかめなので硬めを頼んで (それでもやわらかかったという声も)。Sarameshi のセット (1,000円) の薄味の混ぜご飯と合わせて。金曜の夜以外は昼のみ。現金のみ。',
  });
}

// ================================================================ らーめん喜六
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27066380/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:30', '16:30'], ['17:00', '22:00']);
  put({
    id: 'osaka_ramen_kiroku_nipponbashi', name: 'らーめん喜六 (Ramen Kiroku)', category: 'OMNI',
    lat: 34.658258, lng: 135.505562, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare; fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and pork-bone broth; chashu.',
    hours_raw: 'Tue 11:30–15:00 and 18:00–22:00; Wed and Fri 11:30–16:30 and 17:00–22:00; Sat 12:00–16:30 and 17:00–22:00; Sun 11:30–16:30 and 18:00–22:00; closed Mon and Thu (Tabelog). Sometimes opens late or unexpectedly closed (June 2026). Cash only (Tabelog).',
    hours: { 1: day(['11:30', '15:00'], ['18:00', '22:00']), 2: A, 4: A, 5: day(['12:00', '16:30'], ['17:00', '22:00']), 6: day(['11:30', '16:30'], ['18:00', '22:00']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nipponbashi 5-10-6, on Sakaisuji just south of the Nipponbashi 4-chome crossing — near Ebisucho Stn',
    cuisine: 'Old-style shoyu ramen · shoyu ramen from ¥630; shio too · broth of chicken and pork bones, cloudy, no back fat · medium-thick straight noodles; large size · two slices of chashu, green onion, menma · vegetable ramen ¥780 · ramen set with a hand-formed rice ball (chashu filling, takuan) or rice ¥700 · ramen and half fried rice set ¥800 (¥1,000 with large noodles) · 11 counter seats',
    website: null, gmaps: gm('らーめん喜六'), menu_url: null,
    notes: "[Ramen · an old-style shoyu ramen counter with ¥700 sets, Nipponbashi] A retro, long-running neighborhood ramen counter on Sakaisuji, south of Nipponbashi 4-chome, with prices from another era: shoyu ramen from ¥630, a set with a warm hand-formed rice ball for ¥700, or half fried rice for ¥800. The bowl is plain and comforting, a cloudy chicken-and-pork-bone shoyu without back fat, medium-thick straight noodles, tender chashu and plenty of green onion; the fried rice is fluffy and lightly seasoned. One diner recommends it large with firm noodles. Opening can run late, so allow some slack. Cash only. Closed Mondays and Thursdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Long-running neighborhood ramen shop (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Old-style shoyu ramen.',
      anecdotes: [
        { text: '"The broth is a blend of chicken and pork bones, served with medium-thick straight noodles… There\'s no back fat in the soup… The chashu (braised pork) is incredibly tender and flavorful." — June 2026, ramen and fried rice set ¥1,000.', source: R + 'B529974201/' },
        { text: '"Hand-formed rice balls are delicious! The warmth of freshly made rice balls and the fluffy, tasty rice have a flavor that machines can\'t replicate." — March 2025, ramen set.', source: R + 'B503680825/' },
      ],
      japanese_sources_summary: '食べログ: らーめん喜六、大阪市浪速区日本橋5-10-6、恵美須町駅から275m、火 11:30〜15:00・18:00〜22:00、水・金 11:30〜16:30・17:00〜22:00、土 12:00〜16:30・17:00〜22:00、日 11:30〜16:30・18:00〜22:00、月・木休み、カード・電子マネー・QR不可、カウンター11席。口コミ(2025年3月〜2026年6月): 堺筋沿い、日本橋4丁目の交差点の手前、昔ながらの町のラーメン、醤油ラーメン630円から、塩も、鶏と豚骨のスープ (白濁、背脂なし)、中太のストレート麺、チャーシュー2枚、ねぎ、メンマ、野菜ラーメン780円、おにぎりかご飯のラーメンセット700円 (手握りのおにぎりにチャーシュー、takuan)、ラーメン(大盛)／チャーハンセット(しょうゆ) 1,000円、半チャーハンのセット800円、ふわふわのチャーハン、開店が遅れることも。',
      confidence: 'medium', sources: [TB, R + 'B503680825/', R + 'B516490755/', R + 'B525359214/', R + 'B527209312/', R + 'B528745357/', R + 'B529974201/'] },
    ramen: {
      broth_base: ['chicken', 'pork'], broth_texture: 'paitan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thick, nearly straight noodles, about 150 g; large size (2025–2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Shoyu ramen, from ¥630 (May 2026).',
      chashu: 'Two slices, tender and flavorful (2025–2026).',
      notable_toppings: ['green onion', 'menma', 'vegetables'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and pork-bone broth.' },
      pantheon: 'Nipponbashi\'s old-school shoyu ramen and rice-ball set at yesterday\'s prices.',
      profile: { richness: 2, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B516490755/', '"The broth is light yet has a subtle pork bone aroma" — low.'],
        oiliness: [R + 'B529974201/', '"There\'s no back fat in the soup" — low.'],
        clarity: [R + 'B503680825/', '"a rich, cloudy tonkotsu-like texture" — placed low.'],
        tare_strength: [R + 'B527209312/', '"The flavor is a classic shoyu ramen" — mid-scale.'],
        noodle_firmness: [R + 'B503680825/', '"medium-thick and almost straight… They had a good texture" — mid-scale.'],
        aroma_punch: [R + 'B516490755/', '"a subtle pork bone aroma that whets the appetite" — low.'],
      },
      confidence: 'medium', sources: [R + 'B529974201/', R + 'B503680825/', R + 'B516490755/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Simple counter; set prices on the sign (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区日本橋5-10-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区日本橋五丁目10番6号 (go) 6m; OSM らーめん喜六 node/2293447293 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528745357/', R + 'B527209312/', R + 'B529974201/'],
    price_note: 'Prices from April–June 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Shoyu ramen', '¥630', 'Ramen', 'no', 'no', 'May 2026.', 'shoyu'),
      it('', '', 'Vegetable ramen', '¥780', 'Ramen', 'no', 'no', 'May 2026.', 'yasai'),
      it('', '', 'Ramen set with rice ball or rice', '¥700', 'Sets', 'no', 'no', 'April 2026.', 'onigiri_set'),
      it('ラーメン(大盛)／チャーハンセット(しょうゆ)', '', 'Ramen (large) and half fried rice set', '¥1,000', 'Sets', 'no', 'no', 'June 2026; ¥800 with regular noodles (April 2026).', 'chahan_set'),
    ] }, {
    cuisine: '昔ながらの醤油ラーメン・醤油ラーメン630円から、塩も・鶏と豚骨の白濁したスープ、背脂なし・中太のストレート麺、大盛りも・チャーシュー2枚、ねぎ、メンマ・野菜ラーメン780円・手握りのおにぎり (チャーシュー入り、takuanつき) かご飯のラーメンセット700円・半チャーハンのセット800円 (大盛りで1,000円)・カウンター11席',
    neighborhood: '浪速区日本橋5-10-6、堺筋沿い、日本橋4丁目の交差点の南。恵美須町駅の近く',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、チャーハン。',
    vegan_detail: 'ヴィーガンではありません。鶏と豚骨のスープ、チャーシュー。',
    notes: '[ラーメン・日本橋、700円のセットがある昔ながらの醤油ラーメン] 堺筋沿い、日本橋4丁目の南にあるレトロで長く続く町のラーメンカウンターで、値段はひと昔前: 醤油ラーメンが630円から、温かい手握りのおにぎりのセットが700円、半チャーハンつきで800円。一杯は素朴でほっとする、背脂なしの白濁した鶏と豚骨の醤油に中太のストレート麺、やわらかいチャーシューとたっぷりのねぎ。チャーハンはふわっとして薄味。大盛りの硬めがおすすめという声。開店が遅れることもあるので余裕を持って。現金のみ。月・木曜休み。',
  });
}

// ================================================================ 横浜家系ラーメン 幸来家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27145704/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '23:00']);
  put({
    id: 'osaka_iekei_kouraya_nishihonmachi', name: '横浜家系ラーメン 幸来家 (Yokohama Iekei Ramen Koura-ya)', category: 'OMNI',
    lat: 34.682606, lng: 135.496687, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; shoyu tare; fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth; chashu.',
    hours_raw: 'Mon–Sat 11:00–23:00; closed Sun (Tabelog). Cash only; ticket machine (Tabelog; July 2026). Free small rice before 18:00; tea bar at lunch (2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishi-Honmachi 1-5-20, on the south side of Utsubo Park — 205 m from Honmachi Stn',
    cuisine: 'Yokohama iekei ramen · ajitama ramen ¥1,000: rich tonkotsu shoyu, thick noodles, spinach, chashu, three large sheets of nori and a seasoned egg · choose noodle firmness, flavor strength and oil · all-toppings and MAX ramen · extra spinach, chashu; half fried rice · free small rice before 18:00; tea bar with three teas at lunch · table: ginger, onion, spicy miso and more · 16 seats',
    website: null, gmaps: gm('横浜家系ラーメン 幸来家'), menu_url: null,
    notes: "[Ramen · a dependable Yokohama iekei by Utsubo Park] A busy little iekei shop south of Utsubo Park, near Honmachi Station, popular with office workers at lunch. The ajitama ramen (¥1,000) is a rich tonkotsu shoyu on thick noodles with spinach, chashu, an egg and three big sheets of nori worth dipping; order the noodle firmness, flavor strength and oil you like, then add ginger, onion or the hot spicy miso from the table. Small rice is free before 6 pm, and there's a tea bar at lunch. Staff are polite and quick. Buy a ticket; cash only. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Yokohama iekei ramen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Iekei tonkotsu shoyu ramen.',
      anecdotes: [
        { text: '"It featured a rich tonkotsu shoyu broth with thick noodles. The toppings included spinach, three sheets of nori, one slice of chashu, and an ajitama egg." — July 2026, Ajitama Ramen (Shoyu) ¥1,000.', source: R + 'B495400309/' },
        { text: '"The sign inside said the seaweed is tasty, and I completely agree. Soaking it in the broth made it absolutely delightful!" — August 2026.', source: R + 'B534037643/' },
      ],
      japanese_sources_summary: '食べログ: 横浜家系ラーメン 幸来家、大阪市西区西本町1-5-20、本町駅から205m、月〜土 11:00〜23:00、日曜休み、カード・電子マネー・QR不可、16席 (カウンター9、テーブル7)。口コミ(2026年2〜8月): 靱公園の南側、会社員が通う家系の店、味玉ラーメン1,000円 (濃厚なとんこつ醤油、太麺、ほうれん草、チャーシュー、大きな海苔3枚、味玉)、麺の硬さ・味の濃さ・油の量を選べる、全部のせ、MAX ラーメン、ほうれん草やチャーシューの追加、半チャーハン、18時前は小ライス無料、昼は3種のお茶のティーバー、卓上に生姜・玉ねぎ・辛味噌など、券売機、ていねいで手早い接客。',
      confidence: 'medium', sources: [TB, R + 'B495400309/', R + 'B522125241/', R + 'B531205524/', R + 'B534037643/', R + 'B534069346/', R + 'B534241156/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'straight', hydration: null, handmade: false, notes: 'Thick noodles; firmness to order (2026).' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen'],
      signature_bowl: 'Ajitama ramen, ¥1,000 (July 2026).',
      chashu: 'One slice on the ajitama ramen; extra slices available (2026).',
      notable_toppings: ['spinach', 'nori', 'seasoned egg', 'onion', 'spicy miso'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Utsubo Park\'s office-lunch iekei, free rice before six.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B534037643/', '"I chose the regular thickness for the broth, and it was rich and perfectly coated the noodles" — high.'],
        oiliness: [R + 'B495400309/', 'Extra oil on request; "a rich tonkotsu shoyu broth" — placed high for the style.'],
        clarity: [R + 'B495400309/', 'Rich tonkotsu shoyu — placed low.'],
        tare_strength: [R + 'B495400309/', '"While this Iekei ramen was standard, it consistently delivered a reliably delicious taste" — mid-scale.'],
        noodle_firmness: [R + 'B531205524/', 'Thick noodles ordered firm — placed high.'],
        aroma_punch: [R + 'B495400309/', 'Ginger and onion added at the table — low on its own.'],
      },
      confidence: 'medium', sources: [R + 'B495400309/', R + 'B534037643/', R + 'B531205524/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; customization asked at handover (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区西本町1-5-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区西本町一丁目5番20号 (go) 6m; OSM 横浜家系ラーメン幸来家 node/5689053324 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B495400309/', R + 'B531205524/'],
    price_note: 'Prices from July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ajitama ramen (shoyu)', '¥1,000', 'Ramen', 'no', 'no', 'July 2026.', 'ajitama'),
      it('', '', 'All-toppings ramen', '', 'Ramen', 'no', 'no', 'April 2026.', 'zenbu'),
      it('', '', 'MAX ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'max'),
      it('', '', 'Half fried rice', '', 'Sides', 'ask', 'no', 'July 2026.', 'chahan'),
    ] }, {
    cuisine: '横浜家系ラーメン・味玉ラーメン1,000円: 濃厚なとんこつ醤油、太麺、ほうれん草、チャーシュー、大きな海苔3枚、味玉・麺の硬さ、味の濃さ、油の量を選べる・全部のせ、MAX ラーメン・ほうれん草やチャーシューの追加、半チャーハン・18時前は小ライス無料、昼は3種のお茶のティーバー・卓上に生姜、玉ねぎ、辛味噌など・16席',
    neighborhood: '西区西本町1-5-20、靱公園の南側。本町駅から205m',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油のたれ、チャーハン。',
    vegan_detail: 'ヴィーガンではありません。とんこつのスープ、チャーシュー。',
    notes: '[ラーメン・靱公園そば、頼れる横浜家系] 本町駅近く、靱公園の南にあるにぎやかな小さな家系の店で、昼は会社員でにぎわう。味玉ラーメン (1,000円) は濃厚なとんこつ醤油に太麺、ほうれん草、チャーシュー、玉子、浸して食べたい大きな海苔3枚。麺の硬さ、味の濃さ、油の量を好みで頼み、卓上の生姜、玉ねぎ、辛い辛味噌を足して。18時前は小ライス無料、昼はお茶のティーバーも。店の人はていねいで手早い。券売機、現金のみ。日曜休み。',
  });
}

// ================================================================ 味千拉麺 船場店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27053980/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '16:00']);
  put({
    id: 'osaka_ajisen_ramen_senba', name: '味千拉麺 船場店 (Ajisen Ramen Senba ten)', category: 'OMNI',
    lat: 34.681828, lng: 135.508109, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-seasoned broths. Tai-pien uses glass noodles, but the broth seasoning is not described — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth; seafood and pork in the tai-pien.',
    hours_raw: 'Mon–Fri 11:00–16:00; closed Sat, Sun and public holidays, though sometimes open on a Saturday (Tabelog; October 2026). Cards (JCB, AMEX) and QR accepted (Tabelog). Discount coupons on some days (October 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Senba Chuo 1-3-2, Senba Center Bldg No. 2 B2F — connected to Sakaisuji-Honmachi Stn',
    cuisine: 'Kumamoto ramen chain branch · Ajisen ramen ¥950, tonkotsu with garlic chips; spicy tonkotsu; miso ramen · tai-pien ¥1,100: Kumamoto glass-noodle soup with shrimp, pork, squid, Chinese cabbage, wood ear, carrot and a fried boiled egg · lunch sets, e.g. ramen with takana rice; daily chicken tonkotsu set · half fried rice ¥450 · Thai bamee · fried garlic on the table · 30 seats',
    website: null, gmaps: gm('味千拉麺 船場店'), menu_url: null,
    notes: "[Ramen · a Kumamoto ramen chain branch with tai-pien, Senba] A weekday-lunch branch of the Kumamoto ramen chain Ajisen, two floors down in the Senba Center Building and connected to Sakaisuji-Honmachi Station. The house tonkotsu (¥950) is satisfying if chain-standard, with fried garlic on the table. The reason to seek out this branch is tai-pien (¥1,100), Kumamoto's light glass-noodle soup loaded with shrimp, pork, squid and vegetables, rare in Osaka. Lunch sets pair ramen with takana rice. Two diners found it a little pricey. Weekdays 11:00–16:00, occasionally Saturdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of the Ajisen chain, founded in Kumamoto in 1968 (September 2026 review).', background: 'Ramen chain branch (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Kumamoto tonkotsu ramen; tai-pien.',
      anecdotes: [
        { text: '"Tai-Pien is a local dish from Kumamoto, enjoyed in Chinese restaurants and school lunches throughout Kumamoto City… The noodles are made from glass noodles…" — October 2026, Tai-Pien ¥1,100.', source: R + 'B538060125/' },
        { text: '"The broth had a light flavor, seasoned with salt and soy sauce. Although it was light, it was still rich in umami." — September 2026, Taipei Noodles.', source: R + 'B535775286/' },
      ],
      japanese_sources_summary: '食べログ: 味千拉麺 船場店、大阪市中央区船場中央1-3-2 船場センタービル2号館 B2F、堺筋本町駅直結、月〜金 11:00〜16:00、土・日・祝休み (土曜に開くことも)、カード (JCB・AMEX)・QR可、30席 (カウンター10、テーブル20)。口コミ(2026年9〜10月): 熊本ラーメンのチェーン (1968年創業)、大阪に3店ほど、味千ラーメン950円 (とんこつ、ガーリックチップ)、辛いとんこつ、味噌ラーメン、tai-pien1,100円 (熊本の春雨のスープ、海老・豚・イカ・白菜・きくらげ・にんじん・揚げたゆで卵)、takana のご飯とのランチセット、日替わりの鶏とんこつのセット、半チャーハン450円、タイの bamee、卓上にフライドガーリック、値段は少し高めという声、日によって割引クーポン。',
      confidence: 'medium', sources: [TB, R + 'B535589368/', R + 'B535775286/', R + 'B536085551/', R + 'B536502299/', R + 'B537045905/', R + 'B538060125/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: '"The noodles were also just right" (October 2026); glass noodles in the tai-pien.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Ajisen ramen, ¥950 (September 2026); tai-pien ¥1,100 (October 2026).',
      chashu: null,
      notable_toppings: ['garlic chips', 'fried garlic', 'wood ear', 'bean sprouts'],
      gf: { status: 'no', note: 'Wheat noodles in the ramen.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Senba\'s Kumamoto chain counter, worth the stairs for its tai-pien.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536085551/', '"The broth had a perfect richness" — mid-scale.'],
        oiliness: [R + 'B536502299/', '"the typical taste of a chain restaurant" — mid-scale.'],
        clarity: [R + 'B537045905/', 'A white tonkotsu — placed low.'],
        tare_strength: [R + 'B537045905/', '"The broth was a bit richer than what I had last time" (miso) — mid-scale.'],
        noodle_firmness: [R + 'B537045905/', '"The noodles were also just right" — mid-scale.'],
        aroma_punch: [R + 'B537045905/', 'Garlic chips added for a flavor change — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B536085551/', R + 'B537045905/', R + 'B536502299/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Energetic, friendly staff (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区船場中央1-3-2 船場センタービル2号館 B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (34.681765, 135.508109); 4 m from Honmachi Seimensho Chuka Soba Kobo (osaka_honmachi_seimensho_chuka_soba_kobo) in the same Senba Center building, pin offset ~7 m north so the two do not stack; GSI 大阪府大阪市中央区船場中央一丁目3番2号 (go) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536502299/', R + 'B538060125/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ajisen ramen', '¥950', 'Ramen', 'no', 'no', 'September 2026.', 'ajisen'),
      it('', '', 'Tai-pien (glass-noodle soup)', '¥1,100', 'Noodles', 'ask', 'no', 'October 2026.', 'taipien'),
      it('', '', 'Half fried rice', '¥450', 'Sides', 'ask', 'no', 'September 2026.', 'chahan'),
      it('', '', 'Miso ramen with takana rice (lunch set)', '', 'Sets', 'no', 'no', 'October 2026.', 'miso_set'),
    ] }, {
    cuisine: '熊本ラーメンのチェーン店・味千ラーメン950円、ガーリックチップのとんこつ、辛いとんこつ、味噌ラーメン・tai-pien1,100円: 熊本の春雨のスープに海老、豚、イカ、白菜、きくらげ、にんじん、揚げたゆで卵・takana のご飯とのランチセット、日替わりの鶏とんこつのセット・半チャーハン450円・タイの bamee・卓上にフライドガーリック・30席',
    neighborhood: '中央区船場中央1-3-2 船場センタービル2号館 B2F。堺筋本町駅直結',
    gf_detail: 'グルテンフリーではありません。ラーメンは小麦の麺、醤油のスープ。tai-pienは春雨だが、スープの味つけは不明なので確認を。',
    vegan_detail: 'ヴィーガンではありません。豚骨のスープ、tai-pienに魚介と豚肉。',
    notes: '[ラーメン・船場、tai-pienもある熊本ラーメンのチェーン店] 船場センタービルの地下2階、堺筋本町駅直結の熊本ラーメンのチェーン、味千の平日昼の店。看板のとんこつ (950円) はチェーンらしい安定の味で、卓上にフライドガーリック。この店をわざわざ選ぶ理由はtai-pien (1,100円) で、海老、豚、イカ、野菜がたっぷりの熊本の軽い春雨のスープは大阪では珍しい。ランチセットはラーメンとtakana のご飯。少し高いという声が2件。平日11時〜16時、土曜に開くことも。',
  });
}

save();
