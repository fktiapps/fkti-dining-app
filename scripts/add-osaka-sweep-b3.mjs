// Osaka sweep (2-mile circle around Dotonbori), batch 3 — ramen phase, nearest first (all OMNI).
//   + ラー麺 ずんどう屋 難波えびす橋店 (Himeji back-fat tonkotsu chain; 24 h)
//   + ラー麺 ずんどう屋 宗右衛門町店 (same chain, Sōemonchō; nearly 24 h)
//   + KAMUKURA 御堂筋店 (Kamukura's Midōsuji shop, opened 2025)
//   + 四天王 道頓堀店 (chicken-paitan shoyu and miso; open 24 h per reviews)
// Skipped: ラオチーラーメン (27126730; reviews 2021–2022 only).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, skip, save } = openCitySweep('osaka', TODAY, 3);

skip('27126730', 'Three reviews, November 2021–November 2022; nothing since.');

const ZUNDO_SITE = 'http://www.zundouya.com/';

// ================================================================ ずんどう屋 難波えびす橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27126528/'; const R = TB + 'dtlrvwlst/';
  const d = day(['00:00', '23:59']);
  put({
    id: 'osaka_zundoya_namba_ebisubashi', name: 'ラー麺 ずんどう屋 難波えびす橋店 (Ramen Zundoya Namba Ebisubashi)', category: 'OMNI',
    lat: 34.667961, lng: 135.501768, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles in a pork-bone broth; fried rice and gyoza on the side.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth with back fat, chashu.',
    hours_raw: 'Open 24 hours, every day (Tabelog; may change).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-6-8, Namba Monzō Bldg 1F, south of Ebisubashi — 3 min from Namba Stn',
    cuisine: 'Himeji back-fat tonkotsu chain · ajitama ramen (large ¥1,070) · choose back fat, noodle type (thin or curly) and firmness · HOT version with bean sprouts · fried rice and spicy takana · 24 h',
    website: ZUNDO_SITE, gmaps: gm('ずんどう屋 難波えびす橋店'), menu_url: null,
    notes: "[Ramen · Zundōya by Ebisubashi, all night] A bright, busy 24-hour branch, since 2021, of Himeji's back-fat tonkotsu chain Zundōya, a few steps south of Ebisubashi. The chain's site says its broth simmers pork heads, backbones and whole bones over high heat for about ten hours. Diners describe it as rich and creamy yet not overly heavy, deepened by back fat. You choose thin or curly house-made noodles, the back fat (light to extra) and firmness (soft to very firm). An ajitama large was ¥1,070 in 2026, with wood-ear mushroom extra. Regulars add the spicy HOT version with bean sprouts, half fried rice and spicy takana, or a summer chilled ramen. Popular with a younger crowd after drinks.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 November 2021 (Tabelog)', background: 'Chain founded in Himeji (zundouya.com).', philosophy: null, specialty: 'Back-fat tonkotsu.',
      anecdotes: [
        { text: '"Noodle Type: Thin Noodles or Curly Noodles; Back Fat: Light / Regular / Rich / Extra; Noodle Firmness: Soft / Regular / Firm / Very Firm… Ajitama Ramen (Large) (JPY 1,070) + Kikurage W (JPY 220)." — September 2026, quoting the chain\'s site on a 10-hour pork-bone simmer.', source: R + 'B535956944/' },
        { text: '"This rich yet not overly heavy tonkotsu broth is truly addictive. I also appreciated being able to customize the amount of back fat and the firmness of the noodles." — July 2026.', source: R + 'B532104312/' },
      ],
      japanese_sources_summary: '食べログ: ラー麺 ずんどう屋 難波えびす橋店、大阪市中央区難波1-6-8 難波門三ビル1F、なんば駅から163m、24時間営業、予約不可、2021年11月18日開店、公式サイト zundouya.com。2026年の口コミ: カウンターとテーブル、冷やしらーめんと半チャーハン、チャーハンと辛高菜、濃厚だがくどくない豚骨、背脂と麺の硬さを選べる、細麺、HOTともやし、替え玉、夜10時でも若い客で賑わう、姫路発の濃厚豚骨、自家製麺、背脂でクリーミーなのにまろやか、縮れ麺、深夜も気軽に、味玉らーめん大1,070円・きくらげW220円、細麺か縮れ麺、背脂(あっさり・ふつう・こってり・こってり増し)、麺の硬さ(やわらかめ〜ばりかた)、公式サイトによれば豚骨を約10時間強火で炊く。',
      confidence: 'medium', sources: [TB, ZUNDO_SITE, R + 'B535956944/', R + 'B532104312/', R + 'B533448220/', R + 'B534547140/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['lard_seabura'], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: true, notes: 'House-made; thin straight or curly, firmness from soft to very firm (2026).' },
      regional_style: ['Himeji tonkotsu'], sub_genre: ['ramen'],
      signature_bowl: '味玉らーめん (ajitama ramen) — large ¥1,070 (September 2026).',
      chashu: 'Pork chashu.',
      notable_toppings: ['back fat (choose the level)', 'seasoned egg', 'kikurage', 'bean sprouts (HOT)', 'spicy takana'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth and back fat.' },
      pantheon: 'Ten-hour pork-bone broth softened with back fat you set yourself, thin or curly house noodles to any firmness, and spicy takana on the side, all night by Ebisubashi.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B532104312/', '"This rich yet not overly heavy tonkotsu broth"; "a thick, carefully simmered tonkotsu broth" (' + R + 'B534547140/).'],
        oiliness: [R + 'B535956944/', '"The broth is enriched with plenty of back fat, providing depth and sweetness."'],
        clarity: [R + 'B534547140/', '"The creamy broth, enriched with back fat" — an opaque paitan.'],
        tare_strength: [R + 'B533448220/', '"Although the taste was bold, it wasn\'t overwhelming—just right!"'],
        noodle_firmness: [R + 'B535956944/', 'Firmness is chosen from soft to very firm; "in-house made noodles with a very firm texture" when ordered so.'],
        aroma_punch: [R + 'B535956944/', '"A pleasant \'pork bone flavor\' and \'umami\'"; spicy takana and HOT options add heat (' + R + 'B443240716/).'],
      },
      confidence: 'medium', sources: [R + 'B532104312/', R + 'B534547140/', R + 'B535956944/', R + 'B533448220/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Customise on the ordering screen.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-6-8 難波門三ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目6番8号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535956944/'],
    price_note: 'Price from a September 2026 review.', last_checked: TODAY, items: [
      it('味玉らーめん(大)', '', 'Ajitama ramen, large', '¥1,070', 'Ramen', 'no', 'no', 'September 2026.', 'ajitama_large'),
      it('きくらげW', '', 'Double kikurage topping', '¥220', 'Toppings', 'ask', 'ask', 'September 2026.', 'kikurage'),
      it('半チャーハン', '', 'Half fried rice', '', 'Sides', 'no', 'no', '', 'half_fried_rice'),
    ] }, {
    cuisine: '姫路の背脂豚骨のチェーン・味玉らーめん(大1,070円)・背脂、麺(細麺か縮れ麺)、硬さを選べる・もやしのHOT・チャーハンと辛高菜・24時間',
    neighborhood: '難波1-6-8 難波門三ビル1F、戎橋の南。なんば駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。豚骨スープに自家製の小麦の麺。チャーハンや餃子も。',
    vegan_detail: 'ヴィーガンではありません。背脂入りの豚骨スープ、チャーシュー。',
    notes: '[ラーメン・戎橋そばの24時間のずんどう屋] 姫路の背脂豚骨チェーン「ずんどう屋」の、2021年からある明るくにぎやかな24時間営業の店で、戎橋のすぐ南。公式サイトによれば豚の頭、背骨、ゲンコツを強火で約10時間炊くスープ。客の感想は濃厚でクリーミーなのにくどくなく、背脂が深みを加えます。自家製麺は細麺か縮れ麺、背脂(あっさり〜こってり増し)と硬さ(やわらかめ〜ばりかた)を選べます。味玉らーめん大は2026年に1,070円、きくらげは追加で。常連はもやし入りの辛いHOTや半チャーハン、辛高菜、夏の冷やしらーめんも。飲んだ後の若い客に人気です。',
  });
}

