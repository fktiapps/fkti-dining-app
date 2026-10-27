// Osaka sweep (2-mile circle around Dotonbori), batch 79 — ramen phase (all OMNI).
//   + 青葉らあめん ほんまもん屋 (kakuni and bok choy shoyu ramen near Matsuyamachi; one-person shop → mom_and_pop)
//   + 喜多方ラーメン 坂内 なんば日本橋店 (Kitakata chain branch, opened 2023)
//   + 麺屋ガテンZ (Jiro-style mazesoba on Otaroad; sister of Menya Gaten)
//   + 無限ラーメン 難波中3丁目 (beef-bone paitan and spicy chashu noodles; third Mugen record)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 79);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 青葉らあめん ほんまもん屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27002881/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.aoba-ramen.com/shop.html';
  put({
    id: 'osaka_aoba_ramen_honmamonya', name: '青葉らあめん ほんまもん屋 (Aoba Ramen Honmamon Ya)', category: 'OMNI',
    lat: 34.673478, lng: 135.512059, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based broth and kakuni.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-feet broth with dashi, kakuni, egg.',
    hours_raw: 'Daily 12:00–14:00 and 18:00–22:00; hours may change (Tabelog). Cards, e-money and QR accepted (Tabelog; August 2026).',
    hours: ALL(day(['12:00', '14:00'], ['18:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi 1-7-22, Astro Villa Matsuyamachi 1F — 100 m south of Matsuyamachi Stn',
    cuisine: 'Light shoyu ramen with meltingly tender kakuni · Aoba ramen ¥1,700 with two kakuni, egg and bok choy · ramen without kakuni ¥1,100 · five-kakuni ramen ¥2,700 · half Aoba ramen · pork-trotter soba with scallion oil ¥1,000 · extra kakuni slice ¥350 · lunch A set and rice set · medium-thin straight noodles · house condiments on the counter · 10 counter seats',
    website: OWN, gmaps: gm('青葉らあめん ほんまもん屋 松屋町'), menu_url: null,
    notes: "[Ramen · kakuni and bok choy shoyu ramen by Matsuyamachi] A ten-seat counter 100 m from Matsuyamachi Station, run single-handed by a polite owner, with a spotless room. The Aoba ramen (¥1,700) is the reason to come. A light soy broth of chicken feet and vegetables with Japanese dashi carries medium-thin straight noodles. On top sit two slabs of sweet, meltingly tender kakuni, plus bok choy, a hard-boiled egg and a whole stick of menma. Skip the kakuni for ¥1,100, or go to five slices for ¥2,700. A newer pork-trotter soba with scallion oil (¥1,000) brings three trotters on the side. House condiments let you layer the flavor. It opens at noon, late for ramen. Cards and cashless accepted.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Relocated from Yamanouchi Heights, Kawaramachi 1-9-14 (Tabelog)', background: 'Aoba Ramen shop; official site aoba-ramen.com. One-person operation (August 2026 review).', philosophy: null, specialty: 'Kakuni and bok choy shoyu ramen.',
      anecdotes: [
        { text: '"The broth is described as \'a soy sauce-based soup made with chicken feet and vegetables, mixed with a Japanese-style dashi.\'" — June 2026, Aoba ramen ¥1,700.', source: R + 'B529869209/' },
        { text: '"The braised pork—it\'s delicious! It\'s tender and packed with flavor… The light broth allows the deliciousness of the pork to stand out even more." — August 2026.', source: R + 'B533460248/' },
      ],
      japanese_sources_summary: '公式 aoba-ramen.com。食べログ: 青葉らあめん ほんまもん屋、大阪市中央区瓦屋町1-7-22 アストロヴィラ松屋町 1F、松屋町駅から南へ100m、毎日12:00〜14:00・18:00〜22:00、カード・電子マネー・QR可、カウンター10席、禁煙、瓦屋町1-9-14 山之内ハイツ1Fから移転。口コミ(2025年7月〜2026年8月): 新メニューの豚足そば(ねぎ油の麺)1,000円、角煮1枚350円、豚足3個は別皿、細麺、味玉、メンマ、半分の青葉らあめん、鶏と野菜のあっさりした醤油スープ、店主に挨拶、Aランチ、店内は清潔、角煮とチンゲン菜、オリジナルの調味料、ライスセット、中細ストレート麺、厚いチャーシュー2枚、青葉らあめん1,700円(角煮2個、味玉、チンゲン菜)、鶏足と野菜の醤油ベースに和風だし、12時開店、一人で営業、角煮なし1,100円、ゆで卵、丸ごとのメンマ、角煮5個2,700円、店主は丁寧、キャッシュレス可。',
      confidence: 'medium', sources: [TB, OWN, R + 'B529869209/', R + 'B533460248/', R + 'B417370576/', R + 'B505966945/', R + 'B510944599/', R + 'B527248989/'] },
    ramen: {
      broth_base: ['chicken', 'vegetable', 'other'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thin straight noodles, smooth (May 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Aoba ramen, ¥1,700, two kakuni (June–August 2026).',
      chashu: 'Kakuni, sweet, savory and meltingly tender; also thick chashu in the rice set (May–August 2026).',
      notable_toppings: ['kakuni', 'bok choy', 'whole menma', 'hard-boiled egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken-feet broth.' },
      pantheon: 'Matsuyamachi\'s one-person Aoba counter: a light shoyu with melting kakuni and bok choy.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B527248989/', '"The broth was light yet had a lingering flavor."'],
        oiliness: [R + 'B533460248/', '"A light flavor from vegetables and Japanese dashi" — placed low.'],
        clarity: [R + 'B417370576/', '"The clear soy sauce broth" — placed high.'],
        tare_strength: [R + 'B527248989/', '"A lingering flavor" — mid-scale.'],
        noodle_firmness: [R + 'B527248989/', '"Smooth and had a great texture" — mid-scale.'],
        aroma_punch: [R + 'B533460248/', 'Light vegetable-and-dashi broth — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B529869209/', R + 'B533460248/', R + 'B527248989/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ten-seat counter; polite owner (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区瓦屋町1-7-22 アストロヴィラ松屋町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区瓦屋町一丁目7番22号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529869209/', R + 'B533460248/', R + 'B417370576/'],
    price_note: 'Prices from June–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Aoba ramen (two kakuni, egg, bok choy)', '¥1,700', 'Ramen', 'no', 'no', 'June–August 2026.', 'aoba'),
      it('', '', 'Ramen without kakuni', '¥1,100', 'Ramen', 'no', 'no', 'August 2026.', 'plain'),
      it('', '', 'Five-kakuni ramen', '¥2,700', 'Ramen', 'no', 'no', 'August 2026.', 'kakuni5'),
      it('', '', 'Pork-trotter soba with scallion oil', '¥1,000', 'Ramen', 'no', 'no', 'New; August 2026.', 'tonsoku_soba'),
      it('', '', 'Kakuni (1 slice)', '¥350', 'Toppings', 'no', 'no', 'August 2026.', 'kakuni1'),
    ] }, {
    cuisine: 'とろける角煮のあっさり醤油ラーメン・角煮2個、卵、チンゲン菜の青葉らあめん1,700円・角煮なし1,100円・角煮5個2,700円・半分の青葉らあめん・ねぎ油の豚足そば1,000円・角煮1枚追加350円・Aランチとライスセット・中細ストレート麺・カウンターに自家製の調味料・カウンター10席',
    neighborhood: '中央区瓦屋町1-7-22 アストロヴィラ松屋町 1F。松屋町駅から南へ100m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースのスープと角煮。',
    vegan_detail: 'ヴィーガンではありません。鶏足のスープに和風だし、角煮、卵。',
    notes: '[ラーメン・松屋町の角煮とチンゲン菜の醤油ラーメン] 松屋町駅から100mのカウンター10席の店で、丁寧な店主が一人で営み、店内はとても清潔。お目当ては青葉らあめん(1,700円)。鶏足と野菜の醤油スープに和風だしを合わせたあっさりスープに中細ストレート麺。甘辛くとろけるように柔らかい角煮が2切れ、チンゲン菜、ゆで卵、丸ごとのメンマがのる。角煮なしなら1,100円、5切れなら2,700円。新しいねぎ油の豚足そば(1,000円)は豚足3個が別皿で。自家製の調味料で味を重ねられる。開店は12時と、ラーメン店としては遅め。カードやキャッシュレスも可。',
  });
}

// ================================================================ 喜多方ラーメン 坂内 なんば日本橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27132504/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://ban-nai.com/';
  const W = day(['11:00', '22:00']), S = day(['11:00', '21:00']);
  put({
    id: 'osaka_kitakata_bannai_namba_nipponbashi', name: '喜多方ラーメン 坂内 なんば日本橋店 (Kitakata Ramen Bannai Namba Nipponbashi)', category: 'OMNI',
    lat: 34.660144, lng: 135.50612, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: clear pork broth, chashu.',
    hours_raw: 'Mon–Sat 11:00–22:00 (L.O. 21:45); Sun and holidays 11:00–21:00 (L.O. 20:45); hours may change (Tabelog). Ticket machine (October 2026). Cards (AMEX), e-money and QR accepted (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nipponbashi 4-8-16, KUS Nipponbashi 1F — between Nipponbashi and Ebisucho',
    cuisine: 'Kitakata ramen chain · light, clear pork-and-shoyu broth · flat, high-hydration curly noodles · melt-in-the-mouth chashu · roast pork ramen ¥1,360 · Mega Chashu ramen with about 24 slices (from 1 September) · miso ramen · limited chicken shio yuzu · thick-cut green onion · rice ¥200 · mini aburi yakiniku don · gyoza',
    website: OWN, gmaps: gm('喜多方ラーメン 坂内 なんば日本橋店'), menu_url: null,
    notes: "[Ramen · Kitakata-style chashu ramen between Nipponbashi and Ebisucho] A branch of the Bannai chain, open since 2023 and one of the few places in Kansai for Kitakata ramen. The bowl is a light, clear pork broth seasoned with soy, over flat, chewy, high-hydration curly noodles. Melt-in-the-mouth chashu and thick-cut green onion top it. The roast pork ramen was ¥1,360 in September 2026. From 1 September the Mega Chashu ramen piles on about 24 slices, nearly double. There's also a miso ramen that won over one shoyu loyalist, a limited chicken shio with yuzu, and a mini aburi yakiniku don. Friendly staff; it was quiet at 22:00 one Friday. Buy a ticket at the machine. Open until 22:00.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 January 2023 (Tabelog)', background: 'Branch of the Kitakata Ramen Bannai chain; official site ban-nai.com.', philosophy: null, specialty: 'Kitakata chashu ramen.',
      anecdotes: [
        { text: '"The pork clear soup is incredibly delicious. The noodles are perfectly chewy and smooth. The chashu is unmatched in flavor." — September 2026, roast pork ramen ¥1,360.', source: R + 'B535565727/' },
        { text: '"The flat, high-hydration curly noodles pair well with the light soy sauce broth." — September 2026, Mega Chashu ramen.', source: R + 'B534974371/' },
      ],
      japanese_sources_summary: '公式 ban-nai.com。食べログ: 喜多方ラーメン 坂内 なんば日本橋店、大阪市浪速区日本橋4-8-16 KUS日本橋 1F、恵美須町から487m、月〜土11:00〜22:00(L.O.21:45)、日祝11:00〜21:00(L.O.20:45)、カード(AMEX)・電子マネー・QR可、禁煙、2023年1月21日開店。口コミ(2026年9〜10月): 金曜22時は客一人、親切な外国人スタッフ、関西では珍しい喜多方ラーメン、味噌ラーメン、麺とチャーシューのバランス、9月1日からのメガチャーシュー祭り、チャーシュー24枚ほど、平打ちの多加水ちぢれ麺、あっさり醤油、焼豚ラーメン1,360円、ライス200円、豚の清湯スープ、もちもちの麺、券売機、限定の鶏塩柚子ラーメン、鶏チャーシュー、太いちぢれ麺、とろけるチャーシュー、厚切りのねぎ、ミニ炙り焼肉丼。',
      confidence: 'medium', sources: [TB, OWN, R + 'B535565727/', R + 'B534974371/', R + 'B472880102/', R + 'B537745654/', R + 'B538035220/', R + 'B506658220/'] },
    ramen: {
      broth_base: ['pork'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: 'flat', hydration: 'high', handmade: false, notes: 'Flat, high-hydration curly noodles, chewy and smooth (September–October 2026).' },
      regional_style: ['Kitakata'], sub_genre: ['ramen'],
      signature_bowl: 'Roast pork ramen, ¥1,360 (September 2026); Mega Chashu ramen from 1 September.',
      chashu: 'Melt-in-the-mouth pork chashu (October 2026).',
      notable_toppings: ['chashu', 'thick-cut green onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork broth.' },
      pantheon: 'Nipponbashi\'s Kitakata outpost: clear pork shoyu loaded with chashu, on fat curly noodles.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B538035220/', '"A light yet distinctly flavorful broth."'],
        oiliness: [R + 'B534974371/', '"The light soy sauce broth" — placed low.'],
        clarity: [R + 'B535565727/', '"The pork clear soup" — placed high.'],
        tare_strength: [R + 'B538035220/', '"Distinctly flavorful" — mid-scale.'],
        noodle_firmness: [R + 'B538035220/', '"The thick, chewy curly noodles."'],
        aroma_punch: [R + 'B537745654/', '"The broth was light and refreshing" (limited) — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B535565727/', R + 'B534974371/', R + 'B538035220/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; friendly staff (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区日本橋4-8-16 KUS日本橋 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区日本橋四丁目8番16号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535565727/', R + 'B534974371/'],
    price_note: 'Prices from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Roast pork ramen', '¥1,360', 'Ramen', 'no', 'no', 'September 2026.', 'yakibuta'),
      it('', '', 'Mega Chashu ramen', '', 'Limited', 'no', 'no', 'About 24 slices; from 1 September 2026.', 'mega_chashu'),
      it('', '', 'Miso ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'miso'),
      it('', '', 'Rice', '¥200', 'Rice', 'no', 'vegan', 'September 2026.', 'rice'),
      it('', '', 'Mini aburi yakiniku don', '', 'Rice', 'no', 'no', 'October 2026.', 'aburi_don'),
    ] }, {
    cuisine: '喜多方ラーメンのチェーン・あっさり澄んだ豚と醤油のスープ・平打ちの多加水ちぢれ麺・とろけるチャーシュー・焼豚ラーメン1,360円・チャーシュー24枚ほどのメガチャーシュー麺(9月1日から)・味噌ラーメン・限定の鶏塩柚子・厚切りのねぎ・ライス200円・ミニ炙り焼肉丼・餃子',
    neighborhood: '浪速区日本橋4-8-16 KUS日本橋 1F。日本橋と恵美須町の間',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、餃子。',
    vegan_detail: 'ヴィーガンではありません。豚の清湯スープ、チャーシュー。',
    notes: '[ラーメン・日本橋と恵美須町の間の喜多方ラーメン] 坂内チェーンの店で、2023年開店、関西では数少ない喜多方ラーメンの店。あっさり澄んだ豚のスープを醤油で味付けし、もちもちの平打ち多加水ちぢれ麺。とろけるチャーシューと厚切りのねぎがのる。焼豚ラーメンは2026年9月に1,360円。9月1日からのメガチャーシュー麺はチャーシュー24枚ほど、通常のほぼ倍。醤油派だった人がはまった味噌ラーメン、限定の鶏塩柚子、ミニ炙り焼肉丼も。スタッフは親切で、金曜22時は空いていた日も。食券は券売機で。22時まで。',
  });
}

