// Osaka sweep (2-mile circle around Dotonbori), batch 49 — ramen phase, nearest first (all OMNI).
//   + ぐり虎 大阪なんばスカイオ店 (chicken shio and wagyu sukiyaki rice in Namba Skyo)
//   + 帰ってきた宮田麺児 (vegetable-potage tsukemen with a choice of three noodles, since 2016)
//   + 安徽牛肉板面 (Anhui beef banmian — filed 'other'; no hours listed)
//   + 創作中華 縁 (Tabelog 100 creative Sichuan, 12-seat basement counter — filed 'other')
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 49);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ぐり虎 大阪なんばスカイオ店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27144296/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_guriko_namba_skyo', name: 'ぐり虎 大阪なんばスカイオ店 (Guriko Osaka Namba Skyo)', category: 'OMNI',
    lat: 34.663763, lng: 135.501172, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza; sukiyaki sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shamo and jidori chicken broth, chashu, wagyu.',
    hours_raw: 'Daily 11:00–23:00 (Tabelog). QR-code ordering. No reservations. Cards and e-money accepted; no QR payment (Tabelog).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Skyo 2F (Namba 5-1-60) — directly connected to Nankai Namba Stn',
    cuisine: 'Chicken shio ramen from shamo, jidori, salt and seafood · special chicken shio with yuzu, rare and smoked chashu · wonton chicken shio · shoyu ramen · limited rich tonkotsu-seafood · spicy minced-meat ramen · meat tsukemen (three chashu) · grilled black-wagyu sukiyaki rice · chicken-skin gyoza · Setouchi oyster gyoza · counter and tables',
    website: null, gmaps: gm('ぐり虎 なんばスカイオ'), menu_url: null,
    notes: "[Ramen · chicken shio and wagyu sukiyaki rice in Namba Skyo] A spacious ramen shop on the second floor of Namba Skyo, directly connected to Nankai Namba; reviewers note the brand is featured in the Michelin Guide. The signature is a clear chicken shio from shamo and jidori with salt and seafood, gentle and soothing. The special adds yuzu, moist rare chashu and juicy smoked chashu, and a wonton version is popular too. The shoyu has firm noodles, and the menu ranges to a spicy minced-meat ramen, a meat tsukemen with three chashu and a limited tonkotsu-seafood bowl. The popular side is the grilled black-wagyu sukiyaki rice; there's also chicken-skin gyoza and Setouchi oyster gyoza. Order by QR code. No reservations, so come off-peak.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 September 2024 (Tabelog)', background: 'Guriko; reviewers say the brand is featured in the Michelin Guide (October 2026).', philosophy: 'Dedicated to high-quality ingredients (October 2026 review).', specialty: 'Chicken shio ramen; wagyu sukiyaki rice.',
      anecdotes: [
        { text: '"The clear umami flavor from the shamo chicken, jidori chicken, salt, and seafood was gentle and soothing." — October 2026, wonton chicken shio ramen.', source: R + 'B537396481/' },
        { text: '"Made with shamo and whole chicken, the clear chicken broth is exquisite, subtly fragrant with yuzu… The rare chashu is moist, chewy, and tender, while the smoked chashu is juicy." — October 2026, special chicken shio.', source: R + 'B537959004/' },
      ],
      japanese_sources_summary: '食べログ: ぐり虎 大阪なんばスカイオ店、大阪市中央区難波5-1-60 なんばスカイオ2F、毎日11:00〜23:00、カード・電子マネー可、QR不可、2024年9月1日開店。2026年10月の口コミ: 焼きすき飯に惹かれて、カウンターでQR注文、ワンタン鶏塩らぁ麺と炙り和牛すき焼きご飯、軍鶏と地鶏、塩、魚介の澄んだうま味、醤油らぁ麺は麺が硬めでおいしい、なんば駅直結、ミシュランガイド掲載という紹介、広い店内、特製鶏塩らぁ麺(軍鶏と丸鶏の清湯、柚子、レアチャーシューと燻製チャーシュー)、予約不可なので空いている時間に、期間限定の濃厚豚骨魚介、黒毛和牛の焼きすきご飯、鶏皮餃子、瀬戸内の牡蠣餃子、肉つけ麺(チャーシュー3種)、ひき肉とニラの辛いラーメン。',
      confidence: 'medium', sources: [TB, R + 'B537396481/', R + 'B537959004/', R + 'B538035007/', R + 'B538052822/', R + 'B537795329/', R + 'B538063393/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'chintan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Smooth noodles (October 2026); firm on the shoyu.' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Special chicken shio ramen (October 2026).',
      chashu: 'Rare chashu and smoked chashu (October 2026).',
      notable_toppings: ['yuzu', 'wontons', 'rare chashu', 'smoked chashu'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Namba Skyo\'s shamo-and-jidori shio: a clear, yuzu-scented chicken broth with wagyu sukiyaki rice on the side.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B537396481/', '"Gentle and soothing."'],
        oiliness: [R + 'B537795329/', '"Craving a light bowl of ramen" — placed low.'],
        clarity: [R + 'B537959004/', '"The clear chicken broth is exquisite."'],
        tare_strength: [R + 'B537396481/', '"The clear umami flavor from… salt, and seafood" — mid-scale.'],
        noodle_firmness: [R + 'B537959004/', '"A smooth texture that glides down easily"; shoyu "firm" — mid-scale.'],
        aroma_punch: [R + 'B537959004/', '"Subtly fragrant with yuzu" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B537396481/', R + 'B537959004/', R + 'B537795329/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering at the seat.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波5-1-60 なんばスカイオ 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM なんばスカイオ way/220185574 25m; GSI 大阪府大阪市中央区難波五丁目1番60号 (go) 129m (large complex lot); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537396481/', R + 'B538052822/', R + 'B538035007/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Special chicken shio ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'tokusei_shio'),
      it('', '', 'Wonton chicken shio ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'wonton'),
      it('', '', 'Meat tsukemen (three chashu)', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'niku_tsuke'),
      it('', '', 'Grilled black-wagyu sukiyaki rice', '', 'Rice', 'no', 'no', 'October 2026.', 'yakisuki'),
      it('', '', 'Chicken-skin gyoza', '', 'Sides', 'no', 'no', 'October 2026.', 'torikawa_gyoza'),
      it('', '', 'Setouchi oyster gyoza', '', 'Sides', 'no', 'no', 'October 2026.', 'kaki_gyoza'),
    ] }, {
    cuisine: '軍鶏と地鶏、塩、魚介の鶏塩らぁ麺・柚子とレアチャーシュー、燻製チャーシューの特製鶏塩・ワンタン鶏塩・醤油らぁ麺・期間限定の濃厚豚骨魚介・ひき肉の辛いラーメン・肉つけ麺(チャーシュー3種)・黒毛和牛の焼きすきご飯・鶏皮餃子・瀬戸内の牡蠣餃子・カウンターとテーブル',
    neighborhood: 'なんばスカイオ2F(難波5-1-60)。南海なんば駅直結',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子、すき焼きのたれ。',
    vegan_detail: 'ヴィーガンではありません。軍鶏と地鶏のスープ、チャーシュー、和牛。',
    notes: '[ラーメン・なんばスカイオの鶏塩と和牛の焼きすきご飯] 南海なんば駅直結、なんばスカイオ2階の広いラーメン店で、ミシュランガイドに載ったブランドだという口コミも。看板は軍鶏と地鶏に塩と魚介の澄んだ鶏塩で、やさしく染みる味。特製は柚子、しっとりしたレアチャーシュー、ジューシーな燻製チャーシュー付きで、ワンタン入りも人気。醤油は麺が硬めで、ひき肉の辛いラーメン、チャーシュー3種の肉つけ麺、期間限定の豚骨魚介も。人気のサイドは黒毛和牛の焼きすきご飯で、鶏皮餃子や瀬戸内の牡蠣餃子も。注文はQRコードで。予約不可なので空いている時間に。',
  });
}

