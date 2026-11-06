// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 45.
//   + FUTURE TRAIN KYOTO DINER & CAFE (themed restaurant in a Thunderbird train car on the Umekoji High Line; core list)
//   + ふく吉 Fuku Yoshi (seven-seat sushi counter in a Nishijin townhouse; core list)
//   + 京都駅前酒場 聚楽第 Kyoto Ekimae Sakaba Jurakudai (Sasaki Shuzo sake izakaya by Higashi Honganji; notable list)
//   + 魏飯餃子 Gi Han Gyoza (gyoza and Chinese bar on Sakaimachi, sister of 創作中華 一之船入; notable list)
//   - 権太呂 岡崎店 26000917 (notable): branch of a brand already in data (権太呂 四条本店, kyoto_gontaro_shijo_honten).
//   Picked 2026-11-06 after batch 44. `queue.mjs kyoto-missed next core 200`, mod 6 = 1, after earlier skips: FUTURE TRAIN
//   26043337, ふく吉 26033353. `next notable 200`: 京都駅前酒場 聚楽第 26041195, 26000917 (skipped), 魏飯餃子 26037415.
//   Same-name check, same brand or operator only: FUTURE TRAIN — one. ふく吉 — one in our crawls; reviewers mention a
//   sister in Nishitenma, Osaka (two in all). 聚楽第 — one, an izakaya of the Sasaki Shuzo brewery. 魏飯 — three Kyoto shops
//   in our crawls (魏飯夷堂 三条店, 魏飯吉堂, 魏飯餃子), and reviewers tie it to 創作中華 一之船入 (in data,
//   kyoto_sosaku_chuka_ichino_funairi) as a supervised sister — a small group, under five. None of the four is in
//   data/kyoto.json: grep by name and address (観喜寺町3-7, 役人町, 中居町112-2, 大阪材木町697) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-45');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260301/26000917/', 'branch of a brand already in data: 権太呂 (kyoto_gontaro_shijo_honten)');

