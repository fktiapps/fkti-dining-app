// Osaka sweep (2-mile circle around Dotonbori), batch 27 — ramen phase, nearest first (all OMNI).
// Clears the head of the ramen queue (chain branches and Tabelog-mis-tagged shops):
//   + 珉珉 なんばウォーク店 (Minmin's Namba Walk branch — filed 'gyoza'; pin chōme-level)
//   + どうとんぼり神座 なんばウォーク店 (Kamukura in Namba Walk; pin chōme-level)
//   + 焼鳥と釜飯 なかもと (Kyushu-style off-the-skewer yakitori and kamameshi — filed 'yakitori'; reviews call it "Gotchin")
//   + 一番麻辣烫 日本橋店 (malatang with a beef-bone white broth — filed 'other')
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 27);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const chome = (a, d) => `GSI resolves the underground-mall address only to ${a} (chōme, ${d}m) and OSM has no match, so the pin rests on the Tabelog point alone`;

// ================================================================ 珉珉 なんばウォーク店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27015875/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_minmin_namba_walk', name: '珉珉 なんばウォーク店 (Minmin Namba Walk)', category: 'OMNI',
    lat: 34.667124, lng: 135.504599, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-wrapper gyoza, noodles, soy-based Chinese sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork gyoza, kara-age, Genghis Khan lamb, mapo tofu with meat.',
    hours_raw: 'Daily 11:00–22:00 (L.O. 21:30); closed the third Wednesday of odd-numbered months (Tabelog). Cash only (no cards or e-money, per Tabelog). Smartphone ordering; free Wi-Fi.',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Namba Walk (underground), Sennichimae 1-chōme — near Nippombashi Stn',
    cuisine: 'Minmin gyoza ¥450 · fried rice ¥770 · mapo rice bowl ¥850 and clay-pot mapo tofu set · kara-age ¥850 and kara-age set · Genghis Khan set ¥880 · stir-fried squid with garlic chives ¥820 · tantanmen · pork tempura · 43 seats',
    website: 'http://www.minminhonten.com/', gmaps: gm('珉珉 なんばウォーク店'), menu_url: null,
    notes: "[Gyoza · Minmin under Namba] Minmin's 43-seat branch in the Namba Walk underground mall, busy with office workers at lunch and handy in the rain. The light, distinctive gyoza (¥450) are the reason to come. Set meals are cheap: Genghis Khan lamb and onions with rice, pickles and egg soup (¥880), clay-pot mapo tofu, crisp kara-age. À la carte, fried rice is ¥770 and stir-fried squid with garlic chives ¥820 (September 2026). Prices hold to the menu, with no extras. Service is quiet to curt, and you order on your phone. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Namba Walk branch (Tabelog listing name)', background: 'Minmin (minminhonten.com) opened its first shop in Sennichimae in 1953 (Tabelog listing).', philosophy: null, specialty: 'Gyoza; Chinese set meals.',
      anecdotes: [
        { text: '"▫️ Fried Rice: JPY 770 ▫️ Grilled Dumplings: JPY 450 ▫️ Mapo Rice Bowl: JPY 850 ▫️ Fried Chicken: JPY 850 ▫️ Stir-fried Squid with Garlic Chives: JPY 820" — September 2026.', source: R + 'B536396461/' },
        { text: '"I ordered the Genghis Khan Set Meal for JPY 880, which comes with rice, pickled mustard greens, and egg soup." — September 2026.', source: R + 'B534928256/' },
      ],
      japanese_sources_summary: '食べログ: 珉珉 なんばウォーク店、大阪市中央区千日前1 なんばウォーク、06-6213-6180、43席(テーブルのみ)、毎日11:00〜22:00(L.O.21:30)、奇数月の第3水曜定休、カード・電子マネー不可、禁煙、公式 minminhonten.com。2026年の口コミ(8〜10月): 久しぶりの珉珉、唐揚げ定食とビール、豚肉と玉ねぎの炒め、土鍋の麻婆豆腐定食と焼き餃子、担々麺、無愛想な接客、スマホで注文、無料Wi-Fi、ジンギスカン定食880円(ご飯、ザーサイ、玉子スープ)、豚天とビールで1,200円、表示どおりの値段、炒飯770円、焼き餃子450円、麻婆丼850円、唐揚げ850円、イカのニラ炒め820円、昼は会社員でいっぱい、餃子は軽く食べやすい。',
      confidence: 'medium', sources: [TB, R + 'B536396461/', R + 'B534928256/', R + 'B440365887/', R + 'B299292702/', R + 'B536822600/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smartphone ordering; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区千日前1 なんばウォーク',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; ${chome('大阪府大阪市中央区千日前一丁目', 58)}; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536396461/', R + 'B534928256/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('餃子', 'gyōza', 'Grilled gyoza', '¥450', 'Gyoza', 'no', 'no', 'September 2026.', 'gyoza'),
      it('炒飯', 'chāhan', 'Fried rice', '¥770', 'Rice', 'no', 'no', 'September 2026.', 'chahan'),
      it('', '', 'Mapo rice bowl', '¥850', 'Rice', 'no', 'no', 'September 2026.', 'mapo_don'),
      it('', '', 'Fried chicken', '¥850', 'Mains', 'no', 'no', 'September 2026.', 'karaage'),
      it('', '', 'Genghis Khan set meal', '¥880', 'Set meals', 'no', 'no', 'September 2026.', 'jingisukan'),
      it('', '', 'Stir-fried squid with garlic chives', '¥820', 'Mains', 'no', 'no', 'September 2026.', 'ika_nira'),
    ] }, {
    cuisine: '珉珉の餃子450円・炒飯770円・麻婆丼850円と土鍋の麻婆豆腐定食・唐揚げ850円と唐揚げ定食・ジンギスカン定食880円・イカのニラ炒め820円・担々麺・豚天・43席',
    neighborhood: 'なんばウォーク(地下街)、千日前1丁目。日本橋駅の近く',
    gf_detail: 'グルテンフリーではありません。小麦の皮の餃子、麺、醤油ベースの中華のたれ。',
    vegan_detail: 'ヴィーガンではありません。豚肉の餃子、唐揚げ、ジンギスカン、肉入りの麻婆豆腐。',
    notes: '[餃子・なんばの地下の珉珉] なんばウォークの地下街にある珉珉の43席の店で、昼は会社員でいっぱい、雨の日も便利。お目当ては軽くて独特の餃子(450円)。定食が安く、ジンギスカン(ラムと玉ねぎ)にご飯、ザーサイ、玉子スープで880円、土鍋の麻婆豆腐、カリッとした唐揚げも。単品は炒飯770円、イカのニラ炒め820円(2026年9月)。値段は表示どおりで追加料金なし。接客は静かでそっけなめ、注文はスマホから。現金のみ。',
  });
}

