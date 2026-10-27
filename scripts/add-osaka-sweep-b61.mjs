// Osaka sweep (2-mile circle around Dotonbori), batch 61 — ramen phase (all OMNI).
//   + どうとんぼり 神座 心斎橋長堀店 (Kamukura cabbage shoyu by Shinsaibashi Stn; all night on weekends)
//   + 屯舎 火鍋＆麻辣湯 (build-your-own malatang by mobile order — filed 'other')
//   + 河童ラーメン本舗 米国村店 (Kappa back-fat tonkotsu shoyu, open to 4 am)
//   + 麺屋 しらかわ 大阪なんば店 (Hida Takayama chuka soba and house tsukemen)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 61);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ どうとんぼり 神座 心斎橋長堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27123948/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://kamukura.co.jp/';
  const W = day(['10:00', '23:30']), F = day(['10:00', '07:30']);
  put({
    id: 'osaka_kamukura_shinsaibashi_nagahori', name: 'どうとんぼり神座 心斎橋長堀店 (Dotonbori Kamukura Shinsaibashi Nagahori)', category: 'OMNI',
    lat: 34.674838, lng: 135.501173, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza, kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as far as sources show: pork and chashu; the broth base is not described. Ask.',
    hours_raw: 'Mon–Thu 10:00–23:30; Fri 10:00 to Sat 7:30; Sat 10:00 to Sun 7:30; Sun 10:00–23:30 (Tabelog). Waits of about 20 minutes late at night with overseas groups (October 2026). E-money accepted; no cards or QR (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 1-10-1 — 1 min from Shinsaibashi Stn (Midosuji Line)',
    cuisine: 'Kamukura\'s "delicious ramen" ¥820: light shoyu broth heaped with napa cabbage, pork and a large slice of chashu · sets with gyoza, kara-age and rice · chicken soboro rice bowl · fried rice · limited black-vinegar suanla noodles with steamed chicken or coriander (18 September–4 November 2026) · 30 seats',
    website: OWN, gmaps: gm('神座 心斎橋長堀店'), menu_url: null,
    notes: "[Ramen · Kamukura's cabbage shoyu by Shinsaibashi Station] A branch of the Dotonbori Kamukura chain a minute from Shinsaibashi Station on the Midosuji Line, open since 2021 and running through the night from Friday into Sunday morning. The \"delicious ramen\" (¥820, October 2026) is a light shoyu broth full of napa cabbage and pork, sweet from the vegetables and gentle enough to finish after a night out, with a large slice of chashu. Sets add gyoza, kara-age or rice. For autumn 2026 there's a limited black-vinegar suanla noodle on the house broth, until 4 November. Expect a short wait and slower service when busy with visitors; one diner waited 20 minutes at 10 pm after a concert.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 26 June 2021 (Tabelog)', background: 'Kamukura chain (kamukura.co.jp).', philosophy: null, specialty: 'Cabbage-loaded shoyu ramen.',
      anecdotes: [
        { text: '"I ordered the delicious ramen for JPY 820. At this price, it\'s definitely worth it. The cabbage and pork were both tasty, and this soup is the best after a night of drinking!" — October 2026.', source: R + 'B537022238/' },
        { text: '"The ramen featured a light soy sauce broth packed with plenty of napa cabbage and a large slice of chashu." — October 2026, gyoza set after a concert.', source: R + 'B537989035/' },
      ],
      japanese_sources_summary: '公式 kamukura.co.jp。食べログ: どうとんぼり神座 心斎橋長堀店、大阪市中央区心斎橋筋1-10-1、御堂筋線心斎橋駅から徒歩1分、月〜木10:00〜23:30、金10:00〜24:00、土0:00〜7:30・10:00〜24:00、日0:00〜7:30・10:00〜23:30、電子マネー可、カード・QR不可、30席、禁煙、2021年6月26日開店。口コミ(2026年9〜10月): ラーメンと唐揚げとご飯のセット、白菜たっぷりのあっさりしたスープ、おいしいラーメン820円、飲んだ後に、期間限定の黒酢酸辣湯麺(2026年9月18日〜11月4日)、蒸し鶏やパクチーのトッピング、餃子とご飯のセット、野菜と肉の旨み、鶏そぼろ丼は普通、外国人客が多く提供に時間がかかることも、夜10時に20分待ち、大きなチャーシュー。',
      confidence: 'medium', sources: [TB, OWN, R + 'B537022238/', R + 'B537989035/', R + 'B536431577/', R + 'B537236920/', R + 'B537793366/', R + 'B537827380/'] },
    ramen: {
      broth_base: ['other'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Not described at this branch.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '"Delicious ramen", ¥820 (October 2026).',
      chashu: 'A large slice (October 2026).',
      notable_toppings: ['napa cabbage', 'pork'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork; broth base not described.' },
      pantheon: 'Shinsaibashi Station\'s all-weekend Kamukura: the light cabbage shoyu that ends a night out.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B537827380/', '"A light broth that highlighted the sweetness of the vegetables."'],
        oiliness: [R + 'B537793366/', '"Different from heavy ramen" — placed low.'],
        clarity: [R + 'B537989035/', 'No comment on clarity — mid-scale.'],
        tare_strength: [R + 'B537989035/', '"A light soy sauce broth" — placed low.'],
        noodle_firmness: [R + 'B537793366/', 'No comment on noodles — mid-scale.'],
        aroma_punch: [R + 'B536431577/', '"The gentle flavor" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B537827380/', R + 'B537989035/', R + 'B537793366/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Chain ramen; busy with overseas guests late at night.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-10-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目10番1号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537022238/', R + 'B537236920/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', '"Delicious ramen"', '¥820', 'Ramen', 'no', 'no', 'October 2026.', 'oishii'),
      it('', '', 'Ramen set with gyoza and rice', '', 'Sets', 'no', 'no', 'October 2026.', 'gyoza_set'),
      it('', '', 'Ramen set with kara-age and rice', '', 'Sets', 'no', 'no', 'September 2026.', 'karaage_set'),
      it('', '', 'Black-vinegar suanla noodles (limited)', '', 'Limited', 'no', 'no', '18 September–4 November 2026.', 'suanla'),
    ] }, {
    cuisine: '神座の「おいしいラーメン」820円: 白菜たっぷりのあっさりした醤油スープ、豚肉、大きなチャーシュー・餃子、唐揚げ、ご飯のセット・鶏そぼろ丼・炒飯・期間限定の黒酢酸辣湯麺(蒸し鶏やパクチー、2026年9月18日〜11月4日)・30席',
    neighborhood: '心斎橋筋1-10-1。御堂筋線心斎橋駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子、唐揚げ。',
    vegan_detail: '情報の範囲ではヴィーガンではありません。豚肉とチャーシュー、スープのベースは不明。確認を。',
    notes: '[ラーメン・心斎橋駅すぐの神座の白菜ラーメン] 御堂筋線心斎橋駅から1分の、どうとんぼり神座の店で、2021年開店、金曜から日曜の朝までは夜通し営業。「おいしいラーメン」(820円、2026年10月)は白菜と豚肉がたっぷりのあっさりした醤油スープで、野菜の甘みがあり、飲んだ後でもするりと食べられ、大きなチャーシュー付き。セットで餃子、唐揚げ、ご飯も。2026年秋は神座のスープを使った期間限定の黒酢酸辣湯麺を11月4日まで。訪日客で混む時間は待ちや提供の遅れも。コンサート帰りの夜10時に20分待ったという人も。',
  });
}

