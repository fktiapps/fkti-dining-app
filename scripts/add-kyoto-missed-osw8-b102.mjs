// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 102 (2026-11-08).
//   + そいる Soil (creative Japanese of organic vegetables in a machiya, Muromachi-Ebisugawa; rest)
//   + OLIO STAGNO (ten-seat traditional Italian, Aburakoji-Oike; rest)
//   + papillon (night café with a rooftop, Kawaramachi-Shichijo; rest)
//   + 御所 デリノ Gosho Delino (machiya Italian east of the Imperial Palace, sister of Lino; rest)
//   Rest list (mod 6 = 1) after batch 101, nearest-first — skipped:
//   - MOGU kyoto 26037067: retail food shop (Greg 11-07 ruling) — takeaway-only cake shop; not historic, no sourced GF or vegan
//     options.
//   - プレジール・シュクレ 26012761: retail food shop (Greg 11-07 ruling) — takeaway-only cake shop (Tabelog: takeaway only), opened
//     2 May 2009; not historic, no sourced GF or vegan options.
//   - ほっともっと 烏丸丸太町店 26020747: chain (national bento chain).
//   Deferred to the next batch: 京都御所 富小路休憩所 26025529 (fetched; operator 一般財団法人国民公園協会 checked).
//   Brand check: queue-status.jsonl, than.co.jp/brands and the WILL brands checked — none matches. 御所 デリノ's invoice is held by
//   株式会社LINO DREAM WORKS (NTA register) and a reviewer calls it a sister of Lino (kyoto_lino_karasuma_oike, in data) — a
//   local sister concept with a different name. None of the four is in data (main e30031a4, hidden records included).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-102');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260302/26037067/', 'retail food shop (Greg 11-07 ruling): takeaway-only cake shop; not historic, no sourced GF or vegan options');
skip('https://tabelog.com/en/kyoto/A2601/A260302/26012761/', 'retail food shop (Greg 11-07 ruling): takeaway-only cake shop opened 2009; not historic, no sourced GF or vegan options');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26020747/', 'chain: ほっともっと national bento chain');