// ================================================================ どうとんぼり神座 なんばウォーク店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27144562/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kamukura_namba_walk', name: 'どうとんぼり神座 なんばウォーク店 (Dotonbori Kamukura Namba Walk)', category: 'OMNI',
    lat: 34.667144, lng: 135.504829, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza, fried rice.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Not vegan as far as sources show: the broth base is not described, and sets pair the ramen with gyoza and kara-age. Ask.',
    hours_raw: 'Daily 10:00–22:00 (L.O. 21:30) (Tabelog). Tablet ordering at the table. Cards, e-money and QR accepted.',
    hours: ALL(day(['10:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Walk (underground), Sennichimae 1-chōme',
    cuisine: 'Kamukura\'s light, napa-cabbage soy broth · vegetable-packed ramen · limited hot-and-sour ramen · ramen, gyoza, fried rice and beer set · garlic chives at the counter · spacious tables',
    website: 'https://walk.osaka-chikagai.jp/shops/detail.php?shopId=306', gmaps: gm('神座 なんばウォーク店'), menu_url: null,
    notes: "[Ramen · Kamukura in the Namba Walk mall] A roomy Kamukura in the Namba Walk underground mall, since 2024, with tables that suit solo diners and tablet ordering. The broth is the chain's soy-based soup, light but deep with the sweetness of napa cabbage. The vegetable-packed ramen is the regulars' choice, topped up with the garlic chives at the counter. Autumn 2026 brought a limited hot-and-sour ramen, lighter than the usual thick suan-la, just right for some and refreshing for others. A ramen, gyoza, fried rice and beer set makes a hearty lunch.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 13 September 2024 (Tabelog)', background: 'Kamukura chain; Namba Walk shop page (walk.osaka-chikagai.jp).', philosophy: null, specialty: 'Napa-cabbage ramen.',
      anecdotes: [
        { text: '"Doutonbori KAMUKURA\'s ramen features a light yet rich broth that highlights the sweetness of napa cabbage… The soy sauce-based soup, infused with the umami of the cabbage, is both gentle and deeply flavorful." — October 2026.', source: R + 'B537863574/' },
        { text: '"It feels like a light hot and sour soup poured over a delicious regular ramen, resulting in a thinner broth." — October 2026, limited hot-and-sour ramen.', source: R + 'B524019639/' },
      ],
      japanese_sources_summary: '食べログ: どうとんぼり神座 なんばウォーク店、大阪市中央区千日前1、毎日10:00〜22:00(L.O.21:30)、禁煙、カード・電子マネー・QR決済可、2024年9月13日開店、サイト なんばウォークの店舗ページ。2026年の口コミ: 野菜たっぷりラーメン、カウンターのにんにくとニラ、昼飲み、期間限定の酸辣湯麺(普通のラーメンに軽い酸辣湯をかけたよう)、ラーメン・唐揚げ・炒飯、辛くて酸っぱい麺に半熟玉子、駅の中、テーブルのタブレットで注文、中細ストレート麺、卵麺、麺の減量はできないが増量は可、白菜の甘み、醤油ベース、ラーメン・餃子・炒飯・生ビールのセット、ふわふわの炒飯、広い店内。',
      confidence: 'medium', sources: [TB, R + 'B537863574/', R + 'B524019639/', R + 'B497140803/', R + 'B537796284/', R + 'B537878157/'] },
    ramen: {
      broth_base: ['other'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium-thin', shape: 'straight', hydration: null, handmade: false, notes: '"Standard medium-thin straight noodles" (May 2026); egg noodles (January 2026); can be upsized but not reduced (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Vegetable-packed ramen (October 2026).',
      chashu: null,
      notable_toppings: ['napa cabbage', 'vegetables', 'garlic chives (counter)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'ask', note: 'Broth base not described in sources.' },
      pantheon: 'The Namba Walk Kamukura: the light, cabbage-sweet soy soup loaded with vegetables, under the streets.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B537863574/', '"A light yet rich broth that highlights the sweetness of napa cabbage."'],
        oiliness: [R + 'B537796284/', '"The broth was light and not greasy."'],
        clarity: [R + 'B537863574/', 'Soy-sauce-based soup; not described as clear or cloudy — mid-scale (inferred).'],
        tare_strength: [R + 'B537863574/', '"Both gentle and deeply flavorful."'],
        noodle_firmness: [R + 'B497140803/', '"Standard medium-thin straight noodles"; firmness not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B497140803/', 'Garlic and chives added at the counter — placed low-mid.'],
      },
      confidence: 'low', sources: [R + 'B537863574/', R + 'B497140803/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'english', note: 'Tablet ordering at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区千日前1 なんばウォーク',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; ${chome('大阪府大阪市中央区千日前一丁目', 66)}; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B497140803/', R + 'B524019639/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('野菜いっぱいラーメン', 'yasai ippai rāmen', 'Vegetable-packed ramen', '', 'Ramen', 'no', 'ask', 'October 2026.', 'yasai'),
      it('', '', 'Hot-and-sour ramen (limited)', '', 'Seasonal', 'no', 'ask', 'October 2026.', 'sanratan'),
      it('', '', 'Ramen, gyoza, fried rice and draft beer set', '', 'Sets', 'no', 'no', 'October 2026.', 'set'),
    ] }, {
    cuisine: '神座のあっさりした白菜の醤油スープ・野菜たっぷりラーメン・期間限定の酸辣湯麺・ラーメン、餃子、炒飯、ビールのセット・カウンターのニラ・広いテーブル席',
    neighborhood: 'なんばウォーク(地下街)、千日前1丁目',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子、炒飯。',
    vegan_detail: '情報の範囲ではヴィーガンとは言えません。スープのベースは書かれておらず、セットは餃子や唐揚げと組み合わせ。要確認。',
    notes: '[ラーメン・なんばウォークの神座] 2024年からなんばウォークの地下街にある広い神座で、1人でも座りやすいテーブル、注文はタブレット。スープはチェーンの醤油ベースで、あっさりなのに白菜の甘みで深い味わい。常連のおすすめは野菜たっぷりラーメンで、カウンターのニラを足して。2026年秋は期間限定の酸辣湯麺が登場し、普通のとろみの強い酸辣湯より軽く、ちょうどいい辛さという声もさっぱりという声も。ラーメン、餃子、炒飯、ビールのセットはしっかりした昼ごはんに。',
  });
}

// ================================================================ 焼鳥と釜飯 なかもと
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27148241/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_yakitori_kamameshi_nakamoto', name: '焼鳥と釜飯 なかもと (Yakitori to Kamameshi Nakamoto)', category: 'OMNI',
    lat: 34.66613, lng: 135.499667, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sources give no allergen information; the seasoning of the yakitori and kamameshi is not described, and there are fried dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-centred menu; kamameshi with chicken soboro. There is a grilled-vegetable plate, but its seasoning is not described.',
    hours_raw: 'Daily 17:00–4:00 (food L.O. 3:00, drinks 3:30), open year-round (Tabelog). LINE / mobile ordering. Smoking only on the terrace (Tabelog). Order the kamameshi early; it is cooked to order. 2-hour limit at busy times (Tabelog). Cards and QR accepted; no e-money.',
    hours: ALL(day(['17:00', '04:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 4-3-23, a red-lantern back alley a stone\'s throw from Namba Stn',
    cuisine: 'Kyushu-style charcoal yakitori served off the skewer, to share · assorted yakitori (3 kinds) ¥1,320 · grilled vegetables (3 kinds) ¥1,078 · fried mehikari ¥858 · chicken soboro and burdock kamameshi · terrace seats · open to 4 am',
    website: null, gmaps: gm('焼鳥と釜飯 なかもと 難波'), menu_url: null,
    notes: "[Yakitori · Kyushu-style yakitori and kamameshi by Namba station] A red-lantern izakaya in a back alley by Namba Station, open from 5 pm to 4 am, part of the SASAYA group. Charcoal-grilled Kyushu-style yakitori comes as shareable pieces rather than skewers: an assorted three kinds is ¥1,320 (April 2026), alongside grilled vegetables (¥1,078) and fried mehikari (¥858). Finish with kamameshi, rice cooked to order in an iron pot, like the chicken soboro and burdock, so order it early. Ordering is by LINE. The upstairs can get smoky from the grill, and there's a pleasant terrace. Note the name: Tabelog lists it as Nakamoto, while several 2026 reviews call it \"Yakitori to Kamameshi Gotchin\".",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 April 2025 (Tabelog), on the former site of a Thai street-food stall (April 2026 review)', background: 'A SASAYA-group shop (April 2026 review). Reviewers from January–August 2026 call it "Yakitori to Kamameshi Gotchin"; Tabelog lists it as Nakamoto.', philosophy: null, specialty: 'Off-the-skewer yakitori; kamameshi.',
      anecdotes: [
        { text: '"The grilled yakitori is served as individual pieces rather than skewers. You can order the Assorted Yakitori (3 types) for JPY 1,320, tax included, with orders available through LINE registration." — April 2026.', source: R + 'B526976753/' },
        { text: '"The \'Chicken Soboro and Burdock Kamameshi\' I had this time featured fluffy rice topped with sweet and savory chicken soboro and crunchy burdock." — January 2026.', source: R + 'B520654859/' },
      ],
      japanese_sources_summary: '食べログ: 焼鳥と釜飯 なかもと、大阪市中央区難波4-3-23、06-6633-3338、48席(着席50名まで)、毎日17:00〜翌4:00(料理L.O.3:00、ドリンクL.O.3:30)、年中無休、テラス席のみ喫煙可、混雑時は2時間制、カード・QR決済可(電子マネー不可)、2025年4月4日開店。2026年の口コミ(1〜8月): 「焼鳥と釜飯 ごっちん」と呼ぶ口コミ、なんば駅からすぐの裏路地、赤提灯、九州風の居酒屋、鶏そぼろとごぼうの釜飯、2階は煙が上がってくる、モバイルオーダー、タイ屋台の跡地、SASAYAグループ、串に刺さない焼鳥、焼鳥3種盛り1,320円(LINE登録で注文)、焼き野菜3種1,078円、めひかりの唐揚げ858円、お通しの枝豆418円、外の席、釜飯は時間がかかるので早めに注文、肉料理、野菜料理も。',
      confidence: 'medium', sources: [TB, R + 'B526976753/', R + 'B520654859/', R + 'B529784996/', R + 'B527328703/', R + 'B523302263/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'LINE/mobile ordering; smoky upstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-3-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated January–August 2026 (several under the name "Gotchin").' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目3番23号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526976753/'],
    price_note: 'Prices from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Assorted yakitori (3 kinds, off the skewer)', '¥1,320', 'Yakitori', 'ask', 'no', 'April 2026.', 'yakitori3'),
      it('', '', 'Assorted grilled vegetables (3 kinds)', '¥1,078', 'Vegetables', 'ask', 'ask', 'April 2026.', 'yasai3'),
      it('', '', 'Fried mehikari', '¥858', 'Fried', 'ask', 'no', 'April 2026.', 'mehikari'),
      it('', '', 'Chicken soboro and burdock kamameshi', '', 'Kamameshi', 'ask', 'no', 'January 2026.', 'kamameshi'),
      it('', '', 'Edamame (starter)', '¥418', 'Starters', 'ask', 'ask', 'April 2026.', 'edamame'),
    ] }, {
    cuisine: '串に刺さない九州風の炭火焼鳥を取り分けて・焼鳥3種盛り1,320円・焼き野菜3種1,078円・めひかりの唐揚げ858円・鶏そぼろとごぼうの釜飯・テラス席・深夜4時まで',
    neighborhood: '難波4-3-23、なんば駅からすぐの赤提灯の裏路地',
    gf_detail: '要確認。アレルゲンの情報はなく、焼鳥や釜飯の味付けも書かれておらず、揚げ物もあります。',
    vegan_detail: 'ヴィーガンではありません。鶏中心のメニューで、釜飯には鶏そぼろ。焼き野菜の盛り合わせもありますが、味付けは書かれていません。',
    notes: '[焼鳥・なんば駅すぐの九州風焼鳥と釜飯] なんば駅すぐの裏路地にある赤提灯の居酒屋で、夕方5時から朝4時まで、SASAYAグループの店。炭火の九州風焼鳥は串ではなく取り分けるスタイルで、3種盛りが1,320円(2026年4月)、焼き野菜(1,078円)、めひかりの唐揚げ(858円)も。締めは注文ごとに炊く鉄釜の釜飯で、鶏そぼろとごぼうなど。時間がかかるので早めに注文を。注文はLINEから。2階は焼き場の煙が上がってくることも、気持ちのいいテラス席も。店名に注意で、食べログでは「なかもと」、2026年の口コミの多くは「焼鳥と釜飯 ごっちん」と呼んでいます。',
  });
}