// ================================================================ 帰ってきた宮田麺児
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27090229/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://miyata-menji.com/';
  const W = day(['11:00', '15:30'], ['17:30', '21:00']), E = day(['11:00', '15:00'], ['17:30', '21:00']);
  put({
    id: 'osaka_kaettekita_miyata_menji', name: '帰ってきた宮田麺児 (Kaettekita Miyata Menji)', category: 'OMNI',
    lat: 34.673822, lng: 135.504286, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: all three noodles are wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the vegetable-potage dip includes clams and seafood (September 2026).',
    hours_raw: 'Tue–Fri 11:00–15:30 (L.O. 15:00) and 17:30–21:00; Sat, Sun and holidays 11:00–15:00 and 17:30–21:00; closed Monday (Tabelog). Tablet ordering upstairs (October 2026; previously a ticket machine). Lines until mid-afternoon. Cards, e-money and QR accepted.',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-13-5 — between Shinsaibashi and Nagahoribashi Stns',
    cuisine: 'Tsukemen only: one vegetable-potage dip (vichyssoise base, clams, seafood, a little acidity) and a choice of three noodles · "Wheat Daiginjo" ridged wing noodles · "Wheat Espresso" medium-thick whole-wheat · "PM Tagliatelle" flat · ¥1,100 each (September 2026) · lemon to finish · 20 seats',
    website: OWN, gmaps: gm('帰ってきた宮田麺児 心斎橋'), menu_url: null,
    notes: "[Tsukemen · vegetable-potage tsukemen with three noodles to choose] A tsukemen shop between Shinsaibashi and Nagahoribashi, open since 2016 and produced, reviewers say, by Tetsuji of the comedy duo Shampoo Hat, with a line until mid-afternoon. There's one dip: a vegetable potage built on vichyssoise and blended vegetables, with clams and seafood, a little tomato acidity and a light finish. The choice is the noodle, each ¥1,100. Wheat Daiginjo is ridged wing noodles, Wheat Espresso medium-thick with the outer wheat left on, and PM Tagliatelle flat, kishimen-like noodles that cling to the dip. The noodles are the star, good enough to eat plain. Squeeze in lemon partway. One visitor didn't think it was worth the wait. Order on the tablet upstairs. Closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 February 2016 (Tabelog)', background: 'Produced by Tetsuji of the Kansai comedy duo Shampoo Hat (September–October 2026 reviews); official site miyata-menji.com.', philosophy: null, specialty: 'Vegetable-potage tsukemen; three noodle styles.',
      anecdotes: [
        { text: '"There\'s one type of dipping sauce, and you can choose from three types of noodles… the special wing noodles \'Wheat Daiginjo\' with ridges, the medium-thick \'Wheat Espresso\' made with the outer layer of wheat left intact, and the flat noodles \'PM Tagliatelle\'." — September 2026, ¥1,100 each.', source: R + 'B537250213/' },
        { text: '"The dipping sauce is rich yet has a strong acidity that keeps it from feeling heavy… the noodles are definitely the star of the show here." — October 2026.', source: R + 'B536766278/' },
      ],
      japanese_sources_summary: '公式 miyata-menji.com。食べログ: 帰ってきた宮田麺児、大阪市中央区東心斎橋1-13-5、火〜金11:00〜15:30(L.O.15:00)・17:30〜21:00、土日祝11:00〜15:00・17:30〜21:00、月曜休み、カード・電子マネー・QR決済可、20席(カウンター4、4人テーブル4)、2016年2月18日開店。2026年の口コミ(9〜10月): 1階の券売機から2階のタブレット注文に、大吟醸とエスプレッソ、お笑いコンビShampoo HatのTetsujiプロデュースの人気つけ麺店、14時半まで行列、タリアテッレ(きしめんのような平打ち麺、野菜のポタージュ)、つけ麺ブームの前からの店、麦の大吟醸、魚介とミニトマトのつけ汁、期待ほどではなく並ぶほどではないという声、なめらかでコシのある麺、酸味が強く重くない、レモンで味変、麺が主役、つけ汁は1種類で麺は3種類、羽根付きの「麦の大吟醸」、外皮を残した中太の「麦のエスプレッソ」、平打ちの「PMタリアテッレ」、各1,100円、ヴィシソワーズに野菜を合わせたポタージュ、蛤と魚介のうま味。',
      confidence: 'medium', sources: [TB, OWN, R + 'B537250213/', R + 'B536766278/', R + 'B535408853/', R + 'B532064995/', R + 'B185430655/', R + 'B536665330/'] },
    ramen: {
      broth_base: ['vegetable', 'gyokai'], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Three noodles to choose: ridged "Wheat Daiginjo", medium-thick whole-wheat "Wheat Espresso", flat "PM Tagliatelle" (September 2026).' },
      regional_style: [], sub_genre: ['tsukemen'],
      signature_bowl: 'Tsukemen with a choice of three noodles, ¥1,100 (September 2026).',
      chashu: null,
      notable_toppings: ['lemon', 'mini tomatoes'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Clam and seafood in the dip.' },
      pantheon: 'Shinsaibashi\'s vichyssoise tsukemen: one vegetable-potage dip, three house noodles to choose from.',
      profile: { richness: 3, oiliness: 2, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B536766278/', '"Rich yet has a strong acidity that keeps it from feeling heavy."'],
        oiliness: [R + 'B537250213/', '"Despite being a vegetable potage, it was light" — placed low.'],
        clarity: [R + 'B532064995/', '"A thick, refreshing vegetable base" — opaque.'],
        tare_strength: [R + 'B536766278/', '"A strong acidity" — mid-scale.'],
        noodle_firmness: [R + 'B536766278/', '"A smooth texture with a chewy bite."'],
        aroma_punch: [R + 'B537250213/', 'Sweetness of vegetables, clams and seafood — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B536766278/', R + 'B537250213/', R + 'B532064995/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering; queue at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-13-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目13番5号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537250213/'],
    price_note: 'Price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tsukemen with "Wheat Daiginjo" noodles', '¥1,100', 'Tsukemen', 'no', 'no', 'September 2026.', 'daiginjo'),
      it('', '', 'Tsukemen with "Wheat Espresso" noodles', '¥1,100', 'Tsukemen', 'no', 'no', 'September 2026.', 'espresso'),
      it('', '', 'Tsukemen with "PM Tagliatelle" noodles', '¥1,100', 'Tsukemen', 'no', 'no', 'September 2026.', 'tagliatelle'),
    ] }, {
    cuisine: 'つけ麺のみ・つけ汁は野菜のポタージュ1種類(ヴィシソワーズがベース、蛤、魚介、ほのかな酸味)で麺は3種類・羽根付きの「麦の大吟醸」・外皮を残した中太の「麦のエスプレッソ」・平打ちの「PMタリアテッレ」・各1,100円(2026年9月)・締めにレモン・20席',
    neighborhood: '東心斎橋1-13-5。心斎橋駅と長堀橋駅の間',
    gf_detail: 'グルテンフリーではありません。3種類の麺はすべて小麦。',
    vegan_detail: 'ヴィーガンではありません。野菜のポタージュのつけ汁に蛤や魚介(2026年9月)。',
    notes: '[つけ麺・麺を3種から選ぶ野菜ポタージュのつけ麺] 心斎橋と長堀橋の間にあるつけ麺の店で、2016年開店。口コミによるとお笑いコンビShampoo HatのTetsujiがプロデュースし、昼過ぎまで行列。つけ汁は1種類で、ヴィシソワーズと野菜を合わせたポタージュに蛤や魚介、トマトのほのかな酸味、後味は軽め。選ぶのは麺で、各1,100円。羽根付きの「麦の大吟醸」、外皮を残した中太の「麦のエスプレッソ」、きしめんのような平打ちでつけ汁がよく絡む「PMタリアテッレ」。主役は麺で、そのままでもおいしい。途中でレモンを搾って。並ぶほどではないという人も。注文は2階のタブレットで。月曜定休。',
  });
}

