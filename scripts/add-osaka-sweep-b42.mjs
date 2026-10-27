// Osaka sweep (2-mile circle around Dotonbori), batch 42 — ramen phase, nearest first (all OMNI).
//   + 大阪麦風 心斎橋店 (black-garlic tonkotsu shoyu and abura-soba, to 6 am, since 2008)
//   + CoCo壱番屋 難波千日前店 (curry chain; official allergen-free curry without wheat — GF options)
//   + 九州らーめん亀王 難波NGK前店 (mellow Kyushu tonkotsu, tomato ramen)
//   + どうとんぼり神座 心斎橋PARCO店 (Kamukura in PARCO's B2F dining street)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 42);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 大阪麦風 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27019501/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_osaka_bakufu_shinsaibashi', name: '大阪麦風 心斎橋店 (Osaka Bakufu Shinsaibashi)', category: 'OMNI',
    lat: 34.673504, lng: 135.503428, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles; soy-sauce tare; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth, back fat, chashu, minced meat.',
    hours_raw: 'Daily 11:30–6:00 (Tabelog). No cards (Tabelog). Order at the counter and pay when you leave (August 2026).',
    hours: ALL(day(['11:30', '06:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-14-24 — 2 min from Shinsaibashi Stn',
    cuisine: 'Tonkotsu-shoyu ramen shop · black tonkotsu shoyu with black-garlic oil ¥1,000 (all toppings ¥1,590) · back-fat ramen · abura-soba with garlic, minced meat and green onion · thin straight firm noodles · extra noodles ¥220 · 12 counter seats plus a 5-seat terrace · open to 6 am',
    website: null, gmaps: gm('大阪麦風 心斎橋'), menu_url: null,
    notes: "[Ramen · street-stall tonkotsu shoyu in Higashi-Shinsaibashi, to 6 am] A street-stall-style tonkotsu-shoyu counter in Higashi-Shinsaibashi, running since 2008 and open until 6 am, with a few terrace seats outside. Many local workers know it. The striking bowl is the black tonkotsu shoyu (¥1,000; ¥1,590 with everything) in black-garlic oil. It's rich in pork bone without any funk and not heavy, though one reviewer found it mild until two spoons of garlic went in. A back-fat ramen rides on thin, straight, firm noodles. For a junky finish after drinking, regulars order the abura-soba with garlic, minced meat and green onion. Extra noodles are ¥220, which adds up. Pay as you leave; cash.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 19 May 2008 (Tabelog)', background: 'A long-running Higashi-Shinsaibashi ramen counter (reviews).', philosophy: null, specialty: 'Black tonkotsu shoyu; abura-soba.',
      anecdotes: [
        { text: '"It\'s a shop specializing in Tonkotsu Shoyu Ramen, and I found a ramen with my favorite black garlic oil: ● Black Tonkotsu Shoyu / JPY 1000." — August 2026.', source: R + 'B533869806/' },
        { text: '"The oil soba packed with garlic, minced meat, and green onions was extra oily this time, making it even more indulgent!" — August 2026.', source: R + 'B446978795/' },
      ],
      japanese_sources_summary: '食べログ: 大阪麦風 心斎橋店、大阪市中央区東心斎橋1-14-24、06-6245-7628、予約不可、毎日11:30〜翌6:00、カード不可、17席(カウンター12、テラス5)、禁煙、2008年5月19日開店。2026年の口コミ(8〜10月): 飲んだ後のジャンクな締め、にんにく・ひき肉・ねぎの油そば、券売機ではなく注文して帰りに会計、とんこつ醤油の専門店、黒とんこつ醤油(黒マー油)1,000円、全部のせ1,590円、替え玉220円、豚臭さがない、屋台のような雰囲気、背脂ラーメン、細いストレート麺で硬め、黒とんこつは濃いのに重くない、にんにくをスプーン2杯で濃くパンチのある味に、海外客向けの雰囲気とメニュー、15年以上前から知る名店、カウンターのみ、全部のせ(チャーシュー、ゆで卵、ねぎ、のり)。',
      confidence: 'medium', sources: [TB, R + 'B533869806/', R + 'B446978795/', R + 'B534063385/', R + 'B534882823/', R + 'B536820754/', R + 'B536919669/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['black garlic oil', 'back fat'], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles, firm and smooth (August 2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Black tonkotsu shoyu ¥1,000 (August 2026).',
      chashu: 'Chashu on the all-toppings bowl (October 2026).',
      notable_toppings: ['black garlic oil', 'back fat', 'boiled egg', 'green onion', 'nori'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Higashi-Shinsaibashi\'s 6 am tonkotsu shoyu: black-garlic oil over firm thin noodles at a street-stall counter.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B534882823/', '"The rich broth was packed with the flavor of pork bones, yet it wasn\'t too heavy."'],
        oiliness: [R + 'B533869806/', 'Black-garlic oil; back-fat ramen also on the menu — placed high.'],
        clarity: [R + 'B534882823/', 'Rich pork-bone broth under black oil — opaque.'],
        tare_strength: [R + 'B536820754/', '"The flavor was less intense than I expected" before garlic — mid-scale.'],
        noodle_firmness: [R + 'B534063385/', '"Characterized by a firm texture and smooth finish."'],
        aroma_punch: [R + 'B533869806/', '"The aroma of the black garlic oil was delightful."'],
      },
      confidence: 'medium', sources: [R + 'B533869806/', R + 'B534882823/', R + 'B534063385/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Pay as you leave; geared to overseas visitors (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-14-24',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目14番24号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533869806/'],
    price_note: 'Prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Black tonkotsu shoyu (black-garlic oil)', '¥1,000', 'Ramen', 'no', 'no', 'August 2026.', 'kuro'),
      it('', '', 'Black tonkotsu shoyu, all toppings', '¥1,590', 'Ramen', 'no', 'no', 'August 2026.', 'kuro_zenbu'),
      it('', '', 'Back-fat ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'seabura'),
      it('油そば', 'abura soba', 'Abura-soba (garlic, minced meat, green onion)', '', 'Abura-soba', 'no', 'no', 'August 2026.', 'abura'),
      it('替玉', 'kaedama', 'Extra noodles', '¥220', 'Options', 'no', 'vegan', 'August 2026.', 'kaedama'),
    ] }, {
    cuisine: 'とんこつ醤油ラーメンの店・黒マー油の黒とんこつ醤油1,000円(全部のせ1,590円)・背脂ラーメン・にんにく、ひき肉、ねぎの油そば・硬めの細いストレート麺・替え玉220円・カウンター12席とテラス5席・朝6時まで',
    neighborhood: '東心斎橋1-14-24。心斎橋駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の細麺、醤油だれ、餃子。',
    vegan_detail: 'ヴィーガンではありません。とんこつスープ、背脂、チャーシュー、ひき肉。',
    notes: '[ラーメン・東心斎橋の屋台風とんこつ醤油、朝6時まで] 東心斎橋の屋台風のとんこつ醤油のカウンターで、2008年から、朝6時まで営業、外にテラス席も少し。地元の会社員にはおなじみ。目を引くのは黒マー油の黒とんこつ醤油(1,000円、全部のせ1,590円)で、豚骨が濃いのに臭みがなく重くない。ただしにんにくをスプーン2杯入れるまではおとなしかったという声も。背脂ラーメンは硬めでなめらかな細いストレート麺。飲んだ後のジャンクな締めには、にんにく、ひき肉、ねぎの油そばを常連が頼みます。替え玉は220円でかさみがち。会計は帰りに、現金で。',
  });
}

