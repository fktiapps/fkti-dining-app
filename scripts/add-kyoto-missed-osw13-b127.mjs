// Kyoto priority (kyoto-missed), worker osw13, batch 127 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: WANDERERS STAND, 茶寮 器楽, CAMPO su OVEST, NOW & THEN. Brands checked against queue-status, data/kyoto.json, than.co.jp/brands and 株式会社WILL (none match).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-127');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26037252', 'chain: 焼肉ホルモンやる気 烏丸御池店 — five+ やる気 yakiniku shops in our Kyoto crawl (same call as 26034531)');
skip('26021820', 'retail food shop (Greg 11-07 ruling): 肉の荒井亭 is a neighbourhood butcher frying croquettes and cutlets to order for take-away (2013–2025 reviews); no seats listed, and no founding date or GF/vegan options are sourced');
skip('26016162', 'retail food shop (Greg 11-07 ruling): ファーマーズ is the bakery and bento counter inside an organic natural-food supermarket (2011–2026 reviews); no seating is described. Note for the coordinator: a November 2023 reviewer bought a gluten-free chickpea-flour curry bento there');

// ================================================================ WANDERERS STAND
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26028186/'; const R = TB + 'dtlrvwlst/';
  const A = ['08:30', '16:00'], F = ['11:00', '16:00'];
  put({
    id: 'kyoto_wanderers_stand', name: 'WANDERERS STAND', category: 'OMNI',
    lat: 34.995379, lng: 135.755273, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the food is thick homemade toast — fried-egg toast, French toast, cinnamon-banana toast, pizza toast (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: toasts with egg, butter and cheese; an oat-milk latte is available (December 2025), but no vegan food is mentioned.',
    hours_raw: 'Tabelog: Mon, Tue, Sat, Sun 8:30–16:00; Fri 11:00–16:00; closed Wednesday and Thursday; hours may change. No reservations. Write your order on a slip at the counter (English menu); drinks can be taken away, and you can eat in if you order food (August 2026). Payment: no cards or e-money; PayPay accepted (Tabelog), though one reviewer was told cash only (April 2025). Small: a counter facing the wall and a table at the back. Non-smoking. By the Gojo-Nishinotoin bus stop, 8–10 min from Gojo Station.',
    hours: { 0: [A], 1: [A], 4: [F], 5: [A], 6: [A] }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo-Nishinotoin — 8–10 min from Gojo',
    cuisine: 'A tiny breakfast coffee stand with an overseas feel, serving espresso drinks and thick homemade toast, popular with travellers (Tabelog; 2022–2026 reviews) · fried-egg toast on mashed potato with a sweet-chili sauce and nuts ¥600–650 (2025–2026) · cinnamon-banana toast ¥600; French toast; pizza toast (2022–2025) · drip coffee ¥550; café latte; oat café latte; café au lait (2025–2026)',
    website: null, gmaps: gm('WANDERERS STAND 五条'), menu_url: null,
    notes: '[Coffee stand · Gojo-Nishinotoin, toast breakfasts from 8:30] A small stand loved by travellers: chewy homemade toast topped with a fried egg over mashed potato and chili sauce, or cinnamon banana, with good drip coffee or lattes. About ¥1,200. Order on a slip. Closed Wed and Thu.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reviewers describe a small stand with a Southeast Asian or overseas feel and many foreign guests from nearby guesthouses (2022–2025). Criticisms: brusque service and a curt answer when asked for a Japanese menu (April and August 2025), and powdered sugar dusted over the cutlery (2025).',
      philosophy: null,
      specialty: 'Homemade toast; espresso drinks.',
      anecdotes: [
        { text: 'June 2026: "Underneath it was a layer of mashed potatoes. Additionally, a subtly sweet and spicy sauce along with the crunch of nuts added a delightful contrast, making each bite a new experience."', source: R + 'B529226163/' },
        { text: 'December 2024: "The atmosphere here makes you feel like you\'re overseas… It was a refreshing experience to write down my order on a napkin and hand it over."', source: R + 'B496891534/' },
        { text: 'April 2025: "Since no one greeted me, I stood in front of the counter table and was suddenly handed a piece of paper, told to write my order on it."', source: R + 'B504981636/' },
      ],
      japanese_sources_summary: '食べログ: WANDERERS、コーヒースタンド、下京区八百屋町58 イチハタビル1F、五条駅から徒歩10分、月・火・土・日8:30〜16:00、金11:00〜16:00、水・木休み、予約不可、カード・電子マネー不可、PayPay可、禁煙、カウンター。口コミ (2022年7月〜2026年8月、英語): 海外のような雰囲気の小さなコーヒースタンド、外国人客が多い、紙に注文を書く、英語のメニュー、目玉焼きトースト (マッシュポテト、スイートチリソース、ナッツ) 600〜650円、シナモンバナナトースト600円、フレンチトースト、ピザトースト、ドリップコーヒー550円、カフェラテ、オーツミルクのラテ、食事を頼めば店内で食べられる、接客がそっけないとの声 (2025年)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B452448365', 'B496891534', 'B504981636', 'B508562905', 'B509556116', 'B511133133', 'B515058092', 'B518450891', 'B529226163', 'B533300295'])) },
    cultural_comfort: { level: 'english_friendly', note: 'English menu; write your order on a slip; brusque service reported.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区八百屋町58 イチハタビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to August 2026.' },
    pin_source: `Tabelog ${TB} (34.995379, 135.755273); GSI lot 京都府京都市下京区八百屋町58番地 about 13m away; nearest pin kyoto_tomte_gojo 43.6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515058092/', R + 'B533300295/', R + 'B509556116/'],
    price_note: 'Prices from July 2025 – August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Fried-egg toast', '¥600–650', 'Toast', 'no', 'no', '2025–2026.', 'fried_egg_toast'),
      it('', '', 'Cinnamon-banana toast', '¥600', 'Toast', 'no', 'no', 'October 2025.', 'banana_toast'),
      it('', '', 'Drip coffee', '¥550', 'Drink', 'ask', 'ask', 'July 2025 and August 2026.', 'drip_coffee'),
      it('', '', 'Oat café latte', '', 'Drink', 'ask', 'ask', 'December 2025.', 'oat_latte'),
    ] }, {
    cuisine: '旅行者に人気の、海外のような雰囲気の小さな朝のコーヒースタンド。エスプレッソと厚切りの自家製トースト (食べログ、2022〜2026年の口コミ)・マッシュポテトとスイートチリソース、ナッツの目玉焼きトースト600〜650円 (2025〜2026年)・シナモンバナナトースト600円、フレンチトースト、ピザトースト (2022〜2025年)・ドリップコーヒー550円、カフェラテ、オーツミルクのラテ、カフェオレ (2025〜2026年)',
    neighborhood: '五条西洞院。五条から徒歩8〜10分',
    gf_detail: 'グルテンフリーではない: 料理は厚切りの自家製トースト (目玉焼き、フレンチトースト、シナモンバナナ、ピザトースト) (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 卵、バター、チーズのトースト。オーツミルクのラテはある (2025年12月) が、ヴィーガンの料理の記載はない。',
    notes: '[コーヒースタンド・五条西洞院、8時半からトーストの朝食] 旅行者に愛される小さなスタンド。マッシュポテトとチリソースに目玉焼きをのせたもちもちの自家製トーストや、シナモンバナナを、おいしいドリップコーヒーやラテとともに。1,200円ほど。注文は紙に書いて。水・木休み。',
  });
}

// ================================================================ 茶寮 器楽
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26026692/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '17:30']);
  put({
    id: 'kyoto_saryo_kiraku', name: '茶寮 器楽 (Saryo Kiraku)', category: 'OMNI',
    lat: 34.995389, lng: 135.782599, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soba with sesame sauce, yuba soba in a thickened broth, tiramisu and a sweets platter with mitarashi dango (2024–2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba broths with dashi, mascarpone tiramisu, ice cream and milk lattes (2024–2026 reviews).',
    hours_raw: 'Tabelog: daily 9:00–17:30; hours may change. Reservations taken; a 20–30 minute wait at busy times (November 2025, August 2026). 50 seats, some by windows. Cards (JCB, AMEX, Diners), e-money and QR codes. On the 2nd floor of the Asahido main shop, a Kiyomizu pottery store, just below the Kiyomizu-dera steps.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyomizu-zaka, just below the temple steps',
    cuisine: 'A quiet tea room above a Kiyomizu pottery shop, serving Japanese sweets, matcha drinks and soba on the shop\'s own ceramics (Tabelog; 2024–2026 reviews) · matcha tiramisu with chestnuts; matcha-and-tiramisu set (2024–2025) · sweets gozen: mitarashi dango, yuba tea pudding, black-bean daifuku, ice cream (August 2026); wagashi plate (March 2026) · matcha zenzai, hot or iced (2024–2025); matcha ice cream and sorbet ¥700 (January 2026) · soba with sesame you grind yourself; yuba soba in thickened broth (November 2025, June 2026) · hojicha latte; matcha milk; iced tea ¥500; coffee',
    website: null, gmaps: gm('茶寮 器楽 朝日堂'), menu_url: null,
    notes: '[Tea room · Kiyomizu-zaka, sweets above a pottery shop] Escape the crowds at the top of Kiyomizu-zaka: a calm second-floor tea room in the Asahido pottery shop, serving matcha tiramisu, a sampler of Japanese sweets, matcha zenzai and sesame soba on fine Kiyomizu ware. About ¥1,000–2,500. Open daily; can queue at peak times.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The tea room of Asahido, a long-established Kiyomizu pottery shop, on the floor above its showroom (2024–2026 reviews); the tableware, down to the sugar pot, is the shop\'s own ware (January–February 2026). Reviewers find staff kind and attentive; one September 2025 diner got a warm zenzai instead of the iced one ordered.',
      philosophy: null,
      specialty: 'Matcha sweets; sesame soba; Kiyomizu-ware tableware.',
      anecdotes: [
        { text: 'January 2026: "As expected from a Kiyomizu pottery shop, even the sugar holder was made of small pottery, adding a stylish touch."', source: R + 'B520856907/' },
        { text: 'June 2026: "I enjoyed soba noodles with sesame sauce. While waiting, I ground the sesame seeds myself, opting for a coarser texture."', source: R + 'B529816800/' },
        { text: 'August 2026: "The Gozen included fresh dumplings with sweet soy sauce, yuba tea pudding, black soybean daifuku, and ice cream."', source: R + 'B533129760/' },
      ],
      japanese_sources_summary: '食べログ: 茶寮 器楽、カフェ・甘味処、東山区清水1-280 朝日堂本店2F、清水五条から1,276m、毎日9:00〜17:30、予約可、50席、カード (JCB・AMEX・Diners)・電子マネー・QR可。口コミ (2024年6月〜2026年8月、英語): 清水焼の朝日堂の2階の茶寮、清水寺の参道、栗入りの抹茶ティラミス、甘味の御膳 (みたらし団子、湯葉のお茶のプリン、黒豆大福、アイス)、抹茶ぜんざい、抹茶アイスとシャーベット700円、自分ですったごまのごまだれそば、湯葉のあんかけそば、ほうじ茶ラテ、抹茶ミルク、アイスティー500円、器は朝日堂の清水焼、混雑時は20〜30分待ち。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B486407796', 'B488501241', 'B513987995', 'B514193840', 'B517806919', 'B520856907', 'B522713144', 'B524024402', 'B529816800', 'B533129760', 'B533587096', 'B535563074'])) },
    cultural_comfort: { level: 'english_friendly', note: 'Popular with overseas visitors; quick, efficient service.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水1-280 朝日堂本店2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to August 2026.' },
    pin_source: `Tabelog ${TB} (34.995389, 135.782599); GSI lot 京都府京都市東山区清水一丁目280番地 about 40m away; nearest pin kyoto_warajiya_kiyomizu 29.2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520856907/', R + 'B529816800/', R + 'B533129760/'],
    price_note: 'Prices from a January 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Matcha tiramisu', '', 'Sweets', 'no', 'no', '2024–2026.', 'matcha_tiramisu'),
      it('', '', 'Sweets gozen (sampler)', '', 'Sweets', 'no', 'no', 'August 2026.', 'kashi_gozen'),
      it('', '', 'Soba with sesame sauce', '', 'Noodles', 'no', 'no', 'November 2025 and June 2026.', 'goma_soba'),
      it('', '', 'Matcha ice cream and sorbet', '¥700', 'Sweets', 'ask', 'no', 'January 2026.', 'matcha_ice'),
      it('', '', 'Hojicha latte', '', 'Drink', 'ask', 'no', 'February–March 2026.', 'hojicha_latte'),
    ] }, {
    cuisine: '清水焼の店の2階の静かな茶寮。店の器で甘味、抹茶の飲み物、そばを (食べログ、2024〜2026年の口コミ)・栗入りの抹茶ティラミス、抹茶とティラミスのセット (2024〜2025年)・甘味の御膳: みたらし団子、湯葉のお茶のプリン、黒豆大福、アイス (2026年8月)、和菓子の盛り合わせ (2026年3月)・抹茶ぜんざい (温・冷) (2024〜2025年)、抹茶アイスとシャーベット700円 (2026年1月)・自分ですったごまのたれのそば、湯葉のあんかけそば (2025年11月、2026年6月)・ほうじ茶ラテ、抹茶ミルク、アイスティー500円、コーヒー',
    neighborhood: '清水坂、清水寺の石段のすぐ下',
    gf_detail: 'グルテンフリーではない: ごまだれのそば、湯葉のあんかけそば、ティラミス、みたらし団子のある甘味の御膳 (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: だしのそばのつゆ、マスカルポーネのティラミス、アイス、牛乳のラテ (2024〜2026年の口コミ)。',
    notes: '[茶寮・清水坂、焼き物の店の上の甘味] 清水坂の上の人混みを離れて、清水焼の朝日堂の2階の落ち着いた茶寮へ。抹茶ティラミス、和の甘味の盛り合わせ、抹茶ぜんざい、ごまだれそばを清水焼の器で。1,000〜2,500円ほど。毎日営業。混む時間は待つことも。',
  });
}

