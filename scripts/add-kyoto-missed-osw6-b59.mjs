// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 59.
//   + 京町 Kyo Machi (old Pontocho townhouse restaurant with Kamo-river rooms, courses and sukiyaki) — rest
//   + 三汁五菜 天心 Sanju Gosai Tenshin (Pontocho obanzai and hot-pot izakaya, open from 16:00) — rest
//   + トリサカナ 京都河原町店 Tori Sakana (all-you-can-eat yakitori, sushi and hot pot, Kawaramachi DECK 5F) — rest
//   + 鉄板 フタゴヤ 富小路 Teppan Futagoya Tominokoji (teppan izakaya with build-your-own dashimaki, Shijo Tominokoji) — rest
//   - skip 26043730 東京もんじゃ 鉄板焼酒場どてっぱん 京都木屋町店 (chain)
//   - skip 26000566 にしんそば 松葉 北店 (same-concept branch of a brand in data)
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand: 松葉 was already ruled a brand
//   in data (26017254, 2026-11-05); no earlier rulings for 京町, 天心, どてっぱん, トリサカナ, フタゴヤ, WILL or かに銀.
//   Same-name counts first (2026-11-07): 京町 — one in Kyoto. 天心 (三汁五菜) — one. トリサカナ — four (Nagoya Kanayama, Umeda,
//   Kobe Sannomiya, Kyoto), under five; run by 株式会社WILL (will-food.com), which also runs かに銀 — kyoto_kanigin_kawaramachi is
//   already in data on the same floor; no large-company evidence found. フタゴヤ — this teppan shop and a Pontocho sister
//   (農家野菜 フタゴヤ); the "Osaka Yakiniku Futagoya" listings are a different concept. None of the four is in data/kyoto.json.
//   Service charges per Tabelog: none listed for any of the four (フタゴヤ charged a ¥350 appetizer in April 2026). No halal claims;
//   no owner deaths; no single-review remarks about other diners kept.
//   Pins (re-checked against current main): 天心 was 4.5 m from kyoto_ishimaru_shoten_kiyamachi; トリサカナ 0 m from
//   kyoto_daruma_kawaramachi (same building, 8F) and 7 m from kyoto_kanigin_kawaramachi; フタゴヤ 3.3 m from kyoto_sumika_tomikoji
//   (same building, 2F). Each offset 7 m and stated in pin_source.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-59');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043730', 'chain: Dotepan — Tabelog lists Dotepan / Tsukishima Monja Dotepan shops at Tsukishima (main), Hiyoshi, Noborito, Mukogaoka-yuen, Ishiyama, Kariya and Sapporo Susukino besides Kyoto Kiyamachi (https://tabelog.com/en/rstLst/?sw=%E3%81%A9%E3%81%A6%E3%81%A3%E3%81%B1%E3%82%93).');
skip('26000566', 'same-concept branch of a brand already in data: にしんそば 松葉 — data has 総本家にしんそば 松葉 本店 (kyoto_matsuba_honten); 松葉 京都駅店 was skipped on the same ruling (26017254) (https://tabelog.com/en/rstLst/?sw=%E3%81%AB%E3%81%97%E3%82%93%E3%81%9D%E3%81%B0%20%E6%9D%BE%E8%91%89).');

