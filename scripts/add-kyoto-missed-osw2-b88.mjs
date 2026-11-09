// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 88.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   Brands checked against queue-status.jsonl (full names and brand stems), than.co.jp/brands and 株式会社WILL (will-food.com).
//   + はちぼし Hachiboshi (kaku-uchi standing bar at the back of a liquor shop on Higashinotoin-Sanjo; 2025–26 reviews)
//   + 直心房 さいき Jikishinbo Saiki (Kyoto-cuisine lunch below the Yasaka Shrine gate; 2025–26 reviews)
//   + 居酒屋 元気 Izakaya Genki (basement izakaya with lunch sets near Karasuma-Oike; 2025–26 reviews)
//   - 柏屋光貞 — retail food shop (Greg 11-07 ruling): long-established wagashi maker (an “11代目” is sourced), but no founding date found
//   - 京ねこ御殿 — thin: one short 2026 review
//   - 前田珈琲 文博店 — chain, as 26013648
//   + 花 Hana (soufflé-cheesecake café by flower artist TAKAYA on the Shirakawa, Higashiyama)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Pins: Tabelog /en/ point, cross-checked with GSI; はちぼし moved ~1.5 m off kyoto_sanjo_owariya (7.9 m); each 9 m+ from every pin on main,
//   hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-88');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26005881', '柏屋光貞: retail food shop (Greg 11-07 ruling) — a long-established Higashiyama-Yasui wagashi maker known for 行者餅, sold once a year at the Gion Festival; co-trip names an “11代目”, but no founding date was found, so the historic-family test is not fully sourced — flagged');
skip('26016297', '京ねこ御殿: thin evidence — the only 2025–26 review (May 2026) is a few lines about a late single drink');
skip('26023323', '前田珈琲 文博店: chain — same ruling as 前田珈琲 高台寺店 (26013648)');

