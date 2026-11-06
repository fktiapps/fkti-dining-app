// Kyoto priority (kyoto-missed), worker osw13, batch 68 — lane: Tabelog id mod 6 = 0.
// Core: ポコ, たかひとり. Notable: 京もつ鍋 亀八 本店, 微風台南 TEARSⅡ.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-68');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26027478', 'chain: 牛カツ京都勝牛 京都ヨドバシ店 is one of at least five 牛カツ京都勝牛 shops in the Kyoto crawl alone (京都ヨドバシ, 京都駅前, 京都駅八条口みやこみち, 清水五条坂, 四条烏丸SUINA室町); 5+ same-name = chain (Greg ruling 2026-11-05)');

// ================================================================ ポコ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26012274/'; const R = TB + 'dtlrvwlst/';
  const H = day(['06:00', '19:30']);
  put({
    id: 'kyoto_kissa_poco_ekimae', name: 'ポコ (Poco)', category: 'OMNI',
    lat: 34.987463, lng: 135.76123, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: toast and sandwich breakfasts; omurice and dry curry are not described for wheat (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg, ham and butter breakfasts, omurice (2024–2026 reviews).',
    hours_raw: 'Tabelog: daily 6:00–19:30; breakfast 6:00–11:00. No reservations. Smoking allowed — ashtrays on every table (Tabelog; February 2026). Cash only: no cards, e-money or QR (Tabelog; July 2025). 14 seats: 6 at the counter, 8 at tables. Across from the Kyoto Station bus rotary, 2 min walk (Tabelog; reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kyoto Station, central exit — 2 min walk, across from the bus rotary',
    cuisine: 'A Showa-era kissaten opposite Kyoto Station, open from 6 a.m. (2024–2026 reviews) · four breakfast sets: toast and boiled egg ¥650; B set ¥600; C set of toast, salad (with banana), boiled egg and coffee ¥700; ham-egg-cucumber sandwich set ¥750 (December 2025–June 2026) · home-style omurice wrapped in a thin, not-sweet omelette; dry curry ¥750 (February 2026) · iced coffee ¥500, mixed juice, coffee jelly (2025–2026 reviews)',
    website: null, gmaps: gm('喫茶 ポコ 京都駅 東塩小路町550'), menu_url: null,
    notes: '[Kissaten · Kyoto Station, 6 a.m. breakfasts with smoking] A narrow, Showa-era coffee shop across from the Kyoto Station bus rotary that opens at six: toast-and-egg breakfast sets from ¥600, a grandmotherly omurice and dry curry for lunch, plain coffee. Smoking is allowed throughout — a non-smoker found it hard going (March 2026). Cash only.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers from 2024 to 2026 describe a long, narrow room kept as it was in the Showa era, a master, an older couple who "seemed to be running the place" (February 2026), local regulars, and a smell of tobacco and coffee.',
      philosophy: null,
      specialty: 'Omurice; morning sets.',
      anecdotes: [
        { text: 'March 2026: "I entered without knowing it was a smoking establishment… the environment was not ideal for me since I don\'t smoke. However, the service from the lady… was excellent."', source: R + 'B523543558/' },
        { text: '"I hope places like this continue to exist forever." — June 2026.', source: R + 'B530574762/' },
      ],
      japanese_sources_summary: '食べログ: ポコ、喫茶店・オムライス、下京区東洞院通塩小路上る東塩小路町550、JR京都駅から徒歩2分、毎日 6:00〜19:30 (モーニング 6:00〜11:00)、予約不可、14席 (カウンター6、テーブル8)、喫煙可、カード・電子マネー・QR不可。口コミ (2024年4月〜2026年10月、英語): 京都駅前のロータリーの向かい、昭和の喫茶店、全席に灰皿、モーニングは4種 (トーストとゆで卵650円、Bセット600円、Cセット700円、サンドイッチセット750円)、甘くない薄焼き卵のオムライス、ドライカレー750円、アイスコーヒー500円、ミックスジュース、コーヒーゼリー、現金のみ、年配の夫婦が切り盛りしているようだという声、たばこが苦手な人にはつらいという声。',
      confidence: 'medium', sources: [TB, R + 'B483274036/', R + 'B498618017/', R + 'B510268421/', R + 'B516252689/', R + 'B517044604/', R + 'B518324879/', R + 'B522025070/', R + 'B523543558/', R + 'B530574762/', R + 'B537368304/'] },
    cultural_comfort: { level: 'japanese', note: 'Smoking allowed throughout; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院通塩小路上る東塩小路町550',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.987463, 135.761230); cross-checked: GSI 京都府京都市下京区東塩小路町550番地 (lot) 41m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518324879/', R + 'B522025070/', R + 'B530574762/'],
    price_note: 'Prices from 2025–2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'C set: toast, salad, boiled egg, coffee', '¥700', 'Morning', 'no', 'no', 'December 2025; 6:00–11:00.', 'morning_set'),
      it('', '', 'Toast and boiled egg (with coffee)', '¥650', 'Morning', 'no', 'no', 'June 2026.', 'morning_set'),
      it('', '', 'Dry curry', '¥750', 'Lunch', 'ask', 'no', 'February 2026.', 'curry'),
      it('', '', 'Omurice', null, 'Lunch', 'ask', 'no', '2024–2025 reviews.', 'omurice'),
    ] }, {
    cuisine: '京都駅の向かいで朝6時から開く昭和の喫茶店 (2024〜2026年の口コミ)・モーニングは4種。トーストとゆで卵650円、Bセット600円、トースト・サラダ (バナナ入り)・ゆで卵・コーヒーのCセット700円、ハム・卵・きゅうりのサンドイッチのセット750円 (2025年12月〜2026年6月)・甘くない薄焼き卵で包んだ家庭的なオムライス、ドライカレー750円 (2026年2月)・アイスコーヒー500円、ミックスジュース、コーヒーゼリー (2025〜2026年の口コミ)',
    neighborhood: '京都駅中央口。バスロータリーの向かい、徒歩2分',
    gf_detail: 'グルテンフリーではない: トーストやサンドイッチのモーニング。オムライスやドライカレーの小麦については書かれていない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 卵、ハム、バターのモーニング、オムライス (2024〜2026年の口コミ)。',
    notes: '[喫茶店・京都駅、朝6時からのモーニングと喫煙] 京都駅のバスロータリーの向かいにある、細長い昭和の喫茶店で朝6時から。600円からのトーストとゆで卵のモーニング、昼はおばあちゃんの味のオムライスやドライカレー、普通のコーヒー。全席喫煙可で、たばこを吸わない人にはつらかったという声も (2026年3月)。現金のみ。',
  });
}

