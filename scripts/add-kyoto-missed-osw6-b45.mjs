// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 45.
//   + メメントモリ mement mori (one-person weekend café with daily plates by the Okazaki canal)
//   + はとや食堂 Hatoya Shokudo (70-year-old pick-your-sides diner from 6 am, Kumano Jinja-mae)
//   + 眺河 先斗町～華～ Nagamegawa Pontocho Hana (kaiseki, tofu and sukiyaki with a kawadoko, Pontocho)
//   + 大力邸 Tairiki Tei (udon and sweets facing a garden by Nanzen-ji)
//   - skip 26035096 ラーメン 魁力屋 堀川五条店 (chain)
//   - skip 26002870 あんじ 麩屋町綾小路店 (same-concept branch of a brand in data)
//   - skip 26035798 寿司と天ぷらと樽酒 四条烏丸店 (brand of J Group Holdings, 115 shops)
//   - skip 26034196 京都肉×青果サワー 京 (brand of GYRO HOLDINGS, about 230 shops)
//   Same-name counts first, per brand or operator (2026-11-06): メメントモリ — one. はとや食堂 — one. 眺河 — one. 大力邸 — one.
//   Taken on 2026-11-06: `next core 200` (lane) gave 魁力屋 26035096 (skip), メメントモリ 26018158 and はとや食堂 26001808;
//   `next notable 200` (lane) gave あんじ 26002870 (skip), 樽酒 26035798 (skip), 京 26034196 (skip), 眺河 26015620 and 大力邸
//   26037316. None is in data/kyoto.json: grep by name and address (岡崎西天王町84-1 — shared with kyoto_section_dor —
//   聖護院山王町43-1, 鍋屋町232-10, 南禅寺草川町81) found none.
//   Service charges per Tabelog's Japanese original: 眺河 「サービス料10％」; the others none listed. No halal claims; no owner
//   deaths in the sources.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-45');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26035096', 'chain: Kairikiya ramen — Tabelog lists about 20 Kairikiya shops (https://tabelog.com/en/rstLst/?sw=%E9%AD%81%E5%8A%9B%E5%B1%8B), and data already has 魁力屋 イオンモール大阪ドームシティ店 (Osaka).');
skip('26002870', 'same-concept branch of a brand already in data: 漁港直送 海鮮酒場 あんじ — kyoto_anji_karasuma_rokkaku (烏丸六角店, osw6-42) is in data; this is the 麩屋町綾小路店 of the same seafood-izakaya brand (https://tabelog.com/en/rstLst/?sw=%E3%81%82%E3%82%93%E3%81%98).');
skip('26035798', 'brand of a large parent: the official site sits under jproject-shop.jp (https://watakushi.jproject-shop.jp/shijokarasuma/), the shop network of J Group Holdings, which reported 115 shops in 65 formats in its May 2026 TSE filing (https://www2.jpx.co.jp/disc/30630/140120260529555111.pdf).');
skip('26034196', 'brand of a large parent: the official page is on shop.gyro.holdings (https://shop.gyro.holdings/detail/119045/), the shop search of GYRO HOLDINGS, described in its press releases as running about 230 restaurants in about 90 formats (https://ryukyushimpo.jp/prtimes/entry-3811045.html).');

