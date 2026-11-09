// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 86.
//   - skip 26038858 ヒルトン・ガーデン・イン京都四条烏丸 (big-chain hotel)
//   - skip 26004700 隨縁亭 ホテルモントレ京都 (big-chain hotel)
//   - skip 26028796 ファミリーマート 京都烏丸松原店 (chain)
//   + 池半分室 Ike Hanbun Shitsu (Taiwanese, Chinese and Japanese tea house by the Kamogawa south of Gojo) — rest
//   - skip 26034340 ぎょうざ処 亮昌 新風館 (brand in data)
//   + BALCOOK (grill-and-beer pub with stone-oven pizza on Karasuma by Shin-Puh-Kan; café lunches) — rest
//   + 酒とアテよいよい Sake to Ate Yoiyoi (evening obanzai izakaya in the Kinzan ramen shop by City Hall) — rest
//   + Ale GION BEER KYOTO (Gion Beer's craft-beer bar at Muromachi-Bukkoji) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl, the THAN brand list
//   (than.co.jp/brands, read 2026-11-08) and the 株式会社WILL large-parent ruling (26043489): no matches for 池半, BALCOOK
//   , よいよい or Ale GION BEER (きんざん 市役所前店 was skipped as a branch of きんざん, 26039983 — よいよい is a separate
//   night-time izakaya in the same premises, not the ramen concept; Ale GION BEER — one Tabelog listing; a July 2026 reviewer says
//   Gion Beer Co. contract-brews and has no brewery of its own; no other bars sourced). Earlier rulings found: ヒルトン (26041840), ホテルモントレ (26005628, 26014990), 亮昌 (26021778).
//   Same-name counts (2026-11-08): 池半分室 — one; Tabelog says it sits on the ground floor of the main building of Kamohan, a
//   whole-house rental, and is open to all. BALCOOK — one; its site lists no other shop and no operator, and no hotel.
//   None of the drafted shops is in data/kyoto.json.
//   Charges: none listed on Tabelog. No halal claims; no owner deaths; single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-86');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26038858', 'venue inside a big-chain hotel (Greg 11-08 ruling): ヒルトン・ガーデン・イン京都四条烏丸 is a Hilton Garden Inn hotel listing (earlier rulings 26041812, 26041840) (https://tabelog.com/en/kyoto/A2601/A260201/26038858/).');
skip('26004700', 'venue inside a big-chain hotel (Greg 11-08 ruling): 隨縁亭 is the restaurant of ホテルモントレ京都 (earlier rulings 26005628, 26014990) (https://tabelog.com/en/kyoto/A2601/A260203/26004700/).');
skip('26028796', 'chain: FamilyMart convenience store (https://tabelog.com/en/kyoto/A2601/A260201/26028796/).');
skip('26034340', 'brand already in data: ぎょうざ処 亮昌 新風館 is a branch of 亮昌, already in kyoto.json as kyr_gyoza_dokoro_takatsuji_s (same ruling as 26021778) (https://tabelog.com/en/kyoto/A2601/A260202/26034340/).');

