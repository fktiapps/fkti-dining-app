// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 37.
//   + 月と六ペンス Tsuki to Rokupensu (silent members-only reading café; Tabelog says no new members — listed per Greg's
//     2026-11-05 members-only ruling, restriction stated)
//   + 初音鮨 Hatsune Zushi (Kyoto-style pressed and saba sushi since 1935, run by a couple, Sanjo Shirakawa)
//   + そば酒房 徳兵衛 Soba Shubo Tokubei (house-made soba and Kyoto dishes, Kyoto Station Building)
//   + 京都 鮨 まつもと Kyoto Sushi Matsumoto (Edomae omakase by Karasuma Shichijo)
//   Same-name counts first, per brand or operator (2026-11-06): 月と六ペンス — one. 初音鮨 — one. 徳兵衛 — one (official site
//   lists only this shop). 京都 鮨 まつもと — one; its site says the chef went independent from an Akasaka sushi shop with a
//   Michelin star two years running (a September 2026 review calls it a sister shop); data's 鮨まつもと (kyoto_sushi_matsumoto_gion,
//   Gion, chef Daiten Matsumoto) is a different restaurant.
//   Taken on 2026-11-06: `next core 200` (lane) gave 月と六ペンス 26007712 and 初音鮨 26008864; `next notable 200` (lane) gave
//   徳兵衛 26026012 and 京都 鮨 まつもと 26038972. None is in data/kyoto.json: grep by name and address (松屋町62 杉野ビル,
//   石泉院町394, 東塩小路町901 京都駅ビル東ゾーン 2F, 真苧屋町99) found none.
//   Service charges per Tabelog's Japanese original: 京都 鮨 まつもと 「サービス料10%」; the others none listed (月と六ペンス
//   has a ¥1,000 stay charge with a drink per an April 2024 review). No halal claims; no owner deaths in the sources.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-37');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 月と六ペンス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26007712/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '20:00']);
  put({
    id: 'kyoto_tsuki_to_rokupensu', name: '月と六ペンス (Tsuki to Rokupensu)', category: 'OMNI',
    lat: 35.013833, lng: 135.762317, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee with toast, sandwiches and croque monsieur (2018–25 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Coffee, café au lait and hot milk, cheese and sardine sandwiches (2018–25 reviews); no vegan information.',
    hours_raw: 'MEMBERS ONLY: Tabelog states the café is now members-only and is not accepting new membership applications. Earlier, membership was open by registering a name (February 2025) or by Instagram message (May 2025). Wed–Sat 12:00–20:00; closed Sunday–Tuesday and holidays (Tabelog). No reservations; cash only (Tabelog). A stay of 1–3 hours cost ¥1,000 with one drink (April 2024). No talking and no computers (Tabelog; 2017–25 reviews). 17 counter seats, up a narrow stair on the 2nd floor of 杉野ビル on Nijo west of Takakura (Tabelog; October 2018). Opened 8 September 2008 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nijo Takakura — 392 m from Marutamachi Stn',
    cuisine: 'A silent reading café with shelves of books (2017–25 reviews) · deep-roast coffee ¥480 (February 2017), café au lait, iced coffee, hot milk (2018–25 reviews) · fruit sandwich ¥600 (April 2024), Camembert and mushroom sandwich (October 2018), oil-sardine sandwich (February 2025), honey cinnamon toast (May 2025), croque monsieur and toast; drinks and toast at ¥400 a size (February 2025) · beer and wine (February 2025)',
    website: null, gmaps: gm('月と六ペンス 京都 二条'), menu_url: TB,
    notes: '[Reading café · Nijo Takakura, members only and silent] A book-lined second-floor counter where no one talks and laptops are banned: deep-roast coffee, café au lait and toast or sandwiches while you read. Now members-only, and Tabelog says no new members are being accepted, so most visitors cannot get in. Cash only.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Per Tabelog: a café opened 8 September 2008 that has since become members-only and no longer accepts new applications. A February 2025 visitor described an owner devoted to books and coffee who wants to keep the space undisturbed.',
      philosophy: 'A quiet space for reading and thinking alone (2017–25 reviews).', specialty: 'Coffee and toast in silence.',
      anecdotes: [
        { text: 'A November 2024 visitor, after years of finding it closed, asked about membership and was let in.', source: R + 'B494898743/' },
        { text: 'A November 2020 visitor found it quieter than a music café — even whispering felt awkward.', source: R + 'B450783108/' },
        { text: 'A February 2025 visitor praised a bookshelf full of titles worth picking up, unlike shallow "book cafés".', source: R + 'B501470929/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、中京区二条通高倉西入ル松屋町62 杉野ビル 2F、丸太町駅から392m、水〜土12:00〜20:00、日月火祝休み、予約不可、会員制 (現在、新規の入会は受け付けていない)、現金のみ、カウンター17席、禁煙、店内でのパソコンは不可、2008年9月8日オープン。口コミ (2017年2月〜2025年5月、英語): 会話禁止の読書のためのカフェ、本棚、深煎りのコーヒー480円、1〜3時間1,000円 (1ドリンク付き)、フルーツサンド600円、カマンベールときのこのサンド、オイルサーディンのサンド、はちみつシナモントースト、カフェオレ、以前は名前の登録や Instagram で入会できた。',
      confidence: 'medium', sources: [TB, R + 'B110729827/', R + 'B111262790/', R + 'B220879025/', R + 'B304269350/', R + 'B365708783/', R + 'B446164494/', R + 'B450783108/', R + 'B467108179/', R + 'B494898743/', R + 'B501470929/', R + 'B506220067/', R + 'B507551259/'] },
    cultural_comfort: { level: 'guide_only', note: 'Members only, and Tabelog says no new members are being accepted; only an existing member’s arrangement could get you in. Silence and no laptops inside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通高倉西入ル松屋町62 杉野ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (members-only notice); reviews dated through May 2025.' },
    pin_source: `Tabelog ${TB} (35.013833, 135.762317); cross-checked: GSI 京都府京都市中京区松屋町62番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B467108179/', R + 'B220879025/', R + 'B506220067/'],
    price_note: 'Prices from 2017, 2024 and 2025 reviews; members only.', last_checked: TODAY, items: [
      it('', '', 'Stay of 1–3 hours with one drink', '¥1,000', 'Café', '', 'ask', 'April 2024.', 'stay'),
      it('', '', 'Fruit sandwich', '¥600', 'Food', 'no', 'no', 'April 2024.', 'fruit_sando'),
      it('', '', 'Deep-roast coffee', '¥480', 'Drinks', '', 'vegan', 'February 2017.', 'coffee'),
      it('', '', 'Toast', '¥400', 'Food', 'no', 'ask', 'February 2025.', 'toast'),
    ] }, {
    cuisine: '本棚のある、話さずに読むカフェ (2017〜2025年の口コミ)・深煎りのコーヒー480円 (2017年2月)、カフェオレ、アイスコーヒー、ホットミルク (2018〜2025年の口コミ)・フルーツサンド600円 (2024年4月)、カマンベールときのこのサンド (2018年10月)、オイルサーディンのサンド (2025年2月)、はちみつシナモントースト (2025年5月)、クロックムッシュとトースト、飲み物とトーストはどのサイズも400円 (2025年2月)・ビールとワイン (2025年2月)',
    neighborhood: '二条高倉。丸太町駅から392m',
    gf_detail: '要確認。コーヒーとトースト、サンドイッチ、クロックムッシュ (2018〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。コーヒー、カフェオレ、ホットミルク、チーズやサーディンのサンド (2018〜2025年の口コミ)。ヴィーガンの情報はない。',
    notes: '[読書のカフェ・二条高倉、会員制で会話なし] 本の並ぶ2階のカウンター。誰も話さず、パソコンも禁止。深煎りのコーヒーやカフェオレ、トーストやサンドイッチと本を。今は会員制で、食べログによると新規の入会は受け付けていないので、ほとんどの人は入れない。現金のみ。',
  });
}

// ================================================================ 初音鮨
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26008864/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_hatsune_zushi', name: '初音鮨 (Hatsune Zushi)', category: 'OMNI',
    lat: 35.010106, lng: 135.780838, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pressed, saba and chirashi sushi with soy-sweetened toppings such as anago, and clear soup (2022–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish sushi and a dashi soup (2022–26 reviews).',
    hours_raw: '11:00–19:00 straight through, handy between lunch and dinner (Tabelog; September 2025); closed Thursday (Tabelog). Reservations accepted (Tabelog). CASH ONLY — no cards, e-money or QR (Tabelog). 15 seats: a 7-seat counter and one tatami room for 6 (Tabelog; June 2024). One parking space (Tabelog). English signs inside (October 2025). On a lane north of Sanjo by the Shirakawa; 2 min from Higashiyama Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanjo Shirakawa — 2 min from Higashiyama Stn',
    cuisine: 'Kyoto-style sushi from a shop founded in 1935, using rice from Tango (June 2026) · the Hatsune set of five saba sushi, chirashi and soup ¥2,000 (June 2026) · Kyo-zushi of pressed anago, sea bream and shrimp with rolls and saba ¥1,400 (September 2025); a roll and chirashi set with soup ¥1,400 (October 2025); ayu, saba, box and roll sushi ¥1,350 (June 2024) · nigiri (September 2025) · steamed sushi in winter (January 2022) · bottled beer ¥700 (June 2026)',
    website: 'http://hatsune.iinaa.net/', gmaps: gm('初音鮨 東山 白川'), menu_url: TB,
    notes: '[Kyoto sushi · Sanjo Shirakawa, an old couple’s counter since 1935] A seven-seat counter by the Shirakawa where an elderly couple serve Kyoto-style saba, pressed and chirashi sushi all afternoon — the Hatsune set is ¥2,000, Kyo-zushi ¥1,400, and steamed sushi in winter. Open 11:00–19:00 without a break, handy after the Okazaki museums. Cash only; closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed) and spouse, an elderly couple who run the shop (March and May 2025)'], origin: null,
      background: 'Per a June 2026 review: a long-established shop founded in 1935, using rice from Tango in northern Kyoto Prefecture. Reviews from March and May 2025 describe an elderly couple running the counter.',
      philosophy: null, specialty: 'Saba sushi; Kyo-zushi; winter steamed sushi.',
      anecdotes: [
        { text: 'A January 2022 visitor arrived at 11:00 before the noren was up; the owner came out and opened up, then offered as much saba sushi as wanted while the steamed sushi cooked.', source: R + 'B444900319/' },
        { text: 'A December 2024 diner shared Osaka-style and saba sushi with a 91-year-old mother.', source: R + 'B508629901/' },
        { text: 'A March 2025 visitor, nervous at a sushi counter, relaxed on seeing locals and foreigners already there, and was moved by the nori in the rolls.', source: R + 'B502842609/' },
      ],
      japanese_sources_summary: '食べログ: 寿司、東山区三条通北裏白川筋西入石泉院町394、東山駅から徒歩2分、11:00〜19:00、木曜休み、予約可、現金のみ、15席 (カウンター7、座敷1室6名)、駐車場1台。口コミ (2022年1月〜2026年6月、英語): 1935年創業、Tango の米、初音 (鯖寿司5切れ、ちらし、吸物) 2,000円、京寿司 (穴子・鯛・海老の押し寿司、巻き、鯖) 1,400円、ちらしと巻きのセット1,400円、鮎・鯖・箱・巻き1,350円、冬の蒸し寿司、瓶ビール700円、年配の夫婦が営む、英語の案内あり。',
      confidence: 'medium', sources: [TB, R + 'B444900319/', R + 'B461492680/', R + 'B486998987/', R + 'B501878901/', R + 'B502842609/', R + 'B506796047/', R + 'B508629901/', R + 'B509341498/', R + 'B514508346/', R + 'B515577673/', R + 'B529961462/', R + 'B530139689/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order a set at the counter; English signs inside (October 2025); cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区三条通北裏白川筋西入石泉院町394',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.010106, 135.780838); cross-checked: GSI 京都府京都市東山区石泉院町394番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529961462/', R + 'B530139689/', R + 'B514508346/'],
    price_note: 'Prices from September 2025 and June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hatsune set (saba sushi, chirashi, soup)', '¥2,000', 'Sets', 'ask', 'no', 'June 2026.', 'hatsune_set'),
      it('', '', 'Kyo-zushi (pressed sushi assortment)', '¥1,400', 'Sets', 'ask', 'no', 'September 2025.', 'kyozushi'),
      it('', '', 'Roll and chirashi set with soup', '¥1,400', 'Sets', 'ask', 'no', 'October 2025.', 'maki_chirashi'),
      it('', '', 'Steamed sushi (winter)', '', 'Seasonal', 'ask', 'no', 'January 2022.', 'mushizushi'),
    ] }, {
    cuisine: '1935年創業の店の京寿司。米は Tango 産 (2026年6月)・鯖寿司5切れ、ちらし、吸物の初音2,000円 (2026年6月)・穴子、鯛、海老の押し寿司に巻きと鯖の京寿司1,400円 (2025年9月)、巻きとちらしに吸物のセット1,400円 (2025年10月)、鮎・鯖・箱・巻きの盛り合わせ1,350円 (2024年6月)・握り (2025年9月)・冬は蒸し寿司 (2022年1月)・瓶ビール700円 (2026年6月)',
    neighborhood: '三条白川。東山駅から徒歩2分',
    gf_detail: '要確認。押し寿司、鯖寿司、ちらし。穴子などの甘辛いネタと吸物 (2022〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚の寿司と出汁の吸物 (2022〜2026年の口コミ)。',
    notes: '[京寿司・三条白川、1935年からの夫婦のカウンター] 白川沿いの7席のカウンターで、年配の夫婦が鯖寿司、押し寿司、ちらしを通しで出す。初音は2,000円、京寿司は1,400円、冬は蒸し寿司。11時〜19時の通し営業で、岡崎の美術館の帰りにも。現金のみ、木曜休み。',
  });
}

// ================================================================ そば酒房 徳兵衛
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26026012/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://sobasyubo-tokubee.com/';
  const A = day(['11:00', '22:30']); const B = day(['11:00', '23:00']);
  put({
    id: 'kyoto_soba_shubo_tokubei', name: 'そば酒房 徳兵衛 (Soba Shubo Tokubei)', category: 'OMNI',
    lat: 34.985796, lng: 135.760623, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a menu: udon, tempura, fried dishes, kara-age; the soba blend is not stated (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba and udon in dashi, herring soba, sashimi, yakitori (2026 reviews).',
    hours_raw: 'Sun–Thu and holidays 11:00–22:30 (last order 21:30); Fri, Sat and days before holidays 11:00–23:00 (last order 22:00); lunch 11:00–15:00; open all year, with changed hours at New Year (Tabelog). Reservations accepted; call for same-day cancellations (Tabelog). Cards, Suica-type e-money, PayPay and d Barai (Tabelog). 242 seats (about 220 per the official site): sunken tatami and table seats, private rooms for 4–20 with a 2-hour limit, groups up to 54 (Tabelog; official site). Non-smoking with a smoking room (Tabelog). Kyoto Station Building East Zone 2F, by the Kyoto Theatre entrance; 1 min from Kyoto Stn (Tabelog; October 2026). Opened 1 August 2015 (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto Station Building East Zone — 1 min from Kyoto Stn',
    cuisine: 'A soba izakaya: soba made in-house every day from domestic buckwheat, the flour changed with the seasons, plus Kyoto dishes (official site) · tempura of seasonal Kyoto vegetables; fried nama-fu and yuba in broth (official site) · fresh yuba, nama-fu dengaku, yuba rolls (September–October 2026) · zaru soba with tempura, a sushi and soba set, kitsune soba, herring soba, Kujo green onion and curry udon, kamameshi (2026 reviews) · sashimi, yakitori, fried oysters, the "Haikara" set of a highball or lemon sour with kara-age (2026 reviews) · lunch sets around ¥2,000 (October 2026); a lunch banquet course with 120 minutes of drinks ¥5,500 (official site)',
    website: OF, gmaps: gm('そば酒房 徳兵衛 京都駅'), menu_url: OF,
    notes: '[Soba izakaya · Kyoto Station Building, a big room by the Kyoto Theatre] A 200-plus-seat soba tavern a minute from the platforms: soba made daily from domestic buckwheat, tempura of Kyoto vegetables, fresh yuba and nama-fu dengaku, with private rooms for groups and plenty of sake. Open 11:00 to late every day — handy before a train. One diner found the soba dipping sauce ordinary.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site: a soba tavern in the Kyoto Station Building serving soba made in-house daily from domestic buckwheat, with the flour varied by season, and Kyoto dishes; about 220 seats with sunken tatami and table seating and private rooms for 6, 18, 36 and more. Opened 1 August 2015 (Tabelog).',
      philosophy: null, specialty: 'House-made soba; yuba and nama-fu dishes.',
      anecdotes: [
        { text: 'A September 2026 diner found the zaru soba dipping sauce tasted bought-in, but the soba good enough not to mind.', source: R + 'B536085078/' },
        { text: 'An October 2026 visitor, expecting little from a station restaurant at a quiet lunch, was won over by the rolled omelette and the kitsune soba.', source: R + 'B536624138/' },
        { text: 'An October 2026 group drank bottled beer from chilled aluminium cups whose blue line appears as the beer gets colder.', source: R + 'B537733289/' },
      ],
      japanese_sources_summary: '公式サイト: 京都駅ビル内のそば酒房、国産蕎麦粉で毎日自社製麺し季節で蕎麦粉を変える、旬の京野菜の天ぷら、京生麩と湯葉の揚げだし、120分飲み放題付きの昼宴会コース5,500円、総席数220席、掘りごたつとテーブル、個室多数。食べログ: 居酒屋・そば・日本料理、下京区東塩小路町901 京都駅ビル東ゾーン 2F、京都駅から徒歩1分、日〜木・祝11:00〜22:30 (L.O. 21:30)、金土・祝前日11:00〜23:00 (L.O. 22:00)、無休、予約可、カード・電子マネー・PayPay 可、242席、個室は2時間まで、禁煙 (喫煙室あり)、2015年8月1日オープン。口コミ (2023年12月〜2026年10月、英語): 生湯葉、生麩田楽、ざる蕎麦と天ぷら、寿司と蕎麦のセット、にしん蕎麦、カレーうどん、釜飯、刺身、焼き鳥、ハイカラセット、昼のセット約2,000円。',
      confidence: 'medium', sources: [TB, OF, R + 'B476237271/', R + 'B522995106/', R + 'B535247381/', R + 'B535707530/', R + 'B536085078/', R + 'B536271481/', R + 'B536624138/', R + 'B536794799/', R + 'B537412952/', R + 'B537557294/', R + 'B537733289/', R + 'B538068018/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Big, busy station restaurant; walk in or book a private room; tourists and office workers alike (September 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区東塩小路町901 京都駅ビル東ゾーン 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.985796, 135.760623); cross-checked: GSI 京都府京都市下京区東塩小路町901番地 (lot) 227m — the lot point sits at the centre of the long station building, so this is marked single; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [OF, R + 'B537557294/'],
    price_note: 'Banquet price from the official site; lunch sets about ¥2,000 (October 2026).', last_checked: TODAY, items: [
      it('', '', 'Lunch banquet course with 120 min of drinks', '¥5,500', 'Courses', 'no', 'no', 'Official site.', 'lunch_banquet'),
      it('', '', 'Lunch set', '¥2,000', 'Lunch', 'no', 'no', 'About ¥2,000 (October 2026).', 'lunch_set'),
      it('', '', 'Zaru soba', '', 'Soba', 'ask', 'no', 'September 2026.', 'zaru_soba'),
      it('', '', 'Nama-fu dengaku', '', 'Small dishes', 'no', 'ask', 'September–October 2026.', 'namafu_dengaku'),
    ] }, {
    cuisine: 'そば酒場: 国産蕎麦粉で毎日自社製麺し、季節で蕎麦粉を変える蕎麦と京料理 (公式サイト)・旬の京野菜の天ぷら、京生麩と湯葉の揚げだし (公式サイト)・生湯葉、生麩田楽、湯葉巻き (2026年9月〜10月)・ざる蕎麦と天ぷら、寿司と蕎麦のセット、きつね蕎麦、にしん蕎麦、Kujo green onion のカレーうどん、釜飯 (2026年の口コミ)・刺身、焼き鳥、牡蠣フライ、ハイボールかレモンサワーに唐揚げの「ハイカラセット」 (2026年の口コミ)・昼のセット約2,000円 (2026年10月)、120分飲み放題付きの昼宴会コース5,500円 (公式サイト)',
    neighborhood: '京都駅ビル東ゾーン。京都駅から徒歩1分',
    gf_detail: 'グルテンフリーではない。うどん、天ぷら、揚げ物、唐揚げ。蕎麦の割合は書かれていない (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁の蕎麦とうどん、にしん蕎麦、刺身、焼き鳥 (2026年の口コミ)。',
    notes: '[そば酒場・京都駅ビル、京都劇場そばの大きな店] ホームから1分、200席以上の蕎麦の酒場。国産蕎麦粉で毎日打つ蕎麦、京野菜の天ぷら、生湯葉や生麩田楽を、日本酒とともに。個室も多く宴会向き。毎日11時から夜遅くまでで、列車の前にも便利。つゆは普通だったとの声も。',
  });
}

// ================================================================ 京都 鮨 まつもと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26038972/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://k-matsumoto.net/';
  const WD = day(['11:30', '14:00'], ['17:00', '23:00']); const WE = day(['11:30', '14:00'], ['16:00', '23:00']);
  put({
    id: 'kyoto_kyoto_sushi_matsumoto', name: '京都 鮨 まつもと (Kyoto Sushi Matsumoto)', category: 'OMNI',
    lat: 34.989418, lng: 135.760049, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edomae omakase with marinated and soy-brushed fish, anago with sweet sauce, kanpyo rolls (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish courses with chawanmushi and a soup (2026 reviews).',
    hours_raw: 'Lunch 11:30–14:00 daily; dinner 17:00–23:00 on weekdays, 16:00–23:00 at weekends and holidays; closed irregularly (Tabelog). Reservations accepted; same-day cancellations are charged 100%, and phone cancellations are not taken outside opening hours (Tabelog). Service charge 10% (Tabelog, Japanese text: 「サービス料10%」). Cards; no e-money or QR (Tabelog). 24 seats with a counter and private rooms (Tabelog; August and October 2026). By the north-east corner of Karasuma Shichijo; 4 min from Kyoto Stn (Tabelog; September 2026). Opened 3 April 2023 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma Shichijo — 4 min from Kyoto Stn',
    cuisine: 'Traditional Edomae sushi by a chef who went independent from an Akasaka sushi shop with a Michelin star two years running (official site) · omakase courses: lunch ¥9,800 (October 2026), a weekday omakase nigiri course ¥14,000 (October 2026); one couple paid ¥5,800 for a lunch course with drinks (August 2026) · small dishes such as corn tofu, grilled kampachi with yuzu, an ikura rice bowl scented with yuzu, chawanmushi with sea-bream shuto (August–October 2026) · nigiri of lean and fatty tuna, flounder, striped jack, scallop, squid with sea urchin, kinmedai, anago, kanpyo roll (2026 reviews)',
    website: OF, gmaps: gm('京都 鮨 まつもと 烏丸七条'), menu_url: TB + 'dtlmenu/',
    notes: '[Edomae sushi · Karasuma Shichijo, an omakase counter by Kyoto Stn] A calm Edomae counter four minutes from Kyoto Stn, by a chef from an Akasaka Michelin-starred shop: corn tofu, yuzu-scented ikura rice, sea-bream shuto chawanmushi, then nigiri — lunch from ¥9,800, a weekday nigiri course at ¥14,000. The chef chats in English with overseas guests. 10% service; same-day cancellations charged in full.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), formerly of an Akasaka sushi shop (official site); speaks English (October 2026)'], origin: null,
      background: 'Per the official site: 京都 鮨 まつもと went independent from an Akasaka shop awarded a Michelin star two years running, serving traditional, orthodox Edomae sushi in a relaxed setting. A September 2026 review calls it a sister restaurant of the one-star Sushi Matsumoto in Akasaka. Opened 3 April 2023 (Tabelog).',
      philosophy: 'Traditional, orthodox Edomae sushi (official site).', specialty: 'Omakase nigiri course.',
      anecdotes: [
        { text: 'An October 2026 diner found the chef friendly and chatting in English with overseas guests.', source: R + 'B536904556/' },
        { text: 'A July 2026 diner liked the ideas but found the masunosuke marinade a little dry and the corn tofu not quite smooth.', source: R + 'B532486644/' },
        { text: 'An October 2026 family booked a private room so a child could come along to the ¥9,800 lunch omakase.', source: R + 'B464156581/' },
      ],
      japanese_sources_summary: '公式サイト: ミシュランガイドで2年連続一つ星の赤坂の名店から独立、伝統かつ正統の江戸前鮨、くつろげる空間。食べログ: 寿司・日本料理・海鮮、下京区真苧屋町99、京都駅から徒歩4分、昼11:30〜14:00、夜 平日17:00〜23:00・土日祝16:00〜23:00、不定休、予約可、当日キャンセルは100%、営業時間外の電話キャンセル不可、サービス料10%、カード可、24席、2023年4月3日オープン。口コミ (2026年7月〜10月、英語): 昼のおまかせ9,800円、平日限定のおまかせ握り14,000円、とうもろこし豆腐、カンパチの柚子焼き、柚子香るいくら丼、鯛の酒盗の茶碗蒸し、まぐろ、金目鯛、穴子、かんぴょう巻き、個室、英語を話す大将、マスノスケがやや乾いていたとの声。',
      confidence: 'medium', sources: [TB, OF, R + 'B464156581/', R + 'B495736965/', R + 'B516083083/', R + 'B532486644/', R + 'B533478944/', R + 'B533588080/', R + 'B534167527/', R + 'B534305925/', R + 'B534631284/', R + 'B535986923/', R + 'B536904556/', R + 'B538267419/'] },
    cultural_comfort: { level: 'english', note: 'The chef chats in English with overseas guests (October 2026). Book ahead; same-day cancellations are charged in full.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区真苧屋町99',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989418, 135.760049); cross-checked: GSI 京都府京都市下京区真苧屋町 (town only; no lot match) 47m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B464156581/', R + 'B516083083/'],
    price_note: 'Course prices from October 2026 reviews; 10% service charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase course', '¥9,800', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_omakase'),
      it('', '', 'Weekday omakase nigiri course', '¥14,000', 'Courses', 'ask', 'no', 'October 2026.', 'weekday_nigiri'),
      it('', '', 'Service charge', '10%', 'Charge', '', '', 'Tabelog.', 'service_charge'),
    ] }, {
    cuisine: 'ミシュラン2年連続一つ星の赤坂の店から独立した大将の、伝統的な江戸前鮨 (公式サイト)・おまかせ: 昼9,800円 (2026年10月)、平日限定のおまかせ握り14,000円 (2026年10月)。飲み物込みで昼5,800円だった夫婦も (2026年8月)・とうもろこし豆腐、カンパチの柚子焼き、柚子香るいくら丼、鯛の酒盗の茶碗蒸しなどの小皿 (2026年8月〜10月)・赤身と大トロ、平目、縞鯵、帆立、イカのウニのせ、金目鯛、穴子、かんぴょう巻きの握り (2026年の口コミ)',
    neighborhood: '烏丸七条。京都駅から徒歩4分',
    gf_detail: '要確認。漬けや煮切りを塗った魚、甘いたれの穴子、かんぴょう巻きの江戸前のおまかせ (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚のコースに茶碗蒸しや椀物 (2026年の口コミ)。',
    notes: '[江戸前鮨・烏丸七条、京都駅近くのおまかせのカウンター] 京都駅から4分の落ち着いた江戸前のカウンター。赤坂のミシュラン一つ星の店出身の大将が、とうもろこし豆腐、柚子香るいくら丼、鯛の酒盗の茶碗蒸し、そして握りを出す。昼は9,800円から、平日の握りのコースは14,000円。大将は海外の客と英語で話す。サービス料10%、当日キャンセルは全額。',
  });
}

save();