// ================================================================ 安徽牛肉板面
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27141528/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_anhui_gyuniku_hanmen_shimanouchi', name: '安徽牛肉板面 (Anhui Gyuniku Hanmen)', category: 'OMNI',
    lat: 34.669434, lng: 135.508042, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles (banmian, lamian, liangpi).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-bone broth, beef.',
    hours_raw: 'Tabelog lists no hours. An October 2024 review said it opened at 10:00 and served continuously; confirm before visiting. No cards or e-money; QR accepted (Tabelog). Menu in Chinese; staff explain how to order (March 2025).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimanouchi 2-10-9 — east of Nippombashi',
    cuisine: 'Anhui-style beef noodles · beef banmian (flat noodles) in a light beef-bone broth · beef lamian ¥880 with thin, medium or thick noodles · spice level to choose · liangpi · sausage topping · cheap side dishes · mostly Chinese clientele',
    website: null, gmaps: gm('安徽牛肉板面 島之内'), menu_url: null,
    notes: "[Chinese · Anhui beef noodles in Shimanouchi] A no-frills Anhui beef-noodle shop in Shimanouchi, east of Nippombashi, where most customers are Chinese and the menu is in Chinese. The staff will walk you through ordering. The signature is beef banmian, flat noodles in a light beef-bone broth that tastes almost like dashi. The red chilies floating in it aren't spicy, and you choose the heat level. Beef lamian is ¥880 (January 2026), with thin, medium or thick noodles. The liangpi has a garlic kick, and the side dishes are startlingly cheap. Tabelog lists no hours; an older review said it opens at 10 am and runs straight through, so check ahead.",
    chef_bio: { chef_name: null, roles: [], origin: 'Shimanouchi 2-chōme (Tabelog)', background: 'Anhui-style beef noodle shop with a mostly Chinese clientele (March 2025 review).', philosophy: null, specialty: 'Beef banmian.',
      anecdotes: [
        { text: '"I ordered the signature dish, \'Beef Hanmen.\' There are some red chili-like ingredients in it, but it\'s not spicy… The beef broth is light yet flavorful, with a taste similar to dashi." — October 2025.', source: R + 'B515203003/' },
        { text: '"Beef Lamian JPY 880. The beef bone broth is exceptional. You can choose from thin, medium, or thick noodles. You can also select the level of spiciness." — January 2026.', source: R + 'B520304536/' },
      ],
      japanese_sources_summary: '食べログ: 安徽牛肉板面、大阪市中央区島之内2-10-9、営業時間の記載なし、カード・電子マネー不可、QR可。口コミ(2024年10月〜2026年10月): 10時開店で通し営業(2024年10月)、昼は満席で相席、ソーセージのトッピング、客の9割が中国人でメニューも中国語、スタッフが注文の仕方を説明、小皿が安い、辛さは中で控えめ、涼皮(にんにくが効く、平たくやわらかい麺)、看板の牛肉板面(赤い唐辛子が入るが辛くない、あっさりした牛骨スープはだしのよう)、牛肉拉麺880円、麺は細・中・太から、辛さも選べる。',
      confidence: 'low', sources: [TB, R + 'B515203003/', R + 'B520304536/', R + 'B503689903/', R + 'B509266094/', R + 'B494835359/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu in Chinese; staff help with ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区島之内2-10-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区島之内二丁目10番9号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520304536/', R + 'B515203003/'],
    price_note: 'One price from a January 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Beef banmian (flat noodles)', '', 'Noodles', 'no', 'no', 'October 2025.', 'banmian'),
      it('', '', 'Beef lamian (thin / medium / thick)', '¥880', 'Noodles', 'no', 'no', 'January 2026.', 'lamian'),
      it('', '', 'Liangpi', '', 'Noodles', 'no', 'ask', 'June 2025.', 'liangpi'),
    ] }, {
    cuisine: '安徽風の牛肉麺・あっさりした牛骨スープの牛肉板面(平打ち麺)・細・中・太から選べる牛肉拉麺880円・辛さを選べる・涼皮・ソーセージのトッピング・安い小皿・中国人客が中心',
    neighborhood: '島之内2-10-9。日本橋の東',
    gf_detail: 'グルテンフリーではありません。小麦の麺(板面、拉麺、涼皮)。',
    vegan_detail: 'ヴィーガンではありません。牛骨スープ、牛肉。',
    notes: '[中華・島之内の安徽の牛肉麺] 日本橋の東、島之内にある飾り気のない安徽の牛肉麺の店で、客の多くは中国人、メニューも中国語。スタッフが注文の仕方を教えてくれます。看板は牛肉板面で、平打ち麺にだしのようなあっさりした牛骨スープ。浮かぶ赤い唐辛子は辛くなく、辛さは選べます。牛肉拉麺は880円(2026年1月)で、麺は細・中・太から。涼皮はにんにくが効き、小皿は驚くほど安い。食べログに営業時間の記載はなく、以前の口コミでは朝10時から通し営業とあるので、事前に確認を。',
  });
}

