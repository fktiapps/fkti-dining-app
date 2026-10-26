// Osaka sweep (2-mile circle around Dotonbori), batch 24 — ramen phase, nearest first (all OMNI).
//   + Ramen 兼田 (chicken shoyu chuka soba and paitan on the EDION Namba ramen floor)
//   + かす中華そば かすうどん しばいけ (late-night kasu udon and kasu chuka soba — filed udon_soba, no ramen block)
//   + 吉祥寺武蔵家 なんばラーメン一座 龍店 (Tokyo iekei, est. 1999 in Kichijōji; EDION ramen floor)
//   + 麺や 人類乃宝舟 (Jinrui Mina Menrui spin-off in Amemura: shellfish, sansho, curry ramen)
// Skipped: らーめんBAR らずり ミナミ店 27135100 (newest review July 2025).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-26';
const { put, skip, save } = openCitySweep('osaka', TODAY, 24);

skip('27135100', 'Ten reviews, newest July 2025 (others 2023–2024); current operation unverified.');
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ Ramen 兼田
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27148337/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_ramen_kaneda_edion_namba', name: 'Ramen 兼田 (Ramen Kaneda)', category: 'OMNI',
    lat: 34.665654, lng: 135.501851, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth, chashu, bonito.',
    hours_raw: 'Daily 11:00–22:00 (food L.O. 21:30), open year-round (Tabelog). On the Namba Ramen Ichiza floor, EDION Namba 9F. Cards and e-money accepted.',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 3-2-18, EDION Namba Honten 9F (Namba Ramen Ichiza)',
    cuisine: 'Chicken-based rich shoyu chuka soba ¥980 with pork-belly and rare roast chashu · shio and shoyu chicken paitan · spicy chicken paitan (large ¥1,350) · summer chilled bonito-kombu-water ramen ¥1,100 · grilled chicken yukke rice bowl ¥500 · seasoned egg ¥200',
    website: null, gmaps: gm('Ramen 兼田 エディオンなんば'), menu_url: null,
    notes: "[Ramen · chicken shoyu and paitan on EDION's ramen floor] A 23-seat shop on Namba Ramen Ichiza, EDION Namba's 9th-floor ramen street, since April 2025. The chuka soba (¥980, October 2026) is a chicken-based, rich shoyu that hits hard on umami and salt, with smooth, slightly thin straight noodles, a slice of pork belly and one of rare roast. There are chicken paitans in shio and shoyu (one regular found the shio lighter than before), a spicy paitan, and in summer a chilled ramen in bonito and thick, sticky kombu water. Add the chicken yukke rice bowl (¥500). It is busier than its neighbours in the evening, often with overseas visitors.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 April 2025 (Tabelog)', background: 'A shop on the Namba Ramen Ichiza floor of EDION Namba; no source names the operator.', philosophy: null, specialty: 'Chicken shoyu chuka soba; chicken paitan.',
      anecdotes: [
        { text: '"The chicken-based, rich soy sauce broth paired perfectly with the smooth, slightly thin straight noodles… The chashu included one slice of pork belly and one slice of rare roast." — September 2026, chuka soba ¥980.', source: R + 'B505418784/' },
        { text: '"When I tried to scoop up the soup, it was so thick that I couldn\'t get any! (laughs) It wasn\'t thick from fat, but rather from the sticky texture of the kombu." — September 2026, chilled bonito-kombu ramen.', source: R + 'B536458222/' },
      ],
      japanese_sources_summary: '食べログ: Ramen 兼田、大阪市中央区難波3-2-18 エディオンなんば本店9F、23席、毎日11:00〜22:00(料理L.O.21:30)、年中無休、禁煙、カード・電子マネー可、2025年4月1日開店。2026年の口コミ: 中華そば980円・味玉200円・炙り鶏ユッケ丼500円、鶏ベースの濃い醤油、なめらかなやや細いストレート麺、豚バラとレアのローストのチャーシュー、限定の冷やし鰹昆布水つけ麺1,100円、塩鶏白湯は前より薄く感じた、辛鶏白湯の大1,350円、ラーメン一座、冷やしの鰹と昆布水はとろとろ、中太麺、しっとりした鶏チャーシュー、平日の昼は空いている、うま味と塩気が強い、濃厚な鶏白湯、外国人客が多く少し待つ、鶏白湯醤油に玉子で約1,280円、塩気が強め。',
      confidence: 'medium', sources: [TB, R + 'B505418784/', R + 'B536458222/', R + 'B537330669/', R + 'B517507684/', R + 'B537698993/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Smooth, slightly thin straight noodles (chuka soba); medium-thick in the chilled ramen (September 2026).' },
      regional_style: [], sub_genre: ['ramen', 'chuka soba', 'tori_paitan'],
      signature_bowl: 'Chuka soba ¥980 (September–October 2026).',
      chashu: 'Pork belly and rare roast (chuka soba); moist chicken chashu (chilled ramen).',
      notable_toppings: ['seasoned egg', 'chicken chashu'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'EDION\'s ramen-floor chicken shoyu: a punchy, salty chicken chuka soba with pork-belly and rare chashu, plus paitan for the creamy-minded.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B505418784/', '"The chicken-based, rich soy sauce broth."'],
        oiliness: [R + 'B505418784/', 'Oil not described — placed low-mid (inferred).'],
        clarity: [R + 'B537330669/', 'Chuka soba, not described as clear or cloudy — mid-scale (inferred).'],
        tare_strength: [R + 'B537330669/', '"This one had a strong umami and saltiness that really packed a punch."'],
        noodle_firmness: [R + 'B505418784/', '"Smooth, slightly thin straight noodles."'],
        aroma_punch: [R + 'B537330669/', 'Punchy umami — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B505418784/', R + 'B537330669/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Food-floor ramen shop; ticket machine.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-2-18 エディオンなんば本店 9F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目2番18号 (go) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B505418784/', R + 'B517507684/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('中華そば', 'chūka soba', 'Chuka soba (chicken shoyu)', '¥980', 'Ramen', 'no', 'no', 'September–October 2026.', 'chuka_soba'),
      it('', '', 'Spicy chicken paitan (large)', '¥1,350', 'Ramen', 'no', 'no', 'January 2026.', 'kara_paitan'),
      it('', '', 'Chilled bonito-kombu-water ramen (summer)', '¥1,100', 'Seasonal', 'no', 'no', 'June 2026.', 'hiyashi_kombusui'),
      it('', '', 'Grilled chicken yukke rice bowl', '¥500', 'Rice', 'no', 'no', 'September 2026.', 'yukke_don'),
      it('', '', 'Seasoned egg', '¥200', 'Toppings', 'gf', 'no', 'September 2026.', 'ajitama'),
    ] }, {
    cuisine: '鶏ベースの濃い醤油の中華そば980円(豚バラとレアのローストのチャーシュー)・塩と醤油の鶏白湯・辛い鶏白湯(大1,350円)・夏の冷やし鰹昆布水1,100円・炙り鶏ユッケ丼500円・味玉200円',
    neighborhood: '難波3-2-18 エディオンなんば本店9F(なんばラーメン一座)',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油だれ。',
    vegan_detail: 'ヴィーガンではありません。鶏のスープ、チャーシュー、鰹。',
    notes: '[ラーメン・エディオンのラーメン街の鶏醤油と鶏白湯] エディオンなんば9階のラーメン街「なんばラーメン一座」にある23席の店で、2025年4月から。中華そば(980円、2026年10月)は鶏ベースの濃い醤油で、うま味と塩気がガツンと来て、なめらかでやや細いストレート麺に豚バラとレアのローストのチャーシューが1枚ずつ。塩と醤油の鶏白湯(塩は前より薄くなったという常連も)、辛い鶏白湯、夏は鰹ととろとろの昆布水の冷やしも。鶏ユッケ丼(500円)を添えて。夜は隣の店より混むことが多く、海外からの客も目立ちます。',
  });
}

