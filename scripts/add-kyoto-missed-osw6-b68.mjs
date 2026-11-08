// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 68.
//   + 宮川町 さか Miyagawacho Saka (Italian–French "Western kappo" in a former Miyagawacho teahouse) — rest
//   + 寿司割烹 やまびこ Sushi Kappou Yamabiko (sushi kappo opposite Kyoto Ebisu Shrine, hamo and good-value lunches) — rest
//   + きたざと Kitazato (Kyoto home cooking and sake in a Gion house off Hanamikoji) — rest
//   + 京料理 加茂川 Kyoryori Kamogawa (Kyoto kaiseki and lunch sets on Bukkoji-dori) — rest
//   - skip 26003692 Beer Thirty 京都河原町店 (Asahi Beer group beer hall)
//   - skip 26035090 祇園 福山 (thin: two reviews, one dated 2025–26)
//   - skip 26045716 鶏出汁おでんと焼鳥つじや 錦市場堺町店 (chain: つじや, earlier rulings 26020272 and 26025219)
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand: つじや is ruled a chain (26020272,
//   26025219); the さか hits are other shops (ぎをん さかい 26016359, 炭火ステーキ坂井 26027566); no rulings for 福山, やまびこ,
//   きたざと, Beer Thirty or 加茂川.
//   Same-name counts first (2026-11-07): 宮川町 さか — one; the official site lists no other shop. 寿司割烹 やまびこ — one. きたざと — one. 京料理 加茂川 — one.
//   None is in data/kyoto.json.
//   Charges per Tabelog's Japanese original: さか 「コペルト￥８８０ サービス料１０％ ２階個室料１部屋￥５、０００」; やまびこ and きたざと none
//   listed; 加茂川 「サービス料金、チャージ料金は頂きません」. No halal claims; no owner deaths; a single September 2026 remark about overseas diners at やまびこ left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-68');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26035090', 'thin: Tabelog has two reviews for 祇園 福山 — an August 2022 one-liner and one from May 2026 — not enough sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260301/26035090/).');
skip('26045716', 'chain: 鶏出汁おでんと焼鳥つじや is a つじや shop — over a dozen in Kyoto, already ruled a chain at 26020272 and 26025219 (https://tabelog.com/en/kyoto/A2601/A260201/26045716/).');
skip('26003692', 'large parent: Beer Thirty 京都河原町店 is an Asahi Beer group beer hall, formerly アサヒスーパードライ 京都, in the Asahi Beer Kyoto Sanjo Building (Tabelog listing and review B505791440: https://tabelog.com/en/kyoto/A2601/A260202/26003692/).');

// ================================================================ 宮川町 さか
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26007250/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.miyagawacho-saka.com/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_miyagawacho_saka', name: '宮川町 さか (Miyagawacho Saka)', category: 'OMNI',
    lat: 34.999124, lng: 135.770943, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. À la carte seafood, meat and vegetables, with pasta to finish (official site; 2025–26 reviews); no gluten information. The chef adapts dishes to requests (August 2025; September 2026).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Seafood and meat lead, but seasonal vegetables are a focus and the chef cooks to request (official site; August 2025); no vegan information.',
    hours_raw: 'Mon–Sat 17:00–22:00 (last orders food 21:00, drinks 21:30; last entry 21:00 on 1F, 20:00 on 2F); lunch from 12:00 by reservation for 4 or more; closed Sunday (or the last day of a long weekend) and two irregular Mondays a month (Tabelog; official site). Reservations accepted; the 2F private rooms serve courses only (Tabelog). Charges: coperto ¥880, service 10%, 2F private room ¥5,000 per room (Tabelog, Japanese text: 「コペルト￥８８０ サービス料１０％ ２階個室料１部屋￥５、０００」). Cards, QUICPay and QR (Tabelog). 25 seats: a 10-seat counter and tatami and sunken-kotatsu private rooms upstairs (Tabelog). 1F counter non-smoking; smoking allowed in the 2F rooms (Tabelog). Children only in the 2F rooms (Tabelog). A former teahouse in Miyagawacho, 5 min from Gion-Shijo or Kiyomizu-Gojo (Tabelog). Opened 12 May 2010 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Miyagawacho — Gion-Shijo / Kiyomizu-Gojo',
    cuisine: '"Western kappo" built on Italian and French cooking: seasonal seafood, domestic meat and game and Kyoto vegetables à la carte at the counter, with pasta to finish; seven-dish omakase courses upstairs ¥16,500, ¥19,800 and ¥23,000; lunch omakase from ¥15,000 for 4 or more (Tabelog; official site) · truffle-laden dishes (December 2024; October 2025 white truffle gratin) · fresh fish and seasonal vegetables with sauces (March 2025) · homemade karasumi, anago, cheese omelette with potato sauce, sautéed monkfish liver (March 2026) · a choice of about seven mains (April 2026) · marinated swordfish with water eggplant, hairy crab salad, bottarga and green onion pasta (September 2026)',
    website: SITE, gmaps: gm('宮川町 さか'), menu_url: TB,
    notes: '[Italian–French kappo · Miyagawacho, since 2010] A hidden counter in a former teahouse in the Miyagawacho geisha district, cooking seasonal fish, meat and Kyoto vegetables with Italian and French technique and finishing with pasta — karasumi, monkfish liver, truffled gratin, bottarga pasta. À la carte at the counter, omakase courses in the tatami rooms upstairs. Coperto ¥880 plus 10% service; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), described as warm (August 2025)'], origin: null,
      background: 'Per Tabelog and the official site: a Western-style kappo based on Italian and French cooking, opened in May 2010 in a building that keeps the front of a former Miyagawacho teahouse.',
      philosophy: 'Seasonal seafood, and domestic vegetables and meat wherever possible (Tabelog).', specialty: 'Italian–French dishes à la carte; pasta to finish.',
      anecdotes: [
        { text: 'An August 2025 diner found the owner happy to cook from the day’s recommended ingredients to order.', source: R + 'B513946998/' },
        { text: 'A December 2024 family with children took a private room upstairs and saw a maiko on the way.', source: R + 'B497018248/' },
        { text: 'A March 2026 diner urges ordering à la carte and warns the alley is a bit hard to find.', source: R + 'B525473000/' },
      ],
      japanese_sources_summary: '食べログ・公式サイト: イタリアン・フレンチを基調にした洋風割烹、東山区宮川筋4丁目319-1-5、祇園四条・清水五条から徒歩5分、月〜土17:00〜22:00、昼は12:00から4名以上の予約制、日曜と月2回の月曜休み、コペルト880円・サービス料10%・2階個室料、カード・QR 可、25席 (カウンター10、2階の座敷と掘りごたつの個室)、1階禁煙・2階喫煙可、2010年5月12日オープン、元お茶屋の建物、季節の魚介と国産の肉やジビエと野菜をアラカルトで、締めにパスタ、7品のおまかせコース16,500円・19,800円・23,000円。口コミ (2024年10月〜2026年9月、英語): トリュフ、自家製からすみ、穴子、チーズオムレツ、あん肝のソテー、メインは約7種から、カジキと水茄子のマリネ、毛蟹のサラダ、からすみとねぎのオイルパスタ、店主が好みに合わせて調理。',
      confidence: 'medium', sources: [TB, SITE, R + 'B493270053/', R + 'B493480690/', R + 'B497018248/', R + 'B498812044/', R + 'B503728794/', R + 'B513946998/', R + 'B516482848/', R + 'B518216344/', R + 'B520177512/', R + 'B525473000/', R + 'B527288890/', R + 'B535373571/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter for à la carte, upstairs rooms for courses; children only upstairs. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区宮川筋4丁目319-1-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.999124, 135.770943); cross-checked: GSI 京都府京都市東山区宮川筋四丁目319番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, SITE],
    price_note: 'Course prices from Tabelog (tax included); plus coperto ¥880 and 10% service.', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase course A (7 dishes)', '¥16,500', 'Courses', 'ask', 'ask', 'Dinner; Tabelog.', 'course_a'),
      it('', '', 'Seasonal omakase course B (7 dishes)', '¥19,800', 'Courses', 'ask', 'ask', 'Dinner; Tabelog.', 'course_b'),
      it('', '', 'Seasonal omakase course C (7 dishes)', '¥23,000', 'Courses', 'ask', 'ask', 'Dinner; Tabelog.', 'course_c'),
      it('', '', 'Bottarga and green onion oil pasta', '', 'Pasta', 'no', 'no', 'September 2026.', 'karasumi_pasta'),
      it('', '', 'Sautéed monkfish liver', '', 'À la carte', 'ask', 'no', 'March 2026.', 'ankimo'),
    ] }, {
    cuisine: 'イタリアンとフレンチを基調にした洋風割烹。カウンターで季節の魚介、国産の肉やジビエ、野菜をアラカルトで、締めにパスタ。2階は7品のおまかせコース16,500円、19,800円、23,000円。昼は4名以上でおまかせ15,000円から (食べログ、公式サイト)・トリュフをたっぷり使った料理 (2024年12月、2025年10月の白トリュフのグラタン)・新鮮な魚と季節の野菜にソース (2025年3月)・自家製からすみ、穴子、ポテトソースのチーズオムレツ、あん肝のソテー (2026年3月)・メインは約7種から選べる (2026年4月)・カジキと水茄子のマリネ、毛蟹のサラダ、からすみとねぎのオイルパスタ (2026年9月)',
    neighborhood: '宮川町。祇園四条・清水五条',
    gf_detail: '要確認。魚介、肉、野菜のアラカルトと締めのパスタ (公式サイト、2025〜2026年の口コミ)。グルテンの情報はない。好みに合わせて調理してくれる (2025年8月、2026年9月)。',
    vegan_detail: '要確認。魚介と肉が中心だが季節の野菜にも力を入れ、頼めば調理してくれる (公式サイト、2025年8月)。ヴィーガンの情報はない。',
    notes: '[イタリアン・フレンチの割烹・宮川町、2010年から] 宮川町の元お茶屋の建物に隠れたカウンター。季節の魚、肉、京野菜をイタリアンとフレンチの技法で、締めはパスタ。からすみ、あん肝、トリュフのグラタン、からすみのパスタ。1階のカウンターはアラカルト、2階の座敷はおまかせコース。コペルト880円とサービス料10%。日曜休み。',
  });
}

