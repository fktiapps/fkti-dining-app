// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 94 (2026-11-08).
//   + 二条 厨 Nijo Kuriya (one-chef wine bistro in a machiya, Ainomachi-Nijo; rest)
//   + ミン Min (alley Chinese diner and yakiniku, Kawabata-Nijo east; rest)
//   + ここどす Kokodosu (tea soba and udon on Gojozaka; rest)
//   + 夜鳴き まるふく Yonaki Marufuku (late-night ramen in the former Nintendo headquarters, Shomen-Kamogawa; rest)
//   Rest list (mod 6 = 1) after batch 93, nearest-first — skipped:
//   - 京和食だいにんぐ 茶々 26038255: big-chain hotel (Greg 11-08) — inside Hotel MyStays Kyoto Shijo.
//   - LOCAL baking treats 26036425: retail food shop (Greg 11-07 ruling) — takeaway baked-goods shop open three days a week;
//     not historic, no sourced GF or vegan options.
//   Flags: (1) 夜鳴き まるふく is a hotel restaurant (Tabelog) of the 丸福樓 hotel (marufukuro.com) — drafted as a hotel venue
//   that is not a known big chain; please confirm. (2) It is a ramen shop, but the six ramen-profile dimensions cannot all be
//   sourced, so no ramen block is attached (cuisine_type ramen).
//   Brand check: queue-status.jsonl, than.co.jp/brands and the WILL brands checked — none matches. 夜鳴き まるふく is unrelated
//   to kyoto_katsugyo_izakaya_marufuku. None of the four is in data (main df643f03, hidden records included).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-94');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260203/26038255/', 'big-chain hotel (Greg 11-08): inside Hotel MyStays Kyoto Shijo');
skip('https://tabelog.com/en/kyoto/A2601/A260302/26036425/', 'retail food shop (Greg 11-07 ruling): takeaway baked-goods shop open three days a week; not historic, no sourced GF or vegan options');

