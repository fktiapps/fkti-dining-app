// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 93.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - cam — existence unclear: an occasional pop-up at a Kawabata-Sanjo address whose days are only on Instagram; one review
//     (August 2026)
//   + かねみつ Kanemitsu (omakase Kyoto cuisine in a 100-year-old machiya by Shijo-Shinmachi; chef from Wakuden; since 2024)
//   - 粉もん屋八 東山駅前店 — chain: 粉もん屋八, 60+ shops on Tabelog (Nara, Osaka, Tokyo, Saitama, Hokkaido and more)
//   + 京うどん 維新 Kyo Udon Ishin (bonito-dashi udon below Kodaiji, open to 21:00; since January 2025)
//   - AWOMB こころみ — no 2025–26 review that clearly describes this café: the only recent review (July 2026) describes AWOMB's
//     hand-rolled sushi — flagged
//   + RENARD BLEU (French lunch and dinner courses off Muromachi-Rokkaku; reopened here December 2024)
//   + 炭火酒場 イコ=ル Sumibi Sakaba Ikoru (straw-grilled bonito and fresh fish izakaya off Rokkaku; since March 2025)
//   + KeFU STAND (coffee and craft-beer truck below the Yasaka pagoda)
//   Brand checks: none in data or queue-status by name (queue-status 維新 hit is 維新號, a different chain); a Tabelog search for
//   イコ=ル finds no other Kyoto shop (the other "Ikoru" names elsewhere are unrelated); AWOMB has four Kyoto listings, none in data.
//   None is a THAN or WILL brand; none is in a hotel.
//   Service charges from Tabelog's Japanese original: かねみつ 「税サ込みで、価格表記しております。」; RENARD BLEU
//   「アラカルトの場合チャージ料500円」; the others have no section.
//   Pins (checked against main, hidden records included): all five ≥ 21m from every record; no offsets.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-93');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26045579', 'existence unclear: cam is an occasional pop-up (one August 2026 review: "operating as a pop-up"); Tabelog gives no hours and points to Instagram for days and times');
skip('26027423', 'chain: 粉もん屋八, 60+ shops on Tabelog across Nara, Osaka, Tokyo, Saitama, Shiga and Hokkaido');
skip('26031887', 'no 2025–26 review that clearly describes AWOMB こころみ (a café for Japanese sweets): the only recent review (July 2026) describes AWOMB\'s hand-rolled sushi');

