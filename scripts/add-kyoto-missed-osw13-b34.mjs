// Kyoto "what did we miss" pass (kyoto-missed) — lane osw13 (Tabelog id mod 6 = 0), batch 34.
// Kyoto priority (Greg, 2026-11-05): 2 shops from `next core`, 2 from `next notable`, lane only; same-name count first.
//   core:    - おはぎの丹波屋 四条南座前店 26002344 skipped (chain: 15 shops on the official site)
//            - VINAINO kyoto 26038764 skipped (relocating on 9 November 2026; new address unknown)
//            - 白 HAKU 26030358 skipped (sub-brand of 和久傳, already in data; see reason)
//            + 我家我家 Gaya Gaya (one-man dining bar off Kawaramachi-Sanjo, open to 4:30 am)
//            + 吉左エ門、 Kichizaemon (Gion kappo of Wakasa seafood, à la carte; Kamo River view)
//   notable: - 京都祇園 天ぷら八坂圓堂 26000592 skipped (6 same-name 圓堂 shops in the crawls)
//            + Walden Woods Kyoto (white "forest" coffee stand in Gojo; Cafe WEST 100 2025)
//            + ＡＪＡＮＴＡ 寺町店 Ajanta Teramachi (Indian curry, a regular for about 20 years; Curry WEST 100 2020)
//   Passed over, not skipped, pending a group count (see report): 京韓堂 アジョシ祇園本店, 侘家古暦堂 祇園花見小路本店,
//   和牛とカニ 三条河原町店, ザ キッチン サルヴァトーレ クオモ 京都, 焼肉 弘商店 烏丸錦.
//   None of the four added is in data/kyoto.json: grep by name (我家我家/Gaya, 吉左エ門/Kichizaemon, Walden, AJANTA/
//   アジャンタ) and address (北車屋町267, 弁財天町15, 栄町508-1, 京極町515-4) found none. Same-name counts: 我家我家 1,
//   吉左エ門 1, Walden Woods 1 (crawls and official site); アジャンタ 2 in the Kyoto crawl (寺町店, 東鞍馬口), and the
//   Tokyo AJANTA says its only shop is in Kojimachi. Pins: GSI only (no OSM). No new pin within 3 m of another.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-34');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26002344', 'おはぎの丹波屋 四条南座前店 (Ohagi no Tanbaya, Shijo Minamiza-mae): a chain — the official site (ohaginotanbaya.co.jp) gives 15 shops as of June 2025 (令和7年6月現在 15店舗)');
skip('26038764', 'VINAINO kyoto: two October 2026 reviews say the restaurant relocates on 9 November 2026 to the Sanjo-Kawaramachi area; the new address is not yet known — re-check after the move');
skip('26030358', '白 HAKU (Gion ohagi shop): a sub-brand of 和久傳 (a September 2026 review calls it the confectionery shop of the ryotei Wakuden; 室町和久傳 is already in data as kyoto_muromachi_wakuden) with a second shop, 白 marunouchi, on its official site — skipped under the 2026-11-05 sub-brand ruling; flagged for Greg in case the parent is not "large"');
skip('26000592', '京都祇園 天ぷら八坂圓堂: six same-name 圓堂 tempura shops in the crawls (八坂圓堂, 岡ざき邸, 京都河原町ガーデン店, 大丸心斎橋店, グラングリーン大阪店, Endo Hankyu Prime) — a chain under the Samboa ruling');