// ================================================================ FUTURE TRAIN KYOTO DINER & CAFE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26043337/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['11:00', '16:00'], ['17:00', '22:00']); const WE = day(['11:00', '22:00']);
  put({
    id: 'kyoto_future_train_umekoji', name: 'FUTURE TRAIN KYOTO DINER & CAFE', category: 'OMNI',
    lat: 34.988378, lng: 135.742837, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Themed courses and plates with crepes, chiffon cake and fried dishes; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Courses feature chicken and local meats with sweets; no vegan information (2026 reviews).',
    hours_raw: 'Monday–Friday 11:00–16:00 (last order 15:00) and 17:00–22:00 (last order 21:00); Saturday, Sunday and holidays 11:00–22:00 (last order 21:00); hours change over New Year and holidays (Tabelog). Reservations accepted (Tabelog). Entrance fee on a first visit: adults ¥700, children up to sixth grade ¥300, under-3s free; a 5% service charge at dinner only (Tabelog original 入場料（初回来店時のみ） 大人 700円／お子様 300円（小学6年生まで／3歳まで無料）、ディナーのみサービス料5％). Some reservations and a Railway Museum ticket waive the entrance fee (August 2026). Fully cashless — no cash accepted; cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). 80 seats over three train cars; children welcome (Tabelog; August 2026). On the Umekoji High Line in Umekoji Park, opposite the Kyoto Railway Museum; 1 min walk from Umekoji-Kyotonishi Stn (Tabelog; October 2026).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Umekoji Park by the Kyoto Railway Museum — 1 min walk from Umekoji-Kyotonishi Stn',
    cuisine: '"Japan\'s first elevated restaurant & café" in a pink-wrapped Thunderbird limited-express car on a disused line, with sound and light shows (Tabelog; 2026 reviews) · weekend dinner course NIGHTPARADE DINNERPARTY of 15 small courses with character fortune slips and optional free-flow drinks (July 2026) · ¥6,000 course with welcome drink, salad crepe, afternoon-tea-style appetisers, chicken main and chiffon cake (August 2026) · seasonal regional courses, e.g. a Shiga tour dinner (November 2026) · pink-coloured dishes, potatoes and chicken (August–September 2026) · lunch ¥2,000–3,000, dinner ¥4,000–6,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('FUTURE TRAIN KYOTO DINER & CAFE'), menu_url: null,
    notes: '[Themed dining · Umekoji High Line, a train car opposite the Railway Museum] A real Thunderbird express car, painted pink and set on an old elevated track, turned into a kawaii entertainment restaurant: light-and-sound shows, chick mascots, character parades and multi-course meals that reviewers find better than expected. Great with children after the Railway Museum. First-visit entrance fee ¥700; 5% service at dinner; cashless only. Open daily.',
    chef_bio: { chef_name: null, roles: ['Restaurant and performance staff (unnamed)'], origin: null,
      background: 'Per Tabelog: billed as Japan\'s first elevated restaurant and café, on the Umekoji High Line; registered as an official listing by the operator. Reviewers in 2026 describe a front car from the former Thunderbird express between Kyoto and Hokuriku, with replica cars and a platform behind (November 2026), and a concept produced by Sebastian Masuda, likened to Harajuku\'s Kawaii Monster Cafe (August 2026); an October 2026 reviewer says it opened the year before.',
      philosophy: 'A future-train entertainment restaurant of food and art (August 2026 review).', specialty: 'Themed dinner courses.',
      anecdotes: [
        { text: 'An August 2026 parent came after the Railway Museum and found the museum ticket waived the entrance fee; Car 3 is the roomiest for children.', source: R + 'B534478783/' },
        { text: 'A July 2026 guest expected style over substance at the 15-course weekend dinner and was surprised by the cooking.', source: R + 'B532349142/' },
        { text: 'An October 2026 birthday trip ended here, a year after the restaurant opened.', source: R + 'B538663476/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー・カフェ・洋食、下京区観喜寺町3-7 梅小路ハイライン、JR梅小路京都西駅から徒歩1分、JR京都駅から徒歩15分、月〜金 11:00〜16:00 (L.O.15:00)・17:00〜22:00 (L.O.21:00)、土日祝 11:00〜22:00 (L.O.21:00)、年末年始と祝日は変更あり、予約可、入場料 (初回のみ) 大人700円・子ども300円 (小学6年生まで、3歳まで無料)、ディナーのみサービス料5%、完全キャッシュレス、カード・電子マネー・QR 可、80席、日本初の高架上のレストラン&カフェ。口コミ (2026年7月〜11月、英語): 梅小路公園、京都鉄道博物館の前、ピンクに塗った元「サンダーバード」の先頭車両、2両目からはレプリカ、音と光の演出、ひよこのキャラクター、週末のディナー「NIGHTPARADE DINNERPARTY」15品、6,000円のコース、滋賀のツアーディナー、鉄道博物館のチケットで入場無料、3号車が広い、Sebastian Masuda のプロデュース、家族連れや誕生日に。',
      confidence: 'medium', sources: [TB, R + 'B532349142/', R + 'B532938197/', R + 'B534478783/', R + 'B534740492/', R + 'B535109437/', R + 'B536060451/', R + 'B537077209/', R + 'B537547170/', R + 'B538635771/', R + 'B538663476/'] },
    cultural_comfort: { level: 'english', note: 'Cashless only; ¥700 first-visit entrance fee; 5% service at dinner; family-friendly.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区観喜寺町3-7 梅小路ハイライン',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (34.988378, 135.742837); GSI 京都府京都市下京区観喜寺町3番地 is 208 m away along the High Line, so loc_precise false; nearest Kyoto record 130 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532938197/', TB],
    price_note: 'Course price from an August 2026 review; plus a ¥700 first-visit entrance fee and 5% service at dinner.', last_checked: TODAY, items: [
      it('', '', 'Dinner course (welcome drink, crepe, appetisers, chicken, chiffon cake)', '¥6,000', 'Course', 'ask', 'no', 'August 2026.', 'course'),
      it('', '', 'Entrance fee, first visit (adult)', '¥700', 'Fees', 'gf', 'vegan', 'Tabelog.', 'entrance'),
    ] }, {
    cuisine: '廃線の上のピンクに塗った特急サンダーバードの車両の「日本初の高架上のレストラン&カフェ」、音と光の演出 (食べログ、2026年の口コミ)・週末のディナーコース NIGHTPARADE DINNERPARTY は15品、キャラクターのおみくじ、飲み放題もある (2026年7月)・6,000円のコース: ウェルカムドリンク、サラダのクレープ、アフタヌーンティー風の前菜、鶏のメイン、シフォンケーキ (2026年8月)・季節の地方のコース、例: 滋賀のツアーディナー (2026年11月)・ピンク色の料理、ポテトとチキン (2026年8〜9月)・昼2,000〜3,000円、夜4,000〜6,000円 (食べログ、2026年の口コミ)',
    neighborhood: '京都鉄道博物館のそばの梅小路公園。梅小路京都西駅から徒歩1分',
    gf_detail: '要確認。クレープ、シフォンケーキ、揚げ物のあるテーマのコースとプレート。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。コースは鶏や地方の肉とスイーツ。ヴィーガンの情報はない (2026年の口コミ)。',
    notes: '[テーマレストラン・梅小路ハイライン、鉄道博物館の前の列車] 本物のサンダーバードの車両をピンクに塗り、古い高架の線路に置いた「かわいい」エンタメレストラン。光と音のショー、ひよこのマスコット、キャラクターのパレード、思った以上に本格的なコース料理。鉄道博物館のあとに子ども連れで。初回は入場料700円、夜はサービス料5%、現金不可。無休。',
  });
}

// ================================================================ ふく吉 Fuku Yoshi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26033353/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_fukuyoshi_nishijin', name: 'ふく吉 (Fuku Yoshi)', category: 'OMNI',
    lat: 35.024860, lng: 135.749946, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi with soy and nikiri, a clear soup and dashimaki in the course; no gluten information (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi omakase of fish and shellfish (2023–2026 reviews).',
    hours_raw: 'Monday, Tuesday, Thursday–Sunday 12:00–14:00 (last order 13:30) and 18:00–23:00 (last order 22:30); closed Wednesday and the first and third Thursdays (Tabelog). Reservation only (Tabelog). A 20% service charge in the tatami rooms only (Tabelog original 座敷のみサービス料20％). The ¥27,500 course is for private bookings, up to 12 guests (Tabelog). 7 counter seats and private tatami rooms for 2–8 (Tabelog). Cards, transit IC, iD and QUICPay; no QR (Tabelog). In a townhouse on Nakadachiuri-dori east of Kuromon, in Nishijin; no parking; about 18 min walk from Imadegawa Stn (Tabelog; March 2024).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nakadachiuri east of Kuromon, Nishijin — 18 min walk from Imadegawa Stn',
    cuisine: 'Sushi counter of an owner-chef in a Nishijin townhouse, with rice cooked over a wood fire in a kamado (January 2025; October 2026) · omakase of sashimi and nigiri, e.g. cod-roe tataki, clear soup, conger eel with eggplant, katsuo, squid, mackerel, hairy crab, marinated tuna, nodoguro, kohada, sweet shrimp, Biwa trout, ikura, anago (August 2023) · yellowtail with green onion; salt-grilled anago; uni; onigiri of fresh kamado rice with ikura and anago (2025–2026 reviews) · a lunch set with dashimaki and sashimi (April 2023) · lunch ¥10,000–15,000, dinner ¥20,000–30,000; a ¥27,500 course (Tabelog; 2024–2026 reviews)',
    website: null, gmaps: gm('ふく吉 寿司 上京区 中立売'), menu_url: null,
    notes: '[Sushi · Nishijin townhouse, Nakadachiuri] A seven-seat counter and private tatami rooms in a beautifully kept Nishijin townhouse, where the chef works alone over sushi made with kamado-cooked rice: hairy crab, nodoguro, kohada, salt-grilled anago, uni, and onigiri of the fresh rice. Calm and quiet — one 2026 guest wanted more chat. Reservation only; 20% service in tatami rooms. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), who prepares the dishes alone (April 2023 review)'], origin: null,
      background: 'Per Tabelog: a reservation-only sushi and Japanese restaurant in Nishijin with a counter and private tatami rooms; registered as an official listing by the shop. An August 2023 reviewer calls the building a nationally designated Important Cultural Property; June and September 2025 reviewers mention a sister shop in Nishitenma, Osaka, and a bar next door.',
      philosophy: null, specialty: 'Kamado-rice sushi.',
      anecdotes: [
        { text: 'An August 2023 guest headlined the visit "A sushi restaurant in a National Important Cultural Property".', source: R + 'B470258850/' },
        { text: 'A March 2024 lunch guest, given a private counter at the back, did not realise from the townhouse front that it was a restaurant.', source: R + 'B483731800/' },
        { text: 'An October 2026 diner, invited through a dining credit card, found the room beautiful but missed the chatty style of other sushi counters.', source: R + 'B537302701/' },
      ],
      japanese_sources_summary: '食べログ: 寿司・日本料理、上京区中立賣通黒門東入役人町、地下鉄今出川駅から徒歩18分、月・火・木〜日 12:00〜14:00 (L.O.13:30)・18:00〜23:00 (L.O.22:30)、水曜と第1・第3木曜定休、完全予約制、座敷のみサービス料20%、27,500円のコースは貸切のみ (最大12名)、7席 (カウンター)、個室 (2〜8名)、カード・交通系IC・iD・QUICPay 可、QR 不可。口コミ (2023年4月〜2026年10月、英語): 西陣の町家、国の重要文化財の建物との声 (2023年8月)、大将が一人で調理、かまどで炊くご飯、おまかせ (たらこのたたき、お椀、鱧と茄子、鰹、いか、鯖、毛蟹、漬けまぐろ、のどぐろ、こはだ、甘海老、ビワマス、いくら、穴子)、ぶりとねぎ、穴子の塩焼き、雲丹、炊きたてのご飯のおにぎり、昼のだし巻きとお造りの定食、大阪の Nishitenma にも店があるとの声、隣にバー、静かで会話が少ないとの声 (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B455575560/', R + 'B470258850/', R + 'B483731800/', R + 'B486730657/', R + 'B487080546/', R + 'B499215946/', R + 'B508100581/', R + 'B510003774/', R + 'B513772510/', R + 'B537302701/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; one omakase; 20% service in tatami rooms; cards and IC.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区中立賣通黒門東入役人町',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.024860, 135.749946); the address has no lot number and GSI matches only the town 役人町, 89 m away, so loc_precise false; nearest Kyoto record 259 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B483731800/', R + 'B537302701/'],
    price_note: 'Course price from March 2024 and October 2026 reviews; 20% service in tatami rooms.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥27,500', 'Course', 'ask', 'no', '2024–2026 reviews.', 'omakase'),
    ] }, {
    cuisine: '西陣の町家の大将のすしカウンター、ご飯はかまどで薪炊き (2025年1月、2026年10月)・お造りと握りのおまかせ、例: たらこのたたき、お椀、鱧と茄子、鰹、いか、鯖、毛蟹、漬けまぐろ、のどぐろ、こはだ、甘海老、ビワマス、いくら、穴子 (2023年8月)・ぶりとねぎ、穴子の塩焼き、雲丹、かまどで炊きたてのご飯のいくらと穴子のおにぎり (2025〜2026年の口コミ)・だし巻きとお造りの昼の定食 (2023年4月)・昼10,000〜15,000円、夜20,000〜30,000円、27,500円のコース (食べログ、2024〜2026年の口コミ)',
    neighborhood: '西陣、黒門の東の中立売通。今出川駅から徒歩18分',
    gf_detail: '要確認。醤油や煮切りのすし、お椀、だし巻きのコース。グルテンの情報はない (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚と貝のすしのおまかせ (2023〜2026年の口コミ)。',
    notes: '[すし・西陣の町家、中立売] 手入れの行き届いた西陣の町家のカウンター7席と座敷の個室。大将が一人で、かまど炊きのご飯のすしを握る: 毛蟹、のどぐろ、こはだ、穴子の塩焼き、雲丹、炊きたてご飯のおにぎり。静かで落ち着いた店で、2026年の客の一人はもっと会話がほしかったと書いている。完全予約制、座敷はサービス料20%。水曜休み。',
  });
}

