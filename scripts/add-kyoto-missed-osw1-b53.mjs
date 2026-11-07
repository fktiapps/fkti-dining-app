// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 53.
//   + ののの 四条河原町店 Nonono, Shijo-Kawaramachi (monjayaki and okonomiyaki teppan; operator 株式会社治元, size unknown)
//   + 京都焼肉 西木屋町 肉しん Nikushin (A5 Wagyu yakiniku on the Takase River)
//   + ココロ Kokoro (big standing bar off Kiyamachi; monthly-changing small plates)
//   + 旬野菜×京居酒屋 ひとくち Hitokuchi (Kyoto-vegetable izakaya for groups, all-you-can-drink)
//   - アヴァンセ 高島屋 京都店, うなぎの中庄 京都四条河原町店, きやまち道場 京都河原町本店: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26013698 (skipped), 26036156,
//   26035568, 26044730 (skipped), 26039792 (skipped), 26027978, 26036216. Core and notable are exhausted in this lane.
//   None of the four drafted is in data/kyoto.json by name (ののの/Nonono, 肉しん/Nikushin, ココロ/Kokoro — COCOLO KYOTO in
//   data is a granola café at Karasuma-Oike, ひとくち/Hitokuchi) or address (米屋町388, 船頭町237-5, 真町455-5, 真町97).
//   Same-name count (same brand or operator only): ののの — one in our crawl; Tabelog's name search shows other shops
//   called Nonono with no link found; invoice holder 株式会社治元 (Uji), size not established — drafted and flagged per the
//   coordinator (2026-11-06). 肉しん, ひとくち — one shop each. ココロ — one shop; a November 2026 review calls it a sister
//   of “Momiji”, not otherwise sourced — flagged. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: none listed for any of the four.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-53');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26013698', 'アヴァンセ 高島屋 京都店: chain — Tabelog’s name search lists Avance fried-food counters at JR Nagoya Takashimaya, Takashimaya Osaka (AVANCER), Takashimaya Kyoto and others, and a June 2022 review calls it a Miyazaki Foods brand sold in department stores nationwide; only one review since 2025');
skip('26044730', 'うなぎの中庄 京都四条河原町店: chain — Tabelog’s name search lists Unagi no Nakasho shops at Toranomon Hills, LINKS UMEDA, Shinsaibashi, Namba, AEON Mall Hakusan, Amerikamura and Kyoto Shijo-Kawaramachi');
skip('26039792', 'きやまち道場 京都河原町本店: large parent — the invoice holder (T6010401167646) is 株式会社MS Group (Osaka), whose press releases (prtimes.jp 000000028.000172465) describe one brand at 21 shops and others at 10–12, in Osaka, Nagoya, Kobe and Tokyo — a national multi-brand group');

