// Osaka sweep (2-mile circle around Dotonbori), batch 130 — ramen phase (all OMNI).
//   + 麺と肉 だいつる 鶴橋店 (spicy shoyu "niku soba" with soft-bone chashu, horumon mazesoba, spice levels; Tsuruhashi)
//   + らーめん 賛平 (light, creamy tonkotsu-chicken garlic ramen with thick chashu; open to 1:00–3:00; Tsuruhashi)
//   + 麺屋 和人 天王寺北口本店 (additive-free seafood-dashi ramen, niboshi tsukemen, free large; Tennoji north exit)
//   + 山系無双 烈火 パナンテ京阪天満橋店 (Yamagata ramen: Hippa mazesoba with mackerel and natto, torichuka; Tenmabashi Stn)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 130);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 麺と肉 だいつる 鶴橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27094184/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_men_to_niku_daitsuru_tsuruhashi', name: '麺と肉 だいつる 鶴橋店 (Men to Niku Daitsuru Tsuruhashi)', category: 'OMNI',
    lat: 34.666145, lng: 135.529917, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu soup; gochujang; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat broth; soft-bone and pork-belly chashu; beef horumon; egg.',
    hours_raw: 'Daily 11:00–22:00; hours may change (Tabelog). Lines; write your name on the list (October 2026). Follow on Instagram for a free large or a raw egg (October 2026). Cash only (Tabelog).',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Funahashicho 18-3 (Tennoji-ku) — 1 min from Tsuruhashi Stn',
    cuisine: 'Spicy meat soba · shoyu niku soba: rich soy soup with Korean chili, spice level to order (standard 2; 0 possible), sesame-oil aroma, thick straight noodles; soft-bone chashu topping to ¥1,480 · spicy horumon mazesoba ¥1,480 (level 3): beef horumon, kimchi, vegetables, chewy noodles; free raw egg with an Instagram follow · spicy horumon ramen with gochujang on flat noodles · toppings: pork belly, soft-bone chashu, kara-age, extra green onion · rice, large ¥100, to finish in the soup · table: garlic, ginger · 12 counter seats',
    website: null, gmaps: gm('麺と肉 だいつる 鶴橋店'), menu_url: null,
    notes: "[Ramen · spicy shoyu meat soba and horumon mazesoba by Tsuruhashi] A twelve-seat counter a minute from Tsuruhashi Station, open since 2016 and usually with a line (write your name on the sheet). The house bowl is a rich shoyu niku soba with Korean chili, sesame oil and thick straight noodles; spice is graded, with level 2 standard and 0 possible, and the soft-bone chashu melts at a touch. In Tsuruhashi, the horumon is the other draw: a spicy horumon mazesoba (¥1,480) loaded with beef offal and kimchi, and a horumon ramen on flat noodles. Finish either with a large rice (¥100) in the leftovers. Garlic and ginger on the counter. Follow on Instagram for a free large or raw egg. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 September 2016 (Tabelog)', background: 'Ramen counter (Tabelog; 2025–2026 reviews); selected as a top Osaka ramen spot for 2025 (October 2026 review).', philosophy: null, specialty: 'Spicy shoyu niku soba; horumon mazesoba.',
      anecdotes: [
        { text: '"The standard spice level is \'two spicy,\' so I went with that, but it was quite spicy—though in a pleasant way. The rich soy sauce broth combined with the chili created a mild flavor that paired perfectly with the thick straight noodles." — October 2026, shoyu ramen with soft-bone chashu ¥1,480.', source: R + 'B537414964/' },
        { text: '"This mazesoba is packed with ingredients like beef horumon, kimchi, and vegetables! The delightful texture of the horumon and the richness of the fat are truly appealing!" — October 2026, spicy horumon mazesoba ¥1,480.', source: R + 'B537338699/' },
      ],
      japanese_sources_summary: '食べログ: 麺と肉 だいつる 鶴橋店、大阪市天王寺区舟橋町18-3、鶴橋駅から徒歩1分、毎日11:00〜22:00、カード・電子マネー・QR不可、カウンター12席、2016年9月12日開店。口コミ(2025年1月〜2026年10月): 醤油の肉そば、韓国唐辛子、辛さは標準2で0も、ごま油の香り、中太〜太のストレート麺、とろける軟骨チャーシューのトッピングで1,480円、辛いホルモンまぜそば (辛さ3) 1,480円 (牛ホルモン、キムチ、野菜)、SNSフォローで生卵か大盛り無料、コチュジャンの辛いホルモンラーメンと平打ち麺、豚バラ、唐揚げ、ねぎ増し、大ライス100円で締め、卓上のにんにくと生姜、行列は名前を書いて待つ、2025年の大阪の人気ラーメン店に選ばれたという声。',
      confidence: 'medium', sources: [TB, R + 'B501276744/', R + 'B537338699/', R + 'B537414964/', R + 'B537551518/', R + 'B537877722/', R + 'B538019139/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: ['sesame oil', 'chili'], richness: 'medium',
      noodles: { thickness: 'thick', shape: 'straight', hydration: null, handmade: false, notes: 'Thick straight noodles in the shoyu; flat noodles in the horumon ramen; chewy in the mazesoba (2025–2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Shoyu niku soba, spice level 2, with soft-bone chashu, ¥1,480 (October 2026).',
      chashu: 'Very tender soft-bone (nankotsu) chashu; pork belly (2025–2026).',
      notable_toppings: ['Korean chili', 'soft-bone chashu', 'beef horumon', 'kimchi', 'raw egg', 'rice to finish'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat broth.' },
      pantheon: 'Tsuruhashi\'s chili-graded shoyu meat soba, with horumon mazesoba for the neighborhood.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537414964/', '"The rich soy sauce broth" — placed high.'],
        oiliness: [R + 'B501276744/', '"The enticing aroma of sesame oil" (January 2025); no review calls it oily — mid-scale.'],
        clarity: [R + 'B537414964/', 'Soy soup mixed with chili — placed low.'],
        tare_strength: [R + 'B537414964/', '"The rich soy sauce broth combined with the chili" — placed high.'],
        noodle_firmness: [R + 'B537338699/', '"The chewy noodles" — placed high.'],
        aroma_punch: [R + 'B537414964/', '"It was quite spicy—though in a pleasant way" at standard level 2 — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B537414964/', R + 'B537338699/', R + 'B501276744/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Write your name on the waiting list; choose a spice level (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区舟橋町18-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区舟橋町18番3号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537338699/', R + 'B537414964/', R + 'B537551518/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu niku soba (spice level to order)', '', 'Ramen', 'no', 'no', 'October 2026.', 'shoyu_niku'),
      it('', '', 'Shoyu niku soba with soft-bone chashu', '¥1,480', 'Ramen', 'no', 'no', 'October 2026.', 'nankotsu'),
      it('', '', 'Spicy horumon mazesoba', '¥1,480', 'Mazesoba', 'no', 'no', 'October 2026.', 'horumon_maze'),
      it('', '', 'Spicy horumon ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'horumon_ramen'),
      it('', '', 'Rice, large', '¥100', 'Rice', 'ask', 'ask', 'October 2026.', 'rice'),
    ] }, {
    cuisine: '辛い肉そば・醤油の肉そば: 濃い醤油のスープに韓国唐辛子、辛さは選べて標準2 (0も可)、ごま油の香り、太いストレート麺、軟骨チャーシューのトッピングで1,480円・辛いホルモンまぜそば1,480円 (辛さ3): 牛ホルモン、キムチ、野菜、もちもちの麺、SNSフォローで生卵無料・コチュジャンの辛いホルモンラーメン、平打ち麺・トッピング: 豚バラ、軟骨チャーシュー、唐揚げ、ねぎ増し・大ライス100円をスープで締める・卓上: にんにく、生姜・カウンター12席',
    neighborhood: '天王寺区舟橋町18-3。鶴橋駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のスープ、コチュジャン、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。肉のスープ、軟骨と豚バラのチャーシュー、牛ホルモン、卵。',
    notes: '[ラーメン・鶴橋近く、辛い醤油の肉そばとホルモンまぜそば] 鶴橋駅から1分のカウンター12席の店で、2016年開店、たいてい行列 (名前を書いて待つ)。看板は韓国唐辛子とごま油の濃い醤油の肉そばに太いストレート麺、辛さは段階式で標準は2、0にもでき、軟骨チャーシューは箸で触れるとほどける。鶴橋らしくホルモンも見どころで、牛ホルモンとキムチたっぷりの辛いホルモンまぜそば(1,480円)、平打ち麺のホルモンラーメン。どちらも大ライス(100円)を残りに入れて締める。卓上ににんにくと生姜。Instagram フォローで大盛りか生卵が無料。現金のみ。',
  });
}

