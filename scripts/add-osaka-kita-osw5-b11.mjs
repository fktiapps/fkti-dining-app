// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 11.
//   + ビランチャ 梅田店 Bilancia (Italian with a bread-buffet lunch and an all-you-can-eat dinner, NU Chayamachi 8F, renewed August 2026)
//   + 北新地 つきしろ Kitashinchi Tsukishiro (wagyu meat kaiseki at night, ¥1,500 sukiyaki lunch, since 2021)
//   + 備長炭と宮崎鶏専門 TORA鶏YA (Miyazaki-chicken yakitori by Ohatsu Tenjin, since 2020)
//   + 恒雅 Tsunemasa (Kitashinchi Japanese izakaya of Awaji fish and natural-yam hotpot, open to 4:00, since 2013)
//   - skipped 焼肉 どんどん 東通り店 27006340: chain (operator site genki-factory.com: 32 shops in Kansai and 4 overseas, read 2026-11-02).
//   Chain check: Bilancia: invoice T3120001203504 → 株式会社コズミックダイナー, Nozaki-cho (NTA register); no other Bilancia found in the
//   sources opened. Tsukishiro: one shop. TORA鶏YA: invoice T2120001214766 → 株式会社ファイブディアライフ, the same operator as 梅田かに食堂
//   (osaka_umeda_kani_shokudo); the listing mentions related shops; a small group. Tsunemasa: two named sister shops in Kitashinchi (Tabelog).
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27006340', 'chain: 焼肉 どんどん, Genki Factory (genki-factory.com: 32 shops in Kansai, 4 overseas)');