// ================================================================ 寿司割烹 やまびこ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26004706/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_sushi_kappo_yamabiko', name: '寿司割烹 やまびこ (Sushi Kappou Yamabiko)', category: 'OMNI',
    lat: 34.999683, lng: 135.772329, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura comes with every lunch set and casual course, alongside nama-fu dengaku and oden (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi, hamo, whale bacon, dashi oden and red miso soup with clams (2025–26 reviews).',
    hours_raw: 'Mon, Tue and Fri–Sun 12:00–14:00 and 17:00–22:00; closed Wednesday and Thursday; hours may change (Tabelog). Reservations recommended — lunch fills at opening (March 2025; April 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 18 seats: a counter of 6 and three sunken-kotatsu tables for 4 (Tabelog). Non-smoking (Tabelog). On Yamato-oji south of Shijo, opposite Kyoto Ebisu Shrine, 10 min from Gion-Shijo (Tabelog; 2008 and March 2025 reviews).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yamato-oji, opposite Kyoto Ebisu Shrine — Gion-Shijo',
    cuisine: 'Neighbourhood sushi kappo · sushi lunch set ¥2,500 incl. tax — shirasu with grated daikon, mini oden, fresh tempura, nigiri and rolls, clam red miso soup (April and May 2026; ¥2,200 in August 2025) · "casual course" of small dishes, sashimi, grilled fish, tempura and sushi ¥4,300 (March 2025) · hamo as sashimi, grilled or boiled; simmered whelk; nama-fu dengaku; whale bacon; sake-lees soup (July and September 2026) · beef tendon; simmered bay shell (September 2026)',
    website: null, gmaps: gm('寿司割烹 やまびこ 祇園'), menu_url: TB,
    notes: '[Sushi kappo · opposite Kyoto Ebisu Shrine] A long-running local sushi kappo on Yamato-oji, away from the tourist stretch, packed at lunch for a ¥2,500 set of small dishes, fresh tempura, nigiri and red miso soup. In the evening, a casual course around ¥4,300 or à la carte: hamo in season, miso dengaku, whale bacon, simmered whelk. Book ahead; closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a sushi kappo on Yamato-oji south of Shijo, opposite Kyoto Ebisu Shrine, reviewed since 2008.',
      philosophy: null, specialty: 'Hamo; sushi lunch sets.',
      anecdotes: [
        { text: 'A March 2025 diner came for lunch during the Ebessan festival across the road and came back for dinner the same day.', source: R + 'B504375787/' },
        { text: 'An April 2026 regular arrived just before opening and still only just got a counter seat.', source: R + 'B493305988/' },
        { text: 'A July 2026 Gion Matsuri visitor came for hamo, served fresh and steaming from the pot.', source: R + 'B439377722/' },
      ],
      japanese_sources_summary: '食べログ: 寿司・日本料理、東山区四条大和大路下ル四丁目小松町143 カスティーヨ東山、京阪祇園四条駅から徒歩10分、月・火・金〜日12:00〜14:00と17:00〜22:00、水木休み、カード可、電子マネー・QR 不可、18席 (カウンター6、掘りごたつのテーブル3卓)、禁煙。口コミ (2008年5月〜2026年9月、英語): えびすさんの向かい、昼の寿司定食2,500円 (2025年8月は2,200円)、しらすおろし、おでん、揚げたての天ぷら、握りと巻物、赤だし、お手軽コース4,300円、鱧の刺身・焼き・茹で、巻貝の煮付け、生麩の田楽、くじらのベーコン、粕汁、予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B87803899/', R + 'B111762408/', R + 'B112025837/', R + 'B324723390/', R + 'B423552208/', R + 'B439377722/', R + 'B448618565/', R + 'B467417834/', R + 'B493305988/', R + 'B504375787/', R + 'B511525491/', R + 'B527483878/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead, especially at lunch; the lunch set is the easy order. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区四条大和大路下ル四丁目小松町143 カスティーヨ東山',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.999683, 135.772329); cross-checked: GSI 京都府京都市東山区小松町143番地 (lot) 70m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B493305988/', R + 'B527483878/', R + 'B504375787/'],
    price_note: 'Prices from March 2025 to May 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Sushi lunch set', '¥2,500', 'Lunch', 'no', 'no', 'Small dishes, tempura, nigiri and rolls, red miso soup; April and May 2026.', 'sushi_lunch'),
      it('', '', 'Casual course', '¥4,300', 'Courses', 'no', 'no', 'Small dishes, sashimi, grilled fish, tempura, sushi; March 2025.', 'otegaru'),
      it('', '', 'Hamo (sashimi, grilled or boiled)', '', 'Seasonal', 'ask', 'no', 'July 2026.', 'hamo'),
      it('', '', 'Nama-fu dengaku', '', 'À la carte', 'no', 'ask', 'May and September 2026.', 'namafu_dengaku'),
    ] }, {
    cuisine: '地元の寿司割烹・昼の寿司定食2,500円 (税込) はしらすおろし、小さなおでん、揚げたての天ぷら、握りと巻物、貝の赤だし (2026年4・5月、2025年8月は2,200円)・小鉢、刺身、焼き魚、天ぷら、寿司のお手軽コース4,300円 (2025年3月)・鱧の刺身、焼き、茹で、巻貝の煮付け、生麩の田楽、くじらのベーコン、粕汁 (2026年7月・9月)・すじ肉、貝の煮付け (2026年9月)',
    neighborhood: '大和大路、京都ゑびす神社の向かい。祇園四条',
    gf_detail: 'グルテンフリーではない。昼の定食にもお手軽コースにも天ぷらが付き、生麩の田楽やおでんもある (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司、鱧、くじらのベーコン、出汁のおでん、貝の赤だし (2025〜2026年の口コミ)。',
    notes: '[寿司割烹・京都ゑびす神社の向かい] 観光の通りから外れた大和大路の、長く続く地元の寿司割烹。昼は小鉢、揚げたての天ぷら、握り、赤だしの2,500円の定食で満席に。夜は4,300円ほどのお手軽コースかアラカルトで、旬の鱧、味噌田楽、くじらのベーコン、巻貝の煮付け。予約がおすすめ。水木休み。',
  });
}

