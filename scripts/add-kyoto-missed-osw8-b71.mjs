// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 71.
//   + FRESH MARKET (teppanyaki of dry-aged beef with a sommelier's wine list, Gion Kiyomoto-cho; rest)
//   + 楽坐青天家 Rakuza Hareruya (oden and sushi izakaya behind Daimaru; rest)
//   + 吉加寿 Kichi Kazu (one-man Gion izakaya open 18:00–3:00 all year; rest)
//   + 京 味和 Kyo Ajiwa (kaiseki and Kirishima beef in a Miyagawa-cho alley; rest)
//   Rest list (mod 6 = 1) after batch 70, nearest-first — skipped:
//   - プレミアム 听 祇園店 26029417: chain — eight 听 shops in our crawls (same call as 26036634).
//   - モンローズ 26028301: thin listing, 2 reviews.
//   Brand check: queue-status.jsonl grepped for FRESH MARKET, 青天家 / Hareruya, 吉加寿, 味和 — no entries. Other "Hareruya"
//   names in our crawls (晴れルヤ, 晴れる家, はれるや, 晴レルヤ, HARERUYA) are mostly in Osaka with no stated link to 楽坐青天家;
//   treated as unrelated. None of the four is in data/kyoto.json (main 81b7eb64, hidden records included) by name or address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-71');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260301/26029417/', 'chain: 听 — eight same-name shops in our crawls (熟成焼肉 听, ステーキハウス 听 京都本店・北新地, ハンバーグ＆ステーキ 听, PREMIUM焼肉 听 and others); same call as 26036634');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26028301/', 'thin listing: 2 reviews');