// ================================================================ ビランチャ 梅田店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27003428/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '15:00'], ['17:00', '22:00']); const F = day(['17:00', '23:00']);
  put({
    id: 'osaka_bilancia_umeda_nu_chayamachi', name: 'ビランチャ 梅田店 (Bilancia Umeda)', category: 'OMNI',
    lat: 34.707024, lng: 135.499057, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the lunch is built around an all-you-can-eat bread buffet and the dinner buffet around pizza and pasta; grilled chicken, pork, sea bream and steak mains exist, but nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog\'s feature list ticks "vegetarian options", but no vegetarian or vegan dish is named; the breads, pastas and buffet dishes are not described.',
    hours_raw: 'Mon–Thu, Sundays and holidays 11:00–15:00 (last order 14:00) and 17:00–22:00 (last order 21:00); Fri, Sat and the day before a holiday 17:00–23:00 (last order 22:00); follows NU Chayamachi\'s hours (Tabelog). Lunch tables 90 minutes when busy; dinner buffet two hours, last order 30 minutes before the end; no split bills (Tabelog). Reservations accepted; same-day bookings may not be possible (Tabelog). Ordering by smartphone (September 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and other e-money, PayPay, d Barai, Alipay and WeChat Pay (Tabelog). 115 seats, 60 of them on a terrace used in fine weather; a private room for 5–8; non-smoking (Tabelog). Renewed 10 August 2026 (Tabelog; September 2026).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Chayamachi 10-12, 8F of NU茶屋町 — next to the Chayamachi exit of Hankyu Osaka-Umeda Stn',
    cuisine: 'Italian with an all-you-can-eat bread lunch and an all-you-can-eat dinner since the August 2026 renewal (Tabelog) · lunch from ¥1,800: a main (pasta such as mentaiko cream or burdock and bacon arrabbiata, grilled chicken, pan-seared sea bream, beef steak) with a starter, plus a buffet of breads from well-known bakeries, soup and a drink bar; about ten breads, e.g. sweet-potato croissant, corn bread, chocolate croissant, squid-ink mentaiko baguette, French toast, with toasters to warm them (September–October 2026); weekday and weekend prices differ (September 2026) · dinner: two hours of 45 dishes, pizza from a wood-fired oven, pasta, ajillo, prosciutto, caprese, seafood marinade, pâté de campagne, fried chicken, with a platter of bakery breads and roast chicken ¥3,500 or chicken and pork ¥4,000; drinks +¥1,000, premium wine +¥1,500, craft beer +¥1,800 (Tabelog, tax included; September 2026)',
    website: null, gmaps: gm('ビランチャ 梅田 NU茶屋町'), menu_url: null,
    notes: "[Italian · Chayamachi, an all-you-can-eat bread lunch] A large Italian restaurant on the eighth floor of NU Chayamachi, with a fine-weather terrace, that turned in August 2026 to all-you-can-eat. At lunch you choose a main (pasta, chicken, sea bream or steak) and help yourself to a buffet of breads from bakeries around Japan, soup and a drink bar for about ¥1,800; diners in 2026 went back for the sweet-potato croissant, corn bread and a squid-ink mentaiko baguette, warmed in the toasters. At night ¥3,500 buys two hours of 45 dishes, pizza from the wood-fired oven, pasta, prosciutto and caprese, with drinks extra. One September 2026 diner found the breads dry and the pasta choice narrow; others praise the value. No split bills.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: an all-you-can-eat bread lunch "featuring famous breads from popular bakeries across the country", authentic Italian all-you-can-eat dinners from ¥3,500, homemade-dough wood-fired pizza, renewed 10 August 2026. The Tabelog invoice number T3120001203504 is registered to 株式会社コズミックダイナー, Nozaki-cho (NTA invoice register, read 2026-11-02).', philosophy: null, specialty: 'Bread-buffet lunch; wood-fired pizza.',
      anecdotes: [
        { text: '"…an all-you-can-eat experience featuring 45 dishes, including pizzas, pastas, and appetizers." — September 2026, after the August renewal.', source: R + 'B536259552/' },
        { text: '"I couldn\'t wait and just dove in, probably eating around 15 pieces." — September 2026, the weekday pasta lunch for JPY 1,800.', source: R + 'B536497582/' },
        { text: '"The bread was dry and tasted like frozen bread" — September 2026, a lunch with a friend from abroad.', source: R + 'B536218883/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ビランチャ 梅田店、イタリアン・パスタ・ビアガーデン、大阪市北区茶屋町10-12 NU茶屋町 8F、阪急茶屋町口のすぐそば、月〜木・日・祝11:00〜15:00 (L.O.14:00)、17:00〜22:00 (L.O.21:00)、金・土・祝前日17:00〜23:00 (L.O.22:00)、NU茶屋町に準じる、予約可、別会計不可、ランチは混雑時90分、カード・電子マネー・QR 可、115席 (晴れの日のテラス60席)、8名の個室、禁煙、全国の人気ベーカリーのパンの食べ放題ランチ (1,800円から)、45品の2時間食べ放題 (チキン3,500円、チキンとポーク4,000円)、飲み放題1,000円、プレミアムワイン1,500円、クラフトビール1,800円、自家製生地の窯焼きピッツァ、2026年8月10日にリニューアル。インボイス登録は株式会社コズミックダイナー (野崎町)。口コミ(2026年9月〜10月): メインを選ぶパンの食べ放題とスープとドリンクバー、明太クリームのパスタ、ごぼうとベーコンのアラビアータ、グリルチキン、鯛のポワレ、牛ステーキ、さつまいものクロワッサン、とうもろこしのパン、チョコクロワッサン、イカスミ明太のバゲット、フレンチトースト、トースター、45品の食べ放題、生ハム、カプレーゼ、魚介のマリネ、パテ・ド・カンパーニュ、から揚げ、スマホで注文、パンがかたく冷凍のようだという声。',
      confidence: 'medium', sources: [TB, R + 'B535232200/', R + 'B535747832/', R + 'B536218883/', R + 'B536259552/', R + 'B536466975/', R + 'B536497582/', R + 'B536591152/', R + 'B537040470/', R + 'B537330745/', R + 'B537727804/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Buffet lunch with a main chosen from a short list; smartphone ordering at dinner (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区茶屋町10-12 NU茶屋町 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing, renewed August 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区茶屋町10番12号 (go) 23m. Same building as osaka_bene_umeda_nu_chayamachi (address_ja "大阪府大阪市北区茶屋町10-12 NU茶屋町 9F"), a floor up with its pin 10 m away, so the two do not stack; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536497582/'],
    price_note: 'Prices from the Tabelog listing (tax included); September 2026 reviews match ¥1,800 and ¥3,500.', last_checked: TODAY, items: [
      it('', '', 'Lunch: a main with the bread buffet, soup and drink bar', '¥1,800', 'Lunch', 'no', 'ask', 'Tabelog; September 2026.', 'bread_lunch'),
      it('', '', 'Dinner: 45 dishes all you can eat for two hours, with roast chicken', '¥3,500', 'Dinner', 'no', 'no', 'Tabelog; September 2026.', 'dinner_buffet'),
      it('', '', 'Dinner buffet with roast chicken and roast pork', '¥4,000', 'Dinner', 'no', 'no', 'Tabelog.', 'dinner_buffet_pork'),
      it('', '', 'All-you-can-drink add-on', '¥1,000', 'Drinks', 'ask', 'ask', 'Tabelog; September 2026.', 'nomihodai'),
    ] }, {
    cuisine: '2026年8月のリニューアルからパンの食べ放題のランチと食べ放題のディナーのイタリアン (食べログ)・ランチは1,800円から: メイン (明太クリームやごぼうとベーコンのアラビアータなどのパスタ、グリルチキン、鯛のポワレ、牛ステーキ) と前菜に、全国の人気ベーカリーのパン、スープ、ドリンクバーのビュッフェ。パンは10種ほど、さつまいものクロワッサン、とうもろこしのパン、チョコクロワッサン、イカスミ明太のバゲット、フレンチトーストなど、トースターで温められる (2026年9月〜10月)。平日と週末で値段がちがう (2026年9月)・ディナー: 窯焼きピッツァ、パスタ、アヒージョ、生ハム、カプレーゼ、魚介のマリネ、パテ・ド・カンパーニュ、鶏の揚げ物など45品の2時間食べ放題、ベーカリーのパンの盛り合わせとローストチキンで3,500円、チキンとポークで4,000円。飲み放題は1,000円、プレミアムワイン1,500円、クラフトビール1,800円の追加 (食べログ、税込、2026年9月)',
    neighborhood: '茶屋町10-12、NU茶屋町の8階。阪急大阪梅田駅の茶屋町口のすぐそば',
    gf_detail: 'グルテンフリーにはしにくい: ランチはパンの食べ放題が中心で、ディナーの食べ放題もピッツァとパスタが中心。チキン、ポーク、鯛、ステーキのメインもあるが、グルテンフリーの説明はない。',
    vegan_detail: '要確認。食べログの特徴に「ベジタリアンメニューあり」とあるが、ベジタリアンやヴィーガンの料理の名前はなく、パン、パスタ、ビュッフェの料理の説明もない。',
    notes: '[イタリアン・茶屋町、パンの食べ放題のランチ] NU茶屋町の8階にある大きなイタリアンで、晴れの日はテラスも。2026年8月に食べ放題の店に変わった。昼はメイン (パスタ、チキン、鯛、ステーキ) を選ぶと、全国のベーカリーのパンとスープとドリンクバーが食べ放題で1,800円ほど。2026年の口コミでは、さつまいものクロワッサン、とうもろこしのパン、イカスミ明太のバゲットをトースターで温めて何度もおかわりした人が多い。夜は3,500円で、窯焼きピッツァ、パスタ、生ハム、カプレーゼなど45品が2時間食べ放題、飲み物は別。パンがかたくてパスタの選択肢が少ないという声もある (2026年9月) が、コスパをほめる声が多い。別会計はできない。',
  });
}

// ================================================================ 北新地 つきしろ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27122992/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '13:50'], ['18:00', '22:00']); const S = day(['18:00', '22:00']);
  put({
    id: 'osaka_kitashinchi_tsukishiro', name: '北新地 つきしろ (Kitashinchi Tsukishiro)', category: 'OMNI',
    lat: 34.697815, lng: 135.498633, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sukiyaki and niku-dofu in sweet soy-based sauces at lunch; the dinner courses add a yukhoe with French bread, dashi-simmered dishes and wagyu hand-rolled sushi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: black-wagyu dishes with dashi, sake-lees soup and egg.',
    hours_raw: 'Mon–Fri lunch 11:30–13:50 (last order 13:20), no reservations; dinner Mon–Fri 18:00–22:00 by reservation; Saturday dinner 18:00–22:00 per a September 2026 diner (Tabelog lists Saturday without hours); closed Sundays and holidays except for private bookings; earlier or later times by arrangement (Tabelog). Lunch fills by 11:45; arrive before 11:30 (September–October 2026). No service charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and PayPay (Tabelog). 14 seats: a counter of 6 and two tables of 4; non-smoking, ashtray by the lift (Tabelog). Opened 15 June 2021 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '曽根崎新地1-9-12, 3F of フォーシーズンフロント, entrance easy to miss — 5 min from Kitashinchi Stn',
    cuisine: 'Meat kaiseki of black wagyu in many preparations, with chateaubriand grilled over Kishu binchotan (Tabelog) · dinner courses (Tabelog, tax included): "Oborozuki" of five dishes ¥11,000; "YOITUKI", the classic course for first visits: truffle-scented wagyu yukhoe, thin and thick beef tongue, strip-loin niku-dofu in dashi, beef dishes, Kishu-binchotan chateaubriand, wagyu hand-rolled sushi, dessert ¥13,200; "Kasumizuki" with seasonal seafood and vegetables ¥16,500 · yukhoe with sea urchin and caviar and a piece of French bread (October 2025) · weekday lunch ¥1,500 each: sukiyaki set of black-wagyu chuck rib with an onsen egg, rice, cold tofu with whitebait, sake-lees soup; niku-dofu set; meat-topped dashimaki set; large rice +¥100; a koji porridge (2026) · sake and wine (Tabelog)',
    website: 'https://kitashinchi-tsukishiro.com/', gmaps: gm('北新地 つきしろ'), menu_url: null,
    notes: "[Wagyu · Kitashinchi, meat kaiseki by night, sukiyaki by day] A 14-seat black-wagyu restaurant on a third floor in Kitashinchi, open since 2021. In the evening it serves meat kaiseki: truffle-scented yukhoe, beef tongue cut thin and thick, a strip-loin niku-dofu in dashi, chateaubriand over Kishu binchotan and wagyu hand-rolled sushi, from ¥11,000. Weekday lunch is the famous bargain: a ¥1,500 sukiyaki set of black-wagyu chuck rib with an onsen egg, glossy freshly cooked rice, cold tofu with whitebait and a hearty sake-lees soup, or a niku-dofu or dashimaki set. Lunch takes no bookings and the counter is full within fifteen minutes of opening, so come before 11:30; one regular has been eleven times (October 2026).",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: a meat kaiseki restaurant showcasing black-haired wagyu through various methods, with chateaubriand grilled over Kishu binchotan; freshly cooked rice at lunch; opened 15 June 2021. The official site is kitashinchi-tsukishiro.com.', philosophy: '"The best dish for today\'s moment" (Tabelog).', specialty: 'Wagyu meat kaiseki; sukiyaki lunch set.',
      anecdotes: [
        { text: '"We arrived at 11:10 AM and there were no customers waiting yet, but soon after, a line began to form, and by the time the restaurant opened at 11:30, it was nearly full." — September 2026, the sukiyaki set meal.', source: R + 'B534836396/' },
        { text: '"My colleague\'s first comment was, \'The rice looks incredibly shiny and beautiful!\'" — September 2026, a sixth visit.', source: R + 'B515853764/' },
        { text: '"There\'s no other restaurant in Shinchi that offers such high-quality lunch on weekdays." — September 2026, a fourth visit.', source: R + 'B504972782/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 北新地 つきしろ、牛肉料理・焼肉・ステーキ、大阪市北区曽根崎新地1-9-12 フォーシーズンフロント 3F、北新地駅から徒歩5分、月〜金11:30〜13:50 (L.O.13:20、予約不可)、18:00〜22:00 (予約可)、日・祝は貸切のみ、早い時間や遅い時間は相談、サービス料なし、カード・電子マネー・PayPay 可、14席 (カウンター6、4名のテーブル2)、禁煙 (エレベーター前に灰皿)、2021年6月15日オープン、黒毛和牛をいろいろな調理法で、紀州備長炭で焼くシャトーブリアン、ランチは炊きたてのごはん、コース Oborozuki 5品11,000円、YOITUKI 13,200円 (トリュフ香る和牛ユッケ、薄切りと厚切りの牛タン、ロースの肉豆腐、シャトーブリアン、和牛の手巻き寿司、デザート)、Kasumizuki 16,500円。口コミ(2024年7月〜2026年10月): すき焼き定食1,500円 (黒毛和牛の肩ロース、温泉卵、ごはん、しらすの冷奴、粕汁)、肉豆腐定食1,500円、肉のせだし巻き定食、ごはん大盛り100円、麹のおかゆ、ウニとキャビアのユッケとフランスパン、11時半前に行列、11時45分には満席、入口がわかりにくい、11回通う常連。',
      confidence: 'medium', sources: [TB, 'https://kitashinchi-tsukishiro.com/', R + 'B473227991/', R + 'B504972782/', R + 'B507397694/', R + 'B507921469/', R + 'B515853764/', R + 'B534504886/', R + 'B534661659/', R + 'B534836396/', R + 'B536886051/', R + 'B538455144/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches with no bookings; dinner courses by reservation (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市北区曽根崎新地1-9-12 フォーシーズンフロント 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目9番12号 (go) 7m. osaka_oriyouri_ueno_kitashinchi (address_ja "大阪府大阪市北区曽根崎新地1-9-12 3F") is at the same address with its pin about 2 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B515853764/'],
    price_note: 'Dinner courses from the Tabelog listing (tax included); lunch prices from 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Sukiyaki set of black-wagyu chuck rib with onsen egg (weekday lunch)', '¥1,500', 'Lunch', 'no', 'no', 'August–October 2026.', 'sukiyaki_teishoku'),
      it('', '', 'Niku-dofu set (weekday lunch)', '¥1,500', 'Lunch', 'ask', 'no', 'August 2026.', 'nikudofu_teishoku'),
      it('', '', 'YOITUKI course (meat kaiseki)', '¥13,200', 'Dinner', 'ask', 'no', 'Tabelog; September 2026.', 'yoituki'),
      it('', '', 'Oborozuki course, five dishes', '¥11,000', 'Dinner', 'ask', 'no', 'Tabelog.', 'oborozuki'),
    ] }, {
    cuisine: '黒毛和牛をいろいろな調理法で出す肉割烹、紀州備長炭で焼くシャトーブリアン (食べログ)・夜のコース (食べログ、税込): 5品の「Oborozuki」11,000円、はじめての人向けの定番「YOITUKI」13,200円 (トリュフ香る和牛ユッケ、薄切りと厚切りの牛タン、だしで炊いたロースの肉豆腐、牛肉の料理、紀州備長炭のシャトーブリアン、和牛の手巻き寿司、デザート)、季節の魚介と野菜の「Kasumizuki」16,500円・ウニとキャビアをのせたユッケとフランスパン (2025年10月)・平日のランチは各1,500円: 黒毛和牛の肩ロースと温泉卵のすき焼き定食 (ごはん、しらすの冷奴、粕汁)、肉豆腐定食、肉のせだし巻き定食、ごはん大盛り100円、麹のおかゆ (2026年)・日本酒とワイン (食べログ)',
    neighborhood: '曽根崎新地1-9-12、フォーシーズンフロントの3階、入口はわかりにくい。北新地駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。ランチは甘い醤油ベースのたれのすき焼きと肉豆腐。夜のコースにはフランスパンを添えたユッケ、だしの煮物、和牛の手巻き寿司もある。',
    vegan_detail: 'ヴィーガンではありません。黒毛和牛の料理に、だし、粕汁、卵。',
    notes: '[和牛・北新地、夜は肉割烹、昼はすき焼き] 北新地のビルの3階にある14席の黒毛和牛の店で、2021年から。夜は肉割烹で、トリュフ香るユッケ、薄切りと厚切りの牛タン、だしで炊いたロースの肉豆腐、紀州備長炭のシャトーブリアン、和牛の手巻き寿司と続き、11,000円から。名物は平日のお得なランチで、1,500円のすき焼き定食は黒毛和牛の肩ロースに温泉卵、つやつやの炊きたてごはん、しらすの冷奴、具だくさんの粕汁つき。肉豆腐やだし巻きの定食も。ランチは予約できず、開店から15分で満席になるので11時半前に。11回通う常連も (2026年10月)。',
  });
}

