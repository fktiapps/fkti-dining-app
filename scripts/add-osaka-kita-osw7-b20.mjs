// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), notable queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 20.
//   + お魚処 藁ヤキ炭ヒデ Osakana Dokoro Warayaki Sumi Hide (straw-seared katsuo by Higashi-Mikuni Station, opened 2024)
//   + 魚料理 あのの Sakana Ryori Anono (fish set lunches with about ten obanzai, booked out at lunch; opened 2024)
//   + 藤山 Fujiyama (long-running neighbourhood yakiniku near Juso, five tables, moved in 2025)
//   + 炉端処 一心 Robata Dokoro Isshin (yakitori and chicken sashimi by Higashi-Mikuni Station; English menu)
//   Lane check: every id above is even. The first four even ids of `next notable 80 shin-osaka`; no skips.
//   大阪焼肉 松屋 新大阪店 (27019108) is sixth in the even list, so its chain check falls to batch 21.
//   Chain check: none of the four names another shop. 炉端処 一心 is unrelated to osaka_robata_isshin_namba (炉端焼き一新, different
//   kanji and no stated link) and to osaka_isshin_hozenji. 藤山 is unrelated to osaka_mendokoro_fujiyama_jirou_abeno_hoop (a ramen brand).
//   None of the four is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   No ramen blocks. open_late per Greg's 2026-11-02 ruling (true when the shop closes after 22:00).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-20');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ お魚処 藁ヤキ炭ヒデ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27144246/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '14:00'], ['17:00', '22:00']); const N = day(['17:00', '22:00']); const F = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_warayaki_sumi_hide_higashimikuni', name: 'お魚処 藁ヤキ炭ヒデ (Osakana Dokoro Warayaki Sumi Hide)', category: 'OMNI',
    lat: 34.740135, lng: 135.497232, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The straw-seared katsuo is served with salt and sudachi (September 2026), but the menu also has kara-age, fried octopus and other fried dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish izakaya.',
    hours_raw: 'Mon and Wed 11:30–14:00 and 17:00–22:00; Tue and Thu 17:00–22:00; Fri and Sat 11:30–14:00 and 17:00–23:00; days before and after holidays as Mon; closed Sunday and holidays (Tabelog). Reservations accepted; book for lunch, which fills after 12:00 (Tabelog; September 2026). Cards, e-money and QR accepted; cover charge at night (Tabelog). 27 seats with counter and sofa seats; non-smoking; children welcome (Tabelog). Courses with all-you-can-drink (Tabelog; October 2026). Opened 18 September 2024 (Tabelog).',
    hours: { 0: L, 1: N, 2: L, 3: N, 4: F, 5: F }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '東三国4-16-12 — 2 min from Higashi-Mikuni Stn (Tabelog); hard to see from the street (September 2026)',
    cuisine: 'Fish izakaya built on warayaki, fish seared over burning straw at the counter (2026) · signature katsuo warayaki, thick cuts rare inside, with salt and sudachi; katsuo from Miyagi per one diner (August–September 2026) · lunch ¥1,650: a choice of warayaki (katsuo, buri or hamachi that day), fried dishes or simmered fish, with four obanzai, rice, miso soup and a small dessert such as crema catalana (September–October 2026) · night: sashimi of the day (buri), scallops, duck, kara-age, fried octopus, octopus carpaccio, ganmo, chicken skin, mozuku (August–October 2026) · sake, shochu and wine; all-you-can-drink courses (Tabelog; October 2026) · dinner about ¥5,000–7,000 a head (2026)',
    website: null, gmaps: gm('藁ヤキ炭ヒデ 東三国'), menu_url: null,
    notes: "[Izakaya · Higashi-Mikuni, katsuo seared over straw at the counter] A fish izakaya opened in 2024 two minutes from Higashi-Mikuni Station, where the show is the warayaki: thick katsuo seared over blazing straw in view of the counter, smoky outside and rare inside, eaten with coarse salt and sudachi (2026). Lunch is a bargain at ¥1,650, warayaki with four obanzai, rice, soup and a small dessert, and fills after noon, so book (September 2026). At night add the sashimi of the day and fried dishes, with a good sake list; about ¥5,000–7,000 a head (2026). Closed Sunday; lunch Monday, Wednesday, Friday and Saturday only.",
    chef_bio: { chef_name: null, roles: ['Master and staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 18 September 2024 (Tabelog). Reviewers: "The master was a wonderful person too!" (August 2026); lively staff and a calm room (September 2026).', philosophy: null, specialty: 'Katsuo warayaki.',
      anecdotes: [
        { text: '"Watching the bonito being grilled over the blazing straw right in front of us at the counter got me excited even before tasting it." — August 2026, katsuo warayaki set meal.', source: R + 'B534446940/' },
        { text: '"The thick cuts of fish were luxurious, with a perfect balance between the fragrant aroma of the grilled straw on the surface and the moist, rare texture inside." — September 2026.', source: R + 'B536275400/' },
        { text: '"I recommend making a reservation since it gets fully booked after 12 PM!" — September 2026, warayaki lunch for JPY 1,650.', source: R + 'B528230915/' },
      ],
      japanese_sources_summary: '食べログ: お魚処 藁ヤキ炭ヒデ、居酒屋・海鮮・創作料理、大阪市淀川区東三国4-16-12、東三国駅から徒歩2分、月・水 (祝前日・祝後日も) 11:30〜14:00、17:00〜22:00、火・木17:00〜22:00、金・土11:30〜14:00、17:00〜23:00、日・祝休み、予約可、カード・電子マネー・QR 可、チャージあり、27席、禁煙、子ども可、飲み放題のコース、2024年9月18日オープン。口コミ (2026年8〜10月): カウンターの前で藁で焼くカツオ、厚切りで中はレア、塩とすだちで、Miyagi のカツオという声、ランチ1,650円は藁焼き (カツオ、ブリ、ハマチ)、揚げ物、煮魚から選び、おばんざい4品、ごはん、みそ汁、小さなデザート (カタラーナ)、昼12時すぎは満席なので予約を、夜は本日の刺身 (ブリ)、ホタテ、鴨、から揚げ、タコの唐揚げ、タコのカルパッチョ、がんも、鶏皮、もずく酢、日本酒が多い、夜はひとり約5,000〜7,000円、マスターがいい人、外から店の中が見えにくい。',
      confidence: 'medium', sources: [TB, R + 'B528230915/', R + 'B533653300/', R + 'B534446940/', R + 'B534982477/', R + 'B535084568/', R + 'B535175844/', R + 'B536149775/', R + 'B536228749/', R + 'B536275400/', R + 'B538130990/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead, especially lunch; counter seats face the straw grill. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国4-16-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国四丁目16番12号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528230915/', R + 'B536149775/', R + 'B536228749/'],
    price_note: 'Lunch price from 2026 reviews; dinner about ¥5,000–7,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Warayaki lunch set (with four obanzai, rice, soup, small dessert)', '¥1,650', 'Lunch', 'ask', 'no', 'September–October 2026.', 'warayaki_lunch'),
      it('', '', 'Fried-dish lunch set', '', 'Lunch', 'no', 'no', 'September 2026.', 'agemono_lunch'),
      it('', '', 'Simmered-fish lunch set', '', 'Lunch', 'ask', 'no', 'September 2026.', 'nizakana_lunch'),
      it('', '', 'Katsuo warayaki', '', 'Dinner', 'ask', 'no', 'August–September 2026.', 'katsuo_warayaki'),
    ] }, {
    cuisine: 'カウンターで魚を藁で焼く藁焼きが主役の魚の居酒屋 (2026年)・名物はカツオの藁焼き、厚切りで中はレア、塩とすだちで。Miyagi のカツオという声も (2026年8〜9月)・ランチ1,650円: 藁焼き (その日はカツオ、ブリ、ハマチ)、揚げ物、煮魚から選び、おばんざい4品、ごはん、みそ汁、カタラーナなどの小さなデザート (2026年9〜10月)・夜: 本日の刺身 (ブリ)、ホタテ、鴨、から揚げ、タコの唐揚げ、タコのカルパッチョ、がんも、鶏皮、もずく酢 (2026年8〜10月)・日本酒、焼酎、ワイン。飲み放題のコース (食べログ。2026年10月)・夜はひとり約5,000〜7,000円 (2026年)',
    neighborhood: '東三国4-16-12。東三国駅から徒歩2分 (食べログ)。外から店の中が見えにくい (2026年9月)',
    gf_detail: '要確認。グルテンの情報なし。カツオの藁焼きは塩とすだちで (2026年9月) だが、から揚げやタコの唐揚げなどの揚げ物もある。',
    vegan_detail: 'ヴィーガンではありません。魚の居酒屋。',
    notes: '[居酒屋・東三国、カウンターの前で藁で焼くカツオ] 2024年に東三国駅から徒歩2分にできた魚の居酒屋。見どころは藁焼きで、厚切りのカツオをカウンターから見える燃えさかる藁で焼き、外は香ばしく中はレア、粗塩とすだちで (2026年)。ランチは1,650円で、藁焼きにおばんざい4品、ごはん、みそ汁、小さなデザートとお得。12時すぎには満席になるので予約を (2026年9月)。夜は本日の刺身や揚げ物を足して、日本酒も充実。ひとり約5,000〜7,000円 (2026年)。日曜休み。ランチは月・水・金・土だけ。',
  });
}

