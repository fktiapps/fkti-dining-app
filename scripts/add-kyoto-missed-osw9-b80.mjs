// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 80.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - 大衆すき焼き 北斗 四条烏丸店 — chain: seven 北斗 shops on Tabelog (Kyoto, Osaka, Tokyo); a sister branch was skipped as a
//     chain in queue-status (26042524)
//   + 祇園ことぶきや Gion Kotobukiya (machiya izakaya near Higashiyama-dori; sashimi, charcoal grill, private rooms)
//   - しゃぶしゃぶ温野菜 三条鴨川店 — national chain (温野菜; queue-status 26027709 skipped as a chain)
//   + コーヒー アンド ワイン ウシロ coffee and wine ushiro (breakfast, coffee and wine bar in the TSUGU 京都三条 hotel; since 2019)
//   + 鮨 三重奏 Sushi Sanjusou (six-seat Gion sushi counter run by a woman owner-chef; since July 2026)
//   Same-name counts first (data and queue-status.jsonl): none for ことぶきや, ウシロ or 三重奏 (data hits for "USHIRO" are
//   Sushiro, a different chain; TSUGU hits are other shops). Big-chain hotel rule (Greg 11-08): ウシロ is a tenant cafe with its
//   own site, inside TSUGU 京都三条 by THE SHARE HOTELS (a small boutique hotel brand) — kept as a tenant, flagged in the report.
//   Service charges from Tabelog's Japanese original: ことぶきや 「付出400円（単品ご注文時）」; ウシロ and 三重奏 have no section.
//   Pins (checked against main, hidden records included): all three ≥ 20m from every record; no offsets.
//   B533664706 on the ウシロ page describes ESPRESSO ATELIER KYOTO near Omiya — not used.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-80');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26041985', 'chain: 大衆すき焼き 北斗 — Tabelog lists seven shops (Shijo Karasuma, Kiyamachi, Namba GEMS, Ginza Corridor, Shinjuku, Higashi-Ginza, Chofu); sister branch 26042524 already skipped as a chain');
skip('26006531', 'chain: しゃぶしゃぶ温野菜, a national chain (sister branch 26027709 already skipped as a chain)');