// ================================================================ そいる Soil
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26020765/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_soil_muromachi', name: 'そいる (Soil)', category: 'OMNI',
    lat: 35.01490979758136, lng: 135.7581634265199, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi and organic vegetable plates may suit, but fried squid menchi, fried nama-fu (wheat gluten) and sauces involve wheat or soy (2026 reviews). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. An assortment of organic vegetables is a signature, but dashi and fish feature widely (2026 reviews).',
    hours_raw: 'Lunch from 11:30 and dinner from 17:30, each until sold out; closing days not fixed (Tabelog). With no closing times given, no daily hours are listed. Reservations required per Tabelog’s introduction. No service charge (Tabelog original 無し). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (Tabelog). 40 seats: counter and tables on 1F, a tatami room on 2F, private rooms for 4–20; non-smoking (Tabelog). A renovated machiya off Muromachi-dori, 5 min walk from Marutamachi Stn exit 6 (Tabelog; May 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Muromachi-Ebisugawa, near Marutamachi',
    cuisine: 'Creative Japanese izakaya of organic vegetables and seasonal ingredients in a machiya, with a deep sake list (Tabelog; 2026 reviews) · omakase or à la carte: thick-cut sashimi — bluefin, amberjack, octopus, squid, kombu-cured sea bream; squid menchi with tomato and pepper sauce; an assortment of organic vegetables; grilled fish collar (April–July 2026) · about ¥5,000–10,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('そいる 鏡屋町 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Creative izakaya · near Marutamachi] A calm machiya with a 2F tatami room serving organic vegetables, thick-cut seasonal sashimi, squid menchi and grilled collar, with well-chosen sake — around for 15 years. Book; no service charge.',
    chef_bio: { chef_name: 'Doi (owner, per a May 2026 review)', roles: ['Owner-chef'], origin: null,
      background: 'Per reviewers: a creative Japanese izakaya near Marutamachi for about 15 years (June 2026); the name comes from the owner, Mr Doi — 土 means soil, and 井 looks like a hashtag (May 2026).',
      philosophy: 'Healthy dishes of organic vegetables and seasonal ingredients (Tabelog).', specialty: 'Organic vegetable assortment; sashimi.',
      anecdotes: [
        { text: 'A May 2026 diner learned the name plays on the owner’s surname: 土 for soil and 井 for a hashtag.', source: R + 'B528518276/' },
        { text: 'A May 2026 omakase guest could not stop eating, especially the non-greasy squid menchi with tomato and pepper sauce.', source: R + 'B528222529/' },
        { text: 'An August 2026 party of six was looked after kindly over excellent food and sake.', source: R + 'B533639107/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・居酒屋、中京区室町通夷川東入る鏡屋町50-3、丸太町駅6番出口から徒歩5分、11:30〜売り切れまで、17:30〜売り切れまで、不定休、予約制 (紹介文)、サービス料無し、カード (VISA・Master・JCB・AMEX・Diners)・電子マネー・QR 可、40席、2階に座敷、4〜20名の個室、禁煙、紹介文 (英訳): オーガニック野菜と旬の食材の料理の町家。口コミ (2026年4〜8月、英語): 店名は店主の Doi さんにちなむ (土 = soil、井 = ハッシュタグ)、15年続く居酒屋、おまかせ、厚切りの刺身 (本まぐろ、かんぱち、たこ、いか、鯛の昆布じめ)、いかのメンチとトマトとピーマンのソース、オーガニック野菜の盛り合わせ、かまの焼き物、日本酒。',
      confidence: 'medium', sources: [TB, R + 'B527183732/', R + 'B528222529/', R + 'B528518276/', R + 'B528839272/', R + 'B528846373/', R + 'B529867819/', R + 'B530546519/', R + 'B531349975/', R + 'B532578798/', R + 'B533639107/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; no service charge; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区室町通夷川東入る鏡屋町50-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.014910, 135.758163); cross-checked: GSI 京都府京都市中京区鏡屋町50番地 (lot) 75 m; nearest existing record 5.5 m (kyoto_yakko_udon_ebisugawa), kyoto_ginjo_kuraudo_marutamachi 7.7 m at 鏡屋町50-2; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528518276/', R + 'B530546519/'],
    price_note: 'Prices from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Assorted organic vegetables', '', 'Small dishes', 'ask', 'ask', '2026 reviews.', 'vegetables'),
      it('', '', 'Assorted sashimi', '¥1,800', 'Sashimi', 'ask', 'no', 'May 2026.', 'sashimi'),
      it('', '', 'Squid menchi', '¥600', 'Fried', 'no', 'no', 'May 2026; served with tomato and pepper sauce.', 'menchi'),
    ] }, {
    cuisine: 'オーガニック野菜と旬の食材の創作和食と豊富な日本酒の町家の居酒屋 (食べログ、2026年の口コミ)・おまかせか一品: 本まぐろ、かんぱち、たこ、いか、鯛の昆布じめの厚切りの刺身、トマトとピーマンのソースのいかのメンチ、オーガニック野菜の盛り合わせ、かまの焼き物 (2026年4〜7月)・5,000〜10,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '室町夷川、丸太町の近く',
    gf_detail: '要確認。刺身やオーガニック野菜は合う可能性があるが、いかのメンチ、生麩の揚げ物、たれは小麦や醤油 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。オーガニック野菜の盛り合わせが看板だが、だしや魚が多い (2026年の口コミ)。',
    notes: '[創作居酒屋・丸太町の近く] 2階に座敷のある落ち着いた町家。オーガニック野菜、厚切りの旬の刺身、いかのメンチ、かまの焼き物に選りすぐりの日本酒。15年続く店。予約を、サービス料なし。',
  });
}

