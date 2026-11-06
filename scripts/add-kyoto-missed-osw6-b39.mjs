// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 39.
//   + CONTO (vegan ice cream and bomboloni stand, Karasuma Oike)
//   + HiTOHi (wood-fired all-day dining in a Meiji machiya, Higashiyama)
//   + じじばば木馬亭 Jijibaba Mokubatei (Western-style izakaya, venison and Napolitan, Karasuma Oike; sister of 酒肴屋 じじばば)
//   + 農家野菜 ふたご家 京都先斗町店 Nouka Yasai Futagoya Pontocho (obanzai and temari sushi over the Kamo River)
//   - skip 26003008 志津屋 京都駅店 (chain)
//   Same-name counts first, per brand or operator (2026-11-06): CONTO — one. HiTOHi — one (the restaurant of the Com-ion
//   building). じじばば木馬亭 — the official site calls it the fourth shop of the Jijibaba counter-bar group; data already has
//   酒肴屋 じじばば (kyoto_sakenoateya_jijibaba, osw6-32) — a local group, sister concept drafted. ふたご家 — Tabelog lists this
//   shop and 炭火酒場 ふたご家 京都西院; other Futagoya are unrelated — drafted. 志津屋 — Tabelog lists 14 or more Shizuya
//   bakeries across Kyoto (Kyoto Stn, Gion, Sanjo, Shijo Karasuma, Karasuma Oike, Keihan Sanjo, Honten, Nijo, Yamashina,
//   Shichijo, Demachiyanagi, Katsuragawa and more): a chain, skipped.
//   Taken on 2026-11-06: `next core 200` (lane) gave CONTO 26042890 and HiTOHi 26042650; `next notable 200` (lane) gave
//   じじばば木馬亭 26029798, 志津屋 26003008 (skip) and ふたご家 26032366. None is in data/kyoto.json: grep by name and address
//   (西横町174-1, 堀池町382-1, 西押小路町106, 橋下町133-1 エメラルド会館) found none.
//   Service charges per Tabelog's Japanese original: CONTO 「なし」 (Tabelog’s English wrongly says one may be added);
//   HiTOHi 「ディナーのみサービス料10％」; 木馬亭 「令和6年12月1日よりチャージ料440円（おつまみ付）あり」; ふたご家
//   「お通し代 400円※1月1日〜4日 550円（税込）※1月1日から4日（正月期間）別途、お正月サービス料としてお会計より＋10%頂戴致します」.
//   No halal claims; no owner deaths in the sources.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-39');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26003008', 'chain: Tabelog lists 14 or more Shizuya (志津屋 / SIZUYA) bakeries in Kyoto — Kyoto Stn, Kotchika Kyoto, Gion, Sanjo, Shijo Karasuma, Karasuma Oike, Keihan Sanjo, Honten, Keihan Gion-Shijo, JR Nijo, JR Yamashina, Shichijo, Eiden Demachiyanagi, AEON Mall Kyoto Katsuragawa (https://tabelog.com/en/rstLst/?sw=%E5%BF%97%E6%B4%A5%E5%B1%8B).');