// ================================================================ 魚料理 あのの
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27141662/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:00', '22:00']);
  put({
    id: 'osaka_sakana_ryori_anono_higashimikuni', name: '魚料理 あのの (Sakana Ryori Anono)', category: 'OMNI',
    lat: 34.740802, lng: 135.496075, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The set has sashimi, grilled fish and obanzai, but also kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish set meals with sashimi, grilled fish and kara-age.',
    hours_raw: 'Mon–Sat 12:00–22:00, lunch 12:00–15:00, last entry 21:00; closed Sunday and holidays; hours may change (Tabelog). Reservations accepted by phone, and needed for lunch, which is often fully booked; walk-ins queue before 12:00 and the whole party must be present (2026). Cards and e-money accepted (Tabelog). 8 counter seats and a table for four on the ground floor, more on the first floor (September 2026); non-smoking (Tabelog). Opened 21 March 2024 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '東三国4-9-5 — about 4 min from Higashi-Mikuni Stn, tucked down a small alley (Tabelog; August 2026)',
    cuisine: 'Fish set meals and obanzai (2026) · "Anono Gozen", the daily set ¥1,650: sashimi, grilled fish, kara-age, rolled omelette and about ten homemade obanzai with miso soup and rice; ask for less rice if you eat lightly (April–September 2026) · evening: a sashimi platter of one slice each with nine small appetisers ¥2,800 (October 2026); simmered shellfish, homemade ankimo with ponzu (July 2026); sweet potato with butter (September 2026) · beer, highballs and sake; long lunches with drinks welcome (September 2026)',
    website: null, gmaps: gm('魚料理 あのの 東三国'), menu_url: null,
    notes: "[Fish · Higashi-Mikuni, a ¥1,650 fish set with ten obanzai] A small fish restaurant opened in 2024 down an alley near Higashi-Mikuni Station, whose lunch sells out every day: the ¥1,650 Anono Gozen of sashimi, grilled fish, kara-age, omelette and about ten homemade obanzai, like a ryokan breakfast (2026). Book by phone, or queue before noon with your whole party. It stays open into the evening for a sashimi platter with nine little dishes, ¥2,800, and drinks; a noon-to-mid-afternoon drinking session for two came to ¥8,000 (2026). Closed Sunday and holidays.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 21 March 2024 (Tabelog). Reviewers: a homely room with many regulars at the counter (October 2026); attentive staff (July 2026); featured on a local TV programme (August 2026).', philosophy: null, specialty: 'Anono Gozen.',
      anecdotes: [
        { text: '"The set meal included sashimi, grilled fish, small side dishes, rolled omelet, miso soup, and rice, all beautifully prepared, resembling a luxurious breakfast at a ryokan." — July 2026.', source: R + 'B532194031/' },
        { text: '"Assorted Sashimi Platter (one slice each) + Assorted Nine Appetizers for JPY 2,800 = A solo drinking paradise." — October 2026.', source: R + 'B537416886/' },
        { text: '"There was a notice outside stating that the lunch menu was fully booked." — August 2026, Anono Gozen.', source: R + 'B534501794/' },
      ],
      japanese_sources_summary: '食べログ: 魚料理 あのの、食堂・海鮮、大阪市淀川区東三国4-9-5、東三国駅から徒歩約4分、月〜土12:00〜22:00 (ランチは12:00〜15:00、入店は21:00まで)、日曜・祝日休み、予約可、カード・電子マネー可、禁煙、2024年3月21日オープン。口コミ (2026年4〜10月): 小さな路地の中、日替わりの「あのの御膳」1,650円 (刺身、焼き魚、から揚げ、だし巻き、手作りのおばんざい約10品、みそ汁、ごはん)、ランチは予約でいっぱいの日が多い、予約は電話で、開店前に並ぶなら全員そろって、1階はカウンター8席と4人テーブル、2階もある、夜は刺身の盛り合わせ (一切れずつ) と前菜9品で2,800円、貝の煮付け、自家製あんきもポン酢、さつまいもバター、ビール、ハイボール、日本酒、2人で昼から飲んで8,000円、常連が多い、テレビで紹介された。',
      confidence: 'medium', sources: [TB, R + 'B526230061/', R + 'B530962846/', R + 'B532194031/', R + 'B533987665/', R + 'B534501794/', R + 'B535064411/', R + 'B535377564/', R + 'B535612243/', R + 'B537416886/', R + 'B538411835/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book lunch by phone; one daily set. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国4-9-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国四丁目9番5号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535612243/', R + 'B537416886/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Anono Gozen (daily fish set with obanzai)', '¥1,650', 'Lunch', 'ask', 'no', 'April–September 2026.', 'anono_gozen'),
      it('', '', 'Sashimi platter with nine small appetisers', '¥2,800', 'Evening', 'ask', 'no', 'October 2026.', 'sashimi_nine'),
      it('', '', 'Homemade ankimo with ponzu', '', 'Evening', 'ask', 'no', 'July 2026.', 'ankimo'),
      it('', '', 'Simmered shellfish', '', 'Evening', 'ask', 'no', 'July and September 2026.', 'kai_nitsuke'),
    ] }, {
    cuisine: '魚の定食とおばんざい (2026年)・日替わりの「あのの御膳」1,650円: 刺身、焼き魚、から揚げ、だし巻き、手作りのおばんざい約10品、みそ汁、ごはん。少食ならごはん少なめを (2026年4〜9月)・夜: 刺身の盛り合わせ (一切れずつ) と前菜9品で2,800円 (2026年10月)。貝の煮付け、自家製あんきもポン酢 (2026年7月)。さつまいもバター (2026年9月)・ビール、ハイボール、日本酒。昼から飲んでもいい (2026年9月)',
    neighborhood: '東三国4-9-5。東三国駅から徒歩約4分、小さな路地の中 (食べログ。2026年8月)',
    gf_detail: '要確認。グルテンの情報なし。定食は刺身、焼き魚、おばんざいだが、から揚げもある。',
    vegan_detail: 'ヴィーガンではありません。刺身、焼き魚、から揚げの魚の定食。',
    notes: '[魚料理・東三国、おばんざい10品の1,650円の魚定食] 2024年に東三国駅の近くの路地にできた小さな魚料理の店で、ランチは毎日売り切れる: 1,650円の「あのの御膳」は刺身、焼き魚、から揚げ、だし巻き、手作りのおばんざい約10品で、旅館の朝ごはんのよう (2026年)。電話で予約するか、昼前に全員そろって並ぶ。夜まで開いていて、刺身の盛り合わせに小鉢9品で2,800円、お酒も。2人で昼から夕方まで飲んで8,000円 (2026年)。日曜と祝日休み。',
  });
}