// ================================================================ ずんどう屋 宗右衛門町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27132759/'; const R = TB + 'dtlrvwlst/';
  const full = day(['00:00', '23:59']);
  put({
    id: 'osaka_zundoya_soemoncho', name: 'ラー麺 ずんどう屋 宗右衛門町店 (Ramen Zundoya Soemoncho)', category: 'OMNI',
    lat: 34.66931, lng: 135.50294, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a pork-bone broth; gyoza and fried rice on the side.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth with back fat, chashu.',
    hours_raw: 'Mon 0:00–7:00 and 9:00–24:00; Tue–Sun open 24 hours (Tabelog; may change).',
    hours: { 0: day(['00:00', '07:00'], ['09:00', '23:59']), 1: full, 2: full, 3: full, 4: full, 5: full, 6: full }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sōemonchō 7-16, in the late-night district north of the canal — 5 min from Namba Stn',
    cuisine: 'Himeji back-fat tonkotsu chain in Sōemonchō · negi ramen with curly noodles ¥980 · free takana, garlic, pickled ginger and sesame · free extra noodles at times · gyoza, fried rice · near 24 h',
    website: ZUNDO_SITE, gmaps: gm('ずんどう屋 宗右衛門町店'), menu_url: null,
    notes: "[Ramen · Zundōya in Sōemonchō, the morning-after bowl] A Zundōya branch, since 2022, in Sōemonchō, Minami's all-night entertainment district, open round the clock except a Monday-morning pause. Regulars come for the rich back-fat tonkotsu and the table full of free extras: all-you-can-eat takana, grated garlic, pickled ginger and sesame. One morning visitor found free extra noodles. A negi ramen with curly noodles was ¥980 (bean sprouts +¥110), and a chilled ajitama with grated daikon was ¥1,200 for a large. There are juicy gyoza and fried rice too, plus spicy noodles. Friendly, attentive staff, many from overseas, even at a busy 6 am.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 November 2022 (Tabelog)', background: 'Chain founded in Himeji (zundouya.com).', philosophy: null, specialty: 'Back-fat tonkotsu.',
      anecdotes: [
        { text: '"The takana (pickled mustard greens) is all-you-can-eat, and I really appreciate that garlic is available on the table!… It\'s great that they are open until late at night." — July 2026, a repeat visit.', source: R + 'B526709324/' },
        { text: '"Enjoy a morning ramen in the sleepless district of Souemoncho! Hearty Himeji Tonkotsu with a free extra noodle service." — June 2026, Saturday 6 am.', source: R + 'B529869457/' },
      ],
      japanese_sources_summary: '食べログ: ラー麺 ずんどう屋 宗右衛門町店、大阪市中央区宗右衛門町7-16、なんば駅から342m、月0:00〜7:00・9:00〜24:00、火〜日24時間、予約可、2022年11月22日開店、公式サイト zundouya.com。2025〜2026年の口コミ: 冷房の故障、ねぎらーめん縮れ麺980円ともやし110円、冷やし味玉おろし大1,200円、味玉と小チャーハンのセット、周年祭で元味が半額、細麺あっさりかため、替え玉、無料の高菜、卓上の紅生姜やごま、忙しくても丁寧、深夜に便利、餃子、高菜食べ放題、卓上のにんにく、背脂のスープ、チャーハン、外国人スタッフ、おろしにんにくと紅生姜、ぷりぷりの水餃子、朝6時の宗右衛門町で朝ラー、替え玉無料サービス、辛麺。',
      confidence: 'medium', sources: [TB, ZUNDO_SITE, R + 'B526709324/', R + 'B529869457/', R + 'B510334656/', R + 'B525565614/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['lard_seabura'], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: true, notes: 'Thin straight or curly house-made noodles; firmness can be chosen (2025–26).' },
      regional_style: ['Himeji tonkotsu'], sub_genre: ['ramen'],
      signature_bowl: 'ねぎらーめん (negi ramen) — ¥980 with curly noodles (July 2026).',
      chashu: 'Pork chashu ("delicious as always").',
      notable_toppings: ['back fat', 'free takana', 'free garlic', 'pickled ginger', 'sesame', 'bean sprouts'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth and back fat.' },
      pantheon: 'Sōemonchō\'s 6 a.m. bowl: rich back-fat pork-bone broth with free takana, garlic and pickled ginger on every table, for the district that never sleeps.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B529869457/', '"Hearty Himeji Tonkotsu."'],
        oiliness: [R + 'B526709324/', '"I sometimes crave the rich back fat broth."'],
        clarity: [R + 'B526709324/', 'A back-fat pork-bone broth; opaque, like the chain\'s other shops.'],
        tare_strength: [R + 'B525565614/', '"I chose thin noodles with a light broth and firm texture… it was delicious" — strength is set at ordering.'],
        noodle_firmness: [R + 'B525565614/', '"Thin noodles with a light broth and firm texture."'],
        aroma_punch: [R + 'B529676198/', '"I enjoyed the classic way of eating, adding grated garlic and pickled ginger."'],
      },
      confidence: 'medium', sources: [R + 'B529869457/', R + 'B526709324/', R + 'B525565614/', R + 'B529676198/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Many international staff.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町7-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町7番16号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510334656/'],
    price_note: 'Prices from a July 2026 review.', last_checked: TODAY, items: [
      it('ねぎらーめん', '', 'Negi ramen (curly noodles)', '¥980', 'Ramen', 'no', 'no', 'July 2026.', 'negi'),
      it('冷やし味玉おろし(大)', '', 'Chilled ajitama ramen with grated daikon, large', '¥1,200', 'Seasonal', 'no', 'no', 'July 2026.', 'hiyashi_ajitama'),
      it('もやし', '', 'Bean-sprout topping', '¥110', 'Toppings', 'ask', 'ask', 'July 2026.', 'moyashi'),
      it('水餃子', 'sui-gyōza', 'Boiled gyoza', '', 'Sides', 'no', 'no', '2026.', 'suigyoza'),
    ] }, {
    cuisine: '宗右衛門町の姫路背脂豚骨チェーン・ねぎらーめん縮れ麺980円・高菜、にんにく、紅生姜、ごまは無料・替え玉無料のことも・餃子、チャーハン・ほぼ24時間',
    neighborhood: '宗右衛門町7-16、川の北の夜の街。なんば駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。豚骨スープに小麦の麺。餃子やチャーハンも。',
    vegan_detail: 'ヴィーガンではありません。背脂入りの豚骨スープ、チャーシュー。',
    notes: '[ラーメン・宗右衛門町の朝のずんどう屋] ミナミの眠らない歓楽街・宗右衛門町に2022年からあるずんどう屋で、月曜朝の休憩を除き24時間営業。常連のお目当ては濃厚な背脂豚骨と、無料の高菜食べ放題、おろしにんにく、紅生姜、ごまが並ぶ卓上。朝の客は替え玉無料のサービスに当たったことも。縮れ麺のねぎらーめんは980円(もやし+110円)、冷やし味玉おろしの大は1,200円。ぷりぷりの水餃子やチャーハン、辛麺も。外国人スタッフも多く、混む朝6時でも親切で気が利きます。',
  });
}

