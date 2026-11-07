// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 47.
//   + スゥレッド カフェ thread cafe (hidden courtyard café near Seimei Shrine, plant-based plates; core list)
//   + 珈琲焙煎所 旅の音 Coffee Baisensho Tabino Ne (specialty roaster in a former art-school building, Mototanaka; core list)
//   + 司津屋 Shizuya (self-service soba and udon by Demachi Masugata shopping street; notable list)
//   + 先斗町 魯ビン Pontocho Robin (kaiseki-style Japanese in a 170-year-old machiya with a Kamo River deck; notable list)
//   - キラメキノトリ 西大路円町店 26035633 (core): branch of a brand already in data (キラメキノトリ, kyr_kirameki_no_tori).
//   Picked 2026-11-06 after batch 46. `queue.mjs kyoto-missed next core 200`, mod 6 = 1, after earlier skips: スゥレッド カフェ
//   26024929, 26035633 (skipped), 珈琲焙煎所 旅の音 26028421. `next notable 200`: 司津屋 26001511, 先斗町 魯ビン 26001889.
//   Same-name check, same brand or operator only: one of each. None of the four is in data/kyoto.json: grep by name and
//   address (西大路町58, 田中東春菜町30-3, 寺町今出川上ル1-81, 若松町137-4) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-47');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260203/26035633/', 'branch of a brand already in data: キラメキノトリ (kyr_kirameki_no_tori)');

