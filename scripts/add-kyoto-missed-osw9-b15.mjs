// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 15.
//   + ホンデモッバン Hongdae Moban (11-seat Korean diner and bar on Matsubara-dori; since 2020)               [core]
//   + 熟成刺身と旨い酒 ひとしお Hitoshio (aged-sashimi and sake izakaya around a courtyard, Rokkaku-Tominokoji) [core]
//   + 俵屋旅館 Tawaraya Ryokan (historic Fuyacho inn; kaiseki for its guests)                                   [notable]
//   + 御所東 うなしげ Gosho Higashi Unashige (Kanto-style steamed eel east of the Imperial Palace; since 2022) [notable]
//   - 水暉 ザ・リッツ・カールトン京都 26023295 skipped (coordinator ruling: covered by the hotel-wide record)
//   Same-name counts first: ホンデモッバン 1; ひとしお — 熟成刺身と旨い酒 ひとしお 1 (炭焼 ひとしお 27127064 in Osaka is a
//   different name and concept); 俵屋旅館 1 (the 俵屋吉富 confectioner shops are a different business); うなしげ 1.
//   Taken in queue order on 2026-11-05: core 26035217, 26030747; notable 26023295 (skip), 26002127, 26037209.
//   None of the four is in data/kyoto.json by name or address (俵屋町186 in data is a different street address).
//   Pins: Tabelog points; 俵屋旅館's GSI match is town-only (中白山町), so loc_approx 'single'; it is 24 m from
//   kyoto_hiiragiya_ryokan across the street.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26023295', '水暉 ザ・リッツ・カールトン京都: covered by vm_the_ritz_carlton_kyoto (hotel-wide dining record), as The Lobby Lounge and La Locanda were in osw6-10');