// ================================================================ CoCo壱番屋 難波千日前店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27036244/'; const R = TB + 'dtlrvwlst/';
  const AF = 'https://www.ichibanya.co.jp/menu/list.html?cid=8';
  put({
    id: 'osaka_coco_ichibanya_namba_sennichimae', name: 'CoCo壱番屋 難波千日前店 (CoCo Ichibanya Namba Sennichimae)', category: 'OMNI',
    lat: 34.66463, lng: 135.503744, cuisine_type: 'curry',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'The chain\'s official menu lists an allergen-free curry made without wheat, egg, milk, buckwheat, peanut, shrimp or crab, served in its sealed package "for safety" (¥464 with 200 g rice; ¥232 with 100 g). The chain notes it is not a certified medical food and that some branches do not carry it — confirm this branch has it. Everything else on the menu is regular wheat-roux curry.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'Ask. The allergen-free curry contains no egg or milk, but the official note does not say it is free of all animal ingredients. Vegetable curries and toppings use the regular roux.',
    hours_raw: 'Daily 11:00–23:00, open year-round; delivery 11:00–22:00 (Tabelog). Cards (JCB, AMEX, Diners), e-money and QR accepted. A late-night surcharge applies chain-wide to orders from 22:00 (official site).',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambasennichimae 10-14, next to Namba Grand Kagetsu (NGK) — 5 min from Namba Stn',
    cuisine: 'CoCo Ichibanya curry chain · allergen-free curry (no wheat, egg or milk; chain menu) ¥464 · low-carb curry on cauliflower rice · spinach curry with crispy chicken · limited summer vegetable-and-chicken curry · hayashi rice · rice size and spice level to order · 35 seats',
    website: 'https://www.ichibanya.co.jp/', gmaps: gm('CoCo壱番屋 難波千日前店'), menu_url: AF,
    notes: "[Curry · CoCo Ichibanya by NGK, with an allergen-free curry] The CoCo Ichibanya beside Namba Grand Kagetsu: the national curry chain, built your way by rice size, spice level and toppings. Of note for gluten-avoiders, the chain's menu includes an allergen-free curry made without wheat, egg, milk, buckwheat, peanut, shrimp or crab. The sauce is served in its sealed package for safety, at ¥464 with 200 g of rice. Not every branch carries it, so ask first. A May 2026 visitor ordered the low-carb curry on cauliflower rice. Regulars also come for spinach curry with crispy chicken, a summer eggplant-okra-tomato chicken curry, or hayashi rice. Mostly overseas staff; one diner found them unsure about coupons. Rarely crowded.",
    chef_bio: { chef_name: null, roles: [], origin: 'Next to NGK (Tabelog; reviews)', background: 'CoCo Ichibanya chain (ichibanya.co.jp).', philosophy: null, specialty: 'Build-your-own curry rice.',
      anecdotes: [
        { text: 'Official menu: 「※卵、乳、小麦、そば、落花生（ピーナッツ）、えび、かにを含む特定原材料は使用しておりません。」 and 「…カレーソースは安全面を考慮してパッケージの状態でご提供いたします。」', source: AF },
        { text: '"The diet-friendly \'Low-Carb Curry.\'… This curry uses cauliflower rice instead of regular rice." — May 2026.', source: R + 'B528161741/' },
      ],
      japanese_sources_summary: '公式(ichibanya.co.jp): 特定原材料を使用していないカレー(卵、乳、小麦、そば、落花生、えび、かにを含む特定原材料は不使用、消費者庁許可の特別用途食品ではない、カレーソースは安全面を考慮してパッケージのまま提供、ライス200gで税込464円・100gで税込232円、取り扱いのない店舗あり)、22時〜翌5時は深夜料金7%。食べログ: CoCo壱番屋 難波千日前店、大阪市中央区難波千日前10-14、06-6649-0617、毎日11:00〜23:00、デリバリー11:00〜22:00、年中無休、カード(JCB、AMEX、Diners)・電子マネー・QR決済可、35席。2026年の口コミ(3〜10月): NGKの隣、あまり混まない、外国人スタッフが多い、注文の間違い、低糖質カレー(カリフラワーライス)とほうれん草、ほうれん草カレーにパリパリチキン、期間限定の夏野菜カレー(なす、オクラ、トマト、チキン)にスクランブルエッグ、甘口、クーポンや商品券に不慣れ、ハヤシライス、ご飯400g。',
      confidence: 'medium', sources: [TB, AF, R + 'B528161741/', R + 'B531978242/', R + 'B533790749/', R + 'B537051095/', R + 'B525279791/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Chain menu with photos; mostly overseas staff (2026).' },
    safety: { ...SAFETY0, confidence: 'medium',
      positives: [ { text: 'Official chain menu: allergen-free curry without wheat, egg or milk; sauce served in its sealed package for safety. Not carried at every branch.', source: AF } ],
      staff_allergy_handling: ['Chain allergy information published on the official site (menu page link to allergy.pdf).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前10-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前10番14号 (go) 2m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [AF, R + 'B528161741/'],
    price_note: 'Allergen-free curry prices from the official chain menu; branch prices can differ.', last_checked: TODAY, items: [
      it('特定原材料を使用していないカレー', 'tokutei genzairyō o shiyō shite inai karē', 'Allergen-free curry (200 g rice)', '¥464', 'Allergen-free', 'gf', 'ask', 'Official chain menu; not every branch carries it.', 'allergen_free'),
      it('特定原材料を使用していないカレー', 'tokutei genzairyō o shiyō shite inai karē', 'Allergen-free curry (100 g rice)', '¥232', 'Allergen-free', 'gf', 'ask', 'Official chain menu.', 'allergen_free_s'),
      it('', '', 'Low-carb curry (cauliflower rice)', '', 'Curry', 'no', 'no', 'May 2026.', 'lowcarb'),
      it('', '', 'Spinach curry with crispy chicken', '', 'Curry', 'no', 'no', 'July 2026.', 'spinach'),
      it('', '', 'Hayashi rice', '', 'Rice', 'no', 'no', 'October 2026.', 'hayashi'),
    ] }, {
    cuisine: 'CoCo壱番屋のカレーチェーン・特定原材料を使用していないカレー(小麦・卵・乳不使用、チェーンのメニュー)464円・カリフラワーライスの低糖質カレー・パリパリチキンのほうれん草カレー・期間限定の夏野菜チキンカレー・ハヤシライス・ご飯の量と辛さを選べる・35席',
    neighborhood: '難波千日前10-14、なんばグランド花月(NGK)の隣。なんば駅から徒歩5分',
    gf_detail: 'チェーンの公式メニューに、卵、乳、小麦、そば、落花生、えび、かにを使わない「特定原材料を使用していないカレー」があり、安全のためソースはパッケージのまま提供(ライス200gで税込464円、100gで232円)。病者用食ではなく、取り扱いのない店舗もあるので、この店にあるか確認を。ほかのメニューは通常の小麦のルーのカレー。',
    vegan_detail: '要確認。特定原材料を使用していないカレーは卵と乳を使っていませんが、動物性原料をすべて使っていないとは書かれていません。野菜カレーやトッピングは通常のルー。',
    notes: '[カレー・NGK隣のCoCo壱番屋、特定原材料不使用のカレーも] なんばグランド花月の隣のCoCo壱番屋で、ご飯の量、辛さ、トッピングを選ぶ全国チェーン。グルテンを避けたい人に、チェーンのメニューには小麦、卵、乳、そば、落花生、えび、かにを使わない「特定原材料を使用していないカレー」があり、安全のためソースはパッケージのまま、ライス200gで464円。全店にはないので先に確認を。2026年5月にはカリフラワーライスの低糖質カレーを頼んだ人も。常連はパリパリチキンのほうれん草カレー、夏のなす・オクラ・トマトのチキンカレー、ハヤシライスも。スタッフは主に外国人で、クーポンに不慣れだったという声も。あまり混みません。',
  });
}

// ================================================================ 九州らーめん亀王 難波NGK前店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27049498/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kyushu_ramen_kio_namba_ngk', name: '九州らーめん亀王 難波NGK前店 (Kyushu Ramen Kio Namba NGK-mae)', category: 'OMNI',
    lat: 34.664588, lng: 135.503697, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth, back fat, chashu.',
    hours_raw: 'Daily 11:00–24:00 (L.O. 23:30); closed New Year\'s Day (Tabelog). Tablet ordering. No cards or e-money; QR accepted (Tabelog). Reservations taken.',
    hours: ALL(day(['11:00', '23:59'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nambasennichimae 10-13, opposite Namba Grand Kagetsu (NGK) — 5 min from Namba Stn',
    cuisine: 'Kyushu-style tonkotsu chain · Kio ramen (mellow tonkotsu on ultra-thin noodles) · tomato ramen ¥890, three spice levels · tomato tsukemen · burnt-back-fat tonkotsu shoyu with thick noodles · chilled abura-soba ¥890 (summer) · half fried rice ¥490 · extra noodles by firmness · 28 seats',
    website: 'http://www.kiou.co.jp/', gmaps: gm('九州らーめん亀王 難波NGK前店'), menu_url: null,
    notes: "[Ramen · Kyushu tonkotsu and tomato ramen opposite NGK] A branch of the Kyushu Ramen Kio chain facing Namba Grand Kagetsu, with tablet ordering, open until midnight. The signature Kio ramen is a creamy, rich tonkotsu mellowed for Kansai palates, with no gaminess, on ultra-thin straight noodles. One reviewer ordered the extra noodles extra-firm and got them almost raw. A long-standing favourite is the tomato ramen (¥890), spicy at three levels and milder than Shin Ramyun; there's a tomato tsukemen too. For something heavier, the burnt-back-fat tonkotsu shoyu with thick noodles and lots of garlic works as a gentle Jiro-style. Summer brings a chilled abura-soba (¥890), and the half fried rice is ¥490. A lunch mix of tourists and local office workers.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 2 April 2010 (Tabelog)', background: 'Kyushu Ramen Kio chain (kiou.co.jp).', philosophy: null, specialty: 'Kio ramen; tomato ramen.',
      anecdotes: [
        { text: '"It\'s a classic menu item that has been loved since the establishment\'s inception, featuring a rich tonkotsu (pork bone) ramen base that has been uniquely mellowed to suit the taste of Kansai locals." — September 2026, Kio ramen.', source: R + 'B535876416/' },
        { text: '"I decided to finally try the tomato ramen that I\'ve heard about for the past 10 years… Wow, it\'s delicious!!!" — July 2026, ¥890.', source: R + 'B531030393/' },
      ],
      japanese_sources_summary: '食べログ: 九州らーめん亀王 難波NGK前店、大阪市中央区難波千日前10-13、06-4397-6545、予約可、毎日11:00〜24:00(L.O.23:30)、元日休み、カード・電子マネー不可、QR可、28席(4人テーブル2、8人テーブル1)、2010年4月2日開店、公式 kiou.co.jp。2026年の口コミ(1〜9月): 焦がし背脂とんこつ醤油(特盛、肉・麺・野菜増し)、にんにく、もちもちの太麺、二郎系の入門に、トマトラーメン(辛さ3段階、辛さ2は辛ラーメンよりマイルド)、トマトつけ麺、トマトラーメン890円、麺の硬さを聞かれる、中細麺、インバウンドと近くの会社員、亀王ラーメンと半チャーハンと替え玉(硬めは粉落としのよう)、冷やし油そば890円と半チャーハン490円をタブレットで注文、甘めで濃いめの醤油だれ、亀王ラーメンは関西向けにまろやかにした濃厚とんこつ、臭みがなくクリーミー、極細ストレート麺。',
      confidence: 'medium', sources: [TB, R + 'B535876416/', R + 'B531030393/', R + 'B530912107/', R + 'B520577389/', R + 'B534546379/', R + 'B535688520/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Ultra-thin straight noodles for Kio ramen; medium-thin for the tomato ramen; thick for the back-fat shoyu (2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Kio ramen (September 2026); tomato ramen ¥890 (July 2026).',
      chashu: 'Thin-sliced on the back-fat shoyu (January 2026).',
      notable_toppings: ['garlic', 'tomato (tomato ramen)', 'back fat (burnt back-fat shoyu)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Namba\'s Kansai-mellowed Kyushu tonkotsu opposite NGK, with a cult spicy tomato ramen.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B535876416/', '"A rich flavor with a strong essence of pork bone… creamy and smooth texture."'],
        oiliness: [R + 'B535876416/', '"Despite its richness, it doesn\'t feel heavy" — mid-scale.'],
        clarity: [R + 'B535876416/', 'Creamy tonkotsu — opaque.'],
        tare_strength: [R + 'B535876416/', '"Mellowed to suit the taste of Kansai locals" — mid-scale.'],
        noodle_firmness: [R + 'B534546379/', 'Firmness to order; extra-firm came "as firm as a powder drop" — mid-scale as default.'],
        aroma_punch: [R + 'B535876416/', '"Manages to suppress the typical gaminess and odor" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B535876416/', R + 'B534546379/', R + 'B531030393/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前10-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated January–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前10番13号 (go) 8m; OSM Kyushu Ramen Kio Namba-NGKmae node/2294578364 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531030393/', R + 'B535688520/'],
    price_note: 'Prices from July–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kio ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'kio'),
      it('', '', 'Tomato ramen (three spice levels)', '¥890', 'Ramen', 'no', 'no', 'July 2026.', 'tomato'),
      it('', '', 'Tomato tsukemen', '', 'Tsukemen', 'no', 'no', 'July 2026.', 'tomato_tsuke'),
      it('', '', 'Burnt-back-fat tonkotsu shoyu', '', 'Ramen', 'no', 'no', 'January 2026.', 'kogashi'),
      it('', '', 'Chilled abura-soba (summer)', '¥890', 'Seasonal', 'no', 'no', 'September 2026.', 'hiyashi_abura'),
      it('', '', 'Half fried rice', '¥490', 'Sides', 'no', 'no', 'September 2026.', 'han_chahan'),
    ] }, {
    cuisine: '九州とんこつのチェーン・亀王ラーメン(極細麺のまろやかなとんこつ)・辛さ3段階のトマトラーメン890円・トマトつけ麺・太麺の焦がし背脂とんこつ醤油・冷やし油そば890円(夏)・半チャーハン490円・硬さを選べる替え玉・28席',
    neighborhood: '難波千日前10-13、なんばグランド花月(NGK)の前。なんば駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、炒飯。',
    vegan_detail: 'ヴィーガンではありません。とんこつスープ、背脂、チャーシュー。',
    notes: '[ラーメン・NGK前の九州とんこつとトマトラーメン] なんばグランド花月の前にある九州らーめん亀王の店で、タブレット注文、深夜0時まで。看板の亀王ラーメンは関西向けにまろやかにした、臭みのないクリーミーな濃厚とんこつに極細ストレート麺。替え玉を硬めにしたら粉落としのようだったという声も。長年のファンが多いのはトマトラーメン(890円)で、辛さは3段階、辛ラーメンよりマイルド。トマトつけ麺も。がっつりなら太麺の焦がし背脂とんこつ醤油ににんにくたっぷりで、二郎系の入門に。夏は冷やし油そば(890円)、半チャーハンは490円。昼は観光客と近くの会社員でにぎわいます。',
  });
}

// ================================================================ どうとんぼり神座 心斎橋PARCO店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27132093/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kamukura_shinsaibashi_parco', name: 'どうとんぼり神座 心斎橋PARCO店 (Dotonbori Kamukura Shinsaibashi PARCO)', category: 'OMNI',
    lat: 34.673856, lng: 135.500966, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Not vegan as far as sources show: chashu and egg toppings; the broth base is not described. Ask.',
    hours_raw: 'Daily 11:00–22:00; 31 December 11:00–18:00; closed 1 January (Tabelog). Ticket machine. Cards and e-money (Edy, iD) accepted; no QR (Tabelog).',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi PARCO B2F (Shinsaibashi Neon Dining Street), Shinsaibashi-suji 1-8-3 — 1 min from Shinsaibashi Stn',
    cuisine: 'Kamukura\'s light napa-cabbage soy broth · "delicious ramen" under ¥1,000 · braised-egg ramen · seasonal specials (winter 2026) · slightly curly thin noodles · garlic, doubanjiang and chives on the table · 24 seats',
    website: 'https://kamukura.co.jp/', gmaps: gm('どうとんぼり神座 心斎橋PARCO'), menu_url: null,
    notes: "[Ramen · Kamukura in PARCO's basement dining street] A 24-seat Kamukura on the B2F dining street of Shinsaibashi PARCO, a minute from Shinsaibashi Station. The chain's broth is light, almost consommé-like, sweet with napa cabbage and vegetables, on slightly curly thin noodles with a nice chew. The basic bowl stays under ¥1,000, and the braised-egg ramen has a runny yolk. Build it up from the table: garlic, doubanjiang and chives turn it into a hearty, spicy bowl. A winter special ran in early 2026. A line forms at the ticket machine when tourists arrive, but turnover is quick.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 October 2022 (Tabelog)', background: 'Kamukura chain (kamukura.co.jp).', philosophy: null, specialty: 'Napa-cabbage soy ramen.',
      anecdotes: [
        { text: '"The broth had a unique light flavor reminiscent of consomme, yet it was deliciously addictive. The noodles were slightly curly and thin." — September 2026, braised-egg ramen.', source: R + 'B465331764/' },
        { text: '"The thin noodles had a nice chewiness, and the broth was light yet incredibly tasty, packed with plenty of vegetables." — March 2026.', source: R + 'B524650949/' },
      ],
      japanese_sources_summary: '食べログ: どうとんぼり神座 心斎橋PARCO店、大阪市中央区心斎橋筋1-8-3 心斎橋PARCO B2F、06-6121-6456、予約不可、毎日11:00〜22:00、12月31日は18:00まで、1月1日休み、カード・電子マネー(Edy、iD)可、QR不可、24席、2022年10月1日開店、公式 kamukura.co.jp。口コミ(2025年10月〜2026年9月): 心斎橋ネオン食堂街、券売機に海外客の列、煮玉子ラーメン(コンソメのようなあっさりスープ、ややちぢれた細麺)、卓上のにんにく、豆板醤、ニラでパンチのある一杯に、半熟の煮玉子、土曜19時で7割ほど、値上がりしたが満足、冬の限定、1,000円以下のおいしいラーメン、細麺のもちもち、野菜たっぷり、昼は混むが回転が早い。',
      confidence: 'medium', sources: [TB, R + 'B465331764/', R + 'B524650949/', R + 'B533578602/', R + 'B523900300/', R + 'B515198830/'] },
    ramen: {
      broth_base: ['other'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'curly', hydration: null, handmade: false, notes: 'Slightly curly thin noodles, chewy (March–September 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '"Delicious ramen" under ¥1,000; braised-egg ramen (2026).',
      chashu: null,
      notable_toppings: ['napa cabbage', 'braised egg', 'garlic (table)', 'doubanjiang (table)', 'chives (table)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'ask', note: 'Broth base not described in sources.' },
      pantheon: 'The PARCO-basement Kamukura: a consommé-light cabbage soy broth you spice up at the table.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B524650949/', '"The broth was light yet incredibly tasty."'],
        oiliness: [R + 'B533578602/', '"It\'s light yet packed with umami."'],
        clarity: [R + 'B465331764/', '"A unique light flavor reminiscent of consomme" — mid-scale (inferred).'],
        tare_strength: [R + 'B523900300/', '"Light and delicious as ever" — placed low-mid.'],
        noodle_firmness: [R + 'B524650949/', '"The thin noodles had a nice chewiness."'],
        aroma_punch: [R + 'B465331764/', 'Mild until table garlic, doubanjiang and chives are added — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B465331764/', R + 'B524650949/', R + 'B533578602/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; department-store dining floor.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-8-3 心斎橋PARCO B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2025–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目8番3号 (go) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B465331764/', R + 'B524650949/'],
    price_note: 'Basic ramen under ¥1,000 (March 2026); exact prices not captured.', last_checked: TODAY, items: [
      it('', '', '"Delicious ramen"', 'under ¥1,000', 'Ramen', 'no', 'ask', 'March 2026.', 'oishii'),
      it('', '', 'Braised-egg ramen', '', 'Ramen', 'no', 'no', 'September 2026.', 'nitamago'),
    ] }, {
    cuisine: '神座のあっさりした白菜の醤油スープ・1,000円以下のおいしいラーメン・煮玉子ラーメン・季節の限定(2026年冬)・ややちぢれた細麺・卓上ににんにく、豆板醤、ニラ・24席',
    neighborhood: '心斎橋PARCO B2F(心斎橋ネオン食堂街)、心斎橋筋1-8-3。心斎橋駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の細麺。',
    vegan_detail: '情報の範囲ではヴィーガンとは言えません。チャーシューや卵のトッピング、スープのベースは書かれていません。要確認。',
    notes: '[ラーメン・PARCO地下の食堂街の神座] 心斎橋PARCOの地下2階の食堂街にある24席の神座で、心斎橋駅から1分。チェーンのスープはコンソメのようにあっさりで、白菜や野菜の甘み、ややちぢれたもちもちの細麺。普通のラーメンは1,000円以下、煮玉子ラーメンは半熟の黄身。卓上のにんにく、豆板醤、ニラで、がっつりピリ辛の一杯に。2026年初めは冬の限定も。観光客が来ると券売機に列ができますが、回転は早め。',
  });
}

save();