// ================================================================ CONTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26042890/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:30', '19:00']);
  put({
    id: 'kyoto_conto_oike', name: 'CONTO', category: 'OMNI',
    lat: 35.011059, lng: 135.757191, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The waffles are homemade and gluten-free (August 2026) and the cone is made to an original rice-flour recipe (September 2026), but the bomboloni are fried dough and one ice cream has baked rice granola; no information on shared equipment.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some: the ice cream is vegan — caramel, kinako, hojicha and brown sugar, yuzu soy milk, carrot cake and other seasonal flavours (July–September 2026 reviews). Ask about the bomboloni.',
    hours_raw: '7:30–19:00 daily, sometimes to 21:00 (Tabelog). Bomboloni from 10:30 (August 2026). No reservations (Tabelog). Cards (JCB), Suica-type e-money and PayPay (Tabelog). No service charge (Tabelog, Japanese text: 「なし」; Tabelog’s English wrongly says one may be added). Tiny: standing room for 2–3 and a bench outside shared with the queue (Tabelog; June 2026). Non-smoking (Tabelog). On Oike west of Koromonotana; 225 m from Karasuma Oike Stn (Tabelog). Opened 10 April 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Oike Koromonotana — 225 m from Karasuma Oike Stn',
    cuisine: 'Vegan ice cream in unusual flavours — salted-koji caramel coffee, ripe plum, kinako with cacao nibs, hojicha and brown sugar, salted-koji vanilla with baked rice granola, carrot cake, grapefruit and cucumber, yuzu soy milk, pumpkin (2026 reviews) · large single ¥650, three scoops ¥1,100 (July–August 2026) · bomboloni, Tunisian-style doughnuts fried to order — sugar, coconut sugar, limited flavours; mini bombolone ¥330 (July–August 2026) · homemade gluten-free waffles (August 2026); rice-flour cones (September 2026) · coffee (August 2026)',
    website: null, gmaps: gm('CONTO 烏丸御池 bomboloni'), menu_url: TB,
    notes: '[Ice cream and doughnuts · Karasuma Oike, a tiny vegan scoop shop] A stand-up shop on Oike run by two women, scooping vegan ice cream in flavours like salted-koji caramel coffee, kinako with cacao nibs and grapefruit with cucumber (from ¥650), in a rice-flour cone or with gluten-free waffles, plus bomboloni fried to order from 10:30. Open from 7:30; eat on the bench outside.',
    chef_bio: { chef_name: null, roles: ['Run by two women (September 2026)'], origin: null,
      background: 'Per Tabelog: a doughnut shop opened 10 April 2025. Reviews describe vegan ice cream, Tunisian bomboloni, homemade gluten-free waffles and rice-flour cones.',
      philosophy: null, specialty: 'Vegan ice cream; bomboloni.',
      anecdotes: [
        { text: 'An August 2026 visitor said one would never guess the kinako ice cream was vegan, and paired it with the gluten-free waffle.', source: R + 'B534221762/' },
        { text: 'A July 2026 visitor called the carrot-cake ice cream genius-level, in a three-scoop cup for ¥1,100.', source: R + 'B532236356/' },
        { text: 'A September 2026 visitor saw couples and overseas visitors arriving in search of vegan options.', source: R + 'B536234067/' },
      ],
      japanese_sources_summary: '食べログ: ドーナツ、中京区御池通衣棚西入西横町174-1 1F、烏丸御池駅から225m、7:30〜19:00 (21:00まで延長あり)、予約不可、カード (JCB)・交通系電子マネー・PayPay 可、チャージなし、立ち席2〜3名と外のベンチ、禁煙、2025年4月10日オープン。口コミ (2025年12月〜2026年9月、英語): ヴィーガンのアイス (塩麹キャラメルコーヒー、完熟梅、きな粉とカカオニブ、ほうじ茶と黒糖、塩麹バニラと焼き米グラノーラ、キャロットケーキ、グレープフルーツと胡瓜、柚子豆乳、かぼちゃ)、シングル大650円、3種1,100円、ボンボローニ (10時半から、ミニ330円)、自家製のグルテンフリーのワッフル、米粉のコーン、女性二人で営む。',
      confidence: 'medium', sources: [TB, R + 'B510806353/', R + 'B518734292/', R + 'B530702453/', R + 'B531310541/', R + 'B531573013/', R + 'B531697048/', R + 'B532236356/', R + 'B534221762/', R + 'B534691702/', R + 'B535961502/', R + 'B536234067/', R + 'B538023839/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point and order at the counter; many overseas visitors come for the vegan ice cream (September 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御池通衣棚西入西横町174-1 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.011059, 135.757191); cross-checked: GSI 京都府京都市中京区西横町174番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535961502/', R + 'B532236356/', R + 'B530702453/'],
    price_note: 'Prices from June–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Vegan ice cream, large single', '¥650', 'Ice cream', 'ask', 'vegan', 'August 2026.', 'ice_single'),
      it('', '', 'Vegan ice cream, three scoops', '¥1,100', 'Ice cream', 'ask', 'vegan', 'July 2026.', 'ice_triple'),
      it('', '', 'Mini bombolone', '¥330', 'Doughnuts', 'no', 'ask', 'August 2026.', 'mini_bombolone'),
      it('', '', 'Gluten-free waffle', '', 'Sweets', 'ask', 'ask', 'Homemade (August 2026).', 'gf_waffle'),
    ] }, {
    cuisine: '珍しい組み合わせのヴィーガンのアイス: 塩麹キャラメルコーヒー、完熟梅、きな粉とカカオニブ、ほうじ茶と黒糖、焼き米グラノーラの塩麹バニラ、キャロットケーキ、グレープフルーツと胡瓜、柚子豆乳、かぼちゃ (2026年の口コミ)・シングル大650円、3種1,100円 (2026年7月〜8月)・注文後に揚げるチュニジアのドーナツ、ボンボローニ (砂糖、ココナッツシュガー、限定の味)、ミニ330円 (2026年7月〜8月)・自家製のグルテンフリーのワッフル (2026年8月)、米粉のコーン (2026年9月)・コーヒー (2026年8月)',
    neighborhood: '御池衣棚。烏丸御池駅から225m',
    gf_detail: '要確認。ワッフルは自家製のグルテンフリー (2026年8月)、コーンは独自の米粉のレシピ (2026年9月)。ただしボンボローニは小麦の揚げ生地で、焼き米グラノーラ入りのアイスもある。器具の共用の情報はない。',
    vegan_detail: '一部あり。アイスはヴィーガン (キャラメル、きな粉、ほうじ茶と黒糖、柚子豆乳、キャロットケーキなど季節の味) (2026年7月〜9月の口コミ)。ボンボローニは要確認。',
    notes: '[アイスとドーナツ・烏丸御池、小さなヴィーガンのアイスの店] 御池通の、立って食べる小さな店。女性二人が、塩麹キャラメルコーヒー、きな粉とカカオニブ、グレープフルーツと胡瓜などのヴィーガンのアイス (650円から) を米粉のコーンやグルテンフリーのワッフルで出し、10時半からは揚げたてのボンボローニも。朝7時半から、外のベンチで。',
  });
}