// ================================================================ ホンデモッバン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035217/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '23:00']);
  put({
    id: 'kyoto_hongdae_moban', name: 'ホンデモッバン (Hongdae Moban)', category: 'OMNI',
    lat: 34.999028, lng: 135.766475, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Korean dishes with chili sauces, fried chicken, tteokbokki and chige; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: pork belly, chicken, clam chige, sausages and bossam (2025–26 reviews).',
    hours_raw: 'Mon, Wed–Sun and holidays 11:30–14:00 (last order 13:30) and 17:30–23:00 (last order 22:30); closed Tuesday (Tabelog). Another note on the same Tabelog page gives 11:30–22:00 with a break 15:00–17:30. A September 2026 reviewer says lunch is served on weekdays only. Bookings taken, also through Tabelog (Tabelog; September 2025). 11 seats; non-smoking; cards (VISA, Master, JCB), no e-money or QR (Tabelog). A small fee for takeaway containers (March 2026). On Matsubara-dori east of Fuyacho, near Teramachi; 383 m from Kiyomizu-Gojo Stn (Tabelog; February 2025).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Matsubara-dori near Teramachi — Kiyomizu-Gojo Stn or Kawaramachi',
    cuisine: 'Korean home cooking and drinking food, with K-pop videos playing (2025–26 reviews) · lunch sets: bibimbap with sundubu chige ¥1,200 (February 2025), tofu chige set with seaweed and kimchi · evening: "UFO chicken" — fried, honey-butter, yangnyeom and other chicken around melted cheese, 8 pieces about ¥1,500 (May 2025), stone-pot bibimbap, naengmyeon, tteokbokki, sotteok sotteok, samgyeopsal with chige, kimbap, a bossam course (2025–26 reviews) · Chamisul soju and fresh makgeolli (2025–26 reviews)',
    website: null, gmaps: gm('ホンデモッバン 京都 松原通'), menu_url: TB + 'dtlmenu/',
    notes: "[Korean · Matsubara-dori near Teramachi] An 11-seat Korean café-diner with K-pop on the screens, run by a Korean chef and staff per a 2025 review: bibimbap and chige sets at lunch, then 'UFO chicken' with melted cheese, samgyeopsal, tteokbokki and soju into the night (to 23:00). Lunch about ¥1,200; dinner ¥2,000–4,000. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed; Korean, per a February 2025 review)'], origin: 'Korea (February 2025 review: "Both the chef and staff are Korean").',
      background: 'Opened 24 December 2020 (Tabelog). Per the operator: an interior, music and food meant to take you to Korea, with videos from groups such as TWICE and BTS. A February 2025 reviewer explains the name as Hongdae, the area by Hongik University, plus mokbang, eating videos.',
      philosophy: null, specialty: 'UFO chicken; bibimbap set.',
      anecdotes: [
        { text: 'A February 2026 diner who often visits Seoul came with a Korean friend for the bossam course — "a bit small, but absolutely delicious".', source: R + 'B523342380/' },
        { text: 'Hoping for cold noodles on a hot June 2025 day, a lunch guest found only lunch sets on offer.', source: R + 'B510189231/' },
        { text: 'A March 2026 diner took leftover chicken home and paid a small fee for the container.', source: R + 'B528286848/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ホンデモッバン、焼肉・韓国料理、下京区松原通麩屋町東入石不動之町692-4、清水五条駅から383m、月水〜日・祝 11:30〜14:00 (L.O. 13:30)・17:30〜23:00 (L.O. 22:30)、火曜休み (別記: 11:30〜22:00、15:00〜17:30 休憩)、11席、禁煙、カード可、2020年12月24日オープン、韓国へ行ったような内装と音楽、TWICE や BTS の映像。口コミ (2025年2月〜2026年9月、英語): ビビンバ定食とスンドゥブチゲ1,200円、UFO チキン、冷麺、トッポッキ、ソトックソトック、サムギョプサル、キンパ、ポッサム、チャミスル、マッコリ、平日のみランチ。',
      confidence: 'medium', sources: [TB, R + 'B500681171/', R + 'B500765625/', R + 'B507212663/', R + 'B510189231/', R + 'B511460144/', R + 'B514748276/', R + 'B523342380/', R + 'B528286848/', R + 'B535728914/', R + 'B536325827/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small and casual; book for dinner; Korean staff per a 2025 review.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区松原通麩屋町東入石不動之町692-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.999028, 135.766475); cross-checked: GSI 京都府京都市下京区石不動之町692番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B500681171/', R + 'B507212663/'],
    price_note: 'No menu read; prices from 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Bibimbap set with sundubu chige (lunch)', '¥1,200', 'Lunch', 'ask', 'no', 'February 2025 review.', 'bibimbap_set'),
      it('', '', 'UFO chicken (8 pieces with melted cheese)', '~¥1,500', 'Dinner', 'no', 'no', 'May 2025 review.', 'ufo_chicken'),
    ] }, {
    cuisine: 'K-POP の映像が流れる店の韓国の家庭料理と酒の肴 (2025〜26年の口コミ)・ランチ: ビビンバとスンドゥブチゲの定食1,200円 (2025年2月)、韓国海苔とキムチ付きの豆腐チゲ定食・夜: 揚げ、ハニーバター、ヤンニョムなどのチキンを溶けたチーズで囲む UFO チキン8個で約1,500円 (2025年5月)、石焼ビビンバ、冷麺、トッポッキ、ソトックソトック、サムギョプサルとチゲ、キンパ、ポッサムのコース (2025〜26年の口コミ)・チャミスルと生マッコリ (2025〜26年の口コミ)',
    neighborhood: '寺町近くの松原通。清水五条駅か河原町から',
    gf_detail: '要確認。唐辛子のたれ、揚げたチキン、トッポッキ、チゲなどの韓国料理。グルテンの情報はない (2025〜26年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。豚バラ、鶏、アサリのチゲ、ソーセージ、ポッサム (2025〜26年の口コミ)。',
    notes: '[韓国料理・寺町近くの松原通] K-POP の映像が流れる11席の韓国カフェ食堂。2025年の口コミでは料理人もスタッフも韓国の人。昼はビビンバやチゲの定食、夜はチーズの UFO チキン、サムギョプサル、トッポッキと焼酎で23時まで。昼は1,200円ほど、夜は2千〜4千円。火曜休み。',
  });
}