// ================================================================ KAMUKURA 御堂筋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27146964/'; const R = TB + 'dtlrvwlst/';
  const early = day(['10:00', '23:00']); const late = day(['10:00', '07:00']);
  put({
    id: 'osaka_kamukura_midosuji', name: 'KAMUKURA 御堂筋店 (Kamukura Midosuji)', category: 'OMNI',
    lat: 34.668069, lng: 135.500609, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; sets add fried rice, gyoza and kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork belly and chashu; a pork-and-vegetable broth.',
    hours_raw: 'Mon–Thu and Sun 10:00–23:00; Fri, Sat and holiday eves 10:00–07:00 next morning (Tabelog; may change).',
    hours: { 0: early, 1: early, 2: early, 3: early, 4: late, 5: late, 6: early }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-7-14, on Midōsuji next to Kinryū — 2 min from Namba Stn',
    cuisine: 'Kamukura’s Midōsuji shop (2025) · "delicious ramen" ¥820 with napa cabbage and thick chashu · half fried rice and gyoza set ¥1,370 · seasonal spicy-sour noodles · free garlic chives and chili · open to 7 am at weekends',
    website: 'https://kamukura.co.jp/', gmaps: gm('KAMUKURA 御堂筋店'), menu_url: null,
    notes: "[Ramen · Kamukura on Midōsuji] A newer Kamukura (opened January 2025) on Midōsuji beside Kinryū, open until 7 am on Friday and Saturday nights. Its heavy entrance door may be why it's often the one shop without a queue. The \"delicious ramen\" (¥820 in October 2026) is the chain's light pork-and-vegetable broth, not tonkotsu, sweet from crunchy napa cabbage, with pork belly, thick bouncy chashu and chewy medium-thin straight noodles. Sets add half fried rice and gyoza (¥1,370) or kara-age, and there are seasonal spicy-sour noodles (with a black-vinegar version) and a chilled ramen. Help yourself to garlic chives and chili.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 January 2025 (Tabelog)', background: 'Kamukura chain (kamukura.co.jp).', philosophy: null, specialty: 'Napa-cabbage ramen.',
      anecdotes: [
        { text: '"The broth had a sweet flavor from the napa cabbage, which added a light yet rich taste… the medium-thin straight noodles had a great chewiness. The thick chashu was tender and had a good bounce to it." — October 2026.', source: R + 'B537974563/' },
        { text: '"Delicious Ramen: JPY 820 – Half Fried Rice and Gyoza Set: JPY 1,370. You can help yourself to the garlic chives and chili peppers!" — October 2026, ramen stop #130.', source: R + 'B537585484/' },
      ],
      japanese_sources_summary: '食べログ: KAMUKURA 御堂筋店、大阪市中央区難波1-7-14、なんば駅から108m、月〜木・日10:00〜23:00、金土祝前日10:00〜翌7:00、予約可、カウンター、2025年1月21日開店、公式サイト kamukura.co.jp。2026年の口コミ(9〜10月): 酸辣湯麺とチャーハンと唐揚げのセット、週末の行列の中でここだけすぐ入れた(入口の扉が重い)、限定の酸辣湯麺と大きな唐辛子、白菜・豚バラ・チャーシュー、豚と野菜のスープで豚骨ではない、冷やしKAMUKURA、おいしいラーメン820円、半チャーハン餃子セット1,370円、ニラと唐辛子はセルフ、黒酢の酸辣湯麺は売り切れ、白菜の甘み、中細ストレート麺、厚いチャーシュー。',
      confidence: 'medium', sources: [TB, R + 'B537974563/', R + 'B537585484/', R + 'B536879802/', R + 'B536751141/', R + 'B536930362/'] },
    ramen: {
      broth_base: ['pork', 'vegetable'], broth_texture: 'chintan', tare: ['other'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium-thin', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thin straight noodles "with great chewiness" (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'おいしいラーメン (delicious ramen) — ¥820 (October 2026).',
      chashu: 'Thick, tender, bouncy chashu, plus pork belly.',
      notable_toppings: ['napa cabbage', 'pork belly', 'free garlic chives', 'free chili'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-and-vegetable broth.' },
      pantheon: 'The Midōsuji Kamukura: the chain\'s light pork-and-vegetable broth sweet with crunchy napa cabbage, thick bouncy chashu and chewy straight noodles, with garlic chives and chili to add.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B537974563/', '"The broth had a sweet flavor from the napa cabbage, which added a light yet rich taste."'],
        oiliness: [R + 'B537585484/', '"Guilt-free dining"; no source mentions an oil layer.'],
        clarity: [R + 'B536879802/', '"It’s not a tonkotsu broth… based on pork and vegetables" — not described as clear; placed mid-scale.'],
        tare_strength: [R + 'B536879802/', '"So flavorful that I almost wanted to drink it all up."'],
        noodle_firmness: [R + 'B537974563/', '"The medium-thin straight noodles had a great chewiness."'],
        aroma_punch: [R + 'B537585484/', 'Light broth; "you can help yourself to the garlic chives and chili peppers".'],
      },
      confidence: 'medium', sources: [R + 'B537974563/', R + 'B537585484/', R + 'B536879802/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Heavy entrance door; counter seats.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-7-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目7番14号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537585484/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('おいしいラーメン', '', '"Delicious ramen"', '¥820', 'Ramen', 'no', 'no', 'October 2026.', 'oishii_ramen'),
      it('半チャーハン餃子セット', '', 'Half fried rice and gyoza set', '¥1,370', 'Sets', 'no', 'no', 'October 2026.', 'set'),
      it('酸辣湯麺', 'sanrātanmen', 'Seasonal spicy-sour noodles', '', 'Seasonal', 'no', 'no', 'September–October 2026.', 'sanratan'),
    ] }, {
    cuisine: '御堂筋の神座(2025年開店)・白菜と厚いチャーシューのおいしいラーメン820円・半チャーハン餃子セット1,370円・季節の酸辣湯麺・ニラと唐辛子は無料・週末は朝7時まで',
    neighborhood: '難波1-7-14、御堂筋沿いの金龍の隣。なんば駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺。セットにはチャーハン、餃子、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。豚バラとチャーシュー、豚と野菜のスープ。',
    notes: '[ラーメン・御堂筋の神座] 2025年1月に開店した新しい神座で、御堂筋沿いの金龍の隣。金・土の夜は朝7時まで。重い入口の扉のせいか、行列のない数少ない店になっていることも。「おいしいラーメン」(2026年10月は820円)は、豚骨ではない神座らしいあっさりした豚と野菜のスープで、シャキシャキの白菜の甘みに、豚バラ、厚く弾力のあるチャーシュー、コシのある中細ストレート麺。セットは半チャーハンと餃子(1,370円)や唐揚げ、季節の酸辣湯麺(黒酢版も)や冷やしラーメンも。ニラと唐辛子はセルフで。',
  });
}