// ================================================================ 備長炭と宮崎鶏専門 TORA鶏YA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27119398/'; const R = TB + 'dtlrvwlst/';
  const W = day(['16:00', '23:00']); const E = day(['15:00', '23:00']);
  put({
    id: 'osaka_tora_toriya_ohatsutenjin', name: '備長炭と宮崎鶏専門 TORA鶏YA (TORA Tori YA)', category: 'OMNI',
    lat: 34.699546, lng: 135.501253, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Yakitori with salt or sauce, chicken nanban with tartar, gratin, motsunabe, kamameshi and oyakodon; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Miyazaki-chicken restaurant; seasonal salads and grilled corn sit beside chicken dishes.',
    hours_raw: 'Mon–Fri and the day before a holiday 16:00–23:00 (last order food 22:00, drinks 22:30); Sat, Sun and holidays 15:00–23:00; closing days not fixed (Tabelog); a September 2026 diner came for a lunch set, which the listing does not mention. Reservations accepted; 90-minute limit at busy times; a booking is cancelled 15 minutes late without notice; overbooked guests may be sent to a related shop; groups of six or more courses only; course fee charged in full from 23:00 the day before, seat-only bookings ¥3,000 a head (Tabelog). Starter charge ¥420 plus tax; 10% extra over the New Year (Tabelog). Cards (VISA, Master, JCB, Diners) and PayPay; no e-money (Tabelog). 60 seats: a counter on the ground floor, tables upstairs, private rooms for 2 to 20; smoking allowed (Tabelog; 2026 reviews). Opened 16 October 2020 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sonezaki 2-5-23, ground floor of お初天神参道ビル, a minute from Ohatsu Tenjin and Tsuyu Tenjin shrine — 5 min from the Umeda stations; steep stairs to the upper floor',
    cuisine: 'Yakitori of Miyazaki free-range chicken grilled over binchotan, using the whole bird, with a limited daily "Jidokko" (a rare breed) and white liver (Tabelog) · skewers ordered one at a time; chicken sashimi, chicken-liver sashimi, heart, tsukune with grilled cheese, corn on the cob with sauce, potato salad (August 2026); kamameshi (cook time, order early; October 2026) · courses with two hours of drinks: 12 dishes for two ¥4,500 (seasonal salad, three skewers, oyakodon); 15 dishes for two ¥5,000 (five skewers, oyakodon, gratin of local chicken, chicken nanban with homemade tartar); Tiger course with Hakata motsunabe in garlic soy, spicy or soy-milk broth ¥4,500 (Tabelog, tax included) · a lunch set with three small dishes and soba (September 2026)',
    website: null, gmaps: gm('TORA鶏YA お初天神'), menu_url: null,
    notes: "[Yakitori · Ohatsu Tenjin, Miyazaki chicken over binchotan] A busy, two-storey yakitori izakaya by the Ohatsu Tenjin shrine, opened in 2020, that grills Miyazaki free-range chicken over binchotan and uses the whole bird, with a few rare Jidokko a day. Order skewers one at a time, with chicken and liver sashimi, a tsukune under grilled cheese and corn glazed in sauce, then a kamameshi that is worth ordering early. Groups book the two-hour drink courses from ¥4,500, some with a Hakata motsunabe. The ground-floor counter is cramped and smoky and the upper floor roomier (October 2026), and one August 2026 diner found the noise from a neighbouring group hard to bear. Smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and grill staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: the owner prepares by hand, every day, chicken chosen out of love for it; Miyazaki free-range chicken and Jidokko, a breed said to be 1% of chicken eaten in Japan, the whole bird used; private rooms; opened 16 October 2020. The Tabelog invoice number T2120001214766 is registered to 株式会社ファイブディアライフ (NTA invoice register), also the operator of 梅田かに食堂 (osaka_umeda_kani_shokudo).', philosophy: null, specialty: 'Binchotan yakitori; chicken sashimi; kamameshi.',
      anecdotes: [
        { text: '"You can order yakitori one skewer at a time, and the quality was great, including rare chicken liver sashimi, which made me very happy." — August 2026.', source: R + 'B533378450/' },
        { text: '"The kamameshi (rice cooked in a pot) takes some time to prepare, so it might be a good idea to order it first." — October 2026.', source: R + 'B537743823/' },
        { text: '"The first floor has only a counter and feels a bit cramped, but the second floor has table seating and is relatively spacious. I recommend the second floor." — October 2026.', source: R + 'B537797609/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 備長炭と宮崎鶏専門 TORA鶏YA、焼き鳥・鶏料理・居酒屋、大阪市北区曾根崎2-5-23 お初天神参道ビル 1F、お初天神と露天神社から徒歩1分、梅田の各駅から5分、月〜金・祝前日16:00〜23:00 (L.O.料理22:00、ドリンク22:30)、土・日・祝15:00〜23:00、不定休、混雑時は90分、15分の遅れで自動キャンセル、満席の場合は系列店を案内することも、6名以上はコースのみ、前日23時からキャンセル料、お通し420円+税、年末年始は10%、カード・PayPay 可、電子マネー不可、60席、2〜20名の個室、喫煙可、2020年10月16日オープン、宮崎の地鶏を備長炭で、1羽を丸ごと使う、数量限定の Jidokko、白レバー、2時間飲み放題つきのコース4,500円・5,000円、Hakata のもつ鍋のコース。インボイス登録は株式会社ファイブディアライフ (梅田かに食堂と同じ)。口コミ(2026年8月〜10月): 串は1本から、鶏刺し、レバー刺し、ハツ、焼きチーズのつくね、たれの焼きとうもろこし、ポテトサラダ、釜めしは時間がかかる、ランチの定食とそば、1階はカウンターでせまく煙い、2階はテーブル、となりのグループの声がうるさかったという声、喫煙可。',
      confidence: 'medium', sources: [TB, R + 'B533378450/', R + 'B533943123/', R + 'B534458469/', R + 'B535070969/', R + 'B536129113/', R + 'B536597347/', R + 'B537743823/', R + 'B537797609/', R + 'B537810108/', R + 'B538325244/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Busy izakaya with private rooms; courses for groups (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曾根崎2-5-23 お初天神参道ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎二丁目5番23号 (go) 1m; nearest other record osaka_kani_akane_sonezaki 23 m away at a different address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course prices and the starter charge from the Tabelog listing (tax included); skewer prices not given in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Course for two: 12 dishes with two hours of drinks', '¥4,500', 'Courses', 'ask', 'no', 'Tabelog.', 'course_12'),
      it('', '', 'Tiger course with Hakata motsunabe, two hours of drinks', '¥4,500', 'Courses', 'no', 'no', 'Tabelog.', 'tiger_course'),
      it('', '', 'Chicken-liver sashimi', '', 'À la carte', 'ask', 'no', 'August 2026.', 'liver_sashi'),
      it('', '', 'Kamameshi', '', 'Rice', 'ask', 'no', 'October 2026.', 'kamameshi'),
    ] }, {
    cuisine: '宮崎の地鶏を備長炭で焼く焼き鳥、1羽を丸ごと使い、数量限定の Jidokko と白レバーも (食べログ)・串は1本から。鶏刺し、レバー刺し、ハツ、焼きチーズのつくね、たれの焼きとうもろこし、ポテトサラダ (2026年8月)。釜めし (時間がかかるので早めに、2026年10月)・2時間飲み放題つきのコース: 季節のサラダ、串3本、親子丼の2名12品4,500円。串5本、親子丼、地鶏のグラタン、自家製タルタルのチキン南蛮の2名15品5,000円。にんにく醤油、辛口、豆乳から選ぶ Hakata のもつ鍋のタイガーコース4,500円 (食べログ、税込)・小鉢3つとそばのランチ定食 (2026年9月)',
    neighborhood: '曾根崎2-5-23、お初天神参道ビルの1階、お初天神と露天神社から1分。梅田の各駅から5分。2階へは急な階段',
    gf_detail: '要確認。グルテンの情報なし。塩かたれの焼き鳥、タルタルのチキン南蛮、グラタン、もつ鍋、釜めし、親子丼。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。宮崎の地鶏の店で、季節のサラダや焼きとうもろこしも鶏料理といっしょに出る。',
    notes: '[焼鳥・お初天神、備長炭の宮崎の地鶏] お初天神のそばの2階建てのにぎやかな焼き鳥の居酒屋で、2020年から。宮崎の地鶏を備長炭で焼き、1羽を丸ごと使い、珍しい Jidokko も1日に数羽。串は1本ずつ頼めて、鶏刺しやレバー刺し、焼きチーズのつくね、たれの焼きとうもろこし、時間のかかる釜めしは早めに。グループには2時間飲み放題つきのコースが4,500円からで、Hakata のもつ鍋のものも。1階のカウンターはせまくて煙く、2階のほうがゆったり (2026年10月)。となりのグループの声がうるさかったという声も (2026年8月)。喫煙可。',
  });
}

