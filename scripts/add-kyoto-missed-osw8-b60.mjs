// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 60.
//   + 夢や Yume Ya (long-running izakaya open midnight to 8 a.m., Nishi-Kiyamachi; rest)
//   + さしみの魚紳 Sashimi no Gyoshin (sashimi and fish izakaya by the BAL building; rest)
//   + babele (obanzai and ethnic small plates off Nawate, Gion; rest)
//   + 201 GION Wagyu Steak & Wine Bar (late-night dining bar, Gion Yasaka-shinchi; rest)
//   Rest list (mod 6 = 1) after batch 59, nearest-first — skipped:
//   - 紙谷商店 26023717: a family-run pickle and side-dish shop for takeaway, not a place to eat.
//   - エニグマ アフロ 26015671: thin — no reviews.
//   - Romeo 26044801: thin — one review.
//   - 三木鶏卵堂 26037517: brand already in data — 三木鶏卵 (kyoto_miki_keiran_nishiki, osw13-66).
//   - 幸せのパンケーキ 京都店 26027707: already skipped in batch 51 (chain).
//   Brand check per the new rule: queue-status.jsonl grepped for every pick's crawl ids (夢や 13176785/26007175/27133160,
//   魚紳 26001985, babele 26006719, 201 GION 26032801) — no earlier skip or done entries. Same-name check, same brand or operator
//   only: 夢や — one in Kyoto (夢や in data, vm_yume_ya, is an unrelated doughnut and coffee stand). 魚紳 — one. babele — one.
//   201 GION — one (earlier reviews call it Dining bar MO-JI). None is in data/kyoto.json (main 770f5582) by name or address
//   (西木屋町蛸薬師上ル 第一観光ビル 1F, 山崎町246-102 クラリオンビル, 弁財天町13 祇園縄手ホワイトビル, 末吉町99-3 ランスロットビル).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-60');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260301/26023717/', 'not a place to eat: takeaway pickle and side-dish shop');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26015671/', 'thin: no reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26044801/', 'thin: one review');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26037517/', 'brand already in data: 三木鶏卵 (kyoto_miki_keiran_nishiki)');

