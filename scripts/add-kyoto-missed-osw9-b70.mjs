// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 70.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + 演出鉄板ステーキ&BAR ココットアルファ Cocotte Alpha (wagyu teppanyaki on Kiyamachi; since 2019)
//   + きし鮓 Kishi Zushi (Kyoto-style sushi since 1914; moved to Miyagawa-suji in 2023)
//   + ぎをん 萬養軒 本店 Gion Manyoken (French house founded 1904, in a former Hanamikoji tea house)
//   - フォションホテル京都 — a hotel of the FAUCHON brand; sub-brand of a large parent
//   (河しげ 三条本店 — left in the queue for the next batch)
//   + dining HARIMAYA (monthly Kyoto courses and rare sake by Sanjo Keihan)
//   Same-name counts first (data and queue-status.jsonl): 萬養軒 — kyoto_manyoken_style_takashimaya (MANYOKEN style, the
//   group's casual department-store concept) is in data; this is the group's French flagship, a different concept, so
//   drafted as a sister concept. None for ココット, きし鮓, フォション, HARIMAYA. None drafted is in data/kyoto.json by
//   name or address (hidden records included).
//   Service charges checked against Tabelog's Japanese original: ココットアルファ 「サービス料・チャージなし」; 萬養軒
//   「サービス料10％」; きし鮓 and HARIMAYA have no section.
//   Pins (checked against main, hidden records included): 萬養軒 — GSI 祇園町南側570 (lot) is 228 m from the Tabelog
//   point → approximate. HARIMAYA — GSI matched only the town (新五軒町) → approximate. ココットアルファ 6.0 m from
//   kyoto_shinya_kissa_tamon (same building, B1F); きし鮓 34 m clear. No offsets.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-70');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26036387', 'sub-brand of a large parent: フォションホテル京都 is a hotel of the global FAUCHON brand');