// ================================================================ はちぼし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26024847/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.hachiboshi.com/';
  const H = day(['09:30', '22:30']);
  put({
    id: 'kyoto_hachiboshi_kakuuchi', name: 'はちぼし (Hachiboshi)', category: 'OMNI',
    lat: 35.007752, lng: 135.760930, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sake, beer and shochu with small snacks such as oden tofu and fried fish-paste “gyoza tempura”; no gluten information is published (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks and shop snacks; oden is usually dashi-based (reviews).',
    hours_raw: '09:30–22:30 Monday–Saturday; closed Sunday and holidays (Tabelog); the shop posts a monthly opening calendar (official site). Cash only — no cards, e-money or QR (Tabelog). Kaku-uchi: buy drinks and snacks at the register in the liquor shop, then drink at the standing area or the seats at the back; the back area allows smoking (March 2025). 25 seats (Tabelog). On Higashinotoin south of Sanjo (Tabelog; March 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashinotoin, south of Sanjo',
    cuisine: 'Kaku-uchi drinking at the back of a liquor and foods shop, run by a sake shop from the Meiji era (official site; September 2025) · self-serve bottled beer from the fridge; the house sake Aki no Shika from dry to cloudy, at low prices (September 2025) · snacks: oden tofu ¥100, fried fish-paste “gyoza tempura” (September 2025); snacks and light dishes bought in the shop (2025)',
    website: SITE, gmaps: gm('はちぼし 京都 東洞院'), menu_url: null,
    notes: "[Kaku-uchi · Higashinotoin-Sanjo, a liquor shop's standing bar] A Showa-retro drinking corner behind an old Kyoto liquor shop: pay at the till for a bottle of beer from the fridge or the house sake, grab a ¥100 oden tofu, and drink standing or at the back tables with the locals. Cash only; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'A liquor and foods shop (official site) that a September 2025 reviewer describes as a historic sake shop dating from the Meiji era, with a drinking space at the back. Reviewers (2024–2026) describe a kind owner who explains the system, and a full, local crowd from early evening. A March 2026 reviewer also knows a bar of the same name near Gojo.',
      philosophy: null,
      specialty: 'Kaku-uchi.',
      anecdotes: [
        { text: 'A March 2025 first-timer had the pay-at-the-register system explained by the owner and stood in the front to avoid the smoke.', source: R + 'B502570069/' },
        { text: 'A September 2025 visitor found it nearly full from early evening — a little oasis for the locals.', source: R + 'B513933839/' },
        { text: 'A September 2025 guest paired a ¥100 oden tofu with the house sake Aki no Shika.', source: R + 'B519798106/' },
      ],
      japanese_sources_summary: '公式サイト: 京都の酒屋 リカー&フーズ はちぼし、月ごとの営業予定。食べログ: はちぼし、バー、京都市中京区東洞院通三条下る三文字町218-1、月〜土 9:30〜22:30、日曜・祝日定休、カード・電子マネー・QR決済不可、25席。口コミ (2024〜2026年、英語): 明治からの酒屋の角打ち、手前が売り場、奥が飲むスペース、昭和レトロ、冷蔵庫から瓶ビールをセルフで、日本酒「秋鹿」を辛口からにごりまで手ごろに、おでん豆腐100円、魚のすり身の揚げ物 (gyoza tempura)、レジで先に会計、奥は喫煙可、立ち飲みも、地元の客で夕方から満席近く、五条にも同じ名前のバーがある。',
      confidence: 'low', sources: [SITE, TB, R + 'B502570069/', R + 'B513933839/', R + 'B519798106/', R + 'B524037005/', R + 'B525758029/'] },
    cultural_comfort: { level: 'japanese', note: 'Pay at the register first; cash only; smoking at the back.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通三条下る三文字町218-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October 2026 calendar) and Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.007751, 135.760947), offset ~1.5m to clear kyoto_sanjo_owariya (7.9m); cross-checked: GSI 京都府京都市中京区三文字町218番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519798106/'],
    price_note: 'Price from a September 2025 review; cash only.', last_checked: TODAY, items: [
      it('', '', 'Oden tofu', '¥100', 'Snacks', 'ask', 'ask', '', 'oden_tofu'),
      it('', '', 'House sake (Aki no Shika)', '', 'Sake', 'gf', 'vegan', '', 'sake'),
    ] }, {
    cuisine: '明治からの酒屋の奥の角打ち (公式サイト、2025年9月)・冷蔵庫から瓶ビールをセルフで、日本酒「秋鹿」を辛口からにごりまで手ごろに (2025年9月)・おでん豆腐100円、魚のすり身の揚げ物 (2025年9月)、店で買えるつまみや軽食 (2025年)',
    neighborhood: '東洞院、三条の南',
    gf_detail: '要確認。日本酒、ビール、焼酎に、おでん豆腐や魚のすり身の揚げ物などのつまみ。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: '要確認。飲み物と店のつまみ。おでんはふつう出汁を使う (口コミ)。',
    notes: '[角打ち・東洞院三条、酒屋の立ち飲み] 京都の古い酒屋の奥にある昭和レトロな飲み場。レジで会計して冷蔵庫の瓶ビールや店の日本酒を、100円のおでん豆腐をつまみに、地元の人にまじって立ち飲みや奥の席で。現金のみ、日曜休み。',
  });
}