// ================================================================ ののの 四条河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26036156/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.monjya-nonono.com/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_nonono_shijo_kawaramachi', name: 'ののの 四条河原町店 (Nonono, Shijo-Kawaramachi)', category: 'OMNI',
    lat: 35.004235, lng: 135.76965, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: monjayaki, okonomiyaki, negiyaki and yakisoba are wheat-flour batters and noodles (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the monjayaki is made with dashi, and the fillings are pork, seafood, cheese and egg (Tabelog; reviews).',
    hours_raw: '17:00–23:00 (L.O. food 22:15, drinks 30 min before closing); closed Thursday (Tabelog). Reservations accepted (Tabelog). Cards including UnionPay, and e-money (Tabelog). 60 seats, counter and tables (Tabelog; October 2025). Non-smoking (Tabelog). Staff will cook the monjayaki for you, or you can do it yourself (2024–2025). Child cutlery and plates on request (June 2025). Takeaway okonomiyaki (March 2025). Down an alley a minute from exit 3 of Hankyu Kawaramachi Station (official site; Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi, north of Shijo — 1 min from Hankyu Kawaramachi exit 3',
    cuisine: 'Monjayaki, okonomiyaki and teppanyaki (Tabelog) · dashi-rich monjayaki; the Nonono Deluxe with pork, shrimp, squid, soba and cheese (Tabelog) · monjayaki such as kimchi-mochi-pork-cheese, mentaiko-mochi-cheese, Baby Star-egg-mentaiko ¥1,716 (2024–2025) · okonomiyaki, special okonomiyaki ¥2,178; beef-tendon negiyaki; tonpei-yaki; modern-yaki (2024–2026) · sauce or salt seafood yakisoba ¥1,738; Wagyu steak ¥3,520; Kujo-onion yaki manju ¥638 (August 2024) · jumbo gyoza, grilled squid, oysters with ponzu (2023–2025)',
    website: SITE, gmaps: gm('ののの 四条河原町店'), menu_url: SITE,
    notes: '[Monjayaki and okonomiyaki · Kawaramachi, staff cook for you] A big, casual teppan restaurant down an alley by Hankyu Kawaramachi: Tokyo-style monjayaki made with dashi — the staff will cook it if you are new to it — plus okonomiyaki, negiyaki, yakisoba and Wagyu steak. Friendly to families early in the evening; closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s invoice number T4130001032505 is registered to 株式会社治元 of Uji (NTA register). How many restaurants the company runs could not be established from a page opened. Reviewers praise friendly staff who cook at the table and chat (May and August 2025).',
      philosophy: null, specialty: 'Monjayaki with dashi.',
      anecdotes: [
        { text: 'An October 2025 first-timer at monjayaki was reassured when the staff cooked it at the table.', source: R + 'B516254805/' },
        { text: 'A March 2025 group came after a show at Gion Kagetsu and took an okonomiyaki home as well.', source: R + 'B504038169/' },
      ],
      japanese_sources_summary: '公式サイト: ののの、阪急河原町駅3番出口から徒歩1分。食べログ: もんじゃ焼き・お好み焼き・居酒屋、中京区河原町通四条上ル米屋町388 1F、17:00〜23:00 (L.O.料理22:15)、木曜定休、予約可、カード・電子マネー可、60席、禁煙、出汁のきいたもんじゃ、ののの デラックス (豚、エビ、イカ、そば、チーズ)、お好み焼き、ねぎ焼き、鉄板焼き、適格請求書 T4130001032505 (株式会社治元)。口コミ (2023〜2026年、英語): ベビースター・卵・明太子のもんじゃ1,716円、海鮮塩焼きそば1,738円、特製お好み焼き2,178円、和牛ステーキ3,520円、九条ねぎの焼きまんじゅう638円、キムチ・もち・豚・チーズのもんじゃ、牛すじのねぎ焼き、とん平焼き、モダン焼き、店員が焼いてくれる、子ども用の食器、お好み焼きの持ち帰り。',
      confidence: 'medium', sources: [SITE, TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=4130001032505', R + 'B475737617/', R + 'B486715018/', R + 'B491098136/', R + 'B504038169/', R + 'B506254028/', R + 'B508618767/', R + 'B511182974/', R + 'B516254805/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual teppan; staff can cook for you.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通四条上ル米屋町388 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004235, 135.76965); cross-checked: GSI 京都府京都市中京区米屋町388番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B491098136/'],
    price_note: 'Prices from an August 2024 review; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Monjayaki with Baby Star, egg and mentaiko', '¥1,716', 'Monjayaki', 'no', 'no', 'August 2024.', 'monja'),
      it('', '', 'Special okonomiyaki', '¥2,178', 'Okonomiyaki', 'no', 'no', 'August 2024.', 'okonomiyaki'),
      it('', '', 'Seafood salt yakisoba', '¥1,738', 'Teppan', 'no', 'no', 'August 2024.', 'yakisoba'),
      it('', '', 'Wagyu steak', '¥3,520', 'Teppan', 'ask', 'no', 'August 2024.', 'steak'),
    ] }, {
    cuisine: 'もんじゃ焼き、お好み焼き、鉄板焼き (食べログ)・出汁のきいたもんじゃ。豚、エビ、イカ、そば、チーズの「ののの デラックス」(食べログ)・キムチ・もち・豚・チーズ、明太子・もち・チーズ、ベビースター・卵・明太子1,716円などのもんじゃ (2024〜2025年)・お好み焼き、特製お好み焼き2,178円。牛すじのねぎ焼き、とん平焼き、モダン焼き (2024〜2026年)・ソースや塩の海鮮焼きそば1,738円。和牛ステーキ3,520円。九条ねぎの焼きまんじゅう638円 (2024年8月)・ジャンボ餃子、イカ焼き、ポン酢の牡蠣 (2023〜2025年)',
    neighborhood: '河原町、四条の北。阪急河原町3番出口から徒歩1分',
    gf_detail: 'グルテンフリーではない。もんじゃ、お好み焼き、ねぎ焼き、焼きそばは小麦粉の生地や麺 (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガンではない。もんじゃは出汁で作り、具は豚、魚介、チーズ、卵 (食べログ、口コミ)。',
    notes: '[もんじゃとお好み焼き・河原町、店員が焼いてくれる] 阪急河原町駅そばの路地にある大きく気軽な鉄板の店。出汁で作る東京風のもんじゃは、慣れなければ店員が焼いてくれる。お好み焼き、ねぎ焼き、焼きそば、和牛ステーキも。早い時間は家族連れにも。木曜定休。',
  });
}

