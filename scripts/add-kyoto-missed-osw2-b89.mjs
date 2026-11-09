// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 89.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   Brands checked against queue-status.jsonl (full names and brand stems), than.co.jp/brands and 株式会社WILL (will-food.com).
//   + 柏屋光貞 Kashiwaya Mitsusada (family wagashi maker at Higashiyama-Yasui since 1806 per Waraku; 11代目 per co-trip and Waraku — drafted under Greg's
//     historic-family retail ruling, on the coordinator's instruction; this supersedes the osw2-88 skip)
//   + ビアバル＆バー Lit (craft-beer bar by Shijo station; 2025–26 reviews)
//   + 和牛・焼肉・ホルモン三吉 烏丸本店 Sankichi (horumon yakiniku, a revival of the old Urateramachi Sankichi; 2025–26 reviews)
//   + 中村楼 Nakamuraro (Muromachi-era ryotei inside Yasaka Shrine's grounds; 2025–26 reviews)
//   - はなまるうどん 四条烏丸店 — chain (Hanamaru Udon, a national chain)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Service charges: Lit ¥330 table charge; 中村楼 10% at lunch, 15% at dinner, 18% in private rooms (Tabelog).
//   Pins: Tabelog /en/ point, cross-checked with GSI; 柏屋光貞's GSI match is ward-level only, so it is marked approximate; 三吉 moved ~9 m off
//   kyr_seabura_no_kami_slurp (0.1 m, likely the same building); each 9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-89');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043273', 'はなまるうどん 四条烏丸店: chain — Hanamaru Udon, a national self-service udon chain');

