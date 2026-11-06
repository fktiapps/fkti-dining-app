// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 32.
//   + 祇園 おくおか Gion Okuoka (Kyoto set meals, yudofu and summer sudachi udon by the Higashiyama Yasui bus stop) [core]
//   + 韓屋 具っさんとこ Kanya Gussan Toko (Korean home cooking and daeji gukbap near Kiyomizu-Gojo; cash only)   [core]
//   + SALAO (yoshoku bistro of the "adult chicken rice", relocated near Kyoto City Hall; cash only)    [notable]
//   + ニッタベーカリー Nitta_Bakery (weekend bakery behind Rokuharamitsu-ji; since 2018)                       [notable]
//   Same-name counts first (same brand or operator): おくおか 1 (a web search found no sister shops; the official
//   site did not answer); 具っさんとこ 1; SALAO 1 (the same shop, relocated); ニッタベーカリー 1.
//   Taken in queue order on 2026-11-06: core 26015951, 26027663; notable 26040755, 26013647. None is in
//   data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: おくおか "なし" (its English says a service fee is
//   added); the others have no section (a SALAO reviewer: "prices include tax, no service charge", October 2026).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-32');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 祇園 おくおか
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26015951/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_gion_okuoka', name: '祇園 おくおか (Gion Okuoka)', category: 'OMNI',
    lat: 35.000181, lng: 135.777291, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Udon and somen are wheat; yudofu, simmered sea bream, sukiyaki and hot pots come with soy-based broths and sauces (Tabelog; 2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and there is yudofu, but broths are likely dashi-based (Tabelog; 2024–26 reviews).',
    hours_raw: '12:00–15:00 (last order 14:30) and 17:30–22:00 (last order 21:00); closed Tuesday (Tabelog). Bookings taken; dinner courses about ¥10,000, and portions were lightened on request (July 2026 review). Service charge: none — Tabelog\'s Japanese original says "なし" (its English says a service fee is added). 34 seats at sunken-kotatsu and tatami tables; the 2nd floor takes parties of up to 25; one reviewer describes a basement room with a counter (October 2025). Designated smoking area. Children welcome. Cards, PayPay, Alipay, WeChat Pay (Tabelog). In a machiya on the main road in front of the Higashiyama Yasui bus stop, between Gion and Kiyomizu-dera (Tabelog; 2024–26 reviews).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama Yasui bus stop, between Gion and Kiyomizu-dera',
    cuisine: 'Kyoto set meals (gozen) with three small side dishes, pickles and clear soup: yudofu with obanzai, simmered sea bream with vegetables, Kyoto-style beef sukiyaki with white miso, eel hot pot, oyster-and-egg hot pot in winter; summer sudachi udon or soba, cold and thin; the house "Matoi Nabe" of rare beef cuts; sashimi, fresh yuba, takikomi gohan; a three-sake tasting set and Kyoto sake (Tabelog; 2024–26 reviews)',
    website: 'https://okuoka.com/', gmaps: gm('祇園 おくおか'), menu_url: TB + 'dtlmenu/',
    notes: "[Kyoto set meals & yudofu · Higashiyama Yasui] A calm machiya on the road between Gion and Kiyomizu-dera, with sunken-kotatsu seats: yudofu or simmered sea bream sets with obanzai, white-miso sukiyaki, and in summer a cold sudachi udon floating with citrus slices. Lunch about ¥1,500–3,500; dinner courses about ¥10,000. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog: Kyoto cuisine in a traditional townhouse with a garden view; Kyoto and regional sake.',
      philosophy: null, specialty: 'Yudofu set meals; sudachi udon.',
      anecdotes: [
        { text: 'A September 2025 lunch guest asking the way was kindly helped by staff.', source: R + 'B513776307/' },
        { text: 'An October 2025 group found service slow that day, which left time to talk over the trip.', source: R + 'B515501512/' },
        { text: 'Two women on a ¥10,000 course in July 2026 asked for lighter portions; the unfinished pot rice was packed to take away.', source: R + 'B532729407/' },
        { text: 'An April 2026 repeat diner found the simmered sea bream a little salty.', source: R + 'B504524233/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 祇園 おくおか、日本料理・豆腐料理・うどん、東山区東大路毘沙門町44-66、東山安井バス停前、12:00〜15:00・17:30〜22:00、火曜休み、予約可、サービス料: なし、34席 (掘りごたつと座敷)、2階は25名まで、分煙、子供可、カード・PayPay・Alipay・WeChat Pay 可、町家、京白味噌のすき焼き、湯豆腐、Matoi Nabe、京都の地酒。口コミ (2024年11月〜2026年8月、英語): 小鉢3品・漬物・お吸い物付きの御膳、おばんざいと湯豆腐、鯛のあら炊き、鰻の鍋、冬の牡蠣と卵の鍋、夏のすだちうどん・すだちそば、生湯葉、利き酒3種、1万円のコース、鯛が少し塩辛いという声、提供が遅かったという声。',
      confidence: 'medium', sources: [TB, R + 'B497340079/', R + 'B502119876/', R + 'B504524233/', R + 'B513776307/', R + 'B515501512/', R + 'B525399306/', R + 'B532120033/', R + 'B532303311/', R + 'B532729407/', R + 'B533691106/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off for tatami and kotatsu seats; set meals easy to order.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区東大路毘沙門町44-66',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.000181, 135.777291); cross-checked: GSI 京都府京都市東山区毘沙門町44番地 (lot) 90m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532729407/'],
    price_note: 'No menu read; the course price is from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Sudachi udon (summer, cold)', '', 'Noodles', 'no', 'ask', 'Summer only; 2025–26 reviews.', 'sudachi_udon'),
      it('', '', 'Yudofu set with obanzai', '', 'Set meals', 'ask', 'ask', 'November 2024 review.', 'yudofu_gozen'),
      it('', '', 'Dinner course', '¥10,000', 'Courses', 'ask', 'no', 'July 2026 review.', 'dinner_course'),
    ] }, {
    cuisine: '小鉢3品、漬物、お吸い物の付く京都の御膳: おばんざいと湯豆腐、鯛と野菜の炊き合わせ、白味噌の京風牛すき焼き、鰻の鍋、冬の牡蠣と卵の鍋。夏は冷たい細うどんやそばのすだちうどん。珍しい部位の牛の Matoi Nabe、刺身、生湯葉、炊き込みご飯、利き酒3種と京都の酒 (食べログ、2024〜26年の口コミ)',
    neighborhood: '祇園と清水寺の間、東山安井バス停前',
    gf_detail: '要確認。うどんやそうめんは小麦。湯豆腐、鯛の炊き合わせ、すき焼き、鍋は醤油の出汁やたれ (食べログ、2025〜26年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり湯豆腐もあるが、出汁は魚介の可能性が高い (食べログ、2024〜26年の口コミ)。',
    notes: '[京都の御膳と湯豆腐・東山安井] 祇園と清水寺の間の通りにある落ち着いた町家で、掘りごたつの席。おばんざい付きの湯豆腐や鯛の炊き合わせの御膳、白味噌のすき焼き、夏はすだちを浮かべた冷たいすだちうどん。ランチは1,500〜3,500円ほど、夜のコースは1万円ほど。火曜休み。',
  });
}

