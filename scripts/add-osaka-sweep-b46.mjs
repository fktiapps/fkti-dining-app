// Osaka sweep (2-mile circle around Dotonbori), batch 46 — ramen phase, nearest first (all OMNI).
//   + NEXT□ (oyster-paitan ramen with projection mapping; Tabelog 100 Ramen OSAKA 2025)
//   + ちいかわラーメン 豚 心斎橋 (Chiikawa-character Jiro-style ramen, PARCO B2F)
//   + 大阪王将 心斎橋 アメリカ村店 (Osaka Ohsho chain — filed 'gyoza')
//   + 金麦 (seven-seat creamy chicken paitan in Kitahorie)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 46);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ NEXT□
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27124383/'; const R = TB + 'dtlrvwlst/';
  const W = day(['10:30', '23:00']), E = day(['10:00', '23:00']);
  put({
    id: 'osaka_next_shikaku_sennichimae', name: 'NEXT□ (NEXT Shikaku)', category: 'OMNI',
    lat: 34.664255, lng: 135.503505, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; fried oysters; soy-sauce versions.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oyster broth, chashu, shirasu.',
    hours_raw: 'Mon–Fri 10:30–23:00; Sat, Sun and holidays 10:00–23:00 (food L.O. 22:30); open year-round except 30 December–3 January (Tabelog). Buy a ticket at the machine outside, hand it to staff, and wait outside until called. Cards, e-money and QR accepted.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambasennichimae 9-12, on Doguyasuji shopping street — 2 min from Namba Stn',
    cuisine: 'Oyster ramen, Tabelog 100 Ramen OSAKA 2025 · "Koeru" triple-soup oyster paitan · "Ikasu" oyster dashi · oyster shoyu and oyster shiro-tan · fried oysters with salt and lemon · shirasu rice bowl · citrus accents · projection-mapping interior · 15 seats',
    website: 'https://silver-grape.com/', gmaps: gm('NEXT□ ネクストシカク 千日前'), menu_url: null,
    notes: "[Ramen · Tabelog 100 oyster ramen on Doguyasuji] A 15-seat oyster-ramen shop on the Doguyasuji kitchenware street, two minutes from Namba, named to Tabelog's Ramen OSAKA 100 for 2025. The house bowl is \"Koeru\", a triple-soup oyster paitan whose rich oyster umami and slight bitterness come through in every sip, with a citrus lift. There's also \"Ikasu\", an oyster dashi, plus oyster shoyu and a white version. Soft noodles and juicy, not-greasy chashu carry it; add the table spices for a change. Fried oysters come with salt and lemon, and the shirasu rice bowl with sesame is the side. The room is unusual too, with projection mapping. Buy your ticket outside and wait to be called; queues are mostly overseas visitors.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 August 2021 (Tabelog)', background: 'Tabelog 100 Ramen OSAKA 2025; operator site silver-grape.com.', philosophy: null, specialty: 'Oyster paitan ramen.',
      anecdotes: [
        { text: '"As soon as I took a sip of the soup, the rich umami and slight bitterness of the oysters spread in my mouth—delicious! The soft noodles and juicy chashu were all of a high standard!" — October 2026, "Koeru" and fried oysters.', source: R + 'B537855188/' },
        { text: '"I ordered the triple soup \'koeru\' made with oyster white broth and the oyster dashi \'ikasu.\'" — October 2026.', source: R + 'B537713156/' },
      ],
      japanese_sources_summary: '食べログ: NEXT□(ネクストシカク)、大阪市中央区難波千日前9-12 道具屋筋商店街、06-6643-7787、予約不可、月〜金10:30〜23:00、土日祝10:00〜23:00(料理L.O.22:30)、年中無休(12月30日〜1月3日休み)、閉店間際でも歓迎、カード・電子マネー・QR決済可、15席(カウンター6、大テーブル8)、2021年8月1日開店、百名店(ラーメンOSAKA 2025)、サイト silver-grape.com。2026年10月の口コミ: 牡蠣白湯、牡蠣が溶け込んだスープを毎回完飲、牡蠣醤油ラーメン、週末の昼は3組待ち、店頭の券売機、特製「こえる」(濃厚な牡蠣、脂っこくないチャーシュー、スパイスで味変)、牡蠣白湯ラーメンと味玉、プロジェクションマッピング、外で待って呼ばれたら入店、並ぶのは外国人が多い、トリプルスープの「こえる」と牡蠣だしの「いかす」、カキフライに塩とレモン、やわらかい麺、クリーミーなスープに柑橘、しらす丼(ごまとたれ)。',
      confidence: 'medium', sources: [TB, R + 'B537855188/', R + 'B537713156/', R + 'B537552983/', R + 'B498831111/', R + 'B537858421/', R + 'B537698239/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Soft noodles (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '"Koeru" triple-soup oyster paitan (October 2026).',
      chashu: 'Juicy, not greasy (October 2026).',
      notable_toppings: ['citrus', 'table spices'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Oyster broth.' },
      pantheon: 'Doguyasuji\'s Tabelog 100 oyster paitan: a triple soup of oyster umami, a citrus lift and a projection-mapped room.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 2, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537855188/', '"The rich umami and slight bitterness of the oysters spread in my mouth."'],
        oiliness: [R + 'B537552983/', '"The chashu was not too greasy" — mid-scale.'],
        clarity: [R + 'B537858421/', '"The broth was creamy" — opaque.'],
        tare_strength: [R + 'B537858421/', '"Citrus notes provided a refreshing contrast, balancing the richness" — mid-scale.'],
        noodle_firmness: [R + 'B537855188/', '"The soft noodles" — placed low.'],
        aroma_punch: [R + 'B498831111/', '"The oysters blend perfectly into the broth" — oyster-forward; placed high.'],
      },
      confidence: 'medium', sources: [R + 'B537855188/', R + 'B537858421/', R + 'B498831111/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine outside; queue outside until called.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前9-12 道具屋筋商店街',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog 100 2025; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前9番12号 (go) 8m; OSM ネクストシカク node/13431179801 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537713156/', R + 'B537855188/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', '"Koeru" triple-soup oyster paitan', '', 'Ramen', 'no', 'no', 'October 2026.', 'koeru'),
      it('', '', '"Ikasu" oyster dashi ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'ikasu'),
      it('', '', 'Oyster shoyu ramen', '', 'Ramen', 'no', 'no', 'January 2025.', 'kaki_shoyu'),
      it('', '', 'Fried oysters (salt and lemon)', '', 'Sides', 'no', 'no', 'October 2026.', 'kaki_fry'),
      it('', '', 'Shirasu rice bowl', '', 'Rice', 'no', 'no', 'October 2026.', 'shirasu'),
    ] }, {
    cuisine: '牡蠣のラーメン、食べログ百名店(ラーメンOSAKA 2025)・トリプルスープの牡蠣白湯「こえる」・牡蠣だしの「いかす」・牡蠣醤油と牡蠣の白・塩とレモンのカキフライ・しらす丼・柑橘のアクセント・プロジェクションマッピングの店内・15席',
    neighborhood: '難波千日前9-12、道具屋筋商店街。なんば駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、カキフライ、醤油の味も。',
    vegan_detail: 'ヴィーガンではありません。牡蠣のスープ、チャーシュー、しらす。',
    notes: '[ラーメン・道具屋筋の百名店の牡蠣ラーメン] なんば駅から2分、道具屋筋商店街にある15席の牡蠣ラーメンの店で、食べログのラーメンOSAKA百名店2025に選出。看板の「こえる」はトリプルスープの牡蠣白湯で、一口ごとに牡蠣の濃いうま味とほのかな苦み、柑橘がすっきりと。牡蠣だしの「いかす」、牡蠣醤油や白もあります。やわらかい麺と脂っこくないジューシーなチャーシュー、卓上のスパイスで味変も。カキフライは塩とレモンで、サイドはごまの香るしらす丼。店内もプロジェクションマッピングで一風変わっています。食券は外で買い、呼ばれるまで外で待ちます。並ぶのは海外からの客が中心。',
  });
}

