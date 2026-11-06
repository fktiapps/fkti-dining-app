// Kyoto priority (kyoto-missed), worker osw13, batch 41 — lane: Tabelog id mod 6 = 0.
// Core: み MITARASHI DANGO by kolme kyoto, El Rincon. Notable: 山本料理店, 末廣.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-41');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ み MITARASHI DANGO by kolme kyoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26037630/'; const R = TB + 'dtlrvwlst/';
  const LEAF = 'https://www.leafkyoto.net/en/store/220525-kyoto-kolme_kyoto';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_mi_mitarashi_dango', name: 'み MITARASHI DANGO by kolme kyoto', category: 'OMNI',
    lat: 35.008050, lng: 135.763950, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The dango are glutinous rice (Leaf KYOTO), but the mitarashi glaze is a sweet soy sauce; Tabelog says allergy information is available.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plain dango with bean paste, kinako or mitarashi glaze may suit, but there are ice-cream and latte options (2026 reviews); allergy information is available (Tabelog).',
    hours_raw: 'Tabelog: Wed–Mon 11:00–18:00; closed Tuesday. Bookings taken for the café. A dango counter at the entrance of the kolme kyoto glasses shop; order downstairs, then eat in a shoes-off room upstairs with two tables for four and two for two (May 2026), 10 seats (Tabelog). Non-smoking; children and strollers welcome; wheelchair accessible; take-out; cards, e-money and QR accepted (Tabelog). No service charge listed on Tabelog. Opened 3 March 2022 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yanagibamba-dori just south of Sanjo — 10 min walk from Karasuma Oike Stn',
    cuisine: 'Charcoal-grilled mitarashi dango of glutinous rice, served inside a glasses shop (Leaf KYOTO) · Hachifuku set of eight dango flavours with a drink, or matcha you whisk yourself (2026 reviews) · nine mitarashi dango to take away ¥1,000, with kinako, good until the next day (May 2026) · mitarashi matcha ice cream; hojicha and matcha lattes (2026 reviews)',
    website: 'https://mi-mitarashidango.stores.jp/', gmaps: gm('み MITARASHI DANGO by kolme kyoto'), menu_url: null,
    notes: '[Dango · Yanagibamba-Sanjo, inside a glasses shop] A dango stand at the door of the kolme kyoto eyewear shop: order below, then slip off your shoes for a small room upstairs. Charcoal-grilled glutinous-rice dango in bright colours — the Hachifuku set brings eight flavours with matcha you whisk yourself — or a box of nine mitarashi to take away. One July 2026 diner found the flavours ordinary but the presentation charming. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Per Leaf KYOTO (2022): the glasses select shop kolme kyoto, reopened that spring, began selling dango with a Japanese confectioner as partner, hoping people would drop into a glasses shop more casually; the dango are charcoal-grilled glutinous rice. Opened 3 March 2022 (Tabelog).',
      philosophy: 'Per Leaf KYOTO: a reason for people to step into a glasses shop casually.',
      specialty: 'Mitarashi dango; eight-flavour dango set.',
      anecdotes: [
        { text: '"I initially thought this was just a gimmicky shop for tourists, as it was located in front of a glasses store. However, my impression changed after trying the dango." — May 2026.', source: R + 'B528534800/' },
        { text: '"The flavors were not particularly special, but they were generally tasty." — July 2026, on the eight-dango set.', source: R + 'B531543267/' },
        { text: 'A May 2026 diner was told to carry the take-away box flat because of all the sauce.', source: R + 'B528534800/' },
      ],
      japanese_sources_summary: 'Leaf KYOTO (2022年5月): この春リニューアルした眼鏡のセレクトショップ kolme kyoto で団子の販売を始めた、和菓子店と組み、眼鏡店に気軽に入るきっかけに、炭火で焼くもち米の団子、みたらし9個のおもたせ団子700円、こしあん・つぶあん各800円、好きな団子2本と自分で点てる抹茶のセット1,000円、12:00〜17:00 (売り切れ次第終了)、不定休 (当時)。食べログ: カフェ・和菓子、中京区柳馬場三条下ル槌屋町89-1、水〜月 11:00〜18:00、火曜休み、予約可、10席、禁煙、アレルギー表示あり、子供・ベビーカー可、車椅子可、テイクアウト、カード・電子マネー・QR可、2022年3月3日オープン。口コミ (2026年5月〜10月、英語): 入口で注文して2階の靴を脱ぐカフェへ、4人席2つと2人席2つ、八福セット (団子8種とドリンク)、自分で点てる抹茶、みたらし9個の持ち帰り1,000円ときな粉、翌日まで、みたらし抹茶アイス、ほうじ茶、味は普通という声、海外からの客が多い。',
      confidence: 'medium', sources: [TB, LEAF, R + 'B527873338/', R + 'B527967953/', R + 'B528534800/', R + 'B531543267/', R + 'B534500524/', R + 'B534734079/', R + 'B535660664/', R + 'B536591960/', R + 'B536727870/', R + 'B537727203/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter by the door, then take shoes off upstairs; many overseas visitors (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区柳馬場三条下ル槌屋町89-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008050, 135.763950); cross-checked: GSI 京都府京都市中京区槌屋町89番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528534800/', LEAF],
    price_note: 'Take-away price from a May 2026 review; Leaf KYOTO’s 2022 prices were lower.', last_checked: TODAY, items: [
      it('', '', 'Nine mitarashi dango to take away, with kinako', '¥1,000', 'Take-away', 'ask', 'ask', 'May 2026.', 'dango'),
      it('', '', 'Hachifuku set: eight dango flavours with a drink', '', 'Café', 'ask', 'ask', 'September 2026; price not given.', 'dango'),
    ] }, {
    cuisine: '眼鏡店の中の、炭火で焼くもち米のみたらし団子 (Leaf KYOTO)・団子8種とドリンクの八福セット、自分で点てる抹茶 (2026年の口コミ)・みたらし9個の持ち帰り1,000円、きな粉付き、翌日まで (2026年5月)・みたらし抹茶アイス、ほうじ茶や抹茶のラテ (2026年の口コミ)',
    neighborhood: '三条のすぐ南の柳馬場通。烏丸御池駅から徒歩10分',
    gf_detail: '要確認。団子はもち米 (Leaf KYOTO) だが、みたらしのたれは甘い醤油。食べログにはアレルギー表示ありとある。',
    vegan_detail: '要確認。あん、きな粉、みたらしの団子は合うかもしれないが、アイスやラテもある (2026年の口コミ)。アレルギー表示あり (食べログ)。',
    notes: '[団子・柳馬場三条、眼鏡店の中] 眼鏡店 kolme kyoto の入口の団子の店。下で注文し、靴を脱いで2階の小さな部屋へ。炭火で焼いたもち米の色とりどりの団子で、八福セットは8種に自分で点てる抹茶付き、みたらし9個の持ち帰りも。2026年7月には味は普通だが見た目がかわいいという声。火曜休み。',
  });
}