// ================================================================ 京都駅前酒場 聚楽第 Jurakudai
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26041195/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['16:00', '23:30']); const WE = day(['14:00', '23:30']);
  put({
    id: 'kyoto_ekimae_sakaba_jurakudai', name: '京都駅前酒場 聚楽第 (Kyoto Ekimae Sakaba Jurakudai)', category: 'OMNI',
    lat: 34.989338, lng: 135.758721, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto dashi dishes, miso dengaku, sashimi, cutlets and a sake-lees hot pot with soba to finish; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, duck, wagyu and a sake-lees hot pot; Kyoto dashi throughout (2026 reviews).',
    hours_raw: 'Monday–Friday and the day before holidays 16:00–23:30; Saturday, Sunday and holidays 14:00–23:30; last order 23:00 (Tabelog). Reservations accepted (Tabelog). A charge of ¥420 per person, tax included (Tabelog original 420円（税込）), which brings a small cup of sake as otoshi (September 2026). 82 seats incl. counter, sofas, tatami and sunken seating; private room for 20–30; non-smoking (Tabelog). Cards and PayPay; no e-money (Tabelog). Next to Higashi Honganji, 3 min walk from Kyoto Station (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'By Higashi Honganji — 3 min walk from Kyoto Station',
    cuisine: 'Kyoto-style izakaya of the Sasaki Shuzo brewery\'s sake (Tabelog; 2026 reviews) · Jurakudai Cho Karakuchi, Koto Ginmeisui Karakuchi and other house sakes, tasting flights, and a ¥4,980 all-you-can-drink course with +¥500 for 13 Sasaki sakes (September–October 2026) · six-kind sashimi platter, Kamo eggplant with duck-miso dengaku, fresh Miyama yuba, grilled duck skewers, rare wagyu cutlet with demi-glace, beef cutlet (September–October 2026) · sake-lees hot pot finished with soba (October 2026) · "Jurakudai Sonic" and matcha sour (October 2026) · about ¥4,000–8,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('京都駅前酒場 聚楽第'), menu_url: null,
    notes: '[Sake izakaya · by Higashi Honganji, near Kyoto Station] A roomy, newly opened izakaya from the Sasaki Shuzo brewery, three minutes from Kyoto Station: house sakes such as Jurakudai, flights and an all-you-can-drink sake course, with Kyoto-flavoured plates — sashimi, Kamo eggplant dengaku, Miyama yuba, wagyu cutlet and a sake-lees hot pot. A sake cup comes as the ¥420 otoshi. Service can be uneven when busy. Evenings, from 14:00 at weekends.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a Kyoto-style Japanese izakaya serving Sasaki Sake Brewery\'s sake; registered as an official listing by the operator. October 2026 reviewers call it a newly opened izakaya produced by the historic Sasaki Shuzo, the family business of actor Kuranosuke Sasaki.',
      philosophy: 'Sasaki Sake Brewery\'s sake with Kyoto-style dishes (Tabelog).', specialty: 'Sasaki Shuzo sake; Kyoto plates.',
      anecdotes: [
        { text: 'A September 2026 sake fan, with only an hour, came to drink Sasaki Shuzo sake — the family business of actor Kuranosuke Sasaki — and found a hand-shaped dish with painted nails on the menu tableware.', source: R + 'B536645040/' },
        { text: 'An October 2026 pair reserved tatami for two after seeing photos, but were seated at a small table on a crowded night.', source: R + 'B537319267/' },
        { text: 'A September 2026 guest liked the sake otoshi but found the dishes arrived unevenly.', source: R + 'B536158663/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮、下京区中居町112-2・114-4、京都駅から徒歩3分、東本願寺のすぐそば、月〜金・祝前日 16:00〜23:30、土日祝 14:00〜23:30、L.O.23:00、予約可、チャージ420円 (税込)、82席、カウンター、ソファ、座敷、掘りごたつ、個室 (20〜30名)、禁煙、カード・PayPay 可、電子マネー不可、Sasaki Shuzo の日本酒と京風の和の居酒屋。口コミ (2026年9月〜10月、英語): Sasaki Shuzo (俳優の Kuranosuke Sasaki さんの実家) が手がける新しい居酒屋、お通しに日本酒の小さな杯、「Jurakudai Cho Karakuchi」、「Koto Ginmeisui Karakuchi」、飲み比べ、4,980円の飲み放題コース、+500円で Sasaki Shuzo の日本酒13種、刺身の6種盛り、賀茂茄子と鴨味噌の田楽、Miyama の生湯葉、鴨の串焼き、和牛のレアカツ (デミグラス)、牛カツ、酒粕の鍋と締めのそば、「Jurakudai Sonic」、抹茶サワー、提供にむらがあるとの声。',
      confidence: 'medium', sources: [TB, R + 'B536158663/', R + 'B536557624/', R + 'B536607965/', R + 'B536640680/', R + 'B536645040/', R + 'B536688680/', R + 'B536717881/', R + 'B536723559/', R + 'B537319267/', R + 'B537515337/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; ¥420 charge with a sake otoshi; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区中居町112-2・114-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989338, 135.758721); cross-checked: GSI 京都府京都市下京区中居町112番地 (lot) 11 m; kyoto_kyoto_ito (112-1) is 11 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536640680/', TB],
    price_note: 'Course price from an October 2026 review; ¥420 charge per person.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-drink course', '¥4,980', 'Course', 'ask', 'no', '+¥500 for 13 Sasaki sakes; October 2026.', 'nomihodai'),
      it('', '', 'Kamo eggplant with duck-miso dengaku', '', 'Small plates', 'ask', 'no', 'September 2026.', 'kamonasu_dengaku'),
      it('', '', 'Sake-lees hot pot with soba to finish', '', 'Hot pot', 'no', 'no', 'October 2026.', 'kasu_nabe'),
    ] }, {
    cuisine: 'Sasaki Shuzo の日本酒の京風の居酒屋 (食べログ、2026年の口コミ)・「Jurakudai Cho Karakuchi」、「Koto Ginmeisui Karakuchi」などの酒、飲み比べ、4,980円の飲み放題コースは+500円で Sasaki Shuzo の13種 (2026年9〜10月)・刺身の6種盛り、賀茂茄子の鴨味噌田楽、Miyama の生湯葉、鴨の串焼き、和牛のレアカツのデミグラス、牛カツ (2026年9〜10月)・締めにそばの酒粕の鍋 (2026年10月)・「Jurakudai Sonic」、抹茶サワー (2026年10月)・4,000〜8,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '京都駅近く、東本願寺のそば。京都駅から徒歩3分',
    gf_detail: '要確認。京都のだしの料理、味噌の田楽、刺身、カツ、締めにそばの酒粕の鍋。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、鴨、和牛、酒粕の鍋。全体に京都のだしを使う (2026年の口コミ)。',
    notes: '[日本酒の居酒屋・京都駅近く、東本願寺のそば] 京都駅から3分、Sasaki Shuzo が手がける新しい広い居酒屋。聚楽第など蔵の酒を飲み比べや飲み放題で、刺身、賀茂茄子の田楽、Miyama の生湯葉、和牛カツ、酒粕の鍋など京都らしい料理と。お通しは日本酒の小さな杯でチャージ420円。混むと提供にむらがあることも。夕方から、週末は14時から。',
  });
}