// ================================================================ ちいかわラーメン 豚 心斎橋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27145788/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_chiikawa_ramen_buta_shinsaibashi', name: 'ちいかわラーメン 豚 心斎橋 (Chiikawa Ramen Buta Shinsaibashi)', category: 'OMNI',
    lat: 34.674016, lng: 135.500725, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; soy-sauce tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork broth, back fat, pork.',
    hours_raw: 'Daily 11:00–22:00 (Tabelog); the PARCO lift to the floor starts at 11:00 (October 2026). Advance reservations or tickets recommended; waits of up to an hour even with one (October 2026). Cards, e-money and QR accepted.',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi PARCO B2F (Shinsaibashi-suji 1-8-3) — 1 min from Shinsaibashi Stn',
    cuisine: 'Jiro-style ramen in a Chiikawa-character collaboration shop · mini (the standard portion), small and large · garlic, vegetables, back fat and seasoning to order · large, garlic-free, extra vegetables and fat ¥1,950 · character bowls, ladles, aprons, cups and chopstick wrappers · collaboration drinks and merchandise',
    website: null, gmaps: gm('ちいかわラーメン 豚 心斎橋PARCO'), menu_url: null,
    notes: "[Ramen · a Chiikawa-character Jiro-style ramen shop in PARCO] A character collaboration in PARCO's B2F, decorated top to bottom in Chiikawa style down to the bowls, ladles, aprons, cups and chopstick wrappers. Fans book ahead and still wait up to an hour; the lift opens at 11 am. The ramen is Jiro-style, but gentler than the real thing: a garlicky soy broth that's lighter, with softer fat, on chewy thick noodles. You call your garlic, vegetables, fat and seasoning. Even \"mini\" is a full meal, and most people order it; a large with extra vegetables and fat runs ¥1,950. Reviewers split between delicious and \"mainly for the merchandise\", but the cuteness is the point.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 November 2024 (Tabelog)', background: 'A Chiikawa character-collaboration ramen shop (reviews).', philosophy: null, specialty: 'Jiro-style ramen.',
      anecdotes: [
        { text: '"Even without garlic, the broth has a garlic flavor… The taste is different from the typical Jiro-style ramen; it has a gentler fat that some might prefer." — October 2026, large garlic-free with extra vegetables and fat ¥1,950.', source: R + 'B537447202/' },
        { text: '"The exterior and interior, the hand towels, the disposable chopstick wrappers, the ramen bowls, the ladles, the aprons, and the cups for water—all of it is designed in the adorable Chiikawa style." — October 2026.', source: R + 'B538119423/' },
      ],
      japanese_sources_summary: '食べログ: ちいかわラーメン 豚 心斎橋、大阪市中央区心斎橋筋1-8-3 心斎橋パルコB2F、06-6484-6311、予約可、毎日11:00〜22:00、カード・電子マネー・QR決済可、2024年11月15日開店。2026年10月の口コミ: 平日10時45分に到着、エレベーターは11時から、前後もちいかわ目当て、ラーメン小、大のニンニク増し・野菜普通・アブラ増し・味濃いめ、見た目は二郎系、味は普通という声、コラボグッズ目当ての店という声、大のニンニクなし野菜アブラ増し1,950円、ニンニクなしでもにんにくの風味、普通の二郎系よりやさしい脂、醤油、軽め、かわいくて食べにくい、ドリンクもかわいい、予約していても1時間待ち、もちもちの麺、おしぼり、割り箸の袋、丼、レンゲ、エプロン、コップまでちいかわ、ミニが標準の量でミニでも多い。',
      confidence: 'medium', sources: [TB, R + 'B537447202/', R + 'B538119423/', R + 'B538070202/', R + 'B538131391/', R + 'B537849663/', R + 'B537434389/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: ['back fat'], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Chewy noodles (October 2026); Jiro-style.' },
      regional_style: [], sub_genre: ['ramen', 'jiro_kei'],
      signature_bowl: 'Mini, the standard size (October 2026).',
      chashu: 'Pork (Jiro-style); not described in detail.',
      notable_toppings: ['vegetables', 'back fat', 'garlic'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork broth.' },
      pantheon: 'A gentler, garlicky Jiro bowl served in Chiikawa crockery under Shinsaibashi PARCO.',
      profile: { richness: 3, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537447202/', '"Not heavy and is lighter than usual Jiro ramen."'],
        oiliness: [R + 'B537447202/', '"A gentler fat that some might prefer" — mid-scale.'],
        clarity: [R + 'B537434389/', 'Jiro-style broth — opaque (inferred).'],
        tare_strength: [R + 'B537447202/', '"A decent soy sauce taste" — mid-scale.'],
        noodle_firmness: [R + 'B538070202/', '"Perfectly chewy noodles."'],
        aroma_punch: [R + 'B537447202/', '"Even without garlic, the broth has a garlic flavor."'],
      },
      confidence: 'medium', sources: [R + 'B537447202/', R + 'B538070202/', R + 'B537434389/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Reserve ahead; call your toppings Jiro-style.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-8-3 心斎橋パルコ B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目8番3号 (go) 54m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537447202/'],
    price_note: 'One price captured (October 2026).', last_checked: TODAY, items: [
      it('', '', 'Ramen, mini (standard portion)', '', 'Ramen', 'no', 'no', 'October 2026.', 'mini'),
      it('', '', 'Ramen, small', '', 'Ramen', 'no', 'no', 'October 2026.', 'sho'),
      it('', '', 'Ramen, large (garlic-free, extra vegetables and fat)', '¥1,950', 'Ramen', 'no', 'no', 'October 2026.', 'dai'),
      it('', '', 'Collaboration drink', '', 'Drinks', 'ask', 'ask', 'October 2026.', 'drink'),
    ] }, {
    cuisine: 'ちいかわのキャラクターとのコラボの二郎系ラーメン・ミニ(標準の量)、小、大・ニンニク、野菜、アブラ、味の濃さをコール・大のニンニクなし野菜アブラ増し1,950円・キャラクターの丼、レンゲ、エプロン、コップ、箸袋・コラボドリンクとグッズ',
    neighborhood: '心斎橋パルコB2F(心斎橋筋1-8-3)。心斎橋駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の太麺、醤油だれ。',
    vegan_detail: 'ヴィーガンではありません。豚のスープ、背脂、豚肉。',
    notes: '[ラーメン・パルコのちいかわの二郎系ラーメン] 心斎橋パルコの地下2階にあるキャラクターのコラボ店で、丼、レンゲ、エプロン、コップ、箸袋まで隅々までちいかわ仕様。ファンは予約しても1時間待つことも、エレベーターは朝11時から。ラーメンは二郎系ですが本家よりやさしく、にんにくの効いた軽めの醤油スープにやわらかい脂、もちもちの太麺。ニンニク、野菜、アブラ、味の濃さをコールします。「ミニ」でも十分な量で、たいていの人はミニ。大の野菜アブラ増しは1,950円。おいしいという声と、グッズ目当ての店という声に分かれますが、かわいさこそが主役です。',
  });
}