// ================================================================ 韓屋 具っさんとこ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26027663/'; const R = TB + 'dtlrvwlst/';
  const E = day(['17:30', '23:00']); const W = day(['11:30', '14:30'], ['18:00', '23:00']);
  put({
    id: 'kyoto_kanya_gussan_toko', name: '韓屋 具っさんとこ (Kanya Gussan Toko)', category: 'OMNI',
    lat: 34.996578, lng: 135.764833, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chijimi and noodles are wheat; gukbap is rice in pork-bone broth seasoned at the table with gochujang and miso, which can contain wheat (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone soup, bossam, chicken and seafood dishes (2025–26 reviews).',
    hours_raw: 'Mon–Wed 17:30–23:00 (last order 22:00); Fri–Sun 11:30–14:30 (last order 14:00) and 18:00–23:00 (last order 22:30); closed Thursday, with occasional irregular days (Tabelog). Lunch is gukbap only and ends when it sells out (April 2026 review). Book for dinner — walk-ins were turned away on a full night (December 2025 review). Cash only — no cards, e-money or QR (Tabelog). 20 seats, shared tables at lunch; non-smoking (Tabelog; April 2026 review). One cook in the kitchen, so dishes take time — one July 2026 diner waited about an hour (2025–26 reviews). North of Gojo; 350 m from Kiyomizu-Gojo Stn (Tabelog).',
    hours: { 0: E, 1: E, 2: E, 4: W, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'North of Gojo — 6 min from Kiyomizu-Gojo Stn',
    cuisine: 'Korean home cooking: lunch is daeji gukbap — unsalted pork-bone soup with pork belly and shank, seasoned at the table with chive kimchi, gochujang, dried shrimp and miso, with rice or somen and seaweed namul, corn tea free; at night bossam, chijimi (tendon or oyster) from an iron pan, japchae, tteokbokki, bibim noodles, dakhanmari, dak-galbi, kimchi platter, makgeolli (2025–26 reviews)',
    website: null, gmaps: gm('韓屋 具っさんとこ'), menu_url: null,
    notes: "[Korean home cooking · north of Gojo] A small, warm family-run Korean kitchen: at lunch only daeji gukbap, a pork-bone soup you season yourself; at night bossam, crisp chijimi from the iron pan, japchae and makgeolli. About ¥1,500 at lunch, ¥4,000–5,000 at night. One cook, so expect a wait; book dinner; cash only. Closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Owner and family (unnamed)'], origin: null,
      background: 'Reviewers describe the owner explaining how to season the gukbap (September 2025), a single cook in the kitchen (December 2025), and "the kind mother, sister, and the chef" at work (July 2026). Featured on TV in 2025 (September 2025 review).',
      philosophy: null, specialty: 'Dwaeji gukbap; bossam; chijimi.',
      anecdotes: [
        { text: 'When the lunch dish came, the owner apologised for the wait — September 2025.', source: R + 'B514386462/' },
        { text: 'A diner who lives near Shin-Okubo apologised for doubting Korean food in Kyoto; five ate for just over ¥20,000 — December 2025.', source: R + 'B518341836/' },
        { text: 'Warned in advance that the one-person kitchen was slow, a December 2025 table waited comfortably and got crispy rice candy at the end.', source: R + 'B519545118/' },
        { text: 'An October 2025 regular on a third visit said the trip to Kyoto was for this restaurant alone.', source: R + 'B517579733/' },
      ],
      japanese_sources_summary: '食べログ: 韓屋 具っさんとこ、韓国料理、下京区富小路五条上ル本神明町406 コーポ大耋 1F、清水五条駅から353m、月火水 17:30〜23:00、金土日 11:30〜14:30・18:00〜23:00、木曜休み (不定休あり)、予約可、20席、禁煙、カード・電子マネー・QR 不可。口コミ (2025年9月〜2026年7月、英語): 昼はテジクッパのみ (豚骨の無塩スープにニラキムチ、コチュジャン、干しエビ、味噌で味付け、ご飯かそうめん)、とうもろこし茶、ポッサム、すじやカキのチヂミ、チャプチェ、トッポッキ、ビビン麺、タッカンマリ、タッカルビ、キムチ盛り合わせ、マッコリ、厨房は一人で提供に時間がかかる、満席で飛び込み客を断る日も、テレビで紹介。',
      confidence: 'medium', sources: [TB, R + 'B514386462/', R + 'B514593326/', R + 'B517579733/', R + 'B517646818/', R + 'B518341836/', R + 'B519545118/', R + 'B526503944/', R + 'B527226583/', R + 'B530163734/', R + 'B531991424/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain how to season the gukbap; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区富小路五条上ル本神明町406 コーポ大耋 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.996578, 135.764833); cross-checked: GSI 京都府京都市下京区本神明町406番地 (lot) 55m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526503944/'],
    price_note: 'No menu or item prices read; dishes from 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daeji gukbap (lunch)', '', 'Lunch', 'ask', 'no', 'The only lunch dish; 2026 reviews.', 'daeji_gukbap'),
      it('', '', 'Bossam', '', 'Dinner', 'ask', 'no', '2025 reviews.', 'bossam'),
      it('', '', 'Chijimi (tendon or oyster)', '', 'Dinner', 'no', 'no', '2025–26 reviews.', 'chijimi'),
    ] }, {
    cuisine: '韓国の家庭料理: 昼はテジクッパ。無塩の豚骨スープに豚バラとすね肉、ニラキムチ、コチュジャン、干しエビ、味噌で自分で味付けし、ご飯かそうめん、岩のりのナムル、とうもろこし茶は無料。夜はポッサム、鉄板で焼くすじやカキのチヂミ、チャプチェ、トッポッキ、ビビン麺、タッカンマリ、タッカルビ、キムチ盛り合わせ、マッコリ (2025〜26年の口コミ)',
    neighborhood: '五条近くの富小路。清水五条駅から徒歩6分',
    gf_detail: '要確認。チヂミや麺は小麦。クッパはご飯と豚骨スープで、卓上のコチュジャンや味噌に小麦が入ることがある (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚骨スープ、ポッサム、鶏や魚介の料理 (2025〜26年の口コミ)。',
    notes: '[韓国の家庭料理・五条の富小路] 家族で営む温かな小さな韓国料理店。昼は自分で味を調える豚骨スープのテジクッパだけ、夜はポッサム、鉄板のカリッとしたチヂミ、チャプチェにマッコリ。昼は1,500円ほど、夜は4千〜5千円ほど。厨房は一人で待つこともある。夜は予約を。現金のみ。木曜休み。',
  });
}

