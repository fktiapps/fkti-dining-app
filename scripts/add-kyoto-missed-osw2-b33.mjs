// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 33.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + 鮨 仙太 Sushi Senta (omakase sushi counter at Takatsuji-Muromachi; reservations only)
//   + Agri アグリ (no-menu "kappo-style" Italian bar near Kyoto-Shiyakusho-mae; soup-curry lunches)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + にこみ 鈴や Nikomi Suzuya (day-drinking oden and nikomi izakaya near Marutamachi; moved from Oike-dori, here since 2025)
//   - サー・トーマス・リプトン 三条本店 (26004921): chain — Sir Thomas LIPTON tearooms (三条本店, 四条店 and ポルタ店 in the crawl);
//     coordinator ruling (batch 13) to skip it.
//   + 香港飲茶 星街 Hong Kong Yumcha Star Street (Hong Kong dim sum at Karasuma; since 2019) — one sister, 河原町三条店 (not in data).
//   None of the four drafted is in data/kyoto.json: grep by id, name (仙太/Senta — 仙太郎 is an unrelated sweets maker — Agri/アグリ,
//   鈴や/Suzuya, 星街) and address (繁昌町295-1, 尾張町208, 鍵屋町74, 鯉山町532) found none; 鮨 仙太 shares a building and floor with
//   kyoto_trattoria_leone (see pin).
//   Service charges: Agri 「席料￥330(ディナータイムのみ）」 (a ¥330 seat charge at dinner); none listed for the others.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-33');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26004921', 'chain: Sir Thomas LIPTON tearooms (三条本店, 四条店, ポルタ店 in the crawl); skip per coordinator ruling (batch 13)');

