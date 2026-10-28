// Osaka sweep (2-mile circle around Dotonbori), batch 99 — ramen phase (all OMNI).
//   + ふく流らーめん 轍 本町本店 (foam-whipped "awadachi" chicken paitan shoyu; Tabelog Ramen 100 2017–23)
//   + 中華そば 昴 (additive-free whole-chicken chuka soba, shio with wasabi; Honmachibashi)
//   + 麺のカミの (¥750 shoyu with mitsuba, ¥500 morning ramen, free extra noodles in bad weather; Ebisucho)
//   + 情熱のぶた (seafood tonkotsu, rich tsukemen, mazesoba with rice; Awaza)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 99);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ふく流らーめん 轍 本町本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27077641/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://sanpomen.jp/company/';
  put({
    id: 'osaka_fukuryu_ramen_wadachi_honmachi', name: 'ふく流らーめん 轍 本町本店 (Fuku Ryu Ramen Wadachi Honmachi)', category: 'OMNI',
    lat: 34.683457, lng: 135.49597, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan and niboshi broths, chashu.',
    hours_raw: 'Daily 11:00–15:15 (L.O. 15:00) and 17:00–21:00 (L.O. 20:45); open year-round (Tabelog, staff-maintained). Ticket machine. Tabelog lists cards, e-money and QR, but one October 2026 diner noted cash only, so bring cash.',
    hours: ALL(day(['11:00', '15:15'], ['17:00', '21:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishihonmachi 1-8-2, 1F (Nishi-ku) — 2 min from Honmachi Stn exits 26–27',
    cuisine: 'Tabelog Ramen WEST 100 (2017, 2019–2022) and OSAKA 100 (2023) · Fuku Ryu ramen ¥930: chicken paitan shoyu whipped to a cappuccino-like foam ("awadachi"), thin straight firm noodles, rare chashu, green onion, mizuna, a tangy foam · niboshi shoyu ramen with green onion and chopped onion, thick chashu · Mazenibou SP niboshi mazesoba with vinegar and rice to finish · seasoned egg · kara-age and rice set · 11 counter seats',
    website: OWN, gmaps: gm('ふく流らーめん 轍 本町本店'), menu_url: null,
    notes: "[Ramen · the foam-whipped chicken paitan of Honmachi] The main shop of Wadachi, a minute or two from Honmachi's Yotsubashi-line exits, open since 2014 and a Tabelog ramen 100 regular from 2017 to 2023. Its signature Fuku Ryu ramen (¥930) is a chicken paitan shoyu whipped into a creamy, cappuccino-like foam, topped with rare chashu, green onion, mizuna and a slightly tangy foam that blends in as you go; thin straight noodles stay firm. Portions are modest, so add the kara-age and rice set. One regular prefers the niboshi shoyu with onions and thick chashu, lighter than it looks; others order the Mazenibou niboshi mazesoba, best with vinegar and a few pieces of meat saved for the rice. Fills by noon on weekdays. Open daily; bring cash.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 March 2014 (Tabelog)', background: 'Main shop of Wadachi (company site sanpomen.jp; Tabelog, staff-maintained); Tabelog Ramen WEST 100 2017 and 2019–2022, OSAKA 100 2023.', philosophy: null, specialty: 'Foam-whipped chicken paitan (awadachi) ramen.',
      anecdotes: [
        { text: '"The rich chicken paitan soy sauce broth is whipped to create a creamy texture that makes it irresistible to drink… Topped with tender slices of chashu, green onions, mizuna, and a mysterious slightly tangy foam." — October 2026, Fuku Ryu ramen ¥930.', source: R + 'B138882045/' },
        { text: '"The finely whipped broth resembles a cappuccino, providing a unique twist compared to typical ramen." — October 2026.', source: R + 'B538006469/' },
      ],
      japanese_sources_summary: '会社サイト sanpomen.jp。食べログ(店舗会員): ふく流らーめん 轍 本町本店、大阪市西区西本町1-8-2 三晃ビル旧館 1F、本町駅26・27番出口から徒歩2分、毎日11:00〜15:15(L.O.15:00)・17:00〜21:00(L.O.20:45)、年中無休、カード・電子マネー・QR可(掲載)、カウンター11席、2014年3月18日開店、食べログ ラーメン WEST 百名店2017・2019〜2022、OSAKA 百名店2023。口コミ(2026年3〜10月): ふく流らーめん930円、細いストレートの硬めの麺、泡立てた鶏白湯醤油、チャーシュー・ねぎ・水菜・ほんのり酸味のある泡、量は少なめ、泡立ち系の名店、煮干し醤油に味玉、ねぎと玉ねぎ、厚いチャーシュー、平日11:30は空いていて正午にはほぼ満席、券売機、提供が早い、大きな唐揚げとご飯、まぜにぼSP大盛り、酢がおすすめ、肉を残してご飯に、現金のみという声、カプチーノのような泡、ピンクのレアチャーシュー、煮干しラーメンは見た目より軽い。',
      confidence: 'medium', sources: [TB, OWN, R + 'B138882045/', R + 'B538006469/', R + 'B512712191/', R + 'B536627902/', R + 'B537443371/', R + 'B538046382/'] },
    ramen: {
      broth_base: ['chicken', 'niboshi'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles with a firm texture (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan', 'niboshi', 'mazesoba_aburasoba'],
      signature_bowl: 'Fuku Ryu ramen (foam-whipped chicken paitan shoyu), ¥930 (October 2026).',
      chashu: 'Tender rare chashu; thick chashu in the niboshi (October 2026).',
      notable_toppings: ['tangy foam', 'mizuna', 'green onion', 'chopped onion (niboshi)'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Chicken and niboshi broth.' },
      pantheon: 'Honmachi\'s awadachi original: chicken paitan whipped to a cappuccino foam.',
      profile: { richness: 3, oiliness: 2, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B138882045/', '"Smooth and creamy chicken white soup" — mid-scale.'],
        oiliness: [R + 'B538046382/', 'Niboshi broth "lighter than it looked" — placed low.'],
        clarity: [R + 'B538006469/', '"Covered in a layer of pure white foam."'],
        tare_strength: [R + 'B138882045/', '"The overall flavor remained consistent" — mid-scale.'],
        noodle_firmness: [R + 'B138882045/', '"The straight, thin noodles have a firm texture."'],
        aroma_punch: [R + 'B138882045/', '"A mysterious slightly tangy foam" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B138882045/', R + 'B538006469/', R + 'B538046382/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; quick service (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区西本町1-8-2 三晃ビル旧館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区西本町一丁目8番2号 (go) 4m; OSM ふく流らーめん轍 node/4131918089 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B138882045/', R + 'B512712191/', R + 'B537443371/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Fuku Ryu ramen', '¥930', 'Ramen', 'no', 'no', 'October 2026.', 'fukuryu'),
      it('', '', 'Niboshi shoyu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'niboshi'),
      it('', '', 'Mazenibou SP (niboshi mazesoba)', '', 'Mazesoba', 'no', 'no', 'October 2026.', 'mazenibo'),
      it('', '', 'Kara-age and rice set', '', 'Sets', 'no', 'no', 'October 2026.', 'karaage_set'),
    ] }, {
    cuisine: '食べログ ラーメン WEST 百名店(2017、2019〜2022)、OSAKA 百名店(2023)・ふく流らーめん930円: カプチーノのように泡立てた鶏白湯醤油、硬めの細ストレート麺、レアチャーシュー、ねぎ、水菜、ほんのり酸味のある泡・ねぎと刻み玉ねぎ、厚いチャーシューの煮干し醤油・酢と締めのご飯で楽しむ煮干しまぜそば「まぜにぼSP」・味玉・唐揚げとご飯のセット・カウンター11席',
    neighborhood: '西区西本町1-8-2 1F。本町駅26・27番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯と煮干しのスープ、チャーシュー。',
    notes: '[ラーメン・本町、泡立つ鶏白湯の元祖] 本町駅の四つ橋線出口から1〜2分の轍の本店で、2014年開店、2017〜2023年に食べログのラーメン百名店の常連。看板のふく流らーめん(930円)は鶏白湯醤油をカプチーノのようにクリーミーに泡立て、レアチャーシュー、ねぎ、水菜、食べ進めると溶け込むほんのり酸味のある泡をのせ、細ストレート麺は硬めでしっかり。量は控えめなので唐揚げとご飯のセットを。見た目より軽い玉ねぎと厚いチャーシューの煮干し醤油が好きという常連も、酢をかけ肉を少し残してご飯で締める煮干しまぜそば「まぜにぼ」も。平日は正午には満席に。無休、現金を用意して。',
  });
}

// ================================================================ 中華そば 昴
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27131105/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_chuka_soba_subaru_honmachibashi', name: '中華そば 昴 (Chuka Soba Subaru)', category: 'OMNI',
    lat: 34.683309, lng: 135.511172, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: whole-chicken broth, fish powder, chashu.',
    hours_raw: 'Mon–Sat and holidays 11:00–15:00 and 18:00–22:00; Sun 11:00–21:00; enter before closing; closures on Instagram (Tabelog, staff-maintained). Pay when you leave. Cash only: no cards, e-money or QR (Tabelog). Lunch specials ¥100 off (October 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: day(['11:00', '21:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Honmachibashi 7-17 — 5 min from Sakaisuji-Hommachi Stn exit 12',
    cuisine: 'Additive-free chuka soba · whole-chicken (marudori) chuka soba: deep-colored but light, refreshing shoyu, medium-thin noodles, rare chashu, tender menma · special marudori chuka soba ¥1,300 with seasoned egg · shio ramen served with wasabi to change the flavor · special niboshi mazesoba · chilled abura soba ¥1,050 with chashu, egg yolk and fish powder (seasonal) · rare chashu rice bowl · 8 counter seats, 10 table seats',
    website: null, gmaps: gm('中華そば 昴 本町橋'), menu_url: null,
    notes: "[Ramen · additive-free whole-chicken chuka soba near Sakaisuji-Honmachi] A clean shop five minutes from Sakaisuji-Honmachi, open since 2022 and committed to no additives or chemical seasonings. The marudori (whole-chicken) chuka soba looks dark but drinks light and refreshing, with medium-thin noodles, rare chashu and tender menma; the special (¥1,300) adds a well-seasoned egg. The shio comes with a dab of wasabi to stir in midway, and there's a niboshi mazesoba with a strong sardine note. In season, a chilled abura soba (¥1,050) with chashu, egg yolk and fish powder is good with plenty of vinegar. The rare chashu rice bowl is a strong lunch side, and lunch sets are ¥100 off. One diner found the soup lukewarm and wanted more depth. Pay on the way out; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 September 2022 (Tabelog)', background: 'Ramen shop committed to no additives (October 2026 review; Tabelog, staff-maintained).', philosophy: 'No additives or chemical seasonings (October 2026 review).', specialty: 'Whole-chicken chuka soba.',
      anecdotes: [
        { text: '"It had a deep color but was incredibly refreshing and packed with flavor… The noodles were medium-thin and paired perfectly with the broth… The chashu was cooked rare." — October 2026, special marudori chuka soba ¥1,300.', source: R + 'B537110228/' },
        { text: '"The well-chilled thin noodles were topped with generous chunks of chashu, menma, green onions, shredded nori, fish powder, and a hint of shichimi pepper, along with an egg yolk." — October 2026, chilled abura soba ¥1,050.', source: R + 'B535593630/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 中華そば 昴、大阪市中央区本町橋7-17、堺筋本町駅12番出口から徒歩5分、月〜土祝11:00〜15:00・18:00〜22:00、日11:00〜21:00、閉店時間までに入店、休みはInstagram、カード・電子マネー・QR不可、18席(カウンター8、テーブル10)、2022年9月1日開店。口コミ(2026年9〜10月): 冷やし油そば1,050円、細麺にチャーシュー・メンマ・ねぎ・刻み海苔・魚粉・七味・卵黄、魚介のたれと香味油、酢で味変、現金で支払い、丸鶏中華そばとレアチャーシュー丼、細麺のあっさりした定番、柔らかいメンマ、ランチは100円引き、特製丸鶏中華そば1,300円、4人待ちで15分、会計は帰りに、濃い色だがすっきり、中細麺、味玉、無添加・化学調味料不使用、スープがぬるくコクが物足りないという声、マイドームおおさかの帰り、きれいな店、塩ラーメンにわさび、特製煮干しまぜそば、煮干しの風味が強い。',
      confidence: 'medium', sources: [TB, R + 'B537110228/', R + 'B535593630/', R + 'B536886150/', R + 'B537151523/', R + 'B537160514/', R + 'B537807115/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium-thin', shape: null, hydration: null, handmade: false, notes: 'Medium-thin noodles; thin in the chilled abura soba (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba', 'niboshi'],
      signature_bowl: 'Special marudori chuka soba, ¥1,300 (October 2026).',
      chashu: 'Rare chashu (October 2026).',
      notable_toppings: ['tender menma', 'seasoned egg', 'wasabi (shio)'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Honmachibashi\'s additive-free whole-chicken shoyu: dark to look at, light to drink.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536886150/', '"A classic light broth" — placed low.'],
        oiliness: [R + 'B537110228/', '"Incredibly refreshing" — placed low.'],
        clarity: [R + 'B537110228/', '"It had a deep color but was incredibly refreshing" — mid-scale.'],
        tare_strength: [R + 'B537110228/', '"Packed with flavor" — mid-scale.'],
        noodle_firmness: [R + 'B537110228/', 'Medium-thin, "sliding down easily" — mid-scale.'],
        aroma_punch: [R + 'B537151523/', 'One diner "wished for a bit more depth" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537110228/', R + 'B536886150/', R + 'B537151523/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the seat, pay on leaving; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区本町橋7-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区本町橋7番17号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537110228/', R + 'B535593630/', R + 'B536886150/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Marudori chuka soba', '', 'Ramen', 'no', 'no', 'October 2026.', 'marudori'),
      it('', '', 'Special marudori chuka soba', '¥1,300', 'Ramen', 'no', 'no', 'October 2026.', 'tokusei'),
      it('', '', 'Shio ramen with wasabi', '', 'Ramen', 'no', 'no', 'October 2026.', 'shio'),
      it('', '', 'Chilled abura soba (seasonal)', '¥1,050', 'Mazesoba', 'no', 'no', 'October 2026.', 'hiyashi_abura'),
      it('', '', 'Rare chashu rice bowl', '', 'Rice', 'no', 'no', 'Lunch set ¥100 off; October 2026.', 'chashu_don'),
    ] }, {
    cuisine: '無添加の中華そば・丸鶏中華そば: 色は濃いがすっきりした醤油、中細麺、レアチャーシュー、柔らかいメンマ・味玉付きの特製丸鶏中華そば1,300円・味変のわさびを添えた塩ラーメン・特製煮干しまぜそば・季節の冷やし油そば1,050円、チャーシュー、卵黄、魚粉・レアチャーシュー丼・カウンター8席、テーブル10席',
    neighborhood: '中央区本町橋7-17。堺筋本町駅12番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。丸鶏のスープ、魚粉、チャーシュー。',
    notes: '[ラーメン・堺筋本町近く、無添加の丸鶏中華そば] 堺筋本町から5分のきれいな店で、2022年開店、無添加・化学調味料不使用にこだわる。丸鶏中華そばは色は濃いが飲むと軽くすっきり、中細麺にレアチャーシューと柔らかいメンマ。特製(1,300円)は味のよく染みた味玉付き。塩は途中で溶くわさびが添えられ、煮干しの強い煮干しまぜそばも。季節にはチャーシュー、卵黄、魚粉の冷やし油そば(1,050円)を酢たっぷりで。レアチャーシュー丼は昼のサイドに最適、ランチセットは100円引き。スープがぬるくコクが物足りないという声も。会計は帰りに、現金のみ。',
  });
}

// ================================================================ 麺のカミの
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27126456/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:00'], ['18:00', '22:00']), WE = day(['11:30', '21:00']);
  put({
    id: 'osaka_men_no_kamino_ebisunishi', name: '麺のカミの (Men no Kamino)', category: 'OMNI',
    lat: 34.653283, lng: 135.504857, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles; soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood dashi with chicken bones and chicken fat; chashu.',
    hours_raw: 'Tue–Fri 11:30–15:00 and 18:00–22:00; Sat, Sun and holidays 11:30–21:00; closed Mondays; hours may change (Tabelog). One diner says there is also an early-morning ramen for ¥500 (October 2026), and another found it closed at night, so check before going. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ebisunishi 2-1-11 (Naniwa-ku) — about 4 min from Ebisucho Stn',
    cuisine: 'Cheap, well-made neighborhood ramen · shoyu ramen ¥750: seafood dashi with chicken bones and chicken fat, thin chewy noodles, mitsuba, thin chashu · special shoyu ramen, large available · shio ramen · morning ramen ¥500, no toppings · free extra noodles on rainy days · chashu rice bowl ¥300 · limited meat-and-egg rice bowl · 10 counter seats',
    website: null, gmaps: gm('麺のカミの 恵美須西'), menu_url: null,
    notes: "[Ramen · a ¥750 shoyu with mitsuba, and ¥500 morning ramen, by Ebisucho] A ten-seat counter a few minutes from Ebisucho, open since 2021 and loved for good ramen at a low price. The shoyu ramen (¥750) is a seafood dashi deepened with chicken bones and chicken fat, easy to drink, on thin but chewy noodles, with thin chashu and an unexpected sprig of mitsuba; there's a shio too. Early risers can get a plain morning ramen for ¥500, a clear, dashi-rich bowl that soothes a hangover. On rainy days extra noodles are free. Add a ¥300 chashu rice bowl or the limited meat-and-egg bowl. Staff service is warm. Hours seem to vary, so check before an evening visit; closed Mondays; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 November 2021 (Tabelog)', background: 'Ramen counter (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Shoyu ramen; morning ramen.',
      anecdotes: [
        { text: '"The broth seems to be based on seafood stock, with a rich flavor from chicken fat and chicken bones that complements it well. The noodles have a slightly chewy texture." — September 2026, special shoyu ramen, free extra noodles on a rainy day.', source: R + 'B536284167/' },
        { text: '"I ordered the morning ramen with salt… a simple yet delicious clear ramen, with a nice depth of flavor from the dashi. For just a coin, the quality is impressive." — October 2026.', source: R + 'B536677520/' },
      ],
      japanese_sources_summary: '食べログ: 麺のカミの、大阪市浪速区恵美須西2-1-11、恵美須町駅から286m、火〜金11:30〜15:00・18:00〜22:00、土日祝11:30〜21:00、月曜定休、カード・電子マネー・QR不可、カウンター10席、禁煙、2021年11月15日開店。口コミ(2026年8〜10月): 三つ葉が入っている、醤油ラーメンは食べやすい、肉は薄め、スープが濃く麺と合う、丁寧な接客、特製醤油ラーメン大盛り、数量限定の肉玉丼、雨の日は替え玉無料、魚介だしに鶏油と鶏ガラのコク、少しもちもちの麺、特製醤油ラーメン750円、細麺だがコシがある、天王寺動物園の散歩、朝ラーメン塩500円、澄んだスープにだしの深み、二日酔いにも、醤油ラーメン750円とチャーシュー丼300円、朝はトッピングなしで500円、夜は営業していないという声。',
      confidence: 'medium', sources: [TB, R + 'B536284167/', R + 'B536677520/', R + 'B534549622/', R + 'B535061567/', R + 'B536356591/', R + 'B537291099/'] },
    ramen: {
      broth_base: ['gyokai', 'chicken'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: ['chicken oil'], richness: 'medium',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Thin but chewy noodles (September 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Shoyu ramen, ¥750 (September–October 2026).',
      chashu: 'Thin chashu (August 2026).',
      notable_toppings: ['mitsuba', 'free extra noodles (rainy days)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Seafood and chicken broth.' },
      pantheon: 'Ebisucho\'s bargain counter: a ¥750 seafood-chicken shoyu and a ¥500 morning bowl.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B535061567/', '"The broth was rich in flavor" — mid-scale.'],
        oiliness: [R + 'B536284167/', '"A rich flavor from chicken fat" — mid-scale.'],
        clarity: [R + 'B536677520/', 'Morning shio "a simple yet delicious clear ramen" — mid-scale.'],
        tare_strength: [R + 'B534549622/', '"The shoyu ramen was very easy to eat" — mid-scale.'],
        noodle_firmness: [R + 'B536356591/', '"Quite thin, but they have a nice chew" — mid-scale.'],
        aroma_punch: [R + 'B536677520/', '"A nice depth of flavor from the dashi" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B536284167/', R + 'B536677520/', R + 'B535061567/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Warm service (September 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区恵美須西2-1-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区恵美須西二丁目1番11号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537291099/', R + 'B536677520/', R + 'B536356591/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu ramen', '¥750', 'Ramen', 'no', 'no', 'October 2026.', 'shoyu'),
      it('', '', 'Morning ramen (no toppings)', '¥500', 'Ramen', 'no', 'no', 'Early hours; October 2026.', 'asa_ramen'),
      it('', '', 'Chashu rice bowl', '¥300', 'Rice', 'no', 'no', 'October 2026.', 'chashu_don'),
      it('', '', 'Meat-and-egg rice bowl (limited)', '', 'Rice', 'no', 'no', 'September 2026.', 'nikutama_don'),
    ] }, {
    cuisine: '安くて丁寧な町のラーメン・醤油ラーメン750円: 魚介だしに鶏ガラと鶏油のコク、コシのある細麺、三つ葉、薄めのチャーシュー・特製醤油ラーメン、大盛りも・塩ラーメン・トッピングなしの朝ラーメン500円・雨の日は替え玉無料・チャーシュー丼300円・数量限定の肉玉丼・カウンター10席',
    neighborhood: '浪速区恵美須西2-1-11。恵美須町駅から徒歩4分ほど',
    gf_detail: 'グルテンフリーではありません。小麦の細麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。魚介だしに鶏ガラと鶏油、チャーシュー。',
    notes: '[ラーメン・恵美須町、三つ葉の750円醤油と500円の朝ラーメン] 恵美須町から数分のカウンター10席の店で、2021年開店、安くておいしいと評判。醤油ラーメン(750円)は魚介だしに鶏ガラと鶏油のコク、飲みやすく、細いがコシのある麺に薄めのチャーシューと意外な三つ葉。塩もある。朝早くはトッピングなしの朝ラーメンが500円で、だしの効いた澄んだ一杯は二日酔いにも。雨の日は替え玉無料。300円のチャーシュー丼や数量限定の肉玉丼も。接客は温かい。営業時間は変わることがあるようなので夜は確認を。月曜定休、現金のみ。',
  });
}

// ================================================================ 情熱のぶた
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27134704/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_jonetsu_no_buta_awaza', name: '情熱のぶた (Jonetsu no Buta)', category: 'OMNI',
    lat: 34.680501, lng: 135.486913, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone and seafood broth, chashu, egg yolk.',
    hours_raw: 'Tue–Sun 11:00–15:00 and 18:00–22:00 (L.O. 22:00); closed Mondays; hours may change (Tabelog). Ticket machine. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Itachibori 4-9-10, Premium AWAZA (Nishi-ku) — 1–2 min from Awaza Stn',
    cuisine: 'Seafood tonkotsu ramen ¥970: rich, creamy broth with medium-thick straight noodles, chashu, seasoned egg, wood-ear mushroom, nori and lots of green onion, in a round bowl · seasoned egg ¥150 · rich tsukemen ¥1,050, special tsukemen with three slices of chashu · mazesoba with white rice · ramen with a meat-and-egg-yolk rice bowl · summer chilled chuka soba with pork soft-bone chashu · counter seats',
    website: null, gmaps: gm('情熱のぶた 立売堀'), menu_url: null,
    notes: "[Ramen · seafood tonkotsu and rich tsukemen by Awaza] A lively counter shop a minute or two from Awaza, open since 2023 and packed even on a rainy weekday evening. The seafood tonkotsu ramen (¥970) is rich and creamy, with medium-thick straight noodles, chashu, a seasoned egg, wood-ear mushroom, nori and plenty of green onion in a striking round bowl. The rich tsukemen (¥1,050) has a strong pork-bone dip, and the mazesoba, with a different kind of punch, comes with white rice; pair a bowl with the meat-and-egg-yolk rice bowl on hungry days. Summer brought a chilled chuka soba with pork soft-bone chashu. The owner and staff keep the mood bright. One diner found the tsukemen just average. Buy a ticket first; closed Mondays; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 February 2023 (Tabelog)', background: 'Ramen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Seafood tonkotsu ramen; rich tsukemen.',
      anecdotes: [
        { text: '"The flavor of the broth is rich and creamy, perfectly complementing the medium-thick straight noodles." — September 2026, seafood tonkotsu ramen ¥970.', source: R + 'B536503880/' },
        { text: '"The owner seems to have a great personality, and the staff exude a lively and welcoming vibe… Both the ramen and mazesoba have never disappointed." — October 2026.', source: R + 'B524922947/' },
      ],
      japanese_sources_summary: '食べログ: 情熱のぶた、大阪市西区立売堀4-9-10 プレミアムAWAZA、阿波座駅から117m、火〜日11:00〜15:00・18:00〜22:00(L.O.22:00)、月曜定休、カード・電子マネー・QR不可、カウンター、禁煙、2023年2月28日開店。口コミ(2026年9〜10月): 夏限定の豚軟骨チャーシューの冷やし中華、定番の濃厚つけ麺1,050円、まぜそばもおいしい、ラーメンとは違うパンチ、店主の人柄とスタッフの明るい雰囲気、百名店になりそうという声、まぜそばに白ご飯、魚介豚骨ラーメン970円、味玉150円、雨の火曜18:30で満席、券売機、丸い器、濃厚でクリーミーなスープ、中太ストレート麺、ラーメンと肉と卵黄のご飯、チャーシュー・味玉・きくらげ・海苔・たっぷりのねぎ、特製つけ麺、チャーシュー3枚、豚骨の強いつけ汁、普通だったという声。',
      confidence: 'medium', sources: [TB, R + 'B536503880/', R + 'B524922947/', R + 'B467109118/', R + 'B536346967/', R + 'B536663795/', R + 'B537464823/'] },
    ramen: {
      broth_base: ['tonkotsu', 'gyokai'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium-thick', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thick straight noodles (September 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen', 'mazesoba_aburasoba'],
      signature_bowl: 'Seafood tonkotsu ramen, ¥970 (September 2026).',
      chashu: 'Chashu; three slices in the special tsukemen (October 2026).',
      notable_toppings: ['wood-ear mushroom', 'green onion', 'seasoned egg', 'nori'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork and seafood broth.' },
      pantheon: 'Awaza\'s lively seafood tonkotsu shop, with a rich tsukemen and a mazesoba-and-rice combo.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536503880/', '"The flavor of the broth is rich and creamy" — placed high.'],
        oiliness: [R + 'B536503880/', 'Creamy seafood tonkotsu — mid-scale.'],
        clarity: [R + 'B536663795/', '"A rich brown broth" — placed low.'],
        tare_strength: [R + 'B467109118/', '"The rich dipping sauce is flavorful" — mid-scale.'],
        noodle_firmness: [R + 'B536503880/', 'Medium-thick straight — mid-scale.'],
        aroma_punch: [R + 'B537464823/', '"A strong pork bone taste" (tsukemen) — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B536503880/', R + 'B536663795/', R + 'B467109118/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Lively, welcoming staff (October 2026); ticket machine.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区立売堀4-9-10 プレミアムAWAZA',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区立売堀四丁目9番10号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536503880/', R + 'B467109118/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Seafood tonkotsu ramen', '¥970', 'Ramen', 'no', 'no', 'September 2026.', 'gyokai_tonkotsu'),
      it('', '', 'Rich tsukemen', '¥1,050', 'Tsukemen', 'no', 'no', 'October 2026.', 'noko_tsukemen'),
      it('', '', 'Mazesoba with white rice', '', 'Mazesoba', 'no', 'no', 'September–October 2026.', 'mazesoba'),
      it('', '', 'Seasoned egg', '¥150', 'Toppings', 'no', 'no', 'September 2026.', 'ajitama'),
    ] }, {
    cuisine: '魚介豚骨ラーメン970円: 濃厚でクリーミーなスープに中太ストレート麺、チャーシュー、味玉、きくらげ、海苔、たっぷりのねぎ、丸い器・味玉150円・濃厚つけ麺1,050円、チャーシュー3枚の特製つけ麺・白ご飯付きのまぜそば・ラーメンと肉と卵黄のご飯・夏は豚軟骨チャーシューの冷やし中華・カウンター席',
    neighborhood: '西区立売堀4-9-10 プレミアムAWAZA。阿波座駅から徒歩1〜2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。豚骨と魚介のスープ、チャーシュー、卵黄。',
    notes: '[ラーメン・阿波座、魚介豚骨と濃厚つけ麺] 阿波座から1〜2分のにぎやかなカウンターの店で、2023年開店、雨の平日の夜でも満席だった。魚介豚骨ラーメン(970円)は濃厚でクリーミー、中太ストレート麺にチャーシュー、味玉、きくらげ、海苔、たっぷりのねぎ、印象的な丸い器。濃厚つけ麺(1,050円)は豚骨の強いつけ汁、ラーメンとは違うパンチのまぜそばは白ご飯付き。お腹がすいた日は肉と卵黄のご飯と一緒に。夏は豚軟骨チャーシューの冷やし中華も。店主とスタッフが明るい雰囲気をつくる。つけ麺は普通だったという声も。食券を先に、月曜定休、現金のみ。',
  });
}

save();
