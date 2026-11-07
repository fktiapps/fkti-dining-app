// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 62.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - 京もつ鍋ホルモン 朱々 祇園南本店 — chain (shops in Kyoto, Osaka, Okayama ×2, Hiroshima, Shizuoka)
//   - たこやき王子 京都木屋町 — same-concept branch of a brand in data (Osaka: たこやき王子 難波道頓堀店)
//   - BAR tonbo — too thin to verify (two 2025–26 reviews, neither with text)
//   + 祇園 鳥寿々 Gion Torisuzu (yakitori counter of jidori from across Japan; since 2024)
//   - ハコノスシ 彩あかり — too thin to verify (relocated and reopened 7 September 2026; four of six reviews are from
//     tasting events or the pre-opening)
//   + ふく正 Fuku Masa (Gion fugu and hamo restaurant)
//   + レゲエの居酒家 ラスタ Reggae no Izakaya Rasta (late-night Asian and Caribbean izakaya off Kawaramachi)
//   + カワラマチst.ソーヤ Kawaramachi st. Sawyer (obanzai, teppan and sake; second shop of Muneya; since 2022)
//   Same-name counts first (data and queue-status.jsonl): たこやき王子 (Osaka data); the others none; no earlier
//   rulings. ソーヤ — a sister of Teppan and Sake Muneya (August 2026 review), not in data: a 2-shop group, drafted.
//   None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: ラスタ 「なし」; 鳥寿々, ふく正 and ソーヤ have no section.
//   Pins (checked against main 708e6304): ソーヤ — Tabelog point 5.1 m from kyoto_nihonshu_to_oryori_oyu (same lot
//   282), moved 1 m north (6.1 m).
//   Ruling applied: single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-62');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26025329', 'chain: 京もつ鍋ホルモン 朱々 — shops in Kyoto (Shijo-Omiya, Gion), Osaka (Higashi-Mikuni), Okayama (Yanagimachi, Hokancho), Hiroshima and Fuji-Yoshiwara (Gurunavi listings)');
skip('26027105', 'same-concept branch of a brand in data: たこやき王子 (Osaka: たこやき王子 難波道頓堀店); 株式会社たこやき王子 of Shinsaibashi runs several shops');
skip('26013533', 'too thin to verify: two 2025–26 reviews, neither with text');
skip('26045573', 'too thin to verify: relocated and reopened on 7 September 2026; four of its six reviews come from tasting events or the pre-opening');