// ================================================================ 大阪王将 心斎橋 アメリカ村店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27012346/'; const R = TB + 'dtlrvwlst/';
  const A = day(['09:00', '00:30']), L = day(['09:00', '01:30']);
  put({
    id: 'osaka_osaka_ohsho_amemura', name: '大阪王将 心斎橋 アメリカ村店 (Osaka Ohsho Shinsaibashi Amerikamura)', category: 'OMNI',
    lat: 34.673249, lng: 135.498048, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-wrapper gyoza, noodles, soy-based Chinese sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork gyoza, meat and shrimp dishes.',
    hours_raw: 'Mon–Thu and Sun 9:00–0:30; Fri–Sat 9:00–1:30 (Tabelog). Reservations taken. No cards or e-money; QR (PayPay) accepted (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: L, 5: L, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 1-8-18, Amerika-mura — 3 min from Yotsubashi Stn',
    cuisine: 'Osaka Ohsho chain · gyoza · ramen · cold noodles (summer) · fried rice and chahan with sauce · sweet-and-sour pork set · "TOKYO niku-si" fried rice and gyoza · shrimp chili · beer set · 30 seats in a bright, glass-fronted room · open from 9 am to after midnight',
    website: 'http://www.hirofoodservice.com/', gmaps: gm('大阪王将 心斎橋 アメリカ村店'), menu_url: null,
    notes: "[Gyoza · Osaka Ohsho in Amerika-mura, open past midnight] The Amerika-mura branch of the Osaka Ohsho gyoza-and-Chinese chain, in a bright, glass-fronted room three minutes from Yotsubashi. It opens at 9 am and stays open past midnight, to 1:30 am on Fridays and Saturdays, busy with tourists late at night. Gyoza are the obvious order; one diner regretted picking the sweet-and-sour pork set over gyoza. The menu is long: strong-flavored ramen, cold noodles in summer, fried rice and a sauce-covered chahan, \"TOKYO niku-si\" fried rice with gyoza, and an authentic-tasting shrimp chili with a beer set. Portions are big. PayPay or cash.",
    chef_bio: { chef_name: null, roles: [], origin: 'Amerika-mura branch (Tabelog)', background: 'Osaka Ohsho chain; operator link hirofoodservice.com (Tabelog).', philosophy: null, specialty: 'Gyoza; Chinese set meals.',
      anecdotes: [
        { text: '"The ramen had a strong flavor overall and was delicious. The chahan (fried rice with egg) was generously topped with sauce, making it quite satisfying." — July 2026.', source: R + 'B531632992/' },
        { text: '"I opted for the beer set this time, and the shrimp chili was authentic and delicious." — October 2026.', source: R + 'B538068937/' },
      ],
      japanese_sources_summary: '食べログ: 大阪王将 心斎橋 アメリカ村店、大阪市中央区西心斎橋1-8-18、06-6281-1539、予約可、月〜木・日9:00〜翌0:30、金土9:00〜翌1:30、カード・電子マネー不可、QR(PayPay)可、30席、運営 hirofoodservice.com。2026年の口コミ(5〜10月): 運動後に冷麺と炒飯、酢豚定食はふつう、餃子にすればよかった、昔は同じ看板の王将との関係の話、ラーメンは濃い味、あんかけの天津炒飯、メニューが豊富、量が多い、夜10時でも5組、ガラス張りで明るい店内、TOKYO肉汁炒飯と餃子、外国人観光客が多い、ビールセットとエビチリ。',
      confidence: 'medium', sources: [TB, R + 'B531632992/', R + 'B538068937/', R + 'B537594441/', R + 'B527570707/', R + 'B527995327/', R + 'B528388310/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Chain menu; lively with tourists late.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-8-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目8番18号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531632992/', R + 'B537594441/', R + 'B538068937/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('餃子', 'gyōza', 'Gyoza', '', 'Gyoza', 'no', 'no', 'October 2026.', 'gyoza'),
      it('ラーメン', 'rāmen', 'Ramen', '', 'Noodles', 'no', 'no', 'July 2026.', 'ramen'),
      it('', '', 'Chahan with sauce', '', 'Rice', 'no', 'no', 'July 2026.', 'ankake_chahan'),
      it('', '', '"TOKYO niku-si" fried rice and gyoza', '', 'Sets', 'no', 'no', 'October 2026.', 'tokyo_set'),
      it('', '', 'Shrimp chili (beer set)', '', 'Sets', 'no', 'no', 'October 2026.', 'ebichili'),
    ] }, {
    cuisine: '大阪王将のチェーン・餃子・ラーメン・冷麺(夏)・炒飯とあんかけ炒飯・酢豚定食・TOKYO肉汁炒飯と餃子・エビチリ・ビールセット・ガラス張りで明るい店内の30席・朝9時から深夜まで',
    neighborhood: '西心斎橋1-8-18、アメリカ村。四ツ橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の皮の餃子、麺、醤油ベースの中華のたれ。',
    vegan_detail: 'ヴィーガンではありません。豚肉の餃子、肉やエビの料理。',
    notes: '[餃子・アメ村の深夜までの大阪王将] 四ツ橋駅から3分、ガラス張りで明るい大阪王将のアメリカ村店。朝9時から深夜まで、金・土は1時半まで営業し、夜遅くは観光客でにぎわいます。頼むならまず餃子で、酢豚定食を頼んで餃子にすればよかったという人も。メニューは豊富で、濃い味のラーメン、夏の冷麺、炒飯やあんかけの炒飯、TOKYO肉汁炒飯と餃子、本格的なエビチリとビールのセット。量は多め。支払いはPayPayか現金。',
  });
}