// ================================================================ 池半分室
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042716/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '17:00']);
  put({
    id: 'kyoto_ike_hanbun_shitsu', name: '池半分室 (Ike Hanbun Shitsu)', category: 'OMNI',
    lat: 34.994584, lng: 135.767175, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mostly loose-leaf tea; the tea snacks are dried fruit and nuts from Taiwan and China (October 2025, March 2026), and weekend sweets have included lemon douhua and purple rice with coconut milk (October and December 2025). No allergen information is sourced.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tea, dried fruit and nuts, and weekend sweets such as douhua and purple rice with coconut milk (2025 reviews) may suit, but no vegan claim is sourced and recipes are not described.',
    hours_raw: 'Mon, Tue, Thu–Sun 11:00–17:00 (drinks last order 16:00); closed Wednesday (Tabelog). Weekday reservations only, by email by closing time the day before; none on weekends and holidays; up to two hours at busy times (Tabelog). When full, leave a name and phone number and stroll until called (March and May 2026); a weekday wait was about 30 minutes (March 2026). One tea per person; no split bills (January 2026). Cards accepted; no e-money or QR (Tabelog). 8 seats (Tabelog). On the ground floor of the main building of Kamohan, a whole-house rental, by the Kamogawa south of Gojo Ohashi, about five minutes from Kiyomizu-Gojo Station (Tabelog; December 2025, May 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kamogawa, south of Gojo Ohashi — Kiyomizu-Gojo',
    cuisine: 'Tea house of organically and naturally grown Taiwanese, Chinese and Japanese teas, brewed at the table · every tea ¥2,400, re-steeped many times — Wenshan rougui, 40-year aged Tieguanyin, Taiwanese white tea, yellow tea, Kyoto green tea, roasted oolong (2025–26 reviews) · three-kind tea snacks of dried fruit and nuts ¥600 (October 2025, March 2026) · weekend sweets: lemon douhua, purple rice with coconut milk (October and December 2025) · hanabira mochi with burdock (January 2026)',
    website: null, gmaps: gm('池半分室 京都 五条'), menu_url: TB,
    notes: '[Tea house · Kamogawa, Kiyomizu-Gojo] A glass-walled, eight-seat tea room on the Kamogawa south of Gojo Ohashi serving organically grown Taiwanese, Chinese and Japanese teas at ¥2,400 a pot: the staff brew the first infusion at your seat, then you re-steep from a kettle over a spirit lamp. Dried-fruit tea snacks and weekend sweets. Plan an hour or more. Closed Wednesday; weekday booking by email only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a tea room opened 24 October 2024 on the ground floor of the main building of Kamohan, a whole-house rental, with a front desk and gallery.',
      philosophy: null, specialty: 'Organically grown Taiwanese and Chinese teas, brewed at the table.',
      anecdotes: [
        { text: 'An October 2025 visitor without a booking asked for advice, chose a Wenshan rougui, and had the first infusion brewed by staff seated alongside before steeping four or five more alone, with the weekend lemon douhua.', source: R + 'B514396808/' },
        { text: 'A January 2026 tea lover tried a 40-year aged Tieguanyin — reminded of an 18-year whisky — and a fruity white tea, ¥2,400 each, and noted one tea order per person.', source: R + 'B521687542/' },
        { text: 'A January 2026 visitor watching the river between steepings saw something — a capybara, or perhaps an otter — swimming in the Kamogawa.', source: R + 'B520112546/' },
      ],
      japanese_sources_summary: '食べログ: その他、下京区都市町143-10、月火木金土日11:00〜17:00 (ドリンクL.O.16:00)、水曜休み、予約は平日のみ前日の営業時間内にメールで、土日・祝日は予約不可、混雑時は2時間制、カード可、電子マネー・QR 不可、8席、一棟貸しの宿 Kamohan の母屋1階 (フロントとギャラリー)、2024年10月24日オープン。口コミ (2025年10月〜2026年7月、英語): 鴨川沿い、五条大橋の南、ガラス張りで川が見える、台湾・中国・日本の有機・自然栽培のお茶、お茶はすべて2,400円、最初の一煎は店の人が席で淹れる、アルコールランプと鉄瓶、茶菓子3種600円 (ドライフルーツとナッツ)、週末限定のレモン豆花や紫米のココナッツミルク、ごぼう入りの花びら餅、一人一杯の注文、別会計不可、満席時は名前と電話番号を書いて呼び出し。',
      confidence: 'medium', sources: [TB, R + 'B514396808/', R + 'B518400920/', R + 'B519467644/', R + 'B520112546/', R + 'B521687542/', R + 'B525203894/', R + 'B526978355/', R + 'B528427716/', R + 'B528582230/', R + 'B534668142/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask the staff for a recommendation — the first infusion is brewed and explained at your seat. One tea per person. Weekday booking by email only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区都市町143-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.994584, 135.767175); cross-checked: GSI 京都府京都市下京区都市町143番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525203894/', R + 'B521687542/'],
    price_note: 'Prices from January and March 2026.', last_checked: TODAY, items: [
      it('', '', 'Tea (any on the menu, re-steeped many times)', '¥2,400', 'Tea', 'ask', 'ask', 'March 2026; all teas ¥2,400.', 'tea'),
      it('', '', 'Tea snacks, three kinds (dried fruit and nuts)', '¥600', 'Sweets', 'ask', 'ask', 'March 2026.', 'tea_snacks'),
      it('', '', 'Lemon douhua (weekends)', '', 'Sweets', 'ask', 'ask', 'October 2025.', 'douhua'),
    ] }, {
    cuisine: '台湾・中国・日本の有機・自然栽培のお茶を席で淹れる茶房・お茶はすべて2,400円で何煎も、Wenshan Rougui、40年熟成の鉄観音、台湾の白茶、黄茶、京都の緑茶、焙煎の強い烏龍茶 (2025〜2026年の口コミ)・ドライフルーツとナッツの茶菓子3種600円 (2025年10月・2026年3月)・週末のレモン豆花、紫米のココナッツミルク (2025年10月・12月)・ごぼう入りの花びら餅 (2026年1月)',
    neighborhood: '鴨川、五条大橋の南。清水五条',
    gf_detail: '要確認。ほぼお茶。茶菓子は台湾と中国のドライフルーツとナッツ (2025年10月・2026年3月)。週末の甘味はレモン豆花や紫米のココナッツミルク (2025年10月・12月)。アレルゲンの情報なし。',
    vegan_detail: '要確認。お茶、ドライフルーツとナッツ、豆花や紫米のココナッツミルクなどの週末の甘味 (2025年の口コミ) は合うかもしれないが、ヴィーガンの記載はなく、作り方の情報もない。',
    notes: '[茶房・鴨川、清水五条] 五条大橋の南、鴨川沿いのガラス張りの8席の茶房。台湾・中国・日本の有機栽培のお茶を一つ2,400円で。最初の一煎は店の人が席で淹れ、あとはアルコールランプの鉄瓶で自分で。茶菓子や週末の甘味も。1時間以上の余裕を。水曜休み、平日の予約はメールのみ。',
  });
}