// ================================================================ 屯舎 火鍋＆麻辣湯
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27108462/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_tonsha_malatang_nagahoribashi', name: '屯舎 火鍋＆麻辣湯 (Tonsha Hinabe & Mala Tan)', category: 'OMNI',
    lat: 34.674066, lng: 135.50518, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a shared mala broth not described for wheat; wheat noodle and dumpling options.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Most of the 40-plus ingredients are vegetables, tofu and noodles you choose yourself, but the broth and sesame sauce are not described.',
    hours_raw: 'Daily 11:30–22:00 (Tabelog). Order by smartphone (September 2026). Hot-pot courses in the evening (September 2026). Smoking allowed (Tabelog). Cards, PayPay and WeChat Pay accepted.',
    hours: ALL(day(['11:30', '22:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-8-3 — 2 min from Nagahoribashi Stn',
    cuisine: 'Build-your-own malatang: over 40 ingredients, five spice levels, no weight-based pricing · mala soup with more numbing than heat · tomato mala soup · noodles such as knife-cut, thick sweet-potato, corn and vermicelli (choose up to two) · winter melon, white fungus, king oyster mushroom, shrimp balls, quail eggs, sausage · free green onion, coriander and garlic · sesame sauce · about ¥1,300–1,500 a bowl · hot pot · 1F counter and tables, 2F tables and private rooms, 46 seats',
    website: null, gmaps: gm('屯舎 長堀橋'), menu_url: null,
    notes: "[Chinese · build-your-own malatang by Nagahoribashi] A two-floor malatang and hot-pot shop two minutes from Nagahoribashi, part of the Tonsha group, with a calm counter downstairs and private rooms upstairs. You order on your phone: pick from more than 40 ingredients and one of five spice levels, and the price isn't by weight, so a loaded bowl comes to about ¥1,300–1,500. The broth leans more numbing than hot, with real umami, and level 1 already has a kick. Fans recommend winter melon, white fungus, shrimp balls and knife-cut or sweet-potato noodles (two noodle types at most), with the sesame sauce and free green onion, coriander and garlic piled on. There's also a tomato mala soup with sweetness and acidity. Hot-pot courses run in the evening.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 January 2019 (Tabelog)', background: 'Tonsha malatang and hot-pot shops; this is the Nagahoribashi branch, with another in a station building (September 2026 review).', philosophy: null, specialty: 'Malatang.',
      anecdotes: [
        { text: '"The highlight of this place is the ability to customize your dish with over 40 ingredients and five levels of spiciness… making it easy to choose without worrying about weight-based pricing." — September 2026.', source: R + 'B536918031/' },
        { text: '"The mala soup here has a stronger numbing sensation than spiciness… It\'s great that green onions and cilantro can be added for free!" — August 2026, level-2 mala soup ¥1,270.', source: R + 'B534693094/' },
      ],
      japanese_sources_summary: '食べログ: 屯舎 火鍋＆麻辣湯、大阪市中央区東心斎橋1-8-3、長堀橋駅から徒歩2分、毎日11:30〜22:00、カード・PayPay・WeChat Pay可、電子マネー不可、46席(1階カウンター6・4人テーブル2、2階4人テーブル3・6人テーブル2・個室8)、喫煙可、2019年1月8日開店。口コミ(2025年11月〜2026年9月): クリスタ長堀から行ける、待ったことがない、にんにく、刀削麺と海老団子、青菜・レタス・じゃがいも・ソーセージ、麻辣湯2辛1,270円(太い芋の麺、冬瓜、エリンギ、山芋、白きくらげ)、辛さより痺れが強い、麺は2種まで、ねぎとパクチーは無料、モバイルオーダー、たくさん頼んでも1,500円ほど、トマト麻辣湯、1辛でもしっかり辛い、40種類以上の具と5段階の辛さ、量り売りではない、春雨80g、ほうれん草・かぼちゃ・うずらの卵、ごまだれ、夜は火鍋のコース、2階は大人数も。',
      confidence: 'medium', sources: [TB, R + 'B536918031/', R + 'B534693094/', R + 'B537664667/', R + 'B535372352/', R + 'B535828595/', R + 'B520136600/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Mobile ordering on your smartphone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-8-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目8番3号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534693094/', R + 'B535372352/', R + 'B537664667/'],
    price_note: 'Bowl prices from August–September 2026 reviews; depends on ingredients.', last_checked: TODAY, items: [
      it('', '', 'Mala soup, spice level 2 (with chosen ingredients)', '¥1,270', 'Malatang', 'no', 'ask', 'August 2026.', 'mala2'),
      it('', '', 'Tomato mala soup', '', 'Malatang', 'no', 'ask', 'September 2026.', 'tomato'),
      it('', '', 'Knife-cut noodles (ingredient)', '', 'Noodles', 'no', 'ask', 'November 2025.', 'daoxiao'),
      it('', '', 'Sesame sauce', '', 'Condiments', 'ask', 'ask', 'September 2026.', 'goma'),
    ] }, {
    cuisine: '自分で選ぶ麻辣湯: 40種類以上の具、5段階の辛さ、量り売りではない・辛さより痺れの強い麻辣湯・トマト麻辣湯・刀削麺、太い芋の麺、とうもろこしの麺、春雨など(麺は2種まで)・冬瓜、白きくらげ、エリンギ、海老団子、うずらの卵、ソーセージ・ねぎ、パクチー、にんにくは無料・ごまだれ・1杯1,300〜1,500円ほど・火鍋・1階カウンターとテーブル、2階テーブルと個室で46席',
    neighborhood: '東心斎橋1-8-3。長堀橋駅から徒歩2分',
    gf_detail: '実際にはグルテンフリーではありません。共通の麻辣スープの小麦は不明、小麦の麺や団子もあり。',
    vegan_detail: '要確認。40種類以上の具の多くは野菜、豆腐、麺で自分で選べますが、スープやごまだれの中身は不明。',
    notes: '[中華・長堀橋の自分で選ぶ麻辣湯] 長堀橋駅から2分、屯舎の2階建ての麻辣湯と火鍋の店で、1階は落ち着いたカウンター、2階には個室も。注文はスマホから。40種類以上の具と5段階の辛さを選び、量り売りではないので、たっぷり入れても1,300〜1,500円ほど。スープは辛さより痺れが強く、旨みもしっかりで、1辛でも十分に辛い。冬瓜、白きくらげ、海老団子、刀削麺や太い芋の麺(麺は2種まで)がおすすめで、ごまだれと無料のねぎ、パクチー、にんにくをたっぷりと。甘みと酸味のあるトマト麻辣湯も。夜は火鍋のコースもあります。',
  });
}