// ================================================================ メメントモリ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26018158/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '18:00']);
  put({
    id: 'kyoto_mement_mori_okazaki', name: 'メメントモリ (mement mori)', category: 'OMNI',
    lat: 35.015318, lng: 135.779044, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A daily plate of small Japanese and Western dishes with rice, and cakes (2023–26 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The plate changes daily and has included pork and fish-sauce dishes (July 2023); no vegan information.',
    hours_raw: 'Fri–Sun 11:30–18:00; closed Monday–Thursday (Tabelog). Reservations accepted (Tabelog); the daily plate is limited — 15 servings in September 2024 — and ends when sold out (Tabelog). CASH ONLY — no cards, e-money or QR (Tabelog; April 2025). 8 seats: 4 at the counter, 4 at a table (Tabelog). Run by one person (May 2024; March 2026). Non-smoking (Tabelog). By the canal on the ground floor of M&M’s apartment, Okazaki; 3 min from the Okazaki Park bus stops, 11 min from Higashiyama Stn (Tabelog). Opened 14 May 2011 (Tabelog).',
    hours: { 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Okazaki, by the canal — 11 min from Higashiyama Stn',
    cuisine: 'A daily one-plate lunch of several small Japanese and Western side dishes with rice and soup — ¥1,500 (Tabelog; April 2025) or ¥1,650, limited to 15 (September 2024) — such as cold pork shabu-shabu with ponzu and a fried-tofu-pouch dish (July 2023) · coffee after the meal ¥250 (May 2024) · cakes (Tabelog) · window seats over the canal and, in spring, cherry blossom (April 2025)',
    website: null, gmaps: gm('メメントモリ カフェ 岡崎'), menu_url: TB,
    notes: '[Café · Okazaki canal, a one-person weekend lunch plate] An eight-seat café by the Okazaki canal, open only Friday to Sunday, where one person cooks a gentle daily plate of small Japanese and Western dishes (about ¥1,500, limited and often sold out), with coffee and cake. Cherry blossom fills the window in spring. Cash only — come early or book.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who runs the café alone (May 2024; March 2026)'], origin: null,
      background: 'Per Tabelog: a café opened 14 May 2011, now open Friday to Sunday. Reviews from May 2024 and March 2026 describe one person running it.',
      philosophy: null, specialty: 'Daily lunch plate.',
      anecdotes: [
        { text: 'An April 2025 visitor found the cherry blossom view over the canal stunning but had to give up the rice plate for lack of cash.', source: R + 'B504478005/' },
        { text: 'A September 2024 group arrived at 11:45 and booked a table for 13:30 to get the limited plate.', source: R + 'B495028417/' },
        { text: 'A May 2024 first-timer, after pandemic-era irregular hours, found the gentle food and kind solo service worth the wait.', source: R + 'B489342756/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・ケーキ、左京区岡崎西天王町84-1 M&M’s apartment 1F、東山駅から徒歩11分、岡崎公園のバス停から3分、金土日11:30〜18:00、月〜木休み、予約可、現金のみ、8席 (カウンター4、テーブル4)、禁煙、2011年5月14日オープン、本日のプレート1,500円 (なくなり次第終了)。口コミ (2023年7月〜2026年7月、英語): 和洋の小さなおかずのワンプレート、15食限定1,650円、豚の冷しゃぶのポン酢、お揚げの料理、食後のコーヒー250円、疏水沿いの窓から桜、一人で営む、週末のみ。',
      confidence: 'medium', sources: [TB, R + 'B238800811/', R + 'B467906054/', R + 'B468878835/', R + 'B483169854/', R + 'B489342756/', R + 'B490385453/', R + 'B495028417/', R + 'B502484747/', R + 'B504478005/', R + 'B504669821/', R + 'B526951271/', R + 'B531991711/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book or come early for the limited plate; cash only; small and quiet. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区岡崎西天王町84-1 M&M’s apartment 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.015318, 135.779044); cross-checked: GSI 京都府京都市左京区岡崎西天王町84番地 (lot) 39m; kyoto_section_dor shares the building, 10.6 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B495028417/', R + 'B489342756/'],
    price_note: 'Plate ¥1,500 per Tabelog (¥1,650 in September 2024); coffee ¥250 (May 2024).', last_checked: TODAY, items: [
      it('', '', 'Daily lunch plate', '¥1,500', 'Lunch', 'ask', 'ask', 'Tabelog; limited.', 'daily_plate'),
      it('', '', 'Coffee after the meal', '¥250', 'Drinks', '', 'vegan', 'May 2024.', 'coffee'),
    ] }, {
    cuisine: '和洋の小さなおかずにご飯と汁の日替わりのワンプレート。1,500円 (食べログ、2025年4月)、15食限定で1,650円 (2024年9月)。豚の冷しゃぶのポン酢やお揚げの料理など (2023年7月)・食後のコーヒー250円 (2024年5月)・ケーキ (食べログ)・疏水を望む窓辺の席、春は桜 (2025年4月)',
    neighborhood: '岡崎、疏水沿い。東山駅から徒歩11分',
    gf_detail: '要確認。和洋の小さなおかずとご飯の日替わりプレート、ケーキ (2023〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。プレートは日替わりで、豚肉や魚醤を使う料理もあった (2023年7月)。ヴィーガンの情報はない。',
    notes: '[カフェ・岡崎の疏水、一人で営む週末のランチプレート] 岡崎の疏水沿いの8席のカフェ。金〜日だけ開き、一人で和洋の小さなおかずのやさしい日替わりプレート (約1,500円、数量限定で売り切れることも) とコーヒー、ケーキを出す。春は窓いっぱいの桜。現金のみ。早めに行くか予約を。',
  });
}

// ================================================================ はとや食堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001808/'; const R = TB + 'dtlrvwlst/';
  const H = day(['06:00', '18:00']);
  put({
    id: 'kyoto_hatoya_shokudo', name: 'はとや食堂 (Hatoya Shokudo)', category: 'OMNI',
    lat: 35.017177, lng: 135.778249, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Home-style side dishes, soups and udon or Chinese-noodle sets (2025–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork miso soup, sake-lees soup, mackerel and meat udon (2025–26 reviews).',
    hours_raw: '6:00–18:00; closed Saturday (Tabelog). No reservations (Tabelog). CASH ONLY — no cards, e-money or QR (Tabelog). 18 seats at 9 small tables (Tabelog). A smoking area, with no smoking 12:00–13:00; a posted sign says children are not allowed inside (Tabelog). Order a soup or noodles, then pick 2–3 sides from the trays by the owner (February 2026). On the corner of Higashioji and Marutamachi facing Kumano Shrine; 558 m from Jingu-Marutamachi Stn (Tabelog; December 2025). In business over 70 years according to information online (December 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashioji Marutamachi, facing Kumano Shrine — 558 m from Jingu-Marutamachi Stn',
    cuisine: 'A neighbourhood diner open from 6 am: choose a soup or noodles and two or three home-style sides from the counter trays (2025–26 reviews) · pork miso soup set with grilled salted mackerel and chilled tofu (June 2025), sake-lees soup set (October 2025) · kitsune udon set with simmered mackerel ¥900 (April 2026), meat udon set (December 2025), Chinese noodle set with omelette (October 2026) · rolled egg, braised mackerel and other sides (2025–26 reviews)',
    website: null, gmaps: gm('はとや食堂 熊野神社前'), menu_url: TB,
    notes: '[Diner · Higashioji Marutamachi, home cooking from 6 am] A long-running diner facing Kumano Shrine, open from dawn: order a pork miso soup, sake-lees soup or udon, then pick a couple of home-style sides — grilled mackerel, chilled tofu, rolled egg — from the trays, for under ¥1,000. Cash only; no children; closed Saturday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who serves from the side-dish trays (February 2026)'], origin: null,
      background: 'Per Tabelog: a cafeteria-style diner at the Higashioji Marutamachi crossing. A December 2025 reviewer read online that it has been in business for over 70 years.',
      philosophy: null, specialty: 'Pork miso soup set; pick-your-own sides.',
      anecdotes: [
        { text: 'An April 2026 morning jogger stopped for a kitsune udon set with simmered mackerel, ¥900 in all.', source: R + 'B526886363/' },
        { text: 'A November 2025 visitor hunting for an early-opening breakfast found it and parked behind Kumano Shrine.', source: R + 'B517976002/' },
        { text: 'An October 2026 visitor noted how hard it is to find ordinary home cooking out, and why regulars might come daily.', source: R + 'B536959670/' },
      ],
      japanese_sources_summary: '食べログ: 食堂、左京区聖護院山王町43-1、神宮丸太町駅から558m、6:00〜18:00、土曜休み、予約不可、現金のみ、18席、分煙 (12〜13時は禁煙)、子供の入店不可の貼り紙。口コミ (2025年6月〜2026年10月、英語): 熊野神社前の東大路丸太町の角、汁物や麺を頼み、店主の近くのトレーから小鉢を2〜3品選ぶ、豚汁定食 (鯖の塩焼き、冷奴)、粕汁定食、きつねうどん定食 (鯖の煮付け、900円)、肉うどん定食、中華そば定食、卵焼き、70年以上続く店 (ネットの情報、2025年12月)。',
      confidence: 'medium', sources: [TB, R + 'B508067484/', R + 'B508737142/', R + 'B510972061/', R + 'B515665701/', R + 'B517566232/', R + 'B517976002/', R + 'B518653824/', R + 'B522597826/', R + 'B526130637/', R + 'B526886363/', R + 'B536959670/', R + 'B536992184/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order a soup or noodles and point to the side dishes you want; cash only; no children. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院山王町43-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.017177, 135.778249); cross-checked: GSI 京都府京都市左京区聖護院山王町43番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526886363/'],
    price_note: 'One set price from April 2026.', last_checked: TODAY, items: [
      it('', '', 'Kitsune udon set with simmered mackerel', '¥900', 'Sets', 'no', 'no', 'April 2026.', 'kitsune_set'),
      it('', '', 'Pork miso soup set (2 sides)', '', 'Sets', 'ask', 'no', 'June 2025; February 2026.', 'tonjiru_set'),
      it('', '', 'Sake-lees soup set', '', 'Sets', 'ask', 'no', 'October 2025.', 'kasujiru_set'),
    ] }, {
    cuisine: '朝6時から開く町の食堂。汁物か麺を選び、トレーから家庭的なおかずを2〜3品 (2025〜2026年の口コミ)・鯖の塩焼きと冷奴の豚汁定食 (2025年6月)、粕汁定食 (2025年10月)・鯖の煮付けのきつねうどん定食900円 (2026年4月)、肉うどん定食 (2025年12月)、中華そばと卵焼きの定食 (2026年10月)・卵焼き、鯖の煮付けなどのおかず (2025〜2026年の口コミ)',
    neighborhood: '東大路丸太町、熊野神社前。神宮丸太町駅から558m',
    gf_detail: '要確認。家庭的なおかず、汁物、うどんや中華そばの定食 (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。豚汁、粕汁、鯖、肉うどん (2025〜2026年の口コミ)。',
    notes: '[食堂・東大路丸太町、朝6時からの家庭料理] 熊野神社前の長く続く食堂。夜明けから開き、豚汁、粕汁、うどんを頼んで、鯖の塩焼き、冷奴、卵焼きなど家庭的なおかずをトレーから選ぶ。1,000円以内。現金のみ、子供不可、土曜休み。',
  });
}

// ================================================================ 眺河 先斗町～華～
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26015620/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_nagamegawa_pontocho', name: '眺河 先斗町～華～ (Nagamegawa Pontocho Hana)', category: 'OMNI',
    lat: 35.004606, lng: 135.771145, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kaiseki with tempura, sukiyaki, saikyo-miso fish and yudofu (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki with sashimi, hamo, Omi beef sukiyaki and dashi; tofu and yuba are part of mixed courses (2026 reviews).',
    hours_raw: 'Lunch 12:00–14:30 (last order 13:30), dinner 17:00–22:00 (last order 20:30), daily (Tabelog). Reservations accepted; guests with preschool children are seated only in private rooms, if one is free (Tabelog). The kawadoko (river terrace) moves indoors if rain is likely, and wet terrace or kotatsu-terrace seats move indoors (Tabelog); terrace seating ran to the end of October in 2026 (October 2026). Service charge 10% (Tabelog, Japanese text: 「サービス料10％」). Cards incl. UnionPay; QR incl. Alipay and WeChat Pay; no e-money (Tabelog). 60 seats; non-smoking (Tabelog). The eighth house on the east side of Pontocho north of Shijo; 2 min from Kyoto Kawaramachi Stn (Tabelog). No children’s menu (September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho north of Shijo — 2 min from Kyoto Kawaramachi Stn',
    cuisine: 'Kyoto kaiseki with tofu, yuba and sukiyaki, on a river terrace over the Kamo (Tabelog; 2026 reviews) · lunch: mini kaiseki with Omi beef sukiyaki and saikyo-grilled sawara ¥4,840 (June and October 2026); a lunch set around ¥4,000 with tempura (September 2026) · lunch kaiseki with fresh yuba, hamo and tuna sashimi and a hamo tempura hot pot (July 2026) · summer kaiseki ¥6,600 — appetizers, sashimi, saikyo-yaki, yudofu, fried dish, chirimen rice, miso soup, dessert (August 2026) · seasonal kawadoko kaiseki at dinner (August–September 2026)',
    website: 'http://c-and-d.net/home.html', gmaps: gm('眺河 先斗町 華'), menu_url: TB + 'dtlmenu/',
    notes: '[Kyoto cuisine · Pontocho, kaiseki on the river terrace] A Pontocho house with a kawadoko over the Kamo River that stays open to the end of October: a ¥4,840 mini kaiseki with Omi beef sukiyaki at lunch, summer kaiseki (¥6,600) with yuba, hamo and yudofu, or indoor seats with a river view. 10% service. Preschool children only in private rooms; no kids menu.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a Japanese, tofu and sukiyaki restaurant on Pontocho with river-terrace and kotatsu-terrace seating.',
      philosophy: null, specialty: 'Kawadoko kaiseki; yuba and tofu.',
      anecdotes: [
        { text: 'An October 2026 diner was glad the terrace was still open at month’s end, when neighbours had closed theirs by mid-October.', source: R + 'B538082768/' },
        { text: 'An October 2026 overseas visitor was glad a first taste of Kyoto cuisine came here, and the friends all loved it.', source: R + 'B537685434/' },
        { text: 'A September 2026 parent noted there is no children’s menu, calling the terrace kaiseki a place for adults.', source: R + 'B536112034/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・豆腐料理・すき焼き、中京区先斗町通四条上ル東側8軒目鍋屋町232-10、京都河原町駅から徒歩2分、昼12:00〜14:30 (L.O. 13:30)、夜17:00〜22:00 (L.O. 20:30)、予約可、未就学児は個室のみ、雨の予報で納涼床は店内に、サービス料10%、カード・QR 可、60席、禁煙。口コミ (2026年6月〜10月、英語): Omi の牛のすき焼きと鰆の西京焼きのミニ懐石4,840円、天ぷらの昼のセット約4,000円、生湯葉と鱧と鮪の刺身、鱧の天ぷら鍋、夏の懐石6,600円 (先付、刺身、西京焼き、湯豆腐、揚げ物、ちりめんご飯、味噌汁、デザート)、川床の懐石、10月末まで床あり、子供のメニューはない。',
      confidence: 'medium', sources: [TB, R + 'B529675570/', R + 'B529779310/', R + 'B532054222/', R + 'B532108249/', R + 'B533799381/', R + 'B534623687/', R + 'B534700712/', R + 'B536079680/', R + 'B536112034/', R + 'B536234255/', R + 'B537685434/', R + 'B538082768/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a kaiseki course and request the river terrace in season; 10% service. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通四条上ル東側8軒目鍋屋町232-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004606, 135.771145); cross-checked: GSI 京都府京都市中京区鍋屋町232番地 (lot) 48m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538082768/', R + 'B533799381/'],
    price_note: 'Course prices from August and October 2026; 10% service (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Mini kaiseki (Omi beef sukiyaki, saikyo sawara)', '¥4,840', 'Lunch', 'ask', 'no', 'October 2026.', 'mini_kaiseki'),
      it('', '', 'Summer kaiseki', '¥6,600', 'Courses', 'ask', 'no', 'August 2026.', 'summer_kaiseki'),
      it('', '', 'Service charge', '10%', 'Charge', '', '', 'Tabelog.', 'service_charge'),
    ] }, {
    cuisine: '豆腐、湯葉、すき焼きの京懐石を鴨川の床で (食べログ、2026年の口コミ)・昼: Omi の牛のすき焼きと鰆の西京焼きのミニ懐石4,840円 (2026年6月・10月)、天ぷらの昼のセット約4,000円 (2026年9月)・生湯葉、鱧と鮪の刺身、鱧の天ぷら鍋の昼の懐石 (2026年7月)・夏の懐石6,600円: 先付、刺身、西京焼き、湯豆腐、揚げ物、ちりめんご飯、味噌汁、デザート (2026年8月)・夜は季節の床の懐石 (2026年8月〜9月)',
    neighborhood: '先斗町、四条の北。京都河原町駅から徒歩2分',
    gf_detail: '要確認。天ぷら、すき焼き、西京焼き、湯豆腐の入る懐石 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。刺身、鱧、Omi の牛のすき焼き、出汁の懐石。豆腐や湯葉もコースの一部 (2026年の口コミ)。',
    notes: '[京料理・先斗町、床で懐石] 10月末まで開く鴨川の床のある先斗町の店。昼はOmi の牛のすき焼きのミニ懐石 (4,840円)、夏の懐石 (6,600円) は湯葉、鱧、湯豆腐。屋内の川の見える席も。サービス料10%。未就学児は個室のみ、子供のメニューはない。',
  });
}

