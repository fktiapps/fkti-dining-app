// Kyoto priority (kyoto-missed), worker osw13, batch 126 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: Un petit peu??, おおたや 夷川店, いただきます。KYOTO, さかい (Goshominami). Brands checked against queue-status, data/kyoto.json, than.co.jp/brands and 株式会社WILL (none match; this さかい is unrelated to 逸品さかい kyoto_ippin_sakai).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-126');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26005074', 'already in data: 京阿弥 (清水1丁目262) is the same Kiyomizu sweets shop as kyoto_kiyomizu_kyoami 清水 京あみ (清水1丁目262-2) — same reading, same pin to 0.2m, same yatsuhashi choux and matcha soft serve; a second Tabelog listing');
skip('26007288', 'too thin: 燦々 (SUNSUN), the lounge of Hotel The Screen — Tabelog lists no hours and the three reviews date from 2008–2010');

// ================================================================ Un petit peu??
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26040324/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '17:30']);
  put({
    id: 'kyoto_un_petit_peu', name: 'Un petit peu?? (アンプティプ)', category: 'OMNI',
    lat: 35.016857, lng: 135.769833, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. November 2025 and May 2026 reviewers had a gluten-free banana bread and describe a focus on gluten-free, high-quality ingredients; most other bakes (sablés, financiers, pound cakes, pies) are not described as gluten-free. Ask what is gluten-free that day and about shared baking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter sablés, cream-cheese frosting, white chocolate and cream pies (2023–2026 reviews); no vegan item is mentioned.',
    hours_raw: 'Tabelog: daily 11:00–17:30, irregular closures; hours may change. No reservations. Mostly a take-away baked-goods shop; a small table for eating in (one drink per person; July 2025). Popular items sell out by late afternoon, and there can be a queue at weekends (November 2025). Cards and e-money. Non-smoking. A one-person shop, a little hidden off the street, a few minutes south of Marutamachi near the Ritz-Carlton; 262 m from Jingu-Marutamachi.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of Kawaramachi-Marutamachi — 262 m from Jingu-Marutamachi',
    cuisine: 'A tiny baked-goods shop run single-handedly by a pastry chef who trained in France, with organic ingredients and some gluten-free bakes (Tabelog; 2023–2026 reviews) · gluten-free organic banana bread ¥400 (November 2025; May 2026) · Setouchi lemon cake ¥450–500; organic carrot cake with cream-cheese frosting ¥500; berry cake ¥450 (2024–2026) · vanilla sablés (five) ¥500; coconut sablé; organic matcha financier ¥250; madeleines ¥240; caramel brownie ¥380 (2024) · crumble tart; raspberry macaron pie; peach pie to eat in (July 2025) · coffee and café au lait',
    website: null, gmaps: gm('Un petit peu 丸太町 焼き菓子'), menu_url: null,
    notes: '[Bakes · Marutamachi, a one-woman French-style bake shop] A hidden little shop where the owner bakes French-inspired cakes and sablés with organic ingredients — Setouchi lemon cake, carrot cake, a gluten-free banana bread — mostly to take away, with one small table. Most items ¥250–500. Goes early; queues at weekends.',
    chef_bio: { chef_name: null, roles: ['Owner-pastry chef (unnamed; runs it alone)'], origin: null,
      background: 'Reviewers describe a bright, friendly owner who runs the shop alone (December 2023, July 2025), has spent time in France (March 2024) and has worked at a well-known pastry shop (July 2025). The name means roughly "(can I have) just a little bit (more)?" (2024–2025 reviews).',
      philosophy: 'Gentle bakes with high-quality, partly organic and gluten-free ingredients (November 2025 review).',
      specialty: 'Pound cakes; sablés; gluten-free banana bread.',
      anecdotes: [
        { text: 'November 2025: "I tried the following: Today\'s cake, Gluten-Free Banana Bread. Both were delicious! These treats are gentle on the body, focusing on gluten-free and high-quality ingredients."', source: R + 'B518204144/' },
        { text: 'March 2024: "The adorable owner, who has spent time in France, offers delightful treats with a hint of flair."', source: R + 'B480228103/' },
        { text: 'July 2025: "It\'s a one-person operation. Although the takeout and seating space is small, you can also dine in (with a one-drink minimum)."', source: R + 'B531401144/' },
      ],
      japanese_sources_summary: '食べログ: Un petit peu (アンプティプ)、スイーツ、上京区駒之町552-1、神宮丸太町から262m、毎日11:00〜17:30、不定休、予約不可、カード・電子マネー可、禁煙。口コミ (2023年12月〜2026年5月、英語): 女性の店主がひとりで営む焼き菓子の店、フランス帰り (2024年3月)、有名店の経験 (2025年7月)、オーガニックの素材、グルテンフリーのバナナブレッド400円 (2025年11月、2026年5月)、瀬戸内レモンケーキ450〜500円、オーガニックのキャロットケーキ500円、ベリーケーキ、バニラサブレ、抹茶のフィナンシェ250円、マドレーヌ240円、ブラウニー380円、クランブルタルト、イートインは小さなテーブルでワンドリンク制、週末は行列も。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B474304076', 'B476338164', 'B480228103', 'B480588307', 'B482147244', 'B500612238', 'B511925264', 'B518204144', 'B529044518', 'B531401144'])) },
    cultural_comfort: { level: 'friendly', note: 'Mostly take-away; one small table; friendly owner.' },
    safety: { ...SAFETY0, positives: ['Gluten-free organic banana bread (November 2025 and May 2026 reviews).', 'November 2025 review: the shop focuses on gluten-free, high-quality ingredients.'] },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区駒之町552-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to May 2026.' },
    pin_source: `Tabelog ${TB} (35.016857, 135.769833); GSI lot 京都府京都市上京区駒之町552番地 about 29m away; nearest pin kyoto_shikibu_sushi 16.0m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B482147244/', R + 'B480228103/', R + 'B529044518/'],
    price_note: 'Prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Gluten-free organic banana bread', '¥400', 'Bakes', 'ask', 'no', 'November 2025 and May 2026; described as gluten-free.', 'gf_banana_bread'),
      it('', '', 'Setouchi lemon cake', '¥450–500', 'Bakes', 'no', 'no', '2024–2026.', 'lemon_cake'),
      it('', '', 'Organic carrot cake', '¥500', 'Bakes', 'no', 'no', '2024–2025.', 'carrot_cake'),
      it('', '', 'Vanilla sablés (5)', '¥500', 'Bakes', 'no', 'no', '2023–2025.', 'vanilla_sable'),
      it('', '', 'Caramel brownie', '¥380', 'Bakes', 'no', 'no', 'March 2024.', 'brownie'),
    ] }, {
    cuisine: 'フランス帰りのパティシエがひとりで営む小さな焼き菓子の店。オーガニックの素材とグルテンフリーの焼き菓子も (食べログ、2023〜2026年の口コミ)・グルテンフリーのオーガニックのバナナブレッド400円 (2025年11月、2026年5月)・瀬戸内レモンケーキ450〜500円、クリームチーズのフロスティングのオーガニックのキャロットケーキ500円、ベリーケーキ450円 (2024〜2026年)・バニラサブレ (5枚) 500円、ココナッツのサブレ、オーガニックの抹茶のフィナンシェ250円、マドレーヌ240円、キャラメルのブラウニー380円 (2024年)・クランブルタルト、ラズベリーのマカロンパイ、イートインの桃のパイ (2025年7月)・コーヒー、カフェオレ',
    neighborhood: '河原町丸太町の南。神宮丸太町から262m',
    gf_detail: '要確認: 2025年11月と2026年5月の口コミにグルテンフリーのバナナブレッド、グルテンフリーと良い素材にこだわるとの声。ほかの焼き菓子 (サブレ、フィナンシェ、パウンドケーキ、パイ) はグルテンフリーとの記載はない。その日のグルテンフリーの品と、焼成の共用を確認を。',
    vegan_detail: 'ヴィーガン不可: バターのサブレ、クリームチーズのフロスティング、ホワイトチョコ、クリームのパイ (2023〜2026年の口コミ)。ヴィーガンの品の記載はない。',
    notes: '[焼き菓子・丸太町、ひとりで営むフランス仕込みの焼き菓子] 店主がオーガニックの素材でフランス風のケーキやサブレを焼く隠れた小さな店。瀬戸内レモンケーキ、キャロットケーキ、グルテンフリーのバナナブレッドなど、ほとんど持ち帰りで、小さなテーブルがひとつ。多くは250〜500円。早めに売り切れ、週末は行列も。',
  });
}

// ================================================================ おおたや 夷川店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26014362/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_ootaya_ebisugawa', name: 'おおたや 夷川店 (Ootaya Ebisugawa)', category: 'OMNI',
    lat: 35.014805, lng: 135.759998, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried hamo and shrimp, croquettes, cutlets, curry and spaghetti on most plates (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fried fish and shrimp, hamburg steak, meat sauce, chicken and red miso soup (2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 11:00–15:00 (L.O. 14:00) and 17:00–21:00 (L.O. 20:25); closed Sunday. Lunch 11:00–14:00; daily lunch specials until sold out (August 2026). Order and pay at the till by the door, then you are seated (2026 reviews). Cash only. SMOKING ALLOWED (Tabelog). 55 seats: counter, tables, sunken seating and a room for groups. Reservations taken; private hire for 20–50+. Coin parking next door. On Ebisugawa-dori west of Kurumayacho, 1 min from Marutamachi Station.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ebisugawa-dori by Marutamachi — 1 min from the station',
    cuisine: 'A family-run Japanese and yoshoku restaurant of about 60 years, with hearty fried set meals, generous portions and cheap beer sets (Tabelog; 2026 reviews) · fried hamo with tartar sauce: hamo set ¥1,800; hamo and fried shrimp set ¥2,000 (June–October 2026); hamo sashimi (June 2026) · lunch ¥1,000: crab cream croquettes with curry rice; chicken nanban; daily chicken katsu with salad and meat-sauce spaghetti (2026) · croquette and hamburg steak lunch; "B lunch" with two cream croquettes; set with two big shrimp tempura and two croquettes (June–October 2026) · red miso soup +¥150 · drinking sets: two draft beers, edamame and sausages ¥1,500; two beers or sake with a three-sake tasting, cold tofu, sashimi and tempura ¥2,600 (July 2026) · an "adult children\'s lunch" course (June 2026)',
    website: null, gmaps: gm('おおたや 夷川店'), menu_url: null,
    notes: '[Yoshoku · Ebisugawa by Marutamachi, a 60-year family diner] A bustling old-school restaurant with a window of food samples: pay at the till, then dig into fried hamo, crab cream croquettes or chicken katsu with spaghetti — lunch from ¥1,000 — or cheap beer-and-snack sets after work. Cash only. Smoking allowed. Closed Sunday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A June 2026 regular says it is family-run and has been in business about 60 years, with energetic staff including young part-timers. Reviewers find it popular with local office workers, older diners and solo regulars at the counter (2026). Criticisms: frying smells cling to clothes and a smallish hamburg (June 2026); portions are large (July 2026). The name "夷川店" suggests another branch, which the sources do not name.',
      philosophy: null,
      specialty: 'Fried hamo; croquettes; yoshoku set meals.',
      anecdotes: [
        { text: 'June 2026: "It seems they have been in business for 60 years and are family-run. Everyone works with great energy, and even the young part-timers are refreshing."', source: R + 'B523927142/' },
        { text: 'July 2026: "Set C, which offers two draft beers or local sake, three types of sake tasting, along with chilled tofu, sashimi, and tempura for JPY 2,600. I couldn\'t help but do a double-take."', source: R + 'B532649254/' },
        { text: 'June 2026: "While the oil smoke does cling to your clothes a bit, it adds to the character of the place."', source: R + 'B529477726/' },
      ],
      japanese_sources_summary: '食べログ: おおたや 夷川店、日本料理・洋食、中京区夷川通車屋町西入真如堂町295、地下鉄丸太町駅から徒歩1分、月〜土11:00〜15:00 (L.O.14:00)・17:00〜21:00 (L.O.20:25)、日曜休み、予約可、カード・電子マネー・QR不可、55席、座敷・掘りごたつ・カウンター、喫煙可。口コミ (2026年6〜10月、英語): 家族経営で約60年 (2026年6月)、入口のレジで先に注文と支払い、鱧のフライ定食1,800円、鱧とえびフライ2,000円、鱧の刺身、昼1,000円 (かにクリームコロッケとカレー、チキン南蛮、チキンカツ)、コロッケとハンバーグ、Bランチ、赤だし+150円、ビールのセットA 1,500円・セットC 2,600円、「大人のお子様ランチ」、量が多い、揚げ物のにおいが服につく。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B523927142', 'B529477726', 'B530012095', 'B531735390', 'B532649254', 'B534251206', 'B536409575', 'B536531498', 'B537714318', 'B537783551', 'B537839549', 'B537845314'])) },
    cultural_comfort: { level: 'japanese', note: 'Pay at the till first; cash only; smoking allowed.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区夷川通車屋町西入真如堂町295',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated June to October 2026.' },
    pin_source: `Tabelog ${TB} (35.014805, 135.759998); GSI lot 京都府京都市中京区真如堂町295番地 about 52m away; nearest pin kyoto_friandise_karasuma (hidden) 29.8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530012095/', R + 'B532649254/', R + 'B537714318/'],
    price_note: 'Prices from June–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Fried hamo set meal', '¥1,800', 'Set meal', 'no', 'no', 'September 2026.', 'hamo_fry'),
      it('', '', 'Fried hamo and shrimp set meal', '¥2,000', 'Set meal', 'no', 'no', 'July 2026.', 'hamo_ebi_fry'),
      it('', '', 'Crab cream croquette and curry lunch', '¥1,000', 'Lunch', 'no', 'no', 'June 2026.', 'croquette_curry'),
      it('', '', 'Chicken nanban lunch', '¥1,000', 'Lunch', 'no', 'no', 'July 2026.', 'chicken_nanban'),
      it('', '', 'Drinking set A (2 draft beers, edamame, sausages)', '¥1,500', 'Drinks', 'no', 'no', 'July 2026.', 'beer_set_a'),
    ] }, {
    cuisine: '家族経営で約60年の和食と洋食の店。ボリュームのある揚げ物の定食と手頃なビールのセット (食べログ、2026年の口コミ)・タルタルソースの鱧のフライ: 鱧の定食1,800円、鱧とえびフライの定食2,000円 (2026年6〜10月)、鱧の刺身 (2026年6月)・昼1,000円: かにクリームコロッケとカレーライス、チキン南蛮、日替わりのチキンカツとサラダとミートソースのスパゲッティ (2026年)・コロッケとハンバーグのランチ、クリームコロッケ2個の「Bランチ」、大きなえびの天ぷら2本とコロッケ2個のセット (2026年6〜10月)・赤だし+150円・ビールのセット: 生ビール2杯、枝豆、ソーセージ1,500円、ビールか日本酒2杯と利き酒3種、冷ややっこ、刺身、天ぷら2,600円 (2026年7月)・「大人のお子様ランチ」のコース (2026年6月)',
    neighborhood: '夷川通、丸太町の近く。駅から徒歩1分',
    gf_detail: 'グルテンフリーではない: 鱧やえびのフライ、コロッケ、カツ、カレー、スパゲッティがほとんどの皿に (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚やえびのフライ、ハンバーグ、ミートソース、鶏、赤だし (2026年の口コミ)。',
    notes: '[洋食・夷川の丸太町、家族の60年の食堂] 食品サンプルの並ぶにぎやかな昔ながらの店。レジで先に払って、鱧のフライ、かにクリームコロッケ、スパゲッティ付きのチキンカツを。昼は1,000円から。仕事帰りには手頃なビールとつまみのセットも。現金のみ。喫煙可。日曜休み。',
  });
}

