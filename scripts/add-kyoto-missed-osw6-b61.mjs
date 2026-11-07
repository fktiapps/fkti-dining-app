// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 61.
//   + 祇園 はりう Gion Hariu (counter kaiseki with a sake-loving owner, north of Shijo in Gion) — rest
//   + 洋食 かるみあ Yoshoku Karumia (Gion yoshoku by Minami-za: hamburg steak, Yoro pork in red wine) — rest
//   + 祇園ひゃくらく Gion Hyakuraku (Chinese izakaya with curry udon and horse dishes, open to 3 am) — rest
//   + 活貝センター 京都祇園本店 Katsukai Center (grill-your-own shellfish and fish market seafood, from 11:00) — rest
//   - skip 26013262 あぶさん (no 2025–26 review)
//   - skip 26045758 ラーメン荘 地球規模で考えろ サン (same-concept branch of a brand in data)
//   - skip 26042836 秀蛸 木屋町店 (same-concept branch of a brand in data)
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand (はりう, あぶさん, かるみあ,
//   ひゃくらく, 地球規模, 秀蛸, 活貝): no earlier rulings.
//   Same-name counts first (2026-11-07): はりう — one. かるみあ — one. ひゃくらく — one Gion Hyakuraku (other "Hyakuraku" are
//   unrelated Chinese restaurants elsewhere). 活貝センター — two (Kyoto Gion main shop and Fuji-Yoshiwara port). None of the four
//   is in data/kyoto.json. Service charges per Tabelog's Japanese original: 活貝センター 「サービス・チャージ料なし」; the
//   other three list none. No halal claims; no owner deaths; no single-review remarks about other diners kept.
//   Pins re-checked against current main: はりう sat 5.0 m from kyoto_panel_cafe_gion, offset 4.4 m south (now 9.2 m).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-61');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26013262', 'no 2025–26 review: Abusan, an okonomiyaki counter in the 花七軒 alley, has no Tabelog review later than September 2024 (https://tabelog.com/en/kyoto/A2601/A260301/26013262/).');
skip('26045758', 'same-concept branch of a brand already in data: ラーメン荘 地球規模で考えろ — data has the Fushimi main shop and ソラ (kyr_ramen_so_chikyu_kibo_de_, kyr_ramen_so_chikyu_kibo_de__2); Tabelog also lists 未来へ (https://tabelog.com/en/rstLst/?sw=%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E8%8D%98%20%E5%9C%B0%E7%90%83%E8%A6%8F%E6%A8%A1%E3%81%A7%E8%80%83%E3%81%88%E3%82%8D).');
skip('26042836', 'same-concept branch of a brand already in data: 秀蛸 — data has 秀蛸 (kyoto_hide_tako, Hanamikoji); this is its Kiyamachi branch (https://tabelog.com/en/rstLst/?sw=%E7%A7%80%E8%9B%B8).');

// ================================================================ 祇園 はりう
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036938/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_gion_hariu', name: '祇園 はりう (Gion Hariu)', category: 'OMNI',
    lat: 35.004999, lng: 135.772665, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal kaiseki courses of sashimi, sea urchin, crab and fugu (2023–26 reviews); the restaurant asks about dislikes and adjusts dishes (July 2024). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based kaiseki with fish, crab and fugu (2023–26 reviews).',
    hours_raw: 'Mon–Sat 18:00–23:00; closed Sunday; hours may change (Tabelog). Reservations accepted; mostly courses, with à la carte dishes on request (Tabelog; July 2024). Cards (AMEX only); no e-money or QR (Tabelog). A main counter and private tatami rooms (May 2025; April 2026). Non-smoking (Tabelog). Northeast of the Gion-Shijo crossing, in the KTM Building; the restaurant moved here in 2022 (Tabelog; June 2022; May 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, north of Shijo — Gion-Shijo',
    cuisine: 'Kyoto kaiseki courses with a deep list of sake chosen by the owner (2022–26 reviews) · sea urchin with mozuku vinegar, sea-bream sashimi, carp soup (May 2023) · course of white clam with ginger jelly and sashimi of aori squid, anago and isaki (May 2025) · Koppe crab, fugu skin and fugu (December 2024) · sake from across Japan paired course by course, and wine (April and October 2026)',
    website: null, gmaps: gm('祇園 はりう'), menu_url: TB,
    notes: '[Kaiseki and sake · Gion, a counter run by a sake lover] A calm Gion counter and private rooms where the owner pairs sake from across Japan, dish by dish, with seasonal Kyoto kaiseki — sea urchin with mozuku, aori squid and anago sashimi, Koppe crab and fugu in winter. Dislikes are asked about and swapped. AMEX only; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), a sake enthusiast who pours and explains (2024–26 reviews)'], origin: null,
      background: 'Per Tabelog: a Japanese restaurant in Gion. A June 2022 review notes the move to this site; reviews from 2024 to 2026 describe an owner devoted to sake who explains and pours each one.',
      philosophy: null, specialty: 'Kaiseki paired with sake.',
      anecdotes: [
        { text: 'A July 2025 diner noted that the owner chooses the sake personally rather than relying on a wholesaler.', source: R + 'B510814734/' },
        { text: 'A December 2024 guest remembered the Koppe crab and the fugu-skin starter, with each sake explained as it was poured.', source: R + 'B498431201/' },
        { text: 'An October 2026 diner, brought by a Kyoto connoisseur after the Jidai Matsuri, predicted it will soon be hard to book.', source: R + 'B537852949/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、東山区常盤町161 KTM ビル 1F、祇園四条駅から約180m、月〜土18:00〜23:00、日曜休み、予約可、カード (AMEX) 可、禁煙。口コミ (2022年6月〜2026年10月、英語): 移転、カウンターと座敷の個室、コースが中心で希望すれば一品も、苦手なものは変えてくれる、雲丹ともずく酢、鯛の刺身、鯉の汁、白い貝の生姜ジュレ、アオリイカ、穴子、イサキの刺身、Koppe、ふぐ皮、ふぐ、店主が全国の日本酒を料理に合わせて注ぐ、ワインも。',
      confidence: 'medium', sources: [TB, R + 'B450944352/', R + 'B451336005/', R + 'B460806793/', R + 'B479373413/', R + 'B494981664/', R + 'B498431201/', R + 'B499756656/', R + 'B507071006/', R + 'B510814734/', R + 'B525766830/', R + 'B526991621/', R + 'B537852949/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course; tell the owner your dislikes and ask for sake pairings; AMEX only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区常盤町161 KTMビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005039, 135.772665), offset 4.4 m south to clear kyoto_panel_cafe_gion (5.0 m); cross-checked: GSI 京都府京都市東山区常盤町161番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B507071006/'],
    price_note: 'No course prices in the sources; reviews cite ¥10,000–29,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Seasonal kaiseki course', '', 'Courses', 'ask', 'no', '2023–26 reviews.', 'kaiseki'),
      it('', '', 'Sake pairing (by the glass)', '', 'Sake', 'ask', 'ask', 'April 2026.', 'sake'),
    ] }, {
    cuisine: '店主が選ぶ豊富な日本酒と京懐石のコース (2022〜2026年の口コミ)・雲丹ともずく酢、鯛の刺身、鯉の汁 (2023年5月)・白い貝の生姜ジュレ、アオリイカ、穴子、イサキの刺身のコース (2025年5月)・Koppe、ふぐ皮とふぐ (2024年12月)・料理ごとに合わせる全国の日本酒、ワインも (2026年4月・10月)',
    neighborhood: '祇園、四条の北。祇園四条駅',
    gf_detail: '要確認。刺身、雲丹、蟹、ふぐの季節の懐石 (2023〜2026年の口コミ)。苦手なものは聞いて変えてくれる (2024年7月)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚、蟹、ふぐの出汁の懐石 (2023〜2026年の口コミ)。',
    notes: '[懐石と日本酒・祇園、酒好きの店主のカウンター] 祇園の落ち着いたカウンターと個室。店主が全国の日本酒を一品ごとに合わせ、雲丹ともずく、アオリイカや穴子の刺身、冬は Koppe やふぐの季節の京懐石と。苦手なものは聞いて変えてくれる。カードは AMEX のみ、日曜休み。',
  });
}