// ================================================================ 大力邸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037316/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://tairikitei.com/';
  const H = day(['11:30', '20:00']);
  put({
    id: 'kyoto_tairiki_tei_nanzenji', name: '大力邸 (Tairiki Tei)', category: 'OMNI',
    lat: 35.012097, lng: 135.791342, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat udon and tempura (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: udon in dashi with chicken and burdock tempura (2026 reviews).',
    hours_raw: '11:30–20:00, open all year (Tabelog). Dinner reservations are for courses only (official site); at lunch, expect a queue from before opening with numbered tickets (October–November 2026). Cancellation on the day costs 100%, and switching from a course to à la carte after arriving is charged at the course price (Tabelog). Cards, e-money and QR (Tabelog). 47 seats: counters facing the garden, tables, private room (Tabelog; October 2026). Non-smoking; smoking area outside (Tabelog). 1 min from the main gate of Nanzen-ji; 9 min from Keage Stn (Tabelog). First anniversary celebrated in January 2025 (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nanzen-ji, by the main gate — 9 min from Keage Stn',
    cuisine: 'Homemade udon at counters facing a Japanese garden (official site; 2026 reviews) · Awa chicken tempura and maitake tempura udon ¥1,700, large burdock tempura udon ¥1,600 (September 2026) · dango toasted at the table, with kinako, red bean paste or syrup (September 2026) · matcha latte and Japanese sweets as a café (September–October 2026) · dinner courses by reservation (official site)',
    website: OF, gmaps: gm('大力邸 南禅寺'), menu_url: OF,
    notes: '[Udon and café · Nanzen-ji, a garden view with lunch] A restaurant a minute from Nanzen-ji’s gate whose counters look out on a Japanese garden: homemade udon with Awa-chicken or burdock tempura (¥1,600–1,700), dango you toast yourself and matcha latte. Very popular — a numbered queue forms before 11:30. Dinner is courses only, by reservation. Open daily.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site: a restaurant with a seasonal Japanese garden view and homemade udon, which marked its first anniversary in January 2025 with maiko dances; dinner reservations are for courses only. An October 2026 reviewer says the garden was designed by an 11th-generation gardener of the Ogawa line.',
      philosophy: null, specialty: 'Homemade tempura udon; garden view.',
      anecdotes: [
        { text: 'An October 2026 visitor arrived at 11:00 and saw a queue form quickly; only courses could be booked.', source: R + 'B536792494/' },
        { text: 'A September 2026 café visitor enjoyed toasting dango at the table with a choice of toppings.', source: R + 'B535462749/' },
        { text: 'A November 2026 visitor arriving five minutes before opening was the 15th group in line.', source: R + 'B538673283/' },
      ],
      japanese_sources_summary: '公式サイト: 四季折々の絶景の庭園、職人の自家製うどん、ディナーの予約はコースのみ、2025年1月に開店1周年の舞妓の舞。食べログ: うどん・ステーキ・カフェ、左京区南禅寺草川町81、南禅寺の正門から徒歩1分、蹴上駅から徒歩9分、11:30〜20:00、無休、予約可 (当日キャンセル100%、来店後のコースからの変更もコース料金)、カード・電子マネー・QR 可、47席、禁煙 (外に喫煙所)。口コミ (2026年9月〜11月、英語): Awa の鶏と舞茸の天ぷらうどん1,700円、大きなごぼう天うどん1,600円、自分で焼く団子、抹茶ラテ、庭に面したカウンター、開店前から整理券の行列。',
      confidence: 'medium', sources: [TB, OF, R + 'B535462749/', R + 'B535591578/', R + 'B535678924/', R + 'B536183591/', R + 'B536235524/', R + 'B536792494/', R + 'B537372767/', R + 'B537859682/', R + 'B538033302/', R + 'B538044334/', R + 'B538446873/', R + 'B538673283/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue for a numbered ticket at lunch; dinner is courses by reservation. Many overseas visitors (November 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区南禅寺草川町81',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.012097, 135.791342); cross-checked: GSI 京都府京都市左京区南禅寺草川町81番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535591578/'],
    price_note: 'Prices from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Awa chicken and maitake tempura udon', '¥1,700', 'Udon', 'no', 'no', 'September 2026.', 'tori_ten_udon'),
      it('', '', 'Large burdock tempura udon', '¥1,600', 'Udon', 'no', 'no', 'September 2026.', 'gobo_ten_udon'),
      it('', '', 'Dango to toast at the table', '', 'Sweets', 'ask', 'ask', 'September 2026.', 'dango'),
    ] }, {
    cuisine: '日本庭園に面したカウンターで自家製うどん (公式サイト、2026年の口コミ)・Awa の鶏と舞茸の天ぷらうどん1,700円、大きなごぼう天うどん1,600円 (2026年9月)・自分で焼く団子、きな粉、餡、蜜で (2026年9月)・カフェとして抹茶ラテや和菓子 (2026年9月〜10月)・夜は予約制のコース (公式サイト)',
    neighborhood: '南禅寺、正門のそば。蹴上駅から徒歩9分',
    gf_detail: 'グルテンフリーではない。小麦の自家製うどんと天ぷら (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁のうどんに鶏やごぼうの天ぷら (2026年の口コミ)。',
    notes: '[うどんとカフェ・南禅寺、庭を眺める昼] 南禅寺の正門から1分、日本庭園を望むカウンターの店。鶏やごぼう天の自家製うどん (1,600〜1,700円)、自分で焼く団子、抹茶ラテ。人気で11時半の開店前から整理券の行列。夜は予約制のコースのみ。無休。',
  });
}

save();
