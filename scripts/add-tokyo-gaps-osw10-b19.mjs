// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 19.
//   + 慈雨 JIU (11-seat Arakicho wine bar run by its owner alone: vegetable obanzai with a global twist, natural and Georgian wines)
//   + ジュー ドゥ マルシェ Jour de Marche (8-seat private French by owner-chef Naoko Enomoto; two groups a day, omakase only)
//   + ウニラーメン専門店 uniRA (20-seat sea-urchin ramen and rum bar, one-person operation; no ramen block — see report)
//   + キッチン たか Kitchen Taka (6-seat counter yoshoku since 2011: hamburg steak, pork sauté, tomato beef; cash only)
//   - 13011181 鳥元 市ヶ谷店 skipped: Torigen, a yakitori chain (12+ shops on a Tabelog name search).
//   - 13139013 桔梗 坂町店 skipped: the Menya Kikyo tsukemen brand — Hatsudai honten, Numabukuro, Ichigaya, Ningyocho, Sakamachi
//     and more on a Tabelog name search (5+), so a chain.
//   Chain check. JIU, Jour de Marche, uniRA (the Enoshima "Uni no Ie uniRA" shares a name; not verified as the same operator)
//   and Kitchen Taka: one Tokyo listing each. None is in data/tokyo.json (grep by name, Tabelog id and address).
//   After save(): spreads two stacked clusters from batches 1–2 (coordinator request, 2026-11-02) — see the end of the file.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
import { readCity, writeCity } from './lib-city.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13011181', '鳥元 市ヶ谷店 — Torigen, a yakitori chain (12+ shops on a Tabelog name search: Shinjuku Nishiguchi, Yaesu, Kawasaki, Kashiwa, Kanda Jinbocho and others); not researched.');
skip('13139013', '桔梗 坂町店 — the Menya Kikyo tsukemen brand: Hatsudai honten, Numabukuro, Asagaya, Ichigaya, Ningyocho and Sakamachi listings on a Tabelog name search (5+), a chain; not researched.');