// ================================================================ SALAO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040755/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyotosalao.com/';
  const H = day(['11:30', '16:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_salao', name: 'SALAO', category: 'OMNI',
    lat: 35.013744, lng: 135.764889, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The chicken rice is pilaf stuffed in a whole chicken, but sauces (demi-glace, cream, curry) and fried shrimp likely contain wheat (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, hamburg steak, fish and liver pâté (2025–26 reviews).',
    hours_raw: '11:30–16:00 (last order 15:00) and 17:30–21:00 (last order 20:00); closed Monday (holidays too) and the 1st and 3rd Sunday (Tabelog). Tabelog also says last orders are 10 minutes before closing — 14:50 and 19:50. Online bookings for dinner only, none after 19:30; at lunch, write your name on the waiting list — about 40 minutes in July 2026 (Tabelog; 2026 reviews). Cash only (Tabelog; June 2026 review). Prices include tax, no service charge (October 2026 review). 24 seats, tables only, on two floors; ring the bell at the top of the stairs to order (Tabelog; August 2026 review). Children welcome with notice; no car or bicycle parking (Tabelog). On Nijo-dori; 7 min from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nijo-dori — 7 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Neighbourhood yoshoku bistro: the signature "adult chicken rice" — a whole chicken, crisp-skinned, stuffed with pilaf or garlic rice — with a choice of six sauces (mild or bitter demi-glace, tomato-basil, onion-truffle, curry, a monthly sauce such as mushroom cream), lunch with salad ¥1,650; cheese or foie gras toppings; hamburg steak and fried shrimp plate; petite course ¥2,750 with liver pâté, soup, main, ice cream and coffee; dinner courses with sawara; Heartland beer ¥880; anniversary whole cakes by the pastry chef (Tabelog; 2025–26 reviews)',
    website: SITE, gmaps: gm('SALAO 京都 二条'), menu_url: TB + 'dtlmenu/',
    notes: "[Yoshoku bistro · Nijo-dori near City Hall] A small two-floor bistro with a cat on its sign, famous for its \"adult chicken rice\": a whole crisp chicken stuffed with pilaf, with your pick of six sauces (¥1,650 at lunch, with salad). Lunch queues are common — leave your name and wander. Cash only; closed Monday and the 1st and 3rd Sunday.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed; a pastry chef makes the celebration cakes (Tabelog)'], origin: null,
      background: 'Tabelog\'s shop text says it relocated in 2023; its listed opening day is 25 March 2024. Reviewers knew it near the City Hall before the move (August and October 2026 reviews).',
      philosophy: null, specialty: 'Adult chicken rice.',
      anecdotes: [
        { text: 'A July 2025 diner found the tables close together and conversation hard with loud customers nearby.', source: R + 'B510582080/' },
        { text: 'Ordering the bitter demi-glace in October 2026, a guest was warned it is "a unique sauce that divides opinions"; the chicken took thirty minutes.', source: R + 'B538321104/' },
        { text: 'An August 2026 diner noted the cat silhouette on the sign and cat figurines inside, and a bell at the top of the stairs to call for orders.', source: R + 'B534531179/' },
        { text: 'A July 2026 walk-in wrote a name on the list, strolled the neighbourhood and waited about forty minutes.', source: R + 'B537021550/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): SALAO、ビストロ・カフェ・洋食、中京区二条通柳馬場東入晴明町667-2、京都市役所前駅から徒歩7分、11:30〜16:00・17:30〜21:00、月曜 (祝日含む) と第1・第3日曜休み、カード・電子マネー・QR 不可、24席 (テーブルのみ)、子供可 (要連絡)、2023年移転、オープン日2024年3月25日、看板の「大人のチキンライス」、パティシエのホールケーキ付き記念日プラン、ネット予約はディナーのみ。口コミ (2025年7月〜2026年10月、英語): 鶏一羽にピラフを詰めたチキンライス、ソース6種、ランチ1,650円、プチコース2,750円、ハートランド880円、税込みでサービス料なし、2階の階段上のベル、猫の看板、昼は記名して約40分待ち、席が近く隣がうるさいという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B510582080/', R + 'B515014079/', R + 'B530539897/', R + 'B533089294/', R + 'B533508759/', R + 'B534531179/', R + 'B537021550/', R + 'B537348195/', R + 'B537532011/', R + 'B538321104/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff suggest a sauce for first-timers; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通柳馬場東入晴明町667-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop at the new address; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013744, 135.764889); cross-checked: GSI 京都府京都市中京区晴明町667番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538321104/', R + 'B537532011/'],
    price_note: 'No menu read; prices from October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('大人のチキンライス', '', 'Adult chicken rice lunch (choice of six sauces, with salad)', '¥1,650', 'Lunch', 'ask', 'no', 'October and August 2026 reviews.', 'adult_chicken_rice'),
      it('', '', 'Petite course (appetizer, soup, main, ice cream, coffee)', '¥2,750', 'Courses', 'ask', 'no', 'October 2026 review.', 'petite_course'),
      it('', '', 'Heartland beer', '¥880', 'Drinks', 'no', 'ask', 'October 2026 review.', 'heartland'),
    ] }, {
    cuisine: '町の洋食ビストロ: 名物の「大人のチキンライス」は鶏一羽の皮をパリッと焼き、ピラフやガーリックライスを詰めたもの。ソースはデミグラス (マイルド・ビター)、トマトバジル、オニオントリュフ、カレー、月替わり (きのこのクリームなど) の6種から。ランチはサラダ付き1,650円。チーズやフォアグラのトッピング、ハンバーグと海老フライのプレート、レバーパテ・スープ・メイン・アイス・コーヒーのプチコース2,750円、鰆のディナーコース、Heartland ビール880円、パティシエの記念日のホールケーキ (食べログ、2025〜26年の口コミ)',
    neighborhood: '二条通。京都市役所前駅から徒歩7分',
    gf_detail: '要確認。チキンライスは鶏にピラフを詰めたものだが、デミグラス、クリーム、カレーのソースや海老フライには小麦が入る可能性が高い (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏、ハンバーグ、魚、レバーパテ (2025〜26年の口コミ)。',
    notes: '[洋食ビストロ・市役所近くの二条通] 猫の看板の2フロアの小さなビストロ。名物の「大人のチキンライス」は、パリッと焼いた鶏一羽にピラフを詰め、6種のソースから選ぶ (ランチはサラダ付き1,650円)。昼は行列が多く、名前を書いて散歩を。現金のみ。月曜と第1・第3日曜休み。',
  });
}