// ================================================================ 麺屋ガテンZ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27101275/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://ameblo.jp/gaten8/';
  put({
    id: 'osaka_menya_gaten_z_otaroad', name: '麺屋ガテンZ (Menya Gaten Z)', category: 'OMNI',
    lat: 34.660296, lng: 135.504629, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy tare; fish powder.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: ground meat, chashu, back fat, egg yolk.',
    hours_raw: 'Lunch and dinner daily: last entry Mon–Fri 15:00 (lunch) and 21:30 (dinner); Sat, Sun and holidays 15:45 and 22:00; open year-round except New Year (Tabelog); opening times not listed. Cash-only ticket machine (June 2026). No cards, e-money or QR (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nipponbashi-nishi 1-1-5, on Otaroad — 5 min from Nankai Namba or Ebisucho Stn',
    cuisine: 'Jiro-style mazesoba · MAZE soba (shoyu), 300 g of thick noodles · free choice of noodle, vegetable, garlic and fat amounts · Taiwanese MAZE soba ¥1,150 with ground meat, chives, nori, fish powder and egg yolk · curry mazesoba · brothless shio ramen with yuzu · extra meat · ¥100 topping gacha · free kimchi · black pepper, shichimi, Sichuan pepper, chili oil, vinegar and tare on the counter · counter only',
    website: OWN, gmaps: gm('麺屋ガテンZ 日本橋'), menu_url: null,
    notes: "[Ramen · Jiro-style mazesoba on Otaroad] A Jiro-style mazesoba counter on Otaroad, open since 2017; one regular also goes to the Namba branch. The MAZE soba comes with 300 g of thick, smooth noodles and tender chashu, and noodles, vegetables, garlic and fat can be adjusted for free. Garlic hits hard, so go light before a meeting. The Taiwanese version (¥1,150) adds ground meat, chives, nori, fish powder and egg yolk; there's a mildly hot curry mazesoba and a brothless shio ramen with yuzu that one fan rates the best of its kind. The counter is stocked with black pepper, shichimi, Sichuan pepper, chili oil and vinegar, kimchi is free, and a ¥100 gacha picks a surprise topping like mentaiko. Allow ten minutes. Cash-only ticket machine.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 24 October 2017 (Tabelog)', background: 'Mazesoba shop on Otaroad (Tabelog, staff-maintained); a Namba branch also operates (May 2026 review).', philosophy: null, specialty: 'Jiro-style mazesoba.',
      anecdotes: [
        { text: '"The noodles were soft, wide, and flat, topped with ground meat, chives, seaweed, fish powder, garlic, green onions, and an egg yolk, giving it a Jiro-style twist." — February 2026, Taiwanese MAZE soba ¥1,150.', source: R + 'B522573059/' },
        { text: '"The 100 yen gacha topping added a playful element, and I was lucky enough to get mentaiko, which paired wonderfully with the rich mazesoba." — May 2026, shoyu mazesoba.', source: R + 'B528471318/' },
      ],
      japanese_sources_summary: '公式ブログ ameblo.jp/gaten8。食べログ(店舗会員): 麺屋ガテンZ、大阪市浪速区日本橋西1-1-5、オタロード沿い、南海なんば駅・恵美須町駅から徒歩5分、平日は昼15:00・夜21:30、土日祝は昼15:45・夜22:00までに入店、年中無休(年末年始除く)、カード・電子マネー・QR不可、2017年10月24日開店。口コミ(2026年2〜6月): 台湾MAZEそば1,150円、ニンニク・アブラ増し、平打ちの太麺、ひき肉・ニラ・海苔・魚粉・卵黄、卓上に黒胡椒・七味・花椒・ラー油・酢・ラーメンのたれ、ポイントカードとガチャ、MAZEそば(醤油)麺300g、麺・野菜・ニンニク・アブラの量は無料で調整、キムチ食べ放題、カレーまぜそば、辛さは控えめ、100円のガチャで明太子、カウンターのみ、現金の券売機、提供まで10分ほど、ニンニクが強い、汁なし塩ラーメンに柚子、なんばの店も。',
      confidence: 'medium', sources: [TB, OWN, R + 'B522573059/', R + 'B528471318/', R + 'B525094578/', R + 'B526459636/', R + 'B529470193/', R + 'B529629453/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'flat', hydration: null, handmade: false, notes: 'Thick, wide, flat noodles, smooth; 300 g in the MAZE soba (February–March 2026).' },
      regional_style: ['Tokyo Jiro-kei'], sub_genre: ['mazesoba_aburasoba', 'jiro_kei'],
      signature_bowl: 'MAZE soba (shoyu), 300 g (March 2026); Taiwanese MAZE soba, ¥1,150 (February 2026).',
      chashu: 'Tender, flavorful chashu; extra meat available (March 2026).',
      notable_toppings: ['garlic', 'back fat', 'egg yolk', 'fish powder', '¥100 gacha topping'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat and back fat.' },
      pantheon: 'Otaroad\'s Jiro-style mazesoba counter: 300 g of thick noodles and a ¥100 topping gacha.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B528471318/', '"Perfectly coated in a rich soy sauce."'],
        oiliness: [R + 'B522573059/', 'Ordered with extra fat — placed high.'],
        clarity: [R + 'B525094578/', 'Soupless mazesoba — placed low.'],
        tare_strength: [R + 'B528471318/', '"Craving a bold flavor… a rich soy sauce" — placed high.'],
        noodle_firmness: [R + 'B522573059/', '"The noodles were soft, wide, and flat" — mid-scale.'],
        aroma_punch: [R + 'B529470193/', '"The flavor was quite punchy with garlic."'],
      },
      confidence: 'medium', sources: [R + 'B522573059/', R + 'B528471318/', R + 'B529470193/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash-only ticket machine; counter only (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区日本橋西1-1-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated February–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区日本橋西一丁目1番5号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B522573059/', R + 'B525094578/'],
    price_note: 'One price from a February 2026 review.', last_checked: TODAY, items: [
      it('', '', 'MAZE soba (shoyu)', '', 'Mazesoba', 'no', 'no', '300 g noodles; March 2026.', 'maze_shoyu'),
      it('', '', 'Taiwanese MAZE soba', '¥1,150', 'Mazesoba', 'no', 'no', 'February 2026.', 'taiwan_maze'),
      it('', '', 'Curry mazesoba', '', 'Mazesoba', 'no', 'no', 'April 2026.', 'curry_maze'),
      it('', '', 'Brothless shio ramen with yuzu', '', 'Mazesoba', 'no', 'no', 'May 2026.', 'shiru_nashi_shio'),
      it('', '', 'Topping gacha', '¥100', 'Toppings', 'no', 'no', 'May 2026.', 'gacha'),
    ] }, {
    cuisine: '二郎系のまぜそば・太麺300gのMAZEそば(醤油)・麺、野菜、ニンニク、アブラの量は無料で選べる・ひき肉、ニラ、海苔、魚粉、卵黄の台湾MAZEそば1,150円・カレーまぜそば・柚子の汁なし塩ラーメン・肉増し・100円のトッピングガチャ・キムチ無料・卓上に黒胡椒、七味、花椒、ラー油、酢、たれ・カウンターのみ',
    neighborhood: '浪速区日本橋西1-1-5、オタロード沿い。南海なんば駅・恵美須町駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油のたれ、魚粉。',
    vegan_detail: 'ヴィーガンではありません。ひき肉、チャーシュー、背脂、卵黄。',
    notes: '[ラーメン・オタロードの二郎系まぜそば] オタロード沿いの二郎系まぜそばのカウンターで、2017年開店、なんばの店にも通う常連も。MAZEそばはなめらかな太麺300gに柔らかいチャーシュー、麺、野菜、ニンニク、アブラの量は無料で調整できる。ニンニクはかなり強いので、人に会う前は控えめに。台湾版(1,150円)はひき肉、ニラ、海苔、魚粉、卵黄入り。辛さ控えめのカレーまぜそばや、柚子の効いた汁なし塩ラーメン(ファンいわく最高峰)も。卓上には黒胡椒、七味、花椒、ラー油、酢がそろい、キムチは無料、100円のガチャで明太子などのトッピングが当たる。提供まで10分ほど。食券は現金のみ。',
  });
}