// ================================================================ FRESH MARKET
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26013607/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '15:00'], ['18:00', '24:00']); const S = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_fresh_market_gion', name: 'FRESH MARKET', category: 'OMNI',
    lat: 35.00508223787443, lng: 135.77534268035234, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan-grilled aged beef, pork and Kyoto vegetables are naturally wheat-free, but okonomiyaki and croutons share the griddle; no gluten information (2018–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: aged beef, pork, sausages, homemade bacon and cheese omelette (2017–2025 reviews).',
    hours_raw: 'Monday–Saturday, the day before and after a holiday 11:30–15:00 (last orders food 13:00, drinks 15:00) and 18:00–24:00 (food 22:00, drinks 24:00); Sunday and holidays 11:30–15:00 and 18:00–22:00 (food 20:00) (Tabelog). Lunch by reservation only, by the day before (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 20 seats at the counter and sofas (Tabelog). Non-smoking (Tabelog). Bring your own wine for ¥5,000 a bottle, up to two guests per bottle (Tabelog). Children who can eat a course are welcome; dress appropriately (Tabelog). Sommelier on hand; take-away and delivery (Tabelog). 2F, 5 min walk from Gion-Shijo Stn (Tabelog). Opened 13 August 2004 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Kiyomoto-cho, 2F',
    cuisine: 'Teppanyaki of dry-aged beef and Kyoto vegetables with a deep wine list (Tabelog; 2018–2025 reviews) · aged beef such as Kagoshima kuroge wagyu aged 53 days or aged meat from Sakaeya, strip loin, Iwate pork, Basque pork (2017–2025 reviews) · Kyoto-vegetable salad with house bacon grilled on the plate, a fluffy omelette with raclette and truffle (raclette +¥500), okonomiyaki, sausages (2018–2025 reviews) · about ¥8,000–15,000 (Tabelog)',
    website: 'https://fmgion.com/', gmaps: gm('FRESH MARKET 祇園'), menu_url: null,
    notes: '[Teppanyaki · Gion Kiyomoto-cho, 2F] A relaxed Gion teppan counter for dry-aged beef and Kyoto vegetables, cooked in front of you with a sommelier\'s wine list: start with the house-bacon salad and a truffle omelette under raclette, then aged strip loin or juicy Iwate pork; okonomiyaki too. Lunch by reservation only.',
    chef_bio: { chef_name: null, roles: ['Owner (senior sommelier)', 'Teppan chef'], origin: null,
      background: 'Per Tabelog: a teppanyaki restaurant opened 13 August 2004 with a sommelier on staff. A May 2018 reviewer describes a casual owner holding a senior sommelier qualification, and wines at good prices.',
      philosophy: null, specialty: 'Dry-aged beef; truffle omelette.',
      anecdotes: [
        { text: 'A December 2025 parent brought a teenage son for a birthday: the salad, an omelette with raclette for ¥500 more, and juicy Iwate pork; the parent finally tasted aged meat from Sakaeya.', source: R + 'B519601556/' },
        { text: 'A May 2018 guest at the counter had 53-day aged female kuroge wagyu from Kagoshima, simply salted, and chatted with the sommelier-owner.', source: R + 'B360105310/' },
        { text: 'An October 2019 diner called the raclette omelette with truffle the highlight.', source: R + 'B420870085/' },
      ],
      japanese_sources_summary: '食べログ: ステーキ・牛料理・鉄板焼き、東山区清本町358-1 2F、祇園四条駅から徒歩5分、月〜土・祝前日・祝後日 11:30〜15:00 (L.O.料理13:00、ドリンク15:00)、18:00〜24:00 (料理22:00、ドリンク24:00)、日・祝 11:30〜15:00、18:00〜22:00 (料理20:00)、ランチは前日までの予約制、予約可、カード可、電子マネー・QR 不可、20席、禁煙、ワインの持ち込みは1本5,000円 (1本につき2名まで)、コースを食べられる子どもは可、ふさわしい服装で、ソムリエあり、テイクアウト・デリバリー、2004年8月13日開店。口コミ (2017年11月〜2025年12月、英語): 熟成肉の鉄板焼き、鹿児島の黒毛和牛の雌53日熟成、Sakaeya の熟成肉、ストリップロイン、岩手の豚、バスク豚、自家製ベーコンの京野菜サラダ、ラクレットとトリュフのオムレツ (ラクレット +500円)、お好み焼き、ソーセージ、シニアソムリエのオーナー (2018年5月)。',
      confidence: 'medium', sources: [TB, R + 'B289967083/', R + 'B357301323/', R + 'B360105310/', R + 'B420870085/', R + 'B420881828/', R + 'B449151908/', R + 'B519601556/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter teppanyaki; lunch by reservation; BYO wine ¥5,000; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清本町358-1 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review December 2025.' },
    pin_source: `Tabelog ${TB} (35.005082, 135.775343); cross-checked: GSI 京都府京都市東山区清本町358番地 (lot) 22 m; nearest existing record 18.4 m (kyoto_shinya_shokudo_kochan_gion); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519601556/', TB],
    price_note: 'Few prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Dry-aged beef, teppan-grilled', '', 'Teppanyaki', 'ask', 'no', '2018–2025 reviews.', 'aged_beef'),
      it('', '', 'Omelette (raclette +¥500)', '', 'Teppanyaki', 'ask', 'no', 'December 2025.', 'omelette'),
      it('', '', 'Wine corkage (per bottle)', '¥5,000', 'Charge', 'gf', 'vegan', 'Tabelog; up to two guests per bottle.', 'corkage'),
    ] }, {
    cuisine: '熟成肉と京野菜の鉄板焼きに充実のワイン (食べログ、2018〜2025年の口コミ)・鹿児島の黒毛和牛の53日熟成や Sakaeya の熟成肉、ストリップロイン、岩手の豚、バスク豚 (2017〜2025年の口コミ)・目の前で焼く自家製ベーコンの京野菜サラダ、ラクレットとトリュフのふわふわオムレツ (ラクレット +500円)、お好み焼き、ソーセージ (2018〜2025年の口コミ)・8,000〜15,000円ほど (食べログ)',
    neighborhood: '祇園清本町、2階',
    gf_detail: '要確認。鉄板焼きの熟成牛、豚、京野菜は小麦を使わないが、お好み焼きやクルトンも同じ鉄板。グルテンの情報はない (2018〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。熟成牛、豚、ソーセージ、自家製ベーコン、チーズのオムレツ (2017〜2025年の口コミ)。',
    notes: '[鉄板焼き・祇園清本町、2階] 熟成肉と京野菜を目の前で焼く、肩ひじ張らない祇園の鉄板のカウンター。ソムリエのワインとともに、自家製ベーコンのサラダとラクレットをかけたトリュフのオムレツから、熟成ストリップロインやジューシーな岩手の豚へ。お好み焼きも。ランチは予約制。',
  });
}

// ================================================================ 楽坐青天家 Rakuza Hareruya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035207/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_rakuza_hareruya', name: '楽坐青天家 (Rakuza Hareruya)', category: 'OMNI',
    lat: 35.005431157870134, lng: 135.76255172036483, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: fried oysters, corn tempura, karaage, udon to finish and soy-based oden (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi oden, fish and seafood (2026 reviews).',
    hours_raw: 'Daily 17:00–23:00 (last order 22:30); closing days irregular — see Instagram or Google (Tabelog). Reservations accepted; on the day, cancelling a course costs 100% and a seat-only booking ¥5,000 per person (Tabelog). Charge ¥550 incl. tax (Tabelog original チャージ料金：550円（税込み）). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay; no e-money (Tabelog). 55 seats: 13 at the counter downstairs, 12 at tables, 30 at sunken-kotatsu tables upstairs; groups to 26 (Tabelog; 2026 reviews). Non-smoking; smoking area outside (Tabelog). Children welcome; ask about bringing drinks (Tabelog). On Takakura above Nishikikoji, behind Daimaru; 3 min walk from Hankyu Karasuma Stn (Tabelog; August 2026). Opened 11 January 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takakura behind Daimaru, by Nishiki',
    cuisine: 'Izakaya of year-round oden, sushi and Kyoto obanzai (Tabelog; 2026 reviews) · oden about ¥220–275 a piece, potato salad made with oden potato and egg, saba oshizushi, dashimaki, grilled tai collar, sashimi platter for two ¥2,750, corn tempura ¥825, fried oysters, steamed-chicken salad, obanzai; udon or zosui to finish courses (2026 reviews) · Hareruya course with all-you-can-drink including junmai daiginjo (June 2026) · about ¥4,000–6,000 (Tabelog)',
    website: null, gmaps: gm('楽坐青天家'), menu_url: null,
    notes: '[Oden izakaya · Takakura behind Daimaru] A friendly two-floor izakaya that serves oden all year: a counter downstairs and sunken-kotatsu tables upstairs for groups, with oden-broth potato salad, saba oshizushi, sashimi and obanzai, and an all-you-can-drink sake course. ¥550 charge. One October 2026 guest found the seafood below par.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog: an izakaya of oden, sushi and Kyoto food opened 11 January 2021 on Takakura, with counter, table and sunken-kotatsu seating across two floors. Reviewers in 2026 praise the owner and staff\'s service.',
      philosophy: null, specialty: 'Oden; oden potato salad.',
      anecdotes: [
        { text: 'A July 2026 regular loves that oden is served even in summer and calls the oden-potato-and-egg salad a must.', source: R + 'B532416137/' },
        { text: 'A June 2026 work party of eight, booked by a regular, let the chef choose and was sent obanzai, sashimi, oden, karaage and husk-grilled young corn.', source: R + 'B530256184/' },
        { text: 'An October 2026 diner found the seafood and seafood salad lacking freshness, wondering if it was an off day.', source: R + 'B538673711/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・寿司・おでん、中京区高倉通錦小路上る貝屋町568、阪急烏丸駅・地下鉄四条駅から徒歩3分、毎日 17:00〜23:00 (L.O.22:30)、不定休 (Instagram・Google で告知)、予約可、当日のキャンセルはコース100%・席のみ1人5,000円、チャージ550円 (税込)、カード (VISA・Master・JCB・AMEX・Diners・銀聯)・PayPay 可、電子マネー不可、55席 (カウンター13、テーブル12、掘りごたつ30)、禁煙 (店外に喫煙所)、子ども可、飲み物の持ち込みは相談、2021年1月11日開店。口コミ (2026年1月〜10月、英語): 大丸の裏、夏もおでん、おでんのじゃがいもと卵のポテトサラダ、鯖の押し寿司、だし巻き、鯛のかま焼き、刺身盛り2人前2,750円、とうもろこしの天ぷら825円、おでん220〜275円、お通し550円、牡蠣フライ、蒸し鶏のサラダ、おばんざい、締めはうどんか雑炊、純米大吟醸も飲み放題の青天家コース、2階は掘りごたつ、魚介の鮮度がいまひとつとの声 (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B521571142/', R + 'B526179555/', R + 'B527498135/', R + 'B529876540/', R + 'B530256184/', R + 'B530449998/', R + 'B532416137/', R + 'B534171305/', R + 'B538673711/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥550 charge; same-day cancellation fees; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区高倉通錦小路上る貝屋町568',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005431, 135.762552); cross-checked: GSI 京都府京都市中京区貝屋町568番地 (lot) 32 m; nearest existing record 30.3 m (kyoto_tachinomi_tsukinokoguma); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529876540/'],
    price_note: 'Prices from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Sashimi platter for two', '¥2,750', 'Sashimi', 'ask', 'no', 'June 2026.', 'sashimi'),
      it('', '', 'Corn tempura', '¥825', 'Fried', 'no', 'no', 'June 2026.', 'corn_tempura'),
      it('', '', 'Oden, per piece', '¥220–275', 'Oden', 'ask', 'no', 'June 2026.', 'oden'),
    ] }, {
    cuisine: '一年中のおでん、寿司、京のおばんざいの居酒屋 (食べログ、2026年の口コミ)・おでん1品220〜275円ほど、おでんのじゃがいもと卵のポテトサラダ、鯖の押し寿司、だし巻き、鯛のかま焼き、刺身盛り2人前2,750円、とうもろこしの天ぷら825円、牡蠣フライ、蒸し鶏のサラダ、おばんざい、コースの締めはうどんか雑炊 (2026年の口コミ)・純米大吟醸も飲み放題の青天家コース (2026年6月)・4,000〜6,000円ほど (食べログ)',
    neighborhood: '大丸の裏の高倉通、錦のそば',
    gf_detail: 'グルテンフリー不可。牡蠣フライ、とうもろこしの天ぷら、唐揚げ、締めのうどん、醤油のおでん (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのおでん、魚、魚介 (2026年の口コミ)。',
    notes: '[おでんの居酒屋・大丸裏の高倉通] 一年中おでんを出す気さくな2階建ての居酒屋。1階はカウンター、2階は団体向けの掘りごたつ。おでんだしのポテトサラダ、鯖の押し寿司、刺身、おばんざい、日本酒の飲み放題コースも。チャージ550円。2026年10月には魚介がいまひとつという声も。',
  });
}

// ================================================================ 吉加寿 Kichi Kazu
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26020867/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '27:00']);
  put({
    id: 'kyoto_kichikazu_gion', name: '吉加寿 (Kichi Kazu)', category: 'OMNI',
    lat: 35.00475313706933, lng: 135.77554597918711, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A small izakaya with a beef shabu-shabu course; no menu or gluten information in the sources (2022–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef shabu-shabu and fish roe (2016; March 2025).',
    hours_raw: 'Daily 18:00–3:00, open all year (Tabelog; October 2022). Reservations accepted (Tabelog). Cash only — no cards, e-money or QR (Tabelog). An appetizer is served and charged (Tabelog original お通しあり). 15 seats: 7 at the counter and a sunken-kotatsu tatami room of 8 for 4–6 (Tabelog). Smoking allowed (Tabelog). Run by one man (October 2022; March 2025). Down an alley on the north side of Gion; 8 min walk from Gion-Shijo Stn (Tabelog; March 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Gion north side, alley',
    cuisine: 'Showa-flavoured one-man izakaya for drinks and late meals (October 2022) · courses such as beef shabu-shabu (March 2025); appetizers and fish roe with sake (February 2016) · sake, shochu and wine (Tabelog) · about ¥3,000–8,000 (2022–2025 reviews)',
    website: null, gmaps: gm('吉加寿 祇園'), menu_url: null,
    notes: '[Izakaya · Gion north side, 6 p.m.–3 a.m., every day] A tiny Showa-era izakaya down a Gion alley, run single-handed by a master who opens every night of the year until 3 a.m.: a counter for conversation and a small sunken-kotatsu room, with beef shabu-shabu by course. Many regulars. Cash only; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Master (sole operator, unnamed)'], origin: null,
      background: 'Per reviewers: a small Gion izakaya with Showa-era charm run solely by its master, open from 18:00 to 3:00 every day of the year (October 2022), with many regulars (March 2025). A December 2023 reviewer comes to see the head chef rather than for the food.',
      philosophy: null, specialty: 'Beef shabu-shabu course.',
      anecdotes: [
        { text: 'An October 2022 visitor marvelled that the master runs it alone and opens every day of the year, 18:00 to 3:00.', source: R + 'B456025359/' },
        { text: 'A March 2025 guest found the alley shop full of regulars yet quiet enough to relax at the counter over a beef shabu-shabu course.', source: R + 'B504029274/' },
        { text: 'A September 2023 reviewer liked how the master keeps a comfortable distance, good for relaxed talk at the counter.', source: R + 'B470786771/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、東山区祇園町北側347-127、京阪祇園四条駅から徒歩8分、毎日 18:00〜翌3:00、年中無休、予約可、カード・電子マネー・QR 不可、お通しあり、15席 (カウンター7、掘りごたつの座敷8・4〜6名の個室)、喫煙可、日本酒・焼酎・ワイン。口コミ (2016年2月〜2026年9月、英語): 昭和の雰囲気の小さな店、店主が一人で営む、年中無休で18時から3時まで (2022年10月)、常連が多い、牛しゃぶのコース (2025年3月)、店主との距離感がよい (2023年9月)、きれい好きには向かないとの声 (2023年12月)、2023年11月〜2026年9月に12回通う常連。',
      confidence: 'low', sources: [TB, R + 'B184771165/', R + 'B456025359/', R + 'B470786771/', R + 'B474344812/', R + 'B477464264/', R + 'B504029274/'] },
    cultural_comfort: { level: 'japanese', note: 'One-man counter of regulars; cash only; appetizer charged; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-127',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; a regular\'s visits logged through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004753, 135.775546); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 13 m; nearest existing record 16.0 m (kyoto_gion_sushi_taku); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504029274/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Beef shabu-shabu course', '', 'Courses', 'ask', 'no', 'March 2025.', 'shabu'),
    ] }, {
    cuisine: '昭和の趣の、店主一人の居酒屋で、飲みにも遅い食事にも (2022年10月)・牛しゃぶなどのコース (2025年3月)、つまみや魚卵で日本酒 (2016年2月)・日本酒、焼酎、ワイン (食べログ)・3,000〜8,000円ほど (2022〜2025年の口コミ)',
    neighborhood: '祇園北側、路地',
    gf_detail: '要確認。牛しゃぶのコースのある小さな居酒屋。メニューやグルテンの情報はない (2022〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛しゃぶ、魚卵 (2016年、2025年3月)。',
    notes: '[居酒屋・祇園北側、毎日18時〜深夜3時] 祇園の路地の昭和の小さな居酒屋。店主が一人で切り盛りし、一年中毎晩深夜3時まで開けている。話のはずむカウンターと小さな掘りごたつの部屋、コースで牛しゃぶ。常連が多い。現金のみ、喫煙可。',
  });
}

// ================================================================ 京 味和 Kyo Ajiwa
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037241/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://kyoajiwa.my.canva.site/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_kyo_ajiwa', name: '京 味和 (Kyo Ajiwa)', category: 'OMNI',
    lat: 34.99808060787739, lng: 135.77068045028489, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kaiseki courses change daily; Tabelog asks guests to note allergies when booking. No gluten information (Tabelog; 2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi, fish and Kirishima beef courses (Tabelog; 2022–2024 reviews).',
    hours_raw: 'Daily 17:00–22:00 (last entry 20:00); closed 25 December–1 January; lunch kaiseki and closing-day bookings by phone or email (Tabelog). Reservation only; note allergies when booking; same-day bookings by phone (Tabelog). Service charge 5% (Tabelog original サービス料5%). Cancellation 50% three days before, 80% two days, 100% the day before or on the day (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 18 seats: 4 at the counter and 3 private rooms for 2–10 (Tabelog). Non-smoking (Tabelog). Children welcome; children\'s meals ¥3,300 and ¥5,500 by advance booking (Tabelog). A Miyagawa-cho back alley; 6 min walk from Keihan Gion-Shijo Stn, near Kiyomizu-Gojo (Tabelog; October 2024). Opened 18 March 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Miyagawa-cho, back alley',
    cuisine: 'Seasonal Kyoto kaiseki and Kirishima beef (Tabelog) · kaiseki ¥9,800 and ¥15,000; Kirishima beef kaiseki ¥18,900; sukiyaki or shabu-shabu ¥23,000; tax included, plus 5% service (Tabelog) · dishes such as tuna, Kirishima beef in white-miso soup, salmon tartare on potato chips, matsutake and hamo dobin-mushi, sashimi of sawara and toro, braised tuna, sweet shrimp sushi, seasonal rice (2022–2024 reviews) · sake, champagne, wine, whisky, shochu (Tabelog) · about ¥15,000–20,000 (Tabelog)',
    website: WEB, gmaps: gm('京 味和 宮川町'), menu_url: null,
    notes: '[Kaiseki · Miyagawa-cho alley] A quiet kaiseki house down a Miyagawa-cho alley with a four-seat counter and three private rooms: seasonal courses from ¥9,800 and Kirishima beef kaiseki, sukiyaki or shabu-shabu. Courses change daily; children\'s meals by arrangement. Reservation only; 5% service charge.',
    chef_bio: { chef_name: null, roles: ['Chef-owner (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog: a Japanese restaurant opened 18 March 2022 near Kiyomizu-dera and Otani Honbyo, offering kaiseki and Kirishima beef courses with counter and private rooms. An October 2024 reviewer says it was listed as a Michelin Guide selection for 2024 and describes a veteran chef chatting across the counter.',
      philosophy: 'Traditional Japanese cuisine in a relaxed setting (Tabelog).', specialty: 'Kirishima beef kaiseki.',
      anecdotes: [
        { text: 'A November 2022 party of four in kimono could not finish the bamboo-shoot rice and had it made into onigiri to take away.', source: R + 'B461797355/' },
        { text: 'An October 2024 pair had the counter to themselves as the veteran chef talked between courses — salmon tartare on potato chips, matsutake dobin-mushi.', source: R + 'B493104782/' },
        { text: 'A December 2023 guest was seen off by a maiko on the way out.', source: R + 'B475763933/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・海鮮、東山区西御門町455-2、京阪祇園四条駅から徒歩6分、毎日 17:00〜22:00 (最終入店20:00)、12月25日〜1月1日休み、昼の懐石や休業日の予約は電話かメールで、完全予約制、アレルギーは予約時に、サービス料5%、キャンセル料 (3日前50%、2日前80%、前日・当日100%)、カード可、電子マネー・QR 不可、18席 (カウンター4、個室3室2〜10名)、禁煙、子ども可 (お子様料理3,300円・5,500円、要予約)、2022年3月18日開店、清水寺や Otani Honbyo に近い、懐石9,800円・15,000円、Kirishima 牛の懐石18,900円、すき焼き・しゃぶしゃぶ23,000円 (税込)、記念日のホールケーキ5,000円。口コミ (2022年11月〜2026年11月、英語): 宮川町の路地、2024年のミシュランガイド掲載との声、ベテランの料理人がカウンターで話す、まぐろ、Kirishima 牛の白味噌の椀、ポテトチップスにのせた鮭のタルタル、松茸と鱧の土瓶蒸し、鰆や中とろの刺身、まぐろの煮物、甘海老の寿司、筍ご飯を持ち帰りのおにぎりに (2022年11月)、帰りに舞妓の見送り (2023年12月)、静かで品数が多い (2026年5月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B446617892/', R + 'B446699566/', R + 'B461797355/', R + 'B472210871/', R + 'B475763933/', R + 'B481657687/', R + 'B493104782/', R + 'B528302299/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; 5% service charge; private rooms; children\'s meals by arrangement; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区西御門町455-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (34.998081, 135.770680); cross-checked: GSI 京都府京都市東山区西御門町455番地 (lot) 8 m; nearest existing record 30.1 m (kyoto_meigetsudo_miyagawacho); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Prices from Tabelog\'s remarks, tax included, plus 5% service.', last_checked: TODAY, items: [
      it('', '', 'Kaiseki course', '¥9,800', 'Courses', 'ask', 'no', 'Tabelog.', 'kaiseki9800'),
      it('', '', 'Kaiseki course', '¥15,000', 'Courses', 'ask', 'no', 'Tabelog.', 'kaiseki15000'),
      it('', '', 'Kirishima beef kaiseki', '¥18,900', 'Courses', 'ask', 'no', 'Tabelog.', 'kirishima'),
    ] }, {
    cuisine: '季節の京懐石とKirishima 牛 (食べログ)・懐石9,800円・15,000円、Kirishima 牛の懐石18,900円、すき焼き・しゃぶしゃぶ23,000円、税込でサービス料5%が別 (食べログ)・まぐろ、Kirishima 牛の白味噌の椀、ポテトチップスにのせた鮭のタルタル、松茸と鱧の土瓶蒸し、鰆や中とろの刺身、まぐろの煮物、甘海老の寿司、季節のご飯など (2022〜2024年の口コミ)・日本酒、シャンパン、ワイン、ウイスキー、焼酎 (食べログ)・15,000〜20,000円ほど (食べログ)',
    neighborhood: '宮川町、路地',
    gf_detail: '要確認。懐石は日替わりで、食べログはアレルギーを予約時に伝えるよう案内。グルテンの情報はない (食べログ、2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だし、魚、Kirishima 牛のコース (食べログ、2022〜2024年の口コミ)。',
    notes: '[懐石・宮川町の路地] 宮川町の路地にある、カウンター4席と個室3室の静かな懐石の店。9,800円からの季節のコースに、Kirishima 牛の懐石、すき焼き、しゃぶしゃぶ。料理は日替わり、子ども向けの料理も予約で。完全予約制、サービス料5%。',
  });
}

save();