// ================================================================ ニッタベーカリー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26013647/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '17:00']);
  put({
    id: 'kyoto_nitta_bakery', name: 'ニッタベーカリー (Nitta_Bakery)', category: 'OMNI',
    lat: 34.996624, lng: 135.774262, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter croissants, cream buns, cheese and meat fillings; plain baguettes may be the exception — ask (2026 reviews).',
    hours_raw: 'Fri–Sun 8:00–17:00; closed Mon–Thu; hours may change (Tabelog; October 2026 review). Take-away; the shop fits two or three customers at a time, with a bench out front (August 2026 reviews). No cards; d Barai per Tabelog, and a May 2026 reviewer paid with PayPay. Weekend queues are common; a Friday before 9:00 was empty (July 2026 review). In a residential lane behind Rokuharamitsu-ji, 8–10 min from Kiyomizu-Gojo Stn (2026 reviews).',
    hours: { 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Behind Rokuharamitsu-ji — 8–10 min from Kiyomizu-Gojo Stn',
    cuisine: 'Small neighbourhood bakery of classic breads: croissant ¥300 and salt-butter roll ¥180 (May 2026), chocolate-coated Danish bars ¥315 for three, garlic toast and egg sandwich ¥630 (May 2026), passion-fruit milk bun ¥300, cream bun, melon bread (August 2026), croque monsieur with béchamel and meat sauce, curry bread, cheese bread with bacon and dried tomato, half baguettes and sticks (2026 reviews)',
    website: null, gmaps: gm('ニッタベーカリー 京都'), menu_url: null,
    notes: "[Bakery · behind Rokuharamitsu-ji] A tiny weekend-only bakery in the lanes between Kiyomizu and Gojo: flaky croissants, salt-butter rolls, chocolate Danish bars, passion-fruit cream buns, croque monsieur and baguettes, mostly ¥200–600. Fri–Sun from 8:00; expect a short queue; take away.",
    chef_bio: { chef_name: null, roles: ['Bakers (unnamed)'], origin: null,
      background: 'Opened 13 September 2018 after a three-day pre-opening (Tabelog). Featured on the TV show "Seven Rules" (August 2026 review).',
      philosophy: null, specialty: 'Croissants and classic breads.',
      anecdotes: [
        { text: 'A July 2026 visitor walking down from the Gojozaka bus stop found no queue before 9:00 on a Friday; staff said that happens when you are lucky.', source: R + 'B531545585/' },
        { text: 'A croissant enthusiast in May 2026 called it a fine classic croissant but not one to return for.', source: R + 'B528355418/' },
        { text: 'An August 2026 visitor ate a croissant and salt bread on the bench outside straight away.', source: R + 'B533283981/' },
      ],
      japanese_sources_summary: '食べログ: ニッタベーカリー (Nitta_Bakery)、パン、東山区六波羅南東入多門町158-4、清水五条駅から516m、金土日 8:00〜17:00、月〜木休み、予約不可、カード不可、d払い可、2018年9月13日オープン (9月9〜11日プレオープン)。口コミ (2026年5〜10月、英語): クロワッサン300円、塩バターパン180円、チョコのデニッシュバー3本315円、ガーリックトーストと玉子サンド630円、パッションフルーツミルク300円、クリームパン、メロンパン、クロックムッシュ、カレーパン、チーズのパン、ハーフのバゲット、Rokuharamitsu-ji の裏の住宅街、店は2〜3人で一杯、店先のベンチ、週末は行列、PayPay 可という声、テレビ「Seven Rules」で紹介。',
      confidence: 'medium', sources: [TB, R + 'B528278319/', R + 'B528341592/', R + 'B528355418/', R + 'B531545585/', R + 'B533283981/', R + 'B533870350/', R + 'B534859199/', R + 'B536304301/', R + 'B536958645/', R + 'B538286332/'] },
    cultural_comfort: { level: 'none_needed', note: 'Point at the breads; take-away.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区六波羅南東入多門町158-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.996624, 135.774262); cross-checked: GSI 京都府京都市東山区多門町158番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528355418/', R + 'B528341592/', R + 'B528278319/', R + 'B533870350/'],
    price_note: 'No menu read; prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Croissant', '¥300', 'Bread', 'no', 'no', 'May 2026 review.', 'croissant'),
      it('', '', 'Salt-butter roll', '¥180', 'Bread', 'no', 'no', 'May 2026 review.', 'shio_pan'),
      it('', '', 'Chocolate Danish bars (3)', '¥315', 'Bread', 'no', 'no', 'May 2026 review.', 'choco_bar'),
      it('', '', 'Passion-fruit milk bun', '¥300', 'Bread', 'no', 'no', 'August 2026 review.', 'passion_milk'),
    ] }, {
    cuisine: '昔ながらのパンの小さな町のパン屋: クロワッサン300円、塩バターパン180円 (2026年5月)、チョコをかけたデニッシュのバー3本315円、ガーリックトーストと玉子サンド630円 (2026年5月)、パッションフルーツのミルクパン300円、クリームパン、メロンパン (2026年8月)、ベシャメルとミートソースのクロックムッシュ、カレーパン、ベーコンとドライトマトのチーズパン、ハーフのバゲットやスティック (2026年の口コミ)',
    neighborhood: 'Rokuharamitsu-ji の裏。清水五条駅から徒歩8〜10分',
    gf_detail: 'グルテンフリー不可。小麦のパン屋 (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。バターのクロワッサン、クリームパン、チーズや肉のフィリング。プレーンなバゲットは例外の可能性があり要確認 (2026年の口コミ)。',
    notes: '[パン屋・Rokuharamitsu-ji の裏] 五条近くの路地にある週末だけの小さなパン屋。サクサクのクロワッサン、塩バターパン、チョコのデニッシュバー、パッションフルーツのクリームパン、クロックムッシュ、バゲットなど、200〜600円ほど。金〜日の8時から。少し並ぶことも。持ち帰り。',
  });
}

save();