// ================================================================ 鮨 仙太
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26013453/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '13:00'], ['17:30', '21:00']); const WE = day(['12:00', '13:00']);
  put({
    id: 'kyoto_sushi_senta', name: '鮨 仙太 (Sushi Senta)', category: 'OMNI',
    lat: 35.000276, lng: 135.757166750317, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase of small dishes and nigiri seasoned with soy; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi omakase (Tabelog).',
    hours_raw: 'Monday and Wednesday–Friday: lunch from 11:30 (listed 11:30–13:00) and dinner 17:30–21:00; Saturday, Sunday and holidays: lunch only, from 12:00; closed Tuesday (Tabelog). Reservations required for every sitting; omakase only, at lunch too, with extra pieces on request (Tabelog). Cash only — no cards, e-money or QR (Tabelog). No service charge listed (Tabelog). 10 counter seats; private hire possible; non-smoking (Tabelog). On the 1st floor of 京都1号館ビル on Takatsuji-dori west of Muromachi, 355 m from Shijo Stn (Tabelog).',
    hours: { 0: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Takatsuji-Muromachi — 355 m from Shijo Stn',
    cuisine: 'Omakase sushi: several small dishes, then nigiri, with extra pieces on request (Tabelog; reviews) · e.g. crab, shirako, karasumi wrapped in mochi and nori, monkfish liver, oysters sent direct from fishermen, hairy crab, seaweed-wrapped sardines, tuna (2023–2026 reviews) · sake chosen by the owner to match; the course is thought to be about ¥16,000–17,000, about ¥18,000 a head with two drinks (April 2026)',
    website: null, gmaps: gm('鮨 仙太 高辻室町'), menu_url: TB,
    notes: "[Sushi · Takatsuji-Muromachi, a friendly omakase counter] A ten-seat sushi counter south of Shijo where the chef's warmth is part of the draw. The omakase opens with a run of generous small dishes — crab, shirako, karasumi wrapped in mochi — before the nigiri, with sake picked by the owner to match. Expect roughly ¥15,000–19,000 with drinks; lunch is omakase too. Reservations required; cash only. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef not named'], origin: null,
      background: 'Per Tabelog: reservations at all times and omakase only, lunch and dinner. Reviewers from 2023 to 2026 praise the owner’s personality and sake pairings and note the many small dishes served before the nigiri.',
      philosophy: null,
      specialty: 'Omakase of small dishes and nigiri.',
      anecdotes: [
        { text: 'A November 2025 guest on a second visit had karasumi wrapped in mochi and nori.', source: R + 'B515133263/' },
        { text: 'An April 2026 regular had oysters sent direct from fishermen and hairy crab.', source: R + 'B527951684/' },
        { text: 'A March 2023 visitor rang on a whim for the seaweed-wrapped sardines and got a seat the same Sunday.', source: R + 'B463671659/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 仙太、寿司、下京区高辻通室町西入繁昌町295-1 京都1号館ビル1F、四条駅から355m、月・水〜金 11:30〜13:00・17:30〜21:00、土日祝 12:00〜13:00、火曜定休、昼夜とも完全予約制でおまかせのみ (追加注文可)、カード・電子マネー・QR 不可、10席、貸切可、禁煙。口コミ (2023〜2026年、英語): 店主の人柄、日本酒の合わせ、握りの前に一品が多い、蟹、白子、からすみの餅巻き、あん肝、漁師直送の牡蠣、毛蟹、鰯の海苔巻き、コースは16,000〜17,000円ほど、2杯飲んで18,000円ほど (2026年4月)。',
      confidence: 'medium', sources: [TB, R + 'B461437452/', R + 'B463671659/', R + 'B470579897/', R + 'B515133263/', R + 'B515651474/', R + 'B517104522/', R + 'B521550970/', R + 'B523108414/', R + 'B526032168/', R + 'B526873189/', R + 'B527918972/', R + 'B527951684/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; omakase only; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高辻通室町西入繁昌町295-1 京都1号館ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.000321, 135.757167); cross-checked: GSI 京都府京都市下京区繁昌町295番地 (lot) 28m; the Tabelog point was 1m from kyoto_trattoria_leone (same building and floor), so moved about 5m south to keep the pins apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526873189/', R + 'B526032168/'],
    price_note: 'From 2024–2026 reviews; no prices published.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (estimated by a reviewer)', '', 'Course', 'ask', 'no', 'About ¥16,000–17,000 (April 2026).', 'omakase'),
      it('', '', 'Karasumi wrapped in mochi and nori', '', 'Small dishes', 'no', 'no', '', 'karasumi_mochi'),
    ] }, {
    cuisine: 'おまかせの寿司: 一品料理がいくつか出てから握り、追加も可 (食べログ、口コミ)・例: 蟹、白子、からすみの餅と海苔巻き、あん肝、漁師直送の牡蠣、毛蟹、鰯の海苔巻き、鮪 (2023〜2026年の口コミ)・料理に合わせて店主が選ぶ日本酒。コースは16,000〜17,000円ほど、2杯飲んで1人18,000円ほど (2026年4月)',
    neighborhood: '高辻室町。四条駅から355m',
    gf_detail: '要確認。醤油で味付けする一品料理と握りのおまかせ。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司のおまかせ (食べログ)。',
    notes: '[寿司・高辻室町、人柄の温かいおまかせのカウンター] 四条の南のカウンター10席の寿司屋。大将の人柄も魅力のひとつ。おまかせは蟹、白子、からすみの餅巻きなどたっぷりの一品から始まり握りへ、日本酒は店主が料理に合わせて選ぶ。飲んで15,000〜19,000円ほど。昼もおまかせ。完全予約制、現金のみ。火曜休み。',
  });
}

