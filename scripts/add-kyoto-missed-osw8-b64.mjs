// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 64.
//   + 祇園ゆづき Gion Yuzuki (creative Japanese counter, two seatings a night, Gion Sueyoshi-cho; rest)
//   + Le Peu 祇園 (wine and cocktail bar with box seats over the Shirakawa, Gion; rest)
//   + IT'S GION 2 DEUX (upstairs bar with windows on the Shirakawa cherry trees, since 1995; rest)
//   + Pizzeria 30 祇園本店 (pizza-only wood-fired pizzeria, opened October 2026; rest)
//   Rest list (mod 6 = 1) after batch 63, nearest-first — skipped:
//   - イルキャンティ京都 河原町三条店 26030761: chain (Il Chianti; ruled a chain in another lane, 13116876).
//   - 京都 肉のひろ重 八百屋 26043469: chain — five 肉のひろ重 shops in our crawls.
//   - 祇園辻利 祇園本店 26013361: already skipped in batch 51 (chain).
//   - 0秒レモンサワー 仙台ホルモン焼肉酒場 ときわ亭 三条木屋町店 26040469: chain.
//   - ヤキニク甲 26030731: already skipped (KINOE group).
//   - 天ぷら和食 たまる家 26045017: thin — three reviews.
//   Brand check: queue-status.jsonl grepped for every crawl id of each name (ゆづき, Le Peu, IT'S GION, Pizzeria 30) — no
//   earlier skip or done entries. Same-name check, same brand or operator only: ゆづき — one. Le Peu — two in our crawls
//   (六本木, 祇園) — drafted. IT'S GION 2 DEUX — one. Pizzeria 30 — one; its own page (pizzeria-30.com/shop/gion, opened
//   2026-11-07) lists only the Gion main shop. None is in data/kyoto.json (main 708e6304) by name or address (末吉町95 —
//   八寸, 利吉, 牛匠 in data are other shops on the same lot; 末吉町80-1 — Le Peu and IT'S GION share this address; 末吉町92 1F).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-64');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26030761/', 'chain: Il Chianti');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26043469/', 'chain: five 肉のひろ重 shops in our crawls');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26040469/', 'chain: ときわ亭');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26045017/', 'thin: three reviews');