// ================================================================ 無限ラーメン 難波中3丁目
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27120906/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_mugen_ramen_nambanaka3', name: '無限ラーメン (Mugen Ramen)', category: 'OMNI',
    lat: 34.659781, lng: 135.498826, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; seasoned chashu rice bowl.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-bone broth, beef and pork toppings.',
    hours_raw: 'Daily 11:00–23:00; closes irregularly; hours may change (Tabelog). E-money accepted; no cards or QR (Tabelog).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 3-16-7 — about 7 min from Daikokucho Stn',
    cuisine: 'Beef-bone white soup ramen · beef-bone spicy chashu noodles ¥1,350 with Sichuan pepper and garlic chives · roast beef and fatty brisket toppings · mini chashu rice bowl set · menu geared to overseas visitors',
    website: null, gmaps: gm('無限ラーメン 難波中3丁目'), menu_url: null,
    notes: "[Ramen · Mugen's beef-bone shop in Nambanaka 3-chome] A Mugen Ramen shop open since 2020 near Daikokucho, whose beef-bone aroma greets you at the door. The beef-bone white soup ramen is rich and creamy, topped with tender roast beef and fatty brisket. The spicy chashu noodles (¥1,350) add Sichuan pepper, garlic chives and heat a little milder than Shin Ramyun. Opinions split: one diner found it phenomenal, one found the chashu tough and over-seasoned, another didn't think it worth the price, and the mini chashu rice bowl was mushy and salty for one diner. Staff and customers are mostly from overseas, and service was slow for one diner. Open until 23:00. See also Mugen Ramen Sennichimae and Shinsaibashi.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 December 2020 (Tabelog)', background: 'Mugen Ramen shop (2026 reviews).', philosophy: null, specialty: 'Beef-bone white soup ramen.',
      anecdotes: [
        { text: '"It had a rich, creamy texture with a deep, flavorful essence. The toppings included tender slices of beef roast and fatty brisket." — April 2026.', source: R + 'B526701924/' },
        { text: '"The Sichuan pepper on top really adds a great touch! The broth is delicious. The spiciness is a bit milder than Shin Ramyeon." — June 2026, spicy chashu noodles.', source: R + 'B530881034/' },
      ],
      japanese_sources_summary: '食べログ: 無限ラーメン、大阪市浪速区難波中3-16-7、大国町から429m、毎日11:00〜23:00、不定休、電子マネー可、カード・QR不可、禁煙、2020年12月21日開店。口コミ(2026年4〜8月): 牛骨の香り、牛骨白湯ラーメン、牛骨辛チャーシュー麺、濃厚でクリーミー、ローストビーフと脂ののったブリスケット、ミニチャーシュー丼のセット、ご飯がべちゃっとして塩辛い、スタッフも客も外国人が多い、インバウンド向けのメニュー、花椒、辛さは辛ラーメンより控えめ、ニラ、チャーシューが硬く味が濃い、1,350円にしては物足りないという声、提供に時間がかかる、濃厚。',
      confidence: 'medium', sources: [TB, R + 'B526701924/', R + 'B530881034/', R + 'B529664253/', R + 'B531063830/', R + 'B533687981/', R + 'B533876288/'] },
    ramen: {
      broth_base: ['beef'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Not described in 2026 reviews.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Beef-bone white soup ramen; spicy chashu noodles, ¥1,350 (April–June 2026).',
      chashu: 'Roast beef and fatty brisket (April 2026); tough to one diner (June 2026).',
      notable_toppings: ['roast beef', 'brisket', 'Sichuan pepper', 'garlic chives'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Beef-bone broth.' },
      pantheon: 'Nambanaka\'s Mugen: creamy beef-bone white soup with roast beef and brisket.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B526701924/', '"A rich, creamy texture with a deep, flavorful essence."'],
        oiliness: [R + 'B533687981/', '"Rich and hearty" — mid-scale.'],
        clarity: [R + 'B526701924/', 'Creamy white soup — placed low.'],
        tare_strength: [R + 'B530881034/', 'Chashu "too strong in flavor"; broth "delicious" — mid-scale.'],
        noodle_firmness: [R + 'B533687981/', 'Noodles not described — mid-scale default.'],
        aroma_punch: [R + 'B526701924/', '"Greeted by an indescribable aroma… Is this beef bone?"'],
      },
      confidence: 'low', sources: [R + 'B526701924/', R + 'B530881034/', R + 'B533687981/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Mostly overseas staff and customers; menu geared to visitors (June 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中3-16-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中三丁目16番7号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531063830/', R + 'B529664253/'],
    price_note: 'One price from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Beef-bone white soup ramen', '', 'Ramen', 'no', 'no', 'April–June 2026.', 'gyukotsu_paitan'),
      it('', '', 'Beef-bone spicy chashu noodles', '¥1,350', 'Ramen', 'no', 'no', 'May 2026.', 'kara_chashu'),
      it('', '', 'Mini chashu rice bowl set', '', 'Sets', 'no', 'no', 'June 2026.', 'chashu_don_set'),
    ] }, {
    cuisine: '牛骨白湯ラーメン・花椒とニラの牛骨辛チャーシュー麺1,350円・ローストビーフと脂ののったブリスケット・ミニチャーシュー丼のセット・訪日客向けのメニュー',
    neighborhood: '浪速区難波中3-16-7。大国町駅から徒歩7分ほど',
    gf_detail: 'グルテンフリーではありません。小麦の麺、味付けしたチャーシュー丼。',
    vegan_detail: 'ヴィーガンではありません。牛骨のスープ、牛肉と豚肉のトッピング。',
    notes: '[ラーメン・難波中3丁目の無限の牛骨ラーメン] 大国町近くにある2020年開店の無限ラーメンの店で、入口で牛骨の香りに迎えられる。牛骨白湯ラーメンは濃厚でクリーミー、柔らかいローストビーフと脂ののったブリスケットがのる。辛チャーシュー麺(1,350円)は花椒とニラ入りで、辛さは辛ラーメンより控えめ。評価は分かれ、絶品という人がいる一方、チャーシューが硬く味が濃すぎた、値段に見合わないという人、ミニチャーシュー丼がべちゃっとして塩辛かったという人も。スタッフも客も海外の人が中心で、提供が遅かったという声も。23時まで。千日前店と心斎橋店もあります。',
  });
}

save();