// ================================================================ BALCOOK
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038594/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://www.balcook.com/';
  const H = day(['11:30', '16:00'], ['17:00', '00:00']);
  put({
    id: 'kyoto_balcook', name: 'BALCOOK (バルクック)', category: 'OMNI',
    lat: 35.00869, lng: 135.759801, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Much of the menu is wheat — pizza, burgers, wraps, fish and chips, cakes (2025–26 reviews) — but grilled beef and Caprese also appear (February 2025). No allergen information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A September 2025 diner chose a meat-free wrap at lunch; whether it or the dressing is fully plant-based is not described.',
    hours_raw: 'Daily 11:30–16:00 (last order 15:30) and 17:00–24:00 (last order 23:00), open all year (Tabelog; shop site). Lunch and café hours: burger sets, wraps, beef stew, cakes and coffee (2025–26 reviews); pizza only at night (September 2026). Cards, e-money and QR (Tabelog). 48 seats: 10 at the counter, 38 at tables (Tabelog). On Karasuma-dori near Shin-Puh-Kan, a short walk from Karasuma Oike Station (May and July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma Oike, by Shin-Puh-Kan',
    cuisine: 'Grill and beer pub by day a café · stone-oven pizza on house-made dough, quattro formaggi (May 2025; shop site) · Caprese, grilled beef with balsamic (February 2025) · Caesar salad, chicken and chips, beef stew (May 2025) · lunch burgers: classic or wasabi-sauce ¥1,500, wagyu ¥2,500 (January 2025) · meat-free wrap (September 2025) · fish and chips with vinegar (February 2025) · Kyoto craft beer (January 2026) · fruit torte ¥700, coffee ¥450, ¥100 off as a cake set; raspberry mille-feuille (May and July 2026)',
    website: SITE, gmaps: gm('BALCOOK 烏丸御池'), menu_url: SITE,
    notes: '[Grill & beer pub · Karasuma Oike] A pub on Karasuma-dori by Shin-Puh-Kan: burgers, wraps and cake-and-coffee sets by day, then stone-oven pizza, grilled meat, wine, cocktails and Kyoto craft beer until midnight. Open daily; pizza at night only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and the shop site: a grill-and-beer pub on Karasuma-dori near Karasuma Oike, opened 16 December 2022, open all year.',
      philosophy: null, specialty: 'Stone-oven pizza; Kyoto craft beer.',
      anecdotes: [
        { text: 'A January 2025 Saturday lunch offered only burgers — classic and wasabi-sauce at ¥1,500, wagyu at ¥2,500 — and the diner preferred the wasabi one.', source: R + 'B500000826/' },
        { text: 'A May 2025 diner, turned away from a full okonomiyaki shop nearby, ordered Caesar salad, chicken and chips, beef stew and a quattro formaggi pizza, and was surprised by the food at what looked like a drinks bar.', source: R + 'B507320701/' },
      ],
      japanese_sources_summary: '公式サイト: 自家製生地の石窯ピザ、肉料理と季節の野菜、ワインとクラフトカクテル、ディナー＆バー17:00〜24:00 (ラストオーダー23:00)、年中無休。食べログ: ダイニングバー、中京区場之町604、11:30〜16:00 (L.O.15:30)・17:00〜24:00 (L.O.23:00)、カード・電子マネー・QR 可、48席 (カウンター10・テーブル38)、2022年12月16日オープン。口コミ (2025年1月〜2026年9月、英語): ランチのバーガー1,500円・和牛2,500円、カプレーゼ、牛肉のグリル、フィッシュアンドチップス、シーザーサラダ、ビーフシチュー、クアトロフォルマッジ、肉なしのラップサンド、京都のクラフトビール、フルーツタルト700円、コーヒー450円、ケーキセットは100円引き、ピザは夜のみ、新風館の近く。',
      confidence: 'medium', sources: [SITE, TB, R + 'B500000826/', R + 'B500692418/', R + 'B501126989/', R + 'B507320701/', R + 'B513058717/', R + 'B521660251/', R + 'B529206944/', R + 'B531593545/', R + 'B536564897/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Come after 17:00 for pizza; daytime is burgers, wraps and cake. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区場之町604',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site; Tabelog reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.008690, 135.759801); GSI matched only the town 京都府京都市中京区場之町 (no lot), 61m — approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B500000826/', R + 'B529206944/'],
    price_note: 'Prices from January 2025 and May 2026.', last_checked: TODAY, items: [
      it('', '', 'Classic burger set (lunch)', '¥1,500', 'Lunch', 'no', 'no', 'January 2025.', 'classic_burger'),
      it('', '', 'Wasabi-sauce burger set (lunch)', '¥1,500', 'Lunch', 'no', 'no', 'January 2025.', 'wasabi_burger'),
      it('', '', 'Wagyu burger set (lunch)', '¥2,500', 'Lunch', 'no', 'no', 'January 2025.', 'wagyu_burger'),
      it('', '', 'Quattro formaggi pizza (evening)', '', 'Pizza', 'no', 'no', 'May 2025.', 'quattro_formaggi'),
      it('', '', 'Fruit torte', '¥700', 'Café', 'no', 'no', 'May 2026.', 'fruit_torte'),
      it('', '', 'Coffee', '¥450', 'Café', 'ask', 'ask', 'May 2026; ¥100 off with cake.', 'coffee'),
    ] }, {
    cuisine: '昼はカフェにもなるグリルとビールのパブ・自家製生地の石窯ピザ、クアトロフォルマッジ (2025年5月・公式サイト)・カプレーゼ、バルサミコの牛肉のグリル (2025年2月)・シーザーサラダ、チキンアンドチップス、ビーフシチュー (2025年5月)・ランチのバーガー: クラシックとわさびソース1,500円、和牛2,500円 (2025年1月)・肉なしのラップサンド (2025年9月)・ビネガーをかけるフィッシュアンドチップス (2025年2月)・京都のクラフトビール (2026年1月)・フルーツタルト700円、コーヒー450円、ケーキセットで100円引き、ラズベリーのミルフィーユ (2026年5月・7月)',
    neighborhood: '烏丸御池、新風館のそば',
    gf_detail: '要確認。ピザ、バーガー、ラップ、フィッシュアンドチップス、ケーキなど小麦が多い (2025〜2026年の口コミ) が、牛肉のグリルやカプレーゼも (2025年2月)。アレルゲンの情報なし。',
    vegan_detail: '要確認。2025年9月の口コミでランチに肉なしのラップサンド。完全に植物性か、ドレッシングの中身の情報はない。',
    notes: '[グリル＆ビールのパブ・烏丸御池] 新風館のそば、烏丸通のパブ。昼はバーガー、ラップ、ケーキとコーヒーのセット。夜は石窯ピザ、肉料理、ワイン、カクテル、京都のクラフトビールを深夜0時まで。毎日営業、ピザは夜のみ。',
  });
}