// ================================================================ たかひとり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26026014/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.takahitori.com/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_takahitori', name: 'たかひとり (Takahitori)', category: 'MOM_AND_POP',
    lat: 34.987747, lng: 135.758414, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: ponzu, homemade soy-sauce koji, white-miso and dashi dishes (2025 reviews); no allergen information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a duck restaurant — duck meat, offal and duck broth (official site; reviews).',
    hours_raw: 'Official site and Tabelog: 17:00–23:00; closed Tuesday and Wednesday. 7 counter seats, run by the owner alone (official site) — phone ahead to check for a seat (official site); fully booked nights (November 2025). Cash only: no cards, e-money or QR (Tabelog). Non-smoking throughout. Basement of the House 24 building, beneath the coffee shop MIWAKU, on the southwest side of Yodobashi Camera (Tabelog). Opening: Tabelog says 16 June 2014; the official site says June of Heisei 27 (2015).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kyoto Station (north), behind Kyoto Tower — basement near Yodobashi Camera',
    cuisine: 'A seven-seat counter for Kyoto sake and Kyo-Tamba duck (official site; 2024–2026 reviews) · sake from all 40 of Kyoto Prefecture\'s breweries, from Joyo in the south to the Tango peninsula in the north (official site), poured in 90 ml measures with the brewers\' stories (November 2025) · duck: grilled tenderloin ¥770, gizzard ¥660, air-dried duck ¥1,320, loin, seared breast with three-year-aged yuzu ponzu, thigh, tongue, liver, tsukune, duck-and-leek tofu, duck-and-egg rice bowl (2025 reviews) · Kyoto greens with homemade soy-sauce koji, turnip in white miso ¥660, homemade tofu (2024–2025 reviews)',
    website: SITE, gmaps: gm('たかひとり 京都駅 東塩小路町579-24'), menu_url: SITE,
    notes: '[Kyoto sake and duck · Kyoto Station, a one-man basement counter] A seven-seat basement counter by Kyoto Station where the owner, alone, pours sake from every one of Kyoto Prefecture\'s 40 breweries in small measures with the story of each, alongside Kyo-Tamba duck from tongue to tenderloin. Portions are small (August 2026); a little hard to find and to walk into. Call ahead. Cash only. Closed Tuesday and Wednesday.',
    chef_bio: { chef_name: '川嶋隆徳', roles: ['Owner, running the shop alone (official site)'], origin: null,
      background: 'Per the official site, owner 川嶋隆徳 runs the seven-seat counter alone, pairing Kyoto sake with Kyo-duck raised in Kyotamba, and stocks sake from all 40 breweries in Kyoto Prefecture, large and small. Diners in 2024–2026 describe a basement counter close to the owner, careful explanations of each brewery, rare duck cuts, and mostly solo guests.',
      philosophy: 'From the official site: Kyoto sake for visitors and locals alike — "京都の日本酒にこだわり" (particular about Kyoto sake).',
      specialty: 'Kyo-Tamba duck with Kyoto sake.',
      anecdotes: [
        { text: 'November 2025: a sake from the Shotoku brewery in Fushimi "available only at this restaurant, filled with nitrogen" — and when the guest ordered a second glass of the same sake, the owner "kindly changed the sake cup."', source: R + 'B517334979/' },
        { text: 'May 2025: "Since the owner operates the restaurant solo, I want to be a considerate customer who can read the room… and not linger unnecessarily."', source: R + 'B506934076/' },
        { text: 'August 2026: "The portions are small, but they are unique delicacies that pair perfectly with drinks."', source: R + 'B535456318/' },
      ],
      japanese_sources_summary: '公式サイト: 京都地酒・鴨料理、カウンター7席、17時〜23時、火曜・水曜休み、店主の川嶋隆徳がひとりで営む、京都駅前のビル地下1階、京丹波で育てられた京鴨、平成27年6月開店、京都の大小全40蔵の日本酒 (南は城陽市から北は丹後半島まで)、満席で断ることがないよう電話で空席の確認を。食べログ: たかひとり、居酒屋・日本酒バー・鶏料理、下京区東塩小路町579-24 B1F、ヨドバシカメラの南西角の南側、喫茶店 MIWAKU の地下、月・木〜日 17:00〜23:00、火・水休み、7席、全面禁煙、カード・電子マネー・QR不可、2014年6月16日オープン。口コミ (2024年12月〜2026年8月、英語): 鴨ささみ炙り770円、鴨砂ずり660円、鴨の一夜干し1,320円、鴨ロース焼き、3年熟成の柚子ポン酢、もも、鴨タン、レバー、つくね、鴨ねぎ豆腐、鴨と卵の丼、壬生菜と自家製醤油麹、かぶの白味噌煮660円、自家製豆腐、酒は90mlずつ、伏見の Shotoku の店限定の窒素充填の酒、店主ひとりなので長居しない配慮を、量は少なめ。',
      confidence: 'high', sources: [SITE, TB, R + 'B497913889/', R + 'B499883454/', R + 'B501336261/', R + 'B503077875/', R + 'B506934076/', R + 'B517064631/', R + 'B517334979/', R + 'B518740930/', R + 'B525393437/', R + 'B535456318/'] },
    cultural_comfort: { level: 'japanese', note: 'Seven-seat counter run by one person; phone ahead; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町579-24 ハウス24ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site; Tabelog reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.987759, 135.758361); cross-checked: GSI 京都府京都市下京区東塩小路町579番地 (lot) 51m; offset about 5 m east-southeast because kyr_menya_roman (2 m) and kyoto_tenkuu_tachinomi_tosaka (4.9 m, same building, 4F) sit on the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B517064631/'],
    price_note: 'Prices from a November 2025 review, tax included.', last_checked: TODAY, items: [
      it('鴨ささみ炙り', '', 'Seared duck tenderloin', '¥770', 'Duck', 'ask', 'no', 'November 2025.', 'duck'),
      it('鴨砂ずり', '', 'Duck gizzard', '¥660', 'Duck', 'ask', 'no', 'November 2025.', 'duck'),
      it('', '', 'Air-dried duck', '¥1,320', 'Duck', 'ask', 'no', 'November 2025.', 'duck'),
      it('', '', 'Kyoto sake, by the measure', 'from ¥550', 'Sake', 'ask', 'ask', 'November 2025.', 'sake'),
    ] }, {
    cuisine: '京都の日本酒と京丹波の京鴨の7席のカウンター (公式サイト、2024〜2026年の口コミ)・南は城陽から北は丹後半島まで京都府の全40蔵の日本酒 (公式サイト)。90mlずつ、蔵の話とともに (2025年11月)・鴨ささみ炙り770円、鴨砂ずり660円、鴨の一夜干し1,320円、ロース、3年熟成の柚子ポン酢で食べる胸の炙り、もも、タン、レバー、つくね、鴨ねぎ豆腐、鴨と卵の丼 (2025年の口コミ)・自家製の醤油麹で食べる京の青菜、かぶの白味噌煮660円、自家製豆腐 (2024〜2025年の口コミ)',
    neighborhood: '京都駅北、京都タワーの裏。ヨドバシカメラ近くの地下',
    gf_detail: 'グルテンフリーではない: ポン酢、自家製の醤油麹、白味噌や出汁の料理 (2025年の口コミ)。アレルゲンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 鴨の店で、鴨肉、内臓、鴨の出汁 (公式サイト、口コミ)。',
    notes: '[京都の地酒と鴨・京都駅、ひとりで営む地下のカウンター] 京都駅そばの地下にある7席のカウンター。店主がひとりで、京都府の全40蔵の酒を少しずつ、蔵の話とともに注ぎ、京丹波の京鴨をタンからささみまで。量は少なめという声 (2026年8月)。少し見つけにくく、入りにくい。電話で確認を。現金のみ。火・水休み。',
  });
}