// ================================================================ スゥレッド カフェ thread cafe
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26024929/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_thread_cafe_ogawa', name: 'スゥレッド カフェ (thread cafe)', category: 'OMNI',
    lat: 35.032294, lng: 135.754815, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Plates of multigrain rice, vegetable marinades, spreads, dumplings and soup, plus campagne sandwiches and toast; no gluten information (2022–2025 reviews).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some options: reviewers describe the lunch plate as vegan, with no animal protein, and soy-milk ice cream (2022–2025 reviews); Tabelog lists vegetarian options. A Camembert toast with honey and cheesecake are also served (2019; May 2022).',
    hours_raw: 'Tabelog lists Sunday and alternate Mondays 9:00–19:00; Thursday breakfast 8:30–11:00 and 14:30–18:00; Wednesday and Saturday lunch 12:00–14:30; and closed Tuesday, Friday, Sunday and alternate Mondays — the listing contradicts itself, so check Instagram for current days (Tabelog; June 2024). Reservations accepted, advised for lunch (Tabelog; 2022–2025 reviews). Cards, e-money and QR (Tabelog). 15 seats incl. a counter and a terrace; non-smoking; self-service water (Tabelog; October 2024). Down a narrow passage on the right of the building facing Ogawa Children\'s Park, in a former house; about 500 m from Imadegawa Stn (Tabelog; October 2024).',
    hours: {}, hours_status: 'varies',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kamidachiuri by Ogawa-dori, near Seimei Shrine — 7 min walk from Imadegawa Stn',
    cuisine: 'Hidden café of vegetable-led, mostly plant-based plates (Tabelog; 2022–2025 reviews) · lunch: multigrain rice and vegetarian plate ¥1,200 with herbal tea and soy-milk ice cream, the only lunch dish, small dumplings and many small vegetable dishes (2022–2024 reviews) · breakfast plate of salad, vegetable marinades, spreads, soup and yogurt; campagne sandwiches (June 2024) · Camembert toast with honey; chestnut cheesecake; dessert cakes; Earl Grey; craft beer (2019–2025 reviews) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('thread cafe 京都 上立売 小川'), menu_url: null,
    notes: '[Café · near Seimei Shrine, hidden courtyard] Found down a dark, narrow passage beside Ogawa Children\'s Park, a bright, plant-filled café in an old house serving one lunch — a vegan-leaning plate of multigrain rice and many small vegetable dishes, with herbal tea and soy-milk ice cream — and breakfast plates on some days. Days and hours shift; check Instagram and book for lunch.',
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a café with vegetarian options and breakfast. Reviewers describe a stylish, deliberately cluttered room with a small Jizo (April 2022), many vegan options (May 2022), healthy plates without animal protein (May 2025), limited hours posted on Instagram (June 2024), and a building that was once a private house (May 2025).',
      philosophy: 'Healthy, carefully made vegetable plates (2021–2025 reviews).', specialty: 'Multigrain rice and vegetarian plate.',
      anecdotes: [
        { text: 'An April 2022 visitor wandering from Seimei Shrine found the café down an alley and called it "stylishly chaotic".', source: R + 'B447858544/' },
        { text: 'An October 2024 guest explains the way in: the right side of the building opposite Ogawa Children\'s Park, then a narrow passage to the courtyard.', source: R + 'B493871325/' },
        { text: 'A May 2025 weekday lunch was fully booked; the guest paired the plate with a craft beer.', source: R + 'B507094424/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、上京区上立売道小川東入ル西大路町58、今出川駅から494m、日曜と隔週月曜 9:00〜19:00、木曜 朝食8:30〜11:00・14:30〜18:00、水・土 ランチ12:00〜14:30、休み: 火・金・日・隔週月曜 (表記が食い違う)、予約可、カード・電子マネー・QR 可、15席、カウンター、テラス、禁煙、野菜にこだわる、朝食、ベジタリアン対応。口コミ (2018年7月〜2025年5月、英語): 小川児童公園の前の建物の右の細い通路の奥、元民家、お地蔵さん、昼は雑穀ご飯とベジタリアンのプレート1,200円のみ (ハーブティー、豆乳アイス付き)、ヴィーガンのメニューが多い、動物性のたんぱく質なし、朝のプレート (サラダ、野菜のマリネ、スプレッド、スープ、ヨーグルト)、カンパーニュのサンド、カマンベールのトースト、栗のチーズケーキ、アールグレイ、クラフトビール、営業日は Instagram で、水はセルフ。',
      confidence: 'medium', sources: [TB, R + 'B359928591/', R + 'B361354718/', R + 'B447858544/', R + 'B448904192/', R + 'B449315508/', R + 'B449554407/', R + 'B465462029/', R + 'B486399220/', R + 'B493871325/', R + 'B507094424/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hard to find; book lunch; check Instagram for days; cards, IC and QR.' },
    safety: { ...SAFETY0, positives: ['Lunch plate described as vegan, without animal protein (2023 and 2025 reviews); Tabelog lists vegetarian options.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区上立売道小川東入ル西大路町58',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review May 2025.' },
    pin_source: `Tabelog ${TB} (35.032294, 135.754815); cross-checked: GSI 京都府京都市上京区西大路町58番地 (lot) 47 m; nearest Kyoto record 163 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B447858544/'],
    price_note: 'Price from an April 2022 review; check current prices.', last_checked: TODAY, items: [
      it('', '', 'Multigrain rice and vegetarian plate (herbal tea, soy-milk ice cream)', '¥1,200', 'Lunch', 'ask', 'vegan', 'Described as vegan; April 2022.', 'veg_plate'),
      it('', '', 'Camembert toast with honey', '', 'Café', 'no', 'no', 'May 2022.', 'camembert_toast'),
    ] }, {
    cuisine: '野菜中心で植物性が多いプレートの隠れ家カフェ (食べログ、2022〜2025年の口コミ)・昼: ハーブティーと豆乳アイス付きの雑穀ご飯とベジタリアンのプレート1,200円のみ、小さなだんごと野菜の小皿がたくさん (2022〜2024年の口コミ)・朝のプレート: サラダ、野菜のマリネ、スプレッド、スープ、ヨーグルト、カンパーニュのサンド (2024年6月)・はちみつのカマンベールトースト、栗のチーズケーキ、ケーキ、アールグレイ、クラフトビール (2019〜2025年の口コミ)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '晴明神社の近く、小川通の上立売。今出川駅から徒歩7分',
    gf_detail: '要確認。雑穀ご飯、野菜のマリネ、スプレッド、だんご、スープのプレートと、カンパーニュのサンドやトースト。グルテンの情報はない (2022〜2025年の口コミ)。',
    vegan_detail: '一部対応。昼のプレートはヴィーガンで動物性のたんぱく質を使わないと口コミにあり、豆乳アイスも (2022〜2025年の口コミ)。食べログにベジタリアン対応の記載。カマンベールのトーストやチーズケーキもある (2019年、2022年5月)。',
    notes: '[カフェ・晴明神社の近く、隠れた中庭] 小川児童公園の横の暗く細い通路の奥にある、緑の多い明るい元民家のカフェ。昼は一種類のみで、雑穀ご飯と野菜の小皿がたくさんのヴィーガン寄りのプレートにハーブティーと豆乳アイス。日によって朝のプレートも。営業日と時間は変わるので Instagram を確認し、昼は予約を。',
  });
}

// ================================================================ 珈琲焙煎所 旅の音 Tabino Ne
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26028421/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '18:00']);
  put({
    id: 'kyoto_tabino_ne_mototanaka', name: '珈琲焙煎所 旅の音 (Coffee Baisensho Tabino Ne)', category: 'OMNI',
    lat: 35.035358, lng: 135.785766, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: food is toast, sandwiches, tarts and Basque cheesecake (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee suits, and a soy-milk soft serve collaboration has appeared, but the food uses cheese, cream and ham; no vegan information (2025–2026 reviews).',
    hours_raw: 'Daily 12:00–18:00; hours may change (Tabelog). No reservations (Tabelog). Cards and PayPay; no e-money (Tabelog). 17 seats: 5 at the counter and 12 at tables; non-smoking (Tabelog). Free parking only when buying beans or takeaway; café guests use the paid lot behind (Tabelog). At times one person runs the room, so drinks take a little longer (May 2025). In THE SITE A, a former art-school building in a residential area; 5 min walk from Mototanaka Stn on the Eizan line (Tabelog; December 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tanaka, near Mototanaka Stn (Eizan) — 5 min walk',
    cuisine: 'Specialty roaster and café with a Fuji Royal roaster on show (December 2025) · hand-drip single origins from light to dark, e.g. Yirgacheffe light and medium, Myanmar, Ethiopia medium-dark, Mandheling dark; Tabino blend; café au lait, latte, milk coffee (2025–2026 reviews) · white-miso lemon toast; prosciutto and cream-cheese sandwich; Basque cheesecake; seasonal tart; homemade pudding (October 2025–June 2026) · a soy-milk soft serve with espresso in collaboration with Sanzuian (August 2025) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('珈琲焙煎所 旅の音 元田中'), menu_url: null,
    notes: '[Coffee · Mototanaka, a former art-school building] A calm specialty roastery in an old art-school building, with a Fuji Royal roaster by the door: hand-drip coffees from a nutty light Myanmar to a dark Mandheling, staff happy to talk beans, and small sweets — Basque cheesecake, pudding, an unusual white-miso lemon toast. Some find prices high. Open daily 12:00–18:00.',
    chef_bio: { chef_name: null, roles: ['Roaster and café staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a coffee roastery and café in Tanaka, with beans and takeaway. Reviewers describe a renovated warehouse or former art-school classroom (January and December 2025–2026), staff who explain beans and roasting (May 2025), and one-person service at times (May 2025).',
      philosophy: null, specialty: 'Hand-drip single origins.',
      anecdotes: [
        { text: 'A May 2025 coffee lover compared light and medium roasts of the same Yirgacheffe, and hoped to see the roaster running next time.', source: R + 'B507387004/' },
        { text: 'A February 2026 visitor after an exhibition at Kyoto University of the Arts found a friend\'s white-miso lemon toast the most interesting dish.', source: R + 'B522544874/' },
        { text: 'A December 2025 group found prices on the high side, and decided a latte had been the wrong choice at a hand-drip specialist.', source: R + 'B519517198/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・喫茶店、左京区田中東春菜町30-3 THE SITE A、叡山電鉄元田中駅から徒歩5分、市バス「叡電元田中」から徒歩6分、毎日 12:00〜18:00、予約不可、カード・PayPay 可、電子マネー不可、17席 (カウンター5、テーブル12)、禁煙、豆やテイクアウトの購入時のみ無料駐車場 (カフェは裏の有料駐車場)。口コミ (2025年5月〜2026年6月、英語): 元美術学校の建物、Fuji Royal の焙煎機、浅煎りから深煎りのハンドドリップ (イルガチェフェ、ミャンマー、エチオピア、マンデリン)、旅の音ブレンド、カフェオレ、ラテ、白味噌とレモンのトースト、生ハムとクリームチーズのサンド、バスクチーズケーキ、季節のタルト、自家製プリン、Sanzuian とのコラボの豆乳ソフトクリーム、スタッフ一人のときも、値段が高めとの声。',
      confidence: 'medium', sources: [TB, R + 'B439010707/', R + 'B507387004/', R + 'B508431260/', R + 'B516031365/', R + 'B518951616/', R + 'B519517198/', R + 'B522544874/', R + 'B530057808/', R + 'B530732045/', R + 'B530734794/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; staff explain beans; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区田中東春菜町30-3 THE SITE A',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through June 2026.' },
    pin_source: `Tabelog ${TB} (35.035358, 135.785766); cross-checked: GSI 京都府京都市左京区田中東春菜町30番地 (lot) 18 m; nearest Kyoto record 197 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices read; about ¥1,000–2,000 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Hand-drip coffee (single origin)', '', 'Coffee', 'gf', 'vegan', 'Black; 2025–2026 reviews.', 'hand_drip'),
      it('', '', 'White-miso lemon toast', '', 'Food', 'no', 'ask', 'October 2025.', 'miso_lemon_toast'),
      it('', '', 'Basque cheesecake', '', 'Sweets', 'ask', 'no', '2025–2026 reviews.', 'basque_cheesecake'),
    ] }, {
    cuisine: 'Fuji Royal の焙煎機が見えるスペシャルティの焙煎所とカフェ (2025年12月)・浅煎りから深煎りのハンドドリップのシングルオリジン、例: イルガチェフェの浅煎りと中煎り、ミャンマー、エチオピアの中深煎り、マンデリンの深煎り、旅の音ブレンド、カフェオレ、ラテ (2025〜2026年の口コミ)・白味噌とレモンのトースト、生ハムとクリームチーズのサンド、バスクチーズケーキ、季節のタルト、自家製プリン (2025年10月〜2026年6月)・Sanzuian とのコラボのエスプレッソをかけた豆乳ソフト (2025年8月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '叡電元田中駅の近くの田中。徒歩5分',
    gf_detail: 'グルテンフリー不可。食べ物はトースト、サンド、タルト、バスクチーズケーキ (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。ブラックコーヒーは合い、豆乳ソフトのコラボもあったが、食べ物はチーズ、クリーム、生ハムを使う。ヴィーガンの情報はない (2025〜2026年の口コミ)。',
    notes: '[コーヒー・元田中、元美術学校の建物] 古い美術学校の建物の落ち着いた焙煎所。入口にFuji Royal の焙煎機。ナッツ感のある浅煎りのミャンマーから深煎りのマンデリンまでのハンドドリップ、豆の話もしてくれるスタッフ、バスクチーズケーキ、プリン、珍しい白味噌とレモンのトーストなど小さな甘いもの。高めと感じる人も。毎日12時〜18時。',
  });
}