// ================================================================ HiTOHi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042650/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:30', '18:00']); const S = day(['11:30', '15:00']);
  put({
    id: 'kyoto_hitohi_higashiyama', name: 'HiTOHi', category: 'OMNI',
    lat: 35.010256, lng: 135.781482, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wood-fired plates with homemade bread and focaccia, pasta at lunch (2025–26 reviews); the shop asks for allergies to be told in advance (Tabelog).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Seasonal vegetables, hummus and soups, but breakfast is bacon, eggs and cheese and mains include fish and pork (2025–26 reviews).',
    hours_raw: 'Wed–Sat and holidays 11:30–18:00 (last order 17:00); Sun 11:30–15:00 (last order 14:30); closed Monday and Tuesday; dinner in two sittings at 18:00 and 19:30 (Tabelog). Breakfast is also served (November 2025, April 2026) — check times when booking. Reservations recommended for breakfast and lunch, same-day seating possible; tables may be shared; more than 30 minutes late without word counts as a cancellation (Tabelog). One drink per person (October 2025, April 2026). Service charge 10% at dinner only (Tabelog, Japanese text: 「ディナーのみサービス料10％」). Cards (incl. UnionPay) and QR, no e-money (Tabelog). 30 seats; non-smoking (Tabelog). In a residential street, 5 min from Higashiyama Stn (Tabelog). Opened 26 March 2025 (Tabelog).',
    hours: { 2: A, 3: A, 4: A, 5: A, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama Sanjo, a residential lane — 5 min from Higashiyama Stn',
    cuisine: 'All-day dining over an open wood fire in a 120-year-old machiya: oven-baked breakfast plates, seasonal Kyoto à la carte at lunch, and an eight-course omakase at dinner (Tabelog, shop text) · breakfast set ¥2,800 — homemade bacon, eggs, sausage, seasonal vegetables, cheese, pumpkin soup and homemade focaccia (November 2025–April 2026) · lunch short course: choice of salad, starter and main, with soup, bread and dessert; pork main +¥1,000; up to about ¥8,900 with every option (October 2025; January 2026) · sea bass tartare, pasta (October 2025); hummus, potato bread, whole grilled fish from ¥3,900 (April 2026) · a wide drinks list explained by staff (October 2025)',
    website: 'https://com-ion.jp/', gmaps: gm('HiTOHi 京都 東山'), menu_url: TB + 'dtlmenu/',
    notes: '[Wood-fired dining · Higashiyama, a Meiji machiya from breakfast to dinner] A restaurant in a 120-year-old townhouse a short walk from the Okazaki museums, cooking everything over a wood fire: a ¥2,800 breakfast of homemade bacon, eggs and focaccia, choose-your-own lunch courses, and an eight-course dinner. Lovely room and staff; some found lunch pricey for what it was, with one drink each required. Closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog (shop text): an all-day restaurant in a 120-year-old machiya, with oven-baked breakfast plates, seasonal Kyoto à la carte cooked over an open fire at lunch, and an eight-course omakase at dinner; opened 26 March 2025. Tabelog links it to Com-ion, a building that describes itself as a place for people to eat, shop, rest and gather (official site).',
      philosophy: 'The seasons of Kyoto cooked over an open fire (Tabelog, shop text).', specialty: 'Wood-fired breakfast plate.',
      anecdotes: [
        { text: 'A December 2025 breakfast guest found the bacon crisp and light thanks to the wood fire, though the pumpkin soup arrived cool, and noticed the staff sweating in short sleeves by the fire.', source: R + 'B519783132/' },
        { text: 'An April 2026 diner in the food trade found the one-drink rule, a hummus served without bread, and fish from ¥3,900 explained in a single line too many issues.', source: R + 'B525441352/' },
        { text: 'A June 2026 group came on from the Kyocera Museum and shared dishes under the original Meiji-era beams.', source: R + 'B530906300/' },
      ],
      japanese_sources_summary: '食べログ: レストラン、東山区堀池町382-1、東山駅から徒歩約5分、水〜土・祝11:30〜18:00 (L.O. 17:00)、日11:30〜15:00 (L.O. 14:30)、月火休み、夜は18:00と19:30の2部制、朝と昼は予約優先、相席の場合あり、ディナーのみサービス料10%、カード・QR 可、30席、禁煙、2025年3月26日オープン。店の紹介 (英訳): 築120年の町家、朝は窯焼きのプレート、昼は直火の京都の旬のアラカルト、夜は8品のおまかせ。口コミ (2025年10月〜2026年6月、英語): 朝食2,800円 (自家製ベーコン、卵、ソーセージ、季節の野菜、チーズ、かぼちゃのスープ、自家製フォカッチャ)、選べる昼のコース (最大約8,900円)、鱸のタルタル、フムス、焼き魚3,900円から、1ドリンク制、昼は高めとの声。',
      confidence: 'medium', sources: [TB, 'https://com-ion.jp/', R + 'B515023356/', R + 'B515507744/', R + 'B518007353/', R + 'B518613387/', R + 'B519783132/', R + 'B520569352/', R + 'B520900716/', R + 'B525441352/', R + 'B526357742/', R + 'B529263661/', R + 'B530906300/', R + 'B534013106/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book for breakfast or lunch; tables may be shared; one drink each. Staff explain the drinks (October 2025). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区堀池町382-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.010256, 135.781482); cross-checked: GSI 京都府京都市東山区堀池町382番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526357742/', R + 'B520900716/', R + 'B520569352/', R + 'B525441352/'],
    price_note: 'Prices from November 2025–April 2026 reviews; 10% service at dinner (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'HiTOHi breakfast set', '¥2,800', 'Breakfast', 'no', 'no', 'Homemade bacon, eggs, focaccia (November 2025; April 2026).', 'breakfast'),
      it('', '', 'Lunch prix-fixe course (all options)', '¥8,900', 'Lunch', 'ask', 'ask', 'About ¥8,900 with every option (January 2026).', 'lunch_course'),
      it('', '', 'Whole grilled fish', 'from ¥3,900', 'Lunch', 'ask', 'no', 'April 2026.', 'grilled_fish'),
      it('', '', 'Eight-course dinner omakase', '', 'Dinner', 'ask', 'ask', 'Tabelog shop text; 10% service.', 'dinner_omakase'),
    ] }, {
    cuisine: '築120年の町家で直火の薪を使う終日営業の店: 朝は窯焼きのプレート、昼は京都の旬のアラカルト、夜は8品のおまかせ (食べログの店の紹介)・朝食セット2,800円: 自家製ベーコン、卵、ソーセージ、季節の野菜、チーズ、かぼちゃのスープ、自家製フォカッチャ (2025年11月〜2026年4月)・昼のショートコース: サラダ、前菜、メインを選び、スープ、パン、デザート付き。豚のメインは1,000円増し、全部選ぶと約8,900円 (2025年10月、2026年1月)・鱸のタルタル、パスタ (2025年10月)、フムス、じゃがいものパン、3,900円からの魚の丸焼き (2026年4月)・店員が説明してくれる豊富な飲み物 (2025年10月)',
    neighborhood: '東山三条、住宅街の路地。東山駅から徒歩5分',
    gf_detail: '要確認。自家製パンやフォカッチャ、昼はパスタもある薪焼きの皿 (2025〜2026年の口コミ)。アレルギーは事前に伝えるよう店が案内 (食べログ)。',
    vegan_detail: '要確認。季節の野菜、フムス、スープもあるが、朝食はベーコン、卵、チーズで、メインは魚や豚 (2025〜2026年の口コミ)。',
    notes: '[薪火の料理・東山、明治の町家で朝から夜まで] 岡崎の美術館から歩ける築120年の町家。すべて薪の直火で、朝は自家製ベーコン、卵、フォカッチャの2,800円の朝食、昼は選べるコース、夜は8品のおまかせ。建物と店員は好評だが、昼の値段の割にという声や1人1ドリンク制への不満も。月火休み。',
  });
}