// ================================================================ 祇園ことぶきや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26019209/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '24:00']);
  put({
    id: 'kyoto_gion_kotobukiya', name: '祇園ことぶきや (Gion Kotobukiya)', category: 'OMNI',
    lat: 35.004779, lng: 135.776915, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi and grilled dishes may suit; the kitchen takes requests (December 2024 review); fried dishes and pasta are common.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fresh yuba, avocado and agedashi tofu (2024–26 reviews), but dashi is likely.',
    hours_raw: 'Mon–Sat 17:00–24:00; closed Sundays and holidays (Tabelog). Cover charge ¥400 when ordering a la carte (Tabelog Japanese original 「付出400円（単品ご注文時）」). Cards; no e-money (Tabelog). 30 seats: a counter downstairs and four private rooms upstairs (for 4, 6, 10 and 12; ¥1,000 room fee for two guests); smoking only in private rooms and a smoking space (Tabelog; 2025 reviews). Children welcome, with a children\'s menu on request; BYO drinks (Tabelog). 5 min from Gion-Shijo (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, north of Shijo near Higashiyama-dori — 5 min from Gion-Shijo Stn',
    cuisine: 'Izakaya in a machiya with seasonal dishes and chosen sake: assorted sashimi of tuna, sea bream, kanpachi, squid and salmon (April 2026), natural yellowtail sashimi, grilled anago, simmered seasonal vegetables, mentaiko rice soup (December 2025), fresh yuba sashimi and thin-sliced flounder (May 2024), sea-urchin pasta (April 2025), grilled wagyu strip loin ¥5,500 (June 2025), charcoal-grilled dishes and fried shrimp (December 2023), miso-marinated black cod and fried rice (April 2026); about ¥4,000–8,000',
    website: null, gmaps: gm('祇園ことぶきや'), menu_url: null,
    notes: '[Izakaya · Gion] A machiya izakaya on the edge of Gion with a counter in front of the kitchen and private rooms upstairs: fresh sashimi, charcoal grilling, mentaiko rice soup and off-menu requests. About ¥4,000–8,000.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'A friendly master with a lovely voice, helped by female and part-time staff (May 2024 and August 2025 reviews). The kitchen takes any request — fish, meat, kushikatsu or pasta (December 2024 review).',
      philosophy: null,
      specialty: 'Sashimi; mentaiko rice soup.',
      anecdotes: [
        { text: 'A May 2024 guest stopping by after a theatre show got sake in a bamboo flask with a choice of cup, and found the place as lively as an Osaka izakaya.', source: R + 'B485659943/' },
        { text: 'A December 2025 first-timer at the counter found the mentaiko rice soup so filling it replaced the usual closing ramen.', source: R + 'B519846162/' },
        { text: 'An April 2025 diner was surprised to find sea-urchin pasta on the menu in a machiya.', source: R + 'B505889931/' },
      ],
      japanese_sources_summary: '食べログ: 祇園ことぶきや、日本料理・居酒屋・焼鳥、東山区祇園町北側347-17、京阪祇園四条駅から徒歩5分、月〜土 17:00〜24:00、日曜・祝日休み、お通し400円 (単品のとき)、カード可、電子マネー不可、30席、個室4つ、喫煙は個室と喫煙スペース、子供可、持ち込み可。口コミ (2023〜2026年、英語): 町家の居酒屋、1階はカウンター、2階は個室、刺身の盛り合わせ、生湯葉、明太子の雑炊、雲丹のパスタ、和牛のステーキ5,500円 (2025年6月)、炭火焼き、何でも作ってくれる (2024年12月)。',
      confidence: 'medium', sources: [TB, R + 'B476591798/', R + 'B485659943/', R + 'B497825814/', R + 'B505889931/', R + 'B511297244/', R + 'B519846162/', R + 'B522764860/', R + 'B525947362/', R + 'B529312595/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter or private rooms; book rooms ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.004779, 135.776915); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 112m — a large Gion block; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522764860/', R + 'B525947362/'],
    price_note: 'Few prices in reviews; ¥400 cover with a la carte orders (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi', '', 'Sashimi', 'ask', 'no', 'April 2026 review.', 'sashimi'),
      it('', '', 'Mentaiko rice soup (zosui)', '', 'Rice', 'ask', 'no', 'December 2025 review.', 'zosui'),
      it('', '', 'Grilled wagyu strip loin', '¥5,500', 'Grill', 'ask', 'no', 'June 2025 review; plus tax.', 'wagyu'),
      it('', '', 'Sea-urchin pasta', '', 'A la carte', 'no', 'no', 'April 2025 review.', 'uni_pasta'),
    ] }, {
    cuisine: '町家の居酒屋、季節の料理とこだわりの日本酒: 本マグロ、鯛、カンパチ、イカ、サーモンの刺身の盛り合わせ (2026年4月)、天然ぶりの刺身、焼き穴子、季節の野菜の炊き合わせ、明太子の雑炊 (2025年12月)、生湯葉の刺身とヒラメの薄造り (2024年5月)、雲丹のパスタ (2025年4月)、和牛のステーキ5,500円 (2025年6月)、炭火焼きと海老フライ (2023年12月)、銀ダラの味噌漬け、チャーハン (2026年4月)、4,000〜8,000円ほど',
    neighborhood: '祇園、四条の北、Higashiyama-dori の近く。祇園四条駅から徒歩5分',
    gf_detail: '要確認。刺身と焼き物は合う可能性があり、注文に応じてくれる (2024年12月の口コミ)。揚げ物やパスタも多い。',
    vegan_detail: '要確認。生湯葉、アボカド、揚げ出し豆腐 (2024〜26年の口コミ) があるが、出汁を使う可能性が高い。',
    notes: '[居酒屋・祇園] 祇園のはずれの町家の居酒屋。厨房の前のカウンターと2階の個室で、新鮮な刺身、炭火焼き、明太子の雑炊、メニューにない注文にも応じる。4,000〜8,000円ほど。',
  });
}