// ================================================================ 直心房 さいき
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26014611/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kyoto-saiki.com/';
  const H = day(['11:30', '14:30']);
  put({
    id: 'kyoto_jikishinbo_saiki', name: '直心房 さいき (Jikishinbo Saiki)', category: 'OMNI',
    lat: 35.001486477877584, lng: 135.7780811303141, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki with dashi, ponzu and tsukudani; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based kaiseki with sashimi (reviews).',
    hours_raw: '11:30–14:30 (last order 13:30) daily (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money; no table charge (Tabelog). 25 seats: an 8-seat counter and tables for 17; non-smoking (Tabelog). Accommodating with dietary requests — raw dishes were swapped for a pregnant guest (March 2025). Takeaway dishes are offered (official site). Just south of the Yasaka Shrine torii (Tabelog; official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Below the Yasaka Shrine torii',
    cuisine: 'Kyoto cuisine lunch courses in the classic style, built on a fragrant dashi (2025–2026 reviews) · a spring course of sashimi with ponzu and tsukudani, rice and dessert, no fried course (March 2025) · handmade nori; careful pacing (November 2026) · takeaway dishes (official site) · about ¥8,000–10,000 a head (March 2025)',
    website: SITE, gmaps: gm('直心房 さいき 八坂'), menu_url: TB,
    notes: "[Kaiseki · below Yasaka Shrine, a dashi-led lunch] A calm lunch-only Kyoto-cuisine room just below the Yasaka Shrine gate, cooked by a chef with a doctorate in the science of food aroma: deep, fragrant dashi, handmade nori and gently paced courses. Lunch daily; book ahead.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'A Kyoto-cuisine restaurant reviewed since 2010 (Tabelog). A November 2026 reviewer writes that the chef studied the science of aroma in food at graduate school and holds a Ph.D. in the field, yet cooks Japanese cuisine in its purest form.',
      philosophy: null,
      specialty: 'Dashi; seasonal Kyoto courses.',
      anecdotes: [
        { text: 'A March 2025 guest who was pregnant had raw dishes replaced, and the kitchen set sashimi aside for the rice course.', source: R + 'B504279841/' },
        { text: 'A November 2026 well-travelled diner wrote that the only regret was not finding it sooner — even the nori is handmade.', source: R + 'B538467875/' },
      ],
      japanese_sources_summary: '公式サイト: 京料理 直心房さいき、京都府京都市東山区八坂鳥居前下ル上弁天町443-1、お持ち帰り料理の案内。食べログ: 直心房 さいき、日本料理、毎日 11:30〜14:30 (L.O.13:30)、カード可、電子マネー不可、チャージなし、25席 (カウンター8、テーブル17)、禁煙。口コミ (2010〜2026年、英語): 春のコース、妊娠中で生ものを避けたいという希望に対応、刺身をポン酢と佃煮で、揚げ物はなし、香り高い出汁、手作りの海苔、大学院で食の香りの科学を学び博士号を持つ料理人、1人8,000〜10,000円ほど。',
      confidence: 'low', sources: [SITE, TB, R + 'B504279841/', R + 'B538467875/'] },
    cultural_comfort: { level: 'japanese', note: 'Lunch only; dietary requests considered.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂鳥居前下ル上弁天町443-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.001486, 135.778081); cross-checked: GSI 京都府京都市東山区上弁天町443番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published prices; a March 2025 review reports about ¥8,000–10,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Seasonal lunch course', '', 'Courses', 'ask', 'no', '', 'lunch'),
    ] }, {
    cuisine: '香り高い出汁を軸にした昔ながらの京料理の昼のコース (2025〜2026年の口コミ)・春のコースは刺身をポン酢と佃煮で、ご飯、甘味、揚げ物はなし (2025年3月)・手作りの海苔、ていねいな間合い (2026年11月)・持ち帰りの料理 (公式サイト)・1人8,000〜10,000円ほど (2025年3月)',
    neighborhood: '八坂神社の鳥居前',
    gf_detail: '要確認。出汁、ポン酢、佃煮の京料理。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身もある出汁の会席 (口コミ)。',
    notes: '[会席・八坂神社の鳥居前、出汁の昼] 八坂神社の鳥居のすぐ下の、昼だけの落ち着いた京料理。食の香りの研究で博士号を持つ料理人の、深く香る出汁、手作りの海苔、ゆったりしたコース。昼は毎日、予約を。',
  });
}

