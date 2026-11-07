// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 43.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + おうどんや るりお Oudonya Rurio (hand-made udon and creative izakaya at Shijo-Omiya, run by an Italian-trained cook)
//   + DAVADA COFFEE&RECORDS (specialty coffee and record shop at Shichijo-Kawaramachi; since 2019) — single shop.
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + OUI. (machiya bakery café off Takoyakushi; since 2024) — run by a Nishinari craft brewery (August 2026 review); no other
//     OUI. bakery found; a blog calls it a sister shop of the standing bar スタンドうみねこ — a small group, not a chain.
//   + みなとや幽霊子育飴本舗 Minatoya Yurei Kosodate Ame Honpo (the "ghost's child-rearing candy" shop by Rokuharamitsu-ji;
//     official site: over 450 years) — single shop, takeaway only.
//   None of the four is in data/kyoto.json: grep by id, name (るりお/Rurio, DAVADA, OUI, みなとや/子育飴/Minatoya) and address
//   (錦猪熊町526, 材木町469, 油屋町121, 轆轤町80) found none.
//   Service charges: るりお none ("No service charge or additional fees"); none listed for the others.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-43');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ おうどんや るりお
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26002365/'; const R = TB + 'dtlrvwlst/';
  const IG = 'https://www.instagram.com/udon_rurio/'; const RETTY = 'https://retty.me/restaurant/100001339652/';
  const LD = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_oudonya_rurio', name: 'おうどんや るりお (Oudonya Rurio)', category: 'OMNI',
    lat: 35.0040627678672, lng: 135.75060285035937, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: hand-made wheat udon in dashi, tempura, kara-age and creative udon dishes (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based udon, mentaiko, bacon, eggs and fried chicken (reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:30), dinner 18:00–22:00 (last order 21:30); closed Sunday, and on Monday after a long holiday; may close early when the noodles run out (Tabelog). No lunch reservations; dinner bookings by phone (Tabelog). Weekday daily lunch only — none on Saturday (July 2026). Cash only — no cards, e-money or QR (Tabelog). No service charge or additional fees (Tabelog). 18 seats: 8 at tables and 10 in a tatami room; private hire up to 20; wheelchair accessible; non-smoking; English menu (Tabelog). On Inokuma-dori just north of Shijo, 135 m from Hankyu Omiya Stn (Tabelog).',
    hours: { 0: LD, 1: LD, 2: LD, 3: LD, 4: LD, 5: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shijo-Omiya — 135 m from Hankyu Omiya Stn',
    cuisine: 'Hand-made udon and a creative udon izakaya with Italian touches (Tabelog) · weekday daily lunch ¥1,030 with udon (150 g, 300 g or 450 g at the same price), rice, pickles, two small sides and a main such as fried mackerel (April 2026) · chicken tempura bukkake udon ¥1,180 (July 2026); udon with mentaiko sauce and fluffy omelette; Rurio Bomb Udon, tomato-based with bacon; carbonara udon; shrimp, scallop and new-onion udon in plum olive oil (2025–2026) · izakaya plates: potato salad, kara-age, sautéed scallops and mushrooms, fried mochi with mentaiko and cheese, cheese rice croquettes, tomato-braised tripe (2025–2026) · about 60 umeshu from Kyoto and across Japan (Tabelog)',
    website: IG, gmaps: gm('おうどんや るりお 四条大宮'), menu_url: TB,
    notes: "[Udon · Shijo-Omiya, creative udon izakaya] A quiet udon house a block from Hankyu Omiya, where a cook with an Italian background pulls firm, chewy noodles by hand. At lunch the weekday set (about ¥1,000) lets you pick 150, 300 or 450 g of udon for the same price; the menu runs from classic dashi udon to a tomato-and-bacon Bomb Udon and carbonara udon. At night it is an izakaya with about 60 umeshu. Cash only; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef not named; described as an Italian chef (April 2026 review)'], origin: null,
      background: 'Per Tabelog’s official introduction: homemade noodles in classic dashi udon alongside dishes that break the mould with Italian flavours, and about 60 umeshu from Kyoto and across Japan. An April 2026 reviewer says the place is run by an Italian chef; a June 2024 Retty reviewer says the owner used to run an Italian izakaya.',
      philosophy: null,
      specialty: 'Hand-made udon, classic and creative.',
      anecdotes: [
        { text: 'An April 2026 regular took the ¥1,030 daily lunch with thick fried mackerel and wished afterwards for the 300 g udon.', source: R + 'B370321182/' },
        { text: 'A November 2025 diner found the udon firmer than soft Kyoto-style udon, with a free upgrade to a large portion.', source: R + 'B517415076/' },
        { text: 'A July 2026 Saturday-night diner liked the light carbonara udon but found the tomato-braised tripe too pungent.', source: R + 'B531363537/' },
      ],
      japanese_sources_summary: '食べログ: おうどんや るりお、居酒屋・うどん・創作料理、中京区猪熊通四条上ル錦猪熊町526、阪急大宮駅から135m、月〜土 11:30〜15:00 (L.O. 14:30)・18:00〜22:00 (L.O. 21:30)、日曜定休 (連休の場合は月曜も休みの場合あり)、昼は予約不可、麺がなくなり次第早く閉める場合あり、カード・電子マネー・QR不可、サービス料・チャージ料なし、18席 (テーブル8、座敷10)、貸切20名まで、車椅子可、禁煙、英語メニュー。公式紹介: 「創作うどん×居酒屋」、自家製麺の王道のお出汁のうどん、イタリアンの味を取り入れた創作料理、京都と全国の梅酒60種、Instagram @udon_rurio。Retty: 手打ちのコシと多彩な創作メニューのうどん居酒屋、元々イタリアン居酒屋をしていたという口コミ (2024年6月)。口コミ (2023〜2026年、英語): 平日の日替わりランチ1,030円 (うどん150g・300g・450g同額、ごはん、漬物、小鉢2品)、鯖フライ、鶏天ぶっかけうどん1,180円、明太子ソースとふわふわ卵のうどん、トマトとベーコンの Rurio Bomb Udon、カルボナーラうどん、海老・帆立・新玉ねぎの梅オリーブオイルうどん、ポテトサラダ、唐揚げ、明太チーズの揚げ餅、トリッパのトマト煮、手打ちのコシのある麺、土曜は日替わりランチなし。',
      confidence: 'medium', sources: [TB, IG, RETTY, R + 'B370321182/', R + 'B465794200/', R + 'B492343623/', R + 'B517415076/', R + 'B519039728/', R + 'B519188621/', R + 'B520217055/', R + 'B520722883/', R + 'B522548480/', R + 'B525801542/', R + 'B531363537/', R + 'B534794011/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; cash only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区猪熊通四条上ル錦猪熊町526',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004063, 135.750603); cross-checked: GSI 京都府京都市中京区錦猪熊町526番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B370321182/', R + 'B534794011/'],
    price_note: 'Prices from April and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Weekday daily lunch set (udon, rice, main, sides)', '¥1,030', 'Lunch', 'no', 'no', 'Udon 150 g, 300 g or 450 g at the same price; weekdays only.', 'higawari'),
      it('', '', 'Chicken tempura bukkake udon', '¥1,180', 'Udon', 'no', 'no', 'July 2026.', 'toriten_bukkake'),
      it('', '', 'Rurio Bomb Udon (tomato, bacon)', '', 'Udon', 'no', 'no', 'The signature; sometimes sold out.', 'bomb_udon'),
      it('', '', 'Udon with mentaiko sauce and fluffy omelette', '', 'Udon', 'no', 'no', '', 'mentai_tamago'),
    ] }, {
    cuisine: '手打ちうどんと、イタリアンの要素を取り入れた創作うどんの居酒屋 (食べログ)・平日の日替わりランチ1,030円、うどんは150g・300g・450gから同額、ごはん、漬物、小鉢2品、鯖フライなどのおかず (2026年4月)・鶏天ぶっかけうどん1,180円 (2026年7月)、明太子ソースとふわふわ卵のうどん、トマトとベーコンの Rurio Bomb Udon、カルボナーラうどん、海老・帆立・新玉ねぎの梅オリーブオイルうどん (2025〜2026年)・居酒屋の皿: ポテトサラダ、唐揚げ、帆立ときのこのソテー、明太チーズの揚げ餅、チーズのライスコロッケ、トリッパのトマト煮 (2025〜2026年)・京都と全国の梅酒約60種 (食べログ)',
    neighborhood: '四条大宮。阪急大宮駅から135m',
    gf_detail: 'グルテンフリー不可。小麦の手打ちうどんと出汁、天ぷら、唐揚げ、創作うどん (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のうどん、明太子、ベーコン、卵、鶏の唐揚げ (口コミ)。',
    notes: '[うどん・四条大宮、創作うどん居酒屋] 阪急大宮から1筋の静かなうどん屋。イタリアンの経歴を持つ料理人が、コシのある麺を手打ちする。昼の平日セット (1,000円ほど) はうどん150・300・450gを同額で選べる。王道の出汁うどんから、トマトとベーコンの Rurio Bomb Udon、カルボナーラうどんまで。夜は梅酒約60種の居酒屋。現金のみ、日曜休み。',
  });
}