// ================================================================ 酒とアテよいよい
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043418/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '00:00']);
  put({
    id: 'kyoto_sake_to_ate_yoiyoi', name: '酒とアテよいよい (Sake to Ate Yoiyoi)', category: 'OMNI',
    lat: 35.012534, lng: 135.76731, cuisine_type: 'obanzai',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: obanzai seasoned with soy, saikyo-miso mackerel, chicken karaage, yam in tamari, ramen-shop chashu (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dishes with bonito vinegar and dashi, fish, chicken and pork (2025 reviews).',
    hours_raw: 'Mon–Sat 17:00–24:00 (food last order 23:30); closed Sunday (Tabelog). An evening izakaya in the premises of the Kinzan ramen shop, which serves lunch (July and September 2025). Menu on a blackboard over the counter; the omakase obanzai plate asks about dislikes first (July 2025). No cards or e-money; PayPay and Alipay (Tabelog). 17 seats, mostly counter with one table (Tabelog; July 2025). Behind Kyoto City Hall on Teramachi (September 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Teramachi, behind Kyoto City Hall',
    cuisine: 'Small obanzai izakaya by night · omakase obanzai plate of three ¥600 — bitter melon with sesame, simmered eggplant, tomato in bonito vinegar (July 2025) · saba saikyo-miso ¥580, chicken karaage ¥350, Kinzan’s chashu (July 2025) · lotus root with aonori, yam in tamari, hamo with plum, sawara sashimi (September 2025) · potato salad with a soft-boiled egg (September 2025) · drinks from ¥500, Fushimi sake (2025 reviews)',
    website: null, gmaps: gm('酒とアテよいよい 京都 市役所'), menu_url: TB,
    notes: '[Obanzai izakaya · behind City Hall] A small counter izakaya that takes over the Kinzan ramen shop behind Kyoto City Hall in the evening: a ¥600 omakase plate of three obanzai, seasonal fish such as hamo with plum, saikyo-miso mackerel and Kinzan’s chashu, with Fushimi sake from ¥500. Closed Sunday; open to midnight.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), said to have cooked in a traditional restaurant for 16 years (September 2025)'], origin: null,
      background: 'Per Tabelog and reviews: opened 18 July 2025 as a night-time izakaya in the premises of the Kinzan ramen shop near Kyoto City Hall.',
      philosophy: null, specialty: 'Omakase obanzai plate; seasonal fish.',
      anecdotes: [
        { text: 'A September 2025 visitor found the shop empty at 19:40, went in on a hunch, and was won over by the chef’s obanzai and a hamo whose bone-cutting could be heard from the counter.', source: R + 'B514380602/' },
        { text: 'A July 2025 diner, among the first after opening, had the ¥600 omakase plate — the chef asked about dislikes before putting it together.', source: R + 'B510872139/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、中京区榎木町99-1、月〜土17:00〜24:00 (料理L.O.23:30)、日曜休み、カード・電子マネー不可、PayPay・Alipay 可、17席、2025年7月18日オープン。口コミ (2025年7月〜2026年1月、英語): 昼は京都ラーメン Kinzan、夜は居酒屋、黒板のメニュー、おまかせのおばんざい3種600円 (苦手なものを聞いてくれる)、鯖の西京焼き580円、鶏の唐揚げ350円、Kinzan のチャーシュー、お酒500円から、伏見の日本酒、ポテトサラダに半熟卵、れんこんの青のり和え、長芋のたまり漬け、はもと梅肉、さわらの刺身、料理屋で16年の板前。',
      confidence: 'low', sources: [TB, R + 'B510872139/', R + 'B514247289/', R + 'B514380602/', R + 'B514936961/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order the omakase obanzai plate if unsure — the chef asks about dislikes. Bring cash or PayPay. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区榎木町99-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated July 2025 to January 2026.' },
    pin_source: `Tabelog ${TB} (35.012534, 135.767310); cross-checked: GSI 京都府京都市中京区榎木町99番地 (lot) 57m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510872139/'],
    price_note: 'Prices from July 2025.', last_checked: TODAY, items: [
      it('', '', 'Omakase obanzai plate (three kinds)', '¥600', 'Obanzai', 'no', 'no', 'July 2025.', 'obanzai3'),
      it('', '', 'Saba saikyo-miso', '¥580', 'Grill', 'no', 'no', 'July 2025.', 'saba_saikyo'),
      it('', '', 'Chicken karaage', '¥350', 'Fried', 'no', 'no', 'July 2025.', 'karaage'),
    ] }, {
    cuisine: '夜だけの小さなおばんざいの居酒屋・ゴーヤのごま和え、なすの煮物、トマトのかつお酢漬けのおまかせおばんざい3種600円 (2025年7月)・鯖の西京焼き580円、鶏の唐揚げ350円、Kinzan のチャーシュー (2025年7月)・れんこんの青のり和え、長芋のたまり漬け、はもと梅肉、さわらの刺身 (2025年9月)・半熟卵のポテトサラダ (2025年9月)・お酒500円から、伏見の日本酒 (2025年の口コミ)',
    neighborhood: '寺町、京都市役所の裏',
    gf_detail: 'グルテンフリーではない。醤油で味付けしたおばんざい、鯖の西京焼き、鶏の唐揚げ、長芋のたまり漬け、ラーメン店のチャーシュー (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。かつお酢や出汁の料理、魚、鶏、豚 (2025年の口コミ)。',
    notes: '[おばんざいの居酒屋・市役所裏] 京都市役所の裏、昼はラーメンの Kinzan の店を夜に使う小さなカウンターの居酒屋。おまかせのおばんざい3種600円、はもと梅肉などの季節の魚、鯖の西京焼き、Kinzan のチャーシュー、伏見の酒が500円から。日曜休み、深夜0時まで。',
  });
}

// ================================================================ Ale GION BEER KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039020/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '22:00']);
  put({
    id: 'kyoto_ale_gion_beer', name: 'Ale GION BEER KYOTO (エール ギオン ビア キョウト)', category: 'OMNI',
    lat: 35.001292, lng: 135.758141, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a craft-beer bar (barley and wheat beers, weizen); snacks are fries, karaage and fried stuffed eggplant (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the snacks include karaage and meat-stuffed eggplant (September 2026); fries and pickles are not described in detail.',
    hours_raw: 'Tue–Sun 15:00–22:00; closed Monday (open on a Monday holiday, closing the Tuesday after); may change (Tabelog). Cards, e-money and QR (Tabelog). A counter and three small tables (May 2025). About ten craft beers on tap, a three-beer flight about ¥2,000 (July 2026), and cans to take away (August 2025). English spoken (August 2025). A glass-fronted corner at Muromachi-Bukkoji, a short walk from Shijo Station (September 2024; May 2025, July 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Muromachi-Bukkoji — Shijo Karasuma',
    cuisine: 'Craft-beer bar of Gion Beer · about ten taps of its own contract-brewed beers and Kansai brews, from Kyoto Brewing and others (May 2025) · VENUS Mirai pear weizen ¥1,400 and SASSOUTO ¥1,300, regular size (February 2025) · three-beer flight about ¥2,000 (July 2026) · matcha drinks (June 2026) · Japanese whisky and wine (May 2025, July 2026) · truffle fries (April 2025), karaage, pickles, meat-stuffed fried eggplant (September 2026)',
    website: null, gmaps: gm('Ale GION BEER KYOTO'), menu_url: TB,
    notes: '[Craft beer · Shijo-Karasuma] A small glass-fronted corner bar at Muromachi-Bukkoji pouring about ten craft beers — Gion Beer’s own contract brews and Kansai breweries — by the regular glass or as a flight, with fries and karaage and cans to take away. English spoken. 15:00–22:00; closed Monday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a craft-beer bar opened 1 March 2023 by Gion Beer Co., which has its beers contract-brewed rather than running a brewery (May 2025, July 2026).',
      philosophy: null, specialty: 'Gion Beer originals and Kansai craft beer on tap.',
      anecdotes: [
        { text: 'A May 2025 visitor, stopping for an aperitif, tried a Gion Beer pear weizen and two Kyoto Brewing beers with fries at the counter.', source: R + 'B507882285/' },
        { text: 'An August 2025 pair found one staff member running the room smoothly in English, and bought cans to take home.', source: R + 'B515943686/' },
      ],
      japanese_sources_summary: '食べログ: ビアバー、下京区仏光寺通新町東入糸屋町229 横山ビル1F、火〜日15:00〜22:00、月曜休み (祝日の場合は翌火曜休み)、カード・電子マネー・QR 可、2023年3月1日オープン。口コミ (2025年2月〜2026年9月、英語): GION BEER の直営、醸造は委託、約10種のクラフトビール、自社と大阪・滋賀の銘柄、レギュラー1,300〜1,400円、3種の飲み比べ約2,000円、抹茶のお酒、ウイスキーとワイン、トリュフのフライドポテト、唐揚げ、漬物、なすの肉詰め揚げ、缶ビールの持ち帰り、英語で対応、カウンターと小さなテーブル3つ、室町仏光寺の角、ガラス張り。',
      confidence: 'medium', sources: [TB, R + 'B503393787/', R + 'B507781597/', R + 'B507882285/', R + 'B515943686/', R + 'B529480512/', R + 'B532090387/', R + 'B533956211/', R + 'B535655275/'] },
    cultural_comfort: { level: 'english', note: 'Staff handled international guests in English (August 2025). Ask for a flight to compare the taps.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区仏光寺通新町東入糸屋町229 横山ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.001292, 135.758053); GSI matched only the town 京都府京都市下京区糸屋町 (no lot), 57m — approximate; offset 8 m east from the Tabelog point so as not to stack on CURRY SHOP FAMILY 屋台0号店 (same building, 横山ビル 1F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B503393787/', R + 'B532090387/'],
    price_note: 'Prices from February 2025 and July 2026.', last_checked: TODAY, items: [
      it('', '', 'VENUS Mirai pear weizen, regular', '¥1,400', 'Beer', 'no', 'ask', 'February 2025; Gion Beer original.', 'venus_mirai'),
      it('', '', 'SASSOUTO, regular', '¥1,300', 'Beer', 'no', 'ask', 'February 2025.', 'sassouto'),
      it('', '', 'Three-beer flight', '¥2,000', 'Beer', 'no', 'ask', 'July 2026.', 'flight'),
      it('', '', 'Truffle fries', '', 'Food', 'ask', 'ask', 'April 2025.', 'truffle_fries'),
    ] }, {
    cuisine: 'GION BEER のクラフトビールのバー・委託醸造の自社ビールとKYOTO BREWING などの関西のビール約10種 (2025年5月)・レギュラーサイズで VENUS Mirai の洋梨のヴァイツェン1,400円、SASSOUTO 1,300円 (2025年2月)・3種の飲み比べ約2,000円 (2026年7月)・抹茶のお酒 (2026年6月)・ウイスキーとワイン (2025年5月・2026年7月)・トリュフのフライドポテト (2025年4月)、唐揚げ、漬物、なすの肉詰め揚げ (2026年9月)',
    neighborhood: '室町仏光寺。四条烏丸',
    gf_detail: 'グルテンフリーではない。クラフトビールのバー (大麦や小麦のビール、ヴァイツェン)。つまみはフライドポテト、唐揚げ、なすの肉詰め揚げ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。つまみに唐揚げやなすの肉詰め (2026年9月)。フライドポテトや漬物の詳細はない。',
    notes: '[クラフトビール・四条烏丸] 室町仏光寺のガラス張りの小さな角のバー。GION BEER の委託醸造のビールと関西のビールなど約10種をグラスや飲み比べで。フライドポテトや唐揚げ、缶の持ち帰りも。英語で対応。15:00〜22:00、月曜休み。',
  });
}

save();
