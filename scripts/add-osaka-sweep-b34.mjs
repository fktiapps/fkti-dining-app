// Osaka sweep (2-mile circle around Dotonbori), batch 34 — ramen phase, nearest first (all OMNI).
//   + ラーメン薩摩 (garlic tonkotsu-shoyu at the east end of Dotonbori, to 4 am / 24 h Fri–Sat; pin chōme-level)
//   + きりん寺 アメ村店 (Suzume-group abura-soba ¥850)
//   + 金龍ラーメン 難波千日前店 (24-hour Osaka classic; free kimchi, chives, garlic, rice)
//   + ラーメン 横綱 NAMBAなんなん店 (chain, unlimited green onion; underground mall → single)
// Skipped four unverifiable/moved listings (below).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, skip, save } = openCitySweep('osaka', TODAY, 34);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27086900', 'Moved: old Arashi site at 東心斎橋2-1-18; Tabelog shows it Closed. The shop reopened 200 m west on 1 Oct 2026 and is already recorded from listing 27159733 (batch 18).');
skip('27112950', 'Five reviews, newest June 2022; current operation unverified.');
skip('27134147', 'Five reviews, newest July 2024; current operation unverified.');
skip('27098656', 'Two reviews, both July 2017; Sunday/holiday-only bar; current operation unverified.');