// ================================================================ かねみつ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042105/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '22:00']);
  put({
    id: 'kyoto_kanemitsu_shinmachi', name: 'かねみつ (Kanemitsu)', category: 'OMNI',
    lat: 35.002694, lng: 135.756522, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An omakase Kyoto course with soy sauce, dashi, fu and tempura (2025–26 reviews); allergies must be given when booking (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood-led omakase course (2025–26 reviews).',
    hours_raw: 'Mon, Tue, Thu–Sun and holidays 18:00–22:00 (earliest entry 17:00 on request); closed Wednesdays, with some irregular days (Tabelog). Allergies and preferences must be given when booking; same-day requests may not be met (Tabelog). Prices include tax and service (Tabelog Japanese original 「税サ込みで、価格表記しております。」). Cards and e-money; no QR (Tabelog). 20 seats at four tables of four, no counter, facing an open kitchen; non-smoking, with a smoking spot in the courtyard (Tabelog; 2025 reviews). In a renovated machiya over 100 years old on Shinmachi south of Shijo (September 2025 review).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Shinmachi — 5 min from Shijo or Karasuma Stn',
    cuisine: 'A single omakase Kyoto course, about ¥20,000–30,000: barracuda sushi, persimmon with rikyu-fu, hamo and Kujo-negi tempura, shiro-amadai steamed with matsutake, Lake Biwa eel with Manganji pepper (September 2025); clams with onion purée, fire-grilled firefly squid, sardine pressed sushi (April 2026); sweet-potato crab and pumpkin tofu (August 2026); sake pairings; leftover rice made into onigiri to take home (November 2025)',
    website: null, gmaps: gm('かねみつ 新町四条'), menu_url: null,
    notes: '[Kyoto cuisine · Shijo-Shinmachi] A high-ceilinged century-old machiya with only tables around an open kitchen, where chef Hideaki Kanemitsu, trained at Wakuden, serves one generous seasonal omakase. About ¥20,000–30,000, tax and service included.',
    chef_bio: { chef_name: 'Hideaki Kanemitsu (September 2025 review)', roles: ['Owner-chef'], origin: null,
      background: 'Trained at Wakuden (August 2026 review); opened in October 2024 (September 2025 review) in a machiya renovated from one over 100 years old. Friendly despite being busy (April 2026 review).',
      philosophy: null,
      specialty: 'Seasonal omakase Kyoto course.',
      anecdotes: [
        { text: 'A November 2025 solo diner was sent off with an onigiri made from the leftover rice.', source: R + 'B517583178/' },
        { text: 'An August 2026 regular rides the Shinkansen two hours for it, a third visit, and singles out the sweet-potato crab.', source: R + 'B504505109/' },
        { text: 'A September 2025 first-timer, turned away twice when it was fully booked, finally got in for the omakase.', source: R + 'B514213767/' },
      ],
      japanese_sources_summary: '食べログ: かねみつ、日本料理、下京区、四条新町の南、地下鉄四条駅・阪急烏丸駅から徒歩5分、月・火・木〜日・祝日 18:00〜22:00、水曜休み、不定休あり、アレルギーは予約時に、税サ込みの価格、カード・電子マネー可、QR 不可、20席 (4人のテーブル4つ)、禁煙 (中庭に喫煙所)。口コミ (2025〜2026年、英語): Kanemitsu Hideaki さん、Wakuden 出身、2024年10月オープン、築100年を超える町家、おまかせのコースのみ、オープンキッチン、カウンターなし、ペアリング、残りのご飯でおにぎりのお土産。',
      confidence: 'medium', sources: [TB, R + 'B502414559/', R + 'B504505109/', R + 'B510757499/', R + 'B514213767/', R + 'B517583178/', R + 'B525475108/', R + 'B534199277/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Give allergies when booking (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区新町通四条下ル四条町368',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.002694, 135.756522); cross-checked: GSI 京都府京都市下京区四条町368番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514213767/'],
    price_note: 'No course price stated; reviews give ¥20,000–30,000 a head, tax and service included.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '', 'Courses', 'ask', 'no', 'September 2025 review (course only).', 'omakase'),
    ] }, {
    cuisine: 'おまかせの京料理のコースのみ、20,000〜30,000円ほど: カマスの寿司、柿と rikyu-fu、hamo と Kujo ねぎの揚げ物、shiro-amadai と松茸の蒸し物、Lake Biwa の鰻と Manganji の唐辛子 (2025年9月)、貝と玉ねぎのピュレ、炙ったホタルイカ、いわしの押し寿司 (2026年4月)、さつまいもと蟹、かぼちゃ豆腐 (2026年8月)、日本酒のペアリング、残りのご飯でおにぎりのお土産 (2025年11月)',
    neighborhood: '四条新町。四条駅か烏丸駅から徒歩5分',
    gf_detail: '要確認。醤油、出汁、麩、揚げ物のあるおまかせの京料理 (2025〜26年の口コミ)。アレルギーは予約時に (食べログ)。',
    vegan_detail: 'ヴィーガン不可。魚介中心のおまかせのコース (2025〜26年の口コミ)。',
    notes: '[京料理・四条新町] 築100年を超える天井の高い町家の、オープンキッチンを囲むテーブルだけの店。Wakuden で修業した料理人 Kanemitsu Hideaki さんの季節のおまかせのコース。20,000〜30,000円ほど、税サ込み。',
  });
}