// ================================================================ 京もつ鍋 亀八 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006748/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kamehachi-kyoto.jp/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_kamehachi_honten', name: '京もつ鍋 亀八 本店 (Kyo Motsu-nabe Kamehachi Honten)', category: 'OMNI',
    lat: 35.00727, lng: 135.770792, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: miso and soy broths; the finishing noodles are domestic wheat with tapioca; nama-fu, chijimi and karaage on the menu (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-offal hot pot in dashi; horse sashimi, smoked mackerel (official site).',
    hours_raw: 'Official site and Tabelog: 17:00–24:00 (last orders food 23:00, drinks 23:30); open all year except irregular days (New Year, staff training). Two-hour limit when busy. Book through the official site (24 hours; the phone is often busy); weekends fill up, and winter is hard to book (official site). Table charge ¥380 incl. tax, an otoshi of smoked mackerel — Tabelog, Japanese original 「チャージ料 税込380円（付出し）」. 30 seats: counters, tables and tatami rooms; upstairs for groups to 20. Non-smoking (and no smoking outside). Children welcome. Cards (Visa, Master, JCB, AMEX, Diners); no e-money or QR. Down the alley east of Kiyamachi Rokkaku, halfway along Pontocho 5th alley. Opened 1 April 2008 (official site; Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho / Kiyamachi-Sanjo — an alley between them, 4 min walk from Keihan Sanjo Stn',
    cuisine: 'Kyoto-style motsu-nabe in a Kyoto dashi broth (official site; 2025–2026 reviews) · Kyo motsu-nabe ¥1,880 a portion: "white" (Kyoto white miso, the signature), "golden soy", "spicy red", "yellow" (this shop only); mentaiko motsu-nabe ¥2,400; summer "kara-nabe" ¥2,100 (official site) · toppings: Omi beef offal ¥1,100, pork belly ¥880, Daisen chicken ¥770, honeycomb tripe, Hanbei three-colour nama-fu ¥500; finish with stone-ground Kyoto noodles ¥660 or egg zosui ¥660, tomato-cheese risotto ¥770 (official site) · horse sashimi, chijimi, motsu karaage, smoked mackerel otoshi · courses with 90-min all-you-can-drink: ¥5,000 (5 dishes), ¥6,000 (8 dishes), ¥7,000 (10 dishes) (official site)',
    website: SITE, gmaps: gm('京もつ鍋 亀八 本店 材木町'), menu_url: SITE,
    notes: '[Motsu-nabe · Pontocho alley, Kyoto white-miso hot pot] The original shop (2008) of a three-shop Kyoto motsu-nabe house, tucked in an alley between Kiyamachi and Pontocho: Omi beef offal in a Kyoto dashi broth — the white-miso version is the one to order — finished with stone-ground noodles or egg zosui, and all-you-can-drink courses from ¥5,000. Book on the website; winter fills. ¥380 table charge.',
    chef_bio: { chef_name: null, roles: ['Second-generation manager known in the shop as "Pe-san" (official site); owner not named'], origin: null,
      background: 'Per the official site, 亀八 本店 opened in April 2008 as the first shop; the name pairs 亀 (turtle, for luck) and 八 (eight, for endless happiness). Early on the first manager stood outside every day calling in customers; word of mouth made it so busy that winter tables could not be booked, without spending on advertising. The second-generation manager, a regular of a sister shop since university who joined in 2009 and worked at the annex 亀八別館 first, keeps the founding recipe (official site). Sister shops: 亀八別館 (Pontocho) and 亀八 山科店 (official site).',
      philosophy: 'From the site: a hot pot that starts from taking dashi, the heart of Kyoto cooking — "a hot pot made for drinking the soup" (official site, translated).',
      specialty: 'Kyo motsu-nabe "white" (white miso).',
      anecdotes: [
        { text: 'August 2026: at the counter, "the manager and staff shared delicious ways to enjoy the food," and the white broth used a Kyoto ginjo white miso.', source: R + 'B533344490/' },
        { text: 'July 2026: the "ultimate noodles" "had a slightly junky flavor."', source: R + 'B512563799/' },
      ],
      japanese_sources_summary: '公式サイト: 京都先斗町 京もつ鍋亀八、京出汁のあっさりまろやかな京もつ鍋、スープを飲むための鍋、国産小麦にタピオカ粉を混ぜた石臼挽きの麺、2008年4月に1号店の亀八本店がオープン、屋号は縁起の良い「亀」と無限の幸せの「八」、初代店長が毎日呼び込み、口コミで冬は予約が取れない人気店に、広告費を使わない、二代目店長「ぺーさん」(2009年入社、姉妹店の常連から入社、亀八別館を経て本店へ)、京もつ鍋「自慢の白」「黄金の醤油」「旨辛の赤」「やみつきの黄」(本店限定) 各1,880円、明太子もつ鍋2,400円、夏の辛鍋2,100円、近江牛もつ1,100円、半兵衛麩の三色京生麩500円、京都石臼挽き麺660円、たまご雑炊660円、トマトチーズリゾット770円、馬刺し、チヂミ、もつの唐揚げ、飲み放題90分のコース5,000円・6,000円・7,000円、本店・亀八別館・亀八山科店、営業 17:00〜24:00、不定休。食べログ: 京もつ鍋 亀八 本店、中京区木屋町通三条下ル材木町185-3、原文で「チャージ料 税込380円（付出し）」、30席、禁煙、子供可、カード可、電子マネー・QR不可、2008年4月1日オープン。口コミ (2025年8月〜2026年11月、英語): 白味噌のもつ鍋、近江牛のもつ、しめ鯖の付出し、締めの麺と雑炊、5,000円の飲み放題コース、細い路地で見落とす、スタッフが鍋を作ってくれる、究極麺は少しジャンクな味という声。',
      confidence: 'high', sources: [SITE, TB, R + 'B512563799/', R + 'B524228406/', R + 'B526393025/', R + 'B526738176/', R + 'B527115388/', R + 'B530944106/', R + 'B531013378/', R + 'B533344490/', R + 'B534709460/', R + 'B538757205/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Online booking; staff prepare the hot pot; ¥380 table charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通三条下ル材木町185-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site; Tabelog reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.007292, 135.770839); cross-checked: GSI 京都府京都市中京区材木町185番地 (lot) 36m; offset about 5 m southwest because kyoto_star_bar (2.4 m, 材木町185-5) and kyoto_kichi_kichi (4.6 m, 材木町185-4) sit on the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official site menu, checked November 2026.', last_checked: TODAY, items: [
      it('京もつ鍋「自慢の白」', '', 'Kyo motsu-nabe "white" (white miso), per portion', '¥1,880', 'Hot pot', 'no', 'no', 'Official site.', 'motsunabe'),
      it('京都石臼挽き麺', '', 'Stone-ground Kyoto noodles (finish)', '¥660', 'Finish', 'no', 'no', 'Official site; domestic wheat with tapioca.', 'noodles'),
      it('たまご雑炊', '', 'Egg zosui (finish)', '¥660', 'Finish', 'ask', 'no', 'Official site.', 'zosui'),
      it('', '', 'Course: 8 dishes + 90-min all-you-can-drink', '¥6,000', 'Course', 'no', 'no', 'Official site; booking only.', 'izakaya_course'),
    ] }, {
    cuisine: '京出汁で炊く京風のもつ鍋 (公式サイト、2025〜2026年の口コミ)・京もつ鍋は1人前1,880円。看板の白味噌の「自慢の白」、「黄金の醤油」、「旨辛の赤」、本店限定の「やみつきの黄」。明太子もつ鍋2,400円、夏の辛鍋2,100円 (公式サイト)・トッピングは近江牛もつ1,100円、国産豚バラ880円、大山鶏もも770円、ハチノス、半兵衛麩の三色京生麩500円。締めは京都石臼挽き麺660円、たまご雑炊660円、トマトチーズリゾット770円 (公式サイト)・馬刺し、チヂミ、もつの唐揚げ、しめ鯖の燻製の付出し・飲み放題90分のコースは5,000円 (5品)、6,000円 (8品)、7,000円 (10品) (公式サイト)',
    neighborhood: '先斗町・木屋町三条。間の路地、京阪三条駅から徒歩4分',
    gf_detail: 'グルテンフリーではない: 味噌や醤油のスープ。締めの麺は国産小麦とタピオカ粉。生麩、チヂミ、唐揚げも (公式サイト)。',
    vegan_detail: 'ヴィーガン不可: 出汁で炊く牛もつの鍋。馬刺し、しめ鯖の燻製 (公式サイト)。',
    notes: '[もつ鍋・先斗町の路地、京の白味噌のもつ鍋] 京都に3店あるもつ鍋店の2008年からの本店で、木屋町と先斗町の間の路地に。京出汁で炊く近江牛のもつ鍋、頼むなら白味噌の「白」、締めは石臼挽きの麺かたまご雑炊。飲み放題のコースは5,000円から。予約はウェブで、冬は埋まる。チャージ380円。',
  });
}