// ================================================================ 京都焼肉 西木屋町 肉しん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035568/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '22:00']); const WE = day(['12:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_nikushin_nishikiyamachi', name: '京都焼肉 西木屋町 肉しん (Nikushin)', category: 'OMNI',
    lat: 35.003276, lng: 135.770358, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakiniku with a house dipping sauce, salted cuts, kimchi, yukhoe-style rare steak, lemon cold noodles and a Wagyu-and-egg rice pot; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Wagyu yakiniku restaurant (Tabelog; reviews).',
    hours_raw: 'Monday–Friday 17:00–22:00 (L.O. 21:30); Saturday, Sunday and holidays 12:00–15:00 (L.O. 14:30) and 17:00–22:00 (L.O. 21:30) (Tabelog). Reservations accepted; no seat requests; 90-minute limit; a booking is released if there is no contact 15 minutes after the time; groups of 10 or more by phone (Tabelog). One drink per person (October 2026). Cards, IC cards, e-money, PayPay, Rakuten Pay and au PAY (Tabelog). 23 seats: a counter and tables looking onto the Takase River (Tabelog; July 2026). One minute from Hankyu Kawaramachi Station, on Nishikiyamachi (Tabelog). Opened 20 March 2021 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishikiyamachi on the Takase River — 1 min from Hankyu Kawaramachi',
    cuisine: 'A5 Wagyu yakiniku with a Kyoto-style light dipping sauce, by the Takase River (Tabelog) · signature thick-cut negi-tan (Tabelog; 2026) · à la carte, e.g. special tongue ¥1,699, Kobe beef kalbi ¥1,299, special harami ¥1,599, lean yaki-shabu ¥899, rare steak yukhoe style ¥1,199, fresh kimchi ¥599, wakame and egg soup ¥599, kamadaki rice ¥699 (May–July 2026); premium tongue ¥1,499, salted horumon ¥899, shabu-roast ¥1,499, thick-cut liver ¥1,299 (October 2026) · courses with kimchi, senmai, yukhoe-style steak, a seven-cut platter and a kamadaki Wagyu TKG rice pot with several egg yolks (2026) · lemon cold noodles; yuzu sorbet (2026) · draft beer ¥599 (2026)',
    website: null, gmaps: gm('京都焼肉 西木屋町 肉しん'), menu_url: TB + 'dtlmenu/',
    notes: '[Yakiniku · Nishikiyamachi on the Takase River, thick-cut negi-tan] A small, modern yakiniku room with tables looking onto the Takase River, a minute from Hankyu Kawaramachi: hand-cut A5 Wagyu — thick negi-tan, Kobe kalbi, harami — with a light dipping sauce, and courses that end with a Wagyu-and-egg rice pot. 90-minute seating; weekend lunch.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes carefully selected A5 Wagyu and a signature thick-cut negi-tan. Reviewers mention attentive staff (July 2026) and a friendly owner (July 2026).',
      philosophy: null, specialty: 'Thick-cut negi-tan; Wagyu TKG rice pot.',
      anecdotes: [
        { text: 'A July 2026 regular brought friends back for dinner after a first visit at lunch, insisting on the special tongue first.', source: R + 'B527503909/' },
        { text: 'An October 2026 pair dined with the windows open to the river breeze on an autumn evening.', source: R + 'B537989393/' },
      ],
      japanese_sources_summary: '食べログ: 京都焼肉 西木屋町 肉しん、焼肉・ステーキ・居酒屋、下京区西木屋町通四条下ル船頭町237-5、阪急京都河原町駅から徒歩1分、月〜金 17:00〜22:00、土日祝 12:00〜15:00・17:00〜22:00、予約可 (席の指定不可、90分制)、カード・電子マネー・QR決済可、23席、2021年3月20日オープン、A5和牛、名物の厚切りねぎタン、高瀬川沿い。口コミ (2026年、英語): 特選タン1,699円、神戸牛カルビ1,299円、特選ハラミ1,599円、赤身の焼きしゃぶ899円、レアステーキのユッケ風1,199円、生キムチ599円、わかめと卵のスープ599円、釜炊きご飯699円、ホルモン塩899円、厚切りレバー1,299円、釜炊き和牛のTKG、レモン冷麺、柚子のシャーベット、1人1ドリンク。',
      confidence: 'medium', sources: [TB, R + 'B527503909/', R + 'B530914817/', R + 'B531045454/', R + 'B531277803/', R + 'B531365640/', R + 'B532241387/', R + 'B532729531/', R + 'B532811571/', R + 'B534002754/', R + 'B537989393/'] },
    cultural_comfort: { level: 'konnichiwa', note: '90-minute seating; one drink per person; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西木屋町通四条下ル船頭町237-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003276, 135.770358); cross-checked: GSI 京都府京都市下京区船頭町237番地 (lot) 85m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527503909/', R + 'B537989393/'],
    price_note: 'À la carte prices from 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Special tongue', '¥1,699', 'Yakiniku', 'ask', 'no', 'July 2026.', 'tongue'),
      it('', '', 'Kobe beef kalbi', '¥1,299', 'Yakiniku', 'ask', 'no', 'July 2026.', 'kalbi'),
      it('', '', 'Special harami', '¥1,599', 'Yakiniku', 'ask', 'no', 'July 2026.', 'harami'),
      it('', '', 'Fresh kimchi', '¥599', 'Sides', 'ask', 'ask', '2026.', 'kimchi'),
    ] }, {
    cuisine: '高瀬川沿いで、京都風のあっさりしたたれで食べるA5和牛の焼肉 (食べログ)・名物の厚切りねぎタン (食べログ、2026年)・一品: 特選タン1,699円、神戸牛カルビ1,299円、特選ハラミ1,599円、赤身の焼きしゃぶ899円、レアステーキのユッケ風1,199円、生キムチ599円、わかめと卵のスープ599円、釜炊きご飯699円 (2026年5〜7月)。上タン1,499円、ホルモン塩899円、しゃぶロース1,499円、厚切りレバー1,299円 (2026年10月)・キムチ、センマイ、ユッケ風ステーキ、7種の盛り合わせ、何種かの卵黄をのせた釜炊き和牛のTKGのコース (2026年)・レモン冷麺、柚子のシャーベット (2026年)・生ビール599円 (2026年)',
    neighborhood: '高瀬川沿いの西木屋町。阪急河原町から徒歩1分',
    gf_detail: '要確認。たれの焼肉、塩の部位、キムチ、ユッケ風のレアステーキ、レモン冷麺、和牛と卵の釜炊きご飯。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。和牛の焼肉の店 (食べログ、口コミ)。',
    notes: '[焼肉・高瀬川沿いの西木屋町、厚切りねぎタン] 阪急河原町から1分、高瀬川を眺めるテーブルのある小さくモダンな焼肉の店。手切りのA5和牛 (厚切りねぎタン、神戸牛カルビ、ハラミ) をあっさりしたたれで。コースの締めは和牛と卵の釜炊きご飯。90分制、週末は昼も。',
  });
}