// ================================================================ 魏飯餃子 Gi Han Gyoza
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26037415/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['11:30', '14:30'], ['17:30', '22:00']); const SA = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_gihan_gyoza_sakaimachi', name: '魏飯餃子 (Gi Han Gyoza)', category: 'OMNI',
    lat: 35.009181, lng: 135.763169, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat-wrapper gyoza and Chinese dishes in soy-based sauces (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork gyoza, saliva chicken, mapo tofu with meat, sweet and sour pork, shrimp (2024–2026 reviews).',
    hours_raw: 'Monday–Friday 11:30–14:30 (last order 14:00) and 17:30–22:00 (food last order 21:00, drinks 21:30); Saturday and holidays 11:30–15:00 and 17:30–22:00; closed Sunday; bar service from 22:30 on Thursday–Saturday (Tabelog). Reservations accepted; seat-only bookings limited to 1 hour at lunch and 1.5 hours at dinner when busy (Tabelog). No cover charge (Tabelog original チャージ料なし). Lines at the 17:30 opening (September 2026). 60 seats with a private room (Tabelog; May 2026). Cards, e-money and QR incl. Alipay (Tabelog). On Sakaimachi south of Aneyakoji; 7 min walk from Karasuma Oike Stn (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sakaimachi south of Aneyakoji — 7 min walk from Karasuma Oike Stn',
    cuisine: 'Gyoza and authentic Chinese bar, supervised by 創作中華 一之船入 per reviewers (Tabelog; August and October 2026) · lunch sets ¥1,200–1,400 with salad, small dish, main, soup, rice and almond tofu: weekly special (e.g. salt mapo tofu), monthly special (e.g. yurinchi), gyoza set, tantanmen (cold in summer); a ¥2,500 lunch course (2024–2026 reviews) · gyoza: Gi Han, shrimp and green onion, ginger, cilantro (November 2026) · pickled mustard greens, saliva chicken, mapo tofu, sweet and sour pork, dried-tofu salad, shrimp chili with egg, pork and green pepper, fried rice, lu rou fan (2026 reviews) · courses with all-you-can-drink incl. Shaoxing wine (October 2026) · lunch ¥1,000–2,000, dinner ¥2,000–3,000 (Tabelog)',
    website: null, gmaps: gm('魏飯餃子 堺町 京都'), menu_url: null,
    notes: '[Gyoza and Chinese · Sakaimachi near Karasuma Oike] A busy, good-value Chinese bar overseen by the creative-Chinese 一之船入: several gyoza (shrimp and green onion, ginger, cilantro), saliva chicken, mapo tofu and lu rou fan, ¥1,200 lunch sets with almond tofu, and courses with Shaoxing wine on the free-flow list. Queues at opening; time limits when busy. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a gyoza and dumpling restaurant serving authentic Chinese food; registered as an official listing by the operator. Reviewers in 2026 describe it as part of the group with the Sanjo shop and 創作中華 一之船入, which supervises it (August–October 2026), popular with solo women at lunch and with overseas visitors at night.',
      philosophy: 'Authentic Chinese food (Tabelog).', specialty: 'Gyoza; lunch sets.',
      anecdotes: [
        { text: 'An October 2026 six-time regular came after a film at Uplink Kyoto and noted the lunch had risen from ¥1,100 to ¥1,200 — still a good deal.', source: R + 'B522945242/' },
        { text: 'A September 2026 guest found the ¥2,500 lunch course huge and tasty, but warned against expecting the level of the famous parent.', source: R + 'B535948289/' },
        { text: 'An October 2026 diner found the Pu-erh tea tasted and smelled strange.', source: R + 'B538328360/' },
      ],
      japanese_sources_summary: '食べログ: 餃子・居酒屋・バル、中京区堺町通姉小路下ル大阪材木町697、烏丸御池駅から徒歩7分、月〜金 11:30〜14:30 (L.O.14:00)・17:30〜22:00 (料理L.O.21:00、ドリンクL.O.21:30)、土・祝 11:30〜15:00・17:30〜22:00、日曜定休、木〜土は22:30からバー営業、予約可 (混雑時は席のみの予約は昼1時間・夜1.5時間)、チャージ料なし、60席、個室、カード・電子マネー・QR 可、本格中華の餃子の専門店。口コミ (2024年6月〜2026年11月、英語): 一之船入の監修、三条の店と同じグループ、ランチ1,200〜1,400円 (サラダ、小鉢、メイン、スープ、ご飯、杏仁豆腐)、週替わり (塩麻婆豆腐)、月替わり (油淋鶏)、餃子、担々麺 (夏は冷やし)、2,500円のランチコース、魏飯餃子、海老とねぎ、生姜、パクチーの餃子、搾菜、よだれ鶏、麻婆豆腐、酢豚、干し豆腐のサラダ、海老チリの卵、青椒肉絲、チャーハン、魯肉飯、紹興酒も飲み放題、開店前から行列、プーアル茶が変な味との声。',
      confidence: 'medium', sources: [TB, R + 'B482608435/', R + 'B508438324/', R + 'B521798781/', R + 'B522945242/', R + 'B534460193/', R + 'B535948289/', R + 'B538277876/', R + 'B538328360/', R + 'B538581464/', R + 'B538756720/'] },
    cultural_comfort: { level: 'english', note: 'Popular with visitors; time limits when busy; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通姉小路下ル大阪材木町697',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.009181, 135.763169); cross-checked: GSI 京都府京都市中京区大阪材木町697番地 (lot) 16 m; nearest Kyoto record 27 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B482608435/', R + 'B535948289/'],
    price_note: 'Lunch prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set (salad, small dish, main, soup, rice, almond tofu)', '¥1,200', 'Lunch', 'no', 'no', 'September 2026.', 'lunch_set'),
      it('', '', 'Lunch course', '¥2,500', 'Lunch', 'no', 'no', 'September 2026.', 'lunch_course'),
      it('', '', 'Shrimp and green onion gyoza', '', 'Gyoza', 'no', 'no', 'November 2026.', 'ebi_gyoza'),
    ] }, {
    cuisine: '口コミによれば 創作中華 一之船入 が監修する餃子と本格中華のバル (食べログ、2026年8月・10月)・ランチセット1,200〜1,400円、サラダ、小鉢、メイン、スープ、ご飯、杏仁豆腐: 週替わり (例: 塩麻婆豆腐)、月替わり (例: 油淋鶏)、餃子、担々麺 (夏は冷やし)、2,500円のランチコース (2024〜2026年の口コミ)・餃子: 魏飯、海老とねぎ、生姜、パクチー (2026年11月)・搾菜、よだれ鶏、麻婆豆腐、酢豚、干し豆腐のサラダ、海老チリの卵、豚とピーマンの炒め、チャーハン、魯肉飯 (2026年の口コミ)・紹興酒も入る飲み放題のコース (2026年10月)・昼1,000〜2,000円、夜2,000〜3,000円 (食べログ)',
    neighborhood: '姉小路の南の堺町通。烏丸御池駅から徒歩7分',
    gf_detail: 'グルテンフリー不可。小麦の皮の餃子と醤油系のたれの中華 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚の餃子、よだれ鶏、肉の麻婆豆腐、酢豚、海老 (2024〜2026年の口コミ)。',
    notes: '[餃子と中華・烏丸御池近くの堺町] 創作中華の一之船入が監修する、にぎやかでお得な中華のバル。海老とねぎ、生姜、パクチーなど数種の餃子、よだれ鶏、麻婆豆腐、魯肉飯、杏仁豆腐付きの1,200円のランチ、紹興酒も入る飲み放題のコース。開店前から行列、混むと時間制限あり。日曜休み。',
  });
}

save();