// ================================================================ ココットアルファ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033873/'; const R = TB + 'dtlrvwlst/';
  const RT = 'https://retty.me/restaurant/100001591774/';
  const D = day(['12:00', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_cocotte_alpha_kiyamachi', name: '演出鉄板ステーキ&BAR ココットアルファ (Cocotte Alpha)', category: 'OMNI',
    lat: 35.008212, lng: 135.770694, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan steak and vegetables may suit, but garlic rice, meat sushi, soups and sauces are unknown (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu steak courses with fish and shrimp (2025–26 reviews).',
    hours_raw: 'Daily 12:00–14:00 and 17:00–23:00 (L.O. 22:00) (Tabelog). Bookings taken; Retty describes it as reservation-only. No service charge or cover (Tabelog Japanese original 「サービス料・チャージなし」). Bring your own wine at ¥3,000 a bottle (Tabelog). Cards and PayPay; no e-money (Tabelog). 15 seats: 7 at the counter, two tables of four (Tabelog). 3rd floor of the 京都ゴールデンビル on Kiyamachi, with windows over the Takase River, 3 min from Sanjo (Tabelog; Retty; January and September 2025 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, south of Sanjo — 3 min from Sanjo Stn',
    cuisine: 'Teppanyaki courses of A4–A5 black wagyu with Kyoto vegetables (Tabelog): the Kyoto Premium course ¥16,500 — appetizers, Kyoto vegetable salad with eel and corn, soup, strip loin 80 g and tenderloin 60 g, grilled vegetables, Kyoto rice, dessert (September 2025); A5 sirloin with garlic rice and meat sushi (January 2025); hanger steak, salmon sashimi, hamo (September 2025); hamachi carpaccio, tuna sashimi, warabi mochi (August 2026)',
    website: null, gmaps: gm('ココットアルファ 京都 木屋町'), menu_url: null,
    notes: '[Wagyu teppanyaki · Kiyamachi] A small third-floor teppanyaki counter on Kiyamachi where a veteran chef grills A4–A5 black wagyu and Kyoto vegetables in front of you, with views over the Takase River. Courses about ¥10,000–17,000; no service charge.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Opened 24 December 2019 (Tabelog). A veteran chef with over 40 years\' experience (Tabelog). Listed on Retty as the "河原町本店".',
      philosophy: null,
      specialty: 'A4–A5 wagyu teppanyaki.',
      anecdotes: [
        { text: 'A September 2025 anniversary couple took the ¥16,500 Kyoto Premium course, whose salad of eel and corn was the surprise.', source: R + 'B520877164/' },
        { text: 'A September 2025 diner expected the thick hanger steak to be tough and found it melting.', source: R + 'B513629494/' },
        { text: 'An August 2026 couple felt the prices did not match the quality: two slices of hamachi, one steak not cooked as ordered, plain warabi mochi.', source: R + 'B533096493/' },
      ],
      japanese_sources_summary: '食べログ: 演出鉄板ステーキ&BAR ココットアルファ、鉄板焼き・ステーキ・イタリアン、中京区材木町175 京都ゴールデンビル3F、三条駅6番出口から徒歩約3分、毎日 12:00〜14:00・17:00〜23:00 (L.O. 22:00)、サービス料・チャージなし、ワイン持ち込み1本3,000円、カード・PayPay 可、電子マネー不可、15席 (カウンター7、4人テーブル2)、2019年12月24日オープン、A4以上の黒毛和牛と京野菜、料理歴40年以上の料理人 (紹介文、英訳)。Retty: 鉄板ステーキ ココットアルファ 河原町本店、完全予約制、高瀬川の夜景。口コミ (2025〜2026年、英語): Kyoto Premium course 16,500円、サーロイン80g とヒレ60g、うなぎととうもろこしのサラダ、ガーリックライス、肉寿司、ハラミ、サーモンの刺身、鱧、ハマチのカルパッチョ、わらび餅。',
      confidence: 'medium', sources: [TB, RT, R + 'B499896576/', R + 'B501207004/', R + 'B513629494/', R + 'B520877164/', R + 'B533096493/', R + 'B536324393/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter teppanyaki; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区材木町175 京都ゴールデンビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and Retty; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.008212, 135.770694), 6.0 m from kyoto_shinya_kissa_tamon (same building, B1F); cross-checked: GSI 京都府京都市中京区材木町175番地 (lot) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520877164/'],
    price_note: 'Course price from a September 2025 review; drinks extra.', last_checked: TODAY, items: [
      it('', '', 'Kyoto Premium course (strip loin 80 g + tenderloin 60 g)', '¥16,500', 'Courses', 'ask', 'no', 'September 2025 review.', 'kyoto_premium'),
      it('', '', 'Wine corkage (per bottle)', '¥3,000', 'Drinks', 'ask', 'ask', 'Tabelog.', 'corkage'),
    ] }, {
    cuisine: 'A4〜A5 の黒毛和牛と京野菜の鉄板焼きのコース (食べログ): Kyoto Premium course 16,500円 (前菜、うなぎととうもろこしの京野菜サラダ、スープ、サーロイン80g とヒレ60g、焼き野菜、京都の米、デザート、2025年9月)、A5 のサーロインとガーリックライス、肉寿司 (2025年1月)、ハラミ、サーモンの刺身、鱧 (2025年9月)、ハマチのカルパッチョ、まぐろの刺身、わらび餅 (2026年8月)',
    neighborhood: '木屋町、三条の南。三条駅から徒歩3分',
    gf_detail: '要確認。鉄板のステーキや野菜は合う可能性があるが、ガーリックライス、肉寿司、スープ、ソースは不明 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚や海老を含む和牛ステーキのコース (2025〜26年の口コミ)。',
    notes: '[和牛の鉄板焼き・木屋町] 木屋町のビル3階の小さな鉄板焼きカウンター。ベテランの料理人が A4〜A5 の黒毛和牛と京野菜を目の前で焼き、高瀬川の眺めも。コースは1万〜1万7千円ほど、サービス料なし。',
  });
}