// ================================================================ 京うどん 維新
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042273/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '21:00']);
  put({
    id: 'kyoto_kyo_udon_ishin', name: '京うどん 維新 (Kyo Udon Ishin)', category: 'OMNI',
    lat: 34.999224, lng: 135.780177, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito dashi, meat udon, shrimp tempura (2025–26 reviews).',
    hours_raw: 'Daily 11:00–21:00 (L.O. 20:20) (Tabelog). Cards, e-money and PayPay (Tabelog). 35 seats at tables; groups of 20 or more can book the room; non-smoking (Tabelog). Staff from overseas, friendly (January 2026 review). 10 min from the Higashiyama Yasui bus stop, near Kodaiji and Kiyomizu (Tabelog; 2025–26 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kodaiji–Kiyomizu — 10 min from Higashiyama Yasui bus stop',
    cuisine: 'Udon in a bonito dashi from Kyoto ingredients (Tabelog): the bonito-flake udon ¥1,200, shaved at the table, with a mixed-rice set (April and November 2025); nabeyaki udon ¥1,500 with shrimp tempura and meat (January and July 2026); meat udon, chilli udon (2025); also fried rice, pasta, ramen and gyudon (2025); about ¥1,200–2,500',
    website: null, gmaps: gm('京うどん 維新 高台寺'), menu_url: null,
    notes: '[Udon · Kodaiji] A traditional-looking udon house near Kodaiji, open to 9 pm when the area shuts early: bonito-flake udon shaved at the table and bubbling nabeyaki udon, at sightseeing prices. Reviews are mixed on the noodles.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 1 January 2025 (Tabelog), focusing on Kyoto ingredients and bonito dashi (Tabelog shop text).',
      philosophy: 'Udon with a rich bonito dashi from Kyoto ingredients (Tabelog shop text).',
      specialty: 'Bonito-flake udon; nabeyaki udon.',
      anecdotes: [
        { text: 'A January 2026 diner found it the only place still open after 8 pm near Kiyomizu and warmed up over nabeyaki udon.', source: R + 'B520340497/' },
        { text: 'An April 2025 guest watched the last of the bonito shaved at the table before the broth was poured.', source: R + 'B504469499/' },
        { text: 'An October 2025 diner found the udon soft and crumbly with only two part-timers running the room.', source: R + 'B515739502/' },
      ],
      japanese_sources_summary: '食べログ: 京うどん 維新、うどん・日本料理・すき焼き、東山区桝屋町362-5、東山安井バス停から徒歩10分、毎日 11:00〜21:00 (L.O. 20:20)、カード・電子マネー・PayPay 可、35席、20名以上で貸切、禁煙、2025年1月1日オープン、京都の食材と鰹出汁のうどん (紹介文、英訳)。口コミ (2025〜2026年、英語): 鰹節のうどん1,200円、鍋焼きうどん1,500円、肉うどん、唐辛子のうどん、チャーハンやパスタ、ラーメン、牛丼も、海外のスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B502766567/', R + 'B504469499/', R + 'B513145160/', R + 'B515739502/', R + 'B517289804/', R + 'B520340497/', R + 'B531317802/', R + 'B533040403/'] },
    cultural_comfort: { level: 'english', note: 'Staff from overseas; many overseas guests (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区桝屋町362-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.999224, 135.780177); cross-checked: GSI 京都府京都市東山区桝屋町362番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504469499/', R + 'B520340497/'],
    price_note: 'Prices from April 2025 and January 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Bonito-flake udon', '¥1,200', 'Udon', 'no', 'no', 'April 2025 review.', 'katsuobushi'),
      it('', '', 'Nabeyaki udon', '¥1,500', 'Udon', 'no', 'no', 'January 2026 review.', 'nabeyaki'),
    ] }, {
    cuisine: '京都の食材の鰹出汁のうどん (食べログ): 席で削る鰹節のうどん1,200円、混ぜご飯のセット (2025年4月・11月)、海老の揚げ物と肉の鍋焼きうどん1,500円 (2026年1月・7月)、肉うどん、唐辛子のうどん (2025年)、チャーハン、パスタ、ラーメン、牛丼も (2025年)、1,200〜2,500円ほど',
    neighborhood: '高台寺と清水の間。東山安井バス停から徒歩10分',
    gf_detail: 'グルテンフリー不可。小麦のうどん (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鰹出汁、肉うどん、海老の揚げ物 (2025〜26年の口コミ)。',
    notes: '[うどん・高台寺] 高台寺のそばの和の構えのうどん屋。周りが早く閉まる中、夜9時まで。席で削る鰹節のうどんと煮えたつ鍋焼きうどん、観光地の値段。麺の評価は分かれる。',
  });
}