// ================================================================ El Rincon
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030550/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_el_rincon_shijo', name: 'El Rincon (エルリンコン)', category: 'OMNI',
    lat: 35.002568, lng: 135.761539, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; paella, ajillo, charcoal-grilled meats and tapas, beside a pasta paella (2021–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: jamón, octopus, anchovy, lamb, pork, beef and chicken paella (2021–2026 reviews).',
    hours_raw: 'Tabelog: Wed–Sun 17:00–23:00; closed Monday and Tuesday. In 2021 lunch was served Friday to Sunday (June 2021 review, citing Instagram); Tabelog now lists dinner only. Bookings taken; even if online booking shows full, call — same-day and large groups by phone (Tabelog). 20 seats: two tables of 4, a counter of 4, private rooms for 2 and 4 and a semi-private room for up to 6, some in a half-basement (2025–2026 reviews); non-smoking; children welcome; English menu; cards and PayPay (Tabelog). No service charge listed on Tabelog. Opened 1 May 2018 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Between Shijo and Ayakoji, just east of Karasuma — 4 min walk from Hankyu Karasuma Stn, exit 19',
    cuisine: 'Spanish: paella and pasta paella, ajillo (octopus a favourite), charcoal-grilled lamb, pork and beef, jamón and cheese platters, carpaccio (2021–2026 reviews) · cava and Spanish wine (2024–2026 reviews) · in 2021 a ¥1,800 lunch course and a ¥1,300 paella lunch (2021 reviews)',
    website: null, gmaps: gm('El Rincon エルリンコン 神明町'), menu_url: null,
    notes: '[Spanish · Shijo-Karasuma, cave-like private rooms] A quiet Spanish restaurant a few minutes from Karasuma, with snug half-basement rooms. Fans praise the paella, octopus ajillo, charcoal-grilled meats and cava, and the warm, calm room. Recent visits were mixed: a September 2026 diner found the chef aloof and the staff chatting among themselves and left early; an October 2026 diner found the paella too salty. English menu. Dinner only, Wednesday to Sunday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 1 May 2018 (Tabelog). A June 2022 diner found it run by a single staff member that night; later reviews describe a chef and front-of-house staff, a counter, tables and half-basement private rooms.',
      philosophy: null,
      specialty: 'Paella; octopus ajillo; charcoal-grilled meats.',
      anecdotes: [
        { text: '"I was seated in a cozy pocket-like cave underground." — February 2025.', source: R + 'B501365584/' },
        { text: 'A July 2026 regular was put in a semi-basement private room and was grateful the restaurant let a booking move earlier at the last minute.', source: R + 'B531684843/' },
        { text: '"The staff were chatting among themselves, and I wish they had done it somewhere out of earshot..." — September 2026.', source: R + 'B536438764/' },
        { text: '"As for the paella, it was a bit too salty for my taste." — October 2026.', source: R + 'B538690416/' },
      ],
      japanese_sources_summary: '食べログ: El Rincon (エルリンコン)、スペイン料理、下京区神明町724、阪急烏丸駅19番出口から徒歩4分、水〜日 17:00〜23:00、月火休み、予約可 (ネットで満席でも電話で空きの場合あり)、20席 (4名テーブル2、カウンター4)、個室2名・4名、半個室6名まで、禁煙、子供可、英語メニュー、カード・PayPay 可、2018年5月1日オープン。口コミ (2021年5月〜2026年10月、英語): 2021年はランチあり (バルセロナランチコース1,800円、丹波鶏のパエリアランチ1,300円、金土日のみ)、パエリア、パスタのパエリア、蛸のアヒージョ、生ハム、ラム、豚、牛の炭火焼き、チーズ盛り合わせ、カルパッチョ、カヴァ、半地下の洞窟のような個室、2022年は一人で営業、2026年9月は料理人が無関心でスタッフの私語が気になった、2026年10月はパエリアが塩辛い。',
      confidence: 'medium', sources: [TB, R + 'B437829544/', R + 'B438150416/', R + 'B450053575/', R + 'B497890964/', R + 'B501365584/', R + 'B507965917/', R + 'B516828266/', R + 'B531684843/', R + 'B536438764/', R + 'B538690416/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); call if online booking shows full.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区神明町724',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002568, 135.761539); cross-checked: GSI 京都府京都市下京区神明町 (town only, lot 724 not found) 45m; kyoto_rakuan_ayakoji 29 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B437829544/', R + 'B438150416/'],
    price_note: 'Only 2021 lunch prices are known; lunch is no longer listed on Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Paella (dinner)', '', 'Dinner', 'ask', 'no', 'Price not given in 2024–2026 reviews.', 'paella'),
      it('', '', 'Octopus ajillo', '', 'Dinner', 'ask', 'no', 'May 2025.', 'ajillo'),
    ] }, {
    cuisine: 'スペイン料理: パエリアとパスタのパエリア、アヒージョ (蛸が人気)、ラム・豚・牛の炭火焼き、生ハムやチーズの盛り合わせ、カルパッチョ (2021〜2026年の口コミ)・カヴァとスペインワイン (2024〜2026年の口コミ)・2021年はランチコース1,800円やパエリアランチ1,300円 (2021年の口コミ)',
    neighborhood: '四条と綾小路の間、烏丸のすぐ東。阪急烏丸駅19番出口から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。パエリア、アヒージョ、肉の炭火焼き、タパスのほかパスタのパエリアもある (2021〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 生ハム、蛸、アンチョビ、ラム、豚、牛、鶏のパエリア (2021〜2026年の口コミ)。',
    notes: '[スペイン料理・四条烏丸、洞窟のような個室] 烏丸から数分の落ち着いたスペイン料理店で、半地下のこぢんまりした個室がある。パエリア、蛸のアヒージョ、肉の炭火焼き、カヴァ、温かく静かな店内が好評。最近は評価が分かれ、2026年9月には料理人が無関心でスタッフの私語が気になり早めに出たという声、10月にはパエリアが塩辛いという声も。英語メニューあり。水〜日の夜のみ。',
  });
}