// ================================================================ OLIO STAGNO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26038651/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '20:00']);
  put({
    id: 'kyoto_olio_stagno', name: 'OLIO STAGNO', category: 'OMNI',
    lat: 35.010730047863944, lng: 135.7536793104246, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Risotto, charcuterie and meat courses may suit, but courses include pasta; no gluten information (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of charcuterie, duck, meat and bottarga (2023–2026 reviews).',
    hours_raw: 'Wednesday–Sunday and holidays 12:00–15:00 (last order 13:00) and from 18:00 (last order 20:00); closed Monday, Tuesday and the last Sunday of the month (then open the following Tuesday); Mondays may occasionally open — check the website (Tabelog). Sunday is left out of the hours because of the monthly closure, and the evening is shown to 20:00, the last order. Groups of four or more may book courses on closed days (Tabelog). Cover charge ¥500 per person (Tabelog original チャージ500円／人数). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 10 seats: 6 at the counter, 4 at a table; non-smoking (Tabelog). Basement of Joy Oike with a large tree in the room, 3 min walk from Nijojo-mae Stn (Tabelog; July 2023; February 2026).',
    hours: { 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Aburakoji-Oike, near Nijo Castle',
    cuisine: 'Ten-seat counter of traditional Italian home cooking by a one-man owner-chef, simple but deep (2023–2026 reviews) · courses with prosciutto and salami, bottarga risotto, duck and well-cooked meats (February 2023–March 2026) · lunch about ¥10,000–15,000, dinner about ¥15,000–20,000 (Tabelog)',
    website: null, gmaps: gm('OLIO STAGNO 京都 御池'), menu_url: null,
    notes: '[Italian · Aburakoji-Oike, 10 seats] A hidden basement counter round a big tree, where a solo chef cooks traditional Italian courses — charcuterie, bottarga risotto, duck — simple and profound. Book. ¥500 cover. Closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Per reviewers: a small Italian restaurant hidden in a basement near Nijo Castle, cooked single-handed by an owner-chef whose courses lean towards traditional Italian home cooking with careful ingredients (2023–2026 reviews).',
      philosophy: null, specialty: 'Bottarga risotto; duck.',
      anecdotes: [
        { text: 'A March 2026 regular returning after more than a year found the dishes as simple and profound as ever, especially the bottarga risotto.', source: R + 'B475397095/' },
        { text: 'A February 2025 holiday dinner had just one chef and two parties — a very homey evening of traditional Italian dishes.', source: R + 'B501156218/' },
        { text: 'A September 2025 family celebrated a mother’s birthday at lunch in the hidden basement room.', source: R + 'B513812223/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン、中京区油小路通御池下ル式阿弥町139 ジョイ御池 B1F、二条城前駅から徒歩3分、水〜日・祝日 12:00〜15:00 (L.O.13:00)、18:00〜 (L.O.20:00)、月・火と月末の日曜休み (その翌火曜は営業)、月曜はたまに営業 (サイトで確認)、4名以上はコースで休業日も相談可、チャージ500円／人数、カード (VISA・Master・JCB・AMEX・Diners) 可、電子マネー・QR 不可、10席 (カウンター6、テーブル4)、禁煙。口コミ (2023年2月〜2026年10月、英語): 一人で営むオーナーシェフ、伝統的なイタリアの家庭料理、生ハムとサラミ、からすみのリゾット、鴨、肉の火入れ、地下の隠れ家、店内の大きな木。',
      confidence: 'medium', sources: [TB, R + 'B461025180/', R + 'B467833122/', R + 'B468002150/', R + 'B475397095/', R + 'B495495153/', R + 'B501156218/', R + 'B513812223/', R + 'B522239041/', R + 'B532513486/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥500 cover; book; ten seats.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区油小路通御池下ル式阿弥町139 ジョイ御池 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010730, 135.753679); cross-checked: GSI 京都府京都市中京区式阿弥町139番地 (lot) 34 m; nearest existing record 43.3 m (kyoto_unagi_sansho_gogyo); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B475397095/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Bottarga risotto', '', 'Courses', 'ask', 'no', 'March 2026.', 'risotto'),
    ] }, {
    cuisine: '一人のオーナーシェフの、シンプルで奥深い伝統的なイタリアの家庭料理のカウンター10席 (2023〜2026年の口コミ)・生ハムとサラミ、からすみのリゾット、鴨、火入れのよい肉のコース (2023年2月〜2026年3月)・昼10,000〜15,000円ほど、夜15,000〜20,000円ほど (食べログ)',
    neighborhood: '油小路御池、二条城の近く',
    gf_detail: '要確認。リゾット、シャルキュトリ、肉は合う可能性があるが、コースにパスタ。グルテンの情報はない (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。シャルキュトリ、鴨、肉、からすみのコース (2023〜2026年の口コミ)。',
    notes: '[イタリアン・油小路御池、10席] 大きな木を囲む地下の隠れたカウンター。一人のシェフのシンプルで奥深い伝統的なイタリアンのコース (シャルキュトリ、からすみのリゾット、鴨)。予約を。チャージ500円。月・火休み。',
  });
}

// ================================================================ papillon
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26036719/'; const R = TB + 'dtlrvwlst/';
  const A = day(['13:00', '20:00']); const F = day(['13:00', '22:00']); const S = day(['12:00', '22:00']); const U = day(['12:00', '20:00']);
  put({
    id: 'kyoto_papillon_shichijo', name: 'papillon', category: 'OMNI',
    lat: 34.989387277880965, lng: 135.76457466020136, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Macarons are usually almond-based, but butter-cookie sandwiches and cakes contain wheat; no gluten information (2022–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Espresso is plant-based; sweets use butter and eggs; no plant milk mentioned (2022–2026 reviews).',
    hours_raw: 'Tuesday–Thursday 13:00–20:00; Friday 13:00–22:00; Saturday 12:00–22:00; Sunday 12:00–20:00; closed Monday; hours may change (Tabelog). One drink per person (October 2022). No reservations (Tabelog). Cash only — no cards, e-money or QR (Tabelog). Non-smoking; a second-floor space for bookings and a rooftop (Tabelog; April 2022; May 2024). A slim white building marked by a butterfly emblem and lights, with an easy-to-miss entrance, at the Kawaramachi-Shichijo crossing, about 10 min walk from Kyoto Station (2022–2025 reviews). Opened 13 September 2021 (Tabelog).',
    hours: { 1: A, 2: A, 3: A, 4: F, 5: S, 6: U }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Shichijo, near Kyoto Station',
    cuisine: 'White, butterfly-themed café of sweets and espresso, open into the evening (2022–2026 reviews) · macarons, bite-sized butter-cookie sandwiches, cakes from the showcase; seasonal sets such as the sakura set ¥1,350 (April 2022–June 2025) · cappuccino with a strong espresso, lattes (December 2023; May 2025) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('papillon カフェ 河原町七条'), menu_url: null,
    notes: '[Café · Kawaramachi-Shichijo, open late] A pretty, white “night café” near Kyoto Station, found by its butterfly emblem: macarons, butter-cookie sandwiches and cakes with strong espresso drinks, open until 22:00 at weekends. One drink each; cash only; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a café opened 13 September 2021 at Kawaramachi-Shichijo, named papillon after the butterfly, with a white interior, a showcase of sweets, a second-floor booking space and a rooftop (2022–2025 reviews).',
      philosophy: null, specialty: 'Macarons; espresso.',
      anecdotes: [
        { text: 'An August 2022 passenger spotted it from the bus, sensed good sweets and got off for a visit straight away.', source: R + 'B452763604/' },
        { text: 'A June 2026 traveller looking for a night café between Shichijo and Kyoto Station found it open around 6 p.m.', source: R + 'B532270866/' },
        { text: 'A December 2023 visitor drawn by the butterfly logo lingered over a cappuccino with real espresso strength.', source: R + 'B476946552/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・ケーキ、下京区材木町505-41、市バス「河原町七条」から徒歩1分、火〜木 13:00〜20:00、金 13:00〜22:00、土 12:00〜22:00、日 12:00〜20:00、月曜休み、予約不可、カード・電子マネー・QR 不可、禁煙、個室あり、2021年9月13日開店。口コミ (2022年4月〜2026年6月、英語): 蝶のマークと灯りの白い細い建物、入口がわかりにくい、ワンドリンク制 (2022年10月)、屋上、2階の予約スペース、マカロン、ひと口のバタークッキーサンド、ショーケースのケーキ、桜のセット1,350円、エスプレッソのしっかりしたカプチーノ、ラテ、夜カフェ。',
      confidence: 'medium', sources: [TB, R + 'B450134434/', R + 'B452763604/', R + 'B455433007/', R + 'B458655367/', R + 'B476946552/', R + 'B484800411/', R + 'B485532535/', R + 'B508923869/', R + 'B521723363/', R + 'B532270866/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; one drink each; open into the evening.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区材木町505-41',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through June 2026.' },
    pin_source: `Tabelog ${TB} (34.989387, 135.764575); cross-checked: GSI 京都府京都市下京区材木町505番地 (lot) 36 m; nearest existing record 27.7 m (kyoto_artisan_teppan_shichijo); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B485532535/'],
    price_note: 'Price from an April 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Sakura set (seasonal)', '¥1,350', 'Sets', 'ask', 'no', 'April 2024.', 'sakura'),
      it('', '', 'Cappuccino', '', 'Drinks', 'ask', 'no', 'December 2023.', 'cappuccino'),
    ] }, {
    cuisine: '夜まで開く、蝶がテーマの白い甘味とエスプレッソのカフェ (2022〜2026年の口コミ)・マカロン、ひと口のバタークッキーサンド、ショーケースのケーキ、桜のセット1,350円などの季節のセット (2022年4月〜2025年6月)・エスプレッソのしっかりしたカプチーノ、ラテ (2023年12月、2025年5月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '河原町七条、京都駅の近く',
    gf_detail: '要確認。マカロンはふつうアーモンドが主だが、バタークッキーサンドやケーキは小麦。グルテンの情報はない (2022〜2026年の口コミ)。',
    vegan_detail: '要確認。エスプレッソは植物性、甘味はバターと卵。植物性ミルクの記載はない (2022〜2026年の口コミ)。',
    notes: '[カフェ・河原町七条、夜まで] 京都駅近く、蝶のマークが目印の白くかわいい夜カフェ。マカロン、バタークッキーサンド、ケーキにしっかりしたエスプレッソ、週末は22時まで。ワンドリンク制、現金のみ、月曜休み。',
  });
}

// ================================================================ 御所 デリノ Gosho Delino
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26035183/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_gosho_delino', name: '御所 デリノ (Gosho Delino)', category: 'OMNI',
    lat: 35.018204557863776, lng: 135.76807433048998, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salads, appetisers and roast beef may suit, but every set includes pasta; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A white-mushroom salad and vegetable appetisers appear, but courses centre on meat, cheese and dairy desserts (2026 reviews).',
    hours_raw: 'Friday–Wednesday and holidays 12:00–15:00 (last order 13:30) and 17:30–22:00 (last orders food 20:30, drinks 21:00); closed Thursday and on irregular days — see Instagram (Tabelog). Reservations accepted; seating preferences not guaranteed; bookings may be released 30 minutes after the time without contact; call for parties of 5 or more (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay (Tabelog). 40 seats; non-smoking, smoking area outside; BYO and a sommelier per Tabelog. A machiya between the Imperial Palace and Kawaramachi, larger inside than it looks (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinkarasuma-Marutamachi, east of the Imperial Palace',
    cuisine: 'Seasonal Italian and Italian wine in a modern machiya, a sister of Lino (Tabelog; September 2026) · lunch Pranzo A: assorted appetisers, a white-mushroom salad and a choice of three monthly pastas; Pranzo B adds a main and dessert (Tabelog; May–August 2026) · dinner course ¥6,600 of appetisers, pasta, roast beef top blade and dessert; courses with all-you-can-drink (March and October 2026) · Yoro pork, corn soup, pistachio tiramisu (June–August 2026) · lunch about ¥3,000–4,000, dinner about ¥6,000–8,000 (Tabelog)',
    website: null, gmaps: gm('御所 デリノ'), menu_url: TB + 'dtlmenu/',
    notes: '[Italian · east of the Imperial Palace] A calm, modern machiya Italian from the team behind Lino: lunch of appetisers and a choice of monthly pastas, and dinner courses ending in roast beef and pistachio tiramisu, with Italian wines. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and sommelier (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: an Italian restaurant in a townhouse east of the Imperial Palace serving seasonal dishes and Italian wine; its invoice registration is held by 株式会社LINO DREAM WORKS (NTA register), and a September 2026 reviewer calls it a sister of Lino near Karasuma-Oike.',
      philosophy: 'Fusion of tradition and modernity (July 2026 review).', specialty: 'Monthly pasta lunch.',
      anecdotes: [
        { text: 'A September 2026 regular, who keeps coming back, found the sister of Lino surprisingly roomy inside a small-looking machiya.', source: R + 'B536131262/' },
        { text: 'A July 2026 host brought a visiting French couple, drawn by the idea of tradition meeting modernity.', source: R + 'B532003078/' },
        { text: 'A May 2026 repeat lunch guest noticed fewer appetisers and no panini compared with earlier visits.', source: R + 'B527997019/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・牛肉料理・パスタ、上京区新烏丸通丸太町上る信富町304-4、金〜水・祝日 12:00〜15:00 (L.O.13:30)、17:30〜22:00 (L.O.料理20:30、飲み物21:00)、木曜と不定休 (インスタグラムで)、予約可 (席の指定は不可の場合あり、30分連絡なしはキャンセル扱い、5名以上は電話で)、カード (VISA・Master・JCB・AMEX・Diners)・PayPay 可、40席、禁煙 (外に喫煙所)、持ち込み可、ソムリエ、紹介文 (英訳): 御所の東の町家で季節のイタリアンとイタリアワイン、昼は月替わり3種のパスタの Pranzo A、主菜とデザートの Pranzo B。インボイス登録は株式会社LINO DREAM WORKS (国税庁)。口コミ (2026年3〜10月、英語): Lino の姉妹店、白いマッシュルームのサラダ、前菜の盛り合わせ、ディナーコース6,600円 (前菜、パスタ、牛肩ロースのロースト、デザート)、飲み放題付きのコース、Yoro 豚、コーンスープ、ピスタチオのティラミス。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=3130001073236', R + 'B523985481/', R + 'B527371758/', R + 'B527997019/', R + 'B530658929/', R + 'B532003078/', R + 'B533095944/', R + 'B533270691/', R + 'B534799356/', R + 'B536131262/', R + 'B538117250/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book; bookings released after 30 minutes without contact.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区新烏丸通丸太町上る信富町304-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.018205, 135.768074); cross-checked: GSI 京都府京都市上京区信富町304番地 (lot) about 47 m; nearest existing record 51.1 m (kyoto_kappo_shinatomi); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538117250/'],
    price_note: 'Price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Dinner course', '¥6,600', 'Courses', 'ask', 'no', 'October 2026.', 'dinner'),
      it('', '', 'Pranzo A (appetisers and pasta)', '', 'Lunch', 'no', 'ask', 'May 2026.', 'pranzo_a'),
    ] }, {
    cuisine: 'モダンな町家の季節のイタリアンとイタリアワイン、Lino の姉妹店 (食べログ、2026年9月)・昼の Pranzo A: 前菜の盛り合わせ、白いマッシュルームのサラダ、月替わり3種から選ぶパスタ、Pranzo B は主菜とデザートも (食べログ、2026年5〜8月)・前菜、パスタ、牛肩ロースのロースト、デザートの6,600円のディナーコース、飲み放題付きのコース (2026年3月、10月)・Yoro 豚、コーンスープ、ピスタチオのティラミス (2026年6〜8月)・昼3,000〜4,000円ほど、夜6,000〜8,000円ほど (食べログ)',
    neighborhood: '新烏丸丸太町、御所の東',
    gf_detail: '要確認。サラダ、前菜、ローストビーフは合う可能性があるが、どのセットにもパスタ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。白いマッシュルームのサラダや野菜の前菜もあるが、コースは肉、チーズ、乳製品のデザートが中心 (2026年の口コミ)。',
    notes: '[イタリアン・御所の東] Lino のチームのモダンで落ち着いた町家のイタリアン。昼は前菜と月替わりのパスタ、夜はローストビーフやピスタチオのティラミスで締めるコースにイタリアワイン。木曜休み。',
  });
}

save();