// ================================================================ 洋食 かるみあ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26020480/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://www.kalmia-kyoto.com/';
  const H = day(['11:30', '14:30'], ['18:00', '21:00']);
  put({
    id: 'kyoto_yoshoku_karumia', name: '洋食 かるみあ (Yoshoku Karumia)', category: 'OMNI',
    lat: 35.00338, lng: 135.773129, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yoshoku with demi-glace, potage and hashed-beef sauce; hamburg steak and braised pork (2025–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steak, braised pork, cabbage rolls with homemade bacon, omurice (Tabelog; 2025–26 reviews).',
    hours_raw: 'Mon and Wed–Sun: lunch 11:30–14:30, dinner 18:00–21:00 (reservations needed after 20:00); closed Tuesday, or the next weekday when Tuesday is a holiday (Tabelog). Reservations accepted (Tabelog; February 2026). Cards (JCB, AMEX); no e-money or QR (Tabelog). 23 seats: 18 at tables and a counter of 5 (Tabelog). Non-smoking (Tabelog). Some dishes to take away (Tabelog). On Yamato-oji south of Shijo, across from Toraya, near Minami-za (Tabelog; March 2026). Opened 7 May 2012 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yamato-oji, south of Shijo — near Minami-za',
    cuisine: 'Carefully made yoshoku (Tabelog) · Yoro pork braised in red wine, ¥2,000 at lunch with potage, salad and coffee (March 2026) · juicy hamburg steak lunch (December 2025; July and October 2026) · cabbage rolls with homemade bacon; omurice with butter rice and hashed-beef sauce (Tabelog) · à la carte for sharing at dinner (February 2026)',
    website: OF, gmaps: gm('洋食 かるみあ 祇園'), menu_url: OF,
    notes: '[Yoshoku · Gion, by Minami-za] A quietly elegant yoshoku restaurant on Yamato-oji near Minami-za, best known for Yoro pork braised in red wine and a juicy hamburg steak, with potage and coffee in a ¥2,000 lunch; cabbage rolls and hashed-beef omurice too. Closed Tuesday; book after 20:00.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a yoshoku restaurant opened in May 2012, serving dishes such as cabbage rolls with homemade bacon and omurice with butter rice and hashed-beef sauce, some to take away.',
      philosophy: null, specialty: 'Yoro pork braised in red wine; hamburg steak.',
      anecdotes: [
        { text: 'A March 2026 visitor returned with a sister before a show to share the Yoro pork recommended at the top of the menu.', source: R + 'B523941614/' },
        { text: 'A July 2026 diner during the Gion Matsuri talked kabuki with the staff over a hamburg steak lunch.', source: R + 'B519590151/' },
        { text: 'An April 2026 visitor returned after about ten years, remembering it as delicious.', source: R + 'B527377430/' },
      ],
      japanese_sources_summary: '食べログ: 洋食、東山区大和大路通四条下る大和町6、祇園四条駅から約110m、月・水〜日11:30〜14:30、18:00〜21:00 (20時以降は要予約)、火曜休み (祝日の場合は翌平日)、予約可、カード (JCB、AMEX) 可、23席 (テーブル18、カウンター5)、禁煙、テイクアウトも、2012年5月7日オープン、自家製ベーコンのロールキャベツ、バターライスとハッシュドビーフのオムライス。口コミ (2025年10月〜2026年10月、英語): Toraya の向かい、南座の近く、養老豚の赤ワイン煮のランチ2,000円 (ポタージュ、サラダ、コーヒー)、ハンバーグのランチ、夜は一品料理。',
      confidence: 'medium', sources: [TB, OF, R + 'B446176351/', R + 'B496988865/', R + 'B515393385/', R + 'B519590151/', R + 'B520068927/', R + 'B520577590/', R + 'B521529076/', R + 'B522453123/', R + 'B523207714/', R + 'B523941614/', R + 'B527250411/', R + 'B527377430/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book for lunch at weekends; reservations needed after 20:00. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通四条下る大和町6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003380, 135.773129); cross-checked: GSI 京都府京都市東山区大和町6番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527250411/'],
    price_note: 'One lunch price from March 2026.', last_checked: TODAY, items: [
      it('', '', 'Yoro pork braised in red wine (lunch, with potage, salad, coffee)', '¥2,000', 'Lunch', 'ask', 'no', 'March 2026.', 'yoro_pork'),
      it('', '', 'Hamburg steak lunch', '', 'Lunch', 'ask', 'no', 'December 2025; October 2026.', 'hamburg'),
      it('', '', 'Omurice with hashed-beef sauce', '', 'Dishes', 'ask', 'no', 'Tabelog.', 'omurice'),
    ] }, {
    cuisine: '丁寧な洋食 (食べログ)・Yoro の豚の赤ワイン煮、ポタージュ、サラダ、コーヒー付きのランチ2,000円 (2026年3月)・ジューシーなハンバーグのランチ (2025年12月、2026年7月・10月)・自家製ベーコンのロールキャベツ、バターライスとハッシュドビーフのオムライス (食べログ)・夜は分け合う一品料理 (2026年2月)',
    neighborhood: '大和大路、四条の南。南座の近く',
    gf_detail: '要確認。デミグラス、ポタージュ、ハッシュドビーフの洋食、ハンバーグ、豚の煮込み (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。ハンバーグ、豚の煮込み、自家製ベーコンのロールキャベツ、オムライス (食べログ、2025〜2026年の口コミ)。',
    notes: '[洋食・祇園、南座のそば] 南座近くの大和大路にある落ち着いた洋食店。看板は Yoro の豚の赤ワイン煮とジューシーなハンバーグで、ポタージュとコーヒー付きのランチは2,000円。ロールキャベツやハッシュドビーフのオムライスも。火曜休み、20時以降は予約を。',
  });
}

