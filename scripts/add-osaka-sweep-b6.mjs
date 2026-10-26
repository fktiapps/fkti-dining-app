// Osaka sweep (2-mile circle around Dotonbori), batch 6 — ramen phase, nearest first (all OMNI).
//   + 一蘭 道頓堀店別館 (Ichiran's 82-seat Dotonbori annex; counter 24 h)
//   + 油そば きりん寺 千日前店 (abura-soba chain shop, cash only)
//   + 作ノ作 千日前本店 ("ganso Naniwa tonkotsu", early morning to late night; smoking allowed)
//   + 鶏白湯らーめん 麺はともあれ (espuma-style chicken paitan, 9 seats)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, save } = openCitySweep('osaka', TODAY, 6);

// ================================================================ 一蘭 道頓堀店別館
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27084189/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://ichiran.com/shop/kinki/dotonbori-south/';
  const d = day(['00:00', '23:59']);
  put({
    id: 'osaka_ichiran_dotonbori_bekkan', name: '一蘭 道頓堀店別館 (Ichiran Dotonbori Annex)', category: 'OMNI',
    lat: 34.66843, lng: 135.503234, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles. Tabelog notes allergy information is available.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone (tonkotsu) broth, chashu.',
    hours_raw: 'Flavour-concentration counter open 24 hours; table seats 8:00–23:00 (official page, which warns seats and hours can change at short notice). Open year-round (Tabelog). Buy a ticket and fill in the order sheet while you queue.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-4-16, Sennichimae end — 3 min from Namba Stn exit 14',
    cuisine: 'Ichiran Hakata tonkotsu · order sheet for richness, garlic, onions, red sauce and noodle firmness · booth counter (24 h) and table floors · natural tonkotsu ramen ¥1,180 · extra noodles ¥210 · soft salted egg ¥160 · souvenirs',
    website: OWN, gmaps: gm('一蘭 道頓堀店別館'), menu_url: null,
    notes: "[Ramen · Ichiran's big Dotonbori annex, open all night] Ichiran's 82-seat annex at the Sennichimae end of Dotonbori, since 2015. The 30-seat booth counter runs 24 hours, and the table floors run 8:00–23:00. It is the familiar ritual: buy a ticket while you queue, then tick richness, fat, garlic, green or white onion, the red secret sauce and noodle firmness on the order sheet. The bowl is Hakata-style tonkotsu with firm, very thin noodles. One diner found it light and not greasy, another rich with no off-odour. The natural tonkotsu ramen was ¥1,180 and extra noodles ¥210 (August 2026), with a soft salted egg at ¥160. Queues can reach an hour (October 2026), even 10 minutes at 2 am. The table floors suit groups and families: one August visitor noted an adult can bring up to five children free. Souvenirs are sold on the way out.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 April 2015 (Tabelog)', background: 'Ichiran chain (ichiran.com), which calls itself a company that researches tonkotsu ramen more than anyone in the world and serves only tonkotsu ramen.', philosophy: '「とんこつラーメンを世界一研究する会社」 (official site).', specialty: 'Natural tonkotsu ramen with the red secret sauce.',
      anecdotes: [
        { text: '"I filled out the order sheet with my preferences: standard richness, extra creamy, one clove of garlic, chashu included, a mix of green and white onions, the signature red sauce at the standard level, and firm noodles." — September 2026, at 8:20 am; natural tonkotsu ramen ¥1,180, soft salted egg ¥160.', source: R + 'B435909426/' },
        { text: '"At 2 AM, even at this 24-hour restaurant, I had to wait 10 minutes." — July 2026.', source: R + 'B532441663/' },
      ],
      japanese_sources_summary: '食べログ: 一蘭 道頓堀店別館、大阪市中央区道頓堀1-4-16、なんば駅14番出口徒歩3分、82席(味集中カウンター30、テーブル52)、24時間営業・年中無休、予約不可、禁煙、カード・電子マネー可、アレルギー情報あり、2015年4月16日開店、公式 ichiran.com。公式: 味集中カウンター24時間、テーブル席8:00〜23:00、席数・営業時間は急に変わることがある。2026年の口コミ: 朝8時台でも人が多い、天然とんこつラーメン1,180円、半熟塩ゆで玉子160円、オーダー用紙(こってり度、にんにく、ねぎ、赤い秘伝のたれ、麺の硬さ)、博多とんこつの手本、極細麺、あっさりで脂っこくない、臭みのないとんこつ、替玉210円、深夜2時でも10分待ち、10月は1時間待ちも、並びながら券売機で食券と用紙、3階のテーブル席、大人1人で子ども5人まで無料、ミニサイズ、おみやげ販売。',
      confidence: 'high', sources: [TB, OWN, R + 'B435909426/', R + 'B534350887/', R + 'B537869200/', R + 'B534191433/', R + 'B532441663/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['other'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Very thin noodles; firmness chosen on the order sheet; extra noodles ¥210 (August 2026).' },
      regional_style: ['Hakata'], sub_genre: ['ramen'],
      signature_bowl: '天然とんこつラーメン (natural tonkotsu ramen) ¥1,180 (August–September 2026).',
      chashu: 'Thin chashu ("meaty and had a nice chew", September 2026); optional on the order sheet.',
      notable_toppings: ['red secret sauce', 'green and white onion', 'garlic', 'soft salted egg', 'wood ear'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'The all-night Ichiran at the Sennichimae end of Dotonbori: Hakata tonkotsu tuned on the order sheet, booths round the clock and tables for groups.',
      profile: { richness: 3, oiliness: 2, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537869200/', '"The rich tonkotsu broth is free of any unpleasant odors"; richness is chosen on the order sheet (' + R + 'B435909426/).'],
        oiliness: [R + 'B534350887/', '"The light and non-greasy tonkotsu broth."'],
        clarity: [R + 'B435909426/', 'Hakata-style tonkotsu, ordered "extra creamy" — an opaque broth.'],
        tare_strength: [R + 'B435909426/', '"The red signature sauce added a slight kick"; one diner found the regular red sauce "a bit overwhelming" (' + R + 'B534350887/).'],
        noodle_firmness: [R + 'B435909426/', '"Firm, thin noodles that clung beautifully to the soup."'],
        aroma_punch: [R + 'B435909426/', 'Garlic is chosen on the order sheet; no source describes a strong aroma — placed mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B435909426/', R + 'B534350887/', R + 'B537869200/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order sheet and ticket machine; busy with overseas visitors.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-4-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official branch page and Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目4番16号 (go) 6m; OSM node/4488318892 「一蘭 道頓堀店別館」 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B435909426/', R + 'B534350887/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('天然とんこつラーメン', 'tennen tonkotsu rāmen', 'Natural tonkotsu ramen', '¥1,180', 'Ramen', 'no', 'no', 'August–September 2026.', 'tonkotsu'),
      it('替玉', 'kaedama', 'Extra noodles', '¥210', 'Extras', 'no', 'no', 'August 2026.', 'kaedama'),
      it('半熟塩ゆで玉子', 'hanjuku shio-yude tamago', 'Soft-boiled salted egg', '¥160', 'Toppings', 'gf', 'no', 'September 2026.', 'egg'),
    ] }, {
    cuisine: '一蘭の博多とんこつ・オーダー用紙でこってり度、にんにく、ねぎ、赤いたれ、麺の硬さ・味集中カウンター(24時間)とテーブル席・天然とんこつラーメン1,180円・替玉210円・半熟塩ゆで玉子160円・おみやげ',
    neighborhood: '道頓堀1-4-16、千日前側。なんば駅14番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の極細麺。食べログにはアレルギー情報ありとの記載。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー。',
    notes: '[ラーメン・夜通し開いている道頓堀の大きな一蘭] 道頓堀の千日前寄りにある82席の一蘭の別館で、2015年から。30席の味集中カウンターは24時間、テーブル席は8時から23時まで。並びながら食券を買い、オーダー用紙でこってり度、にんにく、ねぎ(青ねぎか白ねぎ)、赤い秘伝のたれ、麺の硬さを選ぶいつもの流れです。博多とんこつに硬めの極細麺。あっさりで脂っこくないという客も、濃厚で臭みがないという客も。天然とんこつラーメン1,180円、替玉210円(2026年8月)、半熟塩ゆで玉子160円。10月は1時間待ちも、深夜2時でも10分待ち。テーブル席はグループや家族向けで、大人1人で子ども5人まで無料だったという8月の客も。帰りにおみやげも買えます。',
  });
}

// ================================================================ 油そば きりん寺 千日前店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27136564/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '23:59']);
  put({
    id: 'osaka_kirinji_sennichimae', name: '油そば きりん寺 千日前店 (Abura-soba Kirinji Sennichimae)', category: 'OMNI',
    lat: 34.668335, lng: 135.503231, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles in a soy-based sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu, egg; kara-age sets.',
    hours_raw: 'Daily 11:00–24:00 (Tabelog); an October 2026 reviewer says it stays open until around 1 am. Cash only: no cards, e-money or QR payments (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-4-15, on the Sennichimae shopping street by Round One — near Namba Walk',
    cuisine: 'Abura-soba (soupless oil noodles) · thick chewy noodles, chashu, menma, shredded nori and sesame · soft egg, kimchi, extra meat toppings · vinegar and chili oil on the table · chashu rice bowl · kara-age and rice set · under ¥1,000 · cash only',
    website: 'http://suzume-group.co.jp/kirinji/', gmaps: gm('油そば きりん寺 千日前店'), menu_url: null,
    notes: "[Ramen · late-night abura-soba on Sennichimae] A two-floor, 26-seat Kirinji shop on the Sennichimae shopping street, since 2023, serving soupless abura-soba. Thick, chewy noodles come coated in an oil-and-sauce base under chashu, menma, plenty of shredded nori and sesame. Add a soft-boiled egg, kimchi or extra meat, then mix well and doctor it with the vinegar and chili oil on the table, as the wall instructions suggest. One fan says it becomes addictive by the third visit. It's cheap: a regular with soft egg came in under ¥1,000 in March 2026. A chashu rice bowl and a kara-age and rice set round it out. Regulars come after drinks or a live show, and lines of overseas visitors are common. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 June 2023 (Tabelog)', background: 'Kirinji abura-soba chain (Suzume group site, suzume-group.co.jp).', philosophy: null, specialty: 'Abura-soba.',
      anecdotes: [
        { text: '"The freshly boiled noodles are mixed with oil and sauce, following Kirinji\'s unique style. On the table, vinegar and chili oil are available." — July 2026, around 3 pm on a weekday.', source: R + 'B533730081/' },
        { text: '"I ordered the regular size with a soft-boiled egg topping. In this day and age, it\'s truly appreciated to find something under JPY 1000." — March 2026, late at night.', source: R + 'B508056992/' },
      ],
      japanese_sources_summary: '食べログ: 油そば きりん寺 千日前店、大阪市中央区道頓堀1-4-15、26席(カウンター16、テーブル10)、毎日11:00〜24:00、予約不可、禁煙、カード・電子マネー・QR決済不可、2023年6月1日開店、サイト suzume-group.co.jp/kirinji。2025〜2026年の口コミ: ライブの後に食べたくなる、外国人客の行列、チャーシューに酢をかけると絶品、深夜まで開いている、並盛に半熟玉子で1,000円以下(2026年3月)、にんにく、チャーシュー丼、唐揚げと白ご飯のセット、壁とテーブルに食べ方の説明、1階と2階、半熟玉子・キムチ・肉増し・全部のせ、太くもちもちの麺、酢とラー油、3回目でハマる、チャーシュー・メンマ・刻み海苔・ごま、ラウンドワン沿いの商店街、なんばウォークから近い、夜1時ごろまで開いている(2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B533730081/', R + 'B508056992/', R + 'B536240778/', R + 'B534138167/', R + 'B537868996/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['other'], aroma_oil: ['other'], richness: 'medium',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick, chewy noodles (July and September 2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba'],
      signature_bowl: '油そば (abura-soba) with soft-boiled egg, under ¥1,000 for a regular (March 2026).',
      chashu: 'Chashu ("incredibly satisfying… paired with vinegar", August 2025).',
      notable_toppings: ['menma', 'shredded nori', 'sesame', 'soft-boiled egg', 'kimchi', 'table vinegar and chili oil'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chashu, egg.' },
      pantheon: 'The late-night soupless bowl on Sennichimae: thick, chewy noodles in an oil-and-sauce base, mixed hard and sharpened with vinegar and chili oil.',
      profile: { richness: 3, oiliness: 4, clarity: 3, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536205367/', '"Since it\'s a dry noodle dish, it wasn\'t too heavy."'],
        oiliness: [R + 'B533730081/', '"The freshly boiled noodles are mixed with oil and sauce" — an oil-based, soupless dish.'],
        clarity: [R + 'B533730081/', '"A noodle dish without soup" — clarity does not apply; neutral mid-scale (inferred).'],
        tare_strength: [R + 'B532674803/', '"The noodles combined perfectly with the rich umami sauce."'],
        noodle_firmness: [R + 'B533730081/', '"The noodles were thick and had a chewy texture."'],
        aroma_punch: [R + 'B508056992/', 'Garlic and vinegar are added at the table ("I topped it off with the familiar garlic for a strong flavor"); placed mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B533730081/', R + 'B536205367/', R + 'B532674803/', R + 'B508056992/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'How-to-eat instructions on the walls and tables; cash only.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-4-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目4番15号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508056992/', R + 'B533730081/'],
    price_note: 'Only an "under ¥1,000" figure (March 2026); no menu prices captured.', last_checked: TODAY, items: [
      it('油そば', 'abura soba', 'Abura-soba (soupless oil noodles)', '', 'Noodles', 'no', 'no', 'Regular with soft egg under ¥1,000 (March 2026).', 'abura_soba'),
      it('', '', 'Toppings: soft-boiled egg, kimchi, extra meat, everything', '', 'Toppings', 'no', 'no', 'July 2026.', 'toppings'),
      it('チャーシュー丼', '', 'Chashu rice bowl', '', 'Rice', 'no', 'no', 'July 2026.', 'chashu_don'),
      it('', '', 'Kara-age and white rice set', '', 'Sets', 'no', 'no', 'July 2026.', 'karaage_set'),
    ] }, {
    cuisine: '油そば(汁なし)・太くもちもちの麺にチャーシュー、メンマ、刻み海苔、ごま・半熟玉子、キムチ、肉増し・卓上の酢とラー油・チャーシュー丼・唐揚げとご飯のセット・1,000円以下・現金のみ',
    neighborhood: '道頓堀1-4-15、ラウンドワン沿いの千日前の商店街。なんばウォークから近い',
    gf_detail: 'グルテンフリーではありません。醤油ベースのたれに小麦の太麺。',
    vegan_detail: 'ヴィーガンではありません。チャーシュー、卵。唐揚げのセットも。',
    notes: '[ラーメン・千日前の深夜の油そば] 千日前の商店街にある2階建て26席のきりん寺で、2023年から汁なしの油そばを出しています。太くもちもちの麺に油とたれが絡み、チャーシュー、メンマ、たっぷりの刻み海苔、ごま。半熟玉子やキムチ、肉増しを足し、壁の説明どおりよく混ぜ、卓上の酢とラー油で味を変えて。3回目でハマるというファンも。安く、2026年3月は並盛に半熟玉子で1,000円以下。チャーシュー丼や唐揚げとご飯のセットも。飲んだ後やライブ帰りの常連が多く、海外からの客の行列もよく見かけます。現金のみ。',
  });
}

// ================================================================ 作ノ作 千日前本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001537/'; const R = TB + 'dtlrvwlst/';
  const mt = day(['05:00', '02:30']), fr = day(['05:00', '23:59']), all = day(['00:00', '23:59']);
  put({
    id: 'osaka_sakunosaku_sennichimae', name: '作ノ作 千日前本店 (Saku no Saku Sennichimae)', category: 'OMNI',
    lat: 34.668099, lng: 135.503073, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth, chashu, naruto fish cake.',
    hours_raw: 'Mon–Thu 5:00–2:30 next morning; Fri 5:00–24:00; Sat–Sun open 24 hours (Tabelog). Ticket machine out front. No credit cards. Smoking allowed (Tabelog).',
    hours: { 0: mt, 1: mt, 2: mt, 3: mt, 4: fr, 5: all, 6: all }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-1-1, on the Sennichimae shopping street just off Dotonbori',
    cuisine: '"Ganso Naniwa tonkotsu" — light Osaka-style tonkotsu · Naniwa tonkotsu ¥1,080 (¥1,250 with spicy miso) · one free kaedama · chashu ramen ¥2,200 · gyoza ¥100 with ramen · chilled yuzu-lemon shio ramen ¥1,380 · shrimp-miso abura-soba · tantan tsukemen · smoking allowed',
    website: 'http://www.osaka-ramen.com/', gmaps: gm('作ノ作 千日前本店'), menu_url: null,
    notes: "[Ramen · the old-school Naniwa tonkotsu counter on Sennichimae] A long-running 11-seat L-shaped counter on the Sennichimae shopping street under a \"Ganso Naniwa Tonkotsu\" sign, open from 5 am to late, and round the clock at weekends. Its Osaka-style tonkotsu is light and slightly sweet, with thin straight noodles, chashu, naruto, menma and green onion (¥1,080; ¥1,250 with a scalp-tingling spicy miso), and the first kaedama is free. Season it with the pickled ginger, sesame and garlic on the counter. The mountainous chashu ramen is ¥2,200. Several diners say the ¥100 gyoza with a ramen beat the ramen itself. Summer brings a chilled yuzu-lemon shio ramen with ginger (¥1,380), and there's a shrimp-miso abura-soba and tantan tsukemen. Some find it pricey for what it is. Buy a ticket out front. Smoking is allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Sennichimae main shop (Tabelog listing name); a long-established name, per a June 2026 reviewer', background: 'Its sign reads "Ganso Naniwa Tonkotsu"; an August 2026 reviewer calls it said to be the birthplace of Osaka-style light soy-sauce tonkotsu, "though there are various theories".', philosophy: null, specialty: 'Naniwa tonkotsu ramen.',
      anecdotes: [
        { text: '"\'Kaedama, one time free!\' The staff smiles. Two slices of chashu (braised pork), two naruto (fish cakes), menma (bamboo shoots), and green onions. The broth is a light Osaka-style tonkotsu." — June 2026; Naniwa tonkotsu with spicy miso ¥1,250.', source: R + 'B371783174/' },
        { text: '"I purchased the Chilled Yuzu Lemon Ramen for JPY 1380… I learned it was a salt-based broth with ginger." — August 2026, 10:15 am.', source: R + 'B534351633/' },
      ],
      japanese_sources_summary: '食べログ: 作ノ作 千日前本店、大阪市中央区難波1-1-1、11席(カウンターのみ)、月〜木5:00〜翌2:30、金5:00〜24:00、土日24時間、カード不可、喫煙可、公式 osaka-ramen.com。店の紹介: 大阪の誇り、元祖浪花とんこつ、とんこつのほか醤油・塩・味噌・つけ麺、器からあふれるチャーシュー麺。2026年の口コミ: 店前の券売機、L字のカウンター、浪花とんこつ1,080円(辛みそで1,250円)、替玉1玉無料、チャーシュー2枚・なると2枚・メンマ・ねぎ、あっさりした大阪のとんこつ、細いストレート麺、辛みそが頭皮にくる辛さ、チャーシュー麺2,200円、ラーメンと一緒なら餃子100円、餃子のほうがうまいとの声、ほんのり甘いとんこつ、卓上の紅生姜・すりごま・にんにく、冷やし柚子レモンラーメン1,380円(生姜の効いた塩)、えび味噌油そば、おつまみセット、担々つけ麺、値段が高めとの声、飲んだ後の一杯。',
      confidence: 'medium', sources: [TB, R + 'B371783174/', R + 'B534351633/', R + 'B534221678/', R + 'B534647075/', R + 'B528494725/', R + 'B63023848/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles; first kaedama free (June 2026). Thick straight noodles in the shrimp-miso abura-soba (August 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen', 'mazesoba_aburasoba'],
      signature_bowl: '浪花とんこつ (Naniwa tonkotsu) ¥1,080; ¥1,250 with spicy miso (June 2026).',
      chashu: 'Two slices in the standard bowl; chashu ramen ¥2,200 (June 2026).',
      notable_toppings: ['spicy miso', 'naruto', 'menma', 'green onion', 'table pickled ginger, sesame and garlic'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'The "ganso Naniwa tonkotsu" counter: a light, slightly sweet Osaka-style soy tonkotsu, best with a spoon of fierce spicy miso and the ¥100 gyoza.',
      profile: { richness: 2, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B371783174/', '"The broth is a light Osaka-style tonkotsu. It\'s surprisingly light"; "a very light tonkotsu flavor" (' + R + 'B528494725/).'],
        oiliness: [R + 'B371783174/', 'Light broth; no source mentions oil — placed low (inferred).'],
        clarity: [R + 'B534647075/', '"Osaka-style light soy sauce tonkotsu" — a lighter tonkotsu, not described as clear.'],
        tare_strength: [R + 'B534221678/', '"The ramen had a slightly sweet tonkotsu base."'],
        noodle_firmness: [R + 'B534351633/', '"The thin straight noodles were perfectly firm" (chilled ramen).'],
        aroma_punch: [R + 'B371783174/', '"This is a real scalp-tingling spiciness!" with spicy miso; garlic on the counter (' + R + 'B534221678/).'],
      },
      confidence: 'medium', sources: [R + 'B371783174/', R + 'B534221678/', R + 'B534351633/', R + 'B528494725/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine out front; smoking allowed.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-1-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目1番1号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B371783174/', R + 'B534351633/', R + 'B528494725/'],
    price_note: 'Prices from June and August 2026 reviews.', last_checked: TODAY, items: [
      it('浪花とんこつ', 'naniwa tonkotsu', 'Naniwa tonkotsu ramen', '¥1,080', 'Ramen', 'no', 'no', 'June 2026; ¥1,250 with spicy miso.', 'naniwa_tonkotsu'),
      it('', '', 'Chashu ramen (Naniwa tonkotsu)', '¥2,200', 'Ramen', 'no', 'no', 'June 2026.', 'chashu_men'),
      it('', '', 'Chilled yuzu-lemon ramen (shio with ginger)', '¥1,380', 'Seasonal', 'no', 'no', 'August 2026.', 'hiyashi_yuzu'),
      it('', '', 'Shrimp-miso abura-soba', '', 'Noodles', 'no', 'no', 'August 2026.', 'ebi_miso_abura'),
      it('', '', 'Tantan tsukemen with raw egg', '', 'Noodles', 'no', 'no', 'August 2026.', 'tantan_tsukemen'),
      it('餃子', 'gyōza', 'Gyoza (with a ramen)', '¥100', 'Sides', 'no', 'no', 'May and August 2026.', 'gyoza'),
    ] }, {
    cuisine: '「元祖浪花とんこつ」のあっさりした大阪のとんこつ・浪花とんこつ1,080円(辛みそで1,250円)・替玉1玉無料・チャーシュー麺2,200円・ラーメンと一緒なら餃子100円・冷やし柚子レモンの塩ラーメン1,380円・えび味噌油そば・担々つけ麺・喫煙可',
    neighborhood: '難波1-1-1、道頓堀から入った千日前の商店街',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、チャーシュー、なると。',
    notes: '[ラーメン・千日前の昔ながらの浪花とんこつ] 千日前の商店街で「元祖浪花とんこつ」の看板を掲げる老舗で、L字のカウンター11席。朝5時から深夜まで、週末は24時間。大阪のとんこつはあっさりほんのり甘く、細いストレート麺にチャーシュー、なると、メンマ、ねぎ(1,080円、頭皮にくる辛みそ入りで1,250円)、替玉は1玉無料。カウンターの紅生姜、ごま、にんにくで味を調えて。山盛りのチャーシュー麺は2,200円。ラーメンと一緒に頼む100円の餃子のほうがおいしかったという客も複数。夏は生姜の効いた塩の冷やし柚子レモンラーメン(1,380円)、えび味噌の油そばや担々つけ麺も。値段のわりに高いという声も。店前の券売機で食券を。喫煙可。',
  });
}

// ================================================================ 鶏白湯らーめん 麺はともあれ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27133888/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['16:00', '02:30']), sat = day(['11:00', '02:30']), sun = day(['11:00', '23:00']);
  put({
    id: 'osaka_menha_tomoare', name: '鶏白湯らーめん 麺はともあれ (Toripaitan Ramen Menha Tomoare)', category: 'OMNI',
    lat: 34.670522, lng: 135.500971, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth, chicken and pork chashu, mentaiko, egg.',
    hours_raw: 'Mon–Fri 16:00–2:30; Sat 11:00–2:30; Sun 11:00–23:00; closing days vary (Tabelog). Join the queue at the ticket machine out front; a June 2026 visitor was sent a QR code to order before entering. Tabelog lists cards and e-money, but the same visitor says it was cash only.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: sat, 6: sun }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 2-7-11, Nippo Royal Bldg 1F (no street sign) — between Namba and Shinsaibashi',
    cuisine: 'Espuma-style frothy chicken paitan · flat chewy noodles · special toripaitan ¥1,705 with chicken and pork chashu, egg, purple onion, wood ear · mentaiko toripaitan · seasoned-egg rice · 9 seats · late nights',
    website: null, gmaps: gm('鶏白湯らーめん 麺はともあれ'), menu_url: null,
    notes: "[Ramen · frothy chicken paitan between Namba and Shinsaibashi] A 9-seat shop with five counter seats and a table, since 2022, on the first floor of a mixed-use building with no street sign. Follow the map, or the queue. The chicken paitan is whipped espuma-style into a fluffy, mousse-like broth, creamy and rich yet clean on the finish, over flat, chewy noodles. The special toripaitan (¥1,705, August 2026) adds a seasoned egg, chicken and pork chashu, purple onion and wood ear. The mentaiko version stirs spicy cod roe through the cream. Seasoned-egg rice goes well alongside. Expect waits even off-peak, as turnover is slow. One June diner waited over two hours on a Saturday, and another found it competent but characterless.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 December 2022 (Tabelog)', background: 'Instagram @men_wa_tomoare (per a July 2026 review). A June 2026 diner calls it a sister shop of a well-known restaurant, without naming it.', philosophy: null, specialty: 'Espuma-style chicken paitan.',
      anecdotes: [
        { text: '"The espuma-style broth was fluffy and smooth, with a rich flavor that truly highlighted the deliciousness of the chicken. It paired perfectly with the chewy noodles." — July 2026.', source: R + 'B532666510/' },
        { text: '"I ordered the Special Toripaitan Ramen (JPY 1,705)… Toppings included a seasoned egg, chicken chashu, pork chashu, purple onion, and wood ear mushrooms." — August 2026.', source: R + 'B536952393/' },
      ],
      japanese_sources_summary: '食べログ: 鶏白湯らーめん 麺はともあれ、大阪市中央区心斎橋筋2-7-11 日宝ロイヤルビル、06-4708-8884、9席、月〜金16:00〜翌2:30、土11:00〜翌2:30、日11:00〜23:00、不定休、禁煙、カード・電子マネー可、2022年12月22日開店。店の紹介: エスプーマ仕立てのスープと中細の平打ち麺、鶏白湯らーめんの種類、ご飯もの、おつまみ。2026年の口コミ: 夜10時でも2組待ち、店前の券売機で予約、個性がないとの声、土曜16:45に並び19:10に入店、QRコードで先に注文、カウンター5席とテーブル1つ、回転が遅い、提供時にかすかなにおい、もちもちの平打ち麺、現金のみ(2026年6月)、明太鶏白湯、ムースのような泡のスープ、豚チャーシューと半熟玉子、通りに看板がない、雑居ビルの1階、インスタグラム @men_wa_tomoare、特製鶏白湯らーめん1,705円(味玉、鶏チャーシュー、豚チャーシュー、紫玉ねぎ、きくらげ)、醤油で引き立つ鶏の旨み、味玉ご飯。',
      confidence: 'medium', sources: [TB, R + 'B532666510/', R + 'B536952393/', R + 'B529915817/', R + 'B532806563/', R + 'B534220440/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'flat', hydration: null, handmade: false, notes: 'Tabelog: medium-thin flat noodles; reviewers describe them as thick, plump and chewy (2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan'],
      signature_bowl: '特製鶏白湯らーめん (special chicken paitan ramen) ¥1,705 (August 2026).',
      chashu: 'Chicken and pork chashu ("large, moist, and tender chicken chashu", July 2026).',
      notable_toppings: ['seasoned egg', 'purple onion', 'wood ear', 'mentaiko (mentaiko version)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'The signless 9-seater between Namba and Shinsaibashi whipping chicken paitan into an espuma froth: creamy, rich and clean on the finish, best with the mentaiko.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B534220440/', '"The frothy chicken paitan broth is surprisingly creamy and rich, yet leaves a refreshing aftertaste."'],
        oiliness: [R + 'B532221333/', '"Despite its richness, I never got bored of the flavor" — not described as oily; placed mid-scale (inferred).'],
        clarity: [R + 'B532221333/', '"A rich and creamy chicken paitan broth whipped into a mousse-like texture" — opaque.'],
        tare_strength: [R + 'B536952393/', '"A rich and creamy chicken flavor enhanced by soy sauce, resulting in a simple yet satisfying taste."'],
        noodle_firmness: [R + 'B529915817/', '"Smooth, thick noodles that had a nice chewiness."'],
        aroma_punch: [R + 'B529449540/', '"It felt quite lacking in character"; a June diner noticed "a faint odor" on serving (' + R + 'B529915817/).'],
      },
      confidence: 'medium', sources: [R + 'B534220440/', R + 'B532221333/', R + 'B536952393/', R + 'B529915817/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue at the ticket machine; QR ordering; no street sign.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-7-11 日宝ロイヤルビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目7番11号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536952393/', R + 'B532221333/'],
    price_note: 'One price from an August 2026 review.', last_checked: TODAY, items: [
      it('特製鶏白湯らーめん', 'tokusei tori-paitan rāmen', 'Special chicken paitan ramen', '¥1,705', 'Ramen', 'no', 'no', 'August 2026.', 'tokusei_toripaitan'),
      it('', '', 'Special mentaiko chicken paitan ramen', '', 'Ramen', 'no', 'no', 'July 2026.', 'mentai_toripaitan'),
      it('', '', 'Seasoned-egg rice', '', 'Rice', 'no', 'no', 'July 2026.', 'ajitama_gohan'),
    ] }, {
    cuisine: 'エスプーマ仕立ての泡の鶏白湯・もちもちの平打ち麺・特製鶏白湯らーめん1,705円(鶏と豚のチャーシュー、味玉、紫玉ねぎ、きくらげ)・明太鶏白湯・味玉ご飯・9席・深夜まで',
    neighborhood: '心斎橋筋2-7-11 日宝ロイヤルビル1F(通りに看板なし)。なんばと心斎橋の間',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油の味付け。',
    vegan_detail: 'ヴィーガンではありません。鶏のスープ、鶏と豚のチャーシュー、明太子、卵。',
    notes: '[ラーメン・なんばと心斎橋の間の泡の鶏白湯] 2022年から、雑居ビルの1階で通りに看板のない、カウンター5席とテーブル1つの9席の店。地図か行列を頼りに。鶏白湯をエスプーマ仕立てでふわふわのムースのように泡立て、クリーミーで濃厚なのに後味はすっきり、もちもちの平打ち麺に。特製鶏白湯らーめん(1,705円、2026年8月)には味玉、鶏と豚のチャーシュー、紫玉ねぎ、きくらげ。明太子入りはクリーミーなスープに明太子を混ぜて。味玉ご飯も合います。回転が遅く、ピークを外しても待ちます。6月の土曜に2時間以上待った客も、手堅いが個性がないという客も。',
  });
}

save();