// ================================================================ 司津屋 Shizuya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001511/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:00', '15:00'], ['17:00', '20:00']); const L = day(['11:00', '15:00']);
  put({
    id: 'kyoto_shizuya_demachi', name: '司津屋 (Shizuya)', category: 'OMNI',
    lat: 35.030353, lng: 135.767728, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: soba and udon with a soy dipping sauce, tempura (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based sauces, duck and tempura (2026 reviews).',
    hours_raw: 'Wednesday–Sunday 11:00–15:00 and 17:00–20:00; Monday 11:00–15:00 only; closed Tuesday; hours may change (Tabelog). No reservations (Tabelog). Self-service: sit anywhere, order on a tablet, collect with a buzzer, water self-serve (September–October 2026). No cards or e-money; QR accepted (Tabelog); one October 2026 reviewer says cards were accepted. A traditional frontage on Teramachi just north of Imadegawa, beyond the Demachi Masugata shopping street; 12 min walk from Demachiyanagi Stn (Tabelog; September 2026).',
    hours: { 0: L, 2: LD, 3: LD, 4: LD, 5: LD, 6: LD }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi north of Imadegawa, by Demachi Masugata — 12 min walk from Demachiyanagi Stn',
    cuisine: 'Old-style soba and udon shop with a modern self-service system (2026 reviews) · zaru soba large ¥1,060, with a high mound of smooth noodles (August 2026) · kamo zaru ¥1,000 with a sharp, unsweet Kanto-style dipping sauce (April–October 2026) · tempura zaru soba ¥1,800; oroshi soba ¥930 (October 2026) · warm soba and udon in a Kansai-style broth; donburi (Tabelog; April 2026) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('司津屋 そば 寺町今出川'), menu_url: null,
    notes: '[Soba · Teramachi Imadegawa, by Demachi Masugata] A traditional-looking soba shop that has gone self-service: tablet ordering, a buzzer to collect and a Pepper robot by the door. Generous zaru soba, a duck zaru with a sharp, Kanto-style dip, tempura zaru and oroshi soba at old-fashioned prices. Busy at lunch. Closed Tuesday; Monday lunch only.',
    chef_bio: { chef_name: null, roles: ['Kitchen staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a soba, donburi and udon shop on Teramachi north of Imadegawa. Reviewers in 2026 describe a historic exterior and a modern self-service system with tablets, buzzers and a Pepper robot (August–October 2026); an October 2026 regular returning after about twenty years was surprised by the change.',
      philosophy: null, specialty: 'Kamo zaru soba.',
      anecdotes: [
        { text: 'An October 2026 diner, back after about twenty years, found the shop had become self-service.', source: R + 'B537436116/' },
        { text: 'An August 2026 visitor was surprised to find a Pepper robot inside the historic-looking shop.', source: R + 'B534679395/' },
        { text: 'An April 2026 guest noted the kamo zaru dip is Kanto-style — sharp soy, little sweetness — unlike most in Kansai.', source: R + 'B526005608/' },
      ],
      japanese_sources_summary: '食べログ: そば・丼・うどん、上京区寺町今出川上ル1-81、出町柳駅から徒歩12分、今出川駅から徒歩15分、水〜日 11:00〜15:00・17:00〜20:00、月 11:00〜15:00、火曜定休、予約不可、カード・電子マネー不可、QR 可、禁煙。口コミ (2026年4月〜10月、英語): Demachi Masugata の商店街を抜けたところ、昔ながらの外観、タブレットで注文、ブザーで受け取り、セルフの水、ペッパーくん、ざるそば大盛り1,060円、鴨ざる1,000円 (甘くない関東風のつけ汁)、天ざるそば1,800円、おろしそば930円、関西風のだしの温かいそばとうどん、昔のような値段、昼は混む、約20年ぶりの客はセルフ式に驚いた。',
      confidence: 'medium', sources: [TB, R + 'B526005608/', R + 'B528289493/', R + 'B534109146/', R + 'B534679395/', R + 'B535578895/', R + 'B536095333/', R + 'B536584594/', R + 'B537040096/', R + 'B537388739/', R + 'B537436116/'] },
    cultural_comfort: { level: 'english', note: 'Tablet ordering and buzzer pickup; sit anywhere; QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区寺町今出川上ル1-81',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.030353, 135.767728); the address gives no town or lot GSI can match, so loc_precise false; nearest Kyoto record 81 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534109146/', R + 'B537040096/', R + 'B537436116/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Zaru soba, large', '¥1,060', 'Soba', 'no', 'no', 'August 2026.', 'zaru_large'),
      it('', '', 'Kamo zaru soba', '¥1,000', 'Soba', 'no', 'no', 'October 2026.', 'kamo_zaru'),
      it('', '', 'Tempura zaru soba', '¥1,800', 'Soba', 'no', 'no', 'October 2026.', 'ten_zaru'),
      it('', '', 'Oroshi soba', '¥930', 'Soba', 'no', 'no', 'October 2026.', 'oroshi_soba'),
    ] }, {
    cuisine: '今風のセルフ式の昔ながらのそばとうどんの店 (2026年の口コミ)・ざるそば大盛り1,060円、なめらかな麺が高く盛られる (2026年8月)・甘さの少ないきりっとした関東風のつけ汁の鴨ざる1,000円 (2026年4〜10月)・天ざるそば1,800円、おろしそば930円 (2026年10月)・関西風のだしの温かいそばとうどん、丼 (食べログ、2026年4月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '今出川の北の寺町、Demachi Masugata のそば。出町柳駅から徒歩12分',
    gf_detail: 'グルテンフリー不可。醤油のつけ汁のそばとうどん、天ぷら (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのつゆ、鴨、天ぷら (2026年の口コミ)。',
    notes: '[そば・寺町今出川、Demachi Masugata のそば] 昔ながらの構えのまま、タブレットで注文してブザーで受け取るセルフ式になったそば屋。入口にはペッパーくん。たっぷりのざるそば、きりっとした関東風のつけ汁の鴨ざる、天ざる、おろしそばを昔のような値段で。昼は混む。火曜休み、月曜は昼のみ。',
  });
}