// ================================================================ 藤山
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27127132/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '21:00']);
  put({
    id: 'osaka_fujiyama_yakiniku_juso', name: '藤山 (Fujiyama)', category: 'OMNI',
    lat: 34.723377, lng: 135.486786, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Meat comes with a garlic-and-chili tare or salt, and the dipping sauce is miso-based (March 2026); cold noodles are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku and horumon restaurant.',
    hours_raw: 'Tue–Sun 17:00–21:00; closed Monday; hours may change (Tabelog). Reservations strongly recommended, often full from 17:00; leave a voicemail and the shop calls back (2025–2026). Cash only (Tabelog). Five tables (March 2026); non-smoking (Tabelog). Long-established; moved to this address on the other side of Juso Station by July 2025 (July 2025).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: '十三東4-1-13 — about 550 m (10 min walk) from Juso Stn, in a shopping street (Tabelog; July 2025)',
    cuisine: 'Neighbourhood yakiniku and horumon (2025–2026) · meat with tare (marinated with garlic and chili) or salt; a miso-based dipping sauce with a hint of sansho (March 2026) · wagyu outside skirt ¥1,450, horumon platter A ¥1,800 (red omasum, large and small intestine, omasum, maruchou), salted tongue ¥1,300, mino ¥800, kori-kori ¥700, fresh omasum ¥750, fresh heart ¥750, kimchi platter ¥450 (March 2026) · maruchou, techan, belly, wagyu harami (December 2025) · cold noodles; white rice recommended (2025–2026) · under ¥5,000 a head with drinks (November 2025)',
    website: null, gmaps: gm('藤山 焼肉 十三東'), menu_url: null,
    notes: "[Yakiniku · Juso, an old-school horumon house with five tables] A long-running neighbourhood yakiniku near Juso, moved to this street with its old sign by 2025, five tables that are booked solid from 17:00 (2025–2026). The meat comes either in a garlic-and-chili tare or with salt; regulars say take the tare, with white rice, and dip in the miso sauce with a touch of sansho (March 2026). The horumon platter is ¥1,800, salted tongue ¥1,300, and the raw-cut omasum and heart are a highlight; most eat and drink well for under ¥5,000 (2025–2026). Book by leaving a voicemail. Cash only; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog. Reviewers: a long-established Juso yakiniku that moved to the other side of the station and kept its old sign (July 2025); welcomed a late guest with a smile (July 2025); reservations by voicemail (March 2026).', philosophy: null, specialty: 'Horumon platter; tare-grilled meat.',
      anecdotes: [
        { text: '"It was fully booked from the opening at 5 PM, which shows its popularity." — August 2025.', source: R + 'B511613874/' },
        { text: '"With only 5 table seats available, making a reservation is recommended." — March 2026, horumon platter A for JPY 1,800.', source: R + 'B524329390/' },
        { text: '"The yakiniku sauce was different from other places—light yet rich and incredibly tasty." — December 2025.', source: R + 'B518677208/' },
      ],
      japanese_sources_summary: '食べログ: 藤山、焼肉・ホルモン、大阪市淀川区十三東4-1-13、十三駅から548m、火〜日17:00〜21:00、月曜休み、予約可、現金のみ、禁煙。口コミ (2025年7月〜2026年6月): 十三駅の近くの老舗の焼肉、駅の反対側の商店街に移転、昔の看板、テーブル5つ、17時から予約でいっぱい、予約は留守電に入れると折り返し、タレ (にんにくと唐辛子) か塩、つけダレは味噌ベースで山椒がほんのり、和牛ハラミ1,450円、ホルモン盛り合わせ A 1,800円 (赤センマイ、大腸、センマイ、小腸、マルチョウなど)、塩タン1,300円、ミノ800円、コリコリ700円、生センマイ750円、生ハツ750円、キムチ盛り合わせ450円、マルチョウ、テッチャン、バラ、冷麺、白ごはん、飲んで5,000円以下。',
      confidence: 'medium', sources: [TB, R + 'B510013236/', R + 'B510859259/', R + 'B510882921/', R + 'B511613874/', R + 'B517791287/', R + 'B518677208/', R + 'B523156897/', R + 'B524329390/', R + 'B525803309/', R + 'B531756211/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone or voicemail; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区十三東4-1-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review dated June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区十三東四丁目1番13号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524329390/', R + 'B510882921/'],
    price_note: 'Prices from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Horumon platter A', '¥1,800', 'Horumon', 'ask', 'no', 'March 2026.', 'horumon_a'),
      it('', '', 'Wagyu outside skirt', '¥1,450', 'Meat', 'ask', 'no', 'March 2026.', 'wagyu_harami'),
      it('', '', 'Salted tongue', '¥1,300', 'Meat', 'ask', 'no', 'March 2026.', 'shio_tan'),
      it('', '', 'Fresh omasum', '¥750', 'Horumon', 'ask', 'no', 'March 2026.', 'nama_senmai'),
    ] }, {
    cuisine: '町の焼肉とホルモン (2025〜2026年)・肉はタレ (にんにくと唐辛子で漬ける) か塩。つけダレは味噌ベースで山椒がほんのり (2026年3月)・和牛ハラミ1,450円、ホルモン盛り合わせ A 1,800円 (赤センマイ、大腸、センマイ、小腸、マルチョウ)、塩タン1,300円、ミノ800円、コリコリ700円、生センマイ750円、生ハツ750円、キムチ盛り合わせ450円 (2026年3月)・マルチョウ、テッチャン、バラ、和牛ハラミ (2025年12月)・冷麺。白ごはんは必須 (2025〜2026年)・飲んで5,000円以下 (2025年11月)',
    neighborhood: '十三東4-1-13。十三駅から約550m、歩いて10分の商店街 (食べログ。2025年7月)',
    gf_detail: '要確認。グルテンの情報なし。肉はにんにくと唐辛子のタレか塩で、つけダレは味噌ベース (2026年3月)。冷麺もある。',
    vegan_detail: 'ヴィーガンではありません。焼肉とホルモンの店。',
    notes: '[焼肉・十三、テーブル5つの昔ながらのホルモンの店] 十三駅の近くの老舗の町の焼肉屋で、2025年までに昔の看板ごとこの通りに移り、テーブル5つは17時から予約でいっぱい (2025〜2026年)。肉はにんにくと唐辛子のタレか塩。常連のおすすめはタレで、白ごはんと、山椒がほんのりきいた味噌のつけダレで (2026年3月)。ホルモン盛り合わせ1,800円、塩タン1,300円、生のセンマイやハツも人気。飲んで食べて5,000円以下が多い (2025〜2026年)。予約は留守電に。現金のみ。月曜休み。',
  });
}