// ================================================================ 山本料理店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044344/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.yamamotorestaurant.com/';
  const COURSE = 'https://www.yamamotorestaurant.com/course.html';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_yamamoto_ryoriten', name: '山本料理店 (Yamamoto Ryori Ten)', category: 'MOM_AND_POP',
    lat: 34.997008, lng: 135.762501, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Skewers come with salt (Guérande sea salt) or a sweet tare (official site); the signature fried chicken has a dipping sauce of Hatcho miso, sesame paste and black vinegar, and the course ends with soba, ramen or oyakodon (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant — skewers, liver, fried chicken and chicken soup (official site; 2026 reviews).',
    hours_raw: 'Official site: 17:00–23:00; closed Sunday and two Mondays a month (Tabelog the same). Courses last 2 hours 30 minutes, with last drink orders 2 hours in (Tabelog). Same-day cancellation may be charged ¥7,000 per person (official site). Tabelog’s charge field reads 「500円」 (¥500), with no further detail. 8 counter seats (9 with an extra chair); non-smoking, with a smoking spot inside; school-age children; English menu; BYO allowed; cards, e-money and QR (Tabelog; official site). Opened 3 March 2026 (Tabelog); one October 2026 diner says April.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gojo-dori near Takakura, upstairs in the Yuasa Kaikan — 4 min walk from Gojo Stn, exit 1',
    cuisine: 'Yakitori over binchotan from Omi Kurodori and Kyoto Akadori, with thigh skewers of about 60 g, salt or a light sweet tare (official site) · signature 炸鶏 (zaji): whole Kyoto Akadori boiled, glazed, hung to dry half a day and twice-fried, with a black-vinegar dip (official site) · omakase course with drinks ¥12,000 (official site); à la carte too · seen: necktie, white liver, outside skirt, neck, cartilage, tsukune, chicken tataki, Peking-duck style chicken, shark-fin rice, chicken soba, ramen or oyakodon to finish (2026 reviews) · 25–30 bottles of wine chosen by the sommelier-owner (official site)',
    website: SITE, gmaps: gm('山本料理店 五条 湯浅会館'), menu_url: COURSE,
    notes: '[Yakitori · Gojo, an eight-seat sommelier’s counter] Up the stairs of the Taisho-era Yuasa Kaikan, an eight-seat counter round a binchotan grill, opened in 2026 by an owner who spent over twenty years at a famous yakitori house and is a qualified sommelier. Big, crisp-skinned Omi Kurodori and Kyoto Akadori skewers, the signature twice-fried zaji chicken, and a chicken-broth soba to finish, with wines matched to salt or tare. Omakase with drinks ¥12,000. Booked up within months. Closed Sunday.',
    chef_bio: { chef_name: 'Yamamoto (surname from the shop name and 2026 reviews; no given name in a source)', roles: ['Owner-chef and sommelier (official site: ソムリエ資格を持つ店主)'], origin: null,
      background: 'Per the official site: a chicken restaurant run by an owner who honed the craft for over 20 years at a famous yakitori restaurant, on the belief that yakitori is proper cuisine; eight counter seats on the second floor of the Yuasa Kaikan; birds chosen cut by cut from Omi Kurodori, Kyoto Akadori and others; the owner tastes and selects every wine. Opened 3 March 2026 (Tabelog). Reviewers in 2026 describe a renovated Taisho-era building and say it became hard to book within six months.',
      philosophy: 'Official site: 「焼き鳥も立派な料理」 — yakitori is proper cooking too.',
      specialty: 'Large thigh skewers; 炸鶏 (zaji) fried chicken; chicken soba.',
      anecdotes: [
        { text: 'When some planned starters and skewers had sold out, the chef gave a September 2026 guest a discount.', source: R + 'B536163400/' },
        { text: 'An October 2026 diner who could only find a 9 pm slot on an all-you-can-drink course noticed walk-ins being seated later in the evening.', source: R + 'B536918236/' },
        { text: '"I can\'t wait to come back to Kyoto just to see the owner again!" — October 2026.', source: R + 'B538301202/' },
      ],
      japanese_sources_summary: '公式サイト (yamamotorestaurant.com): 山本料理店 (やまもとりょうりてん)、五条駅1番出口から徒歩4分、湯浅会館2階、有名焼き鳥店で20年以上腕を磨いた店主の鶏料理店、「焼き鳥も立派な料理」、近江黒鶏や京赤地どりを部位ごとに、もも串は約60g、皮を巻き込む串打ち、備長炭、ゲランドの塩と甘めのたれ、名物「炸鶏 (ザージー)」は京赤地どりの丸鶏をボイルして水飴を塗り半日干し、140度と170度で揚げ、八丁味噌・芝麻醤・黒酢のつけだれ、ソムリエ資格の店主が選ぶワイン25〜30種、おまかせコース (お飲み物付き) 12,000円 (税込)、カウンター8席、17:00〜23:00、日曜と月2回の月曜休み、当日キャンセルは1人7,000円の場合あり、カード・電子マネー可。食べログ: 焼き鳥・鶏料理・居酒屋、下京区五条通高倉上ル亀屋町172 湯浅会館2F、コースは2時間30分、料金欄に「500円」、8席 (補助席で9)、禁煙 (店内に喫煙所)、小学生以上、英語メニュー、持ち込み可、2026年3月3日オープン。口コミ (2026年4月〜10月、英語): 大正時代の建物、近江黒鶏、ネクタイ (英語の口コミでは necktie)、白レバー、ハラミ、せせり、軟骨、つくね、むね肉のたたき、北京ダック風、フカヒレご飯、鶏そば、ラーメン、親子丼、半年で予約困難、売り切れの分を値引き。',
      confidence: 'medium', sources: [TB, SITE, COURSE, R + 'B525766724/', R + 'B534760607/', R + 'B534835082/', R + 'B535417711/', R + 'B536163400/', R + 'B536609839/', R + 'B536667046/', R + 'B536918236/', R + 'B538258114/', R + 'B538301202/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); book well ahead — later-evening walk-ins sometimes seated (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区五条通高倉上ル亀屋町172 湯浅会館 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.997008, 135.762501); GSI 京都府京都市下京区亀屋町172番地 matched a different 亀屋町 about 610 m west, so it cannot confirm the lot; the pin stays on the Tabelog point, which sits by Gojo-Takakura as the address says; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [COURSE],
    price_note: 'Course price from the official site, tax included.', last_checked: TODAY, items: [
      it('おまかせコース', '', 'Omakase course with drinks', '¥12,000', 'Course', 'ask', 'no', 'Official site.', 'course'),
      it('炸鶏', 'zaji', 'Zaji: whole Kyoto Akadori, dried and twice-fried, with black-vinegar dip', '', 'À la carte', 'ask', 'no', 'Signature dish.', 'fried_chicken'),
    ] }, {
    cuisine: '近江黒鶏と京赤地どりの備長炭の焼き鳥、約60gのもも串、塩か甘めのたれ (公式サイト)・名物の炸鶏 (ザージー): 京赤地どりの丸鶏をボイルし水飴を塗って半日干し、二度揚げ、黒酢のつけだれ (公式サイト)・お飲み物付きのおまかせコース12,000円 (公式サイト)、アラカルトも・これまでの料理: ネクタイ (英語の口コミでは necktie)、白レバー、ハラミ、せせり、軟骨、つくね、むね肉のたたき、北京ダック風、フカヒレご飯、〆の鶏そば、ラーメン、親子丼 (2026年の口コミ)・ソムリエの店主が選ぶワイン25〜30種 (公式サイト)',
    neighborhood: '五条通の高倉近く、湯浅会館の2階。五条駅1番出口から徒歩4分',
    gf_detail: '要確認。串は塩 (ゲランドの塩) か甘めのたれ (公式サイト)。名物の炸鶏は八丁味噌、芝麻醤、黒酢のたれで、〆は蕎麦、ラーメン、親子丼 (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 串、レバー、唐揚げ、鶏のスープの鶏料理店 (公式サイト、2026年の口コミ)。',
    notes: '[焼き鳥・五条、ソムリエのカウンター8席] 大正時代の湯浅会館の階段を上った、備長炭を囲むカウンター8席。有名焼き鳥店で20年以上修業したソムリエ資格の店主が2026年に開いた。皮がぱりっとした大ぶりの近江黒鶏や京赤地どりの串、名物の二度揚げの炸鶏、〆の鶏そば、塩とたれに合わせたワイン。お飲み物付きのおまかせ12,000円。数か月で予約困難に。日曜休み。',
  });
}

