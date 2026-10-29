// Osaka sweep (2-mile circle around Dotonbori), batch 163 — ramen phase.
//   + 家系らーめん 斗星家 (iekei near Tsutenkaku, homemade noodles, free rice refills and pickles; Ebisu-higashi)
//   + 麺とかき氷 ドギャン 谷四店 (creative chilled ramen, mazesoba and fruit-heaped kakigori; Tanimachi 5-chome crossing)
//   + 麺工房 谷町店 (one-person neighborhood Chinese-style ramen shop open to 2 am; Tanimachi 5-chome) — mom
//   + CHIKAPPA 谷4店 (Hakata tonkotsu, white/black/red, free takana and pickled ginger; Tokiwamachi)
//   Skipped: 27146299 KAMUKURA 淡路町店 (Kamukura in data).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 163);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27146299', 'Chain branch: Dotonbori Kamukura already in data.');

// ================================================================ 家系らーめん 斗星家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270206/27137624/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:00', '15:00'], ['16:00', '20:00']);
  put({
    id: 'osaka_iekei_toboshiya_ebisu', name: '家系らーめん 斗星家 (Iekei Ramen Toboshiya)', category: 'OMNI',
    lat: 34.653267, lng: 135.507166, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth; chashu.',
    hours_raw: 'Tue and Thu–Sun 12:00–15:00 and 16:00–20:00; closed Mon and Wed; irregular closings — check Instagram (Tabelog; October 2026). Opened 4 August 2023 (Tabelog). Cash only; ticket machine (Tabelog; September 2026).',
    hours: { 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ebisu-higashi 1-7-4, near Tsutenkaku — 4 min from Ebisucho Stn',
    cuisine: 'Yokohama iekei ramen · regular ramen ¥900; firmness, richness and oil to order · homemade, short medium-thick noodles, a little thinner than the usual iekei · large chashu · extra nori +¥200; seasoned egg +¥130 · rice ¥200 with free refills · free Ura Kappa pickled cucumber · a Jiro-style bowl too · about 10 counter seats',
    website: null, gmaps: gm('家系らーめん 斗星家'), menu_url: null,
    notes: "[Ramen · a homemade-noodle iekei by Tsutenkaku] A simple ten-seat iekei counter a few minutes from Tsutenkaku, often with a short line. The regular ramen (¥900) is a rich tonkotsu shoyu that drinks easily, less aggressively salty than many iekei to some diners and salty to others, on homemade noodles a touch thinner than usual, with a large chashu. Order firmness, richness and oil, buy rice (¥200) and refill it free, and help yourself to the free pickled cucumber. Three friendly staff keep it moving. Hours are irregular, so check Instagram before going. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 August 2023 (Tabelog).', background: 'Iekei ramen shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Iekei tonkotsu shoyu with homemade noodles.',
      anecdotes: [
        { text: '"The noodles are homemade and slightly thinner compared to the typical Sakai Seimen noodles. The broth had a nice thickness and a rich flavor." — October 2026, Regular ramen, firm.', source: R + 'B537196070/' },
        { text: '"The broth, which combines the flavors of soy sauce and pork bone, is rich yet easy to drink." — September 2026, Regular Ramen ¥900.', source: R + 'B536199786/' },
      ],
      japanese_sources_summary: '食べログ: 家系らーめん 斗星家、大阪市浪速区恵美須東1-7-4、恵美須町駅から312m、火・木〜日 12:00〜15:00・16:00〜20:00、月・水休み、不定休 (Instagram で確認を)、2023年8月4日開店、カード・電子マネー・QR不可。口コミ(2026年9〜10月): 通天閣の近く、行列のことも、券売機、ラーメン並900円、麺の硬さ・味の濃さ・油の量を選べる、自家製の短めの中太麺 (家系としてはやや細め)、大きなチャーシュー、海苔増し+200円、味玉+130円、ご飯200円でおかわり自由、Ura Kappa のきゅうりの漬物は無料、二郎系も、カウンター10席ほど、気さくな店の人3人、しょっぱいという声と塩辛すぎないという声。',
      confidence: 'medium', sources: [TB, R + 'B535733317/', R + 'B535760881/', R + 'B536018303/', R + 'B536199786/', R + 'B537196070/', R + 'B538151672/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: true, notes: 'Homemade, short medium-thick noodles, a little thinner than typical iekei (2026).' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen'],
      signature_bowl: 'Regular iekei ramen, ¥900 (September 2026).',
      chashu: 'Large chashu; one diner describes it as thinly sliced (2026).',
      notable_toppings: ['nori', 'seasoned egg', 'pickled cucumber'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Tsutenkaku\'s homemade-noodle iekei with free rice refills.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B537196070/', '"The broth had a nice thickness and a rich flavor" — high.'],
        oiliness: [R + 'B536199786/', '"rich yet easy to drink" — mid-scale.'],
        clarity: [R + 'B537196070/', 'Thick tonkotsu shoyu — placed low.'],
        tare_strength: [R + 'B535760881/', '"The flavor is salty! But it\'s tasty" — placed high.'],
        noodle_firmness: [R + 'B535760881/', '"The short, medium-thick noodles are delicious"; firm on request — mid-scale.'],
        aroma_punch: [R + 'B538151672/', '"not overly rich… but it has a strong flavor" — low-mid.'],
      },
      confidence: 'medium', sources: [R + 'B537196070/', R + 'B536199786/', R + 'B535760881/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; friendly staff (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区恵美須東1-7-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区恵美須東一丁目7番4号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535760881/', R + 'B536199786/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Regular iekei ramen', '¥900', 'Ramen', 'no', 'no', 'September 2026.', 'ramen'),
      it('', '', 'Extra nori', '+¥200', 'Toppings', 'ask', 'ask', 'September 2026.', 'nori'),
      it('', '', 'Seasoned egg', '+¥130', 'Toppings', 'ask', 'no', 'September 2026.', 'egg'),
      it('', '', 'Rice (free refills)', '¥200', 'Sides', 'ask', 'ask', 'September 2026.', 'rice'),
    ] }, {
    cuisine: '横浜家系ラーメン・ラーメン並900円、麺の硬さ、味の濃さ、油の量を選べる・自家製の短めの中太麺、ふつうの家系よりやや細め・大きなチャーシュー・海苔増し+200円、味玉+130円・ご飯200円でおかわり自由・Ura Kappa のきゅうりの漬物は無料・二郎系も・カウンター10席ほど',
    neighborhood: '浪速区恵美須東1-7-4、通天閣の近く。恵美須町駅から徒歩4分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。とんこつのスープ、チャーシュー。',
    notes: '[ラーメン・通天閣近く、自家製麺の家系] 通天閣から数分の10席ほどのシンプルな家系のカウンターで、ときどき行列も。ラーメン並 (900円) は飲みやすい濃厚なとんこつ醤油で、塩辛すぎないという人もしょっぱいという人も。ふつうよりやや細めの自家製麺に大きなチャーシュー。硬さ・濃さ・油を頼み、200円のご飯はおかわり自由、きゅうりの漬物は無料。気さくな店の人3人で手早い。営業は不定なので Instagram で確認を。現金のみ。',
  });
}

