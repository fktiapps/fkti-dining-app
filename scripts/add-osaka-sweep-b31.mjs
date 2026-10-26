// Osaka sweep (2-mile circle around Dotonbori), batch 31 — ramen phase, nearest first (all OMNI).
//   + つけ麺 雀 アメ村本店 (niboshi tsukemen since 2010; chili noodles)
//   + 韓湯 みっちゃん (yukgaejang noodles at lunch — filed 'other')
//   + 大阪わぎゅうらぁめん (wagyu-and-ago ramen, opened 29 Jun 2026; one review → probable)
//   + 中華旬彩 森本 (Tabelog 100 Chinese; yodare chicken, mapo, dan dan — filed 'other')
// Skipped: 麺乃 ヒロミヤ 27151435 — replaced by Osaka Wagyu Ramen at the same address (July 2026 review).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, skip, save } = openCitySweep('osaka', TODAY, 31);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27151435', 'Closed: Osaka Wagyu Ramen opened on 29 June 2026 "at the former site of Men no Hiromiya" (July 2026 review, 27157706); Hiromiya\'s newest review is December 2025.');

// ================================================================ つけ麺 雀 アメ村本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27050555/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_tsukemen_suzume_amemura', name: 'つけ麺 雀 アメ村本店 (Tsukemen Suzume Amemura Honten)', category: 'OMNI',
    lat: 34.671195, lng: 135.49786, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles (chili noodles too).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: niboshi and seafood dipping broth, chashu.',
    hours_raw: 'Daily 11:30–16:30 and 18:00–22:00; open year-round, with occasional temporary closures (Tabelog). Cash only — no cards, e-money or QR (Tabelog). Noodles 200 g or 300 g at the same price (Tabelog). Queues are common.',
    hours: ALL(day(['11:30', '16:30'], ['18:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 2-11-11, Amerika-mura — 2 min from Yotsubashi Stn (exit 5)',
    cuisine: 'Niboshi-based tsukemen with a smooth, rich dipping broth · spicy tsukemen ¥1,000 with heat levels · chili-infused noodles +¥30 · special spicy tsukemen ¥1,300 with thick chashu · thick, chewy noodles, 200 g or 300 g for the same price · vinegar and chili oil · 12 counter seats',
    website: 'http://suzume-group.co.jp/suzume/', gmaps: gm('つけ麺 雀 アメ村本店'), menu_url: null,
    notes: "[Ramen · Amemura's original niboshi tsukemen] Suzume's 12-seat counter in Amerika-mura has been pouring tsukemen since 2010, and people still queue outside. The dipping broth is niboshi-based but smooth and deep. One reviewer, back after 15 years in Tokyo, still calls it the original taste of tsukemen. It's rich with seafood umami, for thick, chewy noodles you can have at 200 g or 300 g for the same price. The cult order is the spicy tsukemen (¥1,000), with heat levels; level 2 is rich rather than fierce. Swap in the red, chili-infused noodles for ¥30. The special (¥1,300) adds thick, tender chashu. Mix, taste, then add vinegar and chili oil. Some long-time regulars feel it isn't quite what it was. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 2 June 2010 (Tabelog); the Amemura main shop', background: 'Suzume group (suzume-group.co.jp).', philosophy: null, specialty: 'Niboshi tsukemen; spicy tsukemen with chili noodles.',
      anecdotes: [
        { text: '"While it has a niboshi (dried sardine) base, it has a smooth texture and deep flavor… this still remains the original flavor of tsukemen for me." — October 2026.', source: R + 'B537318729/' },
        { text: '"The spicy Tsukemen for JPY 1000, with a level 3 spiciness and an additional JPY 30 for the chili noodles… complemented by the specially made thick noodles infused with chili." — October 2026.', source: R + 'B537776392/' },
      ],
      japanese_sources_summary: '食べログ: つけ麺 雀 アメ村本店、大阪市中央区西心斎橋2-11-11、06-6211-1174、予約不可、毎日11:30〜16:30・18:00〜22:00、年中無休(臨時休業あり)、カード・電子マネー・QR不可、12席(カウンターのみ)、禁煙、2010年6月2日開店、麺の量は小200g・中300gで同じ値段、公式 suzume-group.co.jp。2026年の口コミ(5〜10月): 煮干しベースなのになめらかで深い味、東京に15年住んでもこれがつけ麺の原点、東京より2割ほど安い、辛つけ麺1,000円と辛さ3、唐辛子練り込み麺に変更30円、特製辛つけ麺1,300円(厚いチャーシュー)、辛さ2でも濃くておいしい、もちもちの太麺、まず混ぜて食べてから酢とラー油、魚介のうま味の濃いつけ汁、店の前に行列、約15年通う常連は味が少し変わったという声。',
      confidence: 'medium', sources: [TB, R + 'B537318729/', R + 'B537776392/', R + 'B538082200/', R + 'B537412132/', R + 'B536908675/', R + 'B41826678/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Specially made thick, chewy noodles; chili-infused red noodles +¥30; 200 g or 300 g at one price (2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'niboshi'],
      signature_bowl: 'Spicy tsukemen ¥1,000 (October 2026).',
      chashu: 'Thick, tender chashu on the special (October 2026).',
      notable_toppings: ['chili noodles (+¥30)', 'vinegar', 'chili oil'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Niboshi broth.' },
      pantheon: 'Amemura\'s 2010 original: a smooth niboshi dip and red chili noodles.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536908675/', '"A rich and flavorful dipping sauce… the umami of the seafood and the deep flavors fill your mouth."'],
        oiliness: [R + 'B537318729/', '"A smooth texture" — oil not singled out; mid-scale (inferred).'],
        clarity: [R + 'B536908675/', 'Thick dipping sauce that coats the noodles — opaque (inferred).'],
        tare_strength: [R + 'B537412132/', '"The broth has a strong spiciness, yet the rich umami flavor shines through."'],
        noodle_firmness: [R + 'B538082200/', '"The chewy thick noodles paired perfectly with the dipping sauce."'],
        aroma_punch: [R + 'B537776392/', '"The rich dipping sauce packs a punch with its intense spiciness."'],
      },
      confidence: 'medium', sources: [R + 'B537318729/', R + 'B536908675/', R + 'B537776392/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; cash only; queues.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-11-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目11番11号 (go) 7m; OSM つけ麺 雀 アメ村本店 node/13422371801 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537776392/', R + 'B538082200/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Spicy tsukemen', '¥1,000', 'Tsukemen', 'no', 'no', 'October 2026.', 'kara_tsuke'),
      it('', '', 'Special spicy tsukemen', '¥1,300', 'Tsukemen', 'no', 'no', 'October 2026.', 'tokusei'),
      it('', '', 'Change to chili-infused noodles', '+¥30', 'Options', 'no', 'no', 'October 2026.', 'chili_noodle'),
      it('つけ麺', 'tsukemen', 'Tsukemen', '', 'Tsukemen', 'no', 'no', 'October 2026.', 'tsukemen'),
    ] }, {
    cuisine: '煮干しベースのなめらかで濃いつけ汁のつけ麺・辛さを選べる辛つけ麺1,000円・唐辛子練り込み麺30円・厚いチャーシューの特製辛つけ麺1,300円・もちもちの太麺、200gか300gで同じ値段・酢とラー油・カウンター12席',
    neighborhood: '西心斎橋2-11-11、アメリカ村。四ツ橋駅(5番出口)から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺(唐辛子麺も)。',
    vegan_detail: 'ヴィーガンではありません。煮干しと魚介のつけ汁、チャーシュー。',
    notes: '[ラーメン・アメ村の元祖煮干しつけ麺] アメリカ村にある雀のカウンター12席の店で、2010年からつけ麺を出し続け、今も店の前に行列。つけ汁は煮干しベースなのになめらかで深く、東京に15年住んで戻った人が今もこれがつけ麺の原点と言うほど。魚介のうま味が濃く、もちもちの太麺は200gでも300gでも同じ値段。定番は辛さを選べる辛つけ麺(1,000円)で、辛さ2でも辛さより濃さが勝つそう。30円で真っ赤な唐辛子練り込み麺に。特製(1,300円)は厚くやわらかいチャーシュー付き。まず混ぜて食べ、それから酢とラー油を。長年の常連には昔ほどではないという声も。現金のみ。',
  });
}