// ================================================================ 炉端処 一心
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27044216/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['17:00', '23:00']); const S = day(['17:00', '23:00']);
  put({
    id: 'osaka_robata_dokoro_isshin_higashimikuni', name: '炉端処 一心 (Robata Dokoro Isshin)', category: 'OMNI',
    lat: 34.741823, lng: 135.496681, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Yakitori comes with salt or a sweet-savoury sauce, and the menu has chicken nanban, fried fish, omurice and yakisoba.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant.',
    hours_raw: 'Mon–Fri and holidays 11:30–14:00 (last order 13:30) and 17:00–23:00 (food last order 22:15, drinks 22:30); Sat 17:00–23:00; closed Sunday (Tabelog). Reservations accepted; book at weekends, as both counter and tatami fill by 18:00 (Tabelog; 2026). Cards, iD, QUICPay and PayPay accepted; a raw-cabbage appetiser is charged ¥380 (medium) or ¥250 (small) (Tabelog). 27 seats: about ten at the counter and a tatami area; smoking allowed (Tabelog; September 2026). English menu available (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '東三国5-7-3 — 2 min west of the north exit of Higashi-Mikuni Stn (Tabelog)',
    cuisine: 'Chicken restaurant using Miyazaki Jitokko, Osaka Kawachi duck and Nara Yamato chicken (Tabelog shop text) · yakitori: large skewers of yagen cartilage, rare chicken breast, gizzard, seseri, tsukune (2026) · "gacha-yaki", mixed cuts such as seseri and harami, with sweet-spicy sauce or salt (August 2026) · chicken sashimi, including a seven-cut assortment best with sesame oil and salt (February and September 2026); chicken thigh sashimi (August 2026) · other dishes: chicken soboro and salt-kombu potato salad, chicken nanban, fried horse mackerel, eggplant with chicken mince, white omurice, chicken and bonito rice balls, grilled nagaimo, yakisoba (2026) · lunch "torijuu" of charcoal-grilled thigh and breast with dashimaki on rice ¥1,100, two small sides, free refills of rice and miso soup (September 2026)',
    website: null, gmaps: gm('炉端処 一心 東三国'), menu_url: null,
    notes: "[Yakitori · Higashi-Mikuni, chicken sashimi and gacha-yaki in a busy local] A lively, old-style yakitori house with a counter and tatami room two minutes from Higashi-Mikuni Station, packed by 18:00 at weekends (2026). It cooks Miyazaki Jitokko, Kawachi duck and Yamato chicken (Tabelog shop text): big skewers, a rare-seared breast that surprises, a seven-cut chicken sashimi with sesame oil and salt, and the house \"gacha-yaki\" of mixed cuts in a sweet-spicy sauce (2026). Weekday lunch is the ¥1,100 torijuu with free rice refills (September 2026). Smoking allowed; English menu. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Tabelog shop text: a chicken restaurant two minutes from Higashi-Mikuni Station using Miyazaki Jitokko, Osaka Kawachi duck and Nara Yamato chicken for yakitori, tataki and sashimi, with omurice, pasta and creative dishes too. Reviewers: a local, vintage feel and a long-time favourite of people who once worked nearby (2026).', philosophy: 'Freshness of the chicken first (Tabelog shop text).', specialty: 'Gacha-yaki; chicken sashimi.',
      anecdotes: [
        { text: '"The Gacha-yaki was exceptionally delicious. The sauce was so tasty that it made me crave rice, with a perfect sweet and spicy balance." — August 2026.', source: R + 'B508024599/' },
        { text: '"I usually think of chicken breast as dry when cooked, but served rare, it\'s completely different." — September 2026.', source: R + 'B536283935/' },
        { text: '"Comes with two small side dishes, and you can refill your rice and miso soup as much as you like." — September 2026, torijuu for JPY 1,100.', source: R + 'B536573370/' },
      ],
      japanese_sources_summary: '食べログ: 炉端処 一心、焼き鳥、大阪市淀川区東三国5-7-3、東三国駅北口から西へ徒歩2分、月〜金・祝11:30〜14:00 (L.O. 13:30)、17:00〜23:00 (L.O. 料理22:15、ドリンク22:30)、土17:00〜23:00、日休み、予約可、カード・iD・QUICPay・PayPay 可、お通しの生キャベツは中380円・小250円、27席、座敷、喫煙可、英語のメニューあり。店の紹介: Miyazaki Jitokko、Kawachi の鴨、Yamato の鶏を使う鶏料理の店、焼き鳥、たたき、刺身、オムライスやパスタなども。口コミ (2026年2〜9月): 週末は予約を、カウンター約10席と座敷4〜5卓、大きな串、やげん軟骨、レアのむね、砂ずり、せせり、つくね、「ガチャ焼き」(せせりやハラミなどいろいろな部位をタレか塩で)、鶏刺し7種盛り (ごま油と塩で)、もも刺し、鶏そぼろと塩昆布のポテサラ、チキン南蛮、アジフライ、なすの鶏そぼろ、白いオムライス、鶏とかつお節のおにぎり、長芋焼き、焼きそば、ランチの鶏重1,100円 (炭火のももとむね、だし巻き、小鉢2品、ごはんとみそ汁おかわり自由)。',
      confidence: 'medium', sources: [TB, R + 'B508024599/', R + 'B516467634/', R + 'B523347273/', R + 'B528868601/', R + 'B529349486/', R + 'B531285126/', R + 'B533225144/', R + 'B536283935/', R + 'B536359414/', R + 'B536573370/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu. Smoking allowed; book at weekends.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国5-7-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国五丁目7番3号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536573370/', R + 'B508024599/', R + 'B536283935/'],
    price_note: 'Lunch price from a September 2026 review; appetiser charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Torijuu lunch (grilled chicken on rice, two sides, free refills)', '¥1,100', 'Lunch', 'no', 'no', 'September 2026.', 'torijuu'),
      it('', '', 'Gacha-yaki (mixed chicken cuts, sauce or salt)', '', 'Grill', 'ask', 'no', 'August 2026.', 'gacha_yaki'),
      it('', '', 'Chicken sashimi, seven cuts', '', 'Sashimi', 'ask', 'no', 'September 2026.', 'torisashi_7'),
      it('', '', 'Raw cabbage appetiser (otoshi)', '¥380', 'Appetiser', 'ask', 'ask', 'Tabelog; small ¥250.', 'otoshi_cabbage'),
    ] }, {
    cuisine: 'Miyazaki Jitokko、Kawachi の鴨、Yamato の鶏を使う鶏料理の店 (食べログの店の紹介)・焼き鳥: やげん軟骨、レアのむね、砂ずり、せせり、つくねの大きな串 (2026年)・「ガチャ焼き」: せせりやハラミなどいろいろな部位を甘辛いタレか塩で (2026年8月)・鶏刺し、7種盛りはごま油と塩で (2026年2月と9月)。もも刺し (2026年8月)・ほかに: 鶏そぼろと塩昆布のポテサラ、チキン南蛮、アジフライ、なすの鶏そぼろ、白いオムライス、鶏とかつお節のおにぎり、長芋焼き、焼きそば (2026年)・ランチの「鶏重」1,100円: 炭火のももとむねにだし巻き、小鉢2品、ごはんとみそ汁はおかわり自由 (2026年9月)',
    neighborhood: '東三国5-7-3。東三国駅北口から西へ徒歩2分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。焼き鳥は塩か甘辛いタレで、チキン南蛮、アジフライ、オムライス、焼きそばもある。',
    vegan_detail: 'ヴィーガンではありません。鶏料理の店。',
    notes: '[焼き鳥・東三国、鶏刺しとガチャ焼きのにぎやかな店] 東三国駅から徒歩2分の、カウンターと座敷のある昔ながらのにぎやかな焼き鳥屋で、週末は18時には満席 (2026年)。Miyazaki Jitokko、Kawachi の鴨、Yamato の鶏を使い (食べログの店の紹介)、大きな串、おどろくほどしっとりしたレアのむね、ごま油と塩で食べる鶏刺し7種盛り、いろいろな部位を甘辛いタレで焼く名物の「ガチャ焼き」(2026年)。平日のランチは1,100円の鶏重で、ごはんはおかわり自由 (2026年9月)。喫煙可。英語のメニューあり。日曜休み。',
  });
}

save();