// ================================================================ RENARD BLEU
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26042303/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://renard-bleu.jp/';
  const D = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_renard_bleu_muromachi', name: 'RENARD BLEU', category: 'OMNI',
    lat: 35.007541, lng: 135.757346, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French courses with sauces, bread and a lobster pasta (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of lobster, duck, quail and fish (2025–26 reviews).',
    hours_raw: 'Tue–Sun 11:30–15:00 (L.O. 13:30) and 17:30–22:00 (L.O. 21:00; Sundays and holidays 20:30); closed Mondays (Tabelog). A la carte cover ¥500 (Tabelog Japanese original 「アラカルトの場合チャージ料500円」). 26 seats; private room; non-smoking (Tabelog). Basement of Gran Revry Muromachi-Rokkaku; moved here from Anekoji (Tabelog; 2025 reviews).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Muromachi-Rokkaku — 10 min from Karasuma-Oike or Shijo Stn',
    cuisine: 'French courses with a choice of soup, main and dessert: the lunch Course A, ¥4,400 in July 2026, with an appetizer platter (salmon marinade, fried fish, prosciutto), chilled peach or pumpkin soup, and mains such as duck, lobster with a creamy lobster pasta or generous fish (2025–26); grilled quail, cheese (August 2025); about ¥3,000–5,000 at lunch, ¥10,000–15,000 at dinner',
    website: WEB, gmaps: gm('RENARD BLEU 室町六角'), menu_url: null,
    notes: '[French · Muromachi-Rokkaku] A long-loved Kyoto French restaurant, reopened in a basement off Muromachi-Rokkaku, known for generous, good-value lunch courses — appetizer platter, seasonal chilled soup, choice of main — and artwork and flowers in a calm room.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Previously on Anekoji, earlier near Karasuma, and once also in Kitayama (2025 reviews); at this address since 13 December 2024 (Tabelog).',
      philosophy: null,
      specialty: 'Lunch Course A; chilled seasonal soups.',
      anecdotes: [
        { text: 'A July 2026 visitor back after ten years found the ¥4,400 lunch still the best-value French in town, though the lobster was a touch overcooked.', source: R + 'B532709102/' },
        { text: 'A May 2025 diner returning after a decade found a friend\'s fish main about twice the expected size.', source: R + 'B507301595/' },
      ],
      japanese_sources_summary: '食べログ: RENARD BLEU、フレンチ、中京区、烏丸御池と四条烏丸の間のビルの地下、烏丸御池駅・四条烏丸駅から徒歩10分、火〜日 11:30〜15:00 (L.O. 13:30)・17:30〜22:00 (L.O. 21:00、日・祝日は20:30)、月曜休み、アラカルトはチャージ料500円、26席、個室あり、禁煙、2024年12月13日オープン。口コミ (2025〜2026年、英語): 以前の店から移転、昼の Course A 4,400円 (2026年7月)、前菜の盛り合わせ、冷たい桃やかぼちゃのスープ、鴨やオマール、うずら、量の多いメイン。',
      confidence: 'medium', sources: [TB, WEB, R + 'B507301595/', R + 'B511925271/', R + 'B513265966/', R + 'B514334896/', R + 'B525244743/', R + 'B528035741/', R + 'B529166783/', R + 'B532709102/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; course choices explained at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町通六角西入ル玉蔵町123 グランレブリー室町六角 B1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.007541, 135.757346); cross-checked: GSI 京都府京都市中京区玉蔵町123番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532709102/'],
    price_note: 'Lunch price from a July 2026 review (tax included).', last_checked: TODAY, items: [
      it('', '', 'Lunch Course A', '¥4,400', 'Lunch', 'ask', 'no', 'July 2026 review.', 'course_a'),
    ] }, {
    cuisine: 'スープ、メイン、デザートを選べるフレンチのコース: 昼の Course A は2026年7月で4,400円、前菜の盛り合わせ (サーモンのマリネ、魚のフライ、生ハム)、冷たい桃やかぼちゃのスープ、鴨、オマールとクリームのパスタ、量の多い魚などのメイン (2025〜26年)、うずらのグリル、チーズ (2025年8月)、昼は3,000〜5,000円、夜は10,000〜15,000円ほど',
    neighborhood: '室町六角。烏丸御池駅か四条駅から徒歩10分',
    gf_detail: '要確認。ソース、パン、オマールのパスタのあるフレンチのコース (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。オマール、鴨、うずら、魚のコース (2025〜26年の口コミ)。',
    notes: '[フレンチ・室町六角] 長く愛される京都のフレンチ。室町六角の地下に移って再開。前菜の盛り合わせ、季節の冷たいスープ、選べるメインのお得で量の多い昼のコース。絵と花のある落ち着いた店。',
  });
}