// ================================================================ 慈雨 JIU
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13296498/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://arakicho-jiu.com/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'tokyo_jiu_arakicho', name: '慈雨 (JIU)', category: 'OMNI',
    lat: 35.688382, lng: 139.722543, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Small vegetable dishes dominate, but the menu also has prawn toast, frittata and soy-pickled vegetables; nothing gluten-free is described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The five-kind vegetable obanzai plate changes daily (e.g. broccoli hummus, tomato with vegetable dressing, mushroom salad, burdock kinpira with balsamic); some dishes use bacon, miso, eggs or fish, and no dashi-free statement is given.',
    hours_raw: 'Mon, Tue, Thu–Sun and holidays 18:00–24:00; closed Wednesday and two Tuesdays a month, posted on Instagram (Tabelog). Reservations taken; private room for 5 or more; whole-shop hire from 6 (Tabelog). ¥550 cover (Tabelog). Cards, e-money and QR accepted (Tabelog). 11 seats: 5 at the counter, 6 at a table in a separate room; non-smoking; up a steep stair (Tabelog; 2025 reviews). Run by the owner alone, so it can be hectic when busy (2025–26 reviews). Opened 20 April 2024 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yotsuya 3-2-7, 2F, a few steps into Shakumon-dōri from Shinjuku-dōri (small sign, steep stair) — 3 min from Yotsuya-sanchome Stn (Exit 4)',
    cuisine: 'Wine bar of vegetable obanzai with an international twist, and natural wines chosen by the owner — Georgian orange wines especially, plus Japanese and rare European wines and wine-like sakes (Tabelog; 2025–26 reviews) · today\'s vegetable plate, five kinds, about ¥1,500–2,000; meatball and Chinese-cabbage soup ¥800; shungiku and bacon frittata ¥650; prawn toast with plum sauce ¥790; simmered salted buri with daikon ¥880; strawberry with white miso, broccoli hummus, potato salad (2025–26 reviews) · the "JIU course" of six small dishes (November 2025) · wine about ¥900–1,600 a glass; bottled Heartland beer ¥700 (2025–26 reviews)',
    website: SITE, gmaps: gm('慈雨 JIU 荒木町'), menu_url: null,
    notes: "[Wine bar · Arakicho, vegetable obanzai and orange wine from a one-woman bar] Up a steep stair just off Shakumon-dōri, in the old geisha quarter of Arakicho, a calm eleven-seat room where the owner cooks and pours alone: a daily plate of five vegetable obanzai with a gentle, slightly global touch — broccoli hummus, strawberry with white miso, burdock kinpira with balsamic — then soups, prawn toast or simmered buri, with natural wines by the glass, Georgian orange wine above all. Regulars come alone for the conversation; when a group fills the room, things slow down. About ¥4,000–8,000 a head; closed Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Owner, runs the bar alone (2025–26 reviews)'], origin: 'Opened 20 April 2024 (Tabelog).',
      background: 'No source names the owner. Reviewers: "A unique dining bar run by a female owner" who "seemingly decided to open a bar after getting to know the importer of [the owner\'s] favorite natural wines" (January 2025); "run by a madam who operates solo, serving creative dishes inspired by obanzai" (April 2025); "Since it was a one-person operation, it might get hectic when busy" (November 2025); "The owner was managing everything [alone]" (June 2026). Tabelog (shop text): seasonal vegetable obanzai with international flavours and natural wines chosen by the owner, especially orange wine from Georgia.',
      philosophy: null, specialty: 'Vegetable obanzai plate; natural and Georgian orange wines.',
      anecdotes: [
        { text: '"I often stop by this place because it\'s comfortable even when I\'m alone. They have a great selection of natural wines, including various unique orange wines." — February 2025.', source: R + 'B486373861/' },
        { text: '"The \'Gobou no Balsamico Kinpira.\' The nutty aroma of burdock root combined beautifully with the balsamic\'s mild acidity and richness." — February 2026.', source: R + 'B522767701/' },
        { text: '"The owner was managing everything [alone], so it seemed a bit challenging when a group came in." — June 2026.', source: R + 'B531280379/' },
      ],
      japanese_sources_summary: '食べログ: 慈雨 (JIU)、ダイニングバー・創作料理・ワインバー、四谷3-2-7 2F、四谷三丁目駅4番出口から徒歩3分、月・火・木〜日・祝18:00〜24:00、水曜休み (火曜も月2回休み、インスタグラムで告知)、予約可、個室は5名から、チャージ (お通し代) 550円、カード・電子マネー・QR可、11席、禁煙、2024年4月20日オープン、季節の野菜のおばんざい、店主が選ぶ自然派ワイン、ジョージアのオレンジワイン。口コミ(2025年〜2026年): 店主がひとりで営む、野菜のおばんざい5種、肉団子と白菜のスープ、春菊とベーコンのフリッタータ、海老トースト、急な階段、ひとりでも入りやすい。',
      confidence: 'medium', sources: [TB, SITE, R + 'B486373861/', R + 'B499643202/', R + 'B503048471/', R + 'B504652745/', R + 'B506045452/', R + 'B507761922/', R + 'B516618935/', R + 'B517307563/', R + 'B522743806/', R + 'B522767701/', R + 'B531034715/', R + 'B531280379/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter where the owner explains the wines; easy to visit alone.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都新宿区四谷3-2-7 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own website; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.688382, 139.722543); cross-checked: GSI 東京都新宿区四谷三丁目2番地 (lot) 41m (the query 四谷3-2-7 alone resolves wrongly to 四谷三栄町); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B499643202/', R + 'B531280379/'],
    price_note: 'Prices from 2025–26 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', "Today's vegetable obanzai, 5 kinds", '¥1,500', 'Obanzai', 'ask', 'ask', 'January 2025 review (about ¥2,000 in June 2026).', 'obanzai_5'),
      it('', '', 'Prawn toast with plum sauce', '¥790', 'Small dishes', 'no', 'no', 'January 2025 review.', 'prawn_toast'),
      it('', '', 'Shungiku and bacon frittata', '¥650', 'Small dishes', 'ask', 'no', 'January 2025 review.', 'frittata'),
      it('', '', 'Simmered salted buri with daikon', '¥880', 'Small dishes', 'ask', 'no', 'January 2025 review.', 'buri_daikon'),
    ] }, {
    cuisine: '世界の味をひとひねりした野菜のおばんざいと、店主が選ぶ自然派ワインのワインバー。特にジョージアのオレンジワイン、日本ワイン、珍しいヨーロッパのワイン、ワインのような日本酒も (食べログ、2025〜26年の口コミ)・本日の野菜のおばんざい5種で約1,500〜2,000円、肉団子と白菜のスープ800円、春菊とベーコンのフリッタータ650円、海老トーストの梅ソース790円、塩ぶりと大根の煮物880円、いちごの白味噌和え、ブロッコリーのフムス、ポテトサラダ (2025〜26年の口コミ)・小皿6品の「JIU コース」(2025年11月)・ワインはグラス約900〜1,600円、瓶のハートランド700円 (2025〜26年の口コミ)',
    neighborhood: '四谷3-2-7 2F、新宿通りから Shakumon 通りに少し入ったところ (小さな看板、急な階段)。四谷三丁目駅4番出口から徒歩3分',
    gf_detail: '要確認。野菜の小皿が中心だが、海老トースト、フリッタータ、醤油漬けもある。グルテンフリーの記述はない。',
    vegan_detail: '要確認。野菜のおばんざい5種は日替わり (例えばブロッコリーのフムス、トマトの野菜ドレッシング、きのこのサラダ、ごぼうのバルサミコきんぴら)。ベーコン、味噌、卵、魚を使う料理もあり、出汁を使わないという記述はない。',
    notes: '[ワインバー・荒木町、女性店主がひとりで営む野菜のおばんざいとオレンジワイン] 昔の花街、荒木町の Shakumon 通りを少し入った急な階段の上にある、11席の落ち着いた店。店主がひとりで料理を作りワインを注ぐ。日替わりの野菜のおばんざい5種は、ブロッコリーのフムス、いちごの白味噌和え、ごぼうのバルサミコきんぴらと、やさしい味に少し世界の味を加えたもの。続いてスープ、海老トースト、ぶりの煮物、グラスの自然派ワイン、なかでもジョージアのオレンジワイン。常連はひとりで来て店主との会話を楽しむ。団体で埋まると料理は遅くなる。1人約4,000〜8,000円、水曜休み。',
  });
}