// ================================================================ 我家我家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001576/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://diningbar-gayagaya.com/index.html';
  const H = day(['17:30', '28:30']);
  put({
    id: 'kyoto_gaya_gaya', name: '我家我家 (Gaya Gaya)', category: 'OMNI',
    lat: 35.007271, lng: 135.769981, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the menu mixes quiche, baguettes, pasta and ajillo with Japanese small plates (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information; dishes seen include yuba and sesame tofu but mostly meat and fish — horse sashimi, Ezo venison, duck confit, swordfish (2024–2026 reviews).',
    hours_raw: 'Tabelog: every day 17:30–4:30 (food last order 3:30, drinks 4:15); open through New Year’s Eve and Day, though 1–3 January it closes at 1:00 (last order 24:00). Reservations by phone 10:00–3:00; private hire for 11 or more (Tabelog). Courses with all-you-can-drink (2024–2025 reviews). 16 seats: 6 at the counter, 10 at tables; smoking allowed (Tabelog). Cards and QR payments, no e-money (Tabelog). 3F of the 佐野ビル, east off Kawaramachi south of Sanjo along the BAL north street; 4 min walk from Keihan Sanjo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi south of Sanjo — 4 min walk from Keihan Sanjo Stn',
    cuisine: 'A one-man dining bar with a long menu of small plates and cocktails, open until 4:30 am (Tabelog; reviews) · duck confit ¥1,100, quiche lorraine (prosciutto and camembert), swordfish in vermouth sauce (September 2026) · chicken-tender carpaccio with mentaiko sauce, warm yuba and sesame tofu, raw horse ruibe, roasted Ezo venison with stem wasabi, conger-eel ajillo, clam-chowder-style soup with bread, crab pasta (2024–2025 reviews) · courses with all-you-can-drink, including a 3-hour plan under ¥5,000 for a group (January 2024) · cocktails, sake, shochu, wine, Heartland draft',
    website: SITE, gmaps: gm('我家我家 京都 河原町'), menu_url: TB,
    notes: "[Dining bar · Kawaramachi-Sanjo, one man till dawn] A 16-seat dining bar up on a third floor off Kawaramachi, run single-handed by its owner and open until 4:30 every night: a long menu of small plates — duck confit (¥1,100), quiche, venison, horse sashimi, conger-eel ajillo — and well-made cocktails, with all-you-can-drink courses for groups. Reviewers praise the speed and value. Smoking allowed. 17:30–4:30 daily.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) who runs the bar alone, per 2024–2025 reviews'], origin: null,
      background: 'Reviewers from 2024 to 2025 describe a one-man operation — the owner cooks, mixes drinks and serves — with dishes arriving quickly despite a wide menu; an April 2025 diner found the owner a big anime fan who loves to chat, and an August 2025 diner discovered the master was a senior from the same university.',
      philosophy: null,
      specialty: 'Duck confit; quiche; cocktails.',
      anecdotes: [
        { text: 'A diner who comes back once a year for the ¥1,100 duck confit compares it to a ¥4,000 dish at a fine-dining restaurant — September 2026.', source: R + 'B535297029/' },
        { text: '"Still a one-man operation, with a wide menu and absolutely delicious!" — September 2024.', source: R + 'B488019276/' },
        { text: 'An August 2025 group found the master was a senior from their university and spent the course reminiscing.', source: R + 'B511667940/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・バー・ダイニングバー、中京区河原町通三条下ルBAL北通り東入ル北側北車屋町267 佐野ビル 3F、毎日17:30〜翌4:30 (L.O. 料理3:30・ドリンク4:15)、年末年始も営業 (1月1〜3日は24:00 L.O.、25:00閉店)、電話予約は10:00〜3:00、11名以上で貸切、16席 (カウンター6、テーブル10)、喫煙可、カード・QR 可、電子マネー不可、飲み放題・コースあり。口コミ (2024年1月〜2026年9月、英語): 鴨のコンフィ1,100円、キッシュ、カジキのベルモットソース、ささみのカルパッチョ明太子ソース、湯葉と胡麻豆腐、馬刺しのルイベ、蝦夷鹿のロースト、穴子のアヒージョ、蟹のパスタ、店主ひとりで営業。',
      confidence: 'medium', sources: [TB, SITE, R + 'B472060280/', R + 'B488019276/', R + 'B501830939/', R + 'B504655582/', R + 'B505631647/', R + 'B511667940/', R + 'B511796078/', R + 'B513128380/', R + 'B535297029/', R + 'B99428319/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A small late-night bar run by one person; book a course for groups; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条下ルBAL北通り東入ル北側北車屋町267 佐野ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.007271, 135.769981); cross-checked: GSI 京都府京都市中京区北車屋町267番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535297029/'],
    price_note: 'No published menu; the duck confit price is from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Duck confit', '¥1,100', 'Plates', 'ask', 'no', 'September 2026.', 'duck_confit'),
      it('', '', 'Quiche lorraine', '', 'Plates', 'no', 'no', '2025–2026.', 'quiche'),
    ] }, {
    cuisine: '店主ひとりの、品数の多い小皿とカクテルのダイニングバー、朝4時半まで (食べログ、口コミ)・鴨のコンフィ1,100円、生ハムとカマンベールのキッシュロレーヌ、カジキのベルモットソース (2026年9月)・ささみのカルパッチョ明太子ソース、温かい湯葉と胡麻豆腐、馬刺しのルイベ、蝦夷鹿のロースト茎わさび添え、穴子のアヒージョ、パン付きのクラムチャウダー風スープ、蟹のパスタ (2024〜2025年の口コミ)・飲み放題付きのコース、団体向けに3時間で5,000円以下の例も (2024年1月)・カクテル、日本酒、焼酎、ワイン、ハートランドの生',
    neighborhood: '三条の南の河原町。京阪三条駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報はない。キッシュ、バゲット、パスタ、アヒージョと和の小皿が混ざるメニュー (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。ヴィーガンの情報はない。湯葉や胡麻豆腐もあるが、馬刺し、蝦夷鹿、鴨のコンフィ、カジキなど肉と魚が中心 (2024〜2026年の口コミ)。',
    notes: '[ダイニングバー・河原町三条、朝まで店主ひとり] 河原町から入ったビルの3階の16席のダイニングバー。店主がひとりで切り盛りし、毎晩4時半まで営業。鴨のコンフィ (1,100円)、キッシュ、鹿、馬刺し、穴子のアヒージョなど品数の多い小皿と丁寧なカクテル、団体には飲み放題のコース。口コミは料理の早さと値段の手頃さをほめる。喫煙可。毎日17時半〜4時半。',
  });
}

