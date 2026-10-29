// Osaka sweep (2-mile circle around Dotonbori), batch 165 — ramen phase (last).
//   + さつまラーメン 上六店 (old lunch-only tonkotsu shop with a ¥500 student ramen; Uenomiyacho)
//   + 魁力屋 イオンモール大阪ドームシティ店 (Kyoto back-fat shoyu chain in a mall food court; Chiyozaki)
//   + 和dining 清乃 スパワールド店 (Wakayama shoyu ramen inside Spa World; Shinsekai)
//   + ラー麺マン (one-person spicy chashu ramen counter with chili and garlic; Hiranomachi) — mom
//   Skipped chain branches: 27152907 無限ラーメン 新今宮駅前店, 27074108 天下一品 上本町店.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 165);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27152907', 'Chain branch: Mugen Ramen already in data.');
skip('27074108', 'Chain branch: Tenka Ippin already in data.');

// ================================================================ さつまラーメン 上六店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27059665/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_satsuma_ramen_uehonmachi', name: 'さつまラーメン 上六店 (Satsuma Ramen Kamiroku ten)', category: 'OMNI',
    lat: 34.661471, lng: 135.520907, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; fried rice and curry fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth; chashu.',
    hours_raw: 'Daily 11:00–14:00 (Tabelog); may sell out later in lunch (June 2026). Cash only (Tabelog). Branch of the Satsuma Ramen chain, founded 1951 (March 2026 review).',
    hours: ALL(day(['11:00', '14:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Uenomiyacho 4-33, in a residential street near a high school — 7 min from Osaka-Uehommachi Stn exit 14',
    cuisine: 'Old-style light tonkotsu ramen · ramen set meal ¥850 with rice and kimchi · fried rice set ¥900–950 (ramen and half fried rice) · curry fried rice set ¥1,000 · service lunch of a grilled-meat rice bowl and small ramen ¥900 · student-discount ramen ¥500 · medium-thick noodles cooked soft; one slice of chashu, nori, green onion',
    website: null, gmaps: gm('さつまラーメン 上六店'), menu_url: null,
    notes: "[Ramen · a lunch-only old-school tonkotsu shop with a ¥500 student bowl, Uehonmachi] A long-running neighborhood ramen shop in a residential street south of Uehonmachi, open only 11:00–14:00 and busy with students from the nearby high school, who get a ¥500 ramen. The bowl is a light, nostalgic tonkotsu with soft medium-thick noodles and a tender slice of chashu; one diner found it too mild. The sets are the value: ramen with half fried rice for about ¥950, or the slightly spicy curry fried rice set (¥1,000); dip the plain fried rice in the soup. Bright red kimchi comes with the set meal. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of the Satsuma Ramen chain, founded 1951 in Oita (March 2026 review).', background: 'Neighborhood ramen shop (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Light tonkotsu ramen with fried rice.',
      anecdotes: [
        { text: '"The ramen features a nostalgic flavor with a simple tonkotsu broth… dipping the fried rice into the soup creates a different flavor that becomes quite addictive." — June 2026.', source: R + 'B530298940/' },
        { text: '"The ramen featured a traditional, light chicken broth that was quite delicious. The chashu (braised pork) was tender and flavorful…" — January 2026, fried rice set ¥950.', source: R + 'B521689689/' },
      ],
      japanese_sources_summary: '食べログ: さつまラーメン 上六店、大阪市天王寺区上之宮町4-33、近鉄大阪上本町駅14番出口から約7分、毎日11:00〜14:00、カード・電子マネー・QR不可。口コミ(2025年11月〜2026年8月): 住宅街の昔ながらのラーメン店、近くの高校の学生でにぎわう、学割ラーメン500円、ラーメン定食850円 (ご飯とキムチ)、チャーハンセット900〜950円 (ラーメンと半チャーハン)、カレーチャーハンのセット1,000円、焼肉丼と小ラーメンのサービスランチ900円、あっさりしたなつかしいとんこつ、やわらかめの中太麺、チャーシュー1枚、海苔、ねぎ、チャーハンをスープにひたすのもおすすめ、味が薄いという声、遅い時間は売り切れも、1951年創業のチェーンの店という声。',
      confidence: 'medium', sources: [TB, R + 'B516991360/', R + 'B521689689/', R + 'B523899157/', R + 'B530298940/', R + 'B532237131/', R + 'B533960334/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Medium-thick noodles cooked soft (March 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Ramen and half fried rice set, about ¥950 (2026).',
      chashu: 'One tender slice (2026).',
      notable_toppings: ['nori', 'green onion', 'kimchi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Uehonmachi\'s lunch-only student-priced tonkotsu, good with fried rice dipped in the soup.',
      profile: { richness: 2, oiliness: 2, clarity: 2, tare_strength: 2, noodle_firmness: 2, aroma_punch: 1 },
      profile_basis: {
        richness: [R + 'B523899157/', '"quite mild and lacks any strong flavor" — low.'],
        oiliness: [R + 'B532237131/', '"The light tonkotsu ramen is delicious" — low.'],
        clarity: [R + 'B530298940/', 'A tonkotsu broth — placed low.'],
        tare_strength: [R + 'B523899157/', '"lacks any strong flavor" — low.'],
        noodle_firmness: [R + 'B523899157/', '"The noodles are medium-thick and cooked to a soft texture" — low.'],
        aroma_punch: [R + 'B523899157/', '"quite mild" — bottom of scale.'],
      },
      confidence: 'medium', sources: [R + 'B523899157/', R + 'B530298940/', R + 'B521689689/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Busy with students at lunch (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区上之宮町4-33',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区上之宮町4番33号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530298940/', R + 'B523899157/', R + 'B533960334/'],
    price_note: 'Prices from January–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen set meal (rice, kimchi)', '¥850', 'Sets', 'no', 'no', 'March 2026.', 'teishoku'),
      it('', '', 'Fried rice set (ramen and half fried rice)', '¥950', 'Sets', 'no', 'no', 'June 2026.', 'chahan_set'),
      it('', '', 'Curry fried rice set', '¥1,000', 'Sets', 'no', 'no', 'June 2026.', 'curry_chahan'),
      it('', '', 'Student-discount ramen', '¥500', 'Ramen', 'no', 'no', 'June 2026.', 'student'),
      it('', '', 'Service lunch: grilled-meat rice bowl and small ramen', '¥900', 'Sets', 'no', 'no', 'August 2026.', 'service'),
    ] }, {
    cuisine: '昔ながらのあっさりとんこつラーメン・ご飯とキムチのラーメン定食850円・チャーハンセット900〜950円 (ラーメンと半チャーハン)・カレーチャーハンのセット1,000円・焼肉丼と小ラーメンのサービスランチ900円・学割ラーメン500円・やわらかめの中太麺、チャーシュー1枚、海苔、ねぎ',
    neighborhood: '天王寺区上之宮町4-33、高校の近くの住宅街。大阪上本町駅14番出口から徒歩7分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、チャーハンとカレーチャーハン。',
    vegan_detail: 'ヴィーガンではありません。とんこつのスープ、チャーシュー。',
    notes: '[ラーメン・上本町、昼だけの昔ながらのとんこつと学割500円] 上本町の南の住宅街にある長く続く町のラーメン店で、営業は11時〜14時だけ、近くの高校の学生でにぎわい、学生は500円でラーメンが食べられる。一杯はあっさりなつかしいとんこつに、やわらかめの中太麺とやわらかいチャーシュー1枚。薄すぎるという声も。お得なのはセットで、半チャーハンつきで約950円、少しピリ辛のカレーチャーハンのセットは1,000円。素朴なチャーハンはスープにひたして。定食には真っ赤なキムチがつく。現金のみ。',
  });
}

// ================================================================ 魁力屋 イオンモール大阪ドームシティ店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270401/27120498/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.kairikiya.co.jp/';
  put({
    id: 'osaka_kairikiya_aeon_dome_city', name: '魁力屋 イオンモール大阪ドームシティ店 (Kairikiya Ion mall oosaka doomu shiti ten)', category: 'OMNI',
    lat: 34.669994, lng: 135.478273, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare; fried rice and kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and pork broth with back fat; chashu.',
    hours_raw: 'Daily 10:00–21:00 (Tabelog). Opened 11 December 2020 (Tabelog). Cards and e-money accepted; no QR (Tabelog). Food-court seating; kids menu (Tabelog). App coupons, e.g. half-price fried rice (September 2026).',
    hours: ALL(day(['10:00', '21:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Chiyozaki 3-13-1, AEON Mall Osaka Dome City 4F food court — by Dome-mae Stn, next to Kyocera Dome',
    cuisine: 'Kyoto back-fat shoyu ramen (chain branch) · Kyoto shoyu ramen with back fat; seasoned-egg version ¥1,001 · extra back fat on request · thin straight noodles; chashu, green onion, menma · tonkotsu shoyu · sets with fried rice and kara-age · kids menu · food-court seating',
    website: OWN, gmaps: gm('魁力屋 イオンモール大阪ドームシティ店'), menu_url: null,
    notes: "[Ramen · Kyoto back-fat shoyu in a food court by Kyocera Dome] A branch of the Kyoto Kitashirakawa ramen chain Kairikiya, in the fourth-floor food court of AEON Mall by Kyocera Dome, handy before a ballgame and good for families. The house bowl is Kyoto shoyu ramen under a layer of pork back fat that eats lighter than it looks, slightly sweet, on thin straight noodles with chashu and green onion; the seasoned-egg version is ¥1,001. Sets add fragrant fried rice and crisp kara-age. Food comes in minutes. One diner found the soup lukewarm. Open 10:00–21:00 daily.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of Kairikiya, a ramen chain that began in Kitashirakawa, Kyoto (September 2026 review).', background: 'Chain ramen shop in a mall food court (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Kyoto back-fat shoyu ramen.',
      anecdotes: [
        { text: '"The Kyoto shoyu ramen, topped with back fat, had a rich flavor without being too heavy, and it paired perfectly with the thin noodles." — September 2026, ramen with fried rice and kara-age set.', source: R + 'B534994546/' },
        { text: '"Surprisingly, it wasn\'t as heavy with fat as it looked. It was quite light, and I finished it in no time." — September 2026, Kyoto Back Fat Shoyu Flavored Egg Ramen and Fried Rice Set.', source: R + 'B537862243/' },
      ],
      japanese_sources_summary: '食べログ: 魁力屋 イオンモール大阪ドームシティ店、大阪市西区千代崎3-13-1 イオンモール大阪ドームシティ 4F、ドーム前駅から徒歩5分、毎日10:00〜21:00、2020年12月11日開店、カード・電子マネー可、QR不可、フードコート、キッズメニュー、公式サイトあり。口コミ(2026年8〜9月): 京都・北白川発祥のラーメンチェーン、京都背脂醤油ラーメン、味玉ラーメン1,001円、背脂多め、細いストレート麺、チャーシュー、ねぎ、メンマ、とんこつ醤油、チャーハンとkara-ageのセット、提供が早い、見た目より軽い、アプリでチャーハン半額、スープがぬるかったという声、京セラドームの試合前にも。',
      confidence: 'medium', sources: [TB, OWN, R + 'B534429917/', R + 'B534994546/', R + 'B535390369/', R + 'B536121441/', R + 'B536442830/', R + 'B537862243/'] },
    ramen: {
      broth_base: ['chicken', 'tonkotsu'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Kyoto back-fat shoyu ramen with seasoned egg, ¥1,001 (August–September 2026).',
      chashu: 'Chuck-eye chashu (August 2026).',
      notable_toppings: ['back fat', 'green onion', 'menma', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat broth with back fat.' },
      pantheon: 'Kyocera Dome\'s food-court bowl of Kyoto back-fat shoyu.',
      profile: { richness: 3, oiliness: 4, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B534994546/', '"a rich flavor without being too heavy" — mid-scale.'],
        oiliness: [R + 'B534429917/', '"a rich soy sauce base with plenty of chicken fat… it wasn\'t overly greasy" — placed high.'],
        clarity: [R + 'B534429917/', 'A soy broth under back fat — mid-scale.'],
        tare_strength: [R + 'B536442830/', '"it had a slight sweetness, and the rich broth clung well" — mid-scale.'],
        noodle_firmness: [R + 'B534994546/', '"paired perfectly with the thin noodles" — mid-scale.'],
        aroma_punch: [R + 'B537862243/', '"It was quite light" — low.'],
      },
      confidence: 'medium', sources: [R + 'B534994546/', R + 'B534429917/', R + 'B536442830/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Food-court ordering; kids menu (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区千代崎3-13-1 イオンモール大阪ドームシティ 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市西区千代崎三丁目 (chome) 102m — Tabelog point kept (large mall building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534429917/', R + 'B536442830/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kyoto back-fat shoyu ramen with seasoned egg', '¥1,001', 'Ramen', 'no', 'no', 'August–September 2026.', 'ajitama'),
      it('', '', 'Ramen set with fried rice and kara-age', '', 'Sets', 'no', 'no', 'September 2026.', 'set'),
      it('', '', 'Tonkotsu shoyu ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'tonkotsu'),
    ] }, {
    cuisine: '京都の背脂醤油ラーメン (チェーン店)・京都背脂醤油ラーメン、味玉入り1,001円・背脂多めも頼める・細いストレート麺、チャーシュー、ねぎ、メンマ・とんこつ醤油・チャーハンとkara-ageのセット・キッズメニュー・フードコートの席',
    neighborhood: '西区千代崎3-13-1 イオンモール大阪ドームシティ 4F のフードコート。ドーム前駅すぐ、京セラドームの隣',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、チャーハンとkara-age。',
    vegan_detail: 'ヴィーガンではありません。背脂の入った鶏と豚のスープ、チャーシュー。',
    notes: '[ラーメン・京セラドーム隣のフードコートの京都背脂醤油] 京都・北白川発祥のラーメンチェーン、魁力屋のイオンモール4階フードコートの店で、京セラドームの試合前にも、家族連れにも便利。看板は背脂をたっぷり浮かべた京都醤油ラーメンで、見た目より軽くほんのり甘く、細いストレート麺にチャーシューとねぎ。味玉入りは1,001円。セットなら香ばしいチャーハンとからっとしたkara-ageも。提供は数分。スープがぬるかったという声も。毎日10時〜21時。',
  });
}

// ================================================================ 和dining 清乃 スパワールド店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27137067/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_wa_dining_seino_spaworld', name: '和dining 清乃 スパワールド店 (Wa Dining Seino Supawārudo ten)', category: 'OMNI',
    lat: 34.649927, lng: 135.505611, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare; gyoza and kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth; chashu.',
    hours_raw: 'Daily 11:00–23:00 (last order 22:30) (Tabelog). Inside Spa World: entry to the facility is needed, and the bill is settled by QR or barcode when you leave (Tabelog; 2025–2026). Opened 1 July 2023 (Tabelog). Cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ebisu-higashi 3-4-24, inside Spa World (3F food zone) — near Dobutsuen-mae Stn',
    cuisine: 'Wakayama ramen inside a spa · Seino Wakayama ramen: rich pork-bone shoyu, slightly thick, thin straight noodles, rare chashu · Hokkaido-style shio ramen with green onion and Chinese cabbage; butter topping · chilled ume and shiso ramen in summer · oyster black ramen in winter · gyoza; kara-age; beer',
    website: null, gmaps: gm('和dining 清乃 スパワールド店'), menu_url: null,
    notes: "[Ramen · Wakayama ramen inside Spa World, Shinsekai] The Spa World branch of Seino, a well-known Wakayama ramen shop, in the third-floor food zone of the Shinsekai bathhouse, so you need to be inside the spa to eat here, and you settle up by barcode as you leave. The classic Seino Wakayama ramen is a rich pork-bone shoyu with a strong soy edge, thin straight noodles and rare chashu; there's also a light Hokkaido-style shio, a summer chilled ume-and-shiso ramen and a winter oyster black ramen. One diner paired it with a beer after the bath; another finds the Wakayama original better. Open 11:00–23:00.",
    chef_bio: { chef_name: null, roles: [], origin: 'Spa World branch of Seino, a Wakayama ramen shop (2026 reviews); opened 1 July 2023 (Tabelog).', background: 'Ramen shop inside a spa (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Wakayama shoyu ramen.',
      anecdotes: [
        { text: '"The classic option features a rich soy sauce broth based on pork bone, with a slightly thick texture and a strong soy sauce flavor… The noodles are thin and straight." — April 2026.', source: R + 'B533961052/' },
        { text: '"The gentle broth was light and refreshing, infused with the aromas of plum and shiso." — June 2026, chilled ramen.', source: R + 'B530735675/' },
      ],
      japanese_sources_summary: '食べログ: 和dining 清乃 スパワールド店、大阪市浪速区恵美須東3-4-24、動物園前駅から189m、毎日11:00〜23:00 (L.O. 22:30)、スパワールドの中、支払いは退館時に精算、2023年7月1日開店、カード・電子マネー・QR可、子ども連れ歓迎。口コミ(2025年8月〜2026年8月): 和歌山の有名ラーメン店清乃の店、3階のフードゾーン、清乃和歌山ラーメン (豚骨醤油、やや濃度があり醤油が強い、細いストレート麺、レアチャーシュー)、北海道風の塩ラーメン (ねぎと白菜)、バターのトッピング、夏の冷やしの梅と大葉のラーメン、冬の牡蠣の黒ラーメン、gyoza、kara-age、ビール、風呂上がりの一杯に、本店のほうがおいしいという声。',
      confidence: 'medium', sources: [TB, R + 'B512948267/', R + 'B520116500/', R + 'B521426285/', R + 'B530735675/', R + 'B533961052/', R + 'B536447509/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles for the shoyu; medium-thick for the shio (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Seino Wakayama ramen (2026).',
      chashu: 'Rare chashu (April 2026); thin lean chashu on the shio (January 2026).',
      notable_toppings: ['rare chashu', 'green onion', 'butter'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Shinsekai\'s post-bath bowl of Wakayama shoyu, inside Spa World.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 4, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B533961052/', '"a rich soy sauce broth based on pork bone, with a slightly thick texture" — mid-high.'],
        oiliness: [R + 'B521426285/', '"The balance of the broth\'s richness and the texture of the noodles was superb" — mid-scale.'],
        clarity: [R + 'B533961052/', '"a slightly thick texture" — placed low.'],
        tare_strength: [R + 'B533961052/', '"a strong soy sauce flavor" — placed high.'],
        noodle_firmness: [R + 'B520116500/', '"The medium-thick noodles paired well with the broth, providing a satisfying texture" (shio) — mid-scale.'],
        aroma_punch: [R + 'B536447509/', '"The broth was light and had a nice ume flavor" (chilled) — low.'],
      },
      confidence: 'medium', sources: [R + 'B533961052/', R + 'B521426285/', R + 'B520116500/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Inside Spa World; pay on leaving the facility (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区恵美須東3-4-24 スパワールド',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市浪速区恵美須東三丁目4番24号 (go) 69m — Tabelog point kept (large Spa World building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533961052/', R + 'B530735675/'],
    price_note: 'No prices in the reviews; JPY 1,000–1,999 per person (Tabelog, reviews). Spa World admission is separate.', last_checked: TODAY, items: [
      it('', '', 'Seino Wakayama ramen', '', 'Ramen', 'no', 'no', 'January–April 2026.', 'wakayama'),
      it('', '', 'Shio ramen (with butter option)', '', 'Ramen', 'no', 'no', 'August 2025–January 2026.', 'shio'),
      it('', '', 'Chilled ume and shiso ramen (summer)', '', 'Ramen', 'no', 'no', 'June–August 2026.', 'hiyashi'),
    ] }, {
    cuisine: '温浴施設の中の和歌山ラーメン・清乃和歌山ラーメン: 濃い豚骨醤油でやや濃度あり、細いストレート麺、レアチャーシュー・ねぎと白菜の北海道風の塩ラーメン、バターのトッピング・夏は梅と大葉の冷やしラーメン・冬は牡蠣の黒ラーメン・gyoza、kara-age、ビール',
    neighborhood: '浪速区恵美須東3-4-24、スパワールドの中 (3階のフードゾーン)。動物園前駅の近く',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、gyozaとkara-age。',
    vegan_detail: 'ヴィーガンではありません。豚骨のスープ、チャーシュー。',
    notes: '[ラーメン・新世界、スパワールドの中の和歌山ラーメン] 和歌山で知られるラーメン店清乃の、スパワールド3階フードゾーンの店。食べるには館内に入る必要があり、支払いは退館時にバーコードで。定番の清乃和歌山ラーメンは醤油の効いた濃い豚骨醤油に細いストレート麺とレアチャーシュー。軽い北海道風の塩、夏の梅と大葉の冷やし、冬の牡蠣の黒ラーメンも。風呂上がりにビールと合わせたという声、和歌山の本店のほうがいいという声も。11時〜23時。',
  });
}

// ================================================================ ラー麺マン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27018032/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ramen_man_hiranomachi', name: 'ラー麺マン (Ramen Man)', category: 'OMNI',
    lat: 34.687673, lng: 135.509123, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth; chashu.',
    hours_raw: 'No hours on Tabelog; a March 2026 review confirms it open. Cash only (Tabelog). Smoking allowed (Tabelog). Run by one person (December 2024).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Hiranomachi 1-4-6 — 465 m from Kitahama Stn',
    cuisine: 'Spicy chashu ramen · Ramen Man (house ramen): pork-bone shoyu with sliced and coarse-ground chili and optional chopped garlic, bean sprouts and green onion · chashu ramen with many small pork-belly slices; spice level 2 or 3 · Ramen Man set ¥1,000 with rice and kimchi · lunch shoyu ramen set ¥800 · miso chashu ramen; Korean ramen; gyoza · medium-thin curly noodles · 15 seats',
    website: null, gmaps: gm('ラー麺マン'), menu_url: null,
    notes: "[Ramen · a one-person spicy chashu ramen counter, Kitahama] An old-fashioned ramen counter near Kitahama, run single-handed. The house Ramen Man is a pork-bone shoyu heaped with sliced and coarse-ground chili, bean sprouts and green onion, with chopped garlic if you want it; the chili isn't powdered into the soup, so the heat doesn't swamp the broth. The chashu ramen packs eight or nine small, tender pork-belly slices, and order it at spice level 2 or 3. Sets with rice and kimchi run ¥800–1,000. Smoking is allowed, which surprised one diner. Hours aren't listed. Cash only.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Ramen counter run by one person (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Spicy chashu ramen.',
      anecdotes: [
        { text: '"…it\'s not the type where the powdered chili dissolves into the soup like in hot pot. Instead, … sliced and coarsely ground chili [is used], making the broth not overwhelming in heat, allowing me to savor its umami." — May 2024, chashu ramen, spice level 3.', source: R + 'B484430106/' },
        { text: '"The Ramen Man is supposed to be a spicier ramen, and you can choose whether to include garlic." — December 2024, Ramen Man Set Meal ¥1,000.', source: R + 'B498080497/' },
      ],
      japanese_sources_summary: '食べログ: ラー麺マン、大阪市中央区平野町1-4-6、北浜駅から465m、営業時間の記載なし、カード・電子マネー・QR不可、喫煙可、15席 (テーブル3、カウンター4〜5)。口コミ(2024年5月〜2026年3月): 昔ながらの中華の店の雰囲気、ひとりで営む、ラー麺マン (豚骨醤油に輪切りと粗挽きの唐辛子、刻みにんにくは選べる、もやし、ねぎ)、チャーシュー麺 (小さな豚バラのチャーシューが8〜9枚、2辛・3辛)、ご飯とキムチのラー麺マン定食1,000円、昼の醤油ラーメン定食800円、味噌チャーシュー、韓国ラーメン、gyoza、中細の縮れ麺、店内で喫煙できることに驚く声。',
      confidence: 'medium', sources: [TB, R + 'B484430106/', R + 'B484752321/', R + 'B489671173/', R + 'B497163376/', R + 'B498080497/', R + 'B525294350/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'unknown', tare: ['shoyu', 'miso'], aroma_oil: ['chili oil'], richness: 'medium',
      noodles: { thickness: 'medium-thin', shape: 'wavy', hydration: 'high', handmade: false, notes: 'Medium-thin curly noodles, slightly firm, high water (2024).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Chashu ramen at spice level 3 (2024).',
      chashu: 'Eight or nine small, tender pork-belly slices on the chashu ramen (May 2024).',
      notable_toppings: ['sliced chili', 'chopped garlic', 'bean sprouts', 'green onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Kitahama\'s one-person spicy chashu ramen with chili and chopped garlic.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B489671173/', '"The light broth has a perfect balance! It has a decent amount of oil and chili oil, providing a solid body" — mid-scale.'],
        oiliness: [R + 'B489671173/', '"a decent amount of oil and chili oil" — mid-scale.'],
        clarity: [R + 'B484430106/', 'A chili-heaped pork-bone shoyu — placed low.'],
        tare_strength: [R + 'B498080497/', '"the broth paired very well with the white rice" — mid-scale.'],
        noodle_firmness: [R + 'B489671173/', '"The slightly firm, medium-thick curly noodles have a high water content" — mid-scale.'],
        aroma_punch: [R + 'B484430106/', '"The sight of the bowl filled with sliced and coarse ground chili peppers"; chopped garlic — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B484430106/', R + 'B489671173/', R + 'B498080497/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Old-style counter; garlic and spice asked (2024).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区平野町1-4-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; most recent review March 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM ラー麺マン node/10216456918 2m; GSI 大阪府大阪市中央区平野町一丁目4番6号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B498080497/', R + 'B489671173/'],
    price_note: 'Prices from 2024 reviews; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Ramen Man set meal (rice, kimchi)', '¥1,000', 'Sets', 'no', 'no', 'December 2024.', 'set'),
      it('', '', 'Shoyu ramen set meal (lunch)', '¥800', 'Sets', 'no', 'no', 'July 2024.', 'shoyu_set'),
      it('', '', 'Chashu ramen, spice level 2–3', '', 'Ramen', 'no', 'no', 'May–September 2024.', 'chashu'),
      it('', '', 'Miso chashu ramen', '', 'Ramen', 'no', 'no', 'March 2026.', 'miso'),
    ] }, {
    cuisine: '辛いチャーシュー麺・ラー麺マン: 豚骨醤油に輪切りと粗挽きの唐辛子、選べる刻みにんにく、もやし、ねぎ・小さな豚バラのチャーシューがたくさんのチャーシュー麺、辛さは2か3・ご飯とキムチのラー麺マン定食1,000円・昼の醤油ラーメン定食800円・味噌チャーシュー、韓国ラーメン、gyoza・中細の縮れ麺・15席',
    neighborhood: '中央区平野町1-4-6。北浜駅から465m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、gyoza。',
    vegan_detail: 'ヴィーガンではありません。豚骨のスープ、チャーシュー。',
    notes: '[ラーメン・北浜、ひとりで営む辛いチャーシュー麺のカウンター] 北浜近くの昔ながらのラーメンカウンターで、ひとりで切り盛りする。看板のラー麺マンは豚骨醤油に輪切りと粗挽きの唐辛子、もやし、ねぎを山盛りに、希望で刻みにんにく。唐辛子は粉ではないので、辛さがスープを消さない。チャーシュー麺には小さくやわらかい豚バラが8〜9枚、辛さは2か3で。ご飯とキムチのセットは800〜1,000円。店内で喫煙でき、驚いたという声も。営業時間の記載なし。現金のみ。',
  });
}

save();