// ================================================================ 炭火酒場 イコ=ル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26042567/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '24:00']); const WE = day(['16:00', '24:00']);
  put({
    id: 'kyoto_sumibi_sakaba_ikoru', name: '炭火酒場 イコ=ル (Sumibi Sakaba Ikoru)', category: 'OMNI',
    lat: 35.007769, lng: 135.757457, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Straw-grilled bonito with salt or ponzu and sashimi may suit; croquettes, gratin and baguette are wheat (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and charcoal-grill izakaya (2026 reviews).',
    hours_raw: 'Mon–Fri and the day before a holiday 17:00–24:00; Sat, Sun and holidays 16:00–24:00 (food L.O. 23:00); closing days may vary (Tabelog). A 22:00 booking has 23:00 last orders (Tabelog). Staff take orders at the table (February 2026 review). Cards and PayPay; no e-money (Tabelog). 60 seats over two floors, with counter, tables and tatami; private rooms; non-smoking with a smoking area (Tabelog; 2026 reviews). Off Rokkaku west of Muromachi, 5–6 min from Shijo or Karasuma (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Rokkaku-Muromachi — 5–6 min from Shijo or Karasuma Stn',
    cuisine: 'Charcoal and straw-grilled izakaya: straw-grilled bonito ¥1,560, seafood gratin with bread ¥1,380, clay-pot rice with grilled eel (February 2026); Kawachi duck from Tsumura in Osaka, mussels and oysters in cream sauce (May 2026); daily sashimi platters (October 2026); Kamo aubergine dengaku, grilled kampachi, crab-cream croquettes, sake-steamed clams; an original sake blend and Kyoto sake; about ¥4,000–8,000',
    website: null, gmaps: gm('炭火酒場 イコ=ル 六角'), menu_url: null,
    notes: '[Izakaya · Rokkaku-Muromachi] A stylish two-floor townhouse izakaya, open since March 2025, for straw-grilled bonito and Kawachi duck, very fresh sashimi platters and Kyoto vegetables, with a house sake blend and private rooms. About ¥4,000–8,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 25 March 2025 (Tabelog). Known for straw-grilled dishes (July 2026 review).',
      philosophy: null,
      specialty: 'Straw-grilled bonito; sashimi platter.',
      anecdotes: [
        { text: 'A May 2026 group, told the sakura-shrimp croquette was out, accepted crab instead and found the crab-cream croquette amazing.', source: R + 'B527355975/' },
        { text: 'A July 2026 Gion Matsuri visitor ordered from a special festival menu with seasonal hamo.', source: R + 'B535208664/' },
      ],
      japanese_sources_summary: '食べログ: 炭火酒場 イコ=ル、居酒屋・魚介料理・バル、中京区六角通室町西入ル玉蔵町127-4、地下鉄四条駅・阪急烏丸駅から徒歩5〜6分、月〜金・祝日の前日 17:00〜24:00、土日・祝日 16:00〜24:00 (L.O. 23:00)、休みは変わる場合あり、カード・PayPay 可、電子マネー不可、60席、個室あり、禁煙 (喫煙所あり)、2025年3月25日オープン。口コミ (2026年、英語): カツオの藁焼き1,560円、海鮮グラタン1,380円、鰻の土鍋ご飯、Tsumura の Kawachi の鴨、刺身の盛り合わせ、Kamo なすの田楽、カニクリームコロッケ、オリジナルの日本酒。',
      confidence: 'medium', sources: [TB, R + 'B522437706/', R + 'B522924894/', R + 'B527355975/', R + 'B527963390/', R + 'B531013150/', R + 'B535208664/', R + 'B537406232/', R + 'B538116492/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff take orders at the table (February 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区六角通室町西入ル玉蔵町127-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007769, 135.757457); cross-checked: GSI 京都府京都市中京区玉蔵町127番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522437706/'],
    price_note: 'Prices from a February 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Straw-grilled bonito', '¥1,560', 'Grill', 'ask', 'no', 'February 2026 review; salt or ponzu.', 'warayaki'),
      it('', '', 'Seafood gratin with bread', '¥1,380', 'A la carte', 'no', 'no', 'February 2026 review.', 'gratin'),
    ] }, {
    cuisine: '炭火と藁焼きの居酒屋: カツオの藁焼き1,560円、パンつきの海鮮グラタン1,380円、焼き鰻の土鍋ご飯 (2026年2月)、大阪の Tsumura の Kawachi の鴨、ムール貝と牡蠣のクリーム煮 (2026年5月)、日替わりの刺身の盛り合わせ (2026年10月)、Kamo なすの田楽、カンパチの焼き物、カニクリームコロッケ、あさりの酒蒸し、オリジナルブレンドの日本酒と京都の日本酒、4,000〜8,000円ほど',
    neighborhood: '六角室町。四条駅か烏丸駅から徒歩5〜6分',
    gf_detail: '要確認。塩かポン酢のカツオの藁焼きや刺身は合う可能性がある。コロッケ、グラタン、パンは小麦 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚と炭火焼きの居酒屋 (2026年の口コミ)。',
    notes: '[居酒屋・六角室町] 2025年3月オープンの2階建てのおしゃれな町家の居酒屋。カツオと Kawachi の鴨の藁焼き、新鮮な刺身の盛り合わせ、京都の野菜、オリジナルの日本酒、個室も。4,000〜8,000円ほど。',
  });
}

