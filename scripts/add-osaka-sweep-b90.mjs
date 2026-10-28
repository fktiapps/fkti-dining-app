// Osaka sweep (2-mile circle around Dotonbori), batch 90 — ramen phase (all OMNI).
//   + 中華蕎麦 神山 HONMACHI (kombu-water tsukemen, flying-fish shoyu, hand-kneaded noodles; opened June 2026)
//   + 尾道中華そば 大福 (Onomichi-style back-fat shoyu, ¥1,000 set with free rice refills; Tanimachi 6-chome)
//   + 満ち汐のロマンス (oyster-and-dim-sum standing izakaya, ¥100 oysters at happy hour → other)
//   + HAKATAラーメン チカッパ (Hakata tonkotsu by day, motsunabe izakaya at night; Sakaisuji-Honmachi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 90);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 中華蕎麦 神山 HONMACHI
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27156032/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['17:30', '21:00']);
  put({
    id: 'osaka_chuka_soba_shinzans_honmachi', name: '中華蕎麦 神山 HONMACHI (Chuka Soba Shinzans Honmachi)', category: 'OMNI',
    lat: 34.682516, lng: 135.502809, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles; soy-based dipping sauce; wontons.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: grilled flying-fish broth, shrimp and meat wontons, chashu.',
    hours_raw: 'Mon–Fri 11:00–15:00 and 17:30–21:00; closed Saturdays and Sundays; hours may change (Tabelog). Ticket machine outside the door; cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minamihonmachi 3-2-21 — 2 min from Honmachi Stn, 5 min from Sakaisuji-Hommachi Stn',
    cuisine: 'Kombu-water tsukemen ¥920: noodles in kombu water, eaten first with sea or seaweed salt, then dipped in a sharp soy dip · special tsukemen with two kinds of wonton · shoyu soba: seafood shoyu fragrant with grilled flying fish · clear shio soba with hand-kneaded curly noodles · hand-kneaded abura soba · house-made high-hydration flat wavy noodles · shrimp and meat wontons, rare shoulder chashu, soft-boiled egg · grilled chashu rice bowl · paper aprons · 15 counter seats',
    website: null, gmaps: gm('中華蕎麦 神山 HONMACHI'), menu_url: null,
    notes: "[Ramen · kombu-water tsukemen and flying-fish shoyu by Honmachi] A clean counter shop between Honmachi and Sakaisuji-Honmachi with a Japanese-restaurant front, open since June 2026. The hit is the kombu-water tsukemen (¥920): glossy noodles sitting in kombu water, eaten first on their own with a pinch of sea or seaweed salt, then dipped in a sharp soy-based sauce, with the kombu water poured into the dip at the end. The shoyu soba is a light but deep seafood broth fragrant with grilled flying fish, and the shio soba is a clear broth with hand-kneaded curly noodles. House noodles are high-hydration and chewy. The special adds plump shrimp and meat wontons, rare shoulder chashu and a soft egg. There's also a hand-kneaded abura soba. Buy a ticket outside. Weekdays only; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 June 2026 (Tabelog)', background: 'Ramen counter (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Kombu-water tsukemen; flying-fish shoyu soba.',
      anecdotes: [
        { text: '"The fish-based soy sauce broth, fragrant with grilled flying fish, is light yet packed with umami… The homemade, high-hydration, hand-rolled, flat noodles have a wonderful chewy texture." — September 2026, special shoyu ramen.', source: R + 'B530606044/' },
        { text: '"First, I tried the noodles soaked in kombu water on their own… Next, I added some seaweed salt from the table and then dipped the noodles into the sauce… In the end, I mixed the kombu water into the dipping sauce." — October 2026, kombu-water tsukemen ¥920.', source: R + 'B536920350/' },
      ],
      japanese_sources_summary: '食べログ: 中華蕎麦 神山 HONMACHI、大阪市中央区南本町3-2-21、本町駅から徒歩2分、堺筋本町駅から徒歩5分、月〜金11:00〜15:00・17:30〜21:00、土日休み、カード・電子マネー・QR不可、カウンター15席、禁煙、2026年6月8日開店。口コミ(2026年6〜10月): 昆布水つけ麺、2種のワンタン、特製昆布水つけ麺、手揉みの油そば、半ライス、焼き飛魚の魚介醤油、自家製の多加水手揉み平打ち麺、海老と肉のワンタン、レアチャーシュー、半熟卵、つるつるの全粒粉麺に海塩、平打ちの縮れ麺、濃い魚介醤油、肩ロースのチャーシュー、6月開店、和食店のような外観、外の券売機、カウンターのみ、昆布水つけ麺920円、藻塩、紙エプロン、炙りチャーシュー丼、濃厚でやさしいスープ、澄んだ塩、手揉みの縮れ麺、大きなレアチャーシュー、醤油ベースのつけ汁。',
      confidence: 'medium', sources: [TB, R + 'B530606044/', R + 'B536920350/', R + 'B530529286/', R + 'B536650770/', R + 'B536992216/', R + 'B537591654/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: 'wavy', hydration: 'high', handmade: true, notes: 'House-made high-hydration hand-rolled flat wavy noodles (shoyu); hand-kneaded curly (shio) (September–October 2026).' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Kombu-water tsukemen, ¥920 (October 2026).',
      chashu: 'Rare shoulder chashu, large slices (October 2026).',
      notable_toppings: ['shrimp wonton', 'meat wonton', 'kombu water', 'seaweed salt'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Fish broth; meat chashu.' },
      pantheon: 'Honmachi\'s new kombu-water tsukemen counter, with a grilled flying-fish shoyu on the side.',
      profile: { richness: 3, oiliness: 2, clarity: 4, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536992216/', '"The broth is rich yet gentle" — mid-scale.'],
        oiliness: [R + 'B530606044/', '"Light yet packed with umami" — placed low.'],
        clarity: [R + 'B537591654/', '"The clear, beautiful broth" (shio) — placed high.'],
        tare_strength: [R + 'B536650770/', '"A sharp soy sauce flavor" — placed high.'],
        noodle_firmness: [R + 'B530606044/', '"A wonderful chewy texture."'],
        aroma_punch: [R + 'B530606044/', '"Fragrant with grilled flying fish" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B530606044/', R + 'B536920350/', R + 'B537591654/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine outside; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南本町3-2-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南本町三丁目2番21号 (go) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536920350/', R + 'B530606044/', R + 'B537591654/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Kombu-water tsukemen', '¥920', 'Tsukemen', 'no', 'no', 'October 2026.', 'konbusui'),
      it('', '', 'Special shoyu soba', '', 'Ramen', 'no', 'no', 'Wontons, chashu, egg, nori; September–October 2026.', 'tokusei_shoyu'),
      it('', '', 'Shio soba', '', 'Ramen', 'no', 'no', 'October 2026.', 'shio'),
      it('', '', 'Hand-kneaded abura soba', '', 'Mazesoba', 'no', 'no', 'July 2026.', 'aburasoba'),
      it('', '', 'Grilled chashu rice bowl', '', 'Rice', 'no', 'no', 'October 2026.', 'chashu_don'),
    ] }, {
    cuisine: '昆布水つけ麺920円: 昆布水に浸かった麺をまず海塩や藻塩で、次にキレのある醤油のつけ汁で・2種のワンタンの特製つけ麺・焼き飛魚が香る魚介醤油の醤油そば・手揉みの縮れ麺の澄んだ塩そば・手揉みの油そば・自家製の多加水平打ち縮れ麺・海老と肉のワンタン、肩ロースのレアチャーシュー、半熟卵・炙りチャーシュー丼・紙エプロン・カウンター15席',
    neighborhood: '中央区南本町3-2-21。本町駅から徒歩2分、堺筋本町駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺、醤油ベースのつけ汁、ワンタン。',
    vegan_detail: 'ヴィーガンではありません。焼き飛魚のスープ、海老と肉のワンタン、チャーシュー。',
    notes: '[ラーメン・本町、昆布水つけ麺と焼き飛魚の醤油] 本町と堺筋本町の間にある、和食店のような外観のきれいなカウンターの店で、2026年6月開店。人気は昆布水つけ麺(920円)で、昆布水に浸かったつややかな麺をまず海塩や藻塩でそのまま、次にキレのある醤油ベースのつけ汁で、最後は昆布水をつけ汁に注いで。醤油そばは焼き飛魚が香る軽くて深い魚介スープ、塩そばは澄んだスープに手揉みの縮れ麺。自家製の多加水麺はもちもち。特製はぷりぷりの海老と肉のワンタン、肩ロースのレアチャーシュー、半熟卵付き。手揉みの油そばも。食券は外で。平日のみ、現金のみ。',
  });
}

// ================================================================ 尾道中華そば 大福
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27153083/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:30'], ['17:30', '22:30']);
  put({
    id: 'osaka_onomichi_chuka_soba_daifuku_ueshio', name: '尾道中華そば 大福 (Onomichi Chuka Soba Daifuku)', category: 'OMNI',
    lat: 34.671357, lng: 135.517788, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare; gyoza and yakisoba.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-bone broth, pork back fat, chashu.',
    hours_raw: 'Mon, Tue, Fri, Sat, Sun 11:30–14:30 and 17:30–22:30; Wed 11:30–14:30 only; closed Thursdays; hours may change (Tabelog). Ticket machine inside; cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: day(['11:30', '14:30']), 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ueshio 1-6-5, unit 106, on a back street — about 5 min south of Tanimachi 6-chome Stn',
    cuisine: 'Onomichi-style chuka soba · chicken-bone shoyu with a bold, slightly tart soy edge and back-fat bits, piping hot · firm medium-thin flat noodles · thin pork chashu, menma, green onion · chuka soba set ¥1,000 with free rice refills and a raw or seasoned egg · chashu noodle set · yakisoba · gyoza, snack platter at night · table: pepper, shichimi, spicy miso, mayo, pickled ginger, ao-gappa pickles, garlic chili · topping coupon for your next visit · 13 counter seats',
    website: null, gmaps: gm('尾道中華そば 大福 上汐'), menu_url: null,
    notes: "[Ramen · Onomichi back-fat shoyu with free rice refills near Tanimachi 6-chome] A bright, clean 13-seat counter on a back street south of Tanimachi 6-chome, open since November 2025 and bringing the rarely seen Onomichi style to Osaka. The chuka soba is a chicken-bone shoyu with a bold, slightly tart soy edge, scattered with pork back fat and served so hot that staff warn you; noodles are firm and medium-thin, with thin, tender chashu and menma. The deal is the ¥1,000 set, which adds free rice refills and a raw or seasoned egg: put the egg on rice, splash on some broth, or try the house tip of ao-gappa pickles with mayo. Gyoza are better than expected. Staff are cheerful, and you leave with a topping coupon. Lunch can stay nearly full until 13:30. Closed Thursdays; Wednesday lunch only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 November 2025 (Tabelog)', background: 'Onomichi-style ramen shop; owner and two staff (October 2026 review).', philosophy: null, specialty: 'Onomichi chuka soba.',
      anecdotes: [
        { text: '"The Chuka Soba features firm, straight, medium-thin noodles and a broth made from chicken bones with a rich soy sauce flavor… the piping hot broth has a bold soy sauce taste with depth and a pleasant acidity." — October 2026, chuka soba set ¥1,000.', source: R + 'B520316658/' },
        { text: '"The broth is rich with animal flavors, and the generous chunks of back fat add to the experience. The soy sauce has a perfect balance of sweetness and sharpness." — October 2026.', source: R + 'B538097231/' },
      ],
      japanese_sources_summary: '食べログ: 尾道中華そば 大福、大阪市中央区上汐1-6-5 汐庵 106、谷町六丁目駅から467m、月火金土日11:30〜14:30・17:30〜22:30、水11:30〜14:30、木曜定休、カード・電子マネー・QR不可、カウンター、2025年11月12日開店。口コミ(2025年11月〜2026年10月): やさしい味、味玉、卵かけご飯、接客がとてもよい、わかりにくい場所、食券制、チャーシュー麺大盛り、見た目より軽い、中華そばセット(中華そば・ライス・卵)1,000円でご飯おかわり自由、生卵か味玉、サービス券で背脂増し、硬めの中細ストレート麺、鶏ガラの醤油、酸味、背脂、薄切りの豚チャーシュー、メンマ、店のおすすめの青がっぱご飯(マヨネーズ)、メニューはチャーシュー麺セット・中華そばセット・チャーシュー麺・中華そば・焼きそば、卓上に胡椒・七味・辛味噌・マヨネーズ・紅しょうが・青がっぱ、カウンター13席、店主とスタッフ2人、明るい接客、13時過ぎも満席近く、平打ち麺、熱々のスープ、夜はチューハイとおつまみ盛り合わせ、餃子、スープが熱いと声かけ、甘みとキレの醤油、にんにく唐辛子。',
      confidence: 'medium', sources: [TB, R + 'B520316658/', R + 'B538097231/', R + 'B517444366/', R + 'B537632446/', R + 'B537686523/', R + 'B538065538/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: ['back fat'], richness: 'medium',
      noodles: { thickness: 'medium-thin', shape: null, hydration: null, handmade: false, notes: 'Firm medium-thin noodles, straight to one diner, flat to another (October 2026).' },
      regional_style: ['Onomichi'], sub_genre: ['ramen'],
      signature_bowl: 'Chuka soba set with rice and egg, ¥1,000 (October 2026).',
      chashu: 'Thin, tender pork chashu (October 2026).',
      notable_toppings: ['pork back fat', 'menma', 'green onion', 'ao-gappa pickles (table)'],
      gf: { status: 'no', note: 'Wheat noodles; soy tare.' },
      vegan: { status: 'no', note: 'Chicken broth and back fat.' },
      pantheon: 'Osaka\'s Onomichi outpost: hot back-fat shoyu with a ¥1,000 bottomless-rice set.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B517444366/', '"Looks quite rich and soy sauce-heavy, but surprisingly, it has a light flavor" — mid-scale.'],
        oiliness: [R + 'B520316658/', '"The oiliness and saltiness are just right" — mid-scale.'],
        clarity: [R + 'B538097231/', '"Rich with animal flavors" under back fat — mid-scale.'],
        tare_strength: [R + 'B520316658/', '"A bold soy sauce taste with depth and a pleasant acidity" — placed high.'],
        noodle_firmness: [R + 'B520316658/', '"Firm, straight, medium-thin noodles."'],
        aroma_punch: [R + 'B538097231/', '"A perfect balance of sweetness and sharpness" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B520316658/', R + 'B538097231/', R + 'B517444366/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; cheerful staff (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区上汐1-6-5 汐庵 106',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区上汐一丁目6番5号 (go) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B520316658/', R + 'B537686523/', R + 'B538065538/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba set (rice refills, egg)', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'chuka_set'),
      it('', '', 'Chashu noodle set', '', 'Ramen', 'no', 'no', 'October 2026.', 'chashu_set'),
      it('', '', 'Yakisoba', '', 'Noodles', 'no', 'no', 'October 2026.', 'yakisoba'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'October 2026.', 'gyoza'),
    ] }, {
    cuisine: '尾道中華そば・鶏ガラ醤油にキレとほのかな酸味、背脂、熱々・硬めの中細平打ち麺・薄切りの豚チャーシュー、メンマ、ねぎ・ご飯おかわり自由で生卵か味玉付きの中華そばセット1,000円・チャーシュー麺セット・焼きそば・夜は餃子とおつまみ盛り合わせ・卓上に胡椒、七味、辛味噌、マヨネーズ、紅しょうが、青がっぱ、にんにく唐辛子・次回のトッピングサービス券・カウンター13席',
    neighborhood: '中央区上汐1-6-5 汐庵106、裏通り。谷町六丁目駅から南へ徒歩5分ほど',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、餃子と焼きそば。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラのスープ、豚の背脂、チャーシュー。',
    notes: '[ラーメン・谷町六丁目近く、ご飯おかわり自由の尾道背脂醤油] 谷町六丁目の南の裏通りにある明るくきれいなカウンター13席の店で、2025年11月開店、大阪では珍しい尾道ラーメン。中華そばは鶏ガラ醤油にキレとほのかな酸味、豚の背脂が散り、スタッフが声をかけるほど熱々。麺は硬めの中細、薄く柔らかいチャーシューとメンマ。お得なのは1,000円のセットで、ご飯おかわり自由で生卵か味玉付き、卵をご飯にのせてスープをかけたり、店おすすめの青がっぱとマヨネーズで。餃子は予想以上という声。スタッフは明るく、帰りにトッピングのサービス券も。昼は13時半ごろまで満席近いことも。木曜定休、水曜は昼のみ。',
  });
}