// ================================================================ 居酒屋 元気
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004117/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_izakaya_genki_sanjo', name: '居酒屋 元気 (Izakaya Genki)', category: 'OMNI',
    lat: 35.0084304878679, lng: 135.76153016039586, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oden, kara-age, chicken cutlet, pizza and kasujiru; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden, fried chicken and pork miso soup (reviews).',
    hours_raw: 'Lunch 11:30–14:00 and dinner 17:00–23:00 Monday–Friday (Tabelog); weekends are not given. Otoshi ¥300 (Tabelog). Cards and e-money (Tabelog). 34 seats; parties up to 34; smoking allowed; a large TV for watching sports (Tabelog; April 2025). Order by QR code (February 2025). Plaza Column Building B1F on Sanjo east of Higashinotoin, near Karasuma-Oike (Tabelog; March 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo, east of Higashinotoin',
    cuisine: 'Spacious basement izakaya with a café-like feel (February 2025) · lunch sets about ¥950: kara-age with pork miso soup and salad; “angry” chicken cutlet with tomato sauce (March 2025) · oden, salad, pizza, kasujiru, fried octopus (2025) · busy with groups; a big screen for sports (April 2025)',
    website: null, gmaps: gm('居酒屋 元気 三条 東洞院'), menu_url: TB,
    notes: "[Izakaya · Sanjo near Karasuma-Oike, lunch sets and oden] A roomy basement izakaya with good-value weekday lunch sets (about ¥950) and evening oden, pizza and kasujiru, ordered by QR code; a big screen for sports. Smoking allowed; ¥300 otoshi.",
    chef_bio: { chef_name: null, roles: ['Not named'], origin: null,
      background: 'Reviewers (2025–2026) describe a spacious, calm basement izakaya that fills with groups, with QR-code ordering and big-screen sports.',
      philosophy: null,
      specialty: 'Oden; lunch sets.',
      anecdotes: [
        { text: 'A February 2025 group ordered oden, salad, pizza and kasujiru by QR code.', source: R + 'B501683552/' },
        { text: 'A March 2025 newcomer to Kyoto had a ¥950 lunch of kara-age, pork miso soup and salad.', source: R + 'B503800399/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋 元気、居酒屋・創作料理、京都市中京区三条通東洞院東入ル プラザコラムビルB1F、月〜金 11:30〜14:00、17:00〜23:00、お通し300円 (税込み)、カード・電子マネー可、34席、喫煙可。口コミ (2025〜2026年、英語): 地下で入口がわかりにくい、カフェのような落ち着いた広い店内、QRコードで注文、おでん、サラダ、ピザ、粕汁、たこの唐揚げ、ランチの唐揚げ・豚汁・サラダ950円、トマトソースのチキンカツ定食、団体客でにぎわう、大画面でスポーツ観戦。',
      confidence: 'low', sources: [TB, R + 'B501683552/', R + 'B502882821/', R + 'B503800399/', R + 'B504591403/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通東洞院東入ル プラザコラムビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through 2026.' },
    pin_source: `Tabelog ${TB} (35.008430, 135.761530); cross-checked: GSI 京都府京都市中京区菱屋町36番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B503800399/'],
    price_note: 'Lunch price from a March 2025 review; ¥300 otoshi at dinner.', last_checked: TODAY, items: [
      it('', '', 'Kara-age lunch set with pork miso soup and salad', '¥950', 'Lunch', 'no', 'no', 'March 2025.', 'karaage_lunch'),
      it('', '', 'Oden', '', 'Oden', 'ask', 'no', '', 'oden'),
    ] }, {
    cuisine: 'カフェのような落ち着いた広い地下の居酒屋 (2025年2月)・950円ほどのランチ、唐揚げに豚汁とサラダ、トマトソースのチキンカツ (2025年3月)・おでん、サラダ、ピザ、粕汁、たこの唐揚げ (2025年)・団体客でにぎわい、大画面でスポーツ観戦 (2025年4月)',
    neighborhood: '三条、東洞院の東',
    gf_detail: '要確認。おでん、唐揚げ、チキンカツ、ピザ、粕汁。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。おでん、唐揚げ、豚汁 (口コミ)。',
    notes: '[居酒屋・三条の烏丸御池近く、ランチとおでん] 広い地下の居酒屋。平日は950円ほどのお得なランチ、夜はおでん、ピザ、粕汁をQRコードで注文。大画面でスポーツも。喫煙可、お通し300円。',
  });
}

// ================================================================ 花
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040327/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://hana-cheesecake.jp/';
  const H = day(['11:30', '18:00']);
  put({
    id: 'kyoto_hana_souffle_cheesecake', name: '花 (Hana)', category: 'OMNI',
    lat: 35.00635772350443, lng: 135.77788718221709, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soufflé cheesecake with cream; ingredients are not listed (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cheesecake and whipped cream (reviews).',
    hours_raw: 'Shop and café 11:30–18:00, last order 17:30 (official site); Tabelog gives opening times that vary by day, from 11:00 to 13:00, with 18:00 closing. Cards and e-money (Tabelog). 18 seats, including a counter facing the Shirakawa; non-smoking (Tabelog; 2025 reviews). On Higashioji by the Chion-in-mae bus stop, overlooking the Shirakawa (official site; 2025 reviews). Online shop for cheesecakes (official site). Opened 6 October 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama, Higashioji by the Shirakawa',
    cuisine: 'Soufflé-cheesecake café produced by flower artist TAKAYA, cakes decorated with edible flowers (official site; 2025–2026 reviews) · original cheesecake ¥1,100; herbal tea ¥1,100 (April 2025) · rich whipped cream with the cake (November 2025) · original blend coffee “Hana” (March and June 2026)',
    website: SITE, gmaps: gm('花 Souffle Cheesecake 京都 東大路'), menu_url: SITE,
    notes: "[Café · Higashioji by the Shirakawa, flower cheesecake] A blue-fronted café by the Chion-in bus stop where flower artist TAKAYA’s soufflé cheesecakes come dressed in edible flowers; the counter looks over the Shirakawa and its ducks. Cheesecake ¥1,100; pricey but pretty.",
    chef_bio: { chef_name: null, roles: ['Produced by flower artist TAKAYA (official site)'], origin: null,
      background: 'A soufflé-cheesecake shop and café opened in October 2023 (Tabelog), produced by the flower artist TAKAYA, who chooses its ingredients (official site; June 2026 review).',
      philosophy: 'Give a flower cheesecake as you would give flowers (official site).',
      specialty: 'Soufflé cheesecake with edible flowers.',
      anecdotes: [
        { text: 'An April 2025 visitor took the original cheesecake and a herbal tea at the counter over the Shirakawa.', source: R + 'B508758670/' },
        { text: 'A November 2025 birthday visit watched ducks gather at the bend of the river.', source: R + 'B517393874/' },
        { text: 'A March 2026 guest found the original blend coffee as refined as the cake.', source: R + 'B524847437/' },
      ],
      japanese_sources_summary: '公式サイト: 花 - Souffle Cheesecake KYOTO、花を贈るように花のチーズケーキを贈る、花結い師TAKAYAの感性で選んだ食材の「花」のスフレチーズケーキ、オンラインショップ、京都市東山区東大路通下ル松原町294、SHOP/CAFE 11:30〜18:00 (17:30 L.O.)。食べログ: 花、ケーキ・カフェ、曜日により11:00〜13:00開店、18:00閉店、カード・電子マネー可、18席、禁煙、2023年10月6日オープン。口コミ (2024〜2026年、英語): 知恩院前のバス停の前、白川を望むカウンター、エディブルフラワーのチーズケーキ、オリジナルのチーズケーキ1,100円、ハーブティー1,100円、ミルク感の濃いホイップクリーム、オリジナルブレンドコーヒー「花」、青い外観、鴨、観光地価格という声も。',
      confidence: 'medium', sources: [SITE, TB, R + 'B508758670/', R + 'B509281191/', R + 'B517393874/', R + 'B524847437/', R + 'B530271022/', R + 'B535671938/'] },
    cultural_comfort: { level: 'none_needed', note: 'Order at the counter; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区東大路通下ル松原町294',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006358, 135.777887); cross-checked: GSI 京都府京都市東山区松原町294番地 (lot) 78m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508758670/'],
    price_note: 'Prices from an April 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Original soufflé cheesecake', '¥1,100', 'Cakes', 'ask', 'no', 'April 2025.', 'cheesecake'),
      it('', '', 'Herbal tea', '¥1,100', 'Drinks', 'gf', 'vegan', 'April 2025.', 'tea'),
      it('', '', 'Original blend coffee “Hana”', '', 'Drinks', 'gf', 'vegan', '', 'coffee'),
    ] }, {
    cuisine: '花結い師TAKAYAプロデュースのスフレチーズケーキのカフェ、エディブルフラワーで飾るケーキ (公式サイト、2025〜2026年の口コミ)・オリジナルのチーズケーキ1,100円、ハーブティー1,100円 (2025年4月)・ミルク感の濃いホイップクリーム (2025年11月)・オリジナルブレンドコーヒー「花」(2026年3月、6月)',
    neighborhood: '東山、白川沿いの東大路',
    gf_detail: '要確認。クリームを添えたスフレチーズケーキ。原材料は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。チーズケーキとホイップクリーム (口コミ)。',
    notes: '[カフェ・東大路の白川沿い、花のチーズケーキ] 知恩院前のバス停そばの青い外観のカフェ。花結い師TAKAYAのスフレチーズケーキはエディブルフラワーで飾られ、カウンターからは白川と鴨が見える。チーズケーキは1,100円、値段は高めだが美しい。',
  });
}

save();