// ================================================================ 夢や Yume Ya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26007175/'; const R = TB + 'dtlrvwlst/';
  const H = day(['00:00', '08:00']);
  put({
    id: 'kyoto_yumeya_kiyamachi_late', name: '夢や (Yume Ya)', category: 'OMNI',
    lat: 35.00704446024024, lng: 135.77020112225856, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Daily sashimi, simmered shellfish, grilled fish and tofu alongside tempura, fried horse mackerel and udon; no gluten information (2018–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-centred izakaya with dashi-based dishes (2018–2026 reviews).',
    hours_raw: 'Tuesday–Sunday 0:00–8:00 — it opens at midnight and runs till morning; closed Monday; hours may change (Tabelog; 2018–2026 reviews). No reservations (Tabelog). Cards accepted (Tabelog). 24 counter seats (Tabelog). 1F of the Daiichi Kanko building, Nishi-Kiyamachi north of Takoyakushi (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Kiyamachi north of Takoyakushi',
    cuisine: 'Long-established all-night izakaya for after the bars close, with a long menu of fish, izakaya dishes, noodles and rice (2018–2026 reviews) · daily sashimi such as katsuo, yokowa, ika and conger; hoya with ponzu; sea cucumber; simmered bai-gai and wakadana; fried horse mackerel; grilled giblets; tempura such as tara-no-me and a conger and negi roll ¥900 (2018–2026 reviews) · dashimaki, grilled thick tofu, sukiyaki, kitsune udon, takana pilaf, negitoro and tororo bowl (2018–2026 reviews) · about ¥2,000–3,000 (Tabelog; 2024 reviews)',
    website: null, gmaps: gm('夢や 西木屋町 深夜'), menu_url: null,
    notes: '[Izakaya · Nishi-Kiyamachi, midnight to 8 a.m.] A long-running izakaya that only opens at midnight, the last stop after Kiyamachi\'s bars: fresh daily sashimi, fried horse mackerel, simmered shellfish, tempura and dashimaki, finishing with kitsune udon or a rice bowl. Counter only. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chefs and counter staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviews: a long-established counter izakaya on Nishi-Kiyamachi open from midnight until 8 a.m., a regular last stop for people coming off a night out (2018–2026).',
      philosophy: null, specialty: 'Daily sashimi; fried horse mackerel.',
      anecdotes: [
        { text: 'A June 2018 group, flagging at 4 a.m., shared kitsune udon, hoya with ponzu and grilled thick tofu — the tofu a little underdone.', source: R + 'B359814877/' },
        { text: 'A July 2022 regular who comes after drinking calls the fried horse mackerel exceptional and the sashimi always fresh.', source: R + 'B451304693/' },
        { text: 'A June 2026 visitor on the last night of a trip found it more of a proper izakaya than expected, with a ¥900 conger and negi tempura.', source: R + 'B530170375/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、中京区西木屋町蛸薬師上ル 第一観光ビル 1F、火〜日 0:00〜8:00、月曜休み、営業時間は変わることあり、予約不可、カード可、24席、カウンター。口コミ (2018年6月〜2026年6月、英語): 深夜0時に開いて朝まで、昔からある、飲んだあとの締めに、日替わりの刺身 (かつお、よこわ、いか、はも)、ほやポン酢、なまこ、ばい貝の煮付け、わかだなの煮物、あじフライ、ホルモン焼き、たらの芽などの天ぷら、はものねぎ巻き天ぷら900円、だし巻き、厚揚げ焼き、すき焼き、きつねうどん、高菜ピラフ、ねぎとろとろろ丼、2人で4,000円ほど (2024年5月)、厚揚げが少し生焼けだったとの声 (2018年6月)。',
      confidence: 'medium', sources: [TB, R + 'B359814877/', R + 'B423041573/', R + 'B451304693/', R + 'B463295174/', R + 'B476675327/', R + 'B477498215/', R + 'B484295006/', R + 'B490415926/', R + 'B512933390/', R + 'B530170375/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Opens at midnight; counter only; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区西木屋町蛸薬師上ル 第一観光ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through June 2026.' },
    pin_source: `Tabelog ${TB} (35.007044, 135.770201); the address has no lot number, so loc_precise false; nearest Kyoto record 6.8 m away (kyoto_yakiniku_tsumugi); checked against main 770f5582; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530170375/'],
    price_note: 'Price from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Conger and negi roll tempura', '¥900', 'Tempura', 'no', 'no', 'June 2026.', 'hamo_negi'),
      it('', '', 'Daily sashimi', '', 'Sashimi', 'ask', 'no', '2018–2026 reviews.', 'sashimi'),
    ] }, {
    cuisine: '飲んだあとに寄る昔からの夜通しの居酒屋。魚、居酒屋料理、麺、ご飯ものの品数が多い (2018〜2026年の口コミ)・かつお、よこわ、いか、はもなど日替わりの刺身、ほやポン酢、なまこ、ばい貝やわかだなの煮物、あじフライ、ホルモン焼き、たらの芽などの天ぷら、はものねぎ巻き天ぷら900円 (2018〜2026年の口コミ)・だし巻き、厚揚げ焼き、すき焼き、きつねうどん、高菜ピラフ、ねぎとろとろろ丼 (2018〜2026年の口コミ)・2,000〜3,000円ほど (食べログ、2024年の口コミ)',
    neighborhood: '蛸薬師の北の西木屋町',
    gf_detail: '要確認。日替わりの刺身、貝の煮物、焼き魚、厚揚げのほか、天ぷら、あじフライ、うどん。グルテンの情報はない (2018〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚中心でだしを使う居酒屋 (2018〜2026年の口コミ)。',
    notes: '[居酒屋・西木屋町、深夜0時から朝8時] 深夜0時にだけ開く昔からの居酒屋で、木屋町で飲んだあとの最後の1軒。新鮮な日替わりの刺身、あじフライ、貝の煮物、天ぷら、だし巻き、締めにきつねうどんや丼。カウンターのみ。月曜休み。',
  });
}

// ================================================================ さしみの魚紳 Sashimi no Gyoshin
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001985/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_sashimi_no_gyoshin', name: 'さしみの魚紳 (Sashimi no Gyoshin)', category: 'OMNI',
    lat: 35.007225666480295, lng: 135.7696168418569, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, simmered and grilled fish heads, ankimo and shellfish, but also tempura and fried wakasagi; soy-based simmering; no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sashimi and fish izakaya (2024–2026 reviews).',
    hours_raw: 'Tuesday–Sunday 17:00–23:00, last order 22:30; closed Monday; hours may change (Tabelog). Reservations accepted (Tabelog). A May 2026 reviewer saw a sign at the entrance saying the shop only serves guests who can communicate in Japanese. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 25 seats with a counter; non-smoking (Tabelog). At the back of the 1F of the Clarion building, east of the BAL building off Kawaramachi south of Sanjo; 10 min walk from Hankyu Kawaramachi Stn (Tabelog; September 2025).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi south of Sanjo, east of the BAL building',
    cuisine: 'Quiet fish izakaya built around sashimi (2024–2026 reviews) · signature sashimi platter, two pieces each of eight kinds, e.g. sanma and local white fish (September 2025–February 2026) · the head of the day\'s fish cooked as you like — grilled sea bream, braised kijihata; simmered kinmedai; grilled guji; ankimo; simmered turban shell; deep-fried wakasagi; tempura (2024–2026 reviews) · sake, sours and craft beer (2025–2026 reviews) · about ¥6,000–10,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('さしみの魚紳 河原町'), menu_url: null,
    notes: '[Fish izakaya · Kawaramachi-Sanjo, sashimi] A quiet, tucked-away izakaya true to its name: a platter of eight kinds of sashimi, two pieces each, then the head of the day\'s fish grilled or braised as you like, kinmedai, guji and ankimo, with sake. A May 2026 reviewer saw a sign saying only Japanese speakers are served. One found the simmered fish bony, another the sake list short. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef and staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a seafood izakaya of 25 seats east of the BAL building. Reviewers in 2024–2026 describe very fresh sashimi, fish heads of the day prepared to order, reasonable prices and a quiet room with few tourists.',
      philosophy: null, specialty: 'Sashimi platter; fish head of the day.',
      anecdotes: [
        { text: 'A May 2026 visitor saw a sign at the entrance saying the shop only accommodates those who can communicate in Japanese.', source: R + 'B529293098/' },
        { text: 'A May 2026 business group found the braised kijihata head the highlight — the speciality is the day\'s fish head done as you like.', source: R + 'B529395804/' },
        { text: 'A May 2025 pair loved the sashimi but found the simmered fish bony and hard to eat.', source: R + 'B507711311/' },
      ],
      japanese_sources_summary: '食べログ: 海鮮・居酒屋、中京区河原町通三条下ル四筋目BALビル東入ル山崎町246-102 クラリオンビル 1F、阪急河原町駅から徒歩10分、火〜日 17:00〜23:00 (L.O.22:30)、月曜休み、営業時間は変わることあり、予約可、カード (VISA・Master・JCB・AMEX・Diners) 可、電子マネー・QR 不可、25席、カウンター、禁煙。口コミ (2024年10月〜2026年5月、英語): 雑居ビル1階の奥、静かで観光客が少ない、8種2切れずつの刺身の盛り合わせ (さんま、地元の白身など)、その日の魚のかしらを好みの調理で (鯛のかぶと焼き、きじはたの煮付け)、きんめだいの煮付け、ぐじの焼き物、あん肝、さざえの煮物、わかさぎの唐揚げ、天ぷら、日本酒、サワー、クラフトビール、入口に「日本語でコミュニケーションできる方のみ」の張り紙があったとの声 (2026年5月)、煮魚は骨が多いとの声 (2025年5月)、日本酒の種類が少ないとの声 (2025年9月)。',
      confidence: 'medium', sources: [TB, R + 'B493129215/', R + 'B502802117/', R + 'B507711311/', R + 'B508032321/', R + 'B513014064/', R + 'B513734503/', R + 'B522358671/', R + 'B528125606/', R + 'B529293098/', R + 'B529395804/'] },
    cultural_comfort: { level: 'japanese', note: 'Japanese speakers only, per an entrance sign seen in May 2026; counter; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条下ル四筋目BALビル東入ル山崎町246-102 クラリオンビル １Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through May 2026.' },
    pin_source: `Tabelog ${TB} (35.007226, 135.769617); cross-checked: GSI 京都府京都市中京区山崎町246番地 (lot) 11 m; nearest Kyoto record 31.5 m away; checked against main 770f5582; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522358671/'],
    price_note: 'Dish names from 2025–2026 reviews; no prices given.', last_checked: TODAY, items: [
      it('', '', 'Sashimi platter (8 kinds, 2 pieces each)', '', 'Sashimi', 'ask', 'no', 'February 2026.', 'sashimi_mori'),
      it('', '', 'Fish head of the day, cooked to order', '', 'Grilled / simmered', 'ask', 'no', 'May 2026.', 'kashira'),
    ] }, {
    cuisine: '刺身が中心の静かな魚の居酒屋 (2024〜2026年の口コミ)・名物の刺身の盛り合わせは8種を2切れずつ、例: さんま、地元の白身 (2025年9月〜2026年2月)・その日の魚のかしらを好みの調理で (鯛のかぶと焼き、きじはたの煮付け)、きんめだいの煮付け、ぐじの焼き物、あん肝、さざえの煮物、わかさぎの唐揚げ、天ぷら (2024〜2026年の口コミ)・日本酒、サワー、クラフトビール (2025〜2026年の口コミ)・6,000〜10,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '三条の南の河原町、BALビルの東',
    gf_detail: '要確認。刺身、魚のかしらの焼き物や煮付け、あん肝、貝のほか、天ぷらやわかさぎの唐揚げ。醤油で煮る料理。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身と魚の居酒屋 (2024〜2026年の口コミ)。',
    notes: '[魚の居酒屋・河原町三条、刺身] 名前のとおりの奥まった静かな居酒屋。8種の刺身を2切れずつの盛り合わせ、その日の魚のかしらを焼きや煮付けで好みに、きんめだい、ぐじ、あん肝を日本酒とともに。2026年5月の客は「日本語でコミュニケーションできる方のみ」の張り紙を見た。煮魚は骨が多い、日本酒が少ないという声も。月曜休み。',
  });
}

// ================================================================ babele
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006719/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '26:00']); const WE = day(['15:00', '24:00']);
  put({
    id: 'kyoto_babele_gion', name: 'babele', category: 'OMNI',
    lat: 35.00573186520451, lng: 135.77262542579888, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Daily obanzai and ethnic small plates — yum woon sen, simmered and fried vegetables — but also pasta, yakisoba and fries; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Several vegetable obanzai (eggplant in broth, red konnyaku, Jerusalem artichoke salad), but dashi, egg and fish are common; no ingredient information (2024–2026 reviews).',
    hours_raw: 'Wednesday–Friday 18:00–2:00; Saturday, Sunday and holidays 15:00–24:00; closed Monday and Tuesday, and Sunday and Monday in the last week of the month; hours may change (Tabelog). Reservations accepted (Tabelog). Cards accepted (Tabelog). A large shared table; private hire for up to 20; non-smoking (Tabelog; October 2026). Tabelog notes the menu has moved from Italian to obanzai and ethnic dishes. 1F of the Gion Nawate White building, down a narrow alley north of Shijo off Yamato-oji; 5 min walk from Gion-Shijo Stn (Tabelog; September 2025).',
    hours: { 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, off Nawate north of Shijo — 5 min walk from Gion-Shijo Stn',
    cuisine: 'Homely small bar of daily obanzai and ethnic dishes, cooked by hand by the woman who runs it, plus wine and sake (2024–2026 reviews) · e.g. a pouch of grated yam and egg white with yolk, simmered red konnyaku, fried eggplant in broth, yum woon sen with adjustable heat, squid shiokara with cabbage and butter (July–November 2024) · potato salad with pepper, pasta of the day such as mackerel, yakisoba, Jerusalem artichoke salad, fries (2025–2026 reviews) · about ¥3,000–6,000 (Tabelog; 2024–2026 reviews)',
    website: null, gmaps: gm('babele 祇園 縄手'), menu_url: null,
    notes: '[Obanzai bar · Gion, off Nawate] A warm little bar at the end of a narrow alley near Shinbashi, where the owner cooks a changing spread of gently seasoned obanzai and ethnic plates — eggplant in broth, yam pouches, yum woon sen, squid shiokara with butter cabbage — plus pasta and yakisoba, with wine or sake at a big shared table. Closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner-cook (unnamed)'], origin: null,
      background: 'Per Tabelog: a wine bar first listed as Italian that has moved to obanzai and ethnic dishes. Reviewers in 2024–2026 describe hand-made dishes by the woman who runs it, subtle seasoning, warm conversation and a homely feel.',
      philosophy: null, specialty: 'Daily obanzai.',
      anecdotes: [
        { text: 'A July 2024 diner was struck by obanzai seasoned far more gently than at tourist-facing places, and by yum woon sen with adjustable heat.', source: R + 'B489404588/' },
        { text: 'A November 2024 fan tried to recreate the squid shiokara with cabbage and butter at home and could not match it.', source: R + 'B500430530/' },
        { text: 'An October 2026 regular orders the Jerusalem artichoke salad whenever it appears.', source: R + 'B536101406/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・ワインバー、東山区大和大路通四条上ル三丁目弁財天町13 祇園縄手ホワイトビル 1F、京阪祇園四条駅から徒歩5分、水〜金 18:00〜翌2:00、土日祝 15:00〜24:00、月・火曜休み (月末の週は日・月曜休み)、営業時間は変わることあり、予約可、カード可、禁煙、20名まで貸切可、業態が変わり今はイタリアンよりおばんざいとエスニック料理。口コミ (2020年7月〜2026年10月、英語): 細い路地の奥、店主の女性の手作り、日替わりのおばんざい、山芋と卵白の袋煮に卵黄、赤こんにゃくの煮物、なすの揚げびたし、辛さを選べるヤムウンセン、いかの塩辛とキャベツのバター炒め、胡椒のポテトサラダ、鯖などの日替わりパスタ、焼きそば、菊芋のサラダ、フライドポテト、大きなテーブル、日本酒、ワイン。',
      confidence: 'medium', sources: [TB, R + 'B428527949/', R + 'B436776078/', R + 'B489404588/', R + 'B500430530/', R + 'B514001355/', R + 'B515034622/', R + 'B516425618/', R + 'B524787999/', R + 'B535767773/', R + 'B536101406/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small, chatty bar with a shared table; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通四条上ル三丁目弁財天町13 祇園縄手ホワイトビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005732, 135.772625); cross-checked: GSI 京都府京都市東山区弁財天町13番地 (lot) 21 m; nearest Kyoto record 9.2 m away; checked against main 770f5582; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B489404588/', R + 'B500430530/'],
    price_note: 'Dish names from 2024–2026 reviews; no prices given.', last_checked: TODAY, items: [
      it('', '', 'Daily obanzai', '', 'Obanzai', 'ask', 'ask', '2024–2026 reviews.', 'obanzai'),
      it('', '', 'Squid shiokara with cabbage and butter', '', 'Small plates', 'ask', 'no', 'November 2024.', 'shiokara_cabbage'),
    ] }, {
    cuisine: '店主の女性が手作りする日替わりのおばんざいとエスニック料理に、ワインや日本酒の家庭的な小さなバー (2024〜2026年の口コミ)・例: 山芋と卵白の袋煮に卵黄、赤こんにゃくの煮物、なすの揚げびたし、辛さを選べるヤムウンセン、いかの塩辛とキャベツのバター炒め (2024年7〜11月)・胡椒のポテトサラダ、鯖などの日替わりパスタ、焼きそば、菊芋のサラダ、フライドポテト (2025〜2026年の口コミ)・3,000〜6,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '祇園、四条の北の縄手。祇園四条駅から徒歩5分',
    gf_detail: '要確認。日替わりのおばんざいやヤムウンセン、野菜の煮物や揚げびたしのほか、パスタ、焼きそば、フライドポテト。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。なすの揚げびたし、赤こんにゃく、菊芋のサラダなど野菜のおばんざいもあるが、だし、卵、魚が多い。材料の情報はない (2024〜2026年の口コミ)。',
    notes: '[おばんざいのバー・祇園の縄手] 新橋近くの細い路地の奥の温かい小さなバー。店主が日替わりで作るやさしい味のおばんざいとエスニックの皿 (なすの揚げびたし、山芋の袋煮、ヤムウンセン、いかの塩辛のバターキャベツ) にパスタや焼きそばも、大きなテーブルでワインや日本酒とともに。月・火曜休み。',
  });
}

// ================================================================ 201 GION Wagyu Steak & Wine Bar
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26032801/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '25:00']);
  put({
    id: 'kyoto_201_gion_wagyu_wine_bar', name: '201 GION Wagyu Steak & Wine Bar', category: 'OMNI',
    lat: 35.004924017873854, lng: 135.77323949035224, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: pasta, pizza and carbonara alongside steak (2022–2024 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu steak, roast beef sushi, prosciutto and cheese (2022–2026 reviews).',
    hours_raw: 'Tuesday–Saturday 18:00–1:00; closed Sunday and Monday (Tabelog). Reservations accepted (Tabelog). Charge ¥500 (Tabelog original チャージ料500円頂戴しております。). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). 14 seats at the counter and tables, plus a private room for up to 4; smoking allowed at all seats (Tabelog). 2F of the Lancelot building in Gion Yasaka-shinchi, up a narrow entrance; 3 min walk from Gion-Shijo Stn (Tabelog; December 2021). Opened 11 July 2019 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Yasaka-shinchi south of Shijo — 3 min walk from Gion-Shijo Stn',
    cuisine: 'Hidden late-night dining bar of wagyu steak and Italian dishes with wines, Champagne and whisky chosen by the owner-sommelier (Tabelog; 2021–2026 reviews) · steak of the day; roast beef temari sushi; carbonara and other pasta; pizza; Spanish prosciutto with persimmon and balsamic; cheese platter; desserts (2022–2026 reviews) · courses, e.g. about ¥5,000 (October 2022); sparkling wine by the half bottle, e.g. ¥6,000 (October 2022) · about ¥6,000–15,000 (Tabelog; 2024–2026 reviews)',
    website: null, gmaps: gm('201 GION Wagyu Steak & Wine Bar'), menu_url: null,
    notes: '[Wine bar · Gion Yasaka-shinchi, till 1 a.m.] A hidden second-floor bar in Gion where a sommelier owner pours wine, Champagne and whisky alongside proper food: steak of the day, roast beef temari sushi, carbonara and Spanish ham with persimmon — for a full course or a late second stop, with a private room for birthdays. ¥500 charge; smoking allowed. Closed Sunday and Monday.',
    chef_bio: { chef_name: null, roles: ['Owner-sommelier (unnamed)', 'Kitchen staff'], origin: null,
      background: 'Per Tabelog: a dining and wine bar opened 11 July 2019 in Gion, with wines, Champagne and whisky chosen by the owner-sommelier. A December 2021 reviewer knew it as Dining bar MO-JI; a November 2024 reviewer refers to the owner as the mama.',
      philosophy: 'Proper food until late, with the owner\'s chosen wines (Tabelog).', specialty: 'Steak of the day; roast beef temari sushi.',
      anecdotes: [
        { text: 'An October 2022 birthday pair took a private room on a course of about ¥5,000, added pasta and cheese, and found sparkling wine only by the half bottle — about ¥24,000 for two with a surprise plate.', source: R + 'B456228790/' },
        { text: 'An August 2026 regular who usually comes just to drink had the steak of the day — lean, high-quality red meat.', source: R + 'B533390497/' },
        { text: 'A December 2021 guest, taken there by a friend, had walked past the narrow entrance many times without noticing it.', source: R + 'B444189704/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー・ワインバー・イタリアン、東山区八坂新地末吉町99-3 ランスロットビル 2F、祇園四条駅から徒歩3分、火〜土 18:00〜翌1:00、日・月曜休み、予約可、チャージ料500円、カード (VISA・Master・JCB・AMEX) 可、電子マネー・QR 不可、14席、4名までの個室、全席喫煙可、2019年7月11日開店、ソムリエの店主が選ぶワイン・シャンパン・ウイスキー。口コミ (2021年12月〜2026年9月、英語): 以前は Dining bar MO-JI との声、入口が狭く見落としやすい、本日のステーキ、ローストビーフの手毬寿司、カルボナーラなどのパスタ、ピザ、スペインの生ハムと柿のバルサミコ、チーズの盛り合わせ、5,000円ほどのコース、スパークリングはハーフボトルのみ6,000円ほど (2022年10月)、誕生日のプレート。',
      confidence: 'medium', sources: [TB, R + 'B444189704/', R + 'B456228790/', R + 'B457425024/', R + 'B467573109/', R + 'B479212806/', R + 'B492796871/', R + 'B493044308/', R + 'B495382592/', R + 'B533390497/', R + 'B535342018/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hidden upstairs bar; ¥500 charge; smoking allowed; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂新地末吉町99-3 ランスロットビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004924, 135.773239); cross-checked: GSI 京都府京都市東山区末吉町99番地 (lot) 18 m; nearest Kyoto record 31.2 m away; checked against main 770f5582; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B456228790/', TB],
    price_note: 'Prices from an October 2022 review and Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Course', '¥5,000', 'Courses', 'no', 'no', 'About ¥5,000; October 2022.', 'course'),
      it('', '', 'Charge (per person)', '¥500', 'Charge', 'gf', 'vegan', 'Tabelog.', 'charge'),
    ] }, {
    cuisine: 'ソムリエの店主が選ぶワイン、シャンパン、ウイスキーと、和牛ステーキやイタリアンの料理を出す深夜までの隠れ家のダイニングバー (食べログ、2021〜2026年の口コミ)・本日のステーキ、ローストビーフの手毬寿司、カルボナーラなどのパスタ、ピザ、スペインの生ハムと柿のバルサミコ、チーズの盛り合わせ、デザート (2022〜2026年の口コミ)・コース、例: 5,000円ほど (2022年10月)、スパークリングはハーフボトル、例: 6,000円 (2022年10月)・6,000〜15,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '祇園、四条の南の八坂新地。祇園四条駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。ステーキのほか、パスタ、ピザ、カルボナーラ (2022〜2024年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛ステーキ、ローストビーフの寿司、生ハム、チーズ (2022〜2026年の口コミ)。',
    notes: '[ワインバー・祇園の八坂新地、深夜1時まで] 祇園の2階に隠れたバー。ソムリエの店主がワイン、シャンパン、ウイスキーを注ぎ、本日のステーキ、ローストビーフの手毬寿司、カルボナーラ、柿と生ハムなど本格的な料理も。コースでも2軒目でも。誕生日向けの個室あり。チャージ500円、喫煙可。日・月曜休み。',
  });
}

save();