// ================================================================ 創作中華 縁
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27001838/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '23:59']);
  put({
    id: 'osaka_sosaku_chuka_enishi', name: '創作中華 縁 (Sosaku Chuka Enishi)', category: 'OMNI',
    lat: 34.674195, lng: 135.503283, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy- and bean-paste Sichuan sauces; noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: mapo with meat or fugu milt, seafood, chicken soup.',
    hours_raw: 'Mon–Sat 18:00–24:00; closed Sunday and holidays (Tabelog). Reservations essential — often full; phoning around 17:30 sometimes works (June 2026). Cards accepted; no e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-18-2, Yamamoto Bldg B1F — a short walk from Shinsaibashi Stn',
    cuisine: 'Creative Sichuan cooking, Tabelog 100 Chinese WEST (2021, 2023) · mapo tofu with real Sichuan numbing · Chaozhou-style kanpachi sashimi · soft-shell crab in chili sauce · special mayonnaise shrimp · fluffy egg with shrimp · squid · dan dan noodles · gentle chicken soup noodles to finish · courses and à la carte · 12 counter seats',
    website: null, gmaps: gm('創作中華 縁 東心斎橋'), menu_url: null,
    notes: "[Chinese · a Tabelog 100 creative Sichuan counter in a Higashi-Shinsaibashi basement] A dim, stylish 12-seat basement counter, twice named to Tabelog's Chinese WEST 100, serving authentic Sichuan cooking with creative ingredients. Booking is hard; one diner got in by phoning at 5:30 pm. The mapo tofu is the must-order: properly spicy, fragrant and numbing with Sichuan pepper, and one course made it with fugu milt. A Chaozhou-style kanpachi sashimi shows the range, alongside soft-shell crab in chili sauce, mayonnaise shrimp, fluffy egg with shrimp, and squid one diner couldn't imagine bettering. A clear, gentle chicken soup noodle closes the night. Expect about ¥10,000 with drinks; it gets warm near the kitchen. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Higashi-Shinsaibashi basement (Tabelog)', background: 'Tabelog 100 Chinese WEST 2021 and 2023 (Tabelog).', philosophy: null, specialty: 'Mapo tofu; creative Sichuan.',
      anecdotes: [
        { text: '"I started with the must-try Mapo Tofu. One bite revealed a delightful spiciness accompanied by the fragrance and numbing sensation of Sichuan pepper, delivering an authentic taste." — June 2026.', source: R + 'B532574461/' },
        { text: '"The Kanpachi was prepared in a way reminiscent of Chaozhou-style raw fish… the Mapo Tofu made with fugu soft roe." — June 2026, course.', source: R + 'B529710773/' },
      ],
      japanese_sources_summary: '食べログ: 創作中華 縁、大阪市中央区東心斎橋1-18-2 山本ビルB1F、月〜土18:00〜24:00、日・祝休み、カード可、電子マネー・QR不可、12席(カウンターのみ)、百名店(中国料理WEST 2021・2023)。2026年の口コミ(6〜10月): ソフトシェルクラブのチリソース、ザーサイ、コースで日本一本格的な中華という声、潮州風のカンパチの刺身、担担麺は普通、白子の麻婆豆腐、電話予約が取りにくく17時半に電話して入れた、花椒の香りとしびれの本格麻婆豆腐、やさしい鶏湯麺(澄んだスープ)、22時に電話したら満席、カウンターのみで常連が多い、麻婆豆腐と海老のふわふわ卵、値段は高め、薄暗くおしゃれ、厨房が近く暑い、イカが絶品、飲んで1万円ほど、百名店の創作中華、地下の隠れ家、カンパチの中華風刺身、特製エビマヨ。',
      confidence: 'medium', sources: [TB, R + 'B532574461/', R + 'B529710773/', R + 'B533301442/', R + 'B533974507/', R + 'B537708469/', R + 'B436603155/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; phone reservations.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-18-2 山本ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目18番2号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532574461/', R + 'B537708469/'],
    price_note: 'About ¥10,000 per person with drinks (August 2026).', last_checked: TODAY, items: [
      it('麻婆豆腐', 'mābo dōfu', 'Mapo tofu', '', 'Sichuan', 'no', 'no', 'June–July 2026.', 'mapo'),
      it('', '', 'Chaozhou-style kanpachi sashimi', '', 'Cold plates', 'ask', 'no', 'October 2026.', 'kanpachi'),
      it('', '', 'Soft-shell crab in chili sauce', '', 'Seafood', 'no', 'no', 'October 2026.', 'softshell'),
      it('', '', 'Special mayonnaise shrimp', '', 'Seafood', 'no', 'no', 'October 2026.', 'ebimayo'),
      it('', '', 'Chicken soup noodles', '', 'Noodles', 'no', 'no', 'June 2026.', 'tori_soba'),
    ] }, {
    cuisine: '創作四川料理、食べログ百名店(中国料理WEST 2021・2023)・本格的な花椒のしびれの麻婆豆腐・潮州風のカンパチの刺身・ソフトシェルクラブのチリソース・特製エビマヨ・海老のふわふわ卵・イカ・担担麺・締めのやさしい鶏湯麺・コースと単品・カウンター12席',
    neighborhood: '東心斎橋1-18-2 山本ビルB1F。心斎橋駅から歩いてすぐ',
    gf_detail: '実際にはグルテンフリーではありません。醤油や豆板醤の四川のたれ、麺。',
    vegan_detail: 'ヴィーガンではありません。肉や白子の麻婆、魚介、鶏のスープ。',
    notes: '[中華・東心斎橋の地下の百名店の創作四川] 薄暗くおしゃれな地下の12席のカウンターで、食べログ中国料理WEST百名店に2度選出、創作的な食材を使った本格四川料理。予約は取りにくいものの、17時半に電話して入れたという人も。必ず頼みたいのは麻婆豆腐で、しっかり辛く、花椒の香りとしびれ。コースでは白子の麻婆も。潮州風のカンパチの刺身が幅の広さを見せ、ソフトシェルクラブのチリソース、エビマヨ、海老のふわふわ卵、これ以上は想像できないというイカも。締めは澄んだやさしい鶏湯麺。飲んで1万円ほど。厨房の近くは暑くなりがち。日曜定休。',
  });
}

save();