// ================================================================ ジュー ドゥ マルシェ
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13180585/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['12:00', '15:00'], ['18:00', '23:00']); const D = day(['18:00', '23:00']);
  put({
    id: 'tokyo_jour_de_marche_akebonobashi', name: 'ジュー ドゥ マルシェ (Jour de Marche)', category: 'MOM_AND_POP',
    lat: 35.691635, lng: 139.72611, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: the restaurant asks about dislikes and allergies in advance because it serves only an omakase course (Tabelog). Courses have included puff pastry and macarons.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase of fish, foie gras and meat; one non-sweet-eater was given cheese and prosciutto in place of dessert (December 2025), so ask about requests when booking.',
    hours_raw: 'Lunch 12:00–15:00 (last order 12:00) Tue, Fri, Sat and Sun; dinner 18:00–23:00 (last order 20:00) every day but Wednesday; closed Wednesday and the second Tuesday of the month (Tabelog). Reservation only; lunch booked at least three days ahead; omakase course only, dislikes and allergies asked in advance; no reservations of children\'s seats only (Tabelog). At most two groups a day; private hire at lunch from 2 guests and at dinner from 5 (Tabelog). Dogs up to about 8 kg welcome on the fourth Sunday of the month and the following Monday (Tabelog). Cards and PayPay; no service charge (Tabelog). 8 seats: an open-kitchen counter and tables (Tabelog; December 2025). About ¥15,000–20,000 a head; Christmas courses ¥30,000–40,000 (Tabelog; reviews).',
    hours: { 0: D, 1: LD, 3: D, 4: LD, 5: LD, 6: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yotsuya Sakamachi 12-11, BITEN 1F — 3 min from Akebonobashi Stn (Exit A4), 8 min from Yotsuya-sanchome Stn',
    cuisine: 'French omakase of seasonal ingredients, cooked and served by the owner-chef alone, with wine pairings (Tabelog; 2025 reviews) · signature black-rice risotto (with truffle, shrimp or lobster), red-fleshed daikon, puff-pastry pie of saury and shiitake, three amuse-bouches such as foie-gras macarons with raspberry, Aomori duck breast, Ezo venison, ayu confit in summer, homemade pudding and ices (2024–26 reviews) · good non-alcoholic drinks (August 2025)',
    website: null, gmaps: gm('ジュー ドゥ マルシェ 四谷坂町'), menu_url: null,
    notes: "[French · Akebonobashi, a two-tables-a-night French kitchen] An eight-seat restaurant on a quiet Yotsuya Sakamachi street where owner-chef Naoko Enomoto cooks, pours and serves alone, for at most two groups a day. The omakase opens with three delicate amuse-bouches — foie-gras macarons with raspberry among them — and always includes the signature black-rice risotto, crowned with truffle, shrimp or lobster; puff pastry, Aomori duck and seasonal fish follow, with wines matched by the glass and good non-alcoholic options. Regulars (one counts seventeen visits) praise the precision and the chef's shy warmth. Booking only; lunch three days ahead; dogs welcome one weekend a month; about ¥15,000–20,000.",
    chef_bio: { chef_name: 'Naoko Enomoto', roles: ['Owner-chef (Tabelog; reviews)'], origin: null,
      background: 'Tabelog (shop text): "Chef Enomoto will personally handle all the dishes and drinks… Our owner-chef will warmly welcome you." Reviewers: "Jour de Marche, a French restaurant filled with the elegant and refined sensibility of Chef Naoko Enomoto" (December 2024); "Currently, the owner-chef runs the restaurant alone, so the seating is limited" (August 2025); "Although the chef operates solo, the dishes and paired wines were served smoothly" (December 2025). Only the romanised name is given; the kanji are not.',
      philosophy: null, specialty: 'Black-rice risotto; puff-pastry pie; amuse-bouche trio.',
      anecdotes: [
        { text: '"I heard from the chef that they received the best duck ever, so I came to enjoy the winter menu… As always, the chef prepared the dishes with a warm, slightly shy smile." — December 2024, a third visit.', source: R + 'B479517908/' },
        { text: '"For dessert, since I\'m not a fan of sweets, [the chef] prepared cheese and prosciutto for me." — December 2025.', source: R + 'B519526968/' },
        { text: '"I love the signature black rice and truffle risotto, and in summer, the confit sweetfish is my favorite." — August 2025.', source: R + 'B512096081/' },
      ],
      japanese_sources_summary: '食べログ: ジュー ドゥ マルシェ、フレンチ、四谷坂町12-11 BITEN 1F、曙橋駅A4出口から徒歩3分、四谷三丁目駅4番出口から8分、昼12:00〜15:00 (火・金・土・日)、夜18:00〜23:00 (L.O.20:00)、水曜と第2火曜休み、完全予約制、ランチは3日前まで、おまかせのコースのみで苦手な食材やアレルギーは事前に、1日2組まで、第4日曜とその翌月曜は8kgくらいまでの犬も可、カード・PayPay可、サービス料なし、8席。口コミ(2024年〜2026年): オーナーシェフがひとりで料理とワインを担当、黒米のリゾット、パイ包み、フォアグラのマカロン、青森の鴨、ワインのペアリング、ノンアルコールも充実。',
      confidence: 'medium', sources: [TB, R + 'B479517908/', R + 'B494861746/', R + 'B495125954/', R + 'B498961263/', R + 'B511461607/', R + 'B512096081/', R + 'B513830554/', R + 'B519526968/', R + 'B519731377/', R + 'B526781820/', R + 'B530269468/', R + 'B91741891/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase booked ahead; dislikes and allergies asked at booking.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都新宿区四谷坂町12-11 BITEN 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with current rules; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.691635, 139.72611); cross-checked: GSI 東京都新宿区四谷坂町12番11号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B91741891/'],
    price_note: 'No published prices; reviewers spend about ¥15,000–20,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (with black-rice risotto)', '', 'Course', 'ask', 'no', 'Tabelog; 2024–26 reviews.', 'omakase'),
    ] }, {
    cuisine: '季節の食材のフレンチのおまかせで、オーナーシェフがひとりで料理と給仕をし、ワインのペアリングも (食べログ、2025年の口コミ)・名物の黒米のリゾット (トリュフ、海老、オマール)、中が赤い大根、サンマとしいたけのパイ包み、フォアグラとフランボワーズのマカロンなど3種のアミューズ、青森の鴨の胸肉、エゾ鹿、夏は鮎のコンフィ、自家製のプリンやアイス (2024〜26年の口コミ)・ノンアルコールの飲み物も充実 (2025年8月)',
    neighborhood: '四谷坂町12-11 BITEN 1F、静かな通り。曙橋駅A4出口から徒歩3分、四谷三丁目駅から8分',
    gf_detail: '予約時に要確認: おまかせのコースのみなので、苦手な食材やアレルギーを事前に聞かれる (食べログ)。コースにはパイやマカロンも出る。',
    vegan_detail: 'ヴィーガンではない。魚、フォアグラ、肉のおまかせ。甘いものが苦手な客にデザートの代わりにチーズと生ハムを出した例もあり (2025年12月)、希望は予約時に相談を。',
    notes: '[フレンチ・曙橋、1日2組の小さなフレンチ] 四谷坂町の静かな通りにある8席の店で、オーナーシェフがひとりで料理し、ワインを注ぎ、給仕する。お客は1日2組まで。おまかせは繊細な3種のアミューズ (フォアグラとフランボワーズのマカロンなど) に始まり、名物の黒米のリゾットにはトリュフ、海老、オマールがのる。パイ包み、青森の鴨、季節の魚と続き、ワインはグラスで合わせ、ノンアルコールも充実。17回通った常連もいて、丁寧な仕事とシェフのはにかんだ笑顔をほめる。完全予約制、ランチは3日前まで、月に一度は犬も可、1人約15,000〜20,000円。',
  });
}