// ================================================================ Agri
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025981/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['12:00', '14:30'], ['17:30', '24:00']); const WE = day(['17:30', '24:00']);
  put({
    id: 'kyoto_agri_bistro', name: 'Agri (アグリ)', category: 'OMNI',
    lat: 35.013454250332714, lng: 135.76562870687852, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dishes are cooked to order from the day’s ingredients, so ask; the lunch soup curry and hamburg are not marked gluten-free (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Dishes are made to order from a blackboard of ingredients with many vegetables, but pork and seafood dominate (2026 reviews).',
    hours_raw: 'Weekday lunch 12:00–14:30 (last order 14:00); dinner from 17:30, last entry 24:00; no lunch at weekends and holidays; closed irregularly (Tabelog). Dinner carries a ¥330 seat charge (Tabelog’s Japanese original: 「席料￥330(ディナータイムのみ）」). Bookings via Tabelog; it fills quickly, and late bookings such as 22:00 are taken (January–July 2026). Usually run single-handed, so food can take a while (January 2026). 10 counter seats; cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). 395 m from Kyoto-Shiyakusho-mae Stn, on the 1st floor of クレール仲井 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Kyoto-Shiyakusho-mae Stn — 395 m',
    cuisine: 'A bistro without a menu: pick ingredients from the blackboard and the chef suggests the cooking, Italian in a kappo style (Tabelog; 2026 reviews) · signature aged roast of free-range Tokachi (Hokkaido) Dorobuta pork (Tabelog) · e.g. jamón, Akashi clams, whelk, shirako, pork terrine, plenty of vegetables, a truffle-topped cheesecake (2026 reviews) · weekday lunch: soup curry with a hamburg grilled to order ¥1,500 before toppings and drinks (April–October 2026)',
    website: null, gmaps: gm('Agri アグリ 京都 尾張町'), menu_url: TB,
    notes: "[Italian · near Kyoto City Hall, a no-menu counter] A ten-seat counter, guarded by little pig figurines, where there is no menu: choose from the blackboard of the day's ingredients and talk it through with the chef, who came from Yone-mura, before it is cooked your way. The aged Tokachi Dorobuta pork roast is the signature. Weekday lunch is soup curry (about ¥1,500). Open late for dinner; ¥330 seat charge. Book ahead.",
    chef_bio: { chef_name: null, roles: ['Owner-chef not named; usually works alone (January 2026)'], origin: null,
      background: 'Per Tabelog’s official introduction: free-range Dorobuta pork from Tokachi, Hokkaido, aged and grilled with care, and simple dishes of seasonal ingredients made to order from a blackboard. A July 2026 reviewer says the chef came from Yone-mura (よねむら) and describes it as Italian in a kappo style.',
      philosophy: 'Per Tabelog’s official introduction: a relaxed place where you need not watch the clock.',
      specialty: 'Aged Dorobuta roast; dishes cooked to order.',
      anecdotes: [
        { text: 'A July 2026 guest booked online for 22:00, found the counter empty and talked dishes through with the chef.', source: R + 'B532791002/' },
        { text: 'A January 2026 pair chose jamón, Akashi clams, whelk and shirako from the blackboard and let the chef suggest the cooking.', source: R + 'B520998936/' },
        { text: 'An October 2026 regular came back after the winter break for the soup curry with a fresh-grilled hamburg.', source: R + 'B518727246/' },
      ],
      japanese_sources_summary: '食べログ: Agri (アグリ)、バル・肉料理・ビストロ、中京区尾張町208 クレール仲井1F、京都市役所前駅から395m、平日ランチ12:00〜14:30 (L.O. 14:00)、ディナー17:30〜最終入店24:00、土日祝はランチなし、不定休、席料330円 (ディナーのみ)、カウンター10席、カード可、インボイス登録あり。公式紹介: 豚の置物、十勝の放牧豚「どろぶた」の熟成ロースト、季節の食材のシンプルな料理、店内の黒板の食材から好みの料理に。口コミ (2026年、英語): メニューのないビストロ、割烹スタイルのイタリアン、よねむら出身のシェフ、ワンオペ、平日昼はスープカレー1,500円、トリュフのチーズケーキ。',
      confidence: 'medium', sources: [TB, R + 'B518727246/', R + 'B520998936/', R + 'B524462302/', R + 'B525863992/', R + 'B526093298/', R + 'B527743968/', R + 'B529260451/', R + 'B529915408/', R + 'B532791002/', R + 'B535046579/', R + 'B535184396/', R + 'B537709014/'] },
    cultural_comfort: { level: 'japanese', note: 'No printed menu — ordering is a conversation with the chef.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区尾張町208 クレール仲井 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013454, 135.765629); cross-checked: GSI 京都府京都市中京区尾張町208番地 (lot) 51m; 14m from kyoto_shuchi_soba_nijo; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525863992/', TB],
    price_note: 'Lunch price from an April 2026 review; seat charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Soup curry with hamburg (weekday lunch)', '¥1,500', 'Lunch', 'ask', 'no', 'Toppings and drinks extra.', 'soup_curry'),
      it('', '', 'Aged Tokachi Dorobuta pork roast', '', 'Dinner', 'ask', 'no', '', 'dorobuta'),
      it('', '', 'Dinner seat charge', '¥330', 'Charge', '', '', '', 'seat_charge'),
    ] }, {
    cuisine: 'メニューのないビストロ: 黒板の食材から選び、調理法をシェフと相談する割烹スタイルのイタリアン (食べログ、2026年の口コミ)・名物は北海道十勝の放牧豚どろぶたの熟成ロースト (食べログ)・例: ハモンセラーノ、明石の貝、つぶ貝、白子、豚のテリーヌ、たっぷりの野菜、トリュフをのせたチーズケーキ (2026年の口コミ)・平日の昼は注文後に焼くハンバーグ入りのスープカレー1,500円、トッピングと飲み物は別 (2026年4〜10月)',
    neighborhood: '京都市役所前駅の近く。京都市役所前駅から395m',
    gf_detail: '要確認。その日の食材で注文ごとに作るので要相談。昼のスープカレーやハンバーグにグルテンフリーの表示はない (2026年の口コミ)。',
    vegan_detail: '要確認。野菜も多い黒板の食材から注文ごとに作るが、豚や魚介が中心 (2026年の口コミ)。',
    notes: '[イタリアン・市役所近く、メニューのないカウンター] 豚の置物が出迎えるカウンター10席。メニューはなく、その日の食材の黒板から選び、よねむら出身のシェフと相談して好みに料理してもらう。名物は十勝のどろぶたの熟成ロースト。平日の昼はスープカレー (1,500円ほど)。夜は遅くまで、席料330円。予約を。',
  });
}