// ================================================================ かす中華そば かすうどん しばいけ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27096216/'; const R = TB + 'dtlrvwlst/';
  const d = day(['22:00', '07:00']);
  put({
    id: 'osaka_kasu_shibaike_higashishinsaibashi', name: 'かす中華そば かすうどん しばいけ (Shibaike)', category: 'OMNI',
    lat: 34.671365, lng: 135.504543, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon and chuka soba in a dashi-and-soy broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: abura-kasu (fried beef intestine), beef, dashi.',
    hours_raw: 'Mon–Sat 22:00–7:00; closed Sundays, holidays and the third Monday (Tabelog). Cash only; smoking allowed (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: [] }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-4-19, Tamayachō Galaxy 3 B1F — near Nagahoribashi Stn',
    cuisine: 'Late-night kasu udon and kasu chuka soba (abura-kasu in dashi) · beef, garlic-chive-and-egg and meat kasu udon ~¥1,000 · umeboshi to add · niboshi rice to finish with the broth · 10 pm–7 am · cash only',
    website: null, gmaps: gm('かす中華そば かすうどん しばいけ'), menu_url: null,
    notes: "[Udon · kasu udon and kasu chuka soba until 7 am] A small basement shop in Higashi-Shinsaibashi, open from 10 pm to 7 am, serving kasu, the crisp fried beef intestine Osaka loves, in a broth that soaks into you after drinking. Choose kasu udon (beef, meat, or garlic chives and egg) or the house kasu chuka soba, which a long-time regular calls the one to order and which is gentle on the stomach the morning after. Udon runs about ¥1,000. Add umeboshi, and pour the last of the broth over niboshi rice. It's packed even at dawn. Cash only; smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Higashi-Shinsaibashi 2-chōme', background: 'No source names the operator.', philosophy: null, specialty: 'Kasu chuka soba and kasu udon.',
      anecdotes: [
        { text: '"When you think of Shibaike, you think of the rich, flavorful Kasu Chuka Soba… With other ramen, I often regret it the next morning due to an upset stomach, but not with this place!" — September 2026.', source: R + 'B449170102/' },
        { text: '"I added pickled plum to my meat kasu udon and enjoyed some dried sardine rice on the side… Open until 7 AM." — September 2026.', source: R + 'B536354916/' },
      ],
      japanese_sources_summary: '食べログ: かす中華そば かすうどん しばいけ、大阪市中央区東心斎橋2-4-19 玉屋町ギャラクシー3 B1F、月〜土22:00〜翌7:00、日祝・第3月曜定休、カード・電子マネー・QR決済不可、喫煙可。2026年の口コミ(6〜9月): 濃厚なかす中華そば、夜10時開店、翌朝胃にもたれない、体にやさしい、うどんよりかす中華そばがおすすめ(2022年5月)、肉かすうどんと小ビール、牛の腸を加工したかす、深夜のかすうどん、見つけにくい、早朝でも人気、ニラ玉かすうどん、牛かすうどん、長堀橋駅近く、梅干しを足した肉かすうどん、煮干しご飯にスープをかける、うどんは約1,000円、麺は細め。',
      confidence: 'medium', sources: [TB, R + 'B449170102/', R + 'B536354916/', R + 'B535299123/', R + 'B533585141/', R + 'B529982300/'] },
    cultural_comfort: { level: 'japanese', note: 'Basement late-night shop; cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-4-19 玉屋町ギャラクシー3 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目4番19号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536354916/', R + 'B449170102/'],
    price_note: 'Udon about ¥1,000 (September 2026).', last_checked: TODAY, items: [
      it('', '', 'Kasu chuka soba', '', 'Noodles', 'no', 'no', 'September 2026.', 'kasu_chuka'),
      it('', '', 'Meat kasu udon', '', 'Udon', 'no', 'no', 'June–September 2026.', 'niku_kasu'),
      it('', '', 'Garlic-chive and egg kasu udon', '', 'Udon', 'no', 'no', 'September 2026.', 'niratama_kasu'),
      it('', '', 'Beef kasu udon', '', 'Udon', 'no', 'no', 'September 2026.', 'gyu_kasu'),
      it('', '', 'Niboshi rice', '', 'Rice', 'no', 'no', 'September 2026.', 'niboshi_gohan'),
    ] }, {
    cuisine: '深夜のかすうどんとかす中華そば(だしに油かす)・牛、ニラ玉、肉のかすうどん約1,000円・梅干しを足して・締めは煮干しご飯にスープを・夜10時〜朝7時・現金のみ',
    neighborhood: '東心斎橋2-4-19 玉屋町ギャラクシー3 B1F、長堀橋駅近く',
    gf_detail: 'グルテンフリーではありません。だしと醤油のスープに小麦のうどんや中華そば。',
    vegan_detail: 'ヴィーガンではありません。油かす(牛の腸を揚げたもの)、牛肉、だし。',
    notes: '[うどん・朝7時までのかすうどんとかす中華そば] 東心斎橋の地下にある小さな店で、夜10時から朝7時まで。大阪の人が愛する牛の腸をカリッと揚げた「かす」を、飲んだ後に染みるだしで。かすうどん(牛、肉、ニラ玉)か、長年の常連が頼むならこれという名物のかす中華そばで、翌朝も胃にやさしい一杯です。うどんは約1,000円。梅干しを足し、最後は煮干しご飯にスープをかけて。明け方でも満席に。現金のみ、喫煙可。',
  });
}