// ================================================================ 祇園ひゃくらく
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042800/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://www.gion-hyakuraku.com';
  const H = day(['18:00', '03:00']);
  put({
    id: 'kyoto_gion_hyakuraku', name: '祇園ひゃくらく (Gion Hyakuraku)', category: 'OMNI',
    lat: 35.004951, lng: 135.77275, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: curry udon, gyoza and fried chicken on a Chinese izakaya menu (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: horse sashimi, char siu, fried chicken, dashi udon (2025 reviews).',
    hours_raw: 'Mon–Sat 18:00–3:00 (last food order 2:30); holidays 18:00–23:00; closed Sunday (Tabelog). Reservations accepted; courses by the day before (Tabelog). Cards incl. UnionPay; e-money; QR incl. PayPay, Alipay and WeChat Pay (Tabelog). 30 seats (Tabelog). Smoking allowed (Tabelog). Tokiwa Building 1F, 1 min from Keihan Gion-Shijo exit 8, near Shirakawa (Tabelog; August 2025). Opened 13 March 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, north of Shijo near Shirakawa — Gion-Shijo',
    cuisine: 'Chinese dishes from a chef of 30 years, the owner\'s sakura nabe of horse meat, horse sashimi and Genghis Khan lamb (Tabelog) · the revived curry udon of the closed udon shop "Otayan": kitsune curry udon ¥1,000–1,150, seasonal vegetable curry udon ¥1,200, dashi udon ¥1,050 (March and December 2025) · grilled gyoza ¥500, beef japchae ¥800, makgeolli ¥600 (March 2025) · Aomori horse sashimi, char siu, shrimp chili, yurinchi, mapo tofu (August and October 2025) · Towada barayaki; monthly specials such as a Saikyo-miso cream stew (March and May 2025)',
    website: OF, gmaps: gm('祇園ひゃくらく'), menu_url: OF,
    notes: '[Chinese izakaya · Gion, curry udon to 3 am] A late-opening Gion izakaya reborn in 2025 from the old Chuka Bar Hyakuraku, mixing a veteran chef\'s Chinese dishes — gyoza, shrimp chili, mapo tofu — with horse sashimi, sakura nabe and the much-missed curry udon of a closed Gion udon shop. Open to 3:00, smoking allowed; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Chinese chef (unnamed), 30 years\' experience (Tabelog)', 'Owner (unnamed)'], origin: null,
      background: 'Per Tabelog: an izakaya opened in Gion on 13 March 2025 with Chinese dishes by a chef of 30 years and the owner\'s horse-meat dishes. A March 2025 review says it revives Chuka Bar Hyakuraku, closed about two years earlier, and the curry udon of "Otayan", a long-running udon shop that closed in December 2024.',
      philosophy: null, specialty: 'Chinese small plates; curry udon; horse dishes.',
      anecdotes: [
        { text: 'A March 2025 visitor on opening week was glad to taste the old udon shop\'s curry udon again, with grilled gyoza and makgeolli.', source: R + 'B503883493/' },
        { text: 'An October 2025 table had the chef\'s recommended run of horse sashimi, gyoza, char siu, shrimp chili, yurinchi and mapo tofu.', source: R + 'B515990167/' },
        { text: 'A December 2025 visitor dropped in after buying Oshima doughnuts for the seasonal vegetable curry udon.', source: R + 'B519767700/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、東山区常盤町161-2 トキワビル 1F、京阪祇園四条駅8番出口から徒歩1分、月〜土18:00〜翌3:00 (L.O. 料理2:30)、祝日18:00〜23:00、日曜休み、予約可 (コースは前日まで)、カード・電子マネー・QR 可、30席、喫煙可、2025年3月13日オープン、30年の料理人の中華と店主の桜鍋、馬刺し、ジンギスカン、月替わりの限定。口コミ (2025年3月〜12月、英語): Chuka Bar Hyakuraku の再開、閉店した Otayan のカレーうどんの味、きつねカレーうどん1,000〜1,150円、季節の野菜のカレーうどん1,200円、出汁のうどん1,050円、焼き餃子500円、牛肉のチャプチェ800円、マッコリ600円、青森の馬刺し、チャーシュー、エビチリ、yurinchi、麻婆豆腐、Towada のバラ焼き、西京味噌のクリームシチュー。',
      confidence: 'medium', sources: [TB, OF, R + 'B503883493/', R + 'B503901567/', R + 'B504191516/', R + 'B512750793/', R + 'B515990167/', R + 'B519767700/', R + 'B520475939/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Open very late; smoking allowed; book courses a day ahead. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区常盤町161-2 トキワビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.004951, 135.772750); cross-checked: GSI 京都府京都市東山区常盤町161番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B503883493/', R + 'B519767700/', R + 'B520475939/'],
    price_note: 'Prices from March and December 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kitsune curry udon', '¥1,000–1,150', 'Udon', 'no', 'no', 'March and December 2025.', 'curry_udon'),
      it('', '', 'Seasonal vegetable curry udon', '¥1,200', 'Udon', 'no', 'no', 'December 2025.', 'yasai_curry_udon'),
      it('', '', 'Grilled gyoza', '¥500', 'Chinese', 'no', 'no', 'March 2025.', 'gyoza'),
      it('', '', 'Beef japchae', '¥800', 'Chinese', 'ask', 'no', 'March 2025.', 'japchae'),
      it('', '', 'Horse sashimi', '', 'Horse', 'ask', 'no', 'August and October 2025.', 'basashi'),
    ] }, {
    cuisine: '30年の料理人の中華と、店主の馬肉の桜鍋、馬刺し、ジンギスカン (食べログ)・閉店したうどん店 Otayan のカレーうどんの復活: きつねカレーうどん1,000〜1,150円、季節の野菜のカレーうどん1,200円、出汁のうどん1,050円 (2025年3月・12月)・焼き餃子500円、牛肉のチャプチェ800円、マッコリ600円 (2025年3月)・青森の馬刺し、チャーシュー、エビチリ、yurinchi、麻婆豆腐 (2025年8月・10月)・Towada のバラ焼き、西京味噌のクリームシチューなどの月替わり (2025年3月・5月)',
    neighborhood: '祇園、四条の北、白川の近く。祇園四条駅',
    gf_detail: 'グルテンフリーではない。カレーうどん、餃子、唐揚げのある中華の居酒屋 (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。馬刺し、チャーシュー、唐揚げ、出汁のうどん (2025年の口コミ)。',
    notes: '[中華の居酒屋・祇園、深夜3時までのカレーうどん] 旧・Chuka Bar Hyakuraku が2025年に生まれ変わった深夜までの祇園の居酒屋。ベテランの料理人の餃子、エビチリ、麻婆豆腐に、馬刺し、桜鍋、閉店した祇園のうどん店のカレーうどんも。深夜3時まで、喫煙可、日曜休み。',
  });
}