// ================================================================ ココロ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26027978/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_kokoro_standing_bar', name: 'ココロ (Kokoro)', category: 'OMNI',
    lat: 35.004351, lng: 135.770104, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Small plates that change monthly — sashimi, tamagoyaki, teppan egg, stuffed peppers with meat miso, a teppan hamburg, fried oysters, conger tempura; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-and-meat standing bar — sashimi, chicken, hamburg, oysters (2026 reviews).',
    hours_raw: 'Monday 15:00–23:00; Tuesday–Saturday 15:00–23:30; Sunday 13:00–22:00; hours may change (Tabelog). No reservations (Tabelog). Cash or PayPay; no cards (Tabelog). A standing bar for about 40, with a large L-shaped counter and round tables (Tabelog; September 2026). Smoking outside the entrance (Tabelog). Down an alley across the Takase River from Kiyamachi, about 150 m from Kyoto-Kawaramachi Station (Tabelog; 2026).',
    hours: { 0: day(['15:00', '23:00']), 1: day(['15:00', '23:30']), 2: day(['15:00', '23:30']), 3: day(['15:00', '23:30']), 4: day(['15:00', '23:30']), 5: day(['15:00', '23:30']), 6: day(['13:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Alley between Kawaramachi and Kiyamachi, north of Shijo',
    cuisine: 'A standing bar known for food above the usual, with a menu that changes monthly and more than 50 items (2026 reviews) · draft beer ¥480 (September and November 2026); medium bottle ¥580 (October 2026); a wide sake list, mostly over ¥1,000 (October 2026) · fresh peppers with meat miso ¥420; chicken liver sashimi ¥680 (September 2026) · teppan hamburg with the day’s sauce ¥580 (October 2026) · sashimi; tamagoyaki; teppan egg with cheese and mentaiko that you mix yourself; fried oysters with house tartar; conger tempura in summer (2026)',
    website: null, gmaps: gm('ココロ 立ち飲み 四条河原町'), menu_url: null,
    notes: '[Standing bar · Kawaramachi back alley, monthly small plates] A roomy, neon-lit standing bar down an alley off Kiyamachi, open from mid-afternoon: ¥480 draft beer and a monthly-changing list of more than fifty small plates — sashimi, peppers with meat miso, chicken-liver sashimi, a teppan egg you mix yourself. Cash or PayPay; no bookings.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Staff (unnamed)'], origin: null,
      background: 'Regulars praise food a level above a typical standing bar and a menu that changes every month (October and November 2026). A November 2026 reviewer calls it a sister shop of “Momiji”; reviewers describe a cheerful owner (October 2026) and four or five lively staff (August and September 2026).',
      philosophy: null, specialty: 'Monthly small plates; sashimi.',
      anecdotes: [
        { text: 'A first-time solo visitor in August 2026 felt at ease among the regulars thanks to the cheerful staff, and resolved to return on every Kyoto trip.', source: R + 'B534987014/' },
        { text: 'An October 2026 visitor, whose usual standing bar was closed, ducked in out of the rain and stayed.', source: R + 'B538105900/' },
      ],
      japanese_sources_summary: '食べログ: ココロ、立ち飲み居酒屋・バー、下京区四条通小橋西入真町455-5 セザンヌビル1F、京都河原町駅から151m、月 15:00〜23:00、火〜土 15:00〜23:30、日 13:00〜22:00、予約不可、現金・PayPayのみ、40席、店外に灰皿。口コミ (2026年、英語): 立ち飲みとは思えない料理、毎月替わるメニュー、50品以上、生ビール480円、瓶ビール中580円、日本酒は1,000円以上が多い、肉味噌のせピーマン420円、鶏レバー刺し680円、日替わりソースの鉄板ハンバーグ580円、刺身、卵焼き、チーズと明太子の鉄板たまご、自家製タルタルのカキフライ、鱧の天ぷら、明るい店主、もみじの姉妹店 (2026年11月の口コミ)。',
      confidence: 'medium', sources: [TB, R + 'B502518236/', R + 'B523487111/', R + 'B531283413/', R + 'B534987014/', R + 'B536180487/', R + 'B537338606/', R + 'B537715489/', R + 'B537792937/', R + 'B538105900/', R + 'B538485365/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing bar; cash or PayPay; no bookings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通小橋西入真町455-5 セザンヌビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004351, 135.770104); cross-checked: GSI resolves 真町 only to the town, but OSM Nominatim reverse-geocodes the Tabelog point to a mapped “ココロ” on 真橋通; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536180487/', R + 'B537792937/'],
    price_note: 'Prices from September and October 2026 reviews; the menu changes monthly.', last_checked: TODAY, items: [
      it('', '', 'Draft beer', '¥480', 'Drinks', 'no', '', 'September and November 2026.', 'beer'),
      it('', '', 'Fresh peppers with meat miso', '¥420', 'Small plates', 'ask', 'no', 'September 2026.', 'peppers'),
      it('', '', 'Chicken liver sashimi', '¥680', 'Small plates', 'ask', 'no', 'September 2026.', 'liver'),
      it('', '', 'Teppan hamburg with the day’s sauce', '¥580', 'Small plates', 'ask', 'no', 'October 2026.', 'hamburg'),
    ] }, {
    cuisine: '立ち飲みとは思えない料理で知られ、メニューは毎月替わり50品以上 (2026年の口コミ)・生ビール480円 (2026年9月・11月)。瓶ビール中580円 (2026年10月)。日本酒は種類が多く、多くは1,000円以上 (2026年10月)・肉味噌をのせて食べる生ピーマン420円。鶏レバー刺し680円 (2026年9月)・日替わりソースの鉄板ハンバーグ580円 (2026年10月)・刺身、卵焼き、自分で混ぜるチーズと明太子の鉄板たまご、自家製タルタルのカキフライ、夏の鱧の天ぷら (2026年)',
    neighborhood: '河原町と木屋町のあいだの路地、四条の北',
    gf_detail: '要確認。毎月替わる小皿: 刺身、卵焼き、鉄板たまご、肉味噌のピーマン、鉄板ハンバーグ、カキフライ、鱧の天ぷら。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。刺身、鶏、ハンバーグ、牡蠣の魚と肉の立ち飲み (2026年の口コミ)。',
    notes: '[立ち飲み・河原町の裏路地、毎月替わる小皿] 木屋町から入った路地の、ネオンの光る広い立ち飲み。昼過ぎから開き、480円の生ビールと、毎月替わる50品以上の小皿 (刺身、肉味噌のピーマン、鶏レバー刺し、自分で混ぜる鉄板たまご)。現金かPayPay、予約不可。',
  });
}