// ================================================================ CAMPO su OVEST
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26035758/'; const R = TB + 'dtlrvwlst/';
  const L = ['12:00', '15:00'], Tu = ['17:30', '25:30'], D = ['17:00', '25:30'];
  put({
    id: 'kyoto_campo_su_ovest', name: 'CAMPO su OVEST', category: 'OMNI',
    lat: 35.014185, lng: 135.75812, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta, bruschetta, hachis parmentier, fried conger eel and risotto alongside the grills (2024–2026 reviews). The listing asks guests to mention allergies when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wood-fire and wild-game kitchen — venison, boar, duck, bear, tanuki, civet, octopus, foie gras (2024–2026 reviews); the grilled-vegetable platter is the main plant dish.',
    hours_raw: 'Tabelog: lunch Tue–Sun and holidays 12:00–15:00 (food L.O. 13:00); dinner Tue 17:30–25:30, Wed–Sun and holidays 17:00–25:30 (food L.O. 22:00, bar only after 22:00); closed Monday. 15:00–17:00 by reservation made the day before. Reservations: mention allergies or preferences when booking; same-day cancellation 100% for courses, ¥3,000 per person for seat-only bookings. Charges 「サービス料ご飲食代金の3％ 22時以降バータイム チャージ￥300」 (3% service; ¥300 bar-time charge after 22:00; Tabelog Japanese original). Bear needs pre-ordering (July 2026). 23 seats, counter, sofas and a terrace; designated smoking area. Cards and e-money; no QR codes. 5 min from Marutamachi.',
    hours: { 1: [L, Tu], 2: [L, D], 3: [L, D], 4: [L, D], 5: [L, D], 6: [L, D] }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Reizei-cho, south of Marutamachi — 5 min from the station',
    cuisine: 'A wood-fire Italian bar cooking game the chef hunts himself, plus a famous grilled octopus (Tabelog; 2023–2026 reviews) · signature wood-grilled octopus with a reduced sweet sauce (2026) · game from the blackboard: venison, wild boar (and boar porchetta), duck, natural quail, bear (pre-order), tanuki, civet (2024–2026) · grilled vegetable platter of five kinds; wood-grilled sea bream and tuna (2024–2026) · venison country pâté; foie gras bruschetta; burrata; hachis parmentier; fried conger eel; clams in white wine; game-meat sausage; risotto; pasta (2026) · crema catalana; homemade fruit cocktails, wines and craft beers',
    website: null, gmaps: gm('CAMPO su OVEST 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Wood-fire Italian · Marutamachi, wild game till late] A dim, stylish bar where everything meets the wood fire: the signature tender octopus, smoky grilled vegetables, and game the chef hunts — venison, boar, duck, even tanuki and civet — with good wine and fruit cocktails. About ¥6,000–10,000. 3% service. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef-owner (unnamed; hunts)'], origin: null,
      background: 'A February 2026 reviewer writes that the chef personally hunts in the mountains; a regular calls him "the master" and leaves wine and cocktail choices to him (December 2024), and he sourced natural quail on request (October 2026). Criticisms: little explanation of dishes (January 2026), and some diners found tanuki and civet too strong.',
      philosophy: null,
      specialty: 'Wood-grilled game; grilled octopus.',
      anecdotes: [
        { text: 'February 2026: "I was captivated by the various dishes prepared by a chef who personally hunts in the mountains… The signature dish, grilled octopus, was incredibly tender."', source: R + 'B535135489/' },
        { text: 'December 2024: "The vegetables grilled over wood are exceptionally delicious… consulting the master about your choices is a foolproof plan."', source: R + 'B473703286/' },
        { text: 'March 2026: "The tanuki had the strongest flavor. The hakubishin was like a milder version of tanuki. However, all of them had a strong wild fat flavor."', source: R + 'B525475401/' },
      ],
      japanese_sources_summary: '食べログ: CAMPO su OVEST、ダイニングバー・居酒屋・バル、中京区冷泉町68、地下鉄丸太町から徒歩5分、昼 火〜日・祝日12:00〜15:00、夜 火17:30〜25:30・水〜日・祝日17:00〜25:30 (料理L.O.22:00、22時以降はバー)、月曜休み、予約可 (アレルギーは予約時に)、サービス料「ご飲食代金の3％ 22時以降バータイム チャージ￥300」、23席、カウンター・ソファ・テラス、分煙、カード・電子マネー可。口コミ (2023年12月〜2026年10月、英語): 薪火料理とジビエ、名物のたこの薪焼き、鹿、猪、鴨、天然のうずら、熊 (予約制)、たぬき、ハクビシン、焼き野菜5種、鯛やまぐろの薪焼き、鹿のパテ、フォアグラのブルスケッタ、アッシ・パルマンティエ、穴子の揚げ物、パスタ、自家製フルーツのカクテル、料理人が自ら山で狩猟 (2026年2月)、説明が少ないとの声。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B473703286', 'B519210731', 'B521296110', 'B524509573', 'B525475401', 'B525748390', 'B526703861', 'B530970848', 'B532282483', 'B534390773', 'B535135489'])) },
    cultural_comfort: { level: 'friendly', note: 'Mention allergies when booking; game menu on the blackboard; 3% service.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog remarks: tell the restaurant about allergies or food preferences when booking.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区冷泉町68',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated December 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.014185, 135.75812); GSI lot 京都府京都市中京区冷泉町68番地 about 18m away; nearest pin kyoto_grill_demi 78.1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521296110/', R + 'B532282483/', R + 'B534390773/'],
    price_note: 'No dish prices given; about ¥6,000–10,000 per person (2024–2026 reviews); 3% service.', last_checked: TODAY, items: [
      it('', '', 'Wood-grilled octopus', '', 'Grill', 'ask', 'no', '2026 reviews; signature.', 'grilled_octopus'),
      it('', '', 'Grilled vegetable platter (5 kinds)', '', 'Grill', 'ask', 'ask', '2024–2026.', 'grilled_vegetables'),
      it('', '', 'Wood-grilled venison', '', 'Game', 'ask', 'no', '2024–2026.', 'venison'),
      it('', '', 'Wild boar porchetta', '', 'Game', 'ask', 'no', 'July 2026.', 'boar_porchetta'),
      it('', '', 'Venison country pâté', '', 'Antipasti', 'ask', 'no', 'January–February 2026.', 'venison_pate'),
    ] }, {
    cuisine: '料理人が自ら狩るジビエと名物のたこの薪焼きの、薪火のイタリアンバル (食べログ、2023〜2026年の口コミ)・甘いソースの名物のたこの薪焼き (2026年)・黒板のジビエ: 鹿、猪 (ポルケッタも)、鴨、天然のうずら、熊 (予約制)、たぬき、ハクビシン (2024〜2026年)・5種の焼き野菜、鯛やまぐろの薪焼き (2024〜2026年)・鹿のパテ・ド・カンパーニュ、フォアグラのブルスケッタ、ブッラータ、アッシ・パルマンティエ、穴子の揚げ物、あさりの白ワイン蒸し、ジビエのソーセージ、リゾット、パスタ (2026年)・クレマカタラーナ、自家製フルーツのカクテル、ワイン、クラフトビール',
    neighborhood: '冷泉町、丸太町の南。駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 焼き物のほかにパスタ、ブルスケッタ、アッシ・パルマンティエ、穴子の揚げ物、リゾット (2024〜2026年の口コミ)。アレルギーは予約時に伝えるよう案内がある。',
    vegan_detail: 'ヴィーガン不可: 薪火とジビエの店で、鹿、猪、鴨、熊、たぬき、ハクビシン、たこ、フォアグラ (2024〜2026年の口コミ)。植物性の主な皿は焼き野菜の盛り合わせ。',
    notes: '[薪火のイタリアン・丸太町、夜遅くまでジビエ] 何でも薪火で焼く、薄暗くおしゃれなバル。名物の柔らかいたこ、香ばしい焼き野菜、料理人が狩る鹿、猪、鴨、たぬきやハクビシンまで、ワインやフルーツのカクテルとともに。6,000〜10,000円ほど。サービス料3％。月曜休み。',
  });
}