// ================================================================ 祇園 鳥寿々
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041523/'; const R = TB + 'dtlrvwlst/';
  const TC = 'https://www.tablecheck.com/gion-torisuzu';
  const D = day(['17:00', '22:30']);
  put({
    id: 'kyoto_gion_torisuzu', name: '祇園 鳥寿々 (Gion Torisuzu)', category: 'OMNI',
    lat: 35.002968, lng: 135.773349, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt-seasoned skewers, but the course ends with ramen or oyakodon and includes soy-glazed dishes (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori course (2025–26 reviews).',
    hours_raw: 'Daily 17:00–22:30 (Tabelog). Courses by booking only; call to arrange the start time (Tabelog). Cards; no e-money or QR (Tabelog). 12 counter seats; non-smoking; free Wi-Fi (Tabelog). In a narrow alley in Gion south of Shijo, about 140 m from Gion-Shijo Stn (Tabelog; March 2025 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion south of Shijo — 2 min from Gion-Shijo Stn',
    cuisine: 'Yakitori courses of jidori and shamo from across Japan, seasoned with Tosa salt and grilled over binchotan (TableCheck): a daily comparison such as Tottori Kano jidori and Kagoshima Satsuma jidori (June 2026), Omi jidori (January 2026); a ¥10,000 course (November 2025) and a lighter course; pâté, cartilage, soy-glazed yaki onigiri, ramen and oyakodon to finish; a wide choice of wine by the glass (2025–26 reviews); about ¥12,500 at dinner (TableCheck)',
    website: TC, gmaps: gm('祇園 鳥寿々'), menu_url: null,
    notes: "[Yakitori course · Gion] A calm 12-seat counter in a Gion alley grilling jidori and shamo from across Japan over binchotan, one skewer at a time, with pâté, palate cleansers, wine by the glass and ramen or oyakodon to finish. About ¥10,000–15,000. Courses by booking.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Opened 5 July 2024 (Tabelog). The chef grills each skewer individually (March 2025 review) and is described as friendly (March 2026 review).',
      philosophy: 'Local chickens and gamecocks from across Japan, Tosa salt and binchotan (TableCheck).',
      specialty: 'Jidori yakitori course.',
      anecdotes: [
        { text: 'A June 2026 regular compared Tottori Kano jidori with Kagoshima Satsuma jidori in a single course.', source: R + 'B488537468/' },
        { text: 'A May 2025 diner chose the lighter course and regretted missing the oyakodon on the full one.', source: R + 'B507425614/' },
        { text: 'A January 2025 diner found the skewers overcooked and the coarse salt too strong.', source: R + 'B498763862/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 鳥寿々、焼き鳥、東山区祇園町南側581-3、祇園四条駅から143m、毎日 17:00〜22:30、コースは予約制 (開始時間は電話で相談)、カード可、電子マネー・QR 不可、カウンター12席、禁煙、Wi-Fi、2024年7月5日オープン。TableCheck (英語): 全国の地鶏と軍鶏、土佐の塩、備長炭、夜12,500円。口コミ (2025年1月〜2026年6月、英語): 鳥取の鹿野地鶏と鹿児島のさつま地鶏の食べ比べ、近江の地鶏、10,000円のコース、軽めのコース、パテ、なんこつ、醤油の焼きおにぎり、締めのラーメンと親子丼、グラスワインが豊富、路地のカウンター、焼き過ぎで塩が強いという声も。',
      confidence: 'medium', sources: [TB, TC, R + 'B488537468/', R + 'B498763862/', R + 'B502513682/', R + 'B502621092/', R + 'B507425614/', R + 'B517984907/', R + 'B521147577/', R + 'B523798227/', R + 'B531458693/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter course; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側581-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.002968, 135.773349); cross-checked: GSI 京都府京都市東山区祇園町南側581番地 (lot) 93m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517984907/', TC],
    price_note: 'Course price from a November 2025 review; dinner price from TableCheck.', last_checked: TODAY, items: [
      it('', '', 'Yakitori course', '¥10,000', 'Courses', 'ask', 'no', 'November 2025 review.', 'course'),
      it('', '', 'Oyakodon (to finish)', '', 'To finish', 'ask', 'no', 'May 2025 and June 2026 reviews.', 'oyakodon'),
    ] }, {
    cuisine: '全国の地鶏と軍鶏を土佐の塩と備長炭で焼く焼き鳥のコース (TableCheck): 鳥取の鹿野地鶏と鹿児島のさつま地鶏などの食べ比べ (2026年6月)、近江の地鶏 (2026年1月)、10,000円のコース (2025年11月) と軽めのコース、パテ、なんこつ、醤油の焼きおにぎり、締めのラーメンや親子丼、豊富なグラスワイン (2025〜26年の口コミ)。夜は約12,500円 (TableCheck)',
    neighborhood: '祇園、四条の南。祇園四条駅から徒歩2分',
    gf_detail: '要確認。塩の串だが、締めにラーメンや親子丼、醤油の料理もある (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の焼き鳥のコース (2025〜26年の口コミ)。',
    notes: '[焼き鳥のコース・祇園] 祇園の路地の落ち着いた12席のカウンター。全国の地鶏や軍鶏を備長炭で一本ずつ焼き、パテ、箸休め、グラスワイン、締めのラーメンや親子丼まで。1万〜1万5千円ほど。コースは予約制。',
  });
}

// ================================================================ ふく正
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26035199/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_fukumasa_gion', name: 'ふく正 (Fuku Masa)', category: 'OMNI',
    lat: 35.005586, lng: 135.772679, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fugu sashimi and grilled fugu, but fried fugu, ponzu and zosui are part of the meal (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fugu and hamo restaurant (2025–26 reviews).',
    hours_raw: 'Hours not listed on Tabelog. Bookings taken (Tabelog). Cards (JCB, AMEX) (Tabelog). Smoking allowed (Tabelog). Ordering is by conversation — the staff ask, for example, whether you want tessa or butsu (February 2026 review). On the 1F of 祇園一番館, in the Nawate area north of Shijo (Tabelog; February 2025 review).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, north of Shijo — 238 m from Gion-Shijo Stn',
    cuisine: 'Fugu in winter, hamo in summer (2025–26 reviews): fugu sashimi (tessa) or chunks (butsu), grilled fugu fresh enough to eat raw, fried fugu, cheese with shirako, zosui, hire-zake; hamo sashimi and hamo shabu-shabu with sudachi, ume and sea urchin (August 2025)',
    website: null, gmaps: gm('ふく正 祇園'), menu_url: null,
    notes: "[Fugu & hamo · Gion] A well-known Gion fugu house with an energetic chef: tessa or butsu, grilled fugu fresh enough to eat raw, fried fugu, shirako and zosui in winter, and hamo shabu-shabu in summer. About ¥15,000–20,000. Hours not listed — book ahead.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'A well-known fugu restaurant in Gion with a "famous", energetic chef (February 2025 review).',
      philosophy: null, specialty: 'Fugu; hamo shabu-shabu.',
      anecdotes: [
        { text: 'A February 2025 regular tried cheese with shirako, then grilled and fried fugu and zosui.', source: R + 'B501195435/' },
        { text: 'Returning in February 2026, a diner ordered without a menu as the staff asked — tessa again, then grilled fugu safe to eat raw.', source: R + 'B502442883/' },
        { text: 'A summer 2025 business dinner had hamo sashimi, then hamo shabu-shabu with sudachi, ume and sea urchin.', source: R + 'B511091686/' },
      ],
      japanese_sources_summary: '食べログ: ふく正、ふぐ、東山区弁財天町8-1 祇園一番館 1F、祇園四条駅から238m、営業時間の記載なし、予約可、カード (JCB、AMEX)、喫煙可、魚にこだわる、隠れ家。口コミ (2025年2月〜2026年2月、英語): Nawate の有名なふぐの店、元気な名物の大将、てっさかぶつか聞かれる注文、生でも食べられる焼きふぐ、ふぐの唐揚げ、白子のチーズ、雑炊、ひれ酒、夏は鱧の刺身と鱧しゃぶ (すだち、梅、ウニ)。',
      confidence: 'low', sources: [TB, R + 'B501195435/', R + 'B502442883/', R + 'B511091686/', R + 'B518558012/'] },
    cultural_comfort: { level: 'japanese', note: 'Order by conversation; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区弁財天町8-1 祇園一番館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.005586, 135.772679); cross-checked: GSI 京都府京都市東山区弁財天町8番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B502442883/'],
    price_note: 'No prices read; reviewers spend ¥15,000–19,999.', last_checked: TODAY, items: [
      it('', '', 'Fugu sashimi (tessa)', '', 'Fugu', 'ask', 'no', 'February 2026 and December 2025 reviews.', 'tessa'),
      it('', '', 'Hamo shabu-shabu (summer)', '', 'Hamo', 'ask', 'no', 'August 2025 review.', 'hamo_shabu'),
    ] }, {
    cuisine: '冬はふぐ、夏は鱧 (2025〜26年の口コミ): てっさかぶつ、生でも食べられる焼きふぐ、ふぐの唐揚げ、白子のチーズ、雑炊、ひれ酒。鱧の刺身と、すだち・梅・ウニの鱧しゃぶ (2025年8月)',
    neighborhood: '祇園、四条の北。祇園四条駅から238m',
    gf_detail: '要確認。てっさや焼きふぐだが、唐揚げ、ポン酢、雑炊もある (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ふぐと鱧の店 (2025〜26年の口コミ)。',
    notes: '[ふぐと鱧・祇園] 元気な大将の祇園の有名なふぐの店。冬はてっさかぶつ、生でも食べられる焼きふぐ、唐揚げ、白子、雑炊、夏は鱧しゃぶ。1万5千〜2万円ほど。営業時間の記載がないので予約を。',
  });
}