// ================================================================ 恒雅
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27070924/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '04:00']); const S = day(['18:00', '00:00']);
  put({
    id: 'osaka_tsunemasa_kitashinchi', name: '恒雅 (Tsunemasa)', category: 'OMNI',
    lat: 34.697581, lng: 135.497927, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Natural-yam hotpot in a bonito dashi finished with soba, tempura, crab cream croquettes, fried yam, kara-age and soy-based simmered fish; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, meat and bonito-dashi dishes; the natural yam is served in dashi or with seafood.',
    hours_raw: 'Mon–Fri 18:00–4:00 (last order 3:00); Sat 18:00–24:00 (last order 23:00); closed Sundays and holidays and over New Year (Tabelog). Reservations accepted; two-hour limit when busy; a seat-only online booking that clashes with a phone booking may be cancelled (Tabelog). 10% charge after 22:00 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 30 seats, up to 35 for whole-shop hire; counter of about eight and tables, shoes off at the entrance; smoking allowed (Tabelog; March 2026). Opened 4 February 2013 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '曽根崎新地1-5-32, 2F of ボーネールビル — 3 min from Kitashinchi Stn (JR Tozai Line), 5 min from Higashi-Umeda and Nishi-Umeda Stns',
    cuisine: 'Japanese izakaya of fish sent direct from Numajima port on Awaji Island and natural yam from farmers, with local sake from around Japan (Tabelog) · the signature natural-yam hotpot in a bonito dashi with pork, head-on shrimp, oysters, chicken, clams and sawara under grated yam, finished with soba (December 2025) · natural yam with tuna, natural-yam somen with egg yolk, fried grated yam, yam tororo on the teppan (2026); obanzai, three as a set (March 2026) · sashimi platters (akagai, flounder, amberjack, yellowtail, tuna), simmered Numajima fish, grilled Aomori kinki, Miyazaki beef cutlet, matsutake kamameshi (September 2026); horse-meat yukhoe, miso-grilled pork shoulder, bamboo-steamed pork and river shrimp, crab cream croquettes, kara-age (2026) · courses: natural-yam hotpot course ¥6,000; well-balanced ¥6,000 course of sashimi, obanzai, tempura, simmered fish and Japanese beef roast; ¥8,000 course with grilled kinki and beef fillet cutlet; all-you-can-drink ¥2,000 extra (Tabelog, tax included; December 2025)',
    website: null, gmaps: gm('恒雅 北新地'), menu_url: null,
    notes: "[Izakaya · Kitashinchi, natural-yam hotpot until 4:00] A dim, Kyoto-townhouse-style izakaya on a second floor in Kitashinchi, open since 2013 and until 4:00 on weekdays, where you take off your shoes before sitting at the counter or tables. The kitchen buys fish direct from Numajima port on Awaji and natural yam from farmers, and the signature is a hotpot of shrimp, oysters, clams, pork and fish in bonito dashi under a blanket of grated yam, finished with soba (December 2025). Otherwise order the five-kind sashimi, simmered Awaji fish, obanzai or yam three ways. Courses from ¥6,000; a 10% charge applies after 22:00. Smoking is allowed, which one December 2025 diner minded; diners otherwise praise the food and staff.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed) and staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: fresh fish delivered directly from Numajima fishing port on Awaji Island, natural yam direct from farmers used in a specialty hotpot, a space like a Kyoto townhouse, local sake from across Japan; sister shops "Kita-Shinchi Ono Meat Shop" (yakiniku and horumon) and "Kita-Shinchi Ushinokami" (premium meat); opened 4 February 2013.', philosophy: null, specialty: 'Natural-yam hotpot; Awaji fish.',
      anecdotes: [
        { text: '"The hot pot was packed with ingredients like pork, head-on shrimp, oysters, chicken, clams, and sawara, topped with natural yam, making it incredibly tasty." — December 2025, a year-end party.', source: R + 'B519466113/' },
        { text: '"Since smoking is allowed, the people at the table next to us were smoking quite a bit, which left a strong smell on my clothes and hair." — December 2025, the ¥6,000 course with drinks.', source: R + 'B518618972/' },
        { text: '"…a wide variety of obanzai (traditional side dishes), including nostalgic flavors reminiscent of home-cooked meals from my childhood" — September 2026.', source: R + 'B534917682/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 恒雅、海鮮・日本料理・鍋、大阪市北区曽根崎新地1-5-32 ボーネールビル 2F、JR 東西線 北新地駅から徒歩3分、東梅田駅・西梅田駅から5分、月〜金18:00〜翌4:00 (L.O.3:00)、土18:00〜24:00 (L.O.23:00)、日・祝休み、年末年始休み、予約可、混雑時は2時間制、22時以降はチャージ10%、カード可、電子マネー・QR 不可、30席 (貸切35名まで)、喫煙可、2013年2月4日オープン、Awaji の Numajima 漁港から直送の鮮魚、農家直送の自然薯の名物鍋、京町家のような空間、全国の地酒、自然薯の鍋のコース6,000円、刺身・おばんざい・天ぷら・煮魚・和牛ローストの6,000円のコース、キンキの焼き物と牛ヒレカツの8,000円のコース、系列店は Kita-Shinchi Ono Meat Shop と Kita-Shinchi Ushinokami。口コミ(2025年12月〜2026年10月): 自然薯の鍋 (豚、有頭エビ、カキ、鶏、アサリ、サワラ)、締めのそば、カニクリームコロッケ、自然薯とマグロ、自然薯そうめんと卵黄、自然薯の揚げ物、自然薯の鉄板焼き、おばんざい3種、刺身5種 (赤貝、ヒラメ、カンパチ、ハマチ、マグロ)、Numajima の魚の煮付け、Aomori のキンキの焼き物、Miyazaki の牛カツ、松茸の釜めし、馬肉のユッケ、豚肩ロースの味噌焼き、豚と川エビのせいろ蒸し、kara-age、靴を脱いで上がる、喫煙可で服ににおい、スタッフが親切、遅くまで開いている。',
      confidence: 'medium', sources: [TB, R + 'B518618972/', R + 'B519466113/', R + 'B521426211/', R + 'B524407370/', R + 'B527511916/', R + 'B528633867/', R + 'B534917682/', R + 'B535119005/', R + 'B536372202/', R + 'B537426699/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off at the entrance; smoking allowed (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-5-32 ボーネールビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目5番32号 (go) 4m. The JMビル records next door (osaka_takoyaki_sakaba_n_kitashinchi, osaka_teppanyaki_hanaui_kitashinchi, 曽根崎新地1-5-31) are 7–11 m away at a different address, so this pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B518618972/'],
    price_note: 'Course prices from the Tabelog listing (tax included); a December 2025 review paid ¥8,000 for the ¥6,000 course with ¥2,000 of drinks.', last_checked: TODAY, items: [
      it('', '', 'Natural-yam hotpot course', '¥6,000', 'Courses', 'no', 'no', 'Tabelog; December 2025.', 'jinenjo_course'),
      it('', '', 'Course with grilled kinki and beef fillet cutlet', '¥8,000', 'Courses', 'no', 'no', 'Tabelog; September 2026.', 'kinki_course'),
      it('', '', 'Natural-yam somen with egg yolk', '', 'À la carte', 'no', 'no', 'May 2026.', 'jinenjo_somen'),
      it('', '', 'Sashimi, five kinds', '', 'À la carte', 'ask', 'no', 'September 2026.', 'sashimi_5'),
    ] }, {
    cuisine: 'Awaji 島の Numajima 漁港から直送の魚と農家直送の自然薯、全国の地酒の和食の居酒屋 (食べログ)・名物の自然薯の鍋は、かつおだしに豚、有頭エビ、カキ、鶏、アサリ、サワラ、上にすりおろした自然薯、締めはそば (2025年12月)・自然薯とマグロ、卵黄の自然薯そうめん、自然薯の揚げ物、自然薯の鉄板焼き (2026年)。おばんざい3種盛り (2026年3月)・刺身の盛り合わせ (赤貝、ヒラメ、カンパチ、ハマチ、マグロ)、Numajima の魚の煮付け、Aomori のキンキの焼き物、Miyazaki の牛カツ、松茸の釜めし (2026年9月)。馬肉のユッケ、豚肩ロースの味噌焼き、豚と川エビのせいろ蒸し、カニクリームコロッケ、kara-age (2026年)・コース: 自然薯の鍋のコース6,000円、刺身、おばんざい、天ぷら、煮魚、和牛ローストの6,000円のコース、キンキの焼き物と牛ヒレカツの8,000円のコース、飲み放題は2,000円追加 (食べログ、税込、2025年12月)',
    neighborhood: '曽根崎新地1-5-32、ボーネールビルの2階。JR 東西線 北新地駅から徒歩3分、東梅田駅・西梅田駅から5分',
    gf_detail: '要確認。グルテンの情報なし。かつおだしの自然薯の鍋と締めのそば、天ぷら、カニクリームコロッケ、自然薯の揚げ物、kara-age、醤油ベースの煮魚。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚介、肉、かつおだしの料理で、自然薯もだしや魚介といっしょに出る。',
    notes: '[居酒屋・北新地、朝4時までの自然薯の鍋] 北新地のビルの2階にある、京町家のような薄暗い居酒屋で、2013年から、平日は朝4時まで。入口で靴を脱いでカウンターかテーブルへ。魚は Awaji の Numajima 漁港から直送、自然薯は農家から直接仕入れ、名物はかつおだしにエビ、カキ、アサリ、豚、魚を入れ、すりおろした自然薯をたっぷりかけた鍋で、締めはそば (2025年12月)。ほかに5種の刺身、Awaji の魚の煮付け、おばんざい、いろいろな自然薯の料理も。コースは6,000円から、22時以降はチャージ10%。喫煙可で、それが気になったという声もある (2025年12月) が、料理とスタッフはほめられている。',
  });
}

save();