// ================================================================ 韓湯 みっちゃん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27121108/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '15:00']);
  put({
    id: 'osaka_kanyu_micchan', name: '韓湯 みっちゃん (Kanyu Micchan)', category: 'OMNI',
    lat: 34.665685, lng: 135.49948, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in the yukgaejang; seasoned sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef yukgaejang broth with meat; harami (outside-skirt) rice bowl.',
    hours_raw: 'Lunch 11:30–15:00; closed Thursday (Tabelog). Reservations for dinner only; a reviewer notes yakiniku and side dishes in the evening, but Tabelog lists no dinner hours. Cash only. Smoking allowed (Tabelog).',
    hours: { 0: L, 1: L, 2: L, 4: L, 5: L, 6: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Namba 4-3-13, Fuji Bldg 1F ("Ura-Namba"), behind Hotel Royal Classic Osaka — 3 min from Namba Stn',
    cuisine: 'Korean soup-noodle lunch · yukgaejang noodles ¥1,200, spicy and sweet with chunky beef and vegetables on thin noodles · with seasoned egg · set with a grilled rare harami (outside-skirt) rice bowl, small or large · Korean cold noodles · 10 seats',
    website: null, gmaps: gm('韓湯 みっちゃん 難波'), menu_url: null,
    notes: "[Korean · yukgaejang noodles behind Hotel Royal Classic] A 10-seat Korean lunch counter in Ura-Namba, on the street behind Hotel Royal Classic Osaka, open since 2020 and often with a line. Everyone orders the yukgaejang noodles (¥1,200, October 2026): a spicy-sweet beef soup packed with chunky meat and vegetables on thin noodles, hot enough to make you sweat. Add a soft-boiled egg to cool your tongue. The set adds a grilled rare harami rice bowl that some think beats the noodles. The small size is bigger than it looks, and you can tip the leftover rice into the soup. Korean cold noodles suit the spice-shy. Cash only, and smoking is allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 December 2020 (Tabelog)', background: 'A small Korean soup-and-noodle shop; the evening offers yakiniku and side dishes per an October 2026 review.', philosophy: null, specialty: 'Yukgaejang noodles; grilled harami rice bowl.',
      anecdotes: [
        { text: '"The meat was chunky and quite generous. It was spicy and sweet, making me sweat… Delicious Yukgaejang Noodles!" — October 2026, yukgaejang noodles ¥1,200.', source: R + 'B537525289/' },
        { text: '"The rare outside skirt rice bowl was so delicious that I could have made it my main dish." — July 2026.', source: R + 'B531182484/' },
      ],
      japanese_sources_summary: '食べログ: 韓湯 みっちゃん、大阪市中央区難波4-3-13 富士ビル1F、予約はディナーのみ、月〜水・金〜日11:30〜15:00、木曜休み、カード・電子マネー・QR不可、チャージなし、10席、喫煙可、2020年12月21日開店。2026年の口コミ(6〜10月): 裏なんば、ホテルロイヤルクラシック大阪の裏、行列ができる、ユッケジャン麺1,200円(肉がごろごろで多め、甘辛くて汗が出る)、味玉付き、炙りレアハラミ丼のセット(小・大、小でもご飯がぎっしり)、残ったご飯にスープをかけて、半熟玉子で辛さがやわらぐ、細麺、韓国冷麺もあり、夜は焼肉と一品料理、インスタで知った。',
      confidence: 'medium', sources: [TB, R + 'B537525289/', R + 'B531182484/', R + 'B529235017/', R + 'B535770976/', R + 'B536152683/', R + 'B537482559/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-3-13 富士ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目3番13号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537525289/', R + 'B529235017/'],
    price_note: 'Price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Yukgaejang noodles', '¥1,200', 'Noodles', 'no', 'no', 'October 2026.', 'yukgaejang'),
      it('', '', 'Yukgaejang noodles with seasoned egg', '', 'Noodles', 'no', 'no', 'June–October 2026.', 'yukgaejang_egg'),
      it('', '', 'Set with grilled rare harami rice bowl (small or large)', '', 'Sets', 'no', 'no', 'September–October 2026.', 'harami_set'),
      it('', '', 'Korean cold noodles', '', 'Noodles', 'no', 'no', 'October 2026 (menu).', 'naengmyeon'),
    ] }, {
    cuisine: '韓国のスープ麺のランチ・ユッケジャン麺1,200円(甘辛く、ごろごろの牛肉と野菜、細麺)・味玉付き・炙りレアハラミ丼(小・大)のセット・韓国冷麺・10席',
    neighborhood: '難波4-3-13 富士ビル1F(裏なんば)、ホテルロイヤルクラシック大阪の裏。なんば駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。ユッケジャンは小麦の麺、味付けのたれ。',
    vegan_detail: 'ヴィーガンではありません。牛肉入りのユッケジャンのスープ、ハラミ丼。',
    notes: '[韓国料理・ホテルロイヤルクラシック裏のユッケジャン麺] 裏なんば、ホテルロイヤルクラシック大阪の裏手にある10席の韓国料理のランチの店で、2020年開店、よく行列ができます。みんなが頼むのはユッケジャン麺(1,200円、2026年10月)で、甘辛い牛のスープにごろごろの肉と野菜、細麺、汗が出るほどの辛さ。半熟玉子を足すと舌が落ち着きます。セットの炙りレアハラミ丼は麺よりおいしいという声も。小サイズでも見た目以上の量で、残ったご飯はスープに入れて。辛いのが苦手なら韓国冷麺を。現金のみ、喫煙可。',
  });
}