// ================================================================ にこみ 鈴や
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043477/'; const R = TB + 'dtlrvwlst/';
  const H = day(['13:00', '21:00']);
  put({
    id: 'kyoto_nikomi_suzuya', name: 'にこみ 鈴や (Nikomi Suzuya)', category: 'OMNI',
    lat: 35.01727986786291, lng: 135.76349218048387, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oden in dashi, beef-tendon nikomi, spring rolls and curry; no gluten information is published (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in dashi and beef-tendon stews (2026 reviews).',
    hours_raw: '13:00–21:00, Wednesday–Sunday; closed Monday and Tuesday; hours may change (Tabelog). Bookings advised for evenings (July 2026). No service charge listed (Tabelog). A U-shaped counter round the kitchen; cards, no e-money or QR (Tabelog; June 2026). On Marutamachi-dori east of Sakaimachi, near the Imperial Palace, 369 m from Marutamachi Stn, in a townhouse-style building (Tabelog; 2026 reviews). Moved from Oike-dori; open here since 12 August 2025 (Tabelog; June 2026).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Marutamachi-Sakaimachi, by the Imperial Palace — 369 m from Marutamachi Stn',
    cuisine: 'Day-drinking izakaya of oden in Kyoto-style dashi and nikomi stews (2026 reviews) · Omi beef-tendon nikomi ¥700, ago (jaw) meat with ponzu ¥700, namako ¥400 (June 2026) · oden with beef tendon; creamy shira-ae with crisp arare; salt-grilled skirt steak; katsuo salt tataki; hoya shiokara; shrimp and sansho spring rolls; chirimen-sansho fried rice; mapo-egg rice; curry to finish (2026 reviews) · sake suggested to match; reasonable drinks — about ¥5,000 with four drinks (July 2026)',
    website: null, gmaps: gm('にこみ 鈴や 丸太町'), menu_url: TB,
    notes: "[Izakaya · Marutamachi by the Imperial Palace, oden from 1 p.m.] A calm U-shaped counter near the Imperial Palace that opens at 1 p.m. for unhurried day drinking. Kyoto-dashi oden and Omi beef-tendon nikomi are the backbone, but don't miss the shrimp-and-sansho spring rolls, creamy shira-ae, katsuo tataki and a mapo-egg rice to finish. Good value — about ¥5,000 with drinks. Closes at 9 p.m.; closed Monday and Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Per 2026 reviews: an oden and nikomi izakaya that moved from Oike-dori to a townhouse-style space on Marutamachi, keeping its U-shaped counter round the kitchen; the chef cooks alone, with staff serving (July and September 2026). Tabelog gives the opening at this address as 12 August 2025.',
      philosophy: null,
      specialty: 'Oden and Omi beef-tendon nikomi; shrimp-and-sansho spring rolls.',
      anecdotes: [
        { text: 'A June 2026 regular from the old Oike-dori days found the U-shaped counter unchanged at the new address.', source: R + 'B529347405/' },
        { text: 'A September 2026 diner who came for oden was most surprised by the katsuo salt tataki — the spring rolls had sold out.', source: R + 'B536197626/' },
        { text: 'A July 2026 party spent about ¥5,000 each with four drinks and found it a bargain.', source: R + 'B532327247/' },
      ],
      japanese_sources_summary: '食べログ: にこみ 鈴や、居酒屋、中京区丸太町堺町東入鍵屋町74、丸太町駅から369m、水〜日13:00〜21:00、月火定休、カード可 (電子マネー・QR 不可)、2025年8月12日オープン。口コミ (2026年、英語): 御池通から移転、町家の雰囲気、厨房を囲むU字カウンター、昼から飲める、京風の出汁のおでん、近江牛すじの煮込み700円、アゴ肉ポン酢700円、なまこ400円、白和え、ハラミの塩焼き、鰹の塩たたき、ほやの塩辛、海老と山椒の春巻、ちりめん山椒の炒飯、麻婆玉子ご飯、締めのカレー、4杯飲んで5,000円ほど、一人で料理。',
      confidence: 'medium', sources: [TB, R + 'B514614468/', R + 'B528406245/', R + 'B528762788/', R + 'B529347405/', R + 'B531716585/', R + 'B532327247/', R + 'B533715946/', R + 'B535672361/', R + 'B536197626/', R + 'B537721006/', R + 'B537861433/', R + 'B538116735/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Mostly local regulars; book for the evening.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区丸太町堺町東入鍵屋町74',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.01728, 135.763492); cross-checked: GSI 京都府京都市中京区鍵屋町74番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529347405/', R + 'B528406245/'],
    price_note: 'Prices from a June 2026 review; other dishes from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omi beef-tendon nikomi', '¥700', 'Nikomi', 'ask', 'no', '', 'gyusuji_nikomi'),
      it('', '', 'Ago (jaw) meat with ponzu', '¥700', 'Dishes', 'ask', 'no', '', 'ago_ponzu'),
      it('', '', 'Namako (sea cucumber)', '¥400', 'Dishes', 'ask', 'no', '', 'namako'),
      it('', '', 'Oden', '', 'Oden', 'ask', 'no', '', 'oden'),
      it('', '', 'Shrimp and sansho spring rolls', '', 'Dishes', 'no', 'no', 'Can sell out.', 'harumaki'),
    ] }, {
    cuisine: '京風の出汁のおでんと煮込みの、昼から飲める居酒屋 (2026年の口コミ)・近江牛すじの煮込み700円、アゴ肉のポン酢700円、なまこ400円 (2026年6月)・牛すじのおでん、あられを添えたなめらかな白和え、ハラミの塩焼き、鰹の塩たたき、ほやの塩辛、海老と山椒の春巻、ちりめん山椒の炒飯、麻婆玉子ご飯、締めのカレー (2026年の口コミ)・料理に合う日本酒をすすめてくれる。4杯飲んで5,000円ほど (2026年7月)',
    neighborhood: '丸太町堺町、御所のそば。丸太町駅から369m',
    gf_detail: '要確認。出汁のおでん、牛すじの煮込み、春巻、カレー。グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のおでんと牛すじの煮込み (2026年の口コミ)。',
    notes: '[居酒屋・丸太町、御所のそば、昼1時からのおでん] 御所近くの落ち着いたU字カウンター。昼1時に開き、ゆっくり昼飲みができる。京風の出汁のおでんと近江牛すじの煮込みが柱だが、海老と山椒の春巻、なめらかな白和え、鰹のたたき、締めの麻婆玉子ご飯もぜひ。飲んで5,000円ほどとお手頃。夜9時まで、月火休み。',
  });
}