// ================================================================ らーめん 賛平
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27091709/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:00', '01:00']); const B = day(['11:00', '03:00']);
  put({
    id: 'osaka_ramen_sanpei_tsuruhashi', name: 'らーめん 賛平 (Ramen Sanpei)', category: 'OMNI',
    lat: 34.666151, lng: 135.53003, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu-chicken soup; chashu; seasoned egg.',
    hours_raw: 'Mon–Thu and Sun 11:00–01:00; Fri–Sat 11:00–03:00; hours may change (Tabelog). Waits of about 20 minutes at weekend lunch (October 2026). Cash only (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Funahashicho 18-2 (Tennoji-ku) — 1 min from Tsuruhashi Stn',
    cuisine: 'Garlic tonkotsu ramen · Sanpei ramen ¥900: creamy tonkotsu-chicken white soup, lighter than it looks, slightly curly chewy noodles, firmness to order, tender thick chashu; chopped Aomori garlic to taste · chashu ramen ¥1,300 · ramen and rice set, seasoned egg · small rice ¥150 · table: pickled ginger, pepper · limited collaboration bowls · counter seats',
    website: null, gmaps: gm('らーめん 賛平'), menu_url: null,
    notes: "[Ramen · creamy tonkotsu garlic ramen by Tsuruhashi, open late] A counter shop a minute from Tsuruhashi, next door to Daitsuru, open since 2016 until 1:00, or 3:00 on Fridays and Saturdays. The Sanpei ramen (¥900) is a creamy tonkotsu-and-chicken white soup that drinks lighter than it looks, on slightly curly, chewy noodles, until you stir in the chopped Aomori garlic, which gives it punch. The thick, well-roasted chashu, balanced lean and fat, is the reason to order the chashu ramen (¥1,300) or a rice set. Pickled ginger and pepper on the counter change it up. Seats stay full well past lunch; expect around 20 minutes at weekend lunch. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 April 2016 (Tabelog)', background: 'Tonkotsu garlic ramen counter (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Creamy tonkotsu-chicken ramen with fresh garlic.',
      anecdotes: [
        { text: '"The rich, cloudy tonkotsu chicken broth was amazing… The light and smooth white soup was packed with garlic flavor… Though small, it was thick with a great balance of lean meat and fat, perfectly roasted…" — October 2026, chashu ramen ¥1,300.', source: R + 'B538123851/' },
        { text: '"Before mixing in the garlic, I took a bite. It was lighter than it looked. The broth is a creamy white soup, and when I added the garlic, it became a punchy flavor." — October 2026, Sanpei ramen ¥900.', source: R + 'B538148289/' },
      ],
      japanese_sources_summary: '食べログ: らーめん 賛平、大阪市天王寺区舟橋町18-2、鶴橋駅から119m、月〜木・日 11:00〜翌1:00、金・土 11:00〜翌3:00、カード・電子マネー・QR不可、カウンターのみ、2016年4月29日開店。口コミ(2026年10月): 讃平らーめん900円 (写真の表記)、クリーミーな豚骨と鶏の白湯、見た目よりあっさり、刻んだ青森のにんにくを混ぜるとパンチが出る、ややちぢれたもちもちの麺、麺の硬さ、厚く柔らかいチャーシュー、チャーシュー麺1,300円、小ライス150円、ラーメンとライスのセット、味玉、卓上の紅しょうがと胡椒、日曜昼は約20分待ち、15時過ぎも満席、限定50杯のコラボラーメン1,500円。',
      confidence: 'medium', sources: [TB, R + 'B538047006/', R + 'B538110088/', R + 'B538123851/', R + 'B538148289/', R + 'B538152035/', R + 'B538159638/'] },
    ramen: {
      broth_base: ['tonkotsu', 'chicken'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'wavy', hydration: null, handmade: false, notes: 'Slightly curly, chewy noodles; firmness to order (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Sanpei ramen, ¥900 (October 2026).',
      chashu: 'Thick, tender, well-roasted chashu with lean and fat (October 2026).',
      notable_toppings: ['chopped Aomori garlic', 'seasoned egg', 'pickled ginger'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork and chicken soup.' },
      pantheon: 'Tsuruhashi\'s late-night creamy tonkotsu-chicken, sharpened with fresh Aomori garlic.',
      profile: { richness: 3, oiliness: 2, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B538148289/', '"It was lighter than it looked. The broth is a creamy white soup" — mid-scale.'],
        oiliness: [R + 'B538123851/', '"The light and smooth white soup" — placed low.'],
        clarity: [R + 'B538123851/', '"The rich, cloudy tonkotsu chicken broth" — bottom of scale.'],
        tare_strength: [R + 'B538110088/', '"It has a strong umami flavor" — mid-scale.'],
        noodle_firmness: [R + 'B538148289/', '"Slightly curly and had a bit of a chewy texture" — mid-scale.'],
        aroma_punch: [R + 'B538148289/', '"When I added the garlic, it became a punchy flavor" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B538148289/', R + 'B538123851/', R + 'B538110088/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter; garlic and noodle firmness to order (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区舟橋町18-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (34.666151, 135.529956); next lot to Men to Niku Daitsuru (osaka_men_to_niku_daitsuru_tsuruhashi, 18-3), pin offset ~7 m east so the two do not stack; GSI 大阪府大阪市天王寺区舟橋町18番2号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538123851/', R + 'B538148289/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sanpei ramen', '¥900', 'Ramen', 'no', 'no', 'October 2026.', 'sanpei'),
      it('', '', 'Chashu ramen', '¥1,300', 'Ramen', 'no', 'no', 'October 2026.', 'chashu'),
      it('', '', 'Ramen and rice set', '', 'Sets', 'no', 'no', 'October 2026.', 'rice_set'),
      it('', '', 'Small rice', '¥150', 'Rice', 'ask', 'ask', 'October 2026.', 'rice'),
    ] }, {
    cuisine: 'にんにくの豚骨ラーメン・賛平のらーめん900円: クリーミーな豚骨と鶏の白湯、見た目よりあっさり、ややちぢれたもちもちの麺は硬さを選べる、厚く柔らかいチャーシュー、刻んだ青森のにんにくはお好みで・チャーシュー麺1,300円・ラーメンとライスのセット、味玉・小ライス150円・卓上: 紅しょうが、胡椒・限定のコラボラーメン・カウンター席',
    neighborhood: '天王寺区舟橋町18-2。鶴橋駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、たれ。',
    vegan_detail: 'ヴィーガンではありません。豚骨と鶏のスープ、チャーシュー、味玉。',
    notes: '[ラーメン・鶴橋近く、夜遅くまで開くクリーミーな豚骨のにんにくラーメン] 鶴橋から1分、だいつるの隣のカウンターの店で、2016年開店、深夜1時まで、金・土は3時まで。賛平のらーめん(900円)はクリーミーな豚骨と鶏の白湯だが、見た目よりあっさりで、ややちぢれたもちもちの麺に、刻んだ青森のにんにくを混ぜるとパンチが出る。赤身と脂の釣り合いがいい厚いチャーシューが目当てなら、チャーシュー麺(1,300円)かライスのセットを。卓上の紅しょうがと胡椒で味変。昼を過ぎても満席が続き、週末の昼は20分ほど待つ。現金のみ。',
  });
}

// ================================================================ 麺屋 和人 天王寺北口本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27086634/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:30', '23:00']); const B = day(['11:30', '01:00']);
  put({
    id: 'osaka_menya_wabito_tennoji_kitaguchi', name: '麺屋 和人 天王寺北口本店 (Menya Wabito Tennoji Kitaguchi Honten)', category: 'OMNI',
    lat: 34.647825, lng: 135.515818, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; tare; gyoza; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood dashi and niboshi; pork and chicken chashu; egg.',
    hours_raw: 'Mon–Thu and Sun 11:30–23:00 (last order 22:45); Fri–Sat 11:30–01:00 (last order 00:30); closed 31 December–1 January (Tabelog). Buy a ticket first (October 2026). Cards, IC cards, e-money and QR (incl. Alipay, WeChat Pay) accepted (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Hidenincho 8-11 1F (Tennoji-ku), along the tracks next to Torikizoku — 1 min from JR Tennoji north gate',
    cuisine: 'Seafood-dashi ramen · Wabito ramen: clear, additive-free seafood dashi, light seasoning, slightly thin straight chewy noodles, chashu, grilled chicken chashu, soft-boiled egg · Wabito special tsukemen ¥1,280: thick noodles (large about 300 g) with a punchy sardine-niboshi and salt dip, pork shoulder, chicken breast, seasoned egg, menma · mazesoba with strong seafood flavor, rice to finish · makanai rice bowl with a sweet citrus sauce · gyoza, kara-age · free large noodles, five spices on the counter, free black oolong tea · 11 counter seats',
    website: null, gmaps: gm('麺屋 和人 天王寺北口本店'), menu_url: null,
    notes: "[Ramen · additive-free seafood-dashi ramen by Tennoji north exit] The main shop of Menya Wabito, an eleven-seat, Japanese-style counter a minute from JR Tennoji's north gate along the tracks, open since 2015 until 23:00, or 1:00 on weekends. The Wabito ramen is a clear, additive-free seafood dashi, lightly seasoned and clean with no fishiness, on slightly thin, chewy straight noodles with chashu, grilled chicken and a soft egg; finish the soup as ochazuke with rice. For more punch, the special tsukemen (¥1,280) dips thick noodles in a strong sardine-niboshi broth. Large noodles and black oolong tea are free, with five spices to play with. One diner found it too salty. Attentive staff see you out. Cards and QR accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 23 July 2015 (Tabelog); the main shop of Menya Wabito (October 2026 review).', background: 'Seafood-dashi ramen counter (Tabelog; 2026 reviews).', philosophy: 'Soup made without additives (October 2026 review).', specialty: 'Seafood-dashi ramen; niboshi tsukemen.',
      anecdotes: [
        { text: '"Taking a sip of the broth, I was greeted by a delightful aroma of dashi. The flavor was clear and refreshing… It leaned towards a lighter seasoning." — October 2026, Wabito ramen.', source: R + 'B536607562/' },
        { text: '"The dipping sauce is seafood-based, primarily featuring sardine niboshi. It has a strong punchy flavor with a prominent taste of niboshi and salt…" — October 2026, Wabito special tsukemen ¥1,280, large.', source: R + 'B536989491/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 和人 天王寺北口本店、大阪市天王寺区悲田院町8-11 1F、JR天王寺駅北改札から線路沿いの路地を1分、Torikizokuの隣、月〜木・日 11:30〜23:00 (L.O. 22:45)、金・土 11:30〜翌1:00 (L.O. 0:30)、12月31日〜1月1日休み、カード・電子マネー・QR (Alipay、WeChat Pay を含む) 可、11席、2015年7月23日開店。口コミ(2026年10月): Wabito ramen、無添加の魚介出汁の澄んだスープ、あっさりめの味、臭みなし、やや細いストレートのもちもちの麺、チャーシュー、焼いた鶏チャーシュー、半熟卵、ご飯でお茶漬け風に、Wabito 特製つけ麺1,280円 (太麺、大盛り約300g、イワシの煮干しと塩の強いつけ汁、豚肩、鶏むね、味玉、メンマ、玉ねぎ)、魚介の強いまぜそばと締めのご飯、甘い柑橘のたれのまかない丼、餃子、唐揚げ、大盛り無料、卓上の5種のスパイス、黒烏龍茶無料、食券制、見送り、席ごとの荷物フック、塩辛すぎたという声、和の落ち着いた店内。',
      confidence: 'medium', sources: [TB, R + 'B536607562/', R + 'B536989491/', R + 'B537082441/', R + 'B537163648/', R + 'B537891086/', R + 'B537984614/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'chintan', tare: [], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Slightly thin, straight, chewy noodles in the ramen; thick noodles in the tsukemen; free large (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen', 'niboshi'],
      signature_bowl: 'Wabito ramen (October 2026).',
      chashu: 'Pork chashu and grilled chicken chashu; pork shoulder and chicken breast on the tsukemen (October 2026).',
      notable_toppings: ['soft-boiled egg', 'menma', 'five spices', 'rice to finish'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Seafood dashi.' },
      pantheon: 'Tennoji\'s additive-free seafood-dashi ramen, with a punchy niboshi tsukemen.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537082441/', '"It\'s a light broth, perfect for those who… prefer something not too heavy" — placed low.'],
        oiliness: [R + 'B537984614/', '"The broth was refreshingly light in a good way" — placed low.'],
        clarity: [R + 'B536607562/', '"The clear broth" — top of scale.'],
        tare_strength: [R + 'B536607562/', '"It leaned towards a lighter seasoning"; one diner found it "a bit too salty" (B537891086) — mid-scale.'],
        noodle_firmness: [R + 'B537891086/', '"The noodles are straight and have a nice chewy texture" — mid-scale.'],
        aroma_punch: [R + 'B536607562/', '"A delightful aroma of dashi" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B536607562/', R + 'B537082441/', R + 'B537891086/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; attentive staff (October 2026); cards and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区悲田院町8-11 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区悲田院町8番11号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536607562/', R + 'B536989491/', R + 'B537984614/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Wabito ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'wabito'),
      it('', '', 'Wabito special tsukemen', '¥1,280', 'Tsukemen', 'no', 'no', 'October 2026.', 'tsukemen'),
      it('', '', 'Mazesoba', '', 'Mazesoba', 'no', 'no', 'October 2026.', 'maze'),
      it('', '', 'Makanai rice bowl (small, set)', '', 'Rice', 'no', 'no', 'October 2026.', 'makanai'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'October 2026.', 'gyoza'),
      it('', '', 'Kara-age', '', 'Sides', 'no', 'no', 'October 2026.', 'karaage'),
    ] }, {
    cuisine: '魚介出汁のラーメン・Wabito ramen: 無添加の魚介出汁の澄んだスープ、あっさりめの味、やや細いストレートのもちもちの麺、チャーシュー、焼いた鶏チャーシュー、半熟卵・Wabito 特製つけ麺1,280円: 太麺 (大盛り約300g) にイワシの煮干しと塩の強いつけ汁、豚肩、鶏むね、味玉、メンマ・魚介の強いまぜそばと締めのご飯・甘い柑橘のたれのまかない丼・餃子、唐揚げ・大盛り無料、卓上の5種のスパイス、黒烏龍茶無料・カウンター11席',
    neighborhood: '天王寺区悲田院町8-11 1F、線路沿いのTorikizokuの隣。JR天王寺駅北改札から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、たれ、餃子、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。魚介出汁と煮干し、豚と鶏のチャーシュー、卵。',
    notes: '[ラーメン・天王寺北口、無添加の魚介出汁ラーメン] 麺屋 和人の本店で、JR天王寺駅北改札から線路沿いに1分、和の落ち着いたカウンター11席、2015年開店、23時まで、週末は深夜1時まで。Wabito ramenは無添加の魚介出汁の澄んだスープで、味はあっさりめ、臭みがなく、やや細いもちもちのストレート麺にチャーシュー、焼いた鶏、半熟卵。残ったスープはご飯でお茶漬け風に。パンチが欲しければ特製つけ麺(1,280円)、太麺をイワシの煮干しの強いつけ汁で。大盛りと黒烏龍茶は無料、卓上の5種のスパイスで遊べる。塩辛すぎたという声も。気配りのある店員が見送ってくれる。カード、QR可。',
  });
}

// ================================================================ 山系無双 烈火 パナンテ京阪天満橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27097328/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://jun88.co.jp/';
  put({
    id: 'osaka_yamakei_musou_rekka_tenmabashi', name: '山系無双 烈火 パナンテ京阪天満橋店 (Yamakei Musou Rekka Panante Keihan Tenmabashi)', category: 'OMNI',
    lat: 34.690209, lng: 135.516582, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; spicy miso; tenkasu; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth; mackerel; chashu; egg yolk; bonito.',
    hours_raw: 'Daily 11:00–23:00; hours may change (Tabelog). Time-slot booking via EPARK, which failed for one diner (October 2026). JAF card for a free topping (October 2026). Cards, PayPay and Rakuten Pay accepted; no e-money (Tabelog).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tenmabashi-Kyomachi 1-1, Panante Keihan Tenmabashi (underground dining area) — inside Keihan Tenmabashi Stn',
    cuisine: 'Yamagata ramen · Yamagata Hippa ramen (hippari mazesoba) ¥950: thick, very chewy noodles under green onion, shredded nori, egg yolk, chashu, canned mackerel, crushed natto and spicy miso, a little chicken broth beneath; rice to finish with ume-kombu vinegar · Mazesoba Rekka: the very spicy version · Rekka ramen (spicy) ¥950 · Yamagata torichuka: sweet chicken broth, big chicken pieces, tenkasu, mitsuba and nori, medium-thick curly noodles, spicy miso on the side · Yonezawa ramen: light broth, thin flat curly noodles · Yamagata spicy miso ramen ¥930 on a bonito base · summer cold soba · kara-age · 21 counter seats',
    website: OWN, gmaps: gm('山系無双 烈火 パナンテ京阪天満橋店'), menu_url: null,
    notes: "[Ramen · Yamagata ramen and Hippa mazesoba inside Tenmabashi Station] A 21-seat counter in the Panante food avenue inside Keihan Tenmabashi Station, open since 2017 and serving Yamagata styles that are rare in Kansai. The signature is the Yamagata Hippa ramen (¥950): thick, stretchy noodles you pull up through egg yolk, canned mackerel, crushed natto and spicy miso over a little chicken broth, then rice with ume-kombu vinegar to finish. The Mazesoba Rekka is the fiery version. For soup, the torichuka is a sweet chicken broth with large chicken pieces and tenkasu on curly noodles, and the Yonezawa ramen is lighter on thin noodles. Busy at lunch. Cards and PayPay accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 March 2017 (Tabelog)', background: 'Yamagata-style ramen shop (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Yamagata Hippa mazesoba; Yamagata torichuka.',
      anecdotes: [
        { text: '"A generous amount of green onions, shredded nori, egg yolk, chashu (braised pork), mackerel, natto (fermented soybeans), and spicy miso were beautifully arranged on top of the dry noodles. (Although it\'s called dry noodles, there is chicken broth at the bottom.)" — October 2026, Yamagata Hippa ramen ¥950.', source: R + 'B514906209/' },
        { text: '"As the name suggests, it was all about chicken in both appearance and flavor, with generous chunks of chicken replacing the usual chashu… The tenkasu (tempura scraps) piled on top… soaking up the chicken broth…" — November 2025, Yamagata torichuka.', source: R + 'B514906209/' },
      ],
      japanese_sources_summary: '食べログ: 山系無双 烈火 パナンテ京阪天満橋店、大阪市中央区天満橋京町1-1 パナンテ京阪天満橋、京阪天満橋駅すぐ、毎日11:00〜23:00、カード・PayPay・楽天ペイ可、電子マネー不可、カウンター21席、テイクアウト、2017年3月21日開店、公式サイトあり。口コミ(2025年6月〜2026年10月): 関西では珍しい山形ラーメン、Yamagata Hippa ramen 950円 (太くもちもちの麺、ねぎ、刻み海苔、卵黄、チャーシュー、サバ缶、ひきわり納豆、辛味噌、底に鶏スープ、締めのご飯に梅こんぶ酢)、激辛のまぜそば烈火、烈火ラーメン (辛さ2) 950円、Yamagata Torichuka (甘めの鶏スープ、大きな鶏肉、天かす、三つ葉、海苔、中太ちぢれ麺、辛味噌は別皿)、米沢ラーメン (あっさり、細い平打ちのちぢれ麺)、山形辛味噌ラーメン930円 (かつお節のだし)、夏の冷たいそば、唐揚げ、EPARK の時間予約がうまくいかなかったという声、JAF 会員証でトッピング無料、昼は混む。',
      confidence: 'medium', sources: [TB, OWN, R + 'B507991692/', R + 'B514906209/', R + 'B535753557/', R + 'B536646174/', R + 'B536926418/', R + 'B537671259/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shoyu', 'miso'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thick', shape: 'straight', hydration: null, handmade: false, notes: 'Thick, elastic noodles in the Hippa mazesoba; medium-thick curly in the torichuka; thin flat curly in the Yonezawa ramen (2025–2026).' },
      regional_style: ['Yamagata'], sub_genre: ['mazesoba_aburasoba', 'ramen'],
      signature_bowl: 'Yamagata Hippa ramen (hippari mazesoba), ¥950 (October 2026).',
      chashu: 'Thin-sliced chashu on the mazesoba; large chicken pieces on the torichuka (2025–2026).',
      notable_toppings: ['canned mackerel', 'crushed natto', 'egg yolk', 'spicy miso', 'tenkasu', 'rice with ume-kombu vinegar'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth and mackerel.' },
      pantheon: 'Tenmabashi Station\'s Yamagata corner: mackerel-and-natto Hippa mazesoba and a sweet chicken torichuka.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 4, noodle_firmness: 5, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B514906209/', '"Yamagata\'s spicy miso, chicken broth, and various toppings" in the mazesoba — mid-scale.'],
        oiliness: [R + 'B514906209/', 'No review calls it oily — mid-scale.'],
        clarity: [R + 'B514906209/', 'A mixed mazesoba with "chicken broth at the bottom" — placed low.'],
        tare_strength: [R + 'B507991692/', 'Yamagata ramen "tends to have a salty flavor profile" — placed high.'],
        noodle_firmness: [R + 'B514906209/', '"Incredible elasticity and a strong chewiness… won\'t break even when pulled" — top of scale.'],
        aroma_punch: [R + 'B514906209/', 'Mackerel, natto and spicy miso, "addictively tasty" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B514906209/', R + 'B507991692/', R + 'B535753557/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Illustrated how-to-eat guide for the Hippa mazesoba (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区天満橋京町1-1 パナンテ京阪天満橋',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区天満橋京町1番1号 (go) 55m (large station building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B514906209/', R + 'B536646174/', R + 'B537671259/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Yamagata Hippa ramen (hippari mazesoba)', '¥950', 'Mazesoba', 'no', 'no', 'October 2026.', 'hippa'),
      it('', '', 'Mazesoba Rekka (very spicy)', '', 'Mazesoba', 'no', 'no', '2025.', 'maze_rekka'),
      it('', '', 'Rekka ramen (spicy)', '¥950', 'Ramen', 'no', 'no', 'October 2026.', 'rekka'),
      it('', '', 'Yamagata torichuka', '', 'Ramen', 'no', 'no', 'October 2026.', 'torichuka'),
      it('', '', 'Yonezawa ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'yonezawa'),
      it('', '', 'Yamagata spicy miso ramen', '¥930', 'Ramen', 'no', 'no', 'October 2026.', 'kara_miso'),
      it('', '', 'Kara-age', '', 'Sides', 'no', 'no', 'August 2026.', 'karaage'),
    ] }, {
    cuisine: '山形ラーメン・Yamagata Hippa ramen (hippari mazesoba) 950円: 太くよく伸びるもちもちの麺にねぎ、刻み海苔、卵黄、チャーシュー、サバ缶、ひきわり納豆、辛味噌、底に少しの鶏スープ、締めはご飯に梅こんぶ酢・まぜそば Rekka: とても辛い版・Rekka ラーメン (辛い) 950円・Yamagata Torichuka: 甘めの鶏スープ、大きな鶏肉、天かす、三つ葉、海苔、中太のちぢれ麺、辛味噌は別皿・米沢ラーメン: あっさり、細い平打ちのちぢれ麺・かつお節のだしの山形辛味噌ラーメン930円・夏の冷たいそば・唐揚げ・カウンター21席',
    neighborhood: '中央区天満橋京町1-1 パナンテ京阪天満橋 (駅地下の飲食街)。京阪天満橋駅構内',
    gf_detail: 'グルテンフリーではありません。小麦の麺、辛味噌、天かす、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。鶏のスープ、サバ、チャーシュー、卵黄、かつお節。',
    notes: '[ラーメン・天満橋駅構内、山形ラーメンと Hippa まぜそば] 京阪天満橋駅構内の飲食街パナンテにあるカウンター21席の店で、2017年開店、関西では珍しい山形の麺を出す。看板は Yamagata Hippa ramen (950円): 卵黄、サバ缶、ひきわり納豆、辛味噌の下から、よく伸びる太麺をひっぱり上げて食べ、底には少し鶏スープ、最後はご飯に梅こんぶ酢で締める。辛さを求めるならまぜそば Rekka。汁ありなら、甘めの鶏スープに大きな鶏肉と天かすをのせたちぢれ麺の Yamagata Torichuka、細麺であっさりの米沢ラーメン。昼は混む。カード、PayPay 可。',
  });
}

save();