// ================================================================ DAVADA COFFEE&RECORDS
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26033361/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://llamalabo.shop-pro.jp/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_davada_coffee_records', name: 'DAVADA COFFEE&RECORDS', category: 'OMNI',
    lat: 34.98903015788102, lng: 135.76403871019812, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Espresso drinks, drip coffee, tea and juice, with canelés, scones and other baked sweets; no gluten information is published (official site; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Soy milk is offered for coffee drinks (official site); the baked sweets are not described.',
    hours_raw: '11:00–19:00; the shop’s own site says closed Friday, Tabelog lists every day — check before a Friday visit (official site; Tabelog). No reservations. Cards (Visa, Master, JCB), transport IC, iD, QUICPay and d Barai (Tabelog). 10 seats, including 4 smoking seats on the terrace; counter seats by the window (Tabelog; October 2025). Takeout. Records and CDs for sale; the shop also buys records, CDs and instruments (official site). At Shichijo-Kawaramachi, 5 min walk from Keihan Shichijo Stn and 10 min from JR Kyoto Stn (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shichijo-Kawaramachi — 5 min walk from Keihan Shichijo Stn',
    cuisine: 'Specialty coffee in a record shop (official site) · single-origin drip, espresso, latte, cappuccino ¥580 (April 2025), Americano, macchiato, cafe mocha, cold brew, matcha latte, hot chocolate, lemonade, juice, beer; soy milk (official site) · canelé ¥390 and chocolate-chip scone ¥390 (August 2025)',
    website: SITE, gmaps: gm('DAVADA COFFEE&RECORDS 七条'), menu_url: SITE,
    notes: "[Café · Shichijo-Kawaramachi, coffee and records] A small, Brooklyn-style coffee bar lined with records and CDs between Kyoto Station and the Kamo River, with \"music & coffee is the healing force\" on the wall. Coffee is brewed carefully to order — a cappuccino is about ¥580 — with a crisp canelé or a scone, at the window counter or to go. Popular with foreign visitors. 11:00–19:00.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Per the official site: a specialty coffee and record shop opened at Shichijo-Kawaramachi on 7 November 2019; it sells and buys records and CDs (rock, indie, jazz, soul, Brazilian, electronica, hip hop, reggae and more) and buys instruments and music gear.',
      philosophy: 'A wall in the shop reads "music & coffee is the healing force" (October 2025 review).',
      specialty: 'Specialty coffee with records.',
      anecdotes: [
        { text: 'An April 2025 passer-by found every seat taken by foreign visitors and left with a cappuccino brewed carefully to order.', source: R + 'B505875834/' },
        { text: 'A January 2026 regular always orders the light roast, and was the only customer that day.', source: R + 'B520461315/' },
        { text: 'A January 2025 traveller killing time before the Shinkansen liked the matcha latte, hot chocolate and canelé.', source: R + 'B499749919/' },
      ],
      japanese_sources_summary: '公式サイト: DAVADA COFFEE & RECORDS KYOTO JAPAN、七条河原町に2019年11月7日オープンのスペシャルティコーヒーとレコードの店、JR京都駅徒歩10分、京阪七条駅徒歩5分、駐車場なし、メニュー (ドリップのシングルオリジン、エスプレッソ、カフェラテ、カプチーノ、アメリカーノ、マキアート、ホットチョコレート、カフェモカ、コールドブリュー、豆乳、抹茶ラテ、レモネード、ジュース、ビール)、レコード・CD・楽器の買取り、下京区七条通河原町西入る材木町469、定休日 金曜日、11:00〜19:00。食べログ: カフェ、11:00〜19:00 (毎日)、予約不可、カード・電子マネー・QR可、10席 (テラスの喫煙席4)。口コミ (2023〜2026年、英語): カヌレ390円、スコーン390円、カプチーノ580円、レコードとCDの並ぶ店内、外国人客が多い、窓際のカウンター、テイクアウト。',
      confidence: 'medium', sources: [TB, SITE, R + 'B499749919/', R + 'B505875834/', R + 'B512339616/', R + 'B514991693/', R + 'B515588786/', R + 'B517260279/', R + 'B519851947/', R + 'B520461315/', R + 'B524340695/', R + 'B528469760/', R + 'B534761830/', R + 'B537509354/'] },
    cultural_comfort: { level: 'english', note: 'Many foreign customers; the shop hires baristas with English (official site).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区材木町469-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.98903, 135.764039); cross-checked: GSI 京都府京都市下京区材木町469番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505875834/', R + 'B512339616/', SITE],
    price_note: 'Prices from April and August 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Cappuccino', '¥580', 'Coffee', 'gf', 'ask', 'April 2025; soy milk offered.', 'cappuccino'),
      it('', '', 'Canelé', '¥390', 'Sweets', 'no', 'no', 'August 2025.', 'canele'),
      it('', '', 'Scone (chocolate chip)', '¥390', 'Sweets', 'no', 'no', 'August 2025.', 'scone'),
    ] }, {
    cuisine: 'レコード店のスペシャルティコーヒー (公式サイト)・シングルオリジンのドリップ、エスプレッソ、ラテ、カプチーノ580円 (2025年4月)、アメリカーノ、マキアート、カフェモカ、コールドブリュー、抹茶ラテ、ホットチョコレート、レモネード、ジュース、ビール、豆乳も (公式サイト)・カヌレ390円、チョコチップのスコーン390円 (2025年8月)',
    neighborhood: '七条河原町。京阪七条駅から徒歩5分',
    gf_detail: '要確認。エスプレッソ系、ドリップ、紅茶、ジュースに、カヌレやスコーンなどの焼き菓子。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: '要確認。コーヒーに豆乳を選べる (公式サイト)。焼き菓子の原材料は不明。',
    notes: '[カフェ・七条河原町、コーヒーとレコード] 京都駅と鴨川の間の、レコードとCDが並ぶブルックリン風の小さなコーヒーバー。壁には "music & coffee is the healing force"。注文ごとに丁寧に淹れるコーヒー (カプチーノ580円ほど) に、カリッとしたカヌレやスコーンを窓際のカウンターで、またはテイクアウトで。外国人客に人気。11:00〜19:00。',
  });
}