// ================================================================ 河童ラーメン本舗 米国村店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27020202/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.kappa-hompo.co.jp/';
  put({
    id: 'osaka_kappa_ramen_honpo_amemura', name: '河童ラーメン本舗 米国村店 (Kappa Ramen Honpo Beikokumura)', category: 'OMNI',
    lat: 34.674149, lng: 135.497785, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza and fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, back fat, chashu.',
    hours_raw: 'Daily 10:00–4:00 am (L.O. 3:45) (Tabelog). Free extra noodles and free kimchi (2026 reviews). No cover charge. Cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['10:00', '04:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 1-15-9, Amerikamura — 3 min from Yotsubashi Stn',
    cuisine: 'Kappa back-fat tonkotsu shoyu · Kappa ramen ¥930, ajitama +¥130 · Kuro Kappa with garlic oil · Aka Kappa with red chili · Aka Kappa chashu ramen · Kapa Saburo with a mountain of vegetables, back fat and thick noodles, ¥1,300 with ajitama · limited squid-ink Tsukimi ramen ¥1,100 and warm niboshi tsukemen ¥1,000 (2026) · free extra noodles and kimchi · fried garlic · half fried-rice set ¥330 · gyoza · 23 counter and 10 table seats',
    website: OWN, gmaps: gm('河童ラーメン本舗 米国村店'), menu_url: null,
    notes: "[Ramen · Kappa's back-fat tonkotsu in Amerikamura, open to 4 am] The Amerikamura branch of the Kappa Ramen Honpo chain, three minutes from Yotsubashi and open until 4 am, a reliable stop after a night out. The base Kappa ramen (¥930, 2026) is a mild pork-bone shoyu with no off-smell. Kuro Kappa adds garlic oil and Aka Kappa red chili. Thin, well-drained noodles come with a free extra serving, and kimchi is free while you wait. The Kapa Saburo is the big one, with a mountain of vegetables, back fat and thick chewy noodles. Limited bowls rotate, like a jet-black squid-ink Tsukimi ramen with shiso in October 2026. Gyoza, a ¥330 half fried rice and fried garlic round it out, and there are snacks for a drink first.",
    chef_bio: { chef_name: null, roles: [], origin: 'Amerikamura branch (Tabelog)', background: 'Kappa Ramen Honpo chain (kappa-hompo.co.jp).', philosophy: null, specialty: 'Back-fat tonkotsu shoyu; Kuro Kappa and Aka Kappa.',
      anecdotes: [
        { text: '"The broth, infused with garlic oil, was surprisingly not too heavy, offering a rich flavor that made me keep reaching for my spoon… I appreciated the free extra noodles." — August 2026, Kuro Kappa ¥930 + ajitama ¥130.', source: R + 'B525944048/' },
        { text: '"The squid ink tonkotsu broth was jet black, packed with a powerful squid flavor and umami, creating a striking impact complemented by the refreshing aroma of shiso leaves." — October 2026, limited Tsukimi ramen ¥1,100.', source: R + 'B521181634/' },
      ],
      japanese_sources_summary: '公式 kappa-hompo.co.jp。食べログ: 河童ラーメン本舗 米国村店、大阪市中央区西心斎橋1-15-9、四ツ橋駅から徒歩3分、毎日10:00〜翌4:00(L.O.3:45)、カード・電子マネー・QR可、チャージなし、33席(カウンター23、テーブル10)、禁煙。口コミ(2026年1〜10月): 限定の月見ラーメン1,100円(イカ墨の豚骨、大葉)と半チャーハンセット330円、味玉かっぱ三郎1,300円(野菜の山と背脂、太麺)、限定の温かいつけ麺1,000円(煮干しの酸味、刻み海苔・とろろ昆布・かつお節)、黒かっぱ930円+味玉130円(にんにく油、細麺、替え玉無料、キムチ無料)、かっぱラーメンはくさみがなくマイルド、おつまみもある、フライドガーリック、ラーメンと炒飯のセット、アメ村で飲んだ後に、黒かっぱと赤かっぱ、替え玉券、赤かっぱチャーシュー麺と餃子、豚骨に赤唐辛子、細麺、薄切りで面の広いチャーシュー。',
      confidence: 'medium', sources: [TB, OWN, R + 'B525944048/', R + 'B521181634/', R + 'B532340652/', R + 'B532932276/', R + 'B537097561/', R + 'B538084554/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['garlic oil'], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin, well-drained noodles with free kaedama; thick noodles on the Kapa Saburo (June–October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Kappa ramen / Kuro Kappa, ¥930 (April and August 2026).',
      chashu: 'Thin, wide Osaka-style slices (October 2026).',
      notable_toppings: ['back fat', 'garlic oil', 'red chili', 'free kimchi'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Amemura\'s 4 am Kappa: mild back-fat tonkotsu shoyu, black with garlic oil or red with chili, free kaedama.',
      profile: { richness: 3, oiliness: 4, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B525944048/', '"Surprisingly not too heavy, offering a rich flavor" — mid-scale.'],
        oiliness: [R + 'B525944048/', '"The broth, infused with garlic oil."'],
        clarity: [R + 'B525944048/', 'Tonkotsu — opaque.'],
        tare_strength: [R + 'B525944048/', '"Mild and very delicious" (April 2026) — mid-scale.'],
        noodle_firmness: [R + 'B538084554/', '"Firmer noodles or even extra-firm would match this broth better" — mid-scale.'],
        aroma_punch: [R + 'B525944048/', 'Garlic oil on the Kuro Kappa.'],
      },
      confidence: 'medium', sources: [R + 'B525944048/', R + 'B538084554/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Chain ramen; open late.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-15-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目15番9号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525944048/', R + 'B521181634/'],
    price_note: 'Prices from January–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kappa ramen', '¥930', 'Ramen', 'no', 'no', 'April 2026.', 'kappa'),
      it('', '', 'Kuro Kappa (garlic oil)', '¥930', 'Ramen', 'no', 'no', 'August 2026.', 'kuro'),
      it('', '', 'Aka Kappa chashu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'aka_chashu'),
      it('', '', 'Ajitama Kapa Saburo', '¥1,300', 'Ramen', 'no', 'no', 'June 2026.', 'saburo'),
      it('', '', 'Ajitama', '+¥130', 'Toppings', 'ask', 'no', 'August 2026.', 'ajitama'),
      it('', '', 'Half fried-rice set', '¥330', 'Sets', 'no', 'no', 'October 2026.', 'han_chahan'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'October 2026.', 'gyoza'),
    ] }, {
    cuisine: '河童の背脂豚骨醤油・かっぱラーメン930円、味玉+130円・にんにく油の黒かっぱ・赤唐辛子の赤かっぱ・赤かっぱチャーシュー麺・野菜の山と背脂と太麺の味玉かっぱ三郎1,300円・限定のイカ墨の月見ラーメン1,100円と煮干しの温かいつけ麺1,000円(2026年)・替え玉とキムチは無料・フライドガーリック・半チャーハンセット330円・餃子・カウンター23席とテーブル10席',
    neighborhood: '西心斎橋1-15-9、アメリカ村。四ツ橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子と炒飯。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、背脂、チャーシュー。',
    notes: '[ラーメン・アメ村の朝4時までの河童の背脂豚骨] 四ツ橋駅から3分、河童ラーメン本舗のアメリカ村の店で、朝4時まで営業し、飲んだ後の頼れる一軒。基本のかっぱラーメン(930円、2026年)はくさみのないマイルドな豚骨醤油。黒かっぱはにんにく油、赤かっぱは赤唐辛子入り。湯切りのいい細麺は替え玉が無料で、待つ間のキムチも無料。ボリュームならかっぱ三郎で、野菜の山と背脂、もちもちの太麺。限定も入れ替わり、2026年10月は真っ黒なイカ墨の月見ラーメンに大葉。餃子、330円の半チャーハン、フライドガーリックもあり、一杯飲めるおつまみも。',
  });
}

// ================================================================ 麺屋 しらかわ 大阪なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27139181/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_menya_shirakawa_namba', name: '麺屋 しらかわ 大阪なんば店 (Menya Shirakawa Osaka Namba)', category: 'OMNI',
    lat: 34.663034, lng: 135.500156, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-based broth; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-bone and bonito broth, chashu.',
    hours_raw: 'Daily 11:00–15:00 and 17:00–22:30; closed irregularly (Tabelog). Cards, e-money and PayPay accepted (Tabelog).',
    hours: ALL(day(['11:00', '15:00'], ['17:00', '22:30'])), hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 1-17-13, Naniwa — a short walk from Nankai Namba Stn',
    cuisine: 'Hida Takayama-style chuka soba · light Japanese-style shoyu broth with bonito, super-thin curly noodles, big chashu, green onion and plenty of menma · house tsukemen, regular 130 g ¥1,100, with glossy flat noodles, kabosu and a chicken-and-bonito shoyu dip · grilled chashu · lunch sets with kara-age, rice or chashu rice bowl · counter seats',
    website: null, gmaps: gm('麺屋 しらかわ 大阪なんば'), menu_url: null,
    notes: "[Ramen · Hida Takayama chuka soba near Nankai Namba] A modern counter near Nankai Namba, open since November 2023, serving the chuka soba of Hida Takayama in Gifu. The broth is a light, Japanese-style shoyu fragrant with bonito, and the noodles are startlingly thin, barely thicker than somen, so they slip right down. Toppings are a large chashu, green onion and plenty of menma. The house tsukemen (regular 130 g, ¥1,100, July 2026) arrives beautifully arranged: glossy flat noodles to dip in a chicken-and-bonito shoyu, with kabosu to squeeze over. Reviewers praise the grilled chashu. Lunch sets add kara-age with rice or a chashu rice bowl. It draws many overseas visitors.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 November 2023 (Tabelog)', background: 'Osaka Namba branch of Menya Shirakawa, serving Hida Takayama ramen from Gifu (October 2026 review).', philosophy: null, specialty: 'Takayama chuka soba; house tsukemen.',
      anecdotes: [
        { text: '"The broth is a Japanese-style soy sauce soup that spreads the umami and aroma of seafood, including bonito flakes. I was surprised by the noodles—they\'re super thin, just slightly thicker than somen." — October 2026, chuka soba.', source: R + 'B537542561/' },
        { text: '"The glossy, wheat-colored flat noodles shone brightly. Squeezing some kabosu citrus enhanced the flavor even more." — July 2026, homemade tsukemen (regular, 130 g) ¥1,100.', source: R + 'B475871055/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 しらかわ 大阪なんば店、大阪市浪速区難波中1-17-13、なんば駅から163m、毎日11:00〜15:00・17:00〜22:30、不定休、カード・電子マネー・PayPay可、禁煙、カウンター席、2023年11月15日開店。口コミ(2023年12月〜2026年10月): 自家製つけ麺並130g 1,100円、平打ちの艶のある麺、かぼす、開店当初は中華そば950円の一種類、Aセット(やや濃いめの醤油、細いちぢれ麺、メンマたっぷり、チャーシュー4枚ほど、唐揚げ、ご飯少なめ)、外国人客が多い、つけ麺はあっさりでよく絡む、炙りチャーシュー、飛騨高山の中華そば、かつお節など魚介が香る和風の醤油、そうめんより少し太い極細麺、ねぎ、大きなチャーシュー、岐阜のラーメン、モダンな店内、つけ麺と唐揚げとチャーシュー丼のセット、鶏ガラとかつお節の醤油のつけ汁。',
      confidence: 'medium', sources: [TB, R + 'B537542561/', R + 'B475871055/', R + 'B534303180/', R + 'B535703688/', R + 'B537742342/', R + 'B538092395/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'curly', hydration: null, handmade: false, notes: 'Super-thin curly noodles for the chuka soba; glossy flat noodles for the house tsukemen (July–October 2026).' },
      regional_style: ['Hida Takayama'], sub_genre: ['chuka soba', 'tsukemen'],
      signature_bowl: 'Chuka soba (Takayama style) (October 2026).',
      chashu: 'Large grilled chashu (September–October 2026).',
      notable_toppings: ['menma', 'green onion', 'kabosu (tsukemen)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken-bone and bonito broth.' },
      pantheon: 'Namba\'s taste of Gifu: a light bonito shoyu over noodles barely thicker than somen.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 2, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537542561/', '"The broth is lighter than typical ramen."'],
        oiliness: [R + 'B535703688/', '"The broth was light" — placed low.'],
        clarity: [R + 'B537542561/', 'No comment on clarity — mid-scale.'],
        tare_strength: [R + 'B534303180/', '"Slightly rich in flavor" shoyu — mid-scale.'],
        noodle_firmness: [R + 'B537542561/', '"They slide right into your mouth" — placed low.'],
        aroma_punch: [R + 'B537542561/', '"The umami and aroma of seafood, including bonito flakes" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B537542561/', R + 'B534303180/', R + 'B535703688/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中1-17-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中一丁目17番13号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B475871055/', R + 'B537542561/', R + 'B537742342/'],
    price_note: 'One current price from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba (Takayama style)', '', 'Ramen', 'no', 'no', 'October 2026.', 'chuka'),
      it('', '', 'House tsukemen (regular, 130 g)', '¥1,100', 'Tsukemen', 'no', 'no', 'July 2026.', 'tsuke'),
      it('', '', 'Set A (shoyu ramen, kara-age, rice)', '', 'Sets', 'no', 'no', 'August 2026.', 'set_a'),
      it('', '', 'Tsukemen, kara-age and chashu rice bowl set', '', 'Sets', 'no', 'no', 'October 2026.', 'tsuke_set'),
    ] }, {
    cuisine: '飛騨高山の中華そば・かつお節の香るあっさりした和風の醤油スープ、極細のちぢれ麺、大きなチャーシュー、ねぎ、たっぷりのメンマ・自家製つけ麺並130g 1,100円(艶のある平打ち麺、かぼす、鶏ガラとかつお節の醤油のつけ汁)・炙りチャーシュー・唐揚げとご飯やチャーシュー丼のランチセット・カウンター席',
    neighborhood: '浪速区難波中1-17-13。南海なんば駅から歩いてすぐ',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のスープ、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。鶏ガラとかつお節のスープ、チャーシュー。',
    notes: '[ラーメン・南海なんば近くの飛騨高山の中華そば] 南海なんば駅近くのモダンなカウンターの店で、2023年11月開店、岐阜・飛騨高山の中華そばを出します。スープはかつお節が香るあっさりした和風の醤油で、麺はそうめんより少し太いだけの驚くほどの細麺で、するりと入ります。具は大きなチャーシュー、ねぎ、たっぷりのメンマ。自家製つけ麺(並130g、1,100円、2026年7月)は美しく盛られた艶のある平打ち麺を、鶏ガラとかつお節の醤油のつけ汁で、かぼすを搾って。炙りチャーシューの評判も上々。ランチは唐揚げとご飯やチャーシュー丼のセットも。海外からの客も多い店です。',
  });
}

save();