// ================================================================ ウニラーメン専門店 uniRA
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13298190/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:30'], ['17:00', '21:00']); const WE = day(['11:30', '15:30']);
  put({
    id: 'tokyo_unira_uni_ramen_arakicho', name: 'ウニラーメン専門店 uniRA (Uni Ramen Senmonten uniRA)', category: 'OMNI',
    lat: 35.688638, lng: 139.722614, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: yellow curly wheat noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sea-urchin broth, chashu, oysters.',
    hours_raw: 'Wed–Fri 11:30–14:30 and 17:00–21:00; Sat, Sun and holidays 11:30–15:30; closed Monday and Tuesday except by reservation (Tabelog). Reservations and pre-orders through the shop\'s LINE account (link on Instagram); reserved guests have priority; bowls are made four at a time (Tabelog; December 2025). Fresh uni toppings can sell out by the afternoon (October and December 2025); one diner found it closed soon after evening opening (March 2026). PayPay only; no cards or e-money (Tabelog). 20 seats: 8 at the counter and tables, which may be used for waiting when busy; non-smoking; up a steep stair (Tabelog; July 2025). Opened 6 June 2024 (Tabelog).',
    hours: { 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Arakichō 3-3, 2F, up a steep stair — 3 min from Yotsuya-sanchome Stn',
    cuisine: 'Sea-urchin ramen in a bar setting (Tabelog; reviews) · uni ramen standard ¥1,650 with seasoned egg and chashu; simple uni ramen ¥1,200–1,430; uni ramen black with rock seaweed and grilled oysters; large +¥150–165; cheese +¥220; uni miso +¥330; extra fresh uni such as Rishiri bafun uni when available (2025–26 reviews) · squid-ink rice ¥110–220 to turn the last of the broth into a risotto (2025 reviews) · yellow curly high-hydration noodles (October 2025) · over 100 rums, cocktails and beer (July 2025)',
    website: null, gmaps: gm('ウニラーメン専門店 uniRA 荒木町'), menu_url: null,
    notes: "[Ramen · Arakicho, sea-urchin ramen in a rum bar] Up a steep Arakicho stair, a bar with Caribbean music and a wall of more than a hundred rums where the owner, alone, makes ramen in a sea-urchin broth: the standard ¥1,650 bowl with egg and chashu, a black version with rock seaweed and grilled oysters, extra fresh uni when it hasn't sold out, and squid-ink rice to finish the broth as risotto. Reviews split — some find a rich, oceanic uni flavour, others could barely taste it or found the broth thin. Bowls are made four at a time, so expect to wait; booking on LINE gets priority. PayPay only; closed Mondays and Tuesdays.",
    chef_bio: { chef_name: null, roles: ['Owner, runs the shop alone (2025 reviews)'], origin: 'Opened 6 June 2024 (Tabelog).',
      background: 'No source names the owner. Reviewers: "The owner was managing everything on [the owner\'s] own" (July 2025); "As it was a one-person operation, I had to get my own water" (July 2025); "I learned from the menu that they offer over 100 types of RUM" (July 2025); featured on the TV programmes "Ad Street" and "King\'s Brunch" (October 2025, as machine-translated).',
      philosophy: null, specialty: 'Uni ramen; uni ramen black.',
      anecdotes: [
        { text: '"The broth was incredibly rich, and the moment it hit my mouth, the taste of uni spread out." — December 2025, after booking on LINE.', source: R + 'B520159861/' },
        { text: '"Honestly, I couldn\'t detect the flavor of uni at all. Also, the broth was thinner than I imagined… The chashu, in particular, was exceptional!" — October 2025.', source: R + 'B514999831/' },
        { text: '"The interior has a strong Malibu bar vibe, with Caribbean music playing in the background." — July 2025.', source: R + 'B510923170/' },
      ],
      japanese_sources_summary: '食べログ: ウニラーメン専門店 uniRA、ラーメン、荒木町3-3 2F、水〜金11:30〜14:30・17:00〜21:00、土日祝11:30〜15:30、月・火休み (予約のみ)、予約は公式LINE (インスタグラムにリンク)、予約優先、4杯ずつ作る、PayPay可、カード・電子マネー不可、20席、禁煙、2024年6月6日オープン。口コミ(2025年〜2026年): ウニラーメン スタンダード1,650円、ブラック (岩海苔、牡蠣)、大盛り、チーズ、ウニ味噌、イカスミご飯で締め、黄色い縮れ麺、ラムが100種以上、店主ひとり、ウニの味が濃いという声と薄いという声。',
      confidence: 'medium', sources: [TB, R + 'B509918669/', R + 'B510133496/', R + 'B510923170/', R + 'B512323757/', R + 'B514999831/', R + 'B515236106/', R + 'B516112418/', R + 'B516964235/', R + 'B518647554/', R + 'B520159861/', R + 'B520768925/', R + 'B524263226/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu in a leather book at the table; booking and pre-order on LINE.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都新宿区荒木町3-3 2F',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing with current hours; the newest fetched review is from March 2026.' },
    pin_source: `Tabelog ${TB} (35.688638, 139.722614); cross-checked: GSI 東京都新宿区荒木町3番地 (lot) 41m. Sushi Cho and Shoan (荒木町3) are 13–14 m east; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B518647554/', R + 'B515236106/', R + 'B524263226/'],
    price_note: 'Prices from 2025–26 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Uni ramen standard (egg, chashu)', '¥1,650', 'Ramen', 'no', 'no', 'December 2025 reviews.', 'uni_standard'),
      it('', '', 'Uni ramen, simple', '¥1,430', 'Ramen', 'no', 'no', 'March 2026 review (¥1,200 without toppings in October 2025).', 'uni_simple'),
      it('', '', 'Uni ramen black (rock seaweed, oysters)', '', 'Ramen', 'no', 'no', 'July and October 2025 reviews; price not given.', 'uni_black'),
      it('', '', 'Squid-ink rice', '¥220', 'Sides', 'ask', 'no', 'December 2025 review (¥110 in October 2025).', 'ikasumi_rice'),
    ] }, {
    cuisine: 'バーのような店のウニラーメン (食べログ、口コミ)・ウニラーメン スタンダード1,650円は味玉とチャーシュー付き、シンプルなウニラーメン1,200〜1,430円、岩海苔と焼いた牡蠣のウニラーメン ブラック、大盛り +150〜165円、チーズ +220円、ウニ味噌 +330円、あれば利尻のバフンウニなど生ウニの追加 (2025〜26年の口コミ)・残ったスープでリゾットにするイカスミご飯110〜220円 (2025年の口コミ)・黄色い多加水の縮れ麺 (2025年10月)・ラムが100種以上、カクテル、ビール (2025年7月)',
    neighborhood: '荒木町3-3 2F、急な階段の上。四谷三丁目駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。黄色い小麦の縮れ麺。',
    vegan_detail: 'ヴィーガンではない。ウニのスープ、チャーシュー、牡蠣。',
    notes: '[ラーメン・荒木町、ラムのバーでウニラーメン] 荒木町の急な階段を上ると、カリブの音楽が流れ、100種以上のラムが並ぶバー。店主がひとりでウニのスープのラーメンを作る。味玉とチャーシューのスタンダードが1,650円、岩海苔と焼き牡蠣のブラック、売り切れていなければ生ウニの追加、締めはイカスミご飯でスープをリゾットに。評価は分かれ、海の香りの濃いウニの味だという人もいれば、ウニの味がほとんどしない、スープが薄いという人も。4杯ずつ作るので待ち時間があり、LINE で予約すると優先。PayPay のみ、月・火休み。',
  });
}

// ================================================================ キッチン たか
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13130525/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://ouzak-urotaknet814.wixsite.com/kitchintaka';
  const WD = day(['11:00', '16:30']); const SAT = day(['11:00', '15:00']);
  put({
    id: 'tokyo_kitchen_taka_arakicho', name: 'キッチン たか (Kitchen Taka)', category: 'OMNI',
    lat: 35.688549, lng: 139.722549, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Hamburg steak and pork sauté come with demi-glace (usually thickened with flour) or other sauces; nothing gluten-free is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and seafood plates with miso soup.',
    hours_raw: 'Mon–Fri 11:00–16:30; Sat 11:00–15:00; closed Sunday and holidays, New Year and Obon (Tabelog). Some dishes are limited and sell out — the hamburg steak had gone by one September 2026 afternoon (Tabelog; September 2026). No reservations; take-out (Tabelog). Cash only (Tabelog). 6 counter seats; non-smoking; no preschool children (Tabelog). The menu asks for quiet dining, and masks while talking (2026 reviews). Opened 1 September 2011 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SAT }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Arakichō 3-1, on Shakumon-dōri just in from Shinjuku-dōri (near Mizuho Bank) — 4 min from Yotsuya-sanchome Stn (Exit 4)',
    cuisine: 'Yoshoku cooked to order, every plate with rice, miso soup and salad (Tabelog) · hamburg steak with a fried egg ¥1,700, with demi-glace or yuzu and grated-daikon ponzu; pork sauté with demi-glace ¥1,700 or lemon-garlic sauce ¥1,750; buttery shrimp pilaf ¥1,750; omurice with "black" demi-glace ¥1,750; tomato beef, the house signature; buttered oysters; ginger pork; large rice +¥200 (2026 reviews) · plates come with potato salad and shredded cabbage (2026 reviews)',
    website: SITE, gmaps: gm('キッチン たか 荒木町'), menu_url: null,
    notes: "[Yoshoku · Arakicho, a silent six-seat counter for hamburg steak] A worn little counter on Shakumon-dōri, open for weekday lunch into the afternoon, where everything is cooked to order: a thick hamburg steak seared crisp and fluffy inside under demi-glace and a fried egg, pork sauté with a sharp lemon-garlic sauce, a buttery shrimp pilaf, and the house tomato beef. Each plate comes with rice, miso soup and potato salad, at about ¥1,700. The owners, apparently a couple, barely speak and the menu asks diners to eat quietly — loved by solo regulars, chilly to others, and one diner found the tomato beef too salty. Cash only; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Run by a couple (July 2026 review)'], origin: 'Opened 1 September 2011 (Tabelog).',
      background: 'No source names the owners. Reviewers: "the couple who seemed to be the owners spoke only the bare minimum to each other" (July 2026); "a counter-only restaurant with two staff members" (September 2026); "the owner has a very quiet demeanor and doesn\'t speak much" (October 2026); "The owner was managing everything alone" (October 2026).',
      philosophy: 'All meals prepared fresh after you order (Tabelog, shop text).', specialty: 'Hamburg steak with fried egg; pork sauté; tomato beef.',
      anecdotes: [
        { text: '"The combination of crispy pork and tangy sauce is simply the best. Today, I added a spoon to ensure I enjoyed every bit of the sauce." — August 2026, pork sauté with lemon-garlic sauce.', source: R + 'B515568902/' },
        { text: '"I could hear the sound of the chef kneading the meat mixture and releasing the air, and as it was cooked slowly, a wonderful aroma filled…" — October 2026.', source: R + 'B537246884/' },
        { text: '"Upon entering, there was no greeting, and when I finished my meal and settled the bill, there was no acknowledgment either." — October 2026, tomato beef.', source: R + 'B537487979/' },
      ],
      japanese_sources_summary: '食べログ: キッチン たか、洋食・ハンバーグ・オムライス、荒木町3-1、四谷三丁目駅4番出口から徒歩4分、月〜金11:00〜16:30、土11:00〜15:00、日祝休み、年末年始とお盆休み、数量限定の料理あり、予約不可、カード・電子マネー・QR不可、カウンター6席、禁煙、未就学児不可、2011年9月1日オープン、注文を受けてから作る洋食、ご飯・味噌汁・サラダ付き。口コミ(2026年): 目玉焼きのせハンバーグ1,700円、ポークソテー1,700円、レモンガーリックソース1,750円、海老ピラフ1,750円、オムライス1,750円、トマトビーフ、夫婦らしい二人、静かに食べるお願い、愛想がないという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B440753257/', R + 'B476929457/', R + 'B515568902/', R + 'B532696126/', R + 'B532818650/', R + 'B535594322/', R + 'B535673074/', R + 'B536887754/', R + 'B537110839/', R + 'B537246884/', R + 'B537487979/', R + 'B538250059/'] },
    cultural_comfort: { level: 'japanese', note: 'Quiet dining asked for; the owners speak little; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区荒木町3-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.688549, 139.722549); cross-checked: GSI 東京都新宿区荒木町3番地 (lot) 47m. uniRA (荒木町3-3) is 12 m away and JIU (四谷3-2-7) 19 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535673074/', R + 'B515568902/', R + 'B532818650/', R + 'B535594322/'],
    price_note: 'Prices from August–October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Hamburg steak with fried egg', '¥1,700', 'Set meals', 'ask', 'no', 'September–October 2026 reviews.', 'hamburg'),
      it('ポークソテー', '', 'Pork sauté (demi-glace)', '¥1,700', 'Set meals', 'ask', 'no', 'October 2026 review.', 'pork_saute'),
      it('', '', 'Pork sauté with lemon-garlic sauce', '¥1,750', 'Set meals', 'ask', 'no', 'August 2026 review.', 'pork_lemon'),
      it('', '', 'Shrimp pilaf', '¥1,750', 'Set meals', 'ask', 'no', 'August 2026 review.', 'ebi_pilaf'),
      it('', '', 'Omurice with black (demi-glace) sauce', '¥1,750', 'Set meals', 'ask', 'no', 'September 2026 review.', 'omurice'),
    ] }, {
    cuisine: '注文を受けてから作る洋食で、どれもご飯、味噌汁、サラダ付き (食べログ)・目玉焼きのせハンバーグ1,700円はデミグラスか柚子と大根おろしのポン酢、デミグラスのポークソテー1,700円かレモンガーリックソース1,750円、バターたっぷりの海老ピラフ1,750円、「黒い」デミグラスのオムライス1,750円、看板のトマトビーフ、牡蠣のバターソテー、生姜焼き、ご飯大盛り +200円 (2026年の口コミ)・皿にはポテトサラダと千切りキャベツ (2026年の口コミ)',
    neighborhood: '荒木町3-1、新宿通りから Shakumon 通りに入ってすぐ (みずほ銀行の近く)。四谷三丁目駅4番出口から徒歩4分',
    gf_detail: '要確認。ハンバーグやポークソテーにはデミグラス (ふつうは小麦粉でとろみをつける) などのソース。グルテンフリーの記述はない。',
    vegan_detail: 'ヴィーガンではない。肉や魚介の皿に味噌汁。',
    notes: '[洋食・荒木町、静かな6席のハンバーグのカウンター] Shakumon 通りの古びた小さなカウンターで、平日は昼から夕方まで。どれも注文を受けてから作る。外は香ばしく中はふっくらの厚いハンバーグにデミグラスと目玉焼き、酸味のきいたレモンガーリックソースのポークソテー、バターたっぷりの海老ピラフ、看板のトマトビーフ。ご飯、味噌汁、ポテトサラダ付きで1,700円前後。夫婦らしい店主はほとんど話さず、メニューには静かに食べるようにとのお願い。ひとりで来る常連には好評だが、冷たく感じる人もいて、トマトビーフがしょっぱかったという声も。現金のみ、日曜休み。',
  });
}

save();

// ================================================================ spread stacked pins from batches 1–2
// Coordinator request 2026-11-02: these block pins were 0.5–2.2 m apart (check-stacked-pins). Each gets a fixed spot about 5 m
// from its neighbours; re-running sets the same coordinates and adds the note only once (idempotent).
{
  const NOTE = 'Spread about 5 m from the other block pins in the building (osw10-19, 2026-11-02; check-stacked-pins).';
  const SPOTS = {
    tokyo_unicoco_yotsuya:        [35.68657, 139.728932],  // kept at its Tabelog point
    tokyo_oliva_vava_yotsuya:     [35.68657, 139.728987],  // 5 m east of unico-co (same 3F)
    tokyo_torinokura_yotsuya:     [35.686525, 139.728932], // 5 m south of unico-co (2F)
    tokyo_uramen_baba_yotsuya:    [35.686498, 139.728728], // kept at its Tabelog point
    tokyo_spaghetti_nagai_yotsuya:[35.686498, 139.728673], // 5 m west of BABA
  };
  const t = readCity('tokyo'); let moved = 0;
  for (const [id, [lat, lng]] of Object.entries(SPOTS)) {
    const p = t.places.find(x => x.id === id); if (!p) { console.log(`spread: ${id} not found`); continue; }
    if (p.lat !== lat || p.lng !== lng) { p.lat = lat; p.lng = lng; moved++; }
    if (!String(p.pin_source || '').includes('osw10-19')) p.pin_source = `${p.pin_source || ''} ${NOTE}`.trim();
  }
  writeCity('tokyo', t);
  console.log(`spread: ${moved} pins moved`);
}