// ================================================================ 吉左エ門、
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26021088/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gion-kichizaemon.com/';
  const H = day(['18:00', '22:30']);
  put({
    id: 'kyoto_kichizaemon_gion', name: '吉左エ門、 (Kichizaemon)', category: 'OMNI',
    lat: 35.005871, lng: 135.772651, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; each fish can be cooked four or five ways, so ask for grilled or raw preparations; dishes have included tempura, Hatcho miso and soba (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood and game kappo, with dashi in the soups — a January 2026 diner praised the rich bonito dashi of the kasujiru.',
    hours_raw: 'Tabelog: Monday–Saturday 18:00–22:30, closed Sunday; lunch by reservation at least a day ahead. Bookings online or by phone; same-day cancellations may incur a fee; seats-only bookings are cancelled 15 minutes after the time without notice (Tabelog). A 10% room charge for a private room used by four or fewer (Tabelog). 18 seats: 10 at the counter, 8 at tables; a tatami private room with a table for 4–8 looking onto the Kamo River (Tabelog; March 2024). Smoking allowed at dinner, not at lunch (Tabelog). Cards, no e-money or QR (Tabelog). 2F of スペース新橋, by the Shirakawa bridge in front of a Seven-Eleven; 4 min walk from Gion-Shijo Stn (Tabelog; March 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, by the Shirakawa near Yamato-oji — 4 min walk from Gion-Shijo Stn',
    cuisine: 'Casual kappo of seafood from Wakasa Bay — Wakasa guji, fugu, Echizen crab — plus wagyu, wild boar and duck, mostly à la carte, each fish cooked the way you choose (Tabelog; reviews) · September 2025: Echizen red crab with crab-miso sauce, Obama botan shrimp, shime saba and white whale sashimi · fugu milt and grilled fugu, bear meat, abalone, junsai and hamo hot pot, soba finished with karasumi (2023–2024) · kasujiru with rich bonito dashi, kabura with Hatcho miso, clam soup (January 2026) · a blackboard of daily specials · sake (including off-menu bottles), wine (Tabelog; 2026 reviews)',
    website: SITE, gmaps: gm('吉左エ門 祇園'), menu_url: TB,
    notes: "[Kappo · Gion Shirakawa, Wakasa fish your way] An 18-seat second-floor kappo by the Shirakawa, where the owner, from Wakasa, buys fish from Wakasa Bay and cooks each the way you choose from four or five methods: guji, fugu, Echizen crab, botan shrimp, with game such as boar and bear in season. Mostly à la carte from the menu and a blackboard, with a tatami room looking onto the Kamo River. About ¥10,000–15,000 a head at dinner (reviews). Smoking allowed at night. Mon–Sat from 18:00; lunch by booking.",
    chef_bio: { chef_name: null, roles: ['Owner-chef from Wakasa (named only in a machine-translated review)'], origin: 'Wakasa (Fukui)',
      background: 'Tabelog’s introduction: a casual kappo where the owner personally selects fresh seafood from Wakasa Bay, the owner’s hometown — Wakasa guji, fugu and Echizen crab — alongside wagyu, wild boar and duck, in a modern Japanese space with tables looking onto the Kamo River. A September 2025 regular of over ten years adds that the owner comes from a family that runs a restaurant in Wakasa and served for many years as second-in-command at a Kansai kaiseki restaurant in Osaka; that review names the owner, but only in English translation, so the name is not used here. A September 2026 diner found three people at work: the owner, a young assistant and a part-timer.',
      philosophy: null,
      specialty: 'Wakasa seafood à la carte; fugu.',
      anecdotes: [
        { text: 'Asked "What would you like for your meal?", a regular of ten years answers "a little bit of everything that’s delicious" and has dishes brought at a comfortable pace — September 2025.', source: R + 'B40131091/' },
        { text: '"They offer 4 to 5 cooking methods for each ingredient, allowing you to choose how you’d like it prepared." — July 2023.', source: R + 'B468030156/' },
        { text: 'A March 2024 diner liked being able to order à la carte and smoke at the table.', source: R + 'B484183910/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・ふぐ・海鮮、東山区弁財天町15 スペース新橋 2F、月〜土 18:00〜22:30、日曜休み、ランチは前日までの予約制、予約可 (当日キャンセルは料金あり、席のみの予約は15分の遅刻でキャンセル)、4名以下で個室利用の場合は個室料10%、18席 (カウンター10、テーブル8)、個室 (畳にテーブル、4〜8名)、喫煙可 (ランチのみ禁煙)、カード可、電子マネー・QR 不可、若狭湾の魚介 (若狭ぐじ、ふぐ、越前がに)、和牛・猪・鴨、鴨川の見えるテーブル席。口コミ (2023年7月〜2026年9月、英語): ほぼアラカルト、食材ごとに4〜5通りの調理法、越前の紅ずわい蟹、小浜のぼたん海老、しめ鯖、鯨、白子、熊肉、粕汁、八丁味噌のかぶら、黒板の日替わり、店主と若い助手とアルバイトの3人。',
      confidence: 'medium', sources: [TB, SITE, R + 'B40131091/', R + 'B440383704/', R + 'B468030156/', R + 'B474419502/', R + 'B482344002/', R + 'B484183910/', R + 'B510130527/', R + 'B520152625/', R + 'B532581827/', R + 'B536367699/'] },
    cultural_comfort: { level: 'japanese', note: 'Mostly à la carte from a Japanese menu and blackboard, with the chef’s suggestions; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区弁財天町15 スペース新橋 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (official information); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005871, 135.772651); cross-checked: GSI 京都府京都市東山区弁財天町15番地 (lot) 6m; kyoto_cafe_dong_sfera (弁財天町17) is 14 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published prices; Tabelog gives a dinner budget of ¥10,000–14,999.', last_checked: TODAY, items: [
      it('', '', 'À la carte Wakasa seafood (cooking method of your choice)', '', 'À la carte', 'ask', 'no', '', 'wakasa_seafood'),
    ] }, {
    cuisine: '若狭湾の魚介 (若狭ぐじ、ふぐ、越前がに) と和牛・猪・鴨の気軽な割烹。ほぼアラカルトで、魚は好みの調理法で (食べログ、口コミ)・2025年9月: 越前の紅ずわい蟹のかに味噌ソース、小浜のぼたん海老、しめ鯖、鯨のお造り・ふぐの白子と焼きふぐ、熊肉、鮑、じゅんさいと鱧の鍋、からすみをのせたそば (2023〜2024年)・鰹だしの濃い粕汁、八丁味噌のかぶら、蛤のお吸い物 (2026年1月)・黒板の日替わり・日本酒 (メニューにない酒も)、ワイン (食べログ、2026年の口コミ)',
    neighborhood: '祇園、大和大路近くの白川沿い。祇園四条駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報はない。魚は4〜5通りの調理法から選べるので焼きや生を頼むとよい。天ぷら、八丁味噌、そばの料理もある (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚介とジビエの割烹で、汁物はだし。2026年1月の客は粕汁の濃い鰹だしをほめている。',
    notes: '[割烹・祇園白川、若狭の魚を好みの調理で] 白川沿いのビルの2階の18席の割烹。若狭出身の店主が若狭湾の魚を仕入れ、4〜5通りの調理法から好みで仕上げる。ぐじ、ふぐ、越前がに、ぼたん海老、季節には猪や熊も。メニューと黒板からほぼアラカルトで、鴨川を望む座敷もある。夜は1人10,000〜15,000円ほど (口コミ)。夜は喫煙可。月〜土の18時から、昼は予約制。',
  });
}

// ================================================================ Walden Woods Kyoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26030010/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.walden-woods.com/';
  const H = day(['08:00', '18:00']);
  put({
    id: 'kyoto_walden_woods', name: 'Walden Woods Kyoto (ウォールデン ウッズ キョウト)', category: 'OMNI',
    lat: 34.993355, lng: 135.76317, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; coffee and tea drinks with croissants, cream puffs, pudding and ice cream on a cookie base (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and Americano suit; lattes, ice cream, pudding and croissants use dairy, and plant milk is not mentioned (2026 reviews).',
    hours_raw: 'Tabelog: every day 8:00–18:00; hours may change; an August 2026 review gives 8:30–18:00. No reservations. Order at the first-floor counter; the second floor is an all-white room with tiered benches and no tables or chairs, round a white tree (2026 reviews; Tabelog). Takeaway; children welcome; non-smoking (Tabelog). Cards including UnionPay, no e-money or QR (Tabelog). No sign outside — a white building in a residential street (August 2026); 15 min walk from Gojo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Residential Shimogyo south-east of Gojo-Karasuma — 15 min walk from Gojo Stn',
    cuisine: 'Coffee and chai stand in an all-white building themed on a "white forest" (2026 reviews; official site) · light-roast coffee, Americano ¥550, cappuccino, latte, chai latte ¥700, matcha latte ¥700 · morning combo of mini croissant, mandarin juice and cappuccino ¥1,000 (August 2026) · Walden pudding ¥400, cream puff ¥300, ice cream ¥500 (matcha, strawberry) (2026 reviews)',
    website: SITE, gmaps: gm('Walden Woods Kyoto'), menu_url: TB,
    notes: "[Coffee stand · Gojo, a white forest] A coffee and chai stand in an all-white, unsigned building on a residential street: order on the ground floor, then sit on the tiered white benches upstairs, round a single bare white tree, with no tables at all. Light-roast coffee and lattes (¥550–700), a ¥1,000 morning combo, pudding and cream puffs. Cafe WEST Tabelog 100 2025. Reviews are mixed on the cappuccino and matcha ice cream, warm about the space. Daily 8:00–18:00.",
    chef_bio: { chef_name: null, roles: ['Coffee stand (operator not named on the sources read)'], origin: null,
      background: 'Reviewers in 2026 describe a white building with a first-floor counter round the kitchen and a second-floor room of tiered benches round a white tree, on the concept of living simply in harmony with nature after Walden (October 2026); the official site is titled "Coffee & Chai / Walden Woods Kyoto". Tabelog Cafe WEST "Tabelog 100" 2025.',
      philosophy: 'Per an October 2026 review: "living simply in harmony with nature."',
      specialty: 'Light-roast coffee; chai latte.',
      anecdotes: [
        { text: '"I stood in front of the entrance for quite a while, comparing it to the map and wondering, \'Is this really the right place?\'" — August 2026.', source: R + 'B535043655/' },
        { text: 'An August 2026 morning visitor found the croissant good but the cappuccino disappointing.', source: R + 'B534695764/' },
      ],
      japanese_sources_summary: '公式サイト (walden-woods.com): Coffee & Chai / Walden Woods Kyoto。食べログ: カフェ、下京区栄町508-1、毎日8:00〜18:00、予約不可、2階は立ち飲みかベンチ、テイクアウト、子供可、禁煙、カード可 (銀聯も)、電子マネー・QR 不可、カフェ WEST 百名店 2025。口コミ (2026年8月〜10月、英語): 白い森がテーマ、2階は白い木のまわりの段々のベンチ、看板がない、浅煎りのコーヒー、アメリカーノ550円、チャイラテ・抹茶ラテ700円、モーニングコンボ1,000円、プリン400円、シュークリーム300円、アイス500円。',
      confidence: 'medium', sources: [TB, SITE, R + 'B534137139/', R + 'B534200775/', R + 'B534695764/', R + 'B534760563/', R + 'B535043655/', R + 'B535907084/', R + 'B537019015/', R + 'B537968231/', R + 'B538046910/', R + 'B538116193/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter downstairs and take it up to the benches; no bookings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区栄町508-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026; Cafe WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (34.993355, 135.763170); cross-checked: GSI 京都府京都市下京区栄町508番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538046910/', R + 'B537968231/', R + 'B534695764/'],
    price_note: 'No published menu; prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Americano', '¥550', 'Coffee', '', '', 'October 2026.', 'americano'),
      it('', '', 'Chai latte', '¥700', 'Drinks', '', '', 'August 2026.', 'chai_latte'),
      it('', '', 'Morning combo (mini croissant, mandarin juice, cappuccino)', '¥1,000', 'Morning', 'no', 'no', 'August 2026.', 'morning_combo'),
      it('', '', 'Walden pudding', '¥400', 'Sweets', 'ask', 'no', 'October 2026.', 'walden_pudding'),
    ] }, {
    cuisine: '「白い森」がテーマの真っ白な建物のコーヒーとチャイのスタンド (2026年の口コミ、公式サイト)・浅煎りのコーヒー、アメリカーノ550円、カプチーノ、ラテ、チャイラテ700円、抹茶ラテ700円・ミニクロワッサン、みかんジュース、カプチーノのモーニングコンボ1,000円 (2026年8月)・プリン400円、シュークリーム300円、アイス500円 (抹茶、いちご) (2026年の口コミ)',
    neighborhood: '五条烏丸の南東の住宅街。五条駅から徒歩15分',
    gf_detail: '要確認。グルテンの情報はない。コーヒーやお茶のドリンクに、クロワッサン、シュークリーム、プリン、クッキー生地のアイス (2026年の口コミ)。',
    vegan_detail: '要確認。ブラックのコーヒーやアメリカーノは合うが、ラテ、アイス、プリン、クロワッサンは乳製品を使い、植物性ミルクの記載はない (2026年の口コミ)。',
    notes: '[コーヒースタンド・五条、白い森] 住宅街にある、看板のない真っ白な建物のコーヒーとチャイのスタンド。1階で注文し、2階の白い段々のベンチに座る。部屋の真ん中には白い木が1本、テーブルはない。浅煎りのコーヒーやラテ (550〜700円)、1,000円のモーニングコンボ、プリンやシュークリーム。カフェ WEST 百名店 2025。カプチーノや抹茶アイスの評価は分かれるが、空間は好評。毎日8時〜18時。',
  });
}

// ================================================================ ＡＪＡＮＴＡ 寺町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000970/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_ajanta_teramachi', name: 'ＡＪＡＮＴＡ 寺町店 (Ajanta Teramachi)', category: 'OMNI',
    lat: 34.999762, lng: 135.767002, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; lunch sets come with naan (refills free) or rice, so rice is the choice to ask about, but how the curries are thickened is not described (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and there are chickpea, lentil, okra, eggplant and spinach-potato curries, but butter, cream and paneer appear in others, and the use of ghee is not stated (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Tabelog: every day 11:00–15:00 and 17:00–22:00. Bookings taken; private hire for 20 to over 50 (Tabelog). Lunch sets with salad, a spiced carrot-and-tomato soup, a drink and free naan or rice refills — ¥1,100 (August 2025), special lunch ¥1,450 (March 2026), C lunch about ¥1,000 including a glass of wine (February 2026); about 25 curries to choose from at lunch (July 2026). 63 seats over two floors (28 and 35); non-smoking; children welcome; takeaway (Tabelog). Cards and PayPay, no e-money (Tabelog). On Teramachi south of Takatsuji, 1F of the 山本ビル; 5 min walk south from Hankyu Kawaramachi’s Fujii Daimaru exit (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi south of Takatsuji — 5 min walk from Hankyu Kawaramachi Stn',
    cuisine: 'Indian curry house with a chef who spent over 15 years at a five-star hotel in India, spices imported from India (Tabelog) · lunch sets from about ¥1,000–1,450 with salad, a spiced carrot-and-tomato soup, a drink (mango lassi, even red wine) and free naan or rice refills; cheese naan +¥250, mutton curry +¥200 (2025–2026 reviews) · about 25 curries: butter chicken, spinach and mutton, keema, chickpea, lentil, egg masala, prawn, okra, eggplant and vegetable, spinach-potato with prawns · tandoori chicken, seekh kebab, chicken biryani (large; half size suggested) · sake, shochu, wine (Tabelog)',
    website: TB, gmaps: gm('アジャンタ 寺町店 京都'), menu_url: TB,
    notes: "[Indian curry · Teramachi-Takatsuji, a long-time naan house] A two-floor, 63-seat Indian curry house on Teramachi that one regular has visited for about 20 years: lunch sets around ¥1,000–1,450 with spiced carrot soup, salad, a drink and free naan refills, a choice of some 25 curries (butter chicken is the favourite), tandoori chicken and big biryani. Curry WEST Tabelog 100 2020. Vegetarian curries available. Open daily 11:00–15:00 and 17:00–22:00.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed) with over 15 years at a five-star hotel in India, per Tabelog'], origin: 'India (training)',
      background: 'Tabelog’s introduction: authentic Indian food by a chef with more than 15 years at a five-star hotel in India, with herbs, spices and other ingredients imported directly from India, and over 60 seats on two floors. A March 2026 regular has come for about 20 years, when this and Ashoka were among the few places for authentic naan and curry in Kyoto. A February 2026 diner found the staff answered in broken Japanese, attentively. Tabelog Curry WEST "Tabelog 100" 2020.',
      philosophy: null,
      specialty: 'Butter chicken curry; free naan refills.',
      anecdotes: [
        { text: '"If you tend to sweat while eating, a towel is a must!" — June 2026.', source: R + 'B530154845/' },
        { text: 'A September 2025 diner found the okra curry bitter and the chicken biryani far too big to finish, and suggests a half size.', source: R + 'B513032661/' },
        { text: '"I was thrilled to see that there were 25 different types of curry to choose from for lunch." — July 2026.', source: R + 'B531890187/' },
      ],
      japanese_sources_summary: '食べログ: インド料理・インドカレー、下京区寺町通高辻下ル京極町515-4 山本ビル 1F、毎日11:00〜15:00・17:00〜22:00、予約可、63席 (1階28、2階35)、貸切20〜50名以上、禁煙、子供可、テイクアウト、カード・PayPay 可、電子マネー不可、ベジタリアンメニューあり、インドの五つ星ホテルで15年以上の経験のシェフ、ハーブやスパイスをインドから直輸入、カレー WEST 百名店 2020。口コミ (2025年3月〜2026年7月、英語): ランチ1,100円・スペシャルランチ1,450円・C ランチ約1,000円 (グラスワイン付き)、ナンのおかわり無料、にんじんとトマトのスパイススープ、カレー25種、バターチキン、ほうれん草とマトン、キーマ、ひよこ豆、レンズ豆、タンドリーチキン、ビリヤニ、20年来の客。',
      confidence: 'medium', sources: [TB, R + 'B490312646/', R + 'B512482087/', R + 'B513032661/', R + 'B523267908/', R + 'B524319980/', R + 'B525188670/', R + 'B525244190/', R + 'B530154845/', R + 'B531890187/', R + 'B534913933/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick a curry and naan or rice from the lunch sets; staff speak some Japanese (February 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区寺町通高辻下ル京極町515-4 山本ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.999762, 135.767002); cross-checked: GSI 京都府京都市下京区京極町515番地 (lot) 15m; mp_daruma_to_kingyo is 6 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512482087/', R + 'B524319980/'],
    price_note: 'No published menu; prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set (one curry, naan or rice, salad, soup, drink)', '¥1,100', 'Lunch', 'ask', 'ask', 'August 2025.', 'lunch_set'),
      it('', '', 'Special lunch', '¥1,450', 'Lunch', 'ask', 'ask', 'March 2026; cheese naan +¥250.', 'special_lunch'),
      it('', '', 'Butter chicken curry', '', 'Curry', 'ask', 'no', '', 'butter_chicken'),
    ] }, {
    cuisine: 'インドの五つ星ホテルで15年以上の経験を持つシェフのインドカレー、スパイスはインドから直輸入 (食べログ)・ランチのセットは1,000〜1,450円ほどで、サラダ、スパイスのきいたにんじんとトマトのスープ、ドリンク (マンゴーラッシー、赤ワインも)、ナンかライスのおかわり無料、チーズナン+250円、マトン+200円 (2025〜2026年の口コミ)・カレーは約25種: バターチキン、ほうれん草とマトン、キーマ、ひよこ豆、レンズ豆、エッグマサラ、海老、オクラ、なすと野菜、ほうれん草とじゃがいもと海老・タンドリーチキン、シークカバブ、チキンビリヤニ (大盛りなのでハーフがおすすめ)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '高辻の南の寺町通。阪急京都河原町駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報はない。ランチはナン (おかわり無料) かライスなのでライスを頼めるが、カレーのとろみの付け方は書かれていない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、ひよこ豆、レンズ豆、オクラ、なす、ほうれん草とじゃがいものカレーもあるが、ほかはバター、クリーム、パニールを使い、ギーの使用は書かれていない (食べログ、2025〜2026年の口コミ)。',
    notes: '[インドカレー・寺町高辻、昔からのナンの店] 寺町通の2フロア63席のインドカレーの店。20年ほど通う客もいる。ランチは1,000〜1,450円ほどで、スパイスのにんじんスープ、サラダ、ドリンク、ナンのおかわり無料、カレーは25種ほどから (人気はバターチキン)、タンドリーチキン、大盛りのビリヤニ。カレー WEST 百名店 2020。野菜のカレーもある。毎日11時〜15時、17時〜22時。',
  });
}

save();