// ================================================================ 香港飲茶 星街
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26033955/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '15:00'], ['17:30', '20:30']); const F = day(['11:30', '15:00'], ['17:00', '21:00']); const S = day(['11:30', '15:00'], ['17:00', '20:30']);
  put({
    id: 'kyoto_hongkong_yumcha_hoshimachi', name: '香港飲茶 星街 (Hong Kong Yumcha Star Street)', category: 'OMNI',
    lat: 35.006316627868166, lng: 135.75815614037688, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dim sum wrappers, Hong Kong fried noodles and soy-based sauces; rice-flour cheung fun and turnip cake also appear; no gluten information is published (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shrimp-led dim sum and meat dishes (2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 daily except Thursday; dinner 17:30–20:30 Monday–Wednesday, 17:00–21:00 Friday–Saturday, 17:00–20:30 Sunday; closed Thursday; hours may change (Tabelog). Lunch queues form soon after 11:30, especially on holidays (September and November 2026). No service charge listed (Tabelog). 34 seats: a 9-seat counter downstairs and 25 at tables upstairs; private hire for 20–50; non-smoking; cards (VISA, Master, JCB, AMEX), e-money and QR (Tabelog). 347 m from Karasuma Stn (Tabelog). Opened 27 November 2019 (Tabelog). A second shop, 河原町三条店, is a separate listing.',
    hours: { 0: W, 1: W, 2: W, 4: F, 5: F, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Karasuma north — 347 m from Karasuma Stn',
    cuisine: 'Hong Kong dim sum and Cantonese dishes (2026 reviews) · weekday lunch sets about ¥1,400–1,500: three steamed shrimp dumplings (plain shrimp, shrimp and spinach with dried scallop, shrimp and mushroom), congee, turnip cake, and Hong Kong fried noodles or char siu bao, dessert (June–August 2026) · a ¥3,300 course (September 2026) · à la carte: xiaolongbao, cheung fun, rice-flour noodles, radish cake with chilli bean sauce (2025–2026 reviews)',
    website: null, gmaps: gm('香港飲茶 星街 烏丸'), menu_url: TB,
    notes: "[Chinese · Shijo-Karasuma, Hong Kong dim sum] A busy little Hong Kong dim sum house a few minutes north of Shijo-Karasuma, praised by a Cantonese regular for the real thing. Lunch is the bargain: about ¥1,500 for three plump shrimp dumplings, silky congee, turnip cake and Hong Kong fried noodles. The spinach-and-shrimp har gow is the standout. Queues form soon after 11:30; evenings bring à la carte and courses. Closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Tabelog gives the opening as 27 November 2019. Reviewers in 2025–2026 describe authentic Hong Kong dim sum, a Cantonese friend’s approval, and a lunch menu of dim sum, congee and Hong Kong fried noodles. A sister shop, 香港飲茶 星街 河原町三条店, is listed separately.',
      philosophy: null,
      specialty: 'Shrimp har gow; congee and Hong Kong fried noodle lunch.',
      anecdotes: [
        { text: 'A July 2026 regular on a ninth visit came with a Cantonese friend and found everything excellent.', source: R + 'B426252147/' },
        { text: 'A July 2026 diner rates the spinach-and-shrimp dumpling the most consistent of the three har gow.', source: R + 'B445177181/' },
        { text: 'A September 2026 walk-in just after 11:30 found the upstairs full and got a seat at the downstairs counter.', source: R + 'B535964194/' },
      ],
      japanese_sources_summary: '食べログ: 香港飲茶 星街、中華料理・飲茶・点心、中京区鯉山町532、烏丸駅から347m、昼11:30〜15:00、夜は月〜水17:30〜20:30・金土17:00〜21:00・日17:00〜20:30、木曜定休、34席 (1階カウンター9、2階テーブル25)、20〜50名で貸切可、禁煙、カード・電子マネー・QR 可、2019年11月27日オープン、姉妹店に河原町三条店。口コミ (2025〜2026年、英語): 平日ランチ1,400〜1,500円ほど (蒸し海老餃子3種、粥、大根餅、香港焼きそばか叉焼包、デザート)、3,300円のコース、小籠包、腸粉、ほうれん草と海老の蝦餃、広東人の友人も満足、昼は行列。',
      confidence: 'medium', sources: [TB, R + 'B426252147/', R + 'B445177181/', R + 'B450116883/', R + 'B529766791/', R + 'B529873602/', R + 'B531285625/', R + 'B533092355/', R + 'B533557527/', R + 'B534580312/', R + 'B535964194/', R + 'B536763986/', R + 'B538723404/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas visitors; come early at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鯉山町532',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.006317, 135.758156); cross-checked: GSI 京都府京都市中京区鯉山町532番地 (lot) 56m; 21m from kyoto_ippin_hashinaga; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529766791/', R + 'B534580312/', R + 'B535964194/'],
    price_note: 'Prices from June–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Weekday lunch set: three shrimp dumplings, congee, turnip cake, Hong Kong fried noodles', '¥1,400', 'Lunch', 'no', 'no', 'Under ¥1,500 (August 2026).', 'lunch_set'),
      it('', '', 'Course', '¥3,300', 'Course', 'ask', 'no', 'September 2026.', 'course'),
      it('', '', 'Spinach and shrimp har gow', '', 'Dim sum', 'ask', 'no', '', 'har_gow_spinach'),
    ] }, {
    cuisine: '香港の点心と広東料理 (2026年の口コミ)・平日ランチは1,400〜1,500円ほど: 蒸し海老餃子3種 (海老、ほうれん草と干し貝柱と海老、海老とキノコ)、粥、大根餅、香港焼きそばか叉焼包、デザート (2026年6〜8月)・3,300円のコース (2026年9月)・単品: 小籠包、腸粉、米粉、豆板醤を添えた大根餅 (2025〜2026年の口コミ)',
    neighborhood: '四条烏丸の北。烏丸駅から347m',
    gf_detail: '要確認。点心の皮、香港焼きそば、醤油ベースのたれ。米粉の腸粉や大根餅も。グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。海老が中心の点心と肉料理 (2026年の口コミ)。',
    notes: '[中華・四条烏丸、香港の飲茶] 四条烏丸から少し北の、にぎわう小さな香港飲茶の店。広東出身の常連も本物と太鼓判。お得なのは昼で、ぷりぷりの海老餃子3種、なめらかな粥、大根餅、香港焼きそばで1,500円ほど。ほうれん草と海老の蝦餃が一番人気。11時半を過ぎるとすぐ行列。夜はアラカルトとコース。木曜休み。',
  });
}

save();