// ================================================================ じじばば木馬亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029798/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://www.jijibaba-kyoto.com/';
  const H = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_jijibaba_mokubatei', name: 'じじばば木馬亭 (Jijibaba Mokubatei)', category: 'OMNI',
    lat: 35.01238, lng: 135.760162, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a menu: Napolitan spaghetti, dry curry and other noodle and rice sets at lunch (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: venison and other game, bacon-topped Napolitan with cream and cheese, mapo tofu (official site; 2026 reviews).',
    hours_raw: 'Mon–Sat and days before and after holidays: lunch 11:30–14:00 (last order 13:30), dinner 17:00–22:00 (last order food 21:00, drinks 21:30); closed Sunday and holidays (Tabelog). Lunch serves only noodle and rice sets (July 2026). Reservations accepted; please order drinks too; 2-hour limit when busy (Tabelog). Charge ¥440 per person with a snack since 1 December 2024 (Tabelog, Japanese text: 「令和6年12月1日よりチャージ料440円（おつまみ付）あり」). Cards, e-money and QR incl. Alipay (Tabelog). 42 seats: 12 at the counter, tables for up to 30; private hire possible (Tabelog; official site). Non-smoking (Tabelog). On a corner 1 min north of Karasuma Oike Stn exit 1 (Tabelog). Opened 10 October 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma Oike — 1 min from Karasuma Oike Stn',
    cuisine: 'A Western-style izakaya and bar with dishes beyond genre: venison sent direct from Tanba-Sasayama and other game, mapo tofu, Napolitan, carpaccio, using vegetables from the owner’s home area (official site) · half portions for solo diners (official site) · lunch: Napolitan with cream, cheese and chunky bacon — large 600 g with salad ¥1,250, extra cheese ¥80 (September–October 2026); dry curry (June 2026) · dinner: Western courses with all-you-can-drink for 90 minutes, +30 minutes for ¥500 (June and September 2026) · craft beers on tap (May 2026)',
    website: OF, gmaps: gm('じじばば 木馬亭 烏丸御池'), menu_url: OF,
    notes: '[Western-style izakaya · Karasuma Oike, venison and a 600 g Napolitan] The fourth shop of Kyoto’s Jijibaba counter bars: a bistro-izakaya by Karasuma Oike Stn with a wooden horse in the middle, serving Tanba-Sasayama venison, mapo tofu and carpaccio at night, and a famous bacon-and-cheese Napolitan at lunch (¥1,250 for 600 g with salad). Half portions for solo diners; ¥440 charge. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who sources vegetables from home (official site)'], origin: null,
      background: 'Per the official site: じじばば 木馬亭 is the fourth shop of a counter-bar group long loved in Kyoto, a bar-like Western izakaya near Karasuma Oike Stn using venison sent direct from Tanba-Sasayama and seasonal vegetables from the owner’s home area. Data has the group’s 酒肴屋 じじばば in the Rido alley (kyoto_sakenoateya_jijibaba). Opened 10 October 2017 (Tabelog).',
      philosophy: 'Good food regardless of genre, to go with sake, wine and beer (official site).', specialty: 'Venison dishes; Napolitan.',
      anecdotes: [
        { text: 'A May 2026 group noticed the wooden horse at the centre of the tables and winning betting tickets on display, and guessed the owner is a racing fan.', source: R + 'B528855896/' },
        { text: 'A June 2026 group of five was offered 30 more minutes of all-you-can-drink for ¥500.', source: R + 'B529814238/' },
        { text: 'A July 2026 lunch visitor came for the venison but found only noodle and rice sets at lunchtime.', source: R + 'B533350685/' },
      ],
      japanese_sources_summary: '公式サイト: じじばば 木馬亭 (じじばば もくばてい)、京都で名店として長年愛されるカウンター酒場の4店舗目、烏丸御池のおしゃれな洋風居酒屋、丹波篠山直送の鹿肉、店主の地元の旬の野菜、ジビエ、麻婆豆腐、ナポリタン、カルパッチョ、一人には料理をハーフサイズで、飲み放題付きコース、貸切可。食べログ: ダイニングバー・ビストロ・ワインバー、中京区西押小路町106 1F、烏丸御池駅1番出口から徒歩1分、月〜土 昼11:30〜14:00・夜17:00〜22:00、日祝休み、チャージ440円 (おつまみ付き、2024年12月から)、42席、禁煙、2017年10月10日オープン。口コミ (2025年3月〜2026年10月、英語): ナポリタン大盛600gとサラダ1,250円、チーズ追加80円、ドライカレー、昼は麺とご飯のセットのみ、飲み放題90分 (30分延長500円)、木馬と馬券、クラフトビール。',
      confidence: 'medium', sources: [TB, OF, R + 'B504129105/', R + 'B516687436/', R + 'B527922267/', R + 'B528534041/', R + 'B528855896/', R + 'B529814238/', R + 'B531167743/', R + 'B531910777/', R + 'B533350685/', R + 'B534620704/', R + 'B536812687/', R + 'B538220901/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter for solo diners with half portions, tables for groups; order a drink too; ¥440 charge. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西押小路町106 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012380, 135.760162); cross-checked: GSI 京都府京都市中京区西押小路町106番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536812687/', R + 'B529814238/'],
    price_note: 'Prices from June and September 2026 reviews; ¥440 charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Napolitan, large (600 g) with salad', '¥1,250', 'Lunch', 'no', 'no', 'September 2026.', 'napolitan_large'),
      it('', '', 'Extra cheese', '¥80', 'Lunch', '', 'no', 'September 2026.', 'extra_cheese'),
      it('', '', 'Dry curry', '', 'Lunch', 'ask', 'no', 'June 2026.', 'dry_curry'),
      it('', '', 'All-you-can-drink extension (30 min)', '¥500', 'Courses', '', '', 'June 2026.', 'nomihodai_ext'),
      it('', '', 'Charge with snack', '¥440', 'Charge', '', '', 'Tabelog, since December 2024.', 'charge'),
    ] }, {
    cuisine: 'ジャンルにとらわれない料理の洋風居酒屋・バル: 丹波篠山直送の鹿肉などのジビエ、麻婆豆腐、ナポリタン、カルパッチョ、店主の地元の旬の野菜 (公式サイト)・一人には料理をハーフサイズで (公式サイト)・昼: 生クリームとチーズと厚切りベーコンのナポリタン、大盛600gとサラダで1,250円、チーズ追加80円 (2026年9月〜10月)、ドライカレー (2026年6月)・夜: 90分飲み放題付きの洋食のコース、30分延長500円 (2026年6月・9月)・クラフトビール (2026年5月)',
    neighborhood: '烏丸御池。烏丸御池駅から徒歩1分',
    gf_detail: 'グルテンフリーではない。昼はナポリタン、ドライカレーなど麺とご飯のセット (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鹿肉などのジビエ、ベーコンと生クリームとチーズのナポリタン、麻婆豆腐 (公式サイト、2026年の口コミ)。',
    notes: '[洋風居酒屋・烏丸御池、鹿肉と600gのナポリタン] 京都のカウンター酒場じじばばの4店舗目。烏丸御池駅すぐ、真ん中に木馬のある洋風居酒屋。夜は丹波篠山の鹿肉、麻婆豆腐、カルパッチョ、昼はベーコンとチーズのナポリタンが名物 (大盛600gとサラダで1,250円)。一人にはハーフサイズも。チャージ440円。日曜休み。',
  });
}