// ================================================================ 祇園ゆづき Gion Yuzuki
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041411/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '25:00']);
  put({
    id: 'kyoto_gion_yuzuki', name: '祇園ゆづき (Gion Yuzuki)', category: 'OMNI',
    lat: 35.00484341787419, lng: 135.77412049035078, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A creative Japanese course built on dashi, with clay-pot rice and a tomato risotto; tell the shop about allergies when booking (Tabelog); no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi, fish, shellfish, crab and wagyu (2024–2026 reviews).',
    hours_raw: 'Daily 18:00–1:00 (last orders food 24:00, drinks 0:30) in two seatings: first 18:00–21:30 (last entry 20:00), second 21:30–1:00; irregular closing days (Tabelog). Reservations accepted; tell the shop about dislikes and allergies when booking; everyone in a group orders the same course (Tabelog). À la carte after 21:00 too (November 2024). Cards, iD, QUICPay, PayPay and d Barai (Tabelog). 13 seats: 7 at the counter and 6 at a table (Tabelog). Down a narrow lane south from Gion Sueyoshi-cho, hard to find; 5 min walk from Gion-Shijo Stn (Tabelog; September 2024). Opened 23 July 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Sueyoshi-cho — 5 min walk from Gion-Shijo Stn',
    cuisine: 'Creative Japanese course at a small counter, rich in dashi and leaning towards French ideas, by a Kyoto-born chef trained in Tokyo, per reviewers (2024–2026 reviews) · e.g. turnip soup, Kyoto-style oden, scallop namero, dashimaki, pickled oysters, clay-pot rice; grilled crab with crab-miso and sesame sauce; a tomato risotto to finish; wagyu can replace shellfish (November 2024–May 2026) · about ¥10,000–20,000 (2024–2026 reviews)',
    website: null, gmaps: gm('祇園ゆづき'), menu_url: null,
    notes: '[Creative Japanese · Gion Sueyoshi-cho, counter, till 1 a.m.] A tiny hidden counter down a Gion lane, opened in 2024 by a young Kyoto-born chef who trained in Tokyo, per reviewers: dashi-rich, French-tinged omakase courses — turnip soup, grilled crab with crab-miso and sesame, a tomato risotto to close — in two seatings, the second running to 1 a.m. Book and flag allergies ahead.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Staff'], origin: 'Kyoto (per a September 2024 review)',
      background: 'Per Tabelog: a Japanese restaurant and izakaya opened 23 July 2024 in Gion, with two seatings a night. Reviewers write that the chef was born in Kyoto and trained in Tokyo (September 2024), and previously worked in Ebisu (November 2024).',
      philosophy: null, specialty: 'Omakase course; grilled crab with crab miso.',
      anecdotes: [
        { text: 'A November 2024 visitor who came for à la carte after 21:00 had turnip soup, Kyoto oden, scallop namero and clay-pot rice.', source: R + 'B497849000/' },
        { text: 'A March 2025 diner who disliked shellfish had the shellfish main swapped for wagyu.', source: R + 'B514979276/' },
        { text: 'A May 2026 counter guest found the course more a French homage than traditional kaiseki, closing with a tomato risotto.', source: R + 'B528401115/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・居酒屋、東山区八坂新地末吉町95、祇園四条駅から徒歩5分、毎日 18:00〜翌1:00 (L.O.フード24:00、ドリンク0:30)、1部 18:00〜21:30 (最終入店20:00)、2部 21:30〜翌1:00、不定休、予約可 (苦手な食材やアレルギーは予約時に、グループは同じコースで)、カード・iD・QUICPay・PayPay・d払い可、13席 (カウンター7、テーブル6)、2024年7月23日開店。口コミ (2024年9月〜2026年5月、英語): 祇園末吉町から南へ細い路地、見つけにくい、京都生まれで東京で修業した料理人との声、恵比寿にいたとの声、だしの効いた料理、フレンチ寄りの創作、かぶのスープ、京風おでん、ほたてのなめろう、だし巻き、牡蠣の漬け、土鍋ご飯、焼きがにのかに味噌と胡麻のソース、締めのトマトのリゾット、貝が苦手なら和牛に、21時以降はアラカルトも。',
      confidence: 'medium', sources: [TB, R + 'B492652224/', R + 'B493206272/', R + 'B497085063/', R + 'B497849000/', R + 'B508652651/', R + 'B510261142/', R + 'B514979276/', R + 'B515434825/', R + 'B528401115/', R + 'B529833587/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; two seatings; same course for the group; cards, IC and QR.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Tabelog asks guests to state food dislikes and allergies when booking.', source: TB, verified: TODAY }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂新地末吉町95',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened July 2024; reviews through May 2026.' },
    pin_source: `Tabelog ${TB} (35.004843, 135.774120); GSI gives the same point for 末吉町92 and 95 (block-level), so kept the Tabelog pin; kyoto_rikichi_gion (95) is 11.5 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529833587/'],
    price_note: 'No course price given; reviewers spent about ¥10,000–20,000.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '', 'Course', 'ask', 'no', '2024–2026 reviews.', 'omakase'),
    ] }, {
    cuisine: '京都生まれで東京で修業した料理人の、だしの効いたフレンチ寄りの創作和食のコース。小さなカウンター (2024〜2026年の口コミ)・例: かぶのスープ、京風おでん、ほたてのなめろう、だし巻き、牡蠣の漬け、土鍋ご飯、焼きがにのかに味噌と胡麻のソース、締めのトマトのリゾット。貝の代わりに和牛にも (2024年11月〜2026年5月)・10,000〜20,000円ほど (2024〜2026年の口コミ)',
    neighborhood: '祇園の末吉町。祇園四条駅から徒歩5分',
    gf_detail: '要確認。だしを生かした創作和食のコースに土鍋ご飯やトマトのリゾット。アレルギーは予約時に伝える (食べログ)。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だし、魚、貝、かに、和牛 (2024〜2026年の口コミ)。',
    notes: '[創作和食・祇園の末吉町、カウンター、深夜1時まで] 祇園の路地の奥に隠れた小さなカウンター。口コミでは京都生まれで東京で修業した若い料理人が2024年に開いた店。だしの効いたフレンチ寄りのおまかせのコースで、かぶのスープ、かに味噌と胡麻の焼きがに、締めのトマトのリゾット。2部制で2部は深夜1時まで。予約時にアレルギーを。',
  });
}

// ================================================================ Le Peu 祇園
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26028487/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.le-peu.com';
  const H = day(['19:00', '28:00']);
  put({
    id: 'kyoto_le_peu_gion', name: 'Le Peu 祇園 (Le Peu Gion)', category: 'OMNI',
    lat: 35.005401337068456, lng: 135.77409047919465, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A wine and cocktail bar with food such as spicy arrabbiata pasta and Kyoto dishes; no gluten information (2023–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mostly drinks; fruit cocktails; arrabbiata may be plant-based, but no ingredient information (2023–2026 reviews).',
    hours_raw: 'Monday–Saturday and the day before or after a holiday 19:00–4:00; closed Sunday and holidays, New Year and Obon (Tabelog). Reservations accepted (Tabelog). Service charge 10% plus a ¥1,000 table or counter charge; riverside box seats ¥1,500 for two hours (Tabelog original サービス料10％、テーブル・カウンター チャージ1000円(川沿いのボックス席は2時間1500円)). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 40 seats: a 12-seat counter, tables, semi-private rooms and box seats overlooking the Shirakawa (Tabelog; September 2023). At the end of a narrow lane off Shirakawa in Gion; taxis must stop quickly on the narrow road (Tabelog; February and May 2026). Opened 23 August 2001 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Shirakawa — 5 min walk from Gion-Shijo Stn',
    cuisine: 'Grown-up bar on the Shirakawa with over 400 wines and fine spirits (Tabelog) · fruit cocktails, a Grasshopper, gimlets, whisky with knowledgeable answers, tequila chosen by the bartender (2024–2025 reviews) · food including spicy arrabbiata and high-end Kyoto dishes (2024–2025 reviews) · about ¥4,000–8,000 plus charges (Tabelog; 2023–2026 reviews)',
    website: WEB, gmaps: gm('Le Peu 祇園'), menu_url: null,
    notes: '[Bar · Gion Shirakawa, till 4 a.m.] A long-standing, low-lit Gion bar at the end of a narrow lane, with box seats looking onto the Shirakawa, more than 400 wines and fine spirits, celebrated fruit cocktails and proper food — arrabbiata to Kyoto dishes. A gentlemanly owner and attentive staff. 10% service plus a ¥1,000 charge (riverside box ¥1,500). Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner and bartenders (unnamed)'], origin: null,
      background: 'Per Tabelog: a bar opened 23 August 2001 in Gion, with over 400 wines and fine spirits, a counter, tatami seating and box seats by the river; a Le Peu in Roppongi also appears in our crawls. Reviewers describe a friendly, gentlemanly owner (December 2024).',
      philosophy: 'A genuine bar for adults who know Kyoto\'s nights (Tabelog).', specialty: 'Fruit cocktails; wine.',
      anecdotes: [
        { text: 'A December 2023 regular sat by the Shirakawa and drank happily, even without the cherry blossoms.', source: R + 'B427613823/' },
        { text: 'A July 2024 fourth-stop visitor ended up ordering plenty of high-end Kyoto food at what is a genuine bar.', source: R + 'B488738605/' },
        { text: 'A December 2024 guest found the staff answered whisky questions with care, and the owner friendly and easy to talk to.', source: R + 'B498116393/' },
      ],
      japanese_sources_summary: '食べログ: バー、東山区末吉町80-1 1F、京阪祇園四条駅から徒歩5分、月〜土・祝前後日 19:00〜翌4:00、日・祝休み、年末年始とお盆は休み、予約可、サービス料10％、テーブル・カウンター チャージ1000円 (川沿いのボックス席は2時間1500円)、カード (VISA・Master・JCB・AMEX・Diners) 可、電子マネー・QR 不可、40席 (カウンター12、テーブル28)、2001年8月23日開店、400種以上のワインと上質な酒、座敷、公式サイト le-peu.com。口コミ (2023年9月〜2026年5月、英語): 白川沿いの席、細い路地の奥の扉、落ち着いた照明、広いカウンター、フルーツのカクテルが評判、グラスホッパー、ギムレット、ウイスキー、テキーラ、アラビアータ、京料理、紳士的な店主、前の道が狭くタクシーの乗り降りは素早く。',
      confidence: 'medium', sources: [TB, WEB, R + 'B427613823/', R + 'B432084531/', R + 'B472384120/', R + 'B483439646/', R + 'B488738605/', R + 'B491614010/', R + 'B498116393/', R + 'B523949961/', R + 'B529377955/', R + 'B532596420/'] },
    cultural_comfort: { level: 'konnichiwa', note: '10% service plus seat charge; riverside box seats; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区末吉町80-1 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and website; reviews through May 2026.' },
    pin_source: `Tabelog ${TB} (35.005401, 135.774090); cross-checked: GSI 京都府京都市東山区末吉町80番地 (lot) 39 m; IT'S GION 2 DEUX (same address, this batch) is 6.1 m away; nearest existing record 33.9 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Charges from Tabelog; drink prices not given.', last_checked: TODAY, items: [
      it('', '', 'Table or counter charge', '¥1,000', 'Charge', 'gf', 'vegan', 'Plus 10% service; Tabelog.', 'charge'),
      it('', '', 'Riverside box seat (2 hours)', '¥1,500', 'Charge', 'gf', 'vegan', 'Tabelog.', 'river_box'),
    ] }, {
    cuisine: '400種以上のワインと上質な酒をそろえた白川沿いの大人のバー (食べログ)・フルーツのカクテル、グラスホッパー、ギムレット、丁寧に答えてくれるウイスキー、バーテンダーが選ぶテキーラ (2024〜2025年の口コミ)・辛いアラビアータや上質な京料理などの料理も (2024〜2025年の口コミ)・4,000〜8,000円ほどとチャージ (食べログ、2023〜2026年の口コミ)',
    neighborhood: '祇園白川。祇園四条駅から徒歩5分',
    gf_detail: '要確認。料理もあるワインとカクテルのバー (辛いアラビアータ、京料理など)。グルテンの情報はない (2023〜2026年の口コミ)。',
    vegan_detail: '要確認。ほとんどは飲み物、フルーツのカクテル。アラビアータは植物性の可能性もあるが材料の情報はない (2023〜2026年の口コミ)。',
    notes: '[バー・祇園白川、朝4時まで] 細い路地の奥の、白川を望むボックス席のある昔からの薄明かりのバー。400種以上のワインと上質な酒、評判のフルーツのカクテル、アラビアータから京料理までの料理。紳士的な店主と気配りのあるスタッフ。サービス料10％とチャージ1,000円 (川沿いのボックス1,500円)。日曜休み。',
  });
}