// ================================================================ 微風台南 TEARSⅡ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26025210/'; const R = TB + 'dtlrvwlst/';
  const L = ['12:00', '15:00'], D = ['18:00', '22:00']; const H = day(L, D);
  put({
    id: 'kyoto_bifuu_tainan_tears2', name: '微風台南 TEARSⅡ (Bifuu Tainan TEARS II)', category: 'OMNI',
    lat: 35.018277, lng: 135.769408, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles, scallion pancakes, dan bing, fried pork chop; soy-braised dishes (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: lu rou fan, beef noodle soup, pork rib and chicken bento (2025–2026 reviews).',
    hours_raw: 'Tabelog: 12:00–15:00 and 18:00–22:00; closed Monday. Rurubu gives 12:00–14:30 (last order 14:15) and 18:00–21:30 (last order 21:00), closed Monday (Tuesday if Monday is a holiday) and the first Tuesday. No reservations — queues form before opening on Saturdays (April and October 2026); orders are taken from whoever calls first, not in queue order, and food can be slow at peak (2026 reviews). 28 seats: a dirt-floor front room and a tatami room at the back of a townhouse. Non-smoking; children and strollers welcome; take-away. No cards; e-money and PayPay.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Marutamachi, just north of the crossing — 5 min walk from Jingu-Marutamachi Stn',
    cuisine: 'Tainan home cooking in a retro townhouse, staffed mostly by Taiwanese students (Rurubu; 2024–2026 reviews) · lu rou fan in three sizes (medium ¥700); braised beef noodle soup with or without broth ¥900; pork-chop fried rice; shrimp fried rice; pork rib bento with five sides; meat noodles (2025–2026 reviews) · scallion pancakes, dan bing, stir-fried greens (2026) · douhua ¥600 (all toppings +¥165), almond jelly, shaved ice, passion-fruit smoothie; Taiwan Beer in honey and pineapple (2026 reviews)',
    website: null, gmaps: gm('微風台南 TEARSⅡ 桝屋町'), menu_url: null,
    notes: '[Taiwanese · Kawaramachi-Marutamachi, Tainan diner in a townhouse] A retro Tainan-style diner in an old townhouse just north of Kawaramachi-Marutamachi, run largely by Taiwanese students: lu rou fan, beef noodle soup, pork-chop fried rice, rib bento and douhua at under ¥1,000 a dish. It fills within minutes of opening; orders go to whoever calls first and can be slow (2026); portions are on the small side (April 2026). No bookings, no cards. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'A 2017 nippon.com column describes a small, plain sign reading 微風台南 near the Imperial Palace, a blackboard of Taiwanese bento, Taiwanese soft drinks on old wooden tables, a red lantern and a Tainan shop sticker on the door. Rurubu says nearly all the part-time staff are Taiwanese students. Reviewers in 2024–2026 describe a townhouse with an earth-floored front and a tatami room at the back, Taiwanese-accented staff and many Taiwanese customers.',
      philosophy: null,
      specialty: 'Lu rou fan; braised beef noodle soup.',
      anecdotes: [
        { text: 'October 2026: by 11:55 "there were already 6 to 7 groups lined up… be aware that they don\'t take orders in the order of the line… They take orders based on who calls the staff first."', source: R + 'B537116993/' },
        { text: 'November 2026: "The seasoning was neither particularly good nor bad… more like the flavor level you\'d find in a student area!" — but the bai tang guo tasted "almost exactly like what I had for breakfast near National Taiwan University."', source: R + 'B371115775/' },
        { text: 'April 2026: "Each dish was a bit on the smaller side."', source: R + 'B525996454/' },
      ],
      japanese_sources_summary: '食べログ: 微風台南 TEARSⅡ、台湾料理、上京区桝屋町359、神宮丸太町駅から徒歩5分、12:00〜15:00・18:00〜22:00、月曜休み、予約不可、28席、座敷、禁煙、子供・ベビーカー可、カード不可、電子マネー・PayPay可。るるぶ: 河原町丸太町の台湾料理店、12時〜14時30分・18時〜21時30分、月曜 (祝日なら翌日) と第1火曜休み、アルバイトはほぼ全員が台湾の留学生、魯肉飯は大中小。nippon.com のコラム (2017年): 京都御苑の近く、控えめな「微風台南」の看板、黒板の弁当のメニュー、台湾の飲み物、赤い提灯。口コミ (2024年3月〜2026年11月、英語): 魯肉飯 (中) 700円、牛肉麺900円、排骨炒飯、海老炒飯、排骨弁当、肉そば、ネギ餅、蛋餅、青菜炒め、豆花600円 (トッピング全部+165円)、杏仁豆腐、かき氷、台湾ビール、開店前から行列、注文は呼んだ順で列の順ではない、料理が遅いことも、量が少なめという声、炒飯が油っぽい日もという声。',
      confidence: 'medium', sources: [TB, 'https://rurubu.jp/andmore/spot/80125908', 'https://www.nippon.com/ja/column/g00478/', R + 'B371115775/', R + 'B481969357/', R + 'B525973325/', R + 'B525996454/', R + 'B526254718/', R + 'B527801255/', R + 'B531483635/', R + 'B534979412/', R + 'B535075795/', R + 'B537116993/', R + 'B537735961/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Picture menu with descriptions; Taiwanese staff; no bookings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区桝屋町359',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.018277, 135.769408); cross-checked: GSI 京都府京都市上京区桝屋町359番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537116993/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('魯肉飯', '', 'Lu rou fan (medium)', '¥700', 'Rice', 'no', 'no', 'October 2026; three sizes.', 'lu_rou_fan'),
      it('', '', 'Braised beef noodle soup', '¥900', 'Noodles', 'no', 'no', 'October 2026.', 'beef_noodle'),
      it('豆花', '', 'Douhua (all toppings +¥165)', '¥600', 'Sweets', 'ask', 'ask', 'October 2026.', 'douhua'),
    ] }, {
    cuisine: '台湾の留学生が多く働く、レトロな町家の台南の家庭料理 (るるぶ、2024〜2026年の口コミ)・魯肉飯は3サイズ (中700円)。汁ありと汁なしの牛肉麺900円、排骨炒飯、海老炒飯、おかず5品の排骨弁当、肉そば (2025〜2026年の口コミ)・ネギ餅、蛋餅、青菜炒め (2026年)・豆花600円 (トッピング全部+165円)、杏仁豆腐、かき氷、パッションフルーツのスムージー。台湾ビールのハチミツとパイナップル (2026年の口コミ)',
    neighborhood: '河原町丸太町の交差点のすぐ北。神宮丸太町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 小麦の麺、ネギ餅、蛋餅、揚げた排骨、醤油の煮込み (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魯肉飯、牛肉麺、排骨や鶏の弁当 (2025〜2026年の口コミ)。',
    notes: '[台湾料理・河原町丸太町、町家の台南食堂] 河原町丸太町のすぐ北の古い町家にある台南風のレトロな食堂で、台湾の留学生が多く働く。魯肉飯、牛肉麺、排骨炒飯、排骨弁当、豆花が1品1,000円以下。開店すぐに満席になり、注文は呼んだ順で遅いことも (2026年)。量は少なめという声 (2026年4月)。予約不可、カード不可。月曜休み。',
  });
}

save();