// ================================================================ いただきます。KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26040228/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '17:00']);
  put({
    id: 'kyoto_itadakimasu_kyoto', name: 'いただきます。KYOTO (Itadakimasu. KYOTO)', category: 'OMNI',
    lat: 35.01711, lng: 135.768834, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Onigiri are rice and nori, but fillings such as kombu, takana and mentaiko are usually soy-seasoned, and the sides include fried chicken (2023–2026 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, and fillings such as kombu, sesame kombu, shiso kombu and spicy takana look plant-based, but no ingredient details are given.',
    hours_raw: 'Tabelog: daily 8:00–17:00 until sold out; irregular closures — check the calendar posted at the shop. Reservations taken. Pick onigiri onto a tray and pay at the till, or ask for one made fresh (January 2026). 5 eat-in seats. Non-smoking. Cards, IC cards and QR codes. In the Gyare building by the Kawaramachi-Marutamachi bus stop, 331 m from Jingu-Marutamachi.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Marutamachi — 331 m from Jingu-Marutamachi',
    cuisine: 'A small onigiri shop opened in October 2023 by a woman owner, making fluffy rice balls with rice and nori from Saga, to take away or eat in (Tabelog; 2023–2026 reviews) · onigiri ¥280–400: mentaiko ¥400; salt-cured salmon ¥380; shiso kombu ¥280; kombu; sesame kombu; spicy kombu; spicy takana (2023–2024) · onigiri with tamagoyaki and kara-age ¥400; with sausage and kara-age ¥400 (April 2024) · side dishes: kara-age, potato salad, tamagoyaki, sausage (2023–2026)',
    website: null, gmaps: gm('いただきます。KYOTO おにぎり'), menu_url: null,
    notes: '[Onigiri · Kawaramachi-Marutamachi, fresh rice balls from 8 am] A neat little rice-ball shop by the bus stop: big, fluffy onigiri with Saga rice and nori — salmon, mentaiko, kombu, spicy takana — from ¥280, plus kara-age and tamagoyaki. Five seats, or take them to the Kamo River. Tabelog lists vegetarian options.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed woman)'], origin: null,
      background: 'Opened around October 2023 by a woman owner (October and November 2023 reviews); the onigiri are formed fresh in a mould, and new flavours keep appearing (December 2023). One October 2023 diner found the rice hard and undercooked just after opening.',
      philosophy: 'Homemade onigiri with carefully chosen rice and Saga nori (October 2023 review).',
      specialty: 'Onigiri.',
      anecdotes: [
        { text: 'October 2023: "This place is known for its \'homemade onigiri\' made with carefully selected rice and seaweed from Saga Prefecture. It seems that a female owner has opened this establishment."', source: R + 'B473422622/' },
        { text: 'January 2026: "They had about seven types of onigiri available… I heard they could make them fresh, so I ordered a salmon onigiri, and they prepared it right there for me, serving it warm."', source: R + 'B520807776/' },
        { text: 'October 2023: "Since it just opened, maybe they\'re still getting the hang of things; the white rice was hard and undercooked."', source: R + 'B473214204/' },
      ],
      japanese_sources_summary: '食べログ: いただきます。KYOTO、おにぎり、上京区伊勢屋町393 ギャレビル1F、神宮丸太町から331m、毎日8:00〜17:00 (売り切れ次第終了)、不定休 (店頭のカレンダー)、予約可、5席、禁煙、カード・電子マネー・QR可、野菜にこだわる、ベジタリアンメニューあり。口コミ (2023年10月〜2026年1月、英語): 2023年10月ごろ開店、女性の店主、佐賀の米と海苔、型で作るふわふわのおにぎり、明太子400円、塩引き鮭380円、しそ昆布280円、昆布、ごま昆布、辛子昆布、辛子高菜、卵焼きと唐揚げのセット、唐揚げ、ポテトサラダ、注文すると作りたてにしてくれる (2026年1月)、開店直後はご飯が硬かったとの声。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B473214204', 'B473422622', 'B474430238', 'B484494408', 'B488069063', 'B493850707', 'B520807776'])) },
    cultural_comfort: { level: 'friendly', note: 'Pick and pay at the till; 5 seats; good for take-away.' },
    safety: { ...SAFETY0, positives: ['Tabelog lists vegetarian options.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区伊勢屋町393 ギャレビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2023 to January 2026.' },
    pin_source: `Tabelog ${TB} (35.017119, 135.768837) offset about 1m to (35.01711, 135.768834): kyoto_le_14e_marutamachi (伊勢屋町393-3, same lot) was 5.3m away, now 6.3m clear; GSI lot 京都府京都市上京区伊勢屋町393番地 about 17m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B488069063/', R + 'B484494408/'],
    price_note: 'Prices from an April 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Salt-cured salmon onigiri', '¥380', 'Onigiri', 'ask', 'no', 'April 2024.', 'shiobiki_shake'),
      it('', '', 'Mentaiko onigiri', '¥400', 'Onigiri', 'ask', 'no', 'April 2024.', 'mentaiko'),
      it('', '', 'Shiso kombu onigiri', '¥280', 'Onigiri', 'ask', 'ask', 'April 2024.', 'shiso_kombu'),
      it('', '', 'Onigiri with tamagoyaki and kara-age', '¥400', 'Set', 'no', 'no', 'April 2024.', 'tamago_karaage'),
    ] }, {
    cuisine: '2023年10月に女性の店主が開いた小さなおにぎり屋。佐賀の米と海苔のふわふわのおにぎりを持ち帰りか店内で (食べログ、2023〜2026年の口コミ)・おにぎり280〜400円: 明太子400円、塩引き鮭380円、しそ昆布280円、昆布、ごま昆布、辛子昆布、辛子高菜 (2023〜2024年)・卵焼きと唐揚げのおにぎり400円、ソーセージと唐揚げのおにぎり400円 (2024年4月)・総菜: 唐揚げ、ポテトサラダ、卵焼き、ソーセージ (2023〜2026年)',
    neighborhood: '河原町丸太町。神宮丸太町から331m',
    gf_detail: '要確認: おにぎりは米と海苔だが、昆布、高菜、明太子などの具はしょうゆ味が多く、唐揚げもある (2023〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認: 食べログにベジタリアンメニューありとあり、昆布、ごま昆布、しそ昆布、辛子高菜などの具は植物性に見えるが、原材料の情報はない。',
    notes: '[おにぎり・河原町丸太町、朝8時から作りたて] バス停の前のこぎれいな小さなおにぎり屋。佐賀の米と海苔の大きくふわふわのおにぎり (鮭、明太子、昆布、辛子高菜) が280円から、唐揚げや卵焼きも。5席、または鴨川へ持って行っても。食べログにベジタリアンメニューあり。',
  });
}

// ================================================================ さかい (Goshominami)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26023848/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '13:00'], ['18:00', '20:00']);
  put({
    id: 'kyoto_sakai_kaiseki', name: 'さかい (Sakai)', category: 'OMNI',
    lat: 35.017042, lng: 135.766771, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a dashi- and soy-seasoned kaiseki with somen, sauces and a fried course (2019–2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-led courses — sashimi, sea bass, sweetfish, hamo, beef — and dashi throughout (2015–2026 reviews).',
    hours_raw: 'Tabelog gives entry windows only: lunch 12:00–13:00 (last entry) and dinner 18:00–20:00 (last entry); closed Wednesday; hours may change. The hours grid shows those entry windows; meals run on after them. Reservations taken. Lunch courses ¥7,700 (May–June 2025) and ¥9,000 (August 2025); dinner about ¥10,000–15,000. 10 seats: 6 at the counter facing the charcoal grill, 4 at tables. Non-smoking. Cards and QR codes. Tucked into the back of a residential building\'s ground floor near the Imperial Palace, 5 min from Keihan Jingu-Marutamachi.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Just south of the Imperial Palace — 5 min from Jingu-Marutamachi',
    cuisine: 'A ten-seat kaiseki counter near the Imperial Palace, cooking seasonal fish over charcoal and ending with famous clay-pot rice (Tabelog; 2015–2026 reviews) · lunch course ¥7,700: octopus simmered with vegetables; sea bream and winter-melon clear soup; sashimi of Spanish mackerel, kinmedai and squid; charcoal-grilled sea bass with a "woodleaf" sauce; cold yam somen; vinegared "shirasu shrimp" (June 2025) · ¥9,000 lunch with flounder, sea bream and sweet shrimp sashimi (August 2025) · summer: whole charcoal-grilled sweetfish, hamo, Kamo eggplant, Manganji peppers, fried sea bream (August 2026) · clay-pot rice with homemade chirimen-sansho and dashimaki, seconds welcome; steamed lotus root; miso-grilled mackerel (2025–2026) · sake',
    website: null, gmaps: gm('日本料理 さかい 御所南'), menu_url: null,
    notes: '[Kaiseki · Imperial Palace south, charcoal fish and clay-pot rice] A calm ten-seat counter hidden in a residential building: seasonal kaiseki with fish grilled over charcoal in front of you, finished with glossy clay-pot rice, homemade chirimen-sansho and dashimaki — seconds offered. Lunch from ¥7,700. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Reviewers describe an owner-chef working with an apprentice, warm and happy to explain dishes, with many regulars (November 2025); the counter faces the charcoal grill (August 2026). The pickles and chirimen-sansho are homemade (November 2025). A 2015 reviewer complained that the course price moved from tax-included to tax-extra; a May 2025 diner missed a hassun.',
      philosophy: null,
      specialty: 'Seasonal kaiseki; charcoal-grilled fish; clay-pot rice.',
      anecdotes: [
        { text: 'November 2025: "The highlight was the freshly cooked white rice. I wondered if I had ever tasted such fragrant and shiny rice in my long life… It seemed that all the pickles and sansho chirimen were homemade."', source: R + 'B516823470/' },
        { text: 'August 2026: "The crispy sweetfish, which you can eat whole, is a unique experience of charcoal grilling… As always, the clay pot rice and chirimen sansho were so delicious that I had to get a second helping!"', source: R + 'B511477184/' },
        { text: 'May 2025: "They pay great attention to seasonal ingredients… However, I wish there was a bit more flair to the presentation. I love hassun, so I felt a bit disappointed without it."', source: R + 'B520970160/' },
      ],
      japanese_sources_summary: '食べログ: さかい、日本料理、中京区毘沙門町553 御幸町ビル1F、京阪神宮丸太町から徒歩5分、昼は13:00最終入店、夜は20:00最終入店、水曜休み、予約可、10席 (カウンター6・ホール4)、禁煙、カード・QR可、日本酒・魚にこだわる。口コミ (2015年〜2026年8月、英語): 御所南の住宅の建物の奥の懐石、昼のコース7,700円 (たこの煮物、鯛と冬瓜のお椀、鰆・金目鯛・いかの刺身、すずきの炭火焼き、山芋そうめん、酢の物)、9,000円の昼、夏は鮎の炭火焼き、鱧、Kamoなす、Manganji、土鍋ご飯と自家製ちりめん山椒とだし巻きはおかわり可、店主と弟子が営む、2015年には税込から税別に変わったとの不満、八寸がないのが残念との声 (2025年5月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B420813287', 'B458727549', 'B487121032', 'B508798576', 'B511477184', 'B516823470', 'B520970160', 'B527721721', 'B90344306'])) },
    cultural_comfort: { level: 'japanese', note: 'Reservations recommended; counter view of the charcoal grill.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区毘沙門町553 御幸町ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to August 2026.' },
    pin_source: `Tabelog ${TB} (35.017013, 135.766729) offset about 5m to (35.017042, 135.766771): kyoto_dolch_marutamachi was 1.5m away, now 6.3m clear; GSI lot 京都府京都市中京区毘沙門町553番地 about 21m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508798576/', R + 'B511477184/', R + 'B520970160/'],
    price_note: 'Course prices from May–August 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥7,700', 'Course', 'no', 'no', 'May–June 2025.', 'lunch_7700'),
      it('', '', 'Lunch course (larger)', '¥9,000', 'Course', 'no', 'no', 'August 2025.', 'lunch_9000'),
      it('', '', 'Clay-pot rice with chirimen-sansho and dashimaki', '', 'Rice', 'ask', 'no', '2025–2026; seconds offered.', 'donabe_gohan'),
    ] }, {
    cuisine: '御所の近くの10席の懐石のカウンター。旬の魚を炭火で焼き、評判の土鍋ご飯で締める (食べログ、2015〜2026年の口コミ)・昼のコース7,700円: たこと野菜の煮物、鯛と冬瓜のお椀、鰆・金目鯛・いかの刺身、すずきの炭火焼きの「woodleaf」のたれ、山芋のそうめん、「shirasu shrimp」の酢の物 (2025年6月)・ひらめ、鯛、甘えびの刺身の9,000円の昼 (2025年8月)・夏: 丸ごと炭火で焼く鮎、鱧、Kamoなす、Manganji、鯛の揚げ物 (2026年8月)・自家製のちりめん山椒とだし巻きの土鍋ご飯 (おかわり可)、蓮根の蒸し物、さばの味噌焼き (2025〜2026年)・日本酒',
    neighborhood: '御所のすぐ南。神宮丸太町から徒歩5分',
    gf_detail: 'グルテンフリーではない: だしとしょうゆの懐石で、そうめん、たれ、揚げ物もある (2019〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 魚中心のコース (刺身、すずき、鮎、鱧、牛肉) で、だしを多用 (2015〜2026年の口コミ)。',
    notes: '[懐石・御所南、炭火の魚と土鍋ご飯] 住宅の建物の奥にある落ち着いた10席のカウンター。目の前の炭火で焼く魚の季節の懐石を、つややかな土鍋ご飯と自家製のちりめん山椒、だし巻きで締める (おかわり可)。昼は7,700円から。水曜休み。',
  });
}

save();