// ================================================================ 京町
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006470/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://www.kyomachi-mw.com/';
  const H = day(['17:30', '22:30']);
  put({
    id: 'kyoto_kyomachi_pontocho', name: '京町 (Kyo Machi)', category: 'OMNI',
    lat: 35.005871, lng: 135.771142, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto courses with sashimi, grilled ayu, eel dishes and sukiyaki (2022–25 reviews); the restaurant asks about food preferences (December 2023). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based Kyoto courses with eel, ayu and beef sukiyaki (2023–25 reviews).',
    hours_raw: 'Mon–Sat 17:30–22:30 (last order 22:00); closed Sunday (some Sundays) (Tabelog). Reservations accepted; walk-ins have been seated if ordering a course (Tabelog; June 2011). Cards (VISA, JCB, AMEX, Diners); no e-money (Tabelog). Private tatami rooms for 2–6, some looking over the Kamo river (Tabelog; March 2024). Designated smoking area (Tabelog). An old townhouse on Pontocho north of Shijo (Tabelog; 2010–25 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho, north of Shijo — on the Kamo river',
    cuisine: 'Kyoto courses and sukiyaki in an old Pontocho townhouse (2010–25 reviews) · an eel-themed course: Arima-yaki, sashimi, clear soup with eel and radish cake, grilled ayu, ginger rice, vinegared eel and cucumber (June 2025) · course with sukiyaki (October 2025; December 2023) · steamed turnip, about ¥4,000 per person (December 2022)',
    website: OF, gmaps: gm('京町 先斗町'), menu_url: OF,
    notes: '[Kyoto cuisine · Pontocho, an old townhouse on the river] A long-standing Pontocho townhouse with private tatami rooms, some looking over the Kamo river, serving delicate Kyoto courses — eel-themed in summer, with grilled ayu and ginger rice — and sukiyaki, at fair prices for Pontocho. A guest of 40 years (2014 review) recalls koto music playing throughout. Closed Sunday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a Japanese restaurant in a townhouse on Pontocho. An August 2014 review comes from a guest of 40 years; a December 2022 review describes an attentive owner, decorative roofs, punched walls and an antique telephone.',
      philosophy: null, specialty: 'Kyoto courses; sukiyaki.',
      anecdotes: [
        { text: 'An August 2014 guest of 40 years remembered the koto playing throughout the house.', source: R + 'B117132380/' },
        { text: 'A June 2025 diner had an eel-themed course by the river, from Arima-yaki to vinegared eel and cucumber.', source: R + 'B509178042/' },
        { text: 'A December 2022 visitor came for the steamed turnip on the menu and praised the ring of sake poured from the tokkuri.', source: R + 'B457380426/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区先斗町通四条上ル梅之木町156、月〜土17:30〜22:30 (L.O. 22:00)、日曜休み (一部)、予約可、カード可、個室 (2〜6名)、座敷、分煙、鴨川の眺め、町家。口コミ (2010年2月〜2025年10月、英語): 40年来の客、琴の音、鰻づくしのコース (Arima-yaki、刺身、鰻と大根餅の吸い物、鮎の焼き物、生姜ご飯、鰻ときゅうりの酢の物)、すき焼きのコース、蒸したかぶ、1人約4,000円、川の見える個室、好みを聞いてくれる。',
      confidence: 'medium', sources: [TB, OF, R + 'B117078344/', R + 'B117132380/', R + 'B276167443/', R + 'B385534895/', R + 'B457380426/', R + 'B469240490/', R + 'B477392018/', R + 'B484184187/', R + 'B509178042/', R + 'B515805388/', R + 'B9417346/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course and ask for a river-view room; tell the staff about food preferences. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通四条上ル梅之木町156',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2025.' },
    pin_source: `Tabelog ${TB} (35.005871, 135.771142); cross-checked: GSI 京都府京都市中京区梅之木町156番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B509178042/', R + 'B457380426/'],
    price_note: 'One price from December 2022; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Eel-themed course (summer)', '', 'Courses', 'ask', 'no', 'June 2025.', 'unagi_course'),
      it('', '', 'Course with sukiyaki', '', 'Courses', 'ask', 'no', 'October 2025.', 'sukiyaki_course'),
      it('', '', 'Steamed turnip', '', 'À la carte', 'ask', 'no', 'December 2022.', 'kabura_mushi'),
    ] }, {
    cuisine: '先斗町の古い町家で京料理のコースとすき焼き (2010〜2025年の口コミ)・鰻づくしのコース: Arima-yaki、刺身、鰻と大根餅の吸い物、鮎の焼き物、生姜ご飯、鰻ときゅうりの酢の物 (2025年6月)・すき焼きのコース (2025年10月、2023年12月)・蒸したかぶ、1人約4,000円 (2022年12月)',
    neighborhood: '先斗町、四条の北。鴨川沿い',
    gf_detail: '要確認。刺身、鮎の焼き物、鰻、すき焼きの京料理のコース (2022〜2025年の口コミ)。好みは聞いてくれる (2023年12月)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鰻、鮎、牛のすき焼きの出汁の京料理のコース (2023〜2025年の口コミ)。',
    notes: '[京料理・先斗町、鴨川沿いの古い町家] 鴨川を望む部屋もある座敷の個室を持つ、先斗町の古くからの町家の店。夏の鰻づくし、鮎の焼き物、生姜ご飯など繊細な京料理のコースとすき焼きを、先斗町では手頃な値段で。40年来の客 (2014年の口コミ) は館内に流れる琴の音を覚えている。日曜休み。',
  });
}

// ================================================================ 三汁五菜 天心
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26017750/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'kyoto_sanju_gosai_tenshin', name: '三汁五菜 天心 (Sanju Gosai Tenshin)', category: 'OMNI',
    lat: 35.005989, lng: 135.770971, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai, yuba and hot pots of duck, beef, hamo or anko (2022–25 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based obanzai with fish, beef tendon, duck and beef hot pots (2022–25 reviews).',
    hours_raw: 'Daily 16:00–23:00 (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). 35 seats incl. a counter; private hire for 20–50 (Tabelog). Designated smoking area (Tabelog). Service can be slow when busy (November 2022; November 2023). On Pontocho north of Shijo, 3 min from Kyoto-Kawaramachi (Tabelog). Opened 8 April 2011 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, north of Shijo — Kyoto-Kawaramachi',
    cuisine: 'Healthy obanzai and hot pots mixing Japanese, Western, Chinese and Korean ideas with fresh vegetables, fish and meat (Tabelog) · three obanzai with a choice of hot pot — duck, beef or hamo — with rice and pickles, about ¥1,780–1,800 at midday (September 2022; May 2023) · yuba; braised beef tendon (October 2025) · anko hot pot with three obanzai and sake (December 2025) · sukiyaki and shabu-shabu (June and November 2023) · sake such as Marutake Ebisu, Joyo and Tamano Hikari (December 2025)',
    website: null, gmaps: gm('三汁五菜 天心 先斗町'), menu_url: TB,
    notes: '[Obanzai and hot pots · Pontocho, open from 4 pm] A relaxed Pontocho izakaya serving trios of obanzai with a one-person hot pot — duck, beef, hamo or anko — plus yuba, braised beef tendon and Kyoto sake, from mid-afternoon. Casual by Pontocho standards; service can be slow at busy times.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a Japanese restaurant opened in April 2011 serving healthy dishes of fresh vegetables, chosen seafood and meat, blending Japanese, Western, Chinese and Korean styles.',
      philosophy: 'Healthy, nutritious dishes from fresh vegetables, fish and meat (Tabelog).', specialty: 'Obanzai with one-person hot pots.',
      anecdotes: [
        { text: 'A September 2022 visitor who missed out on riverside dining found a set of three obanzai with hamo and duck hot pots for ¥1,780.', source: R + 'B479331202/' },
        { text: 'A December 2025 diner was invited in from the street and had a anko hot pot with three sakes.', source: R + 'B520005693/' },
        { text: 'A November 2023 group waited over 15 minutes for menus and never received the shabu-shabu ladle.', source: R + 'B475274742/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区先斗町四条上ル下樵木町200-3、阪急河原町駅から徒歩3分、毎日16:00〜23:00、予約可、カード可、35席、カウンター、貸切20〜50名、分煙、2011年4月8日オープン、新鮮な野菜と魚介と肉の和洋中韓の健康的な料理。口コミ (2022年4月〜2025年12月、英語): おばんざい3品と選べる鍋 (鴨、牛、鱧) にご飯と香の物で約1,780〜1,800円、湯葉、牛すじの煮込み、anko の鍋、すき焼き、しゃぶしゃぶ、日本酒、混むと提供が遅い。',
      confidence: 'medium', sources: [TB, R + 'B448191291/', R + 'B456479126/', R + 'B464969974/', R + 'B466643143/', R + 'B469896712/', R + 'B473330130/', R + 'B475274742/', R + 'B479331202/', R + 'B492381893/', R + 'B493610298/', R + 'B515455235/', R + 'B520005693/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order an obanzai trio with a hot pot; open from mid-afternoon. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町四条上ル下樵木町200-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.005949, 135.771031), offset 7 m north-west to clear kyoto_ishimaru_shoten_kiyamachi (4.5 m) and kyoto_nikudokoro_danro_pontocho (5.5 m); cross-checked: GSI 京都府京都市中京区下樵木町200番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B479331202/', R + 'B464969974/'],
    price_note: 'Set prices from 2022–23 reviews; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Three obanzai with a one-person hot pot, rice and pickles', '¥1,780–1,800', 'Sets', 'ask', 'no', 'September 2022; May 2023.', 'nabe_set'),
      it('', '', 'Anko hot pot', '', 'Hot pots', 'ask', 'no', 'December 2025.', 'anko_nabe'),
      it('', '', 'Braised beef tendon', '', 'À la carte', 'ask', 'no', 'October 2025.', 'gyusuji'),
    ] }, {
    cuisine: '新鮮な野菜、魚、肉で和洋中韓を取り入れた健康的なおばんざいと鍋 (食べログ)・おばんざい3品と選べる鍋 (鴨、牛、鱧) にご飯と香の物で約1,780〜1,800円 (2022年9月、2023年5月)・湯葉、牛すじの煮込み (2025年10月)・おばんざい3品とanko の鍋、日本酒 (2025年12月)・すき焼きとしゃぶしゃぶ (2023年6月・11月)・Marutake Ebisu、Joyo、Tamano Hikari などの日本酒 (2025年12月)',
    neighborhood: '先斗町、四条の北。京都河原町駅',
    gf_detail: '要確認。おばんざい、湯葉、鴨、牛、鱧、anko の鍋 (2022〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚、牛すじの出汁のおばんざい、鴨や牛の鍋 (2022〜2025年の口コミ)。',
    notes: '[おばんざいと鍋・先斗町、16時から] おばんざい3品と一人鍋 (鴨、牛、鱧、anko) に、湯葉、牛すじの煮込み、京の地酒を昼過ぎから楽しめる先斗町の気軽な居酒屋。先斗町では気取らない店。混む時は提供が遅いことも。',
  });
}

// ================================================================ トリサカナ 京都河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041504/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://will-food.com/';
  const WD = day(['17:00', '23:00']); const WE = day(['12:00', '23:00']);
  put({
    id: 'kyoto_tori_sakana_kawaramachi', name: 'トリサカナ 京都河原町店 (Tori Sakana)', category: 'OMNI',
    lat: 35.006503, lng: 135.769422, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: an all-you-can-eat izakaya with fried dishes, yakitori in tare, sushi and hot pots (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: yakitori, sushi, seafood and offal hot pots (2024–26 reviews).',
    hours_raw: 'Mon–Fri and the day before a holiday 17:00–23:00; Sat, Sun and holidays 12:00–23:00 (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money (Tabelog). 155 seats, with semi-private rooms; shares the floor with the crab-buffet restaurant Kani Gin (Tabelog; October 2025; February and April 2026). Order by QR code, with the remaining time shown (February 2026). Non-smoking (Tabelog). No sign at street level — take the lift to 5F of Kawaramachi DECK by COAST, 3 min from Kyoto-Kawaramachi (Tabelog; August 2026). Opened 1 August 2024 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi, north of Takoyakushi — Kyoto-Kawaramachi',
    cuisine: 'All-you-can-eat-and-drink yakitori, sushi, seafood and hot pots from about ¥3,000 (2024–26 reviews) · most popular course ¥3,500 (December 2024; April 2026); beer and highball add-on +¥500 (August 2026) · yakitori by the skewer and sushi by the piece (February 2026) · hot pots: chanko, motsu and chige; a chicken hot pot (February and April 2026)',
    website: OF, gmaps: gm('トリサカナ 京都河原町'), menu_url: TB,
    notes: '[All-you-can-eat izakaya · Kawaramachi, yakitori, sushi and hot pots] A 155-seat izakaya on the fifth floor of a Kawaramachi building, sharing the floor with the crab buffet Kani Gin: all-you-can-eat-and-drink courses from about ¥3,000 with yakitori by the skewer, sushi by the piece and chanko, motsu or chicken hot pots, ordered by QR code. Mixed reviews on how freshly the food is made.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an all-you-can-eat izakaya opened in August 2024, with sister shops in Nagoya Kanayama, Umeda and Kobe Sannomiya; the official site belongs to 株式会社WILL, which also runs Kani Gin (on the same floor and already listed).',
      philosophy: null, specialty: 'All-you-can-eat yakitori, sushi and hot pots.',
      anecdotes: [
        { text: 'A February 2026 visitor liked that the QR menu shows the time left on the all-you-can-eat plan.', source: R + 'B523285360/' },
        { text: 'A March 2025 diner found the dishes reheated and the salt yakitori cold.', source: R + 'B502808091/' },
        { text: 'An April 2026 visitor recommends the chicken hot pot on the ¥3,500 course.', source: R + 'B526240899/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・焼鳥、中京区奈良屋町291 河原町 DECK by COAST 5F、京都河原町駅から徒歩3分、月〜金・祝前日17:00〜23:00、土日祝12:00〜23:00、予約可、カード可、電子マネー不可、155席、禁煙、2024年8月1日オープン、食べ放題。公式サイト: 株式会社WILL。口コミ (2024年12月〜2026年8月、英語): かに銀と同じフロア、食べ飲み放題は約3,000円から、人気のコースは3,500円、ビールとハイボールは+500円、焼鳥は1本、寿司は1貫から、ちゃんこ、もつ、チゲ、鶏の鍋、QR で注文、料理が冷めていたとの声も。',
      confidence: 'medium', sources: [TB, OF, R + 'B497752157/', R + 'B502808091/', R + 'B503525938/', R + 'B508255797/', R + 'B515999037/', R + 'B516212425/', R + 'B517640311/', R + 'B523285360/', R + 'B523502304/', R + 'B523935426/', R + 'B526240899/', R + 'B533543957/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code; take the lift to 5F (no street sign). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区奈良屋町291 河原町DECK by COAST 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.006543, 135.769482), offset 7 m south-west: the building also holds kyoto_daruma_kawaramachi (0 m) and kyoto_kanigin_kawaramachi (7 m); cross-checked: GSI 京都府京都市中京区奈良屋町291番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526240899/', R + 'B533543957/'],
    price_note: 'Course prices from December 2024 – August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat-and-drink course (most popular)', '¥3,500', 'Courses', 'no', 'no', 'December 2024; April 2026.', 'tabenomi'),
      it('', '', 'Beer and highball add-on', '+¥500', 'Drinks', '', '', 'August 2026.', 'beer_addon'),
      it('', '', 'Chicken hot pot', '', 'Hot pots', 'ask', 'no', 'April 2026.', 'tori_nabe'),
    ] }, {
    cuisine: '約3,000円からの焼鳥、寿司、魚介、鍋の食べ飲み放題 (2024〜2026年の口コミ)・人気のコースは3,500円 (2024年12月、2026年4月)、ビールとハイボールは+500円 (2026年8月)・焼鳥は1本、寿司は1貫から (2026年2月)・ちゃんこ、もつ、チゲの鍋、鶏の鍋 (2026年2月・4月)',
    neighborhood: '河原町、蛸薬師の北。京都河原町駅',
    gf_detail: 'グルテンフリーではない。揚げ物、たれの焼鳥、寿司、鍋の食べ放題の居酒屋 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼鳥、寿司、魚介やもつの鍋 (2024〜2026年の口コミ)。',
    notes: '[食べ放題の居酒屋・河原町、焼鳥、寿司、鍋] 河原町のビル5階、カニの食べ放題のかに銀と同じフロアにある155席の居酒屋。約3,000円からの食べ飲み放題で、焼鳥は1本、寿司は1貫から、ちゃんこやもつや鶏の鍋も、QR で注文。料理の出来たて感には賛否。',
  });
}

// ================================================================ 鉄板 フタゴヤ 富小路
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037916/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '00:00']); const WE = day(['12:00', '23:00']);
  put({
    id: 'kyoto_teppan_futagoya_tominokoji', name: '鉄板 フタゴヤ 富小路 (Teppan Futagoya Tominokoji)', category: 'OMNI',
    lat: 35.004387, lng: 135.765002, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: gyoza, spring rolls, cutlets and fried dishes on a teppan izakaya menu (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef tongue, wagyu offal, shrimp mayo, dashimaki (2026 reviews).',
    hours_raw: 'Mon–Fri 17:00–0:00 (last order 23:00); Sat, Sun and holidays 12:00–23:00 (last order 22:00) (Tabelog). Reservations accepted; seat type cannot be guaranteed (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money (Tabelog). 34 seats incl. a counter and sofas (Tabelog). Heated tobacco only inside; ashtrays outside for cigarettes (Tabelog). Appetizer ¥350 (April 2026). Weekend happy hour 12:00–16:00 with drinks from ¥298 (February 2026); all-you-can-drink, also for solo diners (September 2026). Medina Shijo Tominokoji 1F, 1 min from Kyoto-Kawaramachi exit 12 (Tabelog). Opened 27 August 2022 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Tominokoji, just north of Shijo — Kyoto-Kawaramachi',
    cuisine: 'Seasonal teppan dishes and sake, with a signature teppan dashimaki filled to your choice (Tabelog) · thick-cut beef tongue with green onion and salt ¥1,100, wagyu offal ¥980, dashimaki ¥880, shrimp mayo ¥600, thick shiitake with bonito ponzu ¥520 (April 2026) · corn kara-age, cheese teppan gyoza (August 2026) · salmon cutlet, fried taro (May 2026) · shumai and fried spring rolls (September 2026) · a dice game, "chinchiro", for drinks (May and June 2026)',
    website: null, gmaps: gm('鉄板 フタゴヤ 富小路'), menu_url: TB,
    notes: '[Teppan izakaya · Shijo Tominokoji, dashimaki your way] A friendly 34-seat teppan izakaya a minute from Kawaramachi exit 12, known for a build-your-own teppan dashimaki, thick salted beef tongue and wagyu offal, with a weekend afternoon happy hour from ¥298, all-you-can-drink even for one, and a dice game for drinks. ¥350 appetizer.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a teppan izakaya, "an adult tavern of seasonal ingredients, teppan and sake", opened in August 2022; a sister shop, 農家野菜 フタゴヤ, is in Pontocho. A September 2026 regular reports a recent renovation and a new menu.',
      philosophy: 'Seasonal ingredients and dishes that go with drinks (Tabelog).', specialty: 'Teppan dashimaki.',
      anecdotes: [
        { text: 'A September 2026 regular on an eighth visit was offered free snacks while new dishes took time, after a renovation.', source: R + 'B493713756/' },
        { text: 'An August 2026 solo diner found a message written on the oshibori.', source: R + 'B493713756/' },
        { text: 'A September 2026 former regular found the menu halved and prices higher, and the kamameshi soggy.', source: R + 'B535478966/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理、中京区富小路通錦小路下る西大文字町615番地 メディナ四条富小路 1F、阪急河原町駅12番出口から徒歩1分、月〜金17:00〜24:00 (L.O. 23:00)、土日祝12:00〜23:00 (L.O. 22:00)、予約可、カード可、電子マネー不可、34席、加熱式たばこのみ可、2022年8月27日オープン、旬の食材と鉄板と酒の大人の酒場、具を選べる鉄板のだし巻き。口コミ (2026年1月〜9月、英語): 厚切りのねぎ塩牛タン1,100円、和牛ホルモン980円、だし巻き880円、エビマヨ600円、肉厚しいたけのかつおポン酢520円、お通し350円、とうもろこしの唐揚げ、チーズの鉄板餃子、鮭のカツ、里芋の揚げ物、焼売、春巻、土日の昼のハッピーアワー298円から、一人でも飲み放題、chinchiro、改装後メニューが減り値上がりとの声も。',
      confidence: 'medium', sources: [TB, R + 'B493713756/', R + 'B505928108/', R + 'B520478702/', R + 'B522383936/', R + 'B522886783/', R + 'B526695713/', R + 'B527706740/', R + 'B528177646/', R + 'B528232597/', R + 'B529938819/', R + 'B530214486/', R + 'B535478966/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Try the build-your-own dashimaki; heated tobacco only inside. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区富小路通錦小路下る西大文字町615番地 メディナ四条富小路 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004327, 135.765002), offset 7 m north: kyoto_sumika_tomikoji shares メディナ四条富小路 (3.3 m away); cross-checked: GSI 京都府京都市中京区西大文字町615番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526695713/'],
    price_note: 'Prices from April 2026; ¥350 appetizer.', last_checked: TODAY, items: [
      it('', '', 'Thick-cut beef tongue with green onion and salt', '¥1,100', 'Teppan', 'ask', 'no', 'April 2026.', 'negishio_tan'),
      it('', '', 'Wagyu offal', '¥980', 'Teppan', 'ask', 'no', 'April 2026.', 'wagyu_horumon'),
      it('', '', 'Teppan dashimaki (choose your fillings)', '¥880', 'Teppan', 'ask', 'no', 'April 2026.', 'dashimaki'),
      it('', '', 'Shrimp mayo', '¥600', 'À la carte', 'no', 'no', 'April 2026.', 'ebimayo'),
      it('', '', 'Appetizer', '¥350', 'Charge', '', '', 'April 2026.', 'otoshi'),
    ] }, {
    cuisine: '旬の鉄板料理と酒、看板は具を選べる鉄板のだし巻き (食べログ)・厚切りのねぎ塩牛タン1,100円、和牛ホルモン980円、だし巻き880円、エビマヨ600円、肉厚しいたけのかつおポン酢520円 (2026年4月)・とうもろこしの唐揚げ、チーズの鉄板餃子 (2026年8月)・鮭のカツ、里芋の揚げ物 (2026年5月)・焼売と春巻 (2026年9月)・お酒を賭けるサイコロのゲーム「chinchiro」 (2026年5月・6月)',
    neighborhood: '富小路、四条のすぐ北。京都河原町駅',
    gf_detail: 'グルテンフリーではない。餃子、春巻、カツ、揚げ物のある鉄板の居酒屋 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛タン、和牛ホルモン、エビマヨ、だし巻き (2026年の口コミ)。',
    notes: '[鉄板の居酒屋・四条富小路、好みのだし巻き] 河原町駅12番出口から1分の34席の気さくな鉄板の居酒屋。具を選べる鉄板のだし巻き、厚切りの塩牛タン、和牛ホルモン。土日の昼は298円からのハッピーアワー、一人でも飲み放題、お酒を賭けるサイコロのゲームも。お通し350円。',
  });
}

save();