// ================================================================ 満ち汐のロマンス
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27117112/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:59']);
  put({
    id: 'osaka_michishio_no_romance_itachibori', name: '満ち汐のロマンス (Michishio no Romance)', category: 'OMNI',
    lat: 34.680261, lng: 135.496684, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: dim sum wrappers, fried horse mackerel, oyster-sauce noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oysters, seafood and pork dim sum.',
    hours_raw: 'Mon–Sat 17:00–24:00; Sun 17:00–23:00; open year-round (Tabelog, staff-maintained). Happy hour until 18:30 (October 2026). Table seats ¥220 a person; counter free (Tabelog). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: day(['17:00', '23:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Itachibori 1-6-2 (Nishi-ku) — 3 min from Honmachi Stn',
    cuisine: 'Oyster-and-dim-sum izakaya with standing counter · fresh oysters, two a person at ¥100–110 at happy hour · dim sum: garlic-chive dumplings, shark-fin dumplings, squid and pork shumai, four for ¥800 · fried horse mackerel with shiso and grated daikon ponzu · noodles with oyster sauce · chashu egg · potato salad, japchae, shungiku and shirasu salad · happy-hour draft beer ¥290, highball ¥190 · courses with all-you-can-drink · counter and 6 table seats',
    website: null, gmaps: gm('満ち汐のロマンス 立売堀'), menu_url: null,
    notes: "[Japanese · an oyster-and-dim-sum standing bar by Honmachi] A casual, clean standing-and-sitting izakaya three minutes from Honmachi, open since 2020 and part of a group that also runs shumai and ramen shops. The pull is happy hour (until 18:30 in October 2026): fresh oysters for about ¥100 each, two per person, highballs ¥190, draft beer ¥290, and a set of four dim sum for ¥800 such as garlic-chive and shark-fin dumplings and squid shumai. One diner found the cheap oysters underwhelming but portions generous. Beyond that, snack on fried horse mackerel in ponzu, japchae or the house potato salad, or fill up on oyster-sauce noodles. Courses come with all-you-can-drink. The counter is free; tables cost ¥220 a person. Good for a quick first or second stop.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 April 2020 (Tabelog)', background: 'Izakaya (Tabelog, staff-maintained); the group also has shumai and ramen shops (September 2026 review).', philosophy: null, specialty: 'Fresh oysters; dim sum.',
      anecdotes: [
        { text: '"Happy Hour runs until 6:30 PM with draft beer at JPY 290, highballs at JPY 190, fresh oysters at JPY 110 each, and a selection of four dim sum for JPY 800… chive dumplings, shark fin dumplings, squid shumai, and pork shumai." — October 2026.', source: R + 'B537747678/' },
        { text: '"The fried horse mackerel with shiso and grated daikon in ponzu sauce was especially refreshing, even though it was fried." — August 2026.', source: R + 'B534925089/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 満ち汐のロマンス、大阪市西区立売堀1-6-2、本町駅から徒歩3分、月〜土17:00〜24:00、日17:00〜23:00、年中無休、カード・電子マネー・QR可、テーブル席は1人220円の席料、カウンターは無料、25席(カウンターとテーブル6)、2020年4月1日開店。口コミ(2026年8〜10月): 数量限定の生牡蠣が安い、点心、アジフライの大葉とおろしポン酢、オイスターソースの麺、チャーシューエッグ、生牡蠣1個100円で1人2個、値段なりという声、量が多い、立ち飲みと席、19時までのハッピーアワー190円、プレーンサワー、ポテサラ、チャプチェ、春菊としらすのサラダ、フライドポテト、焼売とラーメンの姉妹店、飲み放題付きのコース、グラスにこだわり、18時半までのハッピーアワー(生ビール290円、ハイボール190円、生牡蠣110円、点心4種800円)、ニラ饅頭、フカヒレ餃子、イカ焼売、豚焼売。',
      confidence: 'medium', sources: [TB, R + 'B537747678/', R + 'B534925089/', R + 'B535054112/', R + 'B535128743/', R + 'B535459115/', R + 'B536344126/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual standing-and-sitting bar; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区立売堀1-6-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区立売堀一丁目6番2号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537747678/', R + 'B535054112/', R + 'B534925089/'],
    price_note: 'Happy-hour prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Fresh oysters (happy hour, two a person)', '¥110 each', 'Oysters', 'no', 'no', 'October 2026; ¥100 in August 2026.', 'kaki'),
      it('', '', 'Four dim sum', '¥800', 'Dim sum', 'no', 'no', 'Happy hour; October 2026.', 'tenshin4'),
      it('', '', 'Fried horse mackerel with grated daikon ponzu', '', 'Small plates', 'no', 'no', 'August 2026.', 'ajifry'),
      it('', '', 'Noodles with oyster sauce', '', 'Noodles', 'no', 'no', 'August 2026.', 'oyster_men'),
    ] }, {
    cuisine: '立ち飲みもある牡蠣と点心の居酒屋・ハッピーアワーは生牡蠣1人2個まで1個100〜110円・点心: ニラ饅頭、フカヒレ餃子、イカと豚の焼売、4種800円・大葉とおろしポン酢のアジフライ・オイスターソースの麺・チャーシューエッグ・ポテサラ、チャプチェ、春菊としらすのサラダ・ハッピーアワーの生ビール290円、ハイボール190円・飲み放題付きのコース・カウンターとテーブル6席',
    neighborhood: '西区立売堀1-6-2。本町駅から徒歩3分',
    gf_detail: '実際にはグルテンフリーではありません。点心の皮、アジフライ、オイスターソースの麺。',
    vegan_detail: 'ヴィーガンではありません。牡蠣、魚介、豚の点心。',
    notes: '[和食・本町、牡蠣と点心の立ち飲み居酒屋] 本町駅から3分の、気軽できれいな立ち飲みと席のある居酒屋で、2020年開店、焼売やラーメンの店も持つグループの一軒。目当てはハッピーアワー(2026年10月は18時半まで)で、生牡蠣が1個100円ほどで1人2個まで、ハイボール190円、生ビール290円、ニラ饅頭やフカヒレ餃子、イカ焼売など点心4種で800円。安い牡蠣は値段なりだが量は多いという声も。ほかにアジフライのおろしポン酢、チャプチェ、名物のポテサラをつまみに、オイスターソースの麺でお腹を満たしても。飲み放題付きのコースも。カウンターは無料、テーブルは1人220円。1軒目にも2軒目にも。',
  });
}