// ================================================================ 一番麻辣烫 日本橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27152883/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ichiban_malatang_nipponbashi', name: '一番麻辣烫 日本橋店 (Ichiban Mala Tang Nipponbashi)', category: 'OMNI',
    lat: 34.667966, lng: 135.505743, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. You choose your own ingredients (vegetables such as broccoli), but what goes into the beef-bone broth and the other soups is not described; check any noodles or processed items for wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-bone broth (September 2026).',
    hours_raw: 'Daily 11:00–24:00 (Tabelog). Cards and QR accepted. A free drink with orders over ¥1,000 (2026).',
    hours: ALL(day(['11:00', '23:59'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nippombashi 1-3-17, Nippombashi Envy Bldg — a few minutes from Nippombashi Stn',
    cuisine: 'Build-your-own malatang · beef-bone broth, and an original white broth rich enough at zero spice to taste like ramen soup · a few unusual soups · spice levels from 0 up to at least 3 · chili oil on the side · fresh vegetables (broccoli recommended) · a free canned drink over ¥1,000 · 20 seats',
    website: null, gmaps: gm('一番麻辣烫 日本橋店'), menu_url: null,
    notes: "[Chinese · malatang with a beef-bone white broth in Nippombashi] A clean, 20-seat malatang shop a few minutes from Nippombashi, relaxed enough when reviewers came that you can take your time at the ingredient case. The difference is the broth: beef bone, and the original white version is rich enough at zero spice to taste like ramen soup. Vegetables soaked in it, broccoli especially, are the reviewers' pick. Spice runs from 0 up to a numbing level 3 at least, and chili oil comes on the side. One mala fan ranks it third of 19 places tried. Spend over ¥1,000, as most do, and a can from the fridge is free. The aroma inside takes a minute to get used to.",
    chef_bio: { chef_name: null, roles: [], origin: 'Nippombashi 1-chōme', background: 'No source names the operator.', philosophy: null, specialty: 'Malatang with beef-bone broth.',
      anecdotes: [
        { text: '"I went for the original flavor white broth. It was almost non-spicy, allowing me to fully enjoy the restaurant\'s tasty soup… I highly recommend the broccoli. I\'m also happy that drinks are complimentary." — August 2026.', source: R + 'B534435015/' },
        { text: '"I\'ve tried various mala tang dishes (ranking 3rd out of 19 places) and this one is in my top three!… the spiciness level 3 was just perfect for me." — October 2026.', source: R + 'B537680677/' },
      ],
      japanese_sources_summary: '食べログ: 一番麻辣烫 日本橋店、大阪市中央区日本橋1-3-17 日本橋エンビィビル、20席、毎日11:00〜24:00、カード・QR決済可。2026年の口コミ(7〜10月): 牛骨スープ、辛さ0でも濃厚でラーメンのスープのよう、ラー油を添えて、ドリンク無料、スパイスの香りと深いうま味、新鮮な具材、清潔な店、1週間でまた来た、店内の独特のにおい、1,000円ちょっと、辛さ1はじわじわ辛い、日本橋駅から数分、並ばずに入れて落ち着いて選べた、珍しいスープも、オリジナルの白湯スープ、ブロッコリーがおすすめ、19店中3位、辛さ3、1,000円以上でドリンク無料。',
      confidence: 'medium', sources: [TB, R + 'B534435015/', R + 'B537680677/', R + 'B523662957/', R + 'B532414338/', R + 'B534110528/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-serve ingredient case; friendly staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋1-3-17 日本橋エンビィビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋一丁目3番17号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534435015/', R + 'B532414338/'],
    price_note: 'Priced by your choice of ingredients; reviewers spent a little over ¥1,000 (2026).', last_checked: TODAY, items: [
      it('', '', 'Malatang, original white beef-bone broth (spice 0)', '', 'Malatang', 'ask', 'no', 'August 2026.', 'white'),
      it('', '', 'Malatang, mala broth (spice 1–3+)', '', 'Malatang', 'ask', 'no', 'July–October 2026.', 'mala'),
    ] }, {
    cuisine: '自分で選ぶ麻辣湯・牛骨スープ、辛さ0でもラーメンのように濃いオリジナルの白湯も・珍しいスープも・辛さは0から少なくとも3まで・ラー油を添えて・新鮮な野菜(ブロッコリーがおすすめ)・1,000円以上でドリンク無料・20席',
    neighborhood: '日本橋1-3-17 日本橋エンビィビル。日本橋駅から数分',
    gf_detail: '要確認。ブロッコリーなど具材は自分で選べますが、牛骨スープやほかのスープの中身は書かれていません。麺や加工品は小麦を確認して。',
    vegan_detail: 'ヴィーガンではありません。牛骨スープ(2026年9月)。',
    notes: '[中華・日本橋の牛骨白湯の麻辣湯] 日本橋駅から数分の清潔な20席の麻辣湯の店で、行列のできるチェーンより落ち着いているので、具材のケースの前でゆっくり選べます。違いはスープで、牛骨がベース、ほかでは見ないスープも。オリジナルの白湯は辛さ0でもラーメンのスープのように濃く、それを吸った野菜、特にブロッコリーが口コミのおすすめ。辛さは0から、少なくともしびれる3まで、ラー油は別添え。19店食べ比べて3位という麻辣湯好きも。1,000円以上(だいたいそうなります)で冷蔵庫の缶ドリンクが1本無料。店内の香りは最初少し驚くかも。',
  });
}

save();