// ================================================================ コーヒー アンド ワイン ウシロ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032541/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://ushirokyoto.jimdofree.com/';
  const D = day(['07:00', '11:00'], ['12:00', '19:00']); const FS = day(['07:00', '11:00'], ['12:00', '21:00']);
  put({
    id: 'kyoto_coffee_and_wine_ushiro', name: 'コーヒー アンド ワイン ウシロ (coffee and wine ushiro)', category: 'OMNI',
    lat: 35.008802, lng: 135.763785, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pudding and coffee; breakfast is toast, croque monsieur or sandwiches (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and iced tea; the pudding and breakfasts have egg or dairy (2026 reviews).',
    hours_raw: 'Breakfast 7:00–11:00 daily; coffee 12:00–19:00 (Sun–Thu) or 12:00–21:00 (Fri, Sat), a wine bar in the evening; hours may change (Tabelog). Breakfast is mostly booked by hotel guests; walk-ins may get only the toast set (August 2026 review). Order at the counter, then sit (April 2026 review). Cards, e-money and PayPay (Tabelog). 35 seats; non-smoking; children welcome; takeaway (Tabelog). On the ground floor of the TSUGU 京都三条 by THE SHARE HOTELS, to the right inside an apparel shop, 5 min from Karasuma-Oike (Tabelog; 2026 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: FS, 5: FS, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-Yanaginobamba — 5 min from Karasuma-Oike Stn',
    cuisine: 'A morning café, afternoon coffee shop and evening wine bar (Tabelog): pudding ¥580 with caramel and cream (2026), canelé, café latte ¥850 with Costa Rican beans, two-layer iced latte, matcha latte ¥930, cold brew, chocolate latte (2026 reviews); a breakfast set of toast, croque monsieur or a sandwich with salad, carrot rapée and potato salad, bread from HIYORI BROT of Tanba, with free-flow iced coffee and tea (August–September 2026)',
    website: WEB, gmaps: gm('coffee and wine ushiro 京都'), menu_url: null,
    notes: '[Café & wine bar · Sanjo] A hidden café behind an apparel shop in a Sanjo hotel: breakfast with HIYORI BROT toast from 7 am, careful lattes and a firm pudding by day, wine in the evening. About ¥1,000–2,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 31 May 2019 (Tabelog) in the TSUGU 京都三条 hotel. Staff share recommendations at the counter (April 2026 review).',
      philosophy: 'Morning café, afternoon coffee specialist, evening wine bar (Tabelog).',
      specialty: 'Pudding; café latte.',
      anecdotes: [
        { text: 'An August 2026 walk-in at 7:30 am could only get the toast set, and called the toast — from HIYORI BROT in Tanba — the best ever eaten.', source: R + 'B534271599/' },
        { text: 'A September 2026 breakfast guest liked the coffee of the day enough to buy similar beans to take home.', source: R + 'B534849373/' },
      ],
      japanese_sources_summary: '食べログ: コーヒー アンド ワイン ウシロ、カフェ・ワインバー、中京区桝屋町75 TSUGU 京都三条 by THE SHARE HOTELS 1F、烏丸御池駅から440m、毎日 朝食 7:00〜11:00、コーヒー 12:00〜19:00 (金・土は21:00まで)、カード・電子マネー・PayPay 可、35席、禁煙、子供可、テイクアウト可、2019年5月31日オープン、朝はモーニング、昼はコーヒー、夜はワインバー。口コミ (2026年、英語): プリン580円、カヌレ、カフェラテ850円、抹茶ラテ930円、水出しコーヒー、トーストのモーニング (パンは Tanba の HIYORI BROT)、朝食は主にホテルの客の予約、洋服の店の奥。',
      confidence: 'medium', sources: [TB, WEB, R + 'B526142697/', R + 'B527058035/', R + 'B530332075/', R + 'B532901020/', R + 'B534271599/', R + 'B534849373/', R + 'B535496436/', R + 'B535571012/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; hotel guests common.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通柳馬場西入桝屋町75 TSUGU 京都三条 by THE SHARE HOTELS 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.008802, 135.763785); cross-checked: GSI 京都府京都市中京区桝屋町75番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530332075/', R + 'B535496436/'],
    price_note: 'Prices from June and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pudding', '¥580', 'Sweets', 'ask', 'no', 'June and September 2026 reviews.', 'pudding'),
      it('', '', 'Café latte', '¥850', 'Coffee', 'ask', 'no', 'September 2026 review.', 'latte'),
      it('', '', 'Matcha latte', '¥930', 'Drinks', 'ask', 'no', 'June 2026 review.', 'matcha_latte'),
      it('', '', 'Breakfast set (toast, croque monsieur or sandwich)', '', 'Breakfast', 'no', 'no', 'August–September 2026 reviews.', 'breakfast'),
    ] }, {
    cuisine: '朝はモーニング、昼はコーヒー、夜はワインバー (食べログ): カラメルとクリームのプリン580円 (2026年)、カヌレ、コスタリカの豆のカフェラテ850円、2層のアイスラテ、抹茶ラテ930円、水出しコーヒー、チョコレートラテ (2026年の口コミ)、トースト・クロックムッシュ・サンドイッチから選ぶ朝食にサラダ、キャロットラペ、ポテトサラダ、パンは Tanba の HIYORI BROT、アイスコーヒーとアイスティーは飲み放題 (2026年8〜9月)',
    neighborhood: '三条通。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。プリンとコーヒー。朝食はトースト、クロックムッシュ、サンドイッチ (2026年の口コミ)。',
    vegan_detail: '要確認。ブラックコーヒーとアイスティー。プリンと朝食は卵か乳製品入り (2026年の口コミ)。',
    notes: '[カフェとワインバー・三条] 三条のホテルの洋服の店の奥の隠れ家のようなカフェ。朝7時から HIYORI BROT のトーストのモーニング、昼は丁寧なラテと固めのプリン、夜はワイン。1,000〜2,000円ほど。',
  });
}