// ================================================================ 吉祥寺武蔵家 なんばラーメン一座 龍店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27139285/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kichijoji_musashiya_edion_namba', name: '吉祥寺武蔵家 なんばラーメン一座 龍店 (Kichijoji Musashiya)', category: 'OMNI',
    lat: 34.665607, lng: 135.501829, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone and chicken broth, chashu.',
    hours_raw: 'Daily 11:00–22:00 (L.O. 21:30) (Tabelog). Ticket machine; staff ask your preferences (firmness, richness, oil). Free large rice.',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 3-2-18, EDION Namba Honten 9F (Namba Ramen Ichiza)',
    cuisine: 'Tokyo Yokohama-style iekei since 1999 · rich tonkotsu-shoyu from domestic pork bones and chicken · thick firm noodles · spinach and nori · ajitama ramen with nori and small rice ¥1,250 · free rice (large OK) · table garlic and ginger · limited "Musajirō" Jirō-style ¥1,300 · chilled tonkotsu (summer) · 32 seats',
    website: 'https://ramen-ichiza.edion.com/', gmaps: gm('吉祥寺武蔵家 なんばラーメン一座'), menu_url: null,
    notes: "[Ramen · Kichijōji's iekei on EDION's ramen floor] The Namba branch of Kichijoji Musashiya, an iekei shop founded in Kichijōji, Tokyo, in 1999 to bring the then-rare Yokohama style to the west of Tokyo. It sits on EDION Namba's 9th-floor ramen street. The broth is rich tonkotsu shoyu made, the shop says, with an extraordinary amount of domestic pork bones and chicken carcasses. It comes over thick, firm noodles with spinach in place of green onion, plus nori, and garlic and ginger on the table. Rice is free, in a large size if you like. An ajitama ramen with nori and small rice was ¥1,250 in October 2026. A limited \"Musajirō\" Jirō-style bowl (¥1,300) piles on vegetables, back fat and garlic. Reviewers call it consistent, classic iekei, if not remarkable.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened here 20 November 2023 (Tabelog); the original Kichijoji Musashiya opened 13 May 1999 in Kichijōji, Tokyo (October 2026 review citing the official site)', background: 'Tabelog introduction: Kichijōji\'s long-established iekei, 25 years, broth from domestic pork bones and chicken carcasses.', philosophy: null, specialty: 'Iekei ramen.',
      anecdotes: [
        { text: '"Kichijoji Musashiya was established on May 13, 1999, in Kichijoji, Tokyo. The restaurant started with the desire to deliver the then-rare Yokohama-style ramen to many customers." — October 2026, ajitama ramen with nori and small rice ¥1,250.', source: R + 'B486038682/' },
        { text: '"The broth had a rich flavor typical of the house style, and there were plenty of toppings like spinach and seaweed. With garlic and ginger available on the table." — August 2026.', source: R + 'B533995397/' },
      ],
      japanese_sources_summary: '食べログ: 吉祥寺武蔵家 なんばラーメン一座 龍店、大阪市中央区難波3-2-18 エディオンなんば本店9F、32席(カウンター12、テーブル20)、毎日11:00〜22:00(L.O.21:30)、禁煙(喫煙所あり)、カード・電子マネー・QR決済可、2023年11月20日開店、店の紹介: 吉祥寺で25年の老舗家系、国産の豚骨と鶏ガラを大量に使った濃厚なスープ。2026年の口コミ(8〜10月): 限定のMusajiro1,300円(麺200g・大300g、野菜・背脂・にんにく)、辛玉チャーシュー丼のセット400円、あっさりめの豚骨醤油、やわらかくもちもちの太麺、冷やし豚骨1,100円とミニ炒飯400円、味玉ラーメン並・海苔・小ライスで1,250円、1999年5月13日吉祥寺創業、食券を渡す、ライス大盛り無料、ほうれん草と海苔、卓上のにんにくと生姜、甘めの炒飯、好みを聞かれる、薄いチャーシュー2枚、太く硬い麺。',
      confidence: 'medium', sources: [TB, R + 'B486038682/', R + 'B533995397/', R + 'B475539479/', R + 'B536605784/', R + 'B538106690/'] },
    ramen: {
      broth_base: ['tonkotsu', 'chicken'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Thick, firm noodles (October 2026); preferences asked on seating.' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen', 'jiro_kei'],
      signature_bowl: 'Ajitama ramen (regular) with nori and small rice ¥1,250 (October 2026).',
      chashu: 'Two small, thin slices (October 2026).',
      notable_toppings: ['spinach', 'nori', 'table garlic', 'ginger', 'free rice'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Kichijōji\'s 1999 iekei on EDION\'s ramen floor: rich tonkotsu shoyu, thick firm noodles, spinach and nori, with free rice to soak it up.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B533995397/', '"The broth had a rich flavor typical of the house style."'],
        oiliness: [R + 'B533995397/', 'Oil chosen on order; not described — mid-scale (inferred).'],
        clarity: [R + 'B533995397/', 'Iekei tonkotsu shoyu — opaque.'],
        tare_strength: [R + 'B536571092/', '"Classic Iekei flavor" — mid-scale (inferred).'],
        noodle_firmness: [R + 'B536605784/', '"The noodles were thick and firm, which I liked."'],
        aroma_punch: [R + 'B533995397/', 'Garlic and ginger on the table — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B533995397/', R + 'B536605784/', R + 'B536571092/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; staff ask your preferences.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-2-18 エディオンなんば本店 9F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目2番18号 (go) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B486038682/', R + 'B475539479/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ajitama ramen (regular) with nori and small rice', '¥1,250', 'Ramen', 'no', 'no', 'October 2026.', 'ajitama_set'),
      it('', '', '"Musajirō" (limited Jirō-style)', '¥1,300', 'Ramen', 'no', 'no', 'October 2026.', 'musajiro'),
      it('', '', 'Spicy-egg chashu rice bowl set', '¥400', 'Rice', 'no', 'no', 'October 2026.', 'karatama_don'),
      it('', '', 'Chilled tonkotsu ramen (summer)', '¥1,100', 'Seasonal', 'no', 'no', 'August 2026.', 'hiyashi_tonkotsu'),
      it('', '', 'Mini fried rice', '¥400', 'Rice', 'no', 'no', 'August 2026.', 'mini_chahan'),
    ] }, {
    cuisine: '1999年からの東京の横浜家系・国産の豚骨と鶏ガラの濃厚な豚骨醤油・太く硬い麺・ほうれん草と海苔・味玉ラーメンと海苔と小ライスで1,250円・ライス無料(大盛り可)・卓上のにんにくと生姜・限定の二郎系「Musajiro」1,300円・夏の冷やし豚骨・32席',
    neighborhood: '難波3-2-18 エディオンなんば本店9F(なんばラーメン一座)',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、炒飯。',
    vegan_detail: 'ヴィーガンではありません。豚骨と鶏ガラのスープ、チャーシュー。',
    notes: '[ラーメン・エディオンのラーメン街の吉祥寺の家系] 1999年に東京・吉祥寺で、当時珍しかった横浜家系を届けたいと始まった吉祥寺武蔵家のなんば店で、エディオンなんば9階のラーメン街にあります。スープは店によると国産の豚骨と鶏ガラを大量に使った濃厚な豚骨醤油で、太く硬い麺に、ねぎの代わりにほうれん草、海苔、卓上ににんにくと生姜。ライスは無料で大盛りも可。味玉ラーメンと海苔と小ライスで2026年10月は1,250円。限定の二郎系「Musajiro」(1,300円)は野菜、背脂、にんにくたっぷり。安定した王道の家系だが際立つほどではない、という口コミも。',
  });
}