// ================================================================ 旬野菜×京居酒屋 ひとくち
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26036216/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:00', '24:00']); const B = day(['17:00', '02:00']);
  put({
    id: 'kyoto_hitokuchi_kawaramachi', name: '旬野菜×京居酒屋 ひとくち (Hitokuchi)', category: 'OMNI',
    lat: 35.004257, lng: 135.770275, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto-vegetable izakaya dishes — meat-stuffed Kamo eggplant, nama-fu (wheat gluten) pizza, yuba, simmered dishes, meat sushi; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Seasonal Kyoto vegetables and yuba feature, but the signature dishes use meat, bacon and cheese, and nothing is described as vegan (2024–2026 reviews).',
    hours_raw: 'Sunday–Thursday and holidays 17:00–24:00 (L.O. 23:30); Friday, Saturday and the eve of holidays 17:00–2:00 (L.O. 1:30) (Tabelog). Reservations accepted; at busy times seating may be limited to 2 hours, and from 27 December to 3 January to 90 minutes without free-flow drinks (Tabelog). Cards (Visa, Master, JCB) (Tabelog). 128 seats with private rooms (Tabelog). Smoking allowed (Tabelog; February 2026). On the 5th floor of a building above a club on Nishikiyamachi, a minute from Hankyu Kawaramachi exit 1A (Tabelog; 2024 and February 2026). Opened 20 July 2021 (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishikiyamachi north of Shijo — 1 min from Hankyu Kawaramachi exit 1A',
    cuisine: 'An izakaya built around seasonal Kyoto vegetables, geared to groups (Tabelog; reviews) · all-you-can-eat-and-drink with more than 140 items from ¥2,400, private rooms (Tabelog) · Kyoto cuisine course with free-flow drinks; yuba and vegetables; meat sushi ¥99 as an extra (July 2026) · Kamo eggplant stuffed with sweet-savoury minced meat; nama-fu pizza with bacon and cheese on a sizzling plate (2024) · matcha beer (2024)',
    website: null, gmaps: gm('旬野菜×京居酒屋 ひとくち 河原町'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Kawaramachi 5F, Kyoto vegetables for groups] A large upstairs izakaya a minute from Hankyu Kawaramachi, with private rooms and all-you-can-eat-and-drink plans from ¥2,400: Kyoto vegetables, a whole Kamo eggplant stuffed with minced meat, nama-fu pizza and yuba. Open late — until 2:00 on Fridays and Saturdays. Smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s shop text pitches cheap all-you-can-eat-and-drink plans with private rooms for parties. Reviewers mention young, energetic staff (November 2025) and a slight smell of tobacco (February 2026).',
      philosophy: null, specialty: 'Meat-stuffed Kamo eggplant; nama-fu pizza.',
      anecdotes: [
        { text: 'A July 2026 diner on the Kyoto cuisine course added meat sushi at ¥99 and called it a bargain.', source: R + 'B532879988/' },
        { text: 'A February 2025 guest chose it for the fully private rooms where smoking was allowed.', source: R + 'B502022423/' },
      ],
      japanese_sources_summary: '食べログ: 旬野菜×京居酒屋 ひとくち、居酒屋・日本料理・郷土料理、下京区西木屋町通四条上ル真町97 イマージアムビル5F、日〜木・祝 17:00〜24:00、金土・祝前日 17:00〜翌2:00、予約可 (混雑時は2時間制)、カード可、128席、個室あり、喫煙可、2021年7月20日オープン、140品以上の食べ飲み放題2,400円から。口コミ (2024〜2026年、英語): 京野菜、賀茂なすの肉詰め、生麩のピザ、湯葉、京料理の飲み放題コース、肉寿司99円、抹茶ビール、若く元気な店員、たばこの匂い。',
      confidence: 'low', sources: [TB, R + 'B495967555/', R + 'B496324844/', R + 'B502022423/', R + 'B502536843/', R + 'B517857396/', R + 'B527191265/', R + 'B532879988/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Group izakaya with private rooms; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区西木屋町通四条上ル真町97 イマージアムビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004257, 135.770275), kept: it fits Tabelog’s “1 min from Hankyu Kawaramachi exit 1A”; GSI resolves 真町 only to the town and OSM has no entry for the building, so the pin is marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B532879988/'],
    price_note: 'Plan price from Tabelog; one item from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat-and-drink plan (140+ items)', 'from ¥2,400', 'Plans', 'ask', 'ask', 'Tabelog.', 'tabehodai'),
      it('', '', 'Meat sushi (extra)', '¥99', 'À la carte', 'ask', 'no', 'July 2026.', 'niku_sushi'),
      it('', '', 'Kamo eggplant stuffed with minced meat', '', 'À la carte', 'ask', 'no', '2024.', 'kamo_nasu'),
    ] }, {
    cuisine: '季節の京野菜を中心にした、団体向けの居酒屋 (食べログ、口コミ)・140品以上の食べ飲み放題2,400円から、個室あり (食べログ)・飲み放題付きの京料理のコース。湯葉と野菜。追加の肉寿司99円 (2026年7月)・甘辛い肉を詰めた賀茂なす。鉄板で出るベーコンとチーズの生麩のピザ (2024年)・抹茶ビール (2024年)',
    neighborhood: '四条の北の西木屋町。阪急河原町1A出口から徒歩1分',
    gf_detail: '要確認。賀茂なすの肉詰め、生麩のピザ、湯葉、煮物、肉寿司などの京野菜の居酒屋料理。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。季節の京野菜や湯葉が中心だが、名物の料理は肉、ベーコン、チーズを使い、ヴィーガンと書かれたものはない (2024〜2026年の口コミ)。',
    notes: '[居酒屋・河原町の5階、団体向けの京野菜] 阪急河原町から1分のビルの上階の大きな居酒屋。個室と2,400円からの食べ飲み放題で、京野菜、賀茂なすの肉詰め、生麩のピザ、湯葉。金土は深夜2時まで。喫煙可。',
  });
}

save();
