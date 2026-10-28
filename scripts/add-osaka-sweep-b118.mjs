// Osaka sweep (2-mile circle around Dotonbori), batch 118 — ramen phase (all OMNI).
//   + 伝承油そば こぶたのはな (abura soba with thin-sliced chashu and white negi, mixed from the bottom; Koraibashi)
//   + 麺屋あげは (rich pork-bone seafood tsukemen and shoyu or curry mazesoba; Otedori by Tenmabashi)
//   + ramen agein (morning-to-lunch shoyu and spicy miso with grilled branded-pork chashu; Kitahama)
//   + 天満橋ササラ (golden-sesame tantanmen, rice and kimchi to finish; Uchihiranomachi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 118);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 伝承油そば こぶたのはな
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27104744/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://ja-jp.facebook.com/yamabuta.zing/';
  const D = day(['10:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_densho_aburasoba_kobuta_no_hana', name: '伝承油そば こぶたのはな (Densho Abura-soba Kobuta no Hana)', category: 'OMNI',
    lat: 34.689483, lng: 135.504748, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based abura soba sauce; menchi-katsu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork chashu; chicken; shrimp; egg.',
    hours_raw: 'Mon–Sat 10:30–15:00 and 17:00–22:00; public holidays 10:30–15:00 and 18:00–22:00; closed Sun (Tabelog). Lunch fills and you wait outside after buying a ticket; shared seating (September 2026). Rice can run out (October 2026). Cash-only ticket machine (October 2026; Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Koraibashi 2-3-2, Nippo Koraibashi Bldg 1F — 269 m from Kitahama Stn',
    cuisine: 'Abura soba · 伝承油そば (Densho abura soba) ¥890, slightly spicy, the house recommendation: smooth curly noodles in a moderately rich sauce, thin-sliced chashu, plenty of white negi; mix everything from the bottom · 鶏葱油そば (chicken-negi abura soba) ¥960, not spicy · shrimp shio abura soba with rare chashu · negi soba · chicken and green-onion shio soba (ramen) · large +¥150; soft-boiled egg +¥200 · quick drink set ¥1,300 with seasoned menma and a menchi-katsu · draft beer ¥550 · table: vinegar, chili oil, sesame, garlic chips · 6 counter seats, two tables for four',
    website: OWN, gmaps: gm('伝承油そば こぶたのはな 高麗橋'), menu_url: null,
    notes: "[Ramen · abura soba by Kitahama, mixed from the bottom] A small, bright and clean abura soba shop between Kitahama and Yodoyabashi, open since 2018, busy at office lunch. The house Densho abura soba (¥890) is slightly spicy: smooth curly noodles coated in a moderately rich sauce under thin-sliced chashu and a pile of white negi. The wall sign says to mix everything thoroughly from the bottom, and the noodles turn chewy as you do. If you don't want heat, the chicken-negi abura soba (¥960) is mild and light. A shrimp shio version comes with rare chashu, and there's a light chicken shio soup ramen. Tune it with the vinegar, chili oil and garlic chips on the table. A ¥1,300 drink set adds menma and a menchi-katsu. Cash-only ticket machine; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 9 May 2018 (Tabelog)', background: 'Abura soba shop (Tabelog; Facebook page yamabuta.zing).', philosophy: null, specialty: 'Densho abura soba.',
      anecdotes: [
        { text: '"The abura-soba features a moderately rich broth that perfectly coats the smooth, curly noodles. Plus, it\'s topped generously with spicy green onions, which is simply fantastic." — October 2026.', source: R + 'B538105682/' },
        { text: '"According to a paper on the wall, you should mix everything thoroughly from the bottom, including the chashu… Mine was completely non-spicy and quite light, making it easy to eat." — October 2026, chicken-negi abura soba ¥960.', source: R + 'B537860796/' },
      ],
      japanese_sources_summary: '食べログ: 伝承油そば こぶたのはな、大阪市中央区高麗橋2-3-2、北浜から269m、月〜土 10:30〜15:00・17:00〜22:00、祝 10:30〜15:00・18:00〜22:00、日休み、カード・電子マネー・QR不可、14席(カウンター6、4人席2)、2018年5月9日開店。口コミ(2024年10月〜2026年10月): 伝承油そば890円、大盛り150円、途中でにんにく、大盛りはやや少なめという声、鶏ねぎ塩そば、ご飯、胡椒・フライドガーリック・胡麻、海老塩油そば、ラー油と酢、レアチャーシュー、量が多い、日宝高麗橋ビル1F、券売機は現金のみ、ご飯は売り切れ、鶏葱油そば 辛くない960円、伝承油そば ちょいピリ辛890円、半熟卵200円、ちょい飲みセット1,300円(味付けメンマ、メンチカツ)、生ビール550円、卓上に酢・胡麻・ガーリックチップ、壁の紙に底からよく混ぜると、薄切りのチャーシュー、白髪ねぎたっぷり、昼は混み外で待つ、相席、ねぎそば、小さいが清潔で明るい、ほどよく濃いたれになめらかな縮れ麺、辛いねぎ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B493445533/', R + 'B534570091/', R + 'B536506585/', R + 'B537860796/', R + 'B538048817/', R + 'B538105682/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: 'wavy', hydration: null, handmade: false, notes: 'Smooth curly noodles that turn chewy when mixed (October 2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba'],
      signature_bowl: 'Densho abura soba, ¥890 (August–October 2026).',
      chashu: 'Thin-sliced chashu; rare chashu on the shrimp shio (2026).',
      notable_toppings: ['white negi', 'garlic chips', 'vinegar', 'soft-boiled egg'],
      gf: { status: 'no', note: 'Wheat noodles; soy sauce.' },
      vegan: { status: 'no', note: 'Chashu.' },
      pantheon: 'Kitahama\'s office-lunch abura soba under a heap of white negi, mixed from the bottom.',
      profile: { richness: 3, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B538105682/', '"A moderately rich broth that perfectly coats" the noodles — mid-scale.'],
        oiliness: [R + 'B537860796/', 'Abura soba, "quite light" in the chicken-negi version — mid-scale.'],
        clarity: [R + 'B537860796/', 'Brothless abura soba — bottom of scale.'],
        tare_strength: [R + 'B537860796/', 'Densho "slightly spicy and had a stronger flavor" than the mild one — mid-scale.'],
        noodle_firmness: [R + 'B538105682/', '"Smooth, curly noodles" — mid-scale.'],
        aroma_punch: [R + 'B493445533/', '"I also added garlic halfway through for a flavor change" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B538105682/', R + 'B537860796/', R + 'B493445533/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'How-to-mix note on the wall; staff explain spice levels (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区高麗橋2-3-2 日宝高麗橋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区高麗橋二丁目3番2号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B493445533/', R + 'B537860796/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('伝承油そば', '', 'Densho abura soba (slightly spicy)', '¥890', 'Abura soba', 'no', 'no', 'October 2026.', 'densho'),
      it('鶏葱油そば', '', 'Chicken-negi abura soba (not spicy)', '¥960', 'Abura soba', 'no', 'no', 'October 2026.', 'tori_negi'),
      it('', '', 'Shrimp shio abura soba', '', 'Abura soba', 'no', 'no', 'August 2026.', 'ebi_shio'),
      it('', '', 'Chicken and green-onion shio soba', '', 'Ramen', 'no', 'no', 'October 2024.', 'tori_shio'),
      it('', '', 'Large noodles', '+¥150', 'Toppings', 'no', 'no', 'August 2026.', 'oomori'),
      it('', '', 'Soft-boiled egg', '+¥200', 'Toppings', 'no', 'no', 'October 2026.', 'egg'),
      it('', '', 'Quick drink set (menma, menchi-katsu)', '¥1,300', 'Sets', 'no', 'no', 'October 2026.', 'choinomi'),
    ] }, {
    cuisine: '油そば・伝承油そば890円、ちょいピリ辛の店のおすすめ: ほどよく濃いたれをまとうなめらかな縮れ麺、薄切りのチャーシュー、白髪ねぎたっぷり、底から全部混ぜて・辛くない鶏葱油そば960円・レアチャーシューの海老塩油そば・ねぎそば・鶏とねぎの塩そば(スープ)・大盛り+150円、半熟卵+200円・メンマとメンチカツのちょい飲みセット1,300円・生ビール550円・卓上に酢、ラー油、胡麻、ガーリックチップ・カウンター6席、4人席2卓',
    neighborhood: '中央区高麗橋2-3-2 日宝高麗橋ビル 1F。北浜駅から269m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースの油そばのたれ、メンチカツ。',
    vegan_detail: 'ヴィーガンではありません。豚のチャーシュー、鶏、海老、卵。',
    notes: '[ラーメン・北浜近く、底から混ぜる油そば] 北浜と淀屋橋の間、小さく明るく清潔な油そばの店で、2018年開店、昼はオフィス客でにぎわう。看板の伝承油そば(890円)はちょいピリ辛: ほどよく濃いたれをまとうなめらかな縮れ麺に、薄切りのチャーシューと白髪ねぎの山。壁の紙には底から全部よく混ぜるようにとあり、混ぜるほど麺がもちもちに。辛いのが苦手なら鶏葱油そば(960円)がやさしく軽い。レアチャーシューの海老塩版や、あっさりした鶏の塩そばも。卓上の酢、ラー油、ガーリックチップで調整を。1,300円のちょい飲みセットでメンマとメンチカツも。券売機は現金のみ、日曜休み。',
  });
}

// ================================================================ 麺屋あげは
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27075434/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:00'], ['18:00', '23:00']);
  put({
    id: 'osaka_menya_ageha_otedori', name: '麺屋あげは (Menya Ageha)', category: 'OMNI',
    lat: 34.686221, lng: 135.515601, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy and curry sauces; yuzu-kosho rice finish with dashi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone and seafood soup; chashu; raw egg; cheese.',
    hours_raw: 'Mon–Fri 11:30–15:00 and 18:00–23:00; Sat 11:30–15:00 and 18:00–22:00; closed Sun and public holidays (Tabelog). Lunch lines; full by noon (2026 reviews). Ticket machine; mazesoba flavor (shoyu or curry) asked when you hand over the ticket. Cash only: no cards (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['11:30', '15:00'], ['18:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Otedori 1-4-1 — 378 m from Tenmabashi Stn, 5–7 min from Tanimachi 4-chome; black and red sign',
    cuisine: 'Rich pork-bone seafood tsukemen and mazesoba · rich tonkotsu tsukemen: thick, smooth, chewy noodles, a rich yet clean seafood-and-pork dip, chopped onion, thick grilled chashu; large at the same price · mazesoba, shoyu: seafood-soy sauce, grilled chashu, green onion, cheese, nori, flat chewy noodles · mazesoba, curry ¥1,150: minced meat, garlic chives, onion, seaweed, raw egg · finishing rice with yuzu-kosho, add dashi · pork shoyu ramen · 13 seats',
    website: null, gmaps: gm('麺屋あげは 大手通'), menu_url: null,
    notes: "[Ramen · rich tonkotsu-seafood tsukemen and two mazesoba near Tenmabashi] A thirteen-seat shop under a black and red sign between Tenmabashi and Tanimachi 4-chome, open since 2013, that fills up by noon. The draw for many is the rich tonkotsu tsukemen: thick, smooth, chewy noodles in a rich yet clean seafood and pork dip with chopped onion and thick grilled chashu, large at no extra cost. A repeat diner, though, swears by the mazesoba: choose shoyu (seafood-soy sauce, cheese, nori, flat chewy noodles) or curry (¥1,150, minced meat, garlic chives and a raw egg), and you'll be asked which when you hand over the ticket. Finish by tipping the small yuzu-kosho rice into the leftovers with a splash of dashi. One diner found the chashu a little salty. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 October 2013 (Tabelog)', background: 'Ramen and tsukemen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Rich tonkotsu tsukemen; mazesoba.',
      anecdotes: [
        { text: '"The Tsukemen was a typical \'Mata oma kei\' style with a rich seafood and pork bone broth… The noodles were especially smooth and chewy." — August 2026.', source: R + 'B533262593/' },
        { text: '"The soy sauce sauce has a seafood flavor, topped with grilled chashu, green onions, cheese, and nori! The noodles are wonderfully flat and chewy!" — August 2026, shoyu mazesoba, fourth visit.', source: R + 'B524017942/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋あげは、大阪市中央区大手通1-4-1、天満橋から378m、月〜金 11:30〜15:00・18:00〜23:00、土 11:30〜15:00・18:00〜22:00、日・祝休み、カード不可、13席、2013年10月7日開店。口コミ(2026年3〜10月): 濃厚豚骨つけ麺が人気、まぜそばは醤油とカレー、カレーまぜそば1,150円(ひき肉、ニラ、玉ねぎ、海苔、生卵)、ゴロッとした香ばしいチャーシュー、柚子胡椒のご飯でカレーライスに、谷町四丁目から徒歩5〜7分、醤油まぜそばは魚介の効いた醤油だれ(炙りチャーシュー、ねぎ、チーズ、海苔)、平打ちのもちもち麺、豚醤油ラーメン、昼は行列、11時半に2人、食べ終わる頃には満席で5人待ち、またおま系の濃厚魚介豚骨、刻み玉ねぎ、厚いチャーシュー、締めのご飯に柚子胡椒と出汁、チーズでまろやか、店長の丁寧な見送り、焦がしの風味、チャーシューがやや塩辛いという声、黒と赤の看板、大盛り同額。',
      confidence: 'medium', sources: [TB, R + 'B291528778/', R + 'B524017942/', R + 'B533262593/', R + 'B535103044/', R + 'B535751468/', R + 'B537752127/'] },
    ramen: {
      broth_base: ['tonkotsu', 'gyokai'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick, smooth, chewy noodles; flat in the mazesoba (2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'mazesoba_aburasoba', 'ramen'],
      signature_bowl: 'Rich tonkotsu tsukemen; shoyu mazesoba (2026).',
      chashu: 'Thick, well-grilled chashu (October 2026).',
      notable_toppings: ['chopped onion', 'cheese (mazesoba)', 'yuzu-kosho rice'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone and seafood.' },
      pantheon: 'Tenmabashi\'s rich tonkotsu-seafood tsukemen, with a shoyu-cheese mazesoba a repeat diner swears by.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B533262593/', '"A rich seafood and pork bone broth" — placed high.'],
        oiliness: [R + 'B537752127/', '"The rich yet refreshing dipping sauce" — mid-scale.'],
        clarity: [R + 'B533262593/', 'Rich tonkotsu-seafood dip — bottom of scale.'],
        tare_strength: [R + 'B535751468/', 'Chashu "perhaps it was a bit too salty"; mazesoba "quite rich" (B535103044) — placed high.'],
        noodle_firmness: [R + 'B533262593/', '"Especially smooth and chewy" — placed high.'],
        aroma_punch: [R + 'B535751468/', '"More focused on a burnt taste" in the mazesoba — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B533262593/', R + 'B524017942/', R + 'B537752127/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; staff ask the mazesoba flavor (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区大手通1-4-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区大手通一丁目4番1号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B291528778/', R + 'B537752127/'],
    price_note: 'Curry mazesoba price from a September 2026 review; others not reported.', last_checked: TODAY, items: [
      it('', '', 'Rich tonkotsu tsukemen (large at same price)', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'tsukemen'),
      it('', '', 'Mazesoba, shoyu', '', 'Mazesoba', 'no', 'no', 'August 2026.', 'maze_shoyu'),
      it('', '', 'Mazesoba, curry', '¥1,150', 'Mazesoba', 'no', 'no', 'September 2026.', 'maze_curry'),
      it('', '', 'Pork shoyu ramen', '', 'Ramen', 'no', 'no', 'April 2026.', 'ton_shoyu'),
    ] }, {
    cuisine: '濃厚豚骨魚介のつけ麺とまぜそば・濃厚豚骨つけ麺: 太くなめらかでもちもちの麺、濃いのにすっきりした魚介と豚骨のつけ汁、刻み玉ねぎ、厚い炙りチャーシュー、大盛り同額・まぜそば醤油: 魚介の効いた醤油だれ、炙りチャーシュー、ねぎ、チーズ、海苔、平打ちのもちもち麺・まぜそばカレー1,150円: ひき肉、ニラ、玉ねぎ、海苔、生卵・締めは柚子胡椒のご飯に出汁を・豚醤油ラーメン・13席',
    neighborhood: '中央区大手通1-4-1。天満橋駅から378m、谷町四丁目から徒歩5〜7分、黒と赤の看板',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油とカレーのたれ、出汁をかける柚子胡椒ご飯。',
    vegan_detail: 'ヴィーガンではありません。豚骨と魚介のスープ、チャーシュー、生卵、チーズ。',
    notes: '[ラーメン・天満橋近く、濃厚豚骨魚介のつけ麺と2種のまぜそば] 天満橋と谷町四丁目の間、黒と赤の看板の13席の店で、2013年開店、正午には満席に。多くの人の目当ては濃厚豚骨つけ麺: 太くなめらかでもちもちの麺に、濃いのにすっきりした魚介と豚骨のつけ汁、刻み玉ねぎ、厚い炙りチャーシュー、大盛りも同額。ただ通う人はまぜそば推し: 醤油(魚介の効いた醤油だれ、チーズ、海苔、平打ちのもちもち麺)かカレー(1,150円、ひき肉、ニラ、生卵)、食券を渡すときにどちらか聞かれる。締めは小さな柚子胡椒ご飯を残りに入れ、出汁を少し。チャーシューがやや塩辛いという声も。現金のみ。',
  });
}

// ================================================================ ramen agein
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27144537/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['10:00', '14:00']); const WE = day(['11:00', '14:00']);
  put({
    id: 'osaka_ramen_agein_kitahama', name: 'ramen agein', category: 'OMNI',
    lat: 34.689309, lng: 135.507659, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu and miso tare; kamadama with soy.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork and scallop broth; grilled pork chashu; wagyu; egg.',
    hours_raw: 'Tue–Sun and public holidays from 10:00 to 14:00 per Tabelog, with different weekday and weekend hours; a September 2026 diner gives Tue–Fri 10:00–14:00 and weekends 11:00–14:00, and another found Friday dinner. Closed Mon (Tue if Mon is a holiday); may close early when sold out; monthly calendar on Instagram @ramen_again_osaka (Tabelog). Cash only: no cards, e-money or QR (Tabelog). App with stamp card (2025).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Koraibashi 1-6-3, Exa Bldg 1F — 1 min from Kitahama Stn exit 4',
    cuisine: 'Morning-to-lunch ramen with grilled branded-pork chashu · shoyu ramen ¥1,100: light, clean umami, sharp soy, slightly thin noodles, freshly grilled chashu · spicy shoyu ramen · spicy miso ramen ¥1,380: pork and scallop broth with house miso sauce, spicy powder to stir in · miso ramen with straight noodles · shio ramen: pork-based, thin noodles · black wagyu "kamadama niku niku" 150 g ¥1,000, from the binder menu, with a little rice · chashu rice bowl with egg ¥350 · seasoned egg ¥150 · yuzu-kosho and peppers to change it up · 8 counter seats',
    website: null, gmaps: gm('ramen agein 北浜'), menu_url: null,
    notes: "[Ramen · morning-to-lunch shoyu and spicy miso by Kitahama Station] An eight-seat counter a minute from Kitahama Station, open since 2024 and opening as early as 10:00 for a breakfast or early-lunch bowl, and a line can form by 11:00. The common thread is grilled chashu of branded pork, charred and fragrant, praised by several diners. The shoyu ramen (¥1,100) is light, with a sharp soy and clean umami; diners split on it, from refreshing to too plain and sour. The spicy miso (¥1,380) builds on pork and scallop broth with a house miso and a spicy powder to stir in, and the black wagyu kamadama niku niku (¥1,000), found in a binder rather than on the ticket machine, ends with a raw egg and soy over the last noodles. Hours vary; check Instagram. Cash only; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 September 2024 (Tabelog)', background: 'Ramen counter; Instagram @ramen_again_osaka, X @Ramen_again (Tabelog).', philosophy: null, specialty: 'Shoyu and spicy miso ramen with grilled chashu.',
      anecdotes: [
        { text: '"I ordered the Spicy Miso Ramen for JPY 1380, made with Kurabio pork and scallop broth, along with homemade miso sauce… The chashu on the far left was freshly grilled and had a great texture." — October 2026.', source: R + 'B500427399/' },
        { text: '"The soy sauce flavor was sharp, but the first bite was all about the aroma of the broth!… The chashu was grilled, which added an incredible fragrance." — October 2026, spicy shoyu ramen.', source: R + 'B537061389/' },
      ],
      japanese_sources_summary: '食べログ: ramen agein、大阪市中央区高麗橋1-6-3 エグザビル 1F、北浜駅4番出口から徒歩1分、火〜日・祝 10:00〜14:00(平日と土日祝で時間が異なる)、月休み(祝日なら火曜)、売り切れで早じまい、臨時休業あり、月末にSNSで営業カレンダー(Instagram @ramen_again_osaka、X @Ramen_again)、カード・電子マネー・QR不可、カウンター8席、2024年9月12日開店。口コミ(2025年2月〜2026年10月): 9時55分にすでに開店、辛味噌ラーメン1,380円(銘柄豚とホタテのスープ、自家製の味噌だれ)、焼きたてのチャーシュー、辛い粉で味変、11時開店前に5人、黒毛和牛の「kamadama niku niku」150g 1,000円(券売機になくファイルのメニュー)、ご飯少し、平打ちのもちもち麺、生卵と醤油で締め、塩ラーメン(豚ベース、細麺)、柚子胡椒、アプリのスタンプ、平日10〜14時・土日11〜14時という声、醤油ラーメン1,100円は酸味があるという声、麺は固め、チャーシュー丼(銘柄豚と特製卵)350円、味噌ラーメンはストレート麺、金曜は夜も営業という声、辛い醤油ラーメン、醤油はキレがありスープの香り、炙ったチャーシューの香り、醤油ラーメンに味玉150円、すっきりした旨みだがコクと個性が足りないという声、カウンターのみ、行列は回転が遅いからかという声。',
      confidence: 'medium', sources: [TB, R + 'B500427399/', R + 'B535730240/', R + 'B536027306/', R + 'B536573520/', R + 'B537061389/', R + 'B537881437/'] },
    ramen: {
      broth_base: ['pork', 'shellfish'], broth_texture: 'chintan', tare: ['shoyu', 'miso', 'shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Slightly thin noodles in the shoyu; straight in the miso; flat chewy in the kamadama (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Shoyu ramen ¥1,100; spicy miso ramen ¥1,380 (2026).',
      chashu: 'Freshly grilled branded-pork chashu, charred and fragrant (2026).',
      notable_toppings: ['grilled chashu', 'spicy powder', 'yuzu-kosho', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Pork and scallop broth.' },
      pantheon: 'Kitahama\'s 10 am ramen counter, where the grilled branded-pork chashu steals the show.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 4, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537881437/', '"A refreshing umami flavor… lacks richness" — placed low.'],
        oiliness: [R + 'B537881437/', '"More like a broth for soba or udon" — placed low.'],
        clarity: [R + 'B537881437/', 'Light, soba-like broth — placed high.'],
        tare_strength: [R + 'B537061389/', '"The soy sauce flavor was sharp" — placed high.'],
        noodle_firmness: [R + 'B535730240/', '"The noodles are firm"; "slightly thin and soft" (B537881437) — mid-scale.'],
        aroma_punch: [R + 'B537061389/', '"The chashu was grilled, which added an incredible fragrance" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B537061389/', R + 'B537881437/', R + 'B535730240/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; extra items in a binder; app stamp card (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区高麗橋1-6-3 エグザビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区高麗橋一丁目6番3号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B500427399/', R + 'B536027306/', R + 'B537881437/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu ramen', '¥1,100', 'Ramen', 'no', 'no', 'October 2026.', 'shoyu'),
      it('', '', 'Spicy miso ramen', '¥1,380', 'Ramen', 'no', 'no', 'October 2026.', 'kara_miso'),
      it('', '', 'Miso ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'miso'),
      it('', '', 'Spicy shoyu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'kara_shoyu'),
      it('', '', 'Black wagyu kamadama niku niku (150 g)', '¥1,000', 'Noodles', 'no', 'no', 'October 2026; binder menu.', 'kamadama'),
      it('', '', 'Chashu rice bowl with egg', '¥350', 'Rice', 'no', 'no', 'September 2026.', 'chashu_don'),
      it('', '', 'Seasoned egg', '¥150', 'Toppings', 'no', 'no', 'October 2026.', 'ajitama'),
    ] }, {
    cuisine: '朝から昼の、炙った銘柄豚のチャーシューのラーメン・醤油ラーメン1,100円: あっさりすっきりした旨み、キレのある醤油、やや細い麺、焼きたてのチャーシュー・辛い醤油ラーメン・辛味噌ラーメン1,380円: 豚とホタテのスープに自家製の味噌だれ、辛い粉を混ぜて・ストレート麺の味噌ラーメン・豚ベースの細麺の塩ラーメン・ファイルのメニューの黒毛和牛の「kamadama niku niku」150g 1,000円、ご飯少し付き・卵のチャーシュー丼350円・味玉150円・柚子胡椒や胡椒で味変・カウンター8席',
    neighborhood: '中央区高麗橋1-6-3 エグザビル 1F。北浜駅4番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油と味噌のたれ、醤油をかける釜玉。',
    vegan_detail: 'ヴィーガンではありません。豚とホタテのスープ、炙った豚のチャーシュー、和牛、卵。',
    notes: '[ラーメン・北浜駅すぐ、朝から昼の醤油と辛味噌] 北浜駅から1分、カウンター8席の店で、2024年開店、早ければ10時に開き朝食や早めの昼の一杯に、11時には行列ができることも。どの一杯にも共通するのは銘柄豚の炙りチャーシューで、香ばしく焦げ目がつき、何人もがほめる。醤油ラーメン(1,100円)はあっさりでキレのある醤油とすっきりした旨み、さわやかという人から物足りなく酸っぱいという人まで評価は分かれる。辛味噌(1,380円)は豚とホタテのスープに自家製の味噌だれ、辛い粉を混ぜて。券売機にはないファイルのメニューにある黒毛和牛の「kamadama niku niku」(1,000円)は、最後の麺に生卵と醤油をかけて。営業時間は変わるのでInstagramで確認を。現金のみ、月曜休み。',
  });
}

// ================================================================ 天満橋ササラ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27012198/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://sasala.jp/';
  const WD = day(['11:00', '15:00'], ['18:00', '22:00']); const SA = day(['11:00', '14:30'], ['18:00', '22:00']);
  put({
    id: 'osaka_temmabashi_sasara', name: '天満橋ササラ (Temmabashi Sasara)', category: 'OMNI',
    lat: 34.687251, lng: 135.514431, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles; sesame-paste and soy tantanmen soup.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: minced-meat topping; broth base not described.',
    hours_raw: 'Mon–Fri 11:00–15:00 and 18:00–22:00; Sat and public holidays 11:00–14:30 and 18:00–22:00; Sun 11:00–14:30; closing days vary (Tabelog). Large noodles free at lunch (October 2026). No service or cover charge. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA, 6: day(['11:00', '14:30']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Uchihiranomachi 2-1-2, IS Bldg — 5 min from Tenmabashi Stn',
    cuisine: 'Golden-sesame tantanmen · kin-goma (golden sesame) tantanmen ¥980, the most popular: thick, creamy, sesame-rich soup that is easy to drink, thin noodles, minced meat and vegetables · heat levels, up to 3 free; level 2 is the usual · set A +¥170: rice and kimchi to tip into the last of the soup · ground sesame and Sichuan pepper on the table · limited chilled tantanmen with a tangy edge · large noodles free at lunch · 8 counter seats, 4 at a table',
    website: OWN, gmaps: gm('天満橋ササラ'), menu_url: null,
    notes: "[Ramen · golden-sesame tantanmen near Tenmabashi] A twelve-seat tantanmen counter near Tenmabashi with a regular who has logged 17 visits and can't go two weeks without it. The kin-goma tantanmen (¥980) is the order: a thick, creamy, sesame-forward soup that's easy to drink, somewhere between soup and dry tantanmen, over thin noodles with minced meat and a good amount of vegetables. Pick a heat level, with three free; level 3 makes the lips tingle. The ritual is the finish: add set A (¥170) and tip the rice and kimchi into the last of the soup like a porridge, with more ground sesame and Sichuan pepper from the table. At lunch, large noodles are free. A chilled tantanmen appears in summer. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tantanmen shop (official site sasala.jp; Tabelog).', philosophy: null, specialty: 'Golden-sesame tantanmen.',
      anecdotes: [
        { text: '"After slurping the noodles, I did my usual routine of diving rice and kimchi into the soup, then sprinkled some ground sesame and Sichuan pepper on top." — August 2025, kin-goma tantanmen with set A.', source: R + 'B139337459/' },
        { text: '"The soup… had a strong sesame aroma and richness. The broth was not too thin, nor too thick, but rather creamy and easy to drink. The noodles were thin and paired well." — October 2026, kin-goma tantanmen ¥980.', source: R + 'B537727789/' },
      ],
      japanese_sources_summary: '公式 sasala.jp。食べログ: 天満橋ササラ、大阪市中央区内平野町2-1-2 ISビル、谷町線天満橋駅から徒歩5分、谷町四丁目から9分、京阪天満橋から5分、月〜金 11:00〜15:00・18:00〜22:00、土・祝 11:00〜14:30・18:00〜22:00、日 11:00〜14:30、不定休、サービス料・チャージなし、カード・電子マネー・QR不可、12席(カウンター8、テーブル4)。口コミ(2024年2月〜2026年10月): 金胡麻の大盛りとご飯セット、残りのスープにご飯とキムチ、すり胡麻と花椒を足す、17回通う人、2週間に一度は食べたい、雑炊のように、金胡麻担々麺は胡麻の風味、辛さ3と期間限定の冷やし担々麺の大盛り、ひき肉と野菜がたっぷり、冷やしは冷やし中華のような酸味、辛さ2が人気、辛さ3は唇がしびれる、濃厚でクリーミー、汁なしとの間のよう、ご飯がすすむ、テーブル約2卓とカウンター約7席、2人で営業、一番人気の金胡麻担々麺980円、辛さ3まで無料、Aセット(ご飯とキムチ)170円、昼は大盛り無料、細麺。',
      confidence: 'medium', sources: [TB, OWN, R + 'B139337459/', R + 'B533608695/', R + 'B533628914/', R + 'B535030825/', R + 'B535107225/', R + 'B537727789/'] },
    ramen: {
      broth_base: [], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin noodles; large free at lunch (October 2026).' },
      regional_style: [], sub_genre: ['tantanmen'],
      signature_bowl: 'Kin-goma tantanmen, ¥980 (October 2026).',
      chashu: null,
      notable_toppings: ['minced meat', 'vegetables', 'ground sesame', 'Sichuan pepper', 'rice and kimchi set'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Minced meat.' },
      pantheon: 'Tenmabashi\'s golden-sesame tantanmen, finished with rice and kimchi tipped into the soup.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B535107225/', '"The broth was thick and creamy" — placed high.'],
        oiliness: [R + 'B537727789/', '"Creamy and easy to drink" — mid-scale.'],
        clarity: [R + 'B535107225/', 'Thick, creamy sesame soup — bottom of scale.'],
        tare_strength: [R + 'B537727789/', '"Not too thin, nor too thick" — mid-scale.'],
        noodle_firmness: [R + 'B537727789/', '"The noodles were thin and paired well" — mid-scale.'],
        aroma_punch: [R + 'B535107225/', '"Rich in sesame aroma"; level 3 "spicy enough to make my lips tingle" (B535030825) — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B535107225/', R + 'B537727789/', R + 'B535030825/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Spice level asked when you order; no cover charge (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区内平野町2-1-2 ISビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区内平野町二丁目1番2号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537727789/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Kin-goma (golden sesame) tantanmen', '¥980', 'Tantanmen', 'no', 'no', 'October 2026; heat to level 3 free.', 'kingoma'),
      it('', '', 'Set A (rice and kimchi)', '+¥170', 'Sets', 'ask', 'ask', 'October 2026.', 'set_a'),
      it('', '', 'Chilled tantanmen (limited)', '', 'Tantanmen', 'no', 'no', 'August 2026.', 'hiyashi'),
    ] }, {
    cuisine: '金胡麻の担々麺・一番人気の金胡麻担々麺980円: 濃厚でクリーミー、胡麻が香り飲みやすいスープ、細麺、ひき肉と野菜・辛さは3まで無料、2が定番・Aセット+170円: ご飯とキムチを残りのスープに・卓上にすり胡麻と花椒・期間限定の酸味のある冷やし担々麺・昼は大盛り無料・カウンター8席、テーブル4席',
    neighborhood: '中央区内平野町2-1-2 ISビル。天満橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の細麺、練り胡麻と醤油の担々麺のスープ。',
    vegan_detail: 'ヴィーガンではありません。ひき肉のトッピング、スープのベースは記載なし。',
    notes: '[ラーメン・天満橋近く、金胡麻の担々麺] 天満橋近くの12席の担々麺の店で、17回通い2週間食べないと落ち着かないという常連も。頼むのは金胡麻担々麺(980円): 濃厚でクリーミー、胡麻が前に出るのに飲みやすく、汁ありと汁なしの間のようなスープに細麺、ひき肉と野菜もたっぷり。辛さを選び、3までは無料、辛さ3は唇がしびれる。お決まりは締め: Aセット(170円)を足し、ご飯とキムチを残りのスープに入れて雑炊のように、卓上のすり胡麻と花椒を追加して。昼は大盛り無料。夏は冷やし担々麺も。現金のみ。',
  });
}

save();