// ================================================================ 麺や 人類乃宝舟
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27152593/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_menya_jinrui_no_takarabune', name: '麺や 人類乃宝舟 (Menya Jinrui no Takarabune)', category: 'OMNI',
    lat: 34.671787, lng: 135.498931, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: whole-wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shellfish broth, chashu, bonito.',
    hours_raw: 'Daily 11:00–23:00 (Tabelog). Free large noodles and rice at weekday lunch (June 2026). Cards, e-money and QR accepted. Aprons provided.',
    hours: ALL(day(['11:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 2-10-33, in Amerikamura',
    cuisine: 'Jinrui Mina Menrui spin-off · shellfish-broth ramen with a big hit of salt and umami · sansho-oil ramen ¥1,200 · recommended curry ramen · mazesoba with bonito · limited cold ramen with ume, shiso and grated yam ¥1,280 (10 a day) · medium-thick curly whole-wheat noodles · mentaiko rice bowl',
    website: null, gmaps: gm('麺や 人類乃宝舟'), menu_url: null,
    notes: "[Ramen · a Jinrui Mina Menrui spin-off in Amerikamura] A newer shop in Amemura, since October 2025, from the people behind Osaka's Jinrui Mina Menrui (one reviewer credits its founder, \"UNCHI\"), open to 11 pm. Bowls carry lucky-god names such as Daikokuten and Benzaiten. The shellfish-broth ramen hits with salt and umami at once, over smooth, medium-thick curly whole-wheat noodles; add black pepper halfway. There's also a sansho-oil ramen (¥1,200) with a clear numbing note and an oversized sheet of nori, a curry ramen the shop recommends, a mazesoba under bonito flakes, and in summer a cold ramen in light dashi with ume, pickled turnip, shiso and grated yam (¥1,280, 10 bowls a day). At weekday lunch, large noodles and rice are free. Prices run high, and two reviewers found the service brusque.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 17 October 2025 (Tabelog)', background: 'Produced by the team behind Jinrui Mina Menrui ("Ramen produced by Humanity\'s Noodle UNCHI", July 2026 review).', philosophy: null, specialty: 'Shellfish and sansho ramen.',
      anecdotes: [
        { text: '"I ordered the Benzaiten (Shellfish Broth Ramen). The broth was amazing! The saltiness and umami hit me at once! The noodles were medium-thick, curly, and made with whole wheat flour." — June 2026, weekday lunch.', source: R + 'B530993875/' },
        { text: '"They only serve 10 bowls a day… The broth is a light Japanese dashi, complemented by the tanginess of pickled plum and marinated turnip." — August 2026, limited cold ramen ¥1,280.', source: R + 'B533940161/' },
      ],
      japanese_sources_summary: '食べログ: 麺や 人類乃宝舟、大阪市中央区西心斎橋2-10-33、毎日11:00〜23:00、カード・電子マネー・QR決済可、2025年10月17日開店。2026年の口コミ(6〜8月): みな麺の系列かと思う味、Daikokuten、山椒油、まぜそば、味玉、大盛りも楽、エプロンあり、平日ランチは麺大盛りとご飯無料、Benzaiten(貝出汁ラーメン)、塩気とうま味が一度に来る、全粒粉の中太ちぢれ麺、黒胡椒で味変、まぜそばに鰹節、人類みな麺類のUNCHIプロデュース、アメ村、23時まで、カレーラーメンがおすすめ、香る実山椒ラーメン1,200円、大きすぎる海苔、接客がそっけない、限定の冷やし1,280円(1日10杯、和風だし、梅と酢漬けのかぶ、大葉、とろろ)、太麺、明太子丼、値段は高め。',
      confidence: 'medium', sources: [TB, R + 'B530993875/', R + 'B533940161/', R + 'B532130098/', R + 'B530546441/', R + 'B533987688/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'unknown', tare: ['shio'], aroma_oil: ['other'], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'curly', hydration: null, handmade: false, notes: 'Medium-thick, curly whole-wheat noodles (June 2026); thick in the cold ramen (August 2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Shellfish-broth ramen; sansho-oil ramen ¥1,200 (2026).',
      chashu: 'Chashu (not described in detail).',
      notable_toppings: ['oversized nori', 'seasoned egg', 'bonito flakes (mazesoba)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Shellfish broth.' },
      pantheon: 'Jinrui Mina Menrui\'s Amemura offshoot: a salt-and-umami shellfish broth on curly whole-wheat noodles, with sansho and curry variants.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B533987688/', '"The ramen had a rich flavor from the shellfish broth."'],
        oiliness: [R + 'B532130098/', 'Sansho oil version; oil otherwise not described — mid-scale (inferred).'],
        clarity: [R + 'B530993875/', 'Shellfish broth, not described as clear or cloudy — mid-scale (inferred).'],
        tare_strength: [R + 'B530993875/', '"The saltiness and umami hit me at once!"'],
        noodle_firmness: [R + 'B530993875/', '"So smooth and delicious" — firmness not described; mid-scale.'],
        aroma_punch: [R + 'B532130098/', '"You can definitely taste the sansho" (sansho-oil ramen).'],
      },
      confidence: 'medium', sources: [R + 'B530993875/', R + 'B533987688/', R + 'B532130098/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Service can be brusque (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-10-33',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目10番33号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532130098/', R + 'B533940161/'],
    price_note: 'Prices from July–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shellfish-broth ramen', '', 'Ramen', 'no', 'no', 'June 2026.', 'kai_ramen'),
      it('', '', 'Sansho-oil ramen', '¥1,200', 'Ramen', 'no', 'no', 'July 2026.', 'sansho'),
      it('', '', 'Curry ramen', '', 'Ramen', 'no', 'no', 'Recommended by the shop (July 2026).', 'curry'),
      it('', '', 'Mazesoba with bonito flakes', '', 'Mazesoba', 'no', 'no', 'July 2026.', 'mazesoba'),
      it('', '', 'Limited cold ramen (ume, shiso, grated yam; 10 a day)', '¥1,280', 'Seasonal', 'no', 'no', 'August 2026.', 'hiyashi'),
      it('', '', 'Mentaiko rice bowl', '', 'Rice', 'no', 'no', 'August 2026.', 'mentai_don'),
    ] }, {
    cuisine: '人類みな麺類の系列・塩気とうま味が強い貝出汁ラーメン・山椒油のラーメン1,200円・店おすすめのカレーラーメン・鰹節のまぜそば・梅、大葉、とろろの限定冷やし1,280円(1日10杯)・全粒粉の中太ちぢれ麺・明太子丼',
    neighborhood: '西心斎橋2-10-33、アメリカ村',
    gf_detail: 'グルテンフリーではありません。全粒粉の小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。貝のスープ、チャーシュー、鰹節。',
    notes: '[ラーメン・アメ村の人類みな麺類の系列店] 2025年10月からアメ村にある、大阪の人類みな麺類のチームによる新しい店(創業者の「UNCHI」プロデュースという客も)、夜11時まで。一杯にはDaikokutenやBenzaitenといった福の神の名前が付いています。貝出汁のラーメンは塩気とうま味が一度に来て、なめらかな中太ちぢれの全粒粉の麺に。途中で黒胡椒を。しびれがしっかりの山椒油のラーメン(1,200円)は大きすぎる海苔付き、店おすすめのカレーラーメン、鰹節のまぜそば、夏は梅、かぶの酢漬け、大葉、とろろを和風だしに合わせた冷やし(1,280円、1日10杯)。平日ランチは麺大盛りとご飯が無料。値段は高めで、接客がそっけないという声も2件。',
  });
}

save();