// ================================================================ 大阪わぎゅうらぁめん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27157706/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '23:00']);
  put({
    id: 'osaka_wagyu_ramen_nipponbashi', name: '大阪わぎゅうらぁめん (Chiyomatsu\'s Osaka Wagyu Ramen)', category: 'OMNI',
    lat: 34.667429, lng: 135.505738, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-bone and flying-fish broth, wagyu.',
    hours_raw: 'Mon, Tue, Thu, Fri, Sat 18:00–23:00; closed Wednesday and Sunday (Tabelog). Opened 29 June 2026 (review). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nippombashi 1-3-13 — about a minute from Nippombashi Stn (Kintetsu Nippombashi)',
    cuisine: 'Wagyu ramen served course-style · Osaka wagyu ramen 100 g ¥3,900, 250 g ¥6,900, 450 g ¥10,900 · chicken-bone and flying-fish (ago) shoyu broth · medium-thin wavy noodles from Taiyo Seimenjo · an ago-dashi starter with gold leaf · grilled flying fish ground to powder at the table · wagyu finished on a small teppan',
    website: null, gmaps: gm('大阪わぎゅうらぁめん 日本橋'), menu_url: null,
    notes: "[Ramen · course-style wagyu ramen in Nippombashi] A new evening ramen counter that opened on 29 June 2026 in the former Men no Hiromiya space by Nippombashi. It is a new concept from the Dotonbori tonkatsu shop \"Ganso 5cm Katsu Don\" (review), and the price matches the show: ¥3,900 for 100 g of wagyu, up to ¥10,900 for 450 g. It runs like a little course. A flying-fish dashi with gold leaf comes first. Then a grilled flying fish is cut with scissors and ground into powder in a mortar, and the chef adds it to your bowl. The ramen is a low-viscosity chicken-bone and flying-fish shoyu, light and smooth with a mild seafood sweetness, on chewy medium-thin wavy noodles from Taiyo Seimenjo. The seasoned wagyu flank arrives on a small teppan over a burner so you can cook it to your liking. Only one review so far (July 2026).",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 June 2026 at the former site of Men no Hiromiya (July 2026 review)', background: 'A new concept from "Ganso 5cm Katsu Don Osaka Tonkatsu" in Dotonbori (July 2026 review); the review gives the name as "CHIYOMATSU\'S OSAKA WAGYU RAMEN".', philosophy: null, specialty: 'Wagyu ramen with flying-fish broth.',
      anecdotes: [
        { text: '"The broth is made from chicken bones and flying fish, resulting in a low-viscosity soy sauce soup with a mild seafood flavor and a hint of sweetness." — July 2026.', source: R + 'B531293047/' },
        { text: '"The wagyu is served on a teppan heated with solid fuel, allowing you to enjoy it at your preferred doneness." — July 2026.', source: R + 'B531293047/' },
      ],
      japanese_sources_summary: '食べログ: 大阪わぎゅうらぁめん、大阪市中央区日本橋1-3-13、06-6282-7091、月・火・木・金・土18:00〜23:00、水・日休み、カード・電子マネー・QR決済可、カウンター席。2026年7月の口コミ(1件): 6月29日開店、道頓堀の「Ganso 5cm Katsu Don Osaka Tonkatsu」の新業態、麺乃ヒロミヤの跡地、大阪わぎゅうらぁめん100g 3,900円・250g 6,900円・450g 10,900円、鶏ガラとあごのとろみの少ない醤油スープ(やさしい魚介とほのかな甘み)、Taiyo Seimenjoの中細ちぢれ麺、味付けした牛のフランク、提供の流れ: 金箔入りのあごだし、焼きあごをはさみで切ってすり鉢で粉にし、仕上げに投入、和牛は固形燃料の鉄板で好みの焼き加減に。',
      confidence: 'low', sources: [TB, R + 'B531293047/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium-thin', shape: 'wavy', hydration: null, handmade: false, notes: 'Medium-thin wavy noodles from Taiyo Seimenjo, chewy (July 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Osaka wagyu ramen, 100 g ¥3,900 (July 2026).',
      chashu: 'Seasoned wagyu flank instead of chashu, finished on a small teppan (July 2026).',
      notable_toppings: ['wagyu flank', 'ground grilled flying fish (ago) powder'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and fish broth.' },
      pantheon: 'Nippombashi\'s wagyu ramen show: ago powder ground at the counter, wagyu seared on a burner.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B531293047/', '"A smooth and light yet rich taste."'],
        oiliness: [R + 'B531293047/', '"A low-viscosity soy sauce soup" — placed low-mid.'],
        clarity: [R + 'B531293047/', 'Low-viscosity shoyu; clarity not described — mid-scale (inferred).'],
        tare_strength: [R + 'B531293047/', '"A mild seafood flavor and a hint of sweetness" — mid-scale.'],
        noodle_firmness: [R + 'B531293047/', '"They cling well to the soup and have a nice chewiness."'],
        aroma_punch: [R + 'B531293047/', 'Fresh-ground grilled flying-fish powder added at the counter — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B531293047/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter; served course-style.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋1-3-13',
    existence: { status: 'probable', checked: TODAY, note: 'Opened 29 June 2026; a single review (July 2026); Tabelog listing current.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋一丁目3番13号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531293047/'],
    price_note: 'Regular prices from a July 2026 review (opening discounts not shown).', last_checked: TODAY, items: [
      it('', '', 'Osaka wagyu ramen, 100 g', '¥3,900', 'Ramen', 'no', 'no', 'July 2026.', 'w100'),
      it('', '', 'Osaka wagyu ramen, 250 g', '¥6,900', 'Ramen', 'no', 'no', 'July 2026.', 'w250'),
      it('', '', 'Osaka wagyu ramen, 450 g', '¥10,900', 'Ramen', 'no', 'no', 'July 2026.', 'w450'),
    ] }, {
    cuisine: 'コース仕立ての和牛ラーメン・大阪わぎゅうらぁめん100g 3,900円、250g 6,900円、450g 10,900円・鶏ガラとあごの醤油スープ・Taiyo Seimenjoの中細ちぢれ麺・最初に金箔入りのあごだし・焼きあごを目の前で粉に・和牛は小さな鉄板で仕上げ',
    neighborhood: '日本橋1-3-13。近鉄日本橋駅からすぐ',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油スープ。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラとあごのスープ、和牛。',
    notes: '[ラーメン・日本橋のコース仕立ての和牛ラーメン] 2026年6月29日、日本橋の麺乃ヒロミヤの跡に開店した夜だけのラーメンのカウンター。道頓堀の「Ganso 5cm Katsu Don Osaka Tonkatsu」の新業態(口コミ)で、値段も演出に見合い、和牛100gで3,900円、450gで10,900円まで。小さなコースのように進み、まず金箔入りのあごだし。次に焼いたあごをはさみで切り、すり鉢で粉にして、仕上げに丼へ。ラーメンはとろみの少ない鶏ガラとあごの醤油で、軽くなめらか、やさしい魚介の甘み。麺はTaiyo Seimenjoのもちもちの中細ちぢれ麺。味付けした和牛は固形燃料の小さな鉄板で届き、好みの焼き加減に。口コミはまだ1件(2026年7月)。',
  });
}

// ================================================================ 中華旬彩 森本
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27086074/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_chuka_shunsai_morimoto', name: '中華旬彩 森本 (Chuka Shunsai Morimoto)', category: 'OMNI',
    lat: 34.672835, lng: 135.501653, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy-based Chinese sauces, xiao long bao, noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: yodare chicken, mapo tofu with meat, egg-drop soup. A water-spinach salad exists, but its sauce is not described.',
    hours_raw: 'Daily 11:30–15:00 (last entry 14:30) and 18:00–22:00 (food L.O. 21:00, drinks 21:30) (Tabelog). Lunch is walk-in only, with long queues; arriving after 14:00 helps. Dinner reservations taken, cancelled if 15 minutes late without notice. Small parties may share a table for six. Cards and QR accepted; no e-money.',
    hours: ALL(day(['11:30', '15:00'], ['18:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 1-4-14, Enkyo Bldg B1F — 3 min from Shinsaibashi Stn (exit 5)',
    cuisine: 'Chinese, Tabelog 100 (Chinese WEST 2021, 2023, 2024) · yodare chicken piled with cilantro in a heavy sesame-chili sauce · mapo tofu bubbling in a clay pot, as a lunch set · dan dan noodles · spicy chicken · xiao long bao · bean-sprout yakisoba with yellow chives · lunch sets with soup, sides, almond jelly and rice refills · 48 seats',
    website: 'http://media-up.jp/morimoto/', gmaps: gm('中華旬彩 森本 心斎橋'), menu_url: null,
    notes: "[Chinese · Tabelog 100 yodare chicken and mapo in a Shinsaibashi basement] A 48-seat basement Chinese restaurant off Shinsaibashi-suji, on Tabelog's Chinese 100 list in 2021, 2023 and 2024, and the lunch line proves it. The dish everyone orders is yodare chicken, buried under cilantro in a sesame-thick, spicy sauce you toss like a salad; ask for green onion if you don't like cilantro. The mapo tofu arrives bubbling in a clay pot, authentic and properly spicy. The dan dan noodles are rich. Lunch sets come with egg-drop soup, side dishes good enough to be mains, almond jelly and free rice refills. Go after 2 pm to skip the queue. Dinner adds xiao long bao, spicy chicken and water spinach (draft beer is ¥950), and booking is wise.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 24 June 2015 (Tabelog)', background: 'Tabelog 100 Chinese WEST 2021, 2023, 2024 (Tabelog).', philosophy: null, specialty: 'Yodare chicken; mapo tofu.',
      anecdotes: [
        { text: '"The Yodare Chicken is absolutely delicious! It comes piled high with cilantro, and I love mixing it with the sauce like a salad. Just look at the amount of sesame in this sauce!" — October 2026.', source: R + 'B522631502/' },
        { text: '"Since it comes with cilantro, if you\'re not a fan, you can ask to switch it for green onions… To finish off, the Mapo Tofu was served bubbling in a clay pot—absolutely the best." — October 2026.', source: R + 'B537294714/' },
      ],
      japanese_sources_summary: '食べログ: 中華旬彩 森本、大阪市中央区心斎橋筋1-4-14 燕京ビルB1F、050-5589-2665(予約)・06-6252-6022、ランチは予約不可、予約は無連絡で15分遅れると取消、毎日11:30〜15:00(最終入店14:30)・18:00〜22:00(料理L.O.21:00、ドリンクL.O.21:30)、カード・QR決済可、電子マネー不可、48席(少人数は6人席の相席あり)、禁煙、2015年6月24日開店、百名店(中国料理WEST 2021・2023・2024)、サイト media-up.jp/morimoto。2026年の口コミ(2〜10月): よだれ鶏が一番人気(パクチー山盛り、ごまたっぷりの辛いたれ)、パクチーはねぎに変更可、ランチは行列、14時過ぎは並ばずに、ふわふわの玉子スープ、杏仁豆腐、ご飯おかわり可、土鍋の麻婆豆腐(定食も)、辛い鶏、空芯菜、小籠包、生ビール950円、もやし焼きそば(黄ニラ)、担々麺は濃厚、2人でビール1本を分けて1人2,000円。',
      confidence: 'medium', sources: [TB, R + 'B522631502/', R + 'B537294714/', R + 'B537305071/', R + 'B537407156/', R + 'B537488212/', R + 'B537727394/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue at lunch; possible shared tables.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-4-14 燕京ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated February–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目4番14号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B522631502/', R + 'B537294714/', R + 'B537727394/'],
    price_note: 'Dish prices not captured; draft beer ¥950 (October 2026).', last_checked: TODAY, items: [
      it('', '', 'Yodare chicken', '', 'Chinese', 'no', 'no', 'October 2026.', 'yodare'),
      it('麻婆豆腐', 'mābo dōfu', 'Mapo tofu (clay pot; lunch set)', '', 'Chinese', 'no', 'no', 'October 2026.', 'mapo'),
      it('担々麺', 'tantanmen', 'Dan dan noodles', '', 'Noodles', 'no', 'no', 'October 2026.', 'tantan'),
      it('', '', 'Bean-sprout yakisoba with yellow chives (lunch)', '', 'Noodles', 'no', 'no', 'October 2026.', 'moyashi_yakisoba'),
      it('', '', 'Xiao long bao', '', 'Dim sum', 'no', 'no', 'October 2026.', 'xlb'),
      it('', '', 'Draft beer', '¥950', 'Drinks', 'no', 'ask', 'October 2026.', 'beer'),
    ] }, {
    cuisine: '中国料理、食べログ百名店(中国料理WEST 2021・2023・2024)・パクチー山盛りでごまたっぷりの辛いたれのよだれ鶏・土鍋でぐつぐつの麻婆豆腐(ランチの定食も)・担々麺・辛い鶏・小籠包・黄ニラのもやし焼きそば・スープ、小鉢、杏仁豆腐、ご飯おかわり付きのランチ・48席',
    neighborhood: '心斎橋筋1-4-14 燕京ビルB1F。心斎橋駅(5番出口)から徒歩3分',
    gf_detail: '実際にはグルテンフリーではありません。醤油ベースの中華のたれ、小籠包、麺。',
    vegan_detail: 'ヴィーガンではありません。よだれ鶏、肉入りの麻婆豆腐、玉子スープ。空芯菜のサラダもありますが、たれの中身は不明。',
    notes: '[中華・心斎橋の地下の百名店のよだれ鶏と麻婆] 心斎橋筋から少し入った地下にある48席の中国料理店で、食べログの中国料理百名店に2021、2023、2024年と選ばれ、昼の行列がそれを物語ります。誰もが頼むのはよだれ鶏で、パクチーに埋もれ、ごまがたっぷりの辛いたれをサラダのように混ぜて。パクチーが苦手ならねぎに変えてもらえます。麻婆豆腐は土鍋でぐつぐつと届き、本格的でしっかり辛い。担々麺は濃厚。ランチの定食には玉子スープ、主菜になりそうな小鉢、杏仁豆腐、ご飯のおかわり付き。並ばずに入るなら14時過ぎに。夜は小籠包、辛い鶏、空芯菜も(生ビール950円)、予約がおすすめ。',
  });
}

save();