// ================================================================ OUI.
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26042037/'; const R = TB + 'dtlrvwlst/';
  const MAC = 'https://macaro-ni.jp/164207';
  const H1 = day(['08:00', '18:00']); const H2 = day(['08:00', '19:00']);
  put({
    id: 'kyoto_oui_bakery', name: 'OUI.', category: 'OMNI',
    lat: 35.006135697870235, lng: 135.76426305037074, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery whose dough uses spent malt from beer brewing (macaroni; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter croissants and salt bread, custard, cheese, bacon and mentaiko breads (reviews).',
    hours_raw: 'Monday–Thursday 8:00–18:00; Friday–Sunday 8:00–19:00; hours may change (Tabelog). Breakfast set on weekdays only (October 2026). No reservations. Cards, e-money and QR (Tabelog). Non-smoking. Takeout downstairs; claim a seat in the high-ceilinged upstairs café first, then order at the register — a buzzer calls you to collect; two seats downstairs; no strollers upstairs (Tabelog; September 2026). On Takoyakushi-dori east of Yanaginobamba, 460 m from Karasuma Stn (Tabelog).',
    hours: { 0: H1, 1: H1, 2: H1, 3: H1, 4: H2, 5: H2, 6: H2 }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takoyakushi-Yanaginobamba, near Nishiki Market — 460 m from Karasuma Stn',
    cuisine: 'Machiya bakery café with drinks from 8 a.m.; dough made with spent malt from craft-beer brewing (macaroni; reviews) · salt bread with fermented butter, the most popular; domestic fermented-butter croissant ¥294; mentaiko French bread; croque monsieur; cinnamon roll; salmon tartine; apple custard bread; bacon épi with shiso; cashew-nut melon bread ¥325; beef-tendon curry bread ¥407; mushroom focaccia ¥479 (2026 reviews) · weekday breakfast: add a drink and soup for ¥800 (August 2026) · Basque cheesecake ¥800, Americano ¥600, chai, apple juice ¥500; Nishinari craft beer ¥1,250, craft gin soda ¥700 (2026 reviews)',
    website: null, gmaps: gm('OUI. 京都 油屋町 パン'), menu_url: TB,
    notes: "[Bakery café · Takoyakushi near Nishiki, bread and craft beer] A bright, renovated machiya bakery run by a craft brewery from Osaka's Nishinari, folding spent brewing malt into its dough. The warm fermented-butter salt bread is the hit; breads run about ¥300–500, and from 8 a.m. you can add soup and a drink. Take a seat upstairs under the high ceiling with coffee, chai or a Nishinari craft beer. Busy, often with visitors.",
    chef_bio: { chef_name: null, roles: ['Run by a Nishinari (Osaka) craft-beer brewery (August 2026 review); people not named'], origin: null,
      background: 'Opened 29 October 2024 (Tabelog). Per macaroni (March 2025): a bakery café whose main feature is bread dough made with 麦芽粕 (spent malt), a by-product of craft-beer brewing; the second floor is a café space with an open ceiling. Reviewers (June and August 2026) say it is run by a craft brewery from Nishinari, Osaka, and pours its beer.',
      philosophy: null,
      specialty: 'Fermented-butter salt bread.',
      anecdotes: [
        { text: 'An August 2026 repeat visitor paired a mushroom focaccia with a ¥1,250 Nishinari craft beer and winced at the beer price.', source: R + 'B531328189/' },
        { text: 'A September 2026 visitor found it cramped and noisy at 2 p.m. and the breads small for the price, though the salt bread was good.', source: R + 'B535290913/' },
        { text: 'An August 2026 breakfast guest had a crisp fermented-butter croissant with the ¥800 morning set of tartine, corn soup and iced tea.', source: R + 'B533445435/' },
      ],
      japanese_sources_summary: 'macaroni (2025年3月更新): OUI. (ウイ)、2024年オープンのベーカリーカフェ、クラフトビールの醸造過程で生まれる副産物「麦芽粕」をパン生地に活用、食事パン・甘いパン・惣菜パン、2階は吹き抜けのカフェスペース。食べログ: パン・カフェ、中京区蛸薬師通柳馬場東入油屋町121-1、烏丸駅から460m、月〜木 8:00〜18:00、金〜日 8:00〜19:00、予約不可、カード・電子マネー・QR可、禁煙、2024年10月29日オープン。口コミ (2026年、英語): 西成のクラフトビール醸造所が営む、京町家を改装、1階で販売・2階でイートイン、塩パン、発酵バターのクロワッサン294円、明太フランス、クロックムッシュ、シナモンロール、サーモンのタルティーヌ、カシューナッツのメロンパン325円、牛すじカレーパン407円、きのこのフォカッチャ479円、モーニングセット800円、バスクチーズケーキ800円、西成のクラフトビール1,250円、平日のみの朝食セット、外国人客が多い。',
      confidence: 'medium', sources: [TB, MAC, R + 'B531328189/', R + 'B533445435/', R + 'B533651585/', R + 'B534245339/', R + 'B534403332/', R + 'B535290913/', R + 'B535519375/', R + 'B535971149/', R + 'B536437687/', R + 'B536953107/', R + 'B537297055/', R + 'B538717746/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-service: claim a seat upstairs, order downstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区蛸薬師通柳馬場東入油屋町121-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.006136, 135.764263); cross-checked: GSI 京都府京都市中京区油屋町121番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533445435/', R + 'B531328189/', R + 'B538717746/'],
    price_note: 'Prices from June–November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Domestic fermented-butter croissant', '¥294', 'Bread', 'no', 'no', 'August 2026.', 'croissant'),
      it('', '', 'Cashew-nut melon bread', '¥325', 'Bread', 'no', 'no', 'November 2026.', 'melon_pan'),
      it('', '', 'Beef-tendon curry bread', '¥407', 'Bread', 'no', 'no', 'June 2026.', 'curry_pan'),
      it('', '', 'Mushroom focaccia', '¥479', 'Bread', 'no', 'no', 'August 2026.', 'focaccia'),
      it('', '', 'Morning set (drink and soup with bread)', '¥800', 'Breakfast', 'no', 'no', 'Weekdays only.', 'morning'),
      it('', '', 'Basque cheesecake', '¥800', 'Sweets', 'ask', 'no', 'August 2026.', 'basque'),
    ] }, {
    cuisine: '朝8時から飲み物も楽しめる町家のベーカリーカフェ、クラフトビール醸造の麦芽粕を生地に (macaroni、口コミ)・一番人気の発酵バターの塩パン、国産発酵バターのクロワッサン294円、明太フランス、クロックムッシュ、シナモンロール、サーモンのタルティーヌ、りんごカスタードのパン、大葉のベーコンエピ、カシューナッツのメロンパン325円、牛すじカレーパン407円、きのこのフォカッチャ479円 (2026年の口コミ)・平日の朝食: パンに800円でドリンクとスープ (2026年8月)・バスクチーズケーキ800円、アメリカーノ600円、チャイ、りんごジュース500円、西成のクラフトビール1,250円、クラフトジンソーダ700円 (2026年の口コミ)',
    neighborhood: '蛸薬師柳馬場、錦市場の近く。烏丸駅から460m',
    gf_detail: 'グルテンフリー不可。ビール醸造の麦芽粕を生地に使う小麦のパン屋 (macaroni、口コミ)。',
    vegan_detail: 'ヴィーガン不可。バターのクロワッサンや塩パン、カスタード、チーズ、ベーコン、明太子のパン (口コミ)。',
    notes: '[ベーカリーカフェ・錦近くの蛸薬師、パンとクラフトビール] 大阪・西成のクラフトビール醸造所が営む、明るく改装した町家のパン屋。ビール醸造の麦芽粕を生地に練り込む。人気は温めた発酵バターの塩パン。パンは300〜500円ほどで、朝8時からスープとドリンクも付けられる。吹き抜けの2階でコーヒー、チャイ、西成のクラフトビールと。にぎわい、観光客も多い。',
  });
}