// ================================================================ きたざと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26010478/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_gion_kitazato', name: 'きたざと (Kitazato)', category: 'OMNI',
    lat: 35.001796, lng: 135.774371, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, nama-fu and tea soba appear on the menu (2025 reviews); dashi and soy throughout.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, beef tendon, mentaiko omelette and dashi-simmered dishes (2024–25 reviews).',
    hours_raw: 'Mon and Wed–Sun 17:00–23:00 (last order 22:30); closed Tuesday; may change (Tabelog). Reservations accepted; same-day calls have worked (Tabelog; July and October 2024). Cash only — no cards, e-money or QR (Tabelog; October 2026). 45 seats: a 7-seat counter plus tatami private rooms, some upstairs; banquets up to 30 (Tabelog; September 2023). Smoking allowed in the private rooms only (Tabelog). A house restaurant a little in from Hanamikoji, on the south side of Gion (Tabelog; 2024 reviews). No prices on the food menu (July 2024).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Gion south, off Hanamikoji — Gion-Shijo',
    cuisine: 'Kyoto home-style dishes à la carte or as a course, with a strong sake list (2024–25 reviews) · baked tomato with cream cheese, grilled Kamo eggplant with miso, chilled ume mush, grilled tororo, chicken thigh with daikon sauce, salt-grilled flatfish, sashimi (September 2023) · ¥6,500 course with simmered vegetables and chawanmushi (February 2024) · braised beef tendon with red konnyaku, mentaiko omelette, grilled yam (July 2024; January 2025) · somen and tea soba with yam, sashimi of tuna, sea bream, octopus and hamo with plum sauce (July 2025) · Pacific saury, mozuku with egg (September 2025) · roll cabbage, Shimonita leek tempura, nama-fu dengaku (December 2025)',
    website: null, gmaps: gm('きたざと 祇園'), menu_url: TB,
    notes: '[Kyoto home cooking and sake · Gion south] A long-loved house restaurant just off Hanamikoji with a counter and tatami rooms, serving gently seasoned Kyoto dishes — braised beef tendon, the signature grilled yam, sashimi platters, nama-fu dengaku, seasonal fish — with a deep sake list until 23:00. À la carte or courses; cash only; closed Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a Japanese restaurant in a house on the south side of Gion, reviewed since at least 2018; one January 2025 diner was returning after 15 years.',
      philosophy: null, specialty: 'Grilled yam; sashimi platters; Kyoto home-style dishes with sake.',
      anecdotes: [
        { text: 'A February 2024 group came on Setsubun night, with hyottoko dancers performing out front.', source: R + 'B132119994/' },
        { text: 'A September 2023 party of four was offered individual plates for a shared sashimi platter.', source: R + 'B467267090/' },
        { text: 'A January 2025 diner came back after 15 years and found chatting with the chef at the counter the best part.', source: R + 'B499284853/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、東山区祇園町南側570-120、祇園四条駅から約300m、月・水〜日17:00〜23:00 (L.O. 22:30)、火曜休み、予約可、現金のみ、45席 (カウンター7と個室)、宴会30名まで、個室のみ喫煙可。口コミ (2018年3月〜2026年10月、英語): 花見小路から少し入った一軒家、焼きトマトとクリームチーズ、賀茂茄子の田楽、名物の焼きとろろ、鶏ももの大根ソース、刺身の盛り合わせ、牛すじの煮込み、明太子の卵焼き、6,500円のコース、茶碗蒸し、さんま、もずくと卵、ロールキャベツ、生麩の田楽、日本酒が充実、料理のメニューに値段の表示がない。',
      confidence: 'medium', sources: [TB, R + 'B81246070/', R + 'B132119994/', R + 'B467267090/', R + 'B470944046/', R + 'B488383251/', R + 'B493467951/', R + 'B499284853/', R + 'B509764334/', R + 'B513891167/', R + 'B515785456/', R + 'B518497808/', R + 'B537582989/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; no prices on the food menu, so ask or take a course. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-120',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001796, 135.774371); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) about 200m — a large lot, so approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B132119994/', R + 'B470944046/'],
    price_note: 'One course price from February 2024; no prices on the food menu (July 2024).', last_checked: TODAY, items: [
      it('', '', 'Course', '¥6,500', 'Courses', 'no', 'no', 'February 2024.', 'course_6500'),
      it('', '', 'Special grilled yam (tororo)', '', 'À la carte', 'ask', 'ask', 'Signature; September 2023, July 2024, January 2025.', 'yaki_tororo'),
      it('', '', 'Braised beef tendon', '', 'À la carte', 'ask', 'no', 'July 2024; January 2025.', 'gyusuji'),
      it('', '', 'Sashimi platter', '', 'À la carte', 'ask', 'no', '2023–25 reviews.', 'sashimi'),
    ] }, {
    cuisine: '京の家庭的な料理をアラカルトかコースで、日本酒が充実 (2024〜2025年の口コミ)・焼きトマトとクリームチーズ、賀茂茄子の田楽、梅の冷たい一品、焼きとろろ、鶏ももの大根ソース、白身魚 (flatfish) の塩焼き、刺身 (2023年9月)・炊き合わせと茶碗蒸しの6,500円のコース (2024年2月)・赤こんにゃくを添えた牛すじの煮込み、明太子の卵焼き、焼きとろろ (2024年7月、2025年1月)・とろろをのせたそうめんと茶そば、まぐろ、鯛、たこ、梅ソースの鱧の刺身 (2025年7月)・さんま、もずくと卵 (2025年9月)・ロールキャベツ、Shimonita ねぎの天ぷら、生麩の田楽 (2025年12月)',
    neighborhood: '祇園の南側、花見小路から少し入る。祇園四条',
    gf_detail: 'グルテンフリーではない。天ぷら、生麩、茶そばがある (2025年の口コミ)。出汁と醤油が基本。',
    vegan_detail: 'ヴィーガン不可。刺身、牛すじ、明太子の卵焼き、出汁の炊き合わせ (2024〜2025年の口コミ)。',
    notes: '[京の家庭料理と日本酒・祇園の南側] 花見小路から少し入った一軒家の、長く愛される店。カウンターと座敷で、牛すじの煮込み、名物の焼きとろろ、刺身の盛り合わせ、生麩の田楽、旬の魚など、やさしい味の京の料理を充実した日本酒とともに23時まで。アラカルトかコース。現金のみ。火曜休み。',
  });
}
// ================================================================ 京料理 加茂川
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030596/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_kyoryori_kamogawa', name: '京料理 加茂川 (Kyoryori Kamogawa)', category: 'OMNI',
    lat: 35.001404, lng: 135.763562, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura in courses and lunch sets, and soba set meals at lunch (2023–25 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetarian course (¥9,000, 3–20 people, arranged by phone) is offered (Tabelog); no word on dashi, which is central to the cooking (March 2026).',
    hours_raw: 'Daily 11:00–14:00 (last order 13:30) and 17:00–22:00 (last order 21:30); closing days may vary (Tabelog). Reservations accepted for courses, not for lunch set meals (Tabelog; June 2025); bookings over two weeks ahead need numbers, course and time fixed; 2-hour limit; cancellation 50% the day before, 100% on the day (Tabelog). No service or cover charge (Tabelog, Japanese text: 「サービス料金、チャージ料金は頂きません」). Cards and e-money; no QR (Tabelog). 24 seats incl. a 6-seat counter and private rooms for 4–18 (Tabelog). Non-smoking (Tabelog). Bukkoji-dori west of Yanaginobamba, 5 min from Shijo exit 5 (Tabelog). Opened 1 March 2018 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Bukkoji-dori, south of Shijo — Shijo / Karasuma',
    cuisine: 'Kyoto kaiseki from a head chef with 30 years in Japanese cuisine: firefly-squid shabu-shabu in summer, fugu in winter, duck hot pot all year, hamo shabu-shabu and hamo kaiseki June to September; Hana course of 13 dishes ¥9,000, Moon course of 12 dishes ¥6,300; a vegetarian course (Tabelog) · ¥5,000 course with hamachi sashimi and tempura (August 2023) · hamo kaiseki: hamo hot pot with mizuna and yuba, hamo and tuna sashimi with plum (August 2024) · lunch: soba set meals and limited daily sets, e.g. chicken tempura (June 2025); Miyabi lunch ¥2,500 (April 2026); gozen (March 2026) · duck shabu-shabu kaiseki with Kyoto vegetables (August 2025)',
    website: null, gmaps: gm('京料理 加茂川 仏光寺'), menu_url: TB,
    notes: '[Kyoto kaiseki · Bukkoji, since 2018] A quiet Kyoto-cuisine restaurant near Shijo-Karasuma with a counter and private rooms, popular for business lunches and groups: hamo kaiseki in summer, fugu in winter, duck hot pot year-round, and good-value lunch sets from soba to the ¥2,500 Miyabi. A vegetarian course on request. No service charge.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed), 30 years in Japanese cuisine (Tabelog)', 'Owner (unnamed), described as warm (October 2026)'], origin: null,
      background: 'Per Tabelog: a Kyoto-cuisine restaurant opened in March 2018 whose head chef has 30 years of experience in Japanese cooking, sourcing seasonal ingredients from across the country.',
      philosophy: null, specialty: 'Seasonal kaiseki; hamo and duck hot pots.',
      anecdotes: [
        { text: 'An April 2026 diner hosting a client found the Miyabi lunch laid out under lids in a private room on arrival.', source: R + 'B496488376/' },
        { text: 'An October 2026 organiser praised how smoothly a last-minute change in numbers and the group bill were handled.', source: R + 'B538423594/' },
        { text: 'A July 2025 diner was welcomed with peach vinegar before the meal.', source: R + 'B509901708/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、下京区仏光寺通柳馬場西入東前町406-1、地下鉄四条駅5番出口から徒歩5分、毎日11:00〜14:00 (L.O. 13:30) と17:00〜22:00 (L.O. 21:30)、予約可 (昼の定食は不可)、サービス料・チャージなし、カード・電子マネー可、24席 (カウンター6と個室)、禁煙、2018年3月1日オープン、料理長は和食30年、夏の hotaru-ika しゃぶしゃぶ、冬のふぐ、通年の鴨鍋、6〜9月の鱧しゃぶと鱧会席、13品のコース9,000円、12品のコース6,300円、ベジタリアンのコース。口コミ (2023年8月〜2026年10月、英語): 5,000円のコース、鱧会席、鴨しゃぶの会席、昼のそばの定食と限定の定食、Miyabi ランチ2,500円、御膳、出汁がおいしい、店主の温かいもてなし。',
      confidence: 'medium', sources: [TB, R + 'B469680471/', R + 'B473528744/', R + 'B475866064/', R + 'B483578960/', R + 'B496488376/', R + 'B509440834/', R + 'B509901708/', R + 'B520585888/', R + 'B525147864/', R + 'B534388380/', R + 'B534776728/', R + 'B538423594/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book courses ahead; lunch sets are walk-in. Menu with photos (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区仏光寺通柳馬場西入東前町406-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001404, 135.763562); cross-checked: GSI 京都府京都市下京区東前町406番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B496488376/'],
    price_note: 'Course prices from Tabelog (tax included); lunch from April 2026.', last_checked: TODAY, items: [
      it('', '', 'Hana course (13 dishes)', '¥9,000', 'Courses', 'no', 'no', '3–20 people; Tabelog.', 'hana'),
      it('', '', 'Moon course (12 dishes)', '¥6,300', 'Courses', 'no', 'no', '3–20 people; Tabelog.', 'tsuki'),
      it('', '', 'Vegetarian course', '¥9,000', 'Courses', 'ask', 'ask', 'By phone; 3–20 people; Tabelog.', 'vegetarian'),
      it('', '', 'Miyabi lunch', '¥2,500', 'Lunch', 'ask', 'no', 'Sashimi and simmered dishes; April 2026.', 'miyabi'),
    ] }, {
    cuisine: '和食30年の料理長の京料理と会席。夏の hotaru-ika しゃぶしゃぶ、冬のふぐ、通年の鴨鍋、6〜9月の鱧しゃぶと鱧会席。13品の Hana コース9,000円、12品の Moon コース6,300円、ベジタリアンのコース (食べログ)・はまちの刺身と天ぷらの5,000円のコース (2023年8月)・水菜と湯葉の鱧鍋、鱧とまぐろの梅肉添えの刺身の鱧会席 (2024年8月)・昼はそばの定食と数量限定の定食、例えば鶏の天ぷら (2025年6月)、Miyabi ランチ2,500円 (2026年4月)、御膳 (2026年3月)・京野菜と鴨しゃぶの会席 (2025年8月)',
    neighborhood: '仏光寺通、四条の南。四条・烏丸',
    gf_detail: 'グルテンフリーではない。コースや昼の定食に天ぷら、昼はそばの定食 (2023〜2025年の口コミ)。',
    vegan_detail: '要確認。ベジタリアンのコース (9,000円、3〜20名、電話で相談) がある (食べログ)。料理の要の出汁については情報がない (2026年3月)。',
    notes: '[京料理・仏光寺、2018年から] 四条烏丸近くの、カウンターと個室のある静かな京料理店。接待の昼食や宴会に人気。夏は鱧会席、冬はふぐ、通年の鴨鍋、昼はそばの定食から2,500円の Miyabi ランチまでお手頃。ベジタリアンのコースも相談可。サービス料なし。',
  });
}

save();