// ================================================================ IT'S GION 2 DEUX
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001637/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://itsgion.com';
  const H = day(['19:00', '28:00']);
  put({
    id: 'kyoto_its_gion_2_deux', name: 'IT\'S GION 2 DEUX', category: 'OMNI',
    lat: 35.00535583787387, lng: 135.77412721035597, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail bar — champagne, wine, single malts and seasonal fruit cocktails; no food or gluten information (2018–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks only in the reviews, e.g. Shine Muscat cocktails (2018–2025 reviews).',
    hours_raw: 'Monday–Saturday 19:00–4:00; closed Sunday and holidays (Tabelog). Reservations accepted, and needed for the two window tables; private hire by phone (Tabelog; April 2018). A charge of about ¥2,000 per person, per an April 2018 review; Tabelog lists none. Cards; no e-money or QR (Tabelog). 28 seats; private hire for 20–50; heated tobacco only in a designated area (Tabelog). Upstairs in a hidden house in Gion Shirakawa, with windows over the river and its Somei Yoshino cherry trees (Tabelog; June 2024). Opened 12 December 1995 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Shirakawa — upstairs over the river',
    cuisine: 'Long-established cocktail bar with window seats over the Shirakawa cherry trees, its interior designed by Mitsuhiro Mizutani, per a reviewer (Tabelog; February 2025) · champagne, wine, single malts and the owner\'s original cocktails; seasonal fruit cocktails such as Shine Muscat, with Shine Muscat chocolates (2022–2025 reviews) · about ¥3,000–5,000 (Tabelog; 2018–2025 reviews)',
    website: WEB, gmaps: gm('IT\'S GION 2 DEUX 祇園白川'), menu_url: null,
    notes: '[Bar · Gion Shirakawa, upstairs, since 1995] A hidden upstairs bar in a Gion house, its rounded room and lantern light designed by Mitsuhiro Mizutani, per a reviewer, with sofa seats at windows over the Shirakawa — cherry blossom in spring, the river breeze in autumn. Seasonal fruit cocktails, single malts and champagne. Book the two window tables. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner and bartenders (unnamed)'], origin: null,
      background: 'Per Tabelog: BAR IT\'S GION2DEUX, opened 12 December 1995 in Gion Shirakawa, overlooking the cherry-lined river. A February 2025 reviewer credits the interior to designer Mitsuhiro Mizutani; a December 2022 reviewer noted its 27th anniversary.',
      philosophy: 'The seasons of Gion Shirakawa through the window (Tabelog).', specialty: 'Seasonal fruit cocktails.',
      anecdotes: [
        { text: 'An April 2018 guest noted only two tables sit at the window over the cherry blossoms — book ahead.', source: R + 'B342125711/' },
        { text: 'In August 2024 a regular came for Shine Muscat day — Shine Muscat cocktails and Shine Muscat chocolates.', source: R + 'B427431746/' },
        { text: 'In September 2020 the owner of a nearby restaurant sent a diner here for a light drink; with no menu in sight, the order was made by preference.', source: R + 'B508901476/' },
      ],
      japanese_sources_summary: '食べログ: バー、東山区末吉町80-1、京阪祇園四条駅から徒歩5分、月〜土 19:00〜翌4:00、日・祝休み、予約可 (貸切は電話で)、カード可、電子マネー・QR 不可、28席、20〜50名で貸切可、加熱式たばこのみの喫煙所、1995年12月12日開店、白川の桜並木を窓から眺められる、公式サイト itsgion.com。口コミ (2018年4月〜2025年10月、英語): 隠れ家の2階、窓際のテーブルは2つだけで予約を、丸みのある空間、行灯のような照明、チークの床、内装は Mitsuhiro Mizutani 氏との声、シャンパン、ワイン、シングルモルト、オリジナルカクテル、シャインマスカットのカクテルとチョコ、チャージ1人2,000円ほどとの声 (2018年4月)、27周年 (2022年12月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B200054461/', R + 'B308280955/', R + 'B342125711/', R + 'B427431746/', R + 'B445193180/', R + 'B450222026/', R + 'B486730937/', R + 'B508901476/', R + 'B513858874/', R + 'B514696208/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book the window tables; heated tobacco only; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区末吉町80-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and website; reviews through October 2025.' },
    pin_source: `Tabelog ${TB} (35.005356, 135.774127); cross-checked: GSI 京都府京都市東山区末吉町80番地 (lot) 40 m; Le Peu 祇園 (same address, this batch) is 6.1 m away; nearest existing record 30.6 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B200054461/'],
    price_note: 'Charge from an April 2018 review; not listed on Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Charge (per person)', '¥2,000', 'Charge', 'gf', 'vegan', 'About ¥2,000; April 2018.', 'charge'),
      it('', '', 'Seasonal fruit cocktail', '', 'Cocktails', 'ask', 'ask', '2022–2024 reviews.', 'fruit_cocktail'),
    ] }, {
    cuisine: '白川の桜並木を窓から望む昔からのカクテルバー。口コミでは内装は Mitsuhiro Mizutani 氏 (食べログ、2025年2月)・シャンパン、ワイン、シングルモルト、店主のオリジナルカクテル、シャインマスカットなど季節のフルーツのカクテルとシャインマスカットのチョコ (2022〜2025年の口コミ)・3,000〜5,000円ほど (食べログ、2018〜2025年の口コミ)',
    neighborhood: '祇園白川、川を見下ろす2階',
    gf_detail: '要確認。シャンパン、ワイン、シングルモルト、季節のフルーツのカクテルのバー。食べ物やグルテンの情報はない (2018〜2025年の口コミ)。',
    vegan_detail: '要確認。口コミは飲み物のみ、例: シャインマスカットのカクテル (2018〜2025年の口コミ)。',
    notes: '[バー・祇園白川の2階、1995年から] 祇園の隠れ家の2階のバー。口コミでは Mitsuhiro Mizutani 氏がデザインした丸みのある空間と行灯のような明かり。白川を見下ろす窓際のソファ席から、春は桜、秋は川風を。季節のフルーツのカクテル、シングルモルト、シャンパン。窓際の2卓は予約を。日曜休み。',
  });
}

// ================================================================ Pizzeria 30 祇園本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26045839/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://pizzeria-30.com/shop/gion';
  const H = day(['10:00', '22:00']);
  put({
    id: 'kyoto_pizzeria_30_gion', name: 'Pizzeria 30 祇園本店 (Pizzeria 30 Gion)', category: 'OMNI',
    lat: 35.005077797563985, lng: 135.77428948438012, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a pizza-only menu of wood-fired wheat-dough pizza (official site; October 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A marinara (¥1,700) is on the menu; the other pizzas carry cheese or meat; no ingredient information (official site).',
    hours_raw: 'Daily 10:00–22:00, last order 21:30 (Tabelog). Reservations accepted, online too, and advised (Tabelog; October 2026). Cards and QR; no e-money (Tabelog). 20 seats; non-smoking (Tabelog). On a narrow Gion street near Gion-Shijo Stn exits 3 and 4 (2 min walk) (Tabelog; October 2026). Opened 9 October 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Sueyoshi-cho — 2 min walk from Gion-Shijo Stn',
    cuisine: 'Pizza-only wood-fired pizzeria open all day, with a young team (official site; October 2026 reviews) · pizzas: marinara ¥1,700, Margherita bufala ¥1,900, quattro formaggi ¥2,500, diavola ¥2,500, Bismarck ¥2,700, pescatore ¥2,900, prosciutto and rocket ¥3,600, wagyu sirloin "sukiyaki" ¥3,900 (official site) · mojitos and teas ¥750–850 (non-alcoholic), Italian sodas, Yoga juices, Peroni ¥900, organic Romagna wine by the glass ¥800 (official site) · about ¥2,000–3,000 (Tabelog)',
    website: WEB, gmaps: gm('Pizzeria 30 祇園本店'), menu_url: WEB,
    notes: '[Pizza · Gion, opened October 2026] A brand-new, pizza-only pizzeria on a narrow Gion street with a chewy, quick-baked crust — marinara ¥1,700, Margherita bufala ¥1,900, a Bismarck heaped with mushrooms, and a wagyu-sirloin sukiyaki pizza — plus Italian sodas, Peroni and organic Romagna wine. Open all day from 10 a.m.; book ahead.',
    chef_bio: { chef_name: null, roles: ['Young manager and staff (unnamed)'], origin: null,
      background: 'Per Tabelog and its own page: Pizzeria 30-thirty- Gion main shop, opened 9 October 2026, a pizza-only restaurant whose motto is to make an ordinary thirty minutes the richest part of the day (何気ない30分を、今日のいちばん豊かな時間に). Reviewers describe a young, energetic manager and staff (October 2026).',
      philosophy: 'Your best 30 minutes today (official site).', specialty: 'Margherita bufala; Bismarck.',
      anecdotes: [
        { text: 'An October 2026 visitor found the pizza at the table within ten minutes of sitting down, the Bismarck packed with mushrooms.', source: R + 'B537831124/' },
        { text: 'An October 2026 guest tried Yoga, an Italian juice made since 1946, and liked the music.', source: R + 'B537966047/' },
        { text: 'An October 2026 visitor dropped in while sandals were being repaired nearby, booking online for a Sunday.', source: R + 'B538026075/' },
      ],
      japanese_sources_summary: '食べログ: ピザ・イタリアン・洋食、東山区末吉町92 1F、祇園四条駅3・4番出口から徒歩2分、毎日 10:00〜22:00 (L.O.21:30)、予約可、カード・QR 可、電子マネー不可、20席、禁煙、2026年10月9日開店。公式ページ: Pizzeria 30-thirty- 祇園本店、何気ない30分を今日のいちばん豊かな時間に、マリナーラ1,700円、マルゲリータ ブッファラ1,900円、クワトロフォルマッジ2,500円、ディアボラ2,500円、ビスマルク2,700円、ペスカトーレ2,900円、プロシュートルッコラ3,600円、和牛サーロイン-SUKIYAKI- 3,900円、モヒートやティー750〜850円、サンペレグリノ、ヨーガ、ペローニ900円、ビオのワイン グラス800円。口コミ (2026年10月、英語): ピザだけの店、通し営業、もちもちの生地、10分ほどで出てくる、きのこたっぷりのビスマルク、若く元気な店長とスタッフ、予約がおすすめ。',
      confidence: 'medium', sources: [TB, WEB, R + 'B537048036/', R + 'B537250327/', R + 'B537603185/', R + 'B537831124/', R + 'B537966047/', R + 'B538026075/', R + 'B538054960/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pizza-only menu; book online; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区末吉町92 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official page; opened October 2026; seven reviews, all October 2026.' },
    pin_source: `Tabelog ${TB} (35.005078, 135.774289); GSI gives the same point for 末吉町92 and 95 (block-level), so kept the Tabelog pin; nearest existing record 31.9 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [WEB],
    price_note: 'Prices from the official page, tax included.', last_checked: TODAY, items: [
      it('', '', 'Marinara', '¥1,700', 'Pizza', 'no', 'ask', 'Official page.', 'marinara'),
      it('', '', 'Margherita bufala', '¥1,900', 'Pizza', 'no', 'no', 'Official page.', 'margherita'),
      it('', '', 'Bismarck', '¥2,700', 'Pizza', 'no', 'no', 'Official page.', 'bismarck'),
      it('', '', 'Wagyu sirloin "sukiyaki" pizza', '¥3,900', 'Pizza', 'no', 'no', 'Official page.', 'wagyu'),
      it('', '', 'Peroni', '¥900', 'Drinks', 'no', 'vegan', 'Official page.', 'peroni'),
    ] }, {
    cuisine: '若いスタッフの、薪窯で焼くピザだけの通し営業のピッツェリア (公式ページ、2026年10月の口コミ)・ピザ: マリナーラ1,700円、マルゲリータ ブッファラ1,900円、クワトロフォルマッジ2,500円、ディアボラ2,500円、ビスマルク2,700円、ペスカトーレ2,900円、プロシュートルッコラ3,600円、和牛サーロイン-SUKIYAKI- 3,900円 (公式ページ)・ノンアルコールのモヒートやティー750〜850円、イタリアのソーダ、ヨーガのジュース、ペローニ900円、ロマーニャのビオワイン グラス800円 (公式ページ)・2,000〜3,000円ほど (食べログ)',
    neighborhood: '祇園の末吉町。祇園四条駅から徒歩2分',
    gf_detail: 'グルテンフリー不可。薪窯で焼く小麦の生地のピザだけのメニュー (公式ページ、2026年10月の口コミ)。',
    vegan_detail: '要確認。マリナーラ (1,700円) もあるが、ほかはチーズや肉入り。材料の情報はない (公式ページ)。',
    notes: '[ピザ・祇園、2026年10月開店] 祇園の細い通りに開いたばかりのピザだけのピッツェリア。もちもちですぐ焼き上がる生地で、マリナーラ1,700円、マルゲリータ ブッファラ1,900円、きのこたっぷりのビスマルク、和牛サーロインのすき焼きピザ。イタリアのソーダ、ペローニ、ロマーニャのビオワインも。朝10時から通し営業、予約がおすすめ。',
  });
}

save();