// ================================================================ 先斗町 魯ビン Pontocho Robin
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001889/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['11:30', '14:30'], ['17:00', '22:00']); const WE = day(['11:30', '14:30'], ['16:30', '22:00']);
  put({
    id: 'kyoto_pontocho_robin', name: '先斗町 魯ビン (Pontocho Robin)', category: 'OMNI',
    lat: 35.007549, lng: 135.771059, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses of sashimi, conger eel, tempura, duck hot pot and clay-pot rice, seasoned with soy and dashi; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, conger eel, sweetfish, duck, oysters and meat courses (2026 reviews).',
    hours_raw: 'Monday–Friday 11:30–14:30 (last order 13:30) and 17:00–22:00; Saturday, Sunday and holidays 11:30–14:30 and 16:30–22:00; food last order 21:00, drinks 21:30 (Tabelog). Reservations accepted; children under 5 in private rooms only (Tabelog). A 5% service charge, a private-room fee of ¥550 per person, and a New Year charge of ¥880 per person from 31 December to 4 January (Tabelog original サービス料５％、個室料550円（お一人様）、12月31日から1月４日までの正月期間は正月料金として昼夜ともにお一人様880円の正月料金をいただきます。). 50 seats at tatami tables with chairs; private rooms; a summer kawadoko deck over the Kamo River and second-floor window seats facing Higashiyama (Tabelog; August 2026). Cards and QR incl. PayPay and Alipay (Tabelog). A 170-year-old machiya on Pontocho; 5 min walk from Sanjo or Kawaramachi stations (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho, on the Kamo River — 5 min walk from Sanjo Stn',
    cuisine: 'Japanese courses, oysters and seafood in a 170-year-old Kyoto machiya (Tabelog) · summer kawadoko courses, e.g. ¥15,000, of sashimi, sweetfish, conger eel, tempura, meat and a hot pot, ending with eel clay-pot rice — leftovers made into onigiri to take home (July–August 2026) · duck hot pot course (August–October 2026) · à la carte extras such as matsutake dobin-mushi and steamed oysters (October 2026) · sake such as sparkling Dassai; red snapper or sanma mixed rice (August 2026) · lunch and dinner ¥10,000–15,000 (Tabelog)',
    website: null, gmaps: gm('先斗町 魯ビン'), menu_url: null,
    notes: '[Japanese · Pontocho machiya, Kamo River deck] A 170-year-old Pontocho townhouse with private rooms, second-floor windows on Daimonji and a summer kawadoko deck over the Kamo River: seasonal courses of conger eel, sweetfish and sashimi, a duck hot pot, and clay-pot rice to finish. Warm, English-capable service. 5% service plus room fees; some find it pricey for the food. Open daily.',
    chef_bio: { chef_name: null, roles: ['Kitchen and service staff (unnamed)'], origin: null,
      background: 'Per Tabelog: authentic Japanese meals in a 170-year-old Kyo-machiya on Pontocho, with private rooms and a riverside deck in summer; registered as an official listing by the operator. Reviewers in 2026 praise efficient, warm service, staff who speak English to overseas guests and take photos for celebrations.',
      philosophy: 'Authentic Japanese meals in a 170-year-old machiya (Tabelog).', specialty: 'Kawadoko course; duck hot pot.',
      anecdotes: [
        { text: 'A July 2026 kawadoko booking met a thunderstorm; the pair dined by an indoor window over the Kamo River instead.', source: R + 'B397783362/' },
        { text: 'An August 2026 couple dining on the riverside deck for a birthday spotted a nutria in the river.', source: R + 'B535612471/' },
        { text: 'An October 2026 diner found the extra steamed oysters small and the value only middling, though the duck hot pot was good.', source: R + 'B537940112/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・牡蠣・海鮮、中京区先斗町通り若松町137-4、京阪三条駅・阪急河原町駅から徒歩5分、月〜金 11:30〜14:30 (L.O.13:30)・17:00〜22:00、土日祝 11:30〜14:30・16:30〜22:00、料理L.O.21:00、ドリンクL.O.21:30、予約可 (5歳未満は個室のみ)、サービス料5%、個室料550円 (1人)、12月31日〜1月4日は正月料金1人880円、50席、座卓と椅子、カード・QR 可、築170年の京町家。口コミ (2026年7月〜10月、英語): 夏の川床、2階の窓から大文字と東山、15,000円のコース (お造り、鮎、鱧、天ぷら、肉、鍋、鰻の土鍋ご飯、残りはおにぎりに)、鴨鍋のコース、松茸の土瓶蒸し、蒸し牡蠣、Dassai のスパークリング、鯛や秋刀魚の炊き込みご飯、英語の接客、記念日に写真、外国人客が多い、ヌートリア、割高との声。',
      confidence: 'medium', sources: [TB, R + 'B397783362/', R + 'B481735958/', R + 'B532929403/', R + 'B533253482/', R + 'B534169371/', R + 'B534346174/', R + 'B535119180/', R + 'B535612471/', R + 'B537940112/', R + 'B538703625/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff; book the deck in summer; 5% service and room fees; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通り若松町137-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007549, 135.771059); cross-checked: GSI 京都府京都市中京区若松町137番地 (lot) 49 m; kyoto_eau_de_vie_pontocho is 5.9 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B481735958/'],
    price_note: 'Course price from an August 2026 review; plus 5% service and room fees.', last_checked: TODAY, items: [
      it('', '', 'Kawadoko course (sashimi to eel clay-pot rice)', '¥15,000', 'Course', 'ask', 'no', 'August 2026.', 'kawadoko_course'),
      it('', '', 'Duck hot pot course', '', 'Course', 'ask', 'no', 'October 2026.', 'kamo_nabe'),
    ] }, {
    cuisine: '築170年の京町家の日本料理、牡蠣、海鮮 (食べログ)・夏の川床のコース、例: 15,000円で、お造り、鮎、鱧、天ぷら、肉、鍋、締めは鰻の土鍋ご飯、残りはおにぎりにして持ち帰り (2026年7〜8月)・鴨鍋のコース (2026年8〜10月)・追加の松茸の土瓶蒸しや蒸し牡蠣 (2026年10月)・Dassai のスパークリングなどの日本酒、鯛や秋刀魚の炊き込みご飯 (2026年8月)・昼も夜も10,000〜15,000円 (食べログ)',
    neighborhood: '鴨川沿いの先斗町。三条駅から徒歩5分',
    gf_detail: '要確認。醤油とだしのお造り、鱧、天ぷら、鴨鍋、土鍋ご飯のコース。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、鱧、鮎、鴨、牡蠣、肉のコース (2026年の口コミ)。',
    notes: '[日本料理・先斗町の町家、鴨川の川床] 築170年の先斗町の町家。個室、大文字の見える2階の窓際、夏は鴨川の川床。鱧や鮎、お造りの季節のコース、鴨鍋、締めの土鍋ご飯。温かく英語もできる接客。サービス料5%と個室料、料理の割に高いと感じる人も。無休。',
  });
}

save();