// ================================================================ 二条 厨 Nijo Kuriya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26006335/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://kyoto-kuriya.com/';
  const H = day(['18:00', '22:30']);
  put({
    id: 'kyoto_nijo_kuriya', name: '二条 厨 (Nijo Kuriya)', category: 'OMNI',
    lat: 35.01342566786474, lng: 135.76157601044628, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Duck tataki, pickles and omelette may suit, but bruschetta, pasta and braised dishes likely involve wheat (2024–2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat stews, duck, prosciutto and cheese (2024–2026 reviews).',
    hours_raw: 'Wednesday–Monday 18:00–22:30 (last order 22:00); closed Tuesday; hours may change (Tabelog). Reservations advised — walk-ins have been turned away, and Fridays and Saturdays fill up (October 2024; January 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Counter and tables in a renovated machiya; shoes off at the door (Tabelog; April 2024). Private hire for up to 20 (Tabelog). Between Karasuma-Oike and Marutamachi, about 5 min walk.',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ainomachi-Nijo, Goshominami',
    cuisine: 'Casual French bistro and wine bar of stews, run by one chef (2023–2026 reviews) · the assorted stews, beef braised in red wine with potato (April 2023; April 2025) · prosciutto and cream-cheese bruschetta, duck-breast tataki, pickled vegetables, a fluffy omelette (April 2025; January 2026) · wines chosen to taste (December 2022) · about ¥4,000–6,000 (Tabelog; 2024–2026 reviews)',
    website: WEB, gmaps: gm('二条 厨 京都'), menu_url: null,
    notes: '[Wine bistro · Ainomachi-Nijo] A quiet, shoes-off machiya bistro where a former hotel chef cooks alone: assorted stews, red-wine beef, duck tataki and a perfect omelette, with wine picked to your taste. Book, especially at weekends. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Per reviewers: a wine-dining bistro in a renovated townhouse, run single-handed by an owner who used to cook in a hotel (February 2026), quiet and attentive; regulars kept it going through the pandemic, the owner told a September 2024 guest.',
      philosophy: null, specialty: 'Assorted stews.',
      anecdotes: [
        { text: 'A September 2024 regular heard from the owner how loyal customers supported the restaurant through the pandemic.', source: R + 'B493532038/' },
        { text: 'An October 2024 diner turned away once without a booking came back with a reservation for unpretentious, focused cooking.', source: R + 'B515495123/' },
        { text: 'A January 2026 diner found the omelette so good it needed no ketchup.', source: R + 'B521768189/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー・イタリアン・フレンチ、中京区間之町二条下ル鍵屋町459-2、烏丸御池から337m、水〜月 18:00〜22:30 (L.O.22:00)、火曜休み、予約可、カード (VISA・Master・JCB・AMEX・Diners) 可、電子マネー・QR 不可、カウンター、貸切20名まで、公式サイトあり。口コミ (2022年12月〜2026年2月、英語): 町家を改装したワインダイニング、靴を脱いで上がる、元ホテルの料理人の店主が一人で、煮込みの盛り合わせ、牛肉とじゃがいもの赤ワイン煮、生ハムとクリームチーズのブルスケッタ、鴨のたたき、ピクルス、オムレツ、好みのワインを選んでくれる、予約がないと入れないことも、金・土は混む。',
      confidence: 'medium', sources: [TB, WEB, R + 'B457518780/', R + 'B466169199/', R + 'B483939989/', R + 'B491040905/', R + 'B493532038/', R + 'B509300994/', R + 'B515495123/', R + 'B521768189/', R + 'B521873538/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; book ahead; one chef.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区間之町二条下ル鍵屋町459-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through February 2026.' },
    pin_source: `Tabelog ${TB} (35.013426, 135.761576); cross-checked: GSI 京都府京都市中京区鍵屋町459番地 (lot) 58 m; nearest existing record 28.6 m (kyoto_teppan_okonomiyaki_jin); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B491040905/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Assorted stews', '', 'Mains', 'ask', 'no', 'April 2023.', 'stews'),
      it('', '', 'Beef braised in red wine with potato', '', 'Mains', 'ask', 'no', 'April 2025.', 'boeuf'),
    ] }, {
    cuisine: '一人の料理人の煮込みの気軽なフレンチとワインの店 (2023〜2026年の口コミ)・煮込みの盛り合わせ、牛肉とじゃがいもの赤ワイン煮 (2023年4月、2025年4月)・生ハムとクリームチーズのブルスケッタ、鴨のたたき、ピクルス、ふんわりのオムレツ (2025年4月、2026年1月)・好みで選ぶワイン (2022年12月)・4,000〜6,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '間之町二条、御所南',
    gf_detail: '要確認。鴨のたたき、ピクルス、オムレツは合う可能性があるが、ブルスケッタ、パスタ、煮込みは小麦の可能性 (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。肉の煮込み、鴨、生ハム、チーズ (2024〜2026年の口コミ)。',
    notes: '[ワインのビストロ・間之町二条] 靴を脱いで上がる静かな町家のビストロ。元ホテルの料理人が一人で作る煮込みの盛り合わせ、牛の赤ワイン煮、鴨のたたき、絶品のオムレツに、好みのワイン。週末は予約を。火曜休み。',
  });
}

// ================================================================ ミン Min
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26028571/'; const R = TB + 'dtlrvwlst/';
  const B = day(['11:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_min_yoshinagacho', name: 'ミン (Min)', category: 'OMNI',
    lat: 35.01421294499588, lng: 135.77505788885423, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: gyoza, ramen, yakisoba, fried sets and soy-based sauces (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Chinese diner dishes and yakiniku (2024–2026 reviews).',
    hours_raw: 'Monday–Saturday 11:00–14:00 and 18:00–22:00; holidays 18:00–22:00; closed Sunday; hours may change (Tabelog). Lunch orders stop before 14:00 (July 2025). Reservations accepted (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 20 seats incl. a counter; non-smoking (Tabelog; May 2026). At the end of a narrow alley in a residential maze off Nijo-dori; no parking (November 2024; July 2025). About 8 min walk from Jingu-Marutamachi Stn.',
    hours: { 0: B, 1: B, 2: B, 3: B, 4: B, 5: B }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yoshinaga-cho, east of Kawabata-Nijo',
    cuisine: 'Neighbourhood Chinese diner by day and Korean yakiniku by night (2024–2026 reviews) · lunch sets such as shoyu ramen with fried rice and gyoza; tenshin-han with gyoza; mapo noodles; pork tempura set ¥800; Set A with Fu Rong Bai or Set B of two fried dishes (November 2024–July 2026) · gyoza ¥300, fried rice, yakisoba, stir-fried vegetables (February–June 2026) · evening yakiniku of tongue and other cuts with assorted kimchi, recommended by regulars (August 2025–May 2026) · about ¥1,000–3,000 (Tabelog; 2024–2026 reviews)',
    website: null, gmaps: gm('ミン 京都 吉永町 中華'), menu_url: null,
    notes: '[Chinese diner and yakiniku · Kawabata-Nijo east, cash only] A hidden local favourite at the end of an alley: lightly seasoned ramen-and-fried-rice sets, gyoza and tenshin-han at lunch, and Korean yakiniku with kimchi at night, all at old prices. Busy at opening. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per reviewers: a small, long-loved local restaurant hidden down a narrow alley off Nijo-dori, serving Chinese diner food and Korean barbecue, cheap and lightly seasoned, filling up soon after opening (2024–2026 reviews).',
      philosophy: null, specialty: 'Lunch sets; yakiniku.',
      anecdotes: [
        { text: 'An April 2025 visitor following an alley off Nijo-dori was half in disbelief that a restaurant could be there.', source: R + 'B505820138/' },
        { text: 'A regular since August 2025, on a fifth visit in October 2026, moved on from lunchtime ramen to the recommended yakiniku.', source: R + 'B505945992/' },
        { text: 'A June 2026 diner arriving at opening watched the seats fill within minutes, then had tenshin-han, gyoza, fried rice and yakisoba.', source: R + 'B278707880/' },
      ],
      japanese_sources_summary: '食べログ: 中華料理・焼肉・食堂、左京区吉永町275、神宮丸太町駅から506m、月〜土 11:00〜14:00、18:00〜22:00、祝日 18:00〜22:00、日曜休み、予約可、カード・電子マネー・QR 不可、20席、禁煙。口コミ (2024年11月〜2026年10月、英語): 二条通から路地の奥、住宅街の迷路のような場所、昼は醤油ラーメンと炒飯と餃子のセット、天津飯と餃子、麻婆麺、豚の天ぷらの定食800円、Fu Rong Bai の A セットや揚げ物2種の B セット、餃子300円、炒飯、焼きそば、野菜炒め、夜は韓国の焼肉 (タンなど) とキムチの盛り合わせ、やさしい味、開店直後から満席。',
      confidence: 'medium', sources: [TB, R + 'B278707880/', R + 'B497803487/', R + 'B498233578/', R + 'B505820138/', R + 'B505945992/', R + 'B509417831/', R + 'B525182792/', R + 'B528210800/', R + 'B530954868/', R + 'B534919129/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; hard to find down an alley; busy at opening.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区吉永町275',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.014213, 135.775058); cross-checked: GSI 京都府京都市左京区吉永町275番地 (lot) 16 m; nearest existing record 50.1 m (kyoto_kashiya_cafe); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525182792/'],
    price_note: 'Prices from a February 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Pork tempura set (lunch)', '¥800', 'Lunch', 'no', 'no', 'February 2026.', 'butaten'),
      it('', '', 'Gyoza', '¥300', 'Small dishes', 'no', 'no', 'February 2026.', 'gyoza'),
    ] }, {
    cuisine: '昼は町の中華、夜は韓国の焼肉の店 (2024〜2026年の口コミ)・醤油ラーメンと炒飯と餃子、天津飯と餃子、麻婆麺、豚の天ぷらの定食800円、Fu Rong Bai の A セットや揚げ物2種の B セット (2024年11月〜2026年7月)・餃子300円、炒飯、焼きそば、野菜炒め (2026年2〜6月)・常連おすすめの夜の焼肉 (タンなど) とキムチの盛り合わせ (2025年8月〜2026年5月)・1,000〜3,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '吉永町、川端二条の東',
    gf_detail: 'グルテンフリー不可。餃子、ラーメン、焼きそば、揚げ物、醤油のたれ (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。中華の定食と焼肉 (2024〜2026年の口コミ)。',
    notes: '[町中華と焼肉・川端二条の東、現金のみ] 路地の奥の地元の人気店。昼はやさしい味のラーメンと炒飯のセット、餃子、天津飯、夜はキムチと韓国の焼肉を昔ながらの値段で。開店直後から混む。日曜休み。',
  });
}

// ================================================================ ここどす Kokodosu
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26012089/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_kokodosu_gojozaka', name: 'ここどす (Kokodosu)', category: 'OMNI',
    lat: 34.995877837076364, lng: 135.77992587909438, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: tea soba, soba and udon in soy-dashi tsuyu (2020–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broths and meat udon; kinako shiratama is a possible sweet — ask (2020–2026 reviews).',
    hours_raw: 'Tabelog lists no hours, so none are shown; reviewers describe lunchtime and early-evening visits (February 2022; August 2026). Cards (JCB, AMEX) and QR (Tabelog). Discounts for school-trip students (April 2026). On the Gojozaka approach, a little below Kiyomizu-dera (May 2025; August 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojozaka, below Kiyomizu-dera',
    cuisine: 'Noodle and sweets café near Kiyomizu-dera, known for tea soba (2020–2026 reviews) · chilled or warm matcha tea soba with a slightly sweet dip and shiitake; zaru soba (November 2020–August 2026) · meat udon ¥850, curry udon, chilled meat udon; kayaku rice (December 2022–April 2026) · kinako shiratama and other sweets (May 2026) · about ¥1,000–2,000 (2024–2026 reviews)',
    website: null, gmaps: gm('ここどす 五条坂'), menu_url: null,
    notes: '[Tea soba and udon · Gojozaka] A friendly, good-value stop on the walk up to Kiyomizu-dera: fragrant matcha tea soba, meat or curry udon with kayaku rice, and kinako shiratama to finish. Kind staff; school-trip discounts.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per reviewers: a casual noodle and sweets café on the Gojozaka approach, with notably kind, chatty staff — a manager and an elderly gentleman at the counter (February and August 2024) — and good prices for a tourist area (2020–2026 reviews).',
      philosophy: null, specialty: 'Matcha tea soba.',
      anecdotes: [
        { text: 'A February 2024 visitor on a busy holiday weekend enjoyed a long chat with the friendly manager over meat udon.', source: R + 'B479651139/' },
        { text: 'An April 2026 diner who dislikes shiitake was won over by the well-seasoned mushroom on the udon, and noted the school-trip discount.', source: R + 'B535992264/' },
        { text: 'An August 2026 family ate tea soba before walking up to Kiyomizu-dera for street snacks.', source: R + 'B534911132/' },
      ],
      japanese_sources_summary: '食べログ: 甘味処、東山区五条橋東6-583-33、清水五条から1,030m、営業時間の記載なし、カード (JCB・AMEX)・QR 可。口コミ (2020年11月〜2026年8月、英語): 清水寺の近く、茶そば (冷・温、やや甘いつけ汁としいたけ)、ざるそば、肉うどん850円、カレーうどん、冷やし肉うどん、かやくご飯、きなこ白玉、親切なスタッフ、修学旅行生の割引 (2026年4月)、手ごろ。',
      confidence: 'low', sources: [TB, R + 'B423257836/', R + 'B447238775/', R + 'B458308420/', R + 'B479651139/', R + 'B489910045/', R + 'B507381335/', R + 'B527922038/', R + 'B534911132/', R + 'B535992264/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual; cards (JCB, AMEX) and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区五条橋東6-583-33',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (34.995878, 135.779926); GSI 京都府京都市東山区五条橋東六丁目583番地 (lot) is 129 m off — a large lot block on the slope — so the Tabelog pin is kept; nearest existing record 105.3 m (kyoto_ichimaru5_gojozaka); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B479651139/'],
    price_note: 'Price from a February 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Meat udon', '¥850', 'Udon', 'no', 'no', 'February 2024.', 'nikuudon'),
      it('', '', 'Chilled tea soba', '', 'Soba', 'no', 'no', 'May 2026.', 'chasoba'),
    ] }, {
    cuisine: '茶そばで知られる清水寺近くの麺と甘味の店 (2020〜2026年の口コミ)・やや甘いつけ汁としいたけの冷・温の抹茶の茶そば、ざるそば (2020年11月〜2026年8月)・肉うどん850円、カレーうどん、冷やし肉うどん、かやくご飯 (2022年12月〜2026年4月)・きなこ白玉などの甘味 (2026年5月)・1,000〜2,000円ほど (2024〜2026年の口コミ)',
    neighborhood: '五条坂、清水寺の下',
    gf_detail: 'グルテンフリー不可。茶そば、そば、うどんに醤油のだし (2020〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのつゆと肉うどん。きなこ白玉は可能性あり、要確認 (2020〜2026年の口コミ)。',
    notes: '[茶そばとうどん・五条坂] 清水寺へ上る道の手ごろで親切な店。香りのよい抹茶の茶そば、肉やカレーのうどんにかやくご飯、しめにきなこ白玉。スタッフが親切、修学旅行生の割引も。',
  });
}

// ================================================================ 夜鳴き まるふく Yonaki Marufuku
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26045617/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://marufukuro.com/restaurant/';
  const H = day(['22:00', '26:00']);
  put({
    id: 'kyoto_yonaki_marufuku', name: '夜鳴き まるふく (Yonaki Marufuku)', category: 'OMNI',
    lat: 34.99178582787999, lng: 135.76627994022436, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat noodles in soy and dashi broths (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: duck and shrimp broths (2026 reviews).',
    hours_raw: 'Thursday–Tuesday and holidays 22:00–2:00; closed Wednesday; other closing days not fixed — check the website or call; closes early when sold out (Tabelog; August 2026). No reservations; queues on weekends (Tabelog; August–September 2026). Cards (VISA, Master, JCB, AMEX, UnionPay) and PayPay; no e-money (Tabelog). 20 seats: 12 at the counter, 8 at tables; non-smoking (Tabelog). The night-time ramen counter of the Tempura Marufuku space in the Marufuku hotel building, once Nintendo’s headquarters (1930); the entrance is at the back (September–October 2026). 6 min walk from Keihan Shichijo Stn.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shomen-Kamogawa, near Shichijo',
    cuisine: 'Late-night ramen counter — a tempura restaurant by evening that turns into a yonaki (night) ramen shop from 22:00 (Tabelog; 2026 reviews) · duck nanban chuka soba ¥1,200: brown duck-and-dashi broth with fragrant oil, duck chashu, white leek and mizuna, thin noodles from Goto Seimen in Nagasaki (September 2026) · shrimp tantanmen ¥1,200 with a rich shrimp broth (September–October 2026) · about ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('夜鳴き まるふく'), menu_url: null,
    notes: '[Late-night ramen · Shomen-Kamogawa, 22:00–2:00] After the tempura service ends, this refined counter in Nintendo’s 1930 former headquarters, now a hotel, serves night ramen — duck nanban chuka soba and a rich shrimp tantanmen — until 2 a.m. or sell-out. Queues at weekends. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Kitchen staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a hotel restaurant in the historic Marufuku building — completed in 1930 as Nintendo’s headquarters and now a hotel — where the Tempura Marufuku counter reopens at night as a ramen shop (September–October 2026).',
      philosophy: null, specialty: 'Duck nanban chuka soba; shrimp tantanmen.',
      anecdotes: [
        { text: 'A September 2026 pair, too early after takoyaki, waited for the 10 p.m. opening and took a taxi from Kyoto Station.', source: R + 'B535028567/' },
        { text: 'An August 2026 diner arriving at opening found it already busy and heard it closes when the soup runs out.', source: R + 'B536369582/' },
        { text: 'A September 2026 guest savoured the duck nanban soba in a space that keeps the feel of Nintendo’s old headquarters.', source: R + 'B536472291/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン、下京区正面通加茂川西入鍵屋町342、京阪七条駅から徒歩6分、木〜火・祝日 22:00〜26:00、水曜休み、不定休 (サイトか電話で確認)、予約不可、カード (VISA・Master・JCB・AMEX・銀聯)・PayPay 可、電子マネー不可、20席 (カウンター12、テーブル8)、禁煙、ホテルのレストラン、公式サイトあり。口コミ (2026年8〜10月、英語): 夜は天ぷらの店がラーメン屋に、旧任天堂本社 (1930年) の建物のホテル、入口は裏手、鴨南蛮中華そば1,200円 (鴨の出汁、鴨チャーシュー、白ねぎ、水菜、長崎の Goto Seimen の細麺)、海老担々麺1,200円、売り切れ次第終了、週末は行列。',
      confidence: 'medium', sources: [TB, WEB, R + 'B535028567/', R + 'B535371447/', R + 'B535371827/', R + 'B535548504/', R + 'B536260289/', R + 'B536369582/', R + 'B536419473/', R + 'B536472291/', R + 'B537028640/', R + 'B538405866/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'From 22:00 until sold out; queue at weekends; entrance at the back.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区正面通加茂川西入鍵屋町342',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.991786, 135.766280); GSI matched a different 鍵屋町 745 m away, so the Tabelog pin (Shomen-dori west of the Kamo) is kept unconfirmed; nearest existing record 82.9 m (kyoto_murmur_coffee); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535371827/', R + 'B538405866/'],
    price_note: 'Prices from September and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Duck nanban chuka soba', '¥1,200', 'Ramen', 'no', 'no', 'September 2026.', 'kamonanban'),
      it('', '', 'Shrimp tantanmen', '¥1,200', 'Ramen', 'no', 'no', 'October 2026.', 'tantan'),
    ] }, {
    cuisine: '夜は天ぷらの店が22時から夜鳴きのラーメン屋になる深夜のカウンター (食べログ、2026年の口コミ)・鴨南蛮中華そば1,200円: 鴨とだしの茶色いスープに香味油、鴨チャーシュー、白ねぎ、水菜、長崎の Goto Seimen の細麺 (2026年9月)・濃厚な海老のスープの海老担々麺1,200円 (2026年9〜10月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '正面通鴨川、七条の近く',
    gf_detail: 'グルテンフリー不可。小麦の麺に醤油とだしのスープ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鴨と海老のスープ (2026年の口コミ)。',
    notes: '[深夜のラーメン・正面通鴨川、22時〜2時] 天ぷらの営業のあと、1930年の旧任天堂本社のホテルの上品なカウンターで夜鳴きのラーメン。鴨南蛮中華そばと濃厚な海老担々麺を深夜2時か売り切れまで。週末は行列。水曜休み。',
  });
}

save();