// ================================================================ レゲエの居酒家 ラスタ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000633/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '29:00']);
  put({
    id: 'kyoto_reggae_izakaya_rasta', name: 'レゲエの居酒家 ラスタ (Reggae no Izakaya Rasta)', category: 'OMNI',
    lat: 35.007206, lng: 135.769532, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried chicken, yurinchi, fries and ramen (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Salad, edamame, fries and guacamole, but most mains are chicken or curry (2025–26 reviews).',
    hours_raw: 'Daily 18:00–5:00 (last orders food 4:15, drinks 4:30); open every day since August 2025 (Tabelog). Bookings taken (Tabelog). Service charge: Tabelog\'s Japanese original says 「なし」 (none). Cards, e-money and QR (Tabelog). 48 seats, all shoes-off (Tabelog; August 2026 review); smoking allowed (December 2025 review). Clarion Bldg 5F, off Kawaramachi south of Sanjo, 5 min from Keihan Sanjo and Hankyu Kawaramachi Stns (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi south of Sanjo — 5 min from Sanjo Stn',
    cuisine: 'Asian, Caribbean and Mexican izakaya food till dawn (2025–26 reviews): jerk chicken with lime (half ¥980), green curry ¥1,000 (January 2026), yurinchi, Indonesian dishes, ramen to finish, guacamole and lettuce wraps, fried potatoes with dip, salad and edamame; cocktails, tea highballs, tequila; all-you-can-drink courses; a chinchiro dice set',
    website: null, gmaps: gm('レゲエの居酒家 ラスタ 河原町'), menu_url: null,
    notes: "[Reggae izakaya · Kawaramachi] A relaxed, shoes-off fifth-floor izakaya open till 5 a.m.: jerk chicken with lime, green curry, yurinchi, Indonesian dishes and late ramen, with cocktails and tequila. About ¥3,000–4,000. Smoking allowed; open daily.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'A reggae-themed izakaya off Kawaramachi, open daily since August 2025 (Tabelog).',
      philosophy: null, specialty: 'Jerk chicken.',
      anecdotes: [
        { text: 'Looking for ramen after a fugu course over New Year 2025, a diner found this the only place open nearby.', source: R + 'B498488856/' },
        { text: 'A January 2026 diner who came for ramen stayed for half a jerk chicken and a green curry.', source: R + 'B522490974/' },
        { text: 'An August 2026 visitor found the shoes-off room calmer than expected, with attentive staff and a chinchiro dice set.', source: R + 'B533825236/' },
      ],
      japanese_sources_summary: '食べログ: レゲエの居酒家 ラスタ、居酒屋・ラーメン・アジア・エスニック、中京区河原町通三条下ル2丁目山崎町246 クラリオンビル 5F、京阪三条駅・阪急河原町駅から徒歩5分、毎日 18:00〜翌5:00 (料理 L.O. 4:15、ドリンク L.O. 4:30)、2025年8月から無休、予約可、チャージなし、カード・電子マネー・QR 可、48席。口コミ (2025年1月〜2026年8月、英語): ジャークチキン (ハーフ980円)、グリーンカレー1,000円、油淋鶏、インドネシア料理、締めのラーメン、ワカモレとレタス、ディップ付きのポテト、サラダ、枝豆、カクテル、お茶のハイボール、テキーラ、飲み放題、チンチロ、全席靴を脱ぐ、喫煙可。',
      confidence: 'medium', sources: [TB, R + 'B498488856/', R + 'B513966651/', R + 'B520438048/', R + 'B522490974/', R + 'B525792702/', R + 'B533825236/', R + 'B538409816/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条下ル2丁目山崎町246 クラリオンビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.007206, 135.769532); cross-checked: GSI 京都府京都市中京区山崎町246番地 (lot) 15m; 8.0 m from kyoto_sashimi_no_gyoshin (same building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522490974/'],
    price_note: 'Prices from a January 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Jerk chicken (half)', '¥980', 'Mains', 'ask', 'no', 'January 2026 review.', 'jerk_chicken'),
      it('', '', 'Green curry', '¥1,000', 'Mains', 'ask', 'no', 'January 2026 review.', 'green_curry'),
    ] }, {
    cuisine: '明け方まで食べられるアジア・カリブ・メキシコの居酒屋料理 (2025〜26年の口コミ): ライムのジャークチキン (ハーフ980円)、グリーンカレー1,000円 (2026年1月)、油淋鶏、インドネシア料理、締めのラーメン、ワカモレとレタス、ディップ付きのポテト、サラダ、枝豆。カクテル、お茶のハイボール、テキーラ、飲み放題のコース、チンチロのセット',
    neighborhood: '三条の南の河原町。三条駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。唐揚げ、油淋鶏、ポテト、ラーメン (2025〜26年の口コミ)。',
    vegan_detail: '要確認。サラダ、枝豆、ポテト、ワカモレはあるが、主菜は鶏やカレーが中心 (2025〜26年の口コミ)。',
    notes: '[レゲエの居酒屋・河原町] 朝5時まで開く、靴を脱いでくつろぐ5階の居酒屋。ライムのジャークチキン、グリーンカレー、油淋鶏、インドネシア料理、締めのラーメンをカクテルやテキーラと。3千〜4千円ほど。喫煙可。無休。',
  });
}