// ================================================================ 熟成刺身と旨い酒 ひとしお
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26030747/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_jukusei_sashimi_hitoshio', name: '熟成刺身と旨い酒 ひとしお (Jukusei Sashimi to Umai Sake Hitoshio)', category: 'OMNI',
    lat: 35.007435, lng: 135.765316, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, dashi-simmered and fried dishes, tempura in the set menus, saikyo-miso grilled cheese; no gluten information (Tabelog; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the house dashi is kombu with bonito flakes, and the menu is built on fish (Tabelog).',
    hours_raw: '17:00–23:00 (last order 22:15); closed Tuesday (Tabelog). Online booking except for same-day; the phone may not be answered during service; one drink and one dish per person; tables for groups of three or more (Tabelog). Starter charge ¥500, not with courses; ¥1,500 on 1–3 January (Tabelog). Japanese sake half price on Thursdays (May 2026 review; also June 2023). 18 seats incl. counter rooms for 2–4 facing a courtyard and private rooms; wheelchair accessible; non-smoking; minors generally not admitted — ask for family bookings; cards incl. UnionPay; PayPay, Alipay, WeChat Pay (Tabelog). At Rokkaku and Tominokoji; 8 min from Karasuma, Kyoto Shiyakusho-mae or Karasuma-Oike Stn (Tabelog; December 2024).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Rokkaku and Tominokoji — 8 min from Karasuma or Kyoto Shiyakusho-mae Stn',
    cuisine: 'Izakaya for aged sashimi and sake: the "tsukuri-mori" platter of usually five fish mixes fresh fish from Maizuru, Iki and Kochi with aged sashimi; obanzai and small dishes on a dashi of kombu soaked a day, simmered four hours and finished with bonito, such as dashi-simmered then fried daikon; nama-fu and nama-yuba dishes; about 30 sake chosen by the owner, including Jikon and Juyondai, and about five off the menu (Tabelog) · set menus with tempura and sushi: Kyoto set ¥7,700, eel kabayaki set ¥8,800, wagyu set ¥9,900 (Tabelog) · reviewers single out Camembert grilled with saikyo miso, fried fish scales, cod milt, and a seasonal 8-dish kaiseki with 90 min of drinks at ¥10,000 (2024–26 reviews)',
    website: null, gmaps: gm('熟成刺身と旨い酒 ひとしお 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Aged sashimi & sake · Rokkaku-Tominokoji] A stylish izakaya with counter seats around a small courtyard, built on two things: sashimi platters mixing fresh and aged fish, and about 30 sake chosen by the owner — half price on Thursdays, per regulars. Don't miss the saikyo-miso grilled Camembert. Around ¥6,000–8,000; ¥500 starter. Open to 23:00; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources; chooses the sake)'], origin: null,
      background: 'Opened 22 May 2018 (Tabelog). Per the operator: fish sent direct from places such as Maizuru, Iki and Kochi, served fresh and aged; dashi from kombu soaked for a day and simmered four hours, finished with bonito flakes.',
      philosophy: null, specialty: 'Tsukuri-mori of fresh and aged fish; saikyo-miso grilled Camembert.',
      anecdotes: [
        { text: 'A May 2026 third-timer found the aged sashimi "a matter of personal preference" — creamy, unusual and sweet — and the Thursday half-price sake kept the bill low.', source: R + 'B467646670/' },
        { text: 'In August 2025 the place was "lively with many international guests", though some dishes a traveller wanted had run out.', source: R + 'B511919058/' },
        { text: 'A November 2025 diner\'s one request: fix the wobbly chair legs.', source: R + 'B517788405/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 熟成刺身と旨い酒 ひとしお、居酒屋・海鮮・日本酒バー、中京区大黒町88 シルブープレビル 1F、17:00〜23:00 (L.O. 22:15)、火曜休み、お付き出し500円 (コースは不要、元旦から3日は1,500円)、18席、中庭を望むカウンター個室、テーブルは3名から、未成年は原則不可、2018年5月22日オープン、名物つくり盛り (舞鶴、壱岐、高知などからの鮮魚と熟成刺身)、昆布を一日水に浸けて4時間炊き鰹節を合わせる出汁、大根の揚げ出汁、生麩や生湯葉、店主が選ぶ日本酒約30種、京都セット7,700円、鰻蒲焼セット8,800円、黒毛和牛セット9,900円。口コミ (2023年6月〜2026年8月、英語): カマンベールの西京味噌焼き、木曜日は日本酒半額、鱗の唐揚げ、白子、熟成刺身。',
      confidence: 'medium', sources: [TB, R + 'B467646670/', R + 'B497987784/', R + 'B511919058/', R + 'B512557105/', R + 'B517223780/', R + 'B517788405/', R + 'B530228368/', R + 'B531595099/', R + 'B533170598/', R + 'B533944320/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online ahead; one drink and one dish each; ¥500 starter; adults only by default.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区大黒町88 シルブープレビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.007435, 135.765316); cross-checked: GSI 京都府京都市中京区大黒町88番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Set prices from Tabelog, tax included (read 2026-11-05); per person, 2–24 people.', last_checked: TODAY, items: [
      it('', '', 'Kyoto set (tofu, yuba, nama-fu, tempura, sushi)', '¥7,700', 'Sets', 'ask', 'no', '', 'kyoto_set'),
      it('', '', 'Eel kabayaki set (with tempura and sushi)', '¥8,800', 'Sets', 'ask', 'no', '', 'unagi_set'),
      it('', '', 'Wagyu set (steak, tempura, sushi)', '¥9,900', 'Sets', 'ask', 'no', '', 'wagyu_set'),
      it('', '', 'Starter charge', '¥500', 'Charges', '', '', 'Not with courses; ¥1,500 on 1–3 January.', 'otsukidashi'),
    ] }, {
    cuisine: '熟成刺身と日本酒の居酒屋: 名物のつくり盛りは通常5種で、舞鶴、壱岐、高知などからの鮮魚と熟成刺身の盛り合わせ。昆布を一日水に浸けて4時間炊き、鰹節を合わせた出汁のおばんざいや一品 (大根の揚げ出汁など)、生麩や生湯葉の料理。店主が選ぶ約30種の日本酒 (Jikon や Juyondai も)、メニューにない5種ほども (食べログ)・天ぷらと寿司付きのセット: 京都セット7,700円、鰻蒲焼セット8,800円、和牛セット9,900円 (食べログ)・口コミが挙げるのはカマンベールの西京味噌焼き、魚の鱗の唐揚げ、鱈の白子、90分飲み放題付きの季節の会席8品10,000円 (2024〜26年の口コミ)',
    neighborhood: '六角通と富小路通の角。烏丸駅や京都市役所前駅から徒歩8分',
    gf_detail: '要確認。刺身、出汁の煮物や揚げ物、セットの天ぷら、西京味噌焼きのチーズ。グルテンの情報はない (食べログ、2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。店の出汁は昆布に鰹節を合わせたもので、料理は魚が中心 (食べログ)。',
    notes: '[熟成刺身と日本酒・六角富小路] 小さな中庭を囲むカウンターのあるおしゃれな居酒屋。鮮魚と熟成魚を盛り合わせる刺身と、店主が選ぶ約30種の日本酒が柱で、常連によれば木曜は日本酒が半額。カマンベールの西京味噌焼きは外せない。6千〜8千円ほど、お通し500円。23時まで、火曜休み。',
  });
}

// ================================================================ 俵屋旅館
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002127/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_tawaraya_ryokan', name: '俵屋旅館 (Tawaraya Ryokan)', category: 'OMNI',
    lat: 35.01027, lng: 135.765924, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Kyoto kaiseki dinners and Japanese or Western breakfasts; no gluten information (2023–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: kaiseki of fish such as sea bream and ayu, duck hot pot and dashi; no vegan or vegetarian information in the sources (2023–26 reviews).',
    hours_raw: 'A ryokan: check-in 15:00, check-out 11:00; open all year (Tabelog). Dinner from 18:30 and breakfast from 8:00, Japanese or Western, served in the guest room (June 2026 review). The sources found describe meals only as part of a stay; no source shows meals for non-guests. Bento can be ordered ahead or on the day of a stay, but not collected on Tuesdays; no corkage on brought wine or drinks (Tabelog). Book by phone 075-211-5566 or through travel agents (Tabelog; September 2023). Rooms with tatami and sunken seating; Tabelog lists smoking as allowed; cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). On Fuyacho north of Aneyakoji, across the street from Hiiragiya; 5 min from Kyoto Shiyakusho-mae Stn (Tabelog; June 2026).',
    hours: {}, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fuyacho north of Aneyakoji, opposite Hiiragiya — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Kyoto kaiseki for staying guests, served in the room: e.g. ayu grilled on bamboo leaves over hot stones (June 2026), duck hot pot (March 2026) · breakfast: yudofu warmed over charcoal, a choice of grilled or dried fish such as guji, salmon or aji, kinpira of lotus root, chirimen-jako, pickles and miso soup; or a Western breakfast of croissants, eggs and bacon (2023–24 reviews) · warabi mochi with tea on arrival (2023 and 2025 reviews) · New Year osechi with white-miso zōni, for which a regular waited on a waitlist (January 2024) · bills ¥60,000–100,000-plus per person including the stay (2023–26 reviews)',
    website: null, gmaps: gm('俵屋旅館 京都 麩屋町'), menu_url: null,
    notes: "[Ryokan kaiseki · Fuyacho, a grand old Kyoto inn] One of Kyoto's most famous inns, across the street from Hiiragiya, with garden views and art in every room. Its kaiseki dinners and celebrated breakfasts (charcoal-warmed yudofu) come with a stay, roughly ¥60,000–100,000+ a head; we found no source for dining without staying. Reviews are split: some call the food exceptional, others average.",
    chef_bio: { chef_name: 'Kurokawa (surname only, March 2026 review)', roles: ['Cook named by a March 2026 reviewer'], origin: null,
      background: 'Per reviewers: a long-established inn dating to the Edo period (May 2025), often called one of Kyoto\'s three great ryokan (2023–24 reviews); scrolls and ornaments in the rooms, with a list explaining them (April 2023).',
      philosophy: null, specialty: 'Kyoto kaiseki; breakfast yudofu.',
      anecdotes: [
        { text: 'A March 2026 regular wrote it is "worth coming here just to enjoy Mr. Kurokawa\'s cooking", but that the atmosphere had changed since skilled staff left.', source: R + 'B503798668/' },
        { text: 'A December 2023 guest found the food below expectations — the rice and dashi raised questions, and the breakfast fish was too dry to finish.', source: R + 'B477238688/' },
        { text: 'A January 2024 guest, waitlisted since early the previous year, got a 3 January slot for the New Year osechi, with the guest\'s own name on the chopstick wrappers.', source: R + 'B436889144/' },
      ],
      japanese_sources_summary: '食べログ: 俵屋旅館、旅館・日本料理、中京区麩屋町通姉小路上ル中白山町278、京都市役所前駅から徒歩約5分、チェックイン15:00・チェックアウト11:00、年中無休、カード可、個室、持ち込み可 (持ち込み料なし)、弁当は事前または宿泊日に手配可 (火曜は受け取り不可)。口コミ (2023年4月〜2026年8月、英語): 京都三大旅館のひとつ、わらび餅とお茶の出迎え、朝食の湯豆腐、夕食は18時30分から、朝食は8時から和洋選択、鮎、鴨鍋、正月のおせちと白味噌の雑煮、料理が期待に届かないという声も。',
      confidence: 'medium', sources: [TB, R + 'B203944027/', R + 'B397902056/', R + 'B436889144/', R + 'B473218700/', R + 'B477238688/', R + 'B490440454/', R + 'B503798668/', R + 'B509555445/', R + 'B529256569/', R + 'B533280259/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Meals come with a stay; book the room by phone or through an agent.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区麩屋町通姉小路上ル中白山町278',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; stay reviews dated through August 2026. No official website found.' },
    pin_source: `Tabelog ${TB} (35.010270, 135.765924); cross-checked: GSI matched only the town (京都府京都市中京区中白山町), so loc_approx 'single'; 24 m from kyoto_hiiragiya_ryokan (中白山町277) across the street; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B397902056/', R + 'B203944027/'],
    price_note: 'No menu or prices read; meals are part of a stay.', last_checked: TODAY, items: [
      it('', '', 'Japanese breakfast: yudofu, grilled fish, small dishes, rice, miso soup', '', 'Breakfast', 'ask', 'no', 'April 2023 review.', 'wa_breakfast'),
      it('', '', 'Western breakfast: croissants, eggs, bacon or sausage, salad or fruit', '', 'Breakfast', 'no', 'no', 'March 2024 review.', 'western_breakfast'),
    ] }, {
    cuisine: '宿泊客のための京懐石を部屋で: 熱した石に笹を敷いて焼く鮎 (2026年6月)、鴨鍋 (2026年3月) など・朝食: 炭火で温める湯豆腐、ぐじ、鮭、鯵などから選ぶ焼き魚や干物、蓮根のきんぴら、ちりめんじゃこ、漬物、味噌汁。またはクロワッサン、卵、ベーコンの洋朝食 (2023〜24年の口コミ)・到着時のわらび餅とお茶 (2023年と2025年の口コミ)・正月のおせちと白味噌の雑煮。常連がキャンセル待ちで取った (2024年1月)・支払いは宿泊込みで1人6万〜10万円超 (2023〜26年の口コミ)',
    neighborhood: '姉小路の北の麩屋町通、柊家の向かい。京都市役所前駅から徒歩5分',
    gf_detail: '予約時に要確認。京懐石の夕食と和洋の朝食。グルテンの情報はない (2023〜26年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。鯛や鮎などの魚、鴨鍋、出汁の懐石で、ヴィーガンやベジタリアンの情報はない (2023〜26年の口コミ)。',
    notes: '[旅館の懐石・麩屋町、京都の名旅館] 柊家の向かいにある京都屈指の名旅館で、どの部屋にも庭と美術品。懐石の夕食と名高い朝食 (炭火の湯豆腐) は宿泊に付き、1人6万〜10万円超。食事だけの利用を示す情報は見つからなかった。料理は絶賛する口コミと平凡とする口コミに分かれる。',
  });
}

// ================================================================ 御所東 うなしげ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26037209/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_gosho_higashi_unashige', name: '御所東 うなしげ (Gosho Higashi Unashige)', category: 'OMNI',
    lat: 35.019623, lng: 135.768157, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Eel under a soy-based sauce on rice, eel chawanmushi, uzaku; no gluten information (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel restaurant (Tabelog).',
    hours_raw: 'Tue–Sat 11:30–15:00 and 17:30–21:00; closed Sunday and Monday (Tabelog). Booking preferably through Instagram (Tabelog). The eel is steamed after you order, so expect about 30 minutes; a November 2025 reviewer suggests phoning the order ahead. Cards and QR payments, no e-money; non-smoking (Tabelog). 7 min from Jingu-Marutamachi Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'East of the Imperial Palace (Gosho-higashi) — 7 min from Jingu-Marutamachi Stn',
    cuisine: 'Kanto-style eel — steamed, then grilled, soft and fluffy, with a lighter soy-leaning sauce — grilled at a central counter in a machiya-style room (2025–26 reviews) · unaju ¥5,200 for one eel (July and November 2025), large with 1.5 eels; kabayaki ¥4,000 (December 2024); a June 2025 reviewer says from ¥4,800 for a whole eel · uzaku ¥1,400, grilled liver ¥800, eel chawanmushi, nikogori (2025 reviews)',
    website: null, gmaps: gm('御所東 うなしげ 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Unagi · east of the Imperial Palace] A calm machiya-style room where eel is cooked Kanto-style — steamed then grilled at the counter, soft and fluffy, with a restrained sauce. Unaju from about ¥5,200; the eel chawanmushi has fans. Each eel is steamed to order, so allow 30 minutes or phone ahead. Closed Sunday and Monday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed in the sources)'], origin: null,
      background: 'Opened 1 March 2022 (Tabelog). A September 2026 reviewer writes that the chef trained for many years at "Unakiku" before opening here.',
      philosophy: null, specialty: 'Kanto-style unaju; eel chawanmushi.',
      anecdotes: [
        { text: 'A sixth-time visitor in April 2025 singled out the eel chawanmushi — pricey on its own, but "that good".', source: R + 'B456396004/' },
        { text: 'An October 2026 regular found upbeat rock playing, lighter than usual, and trusted the 30-minute wait for eel steamed to order.', source: R + 'B517883606/' },
        { text: 'A July 2025 visitor who usually eats unaju in Nihonbashi called this a new favourite.', source: R + 'B510635063/' },
      ],
      japanese_sources_summary: '食べログ: 御所東 うなしげ、うなぎ、上京区新烏丸頭町180 グラスド御所、神宮丸太町駅から徒歩7分、火〜土 11:30〜15:00・17:30〜21:00、日月休み、予約はできれば Instagram で、カード・QR 可、禁煙、2022年3月1日オープン。口コミ (2024年12月〜2026年10月、英語): 関東風で蒸してから焼く、注文後に蒸すので約30分、鰻重5,200円、大 (1.5尾)、蒲焼4,000円、うざく1,400円、肝焼き800円、鰻入りの茶碗蒸し、煮こごり、町家風の店内の中央のカウンター、Unakiku で修業。',
      confidence: 'medium', sources: [TB, R + 'B456396004/', R + 'B499379258/', R + 'B508027632/', R + 'B508231349/', R + 'B509583284/', R + 'B510635063/', R + 'B511700710/', R + 'B517883606/', R + 'B518204550/', R + 'B536049866/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book via Instagram; allow 30 minutes for the eel.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区新烏丸頭町180 グラスド御所',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.019623, 135.768157); cross-checked: GSI 京都府京都市上京区新烏丸頭町180番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B509583284/', R + 'B499379258/'],
    price_note: 'No menu read; prices from 2024–25 reviews.', last_checked: TODAY, items: [
      it('鰻重', 'unaju', 'Eel on rice (one eel)', '¥5,200', 'Eel', 'ask', 'no', 'July and November 2025 reviews; large (1.5 eels) also offered.', 'unaju'),
      it('', '', 'Kabayaki (grilled eel)', '¥4,000', 'Eel', 'ask', 'no', 'December 2024 review.', 'kabayaki'),
      it('', '', 'Uzaku (eel and cucumber in vinegar)', '¥1,400', 'Small dishes', 'ask', 'no', 'July 2025 review.', 'uzaku'),
      it('', '', 'Grilled eel liver', '¥800', 'Small dishes', 'ask', 'no', 'July 2025 review.', 'kimoyaki'),
    ] }, {
    cuisine: '関東風の鰻。蒸してから焼き、柔らかくふっくら、たれは控えめで醤油寄り。町家風の店の中央のカウンターで焼く (2025〜26年の口コミ)・鰻重1尾5,200円 (2025年7月と11月)、大は1.5尾。蒲焼4,000円 (2024年12月)。2025年6月の口コミでは1尾4,800円から・うざく1,400円、肝焼き800円、鰻入りの茶碗蒸し、煮こごり (2025年の口コミ)',
    neighborhood: '御所の東 (御所東)。神宮丸太町駅から徒歩7分',
    gf_detail: '要確認。醤油のたれの鰻とご飯、鰻の茶碗蒸し、うざく。グルテンの情報はない (2024〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鰻の店 (食べログ)。',
    notes: '[鰻・御所の東] 町家風の落ち着いた店で、関東風に蒸してからカウンターで焼く、ふっくら柔らかな鰻とたれ控えめの味。鰻重は5,200円ほどから、鰻の茶碗蒸しにもファンが多い。注文ごとに蒸すので30分みるか、電話で先に注文を。日月休み。',
  });
}

save();