// ================================================================ きし鮓
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034197/'; const R = TB + 'dtlrvwlst/';
  const L = ['12:00', '14:30'];
  put({
    id: 'kyoto_kishizushi_miyagawa', name: 'きし鮓 (Kishi Zushi)', category: 'OMNI',
    lat: 34.998737, lng: 135.770709, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi rice and fish, but soy sauce, simmered-eel glaze and red miso soup are likely wheat or soy-based (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish sushi and sashimi (2023–2026 reviews).',
    hours_raw: 'Mon 12:00–14:30 and 17:00–21:00; Thu, Fri and the days around holidays 17:00–21:00; Sat, Sun and holidays 12:00–14:30 and 17:00–20:30; closed Tue and Wed (Tabelog). Weekday lunch by booking; dinner bookings until 18:00, then first come, until sold out; takeaway outside hours on request; bookings by agents not accepted (Tabelog). Cards, e-money and QR (Tabelog). 11 seats: 5 at the counter, 6 at tables; non-smoking; wheelchair accessible (Tabelog). On Miyagawa-suji near Matsubara, 5 min from Kiyomizu-Gojo or Gion-Shijo (Tabelog; June 2026 review).',
    hours: { 0: day(L, ['17:00', '21:00']), 3: day(['17:00', '21:00']), 4: day(['17:00', '21:00']), 5: day(L, ['17:00', '20:30']), 6: day(L, ['17:00', '20:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Miyagawacho, by Matsubara — 5 min from Kiyomizu-Gojo Stn',
    cuisine: 'Kyoto-style sushi: pressed sushi including mackerel and simmered eel (2023–2025), kizushi with wasabi and grated daikon, isomaki, pickled small sea bream, three vinegared dishes, seared simmered anago, shima-aji tataki, tekka maki (June 2026, review in Japanese); omakase 8 pieces ¥2,700, isomaki 4 pieces ¥700, grilled squid legs ¥300, red miso soup with anago and junsai ¥550 (September 2024); deluxe chirashi at lunch (June 2026); toro-taku; sea bream and striped jack; omakase 10 pieces (September 2026); sake such as Densho and Konteki (2025–26 reviews)',
    website: null, gmaps: gm('きし鮓 宮川町'), menu_url: null,
    notes: '[Kyoto sushi · Miyagawacho] A small, long-established Kyoto sushi shop, founded in 1914 and moved in 2023 to a modern room on Miyagawa-suji: pressed and kizushi mackerel, isomaki and nigiri at modest prices, with a few appetizers and sake. Lunch about ¥3,000; dinner ¥5,000–8,000.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Founded in 1914 (September 2024 and October 2023 reviews). Moved in 2023 from an old house on the Kawaramachi side to a modern ground floor across the Kamo River, keeping the same sign; a chef and a server (October 2023 review). A June 2026 diner had used its takeaway at an earlier Teramachi location. A small team that takes its time (Tabelog). A July 2025 reviewer had heard it is known to serve geiko and okiya.',
      philosophy: 'Unhurried, careful work by a small team (Tabelog).',
      specialty: 'Pressed sushi and kizushi.',
      anecdotes: [
        { text: 'A regular of thirteen visits found the tuna and squid legs sold out in September 2026, missed the old regulars, and noted prices rose a little around autumn 2025.', source: R + 'B433858872/' },
        { text: 'A June 2026 couple walked over the Kamo River and ordered isomaki, pickled small sea bream, kizushi and tekka maki, and liked the value.', source: R + 'B529866862/' },
        { text: 'An October 2023 diner found the stylish new room changed but the pressed sushi as good as at the old house.', source: R + 'B473151568/' },
      ],
      japanese_sources_summary: '食べログ: きし鮓、寿司、東山区宮川筋5-333-1 1F、清水五条駅から350m、月曜 12:00〜14:30・17:00〜21:00、木・金・祝前後日 17:00〜21:00、土日祝 12:00〜14:30・17:00〜20:30、火・水休み、平日昼は予約制、夜の予約は18:00まで (以降は先着、売り切れまで)、代理予約不可、カード・電子マネー・QR 可、11席 (カウンター5、テーブル6)、禁煙、車いす可、少人数で丁寧に。口コミ (2026年6月、日本語): 磯巻、小鯛漬け、酢の物三点盛り、煮穴子の炙り、しまあじのたたき、きずしをわさびと大根おろしで、鉄火巻、コストパフォーマンスがとても良い。口コミ (2023〜2026年、英語): 1914年創業、2023年に河原町側から鴨川の東へ移転、押し寿司、おまかせ8貫2,700円、磯巻4切れ700円、赤だし550円、上ちらし、2025年秋に値上げ、Densho や Konteki の日本酒。',
      confidence: 'medium', sources: [TB, R + 'B433858872/', R + 'B451418225/', R + 'B473151568/', R + 'B491197430/', R + 'B506466241/', R + 'B529866862/', R + 'B530100531/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; many overseas guests lately (2025 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区宮川筋5-333-1 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.998737, 135.770709); cross-checked: GSI 京都府京都市東山区宮川筋五丁目333番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B491197430/'],
    price_note: 'Prices from a September 2024 review; a regular reports a small rise in autumn 2025.', last_checked: TODAY, items: [
      it('', '', 'Omakase, 8 pieces', '¥2,700', 'Sushi', 'ask', 'no', 'September 2024 review.', 'omakase8'),
      it('', '', 'Isomaki, 4 pieces', '¥700', 'Sushi', 'ask', 'no', 'September 2024 review.', 'isomaki'),
      it('', '', 'Grilled squid legs', '¥300', 'Small dishes', 'ask', 'no', 'September 2024 review.', 'geso'),
      it('', '', 'Red miso soup with anago and junsai', '¥550', 'Soup', 'ask', 'no', 'September 2024 review.', 'akadashi'),
      it('', '', 'Mackerel pressed sushi', '', 'Sushi', 'ask', 'no', 'May 2025 review.', 'saba'),
    ] }, {
    cuisine: '京風の寿司: 鯖や煮穴子の押し寿司 (2023〜2025年)、きずしをわさびと大根おろしで、磯巻、小鯛漬け、酢の物三点盛り、煮穴子の炙り、しまあじのたたき、鉄火巻 (2026年6月、日本語の口コミ)、おまかせ8貫2,700円、磯巻4切れ700円、焼きげそ300円、穴子とじゅんさいの赤だし550円 (2024年9月)、昼の上ちらし (2026年6月)、toro-taku、鯛としまあじ、おまかせ10貫 (2026年9月)、Densho や Konteki などの日本酒 (2025〜26年の口コミ)',
    neighborhood: '宮川町、松原の近く。清水五条駅から徒歩5分',
    gf_detail: '要確認。酢飯と魚だが、醤油、煮穴子のたれ、赤だしは小麦や大豆を含む可能性が高い (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚の寿司と刺身 (2023〜2026年の口コミ)。',
    notes: '[京の寿司・宮川町] 1914年創業、2023年に宮川筋のモダンな店へ移った小さな老舗の寿司店。押し寿司やきずしの鯖、磯巻、握りを手頃な値段で、つまみと日本酒も少し。昼は3,000円ほど、夜は5,000〜8,000円。',
  });
}

// ================================================================ ぎをん 萬養軒 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26003291/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://www.manyoken.com/';
  const D = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_gion_manyoken_honten', name: 'ぎをん 萬養軒 本店 (Gion Manyoken)', category: 'OMNI',
    lat: 35.001543, lng: 135.774569, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Classical French courses with sauces, bread and petits fours (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: classical French meat and fish courses (2022–2026 reviews).',
    hours_raw: 'Mon, Thu–Sun 11:30–15:00 (L.O. 14:00, last entry 13:30) and 17:00–22:00 (L.O. 20:30, last entry 20:00); closed Tue and Wed; summer break 16–20 August (Tabelog). Bookings through the website; reservation-only in practice (Tabelog; October 2026 review). Service charge 10% (Tabelog Japanese original 「サービス料10％」). Cards; no e-money or QR (Tabelog). 20 seats; private rooms; non-smoking (Tabelog). On Hanamikoji in a renovated tea house, 5 min from Gion-Shijo Stn (Tabelog).',
    hours: { 0: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Hanamikoji south of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Classical French courses without gimmicks: dinner course ¥19,000 including tax and service (December 2022); ¥15,000 course with wine at ¥1,300 a glass (October 2026); lunch courses ending with petits fours (2023); steak and yoshoku dishes (Tabelog)',
    website: WEB, gmaps: gm('ぎをん 萬養軒 花見小路'), menu_url: null,
    notes: '[French · Hanamikoji] Kyoto\'s century-old French house, founded in 1904 and now in a renovated tea house on Hanamikoji: orthodox French courses in a quiet, reservation-only room. Lunch about ¥8,000–10,000; dinner ¥15,000–20,000 plus 10% service.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Founded in 1904; has served VIPs since an imperial banquet at the Imperial Palace in 1928 (Tabelog). At this renovated Hanamikoji tea house since 18 April 2013 (Tabelog); earlier on another site (September 2019 review). The group also runs MANYOKEN style in Takashimaya Kyoto (kyoto_manyoken_style_takashimaya).',
      philosophy: 'Orthodox French cooking with pride in its history (December 2022 review).',
      specialty: 'Classical French courses.',
      anecdotes: [
        { text: 'An October 2026 diner sent by a local friend arrived at 7:30 pm, took the ¥15,000 course and found it surprisingly good value with wine at ¥1,300 a glass.', source: R + 'B538117571/' },
        { text: 'In December 2023 a diner who had booked three months ahead found Hanamikoji quiet, the dishes carefully explained, and was urged to order more baguette for the escargot butter.', source: R + 'B476047258/' },
        { text: 'A diner who had passed it since student days finally went in September 2019, after its move.', source: R + 'B419876967/' },
      ],
      japanese_sources_summary: '食べログ: ぎをん 萬養軒 本店、フレンチ・ステーキ・洋食、東山区祇園町南側570-120 2F、祇園四条駅から徒歩5分、月・木〜日 11:30〜15:00 (L.O. 14:00)・17:00〜22:00 (L.O. 20:30)、火・水休み、8月16〜20日は夏休み、予約は公式サイトから、サービス料10%、カード可、電子マネー・QR 不可、20席、個室、禁煙、2013年4月18日 (現在地) オープン、1904年創業、花見小路のお茶屋を改装、1928年の宮中晩餐会以来 (紹介文、英訳)。口コミ (2019〜2026年、英語): 正統派のフレンチ、夜のコース19,000円 (税・サ込み、2022年12月)、15,000円のコースとグラスワイン1,300円 (2026年10月)、昼のコースと茶菓子、移転。',
      confidence: 'medium', sources: [TB, WEB, R + 'B419876967/', R + 'B457773461/', R + 'B466799415/', R + 'B476047258/', R + 'B515668565/', R + 'B538117571/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead through the website.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-120 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (summer-break notice) and own site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001543, 135.774569); GSI 京都府京都市東山区祇園町南側570番地 (lot) is 228 m away, so approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538117571/'],
    price_note: 'Prices from an October 2026 review; 10% service charge on top (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Dinner course', '¥15,000', 'Courses', 'ask', 'no', 'October 2026 review (tax included).', 'dinner'),
      it('', '', 'Wine by the glass', '¥1,300', 'Drinks', 'ask', 'ask', 'October 2026 review.', 'wine'),
    ] }, {
    cuisine: '奇をてらわない正統派のフレンチのコース: 夜のコース19,000円 (税・サ込み、2022年12月)、15,000円のコースとグラスワイン1,300円 (2026年10月)、茶菓子で終わる昼のコース (2023年)、ステーキや洋食 (食べログ)',
    neighborhood: '祇園、四条の南の花見小路。祇園四条駅から徒歩5分',
    gf_detail: '要確認。ソース、パン、茶菓子のある正統派フレンチのコース (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉や魚の正統派フレンチのコース (2022〜2026年の口コミ)。',
    notes: '[フレンチ・花見小路] 1904年創業、花見小路のお茶屋を改装した京都の老舗フランス料理店。静かな予約制の部屋で正統派のフレンチのコース。昼は8,000〜10,000円、夜は1万5千〜2万円ほど、サービス料10%。',
  });
}