// ================================================================ ラーメン薩摩
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27066508/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:00', '04:00']), F = day(['00:00', '23:59']);
  put({
    id: 'osaka_ramen_satsuma_dotonbori', name: 'ラーメン薩摩 (Ramen Satsuma)', category: 'OMNI',
    lat: 34.668853, lng: 135.506333, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based tare; fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth, thick chashu.',
    hours_raw: 'Mon–Thu and Sun 11:00–4:00; open 24 hours Friday and Saturday (Tabelog). Cash only — no cards, e-money or QR (Tabelog). You are asked whether you want garlic when ordering.',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: F, 5: F, 6: A }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-chōme east (Dotonbori Bldg 1F) — a short walk from Nippombashi Stn',
    cuisine: 'Garlic-forward soy-tonkotsu at the east end of Dotonbori · ramen ¥1,100 · large ramen ¥1,380 · chashu ramen with thick, juicy chashu · kimchi topping ¥400 · fried rice · medium-thin straight noodles, firm on request · open to 4 am, 24 hours Fri–Sat · 10 seats',
    website: null, gmaps: gm('ラーメン薩摩 道頓堀'), menu_url: null,
    notes: "[Ramen · all-night garlic tonkotsu at the east end of Dotonbori] A small ramen shop at the Nippombashi end of Dotonbori, open until 4 am and around the clock on Fridays and Saturdays. Reviewers who miss the old Satsuma-kko on Dotonbori come here. The bowl is a soy-tonkotsu on medium-thin straight noodles, called light by one reviewer and rich-but-smooth by another. The staff ask if you want garlic, and it packs a punch, so ask for less if you have plans tomorrow. The thick, moist chashu is why regulars come; one says they come for the chashu more than the ramen. Ramen is ¥1,100, large ¥1,380, and kimchi ¥400 (September–October 2026); some find it pricey for what it is. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 June 2012 (Tabelog)', background: 'Reviewers compare it to the former Satsuma-kko on Dotonbori (October 2026).', philosophy: null, specialty: 'Garlic tonkotsu-shoyu; thick chashu.',
      anecdotes: [
        { text: '"When asked if I wanted garlic, I said yes, and let me tell you, this garlic packs a punch! The thick chashu was moist and delicious." — October 2026, around 4 am.', source: R + 'B538044953/' },
        { text: '"The ramen featured medium-thin straight noodles in a light soy-based tonkotsu broth, and the thickly sliced chashu was delicious!" — September 2026, ramen ¥1,100.', source: R + 'B536227144/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン薩摩、大阪市中央区道頓堀一丁目東5-26 道頓堀ビル1F、06-6213-7775、予約不可、月〜木・日11:00〜翌4:00、金・土24時間、カード・電子マネー・QR不可、10席(4人テーブルあり)、禁煙、2012年6月28日開店。2026年の口コミ(8〜10月): チャーシュー麺、チャーシューが目当て、大ラーメン(にんにく入り)1,380円、キムチ400円、細麺と濃厚でまろやかなスープ、ラーメン1,100円、中細ストレート麺、あっさりした醤油とんこつ、注文時ににんにくを聞かれる、にんにくが強烈、厚くしっとりしたチャーシュー、道頓堀のさつまっ子を思い出す、コスパはよくないという声、炒飯、朝4時でも営業。',
      confidence: 'medium', sources: [TB, R + 'B538044953/', R + 'B536227144/', R + 'B501268139/', R + 'B440365905/', R + 'B536670144/', R + 'B536985144/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thin straight noodles; firm on request (September–October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Ramen ¥1,100 with garlic; large ¥1,380 (September–October 2026).',
      chashu: 'Thick, moist, juicy slices — the reason regulars come (August–October 2026).',
      notable_toppings: ['garlic (asked at order)', 'kimchi (+¥400)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'East Dotonbori\'s all-night garlic tonkotsu: medium-thin noodles, thick chashu, and a garlic question at the counter.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B536227144/', '"A light soy-based tonkotsu broth" vs. "rich broth… both intense and smooth" (' + R + 'B501268139/) — mid-scale.'],
        oiliness: [R + 'B538044953/', '"It felt a bit heavy after a night of drinking" (large size) — mid-scale.'],
        clarity: [R + 'B536227144/', 'Soy-tonkotsu; clarity not described — below mid (inferred).'],
        tare_strength: [R + 'B501268139/', '"The broth was deliciously spicy" with kimchi — mid-scale.'],
        noodle_firmness: [R + 'B501268139/', 'Firm noodles on request — mid-scale.'],
        aroma_punch: [R + 'B538044953/', '"This garlic packs a punch!"'],
      },
      confidence: 'medium', sources: [R + 'B538044953/', R + 'B536227144/', R + 'B501268139/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Garlic question at the counter; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区道頓堀一丁目東5-26 道頓堀ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI resolves the old-style address only to 大阪府大阪市中央区道頓堀一丁目 (chōme, 288m) and OSM has no match, so the pin rests on the Tabelog point alone; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536227144/', R + 'B501268139/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('ラーメン', 'rāmen', 'Ramen', '¥1,100', 'Ramen', 'no', 'no', 'September 2026.', 'ramen'),
      it('', '', 'Large ramen', '¥1,380', 'Ramen', 'no', 'no', 'October 2026.', 'oomori'),
      it('チャーシューメン', 'chāshūmen', 'Chashu ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'chashu'),
      it('', '', 'Kimchi topping', '¥400', 'Toppings', 'ask', 'ask', 'October 2026.', 'kimchi'),
      it('炒飯', 'chāhan', 'Fried rice', '', 'Sides', 'no', 'no', 'October 2026.', 'chahan'),
    ] }, {
    cuisine: '道頓堀の東端のにんにくの効いた醤油とんこつ・ラーメン1,100円・大ラーメン1,380円・厚くジューシーなチャーシュー麺・キムチ400円・炒飯・中細ストレート麺、硬め可・朝4時まで、金土は24時間・10席',
    neighborhood: '道頓堀一丁目東(道頓堀ビル1F)。日本橋駅から歩いてすぐ',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースのたれ、炒飯。',
    vegan_detail: 'ヴィーガンではありません。とんこつスープ、厚いチャーシュー。',
    notes: '[ラーメン・道頓堀の東端の深夜のにんにくとんこつ] 道頓堀の日本橋寄りにある小さなラーメン店で、朝4時まで、金・土は24時間営業。道頓堀にあったさつまっ子が懐かしい人が通います。一杯は中細ストレート麺の醤油とんこつで、あっさりという人も、濃厚でまろやかという人も。にんにくを入れるか聞かれ、これが強烈なので、翌日に予定があれば少なめで。目当ては厚くしっとりしたチャーシューで、ラーメンよりチャーシューのために来るという常連も。ラーメン1,100円、大1,380円、キムチ400円(2026年9〜10月)で、値段のわりにという声も。現金のみ。',
  });
}

// ================================================================ きりん寺 アメ村店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27099090/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kirinji_amemura', name: 'きりん寺 アメ村店 (Kirinji Amemura)', category: 'OMNI',
    lat: 34.672052, lng: 135.498439, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; sauce not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chashu and egg toppings; sauce not described.',
    hours_raw: 'Daily 11:30–16:30 and 18:00–22:00 (Tabelog). Ticket machine; cash only — no cards, e-money or QR (Tabelog). Waits can be long.',
    hours: ALL(day(['11:30', '16:30'], ['18:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-6-17, Amerika-mura — near the BIG CAT live venue',
    cuisine: 'Suzume-group abura-soba · abura-soba ¥850 on chewy noodles · kimchi and egg toppings · vinegar, chili oil, spicy miso and garlic to finish at the table · a wall of celebrity photos',
    website: 'http://www.suzume-group.co.jp/index.html', gmaps: gm('きりん寺 アメ村店'), menu_url: null,
    notes: "[Ramen · Amemura's cheap, beginner-friendly abura-soba] The Amerika-mura shop of Kirinji, a Suzume-group abura-soba chain, by the BIG CAT live venue, with a wall of celebrity photos. The abura-soba (¥850, June 2026) arrives within minutes of handing over your ticket. It's chewy noodles in a light sauce that you build up with plenty of vinegar and chili oil, plus spicy miso and garlic from the table. One fan swears by the egg topping, and kimchi works too. Reviewers call it cheap next to ramen and easy for abura-soba first-timers. It gets crowded in the afternoon, with tourists too, and the wait can be long. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Amerika-mura branch', background: 'Suzume group (suzume-group.co.jp), which also runs Tsukemen Suzume nearby.', philosophy: null, specialty: 'Abura-soba.',
      anecdotes: [
        { text: '"Oil Soba JPY 850… The chewy noodles were perfectly coated with vinegar and chili oil, delivering a bold flavor with a nice tanginess." — June 2026.', source: R + 'B529956954/' },
        { text: '"I think it\'s very beginner-friendly for those new to oil noodles." — July 2026.', source: R + 'B533644653/' },
      ],
      japanese_sources_summary: '食べログ: きりん寺 アメ村店、大阪市中央区西心斎橋1-6-17、06-6484-6068、予約不可、毎日11:30〜16:30・18:00〜22:00、カード・電子マネー・QR不可、禁煙、運営は雀グループ。2026年の口コミ(4〜9月): 15時過ぎでも混雑、海外の団体客も、あっさりしておいしい油そば、油そば850円は安い、BIG CATのライブ前に、食券を渡して5分で提供、もちもちの麺に酢とラー油、合言葉で半熟玉子のサービス(2026年8月)、ラーメン店より手頃、キムチのトッピング、油そば初心者にも、玉子のトッピングがおすすめ、酢をたっぷりとラー油を2周、有名人の写真が壁一面、卓上で酢・ラー油・辛味噌・にんにくを調整、待ち時間が長いことも。',
      confidence: 'medium', sources: [TB, R + 'B529956954/', R + 'B533644653/', R + 'B533298657/', R + 'B535694661/', R + 'B536489671/', R + 'B526612019/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Chewy noodles (June 2026).' },
      regional_style: [], sub_genre: ['mazesoba_aburasoba'],
      signature_bowl: 'Abura-soba ¥850 (June 2026).',
      chashu: null,
      notable_toppings: ['egg', 'kimchi', 'vinegar', 'chili oil', 'spicy miso', 'garlic'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Sauce not described.' },
      pantheon: 'Amemura\'s ¥850 abura-soba: a light sauce you finish with vinegar, chili oil and an egg.',
      profile: { richness: 2, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B526612019/', '"It was light and delicious!"'],
        oiliness: [R + 'B529956954/', 'Abura-soba sauce; not described as greasy — mid-scale (inferred).'],
        clarity: [R + 'B529956954/', 'Soupless abura-soba — clarity does not apply; neutral mid-scale (inferred).'],
        tare_strength: [R + 'B529956954/', '"A bold flavor with a nice tanginess" once vinegar and chili oil are added — mid-scale.'],
        noodle_firmness: [R + 'B529956954/', '"The chewy noodles" — mid-scale.'],
        aroma_punch: [R + 'B536489671/', 'Vinegar, chili oil, spicy miso and garlic adjusted at the table — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B529956954/', R + 'B526612019/', R + 'B536489671/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-6-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目6番17号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529956954/'],
    price_note: 'Price from a June 2026 review.', last_checked: TODAY, items: [
      it('油そば', 'abura soba', 'Abura-soba', '¥850', 'Abura-soba', 'no', 'no', 'June 2026.', 'abura'),
      it('', '', 'Egg topping', '', 'Toppings', 'ask', 'no', 'September 2026.', 'egg'),
      it('', '', 'Kimchi topping', '', 'Toppings', 'ask', 'ask', 'July 2026.', 'kimchi'),
    ] }, {
    cuisine: '雀グループの油そば・もちもち麺の油そば850円・キムチと玉子のトッピング・卓上の酢、ラー油、辛味噌、にんにくで仕上げ・壁一面の有名人の写真',
    neighborhood: '西心斎橋1-6-17、アメリカ村。ライブハウスBIG CATの近く',
    gf_detail: 'グルテンフリーではありません。小麦の麺、たれの中身は不明。',
    vegan_detail: 'ヴィーガンではありません。チャーシューや玉子のトッピング、たれの中身は不明。',
    notes: '[ラーメン・アメ村の安くて初心者向けの油そば] 雀グループの油そばチェーン、きりん寺のアメリカ村店で、ライブハウスBIG CATのそば、壁一面に有名人の写真。油そば(850円、2026年6月)は食券を渡して数分で届き、もちもちの麺に軽いたれ、そこに酢とラー油をたっぷり、卓上の辛味噌やにんにくも足して仕上げます。玉子のトッピングを推すファンもいて、キムチも合います。ラーメンより安く、油そば初心者にも食べやすいという声。午後でも混み、観光客も多く、待ち時間が長いことも。現金のみ。',
  });
}

// ================================================================ 金龍ラーメン 難波千日前店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27009586/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kinryu_ramen_sennichimae', name: '金龍ラーメン 難波千日前店 (Kinryu Ramen Namba Sennichimae)', category: 'OMNI',
    lat: 34.665265, lng: 135.503377, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-and-chicken broth, chashu; the free kimchi contains seafood umami (October 2026).',
    hours_raw: 'Open 24 hours, daily (Tabelog). Ticket machine by the entrance; collect your bowl at the counter when called (self-service). No cards or e-money; PayPay accepted (Tabelog).',
    hours: ALL(day(['00:00', '23:59'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nambasennichimae 11-20 — about 7 min from Namba Stn',
    cuisine: 'Osaka\'s 24-hour dragon-sign ramen · Kinryu ramen ¥900 and chashu ramen — the only two dishes · light pork-and-chicken soy-tonkotsu · two kinds of chashu · free, unlimited kimchi, garlic chives, garlic and rice · low tatami seating',
    website: null, gmaps: gm('金龍ラーメン 難波千日前店'), menu_url: null,
    notes: "[Ramen · Osaka's 24-hour dragon-sign classic] One of the long-running Kinryu Ramen shops of Namba, under the giant dragon sign and open around the clock. The menu is just Kinryu ramen (¥900, October 2026) or chashu ramen. Buy a ticket by the door, hand it in, and collect your bowl when called. The broth is a white pork-and-chicken soup with soy, lighter than it looks and smooth rather than greasy, with two kinds of chashu even in the regular bowl. The fun is at the counter: free, unlimited kimchi, spicy garlic chives, garlic and rice, which turn the mild soup into a stamina bowl. You sit on low tatami platforms without backrests, and you might wonder about shoes. It's built for after drinking, or a ten-minute breakfast.",
    chef_bio: { chef_name: null, roles: [], origin: 'A long-established Osaka chain with several Namba shops (October 2026 reviews)', background: 'Kinryu Ramen.', philosophy: null, specialty: 'Pork-and-chicken soy ramen with free condiments.',
      anecdotes: [
        { text: '"The true deliciousness of Kinryu Ramen is completed by adding any of the three free toppings available at the counter: kimchi, garlic chives, and garlic." — October 2026.', source: R + 'B420472359/' },
        { text: '"It was lighter than it looked, with a chicken base and a hint of pork flavor… The chashu was a pleasant surprise, featuring two different types even in the regular ramen." — October 2026.', source: R + 'B536577631/' },
      ],
      japanese_sources_summary: '食べログ: 金龍ラーメン 難波千日前店、大阪市中央区難波千日前11-20、06-6649-1448、予約不可、24時間営業、カード・電子マネー不可、QR(PayPay)可、禁煙。2026年10月の口コミ: あっさりした豚と鶏のスープ(豚骨・鶏ガラの白濁スープに醤油)、臭みがなくなめらか、24時間で飲んだ後の締めに、カウンターの無料のキムチ・ニラ・にんにく、無料のご飯、入口左の券売機、メニューはラーメンとチャーシューメンだけ、金龍ラーメン900円、セルフで受け取り、背もたれのない小さな畳の席、靴を脱ぐか迷う、2種類のチャーシュー、朝ラーメンにも、約10分で食べ終わる。',
      confidence: 'medium', sources: [TB, R + 'B420472359/', R + 'B536577631/', R + 'B537690834/', R + 'B537854422/', R + 'B538077292/', R + 'B467341491/'] },
    ramen: {
      broth_base: ['tonkotsu', 'chicken'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Not described.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Kinryu ramen ¥900 (October 2026).',
      chashu: 'Two kinds of chashu in the regular bowl (October 2026).',
      notable_toppings: ['kimchi (free)', 'garlic chives (free)', 'garlic (free)', 'rice (free)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork and chicken broth.' },
      pantheon: 'Osaka\'s 24-hour dragon: a mild pork-and-chicken soup you turn fierce with free kimchi, chives and garlic.',
      profile: { richness: 2, oiliness: 2, clarity: 2, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B536577631/', '"It was lighter than it looked… Despite being light, it had a nice richness."'],
        oiliness: [R + 'B420472359/', '"Unlike the typical thick and greasy texture of pork broth, this one has a very smooth mouthfeel."'],
        clarity: [R + 'B420472359/', '"A creamy white broth" — opaque but light (inferred).'],
        tare_strength: [R + 'B420472359/', '"The initially mild flavor" before condiments.'],
        noodle_firmness: [R + 'B536577631/', 'Noodles not described — mid-scale (inferred).'],
        aroma_punch: [R + 'B420472359/', 'Mild until garlic and chives are added — placed low (base bowl).'],
      },
      confidence: 'medium', sources: [R + 'B420472359/', R + 'B536577631/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; self-service pick-up; tatami seating.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前11-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前11番20号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537690834/'],
    price_note: 'Price from an October 2026 review.', last_checked: TODAY, items: [
      it('金龍ラーメン', 'Kinryū rāmen', 'Kinryu ramen', '¥900', 'Ramen', 'no', 'no', 'October 2026.', 'kinryu'),
      it('チャーシューメン', 'chāshūmen', 'Chashu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'chashu'),
      it('', '', 'Free kimchi, garlic chives, garlic and rice', 'free', 'Condiments', 'ask', 'no', 'October 2026.', 'free'),
    ] }, {
    cuisine: '大阪の24時間の龍の看板のラーメン・金龍ラーメン900円とチャーシューメンの2品だけ・あっさりした豚と鶏の醤油とんこつ・2種類のチャーシュー・無料で取り放題のキムチ、ニラ、にんにく、ご飯・低い畳の席',
    neighborhood: '難波千日前11-20。なんば駅から徒歩約7分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油ベースのたれ。',
    vegan_detail: 'ヴィーガンではありません。豚と鶏のスープ、チャーシュー。無料のキムチには魚介のうま味(2026年10月)。',
    notes: '[ラーメン・大阪の24時間の龍の看板の定番] なんばに何軒もある老舗の金龍ラーメンの1軒で、大きな龍の看板の下、24時間営業。メニューは金龍ラーメン(900円、2026年10月)とチャーシューメンだけ。入口の券売機で食券を買って渡し、呼ばれたら受け取ります。スープは豚骨と鶏ガラの白いスープに醤油で、見た目よりあっさり、脂っこくなくなめらか、普通のラーメンでもチャーシューは2種類。楽しみはカウンターの無料で取り放題のキムチ、辛いニラ、にんにく、ご飯で、まろやかなスープがスタミナ系に変わります。席は背もたれのない低い畳で、靴を脱ぐか迷うかも。飲んだ後の締めにも、10分の朝ごはんにも。',
  });
}

// ================================================================ ラーメン 横綱 NAMBAなんなん店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27099117/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ramen_yokozuna_nannan', name: 'ラーメン 横綱 NAMBAなんなん店 (Ramen Yokozuna NAMBA Nannan)', category: 'OMNI',
    lat: 34.664977, lng: 135.501943, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth, chashu.',
    hours_raw: 'Daily 11:00–22:00 (L.O. 21:45) (Tabelog). Cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'NAMBA Nannan underground mall B1F (Namba 5) — just outside the Osaka Metro Namba gates on the Nankai side',
    cuisine: 'Ramen Yokozuna chain · light tonkotsu ramen with unlimited chopped green onion · small size · chashu ramen · ramen and fried rice set ¥1,220 · quick-drink set (beer, chashu/menma/egg/kimchi platter) plus ramen ¥1,380 · noodle firmness to order · 35 seats',
    website: 'http://www.4527.com', gmaps: gm('ラーメン横綱 NAMBAなんなん店'), menu_url: null,
    notes: "[Ramen · Yokozuna's unlimited-green-onion tonkotsu under Namba] A 35-seat branch of the Yokozuna ramen chain at the back of the NAMBA Nannan underground mall, just outside the Osaka Metro gates. The draw is the free, unlimited chopped green onion; some pile the bowl high. The broth is a mild tonkotsu with medium-thin noodles, firmness to order, and quick service. One regular found it short on richness in August 2026, while another called the regular bowl just rich enough. The ramen and fried rice set is ¥1,220, and an after-work quick-drink set (beer plus a chashu, menma, egg and kimchi platter, then ramen) is ¥1,380. Another found the taste and service simply average.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 19 June 2017 (Tabelog)', background: 'Ramen Yokozuna chain (4527.com).', philosophy: null, specialty: 'Tonkotsu ramen with unlimited green onion.',
      anecdotes: [
        { text: '"One of the highlights of Yokozuna is the \'unlimited green onions\'." — August 2026.', source: R + 'B535428628/' },
        { text: '"For the Quick Drink Set, I chose a draft beer and an assorted platter of appetizers… To finish off, I enjoyed the classic Yokozuna Ramen, all for just JPY 1,380." — August 2026.', source: R + 'B534144380/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン 横綱 NAMBAなんなん店、大阪市中央区難波5 なんなんタウン11 NAMBAなんなんB1F、06-6616-9827、予約不可、毎日11:00〜22:00(L.O.21:45)、カード・電子マネー・QR決済可、35席、禁煙、2017年6月19日開店、公式 4527.com。2026年の口コミ(8〜9月): 昼飲みの締めにラーメン小とメンマ、ねぎ入れ放題、スープのこくがもう一つという声、麺の硬さを選べて提供が早い、ちょい飲みセット(生ビールとチャーシュー・メンマ・味玉・ねぎ・キムチの盛り合わせ)とラーメンで1,380円、地下鉄なんば駅の改札すぐ、なんなんタウンの奥、普通の味という声、チャーシュー麺、ラーメンと炒飯のセット1,220円、ちょうどいいこってり具合。',
      confidence: 'medium', sources: [TB, R + 'B535428628/', R + 'B534144380/', R + 'B308989684/', R + 'B533820382/', R + 'B535131820/', R + 'B535587210/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'unknown', tare: [], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Medium-thin noodles (November 2025); firmness to order (August 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Yokozuna ramen with unlimited green onion (August–September 2026).',
      chashu: 'Chashu ramen (August 2026); not described in detail.',
      notable_toppings: ['green onion (unlimited)', 'menma', 'kimchi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Yokozuna under Namba: mild tonkotsu buried in as much green onion as you like.',
      profile: { richness: 2, oiliness: 2, clarity: 2, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B308989684/', '"できればもう少しこくが欲しい" (August 2026); "just the right amount of richness" (' + R + 'B535587210/) — low-mid.'],
        oiliness: [R + 'B308989684/', '"The broth was a light tonkotsu" (November 2025) — placed low.'],
        clarity: [R + 'B308989684/', 'Light tonkotsu; clarity not described — below mid (inferred).'],
        tare_strength: [R + 'B308989684/', '"Overall, the flavor was relatively mild."'],
        noodle_firmness: [R + 'B533820382/', '"You can choose the firmness of the noodles" — mid-scale.'],
        aroma_punch: [R + 'B308989684/', 'Mild; green onion added freely — placed low.'],
      },
      confidence: 'low', sources: [R + 'B308989684/', R + 'B535587210/', R + 'B533820382/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Underground-mall chain shop.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区難波5 なんなんタウン11 NAMBAなんなん B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; GSI resolves the underground-mall address only to 大阪府大阪市中央区難波五丁目 (chōme, 94m); OSM has the NAMBA なんなん mall node/5627915361 at 40m but no shop-level match; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534144380/', R + 'B535587210/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('ラーメン', 'rāmen', 'Yokozuna ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'ramen'),
      it('チャーシューメン', 'chāshūmen', 'Chashu ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'chashu'),
      it('', '', 'Ramen and fried rice set', '¥1,220', 'Sets', 'no', 'no', 'September 2026.', 'chahan_set'),
      it('', '', 'Quick-drink set with ramen', '¥1,380', 'Sets', 'no', 'no', 'August 2026.', 'chobinomi'),
    ] }, {
    cuisine: 'ラーメン横綱のチェーン・刻みねぎ入れ放題のあっさりとんこつ・小サイズ・チャーシュー麺・ラーメンと炒飯のセット1,220円・ちょい飲みセット(ビールとチャーシュー、メンマ、味玉、キムチの盛り合わせ)とラーメンで1,380円・麺の硬さを選べる・35席',
    neighborhood: 'NAMBAなんなん地下街B1F(難波5)。地下鉄なんば駅の改札を出てすぐ、南海側',
    gf_detail: 'グルテンフリーではありません。小麦の麺、炒飯。',
    vegan_detail: 'ヴィーガンではありません。とんこつスープ、チャーシュー。',
    notes: '[ラーメン・なんばの地下の横綱のねぎ入れ放題とんこつ] 地下鉄なんば駅の改札を出てすぐ、NAMBAなんなん地下街の奥にあるラーメン横綱のチェーンの35席の店。目当ては無料で入れ放題の刻みねぎで、丼に山盛りにする人も。スープはまろやかなとんこつで中細麺、硬さを選べて提供も早め。2026年8月にはこくが物足りないという常連も、普通サイズはちょうどいいこってり具合という人も。ラーメンと炒飯のセットは1,220円、仕事帰りのちょい飲みセット(ビールとチャーシュー・メンマ・味玉・キムチの盛り合わせ、最後にラーメン)は1,380円。味も接客も普通という声もあります。',
  });
}

save();