// ================================================================ カワラマチst.ソーヤ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037497/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '24:00']); const E = day(['15:00', '24:00']);
  put({
    id: 'kyoto_kawaramachi_st_sawyer', name: 'カワラマチst.ソーヤ (Kawaramachi st. Sawyer)', category: 'OMNI',
    lat: 34.999824, lng: 135.767847, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai and sashimi, but shumai, macaroni salad and soy- or miso-dressed dishes are on the menu (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Avocado-natto-takuan and some vegetable obanzai, but dashi and fish feature widely (2025–26 reviews).',
    hours_raw: 'Mon–Fri 17:00–24:00; Sat and Sun 15:00–24:00; hours may change (Tabelog). Bookings by phone only (Tabelog). Cards and QR; no e-money (Tabelog). A U-shaped counter with standing and seated places, and tables at the back; smoking allowed at the standing bar (Tabelog; August 2026 review). Some dishes in half portions for solo diners (December 2025 review). A glass-fronted shop on Kawaramachi-dori, 421 m from Kiyomizu-Gojo Stn (Tabelog; March 2026 review).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-dori — 421 m from Kiyomizu-Gojo Stn',
    cuisine: 'Kyoto obanzai, teppan snacks and sake (2025–26 reviews): a three-obanzai platter, spicy nuta, avocado with natto and takuan, sardines with mentaiko, grilled shime saba, okra and sea-bream shumai, chilled chawanmushi with black edamame, creative potato salad, mashed potatoes, macaroni salad; sours chilled with ice made from the drink itself, plenty of sake and wine',
    website: null, gmaps: gm('カワラマチst.ソーヤ'), menu_url: null,
    notes: "[Obanzai & sake bar · Kawaramachi] A bright, glass-fronted neo-izakaya on Kawaramachi, the second shop of the teppan-and-sake bar Muneya: obanzai like spicy nuta and avocado-natto, grilled shime saba and shumai, half portions for one, and lots of sake. About ¥3,000–5,000. Book by phone.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 17 April 2022 (Tabelog); the second shop of "Teppan and Sake Muneya", per an August 2026 review. Reviewers describe young, cheerful staff (April and July 2025).',
      philosophy: null, specialty: 'Obanzai; spicy nuta.',
      anecdotes: [
        { text: 'A February 2026 traveller returns every Kyoto trip for the three-obanzai platter, especially the spicy nuta and avocado-natto.', source: R + 'B496654429/' },
        { text: 'A July 2025 bar-hopper learned the sours are chilled with ice made from the drink itself.', source: R + 'B510449625/' },
        { text: 'On a packed Friday in March 2026, a solo drinker found room in the bright glass-fronted shop on Kawaramachi.', source: R + 'B525068696/' },
      ],
      japanese_sources_summary: '食べログ: カワラマチst.ソーヤ、居酒屋、下京区清水町282-8、清水五条駅から421m、月〜金 17:00〜24:00、土日 15:00〜24:00、予約は電話のみ、カード・QR 可、電子マネー不可、分煙 (立ち飲みは喫煙可)、2022年4月17日オープン。口コミ (2025年4月〜2026年8月、英語): Teppan and Sake Muneya の2号店、U字のカウンター (立ちと座り) と奥のテーブル、おばんざい3種盛り、辛いぬた、アボカドと納豆とたくあん、いわし明太、焼き〆鯖、オクラと鯛の焼売、黒枝豆の冷やし茶碗蒸し、創作ポテトサラダ、マッシュポテト、マカロニサラダ、お酒で作った氷のサワー、日本酒とワイン、一人用のハーフサイズ、若く元気なスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B496654429/', R + 'B505076944/', R + 'B506287255/', R + 'B510449625/', R + 'B510786494/', R + 'B513605880/', R + 'B517698905/', R + 'B519646122/', R + 'B525068696/', R + 'B533886030/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter for solo diners; half portions.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区清水町282-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.999815, 135.767847) is 5.1 m from kyoto_nihonshu_to_oryori_oyu (same lot 282), so moved 1 m north to 34.999824 (6.1 m from it); cross-checked: GSI 京都府京都市下京区清水町282番地 (lot) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B496654429/'],
    price_note: 'No prices read.', last_checked: TODAY, items: [
      it('', '', 'Three-obanzai platter', '', 'Obanzai', 'ask', 'ask', 'February 2026 and September 2025 reviews.', 'obanzai'),
      it('', '', 'Avocado with natto and takuan', '', 'Snacks', 'ask', 'ask', 'February and April 2026 reviews.', 'avocado_natto'),
    ] }, {
    cuisine: '京のおばんざい、鉄板のつまみ、日本酒 (2025〜26年の口コミ): おばんざい3種盛り、辛いぬた、アボカドと納豆とたくあん、いわし明太、焼き〆鯖、オクラと鯛の焼売、黒枝豆の冷やし茶碗蒸し、創作ポテトサラダ、マッシュポテト、マカロニサラダ。お酒で作った氷のサワー、豊富な日本酒とワイン',
    neighborhood: '河原町通。清水五条駅から421m',
    gf_detail: '要確認。おばんざいや刺身もあるが、焼売、マカロニサラダ、醤油や味噌の和え物もある (2025〜26年の口コミ)。',
    vegan_detail: '要確認。アボカド納豆たくあんや野菜のおばんざいもあるが、だしや魚が多い (2025〜26年の口コミ)。',
    notes: '[おばんざいと日本酒・河原町] 河原町通のガラス張りの明るいネオ居酒屋。Teppan and Sake Muneya の2号店。辛いぬたやアボカド納豆などのおばんざい、焼き〆鯖、焼売、一人用のハーフサイズ、豊富な日本酒。3千〜5千円ほど。予約は電話で。',
  });
}

save();