// ================================================================ 農家野菜 ふたご家 京都先斗町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26032366/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_futagoya_pontocho', name: '農家野菜 ふたご家 京都先斗町店 (Nouka Yasai Futagoya Pontocho)', category: 'OMNI',
    lat: 35.007821, lng: 135.771222, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai, temari sushi and fried dishes such as chicken nanban (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: vegetable-led, but obanzai sets come with bonito rice and miso soup, and temari sushi and chicken nanban are fish and meat (2026 reviews).',
    hours_raw: 'Lunch 11:00–15:00 (last order 14:00), dinner 17:00–23:00 (last order food 22:00, drinks 22:30); closed irregularly (Tabelog). Reservations accepted; seat requests cannot be guaranteed; time limits 1.5 h at lunch and 2 h at dinner (Tabelog). Appetizer ¥400 (¥550 on 1–4 January, plus a 10% New Year service charge) (Tabelog, Japanese text: 「お通し代 400円※1月1日〜4日 550円（税込）※1月1日から4日（正月期間）別途、お正月サービス料としてお会計より＋10%頂戴致します」). Cards and PayPay, no e-money (Tabelog). 62 seats: 10 at the counter, a table for 4, a 30-seat tatami room and a 30-seat semi-private sunken-kotatsu room; window seats over the Kamo River (Tabelog; October 2026). Non-smoking (Tabelog). 2nd floor of エメラルド会館 on Pontocho south of Sanjo; 3 min from Sanjo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho south of Sanjo — 3 min from Sanjo Stn',
    cuisine: 'Farm vegetables at the centre of Kyoto-style dishes (Tabelog; October 2026) · lunch: temari sushi gozen with vegetable and nama-fu toppings, and a five-obanzai gozen with bonito rice, each with refillable salad (October–November 2026); a yuba rice bowl (October 2026) · sakura chicken nanban with plum tartar (October 2026); braised beef tendon (October 2026) · dinner courses such as ¥7,000 with seasonal vegetable salad and five Kyoto pickles (October 2026) · a lunch-only 120-minute all-you-can-drink plan ¥4,200 (October 2026)',
    website: 'https://futagoya.owst.jp/', gmaps: gm('農家野菜 ふたご家 先斗町'), menu_url: TB + 'dtlmenu/',
    notes: '[Vegetable obanzai · Pontocho, river views from the second floor] A vegetable-focused izakaya above Pontocho with windows on the Kamo River: obanzai and temari sushi sets at lunch with refillable salad, braised beef tendon and courses (from ¥7,000) at night. Popular and busy; one October 2026 diner waited 30 minutes for lukewarm food. Ask for a window seat. ¥400 appetizer charge.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a vegetable-focused izakaya on the 2nd floor of エメラルド会館 in Pontocho; Tabelog also lists a sister shop, 炭火酒場 ふたご家 京都西院.',
      philosophy: null, specialty: 'Obanzai gozen; temari sushi.',
      anecdotes: [
        { text: 'An October 2026 diner booked a semi-private room, asked to move to a table with a view, and was kindly given one.', source: R + 'B538339394/' },
        { text: 'An October 2026 diner waited over 30 minutes for a pre-ordered lunch and found the miso soup lukewarm and the temari sushi thin on fish.', source: R + 'B537618332/' },
        { text: 'An October 2026 visitor with a baby appreciated the tatami seating.', source: R + 'B537883444/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理、中京区先斗町通三条下ル橋下町133-1 エメラルド会館 2F、三条駅から徒歩3分、昼11:00〜15:00 (L.O. 14:00)、夜17:00〜23:00、不定休、予約可、席の指定不可、昼1.5時間・夜2時間制、お通し400円 (1月1日〜4日は550円、別途正月のサービス料10%)、カード・PayPay 可、62席 (カウンター10、テーブル4、座敷30、半個室の掘りごたつ30)、禁煙。口コミ (2026年10月〜11月、英語): 野菜中心の料理、手まり寿司御膳、おばんざい5種の御膳 (かつおご飯)、おかわり自由のサラダ、桜鶏の南蛮と梅のタルタル、湯葉丼、牛すじ煮込み、7,000円のコース、昼の120分飲み放題4,200円、鴨川を望む窓、料理が遅くぬるかったとの声。',
      confidence: 'medium', sources: [TB, 'https://futagoya.owst.jp/', R + 'B536715007/', R + 'B536745199/', R + 'B536904817/', R + 'B536976517/', R + 'B537378637/', R + 'B537618332/', R + 'B537883444/', R + 'B538068364/', R + 'B538080419/', R + 'B538339394/', R + 'B538654127/', R + 'B538720125/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; set meals at lunch; ask for a river-view seat. Many overseas guests (October 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通三条下ル橋下町133-1 エメラルド会館 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.007821, 135.771222); cross-checked: GSI 京都府京都市中京区橋下町133番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536904817/', R + 'B536715007/'],
    price_note: 'Prices from October 2026 reviews; ¥400 appetizer (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Course (dinner)', '¥7,000', 'Courses', 'ask', 'no', 'October 2026.', 'course_7000'),
      it('', '', 'Lunch all-you-can-drink plan (120 min)', '¥4,200', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_nomihodai'),
      it('', '', 'Temari sushi gozen', '', 'Lunch', 'ask', 'no', 'With refillable salad (October 2026).', 'temari_gozen'),
      it('', '', 'Five-obanzai gozen with bonito rice', '', 'Lunch', 'ask', 'no', 'October 2026.', 'obanzai_gozen'),
      it('', '', 'Appetizer charge', '¥400', 'Charge', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '農家の野菜を中心にした京風の料理 (食べログ、2026年10月)・昼: 野菜や生麩ものる手まり寿司御膳、かつおご飯のおばんざい5種の御膳、どちらもおかわり自由のサラダ付き (2026年10月〜11月)、湯葉丼 (2026年10月)・桜鶏の南蛮と梅のタルタル (2026年10月)、牛すじの煮込み (2026年10月)・夜のコースは季節の野菜のサラダと京漬物5種の入る7,000円など (2026年10月)・昼限定の120分飲み放題4,200円 (2026年10月)',
    neighborhood: '先斗町、三条の南。三条駅から徒歩3分',
    gf_detail: '要確認。おばんざい、手まり寿司、鶏の南蛮などの揚げ物 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。野菜中心だが、おばんざいの御膳はかつおご飯と味噌汁付きで、手まり寿司や鶏の南蛮もある (2026年の口コミ)。',
    notes: '[野菜のおばんざい・先斗町、2階から鴨川を望む] 鴨川を見下ろす窓のある先斗町の野菜中心の居酒屋。昼はおかわり自由のサラダ付きのおばんざいや手まり寿司の御膳、夜は牛すじ煮込みやコース (7,000円から)。人気で混み、2026年10月には30分待ってぬるい料理だったという声も。窓側の席は頼んでみて。お通し400円。',
  });
}

save();