// ================================================================ 活貝センター 京都祇園本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041924/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'kyoto_katsukai_center_gion', name: '活貝センター 京都祇園本店 (Katsukai Center)', category: 'OMNI',
    lat: 35.001614, lng: 135.772594, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grill-your-own shellfish, sashimi and oysters, but also tempura, hegi soba and fried oysters (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a shellfish and seafood restaurant (2026 reviews).',
    hours_raw: 'Daily 11:00–23:00 (last order 22:30); closing days may vary (Tabelog). Reservations accepted; two-hour limit, not extended for late arrivals (Tabelog). No service or cover charge (Tabelog, Japanese text: 「サービス・チャージ料なし」). Cards incl. UnionPay; e-money; PayPay (Tabelog). Self-service grilling at the table — watch for flames and spitting shells (Tabelog). A large live-shellfish tank (Tabelog; August 2026). Service can be slow when busy (May 2026). Hakata-cho Building 1F, 2 min from Gion-Shijo (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawabata, south of Shijo — Gion-Shijo',
    cuisine: 'A fishing-port-style seafood restaurant with 40–50 kinds a day from its own wholesale market — live shellfish, local fish, bluefin tuna, sea urchin, crab, eel and dried fish — grilled at the table or as sashimi, set meals and rice bowls, from 11:00 (Tabelog) · eleven-kind sashimi platter; shellfish platters of surf clam, scallop and oysters (May 2026) · grill-your-own turban shell, scallops, white clams and rock oysters; giant clams (August 2026) · tuna platter, hegi soba (May 2026); Shousai fugu hot pot (September 2026) · courses with simmered seafood, tempura and fried oysters; Kinosaki crab (October 2026)',
    website: null, gmaps: gm('活貝センター 京都祇園本店'), menu_url: TB,
    notes: '[Seafood · Gion-Shijo, grill-your-own shellfish] A lively fishing-port-style restaurant by Gion-Shijo with a big live-shellfish tank: pick turban shells, scallops, giant clams and rock oysters to grill yourself, or order heaped sashimi platters, crab and fugu hot pot from its own wholesale market. Open from 11:00, so good for daytime drinks; two-hour limit.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a seafood restaurant supplied from its own wholesale fish market, with 40 to 50 kinds of seafood a day; a second Katsukai Center is at the Fuji-Yoshiwara fishing port.',
      philosophy: 'A fishing port and fishermen\'s style brought to Gion (Tabelog).', specialty: 'Grill-your-own live shellfish.',
      anecdotes: [
        { text: 'An August 2026 first-timer was taken aback by the size of the giant clams and scallops in the tanks.', source: R + 'B533648538/' },
        { text: 'A May 2026 diner found the hegi soba the surprise of the meal after grilled shellfish and tuna.', source: R + 'B528818946/' },
        { text: 'A May 2026 lunchtime drinker found the seafood fresh but the service slow and orders mixed up.', source: R + 'B531282515/' },
      ],
      japanese_sources_summary: '食べログ: 海鮮・かに・居酒屋、東山区博多町72-1 博多町ビル 1F、京阪祇園四条駅から徒歩2分、毎日11:00〜23:00 (L.O. 22:30)、予約可、2時間制、サービス・チャージ料なし、カード・電子マネー・PayPay 可、セルフで焼く、大きな活貝の水槽、自社の卸市場から毎日40〜50種 (活貝、地魚、本まぐろ、雲丹、蟹、鰻、干物)、Fuji-Yoshiwara の漁港にも店。口コミ (2026年5月〜10月、英語): 刺身11種盛り、貝の盛り合わせ、さざえ、ホタテ、白はまぐり、岩牡蠣、大きなシャコ貝、まぐろの盛り合わせ、へぎそば、Shousai のふぐ鍋、コースの煮付け、天ぷら、カキフライ、Kinosaki の蟹、混むと提供が遅い。',
      confidence: 'medium', sources: [TB, R + 'B527332740/', R + 'B527482380/', R + 'B528818946/', R + 'B529323937/', R + 'B531282515/', R + 'B533064545/', R + 'B533648538/', R + 'B533674625/', R + 'B536903573/', R + 'B536947279/', R + 'B538098655/', R + 'B538251023/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick shellfish from the tank to grill at the table; two-hour limit; open from 11:00. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区博多町72-1 博多町ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001614, 135.772594); cross-checked: GSI 京都府京都市東山区博多町72番地 (lot) 60m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527332740/', R + 'B533674625/'],
    price_note: 'No item prices in the sources; no service charge.', last_checked: TODAY, items: [
      it('', '', 'Grill-your-own shellfish', '', 'Shellfish', 'ask', 'no', 'August 2026.', 'yaki_kai'),
      it('', '', 'Sashimi platter (eleven kinds)', '', 'Sashimi', 'ask', 'no', 'May 2026.', 'sashimi'),
      it('', '', 'Hegi soba', '', 'Noodles', 'no', 'no', 'May 2026.', 'hegi_soba'),
    ] }, {
    cuisine: '自社の卸市場から毎日40〜50種、活貝、地魚、本まぐろ、雲丹、蟹、鰻、干物を、卓で焼いたり刺身や定食、丼で、11時から (食べログ)・刺身11種盛り、ホッキ貝、ホタテ、牡蠣の貝の盛り合わせ (2026年5月)・自分で焼くさざえ、ホタテ、白い貝、岩牡蠣、大きなシャコ貝 (2026年8月)・まぐろの盛り合わせ、へぎそば (2026年5月)、Shousai のふぐ鍋 (2026年9月)・魚の煮付け、天ぷら、カキフライのコース、Kinosaki の蟹 (2026年10月)',
    neighborhood: '川端、四条の南。祇園四条駅',
    gf_detail: '要確認。自分で焼く貝、刺身、牡蠣のほか、天ぷら、へぎそば、カキフライもある (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。貝と魚介の店 (2026年の口コミ)。',
    notes: '[海鮮・祇園四条、自分で焼く活貝] 祇園四条駅近く、大きな活貝の水槽がある漁港風のにぎやかな店。さざえ、ホタテ、シャコ貝、岩牡蠣を選んで自分で焼くか、自社の卸市場からの刺身の盛り合わせ、蟹、ふぐ鍋を。11時から開いているので昼飲みにも。2時間制。',
  });
}

save();