// ================================================================ NOW & THEN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26041500/'; const R = TB + 'dtlrvwlst/';
  const W = day(['13:00', '23:00']), S = day(['13:00', '18:00']);
  put({
    id: 'kyoto_now_and_then', name: 'NOW & THEN', category: 'OMNI',
    lat: 35.01004, lng: 135.753751, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The menu is drinks, puddings, a matcha terrine and cakes (2025–2026 reviews); no gluten information. Pudding and terrine may be flour-free, but this is not stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A fresh almond-milk iced chocolate with cacao and dates is offered (September 2025, September 2026); the puddings and cakes are egg- and dairy-based.',
    hours_raw: 'Tabelog: Tue, Wed, Fri, Sat 13:00–23:00; Sun 13:00–18:00; closed Monday and Thursday; hours may change (a reviewer noted a recent change, April 2026). Walk-ins; large communal tables and sofas. Cards and e-money; no QR codes. The resident black Shiba Inu, Miles, roams the room; free dog treats come with orders. On the 4th floor of a building near Nijojo-mae, reached up several flights of stairs (2025–2026 reviews) — easy to miss from the street.',
    hours: { 1: W, 2: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Nijojo-mae — 387 m from the station',
    cuisine: 'A vintage-furnished 4th-floor café-bar with an exhibition space and a resident Shiba Inu, serving firm puddings, seasonal desserts and drinks from afternoon into the night (Tabelog; 2025–2026 reviews) · firm custard pudding, once with elderflower (2025–2026) · seasonal matcha terrine (September 2025) · cakes; dessert plates (2025–2026) · fresh almond-milk iced chocolate with cacao and dates (2025–2026); homemade ginger ale; fresh grapefruit juice; matcha latte; iced coffee served in a wine glass; evening drinks',
    website: null, gmaps: gm('NOW & THEN 京都 式阿弥町'), menu_url: null,
    notes: '[Café-bar · Nijojo-mae, puddings and a Shiba Inu up four flights] Climb to a spacious vintage room where the black Shiba Inu Miles greets you, then settle in with a firm pudding, matcha terrine or almond-milk chocolate — open till 11 pm most days. About ¥1,500–2,500. Closed Mon and Thu.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers describe a stylish space with sofas, large communal tables, vintage furniture and an art exhibition area, and the staff\'s black Shiba Inu, Miles, who comes over only when guests have treats (2025–2026). Criticisms: prices on the high side (September 2025), slow orders (January 2026), and a cool welcome from the owner or staff (October 2025, September 2026).',
      philosophy: null,
      specialty: 'Puddings; dessert plates; a resident dog.',
      anecdotes: [
        { text: 'May 2026: "The pudding… was firm yet smooth, with a refreshing elderflower aroma that was unlike any pudding I\'ve had before!"', source: R + 'B528997976/' },
        { text: 'September 2025: "They even brought out dog treats for Miles, allowing him to enjoy a snack as well."', source: R + 'B512998171/' },
        { text: 'September 2026: "The staff had a rather cold attitude… The pudding and coffee were just average! … but the dog was truly adorable!"', source: R + 'B536601084/' },
      ],
      japanese_sources_summary: '食べログ: NOW & THEN、カフェ・バー、中京区式阿弥町122-1 4F、二条城前から387m、火・水・金・土13:00〜23:00、日13:00〜18:00、月・木休み、カード・電子マネー可、QR不可。口コミ (2025年2月〜2026年9月、英語): ビルの4階、ヴィンテージの家具と展示スペース、看板犬の黒柴「Miles」、注文すると犬のおやつが無料、固めのプリン (エルダーフラワーの香りも)、季節の抹茶のテリーヌ、ケーキ、生アーモンドミルクのアイスチョコレート、自家製ジンジャーエール、グレープフルーツジュース、ワイングラスのアイスコーヒー、夜も営業、少し高い、提供が遅い、接客が冷たいとの声も。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B493397477', 'B501666826', 'B505694354', 'B512998171', 'B514442163', 'B516053256', 'B520865410', 'B526909523', 'B528997976', 'B529281837', 'B535342788', 'B536601084'])) },
    cultural_comfort: { level: 'friendly', note: 'Resident dog in the room; 4th floor up stairs; open late.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区式阿弥町122-1 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.01004, 135.753751); GSI lot 京都府京都市中京区式阿弥町122番地 about 43m away; nearest pin kyoto_nihonshu_satoshi 74.3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512998171/', R + 'B528997976/', R + 'B535342788/'],
    price_note: 'No item prices given; about ¥1,000–2,500 per person (2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Custard pudding', '', 'Dessert', 'ask', 'no', '2025–2026.', 'pudding'),
      it('', '', 'Seasonal matcha terrine', '', 'Dessert', 'ask', 'no', 'September 2025.', 'matcha_terrine'),
      it('', '', 'Fresh almond-milk iced chocolate', '', 'Drink', 'ask', 'ask', 'September 2025 and September 2026.', 'almond_chocolate'),
      it('', '', 'Homemade ginger ale', '', 'Drink', 'ask', 'ask', 'September 2025.', 'ginger_ale'),
    ] }, {
    cuisine: 'ヴィンテージの家具と展示スペース、看板犬の柴犬がいるビル4階のカフェバー。午後から夜まで固めのプリン、季節のデザート、飲み物 (食べログ、2025〜2026年の口コミ)・固めのカスタードプリン、エルダーフラワーの香りのものも (2025〜2026年)・季節の抹茶のテリーヌ (2025年9月)・ケーキ、デザートの皿 (2025〜2026年)・カカオとデーツの生アーモンドミルクのアイスチョコレート (2025〜2026年)、自家製ジンジャーエール、生搾りのグレープフルーツジュース、抹茶ラテ、ワイングラスのアイスコーヒー、夜のお酒',
    neighborhood: '二条城前の近く。駅から387m',
    gf_detail: '要確認: 飲み物、プリン、抹茶のテリーヌ、ケーキ (2025〜2026年の口コミ)。グルテンの情報はない。プリンやテリーヌは小麦粉を使わない可能性があるが記載はない。',
    vegan_detail: '要確認: カカオとデーツの生アーモンドミルクのアイスチョコレートがある (2025年9月、2026年9月)。プリンやケーキは卵と乳製品。',
    notes: '[カフェバー・二条城前、4階でプリンと柴犬] 階段を4階まで上ると、黒柴のMilesが出迎える広いヴィンテージの部屋。固めのプリン、抹茶のテリーヌ、アーモンドミルクのチョコレートを。ほとんどの日は23時まで。1,500〜2,500円ほど。月・木休み。',
  });
}

save();