// ================================================================ 柏屋光貞
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005881/'; const R = TB + 'dtlrvwlst/';
  const CT = 'https://co-trip.jp/article/132102/'; const WK = 'https://intojapanwaraku.com/travel/226066/';
  const MP = 'https://www.mapple.net/region/a0502010202_g02060500_s-situation=family/spot/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_kashiwaya_mitsusada', name: '柏屋光貞 (Kashiwaya Mitsusada)', category: 'OMNI',
    lat: 35.0004690978781, lng: 135.7776899703041, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagashi such as agar-based suri-kohaku, soy-flour rakugan with bean paste, and rice cake with white miso; full ingredients are not published (Waraku; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The sweets described are built on agar, sugar, soy flour, bean paste, rice cake and white miso, but full ingredients are not published (Waraku; reviews).',
    hours_raw: 'TAKEAWAY ONLY — a wagashi shop with no seating listed (Tabelog). 10:00–18:00 Monday–Saturday; closed Sunday (Tabelog; hours also mapple). Cash only (Tabelog). Gyoja-mochi is sold only once a year, on 16 July during the Gion Festival — about 8,000 pieces; a July 2025 reviewer reports in-person sales only since 2016 (mapple still mentions booking by 16 July — check), with a queue of 80-plus from early morning and an early opening (July 2025 reviews). Higashiyama-Yasui, by the Higashiyama-Yasui bus stop (co-trip).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashiyama-Yasui',
    cuisine: 'Kyoto wagashi house founded in 1806 (Waraku), famous for 行者餅 (gyoja-mochi), sold once a year on 16 July: rice cake and white-miso bean paste with sansho in a crepe-like skin (co-trip; 2025–2026 reviews) · おゝきに, agar-based suri-kohaku in plain, ume, yuzu and brown sugar, developed by the 11th-generation head; 50 pieces a box, ¥1,435 (Waraku, 2023 data; co-trip) · 音羽山, a soy-flour rakugan filled with koshi-an (Waraku) · gyoja-mochi, five for ¥2,250 (July 2025)',
    website: null, gmaps: gm('柏屋光貞 東山安井'), menu_url: null,
    notes: "[Wagashi · Higashiyama-Yasui, takeaway only] A family wagashi house since 1806 whose 行者餅 — rice cake with white miso and sansho — is sold just once a year on 16 July for the Gion Festival, drawing a dawn queue. All year: おゝきに agar sweets from the 11th-generation head, and 音羽山. Cash only; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Head of the house, 11th generation (co-trip; Waraku)', '10th generation, still a working confectioner (Waraku, 2021)'], origin: null,
      background: 'A Kyoto wagashi house founded in 1806 (Waraku). Waraku describes the 10th generation as still a working confectioner in the mid-80s at the time of writing, and describes おゝきに as a family effort: the 11th-generation head reworked the 9th generation’s summer agar sweet for tea ceremonies, 京氷室 (Kyo-himuro), and the 10th set the concept. co-trip also credits おゝきに to the 11th generation. A July 2025 reviewer retells the 1806 origin of 行者餅, made during an epidemic and offered to En-no-Gyoja, and about 8,000 sold on its one day a year.',
      philosophy: '“The method is a secret (laughs). The hint is air-in chocolate.” — the 10th generation on おゝきに (Waraku).',
      specialty: '行者餅 (once a year); おゝきに.',
      anecdotes: [
        { text: 'A July 2025 visitor took two days off to queue from 8:40 am for the once-a-year gyoja-mochi.', source: R + 'B510851423/' },
        { text: 'A July 2026 first-timer found the sansho, then the white miso, inside the rice cake a surprise.', source: R + 'B532654935/' },
      ],
      japanese_sources_summary: '和楽web (2021年『和樂』の転載、2023年9月時点のデータ): 柏屋光貞「おゝきに」、文化3 (1806) 年創業、10代目の中川タ津也 (たつや) さんは80代半ばの今も現役の職人、9代目が考案した寒天菓子「京氷室」をもっと気楽にと11代目が製法を開発し、10代目がコンセプトを固めた、すり琥珀、白はプレーン・ピンクは梅・緑が柚子・茶が黒糖、1箱1,435円 (税込)、50個入り、通年、「音羽山」は中煎りの大豆粉の落雁で中にこしあん、京都市東山区安井毘沙門町33-2。co-trip: 11代目が考案した「おゝきに」は黒糖、プレーン、梅、柚子の4種類、市バス東山安井下車すぐ。mapple: 10:00〜18:00、通年、おゝきに1,200円、行者餅 (3個入り) 1,200円、音羽山1個70円、行者餅は7月16日までに予約。食べログ: 和菓子、月〜土 10:00〜18:00、日曜定休、カード・電子マネー・QR決済不可、テイクアウト。口コミ (2024〜2026年、英語): 行者餅は祇園祭の7月16日だけ、1日に約8,000個、2016年までは予約可で今は店頭のみ、80人以上の行列、白味噌と山椒、5個2,250円 (2025年7月)。',
      confidence: 'medium', sources: [WK, CT, MP, TB, R + 'B510851423/', R + 'B512741443/', R + 'B532654935/'] },
    cultural_comfort: { level: 'none_needed', note: 'Takeaway only; cash only; queue on 16 July.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区安井毘沙門町33-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026. Historic family shop: founded 1806, with the 9th–11th generations described in Waraku (intojapanwaraku.com/travel/226066); 11代目 also per co-trip. Drafted under Greg’s ruling on particularly historic family-owned shops, per the coordinator (2026-11-08).' },
    pin_source: `Tabelog ${TB} (35.000469, 135.777690); GSI resolves 安井毘沙門町33-2 only to the ward (393m) — marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WK, MP, R + 'B510851423/'],
    price_note: 'Ōkini from Waraku (2023 data); gyoja-mochi from a July 2025 review; Otowayama from mapple. May have changed.', last_checked: TODAY, items: [
      it('おゝきに', '', 'Ōkini, 50 dry sweets (plain, ume, yuzu, brown sugar)', '¥1,435', 'Wagashi', 'ask', 'ask', '', 'ookini'),
      it('行者餅', '', 'Gyoja-mochi, five (16 July only)', '¥2,250', 'Wagashi', 'ask', 'ask', 'Once a year.', 'gyoja'),
      it('音羽山', '', 'Otowayama (soy-flour rakugan with koshi-an), each', '¥70', 'Wagashi', 'ask', 'ask', '', 'otowayama'),
    ] }, {
    cuisine: '1806年創業の京菓子屋 (和楽web)。祇園祭の7月16日だけに売る、餅と山椒入りの白味噌あんを薄い皮で包んだ「行者餅」で知られる (co-trip、2025〜2026年の口コミ)・11代目が製法を開発したすり琥珀「おゝきに」はプレーン、梅、柚子、黒糖、50個入り1,435円 (和楽web、2023年のデータ、co-trip)・大豆粉の落雁にこしあんの「音羽山」(和楽web)・行者餅は5個2,250円 (2025年7月)',
    neighborhood: '東山安井',
    gf_detail: '要確認。寒天のすり琥珀、こしあん入りの大豆粉の落雁、白味噌あんの餅などの和菓子。原材料の全体は公開されていない (和楽web、口コミ)。',
    vegan_detail: '要確認。寒天、砂糖、大豆粉、あん、餅、白味噌の和菓子だが、原材料の全体は公開されていない (和楽web、口コミ)。',
    notes: '[和菓子・東山安井、持ち帰りのみ] 1806年から続く家の和菓子屋。祇園祭の7月16日に一度だけ売る白味噌と山椒の「行者餅」に朝から行列。ふだんは11代目による寒天菓子「おゝきに」や「音羽山」を。現金のみ、日曜休み。',
  });
}

// ================================================================ ビアバル＆バー Lit
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038875/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://lit-beer.com/';
  const L = ['11:30', '14:30'], D = ['17:30', '02:00'], W = ['13:00', '02:00'];
  put({
    id: 'kyoto_beer_bar_lit_karasuma', name: 'ビアバル＆バー Lit (Beer Bar & Bar Lit)', category: 'OMNI',
    lat: 35.00162692787157, lng: 135.75946377032858, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a craft-beer bar (barley and wheat beers), with pasta, fried chicken and bread (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: food such as fried chicken, cheese omelette and carbonara (reviews).',
    hours_raw: 'Monday and Friday 11:30–14:30 and 17:30–02:00; Tuesday and Thursday 17:30–02:00; weekends and holidays 13:00–02:00; closed Wednesday and every other Tuesday — calendar on Instagram (Tabelog). Table charge ¥330 (Tabelog). Cards and QR; no e-money (Tabelog). 25 seats with a semi-private room for six; non-smoking (Tabelog). First floor of a building on Karasuma south of Ayanokoji, by Shijo station Exit 6 (Tabelog; June 2026). Opened 24 February 2023 (Tabelog).',
    hours: { 0: day(L, D), 1: day(D), 3: day(D), 4: day(L, D), 5: day(W), 6: day(W) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma, south of Shijo',
    cuisine: 'Craft-beer bar with ten taps chosen by a beer sommelier from breweries across Japan (2025–2026 reviews) · e.g. a yuzu IPA on the free-drink course (May 2025) · creamy cheese omelette ¥550; fried chicken ¥660; Lit carbonara ¥1,320 (March 2025) · weekday pasta lunch with bread and salad ¥880 (October 2025) · free-drink craft-beer courses for groups (May 2025)',
    website: SITE, gmaps: gm('ビアバル＆バー Lit 烏丸'), menu_url: SITE,
    notes: "[Craft beer · Karasuma by Shijo station, ten taps] A friendly beer bar a step from Shijo station with ten rotating taps from Japanese craft breweries, helpful explanations and hearty bar food — fried chicken, carbonara — plus an ¥880 pasta lunch on some weekdays. Open till 2 am; ¥330 charge.",
    chef_bio: { chef_name: null, roles: ['Master (Matsu) and staff'], origin: null,
      background: 'Opened in February 2023 (Tabelog). Reviewers (2024–2026) describe a hidden-feeling bar with friendly staff who explain craft beer clearly, beers chosen by a beer sommelier, and a master, Matsu, who chats with solo drinkers.',
      philosophy: null,
      specialty: 'Japanese craft beer on ten taps.',
      anecdotes: [
        { text: 'At a May 2025 company party, one guest drank about five glasses of a yuzu IPA on the free-drink course.', source: R + 'B507192460/' },
        { text: 'A June 2026 solo drinker stopped in before the last train and chatted with the master, Matsu.', source: R + 'B464364131/' },
      ],
      japanese_sources_summary: '食べログ: ビアバル＆バー Lit、バル・ビアバー・パスタ、京都市下京区烏丸通綾小路下ル二帖半敷町661 ツカキスクエア1F、月・金 11:30〜14:30・17:30〜翌2:00、火・木 17:30〜翌2:00、土日・祝日 13:00〜翌2:00、水曜定休、隔週火曜休み (インスタグラムで告知)、チャージ330円、カード・QR決済可、電子マネー不可、25席、6名の半個室あり、禁煙、2023年2月24日オープン。口コミ (2024〜2026年、英語): 四条駅6番出口のすぐ前、全国から選んだ10タップのクラフトビール、ビアソムリエが選ぶ、マスターのマツさん、わかりやすい説明、クリーミーチーズオムレツ550円、唐揚げ660円、Litのカルボナーラ1,320円、平日のパスタランチ (パンとサラダ付き) 880円、飲み放題のコース、柚子のIPA。',
      confidence: 'low', sources: [SITE, TB, R + 'B464364131/', R + 'B496827647/', R + 'B503002974/', R + 'B506988855/', R + 'B507192460/', R + 'B514998774/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the beers; ¥330 charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通綾小路下ル二帖半敷町661 ツカキスクエア 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.001627, 135.759464); cross-checked: GSI 京都府京都市下京区二帖半敷町661番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B503002974/', R + 'B514998774/'],
    price_note: 'Prices from March and October 2025 reviews; plus ¥330 charge at night.', last_checked: TODAY, items: [
      it('', '', 'Fried chicken', '¥660', 'Food', 'no', 'no', '', 'karaage'),
      it('', '', 'Lit carbonara', '¥1,320', 'Pasta', 'no', 'no', '', 'carbonara'),
      it('', '', 'Weekday pasta lunch with bread and salad', '¥880', 'Lunch', 'no', 'ask', '', 'lunch'),
    ] }, {
    cuisine: 'ビアソムリエが全国から選ぶ10タップのクラフトビールのバー (2025〜2026年の口コミ)・たとえば飲み放題のコースの柚子のIPA (2025年5月)・クリーミーチーズオムレツ550円、唐揚げ660円、Litのカルボナーラ1,320円 (2025年3月)・平日のパスタランチ、パンとサラダ付き880円 (2025年10月)・団体向けのクラフトビール飲み放題のコース (2025年5月)',
    neighborhood: '烏丸、四条の南',
    gf_detail: 'グルテンフリー不可。クラフトビール (大麦や小麦) のバー。パスタ、唐揚げ、パンも (口コミ)。',
    vegan_detail: 'ヴィーガン不可。唐揚げ、チーズオムレツ、カルボナーラなど (口コミ)。',
    notes: '[クラフトビール・四条駅前の烏丸、10タップ] 四条駅すぐの気さくなビアバー。全国のクラフトブルワリーから10タップ、わかりやすい説明、唐揚げやカルボナーラなどしっかりしたつまみ、平日には880円のパスタランチも。深夜2時まで、チャージ330円。',
  });
}

// ================================================================ 和牛・焼肉・ホルモン三吉 烏丸本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040165/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://sankichi3j.jp/';
  const A = day(['18:00', '22:00']), B = day(['18:00', '23:00']);
  put({
    id: 'kyoto_sankichi_horumon_karasuma', name: '和牛・焼肉・ホルモン三吉 烏丸本店 (Sankichi)', category: 'OMNI',
    lat: 35.008502, lng: 135.761407, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Horumon and wagyu yakiniku with a house tare, and stews; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: offal and wagyu yakiniku (Tabelog).',
    hours_raw: '18:00–22:00 (last order 21:30) Monday, Wednesday, Thursday, Sunday and holidays; 18:00–23:00 (last food order 22:15, drinks 22:30) Friday, Saturday and holiday eves; closed Tuesday; may close early if ingredients run out; open some days in long holidays — see Instagram (Tabelog). Liver, raw chicken and stews are not always available (Tabelog). Cards, e-money and QR (Tabelog). Booking: cancelling after 3 pm on the day costs 100% for course bookings; seat-only no-shows ¥3,000 a head (Tabelog). 27 seats: 7 at the counter, 20 at tables; non-smoking; smokeless grills (Tabelog; December 2024). In a basement (B1F) opposite the Nakagyo post office at Higashinotoin-Sanjo (official site). Opened 8 October 2023 (Tabelog).',
    hours: { 0: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin-Sanjo',
    cuisine: 'Horumon and wagyu yakiniku reviving the old Sankichi of Urateramachi: former regulars and staff restored the original taste and sauce (2024–2025 reviews) · fresh horumon in a distinctive tare; simmered dishes; more wagyu than before (2025) · imo-shochu soda mixed to your strength (December 2024) · about ¥6,000–8,000 a head (2024–2025 reviews)',
    website: SITE, gmaps: gm('三吉 烏丸本店 ホルモン'), menu_url: TB,
    notes: "[Yakiniku · Higashinotoin-Sanjo, a revived horumon house] The beloved Sankichi of Urateramachi, brought back by former regulars and staff: fresh horumon and wagyu in the old house sauce, grilled on smokeless roasters in a basement opposite the Nakagyo post office. Friendly crew; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Chef, a former regular (not named)'], origin: null,
      background: 'Opened in October 2023 (Tabelog) to revive Sankichi, a horumon restaurant once in Urateramachi; reviewers write that the current chef was a regular and that staff from the old days work here, restoring the original owner’s taste (2024–2025).',
      philosophy: null,
      specialty: 'Horumon in the old Sankichi sauce.',
      anecdotes: [
        { text: 'A January 2024 diner who grew up on the sauce found it restored “100% true to the owner’s taste”.', source: R + 'B477624071/' },
        { text: 'A December 2024 guest noticed almost no smoke, even from the horumon.', source: R + 'B498227223/' },
        { text: 'A January 2025 former student regular found the stew close to, but not quite, the original.', source: R + 'B500041160/' },
      ],
      japanese_sources_summary: '公式サイト: 和牛・焼肉・ホルモン三吉 烏丸本店、京都市中京区菱屋町33 珠光ビル三条B1F、東洞院三条の日本郵便中京郵便局の南向かい。食べログ: 焼肉・ホルモン、月・水・木・日・祝日 18:00〜22:00 (L.O.21:30)、金土・祝前日 18:00〜23:00 (料理L.O.22:15、ドリンクL.O.22:30)、火曜定休、食材がなくなり次第早じまい、連休中は営業する日も (インスタグラムで)、レバー・生の鶏・煮込みなどはない日も、カード・電子マネー・QR決済可、当日15時以降のキャンセルは100%、席のみ予約の無断キャンセルは1人3,000円、27席 (カウンター7、テーブル20)、禁煙、2023年10月8日オープン。口コミ (2024〜2025年、英語): 裏寺町にあった三吉の復活、元常連の料理人と昔のスタッフ、元の味のたれ、新鮮なホルモン、無煙ロースター、煮込み、和牛が多め、芋焼酎のソーダ割り、気さくなスタッフ、1人6,000〜8,000円ほど。',
      confidence: 'low', sources: [SITE, TB, R + 'B477624071/', R + 'B498227223/', R + 'B500041160/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; some cuts sell out.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区菱屋町33 珠光ビル三条 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through 2026.' },
    pin_source: `Tabelog ${TB} (35.008502, 135.761308), offset ~9m to clear kyr_seabura_no_kami_slurp (0.1m, likely the same building); cross-checked: GSI 京都府京都市中京区菱屋町33番地 (lot) 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published prices; reviews report about ¥6,000–8,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Horumon assortment', '', 'Yakiniku', 'ask', 'no', '', 'horumon'),
      it('', '', 'Wagyu yakiniku', '', 'Yakiniku', 'ask', 'no', '', 'wagyu'),
      it('', '', 'Stew (when available)', '', 'Small plates', 'ask', 'no', '', 'nikomi'),
    ] }, {
    cuisine: '裏寺町にあった三吉を復活させたホルモンと和牛の焼肉。元常連と昔のスタッフが元の味とたれを再現 (2024〜2025年の口コミ)・独特のたれの新鮮なホルモン、煮込み、和牛が多め (2025年)・好みの濃さにしてくれる芋焼酎のソーダ割り (2024年12月)・1人6,000〜8,000円ほど (2024〜2025年の口コミ)',
    neighborhood: '東洞院三条',
    gf_detail: '要確認。店のたれのホルモンと和牛の焼肉、煮込み。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。ホルモンと和牛の焼肉 (食べログ)。',
    notes: '[焼肉・東洞院三条、よみがえったホルモン] 裏寺町で愛された三吉を、元常連と昔のスタッフが復活。昔のたれの新鮮なホルモンと和牛を、中京郵便局向かいの地下で無煙ロースターで。気さくなスタッフ、火曜休み。',
  });
}