// ================================================================ HAKATAラーメン チカッパ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27088122/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:00'], ['18:00', '23:00']), SA = day(['11:30', '14:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_hakata_ramen_chikappa_bakuromachi', name: 'HAKATAラーメン チカッパ (HAKATA Ramen Chikappa)', category: 'OMNI',
    lat: 34.67869, lng: 135.510307, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza, fried rice, motsunabe broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth, chashu, offal.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 18:00–23:00 (L.O. 22:30); Sat 11:30–14:00 and 18:00–22:00 (L.O. 21:30); closed Sundays and holidays; closing days may change (Tabelog, staff-maintained). Online reservations (January 2026). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Bakuromachi 1-2-1 — 5 min from Sakaisuji-Hommachi Stn exit 3',
    cuisine: 'Hakata tonkotsu ramen ¥900, clean and odor-free with sizable, slightly sweet chashu · black ramen · tonkotsu miso ramen · ramen and half fried rice set ¥1,250 · soft-boiled egg topping · at night an izakaya: motsunabe, vinegared pork intestines, small gyoza, a "fatigue relief" set · 9 counter seats, 2 tables for four and more',
    website: null, gmaps: gm('HAKATAラーメン チカッパ 博労町'), menu_url: null,
    notes: "[Ramen · Hakata tonkotsu by day, motsunabe izakaya by night near Sakaisuji-Honmachi] A casual ramen-izakaya five minutes from Sakaisuji-Honmachi, open since 2015, with a new Tanimachi branch. At lunch it's a Hakata tonkotsu shop: the ramen (¥900) looks rich but tastes clean and free of pork-bone funk, with a good balance of salt and fat and sizable, slightly sweet chashu, and the ramen with half fried rice (¥1,250) is a heavy lunch. There's also a black ramen and a tonkotsu miso. At night it turns into an izakaya with motsunabe, vinegared pork intestines, small gyoza and a fairly priced drinks list, handy for ramen with a drink. The counter can be packed at noon, but staff greet you cheerfully and cook with care. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 October 2015 (Tabelog)', background: 'Hakata ramen and izakaya (Tabelog, staff-maintained); a Tanimachi branch opened (listing).', philosophy: null, specialty: 'Hakata tonkotsu ramen; motsunabe.',
      anecdotes: [
        { text: '"When it arrived, the bowl looked rich and hearty, yet the taste was surprisingly refreshing. There was no unpleasant odor typical of tonkotsu; instead, the umami flavor was prominent." — March 2026, tonkotsu ramen ¥900.', source: R + 'B222486860/' },
        { text: '"The ramen has a rich tonkotsu aroma, with a perfect balance of saltiness and oil. The chashu has a slightly sweet marinade." — April 2026.', source: R + 'B526146436/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): HAKATAラーメン チカッパ、大阪市中央区博労町1-2-1、堺筋本町駅3番出口から徒歩5分、月〜金11:30〜14:00・18:00〜23:00(L.O.22:30)、土11:30〜14:00・18:00〜22:00(L.O.21:30)、日祝休み、カード・電子マネー・QR可、24席(カウンター9、4人掛け2卓ほか)、2015年10月15日開店、谷町に新店。口コミ(2025年2月〜2026年8月): 豚骨ラーメン900円、見た目は濃厚だが後味はさっぱり、臭みがない、大きなチャーシュー、居酒屋としてもつ鍋も、博多ラーメンと半チャーハンのセット1,250円、半熟卵、ネット予約、疲労回復セット、酢モツ、小ぶりの餃子、黒ラーメン、飲めるラーメン店、お酒とつまみが手頃、豚骨の香りと塩気と油のバランス、甘めのチャーシュー、味噌ラーメンと半チャーハン、昼はカウンターが満席、元気な挨拶、丁寧な調理、豚骨味噌、冷やし、餃子10個。',
      confidence: 'medium', sources: [TB, R + 'B222486860/', R + 'B526146436/', R + 'B501222195/', R + 'B520822482/', R + 'B528635185/', R + 'B534012843/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu', 'miso'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Hakata-style ramen; noodle details not given in 2026 reviews.' },
      regional_style: ['Hakata'], sub_genre: ['ramen'],
      signature_bowl: 'Tonkotsu (Hakata) ramen, ¥900 (March 2026).',
      chashu: 'Sizable, slightly sweet marinated chashu (March–April 2026).',
      notable_toppings: ['soft-boiled egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Sakaisuji-Honmachi\'s clean Hakata tonkotsu that turns motsunabe izakaya at night.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B222486860/', '"Looked rich and hearty, yet the taste was surprisingly refreshing" — mid-scale.'],
        oiliness: [R + 'B526146436/', '"A perfect balance of saltiness and oil" — mid-scale.'],
        clarity: [R + 'B222486860/', 'Tonkotsu that "looked rich" — placed low.'],
        tare_strength: [R + 'B526146436/', '"A perfect balance of saltiness" — mid-scale.'],
        noodle_firmness: [R + 'B222486860/', 'No noodle firmness given — mid-scale default.'],
        aroma_punch: [R + 'B526146436/', '"A rich tonkotsu aroma" with no odor — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B222486860/', R + 'B526146436/', R + 'B501222195/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Cheerful greetings (July 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区博労町1-2-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区博労町一丁目2番1号 (go) 13m; OSM チカッパ node/11582995485 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B222486860/', R + 'B501222195/', R + 'B520822482/'],
    price_note: 'Prices from March–June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tonkotsu (Hakata) ramen', '¥900', 'Ramen', 'no', 'no', 'March 2026.', 'hakata'),
      it('', '', 'Ramen and half fried rice set', '¥1,250', 'Sets', 'no', 'no', 'June 2026.', 'han_chahan_set'),
      it('', '', 'Black ramen', '', 'Ramen', 'no', 'no', 'January 2026.', 'black'),
      it('', '', 'Tonkotsu miso ramen', '', 'Ramen', 'no', 'no', 'July 2026.', 'miso'),
      it('', '', 'Motsunabe', '', 'Izakaya', 'no', 'no', 'Evenings; 2025–2026.', 'motsunabe'),
    ] }, {
    cuisine: '博多豚骨ラーメン900円、臭みのないすっきりした味、大きくほんのり甘いチャーシュー・黒ラーメン・豚骨味噌ラーメン・ラーメンと半チャーハンのセット1,250円・半熟卵のトッピング・夜は居酒屋: もつ鍋、酢モツ、小ぶりの餃子、疲労回復セット・カウンター9席、4人掛けテーブル2卓など',
    neighborhood: '中央区博労町1-2-1。堺筋本町駅3番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子、チャーハン、もつ鍋のスープ。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー、ホルモン。',
    notes: '[ラーメン・堺筋本町、昼は博多豚骨、夜はもつ鍋の居酒屋] 堺筋本町から5分の気軽なラーメン居酒屋で、2015年開店、谷町にも新店。昼は博多豚骨の店で、ラーメン(900円)は見た目は濃厚でも味はすっきり、豚骨の臭みがなく、塩気と脂のバランスがよく、大きくほんのり甘いチャーシュー。ラーメンと半チャーハン(1,250円)はお腹いっぱいになる昼ごはん。黒ラーメンや豚骨味噌も。夜は居酒屋になり、もつ鍋、酢モツ、小ぶりの餃子、手頃なお酒で、ラーメンと一杯にも便利。昼はカウンターが埋まるが、元気な挨拶でていねいに作ってくれる。日曜定休。',
  });
}

save();