// ================================================================ KeFU STAND
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039993/'; const R = TB + 'dtlrvwlst/';
  const D = day(['08:00', '19:00']);
  put({
    id: 'kyoto_kefu_stand_yasaka', name: 'KeFU STAND', category: 'OMNI',
    lat: 34.9982, lng: 135.779787, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee drinks and craft beer (2025–26 reviews); beer is usually barley.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Coffee and craft beer; lattes and whipped cream are dairy (2026 reviews).',
    hours_raw: 'Daily 8:00–19:00; hours may change (Tabelog). A coffee truck with an open space and benches outside — no shelter in rain (February and March 2026 reviews). One barista makes each drink (February 2026 review). Cards, e-money and QR (Tabelog). Below the Yasaka pagoda on the way to Kiyomizu (Tabelog; March 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yasaka pagoda, below Kiyomizu',
    cuisine: 'Coffee and craft beer from a truck: caramel latte and café mocha with whipped cream (February 2026), latte art (March 2026); craft beer such as "Shuukyuu 6-nichi" (May 2025; March 2026); under ¥1,000',
    website: null, gmaps: gm('KeFU STAND 八坂'), menu_url: null,
    notes: '[Coffee & craft beer · Yasaka] A stylish coffee truck with outdoor benches below the Yasaka pagoda: careful lattes from one barista and craft beer for a break on the climb to Kiyomizu, from 8 am. Under ¥1,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A food truck and open space by the Yasaka pagoda; one person makes each drink (February 2026 review).',
      philosophy: null,
      specialty: 'Lattes; craft beer.',
      anecdotes: [
        { text: 'A May 2025 climber stopped on the stairs to Kiyomizu for a craft beer named "Shuukyuu 6-nichi" (six-day weekend).', source: R + 'B506725157/' },
        { text: 'A March 2026 visitor waited here for pottery to finish and found the latte art almost too cute to drink.', source: R + 'B524487093/' },
      ],
      japanese_sources_summary: '食べログ: KeFU STAND、カフェ、東山区八坂上町370、毎日 8:00〜19:00、カード・電子マネー・QR 可。口コミ (2025〜2026年、英語): 八坂の塔のそばのキッチンカーと屋外のベンチ、バリスタがひとりでひとつずつ、キャラメルラテ、カフェモカ、ラテアート、クラフトビール、雨の日は屋根なし。',
      confidence: 'low', sources: [TB, R + 'B506725157/', R + 'B522489146/', R + 'B524487093/', R + 'B524899121/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Outdoor seating only (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂上町370',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (34.998200, 135.779787); cross-checked: GSI 京都府京都市東山区八坂上町370番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522489146/'],
    price_note: 'No prices in reviews; under ¥1,000 (Tabelog reviews).', last_checked: TODAY, items: [
      it('', '', 'Caramel latte / café mocha', '', 'Coffee', 'ask', 'no', 'February 2026 review.', 'latte'),
      it('', '', 'Craft beer', '', 'Beer', 'ask', 'ask', 'May 2025 and March 2026 reviews.', 'beer'),
    ] }, {
    cuisine: 'キッチンカーのコーヒーとクラフトビール: ホイップクリームのキャラメルラテとカフェモカ (2026年2月)、ラテアート (2026年3月)、「Shuukyuu 6-nichi」などのクラフトビール (2025年5月、2026年3月)、1,000円以内',
    neighborhood: '八坂の塔、清水の下',
    gf_detail: '要確認。コーヒーとクラフトビール (2025〜26年の口コミ)。ビールはふつう大麦。',
    vegan_detail: '要確認。コーヒーとクラフトビール。ラテとホイップクリームは乳製品 (2026年の口コミ)。',
    notes: '[コーヒーとクラフトビール・八坂] 八坂の塔の下の屋外のベンチのあるおしゃれなキッチンカー。バリスタがひとりで丁寧に淹れるラテと、清水への坂の休憩にクラフトビール。朝8時から。1,000円以内。',
  });
}

save();