// ================================================================ 四天王 道頓堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27121494/'; const R = TB + 'dtlrvwlst/';
  const d = day(['00:00', '23:59']);
  put({
    id: 'osaka_shitenno_dotonbori', name: '四天王 道頓堀店 (Shitenno Dotonbori)', category: 'OMNI',
    lat: 34.668634, lng: 135.503056, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in shoyu and miso broths; kara-age and fried rice sets.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-paitan base, chashu, kara-age.',
    hours_raw: 'Tabelog says to check the shop\'s website for hours; 2026 reviewers describe it as open 24 hours. Open year-round. Ticket machine.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-7-1, on the Sennichimae "ramen road" by Kinryū — 4 min from Namba Stn exit 14',
    cuisine: 'Chicken-paitan ramen on Dotonbori’s ramen strip · miso ramen with garlic chives and chili · shoyu ramen · ramen-and-fried-rice set ¥1,200 · kara-age sets · two floors, open 24 h (per reviews)',
    website: null, gmaps: gm('四天王 道頓堀店'), menu_url: null,
    notes: "[Ramen · Shitennō on Dotonbori's ramen strip] A 32-seat, two-floor ramen shop, since 2021, on the Sennichimae stretch of Dotonbori lined with Kinkuemon, Ichiran, Kamukura and Kinryū. The broth has a rich chicken-paitan base that diners find surprisingly refreshing. The favourite is miso ramen, bold and salty, with onion, garlic chives and chili, thin straight noodles, chashu and bean sprouts. Shoyu ramen and kara-age sets are on offer too. At ¥1,200 for ramen with fried rice it's cheaper than most of its neighbours. Buy a ticket at the machine. Mostly overseas customers, plus some Japanese regulars; reviewers say it's open 24 hours.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 5 March 2021 (Tabelog)', background: 'No source names the operator.', philosophy: null, specialty: 'Chicken-paitan miso ramen.',
      anecdotes: [
        { text: '"The soup has a rich chicken paitan base, surprisingly refreshing in flavor… The crunchiness of the green onions and bean sprouts adds a nice balance to the dish." — April 2026.', source: R + 'B526063736/' },
        { text: '"While most places charge over JPY 1000, the ramen and fried rice set here is a great deal at JPY 1200." — September 2026.', source: R + 'B536068086/' },
      ],
      japanese_sources_summary: '食べログ: 四天王 道頓堀店、大阪市中央区道頓堀1-7-1、日本橋駅から330m、32席、営業時間は公式サイトで確認、年中無休、子ども可、2021年3月5日開店。2026年の口コミ: 醤油ラーメンと味玉、味噌ラーメンと半チャーハン、外国人客が多い、道頓堀のど真ん中で24時間営業、金龍の近く、味噌ラーメンと唐揚げのセット、ピリ辛でにんにくを入れると病みつき、山口風かと思えば醤油・味噌などメニューが多い、2階も広い、チャーシュー、濃厚な鶏白湯ベースで意外とさっぱり、ねぎともやし、味噌は塩気が強く深夜に合う、券売機、細いストレート麺、玉ねぎ・ニラ・唐辛子、おろしにんにくとごま、ラーメンとチャーハンのセット1,200円は手頃。',
      confidence: 'medium', sources: [TB, R + 'B526063736/', R + 'B536068086/', R + 'B533372365/', R + 'B528322681/', R + 'B522738154/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['miso', 'shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles (2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan'],
      signature_bowl: '味噌ラーメン (miso ramen) — set with fried rice ¥1,200 (September 2026).',
      chashu: 'Tender chashu.',
      notable_toppings: ['bean sprouts', 'green onion', 'garlic chives', 'chili', 'grated garlic', 'sesame'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken-paitan base.' },
      pantheon: 'A cheaper seat on Dotonbori\'s ramen road: rich-but-refreshing chicken paitan made punchy as miso with garlic chives and chili, fried rice on the side, all night.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 4, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B526063736/', '"The soup has a rich chicken paitan base, surprisingly refreshing in flavor."'],
        oiliness: [R + 'B526063736/', '"Surprisingly refreshing" — no source mentions oil.'],
        clarity: [R + 'B526063736/', 'A chicken paitan (opaque) base.'],
        tare_strength: [R + 'B528322681/', '"The Miso Ramen has a bold flavor with a strong saltiness that is pleasantly unrefined."'],
        noodle_firmness: [R + 'B533372365/', '"The noodles were thin and straight… slid smoothly into the broth."'],
        aroma_punch: [R + 'B533372365/', '"With onions, garlic chives, and chili peppers in the soup… I added grated garlic and sesame."'],
      },
      confidence: 'medium', sources: [R + 'B526063736/', R + 'B528322681/', R + 'B533372365/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒542-0071 大阪府大阪市中央区道頓堀1-7-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated January–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目7番1号 (go) 4m; OSM 四天王 node/2326962162 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536068086/'],
    price_note: 'Set price from a September 2026 review.', last_checked: TODAY, items: [
      it('味噌ラーメン', 'miso rāmen', 'Miso ramen', '', 'Ramen', 'no', 'no', '2026.', 'miso'),
      it('醤油ラーメン', 'shōyu rāmen', 'Shoyu ramen', '', 'Ramen', 'no', 'no', '2026.', 'shoyu'),
      it('ラーメンとチャーハンのセット', '', 'Ramen and fried rice set', '¥1,200', 'Sets', 'no', 'no', 'September 2026.', 'set'),
      it('唐揚げセット', '', 'Ramen with kara-age set', '', 'Sets', 'no', 'no', '2026.', 'karaage_set'),
    ] }, {
    cuisine: '道頓堀のラーメン通りの鶏白湯ラーメン・ニラと唐辛子の味噌ラーメン・醤油ラーメン・ラーメンとチャーハンのセット1,200円・唐揚げのセット・二フロア、24時間(口コミによる)',
    neighborhood: '道頓堀1-7-1、千日前の「ラーメン通り」、金龍のそば。なんば駅14番出口から徒歩4分',
    gf_detail: 'グルテンフリーではありません。醤油や味噌のスープに小麦の麺。唐揚げやチャーハンのセットも。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯ベース、チャーシュー、唐揚げ。',
    notes: '[ラーメン・道頓堀のラーメン通りの四天王] 金久右衛門、一蘭、神座、金龍が並ぶ道頓堀の千日前寄りの通りに2021年からある、二フロア32席のラーメン店。スープは濃厚な鶏白湯ベースで、意外とさっぱりという声。人気は味噌ラーメンで、塩気がしっかりした力強い味に、玉ねぎ、ニラ、唐辛子、細いストレート麺、チャーシュー、もやし。醤油ラーメンや唐揚げのセットも。ラーメンとチャーハンのセットが1,200円と、周りの店より手頃です。券売機で食券を。客は海外からが中心で日本人の常連も。口コミによれば24時間営業。',
  });
}

save();