// ================================================================ 鮨 三重奏
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26045429/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '22:00']);
  put({
    id: 'kyoto_sushi_sanjusou_gion', name: '鮨 三重奏 (Sushi Sanjusou)', category: 'OMNI',
    lat: 35.005219, lng: 135.776904, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi is often seasoned with soy sauce and simmered anago with sweet sauce; ask about tamari (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi course of fish and shellfish (2026 reviews).',
    hours_raw: 'Tue–Sun 17:00–22:00 (food L.O. 20:00, drinks 21:30); closed Mondays (Tabelog). Reservation only, by the day before; four groups a day (Tabelog; August 2026 review). Cards, e-money and QR (Tabelog). 6 counter seats; non-smoking; a sommelier and English-speaking staff (Tabelog). Hidden down Shinbashi-dori behind a back alley in Gion, 8 min from Gion-Shijo (Tabelog; August 2026 review).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, north of Shijo — 8 min from Gion-Shijo Stn',
    cuisine: 'Nigiri course ¥11,000 (August 2026): flounder, sweet and botan shrimp, kisu, chidai, sea bream, kombu-cured sweet shrimp, young horse mackerel, scallop, whelk, otoro, simmered anago, tamago; domestic sea urchin (August 2026); sake chosen by the sommelier; hojicha pudding to finish; about ¥11,000–20,000',
    website: null, gmaps: gm('鮨 三重奏 祇園'), menu_url: null,
    notes: '[Sushi · Gion] A new six-seat counter hidden in a Gion back alley, where women sushi chefs serve an ¥11,000 nigiri course with domestic sea urchin and sommelier-picked sake. Opened July 2026; booking by the day before.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Opened 28 July 2026 (Tabelog). The owner-chef, a woman, cooked Western food at a hotel in Osaka before opening this first sushi restaurant (August 2026 review); female sushi chefs work the counter (August 2026 review). An August 2026 guest describes the head chef as beautiful.',
      philosophy: 'Ingredients sourced from around Japan, such as additive-free raw sea urchin (August 2026 review).',
      specialty: 'Nigiri course with domestic sea urchin.',
      anecdotes: [
        { text: 'An August 2026 diner found no phone number on Tabelog, booked through another site, and was shown a large sweet shrimp before the course began.', source: R + 'B533200744/' },
        { text: 'An August 2026 guest, back for a second time with a senior colleague, praised the sommelier\'s sake pairings.', source: R + 'B535599455/' },
        { text: 'A critical August 2026 reviewer praised the sushi from a first-time sushi owner but found the drinks pricey and the pace slow.', source: R + 'B533867333/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 三重奏、寿司、東山区祇園町北側347-160 佐々木会館1F、京阪祇園四条駅から徒歩8分、火〜日 17:00〜22:00 (L.O. 料理20:00、ドリンク21:30)、月曜休み、予約のみ (前日まで)、カード・電子マネー・QR 可、6席、禁煙、ソムリエ、英語のスタッフ、2026年7月28日オープン。口コミ (2026年8〜10月、英語): 1日4組、にぎりのコース11,000円、国産の雲丹、店主は女性で大阪のホテルで洋食の経験、初めての鮨屋、女性の鮨職人、ほうじ茶のプリン。',
      confidence: 'medium', sources: [TB, R + 'B533200744/', R + 'B533867333/', R + 'B535599455/', R + 'B536752128/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff (Tabelog); the chef explains each piece (August 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-160 佐々木会館 １F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005219, 135.776904); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 112m — a large Gion block; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533200744/', R + 'B533867333/'],
    price_note: 'Course price from August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Nigiri course', '¥11,000', 'Courses', 'ask', 'no', 'August 2026 reviews.', 'nigiri'),
    ] }, {
    cuisine: 'にぎりのコース11,000円 (2026年8月): ヒラメ、甘エビとボタンエビ、キス、チダイ、鯛、昆布締めの甘エビ、小アジ、ホタテ、ツブ貝、大トロ、煮穴子、玉子。国産の雲丹 (2026年8月)、ソムリエの選ぶ日本酒、最後にほうじ茶のプリン。11,000〜20,000円ほど',
    neighborhood: '祇園、四条の北。祇園四条駅から徒歩8分',
    gf_detail: '要確認。寿司は醤油を使い、煮穴子には甘いたれ。たまり醤油の有無を確認 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚と貝の寿司のコース (2026年の口コミ)。',
    notes: '[寿司・祇園] 祇園の路地の奥の新しい6席のカウンター。女性の鮨職人が11,000円のにぎりのコースを、国産の雲丹とソムリエの選ぶ日本酒と。2026年7月オープン、前日までに予約。',
  });
}

save();