// ================================================================ 金麦
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27143179/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kin_mugi_kitahorie', name: '金麦 (Kin Mugi)', category: 'OMNI',
    lat: 34.672668, lng: 135.497102, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan, pork and chicken chashu, beef options.',
    hours_raw: 'Daily 11:00–14:30 and 18:00–21:30; closing days vary (Tabelog). Touch-panel ordering (replaced the ticket machine, 2026). Cash only — no cards, e-money or QR (Tabelog). Lines are common.',
    hours: ALL(day(['11:00', '14:30'], ['18:00', '21:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kitahorie 1-2-16, Ookini Saita Saita Bldg side bldg 1F — about 200 m from Yotsubashi Stn',
    cuisine: 'Creamy, fine-foamed chicken paitan · three chashu (low-temperature pork loin, chicken breast and more) · thick, tender menma · shredded white leek, mizuna, chopped onion · medium-thick straight noodles · yodare-chicken rice bowl · beef options (2026) · 7 counter seats',
    website: null, gmaps: gm('金麦 北堀江 ラーメン'), menu_url: null,
    notes: "[Ramen · a seven-seat creamy chicken paitan in Kitahorie] A seven-seat counter near Yotsubashi, often with a line, serving a chicken paitan covered in fine foam: smooth and rich, the chicken clear without heaviness. The bowl carries three chashu, including low-temperature pork loin and chicken breast, plus shredded leek, mizuna and onion. One menma lover calls the thick, tender, well-soaked bamboo shoots the best ever. Noodles are medium-thick and straight; one August diner got them undercooked. A yodare-chicken rice bowl is the side. In 2026 a touch panel replaced the ticket machine, beef options joined the menu, and a younger crew took over; one long-time fan misses the old feel. It gets warm inside. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 July 2024 (Tabelog)', background: 'A returning June 2026 reviewer notes a younger staff now runs the counter and the menu has added beef dishes.', philosophy: null, specialty: 'Chicken paitan ramen; menma.',
      anecdotes: [
        { text: '"The soup was covered in fine bubbles, creating an incredibly smooth texture. Despite its richness, the chicken flavor was prominent without feeling heavy… I can confidently say this was the best menma I\'ve ever had." — July 2026.', source: R + 'B532327954/' },
        { text: '"The chashu (braised pork) came in three varieties, each tender and offering a different texture." — September 2026.', source: R + 'B537070914/' },
      ],
      japanese_sources_summary: '食べログ: 金麦、大阪市西区北堀江1-2-16 おおきにサイタ・サイタビルヂング横ビル1F、予約不可、毎日11:00〜14:30・18:00〜21:30、休みは不定、カード・電子マネー・QR不可、7席(カウンター)、2024年7月7日開店。2026年の口コミ(6〜10月): クリーミーな鶏白湯とよだれ鶏丼、細かい泡でなめらか、濃いのに鶏が立って重くない、低温調理の豚ロースと鶏むねのチャーシュー、白髪ねぎ、水菜、玉ねぎ、メンマ(厚くやわらかく味がしみて最高)、券売機がタッチパネルに、牛肉のメニューが増えた、以前の店主はいなくなり若いスタッフに、何かが欠けたという声、もちもちの中太麺がゆで足りなかったという声、席が少なく行列、海外客が多い、店内が暑い、いつも行列、中太ストレート麺、チャーシュー3種、あっさりした鶏白湯を完飲、MINAMI WHEELの合間に。',
      confidence: 'medium', sources: [TB, R + 'B532327954/', R + 'B537070914/', R + 'B532974901/', R + 'B533009348/', R + 'B534740312/', R + 'B537748383/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thick straight noodles, chewy (August–September 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan'],
      signature_bowl: 'Chicken paitan ramen (July–October 2026).',
      chashu: 'Three kinds, including low-temperature pork loin and chicken breast (July–September 2026).',
      notable_toppings: ['menma (thick)', 'shredded white leek', 'mizuna', 'chopped onion', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Kitahorie\'s seven-seat foam-topped chicken paitan, with three chashu and a celebrated menma.',
      profile: { richness: 4, oiliness: 2, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B533009348/', '"The broth was rich and creamy."'],
        oiliness: [R + 'B532327954/', '"Despite its richness… without feeling heavy" — placed low.'],
        clarity: [R + 'B532327954/', '"The soup was covered in fine bubbles" — opaque.'],
        tare_strength: [R + 'B537070914/', '"The broth was a light chicken paitan" — mid-scale.'],
        noodle_firmness: [R + 'B533009348/', '"Chewy medium-thick noodles" (one batch undercooked) — mid-scale.'],
        aroma_punch: [R + 'B532327954/', 'Chicken-forward, not pungent — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B532327954/', R + 'B533009348/', R + 'B537070914/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Touch-panel ordering; small counter; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-2-16 おおきにサイタ・サイタビルヂング横ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目2番16号 (go) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532327954/', R + 'B537070914/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Chicken paitan ramen', '', 'Ramen', 'no', 'no', 'July–October 2026.', 'toripaitan'),
      it('', '', 'Yodare-chicken rice bowl', '', 'Rice', 'no', 'no', 'July 2026.', 'yodare_don'),
      it('', '', 'Seasoned egg', '', 'Toppings', 'ask', 'no', 'September 2026.', 'ajitama'),
    ] }, {
    cuisine: '細かい泡のクリーミーな鶏白湯・チャーシュー3種(低温調理の豚ロース、鶏むねなど)・厚くやわらかいメンマ・白髪ねぎ、水菜、刻み玉ねぎ・中太ストレート麺・よだれ鶏丼・牛肉のメニュー(2026年)・カウンター7席',
    neighborhood: '北堀江1-2-16 おおきにサイタ・サイタビルヂング横ビル1F。四ツ橋駅から約200m',
    gf_detail: 'グルテンフリーではありません。小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯、豚と鶏のチャーシュー、牛肉のメニュー。',
    notes: '[ラーメン・北堀江の7席のクリーミーな鶏白湯] 四ツ橋駅の近く、よく行列のできる7席のカウンターで、細かい泡に覆われた鶏白湯を出します。なめらかで濃いのに重くなく、鶏がしっかり立ちます。チャーシューは低温調理の豚ロースや鶏むねなど3種、白髪ねぎ、水菜、玉ねぎ。メンマ好きが今まででいちばんと言う、厚くやわらかく味のしみたメンマも。麺は中太ストレートで、8月にはゆで足りなかったという声も。サイドはよだれ鶏丼。2026年は券売機がタッチパネルになり、牛肉のメニューが加わり、若いスタッフに代わって、昔の雰囲気が恋しいという長年のファンも。店内は暑くなりがち。現金のみ。',
  });
}

save();