// ================================================================ 麺とかき氷 ドギャン 谷四店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27099850/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:30', '16:00'], ['18:00', '21:00']); const WE = day(['11:30', '20:00']);
  put({
    id: 'osaka_men_to_kakigori_dogyan_tanimachi', name: '麺とかき氷 ドギャン 谷四店 (Men to Kakigori Dogyan Taniyon ten)', category: 'OMNI',
    lat: 34.67893, lng: 135.516928, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; kara-age and fried toppings.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and scallop broths; chashu and horumon; cream in the corn ramen.',
    hours_raw: 'Mon, Thu, Fri 11:30–16:00 and 18:00–21:00; Sat, Sun and public holidays 11:30–20:00; closed Tue–Wed; temporary closures — check Instagram (Tabelog). Reservations via Instagram (September 2026). QR-code ordering; one dish per person (September 2026). Cards, e-money and PayPay accepted (Tabelog).',
    hours: { 0: A, 3: A, 4: A, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tanimachi 4-9-11, on the Tanimachi 5 crossing — 3 min south of Tanimachi 4-chome Stn exit 8',
    cuisine: 'Creative ramen and kakigori · seasonal chilled ramen, e.g. "Yozora no Mukou gawa" ¥1,200 (blue seafood broth, rare chashu, egg) and the Guilty Corn Ramen ¥1,650 (chilled corn cream on a salt-and-scallop base, black and white figs with cheese sauce, kara-age) · mazesoba with mayonnaise, chili oil and kombu vinegar to change it up; horumon mazesoba · kakigori heaped with seasonal fruit, e.g. peach, fig (with tea, lemon or black-sesame sauce), chestnut Mont Blanc squeezed at the table, acai; character designs · 18 seats',
    website: null, gmaps: gm('麺とかき氷 ドギャン 谷四店'), menu_url: null,
    notes: "[Ramen · creative ramen and fruit-heaped kakigori, Tanimachi] A playful shop at the Tanimachi 5 crossing, decorated with anime-film goods, that does two things: inventive ramen and lavish shaved ice. The ramen changes with the season, from a vivid blue chilled seafood ramen to a rich chilled corn-cream bowl topped with rare figs, plus mazesoba to tweak with mayonnaise, chili oil and kombu vinegar; diners split on the boldest pairings. Many reviews are for the kakigori: fruit heaped all the way around, figs, peaches, a chestnut Mont Blanc piped at the table. Order by QR, one dish each; reserve on Instagram. Closed Tuesdays and Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Ramen and kakigori shop (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Seasonal chilled ramen; fruit kakigori.',
      anecdotes: [
        { text: '"Unlike many places that only put peaches on one side or a third of the dessert, this one had peaches all around—360 degrees!" — July 2026, peach kakigori.', source: R + 'B510987531/' },
        { text: '"The base broth is made from salt and scallops, with a simple seasoning. On top of that, there\'s a rich corn soup made with corn and fresh cream." — September 2026, Guilty Corn Ramen ¥1,650.', source: R + 'B534614042/' },
      ],
      japanese_sources_summary: '食べログ: 麺とかき氷 ドギャン 谷四店、大阪市中央区谷町4-9-11、谷町四丁目駅8番出口から南へ3分、谷町5の交差点の角、月・木・金 11:30〜16:00・18:00〜21:00、土・日・祝 11:30〜20:00、火・水休み、臨時休業は Instagram で、カード・電子マネー・PayPay 可、18席。口コミ(2025年7月〜2026年10月): アニメ映画のグッズの飾られた店、季節の冷やしラーメン (青いスープの Yozora no Mukou gawa 1,200円、塩とホタテのベースにコーンと生クリームの冷やしコーンラーメン1,650円、白と黒のいちじくとチーズソース、唐揚げ)、マヨネーズ・ラー油・昆布酢で味を変えるまぜそば、ホルモンのまぜそば、季節の果物たっぷりのかき氷 (桃、いちじく、目の前で絞る栗のモンブラン、アサイー)、キャラクターのかき氷、QR で注文、ひとり1品、Instagram で予約、組み合わせの好みは分かれるという声。',
      confidence: 'medium', sources: [TB, R + 'B510987531/', R + 'B534614042/', R + 'B535553291/', R + 'B535993494/', R + 'B536461680/', R + 'B537372103/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'unknown', tare: ['shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles, well chilled in the cold bowls (September 2026).' },
      regional_style: [], sub_genre: ['ramen', 'mazesoba_aburasoba'],
      signature_bowl: 'Seasonal chilled ramen, e.g. Yozora no Mukou gawa ¥1,200 (September 2026).',
      chashu: 'Rare chashu; moist chashu on the corn ramen (September 2026).',
      notable_toppings: ['figs', 'corn', 'rare chashu', 'seasoned egg', 'horumon'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Seafood broth.' },
      pantheon: 'Tanimachi\'s seasonal chilled-ramen lab, with kakigori for dessert.',
      profile: { richness: 3, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B534614042/', '"I expected the soup to be thicker, but surprisingly, it was quite smooth, while still delivering a strong sweetness from the corn" — mid-scale.'],
        oiliness: [R + 'B536461680/', '"It was lighter than I expected" (mazesoba) — low.'],
        clarity: [R + 'B535553291/', 'A blue chilled seafood broth — mid-scale.'],
        tare_strength: [R + 'B534614042/', '"salt and scallops, with a simple seasoning" — mid-scale.'],
        noodle_firmness: [R + 'B535553291/', '"The well-chilled thin straight noodles" — mid-scale.'],
        aroma_punch: [R + 'B535553291/', '"The broth had a strong seafood flavor" — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B534614042/', R + 'B535553291/', R + 'B536461680/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; one dish per person; reserve on Instagram (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区谷町4-9-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区谷町四丁目9番11号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535553291/', R + 'B534614042/'],
    price_note: 'Prices from September 2026 reviews; kakigori prices not given.', last_checked: TODAY, items: [
      it('', '', 'Yozora no Mukou gawa (chilled seafood ramen)', '¥1,200', 'Ramen', 'no', 'no', 'September 2026.', 'yozora'),
      it('', '', 'Guilty Corn Ramen (chilled, with figs)', '¥1,650', 'Ramen', 'no', 'no', 'September 2026.', 'corn'),
      it('', '', 'Mazesoba', '', 'Mazesoba', 'no', 'no', 'September 2026.', 'maze'),
      it('', '', 'Seasonal fruit kakigori (e.g. fig, peach, chestnut)', '', 'Kakigori', 'ask', 'ask', '2025–2026.', 'kakigori'),
    ] }, {
    cuisine: '創作ラーメンとかき氷・季節の冷やしラーメン、たとえば Yozora no Mukou gawa 1,200円 (青い魚介のスープ、レアチャーシュー、玉子) や、塩とホタテのベースにコーンと生クリームの冷やしのコーンラーメン1,650円 (白と黒のいちじくにチーズソース、唐揚げ)・マヨネーズ、ラー油、昆布酢で味を変えるまぜそば、ホルモンのまぜそば・季節の果物たっぷりのかき氷: 桃、いちじく (紅茶・レモン・黒ごまのソース)、目の前で絞る栗のモンブラン、アサイー、キャラクターのデザインも・18席',
    neighborhood: '中央区谷町4-9-11、谷町5の交差点。谷町四丁目駅8番出口から南へ3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、唐揚げや揚げたトッピング。',
    vegan_detail: 'ヴィーガンではありません。魚介とホタテのスープ、チャーシューとホルモン、コーンラーメンに生クリーム。',
    notes: '[ラーメン・谷町、創作ラーメンと果物たっぷりのかき氷] 谷町5の交差点にある、アニメ映画のグッズで飾られた遊び心のある店で、得意はふたつ: 個性的なラーメンと豪華なかき氷。ラーメンは季節で変わり、あざやかな青い冷やしの魚介ラーメンから、めずらしいいちじくをのせた濃厚な冷やしのコーンラーメンまで、マヨネーズ・ラー油・昆布酢で味を変えるまぜそばも。大胆な組み合わせは好みが分かれる。口コミの多くはかき氷で、ぐるりと山盛りの果物、いちじく、桃、目の前で絞る栗のモンブラン。注文は QR、ひとり1品、予約は Instagram で。火・水曜休み。',
  });
}

// ================================================================ 麺工房 谷町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270204/27020343/'; const R = TB + 'dtlrvwlst/';
  const N = day(['19:00', '02:00']);
  put({
    id: 'osaka_men_kobo_tanimachi', name: '麺工房 谷町店 (Men Kobo Tanimachi ten)', category: 'OMNI',
    lat: 34.678175, lng: 135.5169, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza; soy-based dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat broth and chashu.',
    hours_raw: 'Mon–Sat 19:00–02:00; Sun lunch only (hours not listed); irregular closings (Tabelog). Lunch also served some days, e.g. shoyu ramen and half fried rice ¥900 (July 2026). Cash only (Tabelog). Run by one person (June 2026).',
    hours: { 0: N, 1: N, 2: N, 3: N, 4: N, 5: N }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Tanimachi 5-6-3 1F — 2–3 min from Tanimachi 6-chome Stn',
    cuisine: 'Neighborhood Chinese-style ramen, late · shoyu ramen, light with depth; miso ramen with a nostalgic taste · lunch set of shoyu ramen and half fried rice ¥900 · fried rice ¥650 with soup; pickled-ginger fried rice with spicy miso offered · gyoza; boiled and water dumplings · mapo tofu; stir-fried water spinach; kara-age; sobameshi · Sapporo Lager Akaboshi bottles · 22 seats',
    website: null, gmaps: gm('麺工房 谷町店'), menu_url: null,
    notes: "[Ramen · a one-person late-night ramen and Chinese shop, Tanimachi] A warm neighborhood ramen-and-Chinese counter near Tanimachi 6-chome, run single-handed and open until 2 am, with customers dropping in even at midnight. The shoyu ramen is light but deep, a good bowl after a night out; the miso ramen has a nostalgic, old-fashioned taste; the chashu is thick and tender. One diner insists you order the fried rice (¥650, with soup); try dipping it in the soup. There's also gyoza, mapo tofu, water spinach and sobameshi, with Sapporo Akaboshi beer. A cheerful greeting comes with every order. Cash only.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Ramen and Chinese shop run by one person (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Shoyu ramen; fried rice.',
      anecdotes: [
        { text: '"The Shoyu Ramen is light and easy to eat, even at night!… The Fried Rice is JPY 650 and comes with soup!" — September 2026.', source: R + 'B536965665/' },
        { text: '"シンプルながらコク深い味わいの醤油ラーメン。飲んだあとに沁みる一杯でした。" — June 2026, しょうゆラーメン.', source: R + 'B530177797/' },
      ],
      japanese_sources_summary: '食べログ: 麺工房 谷町店、大阪市中央区谷町5-6-3 1F、谷町六丁目駅から徒歩2〜3分、月〜土 19:00〜翌2:00、日は昼のみ、不定休、カード・電子マネー・QR不可、22席。口コミ(2026年5〜9月): ひとりで切り盛りする町の中華とラーメン、深夜も客がいる、しょうゆラーメン (シンプルながらコク深い味わい、飲んだあとに沁みる一杯)、昔なつかしい味の味噌ラーメン、厚くやわらかいチャーシュー、昼は醤油ラーメンと半チャーハンで900円、チャーハン650円 (スープつき)、辛味噌をすすめてくれる漬けしょうがのチャーハン、餃子、水餃子、mapo tofu、空芯菜、唐揚げ、sobameshi、瓶の Sapporo Lager Akaboshi、笑顔のあいさつ。',
      confidence: 'medium', sources: [TB, R + 'B528533751/', R + 'B530177797/', R + 'B530968546/', R + 'B532098273/', R + 'B536121331/', R + 'B536965665/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['shoyu', 'miso'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Noodles not described (2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Shoyu ramen (2026).',
      chashu: 'Relatively thick, tender chashu (July 2026).',
      notable_toppings: [],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat broth.' },
      pantheon: 'Tanimachi\'s one-person, open-till-2 shoyu ramen and fried rice.',
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B536965665/', '"The Shoyu Ramen is light and easy to eat, even at night" — low.'],
        oiliness: [R + 'B530968546/', '"It had a gentle flavor that you could truly savor" — low.'],
        clarity: [R + 'B530177797/', '"シンプルながらコク深い味わい" — mid-scale (no cloudiness stated).'],
        tare_strength: [R + 'B536121331/', '"Even though the flavors are rich, I didn\'t feel thirsty afterward" — mid-scale.'],
        noodle_firmness: [R + 'B532098273/', 'Noodles not described — mid-scale by default.'],
        aroma_punch: [R + 'B528533751/', '"a nostalgic taste" (miso ramen) — low.'],
      },
      confidence: 'low', sources: [R + 'B536965665/', R + 'B530177797/', R + 'B530968546/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'One-person counter; cheerful greeting (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区谷町5-6-3 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市中央区谷町五丁目6番3号 (go) 23m — Tabelog point kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532098273/', R + 'B536965665/'],
    price_note: 'Prices from July and September 2026 reviews.', last_checked: TODAY, items: [
      it('しょうゆラーメン', '', 'Shoyu ramen', '', 'Ramen', 'no', 'no', 'June–September 2026.', 'shoyu'),
      it('', '', 'Lunch: shoyu ramen and half fried rice', '¥900', 'Sets', 'no', 'no', 'July 2026.', 'lunch'),
      it('', '', 'Fried rice with soup', '¥650', 'Rice', 'ask', 'no', 'September 2026.', 'chahan'),
      it('', '', 'Miso ramen', '', 'Ramen', 'no', 'no', 'May–September 2026.', 'miso'),
    ] }, {
    cuisine: '夜遅くまでの町の中華風ラーメン・しょうゆラーメン (軽いのにコクがある)、昔なつかしい味噌ラーメン・昼は醤油ラーメンと半チャーハンのセット900円・スープつきのチャーハン650円、辛味噌をすすめてくれる漬けしょうがのチャーハン・餃子、水餃子・mapo tofu、空芯菜の炒め、唐揚げ、sobameshi・瓶の Sapporo Lager Akaboshi・22席',
    neighborhood: '中央区谷町5-6-3 1F。谷町六丁目駅から徒歩2〜3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、餃子、醤油の料理。',
    vegan_detail: 'ヴィーガンではありません。肉のスープとチャーシュー。',
    notes: '[ラーメン・谷町、ひとりで営む深夜のラーメンと中華] 谷町六丁目近くのあたたかい町のラーメンと中華の店で、ひとりで切り盛りし深夜2時まで、真夜中でも客が立ち寄る。しょうゆラーメンは軽いのにコクがあり、飲んだあとの一杯に。味噌ラーメンは昔なつかしい味、チャーシューは厚くやわらかい。チャーハン (650円、スープつき) は必ず頼むべきという声、スープにひたして食べるのもおすすめ。餃子、mapo tofu、空芯菜、sobameshiもあり、ビールは Sapporo Akaboshi。注文のたびに笑顔のあいさつ。現金のみ。',
  });
}

// ================================================================ CHIKAPPA 谷4店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27149397/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_chikappa_tanimachi4', name: 'CHIKAPPA 谷4店 (CHIKAPPA Tani 4 ten)', category: 'OMNI',
    lat: 34.682182, lng: 135.514615, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; kara-age; fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tonkotsu broth; chashu.',
    hours_raw: 'Daily 11:00–14:30 and 18:00–23:00 (Tabelog). Opened 14 May 2025 (Tabelog). Cards, PayPay and Rakuten Pay accepted (Tabelog). Family friendly (Tabelog).',
    hours: ALL(day(['11:00', '14:30'], ['18:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tokiwamachi 1-3-18, Tani 4 Bldg 1F — 241 m from Tanimachi 4-chome Stn',
    cuisine: 'Hakata tonkotsu ramen · white (shiro) tonkotsu; black tonkotsu with black garlic oil; RED · thin straight noodles, firmness from soft to barikata · wood ear, green onion, nori, thick tender chashu · free takana and beni shoga at the table · sets, e.g. ramen with half fried rice and two kara-age; fried rice',
    website: null, gmaps: gm('CHIKAPPA 谷4店'), menu_url: null,
    notes: "[Ramen · Hakata tonkotsu by Tanimachi 4-chome] A cheerful Hakata-style tonkotsu shop a short walk from Tanimachi 4-chome, open lunch and late evening every day since 2025. Order the white tonkotsu with thin straight noodles barikata (extra firm): the broth is rich but finishes clean, topped with wood ear, green onion, nori and thick, tender chashu. The black version adds a pungent black-garlic oil. Then load up from the free takana and pickled ginger on the counter. Sets add half fried rice and kara-age, though one diner found the ramen bland and the kara-age greasy. Cards and PayPay accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 14 May 2025 (Tabelog).', background: 'Hakata tonkotsu ramen shop (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Hakata tonkotsu ramen.',
      anecdotes: [
        { text: '"The tonkotsu broth was rich but not overly so, with a solid depth of flavor and umami. The aftertaste was surprisingly refreshing, and it paired perfectly with the barikata thin noodles." — September 2026.', source: R + 'B517135331/' },
        { text: '"My companion ordered the black tonkotsu ramen. The black garlic oil was prominent, and this is definitely something you should try." — August 2026.', source: R + 'B534109783/' },
      ],
      japanese_sources_summary: '食べログ: CHIKAPPA 谷4店、大阪市中央区常磐町1-3-18 谷4ビル 1F、谷町四丁目駅から241m、毎日11:00〜14:30・18:00〜23:00、2025年5月14日開店、カード・PayPay・楽天ペイ可、子ども連れ歓迎。口コミ(2025年10月〜2026年10月): 博多とんこつ、白とんこつ、黒マー油の黒とんこつ、RED、細いストレート麺 (やわめからバリカタまで)、きくらげ、ねぎ、海苔、厚くやわらかいチャーシュー、卓上の高菜と beni shoga は取り放題、半チャーハンと唐揚げ2個のセット、チャーハン、元気な接客、味が薄く唐揚げが油っぽいという声。',
      confidence: 'medium', sources: [TB, R + 'B517135331/', R + 'B534109783/', R + 'B534504669/', R + 'B534854763/', R + 'B535552680/', R + 'B536618927/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: ['black garlic oil'], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight Hakata noodles, firmness to order (soft to barikata) (2025–2026).' },
      regional_style: ['Hakata'], sub_genre: ['ramen'],
      signature_bowl: 'White (shiro) tonkotsu ramen, barikata (October 2026).',
      chashu: 'Thick, tender chashu (August 2026).',
      notable_toppings: ['wood ear', 'green onion', 'nori', 'takana', 'pickled ginger'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Tonkotsu broth.' },
      pantheon: 'Tanimachi 4-chome\'s Hakata tonkotsu, barikata, with free takana.',
      profile: { richness: 3, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B517135331/', '"The tonkotsu broth was rich but not overly so" — mid-scale.'],
        oiliness: [R + 'B534504669/', '"The rich flavor of the tonkotsu broth was well-balanced" — mid-scale.'],
        clarity: [R + 'B534109783/', 'A Hakata tonkotsu — placed low.'],
        tare_strength: [R + 'B534109783/', '"The broth was light yet had the rich flavor characteristic of Hakata tonkotsu" — mid-scale.'],
        noodle_firmness: [R + 'B536618927/', '"chewy Barikata noodles" — placed high.'],
        aroma_punch: [R + 'B534109783/', '"The black garlic oil was prominent" (black tonkotsu) — mid-scale overall.'],
      },
      confidence: 'medium', sources: [R + 'B517135331/', R + 'B534109783/', R + 'B536618927/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose noodle firmness; self-serve toppings (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区常磐町1-3-18 谷4ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI geocoded only to town level (83m), so the Tabelog point is kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534109783/', R + 'B534854763/'],
    price_note: 'No prices in the reviews; JPY 1,000–1,999 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'White tonkotsu ramen', '', 'Ramen', 'no', 'no', 'August–October 2026.', 'shiro'),
      it('', '', 'Black tonkotsu ramen (black garlic oil)', '', 'Ramen', 'no', 'no', 'August 2026.', 'kuro'),
      it('', '', 'Tonkotsu RED set with half fried rice and kara-age', '', 'Sets', 'no', 'no', 'August 2026.', 'red_set'),
    ] }, {
    cuisine: '博多とんこつラーメン・白とんこつ、黒マー油の黒とんこつ、RED・細いストレート麺、硬さはやわめからバリカタまで・きくらげ、ねぎ、海苔、厚くやわらかいチャーシュー・卓上の高菜と beni shoga は無料・半チャーハンと唐揚げ2個のセットなど、チャーハン',
    neighborhood: '中央区常磐町1-3-18 谷4ビル 1F。谷町四丁目駅から241m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、唐揚げ、チャーハン。',
    vegan_detail: 'ヴィーガンではありません。とんこつのスープ、チャーシュー。',
    notes: '[ラーメン・谷町四丁目、博多とんこつ] 谷町四丁目から少し歩いた、元気な博多とんこつの店で、2025年から毎日昼と夜遅くまで営業。白とんこつを細いストレート麺のバリカタで: スープは濃いのに後味すっきり、きくらげ、ねぎ、海苔、厚くやわらかいチャーシュー。黒は香ばしい黒マー油つき。カウンターの無料の高菜と beni shoga はたっぷりと。半チャーハンと唐揚げのセットもあるが、味が薄く唐揚げが油っぽいという声も。カード・PayPay 可。',
  });
}

save();