// ================================================================ dining HARIMAYA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26003135/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://kyoto-harimaya.com/';
  const D = day(['11:30', '14:50'], ['17:30', '22:00']);
  put({
    id: 'kyoto_dining_harimaya_sanjo', name: 'dining HARIMAYA', category: 'OMNI',
    lat: 35.007549, lng: 135.772726, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto courses with miso, soy and wheat-based dishes such as fu and kuzu sauces (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, duck, grilled fish, matsutake dobin-mushi in dashi (2025–26 reviews).',
    hours_raw: 'Tue–Sun 11:30–14:50 (food L.O. 13:00, drinks 14:30) and 17:30–22:00 (food L.O. 19:30, drinks 21:30); closed Mondays (Tabelog). Cards; no e-money or QR (Tabelog). 30 seats: counter, tables, private rooms with sunken kotatsu (Tabelog; March 2026 review). 1 min from Keihan Sanjo, on Yamato-oji south of Sanjo (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo Keihan, Yamato-oji — 1 min from Sanjo Stn',
    cuisine: 'Monthly-changing Kyoto courses and rare sake: dinner course from ¥8,000 — ebi-imo with yuzu miso, duck and potato manju, sashimi, hassun, miso-grilled sawara, steamed buri, rice cooked with yuba, red miso soup, black-honey fondue (December 2025); lunch ¥5,300 with bubu mochi and kuzu mochi in sauce, wine jelly, daiginjo sake-lees sauce (January 2026); matsutake dobin-mushi (September 2026); a wide sake list including Kanehachi (2025–26 reviews)',
    website: WEB, gmaps: gm('dining HARIMAYA 三条'), menu_url: null,
    notes: '[Kyoto courses & sake · Sanjo] A Sanjo Keihan dining room with a counter and sunken-kotatsu rooms, serving monthly Kyoto courses with an artful hassun and a deep list of rare sake. Lunch about ¥5,000; dinner from ¥8,000.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Run by the brother of the owner of Harikiyo, a ryotei of 350 years, according to a December 2025 regular of nearly ten years. A warm owner (December 2025 review).',
      philosophy: null,
      specialty: 'Seasonal hassun; sake pairing.',
      anecdotes: [
        { text: 'A regular of nearly ten years (December 2025) singled out the monthly hassun and the rare sake chosen to match each dish.', source: R + 'B523340336/' },
        { text: 'A December 2025 diner used a hometown-tax voucher for the ¥8,000 dinner course, decorated for Christmas.', source: R + 'B518616480/' },
        { text: 'A September 2026 guest called the matsutake dobin-mushi the champion of matsutake dishes and switched to Kanehachi sake midway.', source: R + 'B535380653/' },
      ],
      japanese_sources_summary: '食べログ: dining HARIMAYA、ダイニングバー・日本料理、東山区大和大路通三条下ル新伍軒町181 Cabin三条AQUA 1F、京阪三条駅から徒歩1分、火〜日 11:30〜14:50 (料理 L.O. 13:00)・17:30〜22:00 (料理 L.O. 19:30)、月曜休み、カード可、電子マネー・QR 不可、30席 (カウンター、テーブル、個室、掘りごたつ)。口コミ (2024〜2026年、英語): 毎月替わる献立、夜のコース8,000円から (海老芋の柚子味噌、鴨とじゃがいもの饅頭、お造り、八寸、鰆の味噌焼き、鰤の蒸し物、湯葉の炊き込みご飯、赤だし、黒蜜のフォンデュ)、昼5,300円 (bubu mochi、葛餅)、松茸の土瓶蒸し、珍しい日本酒、Harikiyo の店主の弟の店 (2025年12月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B488875879/', R + 'B518616480/', R + 'B523340336/', R + 'B535380653/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and private rooms; sake recommendations.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区大和大路通三条下ル新伍軒町181 Cabin三条AQUA 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.007549, 135.772726); GSI matched only the town (新五軒町), so approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518616480/', R + 'B488875879/'],
    price_note: 'Prices from December 2025 – March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Dinner course', 'from ¥8,000', 'Courses', 'ask', 'no', 'December 2025 and March 2026 reviews.', 'dinner'),
      it('', '', 'Lunch course', '¥5,300', 'Courses', 'ask', 'no', 'January 2026 review.', 'lunch'),
    ] }, {
    cuisine: '毎月替わる京の料理のコースと珍しい日本酒: 夜は8,000円から (海老芋の柚子味噌、鴨とじゃがいもの饅頭、お造り、八寸、鰆の味噌焼き、鰤の蒸し物、湯葉の炊き込みご飯、赤だし、黒蜜のフォンデュ、2025年12月)、昼は5,300円 (bubu mochi、葛餅のあんかけ、ワインのゼリー、大吟醸の酒粕のソース、2026年1月)、松茸の土瓶蒸し (2026年9月)、Kanehachi などの豊富な日本酒 (2025〜26年の口コミ)',
    neighborhood: '三条京阪、大和大路。三条駅から徒歩1分',
    gf_detail: '要確認。味噌、醤油、葛のあんなどを使う京の料理のコース (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。お造り、鴨、焼き魚、出汁の松茸の土瓶蒸し (2025〜26年の口コミ)。',
    notes: '[京の料理と日本酒・三条] 三条京阪近くの、カウンターと掘りごたつの個室がある店。毎月替わる京の料理のコースに美しい八寸、珍しい日本酒の品揃え。昼は5,000円ほど、夜は8,000円から。',
  });
}

save();