// ================================================================ 中村楼
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001411/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.gion-nakamurarou.com/gion-nakamurarou/';
  const H = day(['11:30', '14:00'], ['17:00', '18:30']);
  put({
    id: 'kyoto_gion_nakamuraro', name: '中村楼 (Nakamuraro)', category: 'OMNI',
    lat: 35.00300031974359, lng: 135.77874059925526, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki with dashi, miso and soy, dengaku tofu and grilled mochi; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki with fish and meat courses (reviews).',
    hours_raw: 'Lunch 11:30–14:00 and dinner 17:00–18:30 (last entry at those times); closed Wednesday (Tabelog). Book by phone early for banquets and busy seasons (Tabelog). Service charge 10% at lunch and 15% at dinner in the main dining room, 18% in private rooms (Tabelog). Cards (incl. UnionPay), e-money and QR (Tabelog). 100 seats with private rooms, some over the garden; non-smoking, with a smoking area (Tabelog; 2025–2026 reviews). Just inside Yasaka Shrine’s south gate; about 10 minutes’ walk from Gion-Shijo station Exit 6 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yasaka Shrine, by the south gate',
    cuisine: 'Historic ryotei inside Yasaka Shrine’s south gate: opened as a shrine-gate teahouse at the end of the Muromachi period, known for its dengaku tofu, and a ryotei since the late Edo period — “480 years” of hospitality (Hot Pepper; Tabelog) · seasonal kaiseki ¥9,680 and a lighter course ¥6,655, booked by the day before, tax in (Tabelog) · lunch kaiseki ¥9,680 (July 2026) · seasonal Kyoto kaiseki; matcha and Chigo-mochi grilled with miso during the Gion Festival (July 2025) · a French-inspired course with mushroom soup and white fish in tomato sauce (August 2025) · rooms over the garden or looking onto the south gate (2025–2026)',
    website: SITE, gmaps: gm('中村楼 八坂神社'), menu_url: TB,
    notes: "[Kaiseki · inside Yasaka Shrine, a Muromachi-era ryotei] A shrine-gate teahouse from the late Muromachi period, long known for dengaku tofu and now a ryotei just inside Yasaka Shrine: seasonal kaiseki in rooms over the garden or facing the shrine’s south gate. Lunch kaiseki about ¥9,700; dinner seatings close early; service 10–18%. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Not named'], origin: null,
      background: 'Listed on Hot Pepper as Niken-chaya Nakamuraro: founded in the late Muromachi period as a teahouse at the shrine gate serving its famous dengaku tofu, it became a ryotei (料理茶屋) at the end of the Edo period, and cites 480 years of hospitality (Hot Pepper; Tabelog). A February 2026 reviewer traced it back to the days of the Niken-chaya teahouses.',
      philosophy: 'A casual visit to a traditional ryotei (July 2026 review, quoting the restaurant’s concept).',
      specialty: 'Kyoto kaiseki; dengaku tofu.',
      anecdotes: [
        { text: 'A July 2025 Gion Festival lunch ended with matcha and charcoal-grilled Chigo-mochi.', source: R + 'B512600558/' },
        { text: 'A February 2026 diner took a second-floor room looking onto Yasaka Shrine’s south gate.', source: R + 'B522888856/' },
        { text: 'A July 2026 family of three had the ¥9,680 lunch kaiseki in a garden-view room.', source: R + 'B116377557/' },
      ],
      japanese_sources_summary: 'ホットペッパー: 二軒茶屋 中村楼、京都市東山区祇園町南側509、創業 室町期、室町末期に門前茶屋として創業し名物の田楽豆腐などを供すようになり江戸末期から料理茶屋に、四八〇年来のおもてなしの心。食べログ: 中村楼、日本料理、八坂神社の南楼門をくぐってすぐ、480年の文化、季節の会席9,680円と6,655円 (税込、前日までの予約)、昼11:30〜14:00、夜17:00〜18:30 (いずれも最終入店)、水曜定休、宴会などで混むため早めに電話で予約を、サービス料は個室18%、個室以外は昼10%・夜15%、カード (銀聯も)・電子マネー・QR決済可、100席、個室あり、禁煙 (喫煙所あり)。口コミ (2025〜2026年、英語): 昼の会席9,680円、庭を望む「鶴亀松」の間、2階から南楼門、二軒茶屋の時代から、祇園祭の抹茶と稚児餅、フレンチ風のコース、季節の京懐石、団体利用でビールがぬるかったという声。',
      confidence: 'low', sources: [SITE, TB, 'https://www.hotpepper.jp/strJ000108545/', R + 'B116377557/', R + 'B503910360/', R + 'B512600558/', R + 'B512804697/', R + 'B522888856/', R + 'B523318272/'] },
    cultural_comfort: { level: 'japanese', note: 'Book ahead; service 10–18%.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側509',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026. History (late Muromachi founding, 480 years) from Hot Pepper (hotpepper.jp/strJ000108545) and Tabelog; the official site is script-rendered and could not be read.' },
    pin_source: `Tabelog ${TB} (35.003000, 135.778741); cross-checked: GSI 京都府京都市東山区祇園町南側509番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B116377557/'],
    price_note: 'Lunch price from a July 2026 review; plus service 10–18%.', last_checked: TODAY, items: [
      it('', '', 'Lunch kaiseki', '¥9,680', 'Courses', 'ask', 'no', 'July 2026.', 'lunch'),
      it('', '', 'Seasonal course (book by the day before)', '¥6,655', 'Courses', 'ask', 'no', 'Tax in (Tabelog).', 'course6655'),
      it('', '', 'Dinner kaiseki', '', 'Courses', 'ask', 'no', '', 'dinner'),
    ] }, {
    cuisine: '八坂神社の南楼門をくぐってすぐの老舗料亭。室町末期に門前茶屋として創業し田楽豆腐で知られ、江戸末期から料理茶屋、「480年」のもてなし (ホットペッパー、食べログ)・季節の会席9,680円と軽めのコース6,655円、税込、前日までの予約 (食べログ)・昼の会席9,680円 (2026年7月)・季節の京懐石、祇園祭の時期は抹茶と味噌の稚児餅 (2025年7月)・マッシュルームのスープやトマトソースの白身魚のフレンチ風のコース (2025年8月)・庭を望む部屋や南楼門を見る部屋 (2025〜2026年)',
    neighborhood: '八坂神社の南門',
    gf_detail: '要確認。出汁、味噌、醤油の京懐石、田楽豆腐や焼き餅。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚や肉のある会席 (口コミ)。',
    notes: '[会席・八坂神社の境内、室町からの料亭] 室町末期の門前茶屋に始まり田楽豆腐で知られる、八坂神社の南楼門すぐの料亭。庭を望む部屋や南楼門を見る部屋で季節の会席を。昼の会席は9,700円ほど、夜は早く締まる、サービス料10〜18%。水曜休み。',
  });
}

save();