// ================================================================ 末廣 (Suehiro)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000184/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://sushi-suehiro.jp/about.html';
  const MENU = 'http://sushi-suehiro.jp/menu.html';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_suehiro_teramachi', name: '末廣 (Suehiro)', category: 'OMNI',
    lat: 35.014394, lng: 135.767165, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; Kyoto pressed sushi with a sweet tare on the anago, simmered kanpyo and shiitake, and soy-seasoned fillings (official menu).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Inari with carrot, burdock and sesame rice, and small kanpyo, cucumber, pickle and ume-shiso rolls are listed, but the fried tofu and kanpyo may be simmered in dashi; most sushi is mackerel, anago, sea bream or egg (official menu).',
    hours_raw: 'Tabelog: Wed–Sun 11:00–18:00, closing when sold out; dine-in until 15:00; closed Monday and Tuesday. No reservations to eat in; take-away can be ordered ahead by phone (2019 and March 2026 reviews). 6 seats at three small tables; queues of 30 minutes or more on winter weekends (March 2026). Non-smoking; cards, IC cards and QR accepted (Tabelog). No service charge listed on Tabelog. Prices rose on 2 April 2025 (official site).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi-dori north of Nijo — 5 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Kyoto-style sushi since the Tenpo era: mackerel sushi ¥5,800 a roll of 12, half ¥2,900 (official menu; 2026 reviews); anago box sushi ¥1,840; Kyoto box sushi ¥1,920; inari ¥1,190; Kyoto chirashi ¥2,200; sukeroku ¥1,380; futomaki ¥1,750; mackerel-and-shibazuke iso-maki ¥1,440; small sea-bream sushi ¥2,800 (official menu) · steamed mushi-zushi from November to March, ¥2,750 for the premium version (April 2026) · clear soup or red miso ¥600 (official menu)',
    website: SITE, gmaps: gm('末廣 寿司 寺町二条'), menu_url: MENU,
    notes: '[Kyoto sushi · Teramachi-Nijo, since the 1830s] A six-seat Kyoto sushi shop founded in the Tenpo era south of the Imperial Palace, still making mackerel sushi, box sushi, rolls and inari the old way — and, from November to March, warm steamed mushi-zushi topped with egg ribbons and grilled anago, which draws winter queues. Regulars rank its mackerel sushi above the famous names. One March 2026 diner waited 30 minutes and found it nothing special. Take-away by phone. Closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Per the official site: founded in the Tenpo era (1830–1844) as a cooked-food shop at Teramachi-Nijo, south of the Imperial Palace, keeping the taste of Kyoto sushi for about 200 years with unchanged methods — mackerel, box, rolled, inari and chirashi sushi, and steamed sushi in winter. Prices were raised from 2 April 2025 because of the rising price of rice (official site). An October 2026 diner found the owner and staff friendly.',
      philosophy: 'Official site: keeping to genuine Kyoto sushi.',
      specialty: 'Mackerel sushi; winter mushi-zushi; anago box sushi.',
      anecdotes: [
        { text: '"Currently the Number One Saba Sushi in Kyoto" — October 2026, from a diner who had long bought elsewhere; the half roll of six came with a cooling pack.', source: R + 'B536980178/' },
        { text: 'A March 2026 diner queued from 10:40 and sat down around 12:30, in the fourth round of six seats; take-away orders were quoted at an hour.', source: R + 'B524825610/' },
        { text: '"The steamed sushi was... just good, nothing extraordinary." — March 2026, after a 30-minute wait.', source: R + 'B524331324/' },
      ],
      japanese_sources_summary: '公式サイト (sushi-suehiro.jp): 京のすし処 末廣、天保年間に京都御所の南、寺町二条で煮売屋として創業、京寿司の味を約200年、さばずし・箱ずし・巻ずし・おいなりさん・ちらしずし、冬はむしずし、2025年4月2日から米価高騰などで価格改定。おしながき: 名代さばずし一本 (12切) 5,800円、ハーフ (6切) あり、あなご箱ずし1,840円、いなりずし1,190円、盛合せ2,310円、京風ちらしずし2,200円、助六1,380円、京風箱ずし1,920円、箱と巻1,660円、巻ずし1,750円、江戸前盛合せ2,700円、いそ巻1,440円、うざく巻2,000円、小鯛ずし2,800円、小巻480円〜、お吸い物・赤だし各600円。食べログ: 寿司・日本料理、中京区寺町二条上ル要法寺前町711、水〜日 11:00〜18:00 (売り切れ次第終了、店内は15:00まで)、月火休み、予約不可、6席、禁煙、カード・電子マネー・QR可、テイクアウト、蒸し寿司は11月〜3月末。口コミ (2019年12月〜2026年10月、英語): 蒸し寿司 上2,750円、さばずしハーフ2,900円、冬は30分以上の行列、持ち帰りは電話予約がよい、店主とスタッフが気さく、蒸し寿司は普通という声。',
      confidence: 'medium', sources: [TB, SITE, MENU, R + 'B423086030/', R + 'B445229958/', R + 'B524331324/', R + 'B524785186/', R + 'B524825610/', R + 'B529342471/', R + 'B531939268/', R + 'B532773729/', R + 'B536980178/', R + 'B538257898/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order from the menu at the table; queue in winter; phone ahead for take-away.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区寺町二条上ル要法寺前町711',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.014394, 135.767165); cross-checked: GSI 京都府京都市中京区要法寺前町711番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B423086030/', R + 'B532773729/'],
    price_note: 'Prices from the official menu (after the April 2025 rise); mushi-zushi and half-roll prices from 2026 reviews.', last_checked: TODAY, items: [
      it('名代 さばずし', '', 'Mackerel sushi, roll of 12', '¥5,800', 'Sushi', 'ask', 'no', 'Half roll of 6 ¥2,900 (2026 reviews).', 'saba_sushi'),
      it('あなご箱ずし', '', 'Anago box sushi (8 pieces)', '¥1,840', 'Sushi', 'ask', 'no', '', 'hako_sushi'),
      it('京風箱ずし', '', 'Kyoto box sushi: shrimp and egg, white fish, grilled sawara (8 pieces)', '¥1,920', 'Sushi', 'ask', 'no', '', 'hako_sushi'),
      it('いなりずし', '', 'Inari sushi (7)', '¥1,190', 'Sushi', 'ask', 'ask', '', 'inari'),
      it('京風ちらしずし', '', 'Kyoto chirashi sushi', '¥2,200', 'Sushi', 'ask', 'no', '', 'chirashi'),
      it('助六', '', 'Sukeroku: inari and rolls (8 pieces)', '¥1,380', 'Sushi', 'ask', 'ask', '', 'sukeroku'),
      it('小鯛ずし', '', 'Small sea-bream sushi (8 pieces)', '¥2,800', 'Sushi', 'ask', 'no', '', 'tai_sushi'),
      it('', '', 'Steamed mushi-zushi, premium (November–March)', '¥2,750', 'Winter', 'ask', 'no', 'April 2026.', 'mushizushi'),
      it('お吸い物・赤だし', '', 'Clear soup or red miso soup', '¥600', 'Soup', 'ask', 'no', '', 'soup'),
    ] }, {
    cuisine: '天保年間からの京寿司: さばずし一本 (12切) 5,800円、ハーフ2,900円 (公式のおしながき、2026年の口コミ)、あなご箱ずし1,840円、京風箱ずし1,920円、いなりずし1,190円、京風ちらしずし2,200円、助六1,380円、巻ずし1,750円、〆鯖としば漬のいそ巻1,440円、小鯛ずし2,800円 (公式のおしながき)・11月〜3月の蒸し寿司、上は2,750円 (2026年4月)・お吸い物・赤だし600円 (公式のおしながき)',
    neighborhood: '二条の北の寺町通。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。甘だれを塗った穴子、炊いた干瓢や椎茸、醤油の味付けの具の京の押し寿司 (公式のおしながき)。',
    vegan_detail: '要確認。人参・ごぼう・黒ごまのシャリのいなりや、かんぴょう・きゅうり・こうこ・うめしその小巻があるが、お揚げや干瓢はだしで炊いている可能性があり、ほとんどは鯖、穴子、鯛、玉子 (公式のおしながき)。',
    notes: '[京寿司・寺町二条、天保年間から] 京都御所の南で天保年間に創業した6席の京寿司の店。さばずし、箱ずし、巻ずし、いなりを昔ながらの製法で作り、11月〜3月は錦糸玉子と焼き穴子をのせた温かい蒸し寿司を目当てに冬は行列。常連は有名店よりここのさばずしを推す。2026年3月には30分待って普通だったという声も。持ち帰りは電話で。月火休み。',
  });
}

save();