// ================================================================ みなとや幽霊子育飴本舗
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26013243/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kosodateame.com/ame/'; const ORIGIN = SITE + '?page_id=18'; const ITEMS = SITE + '?page_id=75'; const ACCESS = SITE + '?page_id=70';
  const H = day(['10:00', '16:00']);
  put({
    id: 'kyoto_minatoya_kosodate_ame', name: 'みなとや幽霊子育飴本舗 (Minatoya Yurei Kosodate Ame Honpo)', category: 'OMNI',
    lat: 34.99787911325238, lng: 135.77372597373125, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. One hard candy made from malt syrup and sugar; one reviewer read the label as malt sugar from sweet potato and corn, but no gluten information is published (official site; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A candy of malt syrup and granulated sugar, and loose Uji tea; ingredients beyond that are not published (reviews; official site).',
    hours_raw: '10:00–16:00, every day of the year; open later during Rokudo Mairi (Tabelog); may close for sudden events (official site, January 2026). Takeaway only — a small counter shop with no seating. Cash only — no cards, e-money or QR (Tabelog). The small 75 g bag often sells out early; ask the shop to hold one (official site). On Matsubara-dori east of Yamato-oji, at Rokudo no Tsuji, 2 min walk from Rokuharamitsu-ji, 10 min from Keihan Kiyomizu-Gojo Stn (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Rokuhara, at Rokudo no Tsuji — 2 min walk from Rokuharamitsu-ji',
    cuisine: 'A single candy with a ghost story: 幽霊子育飴, hard amber malt-syrup candy, broken into rough pieces, gently sweet (official site; reviews) · from 1 October 2026: 150 g bag ¥700, 75 g bag ¥400 (official site) · loose Uji tea — gyokuro 40 g, sencha 70 g, hojicha 150 g, matcha 20 g — ¥800 each from 1 October 2026 (official site)',
    website: SITE, gmaps: gm('みなとや幽霊子育飴本舗'), menu_url: ITEMS,
    notes: "[Candy shop · Rokuhara, by Rokuharamitsu-ji] A tiny shop that sells one thing: amber malt-syrup candy, broken by hand, tied to a 1599 legend of a dead mother whose ghost came nightly to buy candy for the baby born in the grave. The shop calls itself Japan's oldest candy maker, over 450 years old. A bag is ¥700 (¥400 small), with Uji teas beside it — a gentle sweetness and a story to take home. Open daily 10:00–16:00; cash only.",
    chef_bio: { chef_name: null, roles: ['Family shop, people not named (official site signs as みなとや一同)'], origin: null,
      background: 'Per the official site: Japan’s longest-established candy shop, over 450 years old; the legend: in Keicho 4 (1599) a wife of the 江村 family was buried, and days later a baby’s cry was heard from the grave — the child of the dead wife; a woman had come every night to buy candy and stopped once the child was dug out; the child became a monk at eight and a renowned priest, dying at 68 in 1666; the candy came to be called the ghost’s child-rearing candy. The shop has supplied its candy to はぐくみハッピーギフト, a Higashiyama ward gift for new parents, and received a letter of thanks (official site, March 2021). Candy and tea are made by hand (official site, September 2026).',
      philosophy: 'Per the official site: to keep passing on the story of “the candy that carried a life”.',
      specialty: 'Yurei kosodate ame.',
      anecdotes: [
        { text: 'An August 2025 first-timer was told by the staff that the ghost first came 426 years ago.', source: R + 'B511652521/' },
        { text: 'A December 2025 regular notes the legend is said to have inspired GeGeGe no Kitaro.', source: R + 'B519992389/' },
        { text: 'A September 2025 visitor bought a bag as a gift for a couple expecting a baby.', source: R + 'B523583769/' },
      ],
      japanese_sources_summary: '公式サイト (kosodateame.com): みなとや幽霊子育飴本舗、500年以上続く日本一歴史ある飴屋 (由来のページでは450年以上)、命をつないだ飴の由来 (慶長四年、江村氏の妻を葬った後、土中から幼児の泣き声、夜な夜な飴を買いに来た婦人、その子は八才で僧となり高名な僧に、寛文六年に六十八歳で遷化)、店頭販売は幽霊子育飴と宇治茶、2026年10月1日から子育飴150g 700円・75g 400円、宇治茶 (玉露40g、煎茶70g、ほうじ茶150g、抹茶20g) 一律800円、75gは早い時間に品切れの場合あり・取り置き可、手づくりで製造・販売、年中無休 10:00〜16:00、急な予定で休業あり、東山区松原通大和大路東入2丁目轆轤町80番地の1、六波羅蜜寺から徒歩2分、清水五条駅から徒歩10分、東山区の「はぐくみハッピーギフト」に子育飴、感謝状 (2021年)。食べログ: 和菓子、10:00〜16:00、六道まいりの期間は延長、年中無休、カード・電子マネー・QR不可、禁煙、テイクアウト。口コミ (2025〜2026年、英語): 琥珀色の硬い飴、麦芽水飴の素朴な甘さ、水飴とグラニュー糖だけ、試食あり、ゲゲゲの鬼太郎のもとになったという話、六道の辻、宇治茶も販売。',
      confidence: 'medium', sources: [TB, SITE, ORIGIN, ITEMS, ACCESS, R + 'B511652521/', R + 'B511894564/', R + 'B519992389/', R + 'B520607141/', R + 'B521089168/', R + 'B522596325/', R + 'B523583769/', R + 'B526454182/', R + 'B528311503/', R + 'B529394333/', R + 'B529563770/', R + 'B532691560/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway counter; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区松原通大和大路東入2丁目轆轤町80-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with a price notice dated 25 September 2026; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.997879, 135.773726); cross-checked: GSI 京都府京都市東山区轆轤町80番地 (lot) 13m; 20m from mp_rokuhara_hanten; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ITEMS],
    price_note: 'Official prices from 1 October 2026.', last_checked: TODAY, items: [
      it('幽霊子育飴 150g', '', 'Yurei kosodate ame, 150 g bag', '¥700', 'Sweets', 'ask', 'ask', '', 'ame_large'),
      it('幽霊子育飴 75g', '', 'Yurei kosodate ame, 75 g bag', '¥400', 'Sweets', 'ask', 'ask', 'Often sold out early; can be held.', 'ame_small'),
      it('宇治茶', '', 'Uji tea (gyokuro, sencha, hojicha or matcha), loose', '¥800', 'Tea', 'gf', 'vegan', 'To take home.', 'uji_tea'),
    ] }, {
    cuisine: '怪談とともにある飴ひとつ: 琥珀色の硬い麦芽水飴を粗く割った幽霊子育飴、やさしい甘さ (公式サイト、口コミ)・2026年10月1日から150g 700円、75g 400円 (公式サイト)・宇治茶の茶葉、玉露40g、煎茶70g、ほうじ茶150g、抹茶20g、各800円 (2026年10月1日から、公式サイト)',
    neighborhood: '六波羅、六道の辻。六波羅蜜寺から徒歩2分',
    gf_detail: '要確認。麦芽水飴と砂糖の飴ひとつ。さつまいもととうもろこしの麦芽糖と読んだ口コミもあるが、グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: '要確認。水飴とグラニュー糖の飴と、宇治茶の茶葉。それ以外の原材料は公開されていない (口コミ、公式サイト)。',
    notes: '[飴屋・六波羅、六波羅蜜寺のそば] 売るのはひとつだけ、手で割った琥珀色の麦芽水飴。墓の中で生まれた赤子のために、亡き母の霊が夜ごと飴を買いに来たという1599年の言い伝えの飴で、店は450年以上続く日本一古い飴屋と名乗る。1袋700円 (小400円)、宇治茶も。やさしい甘さと物語を持ち帰りに。毎日10:00〜16:00、現金のみ。',
  });
}

save();
